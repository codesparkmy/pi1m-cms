const TrainingRepo = require('../repositories/trainingRepo');
const IncomeRepo = require("../repositories/IncomeRepo");
const UserRepo = require('../repositories/userRepo');
/**
 * TrainingController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = { 
    async getAllCourse(req, res) {
        try {
            const { page, limit } = req.query;
            const training = await TrainingRepo.getAll(page, limit);
            if (training) {
                return res.status(200).json(training);
            }
            return res.status(403).json({ message: 'data not found' });
        } catch (error) {
            return res.serverError(error);
        }
    },    
    async getExpenseList(req, res) {
        try {
            const { startDate, endDate } = req.body;
            let dt = new Date();
            let today = dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();

            let result = await IncomeRepo.getDataByDate(startDate, endDate || today, 'expense');
            if (!!result) {
                res.status(200).json(result);
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },

    async getAllActiveUser(req, res) {
        try {
            const { page, limit } = req.query;
            const users = await UserRepo.getAll(page || 1, limit || 10);
            return res.status(201).json(users);
        } catch (error) {
            return res.serverError(error);
        }
    },
};

