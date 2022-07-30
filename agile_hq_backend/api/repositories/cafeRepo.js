class CafeRepository {
    constructor() {
        this.cafe = sails.models.cafe;
    }
    async getOne(cafeId) {
        const cafe = await this.cafe.findOne({
            where: {
                id: cafeId
            }
        });
        return cafe;
    }
    async getAll(page = 1, limit) {
        var cafes;
        if (limit != "") {
            cafes = await this.cafe.find({
                where: { branchName: limit, status: 1 }
            });
        } else {
            cafes = await this.cafe.find({
                where: { status: 1 }
            });
        }
        return cafes;
    }

    async getAllDetails() {

        const cafes = await this.cafe.find()
        return cafes;
    }


    async getAllBranch() {
        const cafes = await this.cafe.count({});
        return cafes;
    }


    async create(cafe) {
        const result = await this.cafe.create(cafe).fetch();
        return result;
    }
    async update(cafeId, cafe) {
        const result = await this.cafe.updateOne({ id: cafeId }).set(cafe);
        console.log("dffsd", result)
        return result;
    }

    async getOneExist(branchId) {
        const cafe = await this.cafe.findOne({
            where: {
                branchId: branchId
            }
        });
        return cafe;
    }

    async getPDF() {
        var cafes;
        return cafes = await this.cafe.find({
            where: { status: 1 }
        });


    }

}
module.exports = new CafeRepository();