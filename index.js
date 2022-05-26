const express = require("express");
const app = express();
const product = require("./api/product");
const user = require("./api/user");
const getUsers = require("./api/getUsers");
const getModalidades = require("./api/getModalidades");
const getStatuses = require("./api/getStatuses");




// app.use(express.json({extended: false}));
app.use("/api/product", product);
app.use("/api/user", user);
app.use("/api/getUsers", getUsers);
app.use("/api/getModalidades", getModalidades);
app.use("/api/getStatuses", getStatuses);





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));





