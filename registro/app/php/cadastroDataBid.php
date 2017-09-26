<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
// get posted data
// get posted data

$postdata = file_get_contents("php://input",true);
$request = json_decode($postdata);
$dataPartida = $request->hoje;
$dataEncerramentoBid = $request->dataEncerramentoBid;

/*$dataPartida = $_POST['hoje'];
$dataEncerramentoBid = $_POST['dataEncerramentoBid'];		
*/
//INICIA o id 
$id = 1;
//conecta no banco de dados
$conn = new mysqli("localhost", "root","", "colisao");
//pega o ultimo id cadastrado
$pegaId = $conn->query("SELECT MAX(ID_PARTIDA) as id FROM partida");
//passsa para inteiro o ultimo id cadastrado
$somaId = $pegaId->fetch_array(MYSQLI_ASSOC);
//soma com o ultimo id para cadastrar um novo id
$id += $somaId['id'];
//cadastra uma nova data no banco de dados
$result = $conn->query("INSERT INTO partida (ID_PARTIDA, DATA_PARTIDA, DATABID) 
						VALUES('$id','$dataPartida','$dataEncerramentoBid')");
//seleciona o nome e id dos jogadores
$select = $conn->query("SELECT ID_JOGADOR, nome FROM jogador");	

	while($rs = $select->fetch_array(MYSQLI_ASSOC)) {
    	$jogadorJogo = $conn->query("INSERT INTO jogador_jogo (ID_JOGADOR, ID_PARTIDA, Bid) VALUES (".$rs['ID_JOGADOR'].",'$id','s')");
	}
	$idPartida = array('id'=>$id);
	echo json_encode($idPartida);
$conn->close();
?>