class RoleRepository {
    constructor() {
        this.role = sails.models.role;
        this.userrolepermissions = sails.models.userrolepermissions;
    }
    async create(role) {
        console.log(role, "roole");
        return await this.role.create(role).fetch()
    }
    async getOne(roleId) {
        return await this.role.findOne({
            id: roleId
        });
    }
    async getWithName(name) {
        return await this.role.findOne({
            name: name
        })
    }
    async getAll() {
        return await this.role.find();
    }
    async update(roleId, body) {
        return await this.role.updateOne({ id: roleId }).set(body);
    }
    async createRolewithPermissions(roleId,list) {

        for(let rec of list){
            rec.roleId = roleId;
             await this.userrolepermissions.create(rec).fetch();

        }
        return list;
    }
}
module.exports = new RoleRepository();