const express = require('express');
const router = express.Router()
const {ensureAuthenticated} = require('../config/auth')

router.get('/create', ensureAuthenticated, (req,res)=> {
    res.render('quiz',)
})

module.exports= router