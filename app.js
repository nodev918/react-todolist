const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)

const {Server} = require('socket.io')
const io = new Server(server)

const path = require('path')
app.get('/',(req,res)=>{
    console.log("in get")
    res.sendFile(_dirname+'/public/index.html')
})

io.on('connection',(socket)=>{
    console.log("user connected via io")
})


const PORT = process.env.PORT || 5000
server.listen(PORT,()=>{
    console.log(`listening: ${PORT}`)
})