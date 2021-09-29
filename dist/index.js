"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var product_1 = __importDefault(require("./api/product"));
var app = (0, express_1.default)();
app.use("/api/product", product_1.default);
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () { return console.log("Server is running in port " + PORT); });
//# sourceMappingURL=index.js.map