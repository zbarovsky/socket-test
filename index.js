const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    console.log('a user has connected')
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
        console.log('message ', msg)
    })
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

http.listen(3000, () => {
    console.log('With my toes on port *:3000 it`s such a lovely view')
})