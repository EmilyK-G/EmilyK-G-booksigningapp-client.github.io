const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const validator = require('validator')

// login user
const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}

//signup user
const signupUser = async function(req, res) {
    const {name, last_name, email, pin, class_of, img, signature} = req.body

    try{
        // const valid = await User.validate(email, pin)
        // if(!valid){
        //     throw Error()
        // }

        
        //validation
        if(!email || !pin) {
            throw Error('All required fields must be filled')
           }
           if (!validator.isEmail(email)){
            throw Error('Email is not valid')
           }
           if(!validator.isNumeric(pin)){
            throw Error('Try another PIN')
        }
        
        const exists = await User.findOne({ email })

        if(exists) {
            throw Error('Email already in use')
        }
    
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(pin, salt)
    
        const user = await User.create({ name, last_name, email, pin: hash, class_of, img, signature })

        res.status(200).json({email, user})
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { signupUser, loginUser }