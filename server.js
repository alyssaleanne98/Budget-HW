
// ========= DEPENDENCIES ==========
const express = require('express'); 
const budget = require('./HW/models/budget');
const app = express()
const PORT = 3000

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.get('/budget', (req, res) => {
  res.send("it worked")
})
app.use(express.static('public'))
app.listen(3000)