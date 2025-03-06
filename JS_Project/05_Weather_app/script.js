const apiKey = '049ea2475453216654b696a9ca4195e7'; // Ensure this API key is valid
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const weatherCondition = document.getElementById('weatherCondition');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        alert('Please enter a city name.');
    }
});

async function fetchWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('City not found. Please check the city name.');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

function displayWeather(data) {
    cityName.textContent = `Weather in ${data.name}, ${data.sys.country}`;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    weatherCondition.textContent = `Condition: ${data.weather[0].description}`;
}
