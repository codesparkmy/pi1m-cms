const request = require("request-promise");
const dateFormat = require('dateformat');

const cafeId = sails.config.custom.cafeId;
const serverApiLink = sails.config.custom.serverApiLink;

var schedule = require('node-schedule');


/* Controllers */

const Gender = require('../controllers/GenderController');
const maritalStatus = require('../controllers/MaritalstatusController');
const CountryController = require('../controllers/CountryController');
const ExpenseController = require('../controllers/ExpenseController');
const IncomeLevelController = require('../controllers/IncomeLevelController');
const LeaveTypeController = require('../controllers/LeaveTypeController');
const NationalityController = require('../controllers/NationalityController');
const OccupationController = require('../controllers/OccupationController');
const StatelistController = require('../controllers/StatesController');
const BillGenerationController = require('../controllers/BillGenerationController');
const CaptureClockController = require('../controllers/CaptureClockController');
const inventoryController = require('../controllers/InventoryController');
const incomeController = require('../controllers/IncomeController');
const leavecontroller = require('../controllers/LeaveController');
const visitorcontroller = require('../controllers/VisitorController');
const purchasecontroller = require('../controllers/PurchaseController');
const targetgroupcontroller = require('../controllers/TargetGroupController');
const trainingcategorycontroller = require('../controllers/TrainingCategoryController');
const trainingcontroller = require('../controllers/TrainingController');
const possystemassigncontroller = require('../controllers/PosSystemAssignController');
const EmployeeController = require('../controllers/EmployeeController');

// repository 

const visitorRepo = require('../repositories/visitorRepo');




/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const job = schedule.scheduleJob('59 * * * *', function(){
var j = schedule.scheduleJob({ hour: 15, minute: 00 }, function() {
    cronMaritalStatus();
    cronGenderList();
    cronCountryList();
    cronExpenseList();
    cronIncomeLevel();
    cronLeavetype();
    cronNationalityList();
    cronOccupationList();
    cronStateList();
    cronBillgeneration();
    // cronTaxSettings();
    cronCaptureclock();
    cronfoodBeverage();
    cronfoodBeveragetype();
    cronprintouttype();
    cronprintout();
    croninventory();
    cronincome();
    cronleave();
    cronmembership();
    cronPurchase();
    cronPurchaseDetails();
    cronTargetGroup();
    cronVisitorManagement();
    crontrainingcategory();
    cronTraining();
    crontrainingregister();
    cronpossytemassign();
    cronposfood();
    cronposservice();
    cronEmployeeDetails();
    cronUpdateVisitorFromHqcmstoLocal();
});


async function cronMaritalStatus() {
    try {
        var records = await maritalStatus.getAllList(cafeId);
        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');
            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmsMaritalStatus',
                body: list,
                json: true
            };
            var result = await request(options);
        }

    } catch (error) {
        console.log('cron cronMaritalStatus error', error)
    }
}

async function cronGenderList() {
    try {

        var records = await Gender.getAllList(cafeId);
        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');
            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmsgenderList',
                body: list,
                json: true
            };
            var result = await request(options);
        }

    } catch (error) {
        console.log('cron cronGenderList error', error)
    }
}

async function cronCountryList() {
    try {

        var records = await CountryController.getAllList(cafeId);
        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');
            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmscountryList',
                body: list,
                json: true
            };
            var result = await request(options);
        }

    } catch (error) {
        console.log('cron cronCountryList error', error)
    }
}

async function cronExpenseList() {
    try {

        var records = await ExpenseController.getAllList(cafeId);

        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');
            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmsExpenseList',
                body: list,
                json: true
            };
            var result = await request(options);
        }

    } catch (error) {
        console.log('cron cronExpenseList error', error)
    }
}

async function cronIncomeLevel() {
    try {

        var records = await IncomeLevelController.getAllList(cafeId);

        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');
            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmsIncomeLevel',
                body: list,
                json: true
            };
            var result = await request(options);
        }

    } catch (error) {
        console.log('cron cronIncomeLevel error', error)
    }
}

