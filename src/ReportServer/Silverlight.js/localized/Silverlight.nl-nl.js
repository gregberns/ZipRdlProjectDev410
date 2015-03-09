///////////////////////////////////////////////////////////////////////////////
//
//  Silverlight.js   			version 1.0
//
//  This file is provided by Microsoft as a helper file for websites that
//  incorporate Silverlight Objects. This file is provided under the Silverlight 
//  SDK 1.0 license available at http://go.microsoft.com/fwlink/?linkid=94240.  
//  You may not use or distribute this file or the code in this file except as 
//  expressly permitted under that license.
// 
//  Copyright (c) 2007 Microsoft Corporation. All rights reserved.
//
///////////////////////////////////////////////////////////////////////////////

if(!window.Silverlight)window.Silverlight={};Silverlight._silverlightCount=0;Silverlight.ua=null;Silverlight.available=false;Silverlight.fwlinkRoot="http://go.microsoft.com/fwlink/?LinkID=";Silverlight.detectUserAgent=function(){var a=window.navigator.userAgent;Silverlight.ua={OS:"Unsupported",Browser:"Unsupported"};if(a.indexOf("Windows NT")>=0)Silverlight.ua.OS="Windows";else if(a.indexOf("PPC Mac OS X")>=0)Silverlight.ua.OS="MacPPC";else if(a.indexOf("Intel Mac OS X")>=0)Silverlight.ua.OS="MacIntel";if(Silverlight.ua.OS!="Unsupported")if(a.indexOf("MSIE")>=0){if(navigator.userAgent.indexOf("Win64")==-1)if(parseInt(a.split("MSIE")[1])>=6)Silverlight.ua.Browser="MSIE"}else if(a.indexOf("Firefox")>=0){var b=a.split("Firefox/")[1].split("."),c=parseInt(b[0]);if(c>=2)Silverlight.ua.Browser="Firefox";else{var d=parseInt(b[1]);if(c==1&&d>=5)Silverlight.ua.Browser="Firefox"}}else if(a.indexOf("Safari")>=0)Silverlight.ua.Browser="Safari"};Silverlight.detectUserAgent();Silverlight.isInstalled=function(d){var c=false,a=null;try{var b=null;if(Silverlight.ua.Browser=="MSIE")b=new ActiveXObject("AgControl.AgControl");else if(navigator.plugins["Silverlight Plug-In"]){a=document.createElement("div");document.body.appendChild(a);if(Silverlight.ua.Browser=="Safari")a.innerHTML='<embed type="application/x-silverlight" />';else a.innerHTML='<object type="application/x-silverlight"  data="data:," />';b=a.childNodes[0]}document.body.innerHTML;if(b.IsVersionSupported(d))c=true;b=null;Silverlight.available=true}catch(e){c=false}if(a)document.body.removeChild(a);return c};Silverlight.createObject=function(l,g,m,j,k,i,h){var b={},a=j,c=k;a.source=l;b.parentElement=g;b.id=Silverlight.HtmlAttributeEncode(m);b.width=Silverlight.HtmlAttributeEncode(a.width);b.height=Silverlight.HtmlAttributeEncode(a.height);b.ignoreBrowserVer=Boolean(a.ignoreBrowserVer);b.inplaceInstallPrompt=Boolean(a.inplaceInstallPrompt);b.onGetSilverlightClick=Silverlight.HtmlAttributeEncode(c.onGetSilverlightClick);var e=a.version.split(".");b.shortVer=e[0]+"."+e[1];b.version=a.version;a.initParams=i;a.windowless=a.isWindowless;a.maxFramerate=a.framerate;for(var d in c)if(c[d]&&d!="onLoad"&&d!="onError"){a[d]=c[d];c[d]=null}delete a.width;delete a.height;delete a.id;delete a.onLoad;delete a.onError;delete a.ignoreBrowserVer;delete a.inplaceInstallPrompt;delete a.version;delete a.isWindowless;delete a.framerate;delete a.data;delete a.src;delete c.onGetSilverlightClick;if(Silverlight.isInstalled(b.version)){if(Silverlight._silverlightCount==0)if(window.addEventListener)window.addEventListener("onunload",Silverlight.__cleanup,false);else window.attachEvent("onunload",Silverlight.__cleanup);var f=Silverlight._silverlightCount++;a.onLoad="__slLoad"+f;a.onError="__slError"+f;window[a.onLoad]=function(a){if(c.onLoad)c.onLoad(document.getElementById(b.id),h,a)};window[a.onError]=function(a,b){if(c.onError)c.onError(a,b);else Silverlight.default_error_handler(a,b)};slPluginHTML=Silverlight.buildHTML(b,a)}else slPluginHTML=Silverlight.buildPromptHTML(b);if(b.parentElement)b.parentElement.innerHTML=slPluginHTML;else return slPluginHTML};Silverlight.supportedUserAgent=function(){var a=Silverlight.ua,b=a.OS=="Unsupported"||a.Browser=="Unsupported"||a.OS=="Windows"&&a.Browser=="Safari"||a.OS.indexOf("Mac")>=0&&a.Browser=="IE";return !b};Silverlight.buildHTML=function(c,d){var a=[],e,i,g,f,h;if(Silverlight.ua.Browser=="Safari"){a.push("<embed ");e="";i=" ";g='="';f='"';h=' type="application/x-silverlight"/>'+"<iframe style='visibility:hidden;height:0;width:0'/>"}else{a.push('<object type="application/x-silverlight" data="data:,"');e=">";i=' <param name="';g='" value="';f='" />';h="</object>"}a.push(' id="'+c.id+'" width="'+c.width+'" height="'+c.height+'" '+e);for(var b in d)if(d[b])a.push(i+Silverlight.HtmlAttributeEncode(b)+g+Silverlight.HtmlAttributeEncode(d[b])+f);a.push(h);return a.join("")};Silverlight.default_error_handler=function(e,b){var d,c=b.ErrorType;d=b.ErrorCode;var a="\nSilverlight error message     \n";a+="ErrorCode: "+d+"\n";a+="ErrorType: "+c+"       \n";a+="Message: "+b.ErrorMessage+"     \n";if(c=="ParserError"){a+="XamlFile: "+b.xamlFile+"     \n";a+="Line: "+b.lineNumber+"     \n";a+="Position: "+b.charPosition+"     \n"}else if(c=="RuntimeError"){if(b.lineNumber!=0){a+="Line: "+b.lineNumber+"     \n";a+="Position: "+b.charPosition+"     \n"}a+="MethodName: "+b.methodName+"     \n"}alert(a)};Silverlight.createObjectEx=function(b){var a=b,c=Silverlight.createObject(a.source,a.parentElement,a.id,a.properties,a.events,a.initParams,a.context);if(a.parentElement==null)return c};Silverlight.buildPromptHTML=function(j){var a=null,h=Silverlight.fwlinkRoot,c=Silverlight.ua.OS,d=j.onGetSilverlightClick,b="92822",e,f="Download Microsoft Silverlight",m="0x413";if(!d)d="";else d+="();";if(j.inplaceInstallPrompt){var n="104745";if(Silverlight.available)e="104746";else e="104747";var i="93481",g="93483";if(c=="Windows"){b="92799";i="92803";g="92805"}else if(c=="MacIntel"){b="92808";i="92804";g="92806"}else if(c=="MacPPC"){b="92807";i="92815";g="92816"}var l='Als u op <b>Download Microsoft Silverlight</b> klikt, gaat u akkoord met de<br /><a title="Licentieovereenkomst" href="{2}" target="_top" style="text-decoration: underline; color: #0000CC"><b>licentieovereenkomst.</b></a>',k='Silverlight wordt automatisch bijgewerkt, <a title="Privacyverklaring voor Silverlight" href="{3}" target="_top" style="text-decoration: underline; color: #0000CC"><b>meer informatie</b>.</a>';a='<table border="0" cellpadding="0" cellspacing="0" width="206px" style="font-size: 55%; font-family: Verdana;  color: #5E5D5D;"><tr><td><img style="display: block; cursor: pointer; border= 0;" title="'+f+'" alt="'+f+'" onclick="javascript:Silverlight.followFWLink({0});'+d+'" src="{1}" /></td></tr><tr><td style="width: 206px; margin: 0px; background: #FFFFFF; text-align: left; border-left-style: solid; border-right-style: solid; border-color: #c7c7bd;padding-left: 6px; padding-right: 6px; padding-top: 3px; padding-bottom: 10px; border-width: 2px; ">'+l+'</td></tr><tr><td style="width: 206px; margin: 0px; background: #FFFFFF; text-align: left; border-left-style: solid; border-right-style: solid; padding-left: 6px; padding-right: 6px; border-color: #c7c7bd;padding-top: 0px; padding-bottom: 2px; border-width: 2px; ">'+k+'</td></tr><tr><td><img alt="" src="{4}" /></td></tr></table>';a=a.replace("{2}",h+i);a=a.replace("{3}",h+g);a=a.replace("{4}",h+n)}else{if(Silverlight.available)e="94377";else e="92801";if(c=="Windows")b="92800";else if(c=="MacIntel")b="92812";else if(c=="MacPPC")b="92811";a='<div style="display:block; width: 205px; height: 67px;"><img onclick="javascript:Silverlight.followFWLink({0});'+d+'" style="border:0; cursor:pointer" src="{1}" title="'+f+'" alt="'+f+'"/></div>'}a=a.replace("{0}",b);a=a.replace("{1}",h+e+"&amp;clcid="+m);return a};Silverlight.__cleanup=function(){for(var a=Silverlight._silverlightCount-1;a>=0;a--){window["__slLoad"+a]=null;window["__slError"+a]=null}if(window.removeEventListener)window.removeEventListener("unload",Silverlight.__cleanup,false);else window.detachEvent("onunload",Silverlight.__cleanup)};Silverlight.followFWLink=function(a){top.location=Silverlight.fwlinkRoot+String(a)};Silverlight.HtmlAttributeEncode=function(c){var a,b="";if(c==null)return null;for(var d=0;d<c.length;d++){a=c.charCodeAt(d);if(a>96&&a<123||a>64&&a<91||a>43&&a<58&&a!=47||a==95)b=b+String.fromCharCode(a);else b=b+"&#"+a+";"}return b}