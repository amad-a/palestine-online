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

var wapwindow;
var wapwindowericsson320;

var nokia = true;
var targetX = 50;
var targetY = 70;

function wap(linken){
//	wapericssonr320(linken);
//	wapnokia7110(linken);
	wap6210large(linken);
}

function wapnokia7110(linken){
	if(document.layers || document.all || navigator.userAgent.indexOf("Mozilla/5")!=-1){
		var width = 200;
//		var height = 418;
		var height = 436;
		var script = 'https://web.archive.org/web/20011009001921/http://www.gelon.net/cgi-bin/wapalize.cgi';
		wapwindow = window.open('','vindu','width='+width+',height='+height+',toolbar=0,location=0,directories=0,status=0,menuBar=0,scrollBars=0,resizable=0');
		wapwindow.document.write('<html><head><title>Connecting to service...</title>');
		wapwindow.document.write('</head>');
		wapwindow.document.write('<body bgcolor="#FFFFFF"><font face="Arial" size="2">Connecting to service...<br><p>');
		wapwindow.document.write('</font>');
		wapwindow.document.write('</body></html>');
//		wapwindow.document.write('<img src="/7110.jpg" width="200" height="692">');
		wapwindow.document.close();
		if(document.layers){
			wapwindow.document.location = script+'?url='+linken;
		}
		else{
			wapwindow.document.location.replace(script+'?url='+linken);
		}
	}
	else{
		alert('Sorry!\nUnknown browser...\nCan\'t view the WAP sites.');
	}
}

function wap6210large(linken){
	if(document.layers || document.all || navigator.userAgent.indexOf("Mozilla/5")!=-1){
		var width = 480;
		var height = 510;
		var script = 'https://web.archive.org/web/20011009001921/http://www.gelon.net/cgi-bin/6210_large.cgi';
		wapwindowericsson320 = window.open('','nokia6210','width='+width+',height='+height+',toolbar=0,location=0,directories=0,status=0,menuBar=0,scrollBars=0,resizable=0');
		wapwindowericsson320.document.writeln('<html><head><title>Fetching site...</title>');
		wapwindowericsson320.document.writeln('</head>');
		wapwindowericsson320.document.write('<body bgcolor="#FFFFFF"><font face="Arial" size="2">Connecting to service...<br><p>');
		wapwindowericsson320.document.write('</font>');
		wapwindowericsson320.document.write('</body></html>');
//		wapwindowericsson320.document.write('<img src="/7110.jpg" width="200" height="692">');
		wapwindowericsson320.document.close();
		wapwindowericsson320.document.location.replace(script+'?url='+linken);
	}
	else{
		alert('Sorry!\nUnknown browser...\nCan\'t view the WAP sites.');
	}
}

function wapericssonr320(linken){
	if(document.layers || document.all || navigator.userAgent.indexOf("Mozilla/5")!=-1){
		var width = 200;
		var height = 490;
		var script = 'https://web.archive.org/web/20011009001921/http://gelon.net/cgi-bin/wapalizeericssonr320.cgi';
		wapwindowericsson320 = window.open('','vindu','width='+width+',height='+height+',toolbar=0,location=0,directories=0,status=0,menuBar=0,scrollBars=0,resizable=0');
		wapwindowericsson320.document.writeln('<html><head><title>Fetching site...</title>');
		wapwindowericsson320.document.writeln('</head>');
		wapwindowericsson320.document.write('<body bgcolor="#FFFFFF"><font face="Arial" size="2">Loading page...<br><p>');
		wapwindowericsson320.document.write('</font>');
		wapwindowericsson320.document.write('</body></html>');
//		wapwindowericsson320.document.write('<img src="/7110.jpg" width="200" height="692">');
		wapwindowericsson320.document.close();
		wapwindowericsson320.document.location.replace(script+'?url='+linken);
	}
	else{
		alert('Sorry!\nUnknown browser...\nCan\'t view the WAP sites.');
	}
}

function validateForm(){
	var field = document.forms[0].url.value;
	var ret = true;
	if(field.indexOf('/',7)==-1){
		ret = confirm('Missing trailing slash in URL!\n\nDo you want to add a trailing slash at the end of this URL?\nClick OK to add a slash and change the URL to '+field +'/ or\nCancel to continue without changes.');
		if(ret)document.forms[0].url.value += '/';
	}
	return ret;
}

function loop(i){
	if(i>=0){
		if(document.all){
			document.all.it.style.visibility = "visible";
			document.all.it.style.pixelTop = targetY + (i*(i-(i/2))) - i;
			document.all.it.style.pixelLeft = targetX + i - (i * -19);
			i--;
			setTimeout("loop("+i+")", 10);
		}
		else if(document.layers){
			document.layers["it"].top = targetY + (i*(i-(i/2))) - i;
			document.layers["it"].left = targetX + i - (i * -14);
			if(document.layers["it"].visibility=="hide")document.layers["it"].visibility = "show";
			i--;
			setTimeout("loop("+i+")", 5);
		}
	}
	else{
		setTimeout("getOut("+1+")",5000);
	}
}

function getOut(t){
	if(t<20){
		if(document.all){
			document.all.it.style.pixelLeft = targetX - (t*t);
			t++;
			setTimeout("getOut("+t+")", 20);
		}
		else if(document.layers){
			document.layers["it"].left = targetX - (t*t);
			t++;
			setTimeout("getOut("+t+")", 20);
		}
	}
	else{
		
	}
}





}
/*
     FILE ARCHIVED ON 00:19:21 Oct 09, 2001 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:10:29 Nov 17, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 2405.666
  exclusion.robots: 0.099
  exclusion.robots.policy: 0.085
  cdx.remote: 0.079
  esindex: 0.013
  LoadShardBlock: 1076.757 (3)
  PetaboxLoader3.resolve: 1021.85 (4)
  PetaboxLoader3.datanode: 54.682 (4)
  load_resource: 61.003
*/