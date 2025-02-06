<php

// Database configuration
$host = 'localhost';    // Server address
$db_username = 'if0_38247904';
$db_password = 'EDqh2aokYN';
$db_name = 'if0_38247904';

// Establish connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection

?>

<php
// Include database connection
include 'REconnect.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get form data
    $fullname = $_POST['fullname'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Hash the password for security
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Insert data into the database
    $sql = "INSERT INTO users (fullname,username, email, password) VALUES (?, ?, ?)";
    $stmt->close();
    $conn->close();
}
?>
