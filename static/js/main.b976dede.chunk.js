(this["webpackJsonpbreakout-game"]=this["webpackJsonpbreakout-game"]||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var i,r=n(2),a=n(9),c=n.n(a),o=(n(19),n(6)),u=n(3),s=n(0),h=n(7),l=function(e){return Object(h.a)(Array(e).keys())},d=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t[Math.floor(Math.random()*t.length)]},f=function(e,t){return window.addEventListener(e,t),function(){return window.removeEventListener(e,t)}},v=function(){return Math.floor(3*Math.random())},b=function(e,t){return l(e).map((function(){return l(t).map(v)}))},j=[{lives:5,paddleWidth:3.5,speed:1,blocks:b(3,6)},{lives:4,paddleWidth:3,speed:1.4,blocks:b(4,7)},{lives:3,paddleWidth:2.5,speed:1.8,blocks:b(5,8)},{lives:3,paddleWidth:2,speed:2.2,blocks:b(6,9)}],O=n(10),w=n(11),p=function(){function e(t,n){Object(O.a)(this,e),this.x=t,this.y=n}return Object(w.a)(e,[{key:"scaleBy",value:function(t){return new e(this.x*t,this.y*t)}},{key:"length",value:function(){return Math.hypot(this.x,this.y)}},{key:"add",value:function(t){var n=t.x,i=t.y;return new e(this.x+n,this.y+i)}},{key:"normalize",value:function(){return this.scaleBy(1/this.length())}},{key:"subtract",value:function(t){var n=t.x,i=t.y;return new e(this.x-n,this.y-i)}},{key:"dotProduct",value:function(e){var t=e.x,n=e.y;return this.x*t+this.y*n}},{key:"projectOn",value:function(t){var n=this.dotProduct(t)/t.length();return new e(n*t.x,n*t.y)}},{key:"reflect",value:function(e){return this.subtract(this.projectOn(e).scaleBy(2))}},{key:"rotate",value:function(t){var n=function(e){return e*Math.PI/180}(t),i=Math.cos(n),r=Math.sin(n);return new e(this.x*i-this.y*r,this.x*r+this.y*i)}},{key:"crossProduct",value:function(e){var t=e.x,n=e.y;return this.x*n-t*this.y}},{key:"angleBetween",value:function(e){return 180*Math.atan2(this.crossProduct(e),this.dotProduct(e))/Math.PI}}]),e}(),y=1/3,m=y,g="LEFT",x="RIGHT",k=new p(-1,0),E=new p(1,0),z=new p(0,-1),I=new p(0,1),T=k.add(z).normalize(),M=E.add(z).normalize(),B=function(e,t,n){var i=t-m;return{paddle:{position:new p((e-n)/2,i),width:n,height:m},ball:{center:new p(t/2,i-.4),radius:.2,direction:d(T,M)}}},N=function(e){var t,n=e.lives,i=e.paddleWidth,r=e.speed,a=e.blocks,c=a[0].length,o=c,u=(o-.3333333333333333*o-a.length*y)/2,l=a.map((function(e,t){return e.map((function(e,n){return{density:e,position:new p(n,u+t*y),width:1,height:y}}))})),d={width:c,height:o};return Object(s.a)(Object(s.a)({size:d,blocks:(t=l,t.reduce((function(e,t){return[].concat(Object(h.a)(e),Object(h.a)(t))}),[]))},B(c,o,i)),{},{lives:n,speed:r})},W=function(e,t,n,i){return e>=n&&e<=i||t>=n&&t<=i},D=function(e,t,n){var i=e.size,r=e.speed,a=e.lives,c=.005*n*r,o=function(e,t,n,i){if(!i)return e;var r=i===g?k:E,a=e.position.add(r.scaleBy(n)).x,c=function(t){return Object(s.a)(Object(s.a)({},e),{},{position:new p(t,e.position.y)})};return a<0?c(0):a+e.width>t.width?c(t.width-e.width):c(a)}(e.paddle,i,c,t),u=e.ball.radius,h=e.ball.direction,l=e.ball.center.add(h.scaleBy(c)),d=l.y+u;if(d>i.height)return Object(s.a)(Object(s.a)(Object(s.a)({},e),B(i.width,i.height,o.width)),{},{lives:a-1});var f=function(t){return Object(s.a)(Object(s.a)({},e),{},{paddle:o,ball:Object(s.a)(Object(s.a)({},e.ball),t)})},v=function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.3,n=function(){return Math.random()*t-t/2},i=new p(n(),n());return e.add(i).normalize()}(h.reflect(e)),n=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15,i=e.angleBetween(t),r=90-n;if(i<0){if(i>-n)return e.rotate(-n);if(i<-r)return e.rotate(-r)}else{if(i<n)return e.rotate(n);if(i>r)return e.rotate(r)}return t}(e,t);return f({direction:n})},b=l.x-u,j=l.x+u,O=l.y-u,w=o.position.x,y=w+o.width,m=o.position.y;if(Math.abs(z.angleBetween(h))>90&&d>=m&&j>=w&&b<=y)return v(z);if(O<=0)return v(I);if(b<=0)return v(E);if(j>=i.width)return v(k);var x,T,M=e.blocks.find((function(e){var t=e.position,n=e.width,i=e.height;return W(O,d,t.y,t.y+i)&&W(b,j,t.x,t.x+n)}));if(M){var N=M.density-1,D=Object(s.a)(Object(s.a)({},M),{},{density:N}),P=N<0?(x=e.blocks,T=M,x.filter((function(e){return e!==T}))):function(e,t,n){return e.map((function(e){return e===t?n:e}))}(e.blocks,M,D);return Object(s.a)(Object(s.a)({},v(function(){var e=M.position.y,t=e+M.height,n=M.position.x;if(O>e-u&&d<t+u){if(b<n)return k;if(j>n+M.width)return E}return O>e?I:O<=e?z:void 0}())),{},{blocks:P})}return f({center:l})},P=n(1),S=function(e){var t=e.level,n=e.unit;return Object(P.jsxs)("text",{x:n,y:2*n,fontSize:n,className:"level",children:["LEVEL: ",t]})},L=function(e){var t=e.lives,n=e.containerWidth,i=e.unit,r=2*i;return l(t).map((function(e){return Object(P.jsx)("rect",{className:"life",rx:i/4,height:i,width:r,y:i,x:n-i-r*(e+1)-i/2*e},e)}))},R=l(3).map((function(e){return"rgba(26, 188, 156, ".concat(1/(3-e),")")})),V=function(e){var t=e.x,n=e.y,i=e.width,r=e.height,a=e.density;return Object(P.jsx)("rect",{className:"block",fill:R[a],x:t,y:n,width:i,height:r})},A=function(e){var t=e.x,n=e.y,i=e.width,r=e.height;return Object(P.jsx)("rect",{className:"paddle",x:t,y:n,width:i,height:r})},C=function(e){var t=e.x,n=e.y,i=e.radius;return Object(P.jsx)("circle",{className:"ball",cx:t,cy:n,r:i})},G={LEFT:[65,37],RIGHT:[68,39]},H=function(e,t){var n=e.width/t.width,i=e.height/t.height,r=Math.min(n,i);return{projectDistance:function(e){return e*r},projectVector:function(e){return e.scaleBy(r)}}},_=function(e){var t=function(){var e=localStorage.getItem("level");return e?parseInt(e,10):0}(),n=N(j[t]),i=H(e,n.size);return{level:t,game:n,containerSize:e,projectDistance:i.projectDistance,projectVector:i.projectVector,time:Date.now(),stopTime:void 0,movement:void 0}},F="CONTAINER_SIZE_CHANGE",K="KEY_DOWN",J="KEY_UP",Y="TICK",U=(i={},Object(u.a)(i,F,(function(e,t){return Object(s.a)(Object(s.a)({},e),{},{containerSize:t},H(t,e.game.size))})),Object(u.a)(i,K,(function(e,t){return G.LEFT.includes(t)?Object(s.a)(Object(s.a)({},e),{},{movement:g}):G.RIGHT.includes(t)?Object(s.a)(Object(s.a)({},e),{},{movement:x}):e})),Object(u.a)(i,J,(function(e,t){var n=Object(s.a)(Object(s.a)({},e),{},{movement:void 0});return 32===t?e.stopTime?Object(s.a)(Object(s.a)({},n),{},{stopTime:void 0,time:e.time+Date.now()-e.stopTime}):Object(s.a)(Object(s.a)({},n),{},{stopTime:Date.now()}):n})),Object(u.a)(i,Y,(function(e){if(e.stopTime)return e;var t=Date.now(),n=D(e.game,e.movement,t-e.time),i=Object(s.a)(Object(s.a)({},e),{},{time:t});if(n.lives<1)return Object(s.a)(Object(s.a)({},i),{},{game:N(j[e.level])});if(n.blocks.length<1){var r=e.level===j.length?e.level:e.level+1;localStorage.setItem("level",r);var a=N(j[e.level]);return Object(s.a)(Object(s.a)({},i),{},{level:r,game:a},H(e.containerSize,a.size))}return Object(s.a)(Object(s.a)({},i),{},{game:n})})),i),Z=function(e,t){var n=t.type,i=t.payload,r=U[n];return r?r(e,i):e},$=function(e){var t=Object(r.useReducer)(Z,e,_),n=Object(o.a)(t,2),i=n[0],a=n[1],c=function(e,t){return a({type:e,payload:t})},u=i.projectDistance,h=i.projectVector,l=i.level,d=i.game,v=d.blocks,b=d.paddle,j=d.ball,O=d.size,w=O.width,p=O.height,y=d.lives;Object(r.useEffect)((function(){return c(F,e)}),[e]),Object(r.useEffect)((function(){var e=setInterval((function(){return c(Y)}),16.666666666666668),t=f("keydown",(function(e){var t=e.which;return c(K,t)})),n=f("keyup",(function(e){var t=e.which;return c(J,t)}));return function(){clearInterval(e),t(),n()}}),[]);var m=u(w),g=u(j.radius);return Object(P.jsxs)("svg",{width:m,height:u(p),className:"scene",children:[Object(P.jsx)(S,{unit:g,level:l+1}),Object(P.jsx)(L,{lives:y,containerWidth:m,unit:g}),v.map((function(e){var t=e.density,n=e.position,i=e.width,r=e.height;return Object(P.jsx)(V,Object(s.a)({density:t,width:u(i),height:u(r)},h(n)),"".concat(n.x,"-").concat(n.y))})),Object(P.jsx)(A,Object(s.a)({width:u(b.width),height:u(b.height)},h(b.position))),Object(P.jsx)(C,Object(s.a)(Object(s.a)({},h(j.center)),{},{radius:g}))]})},q=function(){var e=Object(r.useRef)(),t=Object(r.useState)(),n=Object(o.a)(t,2),i=n[0],a=n[1];return Object(r.useEffect)((function(){var t=function(){var t=e.current.getBoundingClientRect(),n=t.width,i=t.height;a({width:n,height:i})},n=f("resize",t);return t(),n}),[]),Object(P.jsx)("div",{className:"page",children:Object(P.jsx)("div",{className:"scene-container",ref:e,children:i&&Object(P.jsx)($,{width:i.width,height:i.height})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(P.jsx)(q,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.b976dede.chunk.js.map