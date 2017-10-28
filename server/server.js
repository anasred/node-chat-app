const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
// this is for deploying on heroku
const port = process.env.PORT || 50001;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.on('disconnect', () => {
        console.log('socket disconnected');
    });
});

server.listen(port, () => { 
    console.log(`server starts at port ${port}`)
});