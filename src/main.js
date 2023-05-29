
//Fetch for the weather
const weatherForm = document.getElementById('location-form')
weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let input = document.getElementById('location')
    let city = input.value
    console.log(city)

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=1&aqi=no&alerts=no`)
    .then(response => response.json())
    .then(data => data.forecast.forecastday[0].hour.forEach(hour => renderWeather(hour)))
})

function renderWeather(hourObject){
console.log(hourObject)
}