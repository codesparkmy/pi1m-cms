/**
 * Cafe.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
      name:{type:'string', required:true},
      status:{type:'boolean', defaultsTo : true},
      location:{type:'number'},
      recordid:{type:'number'},
      
    },
  
  };
  
  