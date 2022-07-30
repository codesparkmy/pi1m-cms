

const subpage = require('../models/subpage');
const mainpage = require('../models/mainpage');
// const logInInfo = require('../models/logInInfo')
const { Op, or } = require("sequelize");

class UserRepository {
  constructor() {
    this.user = sails.models.user;
    this.subpage = sails.models.subpage;
    this.mainpage = sails.models.mainpage;
    this.userrolepermissions = sails.models.userrolepermissions;
    this.logIn = sails.models.logInInfo;
  }
  async getByEmailId(email) {
    const user = await this.user.findOne({
      where: {
        email,
        userstatus: true
      }
    });
    return user;
  }
  async create(user) {
    return await sails.models.user.create(user).fetch();
  }
  async getOne(userId) {
    const user = await this.user.findOne({
      where: {
        id: userId
      },
      omit: ['password']
    })

    return user;
  }

  async getpageList() {
    const pagelist = await this.mainpage.find({
      where: {
        status: 1
      },
      select: ['name']
    });
    return pagelist;
  }

  async getSubpage(subpageId, roleId) {
    const subtesting = await this.subpage.find({
      where: {
        pageId: subpageId
      },
      select: ['name']
    })
      .populate('permissionList', {
        where: {
          roleId: roleId,
        },
        omit: ['updatedAt', 'createdAt'],
      });
    return subtesting;
  }

  async modifyPermissions(values) {
    // function getDefaultifUndefined(val, defaultVal) {
    //   return val;
      // return val === undefined ? defaultVal : val;
    // }

  values.forEach(async (data)=>{
      const permissionData= data.permission;
      const roleId = data.roleId;
      const pageId = data.pageId;
      const subpageId = data.subpageId;

      var getList =  await this.userrolepermissions.findOne({
        where: {
           roleId: roleId,
           subpageId: subpageId,
           pageId: pageId
        }
      })
      
      if (!!getList) {
        await this.userrolepermissions.update({
          where: {
             roleId: roleId,
             subpageId: subpageId,
             pageId: pageId
          }
        }).set(permissionData).fetch();
      } else {
          await this.userrolepermissions.create({
            'pageId': pageId,
            'roleId': roleId,
            'subpageId': subpageId,
            'addPermission': permissionData.addPermission,
            'editPermission': permissionData.editPermission,
            'deletePermission': permissionData.deletePermission,
            'viewPermission': permissionData.viewPermission
        });
      }
     
    })

    return values;

  }

  async getAll(skip = 1, limit = 10) {
    const users = await this.user.find({
      where: {
        userstatus: true
      },
      omit: ['password'],
      limit,
      skip: skip - 1
    });
    return users;
  }

 
  async deleteuser(roleId, body) {
    return await this.user.updateOne({ id: roleId }).set(body);
  }

  async update(userId, body) {
    var isUpdate = await this.user.updateOne({ id: userId }).set(body);
    return isUpdate;
  }
  async getOneAdmin(userId, roleId) {
    const user = await this.user.findOne({
      where: {
        id: userId,
        role: roleId
      },
      omit: ['password']
    });
    return user;
  }

  async getAllUserReport(fromdate, todate, location) {
    return await this.user.find({
      where: {
        createdAt: {
          '>': new Date(fromdate),
          '<': new Date(todate)
        },
        branchAllocation: location
      }
    })
  }

  async getLocationBasedUsers(locationId) {
    const user = await this.user.find({
      where: {
        branchAllocation: locationId,
      },
      omit: ['password']
    });
    return user;
  }
  async resetPassword(userId, body) {
    const hash = body.newPassword;
    const encPassword = await sails.helpers.utils.with({ method: 'genHash', params: [hash] });

    return await this.user.updateOne({
      where: {
        id: userId
      }
    }).set({ "password": encPassword })
  }

  async clockInAttendance(body) {
    const details = {
      "userId": body.userId
    }
    const result = await this.logIn.create(details)
  }

  async getReports(){

    return await this.subpage.find();
  }

  async getAllHqcmsEmployees(location) {
      const users = await this.user.find({
          where: {
            location: location
          },
      });
      return users;
  }

}

module.exports = new UserRepository();
