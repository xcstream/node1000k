var net = require('net');
var count = 0
//server
new Array(300).fill(1).map((_,index)=>index+1926).map(p=>net.createServer().listen(p).on('connection',_=>count++))
//client
setInterval(_=>{new Array(300).fill(1).map((_,index)=>index+1926).map(p=>new net.Socket().connect(p,'127.0.0.1')
    .on('error',function(){process.exit()}))&&console.log('connection count:',count)},10)