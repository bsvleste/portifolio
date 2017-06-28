<?php 
error_reporting (E_ALL & ~ E_NOTICE & ~ E_DEPRECATED);	
require("crud/config.php");
require("crud/crud.php");
require("crud/funcoes.php");
 ?>
<!DOCTYPE html>
<html lang="pt-br"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- css3-mediaqueries.js for IE8 or older --><!--[if lt IE 9]><script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script><![endif]-->
<title>Registro</title><link rel="stylesheet" type="text/css" href="css/styleRegistro.css"><link rel="stylesheet" type="text/css" href="css/styleMobile.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script><script type="text/javascript" src="js/soma.js"></script><script type="text/javascript" src="js/mudastyle.js"></script></head>
<body>

<!--centralizaçao do site "Container centraliza container-fluid deixa o site de acordo com a resoluçao da tela"-->
<div id="container-fluid">
<!-- menu -->
<section>
<form name="form1" method="post" action="#" enctype="multipart/form-data">
			
	
		<?php 
		
		$quadro = strip_tags(trim(mysql_real_escape_string($_POST['status'])));
		echo'<span>Jogodores do '.$quadro.' Quadro</span>';
		$jogador = $_POST['jogadores'];
		foreach ((array)$jogador as $nomes) {
			$leitura = read('jogador', "where ID_JOGADOR = '$nomes'");
		foreach ((array)$leitura as $jogador) {
			echo'<ul>';
				
				if($jogador['fotoperfil'] != '' && file_exists('uploads/'.$jogador['fotoperfil'])){
				echo '<li><img class="circular"src="uploads/'.$jogador['fotoperfil'].'"
				      title="Ver Foto" alt="Foto" /></li>';
				}
				echo'<li><input type="text" name="chuteagol[]" class="btn chuteagol" onclick="func(this)" value="0"></li>';
			    echo'<li><input type="text" name="gol[]" class="btn gol" onclick="func(this)" value="0"></li>';
			    echo'<li><input type="text" name="assistencia[]" class="btn assistencia" onclick="func(this)" value="0"></li>';
			    echo'<li><input type="text" name="faltascometidas[]" class="btn faltascometidas" onclick="func(this)" value="0"></li>';
			    echo'<li><input type="text" name="faltassofridas[]" class="btn faltassofridas" onclick="func(this)" value="0"></li>';
			    echo'<li><input type="text" name="desarmes[]" class="btn desarmes" onclick="func(this)" value="0"></li>';
			    echo'<li><input type="hidden" name="id[]" value="'.$nomes.'"</li>';
			    echo'<li><input type="hidden" name="quadro" value="'.$quadro.'"</li>';
			    echo'</ul>';
				extract($_POST);
			}
		}

$chuteagol 			= $_POST['chuteagol'];
$gol 				= $_POST['gol'];
$assistencia 		= $_POST['assistencia'];
$faltascometidas 	= $_POST['faltascometidas'];
$faltassofridas 	= $_POST['faltassofridas'];
$desarmes 			= $_POST['desarmes'];  
$id 				= $_POST['id'];
$quadro				=$_POST['quadro'];
$teste = count($chuteagol);
for ($i=0; $i <$teste ; $i++) { 
	$sql = mysql_query("INSERT INTO registro (ID_JOGADOR, CHUTEAGOL, gol,assistencia, faltascometidas,
				faltassofridas,desarmes, datajogo, quadro) 
				VALUES($id[$i],$chuteagol[$i], $gol[$i],$assistencia[$i], $faltascometidas[$i],
				$faltassofridas[$i], $desarmes[$i], CURDATE(), $quadro)");
	}
if($sql){
		echo'<div class="msgacerto">Sucesso!</div>';
		
	}else{
		echo "nao foi possivel cadastrar";
	}
?>
		<input 	id="enviar" class="btn" type="submit" name="cadastrar" value="Enivar">
	</form>
	</section>
</div>
</body>
</html>
