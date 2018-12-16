!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("path-to-regexp")):"function"==typeof define&&define.amd?define(["exports","path-to-regexp"],e):e(r.core={},r.pathToRegexp)}(this,function(r,e){e=e&&e.hasOwnProperty("default")?e.default:e;var t=function(r){return function(e,t,n){return{type:r,payload:{code:e,params:{path:t,query:n}}}}},n={push:t("@@router/PUSH"),replace:t("@@router/REPLACE"),goBack:function(r){return void 0===r&&(r=1),{type:"@@router/GO_BACK",payload:r}},goForward:function(r){return void 0===r&&(r=1),{type:"@@router/GO_FORWARD",payload:r}}},o="@@router/ROUTE_FOUND",u=Object.assign(function(r){return{type:o,payload:Object.assign({found:!0},r)}},{type:o}),a=function(r,e){return function(t){var n=r.location;if(n.pathname){var o,a=e.getState(t.getState()).routes.array.find(function(r){return!!(o=r.href.regexp.exec(n.pathname))});if(!a)return;o=a.href.parsed.map(function(r){return r.name}).filter(Boolean).reduce(function(r,e,t){var n;return Object.assign(((n={})[e]=o[t+1],n),r)},{}),t.dispatch(u({route:a,params:{path:o,query:function(r){if(r.search.length<2)return{};var e=r.search.substring(1);return JSON.parse('{"'+decodeURI(e).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')}(n)}}))}}},i=function(r,e){var t=r.history;return function(r){return function(n){var o,a=n.type,i=n.payload;switch(a){case"@@router/GO_FORWARD":return void t.go(i);case"@@router/GO_BACK":return void t.go(-1*i);case"@@router/REPLACE":case"@@router/PUSH":var c=i.code,f=i.params;void 0===f&&(f={});var s=e.getState(r.getState()).routes.map[c];if(s){var p=s.href,d={};f&&f.path&&p.parsed&&p.parsed.filter(function(r){return"object"==typeof r}).map(function(r){return r.name}).filter(function(r){return f.path[r]}).forEach(function(r){d[r]=f.path[r]});var l="",v=p.base;p.compiled&&(v=p.compiled(d)),f.query&&(l="?"+(o=f.query,Object.keys(o).map(function(r){return encodeURIComponent(r)+"="+encodeURIComponent(o[r])}).join("&"))),v=""+v+l,"@@router/PUSH"===a?t.pushState(void 0,void 0,v):t.replaceState(void 0,void 0,v);var g=Object.assign({},f);return f&&f.path&&(g.path=d),u({route:s,params:g})}return;default:return}}}},c=function(r){var e=function(e){return r(e).result},t=function(r){return e(r).route},n=function(r){return function(e){return t(e)[r]}},o=function(r){return e(r).params},u=function(r){return o(r).path},a=function(r){return o(r).query},i=function(r){return function(e){var t=u(e);if(t)return t[r]}},c=function(r){return function(e){if(a(e))return a(e)[r]}};return{getState:r,getRoute:function(e){return function(t){return r(t).routes.map[e]}},getResult:e,getCurrentCode:function(r){return t(r).code},getCurrentRoute:t,isFound:function(r){return e(r).found},getResultParam:n,getParams:o,getPathParams:u,getQueryParams:a,getPathParam:i,getQueryParam:c,getParam:function(r){return function(e){return n(r)(e)||i(r)(e)||c(r)(e)}}}},f=function(){return{type:"@@router/INIT"}},s=function(r){return!("object"!=typeof r||!r.code)},p={history:window&&window.history,location:window&&window.location};r.actions=n,r.router=function(r,t){void 0===t&&(t=p);var o=Object.assign({},p,t);if(!o.history)throw new Error("[k-redux-router] no history implementation is given");if(!o.location)throw new Error("[k-redux-router] no location implementation is given");var d={array:function(r){var t=[],n=function(r,o,u){var a={};o&&(a=Object.entries(o).filter(function(r){return!s(r[1])}).reduce(function(r,e){var t;return Object.assign(r,((t={})[e[0]]=e[1],t))},{}));var i=u;o&&(i=Object.assign(a,u,{parent:o&&o.code,href:{base:r,compiled:r.includes(":")?e.compile(r):void 0,regexp:e(r),parsed:e.parse(r)}}),t.push(i)),Object.entries(u).filter(function(r){return s(r[1])}).forEach(function(e){var t=e[1];return n([r,e[0]].join("").replace("//","/"),i,t)})};return n("",void 0,r),t.forEach(function(r){Object.entries(r).forEach(function(e){var t=e[0],n=e[1],o=n;s(n)&&(o=n.code),r[t]=o})}),t}(r)};d.map=d.array.reduce(function(r,e){var t;return Object.assign({},r,((t={})[e.code]=e,t))},{});var l=function(r,e){void 0===e&&(e={});var t=Object.assign({},{routes:r,result:{found:!1}}),o=function(r,e){void 0===r&&(r=t),void 0===e&&(e={});var n=e.payload;switch(e.type){case"@@router/ROUTE_FOUND":return Object.assign({},r,{result:n});default:return r}};return Object.assign(o,c(e.getState||function(r){return r.ui.router})),Object.assign(o,n),o}(d,o);return{middleware:function(r,e,t){var n=!1,o=a(e,t),c=i(e,t);return function(r){return function(e){return function(t){if(!t.type||!t.type.startsWith("@@router/"))return e(t);var a=e(t);"@@router/INIT"===t.type&&(o(r),n?console.warn("[k-redux-router] initialized twice"):(n=!0,window&&(window.onpopstate=function(){o(r)}))),n||t.type===u.type||console.warn("[k-redux-router] router should be initialized");var i=c(r)(t);return i&&r.dispatch(i),a}}}}(0,o,l),reducer:l,init:f}},r.selectors=c});
