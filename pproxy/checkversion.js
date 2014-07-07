/**
 * http://github.com/hidu/pproxy
 * duwei
 */
(function(){
	var version=((windows.pproxy.version||"")+"").split(".");
	var version_last_str="0.3.0";
	var version_last=version_last_str.split(".");
	var has_new_version=false;
	for(var i in version_last){
		if(parseInt(version_last[i]) >parseInt(version[i]||0)){
			has_new_version=true;
			break
		}
	}
	if(has_new_version){
		alert(version_last_str);
	}
})();
