const express = require("express")
const { getShops } = require("../controllers/mapshops");
const router = express.Router();
//Router() function is used to create a new router object. 


router.get("/", getShops);

module.exports = router;