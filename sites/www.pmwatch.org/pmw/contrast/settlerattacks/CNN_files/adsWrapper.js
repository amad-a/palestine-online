var adsHt="http://ar.atwola.com",adsD=new Date(),adsTz="&TZ="+adsD.getTimezoneOffset(),adsScr=adsD.getTime()%0x3fffffff,adsTar='_top',adsExt='aol',adsTp='',adsSL="<SCRIPT LANGUAGE='JavaScript' SRC='"
var adsDel=0,adsOld=1,adsNMSG,adsNG,adsNM,adsSr="",adsOt='',adsScat,adsIP=" SCROLLING=NO FRAMEBORDER=0 MARGINHEIGHT=0 MARGINWIDTH=0>"
var adsNv=navigator,adsAN=adsNv.appName,adsAV=parseInt(adsNv.appVersion),adsUA=adsNv.userAgent,adsLNm=0,adsLMN=new Array()
var adsAH1="<A HREF='",adsAH2="/"+adsScr+ "/",adsOne=0
var adsI1="<IMG SRC=",adsI2="/"+adsScr +"/",adsI3=" BORDER=0 ALT=\"Click Here\"></A>"
var adsIE=(adsAN=="Microsoft Internet Explorer"),adsNS=(adsAN=="Netscape"),adsN4=(adsNS&&adsAV==4),adsN6=(adsNS&&adsAV>=5),adsOp=(adsUA.indexOf("Opera")!=-1)
if (((adsNS||adsIE)&&adsAV>=4)||adsOp){adsOld=0
if (adsOp&&adsUA.indexOf("Opera 5")==-1&&adsUA.indexOf("Opera/5")==-1&&adsUA.indexOf("Opera 6")==-1&&adsUA.indexOf("Opera/6")==-1){adsOld=1}}
function adSetRotate(){}
function adSetDelay(v){if (!adsOp){adsDel=escape(v)}}
function adSetBucketMN(){}
function adSetHtNm(v){adsHt=(v.indexOf('http')==-1?"http://"+v:v)}
function adSetTarget(v){adsTar=escape(v)}
function adSetNewMedia(v){adsNM=escape(v);adsNMSG=(v!=''?"NM="+adsNM:"")}
function adSetExt(v){adsExt=escape(v)}
function adSetSearch(v){adsSr=(v!=''?(window.encodeURI)?"&search="+encodeURI(v):"&search="+escape(v):"")}
function adSetType(v){adsTp=v.toUpperCase()}
function adSetOther(v){adsOt=v}
function adSetSearchCat(v){adsScat=v}
function adsCkPlg(){
var e='</',ie=0,vm='{08B0E5C0-4FCB-11CF-AAA5-00401C608500}',dc=document,dl=dc.layers,da=dc.all,dg=dc.getElementById,n=navigator,db=dc.body
var cid='componentid',beh='url(#default#clientCaps)',jO=0,jI=0,ie5=da&&dg,go=(da||dl||(dg&&!da))
if (adsUA.indexOf('MSIE')!=-1&&adsUA.indexOf('Win')!=-1&&!adsOp){ie=1
var d=document.writeln
d('<script language="VBscript">')
d('Dim adsVB')
d('adsVB=0')
d('If ScriptEngineMajorVersion >=2 then')
d('adsVB=1')
d('End If')
d('Function adsAX(activeXname)')
d('on error resume next')
d('If ScriptEngineMajorVersion >=2 then')
d('adsAX=False')
d('adsAX=IsObject(CreateObject(activeXname))')
d('If (err) then')
d('adsAX=False')
d('End If')
d('Else')
d('adsAX=False')
d('End If')
d('End Function')
d(e+'script>')
}
var i,u=0,dF='',dV='',dtB='',fS
if (ie&&window.adsVB){u=0}else{u=1}
var p=n.plugins
if (p){
var l=p.length
if (l>1){var m=n.mimeTypes,fl=m['application/x-shockwave-flash'],v1=m['application/x-mtx']
if (m&&((fl&&fl.enabledPlugin&&(fl.suffixes.indexOf('swf')!=-1))||(v1&&v1.enabledPlugin&&(v1.suffixes.indexOf('mtx')!=-1)))){
var ds,f="Flash ",nm
if (adsNS&&(n.appVersion.indexOf('4.0')!=-1)){
for(i in p){
ds=p[i].description,fS=ds.indexOf(f)
if (fS!=-1){if (ds.substring(fS+6,fS+7)>=4){dF='F'}}
else if (ds.indexOf('MetaStream 3 Plugin')!=-1){dV='V'}}
}else{
for (i=0;i<l;i++){
ds=p[i].description,nm=p[i].name
fS=ds.indexOf(f)
fN=nm.indexOf(f)
if (fS!=-1){if (ds.substring(fS+6,fS+7)>=4){dF='F'}else if (fN!=-1){if (nm.substring(fN+6,fN+7)>=4){dF='F'}}}
else if ((ds.indexOf('MetaStream 3 Plugin')!=-1)||(nm.indexOf('MetaStream 3 Plugin')!=-1)){dV='V'}}}
if (fl==null){dF=''}
if (v1==null){dV=''}}
}else if(ie==1&&!u){if (!ie5||adsOp||adsUA.indexOf('NT')!=-1){fS="ShockwaveFlash.ShockwaveFlash."
dF=(adsAX(fS+"5")?'F':'')
if (!dF){dF=(adsAX(fS+"6")?'F':'')
if (!dF){dF=(adsAX(fS+"4")?'F':'')}}}
dV=(adsAX('AxMetaStream.MetaStreamCtlSecondary')?'V':'')
if (!dV){dV=(adsAX('AxMetaStreamCtl')?'V':'')}
}else{dV='';dF=''}
}else{dV='';dF=''}
if (go){if (n.platform=='Win32'){jO=n.javaEnabled();jI=1
if (ie5&&!adsOp&&(db!=null)){jI=0
db.style.behavior=beh
if(db.isComponentInstalled(vm,cid))jI=1
var fC='{D27CDB6E-AE6D-11CF-96B8-444553540000}',fV=db.getComponentVersion(fC,cid)
if (fV.charAt(0)>=4){dF='F'}}}}
if (jO&&jI){dtB='B'}
if (adsOp){adsNMSG="SNM=HI"+dF}else{adsNMSG="SNM=HI"+((!adsN4)?'D':'')+dtB+dF+dV}}
function adsFn1(m,w,h,de,nu,sr,t,sc,ot,nm){
var s="<HTML><HEAD>",p="' WIDTH="+w+" HEIGHT="+h+adsIP
s+="<SCRIPT LANGUAGE='JavaScript'>\n"
s+="function adsXz(){\n"
var d="document.adsX1.adsXf1.value",z=adsHt+"/html/"+m+"/"+adsScr+"/"+adsExt+"?"+nm+"&width="+w+"&height="+h+"&target="+t+adsTz+sc+sr+ot+"&CT=I"
s+='if ('+d+'=="1"){self.location.reload("true")}\n'
s+="else {"+d+"='1'}\n"
s+="}\n"
s+="</"+"SCRIPT>\n"
s+="<FORM NAME='adsX1'><INPUT TYPE=hidden NAME='adsXf1' VALUE='0'></FORM>\n"
s+="</HEAD><BODY onLoad='adsXz()'>"
if (!de){s+="<IFRAME SRC='"+z+p}else{s+="<IFRAME NAME='adsFI"+nu+"' SRC='"+p
adsLMN[nu]="adsF"+nu+".adsFI"+nu+"|"+z}
s+="</IFRAME></BODY></HTML>"
return s}
function adsSF(){if (adsScat&&adsScat!=''){adsScS="&scat="+escape(adsScat)}else{adsScS=""}}
function adsWrAd(){document.write(window.adsTop)}
function htmlAdWH(m,w,h,t){adsSF()
var d=document,ah=adsExt+"' TARGET="+adsTar+">",p=" WIDTH="+w+" HEIGHT="+h,l=adsAH1+adsHt+"/link/"+m+adsAH2+ah
var p1=adsTz+adsScS+adsSr+adsOt,i1=adsI1+adsHt+"/image/"+m+adsI2+adsExt+"?"+p1+"'"+p+adsI3
if (!adsOld){if (!adsNMSG){if (!adsNG){adsCkPlg();adsNG=adsNMSG}else{adsNMSG=adsNG}}
var s=adsHt+"/html/"+m+"/"+adsScr+"/"+adsExt+"?"+adsNMSG+"&width="+w+"&height="+h+"&target="+adsTar+p1+"&CT="
if (t=='t'){d.write(adsSL+s+"J&hw=topbot'></SCRIPT>")}
else if(t=='b'){d.write(window.adsTop)}else{if (adsTp!='J'&&!adsN4){var x="<IFRAME NAME='adsF"+adsLNm+"' SRC="
if (adsUA.indexOf('Mac')==-1&&adsIE&&adsTp.indexOf('1')==-1&&!adsOp){d.write(x+"javascript:parent.adsFn1('"+m+"',"+w+","+h+","+adsDel+","+adsLNm+",'"+adsSr+"','"+adsTar+"','"+adsScS+"','"+adsOt+"','"+adsNMSG+"')"+p+adsIP)
if (adsDel){adsLNm++}}else{
if (!adsDel){d.write(x+s+"I"+p+adsIP)}
else{d.write(x+"''"+p+adsIP)
adsLMN[adsLNm]="adsF"+adsLNm+"|"+s+"I"
adsLNm++}}}
if ((adsTp=='L'||adsDel!=0)&&adsN4){var q=adsLNm;d.write("<ILAYER ID=adsL"+q+" visibility=hide"+p+"></ILAYER>")
adsLMN[adsLNm]="adsL"+adsLNm+"|"+s+"L"
adsLNm++}
else if (adsTp=='J'||((!adsTp||adsTp=='I1')&&!adsIE&&!adsN6)){d.write(adsSL+s+"J&hw=docw'></SCRIPT>")}
else if(adsTp.indexOf('I')!=-1&&adsN4){d.write(l+i1)}
if (adsTp!='J'&&!adsN4){d.write("</IFRAME>")}}}
else if(!(adsNS&&adsAV<=2)){d.write(l+i1)}
adsScat=''}
function imageAdWH(m,w,h){adsSF()
var s=adsHt+"/image/"+m+adsI2+adsExt+"?"+adsTz+adsScS+adsSr+adsOt,p=" HEIGHT="+h+" WIDTH="+w+adsI3
document.write(adsAH1+adsHt+"/link/"+m+adsAH2+adsExt+"' TARGET="+adsTar+">")
if (!adsDel||adsOld){document.write(adsI1+s+p)
}else{document.write(adsI1+adsHt+"/file/blank.gif NAME=adsImg"+adsLNm+p)
adsLMN[adsLNm]="adsImg"+adsLNm+"|"+s
adsLNm++}
adsScat=''}
function adsEndFn(){}