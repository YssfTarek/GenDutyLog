import mongoose from "mongoose"

const Schema = mongoose.Schema

const dutySchema = new Schema({
    station: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, {timestamps:true}, {collection:"duties"})

export default mongoose.model("Duty", dutySchema)