# Websocket Angular Sample

Small sample implementation of a websocket server and an angular service structure how to utilize a websocket server and a angular service structure.

## Explanation

We have created a singleton service `WebsocketCommunicationService` which is responsible for handling the initial websocket connection and any websocket events:

- On creation the socket creation is opened
- All messages are pushed inside a `messages` BehaviourSubject where any other service / component can subscribe to and filter the messages
- Commands which are send to the server can also be implemented using this server

The benefits are the following:

- The websocket communication is abstracted inside a single service where you can implement all messages / logic etc.
- Other components / services / pipes or anything else in angular can simply inject the service and access the same web socket connection
- The messages inside an observable offer an easy way to filter / transform / manipulate the messages inside specific components

The server sample is written in nodejs but any other websocket framework can be used (feel free to open a PR to add more examples).

## References:

- https://rxjs.dev/api/webSocket/webSocket
- https://github.com/websockets/ws
- https://developer.mozilla.org/en-US/docs/Web/API/WebSocket