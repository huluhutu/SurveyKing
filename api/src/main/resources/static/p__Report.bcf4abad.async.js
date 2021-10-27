(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[6090,6185],{60674:function(){},43711:function($,R,t){"use strict";t.d(R,{o:function(){return g}});var u=t(67294),y=t(78336),g=function(){var C=(0,u.useContext)(y.ZX);return C.store}},78336:function($,R,t){"use strict";t.d(R,{ZX:function(){return y},fQ:function(){return g},hi:function(){return D}});var u=t(67294),y=(0,u.createContext)({}),g=y.Provider,A=t(34792),C=t(48086),v=t(3182),w=t(94043),e=t.n(w),c=t(57147);function E(l){for(var s=l+"=",o=document.cookie.split(";"),a=0;a<o.length;a++){var r=o[a].trim();if(r.indexOf(s)==0)return r.substring(s.length,r.length)}return""}function p(l,s,o){return I.apply(this,arguments)}function I(){return I=(0,v.Z)(e().mark(function l(s,o,a){var r;return e().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return r={method:s.toUpperCase(),credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json","Cache-Control":"no-cache","X-XSRF-TOKEN":E("XSRF-TOKEN"),Expires:"-1",Pragma:"no-cache"},body:a},a&&(r.body=JSON.stringify(a)),d.next=4,fetch(o,r).then(function(f){return f.json()}).then(function(f){return f.code!==200&&C.default.error(f.message),f});case 4:return d.abrupt("return",d.sent);case 5:case"end":return d.stop()}},l)})),I.apply(this,arguments)}var D={put:function(s,o){return(0,v.Z)(e().mark(function a(){return e().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,p("PUT",s,o);case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},a)}))()},delete:function(s){return(0,v.Z)(e().mark(function o(){return e().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p("DELETE",s);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},o)}))()},post:function(s,o){return(0,v.Z)(e().mark(function a(){return e().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,p("POST",s,o);case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},a)}))()},patch:function(s,o){return(0,v.Z)(e().mark(function a(){return e().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,p("PATCH",s,o);case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},a)}))()},get:function(s){return(0,v.Z)(e().mark(function o(){return e().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p("GET",s).then(function(i){if(i.code===200)return i.data});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},o)}))()},getWithPagination:function(s,o){var a=this;return(0,v.Z)(e().mark(function r(){return e().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",a.get(n(s,o)).then(function(f){if(f)return{records:f.records,pagination:{current:f.current,pageSize:f.size,total:f.total}}}));case 1:case"end":return d.stop()}},r)}))()},loadSchema:function(s){for(var o=arguments.length,a=new Array(o>1?o-1:0),r=1;r<o;r++)a[r-1]=arguments[r];return this.get("/api/projects/".concat(s,"?fields=").concat(a.join(",")))},loadData:function(s,o){for(var a=arguments.length,r=new Array(a>2?a-2:0),i=2;i<a;i++)r[i-2]=arguments[i];return this.getWithPagination("/api/answers?shortId=".concat(s,"&fields=").concat(r.join(",")),o)},saveAnswer:function(s){return this.post("/api/answers",s)},updateAnswer:function(s){return this.patch("/api/answers",s)},deleteAnswer:function(s){return this.delete("/api/answers?ids=".concat(s.join(",")))},saveSurvey:function(s){return this.post("/api/projects",{survey:s})},updateSurvey:function(s,o){return this.patch("/api/projects",{survey:o,shortId:s})}};function n(l,s){var o=[];return Object.keys(s).forEach(function(a){var r=s[a];o.push("".concat(a,"=").concat(r instanceof Array?r.join(","):r))}),l.indexOf("?")!==-1?"".concat(l,"&").concat(o.join("&")):"".concat(l,"?").concat(o.join("&"))}},46185:function($,R,t){"use strict";t.r(R),t.d(R,{Report:function(){return it},default:function(){return yt}});var u=t(67294),y=t(60674),g=t(77613),A=t(2067),C=t(43711),v=(0,u.createContext)({}),w=v.Provider,e=v.Consumer;function c(m){var j=["Single","Multi","Cascader","Select","QuestionSet"];if(j.includes(m.type))return!0;if(m.type==="FillBlank"||m.type==="MultipleBlank"){var S;if((S=m.children)!==null&&S!==void 0&&S.find(function(h){var T;return((T=h.attribute)===null||T===void 0?void 0:T.dataType)==="number"}))return!0}return!1}var E={Single:"\u5355\u9009\u9898",Multi:"\u591A\u9009\u9898",Cascader:"\u7EA7\u8054\u9898",Select:"\u4E0B\u62C9\u9898",FillBlank:"\u586B\u7A7A\u9898",MultipleBlank:"\u591A\u9879\u586B\u7A7A\u9898"},p=t(69610),I=t(54941),D=function(){function m(){(0,p.Z)(this,m),this._init=this._init.bind(this),this._cleanUp=this._cleanUp.bind(this),this.convertFromInput=this.convertFromInput.bind(this)}return(0,I.Z)(m,[{key:"_init",value:function(){this.canvas=document.createElement("canvas"),this.imgPreview=document.createElement("img"),this.imgPreview.style="position: absolute; top: -9999px",document.body.appendChild(this.imgPreview),this.canvasCtx=this.canvas.getContext("2d")}},{key:"_cleanUp",value:function(){document.body.removeChild(this.imgPreview)}},{key:"convertFromInput",value:function(S,h){this._init();var T=this;this.imgPreview.onload=function(){var Q=new Image;T.canvas.width=T.imgPreview.clientWidth,T.canvas.height=T.imgPreview.clientHeight,Q.crossOrigin="anonymous",Q.src=T.imgPreview.src,Q.onload=function(){T.canvasCtx.drawImage(Q,0,0);var O=T.canvas.toDataURL("image/png");typeof h=="function"&&h(O),T._cleanUp()}},this.imgPreview.src=S}}]),m}(),n=t(85893),l=function(j){var S;return j?(S=j.children)===null||S===void 0?void 0:S.filter(function(h){return c(h)}).map(function(h){return h.type==="QuestionSet"?(0,n.jsx)(o,{schema:h},h.id):(0,n.jsx)(ct,{schema:h},h.id)}):(0,n.jsx)(n.Fragment,{})},s=(0,g.P)(function(){var m=(0,C.o)(),j=m.schema;return(0,n.jsx)("div",{children:l(j)})}),o=function(j){return(0,n.jsx)("div",{children:l(j.schema)})},a=t(13062),r=t(71230),i=t(66456),d=t(11254),f=t(89032),x=t(15746),W=t(57663),F=t(71577),J=t(2824),H=t(3375),q=t(68023),et=t(96262),nt=t(24894),P=t(79110),b=t(8690),U=t(17813),M=t(79164),Y=t(19076),V=t(23163);q.D([b.N,U.N,M.N,nt.N,P.N,V.N,Y.N]);var ot=(0,u.forwardRef)(function(m,j){var S=m.data,h=m.labels,T=m.loading,Q=m.name,O=m.type,_=(0,u.useRef)(null),B=(0,u.useRef)();return(0,u.useEffect)(function(){if(_.current){var G=et.S1(_.current);return B.current=G,function(){G.dispose()}}},[]),(0,u.useImperativeHandle)(j,function(){return{saveAsImage:function(){var K;return(K=B.current)===null||K===void 0?void 0:K.getDataURL({type:"png"})}}}),(0,u.useEffect)(function(){!T&&B.current?(B.current.hideLoading(),B.current.clear(),O==="horizontalBar"?B.current.setOption({title:{text:Q},tooltip:{show:!0,trigger:"item"},xAxis:{show:!1},yAxis:{type:"category",data:h},series:[{data:S,type:"bar",barWidth:15,showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}]}):O==="pie"?B.current.setOption({title:{text:Q},tooltip:{show:!0,trigger:"item"},series:[{name:Q,type:"pie",radius:"60%",data:S==null?void 0:S.map(function(G,K){return{name:h[K],value:G}}),emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},labelLine:{length:10,length2:25}}]}):O==="bar"&&B.current.setOption({title:{text:Q},tooltip:{show:!0,trigger:"item"},xAxis:{type:"category",data:h,axisLabel:{interval:0,rotate:30}},yAxis:{show:!1},series:[{data:S,type:"bar",barWidth:15,showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}]})):B.current&&B.current.showLoading()},[T,O,S]),(0,n.jsx)("div",{ref:_,style:{height:300}})}),rt=t(69646),ct=(0,g.P)(function(m){var j,S,h=m.schema,T=(0,u.useContext)(v),Q=T.loading,O=T.reportData,_=(0,u.useState)("bar"),B=(0,J.Z)(_,2),G=B[0],K=B[1],ut=(O==null||(j=O.statistics[h.id])===null||j===void 0?void 0:j.total)||0,st=(0,u.useRef)(null),xt=(0,u.useMemo)(function(){return h.type==="FillBlank"?[{title:"\u5408\u8BA1",dataIndex:"sum",width:"25%"},{title:"\u5E73\u5747\u503C",dataIndex:"average",width:"25%"},{title:"\u6700\u9AD8\u503C",dataIndex:"max",width:"25%"},{title:"\u6700\u4F4E\u503C",dataIndex:"min",width:"25%"}]:[{title:"\u9009\u9879",dataIndex:"title",width:"50%"},{title:"\u6570\u636E\u91CF",dataIndex:"total",width:"25%",sorter:function(Z,N){return Z.total-N.total},showSorterTooltip:!1},{title:"\u5360\u6BD4",dataIndex:"percent",width:"25%",sorter:function(Z,N){return parseFloat(Z.percent)-parseFloat(N.percent)},showSorterTooltip:!1}]},[h.type]),Ct=function(){var Z,N=(Z=st.current)===null||Z===void 0?void 0:Z.saveAsImage();N&&new D().convertFromInput(N,function(X){var z=document.createElement("a");z.href=X,z.download="haha.png",z.click(),z.remove()})},jt=function(){var Z;return(Z=h.children)===null||Z===void 0?void 0:Z.map(function(N){var X=N.id,z=N.title,L=O==null?void 0:O.statistics[X];if(L){var k=L.total||0,At=(k/(ut||1)*100).toFixed(2)+"%";return{id:X,title:(0,rt.WO)(z),total:k,percent:At,min:L.min,max:L.max,average:L.average,sum:L.sum}}return{id:X,title:(0,rt.WO)(z),total:0,percent:"0%"}})},Et=function(){var Z,N;if(h.type==="FillBlank"||h.type==="MatrixFillBlank")return(0,n.jsx)(n.Fragment,{});var X=((Z=h.children)===null||Z===void 0?void 0:Z.map(function(L){return(0,rt.WO)(L.title)}))||[],z=((N=h.children)===null||N===void 0?void 0:N.map(function(L){var k;return(O==null||(k=O.statistics[L.id])===null||k===void 0?void 0:k.total)||0}))||[];return(0,n.jsxs)(x.Z,{span:24,className:"question-chart",children:[(0,n.jsx)("div",{className:"question-chart-btns",children:(0,n.jsxs)(F.Z.Group,{size:"small",children:[(0,n.jsx)(F.Z,{type:"link",onClick:function(){return K("bar")},children:"\u6761\u5F62\u56FE"}),(0,n.jsx)(F.Z,{type:"link",onClick:function(){return K("horizontalBar")},children:"\u67F1\u5F62\u56FE"}),(0,n.jsx)(F.Z,{type:"link",onClick:function(){return K("pie")},children:"\u6247\u5F62\u56FE"}),(0,n.jsx)(F.Z,{type:"link",icon:(0,n.jsx)("div",{className:"divider"})}),(0,n.jsx)(F.Z,{type:"link",icon:(0,n.jsx)(H.Z,{}),onClick:Ct})]})}),(0,n.jsx)("div",{children:(0,n.jsx)(ot,{type:G,loading:Q,labels:X,data:z,ref:st})})]})},St=function(){return(0,n.jsx)(x.Z,{span:24,children:(0,n.jsx)(d.Z,{pagination:!1,size:"small",bordered:!0,columns:xt,rowKey:"id",dataSource:jt()})})};return(0,n.jsx)("div",{className:"question-item",children:(0,n.jsxs)(r.Z,{gutter:[12,12],className:"question-content",children:[(0,n.jsx)(x.Z,{xs:24,sm:12,children:(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(x.Z,{span:24,children:(0,n.jsx)("span",{className:"question-label",children:(0,rt.WO)(h.title)})}),Et()]})}),(0,n.jsx)(x.Z,{xs:24,sm:12,children:(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(x.Z,{span:24,children:(0,n.jsx)("div",{className:"question-title",children:(0,n.jsxs)("div",{className:"question-data-desc",children:[(0,n.jsxs)("div",{children:["\u7C7B\u578B\uFF1A",E[h.type]]}),(0,n.jsxs)("div",{children:["\u5FC5\u586B\uFF1A",(S=h.attribute)!==null&&S!==void 0&&S.required?"\u662F":"\u5426"]}),(0,n.jsxs)("div",{children:[ut,"\u6761\u6570\u636E"]})]})})}),St()]})})]})})}),It=t(59250),lt=t(13013),Rt=t(30887),at=t(14289),Tt=t(47673),dt=t(4107),vt=t(19957),ft=t(83663),ht=dt.Z.Search,mt=(0,g.P)(function(){var m=(0,u.useContext)(v),j=m.reportData,S=(0,n.jsxs)(at.Z,{children:[(0,n.jsx)(at.Z.Item,{children:"\u6309\u6570\u636E\u5185\u5BB9\u7B5B\u9009"}),(0,n.jsx)(at.Z.Item,{children:"\u6309\u63D0\u4EA4\u65E5\u671F\u7B5B\u9009"})]});return(0,n.jsxs)("div",{className:"report-header",children:[(0,n.jsxs)("span",{children:["\u5171",(j==null?void 0:j.total)||0,"\u6761\u6570\u636E"]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(ht,{size:"small",placeholder:"\u641C\u7D22",onSearch:function(T){m.loadReportData(T)},style:{width:200,marginRight:10}}),(0,n.jsx)(lt.Z,{overlay:S,placement:"bottomRight",children:(0,n.jsx)(vt.Z,{style:{cursor:"pointer"}})})]}),(0,n.jsx)(ft.Z,{})]})}),gt=function(){return(0,n.jsx)(mt,{})},pt=function(){return(0,n.jsx)("div",{className:"report-container",children:(0,n.jsx)(s,{})})},it=(0,g.P)(function(){var m=(0,C.o)(),j=(0,u.useMemo)(function(){return new A.Cu(m)},[m]);return(0,u.useEffect)(function(){j.loadReportData()},[]),(0,n.jsx)("div",{className:"survey-report",children:(0,n.jsxs)(w,{value:j,children:[(0,n.jsx)(gt,{}),(0,n.jsx)(pt,{})]})})}),yt=it},23063:function($,R,t){"use strict";t.d(R,{ZX:function(){return y},Gb:function(){return A},Y7:function(){return v}});var u=t(67294),y=u.createContext({}),g=u.createContext({}),A=u.createContext({}),C=u.createContext({}),v=u.createContext({})},69646:function($,R,t){"use strict";t.d(R,{Gb:function(){return y.Gb},Y7:function(){return y.Y7},ZX:function(){return y.ZX},mO:function(){return c},Gr:function(){return s},JH:function(){return u.JH},Cp:function(){return A},VS:function(){return E.VS},j1:function(){return u.j1},QT:function(){return u.QT},RY:function(){return u.RY},LQ:function(){return e},$Z:function(){return C},WO:function(){return E.WO}});var u=t(61974),y=t(23063),g=function(a){return Array.isArray(a)?a:a?[a]:[]},A=function(a){for(var r=arguments.length,i=new Array(r>1?r-1:0),d=1;d<r;d++)i[d-1]=arguments[d];return i.forEach(function(f){return a.query(a.path.concat(f)).take(function(x){return x.display="none"})})},C=function(a){for(var r=arguments.length,i=new Array(r>1?r-1:0),d=1;d<r;d++)i[d-1]=arguments[d];return i.forEach(function(f){return a.query(a.path.concat(f)).take(function(x){return x.display="visible"})})},v=function(a){for(var r=arguments.length,i=new Array(r>1?r-1:0),d=1;d<r;d++)i[d-1]=arguments[d];return i.forEach(function(f){return a.query(a.path.concat(f)).take(function(x){x.display==="none"&&a.value&&(x.caches.value=void 0,delete a.value[f]),x.display="visible"})})},w=t(16308),e=function(a,r){return window.requestIdleCallback(a,r)},c=function(a){window.cancelIdleCallback(a)},E=t(84821),p=t(86582),I=t(11849),D=t(67294),n=t(95566),l=t(85893);function s(o,a){return function(r){var i=r.name||(a==null?void 0:a.name);if(!i)throw new Error("field name \u672A\u5B9A\u4E49");var d=(0,D.useMemo)(function(){return(0,n.$j)(o,(0,n.jM)(function(f,x){return(0,I.Z)((0,I.Z)({},f),{},{onChange:function(F){x.onInput(F)},hasError:x.errors.length>0})}))},[]);return(0,l.jsx)(n.gN,(0,I.Z)((0,I.Z)((0,I.Z)({},r),a),{},{name:i,component:[d,r],reactions:[function(f){var x=r.syncDisplay;x&&(typeof x=="string"||typeof x=="object"&&Object.keys(x).forEach(function(H){var q=f.query(f.path.parent().concat(H)).get("value");x[H].includes(q)?f.display="visible":f.display="none"}));var W=r.mirrorFieldAddress;if(W){var F=f.query(W),J=F.get("value");J?f.visible=!0:F.take()!==void 0&&(f.visible=!1)}}].concat((0,p.Z)(r.reactions||[]))}))}}},61974:function($,R,t){"use strict";t.d(R,{JH:function(){return A},RY:function(){return C},QT:function(){return v},j1:function(){return w}});var u={},y={},g={questionTypes:{},questionSettings:{},questionOperations:{},registerDesignerIcons:function(c){Object.assign(u,c)},getDesignerIcon:function(c){return u[c]},registerQuestionTemplates:function(c){Object.assign(y,c)},getQuestionTemplate:function(c){return y[c]||{type:c}}},A=function(){return g};function C(e,c){g.questionTypes[e]=c}function v(e,c){g.questionSettings[e]=c}function w(e,c){g.questionOperations[e]=c}},84821:function($,R,t){"use strict";t.d(R,{vC:function(){return g},JY:function(){return A},WO:function(){return v},VS:function(){return w}});var u=t(9963),y=t(86582);function g(e){var c=1;for(var E in e)if(!!e.hasOwnProperty(E)&&typeof e[E]=="object"&&A(e[E])){var p=g(e[E])+1;c=Math.max(p,c)}return c}function A(e){return e==null||typeof e=="number"&&e.toString()==="NaN"?!1:!(typeof e=="string"&&e.trim()==="")}var C={compile:function(c,E){var p=Object.keys(E||{}),I=p.map(function(D){return E[D]});return(0,u.Z)(Function,(0,y.Z)(p).concat(["return (".concat(c,");")])).apply(void 0,(0,y.Z)(I))}};function v(e){var c=document.createElement("div");return c.innerHTML=e,c.textContent||c.innerText||""}function w(e,c){for(var E=arguments.length,p=new Array(E>2?E-2:0),I=2;I<E;I++)p[I-2]=arguments[I];return e.length===0?p:c>=e.length?e.concat(p):e.reduce(function(D,n,l){return c===l&&D.push.apply(D,p),D.push(n),D},[])}},57838:function($,R,t){"use strict";t.d(R,{Z:function(){return g}});var u=t(28481),y=t(67294);function g(){var A=y.useReducer(function(w){return w+1},0),C=(0,u.Z)(A,2),v=C[1];return v}},25378:function($,R,t){"use strict";var u=t(28481),y=t(67294),g=t(24308);function A(){var C=(0,y.useState)({}),v=(0,u.Z)(C,2),w=v[0],e=v[1];return(0,y.useEffect)(function(){var c=g.ZP.subscribe(function(E){e(E)});return function(){return g.ZP.unsubscribe(c)}},[]),w}R.Z=A},16308:function($,R,t){var u,y,g;(function(A){y=[],u=A,g=typeof u=="function"?u.apply(R,y):u,g!==void 0&&($.exports=g)})(function(){"use strict";var A,C,v,w,e=typeof window!="undefined"?window:typeof t.g!=null?t.g:this||{},c=e.cancelRequestAnimationFrame&&e.requestAnimationFrame||setTimeout,E=e.cancelRequestAnimationFrame||clearTimeout,p=[],I=0,D=!1,n=7,l=35,s=125,o=0,a=0,r=0,i={get didTimeout(){return!1},timeRemaining:function(){var P=n-(Date.now()-a);return P<0?0:P}},d=f(function(){n=22,s=66,l=0});function f(P){var b,U,M=99,Y=function(){var V=Date.now()-U;V<M?b=setTimeout(Y,M-V):(b=null,P())};return function(){U=Date.now(),b||(b=setTimeout(Y,M))}}function x(){D&&(w&&E(w),v&&clearTimeout(v),D=!1)}function W(){s!=125&&(n=7,s=125,l=35,D&&(x(),H())),d()}function F(){w=null,v=setTimeout(q,0)}function J(){v=null,c(F)}function H(){D||(C=s-(Date.now()-a),A=Date.now(),D=!0,l&&C<l&&(C=l),C>9?v=setTimeout(J,C):(C=0,J()))}function q(){var P,b,U,M=n>9?9:1;if(a=Date.now(),D=!1,v=null,I>2||a-C-50<A)for(b=0,U=p.length;b<U&&i.timeRemaining()>M;b++)P=p.shift(),r++,P&&P(i);p.length?H():I=0}function et(P){return o++,p.push(P),H(),o}function nt(P){var b=P-1-r;p[b]&&(p[b]=null)}if(!e.requestIdleCallback||!e.cancelIdleCallback)e.requestIdleCallback=et,e.cancelIdleCallback=nt,e.document&&document.addEventListener&&(e.addEventListener("scroll",W,!0),e.addEventListener("resize",W),document.addEventListener("focus",W,!0),document.addEventListener("mouseover",W,!0),["click","keypress","touchstart","mousedown"].forEach(function(P){document.addEventListener(P,W,{capture:!0,passive:!0})}),e.MutationObserver&&new MutationObserver(W).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}));else try{e.requestIdleCallback(function(){},{timeout:0})}catch(P){(function(b){var U,M;if(e.requestIdleCallback=function(Y,V){return V&&typeof V.timeout=="number"?b(Y,V.timeout):b(Y)},e.IdleCallbackDeadline&&(U=IdleCallbackDeadline.prototype)){if(M=Object.getOwnPropertyDescriptor(U,"timeRemaining"),!M||!M.configurable||!M.get)return;Object.defineProperty(U,"timeRemaining",{value:function(){return M.get.call(this)},enumerable:!0,configurable:!0})}})(e.requestIdleCallback)}return{request:et,cancel:nt}})}}]);
