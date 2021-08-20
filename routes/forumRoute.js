const express = require("express");
const router = express.Router();

const { nanoid } = require("nanoid");
const { ensureAuthenticated } = require("../config/auth");
const Question = require("../models/questionSchema");

router.post("/", (req, res) => {
  const newQuestion = new Question({
    title: req.body.title,
    description: req.body.description,
    backlink: nanoid(6),
  });

  newQuestion.save(function (err, result) {
    redirect_path = "/forums/" + result.backlink;
    res.redirect(redirect_path);
  });

  console.log("Question Logged");
});

router.get("/:backlink", ensureAuthenticated, (req, res) => {
  backlink = req.params.backlink;
  Question.findOne({ backlink: backlink }).then((result) => {
    console.log(result.answers);
    res.render("forums", {
      questions: null,
      title: result.title,
      description: result.description,
      backlink,
      answers: result.answers,
    });
  });
});

router.get("/", ensureAuthenticated, (req, res) => {
  Question.find({}, (err, questions) => {
    if (err) {
      console.log(err);
    }
    res.render("forums", { questions: questions});
  });
});

router.post("/:backlink/answer", (req, res) => {
    backlink = req.params.backlink;

            let answer = {
            "title": req.body.title,
            "description": req.body.description      
        }

        Question.findOneAndUpdate({backlink: backlink}, {$push: {"answers": answer}}).then((results)=>{
            res.redirect("/forums")
        })
    })
   

module.exports = router;
