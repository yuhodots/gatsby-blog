(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6qSS":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=(n("vg9a"),n("Bl7J")),i=n("RPjP"),u=n.n(i),c=n("Wbzz"),s=(n("IOKc"),function(e){var t=e.title,n=e.path,r=Object(c.useStaticQuery)("2390655019").site.siteMetadata,o=r.disqusShortname,i=r.url;if(o)return a.a.createElement("div",{style:{marginTop:20}},a.a.createElement(u.a,{shortname:o,identifier:t,title:t,url:i.concat(n)}))}),l=n("PoU3"),f=(n("WiME"),function(e){var t=e.title,n=e.date,o=e.category,i=e.html,u=e.path,c=Object(r.useState)(!1),f=c[0],d=c[1],p=function(){d(window.scrollY>100)};return Object(r.useEffect)((function(){return document.addEventListener("scroll",p),function(){document.removeEventListener("scroll",p)}}),[]),a.a.createElement("div",{className:"post-container"},a.a.createElement("div",{className:"post-info-container"},a.a.createElement(l.a,{category:o,date:n}),a.a.createElement("h2",{className:"post-title"},t)),a.a.createElement("div",{className:"post-content",dangerouslySetInnerHTML:{__html:i}}),f&&a.a.createElement("button",{type:"button",className:"to-top",onClick:function(){window.scrollTo(0,0)}},"top"),a.a.createElement(s,{path:u,title:t}))}),d=n("vrFN");t.default=function(e){var t=e.data.markdownRemark,n=t.frontmatter,r=t.html;return a.a.createElement(o.a,{type:"post"},a.a.createElement(d.a,{title:n.title}),a.a.createElement(f,Object.assign({},n,{html:r})))}},IOKc:function(e,t,n){},LQyp:function(e,t,n){},PoU3:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI"),a=n.n(r),o=(n("LQyp"),function(e){var t=e.category,n=e.date;return a.a.createElement("div",{className:"post-info"},a.a.createElement("span",{className:"category"},t),a.a.createElement("span",{className:"date"},n))})},RPjP:function(e,t,n){"use strict";e.exports=n("SLms")},SLms:function(e,t,n){"use strict";n("E9XD"),Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=u(n("q1tI")),i=u(n("17x9"));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=["shortname","identifier","title","url","category_id","onNewComment","language"],f=!1;function d(e,t){var n=t.onNewComment,r=t.language,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["onNewComment","language"]);for(var o in a)e.page[o]=a[o];e.language=r,n&&(e.callbacks={onNewComment:[n]})}var p=function(e){function t(){return c(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,n){return l.some((function(e){return e===n}))?t:r({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))}),{});return o.default.createElement("div",t,o.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!f){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),f=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};l.forEach((function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){d(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){d(this,t)},this.addDisqusScript())}}]),t}(o.default.Component);p.displayName="DisqusThread",p.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},p.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=p},WiME:function(e,t,n){},vg9a:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-post-js-9abca548f7ec0044591f.js.map