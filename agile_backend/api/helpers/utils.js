const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
module.exports = {


  friendlyName: 'Utils',


  description: 'Utils something.',


  inputs: {
    method:{
      type:'string',
      example:'genHash',
      description:'helper method name',
      required:true
    },
    params:{
      type:'ref',
      description:'helper params',
      required:true
    }
  },
  exits: {
    invalid: {
      description: 'Invalid token or no authentication provided'
    }
  },



  fn: async function (inputs, exits) {
    // TODO
    const methods = {
      genHash: function (data) {
        let salt = bcrypt.genSaltSync(8);
        return bcrypt.hashSync(data, salt);
      },
      compare: async (password, hash) => {
        return await bcrypt.compare(password, hash);
      },
      generateToken: data => {
        return jwt.sign({...data}, sails.config.custom.jwtKey, {
          expiresIn: sails.config.custom.timeToLive
        });
      }
    };
    if(inputs.method in methods){
      return exits.success(methods[inputs.method](...inputs.params));
    }
    return exits.invalid('Invalid method');
  }


};

