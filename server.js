const http = require('http'); // Beginning of URL
const host = 'localhost'; // URL
const PORT = 3333; // Port
const express = require('express'); // Express dep
var fs = require('fs'); //File Share

// Server creation and file sending
fs.readFile('./page.html', function(error, html) {
    if (error) throw error;
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(PORT) && console.log("Server is functional on port 3333");
});

// Image preloading
var images = new Array();

function preloadImages(){
    for (i=0; i < preloadImages.arguments.length; i++){
        images[i] = new Image();
        images[i].src = preloadImages.arguments[i];
    }n
}
preloadImages("logocnet.png");

// Error throw
if (error) {
    throw error;
    console.log("An error has occurred.");
}