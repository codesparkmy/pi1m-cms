const CaseRepo = require('../repositories/cafeRepo');
const mysql = require('mysql');
var fs = require('fs');
var pdf = require("pdf-creator-node");
var html = fs.readFileSync('./views/pdfTemplates/cafelist.ejs', 'utf8');
const path = require('path');
const os = require('os');
/**
 * CafeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'agiles'
};
let connection = mysql.createConnection(config);

module.exports = {
    async create(req, res) {
        try {
            const { branchId, branchName, branchHead, location, contactNumber, gstNumber, assitbranchHead, capacityOfBranch } = req.body;
            const cafeExist = await CaseRepo.getOneExist(branchId);
            if (!!cafeExist) {
                return res.status(202).json({ message: "Branch Id Already Exist" });
            }
            const cafe = await CaseRepo.create({ branchId, branchName, branchHead, location, contactNumber, gstNumber, assitbranchHead, capacityOfBranch });
            if (cafe) {
                return res.status(200).json({ data: cafe, message: "Branch Created Successfully" });
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },
    async getAll(req, res) {
        try {
            const { page, limit } = req.query;
            const cafes = await CaseRepo.getAll(page || 1, limit || "");
            return res.status(201).json(cafes);
        } catch (error) {
            return res.serverError(error);
        }
    },

    async getAllBranch(req, res) {
        try {
            const cafes = await CaseRepo.getAllBranch();
            return res.status(201).json(cafes);
        } catch (error) {
            return res.serverError(error);
        }
    },
    async getOne(req, res) {
        try {
            const { cafeId } = req.params;
            const cafe = await CaseRepo.getOne(cafeId);
            if (!!cafe) {
                return res.status(200).json(cafe);
            }
            return res.status(403).json({ message: 'Not found' });
        } catch (error) {
            return res.serverError(error);
        }
    },
    async udpate(req, res) {
        try {
            const { cafeId } = req.params;
            const { branchId, branchName, branchHead, contactNumber, location, assitbranchHead, gstNumber, status } = req.body;
            const result = await CaseRepo.update(cafeId, { branchId, branchName, branchHead, contactNumber, location, assitbranchHead, gstNumber, status });
            if (result) {
                const cafe = await CaseRepo.getOne(cafeId);
                return res.status(200).json({ data: cafe, message: "Branch Updated Successfully" });
            }
            return res.status(403).json({ message: 'Not found' });
        } catch (error) {
            return res.serverError(error);
        }
    },

    async getOneCron(req, res) {
        try {
            const { cafeId } = req.params;
            const cafe = await CaseRepo.getOne(cafeId);
            if (!!cafe) {
                // insert statment  

                // execute the insert statment
                connection.query("INSERT INTO cafe (createdAt,updatedAt,branchId,location,branchName,branchHead,contactNumber,status,capacityOfBranch,createdBy,gstNumber,assitbranchHead) VALUES ('" + new Date(cafe.createdAt).toISOString().substr(0, 10) + "','" + new Date(cafe.updatedAt).toISOString().substr(0, 10) + "'," + cafe.branchId + ",'" + cafe.location + "','" + cafe.branchName + "','" + cafe.branchHead + "','" + cafe.contactNumber + "'," + cafe.status + "," + cafe.capacityOfBranch + "," + cafe.createdBy + ",'" + cafe.gstNumber + "','" + cafe.assitbranchHead + "')");

                connection.end();
                return res.json({ message: "successfully inserted" });
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },

    async exportExcel(req, res) {
        const cafes = await CaseRepo.getAllDetails();
        const filename = "./reports/excel/output-" + Date.now() + ".csv"
        const output = [];
        const headers = []
        const header = [{
            branchId: 'branchId',
            location: 'location',
            branchName: 'branchName',
            branchHead: 'branchHead',
            contactNumber: 'contactNumber',
            status: 'status',
            capacityOfBranch: 'capacityOfBranch',
            gstNumber: 'gstNumber',
            assitbranchHead: 'assitbranchHead',
        }]
        header.forEach((d) => {
            headers.push(d.branchId)
            headers.push(d.location)
            headers.push(d.branchName)
            headers.push(d.branchHead)
            headers.push(d.contactNumber)
            headers.push(d.status)
            headers.push(d.capacityOfBranch)
            headers.push(d.gstNumber)
            headers.push(d.assitbranchHead)

            output.push(headers.join())
        })
        fs.writeFileSync(filename, output.join(os.EOL));
        cafes.forEach((obj) => {
            const row = [];
            row.push(obj.branchId);
            row.push(obj.location);
            row.push(obj.branchName);
            row.push(obj.branchHead);
            row.push(obj.contactNumber);
            row.push(obj.status);
            row.push(obj.capacityOfBranch);
            row.push(obj.gstNumber);
            row.push(obj.assitbranchHead);
            output.push(row.join());

        });
        fs.writeFileSync(filename, output.join(os.EOL));
        return res.status(200).json({ message: "Excel reported successully", path: filename })
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
            const cafes = await CaseRepo.getPDF();

            if (cafes) {
                var document = {
                    html: html,
                    data: {
                        getreport: cafes
                    },
                    path: "./reports/pdf/cafeList-" + Date.now() + ".pdf"
                };

                pdf.create(document, options)
                    .then(pdfResponse => {
                        return res.status(200).json({ message: "PDF created successfully", path: document.path });
                    })
                    .catch(error => {
                        return res.status(403).json({ message: 'PDF Not found', response : error });
                    });
            } else {
                return res.status(403).json({ message: 'Not found' });
            }

        } catch (error) {
            return res.serverError(error);
        }
    }
};