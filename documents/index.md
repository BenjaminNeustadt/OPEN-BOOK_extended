### NOTES ON REFACTORING `index.js`
```js
const express = require("express");
const colors = require('colors');
const dotenv = require('dotenv').config()
const path = require("path");
const connectDB = require('./config/db')
const app = express();
const port = normalizePort(process.env.PORT || "3000");

const debug = require("debug")("openbook:server");
const http = require("http");
const mongoose = require("mongoose");

connectDB()

app.listen(port, () => console.log(`Server is running on: ${port}`))

app.use(express.json());

//Jade path set-up
app.set("views", path.join(__dirname, "frontend/views"));
app.set("view engine", "jade");

// bootstrap connection
app.use(express.static(path.join(__dirname + "/public")));
app.use("/bootstrap", express.static(path.join(__dirname + "/node_modules/bootstrap/dist/css")))

// Route (initial)
app.get("/openbook", (req, res) => {
  res.render("index");
});

// Get port from environment and store in Express.
app.set("port", port); 
```
#### Following code omitted
(unsure what this is for, currently)
```js

// Create HTTP server.
var server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

// Normalize a port into a number, string, or false.

function normalizePort(val) {
  var port = parseInt(val, 10);

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

// Event listener for HTTP server "error" event.
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

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
```

- - - -
#### `api.listen()` vs `http.creareServer()`
WHEN FOLLOWING FUNCTION AND line 40 - 43 not taken out get the error that ALREADY IN USE:

Cf. Answer in StackOverflow:
https://stackoverflow.com/questions/60765304/why-we-pass-app-in-http-createserverapp

###### IN SHORT: 

`var server = http.createServer(app);` 

is the same thing as: 

`app.listen(port, () => console.log(`Server is running on: ${port}`))`

Replaced app.listen() with http.createServer() as it allows more functionality, allowing us to handle specific error messages to the console.
We end up keeping the `var server = http.createServer(app);`  because it allows us to do more with it than the app.listen();
Next: extract into a bin with bin/www
- - - - 
```js

// Event listener for HTTP server "listening" event.
function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  console.log("Now listening on " + bind);
  debug("Listening on " + bind);
}


// MIDDLEWARE
// Recognize incoming Request Object as JSON Object (inbuilt express)
app.use(express.json());
```
##### Added this
```js
// Recognize incoming Request Object as strings or arrays inbuilt express)
app.use(express.urlencoded({ extended: false }))
```

#### `express.json()` & `express.urlencoded()`
EXPLANATION that should clear doubts on express.json() and express.urlencoded() and the use of body-parser.

https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded

- - - - 

## Add the two bookshops to your local database

* Run `mongosh`
* Run `use OpenBook`
* Run `db.bookshops.insertOne( { name: "Gay's the Word", address: ["66 Marchmont Street", "London", "WC1N 1AB"], website: "https://gaystheword.co.uk", openingHours: ['Monday - Saturday: 11am - 6pm', 'Sunday: 1pm - 6pm'], tags: ['LGBT', 'Queer-Owned'] } )`
* Run `db.bookshops.insertOne( { name: "Round Table Books", address: ["97 Granville Arcade", "Coldharbour Lane", "Brixton", "London", "SW9 8PS"], website: "https://www.roundtablebooks.co.uk", openingHours:['Sunday - Friday: 11am - 5:30pm', 'Saturday: 9:30am - 5:30pm'], tags: ["Children's Books", 'Black-owned Business', 'Inclusive'] } )`