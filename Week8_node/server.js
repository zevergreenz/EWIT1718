var Http = require("http");

var listener = function(req, res) {
    res.end("Hello World!" + req.url);
}

var server = Http.createServer(listener);
server.listen(3000);