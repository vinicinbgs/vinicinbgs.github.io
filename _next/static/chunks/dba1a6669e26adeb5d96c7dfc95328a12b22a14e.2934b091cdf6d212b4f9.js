(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=c,t.default=void 0;var r=l(n("q1tI")),o=l(n("Xuae")),a=n("lwAK"),i=n("FYa8"),s=n("/0+H");function l(e){return e&&e.__esModule?e:{default:e}}function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,l=f.length;s<l;s++){var c=f[s];if(o.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?a=!1:n.add(c);else{var u=o.props[c],p=r[c]||new Set;p.has(u)?a=!1:(p.add(u),r[c]=p)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var d=(0,o.default)();function h(e){var t=e.children;return(r.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,s.isInAmpMode)(e)},t)}))})))}h.rewind=d.rewind;var v=h;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};function l(e){return function(t){return r.createElement(c,i({attr:i({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.createElement(t.tag,i({key:n},t.attr),e(t.child))}))}(e.child))}}function c(e){var t=function(t){var n,o=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var a=e.attr,l=e.title,c=s(e,["attr","title"]);return r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:n,style:i({color:e.color||t.color},t.style,e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),a=n("W8MJ"),i=n("7W2i"),s=n("a1gu"),l=n("Nsbk"),c=n("RIqP");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(s){i(c,s);var l=u(c);function c(e){var a;return r(this,c),a=l.call(this,e),p&&(t.add(o(a)),n(o(a))),a}return a(c,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(c,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),c}(f.Component))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),a=n("7W2i"),i=n("a1gu"),s=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}var c=n("TqRt"),u=n("284h");t.__esModule=!0,t.default=void 0;var f,p=u(n("q1tI")),d=n("QmWs"),h=n("g/15"),v=c(n("nOHt")),m=n("elyg");function y(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var g=new Map,b=window.IntersectionObserver,k={};function w(){return f||(b?f=new b((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var x=function(e){a(n,e);var t=l(n);function n(e){var o;return r(this,n),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}((function(e,t){return{href:(0,m.addBasePath)(y(e)),as:t?(0,m.addBasePath)(y(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=o.formatUrls(o.props.href,o.props.as),i=a.href,s=a.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var l=window.location.pathname;i=(0,d.resolve)(l,i),s=s?(0,d.resolve)(l,s):i,e.preventDefault();var c=o.props.scroll;null==c&&(c=s.indexOf("#")<0),v.default[o.props.replace?"replace":"push"](i,s,{shallow:o.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,d.resolve)(e,n);return[o,r?(0,d.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),k[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),g.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),k[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var a=p.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),p.default.cloneElement(a,i)}}]),n}(p.Component);t.default=x},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},uVCN:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),i=n.n(a),s=o.a.createElement;var l=function(e){return s(i.a,null,s("title",null,e.siteTitle),s("meta",{name:"description",content:e.description}),s("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.stylesheets&&e.stylesheets.length>0&&e.stylesheets.map((function(e,t){return s("link",{key:t,rel:"stylesheet",href:e})})),s("style",null,"\n          body {\n            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;\n          }\n      "))},c=n("YFqc"),u=n.n(c),f=n("ma3e"),p=o.a.createElement;function d(e){var t={inputHero:{backgroundColor:"transparent",color:"#918965",fontSize:"40px",border:"none",outline:"none",borderBottom:"2px solid #918965",marginLeft:"10px"},titleHero:{fontSize:"46px",color:"#918965"},bannerHero:{background:"url(/banner.png)",backgroundPosition:"bottom",backgroundAttachment:"fixed",backgroundSize:"cover",height:"80vh"},aspasHero:{fontFamily:"IM Fell Double Pica, serif",fontSize:"50px",color:"#918965",marginLeft:"10px"},topLinks:{color:"white",backgroundColor:"#010101",borderRadius:"7px"},phraseHero:{color:"#AFAFAF"}};return p(o.a.Fragment,null,p("div",{id:"hero",className:"relative tc ".concat(e.backgroundClass),style:t.bannerHero},p("div",{className:"mw7 white pv4 tc"},p("div",{className:"pv4 mt6"},p("span",{style:t.aspasHero},"\u201c "),p("h1",{className:"f1 dib normal lh-title ma0 pa0"},p(u.a,{href:"/"},p("a",{style:t.titleHero,className:"no-underline",href:"/"},e.heroTitle))),p("h4",{className:"normal ma0 pt2 ph1 ml5",style:t.phraseHero},e.subtitle,p("span",{style:t.aspasHero},"\u201d")),p("div",null,e.topLinks&&e.topLinks.length>0&&e.topLinks.map((function(e,n){return-1===e.href.indexOf("http")?p(u.a,{href:e.href,key:n},p("a",{className:"dib f6 no-underline pa1 ma1",key:n,style:t.topLinks},p(f.b,null)," ",e.text)):p("a",{className:"dib f6 no-underline pa1 ma1",target:"_blank",rel:"noreferrer noopener",href:e.href,key:n,style:t.topLinks},p(f.a,null)," ",e.text)})))))))}d.defaultProps={backgroundClass:"bg-mid-gray",topLinks:[],heroTitle:"",subtitle:""};var h=d,v=o.a.createElement;var m=function(e){var t=new Date;return v("footer",{className:"center h3",style:{backgroundColor:"#1C1B1B",borderTop:"5px solid #918965",color:"#AFAFAF"}},v("div",{className:"w100 tc mt3"},v("span",null,"\xa9 "),v("span",null,t.getFullYear()," "),v("span",null,e.copyright)))},y=o.a.createElement;var g=function(e){return y("div",null,y("script",{dangerouslySetInnerHTML:{__html:(t=e.siteId,"\n  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=\n  function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;\n  e=o.createElement(i);r=o.getElementsByTagName(i)[0];\n  e.src='https://www.google-analytics.com/analytics.js';\n  r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));\n  ga('create','".concat(t,"','auto');ga('send','pageview');\n"))}}));var t},b=o.a.createElement;function k(e){var t={content:{backgroundColor:"#1C1B1B",borderTop:"5px solid #918965"}};return b("div",null,b(l,{siteTitle:e.siteTitle,description:e.description,stylesheets:e.stylesheets}),b("main",{className:"lh-copy"},b(h,{heroTitle:e.heroTitle,subtitle:e.description,topLinks:e.topLinks,style:t.hero}),b("div",{style:t.content},e.body),b(m,{copyright:e.copyright}),e.siteId&&b(g,{siteId:e.siteId})))}k.defaultProps={heroTitle:"",description:"",stylesheets:["https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css"],backgroundClass:"bg-dark-gray"};t.a=k},vivp:function(e){e.exports=JSON.parse('{"siteTitle":"Bem vindo","description":"O que te trouxe at\xe9 aqui, n\xe3o ser\xe1 o que te levar\xe1 para o pr\xf3ximo n\xedvel","stylesheets":["https://unpkg.com/tachyons@4.7.4/css/tachyons.min.css"],"topLinks":[{"text":"Home","href":"/"},{"text":"Github","href":"https://github.com/vinicinbgs/"}],"copyright":"Vinicinbgs","siteId":"","bodyContent":"","bodyHtml":"","dir":"content","base":"index.json","ext":".json","sourceBase":"index.md","sourceExt":".md"}')}}]);