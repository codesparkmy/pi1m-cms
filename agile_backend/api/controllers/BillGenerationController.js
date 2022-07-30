const billGenerationRepo = require("../repositories/billGenerationRepo");
/**
 * BillGenerationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    // update GST and SGST
    async updateTaxsetting(req, res) {
        try {
            const bodyData = {
                'GstRate': req.body.gstRate,
                'SgstRate': req.body.sgstRate
            }
            const list = await billGenerationRepo.updateTaxsetting(bodyData);
            if (!!list) {
                return res.status(200).json({ message: 'updated successfully' });
            }
            return res.status(202).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },



    async createBill(req, res) {
        try {

            const bill = await billGenerationRepo.create(req.body);
            if (bill) {
                return res.status(200).json({ data: bill, message: 'Created Successfully' });
            }
            return res.status(202).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },


    async getOne(req, res) {
        try {
            const { billId } = req.params;
            let bill = await billGenerationRepo.getOne(billId);
            if (bill.length != 0) {
                var data = bill.reduce((a, b) => {
                    return new Date(a.createdAt) > new Date(b.createdAt) ? a : b;
                })
                return res.status(200).json(data);
            }
            return res.status(202).json({ message: "data not found" });
        } catch (error) {
            res.serverError(error);
        }
    },

    async update(req, res) {
        try {
            const { billId } = req.params;
            let isUpdated = await billGenerationRepo.update(billId, req.body);
            if (!!isUpdated) {
                return res.status(200).json({ message: "Updated Successfully" });
            }
            return res.status(400).json({ message: "Bad Request" });
        } catch (error) {
            res.serverError(error);
        }
    },

    async getBillSetting(req, res) {
        try {
            const { isMember } = req.params;
            let list = await billGenerationRepo.getBillSetting(isMember);
            if (!!list) {
                return res.status(200).json(list);
            }
            return res.status(202).json({ message: "data not found" });
        } catch (error) {
            res.serverError(error);
        }
    },
    async updateBillSetting(req, res) {
        try {
            const { billId } = req.params;
            var bodyData = {
                'GstRate': req.body.gstRate,
                'SgstRate': req.body.sgstRate
            }
            let isUpdated = await billGenerationRepo.updateBillSetting(billId, bodyData);
            if (!!isUpdated) {
                return res.status(200).json({ message: "Updated Successfully" });
            }
            return res.status(400).json({ message: "Bad Request" });
        } catch (error) {
            res.serverError(error);
        }
    },

    async getAllTaxsettings(req, res) {
        try {
            const { locationId } = req.params;
            let list = await billGenerationRepo.getAllTaxsettings(locationId);
            if (!!list) {
                return res.status(200).json(list);
            }
            return res.status(202).json({ message: "data not found" });
        } catch (error) {
            res.serverError(error);
        }
    },
    async getOneTaxsettings(req, res) {
        try {
            const { id } = req.params;
            let list = await billGenerationRepo.getOneTaxsettings(id);
            if (!!list) {
                return res.status(200).json(list);
            }
            return res.status(202).json({ message: "data not found" });
        } catch (error) {
            res.serverError(error);
        }
    },

    async createTaxsetting(req, res) {
        try {
            const list = await billGenerationRepo.createTaxsetting(req.body);
            if (list) {
                return res.status(200).json({ data: list, message: 'created Successfully' });
            }
            return res.status(202).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },


    async getAllList(location) {
        try {
            const list = await billGenerationRepo.getAllList(location);

            if (list) {
                return list;
            }
            return { message: 'Something went wrong' };
        } catch (error) {
            return error;
        }
    },


    // async getAllTaxList(location) {
    //     try {
    //         const list = await billGenerationRepo.getAllTaxList(location);
    //         if (list) {
    //             return list;
    //         }
    //         return { message: 'Something went wrong' };
    //     } catch (error) {
    //         return error;
    //     }
    // },








};