const locateBtn = document.querySelector('#get-location')
const locate = document.querySelector('.locate')
const locationName = document.querySelector('.location')
const temp = document.querySelector('.temp')
const clouds = document.querySelector('.clouds')
const imgSrc = document.querySelector('.img')
const main = document.querySelector('.main')



addEventListener('DOMContentLoaded', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
            let output = ''
            fetch(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`)
            .then((res) => res.json())
            .then((result) => {
                output += `<div>
                    <h2>${result.name}, ${result.sys.country}</h2>
                    <h3>${result.main.temp},<span id="toggle">&#8451;</span></h3>
                    <p>${result.weather[0].main}</p> 
                    <img src=${result.weather[0].icon}/>    
                    <button onclick="convertMe()">Convert</button>          
                </div>`
                main.innerHTML = output
            })
        })
    }
})


const convertMe = () => {
    let cel = true
    const celsius = document.querySelector('h3');
    const cToF = celsius.textContent
    const fahrenheit = (parseFloat(cToF) * 1.8) + 32
    celsius.innerHTML = `${fahrenheit}, <span>&#8457;</span>`
   
    
}