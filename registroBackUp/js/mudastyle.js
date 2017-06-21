$(function(){
		var count = 0;
		$(document).on('click','input',function(){
        	//pega o nome do id
        	var id = $(this).attr('name');
        	alert(id);
        		switch(id){
        		case "chuteAGol":
	        		if(count <= "0"){
	        			count ++;
	        			document.getElementById("chuteAGol").innerText = count;
	        			
	        		}else{
	        			var valor=parseInt($('#chuteAGol').text());
	        			valor +=1;        				     				
	        			document.getElementById("chuteAGol").innerText = valor;
	        		}
	        	break;
        		case"gol":
        			if(count <= "0"){
	        			count ++;
	        			document.getElementById("gol").innerText = count;
	        		}else{
	        			var valor=parseInt($('#gol').text());
	        			valor +=1;        				     				
	        			document.getElementById("gol").innerText = valor;
	        		}
	        		break;		
        		case"assitencia":
        			if(count <= "0"){
	        			count ++;
                        alert(count);
	        			document.getElementById("assitencia").innerText = count;
	        		}else{
	        			var valor=parseInt($('#assitencia').text());
	        			valor +=1;        				     				
	        			document.getElementById("assitencia").innerText = valor;
	        		}
        			
        		break;
        		case"4":
        			alert("faltasCometidas");
        		break;
        		case"5":
        			alert("faltasSofridas");
        			break;
        		case"6":
        			alert("desarme");
        		break;

        	}
        	/*
        	if(id=="1"){
        		alert("Fufou");
        	}else if(id="2"){
        		alert("chuteAGol");
        	}*/
        	/*
        	alert(id);	
        	count ++;
        	document.getElementById("chuteAGol").innerText = count;
        	valor = $('span').text();
        	alert(valor);*/
        		
    });
});
    	/*function somarValores(){
    			// body...
    	var x = document.getElementById("1").name;
    	if(x=="gol"){
    		alert(x);	
    	}
    	 
		/*if(x == 1 ){
			alert(valor = $('span').text());
		}
		else if(x ==2){
			alert("chuteAGol");
		}
		else if(document.getElementById("3")){
			alert("assitencia");
		}	
		else if(document.getElementById("4")){
			alert("faltasSofridas");
		}
		else if(document.getElementById("5")){
			alert("faltasCometidas");
		}
		else if(document.getElementById("6")){
			alert("desarme");
		}*/
	/*}


    	var count = 0;
    	function somarValores(){
        count ++;
        document.getElementById("txt1").innerText = count;
        valor = $('span').text();
        alert(valor);
 }*/

 <script type="text/javascript">
var count=0;
function func(e) {
    var teste= $(e).text();
    alert("Sou o tesre"+teste);
    if(teste <="0"){
      alert("Sou menor  que zero");
      count++;
      $(e).text(count);
      count=0;
    }else{
      var valor=parseInt($(e).text());
      valor +=1;                            
      $(e).text(valor);
    }
}

</script>
<button onclick="func(this)">0</button>
<button onclick="func(this)">0</button>
<button onclick="func(this)">0</button>
<button onclick="func(this)">0</button>