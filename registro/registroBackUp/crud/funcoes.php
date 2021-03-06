<?php 
//FUNÇÃO PARA GERAR RESUMOS
function resumos($string, $palavras = '100'){
	$string = strip_tags($string);
	$contar = strlen($string);
	
	if($contar <= $palavras){
		return $string;	
	}else{
		$strPos = strrpos(substr($string,0,$palavras),' ');
		return substr($string,0,$strPos);	
	}
}

//FUNÇÃO PARA VALIDAR E-MAILS
function email($email){
	if(preg_match('/[a-z0-9_\.\-]+@[a-z0-9\.\-]*[a-z0-9_\.\-]+\.[a-z]{2,4}$/',$email)){
		return true;
	}else{
		return false;	
	}
}

//FUNÇÃO PARA VALIDAR CPF
function cpf($cpf){
$cpf = preg_replace('/[^0-9]/','',$cpf);
$digitoY = 0;
$digitoX = 0;
for($y=0, $x=10; $y<=8; $y++,$x--){
	$digitoY += $cpf[$y] * $x;
}
for($y=0, $x=11; $y<=9; $y++,$x--){
	$digitoX += $cpf[$y] * $x;
}
$lockY = (($digitoY%11) < 2) ? 0 : 11-($digitoY%11);
$lockX = (($digitoX%11) < 2) ? 0 : 11-($digitoX%11);

	if($lockY != $cpf[9] || $lockX != $cpf[10]){
		return false;
	}else{
		return true;
	}	
}

//FUNÇÃO PARA DATA EM TIMESTAMP
function timedata($data){
	$timestamp = explode(" ",$data);
	$UrlData = $timestamp[0];
	$UrlTime = $timestamp[1];
	
		$setData = explode('/',$UrlData);
		$dia = $setData[0];
		$mes = $setData[1];
		$ano = $setData[2];
		if(!$UrlTime){
			$UrlTime = date('H:i:s');	
		}
		$resultado = $ano.'-'.$mes.'-'.$dia.' '.$UrlTime;
		return $resultado;
	
}

//FUNÇÃO PARA GERAR URL AMIGÁVEL
function url($url){
$a = 'ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜüÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûýýþÿŔŕ"!@#$%&*()_-+={[}]/?;:.,\\\'<>°ºª';
$b = 'aaaaaaaceeeeiiiidnoooooouuuuuybsaaaaaaaceeeeiiiidnoooooouuuyybyRr 
                               ';
							   
	$url = utf8_decode($url);
	$url = strtr($url, utf8_decode($a), $b);
	$url = strip_tags(trim($url));
	$url = str_replace(" ","-",$url);
	$url = str_replace(array("-----","----","---","--"),"-",$url);
	return strtolower(utf8_encode($url));
}

//FUNÇÃO DE NAVEGAÇÃO
	function pagehome(){
		$url = $_GET['url'];
		$url = explode('/', $url);
		$url[0] = ($url[0] == NULL ? 'index' : $url[0]);
		if(file_exists('site/'.$url[0].'.php')){
			require_once('site/'.$url[0].'.php');	
		}elseif(file_exists('site/'.$url[0].'/'.$url[1].'php')){
			require_once('site/'.$url[0].'/'.$url[1].'php');		
		}else{
			require_once('site/404.php');	
		}
	}
	
//FUNÇÃO DE RETORNO
	function setaurl(){
		echo URL;	
	}	

//FUNÇÃO PARA ENVIOS DE E-MAIL
	function enviaEmail($assunto,$mensagem,$remetente,$nomeremetente,$destino,$nomedestino, $reply = NULL, $replyname = NULL){
	
	require_once('email/class.phpmailer.php');
	
	$mail = new PHPMailer();
	$mail->IsSMTP();
	$mail->SMTPAuth = true;
	$mail->IsHTML(true);
	
	$mail->Host = MAILHOST;
	$mail->Port = MAILPORT;	
	$mail->Username = MAILUSER;	
	$mail->Password = MAILPASS;	
	
	$mail->From = utf8_decode($remetente);
	$mail->FromName = utf8_decode($nomeremetente);
	
	if($reply != NULL){
		$mail->AddReplyTo(utf8_decode($reply),utf8_decode($replyname));	
	}
	
	$mail->Subject = utf8_decode($assunto);	
	$mail->Body =  utf8_decode($mensagem);
	$mail->AddAddress(utf8_decode($destino),utf8_decode($nomedestino));
	
	if($mail->Send()){
		return true;
	}else{
		return false;	
	}
}

