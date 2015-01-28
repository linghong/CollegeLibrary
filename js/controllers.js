//creat module
var myApp =angular.module('myApp', []);

//get data
myApp.controller('MyController', ['$scope','$http', function ($scope,$http){
	$http.get('js/data.json').success(function(data){
		$scope.colleges = data;
		$scope.collegeOrder = 'name';
	});
}]);
