(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1:function(t,e){},"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"33yf":function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var o=t[r];"."===o?t.splice(r,1):".."===o?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var a=i>=0?arguments[i]:t.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,o="/"===a.charAt(0))}return(o?"/":"")+(e=n(r(e.split("/"),(function(t){return!!t})),!o).join("/"))||"."},e.normalize=function(t){var i=e.isAbsolute(t),a="/"===o(t,-1);return(t=n(r(t.split("/"),(function(t){return!!t})),!i).join("/"))||i||(t="."),t&&a&&(t+="/"),(i?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(r(t,(function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length&&""===t[e];e++);for(var n=t.length-1;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var o=r(t.split("/")),i=r(n.split("/")),a=Math.min(o.length,i.length),c=a,u=0;u<a;u++)if(o[u]!==i[u]){c=u;break}var s=[];for(u=c;u<o.length;u++)s.push("..");return(s=s.concat(i.slice(c))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!=typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,o=!0,i=t.length-1;i>=1;--i)if(47===(e=t.charCodeAt(i))){if(!o){r=i;break}}else o=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=function(t){"string"!=typeof t&&(t+="");var e,n=0,r=-1,o=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!o){n=e+1;break}}else-1===r&&(o=!1,r=e+1);return-1===r?"":t.slice(n,r)}(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!=typeof t&&(t+="");for(var e=-1,n=0,r=-1,o=!0,i=0,a=t.length-1;a>=0;--a){var c=t.charCodeAt(a);if(47!==c)-1===r&&(o=!1,r=a+1),46===c?-1===e?e=a:1!==i&&(i=1):-1!==e&&(i=-1);else if(!o){n=a+1;break}}return-1===e||-1===r||0===i||1===i&&e===r-1&&e===n+1?"":t.slice(e,r)};var o="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("8oxB"))},"5ku3":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));var r=n("U8pU"),o=n("I0ug");function i(){return!("object"===(void 0===t?"undefined":Object(r.a)(t))&&"[object process]"===String(t)&&!t.browser)||Object(o.a)()}function a(){return i()&&"undefined"!=typeof document}}).call(this,n("8oxB"))},"7yFj":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return s})),n.d(e,"h",(function(){return l})),n.d(e,"i",(function(){return f})),n.d(e,"j",(function(){return p})),n.d(e,"p",(function(){return h})),n.d(e,"m",(function(){return d})),n.d(e,"n",(function(){return g})),n.d(e,"o",(function(){return m})),n.d(e,"l",(function(){return y})),n.d(e,"c",(function(){return v})),n.d(e,"q",(function(){return b})),n.d(e,"k",(function(){return k})),n.d(e,"b",(function(){return _})),n.d(e,"r",(function(){return w})),n.d(e,"t",(function(){return O})),n.d(e,"s",(function(){return j}));var r=n("vOnD"),o=n("Wbzz"),i=r.c.a.withConfig({displayName:"typography__A",componentId:"sc-1pmaksm-0"})(["text-decoration:none;color:",";&:visited{color:",";}&:active{color:",";}&:hover{color:",";}"],(function(t){return t.theme.colors.linkText}),(function(t){return t.theme.colors.linkVisited}),(function(t){return t.theme.colors.linkHover}),(function(t){return t.theme.colors.linkHover})),a=Object(r.c)(o.a).withConfig({displayName:"typography__GatsbyA",componentId:"sc-1pmaksm-1"})(["text-decoration:none;color:",";&:visited{color:",";}&:active{color:",";}&:hover{color:",";}"],(function(t){return t.theme.colors.linkText}),(function(t){return t.theme.colors.linkVisited}),(function(t){return t.theme.colors.linkHover}),(function(t){return t.theme.colors.linkHover})),c=r.c.h1.withConfig({displayName:"typography__H1",componentId:"sc-1pmaksm-2"})(["font:",";letter-spacing:0.02em;margin:4px 0 24px;"],(function(t){return t.theme.typography.font800})),u=r.c.h2.withConfig({displayName:"typography__H2",componentId:"sc-1pmaksm-3"})(["font:",";margin:24px 0 16px;"],(function(t){return t.theme.typography.font700})),s=r.c.h3.withConfig({displayName:"typography__H3",componentId:"sc-1pmaksm-4"})(["font:",";"],(function(t){return t.theme.typography.font600})),l=r.c.h4.withConfig({displayName:"typography__H4",componentId:"sc-1pmaksm-5"})(["font:",";"],(function(t){return t.theme.typography.font500})),f=r.c.h5.withConfig({displayName:"typography__H5",componentId:"sc-1pmaksm-6"})(["font:",";"],(function(t){return t.theme.typography.font450})),p=r.c.h6.withConfig({displayName:"typography__H6",componentId:"sc-1pmaksm-7"})(["font:",";"],(function(t){return t.theme.typography.font350})),h=r.c.p.withConfig({displayName:"typography__P",componentId:"sc-1pmaksm-8"})(["margin:'0 0 16px'"]),d=r.c.ul.withConfig({displayName:"typography__List",componentId:"sc-1pmaksm-9"})(["margin:0 0 12px;"]),g=r.c.li.withConfig({displayName:"typography__ListItem",componentId:"sc-1pmaksm-10"})(["margin-bottom:4px;"]),m=r.c.div.withConfig({displayName:"typography__MarkdownBody",componentId:"sc-1pmaksm-11"})(["font:",";padding:36px;max-width:692px;"],(function(t){return t.theme.typography.font300})),y=r.c.code.withConfig({displayName:"typography__InlineCode",componentId:"sc-1pmaksm-12"})(["background-color:",";border-radius:",";padding:0 5px;font-family:Consolas,Menlo,Monaco,'Andale Mono WT','Andale Mono','Lucida Console','Lucida Sans Typewriter','DejaVu Sans Mono','Bitstream Vera Sans Mono','Liberation Mono','Nimbus Mono L','Courier New',Courier,monospace;font-size:0.9em;margin:1px 0;line-height:calc(1.5em / 0.9 - 2px);display:inline-block;vertical-align:top;"],(function(t){return t.theme.colors.mono200}),(function(t){return t.theme.sizing.scale100})),v=r.c.code.withConfig({displayName:"typography__CodeBlock",componentId:"sc-1pmaksm-13"})(["font-family:Consolas,Menlo,Monaco,'Andale Mono WT','Andale Mono','Lucida Console','Lucida Sans Typewriter','DejaVu Sans Mono','Bitstream Vera Sans Mono','Liberation Mono','Nimbus Mono L','Courier New',Courier,monospace;font-size:0.9em;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;tab-size:4;hyphens:none;background-color:",";"],(function(t){return t.theme.colors.mono200})),b=r.c.pre.withConfig({displayName:"typography__Pre",componentId:"sc-1pmaksm-14"})(["font-size:14px;background-color:",";padding:",";overflow-x:auto;.keyword{color:#339;font-weight:bold;}.operator{color:#d14;}.punctuation{color:#458;}.string,.number{color:#008080;}"],(function(t){return t.theme.colors.mono200}),(function(t){return t.theme.sizing.scale200})),k=r.c.img.withConfig({displayName:"typography__Img",componentId:"sc-1pmaksm-15"})(["max-width:100%;"]),_=r.c.blockquote.withConfig({displayName:"typography__BlockQuote",componentId:"sc-1pmaksm-16"})(["background-color:",";margin-inline-start:0;margin-inline-end:0;padding:"," ",";"],(function(t){return t.theme.colors.warning100}),(function(t){return t.theme.sizing.scale400}),(function(t){return t.theme.sizing.scale600})),w=r.c.table.withConfig({displayName:"typography__Table",componentId:"sc-1pmaksm-17"})(["border-collapse:collapse;border-spacing:1px;width:100%;"]),O=r.c.th.withConfig({displayName:"typography__TableHeaderCell",componentId:"sc-1pmaksm-18"})(["padding:4px;text-align:left;background:",";font-weight:bold;border:1px solid ",";"],(function(t){return t.theme.colors.mono200}),(function(t){return t.theme.colors.mono400})),j=r.c.td.withConfig({displayName:"typography__TableBodyCell",componentId:"sc-1pmaksm-19"})(["padding:4px;text-align:left;border:1px solid ",";"],(function(t){return t.theme.colors.mono400}))},"8mkv":function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}var o=n("q1tI"),i=n.n(o),a=n("A2+M"),c=n("7ljp"),u=n("7yFj"),s=n("vOJQ"),l=function(t,e){return function(n){var o=n.href,a=r(n,["href"]),c=Object(s.parseLinks)(o,t,e);return c?i.a.createElement(u.d,Object.assign({to:c},a)):i.a.createElement(u.a,Object.assign({href:o},a))}},f=function(t){var e=t.children,n=r(t,["children"]);return i.a.createElement(u.q,n,i.a.Children.map(e,(function(t){return"code"===t.type||"Styled(code)"===t.type.displayName?i.a.createElement(u.c,t.props):i.a.cloneElement(t)})))},p=/^code-classlanguage-text(.*?)code/,h=/code-classlanguage-text(.*?)code/g;e.a=function(t){var e=t.relativeLinks,n=t.path,s={},d=function(t){return function(e){var n=e.id,a=r(e,["id"]);return function(t,e,n,r){if(!e)return i.a.createElement(t,n);if(r[e=p.test(e)?e.match(p)[1]:e.replace(h,(function(t,e){return e}))]){for(var a=1;r[e+"-"+a];)a++;e=e+"-"+a}r[e]=!0;var c=n.children.slice(),u=c[0];return u.props&&u.props.href&&(c[0]=Object(o.cloneElement)(u,{key:"anchor",href:"#"+e})),i.a.createElement(t,Object.assign({},n,{id:e}),c)}(t,n,a,s)}},g={h1:u.e,h2:d(u.f),h3:d(u.g),h4:d(u.h),h5:d(u.i),h6:d(u.j),p:u.p,ul:u.m,li:u.n,pre:f,img:u.k,code:u.l,table:u.r,th:u.t,td:u.s,blockquote:u.b,a:e?l(n,e):u.a};return i.a.createElement(c.MDXProvider,{components:g},i.a.createElement(a.MDXRenderer,null,t.body))}},"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},GawU:function(t,e,n){"use strict";(function(t){function r(){var e;if("undefined"!=typeof window&&window.performance)e=window.performance.now();else if(void 0!==t&&t.hrtime){var n=t.hrtime();e=1e3*n[0]+n[1]/1e6}else e=Date.now();return e}n.d(e,"a",(function(){return r}))}).call(this,n("8oxB"))},I0ug:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o}));var r=n("U8pU");function o(e){if("undefined"!=typeof window&&"object"===Object(r.a)(window.process)&&"renderer"===window.process.type)return!0;if(void 0!==t&&"object"===Object(r.a)(t.versions)&&Boolean(t.versions.electron))return!0;var n="object"===("undefined"==typeof navigator?"undefined":Object(r.a)(navigator))&&"string"==typeof navigator.userAgent&&navigator.userAgent,o=e||n;return!!(o&&o.indexOf("Electron")>=0)}}).call(this,n("8oxB"))},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},K9nA:function(t,e,n){"use strict";(function(t,r){n.d(e,"e",(function(){return a})),n.d(e,"f",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return s})),n.d(e,"d",(function(){return l})),n.d(e,"a",(function(){return f}));var o=n("U8pU"),i={self:"undefined"!=typeof self&&self,window:"undefined"!=typeof window&&window,global:void 0!==t&&t,document:"undefined"!=typeof document&&document,process:"object"===(void 0===r?"undefined":Object(o.a)(r))&&r},a=i.self||i.window||i.global,c=i.window||i.self||i.global,u=i.global||i.self||i.window,s=i.document||{},l=i.process||{},f=console}).call(this,n("yLpj"),n("8oxB"))},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");t.exports=function(t){return r(t)||o(t)||i(t)||a()}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},U8pU:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return r}))},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},X8hv:function(t,e,n){var r=n("sXyB"),o=n("RIqP"),i=n("lSNA"),a=n("8OQS");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s=n("q1tI"),l=n("7ljp"),f=l.useMDXComponents,p=l.mdx,h=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,i=t.children,c=a(t,["scope","components","children"]),l=f(n),d=h(e),g=s.useMemo((function(){if(!i)return null;var t=u({React:s,mdx:p},d),e=Object.keys(t),n=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(o(e),[""+i])).apply(void 0,[{}].concat(o(n)))}),[i,e]);return s.createElement(g,u({components:l},c))}},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},a3B7:function(t,e,n){"use strict";n.r(e),n.d(e,"VERSION",(function(){return s})),n.d(e,"self",(function(){return O.e})),n.d(e,"window",(function(){return O.f})),n.d(e,"global",(function(){return O.c})),n.d(e,"document",(function(){return O.b})),n.d(e,"process",(function(){return O.d})),n.d(e,"console",(function(){return O.a})),n.d(e,"isBrowser",(function(){return u.a})),n.d(e,"isBrowserMainThread",(function(){return u.b})),n.d(e,"getBrowser",(function(){return R})),n.d(e,"isMobile",(function(){return B})),n.d(e,"isElectron",(function(){return M.a})),n.d(e,"assert",(function(){return w})),n.d(e,"Log",(function(){return T})),n.d(e,"COLOR",(function(){return m})),n.d(e,"addColor",(function(){return v})),n.d(e,"leftPad",(function(){return h})),n.d(e,"rightPad",(function(){return d})),n.d(e,"autobind",(function(){return _})),n.d(e,"LocalStorage",(function(){return p})),n.d(e,"getHiResTimestamp",(function(){return j})),n.d(e,"Stats",(function(){return H})),n.d(e,"Stat",(function(){return D}));var r=n("U8pU"),o=n("KQm4"),i=n("rePB"),a=n("1OyB"),c=n("vuIU"),u=n("5ku3"),s="undefined"!=typeof __VERSION__?__VERSION__:"untranspiled source",l=Object(u.a)();function f(t){try{var e=window[t],n="__storage_test__";return e.setItem(n,n),e.removeItem(n),e}catch(r){return null}}var p=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"sessionStorage";Object(a.a)(this,t),this.storage=f(r),this.id=e,this.config={},Object.assign(this.config,n),this._loadConfiguration()}return Object(c.a)(t,[{key:"getConfiguration",value:function(){return this.config}},{key:"setConfiguration",value:function(t){return this.config={},this.updateConfiguration(t)}},{key:"updateConfiguration",value:function(t){if(Object.assign(this.config,t),this.storage){var e=JSON.stringify(this.config);this.storage.setItem(this.id,e)}return this}},{key:"_loadConfiguration",value:function(){var t={};if(this.storage){var e=this.storage.getItem(this.id);t=e?JSON.parse(e):{}}return Object.assign(this.config,t),this}}]),t}();function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,n=Math.max(e-t.length,0);return"".concat(" ".repeat(n)).concat(t)}function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,n=Math.max(e-t.length,0);return"".concat(t).concat(" ".repeat(n))}function g(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:600,o=t.src.replace(/\(/g,"%28").replace(/\)/g,"%29");t.width>r&&(n=Math.min(n,r/t.width));var i=t.width*n,a=t.height*n,c=["font-size:1px;","padding:".concat(Math.floor(a/2),"px ").concat(Math.floor(i/2),"px;"),"line-height:".concat(a,"px;"),"background:url(".concat(o,");"),"background-size:".concat(i,"px ").concat(a,"px;"),"color:transparent;"].join("");return["".concat(e," %c+"),c]}var m={BLACK:30,RED:31,GREEN:32,YELLOW:33,BLUE:34,MAGENTA:35,CYAN:36,WHITE:37,BRIGHT_BLACK:90,BRIGHT_RED:91,BRIGHT_GREEN:92,BRIGHT_YELLOW:93,BRIGHT_BLUE:94,BRIGHT_MAGENTA:95,BRIGHT_CYAN:96,BRIGHT_WHITE:97};function y(t){return"string"==typeof t?m[t.toUpperCase()]||m.WHITE:t}function v(t,e,n){return l||"string"!=typeof t||(e&&(e=y(e),t="[".concat(e,"m").concat(t,"[39m")),n&&(e=y(n),t="[".concat(n+10,"m").concat(t,"[49m"))),t}function b(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){a=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["constructor"],r=Object.getPrototypeOf(t),o=Object.getOwnPropertyNames(r),i=b(o);try{var a=function(){var r=e.value;"function"==typeof t[r]&&(n.find((function(t){return r===t}))||(t[r]=t[r].bind(t)))};for(i.s();!(e=i.n()).done;)a()}catch(c){i.e(c)}finally{i.f()}}function w(t,e){if(!t)throw new Error(e||"Assertion failed")}var O=n("K9nA");function j(){var t;if(l&&O.f.performance)t=O.f.performance.now();else if(O.d.hrtime){var e=O.d.hrtime();t=1e3*e[0]+e[1]/1e6}else t=Date.now();return t}var S={debug:l&&console.debug||console.log,log:console.log,info:console.info,warn:console.warn,error:console.error},C={enabled:!0,level:0};function x(){}var I={},L={once:!0};function E(t){for(var e in t)for(var n in t[e])return n||"untitled";return"empty"}var T=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.id;Object(a.a)(this,t),this.id=n,this.VERSION=s,this._startTs=j(),this._deltaTs=j(),this.LOG_THROTTLE_TIMEOUT=0,this._storage=new p("__probe-".concat(this.id,"__"),C),this.userData={},this.timeStamp("".concat(this.id," started")),_(this),Object.seal(this)}return Object(c.a)(t,[{key:"isEnabled",value:function(){return this._storage.config.enabled}},{key:"getLevel",value:function(){return this._storage.config.level}},{key:"getTotal",value:function(){return Number((j()-this._startTs).toPrecision(10))}},{key:"getDelta",value:function(){return Number((j()-this._deltaTs).toPrecision(10))}},{key:"getPriority",value:function(){return this.level}},{key:"enable",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this._storage.updateConfiguration({enabled:t}),this}},{key:"setLevel",value:function(t){return this._storage.updateConfiguration({level:t}),this}},{key:"assert",value:function(t,e){w(t,e)}},{key:"warn",value:function(t){return this._getLogFunction(0,t,S.warn,arguments,L)}},{key:"error",value:function(t){return this._getLogFunction(0,t,S.error,arguments)}},{key:"deprecated",value:function(t,e){return this.warn("`".concat(t,"` is deprecated and will be removed in a later version. Use `").concat(e,"` instead"))}},{key:"removed",value:function(t,e){return this.error("`".concat(t,"` has been removed. Use `").concat(e,"` instead"))}},{key:"probe",value:function(t,e){return this._getLogFunction(t,e,S.log,arguments,{time:!0,once:!0})}},{key:"log",value:function(t,e){return this._getLogFunction(t,e,S.debug,arguments)}},{key:"info",value:function(t,e){return this._getLogFunction(t,e,console.info,arguments)}},{key:"once",value:function(t,e){return this._getLogFunction(t,e,S.debug||S.info,arguments,L)}},{key:"table",value:function(t,e,n){return e?this._getLogFunction(t,e,console.table||x,n&&[n],{tag:E(e)}):x}},{key:"image",value:function(t){var e=t.logLevel,r=t.priority,i=t.image,a=t.message,c=void 0===a?"":a,u=t.scale,s=void 0===u?1:u;return this._shouldLog(e||r)?l?function(t){var e=t.image,n=t.message,r=void 0===n?"":n,i=t.scale,a=void 0===i?1:i;if("string"==typeof e){var c=new Image;return c.onload=function(){var t,e=g(c,r,a);(t=console).log.apply(t,Object(o.a)(e))},c.src=e,x}var u=e.nodeName||"";if("img"===u.toLowerCase()){var s;return(s=console).log.apply(s,Object(o.a)(g(e,r,a))),x}if("canvas"===u.toLowerCase()){var l=new Image;return l.onload=function(){var t;return(t=console).log.apply(t,Object(o.a)(g(l,r,a)))},l.src=e.toDataURL(),x}return x}({image:i,message:c,scale:s}):function(t){var e=t.image,r=(t.message,t.scale),o=void 0===r?1:r,i=null;try{i=n(1)}catch(a){}if(i)return function(){return i(e,{fit:"box",width:"".concat(Math.round(80*o),"%")}).then((function(t){return console.log(t)}))};return x}({image:i,message:c,scale:s}):x}},{key:"settings",value:function(){console.table?console.table(this._storage.config):console.log(this._storage.config)}},{key:"get",value:function(t){return this._storage.config[t]}},{key:"set",value:function(t,e){this._storage.updateConfiguration(Object(i.a)({},t,e))}},{key:"time",value:function(t,e){return this._getLogFunction(t,e,console.time?console.time:console.info)}},{key:"timeEnd",value:function(t,e){return this._getLogFunction(t,e,console.timeEnd?console.timeEnd:console.info)}},{key:"timeStamp",value:function(t,e){return this._getLogFunction(t,e,console.timeStamp||x)}},{key:"group",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{collapsed:!1},r=n=N({logLevel:t,message:e,opts:n}),o=r.collapsed;return n.method=(o?console.groupCollapsed:console.group)||console.info,this._getLogFunction(n)}},{key:"groupCollapsed",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.group(t,e,Object.assign({},n,{collapsed:!0}))}},{key:"groupEnd",value:function(t){return this._getLogFunction(t,"",console.groupEnd||x)}},{key:"withGroup",value:function(t,e,n){this.group(t,e)();try{n()}finally{this.groupEnd(t)()}}},{key:"trace",value:function(){console.trace&&console.trace()}},{key:"_shouldLog",value:function(t){return this.isEnabled()&&this.getLevel()>=A(t)}},{key:"_getLogFunction",value:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0;if(this._shouldLog(t)){var a;i=N({logLevel:t,message:e,args:r,opts:i}),w(n=n||i.method),i.total=this.getTotal(),i.delta=this.getDelta(),this._deltaTs=j();var c=i.tag||i.message;if(i.once){if(I[c])return x;I[c]=j()}return e=P(this.id,i.message,i),(a=n).bind.apply(a,[console,e].concat(Object(o.a)(i.args)))}return x}},{key:"level",set:function(t){this.setLevel(t)},get:function(){return this.getLevel()}},{key:"priority",set:function(t){this.level=t},get:function(){return this.level}}]),t}();function A(t){if(!t)return 0;var e;switch(Object(r.a)(t)){case"number":e=t;break;case"object":e=t.logLevel||t.priority||0;break;default:return 0}return w(Number.isFinite(e)&&e>=0),e}function N(t){var e=t.logLevel,n=t.message;t.logLevel=A(e);for(var o=t.args?Array.from(t.args):[];o.length&&o.shift()!==n;);switch(t.args=o,Object(r.a)(e)){case"string":case"function":void 0!==n&&o.unshift(n),t.message=e;break;case"object":Object.assign(t,e)}"function"==typeof t.message&&(t.message=t.message());var i=Object(r.a)(t.message);return w("string"===i||"object"===i),Object.assign(t,t.opts)}function P(t,e,n){if("string"==typeof e){var r=n.time?h((o=n.total)<10?"".concat(o.toFixed(2),"ms"):o<100?"".concat(o.toFixed(1),"ms"):o<1e3?"".concat(o.toFixed(0),"ms"):"".concat((o/1e3).toFixed(2),"s")):"";e=v(e=n.time?"".concat(t,": ").concat(r,"  ").concat(e):"".concat(t,": ").concat(e),n.color,n.background)}var o;return e}T.VERSION=s;var M=n("I0ug");function B(){return void 0!==O.f.orientation}function R(t){if(!t&&!Object(u.a)())return"Node";if(Object(M.a)(t))return"Electron";var e="undefined"!=typeof navigator?navigator:{},n=t||e.userAgent||"";if(n.indexOf("Edge")>-1)return"Edge";var r=-1!==n.indexOf("MSIE "),o=-1!==n.indexOf("Trident/");return r||o?"IE":O.f.chrome?"Chrome":O.f.safari?"Safari":O.f.mozInnerScreenX?"Firefox":"Unknown"}var z=n("GawU"),D=function(){function t(e,n){Object(a.a)(this,t),this.name=e,this.type=n,this.sampleSize=1,this.reset()}return Object(c.a)(t,[{key:"setSampleSize",value:function(t){return this.sampleSize=t,this}},{key:"incrementCount",value:function(){return this.addCount(1),this}},{key:"decrementCount",value:function(){return this.subtractCount(1),this}},{key:"addCount",value:function(t){return this._count+=t,this._samples++,this._checkSampling(),this}},{key:"subtractCount",value:function(t){return this._count-=t,this._samples++,this._checkSampling(),this}},{key:"addTime",value:function(t){return this._time+=t,this.lastTiming=t,this._samples++,this._checkSampling(),this}},{key:"timeStart",value:function(){return this._startTime=Object(z.a)(),this._timerPending=!0,this}},{key:"timeEnd",value:function(){return this._timerPending?(this.addTime(Object(z.a)()-this._startTime),this._timerPending=!1,this._checkSampling(),this):this}},{key:"getSampleAverageCount",value:function(){return this.sampleSize>0?this.lastSampleCount/this.sampleSize:0}},{key:"getSampleAverageTime",value:function(){return this.sampleSize>0?this.lastSampleTime/this.sampleSize:0}},{key:"getSampleHz",value:function(){return this.lastSampleTime>0?this.sampleSize/(this.lastSampleTime/1e3):0}},{key:"getAverageCount",value:function(){return this.samples>0?this.count/this.samples:0}},{key:"getAverageTime",value:function(){return this.samples>0?this.time/this.samples:0}},{key:"getHz",value:function(){return this.time>0?this.samples/(this.time/1e3):0}},{key:"reset",value:function(){return this.time=0,this.count=0,this.samples=0,this.lastTiming=0,this.lastSampleTime=0,this.lastSampleCount=0,this._count=0,this._time=0,this._samples=0,this._startTime=0,this._timerPending=!1,this}},{key:"_checkSampling",value:function(){this._samples===this.sampleSize&&(this.lastSampleTime=this._time,this.lastSampleCount=this._count,this.count+=this._count,this.time+=this._time,this.samples+=this._samples,this._time=0,this._count=0,this._samples=0)}}]),t}(),H=function(){function t(e){var n=e.id,r=e.stats;Object(a.a)(this,t),this.id=n,this.stats={},this._initializeStats(r),Object.seal(this)}return Object(c.a)(t,[{key:"get",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"count";return this._getOrCreate({name:t,type:e})}},{key:"reset",value:function(){for(var t in this.stats)this.stats[t].reset();return this}},{key:"forEach",value:function(t){for(var e in this.stats)t(this.stats[e])}},{key:"getTable",value:function(){var t={};return this.forEach((function(e){t[e.name]={time:e.time||0,count:e.count||0,average:e.getAverageTime()||0,hz:e.getHz()||0}})),t}},{key:"_initializeStats",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e.forEach((function(e){return t._getOrCreate(e)}))}},{key:"_getOrCreate",value:function(t){if(!t||!t.name)return null;var e=t.name,n=t.type;return this.stats[e]||(this.stats[e]=t instanceof D?t:new D(e,n)),this.stats[e]}},{key:"size",get:function(){return Object.keys(this.stats).length}}]),t}();e.default=new T({id:"probe.gl"})},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},lSNA:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},mIDF:function(t,e,n){var r=n("a3B7"),o=r.Log,i=r.COLOR,a=new o({id:"gatsby-theme-ocular"}).enable();a.log({color:i.CYAN},"Loading ocular website generator (gatsby version)")(),t.exports.log=a,t.exports.COLOR=i},sXyB:function(t,e,n){var r=n("SksO"),o=n("b48C");function i(e,n,a){return o()?t.exports=i=Reflect.construct:t.exports=i=function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&r(i,n.prototype),i},i.apply(null,arguments)}t.exports=i},vOJQ:function(t,e,n){var r=n("lSNA");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var a=n("33yf"),c=n("mIDF"),u=c.log,s=c.COLOR;function l(t,e){var n=a.relative(t,a.dirname(e));return a.join(n,a.basename(e,".md"))}t.exports.addToRelativeLinks=function(t){var e,n=t.source,r=t.target,o=t.rootFolder,a=t.edge,c=t.relativeLinks;if(!n||!r)return u.log({color:s.YELLOW},"couldn't add relative link for: "+JSON.stringify({source:n,target:r}))(),{};var f=o&&l(o,n),p=l(a.node.fields.path,r),h="/"+r;return i(i({},c),{},((e={})[f]=h,e[p]=h,e[r]=h,e))},t.exports.parseLinks=function(t,e,n){if(t.startsWith("http")||t.startsWith("#"))return null;var r=l(e,t.replace(/#.*/,"")),o=t.match(/#.*/),i=n[r];return i?o?i+o[0]:i:null}},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))}}]);
//# sourceMappingURL=edabc02f357a74ab15879b55ba420c8a7dee8809-05aa97cab1db0167cdd2.js.map