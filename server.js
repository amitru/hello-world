//npm install connect@2.X.X

var connect = require('connect');
connect.createServer(
    connect.static("../hello-world")
).listen(5000);