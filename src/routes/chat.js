const { io } = require('../server');

io.on('connection', (socket) => {
  const { id } = socket;
  console.log(`Socket connected: ${id}`);

  socket.on('getHistory', (msg) => {
    // getFullHistory
    console.log('getHistory');
    socket.emit('chatHistory', [{ id: '123', text: 'testMessage' }]);
  });

  socket.on('sendMessage', (msg) => {
    console.log('sendMessage');
    socket.emit('newMessage', { id: '123', text: 'some text of the message' });
  });

  // работа с комнатами
  // const { roomName } = socket.handshake.query;
  // console.log(`Socket roomName: ${roomName}`);
  // socket.join(roomName);
  // socket.on('message-to-room', (msg) => {
  //   msg.type = `room: ${roomName}`;
  //   socket.to(roomName).emit('message-to-room', msg);
  //   socket.emit('message-to-room', msg);
  // });

  // socket.on('add-comment', async (msg) => {
  //   const newComment = new Comment({
  //     author: msg.author,
  //     text: msg.text,
  //     bookId: msg.bookId,
  //   });

  //   try {
  //     await newComment.save();
  //     msg.type = `room: ${roomName}`;
  //     socket.to(roomName).emit('message-to-room', newComment);
  //     socket.emit('message-to-room', newComment);
  //   } catch (e) {}
  // });

  socket.on('disconnect', () => {
    console.log(`Socket disconnected: ${id}`);
  });
});

module.exports = io;
