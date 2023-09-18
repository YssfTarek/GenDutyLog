import express from "express"
import getStation from "../controllers/viewDutyController.mjs"

const router = express.Router()

//Get done duty by station
router.get("/:station", getStation)

export default router