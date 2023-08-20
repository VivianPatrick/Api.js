const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 4000;
const localHost = 'localhost';

const server = http.createServer((req,res)=>{
if(req.url ==='/index.html'){
    const filePath = path.join(__dirname,'index.html');
    fs.readFile(filePath,'utf-8',(err,data)=>{
        if(err){
            res.writeHead(500,{'Content-Type':'text/html'});
            res.end(err);
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data)

    }
    )
}

else{
    const errorPath = path.join(__dirname,'error.html');
    fs.readFile(errorPath,'utf-8',(err,data)=>{
        if(err){
            res.writeHead(500,{'Content-Type':'text/html'});
            res.end(err);
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data)

    })
    }




})


server.listen(port,localHost,()=>{
    console.log(`Server is running on http://${localHost}:${port}`)
})