module.exports = {


  friendlyName: 'Mailer',


  description: 'Mailer something.',


  inputs: {
    data: {
      type: 'ref',
      description: 'Template Data',
      required: true
    },
    template:{
      type:'string',
      description:'Template Name',
      required:true
    },
    subject:{
      type:'string',
      description:'Mail Subject',
      required:true
    },
    toEmail:{
      type: 'string',
      description: 'To email',
      required: true
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

    invalid:{
      description:'invalid'
    }

  },


  fn: async function (inputs, exits) {
    // TODO
    const MailerService = require('sails-service-mailer');
    await MailerService('smtp', {
      from: 'pickups.service2020@gmail.com',
      provider:{
        service:'Gmail',
        port: 465,
        secure:false,
        auth:{
          user: 'pickups.service2020@gmail.com',
          pass: 'Doodle@321'
        }
      }
    }).send(inputs.template, inputs.data, {to:inputs.toEmail, subject:inputs.subject}, (err) => {
      if(err){
        return exits.invalid({error:'mail not sent'});
      }
      return  exits.success({message:'mail sent'});
    });
  }


};

