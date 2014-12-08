function supermanController($scope, $routeParams){
	$scope.title = "Superman";
	$scope.photo = "images/superman.jpg";
	$scope.qty = $routeParams.qty;
	$scope.city = "bangalore";
	$scope.price = "250.30";
}