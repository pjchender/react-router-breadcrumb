(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},19:function(e,a,t){e.exports=t(29)},29:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(10),c=t.n(o),l=t(33),m=t(32),s=t(11),i=t(12),u=t(16),b=t(13),p=t(17),d=t(5),E=t(31),h=t(7),v="/react-router-breadcrumb";console.log("rootPath",v),console.log("root","".concat(v,"/react-router-breadcrumb"));var N=[{path:"".concat(v,"/"),component:function(e){var a=e.location;return r.a.createElement("div",null,r.a.createElement("h1",{className:"py-3"},"Home"),r.a.createElement(w,{locationPath:a.pathname}))},exact:!0,breadcrumbName:"Home"},{path:"".concat(v,"/books"),component:function(e){var a=e.location;return r.a.createElement("div",null,r.a.createElement("h1",{className:"py-3"},"Books"),r.a.createElement(w,{locationPath:a.pathname,onMatchedRoutes:function(e){return[{route:{path:"/",breadcrumbName:"Home"}}].concat(Object(h.a)(e))}}))},breadcrumbName:"Book"},{path:"".concat(v,"/electronics"),component:function(e){var a=e.route,t=e.location;return r.a.createElement("div",null,r.a.createElement("h1",{className:"py-3"},"Electronics"),r.a.createElement(w,{locationPath:t.pathname,onMatchedRoutes:function(e){return[{route:{path:"/",breadcrumbName:"Home"}}].concat(Object(h.a)(e))}}),Object(d.b)(a.routes))},breadcrumbName:"Electronics",routes:[{path:"".concat(v,"/electronics/mobile"),component:function(){return r.a.createElement("h3",null,"Mobile Phone")},breadcrumbName:"Mobile Phone"},{path:"".concat(v,"/electronics/desktop"),component:function(){return r.a.createElement("h3",null,"Desktop PC")},breadcrumbName:"Desktop PC"},{path:"".concat(v,"/electronics/laptop"),component:function(){return r.a.createElement("h3",null,"Laptop")},breadcrumbName:"Laptop"}]}],g=t(15),f=t.n(g);console.log("rootPath","/react-router-breadcrumb");var k=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light bg-light"},r.a.createElement(E.a,{className:"navbar-brand",to:"/"},r.a.createElement("img",{src:f.a,alt:"react-router-breadcrumb",width:"30",height:"30"})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarContent","aria-controls":"navbarContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarContent"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.a,{className:"nav-link",to:"".concat("/react-router-breadcrumb","/")},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.a,{className:"nav-link",to:"".concat("/react-router-breadcrumb","/books")},"Books")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement(E.a,{className:"nav-link dropdown-toggle",to:"".concat("/react-router-breadcrumb","/electronics"),id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Electronics"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},r.a.createElement(E.a,{className:"dropdown-item",to:"/electronics/mobile"},"Mobile Phone"),r.a.createElement(E.a,{className:"dropdown-item",to:"/electronics/desktop"},"Desktop PC"),r.a.createElement(E.a,{className:"dropdown-item",to:"/electronics/laptop"},"Laptop"))))))},w=function(e){var a=e.locationPath,t=e.onMatchedRoutes,n=Object(d.a)(N,a);return"function"===typeof t&&(n=t(n)),r.a.createElement("nav",null,r.a.createElement("ol",{className:"breadcrumb"},n.map(function(e,t){var n=e.route,o=n.path,c=n.breadcrumbName;return o===a?r.a.createElement("li",{key:t,className:"breadcrumb-item active"},c):r.a.createElement("li",{key:t,className:"breadcrumb-item"},r.a.createElement(E.a,{to:o},c," "))})))},P=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(k,null),Object(d.b)(N))}}]),a}(n.Component);c.a.render(r.a.createElement(l.a,null,r.a.createElement(m.a,null,r.a.createElement(P,null))),document.getElementById("root"))}},[[19,2,1]]]);
//# sourceMappingURL=main.44c1f314.chunk.js.map