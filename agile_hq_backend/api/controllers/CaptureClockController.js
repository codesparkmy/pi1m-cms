const captureclockRepo = require('../repositories/captureclockRepo');
const userRepo = require('../repositories/userRepo');
const dateFormat = require('dateformat');
//const User = require("../models/User");
/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    
    async getAll(req, res) {
        try {
            const { page, limit } = req.query;
            const list = await captureclockRepo.getAll();
            if (list) {
                return res.status(200).json(list);
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },

    async create(req, res) {
        try {
            const {userId,locationId} = req.body
            const list = await userRepo.getOne(userId);
            if(!!list) {
                var clockin = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                const clockslist = await captureclockRepo.create({
                    userId : userId,
                    clockin : clockin,
                    clockout : clockin,
                    locationId : locationId,
                });
                if(!!clockslist) {
                    return res.status(200).json({ data : clockslist, message: 'created successfully' });
                } 
            } 
            return res.status(403).json({ message: 'Something went wrong' });       
                 
        } catch (error) {
            return res.serverError(error);
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const {userId,locationId} = req.body
            const getRecord = await captureclockRepo.getOne(id);
            if(getRecord.length) {
                var clockout = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                const updateRecord = await captureclockRepo.update(id, {userId : userId, clockout : clockout, locationId : locationId, status : 0 });
                if (!!updateRecord) {
                    return res.status(200).json({ data: updateRecord, message: "Updated successfully" });
                }
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },

    async getOne(req, res) {
        try {
            const { id } = req.params;
            const getRecord = await captureclockRepo.getOne(id);
            if (getRecord) {
                return res.status(200).json(getRecord);
            }
            return res.status(403).json({ message: 'Not found' });
        } catch (error) {
            return res.serverError(error);
        }
    },

    async userClockin(req, res) {
        try {
            const { userid } = req.params;
            const getRecord = await captureclockRepo.userClockin(userid);
            if (getRecord) {
                return res.status(200).json(getRecord);
            }
            return res.status(403).json({ message: 'Not found' });
        } catch (error) {
            return res.serverError(error);
        }
    },


    async updateHqDetails(req, res) {
        try {
            const list = await captureclockRepo.findhqcmsRecord(req.body);
            if(list) {
                const list = await captureclockRepo.findhqcmsupdate(req.body);
                return res.status(200).json({ data: list });        

            } else {
                const list = await captureclockRepo.findhqcmscreate(req.body);
                return res.status(200).json({ data: list });        
            }

     
        } catch (error) {
            return res.serverError(error);
        }
    },



}