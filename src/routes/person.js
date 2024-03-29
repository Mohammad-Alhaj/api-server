'use strict';


const express = require('express')
const {Person} = require('../models/index')

const personRouter =  express.Router();


personRouter.get("/person",(perosnAll))
personRouter.get("/person/:id",(getUserById))
personRouter.post("/person",(perosnAlls))
personRouter.delete("/person/:id",(deleteperson))
personRouter.put("/person/:id",(updateperson))
personRouter.get("/test/:name",testIdReading)

async function perosnAll(req, res) {
    let customer = await Person.read();
    res.status(200).json(customer);
}


async function getUserById (req,res){
    let id =   parseInt(req.params.id);
   let readUser = await Person.read(id)
    res.status(200).json(readUser)

}
async function perosnAlls(req,res){
    let creat = req.body;
    let creatNew = await Person.create(creat)
    res.status(201).json(creatNew)
}


async function deleteperson(req,res){
    let id =  parseInt(req.params.id);
    let deleteperson = await Person.delete(id)
    let test = res.status(204)
    // console.log( test);
    console.log( {deleteperson});

}

async function updateperson(req, res) {
    let ID = parseInt(req.params.id);
    const newUpdate = req.body
    const found = await  Person.read(ID)
 if (found) {
    let updates = await Person.update(newUpdate)
    res.status(201).json(updates)
 }else{
    res.status(404).send("can't find the user or id please enter correct id !")
 }
}

async function testIdReading(req,res){
    let resding = req.params.name;
    console.log(resding);
    let readings = await Person.readByid(resding) ;
    res.status(200).json(readings)
}

module.exports = personRouter ;