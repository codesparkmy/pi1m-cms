/**
 * Visitor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    gstRate:{type:'string'},   
    serviceChargeRate:{type:'string'},   
    sgstRate:{type:'string'},   
    status:{type:'boolean'},   
    location:{type:'number'},   
  },

};

