const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        res.json({
            status: 200,
            message: "Get data has useers",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("users Server error");
    }
});



module.exports = router;