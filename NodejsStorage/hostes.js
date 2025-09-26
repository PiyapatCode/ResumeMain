const express = require('express')
const router = require('./myrouter/rout')
const path = require('path')
const app = express()
app.use(router)


app.listen(2710,()=>{
    console.log("Start Server")
})