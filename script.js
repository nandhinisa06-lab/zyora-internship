// Dark Mode Toggle
const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {
    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
}

// Weather Search
const searchBtn = document.getElementById("searchBtn");

if (searchBtn) {
    searchBtn.addEventListener("click", function () {
        const city = document.getElementById("cityInput").value.trim();

        if (city === "") {
            alert("Please enter a city name.");
            return;
        }

        document.getElementById("cityName").textContent = city;
        document.getElementById("temperature").textContent = "28°C";
        document.getElementById("wind").textContent = "12 km/h";

        alert("Weather loaded successfully!");
    });
}
