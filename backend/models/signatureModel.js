const mongoose = require('mongoose')

const Schema = mongoose.Schema

const signatureSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    recipient: {
        type: String,
        required: true
    },
    recipient_id: {
        type: String,
        required: true
    },
    sender: {
        type: String,
        required: true
    },
    sender_id: {
        type: String,
        required: true
    },
    sender_signature: { //replaced 'signature' on original array
        type: String,
        required: true
    }
}, { timestamps: true }) //should retrieve as sent_date

module.exports = mongoose.model('Signature', signatureSchema)

