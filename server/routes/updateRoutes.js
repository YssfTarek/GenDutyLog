const express = require("express")
const addDuty = require("../controllers/updateDutyController.js")

const router = express.Router()

//Update duty by station
router.post("/:station", addDuty)


module.exports = router