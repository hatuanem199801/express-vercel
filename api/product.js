const express = require("express");
const router = express.Router();
var cors = require('cors')

router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "Get data has successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

// Display all users
module.exports = router;
