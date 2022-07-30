/**
 * PosSystemAssign.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        qty: { type: 'string' },
        posstaffserviceId: { model: 'posstaffservice', required: true },
        printout_type_Id: { model: 'printouttype', required: true },
        printout_Id: { model: 'printout' },
        location: { model: 'cafe' },
        price: { type: 'number' },
        status: { type: 'number', defaultsTo: 1 },
    }

}