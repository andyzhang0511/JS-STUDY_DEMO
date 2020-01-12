var app = require('http').createServer(handler);
var ws = require('nodejs-websocket');
var fs = require('fs');
// app.listen(3000);

function handler(req, res) {
    fs.readFile(__dirname + '/client.html', function (err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('error ');
        }
        res.writeHead(200);
        res.end(data);
    });
}
var server = ws.createServer(function (conn) {
    
    console.log('new conneciton');
    conn.on("text", function (str) {
        // console.log(123)
        broadcast(server, str);
    });
    conn.on("close", function (code, reason) {
        // console.log('connection closed');
    })
}).listen(5000);

function broadcast(server, msg) {
    server.connections.forEach(function (conn) {
        conn.sendText(msg);
    })
}