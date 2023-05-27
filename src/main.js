
//Fetch for the weather
fetch(`http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=Denver&days=7&aqi=no&alerts=no`)
.then(response => response.json())
.then(data => console.log(data))