async function cronLeavetype() {
    try {

        var records = await LeaveTypeController.getAllList(cafeId);

        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');
            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmsLeavetype',
                body: list,
                json: true
            };
            var result = await request(options);
        }

    } catch (error) {
        console.log('cron cronLeavetype error', error)
    }
}

async function cronNationalityList() {
    try {

        var records = await NationalityController.getAllList(cafeId);

        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');
            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmsNationalityList',
                body: list,
                json: true
            };
            var result = await request(options);
        }

    } catch (error) {
        console.log('cron cronNationalityList error', error)
    }
}

async function cronOccupationList() {
    try {

        var records = await OccupationController.getAllList(cafeId);

        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');
            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmsOccupationList',
                body: list,
                json: true
            };
            var result = await request(options);
        }

    } catch (error) {
        console.log('cron cronOccupationList error', error)
    }
}

async function cronStateList() {
    try {
        var records = await StatelistController.getAllList(cafeId);
        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');
            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmsStateList',
                body: list,
                json: true
            };
            var result = await request(options);
        }
    } catch (error) {
        console.log('cron cronStateList error', error)
    }
}

async function cronBillgeneration() {
    try {
        var records = await BillGenerationController.getAllList(cafeId);
        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');
            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmsBillgeneration',
                body: list,
                json: true
            };
            var result = await request(options);
        }
    } catch (error) {
        console.log('cron cronBillgeneration error', error)
    }
}


// async function cronTaxSettings() {
//     try {
//         var records =  await BillGenerationController.getAllTaxList(cafeId);
//         for (var list of records) {
//             list.recordid = list.id; delete list.id;
//             list.createdAt = dateFormat(list.createdAt, 'isoDate')+' '+dateFormat(list.createdAt, 'isoTime');
//             list.updatedAt = dateFormat(list.updatedAt, 'isoDate')+' '+dateFormat(list.updatedAt, 'isoTime');
//             var options = {
//                 method: 'POST',
//                 uri: serverApiLink +'hqcmsTaxSettings',
//                 body: list, 
//                 json: true 
//             };
//             var result = await request(options);
//         }
//     } catch (error) {
//         console.log('cron cronTaxSettings error', error)
//     }
// }

async function cronCaptureclock() {
    try {
        var records = await CaptureClockController.getAllList(cafeId);
        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');
            list.clockin = dateFormat(list.clockin, 'isoDate') + ' ' + dateFormat(list.clockin, 'isoTime');
            list.clockout = dateFormat(list.clockout, 'isoDate') + ' ' + dateFormat(list.clockout, 'isoTime');
            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmsCaptureclock',
                body: list,
                json: true
            };
            var result = await request(options);
        }
    } catch (error) {
        console.log('cron cronCaptureclock error', error)
    }
}

async function cronfoodBeverage() {
    try {
        var records = await inventoryController.getAllFoodBeverageList(cafeId);
        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');
            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmsfoodBeverage',
                body: list,
                json: true
            };
            var result = await request(options);
        }
    } catch (error) {
        console.log('cron cronfoodBeverage error', error)
    }
}
async function cronfoodBeveragetype() {
    try {
        var records = await inventoryController.getAllFoodBeveragetypeList(cafeId);
        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');
            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmsfoodBeveragetype',
                body: list,
                json: true
            };
            var result = await request(options);
        }
    } catch (error) {
        console.log('cron cronfoodBeveragetype error', error)
    }
}
async function cronprintouttype() {
    try {
        var records = await inventoryController.getAllprintouttypeList(cafeId);
        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');
            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmsprintouttype',
                body: list,
                json: true
            };
            var result = await request(options);
        }
    } catch (error) {
        console.log('cron cronprintouttype error', error)
    }
}
async function cronprintout() {
    try {
        var records = await inventoryController.getAllprintoutList(cafeId);

        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');
            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmsprintout',
                body: list,
                json: true
            };
            var result = await request(options);
        }
    } catch (error) {
        console.log('cron cronprintout error', error)
    }
}

