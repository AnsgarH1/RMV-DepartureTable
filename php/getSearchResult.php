<?php
    
    $input = $_GET["content"];
	$baseUrl = "https://www.rmv.de/hapi/location.name?accessId=INSERTYOURAPIKEYHERE&format=json&type=S&input=";
    
    $url = $baseUrl. $input;
    
    echo json_encode(file_get_contents($url));
 ?>
