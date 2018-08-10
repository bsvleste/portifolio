<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization,Content-Range,Content-Disposition,Origin, X-Requested-With , Content-Type");
header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");

// get posted data
$data = json_decode(file_get_contents("php://input"));
//$id = $data->id;
//conecta com o bd

$conn = new mysqli("localhost", "root", "", "test");

//query para selecionar todos os jogadores
if(isset($_GET['id']))
{
    $id = $_GET['id'];
    $resultado = $conn->query("Select * From users where id = '$id'");
    $outp = "";
    while($rs = $resultado->fetch_array(MYSQLI_ASSOC)) {
        if ($outp != "") {$outp .= ",";}
        $outp .= '{"id":"'. $rs["id"]. '",';
        $outp .= '"nome":"'. $rs["name"]. '",';
        $outp .= '"permissao":"'. $rs["permissao"]. '",';
        $outp .= '"email":"'. $rs["email"]. '"}';
    }
    $outp ='['.$outp.']';
}else
{
    $resultado = $conn->query('Select * From users');
    $outp = "";
    while($rs = $resultado->fetch_array(MYSQLI_ASSOC)) {
        if ($outp != "") {$outp .= ",";}
        $outp .= '{"id":"'. $rs["id"]. '",';
        $outp .= '"nome":"'. $rs["name"]. '",';
        $outp .= '"permissao":"'. $rs["permissao"]. '",';
        $outp .= '"email":"'. $rs["email"]. '"}';
}
    $outp ='['.$outp.']';
}
function exibeJogador()
{
    
}
$conn->close();

echo($outp);
?>