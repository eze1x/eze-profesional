const apiKey = "34bb70e90f2b44d8ae4c0b5a3d6aab29";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const statusMsg = document.getElementById("statusMsg");

const weatherInfo = document.getElementById("weatherInfo");
const cityName = document.getElementById("cityName");
const weatherIcon = document.getElementById("weatherIcon");
const description = document.getElementById("description");
const temperature = document.getElementById("temperature");

const feels = document.getElementById("feels");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const minmax = document.getElementById("minmax");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) fetchWeather(city);
});

cityInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") searchBtn.click();
});

window.addEventListener("load", () => {
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) {
        cityInput.value = lastCity;
        fetchWeather(lastCity);
    }
});

async function fetchWeather(city) {
    try {
        statusMsg.textContent = "Cargando clima...";
        searchBtn.disabled = true;
        weatherInfo.classList.add("hidden");

        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${apiKey}`
        );
        const data = await res.json();

        if (data.cod !== 200) throw new Error();

        cityName.textContent = `${data.name}, ${data.sys.country}`;
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        description.textContent = data.weather[0].description;
        temperature.textContent = `${data.main.temp.toFixed(1)} °C`;

        feels.textContent = `${data.main.feels_like.toFixed(1)} °C`;
        humidity.textContent = `${data.main.humidity}%`;
        wind.textContent = `${data.wind.speed} m/s`;
        minmax.textContent = `${data.main.temp_min.toFixed(0)}° / ${data.main.temp_max.toFixed(0)}°`;

        weatherInfo.classList.remove("hidden");
        statusMsg.textContent = "";

        localStorage.setItem("lastCity", city);

    } catch {
        statusMsg.textContent = "Ciudad no encontrada ❌";
    } finally {
        searchBtn.disabled = false;
    }
}
