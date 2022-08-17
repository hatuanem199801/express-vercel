
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
var cors = require('cors')
connection = require("../db/conf");
let message;
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use(bodyParser.raw());

connection.connect();


app.post('/', function (req, res, next) {

    var email = req.body.email;

    var sql = `delete from Usuario where email like "${email}" `;
    let queryRes=0;
    try {
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows);


            if (result.affectedRows > 0) {
                res.json({
                    status: 200,
                    data: true,
                    message: "el usuario ha sido borrado!!",
                });
            } else {
                res.json({
                        status: 200,
                        data: false,
                        message: "No se pudo eliminar al usuario",
                    }
                );
            }


        });


    } catch (error) {
            console.error(error);
            return res.status(500).send("Server error");
        }




});




module.exports = app;


