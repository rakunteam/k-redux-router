!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("@k-redux-router/core"),require("prop-types"),require("react-redux")):"function"==typeof define&&define.amd?define(["exports","react","@k-redux-router/core","prop-types","react-redux"],t):t(e["@k-redux-router/react-redux"]={},e.React,null,null,null)}(this,function(e,t,r,n,o){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n;var u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},l=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(o){var a,l,f=n.getState,p=void 0===f?function(e){return e.ui.router}:f,d=n.absolute,h=void 0!==d&&d,y=r.selectors(p),v=y.getResult,b=y.getRoute,m=y.getCurrentRoute;return l=a=function(r){function n(t,r){u(this,n);var o=s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t,r));return o.toShow=function(){var t=o.context.store.getState();if(p(t)&&v(t)){var r=[].concat(e),n=m(t);if(h){var u=r.includes(n.code);u!==o.state.show&&o.setState(function(e){return c({},e,{show:u})})}else{for(var i=r.includes(n.code);n&&n.parent&&!i;)n=b(n.parent)(t),i=r.includes(n.code);i!==o.state.show&&o.setState(function(e){return c({},e,{show:i})})}}else console.error("[k-redux-router] | There is no route found in `state.ui.router.result`")},o.state={show:!1},o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t.Component),i(n,[{key:"componentWillMount",value:function(){var e=this;this.unsubscribe=this.context.store.subscribe(function(){e.toShow()}),this.toShow()}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){return this.state.show?t.createElement(o,this.props):null}}]),n}(),a.displayName=function(e){return"router("+(e.displayName||e.name||e.constructor&&e.constructor.name||"Unknown")+")"}(o),a.contextTypes={store:function(){return null}},l}};l.absolute=function(e,t){return l(e,c({},t,{absolute:!0}))};var f=function(e){var r=e.href,n=e.onClick,o=a(e,["href","onClick"]),u=o.className,i=o.children;if(void 0===r)return null;var c,s="",l=r;return r.base&&(l=r.base),r.compiled&&(l=r.compiled(o)),o.query&&(s="?"+(c=o.query,Object.keys(c).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(c[e])}).join("&"))),l=""+l+s,t.createElement("a",{className:u,href:l,onClick:n},i)};f.propTypes={className:n.string,children:n.node,href:n.oneOfType([n.string,n.shape({base:n.string,compiled:n.func})]),onClick:n.func},f.defaultProps={className:void 0,children:void 0,href:void 0,onClick:void 0};var p=r.selectors(function(e){return e.ui.router}).getRoute,d=o.connect(function(e,t){var r=t.code;return{href:p(r)(e).href}},function(e,t){var n=t.onClick,o=t.code,u=t.query,i=a(t,["onClick","code","query"]);return{onClick:function(t){n&&n(t),function(e){return function(e){return!!(e.shiftKey||e.altKey||e.metaKey||e.ctrlKey)}(e)||function(e){return e.button&&0!==e.button}(e)||e.defaultPrevented}(t)||(e(r.actions.push(o,i,u)),t.preventDefault())}}})(f);e.forRoute=l,e.Link=d,Object.defineProperty(e,"__esModule",{value:!0})});
