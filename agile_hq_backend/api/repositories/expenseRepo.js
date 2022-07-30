class expenseRepository {
    constructor() {
        this.expense = sails.models.expense;
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
        
        return await this.expense.updateOne({ id: expenseId }).set(body);
    }

    async delete(expenseId) {
        return await this.expense.updateOne({ id: expenseId }).set({ status : false });

    }


    
     /* *
    * HQCMS REPORT
    */
   
    /* get all  record */
    async findhqcmsRecord(list) {
        return  await this.expense.findOne({ where : { recordid : list.recordid, location: list.location } });
        
    }

    /* create record */
    async findhqcmscreate(record) {
        return  await this.expense.create(record).fetch();
    }

    /* update record */
    async findhqcmsupdate(record) {
        return await this.expense.updateOne({ recordid: record.recordid, location: record.location }).set(record);
    }

}
module.exports = new expenseRepository();
