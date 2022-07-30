const dateformat = require('dateformat')
class CafeRepository {
    constructor() {
        this.leave = sails.models.leave;
        this.cafeId = sails.config.custom.cafeId;
    }
    async getOne(leaveId) {
        const leave = await this.leave.findOne({
            where: {
                id: leaveId
            }
        }).populate('location').populate('userId');
        return leave;
    }

    async getOneUser(leaveId) {
        const leave = await this.leave.find({
            where: {
                userId: leaveId
            }
        }).populate('location').populate('userId');
        return leave;
    }

    async getAll(page = 1, limit = 10) {
        const leave = await this.leave.find({

        }).populate('location').populate('userId').populate('leaveType');
        return leave;
    }
    async getAllDetails() {
        const leave = await this.leave.find()
        return leave;
    }
    async create(body) {
        body.location = this.cafeId;
        const result = await this.leave.create(body).fetch();
        return result;
    }
    async update(leaveId, body) {
        body.location = this.cafeId;
        const result = await this.leave.updateOne({ id: leaveId }).set(body);
        return result;
    }

    async getOneLeave(page = 1, limit = 10, userId) {
        const leave = await this.leave.find({
            where: {
                userId: userId
            }
        }).populate('location').populate('userId');
        return leave;
    }

    async getLeaveReport(fromdate, todate, location) {
        return await this.leave.find({
            where: {
                createdAt: {
                    '>': new Date(fromdate),
                    '<': new Date(todate)
                },
                location: location
            }

        });
    }
    async getPDF() {
        const leave = await this.leave.find({

        }).populate('location').populate('userId');
        return leave;
    }

    /* get all cms  record */
    async getAllList(locationId) {
        return await this.leave.find({
            where: {
                location: locationId
            }
        });
    }


    async checkLeaveApplied(data) {
        console.log('dateformat', dateformat(data.fromDate, "isoDate"));
        console.log('toDate', dateformat(data.toDate, "isoDate"));
        const leave = await this.leave.find({
            where: {
                'userId': data.userId,
                'fromDate': { '<=': dateformat(data.fromDate, "isoDate") },
                'toDate': { '>=': dateformat(data.toDate, "isoDate") },
            },
        })

        return leave;
    }

}
module.exports = new CafeRepository();