async function croninventory() {
    try {
        var records = await inventoryController.getAllinventoryList(cafeId);
        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');
            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmsinventory',
                body: list,
                json: true
            };
            var result = await request(options);
        }
    } catch (error) {
        console.log('cron croninventory error', error)
    }
}

async function cronincome() {
    try {
        var records = await incomeController.getAllList(cafeId);
        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');
            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmsincome',
                body: list,
                json: true
            };
            var result = await request(options);
        }
    } catch (error) {
        console.log('cron cronincome error', error)
    }
}
async function cronleave() {
    try {
        var records = await leavecontroller.getAllList(cafeId);
        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');
            list.fromDate = dateFormat(list.fromDate, 'isoDate') + ' ' + dateFormat(list.fromDate, 'isoTime');
            list.toDate = dateFormat(list.toDate, 'isoDate') + ' ' + dateFormat(list.toDate, 'isoTime');
            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmsleave',
                body: list,
                json: true
            };
            var result = await request(options);
        }
    } catch (error) {
        console.log('cron cronleave error', error)
    }
}
async function cronmembership() {
    try {
        var records = await visitorcontroller.getAllMembershipList(cafeId);
        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');
            list.membership_from = dateFormat(list.membership_from, 'isoDate');
            list.membership_to = dateFormat(list.membership_to, 'isoDate');
            list.received_date = dateFormat(list.received_date, 'isoDate');

            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmsmembership',
                body: list,
                json: true
            };
            var result = await request(options);
        }
    } catch (error) {
        console.log('cron cronmembership error', error)
    }
}

async function cronPurchase() {
    try {
        var records = await purchasecontroller.getAllPurchaseList(cafeId);
        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');
            list.date = dateFormat(list.date, 'isoDate');

            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmspurchase',
                body: list,
                json: true
            };
            var result = await request(options);
        }
    } catch (error) {
        console.log('cron cronPurchase error', error)
    }
}
async function cronPurchaseDetails() {
    try {
        var records = await purchasecontroller.getAllPurchaseDetailsList(cafeId);
        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');

            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmspurchasedetails',
                body: list,
                json: true
            };
            var result = await request(options);
        }
    } catch (error) {
        console.log('cron cronPurchaseDetails error', error)
    }
}
async function cronTargetGroup() {
    try {
        var records = await targetgroupcontroller.getAllList(cafeId);
        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');

            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmstargetgroup',
                body: list,
                json: true
            };
            var result = await request(options);
        }

    } catch (error) {
        console.log('cron cronTargetGroup error', error)
    }
}
async function cronVisitorManagement() {
    try {
        var records = await visitorcontroller.getAllVisitorList(cafeId);
        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');
            list.dob = dateFormat(list.dob, 'isoDate') + ' ' + dateFormat(list.dob, 'isoTime');
            list.memebershipSince = dateFormat(list.memebershipSince, 'isoDate') + ' ' + dateFormat(list.memebershipSince, 'isoTime');

            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmsvisitormanagement',
                body: list,
                json: true
            };
            var result = await request(options);
        }

    } catch (error) {
        console.log('cron cronVisitorManagement error', error)
    }
}
async function crontrainingcategory() {
    try {
        var records = await trainingcategorycontroller.getAllList(cafeId);
        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');

            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmstrainingcategory',
                body: list,
                json: true
            };
            var result = await request(options);
        }
    } catch (error) {
        console.log('cron crontrainingcategory error', error)
    }
}
async function cronTraining() {
    try {
        var records = await trainingcontroller.getAlltrainingList(cafeId);
        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');
            list.trainingDate = dateFormat(list.trainingDate, 'isoDate') + ' ' + dateFormat(list.trainingDate, 'isoTime');
            list.startTime = dateFormat(list.startTime, 'isoDate') + ' ' + dateFormat(list.startTime, 'isoTime');
            list.endTime = dateFormat(list.endTime, 'isoDate') + ' ' + dateFormat(list.endTime, 'isoTime');
            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmstraining',
                body: list,
                json: true
            };
            var result = await request(options);
        }
    } catch (error) {
        console.log('cron cronTraining error', error)
    }
}
async function crontrainingregister() {
    try {
        var records = await trainingcontroller.getAlltrainingRegisterList(cafeId);
        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');
            list.trainingDate = dateFormat(list.trainingDate, 'isoDate') + ' ' + dateFormat(list.trainingDate, 'isoTime');
            list.startTime = dateFormat(list.startTime, 'isoDate') + ' ' + dateFormat(list.startTime, 'isoTime');
            list.endTime = dateFormat(list.endTime, 'isoDate') + ' ' + dateFormat(list.endTime, 'isoTime');
            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmstrainingregister',
                body: list,
                json: true
            };
            var result = await request(options);
        }
    } catch (error) {
        console.log('cron crontrainingregister error', error)
    }
}
async function cronpossytemassign() {
    try {
        var records = await possystemassigncontroller.getAllposSystemAssignList(cafeId);
        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');
            list.startTime = dateFormat(list.startTime, 'isoDate') + ' ' + dateFormat(list.startTime, 'isoTime');
            list.endTime = dateFormat(list.endTime, 'isoDate') + ' ' + dateFormat(list.endTime, 'isoTime');

            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmspossytemassign',
                body: list,
                json: true
            };
            var result = await request(options);
        }
    } catch (error) {
        console.log('cron cronpossytemassign error', error)
    }
}
async function cronposfood() {
    try {
        var records = await possystemassigncontroller.getAllPosfoodList(cafeId);
        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');


            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmsposfood',
                body: list,
                json: true
            };
            var result = await request(options);
        }
    } catch (error) {
        console.log('cron cronposfood error', error)
    }
}

