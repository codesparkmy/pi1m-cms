class captureclockRepository {
    constructor() {
        this.captureclock = sails.models.captureclock;
    }

    async getAll() {
        return await this.captureclock.find({
            where: {
                status: 1,
            }            
        });
    }

    async create(data) {
        return  await this.captureclock.create(data).fetch();
    }

    async getOne(Id) {
        return  await this.captureclock.find({
            where: {
                id : Id
            }            
        });
        
    }

    async userClockin(userid) {
        return  await this.captureclock.find({
            where: {
                userId : userid,
                status : 1
            }            
        });
    }

    async findByName(name) {
        return  await this.captureclock.find(name);
    }

    async update(Id, body) {
        return await this.captureclock.updateOne({ id: Id }).set(body);
    }


    /* *
    * HQCMS REPORT
    */
   
   /* get all cms  record */ 
  

    /* get all  record */
    async findhqcmsRecord(list) {
        return  await this.captureclock.findOne({ where : { recordid : list.recordid, locationId: list.location } });
        
    }

    /* create record */
    async findhqcmscreate(record) {
        return  await this.captureclock.create(record).fetch();
    }

    /* update record */
    async findhqcmsupdate(record) {
        return await this.captureclock.updateOne({ recordid: record.recordid, locationId: record.location }).set(record);
    }





}

module.exports = new captureclockRepository();
