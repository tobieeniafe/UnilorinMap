<?php

$post_date = file_get_contents("php://input");
$data = json_decode($post_date);


//saving to database
//save query

//echo "origin : ".$data->origin."\n";
//echo "destination : ".$data->destination."\n";



// echo '<iframe width="500" height="500" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/directions?origin=' . $data->origin . '&destination=' . $data->destination . '&key=AIzaSyBJSHHny8nws7UV01yvrW1ds4FcI0niFM4"></iframe>';

echo '<iframe width="500" height="500" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/directions?origin=place_id:' . $data->origin . '&destination=place_id:' . $data->destination . '&mode='. $data->mode .'&key=AIzaSyBJSHHny8nws7UV01yvrW1ds4FcI0niFM4"></iframe>';


?>
