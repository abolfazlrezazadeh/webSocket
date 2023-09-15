const http = require("http")
const WebSocket = require("ws")
const server = http.createServer();
const ws = new WebSocket.Server({server})
ws.on("headers",(headers, req)=>{
    console.log(headers);
})

server.listen("3001",()=>{console.log("running on port 3001 ...");})