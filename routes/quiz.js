const express = require('express')
const route = express.Router()

route.get('/',(req,res)=>{
  res.render('quiz',{
    layout:"layout/quiz_header",
    title:'QUIZ'

  })
})
module.exports = route