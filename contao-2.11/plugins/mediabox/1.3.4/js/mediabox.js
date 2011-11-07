/* mediaboxAdvanced v1.3.4b, updated 2010.09.21, (c) 2007-2010 John Einselen <http://iaian7.com>, based on Slimbox v1.64, (c) 2007-2008 Christophe Beyls <http://www.digitalia.be>, customized for Contao Open Source CMS */
var Mediabox;(function(){function M(){r.setStyles({top:window.getScrollTop(),left:window.getScrollLeft()})}function N(){j=window.getWidth(),k=window.getHeight(),r.setStyles({width:j,height:k})}function O(b){Browser.Engine.gecko&&["object",window.ie?"select":"embed"].forEach(function(a){Array.forEach(document.getElementsByTagName(a),function(a){b&&(a._mediabox=a.style.visibility),a.style.visibility=b?"hidden":a._mediabox})}),r.style.display=b?"":"none";var c=b?"addEvent":"removeEvent";q&&window[c]("scroll",M),window[c]("resize",N),a.keyboard&&document[c]("keydown",P)}function P(b){if(a.alpha)switch(b.code){case 27:case 88:case 67:X();break;case 37:case 80:Q();break;case 39:case 78:R()}else switch(b.code){case 27:X();break;case 37:Q();break;case 39:R()}if(a.stopKey)return!1}function Q(){return S(d)}function R(){return S(e)}function S(f){if(f>=0){t.set("html",""),c=f,d=(c||!a.loop?c:b.length)-1,e=c+1,e==b.length&&(e=a.loop?0:-1),W(),s.className="mbLoading",b[f][2]||(b[f][2]=""),C=b[f][2].split(" "),D=C.length,D>1?(F=C[D-2].match("%")?window.getWidth()*C[D-2].replace("%","")*.01+"px":C[D-2]+"px",G=C[D-1].match("%")?window.getHeight()*C[D-1].replace("%","")*.01+"px":C[D-1]+"px"):(F="",G=""),B=b[f][0],v=b[c][1].split("::"),B.match(/quietube\.com/i)?(I=B.split("v.php/"),B=I[1]):B.match(/\/\/yfrog/i)&&(H=B.substring(B.length-1),H.match(/b|g|j|p|t/i)&&(H="image"),H=="s"&&(H="flash"),H.match(/f|z/i)&&(H="video"),B+=":iphone");if(B.match(/\.gif|\.jpg|\.jpeg|\.png|twitpic\.com/i)||H=="image")H="img",B=B.replace(/twitpic\.com/i,"twitpic.com/show/full"),m=new Image,m.onload=T,m.src=B;else if(B.match(/\.flv|\.mp4/i)||H=="video"){var g=(new URI(B)).toRelative();g!=B&&(B="../../../"+g),H="obj",F=F||a.defaultWidth,G=G||a.defaultHeight,a.useNB?m=new Swiff(""+a.playerpath+"?mediaURL="+B+"&allowSmoothing=true&autoPlay="+a.autoplay+"&buffer=6&showTimecode="+a.showTimecode+"&loop="+a.medialoop+"&controlColor="+a.controlColor+"&controlBackColor="+a.controlBackColor+"&defaultVolume="+a.volume+"&scaleIfFullScreen=true&showScalingButton=true&crop=false",{id:"MediaboxSWF",width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}):m=new Swiff(""+a.JWplayerpath+"?file="+B+"&backcolor="+a.backcolor+"&frontcolor="+a.frontcolor+"&lightcolor="+a.lightcolor+"&screencolor="+a.screencolor+"&autostart="+a.autoplay+"&controlbar="+a.controlbar,{id:"MediaboxSWF",width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T()}else if(B.match(/\.mp3|\.aac|tweetmic\.com|tmic\.fm/i)||H=="audio"){var g=(new URI(B)).toRelative();g!=B&&(B="../../../"+g),H="obj",F=F||a.defaultWidth,G=G||"20px",B.match(/tweetmic\.com|tmic\.fm/i)&&(B=B.split("/"),B[4]=B[4]||B[3],B="http://media4.fjarnet.net/tweet/tweetmicapp-"+B[4]+".mp3"),a.useNB?m=new Swiff(""+a.playerpath+"?mediaURL="+B+"&allowSmoothing=true&autoPlay="+a.autoplay+"&buffer=6&showTimecode="+a.showTimecode+"&loop="+a.medialoop+"&controlColor="+a.controlColor+"&controlBackColor="+a.controlBackColor+"&defaultVolume="+a.volume+"&scaleIfFullScreen=true&showScalingButton=true&crop=false",{id:"MediaboxSWF",width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}):m=new Swiff(""+a.JWplayerpath+"?file="+B+"&backcolor="+a.backcolor+"&frontcolor="+a.frontcolor+"&lightcolor="+a.lightcolor+"&screencolor="+a.screencolor+"&autostart="+a.autoplay,{id:"MediaboxSWF",width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T()}else B.match(/\.swf/i)||H=="flash"?(H="obj",F=F||a.defaultWidth,G=G||a.defaultHeight,m=new Swiff(B,{id:"MediaboxSWF",width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T()):B.match(/\.mov|\.m4v|\.m4a|\.aiff|\.avi|\.caf|\.dv|\.mid|\.m3u|\.mp3|\.mp2|\.mp4|\.qtz/i)||H=="qt"?(H="qt",F=F||a.defaultWidth,G=parseInt(G)+16+"px"||a.defaultHeight,m=new Quickie(B,{id:"MediaboxQT",width:F,height:G,container:"mbImage",attributes:{controller:a.controller,autoplay:a.autoplay,volume:a.volume,loop:a.medialoop,bgcolor:a.bgcolor}}),T()):B.match(/blip\.tv/i)?(H="obj",F=F||"640px",G=G||"390px",m=new Swiff(B,{src:B,width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T()):B.match(/break\.com/i)?(H="obj",F=F||"464px",G=G||"376px",J=B.match(/\d{6}/g),m=new Swiff("http://embed.break.com/"+J,{width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T()):B.match(/dailymotion\.com/i)?(H="obj",F=F||"480px",G=G||"381px",m=new Swiff(B,{id:J,width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T()):B.match(/facebook\.com/i)?(H="obj",F=F||"320px",G=G||"240px",I=B.split("v="),I=I[1].split("&"),J=I[0],m=new Swiff("http://www.facebook.com/v/"+J,{movie:"http://www.facebook.com/v/"+J,classid:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T()):B.match(/flickr\.com/i)?(H="obj",F=F||"500px",G=G||"375px",I=B.split("/"),J=I[5],m=new Swiff("http://www.flickr.com/apps/video/stewart.swf",{id:J,classid:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",width:F,height:G,params:{flashvars:"photo_id="+J+"&amp;show_info_box="+a.flInfo,wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T()):B.match(/gametrailers\.com/i)?(H="obj",F=F||"480px",G=G||"392px",J=B.match(/\d{5}/g),m=new Swiff("http://www.gametrailers.com/remote_wrap.php?mid="+J,{id:J,width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T()):B.match(/google\.com\/videoplay/i)?(H="obj",F=F||"400px",G=G||"326px",I=B.split("="),J=I[1],m=new Swiff("http://video.google.com/googleplayer.swf?docId="+J+"&autoplay="+a.autoplayNum,{id:J,width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T()):B.match(/megavideo\.com/i)?(H="obj",F=F||"640px",G=G||"360px",I=B.split("="),J=I[1],m=new Swiff("http://wwwstatic.megavideo.com/mv_player.swf?v="+J,{id:J,width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T()):B.match(/metacafe\.com\/watch/i)?(H="obj",F=F||"400px",G=G||"345px",I=B.split("/"),J=I[4],m=new Swiff("http://www.metacafe.com/fplayer/"+J+"/.swf?playerVars=autoPlay="+a.autoplayYes,{id:J,width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T()):B.match(/vids\.myspace\.com/i)?(H="obj",F=F||"425px",G=G||"360px",m=new Swiff(B,{id:J,width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T()):B.match(/revver\.com/i)?(H="obj",F=F||"480px",G=G||"392px",I=B.split("/"),J=I[4],m=new Swiff("http://flash.revver.com/player/1.0/player.swf?mediaId="+J+"&affiliateId="+a.revverID+"&allowFullScreen="+a.revverFullscreen+"&autoStart="+a.autoplay+"&backColor=#"+a.revverBack+"&frontColor=#"+a.revverFront+"&gradColor=#"+a.revverGrad+"&shareUrl=revver",{id:J,width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T()):B.match(/rutube\.ru/i)?(H="obj",F=F||"470px",G=G||"353px",I=B.split("="),J=I[1],m=new Swiff("http://video.rutube.ru/"+J,{movie:"http://video.rutube.ru/"+J,width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T()):B.match(/seesmic\.com/i)?(H="obj",F=F||"435px",G=G||"355px",I=B.split("/"),J=I[5],m=new Swiff("http://seesmic.com/Standalone.swf?video="+J,{id:J,width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T()):B.match(/tudou\.com/i)?(H="obj",F=F||"400px",G=G||"340px",I=B.split("/"),J=I[5],m=new Swiff("http://www.tudou.com/v/"+J,{width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T()):B.match(/twitcam\.com/i)?(H="obj",F=F||"320px",G=G||"265px",I=B.split("/"),J=I[3],m=new Swiff("http://static.livestream.com/chromelessPlayer/wrappers/TwitcamPlayer.swf?hash="+J,{width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T()):B.match(/twiturm\.com/i)?(H="obj",F=F||"402px",G=G||"48px",I=B.split("/"),J=I[3],m=new Swiff("http://twiturm.com/flash/twiturm_mp3.swf?playerID=0&sf="+J,{width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T()):B.match(/twitvid\.com/i)?(H="obj",F=F||"600px",G=G||"338px",I=B.split("/"),J=I[3],m=new Swiff("http://www.twitvid.com/player/"+J,{width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T()):B.match(/ustream\.tv/i)?(H="obj",F=F||"400px",G=G||"326px",m=new Swiff(B+"&amp;viewcount="+a.usViewers+"&amp;autoplay="+a.autoplay,{width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T()):B.match(/youku\.com/i)?(H="obj",F=F||"480px",G=G||"400px",I=B.split("id_"),J=I[1],m=new Swiff("http://player.youku.com/player.php/sid/"+J+"=/v.swf",{width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T()):B.match(/youtube\.com\/watch/i)?(I=B.split("v="),a.html5?(H="url",F=F||"640px",G=G||"385px",J="mediaId_"+(new Date).getTime(),m=new Element("iframe",{src:"http://www.youtube.com/embed/"+I[1],id:J,width:F,height:G,frameborder:0}),T()):(H="obj",J=I[1],J.match(/fmt=22/i)?(K="&ap=%2526fmt%3D22",F=F||"640px",G=G||"385px"):J.match(/fmt=18/i)?(K="&ap=%2526fmt%3D18",F=F||"560px",G=G||"345px"):(K=a.ytQuality,F=F||"480px",G=G||"295px"),m=new Swiff("http://www.youtube.com/v/"+J+"&autoplay="+a.autoplayNum+"&fs="+a.fullscreenNum+K+"&border="+a.ytBorder+"&color1=0x"+a.ytColor1+"&color2=0x"+a.ytColor2+"&rel="+a.ytRel+"&showinfo="+a.ytInfo+"&showsearch="+a.ytSearch,{id:J,width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T())):B.match(/youtube\.com\/view/i)?(H="obj",I=B.split("p="),J=I[1],F=F||"480px",G=G||"385px",m=new Swiff("http://www.youtube.com/p/"+J+"&autoplay="+a.autoplayNum+"&fs="+a.fullscreenNum+K+"&border="+a.ytBorder+"&color1=0x"+a.ytColor1+"&color2=0x"+a.ytColor2+"&rel="+a.ytRel+"&showinfo="+a.ytInfo+"&showsearch="+a.ytSearch,{id:J,width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T()):B.match(/veoh\.com/i)?(H="obj",F=F||"410px",G=G||"341px",B=B.replace("%3D","/"),I=B.split("watch/"),J=I[1],m=new Swiff("http://www.veoh.com/static/swf/webplayer/WebPlayer.swf?version=AFrontend.5.5.2.1001&permalinkId="+J+"&player=videodetailsembedded&videoAutoPlay="+a.AutoplayNum+"&id=anonymous",{id:J,width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T()):B.match(/viddler\.com/i)?(H="obj",F=F||"437px",G=G||"370px",I=B.split("/"),J=I[4],m=new Swiff(B,{id:"viddler_"+J,movie:B,classid:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen,id:"viddler_"+J,movie:B}}),T()):B.match(/viddyou\.com/i)?(H="obj",F=F||"416px",G=G||"312px",I=B.split("="),J=I[1],m=new Swiff("http://www.viddyou.com/get/v2_"+a.vuPlayer+"/"+J+".swf",{id:J,movie:"http://www.viddyou.com/get/v2_"+a.vuPlayer+"/"+J+".swf",width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T()):B.match(/vimeo\.com/i)?(F=F||"640px",G=G||"360px",I=B.split("/"),J=I[3],a.html5?(H="url",J="mediaId_"+(new Date).getTime(),m=new Element("iframe",{src:"http://player.vimeo.com/video/"+I[3]+"?portrait="+a.vmPortrait,id:J,width:F,height:G,frameborder:0}),T()):(H="obj",m=new Swiff("http://www.vimeo.com/moogaloop.swf?clip_id="+J+"&amp;server=www.vimeo.com&amp;fullscreen="+a.fullscreenNum+"&amp;autoplay="+a.autoplayNum+"&amp;show_title="+a.vmTitle+"&amp;show_byline="+a.vmByline+"&amp;show_portrait="+a.vmPortrait+"&amp;color="+a.vmColor,{id:J,width:F,height:G,params:{wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T())):B.match(/12seconds\.tv/i)?(H="obj",F=F||"430px",G=G||"360px",I=B.split("/"),J=I[5],m=new Swiff("http://embed.12seconds.tv/players/remotePlayer.swf",{id:J,width:F,height:G,params:{flashvars:"vid="+J+"",wmode:a.wmode,bgcolor:a.bgcolor,allowscriptaccess:a.scriptaccess,allowfullscreen:a.fullscreen}}),T()):B.match(/\#mb_/i)?(H="inline",F=F||a.defaultWidth,G=G||a.defaultHeight,URLsplit=B.split("#"),m=document.id(URLsplit[1]).get("html"),T()):(H="url",F=F||a.defaultWidth,G=G||a.defaultHeight,J="mediaId_"+(new Date).getTime(),m=new Element("iframe",{src:B,id:J,width:F,height:G,frameborder:0}),T())}return!1}function T(){H=="img"?(F=m.width,G=m.height,a.imgBackground?t.setStyles({backgroundImage:"url("+B+")",display:""}):(G>=k-a.imgPadding&&G/k>=F/j?(G=k-a.imgPadding,F=m.width=parseInt(G/m.height*F),m.height=G):F>=j-a.imgPadding&&G/k<F/j&&(F=j-a.imgPadding,G=m.height=parseInt(F/m.width*G),m.width=F),Browser.Engine.trident&&(m=document.id(m)),m.addEvent("mousedown",function(a){a.stop()}).addEvent("contextmenu",function(a){a.stop()}),t.setStyles({backgroundImage:"none",display:""}),m.inject(t))):H=="obj"?Browser.Plugins.Flash.version<8?(t.setStyles({backgroundImage:"none",display:""}),t.set("html",'<div id="mbError"><b>Error</b><br/>Adobe Flash is either not installed or not up to date, please visit <a href="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" title="Get Flash" target="_new">Adobe.com</a> to download the free player.</div>'),F=a.DefaultWidth,G=a.DefaultHeight):(t.setStyles({backgroundImage:"none",display:""}),m.inject(t)):H=="qt"?(t.setStyles({backgroundImage:"none",display:""}),m):H=="inline"?(t.setStyles({backgroundImage:"none",display:""}),t.set("html",m)):H=="url"?(t.setStyles({backgroundImage:"none",display:""}),m.inject(t)):(t.setStyles({backgroundImage:"none",display:""}),t.set("html",'<div id="mbError"><b>Error</b><br/>A file type error has occoured, please visit <a href="iaian7.com/webcode/mediaboxAdvanced" title="mediaboxAdvanced" target="_new">iaian7.com</a> or contact the website author for more information.</div>'),F=a.defaultWidth,G=a.defaultHeight),t.setStyles({width:F,height:G}),x.setStyles({width:F}),w.set("html",a.showCaption?v[0]:""),x.set("html",a.showCaption&&v.length>1?v[1]:""),z.set("html",a.showCounter&&b.length>1?a.counterText.replace(/{x}/,c+1).replace(/{y}/,b.length):""),d>=0&&b[d][0].match(/\.gif|\.jpg|\.jpeg|\.png|twitpic\.com/i)&&(n.src=b[d][0].replace(/twitpic\.com/i,"twitpic.com/show/full")),e>=0&&b[e][0].match(/\.gif|\.jpg|\.jpeg|\.png|twitpic\.com/i)&&(o.src=b[e][0].replace(/twitpic\.com/i,"twitpic.com/show/full")),F=t.offsetWidth,G=t.offsetHeight+u.offsetHeight,G>=f+f?g=-f:g=-(G/2),F>=h+h?i=-h:i=-(F/2),a.resizeOpening?l.resize.start({width:F,height:G,marginTop:g-L,marginLeft:i-L}):(s.setStyles({width:F,height:G,marginTop:g-L,marginLeft:i-L}),U())}function U(){l.image.start(1)}function V(){s.className="",d>=0&&(y.style.display=""),e>=0&&(A.style.display=""),l.bottom.start(1)}function W(){m&&(m.onload=$empty),l.resize.cancel(),l.image.cancel().set(0),l.bottom.cancel().set(0),$$(y,A).setStyle("display","none")}function X(){if(c>=0){m.onload=$empty,t.set("html","");for(var a in l)l[a].cancel();s.setStyle("display","none"),l.overlay.chain(O).start(0)}return window.fireEvent("mb_close"),!1}var a,b,c,d,e,f,g,h,i,j,k,l,m,n=new Image,o=new Image,p=!1,q=!1,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H="none",I,J="mediaBox",K,L;window.addEvent("domready",function(){document.id(document.body).adopt($$([r=(new Element("div",{id:"mbOverlay"})).addEvent("click",X),s=new Element("div",{id:"mbCenter"})]).setStyle("display","none")),t=(new Element("div",{id:"mbImage"})).injectInside(s),u=(new Element("div",{id:"mbBottom"})).injectInside(s).adopt(closeLink=(new Element("a",{id:"mbCloseLink",href:"#"})).addEvent("click",X),A=(new Element("a",{id:"mbNextLink",href:"#"})).addEvent("click",R),y=(new Element("a",{id:"mbPrevLink",href:"#"})).addEvent("click",Q),w=new Element("div",{id:"mbTitle"}),z=new Element("div",{id:"mbNumber"}),x=new Element("div",{id:"mbCaption"})),l={overlay:(new Fx.Tween(r,{property:"opacity",duration:360})).set(0),image:new Fx.Tween(t,{property:"opacity",duration:360,onComplete:V}),bottom:(new Fx.Tween(u,{property:"opacity",duration:240})).set(0)}}),Mediabox={close:function(){X()},open:function(c,d,e){return a=$extend({text:["<big>&laquo;</big>","<big>&raquo;</big>","<big>&times;</big>"],loop:!1,keyboard:!0,alpha:!0,stopKey:!1,overlayOpacity:.7,resizeOpening:!0,resizeDuration:240,resizeTransition:!1,initialWidth:320,initialHeight:180,defaultWidth:640,defaultHeight:360,showCaption:!0,showCounter:!0,counterText:"({x} of {y})",imgBackground:!1,imgPadding:100,html5:"true",scriptaccess:"true",fullscreen:"true",fullscreenNum:"1",autoplay:"true",autoplayNum:"1",autoplayYes:"yes",volume:"100",medialoop:"true",bgcolor:"#000000",wmode:"opaque",useNB:!0,playerpath:"plugins/mediabox/1.3.4/NonverBlaster.swf",controlColor:"0xFFFFFF",controlBackColor:"0x000000",showTimecode:"false",JWplayerpath:"plugins/mediabox/1.3.4/player.swf",backcolor:"000000",frontcolor:"999999",lightcolor:"000000",screencolor:"000000",controlbar:"over",controller:"true",flInfo:"true",revverID:"187866",revverFullscreen:"true",revverBack:"000000",revverFront:"ffffff",revverGrad:"000000",usViewers:"true",ytBorder:"0",ytColor1:"000000",ytColor2:"333333",ytQuality:"&ap=%2526fmt%3D18",ytRel:"0",ytInfo:"1",ytSearch:"0",vuPlayer:"basic",vmTitle:"1",vmByline:"1",vmPortrait:"1",vmColor:"ffffff"},e||{}),y.set("html",a.text[0]),A.set("html",a.text[1]),closeLink.set("html",a.text[2]),L=s.getStyle("padding-left").toInt()+t.getStyle("margin-left").toInt()+t.getStyle("padding-left").toInt(),Browser.Engine.gecko&&Browser.Engine.version<19&&(p=!0,a.overlayOpacity=1,r.className="mbOverlayFF"),Browser.Engine.trident&&Browser.Engine.version<5&&(q=!0,r.className="mbOverlayIE",r.setStyle("position","absolute"),M()),typeof c=="string"&&(c=[[c,d,e]],d=0),b=c,a.loop=a.loop&&b.length>1,N(),O(!0),f=window.getScrollTop()+window.getHeight()/2,h=window.getScrollLeft()+window.getWidth()/2,l.resize=new Fx.Morph(s,$extend({duration:a.resizeDuration,onComplete:U},a.resizeTransition?{transition:a.resizeTransition}:{})),s.setStyles({top:f,left:h,width:a.initialWidth,height:a.initialHeight,marginTop:-(a.initialHeight/2)-L,marginLeft:-(a.initialWidth/2)-L,display:""}),l.overlay.start(a.overlayOpacity),S(d)}},Element.implement({mediabox:function(a,b){return $$(this).mediabox(a,b),this}}),Elements.implement({mediabox:function(a,b,c){b=b||function(a){return E=a.rel.split(/[\[\]]/),E=E[1],[a.href,a.title,E]},c=c||function(){return!0};var d=this;return d.removeEvents("click").addEvent("click",function(){var e=d.filter(c,this),f=[],g=[];return e.each(function(a,b){g.indexOf(a.toString())<0&&(f.include(e[b]),g.include(e[b].toString()))}),Mediabox.open(f.map(b),g.indexOf(this.toString()),a)}),d}})})();