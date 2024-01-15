
function flashObj2(sName) {
	this.flashFile = "filename.swf";
	this.altImg = "NoFlash.gif";
	this.height = "400";
	this.width = "520";
	this.ID = "dw";
	this.downloadLink = "top";
	this.webTV = "true";
	this.play = "true";
	this.loop = "false";
	this.quality = "best";
	this.scale = "noborder";
	this.salign = "LT";
	this.menu = "false";
	this.deviceFont = "false";
	this.mode = "opaque";
	this.cabVersion = "4,0,0,0";
	this.flashVer = 4;
	this.notCompatImg = "http://www.msnbc.com/site_elements/flash_default.gif";
}

function writeFlashComponent2(oFl) {
	var oSniff=new UberSniff();
	var sReturn;
	var noFlashLink1="";
	var noFlashLink2="<BR CLEAR=ALL><a href=http://www.msnbc.com/m/c/ct_flash.asp><IMG SRC=http://www.msnbc.com/site_elements/NO_flash.gif WIDTH=210 HEIGHT=25 BORDER=0></A>";

	
	if (oFl.downloadLink=="top" || oFl.downloadLink=="") {
		noFlashLink1="<a href=http://www.msnbc.com/m/c/ct_flash.asp target=_new>";
		noFlashLink2="</A>";
	} else if (oFl.downloadLink=="crop") {
		if (!oSniff.flash) { oFl.height = oFl.height-25;}
		}

	sReturn=""+noFlashLink1+"<IMG SRC="+oFl.altImg+" WIDTH="+oFl.width+" HEIGHT="+oFl.height+" BORDER=0>"+noFlashLink2+"";

	if (oSniff.flash>=oFl.flashVer) {
		if(parent.sSiteId && oSniff.nn>=5){
			sReturn = "<img src=" + oFl.notCompatImg + ">"
		}else{
			if (oSniff.mac || oSniff.nn>=4 || oSniff.webtv ) {
			sReturn="<a name=\"anc_" + oFl.ID + "\"><EMBED SRC="+oFl.flashFile+" swLiveConnect=TRUE WIDTH="+oFl.width+" HEIGHT="+oFl.height+" ALIGN=top PLAY="+oFl.play+" LOOP="+oFl.loop+" QUALITY="+oFl.quality+" SCALE="+oFl.scale+" SALIGN="+oFl.salign+" MAYSCRIPT NAME="+oFl.ID+" MENU="+oFl.menu+" DEVICEFONT="+oFl.deviceFont+"  TYPE=application/x-shockwave-flash PLUGINSPAGE=http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash></EMBED></a>";
			} else if (oSniff.ie>=4) {
				sReturn="<a name=\"anc_" + oFl.ID + "\"><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"http://active.macromedia.com/flash2/cabs/swflash.cab#version="+oFl.cabVersion+"\" ID=\""+oFl.ID+"\" WIDTH=\""+oFl.width+"\" HEIGHT=\""+oFl.height+"\" ALIGN=\"left\">\n";
				sReturn+="<PARAM NAME=movie VALUE=\""+oFl.flashFile+"\">\n";
				sReturn+="<PARAM NAME=play VALUE=\""+oFl.play+"\">\n";
				sReturn+="<PARAM NAME=loop VALUE=\""+oFl.loop+"\">\n";
				sReturn+="<PARAM NAME=quality VALUE=\""+oFl.quality+"\">\n";
				sReturn+="<PARAM NAME=scale VALUE=\""+oFl.scale+"\">\n";
				sReturn+="<PARAM NAME=salign VALUE=\""+oFl.salign+"\">\n";
				sReturn+="<PARAM NAME=menu VALUE=\""+oFl.menu+"\">\n";
				sReturn+="<PARAM NAME=devicefont VALUE=\""+oFl.deviceFont+"\">\n";
				sReturn+="<PARAM NAME=wmode VALUE=\""+oFl.mode+"\">\n";
				sReturn+="</OBJECT></a>\n";
				if((oFl.mode.toLowerCase!="window")&&(oSniff.ie>=5)) {
					sReturn+="<SCR"+"IPT LANGUAGE=JAVASCRIPT>document.getElementById('"+oFl.ID+"').nm_bOk=true;</SCR"+"IPT>";
				}
		        }	
	        }
	}
	return sReturn;
}
 //===================older version apps=========================

