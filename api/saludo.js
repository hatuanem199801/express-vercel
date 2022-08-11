const express = require("express");
const router = express.Router();
const cors = require('cors')
const app = express();
app.use(cors())

router.get("/", async (req, res) => {
  try {
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
