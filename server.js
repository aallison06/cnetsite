const http = require('http');
const host = 'localhost';
const port = 3333;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("Hello World.");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is operational on http://${host}:${port}`);
});
