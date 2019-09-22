<?php
require_once('functions.php');
require_once('db_connection.php');
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
print_r("cart id ". $cartId);
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
print_r($productData);

$transactionQuery = "START TRANSACTION";
$transactionResult = mysqli_query($conn, $transactionQuery);
//left off on Back End 7, step 10 xi
if (!$transactionResult){
  throw new Exception('error with transaction '. mysqli_error($conn));
} else if (!$cartId){
  /*if our cart ID is false, make an insert query to insert a new entry into the cart table
    Do NOT specify the id, it is auto incrementing.  specify 'created' as being equal to the mysql function NOW()*/
  $insertQuery = "INSERT INTO `cart`
                  SET `created` = NOW()";

  //send query to mysql and get the result
  $insertResult = mysqli_query($conn, $insertQuery);
  if(!$insertResult){
    throw new Exception ('error with insert ' . mysqli_error($conn));
  }
  //Use mysqli affected rows to see if a row was inserted or not
  if(mysqli_affected_rows($conn) != 1){
    throw new Exception ('rows inserted do not equal 1');
  };
  //use mysqli insert id to get the id of the cart that was created
  //store it into both cartId and $_SESSION[`cartId`]
  $cartId = mysqli_insert_id($conn);
  $_SESSION['cartId'] = mysqli_insert_id($conn);
  print_r('cartId '. $cartId);
}

?>
