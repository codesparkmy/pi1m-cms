class occupationRepository {
    constructor() {
        this.occupation = sails.models.occupation;
        this.cafeId = sails.config.custom.cafeId;
    }

    async getAll(skip = 1, limit = 10) {
        var list = await this.occupation.find({
            where: {
                status: 1,
            }            
        }).sort('name ASC');
        return list;
    }

    async create(body) {
        body.location = this.cafeId;
        return  await this.occupation.create(body).fetch();
    }

    async getOne(occupationId) {
        return  await this.occupation.find({
            where: {
                id : occupationId
            }            
        });
        
    }
    async findByName(occupation) {
        return  await this.occupation.find(occupation);
    }

    async update(occupationId, body) {
        body.location = this.cafeId;
        return await this.occupation.updateOne({ id: occupationId }).set(body);
    }

    async delete(occupationId) {
        return await this.occupation.updateOne({ id: occupationId }).set({ status : false });

    }

    async getAllList(locationId) {
        return  await this.occupation.find({
            where : {
                location : locationId
            }
        });
    }



}

module.exports = new occupationRepository();
