const apiKey = "34bb70e90f2b44d8ae4c0b5a3d6aab29";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

const weatherInfo = document.getElementById("weatherInfo");
const cityName = document.getElementById("cityName");
const weatherIcon = document.getElementById("weatherIcon");
const description = document.getElementById("description");
const temperature = document.getElementById("temperature");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) fetchWeather(city);
});

async function fetchWeather(city) {
    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${apiKey}`
        );

        const data = await res.json();

        if (data.cod !== 200) {
            throw new Error(data.message);
        }

        cityName.textContent = `${data.name}, ${data.sys.country}`;
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        description.textContent = data.weather[0].description;
        temperature.textContent = `${data.main.temp.toFixed(1)} °C`;

        weatherInfo.style.display = "block";

    } catch (err) {
        alert("No se pudo obtener el clima (API no activa aún)");
        console.error(err);
    }
}
