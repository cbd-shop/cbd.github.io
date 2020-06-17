(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var k="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},m;if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var r={a:!0},t={};try{t.__proto__=r;n=t.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var u=m,w=function(a,b){a.prototype=k(b.prototype);a.prototype.constructor=a;if(u)u(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var f=Object.getOwnPropertyDescriptor(b,c);f&&Object.defineProperty(a,c,f)}else a[c]=b[c]},x=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");
},y=x(this),z=this||self,A=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},B=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var C=function(a){a=1-a;return 1-a*a*a};var F=/[^\d]+$/,G=function(a,b,c,f){if(!a.hasAttribute(b))return c;a=a.getAttribute(b);isNaN(parseFloat(a))?f=c:(c=parseFloat(a),(a=(a=a.match(F))&&a[0]||null)&&(a=a.trim()),b=c,"%"==a&&(b=Number((c/100*f).toFixed(2))),f=b);return f};var ea=function(a,b,c){var f=G(a,"xenter",0,b),e=a.hasAttribute("xmiddle")?G(a,"xmiddle",0,b):void 0,d=G(a,"xexit",0,b),h=G(a,"yenter",0,c),l=a.hasAttribute("ymiddle")?G(a,"ymiddle",0,c):void 0,g=G(a,"yexit",0,c),p=H(a,"opacityenter"),q=H(a,"opacitymiddle"),D=H(a,"opacityexit"),E=a.hasAttribute("fixed"),X=a.getAttribute("assettype")||"",Y=a.getAttribute("source")||"",Z=a.getAttribute("easing")||"linear";b=G(a,"width",b,b);c=G(a,"height",c,c);var aa=a.hasAttribute("yawenter")?parseInt(a.getAttribute("yawenter"),
10):void 0,ba=a.hasAttribute("yawmiddle")?parseInt(a.getAttribute("yawmiddle"),10):void 0,ca=a.hasAttribute("yawexit")?parseInt(a.getAttribute("yawexit"),10):void 0,da=a.getAttribute("exit-url")||void 0,v=[];v.push({opacity:p,x:f,y:h,j:aa});void 0!==e&&void 0!==l&&v.push({opacity:q,x:e,y:l,j:ba});v.push({opacity:D,x:d,y:g,j:ca});return{P:X,f:v,easing:Z,element:a,H:da,fixed:E,height:c,source:Y,width:b}},I=function(a,b,c,f,e,d){e=void 0===e?0:e;d=void 0===d?1:d;if(f<=e)return a;if(f>=d)return b;switch(c){case "ease-in":c=
f*f*f;e*=e*e;d*=d*d;break;case "ease-in-out":c=3*f*f-2*f*f*f;e=3*e*e-2*e*e*e;d=3*d*d-2*d*d*d;break;case "ease-out":c=C(f);e=C(e);d=C(d);break;default:c=f}return 1/(d-e)*(b-a)*(c-e)+a},H=function(a,b){if(!a.hasAttribute(b))return 1;a=a.getAttribute(b);a=parseFloat(a);return isNaN(a)?1:0>a?0:1<a?1:a};var J=function(a,b,c){a=parseFloat(a.getAttribute(b));isFinite(a)||(a=c);return a};var K=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,K);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};B(K,Error);K.prototype.name="CustomError";var L=function(a,b){a=a.split("%s");for(var c="",f=a.length-1,e=0;e<f;e++)c+=a[e]+(e<b.length?b[e]:"%s");K.call(this,c+a[f])};B(L,K);L.prototype.name="AssertionError";var fa=function(a,b,c){if(!a){var f="Assertion failed";if(b){f+=": "+b;var e=Array.prototype.slice.call(arguments,2)}throw new L(""+f,e||[]);}return a},ha=function(a,b){throw new L("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var O=function(a,b){this.F=a===M&&b||"";this.O=N};O.prototype.A=!0;O.prototype.v=function(){return this.F.toString()};O.prototype.toString=function(){return"SafeUrl{"+this.F+"}"};var ia=function(a){if(a instanceof O&&a.constructor===O&&a.O===N)return a.F;ha("expected object of type SafeUrl, got '"+a+"' of type "+A(a));return"type_error:SafeUrl"},ja=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,N={},M={};var P=function(){this.D=""};P.prototype.A=!0;P.prototype.v=function(){return this.D};P.prototype.toString=function(){return"SafeStyle{"+this.D+"}"};P.prototype.B=function(a){this.D=a};(new P).B("");var Q=function(){this.C=""};Q.prototype.A=!0;Q.prototype.v=function(){return this.C};Q.prototype.toString=function(){return"SafeStyleSheet{"+this.C+"}"};Q.prototype.B=function(a){this.C=a};(new Q).B("");var R=function(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==a.getAttribute("is")},ka=function(a){if(R(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&R(a))return a;return null};var S=function(a,b,c){c=void 0===c?null:c;var f=document.createEvent("CustomEvent");f.initCustomEvent(a,!0,!0,c);b.dispatchEvent(f);return f};var la=[],T=function(){var a=HTMLElement.call(this)||this;a.s=[];a.L=null;a.l=null;a.i=[0,1];a.h=[];a.u=a.R.bind(a);a.G=!1;a.M=!1;a.N=a.U.bind(a);a.K=0;a.J=a.T.bind(a);a.I=a.S.bind(a);a.m=null;return a};w(T,HTMLElement);
T.prototype.connectedCallback=function(){this.ownerDocument.addEventListener("hostpagescroll",this.N);window.Enabler&&(Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_FINISH,this.J),Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_FINISH,this.I));if(!this.gwdIsLoaded()){var a=ka(this);a?a.gwdIsLoaded()&&this.gwdLoad():this.gwdLoad()}};
T.prototype.disconnectedCallback=function(){this.ownerDocument.removeEventListener("hostpagescroll",this.N);window.Enabler&&(Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_FINISH,this.J),Enabler.removeEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_FINISH,this.I));this.removeEventListener("ready",this.u,!1)};
T.prototype.gwdLoad=function(){if(!this.gwdIsLoaded()){this.h.length=0;this.initializeParallax(!0);for(var a=this.h.length-1;0<=a;a--)this.h[a].gwdLoad();this.h=this.h.filter(function(b){return!b.gwdIsLoaded()});0==this.h.length?U(this):this.addEventListener("ready",this.u,!1)}};T.prototype.gwdIsLoaded=function(){return this.G&&0==this.h.length};T.prototype.R=function(a){a=this.h.indexOf(a.target);0<=a&&(this.h.splice(a,1),0==this.h.length&&(U(this),this.removeEventListener("ready",this.u,!1)))};
var U=function(a){a.M||S("ready",a);a.M=!0;a.m&&(V(a,a.m.creativeFramePercentY,a.m.windowHeight+a.l),a.m=null)};
T.prototype.initializeParallax=function(a){var b=this;this.style.overflow="hidden";this.s.length=0;this.L=this.clientWidth;this.l=this.clientHeight;this.i=ma(this);for(var c=this.ownerDocument,f={},e=0;e<this.children.length;f={o:f.o},e++)if(!this.children[e].hasAttribute("data-gwd-csd-ghost-id")){var d=ea(this.children[e],this.L,this.l);this.s.push(d);d.element.style.position="absolute";d.element.style.left="0px";d.element.style.top="0px";d.element.style.width=d.width+"px";d.element.style.height=
d.height+"px";d.element.style.transform="translate("+d.f[0].x+"px, "+d.f[0].y+"px)";d.element.style.opacity=d.f[0].opacity+"";void 0!=d.f[0].j&&d.element.setTargetYaw(d.f[0].j);if(a){if("image"==d.P&&d.source){for(;d.element.firstChild;)d.element.removeChild(d.element.firstChild);var h=c.createElement("gwd-image");h.style.width="100%";h.style.height="100%";h.setAttribute("source",d.source);this.h.push(h);d.element.appendChild(h)}else d.element.gwdLoad&&this.h.push(d.element);d.H&&(f.o=d.H,d.element.addEventListener("click",
function(l){return function(){if(!S("layerclickexit",b,{url:l.o}).detail.handled){var g=l.o;g instanceof O||g instanceof O||(g="object"==typeof g&&g.A?g.v():String(g),fa(ja.test(g),"%s does not match the safe URL pattern",g)||(g="about:invalid#zClosurez"),g=new O(M,g));z.open(ia(g),"",void 0,void 0)}}}(f)))}}this.G=!0};T.prototype.U=function(a){a=a.detail;this.K=a.creativeFramePercentY;this.gwdIsLoaded()?V(this,a.creativeFramePercentY,a.windowHeight+this.l):this.m=a};
var V=function(a,b,c){for(var f=0;f<a.s.length;f++){var e=a.s[f],d=void 0,h=void 0;d=e.f.length-1;var l=a.i[0],g=a.i[a.i.length-1],p=e.f[0],q=e.f[e.f.length-1];if(e.f.length===a.i.length)for(h=0;h<d;h++)if(a.i[h]<=b&&b<=a.i[h+1]){l=a.i[h];g=a.i[h+1];p=e.f[h];q=e.f[h+1];break}e.fixed?(d=e.f[0].x,h=e.f[0].y+b*c):(d=I(p.x,q.x,e.easing,b,l,g),h=I(p.y,q.y,e.easing,b,l,g));var D=I(p.opacity,q.opacity,e.easing,b,l,g);e.element.style.transform="translate("+d+"px, "+h+"px)";e.element.style.opacity=D+"";e.f.some(function(E){return void 0===
E.j})||e.element.setTargetYaw(Math.round(I(p.j,q.j,e.easing,b,l,g)))}S("parallaxscrolled",a,{yscroll:b})},ma=function(a){var b=J(a,"start",0),c=J(a,"end",1);if(0>b||1<b||0>c||1<c||b>=c)b=0,c=1;a=J(a,"middle",-1);return a>=b&&a<=c?[b,a,c]:[b,c]};T.prototype.T=function(){var a=this;setTimeout(function(){a.initializeParallax(!1);V(a,1,window.innerHeight+a.l)},0)};T.prototype.S=function(){var a=this;setTimeout(function(){a.initializeParallax(!1);V(a,a.K,window.innerHeight+a.l)},0)};
y.Object.defineProperties(T,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return la}}});var W=function(){return T.call(this)||this};w(W,T);customElements.define("gwd-swirl",W);}).call(this);