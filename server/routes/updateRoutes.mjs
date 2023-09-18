import express from "express"
import addDuty from "../controllers/updateDutyController.mjs"

const router = express.Router()

//Update duty by station
router.post("/:station", addDuty)


export default router