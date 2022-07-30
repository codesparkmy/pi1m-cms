/**
 * Cafe.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        name: { type: 'string', required: true },
        description: { type: 'string', required: true },
        startDate: { type: 'ref', columnType: 'datetime', required: true },
        endDate: { type: 'ref', columnType: 'datetime', required: true },
        status: { type: 'number', defaultsTo: 1 },
        location: { model: 'cafe' },
    },
};