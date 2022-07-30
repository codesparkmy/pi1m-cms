const purchaseRepo = require('../repositories/purchaseRepo');
//const User = require("../models/User");
/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    async create(req, res) {
        try {
            const { date , transactionId, totalamount } = req.body
            const purchase = { date : date , transactionId : transactionId, totalamount : totalamount }
            const purchaseList = await purchaseRepo.createPurchase(purchase);
            if(!!purchaseList) {
                for (var details of req.body.details) {
                    details.purchaseId = purchaseList.id;
                    var purchaseDetails = await purchaseRepo.createPurchaseDetail(details);
                }
                return res.status(200).json({ message: "Purchase created successfully" });
            } else {
                return res.status(403).json({ message: 'Something went wrong' });    
            }
            
        } catch (error) {
            return res.serverError(error);
        }
    },

    async getAll(req, res) {
        try {
            const { page, limit } = req.query;
            const list = await purchaseRepo.getAll(page || 1, limit || "");
            if (list) {
                return res.status(200).json(list);
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },
        

    async getOne(req, res) {
        try {
            const { id } = req.params;
            const list = await purchaseRepo.getOne(id);
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
            const { date , transactionId, totalamount } = req.body
            const list = await purchaseRepo.getOne(id);
            if(list.length) {
                const purchase = { date : date , transactionId : transactionId, totalamount : totalamount }
                const purchaseList = await purchaseRepo.update(id,purchase);
                const purchaseDetailDelete = await purchaseRepo.purchaseDetailDelete(id);
                if (!!purchaseList) {
                    for (var details of req.body.details) {
                        details.purchaseId = purchaseList.id;
                        var purchaseDetails = await purchaseRepo.createPurchaseDetail(details);
                    }
                    return res.status(200).json({ message: "Purchase updated Successfully" });
                }
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },

    async delete(req, res) {
        try {
            var { id } = req.params;
            const list = await purchaseRepo.delete(id);
            if (!!list) {
                const purchaseDetailDelete = await purchaseRepo.purchaseDetailDelete(id);
                if(!!purchaseDetailDelete) {
                    return res.status(200).json({ message: "purchase deleted successfully" });
                } else {
                    return res.status(403).json({ message: 'Something went wrong' });        
                }
                
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },


    async updatePurchaseHqDetails(req, res) {
        try {
            const list = await purchaseRepo.purchasehqcmsRecord(req.body);
            if(list) {
                const list = await purchaseRepo.purchasehqcmsupdate(req.body);
                return res.status(200).json({ data: list });        

            } else {
                const list = await purchaseRepo.purchasehqcmscreate(req.body);
                return res.status(200).json({ data: list });        
            }

     
        } catch (error) {
            return res.serverError(error);
        }
    },

    async updatePurchaseDetailsHqDetails(req, res) {
        try {
            const list = await purchaseRepo.purchaseDetailshqcmsRecord(req.body);
            if(list) {
                const list = await purchaseRepo.purchaseDetailshqcmsupdate(req.body);
                return res.status(200).json({ data: list });        

            } else {
                const list = await purchaseRepo.purchaseDetailshqcmscreate(req.body);
                return res.status(200).json({ data: list });        
            }

     
        } catch (error) {
            return res.serverError(error);
        }
    },


}