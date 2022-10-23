const express = require('express')
const router = express.Router()
const videoSchema = require('../models/videoSchema')

router.get('/findMany/:id', async function(req, res) {
    let response = await videoSchema.find().limit(Number(req.params.id))
    res.send(response)
})

router.post('/upload', async function(req, res) {
    let post = new videoSchema({
        "link": req.body.link,
        "title": req.body.title,
        "description": req.body.description,
        "creator": req.body.creator
    }) 

    let uploadSave = await post.save()
    res.json(uploadSave)
})

router.get('/:id', async function(req, res) {
    let response = await videoSchema.findById(req.params.id)
    res.send(response)
})

router.patch('/comment/:id', async function(req, res) {
    let response = await videoSchema.updateOne({
        _id : req.params.id},
        { $push: { "comments": req.body.comment}}) 

    res.json(response)
})

router.patch('/like/:id', async function(req, res) {
    let response = await videoSchema.updateOne({
        _id : req.params.id},
        {$inc : {"likes" : 1 
    }})

res.json(response)
})
module.exports = router