class targetGroupRepository {
    constructor() {
        this.targetgroup = sails.models.targetgroup;

    }

    async getCourceTarget(recordid, location) {
        return await this.targetgroup.find({
            where: {
                recordid: recordid,
                location: location
            }            
        })
    }


    async getAll(skip = 1, limit = 10) {
        return await this.targetgroup.find({
            where: {
                status: 1,
            }            
        }).sort('name ASC');
    }

    async create(body) {
        
        return  await this.targetgroup.create(body).fetch();
    }

    async getOne(Id) {
        return  await this.targetgroup.find({
            where: {
                id : Id
            }            
        });
        
    }
    async findByName(name) {
        return  await this.targetgroup.find(name);
    }

    async update(Id, body) {
        
        return await this.targetgroup.updateOne({ id: Id }).set(body);
    }

    async delete(Id) {
        return await this.targetgroup.updateOne({ id: Id }).set({ status : false });

    }


    
     /* *
    * HQCMS REPORT
    */
   
   

    /* get all  record */
    async findhqcmsRecord(list) {
        return  await this.targetgroup.findOne({ where : { recordid : list.recordid, location: list.location } });
        
    }

    /* create record */
    async findhqcmscreate(record) {
        return  await this.targetgroup.create(record).fetch();
    }

    /* update record */
    async findhqcmsupdate(record) {
        return await this.targetgroup.updateOne({ recordid: record.recordid, location: record.location }).set(record);
    }



}

module.exports = new targetGroupRepository();
