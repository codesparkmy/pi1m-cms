const TraineeRepo = require("../repositories/traineeRepo");
/**
 * TraineeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    async create(req, res){
        try{
            const { trainee, registeredDate, classLeft, price} = req.body;
            let createdTrainee = await TraineeRepo.create({rtrainee,egisteredDate,classLeft,price});

            if(!! createdTrainee){
                res.status(200).json({data:createdTrainee,message:"Trainee Created Successfully"});
            }
            res.status(400).json({message:"Bad Request"});

        } catch(error){
            res.serverError(error);
        }
    },


    async getAll(req, res){
        try{
            const{page,limit}=req.params;
            let trainees = await TraineeRepo.getAll(page||1,limit||10);
            if(!!trainees){
                return res.status(200).json(trainees);
            }
            return res.notFound();
        }catch(error){
            res.serverError(error);
        }
    },


    async getOne(req, res){
        try{
            const{traineeId}=req.params;
            let trainee = await TraineeRepo.getOne(traineeId);
            if(!!trainee){
                return res.status(200).json(trainee);
            }
            return res.notFound();
        }catch(error){
            res.serverError(error);
        }
    },
    

    async update(req, res){
        try{
            const{traineeId}=req.params;
            const{name, registeredDate, classLeft, memberId, price}=req.body;
            let isUpdated = await TraineeRepo.update(traineeId, {classLeft});
            if(!!isUpdated){
                return res.status(200).json({message:"Updated Successfully"});
            }
            return res.notFound();
        }catch(error){
            res.serverError(error);
        }
    }

};

