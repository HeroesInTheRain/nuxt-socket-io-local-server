import { Server as NuxtServer } from "node:http";
import { Socket, Server } from "socket.io";

export default (nuxtServer: NuxtServer) => {
  if (nuxtServer) {
    const io = new Server(nuxtServer, {
      cors: {
        origin: "*"
      }
    });
    
    io.on("connection", (socket: Socket) => {
      socket.emit("message", "Server connected");

      socket.on("notification", (data) => {
        socket.emit("notification", data);
      });

      socket.on("custom_event", (data) => {
        socket.emit("custom_event", data);
      });

      socket.on("join", (room) => {
        let roomList = Array.from(socket.rooms);
        if(roomList.indexOf(room) == -1){
          if(roomList.length > 1)
            socket.leave(roomList[roomList.length - 1])
          socket.join(room)
        }
      });
    });
  }
};