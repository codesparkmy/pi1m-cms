class InventoryClass {
    constructor() {
        this.inventory = sails.models.inventory;
        this.foodBeverage = sails.models.foodbeverage;
        this.printOut = sails.models.printout;
        this.printouttype = sails.models.printouttype;
        this.foodbeveragetype = sails.models.foodbeveragetype;
        this.autocount = sails.models.autocount;
        
    }


    async getOne(inventoryType) {
        var inventory;
        if (inventoryType == 'System') {
            inventory = await this.inventory.find({
                where: {
                    status: 1
                },
            }).populate('locationId');
        } else if (inventoryType == 'Food') {
            inventory = await this.foodBeverage.find({
                where: {
                    status: 1
                },
            }).populate('foodInventryType').populate('locationId');
        } else if (inventoryType == 'Print') {
            inventory = await this.printOut.find({
                where: {
                    status: 1
                },
            }).populate('printOutType').populate('locationId');
        }
        return inventory;
    }


    async getsystemByRecordId(inventoryType, recordid, locationId) {
        var inventory;
        if (inventoryType == 'System') {
            inventory = await this.inventory.findOne({
                where: {
                    recordid: recordid,
                    locationId: locationId,
                },
            })
        }
        
        // else if (inventoryType == 'Food') {
        //     inventory = await this.foodBeverage.findOne({
        //         where: {
        //             id: inventoryId
        //         },
        //     }).populate('foodInventryType').populate('locationId');
        // } else if (inventoryType == 'Print') {
        //     inventory = await this.printOut.findOne({
        //         where: {
        //             id: inventoryId
        //         },
        //     }).populate('printOutType').populate('locationId');
        // }
        return inventory;
    }











    async create(inventory) {
        
        var result;
        if (inventory.inventoryType == 'System') {
            let exist = await this.inventory.find({systemId : inventory.systemId});
            if(exist) {
                return false;
            }
            result = await this.inventory.create(inventory).fetch();
        } else if (inventory.inventoryType == 'Food') {
            result = await this.foodBeverage.create(inventory).fetch();
        } else if (inventory.inventoryType == 'Print') {
            inventory.name = inventory.printOutSize;
            result = await this.printOut.create(inventory).fetch();
        }
        return result;
    }
    async update(inventoryId, inventory) {
        
        var result;
        if (inventory.inventoryType == 'System') {
            result = await this.inventory.updateOne({ id: inventoryId }).set(inventory);
        } else if (inventory.inventoryType == 'Food') {
            result = await this.foodBeverage.updateOne({ id: inventoryId }).set(inventory);
        } else {
            result = await this.printOut.updateOne({ id: inventoryId }).set(inventory);
        }
        return result;
    }
   
    
    async getOneId(inventoryType, inventoryId) {
        var inventory;
        if (inventoryType == 'System') {
            inventory = await this.inventory.findOne({
                where: {
                    id: inventoryId
                },
            }).populate('locationId');
        } else if (inventoryType == 'Food') {
            inventory = await this.foodBeverage.findOne({
                where: {
                    id: inventoryId
                },
            }).populate('foodInventryType').populate('locationId');
        } else if (inventoryType == 'Print') {
            inventory = await this.printOut.findOne({
                where: {
                    id: inventoryId
                },
            }).populate('printOutType').populate('locationId');
        }
        return inventory;
    }

    async getAll(skip = 1, limit = 10) {
        var inventories = await this.inventory.find({
            where: {
                status: 1,
                // inventoryName: limit
            }
        });
        return inventories;
    }

    async getAllDetails() {
        var inventories = await this.inventory.find();
        return inventories;
    }

    async getOneFood(name) {
        var inventories = await this.foodBeverage.find({
            where: {
                name: name
            }
        });
        return inventories;
    }

    async getOnePrint(name) {
        var inventories = await this.printOut.find({
            where: {
                name: name
            }
        });
        return inventories;
    }

    //update system status...
    async updateSystemStatus(inventoryId, inventory) {
        
        var result;
        result = await this.inventory.updateOne({ id: inventoryId }).set(inventory);
        return result;
    }

    async updateSettingPrice(inventoryId, inventory) {
        
        var result;
        if (inventory.inventoryType == 'System') {
            result = await this.inventory.updateOne({ id: inventoryId }).set(inventory);
        } else if (inventory.inventoryType == 'Food') {
            result = await this.foodBeverage.updateOne({ id: inventoryId }).set(inventory);
        } else if (inventory.inventoryType == 'Print') {
            result = await this.printOut.updateOne({ id: inventoryId }).set(inventory);
        }
        return result;
    }

    async createPrintCategory(inventory) {
        
        return await this.printouttype.create(inventory).fetch();;
    }

    async createFoodCategory(inventory) {
        
        return await this.foodbeveragetype.create(inventory).fetch();;
    }

    async getPrintCategory() {
        var inventories = await this.printouttype.find({});
        return inventories;
    }

    async getFoodCategory() {
        var inventories = await this.foodbeveragetype.find({});
        return inventories;
    }

    async getOneFoodCategory(foodInventryType) {
        var inventories = await this.foodbeveragetype.findOne({
            where: {
                foodInventryType: foodInventryType
            }
        });
        return inventories;
    }

    async getOnePrintCategory(printOutType) {
        var inventories = await this.printouttype.findOne({
            where: {
                printOutType: printOutType
            }
        });
        return inventories;
    }

    async getPDF() {
        var inventories = await this.inventory.find({
            where: {
                status: 1,
            }
        }).populate('locationId');
        return inventories;
    }

    async getAutogenerate(id) {
        var list = await this.autocount.find({
            where: {
                status: 1,
                id : id
            },
            omit : ['createdAt','updatedAt']
        })
        return list;
    }



       /* *
    * HQCMS REPORT
    */
   
  
    /* get all  record */
    async findhqcmsFoodRecord(list) {
        return  await this.foodBeverage.findOne({ where : { recordid : list.recordid, locationId: list.locationId } });
        
    }

    /* create record */
    async findhqcmsFoodcreate(record) {
        return  await this.foodBeverage.create(record).fetch();
    }

    /* update record */
    async findhqcmsFoodupdate(record) {
        return await this.foodBeverage.updateOne({ recordid: record.recordid, locationId: record.locationId }).set(record);
    }


   /* get all  record */
    async findhqcmsFoodtypeRecord(list) {
        return  await this.foodbeveragetype.findOne({ where : { recordid : list.recordid, location: list.location } });
        
    }

    /* create record */
    async findhqcmsFoodtypecreate(record) {
        return  await this.foodbeveragetype.create(record).fetch();
    }

    /* update record */
    async findhqcmsFoodtypeupdate(record) {
        return await this.foodbeveragetype.updateOne({ recordid: record.recordid, location: record.location }).set(record);
    }
    
    
    /* get all  record */
    async hqcmsprintoutTypeRecord(list) {
        return  await this.printouttype.findOne({ where : { recordid : list.recordid, location: list.location } });
        
    }

    /* create record */
    async hqcmsprintoutTypeCreate(record) {
        return  await this.printouttype.create(record).fetch();
    }

    /* update record */
    async hqcmsprintoutTypeUpdate(record) {
        return await this.printouttype.updateOne({ recordid: record.recordid, location: record.location }).set(record);
    }


    

    /* get all  record */
    async hqcmsprintoutRecord(list) {
        return  await this.printOut.findOne({ where : { recordid : list.recordid, locationId: list.locationId } });
    
    }


    /* create record */
    async hqcmsprintoutCreate(record) {
        return  await this.printOut.create(record).fetch();
    }

    /* update record */
    async hqcmsprintoutUpdate(record) {
        return await this.printOut.updateOne({ recordid: record.recordid, locationId: record.locationId }).set(record);
    }



    /* get all  record */
    async hqcmsinventoryRecord(list) {
        return  await this.inventory.findOne({ where : { recordid : list.recordid, locationId: list.locationId } });
        
    }

    /* create record */
    async hqcmsinventoryCreate(record) {
        return  await this.inventory.create(record).fetch();
    }

    /* update record */
    async hqcmsinventoryUpdate(record) {
        return await this.inventory.updateOne({ recordid: record.recordid, locationId: record.locationId }).set(record);
    }





}
module.exports = new InventoryClass();