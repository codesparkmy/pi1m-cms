const reportsRepo = require('../repositories/reportsRepo');
const dateFormat = require('dateformat');
const occupationRepo = require('../repositories/occupationRepo');
const genderRepo = require('../repositories/genderRepo');
const VisitorRepo = require("../repositories/visitorRepo");
const TrainingRepo = require('../repositories/trainingRepo');
const trainingCategoryRepo = require('../repositories/trainingCategoryRepo');
const targetGroupRepo = require('../repositories/targetGroupRepo');
const TrainerRepo = require("../repositories/trainerRepo");
const InventoryRepo = require('../repositories/inventoryRepo');


module.exports = {

    async summaryOfActiveMember(req, res) {
        let data = [];
        const { period,fromdate, todate, location } = req.body;

        if(period == 'monthly') {
            var concate_fromdate = fromdate+ '-01';
            var concate_todate = todate+ '-31'; 
        } else if(period == 'yearly') {
            var concate_fromdate = fromdate+ '-01-01';
            var concate_todate = todate+ '-12-31';
        } else {
            var concate_fromdate = fromdate;
            var concate_todate = todate;
        }
        const totalRegistered = await reportsRepo.totalRegistered(concate_fromdate, concate_todate, location);
        
        if(totalRegistered.length) {
            for (var available of totalRegistered) {

                var date = dateFormat(available.period,"isoDate"); 
                const  memberExpiredList = await reportsRepo.getMemberExpired(date,location);
                const  activeMember = await reportsRepo.getActiveMember(date,location);
                const  activeNonMemberList = await reportsRepo.getActiveNonMember(date,location);

                var noofactive = activeMember.length ? activeMember[0].activemember : 0;
                var noofNonactive = activeNonMemberList.length ? activeNonMemberList[0].activenonmember : 0;
                var noofmemberExpired = memberExpiredList.length ? memberExpiredList[0].memberexpired : 0;
                var totalactiveuser = parseInt(noofactive) + parseInt(noofNonactive);
                var registeredMember = available.totalregistered ? available.totalregistered : 0;

                if(period == 'monthly') {
                    var date = dateFormat(available.period,"mmmm yyyy"); 
                } else if('yearly') {
                    var date = dateFormat(available.period,"yyyy"); 
                }

                var resultObject = data.reduce(function(result, currentObject) {
                    if(currentObject.period == date) {  
                        currentObject.registeredMember = parseInt(currentObject.registeredMember) + parseInt(registeredMember);
                        currentObject.memberExpired = parseInt(currentObject.memberExpired) + parseInt(noofmemberExpired);
                        currentObject.activeMember = parseInt(currentObject.activeMember) + parseInt(noofactive);
                        currentObject.activeNonMember = parseInt(currentObject.activeNonMember) + parseInt(noofNonactive);
                        currentObject.totalActiveUser = parseInt(currentObject.totalActiveUser) + parseInt(totalactiveuser);
                        result = 1;
                    } 
                    return result;
                }, {});

                if (resultObject !=1) {
                    data.push({
                        period : date,
                        registeredMember : registeredMember,
                        memberExpired : noofmemberExpired,
                        activeMember : noofactive,
                        activeNonMember : noofNonactive,
                        totalActiveUser : totalactiveuser
                    });
                }
            }
        }
        
        return res.status(200).json(data);
    },
    
    async summaryOfActiveMemberbyGender(req, res) {
        let data = [];
        const { period,fromdate, todate, location } = req.body;
        
        if(period == 'monthly') {
            var concate_fromdate = fromdate+ '-01';
            var concate_todate = todate+ '-31'; 
        } else if(period == 'yearly') {
            var concate_fromdate = fromdate+ '-01-01';
            var concate_todate = todate+ '-12-31';
        } else {
            var concate_fromdate = fromdate;
            var concate_todate = todate;
        }

        const  totalRegistered = await reportsRepo.totalRegisteredActive(concate_fromdate, concate_todate, location);
        if(totalRegistered.length) {
            for (var available of totalRegistered) {
                var date = dateFormat(available.period,"isoDate"); 
                const  visitorList = await reportsRepo.getVisitorstatus(date,location);
                var dataactiveMale =0;
                var dataactiveFemale =0;
                var dataNonactiveMale =0;
                var dataNonactiveFemale =0;
                var totalUserMale =0;
                var totalUserFemale =0;
                var totalTrainedMale =0;
                var totalTrainedFemale =0;
                for (const visitor of visitorList) {
                    var genderlist = await genderRepo.getRecord(visitor.gender,location)
                    var gendername = genderlist.name;

                    var trainingRegisterlist = await TrainingRepo.traingregisterByvisitorId(visitor.recordid,location)
                    if(visitor.isMember) {
                            if(typeof gendername !== 'undefined' && gendername.toLowerCase() == 'male') {
                                dataactiveMale = parseInt(dataactiveMale) +  parseInt(1); 
                                if(trainingRegisterlist.length) {
                                    totalTrainedMale = parseInt(totalTrainedMale) +  parseInt(1); 
                                }
                            }
                            if(typeof gendername !== 'undefined' && gendername.toLowerCase() == 'female') {
                                dataactiveFemale =parseInt(dataactiveFemale) +  parseInt(1); 
                                if(trainingRegisterlist.length) {
                                    totalTrainedFemale = parseInt(totalTrainedFemale) +  parseInt(1); 
                                }
                            }
                        } else {
                            if(typeof gendername !== 'undefined' && gendername.toLowerCase() == 'male') {
                                dataNonactiveMale = parseInt(dataNonactiveMale) +  parseInt(1); 
                                if(trainingRegisterlist.length) {
                                    totalTrainedMale = parseInt(totalTrainedMale) +  parseInt(1); 
                                }
                            }
                            if(typeof gendername !== 'undefined' && gendername.toLowerCase() == 'female') {
                                dataNonactiveFemale =parseInt(dataNonactiveFemale) +  parseInt(1); 
                                if(trainingRegisterlist.length) {
                                    totalTrainedFemale = parseInt(totalTrainedFemale) +  parseInt(1); 
                                }
                            }
                        }
                }
                 totalUserMale =  parseInt(dataactiveMale) + parseInt(dataNonactiveMale);
                 totalUserFemale =  parseInt(dataactiveFemale) + parseInt(dataNonactiveFemale);
                
                             
                if(period == 'monthly') {
                    var date = dateFormat(available.period,"mmmm yyyy"); 
                } else if(period == 'yearly') {
                    var date = dateFormat(available.period,"yyyy");
                }

                var resultObject = data.reduce(function(result, currentObject) {
                    if(currentObject.period == date) {  
                        currentObject.activeMale = parseInt(currentObject.activeMale) + parseInt(dataactiveMale);
                        currentObject.activeFemale = parseInt(currentObject.activeFemale) + parseInt(dataactiveFemale);
                        currentObject.NonactiveMale = parseInt(currentObject.NonactiveMale) + parseInt(dataNonactiveMale);
                        currentObject.NonactiveFemale = parseInt(currentObject.NonactiveFemale) + parseInt(dataNonactiveFemale);
                        currentObject.totalActiveUserMale = parseInt(currentObject.totalActiveUserMale) + parseInt(totalUserMale);
                        currentObject.totalActiveUserFemale = parseInt(currentObject.totalActiveUserFemale) + parseInt(totalUserFemale);
                        currentObject.totalTrainedMale = parseInt(currentObject.totalTrainedMale) + parseInt(totalTrainedMale);
                        currentObject.totalTrainedFemale = parseInt(currentObject.totalTrainedFemale) + parseInt(totalTrainedFemale);
                        result = 1;
                    } 
                    return result;
                }, {});

                if (resultObject !=1) {
                    data.push({
                        period : date,
                        activeMale : dataactiveMale,
                        activeFemale : dataactiveFemale,
                        NonactiveMale : dataNonactiveMale,
                        NonactiveFemale : dataNonactiveFemale,
                        totalActiveUserMale :totalUserMale,
                        totalActiveUserFemale : totalUserFemale,
                        totalTrainedMale : totalTrainedMale,
                        totalTrainedFemale : totalTrainedFemale,
                    });
                }
            }
            
        }
        return res.status(200).json(data);

    },
    
    async summaryOfActiveMemberbyBumi(req, res) {
        let data = [];
        const { period,fromdate, todate, location } = req.body;
        if(period == 'monthly') {
            var concate_fromdate = fromdate+ '-01';
            var concate_todate = todate+ '-31'; 
        } else if(period == 'yearly') {
            var concate_fromdate = fromdate+ '-01-01';
            var concate_todate = todate+ '-12-31';
        } else {
            var concate_fromdate = fromdate;
            var concate_todate = todate;
        }
        
        const  totalRegistered = await reportsRepo.totalRegisteredActive(concate_fromdate, concate_todate, location);
        if(totalRegistered.length) {
            for (var available of totalRegistered) {
                var dataActiveBumi = 0;var dataActiveNonBumi = 0;var dataNonActiveBumi = 0;var dataNonActiveNonBumi = 0;var totalUserBumi = 0;var totalUserNonBumi = 0;var totalTrainedBumi = 0;var totalTrainedNonBumi = 0;
                var date = dateFormat(available.period,"isoDate"); 
                const  visitorList = await reportsRepo.getVisitorstatus(date,location);
                for (const visitor of visitorList) {
                    var trainingRegisterlist = await TrainingRepo.traingregisterByvisitorId(visitor.recordid,location)

                    if(visitor.isMember) {
                        if(visitor.isBumi) {
                            dataActiveBumi = parseInt(dataActiveBumi) +  parseInt(1); 
                            if(trainingRegisterlist.length) {
                                totalTrainedBumi = parseInt(totalTrainedBumi) +  parseInt(1); 
                            }
                        } else {
                            dataActiveNonBumi = parseInt(dataActiveNonBumi) +  parseInt(1); 
                            if(trainingRegisterlist.length) {
                                totalTrainedNonBumi = parseInt(totalTrainedNonBumi) +  parseInt(1); 
                            }
                        }
                    } else {
                        if(visitor.isBumi) {
                            dataNonActiveBumi = parseInt(dataNonActiveBumi) +  parseInt(1); 
                            if(trainingRegisterlist.length) {
                                totalTrainedBumi = parseInt(totalTrainedBumi) +  parseInt(1); 
                            }
                        } else {
                            dataNonActiveNonBumi = parseInt(dataNonActiveNonBumi) +  parseInt(1); 
                            if(trainingRegisterlist.length) {
                                totalTrainedNonBumi = parseInt(totalTrainedNonBumi) +  parseInt(1); 
                            }
                        }
                }
            }

                totalUserBumi =  parseInt(dataActiveBumi) + parseInt(dataNonActiveBumi);
                totalUserNonBumi =  parseInt(dataActiveNonBumi) + parseInt(dataNonActiveNonBumi);
                
                if(period == 'monthly') {
                    var date = dateFormat(available.period,"mmmm yyyy"); 
                } else if(period == 'yearly') {
                    var date = dateFormat(available.period,"yyyy");
                }

                var resultObject = data.reduce(function(result, currentObject) {
                    if(currentObject.period == date) {  
                        currentObject.memberBumi = parseInt(currentObject.memberBumi) + parseInt(dataActiveBumi);
                        currentObject.memberNonBumi = parseInt(currentObject.memberNonBumi) + parseInt(dataActiveNonBumi);
                        currentObject.nonMemberBumi = parseInt(currentObject.nonMemberBumi) + parseInt(dataNonActiveBumi);
                        currentObject.nonMemberNonBumi = parseInt(currentObject.nonMemberNonBumi) + parseInt(dataNonActiveNonBumi);
                        currentObject.totalActiveUserBumi = parseInt(currentObject.totalActiveUserBumi) + parseInt(totalUserBumi);
                        currentObject.totalActiveUserNonBumi = parseInt(currentObject.totalActiveUserNonBumi) + parseInt(totalUserNonBumi);
                        currentObject.totalTrainedBumi = parseInt(currentObject.totalTrainedBumi) + parseInt(totalTrainedBumi);
                        currentObject.totalTrainedNonBumi = parseInt(currentObject.totalTrainedNonBumi) + parseInt(totalTrainedNonBumi);
                       
                        result = 1;
                    } 
                    return result;
                }, {});

                if (resultObject !=1) {
                    data.push({
                        period : date,
                        memberBumi : dataActiveBumi,
                        memberNonBumi : dataActiveNonBumi,
                        nonMemberBumi : dataNonActiveBumi,
                        nonMemberNonBumi : dataNonActiveNonBumi,
                        totalActiveUserBumi : totalUserBumi,
                        totalActiveUserNonBumi : totalUserNonBumi,
                        totalTrainedBumi : totalTrainedBumi,
                        totalTrainedNonBumi : totalTrainedNonBumi,
                    });
                }
            }
        }
        return res.status(200).json(data);
    },

    async summaryOfActiveMemberbyAge(req, res) {
        let data = [];
        const { period,fromdate, todate, location } = req.body;
        if(period == 'monthly') {
            var concate_fromdate = fromdate+ '-01';
            var concate_todate = todate+ '-31'; 
        } else if(period == 'yearly') {
            var concate_fromdate = fromdate+ '-01-01';
            var concate_todate = todate+ '-12-31';
        } else {
            var concate_fromdate = fromdate;
            var concate_todate = todate;
        }        
        const  totalRegistered = await reportsRepo.totalRegisteredActive(concate_fromdate, concate_todate, location);
        if(totalRegistered.length) {
            for (var available of totalRegistered) {
                var date = dateFormat(available.period,"isoDate"); 
                const  getactivememberAge = await reportsRepo.getMemberByAge(date,location);
                var activeeighteen = 0; var activethirtyFive = 0; var activefiftyFive = 0; var activeaboveFiftyFive = 0; 
                var nonactiveeighteen = 0; var nonactivethirtyFive = 0; var nonactivefiftyFive = 0; var nonactiveaboveFiftyFive = 0;
                for(var agelist of getactivememberAge) {
                    if(agelist.age_in_months) {
                        var age= parseInt(agelist.age_in_months) / 12;
                        if(agelist.isMember == '1') {
                            if(age < 18) { activeeighteen+=1; } else if(age < 35) { activethirtyFive+=1; } else if(age < 55) { activefiftyFive+=1; } else if(age > 55) { activeaboveFiftyFive+=1; } 
                        } else {
                            if(age < 18) { nonactiveeighteen+=1; } else if(age < 35) { nonactivethirtyFive+=1; } else if(age < 55) { nonactivefiftyFive+=1; } else if(age > 55) { nonactiveaboveFiftyFive+=1; } 
                        }
                    }
                }

                var totalusereighteen = parseInt(activeeighteen) + parseInt(nonactiveeighteen);
                var totaluserthirtyFive = parseInt(activethirtyFive) + parseInt(nonactivethirtyFive);
                var totaluserfiftyFive = parseInt(activefiftyFive) + parseInt(nonactivefiftyFive);
                var totaluseraboveFiftyFive = parseInt(activeaboveFiftyFive) + parseInt(nonactiveaboveFiftyFive);

                if(period == 'monthly') {
                    var date = dateFormat(available.period,"mmmm yyyy"); 
                } else if(period == 'yearly') {
                    var date = dateFormat(available.period,"yyyy");
                } 

                var resultObject = data.reduce(function(result, currentObject) {
                    if(currentObject.period == date) {  
                        currentObject.activeeighteen = parseInt(currentObject.activeeighteen) + parseInt(activeeighteen);
                        currentObject.activethirtyFive = parseInt(currentObject.activethirtyFive) + parseInt(activethirtyFive);
                        currentObject.activefiftyFive = parseInt(currentObject.activefiftyFive) + parseInt(activefiftyFive);
                        currentObject.activeaboveFiftyFive = parseInt(currentObject.activeaboveFiftyFive) + parseInt(activeaboveFiftyFive);
                        currentObject.nonactiveeighteen = parseInt(currentObject.nonactiveeighteen) + parseInt(nonactiveeighteen);
                        currentObject.nonactivethirtyFive = parseInt(currentObject.nonactivethirtyFive) + parseInt(nonactivethirtyFive);
                        currentObject.nonactivefiftyFive = parseInt(currentObject.nonactivefiftyFive) + parseInt(nonactivefiftyFive);
                        currentObject.nonactiveaboveFiftyFive = parseInt(currentObject.nonactiveaboveFiftyFive) + parseInt(nonactiveaboveFiftyFive);
                        currentObject.totalusereighteen = parseInt(currentObject.totalusereighteen) + parseInt(totalusereighteen);
                        currentObject.totaluserthirtyFive = parseInt(currentObject.totaluserthirtyFive) + parseInt(totaluserthirtyFive);
                        currentObject.totaluserfiftyFive = parseInt(currentObject.totaluserfiftyFive) + parseInt(totaluserfiftyFive);
                        currentObject.totaluseraboveFiftyFive = parseInt(currentObject.totaluseraboveFiftyFive) + parseInt(totaluseraboveFiftyFive);
                        
                        result = 1;
                    } 
                    return result;
                }, {});

                if (resultObject !=1) {
                    data.push({
                        period : date, activeeighteen : activeeighteen, activethirtyFive : activethirtyFive, activefiftyFive : activefiftyFive, activeaboveFiftyFive : activeaboveFiftyFive,
                        nonactiveeighteen : nonactiveeighteen, nonactivethirtyFive : nonactivethirtyFive, nonactivefiftyFive : nonactivefiftyFive, nonactiveaboveFiftyFive : nonactiveaboveFiftyFive,
                        totalusereighteen : parseInt(totalusereighteen), totaluserthirtyFive : parseInt(totaluserthirtyFive), totaluserfiftyFive : parseInt(totaluserfiftyFive), totaluseraboveFiftyFive : parseInt(totaluseraboveFiftyFive)
                    });
                }
            }
        }
        return res.status(200).json(data);
    },

    async summaryOfActiveMemberbyOccupation(req, res) {
        
        var data = [];
        const { period,fromdate, todate, location } = req.body;

        if(period == 'monthly') {
            var concate_fromdate = fromdate+ '-01';
            var concate_todate = todate+ '-31'; 
        } else if(period == 'yearly') {
            var concate_fromdate = fromdate+ '-01-01';
            var concate_todate = todate+ '-12-31';
        } else {
            var concate_fromdate = fromdate;
            var concate_todate = todate;
        }   
        const  occupationList = await reportsRepo.getOccupationList(concate_fromdate, concate_todate, location);
        for(let list of occupationList) {
            if(list.occupation) {
                if(period == 'monthly') {
                    var date = dateFormat(list.period,"mmmm yyyy"); 
                } else if(period == 'yearly') {
                    var date = dateFormat(list.period,"yyyy");
                } else {
                    var date = dateFormat(list.period,"isoDate"); 
                } 
                var resultObject = data.reduce(function(result, currentObject) {
                    if(currentObject.period == date) {  
                        for(var key in currentObject) {
                            if(key !='period' && key !='isMember') {
                                if (key == list.occupationname) {
                                    currentObject[key] = parseInt(currentObject[list.occupationname]) + parseInt(list.totalcount);
                                } else {
                                    currentObject[list.occupationname] = parseInt(list.totalcount);
                                }
                            }
                        }
                        result = 1;
                    }
                    return result;
                    
                }, {});
                if (resultObject !=1) {
                    data.push({
                        period : date, [list.occupationname]: list.totalcount, isMember: list.isMember
                    });
                }
            }
        }
        return res.status(200).json(data);
    },
    async trainingCourse(req, res) {
        var data = [];
        const { fromdate, todate, location } = req.body;
        var concate_fromdate = fromdate;
        var concate_todate = todate;

        const  courseList = await reportsRepo.trainingCourse(concate_fromdate, concate_todate, location);
        for(let list of courseList) {
            const  coursetypelist = await trainingCategoryRepo.getCourceType(list.courseType, location);
            const  courcetarget = await targetGroupRepo.getCourceTarget(list.courseTarget, location);
            var date = dateFormat(list.trainingDate,"isoDate"); 
                data.push({
                    courseDate : date,
                    category: coursetypelist.name,
                    courseName: list.course,
                    duration: list.duration,
                    targetGroup: courcetarget.name,
                    trainer: list.trainer.fullName,
                    location: list.location.branchName,
                });
            
        }
        return res.status(200).json(data);
    },
    async trainingAttendance(req, res) {
        var data = [];
        const { courseId, location } = req.body;
        const  courseList = await reportsRepo.trainingAttendance(courseId, location);
        for(let list of courseList) {
            const  visitorList = await VisitorRepo.findVisitorByRecordId(list.memberId, location);
            const  occupationList = await occupationRepo.getRecord(visitorList.occupation, location);

            var age = calculateAge(visitorList.dob)
            data.push({
                name : visitorList.name,
                nric: visitorList.nrciNo,
                age: age,
                bumiStatus: visitorList.isBumi,
                occupation: occupationList.name,
                member: visitorList.isMember,
            });
        }
        return res.status(200).json(data);
    },
    
    async cafeUsage(req, res) {
        var data = [];
        const { period,fromdate, todate, location } = req.body;
        if(period == 'monthly') {
            var concate_fromdate = fromdate+ '-01';
            var concate_todate = todate+ '-31'; 
        } else if(period == 'yearly') {
            var concate_fromdate = fromdate+ '-01-01';
            var concate_todate = todate+ '-12-31';
        } else {
            var concate_fromdate = fromdate;
            var concate_todate = todate;
        }        

        const  cafesList = await reportsRepo.cafesList(concate_fromdate, concate_todate, location);
        if(cafesList.length) {
            for(let list of cafesList) {
                var date = dateFormat(list.period,"isoDate"); 
                var commondate = dateFormat(list.period,"isoDate"); 
                const  cafees = await reportsRepo.cafeUsage(date, location);
                var subdata = [];
                if(period == 'monthly') {
                    var date = dateFormat(list.period,"mmmm yyyy"); 
                } else if(period == 'yearly') {
                    var date = dateFormat(list.period,"yyyy");
                } 
                var resultObject = data.reduce( async function(result, currentObject)  {
                    console.log(currentObject);
                    if(currentObject.date == date) {  
                        for (let cafe of cafees) {
                            const  visitorList = await VisitorRepo.findVisitorByRecordId(cafe.assignTo, location);
                            const  inventoryList = await InventoryRepo.getsystemByRecordId('System', cafe.pcNo, location);
                            
                            currentObject.cafeUsage.push({
                                date : commondate,
                                startTime : dateFormat(cafe.startTime,"isoTime"),
                                workstation : inventoryList ? inventoryList.systemId : '',
                                name : visitorList ? visitorList.name : '',
                                nric : visitorList ? visitorList.nrciNo : '',
                                isMember : visitorList ? visitorList.isMember : '',
                                usage : cafe.totalHours,
                                amount : cafe.fee,
                            });
                       }
                       result = 1;
                    } 
                    return result;
                }, {});

                if (resultObject !=1) {
                    for (let cafe of cafees) {
                        subdata.push({
                            date : commondate,
                            startTime : dateFormat(cafe.startTime,"isoTime"),
                            workstation : cafe.pcNo.systemId,
                            name : cafe.assignTo.name,
                            nric : cafe.assignTo.nrciNo,
                            isMember : cafe.assignTo.isMember,
                            usage : cafe.totalHours,
                            amount : cafe.fee,
                        });
                   }
                   data.push({
                        date : date,
                        cafeUsage : subdata
                    });
                }
                
            }
        }
        return res.status(200).json(data);
    },

    async occupationDetails(req, res) {

        var data = [];
        var result = [];

        try {

            const { period,fromdate, todate, location } = req.body;

            if(period == 'monthly') {
                var concate_fromdate = fromdate+ '-01';
                var concate_todate = todate+ '-31'; 
            } else if(period == 'yearly') {
                var concate_fromdate = fromdate+ '-01-01';
                var concate_todate = todate+ '-12-31';
            } else {
                var concate_fromdate = fromdate;
                var concate_todate = todate;
            }   
            const  occupationReport = await reportsRepo.getOccupationList(concate_fromdate, concate_todate, location);
            const occupations = await occupationRepo.getAll();

            for(let report of occupationReport) {
                

                if(period == 'monthly') {
                    var date = dateFormat(report.period,"mmmm yyyy"); 
                } else if(period == 'yearly') {
                    var date = dateFormat(report.period,"yyyy");
                } else {
                    var date = dateFormat(report.period,"isoDate"); 
                } 

                if(!data.includes(date)) {

                    data.push(
                        date
                    )
                }
            }
            
            var i = 0;
            for(let day of  data) {
                
                result.push({
                    period : day,
                    activeUser : {
                        name: [],
                        totalCount : []
                    },
                    nonActiveUser : {
                        name: [],
                        totalCount : []
                    }
                });

                for(let occupation of occupations) {
                    result[i].activeUser.name.push(occupation.name);
                    result[i].activeUser.totalCount.push(0);
                    result[i].nonActiveUser.name.push(occupation.name);
                    result[i].nonActiveUser.totalCount.push(0);
                }

                for(let report of occupationReport) {

                    if(period == 'monthly') {
                        var date = dateFormat(report.period,"mmmm yyyy"); 
                    } else if(period == 'yearly') {
                        var date = dateFormat(report.period,"yyyy");
                    } else {
                        var date = dateFormat(report.period,"isoDate"); 
                    }

                    // if(period == 'monthly' || period == 'yearly') {
                        
                        if(day == date && report.isMember == 1) {
                            let occupation_position = result[i].activeUser.name.indexOf(report.name);
                            
                            if(occupation_position >= 0) {

                                let totalCount = parseInt(result[i].activeUser.totalCount[occupation_position]) + parseInt(report.totalcount);

                                result[i].activeUser.totalCount[occupation_position] = totalCount;
                            }
                            else {
                                result[i].activeUser.name.push(report.name);
                                result[i].activeUser.totalCount.push(report.totalcount);
                            }
                            
                        }
                        else if(day == date) {

                            let occupation_position = result[i].nonActiveUser.name.indexOf(report.name);
                            
                            if(occupation_position >= 0) {

                                let totalCount = parseInt(result[i].nonActiveUser.totalCount[occupation_position]) + parseInt(report.totalcount);

                                result[i].nonActiveUser.totalCount[occupation_position] = totalCount;
                            }
                            else {

                                result[i].nonActiveUser.name.push(report.name);
                                result[i].nonActiveUser.totalCount.push(report.totalcount);
                            }
                        }
                    // }
                    // else {

                        
                    //     if(day == date && report.isMember == 1) {
                            
                    //         result[i].activeUser.name.push(report.name);
                    //         result[i].activeUser.totalCount.push(report.totalcount);
                    //     }
                    //     else if(day == date) {

                    //         result[i].nonActiveUser.name.push(report.name);
                    //         result[i].nonActiveUser.totalCount.push(report.totalcount);
                    //     }
                    // }

                }
                i++;
            }

            
            return res.status(200).json(result);
        }
        catch (error) {
            res.serverError(error);
        }
    },
    
    async activecafeUsage(req, res) {
        var data = [];
        const { period,fromdate, todate, location } = req.body;
        if(period == 'monthly') {
            var concate_fromdate = fromdate+ '-01';
            var concate_todate = todate+ '-31'; 
        } else if(period == 'yearly') {
            var concate_fromdate = fromdate+ '-01-01';
            var concate_todate = todate+ '-12-31';
        } else {
            var concate_fromdate = fromdate;
            var concate_todate = todate;
        } 

        const  activeuserList = await reportsRepo.activecafeUsage(concate_fromdate, concate_todate, location);
        if(activeuserList.length) {
            for(let list of activeuserList) {
                var date = dateFormat(list.periodDate,"isoDate"); 
                const  memberlist = await reportsRepo.getVisitorDetails(list.assignTo);
                if(period == 'monthly') {
                    var date = dateFormat(list.periodDate,"mmmm yyyy"); 
                } else if(period == 'yearly') {
                    var date = dateFormat(list.periodDate,"yyyy");
                } 

                var memberfrequency = 0;
                var nonmemberfrequency = 0;
                if (memberlist.isMember) {
                     memberfrequency = parseInt(list.frequency);
                } else {
                     nonmemberfrequency= parseInt(list.frequency);
                }
                var totalLoginFrequency = parseInt(memberfrequency) + parseInt(nonmemberfrequency);
                var resultObject = data.reduce(function(result, currentObject) {
                    
                    if(currentObject.period == date) {  
                        currentObject.memberFrequency = parseInt(currentObject.memberFrequency) + parseInt(memberfrequency);
                        currentObject.memberNonfrequency = parseInt(currentObject.memberNonfrequency) + parseInt(nonmemberfrequency);
                        currentObject.totalLoginFrequency = parseInt(currentObject.totalLoginFrequency) + parseInt(totalLoginFrequency);
                        currentObject.totalUsage = parseInt(currentObject.totalUsage) + parseInt(list.totalHours);
                        result = 1;
                    } 
                    return result;
                }, {});

                if (resultObject !=1) {
                    data.push({
                        period : date,
                        memberFrequency : memberfrequency,
                        memberNonfrequency : nonmemberfrequency,
                        totalLoginFrequency : totalLoginFrequency,
                        totalUsage :   list.totalHours,
                    });
                }
              
            }
        }
        return res.status(200).json(data);
    },
    
    async incomeAndExpenseSummary(req, res) {

        try {
            var result = [];
            var expenseResult = [];
            var incomeResult = [];
            
            var total_expense = 0;
            var total_income = 0;
            const { type, fromdate, todate, location } = req.body;

            var getexpenseList = await reportsRepo.getexpenseList(fromdate, todate, location);
            
            for(var expense of getexpenseList) {
                expenseResult.push({
                    name : expense.name,
                    amount : expense.amount
                });

                total_expense = total_expense+parseInt(expense.amount);
            }

            var cafeincome = await reportsRepo.cafeIncome(fromdate, todate, location);
            var memberRegistration = await reportsRepo.memberRegistration(fromdate, todate, location);
            // var printoutRepots = await reportsRepo.getPrintOutRepots(fromdate, todate, location);
            
            total_income = total_income + (cafeincome + memberRegistration);
            
            incomeResult.push(
                {
                    name : 'cafe',
                    amount : cafeincome
                },
                {
                    name : 'New member registration fees',
                    amount : memberRegistration,
                },
            );
            
            if(type == 'income') {
                result = {
                    summary : {
                        income : total_income,
                        expense : total_expense,
                        profit :  total_income - total_expense 
                    },
                    income : incomeResult
                }
            }
            else if(type == 'expense') {
                result =  {
                    summary : {
                        income : total_income,
                        expense : total_expense,
                        profit :  total_income - total_expense 
                    },
                    expense : expenseResult
                };
            }
            else {
                result = {
                    summary : {
                        income : total_income,
                        expense : total_expense,
                        profit :  total_income - total_expense 
                    },
                    income : incomeResult,
                    expense : expenseResult
                } 
            }

            return res.status(200).json(result);
        }
        catch (error) {
            res.serverError(error);
        }
    },

    async incomeexpenseDetail(req, res) {  
        let data = [];
        let expenseArray = [];
        let incomelist = [];
        const { type, fromdate, todate, location } = req.body;
            var cafeincome = await reportsRepo.cafeIncomeDetails(fromdate, todate, location);
            for(var income of cafeincome) {
                var poscreatedAt = dateFormat(income.date,"isoDate"); 
                let printoutArray = [];
                var posprintoutList = await reportsRepo.getPosprintoutDetails(income.recordid,poscreatedAt,location);
                for(var printout of posprintoutList) {
                    var printoutlist = await reportsRepo.getPrintoutList(printout.serviceId,location);
                    var posprintouttype = await reportsRepo.getPosprintoutType(printoutlist.printOutType,location);
                    printoutArray.push({
                        name : printoutlist.inventoryType + '-' + posprintouttype.printOutType,
                        amount : printout.amount
                    })
                }

                incomelist = { 
                    date : income.date, 
                    transactionId : income.transactionId,
                    cafe : income.fees,
                    print : printoutArray
                }

                

            }

           
            
            var getexpenseList = await reportsRepo.getexpenseList(fromdate, todate);
            for(var expense of getexpenseList) {
                expenseArray.push({
                    name : expense.name,
                    amount : expense.amount
                })
            }

            if(type == 'income') {
                data.push({
                    income :  incomelist,
                })

            } else if(type == 'expense') {
                data.push({
                    expense : expenseArray
                })

            } else {
                data.push({
                    income :  incomelist,
                    expense : expenseArray
                })
            }
        return res.status(200).json(data);
    },


    async testingUrl(req, res) {
        let originalString = "GeeksforGeeks"; 
        
        // Create buffer object, specifying utf8 as encoding 
        let bufferObj = Buffer.from(originalString, "utf8"); 
        
        // Encode the Buffer as a base64 string 
        let base64String = bufferObj.toString("base64"); 
        
        console.log("The encoded base64 string is:", base64String); 

        let base64string = "R2Vla3Nmb3JHZWVrcw=="; 
  
        // Create a buffer from the string 
        let DecrptbufferObj = Buffer.from(base64string, "base64"); 
        
        // Encode the Buffer as a utf8 string 
        let decodedString = DecrptbufferObj.toString("utf8"); 
        
        console.log("The decoded string:", decodedString); 
    }


    


};

function calculateAge(birthday) { 
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); 
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

