//动态加载javascript，封装标准及IE方法
function loadScript(url,callback){
	var script=document.createElement("script")
	script.type="text/javascript";
	
	if (script.readyState) {//IE
		script.onreadystatechange=function(){
			if(script.readyState=="loaded"||script.readyState=="complete"){
				script.onreadystatechange=null;
				callback();
				
			}
		};
		
	} else{
		//其他浏览器
		script.onload=function(){
			callback();
		};
	}
	
	script.src=url;
	document.getElementsByTagName("head")[0].appendChild(script);
}
