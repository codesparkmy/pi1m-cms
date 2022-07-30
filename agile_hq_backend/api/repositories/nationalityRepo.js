class NationalityRepository {
    
    constructor(){
        this.nationality = sails.models.nationality;

    }
    async create(body){
        
        return await this.nationality.create(body).fetch();
    }

    async getAll(page,limit){
        const nationalities = await this.nationality.find({
            limit,
            skip:page-1,
            where : {
                status : 1
            }
        });
        return nationalities;
    }

    async getOne(nationalityId) {
        const nationality = await this.nationality.findOne({id:nationalityId, status : 1});
        return nationality;
    }

    async update(nationalityId,body) {
        
        let isUpdated = await this.nationality.updateOne({id:nationalityId}).set(body);
        return isUpdated;
    }

    async delete(nationalityId) {
        return  await this.nationality.updateOne({id:nationalityId}).set({ status : false });
        
    }


     /* *
    * HQCMS REPORT
    */
   
      /* get all  record */
    async findhqcmsRecord(list) {
        return  await this.nationality.findOne({ where : { recordid : list.recordid, location: list.location } });
        
    }

    /* create record */
    async findhqcmscreate(record) {
        return  await this.nationality.create(record).fetch();
    }

    /* update record */
    async findhqcmsupdate(record) {
        return await this.nationality.updateOne({ recordid: record.recordid, location: record.location }).set(record);
    }

}

module.exports = new NationalityRepository();