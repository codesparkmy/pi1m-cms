const MaritalstatusRepo = require('../repositories/maritalstatusRepo');
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
            const maritalstatusList = await MaritalstatusRepo.getAll(page || 1, limit || "");
            if (maritalstatusList) {
                return res.status(200).json(maritalstatusList);
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },

   async updateHqDetails(req, res) {
        try {
            const list = await MaritalstatusRepo.findhqcmsRecord(req.body);
            if(list) {
                const list = await MaritalstatusRepo.findhqcmsupdate(req.body);
                return res.status(200).json({ data: list });        

            } else {
                const list = await MaritalstatusRepo.findhqcmscreate(req.body);
                return res.status(200).json({ data: list });        
            }

     
        } catch (error) {
            return res.serverError(error);
        }
    },




    async create(req, res) {
        try {
            const findByName = await MaritalstatusRepo.findByName(req.body);
            console.log('findByName',findByName);
            if(findByName.length) {
                return res.status(409).json({ message: 'Already Created' });
            } else {
                const maritalstatusList = await MaritalstatusRepo.create(req.body);
                if (!!maritalstatusList) {
                    return res.status(200).json({ data: maritalstatusList, message: "Marital status Created Successfully" });
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
            const maritalstatus = await MaritalstatusRepo.getOne(id);
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
            const maritalstatus = await MaritalstatusRepo.getOne(id);
            if(maritalstatus.length) {
                const maritalupdate = await MaritalstatusRepo.update(id,req.body);
                if (!!maritalupdate) {
                    return res.status(200).json({ data: maritalupdate, message: "Marital status updated Successfully" });
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
            const maritalstatus = await MaritalstatusRepo.delete(id);
            if (!!maritalstatus) {
                return res.status(200).json({ data: maritalstatus, message: "Marital status Deleted Successfully" });
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    }

}