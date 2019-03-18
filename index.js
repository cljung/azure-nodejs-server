// on an Ubunto 14.04 Linux server in Azure, do:
// sudo apt-get install nodejs
// sudo apt-get install npm
// sudo nodejs nodejsserver.js &
function getIPAddress() {
  var interfaces = require('os').networkInterfaces();
  var ipaddr = '';
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
        var alias = iface[i];
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal)
          ipaddr = ipaddr + alias.address + ' (' + devName + '); ';
    }
  }
  return ipaddr;
}
var ipaddr = getIPAddress();
var http = require('http');
var port = process.env.PORT || 8080;
var server = http.createServer(function(req, res) {
        var dtf = new Date().toISOString();
        res.writeHead(200);
        res.write('<h1>Request processed by server ' + ipaddr + '</h1>' + '<br/>' + dtf);
        res.end();
});
server.listen(port, function() {
        console.log('server ' + ipaddr + ' listening on port ' + port);
});
