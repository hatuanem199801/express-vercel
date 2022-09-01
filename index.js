const express = require("express");
const app = express();
const product = require("./api/product");
const user = require("./api/user");
const getUsers = require("./api/getUsers");
const getModalidades = require("./api/getModalidades");
const getStatuses = require("./api/getStatuses");
const saludo    = require("./api/saludo")
const reg    = require("./api/getRegistros")
const saveUser    = require("./api/saveUser")
const validateUser    = require("./api/validateUser")
const deleteUser    = require("./api/deleteUser")
const getUsertype    = require("./api/getUserType")
const getDocentes   = require("./api/getDocentes")
const updateUserType   = require("./api/updateUserType")


// app.use(express.json({extended: false}));
app.use("/api/product", product);
app.use("/api/user", user);
app.use("/api/getUsers", getUsers);
app.use("/api/getModalidades", getModalidades);
app.use("/api/getStatuses", getStatuses);
app.use("/api/saludar", saludo);
app.use("/api/getRegistros", reg);
app.use("/api/saveUser", saveUser);
app.use("/api/validateUser", validateUser);
app.use("/api/deleteUser", deleteUser);
app.use("/api/getUserType", getUsertype);
app.use("/api/getDocentes", getDocentes);
app.use("/api/updateUserType", updateUserType);





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));





