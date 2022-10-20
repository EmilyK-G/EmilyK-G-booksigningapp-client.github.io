require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const signatureRoutes = require('./routes/signatures')
const userRoutes = require('./routes/user')

// express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/signatures', signatureRoutes)
app.use('/api/user', userRoutes)

//connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    // listen for request
    app.listen(process.env.PORT || 4000, () =>{
        console.log('connected to db & listening on port', process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
})


process.env