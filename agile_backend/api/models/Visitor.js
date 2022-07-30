/**
 * Visitor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

 
  attributes: {
    name:{type:'string',required:true},
    memeberCode:{type:'string'},
    subscriptionId:{type:'string'},
    nrciNo: { type: 'string', unique: true, required: true },
    
    address:{type:'string'},
    dob:{type:'string',columnType:'datetime'},
    isBumi:{type:'string'},
    isMember:{type:'boolean'},
    contactNo:{type:'string', required:true, unique: true },
    memebershipSince:{type:'string',columnType:'datetime'},
    emailId:{type:'string', required:true, unique: true },
    status:{type:'number',defaultsTo: 1},
    profileImage:{type:'string',defaultsTo: ''},
    postalcode:{type:'string',defaultsTo: ''},
    age:{type:'string',defaultsTo: ''},
    city:{type:'string',defaultsTo: ''},
    
    /* models */
    gender:{model: 'gender'},
    martialStatus:{model :'maritalstatus'},
    incomeLevel:{model:'Incomelevel'},
    location:{model:'cafe'},
    occupation:{model:'occupation'},
    country:{model:'country'},
    state:{model:'states'},
     

    posSystemAssign : {
      collection : 'possystemassign',
      via : 'assignTo'
    },
    trainingRegister : {
      collection : 'traingregister',
      via : 'memberId'
    },

    registeredMemberList : {
      collection : 'membership',
      via : 'visitorId'
    },


    

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

