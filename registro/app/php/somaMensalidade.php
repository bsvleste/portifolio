<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization,Content-Range,Content-Disposition,Origin, X-Requested-With , Content-Type");
header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");

// get posted data
$data = json_decode(file_get_contents("php://input"));
//pega o id para pesquisar o mes
/*$idMes = $_GET['idMes'];
$valor = $_GET['valor'];
$idMensalidade = $_GET['idMensalidade'];
*/
//faz a conexao com o bd
//$idMensalidade = $data->idMensalidade;
//$idMes = $_GET['idMes'];//$data->idMes;
$conn = new mysqli("localhost", "root", "", "test");

//$result = $conn->query("SELECT * FROM mensalidade WHERE id_mes='1'");
//faz a consulta sql no bd
//pega o ultimo id cadastrado
$pegaId = $conn->query("SELECT MAX(id) as id FROM users");
$somaId = $pegaId->fetch_array(MYSQLI_ASSOC);
//recebe o ultimo id cadsatrado
$idJogador = $somaId['id']+1;
echo "ultimo id ".$idJogador;
$result = $conn->query("INSERT INTO users (id, name, email, password) VALUES ('$idJogador','Danilo','danilo@gmail.com','aeioub')");
if($result)
{
    echo "cadsatrado com sucesso";
    $i=1;
    while($i<=12){
        $result = $conn->query("INSERT INTO mensalidade (id_mensalidade, id, id_mes,valor, status)
                            VALUES (NULL, '$idJogador', '$i', '0', 'PENDENTE');");
        echo 'id: '.$i;
        $i++;
        if($result)
        {
            echo "cadastrado com suceeso";
        }else
        {
            echo "nao foi possivel cadstar";
        }
    }
}else
{
    echo "Não foi possivel cadastrar ";
}
//$criaJogador = $conn->query()


$jogadores = $conn->query("SELECT id, name FROM users");
while($rs = $jogadores->fetch_array(MYSQLI_ASSOC)) {
    echo 'Nome: '.$rs['name'];
    echo ' Id: '.$rs['id'].'<br>';
}
$conn->close();

?>
