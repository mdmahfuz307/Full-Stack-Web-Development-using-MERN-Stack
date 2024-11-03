const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res) => {
    //Sync
    if(req.url==="/"){
        
        let error = fs.existsSync('newDemo.txt');

            if (error) {
                res.end(` File Exist`);
            } else {
                res.end(`File Does not exist`);
            }
    }
});
// OutPut :- File Exist


server.listen(3030);
console.log("Server Run Success"); 