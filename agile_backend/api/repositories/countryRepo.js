class countryRepository {
    constructor() {
        this.country = sails.models.country;
        this.cafeId = sails.config.custom.cafeId;
    }

    async getAll(skip = 1, limit = 10) {
        var list = await this.country.find({
            where: {
                status: 1,
            }            
        }).sort('name ASC');
        return list;
    }

    async create(body) {
        body.location = this.cafeId;
        return  await this.country.create(body).fetch();
    }

    async getOne(countryId) {
        return  await this.country.find({
            where: {
                id : countryId
            }            
        });
        
    }
    async findByName(country) {
        return  await this.country.find(country);
    }

    async update(countryId, body) {
        body.location = this.cafeId;
        return await this.country.updateOne({ id: countryId }).set(body);
    }

    async delete(countryId) {
        return await this.country.updateOne({ id: countryId }).set({ status : false });

    }

     /* get all cms  record */ 
     async getAllList(locationId) {
        return  await this.country.find({
            where : {
                location : locationId
            }
        });
    }


}

module.exports = new countryRepository();
