const socket = new WebSocket("ws://localhost:3001");
socket.onopen = (event) => {
  socket.send("hello something from client");
};
socket.onmessage = (event) => {
  socket.send("i want to read ur data");
  document.write(event.data);
};
