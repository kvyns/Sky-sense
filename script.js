// date
// time
// day
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

console.log(screen.height)
console.log(screen.width)
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


const apiURL = "https://api.openweathermap.org/data/2.5/weather?q="
const apiKey = "ab70b3b1979597798c5d122ef75a248c"
let city = 'Patna'

async function updateWeather(){
    apiCall = apiURL + city + "&appid=" + apiKey + "&units=metric"
    const response = await fetch(apiCall)
    let data = await response.json();
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
search.addEventListener('click', function(){
    city = String(cityInput.value)
    updateWeather()
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
