// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simulate storing the data
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // You can replace this with an actual storage mechanism (e.g., sending to a server)
        alert("Message received. Thank you!");

        // Optionally, clear the form after submission
        form.reset();
    });
});