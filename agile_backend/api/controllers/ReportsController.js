const reportsRepo = require('../repositories/reportsRepo');
const dateFormat = require('dateformat');
const occupationRepo = require('../repositories/occupationRepo');

module.exports = {

    async summaryOfActiveMember(req, res) {
        let data = [];
        const { period, fromdate, todate, location } = req.body;

        if (period == 'monthly') {
            var concate_fromdate = fromdate + '-01';
            var concate_todate = todate + '-31';
        } else if (period == 'yearly') {
            var concate_fromdate = fromdate + '-01-01';
            var concate_todate = todate + '-12-31';
        } else {
            var concate_fromdate = fromdate;
            var concate_todate = todate;
        }
        const totalRegistered = await reportsRepo.totalRegistered(concate_fromdate, concate_todate, location);

        if (totalRegistered.length) {
            for (var available of totalRegistered) {

                var date = dateFormat(available.period, "isoDate");
                const memberExpiredList = await reportsRepo.getMemberExpired(date, location);
                const activeMember = await reportsRepo.getActiveMember(date, location);
                const activeNonMemberList = await reportsRepo.getActiveNonMember(date, location);

                var noofactive = activeMember.length ? activeMember[0].activemember : 0;
                var noofNonactive = activeNonMemberList.length ? activeNonMemberList[0].activenonmember : 0;
                var noofmemberExpired = memberExpiredList.length ? memberExpiredList[0].memberexpired : 0;
                var totalactiveuser = parseInt(noofactive) + parseInt(noofNonactive);
                var registeredMember = available.totalregistered ? available.totalregistered : 0;

                if (period == 'monthly') {
                    var date = dateFormat(available.period, "mmmm yyyy");
                } else if ('yearly') {
                    var date = dateFormat(available.period, "yyyy");
                }

                var resultObject = data.reduce(function (result, currentObject) {
                    if (currentObject.period == date) {
                        currentObject.registeredMember = parseInt(currentObject.registeredMember) + parseInt(registeredMember);
                        currentObject.memberExpired = parseInt(currentObject.memberExpired) + parseInt(noofmemberExpired);
                        currentObject.activeMember = parseInt(currentObject.activeMember) + parseInt(noofactive);
                        currentObject.activeNonMember = parseInt(currentObject.activeNonMember) + parseInt(noofNonactive);
                        currentObject.totalActiveUser = parseInt(currentObject.totalActiveUser) + parseInt(totalactiveuser);
                        result = 1;
                    }
                    return result;
                }, {});

                if (resultObject != 1) {
                    data.push({
                        period: date,
                        registeredMember: registeredMember,
                        memberExpired: noofmemberExpired,
                        activeMember: noofactive,
                        activeNonMember: noofNonactive,
                        totalActiveUser: totalactiveuser
                    });
                }
            }
        }

        return res.status(200).json(data);
    },

    async summaryOfActiveMemberbyGender(req, res) {
        let data = [];
        const { period, fromdate, todate, location } = req.body;

        if (period == 'monthly') {
            var concate_fromdate = fromdate + '-01';
            var concate_todate = todate + '-31';
        } else if (period == 'yearly') {
            var concate_fromdate = fromdate + '-01-01';
            var concate_todate = todate + '-12-31';
        } else {
            var concate_fromdate = fromdate;
            var concate_todate = todate;
        }

        const totalRegistered = await reportsRepo.totalRegisteredActive(concate_fromdate, concate_todate, location);
        if (totalRegistered.length) {
            for (var available of totalRegistered) {
                var date = dateFormat(available.period, "isoDate");
                const visitorList = await reportsRepo.getVisitorstatus(date, location);
                var dataactiveMale = 0;
                var dataactiveFemale = 0;
                var dataNonactiveMale = 0;
                var dataNonactiveFemale = 0;
                var totalUserMale = 0;
                var totalUserFemale = 0;
                var totalTrainedMale = 0;
                var totalTrainedFemale = 0;
                for (const visitor of visitorList) {
                    if (visitor.isMember) {
                        if (typeof visitor.gender.name !== 'undefined' && visitor.gender.name.toLowerCase() == 'male') {
                            dataactiveMale = parseInt(dataactiveMale) + parseInt(1);
                            if (visitor.trainingRegister.length) {
                                totalTrainedMale = parseInt(totalTrainedMale) + parseInt(1);
                            }
                        }
                        if (typeof visitor.gender.name !== 'undefined' && visitor.gender.name.toLowerCase() == 'female') {
                            dataactiveFemale = parseInt(dataactiveFemale) + parseInt(1);
                            if (visitor.trainingRegister.length) {
                                totalTrainedFemale = parseInt(totalTrainedFemale) + parseInt(1);
                            }
                        }
                    } else {
                        if (typeof visitor.gender.name !== 'undefined' && visitor.gender.name.toLowerCase() == 'male') {
                            dataNonactiveMale = parseInt(dataNonactiveMale) + parseInt(1);
                            if (visitor.trainingRegister.length) {
                                totalTrainedMale = parseInt(totalTrainedMale) + parseInt(1);
                            }
                        }
                        if (typeof visitor.gender.name !== 'undefined' && visitor.gender.name.toLowerCase() == 'female') {
                            dataNonactiveFemale = parseInt(dataNonactiveFemale) + parseInt(1);
                            if (visitor.trainingRegister.length) {
                                totalTrainedFemale = parseInt(totalTrainedFemale) + parseInt(1);
                            }
                        }
                    }
                }
                totalUserMale = parseInt(dataactiveMale) + parseInt(dataNonactiveMale);
                totalUserFemale = parseInt(dataactiveFemale) + parseInt(dataNonactiveFemale);


                if (period == 'monthly') {
                    var date = dateFormat(available.period, "mmmm yyyy");
                } else if (period == 'yearly') {
                    var date = dateFormat(available.period, "yyyy");
                }

                var resultObject = data.reduce(function (result, currentObject) {
                    if (currentObject.period == date) {
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

                if (resultObject != 1) {
                    data.push({
                        period: date,
                        activeMale: dataactiveMale,
                        activeFemale: dataactiveFemale,
                        NonactiveMale: dataNonactiveMale,
                        NonactiveFemale: dataNonactiveFemale,
                        totalActiveUserMale: totalUserMale,
                        totalActiveUserFemale: totalUserFemale,
                        totalTrainedMale: totalTrainedMale,
                        totalTrainedFemale: totalTrainedFemale,
                    });
                }
            }

        }
        return res.status(200).json(data);

    },

    async summaryOfActiveMemberbyBumi(req, res) {
        let data = [];
        const { period, fromdate, todate, location } = req.body;
        if (period == 'monthly') {
            var concate_fromdate = fromdate + '-01';
            var concate_todate = todate + '-31';
        } else if (period == 'yearly') {
            var concate_fromdate = fromdate + '-01-01';
            var concate_todate = todate + '-12-31';
        } else {
            var concate_fromdate = fromdate;
            var concate_todate = todate;
        }

        const totalRegistered = await reportsRepo.totalRegisteredActive(concate_fromdate, concate_todate, location);
        if (totalRegistered.length) {
            for (var available of totalRegistered) {
                var dataActiveBumi = 0;
                var dataActiveNonBumi = 0;
                var dataNonActiveBumi = 0;
                var dataNonActiveNonBumi = 0;
                var totalUserBumi = 0;
                var totalUserNonBumi = 0;
                var totalTrainedBumi = 0;
                var totalTrainedNonBumi = 0;
                var date = dateFormat(available.period, "isoDate");
                const visitorList = await reportsRepo.getVisitorstatus(date, location);
                for (const visitor of visitorList) {
                    if (visitor.isMember) {
                        if (visitor.isBumi) {
                            dataActiveBumi = parseInt(dataActiveBumi) + parseInt(1);
                            if (visitor.trainingRegister.length) {
                                totalTrainedBumi = parseInt(totalTrainedBumi) + parseInt(1);
                            }
                        } else {
                            dataActiveNonBumi = parseInt(dataActiveNonBumi) + parseInt(1);
                            if (visitor.trainingRegister.length) {
                                totalTrainedNonBumi = parseInt(totalTrainedNonBumi) + parseInt(1);
                            }
                        }
                    } else {
                        if (visitor.isBumi) {
                            dataNonActiveBumi = parseInt(dataNonActiveBumi) + parseInt(1);
                            if (visitor.trainingRegister.length) {
                                totalTrainedBumi = parseInt(totalTrainedBumi) + parseInt(1);
                            }
                        } else {
                            dataNonActiveNonBumi = parseInt(dataNonActiveNonBumi) + parseInt(1);
                            if (visitor.trainingRegister.length) {
                                totalTrainedNonBumi = parseInt(totalTrainedNonBumi) + parseInt(1);
                            }
                        }
                    }
                }

                totalUserBumi = parseInt(dataActiveBumi) + parseInt(dataNonActiveBumi);
                totalUserNonBumi = parseInt(dataActiveNonBumi) + parseInt(dataNonActiveNonBumi);

                if (period == 'monthly') {
                    var date = dateFormat(available.period, "mmmm yyyy");
                } else if (period == 'yearly') {
                    var date = dateFormat(available.period, "yyyy");
                }

                var resultObject = data.reduce(function (result, currentObject) {
                    if (currentObject.period == date) {
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

                if (resultObject != 1) {
                    data.push({
                        period: date,
                        memberBumi: dataActiveBumi,
                        memberNonBumi: dataActiveNonBumi,
                        nonMemberBumi: dataNonActiveBumi,
                        nonMemberNonBumi: dataNonActiveNonBumi,
                        totalActiveUserBumi: totalUserBumi,
                        totalActiveUserNonBumi: totalUserNonBumi,
                        totalTrainedBumi: totalTrainedBumi,
                        totalTrainedNonBumi: totalTrainedNonBumi,
                    });
                }
            }
        }
        return res.status(200).json(data);
    },

    async summaryOfActiveMemberbyAge(req, res) {
        let data = [];
        const { period, fromdate, todate, location } = req.body;
        if (period == 'monthly') {
            var concate_fromdate = fromdate + '-01';
            var concate_todate = todate + '-31';
        } else if (period == 'yearly') {
            var concate_fromdate = fromdate + '-01-01';
            var concate_todate = todate + '-12-31';
        } else {
            var concate_fromdate = fromdate;
            var concate_todate = todate;
        }
        const totalRegistered = await reportsRepo.totalRegisteredActive(concate_fromdate, concate_todate, location);
        if (totalRegistered.length) {
            for (var available of totalRegistered) {
                var date = dateFormat(available.period, "isoDate");
                const getactivememberAge = await reportsRepo.getMemberByAge(date, location);
                var activeeighteen = 0;
                var activethirtyFive = 0;
                var activefiftyFive = 0;
                var activeaboveFiftyFive = 0;
                var nonactiveeighteen = 0;
                var nonactivethirtyFive = 0;
                var nonactivefiftyFive = 0;
                var nonactiveaboveFiftyFive = 0;
                for (var agelist of getactivememberAge) {
                    if (agelist.age_in_months) {
                        var age = parseInt(agelist.age_in_months) / 12;
                        if (agelist.isMember == '1') {
                            if (age < 18) { activeeighteen += 1; } else if (age < 35) { activethirtyFive += 1; } else if (age < 55) { activefiftyFive += 1; } else if (age > 55) { activeaboveFiftyFive += 1; }
                        } else {
                            if (age < 18) { nonactiveeighteen += 1; } else if (age < 35) { nonactivethirtyFive += 1; } else if (age < 55) { nonactivefiftyFive += 1; } else if (age > 55) { nonactiveaboveFiftyFive += 1; }
                        }
                    }
                }

                var totalusereighteen = parseInt(activeeighteen) + parseInt(nonactiveeighteen);
                var totaluserthirtyFive = parseInt(activethirtyFive) + parseInt(nonactivethirtyFive);
                var totaluserfiftyFive = parseInt(activefiftyFive) + parseInt(nonactivefiftyFive);
                var totaluseraboveFiftyFive = parseInt(activeaboveFiftyFive) + parseInt(nonactiveaboveFiftyFive);

                if (period == 'monthly') {
                    var date = dateFormat(available.period, "mmmm yyyy");
                } else if (period == 'yearly') {
                    var date = dateFormat(available.period, "yyyy");
                }

                var resultObject = data.reduce(function (result, currentObject) {
                    if (currentObject.period == date) {
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

                if (resultObject != 1) {
                    data.push({
                        period: date,
                        activeeighteen: activeeighteen,
                        activethirtyFive: activethirtyFive,
                        activefiftyFive: activefiftyFive,
                        activeaboveFiftyFive: activeaboveFiftyFive,
                        nonactiveeighteen: nonactiveeighteen,
                        nonactivethirtyFive: nonactivethirtyFive,
                        nonactivefiftyFive: nonactivefiftyFive,
                        nonactiveaboveFiftyFive: nonactiveaboveFiftyFive,
                        totalusereighteen: parseInt(totalusereighteen),
                        totaluserthirtyFive: parseInt(totaluserthirtyFive),
                        totaluserfiftyFive: parseInt(totaluserfiftyFive),
                        totaluseraboveFiftyFive: parseInt(totaluseraboveFiftyFive)
                    });
                }
            }
        }
        return res.status(200).json(data);
    },

    async summaryOfActiveMemberbyOccupation(req, res) {
        var data = [];
        const { period, fromdate, todate, location } = req.body;

        if (period == 'monthly') {
            var concate_fromdate = fromdate + '-01';
            var concate_todate = todate + '-31';
        } else if (period == 'yearly') {
            var concate_fromdate = fromdate + '-01-01';
            var concate_todate = todate + '-12-31';
        } else {
            var concate_fromdate = fromdate;
            var concate_todate = todate;
        }
        const occupationList = await reportsRepo.getOccupationList(concate_fromdate, concate_todate, location);
        for (let list of occupationList) {
            if (list.occupation) {
                if (period == 'monthly') {
                    var date = dateFormat(list.period, "mmmm yyyy");
                } else if (period == 'yearly') {
                    var date = dateFormat(list.period, "yyyy");
                } else {
                    var date = dateFormat(list.period, "isoDate");
                }
                var resultObject = data.reduce(function (result, currentObject) {
                    if (currentObject.period == date) {
                        for (var key in currentObject) {
                            if (key != 'period' && key != 'isMember') {
                                if (key == list.name) {
                                    currentObject[key] = parseInt(currentObject[list.name]) + parseInt(list.totalcount);
                                } else {
                                    currentObject[list.name] = parseInt(list.totalcount);
                                }
                            }
                        }
                        result = 1;
                    }
                    return result;

                }, {});
                if (resultObject != 1) {
                    data.push({
                        period: date,
                        [list.name]: list.totalcount,
                        isMember: list.isMember
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


        const courseList = await reportsRepo.trainingCourse(concate_fromdate, concate_todate, location);
        for (let list of courseList) {
            var date = dateFormat(list.trainingDate, "isoDate");
            data.push({
                courseDate: date,
                category: list.categoryName,
                courseName: list.course,
                duration: list.duration,
                targetGroup: list.targetName,
                trainer: list.fullName,
                location: list.branchName,
            });

        }
        return res.status(200).json(data);
    },
    async trainingAttendance(req, res) {
        var data = [];
        const { courseId, location } = req.body;
        const courseList = await reportsRepo.trainingAttendance(courseId, location);
        for (let list of courseList) {
            var age = calculateAge(list.memberId.dob)
            data.push({
                name: list.memberId.name,
                nric: list.memberId.nrciNo,
                age: age,
                bumiStatus: list.memberId.isBumi,
                occupation: list.memberId.occupation,
                member: list.memberId.isMember,
            });
        }
        return res.status(200).json(data);
    },

    async cafeUsage(req, res) {
        var data = [];
        const { period, fromdate, todate, location } = req.body;
        if (period == 'monthly') {
            var concate_fromdate = fromdate + '-01';
            var concate_todate = todate + '-31';
        } else if (period == 'yearly') {
            var concate_fromdate = fromdate + '-01-01';
            var concate_todate = todate + '-12-31';
        } else {
            var concate_fromdate = fromdate;
            var concate_todate = todate;
        }

        const cafesList = await reportsRepo.cafesList(concate_fromdate, concate_todate, location);
        if (cafesList.length) {
            for (let list of cafesList) {
                var date = dateFormat(list.period, "isoDate");
                var commondate = dateFormat(list.period, "isoDate");
                const cafees = await reportsRepo.cafeUsage(date, location);
                var subdata = [];
                if (period == 'monthly') {
                    var date = dateFormat(list.period, "mmmm yyyy");
                } else if (period == 'yearly') {
                    var date = dateFormat(list.period, "yyyy");
                }
                var resultObject = data.reduce(function (result, currentObject) {
                    console.log(currentObject);
                    if (currentObject.date == date) {
                        for (let cafe of cafees) {
                            currentObject.cafeUsage.push({
                                date: commondate,
                                startTime: dateFormat(cafe.startTime, "isoTime"),
                                workstation: cafe.pcNo.systemId,
                                name: cafe.assignTo.name,
                                nric: cafe.assignTo.nrciNo,
                                isMember: cafe.assignTo.isMember,
                                usage: cafe.totalHours,
                                amount: cafe.fee,
                            });
                        }
                        result = 1;
                    }
                    return result;
                }, {});

                if (resultObject != 1) {
                    for (let cafe of cafees) {
                        subdata.push({
                            date: commondate,
                            startTime: dateFormat(cafe.startTime, "isoTime"),
                            workstation: cafe.pcNo.systemId,
                            name: cafe.assignTo.name,
                            nric: cafe.assignTo.nrciNo,
                            isMember: cafe.assignTo.isMember,
                            usage: cafe.totalHours,
                            amount: cafe.fee,
                        });
                    }
                    data.push({
                        date: date,
                        cafeUsage: subdata
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

            const { period, fromdate, todate, location } = req.body;

            if (period == 'monthly') {
                var concate_fromdate = fromdate + '-01';
                var concate_todate = todate + '-31';
            } else if (period == 'yearly') {
                var concate_fromdate = fromdate + '-01-01';
                var concate_todate = todate + '-12-31';
            } else {
                var concate_fromdate = fromdate;
                var concate_todate = todate;
            }
            const occupationReport = await reportsRepo.getOccupationList(concate_fromdate, concate_todate, location);
            const occupations = await occupationRepo.getAll();

            for (let report of occupationReport) {


                if (period == 'monthly') {
                    var date = dateFormat(report.period, "mmmm yyyy");
                } else if (period == 'yearly') {
                    var date = dateFormat(report.period, "yyyy");
                } else {
                    var date = dateFormat(report.period, "isoDate");
                }

                if (!data.includes(date)) {

                    data.push(
                        date
                    )
                }
            }

            var i = 0;
            for (let day of data) {

                result.push({
                    period: day,
                    activeUser: {
                        name: [],
                        totalCount: []
                    },
                    nonActiveUser: {
                        name: [],
                        totalCount: []
                    }
                });

                for (let occupation of occupations) {
                    result[i].activeUser.name.push(occupation.name);
                    result[i].activeUser.totalCount.push(0);
                    result[i].nonActiveUser.name.push(occupation.name);
                    result[i].nonActiveUser.totalCount.push(0);
                }

                for (let report of occupationReport) {

                    if (period == 'monthly') {
                        var date = dateFormat(report.period, "mmmm yyyy");
                    } else if (period == 'yearly') {
                        var date = dateFormat(report.period, "yyyy");
                    } else {
                        var date = dateFormat(report.period, "isoDate");
                    }

                    // if(period == 'monthly' || period == 'yearly') {

                    if (day == date && report.isMember == 1) {
                        let occupation_position = result[i].activeUser.name.indexOf(report.name);

                        if (occupation_position >= 0) {

                            let totalCount = parseInt(result[i].activeUser.totalCount[occupation_position]) + parseInt(report.totalcount);

                            result[i].activeUser.totalCount[occupation_position] = totalCount;
                        } else {
                            result[i].activeUser.name.push(report.name);
                            result[i].activeUser.totalCount.push(report.totalcount);
                        }

                    } else if (day == date) {

                        let occupation_position = result[i].nonActiveUser.name.indexOf(report.name);

                        if (occupation_position >= 0) {

                            let totalCount = parseInt(result[i].nonActiveUser.totalCount[occupation_position]) + parseInt(report.totalcount);

                            result[i].nonActiveUser.totalCount[occupation_position] = totalCount;
                        } else {

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
        } catch (error) {
            res.serverError(error);
        }
    },

    async activecafeUsage(req, res) {
        var data = [];
        const { period, fromdate, todate, location } = req.body;
        if (period == 'monthly') {
            var concate_fromdate = fromdate + '-01';
            var concate_todate = todate + '-31';
        } else if (period == 'yearly') {
            var concate_fromdate = fromdate + '-01-01';
            var concate_todate = todate + '-12-31';
        } else {
            var concate_fromdate = fromdate;
            var concate_todate = todate;
        }

        const activeuserList = await reportsRepo.activecafeUsage(concate_fromdate, concate_todate, location);
        if (activeuserList.length) {
            for (let list of activeuserList) {
                var date = dateFormat(list.periodDate, "isoDate");
                const memberlist = await reportsRepo.getVisitorDetails(list.assignTo);
                if (period == 'monthly') {
                    var date = dateFormat(list.periodDate, "mmmm yyyy");
                } else if (period == 'yearly') {
                    var date = dateFormat(list.periodDate, "yyyy");
                }

                var memberfrequency = 0;
                var nonmemberfrequency = 0;
                if (memberlist.isMember) {
                    memberfrequency = parseInt(list.frequency);
                } else {
                    nonmemberfrequency = parseInt(list.frequency);
                }
                var totalLoginFrequency = parseInt(memberfrequency) + parseInt(nonmemberfrequency);
                var resultObject = data.reduce(function (result, currentObject) {

                    if (currentObject.period == date) {
                        currentObject.memberFrequency = parseInt(currentObject.memberFrequency) + parseInt(memberfrequency);
                        currentObject.memberNonfrequency = parseInt(currentObject.memberNonfrequency) + parseInt(nonmemberfrequency);
                        currentObject.totalLoginFrequency = parseInt(currentObject.totalLoginFrequency) + parseInt(totalLoginFrequency);
                        currentObject.totalUsage = parseInt(currentObject.totalUsage) + parseInt(list.totalHours);
                        result = 1;
                    }
                    return result;
                }, {});

                if (resultObject != 1) {
                    data.push({
                        period: date,
                        memberFrequency: memberfrequency,
                        memberNonfrequency: nonmemberfrequency,
                        totalLoginFrequency: totalLoginFrequency,
                        totalUsage: list.totalHours,
                    });
                }

            }
        }
        return res.status(200).json(data);
    },

    async incomeexpensesummary(req, res) {
        let data = [];
        let printoutArray = [];
        let expenseArray = [];
        const { type, fromdate, todate, location } = req.body;
        var cafeincome = await reportsRepo.cafeIncome(fromdate, todate, location);
        var memberRegistration = await reportsRepo.memberRegistration(fromdate, todate, location);
        var posprintout = await reportsRepo.getPosprintout(fromdate, todate);

        for (var printout of posprintout) {
            printoutArray.push({
                name: printout.inventoryType + printout.printOutSize,
                amount: printout.amount
            })
        }

        var getexpenseList = await reportsRepo.getexpenseList(fromdate, todate, location);
        for (var expense of getexpenseList) {
            expenseArray.push({
                name: expense.name,
                amount: expense.amount
            })
        }

        if (type == 'income') {
            data.push({
                income: {
                    cafe: cafeincome,
                    registeredFees: memberRegistration,
                    printOut: printoutArray,
                },
            })

        } else if (type == 'expense') {
            data.push({
                expense: expenseArray
            })

        } else {
            data.push({
                income: {
                    cafe: cafeincome,
                    registeredFees: memberRegistration,
                    printOut: printoutArray,
                },
                expense: expenseArray
            })
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

            var getexpenseList = await reportsRepo.getpurchaseList(fromdate, todate, location);
            for (var expense of getexpenseList) {
                expenseResult.push({
                    name: expense.fullName,
                    amount: expense.totalamount
                });

                total_expense = total_expense + parseInt(expense.totalamount);
            }

            var cafeincome = await reportsRepo.cafeIncome(fromdate, todate, location);
            cafeincome = cafeincome[0]['amount'];
            var memberRegistration = await reportsRepo.memberRegistration(fromdate, todate, location);
            memberRegistration = memberRegistration[0]['amount'];
            const printOutTypeDetailsList = await reportsRepo.printOutTypeDetails();
            const otherServiceRecords = [];
            let otherServiceIncome = 0;
            for (let types of printOutTypeDetailsList) {
                const posServiceAmount = await reportsRepo.getPosserviceDetails(fromdate, todate, location, types.id);
                const posStaffServiceAmount = await reportsRepo.getPosStaffServiceDetails(fromdate, todate, location, types.id);
                const otherserviceTotalAmount = posServiceAmount + posStaffServiceAmount;
                if (otherserviceTotalAmount) {
                    otherServiceRecords.push({
                        name: types.printOutType,
                        amount: otherserviceTotalAmount
                    })
                    otherServiceIncome += otherserviceTotalAmount;
                }
            }

            total_income = total_income + (cafeincome + memberRegistration + otherServiceIncome);

            otherServiceRecords.push({
                name: 'cafe',
                amount: cafeincome
            });

            if (memberRegistration > 0) {
                otherServiceRecords.push({
                    name: 'New member registration fees',
                    amount: memberRegistration,
                });
            }

            incomeResult = otherServiceRecords;

            if (type == 'income') {
                result = {
                    summary: {
                        income: total_income,
                        expense: total_expense,
                        profit: total_income - total_expense
                    },
                    income: incomeResult
                }
            } else if (type == 'expense') {
                result = {
                    summary: {
                        income: total_income,
                        expense: total_expense,
                        profit: total_income - total_expense
                    },
                    expense: expenseResult
                };
            } else {
                result = {
                    summary: {
                        income: total_income,
                        expense: total_expense,
                        profit: total_income - total_expense
                    },
                    income: incomeResult,
                    expense: expenseResult
                }
            }

            return res.status(200).json(result);
        } catch (error) {
            res.serverError(error);
        }
    },

    async incomeexpenseDetail(req, res) {
        let data = {};
        let printoutArray = [];
        let expenseArray = [];
        let incomelist = [];
        let incomeArray = [];
        const { type, fromdate, todate, location } = req.body;
        let currDate = new Date();

        var cafeincome = await reportsRepo.cafeIncomeDetails(fromdate, todate, location);
        var memberRegistration = await reportsRepo.memberRegistration(fromdate, todate, location);
        for (var income of cafeincome) {
            // let printoutArray = [];
            // var posprintout = await reportsRepo.getPosprintoutDetails(income.id, income.date);
            // for (var printout of posprintout) {
            //     printoutArray.push({
            //         name: printout.inventoryType + '-' + printout.printOutSize,
            //         amount: printout.amount
            //     })
            // }
            var foodincome = await reportsRepo.foodIncomeDetails(fromdate, todate, location, income.id);
            if (foodincome.length !== 0) {
                console.log(foodincome)
                foodlist = {
                    date: foodincome[0].date,
                    transactionId: income.transactionId,
                    amount: foodincome[0].fees,
                    by: income.fullName,
                    item: "food"
                }
                incomeArray.push(foodlist)
            }

            var serviceincome = await reportsRepo.serviceIncomeDetails(fromdate, todate, location, income.id);
            if (serviceincome.length !== 0) {
                servicelist = {
                    date: serviceincome[0].date,
                    transactionId: income.transactionId,
                    amount: serviceincome[0].fees,
                    by: income.fullName,
                    item: "service"
                }
                console.log(servicelist);
                incomeArray.push(servicelist)
            }

            incomelist = {
                date: income.date,
                transactionId: income.transactionId,
                amount: income.fees,
                by: income.fullName,
                item: "cafe"
            }

            incomeArray.push(incomelist)

        }

        var getexpenseList = await reportsRepo.getexpenseList(fromdate, todate);
        for (var expense of getexpenseList) {

            var items = await reportsRepo.getexpenseItem(expense.id);
            var itemName = [];
            for (var item of items) {
                itemName.push(item.name)
            }

            expenseArray.push({
                date: expense.date,
                item: itemName,
                amount: expense.totalamount,
                transactionId: expense.transactionId,
                by: expense.fullName
            })
        }

        if (type == 'income') {

            data = {
                summary: {
                    fromDate: fromdate,
                    toDate: todate,
                    printDate: currDate
                },
                income: incomeArray
            }

        } else if (type == 'expense') {
            data = {
                summary: {
                    fromDate: fromdate,
                    toDate: todate,
                    printDate: currDate
                },
                expense: expenseArray
            }

        } else {
            data = {
                summary: {
                    fromDate: fromdate,
                    toDate: todate,
                    printDate: currDate
                },
                income: incomeArray,
                expense: expenseArray
            }
        }
        return res.status(200).json(data);
    },

    async clockInClockOut(req, res) {
        const { period, fromdate, todate, location } = req.body;
        var clock = await reportsRepo.clockInClockOut(fromdate, todate, location);
        return res.status(200).json(clock);
    },

};

function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
