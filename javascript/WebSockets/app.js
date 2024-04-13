// https://javascript.info/websocket
let socket = new WebSocket(
  "wss://javascript.info/article/websocket/demo/hello"
);

socket.addEventListener("open", () => {
  console.log("Connection estabilished");
  console.log("Sending to server");
  socket.send("My name is Johny");
});

socket.addEventListener("message", (evt) => {
  console.log(`%c${evt.data}`, "color: cyan");
});
