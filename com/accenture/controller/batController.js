function batController($scope, $routeParams){
	$scope.title = "Batman";
	$scope.photo = "images/batman.jpg";
	$scope.qty = $routeParams.qty;
	$scope.someName = $routeParams.someName;
	$scope.city = "pune";
	$scope.price = "150.55";
}