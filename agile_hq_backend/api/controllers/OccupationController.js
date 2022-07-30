const occupationRepo = require('../repositories/occupationRepo');
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
            const list = await occupationRepo.getAll(page || 1, limit || "");
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
            const findByName = await occupationRepo.findByName(req.body);
            if(findByName.length) {
                return res.status(409).json({ message: 'Already Created' });
            } else {
                const list = await occupationRepo.create(req.body);
                if (!!list) {
                    return res.status(200).json({ data: list, message: "Occupation Created Successfully" });
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
            const maritalstatus = await occupationRepo.getOne(id);
            if (maritalstatus) {
                return res.status(200).json(maritalstatus);
            }
            return res.status(403).json({ message: 'Not found' });
        } catch (error) {
            return res.serverError(error);
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const maritalstatus = await occupationRepo.getOne(id);
            if(maritalstatus.length) {
                const maritalupdate = await occupationRepo.update(id,req.body);
                if (!!maritalupdate) {
                    return res.status(200).json({ data: maritalupdate, message: "Occupation updated Successfully" });
                }
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const maritalstatus = await occupationRepo.delete(id);
            if (!!maritalstatus) {
                return res.status(200).json({ data: maritalstatus, message: "Occupation Deleted Successfully" });
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },

   async updateHqDetails(req, res) {
        try {
            const list = await occupationRepo.findhqcmsRecord(req.body);
            if(list) {
                const list = await occupationRepo.findhqcmsupdate(req.body);
                return res.status(200).json({ data: list });        

            } else {
                const list = await occupationRepo.findhqcmscreate(req.body);
                return res.status(200).json({ data: list });        
            }

     
        } catch (error) {
            return res.serverError(error);
        }
    },


}