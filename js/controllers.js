//creat module
var collegeControllers =angular.module('collegeControllers', []);

//college list controller
collegeControllers.controller('ListController', ['$scope','$http', function($scope,$http){
	$http.get('js/data.json').success(function(data){
		$scope.colleges = data;
		$scope.collegeOrder = 'name';
	});
}]);

//
collegeControllers.controller('DetailsController', ['$scope','$http', 'routeParams', function($scope, $http, routeParams){
	$http.get('js/data.json').success(function(data){
		$scope.colleges = data;
		$scope.collegeOrder = 'name';
		$scope.whichItem = routeParams.itemId;
	});
}]);