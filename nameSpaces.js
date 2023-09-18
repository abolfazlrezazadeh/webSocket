const express = require("express");
const http = require("http");
const app = express();
// const WebSocket = require("ws");
app.use(express.static("./"));
const server = http.createServer(app);
const socketIO = require("socket.io");
const io = socketIO(server, {
  cors: { origin: "*" },
  serverClient: true,
});
// const ws = new WebSocket.Server({ server });
io.on("connection", () => {
  io.of("/").emit("broadCast", "hello every one");
});
io.of("/teacher").on("connection", (socket) => {
  socket.on("teachersClient ", (data) => {
    console.log(data);
  });
  socket.emit("welcome-student", "hello ur backend teacher  ");
});
io.of("/student").on("connection", (socket) => {
  socket.on("studentClient ", (data) => {
    console.log(data);
  });
  socket.emit("welcome-teacher", "hello ur backend student ");
});
server.listen("3001", () => {
  console.log("running on port 3001 ...");
});
/// client
const socket = io("http://localhost:3001");
socket.on("broadCast", (data) => {
  console.log(data);
});

const teacherSocket = io("http://localhost:3001/teacher");
teacherSocket.on("connect", (data) => {
  teacherSocket.emit("welcome", "hello from teacher ");
  teacherSocket.on("welcome-student", (data) => {
    console.log(data);
  });
});
const studenttSocket = io("http://localhost:3001/student");
studenttSocket.on("connect", (data) => {
  studenttSocket.emit("welcome", "hello from student  ");
  studenttSocket.on("welcome-teacher", (data) => {
    console.log(data);
  });
});
