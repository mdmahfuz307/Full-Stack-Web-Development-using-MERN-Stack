const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") { // Use '===' for comparison
        try {
            let myData = fs.readFileSync(`${__dirname}/Home.html`);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(myData);
            res.end();
        } catch (err) {
            console.error("Error reading file:", err);
            res.writeHead(500);
            res.end("Internal Server Error");
        }
    }
});


server.listen(5050);
console.log("Server Run Success");
