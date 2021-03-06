const restify = require("restify");

function respond(request, response, next) {
  response.send("hello" + request.params.name);
  next();
}

const server = restify.createServer();

server.get("/hello/:name", respond);
server.head("/hello/:name", respond);

server.listen(8080, () => {
  console.log("%s listening at %s", server.name, server.url);
});
