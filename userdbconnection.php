<?php
$host = "localhost"; // Change this if your database is hosted remotely
$username = "root";  // Default username for local MySQL (change if needed)
$password = "";  // Default password for local MySQL (set your own if required)
$database = "e_library"; // Your database name

// Create a connection to the database
$conn = new mysqli($host, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>