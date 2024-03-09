// date
// time
// day
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// api2 = https://api.weatherapi.com/v1/current.json?key=b066456b8199489e8af122413240903&q=guna



function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

function showPosition(position) {
    curCoords = position.coords.latitude + ',' + position.coords.longitude
    updateWeather(curCoords)
}

getLocation()

const date = document.querySelector('.date')
const time = document.querySelector('.time')
const day = document.querySelector('.day')
const cityName = document.querySelector('.city-name')
const weatherStat = document.querySelector('.weather-status')
const temp = document.querySelector('.temp')
const realFeel = document.querySelector('.real-feel')
const search = document.querySelector('.search-button')
const cityInput = document.querySelector('input')
const humidity = document.querySelector('#humidity')
const windSpeed = document.querySelector('#windSpeed')
const minTemp = document.querySelector('#minTemp')
const maxTemp = document.querySelector('#maxTemp')
const longitude = document.querySelector('#longitude')
const latitude = document.querySelector('#latitude')


const apiURL = "https://api.weatherapi.com/v1/current.json?key="
const apiKey = "b066456b8199489e8af122413240903"
let city = ""

async function updateWeather(city){
    // apiCall = apiURL + city + "&appid=" + apiKey + "&units=metric"
    apiCall = apiURL + apiKey + "&q=" + city
    const response = await fetch(apiCall)
    let data = await response.json();
    function runAPI2(){
        cityName.innerHTML = `${data.location.name}`
        weatherStat.innerHTML = `${data.current.condition.text}`
        temp.innerHTML = `${Math.round(data.current.temp_c)}°C`
        realFeel.innerHTML = `Feels like ${Math.round(data.current.feelslike_c)}°C`
        humidity.innerHTML = `${Math.round(data.current.humidity)}%`
        windSpeed.innerHTML = `${Math.round(data.current.wind_kph)} km/h`
        minTemp.innerHTML = `UV: ${Math.round(data.current.uv)}`
        maxTemp.innerHTML = `${Math.round(data.current.vis_km)} km`
        longitude.innerHTML = `${data.location.lon}°`
        latitude.innerHTML = `${data.location.lat}°`
    }

    function runAPI1(){
        cityName.innerHTML = `${data.name}`
        weatherStat.innerHTML = `${data.weather[0].main}`
        temp.innerHTML = `${Math.round(data.main.temp)}°C`
        realFeel.innerHTML = `Feels like ${Math.round(data.main.feels_like)}°C`
        humidity.innerHTML = `${Math.round(data.main.humidity)}%`
        windSpeed.innerHTML = `${Math.round(data.wind.speed)} km/h`
        minTemp.innerHTML = `${Math.round(data.main.temp_min)}°C`
        maxTemp.innerHTML = `${Math.round(data.main.temp_max)}°C`
        longitude.innerHTML = `${data.coord.lon}°`
        latitude.innerHTML = `${data.coord.lat}°`
    }

    runAPI2()
    

}
search.addEventListener('click', function(){
    city = String(cityInput.value)
    if(city==''){
        cityInput.style.outline="2px solid rgb(249, 60, 60)"
    }
    else{
        cityInput.style.outline="0"
        updateWeather(city)
    }
})

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

dateTime = new Date()

date.innerHTML = `${dateTime.getDate()} ${month[dateTime.getMonth()]}`
    time.innerHTML = `${dateTime.getHours()}:${dateTime.getMinutes()}`
    day.innerHTML = `${week[dateTime.getDay()]}`

setInterval(()=>{
    dateTime = new Date()
    if(dateTime.getHours()<10){
        time.innerHTML = `0${dateTime.getHours()}:${dateTime.getMinutes()}`
    }
    else{
        time.innerHTML = `${dateTime.getHours()}:${dateTime.getMinutes()}`
    }
    if(dateTime.getMinutes()<10){
        time.innerHTML = `${dateTime.getHours()}:0${dateTime.getMinutes()}`
    }
    else{
        time.innerHTML = `${dateTime.getHours()}:${dateTime.getMinutes()}`
    }
    date.innerHTML = `${dateTime.getDate()} ${month[dateTime.getMonth()]}`
    day.innerHTML = `${week[dateTime.getDay()]}`

}, 1000)
