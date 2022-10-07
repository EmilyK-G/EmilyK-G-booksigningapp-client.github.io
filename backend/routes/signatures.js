const express = require('express')
const {
    createSignature, 
    getSignature, 
    getSignatures,
    getSignaturesSent,
    deleteSignature,
    updateSignature
} = require('../controllers/signatureController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//require auth for all signature routes
router.use(requireAuth)

// GET all signatures
router.get('/', getSignatures)

//GET signatures sent
router.get('/sent', getSignaturesSent)

//GET a single signature
router.get('/:id', getSignature)

//POST a new signature 
router.post('/', createSignature)

//DELETE a signature

router.delete('/sent/:id', deleteSignature)

//UPDATE a signature

router.patch('/sent/:id', updateSignature)

module.exports = router