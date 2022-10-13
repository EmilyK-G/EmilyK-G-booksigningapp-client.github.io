const User = require('../models/userModel')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require ('jsonwebtoken');

const createToken = (_id)=>{
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'})
}

//get all users
const getAllUsers = async (req, res) => {
    try{
        const users = await User.find({}).sort({createdAt: -1})

        res.status(200).json(users)
    }catch(error){
        console.log(error)
    }
}

// login user
const loginUser = async (req, res) => {
    const {email, pin} = req.body

    try {
        const user = await User.login(email, pin)

        //create token
        const token = createToken(user._id)

        res.status(200).json({user, token})
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

//signup user
const signupUser = async function(req, res) {
    const {name, last_name, email, pin, class_of, img, signature} = req.body

    try{
        if(!email || !pin || !name || !last_name || !img || !class_of) {
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

        //create a token
        const token = createToken(user._id)

        res.status(200).json({success: `Congratulations ${name}, you have succesfully created your account`})
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

//update user
const updateUser = async (req, res)=>{

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such user'})
    }

    const user = await User.findOneAndUpdate({_id:id}, {
        ...req.body
    })

    if(!user) {
        return res.status(404).json({error: 'No such user'})
    }

    res.status(200).json(user)
}
module.exports = { signupUser, loginUser, getAllUsers, updateUser }