(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[371],{75941:function(K){K.exports={wrapper:"wrapper___3iih1",header:"header___iRYkE",tags:"tags___j8zxo",chart:"chart___26X92",input:"input___3IKyb"}},83173:function(K,Z,e){"use strict";e.r(Z);var _e=e(71194),$=e(62198),oe=e(77883),z=e(79587),ue=e(71153),P=e(23025),w=e(86582),M=e(2824),x=e(8870),W=e(3182),G=e(94043),O=e.n(G),Q=e(75941),p=e.n(Q),X=e(77793),_=e(67294),H=e(77531),j=e.n(H),J=e(30381),S=e.n(J),u=e(85893),D=window.recordUser||"caoweiwei",q="2022-05-16",R=S()().format("YYYY-MM-DD"),I=function(){var f=[],t=S()(q),r=S()(R);for(f.push(t.format("YYYY-MM-DD"));t.isBefore(r);)t.add(1,"days"),f.push(t.format("YYYY-MM-DD"));return f}(),b={user1:{START:214.8,END:140},user2:{START:145,END:110}},ee=function(){var f=(0,W.Z)(O().mark(function t(){var r;return O().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return r=new(j()).Query("Record"),r.limit(1e3),r.descending("createdAt"),v.abrupt("return",r.find().then(function(h){return h.map(function(o){return(0,x.Z)((0,x.Z)({},o.attributes),{},{objectId:o.id})})}));case 4:case"end":return v.stop()}},t)}));return function(){return f.apply(this,arguments)}}(),te=function(t,r){if(!t.length)return[];for(var C=[],v=t[0].user1,h=t[0].user2,o=function(l,i){return l&&+((b[i].START-l)/(b[i].START-b[i].END)*100).toFixed(2)},g=function(l){var i=I[l],c=t.find(function(A){return A.time===i});c!=null&&c.user1&&(v=c.user1),c!=null&&c.user2&&(h=c.user2),C.push({time:i,user:"VV",value:o(v,"user1")}),C.push({time:i,user:"B",value:o(h,"user2")})},T=r&&I.length>r?I.length-r:0;T<I.length;T++)g(T);return C};Z.default=function(){var f=(0,_.useState)([]),t=(0,M.Z)(f,2),r=t[0],C=t[1],v=(0,_.useState)([]),h=(0,M.Z)(v,2),o=h[0],g=h[1],T=(0,_.useState)(7),U=(0,M.Z)(T,2),l=U[0],i=U[1],c=(0,_.useState)(),A=(0,M.Z)(c,2),y=A[0],L=A[1],re=(0,_.useState)(!1),N=(0,M.Z)(re,2),Y=N[0],k=N[1],a=(0,_.useMemo)(function(){return r.find(function(n){return n.time===R})},[r]),V=(0,_.useCallback)((0,W.Z)(O().mark(function n(){var d,s;return O().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,ee();case 2:s=m.sent,L((d=s.find(function(se){return se.time===R}))===null||d===void 0?void 0:d[D]),C(s);case 5:case"end":return m.stop()}},n)})),[]);(0,_.useEffect)(function(){setInterval(function(){window.location.reload()},1e3*60*60),V()},[V]),(0,_.useEffect)(function(){g(te(r,l))},[l,r]);var ae=(0,_.useState)(),F=(0,M.Z)(ae,2),E=F[0],ne=F[1];return(0,_.useEffect)(function(){var n=new X.kL({container:"mountNode",autoFit:!0});ne(n)},[]),(0,_.useEffect)(function(){if(E){E.clear(),E.data(o);var n=Math.min.apply(Math,(0,w.Z)(o.map(function(s){return s.value})))-1,d=Math.max.apply(Math,(0,w.Z)(o.map(function(s){return s.value})))+1;E.scale("value",{min:n,max:d,formatter:function(B){return"".concat(B,"%")},tickCount:o.length>20?20:o.length}),E.line().position("time*value").color("user").shape("smooth"),E.point().position("time*value").color("user").size(4).shape("circle").style({stroke:"#fff",lineWidth:1}),E.render()}},[E,o]),(0,u.jsxs)("div",{className:p().wrapper,children:[(0,u.jsxs)("div",{className:p().header,children:[(0,u.jsxs)("div",{className:p().tags,children:[(0,u.jsx)(P.Z,{onClick:function(){i(7)},color:l===7?"#87d068":"",children:"7\u5929"}),(0,u.jsx)(P.Z,{onClick:function(){i(30)},color:l===30?"#87d068":"",children:"30\u5929"}),(0,u.jsx)(P.Z,{onClick:function(){i(0)},color:l===0?"#87d068":"",children:"\u5168\u90E8"})]}),D==="user1"&&(0,u.jsx)(P.Z,{color:"rgb(93 217 168)",children:a!=null&&a.user2?a.user2:"\u6682\u672A\u5F55\u5165"}),(0,u.jsx)(P.Z,{color:D==="user1"?"rgb(91 143 249)":"rgb(93 217 168)",onClick:function(){k(!Y)},children:a!=null&&a[D]?a[D]:"\u70B9\u51FB\u5F55\u5165"})]}),(0,u.jsx)("div",{id:"mountNode",className:p().chart}),(0,u.jsx)($.Z,{visible:Y,onCancel:function(){k(!1),L(a==null?void 0:a[D])},onOk:(0,W.Z)(O().mark(function n(){var d,s;return O().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return d=j().Object.extend("Record"),s=new d,a!=null&&a.objectId&&(s=j().Object.createWithoutData("Record",a.objectId)),s.set("time",R),s.set(D,y),m.next=7,s.save();case 7:window.location.reload();case 8:case"end":return m.stop()}},n)})),children:(0,u.jsx)(z.Z,{autoFocus:!0,className:p().input,value:y||void 0,onChange:function(d){L(d)}})})]})}}}]);
