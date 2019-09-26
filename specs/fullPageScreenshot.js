var fs=require('fs');
describe('Full Page Screenshot', function()
{
	it('how to take full page screenshot in protractor', function() {
        browser.waitForAngularEnabled(false);
        //browser.get("http://demo.automationtesting.in/Register.html");
        browser.get("http://www.google.com/");
        // within a test:
    browser.takeScreenshot().then(function (png) {
        writeScreenShot(png, 'exception.png');
    });


//         browser.takeScreenshot().then(function(fullPageScreenshot)
//         {
// var stream=fs.createWriteStream("./screenshots/FullPage2.png");
// stream.write(new Buffer(fullPageScreenshot,'Base64'));
// stream.end();
//         })
    })
})
        
// abstract writing screen shot to a file
function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
}


