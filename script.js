const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const greetBtn = document.getElementById("greetBtn");
const nameInput = document.getElementById("nameInput");
const greetingMessage = document.getElementById("greetingMessage");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const year = document.getElementById("year");

// Set current year automatically
year.textContent = new Date().getFullYear();

// Dark / Light mode
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
        themeToggle.textContent = "🌙";
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
    }
});

// Mobile navigation
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuToggle.textContent = navMenu.classList.contains("open") ? "✕" : "☰";
});

// Close mobile navigation after clicking a link
document.querySelectorAll("#navMenu a").forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuToggle.textContent = "☰";
    });
});

// Interactive greeting
greetBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();

    if (name === "") {
        greetingMessage.textContent = "Please enter your name first!";
        return;
    }

    greetingMessage.textContent = `Hello, ${name}! 👋 Welcome to my portfolio.`;
    nameInput.value = "";
});

// Allow Enter key in greeting input
nameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        greetBtn.click();
    }
});

// Simple contact form interaction
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("contactName").value.trim();

    formMessage.textContent = `Thanks, ${name}! Your message has been received.`;

    contactForm.reset();
});
