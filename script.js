document.getElementById("searchBtn").addEventListener("click", function () {

    const city = document.getElementById("cityInput").value.trim();

    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    // Display City
    document.getElementById("cityName").textContent = city;
document.getElementById("temperature").textContent = "Loading...";
document.getElementById("wind").textContent = "Loading...";

fetch("https://api.open-meteo.com/v1/forecast?latitude=13.08&longitude=80.27&current_weather=true")
.then(response => response.json())
.then(data => {
    document.getElementById("temperature").textContent =
        data.current_weather.temperature + "°C";

    document.getElementById("wind").textContent =
        data.current_weather.windspeed + " km/h";
})
.catch(error => {
    document.getElementById("temperature").textContent = "Error";
    document.getElementById("wind").textContent = "Error";
});
