function spiderController($scope, $routeParams){
	$scope.title = "Spiderman";
	$scope.photo = "images/spiderman.jpg";
	$scope.qty = $routeParams.qty;
	$scope.city = "delhi";
	$scope.price = "225.45";
}