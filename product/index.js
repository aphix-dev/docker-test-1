const express = require('express')
const app = express()

app.get('/', (req, res) => {
    //res.json({
    //    'fruit': 'milk'
    //})
    res.write("Hello from Docker")

    res.end()
})

const PORT = 5001
app.listen(PORT, console.log(`Server listening on port ${PORT}`))