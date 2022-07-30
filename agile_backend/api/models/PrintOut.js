module.exports = {

    attributes: {
        printOutType: { model: 'printouttype' },
        // quantity: { type: 'string' },
        name: { type: 'string' },
        // price: { type: 'string' },
        memberprice: { type: 'string' },
        nonMemberprice: { type: 'string' },
        inventoryType: { type: 'string' },
        status: { type: 'number', defaultsTo: 1 }, // 1.Active,2. Inactive
        locationId: { model: 'cafe' }
    },
};