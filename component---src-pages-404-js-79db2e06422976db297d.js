(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{196:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(208),c=a(206);e.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},203:function(t,e,a){var n;t.exports=(n=a(205))&&n.default||n},204:function(t,e,a){"use strict";var n=a(0),r=a.n(n),o=a(66),c=a.n(o);a.d(e,"a",function(){return c.a});a(203),a(9).default.enqueue,r.a.createContext({})},205:function(t,e,a){"use strict";a.r(e);a(18);var n=a(0),r=a.n(n),o=a(91);e.default=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(o.a,Object.assign({location:e,pageResources:a},a.json)):null}},206:function(t,e,a){"use strict";a(49);var n=a(207),r=a(0),o=a.n(r),c=a(210),i=a.n(c),l=function(t){var e=t.description,a=t.lang,r=t.meta,c=t.title,l=t.blogPost,s=n.data.site,m=e||s.siteMetadata.description,u=[{name:"description",content:m},{property:"og:title",content:c},{property:"og:description",content:m},{property:"og:type",content:l?"article":"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:m}].concat(r);return o.a.createElement(i.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s - "+s.siteMetadata.name,meta:u})};l.defaultProps={lang:"en",meta:[],description:"",blogPost:!1},e.a=l},207:function(t){t.exports={data:{site:{siteMetadata:{name:"Ryan Montoya",description:"Hi I'm Ryan. I enjoy sharing my thoughts and experiences with software development, technology, and photography through in-depth candid articles.",author:"@rcmontoy"}}}}},208:function(t,e,a){"use strict";var n=a(0),r=a.n(n),o=(a(49),a(209),a(204)),c=a(193),i=a.n(c),l=[{path:"/me",name:"Me"},{path:"/contact",name:"Contact"}],s=function(){return r.a.createElement("header",{className:i.a.root},r.a.createElement("nav",{className:i.a.nav},r.a.createElement("div",{className:i.a.brand},r.a.createElement("h1",{className:i.a.title},r.a.createElement(o.a,{to:"/",className:i.a.titleLink},"Ryan Montoya"))),r.a.createElement("div",{className:i.a.links},l.map(function(t){return r.a.createElement(o.a,{to:t.path,key:t.path,activeClassName:i.a.linkActive,className:i.a.link},t.name)}))))};e.a=function(t){var e=t.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,e),r.a.createElement("footer",null)))}}}]);
//# sourceMappingURL=component---src-pages-404-js-79db2e06422976db297d.js.map