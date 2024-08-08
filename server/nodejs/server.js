import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  ws.on('message', (message) => {
    console.log(`Received message => ${message}`);
    ws.send(JSON.stringify({ message: "Message received!" }));
  });

  const interval = setInterval(() => {
    ws.send(JSON.stringify({ message: "Hello, World!" }));
  }, 5000);

  ws.on('close', () => {
    clearInterval(interval);
  });
});