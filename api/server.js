const express = require('express');
const helmet = require('helmet');

require('dotenv').config()

console.log('env', process.env.NODE_ENV)

const apiRouter = require('./api-router.js');

const server = express();

server.use(helmet());

server.use('/api', apiRouter);

module.exports = server;
