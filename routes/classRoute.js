const express = require('express')
const router = express.Router();
var randomString = require('randomstring');
const Class = require("../models/classSchema")
const User = require('../models/userSchema')
const {ensureAuthenticated} = require("../config/auth")

router.post('/create', (req,res) => {
    name = req.body.name
    description = req.body.description
    classId = randomString.generate(5)
    teacher= req.user.username;
    students = [];
    // console.log(teacher)
    const newClass = new Class({
        "name": name,
        "description": description,
        "classId": classId,
        "teacher": teacher,
        "meetingLink": "",
        "students": students
    });
    
    newClass.save(function(err, result) {
        if (err) return console.log(err)
        redirect_path = "/class/"+result.classId
        res.redirect(redirect_path)
    })


})
router.get("/:classId", ensureAuthenticated , (req,res) => {
    const user=req.user
    classId = req.params.classId
    console.log("Class id is ", classId)
    Class.findOne({"classId": classId}).then((result) => {
        // console.log(result)
        res.render('class', {classCode: classId, className: result.name, user:user})
    })
    
})

router.post('/join', (req,res)=> {
    classCode = req.body.code 

    
    Class.findOneAndUpdate({"classId": classCode},{$push: {'students':req.user.email }}).then((result)=> {
        console.log('Added Student')
        User.updateOne({'email': req.user.email}, {$push: {"classes": result.classId}}).then((result) => {
            classPath = "/class/"+classCode
            res.redirect(classPath)
        })
        
    })
})


module.exports = router;