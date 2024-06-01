/*
    script.html
    Robert Baglow
    301349269
    Spring 2024
    Section: 401
    31/05/2024
*/
// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function() {
    // Get the contact form element by its ID
    const form = document.getElementById("contact-form");

    // Add an event listener to handle form submission
    form.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior (which would reload the page)
        event.preventDefault();

        // Get the values entered in the form fields
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simulate storing the data by logging it to the console
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // Display an alert to the user indicating the message was received
        // In a real application, this would be replaced with code to send the data to a server
        alert("Message received. Thank you!");

        // Optionally, clear the form fields after submission
        form.reset();
    });
});