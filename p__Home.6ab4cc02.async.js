(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[371],{75941:function(K){K.exports={wrapper:"wrapper___3iih1",header:"header___iRYkE",tags:"tags___j8zxo",chart:"chart___26X92",input:"input___3IKyb"}},83173:function(K,Z,e){"use strict";e.r(Z);var _e=e(71194),$=e(62198),ue=e(77883),G=e(79587),oe=e(71153),R=e(23025),w=e(86582),h=e(2824),N=e(8870),S=e(3182),z=e(94043),O=e.n(z),X=e(75941),A=e.n(X),Q=e(77793),_=e(67294),H=e(77531),b=e.n(H),J=e(30381),j=e.n(J),o=e(85893),E=window.recordUser,q="2022-05-16",W=j()().format("YYYY-MM-DD"),y=function(){var v=[],t=j()(q),s=j()(W);for(v.push(t.format("YYYY-MM-DD"));t.isBefore(s);)t.add(1,"days"),v.push(t.format("YYYY-MM-DD"));return v}(),L={user1:{START:214.8,END:140},user2:{START:145,END:110}},ee=function(){var v=(0,S.Z)(O().mark(function t(){var s;return O().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return s=new(b()).Query("Record"),s.limit(1e3),s.descending("createdAt"),d.abrupt("return",s.find().then(function(D){return D.map(function(u){return(0,N.Z)((0,N.Z)({},u.attributes),{},{objectId:u.id})})}));case 4:case"end":return d.stop()}},t)}));return function(){return v.apply(this,arguments)}}(),te=function(t,s){if(!t.length)return[];for(var C=[],d=t[0].user1,D=t[0].user2,u=function(m,p){return m&&+((L[p].START-m)/(L[p].START-L[p].END)*100).toFixed(2)},g=function(m,p){var T=y[m],l=t.find(function(U){return U.time===T});l!=null&&l.user1&&(d=l.user1),l!=null&&l.user2&&(D=l.user2),C.unshift({time:T,user:"B",value:u(D,"user2")}),C.unshift({time:T,user:"VV",value:u(d,"user1")})},I=y.length-1,P=s||Number.MAX_SAFE_INTEGER;I>=0&&P>0;I--,P--)g(I,P);return C};Z.default=function(){var v=(0,_.useState)([]),t=(0,h.Z)(v,2),s=t[0],C=t[1],d=(0,_.useState)([]),D=(0,h.Z)(d,2),u=D[0],g=D[1],I=(0,_.useState)(7),P=(0,h.Z)(I,2),M=P[0],m=P[1],p=(0,_.useState)(),T=(0,h.Z)(p,2),l=T[0],U=T[1],re=(0,_.useState)(!1),x=(0,h.Z)(re,2),Y=x[0],k=x[1],r=(0,_.useMemo)(function(){return s.find(function(a){return a.time===W})},[s]),F=(0,_.useCallback)((0,S.Z)(O().mark(function a(){var i,n;return O().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,ee();case 2:n=c.sent,U((i=n.find(function(se){return se.time===W}))===null||i===void 0?void 0:i[E]),C(n);case 5:case"end":return c.stop()}},a)})),[]);(0,_.useEffect)(function(){setInterval(function(){window.location.reload()},1e3*60*60),F()},[F]),(0,_.useEffect)(function(){g(te(s,M))},[M,s]);var ae=(0,_.useState)(),V=(0,h.Z)(ae,2),f=V[0],ne=V[1];return(0,_.useEffect)(function(){var a=new Q.kL({container:"mountNode",autoFit:!0});ne(a)},[]),(0,_.useEffect)(function(){if(f){f.clear(),f.data(u);var a=Math.min.apply(Math,(0,w.Z)(u.map(function(n){return n.value})))-1,i=Math.max.apply(Math,(0,w.Z)(u.map(function(n){return n.value})))+1;f.scale("value",{min:a,max:i,formatter:function(B){return"".concat(B,"%")},tickCount:u.length>20?20:u.length}),f.line().position("time*value").color("user").shape("smooth"),f.point().position("time*value").color("user").size(4).shape("circle").style({stroke:"#fff",lineWidth:1}),f.render()}},[f,u]),(0,o.jsxs)("div",{className:A().wrapper,children:[(0,o.jsxs)("div",{className:A().header,children:[(0,o.jsxs)("div",{className:A().tags,children:[(0,o.jsx)(R.Z,{onClick:function(){m(7)},color:M===7?"#87d068":"",children:"7\u5929"}),(0,o.jsx)(R.Z,{onClick:function(){m(30)},color:M===30?"#87d068":"",children:"30\u5929"}),(0,o.jsx)(R.Z,{onClick:function(){m(0)},color:M===0?"#87d068":"",children:"\u5168\u90E8"})]}),E==="user1"&&(0,o.jsx)(R.Z,{color:"rgb(93 217 168)",children:r!=null&&r.user2?r.user2:"\u6682\u672A\u5F55\u5165"}),(0,o.jsx)(R.Z,{color:E==="user1"?"rgb(91 143 249)":"rgb(93 217 168)",onClick:function(){k(!Y)},children:r!=null&&r[E]?r[E]:"\u70B9\u51FB\u5F55\u5165"})]}),(0,o.jsx)("div",{id:"mountNode",className:A().chart}),(0,o.jsx)($.Z,{visible:Y,onCancel:function(){k(!1),U(r==null?void 0:r[E])},onOk:(0,S.Z)(O().mark(function a(){var i,n;return O().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return i=b().Object.extend("Record"),n=new i,r!=null&&r.objectId&&(n=b().Object.createWithoutData("Record",r.objectId)),n.set("time",W),n.set(E,l),c.next=7,n.save();case 7:window.location.reload();case 8:case"end":return c.stop()}},a)})),children:(0,o.jsx)(G.Z,{autoFocus:!0,className:A().input,value:l||void 0,onChange:function(i){U(i)}})})]})}}}]);
