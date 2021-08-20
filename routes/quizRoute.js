const express = require('express');
const router = express.Router()
const {ensureAuthenticated} = require('../config/auth')
const Quiz = require("../models/quizSchema")
router.get('/quiz/create', ensureAuthenticated, (req,res)=> {
    classCode = req.query.code
    res.render('quiz', {code:classCode})
})
router.post('/create', (req,res)=> {
    question = req.body.question
    answer = req.body.answer
    classCode=req.body.code.trim()
    name=req.body.name
    const newQuiz = new Quiz({
        "name": name,
        "classCode": classCode,
        "questions": question,
        "answers": answer
    });
    newQuiz.save().then((result)=> {
        console.log(result)
        redirect_path="/class/"+classCode
        console.log(redirect_path)
        res.redirect(redirect_path)
    })
})
module.exports= router