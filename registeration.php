<?php

/*
Ways to connect to a MySQL Database 
1. MySQli extension
2. PDO 
*/
// connecting td the Database
$servername = "localhost";
$username = "root";
$password = "";
$database = " dbnew785";

// Create connection
$conn = mysqli_connect($servername, $username, $password,  );

// Die if connection was not successful
if (!$conn) {
    die("Sorry we failed to connect: " . mysqli_connect_error());
}
else{
    echo "registeration succesfull<br>";
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if 'fullname' key exists
    $fullname = isset($_POST['fullname']) ? trim($_POST['fullname']) : '';
    $username = isset($_POST['username']) ? trim($_POST['username']) : '';
    $emailaddress = isset($_POST['emailaddress']) ? trim($_POST['emailaddress']) : '';
    $password = isset($_POST['password']) ? trim($_POST['password']) : '';

 
    if (empty($fullname) || empty($email) || empty($password)) {
        echo "All fields are required!"; 
    } else {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "Invalid email format!";
        } else {
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);
            $sql = "INSERT INTO `redbnew785`(`Id`, `fullname`, `username`, `emailaddress`, `password`) VALUES (?, ?, ? ? ?)";

            if ($stmt = $conn->prepare($sql)) {
                $stmt->bind_param("sss", $fullname, $email, $hashed_password);
                if ($stmt->execute()) {
                    echo "Registration successful!<br>";
                } else {
                    echo "Error: " . $stmt->error;
                }
                $stmt->close();
            }
        }
    }
}
?>

  <script>
function doPost(e) {
  var sheet = SpreadsheetApp.openById("https://script.google.com/macros/s/AKfycbzRorh-ZbyJqCNjh500sqZGvBcUsim386gl7y8_JSu2SbzA8vd7L3_leL9py0yb1crUdw/exec").getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.fullname,
    data.username,
    data.emailaddress,
    data.password,
  ]);

  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}

  </script>
  
