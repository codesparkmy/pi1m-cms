class PosSystemAssignRepository{

    constructor(){
        this.posSystemAssign = sails.models.possystemassign;
        this.autocount = sails.models.autocount;
        this.posfood = sails.models.posfood;
        this.serviceTable = sails.models.printout;
        this.foodbeverage = sails.models.foodbeverage;
        this.posservice = sails.models.posservice;

    }

    async create(data){
        var list = await this.posSystemAssign.create(data).fetch();
        if(!!list) {
            var autocountlist = await this.autocount.findOne({ id: 3 });
            var count = parseInt(autocountlist.count) + 1;
            await this.autocount.updateOne({ id: 3 }).set({ count : count });
        }
        return list;
    }

    async getByUser(posId){
        return await this.posSystemAssign.findOne({id:posId});
    }

    async getOne(posId){
        return  await this.posSystemAssign.findOne({where: {id:posId} })
        .populate('foodDetails', { where : { status : 1 } })
        .populate('serviceDetails', { where : {status : 1} })
        .populate('assignTo')
        
    }
    async getOneUser(posId){
        var inventories = await this.posSystemAssign.find({where: {assignTo:posId} })
        .populate('foodDetails', { where : { status : 1 } })
        .populate('serviceDetails', { where : {status : 1} })
        .populate('assignTo');
        return inventories;        
    }
    
    async update(posId, pos) {
        var result;
        result = await this.posSystemAssign.updateOne({ id: posId }).set(pos);
        return result;
    }
    
    async updatePosfoodStatus(posAssingId) {
        var result = await this.posfood.update({ possystemassign: posAssingId }).set({status : 0}).fetch();
        return result;
    }

    async getAll(skip = 1, limit) {
        var inventories ;
        if(limit != ""){
         inventories = await this.posSystemAssign.find({
           where:{
               status:[1],
               userId:limit
           }
        }).populate('foodDetails', { where : { status : 1 } })
        .populate('serviceDetails', { where : {status : 1} })
        .populate("pcNo").populate('assignTo');

    }else{
        inventories = await this.posSystemAssign.find({
            where:{
                status:[1]
            }
         }).populate('foodDetails', { where : { status : 1 } })
         .populate('serviceDetails', { where : {status : 1} })
         .populate("pcNo").populate('assignTo');
    }
        return inventories;
    }

    
  async getAllPOSReport(fromdate,todate,location){    
    return await this.posSystemAssign.find({  where: {
        createdAt: {
          '>': new Date(fromdate),
          '<': new Date(todate)
        },
        location:location
      }
        
      });
}

    async getRecentActive(assignTo){    
        return await this.posSystemAssign.find({  where: {
            assignTo: assignTo
        }        
        });    
    } 

    async getTotalHours(assignTo){    
        return await this.posSystemAssign.find({  where: {
            assignTo: assignTo
        }        
        });
    }

    async topUp(posAssignId,items){    
        return  await this.posSystemAssign.updateOne({ id: posAssignId }).set(items);
    }

    async createPosFood(data,member) {
        if(member) { var priceHeader = "memberprice" } else { var priceHeader = "nonMemberprice" }
        let list = await this.foodbeverage.findOne({
            where : {
                id : data.foodbeverage
            }
        });
        data.amount = list[priceHeader];
        return  await this.posfood.create(data).fetch();
    }

    async createPosService(data, member) {
        if(member) { var priceHeader = "memberprice" } else { var priceHeader = "nonMemberprice" }
        let list = await this.serviceTable.findOne({
            where : {
                id : data.serviceId
            }
        });
        data.amount = list[priceHeader];
        return  await this.posservice.create(data).fetch();
    }

    async getPosFood(id) {
        return  await this.foodbeverage.findOne({
            where : {
                id : id
            }, select : ['name']
        });
    }
    async getPosService(id) {
        return  await this.serviceTable.findOne({
            where : {
                id : id
            }, select : ['name']
        });
    }

    async posendsession(posId, body) {
        var result;
        result = await this.posSystemAssign.updateOne({ id: posId }).set(body);
        return result;
    }


    
     /* *
    * HQCMS REPORT
    */
   
    /* get all  record */
    async possystemAssignhqcmsRecord(list) {
        return  await this.posSystemAssign.findOne({ where : { recordid : list.recordid, location: list.location } });
        
    }

    /* create record */
    async possystemAssignhqcmscreate(record) {
        return  await this.posSystemAssign.create(record).fetch();
    }

    /* update record */
    async possystemAssignhqcmsupdate(record) {
        return await this.posSystemAssign.updateOne({ recordid: record.recordid, location: record.location }).set(record);
    }

    
    /* get all  record */
    async posfoodhqcmsRecord(list) {
        return  await this.posfood.findOne({ where : { recordid : list.recordid, location: list.location } });
        
    }

    /* create record */
    async posfoodhqcmscreate(record) {
        return  await this.posfood.create(record).fetch();
    }

    /* update record */
    async posfoodhqcmsupdate(record) {
        return await this.posfood.updateOne({ recordid: record.recordid, location: record.location }).set(record);
    }


      /* get all  record */
    async posservicehqcmsRecord(list) {
        return  await this.posservice.findOne({ where : { recordid : list.recordid, location: list.location } });
        
    }

    /* create record */
    async posservicehqcmscreate(record) {
        return  await this.posservice.create(record).fetch();
    }

    /* update record */
    async posservicehqcmsupdate(record) {
        return await this.posservice.updateOne({ recordid: record.recordid, location: record.location }).set(record);
    }




}

module.exports = new PosSystemAssignRepository();