import express from "express";
import product from "./api/product";
const app = express();

app.use("/api/product", product);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
