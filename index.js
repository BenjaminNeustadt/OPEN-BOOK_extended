// Libraries

const express = require("express");
const path = require("path");

/**
 * Application & port
 */

const app = express();

/**
 * Model route naming
 */ 

const Bookshop = require("./models/bookshop");

/**
 * MIDDLEWARE
 */

app.use(express.json());
// Recognize incoming Request Object as JSON Object (inbuilt express)
app.use(express.urlencoded({ extended: false }))
// Recognize incoming Request Object as strings or arrays inbuilt express)

/**
 * ROUTE SETUP
 */

app.get("/", (req, res) => {
  res.redirect("/openbook")
})

app.get("/openbook", (req, res) => {
  const bookshopIds = []
  Bookshop.find((err, bookshops) => {
    bookshops.forEach((bookshop) => {
      let shop = bookshop.name.replace(/'/g, "").split(" ")
      shop = shop.join("").toLowerCase()
      bookshopIds.push(shop)
    })
    res.render('index', { bookshops: bookshops, bookshopIds: bookshopIds })
  })
});

app.get("/users/new", (req, res) => {
  res.render('sign_up')
})

app.post("/sessions/new", (req, res) => {
  res.redirect('/sessions/new')
})

app.get("/sessions/new", (req, res) => {
  res.render('sign_up')
})

app.get("/search", (req, res) => {
  res.render('search')
})

app.get("/search/results", (req, res) => {
  Bookshop.find({ name: req.query.search }, (err, nameResults) => {
    if (err) {
      throw err
    }
    res.render('search_results', {bookshops: nameResults})
  })
 
})



/**
 * VIEW ENGINE SETUP
 */

// Jade path set-up
app.set("views", path.join(__dirname, "frontend/views"));
app.set("view engine", "jade");
// bootstrap connection
app.use(express.static(path.join(__dirname + "/public")));
app.use("/bootstrap", express.static(path.join(__dirname + "/node_modules/bootstrap/dist/css")))

module.exports = app;