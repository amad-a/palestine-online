if (window.adsOne==0&&!window.adsOld&&(window.adsDel>0||(window.adsN4&&window.adsLNm>0))){adsOne++
adsEndF()}
function adsOnL(){var w=window
if (w.adsPrO)w.adsPrO()
adsDelFn()}
function adsEndF(){var w=window
if (w.adsDel!=2||adsN4||(adsIE&&adsAV<=4)){if (w.adsN4){adsDelFn()}
else{setTimeout('adsDelFn()', '1')}}
else{w.adsPrO=w.onload
w.onload=adsOnL}}
function adsDelFn(){
var w=window,n=0,s,z,r=1
while (n<w.adsLNm){s=w.adsLMN[n].split("|")
if (s[0].indexOf('Img')!=-1){z=eval("document."+s[0])
if(z)z.src=s[1]
}else if(!w.adsN4){
z=eval("window."+s[0])
if (adsN6&&n==0){var y="try{if (z.location.href!='about:blank'){r=0}}catch (err){r=0}"
eval(y)}if (z&&r)z.location.href=s[1]}else{document.write("<LAYER SRC='"+s[1]+"'")
document.write ("visibility=hidden onload=\"moveToAbsolute("+s[0]+".pageX,"+s[0]+".pageY-1);visibility