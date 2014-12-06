var app = angular.module('CartApp', ['ngRoute']);

app.controller('indexController', function($scope) {
  $scope.message = 'Index page';
});

app.controller('aboutController', function($scope) {
  $scope.message = 'About page';
});

app.controller('contactController', function($scope) {
  $scope.message = 'Contact page';
});

app.controller('orderController', function($scope) {
  $scope.message = 'Data inserted';
});

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/index.html',
			controller: 'indexController'
		})
		.when('/about', {
			templateUrl: 'partials/about.html',
			controller: 'aboutController'
		})
        .when('/contact', {
			templateUrl: 'partials/contact.html',
			controller: 'contactController'
		})
        .when('/order', {
			templateUrl: 'partials/order.html',
			controller: 'orderController'
		})
}]);