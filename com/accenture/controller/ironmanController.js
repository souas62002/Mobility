function ironmanController($scope, $routeParams){
	$scope.title = "Ironman";
	$scope.photo = "images/ironman.jpg";
	$scope.qty = $routeParams.qty;
	$scope.city = "nagpur";
	$scope.price = "175.75";
}