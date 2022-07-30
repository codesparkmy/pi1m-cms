const trainingCategoryRepo = require('../repositories/trainingCategoryRepo');
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
            const list = await trainingCategoryRepo.getAll(page || 1, limit || "");
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
            const findByName = await trainingCategoryRepo.findByName(req.body);
            if(findByName.length) {
                return res.status(409).json({ message: 'Already Created' });
            } else {
                const list = await trainingCategoryRepo.create(req.body);
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
            const getRecord = await trainingCategoryRepo.getOne(id);
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
            const getRecord = await trainingCategoryRepo.getOne(id);
            if(getRecord.length) {
                const updateRecord = await trainingCategoryRepo.update(id,req.body);
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
            const deleteRecord = await trainingCategoryRepo.delete(id);
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
            const list = await trainingCategoryRepo.getAllList(location);
            if (list) {
                return list;
            }
            return { message: 'Something went wrong' };
        } catch (error) {
            return error;
        }
    },

}