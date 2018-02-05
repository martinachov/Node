'use strict';

const restify = require('restify');
const controller = require('../controller/user.controller');

module.exports = function(server) {

  // Routes
  server.get('/api/user', controller.getAllUsers);
  server.get('/api/user/:id', controller.getUserById);
  server.post('/api/user', controller.createUser);
};