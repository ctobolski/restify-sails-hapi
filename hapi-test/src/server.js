"use strict";

const Hapi = require("hapi");

const server = Hapi.server({
  host: "localhost",
  port: 8000
});

server.route({
  method: "GET",
  path: "/hello",
  handler: (request, h) => {
    return "hello world";
  }
});

const start = async () => {
  try {
    await server.start();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  console.log("Server running at:", server.info.uri);
};

start();
