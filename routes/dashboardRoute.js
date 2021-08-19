const express = require("express");
const router = express.Router();
const {ensureAuthenticated} = require("../config/auth")

router.get("/", ensureAuthenticated, (req,res)=>{
    currentUser = req.user
    res.render("dashboard", {user:currentUser}  )
})

module.exports = router;