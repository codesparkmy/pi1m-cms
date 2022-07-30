const expenseRepo = require('../repositories/expenseRepo');
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
            const list = await expenseRepo.getAll(page || 1, limit || "");
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
            const findByName = await expenseRepo.findByName(req.body);
            if(findByName.length) {
                return res.status(409).json({ message: 'Already Created' });
            } else {
                const list = await expenseRepo.create(req.body);
                if (!!list) {
                    return res.status(200).json({ data: list, message: "Expense Created Successfully" });
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
            const list = await expenseRepo.getOne(id);
            if (list) {
                return res.status(200).json(list);
            }
            return res.status(403).json({ message: 'Not found' });
        } catch (error) {
            return res.serverError(error);
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const list = await expenseRepo.getOne(id);
            if(list.length) {
                const listupdate = await expenseRepo.update(id,req.body);
                if (!!listupdate) {
                    return res.status(200).json({ data: listupdate, message: "Expense updated Successfully" });
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
            const list = await expenseRepo.delete(id);
            if (!!list) {
                return res.status(200).json({ data: list, message: "Expense Deleted Successfully" });
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },

    async getAllList(location) {
        try {
            const list = await expenseRepo.getAllList(location);
            if (list) {
                return list;
            }
            return { message: 'Something went wrong' };
        } catch (error) {
            return error;
        }
    },



}