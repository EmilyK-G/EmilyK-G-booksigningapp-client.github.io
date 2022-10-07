const Signature = require('../models/signatureModel')
const mongoose = require('mongoose')
const { findOneAndUpdate } = require('../models/signatureModel')

//get all signatures
const getSignatures = async(req, res) =>{
    const recipient_id = req.user._id
    console.log(req.user._id)
    const signatures = await Signature.find({recipient_id}).sort({createdAt: -1})

    res.status(200).json(signatures)
   
}

//get signatures sent
const getSignaturesSent = async(req, res) =>{
    const sender_id = req.user._id
    console.log(req.user._id)
    const signatures = await Signature.find({sender_id}).sort({createdAt: -1})

    res.status(200).json(signatures)
   
}

//get a single signature
const getSignature = async(req, res)=> {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such signature'})
    }

    const signature = await Signature.findById(id)

    if(!signature) {
        return res.status(404).json({error: 'No such signature'})
    }

    res.status(200).json(signature)
}

//create new signature
const createSignature = async(req, res) =>{
    const {message, recipient, recipient_id, sender, sender_signature} = req.body
    
    let emptyFields = [];

    if(!message) {
        emptyFields.push('message')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Your message is empty', emptyFields })
    }

    // add doc to db
    try{
        const sender_id = req.user._id
        const signature = await Signature.create({message, recipient, recipient_id, sender, sender_id, sender_signature})
        res.status(200).json(signature)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a signature
const deleteSignature = async (req, res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such signature'})
    }

    const signature = await Signature.findOneAndDelete({_id: id})

    if(!signature) {
        return res.status(404).json({error: 'No such signature'})
    }

    res.status(200).json(signature)
}

//update a signature
const updateSignature = async (req, res)=>{

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such signature'})
    }

    const signature = await Signature.findOneAndUpdate({_id:id}, {
        ...req.body
    })

    if(!signature) {
        return res.status(404).json({error: 'No such signature'})
    }

    res.status(200).json(signature)
}

module.exports = {
    getSignatures,
    getSignature,
    getSignaturesSent,
    createSignature,
    deleteSignature,
    updateSignature
}