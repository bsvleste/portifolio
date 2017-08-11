<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// get posted data
// get posted data
/*
$postdata = file_get_contents("php://input",true);
$request = json_decode($postdata);
$dataPartida = $request->hoje;
$dataEncerramentoBid = $request->dataEncerramentoBid;
*/
/*$dataPartida = $_POST['hoje'];
$dataEncerramentoBid = $_POST['dataEncerramentoBid'];		
*/
//inicializa o id da partida 
$id = 1;
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
//seleciona os dados da ultima partida cadastrada
$select = $conn->query("SELECT ID_PARTIDA, DATA_PARTIDA, DATABID, Now() as data from partida WHERE ID_PARTIDA = $id");

$selectJogadores = $conn->query(
			"SELECT * FROM jogador_jogo
			 INNER JOIN jogador 
			 ON jogador_jogo.ID_JOGADOR = jogador.ID_JOGADOR			 
			 where  ID_PARTIDA = $id");

while ($jg = $selectJogadores->fetch_array(MYSQLI_ASSOC)) {
	$jogador = array('nome'=>$jg["nome"]);
	echo json_encode($jogador);
}
//$select = $conn->query("SELECT * FROM partida WHERE ID_PARTIDA = $id ");	
/*$outp = "";
	while($rs = $select->fetch_array(MYSQLI_ASSOC)) {
	    if ($outp != "") {$outp .= ",";}
	    $outp .= '{"id_partida":"'  . $rs["ID_PARTIDA"] . '",';
	    $outp .= '"dataPartida":"'   . $rs["DATA_PARTIDA"]        . '",';  
	    $outp .= '"dataBid":"'. $rs["DATABID"]     . '"}';
	}
$outp ='{"records":['.$outp.']}';
	echo json_encode($outp);
*/
	//se exixtir o select pega os dados dos jogadores
	if($select){	
		//pega os dados da partida
		while($rs = $select->fetch_array(MYSQLI_ASSOC)) {
			$data = array(
				'enviado' => true,
				'id_partida' => $rs['ID_PARTIDA'],
				'nome'=>$jg["nome"],
				'Bid'=>$jg["Bid"],
				'dataAtual' =>$rs['data'],
				'dataPartida' => $rs['DATA_PARTIDA'],
				'dataBid' => $rs['DATABID']
				);
			echo json_encode($data);
	}
	}else{
		$data = array('enviado'=>false);
	}
$conn->close();

?>