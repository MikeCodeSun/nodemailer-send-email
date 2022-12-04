const express = require("express");
require("dotenv").config();

const port = process.env.PORT || 4001;
const app = express();

app.use(express.json());

app.get("/", (_, res) => res.send("hello!"));

app.listen(port, console.log(`server is on port : ${port}`));
