var http = require("http");

http.createServer(
    function(request, response) {
        response.end("OI");
    }
).listen(8888);

console.log("Servidor está on....")