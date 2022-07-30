const InventoryRepo = require('../repositories/inventoryRepo');
var fs = require('fs');
var pdf = require("pdf-creator-node");
const os = require('os');
var html = fs.readFileSync('./views/pdfTemplates/inventory.ejs', 'utf8');
/**
 * InventoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    async create(req, res) {
        try {

            const checksystemId = await InventoryRepo.getSystemExist(req.body);
            if (checksystemId.length) {
                return res.status(200).json({ message: 'Data already exists' });
            } else {
                const inventory = await InventoryRepo.create(req.body);
                if (!!inventory) {
                    return res.status(200).json({ data: inventory, message: "Created Successfully" });
                }
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },
    async update(req, res) {
        try {
            const { inventoryId } = req.params;
            //  const { systemId, inventoryName, deviceName, ipAddress, inventoryType, typeOfSystem, processor, memory, serialNumber, version } = req.body;
            const inventory = await InventoryRepo.update(inventoryId, req.body);
            if (inventory) {
                const result = InventoryRepo.getOne(inventoryId);
                return res.status(200).json({ data: result, message: "Inventory updated Successfully" });
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },
    async getOne(req, res) {
        try {
            const { inventoryType } = req.params;
            const inventory = await InventoryRepo.getOne(inventoryType);
            if (inventory) {
                return res.status(200).json(inventory);
            }
            return res.status(403).json({ message: 'Not found' });
        } catch (error) {
            return res.serverError(error);
        }
    },

    async getOneId(req, res) {
        try {
            const { inventoryType, inventoryId } = req.query;


            const inventory = await InventoryRepo.getOneId(inventoryType, inventoryId);
            console.log(inventory.memberprice, "tst");
            if (inventory.memberprice) {
                var value = Number(inventory.memberprice);
                console.log(inventory.memberprice);
                if (typeof value === 'number') {
                    inventory.memberprice = value.toFixed(2);
                }
            }
            if (inventory.nonMemberprice) {
                var value = Number(inventory.nonMemberprice);
                console.log(inventory.nonMemberprice);
                if (typeof value === 'number') {
                    inventory.nonMemberprice = value.toFixed(2);
                }
            }

            if (inventory) {
                return res.status(200).json(inventory);
            }
            return res.status(403).json({ message: 'Not found' });
        } catch (error) {
            return res.serverError(error);
        }
    },

    async getAll(req, res) {
        try {
            const { page, limit } = req.query;
            const inventory = await InventoryRepo.getAll(page || 1, limit || "");
            if (inventory) {
                return res.status(200).json(inventory);
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },

    async getAllPcList(req, res) {
        try {
            const { page, limit } = req.query;
            const inventory = await InventoryRepo.getAllPcList(page || 1, limit || "");
            if (inventory) {
                return res.status(200).json(inventory);
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },



    async exportExcel(req, res) {
        let result = await InventoryRepo.getAllDetails();
        const filename = "./reports/excel/output-" + Date.now() + ".csv"
        const output = [];
        const headers = []
        const header = [{
            systemId: 'systemId',
            inventoryName: 'inventoryName',
            deviceName: 'deviceName',
            inventoryType: 'inventoryType',
            typeOfSystem: 'typeOfSystem',
            processor: 'processor',
            memory: 'memory',
            serialNumber: 'serialNumber',
            CategoryChip: 'CategoryChip',
            CategoryDrinks: 'CategoryDrinks',
            CategoryTrainingCourse: 'CategoryTrainingCourse',
            version: 'version',
            ipAddress: 'ipAddress',
            status: 'status',
            systemStatus: 'systemStatus',
            price: 'price',
            locationId: 'locationId',
        }]
        header.forEach((d) => {
            headers.push(d.systemId)
            headers.push(d.inventoryName)
            headers.push(d.deviceName)
            headers.push(d.inventoryType)
            headers.push(d.typeOfSystem)
            headers.push(d.processor)
            headers.push(d.memory)
            headers.push(d.serialNumber)
            headers.push(d.CategoryChip)
            headers.push(d.CategoryDrinks)
            headers.push(d.CategoryTrainingCourse)
            headers.push(d.version)
            headers.push(d.ipAddress)
            headers.push(d.status)
            headers.push(d.systemStatus)
            headers.push(d.price)
            headers.push(d.locationId)

            output.push(headers.join())
        })
        fs.writeFileSync(filename, output.join(os.EOL));
        result.forEach((obj) => {
            const row = [];
            row.push(obj.inventoryName);
            row.push(obj.deviceName);
            row.push(obj.inventoryType);
            row.push(obj.typeOfSystem);
            row.push(obj.processor);
            row.push(obj.memory);
            row.push(obj.serialNumber);
            row.push(obj.CategoryChip);
            row.push(obj.CategoryDrinks);
            row.push(obj.CategoryTrainingCourse);
            row.push(obj.version);
            row.push(obj.ipAddress);
            row.push(obj.status);
            row.push(obj.systemStatus);
            row.push(obj.price);
            row.push(obj.locationId);

            output.push(row.join());

        });
        fs.writeFileSync(filename, output.join(os.EOL));
        return res.status(200).json({ message: "Excel reported successully", path: filename })
    },


    async updateSettingPrice(req, res) {
        try {
            const { inventoryId } = req.params;
            //  const { systemId, inventoryName, deviceName, ipAddress, inventoryType, typeOfSystem, processor, memory, serialNumber, version } = req.body;
            const inventory = await InventoryRepo.updateSettingPrice(inventoryId, req.body);
            if (inventory) {
                const result = InventoryRepo.getOne(inventoryId);
                return res.status(200).json({ data: result, message: "Inventory updated Successfully" });
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },

    async createPrintCategory(req, res) {
        try {
            const result = await InventoryRepo.getOnePrintCategory(req.body.printOutType);
            if (!!result) {
                return res.status(202).json({ message: "PrintCategory Already Exist.." });
            }
            const inventory = await InventoryRepo.createPrintCategory(req.body);
            if (!!inventory) {
                return res.status(200).json({ data: inventory, message: "PrintCategory Created Successfully" });
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },

    async createFoodCategory(req, res) {
        try {
            const result = await InventoryRepo.getOneFoodCategory(req.body.foodInventryType);
            if (!!result) {
                return res.status(202).json({ message: "FoodCategory Already Exist.." });
            }
            const inventory = await InventoryRepo.createFoodCategory(req.body);
            if (!!inventory) {
                return res.status(200).json({ data: inventory, message: "FoodCategory Created Successfully" });
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },

    async getFoodCategory(req, res) {
        try {

            const inventory = await InventoryRepo.getFoodCategory();
            if (inventory) {
                return res.status(200).json(inventory);
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },

    async getPrintCategory(req, res) {
        try {

            const inventory = await InventoryRepo.getPrintCategory();
            if (inventory) {
                return res.status(200).json(inventory);
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },


    async getOneCron(req, res) {
        try {
            const { inventoryType } = req.params;
            const inventory = await InventoryRepo.getOne(inventoryType);
            if (!!cafe) {
                // insert statment

                // execute the insert statment
                connection.query("INSERT INTO inventrory (createdAt,updatedAt,systemId,inventoryName,deviceName,inventoryType,typeOfSystem,processor,memory,serialNumber,version,ipAddress,status,systemStatus,price) VALUES ('" + new Date(inventory.createdAt).toISOString().substr(0, 10) + "','" + new Date(inventory.updatedAt).toISOString().substr(0, 10) + "'," + inventory.systemId + ",'" + inventory.inventoryName + "','" + inventory.deviceName + "','" + inventory.inventoryType + "'," + inventory.typeOfSystem + ",'" + inventory.processor + "','" + inventory.memory + "','" + inventory.serialNumber + "','" + inventory.version + "','" + inventory.ipAddress + "'," + inventory.status + "," + inventory.systemStatus + "," + inventory.price + ")");

                connection.end();
                return res.json({ message: "successfully inserted" });
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },
    async getPDF(req, res) {
        try {
            var options = {
                format: "A3",
                orientation: "portrait",
                border: "10mm",
                header: {
                    height: "20mm",
                    contents: '<div style="text-align: center;"><h1>Cafe List</h1></div>'
                }
            };

            const inventory = await InventoryRepo.getPDF();
            if (inventory) {
                var document = {
                    html: html,
                    data: {
                        getreport: inventory
                    },
                    path: "./reports/pdf/InventoryList-" + Date.now() + ".pdf"
                };

                pdf.create(document, options)
                    .then(pdfResponse => {
                        return res.status(200).json({ message: "PDF Created Successfully", path: document.path });
                    })
                    .catch(error => {
                        console.log(error);
                        return res.status(403).json({ message: 'Not found' });
                    });

            } else {
                return res.status(403).json({ message: 'Not found' });
            }

        } catch (error) {
            return res.serverError(error);
        }
    },

    async getAutogenerate(req, res) {
        try {
            const { id } = req.params;
            const list = await InventoryRepo.getAutogenerate(id);
            if (list) {
                return res.status(200).json(list);
            }
            return res.status(403).json({ message: 'Not found' });
        } catch (error) {
            return res.serverError(error);
        }
    },

    async updateSystemStatus(req, res) {
        try {
            const { id } = req.params
            const { status } = req.body;
            const list = await InventoryRepo.updateSystemStatus(id, { status: status });
            if (list) {
                return res.status(200).json({ message: 'updated successfully' });
            }
            return res.status(403).json({ message: 'Not found' });
        } catch (error) {
            return res.serverError(error);
        }
    },


    /* update foodbeaverage */

    async getAllFoodBeverageList(location) {
        try {
            const list = await InventoryRepo.getAllFoodBeverageList(location);
            if (list) {
                return list;
            }
            return { message: 'Something went wrong' };
        } catch (error) {
            return error;
        }
    },



    /* update foodbeaverage updatefoodBeveragetype */

    async getAllFoodBeveragetypeList(location) {
        try {
            const list = await InventoryRepo.getAllFoodBeveragetypeList(location);
            if (list) {
                return list;
            }
            return { message: 'Something went wrong' };
        } catch (error) {
            return error;
        }
    },




    /* update foodbeaverage updatefoodBeveragetype */

    async getAllprintouttypeList(location) {
        try {
            const list = await InventoryRepo.getAllprintouttypeList(location);
            if (list) {
                return list;
            }
            return { message: 'Something went wrong' };
        } catch (error) {
            return error;
        }
    },





    /* update printout List */

    async getAllprintoutList(location) {
        try {
            const list = await InventoryRepo.getAllprintoutList(location);
            if (list) {
                return list;
            }
            return { message: 'Something went wrong' };
        } catch (error) {
            return error;
        }
    },



    /* update getAllinventoryList */

    async getAllinventoryList(location) {
        try {
            const list = await InventoryRepo.getAllinventoryList(location);
            if (list) {
                return list;
            }
            return { message: 'Something went wrong' };
        } catch (error) {
            return error;
        }
    },



};