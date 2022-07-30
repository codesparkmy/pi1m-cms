/**
 * PosSystemAssign.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        pcNo: { model: 'inventory' },
        assignTo: { model: 'visitor' },
        userId: { type: 'string', required: true },
        transactionId: { type: 'string' },
        purpose: { type: 'string' },
        duration: { type: 'string', required: true },
        hours: { type: 'string', required: true },
        minutes: { type: 'string', required: true },
        startTime: { type: 'string', columnType: 'datetime' },
        endTime: { type: 'string', columnType: 'datetime' },
        timeLeft: { type: 'string' },
        totalHours: { type: 'string' },
        fee: { type: 'number', defaultsTo: 0 },
        location: { model: 'cafe' },
        status: { type: 'number', defaultsTo: 1 },
        /* 1- currently Active, 2- session ended */
        training: { model: 'training' },


        foodDetails: {
            collection: 'posfood',
            via: 'possystemassign'
        },
        serviceDetails: {
            collection: 'posservice',
            via: 'possystemassign'
        },

        createdBy: { type: 'number' },



    },

};