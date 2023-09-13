import Duty from "../models/dutyModel.mjs"

//Get all done duties
export async function grabAll (req,res) {
    try {
        const duty = await Duty.find({}).sort({station: -1})
        res.status(200).json(duty)
        } catch (error) {
            res.status(400).json({error: error.message})
    }    
}

//Get done duty by station
export async function getStation (req,res) {

    const { station } = req.params

    try {
        const duty = await Duty.findOne({station:station})
        res.status(200).json(duty)
        } catch (error) {
            res.status(400).json({error: error.message})
    }
}

//POST done duty by station
export async function newStation(req,res) {

    const { station } = req.params
    const { name } = req.body

    try {
        const duty = await Duty.create({station, name})
        res.status(200).json(duty)
        } catch (error) {
            res.status(400).json({error: error.message})
    }
}
