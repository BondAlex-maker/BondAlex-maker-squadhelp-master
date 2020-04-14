import app from "../express";
const http = require('http');
const PORT = process.env.PORT || 9632;

const httpServer = http.createServer(app);
httpServer.listen(PORT);

export default httpServer;