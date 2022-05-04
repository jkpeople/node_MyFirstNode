const http = require("http");
const port = 3000;

http
    .createServer((request, response) => {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("Hello World from the server!");
        response.end(); 
    })
    .listen(port, () => {
        console.log(`Server listening on port ${port}...`);
    });