
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
app.controller('BidCtrl',function($scope, $rootScope, $location){

	$scope.msg = 'Bem Vindo ao Bid';
	$rootScope.activetab = $location.path();
});
app.controller('SobreCtrl',function($scope, $rootScope, $location, $http,$routeParams){

	
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
    	$scope.names = response.data.records;
    	if($scope.mes == 1)
    		$scope.msg = "Janeiro";
    });

   $rootScope.activetab = $location.path();

	
});