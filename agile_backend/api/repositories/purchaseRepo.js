class purchaseRepository {
    constructor() {
        this.purchase = sails.models.purchase;
        this.purchaseDetail = sails.models.purchasedetail;

        this.autocount = sails.models.autocount;
        this.cafeId = sails.config.custom.cafeId;
    }

    async getAll(skip = 1, limit = 10) {
        var list = await this.purchase.find({
            where: {
                status: 1,
            }            
        }).populate('purchaseDetails', {
            where : {
                status : 1
            }
        }).sort('id DESC');
        return list;
    }

    async createPurchase(payload) {
        payload.location = this.cafeId;
        var purchase =  await this.purchase.create(payload).fetch();
        if(!!purchase) {
            var autocountlist = await this.autocount.findOne({ id: 2 });
            var count = parseInt(autocountlist.count) + 1;
            await this.autocount.updateOne({ id: 2 }).set({ count : count });
        }
        return purchase;
    }
    async createPurchaseDetail(payload) {
        payload.location = this.cafeId;
        return  await this.purchaseDetail.create(payload).fetch();
    }
    
    async getOne(purchaseId) {
        var list = await this.purchase.find({
            where: {
                status: 1,
                id: purchaseId,
            }            
        }).populate('purchaseDetails', {
            where : {
                status : 1
            }
        }).sort('id DESC');

        return list;        
    }
    async findByName(purchase) {
        return  await this.purchase.find(purchase);
    }

    async update(purchaseId, body) {
        body.location = this.cafeId;
        return await this.purchase.updateOne({ id: purchaseId }).set(body);
    }

    async purchaseDetailDelete(id) {
        return await this.purchaseDetail.update({ purchaseId: id }).set({ status : false }).fetch();
    }

    async delete(id) {
        return await this.purchase.update({ id: id }).set({ status : false }).fetch();
    }


    /* get all cms  record */ 
   async getAllPurchaseList(locationId) {
    return  await this.purchase.find({
            where : {
                location : locationId
            }
        });
    }


   /* get all cms  record */ 
   async getAllPurchaseDetailsList(locationId) {
    return  await this.purchaseDetail.find({
            where : {
                location : locationId
            }
        });
    }



}
module.exports = new purchaseRepository();