async function cronposservice() {
    try {
        var records = await possystemassigncontroller.getAllPosserviceList(cafeId);
        for (var list of records) {
            list.recordid = list.id;
            delete list.id;
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');
            var options = {
                method: 'POST',
                uri: serverApiLink + 'hqcmsposservice',
                body: list,
                json: true
            };
            var result = await request(options);
        }
    } catch (error) {
        console.log('cron cronposservice error', error)
    }
}

// HQCMS TO LOCAL


async function cronEmployeeDetails() {
    try {
        var options = {
            method: 'POST',
            uri: serverApiLink + 'getEmployeeDetails',
            body: { location: cafeId },
            json: true
        };
        var records = await request(options);

        for (var list of records) {
            list.createdAt = dateFormat(list.createdAt, 'isoDate') + ' ' + dateFormat(list.createdAt, 'isoTime');
            list.updatedAt = dateFormat(list.updatedAt, 'isoDate') + ' ' + dateFormat(list.updatedAt, 'isoTime');
            list.joiningDate = dateFormat(list.joiningDate, 'isoDate') + ' ' + dateFormat(list.joiningDate, 'isoTime');
            list.dob = dateFormat(list.dob, 'isoDate');
            const listvalidate = await EmployeeController.updateCronEmpDetails(list);

        }
    } catch (error) {
        console.log('cron cronEmployeeDetails error', error)
    }


    async function cronUpdateVisitorFromHqcmstoLocal() {
        try {
            const options = {
                method: 'GET',
                uri: serverApiLink + 'getAllvisitor',
                json: true
            };
            const hqcmsRecords = await request(options);
            for (const data of hqcmsRecords) {
                delete data.id;
                delete data.recordid;
                const storeRecords = await visitorRepo.createOrUpdateVisitor(data);
            }
            return res.status(200).json({ message: "successfully updated" })
        } catch (error) {
            console.log('cron cronUpdateVisitorFromHqcmstoLocal error', error)
        }
    }


}