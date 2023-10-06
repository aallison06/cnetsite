const http = require('http'); // Beginning of URL
const host = 'localhost'; // URL
const PORT = 8080; // Port
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

console.time();

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
// http host PORT express fs errorMonitor path

// http test
if (http === "undefined"){
    console.log("http is undefined.///");
} else {
    console.log("Test 1: PASS ///");
}
sleep(1000);

// host test
if (host === "undefined"){
    console.log("host is undefined//////");
} else {
    console.log("Test 2: PASS //////");
}
sleep(1000);

// PORT test
if (PORT === "undefined"){
    console.log("PORT is undefined/////////");
} else {
    console.log("Test 3: PASS /////////");
}
sleep(1000);

// express test
if (express === "undefined"){
    console.log("express is undefined////////////");
} else {
    console.log("Test 4: PASS ////////////");
}
sleep(1000);

// fs test
if (fs === "undefined"){
    console.log("fs is undefined/////////"); 
} else {
    console.log("Test 5: PASS /////////");
}
sleep(1000);

// errorMonitor test
if (errorMonitor === "undefined"){
    console.log("errorMonitor is undefined//////");
} else {
    console.log("Test 6: PASS //////");
}
sleep(1000);

// path test
if (path === "undefined"){
    console.log("path is undefined///");
} else {
    console.log("Test 7: PASS ///");
}
sleep(1000);


//Catch script
if (typeof error === "undefined") {
    console.log("A critical error has occurred. Please contact site administrator or developer.");
} else {
    console.log('No errors present. Loading...');
}

sleep(2000);

// End of script
console.timeEnd();
