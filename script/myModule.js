var user = (function(){
		
	var myPrivateData = "private data";
		
	var myPrivateFun = function(){
		alert("I am private function");
	};
		
	return {
		myPrivateData : myPrivateData,
		myPrivateFun : myPrivateFun
	};
}());
user.myPrivateFun();