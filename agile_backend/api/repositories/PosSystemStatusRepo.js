class PosSystemStatusRepository{

    constructor(){
        this.posSystemStatus = sails.models.possystemstatus;
    }

    async create(data){
        return await this.posSystemStatus.create(data).fetch();
    }

    async getAll(page, limit){
        return await this.posSystemStatus.find({limit, skip:page-1});
    }

    async getOne(systemId){
        return await this.posSystemStatus.findOne({systemId:systemId});
    }

    async update(systemId,data){
        return await this.posSystemStatus.updateOne({systemId:systemId}).set(data);
    }

    async delete(systemId){
        return await this.posSystemStatus.destroyOne({systemId:systemId});
    }

}

module.exports = new PosSystemStatusRepository();