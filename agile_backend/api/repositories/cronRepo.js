class cronRepository {
    constructor() {
        this.cafeList = sails.models.cafe;
        this.Gender = sails.models.gender;

    }

    async getAllCafeList() {
        return await this.cafeList.find({
            where: {
                status: 1,
            }            
        });
    }

    async clearRecord(locationId) {
        return await this.Gender.find({id:2});
    }
    async genderList() {
        return await this.Gender.find();
    }

}

module.exports = new cronRepository();
