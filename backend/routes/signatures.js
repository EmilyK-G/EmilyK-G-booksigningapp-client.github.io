const express = require('express')
const Signature = require('../models/signatureModel')

const router = express.Router()

// GET all signatures
router.get('/', (req, res)=>{
    res.json({mssg: 'GET all signatures'})
})

//GET a single signature
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single signature'})
})

//POST a new signature 
router.post('/', async (req, res)=> {
    const {message, recipient, recipient_id, sender, sender_id, sender_signature} = req.body

    try{
        const signature = await Signature.create({message, recipient, recipient_id, sender, sender_id, sender_signature})
        res.status(200).json(signature)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

//DELETE a signature

router.delete('/:id', (req, res)=> {
    res.json({mssg: 'DELETE a signature'})
})

//UPDATE a signature

router.patch('/:id', (req, res)=> {
    res.json({mssg: 'UPDATE a signature'})
})

module.exports = router