(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var e,g="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},k;if("function"==typeof Object.setPrototypeOf)k=Object.setPrototypeOf;else{var l;a:{var m={N:!0},n={};try{n.__proto__=m;l=n.N;break a}catch(a){}l=!1}k=l?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var p=k,q=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");},r=q(this);var t="abort canplay canplaythrough durationchange emptied ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u={".avi":1,".m4v":1,".mp4":1,".mpeg":1,".mpg":1,".ogg":1,".ogv":1,".qt":1,".webm":1,".wmv":1};var v=function(a,b){window.setTimeout(a,b)};var w=function(a,b,c){c=void 0===c?null:c;var d=document.createEvent("CustomEvent");d.initCustomEvent(a,!0,!0,c);b.dispatchEvent(d)},x=function(a,b){var c=function(d){a.removeEventListener("playing",c);b(d)};a.addEventListener("playing",c)};var y=function(){this.H=""};y.prototype.toString=function(){return"SafeStyle{"+this.H+"}"};y.prototype.l=function(a){this.H=a};(new y).l("");var z=function(){this.G=""};z.prototype.toString=function(){return"SafeStyleSheet{"+this.G+"}"};z.prototype.l=function(a){this.G=a};(new z).l("");var B=function(a){if(!a.gwdIsLoaded()){var b=A(a);b?b.gwdIsLoaded()&&a.gwdLoad():a.gwdLoad()}},C=function(a){if(!a.gwdIsActive()){var b=A(a);b?b.gwdIsActive()&&a.gwdActivate():a.gwdActivate()}},D=function(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==a.getAttribute("is")},A=function(a){if(D(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&D(a))return a;return null},E=function(a){for(var b=[];a;)b.unshift(a),a=a.parentNode;return b},F=function(a,b,c){a.hasAttribute(b)?(a=a.getAttribute(b),
c.setAttribute(b,a)):c.removeAttribute(b)};var G={K:"fullscreenchange",L:"mozfullscreenchange",M:"webkitfullscreenchange"},H={K:"fullscreenElement",L:"mozFullScreenElement",M:"webkitFullscreenElement"},I=function(a){for(var b,c=Object.keys(H),d=0;d<c.length&&(b=a[H[c[d]]],void 0===b);d++);return b||null},J=function(a){var b=document;this.j="has-fullscreen-gwd-video";this.b=b;this.g=a;this.A=this.R.bind(this)};
J.prototype.R=function(){var a=I(this.b);if(a)if(this.g==a){var b=this.b;for(a=this.g;a&&a!=b;a=a.parentNode)a.classList.add(this.j)}else if(a.classList.contains(this.j)){b=E(this.g);a=E(a);for(var c=0,d=b[0],f=a[0],h=null;d&&f&&d==f;)h=d,c++,d=b[c],f=a[c];K(this,h)}else K(this);else K(this)};var K=function(a,b){b=(void 0===b?null:b)||a.b;for(var c=a.g;c&&c!=b;c=c.parentNode)c.classList.remove(a.j)};
J.prototype.install=function(){for(var a=Object.keys(G),b=0;b<a.length;b++)this.b.addEventListener(G[a[b]],this.A)};var L=Object.keys(HTMLMediaElement.prototype).concat(Object.keys(HTMLVideoElement.prototype)).concat(["sources"]),M=function(){var a=HTMLElement.call(this)||this;a.a=a.ownerDocument.createElement("video");a.a.setAttribute("webkit-playsinline","");a.a.setAttribute("playsinline","");a.a.setAttribute("x-webkit-airplay","allow");a.w=function(b){w(b.type,a,b.detail)};a.J=a.O.bind(a);a.B=new J(a.a);a.c=!1;a.f=null;a.i=null;a.interactiveVideoComponents=[];a.P=function(){for(var b=0;b<a.interactiveVideoComponents.length;b++)a.interactiveVideoComponents[b].handleVideoTimeUpdate()};
a.I=function(){a.f||(a.f=window.setInterval(a.P,33))};a.h=function(){a.f&&(window.clearInterval(a.f),a.f=null)};a.F=null;a.D=null;a.u=function(){if(a.parentElement){var b=a.getBoundingClientRect();if(b.width!=a.F||b.height!=a.D)for(a.F=b.width,a.D=b.height,b=0;b<a.interactiveVideoComponents.length;b++)a.interactiveVideoComponents[b].resizeHandlerNeeded&&a.interactiveVideoComponents[b].resize()}};a.S=function(){a.i||(a.i=window.setInterval(a.u,250))};a.T=function(){a.i&&window.clearInterval(a.i)};
a.o=!1;a.m=!1;a.C=!1;a.v=1;a.s=!1;return a},N=HTMLElement;M.prototype=g(N.prototype);M.prototype.constructor=M;if(p)p(M,N);else for(var O in N)if("prototype"!=O)if(Object.defineProperties){var P=Object.getOwnPropertyDescriptor(N,O);P&&Object.defineProperty(M,O,P)}else M[O]=N[O];e=M.prototype;
e.connectedCallback=function(){var a=this;if(!this.C){for(var b=0;b<this.children.length;b++){var c=this.children[b];if(c.classList.contains("intermediate-element")){this.removeChild(c);break}}this.c=this.muted&&-1!=(window.navigator.userAgent||"").indexOf("Android");for(b=0;b<this.children.length;b++)if(c=this.children[b],c.classList.contains("intermediate-element")){this.removeChild(c);break}b=document.createElement("div");b.classList.add("intermediate-element");b.appendChild(this.a);this.appendChild(b);
this.C=!0}B(this);C(this);this.c&&x(this.a,function(){a.c&&(a.a.volume=0)});this.a.addEventListener("volumechange",this.J,!1);for(b=0;b<t.length;b++)this.a.addEventListener(t[b],this.w,!1);this.B.install();this.a.addEventListener("play",this.I,!1);this.a.addEventListener("pause",this.h,!1);this.a.addEventListener("ended",this.h,!1)};
e.disconnectedCallback=function(){for(var a=this.B,b=Object.keys(G),c=0;c<b.length;c++)a.b.removeEventListener(G[b[c]],a.A);b=I(a.b);a.g==b&&K(a);this.c&&(this.a.volume=1);this.a.removeEventListener("volumechange",this.J,!1);for(a=0;a<t.length;a++)this.a.removeEventListener(t[a],this.w,!1);this.h();this.a.removeEventListener("play",this.I,!1);this.a.removeEventListener("pause",this.h,!1);this.a.removeEventListener("ended",this.h,!1)};
e.setResizeObserver=function(){for(var a=!1,b=0;b<this.interactiveVideoComponents.length;b++)if(this.interactiveVideoComponents[b].resizeHandlerNeeded){a=!0;break}a?(this.S(),window.addEventListener("resize",this.u,!1)):(this.T(),window.removeEventListener("resize",this.u,!1))};
e.attributeChangedCallback=function(a){var b=this;if("sources"==a){if(this.o){var c=this.a.paused,d=this.muted;Q(this);this.a.load();v(function(){b.muted=d;c?b.pause():b.play()},0)}}else"muted"==a&&(this.a.muted=this.muted);F(this,a,this.a)};e.gwdActivate=function(){var a=this;this.autoplay&&this.a.paused&&v(function(){a.play()},200);this.m=!0};e.gwdDeactivate=function(){this.hasAttribute("resumable")||this.seek(0);this.pause();this.m=!1};e.gwdIsActive=function(){return this.m};
e.gwdLoad=function(){Q(this);this.o=!0;w("ready",this)};e.gwdIsLoaded=function(){return this.o};e.play=function(){this.a.play()};e.pause=function(){this.a.pause()};e.mute=function(){this.c&&(this.a.volume=1);this.c=!1;this.muted=!this.muted};e.replay=function(){this.seek(0);this.play()};e.seek=function(a){this.currentTime!=a&&(this.currentTime=a)};e.O=function(){0==this.s&&1==this.muted&&0==this.v&&(this.a.volume=1,this.muted=!1);this.v=this.a.volume;this.s=this.muted};
e.setVolume=function(a){this.muted=0<a?!1:!0;this.a.volume=a/100;this.v=this.a.volume;this.s=this.muted};e.setSources=function(a){this.setAttribute("sources",a)};
var Q=function(a){var b=a.getAttribute("sources");b=R(b);for(var c=a.a.children,d=c.length-1;0<=d;d--){var f=c[d];"source"==f.tagName.toLowerCase()&&a.a.removeChild(f)}for(c=0;c<b.length;c++)d=document.createElement("source"),f=b[c],f=f.trim(),f=window.Enabler?window.Enabler.getUrl(f):f,d.src=f,a.a.appendChild(d)},R=function(a){var b=[];if(!a)return b;a=a.split(",").map(function(S){return S.trim()});for(var c="",d=0;d<a.length;d++){var f=a[d];c+=f;var h=f.lastIndexOf(".");-1!=h?u[f.substring(h).toLowerCase()]?
(b.push(c),c=""):c+=",":c+=","}c&&b.push(c.substring(0,c.length-1));return b};
r.Object.defineProperties(M.prototype,{nativeElement:{configurable:!0,enumerable:!0,get:function(){return this.a}},autoplay:{configurable:!0,enumerable:!0,get:function(){return this.a.autoplay},set:function(a){a?this.setAttribute("autoplay",""):this.removeAttribute("autoplay")}},loop:{configurable:!0,enumerable:!0,get:function(){return this.a.loop},set:function(a){a?this.setAttribute("loop",""):this.removeAttribute("loop")}},muted:{configurable:!0,enumerable:!0,get:function(){return this.hasAttribute("muted")},
set:function(a){a?this.setAttribute("muted",""):this.removeAttribute("muted")}},controls:{configurable:!0,enumerable:!0,get:function(){return this.a.controls},set:function(a){a?this.setAttribute("controls",""):this.removeAttribute("controls")}},poster:{configurable:!0,enumerable:!0,get:function(){return this.a.poster},set:function(a){a?this.setAttribute("poster",a):this.removeAttribute("poster")}},paused:{configurable:!0,enumerable:!0,get:function(){return this.a.paused}},volume:{configurable:!0,
enumerable:!0,get:function(){return this.a.volume},set:function(a){this.a.volume=a}},currentTime:{configurable:!0,enumerable:!0,get:function(){return this.a.currentTime},set:function(a){this.a.currentTime=a}},duration:{configurable:!0,enumerable:!0,get:function(){return this.a.duration}},width:{configurable:!0,enumerable:!0,get:function(){return this.a.width},set:function(a){a&&(this.a.width=a)}},height:{configurable:!0,enumerable:!0,get:function(){return this.a.height},set:function(a){a&&(this.a.height=
a)}},videoWidth:{configurable:!0,enumerable:!0,get:function(){return this.a.videoWidth}},videoHeight:{configurable:!0,enumerable:!0,get:function(){return this.a.videoHeight}}});r.Object.defineProperties(M,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return L}}});customElements.define("gwd-video",M);}).call(this);