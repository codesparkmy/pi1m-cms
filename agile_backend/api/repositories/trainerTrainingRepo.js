class TrainerTrainingRepository{
    constructor(){
        this.trainerTraining = sails.models.trainertraining;
    }

    async create(trainerTraining){
        return await this.trainerTraining.create(trainerTraining).fetch();
    }

    async getAll(page, limit){
        return await this.trainerTraining.find({limit,skip:page-1});
    }

    async getOne(trainerTrainingId){
        return await this.trainerTraining.findOne({id:trainerTrainingId});
    }

    async update(trainerTrainingId,data){
        return await this.trainerTraining.updateOne({id:trainerTrainingId}).set(data);
    }
}

module.exports = new TrainerTrainingRepository();