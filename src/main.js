
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
let forecastScroll = document.getElementById('weather-scroll')
console.log(hourObject)
let weatherDiv = document.createElement('div')
let weatherImg = document.createElement('img')
let tempH3 = document.createElement('h3')

weatherImg.src = `http:${hourObject.condition.icon}`
tempH3.textContent = `${hourObject.temp_f}°F`


let currentHour = parseInt(Date().split(' ')[4])
let forecastHour = parseInt(hourObject.time.split(' ')[1])
if(currentHour <= forecastHour){
weatherDiv.append(weatherImg)
weatherDiv.append(tempH3)
forecastScroll.append(weatherDiv)
}
}