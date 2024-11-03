const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res) =>{
    //Asynchronous
    if(req.url==="/"){
        fs.writeFile('newFile.txt','Welcome to Node JS',function(error){
            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File Write Fail");
                res.end();
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File Write Success");
                res.end();
            }
        })
    }
});


server.listen(3030);
console.log("Server Run Success");