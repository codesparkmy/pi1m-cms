class BillGenerationRepository {
    constructor() {
        this.BillGeneration = sails.models.billgeneration;
        this.taxsetting = sails.models.taxsetting;
        this.cafeId = sails.config.custom.cafeId;
    }

    async create(data) {
        data.locationId = this.cafeId;
        return await this.BillGeneration.create(data).fetch();
    }

    async getOneBill(locationId, ismember) {
        return await this.BillGeneration.findOne({
            where: {
                locationId: locationId,
                isMember: ismember
            }
        });

    }
    async getId(id) {
        return await this.BillGeneration.find({
            where: {
                id: id
            }
        });
    }
    async getOne(id) {
        return await this.BillGeneration.find({
            where: {
                id: id
            }
        });
    }

    async getOneRec(id,isMember) {
        var list =  await this.BillGeneration.findOne({ where: { isMember: isMember } });
        return list;
        
    }

    async update(billId, data) {
        data.locationId = this.cafeId;
        return await this.BillGeneration.updateOne({ id: billId }).set(data);

    }

    async updateBillSetting(billId, data) {
        data.locationId = this.cafeId;
        return await this.BillGeneration.updateOne({ id: billId }).set(data);
    }

    async getBillSetting(memberid) {
        return await this.BillGeneration.findOne({ where: { isMember: memberid } });
    }

    // update gst and sgst
    async updateTaxsetting(data) {
        return await this.BillGeneration.update({ status: 1 }).set(data).fetch();
    }


    /* tax settings */

    async createTaxsetting(data) {
        data.location = this.cafeId;
        return await this.taxsetting.create(data).fetch();
    }



    async getAllTaxsettings(location) {
        return await this.taxsetting.find({
            where: {
                location: location,
                status: 1
            }
        })
    }

    async getOneTaxsettings(id) {
        return await this.taxsetting.findOne({
            where: {
                id: id,
                status: 1
            }
        })
    }

    /* get all cms  record */
    async getAllList(locationId) {
        return await this.BillGeneration.find({
            where: {
                locationId: locationId
            }
        });
    }


    // async getAllTaxList(locationId) {
    //     return  await this.taxsetting.find({
    //             where : {
    //                 location : locationId
    //             }
    //         });
    // }





}

module.exports = new BillGenerationRepository();