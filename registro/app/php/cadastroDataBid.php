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
$id = 1;
$conn = new mysqli("localhost", "root","", "colisao");
$pegaId = $conn->query("SELECT MAX(ID_PARTIDA) as id FROM partida");
$somaId = $pegaId->fetch_array(MYSQLI_ASSOC);
$id += $somaId['id'];
$result = $conn->query("INSERT INTO partida (ID_PARTIDA, DATA_PARTIDA, DATABID) 
						VALUES('$id','$dataPartida','$dataEncerramentoBid')");
$select = $conn->query("SELECT ID_JOGADOR, nome FROM jogador");	
$outp = "";
	while($rs = $select->fetch_array(MYSQLI_ASSOC)) {
	    if ($outp != "") {$outp .= ",";}
	    $outp .= '{"id":"'  . $rs["ID_JOGADOR"] . '",';
	    $outp .= '"nome":"'. $rs["nome"]     . '"}';
	}
$outp ='{"records":['.$outp.']}';
	/*if($select){
		while($rs = $select->fetch_array(MYSQLI_ASSOC)) {
			$data = array(
				'enviado' => true,
				'id_partida' => $rs['ID_PARTIDA'],
				'dataPartida' => $rs['DATA_PARTIDA'],
				'dataBid' => $rs['DATABID']
				);
			echo json_encode($data);
		}		
	}else{
		$data = array('enviado'=>false);
	}*/
$conn->close();
echo($outp);
?>