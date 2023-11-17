<!--hide script from old browsers
//No Click! - version 0.6 - Main programme
//Copyright © 1997 - 1999 by Enigma ® Designs and Kallback Africa. All rights reserved
//Simply -  http://www.kallbackafrica.com/simply
//mirror at http://www.kallback.co.za/simply
//Programmed by Michel van Baalen - michel@kallback.co.za
//This script may not be used without permission
//
// DO NOT change ANY of the following code !!!
//
BroW = parseInt(navigator.appVersion)
if (BroW >= 4) {Vs = true} else {Vs = false}
if (Vs == true) {
  Wid = screen.availWidth - 30
  Hei = screen.availHeight + 50
  Left = Math.floor((Wid - 350) / 2) ; Top = Math.floor((Hei - 100) / 2)
  if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN)
  }
  document.onmousedown = noClick
}
//
function noClick (e) {
  flag = false
  if (document.layers) {which = e.which ; if (which == 3) {flag = true}
  } else {which = event.button ; if (which == 2) {flag = true}}
  if (flag) {
    alert('Sorry, but the copying of images from this site is forbidden.\nPlease obtain permission from the webmaster to use\nour images!')
    return false
  }
}
//
//-- end hiding --> 
