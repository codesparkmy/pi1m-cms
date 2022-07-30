class captureclockRepository {
    constructor() {
        this.captureclock = sails.models.captureclock;
        this.cafeId = sails.config.custom.cafeId;
    }

    async getAll() {
        return await this.captureclock.find().sort("id DESC").populate('userId');
    }

    async create(data) {
        data.locationId = this.cafeId;
        return await this.captureclock.create(data).fetch();
    }

    async getOne(Id) {
        return await this.captureclock.find({
            where: {
                id: Id
            }
        });
    }

    async getuserActivestatus(id, body) {
        return await this.captureclock.find({
            where: {
                userId: body.userId,
                locationId: body.locationId,
                status: 1,
            }
        });
    }



    async userClockin(userid) {
        return await this.captureclock.find({
            where: {
                userId: userid,
                status: 1
            }
        }).sort("id  DESC");
    }

    async findByName(name) {
        return await this.captureclock.find(name);
    }

    async update(Id, body) {
        return await this.captureclock.updateOne({ id: Id }).set(body);
    }

    /* get all cms  record */
    async getAllList(locationId) {
        return await this.captureclock.find({
            where: {
                locationId: locationId
            }
        });
    }

}

module.exports = new captureclockRepository();