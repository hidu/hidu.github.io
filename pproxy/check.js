/**
 * https://github.com/hidu/pproxy
 */
(function(){
	var version=((window.pproxy_version||"")+"").split(".");
	var version_last_str="0.4.7";
	var version_last=version_last_str.split(".");
	var has_new_version=false;
	for(var i in version_last){
		if(parseInt(version_last[i]) >parseInt(version[i]||0)){
			has_new_version=true;
			break
		}
	}
	var html="";
	html="last version: " + "<font color=red>"+version_last_str+"</font>";
	var div=document.getElementById("new_version_slot");
	div.innerHTML=html
})();

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?6503c4e37a1f978305e7bc2da2ef3746";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
_hmt.push(['_setCustomVar', 1, 'appname', 'pproxy', 1]);
_hmt.push(['_setCustomVar', 2, 'appversion', window.pproxy_version+"", 1]);