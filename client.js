const socket = io("http://localhost:3001");
socket.on("connect", (data) => {
  socket.emit("welcome", "hello from frontend ");
  socket.on("welcome-client", (data) => {
    console.log(data);
  });
});
