const express = require("express")
const router = express.Router()


const Meeting = require("../models/meetingSchema")
const Class = require("../models/classSchema")
const {ensureAuthenticated} = require("../config/auth")


const { v4: uuidv4 } = require('uuid');


router.get("/", (req,res)=>{
    res.render("meetings")
})

router.get("/create", ensureAuthenticated, (req,res)=>{
    const currentUser = req.user
    console.log(currentUser);    
    let meetingId = uuidv4();

    res.render("create-meeting")
    const newMeeting = new Meeting({
        subject: req.body.subject,
        topic: req.body.topic,
        meetingLink: meetingId
    })

        // if(currentUser.isTeacher == false){
        //     res.send("Sorry this is only available to teachers.")
        // }
    
})

router.get("/:meetingId",ensureAuthenticated,(req, res)=>{
    res.render("meet", {meetingId: meetingId})
})



module.exports = router;