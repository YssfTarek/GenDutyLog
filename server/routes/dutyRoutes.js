const express = require("express")
const getStation = require("../controllers/viewDutyController.js")

const router = express.Router()

//Get done duty by station
router.get("/:station", getStation)

module.exports = router