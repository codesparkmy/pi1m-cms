class NationalityRepository {
    
    constructor(){
        this.nationality = sails.models.nationality;
        
        this.cafeId = sails.config.custom.cafeId;

    }
    async create(body){
        body.location = this.cafeId;
        return await this.nationality.create(body).fetch();
    }

    async getAll(page,limit){
        const nationalities = await this.nationality.find({
            limit,
            skip:page-1,
            where : {
                status : 1
            }
        });
        return nationalities;
    }

    async getOne(nationalityId) {
        const nationality = await this.nationality.findOne({id:nationalityId, status : 1});
        return nationality;
    }

    async update(nationalityId,body) {
        body.location = this.cafeId;
        let isUpdated = await this.nationality.updateOne({id:nationalityId}).set(body);
        return isUpdated;
    }

    async delete(nationalityId) {
        return  await this.nationality.updateOne({id:nationalityId}).set({ status : false });
        
    }

    /* get all cms  record */ 
   async getAllList(locationId) {
    return  await this.nationality.find({
            where : {
                location : locationId
            }
        });
    }

    


}

module.exports = new NationalityRepository();