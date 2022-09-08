const Signature = require('../models/signatureModel')
const mongoose = require('mongoose')
const { findOneAndUpdate } = require('../models/signatureModel')

//get all signatures
const getSignatures = async(req, res) =>{
    try{
        const signatures = await Signature.find({}).sort({createdAt: -1})

        res.status(200).json(signatures)
    }catch(error){
        console.log(error)
    }
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
    const {message, recipient, recipient_id, sender, sender_id, sender_signature} = req.body
    
    // add doc to db
    try{
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
    createSignature,
    deleteSignature,
    updateSignature
}