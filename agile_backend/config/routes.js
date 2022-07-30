/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

    /***************************************************************************
     *                                                                          *
     * Make the view located at `views/homepage.ejs` your home page.            *
     *                                                                          *
     * (Alternatively, remove this and add an `index.html` file in your         *
     * `assets` directory)                                                      *
     *                                                                          *
     ***************************************************************************/

    'get /users': 'UserController.getAll',
    //'get /docs':'',
    //'post /users/login':'UserController.login'
    'POST /users': 'UserController.create',
    'POST /users/login': 'UserController.login',
    'POST /upload/:userId': 'UserController.uploads',
    // 'POST /forgetPassword': 'UserController.forgetPassword',
    'PUT /users/:userId': 'UserController.update',
    // 'PUT /users/resetPassword/:userId': 'UserController.resetPassword',
    'DELETE /users/:userId': 'UserController.deleteuser',
    'POST /clockInAttendance': 'UserController.clockInAttendance',


    // 'POST /topup/': 'UserController.topup',
    'GET /users/rolePermissions/:roleId': 'UserController.rolePermissions',
    'POST /users/permisiion': 'UserController.rolePermissionscreateAndUpdate',
    'GET /getReports': 'UserController.getReports',
    'GET /users/:userId': 'UserController.getOne',
    'GET /locationUsers/:locationId': 'UserController.getLocationBasedUsers',
    'GET /userscron/:userId': 'UserController.getOneCron',
    'POST /roles': 'RoleController.createRole',
    'GET /getRoles': 'RoleController.getAllRole',
    'GET /roles/:roleId': 'RoleController.getOne',
    'GET /roles/getOne/:name': 'RoleController.getOne',

    'POST /employee': 'EmployeeController.create',
    'GET /employee': 'EmployeeController.getAll',
    'POST /cafe': 'CafeController.create',
    'GET /cafe/:cafeId': 'CafeController.getOne',
    'GET /cafe/': 'CafeController.getAll',
    'GET /cafeexportExcel/': 'CafeController.exportExcel',
    'GET /getCafePDF/': 'CafeController.getPDF',
    'GET /getBranchCount/': 'CafeController.getAllBranch',
    'POST /cafe/:cafeId': 'CafeController.udpate',

    'GET /getAllPcList': 'InventoryController.getAllPcList',

    'POST /inventory': 'InventoryController.create',
    'POST /inventorySystemstatusUpdate/:id': 'InventoryController.updateSystemStatus',
    'GET /inventory': 'InventoryController.getAll',
    'GET /getInventoryPdf': 'InventoryController.getPDF',
    'GET /inventory/:inventoryType': 'InventoryController.getOne',
    'GET /inventoryId': 'InventoryController.getOneId',
    'POST /inventory/:inventoryId': 'InventoryController.update',
    'GET /inventoryExportExcel/': 'InventoryController.exportExcel',
    'POST /training': 'TrainingController.create',
    'POST /courseRegisteration': 'TrainingController.CourseRegisteration',
    'POST /attendance': 'TrainingController.attendance',
    'GET /training': 'TrainingController.getAll',
    'GET /getTrainingPdf': 'TrainingController.getPDF',
    'GET /training/:trainingId': 'TrainingController.getOne',
    'POST /training/:trainingId': 'TrainingController.update',
    'GET /trainingExportExcel/': 'TrainingController.exportExcel',
    'POST /createEmployee': 'EmployeeController.create',
    'POST /empUpdate/:userId': 'UserController.uploads',
    'POST /empUpdateStatus/:userId': 'EmployeeController.updateStatus',
    'GET /employeeGetAll': 'EmployeeController.getAll',
    'GET /employeExportExcel/': 'EmployeeController.exportExcel',
    'GET /getEmployeePdf': 'EmployeeController.getPDF',


    'POST /uploadcourseRegisteration/:id': 'TrainingController.uploadcourseRegisteration',
    /* visitor curd operations */
    'GET /visitor/:data': 'VisitorController.getOne',
    'GET /visitor/': 'VisitorController.getAll',
    'POST /visitor/:visitorId': 'VisitorController.update',
    'POST /visitor': 'VisitorController.create',

    /* visitor additional  operations */
    'POST /uploadVisitor/': 'VisitorController.uploads',
    'GET /visitorSearch/:data': 'VisitorController.getDataBySearch',
    'POST /uploadVisitors/:visitorId': 'VisitorController.uploadsVisit',
    'GET /visitorExportExcel/': 'VisitorController.exportExcel',
    'GET /getVisitorPdf/': 'VisitorController.getPDF',
    'GET /getvisitorNricno/:data': 'VisitorController.getvisitorNricno',

    'POST /validateNricNo': 'VisitorController.validateNricNo',
    'POST /membershipbyNricNo': 'VisitorController.membershipbyNricNo',
    'GET /getMember/:memeberCode': 'VisitorController.getOneMember',
    'GET /getMemberList/': 'VisitorController.getMemberList',

    'GET /posAssignPcByNric/:data': 'PosSystemAssignController.posAssignPcByNric',
    'GET /getRecentActive/:assignTo': 'PosSystemAssignController.getRecentActive',
    'GET /getTotalHours/:assignTo': 'PosSystemAssignController.getTotalHours',
    'POST /leave': 'LeaveController.create',
    'GET /leave/:leaveId': 'LeaveController.getOne',
    'GET /leave/': 'LeaveController.getAll',
    'GET /getLeavePdf/': 'LeaveController.getPDF',
    'POST /leave/:leaveId': 'LeaveController.udpate',
    'GET /leaveExportExcel/': 'LeaveController.exportExcel',
    'GET /trainingUser/:trainingId': 'TrainingController.getCourseResgisterDetails',
    'POST /possystem': 'PosSystemAssignController.create',
    'GET /possystem/:posId': 'PosSystemAssignController.getOne',
    'GET /possystemUser/:posId': 'PosSystemAssignController.getOneUser',
    'GET /getByUser/:posId': 'PosSystemAssignController.getByUser',
    'GET /possystem/': 'PosSystemAssignController.getAll',
    'POST /posendsession/:id': 'PosSystemAssignController.posendsession',

    /* post management service  */

    'POST /possystem-staff-service': 'PosSystemAssignController.createStaffService',
    'GET /possystem-staff-service/:id': 'PosSystemAssignController.getStaffService',


    'POST /possystem/:posAssingId': 'PosSystemAssignController.update',
    'POST /priceupdate/:inventoryId': 'InventoryController.updateSettingPrice',
    'GET /getUserLeave/:userId': 'LeaveController.getOneLeave',
    'POST /printCategory/': 'InventoryController.createPrintCategory',
    'POST /foodcategory/': 'InventoryController.createFoodCategory',
    'GET /getprintCategory/': 'InventoryController.getPrintCategory',
    'GET /getfoodcategory/': 'InventoryController.getFoodCategory',

    'POST /billCreate/': 'IncomeController.create',
    'POST /getRevenueByDate/': 'IncomeController.getRevenueByDate',
    'POST /getIncomeByDate/': 'IncomeController.getIncomeByDate',
    'POST /getExpenseByDate/': 'IncomeController.getExpenseByDate',
    'GET /getIncomeExportExcel/': 'IncomeController.exportExcel',
    'GET /getIncome/': 'IncomeController.getIncome',
    'GET /getIncomeBySearch/:data': 'IncomeController.getIncomeBySearch',
    'GET /getRevenue/': 'IncomeController.getRevenue',
    'GET /getExpense/': 'IncomeController.getExpense',
    'GET /getexportExcel/': 'IncomeController.exportExcel',

    'POST /getRevenueMonth/': 'IncomeController.getRevenueMonth',
    'POST /getIncomeMonth/': 'IncomeController.getIncomeMonth',
    'POST /getExpenseMonth/': 'IncomeController.getExpenseMonth',

    'GET /getFoodUseage/:locationId': 'PosSystemAssignController.getFoodUseage',
    'GET /getPrintUseage/:locationId': 'PosSystemAssignController.getPrintUseage',
    'GET /getSystemUseage/:locationId': 'PosSystemAssignController.getSystemUseage',

    'GET /getAllFoodUseage/': 'PosSystemAssignController.getAllFoodUseage',
    'GET /getAllPrintUseage/': 'PosSystemAssignController.getAllPrintUseage',
    'GET /getAllSystemUseage/': 'PosSystemAssignController.getAllSystemUseage',

    'POST /empPasswordUpdate/:userId': 'EmployeeController.updatePassword',
    'POST /updateVisitorStatus/:visitorId': 'VisitorController.updateVisitorStatus',
    'POST /updateTrainingStatus/:trainingId': 'TrainingController.updateTrainingStatus',
    'POST /getAllVisitorReport/': 'VisitorController.getAllReport',
    'POST /getTrainingReport/': 'TrainingController.getTrainingReport',
    'POST /getAllUserReport/': 'UserController.getAllUserReport',
    'POST /getAllPOSReport/': 'PosSystemAssignController.getAllPOSReport',
    'POST /getLeaveReport/': 'LeaveController.getLeaveReport',
    'POST /billGeneration/': 'BillGenerationController.create',
    'POST /billGeneration/:billId': 'BillGenerationController.update',
    'GET /billGeneration/:billId': 'BillGenerationController.getOne',


    /**
     * Report section
     *   */
    'POST /report-activeMember/': 'ReportsController.summaryOfActiveMember',
    'POST /report-activeMemberbyGender/': 'ReportsController.summaryOfActiveMemberbyGender',
    'POST /report-activeMemberbyBumi/': 'ReportsController.summaryOfActiveMemberbyBumi',
    'POST /report-activeMemberbyAge/': 'ReportsController.summaryOfActiveMemberbyAge',
    'POST /report-activeMemberbyOccupation/': 'ReportsController.summaryOfActiveMemberbyOccupation',
    'POST /report-trainingCourse/': 'ReportsController.trainingCourse',
    'POST /report-trainingAttendance/': 'ReportsController.trainingAttendance',
    'POST /report-cafeUsage/': 'ReportsController.cafeUsage',
    'POST /report-activecafeUsage/': 'ReportsController.activecafeUsage',
    'POST /report-incomeexpensesummary/': 'ReportsController.incomeexpensesummary',
    'POST /report-incomeexpenseDetail/': 'ReportsController.incomeexpenseDetail',
    'POST /report-occupation/': 'ReportsController.occupationDetails',
    'POST /report-income-expense-summary/': 'ReportsController.incomeAndExpenseSummary',
    'POST /report-clockinout/': 'ReportsController.clockInClockOut',



    /***************************************************************************
     *                                                                          *
     * More custom routes here...                                               *
     * (See https://sailsjs.com/config/routes for examples.)                    *
     *                                                                          *
     * Get under inventory Management routs here.                               *
     * Like Training Management, Visitor Management, POS management dropdownlist*
     *                                                                          *
     ***************************************************************************/

    'GET /gender/': 'GenderController.getAll',
    'POST /gender/': 'GenderController.create',
    'GET /gender/:id': 'GenderController.getOne',
    'POST /gender/:id': 'GenderController.update',
    'DELETE /gender/:id': 'GenderController.delete',

    'GET /holiday/': 'HolidayController.getAll',
    'POST /holiday/': 'HolidayController.create',
    'GET /holiday/:id': 'HolidayController.getOne',
    'POST /holiday/:id': 'HolidayController.update',
    'DELETE /holiday/:id': 'HolidayController.delete',

    'GET /leavetype/': 'LeaveTypeController.getAll',
    'POST /leavetype/': 'LeaveTypeController.create',
    'GET /leavetype/:id': 'LeaveTypeController.getOne',
    'POST /leavetype/:id': 'LeaveTypeController.update',
    'DELETE /leavetype/:id': 'LeaveTypeController.delete',

    'GET /targetGroup/': 'TargetGroupController.getAll',
    'POST /targetGroup/': 'TargetGroupController.create',
    'GET /targetGroup/:id': 'TargetGroupController.getOne',
    'POST /targetGroup/:id': 'TargetGroupController.update',
    'DELETE /targetGroup/:id': 'TargetGroupController.delete',

    'GET /nationality/': 'NationalityController.getAll',
    'POST /nationality/': 'NationalityController.create',
    'GET /nationality/:nationalityId': 'NationalityController.getOne',
    'POST /nationality/:nationalityId': 'NationalityController.update',
    // 'DELETE /nationality/:nationalityId': 'NationalityController.delete',
    'POST /nationality/delete': 'NationalityController.delete',

    'GET /maritalstatus/': 'MaritalstatusController.getAll',
    'POST /maritalstatus/': 'MaritalstatusController.create',
    'GET /maritalstatus/:id': 'MaritalstatusController.getOne',
    'POST /maritalstatus/:id': 'MaritalstatusController.update',
    'DELETE /maritalstatus/:id': 'MaritalstatusController.delete',

    'GET /occupation/': 'OccupationController.getAll',
    'POST /occupation/': 'OccupationController.create',
    'GET /occupation/:id': 'OccupationController.getOne',
    'POST /occupation/:id': 'OccupationController.update',
    // 'DELETE /occupation/:id': 'OccupationController.delete',
    'POST /occupation/delete': 'OccupationController.delete',

    'GET /statelist/': 'StatesController.getAll',
    'POST /statelist/': 'StatesController.create',
    'GET /statelist/:id': 'StatesController.getOne',
    'POST /statelist/:id': 'StatesController.update',
    'DELETE /statelist/:id': 'StatesController.delete',
    'GET /getstatelistBycountry/:id': 'StatesController.getstatelistBycountry',



    'GET /incomelevel/': 'IncomeLevelController.getAll',
    'POST /incomelevel/': 'IncomeLevelController.create',
    'GET /incomelevel/:id': 'IncomeLevelController.getOne',
    'POST /incomelevel/:id': 'IncomeLevelController.update',
    'DELETE /incomelevel/:id': 'IncomeLevelController.delete',

    'GET /trainingCategory/': 'TrainingCategoryController.getAll',
    'POST /trainingCategory/': 'TrainingCategoryController.create',
    'GET /trainingCategory/:id': 'TrainingCategoryController.getOne',
    'POST /trainingCategory/:id': 'TrainingCategoryController.update',
    'DELETE /trainingCategory/:id': 'TrainingCategoryController.delete',


    'GET /country/': 'CountryController.getAll',
    'POST /country/': 'CountryController.create',
    'GET /country/:id': 'CountryController.getOne',
    'POST /country/:id': 'CountryController.update',
    'DELETE /country/:id': 'CountryController.delete',

    'GET /expense/': 'ExpenseController.getAll',
    'POST /expense/': 'ExpenseController.create',
    'GET /expense/:id': 'ExpenseController.getOne',
    'POST /expense/:id': 'ExpenseController.update',
    'DELETE /expense/:id': 'ExpenseController.delete',

    'GET /purchase/': 'PurchaseController.getAll',
    'POST /purchase/': 'PurchaseController.create',
    'GET /purchase/:id': 'PurchaseController.getOne',
    'POST /purchase/:id': 'PurchaseController.update',
    'DELETE /purchase/:id': 'PurchaseController.delete',



    'GET /autogenerate/:id': 'InventoryController.getAutogenerate',
    'POST /topup/:posAssignId': 'PosSystemAssignController.topUp',


    /* Membership registration controls */
    'POST /membershipRegistration': 'VisitorController.membershipRegistration',
    'POST /membershipRegistration/:id': 'VisitorController.updateMembershipRegistration',
    'GET /membershipRegistration/': 'VisitorController.getMembershipRegistration',
    'GET /membershipRegistration/:id': 'VisitorController.getMembershipRegistrationById',


    // 'GET /taxsettings': 'BillGenerationController.getAllTaxsettings',
    // 'GET /taxsettings/:id': 'BillGenerationController.getOneTaxsettings',
    'POST /taxsettings': 'BillGenerationController.updateTaxsetting',
    // 'POST /taxsettings/:id': 'BillGenerationController.updateTaxsetting',


    'GET /usercaptureclockin/:userid': 'CaptureClockController.userClockin',
    'GET /captureclocktime': 'CaptureClockController.getAll',
    'GET /captureclocktime/:id': 'CaptureClockController.getOne',
    'POST /captureclocktime': 'CaptureClockController.create',
    'POST /captureclocktime/:id': 'CaptureClockController.update',
    'POST /changepc/:id': 'PosSystemAssignController.changePc',


    /***************************************************************************
     * 
     * Cron job routes
     * 
     ***************************************************************************/

    // 'POST /cronMaritalStatus': 'CronController.cronMaritalStatus',
    // 'POST /cronGenderList': 'CronController.cronGenderList',
    // 'POST /cronCountryList': 'CronController.cronCountryList',
    // 'POST /cronExpenseList': 'CronController.cronExpenseList',
    // 'POST /cronIncomeLevel': 'CronController.cronIncomeLevel',
    // 'POST /cronLeavetype': 'CronController.cronLeavetype',
    // 'POST /cronNationalityList': 'CronController.cronNationalityList',
    // 'POST /cronOccupationList': 'CronController.cronOccupationList',
    // 'POST /cronStateList': 'CronController.cronStateList',
    // 'POST /cronBillgeneration': 'CronController.cronBillgeneration',
    // 'POST /cronTaxSettings': 'CronController.cronTaxSettings',
    // 'POST /cronCaptureclock': 'CronController.cronCaptureclock',
    // 'POST /cronfoodBeveragetype': 'CronController.cronfoodBeveragetype',
    // 'POST /cronfoodBeverage': 'CronController.cronfoodBeverage',
    // 'POST /cronprintouttype': 'CronController.cronprintouttype',
    // 'POST /cronprintout': 'CronController.cronprintout',
    // 'POST /croninventory': 'CronController.croninventory',
    // 'POST /cronincome': 'CronController.cronincome',
    // 'POST /cronleave': 'CronController.cronleave',
    // 'POST /cronmembership': 'CronController.cronMembership',
    // 'POST /cronpurchase': 'CronController.cronPurchase',
    // 'POST /cronpurchaseDetails': 'CronController.cronPurchaseDetails',
    // 'POST /crontargetgroup': 'CronController.cronTargetGroup',
    // 'POST /cronvisitorManagement': 'CronController.cronVisitorManagement',
    // 'POST /crontrainingcategory': 'CronController.crontrainingcategory',
    // 'POST /crontraining': 'CronController.cronTraining',
    // 'POST /crontrainingregister': 'CronController.crontrainingregister',
    // 'POST /cronpossytemassign': 'CronController.cronpossytemassign',
    // 'POST /cronposservice': 'CronController.cronposservice',
    // 'POST /cronposfood': 'CronController.cronposfood',
    // 'GET /testingRoutes': 'CronController.cronUpdateVisitorFromHqcmstoLocal',


    /***************************************************************************
     *                                                                          *
     * More custom routes here...                                               *
     * (See https://sailsjs.com/config/routes for examples.)                    *
     *                                                                          *
     * If a request to a URL doesn't match any of the routes in this file, it   *
     * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
     * not match any of those, it is matched against static assets.             *
     *                                                                          *
     ***************************************************************************/


};