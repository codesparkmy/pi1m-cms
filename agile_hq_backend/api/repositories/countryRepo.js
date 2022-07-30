class countryRepository {
    constructor() {
        this.country = sails.models.country;
    }

    async getAll(skip = 1, limit = 10) {
        var list = await this.country.find({
            where: {
                status: 1,
            }            
        }).sort('name ASC');
        return list;
    }

    async create(body) {
        
        return  await this.country.create(body).fetch();
    }

    async getOne(countryId) {
        return  await this.country.find({
            where: {
                id : countryId
            }            
        });
        
    }
    async findByName(country) {
        return  await this.country.find(country);
    }

    async update(countryId, body) {
        
        return await this.country.updateOne({ id: countryId }).set(body);
    }

    async delete(countryId) {
        return await this.country.updateOne({ id: countryId }).set({ status : false });

    }


     /* *
    * HQCMS REPORT
    */
   
   /* get all cms  record */ 
   
    /* get all  record */
    async findhqcmsRecord(list) {
         return  await this.country.findOne({ where : { recordid : list.recordid, location: list.location } });
        
    }

    /* create record */
    async findhqcmscreate(record) {
        return  await this.country.create(record).fetch();
    }

    /* update record */
    async findhqcmsupdate(record) {
        return await this.country.updateOne({ recordid: record.recordid, location: record.location }).set(record);
    }


}

module.exports = new countryRepository();
