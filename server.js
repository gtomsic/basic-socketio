const http = require('http');

const socketio = require('socket.io');

const server = http.createServer((req, res) => {
  res.end('Server is running on port 8000');
});

const io = socketio(server, {
  cors: {
    origin: '*',
    credentials: true,
  },
});

io.on('connection', (socket, req) => {
  socket.emit('welcome', 'Welcome to socketio intro!!!');
  socket.on('message', (data) => {
    console.log(data);
  });
});

server.listen(8000);
