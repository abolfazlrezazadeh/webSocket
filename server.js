const express = require("express");
const http = require("http");
const app = express();
// const WebSocket = require("ws");
app.use(express.static("./"));
const server = http.createServer(app);
const socketIO = require("socket.io");
const io = socketIO(server, {
  cors: { origin: "*" }, 
});
// const ws = new WebSocket.Server({ server });
io.on("connection", (socket) => {
   socket.on('clientMessage' ,data =>{
    io.emit('serverMessage' , data)
   })
});
server.listen("3001", () => {
  console.log("running on port 3001 ...");
});
