'use strict'
require('dotenv').config();
const PORT = process.env.PORT ||3001
const express = require('express')
const app = express()
const errorPage = require('./error-handlers/404');
const errorServer = require('./error-handlers/500'); 
const personRouter = require('./routes/person');
const foodRouter = require ('./routes/food')
app.get("/",(req,res)=>{

    res.status(200).send("Hello my name is mohammad")
});









app.use(express.json());
app.use(personRouter) 
app.use(foodRouter) 

app.use('*',(errorPage))
app.use(errorServer)
function start(port){

    app.listen(port,()=>{

        console.log(`I lesening port ${PORT}`)
    })

}
module.exports = {
    app:app,
    start:start,
}