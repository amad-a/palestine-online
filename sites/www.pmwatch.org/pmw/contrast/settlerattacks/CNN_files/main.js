var browser = "";
var browsername = navigator.appName;
var browserversion = parseInt(navigator.appVersion);
if (browsername == "Netscape") 
{
	browser = "ns" + browserversion;
}
else
{
	if (browsername == "Microsoft Internet Explorer") 
	{
		if (browserversion >= 4) 
		{
			browser = "ie" + browserversion;
		}
		else 
		{
			browser = "ie3";
		}
	}
}
bName = navigator.appName;
bVer = parseInt(navigator.appVersion);

function Popup()
{
	if (bName == "Microsoft Internet Explorer")
	{ 
		window.open('http://cnn.com/ads/advertiser/pagenet/9908/pop.html','Ad','toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=253,height=253');}else{window.open('http://cnn.com/ads/advertiser/pagenet/9908/pop.html','Ad','toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=267,height=267');
	}
}
// this handles the homepage picture of the day
function popNav(url,name,features) 
{
	if ((browser == "ns3","ns4") || (browser == "ie4")) 
	{
		popBox = window.open(url,name,features);
		popBox.focus();
	}
	else
	{
		if (browser == "ie3") 
		{
			popBox = window.open(url,name,features);
		}  
	}
}

// this function is used to redirect the search on the main page
// to looksmart if its an internet search  -- SG
function validate( tform ) {
	var site;
	
	if ( tform.sites.options ) {		//	"sites" should be a select
		site = tform.sites.options[tform.sites.selectedIndex].value;
	} else {
	if (tform.sites) {site =tform.sites.value;}
	else {return true;}						//	error, but don't show the user
	}
	
	switch ( site.toLowerCase() ) {
		case "internet":
			tform.action = "http://cnn.looksmart.com/r_search"
			tform.key.value = tform.qt.value;
			tform.isp.value = 'zcb';
			return true;
		
		case "cnn":
			tform.action = "http://cnn.looksmart.com/r_search"
			tform.key.value = tform.qt.value;
			tform.isp.value = 'zch';
			return true;
		
		case "cnnasia":
			tform.action = "http://cnn.looksmart.com/r_search"
			tform.key.value = tform.qt.value;
			tform.isp.value = 'zee';
			return true;
		
		case "cnnasiaweb":
			tform.action = "http://cnn.looksmart.com/r_search"
			tform.key.value = tform.qt.value;
			tform.isp.value = 'zeg';
			return true;
		
		case "cnneurope":
			tform.action = "http://cnn.looksmart.com/r_search"
			tform.key.value = tform.qt.value;
			tform.isp.value = 'zcn';
			return true;
		
		case "cnneuropeweb":
			tform.action = "http://cnn.looksmart.com/r_search"
			tform.key.value = tform.qt.value;
			tform.isp.value = 'zcp';
			return true;

		case "cnneuropeir":
			tform.action = "http://cnn.looksmart.com/r_search"
			tform.key.value = tform.qt.value;
			tform.isp.value = 'zcu';
			return true;

		case "cnneuropeit":
			tform.action = "http://cnn.looksmart.com/r_search"
			tform.key.value = tform.qt.value;
			tform.isp.value = 'zcv';
			return true;

		case "cnneuropenl":
			tform.action = "http://cnn.looksmart.com/r_search"
			tform.key.value = tform.qt.value;
			tform.isp.value = 'zcw';
			return true;

		case "cnneuropeswz":
			tform.action = "http://cnn.looksmart.com/r_search"
			tform.key.value = tform.qt.value;
			tform.isp.value = 'zda';
			return true;

		case "cnneuropeuk":
			tform.action = "http://cnn.looksmart.com/r_search"
			tform.key.value = tform.qt.value;
			tform.isp.value = 'zdb';
			return true;
		
		case "cnnsi":
			tform.action = "http://cnnsi.looksmart.com/r_search";
			tform.qp.value = "url:http://www.cnnsi.com/";
			tform.col.value = 'cnnsi';
			tform.key.value = tform.qt.value;
			tform.isp.value = 'zcm';
			return true;
			
		case "cnnfn":
			tform.action = "http://cnn.looksmart.com/r_search"
			tform.key.value = tform.qt.value;
			tform.isp.value = 'zce';
			return true;

		case "cnnmoney_old":
			tform.action = "http://search.atomz.com/search/"
			for(i=0;i<tform.elements.length;i++)
			{
				if(tform.elements[i].name=='sp-q') {tform.elements[i].value=tform.qt.value;}
				if(tform.elements[i].name=='sp-a') {tform.elements[i].value='sp100161eC';}
			}
			return true;
		
		case "cnnmoney":
			tform.action = "http://cnn.looksmart.com/r_search"
			tform.key.value = tform.qt.value;
			tform.isp.value = 'zce';
			return true;
		
		case "cnnfyi":
			tform.action = "http://search.cnn.com:80/query.html";
			tform.col.value = 'cnni';
			tform.qp.value = 'url:/fyi/';
			//tform.rq.value = '2';
			return true;
		
		case "cnnlaw":
			tform.action = "http://search.cnn.com:80/query.html";
			tform.col.value = 'cnni';
			tform.qp.value = 'url:/LAW/';
			//tform.rq.value = '2';
			return true;
		
		case "time":
			tform.keyword.value = tform.qt.value;
			tform.action = "http://www.pathfinder.com/time/daily/searchresults/1,2645,,00.html";
			tform.col.value = 'time';
			//tform.rq.value = '2';
			return true;
		
		default:
			return true;						//	unsupported site
	}
}



