(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{194:function(e,t,a){"use strict";a.r(t);var n=a(217),r=a(0),o=a.n(r),i=a(218),l=a(201),c=a(202),u=a(219),s=a.n(u);t.default=function(){var e=n.data.site;return o.a.createElement(l.a,null,o.a.createElement(c.a,{title:"Contact"}),o.a.createElement("h1",null,"Stay in Touch"),o.a.createElement("p",{className:s.a.sayHello},"Don't hesitate to reach out and say hello!"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(i.OutboundLink,{href:"mailto:"+e.siteMetadata.email+"?subject=Hello"},"Email")),o.a.createElement("li",null,o.a.createElement(i.OutboundLink,{href:"https://github.com/"+e.siteMetadata.github},"GitHub")),o.a.createElement("li",null,o.a.createElement(i.OutboundLink,{href:"https://www.linkedin.com/in/"+e.siteMetadata.linkedin+"/"},"LinkedIn"))))}},198:function(e,t,a){var n;e.exports=(n=a(200))&&n.default||n},199:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(66),i=a.n(o);a.d(t,"a",function(){return i.a});a(198),a(9).default.enqueue,r.a.createContext({})},200:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),o=a(91);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}},201:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(49),a(204),a(199)),i=a(205),l=a.n(i),c=[{path:"/blog",name:"Blog"},{path:"/me",name:"Me"},{path:"/contact",name:"Contact"}],u=function(){return r.a.createElement("header",{className:l.a.root},r.a.createElement("nav",{className:l.a.nav},r.a.createElement("div",{className:l.a.brand},r.a.createElement("h1",{className:l.a.title},r.a.createElement(o.a,{to:"/",className:l.a.titleLink},"Ryan Montoya"))),r.a.createElement("div",{className:l.a.links},c.map(function(e){return r.a.createElement(o.a,{to:e.path,key:e.path,activeClassName:l.a.linkActive,className:l.a.link},e.name)}))))};t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t),r.a.createElement("footer",null)))}},202:function(e,t,a){"use strict";a(49);var n=a(203),r=a(0),o=a.n(r),i=a(206),l=a.n(i);function c(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,c=n.data.site,u=t||c.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s - "+c.siteMetadata.name,meta:[{name:"description",content:u},{property:"og:title",content:i},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:u}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},203:function(e){e.exports={data:{site:{siteMetadata:{name:"Ryan Montoya",description:"Portfolio for Ryan Montoya",author:"@rcmontoy"}}}}},217:function(e){e.exports={data:{site:{siteMetadata:{email:"ryan@montoya.dev",github:"rcmontoy",linkedin:"rcmontoy"}}}}},218:function(e,t,a){"use strict";a(18),Object.defineProperty(t,"__esModule",{value:!0}),t.OutboundLink=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=i(a(0)),o=i(a(52));function i(e){return e&&e.__esModule?e:{default:e}}function l(e){return r.default.createElement("a",n({},e,{onClick:function(t){"function"==typeof e.onClick&&e.onClick();var a=!0;return(0!==t.button||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||t.defaultPrevented)&&(a=!1),e.target&&"_self"!==e.target.toLowerCase()&&(a=!1),window.gtag?window.gtag("event","click",{event_category:"outbound",event_label:e.href,transport_type:"beacon",event_callback:function(){a&&(document.location=e.href)}}):a&&(document.location=e.href),!1}}))}l.propTypes={href:o.default.string,target:o.default.string,onClick:o.default.func},t.OutboundLink=l}}]);
//# sourceMappingURL=component---src-pages-contact-js-1495cd4d3a9a6449911f.js.map