class holidayRepository {
    constructor() {
        this.holiday = sails.models.holiday;
        this.cafeId = sails.config.custom.cafeId;

    }

    async getAll(skip = 1, limit = 10) {
        return await this.holiday.find({
            where: {
                status: 1,
            }
        }).sort('name ASC');
    }


    async create(body) {
        body.location = this.cafeId;
        return await this.holiday.create(body).fetch();
    }

    async getOne(Id) {
        return await this.holiday.findOne({
            where: {
                id: Id
            }
        }).populate('location');

    }
    async findByName(body) {
        return await this.holiday.find({
            where: {
                name: body.name
            }
        });
    }

    async update(Id, body) {
        body.location = this.cafeId;
        return await this.holiday.updateOne({ id: Id }).set(body);
    }

    async delete(Id) {
        return await this.holiday.updateOne({ id: Id }).set({ status: false });

    }


    async getAllList(locationId) {
        return await this.holiday.find({
            where: {
                location: locationId
            }
        });
    }



}

module.exports = new holidayRepository();