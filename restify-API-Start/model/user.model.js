'use strict';

const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

//User Schema
var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: 'Username required',
        unique: true,
        index: true
    },
    name: {
        type: String,
        required: 'Name required'
    },
    password: {
        type: String,
        required: 'Password required'
    }
});

UserSchema.plugin(timestamps);
UserSchema.plugin(mongooseStringQuery);
module.exports = mongoose.model('User', UserSchema);