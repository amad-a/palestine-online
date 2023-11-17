var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function setFlashWidth4(newW4){
	document.getElementById('neocounter4').style.width = newW4+"px";		
}

function setFlashHeight4(newH4){
	document.getElementById('neocounter4').style.height = newH4+"px";		
}


function setFlashSize4(newW4, newH4){
	setFlashWidth4(newW4);
	setFlashHeight4(newH4);
}

function display_map4(map, xpos, ypos){
	if(mapside!=null){xpos = mapside;}
	if(map!="none")
	{
		document.map_image4.src = "https://web.archive.org/web/20091027174652/http://www.neoworx.net/maps/"+map+".jpg";
		document.map_image4.style.visibility = "visible";	
		document.getElementById('map_popup4').style.top = ypos+"px";
		if(xpos==1){
		document.getElementById('map_popup4').style.left = -20-document.map_image4.width+"px";}
		else{
		document.getElementById('map_popup4').style.left = 50+"px";}
	}
	else
	{
		document.map_image4.style.visibility = "hidden";	
	}
}

function getCookie(name)
{
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1)
    {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
    }
    var end = document.cookie.indexOf(";", begin);
    if (end == -1)
    {
        end = dc.length;
    }
    return unescape(dc.substring(begin + prefix.length, end));
}

expire = getCookie('9372255674');
status = getCookie('8889135618');

var lang = "en";
var lang = (navigator.language) ? navigator.language : navigator.userLanguage;

document.write('<object data="https://web.archive.org/web/20091027174652/http://neocounter.neoworx-blog-tools.net/neocounter2/neocounter3_v6.swf" width="100%" height="100%" type="application/x-shockwave-flash">');
document.write('<param name="movie" value="https://web.archive.org/web/20091027174652/http://neocounter.neoworx-blog-tools.net/neocounter2/neocounter3_v6.swf" />');
if(typeof(affiliate_id) == "undefined"){
affiliate_id="";
}
document.write('<param name="FlashVars" value="affiliate_id='+affiliate_id+'&counter_id='+counter_id+'&display_type='+display_type+'&skin='+skin+'&autoresize='+autoresize+'&expire='+expire+'&status='+status+'&lang='+lang+'" />');
document.write('<param name="allowScriptAccess" value="always">');
document.write('<param name="wmode" value="transparent">');
document.write('</object>');



}
/*
     FILE ARCHIVED ON 17:46:52 Oct 27, 2009 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:10:17 Nov 14, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 143.404
  exclusion.robots: 0.101
  exclusion.robots.policy: 0.089
  cdx.remote: 0.09
  esindex: 0.02
  LoadShardBlock: 63.568 (3)
  PetaboxLoader3.datanode: 46.813 (4)
  PetaboxLoader3.resolve: 53.428 (2)
  load_resource: 55.945
*/