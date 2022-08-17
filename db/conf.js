const mysql = require('mysql2');

const connection =  mysql.createConnection({
    host: 'f450gmj9s3zg.us-east-1.psdb.cloud',
    user: 'ndys7fttqowr',
    password: 'pscale_pw_LIJLaV1DHORQ8bo3iOUzQgrsg-hiV5UrGo3W5goKiis',
    ssl:{}
});



connection.connect(function (err) {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log('database is connected');
    }
});

module.exports = connection;

