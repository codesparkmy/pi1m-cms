/**
 * Nationality.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    status: { type: 'boolean', defaultsTo :true},
    amount: { type: 'number'},
    location: { type: 'number'},
    recordid:{ type:'number' },

    /* model */
    purchaseId : { model : 'purchase' },
    expenseId : { model : 'expense' }
  },

};

