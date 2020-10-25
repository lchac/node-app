const request = require('postman-request');
const weatherstackAPIKey = '95e6a6bc473718f5ca7499b235b79edb'

// console.log('error:', error);
// console.log('statusCode:', response && response.statusCode);
// console.log('body:', body);

const forecast = (latitude, longitude, callback) => {
    const uri = `http://api.weatherstack.com/current?access_key=${weatherstackAPIKey}&query=${latitude},${longitude}`
    request({ uri, json: true }, function (error, response, body) {

        if (error) {
            callback('Unable to connect to weather service')
        } else if (body.success === false) {
            callback('Unable to find location')
        }
        else {
            const { weather_descriptions, temperature, feelslike } = body.current
            callback(undefined, `${weather_descriptions[0]}. It is currently ${temperature} degrees and it feels like ${feelslike} degrees out. 
            `)
        }
    })
}

module.exports = forecast