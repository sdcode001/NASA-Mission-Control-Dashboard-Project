const parser = require('csv-parse');
const fs = require('fs');

function isHabitable(planet){
    return planet['koi_disposition']=='CONFIRMED' && planet['koi_insol']>0.36 && planet['koi_insol']<1.11 && planet['koi_prad']<1.6;
}

const planets = []; //it stores only habitable planets.

function loadPlanetsData(){
  return new Promise((resolve,reject)=>{
    fs.createReadStream('kepler_data.csv')
    .pipe(parser.parse({
      comment: '#',
      columns: true,
    }))
    .on('data', (data) => {
      //cheacking habitability of planet.
      if(isHabitable(data)){
          planets.push(data);
      }
    })
    .on('error', (err) => {
      console.log(err);
      reject(err)
    })
    .on('end', () => {
      console.log(`${planets.length} habitable planets found. \n`);
      resolve()
    });
  })
}



  module.exports={
    loadPlanetsData,
    planets
  }
  