//To bring proces.env.PORT
require("dotenv").config();

//Express
const express = require('express');

const app = express();
const cors = require("cors");

//const { connectToDb } = require("../backend/database/db");

const { connectToDb } = require("./database/db");

//DB connection
connectToDb();



//MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


//Router
const enquiryRoute = require("./Router/enquiryRoutes");
app.use("/", enquiryRoute);


module.exports = app;