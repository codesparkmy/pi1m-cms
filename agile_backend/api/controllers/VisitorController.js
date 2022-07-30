const VisitorRepo = require("../repositories/visitorRepo");
const visitorSearchRepo = require("../repositories/visitorSearchRepo");
const dateFormat = require('dateformat');
var url = require("url");
var path = require("path");
var fs = require('fs');
var pdf = require("pdf-creator-node");
const os = require('os');
var html = fs.readFileSync('./views/pdfTemplates/visitor.ejs', 'utf8');
const request = require("request-promise");
const { exists } = require("grunt");

/**
 * VisitorController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var pictureUpload = '';
module.exports = {
    async uploads(req, res) {
        const { userId } = req.params;
        console.log(userId)
        var uploadFile = req.file('file');
        uploadFile.upload({ dirname: require('path').resolve(sails.config.appPath, 'assets/images') }, async function onUploadComplete(err, files) {
            var parsed = url.parse(files[0].fd);
            pictureUpload = `${sails.config.custom.baseUrl}/images/${path.basename(parsed.pathname)}`;

            var destinationPath = require('path').resolve(sails.config.appPath, '.tmp/public/images/' + path.basename(parsed.pathname))
            fs.createReadStream(files[0].fd).pipe(fs.createWriteStream(destinationPath));

            if (err) return res.serverError(err);
            // IF ERROR Return and send 500 error  
            // const isUpdated = await UserRepo.update(userId, {profilePicture});
            if (pictureUpload != null) {
                return res.status(200).json({ message: 'Successfully uploaded file' });
            } else {
                return res.notFound();
            }

        });
    },

    async exportExcel(req, res) {
        let allVisitors = await VisitorRepo.getAllDetails();
        const filename = "./reports/excel/output-" + Date.now() + ".csv"
        const output = [];
        const headers = []
        const header = [{
            name: 'name',
            memberCode: 'memberCode',
            subscriptionId: 'subscriptionId',
            nrciNo: 'nrciNo',
            dob: 'dob',
            gender: 'gender',
            isBumi: 'isBumi',
            contactNo: 'contactNo',
            martialStatus: 'martialStatus',
            incomeLevel: 'incomeLevel',
            memebershipSince: 'memebershipSince',
            emailId: 'emailId',
            status: 'status',
            profileImage: 'profileImage',
            location: 'location',
            occupation: 'occupation',
            address: 'address'

        }]
        header.forEach((d) => {
            headers.push(d.name)
            headers.push(d.memberCode)
            headers.push(d.subscriptionId)
            headers.push(d.nrciNo)

            headers.push(d.dob)
            headers.push(d.gender)
            headers.push(d.isBumi)
            headers.push(d.contactNo)
            headers.push(d.martialStatus)
            headers.push(d.incomeLevel)
            headers.push(d.memebershipSince)
            headers.push(d.emailId)
            headers.push(d.status)
            headers.push(d.profileImage)
            headers.push(d.location)
            headers.push(d.occupation)
            headers.push(d.address)

            output.push(headers.join())
        })
        fs.writeFileSync(filename, output.join(os.EOL));
        allVisitors.forEach((obj) => {
            const row = [];
            row.push(obj.name);
            row.push(obj.memberCode);
            row.push(obj.subscriptionId);
            row.push(obj.nrciNo);
            row.push(obj.dob);
            row.push(obj.gender);
            row.push(obj.isBumi);
            row.push(obj.contactNo);
            row.push(obj.martialStatus);
            row.push(obj.incomeLevel);
            row.push(obj.memebershipSince);
            row.push(obj.emailId);
            row.push(obj.status);
            row.push(obj.profileImage);
            row.push(obj.location);
            row.push(obj.occupation);
            row.push(obj.address);

            output.push(row.join());

        });
        fs.writeFileSync(filename, output.join(os.EOL));
        return res.status(200).json({ message: "Excel reported successully", path: filename })
    },


    async create(req, res) {
        try {
            const NRIC = req.body.nrciNo;
            const payload = {
                "name": req.body.name,
                "memeberCode": req.body.memeberCode,
                "subscriptionId": req.body.subscriptionId,
                "nrciNo": NRIC,
                "dob": req.body.dob,
                "gender": req.body.gender,
                "isBumi": req.body.isBumi,
                "contactNo": req.body.contactNo,
                "martialStatus": req.body.martialStatus,
                "incomeLevel": req.body.incomeLevel,
                "memebershipSince": req.body.memebershipSince,
                "emailId": req.body.emailId,
                "location": req.body.location,
                "isMember": req.body.isMember,
                "occupation": req.body.occupation,
                "address": req.body.address,
                "country": req.body.country,
                "state": req.body.state,
                "city": req.body.city,
                "postalcode": req.body.postalcode,
                "age": req.body.age,
            }
            req.body.profileImage = pictureUpload;

            let validateNricNo = await VisitorRepo.validateNricNo(NRIC);
            if (!!validateNricNo.length) {
                return res.status(202).json({ message: "Nric Number already registered" });
            }

            let visitorCode = await VisitorRepo.getMemberCode(req.body.memeberCode);
            if (!!visitorCode.length) {
                return res.status(202).json({ message: "Already Register MemberCode" });
            }

            let createdVisitor = await VisitorRepo.create(payload);
            let autoIncrement = await VisitorRepo.IncrementMemberCode(1);
            if (!!createdVisitor) {
                return res.status(200).json(createdVisitor);
            }
            return res.status(400).json({ message: "Not Found" });
        } catch (error) {
            res.serverError(error);
        }
    },

    async getAll(req, res) {
        try {
            var data = [];
            const { page, limit } = req.query;
            let allVisitors = await VisitorRepo.getAll(page || 1, limit || "");
            if (!!allVisitors) {
                for (var visitor of allVisitors) {
                    if (visitor) {
                        var totalUsage = 0;
                        for (var possystem of visitor.posSystemAssign) {
                            totalUsage = totalUsage + parseInt(possystem.duration);
                        }
                        visitor.totalUsage = totalUsage;
                        data.push(visitor)
                        delete visitor.posSystemAssign;
                    }
                }
                return res.status(200).json(allVisitors);
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },

    async getMemberList(req, res) {
        try {
            let allVisitors = await VisitorRepo.getMemberList();
            if (!!allVisitors) {
                return res.status(200).json(allVisitors);
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },

    async getOne(req, res) {
        try {
            const { data } = req.params;
            let visitor = await VisitorRepo.getOne(data);
            if (!!visitor) {
                return res.status(200).json(visitor);
            }
            return res.notFound();

        } catch (error) {
            res.serverError(error);
        }
    },

    async getvisitorNricno(req, res) {
        try {
            const { data } = req.params;
            var visitor = await VisitorRepo.getvisitorNricno(data);

            /*** Checking the member is expired or not. ***/
            if (!visitor) {
                return res.status(200).json({
                    message: 'No data found. Please check the NRIC Number Registred with the visitor account',
                    membershipFlag: 3
                });

            } else {

                /*findout nth membership plan  */
                /**
                 * 0- NON MEMBERSHIP
                 * 1 -ACTIVE
                 * 2 - MEMBERSHIP EXPIRED 
                 * 3 - NO RESULTS FOUND
                 * */
                let membership = await VisitorRepo.memberShipPlanByVisitor(visitor.id);

                /* checking membership is expired */
                if (membership) {
                    visitor.membershipFlag = 0;
                    visitor.membershipStatus = 'NON MEMBERSHIP';
                } else {
                    var todayDate = dateFormat(new Date());
                    var todate = dateFormat(new Date(membership[0].membership_to));

                    if (todayDate > todate) {
                        visitor.membershipFlag = 2;
                        visitor.membershipStatus = 'MEMBERSHIP IS EXPIRED';
                    } else {
                        visitor.membershipFlag = 1;
                        visitor.membershipStatus = 'MEMBERSHIP IS ACTIVE';
                    }
                }
                return res.status(200).json(visitor);
            }
        } catch (error) {
            res.serverError(error);
        }
    },


    async update(req, res) {
        try {
            const { visitorId } = req.params;
            const {
                name,
                memeberCode,
                subscriptionId,
                nrciNo,
                dob,
                gender,
                isBumi,
                contactNo,
                martialStatus,
                incomeLevel,
                memebershipSince,
                emailId,
                location,
                isMember,
                occupation
            } = req.body;

            let validateNricNo = await VisitorRepo.NricExceptCurrentUser(req.body.nrciNo, visitorId);
            console.log('validateNricNo', validateNricNo);
            if (!!validateNricNo.length) {
                return res.status(202).json({ message: "Nric Number already registered" });
            }

            let isUpdated = await VisitorRepo.update(visitorId, req.body);
            if (!!isUpdated) {
                return res.status(200).json({ message: "Updated Successfully" });
            }
            return res.status(400).json({ message: "Bad Request" });
        } catch (error) {
            res.serverError(error);
        }
    },


    async updateVisitorStatus(req, res) {
        try {
            const { visitorId } = req.params;

            //   let result = await VisitorRepo.getOne(visitorId);
            //   if(result){
            let isUpdated = await VisitorRepo.update(visitorId, req.body);
            if (!!isUpdated) {
                return res.status(200).json({ message: "Updated Successfully" });
            }
            return res.status(400).json({ message: "Bad Request" });
            // }
            // return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },


    async getAllReport(req, res) {
        try {
            const { fromdate, todate, location } = req.body;
            let allVisitors = await VisitorRepo.getAllReport(fromdate, todate, location);
            if (!!allVisitors) {
                return res.status(200).json(allVisitors);
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },

    async getOneMember(req, res) {
        try {
            const { memeberCode } = req.params;
            let visitor = await VisitorRepo.getOneMember(memeberCode);
            if (!!visitor) {
                return res.status(200).json(visitor);
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },

    async uploadsVisit(req, res) {

        const { visitorId } = req.params;
        var uploadFile = req.file('file');
        uploadFile.upload({ dirname: require('path').resolve(sails.config.appPath, 'assets/images') }, async function onUploadComplete(err, files) {
            var parsed = url.parse(files[0].fd);
            var profileImage = `${sails.config.custom.baseUrl}/images/${path.basename(parsed.pathname)}`;

            var destinationPath = require('path').resolve(sails.config.appPath, '.tmp/public/images/' + path.basename(parsed.pathname))
            fs.createReadStream(files[0].fd).pipe(fs.createWriteStream(destinationPath));

            if (err) return res.serverError(err);
            // IF ERROR Return and send 500 error  
            const isUpdated = await VisitorRepo.update(visitorId, { profileImage });
            if (!!isUpdated) {
                return res.status(200).json({ message: 'Successfully uploaded file' });
            } else {
                return res.notFound();
            }

        });
    },

    async getPDF(req, res) {
        try {
            var options = {
                format: "A3",
                orientation: "landscape",
                border: "10mm",
                header: {
                    height: "20mm",
                    contents: '<div style="text-align: center;"><h1>Visitor List</h1></div>'
                }
            };
            let allVisitors = await VisitorRepo.getPDF();

            if (allVisitors) {
                var document = {
                    html: html,
                    data: {
                        getreport: allVisitors
                    },
                    path: "./reports/pdf/VisitorList-" + Date.now() + ".pdf"
                };

                pdf.create(document, options)
                    .then(pdfResponse => {
                        return res.status(200).json({ message: "PDF Created Successfully", path: document.path });
                    })
                    .catch(error => {
                        console.log(error);
                        return res.status(403).json({ message: 'Not found' });
                    });
            } else {
                return res.status(403).json({ message: 'Not found' });
            }

        } catch (error) {
            return res.serverError(error);
        }
    },
    async getDataBySearch(req, res) {
        try {
            const result = req.params.data;
            let search = await visitorSearchRepo.getAll(result);
            return res.status(200).json(search);

        } catch (error) {
            res.serverError(error);
        }
    },
    async membershipRegistration(req, res) {
        try {
            let visitorList = await VisitorRepo.getOne(req.body.visitorId);
            if (!!visitorList) {
                var membership_to = req.body.membership_from;
                var expirtyDate = new Date(membership_to);
                req.body.received_date = dateFormat(new Date(), "isoDate");
                // Add year to expirty Date
                expirtyDate.setFullYear(expirtyDate.getFullYear() + parseInt(req.body.year));
                expirtyDate.setDate(expirtyDate.getDate() - 1);
                req.body.membership_to = dateFormat(expirtyDate, "isoDate");
                var addMemebership = await VisitorRepo.membershipRegistration(req.body);
                if (!!addMemebership) {
                    return res.status(200).json({ message: "memebership added successfully" });
                }
            }
            return res.status(403).json({ message: 'Not found' });

        } catch (error) {
            res.serverError(error);
        }
    },
    async updateMembershipRegistration(req, res) {
        try {
            const { id } = req.params;
            let visitorList = await VisitorRepo.getOne(req.body.visitorId);
            if (!!visitorList) {
                var getOneMembershipList = await VisitorRepo.getOneMembership(id);
                if (!!getOneMembershipList) {
                    var membership_to = req.body.membership_from;
                    var expirtyDate = new Date(membership_to);
                    req.body.received_date = dateFormat(new Date(), "isoDate");
                    // Add year to expirty Date
                    expirtyDate.setFullYear(expirtyDate.getFullYear() + 1);
                    expirtyDate.setDate(expirtyDate.getDate() - 1);
                    req.body.membership_to = dateFormat(expirtyDate, "isoDate");
                    let addMemebership = await VisitorRepo.updateMembershipRegistration(id, req.body);
                    if (!!addMemebership) {
                        return res.status(200).json({ message: "memebership updated successfully", data: addMemebership });
                    }
                }

            }
            return res.status(403).json({ message: 'Not found' });

        } catch (error) {
            res.serverError(error);
        }
    },
    async getMembershipRegistration(req, res) {
        try {
            var data = [];
            const { page, limit } = req.query;
            let list = await VisitorRepo.getMembershipRegistration(page || 1, limit || "");
            if (!!list) {
                return res.status(200).json(list);
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },
    async getMembershipRegistrationById(req, res) {
        try {
            const { id } = req.params;
            var list = await VisitorRepo.getOneMembership(id);
            if (!!list) {
                return res.status(200).json(list);
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },
    async validateNricNo(req, res) {
        try {
            const { nricNo } = req.body;
            var list = await VisitorRepo.validateNricNo(nricNo);
            if (list.length) {
                return res.status(200).json({ status: 1, message: "NRIC Number already exist" });
            } else {
                return res.status(200).json({ status: 0, message: "NRIC Number not exist" });
            }
        } catch (error) {
            res.serverError(error);
        }
    },
    async membershipbyNricNo(req, res) {
        try {
            const { nricNo } = req.body;
            var list = await VisitorRepo.membershipbyNricNo(nricNo);
            if (!!list) {
                if (list.registeredMemberList.length > 0) {
                    var membership = list.registeredMemberList[0]
                    if (dateFormat(membership.membership_to, 'isoDate') < dateFormat(new Date(), 'isoDate')) {
                        return res.status(200).json({ data: list, status: 1, expiredDate: dateFormat(membership.membership_to, 'isoDate'), message: "Membership expired" });
                    } else {
                        return res.status(200).json({ data: list, status: 0, message: "Membership not expired" });
                    }
                } else {
                    return res.status(200).json({ data: list, status: 0, message: "Not a Member" });
                }
            }
            return res.status(403).json({ message: 'Not found' });
        } catch (error) {
            res.serverError(error);
        }
    },

    async getAllMembershipList(location) {
        try {
            const list = await VisitorRepo.getAllMembershipList(location);
            if (list) {
                return list;
            }
            return { message: 'Something went wrong' };
        } catch (error) {
            return error;
        }
    },



    async getAllVisitorList(location) {
        try {
            const list = await VisitorRepo.getAllVisitorList(location);
            if (list) {
                return list;
            }
            return { message: 'Something went wrong' };
        } catch (error) {
            return error;
        }
    },


};