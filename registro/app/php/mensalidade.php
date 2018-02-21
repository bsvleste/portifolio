<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// get posted data
$postdata = file_get_contents("php://input",true);
$request = json_decode($postdata);
//$mes = $request->mes;
$mes = $_GET['id'];
$id_jogador = $_GET['idJogador'];
$conn = new mysqli("localhost", "root", "", "test");

//$result = $conn->query("SELECT * FROM mensalidade WHERE id_mes='1'");
$result = $conn->query("SELECT users.id ,users.name , mes.id_mes,mes.descricao_mes, mensalidade.* from mensalidade
						INNER JOIN users
						ON mensalidade.id = users.id
						INNER JOIN mes
						ON mes.id_mes = mensalidade.id_mes
						WHERE mensalidade.id = '{$id_jogador}' AND mensalidade.id_mes = '{$mes}'");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"id_jogador":"'  . $rs["id"] . '",';
    $outp .= '"nome":"'   . $rs["name"]        . '",';  
    $outp .= '"id_mes":"'   . $rs["id_mes"]        . '",';  
    $outp .= '"descricao_mes":"'   . $rs["descricao_mes"]        . '",';  
    $outp .= '"valor":"'   . $rs["valor"]        . '",';  
    $outp .= '"status":"'. $rs["status"]     . '"}';
}
$outp ='['.$outp.']';
$conn->close();

echo($outp);
?>
