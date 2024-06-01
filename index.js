/*
    index.js
    Robert Baglow
    301349269
    Spring 2024
    Section: 401
    31/05/2024
*/
// Import the Express module
const express = require('express');

// Import the Path module for working with file and directory paths
const path = require('path');

// Create an instance of an Express application
const app = express();

// Define the port number the server will listen on
const port = 3000;

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root URL ('/') that sends the 'index.html' file as a response
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});