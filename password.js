// Example of storing password in plain text in JavaScript

var password = "myPassword123"; // Password stored in plain text

// Rest of the code...

// Function that uses the password
function login(username) {
    var enteredPassword = prompt("Please enter your password"); // User enters password
    if (enteredPassword === password) { // Password is compared in plain text
        console.log("Login successful!");
        // Rest of the login logic...
    } else {
        console.log("Incorrect password. Please try again.");
        // Rest of the error handling logic...
    }
}
