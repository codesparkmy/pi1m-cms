const PosSystemAssignRepo = require("../repositories/posSystemAssignRepo");
const VisitorRepo = require("../repositories/visitorRepo");
const InventoryRepo = require('../repositories/inventoryRepo');
const BillGenrationRepo = require("../repositories/billGenerationRepo");
const IncomeRepo = require("../repositories/IncomeRepo");
const dateFormat = require('dateformat');

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
            const
                {
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
                    training
                } = req.body;

            var startTime = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            var getendTime = new Date(startTime)
            getendTime.setHours(getendTime.getHours() + parseInt(hours));
            getendTime.setMinutes(getendTime.getMinutes() + parseInt(minutes));
            getendTime = dateFormat(getendTime, "isoDateTime");
            var endTime =  dateFormat(getendTime, "yyyy-mm-dd HH:MM:ss");
            
            var duration = hours +':'+ minutes;
            var fees = 0;
            
            const visitorActivity = await VisitorRepo.getOne(assignTo);
            var ismember = visitorActivity.isMember;
            const feeDetail = await BillGenrationRepo.getOneBill(location, ismember);
            if (feeDetail) {
                var browsePerhours = feeDetail.browsePerhours;
                var amountforMin = 60 / minutes;
                var calculateFees = browsePerhours / amountforMin;
                fees = parseInt(hours) * browsePerhours + parseInt(calculateFees);
            } 
            
            const purposeVal= req.body.purpose;
            var assignedData = await PosSystemAssignRepo.create({
                pcNo,
                transactionId,
                assignTo,
                userId,
                typeOfService,
                duration:duration,
                hours,
                minutes,
                startTime : startTime,
                endTime :  endTime,
                xeroxOption : String(xeroxOption),
                foodOption : String(foodOption),
                totalHours: duration,
                location,
                status,
                timeLeft: '00:00:00',
                purpose: purposeVal,
                fee: fees,
                training
            });
            if (!!assignedData) {
                
                if(!!foodOption) { 
                   
                    if(foodOption.length > 1) {
                        for (const food of foodOption) {
                            await PosSystemAssignRepo.createPosFood({
                                possystemassign : assignedData.id,
                                foodbeverage : food,
                                node : 1,
                                status : 1,
                                location : location,
                            },ismember)
                        } 
                    } else {
                        await PosSystemAssignRepo.createPosFood({
                            possystemassign : assignedData.id,
                            foodbeverage : foodOption,
                            node : 1,
                            status : 1,
                            location : location,
                        },ismember)
                    }
                }

                if(!!xeroxOption) { 
                    if(xeroxOption.length > 1) {
                        for (const serviceId of xeroxOption) {
                        await PosSystemAssignRepo.createPosService({
                                possystemassign : assignedData.id,
                                serviceId : serviceId,
                                node : 1,
                                status : 1,
                                location : location,
                            },ismember)
                        } 
                    } else {
                        await PosSystemAssignRepo.createPosService({
                            possystemassign : assignedData.id,
                            serviceId : xeroxOption,
                            node : 1,
                            status : 1,
                            location : location,
                        },ismember)
                    }
                }

                
                await InventoryRepo.updateSystemStatus(pcNo, {status : 2});
                return res.status(200).json({ message: "created Successfully" });
            }
            return res.status(202).json({ message: "Bad Request" });
        } catch (error) {
            res.send(error);
        }
    },
    
    async getOne(req, res) {
        try {
            const { posId } = req.params;
            const pos = await PosSystemAssignRepo.getOne(posId);
            if (!!pos) {
                for (const list of pos.foodDetails) {
                    if(list.foodbeverage) {
                        var foodlist = await PosSystemAssignRepo.getPosFood(list.foodbeverage);
                        list.foodbeverage = foodlist;
                    }
                }
                for (const list of pos.serviceDetails) {
                    if(list.serviceId) {
                        var servicelist = await PosSystemAssignRepo.getPosService(list.serviceId);
                        list.service = servicelist;
                    }
                }

                pos.timeLeft = getTimeLeftinSeconds(pos.endTime)
                var bill = await BillGenrationRepo.getOne(pos.location);
                pos.gtsValue = bill[0].GstRate;
                pos.servicevalue = bill[0].ServiceChargeRate;
                pos.browsePerhours = bill[0].browsePerhours;
                return res.status(200).json(pos);
            }
            return res.status(403).json({ message: 'Not found' });
        } catch (error) {
            return res.send(error);
        }
    },
    async getOneUser(req, res) {
        try {
            var items = [];
            const { posId } = req.params;
            const pos = await PosSystemAssignRepo.getOneUser(posId);
            if (!!pos) {

                for (var d of pos) {
                    const bill = await BillGenrationRepo.getOne(d.location);
                    console.log(d);
                    d.gtsValue = bill[0].GstRate;
                    d.servicevalue = bill[0].ServiceChargeRate;
                    d.browsePerhours = bill[0].browsePerhours;
                    items.push(d);
                }
                return res.status(200).json(items);
            }
            return res.status(202).json({ message: 'Not found' });
        } catch (error) {
            return res.send(error);
        }
    },

    async getByUser(req, res) {
        try {
            const { posId } = req.params;
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
            const { posAssingId } = req.params;
            const visitorActivity = await VisitorRepo.getOne(req.body.assignTo);

            var duration =req.body.hours +':'+ req.body.minutes;
            var ismember = visitorActivity.isMember;
            var fees = 0;
            const feeDetail = await BillGenrationRepo.getOneBill(req.body.location, ismember);
            if (feeDetail) {
                var browsePerhours = feeDetail.browsePerhours;
                var amountforMin = 60 / req.body.minutes;
                var calculateFees = browsePerhours / amountforMin;
                fees = parseInt(req.body.hours) * browsePerhours + parseInt(calculateFees);
            } 
            req.body.duration = duration;
            req.body.totalHours = duration;
            req.body.fee = fees;
            const Pos = await PosSystemAssignRepo.update(posAssingId, req.body);
            if (Pos) {
                var deletepos = await PosSystemAssignRepo.updatePosfoodStatus(posAssingId)
                if(!!deletepos) {
                    if(req.body.foodOption) {
                        if(req.body.foodOption.length > 1) {
                            for (const food of req.body.foodOption) {
                            await PosSystemAssignRepo.createPosFood({
                                    possystemassign : posAssingId,
                                    foodbeverage : food,
                                    node : 1,
                                    location : req.body.location,
                                })
                            } 
                        } else {
                            await PosSystemAssignRepo.createPosFood({
                                possystemassign : posAssingId,
                                foodbeverage : req.body.foodOption,
                                node : 1,
                                location : req.body.location,
                            })
                        }   
                    }
                     
                }
                return res.status(200).json({ message: "PosAssigned updated successfully" });
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.send(error);
        }
    },

    async getAll(req, res) {
        try {
            const { page, limit } = req.query;
            const pos = await PosSystemAssignRepo.getAll(page || 1, limit || "");
            if (!!pos) {
                for (const data of pos) {
                        data.timeLeft = getTimeLeftinSeconds(data.endTime)
                        if(data.foodDetails) {
                            for (const list of data.foodDetails) {
                                if(list.foodbeverage) {
                                    var foodlist = await PosSystemAssignRepo.getPosFood(list.foodbeverage);
                                    list.foodbeverage = foodlist;
                                }
                            }
                            for (const list of data.serviceDetails) {
                                if(list.serviceId) {
                                    var servicelist = await PosSystemAssignRepo.getPosService(list.serviceId);
                                    list.service = servicelist;
                                }
                            }
                        }
                }
                return res.status(200).json(pos);
            }
            return res.status(403).json({ message: 'Something went wrong' });
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
                return res.status(200).json({ food: result });
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
                return res.status(200).json({ print: result });
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
                return res.status(200).json({ system: result });
            }
            return res.notFound();
        } catch (error) {
            res.send(error);
        }
    },

    async getAllPOSReport(req, res) {
        try {
            const { fromdate, todate, location } = req.body;
            let allVisitors = await PosSystemAssignRepo.getAllPOSReport(fromdate, todate, location);
            if (!!allVisitors) {
                for (var d of pos) {
                    const bill = await BillGenrationRepo.getOne(d.location);
                    console.log(d);
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
            const { assignTo } = req.param;
            let allVisitors = await PosSystemAssignRepo.getRecentActive(assignTo);
            if (!!allVisitors) {
                var dateOnly = allVisitors.reduce((a, b) => {
                    return new Date(a.startTime) > new Date(b.startTime) ? a : b;
                })
                const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
                const firstDate = new Date(dateOnly.startTime);
                const secondDate = new Date();
                var diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
                if (diffDays == 0) {
                    diffDays = "Today";
                } else {
                    diffDays = `${diffDays}Days`;
                }
                return res.status(200).json(diffDays);
            }
            return res.status(202).json({ message: 'Data not found' });
        } catch (error) {
            res.send(error);
        }
    },

    async getTotalHours(req, res) {
        try {
            var hours = 0;
            const { assignTo } = req.param;
            let allVisitors = await PosSystemAssignRepo.getTotalHours(assignTo);
            if (!!allVisitors) {
                for (var data of allVisitors) {
                    hours = hours + data.totalHours;
                }
                return res.status(200).json(hours);
            }
            return resstatus(202).json({ message: 'Data not found' });
        } catch (error) {
            res.send(error);
        }
    },



    async getFoodUseage(req, res) {
        try {
            const { locationId } = req.params;
            var result = 0;
            let results = await IncomeRepo.getOneLocation(locationId);
            if (!!results) {
                for (var food of results) {
                    result = result + food.foodUsage;
                }
                return res.status(200).json({ food: result });
            }
            return res.notFound();
        } catch (error) {
            res.send(error);
        }
    },
    async getPrintUseage(req, res) {
        try {
            const { locationId } = req.params;
            var result = 0;
            let results = await IncomeRepo.getOneLocation(locationId);
            if (!!results) {
                for (var print of results) {
                    result = result + print.printUsage;
                }
                return res.status(200).json({ print: result });
            }
            return res.notFound();
        } catch (error) {
            res.send(error);
        }
    },
    async getSystemUseage(req, res) {
        try {
            const { locationId } = req.params;
            var result = 0;
            let results = await IncomeRepo.getOneLocation(locationId);
            if (!!results) {
                for (var system of results) {
                    result = result + system.browesUsage;
                }
                return res.status(200).json({ system: result });
            }
            return res.notFound();
        } catch (error) {
            res.send(error);
        }
    },
    async topUp(req, res) {
        try {
            const { posAssignId } = req.params;
            const { hours, minutes } = req.body;
            const pos = await PosSystemAssignRepo.getOne(posAssignId);
            if(!!pos) {
                var calHourse = parseInt(hours) + parseInt(pos.hours);
                var calMinutes = parseInt(minutes) + parseInt(pos.minutes);
                var totHourse = Math.round(calHourse + calMinutes/60); 
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
                var endTime =  dateFormat(getendTime, "yyyy-mm-dd HH:MM:ss");
                
                if(totHourse<10) totHourse = "0" + totHourse;
                if(totalMinutes<10) totalMinutes = "0" + totalMinutes;
                var duration = totHourse +':'+ totalMinutes;
                var payload = {duration : duration, hours : totHourse, minutes : totalMinutes, totalHours : duration, fee : fees, endTime : endTime}
                let results = await PosSystemAssignRepo.topUp(posAssignId,payload);
                if (!!results) {
                        return res.status(200).json({ list: results });
                }
            }
            return res.notFound();
        } catch (error) {
            res.send(error);
        }
    },

    async changePc(req, res) {
        const {id} = req.params
        const {newsystemId, oldsystemId} = req.body
        const list = await PosSystemAssignRepo.getOne(id);
        if(!!list) {
            const Posupdate = await PosSystemAssignRepo.update(id, {pcNo : newsystemId});
            if(!!Posupdate) {
                await PosSystemAssignRepo.update(id, {pcNo : newsystemId});
                await InventoryRepo.updateSystemStatus(oldsystemId, {status : 1});
                await InventoryRepo.updateSystemStatus(newsystemId, {status : 2});
                return res.status(200).json({ message: 'updated successfully' });
            }
        }
        return res.notFound();
    },

    async posendsession(req, res) {
        const {id} = req.params
        const {status} = req.body
        const list = await PosSystemAssignRepo.getOne(id);
        if(!!list) {
            const Posupdate = await PosSystemAssignRepo.posendsession(id, {status  : status});
            if(!!Posupdate) {
                 return res.status(200).json({ message: 'updated successfully' });
            }
        }
        return res.notFound();
    },


    async updatepossytemassignHqDetails(req, res) {
        try {
            const list = await PosSystemAssignRepo.possystemAssignhqcmsRecord(req.body);
            if(list) {
                const list = await PosSystemAssignRepo.possystemAssignhqcmsupdate(req.body);
                return res.status(200).json({ data: list });        

            } else {
                const list = await PosSystemAssignRepo.possystemAssignhqcmscreate(req.body);
                return res.status(200).json({ data: list });        
            }

     
        } catch (error) {
            return res.serverError(error);
        }
    },

    async updateposfoodHqDetails(req, res) {
        try {
            const list = await PosSystemAssignRepo.posfoodhqcmsRecord(req.body);
            if(list) {
                const list = await PosSystemAssignRepo.posfoodhqcmsupdate(req.body);
                return res.status(200).json({ data: list });        

            } else {
                const list = await PosSystemAssignRepo.posfoodhqcmscreate(req.body);
                return res.status(200).json({ data: list });        
            }

     
        } catch (error) {
            return res.serverError(error);
        }
    },

    /* food service */
  
    async updateposserviceHqDetails(req, res) {
        try {
            const list = await PosSystemAssignRepo.posservicehqcmsRecord(req.body);
            if(list) {
                const list = await PosSystemAssignRepo.posservicehqcmsupdate(req.body);
                return res.status(200).json({ data: list });        

            } else {
                const list = await PosSystemAssignRepo.posservicehqcmscreate(req.body);
                return res.status(200).json({ data: list });        
            }

     
        } catch (error) {
            return res.serverError(error);
        }
    },



};

function getTimeLeft(endtime) {

    if(Date.parse(new Date(endtime)) < Date.parse(new Date())){
        return  '00:00:00';

    } else {
        var calculateTime = Math.abs(new Date(endtime) - new Date()) / 1000;
        var minutes = Math.floor(calculateTime / 60) % 60;
        calculateTime -= minutes * 60;
        var hours = Math.floor(calculateTime / 3600) % 24;
        calculateTime -= hours * 3600;
        var seconds = Math.floor(calculateTime % 60);
        if(hours<10) hours = "0" + hours;
        if(minutes<10) minutes = "0" + minutes;
        if(seconds<10) seconds = "0" + seconds;
        
        return  hours +':'+ minutes + ':'+seconds
    }
}


function getTimeLeftinSeconds(endtime) {

    if(Date.parse(new Date(endtime)) < Date.parse(new Date())){
        return  '0';
    } else {
        var inseconds = 0
        var calculateTime = Math.abs(new Date(endtime) - new Date()) / 1000;
        var minutes = Math.floor(calculateTime / 60) % 60;
        calculateTime -= minutes * 60;
        var hours = Math.floor(calculateTime / 3600) % 24;
        calculateTime -= hours * 3600;
        inseconds += (hours * 60) * 60;
        inseconds += minutes * 60;
               
        return  inseconds+60;
    }
}

