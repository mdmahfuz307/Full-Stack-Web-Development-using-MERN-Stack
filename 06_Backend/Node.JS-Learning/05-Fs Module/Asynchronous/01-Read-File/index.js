const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        // Asynchronous file read with correct path
        fs.readFile(`${__dirname}/Home.html`, function (error, data) {
            if (error) {
                // Handle the error (e.g., file not found)
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write("Internal Server Error: Could not read file.");
                res.end();
                console.error("Error reading file:", error); // Log the actual error for debugging
            } else {
                // No error, send the file content
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }
        });
    }
});

server.listen(4040);
console.log("Server Run Success");
