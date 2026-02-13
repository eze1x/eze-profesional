const apiKey = "a136b2b213eb70a9a9288a25984bc4bc"; // <-- Reemplazá con tu API key de OpenWeatherMap

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

const weatherInfo = document.getElementById("weatherInfo");
const cityName = document.getElementById("cityName");
const weatherIcon = document.getElementById("weatherIcon");
const description = document.getElementById("description");
const temperature = document.getElementById("temperature");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if(city) {
        fetchWeather(city);
    }
});

cityInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        searchBtn.click();
    }
});

async function fetchWeather(city) {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`);
        if(!res.ok) throw new Error("Ciudad no encontrada");
        const data = await res.json();

        cityName.textContent = `${data.name}, ${data.sys.country}`;
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherIcon.alt = data.weather[0].description;
        description.textContent = data.weather[0].description;
        temperature.textContent = `${data.main.temp.toFixed(1)} °C`;

        weatherInfo.style.display = "flex";
    } catch(err) {
        alert(err.message);
        weatherInfo.style.display = "none";
    }
}
