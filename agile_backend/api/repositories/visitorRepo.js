class VisitorRepository {
    constructor() {
        this.autocount = sails.models.autocount;
        this.visitor = sails.models.visitor;
        this.membership = sails.models.membership;
        this.cafeId = sails.config.custom.cafeId;

    }

    async create(data) {
        return await this.visitor.create(data).fetch();
    }

    async getAll(skip = 1, limit) {
        if (limit != "") {
            return await this.visitor.find({
                where: {
                    status: 1,
                    name: { contains: limit }
                }
            }).populate('posSystemAssign').sort('id DESC');

        } else {
            return await this.visitor.find({
                where: {
                    status: 1
                }
            }).populate('posSystemAssign').sort('id DESC')
        }
    }

    async getMemberList() {
        var list = await this.visitor.getDatastore().sendNativeQuery('SELECT a.* FROM `visitor` a LEFT JOIN membership b on (a.id =b.visitorId) where a.status=1 and b.visitorId IS null');
        return list.rows;
    }

    async getMembershipRegistration(skip = 1, limit) {
        if (limit != "") {
            return await this.membership.find({
                where: {
                    status: 1,
                    name: limit
                }
            }).populate('visitorId')
        } else {
            return await this.membership.find({
                where: {
                    status: 1
                }
            }).populate('visitorId')
        }
    }

    async getAllDetails() {
        return await this.visitor.find()
    }

    async getOne(visitorId) {
        return await this.visitor.findOne({ id: visitorId });
    }

    async getvisitorNricno(nrciNo) {
        return await this.visitor.findOne({ nrciNo: nrciNo, status: 1 });
    }

    async NricExceptCurrentUser(nrciNo, visitorId) {
        var list = await this.visitor.getDatastore().sendNativeQuery('SELECT * FROM `visitor` where nrciNo = "' + nrciNo + '" and status = 1 and id !=' + visitorId);
        return list.rows;

    }

    async getMemberCode(memberCode) {
        return await this.visitor.find({ memeberCode: memberCode });
    }

    async IncrementMemberCode(id) {
        var memebercode = await this.autocount.findOne({ id: id });
        var count = parseInt(memebercode.count) + 1;
        return await this.autocount.updateOne({ id: id }).set({ count: count });
    }

    async update(visitorId, data) {
        return await this.visitor.updateOne({ id: visitorId }).set(data);
    }

    async updateAll(data) {
        return await this.visitor.update({ nrciNo: data.nrciNo }).set(data);
    }
    async getAllReport(fromdate, todate, location) {
        return await this.visitor.find({
            where: {
                createdAt: {
                    '>': new Date(fromdate),
                    '<': new Date(todate)
                },
                location: location
            }
        }).populate('location');
    }

    async getOneMember(memeberCode) {
        return await this.visitor.findOne({ memeberCode: memeberCode });
    }

    async getPDF() {
        return await this.visitor.find({
            where: {
                status: 1
            }
        })
    }

    async membershipRegistration(body) {
        body.location = this.cafeId;
        return await this.membership.create(body).fetch();
    }

    async updateMembershipRegistration(membershipId, body) {
        body.location = this.cafeId;
        return await this.membership.updateOne({ id: membershipId }).set(body);
    }

    async getOneMembership(membershipId) {
        return await this.membership.findOne({ where: { id: membershipId } });
    }

    async validateNricNo(nrciNo) {
        return await this.visitor.find({ where: { nrciNo: nrciNo, status: 1 } });
    }

    async membershipbyNricNo(nrciNo) {
        return await this.visitor.findOne({ where: { nrciNo: nrciNo, isMember: true } }).populate('registeredMemberList', { where: { status: 1 } });
    }

    async memberShipPlanByVisitor(visitorId) {
        return await this.membership.find({ where: { visitorId: visitorId }, limit: 1 }).sort("id  DESC");
    }


    /* get all cms  record */
    async getAllMembershipList(locationId) {
        return await this.membership.find({
            where: {
                location: locationId
            }
        });
    }

    /* get all cms  record */
    async getAllVisitorList(locationId) {
        return await this.visitor.find({
            where: {
                location: locationId
            }
        });
    }

    /* createOrUpdateVisitor */
    async createOrUpdateVisitor(data) {
        const findVisitor = await this.validateNricNo(data.nrciNo);
        if (findVisitor.length) {
            return await this.updateAll(data)
        } else {
            return await this.create(data);
        }

    }


}

module.exports = new VisitorRepository();