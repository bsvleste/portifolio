<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers:Content-Type");

//recebe os dados do angular
$data = json_decode(file_get_contents("php://input",true));
//faz a conexao com o bd
$conn = new mysqli("localhost", "root", "", "test");
//inicia o id

$id=0;
//soma a quantidade de jogadores
$pegaId = $conn->query("SELECT MAX(id) as id FROM users");
//seleciona todos os jogadores
//passa o ultimo id cadastrado 
$somaId = $pegaId->fetch_array(MYSQLI_ASSOC);
//recebe o ultimo id cadsatrado
$id = $somaId['id']+1;
echo "id".$id;

$result = $conn->query("INSERT INTO users (id,name, email, password,permissao) VALUES ('$id','Lennon','lenon@gmail.com','aeioub',2)");

//cadastra as mensalidades do novo jogador
for($i=1;$i<=12;$i++)
{
	$result = $conn->query("INSERT INTO mensalidade (id,id_mes,valor,status) 
							VALUES 					('$id','$i',0,'PENDENTE')");
}
if($result)
{
	echo "cadastrado com sucesso";
}else
{
	echo "Deu ruim";
}

?>