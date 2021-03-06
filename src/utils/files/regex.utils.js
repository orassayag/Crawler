/* eslint-disable no-control-regex */
class RegexUtils {

	constructor() {
		this.commonTypos = [{
			pattern: /,com$/,
			fix: str => str.replace(/,com$/, '.com')
		}, {
			pattern: /,co\.\w{2}$/,
			fix: str => str.replace(/,(co\.\w{2}$)/, '.$1')
		}, {
			pattern: /@\w*$/,
			fix: str => `${str}.com`
		}];
		this.punctuation = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
		this.countVowels = /[aeiou]/gi;
		this.detectLetter = /[a-zA-Z]/;
		this.findPackageNameRegex = /^[0-9^.v]*$/g;
		this.cleanAtRegex = /@/g;
		this.cleanSpacesRegex = /\s/g;
		this.cleanAllNoneAlphaNumericRegex = /[^\w.]/gi;
		this.cleanDomainPartRegex = /[^a-zA-Z0-9.-]/g;
		this.cleanLocalPartRegex = /[\\()",:@;<>\[\]]/g;
		this.englishCharactersRegex = /^[a-zA-Z\\-]+$/;
		this.numberCommasRegex = /\B(?=(\d{3})+(?!\d))/g;
		this.findEmailAddressesRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
		this.validateEmailAddressRegex = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
		this.findLinkRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
		this.validateLinkRegex = new RegExp('^(https?:\\/\\/)?' + /* Protocol. */ '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + /* Domain name. */ '((\\d{1,3}\\.){3}\\d{1,3}))' + /* OR IP (v4) Address. */ '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + /* Port and path. */ '(\\?[;&a-z\\d%_.~+=-]*)?' + /* Query string. */ '(\\#[-a-z\\d_]*)?$', 'i'); /* Fragment locator. */
		this.mongoConnectionStringRegex = new RegExp('^(mongodb:\/{2})localhost:(\d*)\/?(.*)');
		this.cleanMultiDots = new RegExp('([.])(?=\\1{1})', 'g');
	}

	createRegex(regex, flag) {
		return new RegExp(regex, flag);
	}
}

module.exports = new RegexUtils();