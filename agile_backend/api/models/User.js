/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        userstatus: { type: 'boolean', defaultsTo: true },
        fullName: { type: 'string', required: true },
        password: { type: 'string' },
        employeeId: { type: 'string', required: true },
        subscriptionId: { type: 'string', required: true },
        RaceId: { type: 'string' },
        phoneNumber: { type: 'string', required: true },
        ReligionCId: { type: 'string' },
        jobCategory: { type: 'string' },
        positionId: { type: 'string' },
        totalObtain: { type: 'string' },
        email: { type: 'string', required: true },
        gender: { type: 'boolean' },
        dob: { type: 'ref', columnType: 'date' },
        citizenShip: { type: 'string' },
        nationality: { type: 'string' },
        businessFax: { type: 'string' },

        branchAllocation: { model: 'cafe' },
        joiningDate: { type: 'ref', columnType: 'datetime' },
        lastActivityDate: { type: 'ref', columnType: 'datetime' },
        createdBy: { type: 'number', defaultsTo: 0 },
        modifiedBy: { type: 'number', defaultsTo: 0 },
        profilePicture: { type: 'string' },
        role: { type: 'string' },
        hours: { type: 'ref' },
        roleId: { type: 'ref' },
        loggedIn: { type: 'ref' }
        // temprole: { model: 'subpage' }
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