import ws from 'ws';

const server = new ws.Server({ port: 8002 });

server.on('connection', (socket) => {
  socket.on('message', (message) => {
    console.log('received: %s', message);
  });

  socket.send('Hello from server');
});