// 1 import dotenv

//Loads .env file contents into proccess.env file by defaults
require("dotenv").config();

// 2 import express
const express = require("express");

// 3 import

const cors = require("cors");

//import router

const router = require('./Routers/router')

//import connection.js

require('./DB/connections')

// 4 create server
//creates an express application.The express() function is a top-level function exported by the express module

const pfserver = express();

// 5 uses of cors in server

pfserver.use(cors());

// 6 returns middleware that only parses json - javascript Object

//-javascript object

pfserver.use(express.json())

//use of router by server

pfserver.use(router);

//server use uploads folder
//first arg-the way inwhich other application should use this folder
//sec arg - export that folder - express.static

pfserver.use('/uploads',express.static('./uploads'))

// 7 customize the ports - by default - 3000

const PORT = 4000 || process.env;

// 8 to run server
pfserver.listen(PORT, () => {
  console.log(`SERVER RUNNING SUCCESSFULLY AT PORT NUMBER ${PORT}`);
});

//get request
 pfserver.get("/", (req, res) => {
  res.send(
     `<h1 style= color:green>project fair  server runing succesfully and ready to accepts requests for client</h1>`
  );
});

// //post request

// pfserver.post("/", (req, res) => {
//   res.send(
//     `<h1 style= color:green>POST REQUEST</h1>`
//   );
// });

// //put request
// pfserver.put("/", (req, res) => {
//   res.send(
//     `<h1 style= color:green>PUT REQUEST</h1>`
//   );
// });


