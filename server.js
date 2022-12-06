const express = require("express");
require("dotenv").config();
const sendMail = require("./nodemailer");

const port = process.env.PORT || 4001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extends: true }));

app.get("/", (req, res) => {
  const form = `<div><form method='POST' action='/' ><h3>send email   </h3><div><p>to email address:</p><input type="email" name='to' /></div><div><p>subject:</p><input type="text" name='subject' /></div><div><p>text</p><textarea name='text' ></textarea></div> <button type='submit'>send</button></form></div>`;
  res.send(form);
});

app.post("/", async (req, res) => {
  console.log("post");
  const { to, subject, text } = req.body;

  try {
    await sendMail(to, subject, text);
    res.send("<h1>send successfully<h1></br><a href='/'>go back</a>");
  } catch (error) {
    console.log(error);
    res.send("something went wrong");
  }
});

app.listen(port, console.log(`server is on port : ${port}`));
