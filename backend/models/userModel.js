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
        type:String,
        required:true,
        default:
            "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_960_720.png"
    },
    signature: {
        type: String,
        required: true
    }
})

//static login method
userSchema.statics.login = async function(email, pin){
    if(!email || !pin) {
        throw Error('All required fields must be filled')
       }

    const user = await this.findOne({ email })

    if(!user) {
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(pin, user.pin)

    if (!match) {
        throw Error('Incorrect password')
    }

    return user
}


module.exports = mongoose.model('User', userSchema)