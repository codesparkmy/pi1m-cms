class statesRepository {
    constructor() {
        this.states = sails.models.states;
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

    /* *
     * HQCMS REPORT
     */

    /* get all  record */
    async findhqcmsRecord(list) {
        return await this.states.findOne({ where: { recordid: list.recordid, location: list.location } });

    }

    /* create record */
    async findhqcmscreate(record) {
        return await this.states.create(record).fetch();
    }

    /* update record */
    async findhqcmsupdate(record) {
        return await this.states.updateOne({ recordid: record.recordid, location: record.location }).set(record);
    }

}

module.exports = new statesRepository();