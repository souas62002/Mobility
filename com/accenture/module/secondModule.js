(function(){
	angular.module("secondModule",["ngRoute"])
	.config(function($routeProvider){
		$routeProvider
		.when("/batman/:qty?/:someName", {
			controller: "batController",
			templateUrl : "com/accenture/view/heroTemplate.html"
		})
		.when("/superman/:qty", {
			controller: "supermanController",
			templateUrl : "com/accenture/view/heroTemplate.html"
		})
		.when("/ironman/:qty", {
			controller: "ironmanController",
			templateUrl : "com/accenture/view/heroTemplate.html"
		})
		.when("/spiderman/:qty", {
			controller: "spiderController",
			templateUrl : "com/accenture/view/heroTemplate.html"
		})
		.otherwise(
				{ redirectTo : "/" }
			)
	});
}());
