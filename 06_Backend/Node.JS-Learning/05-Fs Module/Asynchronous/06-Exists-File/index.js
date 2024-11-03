const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res) => {
    //Async
    if(req.url==="/"){
        
        fs.exists('newDemo.txt',function(error){

            if (error) {
                res.end(` File Exist`);
            } else {
                res.end(`File Does not exist`);
            }
        })
    }
});

// OutPut :- File Exist

server.listen(3020);
console.log("Server Run Success"); 