module.exports = {

    attributes: {
        printOutType: { type: 'string' },
        location: { type: 'number' },
        status: { type: 'number', defaultsTo: 1 },
        serviceType: {
            collection: 'printout',
            via: 'printOutType'
        },
    },






};