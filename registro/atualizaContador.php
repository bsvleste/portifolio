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
$dataPartida = $_POST['hoje'];
$dataEncerramentoBid = $_POST['dataEncerramentoBid'];		

$conn = new mysqli("localhost", "root","", "colisao");

$pegaId = $conn->query("SELECT MAX(ID_PARTIDA) as id FROM partida");
var_dump($pegaId);
$somaId = mysqli_fetch_array($pegaId);
$id = $somaId['id'];

$select = $conn->query("SELECT * FROM partida WHERE ID_PARTIDA = '$id'");	
	
	if($select){

		while($rs = $select->fetch_array(MYSQLI_ASSOC)) {

			$data = array(
			'enviado'=>true,
			'id_partida' => $rs['ID_PARTIDA'],
			'dataPartida' => $rs['DATA_PARTIDA'],
			'dataBid' => $rs['DATABID']
			);
		echo json_encode($data);
	}
}else{
		$data = array('enviado'=>false);
		echo json_encode($data);
}
$conn->close();
?>