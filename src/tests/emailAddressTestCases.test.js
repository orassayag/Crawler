require('../services/files/initiate.service').initiate('test');
const { StatusIcon, TestType } = require('../core/enums');
const { emailAddressesGeneratorService, emailAddressValidationService, logService } = require('../services');
const { logUtils, validationUtils } = require('../utils');

// Email Address Validation //
// ======================== //
const testType = TestType.UPDATES; // Options: VALID / INVALID / RANDOM / UPDATES.
// ======================== //

const testEmailAddressValidation = async (list, isValidTest) => {
    let score = 0;
    let validationResults = [];
    for (let i = 0, length = list.length; i < length; i++) {
        validationResults.push(await emailAddressValidationService.validateEmailAddress(list[i]));
    }
    validationResults = sortResults(isValidTest, validationResults);
    for (let i = 0, length = validationResults.length; i < length; i++) {
        score = setValidationTestResult(isValidTest, validationResults[i], score);
    }
    logService.logScore(list, score);
};

const setValidationTestResult = (isValidTest, validationResult, score) => {
    const { isValid } = validationResult;
    const icon = `${isValid ? `${isValidTest ? StatusIcon.V : StatusIcon.X}` : `${isValidTest ? StatusIcon.X : StatusIcon.V}`} `;
    logUtils.log(logService.createFixResultTemplate(validationResult, icon));
    if (isValidTest) {
        if (isValid) {
            score++;
        }
    }
    else {
        if (!isValid) {
            score++;
        }
    }
    return score;
};

// Sort the results.
const sortResults = (isValidTest, validationResults) => {
    if (isValidTest) {
        validationResults.sort((x, y) => {
            return (x.isValid === y.isValid) ? 0 : x.isValid ? -1 : 1;
        });
    }
    else {
        validationResults.sort((x, y) => {
            return (!x.isValid === !y.isValid) ? 0 : !x.isValid ? -1 : 1;
        });
    }
    return validationResults;
};

(async () => {
    // Validation on enum.
    if (!validationUtils.isValidEnum({
        enum: TestType,
        value: testType
    })) {
        throw new Error('Invalid or no testType parameter was found (1000029)');
    }
    await emailAddressesGeneratorService.initiate();
    let list = null;
    let isValidTest = null;
    switch (testType) {
        case TestType.VALID:
            // ===VALID email addresses=== //
            // If the email address is invalid, show X.
            // If the email address is valid, show V.
            // If the email address was fixed, show V.
            list = emailAddressesGeneratorService.getValidEmailAddress();
            isValidTest = true;
            break;
        case TestType.INVALID:
            // ===INVALID email addresses=== //
            // If the email address is invalid, show V.
            // If the email address is valid, show X.
            // If the email address was fixed, show V.
            list = emailAddressesGeneratorService.getInvalidEmailAddresses();
            isValidTest = false;
            break;
        case TestType.RANDOM:
            // ===RANDOM email addresses=== //
            // If the email address is invalid, show X.
            // If the email address is valid, show V.
            // If the email address was fixed, show V.
            list = await emailAddressesGeneratorService.getRandomEmailAddresses();
            isValidTest = true;
            break;
        case TestType.UPDATES:
            // ===UPDATES (valid) email addresses=== //
            // If the email address is invalid, show X.
            // If the email address is valid, show V.
            // If the email address was fixed, show V.
            list = emailAddressesGeneratorService.getUpdateEmailAddress();
            isValidTest = true;
            break;
        default:
            throw new Error('No testType selected (1000030)');
    }
    // Let the test begin.
    await emailAddressesGeneratorService.done();
    testEmailAddressValidation(list, isValidTest);
})();