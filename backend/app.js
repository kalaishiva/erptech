//To bring proces.env.PORT
require("dotenv").config();

//Express
const express = require('express');
const app = express();

//Router
const enquiryRoute = require("./Router/enquiryRoutes");

//MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", enquiryRoute);


module.exports = app;