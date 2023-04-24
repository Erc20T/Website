"use strict";(()=>{var t,e,n=Object.create,r=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,u=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,s=(t=(t,e)=>{var n,r;n=t,r=function(){return function(){var t={686:function(t,e,n){n.d(e,{default:function(){return A}});var r=n(279),o=n.n(r),i=n(370),u=n.n(i),c=n(817),s=n.n(c);function a(t){try{return document.execCommand(t)}catch(t){return!1}}var l=function(t){var e=s()(t);return a("cut"),e},f=function(t,e){var n=function(t){var e="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[e?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(r,"px"),n.setAttribute("readonly",""),n.value=t,n}(t);e.container.appendChild(n);var r=s()(n);return a("copy"),n.remove(),r},d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";return"string"==typeof t?n=f(t,e):t instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null==t?void 0:t.type)?n=f(t.value,e):(n=s()(t),a("copy")),n};function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,r=t.container,o=t.target,i=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==o){if(!o||"object"!==p(o)||1!==o.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&o.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(o.hasAttribute("readonly")||o.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return i?d(i,{container:r}):o?"cut"===n?l(o):d(o,{container:r}):void 0};function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=w(t);if(e){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(t,e){return!e||"object"!==v(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function x(t,e){var n="data-clipboard-".concat(t);if(e.hasAttribute(n))return e.getAttribute(n)}var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(n,t);var e=g(n);function n(t,r){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(o=e.call(this)).resolveOptions(r),o.listenClick(t),o}return function(t,e,n){e&&b(t.prototype,e),n&&b(t,n)}(n,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===v(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=u()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=this.action(e)||"copy",r=y({action:n,container:this.container,target:this.target(e),text:this.text(e)});this.emit(r?"success":"error",{action:n,text:r,trigger:e,clearSelection:function(){e&&e.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return x("action",t)}},{key:"defaultTarget",value:function(t){var e=x("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return x("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return d(t,e)}},{key:"cut",value:function(t){return l(t)}},{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),n}(o())},828:function(t){if("undefined"!=typeof Element&&!Element.prototype.matches){var e=Element.prototype;e.matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},438:function(t,e,n){var r=n(828);function o(t,e,n,r,o){var u=i.apply(this,arguments);return t.addEventListener(n,u,o),{destroy:function(){t.removeEventListener(n,u,o)}}}function i(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}t.exports=function(t,e,n,r,i){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return o(t,e,n,r,i)})))}},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var r=n(879),o=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(r.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}(t,e,n);if(r.string(t))return function(t,e,n){return o(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(t){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(t),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,u=r.length;i<u;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}return n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n(686)}().default},"object"==typeof t&&"object"==typeof e?e.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof t?t.ClipboardJS=r():n.ClipboardJS=r()},()=>(e||t((e={exports:{}}).exports,e),e.exports)),a="fs-attributes",l="copyclip",f=()=>{},d=t=>{var e;let n;for(let r of t.childNodes)if(r instanceof HTMLElement&&r.childNodes.length?n=d(r):r.nodeType===Node.TEXT_NODE&&(null==(e=r.textContent)?void 0:e.trim())&&(n=r),n)break;return n},p=t=>null!=t;var y=`${a}-support`,v=t=>{let e=(e,n,r)=>{let o,i=t[e],{key:u,values:c}=i;if(!n)return`[${u}]`;let s=null==c?void 0:c[n];o="string"==typeof s?s:s(r&&"instanceIndex"in r?r.instanceIndex:void 0);let a=r&&"caseInsensitive"in r&&r.caseInsensitive?"i":"";if(null==r||!r.operator)return`[${u}="${o}"${a}]`;switch(r.operator){case"prefixed":return`[${u}^="${o}"${a}]`;case"suffixed":return`[${u}$="${o}"${a}]`;case"contains":return`[${u}*="${o}"${a}]`}};return[e,function(t,n){let r=e("element",t,n),o=(null==n?void 0:n.scope)||document;return null!=n&&n.all?[...o.querySelectorAll(r)]:o.querySelector(r)}]},b={preventLoad:{key:`${a}-preventload`},debugMode:{key:`${a}-debug`},src:{key:"src",values:{finsweet:"@finsweet/attributes"}},dev:{key:`${a}-dev`}},[m,g]=v(b),h=()=>{let t=w();if(window.fsAttributes&&!Array.isArray(window.fsAttributes))return void x(window.fsAttributes,t);let e={cms:{},push(...t){var e,n;for(let[r,o]of t)null==(n=null==(e=this[r])?void 0:e.loading)||n.then(o)},destroy(){var e,n;for(let r of t)null==(n=null==(e=window.fsAttributes[r])?void 0:e.destroy)||n.call(e)}};x(e,t),A(e),window.fsAttributes=e,window.FsAttributes=window.fsAttributes,(async()=>{let{fsAttributes:t,location:e}=window,{host:n,searchParams:r}=new URL(e.href);t.support||(t.support={});let{support:o}=t;if(!n.includes("webflow.io")||!r.has(y))return!1;if(o.import)return o.import;try{o.import=new Promise(((t,e)=>{let n=document.createElement("script");n.src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-support@1/support.js",n.onload=()=>t(!0),n.onerror=e,document.head.append(n)}))}catch(t){return!1}o.import})()},w=()=>{let t=m("src","finsweet",{operator:"contains"}),e=m("dev");return[...document.querySelectorAll(`script${t}, script${e}`)].reduce(((t,e)=>{var n;let r=e.getAttribute(b.dev.key)||(null==(n=e.src.match(/[\w-. ]+(?=(\.js)$)/))?void 0:n[0]);return r&&!t.includes(r)&&t.push(r),t}),[])},x=(t,e)=>{for(let n of e){if(t[n])continue;t[n]={};let e=t[n];e.loading=new Promise((t=>{e.resolve=n=>{t(n),delete e.resolve}}))}},A=t=>{let e=Array.isArray(window.fsAttributes)?window.fsAttributes:[];t.push(...e)},E=(t,e)=>{let n=t.getAttribute(e);return n?(t=>{let e=t.split("-"),n=parseInt(e[e.length-1]);if(!isNaN(n))return n})(n):void 0},S=`fs-${l}`,T={element:{key:`${S}-element`,values:{trigger:"click",target:(t=>e=>`${t}${e?`-${e}`:""}`)("copy-this"),sibling:"copy-sibling"}},text:{key:`${S}-text`},successMessage:{key:`${S}-message`},successDuration:{key:`${S}-duration`},successClass:{key:`${S}-active`}},[k,$]=v(T),L=`${S}_active`,j=((t,e,s)=>(s=null!=t?n(u(t)):{},((t,e,n,u)=>{if(e&&"object"==typeof e||"function"==typeof e)for(let s of i(e))!c.call(t,s)&&s!==n&&r(t,s,{get:()=>e[s],enumerable:!(u=o(e,s))||u.enumerable});return t})(!e&&t&&t.__esModule?s:r(s,"default",{value:t,enumerable:!0}),t)))(s(),1),O=({trigger:t,textToCopy:e,target:n,textNode:r,originalText:o,successMessage:i,successDuration:u,successClass:c})=>{let s=new j.default(t,{text:()=>e||(n?(t=>t instanceof HTMLInputElement||t instanceof HTMLSelectElement||t instanceof HTMLTextAreaElement)(n)?n.value:n.textContent||"":t.textContent||"")}),a=!1;return s.on("success",(e=>{e.clearSelection(),!a&&(a=!0,t.classList.add(c),r&&i&&(r.textContent=i),setTimeout((()=>{t.classList.remove(c),r&&(r.textContent=o||""),a=!1}),u))})),s},{element:{key:C},text:{key:M},successMessage:{key:P},successDuration:{key:N},successClass:{key:_}}=T;(({scriptAttributes:t,attributeKey:e,version:n,init:r})=>{var o;h(),(o=window.fsAttributes)[e]||(o[e]={});let{preventsLoad:i,attributes:u}=(t=>{let{currentScript:e}=document,n={};if(!e)return{attributes:n,preventsLoad:!1};let r={preventsLoad:"string"==typeof e.getAttribute(b.preventLoad.key),attributes:n};for(let n in t){let o=e.getAttribute(t[n]);r.attributes[n]=o}return r})(t),c=window.fsAttributes[e];c.version=n,c.init=r,i||(window.Webflow||(window.Webflow=[]),window.Webflow.push((()=>r(u))))})({init:async()=>{await(async(...t)=>{var e;let n=[];for(let r of t){let t=await(null==(e=window.fsAttributes[r])?void 0:e.loading);n.push(t)}return n})("cmsattribute");let t=$("trigger",{operator:"prefixed",all:!0}).map((t=>{var e;if(!(t instanceof HTMLElement))return;let n=t.getAttribute(M),r=t.getAttribute(P),o=+(t.getAttribute(N)||1e3),i=t.getAttribute(_)||L,u=E(t,C),c=(null==(e=t.parentElement)?void 0:e.querySelector(k("element","sibling",{operator:"prefixed"})))||$("target",{instanceIndex:u}),s=d(t),a=s?s.textContent:void 0;return O({trigger:t,target:c,textToCopy:n,originalText:a,textNode:s,successDuration:o,successMessage:r,successClass:i})})).filter(p);return function(t,e,n){var r;let o=window.fsAttributes[t];return o.destroy=n||f,null==(r=o.resolve)||r.call(o,e),e}(l,t,(()=>{for(let e of t)e.destroy()}))},version:"1.7.0",attributeKey:l})})();
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */