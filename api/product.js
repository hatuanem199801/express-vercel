const express = require("express");
const router = express.Router();
const pkg = require("../package.json")

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/", async (req, res) => {
  try {
    res.json({
      header: pkg.version + ":"+ new Date(),
      message: ": A random inspirational quote: "
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
