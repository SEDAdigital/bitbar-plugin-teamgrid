let config = require('./config.js');
let request = require('request-promise-native');
let dayjs = require('dayjs');


let promise = request('https://api.teamgridapp.com/times', {
    method: 'GET',
    qs: {
        limit: '1',
        userId: config.teamgrid_userid
    },
    headers: {
        "Authorization": 'Bearer ' + config.teamgrid_token
    },
    dataType: 'json'
});

promise.then(function (response) {
    let json = JSON.parse(response);
    let task = json.data[0];

    request('https://api.teamgridapp.com/tasks/' + task.taskId + '/stopTracking', {
        method: 'POST',
        json: {
            time: dayjs().format()
        },
        headers: {
            "Authorization": 'Bearer ' + config.teamgrid_token
        },
        dataType: 'json'
    }).catch(function (e) {
        console.error('Could not stop timer', e);
    });
});


