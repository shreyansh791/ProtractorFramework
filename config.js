exports.config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['./specs/fullPageScreenshot.js'],
    //   seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true
};