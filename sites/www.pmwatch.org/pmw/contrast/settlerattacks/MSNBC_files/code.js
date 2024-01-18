var sSpacer = "<SPACER TYPE=BLOCK WIDTH=1>";
var sUA = navigator.appName.toLowerCase();
var bDHTML = ((document.all && sUA.indexOf("webtv") == -1) || document.layers || document.getElementById);
var sImgDir = "/modules/story_stage/images/";

document.write("<STYLE>");
document.write("	.stagelink { font-family:arial; font-size:13px; color:333333; text-decoration:none; }");
document.write("	.stagelink:hover { color:cc0000; }");
document.write("</STYLE>");

document.write("<table cellpadding=0 cellspacing=0 border=0 width=400><tr><td colspan=10><img src=" +sImgDir+ "header.gif></td></tr>");

if (bDHTML) {
	document.write("<tr><td width=15><img src=" +sImgDir+ "tab_l.gif></td>");
	document.write("		<td><a href=\"javascript:SwapIframe(1);SwapImage('stage_tab1',2);\" onmouseover=SwapImage('stage_tab1',1); onmouseout=SwapImage('stage_tab1',0);><img src=" +sImgDir+ "tab1.gif border=0 name=stage_tab1></a></td>");
	document.write("		<td><a href=\"javascript:SwapIframe(2);SwapImage('stage_tab2',2);\" onmouseover=SwapImage('stage_tab2',1); onmouseout=SwapImage('stage_tab2',0);><img src=" +sImgDir+ "tab2.gif border=0 name=stage_tab2></a></td>");
	document.write("		<td><a href=\"javascript:SwapIframe(3);SwapImage('stage_tab3',2);\" onmouseover=SwapImage('stage_tab3',1); onmouseout=SwapImage('stage_tab3',0);><img src=" +sImgDir+ "tab3.gif border=0 name=stage_tab3></a></td>");
	document.write("		<td><a href=\"javascript:SwapIframe(4);SwapImage('stage_tab4',2);\" onmouseover=SwapImage('stage_tab4',1); onmouseout=SwapImage('stage_tab4',0);><img src=" +sImgDir+ "tab4.gif border=0 name=stage_tab4></a></td>");
	document.write("		<td><a href=\"javascript:SwapIframe(5);SwapImage('stage_tab5',2);\" onmouseover=SwapImage('stage_tab5',1); onmouseout=SwapImage('stage_tab5',0);><img src=" +sImgDir+ "tab5.gif border=0 name=stage_tab5></a></td>");
	document.write("		<td><a href=\"javascript:SwapIframe(6);SwapImage('stage_tab6',2);\" onmouseover=SwapImage('stage_tab6',1); onmouseout=SwapImage('stage_tab6',0);><img src=" +sImgDir+ "tab6.gif border=0 name=stage_tab6></a></td>");
	document.write("		<td><a href=\"javascript:SwapIframe(7);SwapImage('stage_tab7',2);\" onmouseover=SwapImage('stage_tab7',1); onmouseout=SwapImage('stage_tab7',0);><img src=" +sImgDir+ "tab7.gif border=0 name=stage_tab7></a></td>");
	document.write("		<td width=16 colspan=2><img src=" +sImgDir+ "tab_r.gif></td></tr>");
}
	document.write("<tr><td colspan=8 BGCOLOR=000099 height=12>" +sSpacer+ "</td><td width=15 rowspan=2 BGCOLOR=000099>" +sSpacer+ "</td><td width=1 rowspan=2 BGCOLOR=CCCCCC>" +sSpacer+ "</td></tr><tr><td width=15 bgcolor=000099>" +sSpacer+ "</td><td colspan=7 width=367>");

if (bDHTML) {

	document.write("<IFRAME name=stageframe id=stageframe src=about:blank height=170 width=367 frameborder=0 scrolling=no><ilayer ID=stageframe height=170 width=367></ilayer></IFRAME>");
	
	setTimeout("SwapIframe(1);SwapImage('stage_tab1',2);",500);
}

