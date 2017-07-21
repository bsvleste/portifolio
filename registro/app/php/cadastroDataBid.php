<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// get posted data
$postdata = file_get_contents("php://input",true);
$request = json_decode($postdata);
$dataPartida = $request->hoje;
$dataEncerramentoBid = $request->dataEncerramentoBid;

$conn = new mysqli("localhost", "root", "test");

$result = $conn->query("INSERT INTO partida (DATA_PARTIDA, DATABID) VALUES('{$dataPartida}','{$dataEncerramentoBid}')");

$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>