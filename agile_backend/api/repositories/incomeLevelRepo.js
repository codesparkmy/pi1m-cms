class incomeLevelRepository {
    constructor() {
        this.incomelevel = sails.models.incomelevel;
        this.cafeId = sails.config.custom.cafeId;
    }

    async getAll(skip = 1, limit = 10) {
        var genderList = await this.incomelevel.find({
            where: {
                status: 1,
                
            }            
        }).sort('name ASC');
        return genderList;
    }

    async create(body) {
        body.location = this.cafeId;
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
        body.location = this.cafeId;
        return await this.incomelevel.updateOne({ id: Id }).set(body);
    }

    async delete(Id) {
        return await this.incomelevel.updateOne({ id: Id }).set({ status : false });

    }

    /* get all cms  record */ 
    async getAllList(locationId) {
        return  await this.incomelevel.find({
            where : {
                location : locationId
            }
        });
    }


}

module.exports = new incomeLevelRepository();
