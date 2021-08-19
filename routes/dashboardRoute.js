const express = require("express");
const router = express.Router();
const {ensureAuthenticated} = require("../config/auth")
const User = require('../models/userSchema')

router.get("/", ensureAuthenticated, (req,res)=>{
    currentUser = req.user
    User.findOne({'email':req.user.email}).then((result) => {
        const classes = result.classes
        res.render("dashboard", {user:currentUser, classes:classes}  )
    })
    
})

module.exports = router;