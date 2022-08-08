const mysql = require('mysql2');

// const connection =  mysql.createConnection({
//     host: 'so9ugde0k5xq.us-east-4.psdb.cloud',
//     user: '68ol5y6h0tmy',
//     password: 'pscale_pw_HypwxG0pxiZ3H15U_smC5IuubTLZdjqj9BuA14CCJCc',
//     ssl:{}
// });


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

