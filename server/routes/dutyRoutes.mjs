import express from "express"
import Duty from "../models/dutyModel.mjs"
import { grabAll, getStation, newStation } from "../controllers/dutyController.mjs"

const router = express.Router()

//Get all done duties
router.get("/", grabAll)

//Get done duty by station
router.get("/:station", getStation)

//POST done duty by station
router.post("/:station", newStation)

export default router