// now we create a server and response the message of the browser console 
const http=require('http');

//create a server 
const server=http.createServer((req,res)=>{
    if(req.url='/'){
        res.write('<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>')
    }
    res.end();
})

// on which port server running 
server.listen(8080);
console.log(`server running on port no. 8080`);