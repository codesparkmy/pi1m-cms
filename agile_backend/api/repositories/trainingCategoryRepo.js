class trainingCategoryRepository {
    constructor() {
        this.category = sails.models.trainingcategory;
        
        this.cafeId = sails.config.custom.cafeId;

    }

    async getAll(skip = 1, limit = 10) {
        return await this.category.find({
            where: {
                status: 1,
            }            
        }).sort('name ASC');
    }

    async create(body) {
        body.location = this.cafeId;
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
        body.location = this.cafeId;
        return await this.category.updateOne({ id: Id }).set(body);
    }

    async delete(Id) {
        return await this.category.updateOne({ id: Id }).set({ status : false });

    }

     /* get all cms  record */ 
   async getAllList(locationId) {
    return  await this.category.find({
            where : {
                location : locationId
            }
        });
    }

    

}

module.exports = new trainingCategoryRepository();
