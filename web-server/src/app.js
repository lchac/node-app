const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { geocode } = require('../../weather-app/utils/geocode')
const forecast = require('../../weather-app/utils/forecast')

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Andrew Mead'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Andrew Mead'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        message: 'This is a Help Message!',
        name: 'Andrew Mead'
    })
})

app.get('/weather', (req, res) => {
    const { address } = req.query
    if (!address) {
        return res.send({ error: 'You must provide an address' })
    }

    geocode(address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error: 'Geolocation Error' })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error: 'Forecast Error' })
            }


            res.send({
                forecast: forecastData,
                location,
                address
            })
        })
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({ error: 'You must provide a search term' })
    }

    res.send([])
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Oops',
        message: 'Help article not found.',
        name: 'Andrew Mead'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Oops',
        message: 'Page Not Found',
        name: 'Andrew Mead'
    })
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})