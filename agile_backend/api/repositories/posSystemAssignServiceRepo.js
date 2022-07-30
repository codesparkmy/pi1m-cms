class posSystemAssignServiceRepository{

    constructor(){
        this.posSystemAssignService=sails.models.posSystemAssignService;
    }

    async create(data){
        return this.posSystemAssignService.create(data).fetch();
    }

    async getAll(page,limit){
        return this.posSystemAssignService.find({limit,skip:page-1});
    }

    async delete(serviceId){
        return await this.posSystemAssignService.destroyOne({id:serviceId});
    }

}

module.exports=new posSystemAssignServiceRepository();