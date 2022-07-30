class adminSettingRepository {
    constructor() {
        this.positions = sails.models.positions;
    }
}

module.exports = new adminSettingRepository();
