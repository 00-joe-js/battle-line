const server = require("http").createServer();

server.on("request", console.log);

server.listen(3000);