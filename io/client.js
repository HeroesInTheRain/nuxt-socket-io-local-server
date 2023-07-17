import { io } from "socket.io-client";

export const state = reactive({
  connected: false,
  message: ""
});

export var socket = null;

let server = "http://localhost:3000/";
socket = io(server);

socket.on("connect", () => {
    state.connected = true;
    state.message = "Client connected to Socket: " + socket.id;
});

socket.on("disconnect", () => {
    state.connected = false;
});
