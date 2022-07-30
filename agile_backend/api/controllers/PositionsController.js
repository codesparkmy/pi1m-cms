const PositionsRepo = require('../repositories/positionsRepo');
/**
 * PositionsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async create(req, res){
    try{
      const {position} = req.body;
      let result = PositionsRepo.create({position});
      if(!! result){
        return res.status(200).json({message: "Created Successfull"});
      }
      return res.status(400).json({message:"Bad request"});

    }catch(error){
      res.serverError(error);
    }
  },
    async getAll(req, res) {
        try {
          const { page, limit } = req.params;
          const positions = await PositionsRepo.getAll(page || 1, limit || 10);
          return res.status(200).json(positions);
        } catch (error) {
          return res.serverError(error);
        }
      },

    async getOne(req, res) {
        try {
          const { positionId } = req.params;
          const position = await PositionsRepo.getOne(positionId);
          if (!! position) {
            return res.status(200).json(position);
          }
          return res.notFound();
        } catch (error) {
          res.serverError(error);
        }
      },

      async deleteOne(req,res) {
          try {
              const {positionId}=req.params;
              const deletedPosition = await PositionsRepo.deleteOne(positionId)
              if (deletedPosition) {
                  return res.status(201).json("{deleted}");
                } 
                else {
                    return res.status(201).json("{no data}");
                }
          } catch(error){
              res.serverError(error);
          }
      },

    async update(req,res) {
        try {
            const { positionId } = req.params;
            const { position } = req.body;
            let result = await PositionsRepo.getOne(positionId);
            if(!!result){
              const isUpdated = await PositionsRepo.update(positionId, { position });
              if(!!isUpdated){
                return res.status(200).json({ message: 'Successfully updated' });
              }
              return res.status(403).json({ message: 'Bad request' });
            }
            return res.notFound();
          } catch (error) {
            return res.serverError(error);
          }
    }
};

