<?php
require_once('functions.php');
require_once('db_connection.php');
if (!defined('INTERNAL')) {
  print('Direct access not allowed');
  exit();
}

if(empty($_SESSION['cartId'])) {
  print(json_encode([]));
  exit();
}

$cartId = intval($_SESSION['cartId']);
// $cartItemsQuery = //Select all from cartItems where cartId = cartId
                  //Join cartitems with products on productID
                  //to get id, name, price, shortDescription
                  //subquery to get the first image from images table
                  //you'll need to only get the cart where the cart ID is the
                  //one you are looking for

//Send the query to mysql and get the result
//Retrieve the data you got from the query and print it out.
//If there is nothing there, make sure it prints out an empty array
?>
