
app.controller('meuTeste',function($scope, $rootScope, $location){

	$rootScope.dados = [{
        id: 1,
        nome: 'Janeiro'
    }, {
        id: 2,
        nome: 'Fevereiro'
    }, {
    	id: 3,
    	nome: 'Marco'
    },{
    	id: 4,
    	nome: 'Abril'
    },{
    	id: 5,
    	nome: 'Maio'
    },{
    	id: 6,
    	nome: 'Junho'
    },{
    	id: 7,
    	nome: 'Julho'
    },{
    	id: 8,
    	nome:'Agosto'
    },{
    	id: 9,
    	nome: 'Setembro'
    },{
    	id: 10,
    	nome: 'Outubro'
    },{
    	id: 11,
    	nome: 'Novembro'
    },
    	{
        id: 12,
        nome: 'Dezembro'
    }];
	
});
app.controller('HomeCtrl',function($scope, $rootScope, $location){

    $scope.msg = 'ola bebe';
    $scope.nomes = $rootScope.dados;
    $rootScope.activetab = $location.path();
});
app.controller('BidCtrl',function($interval,$scope, $rootScope, $location, $http, $routeParams,chamaJogador){
           
    chamaJogador.jogador().then(function(response){
        $scope.dados = response.data.records;
        
    });
    $http({
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
        },
            url: 'app/php/atualizaData.php',
            dataType:'JSON'
    })
    .then(function (response) {
        //data do fim do Bid
        dataFutura = new Date(response.data.dataBid);
        //data atual do servidor para compara com a dataFutura
        $scope.dataFutura = dataFutura;
        dataHoje = new Date(response.data.dataAtual);
        $scope.dataHoje = dataHoje;
        });

    $scope.tempo = function()
    {
        //transforma as datas em intero para comparaçao total
        ss = parseInt(($scope.dataFutura - $scope.dataHoje) / 1000 );
        //transforma em minutos
        mm = parseInt(ss / 60);
        //transforma em horas
        hh = parseInt(mm / 60);
        //transforma em dias
        dd = parseInt(hh / 24);

        ss = ss - (mm * 60);  
        mm = mm - (hh * 60);  
        hh = hh - (dd * 24);   
        //string que mostra as horas minutos e segundos
        faltam = "Encerramento do Bid ";
        faltam += ( dd && dd > 1) ? dd + ' dias, ' : (dd == 1 ? '1 dia, ' : '');
        faltam += (toString(hh).length) ? hh+' hr, ' : '';  
        faltam += (toString(mm).length) ? mm+' min e ' : '';  
        faltam += ss+' seg';   
pesquisar coomo mostrar o segundos diminuinto
        if(dd+hh+mm+ss > 0){
            $scope.msg = faltam;
            $scope.dataHoje =$scope.dataHoje + 1000;
        }else{
            $scope.msg = 'Bid encerrado';

        }
     
    }
    $interval(function(){$scope.tempo(); console.log('Data' + $scope.dataHoje)},1000);

    /*
    $scope.valor = 2;
    $interval(function () {
      $scope.valor +=2;
    }, 5000);*/
    //$scope.valor = atualizaContador();
    $scope.msg = "Bem Vindo ao BID ";
        $scope.cadastraData = function(dataLimite){
        //data limnite do bid
        $scope.dataLimite = dataLimite;            
        //data atual para ser comparada
        $scope.data = new Date();       
        //ajax para cadastrar no bano de dados
        $http({
            method:'POST',
            data:{
                'hoje':$scope.data,
                'dataEncerramentoBid':$scope.dataLimite
            },
            headers:{
               'Content-Type': 'application/x-www-form-urlencoded' 
           },
           url:'app/php/cadastroDataBid.php'
        })
        .then(function(response){           
            //atualizaContador();

        });

        }    
    
});
app.controller('SobreCtrl',function($scope, $rootScope, $location, $http,$routeParams){

	teste = $scope.mostra;
	$scope.id_mes=$routeParams.id;
	$scope.teste = $rootScope.dados;	

	
   	$http({
   		method: 'POST',
        data: {
            'mes' : $scope.id_mes            
        },
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
        url: 'app/php/mensalidadeJaneiro.php'
   	})
    .then(function (response) {
        console.log(response);
    	$scope.names = response.data.records;
    	if($scope.mes == 1)
    		$scope.msg = "Janeiro";
    });

   $rootScope.activetab = $location.path();

	
});
app.factory('chamaJogador', function ($http){
    return {
        jogador: function(){
            return $http.get('app/php/chamaJogadorBid.php');
        }
    };
});