<?php
$host = 'localhost';
$dbname = 'contact_form';
$username = 'root';
$password = '';

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, first_name, last_name, email, message FROM user";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table border='1'><tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Message</th></tr>";
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["id"]. "</td><td>" . $row["first_name"]. "</td><td>" . $row["last_name"]. "</td><td>" . $row["email"]. "</td><td>" . $row["message"]. "</td></tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}

$conn->close();
?>
