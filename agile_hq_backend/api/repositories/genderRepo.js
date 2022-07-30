class genderRepository {
    constructor() {
        this.gender = sails.models.gender;
    }


    /* hqcms apis */
    async getAll(skip = 1, limit = 10) {
        return await this.gender.find({
            where: {
                status: 1,
            }            
        }).sort('name ASC');
    }



    async getRecord(genderid, location) {
        return  await this.gender.findOne({
            where: {
                recordid : genderid,
                location : location
            }            
        });
    }


    
    /* *
    * HQCMS REPORT
    */
    
   async findhqcmsRecord(list) {
         return  await this.gender.findOne({ where : { recordid : list.recordid, location: list.location } });

    }   

    /* create record */
    async findhqcmscreate(record) {
        return  await this.gender.create(record).fetch();
    }

    /* update record */
    async findhqcmsupdate(record) {
        return await this.gender.updateOne({ recordid: record.recordid, location: record.location }).set(record);
    }





    /* other apis */

    async create(body) {
        
        return  await this.gender.create(body).fetch();
    }

    async getOne(Id) {
        return  await this.gender.find({
            where: {
                id : Id
            }            
        });
        
    }

  
    async findByName(name) {
        return  await this.gender.find(name);
    }

    async update(Id, body) {
        
        return await this.gender.updateOne({ id: Id }).set(body);
    }

    async delete(Id) {
        return await this.gender.updateOne({ id: Id }).set({ status : false });

    }
    
   
   


   




}

module.exports = new genderRepository();
