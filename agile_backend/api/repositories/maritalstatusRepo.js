class maritalstatusRepository {
    constructor() {
        this.maritalstatus = sails.models.maritalstatus;
        this.cafeId = sails.config.custom.cafeId;
    }

    async getAll(skip = 1, limit = 10) {
        var list = await this.maritalstatus.find({
            where: {
                status: 1,
                
            }            
        }).sort('name ASC');
        return list;
    }

    async getAllList(locationId) {
        return  await this.maritalstatus.find({
            where : {
                location : locationId
            }
        });
    }


    async create(body) {
        body.location = this.cafeId;
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
        body.location = this.cafeId;
        return await this.maritalstatus.updateOne({ id: maritalstatusId }).set(body);
    }

    async delete(maritalstatusId) {
        return await this.maritalstatus.updateOne({ id: maritalstatusId }).set({ status : false });

    }


}

module.exports = new maritalstatusRepository();
