var DsIframeWidget;(()=>{var e={303:(e,t,n)=>{e.exports=n(457)},402:e=>{!function(t){if("undefined"!=typeof window){var n=!0,i="",o=0,r="",a=null,s="",d=!1,c={resize:1,click:1},u=128,l=!0,f=1,m="bodyOffset",g=m,h=!0,p="",w={},y=32,b=null,v=!1,I=!1,M="[iFrameSizer]",O=M.length,E="",T={max:1,min:1,bodyScroll:1,documentElementScroll:1},x="child",k=window.parent,S="*",z=0,N=!1,R=null,F=16,C=1,W="scroll",j=W,A=window,P=function(){re("onMessage function not defined")},L=function(){},B=function(){},H={height:function(){return re("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return re("Custom width calculation function not defined"),document.body.scrollWidth}},D={},q=!1;try{var U=Object.create({},{passive:{get:function(){q=!0}}});window.addEventListener("test",ee,U),window.removeEventListener("test",ee,U)}catch(e){}var V,J,_,X,Y,Q,K,G={bodyOffset:function(){return document.body.offsetHeight+he("marginTop")+he("marginBottom")},offset:function(){return G.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return H.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,we(G))},min:function(){return Math.min.apply(null,we(G))},grow:function(){return G.max()},lowestElement:function(){return Math.max(G.bodyOffset()||G.documentElementOffset(),pe("bottom",be()))},taggedElement:function(){return ye("bottom","data-iframe-height")}},Z={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return H.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(Z.bodyScroll(),Z.documentElementScroll())},max:function(){return Math.max.apply(null,we(Z))},min:function(){return Math.min.apply(null,we(Z))},rightMostElement:function(){return pe("right",be())},taggedElement:function(){return ye("right","data-iframe-width")}},$=(V=ve,Y=null,Q=0,K=function(){Q=Date.now(),Y=null,X=V.apply(J,_),Y||(J=_=null)},function(){var e=Date.now();Q||(Q=e);var t=F-(e-Q);return J=this,_=arguments,t<=0||t>F?(Y&&(clearTimeout(Y),Y=null),Q=e,X=V.apply(J,_),Y||(J=_=null)):Y||(Y=setTimeout(K,t)),X});te(window,"message",(function(c){var f,m={init:function(){var e,f,m;p=c.data,k=c.source,function(){function e(e){return"true"===e}var a=p.substr(O).split(":");E=a[0],o=t!==a[1]?Number(a[1]):o,d=t!==a[2]?e(a[2]):d,v=t!==a[3]?e(a[3]):v,y=t!==a[4]?Number(a[4]):y,n=t!==a[6]?e(a[6]):n,r=a[7],g=t!==a[8]?a[8]:g,i=a[9],s=a[10],z=t!==a[11]?Number(a[11]):z,w.enable=t!==a[12]&&e(a[12]),x=t!==a[13]?a[13]:x,j=t!==a[14]?a[14]:j,I=t!==a[15]?Boolean(a[15]):I}(),oe("Initialising iFrame ("+window.location.href+")"),function(){function e(){var e=window.iFrameResizer;oe("Reading data from page: "+JSON.stringify(e)),Object.keys(e).forEach(ae,e),P="onMessage"in e?e.onMessage:P,L="onReady"in e?e.onReady:L,S="targetOrigin"in e?e.targetOrigin:S,g="heightCalculationMethod"in e?e.heightCalculationMethod:g,j="widthCalculationMethod"in e?e.widthCalculationMethod:j}function t(e,t){return"function"==typeof e&&(oe("Setup custom "+t+"CalcMethod"),H[t]=e,e="custom"),e}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(e(),g=t(g,"height"),j=t(j,"width")),oe("TargetOrigin for parent set to: "+S)}(),t===r&&(r=o+"px"),se("margin",(f="margin",-1!==(m=r).indexOf("-")&&(re("Negative CSS value ignored for "+f),m=""),m)),se("background",i),se("padding",s),(e=document.createElement("div")).style.clear="both",e.style.display="block",e.style.height="0",document.body.appendChild(e),le(),fe(),document.documentElement.style.height="",document.body.style.height="",oe('HTML & body height set to "auto"'),oe("Enable public methods"),A.parentIFrame={autoResize:function(e){return!0===e&&!1===n?(n=!0,me()):!1===e&&!0===n&&(n=!1,ce("remove"),null!==a&&a.disconnect(),clearInterval(b)),Te(0,0,"autoResize",JSON.stringify(n)),n},close:function(){Te(0,0,"close")},getId:function(){return E},getPageInfo:function(e){"function"==typeof e?(B=e,Te(0,0,"pageInfo")):(B=function(){},Te(0,0,"pageInfoStop"))},moveToAnchor:function(e){w.findTarget(e)},reset:function(){Ee("parentIFrame.reset")},scrollTo:function(e,t){Te(t,e,"scrollTo")},scrollToOffset:function(e,t){Te(t,e,"scrollToOffset")},sendMessage:function(e,t){Te(0,0,"message",JSON.stringify(e),t)},setHeightCalculationMethod:function(e){g=e,le()},setWidthCalculationMethod:function(e){j=e,fe()},setTargetOrigin:function(e){oe("Set targetOrigin: "+e),S=e},size:function(e,t){Ie("size","parentIFrame.size("+(e||"")+(t?","+t:"")+")",e,t)}},function(){function e(e){Te(0,0,e.type,e.screenY+":"+e.screenX)}function t(t,n){oe("Add event listener: "+n),te(window.document,t,e)}!0===I&&(t("mouseenter","Mouse Enter"),t("mouseleave","Mouse Leave"))}(),me(),w=function(){function e(){return{x:window.pageXOffset!==t?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==t?window.pageYOffset:document.documentElement.scrollTop}}function n(t){var n=t.getBoundingClientRect(),i=e();return{x:parseInt(n.left,10)+parseInt(i.x,10),y:parseInt(n.top,10)+parseInt(i.y,10)}}function i(e){function i(e){var t=n(e);oe("Moving to in page link (#"+o+") at x: "+t.x+" y: "+t.y),Te(t.y,t.x,"scrollToOffset")}var o=e.split("#")[1]||e,r=decodeURIComponent(o),a=document.getElementById(r)||document.getElementsByName(r)[0];t!==a?i(a):(oe("In page link (#"+o+") not found in iFrame, so sending to parent"),Te(0,0,"inPageLink","#"+o))}function o(){var e=window.location.hash,t=window.location.href;""!==e&&"#"!==e&&i(t)}function r(){function e(e){function t(e){e.preventDefault(),i(this.getAttribute("href"))}"#"!==e.getAttribute("href")&&te(e,"click",t)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),e)}function a(){te(window,"hashchange",o)}function s(){setTimeout(o,u)}function d(){Array.prototype.forEach&&document.querySelectorAll?(oe("Setting up location.hash handlers"),r(),a(),s()):re("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return w.enable?d():oe("In page linking not enabled"),{findTarget:i}}(),Ie("init","Init message from host page"),L(),l=!1,setTimeout((function(){h=!1}),u)},reset:function(){h?oe("Page reset ignored by init"):(oe("Page size reset by host page"),Oe("resetPage"))},resize:function(){Ie("resizeParent","Parent window requested size check")},moveToAnchor:function(){w.findTarget(N())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var e=N();oe("PageInfoFromParent called from parent: "+e),B(JSON.parse(e)),oe(" --")},message:function(){var e=N();oe("onMessage called from parent: "+e),P(JSON.parse(e)),oe(" --")}};function T(){return c.data.split("]")[1].split(":")[0]}function N(){return c.data.substr(c.data.indexOf(":")+1)}function R(){return c.data.split(":")[2]in{true:1,false:1}}M===(""+c.data).substr(0,O)&&(!1===l?(f=T())in m?m[f]():!e.exports&&"iFrameResize"in window||"jQuery"in window&&"iFrameResize"in window.jQuery.prototype||R()||re("Unexpected message ("+c.data+")"):R()?m.init():oe('Ignored message of type "'+T()+'". Received before initialization.'))})),te(window,"readystatechange",xe),xe()}function ee(){}function te(e,t,n,i){e.addEventListener(t,n,!!q&&(i||{}))}function ne(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ie(e){return M+"["+E+"] "+e}function oe(e){v&&"object"==typeof window.console&&console.log(ie(e))}function re(e){"object"==typeof window.console&&console.warn(ie(e))}function ae(e){var t=e.split("Callback");if(2===t.length){var n="on"+t[0].charAt(0).toUpperCase()+t[0].slice(1);this[n]=this[e],delete this[e],re("Deprecated: '"+e+"' has been renamed '"+n+"'. The old method will be removed in the next major version.")}}function se(e,n){t!==n&&""!==n&&"null"!==n&&(document.body.style[e]=n,oe("Body "+e+' set to "'+n+'"'))}function de(e){var t={add:function(t){function n(){Ie(e.eventName,e.eventType)}D[t]=n,te(window,t,n,{passive:!0})},remove:function(e){var t,n,i=D[e];delete D[e],t=e,n=i,window.removeEventListener(t,n,!1)}};e.eventNames&&Array.prototype.map?(e.eventName=e.eventNames[0],e.eventNames.map(t[e.method])):t[e.method](e.eventName),oe(ne(e.method)+" event listener: "+e.eventType)}function ce(e){de({method:e,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),de({method:e,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),de({method:e,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),de({method:e,eventType:"Input",eventName:"input"}),de({method:e,eventType:"Mouse Up",eventName:"mouseup"}),de({method:e,eventType:"Mouse Down",eventName:"mousedown"}),de({method:e,eventType:"Orientation Change",eventName:"orientationchange"}),de({method:e,eventType:"Print",eventName:["afterprint","beforeprint"]}),de({method:e,eventType:"Ready State Change",eventName:"readystatechange"}),de({method:e,eventType:"Touch Start",eventName:"touchstart"}),de({method:e,eventType:"Touch End",eventName:"touchend"}),de({method:e,eventType:"Touch Cancel",eventName:"touchcancel"}),de({method:e,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),de({method:e,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),de({method:e,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),"child"===x&&de({method:e,eventType:"IFrame Resized",eventName:"resize"})}function ue(e,t,n,i){return t!==e&&(e in n||(re(e+" is not a valid option for "+i+"CalculationMethod."),e=t),oe(i+' calculation method set to "'+e+'"')),e}function le(){g=ue(g,m,G,"height")}function fe(){j=ue(j,W,Z,"width")}function me(){var e;!0===n?(ce("add"),e=0>y,window.MutationObserver||window.WebKitMutationObserver?e?ge():a=function(){function e(e){function t(e){!1===e.complete&&(oe("Attach listeners to "+e.src),e.addEventListener("load",i,!1),e.addEventListener("error",o,!1),a.push(e))}"attributes"===e.type&&"src"===e.attributeName?t(e.target):"childList"===e.type&&Array.prototype.forEach.call(e.target.querySelectorAll("img"),t)}function t(e){oe("Remove listeners from "+e.src),e.removeEventListener("load",i,!1),e.removeEventListener("error",o,!1),function(e){a.splice(a.indexOf(e),1)}(e)}function n(e,n,i){t(e.target),Ie(n,i+": "+e.target.src)}function i(e){n(e,"imageLoad","Image loaded")}function o(e){n(e,"imageLoadFailed","Image load failed")}function r(t){Ie("mutationObserver","mutationObserver: "+t[0].target+" "+t[0].type),t.forEach(e)}var a=[],s=window.MutationObserver||window.WebKitMutationObserver,d=function(){var e=document.querySelector("body");return d=new s(r),oe("Create body MutationObserver"),d.observe(e,{attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0}),d}();return{disconnect:function(){"disconnect"in d&&(oe("Disconnect body MutationObserver"),d.disconnect(),a.forEach(t))}}}():(oe("MutationObserver not supported in this browser!"),ge())):oe("Auto Resize disabled")}function ge(){0!==y&&(oe("setInterval: "+y+"ms"),b=setInterval((function(){Ie("interval","setInterval: "+y)}),Math.abs(y)))}function he(e,t){var n=0;return t=t||document.body,n=null!==(n=document.defaultView.getComputedStyle(t,null))?n[e]:0,parseInt(n,10)}function pe(e,t){for(var n=t.length,i=0,o=0,r=ne(e),a=Date.now(),s=0;s<n;s++)(i=t[s].getBoundingClientRect()[e]+he("margin"+r,t[s]))>o&&(o=i);return a=Date.now()-a,oe("Parsed "+n+" HTML elements"),oe("Element position calculated in "+a+"ms"),function(e){e>F/2&&oe("Event throttle increased to "+(F=2*e)+"ms")}(a),o}function we(e){return[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll()]}function ye(e,t){var n=document.querySelectorAll("["+t+"]");return 0===n.length&&(re("No tagged elements ("+t+") found on page"),document.querySelectorAll("body *")),pe(e,n)}function be(){return document.querySelectorAll("body *")}function ve(e,n,i,o){var r,a;!function(){function e(e,t){return!(Math.abs(e-t)<=z)}return r=t!==i?i:G[g](),a=t!==o?o:Z[j](),e(f,r)||d&&e(C,a)}()&&"init"!==e?!(e in{init:1,interval:1,size:1})&&(g in T||d&&j in T)?Ee(n):e in{interval:1}||oe("No change in size detected"):(Me(),Te(f=r,C=a,e))}function Ie(e,t,n,i){N&&e in c?oe("Trigger event cancelled: "+e):(e in{reset:1,resetPage:1,init:1}||oe("Trigger event: "+t),"init"===e?ve(e,t,n,i):$(e,t,n,i))}function Me(){N||(N=!0,oe("Trigger event lock on")),clearTimeout(R),R=setTimeout((function(){N=!1,oe("Trigger event lock off"),oe("--")}),u)}function Oe(e){f=G[g](),C=Z[j](),Te(f,C,e)}function Ee(e){var t=g;g=m,oe("Reset trigger event: "+e),Me(),Oe("reset"),g=t}function Te(e,n,i,o,r){var a;t===r?r=S:oe("Message targetOrigin: "+r),oe("Sending message to host page ("+(a=E+":"+e+":"+n+":"+i+(t!==o?":"+o:""))+")"),k.postMessage(M+a,r)}function xe(){"loading"!==document.readyState&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}}()},702:(e,t)=>{var n,i,o;!function(r){if("undefined"!=typeof window){var a,s=0,d=!1,c=!1,u="message".length,l="[iFrameSizer]",f=l.length,m=null,g=window.requestAnimationFrame,h={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},p={},w=null,y={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){x("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}},b={};window.jQuery&&((a=window.jQuery).fn?a.fn.iFrameResize||(a.fn.iFrameResize=function(e){return this.filter("iframe").each((function(t,n){H(n,e)})).end()}):T("","Unable to bind to jQuery, it is not fully loaded.")),i=[],(o="function"==typeof(n=V)?n.apply(t,i):n)===r||(e.exports=o),window.iFrameResize=window.iFrameResize||V()}function v(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function I(e,t,n){e.addEventListener(t,n,!1)}function M(e,t,n){e.removeEventListener(t,n,!1)}function O(e){return p[e]?p[e].log:d}function E(e,t){k("log",e,t,O(e))}function T(e,t){k("info",e,t,O(e))}function x(e,t){k("warn",e,t,!0)}function k(e,t,n,i){!0===i&&"object"==typeof window.console&&console[e](function(e){return l+"["+function(e){var t="Host page: "+e;return window.top!==window.self&&(t=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+e:"Nested host page: "+e),t}(e)+"]"}(t),n)}function S(e){function t(){n("Height"),n("Width"),P((function(){A(S),C(N),c("onResized",S)}),S,"init")}function n(e){var t=Number(p[N]["max"+e]),n=Number(p[N]["min"+e]),i=e.toLowerCase(),o=Number(S[i]);E(N,"Checking "+i+" is in range "+n+"-"+t),o<n&&(o=n,E(N,"Set "+i+" to min value")),o>t&&(o=t,E(N,"Set "+i+" to max value")),S[i]=""+o}function i(e){return k.substr(k.indexOf(":")+u+e)}function o(e,t){var n,i;n=function(){var n,i;L("Send Page Info","pageInfo:"+(n=document.body.getBoundingClientRect(),i=S.iframe.getBoundingClientRect(),JSON.stringify({iframeHeight:i.height,iframeWidth:i.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(i.top-n.top,10),offsetLeft:parseInt(i.left-n.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})),e,t)},b[i=t]||(b[i]=setTimeout((function(){b[i]=null,n()}),32))}function r(e){var t=e.getBoundingClientRect();return F(N),{x:Math.floor(Number(t.left)+Number(m.x)),y:Math.floor(Number(t.top)+Number(m.y))}}function a(e){var t=e?r(S.iframe):{x:0,y:0},n={x:Number(S.width)+t.x,y:Number(S.height)+t.y};E(N,"Reposition requested from iFrame (offset x:"+t.x+" y:"+t.y+")"),window.top!==window.self?window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](n.x,n.y):x(N,"Unable to scroll to requested position, window.parentIFrame not found"):(m=n,s(),E(N,"--"))}function s(){!1!==c("onScroll",m)?C(N):W()}function d(e){var t={};if(0===Number(S.width)&&0===Number(S.height)){var n=i(9).split(":");t={x:n[1],y:n[0]}}else t={x:S.width,y:S.height};c(e,{iframe:S.iframe,screenX:Number(t.x),screenY:Number(t.y),type:S.type})}function c(e,t){return z(N,e,t)}var g,h,w,y,v,O,k=e.data,S={},N=null;"[iFrameResizerChild]Ready"===k?function(){for(var e in p)L("iFrame requested init",B(e),p[e].iframe,e)}():l===(""+k).substr(0,f)&&k.substr(f).split(":")[0]in p?(y=(w=k.substr(f).split(":"))[1]?parseInt(w[1],10):0,v=p[w[0]]&&p[w[0]].iframe,O=getComputedStyle(v),S={iframe:v,id:w[0],height:y+function(e){return"border-box"!==e.boxSizing?0:(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}(O)+function(e){return"border-box"!==e.boxSizing?0:(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}(O),width:w[2],type:w[3]},N=S.id,p[N]&&(p[N].loaded=!0),(h=S.type in{true:1,false:1,undefined:1})&&E(N,"Ignoring init message from meta parent page"),!h&&function(e){var t=!0;return p[e]||(t=!1,x(S.type+" No settings for "+e+". Message was: "+k)),t}(N)&&(E(N,"Received: "+k),g=!0,null===S.iframe&&(x(N,"IFrame ("+S.id+") not found"),g=!1),g&&function(){var t,n=e.origin,i=p[N]&&p[N].checkOrigin;if(i&&""+n!="null"&&!(i.constructor===Array?function(){var e=0,t=!1;for(E(N,"Checking connection is from allowed list of origins: "+i);e<i.length;e++)if(i[e]===n){t=!0;break}return t}():(t=p[N]&&p[N].remoteHost,E(N,"Checking connection is from: "+t),n===t)))throw new Error("Unexpected message received from: "+n+" for "+S.iframe.id+". Message was: "+e.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}()&&function(){switch(p[N]&&p[N].firstRun&&p[N]&&(p[N].firstRun=!1),S.type){case"close":R(S.iframe);break;case"message":f=i(6),E(N,"onMessage passed: {iframe: "+S.iframe.id+", message: "+f+"}"),c("onMessage",{iframe:S.iframe,message:JSON.parse(f)}),E(N,"--");break;case"mouseenter":d("onMouseEnter");break;case"mouseleave":d("onMouseLeave");break;case"autoResize":p[N].autoResize=JSON.parse(i(9));break;case"scrollTo":a(!1);break;case"scrollToOffset":a(!0);break;case"pageInfo":o(p[N]&&p[N].iframe,N),function(){function e(e,i){function r(){p[n]?o(p[n].iframe,n):t()}["scroll","resize"].forEach((function(t){E(n,e+t+" listener for sendPageInfo"),i(window,t,r)}))}function t(){e("Remove ",M)}var n=N;e("Add ",I),p[n]&&(p[n].stopPageInfo=t)}();break;case"pageInfoStop":p[N]&&p[N].stopPageInfo&&(p[N].stopPageInfo(),delete p[N].stopPageInfo);break;case"inPageLink":n=i(9).split("#")[1]||"",u=decodeURIComponent(n),(l=document.getElementById(u)||document.getElementsByName(u)[0])?(e=r(l),E(N,"Moving to in page link (#"+n+") at x: "+e.x+" y: "+e.y),m={x:e.x,y:e.y},s(),E(N,"--")):window.top!==window.self?window.parentIFrame?window.parentIFrame.moveToAnchor(n):E(N,"In page link #"+n+" not found and window.parentIFrame not found"):E(N,"In page link #"+n+" not found");break;case"reset":j(S);break;case"init":t(),c("onInit",S.iframe);break;default:0===Number(S.width)&&0===Number(S.height)?x("Unsupported message received ("+S.type+"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"):t()}var e,n,u,l,f}())):T(N,"Ignored: "+k)}function z(e,t,n){var i=null,o=null;if(p[e]){if("function"!=typeof(i=p[e][t]))throw new TypeError(t+" on iFrame["+e+"] is not a function");o=i(n)}return o}function N(e){var t=e.id;delete p[t]}function R(e){var t=e.id;if(!1!==z(t,"onClose",t)){E(t,"Removing iFrame: "+t);try{e.parentNode&&e.parentNode.removeChild(e)}catch(e){x(e)}z(t,"onClosed",t),E(t,"--"),N(e)}else E(t,"Close iframe cancelled by onClose event")}function F(e){null===m&&E(e,"Get page position: "+(m={x:window.pageXOffset!==r?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==r?window.pageYOffset:document.documentElement.scrollTop}).x+","+m.y)}function C(e){null!==m&&(window.scrollTo(m.x,m.y),E(e,"Set page position: "+m.x+","+m.y),W())}function W(){m=null}function j(e){E(e.id,"Size reset requested by "+("init"===e.type?"host page":"iFrame")),F(e.id),P((function(){A(e),L("reset","reset",e.iframe,e.id)}),e,"reset")}function A(e){function t(t){c||"0"!==e[t]||(c=!0,E(i,"Hidden iFrame detected, creating visibility listener"),function(){function e(){Object.keys(p).forEach((function(e){!function(e){function t(t){return"0px"===(p[e]&&p[e].iframe.style[t])}p[e]&&null!==p[e].iframe.offsetParent&&(t("height")||t("width"))&&L("Visibility change","resize",p[e].iframe,e)}(e)}))}function t(t){E("window","Mutation observed: "+t[0].target+" "+t[0].type),D(e,16)}var n,i=v();i&&(n=document.querySelector("body"),new i(t).observe(n,{attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0}))}())}function n(n){!function(t){e.id?(e.iframe.style[t]=e[t]+"px",E(e.id,"IFrame ("+i+") "+t+" set to "+e[t]+"px")):E("undefined","messageData id not set")}(n),t(n)}var i=e.iframe.id;p[i]&&(p[i].sizeHeight&&n("height"),p[i].sizeWidth&&n("width"))}function P(e,t,n){n!==t.type&&g&&!window.jasmine?(E(t.id,"Requesting animation frame"),g(e)):e()}function L(e,t,n,i,o){var r,a=!1;i=i||n.id,p[i]&&(n&&"contentWindow"in n&&null!==n.contentWindow?(r=p[i]&&p[i].targetOrigin,E(i,"["+e+"] Sending msg to iframe["+i+"] ("+t+") targetOrigin: "+r),n.contentWindow.postMessage(l+t,r)):x(i,"["+e+"] IFrame("+i+") not found"),o&&p[i]&&p[i].warningTimeout&&(p[i].msgTimeout=setTimeout((function(){!p[i]||p[i].loaded||a||(a=!0,x(i,"IFrame has not responded within "+p[i].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}),p[i].warningTimeout)))}function B(e){return e+":"+p[e].bodyMarginV1+":"+p[e].sizeWidth+":"+p[e].log+":"+p[e].interval+":"+p[e].enablePublicMethods+":"+p[e].autoResize+":"+p[e].bodyMargin+":"+p[e].heightCalculationMethod+":"+p[e].bodyBackground+":"+p[e].bodyPadding+":"+p[e].tolerance+":"+p[e].inPageLinks+":"+p[e].resizeFrom+":"+p[e].widthCalculationMethod+":"+p[e].mouseEvents}function H(e,t){function n(e){var t=e.split("Callback");if(2===t.length){var n="on"+t[0].charAt(0).toUpperCase()+t[0].slice(1);this[n]=this[e],delete this[e],x(a,"Deprecated: '"+e+"' has been renamed '"+n+"'. The old method will be removed in the next major version.")}}var i,o,a=function(n){var i;return""===n&&(e.id=(i=t&&t.id||y.id+s++,null!==document.getElementById(i)&&(i+=s++),n=i),d=(t||{}).log,E(n,"Added missing iframe ID: "+n+" ("+e.src+")")),n}(e.id);a in p&&"iFrameResizer"in e?x(a,"Ignored iFrame, already setup."):(function(t){var i;t=t||{},p[a]={firstRun:!0,iframe:e,remoteHost:e.src&&e.src.split("/").slice(0,3).join("/")},function(e){if("object"!=typeof e)throw new TypeError("Options is not an object")}(t),Object.keys(t).forEach(n,t),function(e){for(var t in y)Object.prototype.hasOwnProperty.call(y,t)&&(p[a][t]=Object.prototype.hasOwnProperty.call(e,t)?e[t]:y[t])}(t),p[a]&&(p[a].targetOrigin=!0===p[a].checkOrigin?""===(i=p[a].remoteHost)||null!==i.match(/^(about:blank|javascript:|file:\/\/)/)?"*":i:"*")}(t),function(){switch(E(a,"IFrame scrolling "+(p[a]&&p[a].scrolling?"enabled":"disabled")+" for "+a),e.style.overflow=!1===(p[a]&&p[a].scrolling)?"hidden":"auto",p[a]&&p[a].scrolling){case"omit":break;case!0:e.scrolling="yes";break;case!1:e.scrolling="no";break;default:e.scrolling=p[a]?p[a].scrolling:"no"}}(),function(){function t(t){var n=p[a][t];1/0!==n&&0!==n&&(e.style[t]="number"==typeof n?n+"px":n,E(a,"Set "+t+" = "+e.style[t]))}function n(e){if(p[a]["min"+e]>p[a]["max"+e])throw new Error("Value for min"+e+" can not be greater than max"+e)}n("Height"),n("Width"),t("maxHeight"),t("minHeight"),t("maxWidth"),t("minWidth")}(),"number"!=typeof(p[a]&&p[a].bodyMargin)&&"0"!==(p[a]&&p[a].bodyMargin)||(p[a].bodyMarginV1=p[a].bodyMargin,p[a].bodyMargin=p[a].bodyMargin+"px"),i=B(a),(o=v())&&function(t){e.parentNode&&new t((function(t){t.forEach((function(t){Array.prototype.slice.call(t.removedNodes).forEach((function(t){t===e&&R(e)}))}))})).observe(e.parentNode,{childList:!0})}(o),I(e,"load",(function(){var t,n;L("iFrame.onload",i,e,r,!0),t=p[a]&&p[a].firstRun,n=p[a]&&p[a].heightCalculationMethod in h,!t&&n&&j({iframe:e,height:0,width:0,type:"init"})})),L("init",i,e,r,!0),p[a]&&(p[a].iframe.iFrameResizer={close:R.bind(null,p[a].iframe),removeListeners:N.bind(null,p[a].iframe),resize:L.bind(null,"Window resize","resize",p[a].iframe),moveToAnchor:function(e){L("Move to anchor","moveToAnchor:"+e,p[a].iframe,a)},sendMessage:function(e){L("Send Message","message:"+(e=JSON.stringify(e)),p[a].iframe,a)}}))}function D(e,t){null===w&&(w=setTimeout((function(){w=null,e()}),t))}function q(){"hidden"!==document.visibilityState&&(E("document","Trigger event: Visiblity change"),D((function(){U("Tab Visable","resize")}),16))}function U(e,t){Object.keys(p).forEach((function(n){(function(e){return p[e]&&"parent"===p[e].resizeFrom&&p[e].autoResize&&!p[e].firstRun})(n)&&L(e,t,p[n].iframe,n)}))}function V(){function e(e,n){n&&(function(){if(!n.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==n.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+n.tagName+">")}(),H(n,e),t.push(n))}var t;return function(){var e,t=["moz","webkit","o","ms"];for(e=0;e<t.length&&!g;e+=1)g=window[t[e]+"RequestAnimationFrame"];g?g=g.bind(window):E("setup","RequestAnimationFrame not supported")}(),I(window,"message",S),I(window,"resize",(function(){E("window","Trigger event: resize"),D((function(){U("Window resize","resize")}),16)})),I(document,"visibilitychange",q),I(document,"-webkit-visibilitychange",q),function(n,i){switch(t=[],function(e){e&&e.enablePublicMethods&&x("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}(n),typeof i){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(i||"iframe"),e.bind(r,n));break;case"object":e(n,i);break;default:throw new TypeError("Unexpected data type ("+typeof i+")")}return t}}}()},457:(e,t,n)=>{var i=n(702);t.iframeResize=i,n(402)}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{"use strict";n.r(i),n.d(i,{iframeResize:()=>e.iframeResize,init:()=>a});var e=n(303);function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("undefined"!=typeof window)if(this.btnEle=null,this.iframeEle=null,this.settings=o({iframeId:t},i),this.api_key=this.settings.api_key||"",this.settings.iframeId){this.iframeResizerSettings={log:i.log||!1,checkOrigin:i.checkOrigin||!1,onResized:function(e,t,n,i){},onMessage:function(e){e.iframe,e.message}},this.isModal=function(){return"modal"===n.settings.widgetMode},this.getIframeId=function(){return n.isModal()?"dsw-".concat(n.settings.api_key,"-modal"):"".concat(n.settings.iframeId)},this.getIframeModalWrapId=function(){return"dsw-".concat(n.settings.api_key,"-wrap")},this.getIframe=function(){return document.getElementById(n.getIframeId())},this.getIframeModalWrap=function(){return document.getElementById(n.getIframeModalWrapId())},this.getIframeModalCloseButton=function(){return n.getIframeModalWrap().querySelectorAll(".dsw-close")[0]},this.getIframeModalFireButton=function(){return document.querySelectorAll(n.settings.iframeId)[0]},this.getCloseButton=function(){return'\n    <div class="dsw-close">\n      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" xmlns="http://www.w3.org/2000/svg">\n        <rect width="24" height="24" fill="none"/>\n        <path d="M19 5L5 19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M5 5L19 19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n      </svg>\n    </div>  \n    '},this.addModalIframeCss=function(){var e="\n      body{\n        background: transparent;\n      }\n      #".concat(n.getIframeModalWrapId()," {\n        width: 100vw;\n        height: 100vh;\n        position: fixed;\n        top: 0;\n        left: 0;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        background: transparent;\n        z-index: 99999;\n        display: none;\n        background: rgb(0,0,0,0.6);\n        backdrop-filter: blur(7px);\n      }\n      \n      #").concat(n.getIframeModalWrapId(),".dsw-wrap-opened {\n        display: flex;\n      }\n      \n      #").concat(n.getIframeModalWrapId()," iframe {\n        box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 40px;\n        opacity: 1;\n        transition: width 200ms ease 0s, height ease 0s, max-height ease 0s;\n      }\n      \n      #").concat(n.getIframeModalWrapId()," .dsw-close {\n        position: fixed;\n        top: 0;\n        right: 0;\n        margin-right: 2rem;\n        margin-top: 2rem;\n        padding: 5px; \n        border-radius: 100%;\n        background: white;\n        box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 40px;\n        transition: transform 0.16s linear 0s, opacity 0.08s linear 0s;\n        width: 36px;\n        height: 36px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n      }\n      #").concat(n.getIframeModalWrapId()," .dsw-close:hover svg {\n        scale: 1.1;\n      }\n    "),t=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");t.appendChild(i),i.type="text/css",i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))},this.getUrl=function(){var e=n.settings.baseUrl;return e||(e="development"==n.settings.env?"http://192.168.110.46:3000":"staging"==n.settings.env?"https://staging-widget2.dropspace.art":"https://widget2.dropspace.art"),e+="/widget?api_key=".concat(n.api_key),"modal"===n.settings.widgetMode&&(e+="&modal=1"),e},this.showWidgetModal=function(){n.getIframeModalWrap()&&(n.iframeEle.src=n.getUrl(),n.getIframeModalWrap().classList.add("dsw-wrap-opened"),n.getIframe().style.height="270px")},this.hideWidgetModal=function(){n.getIframeModalWrap()&&(n.getIframeModalWrap().classList.remove("dsw-wrap-opened"),n.iframeEle.src="")},this.initWidgetModal=function(){if(n.btnEle=n.getIframeModalFireButton(),n.btnEle){if(!n.iframeEle){n.addModalIframeCss();var t='\n            <div id="'.concat(n.getIframeModalWrapId(),'" class="dsw-wrap">\n              ').concat(n.getCloseButton(),'\n              <div style="max-height: 100%; overflow-y: auto">\n                <iframe id="').concat(n.getIframeId(),'" \n                      title="dropspace widget"\n                      class="dsw-iframe"\n                      src=""\n                      frameborder="no" allowtransparency="true" allowfullscreen=""\n                      scrolling="yes"\n                      style="display: block; width: 425px; max-width: 100vw;"\n                >\n                </iframe>\n              </div>\n            </div>\n        ');document.body.innerHTML+=t}n.iframeEle=n.getIframe(),(0,e.iframeResize)(n.iframeResizerSettings,"#"+n.getIframeId()),n.getIframeModalFireButton().addEventListener("click",(function(e){return n.showWidgetModal()})),n.getIframeModalCloseButton().addEventListener("click",(function(e){return n.hideWidgetModal()}))}else console.log("button does not exist: ".concat(n.settings.iframeId))};var r=function(){"modal"==n.settings.widgetMode?n.initWidgetModal():(n.getIframeModalFireButton().src||(n.getIframeModalFireButton().src=n.getUrl()),(0,e.iframeResize)(n.iframeResizerSettings,n.settings.iframeId))};s()?r():window.attachEvent?window.attachEvent("onload",r):window.addEventListener("load",r,!1)}else console.warn("iframeId should be provided.")}function s(){return"complete"===document.readyState}})(),DsIframeWidget=i})();