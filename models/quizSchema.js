const mongoose = require('mongoose')
const reqString = {type: String, required: true}
const reqArray = {type: Array, required:true}
const quizSchema = new mongoose.Schema({
    name: reqString,
    questions: reqArray,
    answers: reqArray,
    classCode: reqString,
    quizId: reqString,
    time: {
        type: Integer, 
        required: true
    }
})

module.exports = mongoose.model('Quiz', quizSchema)