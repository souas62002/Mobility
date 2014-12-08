(function(){
	angular.module("secondModule",["ngRoute"])
	.config(function($routeProvider){
		$routeProvider
		.when("/batman",{
			controller: "batController",
			templateUrl : "com/accenture/view/heroTemplate.html"
		})
		.when("/spiderman/:qty",{
			controller: "spiderController",
			templateUrl : "com/accenture/view/heroTemplate.html"
		})
		.otherwise({
			redirectTo:"/"
		})
	});

}());
