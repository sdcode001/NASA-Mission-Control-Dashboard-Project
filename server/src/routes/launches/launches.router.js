const express=require('express')
const launchRouter=express.Router()
const { getAllLaunches,postALaunch,deleteAMission }=require('./launch.controller.js')


launchRouter.get('/launches',getAllLaunches)
launchRouter.post('/launches',postALaunch)
launchRouter.delete('/launches/:id',deleteAMission)

module.exports={
    launchRouter
}