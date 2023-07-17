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
    });
  }
};