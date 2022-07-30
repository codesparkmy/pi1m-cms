const { Op, or } = require("sequelize");


class IncomeRepository {
    constructor() {
        this.income = sails.models.income;
        this.cafeId = sails.config.custom.cafeId;
    }

    async create(data) {
        data.locationId = this.cafeId;
        return await this.income.create(data).fetch();
    }

    async getDataByDate(startDate, endDate, dataType) {
        return await this.income.find({
            where: {
                date: { '>=': startDate },
                date: { '<=': endDate }
            },
            select: [dataType]
        });
    }

    async update(date, revenue, income, expense) {
        let data = { revenue, income, expense }
        data.locationId = this.cafeId;
        return await this.income.updateOne({
            where: {
                date: date
            }
        }).set(data);
    }

    async getIncomeReport(fromdate, todate, location) {
        console.log(Date(fromdate))
        return await this.income.find({
            where: {
                createdAt: {
                    '>': new Date(fromdate),
                    '<': new Date(todate)
                },
                locationId: location
            }

        }).populate('locationId');
    }
    async getIncomeBySearch(params) {
        const paramsVal = params

        return await this.income.find({
            or: [{
                    income: paramsVal
                },
                {
                    expenses: paramsVal
                }
            ]
        })
    }
    async getOneLocation(locationId) {
        var income = await this.income.find({ where: { locationId: locationId } });
        return income;
    }
    async getOneLocationAllIncome(locationId, currentMonth) {
        var income = await this.income.find({ where: { locationId: locationId, month: currentMonth } });
        return income;
    }

    async getAllIncomeLocation() {
        var income = await this.income.find();
        return income;
    }

    async getAllIncomeLocationCurrentMonth(currentMonth) {
        var income = await this.income.find({ where: { month: currentMonth } });
        return income;
    }
    async getAll() {
        return await this.income.find();
    }

     /* get all cms  record */ 
   async getAllList(locationId) {
    return  await this.income.find({
            where : {
                locationId : locationId
            }
        });
    }
    

}

module.exports = new IncomeRepository();