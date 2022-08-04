// Connect to MongoDB

const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || "mongodb://0.0.0.0/openbook")

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error){
    console.log(error);
    process.exit(1)
  }
}



// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = connectDB



// mongoose.connect(mongoDbUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });