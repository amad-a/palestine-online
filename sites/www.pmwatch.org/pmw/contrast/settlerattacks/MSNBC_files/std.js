function UberSniff() {
	var ua=navigator.userAgent.toLowerCase();
	this.webtv = (ua.indexOf("webtv")>-1);
	this.ie = (parseFloat(ua.slice(ua.indexOf("msie")+5)));
	this.nn = (this.ie)?(-1):(parseFloat(ua.slice(ua.indexOf("mozilla/")+8)));
	this.mac = (ua.indexOf("mac")>-1);
	if (this.mac) {
		this.flash=5;
	} else {
		if (this.ie>=4) {
			this.flash=VBSFlashVersion();
		} else {
			for(var i=0;i<navigator.plugins.length;i++) {
				var sPlugin=navigator.plugins[i].description;
				if (sPlugin.indexOf("Flash")>-1) {
					this.flash=(parseInt(sPlugin.slice(16)));
					break;
				} else {
					this.flash=-1;
				}
			}
		}
	}
	this.mplayer = ((this.mac)?true:((isNaN(this.ie))?(navigator.mimeTypes&&navigator.mimeTypes["video/x-ms-wm"]&&navigator.mimeTypes["video/x-ms-wm"].enabledPlugin):((typeof(VBSMediaPlayerVersion())=="unknown")?(this.ie>=4&&VBSMediaPlayerVersion()):(this.ie>=4&&VBSMediaPlayerVersion()>0))))?true:false;
// screen resolution
	this.screenHeight = screen.height;
	this.screenWidth = screen.width;
	this.colorDepth = (this.nn>=4)?screen.pixelDepth:screen.colorDepth;
}

// image rollover code. Author - Brenden West. Updated 8-22-01
if (!window.sSelectedImg) {
	var sSelectedImg = new Array();
}
function LoadImages(numImages,navtype) {  }
function SwapImage(sImage,nState) {
	// image states: 0 = out, 1 = over, 2 = selected
	if (document.images) {
		if (parseInt(sImage)>=0) {	// convert old method
			sImage = "MenuImg" + sImage;
		} 
		var oImage = document.images[sImage];
		if (oImage) {
			if (sImage.indexOf("_img") > 0) {
				var sMenu = sImage.substring(0,sImage.indexOf("_img"));
				sSelImg = sSelectedImg[sMenu];
			} else {
				if (!sSelectedImg["x"]) { sSelectedImg["x"]=""; }
				sSelImg = sSelectedImg["x"];
			}
		if (nState !=2 || sSelImg != sImage) { 
			if (nState !=2 || sSelImg != oImage) { 
				var sTmp = oImage.src;
				var sTmp1 = sTmp.substring(0,sTmp.lastIndexOf("."));
				var sTmp2 = sTmp.substring(sTmp.lastIndexOf(".")+1);
				if (sTmp.indexOf("_2.") == -1) {
					sTmp1 = sTmp1.replace(/\_1+/g,"");
					oImage.src = (nState==0) ? sTmp1 + "."+ sTmp2 : sTmp1 + "_"+nState+ "." + sTmp2;
				}
				if (nState==2 && sSelImg != oImage) {
					if (sSelImg) {
						sTmp = sSelImg.src;
						sSelImg.src = sTmp.replace(/_2\./g,".");
					}
					if (sMenu) {
						sSelectedImg[sMenu] = oImage;
					} else {
						sSelectedImg["x"] = oImage;
					}
				}
			}
		}
		}
	}
}

function OpenChildWindow(sPath,sName,sOptions) {
    if(self.name=='') {self.name = "cover";}
    var x = window.open(sPath,sName,sOptions);
    if(parseInt(navigator.appVersion)>3) {x.focus();}
}

function MakeBkMark(strURL,strTitle) {
	if (document.all) {
		window.external.AddFavorite(strURL,strTitle);
	}
	else { alert("Sorry. This quick bookmark only works in \rInternet Explorer versions 4.0 and later."); }
}
