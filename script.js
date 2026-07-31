document.getElementById("searchBtn").addEventListener("click", function () {

    const city = document.getElementById("cityInput").value.trim();

    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    document.getElementById("cityName").textContent = city;
    document.getElementById("temperature").textContent = "Loading...";
    document.getElementById("wind").textContent = "Loading...";

    fetch("https://api.open-meteo.com/v1/forecast?latitude=13.0827&longitude=80.2707&current=temperature_2m,wind_speed_10m")
        .then(response => response.json())
        .then(data => {
            document.getElementById("temperature").textContent =
                data.current.temperature_2m + "°C";

            document.getElementById("wind").textContent =
                data.current.wind_speed_10m + " km/h";
        })
        .catch(() => {
            document.getElementById("temperature").textContent = "Error";
            document.getElementById("wind").textContent = "Error";
        });

});
