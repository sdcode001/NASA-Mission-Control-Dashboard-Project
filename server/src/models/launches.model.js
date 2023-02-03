const launches=new Map()

let latestFlightNumber=100

const launch={
    flightNumber:100,
    mission:"Kepler Explorer XYZ",
    rocket:"Explorer IS1",
    launchDate:new Date('January 31, 2022'),
    destination:"Kepler-442b",
    customers:["SDCODE","ISRO","NASA"],
    upcoming:true,
    success:true
}

launches.set(launch.flightNumber,launch)

function getLaunches(){
   return Array.from(launches.values())
}

function checkLaunchExist(id){
    return launches.has(id)
}

function addALaunch(launch){
    latestFlightNumber++
    launches.set(latestFlightNumber,
         Object.assign(launch,{
            flightNumber:latestFlightNumber,
            customers:["SDCODE","ISRO","NASA"],
            upcoming:true,
            success:true
         })
    )  
}

function deleteALaunch(id){
     const abortLaunch=launches.get(id)
     abortLaunch.upcoming=false
     abortLaunch.success=false
     return abortLaunch
}


module.exports={
    checkLaunchExist,
    getLaunches,
    addALaunch,
    deleteALaunch
}