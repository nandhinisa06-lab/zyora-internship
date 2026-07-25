const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Enter a valid email.");
        return;
    }

    alert("Form submitted successfully!");
});
const quote = document.getElementById("quote");
const button = document.getElementById("newQuoteBtn");

async function getQuote() {
    quote.textContent = "Loading...";

    try {
        const response = await fetch("https://api.github.com/users/octocat");
        const data = await response.json();

        quote.innerHTML = `
            <h3>${data.name}</h3>
            <p>Username: ${data.login}</p>
            <p>Followers: ${data.followers}</p>
        `;
    } catch (error) {
        quote.textContent = "Couldn't fetch data";
    }
}

getQuote();

button.addEventListener("click", getQuote);
