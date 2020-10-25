const http = require('http')

const weatherstackAPIKey = '95e6a6bc473718f5ca7499b235b79edb'
const url = `http://api.weatherstack.com/current?access_key=${weatherstackAPIKey}&query=40,-75`

const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data += chunk.toString()
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log("error", error)
})

request.end()