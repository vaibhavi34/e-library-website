<?php

// Configuration
$db_host = 'localhost:8080';
$db_username = 'root';
$db_password = '';
$db_name = 'db';

// Create connection
$conn = new mysqli($dbhost, $db_username, $db_password, $dbname,);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $full_name = $_POST["full_name"];
    $user_name = $_POST["user_name"];
    $email_address = $_POST["email_address"];
    $password = $_POST["password"];

    // SQL query to insert data
    $sqli = "registration (full_name, user_name, email_address, password) VALUES ('$name', 'user_name', '$email_address', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close connection
$conn->close();

?>
