(this["webpackJsonpreact-skeleton-screen"]=this["webpackJsonpreact-skeleton-screen"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),l=n.n(r),s=(n(11),n(1)),u=n.n(s),o=n(2),i=n(3),m=(n(13),function(e){var t=e.type,n="skeleton ".concat(t);return c.a.createElement("div",{className:n})}),p=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){setTimeout(Object(o.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)}))),5e3)}),[]),c.a.createElement("div",{className:"articles"},c.a.createElement("h2",null,"Articles"),c.a.createElement(m,{type:"title"}),c.a.createElement(m,{type:"text"}),c.a.createElement(m,{type:"thumbnail"}),c.a.createElement(m,{type:"avatar"}),n&&n.map((function(e){return c.a.createElement("div",{className:"article",key:e.id},c.a.createElement("h3",null,e.title),c.a.createElement("p",null,e.body))})),!n&&c.a.createElement("div",null,"Loading..."))},E=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){setTimeout(Object(o.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users/1");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)}))),5e3)}),[]),c.a.createElement("div",{className:"user"},c.a.createElement("h2",null,"User Details"),n&&c.a.createElement("div",{className:"profile"},c.a.createElement("h3",null,n.username),c.a.createElement("p",null,n.email),c.a.createElement("a",{href:n.website},n.website)),!n&&c.a.createElement("div",null,"Loading..."))};var f=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",null,c.a.createElement("h1",null,"React Skeletons")),c.a.createElement("div",{className:"content"},c.a.createElement(p,null),c.a.createElement(E,null)))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root"))},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.54dc766d.chunk.js.map