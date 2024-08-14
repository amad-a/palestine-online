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

var adimg = new Array(
  "https://web.archive.org/web/20011129230705/http://ads.smartclicks.com/%d/B063910/smartbanner",
  "https://web.archive.org/web/20011129230705/http://ads.amazingmedia.com/adserver.exe/SITE=wmmax/AREA=NONRICH&x=%d",
  "https://web.archive.org/web/20011129230705/http://servedby.advertising.com/site=739/bnum=%d/bins=1/rich=0",
  "https://web.archive.org/web/20011129230705/http://ads.datais.com/ads/ad.cgi?macleod-ad9%d&cnc=true",
  "https://web.archive.org/web/20011129230705/http://ads.datais.com/ads/ad.cgi?macleod-ad%d&cnc=true",
  "https://web.archive.org/web/20011129230705/http://ads.clickagents.com/cgibin/banner.ca?maxpages.1%d",
  "https://web.archive.org/web/20011129230705/http://ads.clickagents.com/cgibin/banner.ca?maxpages.%d",
  "https://web.archive.org/web/20011129230705/http://www.adclub.net/cgi-bin/view/maxpages/net/1/%d/",
  "https://web.archive.org/web/20011129230705/http://imgworks.adbureau.net/accipiter/adserver.exe/SITE=MAXPAGES/AREA=ECOMMERCEN/aamsz=120X60?x=%d",
  "https://web.archive.org/web/20011129230705/http://imgworks.adbureau.net/accipiter/adserver.exe/SITE=MAXPAGES/AREA=ECOMMERCEN/aamsz=468X60?x=%d",
  "https://web.archive.org/web/20011129230705/http://imgworks.adbureau.net/accipiter/adserver.exe/SITE=MAXPAGES/AREA=ECOMMERCEN/aamsz=468X60?y=%d",
  "https://web.archive.org/web/20011129230705/http://imgworks.adbureau.net/accipiter/adserver.exe/SITE=MAXPAGES/AREA=ECOMMERCEN/aamsz=468X60?z=%d",
  "https://web.archive.org/web/20011129230705/http://servedby.advertising.com/site=739/size=120060/bnum=%d/bins=1/rich=0");

var adlnk = new Array(
  "https://web.archive.org/web/20011129230705/http://ads.smartclicks.com/%d/B063910/smartsite",
  "https://web.archive.org/web/20011129230705/http://ads.amazingmedia.com/adclick.exe/SITE=wmmax/AREA=NONRICH&x=%d",
  "https://web.archive.org/web/20011129230705/http://servedby.advertising.com/click/site=739/bnum=%d",
  "https://web.archive.org/web/20011129230705/http://ads.datais.com/ads/ad.cgi?macleod-link9%d&cnc=true",
  "https://web.archive.org/web/20011129230705/http://ads.datais.com/ads/ad.cgi?macleod-link%d&cnc=true",
  "https://web.archive.org/web/20011129230705/http://ads.clickagents.com/cgibin/click.ca?maxpages.1%d",
  "https://web.archive.org/web/20011129230705/http://ads.clickagents.com/cgibin/click.ca?maxpages.%d",
  "https://web.archive.org/web/20011129230705/http://www.adclub.net/cgi-bin/go/maxpages/net/1/%d/",
  "https://web.archive.org/web/20011129230705/http://imgworks.adbureau.net/accipiter/adclick.exe/SITE=MAXPAGES/AREA=ECOMMERCEN/aamsz=120X60?x=%d",
  "https://web.archive.org/web/20011129230705/http://imgworks.adbureau.net/accipiter/adclick.exe/SITE=MAXPAGES/AREA=ECOMMERCEN/aamsz=468X60?x=%d",
  "https://web.archive.org/web/20011129230705/http://imgworks.adbureau.net/accipiter/adclick.exe/SITE=MAXPAGES/AREA=ECOMMERCEN/aamsz=468X60?y=%d",
  "https://web.archive.org/web/20011129230705/http://imgworks.adbureau.net/accipiter/adclick.exe/SITE=MAXPAGES/AREA=ECOMMERCEN/aamsz=468X60?z=%d",
  "https://web.archive.org/web/20011129230705/http://servedby.advertising.com/click/site=739/bnum=%d?size=120060");

var adinit = false;
var adimgdoc = null;
var adlnkdoc = null;

function maxAdMatchSub(ad_array_str,ad_str)
{
  var inx;
  var s;

  inx = ad_array_str.indexOf("%");
  if (inx < 0)
    return false;

  return ad_array_str.substring(0,inx) == ad_str.substring(0,inx);
}

function maxAdInitSlot(ad_array,ad_str)
{
  var i;

  for (i = 0; i < ad_array.length; i++) {
    if (maxAdMatchSub(ad_array[i],ad_str))
      return i;
  }

  return -1;
}

function maxAdInit()
{
  var lenimg;
  var lenlnk;
  var i;

  if (adinit)
    return;

  lenimg = document.images.length;
  lenlnk = document.links.length;
  adimgdoc = new Array(lenimg);
  adlnkdoc = new Array(lenlnk);

  for (i = 0; i < lenimg; i++) {
    adimgdoc[i] = maxAdInitSlot(adimg,document.images[i].src);
  }

  for (i = 0; i < lenlnk; i++) {
    adlnkdoc[i] = maxAdInitSlot(adlnk,document.links[i].href);
  }

  adinit = true;
}

function maxAdRefresh()
{
  if (!document.images)
    return;

  if (!adinit)
    maxAdInit();

  var x = Math.round(Math.random() * 99999998) + 1;
  var i;
  var r = new RegExp("%d","g");

  if (x < 10000000) x += 10000000;
  for (i = 0; i < adimgdoc.length; i++) {
    if (adimgdoc[i] >= 0) {
      document.images[i].src = adimg[adimgdoc[i]].replace(r,x);
    }
  }

  for (i = 0; i < adlnkdoc.length; i++) {
    if (adlnkdoc[i] >= 0) {
      document.links[i].href = adlnk[adlnkdoc[i]].replace(r,x);
    }
  }
}


}
/*
     FILE ARCHIVED ON 23:07:05 Nov 29, 2001 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:32:52 Apr 25, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.942
  exclusion.robots: 0.122
  exclusion.robots.policy: 0.108
  cdx.remote: 0.086
  esindex: 0.012
  LoadShardBlock: 70.376 (3)
  PetaboxLoader3.datanode: 48.049 (4)
  PetaboxLoader3.resolve: 88.546 (2)
  load_resource: 91.885
*/