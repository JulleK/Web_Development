const ws = new WebSocket("ws://localhost:8080");

const messageForm = document.querySelector(".message-form");
const messageDisplay = document.querySelector("#messages");

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let userMessage = event.target[0].value;
  ws.send(userMessage);
});

ws.addEventListener("open", () => {
  console.log("connection to wss open");
});

ws.addEventListener("message", (event) => {
  let message = event.data;
  messageDisplay.innerHTML += `<li class="message">${message}</li>`;
});

ws.addEventListener("close", (event) => {
  console.log("Connection closed");
});
