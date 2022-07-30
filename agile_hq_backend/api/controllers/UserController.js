const UserRepo = require('../repositories/userRepo');
var nodemailer = require('nodemailer');
var mysql = require('mysql');
var url = require("url");
var path = require("path");
var fs = require('fs');
//const User = require("../models/User");
/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
let config = {
    host: 'localhost',
    user: 'root',
    password: 'doodleblue',
    database: 'agiles'
};
let connection = mysql.createConnection(config);
module.exports = {
    async getAll(req, res) {
        try {
            const { page, limit } = req.query;
            const users = await UserRepo.getAll(page || 1, limit || 10);
            return res.status(201).json(users);
        } catch (error) {
            return res.serverError(error);
        }
    },
    async login(req, res) {
        try {
            const { email, password } = req.body;
            let result = await UserRepo.getByEmailId(email);
            if (!!result) {
                const hash = result.password;
                const isValid = await sails.helpers.utils.with({ method: 'compare', params: [password, hash] });
                if (isValid) {
                    const user = await UserRepo.getOne(result.id);
                    const token = await sails.helpers.utils.with({ method: 'generateToken', params: [user] });
                    return res.status(200).json({ token, email: user.email, firstName: user.firstName, lastName: user.lastName, id: user.id });
                }
            }
            return res.badRequest({ message: 'Invalid Login' });
        } catch (error) {
            return res.serverError(error);
        }
    },
    // async login(req, res) {
    //   try {
    //     const { email, password } = req.body;

    //     let result = await UserRepo.getByEmailId(email);
    //     if (!!result) {
    //       const hash = result.password;
    //       const isValid = await sails.helpers.utils.with({ method: 'compare', params: [password, hash] });

    //      if (isValid) {
    //         const user = await UserRepo.getOne(result.id);
    //         const token = await sails.helpers.utils.with({ method: 'generateToken', params: [user] });

    //         // if(token){
    //         //   const user = await UserRepo.clockInAttendance(req.body);
    //          }
    //         return res.status(200).json({ token, email: user.email, firstName: user.firstName, lastName: user.lastName, id: user.id });
    //    //   }
    //     }
    //     return res.badRequest({ message: 'Invalid Login' });
    //   } catch (error) {
    //     return res.serverError(error);
    //   }
    // },
    async getOne(req, res) {
        try {
            const { userId } = req.params;
            const user = await UserRepo.getOne(userId);
            if (!!user) {
                const permission = await UserRepo.getpageList(user.roleId);
                user.permissionList = permission;
                return res.status(200).json(user);
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },
    async rolePermissions(req, res) {
        try {
            const { roleId } = req.params;
            var data = [];
            const mainpage = await UserRepo.getpageList();
            for (let available of mainpage) {
                const subpage = await UserRepo.getSubpage(available.id, roleId);
                for (let report of subpage) {
                    if (report.permissionList && report.permissionList.length == 1) {
                        report.permissionList = report.permissionList[0];
                    } else {
                        if (report.permissionList && report.permissionList.length == 0) {
                            report.permissionList = {};
                        }
                    }
                }
                available.subpage = subpage
                data.push(available)
            }
            return res.status(200).json(data);
        } catch (error) {
            res.serverError(error);
        }
    },

    async rolePermissionscreateAndUpdate(req, res) {
        const modifyPermissions = await UserRepo.modifyPermissions(req.body);
        if (!!modifyPermissions) {
            return res.status(200).json({ message: "successfully created" });
        } else {
            return res.status(403).json({ message: 'Bad request' });
        }
    },

    async clockInAttendance(req, res) {
        const user = await UserRepo.clockInAttendance(req.body);
        return res.status(200).json(user);
    },

    async getReports(req, res) {
        const reports = await UserRepo.getReports();
        return res.status(200).json(reports);
    },


    async create(req, res) {
        try {
            const { userstatus, email, phoneNumber, firstName, lastName, password, username } = req.body;
            let result = await UserRepo.getByEmailId(email);
            if (!!result) {
                return res.status(403).json({ message: 'Email already exists' });
            }
            const encPassword = await sails.helpers.utils.with({ method: 'genHash', params: [password] });
            result = await UserRepo.create({ userstatus, email, firstName, phoneNumber, lastName, password: encPassword, username });
            if (result) {
                const user = await UserRepo.getOne(result.id);
                return res.status(200).json(user);
            }
            return res.status(403).json({ message: 'Bad request' });
        } catch (error) {
            return res.serverError(error);
        }
    },
    async update(req, res) {
        try {
            const { userId } = req.params;
            const { firstName, lastName, role } = req.body;
            let result = await UserRepo.getOne(userId);
            if (!!result) {
                const isUpdated = await UserRepo.update(userId, { userstatus, firstName, lastName, role });
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
    async resetPassword(req, res) {
        try {
            const roles = await UserRepo.resetPassword(req.params.userId, req.body);
            return res.status(201).json(roles);
        } catch (error) {
            return res.serverError(error);
        }
    },

    async deleteuser(req, res) {
        const body = {
            "userstatus": false
        }
        try {
            const roles = await UserRepo.deleteuser(req.params.userId, body);
            return res.status(201).json(roles);
        } catch (error) {
            return res.serverError(error);
        }
    },
    async getOneAdmin(req, res) {
        try {
            const { userId, roleId } = req.params;
            const user = await UserRepo.getOneAdmin(userId, roleId);
            if (!!user) {
                return res.status(200).json(user);
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },

    async getAllUserReport(req, res) {
        try {
            const { fromdate, todate, location } = req.body;
            let allVisitors = await UserRepo.getAllUserReport(fromdate, todate, location);
            if (!!allVisitors) {
                return res.status(200).json(allVisitors);
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },

    async forgetPassword(req, res) {
        try {
            const { email } = req.body;
            let result = await UserRepo.getByEmailId(email);
            if (!!result) {

                var transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    host: 'smtp.hostname.com',
                    port: 465,
                    secure: true,
                    auth: {
                        user: 'ramakrishnan@doodleblue.com',
                        pass: 'doodleblue@123'
                    }
                });

                var mailSend = transporter.sendMail({
                    from: 'ramakrishnan@doodleblue.com',
                    to: result.email,
                    subject: 'Forget Password',
                    html: `<html><body><div><span>Hi ${result.fullName}</span><p>Please click here and reset your password</p><a href="http://180.151.69.138/frontend_agileedge_cms/dist/webe/#/resetPassword/:${result.id}">Click Here</a><div></body></html>`
                });

                return res.status(200).json({ message: "Check your mail and reset your password" });
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },

    async getOneCron(req, res) {
        try {
            const { userId } = req.params;
            const user = await UserRepo.getOne(userId);
            if (!!user) {
                // insert statment  

                // execute the insert statment
                connection.query("INSERT INTO user (createdAt,updatedAt,userstatus,fullName,employeeId,subscriptionId,RaceId,phoneNumber,ReligionCId,jobCategory,positionId,email,gender,dob,citizenShip,nationality,businessFax,joiningDate,lastActivityDate,createdBy,modifiedBy,profilePicture,role,branchAllocation) VALUES ('" + new Date(user.createdAt).toISOString().substr(0, 10) + "','" + new Date(user.updatedAt).toISOString().substr(0, 10) + "'," + user.userstatus + ",'" + user.fullName + "','" + user.employeeId + "','" + user.subscriptionId + "','" + user.RaceId + "','" + user.phoneNumber + "','" + user.ReligionCId + "','" + user.jobCategory + "','" + user.positionId + "','" + user.email + "'," + user.gender + ",'" + new Date(user.dob).toISOString().substr(0, 10) + "','" + user.citizenShip + "','" + user.nationality + "','" + user.businessFax + "','" + new Date(user.joiningDate).toISOString().substr(0, 10) + "','" + new Date(user.lastActivityDate).toISOString().substr(0, 10) + "'," + user.createdBy + "," + user.modifiedBy + ",'" + user.profilePicture + "','" + user.role + "','" + user.branchAllocation + "')");

                connection.end();
                return res.json({ message: "successfully inserted" });
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },
    async uploads(req, res) {
        const { userId } = req.params;
        var uploadFile = req.file('file');
        uploadFile.upload({ dirname: require('path').resolve(sails.config.appPath, 'assets/images') }, async function onUploadComplete(err, files) {
            console.log(files[0].fd);
            var parsed = url.parse(files[0].fd);
            var profilePicture = `${sails.config.custom.baseUrl}/images/${path.basename(parsed.pathname)}`;

            var destinationPath = require('path').resolve(sails.config.appPath, '.tmp/public/images/' + path.basename(parsed.pathname))
            fs.createReadStream(files[0].fd).pipe(fs.createWriteStream(destinationPath));

            if (err) return res.serverError(err);
            // IF ERROR Return and send 500 error  
            const isUpdated = await UserRepo.update(userId, { profilePicture });
            if (!!isUpdated) {
                return res.status(200).json({ message: 'Successfully uploaded file' });
            } else {
                return res.notFound();
            }

        });
    },
    async getLocationBasedUsers(req, res) {
        try {
            const { locationId } = req.params;
            const user = await UserRepo.getLocationBasedUsers(locationId);
            if (!!user) {
                return res.status(200).json(user);
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },


    async getAllHqcmsEmployees(location) {
        try {
            const users = await UserRepo.getAllHqcmsEmployees(location);
            return res.status(201).json(users);
        } catch (error) {
            return res.serverError(error);
        }
    },


};