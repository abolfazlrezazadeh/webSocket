const { log } = require("console");
const http = require("http");
// const WebSocket = require("ws");
const server = http.createServer();
const socketIO = require("socket.io");
const io = socketIO(server, {
  cors: { origin: "*" },
});
// const ws = new WebSocket.Server({ server });
io.on("connection", (socket) => {
  socket.on("welcome", (data) => {
    console.log(data);
  });
  socket.emit("welcome-client", "hello from backend  ");
});
server.listen("3001", () => {
  console.log("running on port 3001 ...");
});
