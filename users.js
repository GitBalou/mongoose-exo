const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const users = new Schema({
    email: { type: String, required: true, unique: true},
    name: { type: String},
    active: {type: Boolean, required: true, default: false},
    /*
    leads: [{
        type: Objectid
    }]
    */
});

module.exports = mongoose.model('users', users);
