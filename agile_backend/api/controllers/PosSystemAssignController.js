const PosSystemAssignRepo = require('../repositories/posSystemAssignRepo');
const VisitorRepo = require('../repositories/visitorRepo');
const InventoryRepo = require('../repositories/inventoryRepo');
const BillGenrationRepo = require('../repositories/billGenerationRepo');
const IncomeRepo = require('../repositories/IncomeRepo');
const dateFormat = require('dateformat');
const utility = require('../services/utility');
const { exists } = require('grunt');

const commonLocationId = sails.config.custom.cafeId;




// var moment = require('moment');
/**
 * PosSystemAssignController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    //TypeOfService, Purpose and Duration is comma separated string values
    async create(req, res) {
        try {
            const {
                id,
                transactionId,
                pcNo,
                assignTo,
                userId,
                typeOfService,
                foodOption,
                xeroxOption,
                totalHours,
                location,
                status,
                timeLeft,
                purpose,
                fee,
                hours,
                minutes,
                training,
                createdBy
            } = req.body;

            var startTime = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            var getendTime = new Date(startTime)
            getendTime.setHours(getendTime.getHours() + parseInt(hours));
            getendTime.setMinutes(getendTime.getMinutes() + parseInt(minutes));
            getendTime = dateFormat(getendTime, "isoDateTime");
            var endTime = dateFormat(getendTime, "yyyy-mm-dd HH:MM:ss");

            var duration = hours + ':' + minutes;
            var fees = 0;

            const visitorActivity = await VisitorRepo.getOne(assignTo);
            var ismember = visitorActivity.isMember;

            /* check whether User PC which is already assigned same user  */

            var AlreadyAssigned = await PosSystemAssignRepo.checkUserAlreadyAssigned(assignTo);
            if (!!AlreadyAssigned.length) {
                return res.status(202).json({
                    message: "The user is already assigned"
                });
            }

            /* get amount details */
            const feeDetail = await BillGenrationRepo.getOneBill(location, ismember);
            if (feeDetail) {
                var browsePerhours = feeDetail.browsePerhours;
                var amountforMin = 60 / minutes;
                var calculateFees = browsePerhours / amountforMin;
                fees = parseFloat(hours) * browsePerhours + parseFloat(calculateFees);
            }

            console.log(fees, 'fees')

            const purposeVal = req.body.purpose;
            var assignedData = await PosSystemAssignRepo.create({
                pcNo,
                transactionId,
                assignTo,
                userId,
                typeOfService,
                duration: duration,
                hours,
                minutes,
                startTime: startTime,
                endTime: endTime,
                totalHours: duration,
                location,
                status,
                timeLeft: '00:00:00',
                purpose: purposeVal,
                fee: fees,
                training,
                createdBy
            });
            if (!!assignedData) {

                if (!!foodOption) {

                    if (foodOption.length > 1) {
                        for (const food of foodOption) {
                            await PosSystemAssignRepo.createPosFood({
                                possystemassign: assignedData.id,
                                foodbeverage: food,
                                node: 1,
                                status: 1,
                                location: location,
                            }, ismember)
                        }
                    } else {
                        await PosSystemAssignRepo.createPosFood({
                            possystemassign: assignedData.id,
                            foodbeverage: foodOption[0],
                            node: 1,
                            status: 1,
                            location: location,
                        }, ismember)
                    }
                }

                if (!!xeroxOption) {
                    if (xeroxOption.length) {
                        for (const serviceData of xeroxOption) {
                            if (serviceData.id) {
                                const responseData = await PosSystemAssignRepo.createPosService({
                                    possystemassign: assignedData.id,
                                    serviceId: serviceData.id,
                                    node: serviceData.qty,
                                    status: 1,
                                    location: location,
                                }, ismember)
                            }
                        }
                    }
                }

                await InventoryRepo.updateSystemStatus(pcNo, {
                    status: 2
                });
                return res.status(200).json({
                    message: "created Successfully"
                });
            }
            return res.status(202).json({
                message: "Bad Request"
            });
        } catch (error) {
            res.send(error);
        }
    },

    async getOne(req, res) {
        try {
            const {
                posId
            } = req.params;
            var pos = await PosSystemAssignRepo.getOne(posId);

            if (!!pos) {
                const activeSystem = await PosSystemAssignRepo.getSystemNameById(pos.pcNo);

                if (!!activeSystem) {
                    pos.activePcName = activeSystem.systemId;
                }

                for (const list of pos.foodDetails) {
                    if (list.foodbeverage) {
                        var foodlist = await PosSystemAssignRepo.getPosFood(list.foodbeverage);
                        list.foodbeverage = foodlist;
                    }
                }
                for (const list of pos.serviceDetails) {
                    if (list.serviceId) {
                        var servicelist = await PosSystemAssignRepo.getPosService(list.serviceId);
                        list.service = servicelist;
                    }
                }

                pos.timeLeft = getTimeLeftinSeconds(pos.endTime)

                var bill = [];

                if (pos.assignTo.isMember) {
                    bill = await BillGenrationRepo.getOneRec(pos.location, 1);
                } else {
                    bill = await BillGenrationRepo.getOneRec(pos.location, 0);
                }

                pos.gtsValue = bill.GstRate;
                pos.servicevalue = parseFloat(bill.serviceCharge);
                pos.browsePerhours = bill.browsePerhours;

                locationName =  await PosSystemAssignRepo.getLocation(pos.location);

                pos.location = (locationName) ? locationName.location : pos.location;

                return res.status(200).json(pos);
            }
            return res.status(403).json({
                message: 'Not found'
            });
        } catch (error) {
            return res.send(error);
        }
    },
    async getOneUser(req, res) {
        try {
            var items = [];
            const {
                posId
            } = req.params;
            const pos = await PosSystemAssignRepo.getOneUser(posId);
            if (!!pos) {

                for (var d of pos) {
                    const bill = await BillGenrationRepo.getOne(d.location);
                    d.gtsValue = bill[0].GstRate;
                    d.servicevalue = bill[0].ServiceChargeRate;
                    d.browsePerhours = bill[0].browsePerhours;
                    items.push(d);
                }
                return res.status(200).json(items);
            }
            return res.status(202).json({
                message: 'Not found'
            });
        } catch (error) {
            return res.send(error);
        }
    },

    async getByUser(req, res) {
        try {
            const {
                posId
            } = req.params;
            let result = await PosSystemAssignRepo.getByUser(posId);
            if (!!result) {
                return res.status(200).json(result);
            }
            return res.notFound();
        } catch (error) {
            res.send(error);
        }
    },

    async update(req, res) {
        try {
            var foodOption = req.body.foodOption;
            var servicesOption = req.body.xeroxOption;
            var visitorId = req.body.assignTo;

            const {
                posAssingId
            } = req.params;
            delete req.body.hours;
            delete req.body.minutes;
            delete req.body.duration;
            delete req.body.pcNo;
            delete req.body.assignTo;
            delete req.body.totalHours;
            delete req.body.transactionId;


            const visitorActivity = await VisitorRepo.getOne(visitorId);
            var checkVisitorisMember = visitorActivity.isMember;


            const Pos = await PosSystemAssignRepo.update(posAssingId, req.body);
            if (!!Pos) {
                var updatefoodStatus = await PosSystemAssignRepo.updatePosfoodStatus(posAssingId)
                if (foodOption) {
                    if (foodOption.length > 1) {
                        for (const food of foodOption) {
                            await PosSystemAssignRepo.createPosFood({
                                possystemassign: posAssingId,
                                foodbeverage: food,
                                node: 1,
                                location: req.body.location,
                            }, checkVisitorisMember)
                        }
                    } else {
                        await PosSystemAssignRepo.createPosFood({
                            possystemassign: posAssingId,
                            foodbeverage: foodOption[0],
                            node: 1,
                            location: req.body.location,
                        }, checkVisitorisMember)
                    }
                }
                var updateServiceStatus = await PosSystemAssignRepo.updatePosServiceStatus(posAssingId)
                if (!!servicesOption) {
                    if (servicesOption.length) {
                        for (const serviceData of servicesOption) {
                            if (serviceData.id) {
                                await PosSystemAssignRepo.createPosService({
                                    possystemassign: posAssingId,
                                    serviceId: serviceData.id,
                                    node: serviceData.qty,
                                    status: 1,
                                    location: req.body.location,
                                }, checkVisitorisMember)
                            }
                        }
                    }
                }

                return res.status(200).json({
                    message: "PosAssigned updated successfully"
                });
            }
            return res.status(403).json({
                message: 'Something went wrong'
            });
        } catch (error) {
            return res.send(error);
        }
    },

    async getAll(req, res) {
        console.log("test")
        try {
            const {
                page,
                limit
            } = req.query;
            const pos = await PosSystemAssignRepo.getAll(page || 1, limit || "");
            if (!!pos) {
                for (const data of pos) {
                    data.timeLeft = getTimeLeftinSeconds(data.endTime)
                    if (data.foodDetails) {
                        for (const list of data.foodDetails) {
                            if (list.foodbeverage) {
                                var foodlist = await PosSystemAssignRepo.getPosFood(list.foodbeverage);
                                list.foodbeverage = foodlist;
                            }
                            if (list.amount) {
                                data.fee += parseFloat(list.amount);
                            }
                        }
                        for (const list of data.serviceDetails) {
                            if (list.serviceId) {
                                var servicelist = await PosSystemAssignRepo.getPosService(list.serviceId);
                                list.service = servicelist;
                            }
                            if (list.amount) {
                                data.fee += parseFloat(list.amount);

                            }
                        }
                    }
                }
                return res.status(200).json(pos);
            }
            return res.status(403).json({
                message: 'Something went wrong'
            });
        } catch (error) {
            return res.send(error);
        }
    },

    async getAllFoodUseage(req, res) {
        try {

            var result = 0;
            let results = await IncomeRepo.getAllIncomeLocation();
            if (!!results) {
                for (var food of results) {
                    result = result + food.foodUsage;
                }
                return res.status(200).json({
                    food: result
                });
            }
            return res.notFound();
        } catch (error) {
            res.send(error);
        }
    },
    async getAllPrintUseage(req, res) {
        try {
            var result = 0;
            let results = await IncomeRepo.getAllIncomeLocation();
            if (!!results) {
                for (var print of results) {
                    result = result + print.printUsage;
                }
                return res.status(200).json({
                    print: result
                });
            }
            return res.notFound();
        } catch (error) {
            res.send(error);
        }
    },
    async getAllSystemUseage(req, res) {
        try {
            var result = 0;
            let results = await IncomeRepo.getAllIncomeLocation();
            if (!!results) {
                for (var system of results) {
                    result = result + system.browesUsage;
                }
                return res.status(200).json({
                    system: result
                });
            }
            return res.notFound();
        } catch (error) {
            res.send(error);
        }
    },

    async getAllPOSReport(req, res) {
        try {
            const {
                fromdate,
                todate,
                location
            } = req.body;
            let allVisitors = await PosSystemAssignRepo.getAllPOSReport(fromdate, todate, location);
            if (!!allVisitors) {
                for (var d of pos) {
                    const bill = await BillGenrationRepo.getOne(d.location);
                    d.gtsValue = bill[0].GstRate;
                    d.servicevalue = bill[0].ServiceChargeRate;
                    d.browsePerhours = bill[0].browsePerhours;
                    items.push(d);
                }

                return res.status(200).json(items);
            }
            return res.notFound();
        } catch (error) {
            res.send(error);
        }
    },
    async getRecentActive(req, res) {
        try {
            const {
                assignTo
            } = req.param;
            let allVisitors = await PosSystemAssignRepo.getRecentActive(assignTo);
            if (!!allVisitors) {
                var dateOnly = allVisitors.reduce((a, b) => {
                    return new Date(a.startTime) > new Date(b.startTime) ? a : b;
                })
                const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
                const firstDate = new Date(dateOnly.startTime);
                const secondDate = new Date();
                var diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
                if (diffDays === 0) {
                    diffDays = "Today";
                } else {
                    diffDays = `${diffDays}Days`;
                }
                return res.status(200).json(diffDays);
            }
            return res.status(202).json({
                message: 'Data not found'
            });
        } catch (error) {
            res.send(error);
        }
    },

    async getTotalHours(req, res) {
        try {
            var totalhours = 0;
            const {
                assignTo
            } = req.param;
            let getTotalHours = await PosSystemAssignRepo.getTotalHours(assignTo);
            if (!!getTotalHours) {
                for (var data of getTotalHours) {
                    var add_hoursMin = parseInt(data.hours) + parseInt(data.minutes);
                    totalhours += add_hoursMin;
                }

                return res.status(200).json(utility.time_convert(totalhours));
            }
            return res.status(202).json({
                message: 'Data not found'
            });
        } catch (error) {
            res.send(error);
        }
    },



    async getFoodUseage(req, res) {
        try {
            const {
                locationId
            } = req.params;
            var result = 0;
            let results = await IncomeRepo.getOneLocation(locationId);
            if (!!results) {
                for (var food of results) {
                    result = result + food.foodUsage;
                }
                return res.status(200).json({
                    food: result
                });
            }
            return res.notFound();
        } catch (error) {
            res.send(error);
        }
    },
    async getPrintUseage(req, res) {
        try {
            const {
                locationId
            } = req.params;
            var result = 0;
            let results = await IncomeRepo.getOneLocation(locationId);
            if (!!results) {
                for (var print of results) {
                    result = result + print.printUsage;
                }
                return res.status(200).json({
                    print: result
                });
            }
            return res.notFound();
        } catch (error) {
            res.send(error);
        }
    },
    async getSystemUseage(req, res) {
        try {
            const {
                locationId
            } = req.params;
            var result = 0;
            let results = await IncomeRepo.getOneLocation(locationId);
            if (!!results) {
                for (var system of results) {
                    result = result + system.browesUsage;
                }
                return res.status(200).json({
                    system: result
                });
            }
            return res.notFound();
        } catch (error) {
            res.send(error);
        }
    },
    async topUp(req, res) {
        try {
            const {
                posAssignId
            } = req.params;
            const {
                hours,
                minutes
            } = req.body;
            const pos = await PosSystemAssignRepo.getOne(posAssignId);
            if (!!pos) {
                var calHourse = parseInt(hours) + parseInt(pos.hours);
                var calMinutes = parseInt(minutes) + parseInt(pos.minutes);
                var totHourse = Math.round(calHourse + calMinutes / 60);
                var totalMinutes = Math.round(calMinutes % 60);
                const visitorActivity = await VisitorRepo.getOne(pos.assignTo.id);
                var ismember = visitorActivity.isMember;
                const feeDetail = await BillGenrationRepo.getOneBill(pos.location, ismember);
                if (!!feeDetail) {
                    var browsePerhours = feeDetail.browsePerhours;
                    var amountforMin = 60 / totalMinutes;
                    var calculateFees = browsePerhours / amountforMin;
                    fees = parseInt(totHourse) * browsePerhours + parseInt(calculateFees);
                }

                var startTime = dateFormat(pos.startTime, "yyyy-mm-dd HH:MM:ss");
                var getendTime = new Date(startTime)
                getendTime.setHours(getendTime.getHours() + parseInt(totHourse));
                getendTime.setMinutes(getendTime.getMinutes() + parseInt(totalMinutes));
                getendTime = dateFormat(getendTime, "isoDateTime");
                var endTime = dateFormat(getendTime, "yyyy-mm-dd HH:MM:ss");

                if (totHourse < 10) totHourse = "0" + totHourse;
                if (totalMinutes < 10) totalMinutes = "0" + totalMinutes;
                var duration = totHourse + ':' + totalMinutes;
                var payload = {
                    duration: duration,
                    hours: totHourse,
                    minutes: totalMinutes,
                    totalHours: duration,
                    fee: fees,
                    endTime: endTime
                }
                let results = await PosSystemAssignRepo.topUp(posAssignId, payload);
                if (!!results) {
                    return res.status(200).json({
                        list: results
                    });
                }
            }
            return res.notFound();
        } catch (error) {
            res.send(error);
        }
    },

    async changePc(req, res) {
        const {
            id
        } = req.params
        const {
            newsystemId,
            oldsystemId
        } = req.body
        const list = await PosSystemAssignRepo.getOne(id);
        if (!!list) {
            const Posupdate = await PosSystemAssignRepo.update(id, {
                pcNo: newsystemId
            });
            if (!!Posupdate) {
                await PosSystemAssignRepo.update(id, {
                    pcNo: newsystemId
                });
                await InventoryRepo.updateSystemStatus(oldsystemId, {
                    status: 1
                });
                await InventoryRepo.updateSystemStatus(newsystemId, {
                    status: 2
                });
                return res.status(200).json({
                    message: 'updated successfully'
                });
            }
        }
        return res.notFound();
    },

    async posendsession(req, res) {
        const {
            id
        } = req.params
        const list = await PosSystemAssignRepo.getOne(id);
        if (!!list) {
            const Posupdate = await PosSystemAssignRepo.posendsession(id, req.body);
            await InventoryRepo.updateSystemStatus(list.pcNo, {
                status: 1
            });
            if (!!Posupdate) {
                return res.status(200).json({
                    message: 'updated successfully'
                });
            }
        }
        return res.notFound();
    },


    async getAllposSystemAssignList(location) {
        try {
            const list = await PosSystemAssignRepo.getAllposSystemAssignList(location);
            if (list) {
                return list;
            }
            return {
                message: 'Something went wrong'
            };
        } catch (error) {
            return error;
        }
    },


    async getAllPosfoodList(location) {
        try {
            const list = await PosSystemAssignRepo.getAllPosfoodList(location);
            if (list) {
                return list;
            }
            return {
                message: 'Something went wrong'
            };
        } catch (error) {
            return error;
        }
    },


    /* food service */
    async getAllPosserviceList(location) {
        try {
            const list = await PosSystemAssignRepo.getAllPosserviceList(location);
            if (list) {
                return list;
            }
            return {
                message: 'Something went wrong'
            };
        } catch (error) {
            return error;
        }
    },


    async posAssignPcByNric(req, res) {
        try {
            const {
                data
            } = req.params;
            var visitor = await VisitorRepo.getvisitorNricno(data);
            var responseData = {};

            /*** Checking the member is expired or not. ***/
            if (!visitor) {
                return res.status(200).json({
                    message: 'No data found. Please check the NRIC Number Registred with the visitor account',
                    membershipFlag: 3
                });

            } else {
                /* check whether User PC which is already assigned same user  */
                var alreadyAssigned = await PosSystemAssignRepo.checkUserAlreadyAssigned(visitor.id);
                if (alreadyAssigned.length) {
                    return res.status(202).json({
                        message: data + " is already assigned to PC",
                        membershipFlag: 4
                    });
                } else {

                    /*findout nth membership plan  */
                    /**
                     * 0- NON MEMBERSHIP
                     * 1 -ACTIVE
                     * 2 - MEMBERSHIP EXPIRED
                     * 3 - NO RESULTS FOUND
                     * 4 - Already Assigend pc
                     * */
                    let membership = await VisitorRepo.memberShipPlanByVisitor(visitor.id);
                    /* checking membership is expired */
                    responseData.name = visitor.name;
                    responseData.nrciNo = visitor.nrciNo;
                    responseData.userId = visitor.id;
                    responseData.isMember = visitor.isMember;
                    if (membership.length) {
                        var todayDate = dateFormat(new Date(), 'isoDate');
                        var expiryDate = dateFormat(new Date(membership[0].membership_to), 'isoDate');
                        responseData.membership_from = dateFormat(new Date(membership[0].membership_from), 'isoDate');
                        responseData.membership_to = expiryDate;
                        if (membership[0].type == '1') {
                            responseData.type = 'Registartion';

                        } else if (membership[0].type == '2') {
                            responseData.type = 'Renewal';
                        }
                        if (todayDate > expiryDate) {
                            responseData.membershipFlag = 2;
                            responseData.membershipStatus = 'MEMBERSHIP IS EXPIRED';
                        } else {
                            responseData.membershipFlag = 1;
                            responseData.membershipStatus = 'MEMBERSHIP IS ACTIVE';
                        }
                    } else {
                        responseData.membershipFlag = 0;
                        responseData.membershipStatus = 'NON MEMBERSHIP';
                    }
                    return res.status(200).json(responseData);
                }

            }
        } catch (error) {
            res.serverError(error);
        }
    },

    /* POSMANAGENT STAFF SERVICE */

    async createStaffService(req, res) {
        try {
            const visitorActivity = await VisitorRepo.getOne(req.body.userId);
            if (visitorActivity) {
                var ismember = visitorActivity.isMember;
                if (!req.body.xeroxOption || req.body.xeroxOption.length <= 0) {
                    return res.status(200).json({
                        status: "ERROR",
                        message: "Other service data is empty"
                    });
                }

                const storeStaffService = await PosSystemAssignRepo.createStaffService({
                    userId: req.body.userId,
                    transactionId: req.body.transactionId,
                    location: req.body.location,
                    createdBy: req.body.createdBy
                })

                if (storeStaffService) {
                    if (req.body.xeroxOption && req.body.xeroxOption.length) {
                        for (const serviceData of req.body.xeroxOption) {
                            if (serviceData.id) {
                                await PosSystemAssignRepo.createStaffServiceDetails(ismember, {
                                    qty: serviceData.qty,
                                    printout_Id: serviceData.id,
                                    posstaffserviceId: storeStaffService.id,
                                    location: req.body.location
                                });
                            }
                        }
                    }
                }

                if (storeStaffService) {
                    return res.status(200).json({
                        status: "SUCCESS",
                        message: "Staff service created successfully",
                        recordId: storeStaffService.id
                    });
                }
            } else {
                return res.status(200).json({
                    status: "ERROR",
                    message: "No data found. Please check the NRIC Number Registred with the visitor account"
                });

            }
        } catch (error) {
            res.send(error);
        }
    },

    async getStaffService(req, res) {
        try {
            const { id } = req.params;
            let result = await PosSystemAssignRepo.getStaffService(id);
            // doing it for no time purpose
            const userId = result[0].posstaffserviceId.userId;
            const visitorActivity = await VisitorRepo.getOne(userId);
            var ismember = visitorActivity.isMember;
            const feeDetail = await BillGenrationRepo.getOneBill(commonLocationId, ismember);

            if (!!result) {
                return res.status(200).json({
                    userDetails: visitorActivity,
                    'gstvalue': feeDetail.SgstRate + feeDetail.GstRate,
                    'servicevalue': feeDetail.serviceCharge,
                    'serviceDetails': result
                });
            }
            return res.notFound();
        } catch (error) {
            res.send(error);
        }
    }

};


function getTimeLeftinSeconds(endtime) {

    if (Date.parse(new Date(endtime)) < Date.parse(new Date())) {
        return '0';
    } else {
        var inseconds = 0
        var calculateTime = Math.abs(new Date(endtime) - new Date()) / 1000;
        var minutes = Math.floor(calculateTime / 60) % 60;
        calculateTime -= minutes * 60;
        var hours = Math.floor(calculateTime / 3600) % 24;
        calculateTime -= hours * 3600;
        inseconds += (hours * 60) * 60;
        inseconds += minutes * 60;

        return inseconds + 60;
    }
}
