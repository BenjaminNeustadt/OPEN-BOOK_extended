const express = require("express")
const app = express()
app.use(express.json())

app.get('/openbook', (req, res) => {
    res.send('Welcome to OpenBook')
  })

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("website is running")
})
