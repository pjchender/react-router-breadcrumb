(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},19:function(e,a,t){e.exports=t(29)},29:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(10),c=t.n(r),l=t(33),m=t(32),s=t(11),i=t(12),u=t(16),p=t(13),b=t(17),d=t(5),E=t(31),h=t(7),v=[{path:"/",component:function(e){var a=e.location;return o.a.createElement("div",null,o.a.createElement("h1",{className:"py-3"},"Home"),o.a.createElement(k,{locationPath:a.pathname}))},exact:!0,breadcrumbName:"Home"},{path:"/books",component:function(e){var a=e.location;return o.a.createElement("div",null,o.a.createElement("h1",{className:"py-3"},"Books"),o.a.createElement(k,{locationPath:a.pathname,onMatchedRoutes:function(e){return[{route:{path:"/",breadcrumbName:"Home"}}].concat(Object(h.a)(e))}}))},breadcrumbName:"Book"},{path:"/electronics",component:function(e){var a=e.route,t=e.location;return o.a.createElement("div",null,o.a.createElement("h1",{className:"py-3"},"Electronics"),o.a.createElement(k,{locationPath:t.pathname,onMatchedRoutes:function(e){return[{route:{path:"/",breadcrumbName:"Home"}}].concat(Object(h.a)(e))}}),Object(d.b)(a.routes))},breadcrumbName:"Electronics",routes:[{path:"/electronics/mobile",component:function(){return o.a.createElement("h3",null,"Mobile Phone")},breadcrumbName:"Mobile Phone"},{path:"/electronics/desktop",component:function(){return o.a.createElement("h3",null,"Desktop PC")},breadcrumbName:"Desktop PC"},{path:"/electronics/laptop",component:function(){return o.a.createElement("h3",null,"Laptop")},breadcrumbName:"Laptop"}]}],N=t(15),f=t.n(N),g=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light bg-light"},o.a.createElement(E.a,{className:"navbar-brand",to:"/"},o.a.createElement("img",{src:f.a,alt:"react-router-breadcrumb",width:"30",height:"30"})),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarContent","aria-controls":"navbarContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarContent"},o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(E.a,{className:"nav-link",to:"/"},"Home")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(E.a,{className:"nav-link",to:"/books"},"Books")),o.a.createElement("li",{className:"nav-item dropdown"},o.a.createElement(E.a,{className:"nav-link dropdown-toggle",to:"/electronics",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Electronics"),o.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},o.a.createElement(E.a,{className:"dropdown-item",to:"/electronics/mobile"},"Mobile Phone"),o.a.createElement(E.a,{className:"dropdown-item",to:"/electronics/desktop"},"Desktop PC"),o.a.createElement(E.a,{className:"dropdown-item",to:"/electronics/laptop"},"Laptop"))))))},k=function(e){var a=e.locationPath,t=e.onMatchedRoutes,n=Object(d.a)(v,a);return"function"===typeof t&&(n=t(n)),o.a.createElement("nav",null,o.a.createElement("ol",{className:"breadcrumb"},n.map(function(e,t){var n=e.route,r=n.path,c=n.breadcrumbName;return r===a?o.a.createElement("li",{key:t,className:"breadcrumb-item active"},c):o.a.createElement("li",{key:t,className:"breadcrumb-item"},o.a.createElement(E.a,{to:r},c," "))})))},w=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(g,null),Object(d.b)(v))}}]),a}(n.Component);c.a.render(o.a.createElement(l.a,null,o.a.createElement(m.a,null,o.a.createElement(w,null))),document.getElementById("root"))}},[[19,2,1]]]);
//# sourceMappingURL=main.2db110b7.chunk.js.map