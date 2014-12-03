AjaxFactory = {
	create : function(){
		if(window.XMLHttpRequest){
			xhr = new XMLHttpRequest();
		}else{
			xhr = new ActiveXObject("Microsoft.XmlHttp");
		}
		return xhr;
	}
}