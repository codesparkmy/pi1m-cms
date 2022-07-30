const PosSystemAssignServiceRepo = require("../repositories/posSystemAssignServiceRepo");
/**
 * PosSystemAssignServiceController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async create(req, res){
      try{
          const{serviceType}=req.body;
          let service = await PosSystemAssignServiceRepo.create({serviceType});
          if(!!service){
              return res.status(200).json(service);
          }
          return res.status(400).json({message:"Bad Request"});
      }catch(error){
          res.serverError(error);
      }
  },

  async getAll(req, res){
      try{}catch(error){
          res.serverError(error);
      }
  },

  async delete(req, res){
      try{
          const{serviceId}=req.params;
          let isDeleted = await PosSystemAssignServiceRepo.delete(serviceId);
          if(!!isDeleted){
              return res.status(200).json({message:"Deleted Successfully"});
          }
          return res.status(400).json({message:"Bad Request"});
      }catch(error){
          res.serverError(error);
      }
  }

};

