const inputBox = document.querySelector(".inputBox");
const searchBtn = document.querySelector("#searchBtn");
const weatherEmoji = document.querySelector(".weatherEmoji");
const temprature = document.querySelector(".temprature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#windSpeed");


const checkWeather = async (city) => {
    const apiKey = "d9cb2578ab5d0a9cc270338165e99e81";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    const weatherData = await fetch(`${url}`).then(response => response.json());

    console.log(weatherData)

    temprature.innerHTML = `${Math.round(weatherData.main.temp-27.15)}°C`;
    description.innerHTML = `${weatherData.wea}`
}

searchBtn.addEventListener("click", () => {
    checkWeather(inputBox.value)
})

