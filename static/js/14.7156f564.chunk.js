"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[14],{14:function(n,t,e){e.d(t,{Am:function(){return X}});var r=e(168),o=e(439),a=e(433);function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function s(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function c(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var u=e(791),f={data:""},d=function(n){return"object"==typeof window?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||f},p=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,m=/\n+/g,g=function n(t,e){var r="",o="",a="",i=function(i){var s=t[i];"@"==i[0]?"i"==i[1]?r=i+" "+s+";":o+="f"==i[1]?n(s,i):i+"{"+n(s,"k"==i[1]?"":e)+"}":"object"==typeof s?o+=n(s,e?e.replace(/([^,])+/g,(function(n){return i.replace(/(^:.*)|([^,])+/g,(function(t){return/&/.test(t)?t.replace(/&/g,n):n?n+" "+t:t}))})):i):null!=s&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=n.p?n.p(i,s):i+":"+s+";")};for(var s in t)i(s);return r+(e&&a?e+"{"+a+"}":a)+o},b={},y=function n(t){if("object"==typeof t){var e="";for(var r in t)e+=r+n(t[r]);return e}return t},v=function(n,t,e,r,o){var a=y(n),s=b[a]||(b[a]=function(n){for(var t=0,e=11;t<n.length;)e=101*e+n.charCodeAt(t++)>>>0;return"go"+e}(a));if(!b[s]){var c=a!==n?n:function(n){for(var t,e,r=[{}];t=p.exec(n.replace(l,""));)t[4]?r.shift():t[3]?(e=t[3].replace(m," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][t[1]]=t[2].replace(m," ").trim();return r[0]}(n);b[s]=g(o?i({},"@keyframes "+s,c):c,e?"":"."+s)}var u=e&&b.g?b.g:null;return e&&(b.g=b[s]),function(n,t,e,r){r?t.data=t.data.replace(r,n):-1===t.data.indexOf(n)&&(t.data=e?n+t.data:t.data+n)}(b[s],t,r,u),s},h=function(n,t,e){return n.reduce((function(n,r,o){var a=t[o];if(a&&a.call){var i=a(e),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;a=s?"."+s:i&&"object"==typeof i?i.props?"":g(i,""):!1===i?"":i}return n+r+(null==a?"":a)}),"")};function x(n){var t=this||{},e=n.call?n(t.p):n;return v(e.unshift?e.raw?h(e,[].slice.call(arguments,1),t.p):e.reduce((function(n,e){return Object.assign(n,e&&e.call?e(t.p):e)}),{}):e,d(t.target),t.g,t.o,t.k)}x.bind({g:1});var w,O,j,Z,k,E,P,_,z,A,D,C,I,N,F,S,T,M,L,q=x.bind({k:1});function H(n,t){var e=this||{};return function(){var r=arguments;function o(a,i){var s=Object.assign({},a),c=s.className||o.className;e.p=Object.assign({theme:O&&O()},s),e.o=/ *go\d+/.test(c),s.className=x.apply(e,r)+(c?" "+c:""),t&&(s.ref=i);var u=n;return n[0]&&(u=s.as||n,delete s.as),j&&u[0]&&j(s),w(u,s)}return t?t(o):o}}var $=function(n,t){return function(n){return"function"==typeof n}(n)?n(t):n},B=function(){var n=0;return function(){return(++n).toString()}}(),G=function(){var n;return function(){if(void 0===n&&typeof window<"u"){var t=matchMedia("(prefers-reduced-motion: reduce)");n=!t||t.matches}return n}}(),J=new Map,K=function(n){if(!J.has(n)){var t=setTimeout((function(){J.delete(n),V({type:4,toastId:n})}),1e3);J.set(n,t)}},Q=function n(t,e){switch(e.type){case 0:return c(c({},t),{},{toasts:[e.toast].concat((0,a.Z)(t.toasts)).slice(0,20)});case 1:return e.toast.id&&function(n){var t=J.get(n);t&&clearTimeout(t)}(e.toast.id),c(c({},t),{},{toasts:t.toasts.map((function(n){return n.id===e.toast.id?c(c({},n),e.toast):n}))});case 2:var r=e.toast;return t.toasts.find((function(n){return n.id===r.id}))?n(t,{type:1,toast:r}):n(t,{type:0,toast:r});case 3:var o=e.toastId;return o?K(o):t.toasts.forEach((function(n){K(n.id)})),c(c({},t),{},{toasts:t.toasts.map((function(n){return n.id===o||void 0===o?c(c({},n),{},{visible:!1}):n}))});case 4:return void 0===e.toastId?c(c({},t),{},{toasts:[]}):c(c({},t),{},{toasts:t.toasts.filter((function(n){return n.id!==e.toastId}))});case 5:return c(c({},t),{},{pausedAt:e.time});case 6:var i=e.time-(t.pausedAt||0);return c(c({},t),{},{pausedAt:void 0,toasts:t.toasts.map((function(n){return c(c({},n),{},{pauseDuration:n.pauseDuration+i})}))})}},R=[],U={toasts:[],pausedAt:void 0},V=function(n){U=Q(U,n),R.forEach((function(n){n(U)}))},W=function(n){return function(t,e){var r=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return c(c({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||B()})}(t,n,e);return V({type:2,toast:r}),r.id}},X=function(n,t){return W("blank")(n,t)};X.error=W("error"),X.success=W("success"),X.loading=W("loading"),X.custom=W("custom"),X.dismiss=function(n){V({type:3,toastId:n})},X.remove=function(n){return V({type:4,toastId:n})},X.promise=function(n,t,e){var r=X.loading(t.loading,c(c({},e),null==e?void 0:e.loading));return n.then((function(n){return X.success($(t.success,n),c(c({id:r},e),null==e?void 0:e.success)),n})).catch((function(n){X.error($(t.error,n),c(c({id:r},e),null==e?void 0:e.error))})),n};var Y=q(Z||(Z=(0,r.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),nn=q(k||(k=(0,r.Z)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),tn=q(E||(E=(0,r.Z)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),en=H("div")(P||(P=(0,r.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(n){return n.primary||"#ff4b4b"}),Y,nn,(function(n){return n.secondary||"#fff"}),tn),rn=q(_||(_=(0,r.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),on=H("div")(z||(z=(0,r.Z)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(n){return n.secondary||"#e0e0e0"}),(function(n){return n.primary||"#616161"}),rn),an=q(A||(A=(0,r.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),sn=q(D||(D=(0,r.Z)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),cn=H("div")(C||(C=(0,r.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(n){return n.primary||"#61d345"}),an,sn,(function(n){return n.secondary||"#fff"})),un=H("div")(I||(I=(0,r.Z)(["\n  position: absolute;\n"]))),fn=H("div")(N||(N=(0,r.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),dn=q(F||(F=(0,r.Z)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),pn=H("div")(S||(S=(0,r.Z)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),dn),ln=function(n){var t=n.toast,e=t.icon,r=t.type,o=t.iconTheme;return void 0!==e?"string"==typeof e?u.createElement(pn,null,e):e:"blank"===r?null:u.createElement(fn,null,u.createElement(on,c({},o)),"loading"!==r&&u.createElement(un,null,"error"===r?u.createElement(en,c({},o)):u.createElement(cn,c({},o))))},mn=function(n){return"\n0% {transform: translate3d(0,".concat(-200*n,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},gn=function(n){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*n,"%,-1px) scale(.6); opacity:0;}\n")},bn=H("div")(T||(T=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),yn=H("div")(M||(M=(0,r.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"])));u.memo((function(n){var t=n.toast,e=n.position,r=n.style,a=n.children,i=t.height?function(n,t){var e=n.includes("top")?1:-1,r=G()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[mn(e),gn(e)],a=(0,o.Z)(r,2),i=a[0],s=a[1];return{animation:t?"".concat(q(i)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(q(s)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(t.position||e||"top-center",t.visible):{opacity:0},s=u.createElement(ln,{toast:t}),f=u.createElement(yn,c({},t.ariaProps),$(t.message,t));return u.createElement(bn,{className:t.className,style:c(c(c({},i),r),t.style)},"function"==typeof a?a({icon:s,message:f}):u.createElement(u.Fragment,null,s,f))}));!function(n,t,e,r){g.p=t,w=n,O=e,j=r}(u.createElement);x(L||(L=(0,r.Z)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"])))}}]);
//# sourceMappingURL=14.7156f564.chunk.js.map