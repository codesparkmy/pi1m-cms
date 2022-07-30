class PositionsRepository{
    constructor(){
      this.positions = sails.models.positions;
    }

    async create(positions){
      return await sails.models.positions.create(positions).fetch();
    }
    async getOne(positionId){
      const position = await this.positions.findOne({id: positionId});
      return position;
    }

    async getAll(skip=1, limit=10){
      const positions = await this.positions.find({
        limit,
        skip:skip-1
      });
      return positions;
    }

    async deleteOne(positionId){
        const deletedPosition = await this.positions.destroyOne({id:positionId})
        return deletedPosition
    }

    async update(positionsId, body){
      var isUpdate = await this.positions.updateOne({ id: positionsId }).set(body);
      return isUpdate;
    }
  }
  
  module.exports = new PositionsRepository();
  