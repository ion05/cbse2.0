const express = require("express");
const router = express.Router();
const {ensureAuthenticated} = require("../config/auth")
const User = require('../models/userSchema')
const Class = require('../models/classSchema')
router.get("/", ensureAuthenticated,  (req,res)=> {
    currentUser = req.user
    User.findOne({'email':req.user.email}).then((result) => {
        const classes = result.classes
        console.log(classes)
        const classesobj = [];
        for (var i = 0; i <classes.length; i++) {
            const result =  Class.findOne({'classId':classes[i]})
            classesobj.push(result)
        }
        console.log(classesobj)
        res.render("dashboard", {user:currentUser, classes:classesobj}  )
    })
    
})

module.exports = router;