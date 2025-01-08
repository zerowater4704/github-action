"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
// dotenv.config({ path: `.env.${process.env.NODE_ENV || "development"}` });
// const nodeEnv = process.env.NODE_ENV;
// console.log(`현재 실행 환경: ${nodeEnv}`);
app.get("/", (req, res) => {
    res.send("Hello Docker");
});
app.listen(PORT, () => {
    console.log("server is running");
});
