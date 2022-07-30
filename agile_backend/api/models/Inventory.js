/**
 * Inventory.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    systemId:{type:'string'},
    inventoryName:{type:'string'},
    deviceName:{type:'string'},
    inventoryType: { type:'string'},
    typeOfSystem:{type:'number'},
    processor:{type:'string'},
    memory:{type:'string'},
    serialNumber:{type:'string'},
    CategoryChip:{type:'number'},
    CategoryDrinks:{type:'number'},
    CategoryTrainingCourse:{type:'number'},
    version:{type:'string'},
    ipAddress: { type:'string'},
    status:{type:'number',defaultsTo:1},// 1.Active,2. Inactive
    systemStatus: { type: 'number', defaultsTo: 2},//1.Acive System,2. Inactive System
    price: { type: 'number', defaultsTo: 0 },
    locationId:{model:'cafe'}
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

