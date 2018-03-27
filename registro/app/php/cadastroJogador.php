<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers:Content-Type");

//recebe os dados do angular
$data = json_decode(file_get_contents("php://input",true));

//faz a conexao com o bd
$conn = new mysqli("localhost", "root", "", "test");

$result = $conn->query("INSERT INTO users (id, name, email, password) VALUES (6,'hector','hecot@gmail.com','aeioub')");
if($result)
{
	echo "cadsatrado com sucesso";
}else
{
	echo "Não foi possivel cadastrar ";
}
?>