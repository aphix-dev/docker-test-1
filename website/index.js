const { response } = require('express')
var http = require('http')

var options = {
    host: "localhost:5001",
    path: "/"
}

var str = ''

callback = (response) => {

    response.on('data', function(chunk) {
        str += chunk
    })

    response.on('end', function() {
        console.log(str)
    })
}

http.request(options, callback).end()

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.write(str)
    res.end()
})

const PORT = 5002
app.listen(PORT, () => console.log(`listening on port ${PORT}`))