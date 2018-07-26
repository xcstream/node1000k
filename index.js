var net = require('net');

var HOST = '127.0.0.1';
var PORT = 1926;
var count = 0

server = net.createServer(function(sock) {
}).listen(PORT, HOST);

console.log('listen tcp://127.0.0.1:1926')
server.on('connection',function () {
    count++
    console.log('connection count:',count)
})

server.on('error', function(err){
    console.log('Server error:', err.message);

});

server.on('close', function(){
    console.log('Server closed');
});

console.log('start.')

while(1) {
    var client = new net.Socket();
    client.connect(PORT, HOST, function() {
    });
}





