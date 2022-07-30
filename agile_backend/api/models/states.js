/**
 * Nationality.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name:{ type:'string', required:true},
    countryId:{ model : 'country'},
    status: { type: 'boolean', defaultsTo :true},
    location : { type : 'number' }
  },

};

