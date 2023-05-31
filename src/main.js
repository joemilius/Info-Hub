
//Fetch for the weather
const weatherForm = document.getElementById('location-form')
weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    let input = document.getElementById('location')
    let city = input.value
    let longitude = ''
    let latitude = ''

    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`)
    .then(resp => resp.json())
    .then(data => {
        latitude = data.results[0].latitude
        longitude = data.results[0].longitude
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&temperature_unit=fahrenheit`)
        .then(resp => resp.json())
        .then(data => renderWeather(data))
    })
})

function renderWeather(data){
    let currentHour = parseInt(Date().split(' ')[4])
    let tempArray = data.hourly.temperature_2m.slice(currentHour, currentHour + 24)
    let hourArray = data.hourly.time.slice(currentHour, currentHour + 24)
    console.log(currentHour)
    console.log(tempArray)
    console.log(hourArray)
    for(let i = 0; i < tempArray.length; i++){
        let forecastHour = parseInt(hourArray[i].split('T')[1])
        let forecastScroll = document.getElementById('weather-scroll')

        let weatherDiv = document.createElement('div')
        let weatherImg = document.createElement('img')
        let tempH3 = document.createElement('h3')
        let hourH3 = document.createElement('h3')


        // weatherImg.src = `http:${hourObject.condition.icon}`
        tempH3.textContent = `${Math.trunc(tempArray[i])}°F`
        tempH3.className = 'temp'
        weatherDiv.className = 'eachDay'

        if (forecastHour >= 12){
            hourH3.textContent = `${forecastHour - 12}pm`
        } else if(forecastHour < 12 && forecastHour > 0){
            hourH3.textContent = `${forecastHour}am`
        }else {
            hourH3.textContent = '12am'
        }

        weatherDiv.append(hourH3)
        // weatherDiv.append(weatherImg)
        weatherDiv.append(tempH3)
        forecastScroll.append(weatherDiv)
    }
}



//***** Code For Using Weather API that Requires a Key*****/
// fetch(`http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=1&aqi=no&alerts=no`)
    // .then(response => response.json())
    // .then(data => {
    //     let forecastScroll = document.getElementById('weather-scroll')
    //     forecastScroll.innerHTML = ''
    //     data.forecast.forecastday[0].hour.forEach(hour => renderWeather(hour))
    // })

// function renderWeather(hourObject){
//     let currentHour = parseInt(Date().split(' ')[4])
//     let forecastHour = parseInt(hourObject.time.split(' ')[1])

//     let forecastScroll = document.getElementById('weather-scroll')

//     let weatherDiv = document.createElement('div')
//     let weatherImg = document.createElement('img')
//     let tempH3 = document.createElement('h3')
//     let hourH3 = document.createElement('h3')


//     weatherImg.src = `http:${hourObject.condition.icon}`
//     tempH3.textContent = `${parseInt(hourObject.temp_f)}°F`
//     weatherDiv.className = 'eachDay'

//     if (forecastHour >= 12){
//         hourH3.textContent = `${forecastHour - 12}pm`
//     } else if(forecastHour < 12 && forecastHour > 0){
//         hourH3.textContent = `${forecastHour}am`
//     }else {
//         hourH3.textContent = '12am'
//     }

//     if(currentHour <= forecastHour){
//         weatherDiv.append(hourH3)
//         weatherDiv.append(weatherImg)
//         weatherDiv.append(tempH3)
//         forecastScroll.append(weatherDiv)
//     }
// }