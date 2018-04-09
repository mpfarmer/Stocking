var connect = require('connect');
var http = require('http');

var app = connect();

// stack of middle ware
function doFirst(request, response, next) {
    console.log("Rice");
    next();
}

function doSecond(request, response, next) {
    console.log("Bean");
    next();
}

function profile(request, response) {
    console.log('User requested profile');
}

function forum(request, response) {
    console.log('User requested forum');
}
app.use(doFirst);
app.use(doSecond);
app.use('/profile', profile);
app.use('/forum', forum);
http.createServer(app).listen(8888);
console.log("Server is now running...");
