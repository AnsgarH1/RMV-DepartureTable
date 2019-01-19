<?php
    
    $input = $_GET["content"];
	$baseUrl = "https://www.rmv.de/hapi/location.name?accessId=2e275638-45cb-4f79-b647-dcbbfb7a76e2&format=json&type=S&input=";
    
    $url = $baseUrl. $input;
    
    echo json_encode(file_get_contents($url));
 ?>