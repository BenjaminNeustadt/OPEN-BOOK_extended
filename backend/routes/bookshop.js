const express = require("express")
const router = express.Router();
//Router() function is used to create a new router object. 

const BookShopsController = require("../controllers/bookshops");

router.get("/", BookShopsController.Display);
router.get("/search", BookShopsController.Search);
router.get("/search/results", BookShopsController.SearchResults)

module.exports = router;
