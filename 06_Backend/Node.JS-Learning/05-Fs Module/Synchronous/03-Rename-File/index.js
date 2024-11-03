const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res) => {
    //Sync
    if(req.url==="/"){
        
        try {
            let result = fs.renameSync('oldFileSync.txt','newFileSync.txt');

            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("File Rename Success");
            res.end();
        } catch (error) {
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("File Rename Fail: " + error.message);
            res.end();
        }
    }
});

server.listen(3010);
console.log("Server Run Success");
