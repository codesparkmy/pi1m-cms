module.exports = {

    attributes: {
        foodInventryType: { model: 'foodbeveragetype', },
        quantity: { type: 'string' } ,
        noOfqty:{type:'string'},
        name: { type: 'string' },
        price: { type: 'number', defaultsTo: 0 },
        memberprice: { type: 'string' },
        nonMemberprice: { type: 'string' },
        inventoryType: { type: 'string' } ,
        status:{type:'number',defaultsTo:1},// 1.Active,2. Inactive   ]
        locationId:{model:'cafe'},
        recordid:{type:'number'}
    },
};