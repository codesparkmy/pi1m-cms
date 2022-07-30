class VisitorRepository {
    constructor() {
        this.visitor = sails.models.visitor;
        this.membership = sails.models.membership;

    }

    /* hqcms api */
    async getAll(skip = 1, limit) {
        if (limit != "") {
            return await this.visitor.find({
                where: {
                    status: 1,
                    name: limit
                }
            }).populate('location')

        } else {
            return await this.visitor.find({
                where: {
                    status: 1
                }
            }).populate('location')
        }
    }
    async getAllvisitor() {
        return await this.visitor.find();
    }

    async findVisitorByRecordId(recordid, location) {
        return await this.visitor.findOne({
            where: {
                recordid: recordid,
                location: location
            }
        })
    }

    async getOne(visitorId) {
        return await this.visitor.findOne({ id: visitorId });

    }






    /* *
     * HQCMS REPORT
     */

    /* get all  record */
    async findhqcmsmembershipRecord(list) {
        return await this.membership.findOne({ where: { recordid: list.recordid, location: list.location } });

    }

    /* create record */
    async findhqcmsmembershipcreate(record) {
        return await this.membership.create(record).fetch();
    }

    /* update record */
    async findhqcmsmembershipupdate(record) {
        return await this.membership.updateOne({ recordid: record.recordid, location: record.location }).set(record);
    }


    /* get all  record */
    async hqcmsvisitorRecord(list) {
        return await this.visitor.findOne({ where: { recordid: list.recordid, location: list.location } });

    }

    /* create record */
    async hqcmsvisitorcreate(record) {
        return await this.visitor.create(record).fetch();
    }

    /* update record */
    async hqcmsvisitorupdate(record) {
        return await this.visitor.updateOne({ recordid: record.recordid, location: record.location }).set(record);
    }

}

module.exports = new VisitorRepository();