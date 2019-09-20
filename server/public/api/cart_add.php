<?php
  if(!defined('INTERNAL')){
    print('Direct access not allowed');
    exit();
  }
$bodyData = getBodyData();
$productId = intval($bodyData['id']);

if($productId <= 0){
  throw new Exception('Product Id must be greater than 0');
}

if(empty($_SESSION['cartId'])){
  $cartId = false;
} else {
  $cartId=$_SESSION['cartId'];
}

?>
