document.getElementById("searchBtn").addEventListener("click", function () {

    const city = document.getElementById("cityInput").value.trim();

    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    document.getElementById("cityName").textContent = city;
    document.getElementById("temperature").textContent = "28°C";
    document.getElementById("wind").textContent = "12 km/h";

    alert("Weather loaded successfully!");
});
