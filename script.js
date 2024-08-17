const inputBox = document.querySelector(".inputBox");
const searchBtn = document.querySelector("#searchBtn");
const weatherEmoji = document.querySelector(".weatherEmoji");
const temprature = document.querySelector(".temprature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#windSpeed");
const locationNotFound = document.querySelector(".locationNotFound");
const weatherBody = document.querySelector(".weatherBody");
const container = document.querySelector(".container");
const fetching = document.querySelector(".fetching")


const checkWeather = async (city) => {

    //fetching data from API
    
    const apiKey = "d9cb2578ab5d0a9cc270338165e99e81";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    const weatherData = await fetch(`${url}`).then(response => response.json());


    console.log(weatherData);

    //showing error

    if(weatherData.cod === "404") {
        locationNotFound.style.display = "flex";
        weatherBody.style.display = "none"
        fetching.style.display = "none"
        return;
    }


    weatherBody.style.display = "flex"
    fetching.style.display = "none"


    //getting data from API

    temprature.innerHTML = `${Math.round(weatherData.main.temp-273.15)}°C`;
    description.innerHTML = `${weatherData.weather[0].description}`;
    humidity.innerHTML = `${weatherData.main.humidity}%`;

    windSpeed.innerHTML = `${Math.round(weatherData.wind.speed*18/5)}km/H`;

    //changing emojis based on the weather

    switch(weatherData.weather[0].main) {
        case "Clouds" : weatherEmoji.innerHTML = "⛅";
        break;
        case "Haze" : weatherEmoji.innerHTML = "😶‍🌫";
        break;
        case "Rain" : weatherEmoji.innerHTML = "🌧";
        break;
        case "Mist" : weatherEmoji.innerHTML = "🌁";
        break;
        case "Snow" : weatherEmoji.innerHTML = "☃";
        break;
        case "Clear" : weatherEmoji.innerHTML = "☀";
        break;
    }
}

// add eventListener

searchBtn.addEventListener("click", () => {
    checkWeather(inputBox.value);
    fetching.style.display = "flex"
    locationNotFound.style.display = "none"
})

