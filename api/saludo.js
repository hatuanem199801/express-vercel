const express = require("express");
const router = express.Router();
const cors = require('cors')
connection = require("../db/conf");
const app = express();
app.use(cors())

router.get("/", async (req, res) => {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  try {
    connection.connect();

    res.json({
      status: 200,
      message: "server is awake!!!1",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

// Display all users
module.exports = router;
