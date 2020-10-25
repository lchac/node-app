const request = require('postman-request');
const mapboxAPIKey = 'pk.eyJ1IjoibHVpY2giLCJhIjoiY2tnb2FsMDBiMDl0ZjJ0cWhva2VidTN1cSJ9.jORcNnqaV040uBuOhQevTg'

const geocode = (address, callback) => {
    const encodedAddress = encodeURIComponent(address)
    const uri = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=${mapboxAPIKey}`

    request({ uri, json: true }, function (error, response, { features }) {
        if (error) {
            callback('Unable to connect to location services!!!')
        } else if (features.length === 0) {
            callback('Unable to find location. Try another search')
        } else {

            callback(undefined, {
                latitude: features[0].center[1],
                longitude: features[0].center[0],
                location: features[0].place_name
            })
        }
    })
}

module.exports = {
    geocode
}