const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.PLANETSCALE_DB_HOST,
    user: process.env.PLANETSCALE_DB_USERNAME,
    password: process.env.PLANETSCALE_DB_PASSWORD,
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

