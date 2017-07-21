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

$conn = new mysqli("localhost", "root","", "test");

$result = $conn->query("INSERT INTO partida (ID_PARTIDA, DATA_PARTIDA, DATABID) 
						VALUES(4,'$dataPartida','$dataEncerramentoBid')");

if($result)
{	
	$select = $conn->query("SELECT * FROM partida WHERE ID_PARTIDA = 3 ");	
$outp = "";
	while($rs = $select->fetch_array(MYSQLI_ASSOC)) {
	    if ($outp != "") {$outp .= ",";}
	    $outp .= '{"id_partida":"'  . $rs["ID_PARTIDA"] . '",';
	    $outp .= '"dataPartida":"'   . $rs["DATA_PARTIDA"]        . '",';  
	    $outp .= '"dataBid":"'. $rs["DATABID"]     . '"}';
	}
$outp ='{"records":['.$outp.']}';
	echo json_encode($outp);
}else
{
	$data = array('enviado' => false);
	echo json_encode($data);
}
$conn->close();

?>