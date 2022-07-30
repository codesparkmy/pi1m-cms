class targetGroupRepository {
    constructor() {
        this.targetgroup = sails.models.targetgroup;
        
        this.cafeId = sails.config.custom.cafeId;


    }

    async getAll(skip = 1, limit = 10) {
        return await this.targetgroup.find({
            where: {
                status: 1,
            }            
        }).sort('name ASC');
    }

    async create(body) {
        body.location = this.cafeId;
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
        body.location = this.cafeId;
        return await this.targetgroup.updateOne({ id: Id }).set(body);
    }

    async delete(Id) {
        return await this.targetgroup.updateOne({ id: Id }).set({ status : false });

    }


    /* get all cms  record */ 
   async getAllList(locationId) {
    return  await this.targetgroup.find({
            where : {
                location : locationId
            }
        });
    }



}

module.exports = new targetGroupRepository();
