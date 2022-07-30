/**
 * Nationality.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    date: { type: 'string', columnType: 'date' },
    transactionId:{ type:'string' },
    totalamount:{ type:'number' },
    status: { type: 'boolean', defaultsTo :true},
    location:{ type:'number' },

    /* model */
    
    purchaseDetails : {
      collection : 'purchasedetail',
      via : 'purchaseId'
    },
    createdBy:{ type:'number' },
  },

};

