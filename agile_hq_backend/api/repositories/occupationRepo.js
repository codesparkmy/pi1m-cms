class occupationRepository {
    constructor() {
        this.occupation = sails.models.occupation;
    }

    async getAll(skip = 1, limit = 10) {
        var list = await this.occupation.find({
            where: {
                status: 1,
            }            
        }).sort('name ASC');
        return list;
    }


    async getRecord(recordid, location) {
        return  await this.occupation.findOne({
            where: {
                recordid : recordid,
                location : location
            }            
        });
    }


     /* *
    * HQCMS REPORT
    */
   
    /* get all  record */
    async findhqcmsRecord(list) {
        return  await this.occupation.findOne({ where : { recordid : list.recordid, location: list.location } });
        
    }

    /* create record */
    async findhqcmscreate(record) {
        return  await this.occupation.create(record).fetch();
    }

    /* update record */
    async findhqcmsupdate(record) {
        return await this.occupation.updateOne({ recordid: record.recordid, location: record.location }).set(record);
    }


    /* other apis */

    async create(body) {
        
        return  await this.occupation.create(body).fetch();
    }

    async getOne(occupationId) {
        return  await this.occupation.find({
            where: {
                id : occupationId
            }            
        });
        
    }
    async findByName(occupation) {
        return  await this.occupation.find(occupation);
    }

    async update(occupationId, body) {
        
        return await this.occupation.updateOne({ id: occupationId }).set(body);
    }

    async delete(occupationId) {
        return await this.occupation.updateOne({ id: occupationId }).set({ status : false });

    }


    



}

module.exports = new occupationRepository();
