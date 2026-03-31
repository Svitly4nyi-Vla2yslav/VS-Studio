function Y8(e,t){for(var a=0;a<t.length;a++){const i=t[a];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function a(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=a(o);fetch(o.href,l)}})();var VB=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yp={exports:{}},bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yb;function X8(){if(yb)return bo;yb=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function a(i,o,l){var u=null;if(l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),"key"in o){l={};for(var p in o)p!=="key"&&(l[p]=o[p])}else l=o;return o=l.ref,{$$typeof:e,type:i,key:u,ref:o!==void 0?o:null,props:l}}return bo.Fragment=t,bo.jsx=a,bo.jsxs=a,bo}var vb;function W8(){return vb||(vb=1,yp.exports=X8()),yp.exports}var d=W8(),vp={exports:{}},xo={},wp={exports:{}},Sp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wb;function Q8(){return wb||(wb=1,function(e){function t(D,B){var G=D.length;D.push(B);e:for(;0<G;){var Z=G-1>>>1,L=D[Z];if(0<o(L,B))D[Z]=B,D[G]=L,G=Z;else break e}}function a(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var B=D[0],G=D.pop();if(G!==B){D[0]=G;e:for(var Z=0,L=D.length,Y=L>>>1;Z<Y;){var ne=2*(Z+1)-1,ae=D[ne],se=ne+1,xe=D[se];if(0>o(ae,G))se<L&&0>o(xe,ae)?(D[Z]=xe,D[se]=G,Z=se):(D[Z]=ae,D[ne]=G,Z=ne);else if(se<L&&0>o(xe,G))D[Z]=xe,D[se]=G,Z=se;else break e}}return B}function o(D,B){var G=D.sortIndex-B.sortIndex;return G!==0?G:D.id-B.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,p=u.now();e.unstable_now=function(){return u.now()-p}}var f=[],g=[],m=1,x=null,y=3,v=!1,S=!1,k=!1,A=!1,M=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function H(D){for(var B=a(g);B!==null;){if(B.callback===null)i(g);else if(B.startTime<=D)i(g),B.sortIndex=B.expirationTime,t(f,B);else break;B=a(g)}}function E(D){if(k=!1,H(D),!S)if(a(f)!==null)S=!0,V||(V=!0,te());else{var B=a(g);B!==null&&oe(E,B.startTime-D)}}var V=!1,N=-1,O=5,X=-1;function J(){return A?!0:!(e.unstable_now()-X<O)}function $(){if(A=!1,V){var D=e.unstable_now();X=D;var B=!0;try{e:{S=!1,k&&(k=!1,z(N),N=-1),v=!0;var G=y;try{t:{for(H(D),x=a(f);x!==null&&!(x.expirationTime>D&&J());){var Z=x.callback;if(typeof Z=="function"){x.callback=null,y=x.priorityLevel;var L=Z(x.expirationTime<=D);if(D=e.unstable_now(),typeof L=="function"){x.callback=L,H(D),B=!0;break t}x===a(f)&&i(f),H(D)}else i(f);x=a(f)}if(x!==null)B=!0;else{var Y=a(g);Y!==null&&oe(E,Y.startTime-D),B=!1}}break e}finally{x=null,y=G,v=!1}B=void 0}}finally{B?te():V=!1}}}var te;if(typeof C=="function")te=function(){C($)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,le=ce.port2;ce.port1.onmessage=$,te=function(){le.postMessage(null)}}else te=function(){M($,0)};function oe(D,B){N=M(function(){D(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_next=function(D){switch(y){case 1:case 2:case 3:var B=3;break;default:B=y}var G=y;y=B;try{return D()}finally{y=G}},e.unstable_requestPaint=function(){A=!0},e.unstable_runWithPriority=function(D,B){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var G=y;y=D;try{return B()}finally{y=G}},e.unstable_scheduleCallback=function(D,B,G){var Z=e.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?Z+G:Z):G=Z,D){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=G+L,D={id:m++,callback:B,priorityLevel:D,startTime:G,expirationTime:L,sortIndex:-1},G>Z?(D.sortIndex=G,t(g,D),a(f)===null&&D===a(g)&&(k?(z(N),N=-1):k=!0,oe(E,G-Z))):(D.sortIndex=L,t(f,D),S||v||(S=!0,V||(V=!0,te()))),D},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(D){var B=y;return function(){var G=y;y=B;try{return D.apply(this,arguments)}finally{y=G}}}}(Sp)),Sp}var Sb;function Z8(){return Sb||(Sb=1,wp.exports=Q8()),wp.exports}var kp={exports:{}},ye={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kb;function J8(){if(kb)return ye;kb=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),x=Symbol.iterator;function y(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,k={};function A(L,Y,ne){this.props=L,this.context=Y,this.refs=k,this.updater=ne||v}A.prototype.isReactComponent={},A.prototype.setState=function(L,Y){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,Y,"setState")},A.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function M(){}M.prototype=A.prototype;function z(L,Y,ne){this.props=L,this.context=Y,this.refs=k,this.updater=ne||v}var C=z.prototype=new M;C.constructor=z,S(C,A.prototype),C.isPureReactComponent=!0;var H=Array.isArray,E={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function N(L,Y,ne,ae,se,xe){return ne=xe.ref,{$$typeof:e,type:L,key:Y,ref:ne!==void 0?ne:null,props:xe}}function O(L,Y){return N(L.type,Y,void 0,void 0,void 0,L.props)}function X(L){return typeof L=="object"&&L!==null&&L.$$typeof===e}function J(L){var Y={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ne){return Y[ne]})}var $=/\/+/g;function te(L,Y){return typeof L=="object"&&L!==null&&L.key!=null?J(""+L.key):Y.toString(36)}function ce(){}function le(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(ce,ce):(L.status="pending",L.then(function(Y){L.status==="pending"&&(L.status="fulfilled",L.value=Y)},function(Y){L.status==="pending"&&(L.status="rejected",L.reason=Y)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function oe(L,Y,ne,ae,se){var xe=typeof L;(xe==="undefined"||xe==="boolean")&&(L=null);var de=!1;if(L===null)de=!0;else switch(xe){case"bigint":case"string":case"number":de=!0;break;case"object":switch(L.$$typeof){case e:case t:de=!0;break;case m:return de=L._init,oe(de(L._payload),Y,ne,ae,se)}}if(de)return se=se(L),de=ae===""?"."+te(L,0):ae,H(se)?(ne="",de!=null&&(ne=de.replace($,"$&/")+"/"),oe(se,Y,ne,"",function(Lt){return Lt})):se!=null&&(X(se)&&(se=O(se,ne+(se.key==null||L&&L.key===se.key?"":(""+se.key).replace($,"$&/")+"/")+de)),Y.push(se)),1;de=0;var bt=ae===""?".":ae+":";if(H(L))for(var Oe=0;Oe<L.length;Oe++)ae=L[Oe],xe=bt+te(ae,Oe),de+=oe(ae,Y,ne,xe,se);else if(Oe=y(L),typeof Oe=="function")for(L=Oe.call(L),Oe=0;!(ae=L.next()).done;)ae=ae.value,xe=bt+te(ae,Oe++),de+=oe(ae,Y,ne,xe,se);else if(xe==="object"){if(typeof L.then=="function")return oe(le(L),Y,ne,ae,se);throw Y=String(L),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return de}function D(L,Y,ne){if(L==null)return L;var ae=[],se=0;return oe(L,ae,"","",function(xe){return Y.call(ne,xe,se++)}),ae}function B(L){if(L._status===-1){var Y=L._result;Y=Y(),Y.then(function(ne){(L._status===0||L._status===-1)&&(L._status=1,L._result=ne)},function(ne){(L._status===0||L._status===-1)&&(L._status=2,L._result=ne)}),L._status===-1&&(L._status=0,L._result=Y)}if(L._status===1)return L._result.default;throw L._result}var G=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Z(){}return ye.Children={map:D,forEach:function(L,Y,ne){D(L,function(){Y.apply(this,arguments)},ne)},count:function(L){var Y=0;return D(L,function(){Y++}),Y},toArray:function(L){return D(L,function(Y){return Y})||[]},only:function(L){if(!X(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},ye.Component=A,ye.Fragment=a,ye.Profiler=o,ye.PureComponent=z,ye.StrictMode=i,ye.Suspense=f,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,ye.__COMPILER_RUNTIME={__proto__:null,c:function(L){return E.H.useMemoCache(L)}},ye.cache=function(L){return function(){return L.apply(null,arguments)}},ye.cloneElement=function(L,Y,ne){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var ae=S({},L.props),se=L.key,xe=void 0;if(Y!=null)for(de in Y.ref!==void 0&&(xe=void 0),Y.key!==void 0&&(se=""+Y.key),Y)!V.call(Y,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&Y.ref===void 0||(ae[de]=Y[de]);var de=arguments.length-2;if(de===1)ae.children=ne;else if(1<de){for(var bt=Array(de),Oe=0;Oe<de;Oe++)bt[Oe]=arguments[Oe+2];ae.children=bt}return N(L.type,se,void 0,void 0,xe,ae)},ye.createContext=function(L){return L={$$typeof:u,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:l,_context:L},L},ye.createElement=function(L,Y,ne){var ae,se={},xe=null;if(Y!=null)for(ae in Y.key!==void 0&&(xe=""+Y.key),Y)V.call(Y,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(se[ae]=Y[ae]);var de=arguments.length-2;if(de===1)se.children=ne;else if(1<de){for(var bt=Array(de),Oe=0;Oe<de;Oe++)bt[Oe]=arguments[Oe+2];se.children=bt}if(L&&L.defaultProps)for(ae in de=L.defaultProps,de)se[ae]===void 0&&(se[ae]=de[ae]);return N(L,xe,void 0,void 0,null,se)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(L){return{$$typeof:p,render:L}},ye.isValidElement=X,ye.lazy=function(L){return{$$typeof:m,_payload:{_status:-1,_result:L},_init:B}},ye.memo=function(L,Y){return{$$typeof:g,type:L,compare:Y===void 0?null:Y}},ye.startTransition=function(L){var Y=E.T,ne={};E.T=ne;try{var ae=L(),se=E.S;se!==null&&se(ne,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(Z,G)}catch(xe){G(xe)}finally{E.T=Y}},ye.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},ye.use=function(L){return E.H.use(L)},ye.useActionState=function(L,Y,ne){return E.H.useActionState(L,Y,ne)},ye.useCallback=function(L,Y){return E.H.useCallback(L,Y)},ye.useContext=function(L){return E.H.useContext(L)},ye.useDebugValue=function(){},ye.useDeferredValue=function(L,Y){return E.H.useDeferredValue(L,Y)},ye.useEffect=function(L,Y,ne){var ae=E.H;if(typeof ne=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ae.useEffect(L,Y)},ye.useId=function(){return E.H.useId()},ye.useImperativeHandle=function(L,Y,ne){return E.H.useImperativeHandle(L,Y,ne)},ye.useInsertionEffect=function(L,Y){return E.H.useInsertionEffect(L,Y)},ye.useLayoutEffect=function(L,Y){return E.H.useLayoutEffect(L,Y)},ye.useMemo=function(L,Y){return E.H.useMemo(L,Y)},ye.useOptimistic=function(L,Y){return E.H.useOptimistic(L,Y)},ye.useReducer=function(L,Y,ne){return E.H.useReducer(L,Y,ne)},ye.useRef=function(L){return E.H.useRef(L)},ye.useState=function(L){return E.H.useState(L)},ye.useSyncExternalStore=function(L,Y,ne){return E.H.useSyncExternalStore(L,Y,ne)},ye.useTransition=function(){return E.H.useTransition()},ye.version="19.1.1",ye}var Tb;function mg(){return Tb||(Tb=1,kp.exports=J8()),kp.exports}var Tp={exports:{}},Pt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jb;function eS(){if(jb)return Pt;jb=1;var e=mg();function t(f){var g="https://react.dev/errors/"+f;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)g+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+f+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var i={d:{f:a,r:function(){throw Error(t(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(f,g,m){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:x==null?null:""+x,children:f,containerInfo:g,implementation:m}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(f,g){if(f==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Pt.createPortal=function(f,g){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return l(f,g,null,m)},Pt.flushSync=function(f){var g=u.T,m=i.p;try{if(u.T=null,i.p=2,f)return f()}finally{u.T=g,i.p=m,i.d.f()}},Pt.preconnect=function(f,g){typeof f=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,i.d.C(f,g))},Pt.prefetchDNS=function(f){typeof f=="string"&&i.d.D(f)},Pt.preinit=function(f,g){if(typeof f=="string"&&g&&typeof g.as=="string"){var m=g.as,x=p(m,g.crossOrigin),y=typeof g.integrity=="string"?g.integrity:void 0,v=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;m==="style"?i.d.S(f,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:v}):m==="script"&&i.d.X(f,{crossOrigin:x,integrity:y,fetchPriority:v,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Pt.preinitModule=function(f,g){if(typeof f=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var m=p(g.as,g.crossOrigin);i.d.M(f,{crossOrigin:m,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&i.d.M(f)},Pt.preload=function(f,g){if(typeof f=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var m=g.as,x=p(m,g.crossOrigin);i.d.L(f,m,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Pt.preloadModule=function(f,g){if(typeof f=="string")if(g){var m=p(g.as,g.crossOrigin);i.d.m(f,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:m,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else i.d.m(f)},Pt.requestFormReset=function(f){i.d.r(f)},Pt.unstable_batchedUpdates=function(f,g){return f(g)},Pt.useFormState=function(f,g,m){return u.H.useFormState(f,g,m)},Pt.useFormStatus=function(){return u.H.useHostTransitionStatus()},Pt.version="19.1.1",Pt}var Cb;function Vv(){if(Cb)return Tp.exports;Cb=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Tp.exports=eS(),Tp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ab;function tS(){if(Ab)return xo;Ab=1;var e=Z8(),t=mg(),a=Vv();function i(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var r=n,s=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(s=r.return),n=r.return;while(n)}return r.tag===3?s:null}function u(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function p(n){if(l(n)!==n)throw Error(i(188))}function f(n){var r=n.alternate;if(!r){if(r=l(n),r===null)throw Error(i(188));return r!==n?null:n}for(var s=n,c=r;;){var h=s.return;if(h===null)break;var b=h.alternate;if(b===null){if(c=h.return,c!==null){s=c;continue}break}if(h.child===b.child){for(b=h.child;b;){if(b===s)return p(h),n;if(b===c)return p(h),r;b=b.sibling}throw Error(i(188))}if(s.return!==c.return)s=h,c=b;else{for(var w=!1,T=h.child;T;){if(T===s){w=!0,s=h,c=b;break}if(T===c){w=!0,c=h,s=b;break}T=T.sibling}if(!w){for(T=b.child;T;){if(T===s){w=!0,s=b,c=h;break}if(T===c){w=!0,c=b,s=h;break}T=T.sibling}if(!w)throw Error(i(189))}}if(s.alternate!==c)throw Error(i(190))}if(s.tag!==3)throw Error(i(188));return s.stateNode.current===s?n:r}function g(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=g(n),r!==null)return r;n=n.sibling}return null}var m=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),C=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),X=Symbol.for("react.activity"),J=Symbol.for("react.memo_cache_sentinel"),$=Symbol.iterator;function te(n){return n===null||typeof n!="object"?null:(n=$&&n[$]||n["@@iterator"],typeof n=="function"?n:null)}var ce=Symbol.for("react.client.reference");function le(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===ce?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case S:return"Fragment";case A:return"Profiler";case k:return"StrictMode";case E:return"Suspense";case V:return"SuspenseList";case X:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case v:return"Portal";case C:return(n.displayName||"Context")+".Provider";case z:return(n._context.displayName||"Context")+".Consumer";case H:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case N:return r=n.displayName||null,r!==null?r:le(n.type)||"Memo";case O:r=n._payload,n=n._init;try{return le(n(r))}catch{}}return null}var oe=Array.isArray,D=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},Z=[],L=-1;function Y(n){return{current:n}}function ne(n){0>L||(n.current=Z[L],Z[L]=null,L--)}function ae(n,r){L++,Z[L]=n.current,n.current=r}var se=Y(null),xe=Y(null),de=Y(null),bt=Y(null);function Oe(n,r){switch(ae(de,r),ae(xe,n),ae(se,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?K2(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=K2(r),n=Y2(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ne(se),ae(se,n)}function Lt(){ne(se),ne(xe),ne(de)}function gi(n){n.memoizedState!==null&&ae(bt,n);var r=se.current,s=Y2(r,n.type);r!==s&&(ae(xe,n),ae(se,s))}function da(n){xe.current===n&&(ne(se),ne(xe)),bt.current===n&&(ne(bt),fo._currentValue=G)}var bn=Object.prototype.hasOwnProperty,rd=e.unstable_scheduleCallback,sd=e.unstable_cancelCallback,Cw=e.unstable_shouldYield,Aw=e.unstable_requestPaint,Gn=e.unstable_now,Ew=e.unstable_getCurrentPriorityLevel,Am=e.unstable_ImmediatePriority,Em=e.unstable_UserBlockingPriority,ml=e.unstable_NormalPriority,Mw=e.unstable_LowPriority,Mm=e.unstable_IdlePriority,zw=e.log,Rw=e.unstable_setDisableYieldValue,ys=null,tn=null;function Pa(n){if(typeof zw=="function"&&Rw(n),tn&&typeof tn.setStrictMode=="function")try{tn.setStrictMode(ys,n)}catch{}}var nn=Math.clz32?Math.clz32:Dw,Lw=Math.log,Ow=Math.LN2;function Dw(n){return n>>>=0,n===0?32:31-(Lw(n)/Ow|0)|0}var bl=256,xl=4194304;function mi(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function yl(n,r,s){var c=n.pendingLanes;if(c===0)return 0;var h=0,b=n.suspendedLanes,w=n.pingedLanes;n=n.warmLanes;var T=c&134217727;return T!==0?(c=T&~b,c!==0?h=mi(c):(w&=T,w!==0?h=mi(w):s||(s=T&~n,s!==0&&(h=mi(s))))):(T=c&~b,T!==0?h=mi(T):w!==0?h=mi(w):s||(s=c&~n,s!==0&&(h=mi(s)))),h===0?0:r!==0&&r!==h&&(r&b)===0&&(b=h&-h,s=r&-r,b>=s||b===32&&(s&4194048)!==0)?r:h}function vs(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function Pw(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zm(){var n=bl;return bl<<=1,(bl&4194048)===0&&(bl=256),n}function Rm(){var n=xl;return xl<<=1,(xl&62914560)===0&&(xl=4194304),n}function od(n){for(var r=[],s=0;31>s;s++)r.push(n);return r}function ws(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Vw(n,r,s,c,h,b){var w=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var T=n.entanglements,P=n.expirationTimes,F=n.hiddenUpdates;for(s=w&~s;0<s;){var W=31-nn(s),ee=1<<W;T[W]=0,P[W]=-1;var q=F[W];if(q!==null)for(F[W]=null,W=0;W<q.length;W++){var K=q[W];K!==null&&(K.lane&=-536870913)}s&=~ee}c!==0&&Lm(n,c,0),b!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=b&~(w&~r))}function Lm(n,r,s){n.pendingLanes|=r,n.suspendedLanes&=~r;var c=31-nn(r);n.entangledLanes|=r,n.entanglements[c]=n.entanglements[c]|1073741824|s&4194090}function Om(n,r){var s=n.entangledLanes|=r;for(n=n.entanglements;s;){var c=31-nn(s),h=1<<c;h&r|n[c]&r&&(n[c]|=r),s&=~h}}function ld(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function cd(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Dm(){var n=B.p;return n!==0?n:(n=window.event,n===void 0?32:pb(n.type))}function Nw(n,r){var s=B.p;try{return B.p=n,r()}finally{B.p=s}}var Va=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Va,Ut="__reactProps$"+Va,Wi="__reactContainer$"+Va,ud="__reactEvents$"+Va,Bw="__reactListeners$"+Va,_w="__reactHandles$"+Va,Pm="__reactResources$"+Va,Ss="__reactMarker$"+Va;function dd(n){delete n[Ot],delete n[Ut],delete n[ud],delete n[Bw],delete n[_w]}function Qi(n){var r=n[Ot];if(r)return r;for(var s=n.parentNode;s;){if(r=s[Wi]||s[Ot]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(n=Z2(n);n!==null;){if(s=n[Ot])return s;n=Z2(n)}return r}n=s,s=n.parentNode}return null}function Zi(n){if(n=n[Ot]||n[Wi]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function ks(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(i(33))}function Ji(n){var r=n[Pm];return r||(r=n[Pm]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function xt(n){n[Ss]=!0}var Vm=new Set,Nm={};function bi(n,r){er(n,r),er(n+"Capture",r)}function er(n,r){for(Nm[n]=r,n=0;n<r.length;n++)Vm.add(r[n])}var $w=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bm={},_m={};function Hw(n){return bn.call(_m,n)?!0:bn.call(Bm,n)?!1:$w.test(n)?_m[n]=!0:(Bm[n]=!0,!1)}function vl(n,r,s){if(Hw(r))if(s===null)n.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var c=r.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+s)}}function wl(n,r,s){if(s===null)n.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+s)}}function fa(n,r,s,c){if(c===null)n.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(r,s,""+c)}}var fd,$m;function tr(n){if(fd===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);fd=r&&r[1]||"",$m=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fd+n+$m}var pd=!1;function hd(n,r){if(!n||pd)return"";pd=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(r){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(K){var q=K}Reflect.construct(n,[],ee)}else{try{ee.call()}catch(K){q=K}n.call(ee.prototype)}}else{try{throw Error()}catch(K){q=K}(ee=n())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(K){if(K&&q&&typeof K.stack=="string")return[K.stack,q.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var b=c.DetermineComponentFrameRoot(),w=b[0],T=b[1];if(w&&T){var P=w.split(`
`),F=T.split(`
`);for(h=c=0;c<P.length&&!P[c].includes("DetermineComponentFrameRoot");)c++;for(;h<F.length&&!F[h].includes("DetermineComponentFrameRoot");)h++;if(c===P.length||h===F.length)for(c=P.length-1,h=F.length-1;1<=c&&0<=h&&P[c]!==F[h];)h--;for(;1<=c&&0<=h;c--,h--)if(P[c]!==F[h]){if(c!==1||h!==1)do if(c--,h--,0>h||P[c]!==F[h]){var W=`
`+P[c].replace(" at new "," at ");return n.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",n.displayName)),W}while(1<=c&&0<=h);break}}}finally{pd=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?tr(s):""}function Uw(n){switch(n.tag){case 26:case 27:case 5:return tr(n.type);case 16:return tr("Lazy");case 13:return tr("Suspense");case 19:return tr("SuspenseList");case 0:case 15:return hd(n.type,!1);case 11:return hd(n.type.render,!1);case 1:return hd(n.type,!0);case 31:return tr("Activity");default:return""}}function Hm(n){try{var r="";do r+=Uw(n),n=n.return;while(n);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function xn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Um(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Gw(n){var r=Um(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,b=s.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(w){c=""+w,b.call(this,w)}}),Object.defineProperty(n,r,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Sl(n){n._valueTracker||(n._valueTracker=Gw(n))}function Gm(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var s=r.getValue(),c="";return n&&(c=Um(n)?n.checked?"true":"false":n.value),n=c,n!==s?(r.setValue(n),!0):!1}function kl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Iw=/[\n"\\]/g;function yn(n){return n.replace(Iw,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function gd(n,r,s,c,h,b,w,T){n.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?n.type=w:n.removeAttribute("type"),r!=null?w==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+xn(r)):n.value!==""+xn(r)&&(n.value=""+xn(r)):w!=="submit"&&w!=="reset"||n.removeAttribute("value"),r!=null?md(n,w,xn(r)):s!=null?md(n,w,xn(s)):c!=null&&n.removeAttribute("value"),h==null&&b!=null&&(n.defaultChecked=!!b),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.name=""+xn(T):n.removeAttribute("name")}function Im(n,r,s,c,h,b,w,T){if(b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(n.type=b),r!=null||s!=null){if(!(b!=="submit"&&b!=="reset"||r!=null))return;s=s!=null?""+xn(s):"",r=r!=null?""+xn(r):s,T||r===n.value||(n.value=r),n.defaultValue=r}c=c??h,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=T?n.checked:!!c,n.defaultChecked=!!c,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(n.name=w)}function md(n,r,s){r==="number"&&kl(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function nr(n,r,s,c){if(n=n.options,r){r={};for(var h=0;h<s.length;h++)r["$"+s[h]]=!0;for(s=0;s<n.length;s++)h=r.hasOwnProperty("$"+n[s].value),n[s].selected!==h&&(n[s].selected=h),h&&c&&(n[s].defaultSelected=!0)}else{for(s=""+xn(s),r=null,h=0;h<n.length;h++){if(n[h].value===s){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function Fm(n,r,s){if(r!=null&&(r=""+xn(r),r!==n.value&&(n.value=r),s==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=s!=null?""+xn(s):""}function qm(n,r,s,c){if(r==null){if(c!=null){if(s!=null)throw Error(i(92));if(oe(c)){if(1<c.length)throw Error(i(93));c=c[0]}s=c}s==null&&(s=""),r=s}s=xn(r),n.defaultValue=s,c=n.textContent,c===s&&c!==""&&c!==null&&(n.value=c)}function ar(n,r){if(r){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=r;return}}n.textContent=r}var Fw=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Km(n,r,s){var c=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":c?n.setProperty(r,s):typeof s!="number"||s===0||Fw.has(r)?r==="float"?n.cssFloat=s:n[r]=(""+s).trim():n[r]=s+"px"}function Ym(n,r,s){if(r!=null&&typeof r!="object")throw Error(i(62));if(n=n.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||r!=null&&r.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var h in r)c=r[h],r.hasOwnProperty(h)&&s[h]!==c&&Km(n,h,c)}else for(var b in r)r.hasOwnProperty(b)&&Km(n,b,r[b])}function bd(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qw=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Kw=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tl(n){return Kw.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var xd=null;function yd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ir=null,rr=null;function Xm(n){var r=Zi(n);if(r&&(n=r.stateNode)){var s=n[Ut]||null;e:switch(n=r.stateNode,r.type){case"input":if(gd(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+yn(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var c=s[r];if(c!==n&&c.form===n.form){var h=c[Ut]||null;if(!h)throw Error(i(90));gd(c,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<s.length;r++)c=s[r],c.form===n.form&&Gm(c)}break e;case"textarea":Fm(n,s.value,s.defaultValue);break e;case"select":r=s.value,r!=null&&nr(n,!!s.multiple,r,!1)}}}var vd=!1;function Wm(n,r,s){if(vd)return n(r,s);vd=!0;try{var c=n(r);return c}finally{if(vd=!1,(ir!==null||rr!==null)&&(cc(),ir&&(r=ir,n=rr,rr=ir=null,Xm(r),n)))for(r=0;r<n.length;r++)Xm(n[r])}}function Ts(n,r){var s=n.stateNode;if(s===null)return null;var c=s[Ut]||null;if(c===null)return null;s=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(i(231,r,typeof s));return s}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wd=!1;if(pa)try{var js={};Object.defineProperty(js,"passive",{get:function(){wd=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{wd=!1}var Na=null,Sd=null,jl=null;function Qm(){if(jl)return jl;var n,r=Sd,s=r.length,c,h="value"in Na?Na.value:Na.textContent,b=h.length;for(n=0;n<s&&r[n]===h[n];n++);var w=s-n;for(c=1;c<=w&&r[s-c]===h[b-c];c++);return jl=h.slice(n,1<c?1-c:void 0)}function Cl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Al(){return!0}function Zm(){return!1}function Gt(n){function r(s,c,h,b,w){this._reactName=s,this._targetInst=h,this.type=c,this.nativeEvent=b,this.target=w,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(s=n[T],this[T]=s?s(b):b[T]);return this.isDefaultPrevented=(b.defaultPrevented!=null?b.defaultPrevented:b.returnValue===!1)?Al:Zm,this.isPropagationStopped=Zm,this}return m(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Al)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Al)},persist:function(){},isPersistent:Al}),r}var xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},El=Gt(xi),Cs=m({},xi,{view:0,detail:0}),Yw=Gt(Cs),kd,Td,As,Ml=m({},Cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==As&&(As&&n.type==="mousemove"?(kd=n.screenX-As.screenX,Td=n.screenY-As.screenY):Td=kd=0,As=n),kd)},movementY:function(n){return"movementY"in n?n.movementY:Td}}),Jm=Gt(Ml),Xw=m({},Ml,{dataTransfer:0}),Ww=Gt(Xw),Qw=m({},Cs,{relatedTarget:0}),jd=Gt(Qw),Zw=m({},xi,{animationName:0,elapsedTime:0,pseudoElement:0}),Jw=Gt(Zw),e6=m({},xi,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),t6=Gt(e6),n6=m({},xi,{data:0}),e0=Gt(n6),a6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},r6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s6(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=r6[n])?!!r[n]:!1}function Cd(){return s6}var o6=m({},Cs,{key:function(n){if(n.key){var r=a6[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Cl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?i6[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cd,charCode:function(n){return n.type==="keypress"?Cl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Cl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),l6=Gt(o6),c6=m({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),t0=Gt(c6),u6=m({},Cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cd}),d6=Gt(u6),f6=m({},xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),p6=Gt(f6),h6=m({},Ml,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),g6=Gt(h6),m6=m({},xi,{newState:0,oldState:0}),b6=Gt(m6),x6=[9,13,27,32],Ad=pa&&"CompositionEvent"in window,Es=null;pa&&"documentMode"in document&&(Es=document.documentMode);var y6=pa&&"TextEvent"in window&&!Es,n0=pa&&(!Ad||Es&&8<Es&&11>=Es),a0=" ",i0=!1;function r0(n,r){switch(n){case"keyup":return x6.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function s0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var sr=!1;function v6(n,r){switch(n){case"compositionend":return s0(r);case"keypress":return r.which!==32?null:(i0=!0,a0);case"textInput":return n=r.data,n===a0&&i0?null:n;default:return null}}function w6(n,r){if(sr)return n==="compositionend"||!Ad&&r0(n,r)?(n=Qm(),jl=Sd=Na=null,sr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return n0&&r.locale!=="ko"?null:r.data;default:return null}}var S6={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function o0(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!S6[n.type]:r==="textarea"}function l0(n,r,s,c){ir?rr?rr.push(c):rr=[c]:ir=c,r=gc(r,"onChange"),0<r.length&&(s=new El("onChange","change",null,s,c),n.push({event:s,listeners:r}))}var Ms=null,zs=null;function k6(n){U2(n,0)}function zl(n){var r=ks(n);if(Gm(r))return n}function c0(n,r){if(n==="change")return r}var u0=!1;if(pa){var Ed;if(pa){var Md="oninput"in document;if(!Md){var d0=document.createElement("div");d0.setAttribute("oninput","return;"),Md=typeof d0.oninput=="function"}Ed=Md}else Ed=!1;u0=Ed&&(!document.documentMode||9<document.documentMode)}function f0(){Ms&&(Ms.detachEvent("onpropertychange",p0),zs=Ms=null)}function p0(n){if(n.propertyName==="value"&&zl(zs)){var r=[];l0(r,zs,n,yd(n)),Wm(k6,r)}}function T6(n,r,s){n==="focusin"?(f0(),Ms=r,zs=s,Ms.attachEvent("onpropertychange",p0)):n==="focusout"&&f0()}function j6(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return zl(zs)}function C6(n,r){if(n==="click")return zl(r)}function A6(n,r){if(n==="input"||n==="change")return zl(r)}function E6(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var an=typeof Object.is=="function"?Object.is:E6;function Rs(n,r){if(an(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var s=Object.keys(n),c=Object.keys(r);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var h=s[c];if(!bn.call(r,h)||!an(n[h],r[h]))return!1}return!0}function h0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function g0(n,r){var s=h0(n);n=0;for(var c;s;){if(s.nodeType===3){if(c=n+s.textContent.length,n<=r&&c>=r)return{node:s,offset:r-n};n=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=h0(s)}}function m0(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?m0(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function b0(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=kl(n.document);r instanceof n.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)n=r.contentWindow;else break;r=kl(n.document)}return r}function zd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var M6=pa&&"documentMode"in document&&11>=document.documentMode,or=null,Rd=null,Ls=null,Ld=!1;function x0(n,r,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ld||or==null||or!==kl(c)||(c=or,"selectionStart"in c&&zd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ls&&Rs(Ls,c)||(Ls=c,c=gc(Rd,"onSelect"),0<c.length&&(r=new El("onSelect","select",null,r,s),n.push({event:r,listeners:c}),r.target=or)))}function yi(n,r){var s={};return s[n.toLowerCase()]=r.toLowerCase(),s["Webkit"+n]="webkit"+r,s["Moz"+n]="moz"+r,s}var lr={animationend:yi("Animation","AnimationEnd"),animationiteration:yi("Animation","AnimationIteration"),animationstart:yi("Animation","AnimationStart"),transitionrun:yi("Transition","TransitionRun"),transitionstart:yi("Transition","TransitionStart"),transitioncancel:yi("Transition","TransitionCancel"),transitionend:yi("Transition","TransitionEnd")},Od={},y0={};pa&&(y0=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function vi(n){if(Od[n])return Od[n];if(!lr[n])return n;var r=lr[n],s;for(s in r)if(r.hasOwnProperty(s)&&s in y0)return Od[n]=r[s];return n}var v0=vi("animationend"),w0=vi("animationiteration"),S0=vi("animationstart"),z6=vi("transitionrun"),R6=vi("transitionstart"),L6=vi("transitioncancel"),k0=vi("transitionend"),T0=new Map,Dd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Dd.push("scrollEnd");function zn(n,r){T0.set(n,r),bi(r,[n])}var j0=new WeakMap;function vn(n,r){if(typeof n=="object"&&n!==null){var s=j0.get(n);return s!==void 0?s:(r={value:n,source:r,stack:Hm(r)},j0.set(n,r),r)}return{value:n,source:r,stack:Hm(r)}}var wn=[],cr=0,Pd=0;function Rl(){for(var n=cr,r=Pd=cr=0;r<n;){var s=wn[r];wn[r++]=null;var c=wn[r];wn[r++]=null;var h=wn[r];wn[r++]=null;var b=wn[r];if(wn[r++]=null,c!==null&&h!==null){var w=c.pending;w===null?h.next=h:(h.next=w.next,w.next=h),c.pending=h}b!==0&&C0(s,h,b)}}function Ll(n,r,s,c){wn[cr++]=n,wn[cr++]=r,wn[cr++]=s,wn[cr++]=c,Pd|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function Vd(n,r,s,c){return Ll(n,r,s,c),Ol(n)}function ur(n,r){return Ll(n,null,null,r),Ol(n)}function C0(n,r,s){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s);for(var h=!1,b=n.return;b!==null;)b.childLanes|=s,c=b.alternate,c!==null&&(c.childLanes|=s),b.tag===22&&(n=b.stateNode,n===null||n._visibility&1||(h=!0)),n=b,b=b.return;return n.tag===3?(b=n.stateNode,h&&r!==null&&(h=31-nn(s),n=b.hiddenUpdates,c=n[h],c===null?n[h]=[r]:c.push(r),r.lane=s|536870912),b):null}function Ol(n){if(50<ao)throw ao=0,Gf=null,Error(i(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var dr={};function O6(n,r,s,c){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rn(n,r,s,c){return new O6(n,r,s,c)}function Nd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ha(n,r){var s=n.alternate;return s===null?(s=rn(n.tag,r,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=r,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,r=n.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function A0(n,r){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,r=s.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function Dl(n,r,s,c,h,b){var w=0;if(c=n,typeof n=="function")Nd(n)&&(w=1);else if(typeof n=="string")w=P8(n,s,se.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case X:return n=rn(31,s,r,h),n.elementType=X,n.lanes=b,n;case S:return wi(s.children,h,b,r);case k:w=8,h|=24;break;case A:return n=rn(12,s,r,h|2),n.elementType=A,n.lanes=b,n;case E:return n=rn(13,s,r,h),n.elementType=E,n.lanes=b,n;case V:return n=rn(19,s,r,h),n.elementType=V,n.lanes=b,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case M:case C:w=10;break e;case z:w=9;break e;case H:w=11;break e;case N:w=14;break e;case O:w=16,c=null;break e}w=29,s=Error(i(130,n===null?"null":typeof n,"")),c=null}return r=rn(w,s,r,h),r.elementType=n,r.type=c,r.lanes=b,r}function wi(n,r,s,c){return n=rn(7,n,c,r),n.lanes=s,n}function Bd(n,r,s){return n=rn(6,n,null,r),n.lanes=s,n}function _d(n,r,s){return r=rn(4,n.children!==null?n.children:[],n.key,r),r.lanes=s,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var fr=[],pr=0,Pl=null,Vl=0,Sn=[],kn=0,Si=null,ga=1,ma="";function ki(n,r){fr[pr++]=Vl,fr[pr++]=Pl,Pl=n,Vl=r}function E0(n,r,s){Sn[kn++]=ga,Sn[kn++]=ma,Sn[kn++]=Si,Si=n;var c=ga;n=ma;var h=32-nn(c)-1;c&=~(1<<h),s+=1;var b=32-nn(r)+h;if(30<b){var w=h-h%5;b=(c&(1<<w)-1).toString(32),c>>=w,h-=w,ga=1<<32-nn(r)+h|s<<h|c,ma=b+n}else ga=1<<b|s<<h|c,ma=n}function $d(n){n.return!==null&&(ki(n,1),E0(n,1,0))}function Hd(n){for(;n===Pl;)Pl=fr[--pr],fr[pr]=null,Vl=fr[--pr],fr[pr]=null;for(;n===Si;)Si=Sn[--kn],Sn[kn]=null,ma=Sn[--kn],Sn[kn]=null,ga=Sn[--kn],Sn[kn]=null}var $t=null,tt=null,ze=!1,Ti=null,In=!1,Ud=Error(i(519));function ji(n){var r=Error(i(418,""));throw Ps(vn(r,n)),Ud}function M0(n){var r=n.stateNode,s=n.type,c=n.memoizedProps;switch(r[Ot]=n,r[Ut]=c,s){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(s=0;s<ro.length;s++)je(ro[s],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":je("invalid",r),Im(r,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Sl(r);break;case"select":je("invalid",r);break;case"textarea":je("invalid",r),qm(r,c.value,c.defaultValue,c.children),Sl(r)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||c.suppressHydrationWarning===!0||q2(r.textContent,s)?(c.popover!=null&&(je("beforetoggle",r),je("toggle",r)),c.onScroll!=null&&je("scroll",r),c.onScrollEnd!=null&&je("scrollend",r),c.onClick!=null&&(r.onclick=mc),r=!0):r=!1,r||ji(n)}function z0(n){for($t=n.return;$t;)switch($t.tag){case 5:case 13:In=!1;return;case 27:case 3:In=!0;return;default:$t=$t.return}}function Os(n){if(n!==$t)return!1;if(!ze)return z0(n),ze=!0,!1;var r=n.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||rp(n.type,n.memoizedProps)),s=!s),s&&tt&&ji(n),z0(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(r===0){tt=Ln(n.nextSibling);break e}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;n=n.nextSibling}tt=null}}else r===27?(r=tt,Ja(n.type)?(n=cp,cp=null,tt=n):tt=r):tt=$t?Ln(n.stateNode.nextSibling):null;return!0}function Ds(){tt=$t=null,ze=!1}function R0(){var n=Ti;return n!==null&&(qt===null?qt=n:qt.push.apply(qt,n),Ti=null),n}function Ps(n){Ti===null?Ti=[n]:Ti.push(n)}var Gd=Y(null),Ci=null,ba=null;function Ba(n,r,s){ae(Gd,r._currentValue),r._currentValue=s}function xa(n){n._currentValue=Gd.current,ne(Gd)}function Id(n,r,s){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===s)break;n=n.return}}function Fd(n,r,s,c){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var b=h.dependencies;if(b!==null){var w=h.child;b=b.firstContext;e:for(;b!==null;){var T=b;b=h;for(var P=0;P<r.length;P++)if(T.context===r[P]){b.lanes|=s,T=b.alternate,T!==null&&(T.lanes|=s),Id(b.return,s,n),c||(w=null);break e}b=T.next}}else if(h.tag===18){if(w=h.return,w===null)throw Error(i(341));w.lanes|=s,b=w.alternate,b!==null&&(b.lanes|=s),Id(w,s,n),w=null}else w=h.child;if(w!==null)w.return=h;else for(w=h;w!==null;){if(w===n){w=null;break}if(h=w.sibling,h!==null){h.return=w.return,w=h;break}w=w.return}h=w}}function Vs(n,r,s,c){n=null;for(var h=r,b=!1;h!==null;){if(!b){if((h.flags&524288)!==0)b=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var w=h.alternate;if(w===null)throw Error(i(387));if(w=w.memoizedProps,w!==null){var T=h.type;an(h.pendingProps.value,w.value)||(n!==null?n.push(T):n=[T])}}else if(h===bt.current){if(w=h.alternate,w===null)throw Error(i(387));w.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push(fo):n=[fo])}h=h.return}n!==null&&Fd(r,n,s,c),r.flags|=262144}function Nl(n){for(n=n.firstContext;n!==null;){if(!an(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ai(n){Ci=n,ba=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Dt(n){return L0(Ci,n)}function Bl(n,r){return Ci===null&&Ai(n),L0(n,r)}function L0(n,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},ba===null){if(n===null)throw Error(i(308));ba=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else ba=ba.next=r;return s}var D6=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(s,c){n.push(c)}};this.abort=function(){r.aborted=!0,n.forEach(function(s){return s()})}},P6=e.unstable_scheduleCallback,V6=e.unstable_NormalPriority,ht={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qd(){return{controller:new D6,data:new Map,refCount:0}}function Ns(n){n.refCount--,n.refCount===0&&P6(V6,function(){n.controller.abort()})}var Bs=null,Kd=0,hr=0,gr=null;function N6(n,r){if(Bs===null){var s=Bs=[];Kd=0,hr=Wf(),gr={status:"pending",value:void 0,then:function(c){s.push(c)}}}return Kd++,r.then(O0,O0),r}function O0(){if(--Kd===0&&Bs!==null){gr!==null&&(gr.status="fulfilled");var n=Bs;Bs=null,hr=0,gr=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function B6(n,r){var s=[],c={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return n.then(function(){c.status="fulfilled",c.value=r;for(var h=0;h<s.length;h++)(0,s[h])(r)},function(h){for(c.status="rejected",c.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),c}var D0=D.S;D.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&N6(n,r),D0!==null&&D0(n,r)};var Ei=Y(null);function Yd(){var n=Ei.current;return n!==null?n:Ye.pooledCache}function _l(n,r){r===null?ae(Ei,Ei.current):ae(Ei,r.pool)}function P0(){var n=Yd();return n===null?null:{parent:ht._currentValue,pool:n}}var _s=Error(i(460)),V0=Error(i(474)),$l=Error(i(542)),Xd={then:function(){}};function N0(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Hl(){}function B0(n,r,s){switch(s=n[s],s===void 0?n.push(r):s!==r&&(r.then(Hl,Hl),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,$0(n),n;default:if(typeof r.status=="string")r.then(Hl,Hl);else{if(n=Ye,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=r,n.status="pending",n.then(function(c){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=c}},function(c){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=c}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,$0(n),n}throw $s=r,_s}}var $s=null;function _0(){if($s===null)throw Error(i(459));var n=$s;return $s=null,n}function $0(n){if(n===_s||n===$l)throw Error(i(483))}var _a=!1;function Wd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qd(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function $a(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Ha(n,r,s){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ve&2)!==0){var h=c.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),c.pending=r,r=Ol(n),C0(n,null,s),r}return Ll(n,c,r,s),Ol(n)}function Hs(n,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var c=r.lanes;c&=n.pendingLanes,s|=c,r.lanes=s,Om(n,s)}}function Zd(n,r){var s=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var h=null,b=null;if(s=s.firstBaseUpdate,s!==null){do{var w={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};b===null?h=b=w:b=b.next=w,s=s.next}while(s!==null);b===null?h=b=r:b=b.next=r}else h=b=r;s={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:b,shared:c.shared,callbacks:c.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=r:n.next=r,s.lastBaseUpdate=r}var Jd=!1;function Us(){if(Jd){var n=gr;if(n!==null)throw n}}function Gs(n,r,s,c){Jd=!1;var h=n.updateQueue;_a=!1;var b=h.firstBaseUpdate,w=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var P=T,F=P.next;P.next=null,w===null?b=F:w.next=F,w=P;var W=n.alternate;W!==null&&(W=W.updateQueue,T=W.lastBaseUpdate,T!==w&&(T===null?W.firstBaseUpdate=F:T.next=F,W.lastBaseUpdate=P))}if(b!==null){var ee=h.baseState;w=0,W=F=P=null,T=b;do{var q=T.lane&-536870913,K=q!==T.lane;if(K?(Ce&q)===q:(c&q)===q){q!==0&&q===hr&&(Jd=!0),W!==null&&(W=W.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var he=n,fe=T;q=r;var He=s;switch(fe.tag){case 1:if(he=fe.payload,typeof he=="function"){ee=he.call(He,ee,q);break e}ee=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=fe.payload,q=typeof he=="function"?he.call(He,ee,q):he,q==null)break e;ee=m({},ee,q);break e;case 2:_a=!0}}q=T.callback,q!==null&&(n.flags|=64,K&&(n.flags|=8192),K=h.callbacks,K===null?h.callbacks=[q]:K.push(q))}else K={lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},W===null?(F=W=K,P=ee):W=W.next=K,w|=q;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;K=T,T=K.next,K.next=null,h.lastBaseUpdate=K,h.shared.pending=null}}while(!0);W===null&&(P=ee),h.baseState=P,h.firstBaseUpdate=F,h.lastBaseUpdate=W,b===null&&(h.shared.lanes=0),Xa|=w,n.lanes=w,n.memoizedState=ee}}function H0(n,r){if(typeof n!="function")throw Error(i(191,n));n.call(r)}function U0(n,r){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)H0(s[n],r)}var mr=Y(null),Ul=Y(0);function G0(n,r){n=ja,ae(Ul,n),ae(mr,r),ja=n|r.baseLanes}function ef(){ae(Ul,ja),ae(mr,mr.current)}function tf(){ja=Ul.current,ne(mr),ne(Ul)}var Ua=0,Se=null,_e=null,lt=null,Gl=!1,br=!1,Mi=!1,Il=0,Is=0,xr=null,_6=0;function rt(){throw Error(i(321))}function nf(n,r){if(r===null)return!1;for(var s=0;s<r.length&&s<n.length;s++)if(!an(n[s],r[s]))return!1;return!0}function af(n,r,s,c,h,b){return Ua=b,Se=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,D.H=n===null||n.memoizedState===null?C1:A1,Mi=!1,b=s(c,h),Mi=!1,br&&(b=F0(r,s,c,h)),I0(n),b}function I0(n){D.H=Wl;var r=_e!==null&&_e.next!==null;if(Ua=0,lt=_e=Se=null,Gl=!1,Is=0,xr=null,r)throw Error(i(300));n===null||yt||(n=n.dependencies,n!==null&&Nl(n)&&(yt=!0))}function F0(n,r,s,c){Se=n;var h=0;do{if(br&&(xr=null),Is=0,br=!1,25<=h)throw Error(i(301));if(h+=1,lt=_e=null,n.updateQueue!=null){var b=n.updateQueue;b.lastEffect=null,b.events=null,b.stores=null,b.memoCache!=null&&(b.memoCache.index=0)}D.H=q6,b=r(s,c)}while(br);return b}function $6(){var n=D.H,r=n.useState()[0];return r=typeof r.then=="function"?Fs(r):r,n=n.useState()[0],(_e!==null?_e.memoizedState:null)!==n&&(Se.flags|=1024),r}function rf(){var n=Il!==0;return Il=0,n}function sf(n,r,s){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~s}function of(n){if(Gl){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Gl=!1}Ua=0,lt=_e=Se=null,br=!1,Is=Il=0,xr=null}function It(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?Se.memoizedState=lt=n:lt=lt.next=n,lt}function ct(){if(_e===null){var n=Se.alternate;n=n!==null?n.memoizedState:null}else n=_e.next;var r=lt===null?Se.memoizedState:lt.next;if(r!==null)lt=r,_e=n;else{if(n===null)throw Se.alternate===null?Error(i(467)):Error(i(310));_e=n,n={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},lt===null?Se.memoizedState=lt=n:lt=lt.next=n}return lt}function lf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fs(n){var r=Is;return Is+=1,xr===null&&(xr=[]),n=B0(xr,n,r),r=Se,(lt===null?r.memoizedState:lt.next)===null&&(r=r.alternate,D.H=r===null||r.memoizedState===null?C1:A1),n}function Fl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Fs(n);if(n.$$typeof===C)return Dt(n)}throw Error(i(438,String(n)))}function cf(n){var r=null,s=Se.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var c=Se.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(r={data:c.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=lf(),Se.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(n),c=0;c<n;c++)s[c]=J;return r.index++,s}function ya(n,r){return typeof r=="function"?r(n):r}function ql(n){var r=ct();return uf(r,_e,n)}function uf(n,r,s){var c=n.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=s;var h=n.baseQueue,b=c.pending;if(b!==null){if(h!==null){var w=h.next;h.next=b.next,b.next=w}r.baseQueue=h=b,c.pending=null}if(b=n.baseState,h===null)n.memoizedState=b;else{r=h.next;var T=w=null,P=null,F=r,W=!1;do{var ee=F.lane&-536870913;if(ee!==F.lane?(Ce&ee)===ee:(Ua&ee)===ee){var q=F.revertLane;if(q===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),ee===hr&&(W=!0);else if((Ua&q)===q){F=F.next,q===hr&&(W=!0);continue}else ee={lane:0,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},P===null?(T=P=ee,w=b):P=P.next=ee,Se.lanes|=q,Xa|=q;ee=F.action,Mi&&s(b,ee),b=F.hasEagerState?F.eagerState:s(b,ee)}else q={lane:ee,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},P===null?(T=P=q,w=b):P=P.next=q,Se.lanes|=ee,Xa|=ee;F=F.next}while(F!==null&&F!==r);if(P===null?w=b:P.next=T,!an(b,n.memoizedState)&&(yt=!0,W&&(s=gr,s!==null)))throw s;n.memoizedState=b,n.baseState=w,n.baseQueue=P,c.lastRenderedState=b}return h===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function df(n){var r=ct(),s=r.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=n;var c=s.dispatch,h=s.pending,b=r.memoizedState;if(h!==null){s.pending=null;var w=h=h.next;do b=n(b,w.action),w=w.next;while(w!==h);an(b,r.memoizedState)||(yt=!0),r.memoizedState=b,r.baseQueue===null&&(r.baseState=b),s.lastRenderedState=b}return[b,c]}function q0(n,r,s){var c=Se,h=ct(),b=ze;if(b){if(s===void 0)throw Error(i(407));s=s()}else s=r();var w=!an((_e||h).memoizedState,s);w&&(h.memoizedState=s,yt=!0),h=h.queue;var T=X0.bind(null,c,h,n);if(qs(2048,8,T,[n]),h.getSnapshot!==r||w||lt!==null&&lt.memoizedState.tag&1){if(c.flags|=2048,yr(9,Kl(),Y0.bind(null,c,h,s,r),null),Ye===null)throw Error(i(349));b||(Ua&124)!==0||K0(c,r,s)}return s}function K0(n,r,s){n.flags|=16384,n={getSnapshot:r,value:s},r=Se.updateQueue,r===null?(r=lf(),Se.updateQueue=r,r.stores=[n]):(s=r.stores,s===null?r.stores=[n]:s.push(n))}function Y0(n,r,s,c){r.value=s,r.getSnapshot=c,W0(r)&&Q0(n)}function X0(n,r,s){return s(function(){W0(r)&&Q0(n)})}function W0(n){var r=n.getSnapshot;n=n.value;try{var s=r();return!an(n,s)}catch{return!0}}function Q0(n){var r=ur(n,2);r!==null&&un(r,n,2)}function ff(n){var r=It();if(typeof n=="function"){var s=n;if(n=s(),Mi){Pa(!0);try{s()}finally{Pa(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:n},r}function Z0(n,r,s,c){return n.baseState=s,uf(n,_e,typeof c=="function"?c:ya)}function H6(n,r,s,c,h){if(Xl(n))throw Error(i(485));if(n=r.action,n!==null){var b={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){b.listeners.push(w)}};D.T!==null?s(!0):b.isTransition=!1,c(b),s=r.pending,s===null?(b.next=r.pending=b,J0(r,b)):(b.next=s.next,r.pending=s.next=b)}}function J0(n,r){var s=r.action,c=r.payload,h=n.state;if(r.isTransition){var b=D.T,w={};D.T=w;try{var T=s(h,c),P=D.S;P!==null&&P(w,T),e1(n,r,T)}catch(F){pf(n,r,F)}finally{D.T=b}}else try{b=s(h,c),e1(n,r,b)}catch(F){pf(n,r,F)}}function e1(n,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){t1(n,r,c)},function(c){return pf(n,r,c)}):t1(n,r,s)}function t1(n,r,s){r.status="fulfilled",r.value=s,n1(r),n.state=s,r=n.pending,r!==null&&(s=r.next,s===r?n.pending=null:(s=s.next,r.next=s,J0(n,s)))}function pf(n,r,s){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do r.status="rejected",r.reason=s,n1(r),r=r.next;while(r!==c)}n.action=null}function n1(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function a1(n,r){return r}function i1(n,r){if(ze){var s=Ye.formState;if(s!==null){e:{var c=Se;if(ze){if(tt){t:{for(var h=tt,b=In;h.nodeType!==8;){if(!b){h=null;break t}if(h=Ln(h.nextSibling),h===null){h=null;break t}}b=h.data,h=b==="F!"||b==="F"?h:null}if(h){tt=Ln(h.nextSibling),c=h.data==="F!";break e}}ji(c)}c=!1}c&&(r=s[0])}}return s=It(),s.memoizedState=s.baseState=r,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a1,lastRenderedState:r},s.queue=c,s=k1.bind(null,Se,c),c.dispatch=s,c=ff(!1),b=xf.bind(null,Se,!1,c.queue),c=It(),h={state:r,dispatch:null,action:n,pending:null},c.queue=h,s=H6.bind(null,Se,h,b,s),h.dispatch=s,c.memoizedState=n,[r,s,!1]}function r1(n){var r=ct();return s1(r,_e,n)}function s1(n,r,s){if(r=uf(n,r,a1)[0],n=ql(ya)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var c=Fs(r)}catch(w){throw w===_s?$l:w}else c=r;r=ct();var h=r.queue,b=h.dispatch;return s!==r.memoizedState&&(Se.flags|=2048,yr(9,Kl(),U6.bind(null,h,s),null)),[c,b,n]}function U6(n,r){n.action=r}function o1(n){var r=ct(),s=_e;if(s!==null)return s1(r,s,n);ct(),r=r.memoizedState,s=ct();var c=s.queue.dispatch;return s.memoizedState=n,[r,c,!1]}function yr(n,r,s,c){return n={tag:n,create:s,deps:c,inst:r,next:null},r=Se.updateQueue,r===null&&(r=lf(),Se.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=n.next=n:(c=s.next,s.next=n,n.next=c,r.lastEffect=n),n}function Kl(){return{destroy:void 0,resource:void 0}}function l1(){return ct().memoizedState}function Yl(n,r,s,c){var h=It();c=c===void 0?null:c,Se.flags|=n,h.memoizedState=yr(1|r,Kl(),s,c)}function qs(n,r,s,c){var h=ct();c=c===void 0?null:c;var b=h.memoizedState.inst;_e!==null&&c!==null&&nf(c,_e.memoizedState.deps)?h.memoizedState=yr(r,b,s,c):(Se.flags|=n,h.memoizedState=yr(1|r,b,s,c))}function c1(n,r){Yl(8390656,8,n,r)}function u1(n,r){qs(2048,8,n,r)}function d1(n,r){return qs(4,2,n,r)}function f1(n,r){return qs(4,4,n,r)}function p1(n,r){if(typeof r=="function"){n=n();var s=r(n);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function h1(n,r,s){s=s!=null?s.concat([n]):null,qs(4,4,p1.bind(null,r,n),s)}function hf(){}function g1(n,r){var s=ct();r=r===void 0?null:r;var c=s.memoizedState;return r!==null&&nf(r,c[1])?c[0]:(s.memoizedState=[n,r],n)}function m1(n,r){var s=ct();r=r===void 0?null:r;var c=s.memoizedState;if(r!==null&&nf(r,c[1]))return c[0];if(c=n(),Mi){Pa(!0);try{n()}finally{Pa(!1)}}return s.memoizedState=[c,r],c}function gf(n,r,s){return s===void 0||(Ua&1073741824)!==0?n.memoizedState=r:(n.memoizedState=s,n=y2(),Se.lanes|=n,Xa|=n,s)}function b1(n,r,s,c){return an(s,r)?s:mr.current!==null?(n=gf(n,s,c),an(n,r)||(yt=!0),n):(Ua&42)===0?(yt=!0,n.memoizedState=s):(n=y2(),Se.lanes|=n,Xa|=n,r)}function x1(n,r,s,c,h){var b=B.p;B.p=b!==0&&8>b?b:8;var w=D.T,T={};D.T=T,xf(n,!1,r,s);try{var P=h(),F=D.S;if(F!==null&&F(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var W=B6(P,c);Ks(n,r,W,cn(n))}else Ks(n,r,c,cn(n))}catch(ee){Ks(n,r,{then:function(){},status:"rejected",reason:ee},cn())}finally{B.p=b,D.T=w}}function G6(){}function mf(n,r,s,c){if(n.tag!==5)throw Error(i(476));var h=y1(n).queue;x1(n,h,r,G,s===null?G6:function(){return v1(n),s(c)})}function y1(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:G},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:s},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function v1(n){var r=y1(n).next.queue;Ks(n,r,{},cn())}function bf(){return Dt(fo)}function w1(){return ct().memoizedState}function S1(){return ct().memoizedState}function I6(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var s=cn();n=$a(s);var c=Ha(r,n,s);c!==null&&(un(c,r,s),Hs(c,r,s)),r={cache:qd()},n.payload=r;return}r=r.return}}function F6(n,r,s){var c=cn();s={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Xl(n)?T1(r,s):(s=Vd(n,r,s,c),s!==null&&(un(s,n,c),j1(s,r,c)))}function k1(n,r,s){var c=cn();Ks(n,r,s,c)}function Ks(n,r,s,c){var h={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Xl(n))T1(r,h);else{var b=n.alternate;if(n.lanes===0&&(b===null||b.lanes===0)&&(b=r.lastRenderedReducer,b!==null))try{var w=r.lastRenderedState,T=b(w,s);if(h.hasEagerState=!0,h.eagerState=T,an(T,w))return Ll(n,r,h,0),Ye===null&&Rl(),!1}catch{}finally{}if(s=Vd(n,r,h,c),s!==null)return un(s,n,c),j1(s,r,c),!0}return!1}function xf(n,r,s,c){if(c={lane:2,revertLane:Wf(),action:c,hasEagerState:!1,eagerState:null,next:null},Xl(n)){if(r)throw Error(i(479))}else r=Vd(n,s,c,2),r!==null&&un(r,n,2)}function Xl(n){var r=n.alternate;return n===Se||r!==null&&r===Se}function T1(n,r){br=Gl=!0;var s=n.pending;s===null?r.next=r:(r.next=s.next,s.next=r),n.pending=r}function j1(n,r,s){if((s&4194048)!==0){var c=r.lanes;c&=n.pendingLanes,s|=c,r.lanes=s,Om(n,s)}}var Wl={readContext:Dt,use:Fl,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useLayoutEffect:rt,useInsertionEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useSyncExternalStore:rt,useId:rt,useHostTransitionStatus:rt,useFormState:rt,useActionState:rt,useOptimistic:rt,useMemoCache:rt,useCacheRefresh:rt},C1={readContext:Dt,use:Fl,useCallback:function(n,r){return It().memoizedState=[n,r===void 0?null:r],n},useContext:Dt,useEffect:c1,useImperativeHandle:function(n,r,s){s=s!=null?s.concat([n]):null,Yl(4194308,4,p1.bind(null,r,n),s)},useLayoutEffect:function(n,r){return Yl(4194308,4,n,r)},useInsertionEffect:function(n,r){Yl(4,2,n,r)},useMemo:function(n,r){var s=It();r=r===void 0?null:r;var c=n();if(Mi){Pa(!0);try{n()}finally{Pa(!1)}}return s.memoizedState=[c,r],c},useReducer:function(n,r,s){var c=It();if(s!==void 0){var h=s(r);if(Mi){Pa(!0);try{s(r)}finally{Pa(!1)}}}else h=r;return c.memoizedState=c.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},c.queue=n,n=n.dispatch=F6.bind(null,Se,n),[c.memoizedState,n]},useRef:function(n){var r=It();return n={current:n},r.memoizedState=n},useState:function(n){n=ff(n);var r=n.queue,s=k1.bind(null,Se,r);return r.dispatch=s,[n.memoizedState,s]},useDebugValue:hf,useDeferredValue:function(n,r){var s=It();return gf(s,n,r)},useTransition:function(){var n=ff(!1);return n=x1.bind(null,Se,n.queue,!0,!1),It().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,s){var c=Se,h=It();if(ze){if(s===void 0)throw Error(i(407));s=s()}else{if(s=r(),Ye===null)throw Error(i(349));(Ce&124)!==0||K0(c,r,s)}h.memoizedState=s;var b={value:s,getSnapshot:r};return h.queue=b,c1(X0.bind(null,c,b,n),[n]),c.flags|=2048,yr(9,Kl(),Y0.bind(null,c,b,s,r),null),s},useId:function(){var n=It(),r=Ye.identifierPrefix;if(ze){var s=ma,c=ga;s=(c&~(1<<32-nn(c)-1)).toString(32)+s,r="«"+r+"R"+s,s=Il++,0<s&&(r+="H"+s.toString(32)),r+="»"}else s=_6++,r="«"+r+"r"+s.toString(32)+"»";return n.memoizedState=r},useHostTransitionStatus:bf,useFormState:i1,useActionState:i1,useOptimistic:function(n){var r=It();r.memoizedState=r.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=xf.bind(null,Se,!0,s),s.dispatch=r,[n,r]},useMemoCache:cf,useCacheRefresh:function(){return It().memoizedState=I6.bind(null,Se)}},A1={readContext:Dt,use:Fl,useCallback:g1,useContext:Dt,useEffect:u1,useImperativeHandle:h1,useInsertionEffect:d1,useLayoutEffect:f1,useMemo:m1,useReducer:ql,useRef:l1,useState:function(){return ql(ya)},useDebugValue:hf,useDeferredValue:function(n,r){var s=ct();return b1(s,_e.memoizedState,n,r)},useTransition:function(){var n=ql(ya)[0],r=ct().memoizedState;return[typeof n=="boolean"?n:Fs(n),r]},useSyncExternalStore:q0,useId:w1,useHostTransitionStatus:bf,useFormState:r1,useActionState:r1,useOptimistic:function(n,r){var s=ct();return Z0(s,_e,n,r)},useMemoCache:cf,useCacheRefresh:S1},q6={readContext:Dt,use:Fl,useCallback:g1,useContext:Dt,useEffect:u1,useImperativeHandle:h1,useInsertionEffect:d1,useLayoutEffect:f1,useMemo:m1,useReducer:df,useRef:l1,useState:function(){return df(ya)},useDebugValue:hf,useDeferredValue:function(n,r){var s=ct();return _e===null?gf(s,n,r):b1(s,_e.memoizedState,n,r)},useTransition:function(){var n=df(ya)[0],r=ct().memoizedState;return[typeof n=="boolean"?n:Fs(n),r]},useSyncExternalStore:q0,useId:w1,useHostTransitionStatus:bf,useFormState:o1,useActionState:o1,useOptimistic:function(n,r){var s=ct();return _e!==null?Z0(s,_e,n,r):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:cf,useCacheRefresh:S1},vr=null,Ys=0;function Ql(n){var r=Ys;return Ys+=1,vr===null&&(vr=[]),B0(vr,n,r)}function Xs(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function Zl(n,r){throw r.$$typeof===x?Error(i(525)):(n=Object.prototype.toString.call(r),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function E1(n){var r=n._init;return r(n._payload)}function M1(n){function r(U,_){if(n){var I=U.deletions;I===null?(U.deletions=[_],U.flags|=16):I.push(_)}}function s(U,_){if(!n)return null;for(;_!==null;)r(U,_),_=_.sibling;return null}function c(U){for(var _=new Map;U!==null;)U.key!==null?_.set(U.key,U):_.set(U.index,U),U=U.sibling;return _}function h(U,_){return U=ha(U,_),U.index=0,U.sibling=null,U}function b(U,_,I){return U.index=I,n?(I=U.alternate,I!==null?(I=I.index,I<_?(U.flags|=67108866,_):I):(U.flags|=67108866,_)):(U.flags|=1048576,_)}function w(U){return n&&U.alternate===null&&(U.flags|=67108866),U}function T(U,_,I,Q){return _===null||_.tag!==6?(_=Bd(I,U.mode,Q),_.return=U,_):(_=h(_,I),_.return=U,_)}function P(U,_,I,Q){var re=I.type;return re===S?W(U,_,I.props.children,Q,I.key):_!==null&&(_.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===O&&E1(re)===_.type)?(_=h(_,I.props),Xs(_,I),_.return=U,_):(_=Dl(I.type,I.key,I.props,null,U.mode,Q),Xs(_,I),_.return=U,_)}function F(U,_,I,Q){return _===null||_.tag!==4||_.stateNode.containerInfo!==I.containerInfo||_.stateNode.implementation!==I.implementation?(_=_d(I,U.mode,Q),_.return=U,_):(_=h(_,I.children||[]),_.return=U,_)}function W(U,_,I,Q,re){return _===null||_.tag!==7?(_=wi(I,U.mode,Q,re),_.return=U,_):(_=h(_,I),_.return=U,_)}function ee(U,_,I){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=Bd(""+_,U.mode,I),_.return=U,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case y:return I=Dl(_.type,_.key,_.props,null,U.mode,I),Xs(I,_),I.return=U,I;case v:return _=_d(_,U.mode,I),_.return=U,_;case O:var Q=_._init;return _=Q(_._payload),ee(U,_,I)}if(oe(_)||te(_))return _=wi(_,U.mode,I,null),_.return=U,_;if(typeof _.then=="function")return ee(U,Ql(_),I);if(_.$$typeof===C)return ee(U,Bl(U,_),I);Zl(U,_)}return null}function q(U,_,I,Q){var re=_!==null?_.key:null;if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return re!==null?null:T(U,_,""+I,Q);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case y:return I.key===re?P(U,_,I,Q):null;case v:return I.key===re?F(U,_,I,Q):null;case O:return re=I._init,I=re(I._payload),q(U,_,I,Q)}if(oe(I)||te(I))return re!==null?null:W(U,_,I,Q,null);if(typeof I.then=="function")return q(U,_,Ql(I),Q);if(I.$$typeof===C)return q(U,_,Bl(U,I),Q);Zl(U,I)}return null}function K(U,_,I,Q,re){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return U=U.get(I)||null,T(_,U,""+Q,re);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return U=U.get(Q.key===null?I:Q.key)||null,P(_,U,Q,re);case v:return U=U.get(Q.key===null?I:Q.key)||null,F(_,U,Q,re);case O:var ke=Q._init;return Q=ke(Q._payload),K(U,_,I,Q,re)}if(oe(Q)||te(Q))return U=U.get(I)||null,W(_,U,Q,re,null);if(typeof Q.then=="function")return K(U,_,I,Ql(Q),re);if(Q.$$typeof===C)return K(U,_,I,Bl(_,Q),re);Zl(_,Q)}return null}function he(U,_,I,Q){for(var re=null,ke=null,ue=_,pe=_=0,wt=null;ue!==null&&pe<I.length;pe++){ue.index>pe?(wt=ue,ue=null):wt=ue.sibling;var Ee=q(U,ue,I[pe],Q);if(Ee===null){ue===null&&(ue=wt);break}n&&ue&&Ee.alternate===null&&r(U,ue),_=b(Ee,_,pe),ke===null?re=Ee:ke.sibling=Ee,ke=Ee,ue=wt}if(pe===I.length)return s(U,ue),ze&&ki(U,pe),re;if(ue===null){for(;pe<I.length;pe++)ue=ee(U,I[pe],Q),ue!==null&&(_=b(ue,_,pe),ke===null?re=ue:ke.sibling=ue,ke=ue);return ze&&ki(U,pe),re}for(ue=c(ue);pe<I.length;pe++)wt=K(ue,U,pe,I[pe],Q),wt!==null&&(n&&wt.alternate!==null&&ue.delete(wt.key===null?pe:wt.key),_=b(wt,_,pe),ke===null?re=wt:ke.sibling=wt,ke=wt);return n&&ue.forEach(function(ii){return r(U,ii)}),ze&&ki(U,pe),re}function fe(U,_,I,Q){if(I==null)throw Error(i(151));for(var re=null,ke=null,ue=_,pe=_=0,wt=null,Ee=I.next();ue!==null&&!Ee.done;pe++,Ee=I.next()){ue.index>pe?(wt=ue,ue=null):wt=ue.sibling;var ii=q(U,ue,Ee.value,Q);if(ii===null){ue===null&&(ue=wt);break}n&&ue&&ii.alternate===null&&r(U,ue),_=b(ii,_,pe),ke===null?re=ii:ke.sibling=ii,ke=ii,ue=wt}if(Ee.done)return s(U,ue),ze&&ki(U,pe),re;if(ue===null){for(;!Ee.done;pe++,Ee=I.next())Ee=ee(U,Ee.value,Q),Ee!==null&&(_=b(Ee,_,pe),ke===null?re=Ee:ke.sibling=Ee,ke=Ee);return ze&&ki(U,pe),re}for(ue=c(ue);!Ee.done;pe++,Ee=I.next())Ee=K(ue,U,pe,Ee.value,Q),Ee!==null&&(n&&Ee.alternate!==null&&ue.delete(Ee.key===null?pe:Ee.key),_=b(Ee,_,pe),ke===null?re=Ee:ke.sibling=Ee,ke=Ee);return n&&ue.forEach(function(K8){return r(U,K8)}),ze&&ki(U,pe),re}function He(U,_,I,Q){if(typeof I=="object"&&I!==null&&I.type===S&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case y:e:{for(var re=I.key;_!==null;){if(_.key===re){if(re=I.type,re===S){if(_.tag===7){s(U,_.sibling),Q=h(_,I.props.children),Q.return=U,U=Q;break e}}else if(_.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===O&&E1(re)===_.type){s(U,_.sibling),Q=h(_,I.props),Xs(Q,I),Q.return=U,U=Q;break e}s(U,_);break}else r(U,_);_=_.sibling}I.type===S?(Q=wi(I.props.children,U.mode,Q,I.key),Q.return=U,U=Q):(Q=Dl(I.type,I.key,I.props,null,U.mode,Q),Xs(Q,I),Q.return=U,U=Q)}return w(U);case v:e:{for(re=I.key;_!==null;){if(_.key===re)if(_.tag===4&&_.stateNode.containerInfo===I.containerInfo&&_.stateNode.implementation===I.implementation){s(U,_.sibling),Q=h(_,I.children||[]),Q.return=U,U=Q;break e}else{s(U,_);break}else r(U,_);_=_.sibling}Q=_d(I,U.mode,Q),Q.return=U,U=Q}return w(U);case O:return re=I._init,I=re(I._payload),He(U,_,I,Q)}if(oe(I))return he(U,_,I,Q);if(te(I)){if(re=te(I),typeof re!="function")throw Error(i(150));return I=re.call(I),fe(U,_,I,Q)}if(typeof I.then=="function")return He(U,_,Ql(I),Q);if(I.$$typeof===C)return He(U,_,Bl(U,I),Q);Zl(U,I)}return typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint"?(I=""+I,_!==null&&_.tag===6?(s(U,_.sibling),Q=h(_,I),Q.return=U,U=Q):(s(U,_),Q=Bd(I,U.mode,Q),Q.return=U,U=Q),w(U)):s(U,_)}return function(U,_,I,Q){try{Ys=0;var re=He(U,_,I,Q);return vr=null,re}catch(ue){if(ue===_s||ue===$l)throw ue;var ke=rn(29,ue,null,U.mode);return ke.lanes=Q,ke.return=U,ke}finally{}}}var wr=M1(!0),z1=M1(!1),Tn=Y(null),Fn=null;function Ga(n){var r=n.alternate;ae(gt,gt.current&1),ae(Tn,n),Fn===null&&(r===null||mr.current!==null||r.memoizedState!==null)&&(Fn=n)}function R1(n){if(n.tag===22){if(ae(gt,gt.current),ae(Tn,n),Fn===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(Fn=n)}}else Ia()}function Ia(){ae(gt,gt.current),ae(Tn,Tn.current)}function va(n){ne(Tn),Fn===n&&(Fn=null),ne(gt)}var gt=Y(0);function Jl(n){for(var r=n;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||lp(s)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function yf(n,r,s,c){r=n.memoizedState,s=s(c,r),s=s==null?r:m({},r,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var vf={enqueueSetState:function(n,r,s){n=n._reactInternals;var c=cn(),h=$a(c);h.payload=r,s!=null&&(h.callback=s),r=Ha(n,h,c),r!==null&&(un(r,n,c),Hs(r,n,c))},enqueueReplaceState:function(n,r,s){n=n._reactInternals;var c=cn(),h=$a(c);h.tag=1,h.payload=r,s!=null&&(h.callback=s),r=Ha(n,h,c),r!==null&&(un(r,n,c),Hs(r,n,c))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var s=cn(),c=$a(s);c.tag=2,r!=null&&(c.callback=r),r=Ha(n,c,s),r!==null&&(un(r,n,s),Hs(r,n,s))}};function L1(n,r,s,c,h,b,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,b,w):r.prototype&&r.prototype.isPureReactComponent?!Rs(s,c)||!Rs(h,b):!0}function O1(n,r,s,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,c),r.state!==n&&vf.enqueueReplaceState(r,r.state,null)}function zi(n,r){var s=r;if("ref"in r){s={};for(var c in r)c!=="ref"&&(s[c]=r[c])}if(n=n.defaultProps){s===r&&(s=m({},s));for(var h in n)s[h]===void 0&&(s[h]=n[h])}return s}var ec=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function D1(n){ec(n)}function P1(n){console.error(n)}function V1(n){ec(n)}function tc(n,r){try{var s=n.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(c){setTimeout(function(){throw c})}}function N1(n,r,s){try{var c=n.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function wf(n,r,s){return s=$a(s),s.tag=3,s.payload={element:null},s.callback=function(){tc(n,r)},s}function B1(n){return n=$a(n),n.tag=3,n}function _1(n,r,s,c){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var b=c.value;n.payload=function(){return h(b)},n.callback=function(){N1(r,s,c)}}var w=s.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(n.callback=function(){N1(r,s,c),typeof h!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var T=c.stack;this.componentDidCatch(c.value,{componentStack:T!==null?T:""})})}function K6(n,r,s,c,h){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(r=s.alternate,r!==null&&Vs(r,s,h,!0),s=Tn.current,s!==null){switch(s.tag){case 13:return Fn===null?Ff():s.alternate===null&&nt===0&&(nt=3),s.flags&=-257,s.flags|=65536,s.lanes=h,c===Xd?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([c]):r.add(c),Kf(n,c,h)),!1;case 22:return s.flags|=65536,c===Xd?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([c]):s.add(c)),Kf(n,c,h)),!1}throw Error(i(435,s.tag))}return Kf(n,c,h),Ff(),!1}if(ze)return r=Tn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,c!==Ud&&(n=Error(i(422),{cause:c}),Ps(vn(n,s)))):(c!==Ud&&(r=Error(i(423),{cause:c}),Ps(vn(r,s))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,c=vn(c,s),h=wf(n.stateNode,c,h),Zd(n,h),nt!==4&&(nt=2)),!1;var b=Error(i(520),{cause:c});if(b=vn(b,s),no===null?no=[b]:no.push(b),nt!==4&&(nt=2),r===null)return!0;c=vn(c,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,n=h&-h,s.lanes|=n,n=wf(s.stateNode,c,n),Zd(s,n),!1;case 1:if(r=s.type,b=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Wa===null||!Wa.has(b))))return s.flags|=65536,h&=-h,s.lanes|=h,h=B1(h),_1(h,n,s,c),Zd(s,h),!1}s=s.return}while(s!==null);return!1}var $1=Error(i(461)),yt=!1;function At(n,r,s,c){r.child=n===null?z1(r,null,s,c):wr(r,n.child,s,c)}function H1(n,r,s,c,h){s=s.render;var b=r.ref;if("ref"in c){var w={};for(var T in c)T!=="ref"&&(w[T]=c[T])}else w=c;return Ai(r),c=af(n,r,s,w,b,h),T=rf(),n!==null&&!yt?(sf(n,r,h),wa(n,r,h)):(ze&&T&&$d(r),r.flags|=1,At(n,r,c,h),r.child)}function U1(n,r,s,c,h){if(n===null){var b=s.type;return typeof b=="function"&&!Nd(b)&&b.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=b,G1(n,r,b,c,h)):(n=Dl(s.type,null,c,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(b=n.child,!Mf(n,h)){var w=b.memoizedProps;if(s=s.compare,s=s!==null?s:Rs,s(w,c)&&n.ref===r.ref)return wa(n,r,h)}return r.flags|=1,n=ha(b,c),n.ref=r.ref,n.return=r,r.child=n}function G1(n,r,s,c,h){if(n!==null){var b=n.memoizedProps;if(Rs(b,c)&&n.ref===r.ref)if(yt=!1,r.pendingProps=c=b,Mf(n,h))(n.flags&131072)!==0&&(yt=!0);else return r.lanes=n.lanes,wa(n,r,h)}return Sf(n,r,s,c,h)}function I1(n,r,s){var c=r.pendingProps,h=c.children,b=n!==null?n.memoizedState:null;if(c.mode==="hidden"){if((r.flags&128)!==0){if(c=b!==null?b.baseLanes|s:s,n!==null){for(h=r.child=n.child,b=0;h!==null;)b=b|h.lanes|h.childLanes,h=h.sibling;r.childLanes=b&~c}else r.childLanes=0,r.child=null;return F1(n,r,c,s)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&_l(r,b!==null?b.cachePool:null),b!==null?G0(r,b):ef(),R1(r);else return r.lanes=r.childLanes=536870912,F1(n,r,b!==null?b.baseLanes|s:s,s)}else b!==null?(_l(r,b.cachePool),G0(r,b),Ia(),r.memoizedState=null):(n!==null&&_l(r,null),ef(),Ia());return At(n,r,h,s),r.child}function F1(n,r,s,c){var h=Yd();return h=h===null?null:{parent:ht._currentValue,pool:h},r.memoizedState={baseLanes:s,cachePool:h},n!==null&&_l(r,null),ef(),R1(r),n!==null&&Vs(n,r,c,!0),null}function nc(n,r){var s=r.ref;if(s===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(i(284));(n===null||n.ref!==s)&&(r.flags|=4194816)}}function Sf(n,r,s,c,h){return Ai(r),s=af(n,r,s,c,void 0,h),c=rf(),n!==null&&!yt?(sf(n,r,h),wa(n,r,h)):(ze&&c&&$d(r),r.flags|=1,At(n,r,s,h),r.child)}function q1(n,r,s,c,h,b){return Ai(r),r.updateQueue=null,s=F0(r,c,s,h),I0(n),c=rf(),n!==null&&!yt?(sf(n,r,b),wa(n,r,b)):(ze&&c&&$d(r),r.flags|=1,At(n,r,s,b),r.child)}function K1(n,r,s,c,h){if(Ai(r),r.stateNode===null){var b=dr,w=s.contextType;typeof w=="object"&&w!==null&&(b=Dt(w)),b=new s(c,b),r.memoizedState=b.state!==null&&b.state!==void 0?b.state:null,b.updater=vf,r.stateNode=b,b._reactInternals=r,b=r.stateNode,b.props=c,b.state=r.memoizedState,b.refs={},Wd(r),w=s.contextType,b.context=typeof w=="object"&&w!==null?Dt(w):dr,b.state=r.memoizedState,w=s.getDerivedStateFromProps,typeof w=="function"&&(yf(r,s,w,c),b.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof b.getSnapshotBeforeUpdate=="function"||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(w=b.state,typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount(),w!==b.state&&vf.enqueueReplaceState(b,b.state,null),Gs(r,c,b,h),Us(),b.state=r.memoizedState),typeof b.componentDidMount=="function"&&(r.flags|=4194308),c=!0}else if(n===null){b=r.stateNode;var T=r.memoizedProps,P=zi(s,T);b.props=P;var F=b.context,W=s.contextType;w=dr,typeof W=="object"&&W!==null&&(w=Dt(W));var ee=s.getDerivedStateFromProps;W=typeof ee=="function"||typeof b.getSnapshotBeforeUpdate=="function",T=r.pendingProps!==T,W||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(T||F!==w)&&O1(r,b,c,w),_a=!1;var q=r.memoizedState;b.state=q,Gs(r,c,b,h),Us(),F=r.memoizedState,T||q!==F||_a?(typeof ee=="function"&&(yf(r,s,ee,c),F=r.memoizedState),(P=_a||L1(r,s,P,c,q,F,w))?(W||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(r.flags|=4194308)):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=F),b.props=c,b.state=F,b.context=w,c=P):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{b=r.stateNode,Qd(n,r),w=r.memoizedProps,W=zi(s,w),b.props=W,ee=r.pendingProps,q=b.context,F=s.contextType,P=dr,typeof F=="object"&&F!==null&&(P=Dt(F)),T=s.getDerivedStateFromProps,(F=typeof T=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(w!==ee||q!==P)&&O1(r,b,c,P),_a=!1,q=r.memoizedState,b.state=q,Gs(r,c,b,h),Us();var K=r.memoizedState;w!==ee||q!==K||_a||n!==null&&n.dependencies!==null&&Nl(n.dependencies)?(typeof T=="function"&&(yf(r,s,T,c),K=r.memoizedState),(W=_a||L1(r,s,W,c,q,K,P)||n!==null&&n.dependencies!==null&&Nl(n.dependencies))?(F||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,K,P),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,K,P)),typeof b.componentDidUpdate=="function"&&(r.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof b.componentDidUpdate!="function"||w===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=K),b.props=c,b.state=K,b.context=P,c=W):(typeof b.componentDidUpdate!="function"||w===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),c=!1)}return b=c,nc(n,r),c=(r.flags&128)!==0,b||c?(b=r.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:b.render(),r.flags|=1,n!==null&&c?(r.child=wr(r,n.child,null,h),r.child=wr(r,null,s,h)):At(n,r,s,h),r.memoizedState=b.state,n=r.child):n=wa(n,r,h),n}function Y1(n,r,s,c){return Ds(),r.flags|=256,At(n,r,s,c),r.child}var kf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tf(n){return{baseLanes:n,cachePool:P0()}}function jf(n,r,s){return n=n!==null?n.childLanes&~s:0,r&&(n|=jn),n}function X1(n,r,s){var c=r.pendingProps,h=!1,b=(r.flags&128)!==0,w;if((w=b)||(w=n!==null&&n.memoizedState===null?!1:(gt.current&2)!==0),w&&(h=!0,r.flags&=-129),w=(r.flags&32)!==0,r.flags&=-33,n===null){if(ze){if(h?Ga(r):Ia(),ze){var T=tt,P;if(P=T){e:{for(P=T,T=In;P.nodeType!==8;){if(!T){T=null;break e}if(P=Ln(P.nextSibling),P===null){T=null;break e}}T=P}T!==null?(r.memoizedState={dehydrated:T,treeContext:Si!==null?{id:ga,overflow:ma}:null,retryLane:536870912,hydrationErrors:null},P=rn(18,null,null,0),P.stateNode=T,P.return=r,r.child=P,$t=r,tt=null,P=!0):P=!1}P||ji(r)}if(T=r.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return lp(T)?r.lanes=32:r.lanes=536870912,null;va(r)}return T=c.children,c=c.fallback,h?(Ia(),h=r.mode,T=ac({mode:"hidden",children:T},h),c=wi(c,h,s,null),T.return=r,c.return=r,T.sibling=c,r.child=T,h=r.child,h.memoizedState=Tf(s),h.childLanes=jf(n,w,s),r.memoizedState=kf,c):(Ga(r),Cf(r,T))}if(P=n.memoizedState,P!==null&&(T=P.dehydrated,T!==null)){if(b)r.flags&256?(Ga(r),r.flags&=-257,r=Af(n,r,s)):r.memoizedState!==null?(Ia(),r.child=n.child,r.flags|=128,r=null):(Ia(),h=c.fallback,T=r.mode,c=ac({mode:"visible",children:c.children},T),h=wi(h,T,s,null),h.flags|=2,c.return=r,h.return=r,c.sibling=h,r.child=c,wr(r,n.child,null,s),c=r.child,c.memoizedState=Tf(s),c.childLanes=jf(n,w,s),r.memoizedState=kf,r=h);else if(Ga(r),lp(T)){if(w=T.nextSibling&&T.nextSibling.dataset,w)var F=w.dgst;w=F,c=Error(i(419)),c.stack="",c.digest=w,Ps({value:c,source:null,stack:null}),r=Af(n,r,s)}else if(yt||Vs(n,r,s,!1),w=(s&n.childLanes)!==0,yt||w){if(w=Ye,w!==null&&(c=s&-s,c=(c&42)!==0?1:ld(c),c=(c&(w.suspendedLanes|s))!==0?0:c,c!==0&&c!==P.retryLane))throw P.retryLane=c,ur(n,c),un(w,n,c),$1;T.data==="$?"||Ff(),r=Af(n,r,s)}else T.data==="$?"?(r.flags|=192,r.child=n.child,r=null):(n=P.treeContext,tt=Ln(T.nextSibling),$t=r,ze=!0,Ti=null,In=!1,n!==null&&(Sn[kn++]=ga,Sn[kn++]=ma,Sn[kn++]=Si,ga=n.id,ma=n.overflow,Si=r),r=Cf(r,c.children),r.flags|=4096);return r}return h?(Ia(),h=c.fallback,T=r.mode,P=n.child,F=P.sibling,c=ha(P,{mode:"hidden",children:c.children}),c.subtreeFlags=P.subtreeFlags&65011712,F!==null?h=ha(F,h):(h=wi(h,T,s,null),h.flags|=2),h.return=r,c.return=r,c.sibling=h,r.child=c,c=h,h=r.child,T=n.child.memoizedState,T===null?T=Tf(s):(P=T.cachePool,P!==null?(F=ht._currentValue,P=P.parent!==F?{parent:F,pool:F}:P):P=P0(),T={baseLanes:T.baseLanes|s,cachePool:P}),h.memoizedState=T,h.childLanes=jf(n,w,s),r.memoizedState=kf,c):(Ga(r),s=n.child,n=s.sibling,s=ha(s,{mode:"visible",children:c.children}),s.return=r,s.sibling=null,n!==null&&(w=r.deletions,w===null?(r.deletions=[n],r.flags|=16):w.push(n)),r.child=s,r.memoizedState=null,s)}function Cf(n,r){return r=ac({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function ac(n,r){return n=rn(22,n,null,r),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Af(n,r,s){return wr(r,n.child,null,s),n=Cf(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function W1(n,r,s){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Id(n.return,r,s)}function Ef(n,r,s,c,h){var b=n.memoizedState;b===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:h}:(b.isBackwards=r,b.rendering=null,b.renderingStartTime=0,b.last=c,b.tail=s,b.tailMode=h)}function Q1(n,r,s){var c=r.pendingProps,h=c.revealOrder,b=c.tail;if(At(n,r,c.children,s),c=gt.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&W1(n,s,r);else if(n.tag===19)W1(n,s,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(ae(gt,c),h){case"forwards":for(s=r.child,h=null;s!==null;)n=s.alternate,n!==null&&Jl(n)===null&&(h=s),s=s.sibling;s=h,s===null?(h=r.child,r.child=null):(h=s.sibling,s.sibling=null),Ef(r,!1,h,s,b);break;case"backwards":for(s=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&Jl(n)===null){r.child=h;break}n=h.sibling,h.sibling=s,s=h,h=n}Ef(r,!0,s,null,b);break;case"together":Ef(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function wa(n,r,s){if(n!==null&&(r.dependencies=n.dependencies),Xa|=r.lanes,(s&r.childLanes)===0)if(n!==null){if(Vs(n,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(i(153));if(r.child!==null){for(n=r.child,s=ha(n,n.pendingProps),r.child=s,s.return=r;n.sibling!==null;)n=n.sibling,s=s.sibling=ha(n,n.pendingProps),s.return=r;s.sibling=null}return r.child}function Mf(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&Nl(n)))}function Y6(n,r,s){switch(r.tag){case 3:Oe(r,r.stateNode.containerInfo),Ba(r,ht,n.memoizedState.cache),Ds();break;case 27:case 5:gi(r);break;case 4:Oe(r,r.stateNode.containerInfo);break;case 10:Ba(r,r.type,r.memoizedProps.value);break;case 13:var c=r.memoizedState;if(c!==null)return c.dehydrated!==null?(Ga(r),r.flags|=128,null):(s&r.child.childLanes)!==0?X1(n,r,s):(Ga(r),n=wa(n,r,s),n!==null?n.sibling:null);Ga(r);break;case 19:var h=(n.flags&128)!==0;if(c=(s&r.childLanes)!==0,c||(Vs(n,r,s,!1),c=(s&r.childLanes)!==0),h){if(c)return Q1(n,r,s);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ae(gt,gt.current),c)break;return null;case 22:case 23:return r.lanes=0,I1(n,r,s);case 24:Ba(r,ht,n.memoizedState.cache)}return wa(n,r,s)}function Z1(n,r,s){if(n!==null)if(n.memoizedProps!==r.pendingProps)yt=!0;else{if(!Mf(n,s)&&(r.flags&128)===0)return yt=!1,Y6(n,r,s);yt=(n.flags&131072)!==0}else yt=!1,ze&&(r.flags&1048576)!==0&&E0(r,Vl,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var c=r.elementType,h=c._init;if(c=h(c._payload),r.type=c,typeof c=="function")Nd(c)?(n=zi(c,n),r.tag=1,r=K1(null,r,c,n,s)):(r.tag=0,r=Sf(null,r,c,n,s));else{if(c!=null){if(h=c.$$typeof,h===H){r.tag=11,r=H1(null,r,c,n,s);break e}else if(h===N){r.tag=14,r=U1(null,r,c,n,s);break e}}throw r=le(c)||c,Error(i(306,r,""))}}return r;case 0:return Sf(n,r,r.type,r.pendingProps,s);case 1:return c=r.type,h=zi(c,r.pendingProps),K1(n,r,c,h,s);case 3:e:{if(Oe(r,r.stateNode.containerInfo),n===null)throw Error(i(387));c=r.pendingProps;var b=r.memoizedState;h=b.element,Qd(n,r),Gs(r,c,null,s);var w=r.memoizedState;if(c=w.cache,Ba(r,ht,c),c!==b.cache&&Fd(r,[ht],s,!0),Us(),c=w.element,b.isDehydrated)if(b={element:c,isDehydrated:!1,cache:w.cache},r.updateQueue.baseState=b,r.memoizedState=b,r.flags&256){r=Y1(n,r,c,s);break e}else if(c!==h){h=vn(Error(i(424)),r),Ps(h),r=Y1(n,r,c,s);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(tt=Ln(n.firstChild),$t=r,ze=!0,Ti=null,In=!0,s=z1(r,null,c,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Ds(),c===h){r=wa(n,r,s);break e}At(n,r,c,s)}r=r.child}return r;case 26:return nc(n,r),n===null?(s=nb(r.type,null,r.pendingProps,null))?r.memoizedState=s:ze||(s=r.type,n=r.pendingProps,c=bc(de.current).createElement(s),c[Ot]=r,c[Ut]=n,Mt(c,s,n),xt(c),r.stateNode=c):r.memoizedState=nb(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return gi(r),n===null&&ze&&(c=r.stateNode=J2(r.type,r.pendingProps,de.current),$t=r,In=!0,h=tt,Ja(r.type)?(cp=h,tt=Ln(c.firstChild)):tt=h),At(n,r,r.pendingProps.children,s),nc(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&ze&&((h=c=tt)&&(c=S8(c,r.type,r.pendingProps,In),c!==null?(r.stateNode=c,$t=r,tt=Ln(c.firstChild),In=!1,h=!0):h=!1),h||ji(r)),gi(r),h=r.type,b=r.pendingProps,w=n!==null?n.memoizedProps:null,c=b.children,rp(h,b)?c=null:w!==null&&rp(h,w)&&(r.flags|=32),r.memoizedState!==null&&(h=af(n,r,$6,null,null,s),fo._currentValue=h),nc(n,r),At(n,r,c,s),r.child;case 6:return n===null&&ze&&((n=s=tt)&&(s=k8(s,r.pendingProps,In),s!==null?(r.stateNode=s,$t=r,tt=null,n=!0):n=!1),n||ji(r)),null;case 13:return X1(n,r,s);case 4:return Oe(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=wr(r,null,c,s):At(n,r,c,s),r.child;case 11:return H1(n,r,r.type,r.pendingProps,s);case 7:return At(n,r,r.pendingProps,s),r.child;case 8:return At(n,r,r.pendingProps.children,s),r.child;case 12:return At(n,r,r.pendingProps.children,s),r.child;case 10:return c=r.pendingProps,Ba(r,r.type,c.value),At(n,r,c.children,s),r.child;case 9:return h=r.type._context,c=r.pendingProps.children,Ai(r),h=Dt(h),c=c(h),r.flags|=1,At(n,r,c,s),r.child;case 14:return U1(n,r,r.type,r.pendingProps,s);case 15:return G1(n,r,r.type,r.pendingProps,s);case 19:return Q1(n,r,s);case 31:return c=r.pendingProps,s=r.mode,c={mode:c.mode,children:c.children},n===null?(s=ac(c,s),s.ref=r.ref,r.child=s,s.return=r,r=s):(s=ha(n.child,c),s.ref=r.ref,r.child=s,s.return=r,r=s),r;case 22:return I1(n,r,s);case 24:return Ai(r),c=Dt(ht),n===null?(h=Yd(),h===null&&(h=Ye,b=qd(),h.pooledCache=b,b.refCount++,b!==null&&(h.pooledCacheLanes|=s),h=b),r.memoizedState={parent:c,cache:h},Wd(r),Ba(r,ht,h)):((n.lanes&s)!==0&&(Qd(n,r),Gs(r,null,null,s),Us()),h=n.memoizedState,b=r.memoizedState,h.parent!==c?(h={parent:c,cache:c},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),Ba(r,ht,c)):(c=b.cache,Ba(r,ht,c),c!==h.cache&&Fd(r,[ht],s,!0))),At(n,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(i(156,r.tag))}function Sa(n){n.flags|=4}function J1(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!ob(r)){if(r=Tn.current,r!==null&&((Ce&4194048)===Ce?Fn!==null:(Ce&62914560)!==Ce&&(Ce&536870912)===0||r!==Fn))throw $s=Xd,V0;n.flags|=8192}}function ic(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?Rm():536870912,n.lanes|=r,jr|=r)}function Ws(n,r){if(!ze)switch(n.tailMode){case"hidden":r=n.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Je(n){var r=n.alternate!==null&&n.alternate.child===n.child,s=0,c=0;if(r)for(var h=n.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags&65011712,c|=h.flags&65011712,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=s,r}function X6(n,r,s){var c=r.pendingProps;switch(Hd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(r),null;case 1:return Je(r),null;case 3:return s=r.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),r.memoizedState.cache!==c&&(r.flags|=2048),xa(ht),Lt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(Os(r)?Sa(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,R0())),Je(r),null;case 26:return s=r.memoizedState,n===null?(Sa(r),s!==null?(Je(r),J1(r,s)):(Je(r),r.flags&=-16777217)):s?s!==n.memoizedState?(Sa(r),Je(r),J1(r,s)):(Je(r),r.flags&=-16777217):(n.memoizedProps!==c&&Sa(r),Je(r),r.flags&=-16777217),null;case 27:da(r),s=de.current;var h=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==c&&Sa(r);else{if(!c){if(r.stateNode===null)throw Error(i(166));return Je(r),null}n=se.current,Os(r)?M0(r):(n=J2(h,c,s),r.stateNode=n,Sa(r))}return Je(r),null;case 5:if(da(r),s=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==c&&Sa(r);else{if(!c){if(r.stateNode===null)throw Error(i(166));return Je(r),null}if(n=se.current,Os(r))M0(r);else{switch(h=bc(de.current),n){case 1:n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=h.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?h.createElement("select",{is:c.is}):h.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?h.createElement(s,{is:c.is}):h.createElement(s)}}n[Ot]=r,n[Ut]=c;e:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)n.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break e;for(;h.sibling===null;){if(h.return===null||h.return===r)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=n;e:switch(Mt(n,s,c),s){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Sa(r)}}return Je(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==c&&Sa(r);else{if(typeof c!="string"&&r.stateNode===null)throw Error(i(166));if(n=de.current,Os(r)){if(n=r.stateNode,s=r.memoizedProps,c=null,h=$t,h!==null)switch(h.tag){case 27:case 5:c=h.memoizedProps}n[Ot]=r,n=!!(n.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||q2(n.nodeValue,s)),n||ji(r)}else n=bc(n).createTextNode(c),n[Ot]=r,r.stateNode=n}return Je(r),null;case 13:if(c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=Os(r),c!==null&&c.dehydrated!==null){if(n===null){if(!h)throw Error(i(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(i(317));h[Ot]=r}else Ds(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Je(r),h=!1}else h=R0(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(va(r),r):(va(r),null)}if(va(r),(r.flags&128)!==0)return r.lanes=s,r;if(s=c!==null,n=n!==null&&n.memoizedState!==null,s){c=r.child,h=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(h=c.alternate.memoizedState.cachePool.pool);var b=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(b=c.memoizedState.cachePool.pool),b!==h&&(c.flags|=2048)}return s!==n&&s&&(r.child.flags|=8192),ic(r,r.updateQueue),Je(r),null;case 4:return Lt(),n===null&&ep(r.stateNode.containerInfo),Je(r),null;case 10:return xa(r.type),Je(r),null;case 19:if(ne(gt),h=r.memoizedState,h===null)return Je(r),null;if(c=(r.flags&128)!==0,b=h.rendering,b===null)if(c)Ws(h,!1);else{if(nt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(b=Jl(n),b!==null){for(r.flags|=128,Ws(h,!1),n=b.updateQueue,r.updateQueue=n,ic(r,n),r.subtreeFlags=0,n=s,s=r.child;s!==null;)A0(s,n),s=s.sibling;return ae(gt,gt.current&1|2),r.child}n=n.sibling}h.tail!==null&&Gn()>oc&&(r.flags|=128,c=!0,Ws(h,!1),r.lanes=4194304)}else{if(!c)if(n=Jl(b),n!==null){if(r.flags|=128,c=!0,n=n.updateQueue,r.updateQueue=n,ic(r,n),Ws(h,!0),h.tail===null&&h.tailMode==="hidden"&&!b.alternate&&!ze)return Je(r),null}else 2*Gn()-h.renderingStartTime>oc&&s!==536870912&&(r.flags|=128,c=!0,Ws(h,!1),r.lanes=4194304);h.isBackwards?(b.sibling=r.child,r.child=b):(n=h.last,n!==null?n.sibling=b:r.child=b,h.last=b)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=Gn(),r.sibling=null,n=gt.current,ae(gt,c?n&1|2:n&1),r):(Je(r),null);case 22:case 23:return va(r),tf(),c=r.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(r.flags|=8192):c&&(r.flags|=8192),c?(s&536870912)!==0&&(r.flags&128)===0&&(Je(r),r.subtreeFlags&6&&(r.flags|=8192)):Je(r),s=r.updateQueue,s!==null&&ic(r,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==s&&(r.flags|=2048),n!==null&&ne(Ei),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),xa(ht),Je(r),null;case 25:return null;case 30:return null}throw Error(i(156,r.tag))}function W6(n,r){switch(Hd(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return xa(ht),Lt(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return da(r),null;case 13:if(va(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(i(340));Ds()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return ne(gt),null;case 4:return Lt(),null;case 10:return xa(r.type),null;case 22:case 23:return va(r),tf(),n!==null&&ne(Ei),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return xa(ht),null;case 25:return null;default:return null}}function e2(n,r){switch(Hd(r),r.tag){case 3:xa(ht),Lt();break;case 26:case 27:case 5:da(r);break;case 4:Lt();break;case 13:va(r);break;case 19:ne(gt);break;case 10:xa(r.type);break;case 22:case 23:va(r),tf(),n!==null&&ne(Ei);break;case 24:xa(ht)}}function Qs(n,r){try{var s=r.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var h=c.next;s=h;do{if((s.tag&n)===n){c=void 0;var b=s.create,w=s.inst;c=b(),w.destroy=c}s=s.next}while(s!==h)}}catch(T){Fe(r,r.return,T)}}function Fa(n,r,s){try{var c=r.updateQueue,h=c!==null?c.lastEffect:null;if(h!==null){var b=h.next;c=b;do{if((c.tag&n)===n){var w=c.inst,T=w.destroy;if(T!==void 0){w.destroy=void 0,h=r;var P=s,F=T;try{F()}catch(W){Fe(h,P,W)}}}c=c.next}while(c!==b)}}catch(W){Fe(r,r.return,W)}}function t2(n){var r=n.updateQueue;if(r!==null){var s=n.stateNode;try{U0(r,s)}catch(c){Fe(n,n.return,c)}}}function n2(n,r,s){s.props=zi(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(c){Fe(n,r,c)}}function Zs(n,r){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof s=="function"?n.refCleanup=s(c):s.current=c}}catch(h){Fe(n,r,h)}}function qn(n,r){var s=n.ref,c=n.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(h){Fe(n,r,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){Fe(n,r,h)}else s.current=null}function a2(n){var r=n.type,s=n.memoizedProps,c=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break e;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(h){Fe(n,n.return,h)}}function zf(n,r,s){try{var c=n.stateNode;b8(c,n.type,s,r),c[Ut]=r}catch(h){Fe(n,n.return,h)}}function i2(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Ja(n.type)||n.tag===4}function Rf(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||i2(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Ja(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Lf(n,r,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(n),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=mc));else if(c!==4&&(c===27&&Ja(n.type)&&(s=n.stateNode,r=null),n=n.child,n!==null))for(Lf(n,r,s),n=n.sibling;n!==null;)Lf(n,r,s),n=n.sibling}function rc(n,r,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?s.insertBefore(n,r):s.appendChild(n);else if(c!==4&&(c===27&&Ja(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(rc(n,r,s),n=n.sibling;n!==null;)rc(n,r,s),n=n.sibling}function r2(n){var r=n.stateNode,s=n.memoizedProps;try{for(var c=n.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);Mt(r,c,s),r[Ot]=n,r[Ut]=s}catch(b){Fe(n,n.return,b)}}var ka=!1,st=!1,Of=!1,s2=typeof WeakSet=="function"?WeakSet:Set,vt=null;function Q6(n,r){if(n=n.containerInfo,ap=kc,n=b0(n),zd(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var h=c.anchorOffset,b=c.focusNode;c=c.focusOffset;try{s.nodeType,b.nodeType}catch{s=null;break e}var w=0,T=-1,P=-1,F=0,W=0,ee=n,q=null;t:for(;;){for(var K;ee!==s||h!==0&&ee.nodeType!==3||(T=w+h),ee!==b||c!==0&&ee.nodeType!==3||(P=w+c),ee.nodeType===3&&(w+=ee.nodeValue.length),(K=ee.firstChild)!==null;)q=ee,ee=K;for(;;){if(ee===n)break t;if(q===s&&++F===h&&(T=w),q===b&&++W===c&&(P=w),(K=ee.nextSibling)!==null)break;ee=q,q=ee.parentNode}ee=K}s=T===-1||P===-1?null:{start:T,end:P}}else s=null}s=s||{start:0,end:0}}else s=null;for(ip={focusedElem:n,selectionRange:s},kc=!1,vt=r;vt!==null;)if(r=vt,n=r.child,(r.subtreeFlags&1024)!==0&&n!==null)n.return=r,vt=n;else for(;vt!==null;){switch(r=vt,b=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&b!==null){n=void 0,s=r,h=b.memoizedProps,b=b.memoizedState,c=s.stateNode;try{var he=zi(s.type,h,s.elementType===s.type);n=c.getSnapshotBeforeUpdate(he,b),c.__reactInternalSnapshotBeforeUpdate=n}catch(fe){Fe(s,s.return,fe)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,s=n.nodeType,s===9)op(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":op(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=r.sibling,n!==null){n.return=r.return,vt=n;break}vt=r.return}}function o2(n,r,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:qa(n,s),c&4&&Qs(5,s);break;case 1:if(qa(n,s),c&4)if(n=s.stateNode,r===null)try{n.componentDidMount()}catch(w){Fe(s,s.return,w)}else{var h=zi(s.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(h,r,n.__reactInternalSnapshotBeforeUpdate)}catch(w){Fe(s,s.return,w)}}c&64&&t2(s),c&512&&Zs(s,s.return);break;case 3:if(qa(n,s),c&64&&(n=s.updateQueue,n!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{U0(n,r)}catch(w){Fe(s,s.return,w)}}break;case 27:r===null&&c&4&&r2(s);case 26:case 5:qa(n,s),r===null&&c&4&&a2(s),c&512&&Zs(s,s.return);break;case 12:qa(n,s);break;case 13:qa(n,s),c&4&&u2(n,s),c&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=s8.bind(null,s),T8(n,s))));break;case 22:if(c=s.memoizedState!==null||ka,!c){r=r!==null&&r.memoizedState!==null||st,h=ka;var b=st;ka=c,(st=r)&&!b?Ka(n,s,(s.subtreeFlags&8772)!==0):qa(n,s),ka=h,st=b}break;case 30:break;default:qa(n,s)}}function l2(n){var r=n.alternate;r!==null&&(n.alternate=null,l2(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&dd(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var We=null,Ft=!1;function Ta(n,r,s){for(s=s.child;s!==null;)c2(n,r,s),s=s.sibling}function c2(n,r,s){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(ys,s)}catch{}switch(s.tag){case 26:st||qn(s,r),Ta(n,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:st||qn(s,r);var c=We,h=Ft;Ja(s.type)&&(We=s.stateNode,Ft=!1),Ta(n,r,s),oo(s.stateNode),We=c,Ft=h;break;case 5:st||qn(s,r);case 6:if(c=We,h=Ft,We=null,Ta(n,r,s),We=c,Ft=h,We!==null)if(Ft)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(s.stateNode)}catch(b){Fe(s,r,b)}else try{We.removeChild(s.stateNode)}catch(b){Fe(s,r,b)}break;case 18:We!==null&&(Ft?(n=We,Q2(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),mo(n)):Q2(We,s.stateNode));break;case 4:c=We,h=Ft,We=s.stateNode.containerInfo,Ft=!0,Ta(n,r,s),We=c,Ft=h;break;case 0:case 11:case 14:case 15:st||Fa(2,s,r),st||Fa(4,s,r),Ta(n,r,s);break;case 1:st||(qn(s,r),c=s.stateNode,typeof c.componentWillUnmount=="function"&&n2(s,r,c)),Ta(n,r,s);break;case 21:Ta(n,r,s);break;case 22:st=(c=st)||s.memoizedState!==null,Ta(n,r,s),st=c;break;default:Ta(n,r,s)}}function u2(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{mo(n)}catch(s){Fe(r,r.return,s)}}function Z6(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new s2),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new s2),r;default:throw Error(i(435,n.tag))}}function Df(n,r){var s=Z6(n);r.forEach(function(c){var h=o8.bind(null,n,c);s.has(c)||(s.add(c),c.then(h,h))})}function sn(n,r){var s=r.deletions;if(s!==null)for(var c=0;c<s.length;c++){var h=s[c],b=n,w=r,T=w;e:for(;T!==null;){switch(T.tag){case 27:if(Ja(T.type)){We=T.stateNode,Ft=!1;break e}break;case 5:We=T.stateNode,Ft=!1;break e;case 3:case 4:We=T.stateNode.containerInfo,Ft=!0;break e}T=T.return}if(We===null)throw Error(i(160));c2(b,w,h),We=null,Ft=!1,b=h.alternate,b!==null&&(b.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)d2(r,n),r=r.sibling}var Rn=null;function d2(n,r){var s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:sn(r,n),on(n),c&4&&(Fa(3,n,n.return),Qs(3,n),Fa(5,n,n.return));break;case 1:sn(r,n),on(n),c&512&&(st||s===null||qn(s,s.return)),c&64&&ka&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var h=Rn;if(sn(r,n),on(n),c&512&&(st||s===null||qn(s,s.return)),c&4){var b=s!==null?s.memoizedState:null;if(c=n.memoizedState,s===null)if(c===null)if(n.stateNode===null){e:{c=n.type,s=n.memoizedProps,h=h.ownerDocument||h;t:switch(c){case"title":b=h.getElementsByTagName("title")[0],(!b||b[Ss]||b[Ot]||b.namespaceURI==="http://www.w3.org/2000/svg"||b.hasAttribute("itemprop"))&&(b=h.createElement(c),h.head.insertBefore(b,h.querySelector("head > title"))),Mt(b,c,s),b[Ot]=n,xt(b),c=b;break e;case"link":var w=rb("link","href",h).get(c+(s.href||""));if(w){for(var T=0;T<w.length;T++)if(b=w[T],b.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&b.getAttribute("rel")===(s.rel==null?null:s.rel)&&b.getAttribute("title")===(s.title==null?null:s.title)&&b.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){w.splice(T,1);break t}}b=h.createElement(c),Mt(b,c,s),h.head.appendChild(b);break;case"meta":if(w=rb("meta","content",h).get(c+(s.content||""))){for(T=0;T<w.length;T++)if(b=w[T],b.getAttribute("content")===(s.content==null?null:""+s.content)&&b.getAttribute("name")===(s.name==null?null:s.name)&&b.getAttribute("property")===(s.property==null?null:s.property)&&b.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&b.getAttribute("charset")===(s.charSet==null?null:s.charSet)){w.splice(T,1);break t}}b=h.createElement(c),Mt(b,c,s),h.head.appendChild(b);break;default:throw Error(i(468,c))}b[Ot]=n,xt(b),c=b}n.stateNode=c}else sb(h,n.type,n.stateNode);else n.stateNode=ib(h,c,n.memoizedProps);else b!==c?(b===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):b.count--,c===null?sb(h,n.type,n.stateNode):ib(h,c,n.memoizedProps)):c===null&&n.stateNode!==null&&zf(n,n.memoizedProps,s.memoizedProps)}break;case 27:sn(r,n),on(n),c&512&&(st||s===null||qn(s,s.return)),s!==null&&c&4&&zf(n,n.memoizedProps,s.memoizedProps);break;case 5:if(sn(r,n),on(n),c&512&&(st||s===null||qn(s,s.return)),n.flags&32){h=n.stateNode;try{ar(h,"")}catch(K){Fe(n,n.return,K)}}c&4&&n.stateNode!=null&&(h=n.memoizedProps,zf(n,h,s!==null?s.memoizedProps:h)),c&1024&&(Of=!0);break;case 6:if(sn(r,n),on(n),c&4){if(n.stateNode===null)throw Error(i(162));c=n.memoizedProps,s=n.stateNode;try{s.nodeValue=c}catch(K){Fe(n,n.return,K)}}break;case 3:if(vc=null,h=Rn,Rn=xc(r.containerInfo),sn(r,n),Rn=h,on(n),c&4&&s!==null&&s.memoizedState.isDehydrated)try{mo(r.containerInfo)}catch(K){Fe(n,n.return,K)}Of&&(Of=!1,f2(n));break;case 4:c=Rn,Rn=xc(n.stateNode.containerInfo),sn(r,n),on(n),Rn=c;break;case 12:sn(r,n),on(n);break;case 13:sn(r,n),on(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&($f=Gn()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Df(n,c)));break;case 22:h=n.memoizedState!==null;var P=s!==null&&s.memoizedState!==null,F=ka,W=st;if(ka=F||h,st=W||P,sn(r,n),st=W,ka=F,on(n),c&8192)e:for(r=n.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(s===null||P||ka||st||Ri(n)),s=null,r=n;;){if(r.tag===5||r.tag===26){if(s===null){P=s=r;try{if(b=P.stateNode,h)w=b.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{T=P.stateNode;var ee=P.memoizedProps.style,q=ee!=null&&ee.hasOwnProperty("display")?ee.display:null;T.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(K){Fe(P,P.return,K)}}}else if(r.tag===6){if(s===null){P=r;try{P.stateNode.nodeValue=h?"":P.memoizedProps}catch(K){Fe(P,P.return,K)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}c&4&&(c=n.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,Df(n,s))));break;case 19:sn(r,n),on(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Df(n,c)));break;case 30:break;case 21:break;default:sn(r,n),on(n)}}function on(n){var r=n.flags;if(r&2){try{for(var s,c=n.return;c!==null;){if(i2(c)){s=c;break}c=c.return}if(s==null)throw Error(i(160));switch(s.tag){case 27:var h=s.stateNode,b=Rf(n);rc(n,b,h);break;case 5:var w=s.stateNode;s.flags&32&&(ar(w,""),s.flags&=-33);var T=Rf(n);rc(n,T,w);break;case 3:case 4:var P=s.stateNode.containerInfo,F=Rf(n);Lf(n,F,P);break;default:throw Error(i(161))}}catch(W){Fe(n,n.return,W)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function f2(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;f2(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function qa(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)o2(n,r.alternate,r),r=r.sibling}function Ri(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:Fa(4,r,r.return),Ri(r);break;case 1:qn(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&n2(r,r.return,s),Ri(r);break;case 27:oo(r.stateNode);case 26:case 5:qn(r,r.return),Ri(r);break;case 22:r.memoizedState===null&&Ri(r);break;case 30:Ri(r);break;default:Ri(r)}n=n.sibling}}function Ka(n,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var c=r.alternate,h=n,b=r,w=b.flags;switch(b.tag){case 0:case 11:case 15:Ka(h,b,s),Qs(4,b);break;case 1:if(Ka(h,b,s),c=b,h=c.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(F){Fe(c,c.return,F)}if(c=b,h=c.updateQueue,h!==null){var T=c.stateNode;try{var P=h.shared.hiddenCallbacks;if(P!==null)for(h.shared.hiddenCallbacks=null,h=0;h<P.length;h++)H0(P[h],T)}catch(F){Fe(c,c.return,F)}}s&&w&64&&t2(b),Zs(b,b.return);break;case 27:r2(b);case 26:case 5:Ka(h,b,s),s&&c===null&&w&4&&a2(b),Zs(b,b.return);break;case 12:Ka(h,b,s);break;case 13:Ka(h,b,s),s&&w&4&&u2(h,b);break;case 22:b.memoizedState===null&&Ka(h,b,s),Zs(b,b.return);break;case 30:break;default:Ka(h,b,s)}r=r.sibling}}function Pf(n,r){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&Ns(s))}function Vf(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Ns(n))}function Kn(n,r,s,c){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)p2(n,r,s,c),r=r.sibling}function p2(n,r,s,c){var h=r.flags;switch(r.tag){case 0:case 11:case 15:Kn(n,r,s,c),h&2048&&Qs(9,r);break;case 1:Kn(n,r,s,c);break;case 3:Kn(n,r,s,c),h&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Ns(n)));break;case 12:if(h&2048){Kn(n,r,s,c),n=r.stateNode;try{var b=r.memoizedProps,w=b.id,T=b.onPostCommit;typeof T=="function"&&T(w,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(P){Fe(r,r.return,P)}}else Kn(n,r,s,c);break;case 13:Kn(n,r,s,c);break;case 23:break;case 22:b=r.stateNode,w=r.alternate,r.memoizedState!==null?b._visibility&2?Kn(n,r,s,c):Js(n,r):b._visibility&2?Kn(n,r,s,c):(b._visibility|=2,Sr(n,r,s,c,(r.subtreeFlags&10256)!==0)),h&2048&&Pf(w,r);break;case 24:Kn(n,r,s,c),h&2048&&Vf(r.alternate,r);break;default:Kn(n,r,s,c)}}function Sr(n,r,s,c,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var b=n,w=r,T=s,P=c,F=w.flags;switch(w.tag){case 0:case 11:case 15:Sr(b,w,T,P,h),Qs(8,w);break;case 23:break;case 22:var W=w.stateNode;w.memoizedState!==null?W._visibility&2?Sr(b,w,T,P,h):Js(b,w):(W._visibility|=2,Sr(b,w,T,P,h)),h&&F&2048&&Pf(w.alternate,w);break;case 24:Sr(b,w,T,P,h),h&&F&2048&&Vf(w.alternate,w);break;default:Sr(b,w,T,P,h)}r=r.sibling}}function Js(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=n,c=r,h=c.flags;switch(c.tag){case 22:Js(s,c),h&2048&&Pf(c.alternate,c);break;case 24:Js(s,c),h&2048&&Vf(c.alternate,c);break;default:Js(s,c)}r=r.sibling}}var eo=8192;function kr(n){if(n.subtreeFlags&eo)for(n=n.child;n!==null;)h2(n),n=n.sibling}function h2(n){switch(n.tag){case 26:kr(n),n.flags&eo&&n.memoizedState!==null&&N8(Rn,n.memoizedState,n.memoizedProps);break;case 5:kr(n);break;case 3:case 4:var r=Rn;Rn=xc(n.stateNode.containerInfo),kr(n),Rn=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=eo,eo=16777216,kr(n),eo=r):kr(n));break;default:kr(n)}}function g2(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function to(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var c=r[s];vt=c,b2(c,n)}g2(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)m2(n),n=n.sibling}function m2(n){switch(n.tag){case 0:case 11:case 15:to(n),n.flags&2048&&Fa(9,n,n.return);break;case 3:to(n);break;case 12:to(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,sc(n)):to(n);break;default:to(n)}}function sc(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var c=r[s];vt=c,b2(c,n)}g2(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:Fa(8,r,r.return),sc(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,sc(r));break;default:sc(r)}n=n.sibling}}function b2(n,r){for(;vt!==null;){var s=vt;switch(s.tag){case 0:case 11:case 15:Fa(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Ns(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,vt=c;else e:for(s=n;vt!==null;){c=vt;var h=c.sibling,b=c.return;if(l2(c),c===s){vt=null;break e}if(h!==null){h.return=b,vt=h;break e}vt=b}}}var J6={getCacheForType:function(n){var r=Dt(ht),s=r.data.get(n);return s===void 0&&(s=n(),r.data.set(n,s)),s}},e8=typeof WeakMap=="function"?WeakMap:Map,Ve=0,Ye=null,Te=null,Ce=0,Ne=0,ln=null,Ya=!1,Tr=!1,Nf=!1,ja=0,nt=0,Xa=0,Li=0,Bf=0,jn=0,jr=0,no=null,qt=null,_f=!1,$f=0,oc=1/0,lc=null,Wa=null,Et=0,Qa=null,Cr=null,Ar=0,Hf=0,Uf=null,x2=null,ao=0,Gf=null;function cn(){if((Ve&2)!==0&&Ce!==0)return Ce&-Ce;if(D.T!==null){var n=hr;return n!==0?n:Wf()}return Dm()}function y2(){jn===0&&(jn=(Ce&536870912)===0||ze?zm():536870912);var n=Tn.current;return n!==null&&(n.flags|=32),jn}function un(n,r,s){(n===Ye&&(Ne===2||Ne===9)||n.cancelPendingCommit!==null)&&(Er(n,0),Za(n,Ce,jn,!1)),ws(n,s),((Ve&2)===0||n!==Ye)&&(n===Ye&&((Ve&2)===0&&(Li|=s),nt===4&&Za(n,Ce,jn,!1)),Yn(n))}function v2(n,r,s){if((Ve&6)!==0)throw Error(i(327));var c=!s&&(r&124)===0&&(r&n.expiredLanes)===0||vs(n,r),h=c?a8(n,r):qf(n,r,!0),b=c;do{if(h===0){Tr&&!c&&Za(n,r,0,!1);break}else{if(s=n.current.alternate,b&&!t8(s)){h=qf(n,r,!1),b=!1;continue}if(h===2){if(b=r,n.errorRecoveryDisabledLanes&b)var w=0;else w=n.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){r=w;e:{var T=n;h=no;var P=T.current.memoizedState.isDehydrated;if(P&&(Er(T,w).flags|=256),w=qf(T,w,!1),w!==2){if(Nf&&!P){T.errorRecoveryDisabledLanes|=b,Li|=b,h=4;break e}b=qt,qt=h,b!==null&&(qt===null?qt=b:qt.push.apply(qt,b))}h=w}if(b=!1,h!==2)continue}}if(h===1){Er(n,0),Za(n,r,0,!0);break}e:{switch(c=n,b=h,b){case 0:case 1:throw Error(i(345));case 4:if((r&4194048)!==r)break;case 6:Za(c,r,jn,!Ya);break e;case 2:qt=null;break;case 3:case 5:break;default:throw Error(i(329))}if((r&62914560)===r&&(h=$f+300-Gn(),10<h)){if(Za(c,r,jn,!Ya),yl(c,0,!0)!==0)break e;c.timeoutHandle=X2(w2.bind(null,c,s,qt,lc,_f,r,jn,Li,jr,Ya,b,2,-0,0),h);break e}w2(c,s,qt,lc,_f,r,jn,Li,jr,Ya,b,0,-0,0)}}break}while(!0);Yn(n)}function w2(n,r,s,c,h,b,w,T,P,F,W,ee,q,K){if(n.timeoutHandle=-1,ee=r.subtreeFlags,(ee&8192||(ee&16785408)===16785408)&&(uo={stylesheets:null,count:0,unsuspend:V8},h2(r),ee=B8(),ee!==null)){n.cancelPendingCommit=ee(E2.bind(null,n,r,b,s,c,h,w,T,P,W,1,q,K)),Za(n,b,w,!F);return}E2(n,r,b,s,c,h,w,T,P)}function t8(n){for(var r=n;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var h=s[c],b=h.getSnapshot;h=h.value;try{if(!an(b(),h))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Za(n,r,s,c){r&=~Bf,r&=~Li,n.suspendedLanes|=r,n.pingedLanes&=~r,c&&(n.warmLanes|=r),c=n.expirationTimes;for(var h=r;0<h;){var b=31-nn(h),w=1<<b;c[b]=-1,h&=~w}s!==0&&Lm(n,s,r)}function cc(){return(Ve&6)===0?(io(0),!1):!0}function If(){if(Te!==null){if(Ne===0)var n=Te.return;else n=Te,ba=Ci=null,of(n),vr=null,Ys=0,n=Te;for(;n!==null;)e2(n.alternate,n),n=n.return;Te=null}}function Er(n,r){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,y8(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),If(),Ye=n,Te=s=ha(n.current,null),Ce=r,Ne=0,ln=null,Ya=!1,Tr=vs(n,r),Nf=!1,jr=jn=Bf=Li=Xa=nt=0,qt=no=null,_f=!1,(r&8)!==0&&(r|=r&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=r;0<c;){var h=31-nn(c),b=1<<h;r|=n[h],c&=~b}return ja=r,Rl(),s}function S2(n,r){Se=null,D.H=Wl,r===_s||r===$l?(r=_0(),Ne=3):r===V0?(r=_0(),Ne=4):Ne=r===$1?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,ln=r,Te===null&&(nt=1,tc(n,vn(r,n.current)))}function k2(){var n=D.H;return D.H=Wl,n===null?Wl:n}function T2(){var n=D.A;return D.A=J6,n}function Ff(){nt=4,Ya||(Ce&4194048)!==Ce&&Tn.current!==null||(Tr=!0),(Xa&134217727)===0&&(Li&134217727)===0||Ye===null||Za(Ye,Ce,jn,!1)}function qf(n,r,s){var c=Ve;Ve|=2;var h=k2(),b=T2();(Ye!==n||Ce!==r)&&(lc=null,Er(n,r)),r=!1;var w=nt;e:do try{if(Ne!==0&&Te!==null){var T=Te,P=ln;switch(Ne){case 8:If(),w=6;break e;case 3:case 2:case 9:case 6:Tn.current===null&&(r=!0);var F=Ne;if(Ne=0,ln=null,Mr(n,T,P,F),s&&Tr){w=0;break e}break;default:F=Ne,Ne=0,ln=null,Mr(n,T,P,F)}}n8(),w=nt;break}catch(W){S2(n,W)}while(!0);return r&&n.shellSuspendCounter++,ba=Ci=null,Ve=c,D.H=h,D.A=b,Te===null&&(Ye=null,Ce=0,Rl()),w}function n8(){for(;Te!==null;)j2(Te)}function a8(n,r){var s=Ve;Ve|=2;var c=k2(),h=T2();Ye!==n||Ce!==r?(lc=null,oc=Gn()+500,Er(n,r)):Tr=vs(n,r);e:do try{if(Ne!==0&&Te!==null){r=Te;var b=ln;t:switch(Ne){case 1:Ne=0,ln=null,Mr(n,r,b,1);break;case 2:case 9:if(N0(b)){Ne=0,ln=null,C2(r);break}r=function(){Ne!==2&&Ne!==9||Ye!==n||(Ne=7),Yn(n)},b.then(r,r);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:N0(b)?(Ne=0,ln=null,C2(r)):(Ne=0,ln=null,Mr(n,r,b,7));break;case 5:var w=null;switch(Te.tag){case 26:w=Te.memoizedState;case 5:case 27:var T=Te;if(!w||ob(w)){Ne=0,ln=null;var P=T.sibling;if(P!==null)Te=P;else{var F=T.return;F!==null?(Te=F,uc(F)):Te=null}break t}}Ne=0,ln=null,Mr(n,r,b,5);break;case 6:Ne=0,ln=null,Mr(n,r,b,6);break;case 8:If(),nt=6;break e;default:throw Error(i(462))}}i8();break}catch(W){S2(n,W)}while(!0);return ba=Ci=null,D.H=c,D.A=h,Ve=s,Te!==null?0:(Ye=null,Ce=0,Rl(),nt)}function i8(){for(;Te!==null&&!Cw();)j2(Te)}function j2(n){var r=Z1(n.alternate,n,ja);n.memoizedProps=n.pendingProps,r===null?uc(n):Te=r}function C2(n){var r=n,s=r.alternate;switch(r.tag){case 15:case 0:r=q1(s,r,r.pendingProps,r.type,void 0,Ce);break;case 11:r=q1(s,r,r.pendingProps,r.type.render,r.ref,Ce);break;case 5:of(r);default:e2(s,r),r=Te=A0(r,ja),r=Z1(s,r,ja)}n.memoizedProps=n.pendingProps,r===null?uc(n):Te=r}function Mr(n,r,s,c){ba=Ci=null,of(r),vr=null,Ys=0;var h=r.return;try{if(K6(n,h,r,s,Ce)){nt=1,tc(n,vn(s,n.current)),Te=null;return}}catch(b){if(h!==null)throw Te=h,b;nt=1,tc(n,vn(s,n.current)),Te=null;return}r.flags&32768?(ze||c===1?n=!0:Tr||(Ce&536870912)!==0?n=!1:(Ya=n=!0,(c===2||c===9||c===3||c===6)&&(c=Tn.current,c!==null&&c.tag===13&&(c.flags|=16384))),A2(r,n)):uc(r)}function uc(n){var r=n;do{if((r.flags&32768)!==0){A2(r,Ya);return}n=r.return;var s=X6(r.alternate,r,ja);if(s!==null){Te=s;return}if(r=r.sibling,r!==null){Te=r;return}Te=r=n}while(r!==null);nt===0&&(nt=5)}function A2(n,r){do{var s=W6(n.alternate,n);if(s!==null){s.flags&=32767,Te=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(n=n.sibling,n!==null)){Te=n;return}Te=n=s}while(n!==null);nt=6,Te=null}function E2(n,r,s,c,h,b,w,T,P){n.cancelPendingCommit=null;do dc();while(Et!==0);if((Ve&6)!==0)throw Error(i(327));if(r!==null){if(r===n.current)throw Error(i(177));if(b=r.lanes|r.childLanes,b|=Pd,Vw(n,s,b,w,T,P),n===Ye&&(Te=Ye=null,Ce=0),Cr=r,Qa=n,Ar=s,Hf=b,Uf=h,x2=c,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,l8(ml,function(){return O2(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||c){c=D.T,D.T=null,h=B.p,B.p=2,w=Ve,Ve|=4;try{Q6(n,r,s)}finally{Ve=w,B.p=h,D.T=c}}Et=1,M2(),z2(),R2()}}function M2(){if(Et===1){Et=0;var n=Qa,r=Cr,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=D.T,D.T=null;var c=B.p;B.p=2;var h=Ve;Ve|=4;try{d2(r,n);var b=ip,w=b0(n.containerInfo),T=b.focusedElem,P=b.selectionRange;if(w!==T&&T&&T.ownerDocument&&m0(T.ownerDocument.documentElement,T)){if(P!==null&&zd(T)){var F=P.start,W=P.end;if(W===void 0&&(W=F),"selectionStart"in T)T.selectionStart=F,T.selectionEnd=Math.min(W,T.value.length);else{var ee=T.ownerDocument||document,q=ee&&ee.defaultView||window;if(q.getSelection){var K=q.getSelection(),he=T.textContent.length,fe=Math.min(P.start,he),He=P.end===void 0?fe:Math.min(P.end,he);!K.extend&&fe>He&&(w=He,He=fe,fe=w);var U=g0(T,fe),_=g0(T,He);if(U&&_&&(K.rangeCount!==1||K.anchorNode!==U.node||K.anchorOffset!==U.offset||K.focusNode!==_.node||K.focusOffset!==_.offset)){var I=ee.createRange();I.setStart(U.node,U.offset),K.removeAllRanges(),fe>He?(K.addRange(I),K.extend(_.node,_.offset)):(I.setEnd(_.node,_.offset),K.addRange(I))}}}}for(ee=[],K=T;K=K.parentNode;)K.nodeType===1&&ee.push({element:K,left:K.scrollLeft,top:K.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ee.length;T++){var Q=ee[T];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}kc=!!ap,ip=ap=null}finally{Ve=h,B.p=c,D.T=s}}n.current=r,Et=2}}function z2(){if(Et===2){Et=0;var n=Qa,r=Cr,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=D.T,D.T=null;var c=B.p;B.p=2;var h=Ve;Ve|=4;try{o2(n,r.alternate,r)}finally{Ve=h,B.p=c,D.T=s}}Et=3}}function R2(){if(Et===4||Et===3){Et=0,Aw();var n=Qa,r=Cr,s=Ar,c=x2;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Et=5:(Et=0,Cr=Qa=null,L2(n,n.pendingLanes));var h=n.pendingLanes;if(h===0&&(Wa=null),cd(s),r=r.stateNode,tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(ys,r,void 0,(r.current.flags&128)===128)}catch{}if(c!==null){r=D.T,h=B.p,B.p=2,D.T=null;try{for(var b=n.onRecoverableError,w=0;w<c.length;w++){var T=c[w];b(T.value,{componentStack:T.stack})}}finally{D.T=r,B.p=h}}(Ar&3)!==0&&dc(),Yn(n),h=n.pendingLanes,(s&4194090)!==0&&(h&42)!==0?n===Gf?ao++:(ao=0,Gf=n):ao=0,io(0)}}function L2(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Ns(r)))}function dc(n){return M2(),z2(),R2(),O2()}function O2(){if(Et!==5)return!1;var n=Qa,r=Hf;Hf=0;var s=cd(Ar),c=D.T,h=B.p;try{B.p=32>s?32:s,D.T=null,s=Uf,Uf=null;var b=Qa,w=Ar;if(Et=0,Cr=Qa=null,Ar=0,(Ve&6)!==0)throw Error(i(331));var T=Ve;if(Ve|=4,m2(b.current),p2(b,b.current,w,s),Ve=T,io(0,!1),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(ys,b)}catch{}return!0}finally{B.p=h,D.T=c,L2(n,r)}}function D2(n,r,s){r=vn(s,r),r=wf(n.stateNode,r,2),n=Ha(n,r,2),n!==null&&(ws(n,2),Yn(n))}function Fe(n,r,s){if(n.tag===3)D2(n,n,s);else for(;r!==null;){if(r.tag===3){D2(r,n,s);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Wa===null||!Wa.has(c))){n=vn(s,n),s=B1(2),c=Ha(r,s,2),c!==null&&(_1(s,c,r,n),ws(c,2),Yn(c));break}}r=r.return}}function Kf(n,r,s){var c=n.pingCache;if(c===null){c=n.pingCache=new e8;var h=new Set;c.set(r,h)}else h=c.get(r),h===void 0&&(h=new Set,c.set(r,h));h.has(s)||(Nf=!0,h.add(s),n=r8.bind(null,n,r,s),r.then(n,n))}function r8(n,r,s){var c=n.pingCache;c!==null&&c.delete(r),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,Ye===n&&(Ce&s)===s&&(nt===4||nt===3&&(Ce&62914560)===Ce&&300>Gn()-$f?(Ve&2)===0&&Er(n,0):Bf|=s,jr===Ce&&(jr=0)),Yn(n)}function P2(n,r){r===0&&(r=Rm()),n=ur(n,r),n!==null&&(ws(n,r),Yn(n))}function s8(n){var r=n.memoizedState,s=0;r!==null&&(s=r.retryLane),P2(n,s)}function o8(n,r){var s=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(s=h.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(r),P2(n,s)}function l8(n,r){return rd(n,r)}var fc=null,zr=null,Yf=!1,pc=!1,Xf=!1,Oi=0;function Yn(n){n!==zr&&n.next===null&&(zr===null?fc=zr=n:zr=zr.next=n),pc=!0,Yf||(Yf=!0,u8())}function io(n,r){if(!Xf&&pc){Xf=!0;do for(var s=!1,c=fc;c!==null;){if(n!==0){var h=c.pendingLanes;if(h===0)var b=0;else{var w=c.suspendedLanes,T=c.pingedLanes;b=(1<<31-nn(42|n)+1)-1,b&=h&~(w&~T),b=b&201326741?b&201326741|1:b?b|2:0}b!==0&&(s=!0,_2(c,b))}else b=Ce,b=yl(c,c===Ye?b:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(b&3)===0||vs(c,b)||(s=!0,_2(c,b));c=c.next}while(s);Xf=!1}}function c8(){V2()}function V2(){pc=Yf=!1;var n=0;Oi!==0&&(x8()&&(n=Oi),Oi=0);for(var r=Gn(),s=null,c=fc;c!==null;){var h=c.next,b=N2(c,r);b===0?(c.next=null,s===null?fc=h:s.next=h,h===null&&(zr=s)):(s=c,(n!==0||(b&3)!==0)&&(pc=!0)),c=h}io(n)}function N2(n,r){for(var s=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,b=n.pendingLanes&-62914561;0<b;){var w=31-nn(b),T=1<<w,P=h[w];P===-1?((T&s)===0||(T&c)!==0)&&(h[w]=Pw(T,r)):P<=r&&(n.expiredLanes|=T),b&=~T}if(r=Ye,s=Ce,s=yl(n,n===r?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,s===0||n===r&&(Ne===2||Ne===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&sd(c),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||vs(n,s)){if(r=s&-s,r===n.callbackPriority)return r;switch(c!==null&&sd(c),cd(s)){case 2:case 8:s=Em;break;case 32:s=ml;break;case 268435456:s=Mm;break;default:s=ml}return c=B2.bind(null,n),s=rd(s,c),n.callbackPriority=r,n.callbackNode=s,r}return c!==null&&c!==null&&sd(c),n.callbackPriority=2,n.callbackNode=null,2}function B2(n,r){if(Et!==0&&Et!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(dc()&&n.callbackNode!==s)return null;var c=Ce;return c=yl(n,n===Ye?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(v2(n,c,r),N2(n,Gn()),n.callbackNode!=null&&n.callbackNode===s?B2.bind(null,n):null)}function _2(n,r){if(dc())return null;v2(n,r,!0)}function u8(){v8(function(){(Ve&6)!==0?rd(Am,c8):V2()})}function Wf(){return Oi===0&&(Oi=zm()),Oi}function $2(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Tl(""+n)}function H2(n,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,n.id&&s.setAttribute("form",n.id),r.parentNode.insertBefore(s,r),n=new FormData(n),s.parentNode.removeChild(s),n}function d8(n,r,s,c,h){if(r==="submit"&&s&&s.stateNode===h){var b=$2((h[Ut]||null).action),w=c.submitter;w&&(r=(r=w[Ut]||null)?$2(r.formAction):w.getAttribute("formAction"),r!==null&&(b=r,w=null));var T=new El("action","action",null,c,h);n.push({event:T,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Oi!==0){var P=w?H2(h,w):new FormData(h);mf(s,{pending:!0,data:P,method:h.method,action:b},null,P)}}else typeof b=="function"&&(T.preventDefault(),P=w?H2(h,w):new FormData(h),mf(s,{pending:!0,data:P,method:h.method,action:b},b,P))},currentTarget:h}]})}}for(var Qf=0;Qf<Dd.length;Qf++){var Zf=Dd[Qf],f8=Zf.toLowerCase(),p8=Zf[0].toUpperCase()+Zf.slice(1);zn(f8,"on"+p8)}zn(v0,"onAnimationEnd"),zn(w0,"onAnimationIteration"),zn(S0,"onAnimationStart"),zn("dblclick","onDoubleClick"),zn("focusin","onFocus"),zn("focusout","onBlur"),zn(z6,"onTransitionRun"),zn(R6,"onTransitionStart"),zn(L6,"onTransitionCancel"),zn(k0,"onTransitionEnd"),er("onMouseEnter",["mouseout","mouseover"]),er("onMouseLeave",["mouseout","mouseover"]),er("onPointerEnter",["pointerout","pointerover"]),er("onPointerLeave",["pointerout","pointerover"]),bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),bi("onBeforeInput",["compositionend","keypress","textInput","paste"]),bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h8=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ro));function U2(n,r){r=(r&4)!==0;for(var s=0;s<n.length;s++){var c=n[s],h=c.event;c=c.listeners;e:{var b=void 0;if(r)for(var w=c.length-1;0<=w;w--){var T=c[w],P=T.instance,F=T.currentTarget;if(T=T.listener,P!==b&&h.isPropagationStopped())break e;b=T,h.currentTarget=F;try{b(h)}catch(W){ec(W)}h.currentTarget=null,b=P}else for(w=0;w<c.length;w++){if(T=c[w],P=T.instance,F=T.currentTarget,T=T.listener,P!==b&&h.isPropagationStopped())break e;b=T,h.currentTarget=F;try{b(h)}catch(W){ec(W)}h.currentTarget=null,b=P}}}}function je(n,r){var s=r[ud];s===void 0&&(s=r[ud]=new Set);var c=n+"__bubble";s.has(c)||(G2(r,n,2,!1),s.add(c))}function Jf(n,r,s){var c=0;r&&(c|=4),G2(s,n,c,r)}var hc="_reactListening"+Math.random().toString(36).slice(2);function ep(n){if(!n[hc]){n[hc]=!0,Vm.forEach(function(s){s!=="selectionchange"&&(h8.has(s)||Jf(s,!1,n),Jf(s,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[hc]||(r[hc]=!0,Jf("selectionchange",!1,r))}}function G2(n,r,s,c){switch(pb(r)){case 2:var h=H8;break;case 8:h=U8;break;default:h=hp}s=h.bind(null,r,s,n),h=void 0,!wd||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(r,s,{capture:!0,passive:h}):n.addEventListener(r,s,!0):h!==void 0?n.addEventListener(r,s,{passive:h}):n.addEventListener(r,s,!1)}function tp(n,r,s,c,h){var b=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var T=c.stateNode.containerInfo;if(T===h)break;if(w===4)for(w=c.return;w!==null;){var P=w.tag;if((P===3||P===4)&&w.stateNode.containerInfo===h)return;w=w.return}for(;T!==null;){if(w=Qi(T),w===null)return;if(P=w.tag,P===5||P===6||P===26||P===27){c=b=w;continue e}T=T.parentNode}}c=c.return}Wm(function(){var F=b,W=yd(s),ee=[];e:{var q=T0.get(n);if(q!==void 0){var K=El,he=n;switch(n){case"keypress":if(Cl(s)===0)break e;case"keydown":case"keyup":K=l6;break;case"focusin":he="focus",K=jd;break;case"focusout":he="blur",K=jd;break;case"beforeblur":case"afterblur":K=jd;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=Jm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=Ww;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=d6;break;case v0:case w0:case S0:K=Jw;break;case k0:K=p6;break;case"scroll":case"scrollend":K=Yw;break;case"wheel":K=g6;break;case"copy":case"cut":case"paste":K=t6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=t0;break;case"toggle":case"beforetoggle":K=b6}var fe=(r&4)!==0,He=!fe&&(n==="scroll"||n==="scrollend"),U=fe?q!==null?q+"Capture":null:q;fe=[];for(var _=F,I;_!==null;){var Q=_;if(I=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||I===null||U===null||(Q=Ts(_,U),Q!=null&&fe.push(so(_,Q,I))),He)break;_=_.return}0<fe.length&&(q=new K(q,he,null,s,W),ee.push({event:q,listeners:fe}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",K=n==="mouseout"||n==="pointerout",q&&s!==xd&&(he=s.relatedTarget||s.fromElement)&&(Qi(he)||he[Wi]))break e;if((K||q)&&(q=W.window===W?W:(q=W.ownerDocument)?q.defaultView||q.parentWindow:window,K?(he=s.relatedTarget||s.toElement,K=F,he=he?Qi(he):null,he!==null&&(He=l(he),fe=he.tag,he!==He||fe!==5&&fe!==27&&fe!==6)&&(he=null)):(K=null,he=F),K!==he)){if(fe=Jm,Q="onMouseLeave",U="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(fe=t0,Q="onPointerLeave",U="onPointerEnter",_="pointer"),He=K==null?q:ks(K),I=he==null?q:ks(he),q=new fe(Q,_+"leave",K,s,W),q.target=He,q.relatedTarget=I,Q=null,Qi(W)===F&&(fe=new fe(U,_+"enter",he,s,W),fe.target=I,fe.relatedTarget=He,Q=fe),He=Q,K&&he)t:{for(fe=K,U=he,_=0,I=fe;I;I=Rr(I))_++;for(I=0,Q=U;Q;Q=Rr(Q))I++;for(;0<_-I;)fe=Rr(fe),_--;for(;0<I-_;)U=Rr(U),I--;for(;_--;){if(fe===U||U!==null&&fe===U.alternate)break t;fe=Rr(fe),U=Rr(U)}fe=null}else fe=null;K!==null&&I2(ee,q,K,fe,!1),he!==null&&He!==null&&I2(ee,He,he,fe,!0)}}e:{if(q=F?ks(F):window,K=q.nodeName&&q.nodeName.toLowerCase(),K==="select"||K==="input"&&q.type==="file")var re=c0;else if(o0(q))if(u0)re=A6;else{re=j6;var ke=T6}else K=q.nodeName,!K||K.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?F&&bd(F.elementType)&&(re=c0):re=C6;if(re&&(re=re(n,F))){l0(ee,re,s,W);break e}ke&&ke(n,q,F),n==="focusout"&&F&&q.type==="number"&&F.memoizedProps.value!=null&&md(q,"number",q.value)}switch(ke=F?ks(F):window,n){case"focusin":(o0(ke)||ke.contentEditable==="true")&&(or=ke,Rd=F,Ls=null);break;case"focusout":Ls=Rd=or=null;break;case"mousedown":Ld=!0;break;case"contextmenu":case"mouseup":case"dragend":Ld=!1,x0(ee,s,W);break;case"selectionchange":if(M6)break;case"keydown":case"keyup":x0(ee,s,W)}var ue;if(Ad)e:{switch(n){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else sr?r0(n,s)&&(pe="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(pe="onCompositionStart");pe&&(n0&&s.locale!=="ko"&&(sr||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&sr&&(ue=Qm()):(Na=W,Sd="value"in Na?Na.value:Na.textContent,sr=!0)),ke=gc(F,pe),0<ke.length&&(pe=new e0(pe,n,null,s,W),ee.push({event:pe,listeners:ke}),ue?pe.data=ue:(ue=s0(s),ue!==null&&(pe.data=ue)))),(ue=y6?v6(n,s):w6(n,s))&&(pe=gc(F,"onBeforeInput"),0<pe.length&&(ke=new e0("onBeforeInput","beforeinput",null,s,W),ee.push({event:ke,listeners:pe}),ke.data=ue)),d8(ee,n,F,s,W)}U2(ee,r)})}function so(n,r,s){return{instance:n,listener:r,currentTarget:s}}function gc(n,r){for(var s=r+"Capture",c=[];n!==null;){var h=n,b=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||b===null||(h=Ts(n,s),h!=null&&c.unshift(so(n,h,b)),h=Ts(n,r),h!=null&&c.push(so(n,h,b))),n.tag===3)return c;n=n.return}return[]}function Rr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function I2(n,r,s,c,h){for(var b=r._reactName,w=[];s!==null&&s!==c;){var T=s,P=T.alternate,F=T.stateNode;if(T=T.tag,P!==null&&P===c)break;T!==5&&T!==26&&T!==27||F===null||(P=F,h?(F=Ts(s,b),F!=null&&w.unshift(so(s,F,P))):h||(F=Ts(s,b),F!=null&&w.push(so(s,F,P)))),s=s.return}w.length!==0&&n.push({event:r,listeners:w})}var g8=/\r\n?/g,m8=/\u0000|\uFFFD/g;function F2(n){return(typeof n=="string"?n:""+n).replace(g8,`
`).replace(m8,"")}function q2(n,r){return r=F2(r),F2(n)===r}function mc(){}function $e(n,r,s,c,h,b){switch(s){case"children":typeof c=="string"?r==="body"||r==="textarea"&&c===""||ar(n,c):(typeof c=="number"||typeof c=="bigint")&&r!=="body"&&ar(n,""+c);break;case"className":wl(n,"class",c);break;case"tabIndex":wl(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":wl(n,s,c);break;case"style":Ym(n,c,b);break;case"data":if(r!=="object"){wl(n,"data",c);break}case"src":case"href":if(c===""&&(r!=="a"||s!=="href")){n.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=Tl(""+c),n.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof b=="function"&&(s==="formAction"?(r!=="input"&&$e(n,r,"name",h.name,h,null),$e(n,r,"formEncType",h.formEncType,h,null),$e(n,r,"formMethod",h.formMethod,h,null),$e(n,r,"formTarget",h.formTarget,h,null)):($e(n,r,"encType",h.encType,h,null),$e(n,r,"method",h.method,h,null),$e(n,r,"target",h.target,h,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=Tl(""+c),n.setAttribute(s,c);break;case"onClick":c!=null&&(n.onclick=mc);break;case"onScroll":c!=null&&je("scroll",n);break;case"onScrollEnd":c!=null&&je("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(i(60));n.innerHTML=s}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}s=Tl(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""+c):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":c===!0?n.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,c):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(s,c):n.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(s):n.setAttribute(s,c);break;case"popover":je("beforetoggle",n),je("toggle",n),vl(n,"popover",c);break;case"xlinkActuate":fa(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":fa(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":fa(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":fa(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":fa(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":fa(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":fa(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":fa(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":fa(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":vl(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=qw.get(s)||s,vl(n,s,c))}}function np(n,r,s,c,h,b){switch(s){case"style":Ym(n,c,b);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(i(60));n.innerHTML=s}}break;case"children":typeof c=="string"?ar(n,c):(typeof c=="number"||typeof c=="bigint")&&ar(n,""+c);break;case"onScroll":c!=null&&je("scroll",n);break;case"onScrollEnd":c!=null&&je("scrollend",n);break;case"onClick":c!=null&&(n.onclick=mc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Nm.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),r=s.slice(2,h?s.length-7:void 0),b=n[Ut]||null,b=b!=null?b[s]:null,typeof b=="function"&&n.removeEventListener(r,b,h),typeof c=="function")){typeof b!="function"&&b!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(r,c,h);break e}s in n?n[s]=c:c===!0?n.setAttribute(s,""):vl(n,s,c)}}}function Mt(n,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":je("error",n),je("load",n);var c=!1,h=!1,b;for(b in s)if(s.hasOwnProperty(b)){var w=s[b];if(w!=null)switch(b){case"src":c=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:$e(n,r,b,w,s,null)}}h&&$e(n,r,"srcSet",s.srcSet,s,null),c&&$e(n,r,"src",s.src,s,null);return;case"input":je("invalid",n);var T=b=w=h=null,P=null,F=null;for(c in s)if(s.hasOwnProperty(c)){var W=s[c];if(W!=null)switch(c){case"name":h=W;break;case"type":w=W;break;case"checked":P=W;break;case"defaultChecked":F=W;break;case"value":b=W;break;case"defaultValue":T=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(i(137,r));break;default:$e(n,r,c,W,s,null)}}Im(n,b,T,P,F,w,h,!1),Sl(n);return;case"select":je("invalid",n),c=w=b=null;for(h in s)if(s.hasOwnProperty(h)&&(T=s[h],T!=null))switch(h){case"value":b=T;break;case"defaultValue":w=T;break;case"multiple":c=T;default:$e(n,r,h,T,s,null)}r=b,s=w,n.multiple=!!c,r!=null?nr(n,!!c,r,!1):s!=null&&nr(n,!!c,s,!0);return;case"textarea":je("invalid",n),b=h=c=null;for(w in s)if(s.hasOwnProperty(w)&&(T=s[w],T!=null))switch(w){case"value":c=T;break;case"defaultValue":h=T;break;case"children":b=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(i(91));break;default:$e(n,r,w,T,s,null)}qm(n,c,h,b),Sl(n);return;case"option":for(P in s)if(s.hasOwnProperty(P)&&(c=s[P],c!=null))switch(P){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:$e(n,r,P,c,s,null)}return;case"dialog":je("beforetoggle",n),je("toggle",n),je("cancel",n),je("close",n);break;case"iframe":case"object":je("load",n);break;case"video":case"audio":for(c=0;c<ro.length;c++)je(ro[c],n);break;case"image":je("error",n),je("load",n);break;case"details":je("toggle",n);break;case"embed":case"source":case"link":je("error",n),je("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(F in s)if(s.hasOwnProperty(F)&&(c=s[F],c!=null))switch(F){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:$e(n,r,F,c,s,null)}return;default:if(bd(r)){for(W in s)s.hasOwnProperty(W)&&(c=s[W],c!==void 0&&np(n,r,W,c,s,void 0));return}}for(T in s)s.hasOwnProperty(T)&&(c=s[T],c!=null&&$e(n,r,T,c,s,null))}function b8(n,r,s,c){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,b=null,w=null,T=null,P=null,F=null,W=null;for(K in s){var ee=s[K];if(s.hasOwnProperty(K)&&ee!=null)switch(K){case"checked":break;case"value":break;case"defaultValue":P=ee;default:c.hasOwnProperty(K)||$e(n,r,K,null,c,ee)}}for(var q in c){var K=c[q];if(ee=s[q],c.hasOwnProperty(q)&&(K!=null||ee!=null))switch(q){case"type":b=K;break;case"name":h=K;break;case"checked":F=K;break;case"defaultChecked":W=K;break;case"value":w=K;break;case"defaultValue":T=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(i(137,r));break;default:K!==ee&&$e(n,r,q,K,c,ee)}}gd(n,w,T,P,F,W,b,h);return;case"select":K=w=T=q=null;for(b in s)if(P=s[b],s.hasOwnProperty(b)&&P!=null)switch(b){case"value":break;case"multiple":K=P;default:c.hasOwnProperty(b)||$e(n,r,b,null,c,P)}for(h in c)if(b=c[h],P=s[h],c.hasOwnProperty(h)&&(b!=null||P!=null))switch(h){case"value":q=b;break;case"defaultValue":T=b;break;case"multiple":w=b;default:b!==P&&$e(n,r,h,b,c,P)}r=T,s=w,c=K,q!=null?nr(n,!!s,q,!1):!!c!=!!s&&(r!=null?nr(n,!!s,r,!0):nr(n,!!s,s?[]:"",!1));return;case"textarea":K=q=null;for(T in s)if(h=s[T],s.hasOwnProperty(T)&&h!=null&&!c.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:$e(n,r,T,null,c,h)}for(w in c)if(h=c[w],b=s[w],c.hasOwnProperty(w)&&(h!=null||b!=null))switch(w){case"value":q=h;break;case"defaultValue":K=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(i(91));break;default:h!==b&&$e(n,r,w,h,c,b)}Fm(n,q,K);return;case"option":for(var he in s)if(q=s[he],s.hasOwnProperty(he)&&q!=null&&!c.hasOwnProperty(he))switch(he){case"selected":n.selected=!1;break;default:$e(n,r,he,null,c,q)}for(P in c)if(q=c[P],K=s[P],c.hasOwnProperty(P)&&q!==K&&(q!=null||K!=null))switch(P){case"selected":n.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:$e(n,r,P,q,c,K)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in s)q=s[fe],s.hasOwnProperty(fe)&&q!=null&&!c.hasOwnProperty(fe)&&$e(n,r,fe,null,c,q);for(F in c)if(q=c[F],K=s[F],c.hasOwnProperty(F)&&q!==K&&(q!=null||K!=null))switch(F){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(i(137,r));break;default:$e(n,r,F,q,c,K)}return;default:if(bd(r)){for(var He in s)q=s[He],s.hasOwnProperty(He)&&q!==void 0&&!c.hasOwnProperty(He)&&np(n,r,He,void 0,c,q);for(W in c)q=c[W],K=s[W],!c.hasOwnProperty(W)||q===K||q===void 0&&K===void 0||np(n,r,W,q,c,K);return}}for(var U in s)q=s[U],s.hasOwnProperty(U)&&q!=null&&!c.hasOwnProperty(U)&&$e(n,r,U,null,c,q);for(ee in c)q=c[ee],K=s[ee],!c.hasOwnProperty(ee)||q===K||q==null&&K==null||$e(n,r,ee,q,c,K)}var ap=null,ip=null;function bc(n){return n.nodeType===9?n:n.ownerDocument}function K2(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Y2(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function rp(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var sp=null;function x8(){var n=window.event;return n&&n.type==="popstate"?n===sp?!1:(sp=n,!0):(sp=null,!1)}var X2=typeof setTimeout=="function"?setTimeout:void 0,y8=typeof clearTimeout=="function"?clearTimeout:void 0,W2=typeof Promise=="function"?Promise:void 0,v8=typeof queueMicrotask=="function"?queueMicrotask:typeof W2<"u"?function(n){return W2.resolve(null).then(n).catch(w8)}:X2;function w8(n){setTimeout(function(){throw n})}function Ja(n){return n==="head"}function Q2(n,r){var s=r,c=0,h=0;do{var b=s.nextSibling;if(n.removeChild(s),b&&b.nodeType===8)if(s=b.data,s==="/$"){if(0<c&&8>c){s=c;var w=n.ownerDocument;if(s&1&&oo(w.documentElement),s&2&&oo(w.body),s&4)for(s=w.head,oo(s),w=s.firstChild;w;){var T=w.nextSibling,P=w.nodeName;w[Ss]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&w.rel.toLowerCase()==="stylesheet"||s.removeChild(w),w=T}}if(h===0){n.removeChild(b),mo(r);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:c=s.charCodeAt(0)-48;else c=0;s=b}while(s);mo(r)}function op(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":op(s),dd(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function S8(n,r,s,c){for(;n.nodeType===1;){var h=s;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[Ss])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(b=n.getAttribute("rel"),b==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(b!==h.rel||n.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(b=n.getAttribute("src"),(b!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&b&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var b=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===b)return n}else return n;if(n=Ln(n.nextSibling),n===null)break}return null}function k8(n,r,s){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=Ln(n.nextSibling),n===null))return null;return n}function lp(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function T8(n,r){var s=n.ownerDocument;if(n.data!=="$?"||s.readyState==="complete")r();else{var c=function(){r(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function Ln(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}var cp=null;function Z2(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return n;r--}else s==="/$"&&r++}n=n.previousSibling}return null}function J2(n,r,s){switch(r=bc(s),n){case"html":if(n=r.documentElement,!n)throw Error(i(452));return n;case"head":if(n=r.head,!n)throw Error(i(453));return n;case"body":if(n=r.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function oo(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);dd(n)}var Cn=new Map,eb=new Set;function xc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ca=B.d;B.d={f:j8,r:C8,D:A8,C:E8,L:M8,m:z8,X:L8,S:R8,M:O8};function j8(){var n=Ca.f(),r=cc();return n||r}function C8(n){var r=Zi(n);r!==null&&r.tag===5&&r.type==="form"?v1(r):Ca.r(n)}var Lr=typeof document>"u"?null:document;function tb(n,r,s){var c=Lr;if(c&&typeof r=="string"&&r){var h=yn(r);h='link[rel="'+n+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),eb.has(h)||(eb.add(h),n={rel:n,crossOrigin:s,href:r},c.querySelector(h)===null&&(r=c.createElement("link"),Mt(r,"link",n),xt(r),c.head.appendChild(r)))}}function A8(n){Ca.D(n),tb("dns-prefetch",n,null)}function E8(n,r){Ca.C(n,r),tb("preconnect",n,r)}function M8(n,r,s){Ca.L(n,r,s);var c=Lr;if(c&&n&&r){var h='link[rel="preload"][as="'+yn(r)+'"]';r==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+yn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+yn(s.imageSizes)+'"]')):h+='[href="'+yn(n)+'"]';var b=h;switch(r){case"style":b=Or(n);break;case"script":b=Dr(n)}Cn.has(b)||(n=m({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:n,as:r},s),Cn.set(b,n),c.querySelector(h)!==null||r==="style"&&c.querySelector(lo(b))||r==="script"&&c.querySelector(co(b))||(r=c.createElement("link"),Mt(r,"link",n),xt(r),c.head.appendChild(r)))}}function z8(n,r){Ca.m(n,r);var s=Lr;if(s&&n){var c=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+yn(c)+'"][href="'+yn(n)+'"]',b=h;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":b=Dr(n)}if(!Cn.has(b)&&(n=m({rel:"modulepreload",href:n},r),Cn.set(b,n),s.querySelector(h)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(co(b)))return}c=s.createElement("link"),Mt(c,"link",n),xt(c),s.head.appendChild(c)}}}function R8(n,r,s){Ca.S(n,r,s);var c=Lr;if(c&&n){var h=Ji(c).hoistableStyles,b=Or(n);r=r||"default";var w=h.get(b);if(!w){var T={loading:0,preload:null};if(w=c.querySelector(lo(b)))T.loading=5;else{n=m({rel:"stylesheet",href:n,"data-precedence":r},s),(s=Cn.get(b))&&up(n,s);var P=w=c.createElement("link");xt(P),Mt(P,"link",n),P._p=new Promise(function(F,W){P.onload=F,P.onerror=W}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,yc(w,r,c)}w={type:"stylesheet",instance:w,count:1,state:T},h.set(b,w)}}}function L8(n,r){Ca.X(n,r);var s=Lr;if(s&&n){var c=Ji(s).hoistableScripts,h=Dr(n),b=c.get(h);b||(b=s.querySelector(co(h)),b||(n=m({src:n,async:!0},r),(r=Cn.get(h))&&dp(n,r),b=s.createElement("script"),xt(b),Mt(b,"link",n),s.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},c.set(h,b))}}function O8(n,r){Ca.M(n,r);var s=Lr;if(s&&n){var c=Ji(s).hoistableScripts,h=Dr(n),b=c.get(h);b||(b=s.querySelector(co(h)),b||(n=m({src:n,async:!0,type:"module"},r),(r=Cn.get(h))&&dp(n,r),b=s.createElement("script"),xt(b),Mt(b,"link",n),s.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},c.set(h,b))}}function nb(n,r,s,c){var h=(h=de.current)?xc(h):null;if(!h)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=Or(s.href),s=Ji(h).hoistableStyles,c=s.get(r),c||(c={type:"style",instance:null,count:0,state:null},s.set(r,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=Or(s.href);var b=Ji(h).hoistableStyles,w=b.get(n);if(w||(h=h.ownerDocument||h,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},b.set(n,w),(b=h.querySelector(lo(n)))&&!b._p&&(w.instance=b,w.state.loading=5),Cn.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Cn.set(n,s),b||D8(h,n,s,w.state))),r&&c===null)throw Error(i(528,""));return w}if(r&&c!==null)throw Error(i(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Dr(s),s=Ji(h).hoistableScripts,c=s.get(r),c||(c={type:"script",instance:null,count:0,state:null},s.set(r,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function Or(n){return'href="'+yn(n)+'"'}function lo(n){return'link[rel="stylesheet"]['+n+"]"}function ab(n){return m({},n,{"data-precedence":n.precedence,precedence:null})}function D8(n,r,s,c){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?c.loading=1:(r=n.createElement("link"),c.preload=r,r.addEventListener("load",function(){return c.loading|=1}),r.addEventListener("error",function(){return c.loading|=2}),Mt(r,"link",s),xt(r),n.head.appendChild(r))}function Dr(n){return'[src="'+yn(n)+'"]'}function co(n){return"script[async]"+n}function ib(n,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var c=n.querySelector('style[data-href~="'+yn(s.href)+'"]');if(c)return r.instance=c,xt(c),c;var h=m({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),xt(c),Mt(c,"style",h),yc(c,s.precedence,n),r.instance=c;case"stylesheet":h=Or(s.href);var b=n.querySelector(lo(h));if(b)return r.state.loading|=4,r.instance=b,xt(b),b;c=ab(s),(h=Cn.get(h))&&up(c,h),b=(n.ownerDocument||n).createElement("link"),xt(b);var w=b;return w._p=new Promise(function(T,P){w.onload=T,w.onerror=P}),Mt(b,"link",c),r.state.loading|=4,yc(b,s.precedence,n),r.instance=b;case"script":return b=Dr(s.src),(h=n.querySelector(co(b)))?(r.instance=h,xt(h),h):(c=s,(h=Cn.get(b))&&(c=m({},s),dp(c,h)),n=n.ownerDocument||n,h=n.createElement("script"),xt(h),Mt(h,"link",c),n.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(i(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(c=r.instance,r.state.loading|=4,yc(c,s.precedence,n));return r.instance}function yc(n,r,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=c.length?c[c.length-1]:null,b=h,w=0;w<c.length;w++){var T=c[w];if(T.dataset.precedence===r)b=T;else if(b!==h)break}b?b.parentNode.insertBefore(n,b.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(n,r.firstChild))}function up(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function dp(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var vc=null;function rb(n,r,s){if(vc===null){var c=new Map,h=vc=new Map;h.set(s,c)}else h=vc,c=h.get(s),c||(c=new Map,h.set(s,c));if(c.has(n))return c;for(c.set(n,null),s=s.getElementsByTagName(n),h=0;h<s.length;h++){var b=s[h];if(!(b[Ss]||b[Ot]||n==="link"&&b.getAttribute("rel")==="stylesheet")&&b.namespaceURI!=="http://www.w3.org/2000/svg"){var w=b.getAttribute(r)||"";w=n+w;var T=c.get(w);T?T.push(b):c.set(w,[b])}}return c}function sb(n,r,s){n=n.ownerDocument||n,n.head.insertBefore(s,r==="title"?n.querySelector("head > title"):null)}function P8(n,r,s){if(s===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function ob(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var uo=null;function V8(){}function N8(n,r,s){if(uo===null)throw Error(i(475));var c=uo;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=Or(s.href),b=n.querySelector(lo(h));if(b){n=b._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=wc.bind(c),n.then(c,c)),r.state.loading|=4,r.instance=b,xt(b);return}b=n.ownerDocument||n,s=ab(s),(h=Cn.get(h))&&up(s,h),b=b.createElement("link"),xt(b);var w=b;w._p=new Promise(function(T,P){w.onload=T,w.onerror=P}),Mt(b,"link",s),r.instance=b}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(c.count++,r=wc.bind(c),n.addEventListener("load",r),n.addEventListener("error",r))}}function B8(){if(uo===null)throw Error(i(475));var n=uo;return n.stylesheets&&n.count===0&&fp(n,n.stylesheets),0<n.count?function(r){var s=setTimeout(function(){if(n.stylesheets&&fp(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(s)}}:null}function wc(){if(this.count--,this.count===0){if(this.stylesheets)fp(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Sc=null;function fp(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Sc=new Map,r.forEach(_8,n),Sc=null,wc.call(n))}function _8(n,r){if(!(r.state.loading&4)){var s=Sc.get(n);if(s)var c=s.get(null);else{s=new Map,Sc.set(n,s);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),b=0;b<h.length;b++){var w=h[b];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(s.set(w.dataset.precedence,w),c=w)}c&&s.set(null,c)}h=r.instance,w=h.getAttribute("data-precedence"),b=s.get(w)||c,b===c&&s.set(null,h),s.set(w,h),this.count++,c=wc.bind(this),h.addEventListener("load",c),h.addEventListener("error",c),b?b.parentNode.insertBefore(h,b.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),r.state.loading|=4}}var fo={$$typeof:C,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function $8(n,r,s,c,h,b,w,T){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=od(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=od(0),this.hiddenUpdates=od(null),this.identifierPrefix=c,this.onUncaughtError=h,this.onCaughtError=b,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function lb(n,r,s,c,h,b,w,T,P,F,W,ee){return n=new $8(n,r,s,w,T,P,F,ee),r=1,b===!0&&(r|=24),b=rn(3,null,null,r),n.current=b,b.stateNode=n,r=qd(),r.refCount++,n.pooledCache=r,r.refCount++,b.memoizedState={element:c,isDehydrated:s,cache:r},Wd(b),n}function cb(n){return n?(n=dr,n):dr}function ub(n,r,s,c,h,b){h=cb(h),c.context===null?c.context=h:c.pendingContext=h,c=$a(r),c.payload={element:s},b=b===void 0?null:b,b!==null&&(c.callback=b),s=Ha(n,c,r),s!==null&&(un(s,n,r),Hs(s,n,r))}function db(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<r?s:r}}function pp(n,r){db(n,r),(n=n.alternate)&&db(n,r)}function fb(n){if(n.tag===13){var r=ur(n,67108864);r!==null&&un(r,n,67108864),pp(n,67108864)}}var kc=!0;function H8(n,r,s,c){var h=D.T;D.T=null;var b=B.p;try{B.p=2,hp(n,r,s,c)}finally{B.p=b,D.T=h}}function U8(n,r,s,c){var h=D.T;D.T=null;var b=B.p;try{B.p=8,hp(n,r,s,c)}finally{B.p=b,D.T=h}}function hp(n,r,s,c){if(kc){var h=gp(c);if(h===null)tp(n,r,c,Tc,s),hb(n,c);else if(I8(h,n,r,s,c))c.stopPropagation();else if(hb(n,c),r&4&&-1<G8.indexOf(n)){for(;h!==null;){var b=Zi(h);if(b!==null)switch(b.tag){case 3:if(b=b.stateNode,b.current.memoizedState.isDehydrated){var w=mi(b.pendingLanes);if(w!==0){var T=b;for(T.pendingLanes|=2,T.entangledLanes|=2;w;){var P=1<<31-nn(w);T.entanglements[1]|=P,w&=~P}Yn(b),(Ve&6)===0&&(oc=Gn()+500,io(0))}}break;case 13:T=ur(b,2),T!==null&&un(T,b,2),cc(),pp(b,2)}if(b=gp(c),b===null&&tp(n,r,c,Tc,s),b===h)break;h=b}h!==null&&c.stopPropagation()}else tp(n,r,c,null,s)}}function gp(n){return n=yd(n),mp(n)}var Tc=null;function mp(n){if(Tc=null,n=Qi(n),n!==null){var r=l(n);if(r===null)n=null;else{var s=r.tag;if(s===13){if(n=u(r),n!==null)return n;n=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return Tc=n,null}function pb(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ew()){case Am:return 2;case Em:return 8;case ml:case Mw:return 32;case Mm:return 268435456;default:return 32}default:return 32}}var bp=!1,ei=null,ti=null,ni=null,po=new Map,ho=new Map,ai=[],G8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hb(n,r){switch(n){case"focusin":case"focusout":ei=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":ni=null;break;case"pointerover":case"pointerout":po.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(r.pointerId)}}function go(n,r,s,c,h,b){return n===null||n.nativeEvent!==b?(n={blockedOn:r,domEventName:s,eventSystemFlags:c,nativeEvent:b,targetContainers:[h]},r!==null&&(r=Zi(r),r!==null&&fb(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function I8(n,r,s,c,h){switch(r){case"focusin":return ei=go(ei,n,r,s,c,h),!0;case"dragenter":return ti=go(ti,n,r,s,c,h),!0;case"mouseover":return ni=go(ni,n,r,s,c,h),!0;case"pointerover":var b=h.pointerId;return po.set(b,go(po.get(b)||null,n,r,s,c,h)),!0;case"gotpointercapture":return b=h.pointerId,ho.set(b,go(ho.get(b)||null,n,r,s,c,h)),!0}return!1}function gb(n){var r=Qi(n.target);if(r!==null){var s=l(r);if(s!==null){if(r=s.tag,r===13){if(r=u(s),r!==null){n.blockedOn=r,Nw(n.priority,function(){if(s.tag===13){var c=cn();c=ld(c);var h=ur(s,c);h!==null&&un(h,s,c),pp(s,c)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function jc(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var s=gp(n.nativeEvent);if(s===null){s=n.nativeEvent;var c=new s.constructor(s.type,s);xd=c,s.target.dispatchEvent(c),xd=null}else return r=Zi(s),r!==null&&fb(r),n.blockedOn=s,!1;r.shift()}return!0}function mb(n,r,s){jc(n)&&s.delete(r)}function F8(){bp=!1,ei!==null&&jc(ei)&&(ei=null),ti!==null&&jc(ti)&&(ti=null),ni!==null&&jc(ni)&&(ni=null),po.forEach(mb),ho.forEach(mb)}function Cc(n,r){n.blockedOn===r&&(n.blockedOn=null,bp||(bp=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,F8)))}var Ac=null;function bb(n){Ac!==n&&(Ac=n,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Ac===n&&(Ac=null);for(var r=0;r<n.length;r+=3){var s=n[r],c=n[r+1],h=n[r+2];if(typeof c!="function"){if(mp(c||s)===null)continue;break}var b=Zi(s);b!==null&&(n.splice(r,3),r-=3,mf(b,{pending:!0,data:h,method:s.method,action:c},c,h))}}))}function mo(n){function r(P){return Cc(P,n)}ei!==null&&Cc(ei,n),ti!==null&&Cc(ti,n),ni!==null&&Cc(ni,n),po.forEach(r),ho.forEach(r);for(var s=0;s<ai.length;s++){var c=ai[s];c.blockedOn===n&&(c.blockedOn=null)}for(;0<ai.length&&(s=ai[0],s.blockedOn===null);)gb(s),s.blockedOn===null&&ai.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var h=s[c],b=s[c+1],w=h[Ut]||null;if(typeof b=="function")w||bb(s);else if(w){var T=null;if(b&&b.hasAttribute("formAction")){if(h=b,w=b[Ut]||null)T=w.formAction;else if(mp(h)!==null)continue}else T=w.action;typeof T=="function"?s[c+1]=T:(s.splice(c,3),c-=3),bb(s)}}}function xp(n){this._internalRoot=n}Ec.prototype.render=xp.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(i(409));var s=r.current,c=cn();ub(s,c,n,r,null,null)},Ec.prototype.unmount=xp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;ub(n.current,2,null,n,null,null),cc(),r[Wi]=null}};function Ec(n){this._internalRoot=n}Ec.prototype.unstable_scheduleHydration=function(n){if(n){var r=Dm();n={blockedOn:null,target:n,priority:r};for(var s=0;s<ai.length&&r!==0&&r<ai[s].priority;s++);ai.splice(s,0,n),s===0&&gb(n)}};var xb=t.version;if(xb!=="19.1.1")throw Error(i(527,xb,"19.1.1"));B.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=f(r),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var q8={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mc.isDisabled&&Mc.supportsFiber)try{ys=Mc.inject(q8),tn=Mc}catch{}}return xo.createRoot=function(n,r){if(!o(n))throw Error(i(299));var s=!1,c="",h=D1,b=P1,w=V1,T=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(b=r.onCaughtError),r.onRecoverableError!==void 0&&(w=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(T=r.unstable_transitionCallbacks)),r=lb(n,1,!1,null,null,s,c,h,b,w,T,null),n[Wi]=r.current,ep(n),new xp(r)},xo.hydrateRoot=function(n,r,s){if(!o(n))throw Error(i(299));var c=!1,h="",b=D1,w=P1,T=V1,P=null,F=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(b=s.onUncaughtError),s.onCaughtError!==void 0&&(w=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(P=s.unstable_transitionCallbacks),s.formState!==void 0&&(F=s.formState)),r=lb(n,1,!0,r,s??null,c,h,b,w,T,P,F),r.context=cb(null),s=r.current,c=cn(),c=ld(c),h=$a(c),h.callback=null,Ha(s,h,c),s=c,r.current.lanes=s,ws(r,s),Yn(r),n[Wi]=r.current,ep(n),new Ec(r)},xo.version="19.1.1",xo}var Eb;function nS(){if(Eb)return vp.exports;Eb=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),vp.exports=tS(),vp.exports}var aS=nS();const iS=Pv(aS);var j=mg();const Ae=Pv(j),Mb=Y8({__proto__:null,default:Ae},[j]);/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var zb="popstate";function rS(e={}){function t(i,o){let{pathname:l,search:u,hash:p}=i.location;return Sh("",{pathname:l,search:u,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function a(i,o){return typeof o=="string"?o:Io(o)}return oS(t,a,null,e)}function Ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Nn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function sS(){return Math.random().toString(36).substring(2,10)}function Rb(e,t){return{usr:e.state,key:e.key,idx:t}}function Sh(e,t,a=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?us(t):t,state:a,key:t&&t.key||i||sS()}}function Io({pathname:e="/",search:t="",hash:a=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function us(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substring(a),e=e.substring(0,a));let i=e.indexOf("?");i>=0&&(t.search=e.substring(i),e=e.substring(0,i)),e&&(t.pathname=e)}return t}function oS(e,t,a,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,u=o.history,p="POP",f=null,g=m();g==null&&(g=0,u.replaceState({...u.state,idx:g},""));function m(){return(u.state||{idx:null}).idx}function x(){p="POP";let A=m(),M=A==null?null:A-g;g=A,f&&f({action:p,location:k.location,delta:M})}function y(A,M){p="PUSH";let z=Sh(k.location,A,M);g=m()+1;let C=Rb(z,g),H=k.createHref(z);try{u.pushState(C,"",H)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign(H)}l&&f&&f({action:p,location:k.location,delta:1})}function v(A,M){p="REPLACE";let z=Sh(k.location,A,M);g=m();let C=Rb(z,g),H=k.createHref(z);u.replaceState(C,"",H),l&&f&&f({action:p,location:k.location,delta:0})}function S(A){return lS(A)}let k={get action(){return p},get location(){return e(o,u)},listen(A){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(zb,x),f=A,()=>{o.removeEventListener(zb,x),f=null}},createHref(A){return t(o,A)},createURL:S,encodeLocation(A){let M=S(A);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:y,replace:v,go(A){return u.go(A)}};return k}function lS(e,t=!1){let a="http://localhost";typeof window<"u"&&(a=window.location.origin!=="null"?window.location.origin:window.location.href),Ze(a,"No window.location.(origin|href) available to create URL");let i=typeof e=="string"?e:Io(e);return i=i.replace(/ $/,"%20"),!t&&i.startsWith("//")&&(i=a+i),new URL(i,a)}function Nv(e,t,a="/"){return cS(e,t,a,!1)}function cS(e,t,a,i){let o=typeof t=="string"?us(t):t,l=La(o.pathname||"/",a);if(l==null)return null;let u=Bv(e);uS(u);let p=null;for(let f=0;p==null&&f<u.length;++f){let g=wS(l);p=yS(u[f],g,i)}return p}function Bv(e,t=[],a=[],i="",o=!1){let l=(u,p,f=o,g)=>{let m={relativePath:g===void 0?u.path||"":g,caseSensitive:u.caseSensitive===!0,childrenIndex:p,route:u};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(i)&&f)return;Ze(m.relativePath.startsWith(i),`Absolute route path "${m.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(i.length)}let x=Ra([i,m.relativePath]),y=a.concat(m);u.children&&u.children.length>0&&(Ze(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Bv(u.children,t,y,x,f)),!(u.path==null&&!u.index)&&t.push({path:x,score:bS(x,u.index),routesMeta:y})};return e.forEach((u,p)=>{var f;if(u.path===""||!((f=u.path)!=null&&f.includes("?")))l(u,p);else for(let g of _v(u.path))l(u,p,!0,g)}),t}function _v(e){let t=e.split("/");if(t.length===0)return[];let[a,...i]=t,o=a.endsWith("?"),l=a.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let u=_v(i.join("/")),p=[];return p.push(...u.map(f=>f===""?l:[l,f].join("/"))),o&&p.push(...u),p.map(f=>e.startsWith("/")&&f===""?"/":f)}function uS(e){e.sort((t,a)=>t.score!==a.score?a.score-t.score:xS(t.routesMeta.map(i=>i.childrenIndex),a.routesMeta.map(i=>i.childrenIndex)))}var dS=/^:[\w-]+$/,fS=3,pS=2,hS=1,gS=10,mS=-2,Lb=e=>e==="*";function bS(e,t){let a=e.split("/"),i=a.length;return a.some(Lb)&&(i+=mS),t&&(i+=pS),a.filter(o=>!Lb(o)).reduce((o,l)=>o+(dS.test(l)?fS:l===""?hS:gS),i)}function xS(e,t){return e.length===t.length&&e.slice(0,-1).every((i,o)=>i===t[o])?e[e.length-1]-t[t.length-1]:0}function yS(e,t,a=!1){let{routesMeta:i}=e,o={},l="/",u=[];for(let p=0;p<i.length;++p){let f=i[p],g=p===i.length-1,m=l==="/"?t:t.slice(l.length)||"/",x=pu({path:f.relativePath,caseSensitive:f.caseSensitive,end:g},m),y=f.route;if(!x&&g&&a&&!i[i.length-1].route.index&&(x=pu({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},m)),!x)return null;Object.assign(o,x.params),u.push({params:o,pathname:Ra([l,x.pathname]),pathnameBase:jS(Ra([l,x.pathnameBase])),route:y}),x.pathnameBase!=="/"&&(l=Ra([l,x.pathnameBase]))}return u}function pu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,i]=vS(e.path,e.caseSensitive,e.end),o=t.match(a);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:i.reduce((g,{paramName:m,isOptional:x},y)=>{if(m==="*"){let S=p[y]||"";u=l.slice(0,l.length-S.length).replace(/(.)\/+$/,"$1")}const v=p[y];return x&&!v?g[m]=void 0:g[m]=(v||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:u,pattern:e}}function vS(e,t=!1,a=!0){Nn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,p,f)=>(i.push({paramName:p,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(i.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),i]}function wS(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Nn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function La(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,i=e.charAt(a);return i&&i!=="/"?null:e.slice(a)||"/"}var SS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function kS(e,t="/"){let{pathname:a,search:i="",hash:o=""}=typeof e=="string"?us(e):e,l;return a?(a=a.replace(/\/\/+/g,"/"),a.startsWith("/")?l=Ob(a.substring(1),"/"):l=Ob(a,t)):l=t,{pathname:l,search:CS(i),hash:AS(o)}}function Ob(e,t){let a=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?a.length>1&&a.pop():o!=="."&&a.push(o)}),a.length>1?a.join("/"):"/"}function jp(e,t,a,i){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function TS(e){return e.filter((t,a)=>a===0||t.route.path&&t.route.path.length>0)}function bg(e){let t=TS(e);return t.map((a,i)=>i===t.length-1?a.pathname:a.pathnameBase)}function xg(e,t,a,i=!1){let o;typeof e=="string"?o=us(e):(o={...e},Ze(!o.pathname||!o.pathname.includes("?"),jp("?","pathname","search",o)),Ze(!o.pathname||!o.pathname.includes("#"),jp("#","pathname","hash",o)),Ze(!o.search||!o.search.includes("#"),jp("#","search","hash",o)));let l=e===""||o.pathname==="",u=l?"/":o.pathname,p;if(u==null)p=a;else{let x=t.length-1;if(!i&&u.startsWith("..")){let y=u.split("/");for(;y[0]==="..";)y.shift(),x-=1;o.pathname=y.join("/")}p=x>=0?t[x]:"/"}let f=kS(o,p),g=u&&u!=="/"&&u.endsWith("/"),m=(l||u===".")&&a.endsWith("/");return!f.pathname.endsWith("/")&&(g||m)&&(f.pathname+="/"),f}var Ra=e=>e.join("/").replace(/\/\/+/g,"/"),jS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),CS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,AS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,ES=class{constructor(e,t,a,i=!1){this.status=e,this.statusText=t||"",this.internal=i,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function MS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function zS(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var $v=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Hv(e,t){let a=e;if(typeof a!="string"||!SS.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let i=a,o=!1;if($v)try{let l=new URL(window.location.href),u=a.startsWith("//")?new URL(l.protocol+a):new URL(a),p=La(u.pathname,t);u.origin===l.origin&&p!=null?a=p+u.search+u.hash:o=!0}catch{Nn(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:o,to:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Uv=["POST","PUT","PATCH","DELETE"];new Set(Uv);var RS=["GET",...Uv];new Set(RS);var ds=j.createContext(null);ds.displayName="DataRouter";var Bu=j.createContext(null);Bu.displayName="DataRouterState";var LS=j.createContext(!1),Gv=j.createContext({isTransitioning:!1});Gv.displayName="ViewTransition";var OS=j.createContext(new Map);OS.displayName="Fetchers";var DS=j.createContext(null);DS.displayName="Await";var gn=j.createContext(null);gn.displayName="Navigation";var sl=j.createContext(null);sl.displayName="Location";var $n=j.createContext({outlet:null,matches:[],isDataRoute:!1});$n.displayName="Route";var yg=j.createContext(null);yg.displayName="RouteError";var Iv="REACT_ROUTER_ERROR",PS="REDIRECT",VS="ROUTE_ERROR_RESPONSE";function NS(e){if(e.startsWith(`${Iv}:${PS}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function BS(e){if(e.startsWith(`${Iv}:${VS}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new ES(t.status,t.statusText,t.data)}catch{}}function _S(e,{relative:t}={}){Ze(fs(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:i}=j.useContext(gn),{hash:o,pathname:l,search:u}=ol(e,{relative:t}),p=l;return a!=="/"&&(p=l==="/"?a:Ra([a,l])),i.createHref({pathname:p,search:u,hash:o})}function fs(){return j.useContext(sl)!=null}function Hn(){return Ze(fs(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(sl).location}var Fv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function qv(e){j.useContext(gn).static||j.useLayoutEffect(e)}function Kv(){let{isDataRoute:e}=j.useContext($n);return e?ek():$S()}function $S(){Ze(fs(),"useNavigate() may be used only in the context of a <Router> component.");let e=j.useContext(ds),{basename:t,navigator:a}=j.useContext(gn),{matches:i}=j.useContext($n),{pathname:o}=Hn(),l=JSON.stringify(bg(i)),u=j.useRef(!1);return qv(()=>{u.current=!0}),j.useCallback((f,g={})=>{if(Nn(u.current,Fv),!u.current)return;if(typeof f=="number"){a.go(f);return}let m=xg(f,JSON.parse(l),o,g.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Ra([t,m.pathname])),(g.replace?a.replace:a.push)(m,g.state,g)},[t,a,l,o,e])}var HS=j.createContext(null);function US(e){let t=j.useContext($n).outlet;return j.useMemo(()=>t&&j.createElement(HS.Provider,{value:e},t),[t,e])}function ol(e,{relative:t}={}){let{matches:a}=j.useContext($n),{pathname:i}=Hn(),o=JSON.stringify(bg(a));return j.useMemo(()=>xg(e,JSON.parse(o),i,t==="path"),[e,o,i,t])}function GS(e,t){return Yv(e,t)}function Yv(e,t,a,i,o){var z;Ze(fs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=j.useContext(gn),{matches:u}=j.useContext($n),p=u[u.length-1],f=p?p.params:{},g=p?p.pathname:"/",m=p?p.pathnameBase:"/",x=p&&p.route;{let C=x&&x.path||"";Wv(g,!x||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let y=Hn(),v;if(t){let C=typeof t=="string"?us(t):t;Ze(m==="/"||((z=C.pathname)==null?void 0:z.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${C.pathname}" was given in the \`location\` prop.`),v=C}else v=y;let S=v.pathname||"/",k=S;if(m!=="/"){let C=m.replace(/^\//,"").split("/");k="/"+S.replace(/^\//,"").split("/").slice(C.length).join("/")}let A=Nv(e,{pathname:k});Nn(x||A!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Nn(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=YS(A&&A.map(C=>Object.assign({},C,{params:Object.assign({},f,C.params),pathname:Ra([m,l.encodeLocation?l.encodeLocation(C.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?m:Ra([m,l.encodeLocation?l.encodeLocation(C.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathnameBase])})),u,a,i,o);return t&&M?j.createElement(sl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},M):M}function IS(){let e=JS(),t=MS(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:l},"ErrorBoundary")," or"," ",j.createElement("code",{style:l},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),a?j.createElement("pre",{style:o},a):null,u)}var FS=j.createElement(IS,null),Xv=class extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const a=BS(e.digest);a&&(e=a)}let t=e!==void 0?j.createElement($n.Provider,{value:this.props.routeContext},j.createElement(yg.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?j.createElement(qS,{error:e},t):t}};Xv.contextType=LS;var Cp=new WeakMap;function qS({children:e,error:t}){let{basename:a}=j.useContext(gn);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let i=NS(t.digest);if(i){let o=Cp.get(t);if(o)throw o;let l=Hv(i.location,a);if($v&&!Cp.get(t))if(l.isExternal||i.reloadDocument)window.location.href=l.absoluteURL||l.to;else{const u=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:i.replace}));throw Cp.set(t,u),u}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l.absoluteURL||l.to}`})}}return e}function KS({routeContext:e,match:t,children:a}){let i=j.useContext(ds);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),j.createElement($n.Provider,{value:e},a)}function YS(e,t=[],a=null,i=null,o=null){if(e==null){if(!a)return null;if(a.errors)e=a.matches;else if(t.length===0&&!a.initialized&&a.matches.length>0)e=a.matches;else return null}let l=e,u=a==null?void 0:a.errors;if(u!=null){let m=l.findIndex(x=>x.route.id&&(u==null?void 0:u[x.route.id])!==void 0);Ze(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let p=!1,f=-1;if(a)for(let m=0;m<l.length;m++){let x=l[m];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(f=m),x.route.id){let{loaderData:y,errors:v}=a,S=x.route.loader&&!y.hasOwnProperty(x.route.id)&&(!v||v[x.route.id]===void 0);if(x.route.lazy||S){p=!0,f>=0?l=l.slice(0,f+1):l=[l[0]];break}}}let g=a&&i?(m,x)=>{var y,v;i(m,{location:a.location,params:((v=(y=a.matches)==null?void 0:y[0])==null?void 0:v.params)??{},unstable_pattern:zS(a.matches),errorInfo:x})}:void 0;return l.reduceRight((m,x,y)=>{let v,S=!1,k=null,A=null;a&&(v=u&&x.route.id?u[x.route.id]:void 0,k=x.route.errorElement||FS,p&&(f<0&&y===0?(Wv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,A=null):f===y&&(S=!0,A=x.route.hydrateFallbackElement||null)));let M=t.concat(l.slice(0,y+1)),z=()=>{let C;return v?C=k:S?C=A:x.route.Component?C=j.createElement(x.route.Component,null):x.route.element?C=x.route.element:C=m,j.createElement(KS,{match:x,routeContext:{outlet:m,matches:M,isDataRoute:a!=null},children:C})};return a&&(x.route.ErrorBoundary||x.route.errorElement||y===0)?j.createElement(Xv,{location:a.location,revalidation:a.revalidation,component:k,error:v,children:z(),routeContext:{outlet:null,matches:M,isDataRoute:!0},onError:g}):z()},null)}function vg(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function XS(e){let t=j.useContext(ds);return Ze(t,vg(e)),t}function WS(e){let t=j.useContext(Bu);return Ze(t,vg(e)),t}function QS(e){let t=j.useContext($n);return Ze(t,vg(e)),t}function wg(e){let t=QS(e),a=t.matches[t.matches.length-1];return Ze(a.route.id,`${e} can only be used on routes that contain a unique "id"`),a.route.id}function ZS(){return wg("useRouteId")}function JS(){var i;let e=j.useContext(yg),t=WS("useRouteError"),a=wg("useRouteError");return e!==void 0?e:(i=t.errors)==null?void 0:i[a]}function ek(){let{router:e}=XS("useNavigate"),t=wg("useNavigate"),a=j.useRef(!1);return qv(()=>{a.current=!0}),j.useCallback(async(o,l={})=>{Nn(a.current,Fv),a.current&&(typeof o=="number"?await e.navigate(o):await e.navigate(o,{fromRouteId:t,...l}))},[e,t])}var Db={};function Wv(e,t,a){!t&&!Db[e]&&(Db[e]=!0,Nn(!1,a))}j.memo(tk);function tk({routes:e,future:t,state:a,onError:i}){return Yv(e,void 0,a,i,t)}function nk({to:e,replace:t,state:a,relative:i}){Ze(fs(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=j.useContext(gn);Nn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=j.useContext($n),{pathname:u}=Hn(),p=Kv(),f=xg(e,bg(l),u,i==="path"),g=JSON.stringify(f);return j.useEffect(()=>{p(JSON.parse(g),{replace:t,state:a,relative:i})},[p,g,i,t,a]),null}function ak(e){return US(e.context)}function kt(e){Ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ik({basename:e="/",children:t=null,location:a,navigationType:i="POP",navigator:o,static:l=!1,unstable_useTransitions:u}){Ze(!fs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=e.replace(/^\/*/,"/"),f=j.useMemo(()=>({basename:p,navigator:o,static:l,unstable_useTransitions:u,future:{}}),[p,o,l,u]);typeof a=="string"&&(a=us(a));let{pathname:g="/",search:m="",hash:x="",state:y=null,key:v="default"}=a,S=j.useMemo(()=>{let k=La(g,p);return k==null?null:{location:{pathname:k,search:m,hash:x,state:y,key:v},navigationType:i}},[p,g,m,x,y,v,i]);return Nn(S!=null,`<Router basename="${p}"> is not able to match the URL "${g}${m}${x}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:j.createElement(gn.Provider,{value:f},j.createElement(sl.Provider,{children:t,value:S}))}function rk({children:e,location:t}){return GS(kh(e),t)}function kh(e,t=[]){let a=[];return j.Children.forEach(e,(i,o)=>{if(!j.isValidElement(i))return;let l=[...t,o];if(i.type===j.Fragment){a.push.apply(a,kh(i.props.children,l));return}Ze(i.type===kt,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ze(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=kh(i.props.children,l)),a.push(u)}),a}var Xc="get",Wc="application/x-www-form-urlencoded";function _u(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function sk(e){return _u(e)&&e.tagName.toLowerCase()==="button"}function ok(e){return _u(e)&&e.tagName.toLowerCase()==="form"}function lk(e){return _u(e)&&e.tagName.toLowerCase()==="input"}function ck(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function uk(e,t){return e.button===0&&(!t||t==="_self")&&!ck(e)}var zc=null;function dk(){if(zc===null)try{new FormData(document.createElement("form"),0),zc=!1}catch{zc=!0}return zc}var fk=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ap(e){return e!=null&&!fk.has(e)?(Nn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wc}"`),null):e}function pk(e,t){let a,i,o,l,u;if(ok(e)){let p=e.getAttribute("action");i=p?La(p,t):null,a=e.getAttribute("method")||Xc,o=Ap(e.getAttribute("enctype"))||Wc,l=new FormData(e)}else if(sk(e)||lk(e)&&(e.type==="submit"||e.type==="image")){let p=e.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=e.getAttribute("formaction")||p.getAttribute("action");if(i=f?La(f,t):null,a=e.getAttribute("formmethod")||p.getAttribute("method")||Xc,o=Ap(e.getAttribute("formenctype"))||Ap(p.getAttribute("enctype"))||Wc,l=new FormData(p,e),!dk()){let{name:g,type:m,value:x}=e;if(m==="image"){let y=g?`${g}.`:"";l.append(`${y}x`,"0"),l.append(`${y}y`,"0")}else g&&l.append(g,x)}}else{if(_u(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=Xc,i=null,o=Wc,u=e}return l&&o==="text/plain"&&(u=l,l=void 0),{action:i,method:a.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Sg(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function hk(e,t,a,i){let o=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${i}`:o.pathname=`${o.pathname}.${i}`:o.pathname==="/"?o.pathname=`_root.${i}`:t&&La(o.pathname,t)==="/"?o.pathname=`${t.replace(/\/$/,"")}/_root.${i}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${i}`,o}async function gk(e,t){if(e.id in t)return t[e.id];try{let a=await import(e.module);return t[e.id]=a,a}catch(a){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function mk(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function bk(e,t,a){let i=await Promise.all(e.map(async o=>{let l=t.routes[o.route.id];if(l){let u=await gk(l,a);return u.links?u.links():[]}return[]}));return wk(i.flat(1).filter(mk).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Pb(e,t,a,i,o,l){let u=(f,g)=>a[g]?f.route.id!==a[g].route.id:!0,p=(f,g)=>{var m;return a[g].pathname!==f.pathname||((m=a[g].route.path)==null?void 0:m.endsWith("*"))&&a[g].params["*"]!==f.params["*"]};return l==="assets"?t.filter((f,g)=>u(f,g)||p(f,g)):l==="data"?t.filter((f,g)=>{var x;let m=i.routes[f.route.id];if(!m||!m.hasLoader)return!1;if(u(f,g)||p(f,g))return!0;if(f.route.shouldRevalidate){let y=f.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((x=a[0])==null?void 0:x.params)||{},nextUrl:new URL(e,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function xk(e,t,{includeHydrateFallback:a}={}){return yk(e.map(i=>{let o=t.routes[i.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),a&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function yk(e){return[...new Set(e)]}function vk(e){let t={},a=Object.keys(e).sort();for(let i of a)t[i]=e[i];return t}function wk(e,t){let a=new Set;return new Set(t),e.reduce((i,o)=>{let l=JSON.stringify(vk(o));return a.has(l)||(a.add(l),i.push({key:l,link:o})),i},[])}function Qv(){let e=j.useContext(ds);return Sg(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Sk(){let e=j.useContext(Bu);return Sg(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var kg=j.createContext(void 0);kg.displayName="FrameworkContext";function Zv(){let e=j.useContext(kg);return Sg(e,"You must render this element inside a <HydratedRouter> element"),e}function kk(e,t){let a=j.useContext(kg),[i,o]=j.useState(!1),[l,u]=j.useState(!1),{onFocus:p,onBlur:f,onMouseEnter:g,onMouseLeave:m,onTouchStart:x}=t,y=j.useRef(null);j.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let k=M=>{M.forEach(z=>{u(z.isIntersecting)})},A=new IntersectionObserver(k,{threshold:.5});return y.current&&A.observe(y.current),()=>{A.disconnect()}}},[e]),j.useEffect(()=>{if(i){let k=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(k)}}},[i]);let v=()=>{o(!0)},S=()=>{o(!1),u(!1)};return a?e!=="intent"?[l,y,{}]:[l,y,{onFocus:yo(p,v),onBlur:yo(f,S),onMouseEnter:yo(g,v),onMouseLeave:yo(m,S),onTouchStart:yo(x,v)}]:[!1,y,{}]}function yo(e,t){return a=>{e&&e(a),a.defaultPrevented||t(a)}}function Tk({page:e,...t}){let{router:a}=Qv(),i=j.useMemo(()=>Nv(a.routes,e,a.basename),[a.routes,e,a.basename]);return i?j.createElement(Ck,{page:e,matches:i,...t}):null}function jk(e){let{manifest:t,routeModules:a}=Zv(),[i,o]=j.useState([]);return j.useEffect(()=>{let l=!1;return bk(e,t,a).then(u=>{l||o(u)}),()=>{l=!0}},[e,t,a]),i}function Ck({page:e,matches:t,...a}){let i=Hn(),{future:o,manifest:l,routeModules:u}=Zv(),{basename:p}=Qv(),{loaderData:f,matches:g}=Sk(),m=j.useMemo(()=>Pb(e,t,g,l,i,"data"),[e,t,g,l,i]),x=j.useMemo(()=>Pb(e,t,g,l,i,"assets"),[e,t,g,l,i]),y=j.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let k=new Set,A=!1;if(t.forEach(z=>{var H;let C=l.routes[z.route.id];!C||!C.hasLoader||(!m.some(E=>E.route.id===z.route.id)&&z.route.id in f&&((H=u[z.route.id])!=null&&H.shouldRevalidate)||C.hasClientLoader?A=!0:k.add(z.route.id))}),k.size===0)return[];let M=hk(e,p,o.unstable_trailingSlashAwareDataRequests,"data");return A&&k.size>0&&M.searchParams.set("_routes",t.filter(z=>k.has(z.route.id)).map(z=>z.route.id).join(",")),[M.pathname+M.search]},[p,o.unstable_trailingSlashAwareDataRequests,f,i,l,m,t,e,u]),v=j.useMemo(()=>xk(x,l),[x,l]),S=jk(x);return j.createElement(j.Fragment,null,y.map(k=>j.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...a})),v.map(k=>j.createElement("link",{key:k,rel:"modulepreload",href:k,...a})),S.map(({key:k,link:A})=>j.createElement("link",{key:k,nonce:a.nonce,...A,crossOrigin:A.crossOrigin??a.crossOrigin})))}function Ak(...e){return t=>{e.forEach(a=>{typeof a=="function"?a(t):a!=null&&(a.current=t)})}}var Ek=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ek&&(window.__reactRouterVersion="7.13.0")}catch{}function Mk({basename:e,children:t,unstable_useTransitions:a,window:i}){let o=j.useRef();o.current==null&&(o.current=rS({window:i,v5Compat:!0}));let l=o.current,[u,p]=j.useState({action:l.action,location:l.location}),f=j.useCallback(g=>{a===!1?p(g):j.startTransition(()=>p(g))},[a]);return j.useLayoutEffect(()=>l.listen(f),[l,f]),j.createElement(ik,{basename:e,children:t,location:u.location,navigationType:u.action,navigator:l,unstable_useTransitions:a})}var Jv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Tg=j.forwardRef(function({onClick:t,discover:a="render",prefetch:i="none",relative:o,reloadDocument:l,replace:u,state:p,target:f,to:g,preventScrollReset:m,viewTransition:x,unstable_defaultShouldRevalidate:y,...v},S){let{basename:k,unstable_useTransitions:A}=j.useContext(gn),M=typeof g=="string"&&Jv.test(g),z=Hv(g,k);g=z.to;let C=_S(g,{relative:o}),[H,E,V]=kk(i,v),N=Lk(g,{replace:u,state:p,target:f,preventScrollReset:m,relative:o,viewTransition:x,unstable_defaultShouldRevalidate:y,unstable_useTransitions:A});function O(J){t&&t(J),J.defaultPrevented||N(J)}let X=j.createElement("a",{...v,...V,href:z.absoluteURL||C,onClick:z.isExternal||l?t:O,ref:Ak(S,E),target:f,"data-discover":!M&&a==="render"?"true":void 0});return H&&!M?j.createElement(j.Fragment,null,X,j.createElement(Tk,{page:C})):X});Tg.displayName="Link";var la=j.forwardRef(function({"aria-current":t="page",caseSensitive:a=!1,className:i="",end:o=!1,style:l,to:u,viewTransition:p,children:f,...g},m){let x=ol(u,{relative:g.relative}),y=Hn(),v=j.useContext(Bu),{navigator:S,basename:k}=j.useContext(gn),A=v!=null&&Nk(x)&&p===!0,M=S.encodeLocation?S.encodeLocation(x).pathname:x.pathname,z=y.pathname,C=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;a||(z=z.toLowerCase(),C=C?C.toLowerCase():null,M=M.toLowerCase()),C&&k&&(C=La(C,k)||C);const H=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let E=z===M||!o&&z.startsWith(M)&&z.charAt(H)==="/",V=C!=null&&(C===M||!o&&C.startsWith(M)&&C.charAt(M.length)==="/"),N={isActive:E,isPending:V,isTransitioning:A},O=E?t:void 0,X;typeof i=="function"?X=i(N):X=[i,E?"active":null,V?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let J=typeof l=="function"?l(N):l;return j.createElement(Tg,{...g,"aria-current":O,className:X,ref:m,style:J,to:u,viewTransition:p},typeof f=="function"?f(N):f)});la.displayName="NavLink";var zk=j.forwardRef(({discover:e="render",fetcherKey:t,navigate:a,reloadDocument:i,replace:o,state:l,method:u=Xc,action:p,onSubmit:f,relative:g,preventScrollReset:m,viewTransition:x,unstable_defaultShouldRevalidate:y,...v},S)=>{let{unstable_useTransitions:k}=j.useContext(gn),A=Pk(),M=Vk(p,{relative:g}),z=u.toLowerCase()==="get"?"get":"post",C=typeof p=="string"&&Jv.test(p),H=E=>{if(f&&f(E),E.defaultPrevented)return;E.preventDefault();let V=E.nativeEvent.submitter,N=(V==null?void 0:V.getAttribute("formmethod"))||u,O=()=>A(V||E.currentTarget,{fetcherKey:t,method:N,navigate:a,replace:o,state:l,relative:g,preventScrollReset:m,viewTransition:x,unstable_defaultShouldRevalidate:y});k&&a!==!1?j.startTransition(()=>O()):O()};return j.createElement("form",{ref:S,method:z,action:M,onSubmit:i?f:H,...v,"data-discover":!C&&e==="render"?"true":void 0})});zk.displayName="Form";function Rk(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function e5(e){let t=j.useContext(ds);return Ze(t,Rk(e)),t}function Lk(e,{target:t,replace:a,state:i,preventScrollReset:o,relative:l,viewTransition:u,unstable_defaultShouldRevalidate:p,unstable_useTransitions:f}={}){let g=Kv(),m=Hn(),x=ol(e,{relative:l});return j.useCallback(y=>{if(uk(y,t)){y.preventDefault();let v=a!==void 0?a:Io(m)===Io(x),S=()=>g(e,{replace:v,state:i,preventScrollReset:o,relative:l,viewTransition:u,unstable_defaultShouldRevalidate:p});f?j.startTransition(()=>S()):S()}},[m,g,x,a,i,t,e,o,l,u,p,f])}var Ok=0,Dk=()=>`__${String(++Ok)}__`;function Pk(){let{router:e}=e5("useSubmit"),{basename:t}=j.useContext(gn),a=ZS(),i=e.fetch,o=e.navigate;return j.useCallback(async(l,u={})=>{let{action:p,method:f,encType:g,formData:m,body:x}=pk(l,t);if(u.navigate===!1){let y=u.fetcherKey||Dk();await i(y,a,u.action||p,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:m,body:x,formMethod:u.method||f,formEncType:u.encType||g,flushSync:u.flushSync})}else await o(u.action||p,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:m,body:x,formMethod:u.method||f,formEncType:u.encType||g,replace:u.replace,state:u.state,fromRouteId:a,flushSync:u.flushSync,viewTransition:u.viewTransition})},[i,o,t,a])}function Vk(e,{relative:t}={}){let{basename:a}=j.useContext(gn),i=j.useContext($n);Ze(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...ol(e||".",{relative:t})},u=Hn();if(e==null){l.search=u.search;let p=new URLSearchParams(l.search),f=p.getAll("index");if(f.some(m=>m==="")){p.delete("index"),f.filter(x=>x).forEach(x=>p.append("index",x));let m=p.toString();l.search=m?`?${m}`:""}}return(!e||e===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(l.pathname=l.pathname==="/"?a:Ra([a,l.pathname])),Io(l)}function Nk(e,{relative:t}={}){let a=j.useContext(Gv);Ze(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=e5("useViewTransitionState"),o=ol(e,{relative:t});if(!a.isTransitioning)return!1;let l=La(a.currentLocation.pathname,i)||a.currentLocation.pathname,u=La(a.nextLocation.pathname,i)||a.nextLocation.pathname;return pu(o.pathname,u)!=null||pu(o.pathname,l)!=null}var Bk=Vv();function _k(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function $k(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Hk=function(){function e(a){var i=this;this._insertTag=function(o){var l;i.tags.length===0?i.insertionPoint?l=i.insertionPoint.nextSibling:i.prepend?l=i.container.firstChild:l=i.before:l=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(o,l),i.tags.push(o)},this.isSpeedy=a.speedy===void 0?!0:a.speedy,this.tags=[],this.ctr=0,this.nonce=a.nonce,this.key=a.key,this.container=a.container,this.prepend=a.prepend,this.insertionPoint=a.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(i){i.forEach(this._insertTag)},t.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag($k(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=_k(o);try{l.insertRule(i,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(i));this.ctr++},t.flush=function(){this.tags.forEach(function(i){var o;return(o=i.parentNode)==null?void 0:o.removeChild(i)}),this.tags=[],this.ctr=0},e}(),Vt="-ms-",hu="-moz-",Re="-webkit-",t5="comm",jg="rule",Cg="decl",Uk="@import",n5="@keyframes",Gk="@layer",Ik=Math.abs,$u=String.fromCharCode,Fk=Object.assign;function qk(e,t){return zt(e,0)^45?(((t<<2^zt(e,0))<<2^zt(e,1))<<2^zt(e,2))<<2^zt(e,3):0}function a5(e){return e.trim()}function Kk(e,t){return(e=t.exec(e))?e[0]:e}function Le(e,t,a){return e.replace(t,a)}function Th(e,t){return e.indexOf(t)}function zt(e,t){return e.charCodeAt(t)|0}function Fo(e,t,a){return e.slice(t,a)}function ea(e){return e.length}function Ag(e){return e.length}function Rc(e,t){return t.push(e),e}function Yk(e,t){return e.map(t).join("")}var Hu=1,es=1,i5=0,Jt=0,ft=0,ps="";function Uu(e,t,a,i,o,l,u){return{value:e,root:t,parent:a,type:i,props:o,children:l,line:Hu,column:es,length:u,return:""}}function vo(e,t){return Fk(Uu("",null,null,"",null,null,0),e,{length:-e.length},t)}function Xk(){return ft}function Wk(){return ft=Jt>0?zt(ps,--Jt):0,es--,ft===10&&(es=1,Hu--),ft}function pn(){return ft=Jt<i5?zt(ps,Jt++):0,es++,ft===10&&(es=1,Hu++),ft}function ia(){return zt(ps,Jt)}function Qc(){return Jt}function ll(e,t){return Fo(ps,e,t)}function qo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function r5(e){return Hu=es=1,i5=ea(ps=e),Jt=0,[]}function s5(e){return ps="",e}function Zc(e){return a5(ll(Jt-1,jh(e===91?e+2:e===40?e+1:e)))}function Qk(e){for(;(ft=ia())&&ft<33;)pn();return qo(e)>2||qo(ft)>3?"":" "}function Zk(e,t){for(;--t&&pn()&&!(ft<48||ft>102||ft>57&&ft<65||ft>70&&ft<97););return ll(e,Qc()+(t<6&&ia()==32&&pn()==32))}function jh(e){for(;pn();)switch(ft){case e:return Jt;case 34:case 39:e!==34&&e!==39&&jh(ft);break;case 40:e===41&&jh(e);break;case 92:pn();break}return Jt}function Jk(e,t){for(;pn()&&e+ft!==57;)if(e+ft===84&&ia()===47)break;return"/*"+ll(t,Jt-1)+"*"+$u(e===47?e:pn())}function e9(e){for(;!qo(ia());)pn();return ll(e,Jt)}function t9(e){return s5(Jc("",null,null,null,[""],e=r5(e),0,[0],e))}function Jc(e,t,a,i,o,l,u,p,f){for(var g=0,m=0,x=u,y=0,v=0,S=0,k=1,A=1,M=1,z=0,C="",H=o,E=l,V=i,N=C;A;)switch(S=z,z=pn()){case 40:if(S!=108&&zt(N,x-1)==58){Th(N+=Le(Zc(z),"&","&\f"),"&\f")!=-1&&(M=-1);break}case 34:case 39:case 91:N+=Zc(z);break;case 9:case 10:case 13:case 32:N+=Qk(S);break;case 92:N+=Zk(Qc()-1,7);continue;case 47:switch(ia()){case 42:case 47:Rc(n9(Jk(pn(),Qc()),t,a),f);break;default:N+="/"}break;case 123*k:p[g++]=ea(N)*M;case 125*k:case 59:case 0:switch(z){case 0:case 125:A=0;case 59+m:M==-1&&(N=Le(N,/\f/g,"")),v>0&&ea(N)-x&&Rc(v>32?Nb(N+";",i,a,x-1):Nb(Le(N," ","")+";",i,a,x-2),f);break;case 59:N+=";";default:if(Rc(V=Vb(N,t,a,g,m,o,p,C,H=[],E=[],x),l),z===123)if(m===0)Jc(N,t,V,V,H,l,x,p,E);else switch(y===99&&zt(N,3)===110?100:y){case 100:case 108:case 109:case 115:Jc(e,V,V,i&&Rc(Vb(e,V,V,0,0,o,p,C,o,H=[],x),E),o,E,x,p,i?H:E);break;default:Jc(N,V,V,V,[""],E,0,p,E)}}g=m=v=0,k=M=1,C=N="",x=u;break;case 58:x=1+ea(N),v=S;default:if(k<1){if(z==123)--k;else if(z==125&&k++==0&&Wk()==125)continue}switch(N+=$u(z),z*k){case 38:M=m>0?1:(N+="\f",-1);break;case 44:p[g++]=(ea(N)-1)*M,M=1;break;case 64:ia()===45&&(N+=Zc(pn())),y=ia(),m=x=ea(C=N+=e9(Qc())),z++;break;case 45:S===45&&ea(N)==2&&(k=0)}}return l}function Vb(e,t,a,i,o,l,u,p,f,g,m){for(var x=o-1,y=o===0?l:[""],v=Ag(y),S=0,k=0,A=0;S<i;++S)for(var M=0,z=Fo(e,x+1,x=Ik(k=u[S])),C=e;M<v;++M)(C=a5(k>0?y[M]+" "+z:Le(z,/&\f/g,y[M])))&&(f[A++]=C);return Uu(e,t,a,o===0?jg:p,f,g,m)}function n9(e,t,a){return Uu(e,t,a,t5,$u(Xk()),Fo(e,2,-2),0)}function Nb(e,t,a,i){return Uu(e,t,a,Cg,Fo(e,0,i),Fo(e,i+1,-1),i)}function Qr(e,t){for(var a="",i=Ag(e),o=0;o<i;o++)a+=t(e[o],o,e,t)||"";return a}function a9(e,t,a,i){switch(e.type){case Gk:if(e.children.length)break;case Uk:case Cg:return e.return=e.return||e.value;case t5:return"";case n5:return e.return=e.value+"{"+Qr(e.children,i)+"}";case jg:e.value=e.props.join(",")}return ea(a=Qr(e.children,i))?e.return=e.value+"{"+a+"}":""}function i9(e){var t=Ag(e);return function(a,i,o,l){for(var u="",p=0;p<t;p++)u+=e[p](a,i,o,l)||"";return u}}function r9(e){return function(t){t.root||(t=t.return)&&e(t)}}function s9(e){var t=Object.create(null);return function(a){return t[a]===void 0&&(t[a]=e(a)),t[a]}}var o9=function(t,a,i){for(var o=0,l=0;o=l,l=ia(),o===38&&l===12&&(a[i]=1),!qo(l);)pn();return ll(t,Jt)},l9=function(t,a){var i=-1,o=44;do switch(qo(o)){case 0:o===38&&ia()===12&&(a[i]=1),t[i]+=o9(Jt-1,a,i);break;case 2:t[i]+=Zc(o);break;case 4:if(o===44){t[++i]=ia()===58?"&\f":"",a[i]=t[i].length;break}default:t[i]+=$u(o)}while(o=pn());return t},c9=function(t,a){return s5(l9(r5(t),a))},Bb=new WeakMap,u9=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var a=t.value,i=t.parent,o=t.column===i.column&&t.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(t.props.length===1&&a.charCodeAt(0)!==58&&!Bb.get(i))&&!o){Bb.set(t,!0);for(var l=[],u=c9(a,l),p=i.props,f=0,g=0;f<u.length;f++)for(var m=0;m<p.length;m++,g++)t.props[g]=l[f]?u[f].replace(/&\f/g,p[m]):p[m]+" "+u[f]}}},d9=function(t){if(t.type==="decl"){var a=t.value;a.charCodeAt(0)===108&&a.charCodeAt(2)===98&&(t.return="",t.value="")}};function o5(e,t){switch(qk(e,t)){case 5103:return Re+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Re+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Re+e+hu+e+Vt+e+e;case 6828:case 4268:return Re+e+Vt+e+e;case 6165:return Re+e+Vt+"flex-"+e+e;case 5187:return Re+e+Le(e,/(\w+).+(:[^]+)/,Re+"box-$1$2"+Vt+"flex-$1$2")+e;case 5443:return Re+e+Vt+"flex-item-"+Le(e,/flex-|-self/,"")+e;case 4675:return Re+e+Vt+"flex-line-pack"+Le(e,/align-content|flex-|-self/,"")+e;case 5548:return Re+e+Vt+Le(e,"shrink","negative")+e;case 5292:return Re+e+Vt+Le(e,"basis","preferred-size")+e;case 6060:return Re+"box-"+Le(e,"-grow","")+Re+e+Vt+Le(e,"grow","positive")+e;case 4554:return Re+Le(e,/([^-])(transform)/g,"$1"+Re+"$2")+e;case 6187:return Le(Le(Le(e,/(zoom-|grab)/,Re+"$1"),/(image-set)/,Re+"$1"),e,"")+e;case 5495:case 3959:return Le(e,/(image-set\([^]*)/,Re+"$1$`$1");case 4968:return Le(Le(e,/(.+:)(flex-)?(.*)/,Re+"box-pack:$3"+Vt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Re+e+e;case 4095:case 3583:case 4068:case 2532:return Le(e,/(.+)-inline(.+)/,Re+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ea(e)-1-t>6)switch(zt(e,t+1)){case 109:if(zt(e,t+4)!==45)break;case 102:return Le(e,/(.+:)(.+)-([^]+)/,"$1"+Re+"$2-$3$1"+hu+(zt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Th(e,"stretch")?o5(Le(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(zt(e,t+1)!==115)break;case 6444:switch(zt(e,ea(e)-3-(~Th(e,"!important")&&10))){case 107:return Le(e,":",":"+Re)+e;case 101:return Le(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Re+(zt(e,14)===45?"inline-":"")+"box$3$1"+Re+"$2$3$1"+Vt+"$2box$3")+e}break;case 5936:switch(zt(e,t+11)){case 114:return Re+e+Vt+Le(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Re+e+Vt+Le(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Re+e+Vt+Le(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Re+e+Vt+e+e}return e}var f9=function(t,a,i,o){if(t.length>-1&&!t.return)switch(t.type){case Cg:t.return=o5(t.value,t.length);break;case n5:return Qr([vo(t,{value:Le(t.value,"@","@"+Re)})],o);case jg:if(t.length)return Yk(t.props,function(l){switch(Kk(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Qr([vo(t,{props:[Le(l,/:(read-\w+)/,":"+hu+"$1")]})],o);case"::placeholder":return Qr([vo(t,{props:[Le(l,/:(plac\w+)/,":"+Re+"input-$1")]}),vo(t,{props:[Le(l,/:(plac\w+)/,":"+hu+"$1")]}),vo(t,{props:[Le(l,/:(plac\w+)/,Vt+"input-$1")]})],o)}return""})}},p9=[f9],h9=function(t){var a=t.key;if(a==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(k){var A=k.getAttribute("data-emotion");A.indexOf(" ")!==-1&&(document.head.appendChild(k),k.setAttribute("data-s",""))})}var o=t.stylisPlugins||p9,l={},u,p=[];u=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+a+' "]'),function(k){for(var A=k.getAttribute("data-emotion").split(" "),M=1;M<A.length;M++)l[A[M]]=!0;p.push(k)});var f,g=[u9,d9];{var m,x=[a9,r9(function(k){m.insert(k)})],y=i9(g.concat(o,x)),v=function(A){return Qr(t9(A),y)};f=function(A,M,z,C){m=z,v(A?A+"{"+M.styles+"}":M.styles),C&&(S.inserted[M.name]=!0)}}var S={key:a,sheet:new Hk({key:a,container:u,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:f};return S.sheet.hydrate(p),S},Ep={exports:{}},De={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _b;function g9(){if(_b)return De;_b=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,a=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,p=e?Symbol.for("react.context"):60110,f=e?Symbol.for("react.async_mode"):60111,g=e?Symbol.for("react.concurrent_mode"):60111,m=e?Symbol.for("react.forward_ref"):60112,x=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,v=e?Symbol.for("react.memo"):60115,S=e?Symbol.for("react.lazy"):60116,k=e?Symbol.for("react.block"):60121,A=e?Symbol.for("react.fundamental"):60117,M=e?Symbol.for("react.responder"):60118,z=e?Symbol.for("react.scope"):60119;function C(E){if(typeof E=="object"&&E!==null){var V=E.$$typeof;switch(V){case t:switch(E=E.type,E){case f:case g:case i:case l:case o:case x:return E;default:switch(E=E&&E.$$typeof,E){case p:case m:case S:case v:case u:return E;default:return V}}case a:return V}}}function H(E){return C(E)===g}return De.AsyncMode=f,De.ConcurrentMode=g,De.ContextConsumer=p,De.ContextProvider=u,De.Element=t,De.ForwardRef=m,De.Fragment=i,De.Lazy=S,De.Memo=v,De.Portal=a,De.Profiler=l,De.StrictMode=o,De.Suspense=x,De.isAsyncMode=function(E){return H(E)||C(E)===f},De.isConcurrentMode=H,De.isContextConsumer=function(E){return C(E)===p},De.isContextProvider=function(E){return C(E)===u},De.isElement=function(E){return typeof E=="object"&&E!==null&&E.$$typeof===t},De.isForwardRef=function(E){return C(E)===m},De.isFragment=function(E){return C(E)===i},De.isLazy=function(E){return C(E)===S},De.isMemo=function(E){return C(E)===v},De.isPortal=function(E){return C(E)===a},De.isProfiler=function(E){return C(E)===l},De.isStrictMode=function(E){return C(E)===o},De.isSuspense=function(E){return C(E)===x},De.isValidElementType=function(E){return typeof E=="string"||typeof E=="function"||E===i||E===g||E===l||E===o||E===x||E===y||typeof E=="object"&&E!==null&&(E.$$typeof===S||E.$$typeof===v||E.$$typeof===u||E.$$typeof===p||E.$$typeof===m||E.$$typeof===A||E.$$typeof===M||E.$$typeof===z||E.$$typeof===k)},De.typeOf=C,De}var $b;function m9(){return $b||($b=1,Ep.exports=g9()),Ep.exports}var Mp,Hb;function b9(){if(Hb)return Mp;Hb=1;var e=m9(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[e.ForwardRef]=i,l[e.Memo]=o;function u(S){return e.isMemo(S)?o:l[S.$$typeof]||t}var p=Object.defineProperty,f=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,x=Object.getPrototypeOf,y=Object.prototype;function v(S,k,A){if(typeof k!="string"){if(y){var M=x(k);M&&M!==y&&v(S,M,A)}var z=f(k);g&&(z=z.concat(g(k)));for(var C=u(S),H=u(k),E=0;E<z.length;++E){var V=z[E];if(!a[V]&&!(A&&A[V])&&!(H&&H[V])&&!(C&&C[V])){var N=m(k,V);try{p(S,V,N)}catch{}}}}return S}return Mp=v,Mp}b9();var x9=!0;function y9(e,t,a){var i="";return a.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):o&&(i+=o+" ")}),i}var l5=function(t,a,i){var o=t.key+"-"+a.name;(i===!1||x9===!1)&&t.registered[o]===void 0&&(t.registered[o]=a.styles)},c5=function(t,a,i){l5(t,a,i);var o=t.key+"-"+a.name;if(t.inserted[a.name]===void 0){var l=a;do t.insert(a===l?"."+o:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function v9(e){for(var t=0,a,i=0,o=e.length;o>=4;++i,o-=4)a=e.charCodeAt(i)&255|(e.charCodeAt(++i)&255)<<8|(e.charCodeAt(++i)&255)<<16|(e.charCodeAt(++i)&255)<<24,a=(a&65535)*1540483477+((a>>>16)*59797<<16),a^=a>>>24,t=(a&65535)*1540483477+((a>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(i+2)&255)<<16;case 2:t^=(e.charCodeAt(i+1)&255)<<8;case 1:t^=e.charCodeAt(i)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var w9={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},S9=/[A-Z]|^ms/g,k9=/_EMO_([^_]+?)_([^]*?)_EMO_/g,u5=function(t){return t.charCodeAt(1)===45},Ub=function(t){return t!=null&&typeof t!="boolean"},zp=s9(function(e){return u5(e)?e:e.replace(S9,"-$&").toLowerCase()}),Gb=function(t,a){switch(t){case"animation":case"animationName":if(typeof a=="string")return a.replace(k9,function(i,o,l){return ta={name:o,styles:l,next:ta},o})}return w9[t]!==1&&!u5(t)&&typeof a=="number"&&a!==0?a+"px":a};function Ko(e,t,a){if(a==null)return"";var i=a;if(i.__emotion_styles!==void 0)return i;switch(typeof a){case"boolean":return"";case"object":{var o=a;if(o.anim===1)return ta={name:o.name,styles:o.styles,next:ta},o.name;var l=a;if(l.styles!==void 0){var u=l.next;if(u!==void 0)for(;u!==void 0;)ta={name:u.name,styles:u.styles,next:ta},u=u.next;var p=l.styles+";";return p}return T9(e,t,a)}case"function":{if(e!==void 0){var f=ta,g=a(e);return ta=f,Ko(e,t,g)}break}}var m=a;return m}function T9(e,t,a){var i="";if(Array.isArray(a))for(var o=0;o<a.length;o++)i+=Ko(e,t,a[o])+";";else for(var l in a){var u=a[l];if(typeof u!="object"){var p=u;Ub(p)&&(i+=zp(l)+":"+Gb(l,p)+";")}else if(Array.isArray(u)&&typeof u[0]=="string"&&t==null)for(var f=0;f<u.length;f++)Ub(u[f])&&(i+=zp(l)+":"+Gb(l,u[f])+";");else{var g=Ko(e,t,u);switch(l){case"animation":case"animationName":{i+=zp(l)+":"+g+";";break}default:i+=l+"{"+g+"}"}}}return i}var Ib=/label:\s*([^\s;{]+)\s*(;|$)/g,ta;function Eg(e,t,a){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,o="";ta=void 0;var l=e[0];if(l==null||l.raw===void 0)i=!1,o+=Ko(a,t,l);else{var u=l;o+=u[0]}for(var p=1;p<e.length;p++)if(o+=Ko(a,t,e[p]),i){var f=l;o+=f[p]}Ib.lastIndex=0;for(var g="",m;(m=Ib.exec(o))!==null;)g+="-"+m[1];var x=v9(o)+g;return{name:x,styles:o,next:ta}}var j9=function(t){return t()},d5=Mb.useInsertionEffect?Mb.useInsertionEffect:!1,C9=d5||j9,Fb=d5||j.useLayoutEffect,f5=j.createContext(typeof HTMLElement<"u"?h9({key:"css"}):null);f5.Provider;var p5=function(t){return j.forwardRef(function(a,i){var o=j.useContext(f5);return t(a,o,i)})},h5=j.createContext({}),Mg={}.hasOwnProperty,Ch="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",A9=function(t,a){var i={};for(var o in a)Mg.call(a,o)&&(i[o]=a[o]);return i[Ch]=t,i},E9=function(t){var a=t.cache,i=t.serialized,o=t.isStringTag;return l5(a,i,o),C9(function(){return c5(a,i,o)}),null},M9=p5(function(e,t,a){var i=e.css;typeof i=="string"&&t.registered[i]!==void 0&&(i=t.registered[i]);var o=e[Ch],l=[i],u="";typeof e.className=="string"?u=y9(t.registered,l,e.className):e.className!=null&&(u=e.className+" ");var p=Eg(l,void 0,j.useContext(h5));u+=t.key+"-"+p.name;var f={};for(var g in e)Mg.call(e,g)&&g!=="css"&&g!==Ch&&(f[g]=e[g]);return f.className=u,a&&(f.ref=a),j.createElement(j.Fragment,null,j.createElement(E9,{cache:t,serialized:p,isStringTag:typeof o=="string"}),j.createElement(o,f))}),z9=M9,qb=function(t,a){var i=arguments;if(a==null||!Mg.call(a,"css"))return j.createElement.apply(void 0,i);var o=i.length,l=new Array(o);l[0]=z9,l[1]=A9(t,a);for(var u=2;u<o;u++)l[u]=i[u];return j.createElement.apply(null,l)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(qb||(qb={}));var R9=p5(function(e,t){var a=e.styles,i=Eg([a],void 0,j.useContext(h5)),o=j.useRef();return Fb(function(){var l=t.key+"-global",u=new t.sheet.constructor({key:l,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),p=!1,f=document.querySelector('style[data-emotion="'+l+" "+i.name+'"]');return t.sheet.tags.length&&(u.before=t.sheet.tags[0]),f!==null&&(p=!0,f.setAttribute("data-emotion",l),u.hydrate([f])),o.current=[u,p],function(){u.flush()}},[t]),Fb(function(){var l=o.current,u=l[0],p=l[1];if(p){l[1]=!1;return}if(i.next!==void 0&&c5(t,i.next,!0),u.tags.length){var f=u.tags[u.tags.length-1].nextElementSibling;u.before=f,u.flush()}t.insert("",i,u,!1)},[t,i.name]),null});function L9(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return Eg(t)}const O9="/assets/Geist-Regular-BCrLS6HJ.ttf",D9="/assets/Geist-Medium-C6X8vKEc.ttf",P9="/assets/BebasNeue-Regular-D2CONTwO.ttf",V9="/assets/Inter_24pt-Regular-BPx6xqqj.ttf",N9=L9`
  /* ========== FONTS ========== */
  @font-face {
    font-family: "Geist";
    src: url(${O9}) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Geist";
    src: url(${D9}) format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Bebas Neue";
    src: url(${P9}) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Inter";
    src: url(${V9}) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* ========== TOKENS (під твою космічну золоту картинку) ========== */
  :root {
    /* Base */
    --bg: #07070b;
    --bg-2: #0b0b12;

    --text: rgba(255, 255, 255, 0.92);
    --muted: rgba(255, 255, 255, 0.68);
    --faint: rgba(255, 255, 255, 0.45);

    /* Gold / Ember accents */
    --gold-1: #b8860b;
    --gold-2: #f6d365;
    --gold-3: #d4af37;
    --ember: #ffb14a;
    --ember-2: #ff7a1a;

    /* Ukrainian blue (sparingly) */
    --blue: #2563eb;

    /* Surfaces */
    --glass: rgba(10, 10, 16, 0.56);
    --glass-2: rgba(10, 10, 16, 0.38);
    --border: rgba(246, 211, 101, 0.16); /* золота рамка */
    --border-2: rgba(255, 255, 255, 0.08);

    /* Shadows */
    --shadow: 0 18px 60px rgba(0, 0, 0, 0.55);
    --glow-gold: 0 0 26px rgba(246, 211, 101, 0.22);
    --glow-ember: 0 0 30px rgba(255, 177, 74, 0.18);

    /* Fonts */
    --font-family: "Noto Sans", "Noto Sans Arabic", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
    --second-family: "Noto Sans", "Noto Sans Arabic", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
    --third-family: "Noto Sans", "Noto Sans Arabic", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;

    /* Safe-area */
    --safe-area-inset-top: env(safe-area-inset-top, 0px);
    --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
    --safe-area-inset-left: env(safe-area-inset-left, 0px);
    --safe-area-inset-right: env(safe-area-inset-right, 0px);
  }

  /* ========== RESET / BASE ========== */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    word-wrap: break-word;
  }

  html {
    height: -webkit-fill-available;
    scroll-behavior: smooth;
    overflow-x: hidden;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }

  body {
    font-family: var(--font-family);
    color: var(--text);
    min-height: 100vh;
    min-height: -webkit-fill-available;
    overflow-x: hidden;

    /* Якщо ти НЕ ставиш фон через ParticlesBackground wrapper,
       розкоментуй і використовуй фон прямо тут: */
    /* background:
      radial-gradient(900px 420px at 80% 18%, rgba(255, 177, 74, 0.14), transparent 60%),
      radial-gradient(900px 420px at 20% 86%, rgba(246, 211, 101, 0.10), transparent 58%),
      linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 100%),
      url("/bg-space.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed; */

    background-color: var(--bg); /* безпечний дефолт */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;

    padding: var(--safe-area-inset-top) var(--safe-area-inset-right)
      var(--safe-area-inset-bottom) var(--safe-area-inset-left);
  }

  /* Легкий “космічний” оверлей для читабельності + теплі підсвіти */
  body::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    background:
      radial-gradient(700px 320px at 78% 22%, rgba(255, 177, 74, 0.10), transparent 60%),
      radial-gradient(700px 320px at 22% 82%, rgba(246, 211, 101, 0.08), transparent 58%),
      radial-gradient(900px 600px at 50% 50%, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.62));
  }

  #root,
  main,
  .container {
    position: relative;
    z-index: 1;
    width: 100%;
    overflow-x: clip;
  }

  #root { position: relative; z-index: 1; }
  body.modal-open {
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100%;
  }

  /* ========== TYPO ========== */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--second-family);
    font-weight: 700;
    letter-spacing: 0.01em;
    color: var(--text);
  }

  /* Клас для золотого заголовку (коли треба прям “преміум”) */
  .gold-gradient {
    background: linear-gradient(90deg, var(--gold-1), var(--gold-2), var(--gold-3));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    filter: drop-shadow(0 8px 26px rgba(246, 211, 101, 0.12));
  }

  p,
  span,
  li {
    color: var(--text);
  }

  /* ========== LINKS / BUTTONS ========== */
  a {
    text-decoration: none;
    color: rgba(246, 211, 101, 0.92); /* золото */
    transition: color 200ms ease, filter 200ms ease;
  }
  a:hover {
    color: rgba(255, 177, 74, 0.95); /* ember */
    filter: drop-shadow(var(--glow-ember));
  }

  button {
    cursor: pointer;
    appearance: none;
    background: transparent;
    border: 0;
    border-radius: 0;
    transition: transform 220ms ease, filter 220ms ease, opacity 220ms ease;
  }
  button:active {
    transform: translateY(1px);
  }

  /* ========== MEDIA / FORMS ========== */
  img {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: cover;
    -webkit-user-drag: none;
  }

  ul,
  li {
    list-style: none;
  }

  input,
  textarea,
  button,
  select {
    font: inherit;
    font-size: 16px;
    color: var(--text);
    border-radius: 0;
    appearance: none;
    -webkit-appearance: none;
  }

  input,
  textarea {
    background: var(--glass-2);
    border: 1px solid var(--border-2);
    outline: none;
  }
  input:focus,
  textarea:focus {
    border-color: var(--border);
    box-shadow: var(--glow-gold);
  }

  ::selection {
    background: rgba(246, 211, 101, 0.24);
    color: var(--text);
  }

  /* Якщо хочеш показувати скролбар мінімально красиво */
  /* body::-webkit-scrollbar { width: 10px; }
  body::-webkit-scrollbar-thumb { background: rgba(246,211,101,0.18); border-radius: 10px; }
  body::-webkit-scrollbar-track { background: rgba(0,0,0,0.25); } */

  @supports (-webkit-touch-callout: none) {
    body {
      height: -webkit-fill-available;
    }
  }
`,zg=j.createContext({});function hs(e){const t=j.useRef(null);return t.current===null&&(t.current=e()),t.current}const Rg=typeof window<"u",Gu=Rg?j.useLayoutEffect:j.useEffect,Iu=j.createContext(null);function Lg(e,t){e.indexOf(t)===-1&&e.push(t)}function Og(e,t){const a=e.indexOf(t);a>-1&&e.splice(a,1)}const ca=(e,t,a)=>a>t?t:a<e?e:a;let Yo=()=>{};const Oa={},g5=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function m5(e){return typeof e=="object"&&e!==null}const b5=e=>/^0[^.\s]+$/u.test(e);function Dg(e){let t;return()=>(t===void 0&&(t=e()),t)}const Qt=e=>e,B9=(e,t)=>a=>t(e(a)),cl=(...e)=>e.reduce(B9),ts=(e,t,a)=>{const i=t-e;return i===0?1:(a-e)/i};class Pg{constructor(){this.subscriptions=[]}add(t){return Lg(this.subscriptions,t),()=>Og(this.subscriptions,t)}notify(t,a,i){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,a,i);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(t,a,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ra=e=>e*1e3,sa=e=>e/1e3;function Vg(e,t){return t?e*(1e3/t):0}const x5=(e,t,a)=>(((1-3*a+3*t)*e+(3*a-6*t))*e+3*t)*e,_9=1e-7,$9=12;function H9(e,t,a,i,o){let l,u,p=0;do u=t+(a-t)/2,l=x5(u,i,o)-e,l>0?a=u:t=u;while(Math.abs(l)>_9&&++p<$9);return u}function ul(e,t,a,i){if(e===t&&a===i)return Qt;const o=l=>H9(l,0,1,e,a);return l=>l===0||l===1?l:x5(o(l),t,i)}const y5=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,v5=e=>t=>1-e(1-t),Fu=ul(.33,1.53,.69,.99),Ng=v5(Fu),w5=y5(Ng),S5=e=>(e*=2)<1?.5*Ng(e):.5*(2-Math.pow(2,-10*(e-1))),Bg=e=>1-Math.sin(Math.acos(e)),k5=v5(Bg),T5=y5(Bg),U9=ul(.42,0,1,1),hn=ul(0,0,.58,1),_g=ul(.42,0,.58,1),G9=e=>Array.isArray(e)&&typeof e[0]!="number",j5=e=>Array.isArray(e)&&typeof e[0]=="number",I9={linear:Qt,easeIn:U9,easeInOut:_g,easeOut:hn,circIn:Bg,circInOut:T5,circOut:k5,backIn:Ng,backInOut:w5,backOut:Fu,anticipate:S5},F9=e=>typeof e=="string",Kb=e=>{if(j5(e)){Yo(e.length===4);const[t,a,i,o]=e;return ul(t,a,i,o)}else if(F9(e))return I9[e];return e},Lc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function q9(e,t){let a=new Set,i=new Set,o=!1,l=!1;const u=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function f(m){u.has(m)&&(g.schedule(m),e()),m(p)}const g={schedule:(m,x=!1,y=!1)=>{const S=y&&o?a:i;return x&&u.add(m),S.has(m)||S.add(m),m},cancel:m=>{i.delete(m),u.delete(m)},process:m=>{if(p=m,o){l=!0;return}o=!0,[a,i]=[i,a],a.forEach(f),a.clear(),o=!1,l&&(l=!1,g.process(m))}};return g}const K9=40;function C5(e,t){let a=!1,i=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>a=!0,u=Lc.reduce((C,H)=>(C[H]=q9(l),C),{}),{setup:p,read:f,resolveKeyframes:g,preUpdate:m,update:x,preRender:y,render:v,postRender:S}=u,k=()=>{const C=Oa.useManualTiming?o.timestamp:performance.now();a=!1,Oa.useManualTiming||(o.delta=i?1e3/60:Math.max(Math.min(C-o.timestamp,K9),1)),o.timestamp=C,o.isProcessing=!0,p.process(o),f.process(o),g.process(o),m.process(o),x.process(o),y.process(o),v.process(o),S.process(o),o.isProcessing=!1,a&&t&&(i=!1,e(k))},A=()=>{a=!0,i=!0,o.isProcessing||e(k)};return{schedule:Lc.reduce((C,H)=>{const E=u[H];return C[H]=(V,N=!1,O=!1)=>(a||A(),E.schedule(V,N,O)),C},{}),cancel:C=>{for(let H=0;H<Lc.length;H++)u[Lc[H]].cancel(C)},state:o,steps:u}}const{schedule:Be,cancel:Bn,state:Tt,steps:Rp}=C5(typeof requestAnimationFrame<"u"?requestAnimationFrame:Qt,!0);let eu;function Y9(){eu=void 0}const Xt={now:()=>(eu===void 0&&Xt.set(Tt.isProcessing||Oa.useManualTiming?Tt.timestamp:performance.now()),eu),set:e=>{eu=e,queueMicrotask(Y9)}},A5=e=>t=>typeof t=="string"&&t.startsWith(e),$g=A5("--"),X9=A5("var(--"),Hg=e=>X9(e)?W9.test(e.split("/*")[0].trim()):!1,W9=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,gs={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Xo={...gs,transform:e=>ca(0,1,e)},Oc={...gs,default:1},Oo=e=>Math.round(e*1e5)/1e5,Ug=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Q9(e){return e==null}const Z9=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Gg=(e,t)=>a=>!!(typeof a=="string"&&Z9.test(a)&&a.startsWith(e)||t&&!Q9(a)&&Object.prototype.hasOwnProperty.call(a,t)),E5=(e,t,a)=>i=>{if(typeof i!="string")return i;const[o,l,u,p]=i.match(Ug);return{[e]:parseFloat(o),[t]:parseFloat(l),[a]:parseFloat(u),alpha:p!==void 0?parseFloat(p):1}},J9=e=>ca(0,255,e),Lp={...gs,transform:e=>Math.round(J9(e))},Bi={test:Gg("rgb","red"),parse:E5("red","green","blue"),transform:({red:e,green:t,blue:a,alpha:i=1})=>"rgba("+Lp.transform(e)+", "+Lp.transform(t)+", "+Lp.transform(a)+", "+Oo(Xo.transform(i))+")"};function eT(e){let t="",a="",i="",o="";return e.length>5?(t=e.substring(1,3),a=e.substring(3,5),i=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),a=e.substring(2,3),i=e.substring(3,4),o=e.substring(4,5),t+=t,a+=a,i+=i,o+=o),{red:parseInt(t,16),green:parseInt(a,16),blue:parseInt(i,16),alpha:o?parseInt(o,16)/255:1}}const Ah={test:Gg("#"),parse:eT,transform:Bi.transform},dl=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),si=dl("deg"),oa=dl("%"),ge=dl("px"),tT=dl("vh"),nT=dl("vw"),Yb={...oa,parse:e=>oa.parse(e)/100,transform:e=>oa.transform(e*100)},Gr={test:Gg("hsl","hue"),parse:E5("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:a,alpha:i=1})=>"hsla("+Math.round(e)+", "+oa.transform(Oo(t))+", "+oa.transform(Oo(a))+", "+Oo(Xo.transform(i))+")"},ut={test:e=>Bi.test(e)||Ah.test(e)||Gr.test(e),parse:e=>Bi.test(e)?Bi.parse(e):Gr.test(e)?Gr.parse(e):Ah.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Bi.transform(e):Gr.transform(e),getAnimatableNone:e=>{const t=ut.parse(e);return t.alpha=0,ut.transform(t)}},aT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function iT(e){var t,a;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Ug))==null?void 0:t.length)||0)+(((a=e.match(aT))==null?void 0:a.length)||0)>0}const M5="number",z5="color",rT="var",sT="var(",Xb="${}",oT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Wo(e){const t=e.toString(),a=[],i={color:[],number:[],var:[]},o=[];let l=0;const p=t.replace(oT,f=>(ut.test(f)?(i.color.push(l),o.push(z5),a.push(ut.parse(f))):f.startsWith(sT)?(i.var.push(l),o.push(rT),a.push(f)):(i.number.push(l),o.push(M5),a.push(parseFloat(f))),++l,Xb)).split(Xb);return{values:a,split:p,indexes:i,types:o}}function R5(e){return Wo(e).values}function L5(e){const{split:t,types:a}=Wo(e),i=t.length;return o=>{let l="";for(let u=0;u<i;u++)if(l+=t[u],o[u]!==void 0){const p=a[u];p===M5?l+=Oo(o[u]):p===z5?l+=ut.transform(o[u]):l+=o[u]}return l}}const lT=e=>typeof e=="number"?0:ut.test(e)?ut.getAnimatableNone(e):e;function cT(e){const t=R5(e);return L5(e)(t.map(lT))}const di={test:iT,parse:R5,createTransformer:L5,getAnimatableNone:cT};function Op(e,t,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?e+(t-e)*6*a:a<1/2?t:a<2/3?e+(t-e)*(2/3-a)*6:e}function uT({hue:e,saturation:t,lightness:a,alpha:i}){e/=360,t/=100,a/=100;let o=0,l=0,u=0;if(!t)o=l=u=a;else{const p=a<.5?a*(1+t):a+t-a*t,f=2*a-p;o=Op(f,p,e+1/3),l=Op(f,p,e),u=Op(f,p,e-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:i}}function gu(e,t){return a=>a>0?t:e}const et=(e,t,a)=>e+(t-e)*a,Dp=(e,t,a)=>{const i=e*e,o=a*(t*t-i)+i;return o<0?0:Math.sqrt(o)},dT=[Ah,Bi,Gr],fT=e=>dT.find(t=>t.test(e));function Wb(e){const t=fT(e);if(!t)return!1;let a=t.parse(e);return t===Gr&&(a=uT(a)),a}const Qb=(e,t)=>{const a=Wb(e),i=Wb(t);if(!a||!i)return gu(e,t);const o={...a};return l=>(o.red=Dp(a.red,i.red,l),o.green=Dp(a.green,i.green,l),o.blue=Dp(a.blue,i.blue,l),o.alpha=et(a.alpha,i.alpha,l),Bi.transform(o))},Eh=new Set(["none","hidden"]);function pT(e,t){return Eh.has(e)?a=>a<=0?e:t:a=>a>=1?t:e}function hT(e,t){return a=>et(e,t,a)}function Ig(e){return typeof e=="number"?hT:typeof e=="string"?Hg(e)?gu:ut.test(e)?Qb:bT:Array.isArray(e)?O5:typeof e=="object"?ut.test(e)?Qb:gT:gu}function O5(e,t){const a=[...e],i=a.length,o=e.map((l,u)=>Ig(l)(l,t[u]));return l=>{for(let u=0;u<i;u++)a[u]=o[u](l);return a}}function gT(e,t){const a={...e,...t},i={};for(const o in a)e[o]!==void 0&&t[o]!==void 0&&(i[o]=Ig(e[o])(e[o],t[o]));return o=>{for(const l in i)a[l]=i[l](o);return a}}function mT(e,t){const a=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const l=t.types[o],u=e.indexes[l][i[l]],p=e.values[u]??0;a[o]=p,i[l]++}return a}const bT=(e,t)=>{const a=di.createTransformer(t),i=Wo(e),o=Wo(t);return i.indexes.var.length===o.indexes.var.length&&i.indexes.color.length===o.indexes.color.length&&i.indexes.number.length>=o.indexes.number.length?Eh.has(e)&&!o.values.length||Eh.has(t)&&!i.values.length?pT(e,t):cl(O5(mT(i,o),o.values),a):gu(e,t)};function D5(e,t,a){return typeof e=="number"&&typeof t=="number"&&typeof a=="number"?et(e,t,a):Ig(e)(e,t)}const xT=e=>{const t=({timestamp:a})=>e(a);return{start:(a=!0)=>Be.update(t,a),stop:()=>Bn(t),now:()=>Tt.isProcessing?Tt.timestamp:Xt.now()}},P5=(e,t,a=10)=>{let i="";const o=Math.max(Math.round(t/a),2);for(let l=0;l<o;l++)i+=Math.round(e(l/(o-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},mu=2e4;function Fg(e){let t=0;const a=50;let i=e.next(t);for(;!i.done&&t<mu;)t+=a,i=e.next(t);return t>=mu?1/0:t}function yT(e,t=100,a){const i=a({...e,keyframes:[0,t]}),o=Math.min(Fg(i),mu);return{type:"keyframes",ease:l=>i.next(o*l).value/t,duration:sa(o)}}const vT=5;function V5(e,t,a){const i=Math.max(t-vT,0);return Vg(a-e(i),t-i)}const it={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Pp=.001;function wT({duration:e=it.duration,bounce:t=it.bounce,velocity:a=it.velocity,mass:i=it.mass}){let o,l,u=1-t;u=ca(it.minDamping,it.maxDamping,u),e=ca(it.minDuration,it.maxDuration,sa(e)),u<1?(o=g=>{const m=g*u,x=m*e,y=m-a,v=Mh(g,u),S=Math.exp(-x);return Pp-y/v*S},l=g=>{const x=g*u*e,y=x*a+a,v=Math.pow(u,2)*Math.pow(g,2)*e,S=Math.exp(-x),k=Mh(Math.pow(g,2),u);return(-o(g)+Pp>0?-1:1)*((y-v)*S)/k}):(o=g=>{const m=Math.exp(-g*e),x=(g-a)*e+1;return-Pp+m*x},l=g=>{const m=Math.exp(-g*e),x=(a-g)*(e*e);return m*x});const p=5/e,f=kT(o,l,p);if(e=ra(e),isNaN(f))return{stiffness:it.stiffness,damping:it.damping,duration:e};{const g=Math.pow(f,2)*i;return{stiffness:g,damping:u*2*Math.sqrt(i*g),duration:e}}}const ST=12;function kT(e,t,a){let i=a;for(let o=1;o<ST;o++)i=i-e(i)/t(i);return i}function Mh(e,t){return e*Math.sqrt(1-t*t)}const TT=["duration","bounce"],jT=["stiffness","damping","mass"];function Zb(e,t){return t.some(a=>e[a]!==void 0)}function CT(e){let t={velocity:it.velocity,stiffness:it.stiffness,damping:it.damping,mass:it.mass,isResolvedFromDuration:!1,...e};if(!Zb(e,jT)&&Zb(e,TT))if(e.visualDuration){const a=e.visualDuration,i=2*Math.PI/(a*1.2),o=i*i,l=2*ca(.05,1,1-(e.bounce||0))*Math.sqrt(o);t={...t,mass:it.mass,stiffness:o,damping:l}}else{const a=wT(e);t={...t,...a,mass:it.mass},t.isResolvedFromDuration=!0}return t}function bu(e=it.visualDuration,t=it.bounce){const a=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:i,restDelta:o}=a;const l=a.keyframes[0],u=a.keyframes[a.keyframes.length-1],p={done:!1,value:l},{stiffness:f,damping:g,mass:m,duration:x,velocity:y,isResolvedFromDuration:v}=CT({...a,velocity:-sa(a.velocity||0)}),S=y||0,k=g/(2*Math.sqrt(f*m)),A=u-l,M=sa(Math.sqrt(f/m)),z=Math.abs(A)<5;i||(i=z?it.restSpeed.granular:it.restSpeed.default),o||(o=z?it.restDelta.granular:it.restDelta.default);let C;if(k<1){const E=Mh(M,k);C=V=>{const N=Math.exp(-k*M*V);return u-N*((S+k*M*A)/E*Math.sin(E*V)+A*Math.cos(E*V))}}else if(k===1)C=E=>u-Math.exp(-M*E)*(A+(S+M*A)*E);else{const E=M*Math.sqrt(k*k-1);C=V=>{const N=Math.exp(-k*M*V),O=Math.min(E*V,300);return u-N*((S+k*M*A)*Math.sinh(O)+E*A*Math.cosh(O))/E}}const H={calculatedDuration:v&&x||null,next:E=>{const V=C(E);if(v)p.done=E>=x;else{let N=E===0?S:0;k<1&&(N=E===0?ra(S):V5(C,E,V));const O=Math.abs(N)<=i,X=Math.abs(u-V)<=o;p.done=O&&X}return p.value=p.done?u:V,p},toString:()=>{const E=Math.min(Fg(H),mu),V=P5(N=>H.next(E*N).value,E,30);return E+"ms "+V},toTransition:()=>{}};return H}bu.applyToOptions=e=>{const t=yT(e,100,bu);return e.ease=t.ease,e.duration=ra(t.duration),e.type="keyframes",e};function zh({keyframes:e,velocity:t=0,power:a=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:p,max:f,restDelta:g=.5,restSpeed:m}){const x=e[0],y={done:!1,value:x},v=O=>p!==void 0&&O<p||f!==void 0&&O>f,S=O=>p===void 0?f:f===void 0||Math.abs(p-O)<Math.abs(f-O)?p:f;let k=a*t;const A=x+k,M=u===void 0?A:u(A);M!==A&&(k=M-x);const z=O=>-k*Math.exp(-O/i),C=O=>M+z(O),H=O=>{const X=z(O),J=C(O);y.done=Math.abs(X)<=g,y.value=y.done?M:J};let E,V;const N=O=>{v(y.value)&&(E=O,V=bu({keyframes:[y.value,S(y.value)],velocity:V5(C,O,y.value),damping:o,stiffness:l,restDelta:g,restSpeed:m}))};return N(0),{calculatedDuration:null,next:O=>{let X=!1;return!V&&E===void 0&&(X=!0,H(O),N(O)),E!==void 0&&O>=E?V.next(O-E):(!X&&H(O),y)}}}function AT(e,t,a){const i=[],o=a||Oa.mix||D5,l=e.length-1;for(let u=0;u<l;u++){let p=o(e[u],e[u+1]);if(t){const f=Array.isArray(t)?t[u]||Qt:t;p=cl(f,p)}i.push(p)}return i}function qg(e,t,{clamp:a=!0,ease:i,mixer:o}={}){const l=e.length;if(Yo(l===t.length),l===1)return()=>t[0];if(l===2&&t[0]===t[1])return()=>t[1];const u=e[0]===e[1];e[0]>e[l-1]&&(e=[...e].reverse(),t=[...t].reverse());const p=AT(t,i,o),f=p.length,g=m=>{if(u&&m<e[0])return t[0];let x=0;if(f>1)for(;x<e.length-2&&!(m<e[x+1]);x++);const y=ts(e[x],e[x+1],m);return p[x](y)};return a?m=>g(ca(e[0],e[l-1],m)):g}function ET(e,t){const a=e[e.length-1];for(let i=1;i<=t;i++){const o=ts(0,t,i);e.push(et(a,1,o))}}function N5(e){const t=[0];return ET(t,e.length-1),t}function MT(e,t){return e.map(a=>a*t)}function zT(e,t){return e.map(()=>t||_g).splice(0,e.length-1)}function Do({duration:e=300,keyframes:t,times:a,ease:i="easeInOut"}){const o=G9(i)?i.map(Kb):Kb(i),l={done:!1,value:t[0]},u=MT(a&&a.length===t.length?a:N5(t),e),p=qg(u,t,{ease:Array.isArray(o)?o:zT(t,o)});return{calculatedDuration:e,next:f=>(l.value=p(f),l.done=f>=e,l)}}const RT=e=>e!==null;function Kg(e,{repeat:t,repeatType:a="loop"},i,o=1){const l=e.filter(RT),p=o<0||t&&a!=="loop"&&t%2===1?0:l.length-1;return!p||i===void 0?l[p]:i}const LT={decay:zh,inertia:zh,tween:Do,keyframes:Do,spring:bu};function B5(e){typeof e.type=="string"&&(e.type=LT[e.type])}class Yg{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,a){return this.finished.then(t,a)}}const OT=e=>e/100;class Xg extends Yg{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var i,o;const{motionValue:a}=this.options;a&&a.updatedAt!==Xt.now()&&this.tick(Xt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(i=this.options).onStop)==null||o.call(i))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;B5(t);const{type:a=Do,repeat:i=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=t;let{keyframes:p}=t;const f=a||Do;f!==Do&&typeof p[0]!="number"&&(this.mixKeyframes=cl(OT,D5(p[0],p[1])),p=[0,100]);const g=f({...t,keyframes:p});l==="mirror"&&(this.mirroredGenerator=f({...t,keyframes:[...p].reverse(),velocity:-u})),g.calculatedDuration===null&&(g.calculatedDuration=Fg(g));const{calculatedDuration:m}=g;this.calculatedDuration=m,this.resolvedDuration=m+o,this.totalDuration=this.resolvedDuration*(i+1)-o,this.generator=g}updateTime(t){const a=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=a}tick(t,a=!1){const{generator:i,totalDuration:o,mixKeyframes:l,mirroredGenerator:u,resolvedDuration:p,calculatedDuration:f}=this;if(this.startTime===null)return i.next(0);const{delay:g=0,keyframes:m,repeat:x,repeatType:y,repeatDelay:v,type:S,onUpdate:k,finalKeyframe:A}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-o/this.speed,this.startTime)),a?this.currentTime=t:this.updateTime(t);const M=this.currentTime-g*(this.playbackSpeed>=0?1:-1),z=this.playbackSpeed>=0?M<0:M>o;this.currentTime=Math.max(M,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let C=this.currentTime,H=i;if(x){const O=Math.min(this.currentTime,o)/p;let X=Math.floor(O),J=O%1;!J&&O>=1&&(J=1),J===1&&X--,X=Math.min(X,x+1),!!(X%2)&&(y==="reverse"?(J=1-J,v&&(J-=v/p)):y==="mirror"&&(H=u)),C=ca(0,1,J)*p}const E=z?{done:!1,value:m[0]}:H.next(C);l&&(E.value=l(E.value));let{done:V}=E;!z&&f!==null&&(V=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const N=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&V);return N&&S!==zh&&(E.value=Kg(m,this.options,A,this.speed)),k&&k(E.value),N&&this.finish(),E}then(t,a){return this.finished.then(t,a)}get duration(){return sa(this.calculatedDuration)}get time(){return sa(this.currentTime)}set time(t){var a;t=ra(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(a=this.driver)==null||a.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Xt.now());const a=this.playbackSpeed!==t;this.playbackSpeed=t,a&&(this.time=sa(this.currentTime))}play(){var o,l;if(this.isStopped)return;const{driver:t=xT,startTime:a}=this.options;this.driver||(this.driver=t(u=>this.tick(u))),(l=(o=this.options).onPlay)==null||l.call(o);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=a??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Xt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,a;this.notifyFinished(),this.teardown(),this.state="finished",(a=(t=this.options).onComplete)==null||a.call(t)}cancel(){var t,a;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(a=(t=this.options).onCancel)==null||a.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var a;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(a=this.driver)==null||a.stop(),t.observe(this)}}function DT(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const _i=e=>e*180/Math.PI,Rh=e=>{const t=_i(Math.atan2(e[1],e[0]));return Lh(t)},PT={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Rh,rotateZ:Rh,skewX:e=>_i(Math.atan(e[1])),skewY:e=>_i(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Lh=e=>(e=e%360,e<0&&(e+=360),e),Jb=Rh,ex=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),tx=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),VT={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ex,scaleY:tx,scale:e=>(ex(e)+tx(e))/2,rotateX:e=>Lh(_i(Math.atan2(e[6],e[5]))),rotateY:e=>Lh(_i(Math.atan2(-e[2],e[0]))),rotateZ:Jb,rotate:Jb,skewX:e=>_i(Math.atan(e[4])),skewY:e=>_i(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Oh(e){return e.includes("scale")?1:0}function Dh(e,t){if(!e||e==="none")return Oh(t);const a=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,o;if(a)i=VT,o=a;else{const p=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=PT,o=p}if(!o)return Oh(t);const l=i[t],u=o[1].split(",").map(BT);return typeof l=="function"?l(u):u[l]}const NT=(e,t)=>{const{transform:a="none"}=getComputedStyle(e);return Dh(a,t)};function BT(e){return parseFloat(e.trim())}const ms=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],bs=new Set(ms),nx=e=>e===gs||e===ge,_T=new Set(["x","y","z"]),$T=ms.filter(e=>!_T.has(e));function HT(e){const t=[];return $T.forEach(a=>{const i=e.getValue(a);i!==void 0&&(t.push([a,i.get()]),i.set(a.startsWith("scale")?1:0))}),t}const Hi={width:({x:e},{paddingLeft:t="0",paddingRight:a="0"})=>e.max-e.min-parseFloat(t)-parseFloat(a),height:({y:e},{paddingTop:t="0",paddingBottom:a="0"})=>e.max-e.min-parseFloat(t)-parseFloat(a),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Dh(t,"x"),y:(e,{transform:t})=>Dh(t,"y")};Hi.translateX=Hi.x;Hi.translateY=Hi.y;const Ui=new Set;let Ph=!1,Vh=!1,Nh=!1;function _5(){if(Vh){const e=Array.from(Ui).filter(i=>i.needsMeasurement),t=new Set(e.map(i=>i.element)),a=new Map;t.forEach(i=>{const o=HT(i);o.length&&(a.set(i,o),i.render())}),e.forEach(i=>i.measureInitialState()),t.forEach(i=>{i.render();const o=a.get(i);o&&o.forEach(([l,u])=>{var p;(p=i.getValue(l))==null||p.set(u)})}),e.forEach(i=>i.measureEndState()),e.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Vh=!1,Ph=!1,Ui.forEach(e=>e.complete(Nh)),Ui.clear()}function $5(){Ui.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Vh=!0)})}function UT(){Nh=!0,$5(),_5(),Nh=!1}class Wg{constructor(t,a,i,o,l,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=a,this.name=i,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(Ui.add(this),Ph||(Ph=!0,Be.read($5),Be.resolveKeyframes(_5))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:a,element:i,motionValue:o}=this;if(t[0]===null){const l=o==null?void 0:o.get(),u=t[t.length-1];if(l!==void 0)t[0]=l;else if(i&&a){const p=i.readValue(a,u);p!=null&&(t[0]=p)}t[0]===void 0&&(t[0]=u),o&&l===void 0&&o.set(t[0])}DT(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),Ui.delete(this)}cancel(){this.state==="scheduled"&&(Ui.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const GT=e=>e.startsWith("--");function IT(e,t,a){GT(t)?e.style.setProperty(t,a):e.style[t]=a}const H5=Dg(()=>window.ScrollTimeline!==void 0),FT={};function qT(e,t){const a=Dg(e);return()=>FT[t]??a()}const U5=qT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ro=([e,t,a,i])=>`cubic-bezier(${e}, ${t}, ${a}, ${i})`,ax={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ro([0,.65,.55,1]),circOut:Ro([.55,0,1,.45]),backIn:Ro([.31,.01,.66,-.59]),backOut:Ro([.33,1.53,.69,.99])};function G5(e,t){if(e)return typeof e=="function"?U5()?P5(e,t):"ease-out":j5(e)?Ro(e):Array.isArray(e)?e.map(a=>G5(a,t)||ax.easeOut):ax[e]}function KT(e,t,a,{delay:i=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:p="easeOut",times:f}={},g=void 0){const m={[t]:a};f&&(m.offset=f);const x=G5(p,o);Array.isArray(x)&&(m.easing=x);const y={delay:i,duration:o,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"};return g&&(y.pseudoElement=g),e.animate(m,y)}function I5(e){return typeof e=="function"&&"applyToOptions"in e}function YT({type:e,...t}){return I5(e)&&U5()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class XT extends Yg{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:a,name:i,keyframes:o,pseudoElement:l,allowFlatten:u=!1,finalKeyframe:p,onComplete:f}=t;this.isPseudoElement=!!l,this.allowFlatten=u,this.options=t,Yo(typeof t.type!="string");const g=YT(t);this.animation=KT(a,i,o,g,l),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const m=Kg(o,this.options,p,this.speed);this.updateMotionValue?this.updateMotionValue(m):IT(a,i,m),this.animation.cancel()}f==null||f(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,a;(a=(t=this.animation).finish)==null||a.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,a;this.isPseudoElement||(a=(t=this.animation).commitStyles)==null||a.call(t)}get duration(){var a,i;const t=((i=(a=this.animation.effect)==null?void 0:a.getComputedTiming)==null?void 0:i.call(a).duration)||0;return sa(Number(t))}get time(){return sa(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=ra(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:a}){var i;return this.allowFlatten&&((i=this.animation.effect)==null||i.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&H5()?(this.animation.timeline=t,Qt):a(this)}}const F5={anticipate:S5,backInOut:w5,circInOut:T5};function WT(e){return e in F5}function QT(e){typeof e.ease=="string"&&WT(e.ease)&&(e.ease=F5[e.ease])}const ix=10;class ZT extends XT{constructor(t){QT(t),B5(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:a,onUpdate:i,onComplete:o,element:l,...u}=this.options;if(!a)return;if(t!==void 0){a.set(t);return}const p=new Xg({...u,autoplay:!1}),f=ra(this.finishedTime??this.time);a.setWithVelocity(p.sample(f-ix).value,p.sample(f).value,ix),p.stop()}}const rx=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(di.test(e)||e==="0")&&!e.startsWith("url("));function JT(e){const t=e[0];if(e.length===1)return!0;for(let a=0;a<e.length;a++)if(e[a]!==t)return!0}function ej(e,t,a,i){const o=e[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const l=e[e.length-1],u=rx(o,t),p=rx(l,t);return!u||!p?!1:JT(e)||(a==="spring"||I5(a))&&i}function Bh(e){e.duration=0,e.type}const tj=new Set(["opacity","clipPath","filter","transform"]),nj=Dg(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function aj(e){var m;const{motionValue:t,name:a,repeatDelay:i,repeatType:o,damping:l,type:u}=e;if(!(((m=t==null?void 0:t.owner)==null?void 0:m.current)instanceof HTMLElement))return!1;const{onUpdate:f,transformTemplate:g}=t.owner.getProps();return nj()&&a&&tj.has(a)&&(a!=="transform"||!g)&&!f&&!i&&o!=="mirror"&&l!==0&&u!=="inertia"}const ij=40;class rj extends Yg{constructor({autoplay:t=!0,delay:a=0,type:i="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",keyframes:p,name:f,motionValue:g,element:m,...x}){var S;super(),this.stop=()=>{var k,A;this._animation&&(this._animation.stop(),(k=this.stopTimeline)==null||k.call(this)),(A=this.keyframeResolver)==null||A.cancel()},this.createdAt=Xt.now();const y={autoplay:t,delay:a,type:i,repeat:o,repeatDelay:l,repeatType:u,name:f,motionValue:g,element:m,...x},v=(m==null?void 0:m.KeyframeResolver)||Wg;this.keyframeResolver=new v(p,(k,A,M)=>this.onKeyframesResolved(k,A,y,!M),f,g,m),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(t,a,i,o){this.keyframeResolver=void 0;const{name:l,type:u,velocity:p,delay:f,isHandoff:g,onUpdate:m}=i;this.resolvedAt=Xt.now(),ej(t,l,u,p)||((Oa.instantAnimations||!f)&&(m==null||m(Kg(t,i,a))),t[0]=t[t.length-1],Bh(i),i.repeat=0);const y={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>ij?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:a,...i,keyframes:t},v=!g&&aj(y)?new ZT({...y,element:y.motionValue.owner.current}):new Xg(y);v.finished.then(()=>this.notifyFinished()).catch(Qt),this.pendingTimeline&&(this.stopTimeline=v.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=v}get finished(){return this._animation?this.animation.finished:this._finished}then(t,a){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),UT()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const sj=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function oj(e){const t=sj.exec(e);if(!t)return[,];const[,a,i,o]=t;return[`--${a??i}`,o]}function q5(e,t,a=1){const[i,o]=oj(e);if(!i)return;const l=window.getComputedStyle(t).getPropertyValue(i);if(l){const u=l.trim();return g5(u)?parseFloat(u):u}return Hg(o)?q5(o,t,a+1):o}function Qg(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const K5=new Set(["width","height","top","left","right","bottom",...ms]),lj={test:e=>e==="auto",parse:e=>e},Y5=e=>t=>t.test(e),X5=[gs,ge,oa,si,nT,tT,lj],sx=e=>X5.find(Y5(e));function cj(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||b5(e):!0}const uj=new Set(["brightness","contrast","saturate","opacity"]);function dj(e){const[t,a]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[i]=a.match(Ug)||[];if(!i)return e;const o=a.replace(i,"");let l=uj.has(t)?1:0;return i!==a&&(l*=100),t+"("+l+o+")"}const fj=/\b([a-z-]*)\(.*?\)/gu,_h={...di,getAnimatableNone:e=>{const t=e.match(fj);return t?t.map(dj).join(" "):e}},ox={...gs,transform:Math.round},pj={rotate:si,rotateX:si,rotateY:si,rotateZ:si,scale:Oc,scaleX:Oc,scaleY:Oc,scaleZ:Oc,skew:si,skewX:si,skewY:si,distance:ge,translateX:ge,translateY:ge,translateZ:ge,x:ge,y:ge,z:ge,perspective:ge,transformPerspective:ge,opacity:Xo,originX:Yb,originY:Yb,originZ:ge},Zg={borderWidth:ge,borderTopWidth:ge,borderRightWidth:ge,borderBottomWidth:ge,borderLeftWidth:ge,borderRadius:ge,radius:ge,borderTopLeftRadius:ge,borderTopRightRadius:ge,borderBottomRightRadius:ge,borderBottomLeftRadius:ge,width:ge,maxWidth:ge,height:ge,maxHeight:ge,top:ge,right:ge,bottom:ge,left:ge,padding:ge,paddingTop:ge,paddingRight:ge,paddingBottom:ge,paddingLeft:ge,margin:ge,marginTop:ge,marginRight:ge,marginBottom:ge,marginLeft:ge,backgroundPositionX:ge,backgroundPositionY:ge,...pj,zIndex:ox,fillOpacity:Xo,strokeOpacity:Xo,numOctaves:ox},hj={...Zg,color:ut,backgroundColor:ut,outlineColor:ut,fill:ut,stroke:ut,borderColor:ut,borderTopColor:ut,borderRightColor:ut,borderBottomColor:ut,borderLeftColor:ut,filter:_h,WebkitFilter:_h},W5=e=>hj[e];function Q5(e,t){let a=W5(e);return a!==_h&&(a=di),a.getAnimatableNone?a.getAnimatableNone(t):void 0}const gj=new Set(["auto","none","0"]);function mj(e,t,a){let i=0,o;for(;i<e.length&&!o;){const l=e[i];typeof l=="string"&&!gj.has(l)&&Wo(l).values.length&&(o=e[i]),i++}if(o&&a)for(const l of t)e[l]=Q5(a,o)}class bj extends Wg{constructor(t,a,i,o,l){super(t,a,i,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:a,name:i}=this;if(!a||!a.current)return;super.readKeyframes();for(let f=0;f<t.length;f++){let g=t[f];if(typeof g=="string"&&(g=g.trim(),Hg(g))){const m=q5(g,a.current);m!==void 0&&(t[f]=m),f===t.length-1&&(this.finalKeyframe=g)}}if(this.resolveNoneKeyframes(),!K5.has(i)||t.length!==2)return;const[o,l]=t,u=sx(o),p=sx(l);if(u!==p)if(nx(u)&&nx(p))for(let f=0;f<t.length;f++){const g=t[f];typeof g=="string"&&(t[f]=parseFloat(g))}else Hi[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:a}=this,i=[];for(let o=0;o<t.length;o++)(t[o]===null||cj(t[o]))&&i.push(o);i.length&&mj(t,i,a)}measureInitialState(){const{element:t,unresolvedKeyframes:a,name:i}=this;if(!t||!t.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Hi[i](t.measureViewportBox(),window.getComputedStyle(t.current)),a[0]=this.measuredOrigin;const o=a[a.length-1];o!==void 0&&t.getValue(i,o).jump(o,!1)}measureEndState(){var p;const{element:t,name:a,unresolvedKeyframes:i}=this;if(!t||!t.current)return;const o=t.getValue(a);o&&o.jump(this.measuredOrigin,!1);const l=i.length-1,u=i[l];i[l]=Hi[a](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),(p=this.removedTransforms)!=null&&p.length&&this.removedTransforms.forEach(([f,g])=>{t.getValue(f).set(g)}),this.resolveNoneKeyframes()}}function Z5(e,t,a){if(e instanceof EventTarget)return[e];if(typeof e=="string"){const o=document.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}const J5=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function Jg(e){return m5(e)&&"offsetHeight"in e}const lx=30,xj=e=>!isNaN(parseFloat(e)),Po={current:void 0};class yj{constructor(t,a={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var l;const o=Xt.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((l=this.events.change)==null||l.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=a.owner}setCurrent(t){this.current=t,this.updatedAt=Xt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=xj(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,a){this.events[t]||(this.events[t]=new Pg);const i=this.events[t].add(a);return t==="change"?()=>{i(),Be.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,a){this.passiveEffect=t,this.stopPassiveEffect=a}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,a,i){this.set(a),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-i}jump(t,a=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,a&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return Po.current&&Po.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=Xt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>lx)return 0;const a=Math.min(this.updatedAt-this.prevUpdatedAt,lx);return Vg(parseFloat(this.current)-parseFloat(this.prevFrameValue),a)}start(t){return this.stop(),new Promise(a=>{this.hasAnimated=!0,this.animation=t(a),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,a;(t=this.dependents)==null||t.clear(),(a=this.events.destroy)==null||a.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Pn(e,t){return new yj(e,t)}const{schedule:em}=C5(queueMicrotask,!1),Dn={x:!1,y:!1};function e4(){return Dn.x||Dn.y}function vj(e){return e==="x"||e==="y"?Dn[e]?null:(Dn[e]=!0,()=>{Dn[e]=!1}):Dn.x||Dn.y?null:(Dn.x=Dn.y=!0,()=>{Dn.x=Dn.y=!1})}function t4(e,t){const a=Z5(e),i=new AbortController,o={passive:!0,...t,signal:i.signal};return[a,o,()=>i.abort()]}function cx(e){return!(e.pointerType==="touch"||e4())}function wj(e,t,a={}){const[i,o,l]=t4(e,a),u=p=>{if(!cx(p))return;const{target:f}=p,g=t(f,p);if(typeof g!="function"||!f)return;const m=x=>{cx(x)&&(g(x),f.removeEventListener("pointerleave",m))};f.addEventListener("pointerleave",m,o)};return i.forEach(p=>{p.addEventListener("pointerenter",u,o)}),l}const n4=(e,t)=>t?e===t?!0:n4(e,t.parentElement):!1,tm=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,Sj=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function kj(e){return Sj.has(e.tagName)||e.tabIndex!==-1}const tu=new WeakSet;function ux(e){return t=>{t.key==="Enter"&&e(t)}}function Vp(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const Tj=(e,t)=>{const a=e.currentTarget;if(!a)return;const i=ux(()=>{if(tu.has(a))return;Vp(a,"down");const o=ux(()=>{Vp(a,"up")}),l=()=>Vp(a,"cancel");a.addEventListener("keyup",o,t),a.addEventListener("blur",l,t)});a.addEventListener("keydown",i,t),a.addEventListener("blur",()=>a.removeEventListener("keydown",i),t)};function dx(e){return tm(e)&&!e4()}function jj(e,t,a={}){const[i,o,l]=t4(e,a),u=p=>{const f=p.currentTarget;if(!dx(p))return;tu.add(f);const g=t(f,p),m=(v,S)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",y),tu.has(f)&&tu.delete(f),dx(v)&&typeof g=="function"&&g(v,{success:S})},x=v=>{m(v,f===window||f===document||a.useGlobalTarget||n4(f,v.target))},y=v=>{m(v,!1)};window.addEventListener("pointerup",x,o),window.addEventListener("pointercancel",y,o)};return i.forEach(p=>{(a.useGlobalTarget?window:p).addEventListener("pointerdown",u,o),Jg(p)&&(p.addEventListener("focus",g=>Tj(g,o)),!kj(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),l}function nm(e){return m5(e)&&"ownerSVGElement"in e}const nu=new WeakMap;let oi;const a4=(e,t,a)=>(i,o)=>o&&o[0]?o[0][e+"Size"]:nm(i)&&"getBBox"in i?i.getBBox()[t]:i[a],Cj=a4("inline","width","offsetWidth"),Aj=a4("block","height","offsetHeight");function Ej({target:e,borderBoxSize:t}){var a;(a=nu.get(e))==null||a.forEach(i=>{i(e,{get width(){return Cj(e,t)},get height(){return Aj(e,t)}})})}function Mj(e){e.forEach(Ej)}function zj(){typeof ResizeObserver>"u"||(oi=new ResizeObserver(Mj))}function Rj(e,t){oi||zj();const a=Z5(e);return a.forEach(i=>{let o=nu.get(i);o||(o=new Set,nu.set(i,o)),o.add(t),oi==null||oi.observe(i)}),()=>{a.forEach(i=>{const o=nu.get(i);o==null||o.delete(t),o!=null&&o.size||oi==null||oi.unobserve(i)})}}const au=new Set;let Ir;function Lj(){Ir=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};au.forEach(t=>t(e))},window.addEventListener("resize",Ir)}function Oj(e){return au.add(e),Ir||Lj(),()=>{au.delete(e),!au.size&&typeof Ir=="function"&&(window.removeEventListener("resize",Ir),Ir=void 0)}}function Dj(e,t){return typeof e=="function"?Oj(e):Rj(e,t)}function i4(e,t){let a;const i=()=>{const{currentTime:o}=t,u=(o===null?0:o.value)/100;a!==u&&e(u),a=u};return Be.preUpdate(i,!0),()=>Bn(i)}function Pj(e){return nm(e)&&e.tagName==="svg"}function Vj(...e){const t=!Array.isArray(e[0]),a=t?0:-1,i=e[0+a],o=e[1+a],l=e[2+a],u=e[3+a],p=qg(o,l,u);return t?p(i):p}const Bt=e=>!!(e&&e.getVelocity),Nj=[...X5,ut,di],Bj=e=>Nj.find(Y5(e)),qu=j.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class _j extends j.Component{getSnapshotBeforeUpdate(t){const a=this.props.childRef.current;if(a&&t.isPresent&&!this.props.isPresent){const i=a.offsetParent,o=Jg(i)&&i.offsetWidth||0,l=this.props.sizeRef.current;l.height=a.offsetHeight||0,l.width=a.offsetWidth||0,l.top=a.offsetTop,l.left=a.offsetLeft,l.right=o-l.width-l.left}return null}componentDidUpdate(){}render(){return this.props.children}}function $j({children:e,isPresent:t,anchorX:a,root:i}){const o=j.useId(),l=j.useRef(null),u=j.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:p}=j.useContext(qu);return j.useInsertionEffect(()=>{const{width:f,height:g,top:m,left:x,right:y}=u.current;if(t||!l.current||!f||!g)return;const v=a==="left"?`left: ${x}`:`right: ${y}`;l.current.dataset.motionPopId=o;const S=document.createElement("style");p&&(S.nonce=p);const k=i??document.head;return k.appendChild(S),S.sheet&&S.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${g}px !important;
            ${v}px !important;
            top: ${m}px !important;
          }
        `),()=>{k.contains(S)&&k.removeChild(S)}},[t]),d.jsx(_j,{isPresent:t,childRef:l,sizeRef:u,children:j.cloneElement(e,{ref:l})})}const Hj=({children:e,initial:t,isPresent:a,onExitComplete:i,custom:o,presenceAffectsLayout:l,mode:u,anchorX:p,root:f})=>{const g=hs(Uj),m=j.useId();let x=!0,y=j.useMemo(()=>(x=!1,{id:m,initial:t,isPresent:a,custom:o,onExitComplete:v=>{g.set(v,!0);for(const S of g.values())if(!S)return;i&&i()},register:v=>(g.set(v,!1),()=>g.delete(v))}),[a,g,i]);return l&&x&&(y={...y}),j.useMemo(()=>{g.forEach((v,S)=>g.set(S,!1))},[a]),j.useEffect(()=>{!a&&!g.size&&i&&i()},[a]),u==="popLayout"&&(e=d.jsx($j,{isPresent:a,anchorX:p,root:f,children:e})),d.jsx(Iu.Provider,{value:y,children:e})};function Uj(){return new Map}function r4(e=!0){const t=j.useContext(Iu);if(t===null)return[!0,null];const{isPresent:a,onExitComplete:i,register:o}=t,l=j.useId();j.useEffect(()=>{if(e)return o(l)},[e]);const u=j.useCallback(()=>e&&i&&i(l),[l,i,e]);return!a&&i?[!1,u]:[!0]}const Dc=e=>e.key||"";function fx(e){const t=[];return j.Children.forEach(e,a=>{j.isValidElement(a)&&t.push(a)}),t}const s4=({children:e,custom:t,initial:a=!0,onExitComplete:i,presenceAffectsLayout:o=!0,mode:l="sync",propagate:u=!1,anchorX:p="left",root:f})=>{const[g,m]=r4(u),x=j.useMemo(()=>fx(e),[e]),y=u&&!g?[]:x.map(Dc),v=j.useRef(!0),S=j.useRef(x),k=hs(()=>new Map),[A,M]=j.useState(x),[z,C]=j.useState(x);Gu(()=>{v.current=!1,S.current=x;for(let V=0;V<z.length;V++){const N=Dc(z[V]);y.includes(N)?k.delete(N):k.get(N)!==!0&&k.set(N,!1)}},[z,y.length,y.join("-")]);const H=[];if(x!==A){let V=[...x];for(let N=0;N<z.length;N++){const O=z[N],X=Dc(O);y.includes(X)||(V.splice(N,0,O),H.push(O))}return l==="wait"&&H.length&&(V=H),C(fx(V)),M(x),null}const{forceRender:E}=j.useContext(zg);return d.jsx(d.Fragment,{children:z.map(V=>{const N=Dc(V),O=u&&!g?!1:x===z||y.includes(N),X=()=>{if(k.has(N))k.set(N,!0);else return;let J=!0;k.forEach($=>{$||(J=!1)}),J&&(E==null||E(),C(S.current),u&&(m==null||m()),i&&i())};return d.jsx(Hj,{isPresent:O,initial:!v.current||a?void 0:!1,custom:t,presenceAffectsLayout:o,mode:l,root:f,onExitComplete:O?void 0:X,anchorX:p,children:V},N)})})},o4=j.createContext({strict:!1}),px={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ns={};for(const e in px)ns[e]={isEnabled:t=>px[e].some(a=>!!t[a])};function Gj(e){for(const t in e)ns[t]={...ns[t],...e[t]}}const Ij=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function xu(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Ij.has(e)}let l4=e=>!xu(e);function Fj(e){typeof e=="function"&&(l4=t=>t.startsWith("on")?!xu(t):e(t))}try{Fj(require("@emotion/is-prop-valid").default)}catch{}function qj(e,t,a){const i={};for(const o in e)o==="values"&&typeof e.values=="object"||(l4(o)||a===!0&&xu(o)||!t&&!xu(o)||e.draggable&&o.startsWith("onDrag"))&&(i[o]=e[o]);return i}const Ku=j.createContext({});function Yu(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Qo(e){return typeof e=="string"||Array.isArray(e)}const am=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],im=["initial",...am];function Xu(e){return Yu(e.animate)||im.some(t=>Qo(e[t]))}function c4(e){return!!(Xu(e)||e.variants)}function Kj(e,t){if(Xu(e)){const{initial:a,animate:i}=e;return{initial:a===!1||Qo(a)?a:void 0,animate:Qo(i)?i:void 0}}return e.inherit!==!1?t:{}}function Yj(e){const{initial:t,animate:a}=Kj(e,j.useContext(Ku));return j.useMemo(()=>({initial:t,animate:a}),[hx(t),hx(a)])}function hx(e){return Array.isArray(e)?e.join(" "):e}const Zo={};function Xj(e){for(const t in e)Zo[t]=e[t],$g(t)&&(Zo[t].isCSSVariable=!0)}function u4(e,{layout:t,layoutId:a}){return bs.has(e)||e.startsWith("origin")||(t||a!==void 0)&&(!!Zo[e]||e==="opacity")}const Wj={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Qj=ms.length;function Zj(e,t,a){let i="",o=!0;for(let l=0;l<Qj;l++){const u=ms[l],p=e[u];if(p===void 0)continue;let f=!0;if(typeof p=="number"?f=p===(u.startsWith("scale")?1:0):f=parseFloat(p)===0,!f||a){const g=J5(p,Zg[u]);if(!f){o=!1;const m=Wj[u]||u;i+=`${m}(${g}) `}a&&(t[u]=g)}}return i=i.trim(),a?i=a(t,o?"":i):o&&(i="none"),i}function rm(e,t,a){const{style:i,vars:o,transformOrigin:l}=e;let u=!1,p=!1;for(const f in t){const g=t[f];if(bs.has(f)){u=!0;continue}else if($g(f)){o[f]=g;continue}else{const m=J5(g,Zg[f]);f.startsWith("origin")?(p=!0,l[f]=m):i[f]=m}}if(t.transform||(u||a?i.transform=Zj(t,e.transform,a):i.transform&&(i.transform="none")),p){const{originX:f="50%",originY:g="50%",originZ:m=0}=l;i.transformOrigin=`${f} ${g} ${m}`}}const sm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function d4(e,t,a){for(const i in t)!Bt(t[i])&&!u4(i,a)&&(e[i]=t[i])}function Jj({transformTemplate:e},t){return j.useMemo(()=>{const a=sm();return rm(a,t,e),Object.assign({},a.vars,a.style)},[t])}function e7(e,t){const a=e.style||{},i={};return d4(i,a,e),Object.assign(i,Jj(e,t)),i}function t7(e,t){const a={},i=e7(e,t);return e.drag&&e.dragListener!==!1&&(a.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(a.tabIndex=0),a.style=i,a}const n7={offset:"stroke-dashoffset",array:"stroke-dasharray"},a7={offset:"strokeDashoffset",array:"strokeDasharray"};function i7(e,t,a=1,i=0,o=!0){e.pathLength=1;const l=o?n7:a7;e[l.offset]=ge.transform(-i);const u=ge.transform(t),p=ge.transform(a);e[l.array]=`${u} ${p}`}function f4(e,{attrX:t,attrY:a,attrScale:i,pathLength:o,pathSpacing:l=1,pathOffset:u=0,...p},f,g,m){if(rm(e,p,g),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:x,style:y}=e;x.transform&&(y.transform=x.transform,delete x.transform),(y.transform||x.transformOrigin)&&(y.transformOrigin=x.transformOrigin??"50% 50%",delete x.transformOrigin),y.transform&&(y.transformBox=(m==null?void 0:m.transformBox)??"fill-box",delete x.transformBox),t!==void 0&&(x.x=t),a!==void 0&&(x.y=a),i!==void 0&&(x.scale=i),o!==void 0&&i7(x,o,l,u,!1)}const p4=()=>({...sm(),attrs:{}}),h4=e=>typeof e=="string"&&e.toLowerCase()==="svg";function r7(e,t,a,i){const o=j.useMemo(()=>{const l=p4();return f4(l,t,h4(i),e.transformTemplate,e.style),{...l.attrs,style:{...l.style}}},[t]);if(e.style){const l={};d4(l,e.style,e),o.style={...l,...o.style}}return o}const s7=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function om(e){return typeof e!="string"||e.includes("-")?!1:!!(s7.indexOf(e)>-1||/[A-Z]/u.test(e))}function o7(e,t,a,{latestValues:i},o,l=!1){const p=(om(e)?r7:t7)(t,i,o,e),f=qj(t,typeof e=="string",l),g=e!==j.Fragment?{...f,...p,ref:a}:{},{children:m}=t,x=j.useMemo(()=>Bt(m)?m.get():m,[m]);return j.createElement(e,{...g,children:x})}function gx(e){const t=[{},{}];return e==null||e.values.forEach((a,i)=>{t[0][i]=a.get(),t[1][i]=a.getVelocity()}),t}function lm(e,t,a,i){if(typeof t=="function"){const[o,l]=gx(i);t=t(a!==void 0?a:e.custom,o,l)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[o,l]=gx(i);t=t(a!==void 0?a:e.custom,o,l)}return t}function iu(e){return Bt(e)?e.get():e}function l7({scrapeMotionValuesFromProps:e,createRenderState:t},a,i,o){return{latestValues:c7(a,i,o,e),renderState:t()}}function c7(e,t,a,i){const o={},l=i(e,{});for(const y in l)o[y]=iu(l[y]);let{initial:u,animate:p}=e;const f=Xu(e),g=c4(e);t&&g&&!f&&e.inherit!==!1&&(u===void 0&&(u=t.initial),p===void 0&&(p=t.animate));let m=a?a.initial===!1:!1;m=m||u===!1;const x=m?p:u;if(x&&typeof x!="boolean"&&!Yu(x)){const y=Array.isArray(x)?x:[x];for(let v=0;v<y.length;v++){const S=lm(e,y[v]);if(S){const{transitionEnd:k,transition:A,...M}=S;for(const z in M){let C=M[z];if(Array.isArray(C)){const H=m?C.length-1:0;C=C[H]}C!==null&&(o[z]=C)}for(const z in k)o[z]=k[z]}}}return o}const g4=e=>(t,a)=>{const i=j.useContext(Ku),o=j.useContext(Iu),l=()=>l7(e,t,i,o);return a?l():hs(l)};function cm(e,t,a){var l;const{style:i}=e,o={};for(const u in i)(Bt(i[u])||t.style&&Bt(t.style[u])||u4(u,e)||((l=a==null?void 0:a.getValue(u))==null?void 0:l.liveStyle)!==void 0)&&(o[u]=i[u]);return o}const u7=g4({scrapeMotionValuesFromProps:cm,createRenderState:sm});function m4(e,t,a){const i=cm(e,t,a);for(const o in e)if(Bt(e[o])||Bt(t[o])){const l=ms.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;i[l]=e[o]}return i}const d7=g4({scrapeMotionValuesFromProps:m4,createRenderState:p4}),f7=Symbol.for("motionComponentSymbol");function Fr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function p7(e,t,a){return j.useCallback(i=>{i&&e.onMount&&e.onMount(i),t&&(i?t.mount(i):t.unmount()),a&&(typeof a=="function"?a(i):Fr(a)&&(a.current=i))},[t])}const um=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),h7="framerAppearId",b4="data-"+um(h7),x4=j.createContext({});function g7(e,t,a,i,o){var k,A;const{visualElement:l}=j.useContext(Ku),u=j.useContext(o4),p=j.useContext(Iu),f=j.useContext(qu).reducedMotion,g=j.useRef(null);i=i||u.renderer,!g.current&&i&&(g.current=i(e,{visualState:t,parent:l,props:a,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:f}));const m=g.current,x=j.useContext(x4);m&&!m.projection&&o&&(m.type==="html"||m.type==="svg")&&m7(g.current,a,o,x);const y=j.useRef(!1);j.useInsertionEffect(()=>{m&&y.current&&m.update(a,p)});const v=a[b4],S=j.useRef(!!v&&!((k=window.MotionHandoffIsComplete)!=null&&k.call(window,v))&&((A=window.MotionHasOptimisedAnimation)==null?void 0:A.call(window,v)));return Gu(()=>{m&&(y.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),S.current&&m.animationState&&m.animationState.animateChanges())}),j.useEffect(()=>{m&&(!S.current&&m.animationState&&m.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var M;(M=window.MotionHandoffMarkAsComplete)==null||M.call(window,v)}),S.current=!1),m.enteringChildren=void 0)}),m}function m7(e,t,a,i){const{layoutId:o,layout:l,drag:u,dragConstraints:p,layoutScroll:f,layoutRoot:g,layoutCrossfade:m}=t;e.projection=new a(e.latestValues,t["data-framer-portal-id"]?void 0:y4(e.parent)),e.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||p&&Fr(p),visualElement:e,animationType:typeof l=="string"?l:"both",initialPromotionConfig:i,crossfade:m,layoutScroll:f,layoutRoot:g})}function y4(e){if(e)return e.options.allowProjection!==!1?e.projection:y4(e.parent)}function Np(e,{forwardMotionProps:t=!1}={},a,i){a&&Gj(a);const o=om(e)?d7:u7;function l(p,f){let g;const m={...j.useContext(qu),...p,layoutId:b7(p)},{isStatic:x}=m,y=Yj(p),v=o(p,x);if(!x&&Rg){x7();const S=y7(m);g=S.MeasureLayout,y.visualElement=g7(e,v,m,i,S.ProjectionNode)}return d.jsxs(Ku.Provider,{value:y,children:[g&&y.visualElement?d.jsx(g,{visualElement:y.visualElement,...m}):null,o7(e,p,p7(v,y.visualElement,f),v,x,t)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const u=j.forwardRef(l);return u[f7]=e,u}function b7({layoutId:e}){const t=j.useContext(zg).id;return t&&e!==void 0?t+"-"+e:e}function x7(e,t){j.useContext(o4).strict}function y7(e){const{drag:t,layout:a}=ns;if(!t&&!a)return{};const i={...t,...a};return{MeasureLayout:t!=null&&t.isEnabled(e)||a!=null&&a.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function v7(e,t){if(typeof Proxy>"u")return Np;const a=new Map,i=(l,u)=>Np(l,u,e,t),o=(l,u)=>i(l,u);return new Proxy(o,{get:(l,u)=>u==="create"?i:(a.has(u)||a.set(u,Np(u,void 0,e,t)),a.get(u))})}function v4({top:e,left:t,right:a,bottom:i}){return{x:{min:t,max:a},y:{min:e,max:i}}}function w7({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function S7(e,t){if(!t)return e;const a=t({x:e.left,y:e.top}),i=t({x:e.right,y:e.bottom});return{top:a.y,left:a.x,bottom:i.y,right:i.x}}function Bp(e){return e===void 0||e===1}function $h({scale:e,scaleX:t,scaleY:a}){return!Bp(e)||!Bp(t)||!Bp(a)}function Ni(e){return $h(e)||w4(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function w4(e){return mx(e.x)||mx(e.y)}function mx(e){return e&&e!=="0%"}function yu(e,t,a){const i=e-a,o=t*i;return a+o}function bx(e,t,a,i,o){return o!==void 0&&(e=yu(e,o,i)),yu(e,a,i)+t}function Hh(e,t=0,a=1,i,o){e.min=bx(e.min,t,a,i,o),e.max=bx(e.max,t,a,i,o)}function S4(e,{x:t,y:a}){Hh(e.x,t.translate,t.scale,t.originPoint),Hh(e.y,a.translate,a.scale,a.originPoint)}const xx=.999999999999,yx=1.0000000000001;function k7(e,t,a,i=!1){const o=a.length;if(!o)return;t.x=t.y=1;let l,u;for(let p=0;p<o;p++){l=a[p],u=l.projectionDelta;const{visualElement:f}=l.options;f&&f.props.style&&f.props.style.display==="contents"||(i&&l.options.layoutScroll&&l.scroll&&l!==l.root&&Kr(e,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(t.x*=u.x.scale,t.y*=u.y.scale,S4(e,u)),i&&Ni(l.latestValues)&&Kr(e,l.latestValues))}t.x<yx&&t.x>xx&&(t.x=1),t.y<yx&&t.y>xx&&(t.y=1)}function qr(e,t){e.min=e.min+t,e.max=e.max+t}function vx(e,t,a,i,o=.5){const l=et(e.min,e.max,o);Hh(e,t,a,l,i)}function Kr(e,t){vx(e.x,t.x,t.scaleX,t.scale,t.originX),vx(e.y,t.y,t.scaleY,t.scale,t.originY)}function k4(e,t){return v4(S7(e.getBoundingClientRect(),t))}function T7(e,t,a){const i=k4(e,a),{scroll:o}=t;return o&&(qr(i.x,o.offset.x),qr(i.y,o.offset.y)),i}const wx=()=>({translate:0,scale:1,origin:0,originPoint:0}),Yr=()=>({x:wx(),y:wx()}),Sx=()=>({min:0,max:0}),ot=()=>({x:Sx(),y:Sx()}),Uh={current:null},T4={current:!1};function j7(){if(T4.current=!0,!!Rg)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Uh.current=e.matches;e.addEventListener("change",t),t()}else Uh.current=!1}const C7=new WeakMap;function A7(e,t,a){for(const i in t){const o=t[i],l=a[i];if(Bt(o))e.addValue(i,o);else if(Bt(l))e.addValue(i,Pn(o,{owner:e}));else if(l!==o)if(e.hasValue(i)){const u=e.getValue(i);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=e.getStaticValue(i);e.addValue(i,Pn(u!==void 0?u:o,{owner:e}))}}for(const i in a)t[i]===void 0&&e.removeValue(i);return t}const kx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class E7{scrapeMotionValuesFromProps(t,a,i){return{}}constructor({parent:t,props:a,presenceContext:i,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Wg,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=Xt.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,Be.render(this.render,!1,!0))};const{latestValues:f,renderState:g}=u;this.latestValues=f,this.baseTarget={...f},this.initialValues=a.initial?{...f}:{},this.renderState=g,this.parent=t,this.props=a,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=p,this.blockInitialAnimation=!!l,this.isControllingVariants=Xu(a),this.isVariantNode=c4(a),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:m,...x}=this.scrapeMotionValuesFromProps(a,{},this);for(const y in x){const v=x[y];f[y]!==void 0&&Bt(v)&&v.set(f[y])}}mount(t){var a;this.current=t,C7.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,o)=>this.bindToMotionValue(o,i)),T4.current||j7(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Uh.current,(a=this.parent)==null||a.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),Bn(this.notifyUpdate),Bn(this.render),this.valueSubscriptions.forEach(a=>a()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const a in this.events)this.events[a].clear();for(const a in this.features){const i=this.features[a];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,a){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const i=bs.has(t);i&&this.onBindTransform&&this.onBindTransform();const o=a.on("change",u=>{this.latestValues[t]=u,this.props.onUpdate&&Be.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,t,a)),this.valueSubscriptions.set(t,()=>{o(),l&&l(),a.owner&&a.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in ns){const a=ns[t];if(!a)continue;const{isEnabled:i,Feature:o}=a;if(!this.features[t]&&o&&i(this.props)&&(this.features[t]=new o(this)),this.features[t]){const l=this.features[t];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ot()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,a){this.latestValues[t]=a}update(t,a){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=a;for(let i=0;i<kx.length;i++){const o=kx[i];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=t[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=A7(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const a=this.getClosestVariantNode();if(a)return a.variantChildren&&a.variantChildren.add(t),()=>a.variantChildren.delete(t)}addValue(t,a){const i=this.values.get(t);a!==i&&(i&&this.removeValue(t),this.bindToMotionValue(t,a),this.values.set(t,a),this.latestValues[t]=a.get())}removeValue(t){this.values.delete(t);const a=this.valueSubscriptions.get(t);a&&(a(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,a){if(this.props.values&&this.props.values[t])return this.props.values[t];let i=this.values.get(t);return i===void 0&&a!==void 0&&(i=Pn(a===null?void 0:a,{owner:this}),this.addValue(t,i)),i}readValue(t,a){let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(g5(i)||b5(i))?i=parseFloat(i):!Bj(i)&&di.test(a)&&(i=Q5(t,a)),this.setBaseTarget(t,Bt(i)?i.get():i)),Bt(i)?i.get():i}setBaseTarget(t,a){this.baseTarget[t]=a}getBaseTarget(t){var l;const{initial:a}=this.props;let i;if(typeof a=="string"||typeof a=="object"){const u=lm(this.props,a,(l=this.presenceContext)==null?void 0:l.custom);u&&(i=u[t])}if(a&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Bt(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,a){return this.events[t]||(this.events[t]=new Pg),this.events[t].add(a)}notify(t,...a){this.events[t]&&this.events[t].notify(...a)}scheduleRenderMicrotask(){em.render(this.render)}}class j4 extends E7{constructor(){super(...arguments),this.KeyframeResolver=bj}sortInstanceNodePosition(t,a){return t.compareDocumentPosition(a)&2?1:-1}getBaseTargetFromProps(t,a){return t.style?t.style[a]:void 0}removeValueFromRenderState(t,{vars:a,style:i}){delete a[t],delete i[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Bt(t)&&(this.childSubscription=t.on("change",a=>{this.current&&(this.current.textContent=`${a}`)}))}}function C4(e,{style:t,vars:a},i,o){const l=e.style;let u;for(u in t)l[u]=t[u];o==null||o.applyProjectionStyles(l,i);for(u in a)l.setProperty(u,a[u])}function M7(e){return window.getComputedStyle(e)}class z7 extends j4{constructor(){super(...arguments),this.type="html",this.renderInstance=C4}readValueFromInstance(t,a){var i;if(bs.has(a))return(i=this.projection)!=null&&i.isProjecting?Oh(a):NT(t,a);{const o=M7(t),l=($g(a)?o.getPropertyValue(a):o[a])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(t,{transformPagePoint:a}){return k4(t,a)}build(t,a,i){rm(t,a,i.transformTemplate)}scrapeMotionValuesFromProps(t,a,i){return cm(t,a,i)}}const A4=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function R7(e,t,a,i){C4(e,t,void 0,i);for(const o in t.attrs)e.setAttribute(A4.has(o)?o:um(o),t.attrs[o])}class L7 extends j4{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ot}getBaseTargetFromProps(t,a){return t[a]}readValueFromInstance(t,a){if(bs.has(a)){const i=W5(a);return i&&i.default||0}return a=A4.has(a)?a:um(a),t.getAttribute(a)}scrapeMotionValuesFromProps(t,a,i){return m4(t,a,i)}build(t,a,i){f4(t,a,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(t,a,i,o){R7(t,a,i,o)}mount(t){this.isSVGTag=h4(t.tagName),super.mount(t)}}const O7=(e,t)=>om(e)?new L7(t):new z7(t,{allowProjection:e!==j.Fragment});function Zr(e,t,a){const i=e.getProps();return lm(i,t,a!==void 0?a:i.custom,e)}const Gh=e=>Array.isArray(e);function D7(e,t,a){e.hasValue(t)?e.getValue(t).set(a):e.addValue(t,Pn(a))}function P7(e){return Gh(e)?e[e.length-1]||0:e}function V7(e,t){const a=Zr(e,t);let{transitionEnd:i={},transition:o={},...l}=a||{};l={...l,...i};for(const u in l){const p=P7(l[u]);D7(e,u,p)}}function N7(e){return!!(Bt(e)&&e.add)}function Ih(e,t){const a=e.getValue("willChange");if(N7(a))return a.add(t);if(!a&&Oa.WillChange){const i=new Oa.WillChange("auto");e.addValue("willChange",i),i.add(t)}}function E4(e){return e.props[b4]}const B7=e=>e!==null;function _7(e,{repeat:t,repeatType:a="loop"},i){const o=e.filter(B7),l=t&&a!=="loop"&&t%2===1?0:o.length-1;return o[l]}const $7={type:"spring",stiffness:500,damping:25,restSpeed:10},H7=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),U7={type:"keyframes",duration:.8},G7={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},I7=(e,{keyframes:t})=>t.length>2?U7:bs.has(e)?e.startsWith("scale")?H7(t[1]):$7:G7;function F7({when:e,delay:t,delayChildren:a,staggerChildren:i,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:p,from:f,elapsed:g,...m}){return!!Object.keys(m).length}const dm=(e,t,a,i={},o,l)=>u=>{const p=Qg(i,e)||{},f=p.delay||i.delay||0;let{elapsed:g=0}=i;g=g-ra(f);const m={keyframes:Array.isArray(a)?a:[null,a],ease:"easeOut",velocity:t.getVelocity(),...p,delay:-g,onUpdate:y=>{t.set(y),p.onUpdate&&p.onUpdate(y)},onComplete:()=>{u(),p.onComplete&&p.onComplete()},name:e,motionValue:t,element:l?void 0:o};F7(p)||Object.assign(m,I7(e,m)),m.duration&&(m.duration=ra(m.duration)),m.repeatDelay&&(m.repeatDelay=ra(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let x=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(Bh(m),m.delay===0&&(x=!0)),(Oa.instantAnimations||Oa.skipAnimations)&&(x=!0,Bh(m),m.delay=0),m.allowFlatten=!p.type&&!p.ease,x&&!l&&t.get()!==void 0){const y=_7(m.keyframes,p);if(y!==void 0){Be.update(()=>{m.onUpdate(y),m.onComplete()});return}}return p.isSync?new Xg(m):new rj(m)};function q7({protectedKeys:e,needsAnimating:t},a){const i=e.hasOwnProperty(a)&&t[a]!==!0;return t[a]=!1,i}function M4(e,t,{delay:a=0,transitionOverride:i,type:o}={}){let{transition:l=e.getDefaultTransition(),transitionEnd:u,...p}=t;i&&(l=i);const f=[],g=o&&e.animationState&&e.animationState.getState()[o];for(const m in p){const x=e.getValue(m,e.latestValues[m]??null),y=p[m];if(y===void 0||g&&q7(g,m))continue;const v={delay:a,...Qg(l||{},m)},S=x.get();if(S!==void 0&&!x.isAnimating&&!Array.isArray(y)&&y===S&&!v.velocity)continue;let k=!1;if(window.MotionHandoffAnimation){const M=E4(e);if(M){const z=window.MotionHandoffAnimation(M,m,Be);z!==null&&(v.startTime=z,k=!0)}}Ih(e,m),x.start(dm(m,x,y,e.shouldReduceMotion&&K5.has(m)?{type:!1}:v,e,k));const A=x.animation;A&&f.push(A)}return u&&Promise.all(f).then(()=>{Be.update(()=>{u&&V7(e,u)})}),f}function z4(e,t,a,i=0,o=1){const l=Array.from(e).sort((g,m)=>g.sortNodePosition(m)).indexOf(t),u=e.size,p=(u-1)*i;return typeof a=="function"?a(l,u):o===1?l*i:p-l*i}function Fh(e,t,a={}){var f;const i=Zr(e,t,a.type==="exit"?(f=e.presenceContext)==null?void 0:f.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};a.transitionOverride&&(o=a.transitionOverride);const l=i?()=>Promise.all(M4(e,i,a)):()=>Promise.resolve(),u=e.variantChildren&&e.variantChildren.size?(g=0)=>{const{delayChildren:m=0,staggerChildren:x,staggerDirection:y}=o;return K7(e,t,g,m,x,y,a)}:()=>Promise.resolve(),{when:p}=o;if(p){const[g,m]=p==="beforeChildren"?[l,u]:[u,l];return g().then(()=>m())}else return Promise.all([l(),u(a.delay)])}function K7(e,t,a=0,i=0,o=0,l=1,u){const p=[];for(const f of e.variantChildren)f.notify("AnimationStart",t),p.push(Fh(f,t,{...u,delay:a+(typeof i=="function"?0:i)+z4(e.variantChildren,f,i,o,l)}).then(()=>f.notify("AnimationComplete",t)));return Promise.all(p)}function Y7(e,t,a={}){e.notify("AnimationStart",t);let i;if(Array.isArray(t)){const o=t.map(l=>Fh(e,l,a));i=Promise.all(o)}else if(typeof t=="string")i=Fh(e,t,a);else{const o=typeof t=="function"?Zr(e,t,a.custom):t;i=Promise.all(M4(e,o,a))}return i.then(()=>{e.notify("AnimationComplete",t)})}function R4(e,t){if(!Array.isArray(t))return!1;const a=t.length;if(a!==e.length)return!1;for(let i=0;i<a;i++)if(t[i]!==e[i])return!1;return!0}const X7=im.length;function L4(e){if(!e)return;if(!e.isControllingVariants){const a=e.parent?L4(e.parent)||{}:{};return e.props.initial!==void 0&&(a.initial=e.props.initial),a}const t={};for(let a=0;a<X7;a++){const i=im[a],o=e.props[i];(Qo(o)||o===!1)&&(t[i]=o)}return t}const W7=[...am].reverse(),Q7=am.length;function Z7(e){return t=>Promise.all(t.map(({animation:a,options:i})=>Y7(e,a,i)))}function J7(e){let t=Z7(e),a=Tx(),i=!0;const o=f=>(g,m)=>{var y;const x=Zr(e,m,f==="exit"?(y=e.presenceContext)==null?void 0:y.custom:void 0);if(x){const{transition:v,transitionEnd:S,...k}=x;g={...g,...k,...S}}return g};function l(f){t=f(e)}function u(f){const{props:g}=e,m=L4(e.parent)||{},x=[],y=new Set;let v={},S=1/0;for(let A=0;A<Q7;A++){const M=W7[A],z=a[M],C=g[M]!==void 0?g[M]:m[M],H=Qo(C),E=M===f?z.isActive:null;E===!1&&(S=A);let V=C===m[M]&&C!==g[M]&&H;if(V&&i&&e.manuallyAnimateOnMount&&(V=!1),z.protectedKeys={...v},!z.isActive&&E===null||!C&&!z.prevProp||Yu(C)||typeof C=="boolean")continue;const N=eC(z.prevProp,C);let O=N||M===f&&z.isActive&&!V&&H||A>S&&H,X=!1;const J=Array.isArray(C)?C:[C];let $=J.reduce(o(M),{});E===!1&&($={});const{prevResolvedValues:te={}}=z,ce={...te,...$},le=B=>{O=!0,y.has(B)&&(X=!0,y.delete(B)),z.needsAnimating[B]=!0;const G=e.getValue(B);G&&(G.liveStyle=!1)};for(const B in ce){const G=$[B],Z=te[B];if(v.hasOwnProperty(B))continue;let L=!1;Gh(G)&&Gh(Z)?L=!R4(G,Z):L=G!==Z,L?G!=null?le(B):y.add(B):G!==void 0&&y.has(B)?le(B):z.protectedKeys[B]=!0}z.prevProp=C,z.prevResolvedValues=$,z.isActive&&(v={...v,...$}),i&&e.blockInitialAnimation&&(O=!1);const oe=V&&N;O&&(!oe||X)&&x.push(...J.map(B=>{const G={type:M};if(typeof B=="string"&&i&&!oe&&e.manuallyAnimateOnMount&&e.parent){const{parent:Z}=e,L=Zr(Z,B);if(Z.enteringChildren&&L){const{delayChildren:Y}=L.transition||{};G.delay=z4(Z.enteringChildren,e,Y)}}return{animation:B,options:G}}))}if(y.size){const A={};if(typeof g.initial!="boolean"){const M=Zr(e,Array.isArray(g.initial)?g.initial[0]:g.initial);M&&M.transition&&(A.transition=M.transition)}y.forEach(M=>{const z=e.getBaseTarget(M),C=e.getValue(M);C&&(C.liveStyle=!0),A[M]=z??null}),x.push({animation:A})}let k=!!x.length;return i&&(g.initial===!1||g.initial===g.animate)&&!e.manuallyAnimateOnMount&&(k=!1),i=!1,k?t(x):Promise.resolve()}function p(f,g){var x;if(a[f].isActive===g)return Promise.resolve();(x=e.variantChildren)==null||x.forEach(y=>{var v;return(v=y.animationState)==null?void 0:v.setActive(f,g)}),a[f].isActive=g;const m=u(f);for(const y in a)a[y].protectedKeys={};return m}return{animateChanges:u,setActive:p,setAnimateFunction:l,getState:()=>a,reset:()=>{a=Tx(),i=!0}}}function eC(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!R4(t,e):!1}function Di(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Tx(){return{animate:Di(!0),whileInView:Di(),whileHover:Di(),whileTap:Di(),whileDrag:Di(),whileFocus:Di(),exit:Di()}}class hi{constructor(t){this.isMounted=!1,this.node=t}update(){}}class tC extends hi{constructor(t){super(t),t.animationState||(t.animationState=J7(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Yu(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:a}=this.node.prevProps||{};t!==a&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let nC=0;class aC extends hi{constructor(){super(...arguments),this.id=nC++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:a}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const o=this.node.animationState.setActive("exit",!t);a&&!t&&o.then(()=>{a(this.id)})}mount(){const{register:t,onExitComplete:a}=this.node.presenceContext||{};a&&a(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const iC={animation:{Feature:tC},exit:{Feature:aC}};function Jo(e,t,a,i={passive:!0}){return e.addEventListener(t,a,i),()=>e.removeEventListener(t,a)}function fl(e){return{point:{x:e.pageX,y:e.pageY}}}const rC=e=>t=>tm(t)&&e(t,fl(t));function Vo(e,t,a,i){return Jo(e,t,rC(a),i)}const O4=1e-4,sC=1-O4,oC=1+O4,D4=.01,lC=0-D4,cC=0+D4;function Ht(e){return e.max-e.min}function uC(e,t,a){return Math.abs(e-t)<=a}function jx(e,t,a,i=.5){e.origin=i,e.originPoint=et(t.min,t.max,e.origin),e.scale=Ht(a)/Ht(t),e.translate=et(a.min,a.max,e.origin)-e.originPoint,(e.scale>=sC&&e.scale<=oC||isNaN(e.scale))&&(e.scale=1),(e.translate>=lC&&e.translate<=cC||isNaN(e.translate))&&(e.translate=0)}function No(e,t,a,i){jx(e.x,t.x,a.x,i?i.originX:void 0),jx(e.y,t.y,a.y,i?i.originY:void 0)}function Cx(e,t,a){e.min=a.min+t.min,e.max=e.min+Ht(t)}function dC(e,t,a){Cx(e.x,t.x,a.x),Cx(e.y,t.y,a.y)}function Ax(e,t,a){e.min=t.min-a.min,e.max=e.min+Ht(t)}function Bo(e,t,a){Ax(e.x,t.x,a.x),Ax(e.y,t.y,a.y)}function En(e){return[e("x"),e("y")]}const P4=({current:e})=>e?e.ownerDocument.defaultView:null,Ex=(e,t)=>Math.abs(e-t);function fC(e,t){const a=Ex(e.x,t.x),i=Ex(e.y,t.y);return Math.sqrt(a**2+i**2)}class V4{constructor(t,a,{transformPagePoint:i,contextWindow:o=window,dragSnapToOrigin:l=!1,distanceThreshold:u=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=$p(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,S=fC(y.offset,{x:0,y:0})>=this.distanceThreshold;if(!v&&!S)return;const{point:k}=y,{timestamp:A}=Tt;this.history.push({...k,timestamp:A});const{onStart:M,onMove:z}=this.handlers;v||(M&&M(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),z&&z(this.lastMoveEvent,y)},this.handlePointerMove=(y,v)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=_p(v,this.transformPagePoint),Be.update(this.updatePoint,!0)},this.handlePointerUp=(y,v)=>{this.end();const{onEnd:S,onSessionEnd:k,resumeAnimation:A}=this.handlers;if(this.dragSnapToOrigin&&A&&A(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const M=$p(y.type==="pointercancel"?this.lastMoveEventInfo:_p(v,this.transformPagePoint),this.history);this.startEvent&&S&&S(y,M),k&&k(y,M)},!tm(t))return;this.dragSnapToOrigin=l,this.handlers=a,this.transformPagePoint=i,this.distanceThreshold=u,this.contextWindow=o||window;const p=fl(t),f=_p(p,this.transformPagePoint),{point:g}=f,{timestamp:m}=Tt;this.history=[{...g,timestamp:m}];const{onSessionStart:x}=a;x&&x(t,$p(f,this.history)),this.removeListeners=cl(Vo(this.contextWindow,"pointermove",this.handlePointerMove),Vo(this.contextWindow,"pointerup",this.handlePointerUp),Vo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Bn(this.updatePoint)}}function _p(e,t){return t?{point:t(e.point)}:e}function Mx(e,t){return{x:e.x-t.x,y:e.y-t.y}}function $p({point:e},t){return{point:e,delta:Mx(e,N4(t)),offset:Mx(e,pC(t)),velocity:hC(t,.1)}}function pC(e){return e[0]}function N4(e){return e[e.length-1]}function hC(e,t){if(e.length<2)return{x:0,y:0};let a=e.length-1,i=null;const o=N4(e);for(;a>=0&&(i=e[a],!(o.timestamp-i.timestamp>ra(t)));)a--;if(!i)return{x:0,y:0};const l=sa(o.timestamp-i.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-i.x)/l,y:(o.y-i.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function gC(e,{min:t,max:a},i){return t!==void 0&&e<t?e=i?et(t,e,i.min):Math.max(e,t):a!==void 0&&e>a&&(e=i?et(a,e,i.max):Math.min(e,a)),e}function zx(e,t,a){return{min:t!==void 0?e.min+t:void 0,max:a!==void 0?e.max+a-(e.max-e.min):void 0}}function mC(e,{top:t,left:a,bottom:i,right:o}){return{x:zx(e.x,a,o),y:zx(e.y,t,i)}}function Rx(e,t){let a=t.min-e.min,i=t.max-e.max;return t.max-t.min<e.max-e.min&&([a,i]=[i,a]),{min:a,max:i}}function bC(e,t){return{x:Rx(e.x,t.x),y:Rx(e.y,t.y)}}function xC(e,t){let a=.5;const i=Ht(e),o=Ht(t);return o>i?a=ts(t.min,t.max-i,e.min):i>o&&(a=ts(e.min,e.max-o,t.min)),ca(0,1,a)}function yC(e,t){const a={};return t.min!==void 0&&(a.min=t.min-e.min),t.max!==void 0&&(a.max=t.max-e.min),a}const qh=.35;function vC(e=qh){return e===!1?e=0:e===!0&&(e=qh),{x:Lx(e,"left","right"),y:Lx(e,"top","bottom")}}function Lx(e,t,a){return{min:Ox(e,t),max:Ox(e,a)}}function Ox(e,t){return typeof e=="number"?e:e[t]||0}const wC=new WeakMap;class SC{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ot(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:a=!1,distanceThreshold:i}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=x=>{const{dragSnapToOrigin:y}=this.getProps();y?this.pauseAnimation():this.stopAnimation(),a&&this.snapToCursor(fl(x).point)},u=(x,y)=>{const{drag:v,dragPropagation:S,onDragStart:k}=this.getProps();if(v&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=vj(v),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=y,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),En(M=>{let z=this.getAxisMotionValue(M).get()||0;if(oa.test(z)){const{projection:C}=this.visualElement;if(C&&C.layout){const H=C.layout.layoutBox[M];H&&(z=Ht(H)*(parseFloat(z)/100))}}this.originPoint[M]=z}),k&&Be.postRender(()=>k(x,y)),Ih(this.visualElement,"transform");const{animationState:A}=this.visualElement;A&&A.setActive("whileDrag",!0)},p=(x,y)=>{this.latestPointerEvent=x,this.latestPanInfo=y;const{dragPropagation:v,dragDirectionLock:S,onDirectionLock:k,onDrag:A}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:M}=y;if(S&&this.currentDirection===null){this.currentDirection=kC(M),this.currentDirection!==null&&k&&k(this.currentDirection);return}this.updateAxis("x",y.point,M),this.updateAxis("y",y.point,M),this.visualElement.render(),A&&A(x,y)},f=(x,y)=>{this.latestPointerEvent=x,this.latestPanInfo=y,this.stop(x,y),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>En(x=>{var y;return this.getAnimationState(x)==="paused"&&((y=this.getAxisMotionValue(x).animation)==null?void 0:y.play())}),{dragSnapToOrigin:m}=this.getProps();this.panSession=new V4(t,{onSessionStart:l,onStart:u,onMove:p,onSessionEnd:f,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,distanceThreshold:i,contextWindow:P4(this.visualElement)})}stop(t,a){const i=t||this.latestPointerEvent,o=a||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!o||!i)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:p}=this.getProps();p&&Be.postRender(()=>p(i,o))}cancel(){this.isDragging=!1;const{projection:t,animationState:a}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),a&&a.setActive("whileDrag",!1)}updateAxis(t,a,i){const{drag:o}=this.getProps();if(!i||!Pc(t,o,this.currentDirection))return;const l=this.getAxisMotionValue(t);let u=this.originPoint[t]+i[t];this.constraints&&this.constraints[t]&&(u=gC(u,this.constraints[t],this.elastic[t])),l.set(u)}resolveConstraints(){var l;const{dragConstraints:t,dragElastic:a}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(l=this.visualElement.projection)==null?void 0:l.layout,o=this.constraints;t&&Fr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&i?this.constraints=mC(i.layoutBox,t):this.constraints=!1,this.elastic=vC(a),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&En(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=yC(i.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:a}=this.getProps();if(!t||!Fr(t))return!1;const i=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=T7(i,o.root,this.visualElement.getTransformPagePoint());let u=bC(o.layout.layoutBox,l);if(a){const p=a(w7(u));this.hasMutatedConstraints=!!p,p&&(u=v4(p))}return u}startAnimation(t){const{drag:a,dragMomentum:i,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:p}=this.getProps(),f=this.constraints||{},g=En(m=>{if(!Pc(m,a,this.currentDirection))return;let x=f&&f[m]||{};u&&(x={min:0,max:0});const y=o?200:1e6,v=o?40:1e7,S={type:"inertia",velocity:i?t[m]:0,bounceStiffness:y,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...l,...x};return this.startAxisValueAnimation(m,S)});return Promise.all(g).then(p)}startAxisValueAnimation(t,a){const i=this.getAxisMotionValue(t);return Ih(this.visualElement,t),i.start(dm(t,i,0,a,this.visualElement,!1))}stopAnimation(){En(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){En(t=>{var a;return(a=this.getAxisMotionValue(t).animation)==null?void 0:a.pause()})}getAnimationState(t){var a;return(a=this.getAxisMotionValue(t).animation)==null?void 0:a.state}getAxisMotionValue(t){const a=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps(),o=i[a];return o||this.visualElement.getValue(t,(i.initial?i.initial[t]:void 0)||0)}snapToCursor(t){En(a=>{const{drag:i}=this.getProps();if(!Pc(a,i,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(a);if(o&&o.layout){const{min:u,max:p}=o.layout.layoutBox[a];l.set(t[a]-et(u,p,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:a}=this.getProps(),{projection:i}=this.visualElement;if(!Fr(a)||!i||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};En(u=>{const p=this.getAxisMotionValue(u);if(p&&this.constraints!==!1){const f=p.get();o[u]=xC({min:f,max:f},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),En(u=>{if(!Pc(u,t,null))return;const p=this.getAxisMotionValue(u),{min:f,max:g}=this.constraints[u];p.set(et(f,g,o[u]))})}addListeners(){if(!this.visualElement.current)return;wC.set(this.visualElement,this);const t=this.visualElement.current,a=Vo(t,"pointerdown",f=>{const{drag:g,dragListener:m=!0}=this.getProps();g&&m&&this.start(f)}),i=()=>{const{dragConstraints:f}=this.getProps();Fr(f)&&f.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",i);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Be.read(i);const u=Jo(window,"resize",()=>this.scalePositionWithinConstraints()),p=o.addEventListener("didUpdate",({delta:f,hasLayoutChanged:g})=>{this.isDragging&&g&&(En(m=>{const x=this.getAxisMotionValue(m);x&&(this.originPoint[m]+=f[m].translate,x.set(x.get()+f[m].translate))}),this.visualElement.render())});return()=>{u(),a(),l(),p&&p()}}getProps(){const t=this.visualElement.getProps(),{drag:a=!1,dragDirectionLock:i=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=qh,dragMomentum:p=!0}=t;return{...t,drag:a,dragDirectionLock:i,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:p}}}function Pc(e,t,a){return(t===!0||t===e)&&(a===null||a===e)}function kC(e,t=10){let a=null;return Math.abs(e.y)>t?a="y":Math.abs(e.x)>t&&(a="x"),a}class TC extends hi{constructor(t){super(t),this.removeGroupControls=Qt,this.removeListeners=Qt,this.controls=new SC(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Qt}unmount(){this.removeGroupControls(),this.removeListeners()}}const Dx=e=>(t,a)=>{e&&Be.postRender(()=>e(t,a))};class jC extends hi{constructor(){super(...arguments),this.removePointerDownListener=Qt}onPointerDown(t){this.session=new V4(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:P4(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:a,onPan:i,onPanEnd:o}=this.node.getProps();return{onSessionStart:Dx(t),onStart:Dx(a),onMove:i,onEnd:(l,u)=>{delete this.session,o&&Be.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=Vo(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const ru={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Px(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const wo={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(ge.test(e))e=parseFloat(e);else return e;const a=Px(e,t.target.x),i=Px(e,t.target.y);return`${a}% ${i}%`}},CC={correct:(e,{treeScale:t,projectionDelta:a})=>{const i=e,o=di.parse(e);if(o.length>5)return i;const l=di.createTransformer(e),u=typeof o[0]!="number"?1:0,p=a.x.scale*t.x,f=a.y.scale*t.y;o[0+u]/=p,o[1+u]/=f;const g=et(p,f,.5);return typeof o[2+u]=="number"&&(o[2+u]/=g),typeof o[3+u]=="number"&&(o[3+u]/=g),l(o)}};let Hp=!1;class AC extends j.Component{componentDidMount(){const{visualElement:t,layoutGroup:a,switchLayoutGroup:i,layoutId:o}=this.props,{projection:l}=t;Xj(EC),l&&(a.group&&a.group.add(l),i&&i.register&&o&&i.register(l),Hp&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),ru.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:a,visualElement:i,drag:o,isPresent:l}=this.props,{projection:u}=i;return u&&(u.isPresent=l,Hp=!0,o||t.layoutDependency!==a||a===void 0||t.isPresent!==l?u.willUpdate():this.safeToRemove(),t.isPresent!==l&&(l?u.promote():u.relegate()||Be.postRender(()=>{const p=u.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),em.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:a,switchLayoutGroup:i}=this.props,{projection:o}=t;Hp=!0,o&&(o.scheduleCheckAfterUnmount(),a&&a.group&&a.group.remove(o),i&&i.deregister&&i.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function B4(e){const[t,a]=r4(),i=j.useContext(zg);return d.jsx(AC,{...e,layoutGroup:i,switchLayoutGroup:j.useContext(x4),isPresent:t,safeToRemove:a})}const EC={borderRadius:{...wo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:wo,borderTopRightRadius:wo,borderBottomLeftRadius:wo,borderBottomRightRadius:wo,boxShadow:CC};function MC(e,t,a){const i=Bt(e)?e:Pn(e);return i.start(dm("",i,t,a)),i.animation}const zC=(e,t)=>e.depth-t.depth;class RC{constructor(){this.children=[],this.isDirty=!1}add(t){Lg(this.children,t),this.isDirty=!0}remove(t){Og(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(zC),this.isDirty=!1,this.children.forEach(t)}}function LC(e,t){const a=Xt.now(),i=({timestamp:o})=>{const l=o-a;l>=t&&(Bn(i),e(l-t))};return Be.setup(i,!0),()=>Bn(i)}const _4=["TopLeft","TopRight","BottomLeft","BottomRight"],OC=_4.length,Vx=e=>typeof e=="string"?parseFloat(e):e,Nx=e=>typeof e=="number"||ge.test(e);function DC(e,t,a,i,o,l){o?(e.opacity=et(0,a.opacity??1,PC(i)),e.opacityExit=et(t.opacity??1,0,VC(i))):l&&(e.opacity=et(t.opacity??1,a.opacity??1,i));for(let u=0;u<OC;u++){const p=`border${_4[u]}Radius`;let f=Bx(t,p),g=Bx(a,p);if(f===void 0&&g===void 0)continue;f||(f=0),g||(g=0),f===0||g===0||Nx(f)===Nx(g)?(e[p]=Math.max(et(Vx(f),Vx(g),i),0),(oa.test(g)||oa.test(f))&&(e[p]+="%")):e[p]=g}(t.rotate||a.rotate)&&(e.rotate=et(t.rotate||0,a.rotate||0,i))}function Bx(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const PC=$4(0,.5,k5),VC=$4(.5,.95,Qt);function $4(e,t,a){return i=>i<e?0:i>t?1:a(ts(e,t,i))}function _x(e,t){e.min=t.min,e.max=t.max}function An(e,t){_x(e.x,t.x),_x(e.y,t.y)}function $x(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Hx(e,t,a,i,o){return e-=t,e=yu(e,1/a,i),o!==void 0&&(e=yu(e,1/o,i)),e}function NC(e,t=0,a=1,i=.5,o,l=e,u=e){if(oa.test(t)&&(t=parseFloat(t),t=et(u.min,u.max,t/100)-u.min),typeof t!="number")return;let p=et(l.min,l.max,i);e===l&&(p-=t),e.min=Hx(e.min,t,a,p,o),e.max=Hx(e.max,t,a,p,o)}function Ux(e,t,[a,i,o],l,u){NC(e,t[a],t[i],t[o],t.scale,l,u)}const BC=["x","scaleX","originX"],_C=["y","scaleY","originY"];function Gx(e,t,a,i){Ux(e.x,t,BC,a?a.x:void 0,i?i.x:void 0),Ux(e.y,t,_C,a?a.y:void 0,i?i.y:void 0)}function Ix(e){return e.translate===0&&e.scale===1}function H4(e){return Ix(e.x)&&Ix(e.y)}function Fx(e,t){return e.min===t.min&&e.max===t.max}function $C(e,t){return Fx(e.x,t.x)&&Fx(e.y,t.y)}function qx(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function U4(e,t){return qx(e.x,t.x)&&qx(e.y,t.y)}function Kx(e){return Ht(e.x)/Ht(e.y)}function Yx(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class HC{constructor(){this.members=[]}add(t){Lg(this.members,t),t.scheduleRender()}remove(t){if(Og(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const a=this.members[this.members.length-1];a&&this.promote(a)}}relegate(t){const a=this.members.findIndex(o=>t===o);if(a===0)return!1;let i;for(let o=a;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){i=l;break}}return i?(this.promote(i),!0):!1}promote(t,a){const i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.instance&&i.scheduleRender(),t.scheduleRender(),t.resumeFrom=i,a&&(t.resumeFrom.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:a,resumingFrom:i}=t;a.onExitComplete&&a.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function UC(e,t,a){let i="";const o=e.x.translate/t.x,l=e.y.translate/t.y,u=(a==null?void 0:a.z)||0;if((o||l||u)&&(i=`translate3d(${o}px, ${l}px, ${u}px) `),(t.x!==1||t.y!==1)&&(i+=`scale(${1/t.x}, ${1/t.y}) `),a){const{transformPerspective:g,rotate:m,rotateX:x,rotateY:y,skewX:v,skewY:S}=a;g&&(i=`perspective(${g}px) ${i}`),m&&(i+=`rotate(${m}deg) `),x&&(i+=`rotateX(${x}deg) `),y&&(i+=`rotateY(${y}deg) `),v&&(i+=`skewX(${v}deg) `),S&&(i+=`skewY(${S}deg) `)}const p=e.x.scale*t.x,f=e.y.scale*t.y;return(p!==1||f!==1)&&(i+=`scale(${p}, ${f})`),i||"none"}const Up=["","X","Y","Z"],GC=1e3;let IC=0;function Gp(e,t,a,i){const{latestValues:o}=t;o[e]&&(a[e]=o[e],t.setStaticValue(e,0),i&&(i[e]=0))}function G4(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const a=E4(t);if(window.MotionHasOptimisedAnimation(a,"transform")){const{layout:o,layoutId:l}=e.options;window.MotionCancelOptimisedAnimation(a,"transform",Be,!(o||l))}const{parent:i}=e;i&&!i.hasCheckedOptimisedAppear&&G4(i)}function I4({attachResizeListener:e,defaultParent:t,measureScroll:a,checkIsScrollRoot:i,resetTransform:o}){return class{constructor(u={},p=t==null?void 0:t()){this.id=IC++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(KC),this.nodes.forEach(QC),this.nodes.forEach(ZC),this.nodes.forEach(YC)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new RC)}addEventListener(u,p){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Pg),this.eventHandlers.get(u).add(p)}notifyListeners(u,...p){const f=this.eventHandlers.get(u);f&&f.notify(...p)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=nm(u)&&!Pj(u),this.instance=u;const{layoutId:p,layout:f,visualElement:g}=this.options;if(g&&!g.current&&g.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(f||p)&&(this.isLayoutDirty=!0),e){let m,x=0;const y=()=>this.root.updateBlockedByResize=!1;Be.read(()=>{x=window.innerWidth}),e(u,()=>{const v=window.innerWidth;v!==x&&(x=v,this.root.updateBlockedByResize=!0,m&&m(),m=LC(y,250),ru.hasAnimatedSinceResize&&(ru.hasAnimatedSinceResize=!1,this.nodes.forEach(Qx)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&g&&(p||f)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:x,hasRelativeLayoutChanged:y,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||g.getDefaultTransition()||aA,{onLayoutAnimationStart:k,onLayoutAnimationComplete:A}=g.getProps(),M=!this.targetLayout||!U4(this.targetLayout,v),z=!x&&y;if(this.options.layoutRoot||this.resumeFrom||z||x&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const C={...Qg(S,"layout"),onPlay:k,onComplete:A};(g.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C),this.setAnimationOrigin(m,z)}else x||Qx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Bn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(JC),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&G4(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const x=this.path[m];x.shouldResetTransform=!0,x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:p,layout:f}=this.options;if(p===void 0&&!f)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Xx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Wx);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(WC),this.nodes.forEach(FC),this.nodes.forEach(qC)):this.nodes.forEach(Wx),this.clearAllSnapshots();const p=Xt.now();Tt.delta=ca(0,1e3/60,p-Tt.timestamp),Tt.timestamp=p,Tt.isProcessing=!0,Rp.update.process(Tt),Rp.preRender.process(Tt),Rp.render.process(Tt),Tt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,em.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(XC),this.sharedNodes.forEach(eA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Be.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Be.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ht(this.snapshot.measuredBox.x)&&!Ht(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ot(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(p=!1),p&&this.instance){const f=i(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:f,offset:a(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!H4(this.projectionDelta),f=this.getTransformTemplate(),g=f?f(this.latestValues,""):void 0,m=g!==this.prevTransformTemplateValue;u&&this.instance&&(p||Ni(this.latestValues)||m)&&(o(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const p=this.measurePageBox();let f=this.removeElementScroll(p);return u&&(f=this.removeTransform(f)),iA(f),{animationId:this.root.animationId,measuredBox:p,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:u}=this.options;if(!u)return ot();const p=u.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(rA))){const{scroll:m}=this.root;m&&(qr(p.x,m.offset.x),qr(p.y,m.offset.y))}return p}removeElementScroll(u){var f;const p=ot();if(An(p,u),(f=this.scroll)!=null&&f.wasRoot)return p;for(let g=0;g<this.path.length;g++){const m=this.path[g],{scroll:x,options:y}=m;m!==this.root&&x&&y.layoutScroll&&(x.wasRoot&&An(p,u),qr(p.x,x.offset.x),qr(p.y,x.offset.y))}return p}applyTransform(u,p=!1){const f=ot();An(f,u);for(let g=0;g<this.path.length;g++){const m=this.path[g];!p&&m.options.layoutScroll&&m.scroll&&m!==m.root&&Kr(f,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),Ni(m.latestValues)&&Kr(f,m.latestValues)}return Ni(this.latestValues)&&Kr(f,this.latestValues),f}removeTransform(u){const p=ot();An(p,u);for(let f=0;f<this.path.length;f++){const g=this.path[f];if(!g.instance||!Ni(g.latestValues))continue;$h(g.latestValues)&&g.updateSnapshot();const m=ot(),x=g.measurePageBox();An(m,x),Gx(p,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,m)}return Ni(this.latestValues)&&Gx(p,this.latestValues),p}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Tt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var y;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==p;if(!(u||f&&this.isSharedProjectionDirty||this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:x}=this.options;if(!(!this.layout||!(m||x))){if(this.resolvedRelativeTargetAt=Tt.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ot(),this.relativeTargetOrigin=ot(),Bo(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),An(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ot(),this.targetWithTransforms=ot()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),dC(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):An(this.target,this.layout.layoutBox),S4(this.target,this.targetDelta)):An(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ot(),this.relativeTargetOrigin=ot(),Bo(this.relativeTargetOrigin,this.target,v.target),An(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||$h(this.parent.latestValues)||w4(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var S;const u=this.getLead(),p=!!this.resumingFrom||this!==u;let f=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(f=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===Tt.timestamp&&(f=!1),f)return;const{layout:g,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||m))return;An(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,y=this.treeScale.y;k7(this.layoutCorrected,this.treeScale,this.path,p),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=ot());const{target:v}=u;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():($x(this.prevProjectionDelta.x,this.projectionDelta.x),$x(this.prevProjectionDelta.y,this.projectionDelta.y)),No(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==y||!Yx(this.projectionDelta.x,this.prevProjectionDelta.x)||!Yx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var p;if((p=this.options.visualElement)==null||p.scheduleRender(),u){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Yr(),this.projectionDelta=Yr(),this.projectionDeltaWithTransform=Yr()}setAnimationOrigin(u,p=!1){const f=this.snapshot,g=f?f.latestValues:{},m={...this.latestValues},x=Yr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const y=ot(),v=f?f.source:void 0,S=this.layout?this.layout.source:void 0,k=v!==S,A=this.getStack(),M=!A||A.members.length<=1,z=!!(k&&!M&&this.options.crossfade===!0&&!this.path.some(nA));this.animationProgress=0;let C;this.mixTargetDelta=H=>{const E=H/1e3;Zx(x.x,u.x,E),Zx(x.y,u.y,E),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Bo(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox),tA(this.relativeTarget,this.relativeTargetOrigin,y,E),C&&$C(this.relativeTarget,C)&&(this.isProjectionDirty=!1),C||(C=ot()),An(C,this.relativeTarget)),k&&(this.animationValues=m,DC(m,g,this.latestValues,E,z,M)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=E},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){var p,f,g;this.notifyListeners("animationStart"),(p=this.currentAnimation)==null||p.stop(),(g=(f=this.resumingFrom)==null?void 0:f.currentAnimation)==null||g.stop(),this.pendingAnimation&&(Bn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Be.update(()=>{ru.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Pn(0)),this.currentAnimation=MC(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:m=>{this.mixTargetDelta(m),u.onUpdate&&u.onUpdate(m)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(GC),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:p,target:f,layout:g,latestValues:m}=u;if(!(!p||!f||!g)){if(this!==u&&this.layout&&g&&F4(this.options.animationType,this.layout.layoutBox,g.layoutBox)){f=this.target||ot();const x=Ht(this.layout.layoutBox.x);f.x.min=u.target.x.min,f.x.max=f.x.min+x;const y=Ht(this.layout.layoutBox.y);f.y.min=u.target.y.min,f.y.max=f.y.min+y}An(p,f),Kr(p,m),No(this.projectionDeltaWithTransform,this.layoutCorrected,p,m)}}registerSharedNode(u,p){this.sharedNodes.has(u)||this.sharedNodes.set(u,new HC),this.sharedNodes.get(u).add(p);const g=p.options.initialPromotionConfig;p.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(p):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var p;const{layoutId:u}=this.options;return u?((p=this.getStack())==null?void 0:p.lead)||this:this}getPrevLead(){var p;const{layoutId:u}=this.options;return u?(p=this.getStack())==null?void 0:p.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:p,preserveFollowOpacity:f}={}){const g=this.getStack();g&&g.promote(this,f),u&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let p=!1;const{latestValues:f}=u;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(p=!0),!p)return;const g={};f.z&&Gp("z",u,g,this.animationValues);for(let m=0;m<Up.length;m++)Gp(`rotate${Up[m]}`,u,g,this.animationValues),Gp(`skew${Up[m]}`,u,g,this.animationValues);u.render();for(const m in g)u.setStaticValue(m,g[m]),this.animationValues&&(this.animationValues[m]=g[m]);u.scheduleRender()}applyProjectionStyles(u,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const f=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=iu(p==null?void 0:p.pointerEvents)||"",u.transform=f?f(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=iu(p==null?void 0:p.pointerEvents)||""),this.hasProjected&&!Ni(this.latestValues)&&(u.transform=f?f({},""):"none",this.hasProjected=!1);return}u.visibility="";const m=g.animationValues||g.latestValues;this.applyTransformsToTarget();let x=UC(this.projectionDeltaWithTransform,this.treeScale,m);f&&(x=f(m,x)),u.transform=x;const{x:y,y:v}=this.projectionDelta;u.transformOrigin=`${y.origin*100}% ${v.origin*100}% 0`,g.animationValues?u.opacity=g===this?m.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:u.opacity=g===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const S in Zo){if(m[S]===void 0)continue;const{correct:k,applyTo:A,isCSSVariable:M}=Zo[S],z=x==="none"?m[S]:k(m[S],g);if(A){const C=A.length;for(let H=0;H<C;H++)u[A[H]]=z}else M?this.options.visualElement.renderState.vars[S]=z:u[S]=z}this.options.layoutId&&(u.pointerEvents=g===this?iu(p==null?void 0:p.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var p;return(p=u.currentAnimation)==null?void 0:p.stop()}),this.root.nodes.forEach(Xx),this.root.sharedNodes.clear()}}}function FC(e){e.updateLayout()}function qC(e){var a;const t=((a=e.resumeFrom)==null?void 0:a.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:o}=e.layout,{animationType:l}=e.options,u=t.source!==e.layout.source;l==="size"?En(x=>{const y=u?t.measuredBox[x]:t.layoutBox[x],v=Ht(y);y.min=i[x].min,y.max=y.min+v}):F4(l,t.layoutBox,i)&&En(x=>{const y=u?t.measuredBox[x]:t.layoutBox[x],v=Ht(i[x]);y.max=y.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[x].max=e.relativeTarget[x].min+v)});const p=Yr();No(p,i,t.layoutBox);const f=Yr();u?No(f,e.applyTransform(o,!0),t.measuredBox):No(f,i,t.layoutBox);const g=!H4(p);let m=!1;if(!e.resumeFrom){const x=e.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:y,layout:v}=x;if(y&&v){const S=ot();Bo(S,t.layoutBox,y.layoutBox);const k=ot();Bo(k,i,v.layoutBox),U4(S,k)||(m=!0),x.options.layoutRoot&&(e.relativeTarget=k,e.relativeTargetOrigin=S,e.relativeParent=x)}}}e.notifyListeners("didUpdate",{layout:i,snapshot:t,delta:f,layoutDelta:p,hasLayoutChanged:g,hasRelativeLayoutChanged:m})}else if(e.isLead()){const{onExitComplete:i}=e.options;i&&i()}e.options.transition=void 0}function KC(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function YC(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function XC(e){e.clearSnapshot()}function Xx(e){e.clearMeasurements()}function Wx(e){e.isLayoutDirty=!1}function WC(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Qx(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function QC(e){e.resolveTargetDelta()}function ZC(e){e.calcProjection()}function JC(e){e.resetSkewAndRotation()}function eA(e){e.removeLeadSnapshot()}function Zx(e,t,a){e.translate=et(t.translate,0,a),e.scale=et(t.scale,1,a),e.origin=t.origin,e.originPoint=t.originPoint}function Jx(e,t,a,i){e.min=et(t.min,a.min,i),e.max=et(t.max,a.max,i)}function tA(e,t,a,i){Jx(e.x,t.x,a.x,i),Jx(e.y,t.y,a.y,i)}function nA(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const aA={duration:.45,ease:[.4,0,.1,1]},ey=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),ty=ey("applewebkit/")&&!ey("chrome/")?Math.round:Qt;function ny(e){e.min=ty(e.min),e.max=ty(e.max)}function iA(e){ny(e.x),ny(e.y)}function F4(e,t,a){return e==="position"||e==="preserve-aspect"&&!uC(Kx(t),Kx(a),.2)}function rA(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const sA=I4({attachResizeListener:(e,t)=>Jo(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ip={current:void 0},q4=I4({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Ip.current){const e=new sA({});e.mount(window),e.setOptions({layoutScroll:!0}),Ip.current=e}return Ip.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),oA={pan:{Feature:jC},drag:{Feature:TC,ProjectionNode:q4,MeasureLayout:B4}};function ay(e,t,a){const{props:i}=e;e.animationState&&i.whileHover&&e.animationState.setActive("whileHover",a==="Start");const o="onHover"+a,l=i[o];l&&Be.postRender(()=>l(t,fl(t)))}class lA extends hi{mount(){const{current:t}=this.node;t&&(this.unmount=wj(t,(a,i)=>(ay(this.node,i,"Start"),o=>ay(this.node,o,"End"))))}unmount(){}}class cA extends hi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=cl(Jo(this.node.current,"focus",()=>this.onFocus()),Jo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function iy(e,t,a){const{props:i}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&i.whileTap&&e.animationState.setActive("whileTap",a==="Start");const o="onTap"+(a==="End"?"":a),l=i[o];l&&Be.postRender(()=>l(t,fl(t)))}class uA extends hi{mount(){const{current:t}=this.node;t&&(this.unmount=jj(t,(a,i)=>(iy(this.node,i,"Start"),(o,{success:l})=>iy(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Kh=new WeakMap,Fp=new WeakMap,dA=e=>{const t=Kh.get(e.target);t&&t(e)},fA=e=>{e.forEach(dA)};function pA({root:e,...t}){const a=e||document;Fp.has(a)||Fp.set(a,{});const i=Fp.get(a),o=JSON.stringify(t);return i[o]||(i[o]=new IntersectionObserver(fA,{root:e,...t})),i[o]}function hA(e,t,a){const i=pA(t);return Kh.set(e,a),i.observe(e),()=>{Kh.delete(e),i.unobserve(e)}}const gA={some:0,all:1};class mA extends hi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:a,margin:i,amount:o="some",once:l}=t,u={root:a?a.current:void 0,rootMargin:i,threshold:typeof o=="number"?o:gA[o]},p=f=>{const{isIntersecting:g}=f;if(this.isInView===g||(this.isInView=g,l&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:m,onViewportLeave:x}=this.node.getProps(),y=g?m:x;y&&y(f)};return hA(this.node.current,u,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:a}=this.node;["amount","margin","root"].some(bA(t,a))&&this.startObserver()}unmount(){}}function bA({viewport:e={}},{viewport:t={}}={}){return a=>e[a]!==t[a]}const xA={inView:{Feature:mA},tap:{Feature:uA},focus:{Feature:cA},hover:{Feature:lA}},yA={layout:{ProjectionNode:q4,MeasureLayout:B4}},vA={...iC,...xA,...oA,...yA},ie=v7(vA,O7),wA=50,ry=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),SA=()=>({time:0,x:ry(),y:ry()}),kA={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function sy(e,t,a,i){const o=a[t],{length:l,position:u}=kA[t],p=o.current,f=a.time;o.current=e[`scroll${u}`],o.scrollLength=e[`scroll${l}`]-e[`client${l}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=ts(0,o.scrollLength,o.current);const g=i-f;o.velocity=g>wA?0:Vg(o.current-p,g)}function TA(e,t,a){sy(e,"x",t,a),sy(e,"y",t,a),t.time=a}function jA(e,t){const a={x:0,y:0};let i=e;for(;i&&i!==t;)if(Jg(i))a.x+=i.offsetLeft,a.y+=i.offsetTop,i=i.offsetParent;else if(i.tagName==="svg"){const o=i.getBoundingClientRect();i=i.parentElement;const l=i.getBoundingClientRect();a.x+=o.left-l.left,a.y+=o.top-l.top}else if(i instanceof SVGGraphicsElement){const{x:o,y:l}=i.getBBox();a.x+=o,a.y+=l;let u=null,p=i.parentNode;for(;!u;)p.tagName==="svg"&&(u=p),p=i.parentNode;i=u}else break;return a}const Yh={start:0,center:.5,end:1};function oy(e,t,a=0){let i=0;if(e in Yh&&(e=Yh[e]),typeof e=="string"){const o=parseFloat(e);e.endsWith("px")?i=o:e.endsWith("%")?e=o/100:e.endsWith("vw")?i=o/100*document.documentElement.clientWidth:e.endsWith("vh")?i=o/100*document.documentElement.clientHeight:e=o}return typeof e=="number"&&(i=t*e),a+i}const CA=[0,0];function AA(e,t,a,i){let o=Array.isArray(e)?e:CA,l=0,u=0;return typeof e=="number"?o=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?o=e.split(" "):o=[e,Yh[e]?e:"0"]),l=oy(o[0],a,i),u=oy(o[1],t),l-u}const EA={All:[[0,0],[1,1]]},MA={x:0,y:0};function zA(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function RA(e,t,a){const{offset:i=EA.All}=a,{target:o=e,axis:l="y"}=a,u=l==="y"?"height":"width",p=o!==e?jA(o,e):MA,f=o===e?{width:e.scrollWidth,height:e.scrollHeight}:zA(o),g={width:e.clientWidth,height:e.clientHeight};t[l].offset.length=0;let m=!t[l].interpolate;const x=i.length;for(let y=0;y<x;y++){const v=AA(i[y],g[u],f[u],p[l]);!m&&v!==t[l].interpolatorOffsets[y]&&(m=!0),t[l].offset[y]=v}m&&(t[l].interpolate=qg(t[l].offset,N5(i),{clamp:!1}),t[l].interpolatorOffsets=[...t[l].offset]),t[l].progress=ca(0,1,t[l].interpolate(t[l].current))}function LA(e,t=e,a){if(a.x.targetOffset=0,a.y.targetOffset=0,t!==e){let i=t;for(;i&&i!==e;)a.x.targetOffset+=i.offsetLeft,a.y.targetOffset+=i.offsetTop,i=i.offsetParent}a.x.targetLength=t===e?t.scrollWidth:t.clientWidth,a.y.targetLength=t===e?t.scrollHeight:t.clientHeight,a.x.containerLength=e.clientWidth,a.y.containerLength=e.clientHeight}function OA(e,t,a,i={}){return{measure:o=>{LA(e,i.target,a),TA(e,a,o),(i.offset||i.target)&&RA(e,a,i)},notify:()=>t(a)}}const So=new WeakMap,ly=new WeakMap,qp=new WeakMap,cy=e=>e===document.scrollingElement?window:e;function K4(e,{container:t=document.scrollingElement,...a}={}){if(!t)return Qt;let i=qp.get(t);i||(i=new Set,qp.set(t,i));const o=SA(),l=OA(t,e,o,a);if(i.add(l),!So.has(t)){const p=()=>{for(const x of i)x.measure(Tt.timestamp);Be.preUpdate(f)},f=()=>{for(const x of i)x.notify()},g=()=>Be.read(p);So.set(t,g);const m=cy(t);window.addEventListener("resize",g,{passive:!0}),t!==document.documentElement&&ly.set(t,Dj(t,g)),m.addEventListener("scroll",g,{passive:!0}),g()}const u=So.get(t);return Be.read(u,!1,!0),()=>{var g;Bn(u);const p=qp.get(t);if(!p||(p.delete(l),p.size))return;const f=So.get(t);So.delete(t),f&&(cy(t).removeEventListener("scroll",f),(g=ly.get(t))==null||g(),window.removeEventListener("resize",f))}}const uy=new Map;function DA(e){const t={value:0},a=K4(i=>{t.value=i[e.axis].progress*100},e);return{currentTime:t,cancel:a}}function Y4({source:e,container:t,...a}){const{axis:i}=a;e&&(t=e);const o=uy.get(t)??new Map;uy.set(t,o);const l=a.target??"self",u=o.get(l)??{},p=i+(a.offset??[]).join(",");return u[p]||(u[p]=!a.target&&H5()?new ScrollTimeline({source:t,axis:i}):DA({container:t,...a})),u[p]}function PA(e,t){const a=Y4(t);return e.attachTimeline({timeline:t.target?void 0:a,observe:i=>(i.pause(),i4(o=>{i.time=i.duration*o},a))})}function VA(e){return e.length===2}function NA(e,t){return VA(e)?K4(a=>{e(a[t.axis].progress,a)},t):i4(e,Y4(t))}function BA(e,{axis:t="y",container:a=document.scrollingElement,...i}={}){if(!a)return Qt;const o={axis:t,container:a,...i};return typeof e=="function"?NA(e,o):PA(e,o)}const _A=()=>({scrollX:Pn(0),scrollY:Pn(0),scrollXProgress:Pn(0),scrollYProgress:Pn(0)}),Vc=e=>e?!e.current:!1;function $A({container:e,target:t,...a}={}){const i=hs(_A),o=j.useRef(null),l=j.useRef(!1),u=j.useCallback(()=>(o.current=BA((p,{x:f,y:g})=>{i.scrollX.set(f.current),i.scrollXProgress.set(f.progress),i.scrollY.set(g.current),i.scrollYProgress.set(g.progress)},{...a,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0}),()=>{var p;(p=o.current)==null||p.call(o)}),[e,t,JSON.stringify(a.offset)]);return Gu(()=>{if(l.current=!1,Vc(e)||Vc(t)){l.current=!0;return}else return u()},[u]),j.useEffect(()=>{if(l.current)return Yo(!Vc(e)),Yo(!Vc(t)),u()},[u]),i}function HA(e){const t=hs(()=>Pn(e)),{isStatic:a}=j.useContext(qu);if(a){const[,i]=j.useState(e);j.useEffect(()=>t.on("change",i),[])}return t}function X4(e,t){const a=HA(t()),i=()=>a.set(t());return i(),Gu(()=>{const o=()=>Be.preRender(i,!1,!0),l=e.map(u=>u.on("change",o));return()=>{l.forEach(u=>u()),Bn(i)}}),a}function UA(e){Po.current=[],e();const t=X4(Po.current,e);return Po.current=void 0,t}function dy(e,t,a,i){if(typeof e=="function")return UA(e);const o=typeof t=="function"?t:Vj(t,a,i);return Array.isArray(e)?fy(e,o):fy([e],([l])=>o(l))}function fy(e,t){const a=hs(()=>[]);return X4(e,()=>{a.length=0;const i=e.length;for(let o=0;o<i;o++)a[o]=e[o].get();return t(a)})}var W4={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},py=Ae.createContext&&Ae.createContext(W4),GA=["attr","size","title"];function IA(e,t){if(e==null)return{};var a=FA(e,t),i,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)i=l[o],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}function FA(e,t){if(e==null)return{};var a={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(t.indexOf(i)>=0)continue;a[i]=e[i]}return a}function vu(){return vu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},vu.apply(this,arguments)}function hy(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),a.push.apply(a,i)}return a}function wu(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?hy(Object(a),!0).forEach(function(i){qA(e,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):hy(Object(a)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))})}return e}function qA(e,t,a){return t=KA(t),t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function KA(e){var t=YA(e,"string");return typeof t=="symbol"?t:t+""}function YA(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var i=a.call(e,t);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Q4(e){return e&&e.map((t,a)=>Ae.createElement(t.tag,wu({key:a},t.attr),Q4(t.child)))}function me(e){return t=>Ae.createElement(XA,vu({attr:wu({},e.attr)},t),Q4(e.child))}function XA(e){var t=a=>{var{attr:i,size:o,title:l}=e,u=IA(e,GA),p=o||a.size||"1em",f;return a.className&&(f=a.className),e.className&&(f=(f?f+" ":"")+e.className),Ae.createElement("svg",vu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,i,u,{className:f,style:wu(wu({color:e.color||a.color},a.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),l&&Ae.createElement("title",null,l),e.children)};return py!==void 0?Ae.createElement(py.Consumer,null,a=>t(a)):t(W4)}function WA(e){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(e)}function _n(e){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function QA(e){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(e)}function ZA(e){return me({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56l72-144zm511.98 160c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02zM440 320l72-144 72 144H440zm88 128H352V153.25c23.51-10.29 41.16-31.48 46.39-57.25H528c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H383.64C369.04 12.68 346.09 0 320 0s-49.04 12.68-63.64 32H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h129.61c5.23 25.76 22.87 46.96 46.39 57.25V448H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"},child:[]}]})(e)}function Wu(e){return me({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"},child:[]}]})(e)}function JA(e){return me({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M256.47 216.77l86.73 109.18s-16.6 102.36-76.57 150.12C206.66 523.85 0 510.19 0 510.19s3.8-23.14 11-55.43l94.62-112.17c3.97-4.7-.87-11.62-6.65-9.5l-60.4 22.09c14.44-41.66 32.72-80.04 54.6-97.47 59.97-47.76 163.3-40.94 163.3-40.94zM636.53 31.03l-19.86-25c-5.49-6.9-15.52-8.05-22.41-2.56l-232.48 177.8-34.14-42.97c-5.09-6.41-15.14-5.21-18.59 2.21l-25.33 54.55 86.73 109.18 58.8-12.45c8-1.69 11.42-11.2 6.34-17.6l-34.09-42.92 232.48-177.8c6.89-5.48 8.04-15.53 2.55-22.44z"},child:[]}]})(e)}function Z4(e){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(e)}function pl(e){return me({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z"},child:[]}]})(e)}function eE(e){return me({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"},child:[]}]})(e)}function gy(e){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(e)}function tE(e){return me({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(e)}function qi(e){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(e)}function jt(e){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function Kt(e){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function J4(e){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(e)}function fm(e){return me({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(e)}function my(e){return me({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"},child:[]}]})(e)}function nE(e){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function el(e){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"},child:[]}]})(e)}function aE(e){return me({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M104 96H56c-13.3 0-24 10.7-24 24v104H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h24v104c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm528 128h-24V120c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h24c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM456 32h-48c-13.3 0-24 10.7-24 24v168H256V56c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h128v168c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24z"},child:[]}]})(e)}function ui(e){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function Su(e){return me({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M310.706 413.765c-1.314-6.63-7.835-10.872-14.424-9.369-10.692 2.439-27.422 5.413-45.426 5.413-56.763 0-101.929-34.79-121.461-85.449h113.689a12 12 0 0 0 11.708-9.369l6.373-28.36c1.686-7.502-4.019-14.631-11.708-14.631H115.22c-1.21-14.328-1.414-28.287.137-42.245H261.95a12 12 0 0 0 11.723-9.434l6.512-29.755c1.638-7.484-4.061-14.566-11.723-14.566H130.184c20.633-44.991 62.69-75.03 117.619-75.03 14.486 0 28.564 2.25 37.851 4.145 6.216 1.268 12.347-2.498 14.002-8.623l11.991-44.368c1.822-6.741-2.465-13.616-9.326-14.917C290.217 34.912 270.71 32 249.635 32 152.451 32 74.03 92.252 45.075 176H12c-6.627 0-12 5.373-12 12v29.755c0 6.627 5.373 12 12 12h21.569c-1.009 13.607-1.181 29.287-.181 42.245H12c-6.627 0-12 5.373-12 12v28.36c0 6.627 5.373 12 12 12h30.114C67.139 414.692 145.264 480 249.635 480c26.301 0 48.562-4.544 61.101-7.788 6.167-1.595 10.027-7.708 8.788-13.957l-8.818-44.49z"},child:[]}]})(e)}function iE(e){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"},child:[]}]})(e)}function by(e){return me({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z"},child:[]}]})(e)}function Xh(e){return me({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(e)}function rE(e){return me({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(e)}function e3(e){return me({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M571.31 193.94l-22.63-22.63c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31-28.9-28.9c5.63-21.31.36-44.9-16.35-61.61l-45.25-45.25c-62.48-62.48-163.79-62.48-226.28 0l90.51 45.25v18.75c0 16.97 6.74 33.25 18.75 45.25l49.14 49.14c16.71 16.71 40.3 21.98 61.61 16.35l28.9 28.9-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l90.51-90.51c6.23-6.24 6.23-16.37-.02-22.62zm-286.72-15.2c-3.7-3.7-6.84-7.79-9.85-11.95L19.64 404.96c-25.57 23.88-26.26 64.19-1.53 88.93s65.05 24.05 88.93-1.53l238.13-255.07c-3.96-2.91-7.9-5.87-11.44-9.41l-49.14-49.14z"},child:[]}]})(e)}function sE(e){return me({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"},child:[]}]})(e)}function t3(e){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"},child:[]}]})(e)}function n3(e){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M475.115 163.781L336 252.309v-68.28c0-18.916-20.931-30.399-36.885-20.248L160 252.309V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h464c13.255 0 24-10.745 24-24V184.029c0-18.917-20.931-30.399-36.885-20.248z"},child:[]}]})(e)}function xy(e){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(e)}function ku(e){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"},child:[]}]})(e)}function oE(e){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm173.696 119.559l-63.399 63.399c-10.987-18.559-26.67-34.252-45.255-45.255l63.399-63.399a218.396 218.396 0 0 1 45.255 45.255zM256 352c-53.019 0-96-42.981-96-96s42.981-96 96-96 96 42.981 96 96-42.981 96-96 96zM127.559 82.304l63.399 63.399c-18.559 10.987-34.252 26.67-45.255 45.255l-63.399-63.399a218.372 218.372 0 0 1 45.255-45.255zM82.304 384.441l63.399-63.399c10.987 18.559 26.67 34.252 45.255 45.255l-63.399 63.399a218.396 218.396 0 0 1-45.255-45.255zm302.137 45.255l-63.399-63.399c18.559-10.987 34.252-26.67 45.255-45.255l63.399 63.399a218.403 218.403 0 0 1-45.255 45.255z"},child:[]}]})(e)}function _o(e){return me({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(e)}function lE(e){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(e)}function as(e){return me({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"},child:[]}]})(e)}function cE(e){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function a3(e){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"},child:[]}]})(e)}function uE(e){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(e)}function dE(e){return me({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M568.25 192c-29.04.13-135.01 6.16-213.84 83-33.12 29.63-53.36 63.3-66.41 94.86-13.05-31.56-33.29-65.23-66.41-94.86-78.83-76.84-184.8-82.87-213.84-83-4.41-.02-7.79 3.4-7.75 7.82.23 27.92 7.14 126.14 88.77 199.3C172.79 480.94 256 480 288 480s115.19.95 199.23-80.88c81.64-73.17 88.54-171.38 88.77-199.3.04-4.42-3.34-7.84-7.75-7.82zM287.98 302.6c12.82-18.85 27.6-35.78 44.09-50.52 19.09-18.61 39.58-33.3 60.26-45.18-16.44-70.5-51.72-133.05-96.73-172.22-4.11-3.58-11.02-3.58-15.14 0-44.99 39.14-80.27 101.63-96.74 172.07 20.37 11.7 40.5 26.14 59.22 44.39a282.768 282.768 0 0 1 45.04 51.46z"},child:[]}]})(e)}function fE(e){return me({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function pE(e){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"},child:[]}]})(e)}function hE(e){return me({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"},child:[]}]})(e)}function gE(e){return me({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function Tu(e){return me({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(e)}function mE(e){return me({attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(e)}function bE(e){return me({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"},child:[]}]})(e)}const xE=(e,t,a,i)=>{var l,u,p,f;const o=[a,{code:t,...i||{}}];if((u=(l=e==null?void 0:e.services)==null?void 0:l.logger)!=null&&u.forward)return e.services.logger.forward(o,"warn","react-i18next::",!0);Gi(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),(f=(p=e==null?void 0:e.services)==null?void 0:p.logger)!=null&&f.warn?e.services.logger.warn(...o):console!=null&&console.warn&&console.warn(...o)},yy={},Wh=(e,t,a,i)=>{Gi(a)&&yy[a]||(Gi(a)&&(yy[a]=new Date),xE(e,t,a,i))},i3=(e,t)=>()=>{if(e.isInitialized)t();else{const a=()=>{setTimeout(()=>{e.off("initialized",a)},0),t()};e.on("initialized",a)}},Qh=(e,t,a)=>{e.loadNamespaces(t,i3(e,a))},vy=(e,t,a,i)=>{if(Gi(a)&&(a=[a]),e.options.preload&&e.options.preload.indexOf(t)>-1)return Qh(e,a,i);a.forEach(o=>{e.options.ns.indexOf(o)<0&&e.options.ns.push(o)}),e.loadLanguages(t,i3(e,i))},yE=(e,t,a={})=>!t.languages||!t.languages.length?(Wh(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0):t.hasLoadedNamespace(e,{lng:a.lng,precheck:(i,o)=>{if(a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!o(i.isLanguageChangingTo,e))return!1}}),Gi=e=>typeof e=="string",vE=e=>typeof e=="object"&&e!==null,wE=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,SE={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},kE=e=>SE[e],TE=e=>e.replace(wE,kE);let Zh={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:TE};const jE=(e={})=>{Zh={...Zh,...e}},CE=()=>Zh;let r3;const AE=e=>{r3=e},EE=()=>r3,ME={type:"3rdParty",init(e){jE(e.options.react),AE(e)}},zE=j.createContext();class RE{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(a=>{this.usedNamespaces[a]||(this.usedNamespaces[a]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const LE=(e,t)=>{const a=j.useRef();return j.useEffect(()=>{a.current=e},[e,t]),a.current},s3=(e,t,a,i)=>e.getFixedT(t,a,i),OE=(e,t,a,i)=>j.useCallback(s3(e,t,a,i),[e,t,a,i]),Ie=(e,t={})=>{var H,E,V,N;const{i18n:a}=t,{i18n:i,defaultNS:o}=j.useContext(zE)||{},l=a||i||EE();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new RE),!l){Wh(l,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const O=(J,$)=>Gi($)?$:vE($)&&Gi($.defaultValue)?$.defaultValue:Array.isArray(J)?J[J.length-1]:J,X=[O,{},!1];return X.t=O,X.i18n={},X.ready=!1,X}(H=l.options.react)!=null&&H.wait&&Wh(l,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const u={...CE(),...l.options.react,...t},{useSuspense:p,keyPrefix:f}=u;let g=o||((E=l.options)==null?void 0:E.defaultNS);g=Gi(g)?[g]:g||["translation"],(N=(V=l.reportNamespaces).addUsedNamespaces)==null||N.call(V,g);const m=(l.isInitialized||l.initializedStoreOnce)&&g.every(O=>yE(O,l,u)),x=OE(l,t.lng||null,u.nsMode==="fallback"?g:g[0],f),y=()=>x,v=()=>s3(l,t.lng||null,u.nsMode==="fallback"?g:g[0],f),[S,k]=j.useState(y);let A=g.join();t.lng&&(A=`${t.lng}${A}`);const M=LE(A),z=j.useRef(!0);j.useEffect(()=>{const{bindI18n:O,bindI18nStore:X}=u;z.current=!0,!m&&!p&&(t.lng?vy(l,t.lng,g,()=>{z.current&&k(v)}):Qh(l,g,()=>{z.current&&k(v)})),m&&M&&M!==A&&z.current&&k(v);const J=()=>{z.current&&k(v)};return O&&(l==null||l.on(O,J)),X&&(l==null||l.store.on(X,J)),()=>{z.current=!1,l&&O&&(O==null||O.split(" ").forEach($=>l.off($,J))),X&&l&&X.split(" ").forEach($=>l.store.off($,J))}},[l,A]),j.useEffect(()=>{z.current&&m&&k(y)},[l,f,m]);const C=[S,l,m];if(C.t=S,C.i18n=l,C.ready=m,m||!m&&!p)return C;throw new Promise(O=>{t.lng?vy(l,t.lng,g,()=>O()):Qh(l,g,()=>O())})},be=e=>typeof e=="string",ko=()=>{let e,t;const a=new Promise((i,o)=>{e=i,t=o});return a.resolve=e,a.reject=t,a},wy=e=>e==null?"":""+e,DE=(e,t,a)=>{e.forEach(i=>{t[i]&&(a[i]=t[i])})},PE=/###/g,Sy=e=>e&&e.indexOf("###")>-1?e.replace(PE,"."):e,ky=e=>!e||be(e),$o=(e,t,a)=>{const i=be(t)?t.split("."):t;let o=0;for(;o<i.length-1;){if(ky(e))return{};const l=Sy(i[o]);!e[l]&&a&&(e[l]=new a),Object.prototype.hasOwnProperty.call(e,l)?e=e[l]:e={},++o}return ky(e)?{}:{obj:e,k:Sy(i[o])}},Ty=(e,t,a)=>{const{obj:i,k:o}=$o(e,t,Object);if(i!==void 0||t.length===1){i[o]=a;return}let l=t[t.length-1],u=t.slice(0,t.length-1),p=$o(e,u,Object);for(;p.obj===void 0&&u.length;)l=`${u[u.length-1]}.${l}`,u=u.slice(0,u.length-1),p=$o(e,u,Object),p!=null&&p.obj&&typeof p.obj[`${p.k}.${l}`]<"u"&&(p.obj=void 0);p.obj[`${p.k}.${l}`]=a},VE=(e,t,a,i)=>{const{obj:o,k:l}=$o(e,t,Object);o[l]=o[l]||[],o[l].push(a)},ju=(e,t)=>{const{obj:a,k:i}=$o(e,t);if(a&&Object.prototype.hasOwnProperty.call(a,i))return a[i]},NE=(e,t,a)=>{const i=ju(e,a);return i!==void 0?i:ju(t,a)},o3=(e,t,a)=>{for(const i in t)i!=="__proto__"&&i!=="constructor"&&(i in e?be(e[i])||e[i]instanceof String||be(t[i])||t[i]instanceof String?a&&(e[i]=t[i]):o3(e[i],t[i],a):e[i]=t[i]);return e},Pr=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var BE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const _E=e=>be(e)?e.replace(/[&<>"'\/]/g,t=>BE[t]):e;class $E{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const a=this.regExpMap.get(t);if(a!==void 0)return a;const i=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,i),this.regExpQueue.push(t),i}}const HE=[" ",",","?","!",";"],UE=new $E(20),GE=(e,t,a)=>{t=t||"",a=a||"";const i=HE.filter(u=>t.indexOf(u)<0&&a.indexOf(u)<0);if(i.length===0)return!0;const o=UE.getRegExp(`(${i.map(u=>u==="?"?"\\?":u).join("|")})`);let l=!o.test(e);if(!l){const u=e.indexOf(a);u>0&&!o.test(e.substring(0,u))&&(l=!0)}return l},Jh=function(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;const i=t.split(a);let o=e;for(let l=0;l<i.length;){if(!o||typeof o!="object")return;let u,p="";for(let f=l;f<i.length;++f)if(f!==l&&(p+=a),p+=i[f],u=o[p],u!==void 0){if(["string","number","boolean"].indexOf(typeof u)>-1&&f<i.length-1)continue;l+=f-l+1;break}o=u}return o},Cu=e=>e==null?void 0:e.replace("_","-"),IE={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){var a,i;(i=(a=console==null?void 0:console[e])==null?void 0:a.apply)==null||i.call(a,console,t)}};class Au{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,a)}init(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=a.prefix||"i18next:",this.logger=t||IE,this.options=a,this.debug=a.debug}log(){for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return this.forward(a,"log","",!0)}warn(){for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return this.forward(a,"warn","",!0)}error(){for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return this.forward(a,"error","")}deprecate(){for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return this.forward(a,"warn","WARNING DEPRECATED: ",!0)}forward(t,a,i,o){return o&&!this.debug?null:(be(t[0])&&(t[0]=`${i}${this.prefix} ${t[0]}`),this.logger[a](t))}create(t){return new Au(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new Au(this.logger,t)}}var aa=new Au;class Qu{constructor(){this.observers={}}on(t,a){return t.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const o=this.observers[i].get(a)||0;this.observers[i].set(a,o+1)}),this}off(t,a){if(this.observers[t]){if(!a){delete this.observers[t];return}this.observers[t].delete(a)}}emit(t){for(var a=arguments.length,i=new Array(a>1?a-1:0),o=1;o<a;o++)i[o-1]=arguments[o];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(u=>{let[p,f]=u;for(let g=0;g<f;g++)p(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(u=>{let[p,f]=u;for(let g=0;g<f;g++)p.apply(p,[t,...i])})}}class jy extends Qu{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=a,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const a=this.options.ns.indexOf(t);a>-1&&this.options.ns.splice(a,1)}getResource(t,a,i){var g,m;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,u=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let p;t.indexOf(".")>-1?p=t.split("."):(p=[t,a],i&&(Array.isArray(i)?p.push(...i):be(i)&&l?p.push(...i.split(l)):p.push(i)));const f=ju(this.data,p);return!f&&!a&&!i&&t.indexOf(".")>-1&&(t=p[0],a=p[1],i=p.slice(2).join(".")),f||!u||!be(i)?f:Jh((m=(g=this.data)==null?void 0:g[t])==null?void 0:m[a],i,l)}addResource(t,a,i,o){let l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const u=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator;let p=[t,a];i&&(p=p.concat(u?i.split(u):i)),t.indexOf(".")>-1&&(p=t.split("."),o=a,a=p[1]),this.addNamespaces(a),Ty(this.data,p,o),l.silent||this.emit("added",t,a,i,o)}addResources(t,a,i){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const l in i)(be(i[l])||Array.isArray(i[l]))&&this.addResource(t,a,l,i[l],{silent:!0});o.silent||this.emit("added",t,a,i)}addResourceBundle(t,a,i,o,l){let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},p=[t,a];t.indexOf(".")>-1&&(p=t.split("."),o=i,i=a,a=p[1]),this.addNamespaces(a);let f=ju(this.data,p)||{};u.skipCopy||(i=JSON.parse(JSON.stringify(i))),o?o3(f,i,l):f={...f,...i},Ty(this.data,p,f),u.silent||this.emit("added",t,a,i)}removeResourceBundle(t,a){this.hasResourceBundle(t,a)&&delete this.data[t][a],this.removeNamespaces(a),this.emit("removed",t,a)}hasResourceBundle(t,a){return this.getResource(t,a)!==void 0}getResourceBundle(t,a){return a||(a=this.options.defaultNS),this.getResource(t,a)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const a=this.getDataByLanguage(t);return!!(a&&Object.keys(a)||[]).find(o=>a[o]&&Object.keys(a[o]).length>0)}toJSON(){return this.data}}var l3={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,a,i,o){return e.forEach(l=>{var u;t=((u=this.processors[l])==null?void 0:u.process(t,a,i,o))??t}),t}};const Cy={},Ay=e=>!be(e)&&typeof e!="boolean"&&typeof e!="number";class Eu extends Qu{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),DE(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=a,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=aa.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const i=this.resolve(t,a);return(i==null?void 0:i.res)!==void 0}extractFromKey(t,a){let i=a.nsSeparator!==void 0?a.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const o=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator;let l=a.ns||this.options.defaultNS||[];const u=i&&t.indexOf(i)>-1,p=!this.options.userDefinedKeySeparator&&!a.keySeparator&&!this.options.userDefinedNsSeparator&&!a.nsSeparator&&!GE(t,i,o);if(u&&!p){const f=t.match(this.interpolator.nestingRegexp);if(f&&f.length>0)return{key:t,namespaces:be(l)?[l]:l};const g=t.split(i);(i!==o||i===o&&this.options.ns.indexOf(g[0])>-1)&&(l=g.shift()),t=g.join(o)}return{key:t,namespaces:be(l)?[l]:l}}translate(t,a,i){if(typeof a!="object"&&this.options.overloadTranslationOptionHandler&&(a=this.options.overloadTranslationOptionHandler(arguments)),typeof a=="object"&&(a={...a}),a||(a={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const o=a.returnDetails!==void 0?a.returnDetails:this.options.returnDetails,l=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,{key:u,namespaces:p}=this.extractFromKey(t[t.length-1],a),f=p[p.length-1],g=a.lng||this.language,m=a.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((g==null?void 0:g.toLowerCase())==="cimode"){if(m){const $=a.nsSeparator||this.options.nsSeparator;return o?{res:`${f}${$}${u}`,usedKey:u,exactUsedKey:u,usedLng:g,usedNS:f,usedParams:this.getUsedParamsDetails(a)}:`${f}${$}${u}`}return o?{res:u,usedKey:u,exactUsedKey:u,usedLng:g,usedNS:f,usedParams:this.getUsedParamsDetails(a)}:u}const x=this.resolve(t,a);let y=x==null?void 0:x.res;const v=(x==null?void 0:x.usedKey)||u,S=(x==null?void 0:x.exactUsedKey)||u,k=["[object Number]","[object Function]","[object RegExp]"],A=a.joinArrays!==void 0?a.joinArrays:this.options.joinArrays,M=!this.i18nFormat||this.i18nFormat.handleAsObject,z=a.count!==void 0&&!be(a.count),C=Eu.hasDefaultValue(a),H=z?this.pluralResolver.getSuffix(g,a.count,a):"",E=a.ordinal&&z?this.pluralResolver.getSuffix(g,a.count,{ordinal:!1}):"",V=z&&!a.ordinal&&a.count===0,N=V&&a[`defaultValue${this.options.pluralSeparator}zero`]||a[`defaultValue${H}`]||a[`defaultValue${E}`]||a.defaultValue;let O=y;M&&!y&&C&&(O=N);const X=Ay(O),J=Object.prototype.toString.apply(O);if(M&&O&&X&&k.indexOf(J)<0&&!(be(A)&&Array.isArray(O))){if(!a.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const $=this.options.returnedObjectHandler?this.options.returnedObjectHandler(v,O,{...a,ns:p}):`key '${u} (${this.language})' returned an object instead of string.`;return o?(x.res=$,x.usedParams=this.getUsedParamsDetails(a),x):$}if(l){const $=Array.isArray(O),te=$?[]:{},ce=$?S:v;for(const le in O)if(Object.prototype.hasOwnProperty.call(O,le)){const oe=`${ce}${l}${le}`;C&&!y?te[le]=this.translate(oe,{...a,defaultValue:Ay(N)?N[le]:void 0,joinArrays:!1,ns:p}):te[le]=this.translate(oe,{...a,joinArrays:!1,ns:p}),te[le]===oe&&(te[le]=O[le])}y=te}}else if(M&&be(A)&&Array.isArray(y))y=y.join(A),y&&(y=this.extendTranslation(y,t,a,i));else{let $=!1,te=!1;!this.isValidLookup(y)&&C&&($=!0,y=N),this.isValidLookup(y)||(te=!0,y=u);const le=(a.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&te?void 0:y,oe=C&&N!==y&&this.options.updateMissing;if(te||$||oe){if(this.logger.log(oe?"updateKey":"missingKey",g,f,u,oe?N:y),l){const Z=this.resolve(u,{...a,keySeparator:!1});Z&&Z.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let D=[];const B=this.languageUtils.getFallbackCodes(this.options.fallbackLng,a.lng||this.language);if(this.options.saveMissingTo==="fallback"&&B&&B[0])for(let Z=0;Z<B.length;Z++)D.push(B[Z]);else this.options.saveMissingTo==="all"?D=this.languageUtils.toResolveHierarchy(a.lng||this.language):D.push(a.lng||this.language);const G=(Z,L,Y)=>{var ae;const ne=C&&Y!==y?Y:le;this.options.missingKeyHandler?this.options.missingKeyHandler(Z,f,L,ne,oe,a):(ae=this.backendConnector)!=null&&ae.saveMissing&&this.backendConnector.saveMissing(Z,f,L,ne,oe,a),this.emit("missingKey",Z,f,L,y)};this.options.saveMissing&&(this.options.saveMissingPlurals&&z?D.forEach(Z=>{const L=this.pluralResolver.getSuffixes(Z,a);V&&a[`defaultValue${this.options.pluralSeparator}zero`]&&L.indexOf(`${this.options.pluralSeparator}zero`)<0&&L.push(`${this.options.pluralSeparator}zero`),L.forEach(Y=>{G([Z],u+Y,a[`defaultValue${Y}`]||N)})}):G(D,u,N))}y=this.extendTranslation(y,t,a,x,i),te&&y===u&&this.options.appendNamespaceToMissingKey&&(y=`${f}:${u}`),(te||$)&&this.options.parseMissingKeyHandler&&(y=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${f}:${u}`:u,$?y:void 0))}return o?(x.res=y,x.usedParams=this.getUsedParamsDetails(a),x):y}extendTranslation(t,a,i,o,l){var g,m;var u=this;if((g=this.i18nFormat)!=null&&g.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const x=be(t)&&(((m=i==null?void 0:i.interpolation)==null?void 0:m.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let y;if(x){const S=t.match(this.interpolator.nestingRegexp);y=S&&S.length}let v=i.replace&&!be(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(v={...this.options.interpolation.defaultVariables,...v}),t=this.interpolator.interpolate(t,v,i.lng||this.language||o.usedLng,i),x){const S=t.match(this.interpolator.nestingRegexp),k=S&&S.length;y<k&&(i.nest=!1)}!i.lng&&o&&o.res&&(i.lng=this.language||o.usedLng),i.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var S=arguments.length,k=new Array(S),A=0;A<S;A++)k[A]=arguments[A];return(l==null?void 0:l[0])===k[0]&&!i.context?(u.logger.warn(`It seems you are nesting recursively key: ${k[0]} in key: ${a[0]}`),null):u.translate(...k,a)},i)),i.interpolation&&this.interpolator.reset()}const p=i.postProcess||this.options.postProcess,f=be(p)?[p]:p;return t!=null&&(f!=null&&f.length)&&i.applyPostProcessor!==!1&&(t=l3.handle(f,t,a,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),t}resolve(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,o,l,u,p;return be(t)&&(t=[t]),t.forEach(f=>{if(this.isValidLookup(i))return;const g=this.extractFromKey(f,a),m=g.key;o=m;let x=g.namespaces;this.options.fallbackNS&&(x=x.concat(this.options.fallbackNS));const y=a.count!==void 0&&!be(a.count),v=y&&!a.ordinal&&a.count===0,S=a.context!==void 0&&(be(a.context)||typeof a.context=="number")&&a.context!=="",k=a.lngs?a.lngs:this.languageUtils.toResolveHierarchy(a.lng||this.language,a.fallbackLng);x.forEach(A=>{var M,z;this.isValidLookup(i)||(p=A,!Cy[`${k[0]}-${A}`]&&((M=this.utils)!=null&&M.hasLoadedNamespace)&&!((z=this.utils)!=null&&z.hasLoadedNamespace(p))&&(Cy[`${k[0]}-${A}`]=!0,this.logger.warn(`key "${o}" for languages "${k.join(", ")}" won't get resolved as namespace "${p}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),k.forEach(C=>{var V;if(this.isValidLookup(i))return;u=C;const H=[m];if((V=this.i18nFormat)!=null&&V.addLookupKeys)this.i18nFormat.addLookupKeys(H,m,C,A,a);else{let N;y&&(N=this.pluralResolver.getSuffix(C,a.count,a));const O=`${this.options.pluralSeparator}zero`,X=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(y&&(H.push(m+N),a.ordinal&&N.indexOf(X)===0&&H.push(m+N.replace(X,this.options.pluralSeparator)),v&&H.push(m+O)),S){const J=`${m}${this.options.contextSeparator}${a.context}`;H.push(J),y&&(H.push(J+N),a.ordinal&&N.indexOf(X)===0&&H.push(J+N.replace(X,this.options.pluralSeparator)),v&&H.push(J+O))}}let E;for(;E=H.pop();)this.isValidLookup(i)||(l=E,i=this.getResource(C,A,E,a))}))})}),{res:i,usedKey:o,exactUsedKey:l,usedLng:u,usedNS:p}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,a,i){var l;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(l=this.i18nFormat)!=null&&l.getResource?this.i18nFormat.getResource(t,a,i,o):this.resourceStore.getResource(t,a,i,o)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const a=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=t.replace&&!be(t.replace);let o=i?t.replace:t;if(i&&typeof t.count<"u"&&(o.count=t.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!i){o={...o};for(const l of a)delete o[l]}return o}static hasDefaultValue(t){const a="defaultValue";for(const i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&a===i.substring(0,a.length)&&t[i]!==void 0)return!0;return!1}}class Ey{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=aa.create("languageUtils")}getScriptPartFromCode(t){if(t=Cu(t),!t||t.indexOf("-")<0)return null;const a=t.split("-");return a.length===2||(a.pop(),a[a.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(a.join("-"))}getLanguagePartFromCode(t){if(t=Cu(t),!t||t.indexOf("-")<0)return t;const a=t.split("-");return this.formatLanguageCode(a[0])}formatLanguageCode(t){if(be(t)&&t.indexOf("-")>-1){let a;try{a=Intl.getCanonicalLocales(t)[0]}catch{}return a&&this.options.lowerCaseLng&&(a=a.toLowerCase()),a||(this.options.lowerCaseLng?t.toLowerCase():t)}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let a;return t.forEach(i=>{if(a)return;const o=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(o))&&(a=o)}),!a&&this.options.supportedLngs&&t.forEach(i=>{if(a)return;const o=this.getLanguagePartFromCode(i);if(this.isSupportedCode(o))return a=o;a=this.options.supportedLngs.find(l=>{if(l===o)return l;if(!(l.indexOf("-")<0&&o.indexOf("-")<0)&&(l.indexOf("-")>0&&o.indexOf("-")<0&&l.substring(0,l.indexOf("-"))===o||l.indexOf(o)===0&&o.length>1))return l})}),a||(a=this.getFallbackCodes(this.options.fallbackLng)[0]),a}getFallbackCodes(t,a){if(!t)return[];if(typeof t=="function"&&(t=t(a)),be(t)&&(t=[t]),Array.isArray(t))return t;if(!a)return t.default||[];let i=t[a];return i||(i=t[this.getScriptPartFromCode(a)]),i||(i=t[this.formatLanguageCode(a)]),i||(i=t[this.getLanguagePartFromCode(a)]),i||(i=t.default),i||[]}toResolveHierarchy(t,a){const i=this.getFallbackCodes(a||this.options.fallbackLng||[],t),o=[],l=u=>{u&&(this.isSupportedCode(u)?o.push(u):this.logger.warn(`rejecting language code not found in supportedLngs: ${u}`))};return be(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&l(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&l(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&l(this.getLanguagePartFromCode(t))):be(t)&&l(this.formatLanguageCode(t)),i.forEach(u=>{o.indexOf(u)<0&&l(this.formatLanguageCode(u))}),o}}const My={zero:0,one:1,two:2,few:3,many:4,other:5},zy={select:e=>e===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class FE{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=a,this.logger=aa.create("pluralResolver"),this.pluralRulesCache={}}addRule(t,a){this.rules[t]=a}clearCache(){this.pluralRulesCache={}}getRule(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=Cu(t==="dev"?"en":t),o=a.ordinal?"ordinal":"cardinal",l=JSON.stringify({cleanedCode:i,type:o});if(l in this.pluralRulesCache)return this.pluralRulesCache[l];let u;try{u=new Intl.PluralRules(i,{type:o})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),zy;if(!t.match(/-|_/))return zy;const f=this.languageUtils.getLanguagePartFromCode(t);u=this.getRule(f,a)}return this.pluralRulesCache[l]=u,u}needsPlural(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(t,a);return i||(i=this.getRule("dev",a)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(t,a){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,i).map(o=>`${a}${o}`)}getSuffixes(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(t,a);return i||(i=this.getRule("dev",a)),i?i.resolvedOptions().pluralCategories.sort((o,l)=>My[o]-My[l]).map(o=>`${this.options.prepend}${a.ordinal?`ordinal${this.options.prepend}`:""}${o}`):[]}getSuffix(t,a){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(t,i);return o?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${o.select(a)}`:(this.logger.warn(`no plural rule found for: ${t}`),this.getSuffix("dev",a,i))}}const Ry=function(e,t,a){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=NE(e,t,a);return!l&&o&&be(a)&&(l=Jh(e,a,i),l===void 0&&(l=Jh(t,a,i))),l},Kp=e=>e.replace(/\$/g,"$$$$");class qE{constructor(){var a;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=aa.create("interpolator"),this.options=t,this.format=((a=t==null?void 0:t.interpolation)==null?void 0:a.format)||(i=>i),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:a,escapeValue:i,useRawValueToEscape:o,prefix:l,prefixEscaped:u,suffix:p,suffixEscaped:f,formatSeparator:g,unescapeSuffix:m,unescapePrefix:x,nestingPrefix:y,nestingPrefixEscaped:v,nestingSuffix:S,nestingSuffixEscaped:k,nestingOptionsSeparator:A,maxReplaces:M,alwaysFormat:z}=t.interpolation;this.escape=a!==void 0?a:_E,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=l?Pr(l):u||"{{",this.suffix=p?Pr(p):f||"}}",this.formatSeparator=g||",",this.unescapePrefix=m?"":x||"-",this.unescapeSuffix=this.unescapePrefix?"":m||"",this.nestingPrefix=y?Pr(y):v||Pr("$t("),this.nestingSuffix=S?Pr(S):k||Pr(")"),this.nestingOptionsSeparator=A||",",this.maxReplaces=M||1e3,this.alwaysFormat=z!==void 0?z:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(a,i)=>(a==null?void 0:a.source)===i?(a.lastIndex=0,a):new RegExp(i,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,a,i,o){var v;let l,u,p;const f=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},g=S=>{if(S.indexOf(this.formatSeparator)<0){const z=Ry(a,f,S,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(z,void 0,i,{...o,...a,interpolationkey:S}):z}const k=S.split(this.formatSeparator),A=k.shift().trim(),M=k.join(this.formatSeparator).trim();return this.format(Ry(a,f,A,this.options.keySeparator,this.options.ignoreJSONStructure),M,i,{...o,...a,interpolationkey:A})};this.resetRegExp();const m=(o==null?void 0:o.missingInterpolationHandler)||this.options.missingInterpolationHandler,x=((v=o==null?void 0:o.interpolation)==null?void 0:v.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:S=>Kp(S)},{regex:this.regexp,safeValue:S=>this.escapeValue?Kp(this.escape(S)):Kp(S)}].forEach(S=>{for(p=0;l=S.regex.exec(t);){const k=l[1].trim();if(u=g(k),u===void 0)if(typeof m=="function"){const M=m(t,l,o);u=be(M)?M:""}else if(o&&Object.prototype.hasOwnProperty.call(o,k))u="";else if(x){u=l[0];continue}else this.logger.warn(`missed to pass in variable ${k} for interpolating ${t}`),u="";else!be(u)&&!this.useRawValueToEscape&&(u=wy(u));const A=S.safeValue(u);if(t=t.replace(l[0],A),x?(S.regex.lastIndex+=u.length,S.regex.lastIndex-=l[0].length):S.regex.lastIndex=0,p++,p>=this.maxReplaces)break}}),t}nest(t,a){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,l,u;const p=(f,g)=>{const m=this.nestingOptionsSeparator;if(f.indexOf(m)<0)return f;const x=f.split(new RegExp(`${m}[ ]*{`));let y=`{${x[1]}`;f=x[0],y=this.interpolate(y,u);const v=y.match(/'/g),S=y.match(/"/g);(((v==null?void 0:v.length)??0)%2===0&&!S||S.length%2!==0)&&(y=y.replace(/'/g,'"'));try{u=JSON.parse(y),g&&(u={...g,...u})}catch(k){return this.logger.warn(`failed parsing options string in nesting for key ${f}`,k),`${f}${m}${y}`}return u.defaultValue&&u.defaultValue.indexOf(this.prefix)>-1&&delete u.defaultValue,f};for(;o=this.nestingRegexp.exec(t);){let f=[];u={...i},u=u.replace&&!be(u.replace)?u.replace:u,u.applyPostProcessor=!1,delete u.defaultValue;let g=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const m=o[1].split(this.formatSeparator).map(x=>x.trim());o[1]=m.shift(),f=m,g=!0}if(l=a(p.call(this,o[1].trim(),u),u),l&&o[0]===t&&!be(l))return l;be(l)||(l=wy(l)),l||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),l=""),g&&(l=f.reduce((m,x)=>this.format(m,x,i.lng,{...i,interpolationkey:o[1].trim()}),l.trim())),t=t.replace(o[0],l),this.regexp.lastIndex=0}return t}}const KE=e=>{let t=e.toLowerCase().trim();const a={};if(e.indexOf("(")>-1){const i=e.split("(");t=i[0].toLowerCase().trim();const o=i[1].substring(0,i[1].length-1);t==="currency"&&o.indexOf(":")<0?a.currency||(a.currency=o.trim()):t==="relativetime"&&o.indexOf(":")<0?a.range||(a.range=o.trim()):o.split(";").forEach(u=>{if(u){const[p,...f]=u.split(":"),g=f.join(":").trim().replace(/^'+|'+$/g,""),m=p.trim();a[m]||(a[m]=g),g==="false"&&(a[m]=!1),g==="true"&&(a[m]=!0),isNaN(g)||(a[m]=parseInt(g,10))}})}return{formatName:t,formatOptions:a}},Vr=e=>{const t={};return(a,i,o)=>{let l=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(l={...l,[o.interpolationkey]:void 0});const u=i+JSON.stringify(l);let p=t[u];return p||(p=e(Cu(i),o),t[u]=p),p(a)}};class YE{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=aa.create("formatter"),this.options=t,this.formats={number:Vr((a,i)=>{const o=new Intl.NumberFormat(a,{...i});return l=>o.format(l)}),currency:Vr((a,i)=>{const o=new Intl.NumberFormat(a,{...i,style:"currency"});return l=>o.format(l)}),datetime:Vr((a,i)=>{const o=new Intl.DateTimeFormat(a,{...i});return l=>o.format(l)}),relativetime:Vr((a,i)=>{const o=new Intl.RelativeTimeFormat(a,{...i});return l=>o.format(l,i.range||"day")}),list:Vr((a,i)=>{const o=new Intl.ListFormat(a,{...i});return l=>o.format(l)})},this.init(t)}init(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=a.interpolation.formatSeparator||","}add(t,a){this.formats[t.toLowerCase().trim()]=a}addCached(t,a){this.formats[t.toLowerCase().trim()]=Vr(a)}format(t,a,i){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=a.split(this.formatSeparator);if(l.length>1&&l[0].indexOf("(")>1&&l[0].indexOf(")")<0&&l.find(p=>p.indexOf(")")>-1)){const p=l.findIndex(f=>f.indexOf(")")>-1);l[0]=[l[0],...l.splice(1,p)].join(this.formatSeparator)}return l.reduce((p,f)=>{var x;const{formatName:g,formatOptions:m}=KE(f);if(this.formats[g]){let y=p;try{const v=((x=o==null?void 0:o.formatParams)==null?void 0:x[o.interpolationkey])||{},S=v.locale||v.lng||o.locale||o.lng||i;y=this.formats[g](p,S,{...m,...o,...v})}catch(v){this.logger.warn(v)}return y}else this.logger.warn(`there was no format function for ${g}`);return p},t)}}const XE=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)};class WE extends Qu{constructor(t,a,i){var l,u;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=a,this.services=i,this.languageUtils=i.languageUtils,this.options=o,this.logger=aa.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],(u=(l=this.backend)==null?void 0:l.init)==null||u.call(l,i,o.backend,o)}queueLoad(t,a,i,o){const l={},u={},p={},f={};return t.forEach(g=>{let m=!0;a.forEach(x=>{const y=`${g}|${x}`;!i.reload&&this.store.hasResourceBundle(g,x)?this.state[y]=2:this.state[y]<0||(this.state[y]===1?u[y]===void 0&&(u[y]=!0):(this.state[y]=1,m=!1,u[y]===void 0&&(u[y]=!0),l[y]===void 0&&(l[y]=!0),f[x]===void 0&&(f[x]=!0)))}),m||(p[g]=!0)}),(Object.keys(l).length||Object.keys(u).length)&&this.queue.push({pending:u,pendingCount:Object.keys(u).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(l),pending:Object.keys(u),toLoadLanguages:Object.keys(p),toLoadNamespaces:Object.keys(f)}}loaded(t,a,i){const o=t.split("|"),l=o[0],u=o[1];a&&this.emit("failedLoading",l,u,a),!a&&i&&this.store.addResourceBundle(l,u,i,void 0,void 0,{skipCopy:!0}),this.state[t]=a?-1:2,a&&i&&(this.state[t]=0);const p={};this.queue.forEach(f=>{VE(f.loaded,[l],u),XE(f,t),a&&f.errors.push(a),f.pendingCount===0&&!f.done&&(Object.keys(f.loaded).forEach(g=>{p[g]||(p[g]={});const m=f.loaded[g];m.length&&m.forEach(x=>{p[g][x]===void 0&&(p[g][x]=!0)})}),f.done=!0,f.errors.length?f.callback(f.errors):f.callback())}),this.emit("loaded",p),this.queue=this.queue.filter(f=>!f.done)}read(t,a,i){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,u=arguments.length>5?arguments[5]:void 0;if(!t.length)return u(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:a,fcName:i,tried:o,wait:l,callback:u});return}this.readingCalls++;const p=(g,m)=>{if(this.readingCalls--,this.waitingReads.length>0){const x=this.waitingReads.shift();this.read(x.lng,x.ns,x.fcName,x.tried,x.wait,x.callback)}if(g&&m&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,t,a,i,o+1,l*2,u)},l);return}u(g,m)},f=this.backend[i].bind(this.backend);if(f.length===2){try{const g=f(t,a);g&&typeof g.then=="function"?g.then(m=>p(null,m)).catch(p):p(null,g)}catch(g){p(g)}return}return f(t,a,p)}prepareLoading(t,a){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();be(t)&&(t=this.languageUtils.toResolveHierarchy(t)),be(a)&&(a=[a]);const l=this.queueLoad(t,a,i,o);if(!l.toLoad.length)return l.pending.length||o(),null;l.toLoad.forEach(u=>{this.loadOne(u)})}load(t,a,i){this.prepareLoading(t,a,{},i)}reload(t,a,i){this.prepareLoading(t,a,{reload:!0},i)}loadOne(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=t.split("|"),o=i[0],l=i[1];this.read(o,l,"read",void 0,void 0,(u,p)=>{u&&this.logger.warn(`${a}loading namespace ${l} for language ${o} failed`,u),!u&&p&&this.logger.log(`${a}loaded namespace ${l} for language ${o}`,p),this.loaded(t,u,p)})}saveMissing(t,a,i,o,l){var f,g,m,x,y;let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},p=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((g=(f=this.services)==null?void 0:f.utils)!=null&&g.hasLoadedNamespace&&!((x=(m=this.services)==null?void 0:m.utils)!=null&&x.hasLoadedNamespace(a))){this.logger.warn(`did not save key "${i}" as the namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((y=this.backend)!=null&&y.create){const v={...u,isUpdate:l},S=this.backend.create.bind(this.backend);if(S.length<6)try{let k;S.length===5?k=S(t,a,i,o,v):k=S(t,a,i,o),k&&typeof k.then=="function"?k.then(A=>p(null,A)).catch(p):p(null,k)}catch(k){p(k)}else S(t,a,i,o,p,v)}!t||!t[0]||this.store.addResource(t[0],a,i,o)}}}const Ly=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]=="object"&&(t=e[1]),be(e[1])&&(t.defaultValue=e[1]),be(e[2])&&(t.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const a=e[3]||e[2];Object.keys(a).forEach(i=>{t[i]=a[i]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Oy=e=>{var t,a;return be(e.ns)&&(e.ns=[e.ns]),be(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),be(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),((a=(t=e.supportedLngs)==null?void 0:t.indexOf)==null?void 0:a.call(t,"cimode"))<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),typeof e.initImmediate=="boolean"&&(e.initAsync=e.initImmediate),e},Nc=()=>{},QE=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(a=>{typeof e[a]=="function"&&(e[a]=e[a].bind(e))})};class tl extends Qu{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Oy(t),this.services={},this.logger=aa,this.modules={external:[]},QE(this),a&&!this.isInitialized&&!t.isClone){if(!this.options.initAsync)return this.init(t,a),this;setTimeout(()=>{this.init(t,a)},0)}}init(){var t=this;let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof a=="function"&&(i=a,a={}),a.defaultNS==null&&a.ns&&(be(a.ns)?a.defaultNS=a.ns:a.ns.indexOf("translation")<0&&(a.defaultNS=a.ns[0]));const o=Ly();this.options={...o,...this.options,...Oy(a)},this.options.interpolation={...o.interpolation,...this.options.interpolation},a.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=a.keySeparator),a.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=a.nsSeparator);const l=m=>m?typeof m=="function"?new m:m:null;if(!this.options.isClone){this.modules.logger?aa.init(l(this.modules.logger),this.options):aa.init(null,this.options);let m;this.modules.formatter?m=this.modules.formatter:m=YE;const x=new Ey(this.options);this.store=new jy(this.options.resources,this.options);const y=this.services;y.logger=aa,y.resourceStore=this.store,y.languageUtils=x,y.pluralResolver=new FE(x,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),m&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(y.formatter=l(m),y.formatter.init(y,this.options),this.options.interpolation.format=y.formatter.format.bind(y.formatter)),y.interpolator=new qE(this.options),y.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},y.backendConnector=new WE(l(this.modules.backend),y.resourceStore,y,this.options),y.backendConnector.on("*",function(v){for(var S=arguments.length,k=new Array(S>1?S-1:0),A=1;A<S;A++)k[A-1]=arguments[A];t.emit(v,...k)}),this.modules.languageDetector&&(y.languageDetector=l(this.modules.languageDetector),y.languageDetector.init&&y.languageDetector.init(y,this.options.detection,this.options)),this.modules.i18nFormat&&(y.i18nFormat=l(this.modules.i18nFormat),y.i18nFormat.init&&y.i18nFormat.init(this)),this.translator=new Eu(this.services,this.options),this.translator.on("*",function(v){for(var S=arguments.length,k=new Array(S>1?S-1:0),A=1;A<S;A++)k[A-1]=arguments[A];t.emit(v,...k)}),this.modules.external.forEach(v=>{v.init&&v.init(this)})}if(this.format=this.options.interpolation.format,i||(i=Nc),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const m=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);m.length>0&&m[0]!=="dev"&&(this.options.lng=m[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(m=>{this[m]=function(){return t.store[m](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(m=>{this[m]=function(){return t.store[m](...arguments),t}});const f=ko(),g=()=>{const m=(x,y)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),f.resolve(y),i(x,y)};if(this.languages&&!this.isInitialized)return m(null,this.t.bind(this));this.changeLanguage(this.options.lng,m)};return this.options.resources||!this.options.initAsync?g():setTimeout(g,0),f}loadResources(t){var l,u;let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Nc;const o=be(t)?t:this.language;if(typeof t=="function"&&(i=t),!this.options.resources||this.options.partialBundledLanguages){if((o==null?void 0:o.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const p=[],f=g=>{if(!g||g==="cimode")return;this.services.languageUtils.toResolveHierarchy(g).forEach(x=>{x!=="cimode"&&p.indexOf(x)<0&&p.push(x)})};o?f(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(m=>f(m)),(u=(l=this.options.preload)==null?void 0:l.forEach)==null||u.call(l,g=>f(g)),this.services.backendConnector.load(p,this.options.ns,g=>{!g&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(g)})}else i(null)}reloadResources(t,a,i){const o=ko();return typeof t=="function"&&(i=t,t=void 0),typeof a=="function"&&(i=a,a=void 0),t||(t=this.languages),a||(a=this.options.ns),i||(i=Nc),this.services.backendConnector.reload(t,a,l=>{o.resolve(),i(l)}),o}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&l3.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let a=0;a<this.languages.length;a++){const i=this.languages[a];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(t,a){var i=this;this.isLanguageChangingTo=t;const o=ko();this.emit("languageChanging",t);const l=f=>{this.language=f,this.languages=this.services.languageUtils.toResolveHierarchy(f),this.resolvedLanguage=void 0,this.setResolvedLanguage(f)},u=(f,g)=>{g?(l(g),this.translator.changeLanguage(g),this.isLanguageChangingTo=void 0,this.emit("languageChanged",g),this.logger.log("languageChanged",g)):this.isLanguageChangingTo=void 0,o.resolve(function(){return i.t(...arguments)}),a&&a(f,function(){return i.t(...arguments)})},p=f=>{var m,x;!t&&!f&&this.services.languageDetector&&(f=[]);const g=be(f)?f:this.services.languageUtils.getBestMatchFromCodes(f);g&&(this.language||l(g),this.translator.language||this.translator.changeLanguage(g),(x=(m=this.services.languageDetector)==null?void 0:m.cacheUserLanguage)==null||x.call(m,g)),this.loadResources(g,y=>{u(y,g)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?p(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(p):this.services.languageDetector.detect(p):p(t),o}getFixedT(t,a,i){var o=this;const l=function(u,p){let f;if(typeof p!="object"){for(var g=arguments.length,m=new Array(g>2?g-2:0),x=2;x<g;x++)m[x-2]=arguments[x];f=o.options.overloadTranslationOptionHandler([u,p].concat(m))}else f={...p};f.lng=f.lng||l.lng,f.lngs=f.lngs||l.lngs,f.ns=f.ns||l.ns,f.keyPrefix!==""&&(f.keyPrefix=f.keyPrefix||i||l.keyPrefix);const y=o.options.keySeparator||".";let v;return f.keyPrefix&&Array.isArray(u)?v=u.map(S=>`${f.keyPrefix}${y}${S}`):v=f.keyPrefix?`${f.keyPrefix}${y}${u}`:u,o.t(v,f)};return be(t)?l.lng=t:l.lngs=t,l.ns=a,l.keyPrefix=i,l}t(){var o;for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return(o=this.translator)==null?void 0:o.translate(...a)}exists(){var o;for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return(o=this.translator)==null?void 0:o.exists(...a)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=a.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,l=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const u=(p,f)=>{const g=this.services.backendConnector.state[`${p}|${f}`];return g===-1||g===0||g===2};if(a.precheck){const p=a.precheck(this,u);if(p!==void 0)return p}return!!(this.hasResourceBundle(i,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||u(i,t)&&(!o||u(l,t)))}loadNamespaces(t,a){const i=ko();return this.options.ns?(be(t)&&(t=[t]),t.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{i.resolve(),a&&a(o)}),i):(a&&a(),Promise.resolve())}loadLanguages(t,a){const i=ko();be(t)&&(t=[t]);const o=this.options.preload||[],l=t.filter(u=>o.indexOf(u)<0&&this.services.languageUtils.isSupportedCode(u));return l.length?(this.options.preload=o.concat(l),this.loadResources(u=>{i.resolve(),a&&a(u)}),i):(a&&a(),Promise.resolve())}dir(t){var o,l;if(t||(t=this.resolvedLanguage||(((o=this.languages)==null?void 0:o.length)>0?this.languages[0]:this.language)),!t)return"rtl";const a=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((l=this.services)==null?void 0:l.languageUtils)||new Ey(Ly());return a.indexOf(i.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;return new tl(t,a)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Nc;const i=t.forkResourceStore;i&&delete t.forkResourceStore;const o={...this.options,...t,isClone:!0},l=new tl(o);if((t.debug!==void 0||t.prefix!==void 0)&&(l.logger=l.logger.clone(t)),["store","services","language"].forEach(p=>{l[p]=this[p]}),l.services={...this.services},l.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},i){const p=Object.keys(this.store.data).reduce((f,g)=>(f[g]={...this.store.data[g]},Object.keys(f[g]).reduce((m,x)=>(m[x]={...f[g][x]},m),{})),{});l.store=new jy(p,o),l.services.resourceStore=l.store}return l.translator=new Eu(l.services,o),l.translator.on("*",function(p){for(var f=arguments.length,g=new Array(f>1?f-1:0),m=1;m<f;m++)g[m-1]=arguments[m];l.emit(p,...g)}),l.init(o,a),l.translator.options=o,l.translator.backendConnector.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},l}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const _t=tl.createInstance();_t.createInstance=tl.createInstance;_t.createInstance;_t.dir;_t.init;_t.loadResources;_t.reloadResources;_t.use;_t.changeLanguage;_t.getFixedT;_t.t;_t.exists;_t.setDefaultNamespace;_t.hasLoadedNamespace;_t.loadNamespaces;_t.loadLanguages;function eg(e){"@babel/helpers - typeof";return eg=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},eg(e)}function c3(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":eg(XMLHttpRequest))==="object"}function ZE(e){return!!e&&typeof e.then=="function"}function JE(e){return ZE(e)?e:Promise.resolve(e)}const eM="modulepreload",tM=function(e){return"/"+e},Dy={},nM=function(t,a,i){let o=Promise.resolve();if(a&&a.length>0){let u=function(g){return Promise.all(g.map(m=>Promise.resolve(m).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const p=document.querySelector("meta[property=csp-nonce]"),f=(p==null?void 0:p.nonce)||(p==null?void 0:p.getAttribute("nonce"));o=u(a.map(g=>{if(g=tM(g),g in Dy)return;Dy[g]=!0;const m=g.endsWith(".css"),x=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${x}`))return;const y=document.createElement("link");if(y.rel=m?"stylesheet":eM,m||(y.as="script"),y.crossOrigin="",y.href=g,f&&y.setAttribute("nonce",f),document.head.appendChild(y),m)return new Promise((v,S)=>{y.addEventListener("load",v),y.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${g}`)))})}))}function l(u){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=u,window.dispatchEvent(p),!p.defaultPrevented)throw u}return o.then(u=>{for(const p of u||[])p.status==="rejected"&&l(p.reason);return t().catch(l)})};function Py(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),a.push.apply(a,i)}return a}function Vy(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Py(Object(a),!0).forEach(function(i){aM(e,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Py(Object(a)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))})}return e}function aM(e,t,a){return(t=iM(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function iM(e){var t=rM(e,"string");return Ki(t)=="symbol"?t:t+""}function rM(e,t){if(Ki(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var i=a.call(e,t);if(Ki(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ki(e){"@babel/helpers - typeof";return Ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ki(e)}var fi=typeof fetch=="function"?fetch:void 0;typeof global<"u"&&global.fetch?fi=global.fetch:typeof window<"u"&&window.fetch&&(fi=window.fetch);var nl;c3()&&(typeof global<"u"&&global.XMLHttpRequest?nl=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(nl=window.XMLHttpRequest));var Mu;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?Mu=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(Mu=window.ActiveXObject));typeof fi!="function"&&(fi=void 0);if(!fi&&!nl&&!Mu)try{nM(()=>import("./browser-ponyfill-QliJ2C0H.js").then(e=>e.b),[]).then(function(e){fi=e.default}).catch(function(){})}catch{}var tg=function(t,a){if(a&&Ki(a)==="object"){var i="";for(var o in a)i+="&"+encodeURIComponent(o)+"="+encodeURIComponent(a[o]);if(!i)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+i.slice(1)}return t},Ny=function(t,a,i,o){var l=function(f){if(!f.ok)return i(f.statusText||"Error",{status:f.status});f.text().then(function(g){i(null,{status:f.status,data:g})}).catch(i)};if(o){var u=o(t,a);if(u instanceof Promise){u.then(l).catch(i);return}}typeof fetch=="function"?fetch(t,a).then(l).catch(i):fi(t,a).then(l).catch(i)},By=!1,sM=function(t,a,i,o){t.queryStringParams&&(a=tg(a,t.queryStringParams));var l=Vy({},typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(l["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),i&&(l["Content-Type"]="application/json");var u=typeof t.requestOptions=="function"?t.requestOptions(i):t.requestOptions,p=Vy({method:i?"POST":"GET",body:i?t.stringify(i):void 0,headers:l},By?{}:u),f=typeof t.alternateFetch=="function"&&t.alternateFetch.length>=1?t.alternateFetch:void 0;try{Ny(a,p,o,f)}catch(g){if(!u||Object.keys(u).length===0||!g.message||g.message.indexOf("not implemented")<0)return o(g);try{Object.keys(u).forEach(function(m){delete p[m]}),Ny(a,p,o,f),By=!0}catch(m){o(m)}}},oM=function(t,a,i,o){i&&Ki(i)==="object"&&(i=tg("",i).slice(1)),t.queryStringParams&&(a=tg(a,t.queryStringParams));try{var l=nl?new nl:new Mu("MSXML2.XMLHTTP.3.0");l.open(i?"POST":"GET",a,1),t.crossDomain||l.setRequestHeader("X-Requested-With","XMLHttpRequest"),l.withCredentials=!!t.withCredentials,i&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),l.overrideMimeType&&l.overrideMimeType("application/json");var u=t.customHeaders;if(u=typeof u=="function"?u():u,u)for(var p in u)l.setRequestHeader(p,u[p]);l.onreadystatechange=function(){l.readyState>3&&o(l.status>=400?l.statusText:null,{status:l.status,data:l.responseText})},l.send(i)}catch(f){console&&console.log(f)}},lM=function(t,a,i,o){if(typeof i=="function"&&(o=i,i=void 0),o=o||function(){},fi&&a.indexOf("file:")!==0)return sM(t,a,i,o);if(c3()||typeof ActiveXObject=="function")return oM(t,a,i,o);o(new Error("No fetch and no xhr implementation found!"))};function is(e){"@babel/helpers - typeof";return is=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},is(e)}function _y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),a.push.apply(a,i)}return a}function Yp(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?_y(Object(a),!0).forEach(function(i){u3(e,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_y(Object(a)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))})}return e}function cM(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function uM(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,d3(i.key),i)}}function dM(e,t,a){return t&&uM(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function u3(e,t,a){return(t=d3(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d3(e){var t=fM(e,"string");return is(t)=="symbol"?t:t+""}function fM(e,t){if(is(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var i=a.call(e,t);if(is(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var pM=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(a){return JSON.parse(a)},stringify:JSON.stringify,parsePayload:function(a,i,o){return u3({},i,o||"")},parseLoadPayload:function(a,i){},request:lM,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},f3=function(){function e(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};cM(this,e),this.services=t,this.options=a,this.allOptions=i,this.type="backend",this.init(t,a,i)}return dM(e,[{key:"init",value:function(a){var i=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=a,this.options=Yp(Yp(Yp({},pM()),this.options||{}),o),this.allOptions=l,this.services&&this.options.reloadInterval){var u=setInterval(function(){return i.reload()},this.options.reloadInterval);is(u)==="object"&&typeof u.unref=="function"&&u.unref()}}},{key:"readMulti",value:function(a,i,o){this._readAny(a,a,i,i,o)}},{key:"read",value:function(a,i,o){this._readAny([a],a,[i],i,o)}},{key:"_readAny",value:function(a,i,o,l,u){var p=this,f=this.options.loadPath;typeof this.options.loadPath=="function"&&(f=this.options.loadPath(a,o)),f=JE(f),f.then(function(g){if(!g)return u(null,{});var m=p.services.interpolator.interpolate(g,{lng:a.join("+"),ns:o.join("+")});p.loadUrl(m,u,i,l)})}},{key:"loadUrl",value:function(a,i,o,l){var u=this,p=typeof o=="string"?[o]:o,f=typeof l=="string"?[l]:l,g=this.options.parseLoadPayload(p,f);this.options.request(this.options,a,g,function(m,x){if(x&&(x.status>=500&&x.status<600||!x.status))return i("failed loading "+a+"; status code: "+x.status,!0);if(x&&x.status>=400&&x.status<500)return i("failed loading "+a+"; status code: "+x.status,!1);if(!x&&m&&m.message){var y=m.message.toLowerCase(),v=["failed","fetch","network","load"].find(function(A){return y.indexOf(A)>-1});if(v)return i("failed loading "+a+": "+m.message,!0)}if(m)return i(m,!1);var S,k;try{typeof x.data=="string"?S=u.options.parse(x.data,o,l):S=x.data}catch{k="failed parsing "+a+" to json"}if(k)return i(k,!1);i(null,S)})}},{key:"create",value:function(a,i,o,l,u){var p=this;if(this.options.addPath){typeof a=="string"&&(a=[a]);var f=this.options.parsePayload(i,o,l),g=0,m=[],x=[];a.forEach(function(y){var v=p.options.addPath;typeof p.options.addPath=="function"&&(v=p.options.addPath(y,i));var S=p.services.interpolator.interpolate(v,{lng:y,ns:i});p.options.request(p.options,S,f,function(k,A){g+=1,m.push(k),x.push(A),g===a.length&&typeof u=="function"&&u(m,x)})})}}},{key:"reload",value:function(){var a=this,i=this.services,o=i.backendConnector,l=i.languageUtils,u=i.logger,p=o.language;if(!(p&&p.toLowerCase()==="cimode")){var f=[],g=function(x){var y=l.toResolveHierarchy(x);y.forEach(function(v){f.indexOf(v)<0&&f.push(v)})};g(p),this.allOptions.preload&&this.allOptions.preload.forEach(function(m){return g(m)}),f.forEach(function(m){a.allOptions.ns.forEach(function(x){o.read(m,x,"read",null,null,function(y,v){y&&u.warn("loading namespace ".concat(x," for language ").concat(m," failed"),y),!y&&v&&u.log("loaded namespace ".concat(x," for language ").concat(m),v),o.loaded("".concat(m,"|").concat(x),y,v)})})})}}}])}();f3.type="backend";const{slice:hM,forEach:gM}=[];function mM(e){return gM.call(hM.call(arguments,1),t=>{if(t)for(const a in t)e[a]===void 0&&(e[a]=t[a])}),e}function bM(e){return typeof e!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(a=>a.test(e))}const $y=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,xM=function(e,t){const i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},o=encodeURIComponent(t);let l=`${e}=${o}`;if(i.maxAge>0){const u=i.maxAge-0;if(Number.isNaN(u))throw new Error("maxAge should be a Number");l+=`; Max-Age=${Math.floor(u)}`}if(i.domain){if(!$y.test(i.domain))throw new TypeError("option domain is invalid");l+=`; Domain=${i.domain}`}if(i.path){if(!$y.test(i.path))throw new TypeError("option path is invalid");l+=`; Path=${i.path}`}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");l+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(l+="; HttpOnly"),i.secure&&(l+="; Secure"),i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"strict":l+="; SameSite=Strict";break;case"none":l+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return i.partitioned&&(l+="; Partitioned"),l},Hy={create(e,t,a,i){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};a&&(o.expires=new Date,o.expires.setTime(o.expires.getTime()+a*60*1e3)),i&&(o.domain=i),document.cookie=xM(e,t,o)},read(e){const t=`${e}=`,a=document.cookie.split(";");for(let i=0;i<a.length;i++){let o=a[i];for(;o.charAt(0)===" ";)o=o.substring(1,o.length);if(o.indexOf(t)===0)return o.substring(t.length,o.length)}return null},remove(e,t){this.create(e,"",-1,t)}};var yM={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&typeof document<"u")return Hy.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:a,cookieMinutes:i,cookieDomain:o,cookieOptions:l}=t;a&&typeof document<"u"&&Hy.create(a,e,i,o,l)}},vM={name:"querystring",lookup(e){var i;let{lookupQuerystring:t}=e,a;if(typeof window<"u"){let{search:o}=window.location;!window.location.search&&((i=window.location.hash)==null?void 0:i.indexOf("?"))>-1&&(o=window.location.hash.substring(window.location.hash.indexOf("?")));const u=o.substring(1).split("&");for(let p=0;p<u.length;p++){const f=u[p].indexOf("=");f>0&&u[p].substring(0,f)===t&&(a=u[p].substring(f+1))}}return a}},wM={name:"hash",lookup(e){var o;let{lookupHash:t,lookupFromHashIndex:a}=e,i;if(typeof window<"u"){const{hash:l}=window.location;if(l&&l.length>2){const u=l.substring(1);if(t){const p=u.split("&");for(let f=0;f<p.length;f++){const g=p[f].indexOf("=");g>0&&p[f].substring(0,g)===t&&(i=p[f].substring(g+1))}}if(i)return i;if(!i&&a>-1){const p=l.match(/\/([a-zA-Z-]*)/g);return Array.isArray(p)?(o=p[typeof a=="number"?a:0])==null?void 0:o.replace("/",""):void 0}}}return i}};let Nr=null;const Uy=()=>{if(Nr!==null)return Nr;try{if(Nr=typeof window<"u"&&window.localStorage!==null,!Nr)return!1;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch{Nr=!1}return Nr};var SM={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&Uy())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:a}=t;a&&Uy()&&window.localStorage.setItem(a,e)}};let Br=null;const Gy=()=>{if(Br!==null)return Br;try{if(Br=typeof window<"u"&&window.sessionStorage!==null,!Br)return!1;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch{Br=!1}return Br};var kM={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&Gy())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:a}=t;a&&Gy()&&window.sessionStorage.setItem(a,e)}},TM={name:"navigator",lookup(e){const t=[];if(typeof navigator<"u"){const{languages:a,userLanguage:i,language:o}=navigator;if(a)for(let l=0;l<a.length;l++)t.push(a[l]);i&&t.push(i),o&&t.push(o)}return t.length>0?t:void 0}},jM={name:"htmlTag",lookup(e){let{htmlTag:t}=e,a;const i=t||(typeof document<"u"?document.documentElement:null);return i&&typeof i.getAttribute=="function"&&(a=i.getAttribute("lang")),a}},CM={name:"path",lookup(e){var o;let{lookupFromPathIndex:t}=e;if(typeof window>"u")return;const a=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(a)?(o=a[typeof t=="number"?t:0])==null?void 0:o.replace("/",""):void 0}},AM={name:"subdomain",lookup(e){var o,l;let{lookupFromSubdomainIndex:t}=e;const a=typeof t=="number"?t+1:1,i=typeof window<"u"&&((l=(o=window.location)==null?void 0:o.hostname)==null?void 0:l.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(i)return i[a]}};let p3=!1;try{document.cookie,p3=!0}catch{}const h3=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];p3||h3.splice(1,1);const EM=()=>({order:h3,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e});class g3{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(t,a)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=t,this.options=mM(a,this.options||{},EM()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=o=>o.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(yM),this.addDetector(vM),this.addDetector(SM),this.addDetector(kM),this.addDetector(TM),this.addDetector(jM),this.addDetector(CM),this.addDetector(AM),this.addDetector(wM)}addDetector(t){return this.detectors[t.name]=t,this}detect(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,a=[];return t.forEach(i=>{if(this.detectors[i]){let o=this.detectors[i].lookup(this.options);o&&typeof o=="string"&&(o=[o]),o&&(a=a.concat(o))}}),a=a.filter(i=>i!=null&&!bM(i)).map(i=>this.options.convertDetectedLanguage(i)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?a:a.length>0?a[0]:null}cacheUserLanguage(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;a&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(t)>-1||a.forEach(i=>{this.detectors[i]&&this.detectors[i].cacheUserLanguage(t,this.options)}))}}g3.type="languageDetector";const MM="20260331-featured-projects-refined",pm=["de","uk","tr","ar","pl","ku","fa","it","es","el","ro","bg"];_t.use(f3).use(g3).use(ME).init({supportedLngs:[...pm],fallbackLng:"de",debug:!1,interpolation:{escapeValue:!1},backend:{loadPath:`/locales/{{lng}}/translation.json?v=${MM}`},detection:{order:["localStorage","navigator"],caches:["localStorage"],lookupLocalStorage:"i18nextLng"}});const m3=j.createContext(void 0),zM=({children:e})=>{const{i18n:t}=Ie(),a=o=>{const l=(o||"").toLowerCase().split("-")[0];return pm.includes(l)?l:"de"},i=o=>{t.changeLanguage(o).then(()=>{window.location.reload()})};return d.jsx(m3.Provider,{value:{language:a(t.resolvedLanguage||t.language),setLanguage:i},children:e})},RM=()=>{const e=j.useContext(m3);if(!e)throw new Error("useLanguage must be used within a LanguageProvider");return e};var Wt=function(){return Wt=Object.assign||function(t){for(var a,i=1,o=arguments.length;i<o;i++){a=arguments[i];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(t[l]=a[l])}return t},Wt.apply(this,arguments)};function al(e,t,a){if(a||arguments.length===2)for(var i=0,o=t.length,l;i<o;i++)(l||!(i in t))&&(l||(l=Array.prototype.slice.call(t,0,i)),l[i]=t[i]);return e.concat(l||Array.prototype.slice.call(t))}var Xe="-ms-",Ho="-moz-",Pe="-webkit-",b3="comm",Zu="rule",hm="decl",LM="@import",x3="@keyframes",OM="@layer",y3=Math.abs,gm=String.fromCharCode,ng=Object.assign;function DM(e,t){return Ct(e,0)^45?(((t<<2^Ct(e,0))<<2^Ct(e,1))<<2^Ct(e,2))<<2^Ct(e,3):0}function v3(e){return e.trim()}function Ma(e,t){return(e=t.exec(e))?e[0]:e}function ve(e,t,a){return e.replace(t,a)}function su(e,t,a){return e.indexOf(t,a)}function Ct(e,t){return e.charCodeAt(t)|0}function rs(e,t,a){return e.slice(t,a)}function na(e){return e.length}function w3(e){return e.length}function Lo(e,t){return t.push(e),e}function PM(e,t){return e.map(t).join("")}function Iy(e,t){return e.filter(function(a){return!Ma(a,t)})}var Ju=1,ss=1,S3=0,Mn=0,pt=0,xs="";function ed(e,t,a,i,o,l,u,p){return{value:e,root:t,parent:a,type:i,props:o,children:l,line:Ju,column:ss,length:u,return:"",siblings:p}}function li(e,t){return ng(ed("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function _r(e){for(;e.root;)e=li(e.root,{children:[e]});Lo(e,e.siblings)}function VM(){return pt}function NM(){return pt=Mn>0?Ct(xs,--Mn):0,ss--,pt===10&&(ss=1,Ju--),pt}function Vn(){return pt=Mn<S3?Ct(xs,Mn++):0,ss++,pt===10&&(ss=1,Ju++),pt}function Ii(){return Ct(xs,Mn)}function ou(){return Mn}function td(e,t){return rs(xs,e,t)}function ag(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function BM(e){return Ju=ss=1,S3=na(xs=e),Mn=0,[]}function _M(e){return xs="",e}function Xp(e){return v3(td(Mn-1,ig(e===91?e+2:e===40?e+1:e)))}function $M(e){for(;(pt=Ii())&&pt<33;)Vn();return ag(e)>2||ag(pt)>3?"":" "}function HM(e,t){for(;--t&&Vn()&&!(pt<48||pt>102||pt>57&&pt<65||pt>70&&pt<97););return td(e,ou()+(t<6&&Ii()==32&&Vn()==32))}function ig(e){for(;Vn();)switch(pt){case e:return Mn;case 34:case 39:e!==34&&e!==39&&ig(pt);break;case 40:e===41&&ig(e);break;case 92:Vn();break}return Mn}function UM(e,t){for(;Vn()&&e+pt!==57;)if(e+pt===84&&Ii()===47)break;return"/*"+td(t,Mn-1)+"*"+gm(e===47?e:Vn())}function GM(e){for(;!ag(Ii());)Vn();return td(e,Mn)}function IM(e){return _M(lu("",null,null,null,[""],e=BM(e),0,[0],e))}function lu(e,t,a,i,o,l,u,p,f){for(var g=0,m=0,x=u,y=0,v=0,S=0,k=1,A=1,M=1,z=0,C="",H=o,E=l,V=i,N=C;A;)switch(S=z,z=Vn()){case 40:if(S!=108&&Ct(N,x-1)==58){su(N+=ve(Xp(z),"&","&\f"),"&\f",y3(g?p[g-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:N+=Xp(z);break;case 9:case 10:case 13:case 32:N+=$M(S);break;case 92:N+=HM(ou()-1,7);continue;case 47:switch(Ii()){case 42:case 47:Lo(FM(UM(Vn(),ou()),t,a,f),f);break;default:N+="/"}break;case 123*k:p[g++]=na(N)*M;case 125*k:case 59:case 0:switch(z){case 0:case 125:A=0;case 59+m:M==-1&&(N=ve(N,/\f/g,"")),v>0&&na(N)-x&&Lo(v>32?qy(N+";",i,a,x-1,f):qy(ve(N," ","")+";",i,a,x-2,f),f);break;case 59:N+=";";default:if(Lo(V=Fy(N,t,a,g,m,o,p,C,H=[],E=[],x,l),l),z===123)if(m===0)lu(N,t,V,V,H,l,x,p,E);else switch(y===99&&Ct(N,3)===110?100:y){case 100:case 108:case 109:case 115:lu(e,V,V,i&&Lo(Fy(e,V,V,0,0,o,p,C,o,H=[],x,E),E),o,E,x,p,i?H:E);break;default:lu(N,V,V,V,[""],E,0,p,E)}}g=m=v=0,k=M=1,C=N="",x=u;break;case 58:x=1+na(N),v=S;default:if(k<1){if(z==123)--k;else if(z==125&&k++==0&&NM()==125)continue}switch(N+=gm(z),z*k){case 38:M=m>0?1:(N+="\f",-1);break;case 44:p[g++]=(na(N)-1)*M,M=1;break;case 64:Ii()===45&&(N+=Xp(Vn())),y=Ii(),m=x=na(C=N+=GM(ou())),z++;break;case 45:S===45&&na(N)==2&&(k=0)}}return l}function Fy(e,t,a,i,o,l,u,p,f,g,m,x){for(var y=o-1,v=o===0?l:[""],S=w3(v),k=0,A=0,M=0;k<i;++k)for(var z=0,C=rs(e,y+1,y=y3(A=u[k])),H=e;z<S;++z)(H=v3(A>0?v[z]+" "+C:ve(C,/&\f/g,v[z])))&&(f[M++]=H);return ed(e,t,a,o===0?Zu:p,f,g,m,x)}function FM(e,t,a,i){return ed(e,t,a,b3,gm(VM()),rs(e,2,-2),0,i)}function qy(e,t,a,i,o){return ed(e,t,a,hm,rs(e,0,i),rs(e,i+1,-1),i,o)}function k3(e,t,a){switch(DM(e,t)){case 5103:return Pe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Pe+e+e;case 4789:return Ho+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Pe+e+Ho+e+Xe+e+e;case 5936:switch(Ct(e,t+11)){case 114:return Pe+e+Xe+ve(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Pe+e+Xe+ve(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Pe+e+Xe+ve(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Pe+e+Xe+e+e;case 6165:return Pe+e+Xe+"flex-"+e+e;case 5187:return Pe+e+ve(e,/(\w+).+(:[^]+)/,Pe+"box-$1$2"+Xe+"flex-$1$2")+e;case 5443:return Pe+e+Xe+"flex-item-"+ve(e,/flex-|-self/g,"")+(Ma(e,/flex-|baseline/)?"":Xe+"grid-row-"+ve(e,/flex-|-self/g,""))+e;case 4675:return Pe+e+Xe+"flex-line-pack"+ve(e,/align-content|flex-|-self/g,"")+e;case 5548:return Pe+e+Xe+ve(e,"shrink","negative")+e;case 5292:return Pe+e+Xe+ve(e,"basis","preferred-size")+e;case 6060:return Pe+"box-"+ve(e,"-grow","")+Pe+e+Xe+ve(e,"grow","positive")+e;case 4554:return Pe+ve(e,/([^-])(transform)/g,"$1"+Pe+"$2")+e;case 6187:return ve(ve(ve(e,/(zoom-|grab)/,Pe+"$1"),/(image-set)/,Pe+"$1"),e,"")+e;case 5495:case 3959:return ve(e,/(image-set\([^]*)/,Pe+"$1$`$1");case 4968:return ve(ve(e,/(.+:)(flex-)?(.*)/,Pe+"box-pack:$3"+Xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Pe+e+e;case 4200:if(!Ma(e,/flex-|baseline/))return Xe+"grid-column-align"+rs(e,t)+e;break;case 2592:case 3360:return Xe+ve(e,"template-","")+e;case 4384:case 3616:return a&&a.some(function(i,o){return t=o,Ma(i.props,/grid-\w+-end/)})?~su(e+(a=a[t].value),"span",0)?e:Xe+ve(e,"-start","")+e+Xe+"grid-row-span:"+(~su(a,"span",0)?Ma(a,/\d+/):+Ma(a,/\d+/)-+Ma(e,/\d+/))+";":Xe+ve(e,"-start","")+e;case 4896:case 4128:return a&&a.some(function(i){return Ma(i.props,/grid-\w+-start/)})?e:Xe+ve(ve(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ve(e,/(.+)-inline(.+)/,Pe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(na(e)-1-t>6)switch(Ct(e,t+1)){case 109:if(Ct(e,t+4)!==45)break;case 102:return ve(e,/(.+:)(.+)-([^]+)/,"$1"+Pe+"$2-$3$1"+Ho+(Ct(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~su(e,"stretch",0)?k3(ve(e,"stretch","fill-available"),t,a)+e:e}break;case 5152:case 5920:return ve(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,o,l,u,p,f,g){return Xe+o+":"+l+g+(u?Xe+o+"-span:"+(p?f:+f-+l)+g:"")+e});case 4949:if(Ct(e,t+6)===121)return ve(e,":",":"+Pe)+e;break;case 6444:switch(Ct(e,Ct(e,14)===45?18:11)){case 120:return ve(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Pe+(Ct(e,14)===45?"inline-":"")+"box$3$1"+Pe+"$2$3$1"+Xe+"$2box$3")+e;case 100:return ve(e,":",":"+Xe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ve(e,"scroll-","scroll-snap-")+e}return e}function zu(e,t){for(var a="",i=0;i<e.length;i++)a+=t(e[i],i,e,t)||"";return a}function qM(e,t,a,i){switch(e.type){case OM:if(e.children.length)break;case LM:case hm:return e.return=e.return||e.value;case b3:return"";case x3:return e.return=e.value+"{"+zu(e.children,i)+"}";case Zu:if(!na(e.value=e.props.join(",")))return""}return na(a=zu(e.children,i))?e.return=e.value+"{"+a+"}":""}function KM(e){var t=w3(e);return function(a,i,o,l){for(var u="",p=0;p<t;p++)u+=e[p](a,i,o,l)||"";return u}}function YM(e){return function(t){t.root||(t=t.return)&&e(t)}}function XM(e,t,a,i){if(e.length>-1&&!e.return)switch(e.type){case hm:e.return=k3(e.value,e.length,a);return;case x3:return zu([li(e,{value:ve(e.value,"@","@"+Pe)})],i);case Zu:if(e.length)return PM(a=e.props,function(o){switch(Ma(o,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":_r(li(e,{props:[ve(o,/:(read-\w+)/,":"+Ho+"$1")]})),_r(li(e,{props:[o]})),ng(e,{props:Iy(a,i)});break;case"::placeholder":_r(li(e,{props:[ve(o,/:(plac\w+)/,":"+Pe+"input-$1")]})),_r(li(e,{props:[ve(o,/:(plac\w+)/,":"+Ho+"$1")]})),_r(li(e,{props:[ve(o,/:(plac\w+)/,Xe+"input-$1")]})),_r(li(e,{props:[o]})),ng(e,{props:Iy(a,i)});break}return""})}}var WM={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dn={},os=typeof process<"u"&&dn!==void 0&&(dn.REACT_APP_SC_ATTR||dn.SC_ATTR)||"data-styled",T3="active",j3="data-styled-version",nd="6.1.19",mm=`/*!sc*/
`,Ru=typeof window<"u"&&typeof document<"u",QM=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&dn!==void 0&&dn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&dn.REACT_APP_SC_DISABLE_SPEEDY!==""?dn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&dn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&dn!==void 0&&dn.SC_DISABLE_SPEEDY!==void 0&&dn.SC_DISABLE_SPEEDY!==""&&dn.SC_DISABLE_SPEEDY!=="false"&&dn.SC_DISABLE_SPEEDY),ad=Object.freeze([]),ls=Object.freeze({});function ZM(e,t,a){return a===void 0&&(a=ls),e.theme!==a.theme&&e.theme||t||a.theme}var C3=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),JM=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ez=/(^-|-$)/g;function Ky(e){return e.replace(JM,"-").replace(ez,"")}var tz=/(a)(d)/gi,Bc=52,Yy=function(e){return String.fromCharCode(e+(e>25?39:97))};function rg(e){var t,a="";for(t=Math.abs(e);t>Bc;t=t/Bc|0)a=Yy(t%Bc)+a;return(Yy(t%Bc)+a).replace(tz,"$1-$2")}var Wp,A3=5381,Xr=function(e,t){for(var a=t.length;a;)e=33*e^t.charCodeAt(--a);return e},E3=function(e){return Xr(A3,e)};function M3(e){return rg(E3(e)>>>0)}function nz(e){return e.displayName||e.name||"Component"}function Qp(e){return typeof e=="string"&&!0}var z3=typeof Symbol=="function"&&Symbol.for,R3=z3?Symbol.for("react.memo"):60115,az=z3?Symbol.for("react.forward_ref"):60112,iz={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},rz={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},L3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sz=((Wp={})[az]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wp[R3]=L3,Wp);function Xy(e){return("type"in(t=e)&&t.type.$$typeof)===R3?L3:"$$typeof"in e?sz[e.$$typeof]:iz;var t}var oz=Object.defineProperty,lz=Object.getOwnPropertyNames,Wy=Object.getOwnPropertySymbols,cz=Object.getOwnPropertyDescriptor,uz=Object.getPrototypeOf,Qy=Object.prototype;function O3(e,t,a){if(typeof t!="string"){if(Qy){var i=uz(t);i&&i!==Qy&&O3(e,i,a)}var o=lz(t);Wy&&(o=o.concat(Wy(t)));for(var l=Xy(e),u=Xy(t),p=0;p<o.length;++p){var f=o[p];if(!(f in rz||a&&a[f]||u&&f in u||l&&f in l)){var g=cz(t,f);try{oz(e,f,g)}catch{}}}}return e}function cs(e){return typeof e=="function"}function bm(e){return typeof e=="object"&&"styledComponentId"in e}function $i(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function sg(e,t){if(e.length===0)return"";for(var a=e[0],i=1;i<e.length;i++)a+=e[i];return a}function il(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function og(e,t,a){if(a===void 0&&(a=!1),!a&&!il(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=og(e[i],t[i]);else if(il(t))for(var i in t)e[i]=og(e[i],t[i]);return e}function xm(e,t){Object.defineProperty(e,"toString",{value:t})}function hl(e){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var dz=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var a=0,i=0;i<t;i++)a+=this.groupSizes[i];return a},e.prototype.insertRules=function(t,a){if(t>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;t>=l;)if((l<<=1)<0)throw hl(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var u=o;u<l;u++)this.groupSizes[u]=0}for(var p=this.indexOfGroup(t+1),f=(u=0,a.length);u<f;u++)this.tag.insertRule(p,a[u])&&(this.groupSizes[t]++,p++)},e.prototype.clearGroup=function(t){if(t<this.length){var a=this.groupSizes[t],i=this.indexOfGroup(t),o=i+a;this.groupSizes[t]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(t){var a="";if(t>=this.length||this.groupSizes[t]===0)return a;for(var i=this.groupSizes[t],o=this.indexOfGroup(t),l=o+i,u=o;u<l;u++)a+="".concat(this.tag.getRule(u)).concat(mm);return a},e}(),cu=new Map,Lu=new Map,uu=1,_c=function(e){if(cu.has(e))return cu.get(e);for(;Lu.has(uu);)uu++;var t=uu++;return cu.set(e,t),Lu.set(t,e),t},fz=function(e,t){uu=t+1,cu.set(e,t),Lu.set(t,e)},pz="style[".concat(os,"][").concat(j3,'="').concat(nd,'"]'),hz=new RegExp("^".concat(os,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),gz=function(e,t,a){for(var i,o=a.split(","),l=0,u=o.length;l<u;l++)(i=o[l])&&e.registerName(t,i)},mz=function(e,t){for(var a,i=((a=t.textContent)!==null&&a!==void 0?a:"").split(mm),o=[],l=0,u=i.length;l<u;l++){var p=i[l].trim();if(p){var f=p.match(hz);if(f){var g=0|parseInt(f[1],10),m=f[2];g!==0&&(fz(m,g),gz(e,m,f[3]),e.getTag().insertRules(g,o)),o.length=0}else o.push(p)}}},Zy=function(e){for(var t=document.querySelectorAll(pz),a=0,i=t.length;a<i;a++){var o=t[a];o&&o.getAttribute(os)!==T3&&(mz(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function bz(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var D3=function(e){var t=document.head,a=e||t,i=document.createElement("style"),o=function(p){var f=Array.from(p.querySelectorAll("style[".concat(os,"]")));return f[f.length-1]}(a),l=o!==void 0?o.nextSibling:null;i.setAttribute(os,T3),i.setAttribute(j3,nd);var u=bz();return u&&i.setAttribute("nonce",u),a.insertBefore(i,l),i},xz=function(){function e(t){this.element=D3(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var i=document.styleSheets,o=0,l=i.length;o<l;o++){var u=i[o];if(u.ownerNode===a)return u}throw hl(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,a){try{return this.sheet.insertRule(a,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var a=this.sheet.cssRules[t];return a&&a.cssText?a.cssText:""},e}(),yz=function(){function e(t){this.element=D3(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,a){if(t<=this.length&&t>=0){var i=document.createTextNode(a);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),vz=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,a){return t<=this.length&&(this.rules.splice(t,0,a),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Jy=Ru,wz={isServer:!Ru,useCSSOMInjection:!QM},P3=function(){function e(t,a,i){t===void 0&&(t=ls),a===void 0&&(a={});var o=this;this.options=Wt(Wt({},wz),t),this.gs=a,this.names=new Map(i),this.server=!!t.isServer,!this.server&&Ru&&Jy&&(Jy=!1,Zy(this)),xm(this,function(){return function(l){for(var u=l.getTag(),p=u.length,f="",g=function(x){var y=function(M){return Lu.get(M)}(x);if(y===void 0)return"continue";var v=l.names.get(y),S=u.getGroup(x);if(v===void 0||!v.size||S.length===0)return"continue";var k="".concat(os,".g").concat(x,'[id="').concat(y,'"]'),A="";v!==void 0&&v.forEach(function(M){M.length>0&&(A+="".concat(M,","))}),f+="".concat(S).concat(k,'{content:"').concat(A,'"}').concat(mm)},m=0;m<p;m++)g(m);return f}(o)})}return e.registerId=function(t){return _c(t)},e.prototype.rehydrate=function(){!this.server&&Ru&&Zy(this)},e.prototype.reconstructWithOptions=function(t,a){return a===void 0&&(a=!0),new e(Wt(Wt({},this.options),t),this.gs,a&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(a){var i=a.useCSSOMInjection,o=a.target;return a.isServer?new vz(o):i?new xz(o):new yz(o)}(this.options),new dz(t)));var t},e.prototype.hasNameForId=function(t,a){return this.names.has(t)&&this.names.get(t).has(a)},e.prototype.registerName=function(t,a){if(_c(t),this.names.has(t))this.names.get(t).add(a);else{var i=new Set;i.add(a),this.names.set(t,i)}},e.prototype.insertRules=function(t,a,i){this.registerName(t,a),this.getTag().insertRules(_c(t),i)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(_c(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Sz=/&/g,kz=/^\s*\/\/.*$/gm;function V3(e,t){return e.map(function(a){return a.type==="rule"&&(a.value="".concat(t," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(t," ")),a.props=a.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=V3(a.children,t)),a})}function Tz(e){var t,a,i,o=ls,l=o.options,u=l===void 0?ls:l,p=o.plugins,f=p===void 0?ad:p,g=function(y,v,S){return S.startsWith(a)&&S.endsWith(a)&&S.replaceAll(a,"").length>0?".".concat(t):y},m=f.slice();m.push(function(y){y.type===Zu&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(Sz,a).replace(i,g))}),u.prefix&&m.push(XM),m.push(qM);var x=function(y,v,S,k){v===void 0&&(v=""),S===void 0&&(S=""),k===void 0&&(k="&"),t=k,a=v,i=new RegExp("\\".concat(a,"\\b"),"g");var A=y.replace(kz,""),M=IM(S||v?"".concat(S," ").concat(v," { ").concat(A," }"):A);u.namespace&&(M=V3(M,u.namespace));var z=[];return zu(M,KM(m.concat(YM(function(C){return z.push(C)})))),z};return x.hash=f.length?f.reduce(function(y,v){return v.name||hl(15),Xr(y,v.name)},A3).toString():"",x}var jz=new P3,lg=Tz(),N3=Ae.createContext({shouldForwardProp:void 0,styleSheet:jz,stylis:lg});N3.Consumer;Ae.createContext(void 0);function ev(){return j.useContext(N3)}var B3=function(){function e(t,a){var i=this;this.inject=function(o,l){l===void 0&&(l=lg);var u=i.name+l.hash;o.hasNameForId(i.id,u)||o.insertRules(i.id,u,l(i.rules,u,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=a,xm(this,function(){throw hl(12,String(i.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=lg),this.name+t.hash},e}(),Cz=function(e){return e>="A"&&e<="Z"};function tv(e){for(var t="",a=0;a<e.length;a++){var i=e[a];if(a===1&&i==="-"&&e[0]==="-")return e;Cz(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var _3=function(e){return e==null||e===!1||e===""},$3=function(e){var t,a,i=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!_3(l)&&(Array.isArray(l)&&l.isCss||cs(l)?i.push("".concat(tv(o),":"),l,";"):il(l)?i.push.apply(i,al(al(["".concat(o," {")],$3(l),!1),["}"],!1)):i.push("".concat(tv(o),": ").concat((t=o,(a=l)==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||t in WM||t.startsWith("--")?String(a).trim():"".concat(a,"px")),";")))}return i};function Fi(e,t,a,i){if(_3(e))return[];if(bm(e))return[".".concat(e.styledComponentId)];if(cs(e)){if(!cs(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var o=e(t);return Fi(o,t,a,i)}var l;return e instanceof B3?a?(e.inject(a,i),[e.getName(i)]):[e]:il(e)?$3(e):Array.isArray(e)?Array.prototype.concat.apply(ad,e.map(function(u){return Fi(u,t,a,i)})):[e.toString()]}function Az(e){for(var t=0;t<e.length;t+=1){var a=e[t];if(cs(a)&&!bm(a))return!1}return!0}var Ez=E3(nd),Mz=function(){function e(t,a,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&Az(t),this.componentId=a,this.baseHash=Xr(Ez,a),this.baseStyle=i,P3.registerId(a)}return e.prototype.generateAndInjectStyles=function(t,a,i){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,a,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))o=$i(o,this.staticRulesId);else{var l=sg(Fi(this.rules,t,a,i)),u=rg(Xr(this.baseHash,l)>>>0);if(!a.hasNameForId(this.componentId,u)){var p=i(l,".".concat(u),void 0,this.componentId);a.insertRules(this.componentId,u,p)}o=$i(o,u),this.staticRulesId=u}else{for(var f=Xr(this.baseHash,i.hash),g="",m=0;m<this.rules.length;m++){var x=this.rules[m];if(typeof x=="string")g+=x;else if(x){var y=sg(Fi(x,t,a,i));f=Xr(f,y+m),g+=y}}if(g){var v=rg(f>>>0);a.hasNameForId(this.componentId,v)||a.insertRules(this.componentId,v,i(g,".".concat(v),void 0,this.componentId)),o=$i(o,v)}}return o},e}(),H3=Ae.createContext(void 0);H3.Consumer;var Zp={};function zz(e,t,a){var i=bm(e),o=e,l=!Qp(e),u=t.attrs,p=u===void 0?ad:u,f=t.componentId,g=f===void 0?function(H,E){var V=typeof H!="string"?"sc":Ky(H);Zp[V]=(Zp[V]||0)+1;var N="".concat(V,"-").concat(M3(nd+V+Zp[V]));return E?"".concat(E,"-").concat(N):N}(t.displayName,t.parentComponentId):f,m=t.displayName,x=m===void 0?function(H){return Qp(H)?"styled.".concat(H):"Styled(".concat(nz(H),")")}(e):m,y=t.displayName&&t.componentId?"".concat(Ky(t.displayName),"-").concat(t.componentId):t.componentId||g,v=i&&o.attrs?o.attrs.concat(p).filter(Boolean):p,S=t.shouldForwardProp;if(i&&o.shouldForwardProp){var k=o.shouldForwardProp;if(t.shouldForwardProp){var A=t.shouldForwardProp;S=function(H,E){return k(H,E)&&A(H,E)}}else S=k}var M=new Mz(a,y,i?o.componentStyle:void 0);function z(H,E){return function(V,N,O){var X=V.attrs,J=V.componentStyle,$=V.defaultProps,te=V.foldedComponentIds,ce=V.styledComponentId,le=V.target,oe=Ae.useContext(H3),D=ev(),B=V.shouldForwardProp||D.shouldForwardProp,G=ZM(N,oe,$)||ls,Z=function(xe,de,bt){for(var Oe,Lt=Wt(Wt({},de),{className:void 0,theme:bt}),gi=0;gi<xe.length;gi+=1){var da=cs(Oe=xe[gi])?Oe(Lt):Oe;for(var bn in da)Lt[bn]=bn==="className"?$i(Lt[bn],da[bn]):bn==="style"?Wt(Wt({},Lt[bn]),da[bn]):da[bn]}return de.className&&(Lt.className=$i(Lt.className,de.className)),Lt}(X,N,G),L=Z.as||le,Y={};for(var ne in Z)Z[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&Z.theme===G||(ne==="forwardedAs"?Y.as=Z.forwardedAs:B&&!B(ne,L)||(Y[ne]=Z[ne]));var ae=function(xe,de){var bt=ev(),Oe=xe.generateAndInjectStyles(de,bt.styleSheet,bt.stylis);return Oe}(J,Z),se=$i(te,ce);return ae&&(se+=" "+ae),Z.className&&(se+=" "+Z.className),Y[Qp(L)&&!C3.has(L)?"class":"className"]=se,O&&(Y.ref=O),j.createElement(L,Y)}(C,H,E)}z.displayName=x;var C=Ae.forwardRef(z);return C.attrs=v,C.componentStyle=M,C.displayName=x,C.shouldForwardProp=S,C.foldedComponentIds=i?$i(o.foldedComponentIds,o.styledComponentId):"",C.styledComponentId=y,C.target=i?o.target:e,Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(H){this._foldedDefaultProps=i?function(E){for(var V=[],N=1;N<arguments.length;N++)V[N-1]=arguments[N];for(var O=0,X=V;O<X.length;O++)og(E,X[O],!0);return E}({},o.defaultProps,H):H}}),xm(C,function(){return".".concat(C.styledComponentId)}),l&&O3(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),C}function nv(e,t){for(var a=[e[0]],i=0,o=t.length;i<o;i+=1)a.push(t[i],e[i+1]);return a}var av=function(e){return Object.assign(e,{isCss:!0})};function id(e){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];if(cs(e)||il(e))return av(Fi(nv(ad,al([e],t,!0))));var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Fi(i):av(Fi(nv(i,t)))}function cg(e,t,a){if(a===void 0&&(a=ls),!t)throw hl(1,t);var i=function(o){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return e(t,a,id.apply(void 0,al([o],l,!1)))};return i.attrs=function(o){return cg(e,t,Wt(Wt({},a),{attrs:Array.prototype.concat(a.attrs,o).filter(Boolean)}))},i.withConfig=function(o){return cg(e,t,Wt(Wt({},a),o))},i}var U3=function(e){return cg(zz,e)},R=U3;C3.forEach(function(e){R[e]=U3(e)});function Ke(e){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];var i=sg(id.apply(void 0,al([e],t,!1))),o=M3(i);return new B3(o,i)}const Rz=R.div`
  display: inline-flex;
  align-items: center;

  @media (min-width: 1024px) {
    display: none;
  }
`,Lz=R.button`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 11px;
  background: rgba(255, 255, 255, 0.06);
  z-index: 2301;
`,Jp=R(ie.span)`
  width: 22px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  display: block;
`,Oz=R(ie.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  max-width: 100vw;
  height: 100dvh;
  min-height: 100vh;
  background: rgba(5, 8, 16, 1);
  z-index: 2300;
  pointer-events: auto;
  touch-action: pan-y;
  padding: 96px 20px 20px;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Dz=R.div`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: -96px -20px 8px;
  padding: 18px 20px 14px;
  background: rgba(5, 8, 16, 0.96);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  z-index: 1;
`,Pz=R.span`
  font-family: 'Orbitron', 'Geist', 'Segoe UI', sans-serif;
  font-size: clamp(28px, 8vw, 42px);
  font-weight: 800;
  letter-spacing: 0.03em;
  line-height: 1;
  background: linear-gradient(105deg, #c9861e, #ffe7bb, #ffb43f, #ffe7bb, #c9861e);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: logoFlow 4.8s ease-in-out infinite;
`,Vz=R.button`
  width: 42px;
  height: 42px;
  border: 1px solid rgba(255, 255, 255, 0.32);
  border-radius: 11px;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 260ms ease, border-color 260ms ease, transform 260ms ease;

  &:hover,
  &:focus-visible {
    background: rgba(255, 255, 255, 0.16);
    border-color: rgba(255, 219, 156, 0.7);
    transform: translateY(-1px);
  }
`,$r=R(la)`
  color: #fff;
  text-decoration: none;
  font-size: clamp(30px, 8vw, 48px);
  font-weight: 700;
  line-height: 1.06;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 6px 0;
`,To=R.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.16);
  margin: 2px 0 6px;
`,Nz=Ke`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Bz=Ke`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,_z=R.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${({$menuOpen:e})=>e?2e3:120};
  backdrop-filter: blur(10px);
  background: rgba(7, 9, 16, 0.78);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,$z=R.div`
  width: 100%;
  max-width: 1560px;
  margin: 0 auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
`,Hz=R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  min-height: 76px;
  position: relative;

  @media (max-width: 767px) {
    min-height: 66px;
    gap: 8px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    min-height: 72px;
    gap: 10px;
  }
`,Uz=R(la)`
  display: inline-flex;
  align-items: center;
  line-height: 0;
  text-decoration: none;
`,Gz=R.span`
  font-family: 'Orbitron', 'Geist', 'Segoe UI', sans-serif;
  font-size: clamp(30px, 4vw, 52px);
  font-weight: 800;
  letter-spacing: 0.03em;
  line-height: 1;
  background: linear-gradient(105deg, #c9861e, #ffe7bb, #ffb43f, #ffe7bb, #c9861e);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${Nz} 4.8s ease-in-out infinite;
  filter: drop-shadow(0 0 18px rgba(255, 198, 109, 0.55));

  @media (max-width: 767px) {
    font-size: 38px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 44px;
  }

  @media (min-width: 1920px) {
    font-size: 62px;
  }
`,Iz=R.nav`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: 1023px) {
    display: none;
  }
`,jo=R(la)`
  color: rgba(255, 255, 255, 0.86);
  font-size: 15px;
  font-weight: 500;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: color var(--dur-mid) var(--ease-smooth), transform var(--dur-mid) var(--ease-smooth);

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transform-origin: left;
    background: linear-gradient(90deg, #ffb65b, #ffe5b7, #ffb65b);
    background-size: 220% 100%;
    transition: transform var(--dur-mid) var(--ease-smooth), background-position var(--dur-slow) var(--ease-smooth);
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
    color: #ffe6b5;
  }

  &:hover::after,
  &:focus-visible::after,
  &.active::after {
    transform: scaleX(1);
    background-position: 100% 50%;
  }

  &.active {
    color: #ffcc7f;
  }
`,Fz=R.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
  position: relative;
  z-index: 1200;
`,qz=R(la)`
  border: 1px solid rgba(255, 182, 84, 0.7);
  background: linear-gradient(120deg, #f09a48, #ffd9a1, #f09a48);
  background-size: 220% 220%;
  color: #101321;
  font-weight: 700;
  padding: 11px 16px;
  border-radius: 12px;
  white-space: nowrap;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: transform var(--dur-mid) var(--ease-smooth), box-shadow var(--dur-mid) var(--ease-smooth),
    filter var(--dur-mid) var(--ease-smooth), color var(--dur-mid) var(--ease-smooth),
    background var(--dur-mid) var(--ease-smooth);

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
    box-shadow: 0 14px 24px rgba(240, 154, 72, 0.35);
    filter: brightness(1.04);
    animation: ${Bz} 2.2s linear infinite;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`,Kz=R.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`,Yz=R.button`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(6, 10, 20, 0.88);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 1;
  transition: border-color var(--dur-fast) var(--ease-smooth), background var(--dur-fast) var(--ease-smooth),
    transform var(--dur-fast) var(--ease-smooth);

  &:hover,
  &:focus-visible {
    border-color: rgba(255, 210, 138, 0.8);
    background: rgba(10, 15, 28, 0.95);
    transform: translateY(-1px);
  }

  @media (max-width: 767px) {
    width: 38px;
    height: 38px;
    font-size: 18px;
  }
`,iv=R.span`
  font-size: 18px;
  line-height: 1;
`,Xz=R.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: min(280px, calc(100vw - (var(--gutter) * 2)));
  max-height: min(62vh, 360px);
  overflow-y: auto;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(7, 12, 24, 0.98);
  box-shadow: 0 16px 26px rgba(0, 0, 0, 0.35);
  padding: 8px;
  z-index: 180;

  @media (max-width: 767px) {
    width: min(250px, calc(100vw - 20px));
  }
`,Wz=R.button`
  width: 100%;
  border: 1px solid ${({$active:e})=>e?"rgba(255, 210, 138, 0.5)":"transparent"};
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.94);
  background: ${({$active:e})=>e?"rgba(255, 255, 255, 0.06)":"transparent"};
  padding: 8px 10px;
  text-align: left;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: border-color var(--dur-fast) var(--ease-smooth), background var(--dur-fast) var(--ease-smooth);

  &:hover,
  &:focus-visible {
    border-color: rgba(255, 210, 138, 0.5);
    background: rgba(255, 255, 255, 0.06);
  }
`,Qz={open:{rotate:45,y:8},closed:{rotate:0,y:0}},Zz={open:{opacity:0},closed:{opacity:1}},Jz={open:{rotate:-45,y:-8},closed:{rotate:0,y:0}},eR={open:{opacity:1},closed:{opacity:0}},tR={de:"Deutsch",uk:"Українська",tr:"Türkçe",ar:"العربية",pl:"Polski",ku:"Kurmancî",fa:"فارسی",it:"Italiano",es:"Español",el:"Ελληνικά",ro:"Română",bg:"Български"},rv={de:"DE",uk:"UA",tr:"TR",ar:"SA",pl:"PL",ku:"KU",fa:"IR",it:"IT",es:"ES",el:"GR",ro:"RO",bg:"BG"},nR=()=>{const[e,t]=j.useState(!1),[a,i]=j.useState(!1),{language:o,setLanguage:l}=RM(),{t:u}=Ie(),p=j.useRef(null);j.useEffect(()=>{const m=x=>{p.current&&(p.current.contains(x.target)||i(!1))};return document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[]),j.useEffect(()=>(e?(document.body.classList.add("modal-open"),i(!1)):document.body.classList.remove("modal-open"),()=>document.body.classList.remove("modal-open")),[e]);const f=()=>t(!1),g=m=>{l(m),i(!1)};return d.jsxs(_z,{$menuOpen:e,children:[d.jsx($z,{children:d.jsxs(Hz,{children:[d.jsx(Uz,{to:"/",onClick:f,children:d.jsx(ie.div,{initial:{opacity:0,y:-12,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.82,ease:Fu},children:d.jsx(Gz,{children:"<VS/>"})})}),d.jsxs(Iz,{children:[d.jsxs(jo,{to:"/services",children:[d.jsx(my,{})," ",u("header.services")]}),d.jsxs(jo,{to:"/preise",children:[d.jsx(Su,{})," ",u("header.preise")]}),d.jsxs(jo,{to:"/referenzen",children:[d.jsx(by,{})," ",u("header.referenzen")]}),d.jsxs(jo,{to:"/ueber-uns",children:[d.jsx(xy,{})," ",u("header.ueberUns")]}),d.jsxs(jo,{to:"/kontakt",children:[d.jsx(ui,{})," ",u("header.kontakt")]})]}),d.jsxs(Fz,{children:[d.jsxs(qz,{to:"/kontakt",children:[d.jsx(_n,{})," ",u("common.projectRequest")]}),e?null:d.jsxs(Kz,{ref:p,children:[d.jsx(Yz,{type:"button","aria-expanded":a,"aria-label":"Language switcher",onClick:()=>i(m=>!m),children:d.jsx(iv,{children:rv[o]})}),a?d.jsx(Xz,{children:pm.map(m=>d.jsxs(Wz,{type:"button",$active:o===m,onClick:()=>g(m),children:[d.jsx(iv,{children:rv[m]}),d.jsx("span",{children:tR[m]})]},m))}):null]}),d.jsx(Rz,{children:d.jsxs(Lz,{onClick:()=>t(m=>!m),"aria-label":e?"Close menu":"Open menu",children:[d.jsx(Jp,{animate:e?"open":"closed",variants:Qz}),d.jsx(Jp,{animate:e?"open":"closed",variants:Zz}),d.jsx(Jp,{animate:e?"open":"closed",variants:Jz})]})})]})]})}),typeof document<"u"?Bk.createPortal(d.jsx(s4,{children:e?d.jsxs(Oz,{initial:"closed",animate:"open",exit:"closed",variants:eR,transition:{duration:.28,ease:_g},children:[d.jsxs(Dz,{children:[d.jsx(Pz,{children:"<VS/>"}),d.jsx(Vz,{type:"button","aria-label":"Close menu",onClick:f,children:d.jsx(fE,{})})]}),d.jsxs($r,{to:"/services",onClick:f,children:[d.jsx(my,{})," ",u("header.services")]}),d.jsx(To,{}),d.jsxs($r,{to:"/preise",onClick:f,children:[d.jsx(Su,{})," ",u("header.preise")]}),d.jsx(To,{}),d.jsxs($r,{to:"/referenzen",onClick:f,children:[d.jsx(by,{})," ",u("header.referenzen")]}),d.jsx(To,{}),d.jsxs($r,{to:"/ueber-uns",onClick:f,children:[d.jsx(xy,{})," ",u("header.ueberUns")]}),d.jsx(To,{}),d.jsxs($r,{to:"/kontakt",onClick:f,children:[d.jsx(ui,{})," ",u("header.kontakt")]}),d.jsx(To,{}),d.jsxs($r,{to:"/kontakt",onClick:f,children:[d.jsx(_n,{})," ",u("common.projectRequest")]})]}):null}),document.body):null]})},aR=R.footer`
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding: 30px 0 44px;
  background: rgba(8, 10, 18, 0.9);
`,iR=R.div`
  width: 100%;
  max-width: 1560px;
  margin: 0 auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
`,rR=R.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,sR=R.div`
  p {
    margin: 0;
  }
`,oR=R.p`
  color: rgba(255, 255, 255, 0.72) !important;
  margin-top: 4px !important;

  a {
    color: inherit;
    text-decoration: none;
    transition: color var(--dur-fast) var(--ease-smooth);
  }

  a:hover,
  a:focus-visible {
    color: #ffd08a;
  }
`,lR=R.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 14px;
`,G3=`
  color: rgba(255, 255, 255, 0.84);
  text-decoration: none;
  transition: transform var(--dur-fast) var(--ease-smooth), color var(--dur-fast) var(--ease-smooth);

  &:hover,
  &:focus-visible {
    color: #ffd08a;
    transform: translateY(-1px);
  }
`,Co=R(la)`
  ${G3}
`,cR=R.button`
  ${G3}
  border: 0;
  background: transparent;
  padding: 0;
  font: inherit;
  cursor: pointer;
`,uR=e=>/[\u00C3\u00C2\uFFFD]/.test(e),Pi=(e,t)=>uR(e)?t:e,dR=()=>{const{t:e}=Ie(),t=()=>{window.dispatchEvent(new Event("open-cookie-settings"))};return d.jsx(aR,{children:d.jsx(iR,{children:d.jsxs(rR,{children:[d.jsxs(sR,{children:[d.jsx("p",{children:Pi(e("footer.tagline"),"VS Studio - Websites, Web-Apps, Ads & Automationen")}),d.jsxs(oR,{children:[d.jsx("a",{href:"mailto:anfrage@vs-web-studio.de",children:"anfrage@vs-web-studio.de"})," | ",d.jsx("a",{href:"tel:+4915164392053",children:"+49 1516 4392053"})]})]}),d.jsxs(lR,{children:[d.jsx(Co,{to:"/impressum",children:Pi(e("footer.impressum"),"Impressum")}),d.jsx(Co,{to:"/datenschutz",children:Pi(e("footer.datenschutz"),"Datenschutz")}),d.jsx(Co,{to:"/agb",children:Pi(e("footer.agb"),"AGB")}),d.jsx(Co,{to:"/cookies",children:Pi(e("footer.cookies"),"Cookies")}),d.jsx(cR,{type:"button",onClick:t,children:Pi(e("footer.cookieSettings"),"Cookie-Einstellungen")}),d.jsx(Co,{to:"/blog",children:Pi(e("footer.blog"),"Blog")})]})]})})})},eh="cookie_consent_v2",fR=()=>{const{t:e}=Ie(),[t,a]=j.useState(!1),[i,o]=j.useState(!1),[l,u]=j.useState(!1),[p,f]=j.useState(!1),[g,m]=j.useState(!1);j.useEffect(()=>{const v=window.localStorage.getItem(eh);if(v)try{const S=JSON.parse(v);f(!!S.statistics),m(!!S.marketing)}catch{}o(!v),a(!0)},[]),j.useEffect(()=>{const v=()=>{const S=window.localStorage.getItem(eh);if(S)try{const k=JSON.parse(S);f(!!k.statistics),m(!!k.marketing)}catch{}o(!0),u(!0)};return window.addEventListener("open-cookie-settings",v),()=>window.removeEventListener("open-cookie-settings",v)},[]);const x=j.useMemo(()=>({essential:!0,statistics:p,marketing:g}),[p,g]),y=v=>{window.localStorage.setItem(eh,JSON.stringify(v)),o(!1),u(!1)};return!t||!i?null:d.jsxs(d.Fragment,{children:[d.jsxs(ie.div,{className:"cookie-banner",initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.5},role:"dialog","aria-live":"polite","aria-label":e("cookie.aria"),children:[d.jsxs("div",{className:"cookie-text",children:[e("cookie.bannerText")," ",d.jsx("a",{href:"/datenschutz",children:e("footer.datenschutz")}),","," ",d.jsx("a",{href:"/cookies",children:e("footer.cookies")}),","," ",d.jsx("a",{href:"/impressum",children:e("footer.impressum")}),"."]}),d.jsxs("div",{className:"cookie-actions",children:[d.jsx("button",{className:"btn btn-secondary cookie-btn",onClick:()=>y({essential:!0,statistics:!1,marketing:!1}),children:e("cookie.onlyEssential")}),d.jsx("button",{className:"btn btn-secondary cookie-btn",onClick:()=>u(!0),children:e("cookie.settings")}),d.jsx("button",{className:"btn btn-primary cookie-btn",onClick:()=>y({essential:!0,statistics:!0,marketing:!0}),children:e("cookie.acceptAll")})]})]}),l?d.jsx(ie.div,{className:"cookie-modal-backdrop",initial:{opacity:0},animate:{opacity:1},children:d.jsxs(ie.div,{className:"cookie-modal",initial:{opacity:0,y:16},animate:{opacity:1,y:0},children:[d.jsx("h3",{children:e("cookie.modalTitle")}),d.jsx("p",{className:"muted",children:e("cookie.modalText")}),d.jsxs("label",{className:"cookie-option",children:[d.jsx("input",{type:"checkbox",checked:!0,disabled:!0}),d.jsx("span",{children:e("cookie.essential")})]}),d.jsxs("label",{className:"cookie-option",children:[d.jsx("input",{type:"checkbox",checked:p,onChange:v=>f(v.target.checked)}),d.jsx("span",{children:e("cookie.statistics")})]}),d.jsxs("label",{className:"cookie-option",children:[d.jsx("input",{type:"checkbox",checked:g,onChange:v=>m(v.target.checked)}),d.jsx("span",{children:e("cookie.marketing")})]}),d.jsxs("div",{className:"cookie-actions",children:[d.jsx("button",{className:"btn btn-secondary cookie-btn",onClick:()=>u(!1),children:e("common.cancel")}),d.jsx("button",{className:"btn btn-primary cookie-btn",onClick:()=>y(x),children:e("cookie.saveSelection")})]})]})}):null]})},pR={baseUrl:"https://vs-web-studio.de",siteName:"VS Web Studio",defaultImage:"https://vs-web-studio.de/og.png",defaultImageAlt:"VS Web Studio - Websites, SEO und Lead-Systeme",locale:"de_DE",language:"de",themeColor:"#0B0B0F",telephone:"+49 1516 4392053",email:"anfrage@vs-web-studio.de",priceRange:"EUR",address:{streetAddress:"Ehrlicherstr. 52",addressLocality:"Hildesheim",postalCode:"31135",addressCountry:"DE"},geo:{latitude:"52.154778",longitude:"9.957965"}},hR=[{question:"Wie schnell koennen Sie starten?",answer:"In der Regel starten wir innerhalb von drei bis fuenf Werktagen. Nach der Anfrage erhalten Sie einen klaren Startplan mit den ersten Schritten."},{question:"Was wird am Anfang benoetigt?",answer:"Fuer den Start reichen Basisinfos zu Angebot, Zielgruppe und Kontaktwegen. Struktur, Texte und Prioritaeten erarbeiten wir gemeinsam."},{question:"Wie laeuft die Zusammenarbeit ab?",answer:"Wir arbeiten in klaren Etappen: Konzept, Design, Entwicklung, Launch und Optimierung. Sie erhalten waehrend des gesamten Projekts transparente Updates."},{question:"Ist das Angebot für kleine Unternehmen geeignet?",answer:"Ja. Die Pakete sind bewusst für lokale Unternehmen aufgebaut und fokussieren Anfragen, klare Preise und eine schnelle Umsetzung."},{question:"Was passiert nach dem Launch?",answer:"Nach dem Launch pruefen wir Tracking, Conversion-Punkte und Ladezeit und erstellen einen konkreten Verbesserungsplan für die naechsten 30 Tage."}],gR=[{name:"Starter",price:"ab EUR 690",description:"Landingpage mit Lead-Formular, Tracking und SEO-Basis für kleine lokale Unternehmen."},{name:"Business",price:"ab EUR 1.290",description:"Mehrseitige Website mit CRM-Integration, Tracking und Conversion-Fokus."},{name:"Pro",price:"ab EUR 2.490",description:"Growth-Setup mit Website, Ads, Marketing-Dashboard und Automationen."}],mR=[{path:"/",name:"Startseite",title:"VS Web Studio | Websites, SEO und Lead-Systeme für Deutschland",description:"VS Web Studio entwickelt schnelle Websites, Landingpages und Lead-Systeme für lokale Unternehmen in Deutschland. SEO, Performance, Tracking und Conversion aus einer Hand.",keywords:"webagentur deutschland, webdesign hildesheim, seo agentur niedersachsen, landingpage agentur, lead system für lokale unternehmen, performance website",pageKind:"home",changeFrequency:"weekly",priority:1,indexable:!0,sitemap:!0,breadcrumb:["Startseite"]},{path:"/services",name:"Leistungen",title:"Leistungen | Website, SEO, Tracking, Ads und Automationen",description:"Website-Entwicklung, SEO-Basis, Tracking, Social Ads, KI-Automationen und Lead-Systeme für lokale Unternehmen in Deutschland.",keywords:"website entwicklung deutschland, seo basis, tracking setup, social ads agentur, ki automation, lead funnel",pageKind:"services",changeFrequency:"weekly",priority:.95,indexable:!0,sitemap:!0,breadcrumb:["Startseite","Leistungen"]},{path:"/preise",name:"Preise",title:"Preise | Website- und Lead-Systeme ab EUR 690",description:"Transparente Preise für Landingpages, mehrseitige Websites und Lead-Systeme inklusive SEO-Basis, Tracking und Support für lokale Unternehmen.",keywords:"website preise deutschland, landingpage ab 690, webagentur preise, lead system kosten, seo paket",pageKind:"pricing",changeFrequency:"weekly",priority:.92,indexable:!0,sitemap:!0,breadcrumb:["Startseite","Preise"]},{path:"/referenzen",name:"Referenzen",title:"Referenzen | Messbare Ergebnisse für lokale Unternehmen",description:"Ausgewaehlte Referenzen mit messbaren Ergebnissen: mehr Anfragen, mehr Termine, mehr qualifizierte Leads und bessere Conversion.",keywords:"webagentur referenzen, case studies lokale unternehmen, mehr anfragen website, conversion optimierung referenzen",pageKind:"references",changeFrequency:"weekly",priority:.9,indexable:!0,sitemap:!0,breadcrumb:["Startseite","Referenzen"]},{path:"/ueber-uns",name:"Ueber uns",title:"Ueber VS Web Studio | Webagentur aus Hildesheim",description:"VS Web Studio aus Hildesheim entwickelt Websites und Lead-Systeme für lokale Unternehmen in Niedersachsen und ganz Deutschland.",keywords:"webagentur hildesheim, webdesign niedersachsen, ueber vs web studio, lokale agentur deutschland",pageKind:"about",changeFrequency:"monthly",priority:.86,indexable:!0,sitemap:!0,breadcrumb:["Startseite","Ueber uns"]},{path:"/kontakt",name:"Kontakt",title:"Kontakt | Projektanfrage an VS Web Studio",description:"Projektanfrage für Website, Relaunch, SEO, Tracking oder Lead-System. Direkter Kontakt mit VS Web Studio in Hildesheim.",keywords:"kontakt webagentur hildesheim, projektanfrage website, seo agentur kontakt, landingpage anfragen",pageKind:"contact",changeFrequency:"monthly",priority:.88,indexable:!0,sitemap:!0,breadcrumb:["Startseite","Kontakt"]},{path:"/blog",name:"Blog",title:"Blog | Insights zu Website, SEO, Ads und Automationen",description:"Insights zu Websites, Lead-Funnels, SEO, Tracking, Social Ads und Automationen für lokale Unternehmen in Deutschland.",keywords:"website blog deutschland, seo insights, lead funnel tipps, social ads tracking, automation blog",pageKind:"blog",changeFrequency:"weekly",priority:.76,indexable:!0,sitemap:!0,breadcrumb:["Startseite","Blog"]},{path:"/handwerker",name:"Handwerker",title:"Websites für Handwerker | Mehr passende Anfragen",description:"Websites für Handwerker mit lokaler Sichtbarkeit, klaren Leistungsseiten, schneller Ladezeit und direktem Anfrage-Fokus.",keywords:"website für handwerker, handwerker webdesign, lokale sichtbarkeit handwerk, anfragen für handwerker",pageKind:"niche",changeFrequency:"monthly",priority:.84,indexable:!0,sitemap:!0,breadcrumb:["Startseite","Handwerker"]},{path:"/praxis",name:"Praxis",title:"Websites für Praxen | Mehr Terminanfragen und weniger Rueckfragen",description:"Websites für Praxen mit patientenfreundlicher Struktur, klaren Kontaktwegen und messbarer Conversion für Terminanfragen.",keywords:"website für praxis, arztpraxis webdesign, terminanfragen website, praxis marketing deutschland",pageKind:"niche",changeFrequency:"monthly",priority:.84,indexable:!0,sitemap:!0,breadcrumb:["Startseite","Praxis"]},{path:"/werkstatt",name:"Werkstatt",title:"Websites für Werkstaetten | Planbare Leads statt Zufall",description:"Website- und Lead-Systeme für Werkstaetten mit serviceorientierten Seiten, Tracking und klarem Anfrageprozess.",keywords:"website für werkstatt, auto werkstatt webdesign, lead system werkstatt, conversion website servicebetrieb",pageKind:"niche",changeFrequency:"monthly",priority:.84,indexable:!0,sitemap:!0,breadcrumb:["Startseite","Werkstatt"]},{path:"/impressum",name:"Impressum",title:"Impressum | VS Web Studio",description:"Rechtliche Angaben von VS Web Studio.",keywords:"impressum vs web studio",pageKind:"legal",changeFrequency:"yearly",priority:.2,indexable:!1,sitemap:!1,breadcrumb:["Startseite","Impressum"]},{path:"/datenschutz",name:"Datenschutz",title:"Datenschutz | VS Web Studio",description:"Datenschutzhinweise von VS Web Studio.",keywords:"datenschutz vs web studio",pageKind:"legal",changeFrequency:"yearly",priority:.2,indexable:!1,sitemap:!1,breadcrumb:["Startseite","Datenschutz"]},{path:"/agb",name:"AGB",title:"AGB | VS Web Studio",description:"Allgemeine Geschaeftsbedingungen von VS Web Studio.",keywords:"agb vs web studio",pageKind:"legal",changeFrequency:"yearly",priority:.2,indexable:!1,sitemap:!1,breadcrumb:["Startseite","AGB"]},{path:"/cookies",name:"Cookies",title:"Cookie-Hinweise | VS Web Studio",description:"Informationen zu Cookies und Messdiensten von VS Web Studio.",keywords:"cookies vs web studio",pageKind:"legal",changeFrequency:"yearly",priority:.2,indexable:!1,sitemap:!1,breadcrumb:["Startseite","Cookies"]}],bR={site:pR,homeFaq:hR,pricingPackages:gR,routes:mR},Ge=bR,Xn=Ge.site,xR=Ge.homeFaq,yR=new Map(Ge.routes.map(e=>[e.path,e])),vR={path:"/404",name:"404",title:"404 | Seite nicht gefunden | VS Web Studio",description:"Die angeforderte Seite wurde nicht gefunden. Wechseln Sie zur Startseite oder senden Sie uns direkt eine Projektanfrage.",keywords:"404, seite nicht gefunden, vs web studio",pageKind:"notFound",changeFrequency:"yearly",priority:0,indexable:!1,sitemap:!1,breadcrumb:["Startseite","404"],absoluteUrl:`${Ge.site.baseUrl}/404`,robots:"noindex,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",canonicalUrl:null},wR=e=>{var i;const t=((i=e.split("?")[0])==null?void 0:i.split("#")[0])??"/";if(!t||t==="/")return"/";const a=t.endsWith("/")?t.slice(0,-1):t;return a==="/home"?"/":a},pi=e=>e==="/"?`${Ge.site.baseUrl}/`:`${Ge.site.baseUrl}${e}`,SR=e=>{const t=wR(e),a=yR.get(t);return a?{...a,absoluteUrl:pi(a.path),robots:a.indexable?"index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1":"noindex,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",canonicalUrl:pi(a.path)}:vR},ym=`${Ge.site.baseUrl}/#website`,gl=`${Ge.site.baseUrl}/#organization`,kR=["/services","/preise","/referenzen","/ueber-uns","/kontakt"],vm=Ge.routes.filter(e=>kR.includes(e.path)),TR={home:"WebPage",services:"CollectionPage",pricing:"CollectionPage",references:"CollectionPage",about:"AboutPage",contact:"ContactPage",blog:"Blog",niche:"Service",legal:"WebPage",notFound:"WebPage"},jR=e=>({"@type":"BreadcrumbList","@id":`${e.absoluteUrl}#breadcrumb`,itemListElement:e.breadcrumb.map((t,a)=>({"@type":"ListItem",position:a+1,name:t,item:pi(a===0?"/":e.path)}))}),CR=()=>({"@type":["ProfessionalService","Organization"],"@id":gl,name:Ge.site.siteName,url:`${Ge.site.baseUrl}/`,logo:`${Ge.site.baseUrl}/android-chrome-512x512.png`,image:Ge.site.defaultImage,email:Ge.site.email,telephone:Ge.site.telephone,priceRange:Ge.site.priceRange,address:{"@type":"PostalAddress",...Ge.site.address},geo:{"@type":"GeoCoordinates",...Ge.site.geo},areaServed:[{"@type":"City",name:"Hildesheim"},{"@type":"AdministrativeArea",name:"Niedersachsen"},{"@type":"Country",name:"Germany"}],contactPoint:[{"@type":"ContactPoint",contactType:"sales",email:Ge.site.email,telephone:Ge.site.telephone,availableLanguage:["de","uk","en"]}]}),AR=()=>({"@type":"WebSite","@id":ym,url:`${Ge.site.baseUrl}/`,name:Ge.site.siteName,inLanguage:"de-DE",hasPart:vm.map(e=>({"@id":`${pi(e.path)}#navigation`})),publisher:{"@id":gl}}),ER=e=>({"@type":TR[e.pageKind],"@id":`${e.absoluteUrl}#webpage`,url:e.absoluteUrl,name:e.title,headline:e.title,description:e.description,inLanguage:"de-DE",isPartOf:{"@id":ym},about:{"@id":gl},significantLink:e.pageKind==="home"?vm.map(t=>pi(t.path)):void 0,primaryImageOfPage:{"@type":"ImageObject",url:Ge.site.defaultImage}}),MR=()=>vm.map(e=>({"@type":"SiteNavigationElement","@id":`${pi(e.path)}#navigation`,name:e.name,url:pi(e.path),inLanguage:"de-DE",isPartOf:{"@id":ym}})),zR=()=>({"@type":"FAQPage","@id":`${Ge.site.baseUrl}/#faq`,mainEntity:Ge.homeFaq.map(e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}}))}),RR=()=>({"@type":"OfferCatalog","@id":`${Ge.site.baseUrl}/preise#offers`,name:"Website- und Lead-System Pakete",itemListElement:Ge.pricingPackages.map((e,t)=>({"@type":"Offer",position:t+1,name:e.name,description:e.description,priceSpecification:{"@type":"PriceSpecification",priceCurrency:"EUR",description:e.price}}))}),LR=()=>({"@type":"Service","@id":`${Ge.site.baseUrl}/services#service`,serviceType:["Website Entwicklung","Landingpages","SEO Basis","Tracking und Analytics","Social Ads","Automationen und KI"],provider:{"@id":gl},areaServed:"DE"}),OR=e=>({"@type":"Service","@id":`${e.absoluteUrl}#service`,name:e.name,description:e.description,provider:{"@id":gl},areaServed:"DE"}),DR=e=>{const t=[CR(),AR(),ER(e),jR(e),...MR()];return e.pageKind==="home"&&t.push(zR()),e.pageKind==="pricing"&&t.push(RR()),e.pageKind==="services"&&t.push(LR()),e.pageKind==="niche"&&t.push(OR(e)),{"@context":"https://schema.org","@graph":t}},Qe=(e,t,a)=>{let i=document.head.querySelector(`meta[${e}="${t}"]`);i||(i=document.createElement("meta"),i.setAttribute(e,t),document.head.appendChild(i)),i.setAttribute("content",a)},PR=(e,t)=>{let a=document.head.querySelector(`link[rel="${e}"]`);a||(a=document.createElement("link"),a.setAttribute("rel",e),document.head.appendChild(a)),a.setAttribute("href",t)},VR=e=>{let t=document.head.querySelector('script[data-seo="structured-data"]');t||(t=document.createElement("script"),t.type="application/ld+json",t.setAttribute("data-seo","structured-data"),document.head.appendChild(t)),t.textContent=JSON.stringify(e)},NR=()=>{const e=document.head.querySelector('link[rel="canonical"]');e==null||e.remove()},BR=()=>{const e=Hn();return j.useEffect(()=>{const t=SR(e.pathname),a=DR(t);document.title=t.title,document.documentElement.lang=Xn.language,Qe("name","description",t.description),Qe("name","keywords",t.keywords),Qe("name","author",Xn.siteName),Qe("name","robots",t.robots),Qe("name","googlebot",t.robots),Qe("name","theme-color",Xn.themeColor),Qe("property","og:type",t.pageKind==="blog"?"article":"website"),Qe("property","og:locale",Xn.locale),Qe("property","og:site_name",Xn.siteName),Qe("property","og:title",t.title),Qe("property","og:description",t.description),Qe("property","og:url",t.absoluteUrl),Qe("property","og:image",Xn.defaultImage),Qe("property","og:image:secure_url",Xn.defaultImage),Qe("property","og:image:type","image/png"),Qe("property","og:image:width","1200"),Qe("property","og:image:height","630"),Qe("property","og:image:alt",Xn.defaultImageAlt),Qe("name","twitter:card","summary_large_image"),Qe("name","twitter:title",t.title),Qe("name","twitter:description",t.description),Qe("name","twitter:image",Xn.defaultImage),Qe("name","twitter:image:alt",Xn.defaultImageAlt),Qe("name","twitter:url",t.absoluteUrl),t.canonicalUrl?PR("canonical",t.canonicalUrl):NR(),VR(a)},[e.pathname]),null},_R=R.div`
  min-height: 100vh;
  background:
    radial-gradient(1200px 500px at 12% -10%, rgba(255, 160, 70, 0.2), transparent 60%),
    radial-gradient(900px 420px at 88% 10%, rgba(70, 127, 255, 0.22), transparent 60%),
    linear-gradient(180deg, #070812 0%, #0e1220 100%);
`,$R=R(ie.main)`
  padding-top: 76px;

  @media (max-width: 767px) {
    padding-top: 66px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding-top: 72px;
  }
`,HR=()=>{const e=Hn();return j.useEffect(()=>{window.scrollTo({top:0,behavior:"auto"})},[e.pathname]),d.jsxs(_R,{children:[d.jsx(BR,{}),d.jsx(nR,{}),d.jsx(s4,{mode:"wait",children:d.jsx($R,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.32,ease:hn},children:d.jsx(ak,{})},e.pathname)}),d.jsx(dR,{}),d.jsx(fR,{})]})};function UR(e=!1){j.useEffect(()=>{if(e)return;let t=0,a=window.innerWidth*.5,i=window.innerHeight*.3;const o=()=>{document.documentElement.style.setProperty("--spotlight-x",`${a}px`),document.documentElement.style.setProperty("--spotlight-y",`${i}px`),t=0},l=u=>{a=u.clientX,i=u.clientY,t||(t=window.requestAnimationFrame(o))};return window.addEventListener("pointermove",l,{passive:!0}),o(),()=>{window.removeEventListener("pointermove",l),t&&window.cancelAnimationFrame(t)}},[e])}function GR(){const[e,t]=j.useState(!1);return j.useEffect(()=>{var o;const a=window.matchMedia("(prefers-reduced-motion: reduce)"),i=()=>t(a.matches);return t(a.matches),(o=a.addEventListener)==null||o.call(a,"change",i),()=>{var l;return(l=a.removeEventListener)==null?void 0:l.call(a,"change",i)}},[]),e}const Wn=({label:e,value:t,options:a,onChange:i})=>d.jsxs("div",{className:"seg",children:[d.jsx("div",{className:"seg-label",children:e}),d.jsx("div",{className:"seg-row",role:"group","aria-label":e,children:a.map(o=>d.jsxs("button",{type:"button",role:"checkbox","aria-checked":t.includes(o.value),className:`seg-btn ${t.includes(o.value)?"active":""}`,onClick:()=>i(t.includes(o.value)?t.filter(l=>l!==o.value):[...t,o.value]),children:[d.jsx("span",{className:"seg-title",children:o.title}),o.hint?d.jsx("span",{className:"seg-hint",children:o.hint}):null]},o.value))})]}),IR="/assets/01-call-Bgwp57KR.webp",FR="/assets/02-prototype-BmhFIUL-.webp",qR="/assets/03-dev-Vc9Lg5zG.webp",KR="/assets/04-launch-C8dDkkp8.webp",YR={hidden:{opacity:0,y:34,scale:.98},show:{opacity:1,y:0,scale:1}},th=[{step:"01",image:IR},{step:"02",image:FR},{step:"03",image:qR},{step:"04",image:KR}],XR=["d1","d2","d3","d4"],Qn={goal:[{value:"leads",title:"home.configurator.options.goal.leads"},{value:"calls",title:"home.configurator.options.goal.calls"},{value:"booking",title:"home.configurator.options.goal.booking"},{value:"other",title:"home.configurator.options.common.other"}],integrations:[{value:"booking",title:"home.configurator.options.integrations.booking"},{value:"crm",title:"home.configurator.options.integrations.crm"},{value:"chat",title:"home.configurator.options.integrations.chat"},{value:"payments",title:"home.configurator.options.integrations.payments"},{value:"other",title:"home.configurator.options.common.other"}],ads:[{value:"none",title:"home.configurator.options.ads.none"},{value:"meta",title:"home.configurator.options.ads.meta"},{value:"google",title:"home.configurator.options.ads.google"},{value:"other",title:"home.configurator.options.common.other"}],term:[{value:"up-to-7",title:"home.configurator.options.term.up_to_7"},{value:"7-14",title:"home.configurator.options.term.from_7_to_14"},{value:"14-21",title:"home.configurator.options.term.from_14_to_21"},{value:"21-30",title:"home.configurator.options.term.from_21_to_30"},{value:"other",title:"home.configurator.options.common.other"}],content:[{value:"has",title:"home.configurator.options.content.has"},{value:"copy",title:"home.configurator.options.content.copy"},{value:"other",title:"home.configurator.options.common.other"}],languages:[{value:"basic",title:"home.configurator.options.languages.basic"},{value:"multi",title:"home.configurator.options.languages.multi"},{value:"other",title:"home.configurator.options.common.other"}],hosting:[{value:"shared",title:"home.configurator.options.hosting.shared"},{value:"vps",title:"home.configurator.options.hosting.vps"},{value:"managed",title:"home.configurator.options.hosting.managed"},{value:"other",title:"home.configurator.options.common.other"}],domain:[{value:"new-domain",title:"home.configurator.options.domain.new_domain"},{value:"existing-domain",title:"home.configurator.options.domain.existing_domain"},{value:"transfer",title:"home.configurator.options.domain.transfer"},{value:"other",title:"home.configurator.options.common.other"}],pages:[{value:"one",title:"home.configurator.options.pages.one"},{value:"up-to-3",title:"home.configurator.options.pages.up_to_3"},{value:"five-plus",title:"home.configurator.options.pages.five_plus"},{value:"other",title:"home.configurator.options.common.other"}],seo:[{value:"base",title:"home.configurator.options.seo.base"},{value:"extended",title:"home.configurator.options.seo.extended"},{value:"other",title:"home.configurator.options.common.other"}]},WR={leads:576,calls:558,booking:630,other:180},QR={booking:108,crm:153,chat:81,payments:189,other:45},ZR={none:20,meta:108,google:135,other:25},JR={"up-to-7":198,"7-14":153,"14-21":81,"21-30":35,other:30},eL={has:35,copy:117,other:35},tL={basic:25,multi:135,other:25},nL={shared:30,vps:85,managed:120,other:30},aL={"new-domain":25,"existing-domain":20,transfer:45,other:25},iL={one:70,"up-to-3":117,"five-plus":189,other:70},rL={base:20,extended:126,other:20},sL={leads:576,calls:558,booking:630,other:320},oL={booking:108,crm:153,chat:81,payments:189,other:120},lL={none:20,meta:108,google:135,other:90},cL={"up-to-7":198,"7-14":153,"14-21":81,"21-30":35,other:120},uL={has:35,copy:117,other:90},dL={basic:25,multi:135,other:90},fL={shared:30,vps:85,managed:120,other:90},pL={"new-domain":25,"existing-domain":20,transfer:45,other:90},hL={one:70,"up-to-3":117,"five-plus":189,other:170},gL={base:20,extended:126,other:90},Zn={goal:"Ziel",integrations:"Integrationen",ads:"Werbung",term:"Zeitrahmen",content:"Content-Level",languages:"Sprachen",hosting:"Hosting",domain:"Domain",pages:"Seiten",seo:"SEO"},mL={goal:{leads:"Leads",calls:"Anrufe",booking:"Buchungen",other:"Andere"},integrations:{booking:"Buchung",crm:"CRM",chat:"Chat",payments:"Zahlungen",other:"Andere"},ads:{none:"Ohne Werbung",meta:"Meta",google:"Google",other:"Andere"},term:{"up-to-7":"Bis 1 Woche","7-14":"7-14 Tage","14-21":"14-21 Tage","21-30":"21-30 Tage",other:"Andere"},content:{has:"Texte vorhanden",copy:"Copywriting ötig",other:"Andere"},languages:{basic:"1 Sprache",multi:"2+ Sprachen",other:"Andere"},hosting:{shared:"Shared Hosting",vps:"VPS",managed:"Managed Hosting",other:"Andere"},domain:{"new-domain":"Neue Domain","existing-domain":"Domain vorhanden",transfer:"Domain-Transfer",other:"Andere"},pages:{one:"1 Seite","up-to-3":"Bis 3 Seiten","five-plus":"5+ Seiten",other:"Andere"},seo:{base:"SEO Base",extended:"SEO Extended",other:"Andere"}},bL=()=>{const{t:e}=Ie(),[t,a]=j.useState([]),[i,o]=j.useState([]),[l,u]=j.useState([]),[p,f]=j.useState([]),[g,m]=j.useState([]),[x,y]=j.useState([]),[v,S]=j.useState([]),[k,A]=j.useState([]),[M,z]=j.useState([]),[C,H]=j.useState([]),E=()=>{a([]),o([]),u([]),f([]),m([]),y([]),S([]),A([]),z([]),H([])},V=($,te,ce)=>e($,{defaultValue:te,...ce}),N=($,te)=>{var ce;return((ce=mL[$])==null?void 0:ce[te])??te},O=j.useMemo(()=>({goal:Qn.goal.map($=>({...$,title:V($.title,N("goal",$.value))})),integrations:Qn.integrations.map($=>({...$,title:V($.title,N("integrations",$.value))})),ads:Qn.ads.map($=>({...$,title:V($.title,N("ads",$.value))})),term:Qn.term.map($=>({...$,title:V($.title,N("term",$.value))})),content:Qn.content.map($=>({...$,title:V($.title,N("content",$.value))})),languages:Qn.languages.map($=>({...$,title:V($.title,N("languages",$.value))})),hosting:Qn.hosting.map($=>({...$,title:V($.title,N("hosting",$.value))})),domain:Qn.domain.map($=>({...$,title:V($.title,N("domain",$.value))})),pages:Qn.pages.map($=>({...$,title:V($.title,N("pages",$.value))})),seo:Qn.seo.map($=>({...$,title:V($.title,N("seo",$.value))}))}),[e]),X=j.useMemo(()=>{if(![t,i,l,p,g,x,v,k,M,C].every(ne=>ne.length>0))return{isComplete:!1};const te=(ne,ae)=>ne.reduce((se,xe)=>se+(ae[xe]??0),0),ce=(ne,ae)=>ne.map(se=>{var xe;return((xe=ae.find(de=>de.value===se))==null?void 0:xe.title)||se}).join(", "),le=te(t,WR)+te(i,QR)+te(l,ZR)+te(p,JR)+te(g,eL)+te(x,tL)+te(v,nL)+te(k,aL)+te(M,iL)+te(C,rL),oe=te(t,sL)+te(i,oL)+te(l,lL)+te(p,cL)+te(g,uL)+te(x,dL)+te(v,fL)+te(k,pL)+te(M,hL)+te(C,gL),D=x.includes("multi")||M.includes("five-plus")||C.includes("extended")||l.some(ne=>ne!=="none"&&ne!=="other")||i.includes("crm")||i.includes("payments"),B=oe>980||D?"Business":"Starter",G=B==="Business"?86:62,Z=G*12,L=Math.round(Z*.7),Y=[V("home.configurator.bullets.prototype","Prototyp und Struktur mit Fokus auf Anfragen"),V("home.configurator.bullets.goal","Ziele: {{value}}",{value:ce(t,O.goal)}),V("home.configurator.bullets.integrations","Integrationen: {{value}}",{value:ce(i,O.integrations)}),V("home.configurator.bullets.term","Zeitrahmen: {{value}}",{value:ce(p,O.term)}),V("home.configurator.bullets.hosting","Hosting: {{value}}",{value:ce(v,O.hosting)}),V("home.configurator.bullets.domain","Domain: {{value}}",{value:ce(k,O.domain)}),V("home.configurator.bullets.pages","Seiten: {{value}}",{value:ce(M,O.pages)}),V("home.configurator.bullets.analytics","GA4 und Event-Tracking für Formulare/Kontakte"),g.includes("copy")?V("home.configurator.bullets.copy_true","Unterstützung bei Texten und Offer"):V("home.configurator.bullets.copy_false","Wir arbeiten mit Ihren vorhandenen Texten"),V("home.configurator.bullets.market_note","Orientierungspreis unter marktüblichem Niveau für kleine Unternehmen")];return{isComplete:!0,pack:B,bullets:Y,totalFrom:le,totalTo:oe,supportMonthly:G,supportYearlyRaw:Z,supportYearly:L,cta:"/kontakt"}},[l,g,k,t,v,i,x,M,C,e,p,O]),J=j.useMemo(()=>{if(!X.isComplete)return"";const $=(ce,le)=>ce.map(oe=>{var D;return((D=le.find(B=>B.value===oe))==null?void 0:D.title)||oe}).join(", "),te=X.totalFrom===X.totalTo?`${X.totalFrom} EUR`:`${X.totalFrom} - ${X.totalTo} EUR`;return[V("home.configurator.brief.title","Brief aus dem Angebots-Konfigurator:"),V("home.configurator.brief.goal","Ziel: {{value}}",{value:$(t,O.goal)}),V("home.configurator.brief.integrations","Integrationen: {{value}}",{value:$(i,O.integrations)}),V("home.configurator.brief.ads","Werbung: {{value}}",{value:$(l,O.ads)}),V("home.configurator.brief.term","Zeitrahmen: {{value}}",{value:$(p,O.term)}),V("home.configurator.brief.content","Content: {{value}}",{value:$(g,O.content)}),V("home.configurator.brief.languages","Sprachen: {{value}}",{value:$(x,O.languages)}),V("home.configurator.brief.hosting","Hosting: {{value}}",{value:$(v,O.hosting)}),V("home.configurator.brief.domain","Domain: {{value}}",{value:$(k,O.domain)}),V("home.configurator.brief.pages","Seiten: {{value}}",{value:$(M,O.pages)}),V("home.configurator.brief.seo","SEO: {{value}}",{value:$(C,O.seo)}),V("home.configurator.brief.launch_price","Startpreis: {{value}}",{value:te}),V("home.configurator.brief.support_monthly","Support / Monat: {{value}}",{value:`${X.supportMonthly} EUR`}),V("home.configurator.brief.support_yearly","Support / Jahr (-30%): {{value}}",{value:`${X.supportYearly} EUR`})].join(`
`)},[l,g,k,t,v,i,x,X,M,C,e,p,O]);return d.jsxs("div",{className:"card configurator-card",children:[d.jsx(Wn,{label:V("home.configurator.labels.goal",Zn.goal),value:t,options:O.goal,onChange:a}),d.jsx(Wn,{label:V("home.configurator.labels.integrations",Zn.integrations),value:i,options:O.integrations,onChange:o}),d.jsx(Wn,{label:V("home.configurator.labels.ads",Zn.ads),value:l,options:O.ads,onChange:u}),d.jsx(Wn,{label:V("home.configurator.labels.term",Zn.term),value:p,options:O.term,onChange:f}),d.jsx(Wn,{label:V("home.configurator.labels.content",Zn.content),value:g,options:O.content,onChange:m}),d.jsx(Wn,{label:V("home.configurator.labels.languages",Zn.languages),value:x,options:O.languages,onChange:y}),d.jsx(Wn,{label:V("home.configurator.labels.hosting",Zn.hosting),value:v,options:O.hosting,onChange:S}),d.jsx(Wn,{label:V("home.configurator.labels.domain",Zn.domain),value:k,options:O.domain,onChange:A}),d.jsx(Wn,{label:V("home.configurator.labels.pages",Zn.pages),value:M,options:O.pages,onChange:z}),d.jsx(Wn,{label:V("home.configurator.labels.seo",Zn.seo),value:C,options:O.seo,onChange:H}),d.jsxs("div",{className:"offer",children:[d.jsx("button",{type:"button",className:"btn btn-secondary reset-btn",onClick:E,children:V("home.configurator.reset","Alles zurücksetzen")}),X.isComplete?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"offer-title",children:[V("home.configurator.recommended","Empfohlen:")," ",d.jsx("strong",{children:X.pack==="Business"?V("home.configurator.pack.business","Business"):V("home.configurator.pack.starter","Starter")})]}),d.jsxs("p",{className:"offer-price",children:[V("home.configurator.launchPrice","Startpreis:")," ",d.jsx("strong",{children:X.totalFrom===X.totalTo?`${X.totalFrom} EUR`:`${X.totalFrom} - ${X.totalTo} EUR`})]}),d.jsx("ul",{className:"offer-list",children:X.bullets.map($=>d.jsx("li",{children:$},$))}),d.jsxs("div",{className:"support-grid",children:[d.jsxs("article",{className:"support-card",children:[d.jsx("h3",{children:V("home.configurator.supportMonthly","Support / Monat")}),d.jsx("p",{children:d.jsxs("strong",{children:[X.supportMonthly," EUR"]})})]}),d.jsxs("article",{className:"support-card",children:[d.jsx("h3",{children:V("home.configurator.supportYearly","Support / Jahr (-30%)")}),d.jsxs("p",{children:[d.jsxs("strong",{children:[X.supportYearly," EUR"]})," ",d.jsxs("span",{className:"support-old",children:[X.supportYearlyRaw," EUR"]})]})]})]}),d.jsx(la,{to:X.cta,state:{prefillNeed:J},className:"btn btn-primary offer-cta",children:V("home.configurator.cta","Kontaktanfrage und exakter Kostenvoranschlag")})]}):d.jsx("div",{className:"offer-empty",children:V("home.configurator.empty",'Wählen Sie mindestens eine Option in jedem Block. Mehrfachauswahl ist möglich; bei "Andere" wird keine Zusatzgebühr berechnet.')})]})]})},xL=R.div`
  .configurator {
    display: grid;
    justify-items: center;
  }

  .configurator-card {
    border-radius: 20px;
    background: rgba(17, 18, 24, 0.62);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.55);
    overflow: hidden;
    position: relative;
    display: grid;
    gap: 12px;
    max-width: 860px;
    width: 100%;
  }

  .configurator-card::before {
    content: '';
    position: absolute;
    inset: -35%;
    background:
      radial-gradient(circle at 20% 20%, rgba(246, 211, 101, 0.22), transparent 55%),
      radial-gradient(circle at 75% 25%, rgba(37, 99, 235, 0.18), transparent 58%);
    filter: blur(30px);
    opacity: 0.85;
    pointer-events: none;
  }

  .seg {
    position: relative;
    margin-bottom: 16px;
  }

  .seg-label {
    font-weight: 700;
    opacity: 0.86;
    margin-bottom: 10px;
  }

  .seg-row {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
  }

  .seg-btn {
    text-align: left;
    padding: 12px 12px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition:
      transform 200ms ease,
      border-color 200ms ease,
      box-shadow 200ms ease,
      background 220ms ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .seg-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      rgba(246, 211, 101, 0.22),
      rgba(255, 170, 82, 0.2),
      rgba(54, 143, 255, 0.2),
      rgba(246, 211, 101, 0.22)
    );
    background-size: 220% 220%;
    opacity: 0;
    transition: opacity 200ms ease;
    pointer-events: none;
  }

  .seg-btn::after {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    opacity: 0;
    transition: opacity 220ms ease;
    background: linear-gradient(
      90deg,
      rgba(184, 134, 11, 0.9),
      rgba(246, 211, 101, 0.9),
      rgba(212, 175, 55, 0.9),
      rgba(37, 99, 235, 0.7)
    );
    background-size: 240% 240%;
    animation: gradientFlow 3s linear infinite;
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    padding: 1px;
    pointer-events: none;
  }

  .seg-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 34px rgba(0, 0, 0, 0.35);
    border-color: rgba(246, 211, 101, 0.28);
  }

  .seg-btn:hover::before {
    opacity: 1;
  }

  .seg-btn:active {
    transform: translateY(0) scale(0.985);
  }

  .seg-btn.active {
    border-color: rgba(246, 211, 101, 0.35);
    background: rgba(246, 211, 101, 0.08);
  }

  .seg-btn.active::before,
  .seg-btn.active::after {
    opacity: 0.96;
  }

  .seg-title {
    display: block;
    font-weight: 800;
    position: relative;
    z-index: 1;
  }

  .seg-hint {
    display: block;
    opacity: 0.72;
    font-size: 12px;
    margin-top: 2px;
    position: relative;
    z-index: 1;
  }

  .offer {
    margin-top: 4px;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    padding-top: 14px;
  }

  .reset-btn {
    width: 100%;
    margin-bottom: 12px;
  }

  .offer-title {
    font-weight: 700;
    margin-bottom: 8px;
  }

  .offer-price {
    margin: 0 0 10px;
    font-size: 18px;
  }

  .offer-empty {
    padding: 12px;
    border-radius: 12px;
    border: 1px dashed rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.76);
  }

  .offer-list {
    display: grid;
    gap: 6px;
    margin: 0 0 14px;
    padding-left: 20px;
    color: rgba(255, 255, 255, 0.82);
  }

  .offer-list li {
    list-style: disc;
  }

  .support-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    margin-bottom: 14px;
  }

  .support-card {
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.03);
    padding: 12px;
    transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
  }

  .support-card:hover {
    transform: translateY(-2px);
    border-color: rgba(246, 211, 101, 0.45);
    box-shadow: 0 16px 30px rgba(0, 0, 0, 0.28);
  }

  .support-card h3 {
    margin: 0 0 6px;
    font-size: 15px;
  }

  .support-card p {
    margin: 0;
  }

  .support-old {
    margin-left: 8px;
    opacity: 0.7;
    text-decoration: line-through;
    font-size: 13px;
  }

  .offer-cta {
    width: 100%;
  }

  @keyframes gradientFlow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media (max-width: 767px) {
    .seg-row {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .support-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .seg-row {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
`,dt={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.6,ease:hn}}},$c={hidden:{opacity:0,x:-40},visible:{opacity:1,x:0,transition:{duration:.7,ease:hn}}},ri={hidden:{opacity:0,x:40},visible:{opacity:1,x:0,transition:{duration:.7,ease:hn}}},at={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:.8,ease:hn}}},Nt={hidden:{},visible:{transition:{staggerChildren:.1}}},yL=()=>{const{t:e}=Ie();return d.jsx(xL,{children:d.jsxs(ie.section,{className:"section configurator",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.18},variants:dt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.configurator.title",{defaultValue:"Angebots-Konfigurator"})}),d.jsx("p",{className:"section-description",children:e("home.configurator.desc",{defaultValue:"Wählen Sie Projektparameter und erhalten Sie einen Startpreis sowie passende Support-Tarife."})})]}),d.jsx(ie.div,{variants:at,children:d.jsx(bL,{})})]})})},Yi=({text:e,durationMs:t=6200,storageKey:a="terminal_typed_once"})=>{const[i,o]=j.useState(0),[l,u]=j.useState(!1),p=j.useMemo(()=>{const f=Math.max(e.length,1);return Math.max(24,Math.floor(t/f))},[t,e.length]);return j.useEffect(()=>{if(typeof window>"u")return;if(window.sessionStorage.getItem(a)==="1"){o(e.length),u(!0);return}let g=0;const m=window.setInterval(()=>{g+=1,o(g),g>=e.length&&(window.clearInterval(m),u(!0),window.sessionStorage.setItem(a,"1"))},p);return()=>window.clearInterval(m)},[p,a,e]),d.jsxs("span",{className:"terminal-text","aria-label":e,children:[e.slice(0,i),!l&&d.jsx("span",{className:"terminal-cursor",children:"|"})]})},vL=R.div`
  .section {
    display: grid;
    gap: 18px;
  }

  .faq {
    display: grid;
    gap: 14px;
  }

  .faq details {
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(7, 11, 21, 0.84);
    padding: 16px 18px;
    transition:
      border-color 620ms var(--ease-smooth),
      background 620ms var(--ease-smooth),
      transform 620ms var(--ease-smooth);
  }

  .faq details:hover {
    border-color: rgba(255, 207, 130, 0.5);
    transform: translateY(-2px);
  }

  .faq summary {
    cursor: pointer;
    font-weight: 700;
    font-size: 17px;
    transition: color 620ms var(--ease-smooth);
  }

  .faq details[open] summary {
    color: #ffd08a;
  }

  .faq-answer {
    display: grid;
    grid-template-rows: 0fr;
    transition:
      grid-template-rows 700ms var(--ease-smooth),
      opacity 700ms var(--ease-smooth);
    opacity: 0;
  }

  .faq-answer p {
    overflow: hidden;
    margin-top: 10px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
  }

  .faq details[open] .faq-answer {
    grid-template-rows: 1fr;
    opacity: 1;
  }

  .faq-links-card {
    display: grid;
    gap: 16px;
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background:
      radial-gradient(420px 180px at 0% 0%, rgba(246, 211, 101, 0.12), transparent 65%),
      rgba(7, 11, 21, 0.86);
    padding: 20px;
  }

  .faq-links-header {
    display: grid;
    gap: 6px;
  }

  .faq-links-header h3 {
    font-size: 20px;
  }

  .faq-links-header p {
    color: rgba(255, 255, 255, 0.72);
    line-height: 1.6;
  }

  .faq-links-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .faq-link-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    padding: 0 16px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.94);
    font-weight: 600;
    transition:
      transform var(--dur-fast) var(--ease-smooth),
      border-color var(--dur-fast) var(--ease-smooth),
      background var(--dur-fast) var(--ease-smooth),
      color var(--dur-fast) var(--ease-smooth);
  }

  .faq-link-pill:hover,
  .faq-link-pill:focus-visible {
    transform: translateY(-1px);
    border-color: rgba(255, 209, 137, 0.75);
    background: rgba(255, 222, 167, 0.12);
    color: #ffe5b1;
  }
`,wL=()=>{const{t:e}=Ie(),t=xR.map((i,o)=>({question:e(`home.faq.q${o+1}`,{defaultValue:i.question}),answer:e(`home.faq.a${o+1}`,{defaultValue:i.answer})})),a=[{to:"/services",label:e("header.services",{defaultValue:"Services"})},{to:"/preise",label:e("header.preise",{defaultValue:"Preise"})},{to:"/referenzen",label:e("header.referenzen",{defaultValue:"Referenzen"})},{to:"/ueber-uns",label:e("header.ueberUns",{defaultValue:"Ueber uns"})},{to:"/kontakt",label:e("header.kontakt",{defaultValue:"Kontakt"})}];return d.jsx(vL,{children:d.jsxs(ie.section,{id:"faq",className:"section",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.18},variants:dt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:d.jsx(Yi,{text:e("home.faqTitle",{defaultValue:"FAQ"}),durationMs:2200,storageKey:"faq_title_v2"})}),d.jsx("p",{className:"section-description",children:e("home.faq.desc",{defaultValue:"Antworten auf haeufige Fragen zu Timing, Kosten, Launch-Prozess und laufender Betreuung."})})]}),d.jsx(ie.div,{className:"faq",variants:Nt,children:t.map(i=>d.jsxs(ie.details,{variants:at,children:[d.jsx("summary",{children:i.question}),d.jsx("div",{className:"faq-answer",children:d.jsx("p",{children:i.answer})})]},i.question))}),d.jsxs(ie.div,{className:"faq-links-card",variants:dt,children:[d.jsxs("div",{className:"faq-links-header",children:[d.jsx("h3",{children:e("home.faq.linksTitle",{defaultValue:"Wichtige Seiten"})}),d.jsx("p",{children:e("home.faq.linksDesc",{defaultValue:"Direkte Einstiege fuer Leistungen, Preise, Referenzen, Agenturprofil und Projektanfrage."})})]}),d.jsx("nav",{className:"faq-links-grid","aria-label":e("home.faq.linksAria",{defaultValue:"Wichtige Seiten"}),children:a.map(i=>d.jsx(Tg,{to:i.to,className:"faq-link-pill",children:i.label},i.to))})]})]})})},SL="/assets/hero-main-BwizpqXp.webm",kL="/assets/Sub_Zero_Refrigerator_Cinematic_Reveal-BIqjoL6O.mov",TL=R.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
`,jL=R.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.04);
  z-index: 0;
`,CL=R.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgb(0 0 0 / 87%) 0%, rgb(0 0 0 / 48%) 50%, rgba(0, 0, 0, 0.4) 100%);
  z-index: 1;
`,AL=()=>d.jsxs(TL,{children:[d.jsxs(jL,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",poster:"/images/hero-generated.svg",children:[d.jsx("source",{src:SL,type:"video/webm"}),d.jsx("source",{src:kL,type:"video/mp4"})]}),d.jsx(CL,{})]}),EL=R.div`
  .hero {
    display: grid;
    gap: 18px;
    padding: 70px 0 30px;
  }

  .hero-with-video {
    position: relative;
    min-height: 560px;
    border-radius: 18px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.14);
    padding: 26px;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-items: end;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    margin-top: auto;
    display: grid;
    gap: 18px;
    align-self: end;
  }

  .hero-video-parallax {
    position: absolute;
    inset: 0;
    z-index: 0;
    will-change: transform;
  }

  .hero h1 {
    font-size: clamp(34px, 8vw, 70px);
    line-height: 0.96;
    max-width: 15ch;
  }

  .hero p {
    max-width: 62ch;
    color: rgba(255, 255, 255, 0.82);
  }

  .hero-bento {
    position: relative;
    z-index: 2;
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-self: stretch;
  }

  .bento-tile {
    position: relative;
    overflow: hidden;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(9, 14, 27, 0.72);
    padding: 12px 14px;
    transition: transform var(--dur-mid) var(--ease-smooth), border-color var(--dur-mid) var(--ease-smooth);
  }

  .bento-tile span {
    position: relative;
    z-index: 2;
    display: block;
    color: rgba(255, 255, 255, 0.72);
    font-size: 13px;
    margin-bottom: 6px;
  }

  .bento-tile strong {
    position: relative;
    z-index: 2;
    font-size: 15px;
  }

  .bento-icon-bg {
    position: absolute;
    right: -10px;
    bottom: -14px;
    z-index: 1;
    font-size: clamp(74px, 10vw, 112px);
    color: rgba(149, 204, 255, 0.2);
    opacity: 0.52;
    transform: rotate(-10deg);
    pointer-events: none;
  }

  .bento-tile::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(110deg, transparent 25%, rgba(255, 255, 255, 0.12) 50%, transparent 75%);
    transform: translateX(-120%);
    animation: shimmerTile 5.4s ease-in-out infinite;
    pointer-events: none;
  }

  .bento-tile:hover {
    transform: translateY(-3px);
    border-color: rgba(255, 209, 137, 0.62);
  }

  @keyframes shimmerTile {
    0% {
      transform: translateX(-120%);
    }
    100% {
      transform: translateX(120%);
    }
  }

  @media (max-width: 767px) {
    .hero {
      padding-top: 38px;
      gap: 14px;
    }

    .hero-with-video {
      min-height: 500px;
      padding: 14px;
    }

    .hero-bento {
      grid-template-columns: 1fr;
    }

    .hero h1 {
      font-size: clamp(30px, 10vw, 44px);
      max-width: 12ch;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .hero-bento {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    .hero-with-video {
      grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
      align-items: end;
    }
  }

  @media (min-width: 1280px) {
    .hero-with-video {
      grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
      align-items: end;
    }
  }
`,ML=({reducedMotion:e})=>{const{t}=Ie(),{scrollYProgress:a}=$A(),i=dy(a,[0,.45],[0,-24]),o=dy(a,[0,.4],[0,30]),[l,u]=j.useState({x:0,y:0}),p=g=>{if(e)return;const m=g.currentTarget.getBoundingClientRect(),x=(g.clientX-m.left-m.width/2)/12,y=(g.clientY-m.top-m.height/2)/12;u({x:Math.max(-8,Math.min(8,x)),y:Math.max(-8,Math.min(8,y))})},f=()=>u({x:0,y:0});return d.jsx(EL,{children:d.jsxs(ie.section,{className:"hero hero-with-video",initial:"hidden",animate:"show",variants:YR,transition:{duration:.85,ease:Fu},children:[d.jsx(ie.div,{className:"hero-video-parallax",style:{y:o},children:d.jsx(AL,{})}),d.jsxs(ie.div,{className:"hero-content",style:{y:i},initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.9,ease:hn},children:[d.jsx("h1",{children:d.jsx(Yi,{text:t("home.heroTitle",{defaultValue:"Websites, die Anfragen bringen statt nur gut aussehen."}),durationMs:6200,storageKey:"hero_terminal_once"})}),d.jsx("p",{children:t("home.heroSubtitle",{defaultValue:"Klare Positionierung, schnelle Umsetzung und transparente Pakete für lokale Dienstleister in Deutschland."})}),d.jsxs("div",{className:"btn-row",children:[d.jsxs(la,{to:"/kontakt",className:"btn btn-primary btn-magnetic",onMouseMove:p,onMouseLeave:f,style:{transform:`translate(${l.x}px, ${l.y}px)`},children:[d.jsx(_n,{})," ",t("common.projectRequest")]}),d.jsxs(la,{to:"/preise",className:"btn btn-secondary",children:[d.jsx(Su,{})," ",t("common.viewPrices")]}),d.jsxs("a",{href:"#faq",className:"btn btn-secondary",children:[d.jsx(_n,{})," ",t("home.toFaq",{defaultValue:"Zum FAQ"})]})]})]}),d.jsxs("aside",{className:"hero-bento",children:[d.jsxs("article",{className:"bento-tile",children:[d.jsx("span",{children:t("home.hero.bento.speed.label",{defaultValue:"Geschwindigkeit"})}),d.jsx("strong",{children:t("home.hero.bento.speed.value",{defaultValue:"90+ Lighthouse"})}),d.jsx(Wu,{className:"bento-icon-bg","aria-hidden":"true"})]}),d.jsxs("article",{className:"bento-tile",children:[d.jsx("span",{children:t("home.hero.bento.seo.label",{defaultValue:"SEO"})}),d.jsx("strong",{children:t("home.hero.bento.seo.value",{defaultValue:"Technisches Fundament"})}),d.jsx(cE,{className:"bento-icon-bg","aria-hidden":"true"})]}),d.jsxs("article",{className:"bento-tile",children:[d.jsx("span",{children:t("home.hero.bento.leads.label",{defaultValue:"Anfragen"})}),d.jsx("strong",{children:t("home.hero.bento.leads.value",{defaultValue:"Klare CTA und Formulare"})}),d.jsx(eE,{className:"bento-icon-bg","aria-hidden":"true"})]}),d.jsxs("article",{className:"bento-tile",children:[d.jsx("span",{children:t("home.hero.bento.support.label",{defaultValue:"Support"})}),d.jsx("strong",{children:t("home.hero.bento.support.value",{defaultValue:"Nach dem Launch"})}),d.jsx(oE,{className:"bento-icon-bg","aria-hidden":"true"})]})]})]})})};function sv(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function wm(e={},t={}){const a=["__proto__","constructor","prototype"];Object.keys(t).filter(i=>a.indexOf(i)<0).forEach(i=>{typeof e[i]>"u"?e[i]=t[i]:sv(t[i])&&sv(e[i])&&Object.keys(t[i]).length>0&&wm(e[i],t[i])})}const I3={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Zt(){const e=typeof document<"u"?document:{};return wm(e,I3),e}const zL={document:I3,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Rt(){const e=typeof window<"u"?window:{};return wm(e,zL),e}function RL(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function LL(e){const t=e;Object.keys(t).forEach(a=>{try{t[a]=null}catch{}try{delete t[a]}catch{}})}function F3(e,t=0){return setTimeout(e,t)}function Ou(){return Date.now()}function OL(e){const t=Rt();let a;return t.getComputedStyle&&(a=t.getComputedStyle(e,null)),!a&&e.currentStyle&&(a=e.currentStyle),a||(a=e.style),a}function DL(e,t="x"){const a=Rt();let i,o,l;const u=OL(e);return a.WebKitCSSMatrix?(o=u.transform||u.webkitTransform,o.split(",").length>6&&(o=o.split(", ").map(p=>p.replace(",",".")).join(", ")),l=new a.WebKitCSSMatrix(o==="none"?"":o)):(l=u.MozTransform||u.OTransform||u.MsTransform||u.msTransform||u.transform||u.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=l.toString().split(",")),t==="x"&&(a.WebKitCSSMatrix?o=l.m41:i.length===16?o=parseFloat(i[12]):o=parseFloat(i[4])),t==="y"&&(a.WebKitCSSMatrix?o=l.m42:i.length===16?o=parseFloat(i[13]):o=parseFloat(i[5])),o||0}function Hc(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function PL(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function fn(...e){const t=Object(e[0]);for(let a=1;a<e.length;a+=1){const i=e[a];if(i!=null&&!PL(i)){const o=Object.keys(Object(i)).filter(l=>l!=="__proto__"&&l!=="constructor"&&l!=="prototype");for(let l=0,u=o.length;l<u;l+=1){const p=o[l],f=Object.getOwnPropertyDescriptor(i,p);f!==void 0&&f.enumerable&&(Hc(t[p])&&Hc(i[p])?i[p].__swiper__?t[p]=i[p]:fn(t[p],i[p]):!Hc(t[p])&&Hc(i[p])?(t[p]={},i[p].__swiper__?t[p]=i[p]:fn(t[p],i[p])):t[p]=i[p])}}}return t}function Hr(e,t,a){e.style.setProperty(t,a)}function q3({swiper:e,targetPosition:t,side:a}){const i=Rt(),o=-e.translate;let l=null,u;const p=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);const f=t>o?"next":"prev",g=(x,y)=>f==="next"&&x>=y||f==="prev"&&x<=y,m=()=>{u=new Date().getTime(),l===null&&(l=u);const x=Math.max(Math.min((u-l)/p,1),0),y=.5-Math.cos(x*Math.PI)/2;let v=o+y*(t-o);if(g(v,t)&&(v=t),e.wrapperEl.scrollTo({[a]:v}),g(v,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[a]:v})}),i.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=i.requestAnimationFrame(m)};m()}function K3(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function za(e,t=""){const a=Rt(),i=[...e.children];return a.HTMLSlotElement&&e instanceof HTMLSlotElement&&i.push(...e.assignedElements()),t?i.filter(o=>o.matches(t)):i}function VL(e,t){const a=[t];for(;a.length>0;){const i=a.shift();if(e===i)return!0;a.push(...i.children,...i.shadowRoot?i.shadowRoot.children:[],...i.assignedElements?i.assignedElements():[])}}function NL(e,t){const a=Rt();let i=t.contains(e);return!i&&a.HTMLSlotElement&&t instanceof HTMLSlotElement&&(i=[...t.assignedElements()].includes(e),i||(i=VL(e,t))),i}function Du(e){try{console.warn(e);return}catch{}}function Pu(e,t=[]){const a=document.createElement(e);return a.classList.add(...Array.isArray(t)?t:RL(t)),a}function BL(e){const t=Rt(),a=Zt(),i=e.getBoundingClientRect(),o=a.body,l=e.clientTop||o.clientTop||0,u=e.clientLeft||o.clientLeft||0,p=e===t?t.scrollY:e.scrollTop,f=e===t?t.scrollX:e.scrollLeft;return{top:i.top+p-l,left:i.left+f-u}}function _L(e,t){const a=[];for(;e.previousElementSibling;){const i=e.previousElementSibling;t?i.matches(t)&&a.push(i):a.push(i),e=i}return a}function $L(e,t){const a=[];for(;e.nextElementSibling;){const i=e.nextElementSibling;t?i.matches(t)&&a.push(i):a.push(i),e=i}return a}function ci(e,t){return Rt().getComputedStyle(e,null).getPropertyValue(t)}function ug(e){let t=e,a;if(t){for(a=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(a+=1);return a}}function dg(e,t){const a=[];let i=e.parentElement;for(;i;)t?i.matches(t)&&a.push(i):a.push(i),i=i.parentElement;return a}function HL(e,t){function a(i){i.target===e&&(t.call(e,i),e.removeEventListener("transitionend",a))}t&&e.addEventListener("transitionend",a)}function ov(e,t,a){const i=Rt();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function St(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function fg(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:a=>a}).createHTML(t):e.innerHTML=t}let nh;function UL(){const e=Rt(),t=Zt();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Y3(){return nh||(nh=UL()),nh}let ah;function GL({userAgent:e}={}){const t=Y3(),a=Rt(),i=a.navigator.platform,o=e||a.navigator.userAgent,l={ios:!1,android:!1},u=a.screen.width,p=a.screen.height,f=o.match(/(Android);?[\s\/]+([\d.]+)?/);let g=o.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const m=o.match(/(iPod)(.*OS\s([\d_]+))?/),x=!g&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),y=i==="Win32";let v=i==="MacIntel";const S=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!g&&v&&t.touch&&S.indexOf(`${u}x${p}`)>=0&&(g=o.match(/(Version)\/([\d.]+)/),g||(g=[0,1,"13_0_0"]),v=!1),f&&!y&&(l.os="android",l.android=!0),(g||x||m)&&(l.os="ios",l.ios=!0),l}function X3(e={}){return ah||(ah=GL(e)),ah}let ih;function IL(){const e=Rt(),t=X3();let a=!1;function i(){const p=e.navigator.userAgent.toLowerCase();return p.indexOf("safari")>=0&&p.indexOf("chrome")<0&&p.indexOf("android")<0}if(i()){const p=String(e.navigator.userAgent);if(p.includes("Version/")){const[f,g]=p.split("Version/")[1].split(" ")[0].split(".").map(m=>Number(m));a=f<16||f===16&&g<2}}const o=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),l=i(),u=l||o&&t.ios;return{isSafari:a||l,needPerspectiveFix:a,need3dFix:u,isWebView:o}}function W3(){return ih||(ih=IL()),ih}function FL({swiper:e,on:t,emit:a}){const i=Rt();let o=null,l=null;const u=()=>{!e||e.destroyed||!e.initialized||(a("beforeResize"),a("resize"))},p=()=>{!e||e.destroyed||!e.initialized||(o=new ResizeObserver(m=>{l=i.requestAnimationFrame(()=>{const{width:x,height:y}=e;let v=x,S=y;m.forEach(({contentBoxSize:k,contentRect:A,target:M})=>{M&&M!==e.el||(v=A?A.width:(k[0]||k).inlineSize,S=A?A.height:(k[0]||k).blockSize)}),(v!==x||S!==y)&&u()})}),o.observe(e.el))},f=()=>{l&&i.cancelAnimationFrame(l),o&&o.unobserve&&e.el&&(o.unobserve(e.el),o=null)},g=()=>{!e||e.destroyed||!e.initialized||a("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof i.ResizeObserver<"u"){p();return}i.addEventListener("resize",u),i.addEventListener("orientationchange",g)}),t("destroy",()=>{f(),i.removeEventListener("resize",u),i.removeEventListener("orientationchange",g)})}function qL({swiper:e,extendParams:t,on:a,emit:i}){const o=[],l=Rt(),u=(g,m={})=>{const x=l.MutationObserver||l.WebkitMutationObserver,y=new x(v=>{if(e.__preventObserver__)return;if(v.length===1){i("observerUpdate",v[0]);return}const S=function(){i("observerUpdate",v[0])};l.requestAnimationFrame?l.requestAnimationFrame(S):l.setTimeout(S,0)});y.observe(g,{attributes:typeof m.attributes>"u"?!0:m.attributes,childList:e.isElement||(typeof m.childList>"u"?!0:m).childList,characterData:typeof m.characterData>"u"?!0:m.characterData}),o.push(y)},p=()=>{if(e.params.observer){if(e.params.observeParents){const g=dg(e.hostEl);for(let m=0;m<g.length;m+=1)u(g[m])}u(e.hostEl,{childList:e.params.observeSlideChildren}),u(e.wrapperEl,{attributes:!1})}},f=()=>{o.forEach(g=>{g.disconnect()}),o.splice(0,o.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",p),a("destroy",f)}var KL={on(e,t,a){const i=this;if(!i.eventsListeners||i.destroyed||typeof t!="function")return i;const o=a?"unshift":"push";return e.split(" ").forEach(l=>{i.eventsListeners[l]||(i.eventsListeners[l]=[]),i.eventsListeners[l][o](t)}),i},once(e,t,a){const i=this;if(!i.eventsListeners||i.destroyed||typeof t!="function")return i;function o(...l){i.off(e,o),o.__emitterProxy&&delete o.__emitterProxy,t.apply(i,l)}return o.__emitterProxy=t,i.on(e,o,a)},onAny(e,t){const a=this;if(!a.eventsListeners||a.destroyed||typeof e!="function")return a;const i=t?"unshift":"push";return a.eventsAnyListeners.indexOf(e)<0&&a.eventsAnyListeners[i](e),a},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const a=t.eventsAnyListeners.indexOf(e);return a>=0&&t.eventsAnyListeners.splice(a,1),t},off(e,t){const a=this;return!a.eventsListeners||a.destroyed||!a.eventsListeners||e.split(" ").forEach(i=>{typeof t>"u"?a.eventsListeners[i]=[]:a.eventsListeners[i]&&a.eventsListeners[i].forEach((o,l)=>{(o===t||o.__emitterProxy&&o.__emitterProxy===t)&&a.eventsListeners[i].splice(l,1)})}),a},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let a,i,o;return typeof e[0]=="string"||Array.isArray(e[0])?(a=e[0],i=e.slice(1,e.length),o=t):(a=e[0].events,i=e[0].data,o=e[0].context||t),i.unshift(o),(Array.isArray(a)?a:a.split(" ")).forEach(u=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(p=>{p.apply(o,[u,...i])}),t.eventsListeners&&t.eventsListeners[u]&&t.eventsListeners[u].forEach(p=>{p.apply(o,i)})}),t}};function YL(){const e=this;let t,a;const i=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=i.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?a=e.params.height:a=i.clientHeight,!(t===0&&e.isHorizontal()||a===0&&e.isVertical())&&(t=t-parseInt(ci(i,"padding-left")||0,10)-parseInt(ci(i,"padding-right")||0,10),a=a-parseInt(ci(i,"padding-top")||0,10)-parseInt(ci(i,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(a)&&(a=0),Object.assign(e,{width:t,height:a,size:e.isHorizontal()?t:a}))}function XL(){const e=this;function t(J,$){return parseFloat(J.getPropertyValue(e.getDirectionLabel($))||0)}const a=e.params,{wrapperEl:i,slidesEl:o,rtlTranslate:l,wrongRTL:u}=e,p=e.virtual&&a.virtual.enabled,f=p?e.virtual.slides.length:e.slides.length,g=za(o,`.${e.params.slideClass}, swiper-slide`),m=p?e.virtual.slides.length:g.length;let x=[];const y=[],v=[];let S=a.slidesOffsetBefore;typeof S=="function"&&(S=a.slidesOffsetBefore.call(e));let k=a.slidesOffsetAfter;typeof k=="function"&&(k=a.slidesOffsetAfter.call(e));const A=e.snapGrid.length,M=e.slidesGrid.length,z=e.size-S-k;let C=a.spaceBetween,H=-S,E=0,V=0;if(typeof z>"u")return;typeof C=="string"&&C.indexOf("%")>=0?C=parseFloat(C.replace("%",""))/100*z:typeof C=="string"&&(C=parseFloat(C)),e.virtualSize=-C-S-k,g.forEach(J=>{l?J.style.marginLeft="":J.style.marginRight="",J.style.marginBottom="",J.style.marginTop=""}),a.centeredSlides&&a.cssMode&&(Hr(i,"--swiper-centered-offset-before",""),Hr(i,"--swiper-centered-offset-after","")),a.cssMode&&(Hr(i,"--swiper-slides-offset-before",`${S}px`),Hr(i,"--swiper-slides-offset-after",`${k}px`));const N=a.grid&&a.grid.rows>1&&e.grid;N?e.grid.initSlides(g):e.grid&&e.grid.unsetSlides();let O;const X=a.slidesPerView==="auto"&&a.breakpoints&&Object.keys(a.breakpoints).filter(J=>typeof a.breakpoints[J].slidesPerView<"u").length>0;for(let J=0;J<m;J+=1){O=0;const $=g[J];if(!($&&(N&&e.grid.updateSlide(J,$,g),ci($,"display")==="none"))){if(p&&a.slidesPerView==="auto")a.virtual.slidesPerViewAutoSlideSize&&(O=a.virtual.slidesPerViewAutoSlideSize),O&&$&&(a.roundLengths&&(O=Math.floor(O)),$.style[e.getDirectionLabel("width")]=`${O}px`);else if(a.slidesPerView==="auto"){X&&($.style[e.getDirectionLabel("width")]="");const te=getComputedStyle($),ce=$.style.transform,le=$.style.webkitTransform;if(ce&&($.style.transform="none"),le&&($.style.webkitTransform="none"),a.roundLengths)O=e.isHorizontal()?ov($,"width"):ov($,"height");else{const oe=t(te,"width"),D=t(te,"padding-left"),B=t(te,"padding-right"),G=t(te,"margin-left"),Z=t(te,"margin-right"),L=te.getPropertyValue("box-sizing");if(L&&L==="border-box")O=oe+G+Z;else{const{clientWidth:Y,offsetWidth:ne}=$;O=oe+D+B+G+Z+(ne-Y)}}ce&&($.style.transform=ce),le&&($.style.webkitTransform=le),a.roundLengths&&(O=Math.floor(O))}else O=(z-(a.slidesPerView-1)*C)/a.slidesPerView,a.roundLengths&&(O=Math.floor(O)),$&&($.style[e.getDirectionLabel("width")]=`${O}px`);$&&($.swiperSlideSize=O),v.push(O),a.centeredSlides?(H=H+O/2+E/2+C,E===0&&J!==0&&(H=H-z/2-C),J===0&&(H=H-z/2-C),Math.abs(H)<1/1e3&&(H=0),a.roundLengths&&(H=Math.floor(H)),V%a.slidesPerGroup===0&&x.push(H),y.push(H)):(a.roundLengths&&(H=Math.floor(H)),(V-Math.min(e.params.slidesPerGroupSkip,V))%e.params.slidesPerGroup===0&&x.push(H),y.push(H),H=H+O+C),e.virtualSize+=O+C,E=O,V+=1}}if(e.virtualSize=Math.max(e.virtualSize,z)+k,l&&u&&(a.effect==="slide"||a.effect==="coverflow")&&(i.style.width=`${e.virtualSize+C}px`),a.setWrapperSize&&(i.style[e.getDirectionLabel("width")]=`${e.virtualSize+C}px`),N&&e.grid.updateWrapperSize(O,x),!a.centeredSlides){const J=a.slidesPerView!=="auto"&&a.slidesPerView%1!==0,$=a.snapToSlideEdge&&!a.loop&&(a.slidesPerView==="auto"||J);let te=x.length;if($){let le;if(a.slidesPerView==="auto"){le=1;let oe=0;for(let D=v.length-1;D>=0&&(oe+=v[D]+(D<v.length-1?C:0),oe<=z);D-=1)le=v.length-D}else le=Math.floor(a.slidesPerView);te=Math.max(m-le,0)}const ce=[];for(let le=0;le<x.length;le+=1){let oe=x[le];a.roundLengths&&(oe=Math.floor(oe)),$?le<=te&&ce.push(oe):x[le]<=e.virtualSize-z&&ce.push(oe)}x=ce,Math.floor(e.virtualSize-z)-Math.floor(x[x.length-1])>1&&($||x.push(e.virtualSize-z))}if(p&&a.loop){const J=v[0]+C;if(a.slidesPerGroup>1){const $=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/a.slidesPerGroup),te=J*a.slidesPerGroup;for(let ce=0;ce<$;ce+=1)x.push(x[x.length-1]+te)}for(let $=0;$<e.virtual.slidesBefore+e.virtual.slidesAfter;$+=1)a.slidesPerGroup===1&&x.push(x[x.length-1]+J),y.push(y[y.length-1]+J),e.virtualSize+=J}if(x.length===0&&(x=[0]),C!==0){const J=e.isHorizontal()&&l?"marginLeft":e.getDirectionLabel("marginRight");g.filter(($,te)=>!a.cssMode||a.loop?!0:te!==g.length-1).forEach($=>{$.style[J]=`${C}px`})}if(a.centeredSlides&&a.centeredSlidesBounds){let J=0;v.forEach(te=>{J+=te+(C||0)}),J-=C;const $=J>z?J-z:0;x=x.map(te=>te<=0?-S:te>$?$+k:te)}if(a.centerInsufficientSlides){let J=0;if(v.forEach($=>{J+=$+(C||0)}),J-=C,J<z){const $=(z-J)/2;x.forEach((te,ce)=>{x[ce]=te-$}),y.forEach((te,ce)=>{y[ce]=te+$})}}if(Object.assign(e,{slides:g,snapGrid:x,slidesGrid:y,slidesSizesGrid:v}),a.centeredSlides&&a.cssMode&&!a.centeredSlidesBounds){Hr(i,"--swiper-centered-offset-before",`${-x[0]}px`),Hr(i,"--swiper-centered-offset-after",`${e.size/2-v[v.length-1]/2}px`);const J=-e.snapGrid[0],$=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(te=>te+J),e.slidesGrid=e.slidesGrid.map(te=>te+$)}if(m!==f&&e.emit("slidesLengthChange"),x.length!==A&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),y.length!==M&&e.emit("slidesGridLengthChange"),a.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!p&&!a.cssMode&&(a.effect==="slide"||a.effect==="fade")){const J=`${a.containerModifierClass}backface-hidden`,$=e.el.classList.contains(J);m<=a.maxBackfaceHiddenSlides?$||e.el.classList.add(J):$&&e.el.classList.remove(J)}}function WL(e){const t=this,a=[],i=t.virtual&&t.params.virtual.enabled;let o=0,l;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const u=p=>i?t.slides[t.getSlideIndexByData(p)]:t.slides[p];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(p=>{a.push(p)});else for(l=0;l<Math.ceil(t.params.slidesPerView);l+=1){const p=t.activeIndex+l;if(p>t.slides.length&&!i)break;a.push(u(p))}else a.push(u(t.activeIndex));for(l=0;l<a.length;l+=1)if(typeof a[l]<"u"){const p=a[l].offsetHeight;o=p>o?p:o}(o||o===0)&&(t.wrapperEl.style.height=`${o}px`)}function QL(){const e=this,t=e.slides,a=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let i=0;i<t.length;i+=1)t[i].swiperSlideOffset=(e.isHorizontal()?t[i].offsetLeft:t[i].offsetTop)-a-e.cssOverflowAdjustment()}const lv=(e,t,a)=>{t&&!e.classList.contains(a)?e.classList.add(a):!t&&e.classList.contains(a)&&e.classList.remove(a)};function ZL(e=this&&this.translate||0){const t=this,a=t.params,{slides:i,rtlTranslate:o,snapGrid:l}=t;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let u=-e;o&&(u=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let p=a.spaceBetween;typeof p=="string"&&p.indexOf("%")>=0?p=parseFloat(p.replace("%",""))/100*t.size:typeof p=="string"&&(p=parseFloat(p));for(let f=0;f<i.length;f+=1){const g=i[f];let m=g.swiperSlideOffset;a.cssMode&&a.centeredSlides&&(m-=i[0].swiperSlideOffset);const x=(u+(a.centeredSlides?t.minTranslate():0)-m)/(g.swiperSlideSize+p),y=(u-l[0]+(a.centeredSlides?t.minTranslate():0)-m)/(g.swiperSlideSize+p),v=-(u-m),S=v+t.slidesSizesGrid[f],k=v>=0&&v<=t.size-t.slidesSizesGrid[f],A=v>=0&&v<t.size-1||S>1&&S<=t.size||v<=0&&S>=t.size;A&&(t.visibleSlides.push(g),t.visibleSlidesIndexes.push(f)),lv(g,A,a.slideVisibleClass),lv(g,k,a.slideFullyVisibleClass),g.progress=o?-x:x,g.originalProgress=o?-y:y}}function JL(e){const t=this;if(typeof e>"u"){const m=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*m||0}const a=t.params,i=t.maxTranslate()-t.minTranslate();let{progress:o,isBeginning:l,isEnd:u,progressLoop:p}=t;const f=l,g=u;if(i===0)o=0,l=!0,u=!0;else{o=(e-t.minTranslate())/i;const m=Math.abs(e-t.minTranslate())<1,x=Math.abs(e-t.maxTranslate())<1;l=m||o<=0,u=x||o>=1,m&&(o=0),x&&(o=1)}if(a.loop){const m=t.getSlideIndexByData(0),x=t.getSlideIndexByData(t.slides.length-1),y=t.slidesGrid[m],v=t.slidesGrid[x],S=t.slidesGrid[t.slidesGrid.length-1],k=Math.abs(e);k>=y?p=(k-y)/S:p=(k+S-v)/S,p>1&&(p-=1)}Object.assign(t,{progress:o,progressLoop:p,isBeginning:l,isEnd:u}),(a.watchSlidesProgress||a.centeredSlides&&a.autoHeight)&&t.updateSlidesProgress(e),l&&!f&&t.emit("reachBeginning toEdge"),u&&!g&&t.emit("reachEnd toEdge"),(f&&!l||g&&!u)&&t.emit("fromEdge"),t.emit("progress",o)}const rh=(e,t,a)=>{t&&!e.classList.contains(a)?e.classList.add(a):!t&&e.classList.contains(a)&&e.classList.remove(a)};function eO(){const e=this,{slides:t,params:a,slidesEl:i,activeIndex:o}=e,l=e.virtual&&a.virtual.enabled,u=e.grid&&a.grid&&a.grid.rows>1,p=x=>za(i,`.${a.slideClass}${x}, swiper-slide${x}`)[0];let f,g,m;if(l)if(a.loop){let x=o-e.virtual.slidesBefore;x<0&&(x=e.virtual.slides.length+x),x>=e.virtual.slides.length&&(x-=e.virtual.slides.length),f=p(`[data-swiper-slide-index="${x}"]`)}else f=p(`[data-swiper-slide-index="${o}"]`);else u?(f=t.find(x=>x.column===o),m=t.find(x=>x.column===o+1),g=t.find(x=>x.column===o-1)):f=t[o];f&&(u||(m=$L(f,`.${a.slideClass}, swiper-slide`)[0],a.loop&&!m&&(m=t[0]),g=_L(f,`.${a.slideClass}, swiper-slide`)[0],a.loop&&!g===0&&(g=t[t.length-1]))),t.forEach(x=>{rh(x,x===f,a.slideActiveClass),rh(x,x===m,a.slideNextClass),rh(x,x===g,a.slidePrevClass)}),e.emitSlidesClasses()}const du=(e,t)=>{if(!e||e.destroyed||!e.params)return;const a=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,i=t.closest(a());if(i){let o=i.querySelector(`.${e.params.lazyPreloaderClass}`);!o&&e.isElement&&(i.shadowRoot?o=i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(o=i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),o&&!o.lazyPreloaderManaged&&o.remove())})),o&&!o.lazyPreloaderManaged&&o.remove()}},sh=(e,t)=>{if(!e.slides[t])return;const a=e.slides[t].querySelector('[loading="lazy"]');a&&a.removeAttribute("loading")},pg=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const a=e.slides.length;if(!a||!t||t<0)return;t=Math.min(t,a);const i=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),o=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const u=o,p=[u-t];p.push(...Array.from({length:t}).map((f,g)=>u+i+g)),e.slides.forEach((f,g)=>{p.includes(f.column)&&sh(e,g)});return}const l=o+i-1;if(e.params.rewind||e.params.loop)for(let u=o-t;u<=l+t;u+=1){const p=(u%a+a)%a;(p<o||p>l)&&sh(e,p)}else for(let u=Math.max(o-t,0);u<=Math.min(l+t,a-1);u+=1)u!==o&&(u>l||u<o)&&sh(e,u)};function tO(e){const{slidesGrid:t,params:a}=e,i=e.rtlTranslate?e.translate:-e.translate;let o;for(let l=0;l<t.length;l+=1)typeof t[l+1]<"u"?i>=t[l]&&i<t[l+1]-(t[l+1]-t[l])/2?o=l:i>=t[l]&&i<t[l+1]&&(o=l+1):i>=t[l]&&(o=l);return a.normalizeSlideIndex&&(o<0||typeof o>"u")&&(o=0),o}function nO(e){const t=this,a=t.rtlTranslate?t.translate:-t.translate,{snapGrid:i,params:o,activeIndex:l,realIndex:u,snapIndex:p}=t;let f=e,g;const m=v=>{let S=v-t.virtual.slidesBefore;return S<0&&(S=t.virtual.slides.length+S),S>=t.virtual.slides.length&&(S-=t.virtual.slides.length),S};if(typeof f>"u"&&(f=tO(t)),i.indexOf(a)>=0)g=i.indexOf(a);else{const v=Math.min(o.slidesPerGroupSkip,f);g=v+Math.floor((f-v)/o.slidesPerGroup)}if(g>=i.length&&(g=i.length-1),f===l&&!t.params.loop){g!==p&&(t.snapIndex=g,t.emit("snapIndexChange"));return}if(f===l&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=m(f);return}const x=t.grid&&o.grid&&o.grid.rows>1;let y;if(t.virtual&&o.virtual.enabled)o.loop?y=m(f):y=f;else if(x){const v=t.slides.find(k=>k.column===f);let S=parseInt(v.getAttribute("data-swiper-slide-index"),10);Number.isNaN(S)&&(S=Math.max(t.slides.indexOf(v),0)),y=Math.floor(S/o.grid.rows)}else if(t.slides[f]){const v=t.slides[f].getAttribute("data-swiper-slide-index");v?y=parseInt(v,10):y=f}else y=f;Object.assign(t,{previousSnapIndex:p,snapIndex:g,previousRealIndex:u,realIndex:y,previousIndex:l,activeIndex:f}),t.initialized&&pg(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(u!==y&&t.emit("realIndexChange"),t.emit("slideChange"))}function aO(e,t){const a=this,i=a.params;let o=e.closest(`.${i.slideClass}, swiper-slide`);!o&&a.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(p=>{!o&&p.matches&&p.matches(`.${i.slideClass}, swiper-slide`)&&(o=p)});let l=!1,u;if(o){for(let p=0;p<a.slides.length;p+=1)if(a.slides[p]===o){l=!0,u=p;break}}if(o&&l)a.clickedSlide=o,a.virtual&&a.params.virtual.enabled?a.clickedIndex=parseInt(o.getAttribute("data-swiper-slide-index"),10):a.clickedIndex=u;else{a.clickedSlide=void 0,a.clickedIndex=void 0;return}i.slideToClickedSlide&&a.clickedIndex!==void 0&&a.clickedIndex!==a.activeIndex&&a.slideToClickedSlide()}var iO={updateSize:YL,updateSlides:XL,updateAutoHeight:WL,updateSlidesOffset:QL,updateSlidesProgress:ZL,updateProgress:JL,updateSlidesClasses:eO,updateActiveIndex:nO,updateClickedSlide:aO};function rO(e=this.isHorizontal()?"x":"y"){const t=this,{params:a,rtlTranslate:i,translate:o,wrapperEl:l}=t;if(a.virtualTranslate)return i?-o:o;if(a.cssMode)return o;let u=DL(l,e);return u+=t.cssOverflowAdjustment(),i&&(u=-u),u||0}function sO(e,t){const a=this,{rtlTranslate:i,params:o,wrapperEl:l,progress:u}=a;let p=0,f=0;const g=0;a.isHorizontal()?p=i?-e:e:f=e,o.roundLengths&&(p=Math.floor(p),f=Math.floor(f)),a.previousTranslate=a.translate,a.translate=a.isHorizontal()?p:f,o.cssMode?l[a.isHorizontal()?"scrollLeft":"scrollTop"]=a.isHorizontal()?-p:-f:o.virtualTranslate||(a.isHorizontal()?p-=a.cssOverflowAdjustment():f-=a.cssOverflowAdjustment(),l.style.transform=`translate3d(${p}px, ${f}px, ${g}px)`);let m;const x=a.maxTranslate()-a.minTranslate();x===0?m=0:m=(e-a.minTranslate())/x,m!==u&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)}function oO(){return-this.snapGrid[0]}function lO(){return-this.snapGrid[this.snapGrid.length-1]}function cO(e=0,t=this.params.speed,a=!0,i=!0,o){const l=this,{params:u,wrapperEl:p}=l;if(l.animating&&u.preventInteractionOnTransition)return!1;const f=l.minTranslate(),g=l.maxTranslate();let m;if(i&&e>f?m=f:i&&e<g?m=g:m=e,l.updateProgress(m),u.cssMode){const x=l.isHorizontal();if(t===0)p[x?"scrollLeft":"scrollTop"]=-m;else{if(!l.support.smoothScroll)return q3({swiper:l,targetPosition:-m,side:x?"left":"top"}),!0;p.scrollTo({[x?"left":"top"]:-m,behavior:"smooth"})}return!0}return t===0?(l.setTransition(0),l.setTranslate(m),a&&(l.emit("beforeTransitionStart",t,o),l.emit("transitionEnd"))):(l.setTransition(t),l.setTranslate(m),a&&(l.emit("beforeTransitionStart",t,o),l.emit("transitionStart")),l.animating||(l.animating=!0,l.onTranslateToWrapperTransitionEnd||(l.onTranslateToWrapperTransitionEnd=function(y){!l||l.destroyed||y.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onTranslateToWrapperTransitionEnd),l.onTranslateToWrapperTransitionEnd=null,delete l.onTranslateToWrapperTransitionEnd,l.animating=!1,a&&l.emit("transitionEnd"))}),l.wrapperEl.addEventListener("transitionend",l.onTranslateToWrapperTransitionEnd))),!0}var uO={getTranslate:rO,setTranslate:sO,minTranslate:oO,maxTranslate:lO,translateTo:cO};function dO(e,t){const a=this;a.params.cssMode||(a.wrapperEl.style.transitionDuration=`${e}ms`,a.wrapperEl.style.transitionDelay=e===0?"0ms":""),a.emit("setTransition",e,t)}function Q3({swiper:e,runCallbacks:t,direction:a,step:i}){const{activeIndex:o,previousIndex:l}=e;let u=a;u||(o>l?u="next":o<l?u="prev":u="reset"),e.emit(`transition${i}`),t&&u==="reset"?e.emit(`slideResetTransition${i}`):t&&o!==l&&(e.emit(`slideChangeTransition${i}`),u==="next"?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`))}function fO(e=!0,t){const a=this,{params:i}=a;i.cssMode||(i.autoHeight&&a.updateAutoHeight(),Q3({swiper:a,runCallbacks:e,direction:t,step:"Start"}))}function pO(e=!0,t){const a=this,{params:i}=a;a.animating=!1,!i.cssMode&&(a.setTransition(0),Q3({swiper:a,runCallbacks:e,direction:t,step:"End"}))}var hO={setTransition:dO,transitionStart:fO,transitionEnd:pO};function gO(e=0,t,a=!0,i,o){typeof e=="string"&&(e=parseInt(e,10));const l=this;let u=e;u<0&&(u=0);const{params:p,snapGrid:f,slidesGrid:g,previousIndex:m,activeIndex:x,rtlTranslate:y,wrapperEl:v,enabled:S}=l;if(!S&&!i&&!o||l.destroyed||l.animating&&p.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=l.params.speed);const k=Math.min(l.params.slidesPerGroupSkip,u);let A=k+Math.floor((u-k)/l.params.slidesPerGroup);A>=f.length&&(A=f.length-1);const M=-f[A];if(p.normalizeSlideIndex)for(let N=0;N<g.length;N+=1){const O=-Math.floor(M*100),X=Math.floor(g[N]*100),J=Math.floor(g[N+1]*100);typeof g[N+1]<"u"?O>=X&&O<J-(J-X)/2?u=N:O>=X&&O<J&&(u=N+1):O>=X&&(u=N)}if(l.initialized&&u!==x&&(!l.allowSlideNext&&(y?M>l.translate&&M>l.minTranslate():M<l.translate&&M<l.minTranslate())||!l.allowSlidePrev&&M>l.translate&&M>l.maxTranslate()&&(x||0)!==u))return!1;u!==(m||0)&&a&&l.emit("beforeSlideChangeStart"),l.updateProgress(M);let z;u>x?z="next":u<x?z="prev":z="reset";const C=l.virtual&&l.params.virtual.enabled;if(!(C&&o)&&(y&&-M===l.translate||!y&&M===l.translate))return l.updateActiveIndex(u),p.autoHeight&&l.updateAutoHeight(),l.updateSlidesClasses(),p.effect!=="slide"&&l.setTranslate(M),z!=="reset"&&(l.transitionStart(a,z),l.transitionEnd(a,z)),!1;if(p.cssMode){const N=l.isHorizontal(),O=y?M:-M;if(t===0)C&&(l.wrapperEl.style.scrollSnapType="none",l._immediateVirtual=!0),C&&!l._cssModeVirtualInitialSet&&l.params.initialSlide>0?(l._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{v[N?"scrollLeft":"scrollTop"]=O})):v[N?"scrollLeft":"scrollTop"]=O,C&&requestAnimationFrame(()=>{l.wrapperEl.style.scrollSnapType="",l._immediateVirtual=!1});else{if(!l.support.smoothScroll)return q3({swiper:l,targetPosition:O,side:N?"left":"top"}),!0;v.scrollTo({[N?"left":"top"]:O,behavior:"smooth"})}return!0}const V=W3().isSafari;return C&&!o&&V&&l.isElement&&l.virtual.update(!1,!1,u),l.setTransition(t),l.setTranslate(M),l.updateActiveIndex(u),l.updateSlidesClasses(),l.emit("beforeTransitionStart",t,i),l.transitionStart(a,z),t===0?l.transitionEnd(a,z):l.animating||(l.animating=!0,l.onSlideToWrapperTransitionEnd||(l.onSlideToWrapperTransitionEnd=function(O){!l||l.destroyed||O.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onSlideToWrapperTransitionEnd),l.onSlideToWrapperTransitionEnd=null,delete l.onSlideToWrapperTransitionEnd,l.transitionEnd(a,z))}),l.wrapperEl.addEventListener("transitionend",l.onSlideToWrapperTransitionEnd)),!0}function mO(e=0,t,a=!0,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;if(o.destroyed)return;typeof t>"u"&&(t=o.params.speed);const l=o.grid&&o.params.grid&&o.params.grid.rows>1;let u=e;if(o.params.loop)if(o.virtual&&o.params.virtual.enabled)u=u+o.virtual.slidesBefore;else{let p;if(l){const k=u*o.params.grid.rows;p=o.slides.find(A=>A.getAttribute("data-swiper-slide-index")*1===k).column}else p=o.getSlideIndexByData(u);const f=l?Math.ceil(o.slides.length/o.params.grid.rows):o.slides.length,{centeredSlides:g,slidesOffsetBefore:m,slidesOffsetAfter:x}=o.params,y=g||!!m||!!x;let v=o.params.slidesPerView;v==="auto"?v=o.slidesPerViewDynamic():(v=Math.ceil(parseFloat(o.params.slidesPerView,10)),y&&v%2===0&&(v=v+1));let S=f-p<v;if(y&&(S=S||p<Math.ceil(v/2)),i&&y&&o.params.slidesPerView!=="auto"&&!l&&(S=!1),S){const k=y?p<o.activeIndex?"prev":"next":p-o.activeIndex-1<o.params.slidesPerView?"next":"prev";o.loopFix({direction:k,slideTo:!0,activeSlideIndex:k==="next"?p+1:p-f+1,slideRealIndex:k==="next"?o.realIndex:void 0})}if(l){const k=u*o.params.grid.rows;u=o.slides.find(A=>A.getAttribute("data-swiper-slide-index")*1===k).column}else u=o.getSlideIndexByData(u)}return requestAnimationFrame(()=>{o.slideTo(u,t,a,i)}),o}function bO(e,t=!0,a){const i=this,{enabled:o,params:l,animating:u}=i;if(!o||i.destroyed)return i;typeof e>"u"&&(e=i.params.speed);let p=l.slidesPerGroup;l.slidesPerView==="auto"&&l.slidesPerGroup===1&&l.slidesPerGroupAuto&&(p=Math.max(i.slidesPerViewDynamic("current",!0),1));const f=i.activeIndex<l.slidesPerGroupSkip?1:p,g=i.virtual&&l.virtual.enabled;if(l.loop){if(u&&!g&&l.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&l.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+f,e,t,a)}),!0}return l.rewind&&i.isEnd?i.slideTo(0,e,t,a):i.slideTo(i.activeIndex+f,e,t,a)}function xO(e,t=!0,a){const i=this,{params:o,snapGrid:l,slidesGrid:u,rtlTranslate:p,enabled:f,animating:g}=i;if(!f||i.destroyed)return i;typeof e>"u"&&(e=i.params.speed);const m=i.virtual&&o.virtual.enabled;if(o.loop){if(g&&!m&&o.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const x=p?i.translate:-i.translate;function y(z){return z<0?-Math.floor(Math.abs(z)):Math.floor(z)}const v=y(x),S=l.map(z=>y(z)),k=o.freeMode&&o.freeMode.enabled;let A=l[S.indexOf(v)-1];if(typeof A>"u"&&(o.cssMode||k)){let z;l.forEach((C,H)=>{v>=C&&(z=H)}),typeof z<"u"&&(A=k?l[z]:l[z>0?z-1:z])}let M=0;if(typeof A<"u"&&(M=u.indexOf(A),M<0&&(M=i.activeIndex-1),o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(M=M-i.slidesPerViewDynamic("previous",!0)+1,M=Math.max(M,0))),o.rewind&&i.isBeginning){const z=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(z,e,t,a)}else if(o.loop&&i.activeIndex===0&&o.cssMode)return requestAnimationFrame(()=>{i.slideTo(M,e,t,a)}),!0;return i.slideTo(M,e,t,a)}function yO(e,t=!0,a){const i=this;if(!i.destroyed)return typeof e>"u"&&(e=i.params.speed),i.slideTo(i.activeIndex,e,t,a)}function vO(e,t=!0,a,i=.5){const o=this;if(o.destroyed)return;typeof e>"u"&&(e=o.params.speed);let l=o.activeIndex;const u=Math.min(o.params.slidesPerGroupSkip,l),p=u+Math.floor((l-u)/o.params.slidesPerGroup),f=o.rtlTranslate?o.translate:-o.translate;if(f>=o.snapGrid[p]){const g=o.snapGrid[p],m=o.snapGrid[p+1];f-g>(m-g)*i&&(l+=o.params.slidesPerGroup)}else{const g=o.snapGrid[p-1],m=o.snapGrid[p];f-g<=(m-g)*i&&(l-=o.params.slidesPerGroup)}return l=Math.max(l,0),l=Math.min(l,o.slidesGrid.length-1),o.slideTo(l,e,t,a)}function wO(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:a}=e,i=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let o=e.getSlideIndexWhenGrid(e.clickedIndex),l;const u=e.isElement?"swiper-slide":`.${t.slideClass}`,p=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;l=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(l):o>(p?(e.slides.length-i)/2-(e.params.grid.rows-1):e.slides.length-i)?(e.loopFix(),o=e.getSlideIndex(za(a,`${u}[data-swiper-slide-index="${l}"]`)[0]),F3(()=>{e.slideTo(o)})):e.slideTo(o)}else e.slideTo(o)}var SO={slideTo:gO,slideToLoop:mO,slideNext:bO,slidePrev:xO,slideReset:yO,slideToClosest:vO,slideToClickedSlide:wO};function kO(e,t){const a=this,{params:i,slidesEl:o}=a;if(!i.loop||a.virtual&&a.params.virtual.enabled)return;const l=()=>{za(o,`.${i.slideClass}, swiper-slide`).forEach((S,k)=>{S.setAttribute("data-swiper-slide-index",k)})},u=()=>{const v=za(o,`.${i.slideBlankClass}`);v.forEach(S=>{S.remove()}),v.length>0&&(a.recalcSlides(),a.updateSlides())},p=a.grid&&i.grid&&i.grid.rows>1;i.loopAddBlankSlides&&(i.slidesPerGroup>1||p)&&u();const f=i.slidesPerGroup*(p?i.grid.rows:1),g=a.slides.length%f!==0,m=p&&a.slides.length%i.grid.rows!==0,x=v=>{for(let S=0;S<v;S+=1){const k=a.isElement?Pu("swiper-slide",[i.slideBlankClass]):Pu("div",[i.slideClass,i.slideBlankClass]);a.slidesEl.append(k)}};if(g){if(i.loopAddBlankSlides){const v=f-a.slides.length%f;x(v),a.recalcSlides(),a.updateSlides()}else Du("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else if(m){if(i.loopAddBlankSlides){const v=i.grid.rows-a.slides.length%i.grid.rows;x(v),a.recalcSlides(),a.updateSlides()}else Du("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else l();const y=i.centeredSlides||!!i.slidesOffsetBefore||!!i.slidesOffsetAfter;a.loopFix({slideRealIndex:e,direction:y?void 0:"next",initial:t})}function TO({slideRealIndex:e,slideTo:t=!0,direction:a,setTranslate:i,activeSlideIndex:o,initial:l,byController:u,byMousewheel:p}={}){const f=this;if(!f.params.loop)return;f.emit("beforeLoopFix");const{slides:g,allowSlidePrev:m,allowSlideNext:x,slidesEl:y,params:v}=f,{centeredSlides:S,slidesOffsetBefore:k,slidesOffsetAfter:A,initialSlide:M}=v,z=S||!!k||!!A;if(f.allowSlidePrev=!0,f.allowSlideNext=!0,f.virtual&&v.virtual.enabled){t&&(!z&&f.snapIndex===0?f.slideTo(f.virtual.slides.length,0,!1,!0):z&&f.snapIndex<v.slidesPerView?f.slideTo(f.virtual.slides.length+f.snapIndex,0,!1,!0):f.snapIndex===f.snapGrid.length-1&&f.slideTo(f.virtual.slidesBefore,0,!1,!0)),f.allowSlidePrev=m,f.allowSlideNext=x,f.emit("loopFix");return}let C=v.slidesPerView;C==="auto"?C=f.slidesPerViewDynamic():(C=Math.ceil(parseFloat(v.slidesPerView,10)),z&&C%2===0&&(C=C+1));const H=v.slidesPerGroupAuto?C:v.slidesPerGroup;let E=z?Math.max(H,Math.ceil(C/2)):H;E%H!==0&&(E+=H-E%H),E+=v.loopAdditionalSlides,f.loopedSlides=E;const V=f.grid&&v.grid&&v.grid.rows>1;g.length<C+E||f.params.effect==="cards"&&g.length<C+E*2?Du("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):V&&v.grid.fill==="row"&&Du("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const N=[],O=[],X=V?Math.ceil(g.length/v.grid.rows):g.length,J=l&&X-M<C&&!z;let $=J?M:f.activeIndex;typeof o>"u"?o=f.getSlideIndex(g.find(G=>G.classList.contains(v.slideActiveClass))):$=o;const te=a==="next"||!a,ce=a==="prev"||!a;let le=0,oe=0;const B=(V?g[o].column:o)+(z&&typeof i>"u"?-C/2+.5:0);if(B<E){le=Math.max(E-B,H);for(let G=0;G<E-B;G+=1){const Z=G-Math.floor(G/X)*X;if(V){const L=X-Z-1;for(let Y=g.length-1;Y>=0;Y-=1)g[Y].column===L&&N.push(Y)}else N.push(X-Z-1)}}else if(B+C>X-E){oe=Math.max(B-(X-E*2),H),J&&(oe=Math.max(oe,C-X+M+1));for(let G=0;G<oe;G+=1){const Z=G-Math.floor(G/X)*X;V?g.forEach((L,Y)=>{L.column===Z&&O.push(Y)}):O.push(Z)}}if(f.__preventObserver__=!0,requestAnimationFrame(()=>{f.__preventObserver__=!1}),f.params.effect==="cards"&&g.length<C+E*2&&(O.includes(o)&&O.splice(O.indexOf(o),1),N.includes(o)&&N.splice(N.indexOf(o),1)),ce&&N.forEach(G=>{g[G].swiperLoopMoveDOM=!0,y.prepend(g[G]),g[G].swiperLoopMoveDOM=!1}),te&&O.forEach(G=>{g[G].swiperLoopMoveDOM=!0,y.append(g[G]),g[G].swiperLoopMoveDOM=!1}),f.recalcSlides(),v.slidesPerView==="auto"?f.updateSlides():V&&(N.length>0&&ce||O.length>0&&te)&&f.slides.forEach((G,Z)=>{f.grid.updateSlide(Z,G,f.slides)}),v.watchSlidesProgress&&f.updateSlidesOffset(),t){if(N.length>0&&ce){if(typeof e>"u"){const G=f.slidesGrid[$],L=f.slidesGrid[$+le]-G;p?f.setTranslate(f.translate-L):(f.slideTo($+Math.ceil(le),0,!1,!0),i&&(f.touchEventsData.startTranslate=f.touchEventsData.startTranslate-L,f.touchEventsData.currentTranslate=f.touchEventsData.currentTranslate-L))}else if(i){const G=V?N.length/v.grid.rows:N.length;f.slideTo(f.activeIndex+G,0,!1,!0),f.touchEventsData.currentTranslate=f.translate}}else if(O.length>0&&te)if(typeof e>"u"){const G=f.slidesGrid[$],L=f.slidesGrid[$-oe]-G;p?f.setTranslate(f.translate-L):(f.slideTo($-oe,0,!1,!0),i&&(f.touchEventsData.startTranslate=f.touchEventsData.startTranslate-L,f.touchEventsData.currentTranslate=f.touchEventsData.currentTranslate-L))}else{const G=V?O.length/v.grid.rows:O.length;f.slideTo(f.activeIndex-G,0,!1,!0)}}if(f.allowSlidePrev=m,f.allowSlideNext=x,f.controller&&f.controller.control&&!u){const G={slideRealIndex:e,direction:a,setTranslate:i,activeSlideIndex:o,byController:!0};Array.isArray(f.controller.control)?f.controller.control.forEach(Z=>{!Z.destroyed&&Z.params.loop&&Z.loopFix({...G,slideTo:Z.params.slidesPerView===v.slidesPerView?t:!1})}):f.controller.control instanceof f.constructor&&f.controller.control.params.loop&&f.controller.control.loopFix({...G,slideTo:f.controller.control.params.slidesPerView===v.slidesPerView?t:!1})}f.emit("loopFix")}function jO(){const e=this,{params:t,slidesEl:a}=e;if(!t.loop||!a||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const i=[];e.slides.forEach(o=>{const l=typeof o.swiperSlideIndex>"u"?o.getAttribute("data-swiper-slide-index")*1:o.swiperSlideIndex;i[l]=o}),e.slides.forEach(o=>{o.removeAttribute("data-swiper-slide-index")}),i.forEach(o=>{a.append(o)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var CO={loopCreate:kO,loopFix:TO,loopDestroy:jO};function AO(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const a=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),a.style.cursor="move",a.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function EO(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var MO={setGrabCursor:AO,unsetGrabCursor:EO};function zO(e,t=this){function a(i){if(!i||i===Zt()||i===Rt())return null;i.assignedSlot&&(i=i.assignedSlot);const o=i.closest(e);return!o&&!i.getRootNode?null:o||a(i.getRootNode().host)}return a(t)}function cv(e,t,a){const i=Rt(),{params:o}=e,l=o.edgeSwipeDetection,u=o.edgeSwipeThreshold;return l&&(a<=u||a>=i.innerWidth-u)?l==="prevent"?(t.preventDefault(),!0):!1:!0}function RO(e){const t=this,a=Zt();let i=e;i.originalEvent&&(i=i.originalEvent);const o=t.touchEventsData;if(i.type==="pointerdown"){if(o.pointerId!==null&&o.pointerId!==i.pointerId)return;o.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(o.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){cv(t,i,i.targetTouches[0].pageX);return}const{params:l,touches:u,enabled:p}=t;if(!p||!l.simulateTouch&&i.pointerType==="mouse"||t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let f=i.target;if(l.touchEventsTarget==="wrapper"&&!NL(f,t.wrapperEl)||"which"in i&&i.which===3||"button"in i&&i.button>0||o.isTouched&&o.isMoved)return;const g=!!l.noSwipingClass&&l.noSwipingClass!=="",m=i.composedPath?i.composedPath():i.path;g&&i.target&&i.target.shadowRoot&&m&&(f=m[0]);const x=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,y=!!(i.target&&i.target.shadowRoot);if(l.noSwiping&&(y?zO(x,f):f.closest(x))){t.allowClick=!0;return}if(l.swipeHandler&&!f.closest(l.swipeHandler))return;u.currentX=i.pageX,u.currentY=i.pageY;const v=u.currentX,S=u.currentY;if(!cv(t,i,v))return;Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),u.startX=v,u.startY=S,o.touchStartTime=Ou(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(o.allowThresholdMove=!1);let k=!0;f.matches(o.focusableElements)&&(k=!1,f.nodeName==="SELECT"&&(o.isTouched=!1)),a.activeElement&&a.activeElement.matches(o.focusableElements)&&a.activeElement!==f&&(i.pointerType==="mouse"||i.pointerType!=="mouse"&&!f.matches(o.focusableElements))&&a.activeElement.blur();const A=k&&t.allowTouchMove&&l.touchStartPreventDefault;(l.touchStartForcePreventDefault||A)&&!f.isContentEditable&&i.preventDefault(),l.freeMode&&l.freeMode.enabled&&t.freeMode&&t.animating&&!l.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",i)}function LO(e){const t=Zt(),a=this,i=a.touchEventsData,{params:o,touches:l,rtlTranslate:u,enabled:p}=a;if(!p||!o.simulateTouch&&e.pointerType==="mouse")return;let f=e;if(f.originalEvent&&(f=f.originalEvent),f.type==="pointermove"&&(i.touchId!==null||f.pointerId!==i.pointerId))return;let g;if(f.type==="touchmove"){if(g=[...f.changedTouches].find(E=>E.identifier===i.touchId),!g||g.identifier!==i.touchId)return}else g=f;if(!i.isTouched){i.startMoving&&i.isScrolling&&a.emit("touchMoveOpposite",f);return}const m=g.pageX,x=g.pageY;if(f.preventedByNestedSwiper){l.startX=m,l.startY=x;return}if(!a.allowTouchMove){f.target.matches(i.focusableElements)||(a.allowClick=!1),i.isTouched&&(Object.assign(l,{startX:m,startY:x,currentX:m,currentY:x}),i.touchStartTime=Ou());return}if(o.touchReleaseOnEdges&&!o.loop)if(a.isVertical()){if(x<l.startY&&a.translate<=a.maxTranslate()||x>l.startY&&a.translate>=a.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else{if(u&&(m>l.startX&&-a.translate<=a.maxTranslate()||m<l.startX&&-a.translate>=a.minTranslate()))return;if(!u&&(m<l.startX&&a.translate<=a.maxTranslate()||m>l.startX&&a.translate>=a.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(i.focusableElements)&&t.activeElement!==f.target&&f.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&f.target===t.activeElement&&f.target.matches(i.focusableElements)){i.isMoved=!0,a.allowClick=!1;return}i.allowTouchCallbacks&&a.emit("touchMove",f),l.previousX=l.currentX,l.previousY=l.currentY,l.currentX=m,l.currentY=x;const y=l.currentX-l.startX,v=l.currentY-l.startY;if(a.params.threshold&&Math.sqrt(y**2+v**2)<a.params.threshold)return;if(typeof i.isScrolling>"u"){let E;a.isHorizontal()&&l.currentY===l.startY||a.isVertical()&&l.currentX===l.startX?i.isScrolling=!1:y*y+v*v>=25&&(E=Math.atan2(Math.abs(v),Math.abs(y))*180/Math.PI,i.isScrolling=a.isHorizontal()?E>o.touchAngle:90-E>o.touchAngle)}if(i.isScrolling&&a.emit("touchMoveOpposite",f),typeof i.startMoving>"u"&&(l.currentX!==l.startX||l.currentY!==l.startY)&&(i.startMoving=!0),i.isScrolling||f.type==="touchmove"&&i.preventTouchMoveFromPointerMove){i.isTouched=!1;return}if(!i.startMoving)return;a.allowClick=!1,!o.cssMode&&f.cancelable&&f.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&f.stopPropagation();let S=a.isHorizontal()?y:v,k=a.isHorizontal()?l.currentX-l.previousX:l.currentY-l.previousY;o.oneWayMovement&&(S=Math.abs(S)*(u?1:-1),k=Math.abs(k)*(u?1:-1)),l.diff=S,S*=o.touchRatio,u&&(S=-S,k=-k);const A=a.touchesDirection;a.swipeDirection=S>0?"prev":"next",a.touchesDirection=k>0?"prev":"next";const M=a.params.loop&&!o.cssMode,z=a.touchesDirection==="next"&&a.allowSlideNext||a.touchesDirection==="prev"&&a.allowSlidePrev;if(!i.isMoved){if(M&&z&&a.loopFix({direction:a.swipeDirection}),i.startTranslate=a.getTranslate(),a.setTransition(0),a.animating){const E=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});a.wrapperEl.dispatchEvent(E)}i.allowMomentumBounce=!1,o.grabCursor&&(a.allowSlideNext===!0||a.allowSlidePrev===!0)&&a.setGrabCursor(!0),a.emit("sliderFirstMove",f)}if(new Date().getTime(),o._loopSwapReset!==!1&&i.isMoved&&i.allowThresholdMove&&A!==a.touchesDirection&&M&&z&&Math.abs(S)>=1){Object.assign(l,{startX:m,startY:x,currentX:m,currentY:x,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}a.emit("sliderMove",f),i.isMoved=!0,i.currentTranslate=S+i.startTranslate;let C=!0,H=o.resistanceRatio;if(o.touchReleaseOnEdges&&(H=0),S>0?(M&&z&&i.allowThresholdMove&&i.currentTranslate>(o.centeredSlides?a.minTranslate()-a.slidesSizesGrid[a.activeIndex+1]-(o.slidesPerView!=="auto"&&a.slides.length-o.slidesPerView>=2?a.slidesSizesGrid[a.activeIndex+1]+a.params.spaceBetween:0)-a.params.spaceBetween:a.minTranslate())&&a.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>a.minTranslate()&&(C=!1,o.resistance&&(i.currentTranslate=a.minTranslate()-1+(-a.minTranslate()+i.startTranslate+S)**H))):S<0&&(M&&z&&i.allowThresholdMove&&i.currentTranslate<(o.centeredSlides?a.maxTranslate()+a.slidesSizesGrid[a.slidesSizesGrid.length-1]+a.params.spaceBetween+(o.slidesPerView!=="auto"&&a.slides.length-o.slidesPerView>=2?a.slidesSizesGrid[a.slidesSizesGrid.length-1]+a.params.spaceBetween:0):a.maxTranslate())&&a.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:a.slides.length-(o.slidesPerView==="auto"?a.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),i.currentTranslate<a.maxTranslate()&&(C=!1,o.resistance&&(i.currentTranslate=a.maxTranslate()+1-(a.maxTranslate()-i.startTranslate-S)**H))),C&&(f.preventedByNestedSwiper=!0),!a.allowSlideNext&&a.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!a.allowSlidePrev&&a.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!a.allowSlidePrev&&!a.allowSlideNext&&(i.currentTranslate=i.startTranslate),o.threshold>0)if(Math.abs(S)>o.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,l.startX=l.currentX,l.startY=l.currentY,i.currentTranslate=i.startTranslate,l.diff=a.isHorizontal()?l.currentX-l.startX:l.currentY-l.startY;return}}else{i.currentTranslate=i.startTranslate;return}!o.followFinger||o.cssMode||((o.freeMode&&o.freeMode.enabled&&a.freeMode||o.watchSlidesProgress)&&(a.updateActiveIndex(),a.updateSlidesClasses()),o.freeMode&&o.freeMode.enabled&&a.freeMode&&a.freeMode.onTouchMove(),a.updateProgress(i.currentTranslate),a.setTranslate(i.currentTranslate))}function OO(e){const t=this,a=t.touchEventsData;let i=e;i.originalEvent&&(i=i.originalEvent);let o;if(i.type==="touchend"||i.type==="touchcancel"){if(o=[...i.changedTouches].find(E=>E.identifier===a.touchId),!o||o.identifier!==a.touchId)return}else{if(a.touchId!==null||i.pointerId!==a.pointerId)return;o=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(t.browser.isSafari||t.browser.isWebView)))return;a.pointerId=null,a.touchId=null;const{params:u,touches:p,rtlTranslate:f,slidesGrid:g,enabled:m}=t;if(!m||!u.simulateTouch&&i.pointerType==="mouse")return;if(a.allowTouchCallbacks&&t.emit("touchEnd",i),a.allowTouchCallbacks=!1,!a.isTouched){a.isMoved&&u.grabCursor&&t.setGrabCursor(!1),a.isMoved=!1,a.startMoving=!1;return}u.grabCursor&&a.isMoved&&a.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const x=Ou(),y=x-a.touchStartTime;if(t.allowClick){const E=i.path||i.composedPath&&i.composedPath();t.updateClickedSlide(E&&E[0]||i.target,E),t.emit("tap click",i),y<300&&x-a.lastClickTime<300&&t.emit("doubleTap doubleClick",i)}if(a.lastClickTime=Ou(),F3(()=>{t.destroyed||(t.allowClick=!0)}),!a.isTouched||!a.isMoved||!t.swipeDirection||p.diff===0&&!a.loopSwapReset||a.currentTranslate===a.startTranslate&&!a.loopSwapReset){a.isTouched=!1,a.isMoved=!1,a.startMoving=!1;return}a.isTouched=!1,a.isMoved=!1,a.startMoving=!1;let v;if(u.followFinger?v=f?t.translate:-t.translate:v=-a.currentTranslate,u.cssMode)return;if(u.freeMode&&u.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:v});return}const S=v>=-t.maxTranslate()&&!t.params.loop;let k=0,A=t.slidesSizesGrid[0];for(let E=0;E<g.length;E+=E<u.slidesPerGroupSkip?1:u.slidesPerGroup){const V=E<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;typeof g[E+V]<"u"?(S||v>=g[E]&&v<g[E+V])&&(k=E,A=g[E+V]-g[E]):(S||v>=g[E])&&(k=E,A=g[g.length-1]-g[g.length-2])}let M=null,z=null;u.rewind&&(t.isBeginning?z=u.virtual&&u.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(M=0));const C=(v-g[k])/A,H=k<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;if(y>u.longSwipesMs){if(!u.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(C>=u.longSwipesRatio?t.slideTo(u.rewind&&t.isEnd?M:k+H):t.slideTo(k)),t.swipeDirection==="prev"&&(C>1-u.longSwipesRatio?t.slideTo(k+H):z!==null&&C<0&&Math.abs(C)>u.longSwipesRatio?t.slideTo(z):t.slideTo(k))}else{if(!u.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(i.target===t.navigation.nextEl||i.target===t.navigation.prevEl)?i.target===t.navigation.nextEl?t.slideTo(k+H):t.slideTo(k):(t.swipeDirection==="next"&&t.slideTo(M!==null?M:k+H),t.swipeDirection==="prev"&&t.slideTo(z!==null?z:k))}}function uv(){const e=this,{params:t,el:a}=e;if(a&&a.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:o,snapGrid:l}=e,u=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const p=u&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!p?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!u?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=o,e.allowSlideNext=i,e.params.watchOverflow&&l!==e.snapGrid&&e.checkOverflow()}function DO(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function PO(){const e=this,{wrapperEl:t,rtlTranslate:a,enabled:i}=e;if(!i)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let o;const l=e.maxTranslate()-e.minTranslate();l===0?o=0:o=(e.translate-e.minTranslate())/l,o!==e.progress&&e.updateProgress(a?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function VO(e){const t=this;du(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function NO(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Z3=(e,t)=>{const a=Zt(),{params:i,el:o,wrapperEl:l,device:u}=e,p=!!i.nested,f=t==="on"?"addEventListener":"removeEventListener",g=t;!o||typeof o=="string"||(a[f]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:p}),o[f]("touchstart",e.onTouchStart,{passive:!1}),o[f]("pointerdown",e.onTouchStart,{passive:!1}),a[f]("touchmove",e.onTouchMove,{passive:!1,capture:p}),a[f]("pointermove",e.onTouchMove,{passive:!1,capture:p}),a[f]("touchend",e.onTouchEnd,{passive:!0}),a[f]("pointerup",e.onTouchEnd,{passive:!0}),a[f]("pointercancel",e.onTouchEnd,{passive:!0}),a[f]("touchcancel",e.onTouchEnd,{passive:!0}),a[f]("pointerout",e.onTouchEnd,{passive:!0}),a[f]("pointerleave",e.onTouchEnd,{passive:!0}),a[f]("contextmenu",e.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&o[f]("click",e.onClick,!0),i.cssMode&&l[f]("scroll",e.onScroll),i.updateOnWindowResize?e[g](u.ios||u.android?"resize orientationchange observerUpdate":"resize observerUpdate",uv,!0):e[g]("observerUpdate",uv,!0),o[f]("load",e.onLoad,{capture:!0}))};function BO(){const e=this,{params:t}=e;e.onTouchStart=RO.bind(e),e.onTouchMove=LO.bind(e),e.onTouchEnd=OO.bind(e),e.onDocumentTouchStart=NO.bind(e),t.cssMode&&(e.onScroll=PO.bind(e)),e.onClick=DO.bind(e),e.onLoad=VO.bind(e),Z3(e,"on")}function _O(){Z3(this,"off")}var $O={attachEvents:BO,detachEvents:_O};const dv=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function HO(){const e=this,{realIndex:t,initialized:a,params:i,el:o}=e,l=i.breakpoints;if(!l||l&&Object.keys(l).length===0)return;const u=Zt(),p=i.breakpointsBase==="window"||!i.breakpointsBase?i.breakpointsBase:"container",f=["window","container"].includes(i.breakpointsBase)||!i.breakpointsBase?e.el:u.querySelector(i.breakpointsBase),g=e.getBreakpoint(l,p,f);if(!g||e.currentBreakpoint===g)return;const x=(g in l?l[g]:void 0)||e.originalParams,y=dv(e,i),v=dv(e,x),S=e.params.grabCursor,k=x.grabCursor,A=i.enabled;y&&!v?(o.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!y&&v&&(o.classList.add(`${i.containerModifierClass}grid`),(x.grid.fill&&x.grid.fill==="column"||!x.grid.fill&&i.grid.fill==="column")&&o.classList.add(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),S&&!k?e.unsetGrabCursor():!S&&k&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(V=>{if(typeof x[V]>"u")return;const N=i[V]&&i[V].enabled,O=x[V]&&x[V].enabled;N&&!O&&e[V].disable(),!N&&O&&e[V].enable()});const M=x.direction&&x.direction!==i.direction,z=i.loop&&(x.slidesPerView!==i.slidesPerView||M),C=i.loop;M&&a&&e.changeDirection(),fn(e.params,x);const H=e.params.enabled,E=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),A&&!H?e.disable():!A&&H&&e.enable(),e.currentBreakpoint=g,e.emit("_beforeBreakpoint",x),a&&(z?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!C&&E?(e.loopCreate(t),e.updateSlides()):C&&!E&&e.loopDestroy()),e.emit("breakpoint",x)}function UO(e,t="window",a){if(!e||t==="container"&&!a)return;let i=!1;const o=Rt(),l=t==="window"?o.innerHeight:a.clientHeight,u=Object.keys(e).map(p=>{if(typeof p=="string"&&p.indexOf("@")===0){const f=parseFloat(p.substr(1));return{value:l*f,point:p}}return{value:p,point:p}});u.sort((p,f)=>parseInt(p.value,10)-parseInt(f.value,10));for(let p=0;p<u.length;p+=1){const{point:f,value:g}=u[p];t==="window"?o.matchMedia(`(min-width: ${g}px)`).matches&&(i=f):g<=a.clientWidth&&(i=f)}return i||"max"}var GO={setBreakpoint:HO,getBreakpoint:UO};function IO(e,t){const a=[];return e.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(o=>{i[o]&&a.push(t+o)}):typeof i=="string"&&a.push(t+i)}),a}function FO(){const e=this,{classNames:t,params:a,rtl:i,el:o,device:l}=e,u=IO(["initialized",a.direction,{"free-mode":e.params.freeMode&&a.freeMode.enabled},{autoheight:a.autoHeight},{rtl:i},{grid:a.grid&&a.grid.rows>1},{"grid-column":a.grid&&a.grid.rows>1&&a.grid.fill==="column"},{android:l.android},{ios:l.ios},{"css-mode":a.cssMode},{centered:a.cssMode&&a.centeredSlides},{"watch-progress":a.watchSlidesProgress}],a.containerModifierClass);t.push(...u),o.classList.add(...t),e.emitContainerClasses()}function qO(){const e=this,{el:t,classNames:a}=e;!t||typeof t=="string"||(t.classList.remove(...a),e.emitContainerClasses())}var KO={addClasses:FO,removeClasses:qO};function YO(){const e=this,{isLocked:t,params:a}=e,{slidesOffsetBefore:i}=a;if(i){const o=e.slides.length-1,l=e.slidesGrid[o]+e.slidesSizesGrid[o]+i*2;e.isLocked=e.size>l}else e.isLocked=e.snapGrid.length===1;a.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),a.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var XO={checkOverflow:YO},hg={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function WO(e,t){return function(i={}){const o=Object.keys(i)[0],l=i[o];if(typeof l!="object"||l===null){fn(t,i);return}if(e[o]===!0&&(e[o]={enabled:!0}),o==="navigation"&&e[o]&&e[o].enabled&&!e[o].prevEl&&!e[o].nextEl&&(e[o].auto=!0),["pagination","scrollbar"].indexOf(o)>=0&&e[o]&&e[o].enabled&&!e[o].el&&(e[o].auto=!0),!(o in e&&"enabled"in l)){fn(t,i);return}typeof e[o]=="object"&&!("enabled"in e[o])&&(e[o].enabled=!0),e[o]||(e[o]={enabled:!1}),fn(t,i)}}const oh={eventsEmitter:KL,update:iO,translate:uO,transition:hO,slide:SO,loop:CO,grabCursor:MO,events:$O,breakpoints:GO,checkOverflow:XO,classes:KO},lh={};let Sm=class Ea{constructor(...t){let a,i;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?i=t[0]:[a,i]=t,i||(i={}),i=fn({},i),a&&!i.el&&(i.el=a);const o=Zt();if(i.el&&typeof i.el=="string"&&o.querySelectorAll(i.el).length>1){const f=[];return o.querySelectorAll(i.el).forEach(g=>{const m=fn({},i,{el:g});f.push(new Ea(m))}),f}const l=this;l.__swiper__=!0,l.support=Y3(),l.device=X3({userAgent:i.userAgent}),l.browser=W3(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],i.modules&&Array.isArray(i.modules)&&i.modules.forEach(f=>{typeof f=="function"&&l.modules.indexOf(f)<0&&l.modules.push(f)});const u={};l.modules.forEach(f=>{f({params:i,swiper:l,extendParams:WO(i,u),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})});const p=fn({},hg,u);return l.params=fn({},p,lh,i),l.originalParams=fn({},l.params),l.passedParams=fn({},i),l.params&&l.params.on&&Object.keys(l.params.on).forEach(f=>{l.on(f,l.params.on[f])}),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:a,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return l.params.direction==="horizontal"},isVertical(){return l.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:a,params:i}=this,o=za(a,`.${i.slideClass}, swiper-slide`),l=ug(o[0]);return ug(t)-l}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(a=>a.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:a,params:i}=t;t.slides=za(a,`.${i.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,a){const i=this;t=Math.min(Math.max(t,0),1);const o=i.minTranslate(),u=(i.maxTranslate()-o)*t+o;i.translateTo(u,typeof a>"u"?0:a),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const a=t.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",a.join(" "))}getSlideClasses(t){const a=this;return a.destroyed?"":t.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(a.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const a=[];t.slides.forEach(i=>{const o=t.getSlideClasses(i);a.push({slideEl:i,classNames:o}),t.emit("_slideClass",i,o)}),t.emit("_slideClasses",a)}slidesPerViewDynamic(t="current",a=!1){const i=this,{params:o,slides:l,slidesGrid:u,slidesSizesGrid:p,size:f,activeIndex:g}=i;let m=1;if(typeof o.slidesPerView=="number")return o.slidesPerView;if(o.centeredSlides){let x=l[g]?Math.ceil(l[g].swiperSlideSize):0,y;for(let v=g+1;v<l.length;v+=1)l[v]&&!y&&(x+=Math.ceil(l[v].swiperSlideSize),m+=1,x>f&&(y=!0));for(let v=g-1;v>=0;v-=1)l[v]&&!y&&(x+=l[v].swiperSlideSize,m+=1,x>f&&(y=!0))}else if(t==="current")for(let x=g+1;x<l.length;x+=1)(a?u[x]+p[x]-u[g]<f:u[x]-u[g]<f)&&(m+=1);else for(let x=g-1;x>=0;x-=1)u[g]-u[x]<f&&(m+=1);return m}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:a,params:i}=t;i.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(u=>{u.complete&&du(t,u)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function o(){const u=t.rtlTranslate?t.translate*-1:t.translate,p=Math.min(Math.max(u,t.maxTranslate()),t.minTranslate());t.setTranslate(p),t.updateActiveIndex(),t.updateSlidesClasses()}let l;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)o(),i.autoHeight&&t.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&t.isEnd&&!i.centeredSlides){const u=t.virtual&&i.virtual.enabled?t.virtual.slides:t.slides;l=t.slideTo(u.length-1,0,!1,!0)}else l=t.slideTo(t.activeIndex,0,!1,!0);l||o()}i.watchOverflow&&a!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,a=!0){const i=this,o=i.params.direction;return t||(t=o==="horizontal"?"vertical":"horizontal"),t===o||t!=="horizontal"&&t!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${o}`),i.el.classList.add(`${i.params.containerModifierClass}${t}`),i.emitContainerClasses(),i.params.direction=t,i.slides.forEach(l=>{t==="vertical"?l.style.width="":l.style.height=""}),i.emit("changeDirection"),a&&i.update()),i}changeLanguageDirection(t){const a=this;a.rtl&&t==="rtl"||!a.rtl&&t==="ltr"||(a.rtl=t==="rtl",a.rtlTranslate=a.params.direction==="horizontal"&&a.rtl,a.rtl?(a.el.classList.add(`${a.params.containerModifierClass}rtl`),a.el.dir="rtl"):(a.el.classList.remove(`${a.params.containerModifierClass}rtl`),a.el.dir="ltr"),a.update())}mount(t){const a=this;if(a.mounted)return!0;let i=t||a.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=a,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===a.params.swiperElementNodeName.toUpperCase()&&(a.isElement=!0);const o=()=>`.${(a.params.wrapperClass||"").trim().split(" ").join(".")}`;let u=i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(o()):za(i,o())[0];return!u&&a.params.createElements&&(u=Pu("div",a.params.wrapperClass),i.append(u),za(i,`.${a.params.slideClass}`).forEach(p=>{u.append(p)})),Object.assign(a,{el:i,wrapperEl:u,slidesEl:a.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:u,hostEl:a.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||ci(i,"direction")==="rtl",rtlTranslate:a.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||ci(i,"direction")==="rtl"),wrongRTL:ci(u,"display")==="-webkit-box"}),!0}init(t){const a=this;if(a.initialized||a.mount(t)===!1)return a;a.emit("beforeInit"),a.params.breakpoints&&a.setBreakpoint(),a.addClasses(),a.updateSize(),a.updateSlides(),a.params.watchOverflow&&a.checkOverflow(),a.params.grabCursor&&a.enabled&&a.setGrabCursor(),a.params.loop&&a.virtual&&a.params.virtual.enabled?a.slideTo(a.params.initialSlide+a.virtual.slidesBefore,0,a.params.runCallbacksOnInit,!1,!0):a.slideTo(a.params.initialSlide,0,a.params.runCallbacksOnInit,!1,!0),a.params.loop&&a.loopCreate(void 0,!0),a.attachEvents();const o=[...a.el.querySelectorAll('[loading="lazy"]')];return a.isElement&&o.push(...a.hostEl.querySelectorAll('[loading="lazy"]')),o.forEach(l=>{l.complete?du(a,l):l.addEventListener("load",u=>{du(a,u.target)})}),pg(a),a.initialized=!0,pg(a),a.emit("init"),a.emit("afterInit"),a}destroy(t=!0,a=!0){const i=this,{params:o,el:l,wrapperEl:u,slides:p}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),o.loop&&i.loopDestroy(),a&&(i.removeClasses(),l&&typeof l!="string"&&l.removeAttribute("style"),u&&u.removeAttribute("style"),p&&p.length&&p.forEach(f=>{f.classList.remove(o.slideVisibleClass,o.slideFullyVisibleClass,o.slideActiveClass,o.slideNextClass,o.slidePrevClass),f.removeAttribute("style"),f.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(f=>{i.off(f)}),t!==!1&&(i.el&&typeof i.el!="string"&&(i.el.swiper=null),LL(i)),i.destroyed=!0),null}static extendDefaults(t){fn(lh,t)}static get extendedDefaults(){return lh}static get defaults(){return hg}static installModule(t){Ea.prototype.__modules__||(Ea.prototype.__modules__=[]);const a=Ea.prototype.__modules__;typeof t=="function"&&a.indexOf(t)<0&&a.push(t)}static use(t){return Array.isArray(t)?(t.forEach(a=>Ea.installModule(a)),Ea):(Ea.installModule(t),Ea)}};Object.keys(oh).forEach(e=>{Object.keys(oh[e]).forEach(t=>{Sm.prototype[t]=oh[e][t]})});Sm.use([FL,qL]);const J3=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Xi(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Jr(e,t){const a=["__proto__","constructor","prototype"];Object.keys(t).filter(i=>a.indexOf(i)<0).forEach(i=>{typeof e[i]>"u"?e[i]=t[i]:Xi(t[i])&&Xi(e[i])&&Object.keys(t[i]).length>0?t[i].__swiper__?e[i]=t[i]:Jr(e[i],t[i]):e[i]=t[i]})}function ew(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function tw(e={}){return e.pagination&&typeof e.pagination.el>"u"}function nw(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function aw(e=""){const t=e.split(" ").map(i=>i.trim()).filter(i=>!!i),a=[];return t.forEach(i=>{a.indexOf(i)<0&&a.push(i)}),a.join(" ")}function QO(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function ZO({swiper:e,slides:t,passedParams:a,changedParams:i,nextEl:o,prevEl:l,scrollbarEl:u,paginationEl:p}){const f=i.filter(O=>O!=="children"&&O!=="direction"&&O!=="wrapperClass"),{params:g,pagination:m,navigation:x,scrollbar:y,virtual:v,thumbs:S}=e;let k,A,M,z,C,H,E,V;i.includes("thumbs")&&a.thumbs&&a.thumbs.swiper&&!a.thumbs.swiper.destroyed&&g.thumbs&&(!g.thumbs.swiper||g.thumbs.swiper.destroyed)&&(k=!0),i.includes("controller")&&a.controller&&a.controller.control&&g.controller&&!g.controller.control&&(A=!0),i.includes("pagination")&&a.pagination&&(a.pagination.el||p)&&(g.pagination||g.pagination===!1)&&m&&!m.el&&(M=!0),i.includes("scrollbar")&&a.scrollbar&&(a.scrollbar.el||u)&&(g.scrollbar||g.scrollbar===!1)&&y&&!y.el&&(z=!0),i.includes("navigation")&&a.navigation&&(a.navigation.prevEl||l)&&(a.navigation.nextEl||o)&&(g.navigation||g.navigation===!1)&&x&&!x.prevEl&&!x.nextEl&&(C=!0);const N=O=>{e[O]&&(e[O].destroy(),O==="navigation"?(e.isElement&&(e[O].prevEl.remove(),e[O].nextEl.remove()),g[O].prevEl=void 0,g[O].nextEl=void 0,e[O].prevEl=void 0,e[O].nextEl=void 0):(e.isElement&&e[O].el.remove(),g[O].el=void 0,e[O].el=void 0))};i.includes("loop")&&e.isElement&&(g.loop&&!a.loop?H=!0:!g.loop&&a.loop?E=!0:V=!0),f.forEach(O=>{if(Xi(g[O])&&Xi(a[O]))Object.assign(g[O],a[O]),(O==="navigation"||O==="pagination"||O==="scrollbar")&&"enabled"in a[O]&&!a[O].enabled&&N(O);else{const X=a[O];(X===!0||X===!1)&&(O==="navigation"||O==="pagination"||O==="scrollbar")?X===!1&&N(O):g[O]=a[O]}}),f.includes("controller")&&!A&&e.controller&&e.controller.control&&g.controller&&g.controller.control&&(e.controller.control=g.controller.control),i.includes("children")&&t&&v&&g.virtual.enabled?(v.slides=t,v.update(!0)):i.includes("virtual")&&v&&g.virtual.enabled&&(t&&(v.slides=t),v.update(!0)),i.includes("children")&&t&&g.loop&&(V=!0),k&&S.init()&&S.update(!0),A&&(e.controller.control=g.controller.control),M&&(e.isElement&&(!p||typeof p=="string")&&(p=document.createElement("div"),p.classList.add("swiper-pagination"),p.part.add("pagination"),e.el.appendChild(p)),p&&(g.pagination.el=p),m.init(),m.render(),m.update()),z&&(e.isElement&&(!u||typeof u=="string")&&(u=document.createElement("div"),u.classList.add("swiper-scrollbar"),u.part.add("scrollbar"),e.el.appendChild(u)),u&&(g.scrollbar.el=u),y.init(),y.updateSize(),y.setTranslate()),C&&(e.isElement&&((!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-next"),fg(o,e.navigation.arrowSvg),o.part.add("button-next"),e.el.appendChild(o)),(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-button-prev"),fg(l,e.navigation.arrowSvg),l.part.add("button-prev"),e.el.appendChild(l))),o&&(g.navigation.nextEl=o),l&&(g.navigation.prevEl=l),x.init(),x.update()),i.includes("allowSlideNext")&&(e.allowSlideNext=a.allowSlideNext),i.includes("allowSlidePrev")&&(e.allowSlidePrev=a.allowSlidePrev),i.includes("direction")&&e.changeDirection(a.direction,!1),(H||V)&&e.loopDestroy(),(E||V)&&e.loopCreate(),e.update()}function JO(e={},t=!0){const a={on:{}},i={},o={};Jr(a,hg),a._emitClasses=!0,a.init=!1;const l={},u=J3.map(f=>f.replace(/_/,"")),p=Object.assign({},e);return Object.keys(p).forEach(f=>{typeof e[f]>"u"||(u.indexOf(f)>=0?Xi(e[f])?(a[f]={},o[f]={},Jr(a[f],e[f]),Jr(o[f],e[f])):(a[f]=e[f],o[f]=e[f]):f.search(/on[A-Z]/)===0&&typeof e[f]=="function"?t?i[`${f[2].toLowerCase()}${f.substr(3)}`]=e[f]:a.on[`${f[2].toLowerCase()}${f.substr(3)}`]=e[f]:l[f]=e[f])}),["navigation","pagination","scrollbar"].forEach(f=>{a[f]===!0&&(a[f]={}),a[f]===!1&&delete a[f]}),{params:a,passedParams:o,rest:l,events:i}}function eD({el:e,nextEl:t,prevEl:a,paginationEl:i,scrollbarEl:o,swiper:l},u){ew(u)&&t&&a&&(l.params.navigation.nextEl=t,l.originalParams.navigation.nextEl=t,l.params.navigation.prevEl=a,l.originalParams.navigation.prevEl=a),tw(u)&&i&&(l.params.pagination.el=i,l.originalParams.pagination.el=i),nw(u)&&o&&(l.params.scrollbar.el=o,l.originalParams.scrollbar.el=o),l.init(e)}function tD(e,t,a,i,o){const l=[];if(!t)return l;const u=f=>{l.indexOf(f)<0&&l.push(f)};if(a&&i){const f=i.map(o),g=a.map(o);f.join("")!==g.join("")&&u("children"),i.length!==a.length&&u("children")}return J3.filter(f=>f[0]==="_").map(f=>f.replace(/_/,"")).forEach(f=>{if(f in e&&f in t)if(Xi(e[f])&&Xi(t[f])){const g=Object.keys(e[f]),m=Object.keys(t[f]);g.length!==m.length?u(f):(g.forEach(x=>{e[f][x]!==t[f][x]&&u(f)}),m.forEach(x=>{e[f][x]!==t[f][x]&&u(f)}))}else e[f]!==t[f]&&u(f)}),l}const nD=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Vu(){return Vu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},Vu.apply(this,arguments)}function iw(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function rw(e){const t=[];return Ae.Children.toArray(e).forEach(a=>{iw(a)?t.push(a):a.props&&a.props.children&&rw(a.props.children).forEach(i=>t.push(i))}),t}function aD(e){const t=[],a={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Ae.Children.toArray(e).forEach(i=>{if(iw(i))t.push(i);else if(i.props&&i.props.slot&&a[i.props.slot])a[i.props.slot].push(i);else if(i.props&&i.props.children){const o=rw(i.props.children);o.length>0?o.forEach(l=>t.push(l)):a["container-end"].push(i)}else a["container-end"].push(i)}),{slides:t,slots:a}}function iD(e,t,a){if(!a)return null;const i=m=>{let x=m;return m<0?x=t.length+m:x>=t.length&&(x=x-t.length),x},o=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${a.offset}px`}:{top:`${a.offset}px`},{from:l,to:u}=a,p=e.params.loop?-t.length:0,f=e.params.loop?t.length*2:t.length,g=[];for(let m=p;m<f;m+=1)m>=l&&m<=u&&g.push(t[i(m)]);return g.map((m,x)=>Ae.cloneElement(m,{swiper:e,style:o,key:m.props.virtualIndex||m.key||`slide-${x}`}))}function Uo(e,t){return typeof window>"u"?j.useEffect(e,t):j.useLayoutEffect(e,t)}const fv=j.createContext(null),rD=j.createContext(null),km=j.forwardRef(({className:e,tag:t="div",wrapperTag:a="div",children:i,onSwiper:o,...l}={},u)=>{let p=!1;const[f,g]=j.useState("swiper"),[m,x]=j.useState(null),[y,v]=j.useState(!1),S=j.useRef(!1),k=j.useRef(null),A=j.useRef(null),M=j.useRef(null),z=j.useRef(null),C=j.useRef(null),H=j.useRef(null),E=j.useRef(null),V=j.useRef(null),{params:N,passedParams:O,rest:X,events:J}=JO(l),{slides:$,slots:te}=aD(i),ce=()=>{v(!y)};Object.assign(N.on,{_containerClasses(G,Z){g(Z)}});const le=()=>{Object.assign(N.on,J),p=!0;const G={...N};if(delete G.wrapperClass,A.current=new Sm(G),A.current.virtual&&A.current.params.virtual.enabled){A.current.virtual.slides=$;const Z={cache:!1,slides:$,renderExternal:x,renderExternalUpdate:!1};Jr(A.current.params.virtual,Z),Jr(A.current.originalParams.virtual,Z)}};k.current||le(),A.current&&A.current.on("_beforeBreakpoint",ce);const oe=()=>{p||!J||!A.current||Object.keys(J).forEach(G=>{A.current.on(G,J[G])})},D=()=>{!J||!A.current||Object.keys(J).forEach(G=>{A.current.off(G,J[G])})};j.useEffect(()=>()=>{A.current&&A.current.off("_beforeBreakpoint",ce)}),j.useEffect(()=>{!S.current&&A.current&&(A.current.emitSlidesClasses(),S.current=!0)}),Uo(()=>{if(u&&(u.current=k.current),!!k.current)return A.current.destroyed&&le(),eD({el:k.current,nextEl:C.current,prevEl:H.current,paginationEl:E.current,scrollbarEl:V.current,swiper:A.current},N),o&&!A.current.destroyed&&o(A.current),()=>{A.current&&!A.current.destroyed&&A.current.destroy(!0,!1)}},[]),Uo(()=>{oe();const G=tD(O,M.current,$,z.current,Z=>Z.key);return M.current=O,z.current=$,G.length&&A.current&&!A.current.destroyed&&ZO({swiper:A.current,slides:$,passedParams:O,changedParams:G,nextEl:C.current,prevEl:H.current,scrollbarEl:V.current,paginationEl:E.current}),()=>{D()}}),Uo(()=>{nD(A.current)},[m]);function B(){return N.virtual?iD(A.current,$,m):$.map((G,Z)=>Ae.cloneElement(G,{swiper:A.current,swiperSlideIndex:Z}))}return Ae.createElement(t,Vu({ref:k,className:aw(`${f}${e?` ${e}`:""}`)},X),Ae.createElement(rD.Provider,{value:A.current},te["container-start"],Ae.createElement(a,{className:QO(N.wrapperClass)},te["wrapper-start"],B(),te["wrapper-end"]),ew(N)&&Ae.createElement(Ae.Fragment,null,Ae.createElement("div",{ref:H,className:"swiper-button-prev"}),Ae.createElement("div",{ref:C,className:"swiper-button-next"})),nw(N)&&Ae.createElement("div",{ref:V,className:"swiper-scrollbar"}),tw(N)&&Ae.createElement("div",{ref:E,className:"swiper-pagination"}),te["container-end"]))});km.displayName="Swiper";const Tm=j.forwardRef(({tag:e="div",children:t,className:a="",swiper:i,zoom:o,lazy:l,virtualIndex:u,swiperSlideIndex:p,...f}={},g)=>{const m=j.useRef(null),[x,y]=j.useState("swiper-slide"),[v,S]=j.useState(!1);function k(C,H,E){H===m.current&&y(E)}Uo(()=>{if(typeof p<"u"&&(m.current.swiperSlideIndex=p),g&&(g.current=m.current),!(!m.current||!i)){if(i.destroyed){x!=="swiper-slide"&&y("swiper-slide");return}return i.on("_slideClass",k),()=>{i&&i.off("_slideClass",k)}}}),Uo(()=>{i&&m.current&&!i.destroyed&&y(i.getSlideClasses(m.current))},[i]);const A={isActive:x.indexOf("swiper-slide-active")>=0,isVisible:x.indexOf("swiper-slide-visible")>=0,isPrev:x.indexOf("swiper-slide-prev")>=0,isNext:x.indexOf("swiper-slide-next")>=0},M=()=>typeof t=="function"?t(A):t,z=()=>{S(!0)};return Ae.createElement(e,Vu({ref:m,className:aw(`${x}${a?` ${a}`:""}`),"data-swiper-slide-index":u,onLoad:z},f),o&&Ae.createElement(fv.Provider,{value:A},Ae.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},M(),l&&!v&&Ae.createElement("div",{className:"swiper-lazy-preloader",ref:C=>{C&&(C.lazyPreloaderManaged=!0)}}))),!o&&Ae.createElement(fv.Provider,{value:A},M(),l&&!v&&Ae.createElement("div",{className:"swiper-lazy-preloader",ref:C=>{C&&(C.lazyPreloaderManaged=!0)}})))});Tm.displayName="SwiperSlide";function sw({swiper:e,extendParams:t,on:a,emit:i}){const o=Zt(),l=Rt();e.keyboard={enabled:!1},t({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0,speed:void 0}});function u(g){if(!e.enabled)return;const{rtlTranslate:m}=e;let x=g;x.originalEvent&&(x=x.originalEvent);const y=x.keyCode||x.charCode,v=e.params.keyboard.pageUpDown,S=v&&y===33,k=v&&y===34,A=y===37,M=y===39,z=y===38,C=y===40;if(!e.allowSlideNext&&(e.isHorizontal()&&M||e.isVertical()&&C||k)||!e.allowSlidePrev&&(e.isHorizontal()&&A||e.isVertical()&&z||S))return!1;if(x.shiftKey||x.altKey||x.ctrlKey||x.metaKey||o.activeElement&&(o.activeElement.isContentEditable||o.activeElement.nodeName&&(o.activeElement.nodeName.toLowerCase()==="input"||o.activeElement.nodeName.toLowerCase()==="textarea")))return;if(e.params.keyboard.onlyInViewport&&(S||k||A||M||z||C)){let E=!1;if(dg(e.el,`.${e.params.slideClass}, swiper-slide`).length>0&&dg(e.el,`.${e.params.slideActiveClass}`).length===0)return;const V=e.el,N=V.clientWidth,O=V.clientHeight,X=l.innerWidth,J=l.innerHeight,$=BL(V);m&&($.left-=V.scrollLeft);const te=[[$.left,$.top],[$.left+N,$.top],[$.left,$.top+O],[$.left+N,$.top+O]];for(let ce=0;ce<te.length;ce+=1){const le=te[ce];if(le[0]>=0&&le[0]<=X&&le[1]>=0&&le[1]<=J){if(le[0]===0&&le[1]===0)continue;E=!0}}if(!E)return}const H=e.params.keyboard.speed;e.isHorizontal()?((S||k||A||M)&&(x.preventDefault?x.preventDefault():x.returnValue=!1),((k||M)&&!m||(S||A)&&m)&&e.slideNext(H),((S||A)&&!m||(k||M)&&m)&&e.slidePrev(H)):((S||k||z||C)&&(x.preventDefault?x.preventDefault():x.returnValue=!1),(k||C)&&e.slideNext(H),(S||z)&&e.slidePrev(H)),i("keyPress",y)}function p(){e.keyboard.enabled||(o.addEventListener("keydown",u),e.keyboard.enabled=!0)}function f(){e.keyboard.enabled&&(o.removeEventListener("keydown",u),e.keyboard.enabled=!1)}a("init",()=>{e.params.keyboard.enabled&&p()}),a("destroy",()=>{e.keyboard.enabled&&f()}),Object.assign(e.keyboard,{enable:p,disable:f})}function ch(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function ow({swiper:e,extendParams:t,on:a}){t({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,containerRole:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null,scrollOnFocus:!0,wrapperLiveRegion:!0}}),e.a11y={clicked:!1};let i=null,o,l,u=new Date().getTime();function p(D){const B=i;B.length!==0&&fg(B,D)}function f(D=16){const B=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(D).replace(/x/g,B)}function g(D){D=St(D),D.forEach(B=>{B.setAttribute("tabIndex","0")})}function m(D){D=St(D),D.forEach(B=>{B.setAttribute("tabIndex","-1")})}function x(D,B){D=St(D),D.forEach(G=>{G.setAttribute("role",B)})}function y(D,B){D=St(D),D.forEach(G=>{G.setAttribute("aria-roledescription",B)})}function v(D,B){D=St(D),D.forEach(G=>{G.setAttribute("aria-controls",B)})}function S(D,B){D=St(D),D.forEach(G=>{G.setAttribute("aria-label",B)})}function k(D,B){D=St(D),D.forEach(G=>{G.setAttribute("id",B)})}function A(D,B){D=St(D),D.forEach(G=>{G.setAttribute("aria-live",B)})}function M(D){D=St(D),D.forEach(B=>{B.setAttribute("aria-disabled",!0)})}function z(D){D=St(D),D.forEach(B=>{B.setAttribute("aria-disabled",!1)})}function C(D){if(D.keyCode!==13&&D.keyCode!==32)return;const B=e.params.a11y,G=D.target;if(!(e.pagination&&e.pagination.el&&(G===e.pagination.el||e.pagination.el.contains(D.target))&&!D.target.matches(ch(e.params.pagination.bulletClass)))){if(e.navigation&&e.navigation.prevEl&&e.navigation.nextEl){const Z=St(e.navigation.prevEl);St(e.navigation.nextEl).includes(G)&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?p(B.lastSlideMessage):p(B.nextSlideMessage)),Z.includes(G)&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?p(B.firstSlideMessage):p(B.prevSlideMessage))}e.pagination&&G.matches(ch(e.params.pagination.bulletClass))&&G.click()}}function H(){if(e.params.loop||e.params.rewind||!e.navigation)return;const{nextEl:D,prevEl:B}=e.navigation;B&&(e.isBeginning?(M(B),m(B)):(z(B),g(B))),D&&(e.isEnd?(M(D),m(D)):(z(D),g(D)))}function E(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function V(){return E()&&e.params.pagination.clickable}function N(){const D=e.params.a11y;E()&&e.pagination.bullets.forEach(B=>{e.params.pagination.clickable&&(g(B),e.params.pagination.renderBullet||(x(B,"button"),S(B,D.paginationBulletMessage.replace(/\{\{index\}\}/,ug(B)+1)))),B.matches(ch(e.params.pagination.bulletActiveClass))?B.setAttribute("aria-current","true"):B.removeAttribute("aria-current")})}const O=(D,B,G)=>{g(D),D.tagName!=="BUTTON"&&(x(D,"button"),D.addEventListener("keydown",C)),S(D,G),v(D,B)},X=D=>{l&&l!==D.target&&!l.contains(D.target)&&(o=!0),e.a11y.clicked=!0},J=()=>{o=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.destroyed||(e.a11y.clicked=!1)})})},$=D=>{u=new Date().getTime()},te=D=>{if(e.a11y.clicked||!e.params.a11y.scrollOnFocus||new Date().getTime()-u<100)return;const B=D.target.closest(`.${e.params.slideClass}, swiper-slide`);if(!B||!e.slides.includes(B))return;l=B;const G=e.virtual&&e.params.virtual.enabled,Z=(G?parseInt(B.getAttribute("data-swiper-slide-index"),10):e.slides.indexOf(B))===e.activeIndex,L=e.params.watchSlidesProgress&&e.visibleSlides&&e.visibleSlides.includes(B);Z||L||D.sourceCapabilities&&D.sourceCapabilities.firesTouchEvents||(e.isHorizontal()?e.el.scrollLeft=0:e.el.scrollTop=0,requestAnimationFrame(()=>{o||(e.params.loop?e.slideToLoop(e.getSlideIndexWhenGrid(parseInt(B.getAttribute("data-swiper-slide-index"))),0):G?e.slideTo(e.getSlideIndexWhenGrid(parseInt(B.getAttribute("data-swiper-slide-index"),10)),0):e.slideTo(e.getSlideIndexWhenGrid(e.slides.indexOf(B)),0),o=!1)}))},ce=()=>{const D=e.params.a11y;D.itemRoleDescriptionMessage&&y(e.slides,D.itemRoleDescriptionMessage),D.slideRole&&x(e.slides,D.slideRole);const B=e.slides.length;D.slideLabelMessage&&e.slides.forEach((G,Z)=>{const L=e.params.loop?parseInt(G.getAttribute("data-swiper-slide-index"),10):Z,Y=D.slideLabelMessage.replace(/\{\{index\}\}/,L+1).replace(/\{\{slidesLength\}\}/,B);S(G,Y)})},le=()=>{const D=e.params.a11y;e.el.append(i);const B=e.el;D.containerRoleDescriptionMessage&&y(B,D.containerRoleDescriptionMessage),D.containerMessage&&S(B,D.containerMessage),D.containerRole&&x(B,D.containerRole);const G=e.wrapperEl,Z=D.id||G.getAttribute("id")||`swiper-wrapper-${f(16)}`;if(k(G,Z),D.wrapperLiveRegion){const ae=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";A(G,ae)}ce();let{nextEl:L,prevEl:Y}=e.navigation?e.navigation:{};L=St(L),Y=St(Y),L&&L.forEach(ae=>O(ae,Z,D.nextSlideMessage)),Y&&Y.forEach(ae=>O(ae,Z,D.prevSlideMessage)),V()&&St(e.pagination.el).forEach(se=>{se.addEventListener("keydown",C)}),Zt().addEventListener("visibilitychange",$),e.el.addEventListener("focus",te,!0),e.el.addEventListener("pointerdown",X,!0),e.el.addEventListener("pointerup",J,!0)};function oe(){i&&i.remove();let{nextEl:D,prevEl:B}=e.navigation?e.navigation:{};D=St(D),B=St(B),D&&D.forEach(Z=>Z.removeEventListener("keydown",C)),B&&B.forEach(Z=>Z.removeEventListener("keydown",C)),V()&&St(e.pagination.el).forEach(L=>{L.removeEventListener("keydown",C)}),Zt().removeEventListener("visibilitychange",$),e.el&&typeof e.el!="string"&&(e.el.removeEventListener("focus",te,!0),e.el.removeEventListener("pointerdown",X,!0),e.el.removeEventListener("pointerup",J,!0))}a("beforeInit",()=>{i=Pu("span",e.params.a11y.notificationClass),i.setAttribute("aria-live","assertive"),i.setAttribute("aria-atomic","true")}),a("afterInit",()=>{e.params.a11y.enabled&&le()}),a("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{e.params.a11y.enabled&&ce()}),a("fromEdge toEdge afterInit lock unlock",()=>{e.params.a11y.enabled&&H()}),a("paginationUpdate",()=>{e.params.a11y.enabled&&N()}),a("destroy",()=>{e.params.a11y.enabled&&oe()})}function lw({swiper:e,extendParams:t,on:a,emit:i,params:o}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let l,u,p=o&&o.autoplay?o.autoplay.delay:3e3,f=o&&o.autoplay?o.autoplay.delay:3e3,g,m=new Date().getTime(),x,y,v,S,k,A;function M(B){!e||e.destroyed||!e.wrapperEl||B.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",M),!(A||B.detail&&B.detail.bySwiperTouchMove)&&X())}const z=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?x=!0:x&&(f=g,x=!1);const B=e.autoplay.paused?g:m+f-new Date().getTime();e.autoplay.timeLeft=B,i("autoplayTimeLeft",B,B/p),u=requestAnimationFrame(()=>{z()})},C=()=>{let B;return e.virtual&&e.params.virtual.enabled?B=e.slides.find(Z=>Z.classList.contains("swiper-slide-active")):B=e.slides[e.activeIndex],B?parseInt(B.getAttribute("data-swiper-autoplay"),10):void 0},H=()=>{let B=e.params.autoplay.delay;const G=C();return!Number.isNaN(G)&&G>0&&(B=G),B},E=B=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(u),z();let G=B;typeof G>"u"&&(G=H(),p=G,f=G),g=G;const Z=e.params.speed,L=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(Z,!0,!0),i("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,Z,!0,!0),i("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(Z,!0,!0),i("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,Z,!0,!0),i("autoplay")),e.params.cssMode&&(m=new Date().getTime(),requestAnimationFrame(()=>{E()})))};return G>0?(clearTimeout(l),l=setTimeout(()=>{L()},G)):requestAnimationFrame(()=>{L()}),G},V=()=>{m=new Date().getTime(),e.autoplay.running=!0,E(),i("autoplayStart")},N=()=>{e.autoplay.running=!1,clearTimeout(l),cancelAnimationFrame(u),i("autoplayStop")},O=(B,G)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(l),B||(k=!0);const Z=()=>{i("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",M):X()};if(e.autoplay.paused=!0,G){Z();return}g=(g||e.params.autoplay.delay)-(new Date().getTime()-m),!(e.isEnd&&g<0&&!e.params.loop)&&(g<0&&(g=0),Z())},X=()=>{e.isEnd&&g<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(m=new Date().getTime(),k?(k=!1,E(g)):E(),e.autoplay.paused=!1,i("autoplayResume"))},J=()=>{if(e.destroyed||!e.autoplay.running)return;const B=Zt();B.visibilityState==="hidden"&&(k=!0,O(!0)),B.visibilityState==="visible"&&X()},$=B=>{B.pointerType==="mouse"&&(k=!0,A=!0,!(e.animating||e.autoplay.paused)&&O(!0))},te=B=>{B.pointerType==="mouse"&&(A=!1,e.autoplay.paused&&X())},ce=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",$),e.el.addEventListener("pointerleave",te))},le=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",$),e.el.removeEventListener("pointerleave",te))},oe=()=>{Zt().addEventListener("visibilitychange",J)},D=()=>{Zt().removeEventListener("visibilitychange",J)};a("init",()=>{e.params.autoplay.enabled&&(ce(),oe(),V())}),a("destroy",()=>{le(),D(),e.autoplay.running&&N()}),a("_freeModeStaticRelease",()=>{(v||k)&&X()}),a("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?N():O(!0,!0)}),a("beforeTransitionStart",(B,G,Z)=>{e.destroyed||!e.autoplay.running||(Z||!e.params.autoplay.disableOnInteraction?O(!0,!0):N())}),a("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){N();return}y=!0,v=!1,k=!1,S=setTimeout(()=>{k=!0,v=!0,O(!0)},200)}}),a("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!y)){if(clearTimeout(S),clearTimeout(l),e.params.autoplay.disableOnInteraction){v=!1,y=!1;return}v&&e.params.cssMode&&X(),v=!1,y=!1}}),a("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(g=H(),p=H())}),Object.assign(e.autoplay,{start:V,stop:N,pause:O,resume:X})}function sD(e){const{effect:t,swiper:a,on:i,setTranslate:o,setTransition:l,overwriteParams:u,perspective:p,recreateShadows:f,getEffectParams:g}=e;i("beforeInit",()=>{if(a.params.effect!==t)return;a.classNames.push(`${a.params.containerModifierClass}${t}`),p&&p()&&a.classNames.push(`${a.params.containerModifierClass}3d`);const x=u?u():{};Object.assign(a.params,x),Object.assign(a.originalParams,x)}),i("setTranslate _virtualUpdated",()=>{a.params.effect===t&&o()}),i("setTransition",(x,y)=>{a.params.effect===t&&l(y)}),i("transitionEnd",()=>{if(a.params.effect===t&&f){if(!g||!g().slideShadows)return;a.slides.forEach(x=>{x.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(y=>y.remove())}),f()}});let m;i("virtualUpdate",()=>{a.params.effect===t&&(a.slides.length||(m=!0),requestAnimationFrame(()=>{m&&a.slides&&a.slides.length&&(o(),m=!1)}))})}function oD(e,t){const a=K3(t);return a!==t&&(a.style.backfaceVisibility="hidden",a.style["-webkit-backface-visibility"]="hidden"),a}function lD({swiper:e,duration:t,transformElements:a,allSlides:i}){const{activeIndex:o}=e;if(e.params.virtualTranslate&&t!==0){let l=!1,u;u=a,u.forEach(p=>{HL(p,()=>{if(l||!e||e.destroyed)return;l=!0,e.animating=!1;const f=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(f)})})}}function cD({swiper:e,extendParams:t,on:a}){t({fadeEffect:{crossFade:!1}}),sD({effect:"fade",swiper:e,on:a,setTranslate:()=>{const{slides:l}=e,u=e.params.fadeEffect;for(let p=0;p<l.length;p+=1){const f=e.slides[p];let m=-f.swiperSlideOffset;e.params.virtualTranslate||(m-=e.translate);let x=0;e.isHorizontal()||(x=m,m=0);const y=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(f.progress),0):1+Math.min(Math.max(f.progress,-1),0),v=oD(u,f);v.style.opacity=y,v.style.transform=`translate3d(${m}px, ${x}px, 0px)`}},setTransition:l=>{const u=e.slides.map(p=>K3(p));u.forEach(p=>{p.style.transitionDuration=`${l}ms`}),lD({swiper:e,duration:l,transformElements:u,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}const uD=R.div`
  display: grid;
  gap: 20px;
`,dD=R.div`
  display: grid;
  gap: 10px;
`,fD=R.h3`
  font-size: 18px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.88);
`,pD=R.div`
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(10, 14, 26, 0.86);
  padding: 14px;

  .partners-swiper {
    overflow: visible;
  }

  .partners-swiper .swiper-wrapper {
    align-items: stretch;
    transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  }

  .partners-swiper .swiper-slide {
    height: auto;
    display: flex;
    transition: transform 480ms ease, opacity 480ms ease;
  }

  .partners-swiper .swiper-slide:not(.swiper-slide-active) {
    opacity: 0.92;
  }

  .partners-swiper .swiper-slide-active {
    opacity: 1;
  }
`,hD=R.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  align-items: stretch;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 639px) {
    grid-template-columns: 1fr;
  }
`,gD=R.article`
  position: relative;
  width: 100%;
  min-height: 300px;
  border-radius: 22px;
  border: 1px solid rgba(255, 207, 130, 0.32);
  color: #fef6df;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  isolation: isolate;
  background:
    linear-gradient(180deg, rgba(19, 24, 38, 0.86), rgba(10, 13, 23, 0.96)),
    rgba(10, 14, 26, 0.92);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.06),
    0 16px 40px rgba(0, 0, 0, 0.28);
  transition:
    transform 240ms ease,
    border-color 240ms ease,
    box-shadow 240ms ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 22%);
    opacity: 0.55;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 219, 162, 0.48);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.08),
      0 24px 54px rgba(0, 0, 0, 0.38);
  }

  &:hover .card-bg {
    transform: scale(1.08);
    filter: saturate(1.06) brightness(1.04);
  }

  &:hover .card-overlay {
    opacity: 0.88;
  }

  &:hover .card-content {
    transform: translateY(-4px);
  }

  &:hover .badge-icon {
    transform: translateY(-2px) scale(1.04);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.12),
      0 12px 24px rgba(0, 0, 0, 0.22);
  }
`,mD=R.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image: ${({$backgroundImage:e})=>e?`url(${e})`:"linear-gradient(130deg, rgba(255, 180, 90, 0.22), rgba(79, 141, 255, 0.18))"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: scale(1);
  transition: transform 520ms ease, filter 520ms ease;
  filter: saturate(0.96) brightness(0.94);
`,bD=R.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(
      180deg,
      rgba(8, 12, 22, 0.36) 0%,
      rgba(8, 12, 22, 0.52) 34%,
      rgba(8, 12, 22, 0.82) 72%,
      rgba(8, 12, 22, 0.95) 100%
    ),
    linear-gradient(180deg, rgba(255, 214, 148, 0.05), transparent 24%);
  opacity: 1;
  transition: opacity 320ms ease;
  pointer-events: none;
`,xD=R.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  min-height: 100%;
  padding: 18px;
  transition: transform 320ms ease;

  @media (max-width: 767px) {
    padding: 16px;
  }
`,yD=R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`,vD=R.div`
  margin-top: auto;
  display: grid;
  gap: 10px;
  max-width: 20ch;
  width: 100%;
`,wD=R.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.18);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
  transition: transform 240ms ease, box-shadow 240ms ease;
`,SD=R.span`
  color: #ffdba2;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,kD=R.span`
  color: #fff4dc;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.01em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  backface-visibility: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,TD=R.span`
  color: rgba(255, 255, 255, 0.86);
  font-size: 14px;
  line-height: 1.5;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
  backface-visibility: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,jD=[{title:"Trusted Technologies",direction:"left",speed:68,autoplay:!0,items:[{label:"React",description:"UI",group:"Tech"},{label:"TypeScript",description:"Typing",group:"Tech"},{label:"SEO",description:"Visibility",group:"Growth"},{label:"Analytics",description:"Data",group:"Growth"},{label:"Automation",description:"Ops",group:"AI"}]}],cw=({rows:e=jD,variant:t="carousel"})=>{const a={0:{slidesPerView:1.08},560:{slidesPerView:1.35},768:{slidesPerView:2},1024:{slidesPerView:3},1440:{slidesPerView:3.45}},i=(o,l)=>d.jsxs(gD,{children:[d.jsx(mD,{className:"card-bg",$backgroundImage:o.backgroundImage}),d.jsx(bD,{className:"card-overlay"}),d.jsxs(xD,{className:"card-content",children:[d.jsxs(yD,{children:[o.icon?d.jsx(wD,{className:"badge-icon",style:{color:o.iconColor??"#fff",background:o.iconBg??"rgba(255,255,255,.18)"},children:o.icon}):null,o.group?d.jsx(SD,{children:o.group}):null]}),d.jsxs(vD,{children:[d.jsx(kD,{className:"badge-title",children:o.label}),o.description?d.jsx(TD,{className:"badge-desc",children:o.description}):null]})]})]},l);return d.jsx(uD,{children:e.map((o,l)=>{const u=Math.max((o.speed??60)*54,3200),p=o.autoplay??!0,f=o.transitionSpeed??1400;return d.jsxs(dD,{children:[o.title?d.jsx(ie.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.5},transition:{duration:.6,ease:hn},children:d.jsx(fD,{children:o.title})}):null,t==="grid"?d.jsx(hD,{children:o.items.map((g,m)=>i(g,`${g.group??"group"}-${g.label}-${m}`))}):d.jsx(pD,{children:d.jsx(km,{modules:[ow,lw,sw],className:"partners-swiper",spaceBetween:o.spaceBetween??16,speed:f,loop:o.items.length>3,loopAdditionalSlides:o.items.length,watchSlidesProgress:!0,allowTouchMove:!0,grabCursor:!0,keyboard:{enabled:!0},autoplay:p?{delay:o.autoplayDelay??u,disableOnInteraction:!1,pauseOnMouseEnter:!0,reverseDirection:o.direction==="right"}:!1,breakpoints:o.breakpoints??a,children:o.items.map((g,m)=>d.jsx(Tm,{children:i(g,`${g.group??"group"}-${g.label}-${m}-card`)},`${g.group??"group"}-${g.label}-${m}`))})})]},`${o.title??"row"}-${l}`)})})},CD="/assets/Beauty-B5nCKot8.png",AD="/assets/Bildung-DUb95Jd7.png",ED="/assets/Coaching-Jbjo8OUB.png",MD="/assets/Fitness-CUZr8LbH.png",zD="/assets/Gastronomie-9VWW2aHc.png",RD="/assets/Handwerk-BNTwGaMa.png",LD="/assets/Immobilien-COg-qJ-F.png",OD="/assets/Kanzlei-BRg3E-LB.png",DD="/assets/Praxen-yTv6AWqn.png",PD="/assets/Reinigung-BnCbAVwW.png",VD="/assets/Transport-CSnl9Wxm.png",ND="/assets/Werkst%C3%A4tten-CrYP5CWR.png",BD=R.div`
  .marquee-wrap {
    margin-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
    background: rgba(255, 255, 255, 0.02);
  }
`,_D=()=>{const{t:e}=Ie(),t=j.useMemo(()=>[{label:e("home.marquee.items.handwerk",{defaultValue:"Handwerk"}),icon:d.jsx(e3,{}),backgroundImage:RD},{label:e("home.marquee.items.praxen",{defaultValue:"Praxen"}),icon:d.jsx(t3,{}),backgroundImage:DD},{label:e("home.marquee.items.werkstaetten",{defaultValue:"Werkstätten"}),icon:d.jsx(n3,{}),backgroundImage:ND},{label:e("home.marquee.items.gastronomie",{defaultValue:"Gastronomie"}),icon:d.jsx(mE,{}),backgroundImage:zD},{label:e("home.marquee.items.beauty",{defaultValue:"Beauty"}),icon:d.jsx(dE,{}),backgroundImage:CD},{label:e("home.marquee.items.immobilien",{defaultValue:"Immobilien"}),icon:d.jsx(Z4,{}),backgroundImage:LD},{label:e("home.marquee.items.kanzlei",{defaultValue:"Kanzlei"}),icon:d.jsx(ZA,{}),backgroundImage:OD},{label:e("home.marquee.items.fitness",{defaultValue:"Fitness"}),icon:d.jsx(aE,{}),backgroundImage:MD},{label:e("home.marquee.items.reinigung",{defaultValue:"Reinigung"}),icon:d.jsx(JA,{}),backgroundImage:PD},{label:e("home.marquee.items.transport",{defaultValue:"Transport"}),icon:d.jsx(hE,{}),backgroundImage:VD},{label:e("home.marquee.items.coaching",{defaultValue:"Coaching"}),icon:d.jsx(tE,{}),backgroundImage:ED},{label:e("home.marquee.items.bildung",{defaultValue:"Bildung"}),icon:d.jsx(rE,{}),backgroundImage:AD}],[e]),a=j.useMemo(()=>[{direction:"left",speed:52,items:t}],[t]);return d.jsx(BD,{children:d.jsxs(ie.section,{className:"section marquee-wrap","aria-label":e("home.marquee.aria",{defaultValue:"Branchen"}),initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:dt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.marquee.title",{defaultValue:"Branchen, mit denen wir arbeiten"})}),d.jsx("p",{className:"section-description",children:e("home.marquee.desc",{defaultValue:"Wählen Sie eine Richtung und sehen Sie passende Stilbeispiele. So bauen wir schneller ein präzises Angebot für Ihr Unternehmen."})})]}),d.jsx(cw,{rows:a})]})})},$D="/assets/AI%20Integration-2xPjdKos.png",HD="/assets/Arztpraxis-B2y5MtAr.png",UD="/assets/Handwerker-CX7-sQCQ.png",GD="/assets/Klare%20Preise-DuIvmLZR.png",ID="/assets/Lokale%20Services-B9STH5q9.png",FD="/assets/Mehr%20Anfragen-BNCLi8Tp.png",qD="/assets/Pers%C3%B6nliche%20Hilfe-BYEOf15s.png",KD="/assets/Schnell%20geladen-B6Ts_DYP.png",YD="/assets/Social%20Ads--h3S0x8p.png",XD="/assets/Social%20Media-CCIphMSS.png",WD="/assets/Web-Apps-njCOxcl3.png",QD="/assets/Websites-BDd0v9YM.png",ZD="/assets/Werkst%C3%A4tten-CT_z_pee.png",JD=()=>{const{t:e}=Ie(),t=j.useMemo(()=>[{title:e("home.partnersTitle",{defaultValue:"Highlights, Zielgruppen und Leistungen"}),direction:"right",speed:68,autoplay:!0,autoplayDelay:2600,transitionSpeed:2400,spaceBetween:20,breakpoints:{0:{slidesPerView:1.05},768:{slidesPerView:2},1200:{slidesPerView:3},1536:{slidesPerView:4}},items:[{group:e("home.groups.highlights",{defaultValue:"Highlights"}),label:e("home.partners.fastLoad.title",{defaultValue:"Schnell geladen"}),description:e("home.partners.fastLoad.desc",{defaultValue:"Seite lädt in Sekunden"}),icon:d.jsx(Wu,{}),iconColor:"#FFD25F",iconBg:"rgba(255,210,95,.2)",backgroundImage:KD},{group:e("home.groups.highlights",{defaultValue:"Highlights"}),label:e("home.partners.moreLeads.title",{defaultValue:"Mehr Anfragen"}),description:e("home.partners.moreLeads.desc",{defaultValue:"Mehr Kontakte über Formulare"}),icon:d.jsx(qi,{}),iconColor:"#58D68D",iconBg:"rgba(88,214,141,.2)",backgroundImage:FD},{group:e("home.groups.highlights",{defaultValue:"Highlights"}),label:e("home.partners.clearPrices.title",{defaultValue:"Klare Preise"}),description:e("home.partners.clearPrices.desc",{defaultValue:"Du kennst Kosten im Voraus"}),icon:d.jsx(Su,{}),iconColor:"#5DADE2",iconBg:"rgba(93,173,226,.2)",backgroundImage:GD},{group:e("home.groups.highlights",{defaultValue:"Highlights"}),label:e("home.partners.personalHelp.title",{defaultValue:"Persönliche Hilfe"}),description:e("home.partners.personalHelp.desc",{defaultValue:"Direkter Support ohne Warteschlange"}),icon:d.jsx(sE,{}),iconColor:"#F5B7B1",iconBg:"rgba(245,183,177,.2)",backgroundImage:qD},{group:e("home.groups.forWhom",{defaultValue:"Für wen"}),label:e("home.partners.handwerker.title",{defaultValue:"Handwerker"}),description:e("home.partners.handwerker.desc",{defaultValue:"Anfragen pro Stadt und Leistung"}),icon:d.jsx(e3,{}),iconColor:"#F8C471",iconBg:"rgba(248,196,113,.2)",backgroundImage:UD},{group:e("home.groups.forWhom",{defaultValue:"Für wen"}),label:e("home.partners.praxen.title",{defaultValue:"Praxen"}),description:e("home.partners.praxen.desc",{defaultValue:"Patienten finden schneller Termine"}),icon:d.jsx(t3,{}),iconColor:"#EC7063",iconBg:"rgba(236,112,99,.2)",backgroundImage:HD},{group:e("home.groups.forWhom",{defaultValue:"Für wen"}),label:e("home.partners.werkstaetten.title",{defaultValue:"Werkstätten"}),description:e("home.partners.werkstaetten.desc",{defaultValue:"Klare Service-Seiten mit Tracking"}),icon:d.jsx(n3,{}),iconColor:"#AF7AC5",iconBg:"rgba(175,122,197,.2)",backgroundImage:ZD},{group:e("home.groups.forWhom",{defaultValue:"Für wen"}),label:e("home.partners.localServices.title",{defaultValue:"Lokale Services"}),description:e("home.partners.localServices.desc",{defaultValue:"Mehr Sichtbarkeit vor Ort"}),icon:d.jsx(_o,{}),iconColor:"#E74C3C",iconBg:"rgba(231,76,60,.2)",backgroundImage:ID},{group:e("home.groups.services",{defaultValue:"Leistungen"}),label:e("home.partners.websites.title",{defaultValue:"Websites"}),description:e("home.partners.websites.desc",{defaultValue:"Modern, schnell, mobil optimiert"}),icon:d.jsx(Xh,{}),iconColor:"#48C9B0",iconBg:"rgba(72,201,176,.2)",backgroundImage:QD},{group:e("home.groups.services",{defaultValue:"Leistungen"}),label:e("home.partners.webApps.title",{defaultValue:"Web-Apps"}),description:e("home.partners.webApps.desc",{defaultValue:"Tools für Team und Kunden"}),icon:d.jsx(fm,{}),iconColor:"#85C1E9",iconBg:"rgba(133,193,233,.2)",backgroundImage:WD},{group:e("home.groups.services",{defaultValue:"Leistungen"}),label:e("home.partners.aiIntegration.title",{defaultValue:"AI Integration"}),description:e("home.partners.aiIntegration.desc",{defaultValue:"Chatbot für Fragen und Leads"}),icon:d.jsx(as,{}),iconColor:"#F7DC6F",iconBg:"rgba(247,220,111,.2)",backgroundImage:$D},{group:e("home.groups.services",{defaultValue:"Leistungen"}),label:e("home.partners.socialMedia.title",{defaultValue:"Social Media"}),description:e("home.partners.socialMedia.desc",{defaultValue:"Website + Instagram/Meta verbunden"}),icon:d.jsx(a3,{}),iconColor:"#5DADE2",iconBg:"rgba(93,173,226,.2)",backgroundImage:XD},{group:e("home.groups.services",{defaultValue:"Leistungen"}),label:e("home.partners.socialAds.title",{defaultValue:"Social Ads"}),description:e("home.partners.socialAds.desc",{defaultValue:"Gezielte Werbung mit messbaren Ergebnissen"}),icon:d.jsx(pl,{}),iconColor:"#F1948A",iconBg:"rgba(241,148,138,.2)",backgroundImage:YD}]}],[e]);return d.jsxs(ie.section,{className:"section",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:dt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.partnersSection.title",{defaultValue:"Vorteile und Einsatzbereiche"})}),d.jsx("p",{className:"section-description",children:e("home.partnersSection.desc",{defaultValue:"Welche Aufgaben wir abdecken und für welche lokalen Unternehmen wir am häufigsten Websites und Lead-Funnels umsetzen."})})]}),d.jsx(cw,{rows:t,variant:"carousel"})]})},eP=R.div`
  .sticky-process-grid {
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: 22px;
    align-items: start;
  }

  .sticky-steps {
    position: relative;
    padding: 10px 0;
    display: grid;
    gap: 10px;
  }

  .sticky-steps::before {
    content: '';
    position: absolute;
    left: 22px;
    top: 12px;
    bottom: 12px;
    width: 1px;
    background: linear-gradient(
      180deg,
      rgba(246, 211, 101, 0),
      rgba(246, 211, 101, 0.25),
      rgba(37, 99, 235, 0.18),
      rgba(246, 211, 101, 0)
    );
  }

  .sticky-step {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 14px 14px 52px;
    border-radius: 16px;
    background: rgba(17, 18, 24, 0.58);
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition:
      transform 220ms ease,
      border-color 220ms ease,
      box-shadow 220ms ease;
    margin: 12px 0;
    cursor: pointer;
    overflow: hidden;
    width: 100%;
    text-align: left;
    appearance: none;
    outline: none;
  }

  .sticky-step span {
    position: absolute;
    left: 12px;
    width: 28px;
    height: 28px;
    display: grid;
    place-items: center;
    border-radius: 999px;
    font-weight: 800;
    font-size: 12px;
    color: rgba(11, 11, 15, 0.95);
    background: linear-gradient(90deg, #b8860b, #f6d365, #d4af37);
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.35);
  }

  .sticky-step p {
    margin: 0;
    color: rgba(255, 255, 255, 0.92);
    font-weight: 600;
  }

  .sticky-step::after {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    background: linear-gradient(
      90deg,
      rgba(184, 134, 11, 0.85),
      rgba(246, 211, 101, 0.85),
      rgba(212, 175, 55, 0.85),
      rgba(37, 99, 235, 0.65)
    );
    background-size: 220% 220%;
    opacity: 0;
    transition: opacity 220ms ease;
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    mask-composite: exclude;
    padding: 1px;
    pointer-events: none;
  }

  .sticky-step:hover {
    transform: translateY(-2px);
    border-color: rgba(246, 211, 101, 0.18);
    box-shadow: 0 16px 34px rgba(0, 0, 0, 0.45);
  }

  .sticky-step:hover::after {
    opacity: 0.55;
  }

  .sticky-step:focus-visible {
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.35), 0 18px 42px rgba(0, 0, 0, 0.55);
  }

  .sticky-step.active {
    transform: translateY(-3px);
    border-color: rgba(246, 211, 101, 0.28);
    box-shadow: 0 18px 42px rgba(0, 0, 0, 0.55);
  }

  .sticky-step.active::after {
    opacity: 0.95;
  }

  .sticky-process-card {
    position: sticky;
    top: 0px;
    border-radius: 20px;
    background: rgba(17, 18, 24, 0.62);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.55);
    overflow: hidden;
  }

  .sticky-process-card::before {
    content: '';
    position: absolute;
    inset: -40%;
    background:
      radial-gradient(circle at 30% 20%, rgba(246, 211, 101, 0.22), transparent 55%),
      radial-gradient(circle at 70% 30%, rgba(37, 99, 235, 0.18), transparent 58%);
    filter: blur(26px);
    opacity: 0.9;
    pointer-events: none;
  }

  .sticky-process-card h3 {
    position: relative;
    color: rgba(255, 255, 255, 0.98);
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
  }

  .sticky-process-card p {
    position: relative;
    color: rgba(255, 255, 255, 0.93);
    opacity: 1;
    line-height: 1.6;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
  }

  .process-swiper {
    position: relative;
    z-index: 1;
  }

  .process-slide {
    position: relative;
    min-height: 320px;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 18px;
  }

  .process-slide::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: var(--process-bg);
    background-size: cover;
    background-position: center;
    transform: scale(1.03);
  }

  .process-slide::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(160deg, rgba(6, 10, 18, 0.72), rgba(6, 10, 18, 0.92)),
      radial-gradient(480px 240px at 80% 20%, rgba(246, 211, 101, 0.14), transparent 72%);
  }

  .process-content {
    position: relative;
    z-index: 2;
    display: grid;
    align-content: start;
    gap: 10px;
    padding: 6px;
    max-width: 560px;
  }

  .process-kicker {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .process-chip {
    font-size: 12px;
    font-weight: 800;
    padding: 6px 10px;
    border-radius: 999px;
    background: rgba(8, 12, 22, 0.62);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.96);
  }

  .process-chip.subtle {
    opacity: 0.75;
    font-weight: 700;
  }

  .process-nav {
    margin-top: 10px;
    display: flex;
    gap: 10px;
  }

  .nav-btn {
    padding: 10px 12px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.92);
    cursor: pointer;
    transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
  }

  .nav-btn:hover {
    transform: translateY(-1px);
    border-color: rgba(246, 211, 101, 0.18);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.35);
  }

  .nav-btn:disabled {
    opacity: 0.4;
    cursor: default;
    transform: none;
    box-shadow: none;
  }

  .nav-btn.primary {
    border-color: rgba(246, 211, 101, 0.22);
  }

  @media (max-width: 1023px) {
    .sticky-process-grid {
      grid-template-columns: 1fr;
    }

    .sticky-steps {
      position: static;
    }

    .sticky-process-card {
      position: static;
    }

    .process-slide {
      min-height: 280px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    .sticky-process-grid {
      grid-template-columns: 0.86fr 1.14fr;
    }

    .sticky-steps {
      position: sticky;
      top: 96px;
    }
  }

  @media (min-width: 1280px) and (max-width: 1439px) {
    .sticky-process-grid {
      grid-template-columns: 0.86fr 1.14fr;
    }

    .sticky-steps {
      position: sticky;
      top: 98px;
    }
  }

  @media (min-width: 1440px) {
    .sticky-process-grid {
      grid-template-columns: 0.86fr 1.14fr;
    }

    .sticky-steps {
      position: sticky;
      top: 102px;
    }
  }
`,tP=()=>{const{t:e}=Ie(),[t,a]=j.useState(0),i=j.useRef(null),o=l=>{var u;(u=i.current)==null||u.slideTo(l)};return d.jsx(eP,{children:d.jsxs(ie.section,{className:"section sticky-process",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.18},variants:dt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.process.title",{defaultValue:"Wie wir arbeiten"})}),d.jsx("p",{className:"section-description",children:e("home.process.desc",{defaultValue:"Ein transparenter Prozess ohne unnötige Schritte: vom kurzen Briefing bis zu Launch und Optimierung mit klaren Deadlines."})})]}),d.jsxs("div",{className:"sticky-process-grid",children:[d.jsx(ie.div,{className:"sticky-steps",role:"tablist","aria-label":e("home.process.aria",{defaultValue:"Projektphasen"}),variants:Nt,children:th.map((l,u)=>d.jsxs(ie.button,{className:`sticky-step ${t===u?"active":""}`,onClick:()=>o(u),type:"button",role:"tab","aria-selected":t===u,variants:at,children:[d.jsx("span",{children:l.step}),d.jsx("p",{children:e(`home.process.steps.s${u+1}.title`,{defaultValue:["15-Minuten-Call","Prototyp in 48h","Entwicklung in 7-14 Tagen","Launch und Optimierung"][u]})})]},l.step))}),d.jsx(ie.article,{className:"sticky-process-card card",initial:{opacity:0,y:10,scale:.99},animate:{opacity:1,y:0,scale:1},transition:{duration:.32,ease:hn},children:d.jsx(km,{modules:[sw,ow,cD,lw],effect:"fade",fadeEffect:{crossFade:!0},slidesPerView:1,speed:420,keyboard:{enabled:!0},autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},onSwiper:l=>{i.current=l,a(l.activeIndex)},onSlideChange:l=>a(l.activeIndex),className:"process-swiper",children:th.map((l,u)=>d.jsx(Tm,{children:d.jsx("div",{className:"process-slide",style:{"--process-bg":`url(${l.image})`},children:d.jsxs("div",{className:"process-content",children:[d.jsxs("div",{className:"process-kicker",children:[d.jsx("span",{className:"process-chip",children:l.step}),d.jsx("span",{className:"process-chip subtle",children:e("home.process.stage",{defaultValue:"Phase"})})]}),d.jsx("h3",{children:e(`home.process.steps.s${u+1}.title`,{defaultValue:["15-Minuten-Call","Prototyp in 48h","Entwicklung in 7-14 Tagen","Launch und Optimierung"][u]})}),d.jsx("p",{children:e(`home.process.steps.s${u+1}.text`,{defaultValue:["Wir klären Aufgabe, KPI und Deadline und stimmen sofort das Launch-Format ab.","Wir zeigen Seitenstruktur, CTA und Lead-Flow vor der Entwicklung.","Umsetzung, SEO-Basis, Integrationen und Analytics ohne unnötigen Overhead.","Wir gehen live, prüfen Conversion und liefern einen 30-Tage-Verbesserungsplan."][u]})}),d.jsxs("div",{className:"process-nav",children:[d.jsx("button",{type:"button",className:"nav-btn",onClick:()=>{var p;return(p=i.current)==null?void 0:p.slidePrev()},disabled:t===0,children:e("home.process.nav.prev",{defaultValue:"Zurück"})}),d.jsx("button",{type:"button",className:"nav-btn primary",onClick:()=>{var p;return(p=i.current)==null?void 0:p.slideNext()},disabled:t===th.length-1,children:e("home.process.nav.next",{defaultValue:"Weiter"})})]})]})})},`${l.step}-${u}`))})})]})]})})},nP="/assets/Auto-Werkstatt-D_Wis0Gy.png",aP="/assets/handwerk-wv6_fUM_.png",iP="/assets/single-page_beauty_salon-C_s2CN7r.png",rP="https://github.com/Svitly4nyi-Vla2yslav",sP=[{id:"handwerk",image:aP,repoUrl:"https://github.com/Svitly4nyi-Vla2yslav/handwerk",liveUrl:"https://handwerken.netlify.app/",tags:["localLeads","services","fastContact"],translationKey:"home.projects.items.handwerk"},{id:"auto-werkstatt",image:nP,repoUrl:"https://github.com/Svitly4nyi-Vla2yslav/Auto-Werkstatt",liveUrl:"https://auto-werkstatt.netlify.app/",tags:["booking","faq","fastContact"],translationKey:"home.projects.items.autoWorkshop"},{id:"single-page_beauty_salon",image:iP,repoUrl:"https://github.com/Svitly4nyi-Vla2yslav/single-page_beauty_salon",liveUrl:"https://lumina-atelier-salon.netlify.app/",tags:["onePageWebsite","trust","booking"],translationKey:"home.projects.items.singlePageBeautySalon"}],oP=({image:e,title:t})=>d.jsxs("div",{className:"project-preview","aria-label":t,children:[d.jsx("img",{src:e,alt:t,loading:"lazy"}),d.jsx("div",{className:"preview-overlay"})]}),lP=R.div`
  .projects-section {
    width: 100%;
  }

  .projects-shell {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 104px 24px 96px;
  }

  .projects-header {
    width: 100%;
    margin: 0 auto 52px;
    padding: 0;
  }

  .section-kicker {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 18px;
    border: 1px solid rgba(246, 211, 101, 0.28);
    border-radius: 999px;
    padding: 7px 14px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 236, 196, 0.88);
    background: rgba(246, 211, 101, 0.08);
    box-shadow: 0 0 24px rgba(246, 211, 101, 0.08);
  }

  .projects-header h2 {
    max-width: 820px;
    margin: 0 auto 18px;
    font-size: clamp(36px, 5vw, 56px);
    line-height: 1.08;
    text-wrap: balance;
  }

  .projects-header .section-description {
    max-width: 760px;
    margin: 0 auto;
    font-size: 18px;
    line-height: 1.65;
    color: rgba(255, 255, 255, 0.82);
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
    align-items: stretch;
  }

  .projects-grid .project-card {
    display: flex;
    flex-direction: column;
    gap: 0;
    height: 100%;
    padding: 16px;
    border-radius: 22px;
    text-align: center;
    transition:
      transform 340ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 340ms cubic-bezier(0.22, 1, 0.36, 1),
      border-color 340ms cubic-bezier(0.22, 1, 0.36, 1),
      background 340ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .project-preview {
    position: relative;
    overflow: hidden;
    border-radius: 18px;
    aspect-ratio: 16 / 10;
    min-height: 220px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background:
      radial-gradient(circle at top left, rgba(246, 211, 101, 0.14), transparent 42%),
      rgba(6, 10, 18, 0.94);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.08),
      0 18px 34px rgba(0, 0, 0, 0.28);
    transition:
      transform 360ms cubic-bezier(0.22, 1, 0.36, 1),
      border-color 360ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 360ms cubic-bezier(0.22, 1, 0.36, 1),
      filter 360ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .project-preview::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 22%),
      linear-gradient(180deg, rgba(5, 8, 14, 0.22), transparent 32%);
    pointer-events: none;
  }

  .project-preview::after {
    content: '';
    position: absolute;
    inset: auto 10% 12px;
    height: 26px;
    z-index: 1;
    border-radius: 999px;
    background: radial-gradient(circle, rgba(246, 211, 101, 0.22), transparent 72%);
    opacity: 0;
    transform: scale(0.78);
    transition:
      opacity 360ms cubic-bezier(0.22, 1, 0.36, 1),
      transform 360ms cubic-bezier(0.22, 1, 0.36, 1);
    pointer-events: none;
  }

  .project-preview img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition:
      transform 420ms cubic-bezier(0.22, 1, 0.36, 1),
      filter 420ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .project-preview .preview-overlay {
    position: absolute;
    inset: 0;
    z-index: 2;
    background:
      linear-gradient(180deg, rgba(8, 12, 20, 0.08) 0%, rgba(8, 12, 20, 0.24) 42%, rgba(8, 12, 20, 0.72) 100%),
      radial-gradient(460px 220px at 15% 10%, rgba(246, 211, 101, 0.16), transparent 56%);
    opacity: 1;
    transition:
      opacity 360ms cubic-bezier(0.22, 1, 0.36, 1),
      background 360ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .project-card:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow: 0 26px 48px rgba(0, 0, 0, 0.34);
  }

  .project-card:hover .project-preview {
    transform: translateY(-3px) scale(1.01);
    border-color: rgba(246, 211, 101, 0.5);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.1),
      inset 0 18px 26px rgba(255, 255, 255, 0.04),
      0 24px 42px rgba(0, 0, 0, 0.34),
      0 0 0 1px rgba(246, 211, 101, 0.16);
    filter: saturate(1.05);
  }

  .project-card:hover .project-preview img {
    transform: scale(1.055);
    filter: saturate(1.08) brightness(1.03);
  }

  .project-card:hover .project-preview::after {
    opacity: 1;
    transform: scale(1);
  }

  .project-card:hover .project-preview .preview-overlay {
    background:
      linear-gradient(180deg, rgba(8, 12, 20, 0.02) 0%, rgba(8, 12, 20, 0.14) 36%, rgba(8, 12, 20, 0.62) 100%),
      radial-gradient(460px 240px at 18% 8%, rgba(246, 211, 101, 0.28), transparent 58%);
  }

  .project-copy {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0;
    align-items: center;
  }

  .project-heading {
    margin-top: 18px;
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .project-heading h3 {
    margin: 0 0 12px;
    font-size: 18px;
    line-height: 1.25;
    transition:
      transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
      color 320ms cubic-bezier(0.22, 1, 0.36, 1),
      text-shadow 320ms cubic-bezier(0.22, 1, 0.36, 1);
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .project-description {
    margin: 0;
    min-height: 96px;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.78);
    line-height: 1.7;
    max-width: 34ch;
    margin-inline: auto;
    transition:
      transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
      color 320ms cubic-bezier(0.22, 1, 0.36, 1),
      opacity 320ms cubic-bezier(0.22, 1, 0.36, 1);
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  .project-benefit {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-top: 18px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-top: 16px;
    width: 100%;
    transition:
      border-color 320ms cubic-bezier(0.22, 1, 0.36, 1),
      transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .project-benefit strong {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(246, 211, 101, 0.88);
    transition:
      letter-spacing 320ms cubic-bezier(0.22, 1, 0.36, 1),
      color 320ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .project-benefit p {
    margin: 0;
    min-height: 74px;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.72);
    line-height: 1.6;
    max-width: 34ch;
    margin-inline: auto;
    transition:
      transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
      color 320ms cubic-bezier(0.22, 1, 0.36, 1);
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 8px;
    margin-top: 16px;
    min-height: 34px;
    width: 100%;
    margin-inline: auto;
    text-align: center;
  }

  .project-tags span {
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 999px;
    padding: 5px 10px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.04);
    transition:
      transform 260ms cubic-bezier(0.22, 1, 0.36, 1),
      border-color 260ms cubic-bezier(0.22, 1, 0.36, 1),
      background 260ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 260ms cubic-bezier(0.22, 1, 0.36, 1),
      color 260ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .project-actions {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    margin-top: auto;
    padding-top: 18px;
  }

  .project-actions .btn {
    min-height: 48px;
    height: 48px;
    width: 100%;
    padding: 0 16px;
    border-radius: 12px;
    transition:
      transform 300ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 300ms cubic-bezier(0.22, 1, 0.36, 1),
      border-color 300ms cubic-bezier(0.22, 1, 0.36, 1),
      background 300ms cubic-bezier(0.22, 1, 0.36, 1),
      color 300ms cubic-bezier(0.22, 1, 0.36, 1),
      filter 300ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .project-card:hover .project-heading h3 {
    transform: translateY(-2px);
    color: #fff5dc;
    text-shadow: 0 8px 20px rgba(246, 211, 101, 0.14);
  }

  .project-card:hover .project-description {
    transform: translateY(-1px);
    color: rgba(255, 255, 255, 0.88);
  }

  .project-card:hover .project-benefit {
    border-top-color: rgba(246, 211, 101, 0.22);
    transform: translateY(-1px);
  }

  .project-card:hover .project-benefit strong {
    letter-spacing: 0.11em;
    color: rgba(255, 230, 176, 0.96);
  }

  .project-card:hover .project-benefit p {
    transform: translateY(-1px);
    color: rgba(255, 255, 255, 0.8);
  }

  .project-card:hover .project-tags span {
    transform: translateY(-3px);
    border-color: rgba(246, 211, 101, 0.3);
    background: rgba(246, 211, 101, 0.08);
    color: rgba(255, 245, 220, 0.96);
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.2);
  }

  .projects-footer {
    display: flex;
    justify-content: center;
    margin-top: 34px;
  }

  .projects-footer-cta {
    min-width: min(100%, 320px);
  }

  .projects-footer-cta:hover,
  .projects-footer-cta:focus-visible {
    transform: translateY(-2px);
    box-shadow: 0 16px 30px rgba(0, 0, 0, 0.24);
  }

  @media (max-width: 1024px) {
    .projects-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 767px) {
    .projects-shell {
      padding: 84px 24px 80px;
    }

    .project-preview {
      min-height: 200px;
    }

    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
`,cP=()=>{const{t:e}=Ie();return d.jsx(lP,{children:d.jsx(ie.section,{className:"section projects-section",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:dt,children:d.jsxs("div",{className:"projects-shell",children:[d.jsxs("div",{className:"section-header projects-header",children:[d.jsx("span",{className:"section-kicker",children:e("home.projects.eyebrow")}),d.jsx("h2",{children:e("home.projects.title")}),d.jsx("p",{className:"section-description",children:e("home.projects.desc")})]}),d.jsx(ie.div,{className:"projects-grid",variants:Nt,children:sP.map(t=>{const a=e(`${t.translationKey}.title`),i=e(`${t.translationKey}.description`),o=e(`${t.translationKey}.benefit`);return d.jsxs(ie.article,{className:"card project-card",variants:at,children:[d.jsx(oP,{image:t.image,title:a}),d.jsxs("div",{className:"project-copy",children:[d.jsxs("div",{className:"project-heading",children:[d.jsx("h3",{children:a}),d.jsx("p",{className:"project-description",children:i})]}),d.jsxs("div",{className:"project-benefit",children:[d.jsx("strong",{children:e("home.projects.benefitLabel")}),d.jsx("p",{children:o})]}),d.jsx("div",{className:"project-tags",children:t.tags.map(l=>d.jsx("span",{children:e(`home.projects.tags.${l}`)},`${t.id}-${l}`))})]}),d.jsxs("div",{className:"project-actions",children:[d.jsx("a",{href:t.liveUrl??"#",className:"btn btn-primary",target:"_blank",rel:"noopener noreferrer",children:e("home.projects.cta.livePreview")}),d.jsx("a",{href:t.repoUrl,className:"btn btn-secondary",target:"_blank",rel:"noopener noreferrer",children:e("home.projects.cta.github")})]})]},t.id)})}),d.jsx("div",{className:"projects-footer",children:d.jsx("a",{href:rP,className:"btn btn-secondary projects-footer-cta",target:"_blank",rel:"noopener noreferrer",children:e("home.projects.cta.moreOnGithub")})})]})})})},uP=R.div`
  .trust-grid .card {
    min-height: 132px;
  }
`,dP=()=>{const{t:e}=Ie();return d.jsx(uP,{children:d.jsxs(ie.section,{className:"section",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:dt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.trust.title",{defaultValue:"Was Sie in 14 Tagen bekommen"})}),d.jsx("p",{className:"section-description",children:e("home.trust.desc",{defaultValue:"Konkrete Start-Ergebnisse: eine anfrageorientierte Website, eingerichtete Analytics und ein Plan für weiteres Wachstum."})})]}),d.jsx(ie.div,{className:"grid-2 trust-grid",variants:Nt,children:XR.map(t=>d.jsxs(ie.article,{className:"card",variants:at,children:[d.jsx("h3",{children:e(`home.trust.deliverables.${t}.title`,{defaultValue:{d1:"Prototyp in 48h",d2:"Website für Anfragen",d3:"Analytics und Tracking",d4:"30-Tage-Optimierungsplan"}[t]})}),d.jsx("p",{className:"muted",children:e(`home.trust.deliverables.${t}.text`,{defaultValue:{d1:"Wir zeigen Struktur und CTA vor dem Coding, damit Entscheidungen planbar bleiben.",d2:"Formular, Anruf, Messenger und mobile Version für schnelle Kontaktaufnahme.",d3:"GA4 plus Events, damit sichtbar wird, wo Anfragen entstehen.",d4:"Klare nächste Schritte zur Conversion-Steigerung nach Launch."}[t]})})]},t))})]})})},fP=R.div`
  .page {
    padding: 48px 0 72px;
  }

  .container {
    width: 100%;
    max-width: 1560px;
    margin: 0 auto;
    padding-left: var(--gutter);
    padding-right: var(--gutter);
  }

  .section-divider {
    margin: var(--section-space, 36px) 0;
    height: 1px;
    width: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(246, 211, 101, 0.42) 34%,
      rgba(37, 99, 235, 0.32) 66%,
      transparent 100%
    );
    box-shadow: 0 0 18px rgba(246, 211, 101, 0.18);
  }

  .section {
    margin-top: var(--section-space, 36px);
  }

  .section:first-of-type {
    margin-top: 0;
  }

  .section h2 {
    font-size: clamp(28px, 6vw, 46px);
    margin-bottom: 10px;
  }

  .section-header {
    width: min(900px, 100%);
    margin: 0 auto;
    text-align: center;
    padding: clamp(20px, 4vw, 60px) 0;
  }

  .section-header h2 {
    margin-bottom: 12px;
  }

  .section-description {
    max-width: 72ch;
    margin: 0 auto;
    color: rgba(255, 255, 255, 0.74);
    line-height: 1.6;
  }

  .section h3 {
    font-size: 22px;
    margin-bottom: 8px;
  }

  .muted {
    color: rgba(255, 255, 255, 0.72);
  }

  .grid-2 {
    display: grid;
    gap: 14px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .card {
    --mx: 50%;
    --my: 50%;
    position: relative;
    overflow: hidden;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(11, 15, 27, 0.75);
    padding: 18px;
    transition:
      transform var(--dur-mid) var(--ease-smooth),
      border-color var(--dur-mid) var(--ease-smooth),
      box-shadow var(--dur-mid) var(--ease-smooth),
      background var(--dur-mid) var(--ease-smooth);
  }

  .card::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(
      90deg,
      rgba(184, 134, 11, 0.9),
      rgba(246, 211, 101, 0.9),
      rgba(212, 175, 55, 0.9),
      rgba(37, 99, 235, 0.7)
    );
    background-size: 220% 220%;
    opacity: 0;
    transition: opacity 220ms ease;
    animation: gradientFlow 12s ease-in-out infinite;
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  .card::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(
      260px 180px at var(--mx) var(--my),
      rgba(246, 211, 101, 0.32),
      transparent 68%
    );
    opacity: 0;
    transition: opacity 220ms ease;
    pointer-events: none;
  }

  .card:hover {
    transform: translateY(-4px);
    border-color: rgba(248, 190, 98, 0.62);
    background: rgba(18, 23, 38, 0.9);
    box-shadow: 0 14px 24px rgba(0, 0, 0, 0.28);
  }

  .card:hover::before {
    opacity: 0.9;
  }

  .card:hover::after {
    opacity: 0.35;
  }

  .btn-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 46px;
    padding: 0 18px;
    border-radius: 10px;
    font-weight: 700;
    text-align: center;
    transition:
      transform var(--dur-mid) var(--ease-smooth),
      box-shadow var(--dur-mid) var(--ease-smooth),
      border-color var(--dur-mid) var(--ease-smooth),
      background var(--dur-mid) var(--ease-smooth),
      color var(--dur-mid) var(--ease-smooth),
      filter var(--dur-mid) var(--ease-smooth);
  }

  .btn:hover,
  .btn:focus-visible {
    transform: translateY(-2px);
  }

  .btn-primary {
    background: linear-gradient(120deg, #f39a4f, #ffe1b5, #f39a4f);
    background-size: 220% 220%;
    color: #121723;
  }

  .btn-primary:hover,
  .btn-primary:focus-visible {
    color: #f8fafc;
    background: linear-gradient(120deg, #121723, #253a64, #121723);
    background-size: 220% 220%;
    animation: gradientFlow 2.2s linear infinite;
    box-shadow: 0 12px 22px rgba(21, 31, 52, 0.45);
  }

  .btn-secondary {
    border: 1px solid rgba(255, 255, 255, 0.34);
    color: #ffffff;
    background: rgba(255, 255, 255, 0.02);
  }

  .btn-secondary:hover,
  .btn-secondary:focus-visible {
    border-color: rgba(255, 210, 138, 0.85);
    background: rgba(255, 223, 168, 0.95);
    color: #131b2d;
    box-shadow: 0 12px 20px rgba(255, 210, 138, 0.24);
  }

  .btn-magnetic {
    transition: transform 180ms ease, filter 180ms ease;
  }

  .btn-primary.btn-magnetic::after {
    content: '';
    position: absolute;
    inset: -1px auto -1px -10px;
    width: 38%;
    border-radius: inherit;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.64), transparent);
    animation: shimmerSweep 2.8s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes gradientFlow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes shimmerSweep {
    0% {
      transform: translateX(-120%) skewX(-18deg);
      opacity: 0;
    }
    15% {
      opacity: 0.55;
    }
    50% {
      opacity: 0.35;
    }
    100% {
      transform: translateX(140%) skewX(-18deg);
      opacity: 0;
    }
  }

  @media (max-width: 767px) {
    .page {
      padding: 28px 0 52px;
    }

    .section {
      margin-top: var(--section-space-mobile, 24px);
    }

    .section-divider {
      margin: var(--section-space-mobile, 24px) 0;
    }

    .section h2 {
      font-size: clamp(26px, 9vw, 34px);
    }

    .section-header {
      padding: clamp(20px, 6vw, 40px) 0;
    }

    .section h3 {
      font-size: 20px;
    }

    .card {
      padding: 14px;
    }

    .btn {
      min-height: 44px;
      width: 100%;
    }

    .btn-row {
      width: 100%;
      gap: 10px;
    }

    .grid-2 {
      grid-template-columns: 1fr;
    }
  }
`,pP=()=>{const e=GR();return UR(e),d.jsx(fP,{children:d.jsx("div",{className:"page",children:d.jsxs("div",{className:"container",children:[d.jsx(ML,{reducedMotion:e}),d.jsx(_D,{}),d.jsx("div",{className:"section-divider"}),d.jsx(JD,{}),d.jsx("div",{className:"section-divider"}),d.jsx(tP,{}),d.jsx("div",{className:"section-divider"}),d.jsx(cP,{}),d.jsx("div",{className:"section-divider"}),d.jsx(yL,{}),d.jsx("div",{className:"section-divider"}),d.jsx(dP,{}),d.jsx(wL,{})]})})})},hP=(e,t,a,i)=>`${a}${e.toFixed(t)}${i}`,Uc=({start:e,max:t,target:a,decimals:i=0,prefix:o="",suffix:l="",durationMs:u=1800,storageKey:p})=>{const f=a??t,[g,m]=j.useState(e),[x,y]=j.useState(!0),v=j.useRef(null);j.useEffect(()=>{if(typeof window>"u")return;if(p&&window.sessionStorage.getItem(p)==="1"){m(f),y(!1);return}let k=0;const A=e,M=f,z=C=>{k||(k=C);const H=Math.min((C-k)/u,1),E=A+(M-A)*H;m(E),H<1?v.current=window.requestAnimationFrame(z):(y(!1),m(M),p&&window.sessionStorage.setItem(p,"1"))};return v.current=window.requestAnimationFrame(z),()=>{v.current&&window.cancelAnimationFrame(v.current)}},[u,f,e,p]);const S=j.useMemo(()=>hP(g,i,o,l),[g,i,o,l]);return d.jsxs(ie.span,{className:"live-metric command-line-metric",initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.42},children:[S,x?d.jsx("span",{className:"terminal-cursor",children:"|"}):null]})},gP={copy:{eyebrow:"Almanya'daki yerel şirketler için öncü sistemler",heroTitle:["Trafikten","nitelikli potansiyel müşterilere","kontrol edilebilir bir sistemle"],heroLead:"Satış, pazarlama ve işletme sahiplerinin aynı verilerle çalışabilmesi için web sitesini, yapay zekayı, reklamları ve analitiği tek bir operasyonel mimaride birleştiriyoruz.",ctaTop:"Stratejik görüşmeyi başlat",heroChips:["Potansiyel Müşteri Akışı","Yapay Zeka Kalifikasyonu","Atıf"],heroChipValues:["Canlı yayın","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Landing + Takip","Yapay Zeka Kalifikasyonu","CRM Boru Hattı"],heroBadges:["Sunucu tarafı izleme","Potansiyel müşteri puanlama","ROAS görünümü"],servicesTitle:"Sistem modülleri olarak hizmetler",servicesDesc:"Tek tip bir kart bloğu değil: güçlü bir çekirdek, yan modüller ve kompakt bir operasyon katmanı.",trio:["Sorun","Sistem","Sonuç"],detailsSummary:"Uygulama ayrıntıları",kpiBadgesTitle:"KPI rozetleri",kpiBadgesDesc:"Performansı, yalnızca satış ve pazarlamanın birlikte okuyup kontrol edebileceği kritik rakamlarla değerlendiriyoruz.",signalLayerTitle:"Sinyal Katmanı",signalItems:["GA4 etkinlikleri","Meta CAPI","CRM senkronizasyonu","GDPR modu"],opsTitle:"Operasyon Notları",opsItems:["Haftalık test sırası","Bütçenin yeniden dağıtılması","Dönüşüm hunisi QA kontrolü"],packagesTitle:"SaaS mantığıyla paketler",recommended:"Önerilen",timelineTitle:"Nasıl çalışıyoruz?",stepLabel:"Adım",controlTitle:"Kontrol Odası: Gerçek zamanlı sonuçlar",controlPanelTitle:"Kontrol Paneli Mimarisi",controlPanelDesc:"Kanal verileri, huni sinyalleri ve CRM durumu tek görünümde birleşir. Kararlar sezgiyle değil, süreç düzeyinde alınır.",miniCharts:["Potansiyel müşteri hacmi","Kalite puanı","Anlaşma hızı"],kpiPanelTitle:"Canlı KPI sayaçları",kpiLabels:["Nitelikli potansiyel müşteriler","Ort. ilk yanıt","Randevu oranı","ROAS kümeleri"],controlBadges:["Lead kontrolü","Bütçe kontrolü","Dönüşüm hunisi kontrolü"],ctaBottom:"Potansiyel müşteri sisteminiz için kapsam talep edin"},systems:{website:{title:"Web Sitesi Motoru",problem:"Trafik var ama mobil kullanıcılar formdan önce çıkıyor.",system:"GA4, Meta Pixel, sunucu tarafı izleme, CRM ve GDPR kurulumu ile landing page veya çok sayfalı site.",outcome:"Her müşteri izlenebilir şekilde kaydedilir ve net biçimde doğru kanala atanır.",kpis:["İzleme oranı","Form doldurma","Potansiyel müşteri kaynağı netliği"],details:["İzin modu doğru yapılandırılır","Arama ve WhatsApp etkinlikleri","Gerçek zamanlı CRM aktarımı"]},ai:{title:"Yapay Zeka Kalifikasyon Katmanı",problem:"Çok fazla niteliksiz soru satışları ve telefon ekibini yavaşlatıyor.",system:"Yapay zeka chatbot, otomatik kalifikasyon, WhatsApp/Instagram DM akışları, e-posta otomasyonu ve lead puanlama.",outcome:"Ekip, zaman alan ilk eleme yerine satışa daha yakın potansiyel müşterilere odaklanır.",kpis:["İlk yanıt süresi","Nitelikli potansiyel müşteri oranı","Satış ekibi verimi"],details:["Sektöre özel prompt akışları","No-show hatırlatmaları","Puana göre önceliklendirme"]},ads:{title:"Ücretli Edinim",problem:"Bütçe, kanallar arasında net bir öğrenme döngüsü olmadan dağıtılıyor.",system:"Google Ads + Meta Ads + TikTok, A/B testleri, benzer kitleler, dönüşüm takibi ve ROAS görünürlüğü.",outcome:"Bütçe, sadece tıklama hacmine değil daha yüksek lead kalitesine sahip kampanyalara kayar.",kpis:["Nitelikli lead başı maliyet","Kampanya bazlı ROAS","Kazanan kreatif oranı"],details:["Bölgesel kampanya kümeleri","Test edilen kreatif varyasyonları","Sinyal bazlı kitle güncellemeleri"]},analytics:{title:"Kontrol Analitiği",problem:"Kararlar, güvenilir huni verileri yerine platform ekran görüntülerine göre alınıyor.",system:"Tek panelde kanal, huni ve CRM görünümlerini birleştiren kontrol odası yaklaşımı.",outcome:"Haftalık bütçe, optimizasyon ve ölçeklendirme kararları veriye dayalı ve izlenebilir olur.",kpis:["Randevuya dönüşüm","Anlaşma oranı","Boru hattı hızı"],details:["Bölgeye ve hizmete göre segmentasyon","Huni düşüş uyarıları","Aylık hipotez listesi"]}},packages:[{id:"baslangic",title:"Başlangıç",scale:1,lead:"Sıfırdan ölçülebilir bir lead temeli kurmak isteyen yerel işletmeler için.",items:["Web dönüşüm hunisi + GA4","Meta Pixel + izin modu","CRM yakalama","Temel raporlama"],effect:"Lead kaynaklarının net görünümü ve esnek bir başlangıç süreci."},{id:"buyume",title:"Büyüme",scale:2,recommended:!0,lead:"Daha nitelikli lead'lere ihtiyaç duyan ve aktif satış yapan ekipler için.",items:["Google + Meta kampanyaları","Yapay zeka kalifikasyon akışları","A/B test kurulumu","Lead puanlama + otomasyon"],effect:"Daha hızlı yanıt süreleri ve net önceliklendirme ile daha nitelikli talep."},{id:"olcek",title:"Ölçek",scale:3,lead:"Birden fazla bölgeye veya hizmet kümesine sahip şirketler için.",items:["Çok kanallı kontrol","Sunucu tarafı ilişkilendirme","Operasyonel web uygulama katmanı","Kontrol odası yönetimi"],effect:"Manuel deneme yanılma yerine süreçler ve güvenilir veriler üzerinden ölçekleme."}],timeline:[["01","Stratejik görüşme","Hedef pazar, teklif ve lead darboğazı net biçimde tanımlanır."],["02","Kapsam belgesi","Kanal planı, takip planı ve sorumluluklar belirlenir."],["03","Kurulum aşaması","Web sitesi, otomasyonlar ve entegrasyonlar uygulanır."],["04","Yayın","QA takibi, kampanya yayını ve CRM akışları devreye alınır."],["05","Optimizasyon","Reklam öğeleri, dönüşüm hunileri ve kalifikasyon için haftalık testler yapılır."],["06","Ölçekleme","İşe yarayan rotalar yeni bölgelere ve hizmetlere genişletilir."]]},mP={copy:{eyebrow:"الأنظمة الرائدة للشركات المحلية في ألمانيا",heroTitle:["من حركة المرور","العملاء المتوقعون المؤهلون","كنظام يمكن السيطرة عليه"],heroLead:"نقوم بربط مواقع الويب والذكاء الاصطناعي والإعلانات والتحليلات في بنية تشغيلية واحدة بحيث يعمل فريق المبيعات والتسويق والمالكون بنفس البيانات.",ctaTop:"ابدأ المكالمة الإستراتيجية",heroChips:["تدفق الرصاص","تأهل الذكاء الاصطناعي","الإسناد"],heroChipValues:["المدخول المباشر","رسالة مباشرة + بوت","GA4 + إدارة علاقات العملاء"],flowNodes:["جوجل / ميتا / تيك توك","الهبوط + التتبع","مؤهل الذكاء الاصطناعي","خط أنابيب إدارة علاقات العملاء"],heroBadges:["التتبع من جانب الخادم","نقاط الرصاص","عرض عائد النفقات الإعلانية"],servicesTitle:"الخدمات كوحدات النظام",servicesDesc:"ليست كتلة بطاقات موحدة: نواة مهيمنة ووحدات جانبية وطبقة عمليات مدمجة.",trio:["مشكلة","النظام","النتيجة"],detailsSummary:"تفاصيل التنفيذ",kpiBadgesTitle:"شارات مؤشرات الأداء الرئيسية",kpiBadgesDesc:"يتم تقييم كل أداء حصريًا باستخدام الأرقام الرئيسية التي يمكن للمبيعات والتسويق قراءتها والتحكم فيها معًا.",signalLayerTitle:"طبقة الإشارة",signalItems:['أحداث "إحصاءات Google" 4',"ميتا كابي","مزامنة إدارة علاقات العملاء","موضة القانون العام لحماية البيانات"],opsTitle:"ملاحظات العمليات",opsItems:["قائمة انتظار الاختبار الأسبوعية","إعادة تخصيص الميزانية","فتحات ضمان الجودة"],packagesTitle:"الباقات بمنطق SaaS",recommended:"موصى به",timelineTitle:"كيف نعمل",stepLabel:"الخطوة",controlTitle:"غرفة التحكم: النتائج في الوقت الحقيقي",controlPanelTitle:"بنية لوحة المعلومات",controlPanelDesc:"تتلاقى بيانات القناة وإشارات مسار التحويل وحالة إدارة علاقات العملاء (CRM) في عرض واحد. يتم اتخاذ القرارات على مستوى العملية بدلاً من الاعتماد على الشعور الغريزي.",miniCharts:["حجم الرصاص","نقاط الجودة","سرعة الصفقة"],kpiPanelTitle:"عدادات مؤشرات الأداء الرئيسية المباشرة",kpiLabels:["العملاء المتوقعون المؤهلون","متوسط. الرد الأول","يؤدي إلى التعيين","مجموعات عائد الإنفاق الإعلاني (ROAS)."],controlBadges:["التحكم في الرصاص","مراقبة الميزانية","التحكم في مسار التحويل"],ctaBottom:"نطاق الطلب لنظام العملاء المحتملين الخاص بك"},systems:{website:{title:"محرك الموقع",problem:"حركة المرور موجودة، لكن مستخدمي الهاتف المحمول يتخلون عنها قبل النموذج.",system:"الصفحات المقصودة/الصفحات المتعددة مع GA4 وMeta Pixel والتتبع من جانب الخادم وإدارة علاقات العملاء وإعداد القانون العام لحماية البيانات (GDPR).",outcome:"يتم تسجيل كل عميل متوقع بطريقة يمكن تتبعها وتعيينها بوضوح إلى القناة.",kpis:["معدل التتبع","إكمال النموذج","وضوح مصدر الرصاص"],details:["تم تكوين وضع الموافقة بشكل صحيح","أحداث الاتصال والواتس اب","دفع CRM في الوقت الحقيقي"]},ai:{title:"طبقة تأهيل الذكاء الاصطناعي",problem:"يؤدي وجود عدد كبير جدًا من الاستفسارات غير المؤهلة إلى عرقلة المبيعات وفريق الهاتف.",system:"روبوت الدردشة المدعم بالذكاء الاصطناعي، والتأهيل التلقائي، وتدفقات الرسائل المباشرة في WhatsApp/Instagram، وأتمتة البريد الإلكتروني، وسجل العملاء المحتملين.",outcome:"يقوم الفريق بإعطاء الأولوية للعملاء المحتملين المرتبطين بالمبيعات بدلاً من الفرز الأولي الذي يستغرق وقتًا طويلاً.",kpis:["وقت الاستجابة الأول","مشاركة العميل المحتمل المؤهل","إنتاجية فريق المبيعات"],details:["مسارات المطالبة الخاصة بالصناعة","عدم عرض التذكيرات","تحديد الأولويات حسب النتيجة"]},ads:{title:"الاستحواذ المدفوع",problem:"يتم توزيع الميزانية بين القنوات بدون حلقة تعليمية واضحة.",system:"إعلانات Google + Meta Ads + TikTok، واختبارات A/B، والمشابهين، وتتبع التحويل، وعرض عائد الإنفاق الإعلاني (ROAS).",outcome:"تتدفق الميزانية إلى الحملات ذات جودة العملاء المحتملين العالية بدلاً من حجم النقرات النقي.",kpis:["التكلفة لكل عميل محتمل مؤهل","عائد النفقات الإعلانية حسب الحملة","معدل الفوز الإبداعي"],details:["مجموعات الحملات الإقليمية","متغيرات الشكل في الاختبار","تحديثات الجمهور المستندة إلى الإشارة"]},analytics:{title:"تحليلات التحكم",problem:"تعتمد القرارات على لقطات شاشة النظام الأساسي بدلاً من بيانات مسار التحويل الموثوقة.",system:"لوحة معلومات غرفة التحكم مع طرق عرض القناة ومسار التحويل وإدارة علاقات العملاء (CRM) على مستوى واحد.",outcome:"يمكن تتبع القرارات الأسبوعية بشأن الميزانية والتحسين والقياس بناءً على البيانات.",kpis:["يؤدي إلى التعيين","يؤدي إلى التعامل","سرعة خط الأنابيب"],details:["التقسيم حسب المنطقة/الخدمة","تنبيهات إسقاط مسار التحويل","قائمة الفرضيات الشهرية"]}},packages:[{id:"بداية",title:"الانطلاق",scale:1,lead:"للشركات المحلية التي تنتقل من الصفر إلى قاعدة عملاء قابلة للقياس.",items:["مسار تحويل الويب + GA4","Meta Pixels + الموافقة","التقاط إدارة علاقات العملاء","إعداد التقارير الأساسية"],effect:"رؤية واضحة لمصادر العملاء المحتملين وعملية أولية مرنة."},{id:"النمو",title:"النمو",scale:2,recommended:!0,lead:"للفرق ذات المبيعات النشطة التي تحتاج إلى المزيد من العملاء المحتملين المؤهلين.",items:["حملات جوجل + ميتا","تدفقات تأهيل الذكاء الاصطناعي","إعداد اختبار أ/ب","تسجيل نقاط العميل المتوقع + الأتمتة"],effect:"طلب أكثر تأهيلاً مع أوقات استجابة أفضل وتحديد أولويات واضح."},{id:"scale",title:"التوسع",scale:3,lead:"للشركات ذات المناطق أو مجموعات الخدمة المتعددة.",items:["تحكم متعدد القنوات","الإسناد من جانب الخادم","طبقة تطبيق ويب العمليات","إدارة غرفة التحكم"],effect:"التوسع من خلال العمليات والبيانات الموثوقة بدلاً من التجربة والخطأ اليدويين."}],timeline:[["01","النداء الاستراتيجي","السوق المستهدف والعرض واختناقات الرصاص محددة بوضوح."],["02","مستند النطاق","تم إصلاح خطة القناة وخطة التتبع والمسؤوليات."],["03","مرحلة البناء","يتم تنفيذ موقع الويب والأتمتة والتكامل."],["04","الإطلاق","بدء تشغيل تتبع ضمان الجودة وإطلاق الحملة وتدفقات إدارة علاقات العملاء."],["05","التحسين","اختبارات أسبوعية للمبدعين والمسارات والتأهيل."],["06","التحجيم","يتم توسيع مسارات العمل إلى المناطق/الخدمات."]]},bP={copy:{eyebrow:"Systemy leadowe dla lokalnych firm w Niemczech",heroTitle:["Z ruchu","w kwalifikowane leady","jako sterowalny system"],heroLead:"Łączymy stronę internetową, AI, reklamy i analitykę w jedną architekturę operacyjną, aby sprzedaż, marketing i właściciel pracowali na tych samych danych.",ctaTop:"Rozpocznij rozmowę strategiczną",heroChips:["Przepływ leadów","Kwalifikacja AI","Atrybucja"],heroChipValues:["Live intake","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Landing + tracking","Kwalifikacja AI","Pipeline CRM"],heroBadges:["Tracking server-side","Lead scoring","Widok ROAS"],servicesTitle:"Usługi jako moduły systemu",servicesDesc:"Nie klasyczny blok równych kart, tylko dominujący rdzeń, moduły uzupełniające i kompaktowa warstwa operacyjna.",trio:["Problem","System","Efekt"],detailsSummary:"Szczegóły wdrożenia",kpiBadgesTitle:"Odznaki KPI",kpiBadgesDesc:"Każdy obszar oceniamy wyłącznie przez pryzmat wskaźników, które sprzedaż i marketing mogą wspólnie czytać oraz kontrolować.",signalLayerTitle:"Warstwa sygnałowa",signalItems:["Zdarzenia GA4","Meta CAPI","Synchronizacja CRM","Tryb DSGVO"],opsTitle:"Notatki operacyjne",opsItems:["Cotygodniowa kolejka testów","Realokacja budżetu","Sloty QA dla lejka"],packagesTitle:"Pakiety w logice SaaS",recommended:"Polecane",timelineTitle:"Jak pracujemy",stepLabel:"Krok",controlTitle:"Control Room: wyniki w czasie rzeczywistym",controlPanelTitle:"Architektura dashboardu",controlPanelDesc:"Dane kanałów, sygnały lejka i status CRM zbieramy w jednym widoku. Decyzje zapadają na poziomie procesu, a nie na podstawie przeczucia.",miniCharts:["Liczba leadów","Quality Score","Tempo pipeline'u"],kpiPanelTitle:"Liczniki KPI na żywo",kpiLabels:["Kwalifikowane leady","Śr. pierwszy kontakt","Lead do terminu","Klastry ROAS"],controlBadges:["Kontrola leadów","Kontrola budżetu","Kontrola lejka"],ctaBottom:"Zapytaj o zakres dla swojego systemu leadowego"},systems:{website:{title:"Silnik strony",problem:"Ruch jest, ale użytkownicy mobilni odpadają przed formularzem.",system:"Landing page albo strona wielopodstronowa z GA4, Meta Pixel, trackingiem server-side, CRM i konfiguracją DSGVO.",outcome:"Każdy lead jest rejestrowany w sposób możliwy do prześledzenia i jednoznacznie przypisany do kanału.",kpis:["Skuteczność trackingu","Ukończenie formularza","Przejrzystość źródła leada"],details:["Consent Mode skonfigurowany poprawnie","Połączenia i zdarzenia WhatsApp","Push do CRM w czasie rzeczywistym"]},ai:{title:"Warstwa kwalifikacji AI",problem:"Zbyt wiele niekwalifikowanych zapytań blokuje sprzedaż i zespół telefoniczny.",system:"Chatbot AI, auto-kwalifikacja, DM flow w WhatsAppie i Instagramie, automatyzacja e-maili oraz lead scoring.",outcome:"Zespół priorytetyzuje leady bliższe sprzedaży zamiast tracić czas na ręczną preselekcję.",kpis:["Czas pierwszej odpowiedzi","Udział kwalifikowanych leadów","Przepustowość zespołu sprzedaży"],details:["Ścieżki promptów dopasowane do branży","Przypomnienia o no-show","Priorytetyzacja według scoringu"]},ads:{title:"Płatne pozyskiwanie",problem:"Budżet rozkłada się między kanały bez wyraźnej pętli uczenia.",system:"Google Ads, Meta Ads i TikTok, testy A/B, lookalike'i, tracking konwersji i widok ROAS.",outcome:"Budżet trafia do kampanii o wyższej jakości leadów, a nie tylko do źródeł z dużą liczbą kliknięć.",kpis:["Koszt kwalifikowanego leada","ROAS według kampanii","Skuteczność kreacji"],details:["Regionalne klastry kampanii","Warianty formularzy w testach","Aktualizacje odbiorców oparte na sygnałach"]},analytics:{title:"Analityka kontrolna",problem:"Decyzje opierają się na screenshotach z platform zamiast na wiarygodnych danych z lejka.",system:"Dashboard control room z widokiem kanałów, lejka i CRM w jednej warstwie.",outcome:"Cotygodniowe decyzje dotyczące budżetu, optymalizacji i skalowania są jasno uzasadnione danymi.",kpis:["Lead do terminu","Lead do sprzedaży","Tempo pipeline'u"],details:["Segmentacja według regionu i usługi","Alerty przy spadkach w lejku","Miesięczna lista hipotez"]}},packages:[{id:"starter",title:"Starter",scale:1,lead:"Dla lokalnych firm, które przechodzą od zera do mierzalnej bazy leadów.",items:["Lejek webowy + GA4","Meta Pixel + consent","CRM capture","Podstawowe raportowanie"],effect:"Jasny obraz źródeł leadów i odporny proces startowy."},{id:"growth",title:"Growth",scale:2,recommended:!0,lead:"Dla zespołów z aktywną sprzedażą, które potrzebują większej liczby kwalifikowanych leadów.",items:["Kampanie Google + Meta","AI qualification flows","Konfiguracja testów A/B","Lead scoring + automatyzacja"],effect:"Więcej kwalifikowanego popytu, lepszy czas reakcji i klarowna priorytetyzacja."},{id:"scale",title:"Scale",scale:3,lead:"Dla firm działających w wielu regionach albo klastrach usług.",items:["Sterowanie multi-channel","Atrybucja server-side","Ops Web-App Layer","Control-Room Governance"],effect:"Skalowanie oparte na procesach i wiarygodnych danych zamiast ręcznego trial-and-error."}],timeline:[["01","Połączenie strategiczne","Rynek docelowy, oferta i główne wąskie gardło leadowe są jasno definiowane."],["02","Dokument scope","Ustalamy plan kanałów, plan trackingu i odpowiedzialności."],["03","Faza build","Wdrażamy stronę, automatyzacje i integracje."],["04","Launch","Uruchamiamy QA trackingu, start kampanii i przepływy CRM."],["05","Optymalizacja","Co tydzień testujemy kreacje, lejek i logikę kwalifikacji."],["06","Skalowanie","Działające ścieżki rozszerzamy na kolejne regiony i usługi."]]},xP={copy:{eyebrow:"Pergalên pêşeng ji bo pargîdaniyên herêmî yên li Elmanyayê",heroTitle:["Ji Trafîkê","pêşengên jêhatî","wekî pergalek kontrolkirî"],heroLead:"Em malper, AI, reklam û analîtîk di yek mîmariya xebitandinê de girêdidin da ku firotgeh, kirrûbirra û xwedan bi heman daneyan re bixebitin.",ctaTop:"Banga stratejîk dest pê bikin",heroChips:["Lead Flow","AI Qualify","Attribution"],heroChipValues:["Vegirtina Zindî","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Daxistina + Şopandin","Qalîteya AI","CRM Pipeline"],heroBadges:["Şopandina server-side","Nîşandana Serê","Dîtina ROAS"],servicesTitle:"Karûbarên wekî modulên pergalê",servicesDesc:"Ne bloka qerta yekgirtî: bingehek serdest, modulên alîgir û qatek operasyonên tevlihev.",trio:["Pirsgirêk","System","Encam"],detailsSummary:"Agahiyên pêkanînê",kpiBadgesTitle:"nîşaneyên KPI",kpiBadgesDesc:"Her performans bi taybetî bi karanîna hejmarên sereke yên ku firotgeh û kirrûbirra dikarin bi hev re bixwînin û kontrol bikin têne nirxandin.",signalLayerTitle:"Signal Layer",signalItems:["bûyerên GA4","Meta CAPI","CRM Sync","moda GDPR"],opsTitle:"Têbînîyên Ops",opsItems:["Dora Testa Heftane","Veqetandina budceyê","Funnel QA Slots"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Pêşniyar kirin",timelineTitle:"Em çawa dixebitin",stepLabel:"Gavê",controlTitle:"Odeya Kontrolê: Encam di wextê rast de",controlPanelTitle:"Mîmariya Dashboard",controlPanelDesc:"Daneyên kanalê, sînyalên funnel û rewşa CRM di yek dîmenê de li hev dicivin. Biryar di asta pêvajoyê de li şûna ku li ser bingeha hestiyariyê têne girtin.",miniCharts:["Volume Lead","Pîvana Kalîteyê","Deal Leza"],kpiPanelTitle:"Hejmarên KPI-ya Zindî",kpiLabels:["Rêberên Qeydkirî","Avg. Bersiva yekem","Ber bi randevûyê ve bibe","ROAS Cluster"],controlBadges:["Kontrola rêber","Kontrola budceyê","Kontrola funnel"],ctaBottom:"Ji bo pergala rêberiya xwe qada xwe daxwaz bikin"},systems:{website:{title:"Motora Malperê",problem:"Trafîk li wir e, lê bikarhênerên mobîl berê xwe didin formê.",system:"Zevî / Pir-Rûpel bi GA4, Meta Pixel, şopandina server-side, sazkirina CRM û GDPR.",outcome:"Her lînka bi şêwazek peydakirî tê tomar kirin û bi zelalî ji kanalek re tê veqetandin.",kpis:["rêjeya şopandinê","Temamkirina Formê","Zelaliya Çavkaniya Rêber"],details:["Moda razîbûnê rast hate mîheng kirin","Bang û bûyerên WhatsApp","CRM di wextê rast de bişopîne"]},ai:{title:"Qatê Qalîteya AI",problem:"Pir lêpirsînên bêkalîte firotan û tîmê têlefonê asteng dikin.",system:"chatbotê AI-ê, kalîteya xweser, DM di WhatsApp/Instagram-ê de diherike, otomasyona e-nameyê, pîvana pêşeng.",outcome:"Tîm li şûna rêzkirina destpêkê ya dem-dixwe, pêşengên bi firotanê ve girêdayî ye.",kpis:["Dema bersivê ya yekem","Parvekirina Pêşkêşiya Qeydkirî","Rêjeya Tîma Firotanê"],details:["Rêçên bilez ên pîşesaziyê","Bîranînên Nîşan Nade","Pêşniyarkirin li gorî puanê"]},ads:{title:"Bidestxistina Pad",problem:"Budçe di navbera kanalan de bêyî çerxa fêrbûnê ya zelal tê dabeş kirin.",system:"Google Ads + Meta Ads + TikTok, testên A/B, xuyang, şopandina veguheztinê û dîtina ROAS.",outcome:"Budçe li şûna voltaja klîk a paqij di kampanyayên bi kalîteya pêşeng a bilind de diherike.",kpis:["Mesrefa serê pêşengê jêhatî","ROAS ji hêla Kampanyayê ve","Rêjeya Serketina Afirîner"],details:["Komên kampanyaya herêmî","Guhertoyên şikilê di ceribandinê de","Nûvekirinên temaşevanan-based sînyala"]},analytics:{title:"Analîtîk kontrol bikin",problem:"Biryar li şûna daneyên pêbawer ên pêbawer li ser dîmenên platformê têne çêkirin.",system:"Tabloya jûreya kontrolê bi dîtinên kanal, kavil û CRM li yek astê.",outcome:"Biryarên heftane yên li ser budce, xweşbînkirin û pîvandinê li ser bingeha daneyan têne şopandin.",kpis:["Ber bi Randevûyê ve bibe","Bi rê ve bibin","Leza boriyê"],details:["Segmentkirin li gorî herêm/xizmet","Agahiyên Daxistina Funnel","Lîsteya hîpoteza mehane"]}},packages:[{id:"destpêk",title:"Destpêker",scale:1,lead:"Ji bo karsaziyên herêmî ku ji sifirê diçin bingehek pêşeng a pîvandî.",items:["Kanala Web + GA4","Meta Pixels + Destûr","Girtina CRM","Raporkirina bingehîn"],effect:"Dîtina zelal a çavkaniyên pêşeng û pêvajoyek destpêkê ya berxwedêr."},{id:"mezinbûn",title:"Mezinbûn",scale:2,recommended:!0,lead:"Ji bo tîmên xwedan firotana çalak ku hewceyê pêşengên jêhatîtir in.",items:["Google + Meta Kampagnen","Qalîteya AI-ê diherike","Sazkirina Testkirina A/B","Nîgarkirina Serê + Otomasyon"],effect:"Daxwaza jêhatîtir bi demên bersivdayînê çêtir û pêşengiya zelal."},{id:"scale",title:"Pîvana",scale:3,lead:"Ji bo pargîdaniyên bi gelek herêm an komên karûbarê.",items:["Kontrola pir-kanal","Server-Side Attribution","Ops Web App Layer","Rêveberiya odeya kontrolê"],effect:"Li şûna ceribandin û xeletiya destan, bi pêvajo û daneyên pêbawer ve pîvandin."}],timeline:[["01","Banga Stratejîk","Bazara armanc, pêşkêşî û kêşeya pêşeng bi zelalî têne destnîşan kirin."],["02","Belgeya çarçovê","Plana kanalê, plana şopandinê û berpirsiyarî têne rast kirin."],["03","Qonaxa avakirinê","Malper, otomasyon û entegrasyon têne pêkanîn."],["04","Destpêkirin","Şopandina QA, destpêkirina kampanyayê û herikîna CRM zindî diçin."],["05","Optimîzasyon","Testên heftane ji bo afirîner, kavil û jêhatîbûnê."],["06","Scaling","Rêçên fonksiyonel li herêm / karûbaran têne berfireh kirin."]]},yP={copy:{eyebrow:"سیستم های رهبری برای شرکت های محلی در آلمان",heroTitle:["از ترافیک","سرنخ های واجد شرایط","به عنوان یک سیستم قابل کنترل"],heroLead:"ما وب سایت، هوش مصنوعی، تبلیغات و تجزیه و تحلیل را در یک معماری عملیاتی به هم متصل می کنیم تا فروش، بازاریابی و مالکان با داده های یکسان کار کنند.",ctaTop:"تماس استراتژیک را شروع کنید",heroChips:["جریان لید","صلاحیت‌سنجی با هوش مصنوعی","اسناد"],heroChipValues:["مصرف زنده","DM + ربات","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","فرود + ردیابی","صلاحیت هوش مصنوعی","خط لوله CRM"],heroBadges:["ردیابی سمت سرور","امتیازدهی برتر","نمای ROAS"],servicesTitle:"خدمات به عنوان ماژول های سیستم",servicesDesc:"یک بلوک کارت یکنواخت نیست: یک هسته غالب، ماژول های کناری و یک لایه عملیات فشرده.",trio:["مسئله","سیستم","نتیجه"],detailsSummary:"جزئیات پیاده سازی",kpiBadgesTitle:"نشان های KPI",kpiBadgesDesc:"هر عملکرد منحصراً با استفاده از ارقام کلیدی ارزیابی می شود که فروش و بازاریابی می توانند با هم بخوانند و کنترل کنند.",signalLayerTitle:"لایه سیگنال",signalItems:["رویدادهای GA4","Meta CAPI","همگام‌سازی CRM","حالت GDPR"],opsTitle:"یادداشت های عملیاتی",opsItems:["صف تست هفتگی","بازتخصیص بودجه","بازبینی کیفیت قیف"],packagesTitle:"پکیج‌ها با منطق SaaS",recommended:"توصیه می شود",timelineTitle:"چگونه کار می کنیم",stepLabel:"گام",controlTitle:"اتاق کنترل: نتایج در زمان واقعی",controlPanelTitle:"معماری داشبورد",controlPanelDesc:"داده های کانال، سیگنال های قیف و وضعیت CRM در یک نما همگرا می شوند. تصمیمات به جای اینکه بر اساس احساس درونی باشد، در سطح فرآیند گرفته می شود.",miniCharts:["حجم سرب","امتیاز کیفیت","سرعت معامله"],kpiPanelTitle:"شمارنده‌های زنده KPI",kpiLabels:["سرنخ های واجد شرایط","میانگین اولین پاسخ","منجر به قرار ملاقات","خوشه های ROAS"],controlBadges:["کنترل سرب","کنترل بودجه","کنترل قیف"],ctaBottom:"دامنه درخواست برای سیستم رهبری خود"},systems:{website:{title:"موتور وب سایت",problem:"ترافیک وجود دارد، اما کاربران تلفن همراه قبل از فرم آن را رها می کنند.",system:"لندینگ‌پیج یا سایت چندصفحه‌ای با GA4، Meta Pixel، رهگیری سمت سرور، CRM و راه‌اندازی GDPR.",outcome:"هر لید به شیوه ای قابل ردیابی ثبت می شود و به وضوح به یک کانال اختصاص داده می شود.",kpis:["نرخ ردیابی","تکمیل فرم","وضوح منبع سرب"],details:["حالت رضایت به درستی پیکربندی شده است","تماس و رویدادهای WhatsApp","فشار CRM در زمان واقعی"]},ai:{title:"لایه صلاحیت هوش مصنوعی",problem:"بسیاری از سوالات غیرمجاز فروش و تیم تلفن را مسدود می کند.",system:"چت‌بات هوش مصنوعی، صلاحیت‌سنجی خودکار، فلوهای DM در WhatsApp/Instagram، اتوماسیون ایمیل و امتیازدهی لید.",outcome:"تیم سرنخ های مرتبط با فروش را به جای مرتب سازی اولیه وقت گیر در اولویت قرار می دهد.",kpis:["اولین زمان پاسخ","اشتراک سرب واجد شرایط","توان عملیاتی تیم فروش"],details:["مسیرهای سریع خاص صنعت","بدون نمایش یادآوری","اولویت بندی بر اساس امتیاز"]},ads:{title:"خرید پولی",problem:"بودجه بین کانال ها بدون یک حلقه یادگیری واضح توزیع می شود.",system:"Google Ads + Meta Ads + TikTok، تست های A/B، مشابه، ردیابی تبدیل و نمای ROAS.",outcome:"بودجه به جای حجم کلیک خالص به کمپین هایی با کیفیت سرنخ بالا سرازیر می شود.",kpis:["هزینه هر سرنخ واجد شرایط","ROAS توسط کمپین","نرخ برد خلاقانه"],details:["خوشه های کمپین منطقه ای","انواع شکل در آزمون","به روز رسانی مخاطبان مبتنی بر سیگنال"]},analytics:{title:"کنترل تجزیه و تحلیل",problem:"تصمیم‌گیری‌ها به جای داده‌های قیف قابل اعتماد، بر اساس اسکرین‌شات‌های پلتفرم هستند.",system:"داشبورد اتاق کنترل با نمای کانال، قیف و CRM در یک سطح.",outcome:"تصمیمات هفتگی در مورد بودجه، بهینه سازی و مقیاس بندی بر اساس داده ها قابل ردیابی هستند.",kpis:["منجر به قرار ملاقات","منجر به معامله شود","سرعت خط لوله"],details:["تقسیم بندی بر اساس منطقه/سرویس","هشدارهای سقوط قیف","فهرست فرضیه های ماهانه"]}},packages:[{id:"starter",title:"استارتر",scale:1,lead:"برای کسب‌وکارهای محلی که می‌خواهند از صفر یک پایه لید قابل اندازه‌گیری بسازند.",items:["قیف تبدیل وب + GA4","Meta Pixel + consent mode","دریافت در CRM","گزارش‌گیری پایه"],effect:"شفافیت در منبع لیدها و یک شروع منعطف."},{id:"growth",title:"رشد",scale:2,recommended:!0,lead:"برای تیم‌های فروش فعال که به لیدهای واجد شرایط‌تر نیاز دارند.",items:["کمپین‌های Google + Meta","جریان‌های صلاحیت‌سنجی با AI","راه‌اندازی A/B تست","امتیازدهی لید + اتوماسیون"],effect:"درخواست باکیفیت‌تر، پاسخ سریع‌تر و اولویت‌بندی شفاف‌تر."},{id:"scale",title:"مقیاس",scale:3,lead:"برای شرکت‌هایی با چند منطقه یا چند خوشه خدماتی.",items:["کنترل چندکاناله","Attribution سمت سرور","لایه وب‌اپ عملیاتی","مدیریت اتاق کنترل"],effect:"رشد بر پایه فرایندها و داده‌های قابل اعتماد، نه آزمون‌وخطای دستی."}],timeline:[["01","تماس استراتژیک","بازار هدف، پیشنهاد و گلوگاه سرب به وضوح تعریف شده است."],["02","سند محدوده","طرح کانال، طرح پیگیری و مسئولیت ها ثابت است."],["03","فاز ساخت","وب سایت، اتوماسیون ها و ادغام ها پیاده سازی شده اند."],["04","راه اندازی","پیگیری QA، راه‌اندازی کمپین و جریان‌های CRM فعال می‌شوند."],["05","بهینه سازی","آزمون های هفتگی برای خلاقیت ها، قیف ها و صلاحیت ها."],["06","مقیاس بندی","مسیرهای عملکردی به مناطق/خدمات گسترش یافته است."]]},vP={copy:{eyebrow:"Sistemi guida per aziende locali in Germania",heroTitle:["Dal traffico","lead qualificati","come sistema controllabile"],heroLead:"Colleghiamo sito web, intelligenza artificiale, pubblicità e analisi in un'unica architettura operativa in modo che vendite, marketing e proprietari lavorino con gli stessi dati.",ctaTop:"Avvia chiamata strategica",heroChips:["Flusso principale","Qualificazione AI","Attribuzione"],heroChipValues:["Assunzione dal vivo","DM + Bot","GA4 + CRM"],flowNodes:["Google/Meta/TikTok","Atterraggio + Inseguimento","Qualificazione AI","Pipeline CRM"],heroBadges:["Monitoraggio lato server","Punteggio principale","Visualizzazione ROAS"],servicesTitle:"Servizi come moduli di sistema",servicesDesc:"Blocco di carte non uniforme: un nucleo dominante, moduli affiancati e uno strato operativo compatto.",trio:["Problema","sistema","Risultato"],detailsSummary:"Dettagli di implementazione",kpiBadgesTitle:"Badge KPI",kpiBadgesDesc:"Ogni prestazione viene valutata esclusivamente utilizzando cifre chiave che vendite e marketing possono leggere e controllare insieme.",signalLayerTitle:"Livello del segnale",signalItems:["Eventi GA4","Meta CAPI","Sincronizzazione CRM","Moda GDPR"],opsTitle:"Note operative",opsItems:["Coda di prova settimanale","Riallocazione del budget","Slot QA canalizzazione"],packagesTitle:"pacchetti in logica SaaS",recommended:"Consigliato",timelineTitle:"Come lavoriamo",stepLabel:"Passaggio",controlTitle:"Sala di controllo: risultati in tempo reale",controlPanelTitle:"Architettura del dashboard",controlPanelDesc:"I dati del canale, i segnali del funnel e lo stato del CRM convergono in un'unica visualizzazione. Le decisioni vengono prese a livello di processo anziché in base al sentimento.",miniCharts:["Volume di lead","Punteggio di qualità","Velocità dell'operazione"],kpiPanelTitle:"Contatori KPI in tempo reale",kpiLabels:["Lead qualificati","Media Prima risposta","Porta all'appuntamento","Cluster ROAS"],controlBadges:["Controllo principale","Controllo del bilancio","Controllo imbuto"],ctaBottom:"Richiedi l'ambito per il tuo sistema lead"},systems:{website:{title:"Motore del sito web",problem:"Il traffico c'è, ma gli utenti mobile abbandonano prima del modulo.",system:"Landing/Multi-pagina con GA4, Meta Pixel, tracciamento lato server, configurazione CRM e GDPR.",outcome:"Ogni lead viene registrato in modo tracciabile e chiaramente assegnato a un canale.",kpis:["tasso di tracciamento","Completamento del modulo","Chiarezza della fonte principale"],details:["Modalità di consenso configurata correttamente","Chiama ed eventi WhatsApp","Push CRM in tempo reale"]},ai:{title:"Livello di qualificazione AI",problem:"Troppe richieste non qualificate bloccano le vendite e il team telefonico.",system:"Chatbot AI, autoqualificazione, flussi DM in WhatsApp/Instagram, automazione della posta elettronica, lead scoring.",outcome:"Il team dà priorità ai lead relativi alle vendite anziché al lungo smistamento iniziale.",kpis:["Tempo di prima risposta","Condivisione di lead qualificati","Produttività del team di vendita"],details:["Percorsi rapidi specifici del settore","Promemoria mancata presentazione","Priorità in base al punteggio"]},ads:{title:"Acquisizione a pagamento",problem:"Il budget è distribuito tra i canali senza un chiaro ciclo di apprendimento.",system:"Google Ads + Meta Ads + TikTok, test A/B, lookalike, monitoraggio delle conversioni e visualizzazione ROAS.",outcome:"Il budget confluisce in campagne con un'elevata qualità dei lead invece che con un puro volume di clic.",kpis:["Costo per lead qualificato","ROAS per campagna","Tasso di vincita creatività"],details:["Cluster di campagne regionali","Varianti di forma nel test","Aggiornamenti sul pubblico basati sui segnali"]},analytics:{title:"Analisi di controllo",problem:"Le decisioni si basano sugli screenshot della piattaforma anziché su dati affidabili della canalizzazione.",system:"Cruscotto della sala di controllo con visualizzazioni canale, canalizzazione e CRM su un unico livello.",outcome:"Le decisioni settimanali su budget, ottimizzazione e ridimensionamento sono tracciabili sulla base dei dati.",kpis:["Porta all'appuntamento","Porta all'affare","Velocità della pipeline"],details:["Segmentazione per regione/servizio","Avvisi di eliminazione della canalizzazione","Elenco mensile delle ipotesi"]}},packages:[{id:"motorino di avviamento",title:"Motorino d'avviamento",scale:1,lead:"Per le imprese locali che passano da zero a una base di lead misurabile.",items:["Imbuto web + GA4","Meta Pixel + Consenso","Acquisizione CRM","Reportistica di base"],effect:"Visione chiara delle fonti di lead e processo iniziale resiliente."},{id:"crescita",title:"Crescita",scale:2,recommended:!0,lead:"Per i team con vendite attive che necessitano di lead più qualificati.",items:["Campagne Google + Meta","Flussi di qualificazione AI","Impostazione test A/B","Punteggio lead + automazione"],effect:"Domanda più qualificata con tempi di risposta migliori e chiara definizione delle priorità."},{id:"scale",title:"Scala",scale:3,lead:"Per aziende con più regioni o cluster di servizi.",items:["Controllo multicanale","Attribuzione lato server","Livello app Web Ops","Governance della sala di controllo"],effect:"Scalabilità tramite processi e dati affidabili anziché tentativi ed errori manuali."}],timeline:[["01","Chiamata strategica","Il mercato target, l'offerta e il collo di bottiglia del lead sono chiaramente definiti."],["02","Documento di ambito","Il piano dei canali, il piano di monitoraggio e le responsabilità sono fissi."],["03","Fase di costruzione","Sito web, automazioni e integrazioni implementate."],["04","Lancio","Il monitoraggio del QA, del lancio della campagna e dei flussi CRM diventa attivo."],["05","Ottimizzazione","Test settimanali per creatività, canalizzazioni e qualificazione."],["06","Ridimensionamento","I percorsi funzionanti vengono estesi a regioni/servizi."]]},wP={copy:{eyebrow:"Sistemas líderes para empresas locales en Alemania",heroTitle:["Del tráfico","clientes potenciales calificados","como sistema controlable"],heroLead:"Conectamos sitios web, inteligencia artificial, anuncios y análisis en una arquitectura operativa para que ventas, marketing y propietarios trabajen con los mismos datos.",ctaTop:"Iniciar llamada estratégica",heroChips:["Flujo de plomo","Clasificación IA","Atribución"],heroChipValues:["Ingesta viva","DM + Bot","GA4 + CRM"],flowNodes:["Google/Meta/TikTok","Aterrizaje + Seguimiento","Calificación de IA","Canal de CRM"],heroBadges:["Seguimiento del lado del servidor","Puntuación de clientes potenciales","ROAS Ver"],servicesTitle:"Servicios como módulos del sistema",servicesDesc:"No es un bloque de tarjetas uniforme: un núcleo dominante, módulos flanqueantes y una capa de operaciones compacta.",trio:["Problema","System","Resultado"],detailsSummary:"Detalles de implementación",kpiBadgesTitle:"insignias de KPI",kpiBadgesDesc:"Cada desempeño se evalúa exclusivamente utilizando cifras clave que ventas y marketing pueden leer y controlar juntos.",signalLayerTitle:"Capa de señal",signalItems:["eventos GA4","Meta CAPI","Sincronización CRM","RGPD moda"],opsTitle:"Notas de operaciones",opsItems:["Cola de prueba semanal","Reasignación de presupuesto","Ranuras de control de calidad del embudo"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Recomendado",timelineTitle:"Cómo trabajamos",stepLabel:"Paso",controlTitle:"Sala de Control: Resultados en tiempo real",controlPanelTitle:"Arquitectura del tablero",controlPanelDesc:"Los datos del canal, las señales del embudo y el estado de CRM convergen en una sola vista. Las decisiones se toman a nivel de proceso en lugar de basarse en intuiciones.",miniCharts:["Volumen de clientes potenciales","Nivel de calidad","Velocidad de negociación"],kpiPanelTitle:"Contadores de KPI en vivo",kpiLabels:["Clientes potenciales calificados","Promedio Primera respuesta","Conduce a la cita","Clústeres de ROAS"],controlBadges:["Control de plomo","Control presupuestario","Control de embudo"],ctaBottom:"Solicite alcance para su sistema principal"},systems:{website:{title:"Motor de sitio web",problem:"Hay tráfico, pero los usuarios de dispositivos móviles abandonan antes del formulario.",system:"Landing/Multi-Page con GA4, Meta Pixel, seguimiento del lado del servidor, CRM y configuración GDPR.",outcome:"Cada cliente potencial se registra de manera rastreable y se asigna claramente a un canal.",kpis:["tasa de seguimiento","Completar formulario","Claridad de la fuente principal"],details:["Modo de consentimiento configurado correctamente","Llamadas y eventos de WhatsApp","Impulso de CRM en tiempo real"]},ai:{title:"Capa de calificación de IA",problem:"Demasiadas consultas no calificadas bloquean las ventas y el equipo telefónico.",system:"Chatbot AI, calificación automática, flujos de DM en WhatsApp/Instagram, automatización de correo electrónico, puntuación de clientes potenciales.",outcome:"El equipo prioriza los clientes potenciales relacionados con las ventas en lugar de una clasificación inicial que requiere mucho tiempo.",kpis:["Primer tiempo de respuesta","Participación de clientes potenciales calificados","Rendimiento del equipo de ventas"],details:["Rutas de aviso específicas de la industria","Recordatorios de ausencia","Priorización por puntuación"]},ads:{title:"Adquisición pagada",problem:"El presupuesto se distribuye entre los canales sin un ciclo de aprendizaje claro.",system:"Google Ads + Meta Ads + TikTok, pruebas A/B, lookalikes, seguimiento de conversiones y visualización de ROAS.",outcome:"El presupuesto fluye hacia campañas con alta calidad de clientes potenciales en lugar de solo volumen de clics.",kpis:["Costo por cliente potencial calificado","ROAS por campaña","Tasa de ganancias creativas"],details:["Grupos de campañas regionales","Variantes de forma en la prueba","Actualizaciones de audiencia basadas en señales"]},analytics:{title:"Análisis de control",problem:"Las decisiones se basan en capturas de pantalla de la plataforma en lugar de datos confiables del embudo.",system:"Panel de control de sala de control con vistas de canal, embudo y CRM en un nivel.",outcome:"Las decisiones semanales sobre presupuesto, optimización y escalamiento se pueden rastrear en función de los datos.",kpis:["Conduce a la cita","Llevar a cabo un trato","Velocidad de la tubería"],details:["Segmentación por región/servicio","Alertas de caída del embudo","Lista mensual de hipótesis"]}},packages:[{id:"motor de arranque",title:"Arrancador",scale:1,lead:"Para empresas locales que pasan de cero a una base de clientes potenciales mensurable.",items:["Embudo web + GA4","Metapíxeles + Consentimiento","Captura de CRM","Informes básicos"],effect:"Visión clara de las fuentes de clientes potenciales y un proceso inicial resiliente."},{id:"crecimiento",title:"Crecimiento",scale:2,recommended:!0,lead:"Para equipos con ventas activas que necesitan más clientes potenciales calificados.",items:["Metacampañas de Google +","Flujos de calificación de IA","Configuración de prueba A/B","Puntuación de clientes potenciales + Automatización"],effect:"Demanda más calificada con mejores tiempos de respuesta y priorización clara."},{id:"scale",title:"Scale",scale:3,lead:"Para empresas con múltiples regiones o grupos de servicios.",items:["Control multicanal","Atribución del lado del servidor","Capa de aplicación web de operaciones","Gobernanza de la sala de control"],effect:"Escalar a través de procesos y datos confiables en lugar de prueba y error manual."}],timeline:[["01","Llamada estratégica","El mercado objetivo, la oferta y el cuello de botella del cliente potencial están claramente definidos."],["02","Documento de alcance","Se fijan el plan de canales, el plan de seguimiento y las responsabilidades."],["03","Fase de construcción","Sitio web, automatizaciones e integraciones implementadas."],["04","Lanzamiento","Se activa el seguimiento de control de calidad, lanzamiento de campañas y flujos de CRM."],["05","Optimización","Pruebas semanales de creatividades, embudos y calificación."],["06","Escalado","Las rutas en funcionamiento se amplían a regiones/servicios."]]},SP=JSON.parse('{"copy":{"eyebrow":"Î—Î³ÎµÏ„Î¹ÎºÎ¬ ÏƒÏ…ÏƒÏ„Î®Î¼Î±Ï„Î± Î³Î¹Î± Ï„Î¿Ï€Î¹ÎºÎ­Ï‚ ÎµÏ„Î±Î¹ÏÎµÎ¯ÎµÏ‚ ÏƒÏ„Î· Î“ÎµÏÎ¼Î±Î½Î¯Î±","heroTitle":["Î‘Ï€ÏŒ Î¤ÏÎ¿Ï‡Î±Î¯Î±","Ï€Î¹ÏƒÏ„Î¿Ï€Î¿Î¹Î·Î¼Î­Î½Î¿Î¹ Ï…Ï€Î¿ÏˆÎ®Ï†Î¹Î¿Î¹ Ï€ÎµÎ»Î¬Ï„ÎµÏ‚","Ï‰Ï‚ ÎµÎ»ÎµÎ³Ï‡ÏŒÎ¼ÎµÎ½Î¿ ÏƒÏÏƒÏ„Î·Î¼Î±"],"heroLead":"Î£Ï…Î½Î´Î­Î¿Ï…Î¼Îµ Î¹ÏƒÏ„ÏŒÏ„Î¿Ï€Î¿, Ï„ÎµÏ‡Î½Î·Ï„Î® Î½Î¿Î·Î¼Î¿ÏƒÏÎ½Î·, Î´Î¹Î±Ï†Î·Î¼Î¯ÏƒÎµÎ¹Ï‚ ÎºÎ±Î¹ Î±Î½Î±Î»Ï…Ï„Î¹ÎºÎ¬ ÏƒÏ„Î¿Î¹Ï‡ÎµÎ¯Î± ÏƒÎµ Î¼Î¯Î± Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¹ÎºÎ® Î±ÏÏ‡Î¹Ï„ÎµÎºÏ„Î¿Î½Î¹ÎºÎ®, Î­Ï„ÏƒÎ¹ ÏŽÏƒÏ„Îµ Î¿Î¹ Ï€Ï‰Î»Î®ÏƒÎµÎ¹Ï‚, Ï„Î¿ Î¼Î¬ÏÎºÎµÏ„Î¹Î½Î³Îº ÎºÎ±Î¹ Î¿Î¹ Î¹Î´Î¹Î¿ÎºÏ„Î®Ï„ÎµÏ‚ Î½Î± Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¿ÏÎ½ Î¼Îµ Ï„Î± Î¯Î´Î¹Î± Î´ÎµÎ´Î¿Î¼Î­Î½Î±.","ctaTop":"ÎˆÎ½Î±ÏÎ¾Î· ÏƒÏ„ÏÎ±Ï„Î·Î³Î¹ÎºÎ®Ï‚ ÎºÎ»Î®ÏƒÎ·Ï‚","heroChips":["Î¡Î¿Î® Î¼Î¿Î»ÏÎ²Î´Î¿Ï…","AI Qualify","Î‘Î½Î±Ï†Î¿ÏÎ¬"],"heroChipValues":["Î–Ï‰Î½Ï„Î±Î½Î® Ï€ÏÏŒÏƒÎ»Î·ÏˆÎ·","DM + Bot","GA4 + CRM"],"flowNodes":["Google / Meta / TikTok","Î ÏÎ¿ÏƒÎ³ÎµÎ¯Ï‰ÏƒÎ· + Î Î±ÏÎ±ÎºÎ¿Î»Î¿ÏÎ¸Î·ÏƒÎ·","Î Î¹ÏƒÏ„Î¿Ï€Î¿Î¯Î·ÏƒÎ· AI","Î‘Î³Ï‰Î³ÏŒÏ‚ CRM"],"heroBadges":["Î Î±ÏÎ±ÎºÎ¿Î»Î¿ÏÎ¸Î·ÏƒÎ· Î±Ï€ÏŒ Ï„Î·Î½ Ï€Î»ÎµÏ…ÏÎ¬ Ï„Î¿Ï… Î´Î¹Î±ÎºÎ¿Î¼Î¹ÏƒÏ„Î®","Î’Î±Î¸Î¼Î¿Î»Î¿Î³Î¯Î± Î ÏÏ‰Ï„Î¿Î´Î¹ÎºÏŽÎ½","Î ÏÎ¿Î²Î¿Î»Î® ROAS"],"servicesTitle":"Î¥Ï€Î·ÏÎµÏƒÎ¯ÎµÏ‚ Ï‰Ï‚ Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¹ÎºÎ­Ï‚ Î¼Î¿Î½Î¬Î´ÎµÏ‚ ÏƒÏ…ÏƒÏ„Î®Î¼Î±Ï„Î¿Ï‚","servicesDesc":"Î”ÎµÎ½ ÎµÎ¯Î½Î±Î¹ Î­Î½Î± Î¿Î¼Î¿Î¹ÏŒÎ¼Î¿ÏÏ†Î¿ Î¼Ï€Î»Î¿Îº ÎºÎ¬ÏÏ„Î±Ï‚: Î­Î½Î±Ï‚ ÎºÏ…ÏÎ¯Î±ÏÏ‡Î¿Ï‚ Ï€Ï…ÏÎ®Î½Î±Ï‚, Ï€Î»ÎµÏ…ÏÎ¹ÎºÎ­Ï‚ Î¼Î¿Î½Î¬Î´ÎµÏ‚ ÎºÎ±Î¹ Î­Î½Î± ÏƒÏ…Î¼Ï€Î±Î³Î­Ï‚ ÎµÏ€Î¯Ï€ÎµÎ´Î¿ Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¹ÏŽÎ½.","trio":["Î ÏÏŒÎ²Î»Î·Î¼Î±","ÏƒÏÏƒÏ„Î·Î¼Î±","Î‘Ï€Î¿Ï„Î­Î»ÎµÏƒÎ¼Î±"],"detailsSummary":"Î›ÎµÏ€Ï„Î¿Î¼Î­ÏÎµÎ¹ÎµÏ‚ Ï…Î»Î¿Ï€Î¿Î¯Î·ÏƒÎ·Ï‚","kpiBadgesTitle":"Î£Î®Î¼Î±Ï„Î± KPI","kpiBadgesDesc":"ÎšÎ¬Î¸Îµ Î±Ï€ÏŒÎ´Î¿ÏƒÎ· Î±Î¾Î¹Î¿Î»Î¿Î³ÎµÎ¯Ï„Î±Î¹ Î±Ï€Î¿ÎºÎ»ÎµÎ¹ÏƒÏ„Î¹ÎºÎ¬ Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹ÏŽÎ½Ï„Î±Ï‚ Î²Î±ÏƒÎ¹ÎºÎ¬ ÏƒÏ„Î¿Î¹Ï‡ÎµÎ¯Î± Ï€Î¿Ï… Î¿Î¹ Ï€Ï‰Î»Î®ÏƒÎµÎ¹Ï‚ ÎºÎ±Î¹ Ï„Î¿ Î¼Î¬ÏÎºÎµÏ„Î¹Î½Î³Îº Î¼Ï€Î¿ÏÎ¿ÏÎ½ Î½Î± Î´Î¹Î±Î²Î¬ÏƒÎ¿Ï…Î½ ÎºÎ±Î¹ Î½Î± ÎµÎ»Î­Î³Î¾Î¿Ï…Î½ Î¼Î±Î¶Î¯.","signalLayerTitle":"Î•Ï€Î¯Ï€ÎµÎ´Î¿ ÏƒÎ®Î¼Î±Ï„Î¿Ï‚","signalItems":["Î“ÎµÎ³Î¿Î½ÏŒÏ„Î± GA4","Meta CAPI","CRM Sync","ÎœÏŒÎ´Î± GDPR"],"opsTitle":"Î£Î·Î¼ÎµÎ¹ÏŽÏƒÎµÎ¹Ï‚ Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¹ÏŽÎ½","opsItems":["Î•Î²Î´Î¿Î¼Î±Î´Î¹Î±Î¯Î± Î¿Ï…ÏÎ¬ Î´Î¿ÎºÎ¹Î¼Î®Ï‚","Î‘Î½Î±ÎºÎ±Ï„Î±Î½Î¿Î¼Î® Î ÏÎ¿Ï‹Ï€Î¿Î»Î¿Î³Î¹ÏƒÎ¼Î¿Ï","ÎšÎ¿Ï…Î»Î¿Ï‡Î­ÏÎ·Î´ÎµÏ‚ QA Funnel"],"packagesTitle":"Pakete in SaaS-Logik","recommended":"Î£Ï…Î½Î¹ÏƒÏ„Î¬Ï„Î±Î¹","timelineTitle":"Î ÏŽÏ‚ Î´Î¿Ï…Î»ÎµÏÎ¿Ï…Î¼Îµ","stepLabel":"Î’Î®Î¼Î±","controlTitle":"Î§ÏŽÏÎ¿Ï‚ ÎµÎ»Î­Î³Ï‡Î¿Ï…: Î‘Ï€Î¿Ï„ÎµÎ»Î­ÏƒÎ¼Î±Ï„Î± ÏƒÎµ Ï€ÏÎ±Î³Î¼Î±Ï„Î¹ÎºÏŒ Ï‡ÏÏŒÎ½Î¿","controlPanelTitle":"Î‘ÏÏ‡Î¹Ï„ÎµÎºÏ„Î¿Î½Î¹ÎºÎ® Ï„Î±Î¼Ï€Î»ÏŒ","controlPanelDesc":"Î¤Î± Î´ÎµÎ´Î¿Î¼Î­Î½Î± ÎºÎ±Î½Î±Î»Î¹Î¿Ï, Ï„Î± ÏƒÎ®Î¼Î±Ï„Î± Î´Î¹Î¿Ï‡Î­Ï„ÎµÏ…ÏƒÎ·Ï‚ ÎºÎ±Î¹ Î· ÎºÎ±Ï„Î¬ÏƒÏ„Î±ÏƒÎ· CRM ÏƒÏ…Î³ÎºÎ»Î¯Î½Î¿Ï…Î½ ÏƒÎµ Î¼Î¯Î± Ï€ÏÎ¿Î²Î¿Î»Î®. ÎŸÎ¹ Î±Ï€Î¿Ï†Î¬ÏƒÎµÎ¹Ï‚ Î»Î±Î¼Î²Î¬Î½Î¿Î½Ï„Î±Î¹ ÏƒÎµ ÎµÏ€Î¯Ï€ÎµÎ´Î¿ Î´Î¹Î±Î´Î¹ÎºÎ±ÏƒÎ¯Î±Ï‚ Î±Î½Ï„Î¯ Î½Î± Î²Î±ÏƒÎ¯Î¶Î¿Î½Ï„Î±Î¹ ÏƒÏ„Î·Î½ Î±Î¯ÏƒÎ¸Î·ÏƒÎ· Ï„Î¿Ï… ÎµÎ½Ï„Î­ÏÎ¿Ï….","miniCharts":["ÎŒÎ³ÎºÎ¿Ï‚ Î¼Î¿Î»ÏÎ²Î´Î¿Ï…","Î’Î±Î¸Î¼Î¿Î»Î¿Î³Î¯Î± Ï€Î¿Î¹ÏŒÏ„Î·Ï„Î±Ï‚","Î¤Î±Ï‡ÏÏ„Î·Ï„Î± ÏƒÏ…Î¼Ï†Ï‰Î½Î¯Î±Ï‚"],"kpiPanelTitle":"Î–Ï‰Î½Ï„Î±Î½Î¿Î¯ Î¼ÎµÏ„ÏÎ·Ï„Î­Ï‚ KPI","kpiLabels":["Î Î¹ÏƒÏ„Î¿Ï€Î¿Î¹Î·Î¼Î­Î½Î¿Î¹ Î´Ï…Î½Î·Ï„Î¹ÎºÎ¿Î¯ Ï€ÎµÎ»Î¬Ï„ÎµÏ‚","ÎœÎ­ÏƒÎ¿Ï‚ ÏŒÏÎ¿Ï‚ Î ÏÏŽÏ„Î· Î±Ï€Î¬Î½Ï„Î·ÏƒÎ·","ÎŸÎ´Î·Î³Î®ÏƒÏ„Îµ ÏƒÏ„Î¿ ÏÎ±Î½Ï„ÎµÎ²Î¿Ï","ÏƒÏ…ÏƒÏ„Î¬Î´ÎµÏ‚ Î±Ï€ÏŒÎ´Î¿ÏƒÎ·Ï‚ Î´Î¹Î±Ï†Î·Î¼Î¹ÏƒÏ„Î¹ÎºÎ®Ï‚ ÎµÏ€Î­Î½Î´Ï…ÏƒÎ·Ï‚ (ROAS)."],"controlBadges":["ÎˆÎ»ÎµÎ³Ï‡Î¿Ï‚ Î·Î»ÎµÎºÏ„ÏÎ¿Î´Î¯Î¿Ï…","ÎˆÎ»ÎµÎ³Ï‡Î¿Ï‚ Ï€ÏÎ¿Ï‹Ï€Î¿Î»Î¿Î³Î¹ÏƒÎ¼Î¿Ï","ÎˆÎ»ÎµÎ³Ï‡Î¿Ï‚ Î´Î¹Î¿Ï‡Î­Ï„ÎµÏ…ÏƒÎ·Ï‚"],"ctaBottom":"Î‘Î¯Ï„Î·Î¼Î± Ï€ÎµÎ´Î¯Î¿Ï… ÎµÏ†Î±ÏÎ¼Î¿Î³Î®Ï‚ Î³Î¹Î± Ï„Î¿ ÏƒÏÏƒÏ„Î·Î¼Î¬ ÏƒÎ±Ï‚"},"systems":{"website":{"title":"ÎœÎ·Ï‡Î±Î½Î® Î¹ÏƒÏ„ÏŒÏ„Î¿Ï€Î¿Ï…","problem":"Î¥Ï€Î¬ÏÏ‡ÎµÎ¹ ÎµÏ€Î¹ÏƒÎºÎµÏˆÎ¹Î¼ÏŒÏ„Î·Ï„Î±, Î±Î»Î»Î¬ Î¿Î¹ Ï‡ÏÎ®ÏƒÏ„ÎµÏ‚ ÎºÎ¹Î½Î·Ï„ÏŽÎ½ ÎµÎ³ÎºÎ±Ï„Î±Î»ÎµÎ¯Ï€Î¿Ï…Î½ Ï„Î· Ï†ÏŒÏÎ¼Î±.","system":"Landing/Multi-Page Î¼Îµ GA4, Meta Pixel, Ï€Î±ÏÎ±ÎºÎ¿Î»Î¿ÏÎ¸Î·ÏƒÎ· Î±Ï€ÏŒ Ï„Î·Î½ Ï€Î»ÎµÏ…ÏÎ¬ Ï„Î¿Ï… Î´Î¹Î±ÎºÎ¿Î¼Î¹ÏƒÏ„Î®, CRM ÎºÎ±Î¹ ÏÏÎ¸Î¼Î¹ÏƒÎ· GDPR.","outcome":"ÎšÎ¬Î¸Îµ Ï…Ï€Î¿ÏˆÎ®Ï†Î¹Î¿Ï‚ Ï€ÎµÎ»Î¬Ï„Î·Ï‚ ÎºÎ±Ï„Î±Î³ÏÎ¬Ï†ÎµÏ„Î±Î¹ Î¼Îµ Î±Î½Î¹Ï‡Î½ÎµÏÏƒÎ¹Î¼Î¿ Ï„ÏÏŒÏ€Î¿ ÎºÎ±Î¹ ÎµÎºÏ‡Ï‰ÏÎµÎ¯Ï„Î±Î¹ ÏƒÎ±Ï†ÏŽÏ‚ ÏƒÎµ Î­Î½Î± ÎºÎ±Î½Î¬Î»Î¹.","kpis":["Ï€Î¿ÏƒÎ¿ÏƒÏ„ÏŒ Ï€Î±ÏÎ±ÎºÎ¿Î»Î¿ÏÎ¸Î·ÏƒÎ·Ï‚","Î£Ï…Î¼Ï€Î»Î®ÏÏ‰ÏƒÎ· ÎµÎ½Ï„ÏÏ€Î¿Ï…","Î”Î¹Î±ÏÎ³ÎµÎ¹Î± Ï€Î·Î³Î®Ï‚ Î¼Î¿Î»ÏÎ²Î´Î¿Ï…"],"details":["Î— Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¯Î± ÏƒÏ…Î½Î±Î¯Î½ÎµÏƒÎ·Ï‚ Î´Î¹Î±Î¼Î¿ÏÏ†ÏŽÎ¸Î·ÎºÎµ ÏƒÏ‰ÏƒÏ„Î¬","Î•ÎºÎ´Î·Î»ÏŽÏƒÎµÎ¹Ï‚ ÎºÎ»Î®ÏƒÎµÏ‰Î½ ÎºÎ±Î¹ WhatsApp","CRM push ÏƒÎµ Ï€ÏÎ±Î³Î¼Î±Ï„Î¹ÎºÏŒ Ï‡ÏÏŒÎ½Î¿"]},"ai":{"title":"Î•Ï€Î¯Ï€ÎµÎ´Î¿ Ï€Î¹ÏƒÏ„Î¿Ï€Î¿Î¯Î·ÏƒÎ·Ï‚ AI","problem":"Î Î¬ÏÎ± Ï€Î¿Î»Î»Î­Ï‚ Î±ÎºÎ±Ï„Î¬Î»Î»Î·Î»ÎµÏ‚ Î­ÏÎµÏ…Î½ÎµÏ‚ Î¼Ï€Î»Î¿ÎºÎ¬ÏÎ¿Ï…Î½ Ï„Î¹Ï‚ Ï€Ï‰Î»Î®ÏƒÎµÎ¹Ï‚ ÎºÎ±Î¹ Ï„Î·Î½ Ï„Î·Î»ÎµÏ†Ï‰Î½Î¹ÎºÎ® Î¿Î¼Î¬Î´Î±.","system":"AI chatbot, Î±Ï…Ï„ÏŒÎ¼Î±Ï„Î· Ï€Î¹ÏƒÏ„Î¿Ï€Î¿Î¯Î·ÏƒÎ·, ÏÎ¿Î­Ï‚ DM ÏƒÎµ WhatsApp/Instagram, Î±Ï…Ï„Î¿Î¼Î±Ï„Î¿Ï€Î¿Î¯Î·ÏƒÎ· email, Î²Î±Î¸Î¼Î¿Î»Î¿Î³Î¯Î± Î´Ï…Î½Î·Ï„Î¹ÎºÎ¿Ï Ï€ÎµÎ»Î¬Ï„Î·.","outcome":"Î— Î¿Î¼Î¬Î´Î± Î´Î¯Î½ÎµÎ¹ Ï€ÏÎ¿Ï„ÎµÏÎ±Î¹ÏŒÏ„Î·Ï„Î± ÏƒÏ„Î¿Ï…Ï‚ Î´Ï…Î½Î·Ï„Î¹ÎºÎ¿ÏÏ‚ Ï€ÎµÎ»Î¬Ï„ÎµÏ‚ Ï€Î¿Ï… ÏƒÏ‡ÎµÏ„Î¯Î¶Î¿Î½Ï„Î±Î¹ Î¼Îµ Ï„Î¹Ï‚ Ï€Ï‰Î»Î®ÏƒÎµÎ¹Ï‚ Î±Î½Ï„Î¯ Ï„Î·Ï‚ Ï‡ÏÎ¿Î½Î¿Î²ÏŒÏÎ±Ï‚ Î±ÏÏ‡Î¹ÎºÎ®Ï‚ Ï„Î±Î¾Î¹Î½ÏŒÎ¼Î·ÏƒÎ·Ï‚.","kpis":["Î ÏÏŽÏ„Î¿Ï‚ Ï‡ÏÏŒÎ½Î¿Ï‚ Î±Ï€ÏŒÎºÏÎ¹ÏƒÎ·Ï‚","Î Î¹ÏƒÏ„Î¿Ï€Î¿Î¹Î·Î¼Î­Î½Î¿ Î¼ÎµÏÎ¯Î´Î¹Î¿ Î´Ï…Î½Î·Ï„Î¹ÎºÎ¿Ï Ï€ÎµÎ»Î¬Ï„Î·","Î”Î¹Î±ÎºÎ¯Î½Î·ÏƒÎ· Ï„Î·Ï‚ ÎŸÎ¼Î¬Î´Î±Ï‚ Î Ï‰Î»Î®ÏƒÎµÏ‰Î½"],"details":["Î”Î¹Î±Î´ÏÎ¿Î¼Î­Ï‚ Ï€ÏÎ¿Ï„ÏÎ¿Ï€Î®Ï‚ Î³Î¹Î± ÏƒÏ…Î³ÎºÎµÎºÏÎ¹Î¼Î­Î½Î¿ ÎºÎ»Î¬Î´Î¿","Î§Ï‰ÏÎ¯Ï‚ ÎµÎ¼Ï†Î¬Î½Î¹ÏƒÎ· Ï…Ï€ÎµÎ½Î¸Ï…Î¼Î¯ÏƒÎµÏ‰Î½","Î ÏÎ¿Ï„ÎµÏÎ±Î¹ÏŒÏ„Î·Ï„Î± Î±Î½Î¬ Î²Î±Î¸Î¼Î¿Î»Î¿Î³Î¯Î±"]},"ads":{"title":"Î‘Ï€ÏŒÎºÏ„Î·ÏƒÎ· ÎµÏ€Î¯ Ï€Î»Î·ÏÏ‰Î¼Î®","problem":"ÎŸ Ï€ÏÎ¿Ï‹Ï€Î¿Î»Î¿Î³Î¹ÏƒÎ¼ÏŒÏ‚ ÎºÎ±Ï„Î±Î½Î­Î¼ÎµÏ„Î±Î¹ Î¼ÎµÏ„Î±Î¾Ï Ï„Ï‰Î½ ÎºÎ±Î½Î±Î»Î¹ÏŽÎ½ Ï‡Ï‰ÏÎ¯Ï‚ ÏƒÎ±Ï†Î® Î²ÏÏŒÏ‡Î¿ ÎµÎºÎ¼Î¬Î¸Î·ÏƒÎ·Ï‚.","system":"Google Ads + Meta Ads + TikTok, Î´Î¿ÎºÎ¹Î¼Î­Ï‚ A/B, ÎµÎ¼Ï†Î±Î½Î¯ÏƒÎµÎ¹Ï‚, Ï€Î±ÏÎ±ÎºÎ¿Î»Î¿ÏÎ¸Î·ÏƒÎ· Î¼ÎµÏ„Î±Ï„ÏÎ¿Ï€ÏŽÎ½ ÎºÎ±Î¹ Ï€ÏÎ¿Î²Î¿Î»Î® Î‘Ï€ÏŒÎ´Î¿ÏƒÎ·Ï‚ Î”Î¹Î±Ï†Î·Î¼Î¹ÏƒÏ„Î¹ÎºÎ®Ï‚ Î•Ï€Î­Î½Î´Ï…ÏƒÎ·Ï‚.","outcome":"ÎŸ Ï€ÏÎ¿Ï‹Ï€Î¿Î»Î¿Î³Î¹ÏƒÎ¼ÏŒÏ‚ ÏÎ­ÎµÎ¹ ÏƒÎµ ÎºÎ±Î¼Ï€Î¬Î½Î¹ÎµÏ‚ Î¼Îµ Ï…ÏˆÎ·Î»Î® Ï€Î¿Î¹ÏŒÏ„Î·Ï„Î± Î´Ï…Î½Î·Ï„Î¹ÎºÎ¿Ï Ï€ÎµÎ»Î¬Ï„Î· Î±Î½Ï„Î¯ Î³Î¹Î± ÎºÎ±Î¸Î±ÏÏŒ ÏŒÎ³ÎºÎ¿ ÎºÎ»Î¹Îº.","kpis":["ÎšÏŒÏƒÏ„Î¿Ï‚ Î±Î½Î¬ ÎºÎ±Ï„Î¬Î»Î»Î·Î»Î¿ Ï…Ï€Î¿ÏˆÎ®Ï†Î¹Î¿ Ï€ÎµÎ»Î¬Ï„Î·","Î‘Ï€ÏŒÎ´Î¿ÏƒÎ· Î”Î¹Î±Ï†Î·Î¼Î¹ÏƒÏ„Î¹ÎºÎ®Ï‚ Î•Ï€Î­Î½Î´Ï…ÏƒÎ·Ï‚ ÎºÎ±Ï„Î¬ Campaign","Î Î¿ÏƒÎ¿ÏƒÏ„ÏŒ ÎºÎ­ÏÎ´Î¿Ï…Ï‚ Î´Î·Î¼Î¹Î¿Ï…ÏÎ³Î¹ÎºÎ¿Ï"],"details":["Î ÎµÏÎ¹Ï†ÎµÏÎµÎ¹Î±ÎºÎ­Ï‚ Î¿Î¼Î¬Î´ÎµÏ‚ ÎµÎºÏƒÏ„ÏÎ±Ï„ÎµÎ¹ÏŽÎ½","Î Î±ÏÎ±Î»Î»Î±Î³Î­Ï‚ ÏƒÏ‡Î®Î¼Î±Ï„Î¿Ï‚ ÏƒÏ„Î· Î´Î¿ÎºÎ¹Î¼Î®","Î•Î½Î·Î¼ÎµÏÏŽÏƒÎµÎ¹Ï‚ ÎºÎ¿Î¹Î½Î¿Ï Î²Î¬ÏƒÎµÎ¹ ÏƒÎ®Î¼Î±Ï„Î¿Ï‚"]},"analytics":{"title":"Control Analytics","problem":"ÎŸÎ¹ Î±Ï€Î¿Ï†Î¬ÏƒÎµÎ¹Ï‚ Î²Î±ÏƒÎ¯Î¶Î¿Î½Ï„Î±Î¹ ÏƒÎµ ÏƒÏ„Î¹Î³Î¼Î¹ÏŒÏ„Ï…Ï€Î± Î¿Î¸ÏŒÎ½Î·Ï‚ Ï€Î»Î±Ï„Ï†ÏŒÏÎ¼Î±Ï‚ Î±Î½Ï„Î¯ ÏƒÎµ Î±Î¾Î¹ÏŒÏ€Î¹ÏƒÏ„Î± Î´ÎµÎ´Î¿Î¼Î­Î½Î± Î´Î¹Î¿Ï‡Î­Ï„ÎµÏ…ÏƒÎ·Ï‚.","system":"Î Î¯Î½Î±ÎºÎ±Ï‚ ÎµÎ»Î­Î³Ï‡Î¿Ï… Î´Ï‰Î¼Î±Ï„Î¯Î¿Ï… Î¼Îµ Ï€ÏÎ¿Î²Î¿Î»Î­Ï‚ ÎºÎ±Î½Î±Î»Î¹Î¿Ï, Î´Î¹Î¿Ï‡Î­Ï„ÎµÏ…ÏƒÎ·Ï‚ ÎºÎ±Î¹ CRM ÏƒÎµ Î­Î½Î± ÎµÏ€Î¯Ï€ÎµÎ´Î¿.","outcome":"ÎŸÎ¹ ÎµÎ²Î´Î¿Î¼Î±Î´Î¹Î±Î¯ÎµÏ‚ Î±Ï€Î¿Ï†Î¬ÏƒÎµÎ¹Ï‚ ÏƒÏ‡ÎµÏ„Î¹ÎºÎ¬ Î¼Îµ Ï„Î¿Î½ Ï€ÏÎ¿Ï‹Ï€Î¿Î»Î¿Î³Î¹ÏƒÎ¼ÏŒ, Ï„Î· Î²ÎµÎ»Ï„Î¹ÏƒÏ„Î¿Ï€Î¿Î¯Î·ÏƒÎ· ÎºÎ±Î¹ Ï„Î·Î½ ÎºÎ»Î¹Î¼Î¬ÎºÏ‰ÏƒÎ· ÎµÎ¯Î½Î±Î¹ Î±Î½Î¹Ï‡Î½ÎµÏÏƒÎ¹Î¼ÎµÏ‚ Î²Î¬ÏƒÎµÎ¹ Î´ÎµÎ´Î¿Î¼Î­Î½Ï‰Î½.","kpis":["ÎŸÎ´Î®Î³Î·ÏƒÎµ ÏƒÏ„Î¿ ÏÎ±Î½Ï„ÎµÎ²Î¿Ï","ÎŸÎ´Î®Î³Î·ÏƒÎµ ÏƒÎµ ÏƒÏ…Î¼Ï†Ï‰Î½Î¯Î±","Î¤Î±Ï‡ÏÏ„Î·Ï„Î± Î±Î³Ï‰Î³Î¿Ï"],"details":["Î¤Î¼Î·Î¼Î±Ï„Î¿Ï€Î¿Î¯Î·ÏƒÎ· Î±Î½Î¬ Ï€ÎµÏÎ¹Î¿Ï‡Î®/Ï…Ï€Î·ÏÎµÏƒÎ¯Î±","Î•Î¹Î´Î¿Ï€Î¿Î¹Î®ÏƒÎµÎ¹Ï‚ Ï€Ï„ÏŽÏƒÎ·Ï‚ Î´Î¹Î¿Ï‡Î­Ï„ÎµÏ…ÏƒÎ·Ï‚","ÎœÎ·Î½Î¹Î±Î¯Î± Î»Î¯ÏƒÏ„Î± Ï…Ï€Î¿Î¸Î­ÏƒÎµÏ‰Î½"]}},"packages":[{"id":"Î¼Î¯Î¶Î±","title":"ÎœÎ¯Î¶Î±","scale":1,"lead":"Î“Î¹Î± Ï„Î¿Ï€Î¹ÎºÎ­Ï‚ ÎµÏ€Î¹Ï‡ÎµÎ¹ÏÎ®ÏƒÎµÎ¹Ï‚ Ï€Î¿Ï… Ï€Î·Î³Î±Î¯Î½Î¿Ï…Î½ Î±Ï€ÏŒ Ï„Î¿ Î¼Î·Î´Î­Î½ ÏƒÎµ Î¼Î¹Î± Î¼ÎµÏ„ÏÎ®ÏƒÎ¹Î¼Î· Î²Î¬ÏƒÎ· Î´Ï…Î½Î·Ï„Î¹ÎºÏŽÎ½ Ï€ÎµÎ»Î±Ï„ÏŽÎ½.","items":["Î”Î¹Î¿Ï‡Î­Ï„ÎµÏ…ÏƒÎ· Î™ÏƒÏ„Î¿Ï + GA4","Meta Pixels + Consent","Î›Î®ÏˆÎ· CRM","Î’Î±ÏƒÎ¹ÎºÎ® Î±Î½Î±Ï†Î¿ÏÎ¬"],"effect":"ÎšÎ±Î¸Î±ÏÎ® Î¬Ï€Î¿ÏˆÎ· Ï„Ï‰Î½ Ï€Î·Î³ÏŽÎ½ Î¼Î¿Î»ÏÎ²Î´Î¿Ï… ÎºÎ±Î¹ Î¼Î¹Î± Î±Î½Î¸ÎµÎºÏ„Î¹ÎºÎ® Î±ÏÏ‡Î¹ÎºÎ® Î´Î¹Î±Î´Î¹ÎºÎ±ÏƒÎ¯Î±."},{"id":"Î±Î½Î¬Ï€Ï„Ï…Î¾Î·","title":"Î‘Î½Î¬Ï€Ï„Ï…Î¾Î·","scale":2,"recommended":true,"lead":"Î“Î¹Î± Î¿Î¼Î¬Î´ÎµÏ‚ Î¼Îµ ÎµÎ½ÎµÏÎ³Î­Ï‚ Ï€Ï‰Î»Î®ÏƒÎµÎ¹Ï‚ Ï€Î¿Ï… Ï‡ÏÎµÎ¹Î¬Î¶Î¿Î½Ï„Î±Î¹ Ï€ÎµÏÎ¹ÏƒÏƒÏŒÏ„ÎµÏÎ¿Ï…Ï‚ ÎºÎ±Ï„Î¬Î»Î»Î·Î»Î¿Ï…Ï‚ Î´Ï…Î½Î·Ï„Î¹ÎºÎ¿ÏÏ‚ Ï€ÎµÎ»Î¬Ï„ÎµÏ‚.","items":["ÎšÎ±Î¼Ï€Î¬Î½Î¹ÎµÏ‚ Google + Meta","Î¡Î¿Î­Ï‚ Ï€Î¹ÏƒÏ„Î¿Ï€Î¿Î¯Î·ÏƒÎ·Ï‚ AI","Î¡ÏÎ¸Î¼Î¹ÏƒÎ· Î´Î¿ÎºÎ¹Î¼Î®Ï‚ A/B","Î’Î±Î¸Î¼Î¿Î»Î¿Î³Î¯Î± Î´Ï…Î½Î¬Î¼ÎµÏ‰Î½ + Î‘Ï…Ï„Î¿Î¼Î±Ï„Î¹ÏƒÎ¼ÏŒÏ‚"],"effect":"Î Î¹Î¿ ÎºÎ±Ï„Î¬Î»Î»Î·Î»Î· Î¶Î®Ï„Î·ÏƒÎ· Î¼Îµ ÎºÎ±Î»ÏÏ„ÎµÏÎ¿Ï…Ï‚ Ï‡ÏÏŒÎ½Î¿Ï…Ï‚ Î±Ï€ÏŒÎºÏÎ¹ÏƒÎ·Ï‚ ÎºÎ±Î¹ ÏƒÎ±Ï†Î® Î¹ÎµÏÎ¬ÏÏ‡Î·ÏƒÎ· Ï€ÏÎ¿Ï„ÎµÏÎ±Î¹Î¿Ï„Î®Ï„Ï‰Î½."},{"id":"ÎºÎ»Î¯Î¼Î±ÎºÎ±","title":"ÎšÎ»Î¯Î¼Î±ÎºÎ±","scale":3,"lead":"Î“Î¹Î± ÎµÏ„Î±Î¹ÏÎµÎ¯ÎµÏ‚ Î¼Îµ Ï€Î¿Î»Î»Î­Ï‚ Ï€ÎµÏÎ¹Î¿Ï‡Î­Ï‚ Î® Î¿Î¼Î¬Î´ÎµÏ‚ Ï…Ï€Î·ÏÎµÏƒÎ¹ÏŽÎ½.","items":["ÎˆÎ»ÎµÎ³Ï‡Î¿Ï‚ Ï€Î¿Î»Î»Î±Ï€Î»ÏŽÎ½ ÎºÎ±Î½Î±Î»Î¹ÏŽÎ½","Î‘Ï€ÏŒÎ´Î¿ÏƒÎ· Î±Ï€ÏŒ Ï„Î·Î½ Ï€Î»ÎµÏ…ÏÎ¬ Ï„Î¿Ï… Î´Î¹Î±ÎºÎ¿Î¼Î¹ÏƒÏ„Î®","Î•Ï€Î¯Ï€ÎµÎ´Î¿ ÎµÏ†Î±ÏÎ¼Î¿Î³Î®Ï‚ Î™ÏƒÏ„Î¿Ï Ops","Î”Î¹Î±ÎºÏ…Î²Î­ÏÎ½Î·ÏƒÎ· Ï„Î·Ï‚ Î±Î¯Î¸Î¿Ï…ÏƒÎ±Ï‚ ÎµÎ»Î­Î³Ï‡Î¿Ï…"],"effect":"ÎšÎ»Î¹Î¼Î¬ÎºÏ‰ÏƒÎ· Î¼Î­ÏƒÏ‰ Î´Î¹Î±Î´Î¹ÎºÎ±ÏƒÎ¹ÏŽÎ½ ÎºÎ±Î¹ Î±Î¾Î¹ÏŒÏ€Î¹ÏƒÏ„Ï‰Î½ Î´ÎµÎ´Î¿Î¼Î­Î½Ï‰Î½ Î±Î½Ï„Î¯ Î³Î¹Î± Î¼Î· Î±Ï…Ï„ÏŒÎ¼Î±Ï„Î· Î´Î¿ÎºÎ¹Î¼Î® ÎºÎ±Î¹ ÏƒÏ†Î¬Î»Î¼Î±."}],"timeline":[["01","Î£Ï„ÏÎ±Ï„Î·Î³Î¹ÎºÎ® ÎºÎ»Î®ÏƒÎ·","Î— Î±Î³Î¿ÏÎ¬-ÏƒÏ„ÏŒÏ‡Î¿Ï‚, Î· Ï€ÏÎ¿ÏƒÏ†Î¿ÏÎ¬ ÎºÎ±Î¹ Ï„Î¿ ÏƒÎ·Î¼ÎµÎ¯Î¿ ÏƒÏ…Î¼Ï†ÏŒÏÎ·ÏƒÎ·Ï‚ ÎµÎ¯Î½Î±Î¹ ÏƒÎ±Ï†ÏŽÏ‚ ÎºÎ±Î¸Î¿ÏÎ¹ÏƒÎ¼Î­Î½Î±."],["02","ÎˆÎ³Î³ÏÎ±Ï†Î¿ Ï€ÎµÎ´Î¯Î¿Ï…","Î¤Î¿ ÏƒÏ‡Î­Î´Î¹Î¿ ÎºÎ±Î½Î±Î»Î¹Î¿Ï, Ï„Î¿ ÏƒÏ‡Î­Î´Î¹Î¿ Ï€Î±ÏÎ±ÎºÎ¿Î»Î¿ÏÎ¸Î·ÏƒÎ·Ï‚ ÎºÎ±Î¹ Î¿Î¹ ÎµÏ…Î¸ÏÎ½ÎµÏ‚ Î­Ï‡Î¿Ï…Î½ Î´Î¹Î¿ÏÎ¸Ï‰Î¸ÎµÎ¯."],["03","Î¦Î¬ÏƒÎ· ÎºÎ±Ï„Î±ÏƒÎºÎµÏ…Î®Ï‚","Î™ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î±, Î±Ï…Ï„Î¿Î¼Î±Ï„Î¹ÏƒÎ¼Î¿Î¯ ÎºÎ±Î¹ ÎµÎ½ÏƒÏ‰Î¼Î±Ï„ÏŽÏƒÎµÎ¹Ï‚ Ï…Î»Î¿Ï€Î¿Î¹Î¿ÏÎ½Ï„Î±Î¹."],["04","Î•ÎºÎºÎ¯Î½Î·ÏƒÎ·","Î Î±ÏÎ±ÎºÎ¿Î»Î¿ÏÎ¸Î·ÏƒÎ· QA, ÎµÎºÎºÎ¯Î½Î·ÏƒÎ· ÎºÎ±Î¼Ï€Î¬Î½Î¹Î±Ï‚ ÎºÎ±Î¹ ÏÎ¿Î­Ï‚ CRM ÎµÎ¼Ï†Î±Î½Î¯Î¶Î¿Î½Ï„Î±Î¹ Î¶Ï‰Î½Ï„Î±Î½Î¬."],["05","Î’ÎµÎ»Ï„Î¹ÏƒÏ„Î¿Ï€Î¿Î¯Î·ÏƒÎ·","Î•Î²Î´Î¿Î¼Î±Î´Î¹Î±Î¯ÎµÏ‚ Î´Î¿ÎºÎ¹Î¼Î­Ï‚ Î³Î¹Î± Î´Î·Î¼Î¹Î¿Ï…ÏÎ³Î¹ÎºÎ¬, Î´Î¹Î¿Ï‡ÎµÏ„ÎµÏÏƒÎµÎ¹Ï‚ ÎºÎ±Î¹ Ï€Î¹ÏƒÏ„Î¿Ï€Î¿Î¯Î·ÏƒÎ·."],["06","ÎšÎ»Î¹Î¼Î¬ÎºÏ‰ÏƒÎ·","ÎŸÎ¹ Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¹ÎºÎ­Ï‚ Î´Î¹Î±Î´ÏÎ¿Î¼Î­Ï‚ ÎµÏ€ÎµÎºÏ„ÎµÎ¯Î½Î¿Î½Ï„Î±Î¹ ÏƒÎµ Ï€ÎµÏÎ¹Î¿Ï‡Î­Ï‚/Ï…Ï€Î·ÏÎµÏƒÎ¯ÎµÏ‚."]]}'),kP={copy:{eyebrow:"Sisteme de conducere pentru companiile locale din Germania",heroTitle:["Din Trafic","clienÈ›i potenÈ›iali calificaÈ›i","ca sistem controlabil"],heroLead:"Conectăm site-ul web, AI, reclamele și analizele într-o singură arhitectură operațională, astfel încât vânzările, marketingul și proprietarii să lucreze cu aceleași date.",ctaTop:"Începe apelul strategic",heroChips:["Flux de plumb","AI Calify","Atribuire"],heroChipValues:["Aportul live","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Aterizare + UrmÄƒrire","Calificare AI","CRM Pipeline"],heroBadges:["UrmÄƒrire pe partea serverului","Punctajul potenÈ›ial","Vizualizare ROAS"],servicesTitle:"Servicii ca module de sistem",servicesDesc:"Nu este un bloc de carduri uniform: un nucleu dominant, module de flancare È™i un strat de operaÈ›iuni compact.",trio:["ProblemÄƒ","System","Rezultat"],detailsSummary:"Detalii de implementare",kpiBadgesTitle:"insigne KPI",kpiBadgesDesc:"Fiecare performanță este evaluată exclusiv folosind cifre cheie pe care vânzările și marketingul le pot citi și controla împreună.",signalLayerTitle:"Strat de semnal",signalItems:["evenimente GA4","Meta CAPI","Sincronizare CRM","GDPR moda"],opsTitle:"Note operaÈ›ionale",opsItems:["Coada de test săptămânală","Realocarea bugetului","Sloturi QA canal"],packagesTitle:"pachete în logica SaaS",recommended:"Recomandat",timelineTitle:"Cum lucrÄƒm",stepLabel:"Pas",controlTitle:"Camera de control: Rezultate în timp real",controlPanelTitle:"Arhitectura tabloului de bord",controlPanelDesc:"Datele canalului, semnalele canalului și starea CRM converg într-o singură vizualizare. Deciziile sunt luate la nivel de proces în loc să se bazeze pe sentimente.",miniCharts:["Volumul de plumb","Scor de calitate","Deal Velocity"],kpiPanelTitle:"Contoare KPI live",kpiLabels:["Clienti potentiali calificati","medie Primul rÄƒspuns","Conduce la programare","clustere ROAS"],controlBadges:["Control plumb","Controlul bugetului","Control pâlnie"],ctaBottom:"SolicitaÈ›i domeniul de aplicare pentru sistemul dvs. principal"},systems:{website:{title:"Motor de site",problem:"Trafic există, dar utilizatorii de telefonie mobilă abandonează înainte de formular.",system:"Landing/Multi-Page cu GA4, Meta Pixel, urmÄƒrire pe server, configurare CRM È™i GDPR.",outcome:"Fiecare client potențial este înregistrat într-o manieră urmăribilă și atribuit în mod clar unui canal.",kpis:["rata de urmÄƒrire","Completarea formularului","Claritatea sursei potenÈ›iale"],details:["Modul de consimțământ configurat corect","Evenimente de apel È™i WhatsApp","CRM push în timp real"]},ai:{title:"Stratul de calificare AI",problem:"Prea multe întrebări necalificate blochează vânzările și echipa telefonică.",system:"AI chatbot, auto-calificare, fluxuri DM în WhatsApp/Instagram, automatizare e-mail, scoring lead.",outcome:"Echipa acordă prioritate clienților potențiali legate de vânzări în loc de sortarea inițială care necesită timp.",kpis:["Timpul primului rÄƒspuns","CotÄƒ de lead calificatÄƒ","Randamentul echipei de vânzări"],details:["CÄƒi prompte specifice industriei","No Show Mementouri","Prioritizare dupÄƒ scor"]},ads:{title:"AchiziÈ›ie plÄƒtitÄƒ",problem:"Bugetul este distribuit între canale fără o buclă clară de învățare.",system:"Google Ads + Meta Ads + TikTok, teste A/B, asemÄƒnÄƒri, urmÄƒrirea conversiilor È™i vizualizarea ROAS.",outcome:"Bugetul este transferat în campanii cu o calitate ridicată a clienților potențiali în loc de volumul de clicuri pur.",kpis:["Costul pe client potenÈ›ial calificat","Rentabilitatea cheltuielilor publicitare în funcție de campanie","Rata de câștiguri creative"],details:["Clustere regionale de campanii","Variante de formă în test","ActualizÄƒri ale publicului bazate pe semnal"]},analytics:{title:"Control Analytics",problem:"Deciziile se bazeazÄƒ pe capturi de ecran ale platformei, nu pe date fiabile ale canalului.",system:"Tabloul de bord al camerei de control cu ​​vizualizări ale canalului, pâlniei și CRM la un singur nivel.",outcome:"Deciziile săptămânale privind bugetul, optimizarea și scalarea sunt urmăribile pe baza datelor.",kpis:["Conduce la numire","Conduce la tranzacÈ›ie","Viteza conductei"],details:["Segmentarea pe regiune/serviciu","Alerte de aruncare a pâlniei","Lista lunarÄƒ de ipoteze"]}},packages:[{id:"starter",title:"Starter",scale:1,lead:"Pentru companiile locale care trec de la zero la o bazÄƒ de lead-uri mÄƒsurabilÄƒ.",items:["Canal web + GA4","Meta Pixeli + Consimțământ","CRM Capture","Raportare de bazÄƒ"],effect:"Vedere clarÄƒ a surselor de plumb È™i un proces iniÈ›ial rezistent."},{id:"creÈ™tere",title:"CreÈ™tere",scale:2,recommended:!0,lead:"Pentru echipele cu vânzări active care au nevoie de clienți potențiali mai calificați.",items:["Campanii Google + Meta","Fluxuri de calificare AI","Configurare testare A/B","Lead Scoring + Automatizare"],effect:"Cerere mai calificatÄƒ, cu timpi de rÄƒspuns mai buni È™i prioritizare clarÄƒ."},{id:"scarÄƒ",title:"ScarÄƒ",scale:3,lead:"Pentru companii cu mai multe regiuni sau clustere de servicii.",items:["Control multicanal","Atribuire pe partea serverului","Ops Web App Layer","Guvernarea camerei de control"],effect:"Scalare prin procese și date fiabile în loc de încercări și erori manuale."}],timeline:[["01","Apel strategic","PiaÈ›a È›intÄƒ, oferta È™i blocajele de plumb sunt clar definite."],["02","Document de aplicare","Planul canalului, planul de urmÄƒrire È™i responsabilitÄƒÈ›ile sunt fixate."],["03","Faza de construire","Site-ul web, automatizÄƒrile È™i integrÄƒrile sunt implementate."],["04","Lansare","UrmÄƒrirea QA, lansarea campaniei È™i fluxurile CRM sunt disponibile."],["05","Optimizare","Teste săptămânale pentru reclame, canale și calificare."],["06","Scalare","Rutele funcÈ›ionale sunt extinse la regiuni/servicii."]]},TP={copy:{eyebrow:"Лид системи за местни компании в Германия",heroTitle:["От Трафик","квалифицирани потенциални клиенти","като управляема система"],heroLead:"Ние свързваме уебсайт, AI, реклами и анализи в една оперативна архитектура, така че продажбите, маркетингът и собствениците да работят с едни и същи данни.",ctaTop:"Започнете стратегическо обаждане",heroChips:["Водещ поток","AI Квалификация","Приписване"],heroChipValues:["Прием на живо","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Кацане + Проследяване","AI квалификация","CRM тръбопровод"],heroBadges:["Проследяване от страна на сървъра","Оловно точкуване","Изглед на ROAS"],servicesTitle:"Услуги като системни модули",servicesDesc:"Не е единен картов блок: доминиращо ядро, странични модули и компактен оперативен слой.",trio:["Проблем","система","Резултат"],detailsSummary:"Подробности за внедряването",kpiBadgesTitle:"KPI значки",kpiBadgesDesc:"Всяко представяне се оценява изключително с помощта на ключови цифри, които продажбите и маркетингът могат да четат и контролират заедно.",signalLayerTitle:"Сигнален слой",signalItems:["GA4 събития","Meta CAPI","CRM синхронизиране","GDPR мода"],opsTitle:"Оперативни бележки",opsItems:["Седмична тестова опашка","Преразпределение на бюджета","Слотове за QA на фунии"],packagesTitle:"пакети в SaaS логиката",recommended:"Препоръчва се",timelineTitle:"Как работим",stepLabel:"Стъпка",controlTitle:"Контролна зала: Резултати в реално време",controlPanelTitle:"Архитектура на таблото",controlPanelDesc:"Данните за канала, сигналите във фунията и състоянието на CRM се събират в един изглед. Решенията се вземат на ниво процес, вместо на базата на усещане.",miniCharts:["Водещ обем","Качествен рейтинг","Скорост на сделката"],kpiPanelTitle:"Броячи на KPI на живо",kpiLabels:["Квалифицирани потенциални клиенти","Ср. Първи отговор","Води до среща","ROAS клъстери"],controlBadges:["Контрол на оловото","Бюджетен контрол","Контрол на фунията"],ctaBottom:"Обхват на заявката за вашата водеща система"},systems:{website:{title:"Двигател на уебсайта",problem:"Трафик има, но мобилните потребители изоставят преди формуляра.",system:"Landing/Multi-Page с GA4, Meta Pixel, проследяване от страна на сървъра, настройка на CRM и GDPR.",outcome:"Всеки потенциален клиент се записва по начин, който може да бъде проследен и ясно присвоен на канал.",kpis:["скорост на проследяване","Попълване на формуляр","Яснота на водещия източник"],details:["Режимът на съгласие е конфигуриран правилно","Обаждания и събития в WhatsApp","CRM push в реално време"]},ai:{title:"Квалификационен слой на AI",problem:"Твърде много неквалифицирани запитвания блокират продажбите и телефонния екип.",system:"AI чатбот, автоматична квалификация, DM потоци в WhatsApp/Instagram, автоматизация на имейл, точкуване за потенциални клиенти.",outcome:"Екипът дава приоритет на потенциални клиенти, свързани с продажби, вместо отнемащо време първоначално сортиране.",kpis:["Време за първа реакция","Квалифициран водещ дял","Пропускателна способност на екипа по продажбите"],details:["Специфични за индустрията подканващи пътища","Напомняния за неявяване","Приоритизиране по точки"]},ads:{title:"Платено придобиване",problem:"Бюджетът се разпределя между каналите без ясен цикъл на обучение.",system:"Google Ads + Meta Ads + TikTok, A/B тестове, lookalikes, проследяване на реализациите и изглед на ROAS.",outcome:"Бюджетът се влива в кампании с високо качество на потенциалните клиенти вместо чист обем на кликванията.",kpis:["Цена на квалифициран потенциален клиент","ROAS по кампания","Creative Win Rate"],details:["Регионални групи от кампании","Варианти на формата в теста","Актуализации на аудиторията, базирани на сигнала"]},analytics:{title:"Контролен анализ",problem:"Решенията се основават на екранни снимки на платформа вместо надеждни данни за фунията.",system:"Табло за управление на контролната зала с изгледи на канал, фуния и CRM на едно ниво.",outcome:"Седмичните решения за бюджет, оптимизация и мащабиране могат да бъдат проследени въз основа на данни.",kpis:["Води до назначаване","Води до сделка","Скорост на тръбопровода"],details:["Сегментиране по регион/услуга","Сигнали за падане на фуния","Месечен списък с хипотези"]}},packages:[{id:"стартер",title:"Стартер",scale:1,lead:"За местни фирми, преминаващи от нула към измерима потенциална база.",items:["Уеб фуния + GA4","Мета пиксели + съгласие","CRM Capture","Основно отчитане"],effect:"Ясен поглед върху източниците на олово и устойчив първоначален процес."},{id:"растеж",title:"Растеж",scale:2,recommended:!0,lead:"За екипи с активни продажби, които се нуждаят от повече квалифицирани потенциални клиенти.",items:["Google + мета кампании","AI квалификационни потоци","Настройка на A/B тестване","Водещ резултат + автоматизация"],effect:"По-квалифицирано търсене с по-добро време за реакция и ясно приоритизиране."},{id:"мащаб",title:"Мащаб",scale:3,lead:"За компании с множество региони или сервизни клъстери.",items:["Многоканален контрол","Приписване от страна на сървъра","Ops Web App Layer","Управление на контролната зала"],effect:"Мащабиране чрез процеси и надеждни данни вместо ръчни проби и грешки."}],timeline:[["01","Стратегическо обаждане","Целевият пазар, офертата и тесните места са ясно дефинирани."],["02","Документ за обхват","Планът на канала, планът за проследяване и отговорностите са фиксирани."],["03","Фаза на изграждане","Уеб сайт, автоматизации и интеграции са внедрени."],["04","Стартиране","Проследяване на QA, стартиране на кампания и CRM потоци стават активни."],["05","Оптимизация","Седмични тестове за рекламни послания, фунии и квалификация."],["06","Мащабиране","Функциониращите маршрути са разширени до региони/услуги."]]},jP={tr:gP,ar:mP,pl:bP,ku:xP,fa:yP,it:vP,es:wP,el:SP,ro:kP,bg:TP},uw=Ke`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,mn=R.div`
  padding: 48px 0 96px;

  @media (max-width: 767px) {
    padding: 24px 0 72px;
  }
`,en=R.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
`,Un=R(ie.section).attrs({initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.22},variants:dt})`
  display: grid;
  gap: 24px;
  padding: 72px 0;

  h1 {
    font-size: clamp(34px, 8vw, 70px);
    line-height: 1.2;
    max-width: 680px;
  }

  p {
    max-width: 62ch;
    color: rgba(255, 255, 255, 0.82);
  }

  @media (max-width: 767px) {
    padding: 48px 0;
    gap: 16px;

    h1 {
      font-size: clamp(30px, 10vw, 44px);
      max-width: 680px;
    }
  }
`,mt=R(ie.section).attrs({initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.18},variants:dt})`
  padding-top: 72px;
  padding-bottom: 72px;

  h2 {
    font-size: clamp(28px, 6vw, 46px);
    margin-top: 72px;
    margin-bottom: 24px;
  }

  h3 {
    font-size: 22px;
    margin-bottom: 16px;
  }

  > :first-child {
    margin-top: 0;
  }

  @media (max-width: 767px) {
    padding-top: 48px;
    padding-bottom: 48px;

    h2 {
      font-size: clamp(26px, 9vw, 34px);
      margin-top: 48px;
    }

    h3 {
      font-size: 20px;
      margin-bottom: 16px;
    }
  }
`,jm=R(ie.div).attrs({initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.12},variants:Nt})`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`,fu=R(ie.div).attrs({initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.12},variants:Nt})`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`,Ue=R(ie.article).attrs({initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:at})`
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(11, 15, 27, 0.75);
  padding: 32px;
  transition:
    transform var(--dur-mid) var(--ease-smooth),
    border-color var(--dur-mid) var(--ease-smooth),
    box-shadow var(--dur-mid) var(--ease-smooth),
    background var(--dur-mid) var(--ease-smooth);

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(248, 190, 98, 0.62);
    background: rgba(18, 23, 38, 0.9);
    box-shadow: 0 14px 24px rgba(0, 0, 0, 0.28);
  }

  @media (max-width: 767px) {
    padding: 24px;
  }
`,Cm=R(Ue).attrs({as:ie.section})`
  margin-top: 72px;

  @media (max-width: 767px) {
    margin-top: 48px;
  }
`,qe=R.p`
  color: rgba(255, 255, 255, 0.72);
`,Da=R.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 767px) {
    width: 100%;
    gap: 16px;
  }
`,dw=`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  padding: 0 24px;
  border-radius: 10px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  transition: transform var(--dur-mid) var(--ease-smooth), box-shadow var(--dur-mid) var(--ease-smooth),
    border-color var(--dur-mid) var(--ease-smooth), background var(--dur-mid) var(--ease-smooth),
    color var(--dur-mid) var(--ease-smooth), filter var(--dur-mid) var(--ease-smooth);

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
  }

  @media (max-width: 767px) {
    min-height: 44px;
    width: 100%;
  }
`,ua=R(la)`
  ${dw}
  background: linear-gradient(120deg, #f39a4f, #ffe1b5, #f39a4f);
  background-size: 220% 220%;
  color: #121723;

  &:hover,
  &:focus-visible {
    color: #f8fafc;
    background: linear-gradient(120deg, #121723, #253a64, #121723);
    background-size: 220% 220%;
    animation: ${uw} 2.2s linear infinite;
    box-shadow: 0 12px 22px rgba(21, 31, 52, 0.45);
  }
`,fw=R.button`
  ${dw}
  border: 0;
  cursor: pointer;
  background: linear-gradient(120deg, #f39a4f, #ffe1b5, #f39a4f);
  background-size: 220% 220%;
  color: #121723;

  &:hover,
  &:focus-visible {
    color: #f8fafc;
    background: linear-gradient(120deg, #121723, #253a64, #121723);
    background-size: 220% 220%;
    animation: ${uw} 2.2s linear infinite;
    box-shadow: 0 12px 22px rgba(21, 31, 52, 0.45);
  }
`,Yt=R.span`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  color: #101321;
  background: linear-gradient(120deg, #f7cb84, #ffdca8);
  vertical-align: middle;
`,Go=R.ul`
  display: grid;
  gap: 16px;
  padding: 0;
  margin: 0;

  li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;R.p`
  font-size: 30px;
  color: #ffd08a;
  margin: 8px 0;
`;R.div`
  display: grid;
  gap: 10px;
`;R.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  padding: 10px 12px;

  span {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
`;const CP=R.form`
  display: grid;
  gap: 10px;
`,pw=R.label`
  display: grid;
  grid-template-columns: 28px 1fr;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.04);
  padding: 8px 10px;
  transition: border-color var(--dur-fast) var(--ease-smooth), background var(--dur-fast) var(--ease-smooth);

  &:focus-within {
    border-color: rgba(255, 207, 130, 0.8);
    background: rgba(255, 255, 255, 0.09);
  }

  input,
  textarea {
    width: 100%;
    border: 0;
    background: transparent;
    color: #ffffff;
    outline: none;
  }

  textarea {
    min-height: 110px;
    resize: vertical;
  }
`,AP=Ke`
  0% { box-shadow: 0 0 0 0 rgba(58, 197, 255, 0.28); }
  70% { box-shadow: 0 0 0 14px rgba(58, 197, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(58, 197, 255, 0); }
`,EP=Ke`
  0% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(0, -8px, 0); }
  100% { transform: translate3d(0, 0, 0); }
`,MP=R(mn)`
  position: relative;
  overflow: clip;
  background:
    radial-gradient(1200px 600px at 12% -8%, rgba(46, 132, 255, 0.2), transparent 60%),
    radial-gradient(1000px 680px at 88% 2%, rgba(37, 187, 255, 0.15), transparent 64%),
    #0b0f17;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 34px 34px;
    opacity: 0.38;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -20%;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.04) 0.5px, transparent 0.5px);
    background-size: 3px 3px;
    opacity: 0.08;
    pointer-events: none;
  }
`,Ao=R(ie.section)`
  position: relative;
  margin-top: clamp(54px, 8vw, 108px);
  padding-inline: clamp(2px, 1vw, 12px);

  h2 {
    margin: 0 0 18px;
    line-height: 1.08;
  }

  > p {
    margin: 8px 0 22px;
  }
`,zP=R.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-inline: var(--gutter);
`,RP=R(ie.section)`
  display: grid;
  grid-template-columns: 1.06fr 0.94fr;
  gap: clamp(24px, 3vw, 44px);
  align-items: center;
  min-height: calc(100svh - 124px);
  padding-top: clamp(28px, 4vw, 52px);
  padding-bottom: clamp(18px, 3vw, 34px);

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    min-height: auto;
    align-items: start;
    padding-top: clamp(28px, 6vw, 44px);
    padding-bottom: 0;
  }
`,LP=R.div`
  display: grid;
  gap: 20px;
  align-content: center;

  @media (max-width: 980px) {
    align-content: start;
  }
`,OP=R.p`
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 12px;
  color: rgba(207, 233, 255, 0.8);
`,DP=R.h1`
  margin: 0;
  line-height: 0.92;
  max-width: 12ch;
  display: grid;
  gap: 6px;

  span:first-child {
    font-size: clamp(34px, 7vw, 68px);
    font-weight: 400;
    color: rgba(255, 255, 255, 0.85);
  }

  span:nth-child(2) {
    font-size: clamp(40px, 9vw, 84px);
    font-weight: 700;
    color: #f5fbff;
  }

  span:last-child {
    font-size: clamp(30px, 6vw, 58px);
    font-weight: 500;
    color: rgba(160, 225, 255, 0.95);
  }
`,PP=R.p`
  margin: 8px 0 18px;
  max-width: 62ch;
  color: rgba(235, 244, 255, 0.82);
  font-size: clamp(15px, 2vw, 19px);
  line-height: 1.62;
`,pv=R(ua)`
  width: fit-content;
  border: 1px solid rgba(255, 228, 184, 0.6);
  box-shadow:
    0 0 0 1px rgba(243, 154, 79, 0.5),
    0 14px 30px rgba(243, 154, 79, 0.24),
    0 0 28px rgba(243, 154, 79, 0.3);

  &:hover,
  &:focus-visible {
    transform: translateY(-3px) scale(1.01);
    box-shadow:
      0 0 0 1px rgba(255, 225, 181, 0.7),
      0 18px 40px rgba(243, 154, 79, 0.36),
      0 0 44px rgba(251, 196, 122, 0.4);
  }
`,VP=R.div`
  position: relative;
  min-height: clamp(460px, 44vw, 640px);
  border-radius: 24px;
  border: 1px solid rgba(129, 198, 255, 0.32);
  background:
    radial-gradient(660px 280px at 70% -10%, rgba(68, 208, 255, 0.2), transparent 72%),
    linear-gradient(160deg, rgba(14, 21, 34, 0.92), rgba(10, 15, 23, 0.95));
  box-shadow:
    inset 0 1px 0 rgba(195, 230, 255, 0.18),
    inset 0 -20px 40px rgba(7, 11, 20, 0.7),
    0 30px 60px rgba(0, 0, 0, 0.45);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 16px;
    border-radius: 16px;
    border: 1px solid rgba(127, 204, 255, 0.3);
    background-image:
      linear-gradient(rgba(142, 209, 255, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(142, 209, 255, 0.08) 1px, transparent 1px);
    background-size: 22px 22px;
  }

  @media (max-width: 760px) {
    min-height: auto;
  }
`,NP=R.div`
  position: absolute;
  width: 220px;
  height: 220px;
  top: -72px;
  right: -54px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(70, 198, 255, 0.35), rgba(70, 198, 255, 0));
  filter: blur(2px);
  animation: ${EP} 6.2s ease-in-out infinite;
`,BP=R.div`
  position: absolute;
  inset: 44px 34px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 12px;

  @media (max-width: 760px) {
    position: relative;
    inset: auto;
    padding: 18px 14px 16px;
    gap: 10px;
  }
`,_P=R(ie.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
`,uh=R(ie.div)`
  border-radius: 12px;
  border: 1px solid rgba(135, 209, 255, 0.24);
  background: rgba(15, 28, 44, 0.84);
  padding: 10px 12px;
  backdrop-filter: blur(3px);

  b {
    display: block;
    font-size: 15px;
    color: #eff8ff;
  }

  span {
    font-size: 11px;
    color: rgba(191, 220, 247, 0.78);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`,$P=R(ie.div)`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 10px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`,HP=R.div`
  border-radius: 14px;
  border: 1px solid rgba(119, 193, 255, 0.24);
  background: linear-gradient(175deg, rgba(15, 30, 48, 0.88), rgba(11, 19, 31, 0.84));
  padding: 14px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(transparent 93%, rgba(135, 206, 250, 0.08) 93%);
    background-size: 100% 20%;
  }

  @media (max-width: 760px) {
    min-height: 180px;
  }
`,UP=R.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: end;
  gap: 8px;
  height: 100%;

  span {
    display: block;
    flex: 1;
    border-radius: 8px 8px 2px 2px;
    background: linear-gradient(180deg, rgba(101, 217, 255, 0.9), rgba(44, 110, 197, 0.34));
    transform-origin: bottom center;
    will-change: transform, filter, opacity;
  }
`,GP=R.div`
  border-radius: 14px;
  border: 1px solid rgba(119, 193, 255, 0.24);
  background: rgba(10, 19, 30, 0.8);
  padding: 12px;
  display: grid;
  gap: 8px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
    gap: 6px;
  }
`,Gc=R(ie.div)`
  border-radius: 10px;
  border: 1px solid rgba(116, 205, 255, 0.3);
  background: rgba(20, 34, 53, 0.8);
  padding: 8px 10px;
  font-size: 12px;
  color: rgba(219, 239, 255, 0.94);

  @media (max-width: 760px) {
    font-size: 11px;
    padding: 7px 8px;
  }
`,dh=R(ie.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Vi=R(ie.span)`
  border-radius: 999px;
  padding: 7px 11px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #d8f2ff;
  border: 1px solid rgba(111, 206, 255, 0.38);
  background: rgba(22, 41, 62, 0.76);
  box-shadow: inset 0 0 12px rgba(80, 193, 255, 0.14);
`,IP=R.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,FP=R.button`
  border-radius: 999px;
  border: 1px solid ${({$active:e})=>e?"rgba(122, 206, 255, 0.72)":"rgba(255, 255, 255, 0.18)"};
  background: ${({$active:e})=>e?"rgba(25, 58, 87, 0.72)":"rgba(255, 255, 255, 0.04)"};
  color: ${({$active:e})=>e?"#ecf7ff":"rgba(225, 239, 255, 0.84)"};
  padding: 8px 14px;
  font-size: 13px;
  transition: all var(--dur-mid) var(--ease-smooth);

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(134, 213, 255, 0.66);
  }
`,qP=R(ie.div)`
  margin-top: 24px;
  display: grid;
  gap: 14px;
  grid-template-columns: 1.5fr 1fr 1fr;
  grid-template-areas:
    'dominant mediumA compact'
    'dominant mediumB compact';

  @media (max-width: 1050px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'dominant dominant'
      'mediumA mediumB'
      'compact compact';
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'dominant'
      'mediumA'
      'mediumB'
      'compact';
  }
`,Ic=R(ie.article)`
  grid-area: ${({$area:e})=>e??"auto"};
  border-radius: ${({$compact:e})=>e?"16px":"20px"};
  border: 1px solid ${({$featured:e})=>e?"rgba(101, 205, 255, 0.5)":"rgba(255, 255, 255, 0.14)"};
  background:
    radial-gradient(420px 220px at 12% -12%, rgba(62, 177, 255, 0.13), transparent 65%),
    linear-gradient(168deg, rgba(15, 22, 35, 0.94), rgba(10, 15, 24, 0.9));
  padding: ${({$compact:e})=>e?"18px":"24px"};
  box-shadow:
    ${({$featured:e})=>e?"0 0 0 1px rgba(91, 198, 255, 0.2),":""}
    inset 0 1px 0 rgba(178, 216, 245, 0.12),
    0 20px 40px rgba(0, 0, 0, 0.3);
  transition: transform var(--dur-mid) var(--ease-smooth), border-color var(--dur-mid) var(--ease-smooth), box-shadow var(--dur-mid) var(--ease-smooth);

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(132, 212, 255, 0.66);
    box-shadow:
      0 0 0 1px rgba(104, 208, 255, 0.2),
      inset 0 1px 0 rgba(178, 216, 245, 0.14),
      0 26px 50px rgba(0, 0, 0, 0.4);
  }

  h3 {
    margin: 0 0 12px;
    font-size: ${({$compact:e})=>e?"18px":"24px"};
    line-height: 1.2;
  }

  p {
    margin: 8px 0 14px;
    line-height: 1.58;
  }

  p:last-child {
    margin-bottom: 0;
  }
`,KP=R.div`
  margin-top: 16px;
  display: grid;
  gap: 10px;
`,fh=R(ie.div)`
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.03);
  padding: 12px 14px;

  strong {
    display: block;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #9fdffd;
    margin-bottom: 4px;
  }

  span {
    color: rgba(229, 241, 252, 0.88);
    font-size: 14px;
    line-height: 1.5;
  }
`,YP=R.details`
  margin-top: 14px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.03);
  padding: 10px;

  summary {
    cursor: pointer;
    color: #d6ecff;
    font-size: 13px;
    font-weight: 600;
  }

  ul {
    margin: 12px 0 0;
    padding-left: 18px;
    display: grid;
    gap: 6px;
    color: rgba(225, 240, 255, 0.84);
    font-size: 13px;
  }
`,XP=R.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;

  span {
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.03);
    padding: 8px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: rgba(226, 241, 255, 0.84);
  }
`,WP=R(ie.div)`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,QP=R(ie.article)`
  position: relative;
  border-radius: 20px;
  padding: 24px;
  border: 1px solid ${({$recommended:e})=>e?"rgba(255, 206, 121, 0.66)":"rgba(255, 255, 255, 0.16)"};
  background:
    ${({$recommended:e})=>e?"radial-gradient(380px 180px at 80% -20%, rgba(255, 205, 116, 0.16), transparent 66%), linear-gradient(170deg, rgba(20, 26, 38, 0.96), rgba(12, 16, 25, 0.95))":"linear-gradient(170deg, rgba(16, 23, 35, 0.94), rgba(11, 15, 23, 0.92))"};
  box-shadow:
    ${({$recommended:e})=>e?"0 0 34px rgba(255, 198, 99, 0.24),":""}
    inset 0 1px 0 rgba(192, 224, 249, 0.13),
    0 24px 44px rgba(0, 0, 0, 0.35);

  h3 {
    margin: 0;
    font-size: 26px;
  }
`,ZP=R.span`
  position: absolute;
  top: 12px;
  right: 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 205, 121, 0.72);
  color: #ffdeab;
  padding: 5px 10px;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,JP=R.div`
  margin-top: 14px;
  display: flex;
  gap: 6px;

  i {
    height: 6px;
    flex: 1;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.14);
  }

  i.on {
    background: linear-gradient(90deg, #45cfff, #ffdca8);
    box-shadow: 0 0 12px rgba(80, 200, 255, 0.35);
  }
`,eV=R.p`
  margin: 14px 0 20px;
  color: rgba(220, 238, 255, 0.84);
  line-height: 1.58;
`,tV=R(ie.ol)`
  list-style: none;
  margin: 0;
  padding: 36px 0 0;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 14px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 12px;
    height: 2px;
    background: linear-gradient(90deg, rgba(76, 173, 255, 0.5), rgba(146, 226, 255, 0.7), rgba(255, 214, 150, 0.6));
    box-shadow: 0 0 18px rgba(75, 182, 255, 0.36);
  }

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    padding-top: 0;

    &::before {
      left: 11px;
      top: 0;
      bottom: 0;
      width: 2px;
      right: auto;
      height: auto;
      background: linear-gradient(180deg, rgba(76, 173, 255, 0.5), rgba(146, 226, 255, 0.7), rgba(255, 214, 150, 0.6));
    }
  }
`,nV=R(ie.li)`
  position: relative;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.13);
  background: linear-gradient(165deg, rgba(17, 24, 37, 0.94), rgba(10, 14, 22, 0.92));
  padding: 16px;
  min-height: 140px;
  transition: transform var(--dur-mid) var(--ease-smooth), border-color var(--dur-mid) var(--ease-smooth);

  &::before {
    content: '';
    position: absolute;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    border: 2px solid rgba(117, 209, 255, 0.95);
    background: #0c141f;
    top: -30px;
    left: 16px;
    animation: ${AP} 2.8s infinite;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(133, 213, 255, 0.64);
  }

  @media (max-width: 980px) {
    margin-left: 28px;

    &::before {
      top: 18px;
      left: -23px;
    }
  }
`,aV=R.span`
  display: block;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(173, 216, 247, 0.82);
`,iV=R.h3`
  margin: 8px 0 12px;
  font-size: 18px;
`,rV=R(ie.div)`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 18px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,hv=R(ie.article)`
  border-radius: 20px;
  border: 1px solid rgba(114, 200, 255, 0.28);
  background:
    radial-gradient(560px 260px at 86% -18%, rgba(70, 189, 255, 0.16), transparent 70%),
    linear-gradient(165deg, rgba(16, 25, 39, 0.95), rgba(9, 14, 22, 0.95));
  padding: 24px;
  box-shadow:
    inset 0 1px 0 rgba(180, 220, 250, 0.12),
    0 26px 50px rgba(0, 0, 0, 0.38);

  h3 {
    margin: 0 0 12px;
  }
`,sV=R.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Fc=R(ie.div)`
  border-radius: 12px;
  border: 1px solid rgba(132, 209, 255, 0.24);
  background: rgba(14, 28, 43, 0.78);
  padding: 14px;

  span {
    display: block;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(181, 220, 249, 0.78);
  }

  strong {
    font-size: clamp(24px, 4vw, 34px);
    color: #ecf8ff;
    font-weight: 700;
  }
`,oV=R.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;

  div {
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.03);
    padding: 12px;
    min-height: 78px;
  }

  i {
    display: block;
    width: 100%;
    height: 6px;
    border-radius: 999px;
    margin-top: 8px;
    background: linear-gradient(90deg, rgba(61, 208, 255, 0.92), rgba(255, 214, 147, 0.84));
  }
`,Eo=R(qe)`
  font-size: 14px;
  line-height: 1.6;
  margin: 8px 0 18px;
`,Wr={website:{title:"Website Engine",icon:d.jsx(fm,{}),problem:"Traffic ist vorhanden, aber mobile Nutzer brechen vor dem Formular ab.",system:"Landing/Multi-Page mit GA4, Meta Pixel, Server-Side Tracking, CRM und DSGVO-Setup.",outcome:"Jeder Lead wird nachvollziehbar erfasst und eindeutig einem Kanal zugeordnet.",kpis:["Tracking-Quote","Form Completion","Lead Source Clarity"],details:["Consent Mode korrekt konfiguriert","Call- und WhatsApp-Events","CRM Push in Echtzeit"]},ai:{title:"AI Qualification Layer",icon:d.jsx(as,{}),problem:"Zu viele unqualifizierte Anfragen blockieren Vertrieb und Telefonteam.",system:"AI-Chatbot, Auto-Qualifizierung, DM-Flows in WhatsApp/Instagram, E-Mail-Automation, Lead Scoring.",outcome:"Das Team priorisiert kaufnahe Leads statt zeitintensiver Erstsortierung.",kpis:["First Response Time","Qualified Lead Share","Sales Team Throughput"],details:["Branchenspezifische Prompt-Pfade","No-Show Reminders","Priorisierung nach Score"]},ads:{title:"Paid Acquisition",icon:d.jsx(pl,{}),problem:"Das Budget verteilt sich ohne klare Lernschleife zwischen den Kanaelen.",system:"Google Ads + Meta Ads + TikTok, A/B Tests, Lookalikes, Conversion Tracking und ROAS-View.",outcome:"Budget fliesst in Kampagnen mit hoher Lead-Qualitaet statt in reine Klickmenge.",kpis:["Cost per Qualified Lead","ROAS by Campaign","Creative Win Rate"],details:["Regionale Kampagnencluster","Form-Varianten im Test","Signalbasierte Audience-Updates"]},analytics:{title:"Control Analytics",icon:d.jsx(qi,{}),problem:"Entscheidungen basieren auf Plattform-Screenshots statt auf belastbaren Funnel-Daten.",system:"Control-Room Dashboard mit Kanal-, Funnel- und CRM-Sicht in einer Ebene.",outcome:"Woechentliche Entscheidungen zu Budget, Optimierung und Skalierung sind datenbasiert nachvollziehbar.",kpis:["Lead to Appointment","Lead to Deal","Pipeline Velocity"],details:["Segmentierung nach Region/Service","Alerts bei Funnel Drop","Monatliche Hypothesenliste"]}},lV={website:{title:"Website Engine",icon:d.jsx(fm,{}),problem:"Трафік є, але мобільні користувачі не доходять до відправки форми.",system:"Landing або multi-page сайт з GA4, Meta Pixel, server-side tracking, CRM та DSGVO-базою.",outcome:"Кожен лід фіксується і чітко прив’язується до каналу.",kpis:["Якість трекінгу","Form Completion","Lead Source Clarity"],details:["Коректно налаштований Consent Mode","Call і WhatsApp події","CRM push у реальному часі"]},ai:{title:"AI Qualification Layer",icon:d.jsx(as,{}),problem:"Надто багато нецільових звернень перевантажують продажі й телефонну лінію.",system:"AI-чатбот, автокваліфікація, DM-flow у WhatsApp/Instagram, email-автоматизація та lead scoring.",outcome:"Команда в першу чергу працює з лідами, які ближчі до покупки.",kpis:["First Response Time","Qualified Lead Share","Sales Team Throughput"],details:["Промпт-потоки під нішу","No-show нагадування","Пріоритезація за scoring"]},ads:{title:"Paid Acquisition",icon:d.jsx(pl,{}),problem:"Бюджет розподіляється між каналами без стабільної логіки навчання.",system:"Google Ads + Meta Ads + TikTok, A/B тести, lookalike аудиторії, conversion tracking і ROAS-аналіз.",outcome:"Бюджет іде в кампанії з кращою якістю лідів, а не просто в кліки.",kpis:["Cost per Qualified Lead","ROAS by Campaign","Creative Win Rate"],details:["Регіональні кластери кампаній","Тести варіантів форм","Оновлення аудиторій за сигналами"]},analytics:{title:"Control Analytics",icon:d.jsx(qi,{}),problem:"Рішення приймаються за скріншотами платформ, а не за даними воронки.",system:"Control-room dashboard з єдиним шаром каналів, воронки та CRM.",outcome:"Щотижневі рішення щодо бюджету й оптимізації приймаються на основі даних.",kpis:["Lead to Appointment","Lead to Deal","Pipeline Velocity"],details:["Сегментація за регіоном і послугою","Алерти при просіданні funnel","Щомісячний backlog гіпотез"]}},hw=[{id:"starter",title:"Starter",scale:1,lead:"Fuer lokale Betriebe, die von null auf eine messbare Lead-Basis gehen.",items:["Web-Funnel + GA4","Meta Pixel + Consent","CRM Capture","Basis-Reporting"],effect:"Klare Sicht auf Lead-Quellen und ein belastbarer Erstprozess."},{id:"growth",title:"Growth",scale:2,recommended:!0,lead:"Fuer Teams mit aktivem Vertrieb, die mehr qualifizierte Leads brauchen.",items:["Google + Meta Kampagnen","AI Qualification Flows","A/B Testing Setup","Lead Scoring + Automation"],effect:"Mehr qualifizierte Nachfrage bei besserer Reaktionszeit und sauberer Priorisierung."},{id:"scale",title:"Scale",scale:3,lead:"Fuer Unternehmen mit mehreren Regionen oder Leistungsclustern.",items:["Multi-Channel Steuerung","Server-Side Attribution","Ops Web-App Layer","Control-Room Governance"],effect:"Skalierung ueber Prozesse und belastbare Daten statt manuellem Trial-and-Error."}],cV=[{id:"starter",title:"Starter",scale:1,lead:"Для локального бізнесу, який переходить від нуля до вимірюваної lead-системи.",items:["Web-funnel + GA4","Meta Pixel + Consent","CRM Capture","Базова аналітика"],effect:"Прозора картина джерел лідів і робочий базовий процес."},{id:"growth",title:"Growth",scale:2,recommended:!0,lead:"Для команд з активним продажем, яким потрібні якісніші ліди.",items:["Google + Meta кампанії","AI Qualification Flows","A/B Testing Setup","Lead Scoring + Automation"],effect:"Більше кваліфікованого попиту та швидша реакція команди."},{id:"scale",title:"Scale",scale:3,lead:"Для компаній з кількома регіонами або кластерами послуг.",items:["Multi-channel керування","Server-side attribution","Ops Web-App Layer","Control-Room Governance"],effect:"Масштабування через процеси та дані замість ручного trial-and-error."}],gw=[["01","Strategischer Call","Zielmarkt, Angebot und Lead-Engpass werden klar definiert."],["02","Scope Dokument","Kanalplan, Tracking-Plan und Verantwortlichkeiten werden fixiert."],["03","Build Phase","Website, Automationen und Integrationen werden umgesetzt."],["04","Launch","Tracking QA, Kampagnenstart und CRM-Flows gehen live."],["05","Optimierung","Woechentliche Tests für Creatives, Funnel und Qualifizierung."],["06","Skalierung","Funktionierende Strecken werden auf Regionen/Leistungen erweitert."]],uV=[["01","Стратегічний дзвінок","Фіксуємо ринок, офер і головні вузькі місця у lead-процесі."],["02","Scope документ","Узгоджуємо канали, tracking-план і відповідальності."],["03","Етап розробки","Реалізуємо сайт, автоматизації й інтеграції."],["04","Запуск","Робимо QA трекінгу, запускаємо кампанії та CRM-flow."],["05","Оптимізація","Щотижнево тестуємо креативи, воронку та логіку кваліфікації."],["06","Масштабування","Робочі зв’язки переносимо на нові регіони й послуги."]],mw={eyebrow:"Lead-Systeme für lokale Unternehmen in Deutschland",heroTitle:["Aus Traffic","qualifizierte Leads","als steuerbares System"],heroLead:"Wir verbinden Website, AI, Ads und Analytics in einer operativen Architektur, damit Vertrieb, Marketing und Inhaber mit denselben Daten arbeiten.",ctaTop:"Strategischen Call starten",heroChips:["Lead Flow","AI Qualify","Attribution"],heroChipValues:["Live Intake","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Landing + Tracking","AI Qualification","CRM Pipeline"],heroBadges:["Server-Side Tracking","Lead Scoring","ROAS View"],servicesTitle:"Leistungen als System-Module",servicesDesc:"Kein gleichfoermiger Kartenblock: ein dominanter Kern, flankierende Module und ein kompakter Operations-Layer.",trio:["Problem","System","Outcome"],detailsSummary:"Implementierungsdetails",kpiBadgesTitle:"KPI Badges",kpiBadgesDesc:"Jede Leistung wird ausschliesslich ueber Kennzahlen bewertet, die Sales und Marketing gemeinsam lesen und steuern koennen.",signalLayerTitle:"Signal Layer",signalItems:["GA4 Events","Meta CAPI","CRM Sync","DSGVO Mode"],opsTitle:"Ops Notes",opsItems:["Weekly Test Queue","Budget Reallocation","Funnel QA Slots"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Empfohlen",timelineTitle:"Wie wir arbeiten",stepLabel:"Step",controlTitle:"Control Room: Ergebnisse in Echtzeit",controlPanelTitle:"Dashboard Architektur",controlPanelDesc:"Kanaldaten, Funnel-Signale und CRM-Status laufen in einer Ansicht zusammen. Entscheidungen erfolgen auf Prozessebene statt aus dem Bauchgefuehl.",miniCharts:["Lead Volume","Quality Score","Deal Velocity"],kpiPanelTitle:"Live KPI Counters",kpiLabels:["Qualified Leads","Avg. First Response","Lead to Termin","ROAS Cluster"],controlBadges:["Lead Kontrolle","Budget Kontrolle","Funnel Kontrolle"],ctaBottom:"Scope für Ihr Lead-System anfragen"},dV={eyebrow:"Lead-системи для локального бізнесу в Німеччині",heroTitle:["З трафіку","у кваліфіковані ліди","як керовану систему"],heroLead:"Поєднуємо сайт, AI, рекламу та аналітику в єдину операційну архітектуру, щоб маркетинг, продажі й власник працювали з одними даними.",ctaTop:"Запустити стратегічний дзвінок",heroChips:["Lead Flow","AI Qualify","Attribution"],heroChipValues:["Live Intake","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Landing + Tracking","AI Qualification","CRM Pipeline"],heroBadges:["Server-Side Tracking","Lead Scoring","ROAS View"],servicesTitle:"Послуги як модулі системи",servicesDesc:"Не одноманітні картки, а система: домінантне ядро, підтримуючі модулі та компактний операційний шар.",trio:["Проблема","Система","Результат"],detailsSummary:"Деталі реалізації",kpiBadgesTitle:"KPI Badges",kpiBadgesDesc:"Кожну послугу оцінюємо тільки за метриками, які спільно читають маркетинг і продажі.",signalLayerTitle:"Signal Layer",signalItems:["GA4 Events","Meta CAPI","CRM Sync","DSGVO Mode"],opsTitle:"Ops Notes",opsItems:["Weekly Test Queue","Budget Reallocation","Funnel QA Slots"],packagesTitle:"Пакети в SaaS-логіці",recommended:"Рекомендовано",timelineTitle:"Як ми працюємо",stepLabel:"Крок",controlTitle:"Control Room: результати в реальному часі",controlPanelTitle:"Архітектура дашборду",controlPanelDesc:"Дані каналів, сигнали воронки та CRM-статуси зібрані в одному view. Рішення приймаються на рівні процесу, а не інтуїтивно.",miniCharts:["Lead Volume","Quality Score","Deal Velocity"],kpiPanelTitle:"Live KPI Counters",kpiLabels:["Qualified Leads","Avg. First Response","Lead to Termin","ROAS Cluster"],controlBadges:["Контроль лідів","Контроль бюджету","Контроль воронки"],ctaBottom:"Запросити scope для вашої lead-системи"},we=jP,Jn=e=>({website:{...Wr.website,...e.website},ai:{...Wr.ai,...e.ai},ads:{...Wr.ads,...e.ads},analytics:{...Wr.analytics,...e.analytics}}),fV={de:Wr,uk:lV,tr:Jn(we.tr.systems),ar:Jn(we.ar.systems),pl:Jn(we.pl.systems),ku:Jn(we.ku.systems),fa:Jn(we.fa.systems),it:Jn(we.it.systems),es:Jn(we.es.systems),el:Jn(we.el.systems),ro:Jn(we.ro.systems),bg:Jn(we.bg.systems)},pV={de:hw,uk:cV,tr:we.tr.packages,ar:we.ar.packages,pl:we.pl.packages,ku:we.ku.packages,fa:we.fa.packages,it:we.it.packages,es:we.es.packages,el:we.el.packages,ro:we.ro.packages,bg:we.bg.packages},hV={de:gw,uk:uV,tr:we.tr.timeline,ar:we.ar.timeline,pl:we.pl.timeline,ku:we.ku.timeline,fa:we.fa.timeline,it:we.it.timeline,es:we.es.timeline,el:we.el.timeline,ro:we.ro.timeline,bg:we.bg.timeline},gV={de:mw,uk:dV,tr:we.tr.copy,ar:we.ar.copy,pl:we.pl.copy,ku:we.ku.copy,fa:we.fa.copy,it:we.it.copy,es:we.es.copy,el:we.el.copy,ro:we.ro.copy,bg:we.bg.copy},mV=["34%","52%","47%","70%","62%","85%","73%"],bV=()=>{const{i18n:e}=Ie(),t=(e.resolvedLanguage||e.language||"de").split("-")[0],a=gV[t]??mw,i=fV[t]??Wr,o=pV[t]??hw,l=hV[t]??gw,[u,p]=j.useState("website"),f=j.useMemo(()=>i[u],[u,i]);return d.jsxs(MP,{children:[d.jsx(zP,{children:d.jsxs(RP,{initial:"hidden",animate:"visible",variants:Nt,children:[d.jsxs(LP,{as:ie.div,variants:$c,children:[d.jsx(OP,{children:a.eyebrow}),d.jsxs(DP,{children:[d.jsx("span",{children:a.heroTitle[0]}),d.jsx("span",{children:a.heroTitle[1]}),d.jsx("span",{children:a.heroTitle[2]})]}),d.jsx(PP,{children:a.heroLead}),d.jsx(Da,{children:d.jsxs(pv,{to:"/kontakt",children:[d.jsx(_n,{})," ",a.ctaTop]})})]}),d.jsxs(VP,{as:ie.div,variants:ri,children:[d.jsx(NP,{}),d.jsxs(BP,{children:[d.jsxs(_P,{variants:Nt,initial:"hidden",animate:"visible",children:[d.jsxs(uh,{variants:at,children:[d.jsx("span",{children:a.heroChips[0]}),d.jsx("b",{children:d.jsx(Yi,{text:a.heroChipValues[0],durationMs:1400,storageKey:"hero_lead_flow"})})]}),d.jsxs(uh,{variants:at,children:[d.jsx("span",{children:a.heroChips[1]}),d.jsx("b",{children:a.heroChipValues[1]})]}),d.jsxs(uh,{variants:at,children:[d.jsx("span",{children:a.heroChips[2]}),d.jsx("b",{children:a.heroChipValues[2]})]})]}),d.jsxs($P,{variants:Nt,initial:"hidden",animate:"visible",children:[d.jsx(HP,{children:d.jsx(UP,{children:mV.map((g,m)=>d.jsx(ie.span,{style:{height:g},animate:{scaleY:[.78,1.08,.9,1.02,.78],opacity:[.78,1,.86,.96,.78]},transition:{duration:2.6,delay:m*.16,repeat:1/0,ease:"easeInOut"}},g+m))})}),d.jsxs(GP,{children:[d.jsx(Gc,{variants:ri,children:a.flowNodes[0]}),d.jsx(Gc,{variants:ri,children:a.flowNodes[1]}),d.jsx(Gc,{variants:ri,children:a.flowNodes[2]}),d.jsx(Gc,{variants:ri,children:a.flowNodes[3]})]})]}),d.jsxs(dh,{variants:Nt,initial:"hidden",animate:"visible",children:[d.jsx(Vi,{variants:at,children:a.heroBadges[0]}),d.jsx(Vi,{variants:at,children:a.heroBadges[1]}),d.jsx(Vi,{variants:at,children:a.heroBadges[2]})]})]})]})]})}),d.jsxs(en,{children:[d.jsxs(Ao,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:dt,children:[d.jsx("h2",{children:a.servicesTitle}),d.jsx(Eo,{children:a.servicesDesc}),d.jsx(IP,{children:Object.keys(i).map(g=>d.jsx(FP,{$active:u===g,onClick:()=>p(g),children:i[g].title},g))}),d.jsxs(qP,{variants:Nt,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.16},children:[d.jsxs(Ic,{$area:"dominant",$featured:!0,variants:$c,children:[d.jsxs("h3",{children:[d.jsx(Yt,{children:f.icon}),f.title]}),d.jsxs(KP,{children:[d.jsxs(fh,{variants:dt,children:[d.jsx("strong",{children:a.trio[0]}),d.jsx("span",{children:f.problem})]}),d.jsxs(fh,{variants:dt,children:[d.jsx("strong",{children:a.trio[1]}),d.jsx("span",{children:f.system})]}),d.jsxs(fh,{variants:dt,children:[d.jsx("strong",{children:a.trio[2]}),d.jsx("span",{children:f.outcome})]})]}),d.jsxs(YP,{children:[d.jsx("summary",{children:a.detailsSummary}),d.jsx("ul",{children:f.details.map(g=>d.jsx("li",{children:g},g))})]})]}),d.jsxs(Ic,{$area:"mediumA",variants:dt,children:[d.jsxs("h3",{children:[d.jsx(Yt,{children:d.jsx(ku,{})}),a.kpiBadgesTitle]}),d.jsx(dh,{variants:Nt,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:f.kpis.map(g=>d.jsx(Vi,{variants:at,children:g},g))}),d.jsx(Eo,{style:{marginTop:12},children:a.kpiBadgesDesc})]}),d.jsxs(Ic,{$area:"mediumB",variants:ri,children:[d.jsxs("h3",{children:[d.jsx(Yt,{children:d.jsx(el,{})}),a.signalLayerTitle]}),d.jsxs(XP,{children:[d.jsxs("span",{children:[d.jsx(jt,{})," ",a.signalItems[0]]}),d.jsxs("span",{children:[d.jsx(jt,{})," ",a.signalItems[1]]}),d.jsxs("span",{children:[d.jsx(jt,{})," ",a.signalItems[2]]}),d.jsxs("span",{children:[d.jsx(jt,{})," ",a.signalItems[3]]})]})]}),d.jsxs(Ic,{$area:"compact",$compact:!0,variants:at,children:[d.jsxs("h3",{children:[d.jsx(Yt,{children:d.jsx(Wu,{})}),a.opsTitle]}),d.jsxs(Go,{children:[d.jsxs("li",{children:[d.jsx(jt,{})," ",a.opsItems[0]]}),d.jsxs("li",{children:[d.jsx(jt,{})," ",a.opsItems[1]]}),d.jsxs("li",{children:[d.jsx(jt,{})," ",a.opsItems[2]]})]})]})]})]}),d.jsxs(Ao,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:dt,children:[d.jsx("h2",{children:a.packagesTitle}),d.jsx(WP,{variants:Nt,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.16},children:o.map(g=>d.jsxs(QP,{$recommended:g.recommended,variants:g.recommended?at:dt,children:[g.recommended?d.jsx(ZP,{children:a.recommended}):null,d.jsx("h3",{children:g.title}),d.jsx(eV,{children:g.lead}),d.jsx(Go,{children:g.items.map(m=>d.jsxs("li",{children:[d.jsx(jt,{})," ",m]},m))}),d.jsxs(JP,{children:[d.jsx("i",{className:g.scale>=1?"on":""}),d.jsx("i",{className:g.scale>=2?"on":""}),d.jsx("i",{className:g.scale>=3?"on":""})]}),d.jsx(Eo,{style:{marginTop:12},children:g.effect})]},g.id))})]}),d.jsxs(Ao,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:dt,children:[d.jsx("h2",{children:a.timelineTitle}),d.jsx(tV,{variants:Nt,children:l.map(g=>d.jsxs(nV,{variants:Number(g[0])%2===0?ri:$c,children:[d.jsxs(aV,{children:[a.stepLabel," ",g[0]]}),d.jsx(iV,{children:g[1]}),d.jsx(Eo,{children:g[2]})]},g[0]))})]}),d.jsxs(Ao,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:dt,children:[d.jsx("h2",{children:a.controlTitle}),d.jsxs(rV,{variants:Nt,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.18},children:[d.jsxs(hv,{variants:$c,children:[d.jsx("h3",{children:a.controlPanelTitle}),d.jsx(Eo,{children:a.controlPanelDesc}),d.jsxs(oV,{children:[d.jsxs("div",{children:[a.miniCharts[0],d.jsx("i",{style:{width:"68%"}})]}),d.jsxs("div",{children:[a.miniCharts[1],d.jsx("i",{style:{width:"82%"}})]}),d.jsxs("div",{children:[a.miniCharts[2],d.jsx("i",{style:{width:"59%"}})]})]})]}),d.jsxs(hv,{variants:ri,children:[d.jsx("h3",{children:a.kpiPanelTitle}),d.jsxs(sV,{children:[d.jsxs(Fc,{variants:at,children:[d.jsx("span",{children:a.kpiLabels[0]}),d.jsx("strong",{children:d.jsx(Uc,{start:0,max:38,durationMs:1800,storageKey:"metric_ql"})})]}),d.jsxs(Fc,{variants:at,children:[d.jsx("span",{children:a.kpiLabels[1]}),d.jsx("strong",{children:d.jsx(Uc,{start:0,max:11,suffix:"m",durationMs:1700,storageKey:"metric_rt"})})]}),d.jsxs(Fc,{variants:at,children:[d.jsx("span",{children:a.kpiLabels[2]}),d.jsx("strong",{children:d.jsx(Uc,{start:0,max:43,suffix:"%",durationMs:1900,storageKey:"metric_l2a"})})]}),d.jsxs(Fc,{variants:at,children:[d.jsx("span",{children:a.kpiLabels[3]}),d.jsx("strong",{children:d.jsx(Uc,{start:0,max:3.8,decimals:1,prefix:"x",durationMs:2100,storageKey:"metric_roas"})})]})]}),d.jsxs(dh,{style:{marginTop:12},variants:Nt,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[d.jsx(Vi,{variants:at,children:a.controlBadges[0]}),d.jsx(Vi,{variants:at,children:a.controlBadges[1]}),d.jsx(Vi,{variants:at,children:a.controlBadges[2]})]})]})]})]}),d.jsx(Ao,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:dt,children:d.jsx(Da,{children:d.jsxs(pv,{to:"/kontakt",children:[d.jsx(_n,{})," ",a.ctaBottom]})})})]})]})},xV={hidden:{opacity:0,y:24},show:{opacity:1,y:0}},yV=Ke`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`,vV=Ke`
  0% { box-shadow: 0 0 0 rgba(73, 157, 255, 0); }
  50% { box-shadow: 0 0 30px rgba(73, 157, 255, 0.28); }
  100% { box-shadow: 0 0 0 rgba(73, 157, 255, 0); }
`,wV=R.div`
  position: relative;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: -120px -20px auto;
    height: 420px;
    z-index: -2;
    background:
      radial-gradient(circle at 22% 12%, rgba(31, 115, 255, 0.22), transparent 52%),
      radial-gradient(circle at 78% 22%, rgba(255, 185, 91, 0.2), transparent 50%),
      radial-gradient(circle at 50% 75%, rgba(10, 16, 34, 0.9), rgba(6, 10, 20, 1));
    filter: blur(2px);
  }

  &::after {
    content: '';
    position: absolute;
    inset: -40px 0 auto;
    height: 460px;
    z-index: -1;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 48px 48px;
    mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.8), transparent 84%);
    opacity: 0.26;
  }
`,SV=R.section`
  display: grid;
  gap: 26px;
  grid-template-columns: 1.15fr 1fr;
  align-items: center;
  padding: 84px 0 24px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    padding-top: 52px;
  }
`,kV=R.div`
  h1 {
    font-size: clamp(34px, 7vw, 72px);
    line-height: 1.02;
    letter-spacing: -0.02em;
    margin: 0;
    text-wrap: balance;
  }

  p {
    margin: 18px 0 0;
    max-width: 52ch;
    color: rgba(255, 255, 255, 0.78);
    font-size: clamp(15px, 1.7vw, 18px);
  }

  @media (max-width: 767px) {
    h1 {
      font-size: clamp(32px, 12vw, 52px);
      line-height: 1.05;
    }
  }
`,TV=R.span`
  color: #ffd08a;
  text-shadow: 0 0 28px rgba(255, 193, 104, 0.34);
`,jV=R.div`
  margin-top: 24px;
`,bw=R(ua)`
  min-height: 54px;
  padding: 0 28px;
  border: 1px solid rgba(255, 202, 128, 0.35);
  box-shadow: 0 10px 24px rgba(18, 33, 58, 0.34);

  &:hover,
  &:focus-visible {
    box-shadow: 0 0 0 1px rgba(255, 213, 150, 0.55), 0 16px 30px rgba(255, 183, 77, 0.28);
  }
`,CV=R(ie.div)`
  position: relative;
  min-height: 340px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background:
    linear-gradient(165deg, rgba(16, 24, 44, 0.92), rgba(10, 16, 31, 0.82)),
    radial-gradient(circle at 80% 18%, rgba(71, 154, 255, 0.22), transparent 44%);
  overflow: hidden;
  box-shadow: 0 24px 70px rgba(4, 7, 15, 0.62);

  &::before {
    content: '';
    position: absolute;
    width: 280px;
    height: 280px;
    right: -70px;
    top: -70px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(77, 160, 255, 0.34), transparent 70%);
    filter: blur(14px);
  }
`,AV=R.div`
  position: absolute;
  inset: 22px;
  display: grid;
  gap: 12px;
`,ph=R.div`
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(8, 13, 26, 0.66);
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 13px;
    letter-spacing: 0.02em;
  }
`,hh=R.div`
  flex: 1;
  height: 9px;
  margin-left: 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
`,gh=R(ie.div)`
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #3f8cff, #76b8ff);
`,EV=R(ie.div)`
  margin-top: 4px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(7, 11, 22, 0.7);
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  animation: ${yV} 5.2s ease-in-out infinite;
`,Mo=R(ie.div)`
  border-radius: 10px;
  background: rgba(17, 27, 49, 0.84);
  border: 1px solid rgba(255, 255, 255, 0.12);
  min-height: 64px;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 6px;
  font-size: 12px;

  svg {
    margin-bottom: 4px;
    color: #8dc4ff;
  }
`,MV=R(mt)`
  margin-top: 26px;
`,zV=R.div`
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.86), rgba(10, 16, 30, 0.82));
  padding: 18px;
  box-shadow: 0 20px 54px rgba(5, 9, 18, 0.5);
`,RV=R.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,zo=R(ie.div)`
  position: relative;
  border-radius: 12px;
  padding: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(9, 14, 28, 0.8);
  min-height: 82px;
  display: grid;
  gap: 4px;
  place-content: center;
  text-align: center;

  svg {
    margin: 0 auto;
    color: #8cc2ff;
  }

  @media (min-width: 901px) {
    &:not(:last-child)::after {
      content: '';
      position: absolute;
      right: -14px;
      top: 50%;
      width: 18px;
      height: 2px;
      background: linear-gradient(90deg, rgba(82, 156, 255, 0.85), rgba(82, 156, 255, 0));
    }
  }
`,LV=R.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 10px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,OV=R.div`
  display: inline-flex;
  gap: 6px;
  margin-top: 14px;
  margin-bottom: 8px;
  padding: 6px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(11, 17, 32, 0.72);
`,gv=R.button`
  border: 0;
  min-height: 40px;
  padding: 0 16px;
  border-radius: 999px;
  color: ${({$active:e})=>e?"#08101f":"rgba(255, 255, 255, 0.82)"};
  background: ${({$active:e})=>e?"linear-gradient(120deg, #ffd08a, #fff1cf)":"transparent"};
  box-shadow: ${({$active:e})=>e?"0 8px 20px rgba(255, 201, 125, 0.24)":"none"};
  font-weight: 700;
  cursor: pointer;
  transition:
    background var(--dur-mid) var(--ease-smooth),
    color var(--dur-mid) var(--ease-smooth),
    transform var(--dur-mid) var(--ease-smooth);

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
  }
`,DV=R(ie.article)`
  position: relative;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(11, 17, 32, 0.78);
  padding: ${({$recommended:e})=>e?"24px":"20px"};
  box-shadow: ${({$recommended:e})=>e?"0 22px 60px rgba(32, 78, 148, 0.36)":"0 14px 34px rgba(5, 9, 18, 0.45)"};
  transform: ${({$recommended:e})=>e?"translateY(-6px)":"none"};
  border-color: ${({$recommended:e})=>e?"rgba(118, 182, 255, 0.68)":"rgba(255, 255, 255, 0.14)"};
  animation: ${({$recommended:e})=>e?vV:"none"} 4.6s ease-in-out infinite;

  &:hover {
    transform: ${({$recommended:e})=>e?"translateY(-9px)":"translateY(-5px)"};
    border-color: rgba(245, 195, 120, 0.58);
  }
`,PV=R.span`
  position: absolute;
  right: 16px;
  top: 14px;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 999px;
  background: linear-gradient(120deg, rgba(118, 182, 255, 0.24), rgba(255, 206, 132, 0.24));
  border: 1px solid rgba(153, 201, 255, 0.45);
`,VV=R.div`
  font-size: 34px;
  font-weight: 800;
  line-height: 1;
  margin: 10px 0 3px;
  color: #ffd28f;
`,NV=R.div`
  color: rgba(255, 255, 255, 0.66);
  font-size: 13px;
`,mh=R.div`
  margin-top: 14px;
  margin-bottom: 8px;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.58);
`,bh=R.ul`
  margin: 0;
  padding: 0;
  display: grid;
  gap: 8px;

  li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
  }

  svg {
    color: #82beff;
    font-size: 13px;
  }
`,BV=R.div`
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
`,_V=R.div`
  margin-top: 16px;
  padding: 16px;
  border-radius: 14px;
  border: 1px solid rgba(118, 182, 255, 0.2);
  background:
    linear-gradient(180deg, rgba(17, 27, 49, 0.82), rgba(10, 16, 31, 0.84)),
    radial-gradient(circle at top right, rgba(255, 206, 132, 0.12), transparent 42%);
`,$V=R.div`
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.58);
`,HV=R.div`
  margin-top: 8px;
  font-size: 28px;
  line-height: 1.05;
  font-weight: 800;
  color: #8fc5ff;
`,UV=R.div`
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 13px;
`,GV=R.div`
  margin-top: 12px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  overflow: hidden;
  background: rgba(11, 17, 32, 0.7);
`,IV=R.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: 12px 16px;
  gap: 8px;
  background: rgba(255, 255, 255, 0.06);
  font-weight: 700;
`,Ur=R.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: 14px 16px;
  gap: 8px;
  align-items: center;
  transition: background var(--dur-mid) var(--ease-smooth);

  &:nth-child(even) {
    background: rgba(255, 255, 255, 0.03);
  }

  &:hover {
    background: rgba(77, 154, 255, 0.1);
  }

  span:last-child {
    background: rgba(255, 209, 137, 0.1);
    border-radius: 8px;
    padding: 4px 8px;
  }
`,On=R.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;

  svg {
    color: #8ec4ff;
  }
`,FV=R.div`
  margin-top: 12px;
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,xh=R.div`
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(11, 17, 32, 0.78);
  padding: 18px;
  display: grid;
  gap: 8px;
  min-height: 132px;

  svg {
    font-size: 24px;
    color: #ffd08a;
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.76);
  }
`,qV=R.section`
  margin-top: 30px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background:
    radial-gradient(circle at 15% 10%, rgba(74, 156, 255, 0.24), transparent 40%),
    radial-gradient(circle at 85% 12%, rgba(255, 194, 112, 0.22), transparent 44%),
    linear-gradient(140deg, rgba(8, 13, 27, 0.94), rgba(11, 18, 34, 0.9));
  padding: 36px 24px;
  text-align: center;
  box-shadow: 0 26px 70px rgba(3, 7, 15, 0.62);

  h2 {
    margin: 0;
    font-size: clamp(28px, 5.2vw, 42px);
  }

  p {
    margin: 12px auto 0;
    max-width: 64ch;
    color: rgba(255, 255, 255, 0.8);
  }
`,KV=R(bw)`
  margin-top: 20px;
  min-height: 58px;
  padding: 0 32px;
  font-size: 16px;
`,YV=()=>{const{t:e}=Ie(),[t,a]=j.useState("monthly"),o=["starter","business","pro"].map(l=>({key:l,recommended:l==="business",name:e(`pricing.packages.${l}.name`),desc:e(`pricing.packages.${l}.desc`),price:e(`pricing.packages.${l}.price`),range:e(`pricing.packages.${l}.range`),core:e(`pricing.packages.${l}.core`,{returnObjects:!0}),plus:e(`pricing.packages.${l}.plus`,{returnObjects:!0}),outcome:e(`pricing.packages.${l}.outcome`),subscriptionPrice:e(`pricing.packages.${l}.subscription.${t}.price`),subscriptionMeta:e(`pricing.packages.${l}.subscription.${t}.meta`),subscriptionItems:e(`pricing.packages.${l}.subscription.includes`,{returnObjects:!0})}));return d.jsx(mn,{children:d.jsx(en,{children:d.jsxs(wV,{children:[d.jsxs(SV,{as:ie.section,initial:"hidden",animate:"show",variants:xV,transition:{duration:.64,ease:hn},children:[d.jsxs(kV,{children:[d.jsxs("h1",{children:[e("pricing.hero.titleLine1"),d.jsx("br",{}),e("pricing.hero.titleLine2"),d.jsx("br",{}),d.jsx(TV,{children:e("pricing.hero.titleLine3")})]}),d.jsx("p",{children:e("pricing.hero.subtitle")}),d.jsx(jV,{children:d.jsxs(bw,{to:"/kontakt",children:[d.jsx(_n,{})," ",e("pricing.hero.cta")]})})]}),d.jsx(CV,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.7,delay:.12},children:d.jsxs(AV,{children:[d.jsxs(ph,{children:[d.jsx("strong",{children:e("pricing.hero.metrics.leadVolume")}),d.jsx(hh,{children:d.jsx(gh,{initial:{width:"22%"},animate:{width:["22%","72%","58%","72%"]},transition:{duration:6,delay:.35,repeat:1/0,ease:"easeInOut"}})})]}),d.jsxs(ph,{children:[d.jsx("strong",{children:e("pricing.hero.metrics.qualifiedLeads")}),d.jsx(hh,{children:d.jsx(gh,{initial:{width:"18%"},animate:{width:["18%","61%","49%","61%"]},transition:{duration:5.6,delay:.48,repeat:1/0,ease:"easeInOut"}})})]}),d.jsxs(ph,{children:[d.jsx("strong",{children:e("pricing.hero.metrics.costPerLead")}),d.jsx(hh,{children:d.jsx(gh,{initial:{width:"76%"},animate:{width:["76%","42%","54%","42%"]},transition:{duration:6.2,delay:.62,repeat:1/0,ease:"easeInOut"}})})]}),d.jsxs(EV,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.6,delay:.7},children:[d.jsxs(Mo,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut"},children:[d.jsx(Xh,{}),e("pricing.hero.funnel.traffic")]}),d.jsxs(Mo,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut",delay:.25},children:[d.jsx(ku,{}),e("pricing.hero.funnel.landing")]}),d.jsxs(Mo,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut",delay:.5},children:[d.jsx(Tu,{}),e("pricing.hero.funnel.leads")]}),d.jsxs(Mo,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut",delay:.75},children:[d.jsx(el,{}),e("pricing.hero.funnel.crm")]}),d.jsxs(Mo,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut",delay:1},children:[d.jsx(qi,{}),e("pricing.hero.funnel.sales")]})]})]})})]}),d.jsxs(MV,{children:[d.jsx("h2",{children:e("pricing.flow.title")}),d.jsx(zV,{children:d.jsxs(RV,{children:[d.jsxs(zo,{whileHover:{y:-3},children:[d.jsx(Xh,{}),e("pricing.flow.steps.traffic")]}),d.jsxs(zo,{whileHover:{y:-3},children:[d.jsx(ku,{}),e("pricing.flow.steps.landing")]}),d.jsxs(zo,{whileHover:{y:-3},children:[d.jsx(Tu,{}),e("pricing.flow.steps.capture")]}),d.jsxs(zo,{whileHover:{y:-3},children:[d.jsx(el,{}),e("pricing.flow.steps.crm")]}),d.jsxs(zo,{whileHover:{y:-3},children:[d.jsx(qi,{}),e("pricing.flow.steps.sales")]})]})})]}),d.jsxs(mt,{children:[d.jsx("h2",{children:e("pricing.packages.title")}),d.jsxs(OV,{role:"tablist","aria-label":e("pricing.packages.subscriptionTitle"),children:[d.jsx(gv,{type:"button",$active:t==="monthly",onClick:()=>a("monthly"),children:e("pricing.packages.billing.monthly")}),d.jsx(gv,{type:"button",$active:t==="yearly",onClick:()=>a("yearly"),children:e("pricing.packages.billing.yearly")})]}),d.jsx(LV,{children:o.map(l=>d.jsxs(DV,{$recommended:l.recommended,whileHover:{y:l.recommended?-6:-4},transition:{duration:.25},children:[l.recommended?d.jsx(PV,{children:e("pricing.packages.badge")}):null,d.jsx("h3",{children:l.name}),d.jsx("p",{children:l.desc}),d.jsx(VV,{children:l.price}),d.jsx(NV,{children:l.range}),d.jsx(mh,{children:e("pricing.packages.coreTitle")}),d.jsx(bh,{children:l.core.map(u=>d.jsxs("li",{children:[d.jsx(Kt,{})," ",u]},u))}),d.jsx(mh,{children:e("pricing.packages.plusTitle")}),d.jsx(bh,{children:l.plus.map(u=>d.jsxs("li",{children:[d.jsx(Kt,{})," ",u]},u))}),d.jsxs(_V,{children:[d.jsx($V,{children:e("pricing.packages.subscriptionTitle")}),d.jsx(HV,{children:l.subscriptionPrice}),d.jsx(UV,{children:l.subscriptionMeta}),d.jsx(mh,{children:e("pricing.packages.subscriptionIncludesTitle")}),d.jsx(bh,{children:l.subscriptionItems.map(u=>d.jsxs("li",{children:[d.jsx(Kt,{})," ",u]},u))})]}),d.jsxs(BV,{children:[d.jsx("strong",{children:e("pricing.packages.outcomeLabel")})," ",l.outcome]})]},l.key))})]}),d.jsxs(mt,{children:[d.jsx("h2",{children:e("pricing.comparison.title")}),d.jsxs(GV,{children:[d.jsxs(IV,{children:[d.jsx("span",{children:e("pricing.comparison.headers.feature")}),d.jsx("span",{children:e("pricing.comparison.headers.starter")}),d.jsx("span",{children:e("pricing.comparison.headers.business")}),d.jsx("span",{children:e("pricing.comparison.headers.pro")})]}),d.jsxs(Ur,{children:[d.jsx("span",{children:e("pricing.comparison.rows.landing")}),d.jsxs(On,{children:[d.jsx(Kt,{})," ",e("pricing.comparison.yes")]}),d.jsxs(On,{children:[d.jsx(Kt,{})," ",e("pricing.comparison.yes")]}),d.jsxs(On,{children:[d.jsx(Kt,{})," ",e("pricing.comparison.yes")]})]}),d.jsxs(Ur,{children:[d.jsx("span",{children:e("pricing.comparison.rows.multi")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsxs(On,{children:[d.jsx(Kt,{})," ",e("pricing.comparison.yes")]}),d.jsxs(On,{children:[d.jsx(Kt,{})," ",e("pricing.comparison.yes")]})]}),d.jsxs(Ur,{children:[d.jsx("span",{children:e("pricing.comparison.rows.crm")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsxs(On,{children:[d.jsx(Kt,{})," ",e("pricing.comparison.yes")]}),d.jsxs(On,{children:[d.jsx(Kt,{})," ",e("pricing.comparison.yes")]})]}),d.jsxs(Ur,{children:[d.jsx("span",{children:e("pricing.comparison.rows.ai")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsxs(On,{children:[d.jsx(Kt,{})," ",e("pricing.comparison.yes")]})]}),d.jsxs(Ur,{children:[d.jsx("span",{children:e("pricing.comparison.rows.ads")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsxs(On,{children:[d.jsx(Kt,{})," ",e("pricing.comparison.yes")]})]}),d.jsxs(Ur,{children:[d.jsx("span",{children:e("pricing.comparison.rows.dashboard")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsxs(On,{children:[d.jsx(Kt,{})," ",e("pricing.comparison.yes")]}),d.jsxs(On,{children:[d.jsx(Kt,{})," ",e("pricing.comparison.yes")]})]})]})]}),d.jsxs(mt,{children:[d.jsx("h2",{children:e("pricing.trust.title")}),d.jsxs(FV,{children:[d.jsxs(xh,{children:[d.jsx(J4,{}),d.jsx("strong",{children:e("pricing.trust.delivery.title")}),d.jsx("p",{children:e("pricing.trust.delivery.desc")})]}),d.jsxs(xh,{children:[d.jsx(pE,{}),d.jsx("strong",{children:e("pricing.trust.support.title")}),d.jsx("p",{children:e("pricing.trust.support.desc")})]}),d.jsxs(xh,{children:[d.jsx(uE,{}),d.jsx("strong",{children:e("pricing.trust.dsgvo.title")}),d.jsx("p",{children:e("pricing.trust.dsgvo.desc")})]})]})]}),d.jsxs(qV,{children:[d.jsx("h2",{children:e("pricing.final.title")}),d.jsx("p",{children:e("pricing.final.subtitle")}),d.jsxs(KV,{to:"/kontakt",children:[d.jsx(_n,{})," ",e("pricing.final.cta")]})]})]})})})},mv="/assets/photo_2025-09-16_22-57-47-BZW9LnVG.jpg",bv="/assets/photo_2025-09-16_22-58-01-CZJ1euxS.jpg",xv="/assets/photo_2025-09-16_22-58-06-Byl6jOLf.jpg",yv="/assets/photo_2025-09-16_22-58-10-Bd-7i7_Y.jpg",vv="/assets/photo_2025-09-16_22-58-14-BefjFQXO.jpg",wv="/assets/photo_2025-09-16_22-58-19-CMYu6dTK.jpg",XV=R.div`
  @keyframes chartPulse {
    0%,
    100% {
      opacity: 0.78;
    }
    50% {
      opacity: 1;
    }
  }

  @keyframes drawLine {
    from {
      stroke-dashoffset: 180;
    }
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes flowGlow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes neonPulse {
    0%,
    100% {
      opacity: 0.78;
      text-shadow: 0 0 10px rgba(104, 207, 255, 0.32);
    }
    50% {
      opacity: 1;
      text-shadow: 0 0 18px rgba(110, 236, 255, 0.62);
    }
  }

  @keyframes lineFlow {
    from {
      stroke-dashoffset: 0;
    }
    to {
      stroke-dashoffset: -40;
    }
  }

  @keyframes dashboardBreath {
    0%,
    100% {
      border-color: rgba(124, 193, 255, 0.32);
      background-position: 0% 50%;
      box-shadow:
        0 0 0 1px rgba(125, 210, 255, 0.2) inset,
        0 24px 50px rgba(2, 8, 20, 0.52);
    }
    50% {
      border-color: rgba(124, 220, 255, 0.52);
      background-position: 100% 50%;
      box-shadow:
        0 0 0 1px rgba(141, 218, 255, 0.28) inset,
        0 30px 60px rgba(3, 12, 28, 0.62);
    }
  }

  @keyframes metricFloat {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-4px);
    }
  }

  @keyframes tileGlow {
    0%,
    100% {
      border-color: rgba(111, 178, 255, 0.18);
      background-color: rgba(11, 15, 27, 0.75);
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
    }
    50% {
      border-color: rgba(116, 210, 255, 0.46);
      background-color: rgba(13, 22, 38, 0.92);
      box-shadow: 0 16px 34px rgba(8, 31, 61, 0.36);
    }
  }

  .references-page {
    background:
      radial-gradient(960px 400px at 12% -10%, rgba(27, 116, 255, 0.22), transparent 60%),
      radial-gradient(700px 360px at 86% 2%, rgba(33, 244, 178, 0.12), transparent 66%),
      linear-gradient(180deg, #060b14 0%, #0b1220 45%, #0b0f17 100%);
  }

  .references-hero h1,
  .references-title {
    font-family: 'Geist', 'Inter', 'Segoe UI', sans-serif;
    background: linear-gradient(90deg, #89d2ff, #4fb4ff, #9cefbf);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .references-hero-grid {
    display: grid;
    gap: 16px;
    grid-template-columns: 1.1fr 1fr;
    align-items: stretch;
  }

  .references-hero-copy {
    display: grid;
    gap: 12px;
  }

  .references-hero-dashboard {
    position: relative;
    display: grid;
    gap: 12px;
    background:
      radial-gradient(360px 140px at 76% -16%, rgba(76, 151, 255, 0.35), transparent 64%),
      rgba(8, 19, 34, 0.88);
    background-size: 150% 150%;
    border-color: rgba(124, 193, 255, 0.42);
    box-shadow:
      0 0 0 1px rgba(125, 210, 255, 0.2) inset,
      0 24px 50px rgba(2, 8, 20, 0.52);
    animation: dashboardBreath 8.6s ease-in-out infinite;
  }

  .references-hero-dashboard::after {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 14px;
    pointer-events: none;
    background: radial-gradient(400px 90px at var(--glow-x, 20%) 0%, rgba(96, 206, 255, 0.15), transparent 65%);
    animation: shimmer 9.2s ease-in-out infinite;
  }

  @keyframes shimmer {
    0%,
    100% {
      --glow-x: 10%;
      opacity: 0.45;
    }
    50% {
      --glow-x: 85%;
      opacity: 0.95;
    }
  }

  .references-dashboard-label {
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(194, 225, 255, 0.84);
  }

  .references-kpi-row {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .references-kpi-item {
    display: grid;
    gap: 2px;
    padding: 10px;
    border-radius: 12px;
    border: 1px solid rgba(137, 209, 255, 0.3);
    background: rgba(12, 29, 52, 0.64);
    animation: metricFloat 6.2s ease-in-out infinite;
  }

  .references-kpi-item:nth-child(2) {
    animation-delay: -1.7s;
  }

  .references-kpi-item:nth-child(3) {
    animation-delay: -3.4s;
  }

  .references-kpi-value {
    font-size: clamp(24px, 3.4vw, 38px);
    line-height: 1;
    font-weight: 800;
    color: #d6f5ff;
    text-shadow: 0 0 16px rgba(83, 170, 255, 0.36);
    animation: neonPulse 3.8s ease-in-out infinite;
  }

  .references-kpi-label {
    font-size: 13px;
    color: rgba(210, 230, 255, 0.84);
  }

  .references-growth-chart-wrap {
    border-radius: 12px;
    border: 1px solid rgba(135, 212, 255, 0.24);
    background: rgba(7, 18, 33, 0.76);
    padding: 10px 12px;
  }

  .references-chart-label {
    font-size: 12px;
    color: rgba(190, 214, 241, 0.82);
    margin-bottom: 6px;
  }

  .references-growth-chart {
    width: 100%;
    height: 96px;
  }

  .references-growth-chart path {
    fill: none;
    stroke: url(#refsGrowth);
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
    animation: drawLine 1.2s ease-out both, chartPulse 2.2s ease-in-out infinite;
    filter: drop-shadow(0 0 8px rgba(72, 186, 255, 0.45));
  }

  .references-filter-wrap {
    display: grid;
    gap: 10px;
  }

  .references-filter-groups {
    display: grid;
    gap: 12px;
  }

  .references-filter-group {
    display: grid;
    gap: 8px;
    padding: 12px;
    border-radius: 14px;
    border: 1px solid rgba(130, 177, 245, 0.2);
    background: rgba(7, 17, 33, 0.58);
  }

  .references-filter-group-label {
    font-size: 12px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: rgba(188, 215, 249, 0.75);
  }

  .references-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .references-filter-chip {
    border-radius: 999px;
    border: 1px solid rgba(169, 208, 255, 0.28);
    background: rgba(14, 34, 60, 0.72);
    color: rgba(219, 237, 255, 0.92);
    font-size: 15px;
    font-weight: 700;
    padding: 10px 16px;
    transition:
      border-color var(--dur-fast) var(--ease-smooth),
      background var(--dur-fast) var(--ease-smooth),
      transform var(--dur-fast) var(--ease-smooth),
      box-shadow var(--dur-fast) var(--ease-smooth);
  }

  .references-filter-chip:hover {
    transform: translateY(-1px) scale(1.02);
    border-color: rgba(122, 203, 255, 0.84);
    box-shadow: 0 8px 22px rgba(54, 134, 248, 0.28);
  }

  .references-filter-chip:focus-visible {
    outline: 2px solid rgba(121, 193, 255, 0.95);
    outline-offset: 2px;
  }

  .references-filter-chip.active {
    border-color: rgba(121, 200, 255, 0.96);
    background: linear-gradient(110deg, rgba(21, 67, 112, 0.9), rgba(11, 47, 86, 0.94));
    color: #dff5ff;
    box-shadow:
      0 0 0 1px rgba(119, 188, 255, 0.42) inset,
      0 8px 24px rgba(17, 95, 180, 0.3);
  }

  .references-metric-band .grid-3 {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }

  .references-metric-card {
    position: relative;
    display: grid;
    gap: 8px;
    animation: tileGlow 7.8s ease-in-out infinite;
  }

  .references-metric-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 14px;
    pointer-events: none;
    background: linear-gradient(120deg, rgba(75, 167, 255, 0.04), rgba(83, 251, 207, 0.14), rgba(75, 167, 255, 0.04));
    background-size: 220% 220%;
    animation: flowGlow 6.2s ease-in-out infinite;
    opacity: 0.8;
  }

  .references-metric-card:nth-child(2n) {
    animation-delay: -1.4s, -1.4s;
  }

  .references-metric-card:nth-child(3n) {
    animation-delay: -2.9s, -2.9s;
  }

  .references-metric-card:nth-child(5n) {
    animation-delay: -4.3s, -4.3s;
  }

  .references-metric-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .references-metric-card h3 {
    margin-bottom: 0;
  }

  .references-kpi-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border-radius: 999px;
    border: 1px solid rgba(106, 245, 191, 0.44);
    background: rgba(36, 190, 139, 0.18);
    color: #95f4cc;
    font-weight: 700;
    font-size: 13px;
    padding: 4px 10px;
  }

  .references-metric-line {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 2px;
    color: rgba(220, 234, 252, 0.86);
  }

  .references-sparkline {
    width: 100%;
    height: 52px;
    opacity: 0.9;
  }

  .references-sparkline path {
    fill: none;
    stroke: #66d4ff;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
    filter: drop-shadow(0 0 8px rgba(102, 212, 255, 0.45));
  }

  .references-case-card {
    display: grid;
    gap: 10px;
  }

  .references-case-label {
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: rgba(140, 194, 255, 0.84);
    margin-bottom: 4px;
  }

  .references-case-block p {
    color: rgba(224, 235, 248, 0.92);
  }

  .references-case-result {
    padding: 10px;
    border-radius: 12px;
    border: 1px solid rgba(103, 245, 183, 0.3);
    background: rgba(20, 61, 51, 0.25);
    display: grid;
    gap: 6px;
    margin-top: 2px;
  }

  .references-case-result p {
    font-size: 22px;
    font-weight: 800;
  }

  .references-case-result span {
    color: #90f7cb;
    text-shadow: 0 0 12px rgba(63, 233, 163, 0.38);
  }

  .references-compare-shell {
    display: grid;
    gap: 14px;
  }

  .references-compare-chart {
    border-radius: 18px;
    border: 1px solid rgba(118, 173, 255, 0.34);
    background: linear-gradient(180deg, rgba(7, 18, 33, 0.94), rgba(6, 16, 29, 0.96));
    padding: 14px;
    box-shadow: 0 20px 40px rgba(2, 8, 20, 0.45);
  }

  .references-compare-graph {
    width: 100%;
    height: clamp(260px, 34vw, 420px);
    border-radius: 12px;
    background: rgba(5, 14, 26, 0.72);
  }

  .references-compare-graph .grid-line {
    stroke: rgba(145, 187, 245, 0.2);
    stroke-width: 0.5;
    stroke-dasharray: 2 2;
  }

  .references-compare-graph .axis-line {
    stroke: rgba(180, 215, 255, 0.45);
    stroke-width: 0.75;
  }

  .references-compare-graph .before-line {
    fill: none;
    stroke: #f97316;
    stroke-width: 2.2;
    filter: drop-shadow(0 0 8px rgba(249, 115, 22, 0.35));
  }

  .references-compare-graph .after-line {
    fill: none;
    stroke: #22d3ee;
    stroke-width: 2.8;
    filter: drop-shadow(0 0 10px rgba(34, 211, 238, 0.45));
  }

  .references-compare-graph .before-point {
    fill: #fb923c;
    stroke: rgba(26, 13, 5, 0.9);
    stroke-width: 0.45;
  }

  .references-compare-graph .after-point {
    fill: #22d3ee;
    stroke: rgba(3, 24, 30, 0.95);
    stroke-width: 0.5;
  }

  .references-compare-graph .point-delta {
    font-size: 2.6px;
    font-weight: 700;
    text-anchor: middle;
    paint-order: stroke;
    stroke: rgba(4, 11, 20, 0.85);
    stroke-width: 0.55px;
    stroke-linejoin: round;
  }

  .references-compare-graph .point-delta.before {
    fill: #ffb171;
  }

  .references-compare-graph .point-delta.after {
    fill: #a6f3ff;
  }

  .references-compare-days {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 8px;
    margin-top: 10px;
  }

  .references-compare-days span {
    font-size: 12px;
    color: rgba(189, 214, 243, 0.82);
    text-align: center;
  }

  .references-compare-legend {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    color: rgba(223, 239, 255, 0.9);
    font-size: 13px;
  }

  .references-compare-legend .dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 6px;
  }

  .references-compare-legend .dot.before {
    background: #f97316;
    box-shadow: 0 0 8px rgba(249, 115, 22, 0.45);
  }

  .references-compare-legend .dot.after {
    background: #22d3ee;
    box-shadow: 0 0 8px rgba(34, 211, 238, 0.45);
  }

  .references-compare-kpis {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .references-compare-kpis .kpi-panel {
    border-radius: 14px;
    padding: 14px;
    border: 1px solid rgba(130, 176, 245, 0.28);
    background: rgba(7, 17, 33, 0.74);
    display: grid;
    gap: 6px;
  }

  .references-compare-kpis .kpi-panel h3 {
    margin-bottom: 4px;
  }

  .references-compare-kpis .kpi-panel p {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .references-compare-kpis .kpi-panel.before span {
    color: #fb923c;
    font-weight: 700;
  }

  .references-compare-kpis .kpi-panel.after span {
    color: #6ee7ff;
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    .references-hero-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 767px) {
    .references-kpi-row {
      grid-template-columns: 1fr;
    }

    .references-filter-chip {
      width: 100%;
      justify-content: center;
    }

    .references-compare-kpis {
      grid-template-columns: 1fr;
    }
  }

`,WV={hidden:{opacity:0,y:20},show:{opacity:1,y:0}},QV=[{niche:"handwerk",labelKey:"references.niches.handwerk",metricLabelKey:"references.metrics.moreRequests",metricValue:"+41%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[16,18,22,24,27,31,34]},{niche:"praxen",labelKey:"references.niches.praxen",metricLabelKey:"references.metrics.moreAppointments",metricValue:"+33%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[14,15,19,23,25,27,30]},{niche:"werkstatt",labelKey:"references.niches.werkstatt",metricLabelKey:"references.metrics.moreCalls",metricValue:"+46%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[11,14,17,22,26,31,36]},{niche:"gastronomie",labelKey:"references.niches.gastronomie",metricLabelKey:"references.metrics.moreReservations",metricValue:"+27%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[16,16,19,21,22,24,27]},{niche:"beauty",labelKey:"references.niches.beauty",metricLabelKey:"references.metrics.moreBookings",metricValue:"+31%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[13,16,18,21,23,25,29]},{niche:"immobilien",labelKey:"references.niches.immobilien",metricLabelKey:"references.metrics.moreLeads",metricValue:"+22%",timeframe:"30-90",source:"GA4 / Search Console",sparkline:[9,11,12,14,16,17,19]},{niche:"kanzlei",labelKey:"references.niches.kanzlei",metricLabelKey:"references.metrics.moreIntroCalls",metricValue:"+24%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[11,12,14,15,17,18,20]},{niche:"fitnessPhysio",labelKey:"references.niches.fitnessPhysio",metricLabelKey:"references.metrics.moreTrialSessions",metricValue:"+29%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[10,13,15,18,20,22,25]},{niche:"reinigung",labelKey:"references.niches.reinigung",metricLabelKey:"references.metrics.moreOffers",metricValue:"+35%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[12,14,17,20,22,25,28]},{niche:"umzugTransport",labelKey:"references.niches.umzugTransport",metricLabelKey:"references.metrics.moreQualifiedLeads",metricValue:"+26%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[11,13,14,17,18,20,23]},{niche:"coachingBeratung",labelKey:"references.niches.coachingBeratung",metricLabelKey:"references.metrics.moreFirstContacts",metricValue:"+28%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[10,12,14,16,18,20,22]},{niche:"bildungKurse",labelKey:"references.niches.bildungKurse",metricLabelKey:"references.metrics.moreCourseSignups",metricValue:"+32%",timeframe:"30-90",source:"GA4 / Search Console / Ads",sparkline:[8,10,13,15,17,20,23]}],Sv=[{id:"c1",titleKey:"references.cases.c1.title",category:"handwerk",challengeKey:"references.cases.c1.challenge",solutionKey:"references.cases.c1.solution",metrics:[{metricLabelKey:"references.metrics.moreRequests",metricValue:"+41%"},{metricLabelKey:"references.metrics.budgetEfficiency",metricValue:"+33%"}],timeframe:"30-90",source:"GA4 / Google Ads",beforeImage:mv,afterImage:bv},{id:"c2",titleKey:"references.cases.c2.title",category:"praxen",challengeKey:"references.cases.c2.challenge",solutionKey:"references.cases.c2.solution",metrics:[{metricLabelKey:"references.metrics.moreAppointments",metricValue:"+33%"},{metricLabelKey:"references.metrics.moreInteractions",metricValue:"+46%"}],timeframe:"30-90",source:"GA4 / Meta Ads",beforeImage:xv,afterImage:yv},{id:"c3",titleKey:"references.cases.c3.title",category:"werkstatt",challengeKey:"references.cases.c3.challenge",solutionKey:"references.cases.c3.solution",metrics:[{metricLabelKey:"references.metrics.moreQualifiedLeads",metricValue:"+32%"},{metricLabelKey:"references.metrics.moreLeadsPerBudget",metricValue:"+31%"}],timeframe:"30-90",source:"GA4 / Google Ads",beforeImage:vv,afterImage:wv},{id:"c4",titleKey:"references.cases.c4.title",category:"gastronomie",challengeKey:"references.cases.c4.challenge",solutionKey:"references.cases.c4.solution",metrics:[{metricLabelKey:"references.metrics.moreReservations",metricValue:"+27%"},{metricLabelKey:"references.metrics.moreCalls",metricValue:"+21%"}],timeframe:"30-90",source:"GA4 / Meta Ads",beforeImage:xv,afterImage:bv},{id:"c5",titleKey:"references.cases.c5.title",category:"immobilien",challengeKey:"references.cases.c5.challenge",solutionKey:"references.cases.c5.solution",metrics:[{metricLabelKey:"references.metrics.moreLeads",metricValue:"+22%"},{metricLabelKey:"references.metrics.moreIntroCalls",metricValue:"+19%"}],timeframe:"30-90",source:"GA4 / Search Console / Ads",beforeImage:mv,afterImage:wv},{id:"c6",titleKey:"references.cases.c6.title",category:"kanzlei",challengeKey:"references.cases.c6.challenge",solutionKey:"references.cases.c6.solution",metrics:[{metricLabelKey:"references.metrics.moreFirstContacts",metricValue:"+24%"},{metricLabelKey:"references.metrics.moreConsultations",metricValue:"+18%"}],timeframe:"30-90",source:"GA4 / Google Ads",beforeImage:vv,afterImage:yv}],ZV=[{label:"references.filterGroups.all",items:["all"]},{label:"references.filterGroups.localServices",items:["handwerk","werkstatt","reinigung","umzugTransport"]},{label:"references.filterGroups.healthBeauty",items:["praxen","fitnessPhysio","beauty"]},{label:"references.filterGroups.professional",items:["immobilien","kanzlei","coachingBeratung","bildungKurse","gastronomie"]}],JV=[{value:"+41%",label:"references.kpis.leads"},{value:"+27%",label:"references.kpis.conversion"},{value:"+32%",label:"references.kpis.traffic"}],yh={traffic:"-12%",leads:"-18%",conversion:"-9%"},vh={traffic:"+32%",leads:"+41%",conversion:"+27%"},eN=[0,15,30,45,60,75,90],kv=[11,10,10,9,10,9,10],Tv=[8,14,21,29,38,48,58],rl=(e,t,a)=>Math.max(t,Math.min(a,e)),xw="M 0 99 C 30 72, 70 30, 100 1",yw="M 0 39 C 35 30, 68 14, 100 1",jv=[98,94,89,83,77,70,62,54,46,38,29,21,12,3],Nu=e=>{if(e.length<2)return xw;const t=.1;let a=`M ${e[0].x.toFixed(2)} ${e[0].y.toFixed(2)}`;for(let i=0;i<e.length-1;i+=1){const o=e[i-1]??e[i],l=e[i],u=e[i+1],p=e[i+2]??u,f=l.x+(u.x-o.x)*t/6,g=l.y+(u.y-o.y)*t/6,m=u.x-(p.x-l.x)*t/6,x=u.y-(p.y-l.y)*t/6;a+=` C ${f.toFixed(2)} ${g.toFixed(2)}, ${m.toFixed(2)} ${x.toFixed(2)}, ${u.x.toFixed(2)} ${u.y.toFixed(2)}`}return a},tN=e=>{const i=jv.map((o,l)=>{const u=0+100*l/(jv.length-1),p=Math.sin(e*1.1+l*1.05)*6.8,f=Math.sin(e*.72+l*.46)*3.4,g=Math.sin(e*1.8+l*1.7)*1.6,m=rl(o+p+f+g,1,99);return{x:u,y:m}});return Nu(i)},nN=(e,t)=>{if(!e||e.length<2)return yw;const a=Math.min(...e),i=Math.max(...e),o=Math.max(1,i-a),l=e.map((u,p)=>{const f=p/(e.length-1)*100,m=39-(u-a)/o*38,x=Math.sin(t*1.15+p*1.2)*3.6,y=Math.sin(t*.74+p*.52)*2,v=Math.sin(t*1.9+p*1.65)*.9,S=rl(m+x+y+v,1,39);return{x:f,y:S}});return Nu(l)},Cv=e=>e.map((a,i)=>{const o=i/(e.length-1)*100,l=rl(56-a/60*52,2,58);return{x:o,y:l,value:a}}),Av=(e,t)=>{if(t===0)return"*";const a=e[t]-e[t-1];return a>0?`+${a}`:a<0?`${a}`:"0"},aN=()=>{const{t:e}=Ie(),[t,a]=j.useState("all"),[i,o]=j.useState(0),l=j.useMemo(()=>Sv.filter(v=>t==="all"||v.category===t),[t]),u=j.useMemo(()=>QV.filter(v=>t==="all"||v.niche===t),[t]),p=l[0]??Sv[0],f=j.useMemo(()=>tN(i)||xw,[i]),g=j.useMemo(()=>Cv(kv),[]),m=j.useMemo(()=>Cv(Tv),[]),x=j.useMemo(()=>Nu(g),[g]),y=j.useMemo(()=>Nu(m),[m]);return j.useEffect(()=>{const v=window.setInterval(()=>{o(S=>(S+.12)%(Math.PI*8))},70);return()=>window.clearInterval(v)},[]),d.jsx(XV,{children:d.jsx(mn,{className:"references-page",children:d.jsxs(en,{children:[d.jsx(Un,{className:"references-hero",as:ie.section,initial:"hidden",animate:"show",variants:WV,transition:{duration:.62,ease:hn},children:d.jsxs("div",{className:"references-hero-grid",children:[d.jsxs("div",{className:"references-hero-copy",children:[d.jsx("h1",{children:d.jsx(Yi,{text:e("references.h1"),durationMs:2800,storageKey:"refs_h1_new_once"})}),d.jsx("p",{children:e("references.subtitle")}),d.jsx(qe,{children:e("references.trustline")})]}),d.jsxs(Ue,{className:"references-hero-dashboard",as:ie.div,whileHover:{y:-4},animate:{boxShadow:["0 0 0 1px rgba(125, 210, 255, 0.2) inset, 0 24px 50px rgba(2, 8, 20, 0.52)","0 0 0 1px rgba(141, 218, 255, 0.32) inset, 0 30px 62px rgba(3, 12, 28, 0.62)","0 0 0 1px rgba(125, 210, 255, 0.2) inset, 0 24px 50px rgba(2, 8, 20, 0.52)"],borderColor:["rgba(124, 193, 255, 0.32)","rgba(124, 220, 255, 0.58)","rgba(124, 193, 255, 0.32)"]},transition:{duration:5.2,repeat:1/0,ease:"easeInOut"},children:[d.jsx("p",{className:"references-dashboard-label",children:e("references.performanceDashboard")}),d.jsx("div",{className:"references-kpi-row",children:JV.map((v,S)=>d.jsxs(ie.div,{className:"references-kpi-item",animate:{y:[0,-6,0],opacity:[.86,1,.86]},transition:{duration:3.4,delay:S*.45,repeat:1/0,ease:"easeInOut"},children:[d.jsx("span",{className:"references-kpi-value",children:v.value}),d.jsx("span",{className:"references-kpi-label",children:e(v.label)})]},v.label))}),d.jsxs("div",{className:"references-growth-chart-wrap",children:[d.jsx("p",{className:"references-chart-label",children:e("references.growthCurve90")}),d.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"none",className:"references-growth-chart",role:"img","aria-label":e("references.growthChartAria"),children:[d.jsx("defs",{children:d.jsxs("linearGradient",{id:"refsGrowth",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[d.jsx("stop",{offset:"0%",stopColor:"#00c2ff"}),d.jsx("stop",{offset:"100%",stopColor:"#56f5a0"})]})}),d.jsx("path",{d:f})]})]})]})]})}),d.jsxs(mt,{className:"references-filter-wrap",children:[d.jsxs("h2",{className:"references-title",children:[d.jsx(iE,{})," ",e("references.filterTitle")]}),d.jsx(qe,{children:e("references.counter",{count:l.length})}),d.jsx("div",{className:"references-filter-groups",role:"tablist","aria-label":e("references.filterAria"),children:ZV.map(v=>d.jsxs("div",{className:"references-filter-group",children:[d.jsx("p",{className:"references-filter-group-label",children:e(v.label)}),d.jsx("div",{className:"references-filters",children:v.items.map(S=>d.jsx("button",{type:"button",className:`references-filter-chip ${t===S?"active":""}`,onClick:()=>a(S),role:"tab","aria-selected":t===S,children:e(S==="all"?"references.filters.all":`references.niches.${S}`)},S))})]},v.label))})]}),d.jsxs(mt,{className:"references-metric-band",children:[d.jsxs("h2",{className:"references-title",children:[d.jsx(qi,{})," ",e("references.growthByNiche")]}),d.jsx(fu,{className:"grid-3",children:u.map((v,S)=>d.jsxs(Ue,{className:"references-metric-card",as:ie.article,animate:{y:[0,-5,0],borderColor:["rgba(111, 178, 255, 0.18)","rgba(116, 210, 255, 0.48)","rgba(111, 178, 255, 0.18)"],boxShadow:["0 10px 24px rgba(0, 0, 0, 0.2)","0 16px 34px rgba(8, 31, 61, 0.36)","0 10px 24px rgba(0, 0, 0, 0.2)"]},transition:{duration:4.2,delay:S*.18,repeat:1/0,ease:"easeInOut"},children:[d.jsxs("div",{className:"references-metric-head",children:[d.jsx("h3",{children:e(v.labelKey)}),d.jsxs("span",{className:"references-kpi-badge",children:[d.jsx(QA,{})," ",v.metricValue]})]}),d.jsx("p",{className:"references-metric-line",children:e(v.metricLabelKey)}),d.jsx("svg",{viewBox:"0 0 100 40",preserveAspectRatio:"none",className:"references-sparkline",role:"img","aria-label":e("references.trendAria",{niche:e(v.labelKey)}),children:d.jsx("path",{d:nN(v.sparkline,i+S*.9)||yw})}),d.jsxs(qe,{children:[d.jsx(gy,{})," ",e("references.periodLabel"),": ",v.timeframe," ",e("references.daysUnit")]}),d.jsxs(qe,{children:[d.jsx(el,{})," ",e("references.measurementLabel"),": ",v.source]})]},v.labelKey))})]}),d.jsxs(mt,{className:"references-cases",children:[d.jsx("h2",{className:"references-title",children:e("references.selectedCases")}),l.length===0?d.jsxs(Ue,{children:[d.jsx("h3",{children:e("references.emptyTitle")}),d.jsx(qe,{children:e("references.emptyText")})]}):d.jsx(jm,{children:l.map(v=>d.jsxs(Ue,{className:"references-case-card",children:[d.jsx("h3",{children:e(v.titleKey)}),d.jsxs("div",{className:"references-case-block",children:[d.jsx("p",{className:"references-case-label",children:e("references.challengeLabel")}),d.jsx("p",{children:e(v.challengeKey)})]}),d.jsxs("div",{className:"references-case-block",children:[d.jsx("p",{className:"references-case-label",children:e("references.solutionLabel")}),d.jsx("p",{children:e(v.solutionKey)})]}),d.jsxs("div",{className:"references-case-result",children:[d.jsx("p",{className:"references-case-label",children:e("references.resultLabel")}),v.metrics.map(S=>d.jsxs("p",{children:[e(S.metricLabelKey),": ",d.jsx("span",{children:S.metricValue})]},`${v.id}-${S.metricLabelKey}`))]}),d.jsxs(qe,{children:[d.jsx(gy,{})," ",e("references.periodLabel"),": ",v.timeframe," ",e("references.daysUnit")]}),d.jsxs(qe,{children:[d.jsx(el,{})," ",e("references.measurementLabel"),": ",v.source]})]},v.id))})]}),d.jsxs(mt,{children:[d.jsx("h2",{className:"references-title",children:e("references.beforeAfter")}),d.jsxs("div",{className:"references-compare-shell",children:[d.jsxs("div",{className:"references-compare-chart",children:[d.jsxs("svg",{viewBox:"0 0 100 60",preserveAspectRatio:"none",className:"references-compare-graph",role:"img","aria-label":e("references.compareGraphAria"),children:[[0,16.66,33.33,50,66.66,83.33,100].map(v=>d.jsx("line",{x1:v,y1:"0",x2:v,y2:"60",className:"grid-line"},`vx-${v}`)),[8,16,24,32,40,48,56].map(v=>d.jsx("line",{x1:"0",y1:v,x2:"100",y2:v,className:"grid-line"},`hy-${v}`)),d.jsx("line",{x1:"0",y1:"58",x2:"100",y2:"58",className:"axis-line"}),d.jsx("path",{className:"before-line",d:x}),d.jsx("path",{className:"after-line",d:y}),g.map((v,S)=>d.jsxs("g",{children:[d.jsx("circle",{className:"before-point",cx:v.x,cy:v.y,r:"1.2"}),d.jsx("text",{className:"point-delta before",x:v.x,y:rl(v.y+4.4,4,59),children:Av(kv,S)})]},`before-point-${S}`)),m.map((v,S)=>d.jsxs("g",{children:[d.jsx("circle",{className:"after-point",cx:v.x,cy:v.y,r:"1.4"}),d.jsx("text",{className:"point-delta after",x:v.x,y:rl(v.y-2.2,1.5,58),children:Av(Tv,S)})]},`after-point-${S}`))]}),d.jsx("div",{className:"references-compare-days",children:eN.map(v=>d.jsx("span",{children:e("references.dayLabel",{day:v})},v))}),d.jsxs("div",{className:"references-compare-legend",children:[d.jsxs("span",{children:[d.jsx("i",{className:"dot before"})," ",e("references.beforeLegend")]}),d.jsxs("span",{children:[d.jsx("i",{className:"dot after"})," ",e("references.afterLegend")]})]})]}),d.jsxs("div",{className:"references-compare-kpis",children:[d.jsxs("div",{className:"kpi-panel before",children:[d.jsx("h3",{children:e("references.before")}),d.jsxs("p",{children:[e("references.kpis.traffic")," ",d.jsx("span",{children:yh.traffic})]}),d.jsxs("p",{children:[e("references.kpis.leads")," ",d.jsx("span",{children:yh.leads})]}),d.jsxs("p",{children:[e("references.kpis.conversion")," ",d.jsx("span",{children:yh.conversion})]})]}),d.jsxs("div",{className:"kpi-panel after",children:[d.jsx("h3",{children:e("references.after")}),d.jsxs("p",{children:[e("references.kpis.traffic")," ",d.jsx("span",{children:vh.traffic})]}),d.jsxs("p",{children:[e("references.kpis.leads")," ",d.jsx("span",{children:vh.leads})]}),d.jsxs("p",{children:[e("references.kpis.conversion")," ",d.jsx("span",{children:vh.conversion})]})]})]})]}),d.jsxs(qe,{children:[e("references.periodLabel"),": ",p.timeframe," ",e("references.daysUnit")," · ",e("references.measurementLabel"),": ",p.source]})]}),d.jsxs(Cm,{children:[d.jsx("h2",{children:e("references.ctaTitle")}),d.jsx(qe,{children:e("references.ctaText")}),d.jsx(Da,{children:d.jsxs(ua,{to:"/kontakt",children:[d.jsx(_n,{})," ",e("references.cta")]})})]})]})})})},iN="/assets/vladyslav-founder-C6kYUNTx.jpg",rN=Ke`
  0% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(8px, -8px, 0); }
  100% { transform: translate3d(0, 0, 0); }
`,sN=Ke`
  0% { background-position: -120px 0; opacity: 0.45; }
  50% { background-position: 0 0; opacity: 0.95; }
  100% { background-position: 120px 0; opacity: 0.45; }
`,oN=R.div`
  .about-hero {
    position: relative;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;
    gap: 48px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 28px;
    background:
      radial-gradient(640px 360px at 72% 28%, rgba(255, 180, 80, 0.15), transparent 60%),
      radial-gradient(120% 120% at 0% 0%, rgba(244, 164, 84, 0.22), transparent 58%),
      radial-gradient(100% 120% at 100% 0%, rgba(77, 115, 197, 0.18), transparent 62%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01)),
      rgba(9, 12, 22, 0.9);
    padding: 64px;
  }

  .about-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: 0.04;
    pointer-events: none;
  }

  .about-hero::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.06) 0, transparent 32%),
      radial-gradient(circle at 70% 10%, rgba(255, 255, 255, 0.04) 0, transparent 26%);
    mix-blend-mode: screen;
    opacity: 0.1;
    pointer-events: none;
  }

  .about-hero-copy,
  .about-hero-visual {
    position: relative;
    z-index: 1;
  }

  .about-hero-copy {
    display: grid;
    gap: 16px;
    max-width: 760px;
  }

  .about-hero-eyebrow {
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.62);
  }

  .about-hero h1 {
    margin: 0;
    max-width: 620px;
    font-size: clamp(42px, 6vw, 72px);
    line-height: 1.1;
    letter-spacing: -0.035em;
  }

  .about-hero-title-line {
    display: block;
  }

  .about-hero-title-highlight {
    background: linear-gradient(135deg, #f7cb84, #ffe2b8 55%, #f39a4f);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .about-hero-subtitle {
    margin: 0;
    max-width: 460px;
    font-size: clamp(20px, 2.2vw, 26px);
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.92);
  }

  .about-trustline {
    margin: 0;
    width: fit-content;
    border: 1px solid rgba(255, 208, 138, 0.24);
    border-radius: 999px;
    background: rgba(255, 208, 138, 0.08);
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 500;
    color: #ffe4bd;
  }

  .about-hero-actions {
    align-items: center;
  }

  .about-hero-actions a {
    padding: 14px 22px;
    border-radius: 12px;
    font-weight: 600;
    box-shadow: 0 10px 24px rgba(243, 154, 79, 0.16);
  }

  .about-hero-actions a:hover,
  .about-hero-actions a:focus-visible {
    transform: translateY(-3px);
    box-shadow: 0 14px 28px rgba(255, 196, 114, 0.18);
  }

  .about-hero-visual {
    position: relative;
    overflow: hidden;
    min-height: 520px;
    border-radius: 28px;
  }

  .about-hero-bgLayer,
  .about-hero-contentLayer {
    position: absolute;
    inset: 0;
  }

  .about-hero-bgLayer {
    z-index: 0;
  }

  .about-hero-contentLayer {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
  }

  .about-hero-grid {
    position: absolute;
    inset: 8% 8%;
    border-radius: 28px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    background:
      linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 28px 28px;
    opacity: 0.32;
    animation: ${rN} 12s ease-in-out infinite;
  }

  .about-hero-radial {
    position: absolute;
    inset: 12% auto auto 18%;
    width: 240px;
    height: 240px;
    border-radius: 999px;
    background: rgba(255, 180, 80, 0.15);
    filter: blur(120px);
  }

  .about-hero-cards {
    padding: 0;
  }

  .about-hero-product-badge {
    width: fit-content;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(12, 16, 28, 0.72);
    backdrop-filter: blur(8px);
    padding: 8px 14px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.78);
  }

  .about-hero-dashboard-shell {
    position: absolute;
    inset: 7% 6%;
    display: grid;
    gap: 16px;
    padding: 24px;
    border-radius: 28px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: linear-gradient(180deg, rgba(13, 18, 31, 0.82), rgba(9, 13, 24, 0.78));
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.28);
    backdrop-filter: blur(10px);
  }

  .about-hero-dashboard-head {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
  }

  .about-hero-shell-metric {
    display: grid;
    gap: 6px;
    justify-items: end;
  }

  .about-hero-shell-label {
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.58);
  }

  .about-hero-shell-value {
    font-size: 22px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.96);
    max-width: 18ch;
    text-align: right;
  }

  .about-hero-storyboard {
    display: grid;
    gap: 16px;
  }

  .about-hero-story-card {
    position: relative;
    display: grid;
    gap: 10px;
    padding: 20px;
    border-radius: 22px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: linear-gradient(180deg, rgba(19, 24, 39, 0.82), rgba(13, 17, 30, 0.76));
    backdrop-filter: blur(10px);
    box-shadow: 0 18px 38px rgba(0, 0, 0, 0.26);
    transition: transform 120ms linear;
    will-change: transform;
  }

  .about-hero-story-card-system {
    justify-items: center;
    text-align: center;
  }

  .about-hero-story-card-result {
    justify-items: start;
  }

  .about-hero-stage-eyebrow {
    margin: 0;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.56);
  }

  .about-hero-metric-title {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.96);
  }

  .about-hero-metric-text {
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.68);
  }

  .about-hero-stage-badge {
    width: fit-content;
    border-radius: 999px;
    border: 1px solid rgba(255, 208, 138, 0.2);
    background: rgba(255, 208, 138, 0.08);
    padding: 6px 10px;
    font-size: 12px;
    font-weight: 600;
    color: rgba(255, 232, 198, 0.92);
  }

  .about-hero-story-list {
    display: grid;
    gap: 10px;
    margin: 0;
    padding: 0;
    color: rgba(255, 255, 255, 0.72);
  }

  .about-hero-story-list li {
    list-style: none;
    position: relative;
    padding-left: 16px;
  }

  .about-hero-story-list li::before {
    content: '';
    position: absolute;
    top: 9px;
    left: 0;
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background: rgba(255, 208, 138, 0.9);
  }

  .about-hero-story-connector {
    position: relative;
    width: 72px;
    height: 12px;
    margin: 0 auto;
  }

  .about-hero-pipeline-line {
    position: absolute;
    inset: 50% 0 auto;
    height: 1px;
    background: linear-gradient(90deg, rgba(255, 208, 138, 0), rgba(255, 208, 138, 0.7), rgba(255, 248, 226, 0.92), rgba(255, 208, 138, 0.7), rgba(255, 208, 138, 0));
    background-size: 180px 100%;
    transform: translateY(-50%);
    animation: ${sN} 2.2s linear infinite;
  }

  .about-hero-pipeline-pulse {
    position: absolute;
    top: 50%;
    left: 8px;
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: #ffd08a;
    box-shadow: 0 0 0 8px rgba(255, 208, 138, 0.18), 0 0 20px rgba(255, 208, 138, 0.36);
    transform: translateY(-50%);
    transition: transform 120ms linear;
    will-change: transform;
  }

  .about-hero-phone-preview {
    width: 180px;
    padding: 10px;
    border-radius: 28px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: linear-gradient(180deg, rgba(11, 15, 28, 0.96), rgba(18, 23, 39, 0.86));
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
  }

  .about-hero-phone-notch {
    width: 64px;
    height: 8px;
    margin: 0 auto 10px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.12);
  }

  .about-hero-phone-screen {
    display: grid;
    gap: 10px;
    padding: 14px;
    border-radius: 20px;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01)),
      rgba(7, 10, 20, 0.96);
  }

  .about-hero-phone-badge {
    width: fit-content;
    border-radius: 999px;
    background: rgba(255, 208, 138, 0.14);
    color: rgba(255, 232, 198, 0.94);
    padding: 5px 10px;
    font-size: 11px;
    font-weight: 700;
  }

  .about-hero-phone-line {
    height: 8px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.1);
    transform-origin: left center;
    transition:
      transform 120ms linear,
      opacity 120ms linear;
    will-change: transform, opacity;
  }

  .about-hero-phone-line-strong {
    width: 84%;
    background: rgba(255, 255, 255, 0.2);
  }

  .about-hero-phone-cta {
    margin-top: 6px;
    border-radius: 12px;
    background: linear-gradient(135deg, #f7cb84, #f39a4f);
    color: #101321;
    padding: 10px 12px;
    font-size: 12px;
    font-weight: 700;
    box-shadow: 0 10px 22px rgba(243, 154, 79, 0.22);
    transition:
      transform 120ms linear,
      opacity 120ms linear;
    will-change: transform, opacity;
  }

  .about-hero-system-pills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
  }

  .about-hero-system-pills span {
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.04);
    padding: 6px 10px;
    font-size: 12px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.74);
  }

  .about-hero-result-metric {
    margin: 0;
    font-size: 44px;
    line-height: 1;
    font-weight: 800;
    color: #ffd08a;
  }

  .about-hero-metric-anchor {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 18px;
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(11, 15, 27, 0.72);
    color: rgba(255, 255, 255, 0.84);
    transition: transform 120ms linear;
    will-change: transform;
  }

  .about-hero-anchor-label {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.62);
  }

  .about-hero-anchor-value {
    font-size: 14px;
    font-weight: 600;
  }

  @media (max-width: 1279px) {
    .about-hero {
      gap: 40px;
      padding: 56px;
      grid-template-columns: 1fr 0.95fr;
    }
  }

  .about-main-grid {
    display: grid;
    grid-template-columns: 40% 1fr;
    gap: 24px;
    align-items: start;
  }

  .about-photo-card,
  .about-text-card {
    display: grid;
    align-content: start;
    align-self: stretch;
    gap: 16px;
    min-height: 100%;
    padding: 32px;
  }

  .about-photo-card:hover,
  .about-text-card:hover {
    transform: translateY(-2px);
    border-color: rgba(248, 190, 98, 0.38);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.22), 0 0 0 1px rgba(248, 190, 98, 0.08);
  }

  .about-photo-image {
    width: 100%;
    height: auto;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.16);
    display: block;
    object-fit: cover;
  }

  .about-photo-caption {
    margin: 0;
    font-size: 18px;
    line-height: 1.4;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.94);
  }

  .about-photo-facts,
  .about-local-list {
    gap: 12px;
  }

  .about-photo-facts li,
  .about-local-list li {
    align-items: flex-start;
    line-height: 1.45;
  }

  .about-photo-facts svg,
  .about-local-list svg {
    margin-top: 4px;
    flex: 0 0 auto;
    color: #ffd08a;
  }

  .about-geo-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .about-geo-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.22);
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.9);
    padding: 6px 12px;
    min-height: 32px;
    font-size: 12px;
    font-weight: 600;
    transition:
      background var(--dur-mid) var(--ease-smooth),
      border-color var(--dur-mid) var(--ease-smooth),
      transform var(--dur-mid) var(--ease-smooth);
  }

  .about-geo-badge:hover {
    background: rgba(255, 208, 138, 0.1);
    border-color: rgba(255, 208, 138, 0.34);
    transform: translateY(-1px);
  }

  .about-text-card h3 {
    margin: 0;
  }

  .about-local-subtitle {
    margin: 0;
    max-width: 34ch;
    font-size: 15px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.72);
  }

  .about-local-copy {
    margin: 0;
    line-height: 1.6;
  }

  .about-local-list {
    margin-top: 4px;
  }

  .about-local-priority {
    margin: 0;
    border-left: 3px solid rgba(255, 206, 126, 0.84);
    padding: 16px 0 16px 16px;
    color: #ffe8bf;
    font-weight: 600;
    line-height: 1.45;
    background: linear-gradient(90deg, rgba(255, 208, 138, 0.08), rgba(255, 208, 138, 0));
    border-radius: 0 14px 14px 0;
  }

  .about-step-card {
    min-height: 0;
  }

  .about-value-grid {
    gap: 24px;
  }

  .about-value-card {
    min-height: 0;
    padding: 32px;
    border-radius: 24px;
    border-color: rgba(255, 255, 255, 0.2);
    background:
      linear-gradient(160deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02)),
      rgba(10, 13, 24, 0.92);
  }

  .about-value-card h3 {
    margin-bottom: 16px;
    font-size: clamp(24px, 3vw, 30px);
  }

  .about-value-card p {
    font-size: 17px;
    line-height: 1.45;
  }

  .about-trust-metric {
    margin: 8px 0 16px;
    font-size: 40px;
    font-weight: 700;
    line-height: 1;
    color: #ffd08a;
  }

  .about-cta-band {
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  @media (max-width: 1023px) {
    .about-hero {
      grid-template-columns: 1fr;
      gap: 32px;
      padding: 48px 24px;
      border-radius: 24px;
    }

    .about-hero-copy {
      max-width: none;
    }

    .about-hero-visual {
      min-height: 480px;
    }

    .about-hero-dashboard-shell {
      inset: 0;
    }

    .about-trustline {
      font-size: 13px;
    }

    .about-main-grid {
      grid-template-columns: 1fr;
    }

    .about-photo-card,
    .about-text-card {
      padding: 28px;
    }

    .about-value-card {
      padding: 24px;
    }
  }

  @media (max-width: 767px) {
    .about-hero {
      padding: 48px 24px;
    }

    .about-hero h1 {
      line-height: 1.08;
      letter-spacing: -0.03em;
    }

    .about-hero-visual {
      min-height: 520px;
    }

    .about-hero-cards {
      padding: 0;
    }

    .about-hero-metric-anchor {
      position: relative;
      left: auto;
      right: auto;
      bottom: auto;
      margin-top: 16px;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }

    .about-hero-shell-value {
      text-align: left;
    }
  }

`,lN=()=>{const{t:e}=Ie(),[t,a]=j.useState(0);j.useEffect(()=>{let v=0;const S=performance.now(),k=A=>{a((A-S)/1e3),v=window.requestAnimationFrame(k)};return v=window.requestAnimationFrame(k),()=>window.cancelAnimationFrame(v)},[]);const i=Math.sin(t*1.2)*-10,o=Math.sin(t*1.2+.8)*-12,l=Math.sin(t*1.2+1.6)*-9,u=t*40%64,p=(t*40+18)%64,f=.9+(Math.sin(t*2.4)+1)/2*.1,g=.88+(Math.sin(t*2.4+.6)+1)/2*.12,m=.84+(Math.sin(t*2.4+1.2)+1)/2*.14,x=1+(Math.sin(t*2.8)+1)/2*.05,y=Math.sin(t*1.1)*6;return d.jsxs("div",{className:"about-hero-visual","aria-hidden":"true",children:[d.jsxs("div",{className:"about-hero-bgLayer",children:[d.jsx("div",{className:"about-hero-radial"}),d.jsx("div",{className:"about-hero-grid"})]}),d.jsx("div",{className:"about-hero-contentLayer",children:d.jsxs("div",{className:"about-hero-dashboard-shell",children:[d.jsxs("div",{className:"about-hero-dashboard-head",children:[d.jsx("div",{className:"about-hero-product-badge",children:e("aboutPage.visual.productBadge",{defaultValue:"Lead System"})}),d.jsxs("div",{className:"about-hero-shell-metric",children:[d.jsx("span",{className:"about-hero-shell-label",children:e("aboutPage.visual.flowLabel",{defaultValue:"Flow"})}),d.jsx("span",{className:"about-hero-shell-value",children:e("aboutPage.visual.flowValue",{defaultValue:"Before zu System zu Result"})})]})]}),d.jsxs("div",{className:"about-hero-storyboard",children:[d.jsxs("article",{className:"about-hero-story-card about-hero-story-card-before",style:{transform:`translateY(${i}px)`},children:[d.jsx("p",{className:"about-hero-stage-eyebrow",children:e("aboutPage.visual.before.label",{defaultValue:"Before"})}),d.jsx("p",{className:"about-hero-metric-title",children:e("aboutPage.visual.before.title",{defaultValue:"Viele Klicks, wenig Klarheit"})}),d.jsxs("ul",{className:"about-hero-story-list",children:[d.jsx("li",{children:e("aboutPage.visual.before.i1",{defaultValue:"Langsame Seiten"})}),d.jsx("li",{children:e("aboutPage.visual.before.i2",{defaultValue:"Unklare Kontaktwege"})}),d.jsx("li",{children:e("aboutPage.visual.before.i3",{defaultValue:"Keine sauberen Daten"})})]})]}),d.jsxs("div",{className:"about-hero-story-connector",children:[d.jsx("div",{className:"about-hero-pipeline-line"}),d.jsx("span",{className:"about-hero-pipeline-pulse",style:{transform:`translate(${u}px, -50%) scale(1.15)`}})]}),d.jsxs("article",{className:"about-hero-story-card about-hero-story-card-system",style:{transform:`translateY(${o}px)`},children:[d.jsx("p",{className:"about-hero-stage-eyebrow",children:e("aboutPage.visual.system.label",{defaultValue:"System"})}),d.jsxs("div",{className:"about-hero-phone-preview",children:[d.jsx("div",{className:"about-hero-phone-notch"}),d.jsxs("div",{className:"about-hero-phone-screen",children:[d.jsx("div",{className:"about-hero-phone-badge",children:e("aboutPage.visual.system.phoneBadge",{defaultValue:"Website"})}),d.jsx("div",{className:"about-hero-phone-line about-hero-phone-line-strong",style:{transform:`scaleX(${f})`,opacity:.7+(f-.9)*2.2}}),d.jsx("div",{className:"about-hero-phone-line",style:{transform:`scaleX(${g})`,opacity:.56+(g-.88)*2.1}}),d.jsx("div",{className:"about-hero-phone-line",style:{transform:`scaleX(${m})`,opacity:.52+(m-.84)*1.9}}),d.jsx("div",{className:"about-hero-phone-cta",style:{transform:`scale(${x})`,opacity:.88+(x-1)*2},children:e("aboutPage.visual.system.cta",{defaultValue:"Termin anfragen"})})]})]}),d.jsxs("div",{className:"about-hero-system-pills",children:[d.jsx("span",{children:e("aboutPage.visual.system.pill1",{defaultValue:"Website"})}),d.jsx("span",{children:e("aboutPage.visual.system.pill2",{defaultValue:"Kontaktwege"})}),d.jsx("span",{children:e("aboutPage.visual.system.pill3",{defaultValue:"Tracking"})})]})]}),d.jsxs("div",{className:"about-hero-story-connector",children:[d.jsx("div",{className:"about-hero-pipeline-line"}),d.jsx("span",{className:"about-hero-pipeline-pulse",style:{transform:`translate(${p}px, -50%) scale(1.15)`}})]}),d.jsxs("article",{className:"about-hero-story-card about-hero-story-card-result",style:{transform:`translateY(${l}px)`},children:[d.jsx("p",{className:"about-hero-stage-eyebrow",children:e("aboutPage.visual.result.label",{defaultValue:"Result"})}),d.jsx("p",{className:"about-hero-result-metric",children:"+12"}),d.jsx("p",{className:"about-hero-metric-title",children:e("aboutPage.visual.result.title",{defaultValue:"Qualifizierte Anfragen"})}),d.jsx("p",{className:"about-hero-metric-text",children:e("aboutPage.visual.result.text",{defaultValue:"Messbar, schneller beantwortbar und klar im Funnel sichtbar."})})]})]}),d.jsxs("div",{className:"about-hero-metric-anchor",style:{transform:`translateX(${y}px)`},children:[d.jsx("span",{className:"about-hero-anchor-label",children:e("aboutPage.visual.anchor.label",{defaultValue:"Ergebnis"})}),d.jsx("span",{className:"about-hero-anchor-value",children:e("aboutPage.visual.anchor.value",{defaultValue:"Mehr qualifizierte Anfragen statt nur Website-Traffic"})})]})]})})]})},cN=()=>{const{t:e}=Ie();return d.jsx(oN,{children:d.jsx(mn,{children:d.jsxs(en,{children:[d.jsxs(Un,{className:"about-hero",children:[d.jsxs("div",{className:"about-hero-copy",children:[d.jsx("p",{className:"about-hero-eyebrow",children:e("aboutPage.heroEyebrow",{defaultValue:"VS Studio | Hildesheim | Niedersachsen | Deutschland"})}),d.jsxs("h1",{children:[d.jsx("span",{className:"about-hero-title-line",children:e("aboutPage.heroTitleLine1",{defaultValue:"Websites und"})}),d.jsx("span",{className:"about-hero-title-line",children:d.jsx("span",{className:"about-hero-title-highlight",children:e("aboutPage.heroTitleLine2",{defaultValue:"Lead-Systeme"})})}),d.jsx("span",{className:"about-hero-title-line",children:e("aboutPage.heroTitleLine3",{defaultValue:"für lokale Unternehmen"})}),d.jsx("span",{className:"about-hero-title-line",children:e("aboutPage.heroTitleLine4",{defaultValue:"in Hildesheim"})})]}),d.jsx("p",{className:"about-hero-subtitle",children:e("aboutPage.heroSubtitle",{defaultValue:"Mehr qualifizierte Anfragen durch schnelle Websites, klare Kontaktwege und messbares Marketing."})}),d.jsx("p",{className:"about-trustline",children:e("aboutPage.heroTrustline",{defaultValue:"Lokal in Hildesheim. Strategisch in Niedersachsen. Umsetzbar in ganz Deutschland."})}),d.jsx(Da,{className:"about-hero-actions",children:d.jsxs(ua,{to:"/kontakt",children:[d.jsx(_n,{})," ",e("aboutPage.primaryCta",{defaultValue:"Kostenlose Website-Analyse"})]})})]}),d.jsx(lN,{})]}),d.jsxs(mt,{children:[d.jsx("h2",{children:e("aboutPage.section.about",{defaultValue:"About"})}),d.jsxs(jm,{children:[d.jsxs(Ue,{children:[d.jsx("h3",{children:e("aboutPage.blocks.who.title",{defaultValue:"Fuer lokale Unternehmen"})}),d.jsx(qe,{children:e("aboutPage.blocks.who.text",{defaultValue:"Websites, Lead-Systeme und Marketing für Betriebe, die planbar mehr Anfragen wollen."})})]}),d.jsxs(Ue,{children:[d.jsx("h3",{children:e("aboutPage.blocks.focus.title",{defaultValue:"Ein System statt Einzelloesungen"})}),d.jsx(qe,{children:e("aboutPage.blocks.focus.text",{defaultValue:"Website, Kontaktwege, Kampagnen und Tracking greifen als ein klarer Prozess zusammen."})})]})]})]}),d.jsxs(mt,{children:[d.jsx("h2",{children:e("aboutPage.section.localAdvantages",{defaultValue:"Lokale Vorteile"})}),d.jsxs("div",{className:"about-main-grid",children:[d.jsxs(Ue,{className:"about-photo-card",children:[d.jsx("img",{className:"about-photo-image",src:iN,alt:e("aboutPage.photoAlt",{defaultValue:"Vladyslav, Gruender von VS Web Studio aus Hildesheim"})}),d.jsx("p",{className:"about-photo-caption",children:e("aboutPage.photoCaption",{defaultValue:"Vladyslav - Gruender von VS Web Studio"})}),d.jsxs(Go,{className:"about-photo-facts",children:[d.jsxs("li",{children:[d.jsx(jt,{})," ",e("aboutPage.photoFacts.f1",{defaultValue:"Fokus: lokale Unternehmen"})]}),d.jsxs("li",{children:[d.jsx(jt,{})," ",e("aboutPage.photoFacts.f2",{defaultValue:"Standort: Hildesheim"})]}),d.jsxs("li",{children:[d.jsx(jt,{})," ",e("aboutPage.photoFacts.f3",{defaultValue:"Projekte: deutschlandweit"})]})]}),d.jsxs("div",{className:"about-geo-badges",children:[d.jsxs("span",{className:"about-geo-badge",children:[d.jsx(_o,{})," ",e("aboutPage.geo.local",{defaultValue:"Hildesheim"})]}),d.jsxs("span",{className:"about-geo-badge",children:[d.jsx(_o,{})," ",e("aboutPage.geo.region",{defaultValue:"Niedersachsen"})]}),d.jsxs("span",{className:"about-geo-badge",children:[d.jsx(_o,{})," ",e("aboutPage.geo.country",{defaultValue:"Deutschlandweit"})]})]})]}),d.jsxs(Ue,{className:"about-text-card",children:[d.jsx("h3",{children:e("aboutPage.blocks.locality.title",{defaultValue:"Lokale Naehe als Vorteil"})}),d.jsx("p",{className:"about-local-subtitle",children:e("aboutPage.blocks.locality.subtitle",{defaultValue:"Schnelle Abstimmung, klare Prioritaeten und messbare Ergebnisse."})}),d.jsx(qe,{className:"about-local-copy",children:e("aboutPage.blocks.locality.text1",{defaultValue:"Wir arbeiten direkt mit lokalen Unternehmen zusammen - ohne lange Agenturketten und unnoetige Buerokratie."})}),d.jsxs(Go,{className:"about-local-list",children:[d.jsxs("li",{children:[d.jsx(jt,{})," ",e("aboutPage.blocks.locality.i1",{defaultValue:"Direkte Kommunikation ohne Umwege"})]}),d.jsxs("li",{children:[d.jsx(jt,{})," ",e("aboutPage.blocks.locality.i2",{defaultValue:"Schnelle Umsetzung statt langer Abstimmungen"})]}),d.jsxs("li",{children:[d.jsx(jt,{})," ",e("aboutPage.blocks.locality.i3",{defaultValue:"Verstaendnis für lokale Maerkte und Budgets"})]})]}),d.jsx(qe,{className:"about-local-copy",children:e("aboutPage.blocks.locality.text2",{defaultValue:"Unsere Kunden profitieren davon, dass Entscheidungen schneller getroffen werden und Projekte nicht wochenlang in Abstimmungsschleifen haengen bleiben."})}),d.jsx(qe,{className:"about-local-copy",children:e("aboutPage.blocks.locality.text3",{defaultValue:"Das spart Zeit, reduziert Kosten und sorgt dafuer, dass Marketingmassnahmen schneller Ergebnisse liefern."})}),d.jsx(qe,{className:"about-local-copy",children:e("aboutPage.blocks.locality.text4",{defaultValue:"Wir kennen die Realitaet kleiner und mittelstaendischer Unternehmen: begrenzte Budgets, wenig Zeit und den Wunsch nach klaren Resultaten statt komplizierten Konzepten."})}),d.jsx(qe,{className:"about-local-copy",children:e("aboutPage.blocks.locality.text5",{defaultValue:"Deshalb arbeiten wir pragmatisch und strukturiert - von der ersten Analyse ueber die Umsetzung bis zur kontinuierlichen Optimierung."})}),d.jsx("p",{className:"about-local-priority",children:e("aboutPage.localPriority",{defaultValue:"Kurze Wege. Klare Prioritaeten. Fokus auf Ergebnisse."})})]})]})]}),d.jsxs(mt,{children:[d.jsx("h2",{children:e("aboutPage.section.how",{defaultValue:"How we work"})}),d.jsxs(fu,{className:"about-work-grid",children:[d.jsxs(Ue,{className:"about-step-card",children:[d.jsxs("h3",{children:[d.jsx(Yt,{children:d.jsx(ku,{})}),e("aboutPage.how.s1.title",{defaultValue:"1. Verstehen"})]}),d.jsx(qe,{children:e("aboutPage.how.s1.text",{defaultValue:"Zielgruppe, Angebot und Markt analysieren."})})]}),d.jsxs(Ue,{className:"about-step-card",children:[d.jsxs("h3",{children:[d.jsx(Yt,{children:d.jsx(Tu,{})}),e("aboutPage.how.s2.title",{defaultValue:"2. Umsetzen"})]}),d.jsx(qe,{children:e("aboutPage.how.s2.text",{defaultValue:"Website, Lead-System und Kampagnen starten."})})]}),d.jsxs(Ue,{className:"about-step-card",children:[d.jsxs("h3",{children:[d.jsx(Yt,{children:d.jsx(qi,{})}),e("aboutPage.how.s3.title",{defaultValue:"3. Optimieren"})]}),d.jsx(qe,{children:e("aboutPage.how.s3.text",{defaultValue:"Daten analysieren und Ergebnisse verbessern."})})]})]})]}),d.jsxs(mt,{children:[d.jsx("h2",{children:e("aboutPage.section.value",{defaultValue:"Value"})}),d.jsxs(fu,{className:"about-value-grid",children:[d.jsxs(Ue,{className:"about-value-card",children:[d.jsxs("h3",{children:[d.jsx(Yt,{children:d.jsx(Tu,{})}),e("aboutPage.cards.work.title",{defaultValue:"Klare Prozesse"})]}),d.jsx(qe,{children:e("aboutPage.cards.work.desc",{defaultValue:"Kurze Wege. Klare Verantwortung."})})]}),d.jsxs(Ue,{className:"about-value-card",children:[d.jsxs("h3",{children:[d.jsx(Yt,{children:d.jsx(as,{})}),e("aboutPage.cards.ai.title",{defaultValue:"AI First"})]}),d.jsx(qe,{children:e("aboutPage.cards.ai.desc",{defaultValue:"Automatisierung dort, wo sie Zeit spart."})})]}),d.jsxs(Ue,{className:"about-value-card",children:[d.jsxs("h3",{children:[d.jsx(Yt,{children:d.jsx(pl,{})}),e("aboutPage.cards.leads.title",{defaultValue:"Lead Fokus"})]}),d.jsx(qe,{children:e("aboutPage.cards.leads.desc",{defaultValue:"Design und Marketing arbeiten zusammen."})})]})]})]}),d.jsx(mt,{children:d.jsxs(Ue,{children:[d.jsx("h2",{children:e("aboutPage.results.title",{defaultValue:"Was Kunden erhalten"})}),d.jsxs(Go,{children:[d.jsxs("li",{children:[d.jsx(jt,{})," ",e("aboutPage.results.i1",{defaultValue:"Schnelle Website, die auf jedem Smartphone laedt"})]}),d.jsxs("li",{children:[d.jsx(jt,{})," ",e("aboutPage.results.i2",{defaultValue:"Klare Kontaktwege: Anruf, Formular, Termin"})]}),d.jsxs("li",{children:[d.jsx(jt,{})," ",e("aboutPage.results.i3",{defaultValue:"Messbare Anfragen mit Tracking und Marketing-Daten"})]})]})]})}),d.jsxs(mt,{children:[d.jsx("h2",{children:e("aboutPage.section.trust",{defaultValue:"Trust"})}),d.jsxs(fu,{children:[d.jsxs(Ue,{children:[d.jsx("h3",{children:e("aboutPage.trust.projects.label",{defaultValue:"Anzahl Projekte"})}),d.jsx("p",{className:"about-trust-metric",children:e("aboutPage.trust.projects.value",{defaultValue:"120+"})}),d.jsx(qe,{children:e("aboutPage.trust.projects.text",{defaultValue:"Websites, Lead-Funnels und Relaunches."})})]}),d.jsxs(Ue,{children:[d.jsx("h3",{children:e("aboutPage.trust.industries.label",{defaultValue:"Branchen"})}),d.jsx("p",{className:"about-trust-metric",children:e("aboutPage.trust.industries.value",{defaultValue:"12"})}),d.jsx(qe,{children:e("aboutPage.trust.industries.text",{defaultValue:"Handwerk, Praxen, Gastronomie, Beauty, Bildung und lokale Dienstleistungen."})})]}),d.jsxs(Ue,{children:[d.jsx("h3",{children:e("aboutPage.trust.focus.label",{defaultValue:"Fokus"})}),d.jsx("p",{className:"about-trust-metric",children:e("aboutPage.trust.focus.value",{defaultValue:"Lokal + Messbar"})}),d.jsx(qe,{children:e("aboutPage.trust.focus.text",{defaultValue:"Hildesheim, Niedersachsen und Deutschland mit klarem Lead-Fokus."})})]})]})]}),d.jsxs(Cm,{className:"about-cta-band",children:[d.jsx("h2",{children:e("aboutPage.cta.title",{defaultValue:"Bereit für planbare Anfragen?"})}),d.jsx(qe,{children:e("aboutPage.cta.text",{defaultValue:"Im kostenlosen Erstgespräch zeigen wir die größten Hebel für Ihre Website, Lead-Prozesse und Werbung."})}),d.jsx(Da,{children:d.jsxs(ua,{to:"/kontakt",children:[d.jsx(_n,{})," ",e("aboutPage.primaryCta",{defaultValue:"Kostenloses Erstgespräch starten"})]})})]})]})})})},uN=R.div`
  padding: 0 0 84px;

  @media (max-width: 991px) {
    padding: 0 0 72px;
  }
`,dN=R(ie.section)`
  display: grid;
  justify-items: center;
  align-items: stretch;
  min-height: calc(100svh - 76px);
  padding-top: 18px;
  padding-bottom: 18px;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  transform: none;

  @media (max-width: 991px) {
    min-height: auto;
  }
`,fN=R.div`
  position: relative;
  overflow: hidden;
  min-height: calc(100svh - 112px);
  box-sizing: border-box;
  width: min(1440px, calc(100vw - 40px));
  max-width: none;
  margin-left: auto;
  margin-right: auto;
  transform: none;
  padding: 28px;
  border-radius: 36px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    radial-gradient(circle at 0% 0%, rgba(255, 188, 97, 0.14), transparent 24%),
    radial-gradient(circle at 100% 0%, rgba(72, 129, 255, 0.2), transparent 30%),
    linear-gradient(120deg, rgba(255, 255, 255, 0.03), transparent 36%),
    linear-gradient(180deg, rgba(6, 10, 22, 0.96), rgba(5, 9, 18, 0.98));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 32px 80px rgba(2, 8, 22, 0.36);

  &::before {
    content: '';
    position: absolute;
    inset: 18px;
    border-radius: 28px;
    border: 1px solid rgba(255, 255, 255, 0.04);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    inset: auto 28px 0 28px;
    height: 1px;
    background: linear-gradient(90deg, rgba(255, 188, 97, 0), rgba(255, 188, 97, 0.18), rgba(72, 129, 255, 0.18), rgba(72, 129, 255, 0));
    pointer-events: none;
  }

  @media (max-width: 767px) {
    min-height: auto;
    width: calc(100vw - 24px);
    transform: translateX(-50%);
    padding: 20px;
    border-radius: 24px;
  }
`,pN=R.div`
  display: grid;
  min-height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: auto minmax(0, 1fr);
  gap: 28px;
  align-items: stretch;

  @media (max-width: 1279px) {
    gap: 24px;
  }

  @media (max-width: 991px) {
    min-height: auto;
    gap: 24px;
  }
`,hN=R.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 10px 0 0;
`,gN=R.div`
  position: relative;
  overflow: hidden;
  display: grid;
  align-self: stretch;
  grid-template-columns: minmax(420px, 1.12fr) minmax(420px, 1fr);
  gap: 20px;
  align-items: stretch;
  padding: 14px;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background:
    radial-gradient(circle at top right, rgba(255, 188, 97, 0.08), transparent 24%),
    linear-gradient(180deg, rgba(8, 13, 25, 0.82), rgba(6, 10, 20, 0.86));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 22px 22px;
    mask-image: linear-gradient(180deg, rgba(255, 255, 255, 0.22), transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 1279px) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 12px;
  }
`,mN=R.div`
  align-self: stretch;
  position: relative;
  z-index: 1;
`,bN=R.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 7px 14px;
  margin-bottom: 18px;
  border-radius: 999px;
  background: rgba(255, 180, 80, 0.12);
  border: 1px solid rgba(255, 180, 80, 0.25);
  color: #ffd8ab;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
`,xN=R.h1`
  width: min(100%, 48ch);
  margin: 0;
  margin-inline: auto;
  margin-bottom: 16px;
  font-size: clamp(34px, 4.15vw, 54px);
  line-height: 0.96;
  letter-spacing: -0.03em;
  /* text-wrap: balance; */

  @media (max-width: 1279px) {
    width: min(100%, 15ch);
    font-size: clamp(40px, 5.5vw, 42px);
  }

  @media (max-width: 767px) {
    font-size: clamp(30px, 10vw, 44px);
    line-height: 1.02;
    max-width: 12ch;
  }
`,yN=R.p`
  max-width: 620px;
  margin: 0;
  margin-bottom: 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: 17px;
  line-height: 1.42;

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 1.45;
  }
`,vw=id`
  padding: 24px;
  border-radius: 28px;
  border-color: rgba(255, 255, 255, 0.09);
  background:
    radial-gradient(circle at top right, rgba(255, 180, 80, 0.14), transparent 34%),
    linear-gradient(180deg, rgba(15, 21, 37, 0.96), rgba(9, 13, 24, 0.94));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.04),
    0 22px 52px rgba(2, 8, 22, 0.26);

  @media (max-width: 767px) {
    padding: 24px;
  }
`,vN=R(Ue)`
  ${vw}
`,wN=R(ie.form)`
  ${vw}
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  min-height: 100%;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(20px);
`,Ev=R(vN)`
  display: grid;
  gap: 14px;
`,gg=R.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  margin-bottom: 10px;
  color: #ffcf94;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`,Mv=R.h2`
  margin: 0 0 10px;
  font-size: clamp(24px, 2.4vw, 34px);
  line-height: 1.02;
`,SN=R.p`
  margin: 0 0 12px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 12px;
  line-height: 1.35;
`,qc=R.div`
  display: grid;
  gap: 4px;
`,Kc=R.span`
  color: rgba(255, 255, 255, 0.72);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  margin-bottom: 6px;
`,Yc=R(pw)`
  gap: 8px;
  min-height: 46px;
  padding: 7px 12px;
  border-radius: 16px;
  border-color: rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.045);

  svg {
    color: rgba(255, 200, 138, 0.88);
  }

  input,
  textarea {
    font: inherit;
  }

  input {
    min-height: 26px;
  }

  input::placeholder,
  textarea::placeholder {
    color: rgba(255, 255, 255, 0.42);
  }

  textarea {
    min-height: 82px;
    max-height: 96px;
  }
`,kN=R.p`
  margin: 6px 0 0;
  color: rgba(255, 255, 255, 0.58);
  max-width: 36ch;
  font-size: 11px;
  line-height: 1.35;
`,zv=R.p`
  margin: 8px 0 0;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid
    ${({$tone:e})=>e==="success"?"rgba(104, 211, 145, 0.35)":"rgba(255, 150, 150, 0.32)"};
  background: ${({$tone:e})=>e==="success"?"rgba(104, 211, 145, 0.12)":"rgba(255, 120, 120, 0.12)"};
  color: ${({$tone:e})=>e==="success"?"#bef7d0":"#ffd0d0"};
  font-size: 12px;
  line-height: 1.45;
`,TN=R.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,jN=R(fw)`
  width: fit-content;
  min-height: auto;
  padding: 12px 18px;
  border-radius: 14px;
  font-weight: 600;
  margin-top: 10px;

  &:disabled {
    cursor: wait;
    opacity: 0.7;
    transform: none;
    animation: none;
    box-shadow: none;
    filter: saturate(0.8);
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`,CN=R.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 16px;
  background: rgba(255, 180, 80, 0.12);
  border: 1px solid rgba(255, 180, 80, 0.25);
  color: #ffd8ab;
  font-weight: 600;
  line-height: 1.5;
`,AN=R.div`
  display: grid;
  gap: 8px;
`,ww=id`
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 12px;
  align-items: start;
  padding: 12px 14px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: #ffffff;
  transition:
    transform var(--dur-mid) var(--ease-smooth),
    border-color var(--dur-mid) var(--ease-smooth),
    background var(--dur-mid) var(--ease-smooth);

  svg {
    margin-top: 3px;
    color: #ffb450;
  }

  strong {
    display: block;
    font-size: 15px;
    font-weight: 600;
  }

  span {
    display: block;
    margin-top: 4px;
    color: rgba(255, 255, 255, 0.64);
    font-size: 13px;
    line-height: 1.45;
  }
`;R.div`
  ${ww}
`;const wh=R.a`
  ${ww}
  text-decoration: none;

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
    border-color: rgba(255, 180, 80, 0.3);
    background: rgba(255, 255, 255, 0.07);
  }
`,EN=R.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,MN=R.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 11px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.78);
  font-size: 13px;
  line-height: 1.4;

  svg {
    color: #ffcf94;
  }
`,zN=R(ie.section)`
  padding-top: 8px;
`,RN=R.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`,LN=R(gg)`
  color: rgba(255, 211, 148, 0.88);
`,ON=R.h3`
  margin: 0;
  font-size: clamp(22px, 2.8vw, 30px);
  line-height: 1.12;
`,DN=R.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  line-height: 1.55;
`,PN=R.div`
  display: grid;
  gap: 10px;
`,VN=R.div`
  display: grid;
  grid-template-columns: 42px 1fr;
  gap: 12px;
  align-items: start;
  padding: 12px 14px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 12px;
    color: #121723;
    font-size: 13px;
    font-weight: 700;
    background: linear-gradient(135deg, rgba(255, 190, 100, 0.96), rgba(255, 221, 173, 0.78));
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.78);
    font-size: 14px;
    line-height: 1.5;
  }
`,Sw=Ke`
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  30% {
    transform: translate3d(8px, -6px, 0) scale(1.03);
  }
  50% {
    transform: translate3d(14px, -10px, 0) scale(1.06);
  }
  70% {
    transform: translate3d(7px, -4px, 0) scale(1.025);
  }
`,NN=Ke`
  0%, 100% {
    transform: perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1);
  }
  18% {
    transform: perspective(1200px) rotateX(0.8deg) rotateY(-1.2deg) translateY(-3px) scale(1.006);
  }
  36% {
    transform: perspective(1200px) rotateX(1.6deg) rotateY(-2deg) translateY(-6px) scale(1.012);
  }
  54% {
    transform: perspective(1200px) rotateX(-1.2deg) rotateY(2deg) translateY(6px) scale(0.996);
  }
  74% {
    transform: perspective(1200px) rotateX(0.7deg) rotateY(1.1deg) translateY(-2px) scale(1.004);
  }
`,BN=Ke`
  0%, 100% {
    transform: scaleX(0.18);
    opacity: 0.42;
  }
  50% {
    transform: scaleX(1);
    opacity: 1;
  }
`,_N=Ke`
  0%, 100% {
    transform: translateY(0) scale(1);
    opacity: 0.72;
  }
  50% {
    transform: translateY(-2px) scale(1.06);
    opacity: 1;
  }
`,$N=Ke`
  0% {
    background-position: 0% 50%;
    opacity: 0.28;
  }
  50% {
    background-position: 100% 50%;
    opacity: 0.9;
  }
  100% {
    background-position: 0% 50%;
    opacity: 0.28;
  }
`,HN=Ke`
  0% {
    transform: translateX(0) scale(0.84);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  55% {
    transform: translateX(calc(var(--beam-width) * 0.56)) scale(1.24);
    opacity: 1;
  }
  100% {
    transform: translateX(var(--beam-width)) scale(0.92);
    opacity: 0;
  }
`,UN=Ke`
  0% {
    transform: translate(-50%, -50%) scale(0.64);
    opacity: 0;
  }
  18% {
    opacity: 0.5;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.76);
    opacity: 0;
  }
`,GN=Ke`
  0%, 100% {
    transform: translate(-50%, -50%) scale(0.92);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.28);
  }
`,IN=Ke`
  0% {
    transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
    opacity: 0.96;
  }
  18% {
    transform: translate3d(calc(var(--move-one-x) * 0.42), calc(var(--move-one-y) * 0.42), 0) scale(1.014)
      rotate(calc(var(--rotate-one) * 0.4));
    opacity: 0.98;
  }
  36% {
    transform: translate3d(calc(var(--move-one-x) * 0.82), calc(var(--move-one-y) * 0.82), 0) scale(1.026)
      rotate(calc(var(--rotate-one) * 0.82));
    opacity: 1;
  }
  58% {
    transform: translate3d(calc(var(--move-two-x) * 0.9), calc(var(--move-two-y) * 0.9), 0) scale(0.99)
      rotate(calc(var(--rotate-two) * 0.9));
    opacity: 0.96;
  }
  78% {
    transform: translate3d(calc(var(--move-three-x) * 0.88), calc(var(--move-three-y) * 0.88), 0) scale(1.016)
      rotate(calc(var(--rotate-three) * 0.88));
    opacity: 1;
  }
  100% {
    transform: translate3d(var(--move-three-x), var(--move-three-y), 0) scale(1.02) rotate(var(--rotate-three));
    opacity: 0.98;
  }
`,kw=Ke`
  0%, 100% {
    transform: translateX(-160%) skewX(-18deg);
    opacity: 0;
  }
  34% {
    opacity: 0;
  }
  48% {
    opacity: 0.4;
  }
  60% {
    opacity: 0;
  }
  100% {
    transform: translateX(220%) skewX(-18deg);
  }
`,FN=Ke`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`,qN=R.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  min-height: 100%;
  padding: 20px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  background:
    linear-gradient(180deg, rgba(10, 16, 30, 0.92), rgba(7, 11, 20, 0.96)),
    radial-gradient(circle at 20% 12%, rgba(255, 195, 110, 0.1), transparent 42%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.04),
    0 22px 52px rgba(2, 8, 22, 0.28);
  isolation: isolate;
  backdrop-filter: blur(18px);
`,Tw=R.div`
  position: absolute;
  border-radius: 999px;
  pointer-events: none;
  filter: blur(64px);
  opacity: 0.26;
  z-index: 0;
`,KN=R(Tw)`
  width: 240px;
  height: 180px;
  top: 4%;
  left: 8%;
  background: radial-gradient(circle, rgba(255, 190, 98, 0.54), rgba(255, 190, 98, 0));
  animation: ${Sw} 12s ease-in-out infinite;
`,YN=R(Tw)`
  width: 280px;
  height: 220px;
  right: 0;
  bottom: 6%;
  background: radial-gradient(circle, rgba(68, 120, 255, 0.46), rgba(68, 120, 255, 0));
  animation: ${Sw} 14s ease-in-out infinite reverse;
`,XN=R.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 3px;
  margin-bottom: 12px;
`,WN=R.span`
  color: rgba(255, 208, 148, 0.78);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`,QN=R.p`
  margin: 0;
  max-width: 24ch;
  color: rgba(255, 255, 255, 0.88);
  font-size: 12px;
  line-height: 1.3;
`,ZN=R.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  align-items: start;
`,JN=R.div`
  display: grid;
  gap: 8px;
`,eB=R.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 34px minmax(98px, 0.78fr);
  gap: 8px;
  align-items: center;
  padding: 10px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);

  @media (max-width: 767px) {
    grid-template-columns: minmax(0, 1fr) 30px minmax(96px, 0.86fr);
  }
`,Rv=R.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 0 12px;
  border-radius: 12px;
  border: 1px solid
    ${({$tone:e})=>{switch(e){case"blue":return"rgba(102, 156, 255, 0.24)";case"green":return"rgba(84, 219, 174, 0.24)";case"gold":default:return"rgba(255, 188, 97, 0.24)"}}};
  background:
    ${({$tone:e})=>{switch(e){case"blue":return"linear-gradient(180deg, rgba(55, 96, 176, 0.18), rgba(18, 27, 45, 0.74))";case"green":return"linear-gradient(180deg, rgba(28, 118, 89, 0.18), rgba(18, 27, 45, 0.74))";case"gold":default:return"linear-gradient(180deg, rgba(143, 102, 34, 0.18), rgba(18, 27, 45, 0.74))"}}};
  color: rgba(255, 255, 255, 0.92);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.25;
  text-align: center;
`,tB=R.div`
  position: relative;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(255, 188, 97, 0.36), rgba(88, 145, 255, 0.92));

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -2px;
    width: 10px;
    height: 10px;
    border-top: 2px solid rgba(88, 145, 255, 0.9);
    border-right: 2px solid rgba(88, 145, 255, 0.9);
    transform: translateY(-50%) rotate(45deg);
  }
`,nB=R.div`
  position: relative;
  overflow: hidden;
  display: grid;
  gap: 10px;
  padding: 18px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    radial-gradient(circle at top center, rgba(255, 188, 97, 0.16), transparent 34%),
    linear-gradient(180deg, rgba(13, 18, 31, 0.92), rgba(9, 12, 22, 0.96));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.04),
    0 24px 56px rgba(3, 9, 20, 0.24);
`,aB=R.span`
  color: rgba(255, 211, 148, 0.82);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`,iB=R.strong`
  color: rgba(255, 255, 255, 0.96);
  font-size: 18px;
  line-height: 1.05;
`,rB=R.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.66);
  font-size: 11px;
  line-height: 1.3;
`,sB=R.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,Lv=R.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.78);
  font-size: 11px;
  line-height: 1.3;
`,oB=R.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 6px;
`,lB=R.div`
  display: grid;
  gap: 2px;
  padding: 8px 10px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);

  strong {
    color: rgba(255, 255, 255, 0.96);
    font-size: 14px;
    line-height: 1.2;
  }

  span {
    color: rgba(255, 255, 255, 0.6);
    font-size: 10px;
    line-height: 1.25;
  }
`;R.div`
  position: relative;
  min-height: 346px;
  z-index: 1;
  animation: ${NN} 12.6s ease-in-out infinite;
  transform-style: preserve-3d;
`;R.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  min-height: 260px;
`;R.div`
  position: relative;
  overflow: hidden;
  padding: 14px 14px 16px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 46%, rgba(255, 255, 255, 0.02));
    pointer-events: none;
  }
`;R.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 12px;
`;R.strong`
  display: block;
  color: rgba(255, 255, 255, 0.94);
  font-size: 13px;
  font-weight: 700;
`;R.span`
  display: block;
  margin-top: 2px;
  color: rgba(255, 255, 255, 0.56);
  font-size: 11px;
`;R.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  height: 28px;
  padding: 0 8px;
  border-radius: 999px;
  background: rgba(255, 186, 94, 0.14);
  border: 1px solid rgba(255, 186, 94, 0.22);
  color: #ffd59d;
  font-size: 11px;
  font-weight: 700;
  animation: ${_N} 1.8s ease-in-out infinite;
`;R.div`
  display: grid;
  gap: 10px;
`;R.div`
  position: relative;
  overflow: hidden;
  height: 42px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(10, 15, 28, 0.7);
`;R.div`
  position: absolute;
  inset: 0 auto 0 0;
  width: ${({$width:e})=>`${e}%`};
  border-radius: inherit;
  transform-origin: left center;
  background: ${({$tone:e})=>{switch(e){case"blue":return"linear-gradient(90deg, rgba(72, 129, 255, 0.18), rgba(108, 183, 255, 0.62))";case"green":return"linear-gradient(90deg, rgba(42, 189, 141, 0.18), rgba(88, 227, 178, 0.62))";case"gold":default:return"linear-gradient(90deg, rgba(255, 184, 87, 0.16), rgba(255, 214, 144, 0.62))"}}};
  animation: ${BN} 1.6s ease-in-out infinite;
  animation-delay: ${({$delay:e})=>`${e}s`};
`;R.div`
  --beam-width: ${({$width:e})=>`${e}px`};
  position: absolute;
  width: ${({$width:e})=>`${e}px`};
  height: 4px;
  border-radius: 999px;
  transform: rotate(${({$rotate:e})=>`${e}deg`});
  transform-origin: left center;
  background: linear-gradient(90deg, rgba(255, 188, 97, 0.08), rgba(87, 147, 255, 0.84), rgba(255, 188, 97, 0.08));
  background-size: 200% 100%;
  animation: ${$N} ${({$duration:e})=>`${e}s`} ease-in-out infinite;
  animation-delay: ${({$delay:e})=>`${e}s`};
  pointer-events: none;
  opacity: 0.44;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 220, 168, 1), rgba(255, 184, 87, 0.2));
    box-shadow: 0 0 18px rgba(255, 205, 126, 0.56);
    transform: translateY(-50%);
    animation: ${HN} ${({$duration:e})=>`${Math.max(e-.4,1.2)}s`} linear infinite;
    animation-delay: ${({$delay:e})=>`${e*.5}s`};
  }
`;R.div`
  position: absolute;
  width: ${({$size:e})=>`${e}px`};
  height: ${({$size:e})=>`${e}px`};
  pointer-events: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
  }

  &::before {
    inset: 0;
    border: 1px solid rgba(98, 160, 255, 0.3);
    box-shadow: 0 0 20px rgba(98, 160, 255, 0.14);
    animation: ${UN} ${({$duration:e})=>`${e}s`} ease-out infinite;
    animation-delay: ${({$delay:e})=>`${e}s`};
  }

  &::after {
    width: 10px;
    height: 10px;
    background: radial-gradient(circle, rgba(255, 220, 168, 1), rgba(255, 178, 80, 0.2));
    box-shadow: 0 0 18px rgba(255, 200, 120, 0.58);
    animation: ${GN} ${({$duration:e})=>`${Math.max(e-.4,1.1)}s`} ease-in-out infinite;
    animation-delay: ${({$delay:e})=>`${(e*.5).toFixed(2)}s`};
  }
`;R.div`
  --move-one-x: ${({$x1:e})=>`${e}px`};
  --move-one-y: ${({$y1:e})=>`${e}px`};
  --move-two-x: ${({$x2:e})=>`${e}px`};
  --move-two-y: ${({$y2:e})=>`${e}px`};
  --move-three-x: ${({$x3:e})=>`${e}px`};
  --move-three-y: ${({$y3:e})=>`${e}px`};
  --rotate-one: ${({$r1:e})=>`${e}deg`};
  --rotate-two: ${({$r2:e})=>`${e}deg`};
  --rotate-three: ${({$r3:e})=>`${e}deg`};
  position: absolute;
  overflow: hidden;
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 12px;
  align-items: center;
  padding: 14px 16px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.11);
  background: rgba(12, 16, 28, 0.62);
  backdrop-filter: blur(18px);
  box-shadow:
    0 22px 44px rgba(3, 9, 20, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  animation: ${IN} ${({$duration:e})=>`${e}s`} cubic-bezier(0.42, 0.08, 0.58, 0.92) infinite alternate both;
  animation-delay: ${({$delay:e})=>`${e}s`};
  will-change: transform, opacity;

  &::after {
    content: '';
    position: absolute;
    top: -30%;
    bottom: -30%;
    width: 34%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0));
    filter: blur(6px);
    animation: ${kw} ${({$duration:e})=>`${Math.max(e-.4,1.4)}s`} linear infinite;
    animation-delay: ${({$delay:e})=>`${e}s`};
    pointer-events: none;
  }
`;R.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  color: #fff;
  background: ${({$tone:e})=>{switch(e){case"blue":return"linear-gradient(135deg, rgba(66, 132, 255, 0.88), rgba(92, 181, 255, 0.7))";case"green":return"linear-gradient(135deg, rgba(52, 211, 153, 0.88), rgba(96, 230, 188, 0.66))";case"violet":return"linear-gradient(135deg, rgba(117, 92, 255, 0.84), rgba(173, 110, 255, 0.66))";case"gold":default:return"linear-gradient(135deg, rgba(255, 188, 97, 0.92), rgba(255, 211, 136, 0.7))"}}}; 
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22);
  animation: ${FN} 2.4s ease-in-out infinite;
`;R.div`
  display: grid;
  gap: 3px;
`;R.strong`
  color: rgba(255, 255, 255, 0.94);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
`;R.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  line-height: 1.35;
`;const cB=Ke`
  from {
    transform: translate3d(calc(-50% - (var(--lane-gap) / 2)), 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`,uB=Ke`
  0%, 100% {
    opacity: 0.24;
    transform: scaleX(0.92);
  }
  50% {
    opacity: 0.54;
    transform: scaleX(1);
  }
`,dB=Ke`
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -3px, 0);
  }
`,fB=Ke`
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-6px) scale(1.01);
  }
`,Ov=Ke`
  0% {
    transform: translate(-50%, -50%) scale(0.88);
    opacity: 0.18;
  }
  70% {
    transform: translate(-50%, -50%) scale(1.28);
    opacity: 0.48;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.42);
    opacity: 0;
  }
`,pB=Ke`
  0%, 100% {
    transform: translateY(0);
    border-color: rgba(255, 255, 255, 0.08);
  }
  50% {
    transform: translateY(-3px);
    border-color: rgba(255, 188, 97, 0.18);
  }
`,hB=Ke`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
`;R.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(220px, 0.88fr);
  gap: 18px;
  min-height: 344px;
`;R.div`
  display: grid;
  gap: 14px;
  align-content: start;
`;R.div`
  position: relative;
  overflow: hidden;
  padding: 14px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(180deg, rgba(16, 21, 36, 0.78), rgba(10, 14, 24, 0.84)),
    radial-gradient(circle at left center, rgba(255, 188, 97, 0.08), transparent 44%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
  animation: ${dB} 6.2s ease-in-out infinite;
  will-change: transform;

  &::before {
    content: '';
    position: absolute;
    left: 14px;
    right: 14px;
    bottom: 12px;
    height: 1px;
    background: linear-gradient(90deg, rgba(255, 188, 97, 0), rgba(255, 188, 97, 0.36), rgba(71, 133, 255, 0));
    animation: ${uB} 3.4s ease-in-out infinite;
    pointer-events: none;
  }
`;R.div`
  display: grid;
  gap: 3px;
  margin-bottom: 12px;
`;R.span`
  color: rgba(255, 211, 148, 0.86);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;R.span`
  color: rgba(255, 255, 255, 0.56);
  font-size: 12px;
  line-height: 1.4;
`;R.div`
  position: relative;
  overflow: hidden;
  border-radius: 16px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 40px;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(90deg, rgba(10, 14, 24, 0.94), rgba(10, 14, 24, 0));
  }

  &::after {
    right: 0;
    background: linear-gradient(270deg, rgba(10, 14, 24, 0.94), rgba(10, 14, 24, 0));
  }
`;R.div`
  --lane-gap: 12px;
  display: flex;
  gap: var(--lane-gap);
  width: max-content;
  transform: translate3d(calc(-50% - (var(--lane-gap) / 2)), 0, 0);
  animation: ${cB} ${({$duration:e})=>`${e}s`} linear infinite;
  animation-delay: ${({$delay:e})=>`${e}s`};
  will-change: transform;
`;R.div`
  display: flex;
  flex-shrink: 0;
  gap: 12px;
`;R.div`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  min-width: 188px;
  padding: 12px 14px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(18px);
  box-shadow:
    0 16px 32px rgba(3, 9, 20, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  animation: ${hB} 3.6s ease-in-out infinite;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0));
    transform: translateX(-120%);
    animation: ${kw} 6.8s linear infinite;
    pointer-events: none;
  }
`;R.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 11px;
  color: #fff;
  background: ${({$tone:e})=>{switch(e){case"blue":return"linear-gradient(135deg, rgba(66, 132, 255, 0.92), rgba(92, 181, 255, 0.72))";case"green":return"linear-gradient(135deg, rgba(52, 211, 153, 0.92), rgba(96, 230, 188, 0.68))";case"violet":return"linear-gradient(135deg, rgba(117, 92, 255, 0.88), rgba(173, 110, 255, 0.68))";case"gold":default:return"linear-gradient(135deg, rgba(255, 188, 97, 0.94), rgba(255, 211, 136, 0.72))"}}};
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18);
`;R.div`
  display: grid;
  gap: 2px;
`;R.strong`
  color: rgba(255, 255, 255, 0.94);
  font-size: 13px;
  font-weight: 700;
  line-height: 1.3;
`;R.span`
  color: rgba(255, 255, 255, 0.58);
  font-size: 11px;
  line-height: 1.35;
`;R.div`
  position: relative;
  overflow: hidden;
  display: grid;
  align-content: start;
  gap: 16px;
  padding: 18px;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    radial-gradient(circle at 50% 28%, rgba(255, 186, 94, 0.12), transparent 34%),
    linear-gradient(180deg, rgba(13, 18, 31, 0.86), rgba(9, 12, 22, 0.92));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.04),
    0 24px 56px rgba(3, 9, 20, 0.24);
  animation: ${fB} 8.6s ease-in-out infinite;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 42%;
    border-radius: 50%;
    pointer-events: none;
  }

  &::before {
    width: 112px;
    height: 112px;
    border: 1px solid rgba(255, 188, 97, 0.14);
    animation: ${Ov} 4.8s ease-out infinite;
  }

  &::after {
    width: 152px;
    height: 152px;
    border: 1px solid rgba(76, 134, 255, 0.12);
    animation: ${Ov} 5.8s ease-out infinite;
    animation-delay: 1.1s;
  }
`;R.span`
  position: relative;
  z-index: 1;
  color: rgba(255, 211, 148, 0.82);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;R.p`
  position: relative;
  z-index: 1;
  margin: 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: 15px;
  line-height: 1.5;
`;R.div`
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  gap: 4px;
  min-height: 116px;
  padding: 18px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(16px);
  text-align: center;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
`;R.strong`
  color: rgba(255, 255, 255, 0.96);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
`;R.span`
  color: rgba(255, 255, 255, 0.58);
  font-size: 12px;
  line-height: 1.4;
`;R.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 10px;
`;R.div`
  display: grid;
  gap: 2px;
  padding: 12px 14px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  animation: ${pB} 3.8s ease-in-out infinite;
  animation-delay: ${({$delay:e})=>`${e}s`};
`;R.strong`
  color: rgba(255, 255, 255, 0.95);
  font-size: 15px;
  font-weight: 700;
  line-height: 1.2;
`;R.span`
  color: rgba(255, 255, 255, 0.58);
  font-size: 12px;
  line-height: 1.35;
`;const Aa={eyebrow:"Lead Flow",title:"Website, Ads und Calls gehen direkt in den CRM-Flow.",lanes:[{source:"Website",target:"Lead",tone:"gold"},{source:"Ads",target:"Lead",tone:"blue"},{source:"Calls",target:"Lead",tone:"green"}],routerEyebrow:"CRM Hub",routerTitle:"CRM Router",routerMeta:"Capture, Routing und Rueckmeldung.",miniMeta:["1-2h Antwort","Live in CRM"],stats:[{value:"1-2h",label:"Response"},{value:"Live",label:"Assigned in CRM"}]},gB=()=>{const{t:e}=Ie();return d.jsxs(qN,{"aria-hidden":"true",children:[d.jsx(KN,{}),d.jsx(YN,{}),d.jsxs(XN,{children:[d.jsx(WN,{children:e("contact.visual.eyebrow",{defaultValue:Aa.eyebrow})}),d.jsx(QN,{children:e("contact.visual.title",{defaultValue:Aa.title})})]}),d.jsxs(ZN,{children:[d.jsx(JN,{children:Aa.lanes.map((t,a)=>d.jsxs(eB,{children:[d.jsx(Rv,{$tone:t.tone,children:e(`contact.visual.lanes.${a}.source`,{defaultValue:t.source})}),d.jsx(tB,{}),d.jsx(Rv,{children:e(`contact.visual.lanes.${a}.target`,{defaultValue:t.target})})]},t.source))}),d.jsxs(nB,{children:[d.jsx(aB,{children:e("contact.visual.routerEyebrow",{defaultValue:Aa.routerEyebrow})}),d.jsx(iB,{children:e("contact.visual.routerTitle",{defaultValue:Aa.routerTitle})}),d.jsx(rB,{children:e("contact.visual.routerMeta",{defaultValue:Aa.routerMeta})}),d.jsxs(sB,{children:[d.jsxs(Lv,{children:[d.jsx(J4,{}),e("contact.visual.miniMeta.0",{defaultValue:Aa.miniMeta[0]})]}),d.jsxs(Lv,{children:[d.jsx(ui,{}),e("contact.visual.miniMeta.1",{defaultValue:Aa.miniMeta[1]})]})]}),d.jsx(oB,{children:Aa.stats.map((t,a)=>d.jsxs(lB,{children:[d.jsx("strong",{children:e(`contact.visual.stats.${a}.value`,{defaultValue:t.value})}),d.jsx("span",{children:e(`contact.visual.stats.${a}.label`,{defaultValue:t.label})})]},t.label))})]})]})]})},Dv={hidden:{opacity:0,y:20},show:{opacity:1,y:0}},Me={headline:"Erzaehlen Sie uns von Ihrem Projekt",responseTime:"Durchschnittliche Antwortzeit: 1-2h",subtitle:"Kurz beschreiben, was Sie planen. Sie erhalten schnell eine Ersteinschaetzung und den naechsten Schritt.",quickContacts:"Direkter Kontakt",responseNote:"Antwort meist innerhalb von 1-2 Stunden",formTitle:"Projektanfrage",formIntro:"Drei Angaben reichen für den Start.",formHelp:"Name, Unternehmen und Ziel genuegen.",nextStepsTitle:"So geht es weiter",nextStepsLead:"Nach Ihrer Anfrage sehen Sie sofort, wie der erste Kontakt, die Priorisierung und die Rueckmeldung organisiert sind.",labels:{name:"Ihr Name",business:"Unternehmen",email:"E-Mail",message:"Projekt oder Ziel"},submitLoading:"Wird gesendet...",submitSuccess:"Vielen Dank. Ihre Anfrage wurde erfolgreich versendet.",submitError:"Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",contactMeta:{location:"Standort für schnelle Abstimmung",email:"Projektanfragen per E-Mail",phone:"Kurzes Erstgespraech oder Rueckruf"},trustItems:["Direkte Kommunikation","Klare Ersteinschaetzung","Schnelle Rueckmeldung"],nextSteps:["Ihre Anfrage landet direkt im Intake-Flow.","Wir melden uns meist innerhalb von 1-2 Stunden zurueck.","Sie erhalten einen klaren naechsten Schritt statt langer Rueckfragen."]},mB=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,bB="Ehrlicherstr. 52, 31135 Hildesheim, Germany",xB=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(bB)}`,yB=()=>{var N;const{t:e}=Ie(),a=((N=Hn().state)==null?void 0:N.prefillNeed)||"",[i,o]=j.useState(""),[l,u]=j.useState(""),[p,f]=j.useState(""),[g,m]=j.useState(a),[x,y]=j.useState(""),[v,S]=j.useState(!1),[k,A]=j.useState(!1),[M,z]=j.useState(!1),[C,H]=j.useState("");j.useEffect(()=>{a&&m(a)},[a]);const E=()=>["/.netlify/functions/contact","/api/contact"],V=async O=>{if(O.preventDefault(),A(!1),z(!1),H(""),!mB.test(p.trim())){z(!0),H(e("contact.form.error",{defaultValue:Me.submitError}));return}S(!0);try{const X=JSON.stringify({name:i.trim(),business:l.trim(),email:p.trim(),message:g.trim(),website:x.trim()}),J=E();let $=null;for(const te of J)if($=await fetch(te,{method:"POST",headers:{"Content-Type":"application/json"},body:X}),$.ok||$.status!==404)break;if(!$||!$.ok)throw new Error(`Request failed with status ${($==null?void 0:$.status)??"unknown"}`);o(""),u(""),f(""),m(""),y(""),A(!0)}catch(X){console.error("Contact form submit failed",X),z(!0),H(e("contact.form.error",{defaultValue:Me.submitError}))}finally{S(!1)}};return d.jsx(uN,{children:d.jsxs(en,{children:[d.jsx(dN,{initial:"hidden",animate:"show",variants:Dv,transition:{duration:.62,ease:hn},children:d.jsx(fN,{children:d.jsxs(pN,{children:[d.jsxs(hN,{children:[d.jsxs(bN,{children:[d.jsx(Wu,{}),d.jsx("span",{children:e("contact.responseTime",{defaultValue:Me.responseTime})})]}),d.jsx(xN,{children:d.jsx(Yi,{text:e("contact.h1",{defaultValue:Me.headline}),durationMs:2200,storageKey:"kontakt_h1_once"})}),d.jsx(yN,{children:e("contact.subtitle",{defaultValue:Me.subtitle})})]}),d.jsxs(gN,{children:[d.jsxs(wN,{onSubmit:V,noValidate:!0,children:[d.jsx(gg,{children:"VS Web Studio"}),d.jsx(Mv,{children:e("contact.form.title",{defaultValue:Me.formTitle})}),d.jsx(SN,{children:e("contact.form.intro",{defaultValue:Me.formIntro})}),d.jsxs(TN,{"aria-hidden":"true",children:[d.jsx("label",{htmlFor:"contact-website",children:"Website"}),d.jsx("input",{id:"contact-website",type:"text",name:"website",value:x,onChange:O=>y(O.target.value),tabIndex:-1,autoComplete:"off"})]}),d.jsxs(qc,{children:[d.jsx(Kc,{children:e("contact.form.labels.name",{defaultValue:Me.labels.name})}),d.jsxs(Yc,{children:[d.jsx(gE,{}),d.jsx("input",{type:"text",name:"name",value:i,onChange:O=>o(O.target.value),placeholder:e("contact.form.name",{defaultValue:Me.labels.name}),"aria-label":e("contact.form.labels.name",{defaultValue:Me.labels.name}),required:!0})]})]}),d.jsxs(qc,{children:[d.jsx(Kc,{children:e("contact.form.labels.business",{defaultValue:Me.labels.business})}),d.jsxs(Yc,{children:[d.jsx(Z4,{}),d.jsx("input",{type:"text",name:"business",value:l,onChange:O=>u(O.target.value),placeholder:e("contact.form.business",{defaultValue:Me.labels.business}),"aria-label":e("contact.form.labels.business",{defaultValue:Me.labels.business}),required:!0})]})]}),d.jsxs(qc,{children:[d.jsx(Kc,{children:e("contact.form.labels.email",{defaultValue:Me.labels.email})}),d.jsxs(Yc,{children:[d.jsx(ui,{}),d.jsx("input",{type:"email",name:"email",value:p,onChange:O=>f(O.target.value),placeholder:e("contact.form.email",{defaultValue:Me.labels.email}),"aria-label":e("contact.form.labels.email",{defaultValue:Me.labels.email}),autoComplete:"email",required:!0})]})]}),d.jsxs(qc,{children:[d.jsx(Kc,{children:e("contact.form.labels.message",{defaultValue:Me.labels.message})}),d.jsxs(Yc,{children:[d.jsx(nE,{}),d.jsx("textarea",{name:"message",placeholder:e("contact.form.need",{defaultValue:Me.labels.message}),value:g,onChange:O=>m(O.target.value),"aria-label":e("contact.form.labels.message",{defaultValue:Me.labels.message}),required:!0})]})]}),d.jsx(kN,{children:e("contact.form.help",{defaultValue:Me.formHelp})}),k?d.jsx(zv,{$tone:"success",role:"status","aria-live":"polite",children:e("contact.form.success",{defaultValue:Me.submitSuccess})}):null,M?d.jsx(zv,{$tone:"error",role:"alert",children:C||e("contact.form.error",{defaultValue:Me.submitError})}):null,d.jsxs(jN,{type:"submit",disabled:v,"aria-busy":v,children:[d.jsx(ui,{}),v?e("contact.form.submitLoading",{defaultValue:Me.submitLoading}):e("contact.form.submit",{defaultValue:"Projekt anfragen"})]})]}),d.jsx(mN,{children:d.jsx(gB,{})})]})]})})}),d.jsx(zN,{initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.18},variants:Dv,transition:{duration:.52,ease:hn},children:d.jsxs(RN,{children:[d.jsxs(Ev,{children:[d.jsx(gg,{children:"VS Web Studio"}),d.jsx(Mv,{children:e("contact.quickContacts",{defaultValue:Me.quickContacts})}),d.jsxs(CN,{children:[d.jsx(bE,{}),d.jsx("span",{children:e("contact.responseNote",{defaultValue:Me.responseNote})})]}),d.jsxs(AN,{children:[d.jsxs(wh,{href:xB,target:"_blank",rel:"noreferrer",children:[d.jsx(_o,{}),d.jsxs("div",{children:[d.jsx("strong",{children:"Ehrlicherstr. 52, 31135 Hildesheim"}),d.jsx("span",{children:e("contact.contactMeta.location",{defaultValue:Me.contactMeta.location})})]})]}),d.jsxs(wh,{href:"mailto:anfrage@vs-web-studio.de",children:[d.jsx(ui,{}),d.jsxs("div",{children:[d.jsx("strong",{children:"anfrage@vs-web-studio.de"}),d.jsx("span",{children:e("contact.contactMeta.email",{defaultValue:Me.contactMeta.email})})]})]}),d.jsxs(wh,{href:"tel:+4915164392053",children:[d.jsx(lE,{}),d.jsxs("div",{children:[d.jsx("strong",{children:"+49 1516 4392053"}),d.jsx("span",{children:e("contact.contactMeta.phone",{defaultValue:Me.contactMeta.phone})})]})]})]}),d.jsx(EN,{children:Me.trustItems.map((O,X)=>d.jsxs(MN,{children:[d.jsx(jt,{}),e(`contact.trustItems.${X}`,{defaultValue:O})]},O))})]}),d.jsxs(Ev,{children:[d.jsx(LN,{children:e("contact.nextStepsEyebrow",{defaultValue:"Lead Intake"})}),d.jsx(ON,{children:e("contact.nextStepsTitle",{defaultValue:Me.nextStepsTitle})}),d.jsx(DN,{children:e("contact.nextStepsLead",{defaultValue:Me.nextStepsLead})}),d.jsx(PN,{children:Me.nextSteps.map((O,X)=>d.jsxs(VN,{children:[d.jsxs("span",{children:["0",X+1]}),d.jsx("p",{children:e(`contact.nextSteps.${X}`,{defaultValue:O})})]},O))})]})]})})]})})},vB=()=>{const{t:e}=Ie();return d.jsx(mn,{children:d.jsxs(en,{children:[d.jsxs(Un,{children:[d.jsx("h1",{children:d.jsx(Yi,{text:e("blog.h1"),durationMs:2600,storageKey:"blog_h1_once"})}),d.jsx("p",{children:e("blog.subtitle")})]}),d.jsx(mt,{children:d.jsxs(jm,{children:[d.jsx(Ue,{children:d.jsxs("h3",{children:[d.jsx(Yt,{children:d.jsx(as,{})}),e("blog.cards.c1")]})}),d.jsx(Ue,{children:d.jsxs("h3",{children:[d.jsx(Yt,{children:d.jsx(a3,{})}),e("blog.cards.c2")]})}),d.jsx(Ue,{children:d.jsxs("h3",{children:[d.jsx(Yt,{children:d.jsx(pl,{})}),e("blog.cards.c3")]})}),d.jsx(Ue,{children:d.jsxs("h3",{children:[d.jsx(Yt,{children:d.jsx(as,{})}),e("blog.cards.c4")]})})]})}),d.jsxs(Cm,{children:[d.jsx("h2",{children:d.jsx(Yi,{text:e("blog.leadMagnet"),durationMs:1800,storageKey:"blog_leadmagnet_once"})}),d.jsxs(CP,{style:{maxWidth:420},children:[d.jsxs(pw,{children:[d.jsx(ui,{})," ",d.jsx("input",{type:"email",placeholder:e("blog.emailPlaceholder"),required:!0})]}),d.jsxs(fw,{type:"submit",children:[d.jsx(ui,{})," ",e("blog.getGuide")]})]})]})]})})},wB=()=>{const{t:e}=Ie();return d.jsx(mn,{children:d.jsxs(en,{children:[d.jsxs(Un,{children:[d.jsx("h1",{children:e("legal.impressum.h1")}),d.jsx("p",{children:e("legal.impressum.subtitle")})]}),d.jsx(mt,{children:d.jsxs(Ue,{children:[d.jsx("p",{children:e("legal.impressum.l1")}),d.jsx("p",{children:e("legal.impressum.l2")}),d.jsx("p",{children:e("legal.impressum.l3")}),d.jsx("p",{children:e("legal.impressum.l4")}),d.jsx("p",{children:e("legal.impressum.l5")})]})})]})})},SB=()=>{const{t:e}=Ie();return d.jsx(mn,{children:d.jsxs(en,{children:[d.jsxs(Un,{children:[d.jsx("h1",{children:e("legal.datenschutz.h1")}),d.jsx("p",{children:e("legal.datenschutz.subtitle")})]}),d.jsx(mt,{children:d.jsxs(Ue,{children:[d.jsx("p",{children:e("legal.datenschutz.l1")}),d.jsx("p",{children:e("legal.datenschutz.l2")}),d.jsx("p",{children:e("legal.datenschutz.l3")}),d.jsx("p",{children:e("legal.datenschutz.l4")})]})})]})})},kB=()=>{const{t:e}=Ie();return d.jsx(mn,{children:d.jsxs(en,{children:[d.jsxs(Un,{children:[d.jsx("h1",{children:e("legal.agb.h1")}),d.jsx("p",{children:e("legal.agb.subtitle")})]}),d.jsx(mt,{children:d.jsxs(Ue,{children:[d.jsx("p",{children:e("legal.agb.l1")}),d.jsx("p",{children:e("legal.agb.l2")})]})})]})})},TB=()=>{const{t:e}=Ie();return d.jsx(mn,{children:d.jsxs(en,{children:[d.jsxs(Un,{children:[d.jsx("h1",{children:e("legal.cookies.h1")}),d.jsx("p",{children:e("legal.cookies.subtitle")})]}),d.jsx(mt,{children:d.jsxs(Ue,{children:[d.jsx("p",{children:e("legal.cookies.l1")}),d.jsx("p",{children:e("legal.cookies.l2")})]})})]})})},jB=()=>{const{t:e}=Ie();return d.jsx(mn,{children:d.jsx(en,{children:d.jsxs(Un,{children:[d.jsx("h1",{children:e("niche.handwerker.h1")}),d.jsx("p",{children:e("niche.handwerker.p")}),d.jsx(Da,{children:d.jsx(ua,{to:"/kontakt",children:e("common.projectRequest")})})]})})})},CB=()=>{const{t:e}=Ie();return d.jsx(mn,{children:d.jsx(en,{children:d.jsxs(Un,{children:[d.jsx("h1",{children:e("niche.praxis.h1")}),d.jsx("p",{children:e("niche.praxis.p")}),d.jsx(Da,{children:d.jsx(ua,{to:"/kontakt",children:e("common.projectRequest")})})]})})})},AB=()=>{const{t:e}=Ie();return d.jsx(mn,{children:d.jsx(en,{children:d.jsxs(Un,{children:[d.jsx("h1",{children:e("niche.werkstatt.h1")}),d.jsx("p",{children:e("niche.werkstatt.p")}),d.jsx(Da,{children:d.jsx(ua,{to:"/kontakt",children:e("common.projectRequest")})})]})})})},EB=()=>d.jsx(mn,{children:d.jsx(en,{children:d.jsxs(Un,{children:[d.jsx("p",{children:"404"}),d.jsx("h1",{children:"Seite nicht gefunden."}),d.jsx("p",{children:"Diese URL existiert nicht oder wurde verschoben. Wechseln Sie zur Startseite oder senden Sie uns direkt Ihre Projektanfrage."}),d.jsxs(Da,{children:[d.jsxs(ua,{to:"/",children:[d.jsx(WA,{})," Zur Startseite"]}),d.jsx(ua,{to:"/kontakt",children:"Projekt anfragen"})]})]})})}),jw="vs-studio-maintenance-bypass",MB=5,zB=3200,RB=/googlebot|google-inspectiontool|googleother|bingbot|slurp|duckduckbot|baiduspider|yandexbot|applebot|petalbot|facebot|facebookexternalhit|twitterbot|linkedinbot|slackbot|discordbot|telegrambot/i,LB=()=>typeof window>"u"?!1:RB.test(window.navigator.userAgent),OB=()=>typeof window>"u"?!1:LB()||window.localStorage.getItem(jw)==="true",DB=({children:e})=>{const[t,a]=j.useState(OB),[i,o]=j.useState(0),l=j.useRef(null);j.useEffect(()=>()=>{l.current!==null&&window.clearTimeout(l.current)},[]);const u=()=>{window.localStorage.setItem(jw,"true"),a(!0),o(0),l.current!==null&&(window.clearTimeout(l.current),l.current=null)},p=()=>{const f=i+1;if(f>=MB){u();return}o(f),l.current!==null&&window.clearTimeout(l.current),l.current=window.setTimeout(()=>{o(0),l.current=null},zB)};return t?d.jsx(d.Fragment,{children:e}):d.jsxs("div",{className:"maintenance-screen",children:[d.jsx("button",{type:"button",className:"maintenance-ghost-trigger","aria-label":"Open internal preview access",onClick:p}),d.jsxs("div",{className:"maintenance-shell",children:[d.jsx("div",{className:"maintenance-badge",children:"VS Web Studio"}),d.jsx("p",{className:"maintenance-kicker",children:"Website update in progress"}),d.jsx("h1",{children:"We are building something sharper."}),d.jsx("p",{className:"maintenance-copy",children:"Our website is currently under development. We are preparing the new experience and will be back online soon."}),d.jsxs("div",{className:"maintenance-meta",children:[d.jsx("span",{children:"Design"}),d.jsx("span",{children:"Development"}),d.jsx("span",{children:"Launch soon"})]})]})]})},PB=()=>d.jsx(DB,{children:d.jsx(rk,{children:d.jsxs(kt,{path:"/",element:d.jsx(HR,{}),children:[d.jsx(kt,{index:!0,element:d.jsx(pP,{})}),d.jsx(kt,{path:"services",element:d.jsx(bV,{})}),d.jsx(kt,{path:"preise",element:d.jsx(YV,{})}),d.jsx(kt,{path:"referenzen",element:d.jsx(aN,{})}),d.jsx(kt,{path:"ueber-uns",element:d.jsx(cN,{})}),d.jsx(kt,{path:"kontakt",element:d.jsx(yB,{})}),d.jsx(kt,{path:"blog",element:d.jsx(vB,{})}),d.jsx(kt,{path:"handwerker",element:d.jsx(jB,{})}),d.jsx(kt,{path:"praxis",element:d.jsx(CB,{})}),d.jsx(kt,{path:"werkstatt",element:d.jsx(AB,{})}),d.jsx(kt,{path:"impressum",element:d.jsx(wB,{})}),d.jsx(kt,{path:"datenschutz",element:d.jsx(SB,{})}),d.jsx(kt,{path:"agb",element:d.jsx(kB,{})}),d.jsx(kt,{path:"cookies",element:d.jsx(TB,{})}),d.jsx(kt,{path:"home",element:d.jsx(nk,{to:"/",replace:!0})}),d.jsx(kt,{path:"*",element:d.jsx(EB,{})})]})})});iS.createRoot(document.getElementById("root")).render(d.jsxs(Ae.StrictMode,{children:[d.jsx(R9,{styles:N9}),d.jsx(Mk,{basename:"/",children:d.jsx(zM,{children:d.jsx(PB,{})})})]}));export{VB as c,Pv as g};
