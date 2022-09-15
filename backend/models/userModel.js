const mongoose = require ('mongoose')
const bcrypt = require('bcrypt')

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

// static signup method
// userSchema.statics.signup = async function(email, pin) {

//     const exists = await this.findOne({ email })

//     if(exists) {
//         throw Error('Email already in use')
//     }

//     const salt = await bcrypt.genSalt(10)
//     const hash = await bcrypt.hash(pin, salt)

//     const user = await this.create({ email, pin: hash })

//     return user

// }

module.exports = mongoose.model('User', userSchema)