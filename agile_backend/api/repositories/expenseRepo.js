class expenseRepository {
    constructor() {
        this.expense = sails.models.expense;
        this.cafeId = sails.config.custom.cafeId;
    }

    async getAll(skip = 1, limit = 10) {
        var list = await this.expense.find({
            where: {
                status: 1,
            }            
        }).sort('name ASC');
        return list;
    }

    async create(body) {
        body.location = this.cafeId;
        return  await this.expense.create(body).fetch();
    }

    async getOne(expenseId) {
        return  await this.expense.find({
            where: {
                id : expenseId
            }            
        });
        
    }
    async findByName(expense) {
        return  await this.expense.find(expense);
    }

    async update(expenseId, body) {
        body.location = this.cafeId;
        return await this.expense.updateOne({ id: expenseId }).set(body);
    }

    async delete(expenseId) {
        return await this.expense.updateOne({ id: expenseId }).set({ status : false });

    }

     /* *
    * HQCMS REPORT
    */
   
   /* get all cms  record */ 
   async getAllList(locationId) {
    return  await this.expense.find({
            where : {
                location : locationId
            }
        });
    }



}
module.exports = new expenseRepository();
