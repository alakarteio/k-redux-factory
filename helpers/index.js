!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(n["trampss-redux-factory"]=n["trampss-redux-factory"]||{})}(this,function(n){"use strict";var t=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n},r=function(n){return function(){return function(){return function(){return function(r){return t({},r,{action:n(r.action)})}}}}};n.mapAction=r,n.mapPayload=function(n){return function(e){return function(){return function(){return function(){return function(o){var u=o.action,i=u.payload,c=u.type;return!n||n.test(c)?r(function(n){return t({},n,{payload:e(i)})})()()()(o):o}}}}}},Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map
