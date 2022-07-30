const LeaveRepo = require('../repositories/LeaveRepo');
var fs = require('fs');
var pdf = require("pdf-creator-node");
const os = require('os');
var html = fs.readFileSync('./views/pdfTemplates/leave.ejs', 'utf8');
/**
 * LeaveController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    async create(req, res) {
        try {
            const { userId, leaveDescription, fromDate, toDate, reasonforLeave, allocatedLeave, takenLeave, leaveStatus, location } = req.body;
            // const{userId}= req.param;
            var Date1 = new Date(fromDate);
            var Date2 = new Date(toDate);
            var Days = Math.floor((Date2.getTime() - Date1.getTime()) / (1000 * 60 * 60 * 24));
            const leaveRemaining = await LeaveRepo.getOneUser(userId);
            var remaining = 0;
            if (leaveRemaining.length != 0) {
                var dateOnly = leaveRemaining.reduce((a, b) => {
                    return new Date(a.createdAt) > new Date(b.createdAt) ? a : b;
                })
                remaining = dateOnly.remainingLeave;
                console.log(remaining);
            } else {
                remaining = 10;
            }
            const leave = await LeaveRepo.create({ userId, leaveDescription, fromDate, toDate, reasonforLeave, allocatedLeave, remainingLeave: remaining, takenLeave: Days, leaveStatus, location });
            if (leave) {
                return res.status(200).json({ data: leave, message: 'Leave Created Successfully' });
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },
    async getAll(req, res) {
        try {
            const { page, limit } = req.query;
            const leaves = await LeaveRepo.getAll(page || 1, limit || 10);
            return res.status(201).json(leaves);
        } catch (error) {
            return res.serverError(error);
        }
    },
    async exportExcel(req, res) {
        const leaves = await LeaveRepo.getAllDetails();
        const filename = "./reports/excel/output-" + Date.now() + ".csv"
        const output = [];
        const headers = []
        const header = [{
            leaveDescription: 'leaveDescription',
            reasonforLeave: 'reasonforLeave',
            allocatedLeave: 'allocatedLeave',
            takenLeave: 'takenLeave',
            remainingLeave: 'remainingLeave',
            toDate: 'toDate',
            leaveStatus: 'leaveStatus',
            userId: 'userId',
            location: 'location'


        }]
        header.forEach((d) => {
            headers.push(d.leaveDescription)
            headers.push(d.reasonforLeave)
            headers.push(d.allocatedLeave)
            headers.push(d.takenLeave)
            headers.push(d.remainingLeave)
            headers.push(d.toDate)
            headers.push(d.leaveStatus)
            headers.push(d.userId)
            headers.push(d.location)
            output.push(headers.join())
        })
        fs.writeFileSync(filename, output.join(os.EOL));
        leaves.forEach((obj) => {
            const row = [];
            row.push(obj.leaveDescription);
            row.push(obj.reasonforLeave);
            row.push(obj.allocatedLeave);
            row.push(obj.takenLeave);
            row.push(obj.remainingLeave);

            row.push(obj.toDate);
            row.push(obj.leaveStatus);
            row.push(obj.userId);
            row.push(obj.location);

            output.push(row.join());

        });
        fs.writeFileSync(filename, output.join(os.EOL));
        return res.status(200).json({message:"Excel reported successully",path:filename})
    },
    async getOne(req, res) {
        try {
            const { leaveId } = req.params;
            const leave = await LeaveRepo.getOne(leaveId);
            if (!!leave) {
                return res.status(200).json(leave);
            }
            return res.status(403).json({ message: 'Not found' });
        } catch (error) {
            return res.serverError(error);
        }
    },
    async udpate(req, res) {
        try {
            const { leaveId } = req.params;
            const { leaveStatus } = req.body;
            const leave = await LeaveRepo.getOne(leaveId);
            var remainingLeave;
            if (leaveStatus == 'Accepted' && leave) {
                remainingLeave = leave.remainingLeave - leave.takenLeave;
            } else if (leave) {
                remainingLeave = leave.remainingLeave
            } else {
                remainingLeave = 10
            }

            const result = await LeaveRepo.update(leaveId, { leaveStatus, remainingLeave });
            if (result) {
                // const leave = await LeaveRepo.getOne(leaveId);
                return res.status(200).json({ message: "Leave Status Updated Successfully" });
            }
            return res.status(403).json({ message: 'Not found' });
        } catch (error) {
            return res.serverError(error);
        }
    },
    async getOneLeave(req, res) {
        try {
            const { userId } = req.params;
            const { page, limit } = req.query;
            const leave = await LeaveRepo.getOneLeave(page || 1, limit || 10, userId);
            if (!!leave) {
                return res.status(200).json(leave);
            }
            return res.status(403).json({ message: 'Not found' });
        } catch (error) {
            return res.serverError(error);
        }
    },

    async getLeaveReport(req, res) {
        try {
            const { fromdate, todate, location } = req.body;
            const training = await LeaveRepo.getLeaveReport(fromdate, todate, location);
            if (training) {
                return res.status(200).json(training);
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },
    async getPDF(req, res) {
        try {
            var options = {
                format: "A3",
                orientation: "portrait",
                border: "10mm",
                header: {
                    height: "20mm",
                    contents: '<div style="text-align: center;"><h1>Leave Management</h1></div>'
                }
            };
            const leaves = await LeaveRepo.getPDF();

            if (leaves) {
                var document = {
                    html: html,
                    data: {
                        getreport: leaves
                    },
                    path: "./reports/pdf/LeaveManagement-" + Date.now() + ".pdf"
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

   
    async updateHqDetails(req, res) {
        try {
            const list = await LeaveRepo.findhqcmsRecord(req.body);
            if(list) {
                const list = await LeaveRepo.findhqcmsupdate(req.body);
                return res.status(200).json({ data: list });        

            } else {
                const list = await LeaveRepo.findhqcmscreate(req.body);
                return res.status(200).json({ data: list });        
            }

     
        } catch (error) {
            return res.serverError(error);
        }
    },

};