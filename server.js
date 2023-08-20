const http = require('http'); // Beginning of URL
const host = 'localhost'; // URL
const PORT = 3333; // Port
const express = require('express'); // Express dep
var fs = require('fs'); //File Share
const { error } = require('console');
const { errorMonitor } = require('events');

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

// Host Test Script
if (host !== 'localhost') {
    throw error;
} else {
    console.log('Host: Functional');
}

// Browser Compatibility Script
if (typeof window.localStorage !== "undefined") {
    console.log('localStorage is supported.');
    // localStorage is supported
} else {
    console.log('localStorage is not supported.');
    // localStorage is not supported
}

// Browser Compatibility Script 2
if (typeof document.querySelector !== "undefined") {
    console.log('querySelector is supported.');
    // querySelector is supported
} else {
    console.log('querySelector is not supported.');
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

if(error){
    throw error;
} else {
    console.log('No errors present.')
}