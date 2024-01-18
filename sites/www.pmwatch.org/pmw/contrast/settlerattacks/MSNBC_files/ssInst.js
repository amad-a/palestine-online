function OpenChildWindowInst(sUrl, sHi, sParam, sInst)
{
	var sRes = "1";
	if (sUrl.indexOf("fmt=Child")!= -1)
	{
		var oUser = new UberSniff();
		if (oUser.screenWidth >= 1024)
			sRes = "3";
		else if (oUser.screenWidth >= 800)
			sRes = "2";
		else
			sRes = "4";
	}
				
	var re = /%r/gi; sUrl = sUrl.replace(re,sRes);
	OpenChildWindow(sUrl, sHi, sParam);			
}
