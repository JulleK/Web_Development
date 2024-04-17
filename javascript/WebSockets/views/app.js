const socket = new WebSocket("wss://javascript.info/article/websocket/chat/ws");
const messageForm = document.querySelector(".message-form");
const messageDisplay = document.querySelector("#messages");

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let userMessage = event.target[0].value;
  socket.send(userMessage);
});

socket.addEventListener("message", (event) => {
  console.log(event);
  let message = event.data;
  messageDisplay.innerHTML += `<li class="message">${message}</li>`;
});

socket.addEventListener("close", (event) => {
  console.log("BYE BYE!!!");
  console.log(event);
});
