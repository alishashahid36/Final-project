<?php
$host = 'localhost';
$dbname = 'contact_form';
$username = 'root';
$password = '';

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $_POST['username'];
$password = $_POST['password'];

$stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $users = $result->fetch_assoc();
    if (password_verify($password, $users['password'])) {
        // Password is correct, start a session
        $_SESSION['users'] = $username;
        header("Location: index.html"); // Redirect to a welcome page or dashboard
        exit();
    } else {
        echo "Incorrect password!";
    }
} else {
    echo "Username does not exist!";
}
$stmt->close();
?>