function StoryStageBot() {
	document.write("		</td></tr>");
	document.write("	<tr valign=top>");
	document.write("		<td rowspan=2 width=15 height=20><img src=" +sImgDir+ "bot_l.gif></td>");
	document.write("		<td colspan=7 BGCOLOR=000099 height=16>" +sSpacer+ "</td>");
	document.write("		<td rowspan=2 height=20><img src=" +sImgDir+ "bot_r.gif></td></tr>");
	document.write("	<tr><td colspan=7 height=4><img src=" +sImgDir+ "bot_shadow.gif width=367></td></tr></table>");
	document.write("<table cellpadding=0 cellspacing=0 border=0 bgcolor=ffffcc width=400>");
	document.write("	<tr><td colspan=14 height=10>" +sSpacer+ "</td></tr>");
	document.write("	<tr>");
	document.write("		<td width=21 rowspan=3>" +sSpacer+ "</td>");
	document.write("		<td width=92 colspan=2><a href=" +sNormUrl(BottomUrl1,8)+ "><img src=" +BottomImage1+ " height=69 width=92 border=0></a></td>");
	document.write("		<td width=20 rowspan=3>" +sSpacer+ "</td>");
	document.write("		<td width=1 rowspan=3 bgcolor=666666>" +sSpacer+ "</td>");
	document.write("		<td width=20 rowspan=3>" +sSpacer+ "</td>");
	document.write("		<td width=92 colspan=2><a href=" +sNormUrl(BottomUrl2,'a')+ "><img src=" +BottomImage2+ " height=69 width=92 border=0></a></td>");
	document.write("		<td width=20 rowspan=3>" +sSpacer+ "</td>");
	document.write("		<td width=1 rowspan=3 bgcolor=666666>" +sSpacer+ "</td>");
	document.write("		<td width=20 rowspan=3>" +sSpacer+ "</td>");
	document.write("		<td width=92 colspan=2><a href=" +sNormUrl(BottomUrl3,'c')+ "><img src=" +BottomImage3+ " height=69 width=92 border=0></a></td>");
	document.write("		<td width=21 rowspan=3>" +sSpacer+ "</td></tr>");

	document.write("	<tr>");
	document.write("		<td height=10 colspan=2>" +sSpacer+ "</td>");
	document.write("		<td height=10 colspan=2>" +sSpacer+ "</td>");
	document.write("		<td height=10 colspan=2>" +sSpacer+ "</td>");
	document.write("	</tr>");
	document.write("	<tr valign=top>");
	document.write("		<td width=10><font face=verdana size=2 color=cc0000>&#0149;</font></td>");
	document.write("		<td width=82><a href=" +sNormUrl(BottomUrl1,9)+ " class=stagelink>" +BottomText1+ "</></td>");

	document.write("		<td width=10><font face=verdana size=2 color=cc0000>&#0149;</font></td>");
	document.write("		<td width=82><a href=" +sNormUrl(BottomUrl2,'b')+ " class=stagelink>" +BottomText2+ "</a></td>");

	document.write("		<td width=10><font face=verdana size=2 color=cc0000>&#0149;</font></td>");
	document.write("		<td width=82><a href=" +sNormUrl(BottomUrl3,'d')+ " class=stagelink>" +BottomText3+ "</a></td>");
	document.write("	</tr>");
	document.write("	<tr><td colspan=14 height=10>" +sSpacer+ "</td></tr></table>");
}

function SwapIframe(nUrl) {
	var sUrl = "/modules/story_stage/stages.asp?" +sInstrument+nUrl+"0&nstage="+nUrl+"&scss="+sCSS;

	if (document.all) {
		document.stageframe.location.replace(sUrl);
	} else if (document.getElementById) {
		document.getElementById('stageframe').src = sUrl;
	} else {
		document.stageframe.src = sUrl;
	}
}

function sNormUrl(sUrl,nPos) {
	var sInst2 = "?" + sInstrument + nPos;
	if (sUrl.indexOf("javascript:") == 0) {
		sTmp = sUrl.replace(".asp",".asp"+sInst2);
		sUrl = sTmp.replace(".htm",".htm"+sInst2);
	}
	else { sUrl += sInst2; }
	return sUrl;
}