function flashObj() {

	this.flashFile = "filename.swf";
	this.altImg = "NoFlash.gif";
	this.height = "400";
	this.width = "520";

	this.ID = "dw";
	this.downloadLink = "top";
	this.webTV = "true";
	this.play = "true";
	this.loop = "false";
	this.quality = "best";
	this.scale = "noborder";
	this.salign = "LT";
	this.menu = "false";
	this.deviceFont = "false";
	this.mode = "opaque";
	this.cabVersion = "4,0,0,0";
	this.notCompatImg = "http://www.msnbc.com/site_elements/flash_default.gif";
	this.render = writeFlashComponent;
}

function writeFlashComponent() {
	var oSniff=new UberSniff();
	var sReturn;
	var noFlashLink1 = "";
	var noFlashLink2 = "<BR CLEAR=ALL><a href=http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash target=new><IMG SRC=http://www.msnbc.com/site_elements/NO_flash.gif WIDTH=210 HEIGHT=25 BORDER=0></A>";
	
	
	if (this.downloadLink=="top" || this.downloadLink=="") {
		noFlashLink1="<a href=http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash target=new>";
		noFlashLink2="</A>";
	} else if (this.downloadLink=="crop") {
		if (!oSniff.flash) {this.height = this.height-25;}
	}

	sReturn=""+noFlashLink1+"<IMG SRC="+this.altImg+" WIDTH="+this.width+" HEIGHT="+this.height+" BORDER=0>"+noFlashLink2+"";

	if (oSniff.flash) {
		if(parent.sSiteId && oSniff.nn>=5){
			sReturn = "<img src=" + this.notCompatImg + ">"
		}else{
			if (oSniff.mac || oSniff.nn>=4 || oSniff.webtv ) {
				sReturn="<EMBED SRC="+this.flashFile+" swLiveConnect=TRUE WIDTH="+this.width+" HEIGHT="+this.height+" ALIGN=top PLAY="+this.play+" LOOP="+this.loop+" QUALITY="+this.quality+" SCALE="+this.scale+" SALIGN="+this.salign+" ID="+this.ID+" MENU="+this.menu+" DEVICEFONT="+this.deviceFont+"  TYPE=application/x-shockwave-flash PLUGINSPAGE=http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash></EMBED>";
			} else if (oSniff.ie>=4) {
				sReturn="<OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"http://active.macromedia.com/flash2/cabs/swflash.cab#version="+this.cabVersion+"\" ID=\""+this.ID+"\" WIDTH=\""+this.width+"\" HEIGHT=\""+this.height+"\" ALIGN=\"left\">\n";
				sReturn+="<PARAM NAME=movie VALUE=\""+this.flashFile+"\">\n";
				sReturn+="<PARAM NAME=play VALUE=\""+this.play+"\">\n";
				sReturn+="<PARAM NAME=loop VALUE=\""+this.loop+"\">\n";
				sReturn+="<PARAM NAME=quality VALUE=\""+this.quality+"\">\n";
				sReturn+="<PARAM NAME=scale VALUE=\""+this.scale+"\">\n";
				sReturn+="<PARAM NAME=salign VALUE=\""+this.salign+"\">\n";
				sReturn+="<PARAM NAME=menu VALUE=\""+this.menu+"\">\n";
				sReturn+="<PARAM NAME=devicefont VALUE=\""+this.deviceFont+"\">\n";
				sReturn+="<PARAM NAME=wmode VALUE=\""+this.mode+"\">\n";
				sReturn+="</OBJECT>\n";
				if((this.mode.toLowerCase!="window")&&(oSniff.ie>=5)) {
					sReturn+="<SCR"+"IPT LANGUAGE=JAVASCRIPT>document.getElementById('"+this.ID+"').nm_bOk=true;</SCR"+"IPT>";
			        }
		        }
	        }
	}
	return sReturn;
}


