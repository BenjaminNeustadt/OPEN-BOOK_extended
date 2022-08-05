// Libraries
require('colors');
const connectDB = require('./config/db');
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const http = require('http');
const debug = require("debug")("openbook:server");

// Application & port
const app = express();
const port = normalizePort(process.env.PORT || "3000");

// Model route naming
const Bookshop = require("./models/bookshop");

// DATABASE CONNECTION & CONFIRMATION

connectDB()
// Mongoose connection
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// MIDDLEWARE

app.use(express.json());
// Recognize incoming Request Object as JSON Object (inbuilt express)
app.use(express.urlencoded({ extended: false }))
// Recognize incoming Request Object as strings or arrays inbuilt express)

// ROUTE SETUP

app.get("/openbook", (req, res) => {
  Bookshop.find((err, bookshops) => {
    res.render('index', { bookshops: bookshops } )
  })
});

// VIEW ENGINE SETUP

// Jade path set-up
app.set("views", path.join(__dirname, "frontend/views"));
app.set("view engine", "jade");
// bootstrap connection
app.use(express.static(path.join(__dirname + "/public")));
app.use("/bootstrap", express.static(path.join(__dirname + "/node_modules/bootstrap/dist/css")))

// Normalize a port into a number, string, or false.
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Create HTTP server.
 */

  const server = http.createServer(app);

 /**
  * Listen on provided port, on all network interfaces.
  */
 
 server.listen(port);
 server.on('error', onError);
 server.on('listening', onListening);

// Event listener for HTTP server "error" event.
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log("Now listening on " + bind);
  debug('Listening on ' + bind);
}
