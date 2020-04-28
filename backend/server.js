const express = require('express');
const server = express();

const cors = require('cors');

//Settings
server.set('port', 4000);

//Middlewares
server.use(cors());
server.use(express.json());

//Routes
server.use('/api/tasks', require('./routes/tasks'));


module.exports = server;