//FUNÇÃO PARA PÁGINAÇÃO 
	function pag($tabela, $cond, $maximos, $link, $pag, $width = NULL, $maxlinks = 5){
		$leitura = read("$tabela","$cond");
		$total = count($leitura);
		if($total > $maximos){
			$paginas = ceil($total/$maximos);
			if($width){
				echo '<div class="paginacao" style="width:'.$width.'">';
			}else{
				echo '<div class="paginacao">';
			}
			echo '<a href="'.$link.'1">Primeira Página</a>';
			for($i = $pag - $maxlinks; $i <= $pag - 1; $i++){
				if($i >= 1){
					echo '<a href="'.$link.$i.'">'.$i.'</a>';
				}
			}
			echo '<span class="atv">'.$pag.'</span>';
			for($i = $pag + 1; $i <= $pag + $maxlinks; $i++){
				if($i <= $paginas){
					echo '<a href="'.$link.$i.'">'.$i.'</a>';
				}
			}
			echo '<a href="'.$link.$paginas.'">Última Página</a>';
			echo '</div><!--/pag-->';
		}
	}
	
//FUNÇÃO PARA UPLOAD DE IMAGENS
	function uploadImg($tmp, $nome, $width, $pasta){
		$ext = substr($nome,-3);
		
		switch($ext){
			case 'jpg' : $img = imagecreatefromjpeg($tmp); break;
			case 'png' : $img = imagecreatefrompng ($tmp); break;
			case 'gif' : $img = imagecreatefromgif ($tmp); break;
		}
		
		$x = imagesx($img);
		$y = imagesy($img);
		$height = ($width*$y) / $x;
		$nova = imagecreatetruecolor($width, $height);
		
		imagealphablending($nova,false);
		imagesavealpha($nova,true);
		imagecopyresampled($nova,$img,0,0,0,0,$width,$height,$x,$y);
		
		switch($ext){
			case 'jpg' : imagejpeg($nova, $pasta.$nome, 100); break;
			case 'png' : imagepng ($nova,$pasta.$nome); break;
			case 'gif' : imagegif ($nova, $pasta.$nome); break;	
		}
		imagedestroy($img);
		imagedestroy($nova);
					
	}
	
//FUNÇÃO PARA PROTEÇÃO
	function ProtUser($user, $nivel = NULL){
		if($nivel != NULL){
			$leitura = read('php_usuarios',"WHERE id = $user");	
			if($leitura){
			foreach($leitura as $user);
	if($user['nivel'] <= $nivel && $user['nivel'] != '0' && $user['nivel'] <= '3'){
				return true;				
				}else{
				return false;	
				}	
			}else{
				return false;	
			}
		}else{
			return true;		
		}
	}

//FUNÇÃO PARA VISITAS

function contavisitas($times = 2){
		$selMes = date('m');
		$selAno = date('Y');
		if(empty($_SESSION['startView']['sessao'])){
			$_SESSION['startView']['sessao'] = session_id();
			$_SESSION['startView']['ip'] = $_SERVER['REMOTE_ADDR'];
			$_SESSION['startView']['url'] = $_SERVER['PHP_SELF'];
			$_SESSION['startView']['time_end'] = time() + $times;
			$readViews = read('php_visitas',"WHERE mes = '$selMes' AND ano = '$selAno'");
			if(!$readViews){
				$createViews = array('mes' => $selMes, 'ano' => $selAno);	
				create('php_visitas',$createViews);
			}else{
				foreach($readViews as $views);
				if(empty($_COOKIE['startView'])){
					$updateViews = array(
						'visitas' => $views['visitas']+1,
						'pageviews' => $views['pageviews']+1,
					);
					update('php_visitas',$updateViews,"mes = '$selMes' AND ano = '$selAno'");
					setcookie('startView',time(),time()+60*60*24,'/');
				}else{
					$updateVisitas = array('visitas' => $views['visitas']+1);
					update('php_visitas',$updateVisitas,"mes = '$selMes' AND ano = '$selAno'");
				}
			}
		}else{
			$readPageViews = read('php_visitas',"WHERE mes = '$selMes' AND ano = '$selAno'");
			if($readPageViews){
				foreach($readPageViews as $rpgv);
				$updatePageViews = array('pageviews' => $rpgv['pageviews']+1);
				update('php_visitas',$updatePageViews,"mes = '$selMes' AND ano = '$selAno'");
			    }
			}
	}

//FUNÇÃO PARA AUTOR

	function autor($autorId, $campo = NULL){
		$autorId = mysql_real_escape_string($autorId);
		$readAutor = read('php_usuarios',"WHERE id = '$autorId'");		
		if($readAutor){
			foreach($readAutor as $autor);
			
			if(!$autor['fotoperfil']):			
				$noavatar  = 'http://www.plentyperfect.com/wp-content/uploads/2012/06/gravatar.jpg';
				$autor['foto'] = $noavatar;
			endif;
			if(!$campo){
				return $autor;	
			}else{
				return $autor[$campo];
			}
			
		}else{
			echo 'Erro ao ler autor';
		}
	}
	
//FUNÇÃO PARA TOP 05

function top($topicoId){
		$topicoId = mysql_real_escape_string($topicoId);
		$readArtigo = read('php_noticias',"WHERE id = '$topicoId'");
		
		foreach($readArtigo as $artigo);
			$views = $artigo['visitas'];
			$views = $views +1;
			$dataViews = array(
				'visitas' => $views
			);
			update('php_noticias',$dataViews,"id = '$topicoId'");
}	
	
?>




















