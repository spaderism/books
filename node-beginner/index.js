'use strict';

const server = require('./server');
const router = require('./route');
const requestHandler = require('./requestHandler');

const handle = {};
handle['/'] = requestHandler.start;
handle['/start'] = requestHandler.start;
handle['/upload'] = requestHandler.upload;
handle['/show'] = requestHandler.show;

server.start(router.route, handle);
