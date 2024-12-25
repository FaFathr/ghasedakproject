<?php
header("Content-Type: application/json");

$servername = "localhost";
$username = "comghased_qsdku";
$password = "EeSiOeNE@tHD";
$dbname = "comghased_qsdk"; 

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode(["error" => "عدم امکان ارتباط با دیتابیس"]));
}

$DatabaseCreateQuery = "CREATE DATABASE IF NOT EXISTS `$dbname`";
if (!$conn->query($DatabaseCreateQuery)) {
    echo json_encode(["error" => "دیتابیس ایجاد نشد:" . $conn->error]);
    $conn->close();
    exit;
}
$conn->select_db($dbname);

$tableCreateQuery = "
CREATE TABLE IF NOT EXISTS REGISTER (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    phonenumber VARCHAR(255) NOT NULL,
    product VARCHAR(255) NOT NULL,
    api_key VARCHAR(64) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";
if (!$conn->query($tableCreateQuery)) {
    echo json_encode(["error" => "جدول ایجاد نشد:" . $conn->error]);
    $conn->close();
    exit;
}

function generateApiKey($length = 64) {
    return bin2hex(random_bytes($length / 2));
}

function register($firstname, $lastname, $phonenumber, $product) {
    global $conn;

    if (!isset($firstname, $lastname, $phonenumber, $product)) {
        echo json_encode(["error" => "ورودی نامعتبر"]);
        exit;
    }

    $apiKey = generateApiKey();
    $stmt = $conn->prepare("INSERT INTO REGISTER (firstname, lastname, phonenumber, product, api_key) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $firstname, $lastname, $phonenumber, $product, $apiKey);

    if ($stmt->execute()) {
        echo json_encode(["message" => "عملیات با موفقیت انجام شد", "api_key" => $apiKey]);
    } else {
        echo json_encode(["error" => "عملیات با خطا مواجه شد: " . $conn->error]);
    }

    $stmt->close();
}

$inputData = json_decode(file_get_contents('php://input'), true);
if (isset($inputData['firstname'], $inputData['lastname'], $inputData['phonenumber'], $inputData['product'])) {
    register($inputData['firstname'], $inputData['lastname'], $inputData['phonenumber'], $inputData['product']);
} else {
    echo json_encode(["error" => "اطلاعات کامل ارسال نشده است"]);
}

$conn->close();
?>
