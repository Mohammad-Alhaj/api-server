'use strict';
require('dotenv').config();
const PORT = process.env.PORT ||3001
 const server = require('./src/server')
 
  const {db}= require("./src/models/index")




  db.sync()
 .then(() => {
     // start();
     server.start(PORT);
 })
  .catch(console.error);