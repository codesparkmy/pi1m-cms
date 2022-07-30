class statesRepository {
    constructor() {
        this.states = sails.models.states;
        this.cafeId = sails.config.custom.cafeId;

    }

    async getAll(skip = 1, limit = 10) {
        var list = await this.states.find({
            where: {
                status: 1,
            }
        }).sort('name ASC');
        return list;
    }

    async create(body) {
        body.location = this.cafeId;
        return await this.states.create(body).fetch();
    }

    async getOne(statesId) {
        return await this.states.find({
            where: {
                id: statesId
            }
        });
    }
    async findByName(states) {
        return await this.states.find(states);
    }

    async update(statesId, body) {
        body.location = this.cafeId;
        return await this.states.updateOne({ id: statesId }).set(body);
    }

    async delete(statesId) {
        return await this.states.updateOne({ id: statesId }).set({ status: false });

    }

    async getstatelistBycountry(countryId) {
        var list = await this.states.find({
            where: {
                status: 1,
                countryId: countryId,
            }
        }).sort('name ASC');
        return list;
    }


    /* get all cms  record */
    async getAllList(locationId) {
        return await this.states.find({
            where: {
                location: locationId
            }
        });
    }


}

module.exports = new statesRepository();