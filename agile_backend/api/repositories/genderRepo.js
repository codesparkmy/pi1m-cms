class genderRepository {
    constructor() {
        this.gender = sails.models.gender;
        this.cafeId = sails.config.custom.cafeId;

    }

    async getAll(skip = 1, limit = 10) {
        return await this.gender.find({
            where: {
                status: 1,
            }            
        }).sort('name ASC');
    }


    async create(body) {
        body.location = this.cafeId;
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
        body.location = this.cafeId;
        return await this.gender.updateOne({ id: Id }).set(body);
    }

    async delete(Id) {
        return await this.gender.updateOne({ id: Id }).set({ status : false });

    }


   async getAllList(locationId) {
        return  await this.gender.find({
                 where : {
                     location : locationId
                 }
             });
     }

    
   
}

module.exports = new genderRepository();
