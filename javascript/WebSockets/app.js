// https://javascript.info/websocket
let socket = new WebSocket("wss://javascript.info/article/websocket/demo");

socket.addEventListener("open", () => {
  console.log("Connection estabilished");
  console.log("Sending to server");
  socket.send("My name is Johny");
});

socket.addEventListener("message", (event) => {
  console.log(`%c${event.data}`, "color: cyan");
});

socket.addEventListener("close", (event) => {
  if (event.wasClean === true) {
    console.log(
      `%c[close] connection closed cleanly, code=${event.code}, reason="${event.reason}"`,
      "color: orange"
    );
  } else {
    console.log(`%c[close] connection died!`, "color: red");
  }
});

socket.addEventListener("error", (error) => {
  console.log("%c[error] an error occured", "color: red");
  console.error(error);
});
