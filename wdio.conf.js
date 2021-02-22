exports.config = {
    services: [
        [
            "lambdatest",
            {
                tunnel: false,
                lambdatestOpts: {
                    logFile: "tunnel.log"
                }
            }
        ]
    ],
    user: 'g-a.iftode@metro.digital',
    key: 'ZhUnbkK3LHtsogffPeZ2WsY0PCsm6Mt8nZ3Y87MONjuJ5nZcrc',
    suites: {

        LambdaTest: [
            './test/specs/tests/testLambda.js',
            //'./test/specs/tests/testLambda2.js',
        ],
    },
    exclude: [],

    capabilities: [
        {
            browserName: "chrome",
            version: "latest",
            name: "Test WebdriverIO Single",
            build: "Webdriver IO 5.2"
        }
    ],
    logLevel: "error",
    coloredLogs: true,
    screenshotPath: "./errorShots/",
    baseUrl: "",
    waitforTimeout: 100000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 1,
    path: "/wd/hub",
    hostname: "hub.lambdatest.com",
    port: 80,
    framework: "mocha",
    mochaOpts: {
        ui: "bdd",
        timeout: 60000
    }
};
