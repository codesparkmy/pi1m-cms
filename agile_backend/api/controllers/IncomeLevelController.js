const IncomeLevelRepo = require('../repositories/incomeLevelRepo');
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
            const list = await IncomeLevelRepo.getAll(page || 1, limit || "");
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
            const findByName = await IncomeLevelRepo.findByName(req.body);
            if(findByName.length) {
                return res.status(409).json({ message: 'Already Created' });
            } else {
                const list = await IncomeLevelRepo.create(req.body);
                if (!!list) {
                    return res.status(200).json({ data: list, message: "Income Level Created Successfully" });
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
            const getRecord = await IncomeLevelRepo.getOne(id);
            if (getRecord) {
                return res.status(200).json(getRecord);
            }
            return res.status(403).json({ message: 'Not found' });
        } catch (error) {
            return res.serverError(error);
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const getRecord = await IncomeLevelRepo.getOne(id);
            if(getRecord.length) {
                const updateRecord = await IncomeLevelRepo.update(id,req.body);
                if (!!updateRecord) {
                    return res.status(200).json({ data: updateRecord, message: "Income Level updated Successfully" });
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
            const deleteRecord = await IncomeLevelRepo.delete(id);
            if (!!deleteRecord) {
                return res.status(200).json({ data: deleteRecord, message: "Income level Deleted Successfully" });
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },

    async getAllList(location) {
        try {
            const list = await IncomeLevelRepo.getAllList(location);
            if (list) {
                return list;
            }
            return { message: 'Something went wrong' };
        } catch (error) {
            return error;
        }
    },

}