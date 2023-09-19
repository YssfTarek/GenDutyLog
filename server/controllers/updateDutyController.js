const Duty = require("../models/dutyModel.js")

//Update duty by station
async function addDuty(req, res) {
    const { station } = req.params

    const { name, type } = req.body

    try {
        const duty = await Duty.create({station, name, type})
        res.status(200).json(duty)
    } catch {
        res.status(400).json({error:error.message})
    }
}

module.exports = addDuty