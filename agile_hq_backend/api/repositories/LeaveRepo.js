class CafeRepository {
    constructor() {
        this.leave = sails.models.leave;
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

        }).populate('location').populate('userId');
        return leave;
    }
    async getAllDetails(){
        const leave = await this.leave.find()
        return leave;
    }
    async create(body) {
        
        const result = await this.leave.create(body).fetch();
        return result;
    }
    async update(leaveId, body) {
        
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


       /* *
    * HQCMS REPORT
    */
   
   /* get all cms  record */ 
   
    /* get all  record */
    async findhqcmsRecord(list) {
        return  await this.leave.findOne({ where : { recordid : list.recordid, location: list.location } });
        
    }

    /* create record */
    async findhqcmscreate(record) {
        return  await this.leave.create(record).fetch();
    }

    /* update record */
    async findhqcmsupdate(record) {
        return await this.leave.updateOne({ recordid: record.recordid, location: record.location }).set(record);
    }




}
module.exports = new CafeRepository();