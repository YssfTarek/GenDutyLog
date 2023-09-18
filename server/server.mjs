import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import dutyRoutes from "./routes/dutyRoutes.mjs"
import updateRoutes from "./routes/updateRoutes.mjs"

dotenv.config()

const PORT = process.env.PORT || ""
const DB_URI = process.env.DB_URI || ""

const app = express()

app.set("trust proxy", true)

app.use(cors())

app.use(express.json()) 

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

app.use("/api/duties", dutyRoutes)
app.use("/api/duties/update", updateRoutes)

mongoose.connect(DB_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`connected to db and listening on port ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })