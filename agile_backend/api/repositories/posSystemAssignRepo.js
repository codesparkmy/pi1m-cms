class PosSystemAssignRepository {

    constructor() {
        this.posSystemAssign = sails.models.possystemassign;
        this.autocount = sails.models.autocount;
        this.posfood = sails.models.posfood;
        this.serviceTable = sails.models.printout;
        this.cafe = sails.models.cafe;
        this.foodbeverage = sails.models.foodbeverage;
        this.posservice = sails.models.posservice;
        this.inventory = sails.models.inventory;
        this.posstaffservice = sails.models.posstaffservice;
        this.posstaffserviceDetails = sails.models.posstaffservicedetails;

    }

    async create(data) {
        var list = await this.posSystemAssign.create(data).fetch();
        if (!!list) {
            var autocountlist = await this.autocount.findOne({ id: 3 });
            var count = parseInt(autocountlist.count) + 1;
            await this.autocount.updateOne({ id: 3 }).set({ count: count });
        }
        return list;
    }

    async getByUser(posId) {
        return await this.posSystemAssign.findOne({ id: posId });
    }

    async getOne(posId) {
        return await this.posSystemAssign.findOne({ where: { id: posId } })
            .populate('foodDetails', { where: { status: 1 } })
            .populate('serviceDetails', { where: { status: 1 } })
            .populate('assignTo')

    }
    async checkUserAlreadyAssigned(assignToId) {
        return await this.posSystemAssign.find({ where: { assignTo: assignToId, status: 1 } })

    }
    async getSystemNameById(systemid) {
        return await this.inventory.findOne({
            where: {
                id: systemid
            }
        })

    }
    async getOneUser(posId) {
        var inventories = await this.posSystemAssign.find({ where: { assignTo: posId } })
            .populate('foodDetails', { where: { status: 1 } })
            .populate('serviceDetails', { where: { status: 1 } })
            .populate('assignTo');
        return inventories;
    }

    async update(posId, pos) {
        var result = await this.posSystemAssign.updateOne({ id: posId }).set(pos);
        return result;
    }

    async updatePosfoodStatus(posAssingId) {
        var result = await this.posfood.destroy({ possystemassign: posAssingId });
        return result;
    }

    async updatePosServiceStatus(posAssingId) {
        var result = await this.posservice.destroy({ possystemassign: posAssingId });
        return result;
    }



    async getAll(skip = 1, limit) {
        var inventories;
        if (limit != "") {
            inventories = await this.posSystemAssign.find({
                    where: {
                        status: [1],
                        userId: limit
                    }
                }).populate('foodDetails', { where: { status: 1 } })
                .populate('serviceDetails', { where: { status: 1 } })
                .populate("pcNo").populate('assignTo');

        } else {
            inventories = await this.posSystemAssign.find({
                    where: {
                        status: [1]
                    }
                }).populate('foodDetails', { where: { status: 1 } })
                .populate('serviceDetails', { where: { status: 1 } })
                .populate("pcNo").populate('assignTo');
        }
        return inventories;
    }


    async getAllPOSReport(fromdate, todate, location) {
        return await this.posSystemAssign.find({
            where: {
                createdAt: {
                    '>': new Date(fromdate),
                    '<': new Date(todate)
                },
                location: location
            }

        });
    }

    async getRecentActive(assignTo) {
        return await this.posSystemAssign.find({
            where: {
                assignTo: assignTo
            }
        });
    }

    async getTotalHours(assignTo) {
        return await this.posSystemAssign.find({
            where: {
                assignTo: assignTo
            },
            select: ['hours', 'minutes']
        });
    }

    async topUp(posAssignId, items) {
        return await this.posSystemAssign.updateOne({ id: posAssignId }).set(items);
    }

    async createPosFood(data, member) {
        if (member) { var priceHeader = "memberprice" } else { var priceHeader = "nonMemberprice" }
        let list = await this.foodbeverage.findOne({
            where: {
                id: data.foodbeverage
            }
        });
        data.amount = list[priceHeader];
        return await this.posfood.create(data).fetch();
    }

    async createPosService(data, member) {
        if (member) { var priceHeader = "memberprice" } else { var priceHeader = "nonMemberprice" }
        let list = await this.serviceTable.findOne({
            where: {
                id: data.serviceId,
                status: 1
            }
        });
        data.amount = parseInt(data.node) * parseFloat(list[priceHeader]);
        data.printOutTypeId = list.printOutType;
        return await this.posservice.create(data).fetch();
    }

    async getPosFood(id) {
        return await this.foodbeverage.findOne({
            where: {
                id: id
            },
            select: ['name']
        });
    }
    async getPosService(id) {
        return await this.serviceTable.findOne({
            where: {
                id: id
            },
            select: ['name']
        }).populate('printOutType');
    }

    async posendsession(posId, body) {
        var result = await this.posSystemAssign.updateOne({ id: posId }).set({ status: 2 });
        return result;
    }



    /* create staffing service */

    async getStaffService(id) {
        return await this.posstaffserviceDetails.find({
            where: {
                posstaffserviceId: id
            },
        }).populate('posstaffserviceId').populate('printout_Id').populate('printout_type_Id');
    }


    async createStaffService(data) {
        var result = await this.posstaffservice.create(data).fetch();
        if (result) {
            var autocountlist = await this.autocount.findOne({ id: 4 });
            var count = parseInt(autocountlist.count) + 1;
            await this.autocount.updateOne({ id: 4 }).set({ count: count });
        }
        return result;
    }

    async createStaffServiceDetails(member, data) {
        if (member) { var priceHeader = "memberprice" } else { var priceHeader = "nonMemberprice" }
        let serviceRecord = await this.serviceTable.findOne({
            where: {
                id: data.printout_Id
            }
        });
        data.printout_type_Id = serviceRecord.printOutType;
        data.price = parseInt(data.qty) * parseFloat(serviceRecord[priceHeader]);
        const result = await this.posstaffserviceDetails.create(data).fetch();
        return result;
    }

    /* get all cms pos service record */
    async getAllPosserviceList(locationId) {
        return await this.posservice.find({
            where: {
                location: locationId
            }
        });
    }



    /* get all cms  record */
    async getAllPosfoodList(locationId) {
        return await this.posfood.find({
            where: {
                location: locationId
            }
        });
    }



    /* get all cms  record */
    async getAllposSystemAssignList(locationId) {
        return await this.posSystemAssign.find({
            where: {
                location: locationId
            }
        });
    }

    async getLocation(locationId) {
        return await this.cafe.findOne({
            where: {
                id: locationId
            },
            select: ['location']
        });
    }





}

module.exports = new PosSystemAssignRepository();
