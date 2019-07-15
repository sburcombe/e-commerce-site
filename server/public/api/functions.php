<?php
 function error_handler($error){
   $output = array(
     "success"=>false,
     "error"=> $error.GetMessage()
   )

   $json_output =json_encode($output);
 }
?>
