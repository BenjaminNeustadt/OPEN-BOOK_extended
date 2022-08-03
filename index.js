const express = require("express")
const app = express()
const path = require("path")
app.use(express.json())

app.set('views', path.join(__dirname, 'frontend/views'));
app.set('view engine', 'jade');

app.get('/openbook', (req, res) => {
    res.render("index")
  })

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("website is running")
})
