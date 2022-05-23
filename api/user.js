const express = require("express");
const router = express.Router();
mysqlConnection = require("../data/config");



//
// router.get("/", async (req, res) => {
//     try {
//         res.json({
//             status: 200,
//             message: "Get data has useerss",
//         });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).send("users Server error");
//     }
// });


// GET all Employees

// // GET all Employees
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM employee', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;