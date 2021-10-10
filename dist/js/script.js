"use strict";
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,j),(0,b.default)(w,j.once),w},_=function(){w=(0,h.default)(),O()},S=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},z=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},A=function(e){return j=i(j,e),w=(0,h.default)(),z(j.disable)||x?S():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0)}):document.addEventListener(j.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,f.default)(O,j.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(O,j.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,j.once)},j.throttleDelay)),j.disableMutationObserver||(0,d.default)("[data-aos]",_),w)};e.exports={init:A,refresh:O,refreshHard:_}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),_?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,z&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(_=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),_?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,z&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(_=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){var n=new r(o);a=t,n.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),o=t.concat(n).filter(function(e){return e.hasAttribute&&e.hasAttribute("data-aos")}).length;o&&a()})}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,a=function(){};t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});;
// jQuery Mask Plugin v1.14.16
// github.com/igorescobar/jQuery-Mask-Plugin
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,n,f){a instanceof String&&(a=String(a));for(var p=a.length,k=0;k<p;k++){var b=a[k];if(n.call(f,b,k,a))return{i:k,v:b}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,n,f){a!=Array.prototype&&a!=Object.prototype&&(a[n]=f.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,n,f,p){if(n){f=$jscomp.global;a=a.split(".");for(p=0;p<a.length-1;p++){var k=a[p];k in f||(f[k]={});f=f[k]}a=a[a.length-1];p=f[a];n=n(p);n!=p&&null!=n&&$jscomp.defineProperty(f,a,{configurable:!0,writable:!0,value:n})}};$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,f){return $jscomp.findInternal(this,a,f).v}},"es6","es3");
(function(a,n,f){"function"===typeof define&&define.amd?define(["jquery"],a):"object"===typeof exports&&"undefined"===typeof Meteor?module.exports=a(require("jquery")):a(n||f)})(function(a){var n=function(b,d,e){var c={invalid:[],getCaret:function(){try{var a=0,r=b.get(0),h=document.selection,d=r.selectionStart;if(h&&-1===navigator.appVersion.indexOf("MSIE 10")){var e=h.createRange();e.moveStart("character",-c.val().length);a=e.text.length}else if(d||"0"===d)a=d;return a}catch(C){}},setCaret:function(a){try{if(b.is(":focus")){var c=
b.get(0);if(c.setSelectionRange)c.setSelectionRange(a,a);else{var g=c.createTextRange();g.collapse(!0);g.moveEnd("character",a);g.moveStart("character",a);g.select()}}}catch(B){}},events:function(){b.on("keydown.mask",function(a){b.data("mask-keycode",a.keyCode||a.which);b.data("mask-previus-value",b.val());b.data("mask-previus-caret-pos",c.getCaret());c.maskDigitPosMapOld=c.maskDigitPosMap}).on(a.jMaskGlobals.useInput?"input.mask":"keyup.mask",c.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){b.keydown().keyup()},
100)}).on("change.mask",function(){b.data("changed",!0)}).on("blur.mask",function(){f===c.val()||b.data("changed")||b.trigger("change");b.data("changed",!1)}).on("blur.mask",function(){f=c.val()}).on("focus.mask",function(b){!0===e.selectOnFocus&&a(b.target).select()}).on("focusout.mask",function(){e.clearIfNotMatch&&!k.test(c.val())&&c.val("")})},getRegexMask:function(){for(var a=[],b,c,e,t,f=0;f<d.length;f++)(b=l.translation[d.charAt(f)])?(c=b.pattern.toString().replace(/.{1}$|^.{1}/g,""),e=b.optional,
(b=b.recursive)?(a.push(d.charAt(f)),t={digit:d.charAt(f),pattern:c}):a.push(e||b?c+"?":c)):a.push(d.charAt(f).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));a=a.join("");t&&(a=a.replace(new RegExp("("+t.digit+"(.*"+t.digit+")?)"),"($1)?").replace(new RegExp(t.digit,"g"),t.pattern));return new RegExp(a)},destroyEvents:function(){b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(a){var c=b.is("input")?"val":"text";if(0<arguments.length){if(b[c]()!==a)b[c](a);
c=b}else c=b[c]();return c},calculateCaretPosition:function(a){var d=c.getMasked(),h=c.getCaret();if(a!==d){var e=b.data("mask-previus-caret-pos")||0;d=d.length;var g=a.length,f=a=0,l=0,k=0,m;for(m=h;m<d&&c.maskDigitPosMap[m];m++)f++;for(m=h-1;0<=m&&c.maskDigitPosMap[m];m--)a++;for(m=h-1;0<=m;m--)c.maskDigitPosMap[m]&&l++;for(m=e-1;0<=m;m--)c.maskDigitPosMapOld[m]&&k++;h>g?h=10*d:e>=h&&e!==g?c.maskDigitPosMapOld[h]||(e=h,h=h-(k-l)-a,c.maskDigitPosMap[h]&&(h=e)):h>e&&(h=h+(l-k)+f)}return h},behaviour:function(d){d=
d||window.event;c.invalid=[];var e=b.data("mask-keycode");if(-1===a.inArray(e,l.byPassKeys)){e=c.getMasked();var h=c.getCaret(),g=b.data("mask-previus-value")||"";setTimeout(function(){c.setCaret(c.calculateCaretPosition(g))},a.jMaskGlobals.keyStrokeCompensation);c.val(e);c.setCaret(h);return c.callbacks(d)}},getMasked:function(a,b){var h=[],f=void 0===b?c.val():b+"",g=0,k=d.length,n=0,p=f.length,m=1,r="push",u=-1,w=0;b=[];if(e.reverse){r="unshift";m=-1;var x=0;g=k-1;n=p-1;var A=function(){return-1<
g&&-1<n}}else x=k-1,A=function(){return g<k&&n<p};for(var z;A();){var y=d.charAt(g),v=f.charAt(n),q=l.translation[y];if(q)v.match(q.pattern)?(h[r](v),q.recursive&&(-1===u?u=g:g===x&&g!==u&&(g=u-m),x===u&&(g-=m)),g+=m):v===z?(w--,z=void 0):q.optional?(g+=m,n-=m):q.fallback?(h[r](q.fallback),g+=m,n-=m):c.invalid.push({p:n,v:v,e:q.pattern}),n+=m;else{if(!a)h[r](y);v===y?(b.push(n),n+=m):(z=y,b.push(n+w),w++);g+=m}}a=d.charAt(x);k!==p+1||l.translation[a]||h.push(a);h=h.join("");c.mapMaskdigitPositions(h,
b,p);return h},mapMaskdigitPositions:function(a,b,d){a=e.reverse?a.length-d:0;c.maskDigitPosMap={};for(d=0;d<b.length;d++)c.maskDigitPosMap[b[d]+a]=1},callbacks:function(a){var g=c.val(),h=g!==f,k=[g,a,b,e],l=function(a,b,c){"function"===typeof e[a]&&b&&e[a].apply(this,c)};l("onChange",!0===h,k);l("onKeyPress",!0===h,k);l("onComplete",g.length===d.length,k);l("onInvalid",0<c.invalid.length,[g,a,b,c.invalid,e])}};b=a(b);var l=this,f=c.val(),k;d="function"===typeof d?d(c.val(),void 0,b,e):d;l.mask=
d;l.options=e;l.remove=function(){var a=c.getCaret();l.options.placeholder&&b.removeAttr("placeholder");b.data("mask-maxlength")&&b.removeAttr("maxlength");c.destroyEvents();c.val(l.getCleanVal());c.setCaret(a);return b};l.getCleanVal=function(){return c.getMasked(!0)};l.getMaskedVal=function(a){return c.getMasked(!1,a)};l.init=function(g){g=g||!1;e=e||{};l.clearIfNotMatch=a.jMaskGlobals.clearIfNotMatch;l.byPassKeys=a.jMaskGlobals.byPassKeys;l.translation=a.extend({},a.jMaskGlobals.translation,e.translation);
l=a.extend(!0,{},l,e);k=c.getRegexMask();if(g)c.events(),c.val(c.getMasked());else{e.placeholder&&b.attr("placeholder",e.placeholder);b.data("mask")&&b.attr("autocomplete","off");g=0;for(var f=!0;g<d.length;g++){var h=l.translation[d.charAt(g)];if(h&&h.recursive){f=!1;break}}f&&b.attr("maxlength",d.length).data("mask-maxlength",!0);c.destroyEvents();c.events();g=c.getCaret();c.val(c.getMasked());c.setCaret(g)}};l.init(!b.is("input"))};a.maskWatchers={};var f=function(){var b=a(this),d={},e=b.attr("data-mask");
b.attr("data-mask-reverse")&&(d.reverse=!0);b.attr("data-mask-clearifnotmatch")&&(d.clearIfNotMatch=!0);"true"===b.attr("data-mask-selectonfocus")&&(d.selectOnFocus=!0);if(p(b,e,d))return b.data("mask",new n(this,e,d))},p=function(b,d,e){e=e||{};var c=a(b).data("mask"),f=JSON.stringify;b=a(b).val()||a(b).text();try{return"function"===typeof d&&(d=d(b)),"object"!==typeof c||f(c.options)!==f(e)||c.mask!==d}catch(w){}},k=function(a){var b=document.createElement("div");a="on"+a;var e=a in b;e||(b.setAttribute(a,
"return;"),e="function"===typeof b[a]);return e};a.fn.mask=function(b,d){d=d||{};var e=this.selector,c=a.jMaskGlobals,f=c.watchInterval;c=d.watchInputs||c.watchInputs;var k=function(){if(p(this,b,d))return a(this).data("mask",new n(this,b,d))};a(this).each(k);e&&""!==e&&c&&(clearInterval(a.maskWatchers[e]),a.maskWatchers[e]=setInterval(function(){a(document).find(e).each(k)},f));return this};a.fn.masked=function(a){return this.data("mask").getMaskedVal(a)};a.fn.unmask=function(){clearInterval(a.maskWatchers[this.selector]);
delete a.maskWatchers[this.selector];return this.each(function(){var b=a(this).data("mask");b&&b.remove().removeData("mask")})};a.fn.cleanVal=function(){return this.data("mask").getCleanVal()};a.applyDataMask=function(b){b=b||a.jMaskGlobals.maskElements;(b instanceof a?b:a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(f)};k={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,keyStrokeCompensation:10,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&
k("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};a.jMaskGlobals=a.jMaskGlobals||{};k=a.jMaskGlobals=a.extend(!0,{},k,a.jMaskGlobals);k.dataMask&&a.applyDataMask();setInterval(function(){a.jMaskGlobals.watchDataMask&&a.applyDataMask()},k.watchInterval)},window.jQuery,window.Zepto);
;
$(document).ready(function () {
    // slide-menu
    (function () {
        const searchInputElem = $('.location-menu__search-inp');
        $('.header__burger-menu').on('click', () => {
            $('.header-menu').slideToggle();
        });
        $('.header__location').on('click', () => {
            $('.location-menu--main').slideToggle();
        });
        $('.fixed-menu__header-location').on('click', () => {
            $('.location-menu--fixed').slideToggle();
        });
        $('.js-show-cities').on('click', () => {
            $('.location-menu__lists').slideToggle();
        });
        $('.js-hide-location').on('click', () => {
            $('.location-menu__lists').hide();
            $('.location-menu').hide();
        });
        $('.location-menu__category-btn').on('click', function () {
            searchInputElem.val($(this).text())
        });
        $('.select-language').on('click', () => {
            if ($('.current-lang').text() === 'ENG') {
                $('.current-lang').text('RU')
            } else {
                $('.current-lang').text('ENG')
            }
        })
        const setElementForMobile = () => {
            const windowWidth = $(window).width();
            if (windowWidth <= 767) {
                $('.header__center').append($('.header__logo'));
                $('.header__right').append($('.header__burger-menu'));
            } else {
                $('.header__center').append($('.header__burger-menu'));
                $('.header__left').prepend($('.header__logo'));
            }
        }
        setElementForMobile()
        $(window).resize(() => {
            setElementForMobile();
        })
    })();
    // sliders
    (function () {
        const weatherSlider = new Swiper('.northern-lights__slider', {
            slidesPerView: 1,
        })
        const swiperCalendar = new Swiper('.playbill-events__calendar-slider', {
            slidesPerView: "auto",
            freeMode: true,
        })
        const swiperEvent = new Swiper('.playbill-events__slider--event', {
            slidesPerView: "auto",
            spaceBetween: 20,
        })
        const swiperBanners = new Swiper('.playbill-events__slider--banner', {
            slidesPerView: "auto",
            loop: true,
            spaceBetween: 20,
            speed: 1000,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                568: {
                    spaceBetween: 20,
                    pagination: false,
                }
            }
        });
        const swiperGoods = new Swiper('.goods-wrapper', {
            slidesPerView: "auto",
            spaceBetween: 20,
            breakpoints: {
                568: {
                    slidesPerView: 4,
                }
            }
        })

        const swiperGallery = new Swiper('.gallery__slider', {
            slidesPerView: "auto",
            spaceBetween: 20,
            createElements: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            breakpoints: {
                767: {
                    slidesPerView: 4,
                }
            }
        })
        $('.calendar-arrow__next').on('click', () => {
            swiperCalendar.slideNext();
        })
        $('.event-arrow__next').on('click', () => {
            swiperEvent.slideNext();
        })
        $('.banner-arrow__next').on('click', () => {
            swiperBanners.slideNext();
        })
        $('.banner-arrow__prev').on('click', () => {
            swiperBanners.slidePrev();
        })
        $('.goods-arrow__next').on('click', () => {
            swiperGoods.slideNext();
        })
        $('.gallery-arrow__next').on('click', () => {
            swiperGallery.slideNext();
        })
        $('.gallery-arrow__prev').on('click', () => {
            swiperGallery.slidePrev();
        })
        $('.northern-lights-arrow__prev').on('click', () => {
            weatherSlider.slidePrev();
        })
        $('.northern-lights-arrow__next').on('click', () => {
            weatherSlider.slideNext();
        })
    })();
    // adaptive hide
    (function () {
        const adaptivePosBlock = () => {
            const windowWidth = $(window).width();
            const parentWidth = $('.quiz-individual').width();
            const childWidth = $('.quiz-individual__wrapper').width();
            let posBlock = (childWidth - parentWidth) / 3;
            if (posBlock > 0 && windowWidth > 568) {
                $('.quiz-individual__wrapper').css({
                    "right": `${posBlock}px`
                })
            }
        }
        adaptivePosBlock();
        $(window).resize(() => {
            adaptivePosBlock();
        })
    })();
    // playbill
    (function () {
        $('.playbill-category').on('click', function () {
            $(this).addClass('current').siblings().removeClass('current')
        })
    })();
    // fixed-menu
    (function () {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() >= $(this).height()) {
                $('.fixed-menu').addClass('show-leftMenu')
            } else {
                $('.fixed-menu').removeClass('show-leftMenu')
            }
        })
        $('.fixed-menu').on('mouseenter', function () {
            $(this).addClass('show')
        });
        $('.fixed-menu').on('mouseleave', function () {
            $(this).removeClass('show')
        });
        $('.fixed-menu__close').on('click', () => {
            $('.fixed-menu').removeClass('show');
            $('.fixed-menu__menu-block').removeClass('active');
        })
        $('.js-show-menu').on('click', (e) => {
            $('.js-show-menu').toggleClass('current')
            $('.fixed-menu').toggleClass('menu-isOpen')
            $('.fixed-menu').removeClass('show')
            $('.fixed-menu__menu-block').toggleClass('active');
        });
    })();
    // parallax
    (function () {
        AOS.init({
            easing: 'ease-out-back',
        });
        var rellax = new Rellax('.rellax', {
            center: true,
        });
    })();
    // scroll
    (function () {
        $('.playbill__categoryes').mCustomScrollbar({
            axis: "x",
        }); $('.photos__wrapper--scroll').mCustomScrollbar({
            axis: "x",
        }); $('.catalog-choose__categories').mCustomScrollbar({
            axis: "x",
        });
        $('.fixed-pay').mCustomScrollbar({
            axis: "y",
        });
    })();
    // select-city
    (function () {
        const openSelect = function () {
            if ($(this).hasClass('disabled')) {
                return false
            }
            $(this).toggleClass('active')
            $(this).next().slideToggle();

            $('.custom-select__categoryes').mCustomScrollbar({
                axis: "y",
            });
            $('.custom-select__category__elem .control').on('click', function () {
                let text = $(this).text()
                if ($(this).parents('.enter-banner__input')) {
                    $(this).parents('.enter-banner__input').addClass('show-title')
                }
                $(this).parents('.custom-select').find('.custom-select__current-elem').text(text)
                $(this).parents('.custom-select').addClass('filed')
                $(this).parents('.custom-select').removeClass('error')
                $('.custom-select__header').removeClass('active');
                $('.custom-select__body').hide();
            })

        }
        $('.custom-select__header').on('click', openSelect)
    })();
    // quiz
    (function () {
        let count = 0;
        const anketa = [
            {
                question: "Культура и история",
                answer: ['Не интересует', 'Могу уделить немного времени', 'Очень интересует', 'Хочу полностью погрузиться']
            },
            {
                question: "Природа и приключения",
                answer: ['Стараюсь избегать', 'Только популярные места', 'Очень интересует', 'Я - авантюрист']
            },
            {
                question: "Культура и история",
                answer: ['Не люблю делать покупки', 'Если будет свободное время', 'Остановлюсь на магнитиках', 'Хочу купить подарки']
            },
            {
                question: "Культура и история",
                answer: ['Не хочу пробовать новые блюда', 'Не против экспериментов', 'Присоединюсь к мастер-классам', 'Хочу погрузиться в местную кухню']
            },
        ];
        const renderQuestions = (count) => {
            const quizInnerBlock = document.querySelector('.quiz__questions-block');
            if (quizInnerBlock) {
                quizInnerBlock.innerHTML = `
            <div class="questions-block__title">${anketa[count].question}</div>
                <div class="questions-block__wrapper">
                    <button type="button" class="questions-block__answer btn" data-value="${anketa[count].answer[0]}">
                    <svg class="">
                    <use xlink:href="./img/icons/icons.svg#emoji-happy"></use>
                </svg>
                        <span>${anketa[count].answer[0]}</span>
                    </button>
                    <button type="button" class="questions-block__answer btn" data-value="${anketa[count].answer[1]}">
                    <svg class="">
                    <use xlink:href="./img/icons/icons.svg#emoji-normal"></use>
                </svg>
                        <span>${anketa[count].answer[1]}</span>
                    </button>
                    <button type="button" class="questions-block__answer btn" data-value="${anketa[count].answer[2]}">
                    <svg class="">
                    <use xlink:href="./img/icons/icons.svg#emoji-normal-1"></use>
                </svg>
                        <span>${anketa[count].answer[2]}</span>
                    </button>
                    <button type="button" class="questions-block__answer btn" data-value="${anketa[count].answer[3]}">
                    <svg class="">
                    <use xlink:href="./img/icons/icons.svg#emoji-medium"></use>
                </svg>
                        <span>${anketa[count].answer[3]}</span>
                    </button>
                </div>
                <div class="questions-block__dott"></div>
            `}

            $('.questions-block__answer').on('click', function () {
                $('.quiz-routes__progress-item').eq(count).addClass('past')
                if (count != 3) {
                    count++;
                    renderQuestions(count)
                } else if (count === 3) {
                    $('.quiz-routes__progress-item').eq(4).addClass('active')
                }

                $('.quiz-routes__progress-item').eq(count).addClass('active')
            })
        }
        renderQuestions(count)
        $('.btn-return').on('click', function () {
            count = $(this).attr('data-count')
            const parent = $(this).parents('.quiz-routes__progress-item')
            parent.nextAll().removeClass('active past')
            renderQuestions(count)
        })
    })();
    // filter
    (function () {
        const filterBtnTransform = () => {
            const windowWidth = $(window).width();
            if (windowWidth <= 992) {
                $('.catalog__header-settings').append($('.catalog-filter__btn'))
            } else {
                $('.catalog-filter').append($('.catalog-filter__btn'))
            }
        };
        filterBtnTransform()
        $(window).resize(() => {
            filterBtnTransform()
        });
        $('.filter-item__header').on('click', function () {
            $(this).toggleClass('active');
            $(this).next().slideToggle();
            $('.custom-select__categoryes').mCustomScrollbar({
                axis: "y",
            });
        })
        $('.js-open-filter').on('click', function () {
            $('.fixed-filter').addClass('show')
        });
        $('.fixed-filter__close').on('click', function () {
            $('.fixed-filter').removeClass('show')
            $('.fixed-pay').removeClass('show')
        })
        $('.js-open-pay').on('click', function () {
            $('.fixed-pay').addClass('show')
        });
    })();
    // catalog
    (function () {
        $('.card-item__price').each((index, el) => {
            let countGreenElem = +el.getAttribute('data-price');
            switch (countGreenElem) {
                case 1:
                    for (let i = 0; i <= countGreenElem - 1; i++) {
                        el.children[i].style.color = 'green';
                    }
                    break
                case 2:
                    for (let i = 0; i <= countGreenElem - 1; i++) {
                        el.children[i].style.color = 'green';
                    }
                    break
                case 3:
                    for (let i = 0; i <= countGreenElem - 1; i++) {
                        el.children[i].style.color = 'green';
                    }
                    break
                case 4:
                    for (let i = 0; i <= countGreenElem - 1; i++) {
                        el.children[i].style.color = 'green';
                    }
                    break
                case 5:
                    for (let i = 0; i <= countGreenElem - 1; i++) {
                        el.children[i].style.color = 'green';
                    }
                    break
            }

        })
    })();
    // questions
    (function () {
        $('.questions-item__header').on('click', function () {
            $(this).toggleClass('active');
            $(this).next().slideToggle();
        })
    })();
    // card-product
    (function () {
        const showBlock = (auth, stat) => {
            $('.new-review__block--default').hide()
            if (auth === 'auth') {
                $('.new-review__block--auth').show()
            } else if (auth === 'noAuth') {
                $('.new-review__block--noAuth').show()
            } else if (auth === 'old') {
                $('.new-review__block--old').show()
            }
            if (stat === 'positive') {
                $('.new-review__input-icon').addClass('like')
            } else if (stat === 'negative') {
                $('.new-review__input-icon').addClass('dislike')
            }
        };
        $('.btn-positive').on('click', function () {
            let authStat = $(this).parents('.product-review__new-review').attr('data-auth');
            let statLike = $(this).attr('data-status')
            showBlock(authStat, statLike)
        });
        $('.btn-negative').on('click', function () {
            let authStat = $(this).parents('.product-review__new-review').attr('data-auth');
            let statLike = $(this).attr('data-status')
            showBlock(authStat, statLike)
        });
        $('.card-photos__slide').on('click', function () {
            let urlActivePhoto = $(this).children().attr('src');
            const changeBigPhoto = src => {
                $('.card-photos__big-photo img').attr('src', urlActivePhoto)
            }
            changeBigPhoto(urlActivePhoto)
            $(this).addClass('active').siblings().removeClass('active')
        })
        const swiperCardPhotos = new Swiper('.card-photos__slider', {
            slidesPerView: "auto",
            spaceBetween: 24,
            breakpoints: {
                768: {
                    slidesPerView: 4,
                    spaceBetween: 32,
                }
            }
        })
        $('.card-photos-arrow__prev').on('click', () => {
            swiperCardPhotos.slidePrev();
        })
        $('.card-photos-arrow__next').on('click', () => {
            swiperCardPhotos.slideNext();
        })
        const transformPhoto = () => {
            let windowWidth = $(document).width();
            if (windowWidth <= 1200) {
                $('.product-card__header').after($('.product-card__right'))
            } else { $('.product-card__left').after($('.product-card__right')) }
        }
        $(window).resize(() => {
            transformPhoto()
        });
        transformPhoto();
    })();
    // popups
    (function () {
        const showPopup = el => {
            $('.popups').show();
            $('body').addClass('overlay');
            $(el).addClass('show');
        };
        const showNotify = el => {
            $(el).addClass('show');
        }
        const closeNotify = el => {
            $('.notification').removeClass('show');
        }
        const closeModal = () => {
            $('.popup').removeClass('show');
            $('.popups').hide();
            $('body').removeClass('overlay');
        }
        $('.personal-review__delete').on('click', function () {
            let el = $(this).attr('data-popup')
            showPopup(el)
        })
        $('.js-close').on('click', function () {
            closeModal();
            closeNotify();
            $('.fixed-filter').removeClass('show')
        });
        $('.popup__btn-delete').on('click', function () {
            let el = $(this).attr('data-popup')
            showNotify(el);
            $(this).parents('.popup').removeClass('show');
            $('body').removeClass('overlay');
            closeModal()
            setTimeout(closeNotify, 3000)
        })
        $('.btn-add-rewiew').on('click', function () {
            let el = $(this).attr('data-popup')
            showNotify(el);
            closeModal()
            setTimeout(closeNotify, 3000)
        })
        $('#add-acc-btn').on('click', function () {
            let el = $(this).attr('data-popup')
            showNotify(el);
            closeModal()
            $('#add-way-acc').addClass('disabled')
            setTimeout(closeNotify, 3000)
        })
        $('#add-way-acc').on('click', function () {
            let el = $(this).attr('data-popup')
            showNotify(el);
            closeModal()
            $('#add-way-acc').addClass('disabled')
            setTimeout(closeNotify, 3000)
        })
        $('.add-to-favorite').on('click', function () {
            let status = $(this).attr('data-status');
            let el = $(this).attr('data-popup');
            if (status === 'auth') {
                $(this).addClass('active');
            } else if (status === 'noAuth') {
                showPopup(el);
            }
        })
        $('.btn-end').on('click', function () {
            let el = $(this).attr('data-popup');
            showPopup(el);
        })
        $('.popup__btn-sms').on('click', function () {
            let el = $(this).attr('data-popup');
            showPopup(el);
        })
        $('#get-sms-way').on('click', function () {
            let el = $(this).attr('data-popup');
            showPopup(el);
        })
        $('#fixed-pay__submit').on('click', function (e) {
            e.preventDefault()
            if ($('#fixed-pay__form').valid()) {
                let el = $(this).attr('data-popup');
                showPopup(el);
                $('.price-block__btn').addClass('disabled')
                $('.price-block__btn').text('Оплачено')
            }
        })
    })();
    // showMore
    (function () {
        const dataRevew = [{
            name: 'Anon',
            date: '12-05-2021',
            text: `Имеется спорная точка зрения, гласящая примерно
            следующее: независимые государства представляют собой не что иное, как
            квинтэссенцию победы маркетинга над разумом и должны быть превращены в
            посмешище, хотя само их существование приносит несомненную пользу обществу. В
            целом, конечно, внедрение современных методик обеспечивает актуальность форм
            воздействия.`,
        },
        {
            name: 'User',
            date: '12-05-2021',
            text: `Имеется спорная точка зрения, гласящая примерно
            следующее: независимые государства представляют собой не что иное, как
            квинтэссенцию победы маркетинга над разумом и должны быть превращены в
            посмешище, хотя само их существование приносит несомненную пользу обществу. В
            целом, конечно, внедрение современных методик обеспечивает актуальность форм
            воздействия.`,
        },
        {
            name: 'Person',
            date: '12-05-2021',
            text: `Имеется спорная точка зрения, гласящая примерно
            следующее: независимые государства представляют собой не что иное, как
            квинтэссенцию победы маркетинга над разумом и должны быть превращены в
            посмешище, хотя само их существование приносит несомненную пользу обществу. В
            целом, конечно, внедрение современных методик обеспечивает актуальность форм
            воздействия.`,
        }]
        const renderMoreReviews = function ([...dataRevew]) {
            dataRevew.forEach(el => {
                const review = document.createElement('div');
                review.className = 'all-reviews__item personal-review';
                review.innerHTML = `
                <div class="personal-review__header">
                <div class="personal-review__left">
                    <div class="personal-review__status personal-review__status--like">
                        <svg class="">
                            <use xlink:href="./img/icons/icons.svg#like"></use>
                        </svg>
                    </div>
                    <div class="personal-review__person">
                        <div class="personal-review__name">${el.name}</div>
                        <div class="personal-review__date">${el.date}</div>
                    </div>
                </div>
            </div>
            <div class="personal-review__body">
                <p class="personal-review__text">${el.text}</p>
            </div>
                `;
                $('.all-reviews__show-more').before(review);
            })

        }
        $('.all-reviews__show-more').on('click', function () {
            renderMoreReviews(dataRevew)
        })
    })();
    // calendar
    (function () {
        $(function () {
            console.log(daterangepicker.locale);
            $('input[name="daterange"]').daterangepicker({
                opens: 'right',
                autoUpdateInput: false,
                // showWeekNumbers: false,
                // showISOWeekNumbers: false,
                autoApply: true,
                locale: {
                    format: 'DD.M',
                    cancelLabel: 'Clear',
                    daysOfWeek: false,
                    "monthNames": [
                        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
                    ],
                    "daysOfWeek": [
                    ],
                },

            },
                function (start, end, label) {
                    $('input[name="daterange"]').addClass('filed')
                });
        });
        $('input[name="daterange"]').on('apply.daterangepicker', function (ev, picker) {
            $(this).val(picker.startDate.format('DD.M') + ' - ' + picker.endDate.format('DD.M'));
            $(this).parent().addClass('filed')
            $(this).parent().removeClass('error')
            $(this).parents('.enter-banner__input').addClass('show-title')
            console.log();
        });

        $('input[name="daterange"]').on('cancel.daterangepicker', function (ev, picker) {
            $(this).val('');
        });
    })();

    // google map init and stylized 
    // steps planning way  
    (function () {
        let stepCount = 0;
        // maps sеtting

        const firstMap = function () {
            let myLatlng
            let flightPathCoordinates = [];
            let oldCordinates = [];
            let flightPath;
            let map;
            let markers = [];
            let fromMarker = [];
            let startMarkerst = [
                {
                    position: new google.maps.LatLng(66.86305851932107, 70.8545548132817),
                    map: map,
                    title: 'Яр-Сале',
                    icon: {
                        url: "img/icon/marker-sound.svg",
                        scaledSize: new google.maps.Size(39.69, 39.69)
                    },
                    label: {
                        text: "Яр-Сале",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
                {
                    position: new google.maps.LatLng(67.46201765996048, 78.70893018336228),
                    map: map,
                    title: 'Тазовский',
                    icon: {
                        url: "img/icon/marker-sound.svg",
                        scaledSize: new google.maps.Size(39.69, 39.69)
                    },
                    label: {
                        text: "Тазовский",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
                {
                    position: new google.maps.LatLng(66.55047769194653, 66.59826008447075),
                    map: map,
                    title: 'Салехард',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Салехард",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
                {
                    position: new google.maps.LatLng(66.09653540676248, 76.65587017293807),
                    map: map,
                    title: 'Новый Уренгой',
                    icon: {
                        url: "img/icon/marker-sound.svg",
                        scaledSize: new google.maps.Size(39.69, 39.69)
                    },
                    label: {
                        text: "Новый Уренгой",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
                {
                    position: new google.maps.LatLng(65.53514113422678, 72.50449449743208),
                    map: map,
                    title: 'Надым',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Надым",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
                {
                    position: new google.maps.LatLng(68.41641830907557, 73.12853422144906),
                    map: map,
                    title: 'Сабетта',
                    icon: {
                        url: "img/icon/marker-sound.svg",
                        scaledSize: new google.maps.Size(39.69, 39.69)
                    },
                    label: {
                        text: "Сабетта",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
            ];
            let lightMarkers = [
                {
                    position: new google.maps.LatLng(66.86305851932107, 70.8545548132817),
                    map: map,
                    title: 'Яр-Сале',
                    icon: {
                        url: "img/icon/sound-marker.svg",
                        scaledSize: new google.maps.Size(14, 14)
                    },
                    label: {
                        text: "",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "0px",
                        className: "hide"
                    }
                },
                {
                    position: new google.maps.LatLng(67.46201765996048, 78.70893018336228),
                    map: map,
                    title: 'Тазовский',
                    icon: {
                        url: "img/icon/sound-marker.svg",
                        scaledSize: new google.maps.Size(14, 14)
                    },
                    label: {
                        text: "",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "0px",
                        className: "hide"
                    }
                },

                {
                    position: new google.maps.LatLng(66.09653540676248, 76.65587017293807),
                    map: map,
                    title: 'Новый Уренгой',
                    icon: {
                        url: "img/icon/sound-marker.svg",
                        scaledSize: new google.maps.Size(14, 14)
                    },
                    label: {
                        text: "",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "0px",
                        className: "hide"
                    }
                },
                {
                    position: new google.maps.LatLng(68.41641830907557, 73.12853422144906),
                    map: map,
                    title: 'Новый Уренгой',
                    icon: {
                        url: "img/icon/sound-marker.svg",
                        scaledSize: new google.maps.Size(14, 14)
                    },
                    label: {
                        text: "",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "0px",
                        className: "hide"
                    }
                },
            ];
            let cityMarkersFrom = [
                {
                    position: new google.maps.LatLng(55.7526903859156, 37.62987442234599),
                    map: map,
                    title: 'Москва',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Москва",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
                {
                    position: new google.maps.LatLng(61.36087770604348, 31.326917871606124),
                    map: map,
                    title: 'Санкт-Петербург',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Санкт-Петербург",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
                {
                    position: new google.maps.LatLng(45.03590893134328, 38.97089281611214),
                    map: map,
                    title: 'Краснодар',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Краснодар",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
            ];
            const lineSymbol = {
                path: "M 0,-1 0,1",
                strokeOpacity: 1,
                scale: 1,
                strokeWeight: 2,
                strokeColor: "#213A8F",
            };
            // Создаем маркеры в markers
            function addMarker(position, map, title, icon, label) {
                const marker = new google.maps.Marker({
                    position,
                    map,
                    title,
                    icon,
                    label,
                });
                markers.push(marker);
            }
            // отдельный массив для городов России
            function addMarkerFrom(position, map, title, icon, label) {
                const marker = new google.maps.Marker({
                    position,
                    map,
                    title,
                    icon,
                    label,
                });
                fromMarker.push(marker);
            }
            function createStartMass() {
                startMarkerst.forEach(el => {
                    addMarker(el.position, el.map, el.title, el.icon, el.label)
                })
            }
            createStartMass();

            // Sets the map on all markers in the array.
            function setMapOnAll(map) {
                for (let i = 0; i < markers.length; i++) {
                    markers[i].setMap(map);
                }
                for (let i = 0; i < fromMarker.length; i++) {
                    fromMarker[i].setMap(map);
                }
            }
            // createCoordinates
            function createCoordinates(marker1, marker2) {
                flightPathCoordinates = [];
                flightPathCoordinates.push(marker1, marker2)
                // let startPoint = {}
                flightPath = new google.maps.Polyline({
                    path: flightPathCoordinates,
                    strokeOpacity: 0,
                    icons: [
                        {
                            icon: lineSymbol,
                            offset: "0",
                            repeat: "6px",
                        },
                    ]
                })
                oldCordinates.push(flightPath)
            }
            // отфильровать массивы, чтобы получить 2 города
            function filterMarkers(name) {
                markers = markers.filter(el => name === el.title)
            }
            // добавить линию
            function addLine() {
                flightPath.setMap(map);
            }
            // убрать линию
            function removeLine() {
                oldCordinates.forEach(el => {
                    el.setMap(null);
                })
            }
            // Removes the markers from the map, but keeps them in the array.
            function hideMarkers() {
                for (let i = 0; i < markers.length; i++) {
                    markers[i].setMap(null);
                }
                for (let i = 0; i < fromMarker.length; i++) {
                    fromMarker[i].setMap(null);
                }
            }
            // Shows any markers currently in the array.
            function showMarkers() {
                setMapOnAll(map);
            }
            // add cityFrom
            const inputsCityFrom = $('.choosen-radio-from');
            const inputsCityTo = $('.choosen-radio-to');
            // add distance block
            function createDistanceBlock(distance) {
                return new google.maps.InfoWindow({
                    content: distance
                })
            }
            function initialize() {
                myLatlng = new google.maps.LatLng(67.01156439141535, 73.95476052039851);

                var mapOptions = {
                    zoom: 5,
                    center: myLatlng,
                    mapTypeControl: false,
                    overviewMapControl: false,
                    panControl: false,
                    zoomControl: false,
                    streetViewControl: false,
                    keyboardShortcuts: false,
                    styles: [
                        {
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f2f2f2"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.land_parcel",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#bdbdbd"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#eeeeee"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e5e5e5"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#dadada"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.line",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e5e5e5"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.station",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#eeeeee"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#cad2d4"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#bdbdbd"
                                }
                            ]
                        }
                    ]
                };
                map = new google.maps.Map(document.getElementById('map'), mapOptions);

                setMapOnAll(map)

                function createWayOnMap() {
                    let name = $('#city-to-value').text().trim()
                    hideMarkers()
                    createStartMass()
                    filterMarkers(name);
                    createDistanceBlock("2165 км").open(map, markers[0])
                    createCoordinates(fromMarker[0].position, markers[0].position);
                    removeLine()
                    setTimeout(addLine, 100);
                    showMarkers()
                }
                $('#add-light-map').on('click', function () {
                    hideMarkers()
                    markers = []
                    $(this).toggleClass('active')
                    if ($(this).hasClass('active')) {
                        lightMarkers.forEach(el => {
                            addMarker(el.position, el.map, el.title, el.icon, el.label)
                        })
                    } else {
                        startMarkerst.forEach(el => {
                            addMarker(el.position, el.map, el.title, el.icon, el.label)
                        })
                    }
                    markers.forEach(el => {
                        el.addListener('click', function (e) {
                            let val = this.title;
                            $('#city-to-value').text(val);
                            $('.enter-banner__where').addClass('filed')
                            if ($('.enter-banner__from ').hasClass('filed') && $('.enter-banner__where').hasClass('filed')) {
                                createWayOnMap()
                            }

                        })
                    })
                    setMapOnAll(map)
                })
                inputsCityFrom.on('change', function () {
                    for (let i = 0; i < fromMarker.length; i++) {
                        fromMarker[i].setMap(null);
                    }
                    fromMarker = [];
                    let i = +$(this).val();
                    addMarkerFrom(cityMarkersFrom[i].position, cityMarkersFrom[i].map, cityMarkersFrom[i].title, cityMarkersFrom[i].icon, cityMarkersFrom[i].label);
                })
                inputsCityFrom.on('change', function () {
                    if ($('.enter-banner__from ').hasClass('filed') && $('.enter-banner__where').hasClass('filed')) {
                        createWayOnMap()
                    }
                });
                inputsCityTo.on('change', function () {
                    if ($('.enter-banner__from').hasClass('filed') && $('.enter-banner__where').hasClass('filed')) {
                        createWayOnMap()
                    }
                })
                markers.forEach(el => {
                    el.addListener('click', function (e) {
                        let val = this.title;
                        $('#city-to-value').text(val);
                        $('.enter-banner__where').addClass('filed')
                        if ($('.enter-banner__from ').hasClass('filed') && $('.enter-banner__where').hasClass('filed')) {
                            createWayOnMap()
                        }

                    })
                })
            }

            google.maps.event.addDomListener(window, 'load', initialize);
        }

        firstMap()

        const secondMap = function () {
            const lineSymbol = {
                path: "M 0,-1 0,1",
                strokeOpacity: 1,
                scale: 1,
                strokeWeight: 2,
                strokeColor: "#213A8F",
            };
            let myLatlng
            let flightPathCoordinates = [];
            let oldCordinates = [];
            let flightPath;
            let map1;
            let allCordinates1 = [
                [
                    { lat: 66.53256677261557, lng: 66.61196913935893 },
                    { lat: 66.52692261179189, lng: 66.59257347430562 },
                    { lat: 66.53797994510903, lng: 66.59587795576483 },
                    { lat: 66.53551938734692, lng: 66.61205704031188 },
                ],
                [
                    { lat: 66.52640978771203, lng: 66.60338814095442 },
                    { lat: 66.524683202413, lng: 66.59579212514542 },
                    { lat: 66.52692261179189, lng: 66.59257347430562 },
                    { lat: 66.53797994510903, lng: 66.59587795576483 },
                ],
                [
                    { lat: 66.53256677261557, lng: 66.61196913935893 },
                    { lat: 66.524683202413, lng: 66.59579212514542 },
                    { lat: 66.52692261179189, lng: 66.59257347430562 },
                    { lat: 66.524683202413, lng: 66.59579212514542 },
                ],
            ];
            let markers = [];
            let startMarkerst = [

                {
                    position: new google.maps.LatLng(66.54008719373186, 66.59395247904227),
                    map: map,
                    map: map1,
                    title: 'Центр города',
                    icon: {
                        url: "img/icon/center-btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "0",
                        className: "map-label"
                    }
                },
                {
                    position: new google.maps.LatLng(66.53256677261557, 66.61196913935893),
                    map: map,
                    map: map1,
                    title: 'Хостел «Хмель и Соль»',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Хостел «Хмель и Соль»",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
                {
                    position: new google.maps.LatLng(66.52692261179189, 66.59257347430562),
                    map: map,
                    title: 'Хостел «Хмель и Соль»',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Тазовский",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
                {
                    position: new google.maps.LatLng(66.53797994510903, 66.59587795576483),
                    map: map,
                    title: 'Хостел «Хмель и Соль»',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Салехард",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
                {
                    position: new google.maps.LatLng(66.53551938734692, 66.61205704031188),
                    map: map,
                    title: 'Хостел «Хмель и Соль»',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Новый Уренгой",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
                {
                    position: new google.maps.LatLng(66.52640978771203, 66.60338814095442),
                    map: map,
                    title: 'Хостел «Хмель и Соль»',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Надым",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
                {
                    position: new google.maps.LatLng(66.524683202413, 66.59579212514542),
                    map: map,
                    title: 'Хостел «Хмель и Соль»',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Сабетта",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
            ];
            // createCoordinates
            function createCoordinates(...markers) {
                flightPathCoordinates = [];
                markers.forEach(el => {
                    flightPathCoordinates.push(el)
                })
                // let startPoint = {}
                flightPath = new google.maps.Polyline({
                    path: flightPathCoordinates,
                    strokeOpacity: 0,
                    icons: [
                        {
                            icon: lineSymbol,
                            offset: "0",
                            repeat: "6px",
                        },
                    ]
                })
                oldCordinates.push(flightPath)
            }
            // добавить линию
            function addLine() {
                flightPath.setMap(map1);
            }
            // убрать линию
            function removeLine() {
                oldCordinates.forEach(el => {
                    el.setMap(null);
                })
            }
            function addMarker(position, map, title, icon, label) {
                const marker = new google.maps.Marker({
                    position,
                    map,
                    title,
                    icon,
                    label,
                });
                markers.push(marker);
            }
            function createStartMass() {
                startMarkerst.forEach(el => {
                    addMarker(el.position, el.map, el.title, el.icon, el.label)
                })
            }
            createStartMass()
            function setMapOnAll(map) {
                for (let i = 0; i < markers.length; i++) {
                    markers[i].setMap(map);
                }
            }
            function initializeBuildMap() {
                myLatlng = new google.maps.LatLng(66.53256297859949, 66.60141403516596);

                var mapOptions = {
                    zoom: 14,
                    center: myLatlng,
                    mapTypeControl: false,
                    overviewMapControl: false,
                    panControl: false,
                    zoomControl: false,
                    streetViewControl: false,
                    keyboardShortcuts: false,
                    styles: [
                        {
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f2f2f2"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.land_parcel",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#bdbdbd"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#eeeeee"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e5e5e5"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#dadada"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.line",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e5e5e5"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.station",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#eeeeee"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#cad2d4"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#bdbdbd"
                                }
                            ]
                        }
                    ]
                };
                map1 = new google.maps.Map(document.getElementById('build-way__map'), mapOptions);
                setMapOnAll(map1)


            }
            document.addEventListener('click', e => {
                if (e.target.closest('.build-list__date-label')) {
                    $('.current-date-way').text(e.target.closest('.build-list__date-label').textContent)
                    switch (e.target.closest('.build-list__date-label').getAttribute('data-num')) {
                        case '1':
                            createCoordinates(markers[1].position, markers[2].position, markers[3].position)
                            break
                        case '2':
                            createCoordinates(markers[2].position, markers[1].position, markers[3].position)
                            break
                        case '3':
                            createCoordinates(markers[1].position, markers[4].position, markers[2].position)
                            break
                        case '4':
                            createCoordinates(markers[1].position, markers[2].position, markers[4].position)
                            break
                        case '5':
                            createCoordinates(markers[2].position, markers[4].position, markers[3].position)
                            break
                        case '6':
                            createCoordinates(markers[2].position, markers[4].position, markers[3].position)
                            break
                        case '6':
                            createCoordinates(markers[1].position, markers[4].position, markers[3].position)
                            break
                    }

                    removeLine()
                    setTimeout(addLine, 200)
                    // addLine()
                }
            })

            google.maps.event.addDomListener(window, 'load', initializeBuildMap);
        }
        secondMap()
        const thridMap = function () {
            let flightPath;
            let map;
            function initializeChoosedMap() {
                var myLatlng = new google.maps.LatLng(66.53256297859949, 66.60141403516596);
                var pos1 = new google.maps.LatLng(66.53256677261557, 66.61196913935893);
                var pos2 = new google.maps.LatLng(66.52692261179189, 66.59257347430562);
                var pos3 = new google.maps.LatLng(66.53797994510903, 66.59587795576483);
                var pos4 = new google.maps.LatLng(66.53551938734692, 66.61205704031188);
                var pos5 = new google.maps.LatLng(66.52640978771203, 66.60338814095442);
                var pos6 = new google.maps.LatLng(66.524683202413, 66.59579212514542);

                var mapOptions = {
                    zoom: 14,
                    center: myLatlng,
                    mapTypeControl: false,
                    overviewMapControl: false,
                    panControl: false,
                    zoomControl: false,
                    streetViewControl: false,
                    keyboardShortcuts: false,
                    styles: [
                        {
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f2f2f2"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.land_parcel",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#bdbdbd"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#eeeeee"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e5e5e5"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#dadada"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.line",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e5e5e5"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.station",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#eeeeee"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#cad2d4"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#bdbdbd"
                                }
                            ]
                        }
                    ]
                };
                map = new google.maps.Map(document.getElementById('catalog-choose__map'), mapOptions);
                var marker1 = new google.maps.Marker({
                    position: pos1,
                    map: map,
                    title: 'Хостел «Хмель и Соль»',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Хостел «Хмель и Соль»",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }

                });
                var marker2 = new google.maps.Marker({
                    position: pos2,
                    map: map,
                    title: 'Тазовский',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Тазовский",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                });
                var marker3 = new google.maps.Marker({
                    position: pos3,
                    map: map,
                    title: 'Хостел «Ямбург»',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Хостел «Ямбург»",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                });
                var marker4 = new google.maps.Marker({
                    position: pos4,
                    map: map,
                    title: 'Хостел «У Урсулы»',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Хостел «У Урсулы»",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                });
                var marker5 = new google.maps.Marker({
                    position: pos5,
                    map: map,
                    title: 'Хостел «Хмель и Соль»',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Хостел «Хмель и Соль»",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                });
                var marker6 = new google.maps.Marker({
                    position: pos6,
                    map: map,
                    title: 'Отель «Сибирь»',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Отель «Сибирь»",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                });

                function generateCard(title) {
                    const mapContainer = document.querySelector('.catalog-choose__map-cards');
                    mapContainer.textContent = ''
                    const cardElem = document.createElement('div');
                    cardElem.className = 'catalog__wrapper-item card-item photo hovered map-card';
                    cardElem.innerHTML = `
                    <a href="">
                        <div class="card-item__img">
                            <img src="img/cards/card-restor_1.png" alt="Отель «Ямбург»">
                        </div>
                        <div class="card-item__footer">
                            <div class="card-item__name">${title}</div>
                            <div class="descr-block__text">
                                10:00 - 22:00 для регистрации
                            </div>
                        </div>
                    </a>
                    <button type="button" data-type="only" class="choose-btn btn btn-transparent map-choose">
                        <span class="choose-btn__status">Выбрать</span>
                        <div class="choose-btn__icon">
                            +
                        </div>
                    </button>
                    `
                    mapContainer.append(cardElem)
                }
                function removeCard() {
                    const mapContainer = document.querySelector('.catalog-choose__map-cards');
                    mapContainer.textContent = ''
                }
                document.addEventListener('click', function (e) {
                    if (e.target.closest('.map-choose')) {
                        if (e.target.closest('.map-choose').classList.contains('current')) {
                            e.target.closest('.map-choose').classList.remove('current');
                        } else {
                            e.target.closest('.map-choose').classList.add('current');
                        }
                    }
                })
                marker1.addListener('click', function () {
                    generateCard(this.title)
                });
                marker2.addListener('click', function () {
                    generateCard(this.title)
                });
                marker3.addListener('click', function () {
                    generateCard(this.title)
                });
                marker4.addListener('click', function () {
                    generateCard(this.title)
                });
                marker5.addListener('click', function () {
                    generateCard(this.title)
                });
                marker6.addListener('click', function () {
                    generateCard(this.title)
                });

            }
            google.maps.event.addDomListener(window, 'load', initializeChoosedMap);
        }
        thridMap()


        // maps sеtting end

        // Steps

        const $steps = $('.steps-planning__step');
        const selectInputs = $('.enter-banner__input .custom-select');
        const values = document.querySelectorAll('#planning-form .custom-select__current-elem');

        const nextStep = function () {
            stepCount++;
            $steps.removeClass('show')
            $steps.eq(stepCount).addClass('show');
            $('.catalog-choose__catalog').show()
            if (stepCount > 1) {
                $('#repeat-step-btn').addClass('show')
                $('#next-step-btn').removeClass('show')

            } else if (stepCount > 0) { $('.enter-banner__form').addClass('only-btn') }
        }
        const prevStep = function () {
            stepCount--;
            $steps.removeClass('show')
            $steps.eq(stepCount).addClass('show');
            if (stepCount == 0) {
                $('#repeat-step-btn').removeClass('show')
                $('#next-step-btn').addClass('show')
                $('.enter-banner__form').removeClass('only-btn')
            };
        }
        $('#next-step-btn').on('click', function () {
            let fieldForm = true;
            selectInputs.each((index, el) => {
                if (!el.classList.contains('filed')) {
                    console.log(el);
                    el.classList.add('error')
                    fieldForm = false
                } else {
                    el.classList.remove('error')
                    fieldForm = true
                }
            })
            if (fieldForm === true && stepCount === 0) {
                nextStep()
                $(this).removeClass('show');
                $('#repeat-step-btn').addClass('show');
                $('#planning-form .custom-select__header').addClass('disabled')
                $('#planning-form .costum-calendar').prop('disabled', true)
                values.forEach(el => {
                    localStorage.setItem(el.getAttribute('data-title'), el.textContent)
                })
            }
        })
        $('#repeat-step-btn').on('click', function () {
            // stepCount = 0;
            // $steps.removeClass('show')
            // $steps.eq(stepCount).addClass('show');
            // $('#planning-form .custom-select__header').removeClass('disabled')
            // $(this).removeClass('show');
            // $('#next-step-btn').addClass('show'); $('.enter-banner__form').removeClass('only-btn');
            // $('.choosen-radio').prop('checked', false);
            // selectInputs.removeClass('filed')
            // $('.enter-banner__input').removeClass('show-title')
            // $('#city-from-value').text($('#city-from-value').attr('data-title'))
            // $('#city-to-value').text($('#city-to-value').attr('data-title'))
            // $('#calendar-value').html(`<span class="calendar-value__start">Когда</span>
            // <span class="calendar-value__finish"></span>`)
            // $('#type-of-recreation').text($('#type-of-recreation').attr('data-title'))
            location.reload();
        })
        $('.btn-next').on('click', function () {
            if (stepCount == 1 && !$('.choose-btn--hostel').hasClass('current') || stepCount == 2 && !$('.choose-btn--etertainment').hasClass('current')) {
                return false;
            } else
                if (stepCount < $steps.length - 1) {
                    nextStep()
                }
        });
        $('.btn-back').on('click', function () {
            if (stepCount > 0) {
                prevStep()
            }
        })
        $('.btn-end').on('click', function () {
            $('.build-way__hendler').hide()
            $('.build-way__hendler--done').addClass('done')
            $('.build-plan__checkbox input').prop('disabled', true);
            $('.build-plan__elem').addClass('done')
            let indexCount = 0
            if ($('.build-plan__list').css('display') === 'none') {
                $('.build-plan__list-date .build-plan__icon-drag').each((index, el) => {
                    indexCount++
                    el.innerHTML = `<span class="build-plan__num">${indexCount}</span>`
                })
            } else {
                $('.build-plan__icon-drag').each((index, el) => {
                    indexCount++
                    el.innerHTML = `<span class="build-plan__num">${indexCount}</span>`
                })
            }

        })
        // Steps end

        // choose btn
        $('.catalog-choose__type-search .btn').on('click', function () {
            if ($(this).attr('data-value') === 'list-search') {
                $('.catalog-choose__catalog').show()
                $('.catalog-choose__map').hide()
            } else if ($(this).attr('data-value') === 'map-search') {
                $('.choose-btn[data-type="only"]').removeClass('current')
                $('.choose-btn[data-type="only"]').prop('disabled', false);
                $('.catalog-choose__catalog').hide()
                $('.catalog-choose__map').show()
            }
        })
        $('.choose-btn').on('click', function () {
            if ($(this).attr('data-type') === "only") {
                if ($(this).hasClass('current')) {
                    $(this).removeClass('current');
                    $('.choose-btn').prop('disabled', false);
                    $(this).prop('disabled', false);
                } else {
                    $(this).addClass('current');
                    $('.choose-btn[data-type="only"]').prop('disabled', true);
                    $(this).prop('disabled', false);
                }
            } else {
                if ($(this).hasClass('current')) {
                    $(this).removeClass('current');
                } else {
                    $(this).addClass('current');
                }
            }
        })
        // choose btn end
    })();
    // drag list
    (function () {
        const defauldBuildList = document.querySelector('.build-plan__list')
        const dateList = document.querySelector('.build-plan__list-date');
        const planElements = document.querySelectorAll('.build-plan__elem');
        const shareDateCheckbox = document.querySelector('.build-plan__checkbox input');
        let dataDate = [
            {
                mounth: 10,
                date: 1,
                year: 2021,
            },
            {
                mounth: 10,
                date: 2,
                year: 2021,
            },
            {
                mounth: 10,
                date: 3,
                year: 2021,
            },
            {
                mounth: 10,
                date: 4,
                year: 2021,
            },
            {
                mounth: 10,
                date: 1,
                year: 2021,
            }, {
                mounth: 10,
                date: 5,
                year: 2021,
            },
            {
                mounth: 10,
                date: 6,
                year: 2021,
            }
        ];
        let dataElementsPlan = [
            {
                'id': '01',
                'img': 'img/plan-photo.png',
                'name': 'Отель «Сибирь»',
                'text': '10:00 - 22:00 для регистрации',
                "transformStatus": 'no-drag',
                'btnStatus': 'disabled',
                "payStatus": 'disabled',
                'svg': 'home'
            },
            {
                'id': '02',
                'img': 'img/plan-photo-0.png',
                'name': 'Музей Арктики',
                'text': '10:00 - 22:00 для регистрации',
                "transformStatus": 'drag',
                'btnStatus': 'drag',
                "payStatus": 'payed',
                'svg': 'arrows'
            },
            {
                'id': '03',
                'img': 'img/plan-photo-1.png',
                'name': 'Тур «За грибами»',
                'text': '10:00 - 22:00 для регистрации',
                "transformStatus": 'drag',
                'btnStatus': 'drag',
                "payStatus": 'no-pay',
                'svg': 'arrows'
            },
            {
                'id': '04',
                'img': 'img/plan-photo-2.png',
                'name': 'Отель «Сибирь»',
                'text': '10:00 - 22:00 для регистрации',
                "transformStatus": 'drag',
                'btnStatus': 'drag',
                "payStatus": 'payed',
                'svg': 'arrows'
            },
            {
                'id': '05',
                'img': 'img/plan-photo-3.png',
                'name': 'Хостел «Хмель и Соль»',
                'text': '10:00 - 22:00 для регистрации',
                "transformStatus": 'drag',
                'btnStatus': 'drag',
                "payStatus": 'no-pay',
                'svg': 'arrows'
            },
            {
                'id': '06',
                'img': 'img/plan-photo.png',
                'name': 'Отель «Сибирь»',
                'text': '10:00 - 22:00 для регистрации',
                "transformStatus": 'drag',
                'btnStatus': 'drag',
                "payStatus": 'payed',
                'svg': 'arrows'
            },
            {
                'id': '07',
                'img': 'img/plan-photo.png',
                'name': 'Отель «Сибирь»',
                'text': '10:00 - 22:00 для регистрации',
                "transformStatus": 'drag',
                'btnStatus': 'drag',
                "payStatus": 'no-pay',
                'svg': 'arrows'
            },
        ];
        const renderElementsPlan = (whereRender) => {
            whereRender.textContent = '';
            dataElementsPlan.forEach(({ id, img, name, text, transformStatus, payStatus, svg, btnStatus }) => {
                let planElement = document.createElement('div');
                planElement.classList.add('build-plan__elem', transformStatus);
                planElement.setAttribute('id', `build-plan__elem-${id}`);
                let deleteBtn = (payStatus === 'payed' || btnStatus === 'disabled') ? '' : `</button> <button class="btn btn-delete" data-id="${id}">+</button>`;
                planElement.innerHTML = `
                <div class="build-plan__elem-inner">
                    <div class="build-plan__icon-drag ${btnStatus}">
                    <svg class="">
                        <use xlink:href="./img/icons/icons.svg#${svg}"></use>
                    </svg>
                    </div>
                    <a href='#' class="build-plan__photo">
                        <img src="${img}" alt="Ваш отель">
                    </a>
                    <div class="build-plan__descr">
                        <div class="descr-block__title">${name}</div>
                        <div class="descr-block__text">${text}</div>
                    </div>
                    <button type="button" class="pay-btn btn ${payStatus}" data-id="${id}">
                        <svg class="">
                            <use xlink:href="./img/icons/icons.svg#ticket"></use>
                        </svg>
                        <svg class="payed-icon">
                            <use xlink:href="./img/icons/icons.svg#tick-pay"></use>
                        </svg>
                    ${deleteBtn}
                    </div>
                               </div>
                `;
                whereRender.append(planElement)
            })
        }

        const renderDateList = () => {
            dateList.textContent = '';
            let countId = 0
            dataDate.forEach(({ mounth, date, year }) => {
                countId++
                let dateElem = document.createElement('div');
                dateElem.classList.add('build-list__date');
                dateElem.innerHTML = `
                <div class="build-list__date-label" data-num=${countId}>
                    <span>${date}.${mounth}.${year}</span>
                </div>
                <div id="dragulaId-${countId}" class="build-list__date-inner container"></div>
                `;
                dateList.append(dateElem)
            })
        };
        shareDateCheckbox.addEventListener('change', function () {
            if (shareDateCheckbox.checked === true) {

                renderDateList()
                const dateInnerBlocks = document.querySelectorAll('.build-list__date-inner')
                renderElementsPlan(dateInnerBlocks[0])
                let arrayForDrag = []
                dateInnerBlocks.forEach(el => arrayForDrag.push(el))
                SortableInit(dateInnerBlocks)
                defauldBuildList.style.display = 'none';
            } else {
                dateList.textContent = '';
                defauldBuildList.style.display = 'block';
                planElements.forEach(el => {
                    defauldBuildList.append(el)
                })

            }
        });
        const deleteElementPlan = (id) => {
            dataElementsPlan = dataElementsPlan.filter((el) => id !== el.id);
            if (document.querySelector('.build-plan__list').style.display == 'none') {
                renderElementsPlan(document.querySelector('.build-list__date-inner'));
            } else if (document.querySelector('.build-list__date-inner')) {
                renderElementsPlan(defauldBuildList);
            }
        }
        renderElementsPlan(defauldBuildList);
        document.addEventListener('click', e => {
            if (e.target.closest('.btn-delete')) {
                let id = e.target.getAttribute('data-id');
                deleteElementPlan(id)
            }
            if (e.target.closest('.pay-btn.no-pay')) {
                $('#new-pay').addClass('show')
            }
            if (e.target.closest('.pay-btn.payed')) {
                $('#history-pay').addClass('show')
            }
        })
        $('.js-buy-btn').on('click', function () { $('#new-pay').addClass('show') })

        new Sortable(drag_1, {
            animation: 150,
            ghostClass: 'blue-background-class',
            filter: '.no-drag'
        });
        function SortableInit(elements) {
            elements.forEach(el => {
                new Sortable(el, {
                    animation: 150,
                    handle: '.drag',
                    group: 'shared',
                    filter: '.no-drag'
                });
            })

        }

    })();
    // showMoreCards
    (function () {
        const showMoreDataCard = [
            {
                name: 'Отель «Ямбург»',
                descr: '10:00 - 22:00 для регистрации',
                photo: 'img/cards/card-restor_1.png'
            },
            {
                name: 'Отель «Ямал»',
                descr: '10:00 - 22:00 для регистрации',
                photo: 'img/cards/card-restor_1.png'
            },
            {
                name: 'Отель "Север"',
                descr: '10:00 - 22:00 для регистрации',
                photo: 'img/cards/card-restor_1.png'
            },
        ]
        // for hosterl
        const caralogChooseHostel = document.querySelector('.catalog-choose__catalog .catalog__wrapper');
        const catalogCardItems = document.querySelectorAll('.catalog-choose__catalog .card-item');
        const showMoreBtn = document.querySelector('.catalog-choose__show-more');

        // for entertainments
        const EntertainmentsDataCards = [
            {
                name: 'Отель «Ямбург»',
                descr: '10:00 - 22:00 для регистрации',
                photo: 'img/cards/card-restor_1.png'
            },
            {
                name: 'Отель «Ямал»',
                descr: '10:00 - 22:00 для регистрации',
                photo: 'img/cards/card-restor_1.png'
            },
            {
                name: 'Отель "Север"',
                descr: '10:00 - 22:00 для регистрации',
                photo: 'img/cards/card-restor_1.png'
            },
        ]
        const entertainmentsCatalog = document.querySelector('.choose-entertainments__catalog .catalog__wrapper');
        const entertainmentsCatalogItems = document.querySelectorAll('.choose-entertainments__catalog .card-item');
        const showMoreBtneEtertainments = document.querySelector('.choose-entertainments__show-more');


        function showhideBtn(items, btn) {
            if (items.length >= 8) {
                btn.style.display = 'block'
            } else {
                btn.style.display = 'none'
            }
        }
        showhideBtn(catalogCardItems, showMoreBtn);

        showhideBtn(entertainmentsCatalogItems, showMoreBtneEtertainments);

        function showMoreCards([...dataCards], catalog) {
            dataCards.forEach(el => {
                const card = document.createElement('div')
                card.className = 'catalog__wrapper-item card-item photo'
                card.innerHTML = `
                        <a href="">
                            <div class="card-item__img">
                                <img src="${el.photo}" alt="${el.name}">
                            </div>
                            <div class="card-item__footer">
                                <div class="card-item__name">${el.name}</div>
                                <div class="descr-block__text">
                                ${el.descr}
                                </div>
                            </div>
                        </a>
                        <button data-type="only" type="button" class="choose-btn btn btn-transparent">
                            <span class="choose-btn__status">Выбрать</span>
                            <div class="choose-btn__icon">
                                +
                            </div>
                        </button>
                                    `
                catalog.append(card);
            })
        }
        function showMoreCardsEtertainments([...dataCards], catalog) {
            dataCards.forEach(el => {
                const card = document.createElement('div')
                card.className = 'catalog__wrapper-item card-item photo'
                card.innerHTML = `
                        <a href="">
                            <div class="card-item__img">
                                <img src="${el.photo}" alt="${el.name}">
                            </div>
                            <div class="card-item__footer">
                                <div class="card-item__name">${el.name}</div>
                                <div class="descr-block__text">
                                ${el.descr}
                                </div>
                            </div>
                        </a>
                        <button type="button" class="choose-btn btn btn-transparent choose-btn--etertainment">
                            <span class="choose-btn__status">Выбрать</span>
                            <div class="choose-btn__icon">
                                +
                            </div>
                        </button>
                                    `
                catalog.append(card);
            })
        }
        showMoreBtn.addEventListener('click', function () {
            showMoreCards(showMoreDataCard, caralogChooseHostel)
        })
        showMoreBtneEtertainments.addEventListener('click', function () {
            showMoreCardsEtertainments(EntertainmentsDataCards, entertainmentsCatalog)
        })
    })();
    // formValidate 
    (function () {
        jQuery.extend(jQuery.validator.messages, {
            required: "Заполните поле",
        });
        $('.input-phone').mask('+7 000 000 00 00');
        $('#fixed-pay__form').validate();
        $('#sms-send').validate();
    })()
});




