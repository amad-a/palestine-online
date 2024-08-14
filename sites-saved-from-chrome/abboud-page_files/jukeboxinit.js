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

function maxjukeboxlaunch()
{
  if (document.all) {
    if (document.all.maxmusic)
      document.all.maxmusic.src = '';
  }
  else if (document.embeds) {
    if (document.embeds.maxmusic)
      document.embeds.maxmusic.stop()
  }
  var win = window.open('/jukebox.html','maxjukebox','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=240,height=240,top=0,left=0');
  if (win && win.focus)
    win.focus();
}


}
/*
     FILE ARCHIVED ON 01:40:42 Nov 30, 2001 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:20:46 Apr 25, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 2.28
  exclusion.robots: 0.168
  exclusion.robots.policy: 0.149
  cdx.remote: 0.114
  esindex: 0.018
  LoadShardBlock: 75.075 (3)
  PetaboxLoader3.datanode: 74.259 (4)
  PetaboxLoader3.resolve: 63.213 (2)
  load_resource: 87.113
*/