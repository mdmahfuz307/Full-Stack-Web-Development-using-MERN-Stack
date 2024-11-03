const http = require('http');
const URL = require('url');


const server = http.createServer((req,res) =>{

    let myURL = "http://rabbil.com/blog.html?year=2020&month=july";

    let myURLObj = URL.parse(myURL,true);  // Parse use krle alda vbe vag hye jbe

    let myHostName = myURLObj.host;
    let myPathName = myURLObj.path;
    let mySearchName = myURLObj.search;

    res.writeHead(200,{'content-Type':'text/html'}) 
    res.write(myPathName);   // Jokhon jeta debo seta dekhte prbo (myHostName),(mySearchName)
    res.end();

});

server.listen(4050);
console.log("server Run success");
