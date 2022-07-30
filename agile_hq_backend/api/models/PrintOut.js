module.exports = {

    attributes: {
        printOutType: { model: 'printouttype' },       
        name: { type: 'string' },
        price:{type:'string'},
        memberprice: { type: 'string' },
        nonMemberprice: { type: 'string' },
        inventoryType: { type: 'string' },
        status:{type:'number',defaultsTo:1},// 1.Active,2. Inactive
        locationId:{type : 'number'},
        recordid:{type:'number'}
    },
};