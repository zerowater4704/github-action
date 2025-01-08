import express from "express";
import dotenv from "dotenv";

const app = express();
const PORT = 3000;
dotenv.config({ path: `.env.${process.env.NODE_ENV || "development"}` });
const nodeEnv = process.env.NODE_ENV;

console.log(`현재 실행 환경: ${nodeEnv}`);

app.get("/", (req, res) => {
  res.send("Hello Docker");
});

app.listen(PORT, () => {
  console.log("server is running");
});
