const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // <== Will be created later
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 3200; // <== You can change the port

server.use(middlewares);
server.use(router);

server.listen(PORT);