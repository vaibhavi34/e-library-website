<?php
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $role = $_POST['role'];

    $sql = "INSERT INTO users (name, email, role) VALUES ('$name', '$email', '$role')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('User added successfully!');</script>";
    } else {
        echo "Error: " . $conn->error;
    }