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

const videoSchema = mongoDB.Schema({
    link: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        maxlength: 50
    },
    description: {
        type: String,
        required: true,
        maxlength: 150
    },
    comments: {
        type: Array
    },
    likes: {
        type: Number
    }
})

module.exports = mongoDB.model('userSchema', userModel)
module.exports = mongoDB.model('videoSchema', videoSchema)