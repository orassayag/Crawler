const pathUtils = require('../utils/files/path.utils');
const { GoalType } = require('../core/enums/files/system.enum');

const innerSettings = {
    // ===FLAGS=== //
    // Determine if to run for a long time. Settings this to true, will take a bigger
    // values, enable to the crawler to run for a long time without any interaption.
    IS_LONG_RUN: true,
    // Determine if the debug the monitor after 1 minute, to test if it works.
    IS_DEBUG_MONITOR: false,
    // If it's true, change the name of the Mongo database
    // something elses, to enable the crawler to run not on the production Mongo database.
    IS_TEST_PRODUCTION_MONGO_DATABASE: true
};

const settings = {
    // ===FLAGS=== //
    // Determine if to load local sources (engine and pages) in development mode (=this value false) or to do real requests for
    // sources with puppeteer.js NPM package in production mode (=this value true).
    IS_PRODUCTION_MODE: true,
    // Determine if to drop the collection before the process run begins. Good for test mode.
    IS_DROP_COLLECTION: false,
    // Determine if to log the status of process instead of the console status line.
    IS_STATUS_MODE: false,
    // Determine if to clear the dist directory according to the current mode.
    IS_EMPTY_DIST_DIRECTORY: false,
    // Determine if to run the domains counter script in the end of all the processes.
    IS_RUN_DOMAINS_COUNTER: false,
    IS_LONG_RUN: innerSettings.IS_LONG_RUN,

    // ===GOAL=== //
    // Determine the goal type which the application will run on, and determine by it when to stop the application.
    GOAL_TYPE: GoalType.MINUTES, // Options: EMAIL_ADDRESSES / MINUTES / LINKS.
    // Determine the maximum value count to reach, until to stop running processes.
    // What will come first - MAXIMUM_SEARCH_PROCESSES_COUNT - or this.
    GOAL_VALUE: innerSettings.IS_LONG_RUN ? 700 : 1,

    // ===SEARCH=== //
    // Determine if to search in the search engines by a static search key.
    // If null, will be random generated search key each process.
    SEARCH_KEY: null,
    // Determine if to use basic search keys from the 'basic' array and logic, or
    // to user the advance keys from the 'advance' array and logic.
    IS_ADVANCE_SEARCH_KEYS: true,

    // ===STEPS=== //
    // Determine if to do the logic of crawl links by search engines.
    IS_LINKS_STEP: true,
    // Determine if to do the logic of crawl email addresses from page's sources.
    IS_CRAWL_STEP: true,
    // Determine if to active the SKIP logic in the crawl step, that detailed in above the
    // MAXIMUM_UNIQUE_DOMAIN_COUNT parameter.
    IS_SKIP_LOGIC: innerSettings.IS_TEST_PRODUCTION_MONGO_DATABASE ? true : false,

    // ===MONITOR=== //
    // Determine the number of minutes that the application will continue to run without
    // any change in the total or saved email addresses count.
    // If exceeded the application will exit and restart.
    MAXIMUM_MINUTES_WITHOUT_UPDATE: innerSettings.IS_DEBUG_MONITOR ? 1 : 20,
    // Determine the maximum number of restarts of the monitor if the application exit.
    MAXIMUM_RESTARTS_COUNT: 50,

    // ===LOGS=== //
    // Determine if to log valid email addresses to a TXT file.
    IS_LOG_VALID_EMAIL_ADDRESSES: true,
    // Determine if to log fix email addresses to a TXT file.
    IS_LOG_FIX_EMAIL_ADDRESSES: true,
    // Determine if to log invalid email addresses to a TXT file.
    IS_LOG_INVALID_EMAIL_ADDRESSES: true,
    // Determine if to log unsave email addresses to a TXT file.
    IS_LOG_UNSAVE_EMAIL_ADDRESSES: true,
    // Determine if to log crawl links to a TXT file.
    IS_LOG_CRAWL_LINKS: true,
    // Determine if to log crawl error links to a TXT file.
    IS_LOG_CRAWL_ERROR_LINKS: true,
    // Determine the maximum number of charecters to set to the fix log to make it prettify.
    MAXIMUM_FIX_LOG_SPACES_CHARECTERS_COUNT: 25,

    // ===COUNTS & LIMITS=== //
    // Determine how much time (in minutes) to wait until start the crawl process. It's good
    // if the user want to delay the start of the process. If it's 0 - No schedule will take place.
    SCHEDULE_MINUTES_COUNT: 0,
    // Determine how many processes to run during a single life time of the application.
    MAXIMUM_SEARCH_PROCESSES_COUNT: innerSettings.IS_LONG_RUN ? 10000 : 10,
    // Determine how many pages to pager with the search engine during a single process.
    MAXIMUM_SEARCH_ENGINE_PAGES_PER_PROCESS_COUNT: 1,
    // Determine the maximum count of characters of the search key.
    MAXIMUM_SEARCH_KEY_CHARACTERS_COUNT: 200,
    // Determine the minimum count of characters of the search key.
    MINIMUM_SEARCH_KEY_CHARACTERS_COUNT: 5,
    // Determine the maximum retries count to generate the search key in case it exceeded the limits.
    MAXIMUM_RETRIES_GENERATE_SEARCH_KEY_COUNT: 10,
    // Determine how many characters of the display search key to display on the console.
    MAXIMUM_DISPLAY_SEARCH_KEY_CHARACTERS_COUNT: 60,
    // Determine how much milliseconds interval to run to calculate the time of the
    // status line in the console.
    MILLISECONDS_INTERVAL_COUNT: 500,
    // Determine how much milliseconds to delay between each process.
    MILLISECONDS_DELAY_BETWEEN_PROCESS_COUNT: 1000,
    // Determine how much milliseconds to delay between each search engine paging.
    MILLISECONDS_DELAY_BETWEEN_SEARCH_PAGES_COUNT: 1000,
    // Determine how much milliseconds to delay between each crawl of page.
    MILLISECONDS_DELAY_BETWEEN_CRAWL_PAGES_COUNT: 1000,
    // Determine the milliseconds count between each action (check if exists and insert)
    // within the Mongo database.
    MILLISECONDS_DELAY_MONGO_DATABASE_SYNC_COUNT: 10,
    // Determine the milliseconds count timeout to wait for answer to get the page or engine source.
    MILLISECONDS_TIMEOUT_SOURCE_REQUEST_COUNT: 60000,
    // Determine the maximum characters for a long line in the console.
    MAXIMUM_CONSOLE_LINE_CHARACTERS: 130,
    // Determine the maximum email addresses count to display in the trending save on the console.
    MAXIMUM_TRENDING_SAVE_COUNT: 5,
    // Determine how much milliseconds to delay the second npm i command on 'io' script.
    MAXIMUM_DELAY_NPM_SCRIPT: 200,
    // Determine the maximum number of times to retry to save the email address to the Mongo database.
    MAXIMUM_SAVE_EMAIL_ADDRESS_RETRIES_COUNT: 5,
    // Determine the maximum error page in a row to stop the application from continue running.
    MAXIMUM_ERROR_PAGE_IN_A_ROW_COUNT: 10,
    // Determine the maximum unsave email addresses count to stop the application from continue running.
    MAXIMUM_UNSAVE_EMAIL_ADDRESSES_COUNT: 2,
    // Determine the maximum unique domain count in a single page process per domain.
    // If exceeded, the rest of the email addresses with the domain are skipped.
    // (This, of course, not include common domains like gmail, hotmail, ect.)
    MAXIMUM_UNIQUE_DOMAIN_COUNT: 3,

    // ===ROOT PATHS=== //
    // Determine the application name used for some of the calculated paths.
    APPLICATION_NAME: 'Crawler',
    // Determine the path for the directory of which a secondary backup will be created.
    // (Working example: 'G:\\Or\\Web\\Crawler').
    SECONDARY_BACKUP_PATH: 'G:/Or/Web/Crawler',
    // Determine the path for the outer application, where other directories located, such as backups, sources, etc..
    // (Working example: 'C:\\Or\\Web\\Crawler\\').
    OUTER_APPLICATION_PATH: pathUtils.getJoinPath({
        targetPath: __dirname,
        targetName: '../../../'
    }),
    // Determine the inner application path where all the source of the application is located.
    // (Working example: 'C:\\Or\\Web\\Crawler\\Crawler\\').
    INNER_APPLICATION_PATH: pathUtils.getJoinPath({
        targetPath: __dirname,
        targetName: '../../'
    }),

    // ===DYNAMIC PATHS=== //
    // All the these paths will be calculated during runtime in the initiate service.
    // DON'T REMOVE THE KEYS, THEY WILL BE CALCULATED TO PATHS DURING RUNTIME.
    // Determine the application path where all the source of the application is located.
    // (Working example: 'C:\\Or\\Web\\Crawler\\Crawler').
    APPLICATION_PATH: 'Crawler',
    // Determine the backups directory which all the local backup will be created to.
    // (Working example: 'C:\\Or\\Web\\Crawler\\Backups').
    BACKUPS_PATH: 'Backups',
    // Determine the dist directory path which there, all the outcome of the crawling will be created.
    // (Working example: 'C:\\Or\\Web\\Crawler\\Crawler\\dist').
    DIST_PATH: 'dist',
    // Determine the sources directory path which there, all the sources are taken in development mode.
    // (Working example: 'C:\\Or\\Web\\Crawler\\Crawler\\sources').
    SOURCES_PATH: 'sources',
    // Determine the directory path of the node_modules, do refresh each time switching from development and production modes.
    // (Working example: 'C:\\Or\\Web\\Crawler\\Crawler\\node_modules').
    NODE_MODULES_PATH: 'node_modules',
    // Determine the directory of the package.json to update each time switching
    // from development and production modes (add/remove Puppeeter.js NPM package).
    // (Working example: 'C:\\Or\\Web\\Crawler\\Crawler\\package.json').
    PACKAGE_JSON_PATH: 'package.json',
    // Determine the path of the package-lock.json to remove it each time switching from development and production modes.
    // (Working example: 'C:\\Or\\Web\\Crawler\\Crawler\\package-lock.json').
    PACKAGE_LOCK_JSON_PATH: 'package-lock.json',
    // Determine the path where the crawler sometimes download files (like cvs, doc, ect) to crawl them locally
    // and which they will be deleted from after each process.
    // (Working example: 'C:\\Users\\Or\\Downloads').
    DOWNLOADS_PATH: `${process.env.USERPROFILE}\\Downloads`,

    // ===BACKUP=== //
    // Determine the directories to ignore when an backup copy is taking place.
    // For example: 'dist'.
    IGNORE_DIRECTORIES: ['dist', 'node_modules'],
    // Determine the files to ignore when the back copy is taking place.
    // For example: 'back_sources_tasks.txt'.
    IGNORE_FILES: ['back_sources_tasks.txt', 'sources_tasks.txt'],
    // Determine the files to force include when the back copy is taking place.
    // For example: '.gitignore'.
    INCLUDE_FILES: ['.gitignore'],
    // Determine the period of time in milliseconds to
    // check that files were created / moved to the target path.
    MILLISECONDS_DELAY_VERIFY_BACKUP_COUNT: 1000,
    // Determine the number of time in loop to check for version of a backup.
    // For example, if a backup name "test-test-test-1" exists, it will check for "test-test-test-2",
    // and so on, until the current maximum number.
    BACKUP_MAXIMUM_DIRECTORY_VERSIONS_COUNT: 50,

    // ===MONGO DATABASE=== //
    // Determine the connection string path of the Mongo database.
    MONGO_DATABASE_CONNECTION_STRING: 'mongodb://localhost:27017/',
    // Determine the Mongo database name.
    MONGO_DATABASE_NAME: innerSettings.IS_TEST_PRODUCTION_MONGO_DATABASE ? 'test' : 'crawl',
    // Determine the Mongo collection name.
    MONGO_DATABASE_COLLECTION_NAME: 'emailaddresses',
    // Determine the maximum number of times to retry to drop the collection.
    MAXIMUM_DROP_COLLECTION_RETRIES_COUNT: 5,
    // Determine if to use better connection topology
    IS_MONGO_DATABASE_USE_UNIFILED_TOPOLOGY: true,
    // Determine if to use the new URL parser to connect to the Mongo database.
    IS_MONGO_DATABASE_USE_NEW_URL_PARSER: true,
    // Determine if to use indexes automatically created by the Mongo database.
    IS_MONGO_DATABASE_USE_CREATE_INDEX: true,
    // Determine the maximum poolSize for each individual server or proxy connection.
    MONGO_DATABASE_POOL_SIZE_COUNT: 20,
    // Determine the TCP Socket timeout setting.
    MONGO_DATABASE_SOCKET_TIMEOUT_MILLISECONDS_COUNT: 480000,
    // Determine the number of milliseconds to wait before initiating keepAlive on the TCP socket.
    MONGO_DATABASE_KEEP_ALIVE_MILLISECONDS_COUNT: 300000,
    // Determine if to use SSL connection (needs to have a mongod server with SSL support).
    IS_MONGO_DATABASE_SSL: false,
    // Determine if to validate mongod server certificate against CA (needs to have a mongod server with SSL support, 2.4 or higher).
    IS_MONGO_DATABASE_SSL_VALIDATE: false,

    // ===PACKAGES=== //
    // Determine the version number of the Puppeteer.js NPM package to implement in the package.json in the pre-load script.
    NPM_PUPPETEER_VERSION: '^5.5.0',

    // ===VALIDATION=== //
    // Determine the link address to test the internet connection.
    VALIDATION_CONNECTION_LINK: 'google.com',

    // ===TESTS=== //
    // Determine the minimum number of email addresses to create in case of random validation test.
    MINIMUM_CREATE_RANDOM_EMAIL_ADDRESSES_COUNT: 100,
    // Determine the maximum number of email addresses to create in case of random validation test.
    MAXIMUM_CREATE_RANDOM_EMAIL_ADDRESSES_COUNT: 500,
    // Determine the minimum typos count to create with special charecters.
    MINIMUM_SPECIAL_CHARECTERS_TYPOS_EMAIL_ADDRESSES_COUNT: 10,
    // Determine the maximum typos count to create with special charecters.
    MAXIMUM_SPECIAL_CHARECTERS_TYPOS_EMAIL_ADDRESSES_COUNT: 50,
    // Determine the minimum number of special charecter to insert in a typo.
    MINIMUM_SPECIAL_CHARECTERS_COUNT: 1,
    // Determine the maximum number of special charecter to insert in a typo.
    MAXIMUM_SPECIAL_CHARECTERS_COUNT: 3,
    // Determine the maximum number of charecters of the local part simple email address to generate in test cases.
    MAXIMUM_LOCAL_TEST_SIMPLE_CHARACTERS_COUNT: 10,
    // Determine the maximum number of charecters of the domain part simple email address to generate in test cases.
    MAXIMUM_DOMAIN_TEST_SIMPLE_CHARACTERS_COUNT: 8,
    // Determine the minimum number of times to replace charecters in a random position in an email address part.
    MINIMUM_REPLACE_RANDOM_POSITIONS_COUNT: 1,
    // Determine the maximum number of times to replace charecters in a random position in an email address part.
    MAXIMUM_REPLACE_RANDOM_POSITIONS_COUNT: 5,
    // Determine the minimum number of words to create a dynamic test string to local or domain parts of the email address.
    MINIMUM_TEST_RANDOM_WORDS_COUNT: 1,
    // Determine the maximum number of words to create a dynamic test string to local or domain parts of the email address.
    MAXIMUM_TEST_RANDOM_WORDS_COUNT: 10,
    // Determine the minimum number of characters to create a random part of an email address.
    MINIMUM_RANDOM_PART_CHARACTERS_COUNT: 5,

    // ===EMAIL ADDRESS=== //
    // Determine the minimum characters count of the local part.
    MINIMUM_LOCAL_PART_CHARACTERS_COUNT: 1,
    // Determine the minimum characters count of the domain part.
    MINIMUM_DOMAIN_PART_CHARACTERS_COUNT: 5,
    // Determine the minimum characters count of the email address.
    MINIMUM_EMAIL_ADDRESS_CHARACTERS_COUNT: 5,
    // Determine the maximum number of a common domain local part characters count.
    MAXIMUM_COMMON_DOMAIN_LOCAL_PART_CHARACTERS_COUNT: 1,
    // Determine the minimum length of the short string in a close typo check in the validation email service.
    MINIMUM_SHORT_STRING_CHARACTERS_COUNT: 3,

    // ===UNCHANGED SETTINGS=== //
    // ========================================
    // DON'T CHANGE THESE SETTINGS IN ANY CASE!
    // ========================================
    // Determine the maximum characters count of the local part.
    MAXIMUM_LOCAL_PART_CHARACTERS_COUNT: 64,
    // Determine the maximum characters count of the domain part.
    MAXIMUM_DOMAIN_PART_CHARACTERS_COUNT: 255,
    // Determine the maximum characters count of the email address.
    MAXIMUM_EMAIL_ADDRESS_CHARACTERS_COUNT: 320
};

module.exports = settings;