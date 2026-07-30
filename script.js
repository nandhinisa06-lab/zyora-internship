document.body.style.background = "yellow";
document.getElementById("searchBtn").addEventListener("click", function () {
    alert("Button Clicked!");

    const city = document.getElementById("cityInput").value;

    document.getElementById("cityName").innerHTML = city;
    document.getElementById("temperature").innerHTML = "28°C";
    document.getElementById("wind").innerHTML = "12 km/h";
});
