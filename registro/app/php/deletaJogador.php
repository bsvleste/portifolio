<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization,Content-Range,Content-Disposition,Origin, X-Requested-With , Content-Type");
header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");

// get posted data
$data = json_decode(file_get_contents("php://input"));
$id = $data->id;
$conn = new mysqli("localhost", "root", "", "test");
$result = $conn->query("DELETE FROM users
                        WHERE id = '$id'");
$outp = "";
if($result)
{
    $outp = '[{"removido":"'  .'1'. '"}]';
    echo ($outp);
}else
{
    $outp = '[{"removido":"'  .'0'. '"}]';
    $outp ='['.$outp.']';
    echo ($outp);
}
$conn->close();
?>
