import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", (ws) => {
  ws.on("error", console.error);

  ws.on("message", (data) => {
    console.log(`received: ${data}`);
    ws.send(`${data}`);
  });
});
console.log("server open on ws://localhost:8080");
