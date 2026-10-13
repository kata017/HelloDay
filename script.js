const userName = "Kata";

const greetingElement = document.getElementById("greeting");
const dayElement = document.getElementById("day");
const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

const weatherIconElement = document.getElementById("weather-icon");
const weatherTemperatureElement = document.getElementById("weather-temperature");

const weatherLocationElement = document.getElementById("weather-location");
const weatherDescriptionElement = document.getElementById("weather-description");

// ----------------------------------------
// Greeting
// ----------------------------------------
function getGreeting(hour) 
{
    if (hour < 12) 
    {
        return "Good morning";
    }

    if (hour < 18) 
    {
        return "Good afternoon";
    }

    return "Good evening";
}

// ----------------------------------------
// Date & Time
// ----------------------------------------
function updateDateTime()
{
    const now = new Date();
    const hour = now.getHours();

    const greeting = getGreeting(hour);

    const day = now.toLocaleDateString("en-US", 
    {
        weekday: "long"
    });

    const date = now.toLocaleDateString("GB", 
    {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const time = now.toLocaleTimeString("en-US", 
    {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });

    greetingElement.textContent = `${greeting}, ${userName} 👋`;

    dayElement.textContent = day;
    dateElement.textContent = date;
    timeElement.textContent = time;
}

// ----------------------------------------
// Weather description
// ----------------------------------------
function getWeatherDescription(weatherCode) 
{
    const weatherDescriptions = 
    {
        0: "Clear sky",

        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",

        45: "Fog",
        48: "Depositing rime fog",

        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Dense drizzle",

        61: "Slight rain",
        63: "Moderate rain",
        65: "Heavy rain",

        71: "Slight snow",
        73: "Moderate snow",
        75: "Heavy snow",

        80: "Slight rain showers",
        81: "Moderate rain showers",
        82: "Violent rain showers",

        95: "Thunderstorm",
        96: "Thunderstorm with hail",
        99: "Thunderstorm with heavy hail"
    };

    return weatherDescriptions[weatherCode] || "Unknown weather";
}

// ----------------------------------------
// Weather icon
// ----------------------------------------
function getWeatherIcon(weatherCode, isDay) 
{
    if (weatherCode === 0) 
    {
        return isDay ? "☀️" : "🌙";
    }

    if (weatherCode === 1 || weatherCode === 2) 
    {
        return isDay ? "🌤️" : "🌙";
    }

    if (weatherCode === 3) 
    {
        return "☁️";
    }

    if (weatherCode === 45 || weatherCode === 48) 
    {
        return "🌫️";
    }

    if (weatherCode >= 51 && weatherCode <= 67) 
    {
        return "🌧️";
    }

    if (weatherCode >= 71 && weatherCode <= 77) 
    {
        return "❄️";
    }

    if (weatherCode >= 80 && weatherCode <= 82) 
    {
        return "🌦️";
    }

    if (weatherCode >= 95) 
    {
        return "⛈️";
    }

    return "🌤️";
}

// ----------------------------------------
// Get city name
// ----------------------------------------
async function getLocationName(latitude, longitude) 
{
    const url =
        `https://api.bigdatacloud.net/data/reverse-geocode-client` +
        `?latitude=${latitude}` +
        `&longitude=${longitude}` +
        `&localityLanguage=en`;

    const response = await fetch(url);

    if (!response.ok) 
    {
        throw new Error("Location lookup failed");
    }

    const data = await response.json();

    return data.city || data.locality || "Unknown location";
}

// ----------------------------------------
// Get weather
// ----------------------------------------
async function updateWeather(latitude, longitude) 
{
    const weatherUrl =
        `https://api.open-meteo.com/v1/forecast` +
        `?latitude=${latitude}` +
        `&longitude=${longitude}` +
        `&current=temperature_2m,weather_code,is_day` +
        `&timezone=auto`;

    try 
    {
        const response = await fetch(weatherUrl);

        if (!response.ok) 
        {
            throw new Error("Weather request failed");
        }

        const data = await response.json();

        const temperature = Math.round(data.current.temperature_2m);
        const weatherCode = data.current.weather_code;

        const isDay = data.current.is_day === 1;
        const description = getWeatherDescription(weatherCode);
        const icon = getWeatherIcon(weatherCode, isDay);

        weatherIconElement.textContent = icon;
        weatherTemperatureElement.textContent = `${temperature}°C`;
        weatherDescriptionElement.textContent = description;
    } 
    catch (error) 
    {
        console.error("Weather error:", error);

        weatherTemperatureElement.textContent =  "🌤️ Weather unavailable";
        weatherDescriptionElement.textContent = "Please try again later";
    }
}

// ----------------------------------------
// Get user's location
// ----------------------------------------
function getUserLocation() 
{
    if (!navigator.geolocation) 
    {
        weatherTemperatureElement.textContent =  "🌤️ Weather unavailable";
        weatherLocationElement.textContent = "Location not supported";
        weatherDescriptionElement.textContent = "Your browser does not support location services.";

        return;
    }


    navigator.geolocation.getCurrentPosition(
        async (position) => 
        {
            const latitude =  position.coords.latitude;
            const longitude = position.coords.longitude;

            console.log("Latitude:", latitude);
            console.log("Longitude:", longitude);

            try 
            {
                const city = await getLocationName(latitude, longitude);
                weatherLocationElement.textContent = city;
            } 
            catch (error) 
            {
                console.error( "Location name error:", error);
                weatherLocationElement.textContent = "Your location";
            }

            await updateWeather(latitude, longitude);
        },
        (error) => 
        {
            console.error("Geolocation error:", error);

            weatherTemperatureElement.textContent =  "🌤️ Weather unavailable";
            weatherLocationElement.textContent = "Location unavailable";
            weatherDescriptionElement.textContent = "Enable location to see local weather.";
        },
        {
            enableHighAccuracy: false,
            timeout: 10000,
            maximumAge: 300000
        }
    );
}

// ----------------------------------------
// Start HelloDay
// ----------------------------------------

updateDateTime();
getUserLocation();

// Update time every second
setInterval(updateDateTime, 1000);