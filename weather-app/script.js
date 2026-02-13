const apiKey = "34bb70e90f2b44d8ae4c0b5a3d6aab29"; // Tu API key de OpenWeatherMap

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

const weatherInfo = document.getElementById("weatherInfo");
const cityName = document.getElementById("cityName");
const weatherIcon = document.getElementById("weatherIcon");
const description = document.getElementById("description");
const temperature = document.getElementById("temperature");

// Buscar al hacer click
searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if(city) {
        fetchWeather(city);
    }
});

// Buscar al presionar Enter
cityInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        searchBtn.click();
    }
});

async function fetchWeather(city) {
    try {
        // Codifica la ciudad para que los espacios no rompan la URL
        // Opcional: agrega ",AR" si querés limitar a Argentina
        const encodedCity = encodeURIComponent(city); 

        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${apiKey}&units=metric&lang=es`);
        
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
