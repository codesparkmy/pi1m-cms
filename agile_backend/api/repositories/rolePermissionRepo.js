class RolePermissionRepository{
    constructor(){ 
        this.rolePermission = sails.models.rolepermission;
    }
    async create(rolePermission){
        return await this.rolePermission.create(rolePermission).fetch();
    }

    async getOne(rolePermissionId){
        return await this.rolePermission.findOne({
            where:{
                id:rolePermissionId
            }
        });
    }
    async getAll(page,limit){
        return await this.rolePermission.find({limit,skip:page-1});
    }

    async update(rolePermissionId,body){
        return await this.rolePermission.updateOne({id:rolePermissionId}).set(body);
    }

}

module.exports = new RolePermissionRepository();