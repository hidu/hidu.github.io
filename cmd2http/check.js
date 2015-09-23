/**
 * https://github.com/hidu/cmd2http
 */
(function(){
	var version=((window.cmd2http_version||"")+" ").split(" ")[0].split(".");
	var version_last_str="0.2.1";
	var version_last=version_last_str.split(".");
	console && console.log("current version:",version)
	var has_new_version=false;
	for(var i in version_last){
		if(parseInt(version_last[i]) >parseInt(version[i]||0)){
			has_new_version=true;
			break
		}
	}
	if(has_new_version){
		var html="";
		html="<font color=red>there is a new version: <b>"+version_last_str+"</b></font>";
		var div=document.getElementById("new_version_slot");
		div.innerHTML=html
	}
})();

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?6503c4e37a1f978305e7bc2da2ef3746";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
_hmt.push(['_setCustomVar', 1, 'appname', 'cmd2http', 1]);
_hmt.push(['_setCustomVar', 2, 'appversion', (window.cmd2http_version+"").split(" ")[0], 1]);
