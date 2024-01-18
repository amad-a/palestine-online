/*
if(typeof(UberSniff)=='function' && typeof(VBSFlashVersion)=='unknown') {
	if(typeof(oSniff)!='object') {var oSniff = new UberSniff();}
	if(oSniff.ie>=5) {
		window.attachEvent("onload",initScrollData);
		var nScrollMax = 0;
		var sScrollData = '';
	}
}
*/

function initScrollData() {
	window.attachEvent("onscroll",compileScrollData);
	window.attachEvent("onunload",recordScrollData);
}

function compileScrollData() {
	var nCurrent = document.body.scrollTop;
	var nScrollHeight = document.body.scrollHeight;
	var nHeight = document.body.clientHeight;
	if(nCurrent > nScrollMax) {nScrollMax=nCurrent;}
	var nBWidth = document.body.offsetWidth;
	var nSWidth = oSniff.screenWidth;
	var nSHeight = oSniff.screenHeight;
	sScrollData = nScrollHeight  +"&" + nHeight + "&" + nScrollMax + "&" + nBWidth + "&" + nSWidth + "&" + nSHeight;
}

function recordScrollData() {
	scrollRecord.src="http://famulus.msnbc.com/m/c/ct_scroll.asp?" + sScrollData;
}
