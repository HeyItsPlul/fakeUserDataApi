const express = require('express')
const router = express.Router()
const videoSchema = require('../models/videoSchema')

router.get('/findMany/:id', async function(req, res) {
    let response = await videoSchema.find().limit(Number(req.params.id))
    console.log(`Found : ${req.params.id} at ${Date.now()}`)
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
    console.log(`Uploaded : ${post.title} at ${Date.now()}`)
    res.json(uploadSave)
})

router.get('/:id', async function(req, res) {
    let response = await videoSchema.findById(req.params.id)
    console.log(`Found Video at ${Date.now()}`)
    res.send(response)
})

router.patch('/comment/:id', async function(req, res) {
    let response = await videoSchema.updateOne({
        _id : req.params.id},
        { $push: { "comments": req.body.comment}}) 
        console.log(`Commented at ${Date.now()}`)
    res.json(response)
})

router.patch('/like/:id', async function(req, res) {
    let response = await videoSchema.updateOne({
        _id : req.params.id},
        {$inc : {"likes" : 1 
    }})
    console.log(`+1 Like for ${req.params.id} at ${Date.now()}`)
res.json(response)
})
module.exports = router