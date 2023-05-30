
//Fetch for the weather
const weatherForm = document.getElementById('location-form')
weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    let input = document.getElementById('location')
    let city = input.value
    console.log(city)

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=1&aqi=no&alerts=no`)
    .then(response => response.json())
    .then(data => {
        let forecastScroll = document.getElementById('weather-scroll')
        forecastScroll.innerHTML = ''
        data.forecast.forecastday[0].hour.forEach(hour => renderWeather(hour))
    })
})

function renderWeather(hourObject){
    let currentHour = parseInt(Date().split(' ')[4])
    let forecastHour = parseInt(hourObject.time.split(' ')[1])

    let forecastScroll = document.getElementById('weather-scroll')

    let weatherDiv = document.createElement('div')
    let weatherImg = document.createElement('img')
    let tempH3 = document.createElement('h3')
    let hourH3 = document.createElement('h3')


    weatherImg.src = `http:${hourObject.condition.icon}`
    tempH3.textContent = `${parseInt(hourObject.temp_f)}°F`
    weatherDiv.className = 'eachDay'

    if (forecastHour >= 12){
        hourH3.textContent = `${forecastHour - 12}pm`
    } else if(forecastHour < 12 && forecastHour > 0){
        hourH3.textContent = `${forecastHour}am`
    }else {
        hourH3.textContent = '12am'
    }

    if(currentHour <= forecastHour){
        weatherDiv.append(hourH3)
        weatherDiv.append(weatherImg)
        weatherDiv.append(tempH3)
        forecastScroll.append(weatherDiv)
    }
}