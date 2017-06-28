var count=0;
function func(e) {
   var id = $(e).attr('name');
    var teste= $(e).val();
     
    if(teste <="0"){
      count++;
      $(e).val(count);
      count=0;
    }else{
      var valor=parseInt($(e).val());
      valor +=1;                            
      $(e).val(valor);
    }
    
}
/*$(function(){
    $("#enviar").on('click',function(){
          //pega o nome do id
     
    });
});
  */    