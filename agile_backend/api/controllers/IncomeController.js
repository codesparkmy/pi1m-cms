const IncomeRepo = require("../repositories/IncomeRepo");
const fs = require('fs');
const os = require('os');

/**
 * IncomeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
module.exports = {

    async create(req, res) {
        try {
            var d = new Date();
            var currentMonth = monthNames[d.getMonth()];
            const { foodUsage, printUsage, browesUsage, gst, serviceCharge, month, totalAmount, locationId } = req.body;
            let result = await IncomeRepo.create({ foodUsage, printUsage, browesUsage, gst, serviceCharge, month: currentMonth, totalAmount, locationId });
            if (!!result) {
                return res.status(200).json({ data: result, message: "BillGeneration Created Successfully" });
            }
            return res.status(202).json({ message: "Bad Request" });

        } catch (error) {
            res.serverError(error);
        };
    },

    async getRevenueByDate(req, res) {
        try {
            const { startDate, endDate } = req.body;
            let dt = new Date();
            let today = dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
            var val = { data: 500 };
            // let result = await IncomeRepo.getDataByDate(startDate,endDate||today,'revenue');
            if (!!val) {
                return res.status(200).json(val);
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },

    async getIncomeByDate(req, res) {
        try {
            const { startDate, endDate } = req.body;
            let dt = new Date();
            let today = dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();

            var val = { data: 100 };
            // let result = await IncomeRepo.getDataByDate(startDate,endDate||today,'revenue');
            if (!!val) {
                return res.status(200).json(val);
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },
    async getIncomeBySearch(req, res) {
        try {
            const searchData = req.params.data;
            let result = await IncomeRepo.getIncomeBySearch(searchData);
            return res.status(200).json(result);

        } catch (error) {
            res.serverError(error);
        }
    },
    async exportExcel(req, res) {
        let result = await IncomeRepo.getAll();
        const filename = "./reports/excel/output-" + Date.now() + ".csv"
        const output = [];
        const headers = []
        const header = [{
            income: 'income',
            expenses: 'expenses',
            month: 'month',
            foodUsage: 'foodUsage',
            printUsage: 'printUsage',
            browesUsage: 'browesUsage',
            gst: 'gst',
            serviceCharge: 'serviceCharge',
            month: 'month',
            totalAmount: 'totalAmount',
            location: 'location',
            createdAt: 'createdAt',
            updatedAt: 'updatedAt'
        }]
        header.forEach((d) => {
            headers.push(d.income)
            headers.push(d.expenses)
            headers.push(d.month)
            headers.push(d.foodUsage)
            headers.push(d.printUsage)
            headers.push(d.browesUsage)
            headers.push(d.gst)
            headers.push(d.serviceCharge)
            headers.push(d.month)
            headers.push(d.totalAmount)
            headers.push(d.location)
            headers.push(d.createdAt)
            headers.push(d.updatedAt)

            output.push(headers.join())
        })
        fs.writeFileSync(filename, output.join(os.EOL));
        result.forEach((obj) => {
            const row = [];
            row.push(obj.income);
            row.push(obj.expenses);
            row.push(obj.month);
            row.push(obj.foodUsage);
            row.push(obj.printUsage);
            row.push(obj.browesUsage);
            row.push(obj.gst);
            row.push(obj.serviceCharge);
            row.push(obj.totalAmount);
            row.push(obj.location);
            row.push(obj.createdAt);
            row.push(obj.updatedAt);

            output.push(row.join());

        });
        fs.writeFileSync(filename, output.join(os.EOL));
        return res.status(200).json({message:"Excel reported successully",path:filename})
    },
    async getExpenseByDate(req, res) {
        try {
            const { startDate, endDate } = req.body;
            let dt = new Date();
            let today = dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();

            var val = { data: 300 };
            // let result = await IncomeRepo.getDataByDate(startDate,endDate||today,'revenue');
            if (!!val) {
                return res.status(200).json(val);
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },

    async getExpense(req, res) {
        try {
            // const{startDate,endDate}=req.body;
            // let dt = new Date();
            //let today=dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();

            var val = { data: 250 };
            // let result = await IncomeRepo.getDataByDate(startDate,endDate||today,'revenue');
            if (!!val) {
                return res.status(200).json(val);
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },

    async getRevenue(req, res) {
        try {
            //  const{startDate,endDate}=req.body;
            // let dt = new Date();
            // let today=dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();

            var val = { data: 450 };
            // let result = await IncomeRepo.getDataByDate(startDate,endDate||today,'revenue');
            if (!!val) {
                return res.status(200).json(val);
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },

    async getIncome(req, res) {
        try {
            // const{startDate,endDate}=req.body;
            //let dt = new Date();
            //let today=dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();

            var val = { data: 650 };
            // let result = await IncomeRepo.getDataByDate(startDate,endDate||today,'revenue');
            if (!!val) {
                return res.status(200).json(val);
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },

    async getRevenueMonth(req, res) {
        try {
            const { value } = req.body;
            var d = new Date();
            var priviousMonth = monthNames[d.getMonth() - 1];
            var currentMonth = monthNames[d.getMonth()];
            var priviousOneMonth = monthNames[d.getMonth() - 2];
            var priviousTwoMonth = monthNames[d.getMonth() - 3];
            //  let result = await IncomeRepo.getDataByDate(startDate,endDate||today,'expense');
            if (value == 'One Month') {
                // var currentMonth = monthNames[d.getMonth()];
                let Income = await IncomeRepo.getAllIncomeLocationCurrentMonth(currentMonth);
                var totalValCurrent = 0;
                for (var totalIncome of Income) {
                    totalValCurrent = totalValCurrent + totalIncome.totalAmount;
                }
                return res.status(200).json({
                    [currentMonth]: totalValCurrent });
            } else if (value == 'Two Month') {
                // var d = new Date();            
                //current month
                let Income = await IncomeRepo.getAllIncomeLocationCurrentMonth(currentMonth);
                let totalValCurrent = 0;
                for (var totalIncome of Income) {
                    totalValCurrent = totalValCurrent + totalIncome.totalAmount;
                }
                let Incomes = await IncomeRepo.getAllIncomeLocationCurrentMonth(priviousMonth);
                let totalValPrivious = 0;
                for (var totalIncomes of Incomes) {
                    totalValPrivious = totalValPrivious + totalIncomes.totalAmount;
                }
                return res.status(200).json({
                    [priviousMonth]: totalValPrivious, [currentMonth]: totalValCurrent });
            } else if (value == 'Three Month') {
                let Income = await IncomeRepo.getAllIncomeLocationCurrentMonth(currentMonth);
                let totalValCurrent = 0;
                for (var totalIncome of Income) {
                    totalValCurrent = totalValCurrent + totalIncome.totalAmount;
                }
                let Incomes = await IncomeRepo.getAllIncomeLocationCurrentMonth(priviousMonth);
                let totalValPrivious = 0;
                for (var totalIncomes of Incomes) {
                    totalValPrivious = totalValPrivious + totalIncomes.totalAmount;
                }

                let Income3 = await IncomeRepo.getAllIncomeLocationCurrentMonth(priviousOneMonth);
                let totalValPriviousVal = 0;
                for (var totalIncomeVal of Income3) {
                    totalValPriviousVal = totalValPriviousVal + totalIncomeVal.totalAmount;
                }

                return res.status(200).json({
                    [priviousOneMonth]: totalValPriviousVal, [priviousMonth]: totalValPrivious, [currentMonth]: totalValCurrent });
            } else if (value == 'Four Month') {
                let Income = await IncomeRepo.getAllIncomeLocationCurrentMonth(currentMonth);
                let totalValCurrent = 0;
                for (var totalIncome of Income) {
                    totalValCurrent = totalValCurrent + totalIncome.totalAmount;
                }
                let Incomes = await IncomeRepo.getAllIncomeLocationCurrentMonth(priviousMonth);
                let totalValPrivious = 0;
                for (var totalIncomes of Incomes) {
                    totalValPrivious = totalValPrivious + totalIncomes.totalAmount;
                }

                let Income3 = await IncomeRepo.getAllIncomeLocationCurrentMonth(priviousOneMonth);
                let totalValPriviousVal = 0;
                for (var totalIncomeVal of Income3) {
                    totalValPriviousVal = totalValPriviousVal + totalIncomeVal.totalAmount;
                }
                let Income4 = await IncomeRepo.getAllIncomeLocationCurrentMonth(priviousTwoMonth);
                let totalValPriviousVal4 = 0;
                for (var totalIncomeVal4 of Income4) {
                    totalValPriviousVal4 = totalValPriviousVal4 + totalIncomeVal4.totalAmount;
                }
                return res.status(200).json({
                    [priviousTwoMonth]: totalValPriviousVal4, [priviousOneMonth]: totalValPriviousVal, [priviousMonth]: totalValPrivious, [currentMonth]: totalValCurrent });
            } else if (value == 'Total Month') {
                let Income = await IncomeRepo.getAllIncomeLocation();
                var totalVal = 0;
                for (var totalIncome of Income) {
                    totalVal = totalVal + totalIncome.totalAmount;
                }
                return res.status(200).json({ data: totalVal });
            } else if (value == 'Privious Month') {
                //  var d = new Date();
                //let currentMonth = monthNames[d.getMonth()-1];
                let Income = await IncomeRepo.getAllIncomeLocationCurrentMonth(priviousMonth);
                let totalValCurrent = 0;
                for (var totalIncome of Income) {
                    totalValCurrent = totalValCurrent + totalIncome.totalAmount;
                }
                return res.status(200).json({ data: totalValCurrent });
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },

    async getIncomeMonth(req, res) {
        try {
            const { value, locationId } = req.body;
            var d = new Date();
            var priviousMonth = monthNames[d.getMonth() - 1];
            var currentMonth = monthNames[d.getMonth()];
            var priviousOneMonth = monthNames[d.getMonth() - 2];
            var priviousTwoMonth = monthNames[d.getMonth() - 3];
            //  let result = await IncomeRepo.getDataByDate(startDate,endDate||today,'expense');
            if (value == 'One Month') {
                // var currentMonth = monthNames[d.getMonth()];
                let Income = await IncomeRepo.getOneLocationAllIncome(locationId, currentMonth);
                var totalValCurrent = 0;
                for (var totalIncome of Income) {
                    totalValCurrent = totalValCurrent + totalIncome.totalAmount;
                }
                return res.status(200).json({
                    [currentMonth]: totalValCurrent });
            } else if (value == 'Two Month') {
                // var d = new Date();            
                //current month
                let Income = await IncomeRepo.getOneLocationAllIncome(locationId, currentMonth);
                let totalValCurrent = 0;
                for (var totalIncome of Income) {
                    totalValCurrent = totalValCurrent + totalIncome.totalAmount;
                }
                let Incomes = await IncomeRepo.getOneLocationAllIncome(locationId, priviousMonth);
                let totalValPrivious = 0;
                for (var totalIncomes of Incomes) {
                    totalValPrivious = totalValPrivious + totalIncomes.totalAmount;
                }
                return res.status(200).json({
                    [priviousMonth]: totalValPrivious, [currentMonth]: totalValCurrent });
            } else if (value == 'Three Month') {
                let Income = await IncomeRepo.getOneLocationAllIncome(locationId, currentMonth);
                let totalValCurrent = 0;
                for (var totalIncome of Income) {
                    totalValCurrent = totalValCurrent + totalIncome.totalAmount;
                }
                let Incomes = await IncomeRepo.getOneLocationAllIncome(locationId, priviousMonth);
                let totalValPrivious = 0;
                for (var totalIncomes of Incomes) {
                    totalValPrivious = totalValPrivious + totalIncomes.totalAmount;
                }

                let Income3 = await IncomeRepo.getOneLocationAllIncome(locationId, priviousOneMonth);
                let totalValPriviousVal = 0;
                for (var totalIncomeVal of Income3) {
                    totalValPriviousVal = totalValPriviousVal + totalIncomeVal.totalAmount;
                }

                return res.status(200).json({
                    [priviousOneMonth]: totalValPriviousVal, [priviousMonth]: totalValPrivious, [currentMonth]: totalValCurrent });
            } else if (value == 'Four Month') {
                let Income = await IncomeRepo.getOneLocationAllIncome(locationId, currentMonth);
                let totalValCurrent = 0;
                for (var totalIncome of Income) {
                    totalValCurrent = totalValCurrent + totalIncome.totalAmount;
                }
                let Incomes = await IncomeRepo.getOneLocationAllIncome(locationId, priviousMonth);
                let totalValPrivious = 0;
                for (var totalIncomes of Incomes) {
                    totalValPrivious = totalValPrivious + totalIncomes.totalAmount;
                }

                let Income3 = await IncomeRepo.getOneLocationAllIncome(locationId, priviousOneMonth);
                let totalValPriviousVal = 0;
                for (var totalIncomeVal of Income3) {
                    totalValPriviousVal = totalValPriviousVal + totalIncomeVal.totalAmount;
                }
                let Income4 = await IncomeRepo.getOneLocationAllIncome(locationId, priviousTwoMonth);
                let totalValPriviousVal4 = 0;
                for (var totalIncomeVal4 of Income4) {
                    totalValPriviousVal4 = totalValPriviousVal4 + totalIncomeVal4.totalAmount;
                }
                return res.status(200).json({
                    [priviousTwoMonth]: totalValPriviousVal4, [priviousOneMonth]: totalValPriviousVal, [priviousMonth]: totalValPrivious, [currentMonth]: totalValCurrent });
            } else if (value == 'Total Month') {
                let Income = await IncomeRepo.getOneLocation(locationId);
                var totalVal = 0;
                for (var totalIncome of Income) {
                    totalVal = totalVal + totalIncome.totalAmount;
                }
                return res.status(200).json({ data: totalVal });
            } else if (value == 'Privious Month') {
                //  var d = new Date();
                //let currentMonth = monthNames[d.getMonth()-1];
                let Income = await IncomeRepo.getOneLocationAllIncome(locationId, priviousMonth);
                let totalValCurrent = 0;
                for (var totalIncome of Income) {
                    totalValCurrent = totalValCurrent + totalIncome.totalAmount;
                }
                return res.status(200).json({ data: totalValCurrent });
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },

    async getExpenseMonth(req, res) {
        try {
            const { value } = req.body;


            //  let result = await IncomeRepo.getDataByDate(startDate,endDate||today,'expense');
            if (value == 'One Month') {
                return res.status(200).json({ JUN: 60 });
            } else if (value == 'Two Month') {
                return res.status(200).json({ JUN: 60, MAY: 40 });
            } else if (value == 'Three Month') {
                return res.status(200).json({ JUN: 60, MAY: 30, APIRL: 10 });
            } else if (value == 'Four Month') {
                return res.status(200).json({ JUN: 60, MAY: 30, APIRL: 10, MARCH: 80 });
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },

    async update(req, res) {
        try {
            const { date, revenue, income, expense } = req.body;
            let isUpdated = await IncomeRepo.update(date, revenue, income, expense);
            if (!!isUpdated) {
                return res.status(200).json({ message: "Updated Successfully" });
            }
            return res.status(400).json({ message: 'Bad Request' });
        } catch (error) {
            res.serverError(error);
        }
    },

    async getAllIncomeReport(req, res) {

        try {
            const { fromdate, todate, location } = req.body;
            let allIncome = await IncomeRepo.getIncomeReport(fromdate, todate, location);
            if (!!allIncome) {
                return res.status(200).json(allIncome);
            }
            return res.status(202).json({ message: "data not found" });
        } catch (error) {
            res.serverError(error);
        }
    },

    async getAllList(location) {
        try {
            const list = await IncomeRepo.getAllList(location);
            if (list) {
                return list;
            }
            return { message: 'Something went wrong' };
        } catch (error) {
            return error;
        }
    },




};