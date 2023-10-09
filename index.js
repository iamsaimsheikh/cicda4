const express =  require("express")
const app = express()

const port  = process.env.port || 3000;

app.get("/", (req, res) => {
    res.send("Assignment 4 Version 1")
})

app.listen(port, () => {
    console.log(`Assigment 4 Project Started On Port:${port}`)
})