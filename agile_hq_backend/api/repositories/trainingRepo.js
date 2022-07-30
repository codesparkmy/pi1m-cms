class TrainingRepository {
    constructor() {
        this.training = sails.models.training;
        this.traingregister = sails.models.traingregister;
    }

    async traingregisterByvisitorId(memberId, location) {
        return await this.traingregister.find({ where: { memberId: memberId, location: location } });
    }
   
   
   
    async getTrainingRegisterList(trainingId, location) {
        return await this.traingregister.find({ where: { trainingId: trainingId, location: location } });
    }

    async getOne(trainingId) {
        const training = await this.training.findOne({ where: { id: trainingId } }).populate('trainer').populate('location');
        return training;
    }


    async getAll(page = 1, limit) {
        var training;
        if (limit != "") {
            training = await this.training.find({
                where: { course : {contains : limit } , status: 1 }
            }).sort('id DESC').populate('trainer').populate('location').populate('RegisteredRecords');
        } else {
            training = await this.training.find({
                where: { status: 1 }
            }).sort('id DESC').populate('trainer').populate('location').populate('RegisteredRecords')
        }
        return training;
    }

    /* other apis */




    async create(training) {
        return await this.training.create(training).fetch();
    }



   
    async trainingRegistered(traingregisterId,trainingId,memberId) {
        const training = await this.traingregister.find({ where: { id: traingregisterId, trainingId: trainingId, memberId : memberId} });
        return training;
    }
    async getOneTraining(courseCode) {
        const training = await this.training.findOne({ where: { courseCode: courseCode } });
        return training;
    }
    async getAllDetails() {
        return await this.training.find();

    }

    
    async update(trainingId, training) {
        const result = await this.training.updateOne(trainingId).set(training);
        return result;
    }
    async updateTrainingRegistered(id, updateFields) {
        const result = await this.traingregister.updateOne(id).set(updateFields);
        return result;
    }

    async CourseRegisteration(training) {
        return await this.traingregister.create(training).fetch();
    }

    async getCourseResgisterDetails(page = 1, limit = 10, train) {
        const training = await this.traingregister.find({
            where: { trainingId: train }
        }).populate('memberId');
        return training;
    }

    async getTrainingReport(fromdate, todate, location) {
        console.log(Date(fromdate))
        return await this.training.find({
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
        var training;
        training = await this.training.find({
            where: { status: 1 }
        }).populate('trainer').populate('location');

        return training;
    }



    
    /* *
    * HQCMS REPORT
    */
   
    /* get all  record */
    async traininghqcmsRecord(list) {
        return  await this.training.findOne({ where : { recordid : list.recordid, location: list.location } });
        
    }

    /* create record */
    async traininghqcmscreate(record) {
        return  await this.training.create(record).fetch();
    }

    /* update record */
    async traininghqcmsupdate(record) {
        return await this.training.updateOne({ recordid: record.recordid, location: record.location }).set(record);
    }


    /* get all  record */
    async trainingRegisterhqcmsRecord(list) {
        return  await this.traingregister.findOne({ where : { recordid : list.recordid, location: list.location } });
        
    }

    /* create record */
    async trainingRegisterhqcmscreate(record) {
        return  await this.traingregister.create(record).fetch();
    }

    /* update record */
    async trainingRegisterhqcmsupdate(record) {
        return await this.traingregister.updateOne({ recordid: record.recordid, location: record.location }).set(record);
    }


}
module.exports = new TrainingRepository();