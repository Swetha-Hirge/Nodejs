const http = require('http')
const PORT = 3000
// const server = http.createServer((req,res)=>{
//     /*here the request and response are the streams where we can stream the request and response using .on()
//     where the req stream is readable and the res stream is writable*/
//     res.writeHead(200, {
//         // "Content-Type" : "text/plain", //set headers
//         "Content-Type" : "application/json", //set header or pass javasript object
//     })
//     res.end(JSON.stringify({ 
//         id:1,
//         name:'Hello! sir Isaac Newton is your friend!'
//     }))//data passing back to ther browser it can be empty

// })

const server = http.createServer((req, res) => {
    /** http handelers or the end points  */
    if (req.url === '/friends') {
        // res.writeHead(200, {
        //     "Content-Type" : "application/json", //set header or pass javasript object
        // }) other way to set headers and send status code is 
        res.statusCode = 200;
        res.setHeader('Contant-Type', 'application/json')
        res.end(JSON.stringify({
            id: 1,
            name: 'Hello! sir Isaac Newton is your friend!'
        }))//data passing back to ther browser it can be empty
    } else if (req.url === '/messages') {
        res.setHeader('Contant-Type', 'text/html')
        res.write('<html>')
        res.write('<body>')
        res.write('<ul>')
        res.write('<li> Hello Isac!</li>')
        res.write('<li>what are your thoughts on astronomy?</li>')
        res.write('</ul>')
        res.write('</body>')
        res.write('</body>')
        res.end()
    } else {
        res.statusCode = 404;
        res.end()
    }
})
server.listen(PORT, () => {
    console.log(`listing on port ${PORT}...`)
}) //tell our server to listen to request