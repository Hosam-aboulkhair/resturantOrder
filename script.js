	var restaurantOrder = angular.module('restaurantOrder', ['ngRoute']);

	restaurantOrder.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});


	restaurantOrder.controller('mainController', function($scope) {
		$scope.orders = [{category:'italian', meal:'Pasta with white sauce',price:'25'},
			{category:'italian', meal:'Pasta with mashroum sauce',price:'35'},
			{category:'italian', meal:'Pasta with Red sauce',price:'25'},
			{category:'italian', meal:'Pizza',price:'45'},
			{category:'chineese', meal:'noodles',price:'35'},
		{category:'chineese', meal:'vegetables with mashroume sauce',price:'65'},
	{category:'egyptian', meal:'pasta with bashameel sauce',price:'25'},
{category:'egyptian', meal:'potatos with rice',price:'25'}];

$scope.clickme= function(name,desc){
		$scope.addCategory= category;
		$scope.addMeal= meal;
			$scope.addPrice= price;

	}
	});

	restaurantOrder.controller('aboutController', function($scope) {

	});

	restaurantOrder.controller('contactController', function($scope) {

	});
