<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization,Content-Range,Content-Disposition,Origin, X-Requested-With , Content-Type");
header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");

// get posted data
$data = json_decode(file_get_contents("php://input"));
//pega o id para pesquisar o mes
/*$idMes = $_GET['idMes'];
$valor = $_GET['valor'];
$idMensalidade = $_GET['idMensalidade'];
*/
//faz a conexao com o bd
$conn = new mysqli("localhost", "root", "", "test");

//$result = $conn->query("SELECT * FROM mensalidade WHERE id_mes='1'");
//faz a consulta sql no bd
$resultado = $conn->query("UPDATE mensalidade SET valor='$data->Valor' WHERE mensalidade.id_mensalidade = '$data->idMensalidade'");
$conn->close();
?>
