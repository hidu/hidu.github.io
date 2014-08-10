/**
 * http://github.com/hidu/pproxy
 * duwei
 */
(function(){
	var version=((window.pproxy_version||"")+"").split(".");
	var version_last_str="0.4.2";
	var version_last=version_last_str.split(".");
	var has_new_version=false;
	for(var i in version_last){
		if(parseInt(version_last[i]) >parseInt(version[i]||0)){
			has_new_version=true;
			break
		}
	}
	var html="";
	html="The last version is : " + "<font color=red>"+version_last_str+"</font>,<font color=blue>websocket sup!</font>";
//	if(has_new_version){
//		html+=""
//	}
	var div=document.getElementById("new_version_slot");
	div.innerHTML=html
})();
