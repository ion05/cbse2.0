const express = require('express');
const router = express.Router()
const {ensureAuthenticated} = require('../config/auth')
const Quiz = require("../models/quizSchema")
var randomString = require('randomstring');
router.get('/quiz/create', ensureAuthenticated, (req,res)=> {
    classCode = req.query.code
    res.render('quiz', {code:classCode})
})
router.post('/create', (req,res)=> {
    question = req.body.question
    answer = req.body.answer
    classCode=req.body.code.trim()
    quizId= randomString.generate(7)

    name=req.body.name
    const newQuiz = new Quiz({
        "name": name,
        "classCode": classCode,
        "questions": question,
        "answers": answer,
        'quizId': quizId,
    });
    newQuiz.save().then((result)=> {
        console.log(result)
        redirect_path="/class/"+classCode
        console.log(redirect_path)
        res.redirect(redirect_path)
    })
})
router.get("/:quizId", ensureAuthenticated, (req,res)=> {
    const user=req.user
    quizId = req.params.quizId
    console.log("Quiz id is ", quizId)
    Quiz.findOne({"quizId": quizId}).then((result) => {
        quizQuestions = result.questions
        quizAnswers = result.answers
        quizName = result.name
        res.render('quiz-attempt', {quizName: quizName,user:user, questions:quizQuestions, answers:quizAnswers,code:result.quizId})
    })
    
})
router.post('/check/:quizId', ensureAuthenticated, (req,res)=> {
    const user=req.user
    console.log("Reached Here")
    quizId = req.params.quizId
    console.log("Quiz id is ", quizId)
    Quiz.findOne({"quizId": quizId}).then((result) => {
        quizAnswers = result.answers
        quizName = result.name
        stdAnswers = req.body.stdanswer
        correctAnswers=0
        wrongAnswers=[];
        for (var i =0; i < stdAnswers.length; i++) {
            if (stdAnswers[i].trim()==quizAnswers[i].trim()) {
                correctAnswers++
            } else {
                wrongAnswers.push(i)
            }
        }
        console.log('Correct answers are ',correctAnswers)
        console.log('Wrong answers are ', wrongAnswers)
        res.render('quiz-finish', {user:req.user, correctNo:correctAnswers, wrongIndex: wrongAnswers, correctAns:quizAnswers, stdAns:stdAnswers})
    })
})

module.exports= router