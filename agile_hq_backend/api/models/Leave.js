/**
 * Leave.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        userId: { model: 'user'},
        leaveDescription: { type: 'string' },
        reasonforLeave: { type: 'string' },           
        allocatedLeave: { type: 'number', defaultsTo: 10 },
        takenLeave: { type: 'number', defaultsTo: 0 },
        remainingLeave: { type: 'number', defaultsTo: 10 },
        createdBy: { type: 'number', defaultsTo: 0 },
        fromDate: { type: 'string', columnType: 'datetime' },
        toDate: { type: 'string', columnType: 'datetime' },
        leaveStatus:{type:'string',defaultsTo:"Pending"},
        location:{model:'cafe'},
        recordid:{type:'number'}
        
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

