const mongoose = require('mongoose');

const useSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    userEmail: {
        type: String,
        require: true,
        unique: true
    },
    userPassword: {
        type: String,
    },
    userCnfPassword: {
        type: String
    }
})

const loginRegisterUser = mongoose.model('users', useSchema)
module.exports = loginRegisterUser