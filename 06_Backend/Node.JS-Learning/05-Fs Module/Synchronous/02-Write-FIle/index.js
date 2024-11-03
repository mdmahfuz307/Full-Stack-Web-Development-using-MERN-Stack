const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res) =>{
    //Synchronous
    if(req.url==="/"){

        let error = fs.writeFileSync('newSync.txt','Welcome to File Sync');

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
    }
});


server.listen(4030);
console.log("Server Run Success");