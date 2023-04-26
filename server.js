const http = require('http'); // Beginning of URL
const host = 'localhost'; // URL
const PORT = 3333; // Port
const express = require('express'); // Express dep
var fs = require('fs'); //File Share

fs.readFile('./page.html', function(error, html) {
    if (error) throw error;
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(PORT) && console.log("Server is functional on port 3333");
});

if (error) {
    throw error;
    console.log("An error has occurred.");
}