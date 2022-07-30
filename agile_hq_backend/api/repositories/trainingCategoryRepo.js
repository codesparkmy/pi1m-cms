class trainingCategoryRepository {
    constructor() {
        this.category = sails.models.trainingcategory;

    }
    
    async getCourceType(recordid, location) {
        return await this.category.findOne({
            where: {
                recordid: recordid,
                location: location,
            }            
        })
    }



    async getAll(skip = 1, limit = 10) {
        return await this.category.find({
            where: {
                status: 1,
            }            
        }).sort('name ASC');
    }

    async create(body) {
        
        return  await this.category.create(body).fetch();
    }

    async getOne(Id) {
        return  await this.category.find({
            where: {
                id : Id
            }            
        });
        
    }
    async findByName(name) {
        return  await this.category.find(name);
    }

    async update(Id, body) {
        
        return await this.category.updateOne({ id: Id }).set(body);
    }

    async delete(Id) {
        return await this.category.updateOne({ id: Id }).set({ status : false });

    }


    
     /* *
    * HQCMS REPORT
    */
   
   /* get all  record */
    async findhqcmsRecord(list) {
        return  await this.category.findOne({ where : { recordid : list.recordid, location: list.location } });
        
    }

    /* create record */
    async findhqcmscreate(record) {
        return  await this.category.create(record).fetch();
    }

    /* update record */
    async findhqcmsupdate(record) {
        return await this.category.updateOne({ recordid: record.recordid, location: record.location }).set(record);
    }



}

module.exports = new trainingCategoryRepository();
