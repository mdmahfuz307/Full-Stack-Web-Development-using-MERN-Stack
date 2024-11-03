const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res) => {
    //Async
    if(req.url==="/"){
        
        fs.unlink('newDemo.txt',function(error){

            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File Delete Fail");
                res.end();
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File Delete Success");
                res.end();
            }
        })
    }
});


server.listen(3020);
console.log("Server Run Success");