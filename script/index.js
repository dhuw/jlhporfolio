//starting the scripting for the sending of the contact info to jaegers email


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");


const app = express();

app.use(cors());
app.use(bodyParser.json());

// const EMAIL_SENDER = "" need to put in accurate value
// const EMAIL_PASSWORD = "" need to put in accurate value
// const EMAIL_RECIPIENT = "" need to put in accurate value
