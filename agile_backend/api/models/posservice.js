/**
 * PosSystemAssign.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        possystemassign: { model: 'possystemassign' },
        serviceId: { model: 'printout' },
        printOutTypeId: { model: 'printouttype' },
        node: { type: 'number' },
        amount: { type: 'number' },
        status: { type: 'boolean' },
        location: { type: 'number' }
    },

};