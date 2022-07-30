class incomeLevelRepository {
    constructor() {
        this.incomelevel = sails.models.incomelevel;
    }

    async getAll(skip = 1, limit = 10) {
        var genderList = await this.incomelevel.find({
            where: {
                status: 1,
                
            }            
        }).sort('name ASC');
        return genderList;
    }

    async getRecord(recordid, location) {
        return  await this.incomelevel.findOne({
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
    return  await this.incomelevel.findOne({ where : { recordid : list.recordid, location: list.location } });

    }

    /* create record */
    async findhqcmscreate(record) {
        return  await this.incomelevel.create(record).fetch();
    }

    /* update record */
    async findhqcmsupdate(record) {
        return await this.incomelevel.updateOne({ recordid: record.recordid, location: record.location }).set(record);
    }


    




    /* un used  apis */

    async create(body) {
        
        return  await this.incomelevel.create(body).fetch();
    }

    async getOne(Id) {
        return  await this.incomelevel.find({
            where: {
                id : Id
            }            
        });
        
    }
    async findByName(name) {
        return  await this.incomelevel.find(name);
    }

    async update(Id, body) {
        
        return await this.incomelevel.updateOne({ id: Id }).set(body);
    }

    async delete(Id) {
        return await this.incomelevel.updateOne({ id: Id }).set({ status : false });

    }



}

module.exports = new incomeLevelRepository();
