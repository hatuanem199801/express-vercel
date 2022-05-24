const express = require("express");
const router = express.Router();
const mysql = require('mysql2');
let result;


const connection = mysql.createConnection({

});






router.get("/", async (req, res) => {
    try {
        connection.connect();

        connection.query('SELECT * from Usuario'  , function(err, rows, fields) {
            if (err) throw err;
            console.log('The solution is: ', rows[0]);
            result =rows[0]
        });

        res.json({
            status: 200,
            message: result,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("users Server error");
    }
});



module.exports = router;
// connection.end();

