'use strict';

const restify = require('restify');
const controller = require('../controller/product.controller');

module.exports = function(server) {

  // Routes
  server.get('/api/product', controller.getAllProductss);
  server.get('/api/product/:id', controller.getProductById);
  
};