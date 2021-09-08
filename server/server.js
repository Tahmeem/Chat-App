let Express = require('express');
let app = Express();
let http = require('http').Server(app);
const port = process.env.PORT || 5000;
let io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile('No founds');
});

io.on('connection', function(socket){
    console.log('User connected');
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

http.listen(3000, function(){
    console.log(`listening on Port:${port}`);
});
