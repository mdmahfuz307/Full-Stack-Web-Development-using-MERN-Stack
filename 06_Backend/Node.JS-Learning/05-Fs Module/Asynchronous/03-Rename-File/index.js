const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res) => {
    //Async
    if(req.url==="/"){
        
        fs.rename('oldFile.txt','newFile',function(error){

            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File name Fail");
                res.end();
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File name Success");
                res.end();
            }
        })
    }
});


server.listen(3010);
console.log("Server Run Success");