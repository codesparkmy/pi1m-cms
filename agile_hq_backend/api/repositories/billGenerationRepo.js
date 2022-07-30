class BillGenerationRepository{
    constructor(){
        this.BillGeneration = sails.models.billgeneration;
        this.taxsetting = sails.models.taxsetting;
        
        
    }

    async create(data){
        return await this.BillGeneration.create(data).fetch();
    }
    
    async getOneBill(locationId, ismember) {
        return await this.BillGeneration.findOne({ where: {
            locationId: locationId,
            isMember: ismember   
        } } );

    }
    async getId(id){
            return await this.BillGeneration.find({ where: {
            id: id        
            } } );
        }
    async getOne(id){
        return await this.BillGeneration.find({ where: {
        id: id        
    } } );
    }
    
    async update(billId,data){
        return await this.BillGeneration.updateOne({id:billId}).set(data);
    }
    
    async updateBillSetting(billId,data){
        return await this.BillGeneration.updateOne({id:billId}).set(data);
    }
    
    async getBillSetting(memberid){
        return await this.BillGeneration.findOne({ where: { isMember: memberid }});
    }

    /* tax settings */
    
    async createTaxsetting(data){
        return await this.taxsetting.create(data).fetch();
    }

    async updateTaxsetting(id,data){
            var updatefield =  await this.taxsetting.updateOne({id : id}).set(data);
            if(!!updatefield) {
                 await this.taxsetting.update({status : 1}).set({
                    gstRate : data.gstRate,
                    sgstRate : data.sgstRate,
                });
            }
            return updatefield;
    }

    async getAllTaxsettings(location){
       return await this.taxsetting.find({
           where : {
               location: location,
               status : 1
           }
       })
    }

    async getOneTaxsettings(id){
        return await this.taxsetting.findOne({
            where : {
                id: id,
                status : 1
            }
        })
     }


    /* *
    * HQCMS REPORT
    */
   
     
    /* get all  record */
    async findhqcmsRecord(list) {
         return  await this.BillGeneration.findOne({ where : { recordid : list.recordid, locationId: list.location } });
        
    }

    /* create record */
    async findhqcmscreate(record) {
        return  await this.BillGeneration.create(record).fetch();
    }

    /* update record */
    async findhqcmsupdate(record) {
        return await this.BillGeneration.updateOne({ recordid: record.recordid, locationId: record.location }).set(record);
    }



    
   
   /* get all cms  record tax settings */ 
   

    /* get all  record */
    async hqcmsTaxSettingAll(list) {
        return  await this.taxsetting.findOne({ where : { recordid : list.recordid, location: list.location } });
        
    }

    /* create record */
    async hqcmscreateall(record) {
        return  await this.taxsetting.create(record).fetch();
    }

    /* update record */
    async hqcmstaxupdateall(record) {
        return await this.taxsetting.updateOne({ recordid: record.recordid, location: record.location }).set(record);
    }




    
}

module.exports = new BillGenerationRepository();