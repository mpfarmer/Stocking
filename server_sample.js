//Creating a basic server
var http = require('http');
var fs = require('fs');

//404 response
function send404Response(response) {
    response.writeHead(404, {"Context-Type": "text/plain"});
    response.write("Error 404: Page not found!");
    response.end();
}

function sendTextHtml(response) {

    response.writeHead(200, {"Context-Type": "text/plain"});
    fs.createReadStream("./index.html").pipe(response);
}

//Handle a user request
function onRequest(request, response) {
    console.log("A user made a request" + request.url);
    if (request.method == 'GET' && request.url == '/') {
        sendTextHtml(response);
    } else {
        send404Response(response);
    }
}
http.createServer(onRequest).listen(8888);
console.log("Server is now running...");

