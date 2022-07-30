module.exports = {

attributes: {
    recordid: { type: 'number' },
        memberName: { type: 'string' },
        memberId: { model: 'visitor' },
        trainingType: { type: 'string' },
        trainingId:{model:'training'},
        fee: { type:'number'},
        createdBy: { type: 'ref'},
        classleft:{ type: 'number', defaultsTo: 10 },
        status:{ type: 'number', defaultsTo: 1 },
        attendance:{type:'boolean'},
        location:{type:'ref'},
    },
};