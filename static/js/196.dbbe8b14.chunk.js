"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[196],{9760:function(e,t,n){n.d(t,{_:function(){return a}});var r=n(184),a=function(e){var t=e.children;return(0,r.jsx)("p",{children:t})}},3235:function(e,t,n){n.d(t,{Bt:function(){return h},Me:function(){return d},Tg:function(){return o},V9:function(){return l},on:function(){return f}});var r=n(5861),a=n(7757),c=n.n(a),i=n(1243),s="https://api.themoviedb.org/3",u="c24b132e7bdacd2f4b83fad270195cf7",o=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(u));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:if(200===(n=e.sent).status){e.next=7;break}throw new Error(" ERROR! Smth went wrong! ");case 7:return e.abrupt("return",n.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:if(200===(n=e.sent).status){e.next=7;break}throw new Error(" ERROR! Smth went wrong! ");case 7:return e.abrupt("return",n.data.cast);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US"));case 2:if(200===(n=e.sent).status){e.next=7;break}throw new Error(" ERROR! Smth went wrong! ");case 7:return e.abrupt("return",n.data.results);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/search/movie?api_key=").concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:if(200===(n=e.sent).status){e.next=8;break}throw console.log(n),new Error(" ERROR! Smth went wrong! ");case 8:return e.abrupt("return",n.data.results);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},5196:function(e,t,n){n.r(t),n.d(t,{MovieDetail:function(){return d}});var r=n(9439),a=n(7689),c=n(1087),i=n(2791),s=n(3235),u=n(9760),o=n(6144),l=n(184),d=function(){var e,t,n=(0,i.useState)(null),d=(0,r.Z)(n,2),h=d[0],f=d[1],p=(0,i.useState)(!1),v=(0,r.Z)(p,2),x=v[0],w=v[1],g=(0,i.useState)(""),m=(0,r.Z)(g,2),j=m[0],k=m[1],_=(0,a.UO)().movieId,b=(0,a.TH)();if((0,i.useEffect)((function(){w(!0),(0,s.V9)(_).then((function(e){return f(e)})).catch((function(e){return k(e.statusText)})).finally(w(!1))}),[_]),console.log(h),h){var y=h.title,R=h.release_date,Z=h.popularity,S=h.overview,E=h.genres,U=h.poster_path,O=h.original_title;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{children:(0,l.jsx)(c.rU,{to:null!==(e=null===(t=b.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",children:"Go Back"})}),x&&(0,l.jsx)(o.a,{}),(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{width:"300px",src:U?"https://image.tmdb.org/t/p/w500".concat(U):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:O}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("h1",{children:[y," (",R.slice(0,4),")"]}),(0,l.jsxs)("p",{children:["User score: ",Z]}),(0,l.jsx)("h2",{children:"Overview"}),(0,l.jsx)("p",{children:S}),(0,l.jsx)("h2",{children:"Genres"}),(0,l.jsx)("ul",{children:E.map((function(e){return(0,l.jsx)("li",{children:e.name},e.id)}))})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{children:"Additional information"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(c.rU,{to:"cast",children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(c.rU,{to:"reviews",children:"Reviews"})})]}),(0,l.jsx)(a.j3,{})]})]}),j&&(0,l.jsx)(u._,{children:j})]})}}}}]);
//# sourceMappingURL=196.dbbe8b14.chunk.js.map