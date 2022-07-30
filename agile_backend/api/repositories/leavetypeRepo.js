class leavetypeRepository {
    constructor() {
        this.leavetype = sails.models.leavetype;
        this.cafeId = sails.config.custom.cafeId;

    }

    async getAll(skip = 1, limit = 10) {
        return await this.leavetype.find({
            where: {
                status: 1,
            }            
        }).sort('name ASC');
    }

    async create(body) {
        body.location = this.cafeId;
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
        body.location = this.cafeId;
        return await this.leavetype.updateOne({ id: Id }).set(body);
    }

    async delete(Id) {
        return await this.leavetype.updateOne({ id: Id }).set({ status : false });

    }


    /* get all cms  record */ 
   async getAllList(locationId) {
    return  await this.leavetype.find({
            where : {
                location : locationId
            }
        });
    }


}

module.exports = new leavetypeRepository();
