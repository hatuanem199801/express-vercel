const express = require("express");
const router = express.Router();
var cors = require('cors')
connection = require("../db/conf");
let result;

const app = express();
app.use(cors())
//const port = process.env.SERVER_PORT || 8000;

// Add Access Control Allow Origin headers




router.get("/", async (req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );

    try {
        connection.connect();

        connection.query('SELECT * from Usuario', function (err, rows, fields) {
            if (err) throw err;
            console.log('The solution is: ', rows[0]);
            // result =rows
            res.json({
                status: 200,
                message: rows,
            });
        });

       /*  res.json({
            status: 200,
            message: result,
        }); */
    } catch (error) {
        console.error(error);
        return res.status(500).send("users Server error");
    }
});
module.exports = router;
// connection.end();

