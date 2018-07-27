var config = require('../src/settings.js').config();
var webdriverio = require('webdriverio');
var CronJob = require('cron').CronJob;

var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    },
    host: process.env.NOM_CONTENEUR_SELENIUM,
    port: '4444'
};

/**
 * Start CronJob
 */

var browser = webdriverio.remote(options);

// Set the admin cookie first
browser
    .init()
    .url('http://' + config.host + ':' + process.env.PORT_CONTENEUR_SERVEUR_WEB + '/')
    .catch(function(e){
        console.log('Error!')
        console.log(e)
    })
    .setCookie({name: 'sessionID', value: 'kfb45f4g3eher9h'});


// Check the page every 4 seconds
new CronJob('*/4 * * * * *', function() {
    console.log("Cron");
    browser
        .newWindow('http://' + config.host + ':' + process.env.PORT_CONTENEUR_SERVEUR_WEB + '/', 'Challenge XSS Stocke', 'width=420,height=230,resizable,scrollbars=yes,status=1')
        .catch(function(e){
            console.log('Error!')
            console.log(e)
        })
        .close();
}, null, true, 'America/Los_Angeles');