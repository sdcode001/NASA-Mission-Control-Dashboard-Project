const express=require('express')
const PlanetsController=require('./planet.controller')
const planetRouter=express.Router()

planetRouter.get('/planets',PlanetsController.getAllPlanets)




module.exports=planetRouter