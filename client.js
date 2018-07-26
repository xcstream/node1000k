var net = require('net');

var PORT = 1926;
var count = 0

console.log('start.')
function create() {
    for(var i=0;i<1;i++){
        var client = new net.Socket();
        client.connect(PORT, '127.0.0.1', function() {
        });
        client.on('error',function (err) {
            console.log(err)
            console.log('cannot connect at ',count)
            process.exit()
        })
        count++
    }
    console.log('connection count:',count)
}
setInterval(create,0)





