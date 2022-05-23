const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'ylr27dwm6q6a.us-east-1.psdb.cloud',
    // host:'127.0.0.1:53918',
    user: '4vm3cpaf3lir',
    password: 'pscale_pw_ELYKgz0nkqWWYlA13fi34Ehhg7WpFlgoHCZMl9CZVDI',
    database: 'proyectosterminales',
     multipleStatements: true
});


mysqlConnection.connect(function (err) {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log('db is connected');
    }
});

module.exports = mysqlConnection;

