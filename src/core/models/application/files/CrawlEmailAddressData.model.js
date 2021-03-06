class CrawlEmailAddressDataModel {

	constructor(activeSearchEngineNames) {
		this.saveCount = 0;
		this.totalCount = 0;
		this.databaseCount = 0;
		this.existsCount = 0;
		this.invalidCount = 0;
		this.validFixCount = 0;
		this.invalidFixCount = 0;
		this.unsaveCount = 0;
		this.filterCount = 0;
		this.skipCount = 0;
		this.gibberishCount = 0;
		this.statistics = activeSearchEngineNames.reduce((acc, cur) => ({ ...acc, [cur]: 0 }), {});
	}

	updateEmailAddressData(emailAddressesResultModel, searchEngineName) {
		const { saveCount, totalCount, existsCount, invalidCount, validFixCount,
			invalidFixCount, unsaveCount, filterCount, skipCount, gibberishCount } = emailAddressesResultModel;
		// Update all the data.
		this.saveCount += saveCount;
		this.totalCount += totalCount;
		this.databaseCount += saveCount;
		this.existsCount += existsCount;
		this.invalidCount += invalidCount;
		this.validFixCount += validFixCount;
		this.invalidFixCount += invalidFixCount;
		this.unsaveCount += unsaveCount;
		this.filterCount += filterCount;
		this.skipCount += skipCount;
		this.gibberishCount += gibberishCount;
		this.statistics[searchEngineName] += saveCount;
	}
}

module.exports = CrawlEmailAddressDataModel;