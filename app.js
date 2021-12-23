const express = require("express")
const app = express

app.use('/', (req, res) => {
    res.send("Test")
})

app.listen(5009, () => {
    console.log("App run on port 3002")
})