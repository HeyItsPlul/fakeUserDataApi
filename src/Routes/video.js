const express = require('express')
const router = express.Router()
const videoSchema = require('../models/videoSchema')

router.get('/findMany/:id', async function(req, res) {
    let response = await videoSchema.find().limit(Number(req.params.id))
    res.send(response)
})