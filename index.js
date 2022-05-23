const express = require("express");
const app = express();
const product = require("./api/product");
const user = require("./api/user");
// app.use(express.json({ extended: false }));
app.use("/api/product", product);
app.use("/api/user", user);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
