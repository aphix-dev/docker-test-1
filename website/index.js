const { response } = require('express')
const request = require('request');
var http = require('http')

var options = {
    host: "localhost",
    path: "/",
    port: 5001,
    method: 'GET'
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

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(str)
})

const PORT = 5002
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
    //http.request(options, callback).end()
    request('http://product:5001/', (err, res, body) => {
        if (err) { 
            return console.log(err);
        }
        console.log(body);
    });
})