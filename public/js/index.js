var socket = io();

socket.on('connect', function() {
    console.log('connected to server');

    socket.emit('createMessage', {
        from: 'Hiba',
        text: 'Hey, this is Hiba'
    });
});

socket.on('disconnect', function() {
    console.log('disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
});