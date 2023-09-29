const http = require('http'); // Beginning of URL
const host = 'localhost'; // URL
const PORT = 3223; // Port
const express = require('express'); // Express dep
var fs = require('fs'); //File Share
const { error } = require('console');
const { errorMonitor } = require('events');
const path = require('path');

// Sleep function
function sleep(milliseconds){
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

// Server creation and file sending
fs.readFile('./page.html', function(err, html) {
    if (err) {
        throw err;
    }
    const server = http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    });
    server.listen(PORT, () => {
        console.log(`Server running at http://${host}:${PORT}/`);
    });
});

// http Test
if (typeof http === "undefined") {
    throw new Error('http: Not functional');
} else {
    console.log('http: Functional');
}
sleep(1000);

// fs Test
if (typeof fs === "undefined") {
    throw new Error('fs: Not functional');
} else {
    console.log('fs: Functional');
}
sleep(1000);

// Express Test
if (typeof express === "undefined") {
    throw new Error('express: Not functional');
} else {
    console.log('express: Functional');
}
sleep(1000);

// PORT TEST
if (PORT !== 3223) {
    throw error;
} else {
    console.log('PORT: Functional');
}
sleep(1000);

// Host Test Script
if (host !== 'localhost') {
    throw error;
} else {
    console.log('Host: Functional');
}
sleep(1000);

//Catch script
if (typeof error === "undefined") {
    console.log("A critical error has occurred. Please contact site administrator or developer.");
} else {
    console.log('No errors present. Loading...');
}
sleep(2000);

/*
// Browser Compatibility Script 2
if (typeof document.querySelector !== "undefined") {
    console.log('querySelector is supported.');
    // querySelector is supported
} else {
    console.log('querySelector is not supported.');
    // querySelector is not supported
} */
/*
// Mozilla Firefox Compatibility Script
if (typeof document.body.style.MozUserSelect !== "undefined") {
    // Firefox is detected
    document.body.style.MozUserSelect = "none";
} else {
    // Other browsers
    document.body.style.userSelect = "none";
} */
/*
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
*/
/*
if(error){
    throw error;
} else {
    console.log('No errors present.')
}

// Error support script
if(typeof error === "undefined") {
    console.log("A critical error has occurred. Please contact site administrator or developer.");
} */