let config = require('./config.js');
let request = require('request-promise-native');
let dayjs = require('dayjs');
let args = process.argv.slice(2);

request('https://api.teamgridapp.com/tasks/' + args[0] + '/startTracking', {
    method: 'POST',
    json: {
        userId: config.teamgrid_userid,
        time: dayjs().format()
    },
    headers: {
        "Authorization": 'Bearer ' + config.teamgrid_token
    },
    dataType: 'json'
}).catch(function (e) {
    console.error('Could not start timer', e);
});



