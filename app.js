const express = require("express");
const mongoose = require("mongoose")
require("dotenv").config();

const {DB_HOST} = process.env;
const app = express();
mongoose.connect(DB_HOST).then(()=>console.log("Database success connect")).catch(error=>console.log(error.message));

app.listen(4000,()=>console.log("server running"))