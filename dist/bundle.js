!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.ZooidUIModal=t(require("react")):e.ZooidUIModal=t(e.React)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(10)},function(e,t,n){var r,o;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===o)for(var a in r)i.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}var i={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(r=[],o=function(){return n}.apply(t,r),!(void 0!==o&&(e.exports=o)))}()},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t){function n(){}e.exports=n},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=p[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(u(r.parts[i],t));p[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],s=o[2],l=o[3],u={css:a,media:s,sourceMap:l};n[i]?n[i].parts.push(u):t.push(n[i]={id:i,parts:[u]})}return t}function i(e,t){var n=y(),r=x[x.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function u(e,t){var n,r,o;if(t.singleton){var i=g++;n=_||(_=s(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),r=c.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=d.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function c(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var p={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),y=h(function(){return document.head||document.getElementsByTagName("head")[0]}),_=null,g=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],l=p[s.id];l.refs--,i.push(l)}if(e){var u=o(e);r(u,t)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var f=0;f<l.parts.length;f++)l.parts[f]();delete p[l.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=r(o),a=n(3),s=(r(a),n(5)),l=r(s),u=n(15),f=r(u),d={children:s.PropTypes.node},c=function(e){var t=e.children,n=(0,i.default)("Dialog-actions",f.default.actions);return l.default.createElement("div",{className:n},t)};c.propTypes=d,t.default=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=r(o),a=n(3),s=(r(a),n(5)),l=r(s),u=n(16),f=r(u),d={children:s.PropTypes.node},c=function(e){var t=e.children,n=(0,i.default)("Dialog-actions",f.default.body);return l.default.createElement("div",{className:n},t)};c.propTypes=d,t.default=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=r(o),a=n(3),s=r(a),l=n(5),u=r(l),f=n(17),d=r(f),c={children:l.PropTypes.node,className:l.PropTypes.string,onCancel:l.PropTypes.func,show:l.PropTypes.bool},p={onCancel:s.default},h=function(e){var t=e.show,n=e.children,r=e.className;return t?u.default.createElement("div",{className:(0,i.default)("Dialog",d.default.Dialog,r)},u.default.createElement("div",{className:d.default.dialog},n)):null};h.propTypes=c,h.defaultProps=p,t.default=h},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=(r(o),n(3)),a=(r(i),n(5)),s=r(a),l=n(18),u=r(l),f={title:a.PropTypes.string,children:a.PropTypes.node},d=function(e){var t=e.children,n=e.title,r=n;return t&&(r=t),s.default.createElement("header",{className:u.default.header},r)};d.propTypes=f,t.default=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.DialogHeader=t.DialogBody=t.DialogActions=t.Dialog=void 0;var o=n(6),i=r(o),a=n(7),s=r(a),l=n(9),u=r(l),f=n(8),d=r(f);t.Dialog=d.default,t.DialogActions=i.default,t.DialogBody=s.default,t.DialogHeader=u.default},function(e,t,n){t=e.exports=n(2)(),t.push([e.id,".styles__actions___2xwGa{padding:12px 24px;display:flex;justify-content:flex-end}",""]),t.locals={actions:"styles__actions___2xwGa"}},function(e,t,n){t=e.exports=n(2)(),t.push([e.id,".styles__body___2YtUX{padding:12px 24px}",""]),t.locals={body:"styles__body___2YtUX"}},function(e,t,n){t=e.exports=n(2)(),t.push([e.id,".styles__Dialog___3Mw6F{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.5)}.styles__dialog___2ic_f{border:1px solid #14568f;border-radius:2px;margin:auto;max-width:500px;padding:12px 0;background:#fff}",""]),t.locals={Dialog:"styles__Dialog___3Mw6F",dialog:"styles__dialog___2ic_f"}},function(e,t,n){t=e.exports=n(2)(),t.push([e.id,".styles__header___2fn3R{padding:12px 24px;text-align:center;font-size:1.25em}",""]),t.locals={header:"styles__header___2fn3R"}},function(e,t,n){var r=n(11);"string"==typeof r&&(r=[[e.id,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(12);"string"==typeof r&&(r=[[e.id,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(13);"string"==typeof r&&(r=[[e.id,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(14);"string"==typeof r&&(r=[[e.id,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)}])});
//# sourceMappingURL=bundle.js.map