<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// get posted data
$postdata = file_get_contents("php://input",true);
$request = json_decode($postdata);

$conn = new mysqli("localhost", "root", "", "colisao");

//$result = $conn->query("SELECT * FROM mensalidade WHERE id_mes='1'");
$result = $conn->query("SELECT * FROM jogador");
$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"Nome":"'  . $rs["nome"] . '",';
    $outp .= '"id":"'. $rs["ID_JOGADOR"]     . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>