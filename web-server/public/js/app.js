const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const forecastParagraph = document.querySelector('.forecast')
const locationParagraph = document.querySelector('.location')

weatherForm.addEventListener('submit', (event) => {
    forecastParagraph.textContent = ''
    locationParagraph.textContent = ''
    event.preventDefault()
    const location = search.value
    if (location) {
        forecastParagraph.textContent = 'Loading...'
        const endpoint = `/weather?address=${location}`
        fetch(endpoint)
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    forecastParagraph.textContent = data.error
                } else {
                    forecastParagraph.textContent = data.forecast
                    locationParagraph.textContent = data.location
                }
            })

    }
})

