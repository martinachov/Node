'use strict';

const errors = require('restify-errors');
const User = require('../model/user.model');

module.exports = {

    getAllUsers: function(req, res, next){
        console.log('GET ALL USERS');

        User.find({}, {})
            .then((result) => {
                console.log('Users loaded OK!!' + result);
                res.send(result.docs);
            })
            .catch(error => {
                console.log(error, 'Error while loading user')
                res.status(500);
                res.send(error.message);
            });

        next();
    },

    getUserById: function( req, res, next){
        console.log('GET USER ID : ' + req.params.id);

        User.findOne({
                id: req.params.id
            })
            .then((user) => {
                console.log('User loaded succesfully');
                res.send(user);
            })
            .catch(error => {
                console.log(error, 'Error while loading user')
                res.status(500);
                res.send(Object.values(error.errors).map(e => e.message));
            });

        next();
    },

    createUser: function(req, res, next) {
        console.log('Creating USER...');

        if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'"),
			);
		}

        var user = new User(req.body);
        user.save()
            .then((user) => {
                console.log('User created succesfully');
                res.send(user);
            })
            .catch(error => {
                console.log(error, 'Error saving user');
                res.status(500);
                res.send(Object.values(error.errors).map(e => e.message));
            });
        next();
    }
}