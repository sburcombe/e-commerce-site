<?php
header('Content-Type: application/json');
require_once('functions.php');
set_exception_handler('error_handler');

require_once('db_connection.php');

$query = "SELECT * FROM products";
$result = mysqli_query($conn, $query);


if (!$result){
  throw new Exception('error with query: ' . mysqli_error($conn));
}
// $output = file_get_contents('dummy-products-list.json');
// print($output);
?>
