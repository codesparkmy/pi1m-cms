class VisitorSearchRepository {
    constructor() {
        this.visitor = sails.models.visitor;
    }

    async getAll(data) {

        const result= data;
        console.log(result,"res");
        return await this.visitor.find({name:result});
    }


}

module.exports = new VisitorSearchRepository();
