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

      socket.on("message", (data) => {
        socket.emit("message", data);
      });
    });
  }
};