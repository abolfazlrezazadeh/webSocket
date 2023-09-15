const { log } = require("console");
const http = require("http");
const WebSocket = require("ws");
const server = http.createServer();
const ws = new WebSocket.Server({ server });
ws.on("headers", (headers, req) => {
  console.log(headers);
});
ws.on("connection", (socket, req) => {
    socket.on('message',(data)=>{
        console.log(data.toString());
    })
  socket.send("hello! client, from server 'file'");
});

server.listen("3001", () => {
  console.log("running on port 3001 ...");
});
