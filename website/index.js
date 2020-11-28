const { response } = require('express')
const request = require('request');

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("NO Idea but SOME DATA lol")
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