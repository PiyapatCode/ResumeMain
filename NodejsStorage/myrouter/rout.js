const express = require('express')
const router = express.Router()
const path = require('path')
const app = express()
const openpage = path.join(__dirname,"../../FirstPage/Html/OpenPage.html")
// const cssopen = path.sjoin(__dirname,"../../FirstPage/Body/SkillPage.css")
router.get('/',(req,res)=>{
    res.status(200)
    res.type('text/html')
    res.sendFile(openpage)
    // res.sendFile(cssopen)
   
})
router.get('/Admin/:id',(req,res)=>{
    const mypara = req.params.id
    if (mypara === "1"){
    res.status(200)
    res.type('text/html')
    res.sendFile(path.join(__dirname,"../../AdminPage/Html/BackHome.html"))
    }
    else{
        res.redirect('/')
    }
})
module.exports = router