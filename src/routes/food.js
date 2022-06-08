'use strict';

const express = require('express')

const {Food} = require('../models/index')
const foodRouter =  express.Router();


foodRouter.get("/food",getFood)
foodRouter.get("/food/:id",getFoodById)
foodRouter.post('/food',createFood)
foodRouter.put("/food/:id",updateFood)
foodRouter.delete("/food/:id",deleteFood)


async function getFood(req, res) {
    let readFood = await Food.read();
    res.status(200).json(readFood);
}

async function getFoodById (req,res){
    let id =  parseInt(req.params.id);
    let readFoods = await Food.read(id)
    res.status(200).json(readFoods)

}
async function createFood(req,res){
let creats = req.body;
let creatNew = await Food.create(creats)
res.status(201).json(creatNew)

}
async function updateFood(req, res) {
    let ID = parseInt(req.params.id);
    const newUpdate = req.body
    const found = await  Food.read(ID)
 if (found) {
    let updates = await Food.update(newUpdate)
    res.status(201).json(updates)
 }else{
    res.status(404).send("can't find the user or id please enter correct id !")
 }
}

async function deleteFood(req,res){
    let id = parseInt(req.params.id);
    let deleteFood = await Food.delete(id)
    res.status(204).json(deleteFood)
}
module.exports = foodRouter ;

