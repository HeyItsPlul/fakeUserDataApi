const mongoDB = require('mongoose')

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
    },
    creator: {
        type: String,
        required: true
    }
})

module.exports = mongoDB.model('videoSchema', videoSchema)