/**
 * PermissionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const permissionRepo = require("../repositories/permissionRepo");
module.exports = {
    //create roles
    async createRole(req, res) {
        try {
            const { name, status, roleId, viewOnly, editOnly} = req.body;
            let result = await permissionRepo.create({ name, status, roleId, viewOnly, editOnly});
            if (!!result) {
                return res.status(200).json(result);
            }
            return res.status(400).json({ message: "Bad Request" });

        } catch (error) {
            res.serverError(error);
        };
    },

    //get all role
    async getAllRole(req, res) {
        try {
            const rolesPermission = await permissionRepo.getAll();
            return res.status(201).json(rolesPermission);
        } catch (error) {
            return res.serverError(error);
        }
    },

    //get OneRole
    async getOneRole(req, res) {
        try {
            const { permissionId } = req.params;
            const rolesPermission = await permissionRepo.getOne(permissionId);
            return res.status(201).json(rolesPermission);
        } catch (error) {
            return res.serverError(error);
        }
    },
    async udpate(req, res) {
        try {
            const { permissionId } = req.params;
            const { viewOnly, editOnly } = req.body;
            const result = await permissionRepo.update(cafeId, { viewOnly, editOnly});
            if (result) {
                const cafe = await permissionRepo.getOne(permissionId);
                return res.status(200).json(cafe);
            }
            return res.status(403).json({ message: 'Not found' });
        } catch (error) {
            return res.serverError(error);
        }
    }

};

