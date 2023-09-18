const socket = io("http://localhost:3001", {
  query: {
    value1: "hello",
    value2: "goodby",
  },
  transportOptions: {
    polling: {
      extraHeaders: {
        authorization: "bearer <token>",
      },
    },
  },
});
socket.on("connect", (data) => {
  console.log(data);
});
