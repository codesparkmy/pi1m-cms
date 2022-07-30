const NationalityRepo = require('../repositories/nationalityRepo.js');
/**
 * NationalityController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    async create(req, res){
        try{
            const {nationality} = req.body;
            let result = NationalityRepo.create({nationality});
            if(!! result){
              return res.status(200).json({message: "Created Successfully"});
            }
            return res.status(400).json({message:"Bad request"});
      
          }catch(error){
            res.serverError(error);
          }
    },


  async getAll(req, res) {
      try {
          const {page,limit} = req.params;
          const nationalities = await NationalityRepo.getAll(page || 1, limit ||10);
          return res.status(200).json(nationalities);

      } catch(error) {
          res.serverError(error);
      }
  },

  async getOne(req, res) {
    try {
        const {nationalityId} = req.params;
        const nationality = await NationalityRepo.getOne(nationalityId);
        if (!! nationality){
            return res.status(200).json(nationality);
        }
        return res.notFound();

    } catch(error) {
        res.serverError(error);
    }

  },

  async update(req,res) {
      try{
          const {nationalityId}=req.params;
          const {nationality}=req.body;
          let result = await NationalityRepo.getOne(nationalityId);
          if(!! result){
              const isUpdated = await NationalityRepo.update(nationalityId,{nationality});
              if (!!isUpdated){
                  return res.status(200).json({message:"Updated Successfully"});
              }
              return res.status(403).json({ message: 'Bad request' });
          }
          return res.notFound();
      } catch (error) {
        return res.serverError(error);
      }
  },

  async delete(req, res) {
    try {
        const {nationalityId} = req.params;
        let result = await NationalityRepo.getOne(nationalityId);
        if(!! result){
            const nationality = await NationalityRepo.delete(nationalityId);
            if (!! nationality){
                return res.status(200).json({message:"Deleted Successfully"});
            }
        }
        return res.notFound();
    } catch(error) {
        res.serverError(error);
    }

  },

    async updateHqDetails(req, res) {
        try {
            const list = await NationalityRepo.findhqcmsRecord(req.body);
            if(list) {
                const list = await NationalityRepo.findhqcmsupdate(req.body);
                return res.status(200).json({ data: list });        

            } else {
                const list = await NationalityRepo.findhqcmscreate(req.body);
                return res.status(200).json({ data: list });        
            }

    
        } catch (error) {
            return res.serverError(error);
        }
    },


};

