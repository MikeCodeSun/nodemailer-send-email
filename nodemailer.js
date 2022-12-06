const nodemailer = require("nodemailer");
require("dotenv").config();

module.exports = async function main(to, subject, text) {
  let transporter = nodemailer.createTransport({
    host: "smtp.rambler.ru",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_ADDRESS,
    to,
    subject,
    text,
  });

  console.log("send ok");
};
