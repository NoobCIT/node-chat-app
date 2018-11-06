const path = require('path');
const http = require('http');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const { generateMessage } = require('./utils/message');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

var server = http.createServer(app);
var io = socketIO(server); // Web sockets server

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'A new user has joined!'));

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
