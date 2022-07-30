class TraineeRepository{
    constructor(){
        this.trainee = sails.models.trainee;
    }

    async create(traineeData){
        return await this.trainee.create(traineeData).fetch();
    }


    async getAll(page,limit){
        return await this.trainee.find().populate('trainee', {
            where: {
                status: 1
            },
            limit: limit,
            skip: page - 1
        });

    }


    async getOne(traineeId){
        return await this.trainee.findOne({id:traineeId});
    }


    async update(traineeId, data){
        return await this.trainee.updateOne({id:traineeId}).set(data);
    }

}

module.exports = new TraineeRepository();