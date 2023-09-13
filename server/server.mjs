import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || ""

const app = express()

app.use(cors())

app.get("/", (req,res) => {
    res.json({mssg:"Welcome to your app"})
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})