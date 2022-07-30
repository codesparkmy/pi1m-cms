const TrainerTrainingRepo = require("../repositories/trainerTrainingRepo");
/**
 * TrainerTrainingController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    async create(req, res){
        try{
            const {trainerId,trainingId} = req.body;
            let result = await TrainerTrainingRepo.create({trainerId,trainingId});

            if(!! result){
                res.status(200).json(result);
            }
            res.status(400).json({message:"Bad Request"});

        } catch(error){
            res.serverError(error);
        }
    },


    async getAll(req, res){
        try{
            const{page,limit}=req.params;
            let trainerTraining = await TrainerTrainingRepo.getAll(page||1,limit||10);
            if(!!trainerTraining){
                return res.status(200).json(trainerTraining);
            }
            return res.notFound();
        }catch(error){
            res.serverError(error);
        }
    },


    async getOne(req, res){
        try{
            const{trainerTrainingId}=req.params;
            let trainerTraining = await TrainerTrainingRepo.getOne(trainerTrainingId);
            if(!!trainerTraining){
                return res.status(200).json(trainerTraining);
            }
            return res.notFound();
        }catch(error){
            res.serverError(error);
        }
    },
    

    async update(req, res){
        try{
            const{trainerTrainingId}=req.params;
            const{trainerId,trainingId}=req.body;
            let isUpdated = await TrainerTrainingRepo.update(trainerTrainingId,{trainerId,trainingId});
            if(!!isUpdated){
                return res.status(200).json({message:"Updated Successfully"});
            }
            return res.notFound();
        }catch(error){
            res.serverError(error);
        }
    }

};

