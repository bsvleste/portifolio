<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// get posted data
/*$postdata = file_get_contents("php://input",true);
$request = json_decode($postdata);
*/
//pega o id para pesquisar o mes
$mes = $_GET['id'];
//faz a conexao com o bd
$conn = new mysqli("localhost", "root", "", "test");

//$result = $conn->query("SELECT * FROM mensalidade WHERE id_mes='1'");
//faz a consulta sql no bd
$result = $conn->query("SELECT users.name, users.id as 'id_jogador', mes.id_mes, mes.descricao_mes, mensalidade.valor, mensalidade.status, mensalidade.id_mensalidade FROM mensalidade
						INNER JOIN users
						ON mensalidade.id = users.id
						INNER JOIN mes
						ON mensalidade.id_mes = mes.id_mes					
						WHERE mensalidade.id_mes = '{$mes}'");
//recebe os dados da consulta sql
$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"Name":"'  . $rs["name"] . '",';
    $outp .= '"Status":"'   . $rs["status"]        . '",';  
    $outp .= '"Id_jogador":"'   . $rs["id_jogador"]        . '",';  
    $outp .= '"descricaoMes":"'   . $rs["descricao_mes"]        . '",';  
    $outp .= '"idMensalidade":"'   . $rs["id_mensalidade"]        . '",';  
    $outp .= '"idMes":"'   . $rs["id_mes"]        . '",';  
    $outp .= '"Valor":"'. $rs["valor"]     . '"}';
}
$outp ='['.$outp.']';
$conn->close();

echo($outp);
?>
