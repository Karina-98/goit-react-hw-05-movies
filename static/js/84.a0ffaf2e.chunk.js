/*! For license information please see 84.a0ffaf2e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[84],{760:function(t,e,r){r.d(e,{_:function(){return o}});var n=r(184),o=function(t){var e=t.children;return(0,n.jsx)("p",{children:e})}},84:function(t,e,r){r.r(e),r.d(e,{default:function(){return b}});var n,o,i,a,c=r(439),u=r(689),s=r(87),l=r(791),h=r(316),f=r(760),p=r(538),d=r(168),v=r(140),g=v.ZP.button(n||(n=(0,d.Z)(["\npadding: 10px\nmargin-bottom: 15px;\ndisplay: inline-block;\n  padding: 10px 20px;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  text-decoration: none;\n  border-color: red;\n  border-radius: 7px;\n  cursor: pointer;"]))),y=(0,v.ZP)(s.rU)(o||(o=(0,d.Z)(["\nlink-style: none;\npadding: 12px;\ncolor:red ;\n\n"]))),w=v.ZP.div(i||(i=(0,d.Z)(["\nflex-direction: row;\njustify-content: center;\nalign-items: start;\nposition: relative;"]))),m=v.ZP.div(a||(a=(0,d.Z)(["\nmax-width: 600px;\n    position: absolute;\n    top: 0;\n    right: 0; "]))),x=r(184),b=function(){var t,e=(0,l.useState)(null),r=(0,c.Z)(e,2),n=r[0],o=r[1],i=(0,l.useState)(!1),a=(0,c.Z)(i,2),d=a[0],v=a[1],b=(0,l.useState)(""),j=(0,c.Z)(b,2),_=j[0],k=j[1],E=(0,u.UO)().movieId,L=(0,u.TH)();if((0,l.useEffect)((function(){v(!0),(0,h.V9)(E).then((function(t){return o(t)})).catch((function(t){return k(t.statusText)})).finally(v(!1))}),[E]),n){var Z=n.title,O=n.release_date,S=n.popularity,R=n.overview,P=n.genres,G=n.poster_path,N=n.original_title;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g,{children:(0,x.jsx)(y,{to:(null===(t=L.state)||void 0===t?void 0:t.from)||"/",children:"Go Back"})}),(0,x.jsxs)(w,{children:[d&&(0,x.jsx)(p.a,{}),(0,x.jsxs)("div",{children:[(0,x.jsx)("img",{width:"300px",src:G?"https://image.tmdb.org/t/p/w500".concat(G):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:N}),(0,x.jsxs)(m,{children:[(0,x.jsxs)("h1",{children:[Z," (",O.slice(0,4),")"]}),(0,x.jsxs)("p",{children:["User score: ",S]}),(0,x.jsx)("h2",{children:"Overview"}),(0,x.jsx)("p",{children:R}),(0,x.jsx)("h2",{children:"Genres"}),(0,x.jsx)("ul",{children:P.map((function(t){return(0,x.jsx)("li",{children:t.name},t.id)}))})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h3",{children:"Additional information"}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsx)(s.rU,{to:"cast",children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(s.rU,{to:"reviews",children:"Reviews"})})]}),(0,x.jsxs)(l.Suspense,{children:[" ",(0,x.jsx)(u.j3,{})]})]})]}),_&&(0,x.jsx)(f._,{children:_})]})]})}}},316:function(t,e,r){r.d(e,{Bt:function(){return h},Me:function(){return l},Tg:function(){return u},V9:function(){return s},on:function(){return f}});var n=r(861),o=r(243);function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(S){s=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new L(o||[]);return n(a,"_invoke",{value:j(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var f={};function p(){}function d(){}function v(){}var g={};s(g,a,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(Z([])));w&&w!==e&&r.call(w,a)&&(g=w);var m=v.prototype=p.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(n,i,a,c){var u=h(t[n],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function j(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function _(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function Z(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=v,n(m,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},x(b.prototype),s(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(m),s(m,u,"Generator"),s(m,a,(function(){return this})),s(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=Z,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:Z(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var a="https://api.themoviedb.org/3",c="c24b132e7bdacd2f4b83fad270195cf7",u=function(){var t=(0,n.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(a,"/trending/movie/day?api_key=").concat(c));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(a,"/movie/").concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:if(200===(r=t.sent).status){t.next=7;break}throw new Error(" ERROR! Smth went wrong! ");case 7:return t.abrupt("return",r.data);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(a,"/movie/").concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:if(200===(r=t.sent).status){t.next=7;break}throw new Error(" ERROR! Smth went wrong! ");case 7:return t.abrupt("return",r.data.cast);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(a,"/movie/").concat(e,"/reviews?api_key=").concat(c,"&language=en-US"));case 2:if(200===(r=t.sent).status){t.next=7;break}throw new Error(" ERROR! Smth went wrong! ");case 7:return t.abrupt("return",r.data.results);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(a,"/search/movie?api_key=").concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:if(200===(r=t.sent).status){t.next=8;break}throw console.log(r),new Error(" ERROR! Smth went wrong! ");case 8:return t.abrupt("return",r.data.results);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=84.a0ffaf2e.chunk.js.map