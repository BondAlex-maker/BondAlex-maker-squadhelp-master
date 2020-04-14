require('./dbMongo/mongoose');
import httpServer from "./boot/httpServer";

const controller = require('./socketInit.js');

controller.createConnection(httpServer);