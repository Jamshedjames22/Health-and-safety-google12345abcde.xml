// Add interactivity for the "Learn More" button
document.getElementById("learnMoreBtn").addEventListener("click", () => {
    window.location.href = "about.html";
});

// Handle the contact form submission
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
});