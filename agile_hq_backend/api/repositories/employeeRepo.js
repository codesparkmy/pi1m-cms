class EmployeeRepository {
    constructor() {
        this.user = sails.models.user;
    }
    async create(employee) {
        return await this.user.create(employee).fetch();
    }
    async getOne(userId) {
        const user = await this.user.findOne({
            where: {
                id: userId
            },
            omit: ['password']
        }).populate('branchAllocation');
        return user;
    }

    async findEmployee(email) {
        const user = await this.user.findOne({
            where: {
                email,
                userstatus: true
            }
        });
        return user;
    }

    async getAll(skip, limit) {
        var users;
        if (limit != "") {
            users = await this.user.find({
                where: {
                    fullName: limit,
                    userstatus: true
                },
                omit: ['password']

            }).populate('branchAllocation').populate('positionId');
        } else {
            users = await this.user.find({
                where: {
                    userstatus: true
                },
                omit: ['password']

            }).populate('branchAllocation').populate('positionId');
        }
        return users;
    }
    async getAllDetails(){
        return await this.user.find();
      }
     
    async getPDF() {
        var users;
        return users = await this.user.find({
            where: {
                userstatus: true
            },
            omit: ['password']

        }).populate('branchAllocation');

    }


    async getAllCount() {
        const users = await this.user.count({});
        return users;
    }

    async update(userId, body) {
        var isUpdate = await this.user.updateOne({ id: userId }).set(body);
        return isUpdate;
    }

    async getEmployeeDetails(location) {
        const user = await this.user.find({
            where: {
                branchAllocation : location
            }
        });
        return user;
    }
    
}
module.exports = new EmployeeRepository();