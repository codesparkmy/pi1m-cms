

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
    this.cafe = sails.models.cafe;
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

  async getCafeDetails(cafeId) {
    return  await this.cafe.findOne({
      where: {
        id: cafeId
      },
    })

 }

  async getpageList() {
    const pagelist = await this.mainpage.find({
      where: {
        status: 1
      },
      select: ['name']
    });
    console.log(pagelist, "pagelist");
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
    console.log(subtesting, "subtesting");

    return subtesting;
  }

  async modifyPermissions(values) {
    function getDefaultifUndefined(val, defaultVal) {
      console.log(val,"val");
      return val;
      // return val === undefined ? defaultVal : val;
    }

  values.forEach(async (data)=>{
      console.log(data,"data");
      const res= data.permission;
      console.log(res,"res");
      const roleId = data.roleId;
      const pageId = data.pageId;
      const subpageId = data.subpageId;
     const list =  await this.userrolepermissions.update({
        where: {
          roleId: roleId,
           subpageId: subpageId,
           pageId: pageId
        }
      }).set(res).fetch();
      console.log(list,"list");
      const result = getDefaultifUndefined(list,false)
      console.log(result,"res");
    })
    return values;


    // for (let insertValues of values) {
    //   const roleId = insertValues.roleId;
    //   const pageId = insertValues.pageId;
    //   const subpageId = insertValues.subpageId;
    //   const getData = await this.userrolepermissions.find({
    //     where: {
    //       roleId, pageId, subpageId
    //     }
    //   });
    //   console.log(getData, "getData");
    //   const permissions = {
    //     "pageId": pageId,
    //     "roleId": roleId,
    //     "subpageId": subpageId,
    //     "addPermission": getDefaultifUndefined(insertValues.permission.addPermission, false),
    //     "editPermission": getDefaultifUndefined(insertValues.permission.editPermission, false),
    //     "deletePermission": getDefaultifUndefined(insertValues.permission.deletePermission, false),
    //     "viewPermission": getDefaultifUndefined(insertValues.permission.viewPermission, false)
    //   }
    //   if (getData.length == 0) {
    //     console.log("entered", permissions);
    //     const insertRole = await this.userrolepermissions.create(permissions)
    //     console.log(insertRole, "insertRole");
    //     break;
    //   }
    //   else {
    //     const updateValues = insertValues.permission;
    //     console.log(updateValues, "updateValues");
    //     return await this.userrolepermissions.update({
    //       where: {
    //         roleId: roleId,
    //          subpageId: subpageId,
    //          pageId: pageId
    //       }
    //     }).set(updateValues).fetch()
    //   }
    // }

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
    console.log(body, "body-clock");
    const details = {
      "userId": body.userId
    }
    const date =new Date();
    console.log(date,"datre");
   const result = await this.logIn.create(details)
   console.log(result,"result");
  }
  async getReports(){

    return await this.subpage.find();
  }


}

module.exports = new UserRepository();
