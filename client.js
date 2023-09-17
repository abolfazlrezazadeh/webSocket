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
