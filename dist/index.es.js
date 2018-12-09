function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(t)}function t(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function r(n){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{},u=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),u.forEach(function(r){t(n,r,e[r])})}return n}function e(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var r=[],e=!0,u=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(e=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);e=!0);}catch(n){u=!0,o=n}finally{try{e||null==c.return||c.return()}finally{if(u)throw o}}return r}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(n){return function(n){if(Array.isArray(n)){for(var t=0,r=new Array(n.length);t<n.length;t++)r[t]=n[t];return r}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=function(n){return"@@krf/".concat(n.toUpperCase())},i=function(n){return function(t){return"".concat(n?">":"").concat(n,">").concat(t)}},c=function(n){return function(t){return o("SET".concat(i(n)(t)))}},a=function(n){return function(t){return function(r){return{type:c(n)(t),payload:r}}}},f=function(n){return function(t){return o("RESET".concat(i(n)(t)))}},l=function(n){return function(t){return function(){return{type:f(n)(t)}}}},s=function(n){return function(t){return o("ADD".concat(i(n)(t)))}},y=function(n){return function(t){return o("UPDATE".concat(i(n)(t)))}},p=function(n){return function(t){return function(r){return{type:y(n)(t),payload:r}}}},d=function(n){return function(t){return o("REMOVE".concat(i(n)(t)))}},m=function(n){return function(t){return o("ADD_OR_UPDATE".concat(i(n)(t)))}},v={data:[],initialized:!1},g=function(n){return Array.isArray(n)?n:[n]},b=function(n,t){return t.map(function(t){return[t[n],t]})},h=function(n){return function(t){return r({},n,{data:t,initialized:!0})}},A=function(n,t,r){return h(t)(b(n,g(r)))},E=function(n){return function(t,e,u){var o=new Map(e.data);return g(u).forEach(function(e){var u=o.get(e[t]);(n||e)&&o.set(e[t],r({},u,e))}),0===o.size?e:h(e)(Array.from(o.entries()))}},O=function(n,t){return void 0!==t?A(n,v,t):v},w=function(t){return function(r){return function(e){return function(o){return function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O(t,o),a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=a.payload;switch(a.type){case c(r)(e):return A(t,i,l);case s(r)(e):return function(n,t,r){return h(t)(Array.from(new Map(u(t.data).concat(u(b(n,g(r)))))))}(t,i,l);case m(r)(e):return E(!0)(t,i,l);case d(r)(e):return function(t,r,e){var u=new Map(r.data);return g(e).forEach(function(r){u.delete("object"===n(r)?r[t]:r)}),h(r)(Array.from(u.entries()))}(t,i,l);case f(r)(e):return O(t,o);case y(r)(e):return E(!1)(t,i,l);default:return i}}}}}},j=function(n,t){return t.split(".").reduce(function(n,t){return n&&n[t]},n)},D=function(n){var t={data:void 0,result:void 0};return function(r){return t.data!==r&&(t.data=r,t.result=n(r)),t.result}},S=function(n){return function(t){var r=n.path,e=n.name,u=t;return void 0!==r&&r.length>0&&(u=j(t,r)),u[e]}},T={},k=function(n){return void 0!==n?n:T},P={middlewares:[function(n){return function(n){return function(t){return function(e){return function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r({},u,{state:function(n){return function(t){return function(e){return function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k(e),o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=o.payload;switch(o.type){case c(n)(t):return i;case y(n)(t):return r({},u,i);case f(n)(t):return k(e);default:return u}}}}}(n)(t)(e)(u.state,u.action)})}}}}}],actions:{set:a,SET:c,reset:l,RESET:f,update:p,UPDATE:y},selectors:function(n){var t=S(n),r=function(){return function(n){return t(n)}};return{get:r,isInitialized:function(e){return void 0!==n.defaultData?t(e)!==n.defaultData:r()(e)!==T}}}},U={keyValue:{middlewares:[function(n){return function(t){return function(e){return function(u){return function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r({},o,{state:w(n)(t)(e)(u)(o.state,o.action)})}}}}}],actions:{set:a,SET:c,add:function(n){return function(t){return function(r){return{type:s(n)(t),payload:r}}}},ADD:s,reset:l,RESET:f,remove:function(n){return function(t){return function(r){return{type:d(n)(t),payload:r}}}},REMOVE:d,update:p,UPDATE:y,addOrUpdate:function(n){return function(t){return function(r){return{type:m(n)(t),payload:r}}}},ADD_OR_UPDATE:m},selectors:function(n){var t=S(n),r=function(n){return t(n).data},u=D(function(n){return new Map(n)}),o=D(function(n){return Array.from(u(n).keys())}),i=D(function(n){return Array.from(u(n).values())}),c=D(function(n){var t={};return n.forEach(function(n){var r=e(n,2);t[r[0]]=r[1]}),t});return{get:function(n){return function(t){var e=r(t);if(null==n)return c(e);var o=u(e);return Array.isArray(n)?n.map(function(n){return o.get(n)}):o.get(n)}},getKeys:function(n){return o(r(n))},getBy:function(n,t){return function(e){var o=i(u(r(e)));return Array.isArray(t)?o.filter(function(r){return t.includes(j(r,n))}):o.filter(function(r){return t===j(r,n)})}},getState:t,getAsArray:function(n){return i(r(n))},getLength:function(n){return r(n).length},hasKey:function(n){return function(t){return u(r(t)).has(n)}},isInitialized:function(n){return t(n).initialized}}}},simple:P,simpleObject:P},R=function(n){return function(t){return function(r){return function(e){return function(o){return function(i){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=c.type,f={state:i,action:{type:void 0===a?"UNKNOWN":a,payload:c.payload}};return u(n.pre||[]).concat(u(n.engine||[]),u(n.post||[])).map(function(n){return n(t)(r)(e)(o)}).forEach(function(n){f=n(f)}),f.state}}}}}},z={key:"id",type:"keyValue",prefix:""},M={bool:!1,string:"",array:[],object:{},number:0},x=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var o=r({},z,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),i=o.key,c=o.type,a=o.prefix,f=o.name,l=o.defaultData;"simpleObject"===c&&console.warn('/k-redux-factory/ You are using a deprecated "simpleObject" type. We recommend using one of these types: simple.object, simple.array, simple.bool or simple.string.');var s=e(c.split("."),2),y=s[1],p=U[s[0]],d=l;return void 0===d&&y&&(d=M[y]),Object.assign.apply(Object,[R(r({},n,{engine:p.middlewares}))(i)(a)(f)(d),{krfType:c}].concat(u(Object.keys(p.actions).map(function(n){return t({},n,p.actions[n](a)(f))})),[p.selectors(o)]))}},V=function(){throw Error("parameter is not a middleware configuration, nor a factory option object.")},I=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return null==t?V():function(n){return n.engine||n.pre||n.post}(t)?function(e){return x(t)(r({},e,n))}:function(n){return!!n.name||"string"==typeof n}(t)?"string"==typeof t?x()(r({name:t},n)):x()(r({},t,n)):V()}},_=I({type:"keyValue"}),K=I({type:"simple"});Object.assign(K,{object:I({type:"simple.object"}),bool:I({type:"simple.bool"}),string:I({type:"simple.string"}),array:I({type:"simple.array"}),number:I({type:"simple.number"})});var N=K,W=I();export{W as factory,K as simple,_ as keyValue,N as simpleObject};
