function intializeChatBox() {
  let localStorageValue = localStorage.getItem("messages");
  const messages = (localStorageValue ? localStorageValue.split("#") : []).map(
    (item) => {
      if (item) return item;
    }
  );
  messages.forEach((item) => {
    const paragraphElement = document.createElement("p");
    paragraphElement.innerText = item;
    const chatBox = document.querySelector(".chatbox");
    chatBox.appendChild(paragraphElement);
  });
}
intializeChatBox();
const socket = io("http://localhost:3001");
socket.on("connect", (data) => {
  const sendBtn = document.getElementById("sendBtn");
  sendBtn.addEventListener("click", (e) => {
    const textBox = document.getElementById("text");
    const message = textBox.value;
    if (!message) {
      return alert("you dont allowed to send empty message");
    }
    socket.emit("clientMessage", message);
    textBox.value;
  });
});
socket.on("serverMessage", (message) => {
  let localStorageValue = localStorage.getItem("messages")
    ? localStorage.getItem("messages") + "#" + message
    : message;
  localStorage.setItem("messages", localStorageValue);
  const paragraphElement = document.createElement("p");
  paragraphElement.innerText = message;
  const chatBox = document.querySelector(".chatbox");
  chatBox.appendChild(paragraphElement);
});
