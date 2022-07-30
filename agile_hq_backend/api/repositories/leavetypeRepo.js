class leavetypeRepository {
    constructor() {
        this.leavetype = sails.models.leavetype;
    }

    async getAll(skip = 1, limit = 10) {
        return await this.leavetype.find({
            where: {
                status: 1,
            }            
        }).sort('name ASC');
    }

    async create(body) {
        
        return  await this.leavetype.create(body).fetch();
    }

    async getOne(Id) {
        return  await this.leavetype.find({
            where: {
                id : Id
            }            
        });
        
    }
    async findByName(name) {
        return  await this.leavetype.find(name);
    }

    async update(Id, body) {
        
        return await this.leavetype.updateOne({ id: Id }).set(body);
    }

    async delete(Id) {
        return await this.leavetype.updateOne({ id: Id }).set({ status : false });

    }

     /* *
    * HQCMS REPORT
    */
   

    /* get all  record */
    async findhqcmsRecord(list) {
        return  await this.leavetype.findOne({ where : { recordid : list.recordid, location: list.location } });
        
    }

    /* create record */
    async findhqcmscreate(record) {
        return  await this.leavetype.create(record).fetch();
    }

    /* update record */
    async findhqcmsupdate(record) {
        return await this.leavetype.updateOne({ recordid: record.recordid, location: record.location }).set(record);
    }




}

module.exports = new leavetypeRepository();
