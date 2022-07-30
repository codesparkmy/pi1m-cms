/**
 * Training.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        recordid: { type: 'number' },
        course: { type: 'string' },
        courseCode: { type: 'string' },
        courseType: { model : 'trainingcategory' },
        courseTarget: {model: 'targetgroup'},
        /* duration: { type: 'string' }, */
        start_hour: { type: 'string' },
        end_hour: { type: 'string' },
        durationType: { type: 'number' },
        fee: { type: 'number' },
        /* enrolled: { type: 'number' }, */
        maximumSubscription: { type: 'number' },
        trainer: { model: 'user' },
        courseDuration: { type: 'string' },
        createdBy: { type: 'number', defaultsTo: 0 },
        location: { model: "cafe" },
        status: { type: 'number', defaultsTo: 1 }, //1-Active,2-Inactive
        availabeTraining: { type: "number", defaultsTo: 0 },
        trainingDate: { type: 'string', columnType: 'datetime' },
        startTime: { type: 'string', columnType: 'datetime' },
        endTime: { type: 'string', columnType: 'datetime' },
        RegisteredRecords : {
            collection :'traingregister', 
            via : 'trainingId'
        }
        
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