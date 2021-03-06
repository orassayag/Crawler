const errorScript = require('./error.script');
require('../services/files/initiate.service').initiate('preload');
const settings = require('../settings/settings');
const packageJson = require(settings.PACKAGE_JSON_PATH);
const globalUtils = require('../utils/files/global.utils');

(() => {
    const dependencies = packageJson.dependencies;
    let isChanged = false;
    if (Object.prototype.hasOwnProperty.call(dependencies, 'puppeteer')) {
        if (!settings.IS_PRODUCTION_MODE) {
            delete dependencies.puppeteer;
            isChanged = true;
        }
    }
    else {
        if (settings.IS_PRODUCTION_MODE) {
            dependencies.puppeteer = settings.NPM_PUPPETEER_VERSION;
            isChanged = true;
        }
    }
    if (isChanged) {
        packageJson.dependencies = dependencies;
        globalUtils.updateFile(settings.PACKAGE_JSON_PATH, packageJson);
        // Delete node_modules directory if exists.
        try {
            globalUtils.deleteDirectoryRecursive(settings.NODE_MODULES_PATH);
        }
        catch (error) { }
        // Remove the package-lock.json in order to refresh it.
        try {
            globalUtils.deleteFile(settings.PACKAGE_LOCK_JSON_PATH);
        } catch (error) { }
    }
})().catch(e => errorScript.handleScriptError(e, 1));