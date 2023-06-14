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

// PORT TEST
if (PORT !== 3333) {
    throw error;
} else {
    console.log('PORT: Functional');
}

// Browser Compatibility Script
if (typeof window.localStorage !== "undefined") {
    // localStorage is supported
} else {
    // localStorage is not supported
}

// Browser Compatibility Script 2
if (typeof document.querySelector !== "undefined") {
    // querySelector is supported
} else {
    // querySelector is not supported
}

// Mozilla Firefox Compatibility Script
if (typeof document.body.style.MozUserSelect !== "undefined") {
    // Firefox is detected
    document.body.style.MozUserSelect = "none";
} else {
    // Other browsers
    document.body.style.userSelect = "none";
}

var pages = new Array();

function preloadPages(){
    for (i=0; i < preloadPages.arguments.length; i++){
        pages [i] = new Page();
        pages[i].src = preloadPages.arguments[i];
    }
}
preloadPages('page.html', 'credit.html', 'contact.html', 'about.html');

// image preload attempt
var images = new Array();

function preloadImages(){
    for (i=0; i < preloadImages.arguments.length; i++){
        images [i] = new Image();
        images[i].src = preloadImages.arguments[i];
    }
}
preloadImages('logocnet.png');

// Error throw
if (error) {
    throw error;
    console.log("An error has occurred.");
}