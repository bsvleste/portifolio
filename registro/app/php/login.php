<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization,Content-Range,Content-Disposition,Origin, X-Requested-With , Content-Type");
header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");

// get posted data
$data = json_decode(file_get_contents("php://input"));
$email = $data->email;
$senha = $data->senha;
//$email = 'bvaleiro@gmail.com';
//$senha = 'm4r1';
$flag = false;
$conn = new mysqli("localhost", "root", "", "test");
$result = $conn->query("SELECT * FROM users
                        WHERE email = '$email' AND password = '$senha'");
$outp = "";
if(mysqli_num_rows($result) != 1)
{
    //echo 'login invalido';
    $outp = '[{"logado":"'  .'0'. '"}]';
        
    
    echo ($outp);
}else
{
    //echo 'logado com sucesso';
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($outp != "") {$outp .= ",";}
        $outp .= '{"nome":"'  . $rs["name"] . '",';
        $outp .= '"email":"'   . $rs["email"]        . '",';  
        $outp .= '"senha":"'   . $rs["password"]        . '",';  
        $outp .= '"logado":"'   .'1' . '",';  
        $outp .= '"id":"'   .$rs["id"] . '",';  
        $outp .= '"perm":"'. $rs["permissao"]     . '"}';
    }
    $outp ='['.$outp.']';
    echo ($outp);
}
/*$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"nome":"'  . $rs["name"] . '",';
    $outp .= '"email":"'   . $rs["email"]        . '",';  
    $outp .= '"senha":"'   . $rs["password"]        . '",';  
    $outp .= '"perm":"'. $rs["permissao"]     . '"}';
}
$outp ='['.$outp.']';
echo ($outp);
*/
$conn->close();

?>
