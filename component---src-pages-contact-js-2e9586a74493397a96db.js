(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{203:function(e,t,n){"use strict";n.r(t);var r=n(222),o=n(0),a=n.n(o),i=n(223);n(94),n(224),n(225),n(38),n(68),n(39),n(29),n(30),n(13),n(50);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){return(u="function"==typeof Symbol&&"symbol"===s(Symbol.iterator)?function(e){return s(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":s(e)})(e)}function d(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=d(this,f(t).call(this,e))).$=a.a.createRef(),n._=a.a.createRef(),n}var r,i,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o["PureComponent"]),r=t,(i=[{key:"render",value:function(){return a.a.createElement("span",{ref:this.$},a.a.createElement("a",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},this.props,{ref:this._}),this.props.children))}},{key:"componentDidMount",value:function(){this.paint()}},{key:"componentWillUpdate",value:function(){this.reset()}},{key:"componentDidUpdate",value:function(){this.paint()}},{key:"componentWillUnmount",value:function(){this.reset()}},{key:"paint",value:function(){var e=this,t=this.$.current.appendChild(document.createElement("span"));Promise.resolve().then(n.bind(null,227)).then(function(n){(0,n.render)(t.appendChild(e._.current),function(e){try{t.parentNode.replaceChild(e,t)}catch(t){}})})}},{key:"reset",value:function(){this.$.current.replaceChild(this._.current,this.$.current.lastChild)}}])&&l(r.prototype,i),s&&l(r,s),t}(),g=n(209),b=n(207),v=n(198),y=n.n(v);t.default=function(){var e=r.data.site.siteMetadata;return a.a.createElement(g.a,null,a.a.createElement(b.a,{title:"Contact"}),a.a.createElement("h1",null,"Stay in Touch"),a.a.createElement("p",{className:y.a.sayHello},"Don't hesitate to reach out and say hello!"),a.a.createElement(m,{href:"https://github.com/"+e.github,"data-size":"large","aria-label":"Follow @"+e.github+" on GitHub"},"Follow @",e.github),a.a.createElement("ul",{className:y.a.links},a.a.createElement("li",null,a.a.createElement(i.OutboundLink,{href:"mailto:"+e.email+"?subject=Hello"},"Email")),a.a.createElement("li",null,a.a.createElement(i.OutboundLink,{href:"https://www.linkedin.com/in/"+e.linkedin+"/"},"LinkedIn"))))}},204:function(e,t,n){var r;e.exports=(r=n(206))&&r.default||r},205:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(66),i=n.n(a);n.d(t,"a",function(){return i.a});n(204),n(9).default.enqueue,o.a.createContext({})},206:function(e,t,n){"use strict";n.r(t);n(18);var r=n(0),o=n.n(r),a=n(91);t.default=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(a.a,Object.assign({location:t,pageResources:n},n.json)):null}},207:function(e,t,n){"use strict";n(49);var r=n(208),o=n(0),a=n.n(o),i=n(211),c=n.n(i),l=function(e){var t=e.description,n=e.lang,o=e.meta,i=e.title,l=e.blogPost,s=r.data.site,u=t||s.siteMetadata.description,d=[{name:"description",content:u},{property:"og:title",content:i},{property:"og:description",content:u},{property:"og:type",content:l?"article":"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:u}].concat(o);return a.a.createElement(c.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s - "+s.siteMetadata.name,meta:d})};l.defaultProps={lang:"en",meta:[],description:"",blogPost:!1},t.a=l},208:function(e){e.exports={data:{site:{siteMetadata:{name:"Ryan Montoya",description:"Hi I'm Ryan. I enjoy sharing my thoughts and experiences with software development, technology, and photography through in-depth candid articles.",author:"@rcmontoy"}}}}},209:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=(n(49),n(210),n(205)),i=n(193),c=n.n(i),l=[{path:"/me",name:"Me"},{path:"/contact",name:"Contact"}],s=function(){return o.a.createElement("header",{className:c.a.root},o.a.createElement("nav",{className:c.a.nav},o.a.createElement("div",{className:c.a.brand},o.a.createElement("h1",{className:c.a.title},o.a.createElement(a.a,{to:"/",className:c.a.titleLink},"Ryan Montoya"))),o.a.createElement("div",{className:c.a.links},l.map(function(e){return o.a.createElement(a.a,{to:e.path,key:e.path,activeClassName:c.a.linkActive,className:c.a.link},e.name)}))))};t.a=function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s,null),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},o.a.createElement("main",null,t),o.a.createElement("footer",null)))}},222:function(e){e.exports={data:{site:{siteMetadata:{email:"ryan@montoya.dev",github:"rcmontoy",linkedin:"rcmontoy"}}}}},223:function(e,t,n){"use strict";n(18),Object.defineProperty(t,"__esModule",{value:!0}),t.OutboundLink=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=i(n(0)),a=i(n(52));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){return o.default.createElement("a",r({},e,{onClick:function(t){"function"==typeof e.onClick&&e.onClick();var n=!0;return(0!==t.button||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||t.defaultPrevented)&&(n=!1),e.target&&"_self"!==e.target.toLowerCase()&&(n=!1),window.gtag?window.gtag("event","click",{event_category:"outbound",event_label:e.href,transport_type:"beacon",event_callback:function(){n&&(document.location=e.href)}}):n&&(document.location=e.href),!1}}))}c.propTypes={href:a.default.string,target:a.default.string,onClick:a.default.func},t.OutboundLink=c},224:function(e,t,n){var r=n(1);r(r.S+r.F*!n(7),"Object",{defineProperties:n(138)})},225:function(e,t,n){var r=n(1),o=n(226),a=n(33),i=n(96),c=n(137);r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,r=a(e),l=i.f,s=o(r),u={},d=0;s.length>d;)void 0!==(n=l(r,t=s[d++]))&&c(u,t,n);return u}})},226:function(e,t,n){var r=n(92),o=n(70),a=n(5),i=n(4).Reflect;e.exports=i&&i.ownKeys||function(e){var t=r.f(a(e)),n=o.f;return n?t.concat(n(e)):t}},227:function(e,t,n){"use strict";n.r(t),n.d(t,"render",function(){return x});n(49),n(133),n(14);var r=window.document,o=(r.location,window.encodeURIComponent),a=(window.decodeURIComponent,window.Math),i=window.HTMLElement,c=window.XMLHttpRequest,l=function(e){return function(t,n,r){var o=e.createElement(t);if(n)for(var a in n){var i=n[a];null!=i&&(null!=o[a]?o[a]=i:o.setAttribute(a,i))}if(r)for(var c=0,l=r.length;c<l;c++){var s=r[c];o.appendChild("string"==typeof s?e.createTextNode(s):s)}return o}},s=l(r),u=c&&c.prototype&&"withCredentials"in c.prototype,d=u&&i&&i.prototype.attachShadow&&!i.prototype.attachShadow.prototype,f=function(e,t,n){e.addEventListener?e.addEventListener(t,n):e.attachEvent("on"+t,n)},p=function(e,t,n){e.removeEventListener?e.removeEventListener(t,n):e.detachEvent("on"+t,n)},h="body{margin:0}a{color:#24292e;text-decoration:none;outline:0}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}.widget{display:inline-block;overflow:hidden;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif;font-size:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.btn,.social-count{display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;border:1px solid #c5c9cc;border-radius:0.25em}.btn{background-color:#eff3f6;background-image:-webkit-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);background-position:-1px -1px;background-repeat:repeat-x;background-size:110% 110%;border-color:rgba(27,31,35,0.2);-ms-filter:\"progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')\";*filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')}.btn:active{background-color:#e9ecef;background-image:none;border-color:#a5a9ac;border-color:rgba(27,31,35,0.35);box-shadow:inset 0 0.15em 0.3em rgba(27,31,35,0.15)}.btn:focus,.btn:hover{background-color:#e6ebf1;background-image:-webkit-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:-moz-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);border-color:#a5a9ac;border-color:rgba(27,31,35,0.35);-ms-filter:\"progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0')\";*filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0')}.social-count{position:relative;margin-left:5px;background-color:#fff}.social-count:focus,.social-count:hover{color:#0366d6}.social-count b,.social-count i{position:absolute;top:50%;left:0;display:block;width:0;height:0;margin:-4px 0 0 -4px;border:solid transparent;border-width:4px 4px 4px 0;_line-height:0;_border-top-color:red !important;_border-bottom-color:red !important;_border-left-color:red !important;_filter:chroma(color=red)}.social-count b{border-right-color:#c5c9cc}.social-count i{margin-left:-3px;border-right-color:#fff}.lg .btn,.lg .social-count{height:16px;padding:5px 10px;font-size:12px;line-height:16px}.lg .social-count{margin-left:6px}.lg .social-count b,.lg .social-count i{margin:-5px 0 0 -5px;border-width:5px 5px 5px 0}.lg .social-count i{margin-left:-4px}\n",m={"mark-github":{width:16,height:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>'},eye:{width:16,height:16,path:'<path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/>'},star:{width:14,height:16,path:'<path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/>'},"repo-forked":{width:10,height:16,path:'<path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/>'},"issue-opened":{width:14,height:16,path:'<path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/>'},"cloud-download":{width:16,height:16,path:'<path fill-rule="evenodd" d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"/>'}},g={},b=function(e,t){var n=g[e]||(g[e]=[]);if(!(n.push(t)>1)){var r=function(e){var t;return function(){t||(t=1,e.apply(this,arguments))}}(function(){for(delete g[e];t=n.shift();)t.apply(null,arguments)});if(u){var o=new c;f(o,"abort",r),f(o,"error",r),f(o,"load",function(){var e;try{e=JSON.parse(o.responseText)}catch(t){return void r(t)}r(200!==o.status,e)}),o.open("GET",e),o.send()}else{var a=this||window;a._=function(e){a._=null,r(200!==e.meta.status,e.data)};var i=l(a.document)("script",{async:!0,src:e+(/\?/.test(e)?"&":"?")+"callback=_"}),s=function(){a._&&a._({meta:{}})};f(i,"load",s),f(i,"error",s),i.readyState&&function(e,t,n){f(e,"readystatechange",function r(o){if(t.test(e.readyState))return p(e,"readystatechange",r),n(o)})}(i,/de|m/,s),a.document.getElementsByTagName("head")[0].appendChild(i)}}},v=function(e,t,n){var r=l(e.ownerDocument),o=e.appendChild(r("style",{type:"text/css"}));o.styleSheet?o.styleSheet.cssText=h:o.appendChild(e.ownerDocument.createTextNode(h));var a,i,c=r("a",{className:"btn",href:t.href,target:"_blank",innerHTML:(a=t["data-icon"],i=/^large$/i.test(t["data-size"])?16:14,a=(""+a).toLowerCase().replace(/^octicon-/,""),{}.hasOwnProperty.call(m,a)||(a="mark-github"),'<svg version="1.1" width="'+i*m[a].width/m[a].height+'" height="'+i+'" viewBox="0 0 '+m[a].width+" "+m[a].height+'" class="octicon octicon-'+a+'" aria-hidden="true">'+m[a].path+"</svg>"),"aria-label":t["aria-label"]||void 0},[" ",r("span",{},[t["data-text"]||""])]);/\.github\.com$/.test("."+c.hostname)?/^https?:\/\/((gist\.)?github\.com\/[^\/?#]+\/[^\/?#]+\/archive\/|github\.com\/[^\/?#]+\/[^\/?#]+\/releases\/download\/|codeload\.github\.com\/)/.test(c.href)&&(c.target="_top"):(c.href="#",c.target="_self");var s,u,d,f,p=e.appendChild(r("div",{className:"widget"+(/^large$/i.test(t["data-size"])?" lg":"")},[c]));/^(true|1)$/i.test(t["data-show-count"])&&"github.com"===c.hostname&&(s=c.pathname.replace(/^(?!\/)/,"/").match(/^\/([^\/?#]+)(?:\/([^\/?#]+)(?:\/(?:(subscription)|(fork)|(issues)|([^\/?#]+)))?)?(?:[\/?#]|$)/))&&!s[6]?(s[2]?(u="/repos/"+s[1]+"/"+s[2],s[3]?(f="subscribers_count",d="watchers"):s[4]?(f="forks_count",d="network"):s[5]?(f="open_issues_count",d="issues"):(f="stargazers_count",d="stargazers")):(u="/users/"+s[1],d=f="followers"),b.call(this,"https://api.github.com"+u,function(e,t){if(!e){var o=t[f];p.appendChild(r("a",{className:"social-count",href:t.html_url+"/"+d,target:"_blank","aria-label":o+" "+f.replace(/_count$/,"").replace("_"," ").slice(0,o<2?-1:void 0)+" on GitHub"},[r("b"),r("i"),r("span",{},[(""+o).replace(/\B(?=(\d{3})+(?!\d))/g,",")])]))}n&&n(p)})):n&&n(p)},y=window.devicePixelRatio||1,w=function(e){return(y>1?a.ceil(a.round(e*y)/y*2)/2:a.ceil(e))||0},k=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},x=function(e,t){if(null!=e&&null!=t)if(e.getAttribute&&(e=function(e){for(var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")},n=["icon","text","size","show-count"],r=0,o=n.length;r<o;r++){var a="data-"+n[r];t[a]=e.getAttribute(a)}return null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(e)),d){var n=s("span",{title:e.title||void 0});v(n.attachShadow({mode:"closed"}),e,function(){t(n)})}else{var i=s("iframe",{src:"javascript:0",title:e.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});k(i,[0,0]),i.style.border="none";f(i,"load",function n(){var c,l=i.contentWindow;try{c=l.document.body}catch(s){return void r.body.appendChild(i.parentNode.removeChild(i))}p(i,"load",n),v.call(l,c,e,function(n){var r=function(e){var t=e.offsetWidth,n=e.offsetHeight;if(e.getBoundingClientRect){var r=e.getBoundingClientRect();t=a.max(t,w(r.width)),n=a.max(n,w(r.height))}return[t,n]}(n);i.parentNode.removeChild(i),function(e,t,n){f(e,t,function r(o){return p(e,t,r),n(o)})}(i,"load",function(){k(i,r)}),i.src="https://unpkg.com/github-buttons@2.2.10/dist/buttons.html#"+(i.name=function(e){var t=[];for(var n in e){var r=e[n];null!=r&&t.push(o(n)+"="+o(r))}return t.join("&")}(e)),t(i)})}),r.body.appendChild(i)}}}}]);
//# sourceMappingURL=component---src-pages-contact-js-2e9586a74493397a96db.js.map