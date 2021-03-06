class EmailAddressStatusModel {

    constructor(validationResultModel) {
        this.validationResultModel = validationResultModel;
        this.logStatus = null;
        this.isSave = false;
        this.isExists = false;
        this.isInvalid = false;
        this.isValidFix = false;
        this.isInvalidFix = false;
        this.isFilter = false;
        this.isUnsave = false;
        this.isGibberish = validationResultModel.isGibberish;
    }
}

module.exports = EmailAddressStatusModel;