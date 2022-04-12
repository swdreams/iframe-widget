!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(self,(function(){return(()=>{var e={303:(e,n,t)=>{e.exports=t(457)},402:e=>{!function(n){if("undefined"!=typeof window){var t=!0,o="",i=0,r="",a=null,s="",u=!1,c={resize:1,click:1},d=128,l=!0,f=1,m="bodyOffset",g=m,h=!0,p="",w={},y=32,b=null,v=!1,T=!1,M="[iFrameSizer]",O=M.length,E="",I={max:1,min:1,bodyScroll:1,documentElementScroll:1},x="child",S=window.parent,z="*",k=0,N=!1,R=null,F=16,C=1,A="scroll",W=A,P=window,j=function(){re("onMessage function not defined")},L=function(){},H=function(){},B={height:function(){return re("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return re("Custom width calculation function not defined"),document.body.scrollWidth}},q={},D=!1;try{var U=Object.create({},{passive:{get:function(){D=!0}}});window.addEventListener("test",ee,U),window.removeEventListener("test",ee,U)}catch(e){}var V,J,X,Y,Q,K,_,G={bodyOffset:function(){return document.body.offsetHeight+he("marginTop")+he("marginBottom")},offset:function(){return G.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return B.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,we(G))},min:function(){return Math.min.apply(null,we(G))},grow:function(){return G.max()},lowestElement:function(){return Math.max(G.bodyOffset()||G.documentElementOffset(),pe("bottom",be()))},taggedElement:function(){return ye("bottom","data-iframe-height")}},Z={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return B.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(Z.bodyScroll(),Z.documentElementScroll())},max:function(){return Math.max.apply(null,we(Z))},min:function(){return Math.min.apply(null,we(Z))},rightMostElement:function(){return pe("right",be())},taggedElement:function(){return ye("right","data-iframe-width")}},$=(V=ve,Q=null,K=0,_=function(){K=Date.now(),Q=null,Y=V.apply(J,X),Q||(J=X=null)},function(){var e=Date.now();K||(K=e);var n=F-(e-K);return J=this,X=arguments,n<=0||n>F?(Q&&(clearTimeout(Q),Q=null),K=e,Y=V.apply(J,X),Q||(J=X=null)):Q||(Q=setTimeout(_,n)),Y});ne(window,"message",(function(c){var f,m={init:function(){var e,f,m;p=c.data,S=c.source,function(){function e(e){return"true"===e}var a=p.substr(O).split(":");E=a[0],i=n!==a[1]?Number(a[1]):i,u=n!==a[2]?e(a[2]):u,v=n!==a[3]?e(a[3]):v,y=n!==a[4]?Number(a[4]):y,t=n!==a[6]?e(a[6]):t,r=a[7],g=n!==a[8]?a[8]:g,o=a[9],s=a[10],k=n!==a[11]?Number(a[11]):k,w.enable=n!==a[12]&&e(a[12]),x=n!==a[13]?a[13]:x,W=n!==a[14]?a[14]:W,T=n!==a[15]?Boolean(a[15]):T}(),ie("Initialising iFrame ("+window.location.href+")"),function(){function e(){var e=window.iFrameResizer;ie("Reading data from page: "+JSON.stringify(e)),Object.keys(e).forEach(ae,e),j="onMessage"in e?e.onMessage:j,L="onReady"in e?e.onReady:L,z="targetOrigin"in e?e.targetOrigin:z,g="heightCalculationMethod"in e?e.heightCalculationMethod:g,W="widthCalculationMethod"in e?e.widthCalculationMethod:W}function n(e,n){return"function"==typeof e&&(ie("Setup custom "+n+"CalcMethod"),B[n]=e,e="custom"),e}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(e(),g=n(g,"height"),W=n(W,"width")),ie("TargetOrigin for parent set to: "+z)}(),n===r&&(r=i+"px"),se("margin",(f="margin",-1!==(m=r).indexOf("-")&&(re("Negative CSS value ignored for "+f),m=""),m)),se("background",o),se("padding",s),(e=document.createElement("div")).style.clear="both",e.style.display="block",e.style.height="0",document.body.appendChild(e),le(),fe(),document.documentElement.style.height="",document.body.style.height="",ie('HTML & body height set to "auto"'),ie("Enable public methods"),P.parentIFrame={autoResize:function(e){return!0===e&&!1===t?(t=!0,me()):!1===e&&!0===t&&(t=!1,ce("remove"),null!==a&&a.disconnect(),clearInterval(b)),Ie(0,0,"autoResize",JSON.stringify(t)),t},close:function(){Ie(0,0,"close")},getId:function(){return E},getPageInfo:function(e){"function"==typeof e?(H=e,Ie(0,0,"pageInfo")):(H=function(){},Ie(0,0,"pageInfoStop"))},moveToAnchor:function(e){w.findTarget(e)},reset:function(){Ee("parentIFrame.reset")},scrollTo:function(e,n){Ie(n,e,"scrollTo")},scrollToOffset:function(e,n){Ie(n,e,"scrollToOffset")},sendMessage:function(e,n){Ie(0,0,"message",JSON.stringify(e),n)},setHeightCalculationMethod:function(e){g=e,le()},setWidthCalculationMethod:function(e){W=e,fe()},setTargetOrigin:function(e){ie("Set targetOrigin: "+e),z=e},size:function(e,n){Te("size","parentIFrame.size("+(e||"")+(n?","+n:"")+")",e,n)}},function(){function e(e){Ie(0,0,e.type,e.screenY+":"+e.screenX)}function n(n,t){ie("Add event listener: "+t),ne(window.document,n,e)}!0===T&&(n("mouseenter","Mouse Enter"),n("mouseleave","Mouse Leave"))}(),me(),w=function(){function e(){return{x:window.pageXOffset!==n?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==n?window.pageYOffset:document.documentElement.scrollTop}}function t(n){var t=n.getBoundingClientRect(),o=e();return{x:parseInt(t.left,10)+parseInt(o.x,10),y:parseInt(t.top,10)+parseInt(o.y,10)}}function o(e){function o(e){var n=t(e);ie("Moving to in page link (#"+i+") at x: "+n.x+" y: "+n.y),Ie(n.y,n.x,"scrollToOffset")}var i=e.split("#")[1]||e,r=decodeURIComponent(i),a=document.getElementById(r)||document.getElementsByName(r)[0];n!==a?o(a):(ie("In page link (#"+i+") not found in iFrame, so sending to parent"),Ie(0,0,"inPageLink","#"+i))}function i(){var e=window.location.hash,n=window.location.href;""!==e&&"#"!==e&&o(n)}function r(){function e(e){function n(e){e.preventDefault(),o(this.getAttribute("href"))}"#"!==e.getAttribute("href")&&ne(e,"click",n)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),e)}function a(){ne(window,"hashchange",i)}function s(){setTimeout(i,d)}function u(){Array.prototype.forEach&&document.querySelectorAll?(ie("Setting up location.hash handlers"),r(),a(),s()):re("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return w.enable?u():ie("In page linking not enabled"),{findTarget:o}}(),Te("init","Init message from host page"),L(),l=!1,setTimeout((function(){h=!1}),d)},reset:function(){h?ie("Page reset ignored by init"):(ie("Page size reset by host page"),Oe("resetPage"))},resize:function(){Te("resizeParent","Parent window requested size check")},moveToAnchor:function(){w.findTarget(N())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var e=N();ie("PageInfoFromParent called from parent: "+e),H(JSON.parse(e)),ie(" --")},message:function(){var e=N();ie("onMessage called from parent: "+e),j(JSON.parse(e)),ie(" --")}};function I(){return c.data.split("]")[1].split(":")[0]}function N(){return c.data.substr(c.data.indexOf(":")+1)}function R(){return c.data.split(":")[2]in{true:1,false:1}}M===(""+c.data).substr(0,O)&&(!1===l?(f=I())in m?m[f]():!e.exports&&"iFrameResize"in window||"jQuery"in window&&"iFrameResize"in window.jQuery.prototype||R()||re("Unexpected message ("+c.data+")"):R()?m.init():ie('Ignored message of type "'+I()+'". Received before initialization.'))})),ne(window,"readystatechange",xe),xe()}function ee(){}function ne(e,n,t,o){e.addEventListener(n,t,!!D&&(o||{}))}function te(e){return e.charAt(0).toUpperCase()+e.slice(1)}function oe(e){return M+"["+E+"] "+e}function ie(e){v&&"object"==typeof window.console&&console.log(oe(e))}function re(e){"object"==typeof window.console&&console.warn(oe(e))}function ae(e){var n=e.split("Callback");if(2===n.length){var t="on"+n[0].charAt(0).toUpperCase()+n[0].slice(1);this[t]=this[e],delete this[e],re("Deprecated: '"+e+"' has been renamed '"+t+"'. The old method will be removed in the next major version.")}}function se(e,t){n!==t&&""!==t&&"null"!==t&&(document.body.style[e]=t,ie("Body "+e+' set to "'+t+'"'))}function ue(e){var n={add:function(n){function t(){Te(e.eventName,e.eventType)}q[n]=t,ne(window,n,t,{passive:!0})},remove:function(e){var n,t,o=q[e];delete q[e],n=e,t=o,window.removeEventListener(n,t,!1)}};e.eventNames&&Array.prototype.map?(e.eventName=e.eventNames[0],e.eventNames.map(n[e.method])):n[e.method](e.eventName),ie(te(e.method)+" event listener: "+e.eventType)}function ce(e){ue({method:e,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),ue({method:e,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),ue({method:e,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),ue({method:e,eventType:"Input",eventName:"input"}),ue({method:e,eventType:"Mouse Up",eventName:"mouseup"}),ue({method:e,eventType:"Mouse Down",eventName:"mousedown"}),ue({method:e,eventType:"Orientation Change",eventName:"orientationchange"}),ue({method:e,eventType:"Print",eventName:["afterprint","beforeprint"]}),ue({method:e,eventType:"Ready State Change",eventName:"readystatechange"}),ue({method:e,eventType:"Touch Start",eventName:"touchstart"}),ue({method:e,eventType:"Touch End",eventName:"touchend"}),ue({method:e,eventType:"Touch Cancel",eventName:"touchcancel"}),ue({method:e,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),ue({method:e,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),ue({method:e,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),"child"===x&&ue({method:e,eventType:"IFrame Resized",eventName:"resize"})}function de(e,n,t,o){return n!==e&&(e in t||(re(e+" is not a valid option for "+o+"CalculationMethod."),e=n),ie(o+' calculation method set to "'+e+'"')),e}function le(){g=de(g,m,G,"height")}function fe(){W=de(W,A,Z,"width")}function me(){var e;!0===t?(ce("add"),e=0>y,window.MutationObserver||window.WebKitMutationObserver?e?ge():a=function(){function e(e){function n(e){!1===e.complete&&(ie("Attach listeners to "+e.src),e.addEventListener("load",o,!1),e.addEventListener("error",i,!1),a.push(e))}"attributes"===e.type&&"src"===e.attributeName?n(e.target):"childList"===e.type&&Array.prototype.forEach.call(e.target.querySelectorAll("img"),n)}function n(e){ie("Remove listeners from "+e.src),e.removeEventListener("load",o,!1),e.removeEventListener("error",i,!1),function(e){a.splice(a.indexOf(e),1)}(e)}function t(e,t,o){n(e.target),Te(t,o+": "+e.target.src)}function o(e){t(e,"imageLoad","Image loaded")}function i(e){t(e,"imageLoadFailed","Image load failed")}function r(n){Te("mutationObserver","mutationObserver: "+n[0].target+" "+n[0].type),n.forEach(e)}var a=[],s=window.MutationObserver||window.WebKitMutationObserver,u=function(){var e=document.querySelector("body");return u=new s(r),ie("Create body MutationObserver"),u.observe(e,{attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0}),u}();return{disconnect:function(){"disconnect"in u&&(ie("Disconnect body MutationObserver"),u.disconnect(),a.forEach(n))}}}():(ie("MutationObserver not supported in this browser!"),ge())):ie("Auto Resize disabled")}function ge(){0!==y&&(ie("setInterval: "+y+"ms"),b=setInterval((function(){Te("interval","setInterval: "+y)}),Math.abs(y)))}function he(e,n){var t=0;return n=n||document.body,t=null!==(t=document.defaultView.getComputedStyle(n,null))?t[e]:0,parseInt(t,10)}function pe(e,n){for(var t=n.length,o=0,i=0,r=te(e),a=Date.now(),s=0;s<t;s++)(o=n[s].getBoundingClientRect()[e]+he("margin"+r,n[s]))>i&&(i=o);return a=Date.now()-a,ie("Parsed "+t+" HTML elements"),ie("Element position calculated in "+a+"ms"),function(e){e>F/2&&ie("Event throttle increased to "+(F=2*e)+"ms")}(a),i}function we(e){return[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll()]}function ye(e,n){var t=document.querySelectorAll("["+n+"]");return 0===t.length&&(re("No tagged elements ("+n+") found on page"),document.querySelectorAll("body *")),pe(e,t)}function be(){return document.querySelectorAll("body *")}function ve(e,t,o,i){var r,a;!function(){function e(e,n){return!(Math.abs(e-n)<=k)}return r=n!==o?o:G[g](),a=n!==i?i:Z[W](),e(f,r)||u&&e(C,a)}()&&"init"!==e?!(e in{init:1,interval:1,size:1})&&(g in I||u&&W in I)?Ee(t):e in{interval:1}||ie("No change in size detected"):(Me(),Ie(f=r,C=a,e))}function Te(e,n,t,o){N&&e in c?ie("Trigger event cancelled: "+e):(e in{reset:1,resetPage:1,init:1}||ie("Trigger event: "+n),"init"===e?ve(e,n,t,o):$(e,n,t,o))}function Me(){N||(N=!0,ie("Trigger event lock on")),clearTimeout(R),R=setTimeout((function(){N=!1,ie("Trigger event lock off"),ie("--")}),d)}function Oe(e){f=G[g](),C=Z[W](),Ie(f,C,e)}function Ee(e){var n=g;g=m,ie("Reset trigger event: "+e),Me(),Oe("reset"),g=n}function Ie(e,t,o,i,r){var a;n===r?r=z:ie("Message targetOrigin: "+r),ie("Sending message to host page ("+(a=E+":"+e+":"+t+":"+o+(n!==i?":"+i:""))+")"),S.postMessage(M+a,r)}function xe(){"loading"!==document.readyState&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}}()},702:(e,n)=>{var t,o,i;!function(r){if("undefined"!=typeof window){var a,s=0,u=!1,c=!1,d="message".length,l="[iFrameSizer]",f=l.length,m=null,g=window.requestAnimationFrame,h={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},p={},w=null,y={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){x("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}},b={};window.jQuery&&((a=window.jQuery).fn?a.fn.iFrameResize||(a.fn.iFrameResize=function(e){return this.filter("iframe").each((function(n,t){B(t,e)})).end()}):I("","Unable to bind to jQuery, it is not fully loaded.")),o=[],(i="function"==typeof(t=V)?t.apply(n,o):t)===r||(e.exports=i),window.iFrameResize=window.iFrameResize||V()}function v(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function T(e,n,t){e.addEventListener(n,t,!1)}function M(e,n,t){e.removeEventListener(n,t,!1)}function O(e){return p[e]?p[e].log:u}function E(e,n){S("log",e,n,O(e))}function I(e,n){S("info",e,n,O(e))}function x(e,n){S("warn",e,n,!0)}function S(e,n,t,o){!0===o&&"object"==typeof window.console&&console[e](function(e){return l+"["+function(e){var n="Host page: "+e;return window.top!==window.self&&(n=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+e:"Nested host page: "+e),n}(e)+"]"}(n),t)}function z(e){function n(){t("Height"),t("Width"),j((function(){P(z),C(N),c("onResized",z)}),z,"init")}function t(e){var n=Number(p[N]["max"+e]),t=Number(p[N]["min"+e]),o=e.toLowerCase(),i=Number(z[o]);E(N,"Checking "+o+" is in range "+t+"-"+n),i<t&&(i=t,E(N,"Set "+o+" to min value")),i>n&&(i=n,E(N,"Set "+o+" to max value")),z[o]=""+i}function o(e){return S.substr(S.indexOf(":")+d+e)}function i(e,n){var t,o;t=function(){var t,o;L("Send Page Info","pageInfo:"+(t=document.body.getBoundingClientRect(),o=z.iframe.getBoundingClientRect(),JSON.stringify({iframeHeight:o.height,iframeWidth:o.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(o.top-t.top,10),offsetLeft:parseInt(o.left-t.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})),e,n)},b[o=n]||(b[o]=setTimeout((function(){b[o]=null,t()}),32))}function r(e){var n=e.getBoundingClientRect();return F(N),{x:Math.floor(Number(n.left)+Number(m.x)),y:Math.floor(Number(n.top)+Number(m.y))}}function a(e){var n=e?r(z.iframe):{x:0,y:0},t={x:Number(z.width)+n.x,y:Number(z.height)+n.y};E(N,"Reposition requested from iFrame (offset x:"+n.x+" y:"+n.y+")"),window.top!==window.self?window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](t.x,t.y):x(N,"Unable to scroll to requested position, window.parentIFrame not found"):(m=t,s(),E(N,"--"))}function s(){!1!==c("onScroll",m)?C(N):A()}function u(e){var n={};if(0===Number(z.width)&&0===Number(z.height)){var t=o(9).split(":");n={x:t[1],y:t[0]}}else n={x:z.width,y:z.height};c(e,{iframe:z.iframe,screenX:Number(n.x),screenY:Number(n.y),type:z.type})}function c(e,n){return k(N,e,n)}var g,h,w,y,v,O,S=e.data,z={},N=null;"[iFrameResizerChild]Ready"===S?function(){for(var e in p)L("iFrame requested init",H(e),p[e].iframe,e)}():l===(""+S).substr(0,f)&&S.substr(f).split(":")[0]in p?(y=(w=S.substr(f).split(":"))[1]?parseInt(w[1],10):0,v=p[w[0]]&&p[w[0]].iframe,O=getComputedStyle(v),z={iframe:v,id:w[0],height:y+function(e){return"border-box"!==e.boxSizing?0:(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}(O)+function(e){return"border-box"!==e.boxSizing?0:(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}(O),width:w[2],type:w[3]},N=z.id,p[N]&&(p[N].loaded=!0),(h=z.type in{true:1,false:1,undefined:1})&&E(N,"Ignoring init message from meta parent page"),!h&&function(e){var n=!0;return p[e]||(n=!1,x(z.type+" No settings for "+e+". Message was: "+S)),n}(N)&&(E(N,"Received: "+S),g=!0,null===z.iframe&&(x(N,"IFrame ("+z.id+") not found"),g=!1),g&&function(){var n,t=e.origin,o=p[N]&&p[N].checkOrigin;if(o&&""+t!="null"&&!(o.constructor===Array?function(){var e=0,n=!1;for(E(N,"Checking connection is from allowed list of origins: "+o);e<o.length;e++)if(o[e]===t){n=!0;break}return n}():(n=p[N]&&p[N].remoteHost,E(N,"Checking connection is from: "+n),t===n)))throw new Error("Unexpected message received from: "+t+" for "+z.iframe.id+". Message was: "+e.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}()&&function(){switch(p[N]&&p[N].firstRun&&p[N]&&(p[N].firstRun=!1),z.type){case"close":R(z.iframe);break;case"message":f=o(6),E(N,"onMessage passed: {iframe: "+z.iframe.id+", message: "+f+"}"),c("onMessage",{iframe:z.iframe,message:JSON.parse(f)}),E(N,"--");break;case"mouseenter":u("onMouseEnter");break;case"mouseleave":u("onMouseLeave");break;case"autoResize":p[N].autoResize=JSON.parse(o(9));break;case"scrollTo":a(!1);break;case"scrollToOffset":a(!0);break;case"pageInfo":i(p[N]&&p[N].iframe,N),function(){function e(e,o){function r(){p[t]?i(p[t].iframe,t):n()}["scroll","resize"].forEach((function(n){E(t,e+n+" listener for sendPageInfo"),o(window,n,r)}))}function n(){e("Remove ",M)}var t=N;e("Add ",T),p[t]&&(p[t].stopPageInfo=n)}();break;case"pageInfoStop":p[N]&&p[N].stopPageInfo&&(p[N].stopPageInfo(),delete p[N].stopPageInfo);break;case"inPageLink":t=o(9).split("#")[1]||"",d=decodeURIComponent(t),(l=document.getElementById(d)||document.getElementsByName(d)[0])?(e=r(l),E(N,"Moving to in page link (#"+t+") at x: "+e.x+" y: "+e.y),m={x:e.x,y:e.y},s(),E(N,"--")):window.top!==window.self?window.parentIFrame?window.parentIFrame.moveToAnchor(t):E(N,"In page link #"+t+" not found and window.parentIFrame not found"):E(N,"In page link #"+t+" not found");break;case"reset":W(z);break;case"init":n(),c("onInit",z.iframe);break;default:0===Number(z.width)&&0===Number(z.height)?x("Unsupported message received ("+z.type+"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"):n()}var e,t,d,l,f}())):I(N,"Ignored: "+S)}function k(e,n,t){var o=null,i=null;if(p[e]){if("function"!=typeof(o=p[e][n]))throw new TypeError(n+" on iFrame["+e+"] is not a function");i=o(t)}return i}function N(e){var n=e.id;delete p[n]}function R(e){var n=e.id;if(!1!==k(n,"onClose",n)){E(n,"Removing iFrame: "+n);try{e.parentNode&&e.parentNode.removeChild(e)}catch(e){x(e)}k(n,"onClosed",n),E(n,"--"),N(e)}else E(n,"Close iframe cancelled by onClose event")}function F(e){null===m&&E(e,"Get page position: "+(m={x:window.pageXOffset!==r?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==r?window.pageYOffset:document.documentElement.scrollTop}).x+","+m.y)}function C(e){null!==m&&(window.scrollTo(m.x,m.y),E(e,"Set page position: "+m.x+","+m.y),A())}function A(){m=null}function W(e){E(e.id,"Size reset requested by "+("init"===e.type?"host page":"iFrame")),F(e.id),j((function(){P(e),L("reset","reset",e.iframe,e.id)}),e,"reset")}function P(e){function n(n){c||"0"!==e[n]||(c=!0,E(o,"Hidden iFrame detected, creating visibility listener"),function(){function e(){Object.keys(p).forEach((function(e){!function(e){function n(n){return"0px"===(p[e]&&p[e].iframe.style[n])}p[e]&&null!==p[e].iframe.offsetParent&&(n("height")||n("width"))&&L("Visibility change","resize",p[e].iframe,e)}(e)}))}function n(n){E("window","Mutation observed: "+n[0].target+" "+n[0].type),q(e,16)}var t,o=v();o&&(t=document.querySelector("body"),new o(n).observe(t,{attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0}))}())}function t(t){!function(n){e.id?(e.iframe.style[n]=e[n]+"px",E(e.id,"IFrame ("+o+") "+n+" set to "+e[n]+"px")):E("undefined","messageData id not set")}(t),n(t)}var o=e.iframe.id;p[o]&&(p[o].sizeHeight&&t("height"),p[o].sizeWidth&&t("width"))}function j(e,n,t){t!==n.type&&g&&!window.jasmine?(E(n.id,"Requesting animation frame"),g(e)):e()}function L(e,n,t,o,i){var r,a=!1;o=o||t.id,p[o]&&(t&&"contentWindow"in t&&null!==t.contentWindow?(r=p[o]&&p[o].targetOrigin,E(o,"["+e+"] Sending msg to iframe["+o+"] ("+n+") targetOrigin: "+r),t.contentWindow.postMessage(l+n,r)):x(o,"["+e+"] IFrame("+o+") not found"),i&&p[o]&&p[o].warningTimeout&&(p[o].msgTimeout=setTimeout((function(){!p[o]||p[o].loaded||a||(a=!0,x(o,"IFrame has not responded within "+p[o].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}),p[o].warningTimeout)))}function H(e){return e+":"+p[e].bodyMarginV1+":"+p[e].sizeWidth+":"+p[e].log+":"+p[e].interval+":"+p[e].enablePublicMethods+":"+p[e].autoResize+":"+p[e].bodyMargin+":"+p[e].heightCalculationMethod+":"+p[e].bodyBackground+":"+p[e].bodyPadding+":"+p[e].tolerance+":"+p[e].inPageLinks+":"+p[e].resizeFrom+":"+p[e].widthCalculationMethod+":"+p[e].mouseEvents}function B(e,n){function t(e){var n=e.split("Callback");if(2===n.length){var t="on"+n[0].charAt(0).toUpperCase()+n[0].slice(1);this[t]=this[e],delete this[e],x(a,"Deprecated: '"+e+"' has been renamed '"+t+"'. The old method will be removed in the next major version.")}}var o,i,a=function(t){var o;return""===t&&(e.id=(o=n&&n.id||y.id+s++,null!==document.getElementById(o)&&(o+=s++),t=o),u=(n||{}).log,E(t,"Added missing iframe ID: "+t+" ("+e.src+")")),t}(e.id);a in p&&"iFrameResizer"in e?x(a,"Ignored iFrame, already setup."):(function(n){var o;n=n||{},p[a]={firstRun:!0,iframe:e,remoteHost:e.src&&e.src.split("/").slice(0,3).join("/")},function(e){if("object"!=typeof e)throw new TypeError("Options is not an object")}(n),Object.keys(n).forEach(t,n),function(e){for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&(p[a][n]=Object.prototype.hasOwnProperty.call(e,n)?e[n]:y[n])}(n),p[a]&&(p[a].targetOrigin=!0===p[a].checkOrigin?""===(o=p[a].remoteHost)||null!==o.match(/^(about:blank|javascript:|file:\/\/)/)?"*":o:"*")}(n),function(){switch(E(a,"IFrame scrolling "+(p[a]&&p[a].scrolling?"enabled":"disabled")+" for "+a),e.style.overflow=!1===(p[a]&&p[a].scrolling)?"hidden":"auto",p[a]&&p[a].scrolling){case"omit":break;case!0:e.scrolling="yes";break;case!1:e.scrolling="no";break;default:e.scrolling=p[a]?p[a].scrolling:"no"}}(),function(){function n(n){var t=p[a][n];1/0!==t&&0!==t&&(e.style[n]="number"==typeof t?t+"px":t,E(a,"Set "+n+" = "+e.style[n]))}function t(e){if(p[a]["min"+e]>p[a]["max"+e])throw new Error("Value for min"+e+" can not be greater than max"+e)}t("Height"),t("Width"),n("maxHeight"),n("minHeight"),n("maxWidth"),n("minWidth")}(),"number"!=typeof(p[a]&&p[a].bodyMargin)&&"0"!==(p[a]&&p[a].bodyMargin)||(p[a].bodyMarginV1=p[a].bodyMargin,p[a].bodyMargin=p[a].bodyMargin+"px"),o=H(a),(i=v())&&function(n){e.parentNode&&new n((function(n){n.forEach((function(n){Array.prototype.slice.call(n.removedNodes).forEach((function(n){n===e&&R(e)}))}))})).observe(e.parentNode,{childList:!0})}(i),T(e,"load",(function(){var n,t;L("iFrame.onload",o,e,r,!0),n=p[a]&&p[a].firstRun,t=p[a]&&p[a].heightCalculationMethod in h,!n&&t&&W({iframe:e,height:0,width:0,type:"init"})})),L("init",o,e,r,!0),p[a]&&(p[a].iframe.iFrameResizer={close:R.bind(null,p[a].iframe),removeListeners:N.bind(null,p[a].iframe),resize:L.bind(null,"Window resize","resize",p[a].iframe),moveToAnchor:function(e){L("Move to anchor","moveToAnchor:"+e,p[a].iframe,a)},sendMessage:function(e){L("Send Message","message:"+(e=JSON.stringify(e)),p[a].iframe,a)}}))}function q(e,n){null===w&&(w=setTimeout((function(){w=null,e()}),n))}function D(){"hidden"!==document.visibilityState&&(E("document","Trigger event: Visiblity change"),q((function(){U("Tab Visable","resize")}),16))}function U(e,n){Object.keys(p).forEach((function(t){(function(e){return p[e]&&"parent"===p[e].resizeFrom&&p[e].autoResize&&!p[e].firstRun})(t)&&L(e,n,p[t].iframe,t)}))}function V(){function e(e,t){t&&(function(){if(!t.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==t.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+t.tagName+">")}(),B(t,e),n.push(t))}var n;return function(){var e,n=["moz","webkit","o","ms"];for(e=0;e<n.length&&!g;e+=1)g=window[n[e]+"RequestAnimationFrame"];g?g=g.bind(window):E("setup","RequestAnimationFrame not supported")}(),T(window,"message",z),T(window,"resize",(function(){E("window","Trigger event: resize"),q((function(){U("Window resize","resize")}),16)})),T(document,"visibilitychange",D),T(document,"-webkit-visibilitychange",D),function(t,o){switch(n=[],function(e){e&&e.enablePublicMethods&&x("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}(t),typeof o){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(o||"iframe"),e.bind(r,t));break;case"object":e(t,o);break;default:throw new TypeError("Unexpected data type ("+typeof o+")")}return n}}}()},457:(e,n,t)=>{t(702);n.iframeResizerContentWindow=t(402)}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={exports:{}};return e[o](r,r.exports,t),r.exports}t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{"use strict";t.r(o),t.d(o,{default:()=>e});const e=t(303).iframeResizerContentWindow})(),o})()}));