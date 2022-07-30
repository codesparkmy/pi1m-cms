const UserRepo = require('../repositories/userRepo');
const EmployeeRepo = require('../repositories/employeeRepo');
const CaseRepo = require('../repositories/cafeRepo');
var fs = require('fs');
var pdf = require("pdf-creator-node");
var html = fs.readFileSync('./views/pdfTemplates/employee.ejs', 'utf8');
const os = require('os');
/**
 * EmployeeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    async create(req, res) {
        try {
            var {
                fullName,
                email,
                phoneNumber,
                gender,
                dob,
                subscriptionId,
                RaceId,
                ReligionCId,
                jobCategory,
                positionId,
                joiningDate,
                citizenShip,
                nationality,
                businessFax,
                branchAllocation,
                employeeId,
                password,
                profilePicture,
                totalObtain,
                role,
            } = req.body;
            const cafe = await CaseRepo.getOne(branchAllocation);
            if (cafe === undefined || cafe == null) {
                return res.status(202).json({ message: 'Please enter valid location' });
            }
            const user = await EmployeeRepo.findEmployee(email);
            if (user === undefined || user == null) {
                var basePassword = phoneNumber;
                if (password) {
                    basePassword = password;
                }
                const encPassword = await sails.helpers.utils.with({ method: 'genHash', params: [basePassword] });
                const result = await EmployeeRepo.create({ fullName, email, phoneNumber, gender, dob, employeeId, subscriptionId, RaceId, ReligionCId, jobCategory, positionId, joiningDate, citizenShip, nationality, businessFax, branchAllocation, password: encPassword, profilePicture, role, totalObtain });
                if (result) {
                    const employee = await EmployeeRepo.getOne(result.id);
                    return res.status(200).json({ employee });
                }
            }
            return res.status(202).json({ message: 'User AllReady Exist' });
        } catch (error) {
            return res.serverError(error);
        }
    },

    async getAll(req, res) {
        try {
            const { page, limit } = req.query;
            const user = await EmployeeRepo.getAll(page || 1, limit || "");

            if (!!user) {
                return res.status(200).json(user);
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },

    async exportExcel(req, res) {
        const user = await EmployeeRepo.getAllDetails();
        const filename = "./reports/excel/output-" + Date.now() + ".csv"
        const output = [];
        const headers = []
        const header = [{
            userstatus: 'userstatus',
            fullName: 'fullName',
            password: 'password',
            employeeId: 'employeeId',
            subscriptionId: 'subscriptionId',
            RaceId: 'RaceId',
            phoneNumber: 'phoneNumber',
            ReligionCId: 'ReligionCId',
            jobCategory: 'jobCategory',
            positionId: 'positionId',
            emailId: 'emailId',
            gender: 'gender',
            dob: 'dob',
            citizenShip: 'citizenShip',
            nationality: 'nationality',
            businessFax: 'businessFax',
            branchAllocation: 'branchAllocation',
            joiningDate: 'joiningDate',
            lastActivityDate: 'lastActivityDate',
            profilePicture: 'profilePicture',
            role: 'role'

        }]
        header.forEach((d) => {
            headers.push(d.userstatus)
            headers.push(d.fullName)
            headers.push(d.password)

            headers.push(d.employeeId)
            headers.push(d.subscriptionId)
            headers.push(d.RaceId)
            headers.push(d.phoneNumber)

            headers.push(d.ReligionCId)
            headers.push(d.jobCategory)
            headers.push(d.positionId)
            headers.push(d.emailId)
            headers.push(d.gender)
            headers.push(d.dob)
            headers.push(d.nationality)
            headers.push(d.businessFax)
            headers.push(d.branchAllocation)
            headers.push(d.joiningDate)
            headers.push(d.lastActivityDate)
            headers.push(d.profilePicture)
            headers.push(d.role)

            output.push(headers.join())
        })
        fs.writeFileSync(filename, output.join(os.EOL));
        user.forEach((obj) => {
            const row = [];
            row.push(obj.userstatus);
            row.push(obj.fullName);
            row.push(obj.password);
            row.push(obj.subscriptionId);
            row.push(obj.RaceId);

            row.push(obj.employeeId);
            row.push(obj.phoneNumber);
            row.push(obj.ReligionCId);
            row.push(obj.jobCategory);
            row.push(obj.positionId);
            row.push(obj.emailId);
            row.push(obj.gender);
            row.push(obj.dob);
            row.push(obj.nationality);
            row.push(obj.businessFax);
            row.push(obj.branchAllocation);
            row.push(obj.joiningDate);
            row.push(obj.lastActivityDate);
            row.push(obj.profilePicture);
            row.push(obj.role);

            output.push(row.join());

        });
        fs.writeFileSync(filename, output.join(os.EOL));
        return res.status(200).json({ message: "Excel reported successully", path: filename })
    },

    async getAllCount(req, res) {
        try {
            const user = await EmployeeRepo.getAllCount();

            if (!!user) {
                return res.status(200).json(user);
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },

    async update(req, res) {
        try {
            const { userId } = req.params;
            const { fullName, dob, branchAllocation, subscriptionId, userstatus, employeeId, profilePicture } = req.body;

            let result = await EmployeeRepo.getOne(userId);
            if (!!result) {
                const isUpdated = await EmployeeRepo.update(userId, req.body);
                if (!!isUpdated) {
                    return res.status(200).json({ message: 'Successfully updated' });
                }
                return res.status(403).json({ message: 'Bad request' });
            }
            return res.notFound();
        } catch (error) {
            return res.serverError(error);
        }
    },
    async updateStatus(req, res) {
        try {
            const { userId } = req.params;
            const { userstatus } = req.body;

            let result = await EmployeeRepo.getOne(userId);
            if (!!result) {
                const isUpdated = await EmployeeRepo.update(userId, userstatus);
                if (!!isUpdated) {
                    return res.status(200).json({ message: 'successfully updated status' });
                }
                return res.status(403).json({ message: 'Bad request' });
            }
            return res.notFound();
        } catch (error) {
            return res.serverError(error);
        }
    },

    async updatePassword(req, res) {
        try {
            const { userId } = req.params;
            const { newpassword, password } = req.body;
            if (newpassword != password) {
                return res.status(403).json({ message: 'Not match new and confirm password' });
            }
            let result = await EmployeeRepo.getOne(userId);
            if (!!result) {
                const encPassword = await sails.helpers.utils.with({ method: 'genHash', params: [password] });
                const isUpdated = await EmployeeRepo.update(userId, { password: encPassword });
                if (!!isUpdated) {
                    return res.status(200).json({ message: 'Password Successfully updated' });
                }
                return res.status(403).json({ message: 'Bad request' });
            }
            return res.notFound();
        } catch (error) {
            return res.serverError(error);
        }
    },
    async getPDF(req, res) {
        try {
            var options = {
                format: "A3",
                orientation: "landscape",
                border: "10mm",
                header: {
                    height: "20mm",
                    contents: '<div style="text-align: center;"><h1>Employee List</h1></div>'
                }
            };
            const user = await EmployeeRepo.getPDF();

            if (user) {
                var document = {
                    html: html,
                    data: {
                        getreport: user
                    },
                    path: "./reports/pdf/EmployeeList-" + Date.now() + ".pdf"
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

    async getEmployeeDetails(req, res) {
        try {
            const user = await EmployeeRepo.getEmployeeDetails(req.body.location);
            if (!!user) {
                return res.status(200).json(user);
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },


};