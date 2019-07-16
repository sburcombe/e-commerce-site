<?php
require_once('functions.php');
set_exception_handler('error_handler');
startup();
require_once('db_connection.php');

$query = "SELECT * FROM products";
$result = mysqli_query($conn, $query);


if (!$result){
  throw new Exception('error with query: ' . mysqli_error($conn));
}
$data = [];
while($row = mysqli_fetch_assoc($result)){
  $data[] = $row;
}

print(json_encode($data));
?>
