class InventoryClass {
    constructor() {
        this.inventory = sails.models.inventory;
        this.foodBeverage = sails.models.foodbeverage;
        this.printOut = sails.models.printout;
        this.printouttype = sails.models.printouttype;
        this.foodbeveragetype = sails.models.foodbeveragetype;

        this.autocount = sails.models.autocount;
        this.cafeId = sails.config.custom.cafeId;
    }

    async getSystemExist(body) {
        var inventory;
        if (body.inventoryType == 'System') {
            inventory = await this.inventory.find({
                where: {
                    status: 1,
                    systemId: body.systemId
                },
            })
        } else if (body.inventoryType == 'Food') {
            inventory = await this.foodBeverage.find({
                where: {
                    status: 1,
                    name: body.name
                },
            })
        } else if (body.inventoryType == 'Print') {
            inventory = await this.printOut.find({
                where: {
                    status: 1,
                    printOutType: body.printOutType,
                    name: body.printOutSize,
                },
            })
        }
        return inventory;
    }

    async create(inventory) {
        var result;
        if (inventory.inventoryType == 'System') {
            let exist = await this.inventory.find({ systemId: inventory.systemId });
            if (exist.length) {
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
        inventory.locationId = this.cafeId;
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
        } else if (inventoryType == 'possystem-service') {
            inventory = await this.printouttype.find({
                where: {
                    status: 1
                },
            }).populate('serviceType', { where: { status: 1 } })
        }
        return inventory;
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

    async getAllPcList(skip = 1, limit = 10) {
        var inventories = await this.inventory.find({
            where: {
                status: { '!=': 0 },
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
        inventory.locationId = this.cafeId;
        var result;
        result = await this.inventory.updateOne({ id: inventoryId }).set(inventory);
        return result;
    }

    async updateSettingPrice(inventoryId, inventory) {
        inventory.locationId = this.cafeId;
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
        inventory.location = this.cafeId;
        return await this.printouttype.create(inventory).fetch();;
    }

    async createFoodCategory(inventory) {
        inventory.location = this.cafeId;
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
                id: id
            },
            omit: ['createdAt', 'updatedAt']
        })
        return list;
    }


    async getAllFoodBeverageList(locationId) {
        return await this.foodBeverage.find({
            where: {
                locationId: locationId
            }
        });
    }

    /* get all Food and beverage type cms  record */
    async getAllFoodBeveragetypeList(locationId) {
        return await this.foodbeveragetype.find({
            where: {
                location: locationId
            }
        });
    }


    /* get all Food and beverage hqcmsprintouttype  cms  record */
    async getAllprintouttypeList(locationId) {
        return await this.printouttype.find({
            where: {
                location: locationId
            }
        });
    }

    /* get all printout  cms  record */
    async getAllprintoutList(location) {
        return await this.printOut.find({
            where: {
                locationId: location
            }
        });
    }

    /* get all getAllinventoryList  cms  record */
    async getAllinventoryList(locationId) {
        return await this.inventory.find({
            where: {
                locationId: locationId
            }
        });
    }




}
module.exports = new InventoryClass();