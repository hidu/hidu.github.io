/**
 * http://github.com/hidu/pproxy
 * duwei
 */
(function(){
	var version=((window.pproxy_version||"")+"").split(".");
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
		var div=document.getElementById("new_version_slot");
		div.innerHTML="<br/><div style='color:green' class='h4'>The new version " +
	   "<a href='http://github.com/hidu/pproxy'target='_blank'>" +
	   "<font color=red>"+version_last_str+"</font></a>" +
	    " has been released.</div><br/>"
	}
})();
