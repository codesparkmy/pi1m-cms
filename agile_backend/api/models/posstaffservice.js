/**
 * PosSystemAssign.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        userId: { model: 'visitor', required: true },
        transactionId: { type: 'string' },
        location: { model: 'cafe' },
        status: { type: 'number', defaultsTo: 1 },
        createdBy: { type: 'number' },

    }

}