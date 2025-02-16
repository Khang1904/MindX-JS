let city = prompt("City?");
let councode = prompt("2-letter country code?");

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${councode}&appid=18f242276b008c5e59df1868169b50cb`)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        const weatherTitle = `<h2>Weather in ${data.name}, ${data.sys.country}</h2>`;
        const weatherInfo = `<p>Temperature: ${(data.main.temp - 273.15).toFixed(2)} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>`;
        document.querySelector(".card-title").innerHTML = weatherTitle;
        document.querySelector(".card-text").innerHTML = weatherInfo;
    })
    .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
    });