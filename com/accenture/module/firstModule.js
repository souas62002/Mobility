var app = angular.module("firstModule",[]);
app.controller("firstController", function($scope){
	$scope.heros = [
	{hName : 'Batman', 		hPhoto :'images/batman.jpg', 	city:'pune', 		popular:2, releaseDate:'2014-08-22', price:150.456897},
	{hName : 'Superman', 	hPhoto :'images/superman.jpg', 	city:'bangalore', 	popular:4, releaseDate:'2014-08-20', price:122.456811},
	{hName : 'Ironman', 	hPhoto :'images/ironman.jpg', 	city:'nagpur', 		popular:6, releaseDate:'2014-08-19', price:75.156897},
	{hName : 'Spiderman', 	hPhoto :'images/spiderman.jpg', city:'mumbai', 		popular:5, releaseDate:'2014-08-15', price:200.856813},
	{hName : 'Rajani', 		hPhoto :'images/rajani.jpg', 	city:'chennai', 	popular:9, releaseDate:'2014-08-10', price:450.756912},
	{hName : 'Supergirl', 	hPhoto :'images/supergirl.jpg', city:'hyderabad', 	popular:9, releaseDate:'2014-08-11', price:125.756912},
	{hName : 'Phantom', 	hPhoto :'images/phantom.jpg', 	city:'khandala', 	popular:3, releaseDate:'2014-07-05', price:45.756912},
	{hName : 'Robin', 		hPhoto :'images/robin.jpg', 	city:'delhi', 	popular:4, releaseDate:'2014-08-14', price:121.756912}
	];
	
	$scope.selectedVal = "hName";
	$scope.reverse = false;
	
	$scope.sortIt = function(sortOn){
		$scope.selectedVal = sortOn;
		$scope.reverse = !$scope.reverse;
	};
}
);
