class TrainerRepository{
    constructor(){
        this.trainer = sails.models.trainer;
    }


    async getTrainerById(id, location){
        return await this.trainer.findOne({id : id, location : location});
    }



    async create(trainerData){
        return await this.trainer.create(trainerData).fetch();
    }


    async getAll(page,limit){
        return await this.trainer.find({limit,skip:page-1});
    }
    
   
    async getOne(trainerId){
        return await this.trainer.findOne({id:trainerId});
    }


    async update(trainerId, data){
        return await this.trainer.updateOne({id:trainerId}).set(data);
    }

   

}

module.exports = new TrainerRepository();