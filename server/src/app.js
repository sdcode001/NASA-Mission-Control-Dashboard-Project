const express=require('express')
const planetRouter=require('./routes/planets/planets.router.js')
const { launchRouter }=require('./routes/launches/launches.router.js')
const cors=require('cors')
const app=express()
const morgan=require('morgan')

app.use(cors({
    origin:'http://localhost:3000'
}))
//using morgan for logging the requests
app.use(morgan('combined'))

app.use(express.json())
app.use(planetRouter)
app.use(launchRouter)






module.exports=app
    
