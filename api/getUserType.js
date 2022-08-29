const express = require("express");
const router = express.Router();
var cors = require('cors')
connection = require("../db/conf");
let result;

const app = express();
//const port = process.env.SERVER_PORT || 8000;

// Add Access Control Allow Origin headers




router.get("/:mail", async (req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );

    let email = req.params.mail;
    let query =`select Usuario.tipoUsuario_id, TipoUsuario.nombre, Usuario.nombre from Usuario,TipoUsuario where email = "${email}" and  Usuario.tipoUsuario_id = TipoUsuario.id `;

    try {
        connection.connect();

        connection.query(query  , function(err, rows, fields) {
            if (err) throw err;
            result =rows
            if(result!= undefined) {
                res.json({
                    status: 200,
                    data:result[0],
                    message: "Tipo de usuario encontrado"
                });
            }
            else
            {
                res.json({
                    status: 400,
                    data:false,
                    message: "No se ha podido obtener el tipo",
                });

            }

        });



    } catch (error) {
        console.error(error);
        return res.status(500).send("users Server error");
    }
});
module.exports = router;
// connection.end();

