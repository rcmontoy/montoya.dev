(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{194:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return s});var n=a(0),r=a.n(n),o=a(209),c=a(195),i=a.n(c),l=a(207);t.default=function(e){var t=e.data.markdownRemark,a=t.html,n=t.excerpt,c=t.frontmatter;return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:c.title,description:n,blogPost:!0}),r.a.createElement("div",null,r.a.createElement("h1",{className:i.a.title},c.title),r.a.createElement("p",{className:i.a.date},c.date),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})))};var s="2013514231"},204:function(e,t,a){var n;e.exports=(n=a(206))&&n.default||n},205:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(66),c=a.n(o);a.d(t,"a",function(){return c.a});a(204),a(9).default.enqueue,r.a.createContext({})},206:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),o=a(91);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}},207:function(e,t,a){"use strict";a(49);var n=a(208),r=a(0),o=a.n(r),c=a(211),i=a.n(c),l=function(e){var t=e.description,a=e.lang,r=e.meta,c=e.title,l=e.blogPost,s=n.data.site,m=t||s.siteMetadata.description,u=[{name:"description",content:m},{property:"og:title",content:c},{property:"og:description",content:m},{property:"og:type",content:l?"article":"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:m}].concat(r);return o.a.createElement(i.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s - "+s.siteMetadata.name,meta:u})};l.defaultProps={lang:"en",meta:[],description:"",blogPost:!1},t.a=l},208:function(e){e.exports={data:{site:{siteMetadata:{name:"Ryan Montoya",description:"Hi I'm Ryan. I enjoy sharing my thoughts and experiences with software development, technology, and photography through in-depth candid articles.",author:"@rcmontoy"}}}}},209:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(49),a(210),a(205)),c=a(193),i=a.n(c),l=[{path:"/blog",name:"Blog"},{path:"/me",name:"Me"},{path:"/contact",name:"Contact"}],s=function(){return r.a.createElement("header",{className:i.a.root},r.a.createElement("nav",{className:i.a.nav},r.a.createElement("div",{className:i.a.brand},r.a.createElement("h1",{className:i.a.title},r.a.createElement(o.a,{to:"/",className:i.a.titleLink},"Ryan Montoya"))),r.a.createElement("div",{className:i.a.links},l.map(function(e){return r.a.createElement(o.a,{to:e.path,key:e.path,activeClassName:i.a.linkActive,className:i.a.link},e.name)}))))};t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t),r.a.createElement("footer",null)))}}}]);
//# sourceMappingURL=component---src-templates-post-js-e2916c815c3ed9e23ff9.js.map