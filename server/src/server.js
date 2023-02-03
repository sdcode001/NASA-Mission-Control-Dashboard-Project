const http=require('http')
const app=require('./app')
const { loadPlanetsData }=require('../src/models/planets.model.js')
const PORT=5000 //because by default port 3000 is busy with clint side.

const server=http.createServer(app)

async function startServer(){
    await loadPlanetsData()

    server.listen(PORT,()=>{
        console.log(`Listening to PORT:${PORT}....`)
    })
}

startServer()
