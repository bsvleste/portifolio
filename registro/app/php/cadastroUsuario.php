
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization,Content-Range,Content-Disposition,Origin, X-Requested-With , Content-Type");
header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");

// get posted data
$data = json_decode(file_get_contents("php://input"));
$nome = $data->nome;
$email = $data->email;
$senha = $data->senha;

$conn = new mysqli("localhost", "root", "", "test");
$pegaId = $conn->query("SELECT MAX(id) as id FROM users");
//seleciona todos os jogadores
//passa o ultimo id cadastrado 
$somaId = $pegaId->fetch_array(MYSQLI_ASSOC);
//recebe o ultimo id cadsatrado
$id = $somaId['id']+1;

$result = $conn->query("SELECT * FROM users
                        WHERE email = '$email'");
$outp = "";
if(mysqli_num_rows($result) == 1)
{
    $outp = '[{"cadastro":"'  .'0'. '"}]';
    echo($outp);
}else{
    $result = $conn->query("INSERT INTO users (id,name, email, password,permissao) VALUES ('$id','$nome','$email','$senha',0)");
    $outp = '[{"cadastro":"'  .'1'. '"}]';
    echo($outp);
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
