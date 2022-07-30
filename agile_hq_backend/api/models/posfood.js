/**
 * PosSystemAssign.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    possystemassign: { model: 'possystemassign'},
    foodbeverage: { model: 'foodbeverage'},
    node: { type: 'number', defaultsTo : 1},
    amount: { type: 'number'},
    status: { type: 'number',defaultsTo : 1},
    location: { type : 'number'},
    recordid: { type : 'number'},
  },

};

