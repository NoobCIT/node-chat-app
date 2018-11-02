const path = require('path');
const http = require('http');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

var server = http.createServer(app);
var io = socketIO(server); // Web sockets server

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
