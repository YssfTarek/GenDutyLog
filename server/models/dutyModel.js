const mongoose = require("mongoose")

const Schema = mongoose.Schema

const dutySchema = new Schema({
    station: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type:String,
        required:true
    }
}, {timestamps:true}, {collection:"duties"})

module.exports = mongoose.model("Duty", dutySchema)