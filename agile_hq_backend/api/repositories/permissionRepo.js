class PermissionRepository{
    constructor(){
        this.permission = sails.models.permission;
    }
    async create(permission){
        return await this.permission.create(permission).fetch();
    }

    async getOne(permissionId){
        return await this.permission.findOne({
            where:{
                id:permissionId
            }
        });
    }

    async getAll(){
        return await this.permission.find();
    }

    async update(permissionId,body){
        return await this.permission.updateOne({id:permissionId}).set(body);
    }

}

module.exports = new PermissionRepository();