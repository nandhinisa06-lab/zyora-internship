document.getElementById("searchBtn").addEventListener("click", function () {

    const city = document.getElementById("cityInput").value.trim();

    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    // Display City
    document.getElementById("cityName").textContent = city;

    // Demo Weather Data
    document.getElementById("temperature").textContent = "28°C";
    document.getElementById("wind").textContent = "12 km/h";

    alert("Weather loaded successfully!");
});
