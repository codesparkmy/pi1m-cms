const jwt = require('jsonwebtoken');
module.exports = {


  friendlyName: 'Verify jwt',


  description: 'Verify jwt token',


  inputs: {
    req: {
      type: 'ref',
      friendlyName: 'Request',
      description: 'Request object',
      required: true
    },
    res: {
      type: 'ref',
      friendlyName: 'Response',
      description: 'Response object',
      required: true
    }
  },


  exits: {
    invalid: {
      description: 'Invalid token or no authentication provided'
    }
  },


  fn: async (inputs, exits) => {
    // TODO
    const { req, res } = inputs;
    if (!!req.header('authorization')) {
      const token = req.header('authorization').split('Bearer ')[1];
      if (!!token) {
        jwt.verify(token, sails.config.custom.jwtKey, async (err, payload) => {
          if (!!err) {
            return exits.invalid('Invalid token or no authentication provided');
          }
          const data = await sails.models.user.findOne({where:{
            id:payload.id,
            userstatus:true
          }, omit:['password']});
          if (!!data) {
            req.user = data;
            return exits.success(data);
          }
          return exits.invalid('Invalid token or no authentication provided');
        });
      } else  {
        return exits.invalid();
      }   
    }    
  }


};

