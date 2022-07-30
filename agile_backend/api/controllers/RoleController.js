/**
 * RoleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const subpage = require("../models/subpage");
const { getOne } = require("../repositories/posSystemAssignRepo");
const roleRepo = require("../repositories/roleRepo");
module.exports = {

    //create roles

   // getOneApi
    // 

    async getOne(req,res){
        const name=req.params.name;
        let checkIfRoleExist = await roleRepo.getWithName(name);
        if(checkIfRoleExist){
            return res.status(400).json({ data: checkIfRoleExist,message:"Already exist" });
        }
        else{
    return res.status(200).json({})
        }
    },

    async createRole(req, res) {
        try {
            console.log(req.body);
            const { name } = req.body;
           const result = await roleRepo.create({ name });
            if (!!result) {
                const list = req.body.permissionList;
                const insertRolePermissions = await roleRepo.createRolewithPermissions(result.id,list);
                if(!!insertRolePermissions){
                return res.status(200).json({"message":"Role created successfully"});
                }
            }
            return res.status(202).json({ message: 'No data found' });
        } catch (error) {
            res.serverError(error);
        };
    },
    //get all role
    async getAllRole(req, res) {
        try {
            const roles = await roleRepo.getAll();
            return res.status(201).json(roles);
        } catch (error) {
            return res.serverError(error);
        }
    },

    //get OneRole
    async getOneRole(req, res) {
        try {
            const roles = await roleRepo.getOne(req.param);
            return res.status(201).json(roles);
        } catch (error) {
            return res.serverError(error);
        }
    }




};

