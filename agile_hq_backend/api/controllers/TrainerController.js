const TrainerRepo = require("../repositories/trainerRepo");
const fs = require('fs');
const os = require('os');
/**
 * TrainerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    async create(req, res){
        try{
            const {name, email, phoneNumber, location, designation} = req.body;
            let createdTrainer = await TrainerRepo.create({name,email,phoneNumber,location,designation});

            if(!! createdTrainer){
                res.status(200).json(createdTrainer);
            }
            res.status(400).json({message:"Bad Request"});

        } catch(error){
            res.serverError(error);
        }
    },


    async getAll(req, res){
        try{
            const{page,limit}=req.params;
            let trainers = await TrainerRepo.getAll(page||1,limit||10);
            if(!!trainers){
                return res.status(200).json(trainers);
            }
            return res.notFound();
        }catch(error){
            res.serverError(error);
        }
    },

    async exportExcel(req,res){
        let trainers = await TrainerRepo.getAllDetails();
        console.log(trainers,"user");
        const filename = "./reports/excel/output-" + Date.now() + ".csv"
        const output = [];
        const headers = []
        const header = [
            {
                course: 'course',
                courseCode: 'courseCode',
                courseType: 'courseType',
                duration: 'duration',
                durationType: 'durationType',
                fee: 'fee',
                enrolled: 'enrolled',
                maximumSubscription: 'maximumSubscription',
                trainer: 'trainer',
                courseDuration: 'courseDuration',
                location: 'location',
                status: 'status',
                availabeTraining: 'availabeTraining'
    
            }
        ]
        header.forEach((d) => {
          headers.push(d.course)
          headers.push(d.courseCode)
          headers.push(d.courseType)
    
            headers.push(d.duration)
            headers.push(d.durationType)
            headers.push(d.fee)
            headers.push(d.enrolled)
    
            headers.push(d.maximumSubscription)
            headers.push(d.trainer)
            headers.push(d.courseDuration)
            headers.push(d.location)
            headers.push(d.status)
            headers.push(d.availabeTraining)
        
    
            output.push(headers.join())
        })
        fs.writeFileSync(filename, output.join(os.EOL));
        trainers.forEach((obj) => {
            const row = [];
            row.push(obj.course);
            row.push(obj.courseCode);
            row.push(obj.courseType);
            row.push(obj.duration);
            row.push(obj.durationType);
    
            row.push(obj.fee);
            row.push(obj.enrolled);
            row.push(obj.maximumSubscription);
            row.push(obj.trainer);
            row.push(obj.courseDuration);
            row.push(obj.location);
            row.push(obj.status);
            row.push(obj.availabeTraining);
         
            output.push(row.join());
    
        });
        fs.writeFileSync(filename, output.join(os.EOL));
        return res.status(200).json()
    },
    async getOne(req, res){
        try{
            const{trainerId}=req.params;
            let trainer = await TrainerRepo.getOne(trainerId);
            if(!!trainer){
                return res.status(200).json(trainer);
            }
            return res.notFound();
        }catch(error){
            res.serverError(error);
        }
    },
    

    async update(req, res){
        try{
            const{trainerId}=req.params;
            const{name,email,phoneNumber,location,designation}=req.body;
            let isUpdated = await TrainerRepo.update(trainerId,{name,email,phoneNumber,location,designation});
            if(!!isUpdated){
                return res.status(200).json({message:"Updated Successfully"});
            }
            return res.notFound();
        }catch(error){
            res.serverError(error);
        }
    }
  

};

