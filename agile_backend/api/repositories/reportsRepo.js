class ReportsRepository {
    constructor() {
        this.membership = sails.models.membership;
        this.visitor = sails.models.visitor;
        this.posfood = sails.models.posfood;
        this.training = sails.models.training;
        this.traingregister = sails.models.traingregister;
        this.possystemassign = sails.models.possystemassign;
        this.posprintout = sails.models.posprintout;
        this.printouttype = sails.models.printouttype;
        this.posservice = sails.models.posservice;
        this.posstaffservicedetails = sails.models.posstaffservicedetails;
        this.captureclock = sails.models.captureclock;
        this.cafeId = sails.config.custom.cafeId;


    }

    async activecafeUsage(fromdate, todate, location) {
        var list = await this.visitor.getDatastore().sendNativeQuery('SELECT DATE(createdAt) as periodDate, COUNT(assignTo) as frequency,assignTo,SUM(totalHours) AS totalHours FROM `possystemassign` where location="' + location + '" and DATE(createdAt) >= "' + fromdate + '" and DATE(createdAt) <= "' + todate + '" group by assignTo, DATE(createdAt) order by DATE(createdAt)');
        return list.rows;
    }

    async totalRegistered(fromdate, todate, location) {
        const visitorList = await this.visitor.getDatastore().sendNativeQuery('SELECT DATE(createdAt) AS period, COUNT(*) as totalregistered FROM `visitor` where  location="' + location + '" and DATE(createdAt) >= "' + fromdate + '" and DATE(createdAt) <= "' + todate + '" GROUP BY DATE(createdAt) order by DATE(createdAt)');
        return visitorList.rows;

    }
    async totalRegisteredActive(fromdate, todate, location) {
        const visitorList = await this.visitor.getDatastore().sendNativeQuery('SELECT DATE(createdAt) AS period, COUNT(*) as totalregistered FROM `visitor` where status=1 and   location="' + location + '" and DATE(createdAt) >= "' + fromdate + '" and DATE(createdAt) <= "' + todate + '" GROUP BY DATE(createdAt) order by DATE(createdAt)');
        return visitorList.rows;
    }
    async getMemberExpired(createdat, location) {
        const visitorList = await this.visitor.getDatastore().sendNativeQuery('SELECT COUNT(*) as memberexpired FROM `visitor` where  location="' + location + '" and DATE(createdAt) = "' + createdat + '" and  status=0 GROUP BY DATE(createdAt) ');
        return visitorList.rows;
    }

    async getActiveMember(createdat, location) {
        const visitorList = await this.visitor.getDatastore().sendNativeQuery('SELECT COUNT(*) as activemember FROM `visitor` where  location="' + location + '" and DATE(createdAt) = "' + createdat + '" and  status=1 and isMember=1 GROUP BY DATE(createdAt)');
        return visitorList.rows;
    }

    async getActiveNonMember(createdat, location) {
        const visitorList = await this.visitor.getDatastore().sendNativeQuery('SELECT COUNT(*) as activenonmember FROM `visitor` where  location="' + location + '" and DATE(createdAt) = "' + createdat + '" and  status=1 and isMember=0 GROUP BY DATE(createdAt)');
        return visitorList.rows;
    }

    async getVisitorstatus(createdat, location) {

        return await this.visitor.find({
            where: {
                createdAt: {
                    'contains': createdat,
                },
                location: location,
                status: 1
            },
            select: ['id', 'gender', 'isMember', 'status', 'isBumi']
        }).populate('gender').populate('trainingRegister');
    }

    async getMemberByBumi(createdat, location, ismember, bumi) {
        var list = await this.visitor.getDatastore().sendNativeQuery('SELECT COUNT(*) as bumi FROM `visitor` where  location="' + location + '" and DATE(createdAt) = "' + createdat + '" and  status=1 and isMember="' + ismember + '" and isBumi="' + bumi + '" GROUP BY DATE(createdAt)');
        return list.rows;

    }
    async getMemberByAge(createdat, location) {
        var list = await this.visitor.getDatastore().sendNativeQuery('SELECT isMember, (DATE_FORMAT(FROM_DAYS(DATEDIFF(DATE(NOW()), dob)), "%Y") * 1 * 12) + (DATE_FORMAT(FROM_DAYS(DATEDIFF(DATE(NOW()), dob)), "%m") * 1) AS age_in_months FROM `visitor` where location="' + location + '" and DATE(createdAt) = "' + createdat + '" and  status=1');
        return list.rows;
    }
    async getOccupationList(fromdate, todate, location) {
        var list = await this.visitor.getDatastore().sendNativeQuery('SELECT b.name as name, a.occupation, DATE(a.createdAt) as period, count(*) as totalcount,isMember FROM `visitor` a RIGHT JOIN occupation b on(b.id = a.occupation) where a.status=1 and a.location="' + location + '" and DATE(a.createdAt) >= "' + fromdate + '" and DATE(a.createdAt) <= "' + todate + '" group by a.occupation,a.isMember,DATE(a.createdAt) order by DATE(a.createdAt)');
        return list.rows;
    }

    async trainingCourse(fromdate, todate, location) {

        var list = await this.visitor.getDatastore().sendNativeQuery(
            'SELECT a.*,c.name as categoryName,t.fullName,l.branchName,tg.name as targetName  FROM `training` a LEFT JOIN cafe l on (l.id = a.location) LEFT JOIN trainingcategory c on (c.id = a.courseType) LEFT JOIN user t on (t.id = a.trainer) LEFT JOIN targetgroup tg on (tg.id = a.courseTarget) where a.status = 1 and a.location="' + location + '" and DATE(a.trainingDate) >= "' + fromdate + '" and DATE(a.trainingDate) <= "' + todate + '"');
        
        return list.rows;
        
        // return await this.training.find({
        //     where: {
        //         createdAt: {
        //             '>=': fromdate,
        //             '<=': todate,
        //         },
        //         location: location,
        //         status: 1,
        //     }
        // }).populate('location').populate('courseType').populate('trainer');
    }
    async trainingAttendance(courseId) {
        return await this.traingregister.find({
            where: {
                trainingId: courseId,
                attendance: 1,
                status: 1,
            },
        }).populate('memberId');
    }
    async cafesList(fromdate, todate, location) {
        var list = await this.visitor.getDatastore().sendNativeQuery('SELECT DATE(createdAt) as period FROM `possystemassign` where location="' + location + '" and DATE(createdAt) >= "' + fromdate + '" and DATE(createdAt) <= "' + todate + '" group by DATE(createdAt) order by DATE(createdAt)');
        return list.rows;

    }
    async getVisitorDetails(visitorId) {
        return await this.visitor.findOne({
            where: {
                id: visitorId,
            }
        });
    }

    async cafeUsage(date, location) {
        return await this.possystemassign.find({
            where: {
                createdAt: {
                    'contains': date,
                },
                location: location,
            }
        }).populate('location').populate('assignTo').populate('pcNo');
    }

    async cafeIncome(fromdate, todate, location) {
        var list = await this.visitor.getDatastore().sendNativeQuery('SELECT SUM(fee) as amount FROM `possystemassign`  where DATE(createdAt) >= "' + fromdate + '" and DATE(createdAt) <= "' + todate + '"');
        return list.rows;
        return await this.possystemassign.sum('fee')
            .where({
                createdAt: {
                    '>=': fromdate,
                    '<=': todate,
                },
                location: location
            });
    }

    async memberRegistration(fromdate, todate, location) {
        var list = await this.visitor.getDatastore().sendNativeQuery('SELECT SUM(fee) as amount FROM `membership`  where DATE(createdAt) >= "' + fromdate + '" and DATE(createdAt) <= "' + todate + '"');
        return list.rows;
        return await this.membership.sum('fee')
            .where({
                createdAt: {
                    '>=': fromdate,
                    '<=': todate,
                },
                location: location,
            });
    }
    async getPosprintout(fromdate, todate) {
        var list = await this.visitor.getDatastore().sendNativeQuery('SELECT a.printout,b.printOutSize,b.inventoryType, SUM(a.amount) as amount FROM `posprintout` a left join printout b on (a.printout = b.id ) where a.status=1 and DATE(a.createdAt) >= "' + fromdate + '" and DATE(a.createdAt) <= "' + todate + '" group by a.printout');
        return list.rows;
    }

    async getPosserviceDetails(fromdate, todate, location, printOutTypeId) {
        return await this.posservice.sum('amount')
            .where({
                createdAt: {
                    '>=': fromdate,
                    '<=': todate,
                },
                location: location,
                printOutTypeId: printOutTypeId,
                status: 1
            });
    }

    async getPosStaffServiceDetails(fromdate, todate, location, printOutTypeId) {
        return await this.posstaffservicedetails.sum('price')
            .where({
                createdAt: {
                    '>=': fromdate,
                    '<=': todate,
                },
                location: location,
                printout_type_Id: printOutTypeId,
                status: 1
            });
    }



    async getPosprintoutDetails(posid, date) {
        return await this.posprintout.find({
            where: {
                createdAt: {
                    'contains': date,
                },
                possystemassign: posid,
            }
        }).populate('printout');

    }

    async getexpenseItem(id) {
        var list = await this.visitor.getDatastore().sendNativeQuery(
            'SELECT b.name FROM `purchasedetail` a left join expense b on (a.expenseId = b.id) where a.status=1 and a.purchaseId = "' + id + '"');
        return list.rows;
    }

    async getexpenseList(fromdate, todate) {
        var list = await this.visitor.getDatastore().sendNativeQuery(
            // 'SELECT a.expenseId,b.name,SUM(a.amount) as amount FROM `purchasedetail` a left join expense b on (a.expenseId = b.id) where a.status=1 and DATE(a.createdAt) >= "' + fromdate + '" and DATE(a.createdAt) <= "' + todate + '" group by a.expenseId');
            'SELECT a.*,u.fullName FROM `purchase` a left join user u on (a.createdBy = u.id) where a.status=1 and a.date >= "' + fromdate + '" and a.date <= "' + todate + '"');
        return list.rows;
    }

    async getpurchaseList(fromdate, todate) {
        var list = await this.visitor.getDatastore().sendNativeQuery(
            'SELECT a.expenseId,b.name as fullName,SUM(a.amount) as totalamount FROM `purchasedetail` a left join expense b on (a.expenseId = b.id) where a.status=1 and DATE(a.createdAt) >= "' + fromdate + '" and DATE(a.createdAt) <= "' + todate + '" group by a.expenseId');
        return list.rows;
    }

    async cafeIncomeDetails(fromdate, todate, location) {
        var list = await this.visitor.getDatastore().sendNativeQuery(
            'SELECT p.id,p.createdAt as date,p.transactionId,SUM(p.fee) as fees, visitor.name as fullName ' +
            'FROM possystemassign p left join visitor on p.assignTo = visitor.id ' +
            'where p.location="' + location + '" and DATE(p.createdAt) >= "' + fromdate + '" and DATE(p.createdAt) <= "' + todate + '" group by p.id,p.transactionId,DATE(p.createdAt) order by DATE(p.createdAt)');
        return list.rows;
    }
    async foodIncomeDetails(fromdate, todate, location, id) {
        var list = await this.posfood.getDatastore().sendNativeQuery(
            'SELECT id,createdAt as date,SUM(amount) as fees,possystemassign FROM posfood where DATE(createdAt) >= "' + fromdate + '" and DATE(createdAt) <= "' + todate + '" and possystemassign="' + id + '" group by possystemassign,DATE(createdAt) order by DATE(createdAt)');
        return list.rows;
    }

    async serviceIncomeDetails(fromdate, todate, location, id) {
        var list = await this.posservice.getDatastore().sendNativeQuery(
            'SELECT id,createdAt as date,SUM(amount) as fees,possystemassign FROM posservice where DATE(createdAt) >= "' + fromdate + '" and DATE(createdAt) <= "' + todate + '" and possystemassign="' + id + '" group by possystemassign,DATE(createdAt) order by DATE(createdAt)');
        return list.rows;
    }
    // async cafeIncomeDetails(fromdate, todate, location) {
    //     var list = await this.visitor.getDatastore().sendNativeQuery(
    //         'SELECT p.id,p.createdAt as date,p.transactionId,SUM(p.fee) as fees, user.fullName ' +
    //         'FROM possystemassign p inner join posservice b ON p.id = b.possystemassign left join posfood c ON p.id  = c.possystemassign  left join user on p.createdBy = user.id ' +
    //         'where p.location="' + location + '" and DATE(p.createdAt) >= "' + fromdate + '" and DATE(p.createdAt) <= "' + todate + '" group by p.id,p.transactionId,DATE(p.createdAt) order by DATE(p.createdAt)');
    //     return list.rows;
    // }


    async printOutTypeDetails() {
        var list = await this.printouttype.find({
            where: {
                location: this.cafeId
            },
        })

        return list;


    }

    async clockInClockOut(fromdate, todate, location) {

        var list = await this.visitor.getDatastore().sendNativeQuery(
            'SELECT p.*, user.fullName ' +
            'FROM captureclock p left join user on p.userId = user.id ' +
            'where p.locationId="' + location + '" and DATE(p.createdAt) >= "' + fromdate + '" and DATE(p.createdAt) <= "' + todate + '" order by DATE(p.createdAt)');
        return list.rows;
        // return [];
    }



}

module.exports = new ReportsRepository();
