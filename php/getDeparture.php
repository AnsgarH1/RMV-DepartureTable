<?php 
	
	header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
	header("Access-Control-Allow-Origin: *");
	header('Content-Type: application/json');
	
	
	$stopExtID = $_GET["stopExtId"];	
	$baseUrl = "https://www.rmv.de/hapi/departureBoard?accessId=2e275638-45cb-4f79-b647-dcbbfb7a76e2&format=json&extId=";
	
	$url = $baseUrl. $stopExtID;
	
	echo json_encode(file_get_contents($url));
?>

