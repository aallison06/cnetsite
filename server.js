const http = require('http');
const host = 'localhost';
const PORT = 3333;
var fs = require('fs');

fs.readFile('./page.html', function(error, html) {
    if (error) throw error;
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(PORT) && console.log("Server is functional on port 3333");
})