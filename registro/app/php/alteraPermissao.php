<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization,Content-Range,Content-Disposition,Origin, X-Requested-With , Content-Type");
header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");

// get posted data
$data = json_decode(file_get_contents("php://input"));
$id = $data->id;
$permissao = $data->permissao;

$conn = new mysqli("localhost", "root", "", "test");
$resultado = $conn->query("UPDATE users SET permissao='$permissao' WHERE id = '$id'");

$outp = "";
if($resultado)
{
    $outp = '[{"removido":"'  .'1'. '"}]';
    echo ($outp);
}else
{
    $outp = '[{"removido":"'  .'0'. '"}]';
    echo ($outp);
}
$conn->close();
?>
