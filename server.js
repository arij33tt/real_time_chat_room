const path= require('path');

const http = require('http')

const socketio= require('socket.io');

const express= require('express');

const app = express();

const server = http.createServer(app);

const io = socketio(server);



app.use(express.static(path.join(__dirname, 'public')));

// run when a user connects  

io.on('connection',socket=>{
    console.log("new Ws Connection");
    
    socket.emit("message",'Welcome to ChatGram');
})

const PORT = 3000 || process.env.PORT;

server.listen(PORT , ()=>console.log(`server is running in port ${PORT}`));

// app.listen(3000 , ()=>console.log(`server is working in the port ${3000}`))