function med_vod_old(mycategory,mylocation){
	var popup_location = '/video/popup/main.html';
	if(mycategory && mylocation){
		popup_location = '/video/popup/main.html?'+mycategory+'?'+mylocation;
	}else if(mycategory){
		popup_location = '/video/popup/main.html?'+mycategory;
	}
	
	openWindow(popup_location,'620x460','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=620,height=460');
}

function med_vod_281102(vidlocation){
	openWindow(vidlocation,'620x460','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=620,height=460');
}


function med_vod(vidlocation) {
	var ua = window.navigator.userAgent;
	if ((ua.indexOf("R1") > 0) && (vidlocation.indexOf("med.exclude.html") > 0)) {
		var url = vidlocation.replace("med.exclude.html","r1.smi");
		location.href = url;
	} else {
		openWindow(vidlocation,'620x460','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=620,height=460');
	}
}


// used to open popup windows from the dateline
function CNN_openMap(location)
   {
var datelineWin=window.open(location,'620x430',"height=430,width=620,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no");
datelineWin.focus();
   }

// this will open a new window, submit the poll form, and send the results to the popup window
function pollSubPop (earl, name, widgets, specialsURL) 
{
	host = location.hostname;
	if (host.indexOf('customnews') != -1) 
	{
		var url = 'http://customnews.cnn.com' + earl;
	}
	else
	{
		var url = earl;
	}
	popupWin = window.open(url, name, widgets);

	var agt=navigator.userAgent.toLowerCase();
	var is_major = parseInt(navigator.appVersion);
     var is_ie     = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));
     var is_ie3    = (is_ie && (is_major < 4));
     var is_ie4    = (is_ie && (is_major == 4) && (agt.indexOf("msie 4")!=-1) );
     var is_aol   = (agt.indexOf("aol") != -1);
     var is_aol3  = (is_aol && is_ie3);
     var is_aol4  = (is_aol && is_ie4);
     var is_aol5  = (agt.indexOf("aol 5") != -1);
     var is_aol6  = (agt.indexOf("aol 6") != -1);
     var is_comp   = (agt.indexOf("compuserve") != -1);
     var is_comp2000   = (agt.indexOf("cs") != -1);	 	 
     var is_compie = (is_comp && is_ie);

     