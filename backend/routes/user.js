const express = require('express')

//controller functions

const { signupUser, loginUser, getAllUsers, updateUser } = require('../controllers/userController')

const router = express.Router()

//get all users route
router.get('/', getAllUsers)

//login route
router.post('/login', loginUser)

//signup route
router.post('/signup', signupUser)

//update route
router.patch('/update/:id', updateUser)

module.exports = router