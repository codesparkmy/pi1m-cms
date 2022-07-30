/**
 * Visitor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

 
  attributes: {
    visitorId:{model :'visitor'},
    membership_from:{type:'string'},
    membership_to:{type:'string'},
    fee: { type: 'number', defaultsTo: 0 },
    membership_fee:{type:'string'},
    type:{type:'number'},
    year:{type:'number'},
    status:{type:'number', defaultsTo: 1},
    received_date:{type:'string'},
    createdBy:{type:'number'},
    location:{type:'number'},
    recordid:{type:'number'},

  },

};

