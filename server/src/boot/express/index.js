const express = require('express');
const router = require('../../router');
const cors = require('cors');
const handlerError = require('../../handlerError/handler.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));
app.use(router);
app.use(handlerError);

export default app;