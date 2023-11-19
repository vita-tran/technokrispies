<?php
// Some PHP logic to process data
$response = ['message' => 'Hello from PHP backend!'];

// Sending data back to React in JSON format
header('Content-Type: application/json');
echo json_encode($response);
?>