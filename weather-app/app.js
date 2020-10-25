const { geocode } = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const argvs = process.argv;

if (!argvs[2]) {
    console.log('Please provide an address')
} else {
    geocode(argvs[2], (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return console.log("Geoloation Error", error)
        }

        forecast(latitude, longitude, (error, forecastsData) => {
            if (error) {
                return console.log("Forecast Error", error)

            }

            console.log(location)
            console.log(forecastsData)
        })
    })
}