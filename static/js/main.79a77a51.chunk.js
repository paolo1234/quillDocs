(this.webpackJsonpquilldocs=this.webpackJsonpquilldocs||[]).push([[0],{89:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),u=n(45),i=n.n(u),a=n(28),l=n(46),s=n.n(l),r=(n(57),n(47)),f=n(1),b=n(4);function d(){var e=Object(f.g)().id,t=Object(c.useState)(),n=Object(a.a)(t,2),o=n[0],u=n[1],i=Object(c.useState)(),l=Object(a.a)(i,2),d=l[0],j=l[1],O=[[{header:[1,2,3,4,5,6,!1]}],[{font:[]}],[{list:"ordered"},{list:"bullet"}],["bold","italic","underline"],[{color:[]},{background:[]}],[{script:"sub"},{script:"super"}],[{align:[]}],["image","blockquote","code-block"],["clean"]];Object(c.useEffect)((function(){var e=Object(r.io)("http://localhost:3001");return u(e),function(){e.disconnect()}}),[]),Object(c.useEffect)((function(){if(null!=o&&null!=d){var e=function(e,t,n){"user"===n&&o.emit("send-changes",e)};return d.on("text-change",e),function(){d.off("text-change",e)}}}),[o,d]),Object(c.useEffect)((function(){if(null!=o&&null!=d){var e=function(e){d.updateContents(e)};return o.on("receive-changes",e),function(){o.off("receive-changes",e)}}}),[o,d]),Object(c.useEffect)((function(){null!=o&&null!=d&&(o.once("load-document",(function(e){d.setContents(e),d.enable()})),o.emit("get-document",e))}),[o,d,e]),Object(c.useEffect)((function(){if(null!=o&&null!=d){var e=setInterval((function(){o.emit("save-document",d.getContents())}),2e3);return function(){clearInterval(e)}}}),[o,d,e]);var h=Object(c.useCallback)((function(e){if(null!=e){e.innerHTML="";var t=document.createElement("div");e.append(t);var n=new s.a(t,{theme:"snow",modules:{toolbar:O}});n.disable(),n.setText("Loading..."),j(n)}}),[]);return Object(b.jsx)("div",{className:"container",ref:h})}var j=n(26),O=n(92);function h(){return Object(b.jsx)(j.a,{basename:"/quillDocs",children:Object(b.jsxs)(f.d,{children:[Object(b.jsx)(f.b,{path:"/",exact:!0,children:Object(b.jsx)(f.a,{to:"/documents/".concat(Object(O.a)())})}),Object(b.jsx)(f.b,{path:"/documents/:id",children:Object(b.jsx)(d,{})})]})})}n(89);i.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.79a77a51.chunk.js.map