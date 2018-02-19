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
$result = $conn->query("SELECT users.name, mensalidade.* FROM mensalidade
						INNER JOIN users
						ON mensalidade.id = users.id					
						WHERE mensalidade.id_mes = '{$mes}'");
//recebe os dados da consulta sql
$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"Name":"'  . $rs["name"] . '",';
    $outp .= '"Status":"'   . $rs["status"]        . '",';  
    $outp .= '"Valor":"'. $rs["valor"]     . '"}';
}
$outp ='['.$outp.']';
$conn->close();

echo($outp);
?>
