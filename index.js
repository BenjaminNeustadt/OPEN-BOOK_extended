// Libraries

const express = require("express");
const path = require("path");
const Bookshop = require("./backend/models/bookshop")
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');


// load env vars
dotenv.config({ path: '.env' });

/**
 * Application & port
 */

const app = express();

// Connect to DB
connectDB()

// Enable cors
app.use(cors());

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

// Route attributes attribution
const BookShopRouter = require("./backend/routes/bookshop")

app.use("/api/map", require("./backend/routes/mapshop"))

app.use("/", BookShopRouter);
app.use("/openbook", BookShopRouter);


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