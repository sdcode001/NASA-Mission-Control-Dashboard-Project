async function httpGetPlanets() {
  const responce=await fetch('http://localhost:5000/planets')
  const planetsList=await responce.json()
  console.log(planetsList)
  return planetsList
}

async function httpGetLaunches() {
  const responce=await fetch('http://localhost:5000/launches')
  const launchesList=await responce.json()
  console.log(launchesList)
  return launchesList.sort((a,b)=>{
    return a.flightNumber-b.flightNumber
  })
}

async function httpSubmitLaunch(launch) {
  try{
    const responce=await fetch('http://localhost:5000/launches',{
      method:'post',
      headers:{
         'Content-Type':'application/json'
      },
      body:JSON.stringify(launch)
    })
    return responce
  }catch(err){
    return {ok:false}
  } 
}

async function httpAbortLaunch(id) {
  try{
    const responce=await fetch(`http://localhost:5000/launches/${id}`,{method:'delete'})
    return responce
  }catch(err){
    return {ok:false}
  }
   
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};