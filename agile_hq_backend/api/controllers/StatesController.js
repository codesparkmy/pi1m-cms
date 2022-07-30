const stateRepo = require('../repositories/statesRepo');
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
            const list = await stateRepo.getAll(page || 1, limit || "");
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
            const findByName = await stateRepo.findByName(req.body);
            if (findByName.length) {
                return res.status(409).json({ message: 'Already Created' });
            } else {
                const list = await stateRepo.create(req.body);
                if (!!list) {
                    return res.status(200).json({ data: list, message: "State Created Successfully" });
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
            const list = await stateRepo.getOne(id);
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
            const list = await stateRepo.getOne(id);
            if (list.length) {
                const maritalupdate = await stateRepo.update(id, req.body);
                if (!!maritalupdate) {
                    return res.status(200).json({ data: maritalupdate, message: "State updated Successfully" });
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
            const list = await stateRepo.delete(id);
            if (!!list) {
                return res.status(200).json({ data: list, message: "State Deleted Successfully" });
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },


    async getstatelistBycountry(req, res) {
        try {
            const { id } = req.params;
            const list = await stateRepo.getstatelistBycountry(id);
            if (list) {
                return res.status(200).json(list);
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },


    async updateHqDetails(req, res) {
        try {
            const list = await stateRepo.findhqcmsRecord(req.body);
            if (list) {
                const list = await stateRepo.findhqcmsupdate(req.body);
                return res.status(200).json({ data: list });

            } else {
                const list = await stateRepo.findhqcmscreate(req.body);
                return res.status(200).json({ data: list });
            }


        } catch (error) {
            return res.serverError(error);
        }
    },


}