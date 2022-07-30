/**
 * Nationality.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  
  attributes: {
    name:{type:'string', required:true},
    prefix:{type:'string', required:true},
    count:{type:'number', required:true},
    status: { type: 'boolean', defaultsTo :true},
  },

};

