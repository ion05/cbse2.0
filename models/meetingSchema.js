const mongoose  = require('mongoose')
const reqString = {type:String, required:true}

const meetingSchema = new mongoose.Schema({
    subject: reqString,
    topic: reqString,
    meetingLink: reqString
})

module.exports = mongoose.model('Meeting', meetingSchema)