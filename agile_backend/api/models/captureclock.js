/**
 * PosSystemAssign.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        userId: { model: 'user' },
        clockin: { type: 'string' },
        clockout: { type: 'string' },
        locationId: { model: 'cafe' },
        status: { type: 'number', defaultsTo: 1 },
    },

};