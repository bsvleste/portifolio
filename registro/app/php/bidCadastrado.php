<?php
header("Access-Control-Allow-Origin: *");

// get posted data
$data = json_decode(file_get_contents("php://input"));
//pega o id para pesquisar o mes
/*$idMes = $_GET['idMes'];
$valor = $_GET['valor'];
$idMensalidade = $_GET['idMensalidade'];
*/
//faz a conexao com o bd
//$idMensalidade = $data->idMensalidade;
//$idMes = $_GET['idMes'];//$data->idMes;



$conn = new mysqli("localhost", "root", "", "test");
//$result = $conn->query("INSERT INTO bid_jogador (id_user,id_bi,bid) values('$id_user',1,'$bid')");

$result = $conn->query("SELECT users.name, bid_jogador.* FROM bid_jogador
                        JOIN users
                        ON users.id = bid_jogador.id_user
                        WHERE bid_jogador.id_bi = 1");

$outp = "";

while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"Name":"'  . $rs["name"] . '",';  
    $outp .= '"idBid":"'   . $rs["id_bi"]        . '",';  
    $outp .= '"bid":"'. $rs["bid"]     . '"}';
}
$outp ='['.$outp.']';
echo ($outp);
$conn->close();

?>
