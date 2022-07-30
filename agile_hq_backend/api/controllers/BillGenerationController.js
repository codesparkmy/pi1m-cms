const BillGenrationRepo = require("../repositories/billGenerationRepo");
/**
 * BillGenerationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    async createBill(req, res){
        try {
           
            const bill = await BillGenrationRepo.create(req.body);
            if (bill) {
                return res.status(200).json({ data: bill,message:'Updated Successfully'});
            }
            return res.status(202).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },
    

    async getOne(req, res){
        try{
            const{billId} = req.params;
            let bill = await BillGenrationRepo.getOne(billId);           
            if(bill.length !=0){
                var data = bill.reduce((a, b) => {
                    return new Date(a.createdAt) > new Date(b.createdAt) ? a : b;
                  })
                return res.status(200).json(data);
            }
            return res.status(202).json({message:"data not found"});
        }catch(error){
            res.serverError(error);
        }
    },

    async update(req, res){
        try{
            const { billId }=req.params;  
                let isUpdated = await BillGenrationRepo.update(billId,req.body);
                if(!!isUpdated){
                    return res.status(200).json({message:"Updated Successfully"});
                }
                return res.status(400).json({message:"Bad Request"});
           // }
           // return res.notFound();
        }catch(error){
            res.serverError(error);
        }
    },

    async getBillSetting(req, res){
        try{
            const {isMember} = req.params;
            let list = await BillGenrationRepo.getBillSetting(isMember);           
            if(!!list){
                return res.status(200).json(list);
            }
            return res.status(202).json({message:"data not found"});
        }catch(error){
            res.serverError(error);
        }
    },
    async updateBillSetting(req, res){
        try{
            const { billId }=req.params;  
                let isUpdated = await BillGenrationRepo.updateBillSetting(billId,req.body);
                if(!!isUpdated){
                    return res.status(200).json({message:"Updated Successfully"});
                }
                return res.status(400).json({message:"Bad Request"});
        }catch(error){
            res.serverError(error);
        }
    },

    async getAllTaxsettings(req, res){
        try{
            const{locationId} = req.params;
            let list = await BillGenrationRepo.getAllTaxsettings(locationId);      
            if(!!list){
                return res.status(200).json(list);
            }
            return res.status(202).json({message:"data not found"});
        }catch(error){
            res.serverError(error);
        }
    },
    async getOneTaxsettings(req, res){
        try{
            const{id} = req.params;
            let list = await BillGenrationRepo.getOneTaxsettings(id);      
            if(!!list){
                return res.status(200).json(list);
            }
            return res.status(202).json({message:"data not found"});
        }catch(error){
            res.serverError(error);
        }
    },
   
    async createTaxsetting(req, res){
        try {
            const list = await BillGenrationRepo.createTaxsetting(req.body);
            if (list) {
                return res.status(200).json({ data: list,message:'created Successfully'});
            }
            return res.status(202).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },
    
    async updateTaxsetting(req, res){
        try {
            const {id} =req.params;
            const list = await BillGenrationRepo.updateTaxsetting(id,req.body);
            if (list) {
                return res.status(200).json({ data: list,message:'updated successfully'});
            }
            return res.status(202).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },

   
    async updateHqDetails(req, res) {
        try {
            const list = await BillGenrationRepo.findhqcmsRecord(req.body);
            if(list) {
                const list = await BillGenrationRepo.findhqcmsupdate(req.body);
                return res.status(200).json({ data: list });        

            } else {
                const list = await BillGenrationRepo.findhqcmscreate(req.body);
                return res.status(200).json({ data: list });        
            }

     
        } catch (error) {
            return res.serverError(error);
        }
    },


    
    async hqcmsTaxSettingsupdate(req, res) {
        try {
            const list = await BillGenrationRepo.hqcmsTaxSettingAll(req.body);
            if(list) {
                const list = await BillGenrationRepo.hqcmstaxupdateall(req.body);
                return res.status(200).json({ data: list });        

            } else {
                const list = await BillGenrationRepo.hqcmscreateall(req.body);
                return res.status(200).json({ data: list });        
            }

     
        } catch (error) {
            return res.serverError(error);
        }
    },






};

