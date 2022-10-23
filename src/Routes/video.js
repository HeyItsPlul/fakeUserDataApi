const express = require('express')
const router = express.Router()
const videoSchema = require('../models/videoSchema')

router.get('/findMany/:id', async function(req, res) {
    let response = await videoSchema.find().limit(Number(req.params.id))
    res.send(response)
})

router.put('/upload', async function(req, res) {
    let post = new videoSchema({
        "link": req.body.link,
        "title": req.body.title,
        "description": req.body.description,
        "creator": req.body.creator
    }) 

    let uploadSave = await post.save()
    res.json(uploadSave)
})

module.exports = router