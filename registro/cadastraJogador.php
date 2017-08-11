<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

//faz a conexao com o banco de dados
$conn = new mysqli("localhost", "root","", "test");
//pega o ultimo id cadastrado
$pegaId = $conn->query("SELECT MAX(ID_PARTIDA) as id FROM partida");
//seleciona todos os jogadores
$jogadores = $conn->query("SELECT ID_JOGADOR FROM jogador");
//passa o ultimo id cadastrado 
$somaId = $pegaId->fetch_array(MYSQLI_ASSOC);
//recebe o ultimo id cadsatrado
$id = $somaId['id'];
while ($rs = $jogadores->fetch_array(MYSQLI_ASSOC)) {
	$data = $rs['ID_JOGADOR'];
	echo "ids dos jogaodrs".$data."\n";

	$cadastraJogadores = $conn->query("INSERT INTO jogador_jogo(ID_JOGADOR,ID_PARTIDA,Bid)
	 								   VALUES ($data,$id,'v')");
	
}
	$data = array('enviado'=>true);
	echo json_encode($data);	
$conn->close();

?>