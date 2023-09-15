const socket = new WebSocket("ws://localhost:3001");
socket.onopen = (event=>{
    socket.send('hello something')
})