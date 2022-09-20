const express = require('express')

//controller functions

const { signupUser, loginUser, getAllUsers } = require('../controllers/userController')

const router = express.Router()

//get all users route
router.get('/', getAllUsers)

//login route
router.post('/login', loginUser)

//signup route
router.post('/signup', signupUser)

module.exports = router