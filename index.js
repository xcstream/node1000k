var net = require('net');

var PORT = 1926;
var count = 0


for (var port = PORT;port <  PORT+100;port++){
    var server = net.createServer(function(sock){}).listen(port);
    server.on('connection',function () {
        count++
    })

    server.on('error', function(err){
        console.log('Server error:', err.message);
    });

    server.on('close', function(){
        console.log('Server closed');
    });
}
console.log('listen port',PORT,'-',port)

setTimeout(function () {
    console.log('connections ',count)
},1000)

console.log('start.')

function create() {
    for(var i=0;i<100;i++){
        var client = new net.Socket();
        client.connect(PORT+i, '127.0.0.1', function() {
        });
        client.on('error',function (err) {
            console.log(err)
            console.log('cannot connect at ',count)
            process.exit()
        })
    }
    console.log('connection count:',count)
}
setInterval(create,0)





