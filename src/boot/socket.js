const { User: database } = require('../core/database');
const socket = require('socket.io');

module.exports = function (server) {
  const io = socket(server, {
    cors: {
      origin: '*',
      method: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log(socket.id);
    // console.log(database);
    socket.on('disconnecting', () => {});
  });
};
