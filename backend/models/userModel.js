const mongoose = require ('mongoose')
//const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    pin: {
        type: String,
        required: true
    },
    class_of: {
        type: String,
        required: true
    },
    img: {
        data: Buffer,
        contentType: String
    },
    signature: {
        type: String,
        required: true
    }
})

// static validation method
// userSchema.statics.validate = async function(email, pin) {

//    //validation
//    if(!email || !pin) {
//     throw Error('All required fields must be filled')
//    }
//    if (!validator.isEmail(email)){
//     throw Error('Email is not valid')
//    }
//    if(!validator.isNumeric(pin)){
//     throw Error('Try another PIN')
//    }

// }

module.exports = mongoose.model('User', userSchema)