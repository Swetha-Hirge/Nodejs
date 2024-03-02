const {parse} = require('csv-parse')
/*streaming scalability by treating our data as a stream from the source to the destination
In Node, all streams are implemented using the event emitter, where the events are emitted by node,

and we just react to the events on that stream using the on function.*/
const fs = require('fs')
const habitablePlanates = []
function isHaitablePlanet(planet){
    return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 
    && planet['koi_prad'] < 1.6
}
fs.createReadStream('kepler_data.csv')
.pipe(parse({
    comment:'#',
    columns:true
}))
.on('data',(data)=>{
    if(isHaitablePlanet(data)){
     habitablePlanates.push(data)
    }
})
.on('error',(err)=>{
    console.log(err)
})
.on('end',()=>{
    console.log(habitablePlanates.map((planet) =>{
        return  planet['kepler_name']
    }))
    console.log(`${habitablePlanates.length} habitable planets`)
    console.log("done")
})