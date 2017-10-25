var http = require('http');
var handle = require('./handle');
var name = require ('./name');

var server = http.createServer(handle);
name.name();
name.lastName();

server.listen(3000,function(){
    console.log("Server is listening at port 3000");
});