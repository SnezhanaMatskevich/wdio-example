let webdriverio = require('webdriverio');
let options = {desiredCapabilities: {browserName: 'chrome'}};
let client = webdriverio.remote(options);

client
    .init()
    .setViewportSize({
        width: 1200,
        height: 800
    })
    .url('http://www.webdriveruniversity.com/')
    .getTitle().then((title) => {
    console.log(`Title is: ${title}`);
    })
    .click('#contact-us')
    .pause(3000)
    .end();