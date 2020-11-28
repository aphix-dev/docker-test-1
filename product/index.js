const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log("WORKS")
    //res.json({
    //    'fruit': 'milk'
    //})
    res.send("Hello from Docker");

})

const PORT = 5001
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})