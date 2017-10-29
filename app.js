var http = require('http');
var handle = require('./handle');
var events = require('events');
require('console-log-hello-world');

var server = http.createServer(handle);
var emitter = new events.EventEmitter();

emitter.on('sayUsayMe',say);

function say(){
    console.log('I am saying.');
}

emitter.emit('sayUsayMe');

server.listen(3000,function(){
    console.log("Server is listening at port 3000");
});

