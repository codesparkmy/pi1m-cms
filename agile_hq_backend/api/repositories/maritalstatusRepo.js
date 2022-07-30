class maritalstatusRepository {
    constructor() {
        this.maritalstatus = sails.models.maritalstatus;
    }

    async getAll(skip = 1, limit = 10) {
        var list = await this.maritalstatus.find({
            where: {
                status: 1,
                
            }            
        }).sort('name ASC');
        return list;
    }

 


    async create(body) {
        
        return  await this.maritalstatus.create(body).fetch();
    }

    async getOne(maritalstatusId) {
        return  await this.maritalstatus.find({
            where: {
                id : maritalstatusId
            }            
        });
        
    }
    
   
    async findByName(maritalstatus) {
        return  await this.maritalstatus.find(maritalstatus);
    }

    async update(maritalstatusId, body) {
        
        return await this.maritalstatus.updateOne({ id: maritalstatusId }).set(body);
    }

    async delete(maritalstatusId) {
        return await this.maritalstatus.updateOne({ id: maritalstatusId }).set({ status : false });

    }


    /* *
    * HQCMS REPORT
    */
    
   /* get all  record */
    async findhqcmsRecord(list) {
        return  await this.maritalstatus.findOne({ where : { recordid : list.recordid, location: list.location } });
        
    }
   
    /* create record */
    async findhqcmscreate(record) {
        return  await this.maritalstatus.create(record).fetch();
    }

     /* update record */
    async findhqcmsupdate(record) {
        return await this.maritalstatus.updateOne({ recordid: record.recordid, location: record.location }).set(record);
    }


}

module.exports = new maritalstatusRepository();
