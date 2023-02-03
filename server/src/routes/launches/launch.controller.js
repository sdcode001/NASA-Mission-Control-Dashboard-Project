const { getLaunches,addALaunch,deleteALaunch,checkLaunchExist }=require('../../models/launches.model.js')


function getAllLaunches(req,res){
    const launches=getLaunches()
    //checking launches are upcoming or not and setting their upcoming status
    for(let i=0;i<launches.length;i++){
        const currDate=new Date()
        const launchDate=launches[i].launchDate
        if(
            (launchDate.getYear()<currDate.getYear())||
            (launchDate.getYear()==currDate.getYear() && launchDate.getMonth()<currDate.getMonth())||
            (launchDate.getYear()==currDate.getYear() && launchDate.getMonth()==currDate.getMonth() && launchDate.getDay()<currDate.getDay())
        ){launches[i].upcoming=false}
    }
    return res.status(200).json(launches)
}

function postALaunch(req,res){
    const launch=req.body
    if(!launch.mission || !launch.rocket || !launch.destination || !launch.launchDate){
        return res.status(400).json({error:'some launch property is missing'})
    }
    launch.launchDate=new Date(launch.launchDate)
    if(isNaN(launch.launchDate)){
       return res.status(400).json({error:'Invalid launch date'})
    }

    addALaunch(launch)
    return res.status(201).json(launch)
}

function deleteAMission(req,res){
    const id=Number(req.params.id)
    if(!checkLaunchExist(id)){
       return res.status(404).json({error:'Launch not found...'})
    }
   const abortLaunch=deleteALaunch(id)
   return res.status(200).json(abortLaunch)
}


module.exports={
    getAllLaunches,
    postALaunch,
    deleteAMission
}