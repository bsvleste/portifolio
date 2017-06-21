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
	<nav class="nav">	
		<form  name="form2" method="post" action="<?=$_SERVER['PHP_SELF']?>" enctype="multipart/form-data">
	    	<span>Selecione o Quadro:</span> 
    		<select name="status" class="status">
           		<option value="">Selecione o status </option>
           		<option value="2">Segundo Quadro </option>
           		<option value="1">Primeiro Quadro </option>
			</select>
        	
			<span>Selecione os Jogadores:</span>
    		<select multiple name="jogadores[]" class="status">
        		<option value="">Selecione os Jogadores</option>
        			<?php 
						$readCategorias = read('jogador');
						if(!$readCategorias){
							echo '<option value="">Não temos categorias no momento</option>';	
						}else{
							foreach((array)$readCategorias as $mae):
							echo '<option value="'.$mae['ID_JOGADOR'].'">'.$mae['nome'].'</option>';
						endforeach;	
						}
		?> 
				<input 	id="enviar" class="btnenviar" type="submit" name="enviar" value="Enivar">
    		</select>
    </form>
	
<form name="form1" method="post" action="#" enctype="multipart/form-data">
<?php 		
	$quadro = strip_tags(trim(mysql_real_escape_string($_POST['status'])));
		echo'<img id="fundo" src="img/icones-fundo.png">';
		$jogador = $_POST['jogadores'];
		foreach ((array)$jogador as $nomes) {
			$leitura = read('jogador', "where ID_JOGADOR = '$nomes'");
		foreach ((array)$leitura as $jogador) {
			echo'<ul>';
			if($jogador['fotoperfil'] != '' && file_exists('uploads/'.$jogador['fotoperfil'])){
				echo '<li><img class="circular"src="uploads/'.$jogador['fotoperfil'].'"
					  title="Ver Foto" alt="Foto" /></li>';
			}else{
				echo '<li><img class="circular"src="img/usuario.png"title="Ver Foto" alt="Foto" /></li>';
			}
				echo'<li><input type="number" name="chuteagol[]" class="btn chuteagol"onclick="func(this)" value="0"></li>';
				echo'<li><input type="number" name="gol[]" class="btn gol" onclick="func(this)" value="0"></li>';
				echo'<li><input type="number" name="assistencia[]" class="btn assistencia" onclick="func(this)" value="0"></li>';
				echo'<li><input type="number" name="faltascometidas[]" class="btn faltascometidas" onclick="func(this)" value="0"></li>';
				echo'<li><input type="number" name="faltassofridas[]" class="btn faltassofridas" onclick="func(this)" value="0"></li>';
				echo'<li><input type="number" name="desarmes[]" class="btn desarmes" onclick="func(this)" value="0"></li>';
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
if($sql)
       echo "<div class='msgacerto'>Cadastro com sucesso</div>";
?>
		<input 	id="enviar" class="btnenv" type="submit" name="cadastrar" value="Enivar">
	</form>
	</nav>	
</section>
</div>
</body>
</html>
	