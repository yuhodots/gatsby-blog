(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{BBuA:function(e,t,a){},Bl7J:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("Wbzz"),l=(a("pr76"),function(e){var t=e.siteTitle,a=e.siteDescription,n=e.type,l="main"===n,o="category"===n,s="about"===n,i={opacity:"1",borderBottom:"4px solid hsla(0,0%,100%,.35)",paddingBottom:"2.5px"};return console.log(n),r.a.createElement("header",{className:l?null:"simple"},r.a.createElement("div",{className:"header-inner"},r.a.createElement("h1",null,r.a.createElement(c.Link,{to:"/"},t)),r.a.createElement("div",{className:"description"},a,r.a.createElement("div",{className:"emoticon"},"📚")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/",style:l?i:{}},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"/category",style:o?i:{}},"Category")),r.a.createElement("li",null,r.a.createElement("a",{href:"/about",style:s?i:{}},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/yuhodots"},"GitHub")))))});a("FfUf"),a("WmEe"),a("XjQp"),t.a=function(e){var t=e.children,a=e.type,n=Object(c.useStaticQuery)("256249292").site.siteMetadata,o=n.title,s=n.description;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l,{siteTitle:o,siteDescription:s,type:a}),r.a.createElement("div",{className:"layout layout_"+a},r.a.createElement("main",null,t),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},FfUf:function(e,t,a){},LQyp:function(e,t,a){},Mdw5:function(e,t,a){"use strict";a.r(t);a("E9XD");var n=a("q1tI"),r=a.n(n),c=a("Wbzz"),l=a("Bl7J"),o=(a("oijK"),function(e){var t=e.categories,a=e.selectedCategory,n=e.setSelectedCategory,c=e.upperCategory;return r.a.createElement("div",{className:"category-list"},r.a.createElement("div",{className:"category-title"}),c.MachineLearning.map((function(e){return r.a.createElement("span",{className:"category-item "+(e===a&&"selected"),key:"category_"+e,onClick:function(){return n(e)}},r.a.createElement("span",{className:"category-post-count",style:{background:"#dae9d6"}},t[e]),r.a.createElement("span",null," ",e," "))})),c.Web.map((function(e){return r.a.createElement("span",{className:"category-item "+(e===a&&"selected"),key:"category_"+e,onClick:function(){return n(e)}},r.a.createElement("span",{className:"category-post-count",style:{background:"#F0E5DE"}},t[e]),r.a.createElement("span",null," ",e," "))})),c.Archive.map((function(e){return r.a.createElement("span",{className:"category-item "+(e===a&&"selected"),key:"category_"+e,onClick:function(){return n(e)}},r.a.createElement("span",{className:"category-post-count",style:{background:"#d9e1e8"}},t[e]),r.a.createElement("span",null," ",e," "))})))}),s=a("PoU3"),i=(a("BBuA"),function(e){var t=e.selectedCategory,a=e.posts;return t?r.a.createElement("div",{className:"category-post-list"},a.filter((function(e){return e.category===t})).map((function(e){return r.a.createElement("div",null,r.a.createElement(s.a,e),r.a.createElement("p",{className:"category-post-name"},r.a.createElement(c.Link,{to:e.path},e.title)),r.a.createElement("p",{className:"category-post-description"},e.description))}))):null}),u=function(e){var t=e.categories,a=e.posts,c=Object.keys(t).sort(),l=Object(n.useState)(c[0]),s=l[0],u=l[1];return r.a.createElement("div",{className:"category"},r.a.createElement(o,{categories:t,selectedCategory:s,setSelectedCategory:u,upperCategory:{MachineLearning:["Deep Learning","Data Science"],Web:["FrontEnd","BackEnd","Server"],Archive:["Branding","Cheat Sheet"]}}),r.a.createElement(i,{posts:a,selectedCategory:s}))};t.default=function(){var e=Object(c.useStaticQuery)("4025963261").allMarkdownRemark.edges,t=e.map((function(e){return e.node.frontmatter.category})).reduce((function(e,t){return e[t]?e[t]+=1:e[t]=1,e}),{});return r.a.createElement(l.a,{type:"category"},r.a.createElement(u,{categories:t,posts:e.map((function(e){return e.node.frontmatter}))}))}},PoU3:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),r=a.n(n),c=(a("LQyp"),function(e){var t=e.category,a=e.date;return r.a.createElement("div",{className:"post-info"},r.a.createElement("span",{className:"category"},t),r.a.createElement("span",{className:"date"},a))})},WmEe:function(e,t,a){},XjQp:function(e,t,a){},oijK:function(e,t,a){},pr76:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-category-js-e0a9f1d3b13781c54ec9.js.map