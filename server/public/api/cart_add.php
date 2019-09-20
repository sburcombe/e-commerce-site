<?php
require_once('functions.php');
  // if(!defined('INTERNAL')){
  //   print('Direct access not allowed');
  //   exit();
  // }
$bodyData = getBodyData();
$productId = intval($bodyData['productId']);
print_r($productId);
if($productId <= 0){
  throw new Exception('Product Id must be greater than 0');
}

if (empty($_SESSION['cartId'])) {
  $cartId = false;
} else {
  $cartId = $_SESSION['cartId'];
}
//query to  get the price from products for the given id
$query = "SELECT `price` FROM products WHERE `id` = $productId";
//send the query to the database and store the result
$result = mysqli_query($conn, $query);

//make sure the result is valid and throw an exception if there isn't one
//check how mnany rows came back
if (!$result) {
  throw new Exception('error with query: ' . mysqli_error($conn));
} else if (!empty($bodyData['id']) && !mysqli_num_rows($result)) {
  throw new Exception('invalid ID: ' . $bodyData['id']);
}
//extract the data for the row form the database, store the results
//into productData
$productData = [];
while ($row = mysqli_fetch_assoc($result)) {
  // $row['id'] = intval($row['id']);
  // $row['price'] = intval($row['price']);
  // $row['images'] = explode(",", $row['images']);
  $productData[] = $row;
}

$transactionQuery = "START TRANSACTION";
$transactionResult = mysqli_query($conn, $transactionQuery);
//left off on Back End 7, step 10 xi
if (!$transactionResult){
  throw new Exception('error with transaction '. mysqli_error($conn));
} else if (!$cartId){

}


?>
