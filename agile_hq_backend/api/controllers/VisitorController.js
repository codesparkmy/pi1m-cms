const VisitorRepo = require("../repositories/visitorRepo");
const genderRepo = require('../repositories/genderRepo');
const IncomeLevelRepo = require('../repositories/incomeLevelRepo');
const occupationRepo = require('../repositories/occupationRepo');
const cafeRepo = require('../repositories/cafeRepo');


/**
 * VisitorController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

/* hqcms details */

module.exports = {

    async getAll(req, res) {
        try {
            const { page, limit } = req.query;
            let records = await VisitorRepo.getAll(page || 1, limit || "");

            if (!!records) {
                for (const list of records) {
                    var genderList = await genderRepo.getRecord(list.gender, list.location.id);
                    var incomeLevelList = await IncomeLevelRepo.getRecord(list.incomeLevel, list.location.id);
                    var occupationlist = await occupationRepo.getRecord(list.occupation, list.location.id);
                    var locationlist = await cafeRepo.getOne(list.location.id);

                    list.gender = genderList.name;
                    list.incomeLevel = incomeLevelList.name;
                    list.occupation = occupationlist.name;
                    list.location = locationlist.branchName;
                }
                return res.status(200).json(records);
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },

    async getAllvisitor(req, res) {
        try {
            const { page, limit } = req.query;
            let records = await VisitorRepo.getAllvisitor();
            return res.status(200).json(records);
        } catch (error) {
            res.serverError(error);
        }
    },


    async getOne(req, res) {
        try {
            const { data } = req.params;
            let visitor = await VisitorRepo.getOne(data);
            if (!!visitor) {
                var genderList = await genderRepo.getRecord(visitor.gender, visitor.location);
                var incomeLevelList = await IncomeLevelRepo.getRecord(visitor.incomeLevel, visitor.location);
                var occupationlist = await occupationRepo.getRecord(visitor.occupation, visitor.location);
                var locationlist = await cafeRepo.getOne(visitor.location);

                visitor.gender = genderList.name;
                visitor.incomeLevel = incomeLevelList.name;
                visitor.occupation = occupationlist.name;
                visitor.location = locationlist.branchName;

                return res.status(200).json(visitor);
            }
            return res.notFound();

        } catch (error) {
            res.serverError(error);
        }
    },






    async updateMembershipHqDetails(req, res) {
        try {
            const list = await VisitorRepo.findhqcmsmembershipRecord(req.body);
            if (list) {
                const list = await VisitorRepo.findhqcmsmembershipupdate(req.body);
                return res.status(200).json({ data: list });

            } else {
                const list = await VisitorRepo.findhqcmsmembershipcreate(req.body);
                return res.status(200).json({ data: list });
            }


        } catch (error) {
            return res.serverError(error);
        }
    },

    async updatevisitorManagementHqDetails(req, res) {
        try {
            const list = await VisitorRepo.hqcmsvisitorRecord(req.body);
            if (list) {
                const list = await VisitorRepo.hqcmsvisitorupdate(req.body);
                return res.status(200).json({ data: list });

            } else {
                const list = await VisitorRepo.hqcmsvisitorcreate(req.body);
                return res.status(200).json({ data: list });
            }


        } catch (error) {
            return res.serverError(error);
        }
    },












































};