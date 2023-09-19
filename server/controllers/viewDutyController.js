const Duty = require("../models/dutyModel.js")

//Get done duty by station
async function getStation (req,res) {

    const { station } = req.params

    try {
        const duty = await Duty.find({station:station})
        res.status(200).json(duty)
        } catch (error) {
            res.status(400).json({error: error.message})
    }
}

module.exports = getStation