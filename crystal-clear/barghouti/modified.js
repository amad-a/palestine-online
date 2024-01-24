<!--hide script from old browsers
function MakeArray(n) {this.length = n ; return this}
//
var Days = new MakeArray(7)
var Months = new MakeArray(12)
Days[1]="Sunday"
Days[2]="Monday"
Days[3]="Tuesday"
Days[4]="Wednesday"
Days[5]="Thursday"
Days[6]="Friday"
Days[7]="Saturday"
Months[1]="January"
Months[2]="February"
Months[3]="March"
Months[4]="April"
Months[5]="May"
Months[6]="June"
Months[7]="July"
Months[8]="August"
Months[9]="September"
Months[10]="October"
Months[11]="November"
Months[12]="December"
var lastMod = new Date()
var today = new Date()
var year = (today.getYear()+1900)
if (year >= 2100) {
 year = (year - 1900)
}
function getDate(theDate) {
 return Days[theDate.getDay()+1] + " " + theDate.getDate() + " " +
 Months[theDate.getMonth()+1] + " " + [theDate.getYear()] + "."
}

lastMod.setTime(Date.parse(document.lastModified))
document.write('<P ALIGN="CENTER">')
document.write('<FONT SIZE="-1" COLOR="#000000" FACE="arial,geneva">')
document.write('© Copyright 1996 - ' + year + ' by ')
document.write('<b>BARGHOUTI.COM</b> - All Rights Reserved.')
document.write('</FONT></P>')
document.write('<BR><BR></B></CENTER>')
//-- end hiding -->

