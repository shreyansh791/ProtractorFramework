var fs=require('fs');
describe('ele Screenshot', function()
{
	it('how to take ele screenshot in protractor', function() {
        browser.waitForAngularEnabled(false);
        browser.get("http://demo.automationtesting.in/Register.html");
        var logo=element(by.id('imagetrgt'));
        logo.takeScreenshot().then(function(eleScreenshot)
        {
var stream=fs.createWriteStream("./screenshots/element.png");
stream.write(new Buffer(eleScreenshot,'Base64'));
stream.end();
        })
    })
    
    
})