const mongoose  = require('mongoose')
const reqString = {type:String, required:true}

const questionSchema = new mongoose.Schema({
    title: reqString,
    description: reqString,
    answers: {type: Array, default: []},
    backlink: reqString
})

module.exports = mongoose.model('Question', questionSchema)