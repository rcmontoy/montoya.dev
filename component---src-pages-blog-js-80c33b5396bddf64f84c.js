(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{197:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(201),c=a(199),i=function(t){var e=t.posts;return r.a.createElement("ul",null,e.map(function(t){var e=t.frontmatter,a=e.date,n=e.path,o=e.title;return r.a.createElement("li",{key:n},a," - ",r.a.createElement(c.a,{to:n,key:o},o))}))},l=a(202);a.d(e,"pageQuery",function(){return s});e.default=function(t){var e=function(t){return t.map(function(t){return t.node})}(t.data.allMarkdownRemark.edges);return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Blog"}),r.a.createElement("h1",null,"Blog"),r.a.createElement(i,{posts:e}))};var s="3473231669"},198:function(t,e,a){var n;t.exports=(n=a(200))&&n.default||n},199:function(t,e,a){"use strict";var n=a(0),r=a.n(n),o=a(66),c=a.n(o);a.d(e,"a",function(){return c.a});a(198),a(9).default.enqueue,r.a.createContext({})},200:function(t,e,a){"use strict";a.r(e);a(18);var n=a(0),r=a.n(n),o=a(91);e.default=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(o.a,Object.assign({location:e,pageResources:a},a.json)):null}},201:function(t,e,a){"use strict";var n=a(0),r=a.n(n),o=(a(49),a(204),a(199)),c=a(205),i=a.n(c),l=[{path:"/blog",name:"Blog"},{path:"/me",name:"Me"},{path:"/contact",name:"Contact"}],s=function(){return r.a.createElement("header",{className:i.a.root},r.a.createElement("nav",{className:i.a.navContainer},r.a.createElement("h1",{className:i.a.title},r.a.createElement(o.a,{to:"/",className:i.a.titleLink},"Ryan Montoya")),r.a.createElement("div",{className:i.a.links},l.map(function(t){return r.a.createElement(o.a,{to:t.path,key:t.path,activeClassName:i.a.linkActive,className:i.a.link},t.name)}))))};e.a=function(t){var e=t.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,e),r.a.createElement("footer",null)))}},202:function(t,e,a){"use strict";a(49);var n=a(203),r=a(0),o=a.n(r),c=a(206),i=a.n(c);function l(t){var e=t.description,a=t.lang,r=t.meta,c=t.title,l=n.data.site,s=e||l.siteMetadata.description;return o.a.createElement(i.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s - "+l.siteMetadata.name,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},e.a=l},203:function(t){t.exports={data:{site:{siteMetadata:{name:"Ryan Montoya",description:"Portfolio for Ryan Montoya",author:"@rcmontoy"}}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-80c33b5396bddf64f84c.js.map