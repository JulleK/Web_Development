import { createServer } from "http";
import { readFileSync } from "fs";
import { WebSocketServer } from "ws";

// http server config
const server = createServer((req, res) => {
  res.write("Hello World!");
  res.end();
}).listen(8080);
console.log("server listening on port 8080");

// websocket config
const wss = new WebSocketServer({ server });
wss.on("connection", (ws) => {
  ws.on("error", console.error);

  ws.on("message", (data) => {
    console.log("received: %s", data);
  });

  ws.send("wss connection estabilished");
});
