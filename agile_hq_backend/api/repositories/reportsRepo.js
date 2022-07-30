class ReportsRepository {
    constructor() {
        this.membership = sails.models.membership;
        this.visitor = sails.models.visitor;
        this.training = sails.models.training;
        this.traingregister = sails.models.traingregister;
        this.possystemassign = sails.models.possystemassign;
        this.posprintout = sails.models.printout;
        this.posservice = sails.models.posservice;
        this.printouttype = sails.models.printouttype;
    }
    
    async activecafeUsage(fromdate, todate, location) {  
        var list = await this.visitor.getDatastore().sendNativeQuery('SELECT DATE(createdAt) as periodDate, COUNT(assignTo) as frequency,assignTo,SUM(totalHours) AS totalHours FROM `possystemassign` where location="'+location+'" and DATE(createdAt) >= "'+ fromdate +'" and DATE(createdAt) <= "'+ todate +'" group by assignTo, DATE(createdAt) order by DATE(createdAt)');
        return list.rows;
    }
    
    async totalRegistered(fromdate, todate, location) {
        const visitorList = await this.visitor.getDatastore().sendNativeQuery('SELECT DATE(createdAt) AS period, COUNT(*) as totalregistered FROM `visitor` where  location="'+location+'" and DATE(createdAt) >= "'+ fromdate +'" and DATE(createdAt) <= "'+ todate +'" GROUP BY DATE(createdAt) order by DATE(createdAt)');
        return visitorList.rows;
    
    }
    async totalRegisteredActive(fromdate, todate, location) {
        const visitorList = await this.visitor.getDatastore().sendNativeQuery('SELECT DATE(createdAt) AS period, COUNT(*) as totalregistered FROM `visitor` where status=1 and   location="'+location+'" and DATE(createdAt) >= "'+ fromdate +'" and DATE(createdAt) <= "'+ todate +'" GROUP BY DATE(createdAt) order by DATE(createdAt)');
        return visitorList.rows;
    }
    async getMemberExpired(createdat,location) {
        const visitorList = await this.visitor.getDatastore().sendNativeQuery('SELECT COUNT(*) as memberexpired FROM `visitor` where  location="'+location+'" and DATE(createdAt) = "'+ createdat +'" and  status=0 GROUP BY DATE(createdAt) ');
        return visitorList.rows;
    }

    async getActiveMember(createdat, location) {
        const visitorList = await this.visitor.getDatastore().sendNativeQuery('SELECT COUNT(*) as activemember FROM `visitor` where  location="'+location+'" and DATE(createdAt) = "'+ createdat +'" and  status=1 and isMember=1 GROUP BY DATE(createdAt)');
        return visitorList.rows;
    }

    async getActiveNonMember(createdat,location) {
        const visitorList = await this.visitor.getDatastore().sendNativeQuery('SELECT COUNT(*) as activenonmember FROM `visitor` where  location="'+location+'" and DATE(createdAt) = "'+ createdat +'" and  status=1 and isMember=0 GROUP BY DATE(createdAt)');
            return visitorList.rows;
    }

    async getVisitorstatus(createdat,location) {

        return await this.visitor.find({
            where : {
                createdAt: { 
                    'contains': createdat,
                },
                location : location,
                status : 1
            },
            select : ['id','gender','isMember','status','isBumi','recordid']
        })
    }
   
    async getMemberByBumi(createdat, location, ismember, bumi) {
        var list = await this.visitor.getDatastore().sendNativeQuery('SELECT COUNT(*) as bumi FROM `visitor` where  location="'+location+'" and DATE(createdAt) = "'+ createdat +'" and  status=1 and isMember="'+ismember+'" and isBumi="'+bumi+'" GROUP BY DATE(createdAt)');
        return list.rows;
       
    }
    async getMemberByAge(createdat, location) {
        var list = await this.visitor.getDatastore().sendNativeQuery('SELECT isMember, (DATE_FORMAT(FROM_DAYS(DATEDIFF(DATE(NOW()), dob)), "%Y") * 1 * 12) + (DATE_FORMAT(FROM_DAYS(DATEDIFF(DATE(NOW()), dob)), "%m") * 1) AS age_in_months FROM `visitor` where location="'+location+'" and DATE(createdAt) = "'+ createdat +'" and  status=1');
        return list.rows;
    }
    async getOccupationList(fromdate, todate, location) {
        var list = await this.visitor.getDatastore().sendNativeQuery('SELECT b.name as occupationname,a.occupation, DATE(a.createdAt) as period, count(*) as totalcount,isMember FROM `visitor` a RIGHT JOIN occupation b on(b.recordid = a.occupation) where a.status=1 and a.location="'+location+'" and DATE(a.createdAt) >= "'+ fromdate +'" and DATE(a.createdAt) <= "'+ todate +'" group by a.occupation,a.isMember,DATE(a.createdAt),b.name order by DATE(a.createdAt)');
        return list.rows;
    }

    async trainingCourse(fromdate, todate, location) {
        return await this.training.find({
            where : {
                createdAt: { 
                    '>=': fromdate,
                    '<=': todate,
                },
                location : location,
                status : 1,
            }
        }).populate('location').populate('trainer');
    }
    async trainingAttendance(courseId,location) {
        return await this.traingregister.find({
            where : {
                trainingId :  courseId,
                attendance : 1,
                status : 1,
                location : location,
            },
        });
    }
    async cafesList(fromdate, todate, location) {
        var list = await this.visitor.getDatastore().sendNativeQuery('SELECT DATE(createdAt) as period FROM `possystemassign` where location="'+location+'" and DATE(createdAt) >= "'+ fromdate +'" and DATE(createdAt) <= "'+ todate +'" group by DATE(createdAt) order by DATE(createdAt)');
        return list.rows;
        
    }
    async getVisitorDetails(visitorId) {
        return  await this.visitor.findOne({ 
            where: { 
                id: visitorId,
            } 
        });
    }

    async cafeUsage(date, location) {
        return await this.possystemassign.find({
            where : {
                createdAt: { 
                    'contains': date,
                },
                location : location,
            }
        }).populate('location');
    }

    async cafeIncome(fromdate, todate, location) {
        return  await this.possystemassign.sum('fee')
            .where({
                createdAt: { 
                    '>=': fromdate,
                    '<=': todate,
                },
                location : location
            });
    }

    async memberRegistration(fromdate, todate, location) {
        return  await this.membership.sum('fee')
            .where({
                createdAt: { 
                    '>=': fromdate,
                    '<=': todate,
                },
                location : location,
            });
    }

    async getPosprintoutType(typeid, location) {
        return  await this.printouttype.findOne({
             where : {
                recordid : typeid,
                location : location,
             }
        });
    }


    async getPosprintout(fromdate, todate) {
        var list = await this.visitor.getDatastore().sendNativeQuery('SELECT a.printout,b.printOutSize,b.inventoryType, SUM(a.amount) as amount FROM `posprintout` a left join printout b on (a.printout = b.recordid ) where a.status=1 and DATE(a.createdAt) >= "'+ fromdate +'" and DATE(a.createdAt) <= "'+ todate +'" group by a.printout');
        return list.rows;
    }

    // async getPrintOutRepots(fromdate, todate) {
    //     console.log('SELECT c.printOutType as name,sum(b.amount) as amount FROM `printout` as a LEFT JOIN `printouttype` as c ON (a.printOutType = c.recordid) LEFT JOIN `posservice` as b ON (a.printout = b.serviceId) WHERE DATE(b.createdAt) >= "'+ fromdate +'" and DATE(b.createdAt) <= "'+ todate +'" GROUP BY a.printOutType');
    //     var list = await this.visitor.getDatastore().sendNativeQuery('SELECT c.printOutType as name,sum(b.amount) as amount FROM `printout` as a LEFT JOIN `printouttype` as c ON (a.printOutType = c.recordid) LEFT JOIN `posservice` as b ON (a.recordid = b.serviceId) WHERE DATE(b.createdAt) >= "'+ fromdate +'" and DATE(b.createdAt) <= "'+ todate +'" GROUP BY a.printOutType');
    //     return list.rows;
    // }

    async getPrintOutRepots(fromdate, todate, location) {
        return  await this.posservice.sum('amount')
        .where({
            createdAt: { 
                '>=': fromdate,
                '<=': todate,
            },
            location : location,
        });
        
    }

    async getPosprintoutDetails(posid, date, location) {
        return await this.posservice.find({
            where : {
                createdAt: { 
                    'contains': date,
                },
                possystemassign : posid,
                location : location,
            }            
        });
        
    }


    
    async getexpenseList(fromdate, todate) {
        var list = await this.visitor.getDatastore().sendNativeQuery('SELECT a.expenseId,b.name,SUM(a.amount) as amount FROM `purchasedetail` a left join expense b on (a.expenseId = b.recordid) where a.status=1 and DATE(a.createdAt) >= "'+ fromdate +'" and DATE(a.createdAt) <= "'+ todate +'" group by a.expenseId,b.name');
        return list.rows;
    }

    async cafeIncomeDetails(fromdate, todate, location) {
        var list = await this.visitor.getDatastore().sendNativeQuery('SELECT id,recordid, DATE(createdAt) as date,transactionId,SUM(fee) as fees FROM `possystemassign` where location="'+location+'" and DATE(createdAt) >= "'+ fromdate +'" and DATE(createdAt) <= "'+ todate +'" group by id,transactionId,DATE(createdAt) order by DATE(createdAt)');
        return list.rows;
    }


    async getPrintoutList(recordid, location) {
        return  await this.posprintout.findOne({
             where : {
                recordid : recordid,
                locationId : location,
             }
        });
    }


}

module.exports = new ReportsRepository();

