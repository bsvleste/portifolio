<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
// get posted data
// get posted data
/*
$request = json_decode($postdata);
$dataPartida = $request->hoje;
$dataEncerramentoBid = $request->dataEncerramentoBid;
*/
//pega o id da partida para cadastra na tabela jogador_jogo
//$id_partida = $_POST['id_partida'];
//conexao com banco

$postdata = file_get_contents("php://input",true);
$conn = new mysqli("localhost", "root","", "colisao");
$select = $conn->query("SELECT * FROM jogador");	
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
	if($select){
		while($rs = $select->fetch_array(MYSQLI_ASSOC)) {
			$data = array(
				'enviado' => true,
				'id_jogador' =>$rs['ID_JOGADOR'],
				'nome' => $rs['nome']
				);
			echo json_encode($data);
		}		
	}else{
		$data = array('enviado'=>false);
		echo json_encode($data);

	}
$conn->close();
?>