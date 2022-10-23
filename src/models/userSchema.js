const mongoDB = require('mongoose')

const userModel = mongoDB.Schema({
    userName: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    DateCreated: {
        type: Date,
        required: true,
        default: Date.now()
    },
    hobbies: {
        type: Array,
        required: true
    }

})


module.exports = mongoDB.model('userSchema', userModel)
