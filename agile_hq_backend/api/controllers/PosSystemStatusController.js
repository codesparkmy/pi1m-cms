const PosSystemStatusRepo = require("../repositories/PosSystemStatusRepo");
/**
 * PosSystemStatusController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    async createSystem(req, res){
        try{
            const {
                systemId,
                availability,
                startTime,
                endTime,
                endSession
            }=req.body;

            let createdSystem = await PosSystemStatusRepo.create({
                systemId,
                availability,
                startTime,
                endTime,
                endSession
            });

            if(!!createdSystem){
                return res.status(200).json(createdSystem);
            }
            return res.status(400).json({message:"Bad Request"});

        }catch(error){
            res.serverError(error);
        }
    },

    async getAllSystem(req, res){
        try{
            const{page,limit} = req.params;
            let systems = await PosSystemStatusRepo.getAll(page||1,limit||10);
            if(!!systems){
                return res.status(200).json(systems);
            }
            return res.notFound();
        }catch(error){
            res.serverError(error);
        }
    },

    async getOneSystem(req, res){
        try{
            const{systemId}=req.params;
            let system = await PosSystemStatusRepo.getOne(systemId);
            if(!!system){
                return res.status(200).json(system);
            }
            return res.notFound();
        } catch(error){
            res.serverError(error);
        }
    },

    async updateSystem(req, res){
        try{
            const{systemId}=req.params;
            const{
                availability,
                startTime,
                endTime,
                endSession
            } = req.body;

            let result = await PosSystemStatusRepo.getOne(systemId);
            if(!!result){
                let isUpdated = await PosSystemStatusRepo.update(systemId,{
                    availability,
                    startTime,
                    endTime,
                    endSession
                });
                if(!!isUpdated){
                    return res.status(200).json({message:"Updated Successfully"});
                }
                return res.status(400).json({message:"Bad Request"});
            }
            return res.status(400).json({message:"Bad Request"});

        }catch(error){
            res.serverError(error);
        }
    },

    async deleteSystem(req, res){
        try{
            const{systemId}=req.params;
            let isDeleted = PosSystemStatusRepo.delete(systemId);
            if(!!isDeleted){
                return res.status(200).json({message:"Deleted Successfully"});
            }
            return res.notFound();
        }catch(error){
            res.serverError(error);
        }
    },

};

