const express = require('express')
const router = express.Router()
const userSchema = require('../models/userSchema')

router.get('/findMany/:id', async function(req, res) {
    const getUser = await userSchema.find().limit(Number(req.params.id))
    res.send(getUser)
})

router.get('/random', async function(req, res) {
    const getUser = await userSchema.aggregate([{$sample:{size:1}}])
    console.log(`Found Random User at ${Date.now()}`)
    res.send(getUser)
})

router.post('/create', async function(req, res) {
    const getReq = req.body
    const createUser = new userSchema({
        "userName": getReq.userName,
        "bio": getReq.bio,
        "phoneNumber":getReq.phoneNumber,
        "email":getReq.email,
        "hobbies": getReq.hobbies
    
    })

    const uploadSave = await createUser.save()

    console.log(`New User Created at ${Date.now()}`)
    res.json(uploadSave)
})

module.exports = router