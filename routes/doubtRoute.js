const express = require('express')
const { ensureAuthenticated } = require('../config/auth')
const router = express.Router()
const fetch = require('node-fetch');

router.get('/', ensureAuthenticated, (req,res)=> {
    const user = req.user
    res.render('doubt', {user:user, answer:null})
})

router.post('/', ensureAuthenticated, async (req,res)=> {
    const question = req.body.question
    console.log(question)
    // req_url = "https://bot-core.azurewebsites.net/qnamaker//knowledgebases/82696fc7-597a-44b4-95c6-ba1aebc5aa4e/generateAnswer?Content-type='application/json'
    const response = await fetch('https://bot-core.azurewebsites.net/qnamaker/knowledgebases/82696fc7-597a-44b4-95c6-ba1aebc5aa4e/generateAnswer', {
        'method': 'POST',
        body: JSON.stringify({
            'question': question
        }),
        headers: {
            "Content-type": 'application/json',
            'Authorization': process.env.API_KEY
        }
    })
    const data = await response.json();
    answer = data['answers'][0]['answer']
    res.render('doubt', {answer:answer})

})

module.exports = router