// const express = require("express");
// const mongoose = require("mongoose");
// require("dotenv").config();
// const app = require("./app");

// const { DB_HOST, PORT = 3000 } = process.env;
// const app = express();
// mongoose
//   .connect(DB_HOST)
//   .then(() =>
//     app.listen(PORT, () => console.log("server running on port 3000"))
//   )
//   .catch((error) => {
//     console.log(error.message);
//     process.exit(1);
//   });

const mongoose = require("mongoose");
// require("dotenv").config();

const app = require('./api');

const {DB_HOST, PORT = 3000}=process.env;

mongoose.connect(DB_HOST)
.then(()=>{app.listen(PORT, ()=>console.log("Database connection successful"))})
.catch(error => {
  process.exit(1);
  console.log(error.message);
})
