(function(e){function n(n){for(var r,i,u=n[0],a=n[1],l=n[2],d=0,s=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&s.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);f&&f(n);while(s.length)s.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,u=1;u<t.length;u++){var a=t[u];0!==o[a]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},c=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var f=a;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},5448:function(e,n,t){"use strict";t("a0c0")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),o=t("1da1"),c=(t("96cf"),t("bc3a")),i=t.n(c),u=function(){var e=Object(r["f"])({online:!!navigator.onLine});return window.addEventListener("offline",(function(){return e.online=!1})),window.addEventListener("online",(function(){return e.online=!0})),e},a=Object(r["d"])("img",{src:"https://via.placeholder.com/400"},null,-1),l=Object(r["d"])("h1",null,"Dad Joke",-1),f=["disabled"],d={key:0},s={setup:function(e){var n=u(),t=Object(r["f"])({text:""}),c=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("https://icanhazdadjoke.com/",{headers:{Accept:"text/plain"}}).then((function(e){return e.data}));case 2:t.text=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c(),function(e,o){return Object(r["e"])(),Object(r["c"])("div",null,[a,l,Object(r["d"])("div",null,Object(r["g"])(Object(r["h"])(t).text),1),Object(r["d"])("button",{onClick:o[0]||(o[0]=function(){return Object(r["h"])(c)&&Object(r["h"])(c).apply(void 0,arguments)}),disabled:!Object(r["h"])(n).online},"Get New Joke",8,f),Object(r["h"])(n).online?Object(r["b"])("",!0):(Object(r["e"])(),Object(r["c"])("div",d," You Are offline! "))])}}};t("5448");const p=s;var b,h=p,v=t("9483"),g=function(e){alert("Hey new content"),e.postMessage({action:"skipWaiting"})};Object(v["a"])("".concat("","worker.js"),{ready:function(){console.log("ready")},registered:function(){console.log("registered")},cached:function(){console.log("cached")},updatefound:function(){},updated:function(e){g(e.waiting)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),navigator.serviceWorker.addEventListener("controllerchange",(function(){b||(window.location.reload(),b=!0)})),Object(r["a"])(h).mount("#app")},a0c0:function(e,n,t){}});