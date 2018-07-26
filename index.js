
var net = require('net');

var PORT = 1926;
var count = 0
var range = 300

for (var port = PORT;port <  PORT+range;port++){
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

function create() {
    for(var i=0;i<range;i++){
        var client = new net.Socket();
        client.connect(PORT+i, '127.0.0.1', function() {
        });
        client.on('error',function (err) {
            console.log(err)
            console.log('total connections:',count)
            process.exit()
        })
    }
    console.log('connection count:',count)
}
setInterval(create,0)





