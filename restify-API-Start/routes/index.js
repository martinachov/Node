'use strict';

// All Routers files
const user = require('./user.router');
const product = require('./product.router');

module.exports = function(server) {
    user(server);
    product(server);
};