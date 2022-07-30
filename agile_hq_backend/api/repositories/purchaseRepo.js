class purchaseRepository {
    constructor() {
        this.purchase = sails.models.purchase;
        this.purchaseDetail = sails.models.purchasedetail;
        
        this.autocount = sails.models.autocount;
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
        
        var purchase =  await this.purchase.create(payload).fetch();
        if(!!purchase) {
            var autocountlist = await this.autocount.findOne({ id: 2 });
            var count = parseInt(autocountlist.count) + 1;
            await this.autocount.updateOne({ id: 2 }).set({ count : count });
        }
        return purchase;
    }
    async createPurchaseDetail(payload) {
        
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
        return await this.purchase.updateOne({ id: purchaseId }).set(body);
    }

    async purchaseDetailDelete(id) {
        return await this.purchaseDetail.update({ purchaseId: id }).set({ status : false }).fetch();
    }

    async delete(id) {
        return await this.purchase.update({ id: id }).set({ status : false }).fetch();
    }


       /* *
    * HQCMS REPORT
    */
   
    /* get all  record */
    async purchasehqcmsRecord(list) {
        return  await this.purchase.findOne({ where : { recordid : list.recordid, location: list.location } });
        
    }

    /* create record */
    async purchasehqcmscreate(record) {
        return  await this.purchase.create(record).fetch();
    }

    /* update record */
    async purchasehqcmsupdate(record) {
        return await this.purchase.updateOne({ recordid: record.recordid, location: record.location }).set(record);
    }

    /* get all  record */
    async purchaseDetailshqcmsRecord(list) {
        return  await this.purchaseDetail.findOne({ where : { recordid : list.recordid, location: list.location } });
        
    }

    /* create record */
    async purchaseDetailshqcmscreate(record) {
        return  await this.purchaseDetail.create(record).fetch();
    }

    /* update record */
    async purchaseDetailshqcmsupdate(record) {
        return await this.purchaseDetail.updateOne({ recordid: record.recordid, location: record.location }).set(record);
    }






}
module.exports = new purchaseRepository();
