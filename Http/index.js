const http = require('http')
const PORT =3000
const server = http.createServer((req,res)=>{
    /*here the request and response are the streams where we can stream the request and response using .on()
    where the req stream is readable and the res stream is writable*/
    res.writeHead(200, {
        // "Content-Type" : "text/plain", //set headers
        "Content-Type" : "application/json", //set header or pass javasript object
    })
    res.end(JSON.stringify({ 
        id:1,
        name:'Hello! sir Isaac Newton is your friend!'
    }))//data passing back to ther browser it can be empty
    
})
server.listen(PORT, ()=>{
    console.log(`listing on port ${PORT}...`)
}) //tell our server to listen to request