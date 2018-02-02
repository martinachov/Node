'use strict';

module.exports = {

    getAllProductss: function(req, res, next){
        console.log('GET ALL PRODUCTS');
        next();
    },

    getProductById: function( req, res, next){
        console.log('GET PRODUCT ID : ' + req.params.id);
        next();
    }
}