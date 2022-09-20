const express = require('express')
const {
    createSignature, 
    getSignature, 
    getSignatures,
    deleteSignature,
    updateSignature
} = require('../controllers/signatureController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//require auth for all signature routes
router.use(requireAuth)

// GET all signatures
router.get('/', getSignatures)

//GET a single signature
router.get('/:id', getSignature)

//POST a new signature 
router.post('/', createSignature)

//DELETE a signature

router.delete('/:id', deleteSignature)

//UPDATE a signature

router.patch('/:id', updateSignature)

module.exports = router