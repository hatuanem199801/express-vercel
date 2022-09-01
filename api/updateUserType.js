/* POST programming language */
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
    var tipo = req.body.tipo;
    var sql = `UPDATE  Usuario SET  tipoUsuario_id = ${tipo} where email like ${email}`;

    try {
        connection.query(sql, function (err, result) {

            if (err) throw err;
            else
                console.log('record inserted');

            if (result.affectedRows > 0) {
                res.json({
                    status: 200,
                    message: "Tipo de usuario cambiado",
                });
            }
            else
            {
                res.json({
                    status: 500,
                    message: "No se pudo cambiar el tipo de usuario",
                });
            }



        });


    } catch (error) {
            console.error(error);
            return res.status(500).send("Server error");
        }


});



module.exports = app;


