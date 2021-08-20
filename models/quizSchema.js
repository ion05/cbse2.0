const mongoose = require('mongoose')
const reqString = {type: String, required: true}
const reqArray = {type: Array, required:true}
const quizSchema = new mongoose.Schema({
    name: reqString,
    questions: reqArray,
    answers: reqArray,
    classCode: reqString
})

module.exports = mongoose.model('Quiz', quizSchema)