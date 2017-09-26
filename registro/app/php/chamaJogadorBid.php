<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// get posted data
$postdata = file_get_contents("php://input",true);
$request = json_decode($postdata);

$conn = new mysqli("localhost", "root", "", "colisao");
$id=0;
$pegaId = $conn->query("SELECT MAX(ID_PARTIDA) as id FROM partida");
//seleciona todos os jogadores
//passa o ultimo id cadastrado 
$somaId = $pegaId->fetch_array(MYSQLI_ASSOC);
//recebe o ultimo id cadsatrado
$id = $somaId['id'];
//$result = $conn->query("SELECT * FROM mensalidade WHERE id_mes='1'");
$jogadores = $conn->query("SELECT jogador.nome as nome , jogador_jogo.Bid as bid FROM jogador_jogo 
							INNER JOIN jogador
							on jogador.ID_JOGADOR = jogador_jogo.ID_JOGADOR
							WHERE ID_PARTIDA = '$id'");
//$result = $conn->query("SELECT * FROM jogador");
$outp = "";
while($rs = $jogadores->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"Nome":"'  . $rs["nome"] . '",';
    $outp .= '"Bid":"'. $rs["bid"]     . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>