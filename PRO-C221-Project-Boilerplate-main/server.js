const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

var nodemailer = require('nodemailer')

var transporter = nodemailer.createTestAccount({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
        user: 'something@gmail.com',
        pass: 'nothing@123'
    },
    secure: true
})

server.listen(process.env.PORT || 3030);