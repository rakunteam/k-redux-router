import r from"path-to-regexp";var t,e,n,o=function(r){return function(t,e,n){return{type:r,payload:{code:t,params:{path:e,query:n}}}}},u={push:o("@@router/PUSH"),replace:o("@@router/REPLACE")},i=function(r){return{type:"@@router/ROUTE_FOUND",payload:Object.assign({found:!0},r)}},a=function(r){return function(e){if(window&&window.location&&window.location.pathname){var n,o=r.getState(e.getState()).routes.array.find(function(r){return!!(n=r.href.regexp.exec(window.location.pathname))});n=o.href.parsed.map(function(r){return r.name}).filter(Boolean).reduce(function(r,e,o){return Object.assign(((t={})[e]=n[o+1],t),r)},{}),e.dispatch(i({route:o,params:{path:n,query:function(){var r=window.location;if(r.search.length<2)return{};var t=r.search.substring(1);return JSON.parse('{"'+decodeURI(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')}()}}))}}},c=function(r){return function(t){return function(e){var n,o=e.type,u=e.payload;switch(o){case"@@router/REPLACE":case"@@router/PUSH":var a=u.code,c=u.params,f=r.getState(t.getState()).routes.map[a];if(f){var s=f.href,d="",p=s.base;s.compiled&&(p=s.compiled(c.path)),c.query&&(d="?"+(n=c.query,Object.keys(n).map(function(r){return encodeURIComponent(r)+"="+encodeURIComponent(n[r])}).join("&"))),p=""+p+d,"@@router/PUSH"===o?window.history.pushState(void 0,void 0,p):window.history.replaceState(void 0,void 0,p)}return i({route:f,params:c});default:return}}}};function f(r){var t=function(t){return function(e){return r(e).routes.map[t]}},e=function(t){return r(t).result},n=function(r){return e(r).params},o=function(r){return n(r).path},u=function(r){return n(r).query},i=function(r){return function(t){return o(t)[r]}},a=function(r){return function(t){return u(t)[r]}};return{getState:r,getRoute:t,getResult:e,getCurrentCode:function(r){return t(r).code},getCurrentRoute:function(r){return e(r).route},isFound:function(r){return e(r).found},getParams:n,getPathParams:o,getQueryParams:u,getPathParam:i,getQueryParam:a,getParam:function(r){return function(t){return i(r)(t)||a(r)(t)}}}}function s(){return{type:"@@router/INIT"}}var d=function(r){return"object"==typeof r&&r.code},p=function(t){var n=[],o=function(t,u,i){var a={};u&&(a=Object.entries(u).filter(function(r){return!d(r[1])}).reduce(function(r,t){return Object.assign(r,((e={})[t[0]]=t[1],e))},{}));var c=i;u&&(c=Object.assign(a,i,{parent:u&&u.code,href:{base:t,compiled:t.includes(":")?r.compile(t):void 0,regexp:r(t),parsed:r.parse(t)}}),n.push(c)),Object.entries(i).filter(function(r){return d(r[1])}).forEach(function(r){var e=r[1];return o([t,r[0]].join("").replace("//","/"),c,e)})};return o("",void 0,t),n.forEach(function(r){Object.entries(r).forEach(function(t){var e=t[0],n=t[1],o=n;d(n)&&(o=n.code),r[e]=o})}),n};export default function(r,t){void 0===t&&(t={});var e=t.history;if(!e&&window&&window.history&&(e=window.history),!e)throw new Error("[k-redux-router] no history implementation is given");var o={array:p(r)};o.map=o.array.reduce(function(r,t){return Object.assign({},r,((n={})[t.code]=t,n))},{});var i=function(r,t){var e=Object.assign({},{routes:r,result:{found:!1}}),n=function(r,t){void 0===r&&(r=e),void 0===t&&(t={});var n=t.payload;switch(t.type){case"@@router/ROUTE_FOUND":return Object.assign({},r,{result:n});default:return r}};return Object.assign(n,f(t.getState||function(r){return r.ui.router})),Object.assign(n,u),n}(o,t);return{middleware:function(r,t,e){var n=!1,o=a(e),u=c(e);return function(r){return function(t){return function(e){if(!e.type||!e.type.startsWith("@@router/"))return t(e);var i=t(e);"@@router/INIT"===e.type&&(o(r),n?console.warn("[k-redux-router] initialized twice"):(n=!0,window.onpopstate=function(){o(r)})),n||"@@router/ROUTE_FOUND"===e.type||console.warn("[k-redux-router] router should be initialized");var a=u(r)(e);return a&&r.dispatch(a),i}}}}(0,0,i),reducer:i,init:s}};export{u as actions,f as selectors};
//# sourceMappingURL=index.es.js.map
