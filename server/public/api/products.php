<?php
require_once('functions.php');
set_exception_handler('error_handler');
startup();
require_once('db_connection.php');
if (!empty($_GET['id'])) { //if id is selected
  $id = $_GET['id'];
  if(!is_numeric($id)){
    throw new Exception('id needs to be a number');
  }
  $query = "SELECT products.*, GROUP_CONCAT(images.img_url) AS imageArray
    FROM products
    JOIN images
        ON products.id = images.product_id
        WHERE products.id=1
    GROUP BY products.id";
  // $whereClause = "WHERE id = " . $id;
} else { //if no id was selcted -- list all
  // $whereClause = '';
  $query = "SELECT products.*, GROUP_CONCAT(images.img_url) AS imageArray
    FROM products
    JOIN images
        ON products.id = images.product_id
        GROUP BY products.id";
}


$result = mysqli_query($conn, $query);


if (!$result){
  throw new Exception('error with query: ' . mysqli_error($conn));
} else if(!empty($_GET['id']) && !mysqli_num_rows($result) ) {
  throw new Exception('invalid ID: ' . $_GET['id']);
}
$data = [];
while($row = mysqli_fetch_assoc($result)){
  $row['id'] = intval($row['id']);
  $row['price'] = intval($row['price']);
  $data[] = $row;
}
if(empty($_GET['id'])){
  print(json_encode($data));
} else {
    print(json_encode($data[0]));
}

?>
