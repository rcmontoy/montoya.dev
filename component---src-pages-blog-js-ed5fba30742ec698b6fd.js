(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{202:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(206),c=a(204),i=function(e){var t=e.posts;return r.a.createElement("ul",null,t.map(function(e){var t=e.frontmatter,a=t.date,n=t.path,o=t.title;return r.a.createElement("li",{key:n},a," - ",r.a.createElement(c.a,{to:n,key:o},o))}))},l=a(207);a.d(t,"pageQuery",function(){return s});t.default=function(e){var t=function(e){return e.map(function(e){return e.node})}(e.data.allMarkdownRemark.edges);return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Blog"}),r.a.createElement("h1",null,"Blog"),r.a.createElement(i,{posts:t}))};var s="3473231669"},203:function(e,t,a){var n;e.exports=(n=a(205))&&n.default||n},204:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(66),c=a.n(o);a.d(t,"a",function(){return c.a});a(203),a(9).default.enqueue,r.a.createContext({})},205:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),o=a(91);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}},206:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(49),a(209),a(204)),c=a(193),i=a.n(c),l=[{path:"/blog",name:"Blog"},{path:"/me",name:"Me"},{path:"/contact",name:"Contact"}],s=function(){return r.a.createElement("header",{className:i.a.root},r.a.createElement("nav",{className:i.a.nav},r.a.createElement("div",{className:i.a.brand},r.a.createElement("h1",{className:i.a.title},r.a.createElement(o.a,{to:"/",className:i.a.titleLink},"Ryan Montoya"))),r.a.createElement("div",{className:i.a.links},l.map(function(e){return r.a.createElement(o.a,{to:e.path,key:e.path,activeClassName:i.a.linkActive,className:i.a.link},e.name)}))))};t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t),r.a.createElement("footer",null)))}},207:function(e,t,a){"use strict";a(49);var n=a(208),r=a(0),o=a.n(r),c=a(210),i=a.n(c);function l(e){var t=e.description,a=e.lang,r=e.meta,c=e.title,l=n.data.site,s=t||l.siteMetadata.description;return o.a.createElement(i.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s - "+l.siteMetadata.name,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},208:function(e){e.exports={data:{site:{siteMetadata:{name:"Ryan Montoya",description:"Portfolio for Ryan Montoya",author:"@rcmontoy"}}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-ed5fba30742ec698b6fd.js.map