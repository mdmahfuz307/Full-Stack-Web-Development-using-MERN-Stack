const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    // Synchronous
    if (req.url === "/") {
        try {
            fs.unlinkSync('demoFile.txt'); // Properly call unlinkSync to delete the file
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("File Delete Success");
            res.end();
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'text/html' }); // 500 Internal Server Error
            res.write("File Delete Fail: " + error.message);
            res.end();
        }
    }
});

server.listen(3030);
console.log("Server Run Success");
