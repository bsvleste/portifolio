var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider, $locationProvider)
{
   
   $routeProvider 
   // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
   .when('/', {
      templateUrl : 'app/views/home.html',
      controller     : 'HomeCtrl',
   })
 
   // para a rota '/sobre', carregaremos o template sobre.html e o controller 'SobreCtrl'
   .when('/sobre/:id', {
      templateUrl : 'app/views/sobre.html',
      controller  : 'SobreCtrl',
   })
   .when('/bid', {
      templateUrl : 'app/views/bid.html',
      controller  : 'BidCtrl',
   })
   // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/' });
	// remove o # da url
   	//$locationProvider.html5Mode(true);
});
