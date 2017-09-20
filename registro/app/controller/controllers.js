
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
app.controller('BidCtrl',function($scope, $rootScope, $location, $http, $routeParams,chamaJogador){
           
    chamaJogador.jogador().then(function(response){
        $scope.dados = response.data.records;
        
    }); 

     
    console.log("Teste do " + angular.element(document.getElementById('meuController')).value);
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
            atualizaContador();            
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