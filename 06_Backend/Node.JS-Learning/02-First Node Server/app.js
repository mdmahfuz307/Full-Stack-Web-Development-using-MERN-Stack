const http = require('http');

const server = http.createServer((req,res) =>{
  res.end("Nirob")
});

const PORT = 3001;
server.listen(PORT,() =>{
  console.log(`Server running at https://localhost:${PORT}/`);
});

