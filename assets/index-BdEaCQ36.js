function F6(e,t){for(var a=0;a<t.length;a++){const i=t[a];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function a(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=a(o);fetch(o.href,l)}})();var lB=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vp={exports:{}},go={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yb;function q6(){if(yb)return go;yb=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function a(i,o,l){var u=null;if(l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),"key"in o){l={};for(var p in o)p!=="key"&&(l[p]=o[p])}else l=o;return o=l.ref,{$$typeof:e,type:i,key:u,ref:o!==void 0?o:null,props:l}}return go.Fragment=t,go.jsx=a,go.jsxs=a,go}var vb;function K6(){return vb||(vb=1,vp.exports=q6()),vp.exports}var d=K6(),wp={exports:{}},bo={},Sp={exports:{}},kp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wb;function Y6(){return wb||(wb=1,function(e){function t(D,B){var G=D.length;D.push(B);e:for(;0<G;){var Z=G-1>>>1,L=D[Z];if(0<o(L,B))D[Z]=B,D[G]=L,G=Z;else break e}}function a(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var B=D[0],G=D.pop();if(G!==B){D[0]=G;e:for(var Z=0,L=D.length,Y=L>>>1;Z<Y;){var ne=2*(Z+1)-1,ae=D[ne],se=ne+1,xe=D[se];if(0>o(ae,G))se<L&&0>o(xe,ae)?(D[Z]=xe,D[se]=G,Z=se):(D[Z]=ae,D[ne]=G,Z=ne);else if(se<L&&0>o(xe,G))D[Z]=xe,D[se]=G,Z=se;else break e}}return B}function o(D,B){var G=D.sortIndex-B.sortIndex;return G!==0?G:D.id-B.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,p=u.now();e.unstable_now=function(){return u.now()-p}}var f=[],m=[],g=1,x=null,y=3,v=!1,S=!1,k=!1,C=!1,M=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function $(D){for(var B=a(m);B!==null;){if(B.callback===null)i(m);else if(B.startTime<=D)i(m),B.sortIndex=B.expirationTime,t(f,B);else break;B=a(m)}}function E(D){if(k=!1,$(D),!S)if(a(f)!==null)S=!0,V||(V=!0,te());else{var B=a(m);B!==null&&oe(E,B.startTime-D)}}var V=!1,N=-1,O=5,X=-1;function J(){return C?!0:!(e.unstable_now()-X<O)}function H(){if(C=!1,V){var D=e.unstable_now();X=D;var B=!0;try{e:{S=!1,k&&(k=!1,z(N),N=-1),v=!0;var G=y;try{t:{for($(D),x=a(f);x!==null&&!(x.expirationTime>D&&J());){var Z=x.callback;if(typeof Z=="function"){x.callback=null,y=x.priorityLevel;var L=Z(x.expirationTime<=D);if(D=e.unstable_now(),typeof L=="function"){x.callback=L,$(D),B=!0;break t}x===a(f)&&i(f),$(D)}else i(f);x=a(f)}if(x!==null)B=!0;else{var Y=a(m);Y!==null&&oe(E,Y.startTime-D),B=!1}}break e}finally{x=null,y=G,v=!1}B=void 0}}finally{B?te():V=!1}}}var te;if(typeof A=="function")te=function(){A(H)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,le=ce.port2;ce.port1.onmessage=H,te=function(){le.postMessage(null)}}else te=function(){M(H,0)};function oe(D,B){N=M(function(){D(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_next=function(D){switch(y){case 1:case 2:case 3:var B=3;break;default:B=y}var G=y;y=B;try{return D()}finally{y=G}},e.unstable_requestPaint=function(){C=!0},e.unstable_runWithPriority=function(D,B){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var G=y;y=D;try{return B()}finally{y=G}},e.unstable_scheduleCallback=function(D,B,G){var Z=e.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?Z+G:Z):G=Z,D){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=G+L,D={id:g++,callback:B,priorityLevel:D,startTime:G,expirationTime:L,sortIndex:-1},G>Z?(D.sortIndex=G,t(m,D),a(f)===null&&D===a(m)&&(k?(z(N),N=-1):k=!0,oe(E,G-Z))):(D.sortIndex=L,t(f,D),S||v||(S=!0,V||(V=!0,te()))),D},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(D){var B=y;return function(){var G=y;y=B;try{return D.apply(this,arguments)}finally{y=G}}}}(kp)),kp}var Sb;function X6(){return Sb||(Sb=1,Sp.exports=Y6()),Sp.exports}var Tp={exports:{}},ye={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kb;function W6(){if(kb)return ye;kb=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function y(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,k={};function C(L,Y,ne){this.props=L,this.context=Y,this.refs=k,this.updater=ne||v}C.prototype.isReactComponent={},C.prototype.setState=function(L,Y){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,Y,"setState")},C.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function M(){}M.prototype=C.prototype;function z(L,Y,ne){this.props=L,this.context=Y,this.refs=k,this.updater=ne||v}var A=z.prototype=new M;A.constructor=z,S(A,C.prototype),A.isPureReactComponent=!0;var $=Array.isArray,E={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function N(L,Y,ne,ae,se,xe){return ne=xe.ref,{$$typeof:e,type:L,key:Y,ref:ne!==void 0?ne:null,props:xe}}function O(L,Y){return N(L.type,Y,void 0,void 0,void 0,L.props)}function X(L){return typeof L=="object"&&L!==null&&L.$$typeof===e}function J(L){var Y={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ne){return Y[ne]})}var H=/\/+/g;function te(L,Y){return typeof L=="object"&&L!==null&&L.key!=null?J(""+L.key):Y.toString(36)}function ce(){}function le(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(ce,ce):(L.status="pending",L.then(function(Y){L.status==="pending"&&(L.status="fulfilled",L.value=Y)},function(Y){L.status==="pending"&&(L.status="rejected",L.reason=Y)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function oe(L,Y,ne,ae,se){var xe=typeof L;(xe==="undefined"||xe==="boolean")&&(L=null);var de=!1;if(L===null)de=!0;else switch(xe){case"bigint":case"string":case"number":de=!0;break;case"object":switch(L.$$typeof){case e:case t:de=!0;break;case g:return de=L._init,oe(de(L._payload),Y,ne,ae,se)}}if(de)return se=se(L),de=ae===""?"."+te(L,0):ae,$(se)?(ne="",de!=null&&(ne=de.replace(H,"$&/")+"/"),oe(se,Y,ne,"",function(Lt){return Lt})):se!=null&&(X(se)&&(se=O(se,ne+(se.key==null||L&&L.key===se.key?"":(""+se.key).replace(H,"$&/")+"/")+de)),Y.push(se)),1;de=0;var bt=ae===""?".":ae+":";if($(L))for(var Oe=0;Oe<L.length;Oe++)ae=L[Oe],xe=bt+te(ae,Oe),de+=oe(ae,Y,ne,xe,se);else if(Oe=y(L),typeof Oe=="function")for(L=Oe.call(L),Oe=0;!(ae=L.next()).done;)ae=ae.value,xe=bt+te(ae,Oe++),de+=oe(ae,Y,ne,xe,se);else if(xe==="object"){if(typeof L.then=="function")return oe(le(L),Y,ne,ae,se);throw Y=String(L),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return de}function D(L,Y,ne){if(L==null)return L;var ae=[],se=0;return oe(L,ae,"","",function(xe){return Y.call(ne,xe,se++)}),ae}function B(L){if(L._status===-1){var Y=L._result;Y=Y(),Y.then(function(ne){(L._status===0||L._status===-1)&&(L._status=1,L._result=ne)},function(ne){(L._status===0||L._status===-1)&&(L._status=2,L._result=ne)}),L._status===-1&&(L._status=0,L._result=Y)}if(L._status===1)return L._result.default;throw L._result}var G=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Z(){}return ye.Children={map:D,forEach:function(L,Y,ne){D(L,function(){Y.apply(this,arguments)},ne)},count:function(L){var Y=0;return D(L,function(){Y++}),Y},toArray:function(L){return D(L,function(Y){return Y})||[]},only:function(L){if(!X(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},ye.Component=C,ye.Fragment=a,ye.Profiler=o,ye.PureComponent=z,ye.StrictMode=i,ye.Suspense=f,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,ye.__COMPILER_RUNTIME={__proto__:null,c:function(L){return E.H.useMemoCache(L)}},ye.cache=function(L){return function(){return L.apply(null,arguments)}},ye.cloneElement=function(L,Y,ne){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var ae=S({},L.props),se=L.key,xe=void 0;if(Y!=null)for(de in Y.ref!==void 0&&(xe=void 0),Y.key!==void 0&&(se=""+Y.key),Y)!V.call(Y,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&Y.ref===void 0||(ae[de]=Y[de]);var de=arguments.length-2;if(de===1)ae.children=ne;else if(1<de){for(var bt=Array(de),Oe=0;Oe<de;Oe++)bt[Oe]=arguments[Oe+2];ae.children=bt}return N(L.type,se,void 0,void 0,xe,ae)},ye.createContext=function(L){return L={$$typeof:u,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:l,_context:L},L},ye.createElement=function(L,Y,ne){var ae,se={},xe=null;if(Y!=null)for(ae in Y.key!==void 0&&(xe=""+Y.key),Y)V.call(Y,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(se[ae]=Y[ae]);var de=arguments.length-2;if(de===1)se.children=ne;else if(1<de){for(var bt=Array(de),Oe=0;Oe<de;Oe++)bt[Oe]=arguments[Oe+2];se.children=bt}if(L&&L.defaultProps)for(ae in de=L.defaultProps,de)se[ae]===void 0&&(se[ae]=de[ae]);return N(L,xe,void 0,void 0,null,se)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(L){return{$$typeof:p,render:L}},ye.isValidElement=X,ye.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:B}},ye.memo=function(L,Y){return{$$typeof:m,type:L,compare:Y===void 0?null:Y}},ye.startTransition=function(L){var Y=E.T,ne={};E.T=ne;try{var ae=L(),se=E.S;se!==null&&se(ne,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(Z,G)}catch(xe){G(xe)}finally{E.T=Y}},ye.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},ye.use=function(L){return E.H.use(L)},ye.useActionState=function(L,Y,ne){return E.H.useActionState(L,Y,ne)},ye.useCallback=function(L,Y){return E.H.useCallback(L,Y)},ye.useContext=function(L){return E.H.useContext(L)},ye.useDebugValue=function(){},ye.useDeferredValue=function(L,Y){return E.H.useDeferredValue(L,Y)},ye.useEffect=function(L,Y,ne){var ae=E.H;if(typeof ne=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ae.useEffect(L,Y)},ye.useId=function(){return E.H.useId()},ye.useImperativeHandle=function(L,Y,ne){return E.H.useImperativeHandle(L,Y,ne)},ye.useInsertionEffect=function(L,Y){return E.H.useInsertionEffect(L,Y)},ye.useLayoutEffect=function(L,Y){return E.H.useLayoutEffect(L,Y)},ye.useMemo=function(L,Y){return E.H.useMemo(L,Y)},ye.useOptimistic=function(L,Y){return E.H.useOptimistic(L,Y)},ye.useReducer=function(L,Y,ne){return E.H.useReducer(L,Y,ne)},ye.useRef=function(L){return E.H.useRef(L)},ye.useState=function(L){return E.H.useState(L)},ye.useSyncExternalStore=function(L,Y,ne){return E.H.useSyncExternalStore(L,Y,ne)},ye.useTransition=function(){return E.H.useTransition()},ye.version="19.1.1",ye}var Tb;function wm(){return Tb||(Tb=1,Tp.exports=W6()),Tp.exports}var jp={exports:{}},Pt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jb;function Q6(){if(jb)return Pt;jb=1;var e=wm();function t(f){var m="https://react.dev/errors/"+f;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+f+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var i={d:{f:a,r:function(){throw Error(t(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(f,m,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:x==null?null:""+x,children:f,containerInfo:m,implementation:g}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(f,m){if(f==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Pt.createPortal=function(f,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return l(f,m,null,g)},Pt.flushSync=function(f){var m=u.T,g=i.p;try{if(u.T=null,i.p=2,f)return f()}finally{u.T=m,i.p=g,i.d.f()}},Pt.preconnect=function(f,m){typeof f=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,i.d.C(f,m))},Pt.prefetchDNS=function(f){typeof f=="string"&&i.d.D(f)},Pt.preinit=function(f,m){if(typeof f=="string"&&m&&typeof m.as=="string"){var g=m.as,x=p(g,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,v=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?i.d.S(f,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:v}):g==="script"&&i.d.X(f,{crossOrigin:x,integrity:y,fetchPriority:v,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Pt.preinitModule=function(f,m){if(typeof f=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=p(m.as,m.crossOrigin);i.d.M(f,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&i.d.M(f)},Pt.preload=function(f,m){if(typeof f=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,x=p(g,m.crossOrigin);i.d.L(f,g,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Pt.preloadModule=function(f,m){if(typeof f=="string")if(m){var g=p(m.as,m.crossOrigin);i.d.m(f,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else i.d.m(f)},Pt.requestFormReset=function(f){i.d.r(f)},Pt.unstable_batchedUpdates=function(f,m){return f(m)},Pt.useFormState=function(f,m,g){return u.H.useFormState(f,m,g)},Pt.useFormStatus=function(){return u.H.useHostTransitionStatus()},Pt.version="19.1.1",Pt}var Ab;function Lv(){if(Ab)return jp.exports;Ab=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),jp.exports=Q6(),jp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cb;function Z6(){if(Cb)return bo;Cb=1;var e=X6(),t=wm(),a=Lv();function i(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var r=n,s=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(s=r.return),n=r.return;while(n)}return r.tag===3?s:null}function u(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function p(n){if(l(n)!==n)throw Error(i(188))}function f(n){var r=n.alternate;if(!r){if(r=l(n),r===null)throw Error(i(188));return r!==n?null:n}for(var s=n,c=r;;){var h=s.return;if(h===null)break;var b=h.alternate;if(b===null){if(c=h.return,c!==null){s=c;continue}break}if(h.child===b.child){for(b=h.child;b;){if(b===s)return p(h),n;if(b===c)return p(h),r;b=b.sibling}throw Error(i(188))}if(s.return!==c.return)s=h,c=b;else{for(var w=!1,T=h.child;T;){if(T===s){w=!0,s=h,c=b;break}if(T===c){w=!0,c=h,s=b;break}T=T.sibling}if(!w){for(T=b.child;T;){if(T===s){w=!0,s=b,c=h;break}if(T===c){w=!0,c=b,s=h;break}T=T.sibling}if(!w)throw Error(i(189))}}if(s.alternate!==c)throw Error(i(190))}if(s.tag!==3)throw Error(i(188));return s.stateNode.current===s?n:r}function m(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=m(n),r!==null)return r;n=n.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),A=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),X=Symbol.for("react.activity"),J=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function te(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var ce=Symbol.for("react.client.reference");function le(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===ce?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case S:return"Fragment";case C:return"Profiler";case k:return"StrictMode";case E:return"Suspense";case V:return"SuspenseList";case X:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case v:return"Portal";case A:return(n.displayName||"Context")+".Provider";case z:return(n._context.displayName||"Context")+".Consumer";case $:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case N:return r=n.displayName||null,r!==null?r:le(n.type)||"Memo";case O:r=n._payload,n=n._init;try{return le(n(r))}catch{}}return null}var oe=Array.isArray,D=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},Z=[],L=-1;function Y(n){return{current:n}}function ne(n){0>L||(n.current=Z[L],Z[L]=null,L--)}function ae(n,r){L++,Z[L]=n.current,n.current=r}var se=Y(null),xe=Y(null),de=Y(null),bt=Y(null);function Oe(n,r){switch(ae(de,r),ae(xe,n),ae(se,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?K2(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=K2(r),n=Y2(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ne(se),ae(se,n)}function Lt(){ne(se),ne(xe),ne(de)}function hi(n){n.memoizedState!==null&&ae(bt,n);var r=se.current,s=Y2(r,n.type);r!==s&&(ae(xe,n),ae(se,s))}function da(n){xe.current===n&&(ne(se),ne(xe)),bt.current===n&&(ne(bt),uo._currentValue=G)}var bn=Object.prototype.hasOwnProperty,sd=e.unstable_scheduleCallback,od=e.unstable_cancelCallback,kw=e.unstable_shouldYield,Tw=e.unstable_requestPaint,Gn=e.unstable_now,jw=e.unstable_getCurrentPriorityLevel,Cg=e.unstable_ImmediatePriority,Eg=e.unstable_UserBlockingPriority,gl=e.unstable_NormalPriority,Aw=e.unstable_LowPriority,Mg=e.unstable_IdlePriority,Cw=e.log,Ew=e.unstable_setDisableYieldValue,xs=null,tn=null;function Pa(n){if(typeof Cw=="function"&&Ew(n),tn&&typeof tn.setStrictMode=="function")try{tn.setStrictMode(xs,n)}catch{}}var nn=Math.clz32?Math.clz32:Rw,Mw=Math.log,zw=Math.LN2;function Rw(n){return n>>>=0,n===0?32:31-(Mw(n)/zw|0)|0}var bl=256,xl=4194304;function mi(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function yl(n,r,s){var c=n.pendingLanes;if(c===0)return 0;var h=0,b=n.suspendedLanes,w=n.pingedLanes;n=n.warmLanes;var T=c&134217727;return T!==0?(c=T&~b,c!==0?h=mi(c):(w&=T,w!==0?h=mi(w):s||(s=T&~n,s!==0&&(h=mi(s))))):(T=c&~b,T!==0?h=mi(T):w!==0?h=mi(w):s||(s=c&~n,s!==0&&(h=mi(s)))),h===0?0:r!==0&&r!==h&&(r&b)===0&&(b=h&-h,s=r&-r,b>=s||b===32&&(s&4194048)!==0)?r:h}function ys(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function Lw(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zg(){var n=bl;return bl<<=1,(bl&4194048)===0&&(bl=256),n}function Rg(){var n=xl;return xl<<=1,(xl&62914560)===0&&(xl=4194304),n}function ld(n){for(var r=[],s=0;31>s;s++)r.push(n);return r}function vs(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Ow(n,r,s,c,h,b){var w=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var T=n.entanglements,P=n.expirationTimes,F=n.hiddenUpdates;for(s=w&~s;0<s;){var W=31-nn(s),ee=1<<W;T[W]=0,P[W]=-1;var q=F[W];if(q!==null)for(F[W]=null,W=0;W<q.length;W++){var K=q[W];K!==null&&(K.lane&=-536870913)}s&=~ee}c!==0&&Lg(n,c,0),b!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=b&~(w&~r))}function Lg(n,r,s){n.pendingLanes|=r,n.suspendedLanes&=~r;var c=31-nn(r);n.entangledLanes|=r,n.entanglements[c]=n.entanglements[c]|1073741824|s&4194090}function Og(n,r){var s=n.entangledLanes|=r;for(n=n.entanglements;s;){var c=31-nn(s),h=1<<c;h&r|n[c]&r&&(n[c]|=r),s&=~h}}function cd(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function ud(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Dg(){var n=B.p;return n!==0?n:(n=window.event,n===void 0?32:pb(n.type))}function Dw(n,r){var s=B.p;try{return B.p=n,r()}finally{B.p=s}}var Va=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Va,Ut="__reactProps$"+Va,Xi="__reactContainer$"+Va,dd="__reactEvents$"+Va,Pw="__reactListeners$"+Va,Vw="__reactHandles$"+Va,Pg="__reactResources$"+Va,ws="__reactMarker$"+Va;function fd(n){delete n[Ot],delete n[Ut],delete n[dd],delete n[Pw],delete n[Vw]}function Wi(n){var r=n[Ot];if(r)return r;for(var s=n.parentNode;s;){if(r=s[Xi]||s[Ot]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(n=Z2(n);n!==null;){if(s=n[Ot])return s;n=Z2(n)}return r}n=s,s=n.parentNode}return null}function Qi(n){if(n=n[Ot]||n[Xi]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function Ss(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(i(33))}function Zi(n){var r=n[Pg];return r||(r=n[Pg]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function xt(n){n[ws]=!0}var Vg=new Set,Ng={};function gi(n,r){Ji(n,r),Ji(n+"Capture",r)}function Ji(n,r){for(Ng[n]=r,n=0;n<r.length;n++)Vg.add(r[n])}var Nw=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bg={},_g={};function Bw(n){return bn.call(_g,n)?!0:bn.call(Bg,n)?!1:Nw.test(n)?_g[n]=!0:(Bg[n]=!0,!1)}function vl(n,r,s){if(Bw(r))if(s===null)n.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var c=r.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+s)}}function wl(n,r,s){if(s===null)n.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+s)}}function fa(n,r,s,c){if(c===null)n.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(r,s,""+c)}}var pd,Hg;function er(n){if(pd===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);pd=r&&r[1]||"",Hg=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pd+n+Hg}var hd=!1;function md(n,r){if(!n||hd)return"";hd=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(r){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(K){var q=K}Reflect.construct(n,[],ee)}else{try{ee.call()}catch(K){q=K}n.call(ee.prototype)}}else{try{throw Error()}catch(K){q=K}(ee=n())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(K){if(K&&q&&typeof K.stack=="string")return[K.stack,q.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var b=c.DetermineComponentFrameRoot(),w=b[0],T=b[1];if(w&&T){var P=w.split(`
`),F=T.split(`
`);for(h=c=0;c<P.length&&!P[c].includes("DetermineComponentFrameRoot");)c++;for(;h<F.length&&!F[h].includes("DetermineComponentFrameRoot");)h++;if(c===P.length||h===F.length)for(c=P.length-1,h=F.length-1;1<=c&&0<=h&&P[c]!==F[h];)h--;for(;1<=c&&0<=h;c--,h--)if(P[c]!==F[h]){if(c!==1||h!==1)do if(c--,h--,0>h||P[c]!==F[h]){var W=`
`+P[c].replace(" at new "," at ");return n.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",n.displayName)),W}while(1<=c&&0<=h);break}}}finally{hd=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?er(s):""}function _w(n){switch(n.tag){case 26:case 27:case 5:return er(n.type);case 16:return er("Lazy");case 13:return er("Suspense");case 19:return er("SuspenseList");case 0:case 15:return md(n.type,!1);case 11:return md(n.type.render,!1);case 1:return md(n.type,!0);case 31:return er("Activity");default:return""}}function $g(n){try{var r="";do r+=_w(n),n=n.return;while(n);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function xn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ug(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Hw(n){var r=Ug(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,b=s.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(w){c=""+w,b.call(this,w)}}),Object.defineProperty(n,r,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Sl(n){n._valueTracker||(n._valueTracker=Hw(n))}function Gg(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var s=r.getValue(),c="";return n&&(c=Ug(n)?n.checked?"true":"false":n.value),n=c,n!==s?(r.setValue(n),!0):!1}function kl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var $w=/[\n"\\]/g;function yn(n){return n.replace($w,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function gd(n,r,s,c,h,b,w,T){n.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?n.type=w:n.removeAttribute("type"),r!=null?w==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+xn(r)):n.value!==""+xn(r)&&(n.value=""+xn(r)):w!=="submit"&&w!=="reset"||n.removeAttribute("value"),r!=null?bd(n,w,xn(r)):s!=null?bd(n,w,xn(s)):c!=null&&n.removeAttribute("value"),h==null&&b!=null&&(n.defaultChecked=!!b),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.name=""+xn(T):n.removeAttribute("name")}function Ig(n,r,s,c,h,b,w,T){if(b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(n.type=b),r!=null||s!=null){if(!(b!=="submit"&&b!=="reset"||r!=null))return;s=s!=null?""+xn(s):"",r=r!=null?""+xn(r):s,T||r===n.value||(n.value=r),n.defaultValue=r}c=c??h,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=T?n.checked:!!c,n.defaultChecked=!!c,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(n.name=w)}function bd(n,r,s){r==="number"&&kl(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function tr(n,r,s,c){if(n=n.options,r){r={};for(var h=0;h<s.length;h++)r["$"+s[h]]=!0;for(s=0;s<n.length;s++)h=r.hasOwnProperty("$"+n[s].value),n[s].selected!==h&&(n[s].selected=h),h&&c&&(n[s].defaultSelected=!0)}else{for(s=""+xn(s),r=null,h=0;h<n.length;h++){if(n[h].value===s){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function Fg(n,r,s){if(r!=null&&(r=""+xn(r),r!==n.value&&(n.value=r),s==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=s!=null?""+xn(s):""}function qg(n,r,s,c){if(r==null){if(c!=null){if(s!=null)throw Error(i(92));if(oe(c)){if(1<c.length)throw Error(i(93));c=c[0]}s=c}s==null&&(s=""),r=s}s=xn(r),n.defaultValue=s,c=n.textContent,c===s&&c!==""&&c!==null&&(n.value=c)}function nr(n,r){if(r){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=r;return}}n.textContent=r}var Uw=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kg(n,r,s){var c=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":c?n.setProperty(r,s):typeof s!="number"||s===0||Uw.has(r)?r==="float"?n.cssFloat=s:n[r]=(""+s).trim():n[r]=s+"px"}function Yg(n,r,s){if(r!=null&&typeof r!="object")throw Error(i(62));if(n=n.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||r!=null&&r.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var h in r)c=r[h],r.hasOwnProperty(h)&&s[h]!==c&&Kg(n,h,c)}else for(var b in r)r.hasOwnProperty(b)&&Kg(n,b,r[b])}function xd(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gw=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Iw=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tl(n){return Iw.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var yd=null;function vd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ar=null,ir=null;function Xg(n){var r=Qi(n);if(r&&(n=r.stateNode)){var s=n[Ut]||null;e:switch(n=r.stateNode,r.type){case"input":if(gd(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+yn(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var c=s[r];if(c!==n&&c.form===n.form){var h=c[Ut]||null;if(!h)throw Error(i(90));gd(c,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<s.length;r++)c=s[r],c.form===n.form&&Gg(c)}break e;case"textarea":Fg(n,s.value,s.defaultValue);break e;case"select":r=s.value,r!=null&&tr(n,!!s.multiple,r,!1)}}}var wd=!1;function Wg(n,r,s){if(wd)return n(r,s);wd=!0;try{var c=n(r);return c}finally{if(wd=!1,(ar!==null||ir!==null)&&(cc(),ar&&(r=ar,n=ir,ir=ar=null,Xg(r),n)))for(r=0;r<n.length;r++)Xg(n[r])}}function ks(n,r){var s=n.stateNode;if(s===null)return null;var c=s[Ut]||null;if(c===null)return null;s=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(i(231,r,typeof s));return s}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sd=!1;if(pa)try{var Ts={};Object.defineProperty(Ts,"passive",{get:function(){Sd=!0}}),window.addEventListener("test",Ts,Ts),window.removeEventListener("test",Ts,Ts)}catch{Sd=!1}var Na=null,kd=null,jl=null;function Qg(){if(jl)return jl;var n,r=kd,s=r.length,c,h="value"in Na?Na.value:Na.textContent,b=h.length;for(n=0;n<s&&r[n]===h[n];n++);var w=s-n;for(c=1;c<=w&&r[s-c]===h[b-c];c++);return jl=h.slice(n,1<c?1-c:void 0)}function Al(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Cl(){return!0}function Zg(){return!1}function Gt(n){function r(s,c,h,b,w){this._reactName=s,this._targetInst=h,this.type=c,this.nativeEvent=b,this.target=w,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(s=n[T],this[T]=s?s(b):b[T]);return this.isDefaultPrevented=(b.defaultPrevented!=null?b.defaultPrevented:b.returnValue===!1)?Cl:Zg,this.isPropagationStopped=Zg,this}return g(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Cl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Cl)},persist:function(){},isPersistent:Cl}),r}var bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},El=Gt(bi),js=g({},bi,{view:0,detail:0}),Fw=Gt(js),Td,jd,As,Ml=g({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==As&&(As&&n.type==="mousemove"?(Td=n.screenX-As.screenX,jd=n.screenY-As.screenY):jd=Td=0,As=n),Td)},movementY:function(n){return"movementY"in n?n.movementY:jd}}),Jg=Gt(Ml),qw=g({},Ml,{dataTransfer:0}),Kw=Gt(qw),Yw=g({},js,{relatedTarget:0}),Ad=Gt(Yw),Xw=g({},bi,{animationName:0,elapsedTime:0,pseudoElement:0}),Ww=Gt(Xw),Qw=g({},bi,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Zw=Gt(Qw),Jw=g({},bi,{data:0}),e0=Gt(Jw),eS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aS(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=nS[n])?!!r[n]:!1}function Cd(){return aS}var iS=g({},js,{key:function(n){if(n.key){var r=eS[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Al(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?tS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cd,charCode:function(n){return n.type==="keypress"?Al(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Al(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),rS=Gt(iS),sS=g({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),t0=Gt(sS),oS=g({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cd}),lS=Gt(oS),cS=g({},bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),uS=Gt(cS),dS=g({},Ml,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),fS=Gt(dS),pS=g({},bi,{newState:0,oldState:0}),hS=Gt(pS),mS=[9,13,27,32],Ed=pa&&"CompositionEvent"in window,Cs=null;pa&&"documentMode"in document&&(Cs=document.documentMode);var gS=pa&&"TextEvent"in window&&!Cs,n0=pa&&(!Ed||Cs&&8<Cs&&11>=Cs),a0=" ",i0=!1;function r0(n,r){switch(n){case"keyup":return mS.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function s0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var rr=!1;function bS(n,r){switch(n){case"compositionend":return s0(r);case"keypress":return r.which!==32?null:(i0=!0,a0);case"textInput":return n=r.data,n===a0&&i0?null:n;default:return null}}function xS(n,r){if(rr)return n==="compositionend"||!Ed&&r0(n,r)?(n=Qg(),jl=kd=Na=null,rr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return n0&&r.locale!=="ko"?null:r.data;default:return null}}var yS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function o0(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!yS[n.type]:r==="textarea"}function l0(n,r,s,c){ar?ir?ir.push(c):ir=[c]:ar=c,r=mc(r,"onChange"),0<r.length&&(s=new El("onChange","change",null,s,c),n.push({event:s,listeners:r}))}var Es=null,Ms=null;function vS(n){U2(n,0)}function zl(n){var r=Ss(n);if(Gg(r))return n}function c0(n,r){if(n==="change")return r}var u0=!1;if(pa){var Md;if(pa){var zd="oninput"in document;if(!zd){var d0=document.createElement("div");d0.setAttribute("oninput","return;"),zd=typeof d0.oninput=="function"}Md=zd}else Md=!1;u0=Md&&(!document.documentMode||9<document.documentMode)}function f0(){Es&&(Es.detachEvent("onpropertychange",p0),Ms=Es=null)}function p0(n){if(n.propertyName==="value"&&zl(Ms)){var r=[];l0(r,Ms,n,vd(n)),Wg(vS,r)}}function wS(n,r,s){n==="focusin"?(f0(),Es=r,Ms=s,Es.attachEvent("onpropertychange",p0)):n==="focusout"&&f0()}function SS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return zl(Ms)}function kS(n,r){if(n==="click")return zl(r)}function TS(n,r){if(n==="input"||n==="change")return zl(r)}function jS(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var an=typeof Object.is=="function"?Object.is:jS;function zs(n,r){if(an(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var s=Object.keys(n),c=Object.keys(r);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var h=s[c];if(!bn.call(r,h)||!an(n[h],r[h]))return!1}return!0}function h0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function m0(n,r){var s=h0(n);n=0;for(var c;s;){if(s.nodeType===3){if(c=n+s.textContent.length,n<=r&&c>=r)return{node:s,offset:r-n};n=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=h0(s)}}function g0(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?g0(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function b0(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=kl(n.document);r instanceof n.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)n=r.contentWindow;else break;r=kl(n.document)}return r}function Rd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var AS=pa&&"documentMode"in document&&11>=document.documentMode,sr=null,Ld=null,Rs=null,Od=!1;function x0(n,r,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Od||sr==null||sr!==kl(c)||(c=sr,"selectionStart"in c&&Rd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Rs&&zs(Rs,c)||(Rs=c,c=mc(Ld,"onSelect"),0<c.length&&(r=new El("onSelect","select",null,r,s),n.push({event:r,listeners:c}),r.target=sr)))}function xi(n,r){var s={};return s[n.toLowerCase()]=r.toLowerCase(),s["Webkit"+n]="webkit"+r,s["Moz"+n]="moz"+r,s}var or={animationend:xi("Animation","AnimationEnd"),animationiteration:xi("Animation","AnimationIteration"),animationstart:xi("Animation","AnimationStart"),transitionrun:xi("Transition","TransitionRun"),transitionstart:xi("Transition","TransitionStart"),transitioncancel:xi("Transition","TransitionCancel"),transitionend:xi("Transition","TransitionEnd")},Dd={},y0={};pa&&(y0=document.createElement("div").style,"AnimationEvent"in window||(delete or.animationend.animation,delete or.animationiteration.animation,delete or.animationstart.animation),"TransitionEvent"in window||delete or.transitionend.transition);function yi(n){if(Dd[n])return Dd[n];if(!or[n])return n;var r=or[n],s;for(s in r)if(r.hasOwnProperty(s)&&s in y0)return Dd[n]=r[s];return n}var v0=yi("animationend"),w0=yi("animationiteration"),S0=yi("animationstart"),CS=yi("transitionrun"),ES=yi("transitionstart"),MS=yi("transitioncancel"),k0=yi("transitionend"),T0=new Map,Pd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pd.push("scrollEnd");function zn(n,r){T0.set(n,r),gi(r,[n])}var j0=new WeakMap;function vn(n,r){if(typeof n=="object"&&n!==null){var s=j0.get(n);return s!==void 0?s:(r={value:n,source:r,stack:$g(r)},j0.set(n,r),r)}return{value:n,source:r,stack:$g(r)}}var wn=[],lr=0,Vd=0;function Rl(){for(var n=lr,r=Vd=lr=0;r<n;){var s=wn[r];wn[r++]=null;var c=wn[r];wn[r++]=null;var h=wn[r];wn[r++]=null;var b=wn[r];if(wn[r++]=null,c!==null&&h!==null){var w=c.pending;w===null?h.next=h:(h.next=w.next,w.next=h),c.pending=h}b!==0&&A0(s,h,b)}}function Ll(n,r,s,c){wn[lr++]=n,wn[lr++]=r,wn[lr++]=s,wn[lr++]=c,Vd|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function Nd(n,r,s,c){return Ll(n,r,s,c),Ol(n)}function cr(n,r){return Ll(n,null,null,r),Ol(n)}function A0(n,r,s){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s);for(var h=!1,b=n.return;b!==null;)b.childLanes|=s,c=b.alternate,c!==null&&(c.childLanes|=s),b.tag===22&&(n=b.stateNode,n===null||n._visibility&1||(h=!0)),n=b,b=b.return;return n.tag===3?(b=n.stateNode,h&&r!==null&&(h=31-nn(s),n=b.hiddenUpdates,c=n[h],c===null?n[h]=[r]:c.push(r),r.lane=s|536870912),b):null}function Ol(n){if(50<no)throw no=0,If=null,Error(i(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var ur={};function zS(n,r,s,c){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rn(n,r,s,c){return new zS(n,r,s,c)}function Bd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ha(n,r){var s=n.alternate;return s===null?(s=rn(n.tag,r,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=r,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,r=n.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function C0(n,r){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,r=s.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function Dl(n,r,s,c,h,b){var w=0;if(c=n,typeof n=="function")Bd(n)&&(w=1);else if(typeof n=="string")w=L6(n,s,se.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case X:return n=rn(31,s,r,h),n.elementType=X,n.lanes=b,n;case S:return vi(s.children,h,b,r);case k:w=8,h|=24;break;case C:return n=rn(12,s,r,h|2),n.elementType=C,n.lanes=b,n;case E:return n=rn(13,s,r,h),n.elementType=E,n.lanes=b,n;case V:return n=rn(19,s,r,h),n.elementType=V,n.lanes=b,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case M:case A:w=10;break e;case z:w=9;break e;case $:w=11;break e;case N:w=14;break e;case O:w=16,c=null;break e}w=29,s=Error(i(130,n===null?"null":typeof n,"")),c=null}return r=rn(w,s,r,h),r.elementType=n,r.type=c,r.lanes=b,r}function vi(n,r,s,c){return n=rn(7,n,c,r),n.lanes=s,n}function _d(n,r,s){return n=rn(6,n,null,r),n.lanes=s,n}function Hd(n,r,s){return r=rn(4,n.children!==null?n.children:[],n.key,r),r.lanes=s,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var dr=[],fr=0,Pl=null,Vl=0,Sn=[],kn=0,wi=null,ma=1,ga="";function Si(n,r){dr[fr++]=Vl,dr[fr++]=Pl,Pl=n,Vl=r}function E0(n,r,s){Sn[kn++]=ma,Sn[kn++]=ga,Sn[kn++]=wi,wi=n;var c=ma;n=ga;var h=32-nn(c)-1;c&=~(1<<h),s+=1;var b=32-nn(r)+h;if(30<b){var w=h-h%5;b=(c&(1<<w)-1).toString(32),c>>=w,h-=w,ma=1<<32-nn(r)+h|s<<h|c,ga=b+n}else ma=1<<b|s<<h|c,ga=n}function $d(n){n.return!==null&&(Si(n,1),E0(n,1,0))}function Ud(n){for(;n===Pl;)Pl=dr[--fr],dr[fr]=null,Vl=dr[--fr],dr[fr]=null;for(;n===wi;)wi=Sn[--kn],Sn[kn]=null,ga=Sn[--kn],Sn[kn]=null,ma=Sn[--kn],Sn[kn]=null}var Ht=null,nt=null,ze=!1,ki=null,In=!1,Gd=Error(i(519));function Ti(n){var r=Error(i(418,""));throw Ds(vn(r,n)),Gd}function M0(n){var r=n.stateNode,s=n.type,c=n.memoizedProps;switch(r[Ot]=n,r[Ut]=c,s){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(s=0;s<io.length;s++)je(io[s],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":je("invalid",r),Ig(r,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Sl(r);break;case"select":je("invalid",r);break;case"textarea":je("invalid",r),qg(r,c.value,c.defaultValue,c.children),Sl(r)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||c.suppressHydrationWarning===!0||q2(r.textContent,s)?(c.popover!=null&&(je("beforetoggle",r),je("toggle",r)),c.onScroll!=null&&je("scroll",r),c.onScrollEnd!=null&&je("scrollend",r),c.onClick!=null&&(r.onclick=gc),r=!0):r=!1,r||Ti(n)}function z0(n){for(Ht=n.return;Ht;)switch(Ht.tag){case 5:case 13:In=!1;return;case 27:case 3:In=!0;return;default:Ht=Ht.return}}function Ls(n){if(n!==Ht)return!1;if(!ze)return z0(n),ze=!0,!1;var r=n.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||sp(n.type,n.memoizedProps)),s=!s),s&&nt&&Ti(n),z0(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(r===0){nt=Ln(n.nextSibling);break e}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;n=n.nextSibling}nt=null}}else r===27?(r=nt,Ja(n.type)?(n=up,up=null,nt=n):nt=r):nt=Ht?Ln(n.stateNode.nextSibling):null;return!0}function Os(){nt=Ht=null,ze=!1}function R0(){var n=ki;return n!==null&&(qt===null?qt=n:qt.push.apply(qt,n),ki=null),n}function Ds(n){ki===null?ki=[n]:ki.push(n)}var Id=Y(null),ji=null,ba=null;function Ba(n,r,s){ae(Id,r._currentValue),r._currentValue=s}function xa(n){n._currentValue=Id.current,ne(Id)}function Fd(n,r,s){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===s)break;n=n.return}}function qd(n,r,s,c){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var b=h.dependencies;if(b!==null){var w=h.child;b=b.firstContext;e:for(;b!==null;){var T=b;b=h;for(var P=0;P<r.length;P++)if(T.context===r[P]){b.lanes|=s,T=b.alternate,T!==null&&(T.lanes|=s),Fd(b.return,s,n),c||(w=null);break e}b=T.next}}else if(h.tag===18){if(w=h.return,w===null)throw Error(i(341));w.lanes|=s,b=w.alternate,b!==null&&(b.lanes|=s),Fd(w,s,n),w=null}else w=h.child;if(w!==null)w.return=h;else for(w=h;w!==null;){if(w===n){w=null;break}if(h=w.sibling,h!==null){h.return=w.return,w=h;break}w=w.return}h=w}}function Ps(n,r,s,c){n=null;for(var h=r,b=!1;h!==null;){if(!b){if((h.flags&524288)!==0)b=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var w=h.alternate;if(w===null)throw Error(i(387));if(w=w.memoizedProps,w!==null){var T=h.type;an(h.pendingProps.value,w.value)||(n!==null?n.push(T):n=[T])}}else if(h===bt.current){if(w=h.alternate,w===null)throw Error(i(387));w.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push(uo):n=[uo])}h=h.return}n!==null&&qd(r,n,s,c),r.flags|=262144}function Nl(n){for(n=n.firstContext;n!==null;){if(!an(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ai(n){ji=n,ba=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Dt(n){return L0(ji,n)}function Bl(n,r){return ji===null&&Ai(n),L0(n,r)}function L0(n,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},ba===null){if(n===null)throw Error(i(308));ba=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else ba=ba.next=r;return s}var RS=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(s,c){n.push(c)}};this.abort=function(){r.aborted=!0,n.forEach(function(s){return s()})}},LS=e.unstable_scheduleCallback,OS=e.unstable_NormalPriority,pt={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Kd(){return{controller:new RS,data:new Map,refCount:0}}function Vs(n){n.refCount--,n.refCount===0&&LS(OS,function(){n.controller.abort()})}var Ns=null,Yd=0,pr=0,hr=null;function DS(n,r){if(Ns===null){var s=Ns=[];Yd=0,pr=Qf(),hr={status:"pending",value:void 0,then:function(c){s.push(c)}}}return Yd++,r.then(O0,O0),r}function O0(){if(--Yd===0&&Ns!==null){hr!==null&&(hr.status="fulfilled");var n=Ns;Ns=null,pr=0,hr=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function PS(n,r){var s=[],c={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return n.then(function(){c.status="fulfilled",c.value=r;for(var h=0;h<s.length;h++)(0,s[h])(r)},function(h){for(c.status="rejected",c.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),c}var D0=D.S;D.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&DS(n,r),D0!==null&&D0(n,r)};var Ci=Y(null);function Xd(){var n=Ci.current;return n!==null?n:Ke.pooledCache}function _l(n,r){r===null?ae(Ci,Ci.current):ae(Ci,r.pool)}function P0(){var n=Xd();return n===null?null:{parent:pt._currentValue,pool:n}}var Bs=Error(i(460)),V0=Error(i(474)),Hl=Error(i(542)),Wd={then:function(){}};function N0(n){return n=n.status,n==="fulfilled"||n==="rejected"}function $l(){}function B0(n,r,s){switch(s=n[s],s===void 0?n.push(r):s!==r&&(r.then($l,$l),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,H0(n),n;default:if(typeof r.status=="string")r.then($l,$l);else{if(n=Ke,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=r,n.status="pending",n.then(function(c){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=c}},function(c){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=c}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,H0(n),n}throw _s=r,Bs}}var _s=null;function _0(){if(_s===null)throw Error(i(459));var n=_s;return _s=null,n}function H0(n){if(n===Bs||n===Hl)throw Error(i(483))}var _a=!1;function Qd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zd(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Ha(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function $a(n,r,s){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ve&2)!==0){var h=c.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),c.pending=r,r=Ol(n),A0(n,null,s),r}return Ll(n,c,r,s),Ol(n)}function Hs(n,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var c=r.lanes;c&=n.pendingLanes,s|=c,r.lanes=s,Og(n,s)}}function Jd(n,r){var s=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var h=null,b=null;if(s=s.firstBaseUpdate,s!==null){do{var w={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};b===null?h=b=w:b=b.next=w,s=s.next}while(s!==null);b===null?h=b=r:b=b.next=r}else h=b=r;s={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:b,shared:c.shared,callbacks:c.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=r:n.next=r,s.lastBaseUpdate=r}var ef=!1;function $s(){if(ef){var n=hr;if(n!==null)throw n}}function Us(n,r,s,c){ef=!1;var h=n.updateQueue;_a=!1;var b=h.firstBaseUpdate,w=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var P=T,F=P.next;P.next=null,w===null?b=F:w.next=F,w=P;var W=n.alternate;W!==null&&(W=W.updateQueue,T=W.lastBaseUpdate,T!==w&&(T===null?W.firstBaseUpdate=F:T.next=F,W.lastBaseUpdate=P))}if(b!==null){var ee=h.baseState;w=0,W=F=P=null,T=b;do{var q=T.lane&-536870913,K=q!==T.lane;if(K?(Ae&q)===q:(c&q)===q){q!==0&&q===pr&&(ef=!0),W!==null&&(W=W.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var he=n,fe=T;q=r;var $e=s;switch(fe.tag){case 1:if(he=fe.payload,typeof he=="function"){ee=he.call($e,ee,q);break e}ee=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=fe.payload,q=typeof he=="function"?he.call($e,ee,q):he,q==null)break e;ee=g({},ee,q);break e;case 2:_a=!0}}q=T.callback,q!==null&&(n.flags|=64,K&&(n.flags|=8192),K=h.callbacks,K===null?h.callbacks=[q]:K.push(q))}else K={lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},W===null?(F=W=K,P=ee):W=W.next=K,w|=q;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;K=T,T=K.next,K.next=null,h.lastBaseUpdate=K,h.shared.pending=null}}while(!0);W===null&&(P=ee),h.baseState=P,h.firstBaseUpdate=F,h.lastBaseUpdate=W,b===null&&(h.shared.lanes=0),Xa|=w,n.lanes=w,n.memoizedState=ee}}function $0(n,r){if(typeof n!="function")throw Error(i(191,n));n.call(r)}function U0(n,r){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)$0(s[n],r)}var mr=Y(null),Ul=Y(0);function G0(n,r){n=ja,ae(Ul,n),ae(mr,r),ja=n|r.baseLanes}function tf(){ae(Ul,ja),ae(mr,mr.current)}function nf(){ja=Ul.current,ne(mr),ne(Ul)}var Ua=0,Se=null,_e=null,lt=null,Gl=!1,gr=!1,Ei=!1,Il=0,Gs=0,br=null,VS=0;function rt(){throw Error(i(321))}function af(n,r){if(r===null)return!1;for(var s=0;s<r.length&&s<n.length;s++)if(!an(n[s],r[s]))return!1;return!0}function rf(n,r,s,c,h,b){return Ua=b,Se=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,D.H=n===null||n.memoizedState===null?A1:C1,Ei=!1,b=s(c,h),Ei=!1,gr&&(b=F0(r,s,c,h)),I0(n),b}function I0(n){D.H=Wl;var r=_e!==null&&_e.next!==null;if(Ua=0,lt=_e=Se=null,Gl=!1,Gs=0,br=null,r)throw Error(i(300));n===null||yt||(n=n.dependencies,n!==null&&Nl(n)&&(yt=!0))}function F0(n,r,s,c){Se=n;var h=0;do{if(gr&&(br=null),Gs=0,gr=!1,25<=h)throw Error(i(301));if(h+=1,lt=_e=null,n.updateQueue!=null){var b=n.updateQueue;b.lastEffect=null,b.events=null,b.stores=null,b.memoCache!=null&&(b.memoCache.index=0)}D.H=GS,b=r(s,c)}while(gr);return b}function NS(){var n=D.H,r=n.useState()[0];return r=typeof r.then=="function"?Is(r):r,n=n.useState()[0],(_e!==null?_e.memoizedState:null)!==n&&(Se.flags|=1024),r}function sf(){var n=Il!==0;return Il=0,n}function of(n,r,s){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~s}function lf(n){if(Gl){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Gl=!1}Ua=0,lt=_e=Se=null,gr=!1,Gs=Il=0,br=null}function It(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?Se.memoizedState=lt=n:lt=lt.next=n,lt}function ct(){if(_e===null){var n=Se.alternate;n=n!==null?n.memoizedState:null}else n=_e.next;var r=lt===null?Se.memoizedState:lt.next;if(r!==null)lt=r,_e=n;else{if(n===null)throw Se.alternate===null?Error(i(467)):Error(i(310));_e=n,n={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},lt===null?Se.memoizedState=lt=n:lt=lt.next=n}return lt}function cf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Is(n){var r=Gs;return Gs+=1,br===null&&(br=[]),n=B0(br,n,r),r=Se,(lt===null?r.memoizedState:lt.next)===null&&(r=r.alternate,D.H=r===null||r.memoizedState===null?A1:C1),n}function Fl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Is(n);if(n.$$typeof===A)return Dt(n)}throw Error(i(438,String(n)))}function uf(n){var r=null,s=Se.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var c=Se.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(r={data:c.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=cf(),Se.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(n),c=0;c<n;c++)s[c]=J;return r.index++,s}function ya(n,r){return typeof r=="function"?r(n):r}function ql(n){var r=ct();return df(r,_e,n)}function df(n,r,s){var c=n.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=s;var h=n.baseQueue,b=c.pending;if(b!==null){if(h!==null){var w=h.next;h.next=b.next,b.next=w}r.baseQueue=h=b,c.pending=null}if(b=n.baseState,h===null)n.memoizedState=b;else{r=h.next;var T=w=null,P=null,F=r,W=!1;do{var ee=F.lane&-536870913;if(ee!==F.lane?(Ae&ee)===ee:(Ua&ee)===ee){var q=F.revertLane;if(q===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),ee===pr&&(W=!0);else if((Ua&q)===q){F=F.next,q===pr&&(W=!0);continue}else ee={lane:0,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},P===null?(T=P=ee,w=b):P=P.next=ee,Se.lanes|=q,Xa|=q;ee=F.action,Ei&&s(b,ee),b=F.hasEagerState?F.eagerState:s(b,ee)}else q={lane:ee,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},P===null?(T=P=q,w=b):P=P.next=q,Se.lanes|=ee,Xa|=ee;F=F.next}while(F!==null&&F!==r);if(P===null?w=b:P.next=T,!an(b,n.memoizedState)&&(yt=!0,W&&(s=hr,s!==null)))throw s;n.memoizedState=b,n.baseState=w,n.baseQueue=P,c.lastRenderedState=b}return h===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function ff(n){var r=ct(),s=r.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=n;var c=s.dispatch,h=s.pending,b=r.memoizedState;if(h!==null){s.pending=null;var w=h=h.next;do b=n(b,w.action),w=w.next;while(w!==h);an(b,r.memoizedState)||(yt=!0),r.memoizedState=b,r.baseQueue===null&&(r.baseState=b),s.lastRenderedState=b}return[b,c]}function q0(n,r,s){var c=Se,h=ct(),b=ze;if(b){if(s===void 0)throw Error(i(407));s=s()}else s=r();var w=!an((_e||h).memoizedState,s);w&&(h.memoizedState=s,yt=!0),h=h.queue;var T=X0.bind(null,c,h,n);if(Fs(2048,8,T,[n]),h.getSnapshot!==r||w||lt!==null&&lt.memoizedState.tag&1){if(c.flags|=2048,xr(9,Kl(),Y0.bind(null,c,h,s,r),null),Ke===null)throw Error(i(349));b||(Ua&124)!==0||K0(c,r,s)}return s}function K0(n,r,s){n.flags|=16384,n={getSnapshot:r,value:s},r=Se.updateQueue,r===null?(r=cf(),Se.updateQueue=r,r.stores=[n]):(s=r.stores,s===null?r.stores=[n]:s.push(n))}function Y0(n,r,s,c){r.value=s,r.getSnapshot=c,W0(r)&&Q0(n)}function X0(n,r,s){return s(function(){W0(r)&&Q0(n)})}function W0(n){var r=n.getSnapshot;n=n.value;try{var s=r();return!an(n,s)}catch{return!0}}function Q0(n){var r=cr(n,2);r!==null&&un(r,n,2)}function pf(n){var r=It();if(typeof n=="function"){var s=n;if(n=s(),Ei){Pa(!0);try{s()}finally{Pa(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:n},r}function Z0(n,r,s,c){return n.baseState=s,df(n,_e,typeof c=="function"?c:ya)}function BS(n,r,s,c,h){if(Xl(n))throw Error(i(485));if(n=r.action,n!==null){var b={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){b.listeners.push(w)}};D.T!==null?s(!0):b.isTransition=!1,c(b),s=r.pending,s===null?(b.next=r.pending=b,J0(r,b)):(b.next=s.next,r.pending=s.next=b)}}function J0(n,r){var s=r.action,c=r.payload,h=n.state;if(r.isTransition){var b=D.T,w={};D.T=w;try{var T=s(h,c),P=D.S;P!==null&&P(w,T),e1(n,r,T)}catch(F){hf(n,r,F)}finally{D.T=b}}else try{b=s(h,c),e1(n,r,b)}catch(F){hf(n,r,F)}}function e1(n,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){t1(n,r,c)},function(c){return hf(n,r,c)}):t1(n,r,s)}function t1(n,r,s){r.status="fulfilled",r.value=s,n1(r),n.state=s,r=n.pending,r!==null&&(s=r.next,s===r?n.pending=null:(s=s.next,r.next=s,J0(n,s)))}function hf(n,r,s){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do r.status="rejected",r.reason=s,n1(r),r=r.next;while(r!==c)}n.action=null}function n1(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function a1(n,r){return r}function i1(n,r){if(ze){var s=Ke.formState;if(s!==null){e:{var c=Se;if(ze){if(nt){t:{for(var h=nt,b=In;h.nodeType!==8;){if(!b){h=null;break t}if(h=Ln(h.nextSibling),h===null){h=null;break t}}b=h.data,h=b==="F!"||b==="F"?h:null}if(h){nt=Ln(h.nextSibling),c=h.data==="F!";break e}}Ti(c)}c=!1}c&&(r=s[0])}}return s=It(),s.memoizedState=s.baseState=r,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a1,lastRenderedState:r},s.queue=c,s=k1.bind(null,Se,c),c.dispatch=s,c=pf(!1),b=yf.bind(null,Se,!1,c.queue),c=It(),h={state:r,dispatch:null,action:n,pending:null},c.queue=h,s=BS.bind(null,Se,h,b,s),h.dispatch=s,c.memoizedState=n,[r,s,!1]}function r1(n){var r=ct();return s1(r,_e,n)}function s1(n,r,s){if(r=df(n,r,a1)[0],n=ql(ya)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var c=Is(r)}catch(w){throw w===Bs?Hl:w}else c=r;r=ct();var h=r.queue,b=h.dispatch;return s!==r.memoizedState&&(Se.flags|=2048,xr(9,Kl(),_S.bind(null,h,s),null)),[c,b,n]}function _S(n,r){n.action=r}function o1(n){var r=ct(),s=_e;if(s!==null)return s1(r,s,n);ct(),r=r.memoizedState,s=ct();var c=s.queue.dispatch;return s.memoizedState=n,[r,c,!1]}function xr(n,r,s,c){return n={tag:n,create:s,deps:c,inst:r,next:null},r=Se.updateQueue,r===null&&(r=cf(),Se.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=n.next=n:(c=s.next,s.next=n,n.next=c,r.lastEffect=n),n}function Kl(){return{destroy:void 0,resource:void 0}}function l1(){return ct().memoizedState}function Yl(n,r,s,c){var h=It();c=c===void 0?null:c,Se.flags|=n,h.memoizedState=xr(1|r,Kl(),s,c)}function Fs(n,r,s,c){var h=ct();c=c===void 0?null:c;var b=h.memoizedState.inst;_e!==null&&c!==null&&af(c,_e.memoizedState.deps)?h.memoizedState=xr(r,b,s,c):(Se.flags|=n,h.memoizedState=xr(1|r,b,s,c))}function c1(n,r){Yl(8390656,8,n,r)}function u1(n,r){Fs(2048,8,n,r)}function d1(n,r){return Fs(4,2,n,r)}function f1(n,r){return Fs(4,4,n,r)}function p1(n,r){if(typeof r=="function"){n=n();var s=r(n);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function h1(n,r,s){s=s!=null?s.concat([n]):null,Fs(4,4,p1.bind(null,r,n),s)}function mf(){}function m1(n,r){var s=ct();r=r===void 0?null:r;var c=s.memoizedState;return r!==null&&af(r,c[1])?c[0]:(s.memoizedState=[n,r],n)}function g1(n,r){var s=ct();r=r===void 0?null:r;var c=s.memoizedState;if(r!==null&&af(r,c[1]))return c[0];if(c=n(),Ei){Pa(!0);try{n()}finally{Pa(!1)}}return s.memoizedState=[c,r],c}function gf(n,r,s){return s===void 0||(Ua&1073741824)!==0?n.memoizedState=r:(n.memoizedState=s,n=y2(),Se.lanes|=n,Xa|=n,s)}function b1(n,r,s,c){return an(s,r)?s:mr.current!==null?(n=gf(n,s,c),an(n,r)||(yt=!0),n):(Ua&42)===0?(yt=!0,n.memoizedState=s):(n=y2(),Se.lanes|=n,Xa|=n,r)}function x1(n,r,s,c,h){var b=B.p;B.p=b!==0&&8>b?b:8;var w=D.T,T={};D.T=T,yf(n,!1,r,s);try{var P=h(),F=D.S;if(F!==null&&F(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var W=PS(P,c);qs(n,r,W,cn(n))}else qs(n,r,c,cn(n))}catch(ee){qs(n,r,{then:function(){},status:"rejected",reason:ee},cn())}finally{B.p=b,D.T=w}}function HS(){}function bf(n,r,s,c){if(n.tag!==5)throw Error(i(476));var h=y1(n).queue;x1(n,h,r,G,s===null?HS:function(){return v1(n),s(c)})}function y1(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:G},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:s},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function v1(n){var r=y1(n).next.queue;qs(n,r,{},cn())}function xf(){return Dt(uo)}function w1(){return ct().memoizedState}function S1(){return ct().memoizedState}function $S(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var s=cn();n=Ha(s);var c=$a(r,n,s);c!==null&&(un(c,r,s),Hs(c,r,s)),r={cache:Kd()},n.payload=r;return}r=r.return}}function US(n,r,s){var c=cn();s={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Xl(n)?T1(r,s):(s=Nd(n,r,s,c),s!==null&&(un(s,n,c),j1(s,r,c)))}function k1(n,r,s){var c=cn();qs(n,r,s,c)}function qs(n,r,s,c){var h={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Xl(n))T1(r,h);else{var b=n.alternate;if(n.lanes===0&&(b===null||b.lanes===0)&&(b=r.lastRenderedReducer,b!==null))try{var w=r.lastRenderedState,T=b(w,s);if(h.hasEagerState=!0,h.eagerState=T,an(T,w))return Ll(n,r,h,0),Ke===null&&Rl(),!1}catch{}finally{}if(s=Nd(n,r,h,c),s!==null)return un(s,n,c),j1(s,r,c),!0}return!1}function yf(n,r,s,c){if(c={lane:2,revertLane:Qf(),action:c,hasEagerState:!1,eagerState:null,next:null},Xl(n)){if(r)throw Error(i(479))}else r=Nd(n,s,c,2),r!==null&&un(r,n,2)}function Xl(n){var r=n.alternate;return n===Se||r!==null&&r===Se}function T1(n,r){gr=Gl=!0;var s=n.pending;s===null?r.next=r:(r.next=s.next,s.next=r),n.pending=r}function j1(n,r,s){if((s&4194048)!==0){var c=r.lanes;c&=n.pendingLanes,s|=c,r.lanes=s,Og(n,s)}}var Wl={readContext:Dt,use:Fl,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useLayoutEffect:rt,useInsertionEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useSyncExternalStore:rt,useId:rt,useHostTransitionStatus:rt,useFormState:rt,useActionState:rt,useOptimistic:rt,useMemoCache:rt,useCacheRefresh:rt},A1={readContext:Dt,use:Fl,useCallback:function(n,r){return It().memoizedState=[n,r===void 0?null:r],n},useContext:Dt,useEffect:c1,useImperativeHandle:function(n,r,s){s=s!=null?s.concat([n]):null,Yl(4194308,4,p1.bind(null,r,n),s)},useLayoutEffect:function(n,r){return Yl(4194308,4,n,r)},useInsertionEffect:function(n,r){Yl(4,2,n,r)},useMemo:function(n,r){var s=It();r=r===void 0?null:r;var c=n();if(Ei){Pa(!0);try{n()}finally{Pa(!1)}}return s.memoizedState=[c,r],c},useReducer:function(n,r,s){var c=It();if(s!==void 0){var h=s(r);if(Ei){Pa(!0);try{s(r)}finally{Pa(!1)}}}else h=r;return c.memoizedState=c.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},c.queue=n,n=n.dispatch=US.bind(null,Se,n),[c.memoizedState,n]},useRef:function(n){var r=It();return n={current:n},r.memoizedState=n},useState:function(n){n=pf(n);var r=n.queue,s=k1.bind(null,Se,r);return r.dispatch=s,[n.memoizedState,s]},useDebugValue:mf,useDeferredValue:function(n,r){var s=It();return gf(s,n,r)},useTransition:function(){var n=pf(!1);return n=x1.bind(null,Se,n.queue,!0,!1),It().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,s){var c=Se,h=It();if(ze){if(s===void 0)throw Error(i(407));s=s()}else{if(s=r(),Ke===null)throw Error(i(349));(Ae&124)!==0||K0(c,r,s)}h.memoizedState=s;var b={value:s,getSnapshot:r};return h.queue=b,c1(X0.bind(null,c,b,n),[n]),c.flags|=2048,xr(9,Kl(),Y0.bind(null,c,b,s,r),null),s},useId:function(){var n=It(),r=Ke.identifierPrefix;if(ze){var s=ga,c=ma;s=(c&~(1<<32-nn(c)-1)).toString(32)+s,r="«"+r+"R"+s,s=Il++,0<s&&(r+="H"+s.toString(32)),r+="»"}else s=VS++,r="«"+r+"r"+s.toString(32)+"»";return n.memoizedState=r},useHostTransitionStatus:xf,useFormState:i1,useActionState:i1,useOptimistic:function(n){var r=It();r.memoizedState=r.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=yf.bind(null,Se,!0,s),s.dispatch=r,[n,r]},useMemoCache:uf,useCacheRefresh:function(){return It().memoizedState=$S.bind(null,Se)}},C1={readContext:Dt,use:Fl,useCallback:m1,useContext:Dt,useEffect:u1,useImperativeHandle:h1,useInsertionEffect:d1,useLayoutEffect:f1,useMemo:g1,useReducer:ql,useRef:l1,useState:function(){return ql(ya)},useDebugValue:mf,useDeferredValue:function(n,r){var s=ct();return b1(s,_e.memoizedState,n,r)},useTransition:function(){var n=ql(ya)[0],r=ct().memoizedState;return[typeof n=="boolean"?n:Is(n),r]},useSyncExternalStore:q0,useId:w1,useHostTransitionStatus:xf,useFormState:r1,useActionState:r1,useOptimistic:function(n,r){var s=ct();return Z0(s,_e,n,r)},useMemoCache:uf,useCacheRefresh:S1},GS={readContext:Dt,use:Fl,useCallback:m1,useContext:Dt,useEffect:u1,useImperativeHandle:h1,useInsertionEffect:d1,useLayoutEffect:f1,useMemo:g1,useReducer:ff,useRef:l1,useState:function(){return ff(ya)},useDebugValue:mf,useDeferredValue:function(n,r){var s=ct();return _e===null?gf(s,n,r):b1(s,_e.memoizedState,n,r)},useTransition:function(){var n=ff(ya)[0],r=ct().memoizedState;return[typeof n=="boolean"?n:Is(n),r]},useSyncExternalStore:q0,useId:w1,useHostTransitionStatus:xf,useFormState:o1,useActionState:o1,useOptimistic:function(n,r){var s=ct();return _e!==null?Z0(s,_e,n,r):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:uf,useCacheRefresh:S1},yr=null,Ks=0;function Ql(n){var r=Ks;return Ks+=1,yr===null&&(yr=[]),B0(yr,n,r)}function Ys(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function Zl(n,r){throw r.$$typeof===x?Error(i(525)):(n=Object.prototype.toString.call(r),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function E1(n){var r=n._init;return r(n._payload)}function M1(n){function r(U,_){if(n){var I=U.deletions;I===null?(U.deletions=[_],U.flags|=16):I.push(_)}}function s(U,_){if(!n)return null;for(;_!==null;)r(U,_),_=_.sibling;return null}function c(U){for(var _=new Map;U!==null;)U.key!==null?_.set(U.key,U):_.set(U.index,U),U=U.sibling;return _}function h(U,_){return U=ha(U,_),U.index=0,U.sibling=null,U}function b(U,_,I){return U.index=I,n?(I=U.alternate,I!==null?(I=I.index,I<_?(U.flags|=67108866,_):I):(U.flags|=67108866,_)):(U.flags|=1048576,_)}function w(U){return n&&U.alternate===null&&(U.flags|=67108866),U}function T(U,_,I,Q){return _===null||_.tag!==6?(_=_d(I,U.mode,Q),_.return=U,_):(_=h(_,I),_.return=U,_)}function P(U,_,I,Q){var re=I.type;return re===S?W(U,_,I.props.children,Q,I.key):_!==null&&(_.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===O&&E1(re)===_.type)?(_=h(_,I.props),Ys(_,I),_.return=U,_):(_=Dl(I.type,I.key,I.props,null,U.mode,Q),Ys(_,I),_.return=U,_)}function F(U,_,I,Q){return _===null||_.tag!==4||_.stateNode.containerInfo!==I.containerInfo||_.stateNode.implementation!==I.implementation?(_=Hd(I,U.mode,Q),_.return=U,_):(_=h(_,I.children||[]),_.return=U,_)}function W(U,_,I,Q,re){return _===null||_.tag!==7?(_=vi(I,U.mode,Q,re),_.return=U,_):(_=h(_,I),_.return=U,_)}function ee(U,_,I){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=_d(""+_,U.mode,I),_.return=U,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case y:return I=Dl(_.type,_.key,_.props,null,U.mode,I),Ys(I,_),I.return=U,I;case v:return _=Hd(_,U.mode,I),_.return=U,_;case O:var Q=_._init;return _=Q(_._payload),ee(U,_,I)}if(oe(_)||te(_))return _=vi(_,U.mode,I,null),_.return=U,_;if(typeof _.then=="function")return ee(U,Ql(_),I);if(_.$$typeof===A)return ee(U,Bl(U,_),I);Zl(U,_)}return null}function q(U,_,I,Q){var re=_!==null?_.key:null;if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return re!==null?null:T(U,_,""+I,Q);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case y:return I.key===re?P(U,_,I,Q):null;case v:return I.key===re?F(U,_,I,Q):null;case O:return re=I._init,I=re(I._payload),q(U,_,I,Q)}if(oe(I)||te(I))return re!==null?null:W(U,_,I,Q,null);if(typeof I.then=="function")return q(U,_,Ql(I),Q);if(I.$$typeof===A)return q(U,_,Bl(U,I),Q);Zl(U,I)}return null}function K(U,_,I,Q,re){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return U=U.get(I)||null,T(_,U,""+Q,re);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return U=U.get(Q.key===null?I:Q.key)||null,P(_,U,Q,re);case v:return U=U.get(Q.key===null?I:Q.key)||null,F(_,U,Q,re);case O:var ke=Q._init;return Q=ke(Q._payload),K(U,_,I,Q,re)}if(oe(Q)||te(Q))return U=U.get(I)||null,W(_,U,Q,re,null);if(typeof Q.then=="function")return K(U,_,I,Ql(Q),re);if(Q.$$typeof===A)return K(U,_,I,Bl(_,Q),re);Zl(_,Q)}return null}function he(U,_,I,Q){for(var re=null,ke=null,ue=_,pe=_=0,wt=null;ue!==null&&pe<I.length;pe++){ue.index>pe?(wt=ue,ue=null):wt=ue.sibling;var Ee=q(U,ue,I[pe],Q);if(Ee===null){ue===null&&(ue=wt);break}n&&ue&&Ee.alternate===null&&r(U,ue),_=b(Ee,_,pe),ke===null?re=Ee:ke.sibling=Ee,ke=Ee,ue=wt}if(pe===I.length)return s(U,ue),ze&&Si(U,pe),re;if(ue===null){for(;pe<I.length;pe++)ue=ee(U,I[pe],Q),ue!==null&&(_=b(ue,_,pe),ke===null?re=ue:ke.sibling=ue,ke=ue);return ze&&Si(U,pe),re}for(ue=c(ue);pe<I.length;pe++)wt=K(ue,U,pe,I[pe],Q),wt!==null&&(n&&wt.alternate!==null&&ue.delete(wt.key===null?pe:wt.key),_=b(wt,_,pe),ke===null?re=wt:ke.sibling=wt,ke=wt);return n&&ue.forEach(function(ii){return r(U,ii)}),ze&&Si(U,pe),re}function fe(U,_,I,Q){if(I==null)throw Error(i(151));for(var re=null,ke=null,ue=_,pe=_=0,wt=null,Ee=I.next();ue!==null&&!Ee.done;pe++,Ee=I.next()){ue.index>pe?(wt=ue,ue=null):wt=ue.sibling;var ii=q(U,ue,Ee.value,Q);if(ii===null){ue===null&&(ue=wt);break}n&&ue&&ii.alternate===null&&r(U,ue),_=b(ii,_,pe),ke===null?re=ii:ke.sibling=ii,ke=ii,ue=wt}if(Ee.done)return s(U,ue),ze&&Si(U,pe),re;if(ue===null){for(;!Ee.done;pe++,Ee=I.next())Ee=ee(U,Ee.value,Q),Ee!==null&&(_=b(Ee,_,pe),ke===null?re=Ee:ke.sibling=Ee,ke=Ee);return ze&&Si(U,pe),re}for(ue=c(ue);!Ee.done;pe++,Ee=I.next())Ee=K(ue,U,pe,Ee.value,Q),Ee!==null&&(n&&Ee.alternate!==null&&ue.delete(Ee.key===null?pe:Ee.key),_=b(Ee,_,pe),ke===null?re=Ee:ke.sibling=Ee,ke=Ee);return n&&ue.forEach(function(I6){return r(U,I6)}),ze&&Si(U,pe),re}function $e(U,_,I,Q){if(typeof I=="object"&&I!==null&&I.type===S&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case y:e:{for(var re=I.key;_!==null;){if(_.key===re){if(re=I.type,re===S){if(_.tag===7){s(U,_.sibling),Q=h(_,I.props.children),Q.return=U,U=Q;break e}}else if(_.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===O&&E1(re)===_.type){s(U,_.sibling),Q=h(_,I.props),Ys(Q,I),Q.return=U,U=Q;break e}s(U,_);break}else r(U,_);_=_.sibling}I.type===S?(Q=vi(I.props.children,U.mode,Q,I.key),Q.return=U,U=Q):(Q=Dl(I.type,I.key,I.props,null,U.mode,Q),Ys(Q,I),Q.return=U,U=Q)}return w(U);case v:e:{for(re=I.key;_!==null;){if(_.key===re)if(_.tag===4&&_.stateNode.containerInfo===I.containerInfo&&_.stateNode.implementation===I.implementation){s(U,_.sibling),Q=h(_,I.children||[]),Q.return=U,U=Q;break e}else{s(U,_);break}else r(U,_);_=_.sibling}Q=Hd(I,U.mode,Q),Q.return=U,U=Q}return w(U);case O:return re=I._init,I=re(I._payload),$e(U,_,I,Q)}if(oe(I))return he(U,_,I,Q);if(te(I)){if(re=te(I),typeof re!="function")throw Error(i(150));return I=re.call(I),fe(U,_,I,Q)}if(typeof I.then=="function")return $e(U,_,Ql(I),Q);if(I.$$typeof===A)return $e(U,_,Bl(U,I),Q);Zl(U,I)}return typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint"?(I=""+I,_!==null&&_.tag===6?(s(U,_.sibling),Q=h(_,I),Q.return=U,U=Q):(s(U,_),Q=_d(I,U.mode,Q),Q.return=U,U=Q),w(U)):s(U,_)}return function(U,_,I,Q){try{Ks=0;var re=$e(U,_,I,Q);return yr=null,re}catch(ue){if(ue===Bs||ue===Hl)throw ue;var ke=rn(29,ue,null,U.mode);return ke.lanes=Q,ke.return=U,ke}finally{}}}var vr=M1(!0),z1=M1(!1),Tn=Y(null),Fn=null;function Ga(n){var r=n.alternate;ae(ht,ht.current&1),ae(Tn,n),Fn===null&&(r===null||mr.current!==null||r.memoizedState!==null)&&(Fn=n)}function R1(n){if(n.tag===22){if(ae(ht,ht.current),ae(Tn,n),Fn===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(Fn=n)}}else Ia()}function Ia(){ae(ht,ht.current),ae(Tn,Tn.current)}function va(n){ne(Tn),Fn===n&&(Fn=null),ne(ht)}var ht=Y(0);function Jl(n){for(var r=n;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||cp(s)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function vf(n,r,s,c){r=n.memoizedState,s=s(c,r),s=s==null?r:g({},r,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var wf={enqueueSetState:function(n,r,s){n=n._reactInternals;var c=cn(),h=Ha(c);h.payload=r,s!=null&&(h.callback=s),r=$a(n,h,c),r!==null&&(un(r,n,c),Hs(r,n,c))},enqueueReplaceState:function(n,r,s){n=n._reactInternals;var c=cn(),h=Ha(c);h.tag=1,h.payload=r,s!=null&&(h.callback=s),r=$a(n,h,c),r!==null&&(un(r,n,c),Hs(r,n,c))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var s=cn(),c=Ha(s);c.tag=2,r!=null&&(c.callback=r),r=$a(n,c,s),r!==null&&(un(r,n,s),Hs(r,n,s))}};function L1(n,r,s,c,h,b,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,b,w):r.prototype&&r.prototype.isPureReactComponent?!zs(s,c)||!zs(h,b):!0}function O1(n,r,s,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,c),r.state!==n&&wf.enqueueReplaceState(r,r.state,null)}function Mi(n,r){var s=r;if("ref"in r){s={};for(var c in r)c!=="ref"&&(s[c]=r[c])}if(n=n.defaultProps){s===r&&(s=g({},s));for(var h in n)s[h]===void 0&&(s[h]=n[h])}return s}var ec=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function D1(n){ec(n)}function P1(n){console.error(n)}function V1(n){ec(n)}function tc(n,r){try{var s=n.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(c){setTimeout(function(){throw c})}}function N1(n,r,s){try{var c=n.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Sf(n,r,s){return s=Ha(s),s.tag=3,s.payload={element:null},s.callback=function(){tc(n,r)},s}function B1(n){return n=Ha(n),n.tag=3,n}function _1(n,r,s,c){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var b=c.value;n.payload=function(){return h(b)},n.callback=function(){N1(r,s,c)}}var w=s.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(n.callback=function(){N1(r,s,c),typeof h!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var T=c.stack;this.componentDidCatch(c.value,{componentStack:T!==null?T:""})})}function IS(n,r,s,c,h){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(r=s.alternate,r!==null&&Ps(r,s,h,!0),s=Tn.current,s!==null){switch(s.tag){case 13:return Fn===null?qf():s.alternate===null&&at===0&&(at=3),s.flags&=-257,s.flags|=65536,s.lanes=h,c===Wd?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([c]):r.add(c),Yf(n,c,h)),!1;case 22:return s.flags|=65536,c===Wd?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([c]):s.add(c)),Yf(n,c,h)),!1}throw Error(i(435,s.tag))}return Yf(n,c,h),qf(),!1}if(ze)return r=Tn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,c!==Gd&&(n=Error(i(422),{cause:c}),Ds(vn(n,s)))):(c!==Gd&&(r=Error(i(423),{cause:c}),Ds(vn(r,s))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,c=vn(c,s),h=Sf(n.stateNode,c,h),Jd(n,h),at!==4&&(at=2)),!1;var b=Error(i(520),{cause:c});if(b=vn(b,s),to===null?to=[b]:to.push(b),at!==4&&(at=2),r===null)return!0;c=vn(c,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,n=h&-h,s.lanes|=n,n=Sf(s.stateNode,c,n),Jd(s,n),!1;case 1:if(r=s.type,b=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Wa===null||!Wa.has(b))))return s.flags|=65536,h&=-h,s.lanes|=h,h=B1(h),_1(h,n,s,c),Jd(s,h),!1}s=s.return}while(s!==null);return!1}var H1=Error(i(461)),yt=!1;function Ct(n,r,s,c){r.child=n===null?z1(r,null,s,c):vr(r,n.child,s,c)}function $1(n,r,s,c,h){s=s.render;var b=r.ref;if("ref"in c){var w={};for(var T in c)T!=="ref"&&(w[T]=c[T])}else w=c;return Ai(r),c=rf(n,r,s,w,b,h),T=sf(),n!==null&&!yt?(of(n,r,h),wa(n,r,h)):(ze&&T&&$d(r),r.flags|=1,Ct(n,r,c,h),r.child)}function U1(n,r,s,c,h){if(n===null){var b=s.type;return typeof b=="function"&&!Bd(b)&&b.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=b,G1(n,r,b,c,h)):(n=Dl(s.type,null,c,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(b=n.child,!zf(n,h)){var w=b.memoizedProps;if(s=s.compare,s=s!==null?s:zs,s(w,c)&&n.ref===r.ref)return wa(n,r,h)}return r.flags|=1,n=ha(b,c),n.ref=r.ref,n.return=r,r.child=n}function G1(n,r,s,c,h){if(n!==null){var b=n.memoizedProps;if(zs(b,c)&&n.ref===r.ref)if(yt=!1,r.pendingProps=c=b,zf(n,h))(n.flags&131072)!==0&&(yt=!0);else return r.lanes=n.lanes,wa(n,r,h)}return kf(n,r,s,c,h)}function I1(n,r,s){var c=r.pendingProps,h=c.children,b=n!==null?n.memoizedState:null;if(c.mode==="hidden"){if((r.flags&128)!==0){if(c=b!==null?b.baseLanes|s:s,n!==null){for(h=r.child=n.child,b=0;h!==null;)b=b|h.lanes|h.childLanes,h=h.sibling;r.childLanes=b&~c}else r.childLanes=0,r.child=null;return F1(n,r,c,s)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&_l(r,b!==null?b.cachePool:null),b!==null?G0(r,b):tf(),R1(r);else return r.lanes=r.childLanes=536870912,F1(n,r,b!==null?b.baseLanes|s:s,s)}else b!==null?(_l(r,b.cachePool),G0(r,b),Ia(),r.memoizedState=null):(n!==null&&_l(r,null),tf(),Ia());return Ct(n,r,h,s),r.child}function F1(n,r,s,c){var h=Xd();return h=h===null?null:{parent:pt._currentValue,pool:h},r.memoizedState={baseLanes:s,cachePool:h},n!==null&&_l(r,null),tf(),R1(r),n!==null&&Ps(n,r,c,!0),null}function nc(n,r){var s=r.ref;if(s===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(i(284));(n===null||n.ref!==s)&&(r.flags|=4194816)}}function kf(n,r,s,c,h){return Ai(r),s=rf(n,r,s,c,void 0,h),c=sf(),n!==null&&!yt?(of(n,r,h),wa(n,r,h)):(ze&&c&&$d(r),r.flags|=1,Ct(n,r,s,h),r.child)}function q1(n,r,s,c,h,b){return Ai(r),r.updateQueue=null,s=F0(r,c,s,h),I0(n),c=sf(),n!==null&&!yt?(of(n,r,b),wa(n,r,b)):(ze&&c&&$d(r),r.flags|=1,Ct(n,r,s,b),r.child)}function K1(n,r,s,c,h){if(Ai(r),r.stateNode===null){var b=ur,w=s.contextType;typeof w=="object"&&w!==null&&(b=Dt(w)),b=new s(c,b),r.memoizedState=b.state!==null&&b.state!==void 0?b.state:null,b.updater=wf,r.stateNode=b,b._reactInternals=r,b=r.stateNode,b.props=c,b.state=r.memoizedState,b.refs={},Qd(r),w=s.contextType,b.context=typeof w=="object"&&w!==null?Dt(w):ur,b.state=r.memoizedState,w=s.getDerivedStateFromProps,typeof w=="function"&&(vf(r,s,w,c),b.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof b.getSnapshotBeforeUpdate=="function"||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(w=b.state,typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount(),w!==b.state&&wf.enqueueReplaceState(b,b.state,null),Us(r,c,b,h),$s(),b.state=r.memoizedState),typeof b.componentDidMount=="function"&&(r.flags|=4194308),c=!0}else if(n===null){b=r.stateNode;var T=r.memoizedProps,P=Mi(s,T);b.props=P;var F=b.context,W=s.contextType;w=ur,typeof W=="object"&&W!==null&&(w=Dt(W));var ee=s.getDerivedStateFromProps;W=typeof ee=="function"||typeof b.getSnapshotBeforeUpdate=="function",T=r.pendingProps!==T,W||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(T||F!==w)&&O1(r,b,c,w),_a=!1;var q=r.memoizedState;b.state=q,Us(r,c,b,h),$s(),F=r.memoizedState,T||q!==F||_a?(typeof ee=="function"&&(vf(r,s,ee,c),F=r.memoizedState),(P=_a||L1(r,s,P,c,q,F,w))?(W||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(r.flags|=4194308)):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=F),b.props=c,b.state=F,b.context=w,c=P):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{b=r.stateNode,Zd(n,r),w=r.memoizedProps,W=Mi(s,w),b.props=W,ee=r.pendingProps,q=b.context,F=s.contextType,P=ur,typeof F=="object"&&F!==null&&(P=Dt(F)),T=s.getDerivedStateFromProps,(F=typeof T=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(w!==ee||q!==P)&&O1(r,b,c,P),_a=!1,q=r.memoizedState,b.state=q,Us(r,c,b,h),$s();var K=r.memoizedState;w!==ee||q!==K||_a||n!==null&&n.dependencies!==null&&Nl(n.dependencies)?(typeof T=="function"&&(vf(r,s,T,c),K=r.memoizedState),(W=_a||L1(r,s,W,c,q,K,P)||n!==null&&n.dependencies!==null&&Nl(n.dependencies))?(F||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,K,P),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,K,P)),typeof b.componentDidUpdate=="function"&&(r.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof b.componentDidUpdate!="function"||w===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=K),b.props=c,b.state=K,b.context=P,c=W):(typeof b.componentDidUpdate!="function"||w===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),c=!1)}return b=c,nc(n,r),c=(r.flags&128)!==0,b||c?(b=r.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:b.render(),r.flags|=1,n!==null&&c?(r.child=vr(r,n.child,null,h),r.child=vr(r,null,s,h)):Ct(n,r,s,h),r.memoizedState=b.state,n=r.child):n=wa(n,r,h),n}function Y1(n,r,s,c){return Os(),r.flags|=256,Ct(n,r,s,c),r.child}var Tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jf(n){return{baseLanes:n,cachePool:P0()}}function Af(n,r,s){return n=n!==null?n.childLanes&~s:0,r&&(n|=jn),n}function X1(n,r,s){var c=r.pendingProps,h=!1,b=(r.flags&128)!==0,w;if((w=b)||(w=n!==null&&n.memoizedState===null?!1:(ht.current&2)!==0),w&&(h=!0,r.flags&=-129),w=(r.flags&32)!==0,r.flags&=-33,n===null){if(ze){if(h?Ga(r):Ia(),ze){var T=nt,P;if(P=T){e:{for(P=T,T=In;P.nodeType!==8;){if(!T){T=null;break e}if(P=Ln(P.nextSibling),P===null){T=null;break e}}T=P}T!==null?(r.memoizedState={dehydrated:T,treeContext:wi!==null?{id:ma,overflow:ga}:null,retryLane:536870912,hydrationErrors:null},P=rn(18,null,null,0),P.stateNode=T,P.return=r,r.child=P,Ht=r,nt=null,P=!0):P=!1}P||Ti(r)}if(T=r.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return cp(T)?r.lanes=32:r.lanes=536870912,null;va(r)}return T=c.children,c=c.fallback,h?(Ia(),h=r.mode,T=ac({mode:"hidden",children:T},h),c=vi(c,h,s,null),T.return=r,c.return=r,T.sibling=c,r.child=T,h=r.child,h.memoizedState=jf(s),h.childLanes=Af(n,w,s),r.memoizedState=Tf,c):(Ga(r),Cf(r,T))}if(P=n.memoizedState,P!==null&&(T=P.dehydrated,T!==null)){if(b)r.flags&256?(Ga(r),r.flags&=-257,r=Ef(n,r,s)):r.memoizedState!==null?(Ia(),r.child=n.child,r.flags|=128,r=null):(Ia(),h=c.fallback,T=r.mode,c=ac({mode:"visible",children:c.children},T),h=vi(h,T,s,null),h.flags|=2,c.return=r,h.return=r,c.sibling=h,r.child=c,vr(r,n.child,null,s),c=r.child,c.memoizedState=jf(s),c.childLanes=Af(n,w,s),r.memoizedState=Tf,r=h);else if(Ga(r),cp(T)){if(w=T.nextSibling&&T.nextSibling.dataset,w)var F=w.dgst;w=F,c=Error(i(419)),c.stack="",c.digest=w,Ds({value:c,source:null,stack:null}),r=Ef(n,r,s)}else if(yt||Ps(n,r,s,!1),w=(s&n.childLanes)!==0,yt||w){if(w=Ke,w!==null&&(c=s&-s,c=(c&42)!==0?1:cd(c),c=(c&(w.suspendedLanes|s))!==0?0:c,c!==0&&c!==P.retryLane))throw P.retryLane=c,cr(n,c),un(w,n,c),H1;T.data==="$?"||qf(),r=Ef(n,r,s)}else T.data==="$?"?(r.flags|=192,r.child=n.child,r=null):(n=P.treeContext,nt=Ln(T.nextSibling),Ht=r,ze=!0,ki=null,In=!1,n!==null&&(Sn[kn++]=ma,Sn[kn++]=ga,Sn[kn++]=wi,ma=n.id,ga=n.overflow,wi=r),r=Cf(r,c.children),r.flags|=4096);return r}return h?(Ia(),h=c.fallback,T=r.mode,P=n.child,F=P.sibling,c=ha(P,{mode:"hidden",children:c.children}),c.subtreeFlags=P.subtreeFlags&65011712,F!==null?h=ha(F,h):(h=vi(h,T,s,null),h.flags|=2),h.return=r,c.return=r,c.sibling=h,r.child=c,c=h,h=r.child,T=n.child.memoizedState,T===null?T=jf(s):(P=T.cachePool,P!==null?(F=pt._currentValue,P=P.parent!==F?{parent:F,pool:F}:P):P=P0(),T={baseLanes:T.baseLanes|s,cachePool:P}),h.memoizedState=T,h.childLanes=Af(n,w,s),r.memoizedState=Tf,c):(Ga(r),s=n.child,n=s.sibling,s=ha(s,{mode:"visible",children:c.children}),s.return=r,s.sibling=null,n!==null&&(w=r.deletions,w===null?(r.deletions=[n],r.flags|=16):w.push(n)),r.child=s,r.memoizedState=null,s)}function Cf(n,r){return r=ac({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function ac(n,r){return n=rn(22,n,null,r),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Ef(n,r,s){return vr(r,n.child,null,s),n=Cf(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function W1(n,r,s){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Fd(n.return,r,s)}function Mf(n,r,s,c,h){var b=n.memoizedState;b===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:h}:(b.isBackwards=r,b.rendering=null,b.renderingStartTime=0,b.last=c,b.tail=s,b.tailMode=h)}function Q1(n,r,s){var c=r.pendingProps,h=c.revealOrder,b=c.tail;if(Ct(n,r,c.children,s),c=ht.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&W1(n,s,r);else if(n.tag===19)W1(n,s,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(ae(ht,c),h){case"forwards":for(s=r.child,h=null;s!==null;)n=s.alternate,n!==null&&Jl(n)===null&&(h=s),s=s.sibling;s=h,s===null?(h=r.child,r.child=null):(h=s.sibling,s.sibling=null),Mf(r,!1,h,s,b);break;case"backwards":for(s=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&Jl(n)===null){r.child=h;break}n=h.sibling,h.sibling=s,s=h,h=n}Mf(r,!0,s,null,b);break;case"together":Mf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function wa(n,r,s){if(n!==null&&(r.dependencies=n.dependencies),Xa|=r.lanes,(s&r.childLanes)===0)if(n!==null){if(Ps(n,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(i(153));if(r.child!==null){for(n=r.child,s=ha(n,n.pendingProps),r.child=s,s.return=r;n.sibling!==null;)n=n.sibling,s=s.sibling=ha(n,n.pendingProps),s.return=r;s.sibling=null}return r.child}function zf(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&Nl(n)))}function FS(n,r,s){switch(r.tag){case 3:Oe(r,r.stateNode.containerInfo),Ba(r,pt,n.memoizedState.cache),Os();break;case 27:case 5:hi(r);break;case 4:Oe(r,r.stateNode.containerInfo);break;case 10:Ba(r,r.type,r.memoizedProps.value);break;case 13:var c=r.memoizedState;if(c!==null)return c.dehydrated!==null?(Ga(r),r.flags|=128,null):(s&r.child.childLanes)!==0?X1(n,r,s):(Ga(r),n=wa(n,r,s),n!==null?n.sibling:null);Ga(r);break;case 19:var h=(n.flags&128)!==0;if(c=(s&r.childLanes)!==0,c||(Ps(n,r,s,!1),c=(s&r.childLanes)!==0),h){if(c)return Q1(n,r,s);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ae(ht,ht.current),c)break;return null;case 22:case 23:return r.lanes=0,I1(n,r,s);case 24:Ba(r,pt,n.memoizedState.cache)}return wa(n,r,s)}function Z1(n,r,s){if(n!==null)if(n.memoizedProps!==r.pendingProps)yt=!0;else{if(!zf(n,s)&&(r.flags&128)===0)return yt=!1,FS(n,r,s);yt=(n.flags&131072)!==0}else yt=!1,ze&&(r.flags&1048576)!==0&&E0(r,Vl,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var c=r.elementType,h=c._init;if(c=h(c._payload),r.type=c,typeof c=="function")Bd(c)?(n=Mi(c,n),r.tag=1,r=K1(null,r,c,n,s)):(r.tag=0,r=kf(null,r,c,n,s));else{if(c!=null){if(h=c.$$typeof,h===$){r.tag=11,r=$1(null,r,c,n,s);break e}else if(h===N){r.tag=14,r=U1(null,r,c,n,s);break e}}throw r=le(c)||c,Error(i(306,r,""))}}return r;case 0:return kf(n,r,r.type,r.pendingProps,s);case 1:return c=r.type,h=Mi(c,r.pendingProps),K1(n,r,c,h,s);case 3:e:{if(Oe(r,r.stateNode.containerInfo),n===null)throw Error(i(387));c=r.pendingProps;var b=r.memoizedState;h=b.element,Zd(n,r),Us(r,c,null,s);var w=r.memoizedState;if(c=w.cache,Ba(r,pt,c),c!==b.cache&&qd(r,[pt],s,!0),$s(),c=w.element,b.isDehydrated)if(b={element:c,isDehydrated:!1,cache:w.cache},r.updateQueue.baseState=b,r.memoizedState=b,r.flags&256){r=Y1(n,r,c,s);break e}else if(c!==h){h=vn(Error(i(424)),r),Ds(h),r=Y1(n,r,c,s);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(nt=Ln(n.firstChild),Ht=r,ze=!0,ki=null,In=!0,s=z1(r,null,c,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Os(),c===h){r=wa(n,r,s);break e}Ct(n,r,c,s)}r=r.child}return r;case 26:return nc(n,r),n===null?(s=nb(r.type,null,r.pendingProps,null))?r.memoizedState=s:ze||(s=r.type,n=r.pendingProps,c=bc(de.current).createElement(s),c[Ot]=r,c[Ut]=n,Mt(c,s,n),xt(c),r.stateNode=c):r.memoizedState=nb(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return hi(r),n===null&&ze&&(c=r.stateNode=J2(r.type,r.pendingProps,de.current),Ht=r,In=!0,h=nt,Ja(r.type)?(up=h,nt=Ln(c.firstChild)):nt=h),Ct(n,r,r.pendingProps.children,s),nc(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&ze&&((h=c=nt)&&(c=y6(c,r.type,r.pendingProps,In),c!==null?(r.stateNode=c,Ht=r,nt=Ln(c.firstChild),In=!1,h=!0):h=!1),h||Ti(r)),hi(r),h=r.type,b=r.pendingProps,w=n!==null?n.memoizedProps:null,c=b.children,sp(h,b)?c=null:w!==null&&sp(h,w)&&(r.flags|=32),r.memoizedState!==null&&(h=rf(n,r,NS,null,null,s),uo._currentValue=h),nc(n,r),Ct(n,r,c,s),r.child;case 6:return n===null&&ze&&((n=s=nt)&&(s=v6(s,r.pendingProps,In),s!==null?(r.stateNode=s,Ht=r,nt=null,n=!0):n=!1),n||Ti(r)),null;case 13:return X1(n,r,s);case 4:return Oe(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=vr(r,null,c,s):Ct(n,r,c,s),r.child;case 11:return $1(n,r,r.type,r.pendingProps,s);case 7:return Ct(n,r,r.pendingProps,s),r.child;case 8:return Ct(n,r,r.pendingProps.children,s),r.child;case 12:return Ct(n,r,r.pendingProps.children,s),r.child;case 10:return c=r.pendingProps,Ba(r,r.type,c.value),Ct(n,r,c.children,s),r.child;case 9:return h=r.type._context,c=r.pendingProps.children,Ai(r),h=Dt(h),c=c(h),r.flags|=1,Ct(n,r,c,s),r.child;case 14:return U1(n,r,r.type,r.pendingProps,s);case 15:return G1(n,r,r.type,r.pendingProps,s);case 19:return Q1(n,r,s);case 31:return c=r.pendingProps,s=r.mode,c={mode:c.mode,children:c.children},n===null?(s=ac(c,s),s.ref=r.ref,r.child=s,s.return=r,r=s):(s=ha(n.child,c),s.ref=r.ref,r.child=s,s.return=r,r=s),r;case 22:return I1(n,r,s);case 24:return Ai(r),c=Dt(pt),n===null?(h=Xd(),h===null&&(h=Ke,b=Kd(),h.pooledCache=b,b.refCount++,b!==null&&(h.pooledCacheLanes|=s),h=b),r.memoizedState={parent:c,cache:h},Qd(r),Ba(r,pt,h)):((n.lanes&s)!==0&&(Zd(n,r),Us(r,null,null,s),$s()),h=n.memoizedState,b=r.memoizedState,h.parent!==c?(h={parent:c,cache:c},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),Ba(r,pt,c)):(c=b.cache,Ba(r,pt,c),c!==h.cache&&qd(r,[pt],s,!0))),Ct(n,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(i(156,r.tag))}function Sa(n){n.flags|=4}function J1(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!ob(r)){if(r=Tn.current,r!==null&&((Ae&4194048)===Ae?Fn!==null:(Ae&62914560)!==Ae&&(Ae&536870912)===0||r!==Fn))throw _s=Wd,V0;n.flags|=8192}}function ic(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?Rg():536870912,n.lanes|=r,Tr|=r)}function Xs(n,r){if(!ze)switch(n.tailMode){case"hidden":r=n.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function et(n){var r=n.alternate!==null&&n.alternate.child===n.child,s=0,c=0;if(r)for(var h=n.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags&65011712,c|=h.flags&65011712,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=s,r}function qS(n,r,s){var c=r.pendingProps;switch(Ud(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(r),null;case 1:return et(r),null;case 3:return s=r.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),r.memoizedState.cache!==c&&(r.flags|=2048),xa(pt),Lt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(Ls(r)?Sa(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,R0())),et(r),null;case 26:return s=r.memoizedState,n===null?(Sa(r),s!==null?(et(r),J1(r,s)):(et(r),r.flags&=-16777217)):s?s!==n.memoizedState?(Sa(r),et(r),J1(r,s)):(et(r),r.flags&=-16777217):(n.memoizedProps!==c&&Sa(r),et(r),r.flags&=-16777217),null;case 27:da(r),s=de.current;var h=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==c&&Sa(r);else{if(!c){if(r.stateNode===null)throw Error(i(166));return et(r),null}n=se.current,Ls(r)?M0(r):(n=J2(h,c,s),r.stateNode=n,Sa(r))}return et(r),null;case 5:if(da(r),s=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==c&&Sa(r);else{if(!c){if(r.stateNode===null)throw Error(i(166));return et(r),null}if(n=se.current,Ls(r))M0(r);else{switch(h=bc(de.current),n){case 1:n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=h.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?h.createElement("select",{is:c.is}):h.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?h.createElement(s,{is:c.is}):h.createElement(s)}}n[Ot]=r,n[Ut]=c;e:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)n.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break e;for(;h.sibling===null;){if(h.return===null||h.return===r)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=n;e:switch(Mt(n,s,c),s){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Sa(r)}}return et(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==c&&Sa(r);else{if(typeof c!="string"&&r.stateNode===null)throw Error(i(166));if(n=de.current,Ls(r)){if(n=r.stateNode,s=r.memoizedProps,c=null,h=Ht,h!==null)switch(h.tag){case 27:case 5:c=h.memoizedProps}n[Ot]=r,n=!!(n.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||q2(n.nodeValue,s)),n||Ti(r)}else n=bc(n).createTextNode(c),n[Ot]=r,r.stateNode=n}return et(r),null;case 13:if(c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=Ls(r),c!==null&&c.dehydrated!==null){if(n===null){if(!h)throw Error(i(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(i(317));h[Ot]=r}else Os(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;et(r),h=!1}else h=R0(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(va(r),r):(va(r),null)}if(va(r),(r.flags&128)!==0)return r.lanes=s,r;if(s=c!==null,n=n!==null&&n.memoizedState!==null,s){c=r.child,h=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(h=c.alternate.memoizedState.cachePool.pool);var b=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(b=c.memoizedState.cachePool.pool),b!==h&&(c.flags|=2048)}return s!==n&&s&&(r.child.flags|=8192),ic(r,r.updateQueue),et(r),null;case 4:return Lt(),n===null&&tp(r.stateNode.containerInfo),et(r),null;case 10:return xa(r.type),et(r),null;case 19:if(ne(ht),h=r.memoizedState,h===null)return et(r),null;if(c=(r.flags&128)!==0,b=h.rendering,b===null)if(c)Xs(h,!1);else{if(at!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(b=Jl(n),b!==null){for(r.flags|=128,Xs(h,!1),n=b.updateQueue,r.updateQueue=n,ic(r,n),r.subtreeFlags=0,n=s,s=r.child;s!==null;)C0(s,n),s=s.sibling;return ae(ht,ht.current&1|2),r.child}n=n.sibling}h.tail!==null&&Gn()>oc&&(r.flags|=128,c=!0,Xs(h,!1),r.lanes=4194304)}else{if(!c)if(n=Jl(b),n!==null){if(r.flags|=128,c=!0,n=n.updateQueue,r.updateQueue=n,ic(r,n),Xs(h,!0),h.tail===null&&h.tailMode==="hidden"&&!b.alternate&&!ze)return et(r),null}else 2*Gn()-h.renderingStartTime>oc&&s!==536870912&&(r.flags|=128,c=!0,Xs(h,!1),r.lanes=4194304);h.isBackwards?(b.sibling=r.child,r.child=b):(n=h.last,n!==null?n.sibling=b:r.child=b,h.last=b)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=Gn(),r.sibling=null,n=ht.current,ae(ht,c?n&1|2:n&1),r):(et(r),null);case 22:case 23:return va(r),nf(),c=r.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(r.flags|=8192):c&&(r.flags|=8192),c?(s&536870912)!==0&&(r.flags&128)===0&&(et(r),r.subtreeFlags&6&&(r.flags|=8192)):et(r),s=r.updateQueue,s!==null&&ic(r,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==s&&(r.flags|=2048),n!==null&&ne(Ci),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),xa(pt),et(r),null;case 25:return null;case 30:return null}throw Error(i(156,r.tag))}function KS(n,r){switch(Ud(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return xa(pt),Lt(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return da(r),null;case 13:if(va(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(i(340));Os()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return ne(ht),null;case 4:return Lt(),null;case 10:return xa(r.type),null;case 22:case 23:return va(r),nf(),n!==null&&ne(Ci),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return xa(pt),null;case 25:return null;default:return null}}function e2(n,r){switch(Ud(r),r.tag){case 3:xa(pt),Lt();break;case 26:case 27:case 5:da(r);break;case 4:Lt();break;case 13:va(r);break;case 19:ne(ht);break;case 10:xa(r.type);break;case 22:case 23:va(r),nf(),n!==null&&ne(Ci);break;case 24:xa(pt)}}function Ws(n,r){try{var s=r.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var h=c.next;s=h;do{if((s.tag&n)===n){c=void 0;var b=s.create,w=s.inst;c=b(),w.destroy=c}s=s.next}while(s!==h)}}catch(T){Ie(r,r.return,T)}}function Fa(n,r,s){try{var c=r.updateQueue,h=c!==null?c.lastEffect:null;if(h!==null){var b=h.next;c=b;do{if((c.tag&n)===n){var w=c.inst,T=w.destroy;if(T!==void 0){w.destroy=void 0,h=r;var P=s,F=T;try{F()}catch(W){Ie(h,P,W)}}}c=c.next}while(c!==b)}}catch(W){Ie(r,r.return,W)}}function t2(n){var r=n.updateQueue;if(r!==null){var s=n.stateNode;try{U0(r,s)}catch(c){Ie(n,n.return,c)}}}function n2(n,r,s){s.props=Mi(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(c){Ie(n,r,c)}}function Qs(n,r){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof s=="function"?n.refCleanup=s(c):s.current=c}}catch(h){Ie(n,r,h)}}function qn(n,r){var s=n.ref,c=n.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(h){Ie(n,r,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){Ie(n,r,h)}else s.current=null}function a2(n){var r=n.type,s=n.memoizedProps,c=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break e;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(h){Ie(n,n.return,h)}}function Rf(n,r,s){try{var c=n.stateNode;h6(c,n.type,s,r),c[Ut]=r}catch(h){Ie(n,n.return,h)}}function i2(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Ja(n.type)||n.tag===4}function Lf(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||i2(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Ja(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Of(n,r,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(n),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=gc));else if(c!==4&&(c===27&&Ja(n.type)&&(s=n.stateNode,r=null),n=n.child,n!==null))for(Of(n,r,s),n=n.sibling;n!==null;)Of(n,r,s),n=n.sibling}function rc(n,r,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?s.insertBefore(n,r):s.appendChild(n);else if(c!==4&&(c===27&&Ja(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(rc(n,r,s),n=n.sibling;n!==null;)rc(n,r,s),n=n.sibling}function r2(n){var r=n.stateNode,s=n.memoizedProps;try{for(var c=n.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);Mt(r,c,s),r[Ot]=n,r[Ut]=s}catch(b){Ie(n,n.return,b)}}var ka=!1,st=!1,Df=!1,s2=typeof WeakSet=="function"?WeakSet:Set,vt=null;function YS(n,r){if(n=n.containerInfo,ip=kc,n=b0(n),Rd(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var h=c.anchorOffset,b=c.focusNode;c=c.focusOffset;try{s.nodeType,b.nodeType}catch{s=null;break e}var w=0,T=-1,P=-1,F=0,W=0,ee=n,q=null;t:for(;;){for(var K;ee!==s||h!==0&&ee.nodeType!==3||(T=w+h),ee!==b||c!==0&&ee.nodeType!==3||(P=w+c),ee.nodeType===3&&(w+=ee.nodeValue.length),(K=ee.firstChild)!==null;)q=ee,ee=K;for(;;){if(ee===n)break t;if(q===s&&++F===h&&(T=w),q===b&&++W===c&&(P=w),(K=ee.nextSibling)!==null)break;ee=q,q=ee.parentNode}ee=K}s=T===-1||P===-1?null:{start:T,end:P}}else s=null}s=s||{start:0,end:0}}else s=null;for(rp={focusedElem:n,selectionRange:s},kc=!1,vt=r;vt!==null;)if(r=vt,n=r.child,(r.subtreeFlags&1024)!==0&&n!==null)n.return=r,vt=n;else for(;vt!==null;){switch(r=vt,b=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&b!==null){n=void 0,s=r,h=b.memoizedProps,b=b.memoizedState,c=s.stateNode;try{var he=Mi(s.type,h,s.elementType===s.type);n=c.getSnapshotBeforeUpdate(he,b),c.__reactInternalSnapshotBeforeUpdate=n}catch(fe){Ie(s,s.return,fe)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,s=n.nodeType,s===9)lp(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":lp(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=r.sibling,n!==null){n.return=r.return,vt=n;break}vt=r.return}}function o2(n,r,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:qa(n,s),c&4&&Ws(5,s);break;case 1:if(qa(n,s),c&4)if(n=s.stateNode,r===null)try{n.componentDidMount()}catch(w){Ie(s,s.return,w)}else{var h=Mi(s.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(h,r,n.__reactInternalSnapshotBeforeUpdate)}catch(w){Ie(s,s.return,w)}}c&64&&t2(s),c&512&&Qs(s,s.return);break;case 3:if(qa(n,s),c&64&&(n=s.updateQueue,n!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{U0(n,r)}catch(w){Ie(s,s.return,w)}}break;case 27:r===null&&c&4&&r2(s);case 26:case 5:qa(n,s),r===null&&c&4&&a2(s),c&512&&Qs(s,s.return);break;case 12:qa(n,s);break;case 13:qa(n,s),c&4&&u2(n,s),c&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=a6.bind(null,s),w6(n,s))));break;case 22:if(c=s.memoizedState!==null||ka,!c){r=r!==null&&r.memoizedState!==null||st,h=ka;var b=st;ka=c,(st=r)&&!b?Ka(n,s,(s.subtreeFlags&8772)!==0):qa(n,s),ka=h,st=b}break;case 30:break;default:qa(n,s)}}function l2(n){var r=n.alternate;r!==null&&(n.alternate=null,l2(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&fd(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Qe=null,Ft=!1;function Ta(n,r,s){for(s=s.child;s!==null;)c2(n,r,s),s=s.sibling}function c2(n,r,s){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(xs,s)}catch{}switch(s.tag){case 26:st||qn(s,r),Ta(n,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:st||qn(s,r);var c=Qe,h=Ft;Ja(s.type)&&(Qe=s.stateNode,Ft=!1),Ta(n,r,s),so(s.stateNode),Qe=c,Ft=h;break;case 5:st||qn(s,r);case 6:if(c=Qe,h=Ft,Qe=null,Ta(n,r,s),Qe=c,Ft=h,Qe!==null)if(Ft)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(s.stateNode)}catch(b){Ie(s,r,b)}else try{Qe.removeChild(s.stateNode)}catch(b){Ie(s,r,b)}break;case 18:Qe!==null&&(Ft?(n=Qe,Q2(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),mo(n)):Q2(Qe,s.stateNode));break;case 4:c=Qe,h=Ft,Qe=s.stateNode.containerInfo,Ft=!0,Ta(n,r,s),Qe=c,Ft=h;break;case 0:case 11:case 14:case 15:st||Fa(2,s,r),st||Fa(4,s,r),Ta(n,r,s);break;case 1:st||(qn(s,r),c=s.stateNode,typeof c.componentWillUnmount=="function"&&n2(s,r,c)),Ta(n,r,s);break;case 21:Ta(n,r,s);break;case 22:st=(c=st)||s.memoizedState!==null,Ta(n,r,s),st=c;break;default:Ta(n,r,s)}}function u2(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{mo(n)}catch(s){Ie(r,r.return,s)}}function XS(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new s2),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new s2),r;default:throw Error(i(435,n.tag))}}function Pf(n,r){var s=XS(n);r.forEach(function(c){var h=i6.bind(null,n,c);s.has(c)||(s.add(c),c.then(h,h))})}function sn(n,r){var s=r.deletions;if(s!==null)for(var c=0;c<s.length;c++){var h=s[c],b=n,w=r,T=w;e:for(;T!==null;){switch(T.tag){case 27:if(Ja(T.type)){Qe=T.stateNode,Ft=!1;break e}break;case 5:Qe=T.stateNode,Ft=!1;break e;case 3:case 4:Qe=T.stateNode.containerInfo,Ft=!0;break e}T=T.return}if(Qe===null)throw Error(i(160));c2(b,w,h),Qe=null,Ft=!1,b=h.alternate,b!==null&&(b.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)d2(r,n),r=r.sibling}var Rn=null;function d2(n,r){var s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:sn(r,n),on(n),c&4&&(Fa(3,n,n.return),Ws(3,n),Fa(5,n,n.return));break;case 1:sn(r,n),on(n),c&512&&(st||s===null||qn(s,s.return)),c&64&&ka&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var h=Rn;if(sn(r,n),on(n),c&512&&(st||s===null||qn(s,s.return)),c&4){var b=s!==null?s.memoizedState:null;if(c=n.memoizedState,s===null)if(c===null)if(n.stateNode===null){e:{c=n.type,s=n.memoizedProps,h=h.ownerDocument||h;t:switch(c){case"title":b=h.getElementsByTagName("title")[0],(!b||b[ws]||b[Ot]||b.namespaceURI==="http://www.w3.org/2000/svg"||b.hasAttribute("itemprop"))&&(b=h.createElement(c),h.head.insertBefore(b,h.querySelector("head > title"))),Mt(b,c,s),b[Ot]=n,xt(b),c=b;break e;case"link":var w=rb("link","href",h).get(c+(s.href||""));if(w){for(var T=0;T<w.length;T++)if(b=w[T],b.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&b.getAttribute("rel")===(s.rel==null?null:s.rel)&&b.getAttribute("title")===(s.title==null?null:s.title)&&b.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){w.splice(T,1);break t}}b=h.createElement(c),Mt(b,c,s),h.head.appendChild(b);break;case"meta":if(w=rb("meta","content",h).get(c+(s.content||""))){for(T=0;T<w.length;T++)if(b=w[T],b.getAttribute("content")===(s.content==null?null:""+s.content)&&b.getAttribute("name")===(s.name==null?null:s.name)&&b.getAttribute("property")===(s.property==null?null:s.property)&&b.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&b.getAttribute("charset")===(s.charSet==null?null:s.charSet)){w.splice(T,1);break t}}b=h.createElement(c),Mt(b,c,s),h.head.appendChild(b);break;default:throw Error(i(468,c))}b[Ot]=n,xt(b),c=b}n.stateNode=c}else sb(h,n.type,n.stateNode);else n.stateNode=ib(h,c,n.memoizedProps);else b!==c?(b===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):b.count--,c===null?sb(h,n.type,n.stateNode):ib(h,c,n.memoizedProps)):c===null&&n.stateNode!==null&&Rf(n,n.memoizedProps,s.memoizedProps)}break;case 27:sn(r,n),on(n),c&512&&(st||s===null||qn(s,s.return)),s!==null&&c&4&&Rf(n,n.memoizedProps,s.memoizedProps);break;case 5:if(sn(r,n),on(n),c&512&&(st||s===null||qn(s,s.return)),n.flags&32){h=n.stateNode;try{nr(h,"")}catch(K){Ie(n,n.return,K)}}c&4&&n.stateNode!=null&&(h=n.memoizedProps,Rf(n,h,s!==null?s.memoizedProps:h)),c&1024&&(Df=!0);break;case 6:if(sn(r,n),on(n),c&4){if(n.stateNode===null)throw Error(i(162));c=n.memoizedProps,s=n.stateNode;try{s.nodeValue=c}catch(K){Ie(n,n.return,K)}}break;case 3:if(vc=null,h=Rn,Rn=xc(r.containerInfo),sn(r,n),Rn=h,on(n),c&4&&s!==null&&s.memoizedState.isDehydrated)try{mo(r.containerInfo)}catch(K){Ie(n,n.return,K)}Df&&(Df=!1,f2(n));break;case 4:c=Rn,Rn=xc(n.stateNode.containerInfo),sn(r,n),on(n),Rn=c;break;case 12:sn(r,n),on(n);break;case 13:sn(r,n),on(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&($f=Gn()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Pf(n,c)));break;case 22:h=n.memoizedState!==null;var P=s!==null&&s.memoizedState!==null,F=ka,W=st;if(ka=F||h,st=W||P,sn(r,n),st=W,ka=F,on(n),c&8192)e:for(r=n.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(s===null||P||ka||st||zi(n)),s=null,r=n;;){if(r.tag===5||r.tag===26){if(s===null){P=s=r;try{if(b=P.stateNode,h)w=b.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{T=P.stateNode;var ee=P.memoizedProps.style,q=ee!=null&&ee.hasOwnProperty("display")?ee.display:null;T.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(K){Ie(P,P.return,K)}}}else if(r.tag===6){if(s===null){P=r;try{P.stateNode.nodeValue=h?"":P.memoizedProps}catch(K){Ie(P,P.return,K)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}c&4&&(c=n.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,Pf(n,s))));break;case 19:sn(r,n),on(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Pf(n,c)));break;case 30:break;case 21:break;default:sn(r,n),on(n)}}function on(n){var r=n.flags;if(r&2){try{for(var s,c=n.return;c!==null;){if(i2(c)){s=c;break}c=c.return}if(s==null)throw Error(i(160));switch(s.tag){case 27:var h=s.stateNode,b=Lf(n);rc(n,b,h);break;case 5:var w=s.stateNode;s.flags&32&&(nr(w,""),s.flags&=-33);var T=Lf(n);rc(n,T,w);break;case 3:case 4:var P=s.stateNode.containerInfo,F=Lf(n);Of(n,F,P);break;default:throw Error(i(161))}}catch(W){Ie(n,n.return,W)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function f2(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;f2(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function qa(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)o2(n,r.alternate,r),r=r.sibling}function zi(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:Fa(4,r,r.return),zi(r);break;case 1:qn(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&n2(r,r.return,s),zi(r);break;case 27:so(r.stateNode);case 26:case 5:qn(r,r.return),zi(r);break;case 22:r.memoizedState===null&&zi(r);break;case 30:zi(r);break;default:zi(r)}n=n.sibling}}function Ka(n,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var c=r.alternate,h=n,b=r,w=b.flags;switch(b.tag){case 0:case 11:case 15:Ka(h,b,s),Ws(4,b);break;case 1:if(Ka(h,b,s),c=b,h=c.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(F){Ie(c,c.return,F)}if(c=b,h=c.updateQueue,h!==null){var T=c.stateNode;try{var P=h.shared.hiddenCallbacks;if(P!==null)for(h.shared.hiddenCallbacks=null,h=0;h<P.length;h++)$0(P[h],T)}catch(F){Ie(c,c.return,F)}}s&&w&64&&t2(b),Qs(b,b.return);break;case 27:r2(b);case 26:case 5:Ka(h,b,s),s&&c===null&&w&4&&a2(b),Qs(b,b.return);break;case 12:Ka(h,b,s);break;case 13:Ka(h,b,s),s&&w&4&&u2(h,b);break;case 22:b.memoizedState===null&&Ka(h,b,s),Qs(b,b.return);break;case 30:break;default:Ka(h,b,s)}r=r.sibling}}function Vf(n,r){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&Vs(s))}function Nf(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Vs(n))}function Kn(n,r,s,c){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)p2(n,r,s,c),r=r.sibling}function p2(n,r,s,c){var h=r.flags;switch(r.tag){case 0:case 11:case 15:Kn(n,r,s,c),h&2048&&Ws(9,r);break;case 1:Kn(n,r,s,c);break;case 3:Kn(n,r,s,c),h&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Vs(n)));break;case 12:if(h&2048){Kn(n,r,s,c),n=r.stateNode;try{var b=r.memoizedProps,w=b.id,T=b.onPostCommit;typeof T=="function"&&T(w,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(P){Ie(r,r.return,P)}}else Kn(n,r,s,c);break;case 13:Kn(n,r,s,c);break;case 23:break;case 22:b=r.stateNode,w=r.alternate,r.memoizedState!==null?b._visibility&2?Kn(n,r,s,c):Zs(n,r):b._visibility&2?Kn(n,r,s,c):(b._visibility|=2,wr(n,r,s,c,(r.subtreeFlags&10256)!==0)),h&2048&&Vf(w,r);break;case 24:Kn(n,r,s,c),h&2048&&Nf(r.alternate,r);break;default:Kn(n,r,s,c)}}function wr(n,r,s,c,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var b=n,w=r,T=s,P=c,F=w.flags;switch(w.tag){case 0:case 11:case 15:wr(b,w,T,P,h),Ws(8,w);break;case 23:break;case 22:var W=w.stateNode;w.memoizedState!==null?W._visibility&2?wr(b,w,T,P,h):Zs(b,w):(W._visibility|=2,wr(b,w,T,P,h)),h&&F&2048&&Vf(w.alternate,w);break;case 24:wr(b,w,T,P,h),h&&F&2048&&Nf(w.alternate,w);break;default:wr(b,w,T,P,h)}r=r.sibling}}function Zs(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=n,c=r,h=c.flags;switch(c.tag){case 22:Zs(s,c),h&2048&&Vf(c.alternate,c);break;case 24:Zs(s,c),h&2048&&Nf(c.alternate,c);break;default:Zs(s,c)}r=r.sibling}}var Js=8192;function Sr(n){if(n.subtreeFlags&Js)for(n=n.child;n!==null;)h2(n),n=n.sibling}function h2(n){switch(n.tag){case 26:Sr(n),n.flags&Js&&n.memoizedState!==null&&D6(Rn,n.memoizedState,n.memoizedProps);break;case 5:Sr(n);break;case 3:case 4:var r=Rn;Rn=xc(n.stateNode.containerInfo),Sr(n),Rn=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=Js,Js=16777216,Sr(n),Js=r):Sr(n));break;default:Sr(n)}}function m2(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function eo(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var c=r[s];vt=c,b2(c,n)}m2(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)g2(n),n=n.sibling}function g2(n){switch(n.tag){case 0:case 11:case 15:eo(n),n.flags&2048&&Fa(9,n,n.return);break;case 3:eo(n);break;case 12:eo(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,sc(n)):eo(n);break;default:eo(n)}}function sc(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var c=r[s];vt=c,b2(c,n)}m2(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:Fa(8,r,r.return),sc(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,sc(r));break;default:sc(r)}n=n.sibling}}function b2(n,r){for(;vt!==null;){var s=vt;switch(s.tag){case 0:case 11:case 15:Fa(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Vs(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,vt=c;else e:for(s=n;vt!==null;){c=vt;var h=c.sibling,b=c.return;if(l2(c),c===s){vt=null;break e}if(h!==null){h.return=b,vt=h;break e}vt=b}}}var WS={getCacheForType:function(n){var r=Dt(pt),s=r.data.get(n);return s===void 0&&(s=n(),r.data.set(n,s)),s}},QS=typeof WeakMap=="function"?WeakMap:Map,Ve=0,Ke=null,Te=null,Ae=0,Ne=0,ln=null,Ya=!1,kr=!1,Bf=!1,ja=0,at=0,Xa=0,Ri=0,_f=0,jn=0,Tr=0,to=null,qt=null,Hf=!1,$f=0,oc=1/0,lc=null,Wa=null,Et=0,Qa=null,jr=null,Ar=0,Uf=0,Gf=null,x2=null,no=0,If=null;function cn(){if((Ve&2)!==0&&Ae!==0)return Ae&-Ae;if(D.T!==null){var n=pr;return n!==0?n:Qf()}return Dg()}function y2(){jn===0&&(jn=(Ae&536870912)===0||ze?zg():536870912);var n=Tn.current;return n!==null&&(n.flags|=32),jn}function un(n,r,s){(n===Ke&&(Ne===2||Ne===9)||n.cancelPendingCommit!==null)&&(Cr(n,0),Za(n,Ae,jn,!1)),vs(n,s),((Ve&2)===0||n!==Ke)&&(n===Ke&&((Ve&2)===0&&(Ri|=s),at===4&&Za(n,Ae,jn,!1)),Yn(n))}function v2(n,r,s){if((Ve&6)!==0)throw Error(i(327));var c=!s&&(r&124)===0&&(r&n.expiredLanes)===0||ys(n,r),h=c?e6(n,r):Kf(n,r,!0),b=c;do{if(h===0){kr&&!c&&Za(n,r,0,!1);break}else{if(s=n.current.alternate,b&&!ZS(s)){h=Kf(n,r,!1),b=!1;continue}if(h===2){if(b=r,n.errorRecoveryDisabledLanes&b)var w=0;else w=n.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){r=w;e:{var T=n;h=to;var P=T.current.memoizedState.isDehydrated;if(P&&(Cr(T,w).flags|=256),w=Kf(T,w,!1),w!==2){if(Bf&&!P){T.errorRecoveryDisabledLanes|=b,Ri|=b,h=4;break e}b=qt,qt=h,b!==null&&(qt===null?qt=b:qt.push.apply(qt,b))}h=w}if(b=!1,h!==2)continue}}if(h===1){Cr(n,0),Za(n,r,0,!0);break}e:{switch(c=n,b=h,b){case 0:case 1:throw Error(i(345));case 4:if((r&4194048)!==r)break;case 6:Za(c,r,jn,!Ya);break e;case 2:qt=null;break;case 3:case 5:break;default:throw Error(i(329))}if((r&62914560)===r&&(h=$f+300-Gn(),10<h)){if(Za(c,r,jn,!Ya),yl(c,0,!0)!==0)break e;c.timeoutHandle=X2(w2.bind(null,c,s,qt,lc,Hf,r,jn,Ri,Tr,Ya,b,2,-0,0),h);break e}w2(c,s,qt,lc,Hf,r,jn,Ri,Tr,Ya,b,0,-0,0)}}break}while(!0);Yn(n)}function w2(n,r,s,c,h,b,w,T,P,F,W,ee,q,K){if(n.timeoutHandle=-1,ee=r.subtreeFlags,(ee&8192||(ee&16785408)===16785408)&&(co={stylesheets:null,count:0,unsuspend:O6},h2(r),ee=P6(),ee!==null)){n.cancelPendingCommit=ee(E2.bind(null,n,r,b,s,c,h,w,T,P,W,1,q,K)),Za(n,b,w,!F);return}E2(n,r,b,s,c,h,w,T,P)}function ZS(n){for(var r=n;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var h=s[c],b=h.getSnapshot;h=h.value;try{if(!an(b(),h))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Za(n,r,s,c){r&=~_f,r&=~Ri,n.suspendedLanes|=r,n.pingedLanes&=~r,c&&(n.warmLanes|=r),c=n.expirationTimes;for(var h=r;0<h;){var b=31-nn(h),w=1<<b;c[b]=-1,h&=~w}s!==0&&Lg(n,s,r)}function cc(){return(Ve&6)===0?(ao(0),!1):!0}function Ff(){if(Te!==null){if(Ne===0)var n=Te.return;else n=Te,ba=ji=null,lf(n),yr=null,Ks=0,n=Te;for(;n!==null;)e2(n.alternate,n),n=n.return;Te=null}}function Cr(n,r){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,g6(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),Ff(),Ke=n,Te=s=ha(n.current,null),Ae=r,Ne=0,ln=null,Ya=!1,kr=ys(n,r),Bf=!1,Tr=jn=_f=Ri=Xa=at=0,qt=to=null,Hf=!1,(r&8)!==0&&(r|=r&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=r;0<c;){var h=31-nn(c),b=1<<h;r|=n[h],c&=~b}return ja=r,Rl(),s}function S2(n,r){Se=null,D.H=Wl,r===Bs||r===Hl?(r=_0(),Ne=3):r===V0?(r=_0(),Ne=4):Ne=r===H1?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,ln=r,Te===null&&(at=1,tc(n,vn(r,n.current)))}function k2(){var n=D.H;return D.H=Wl,n===null?Wl:n}function T2(){var n=D.A;return D.A=WS,n}function qf(){at=4,Ya||(Ae&4194048)!==Ae&&Tn.current!==null||(kr=!0),(Xa&134217727)===0&&(Ri&134217727)===0||Ke===null||Za(Ke,Ae,jn,!1)}function Kf(n,r,s){var c=Ve;Ve|=2;var h=k2(),b=T2();(Ke!==n||Ae!==r)&&(lc=null,Cr(n,r)),r=!1;var w=at;e:do try{if(Ne!==0&&Te!==null){var T=Te,P=ln;switch(Ne){case 8:Ff(),w=6;break e;case 3:case 2:case 9:case 6:Tn.current===null&&(r=!0);var F=Ne;if(Ne=0,ln=null,Er(n,T,P,F),s&&kr){w=0;break e}break;default:F=Ne,Ne=0,ln=null,Er(n,T,P,F)}}JS(),w=at;break}catch(W){S2(n,W)}while(!0);return r&&n.shellSuspendCounter++,ba=ji=null,Ve=c,D.H=h,D.A=b,Te===null&&(Ke=null,Ae=0,Rl()),w}function JS(){for(;Te!==null;)j2(Te)}function e6(n,r){var s=Ve;Ve|=2;var c=k2(),h=T2();Ke!==n||Ae!==r?(lc=null,oc=Gn()+500,Cr(n,r)):kr=ys(n,r);e:do try{if(Ne!==0&&Te!==null){r=Te;var b=ln;t:switch(Ne){case 1:Ne=0,ln=null,Er(n,r,b,1);break;case 2:case 9:if(N0(b)){Ne=0,ln=null,A2(r);break}r=function(){Ne!==2&&Ne!==9||Ke!==n||(Ne=7),Yn(n)},b.then(r,r);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:N0(b)?(Ne=0,ln=null,A2(r)):(Ne=0,ln=null,Er(n,r,b,7));break;case 5:var w=null;switch(Te.tag){case 26:w=Te.memoizedState;case 5:case 27:var T=Te;if(!w||ob(w)){Ne=0,ln=null;var P=T.sibling;if(P!==null)Te=P;else{var F=T.return;F!==null?(Te=F,uc(F)):Te=null}break t}}Ne=0,ln=null,Er(n,r,b,5);break;case 6:Ne=0,ln=null,Er(n,r,b,6);break;case 8:Ff(),at=6;break e;default:throw Error(i(462))}}t6();break}catch(W){S2(n,W)}while(!0);return ba=ji=null,D.H=c,D.A=h,Ve=s,Te!==null?0:(Ke=null,Ae=0,Rl(),at)}function t6(){for(;Te!==null&&!kw();)j2(Te)}function j2(n){var r=Z1(n.alternate,n,ja);n.memoizedProps=n.pendingProps,r===null?uc(n):Te=r}function A2(n){var r=n,s=r.alternate;switch(r.tag){case 15:case 0:r=q1(s,r,r.pendingProps,r.type,void 0,Ae);break;case 11:r=q1(s,r,r.pendingProps,r.type.render,r.ref,Ae);break;case 5:lf(r);default:e2(s,r),r=Te=C0(r,ja),r=Z1(s,r,ja)}n.memoizedProps=n.pendingProps,r===null?uc(n):Te=r}function Er(n,r,s,c){ba=ji=null,lf(r),yr=null,Ks=0;var h=r.return;try{if(IS(n,h,r,s,Ae)){at=1,tc(n,vn(s,n.current)),Te=null;return}}catch(b){if(h!==null)throw Te=h,b;at=1,tc(n,vn(s,n.current)),Te=null;return}r.flags&32768?(ze||c===1?n=!0:kr||(Ae&536870912)!==0?n=!1:(Ya=n=!0,(c===2||c===9||c===3||c===6)&&(c=Tn.current,c!==null&&c.tag===13&&(c.flags|=16384))),C2(r,n)):uc(r)}function uc(n){var r=n;do{if((r.flags&32768)!==0){C2(r,Ya);return}n=r.return;var s=qS(r.alternate,r,ja);if(s!==null){Te=s;return}if(r=r.sibling,r!==null){Te=r;return}Te=r=n}while(r!==null);at===0&&(at=5)}function C2(n,r){do{var s=KS(n.alternate,n);if(s!==null){s.flags&=32767,Te=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(n=n.sibling,n!==null)){Te=n;return}Te=n=s}while(n!==null);at=6,Te=null}function E2(n,r,s,c,h,b,w,T,P){n.cancelPendingCommit=null;do dc();while(Et!==0);if((Ve&6)!==0)throw Error(i(327));if(r!==null){if(r===n.current)throw Error(i(177));if(b=r.lanes|r.childLanes,b|=Vd,Ow(n,s,b,w,T,P),n===Ke&&(Te=Ke=null,Ae=0),jr=r,Qa=n,Ar=s,Uf=b,Gf=h,x2=c,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,r6(gl,function(){return O2(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||c){c=D.T,D.T=null,h=B.p,B.p=2,w=Ve,Ve|=4;try{YS(n,r,s)}finally{Ve=w,B.p=h,D.T=c}}Et=1,M2(),z2(),R2()}}function M2(){if(Et===1){Et=0;var n=Qa,r=jr,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=D.T,D.T=null;var c=B.p;B.p=2;var h=Ve;Ve|=4;try{d2(r,n);var b=rp,w=b0(n.containerInfo),T=b.focusedElem,P=b.selectionRange;if(w!==T&&T&&T.ownerDocument&&g0(T.ownerDocument.documentElement,T)){if(P!==null&&Rd(T)){var F=P.start,W=P.end;if(W===void 0&&(W=F),"selectionStart"in T)T.selectionStart=F,T.selectionEnd=Math.min(W,T.value.length);else{var ee=T.ownerDocument||document,q=ee&&ee.defaultView||window;if(q.getSelection){var K=q.getSelection(),he=T.textContent.length,fe=Math.min(P.start,he),$e=P.end===void 0?fe:Math.min(P.end,he);!K.extend&&fe>$e&&(w=$e,$e=fe,fe=w);var U=m0(T,fe),_=m0(T,$e);if(U&&_&&(K.rangeCount!==1||K.anchorNode!==U.node||K.anchorOffset!==U.offset||K.focusNode!==_.node||K.focusOffset!==_.offset)){var I=ee.createRange();I.setStart(U.node,U.offset),K.removeAllRanges(),fe>$e?(K.addRange(I),K.extend(_.node,_.offset)):(I.setEnd(_.node,_.offset),K.addRange(I))}}}}for(ee=[],K=T;K=K.parentNode;)K.nodeType===1&&ee.push({element:K,left:K.scrollLeft,top:K.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ee.length;T++){var Q=ee[T];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}kc=!!ip,rp=ip=null}finally{Ve=h,B.p=c,D.T=s}}n.current=r,Et=2}}function z2(){if(Et===2){Et=0;var n=Qa,r=jr,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=D.T,D.T=null;var c=B.p;B.p=2;var h=Ve;Ve|=4;try{o2(n,r.alternate,r)}finally{Ve=h,B.p=c,D.T=s}}Et=3}}function R2(){if(Et===4||Et===3){Et=0,Tw();var n=Qa,r=jr,s=Ar,c=x2;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Et=5:(Et=0,jr=Qa=null,L2(n,n.pendingLanes));var h=n.pendingLanes;if(h===0&&(Wa=null),ud(s),r=r.stateNode,tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(xs,r,void 0,(r.current.flags&128)===128)}catch{}if(c!==null){r=D.T,h=B.p,B.p=2,D.T=null;try{for(var b=n.onRecoverableError,w=0;w<c.length;w++){var T=c[w];b(T.value,{componentStack:T.stack})}}finally{D.T=r,B.p=h}}(Ar&3)!==0&&dc(),Yn(n),h=n.pendingLanes,(s&4194090)!==0&&(h&42)!==0?n===If?no++:(no=0,If=n):no=0,ao(0)}}function L2(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Vs(r)))}function dc(n){return M2(),z2(),R2(),O2()}function O2(){if(Et!==5)return!1;var n=Qa,r=Uf;Uf=0;var s=ud(Ar),c=D.T,h=B.p;try{B.p=32>s?32:s,D.T=null,s=Gf,Gf=null;var b=Qa,w=Ar;if(Et=0,jr=Qa=null,Ar=0,(Ve&6)!==0)throw Error(i(331));var T=Ve;if(Ve|=4,g2(b.current),p2(b,b.current,w,s),Ve=T,ao(0,!1),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(xs,b)}catch{}return!0}finally{B.p=h,D.T=c,L2(n,r)}}function D2(n,r,s){r=vn(s,r),r=Sf(n.stateNode,r,2),n=$a(n,r,2),n!==null&&(vs(n,2),Yn(n))}function Ie(n,r,s){if(n.tag===3)D2(n,n,s);else for(;r!==null;){if(r.tag===3){D2(r,n,s);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Wa===null||!Wa.has(c))){n=vn(s,n),s=B1(2),c=$a(r,s,2),c!==null&&(_1(s,c,r,n),vs(c,2),Yn(c));break}}r=r.return}}function Yf(n,r,s){var c=n.pingCache;if(c===null){c=n.pingCache=new QS;var h=new Set;c.set(r,h)}else h=c.get(r),h===void 0&&(h=new Set,c.set(r,h));h.has(s)||(Bf=!0,h.add(s),n=n6.bind(null,n,r,s),r.then(n,n))}function n6(n,r,s){var c=n.pingCache;c!==null&&c.delete(r),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,Ke===n&&(Ae&s)===s&&(at===4||at===3&&(Ae&62914560)===Ae&&300>Gn()-$f?(Ve&2)===0&&Cr(n,0):_f|=s,Tr===Ae&&(Tr=0)),Yn(n)}function P2(n,r){r===0&&(r=Rg()),n=cr(n,r),n!==null&&(vs(n,r),Yn(n))}function a6(n){var r=n.memoizedState,s=0;r!==null&&(s=r.retryLane),P2(n,s)}function i6(n,r){var s=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(s=h.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(r),P2(n,s)}function r6(n,r){return sd(n,r)}var fc=null,Mr=null,Xf=!1,pc=!1,Wf=!1,Li=0;function Yn(n){n!==Mr&&n.next===null&&(Mr===null?fc=Mr=n:Mr=Mr.next=n),pc=!0,Xf||(Xf=!0,o6())}function ao(n,r){if(!Wf&&pc){Wf=!0;do for(var s=!1,c=fc;c!==null;){if(n!==0){var h=c.pendingLanes;if(h===0)var b=0;else{var w=c.suspendedLanes,T=c.pingedLanes;b=(1<<31-nn(42|n)+1)-1,b&=h&~(w&~T),b=b&201326741?b&201326741|1:b?b|2:0}b!==0&&(s=!0,_2(c,b))}else b=Ae,b=yl(c,c===Ke?b:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(b&3)===0||ys(c,b)||(s=!0,_2(c,b));c=c.next}while(s);Wf=!1}}function s6(){V2()}function V2(){pc=Xf=!1;var n=0;Li!==0&&(m6()&&(n=Li),Li=0);for(var r=Gn(),s=null,c=fc;c!==null;){var h=c.next,b=N2(c,r);b===0?(c.next=null,s===null?fc=h:s.next=h,h===null&&(Mr=s)):(s=c,(n!==0||(b&3)!==0)&&(pc=!0)),c=h}ao(n)}function N2(n,r){for(var s=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,b=n.pendingLanes&-62914561;0<b;){var w=31-nn(b),T=1<<w,P=h[w];P===-1?((T&s)===0||(T&c)!==0)&&(h[w]=Lw(T,r)):P<=r&&(n.expiredLanes|=T),b&=~T}if(r=Ke,s=Ae,s=yl(n,n===r?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,s===0||n===r&&(Ne===2||Ne===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&od(c),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||ys(n,s)){if(r=s&-s,r===n.callbackPriority)return r;switch(c!==null&&od(c),ud(s)){case 2:case 8:s=Eg;break;case 32:s=gl;break;case 268435456:s=Mg;break;default:s=gl}return c=B2.bind(null,n),s=sd(s,c),n.callbackPriority=r,n.callbackNode=s,r}return c!==null&&c!==null&&od(c),n.callbackPriority=2,n.callbackNode=null,2}function B2(n,r){if(Et!==0&&Et!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(dc()&&n.callbackNode!==s)return null;var c=Ae;return c=yl(n,n===Ke?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(v2(n,c,r),N2(n,Gn()),n.callbackNode!=null&&n.callbackNode===s?B2.bind(null,n):null)}function _2(n,r){if(dc())return null;v2(n,r,!0)}function o6(){b6(function(){(Ve&6)!==0?sd(Cg,s6):V2()})}function Qf(){return Li===0&&(Li=zg()),Li}function H2(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Tl(""+n)}function $2(n,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,n.id&&s.setAttribute("form",n.id),r.parentNode.insertBefore(s,r),n=new FormData(n),s.parentNode.removeChild(s),n}function l6(n,r,s,c,h){if(r==="submit"&&s&&s.stateNode===h){var b=H2((h[Ut]||null).action),w=c.submitter;w&&(r=(r=w[Ut]||null)?H2(r.formAction):w.getAttribute("formAction"),r!==null&&(b=r,w=null));var T=new El("action","action",null,c,h);n.push({event:T,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Li!==0){var P=w?$2(h,w):new FormData(h);bf(s,{pending:!0,data:P,method:h.method,action:b},null,P)}}else typeof b=="function"&&(T.preventDefault(),P=w?$2(h,w):new FormData(h),bf(s,{pending:!0,data:P,method:h.method,action:b},b,P))},currentTarget:h}]})}}for(var Zf=0;Zf<Pd.length;Zf++){var Jf=Pd[Zf],c6=Jf.toLowerCase(),u6=Jf[0].toUpperCase()+Jf.slice(1);zn(c6,"on"+u6)}zn(v0,"onAnimationEnd"),zn(w0,"onAnimationIteration"),zn(S0,"onAnimationStart"),zn("dblclick","onDoubleClick"),zn("focusin","onFocus"),zn("focusout","onBlur"),zn(CS,"onTransitionRun"),zn(ES,"onTransitionStart"),zn(MS,"onTransitionCancel"),zn(k0,"onTransitionEnd"),Ji("onMouseEnter",["mouseout","mouseover"]),Ji("onMouseLeave",["mouseout","mouseover"]),Ji("onPointerEnter",["pointerout","pointerover"]),Ji("onPointerLeave",["pointerout","pointerover"]),gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gi("onBeforeInput",["compositionend","keypress","textInput","paste"]),gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d6=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(io));function U2(n,r){r=(r&4)!==0;for(var s=0;s<n.length;s++){var c=n[s],h=c.event;c=c.listeners;e:{var b=void 0;if(r)for(var w=c.length-1;0<=w;w--){var T=c[w],P=T.instance,F=T.currentTarget;if(T=T.listener,P!==b&&h.isPropagationStopped())break e;b=T,h.currentTarget=F;try{b(h)}catch(W){ec(W)}h.currentTarget=null,b=P}else for(w=0;w<c.length;w++){if(T=c[w],P=T.instance,F=T.currentTarget,T=T.listener,P!==b&&h.isPropagationStopped())break e;b=T,h.currentTarget=F;try{b(h)}catch(W){ec(W)}h.currentTarget=null,b=P}}}}function je(n,r){var s=r[dd];s===void 0&&(s=r[dd]=new Set);var c=n+"__bubble";s.has(c)||(G2(r,n,2,!1),s.add(c))}function ep(n,r,s){var c=0;r&&(c|=4),G2(s,n,c,r)}var hc="_reactListening"+Math.random().toString(36).slice(2);function tp(n){if(!n[hc]){n[hc]=!0,Vg.forEach(function(s){s!=="selectionchange"&&(d6.has(s)||ep(s,!1,n),ep(s,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[hc]||(r[hc]=!0,ep("selectionchange",!1,r))}}function G2(n,r,s,c){switch(pb(r)){case 2:var h=B6;break;case 8:h=_6;break;default:h=mp}s=h.bind(null,r,s,n),h=void 0,!Sd||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(r,s,{capture:!0,passive:h}):n.addEventListener(r,s,!0):h!==void 0?n.addEventListener(r,s,{passive:h}):n.addEventListener(r,s,!1)}function np(n,r,s,c,h){var b=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var T=c.stateNode.containerInfo;if(T===h)break;if(w===4)for(w=c.return;w!==null;){var P=w.tag;if((P===3||P===4)&&w.stateNode.containerInfo===h)return;w=w.return}for(;T!==null;){if(w=Wi(T),w===null)return;if(P=w.tag,P===5||P===6||P===26||P===27){c=b=w;continue e}T=T.parentNode}}c=c.return}Wg(function(){var F=b,W=vd(s),ee=[];e:{var q=T0.get(n);if(q!==void 0){var K=El,he=n;switch(n){case"keypress":if(Al(s)===0)break e;case"keydown":case"keyup":K=rS;break;case"focusin":he="focus",K=Ad;break;case"focusout":he="blur",K=Ad;break;case"beforeblur":case"afterblur":K=Ad;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=Jg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=Kw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=lS;break;case v0:case w0:case S0:K=Ww;break;case k0:K=uS;break;case"scroll":case"scrollend":K=Fw;break;case"wheel":K=fS;break;case"copy":case"cut":case"paste":K=Zw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=t0;break;case"toggle":case"beforetoggle":K=hS}var fe=(r&4)!==0,$e=!fe&&(n==="scroll"||n==="scrollend"),U=fe?q!==null?q+"Capture":null:q;fe=[];for(var _=F,I;_!==null;){var Q=_;if(I=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||I===null||U===null||(Q=ks(_,U),Q!=null&&fe.push(ro(_,Q,I))),$e)break;_=_.return}0<fe.length&&(q=new K(q,he,null,s,W),ee.push({event:q,listeners:fe}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",K=n==="mouseout"||n==="pointerout",q&&s!==yd&&(he=s.relatedTarget||s.fromElement)&&(Wi(he)||he[Xi]))break e;if((K||q)&&(q=W.window===W?W:(q=W.ownerDocument)?q.defaultView||q.parentWindow:window,K?(he=s.relatedTarget||s.toElement,K=F,he=he?Wi(he):null,he!==null&&($e=l(he),fe=he.tag,he!==$e||fe!==5&&fe!==27&&fe!==6)&&(he=null)):(K=null,he=F),K!==he)){if(fe=Jg,Q="onMouseLeave",U="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(fe=t0,Q="onPointerLeave",U="onPointerEnter",_="pointer"),$e=K==null?q:Ss(K),I=he==null?q:Ss(he),q=new fe(Q,_+"leave",K,s,W),q.target=$e,q.relatedTarget=I,Q=null,Wi(W)===F&&(fe=new fe(U,_+"enter",he,s,W),fe.target=I,fe.relatedTarget=$e,Q=fe),$e=Q,K&&he)t:{for(fe=K,U=he,_=0,I=fe;I;I=zr(I))_++;for(I=0,Q=U;Q;Q=zr(Q))I++;for(;0<_-I;)fe=zr(fe),_--;for(;0<I-_;)U=zr(U),I--;for(;_--;){if(fe===U||U!==null&&fe===U.alternate)break t;fe=zr(fe),U=zr(U)}fe=null}else fe=null;K!==null&&I2(ee,q,K,fe,!1),he!==null&&$e!==null&&I2(ee,$e,he,fe,!0)}}e:{if(q=F?Ss(F):window,K=q.nodeName&&q.nodeName.toLowerCase(),K==="select"||K==="input"&&q.type==="file")var re=c0;else if(o0(q))if(u0)re=TS;else{re=SS;var ke=wS}else K=q.nodeName,!K||K.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?F&&xd(F.elementType)&&(re=c0):re=kS;if(re&&(re=re(n,F))){l0(ee,re,s,W);break e}ke&&ke(n,q,F),n==="focusout"&&F&&q.type==="number"&&F.memoizedProps.value!=null&&bd(q,"number",q.value)}switch(ke=F?Ss(F):window,n){case"focusin":(o0(ke)||ke.contentEditable==="true")&&(sr=ke,Ld=F,Rs=null);break;case"focusout":Rs=Ld=sr=null;break;case"mousedown":Od=!0;break;case"contextmenu":case"mouseup":case"dragend":Od=!1,x0(ee,s,W);break;case"selectionchange":if(AS)break;case"keydown":case"keyup":x0(ee,s,W)}var ue;if(Ed)e:{switch(n){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else rr?r0(n,s)&&(pe="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(pe="onCompositionStart");pe&&(n0&&s.locale!=="ko"&&(rr||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&rr&&(ue=Qg()):(Na=W,kd="value"in Na?Na.value:Na.textContent,rr=!0)),ke=mc(F,pe),0<ke.length&&(pe=new e0(pe,n,null,s,W),ee.push({event:pe,listeners:ke}),ue?pe.data=ue:(ue=s0(s),ue!==null&&(pe.data=ue)))),(ue=gS?bS(n,s):xS(n,s))&&(pe=mc(F,"onBeforeInput"),0<pe.length&&(ke=new e0("onBeforeInput","beforeinput",null,s,W),ee.push({event:ke,listeners:pe}),ke.data=ue)),l6(ee,n,F,s,W)}U2(ee,r)})}function ro(n,r,s){return{instance:n,listener:r,currentTarget:s}}function mc(n,r){for(var s=r+"Capture",c=[];n!==null;){var h=n,b=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||b===null||(h=ks(n,s),h!=null&&c.unshift(ro(n,h,b)),h=ks(n,r),h!=null&&c.push(ro(n,h,b))),n.tag===3)return c;n=n.return}return[]}function zr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function I2(n,r,s,c,h){for(var b=r._reactName,w=[];s!==null&&s!==c;){var T=s,P=T.alternate,F=T.stateNode;if(T=T.tag,P!==null&&P===c)break;T!==5&&T!==26&&T!==27||F===null||(P=F,h?(F=ks(s,b),F!=null&&w.unshift(ro(s,F,P))):h||(F=ks(s,b),F!=null&&w.push(ro(s,F,P)))),s=s.return}w.length!==0&&n.push({event:r,listeners:w})}var f6=/\r\n?/g,p6=/\u0000|\uFFFD/g;function F2(n){return(typeof n=="string"?n:""+n).replace(f6,`
`).replace(p6,"")}function q2(n,r){return r=F2(r),F2(n)===r}function gc(){}function He(n,r,s,c,h,b){switch(s){case"children":typeof c=="string"?r==="body"||r==="textarea"&&c===""||nr(n,c):(typeof c=="number"||typeof c=="bigint")&&r!=="body"&&nr(n,""+c);break;case"className":wl(n,"class",c);break;case"tabIndex":wl(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":wl(n,s,c);break;case"style":Yg(n,c,b);break;case"data":if(r!=="object"){wl(n,"data",c);break}case"src":case"href":if(c===""&&(r!=="a"||s!=="href")){n.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=Tl(""+c),n.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof b=="function"&&(s==="formAction"?(r!=="input"&&He(n,r,"name",h.name,h,null),He(n,r,"formEncType",h.formEncType,h,null),He(n,r,"formMethod",h.formMethod,h,null),He(n,r,"formTarget",h.formTarget,h,null)):(He(n,r,"encType",h.encType,h,null),He(n,r,"method",h.method,h,null),He(n,r,"target",h.target,h,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=Tl(""+c),n.setAttribute(s,c);break;case"onClick":c!=null&&(n.onclick=gc);break;case"onScroll":c!=null&&je("scroll",n);break;case"onScrollEnd":c!=null&&je("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(i(60));n.innerHTML=s}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}s=Tl(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""+c):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":c===!0?n.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,c):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(s,c):n.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(s):n.setAttribute(s,c);break;case"popover":je("beforetoggle",n),je("toggle",n),vl(n,"popover",c);break;case"xlinkActuate":fa(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":fa(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":fa(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":fa(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":fa(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":fa(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":fa(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":fa(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":fa(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":vl(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Gw.get(s)||s,vl(n,s,c))}}function ap(n,r,s,c,h,b){switch(s){case"style":Yg(n,c,b);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(i(60));n.innerHTML=s}}break;case"children":typeof c=="string"?nr(n,c):(typeof c=="number"||typeof c=="bigint")&&nr(n,""+c);break;case"onScroll":c!=null&&je("scroll",n);break;case"onScrollEnd":c!=null&&je("scrollend",n);break;case"onClick":c!=null&&(n.onclick=gc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ng.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),r=s.slice(2,h?s.length-7:void 0),b=n[Ut]||null,b=b!=null?b[s]:null,typeof b=="function"&&n.removeEventListener(r,b,h),typeof c=="function")){typeof b!="function"&&b!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(r,c,h);break e}s in n?n[s]=c:c===!0?n.setAttribute(s,""):vl(n,s,c)}}}function Mt(n,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":je("error",n),je("load",n);var c=!1,h=!1,b;for(b in s)if(s.hasOwnProperty(b)){var w=s[b];if(w!=null)switch(b){case"src":c=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:He(n,r,b,w,s,null)}}h&&He(n,r,"srcSet",s.srcSet,s,null),c&&He(n,r,"src",s.src,s,null);return;case"input":je("invalid",n);var T=b=w=h=null,P=null,F=null;for(c in s)if(s.hasOwnProperty(c)){var W=s[c];if(W!=null)switch(c){case"name":h=W;break;case"type":w=W;break;case"checked":P=W;break;case"defaultChecked":F=W;break;case"value":b=W;break;case"defaultValue":T=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(i(137,r));break;default:He(n,r,c,W,s,null)}}Ig(n,b,T,P,F,w,h,!1),Sl(n);return;case"select":je("invalid",n),c=w=b=null;for(h in s)if(s.hasOwnProperty(h)&&(T=s[h],T!=null))switch(h){case"value":b=T;break;case"defaultValue":w=T;break;case"multiple":c=T;default:He(n,r,h,T,s,null)}r=b,s=w,n.multiple=!!c,r!=null?tr(n,!!c,r,!1):s!=null&&tr(n,!!c,s,!0);return;case"textarea":je("invalid",n),b=h=c=null;for(w in s)if(s.hasOwnProperty(w)&&(T=s[w],T!=null))switch(w){case"value":c=T;break;case"defaultValue":h=T;break;case"children":b=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(i(91));break;default:He(n,r,w,T,s,null)}qg(n,c,h,b),Sl(n);return;case"option":for(P in s)if(s.hasOwnProperty(P)&&(c=s[P],c!=null))switch(P){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:He(n,r,P,c,s,null)}return;case"dialog":je("beforetoggle",n),je("toggle",n),je("cancel",n),je("close",n);break;case"iframe":case"object":je("load",n);break;case"video":case"audio":for(c=0;c<io.length;c++)je(io[c],n);break;case"image":je("error",n),je("load",n);break;case"details":je("toggle",n);break;case"embed":case"source":case"link":je("error",n),je("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(F in s)if(s.hasOwnProperty(F)&&(c=s[F],c!=null))switch(F){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:He(n,r,F,c,s,null)}return;default:if(xd(r)){for(W in s)s.hasOwnProperty(W)&&(c=s[W],c!==void 0&&ap(n,r,W,c,s,void 0));return}}for(T in s)s.hasOwnProperty(T)&&(c=s[T],c!=null&&He(n,r,T,c,s,null))}function h6(n,r,s,c){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,b=null,w=null,T=null,P=null,F=null,W=null;for(K in s){var ee=s[K];if(s.hasOwnProperty(K)&&ee!=null)switch(K){case"checked":break;case"value":break;case"defaultValue":P=ee;default:c.hasOwnProperty(K)||He(n,r,K,null,c,ee)}}for(var q in c){var K=c[q];if(ee=s[q],c.hasOwnProperty(q)&&(K!=null||ee!=null))switch(q){case"type":b=K;break;case"name":h=K;break;case"checked":F=K;break;case"defaultChecked":W=K;break;case"value":w=K;break;case"defaultValue":T=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(i(137,r));break;default:K!==ee&&He(n,r,q,K,c,ee)}}gd(n,w,T,P,F,W,b,h);return;case"select":K=w=T=q=null;for(b in s)if(P=s[b],s.hasOwnProperty(b)&&P!=null)switch(b){case"value":break;case"multiple":K=P;default:c.hasOwnProperty(b)||He(n,r,b,null,c,P)}for(h in c)if(b=c[h],P=s[h],c.hasOwnProperty(h)&&(b!=null||P!=null))switch(h){case"value":q=b;break;case"defaultValue":T=b;break;case"multiple":w=b;default:b!==P&&He(n,r,h,b,c,P)}r=T,s=w,c=K,q!=null?tr(n,!!s,q,!1):!!c!=!!s&&(r!=null?tr(n,!!s,r,!0):tr(n,!!s,s?[]:"",!1));return;case"textarea":K=q=null;for(T in s)if(h=s[T],s.hasOwnProperty(T)&&h!=null&&!c.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:He(n,r,T,null,c,h)}for(w in c)if(h=c[w],b=s[w],c.hasOwnProperty(w)&&(h!=null||b!=null))switch(w){case"value":q=h;break;case"defaultValue":K=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(i(91));break;default:h!==b&&He(n,r,w,h,c,b)}Fg(n,q,K);return;case"option":for(var he in s)if(q=s[he],s.hasOwnProperty(he)&&q!=null&&!c.hasOwnProperty(he))switch(he){case"selected":n.selected=!1;break;default:He(n,r,he,null,c,q)}for(P in c)if(q=c[P],K=s[P],c.hasOwnProperty(P)&&q!==K&&(q!=null||K!=null))switch(P){case"selected":n.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:He(n,r,P,q,c,K)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in s)q=s[fe],s.hasOwnProperty(fe)&&q!=null&&!c.hasOwnProperty(fe)&&He(n,r,fe,null,c,q);for(F in c)if(q=c[F],K=s[F],c.hasOwnProperty(F)&&q!==K&&(q!=null||K!=null))switch(F){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(i(137,r));break;default:He(n,r,F,q,c,K)}return;default:if(xd(r)){for(var $e in s)q=s[$e],s.hasOwnProperty($e)&&q!==void 0&&!c.hasOwnProperty($e)&&ap(n,r,$e,void 0,c,q);for(W in c)q=c[W],K=s[W],!c.hasOwnProperty(W)||q===K||q===void 0&&K===void 0||ap(n,r,W,q,c,K);return}}for(var U in s)q=s[U],s.hasOwnProperty(U)&&q!=null&&!c.hasOwnProperty(U)&&He(n,r,U,null,c,q);for(ee in c)q=c[ee],K=s[ee],!c.hasOwnProperty(ee)||q===K||q==null&&K==null||He(n,r,ee,q,c,K)}var ip=null,rp=null;function bc(n){return n.nodeType===9?n:n.ownerDocument}function K2(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Y2(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function sp(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var op=null;function m6(){var n=window.event;return n&&n.type==="popstate"?n===op?!1:(op=n,!0):(op=null,!1)}var X2=typeof setTimeout=="function"?setTimeout:void 0,g6=typeof clearTimeout=="function"?clearTimeout:void 0,W2=typeof Promise=="function"?Promise:void 0,b6=typeof queueMicrotask=="function"?queueMicrotask:typeof W2<"u"?function(n){return W2.resolve(null).then(n).catch(x6)}:X2;function x6(n){setTimeout(function(){throw n})}function Ja(n){return n==="head"}function Q2(n,r){var s=r,c=0,h=0;do{var b=s.nextSibling;if(n.removeChild(s),b&&b.nodeType===8)if(s=b.data,s==="/$"){if(0<c&&8>c){s=c;var w=n.ownerDocument;if(s&1&&so(w.documentElement),s&2&&so(w.body),s&4)for(s=w.head,so(s),w=s.firstChild;w;){var T=w.nextSibling,P=w.nodeName;w[ws]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&w.rel.toLowerCase()==="stylesheet"||s.removeChild(w),w=T}}if(h===0){n.removeChild(b),mo(r);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:c=s.charCodeAt(0)-48;else c=0;s=b}while(s);mo(r)}function lp(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":lp(s),fd(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function y6(n,r,s,c){for(;n.nodeType===1;){var h=s;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[ws])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(b=n.getAttribute("rel"),b==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(b!==h.rel||n.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(b=n.getAttribute("src"),(b!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&b&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var b=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===b)return n}else return n;if(n=Ln(n.nextSibling),n===null)break}return null}function v6(n,r,s){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=Ln(n.nextSibling),n===null))return null;return n}function cp(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function w6(n,r){var s=n.ownerDocument;if(n.data!=="$?"||s.readyState==="complete")r();else{var c=function(){r(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function Ln(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}var up=null;function Z2(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return n;r--}else s==="/$"&&r++}n=n.previousSibling}return null}function J2(n,r,s){switch(r=bc(s),n){case"html":if(n=r.documentElement,!n)throw Error(i(452));return n;case"head":if(n=r.head,!n)throw Error(i(453));return n;case"body":if(n=r.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function so(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);fd(n)}var An=new Map,eb=new Set;function xc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Aa=B.d;B.d={f:S6,r:k6,D:T6,C:j6,L:A6,m:C6,X:M6,S:E6,M:z6};function S6(){var n=Aa.f(),r=cc();return n||r}function k6(n){var r=Qi(n);r!==null&&r.tag===5&&r.type==="form"?v1(r):Aa.r(n)}var Rr=typeof document>"u"?null:document;function tb(n,r,s){var c=Rr;if(c&&typeof r=="string"&&r){var h=yn(r);h='link[rel="'+n+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),eb.has(h)||(eb.add(h),n={rel:n,crossOrigin:s,href:r},c.querySelector(h)===null&&(r=c.createElement("link"),Mt(r,"link",n),xt(r),c.head.appendChild(r)))}}function T6(n){Aa.D(n),tb("dns-prefetch",n,null)}function j6(n,r){Aa.C(n,r),tb("preconnect",n,r)}function A6(n,r,s){Aa.L(n,r,s);var c=Rr;if(c&&n&&r){var h='link[rel="preload"][as="'+yn(r)+'"]';r==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+yn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+yn(s.imageSizes)+'"]')):h+='[href="'+yn(n)+'"]';var b=h;switch(r){case"style":b=Lr(n);break;case"script":b=Or(n)}An.has(b)||(n=g({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:n,as:r},s),An.set(b,n),c.querySelector(h)!==null||r==="style"&&c.querySelector(oo(b))||r==="script"&&c.querySelector(lo(b))||(r=c.createElement("link"),Mt(r,"link",n),xt(r),c.head.appendChild(r)))}}function C6(n,r){Aa.m(n,r);var s=Rr;if(s&&n){var c=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+yn(c)+'"][href="'+yn(n)+'"]',b=h;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":b=Or(n)}if(!An.has(b)&&(n=g({rel:"modulepreload",href:n},r),An.set(b,n),s.querySelector(h)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(lo(b)))return}c=s.createElement("link"),Mt(c,"link",n),xt(c),s.head.appendChild(c)}}}function E6(n,r,s){Aa.S(n,r,s);var c=Rr;if(c&&n){var h=Zi(c).hoistableStyles,b=Lr(n);r=r||"default";var w=h.get(b);if(!w){var T={loading:0,preload:null};if(w=c.querySelector(oo(b)))T.loading=5;else{n=g({rel:"stylesheet",href:n,"data-precedence":r},s),(s=An.get(b))&&dp(n,s);var P=w=c.createElement("link");xt(P),Mt(P,"link",n),P._p=new Promise(function(F,W){P.onload=F,P.onerror=W}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,yc(w,r,c)}w={type:"stylesheet",instance:w,count:1,state:T},h.set(b,w)}}}function M6(n,r){Aa.X(n,r);var s=Rr;if(s&&n){var c=Zi(s).hoistableScripts,h=Or(n),b=c.get(h);b||(b=s.querySelector(lo(h)),b||(n=g({src:n,async:!0},r),(r=An.get(h))&&fp(n,r),b=s.createElement("script"),xt(b),Mt(b,"link",n),s.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},c.set(h,b))}}function z6(n,r){Aa.M(n,r);var s=Rr;if(s&&n){var c=Zi(s).hoistableScripts,h=Or(n),b=c.get(h);b||(b=s.querySelector(lo(h)),b||(n=g({src:n,async:!0,type:"module"},r),(r=An.get(h))&&fp(n,r),b=s.createElement("script"),xt(b),Mt(b,"link",n),s.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},c.set(h,b))}}function nb(n,r,s,c){var h=(h=de.current)?xc(h):null;if(!h)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=Lr(s.href),s=Zi(h).hoistableStyles,c=s.get(r),c||(c={type:"style",instance:null,count:0,state:null},s.set(r,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=Lr(s.href);var b=Zi(h).hoistableStyles,w=b.get(n);if(w||(h=h.ownerDocument||h,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},b.set(n,w),(b=h.querySelector(oo(n)))&&!b._p&&(w.instance=b,w.state.loading=5),An.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},An.set(n,s),b||R6(h,n,s,w.state))),r&&c===null)throw Error(i(528,""));return w}if(r&&c!==null)throw Error(i(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Or(s),s=Zi(h).hoistableScripts,c=s.get(r),c||(c={type:"script",instance:null,count:0,state:null},s.set(r,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function Lr(n){return'href="'+yn(n)+'"'}function oo(n){return'link[rel="stylesheet"]['+n+"]"}function ab(n){return g({},n,{"data-precedence":n.precedence,precedence:null})}function R6(n,r,s,c){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?c.loading=1:(r=n.createElement("link"),c.preload=r,r.addEventListener("load",function(){return c.loading|=1}),r.addEventListener("error",function(){return c.loading|=2}),Mt(r,"link",s),xt(r),n.head.appendChild(r))}function Or(n){return'[src="'+yn(n)+'"]'}function lo(n){return"script[async]"+n}function ib(n,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var c=n.querySelector('style[data-href~="'+yn(s.href)+'"]');if(c)return r.instance=c,xt(c),c;var h=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),xt(c),Mt(c,"style",h),yc(c,s.precedence,n),r.instance=c;case"stylesheet":h=Lr(s.href);var b=n.querySelector(oo(h));if(b)return r.state.loading|=4,r.instance=b,xt(b),b;c=ab(s),(h=An.get(h))&&dp(c,h),b=(n.ownerDocument||n).createElement("link"),xt(b);var w=b;return w._p=new Promise(function(T,P){w.onload=T,w.onerror=P}),Mt(b,"link",c),r.state.loading|=4,yc(b,s.precedence,n),r.instance=b;case"script":return b=Or(s.src),(h=n.querySelector(lo(b)))?(r.instance=h,xt(h),h):(c=s,(h=An.get(b))&&(c=g({},s),fp(c,h)),n=n.ownerDocument||n,h=n.createElement("script"),xt(h),Mt(h,"link",c),n.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(i(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(c=r.instance,r.state.loading|=4,yc(c,s.precedence,n));return r.instance}function yc(n,r,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=c.length?c[c.length-1]:null,b=h,w=0;w<c.length;w++){var T=c[w];if(T.dataset.precedence===r)b=T;else if(b!==h)break}b?b.parentNode.insertBefore(n,b.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(n,r.firstChild))}function dp(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function fp(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var vc=null;function rb(n,r,s){if(vc===null){var c=new Map,h=vc=new Map;h.set(s,c)}else h=vc,c=h.get(s),c||(c=new Map,h.set(s,c));if(c.has(n))return c;for(c.set(n,null),s=s.getElementsByTagName(n),h=0;h<s.length;h++){var b=s[h];if(!(b[ws]||b[Ot]||n==="link"&&b.getAttribute("rel")==="stylesheet")&&b.namespaceURI!=="http://www.w3.org/2000/svg"){var w=b.getAttribute(r)||"";w=n+w;var T=c.get(w);T?T.push(b):c.set(w,[b])}}return c}function sb(n,r,s){n=n.ownerDocument||n,n.head.insertBefore(s,r==="title"?n.querySelector("head > title"):null)}function L6(n,r,s){if(s===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function ob(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var co=null;function O6(){}function D6(n,r,s){if(co===null)throw Error(i(475));var c=co;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=Lr(s.href),b=n.querySelector(oo(h));if(b){n=b._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=wc.bind(c),n.then(c,c)),r.state.loading|=4,r.instance=b,xt(b);return}b=n.ownerDocument||n,s=ab(s),(h=An.get(h))&&dp(s,h),b=b.createElement("link"),xt(b);var w=b;w._p=new Promise(function(T,P){w.onload=T,w.onerror=P}),Mt(b,"link",s),r.instance=b}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(c.count++,r=wc.bind(c),n.addEventListener("load",r),n.addEventListener("error",r))}}function P6(){if(co===null)throw Error(i(475));var n=co;return n.stylesheets&&n.count===0&&pp(n,n.stylesheets),0<n.count?function(r){var s=setTimeout(function(){if(n.stylesheets&&pp(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(s)}}:null}function wc(){if(this.count--,this.count===0){if(this.stylesheets)pp(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Sc=null;function pp(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Sc=new Map,r.forEach(V6,n),Sc=null,wc.call(n))}function V6(n,r){if(!(r.state.loading&4)){var s=Sc.get(n);if(s)var c=s.get(null);else{s=new Map,Sc.set(n,s);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),b=0;b<h.length;b++){var w=h[b];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(s.set(w.dataset.precedence,w),c=w)}c&&s.set(null,c)}h=r.instance,w=h.getAttribute("data-precedence"),b=s.get(w)||c,b===c&&s.set(null,h),s.set(w,h),this.count++,c=wc.bind(this),h.addEventListener("load",c),h.addEventListener("error",c),b?b.parentNode.insertBefore(h,b.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),r.state.loading|=4}}var uo={$$typeof:A,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function N6(n,r,s,c,h,b,w,T){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ld(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ld(0),this.hiddenUpdates=ld(null),this.identifierPrefix=c,this.onUncaughtError=h,this.onCaughtError=b,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function lb(n,r,s,c,h,b,w,T,P,F,W,ee){return n=new N6(n,r,s,w,T,P,F,ee),r=1,b===!0&&(r|=24),b=rn(3,null,null,r),n.current=b,b.stateNode=n,r=Kd(),r.refCount++,n.pooledCache=r,r.refCount++,b.memoizedState={element:c,isDehydrated:s,cache:r},Qd(b),n}function cb(n){return n?(n=ur,n):ur}function ub(n,r,s,c,h,b){h=cb(h),c.context===null?c.context=h:c.pendingContext=h,c=Ha(r),c.payload={element:s},b=b===void 0?null:b,b!==null&&(c.callback=b),s=$a(n,c,r),s!==null&&(un(s,n,r),Hs(s,n,r))}function db(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<r?s:r}}function hp(n,r){db(n,r),(n=n.alternate)&&db(n,r)}function fb(n){if(n.tag===13){var r=cr(n,67108864);r!==null&&un(r,n,67108864),hp(n,67108864)}}var kc=!0;function B6(n,r,s,c){var h=D.T;D.T=null;var b=B.p;try{B.p=2,mp(n,r,s,c)}finally{B.p=b,D.T=h}}function _6(n,r,s,c){var h=D.T;D.T=null;var b=B.p;try{B.p=8,mp(n,r,s,c)}finally{B.p=b,D.T=h}}function mp(n,r,s,c){if(kc){var h=gp(c);if(h===null)np(n,r,c,Tc,s),hb(n,c);else if($6(h,n,r,s,c))c.stopPropagation();else if(hb(n,c),r&4&&-1<H6.indexOf(n)){for(;h!==null;){var b=Qi(h);if(b!==null)switch(b.tag){case 3:if(b=b.stateNode,b.current.memoizedState.isDehydrated){var w=mi(b.pendingLanes);if(w!==0){var T=b;for(T.pendingLanes|=2,T.entangledLanes|=2;w;){var P=1<<31-nn(w);T.entanglements[1]|=P,w&=~P}Yn(b),(Ve&6)===0&&(oc=Gn()+500,ao(0))}}break;case 13:T=cr(b,2),T!==null&&un(T,b,2),cc(),hp(b,2)}if(b=gp(c),b===null&&np(n,r,c,Tc,s),b===h)break;h=b}h!==null&&c.stopPropagation()}else np(n,r,c,null,s)}}function gp(n){return n=vd(n),bp(n)}var Tc=null;function bp(n){if(Tc=null,n=Wi(n),n!==null){var r=l(n);if(r===null)n=null;else{var s=r.tag;if(s===13){if(n=u(r),n!==null)return n;n=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return Tc=n,null}function pb(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jw()){case Cg:return 2;case Eg:return 8;case gl:case Aw:return 32;case Mg:return 268435456;default:return 32}default:return 32}}var xp=!1,ei=null,ti=null,ni=null,fo=new Map,po=new Map,ai=[],H6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hb(n,r){switch(n){case"focusin":case"focusout":ei=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":ni=null;break;case"pointerover":case"pointerout":fo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(r.pointerId)}}function ho(n,r,s,c,h,b){return n===null||n.nativeEvent!==b?(n={blockedOn:r,domEventName:s,eventSystemFlags:c,nativeEvent:b,targetContainers:[h]},r!==null&&(r=Qi(r),r!==null&&fb(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function $6(n,r,s,c,h){switch(r){case"focusin":return ei=ho(ei,n,r,s,c,h),!0;case"dragenter":return ti=ho(ti,n,r,s,c,h),!0;case"mouseover":return ni=ho(ni,n,r,s,c,h),!0;case"pointerover":var b=h.pointerId;return fo.set(b,ho(fo.get(b)||null,n,r,s,c,h)),!0;case"gotpointercapture":return b=h.pointerId,po.set(b,ho(po.get(b)||null,n,r,s,c,h)),!0}return!1}function mb(n){var r=Wi(n.target);if(r!==null){var s=l(r);if(s!==null){if(r=s.tag,r===13){if(r=u(s),r!==null){n.blockedOn=r,Dw(n.priority,function(){if(s.tag===13){var c=cn();c=cd(c);var h=cr(s,c);h!==null&&un(h,s,c),hp(s,c)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function jc(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var s=gp(n.nativeEvent);if(s===null){s=n.nativeEvent;var c=new s.constructor(s.type,s);yd=c,s.target.dispatchEvent(c),yd=null}else return r=Qi(s),r!==null&&fb(r),n.blockedOn=s,!1;r.shift()}return!0}function gb(n,r,s){jc(n)&&s.delete(r)}function U6(){xp=!1,ei!==null&&jc(ei)&&(ei=null),ti!==null&&jc(ti)&&(ti=null),ni!==null&&jc(ni)&&(ni=null),fo.forEach(gb),po.forEach(gb)}function Ac(n,r){n.blockedOn===r&&(n.blockedOn=null,xp||(xp=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,U6)))}var Cc=null;function bb(n){Cc!==n&&(Cc=n,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Cc===n&&(Cc=null);for(var r=0;r<n.length;r+=3){var s=n[r],c=n[r+1],h=n[r+2];if(typeof c!="function"){if(bp(c||s)===null)continue;break}var b=Qi(s);b!==null&&(n.splice(r,3),r-=3,bf(b,{pending:!0,data:h,method:s.method,action:c},c,h))}}))}function mo(n){function r(P){return Ac(P,n)}ei!==null&&Ac(ei,n),ti!==null&&Ac(ti,n),ni!==null&&Ac(ni,n),fo.forEach(r),po.forEach(r);for(var s=0;s<ai.length;s++){var c=ai[s];c.blockedOn===n&&(c.blockedOn=null)}for(;0<ai.length&&(s=ai[0],s.blockedOn===null);)mb(s),s.blockedOn===null&&ai.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var h=s[c],b=s[c+1],w=h[Ut]||null;if(typeof b=="function")w||bb(s);else if(w){var T=null;if(b&&b.hasAttribute("formAction")){if(h=b,w=b[Ut]||null)T=w.formAction;else if(bp(h)!==null)continue}else T=w.action;typeof T=="function"?s[c+1]=T:(s.splice(c,3),c-=3),bb(s)}}}function yp(n){this._internalRoot=n}Ec.prototype.render=yp.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(i(409));var s=r.current,c=cn();ub(s,c,n,r,null,null)},Ec.prototype.unmount=yp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;ub(n.current,2,null,n,null,null),cc(),r[Xi]=null}};function Ec(n){this._internalRoot=n}Ec.prototype.unstable_scheduleHydration=function(n){if(n){var r=Dg();n={blockedOn:null,target:n,priority:r};for(var s=0;s<ai.length&&r!==0&&r<ai[s].priority;s++);ai.splice(s,0,n),s===0&&mb(n)}};var xb=t.version;if(xb!=="19.1.1")throw Error(i(527,xb,"19.1.1"));B.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=f(r),n=n!==null?m(n):null,n=n===null?null:n.stateNode,n};var G6={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mc.isDisabled&&Mc.supportsFiber)try{xs=Mc.inject(G6),tn=Mc}catch{}}return bo.createRoot=function(n,r){if(!o(n))throw Error(i(299));var s=!1,c="",h=D1,b=P1,w=V1,T=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(b=r.onCaughtError),r.onRecoverableError!==void 0&&(w=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(T=r.unstable_transitionCallbacks)),r=lb(n,1,!1,null,null,s,c,h,b,w,T,null),n[Xi]=r.current,tp(n),new yp(r)},bo.hydrateRoot=function(n,r,s){if(!o(n))throw Error(i(299));var c=!1,h="",b=D1,w=P1,T=V1,P=null,F=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(b=s.onUncaughtError),s.onCaughtError!==void 0&&(w=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(P=s.unstable_transitionCallbacks),s.formState!==void 0&&(F=s.formState)),r=lb(n,1,!0,r,s??null,c,h,b,w,T,P,F),r.context=cb(null),s=r.current,c=cn(),c=cd(c),h=Ha(c),h.callback=null,$a(s,h,c),s=c,r.current.lanes=s,vs(r,s),Yn(r),n[Xi]=r.current,tp(n),new Ec(r)},bo.version="19.1.1",bo}var Eb;function J6(){if(Eb)return wp.exports;Eb=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),wp.exports=Z6(),wp.exports}var e8=J6();const t8=Rv(e8);var j=wm();const Ce=Rv(j),Mb=F6({__proto__:null,default:Ce},[j]);/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var zb="popstate";function n8(e={}){function t(i,o){let{pathname:l,search:u,hash:p}=i.location;return kh("",{pathname:l,search:u,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function a(i,o){return typeof o=="string"?o:Io(o)}return i8(t,a,null,e)}function Je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Nn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function a8(){return Math.random().toString(36).substring(2,10)}function Rb(e,t){return{usr:e.state,key:e.key,idx:t}}function kh(e,t,a=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?cs(t):t,state:a,key:t&&t.key||i||a8()}}function Io({pathname:e="/",search:t="",hash:a=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function cs(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substring(a),e=e.substring(0,a));let i=e.indexOf("?");i>=0&&(t.search=e.substring(i),e=e.substring(0,i)),e&&(t.pathname=e)}return t}function i8(e,t,a,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,u=o.history,p="POP",f=null,m=g();m==null&&(m=0,u.replaceState({...u.state,idx:m},""));function g(){return(u.state||{idx:null}).idx}function x(){p="POP";let C=g(),M=C==null?null:C-m;m=C,f&&f({action:p,location:k.location,delta:M})}function y(C,M){p="PUSH";let z=kh(k.location,C,M);m=g()+1;let A=Rb(z,m),$=k.createHref(z);try{u.pushState(A,"",$)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign($)}l&&f&&f({action:p,location:k.location,delta:1})}function v(C,M){p="REPLACE";let z=kh(k.location,C,M);m=g();let A=Rb(z,m),$=k.createHref(z);u.replaceState(A,"",$),l&&f&&f({action:p,location:k.location,delta:0})}function S(C){return r8(C)}let k={get action(){return p},get location(){return e(o,u)},listen(C){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(zb,x),f=C,()=>{o.removeEventListener(zb,x),f=null}},createHref(C){return t(o,C)},createURL:S,encodeLocation(C){let M=S(C);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:y,replace:v,go(C){return u.go(C)}};return k}function r8(e,t=!1){let a="http://localhost";typeof window<"u"&&(a=window.location.origin!=="null"?window.location.origin:window.location.href),Je(a,"No window.location.(origin|href) available to create URL");let i=typeof e=="string"?e:Io(e);return i=i.replace(/ $/,"%20"),!t&&i.startsWith("//")&&(i=a+i),new URL(i,a)}function Ov(e,t,a="/"){return s8(e,t,a,!1)}function s8(e,t,a,i){let o=typeof t=="string"?cs(t):t,l=La(o.pathname||"/",a);if(l==null)return null;let u=Dv(e);o8(u);let p=null;for(let f=0;p==null&&f<u.length;++f){let m=x8(l);p=g8(u[f],m,i)}return p}function Dv(e,t=[],a=[],i="",o=!1){let l=(u,p,f=o,m)=>{let g={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:p,route:u};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(i)&&f)return;Je(g.relativePath.startsWith(i),`Absolute route path "${g.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(i.length)}let x=Ra([i,g.relativePath]),y=a.concat(g);u.children&&u.children.length>0&&(Je(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Dv(u.children,t,y,x,f)),!(u.path==null&&!u.index)&&t.push({path:x,score:h8(x,u.index),routesMeta:y})};return e.forEach((u,p)=>{var f;if(u.path===""||!((f=u.path)!=null&&f.includes("?")))l(u,p);else for(let m of Pv(u.path))l(u,p,!0,m)}),t}function Pv(e){let t=e.split("/");if(t.length===0)return[];let[a,...i]=t,o=a.endsWith("?"),l=a.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let u=Pv(i.join("/")),p=[];return p.push(...u.map(f=>f===""?l:[l,f].join("/"))),o&&p.push(...u),p.map(f=>e.startsWith("/")&&f===""?"/":f)}function o8(e){e.sort((t,a)=>t.score!==a.score?a.score-t.score:m8(t.routesMeta.map(i=>i.childrenIndex),a.routesMeta.map(i=>i.childrenIndex)))}var l8=/^:[\w-]+$/,c8=3,u8=2,d8=1,f8=10,p8=-2,Lb=e=>e==="*";function h8(e,t){let a=e.split("/"),i=a.length;return a.some(Lb)&&(i+=p8),t&&(i+=u8),a.filter(o=>!Lb(o)).reduce((o,l)=>o+(l8.test(l)?c8:l===""?d8:f8),i)}function m8(e,t){return e.length===t.length&&e.slice(0,-1).every((i,o)=>i===t[o])?e[e.length-1]-t[t.length-1]:0}function g8(e,t,a=!1){let{routesMeta:i}=e,o={},l="/",u=[];for(let p=0;p<i.length;++p){let f=i[p],m=p===i.length-1,g=l==="/"?t:t.slice(l.length)||"/",x=pu({path:f.relativePath,caseSensitive:f.caseSensitive,end:m},g),y=f.route;if(!x&&m&&a&&!i[i.length-1].route.index&&(x=pu({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},g)),!x)return null;Object.assign(o,x.params),u.push({params:o,pathname:Ra([l,x.pathname]),pathnameBase:S8(Ra([l,x.pathnameBase])),route:y}),x.pathnameBase!=="/"&&(l=Ra([l,x.pathnameBase]))}return u}function pu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,i]=b8(e.path,e.caseSensitive,e.end),o=t.match(a);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:i.reduce((m,{paramName:g,isOptional:x},y)=>{if(g==="*"){let S=p[y]||"";u=l.slice(0,l.length-S.length).replace(/(.)\/+$/,"$1")}const v=p[y];return x&&!v?m[g]=void 0:m[g]=(v||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:u,pattern:e}}function b8(e,t=!1,a=!0){Nn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,p,f)=>(i.push({paramName:p,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(i.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),i]}function x8(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Nn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function La(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,i=e.charAt(a);return i&&i!=="/"?null:e.slice(a)||"/"}var y8=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function v8(e,t="/"){let{pathname:a,search:i="",hash:o=""}=typeof e=="string"?cs(e):e,l;return a?(a=a.replace(/\/\/+/g,"/"),a.startsWith("/")?l=Ob(a.substring(1),"/"):l=Ob(a,t)):l=t,{pathname:l,search:k8(i),hash:T8(o)}}function Ob(e,t){let a=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?a.length>1&&a.pop():o!=="."&&a.push(o)}),a.length>1?a.join("/"):"/"}function Ap(e,t,a,i){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function w8(e){return e.filter((t,a)=>a===0||t.route.path&&t.route.path.length>0)}function Sm(e){let t=w8(e);return t.map((a,i)=>i===t.length-1?a.pathname:a.pathnameBase)}function km(e,t,a,i=!1){let o;typeof e=="string"?o=cs(e):(o={...e},Je(!o.pathname||!o.pathname.includes("?"),Ap("?","pathname","search",o)),Je(!o.pathname||!o.pathname.includes("#"),Ap("#","pathname","hash",o)),Je(!o.search||!o.search.includes("#"),Ap("#","search","hash",o)));let l=e===""||o.pathname==="",u=l?"/":o.pathname,p;if(u==null)p=a;else{let x=t.length-1;if(!i&&u.startsWith("..")){let y=u.split("/");for(;y[0]==="..";)y.shift(),x-=1;o.pathname=y.join("/")}p=x>=0?t[x]:"/"}let f=v8(o,p),m=u&&u!=="/"&&u.endsWith("/"),g=(l||u===".")&&a.endsWith("/");return!f.pathname.endsWith("/")&&(m||g)&&(f.pathname+="/"),f}var Ra=e=>e.join("/").replace(/\/\/+/g,"/"),S8=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),k8=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,T8=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,j8=class{constructor(e,t,a,i=!1){this.status=e,this.statusText=t||"",this.internal=i,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function A8(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function C8(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Vv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Nv(e,t){let a=e;if(typeof a!="string"||!y8.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let i=a,o=!1;if(Vv)try{let l=new URL(window.location.href),u=a.startsWith("//")?new URL(l.protocol+a):new URL(a),p=La(u.pathname,t);u.origin===l.origin&&p!=null?a=p+u.search+u.hash:o=!0}catch{Nn(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:o,to:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Bv=["POST","PUT","PATCH","DELETE"];new Set(Bv);var E8=["GET",...Bv];new Set(E8);var us=j.createContext(null);us.displayName="DataRouter";var _u=j.createContext(null);_u.displayName="DataRouterState";var M8=j.createContext(!1),_v=j.createContext({isTransitioning:!1});_v.displayName="ViewTransition";var z8=j.createContext(new Map);z8.displayName="Fetchers";var R8=j.createContext(null);R8.displayName="Await";var mn=j.createContext(null);mn.displayName="Navigation";var sl=j.createContext(null);sl.displayName="Location";var Hn=j.createContext({outlet:null,matches:[],isDataRoute:!1});Hn.displayName="Route";var Tm=j.createContext(null);Tm.displayName="RouteError";var Hv="REACT_ROUTER_ERROR",L8="REDIRECT",O8="ROUTE_ERROR_RESPONSE";function D8(e){if(e.startsWith(`${Hv}:${L8}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function P8(e){if(e.startsWith(`${Hv}:${O8}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new j8(t.status,t.statusText,t.data)}catch{}}function V8(e,{relative:t}={}){Je(ds(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:i}=j.useContext(mn),{hash:o,pathname:l,search:u}=ol(e,{relative:t}),p=l;return a!=="/"&&(p=l==="/"?a:Ra([a,l])),i.createHref({pathname:p,search:u,hash:o})}function ds(){return j.useContext(sl)!=null}function $n(){return Je(ds(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(sl).location}var $v="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Uv(e){j.useContext(mn).static||j.useLayoutEffect(e)}function Gv(){let{isDataRoute:e}=j.useContext(Hn);return e?Q8():N8()}function N8(){Je(ds(),"useNavigate() may be used only in the context of a <Router> component.");let e=j.useContext(us),{basename:t,navigator:a}=j.useContext(mn),{matches:i}=j.useContext(Hn),{pathname:o}=$n(),l=JSON.stringify(Sm(i)),u=j.useRef(!1);return Uv(()=>{u.current=!0}),j.useCallback((f,m={})=>{if(Nn(u.current,$v),!u.current)return;if(typeof f=="number"){a.go(f);return}let g=km(f,JSON.parse(l),o,m.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:Ra([t,g.pathname])),(m.replace?a.replace:a.push)(g,m.state,m)},[t,a,l,o,e])}var B8=j.createContext(null);function _8(e){let t=j.useContext(Hn).outlet;return j.useMemo(()=>t&&j.createElement(B8.Provider,{value:e},t),[t,e])}function ol(e,{relative:t}={}){let{matches:a}=j.useContext(Hn),{pathname:i}=$n(),o=JSON.stringify(Sm(a));return j.useMemo(()=>km(e,JSON.parse(o),i,t==="path"),[e,o,i,t])}function H8(e,t){return Iv(e,t)}function Iv(e,t,a,i,o){var z;Je(ds(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=j.useContext(mn),{matches:u}=j.useContext(Hn),p=u[u.length-1],f=p?p.params:{},m=p?p.pathname:"/",g=p?p.pathnameBase:"/",x=p&&p.route;{let A=x&&x.path||"";qv(m,!x||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let y=$n(),v;if(t){let A=typeof t=="string"?cs(t):t;Je(g==="/"||((z=A.pathname)==null?void 0:z.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${A.pathname}" was given in the \`location\` prop.`),v=A}else v=y;let S=v.pathname||"/",k=S;if(g!=="/"){let A=g.replace(/^\//,"").split("/");k="/"+S.replace(/^\//,"").split("/").slice(A.length).join("/")}let C=Ov(e,{pathname:k});Nn(x||C!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Nn(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=F8(C&&C.map(A=>Object.assign({},A,{params:Object.assign({},f,A.params),pathname:Ra([g,l.encodeLocation?l.encodeLocation(A.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?g:Ra([g,l.encodeLocation?l.encodeLocation(A.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathnameBase])})),u,a,i,o);return t&&M?j.createElement(sl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},M):M}function $8(){let e=W8(),t=A8(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:l},"ErrorBoundary")," or"," ",j.createElement("code",{style:l},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),a?j.createElement("pre",{style:o},a):null,u)}var U8=j.createElement($8,null),Fv=class extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const a=P8(e.digest);a&&(e=a)}let t=e!==void 0?j.createElement(Hn.Provider,{value:this.props.routeContext},j.createElement(Tm.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?j.createElement(G8,{error:e},t):t}};Fv.contextType=M8;var Cp=new WeakMap;function G8({children:e,error:t}){let{basename:a}=j.useContext(mn);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let i=D8(t.digest);if(i){let o=Cp.get(t);if(o)throw o;let l=Nv(i.location,a);if(Vv&&!Cp.get(t))if(l.isExternal||i.reloadDocument)window.location.href=l.absoluteURL||l.to;else{const u=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:i.replace}));throw Cp.set(t,u),u}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l.absoluteURL||l.to}`})}}return e}function I8({routeContext:e,match:t,children:a}){let i=j.useContext(us);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),j.createElement(Hn.Provider,{value:e},a)}function F8(e,t=[],a=null,i=null,o=null){if(e==null){if(!a)return null;if(a.errors)e=a.matches;else if(t.length===0&&!a.initialized&&a.matches.length>0)e=a.matches;else return null}let l=e,u=a==null?void 0:a.errors;if(u!=null){let g=l.findIndex(x=>x.route.id&&(u==null?void 0:u[x.route.id])!==void 0);Je(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,g+1))}let p=!1,f=-1;if(a)for(let g=0;g<l.length;g++){let x=l[g];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(f=g),x.route.id){let{loaderData:y,errors:v}=a,S=x.route.loader&&!y.hasOwnProperty(x.route.id)&&(!v||v[x.route.id]===void 0);if(x.route.lazy||S){p=!0,f>=0?l=l.slice(0,f+1):l=[l[0]];break}}}let m=a&&i?(g,x)=>{var y,v;i(g,{location:a.location,params:((v=(y=a.matches)==null?void 0:y[0])==null?void 0:v.params)??{},unstable_pattern:C8(a.matches),errorInfo:x})}:void 0;return l.reduceRight((g,x,y)=>{let v,S=!1,k=null,C=null;a&&(v=u&&x.route.id?u[x.route.id]:void 0,k=x.route.errorElement||U8,p&&(f<0&&y===0?(qv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,C=null):f===y&&(S=!0,C=x.route.hydrateFallbackElement||null)));let M=t.concat(l.slice(0,y+1)),z=()=>{let A;return v?A=k:S?A=C:x.route.Component?A=j.createElement(x.route.Component,null):x.route.element?A=x.route.element:A=g,j.createElement(I8,{match:x,routeContext:{outlet:g,matches:M,isDataRoute:a!=null},children:A})};return a&&(x.route.ErrorBoundary||x.route.errorElement||y===0)?j.createElement(Fv,{location:a.location,revalidation:a.revalidation,component:k,error:v,children:z(),routeContext:{outlet:null,matches:M,isDataRoute:!0},onError:m}):z()},null)}function jm(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function q8(e){let t=j.useContext(us);return Je(t,jm(e)),t}function K8(e){let t=j.useContext(_u);return Je(t,jm(e)),t}function Y8(e){let t=j.useContext(Hn);return Je(t,jm(e)),t}function Am(e){let t=Y8(e),a=t.matches[t.matches.length-1];return Je(a.route.id,`${e} can only be used on routes that contain a unique "id"`),a.route.id}function X8(){return Am("useRouteId")}function W8(){var i;let e=j.useContext(Tm),t=K8("useRouteError"),a=Am("useRouteError");return e!==void 0?e:(i=t.errors)==null?void 0:i[a]}function Q8(){let{router:e}=q8("useNavigate"),t=Am("useNavigate"),a=j.useRef(!1);return Uv(()=>{a.current=!0}),j.useCallback(async(o,l={})=>{Nn(a.current,$v),a.current&&(typeof o=="number"?await e.navigate(o):await e.navigate(o,{fromRouteId:t,...l}))},[e,t])}var Db={};function qv(e,t,a){!t&&!Db[e]&&(Db[e]=!0,Nn(!1,a))}j.memo(Z8);function Z8({routes:e,future:t,state:a,onError:i}){return Iv(e,void 0,a,i,t)}function J8({to:e,replace:t,state:a,relative:i}){Je(ds(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=j.useContext(mn);Nn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=j.useContext(Hn),{pathname:u}=$n(),p=Gv(),f=km(e,Sm(l),u,i==="path"),m=JSON.stringify(f);return j.useEffect(()=>{p(JSON.parse(m),{replace:t,state:a,relative:i})},[p,m,i,t,a]),null}function ek(e){return _8(e.context)}function kt(e){Je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function tk({basename:e="/",children:t=null,location:a,navigationType:i="POP",navigator:o,static:l=!1,unstable_useTransitions:u}){Je(!ds(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=e.replace(/^\/*/,"/"),f=j.useMemo(()=>({basename:p,navigator:o,static:l,unstable_useTransitions:u,future:{}}),[p,o,l,u]);typeof a=="string"&&(a=cs(a));let{pathname:m="/",search:g="",hash:x="",state:y=null,key:v="default"}=a,S=j.useMemo(()=>{let k=La(m,p);return k==null?null:{location:{pathname:k,search:g,hash:x,state:y,key:v},navigationType:i}},[p,m,g,x,y,v,i]);return Nn(S!=null,`<Router basename="${p}"> is not able to match the URL "${m}${g}${x}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:j.createElement(mn.Provider,{value:f},j.createElement(sl.Provider,{children:t,value:S}))}function nk({children:e,location:t}){return H8(Th(e),t)}function Th(e,t=[]){let a=[];return j.Children.forEach(e,(i,o)=>{if(!j.isValidElement(i))return;let l=[...t,o];if(i.type===j.Fragment){a.push.apply(a,Th(i.props.children,l));return}Je(i.type===kt,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Je(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=Th(i.props.children,l)),a.push(u)}),a}var Xc="get",Wc="application/x-www-form-urlencoded";function Hu(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function ak(e){return Hu(e)&&e.tagName.toLowerCase()==="button"}function ik(e){return Hu(e)&&e.tagName.toLowerCase()==="form"}function rk(e){return Hu(e)&&e.tagName.toLowerCase()==="input"}function sk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ok(e,t){return e.button===0&&(!t||t==="_self")&&!sk(e)}var zc=null;function lk(){if(zc===null)try{new FormData(document.createElement("form"),0),zc=!1}catch{zc=!0}return zc}var ck=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ep(e){return e!=null&&!ck.has(e)?(Nn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wc}"`),null):e}function uk(e,t){let a,i,o,l,u;if(ik(e)){let p=e.getAttribute("action");i=p?La(p,t):null,a=e.getAttribute("method")||Xc,o=Ep(e.getAttribute("enctype"))||Wc,l=new FormData(e)}else if(ak(e)||rk(e)&&(e.type==="submit"||e.type==="image")){let p=e.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=e.getAttribute("formaction")||p.getAttribute("action");if(i=f?La(f,t):null,a=e.getAttribute("formmethod")||p.getAttribute("method")||Xc,o=Ep(e.getAttribute("formenctype"))||Ep(p.getAttribute("enctype"))||Wc,l=new FormData(p,e),!lk()){let{name:m,type:g,value:x}=e;if(g==="image"){let y=m?`${m}.`:"";l.append(`${y}x`,"0"),l.append(`${y}y`,"0")}else m&&l.append(m,x)}}else{if(Hu(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=Xc,i=null,o=Wc,u=e}return l&&o==="text/plain"&&(u=l,l=void 0),{action:i,method:a.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Cm(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function dk(e,t,a,i){let o=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${i}`:o.pathname=`${o.pathname}.${i}`:o.pathname==="/"?o.pathname=`_root.${i}`:t&&La(o.pathname,t)==="/"?o.pathname=`${t.replace(/\/$/,"")}/_root.${i}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${i}`,o}async function fk(e,t){if(e.id in t)return t[e.id];try{let a=await import(e.module);return t[e.id]=a,a}catch(a){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pk(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function hk(e,t,a){let i=await Promise.all(e.map(async o=>{let l=t.routes[o.route.id];if(l){let u=await fk(l,a);return u.links?u.links():[]}return[]}));return xk(i.flat(1).filter(pk).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Pb(e,t,a,i,o,l){let u=(f,m)=>a[m]?f.route.id!==a[m].route.id:!0,p=(f,m)=>{var g;return a[m].pathname!==f.pathname||((g=a[m].route.path)==null?void 0:g.endsWith("*"))&&a[m].params["*"]!==f.params["*"]};return l==="assets"?t.filter((f,m)=>u(f,m)||p(f,m)):l==="data"?t.filter((f,m)=>{var x;let g=i.routes[f.route.id];if(!g||!g.hasLoader)return!1;if(u(f,m)||p(f,m))return!0;if(f.route.shouldRevalidate){let y=f.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((x=a[0])==null?void 0:x.params)||{},nextUrl:new URL(e,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function mk(e,t,{includeHydrateFallback:a}={}){return gk(e.map(i=>{let o=t.routes[i.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),a&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function gk(e){return[...new Set(e)]}function bk(e){let t={},a=Object.keys(e).sort();for(let i of a)t[i]=e[i];return t}function xk(e,t){let a=new Set;return new Set(t),e.reduce((i,o)=>{let l=JSON.stringify(bk(o));return a.has(l)||(a.add(l),i.push({key:l,link:o})),i},[])}function Kv(){let e=j.useContext(us);return Cm(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function yk(){let e=j.useContext(_u);return Cm(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Em=j.createContext(void 0);Em.displayName="FrameworkContext";function Yv(){let e=j.useContext(Em);return Cm(e,"You must render this element inside a <HydratedRouter> element"),e}function vk(e,t){let a=j.useContext(Em),[i,o]=j.useState(!1),[l,u]=j.useState(!1),{onFocus:p,onBlur:f,onMouseEnter:m,onMouseLeave:g,onTouchStart:x}=t,y=j.useRef(null);j.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let k=M=>{M.forEach(z=>{u(z.isIntersecting)})},C=new IntersectionObserver(k,{threshold:.5});return y.current&&C.observe(y.current),()=>{C.disconnect()}}},[e]),j.useEffect(()=>{if(i){let k=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(k)}}},[i]);let v=()=>{o(!0)},S=()=>{o(!1),u(!1)};return a?e!=="intent"?[l,y,{}]:[l,y,{onFocus:xo(p,v),onBlur:xo(f,S),onMouseEnter:xo(m,v),onMouseLeave:xo(g,S),onTouchStart:xo(x,v)}]:[!1,y,{}]}function xo(e,t){return a=>{e&&e(a),a.defaultPrevented||t(a)}}function wk({page:e,...t}){let{router:a}=Kv(),i=j.useMemo(()=>Ov(a.routes,e,a.basename),[a.routes,e,a.basename]);return i?j.createElement(kk,{page:e,matches:i,...t}):null}function Sk(e){let{manifest:t,routeModules:a}=Yv(),[i,o]=j.useState([]);return j.useEffect(()=>{let l=!1;return hk(e,t,a).then(u=>{l||o(u)}),()=>{l=!0}},[e,t,a]),i}function kk({page:e,matches:t,...a}){let i=$n(),{future:o,manifest:l,routeModules:u}=Yv(),{basename:p}=Kv(),{loaderData:f,matches:m}=yk(),g=j.useMemo(()=>Pb(e,t,m,l,i,"data"),[e,t,m,l,i]),x=j.useMemo(()=>Pb(e,t,m,l,i,"assets"),[e,t,m,l,i]),y=j.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let k=new Set,C=!1;if(t.forEach(z=>{var $;let A=l.routes[z.route.id];!A||!A.hasLoader||(!g.some(E=>E.route.id===z.route.id)&&z.route.id in f&&(($=u[z.route.id])!=null&&$.shouldRevalidate)||A.hasClientLoader?C=!0:k.add(z.route.id))}),k.size===0)return[];let M=dk(e,p,o.unstable_trailingSlashAwareDataRequests,"data");return C&&k.size>0&&M.searchParams.set("_routes",t.filter(z=>k.has(z.route.id)).map(z=>z.route.id).join(",")),[M.pathname+M.search]},[p,o.unstable_trailingSlashAwareDataRequests,f,i,l,g,t,e,u]),v=j.useMemo(()=>mk(x,l),[x,l]),S=Sk(x);return j.createElement(j.Fragment,null,y.map(k=>j.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...a})),v.map(k=>j.createElement("link",{key:k,rel:"modulepreload",href:k,...a})),S.map(({key:k,link:C})=>j.createElement("link",{key:k,nonce:a.nonce,...C,crossOrigin:C.crossOrigin??a.crossOrigin})))}function Tk(...e){return t=>{e.forEach(a=>{typeof a=="function"?a(t):a!=null&&(a.current=t)})}}var jk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{jk&&(window.__reactRouterVersion="7.13.0")}catch{}function Ak({basename:e,children:t,unstable_useTransitions:a,window:i}){let o=j.useRef();o.current==null&&(o.current=n8({window:i,v5Compat:!0}));let l=o.current,[u,p]=j.useState({action:l.action,location:l.location}),f=j.useCallback(m=>{a===!1?p(m):j.startTransition(()=>p(m))},[a]);return j.useLayoutEffect(()=>l.listen(f),[l,f]),j.createElement(tk,{basename:e,children:t,location:u.location,navigationType:u.action,navigator:l,unstable_useTransitions:a})}var Xv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wv=j.forwardRef(function({onClick:t,discover:a="render",prefetch:i="none",relative:o,reloadDocument:l,replace:u,state:p,target:f,to:m,preventScrollReset:g,viewTransition:x,unstable_defaultShouldRevalidate:y,...v},S){let{basename:k,unstable_useTransitions:C}=j.useContext(mn),M=typeof m=="string"&&Xv.test(m),z=Nv(m,k);m=z.to;let A=V8(m,{relative:o}),[$,E,V]=vk(i,v),N=Mk(m,{replace:u,state:p,target:f,preventScrollReset:g,relative:o,viewTransition:x,unstable_defaultShouldRevalidate:y,unstable_useTransitions:C});function O(J){t&&t(J),J.defaultPrevented||N(J)}let X=j.createElement("a",{...v,...V,href:z.absoluteURL||A,onClick:z.isExternal||l?t:O,ref:Tk(S,E),target:f,"data-discover":!M&&a==="render"?"true":void 0});return $&&!M?j.createElement(j.Fragment,null,X,j.createElement(wk,{page:A})):X});Wv.displayName="Link";var la=j.forwardRef(function({"aria-current":t="page",caseSensitive:a=!1,className:i="",end:o=!1,style:l,to:u,viewTransition:p,children:f,...m},g){let x=ol(u,{relative:m.relative}),y=$n(),v=j.useContext(_u),{navigator:S,basename:k}=j.useContext(mn),C=v!=null&&Dk(x)&&p===!0,M=S.encodeLocation?S.encodeLocation(x).pathname:x.pathname,z=y.pathname,A=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;a||(z=z.toLowerCase(),A=A?A.toLowerCase():null,M=M.toLowerCase()),A&&k&&(A=La(A,k)||A);const $=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let E=z===M||!o&&z.startsWith(M)&&z.charAt($)==="/",V=A!=null&&(A===M||!o&&A.startsWith(M)&&A.charAt(M.length)==="/"),N={isActive:E,isPending:V,isTransitioning:C},O=E?t:void 0,X;typeof i=="function"?X=i(N):X=[i,E?"active":null,V?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let J=typeof l=="function"?l(N):l;return j.createElement(Wv,{...m,"aria-current":O,className:X,ref:g,style:J,to:u,viewTransition:p},typeof f=="function"?f(N):f)});la.displayName="NavLink";var Ck=j.forwardRef(({discover:e="render",fetcherKey:t,navigate:a,reloadDocument:i,replace:o,state:l,method:u=Xc,action:p,onSubmit:f,relative:m,preventScrollReset:g,viewTransition:x,unstable_defaultShouldRevalidate:y,...v},S)=>{let{unstable_useTransitions:k}=j.useContext(mn),C=Lk(),M=Ok(p,{relative:m}),z=u.toLowerCase()==="get"?"get":"post",A=typeof p=="string"&&Xv.test(p),$=E=>{if(f&&f(E),E.defaultPrevented)return;E.preventDefault();let V=E.nativeEvent.submitter,N=(V==null?void 0:V.getAttribute("formmethod"))||u,O=()=>C(V||E.currentTarget,{fetcherKey:t,method:N,navigate:a,replace:o,state:l,relative:m,preventScrollReset:g,viewTransition:x,unstable_defaultShouldRevalidate:y});k&&a!==!1?j.startTransition(()=>O()):O()};return j.createElement("form",{ref:S,method:z,action:M,onSubmit:i?f:$,...v,"data-discover":!A&&e==="render"?"true":void 0})});Ck.displayName="Form";function Ek(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Qv(e){let t=j.useContext(us);return Je(t,Ek(e)),t}function Mk(e,{target:t,replace:a,state:i,preventScrollReset:o,relative:l,viewTransition:u,unstable_defaultShouldRevalidate:p,unstable_useTransitions:f}={}){let m=Gv(),g=$n(),x=ol(e,{relative:l});return j.useCallback(y=>{if(ok(y,t)){y.preventDefault();let v=a!==void 0?a:Io(g)===Io(x),S=()=>m(e,{replace:v,state:i,preventScrollReset:o,relative:l,viewTransition:u,unstable_defaultShouldRevalidate:p});f?j.startTransition(()=>S()):S()}},[g,m,x,a,i,t,e,o,l,u,p,f])}var zk=0,Rk=()=>`__${String(++zk)}__`;function Lk(){let{router:e}=Qv("useSubmit"),{basename:t}=j.useContext(mn),a=X8(),i=e.fetch,o=e.navigate;return j.useCallback(async(l,u={})=>{let{action:p,method:f,encType:m,formData:g,body:x}=uk(l,t);if(u.navigate===!1){let y=u.fetcherKey||Rk();await i(y,a,u.action||p,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:g,body:x,formMethod:u.method||f,formEncType:u.encType||m,flushSync:u.flushSync})}else await o(u.action||p,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:g,body:x,formMethod:u.method||f,formEncType:u.encType||m,replace:u.replace,state:u.state,fromRouteId:a,flushSync:u.flushSync,viewTransition:u.viewTransition})},[i,o,t,a])}function Ok(e,{relative:t}={}){let{basename:a}=j.useContext(mn),i=j.useContext(Hn);Je(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...ol(e||".",{relative:t})},u=$n();if(e==null){l.search=u.search;let p=new URLSearchParams(l.search),f=p.getAll("index");if(f.some(g=>g==="")){p.delete("index"),f.filter(x=>x).forEach(x=>p.append("index",x));let g=p.toString();l.search=g?`?${g}`:""}}return(!e||e===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(l.pathname=l.pathname==="/"?a:Ra([a,l.pathname])),Io(l)}function Dk(e,{relative:t}={}){let a=j.useContext(_v);Je(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Qv("useViewTransitionState"),o=ol(e,{relative:t});if(!a.isTransitioning)return!1;let l=La(a.currentLocation.pathname,i)||a.currentLocation.pathname,u=La(a.nextLocation.pathname,i)||a.nextLocation.pathname;return pu(o.pathname,u)!=null||pu(o.pathname,l)!=null}var Pk=Lv();function Vk(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Nk(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Bk=function(){function e(a){var i=this;this._insertTag=function(o){var l;i.tags.length===0?i.insertionPoint?l=i.insertionPoint.nextSibling:i.prepend?l=i.container.firstChild:l=i.before:l=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(o,l),i.tags.push(o)},this.isSpeedy=a.speedy===void 0?!0:a.speedy,this.tags=[],this.ctr=0,this.nonce=a.nonce,this.key=a.key,this.container=a.container,this.prepend=a.prepend,this.insertionPoint=a.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(i){i.forEach(this._insertTag)},t.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Nk(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=Vk(o);try{l.insertRule(i,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(i));this.ctr++},t.flush=function(){this.tags.forEach(function(i){var o;return(o=i.parentNode)==null?void 0:o.removeChild(i)}),this.tags=[],this.ctr=0},e}(),Vt="-ms-",hu="-moz-",Re="-webkit-",Zv="comm",Mm="rule",zm="decl",_k="@import",Jv="@keyframes",Hk="@layer",$k=Math.abs,$u=String.fromCharCode,Uk=Object.assign;function Gk(e,t){return zt(e,0)^45?(((t<<2^zt(e,0))<<2^zt(e,1))<<2^zt(e,2))<<2^zt(e,3):0}function e5(e){return e.trim()}function Ik(e,t){return(e=t.exec(e))?e[0]:e}function Le(e,t,a){return e.replace(t,a)}function jh(e,t){return e.indexOf(t)}function zt(e,t){return e.charCodeAt(t)|0}function Fo(e,t,a){return e.slice(t,a)}function ea(e){return e.length}function Rm(e){return e.length}function Rc(e,t){return t.push(e),e}function Fk(e,t){return e.map(t).join("")}var Uu=1,Jr=1,t5=0,Jt=0,dt=0,fs="";function Gu(e,t,a,i,o,l,u){return{value:e,root:t,parent:a,type:i,props:o,children:l,line:Uu,column:Jr,length:u,return:""}}function yo(e,t){return Uk(Gu("",null,null,"",null,null,0),e,{length:-e.length},t)}function qk(){return dt}function Kk(){return dt=Jt>0?zt(fs,--Jt):0,Jr--,dt===10&&(Jr=1,Uu--),dt}function pn(){return dt=Jt<t5?zt(fs,Jt++):0,Jr++,dt===10&&(Jr=1,Uu++),dt}function ia(){return zt(fs,Jt)}function Qc(){return Jt}function ll(e,t){return Fo(fs,e,t)}function qo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function n5(e){return Uu=Jr=1,t5=ea(fs=e),Jt=0,[]}function a5(e){return fs="",e}function Zc(e){return e5(ll(Jt-1,Ah(e===91?e+2:e===40?e+1:e)))}function Yk(e){for(;(dt=ia())&&dt<33;)pn();return qo(e)>2||qo(dt)>3?"":" "}function Xk(e,t){for(;--t&&pn()&&!(dt<48||dt>102||dt>57&&dt<65||dt>70&&dt<97););return ll(e,Qc()+(t<6&&ia()==32&&pn()==32))}function Ah(e){for(;pn();)switch(dt){case e:return Jt;case 34:case 39:e!==34&&e!==39&&Ah(dt);break;case 40:e===41&&Ah(e);break;case 92:pn();break}return Jt}function Wk(e,t){for(;pn()&&e+dt!==57;)if(e+dt===84&&ia()===47)break;return"/*"+ll(t,Jt-1)+"*"+$u(e===47?e:pn())}function Qk(e){for(;!qo(ia());)pn();return ll(e,Jt)}function Zk(e){return a5(Jc("",null,null,null,[""],e=n5(e),0,[0],e))}function Jc(e,t,a,i,o,l,u,p,f){for(var m=0,g=0,x=u,y=0,v=0,S=0,k=1,C=1,M=1,z=0,A="",$=o,E=l,V=i,N=A;C;)switch(S=z,z=pn()){case 40:if(S!=108&&zt(N,x-1)==58){jh(N+=Le(Zc(z),"&","&\f"),"&\f")!=-1&&(M=-1);break}case 34:case 39:case 91:N+=Zc(z);break;case 9:case 10:case 13:case 32:N+=Yk(S);break;case 92:N+=Xk(Qc()-1,7);continue;case 47:switch(ia()){case 42:case 47:Rc(Jk(Wk(pn(),Qc()),t,a),f);break;default:N+="/"}break;case 123*k:p[m++]=ea(N)*M;case 125*k:case 59:case 0:switch(z){case 0:case 125:C=0;case 59+g:M==-1&&(N=Le(N,/\f/g,"")),v>0&&ea(N)-x&&Rc(v>32?Nb(N+";",i,a,x-1):Nb(Le(N," ","")+";",i,a,x-2),f);break;case 59:N+=";";default:if(Rc(V=Vb(N,t,a,m,g,o,p,A,$=[],E=[],x),l),z===123)if(g===0)Jc(N,t,V,V,$,l,x,p,E);else switch(y===99&&zt(N,3)===110?100:y){case 100:case 108:case 109:case 115:Jc(e,V,V,i&&Rc(Vb(e,V,V,0,0,o,p,A,o,$=[],x),E),o,E,x,p,i?$:E);break;default:Jc(N,V,V,V,[""],E,0,p,E)}}m=g=v=0,k=M=1,A=N="",x=u;break;case 58:x=1+ea(N),v=S;default:if(k<1){if(z==123)--k;else if(z==125&&k++==0&&Kk()==125)continue}switch(N+=$u(z),z*k){case 38:M=g>0?1:(N+="\f",-1);break;case 44:p[m++]=(ea(N)-1)*M,M=1;break;case 64:ia()===45&&(N+=Zc(pn())),y=ia(),g=x=ea(A=N+=Qk(Qc())),z++;break;case 45:S===45&&ea(N)==2&&(k=0)}}return l}function Vb(e,t,a,i,o,l,u,p,f,m,g){for(var x=o-1,y=o===0?l:[""],v=Rm(y),S=0,k=0,C=0;S<i;++S)for(var M=0,z=Fo(e,x+1,x=$k(k=u[S])),A=e;M<v;++M)(A=e5(k>0?y[M]+" "+z:Le(z,/&\f/g,y[M])))&&(f[C++]=A);return Gu(e,t,a,o===0?Mm:p,f,m,g)}function Jk(e,t,a){return Gu(e,t,a,Zv,$u(qk()),Fo(e,2,-2),0)}function Nb(e,t,a,i){return Gu(e,t,a,zm,Fo(e,0,i),Fo(e,i+1,-1),i)}function Wr(e,t){for(var a="",i=Rm(e),o=0;o<i;o++)a+=t(e[o],o,e,t)||"";return a}function e9(e,t,a,i){switch(e.type){case Hk:if(e.children.length)break;case _k:case zm:return e.return=e.return||e.value;case Zv:return"";case Jv:return e.return=e.value+"{"+Wr(e.children,i)+"}";case Mm:e.value=e.props.join(",")}return ea(a=Wr(e.children,i))?e.return=e.value+"{"+a+"}":""}function t9(e){var t=Rm(e);return function(a,i,o,l){for(var u="",p=0;p<t;p++)u+=e[p](a,i,o,l)||"";return u}}function n9(e){return function(t){t.root||(t=t.return)&&e(t)}}function a9(e){var t=Object.create(null);return function(a){return t[a]===void 0&&(t[a]=e(a)),t[a]}}var i9=function(t,a,i){for(var o=0,l=0;o=l,l=ia(),o===38&&l===12&&(a[i]=1),!qo(l);)pn();return ll(t,Jt)},r9=function(t,a){var i=-1,o=44;do switch(qo(o)){case 0:o===38&&ia()===12&&(a[i]=1),t[i]+=i9(Jt-1,a,i);break;case 2:t[i]+=Zc(o);break;case 4:if(o===44){t[++i]=ia()===58?"&\f":"",a[i]=t[i].length;break}default:t[i]+=$u(o)}while(o=pn());return t},s9=function(t,a){return a5(r9(n5(t),a))},Bb=new WeakMap,o9=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var a=t.value,i=t.parent,o=t.column===i.column&&t.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(t.props.length===1&&a.charCodeAt(0)!==58&&!Bb.get(i))&&!o){Bb.set(t,!0);for(var l=[],u=s9(a,l),p=i.props,f=0,m=0;f<u.length;f++)for(var g=0;g<p.length;g++,m++)t.props[m]=l[f]?u[f].replace(/&\f/g,p[g]):p[g]+" "+u[f]}}},l9=function(t){if(t.type==="decl"){var a=t.value;a.charCodeAt(0)===108&&a.charCodeAt(2)===98&&(t.return="",t.value="")}};function i5(e,t){switch(Gk(e,t)){case 5103:return Re+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Re+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Re+e+hu+e+Vt+e+e;case 6828:case 4268:return Re+e+Vt+e+e;case 6165:return Re+e+Vt+"flex-"+e+e;case 5187:return Re+e+Le(e,/(\w+).+(:[^]+)/,Re+"box-$1$2"+Vt+"flex-$1$2")+e;case 5443:return Re+e+Vt+"flex-item-"+Le(e,/flex-|-self/,"")+e;case 4675:return Re+e+Vt+"flex-line-pack"+Le(e,/align-content|flex-|-self/,"")+e;case 5548:return Re+e+Vt+Le(e,"shrink","negative")+e;case 5292:return Re+e+Vt+Le(e,"basis","preferred-size")+e;case 6060:return Re+"box-"+Le(e,"-grow","")+Re+e+Vt+Le(e,"grow","positive")+e;case 4554:return Re+Le(e,/([^-])(transform)/g,"$1"+Re+"$2")+e;case 6187:return Le(Le(Le(e,/(zoom-|grab)/,Re+"$1"),/(image-set)/,Re+"$1"),e,"")+e;case 5495:case 3959:return Le(e,/(image-set\([^]*)/,Re+"$1$`$1");case 4968:return Le(Le(e,/(.+:)(flex-)?(.*)/,Re+"box-pack:$3"+Vt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Re+e+e;case 4095:case 3583:case 4068:case 2532:return Le(e,/(.+)-inline(.+)/,Re+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ea(e)-1-t>6)switch(zt(e,t+1)){case 109:if(zt(e,t+4)!==45)break;case 102:return Le(e,/(.+:)(.+)-([^]+)/,"$1"+Re+"$2-$3$1"+hu+(zt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~jh(e,"stretch")?i5(Le(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(zt(e,t+1)!==115)break;case 6444:switch(zt(e,ea(e)-3-(~jh(e,"!important")&&10))){case 107:return Le(e,":",":"+Re)+e;case 101:return Le(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Re+(zt(e,14)===45?"inline-":"")+"box$3$1"+Re+"$2$3$1"+Vt+"$2box$3")+e}break;case 5936:switch(zt(e,t+11)){case 114:return Re+e+Vt+Le(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Re+e+Vt+Le(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Re+e+Vt+Le(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Re+e+Vt+e+e}return e}var c9=function(t,a,i,o){if(t.length>-1&&!t.return)switch(t.type){case zm:t.return=i5(t.value,t.length);break;case Jv:return Wr([yo(t,{value:Le(t.value,"@","@"+Re)})],o);case Mm:if(t.length)return Fk(t.props,function(l){switch(Ik(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Wr([yo(t,{props:[Le(l,/:(read-\w+)/,":"+hu+"$1")]})],o);case"::placeholder":return Wr([yo(t,{props:[Le(l,/:(plac\w+)/,":"+Re+"input-$1")]}),yo(t,{props:[Le(l,/:(plac\w+)/,":"+hu+"$1")]}),yo(t,{props:[Le(l,/:(plac\w+)/,Vt+"input-$1")]})],o)}return""})}},u9=[c9],d9=function(t){var a=t.key;if(a==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(k){var C=k.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(k),k.setAttribute("data-s",""))})}var o=t.stylisPlugins||u9,l={},u,p=[];u=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+a+' "]'),function(k){for(var C=k.getAttribute("data-emotion").split(" "),M=1;M<C.length;M++)l[C[M]]=!0;p.push(k)});var f,m=[o9,l9];{var g,x=[e9,n9(function(k){g.insert(k)})],y=t9(m.concat(o,x)),v=function(C){return Wr(Zk(C),y)};f=function(C,M,z,A){g=z,v(C?C+"{"+M.styles+"}":M.styles),A&&(S.inserted[M.name]=!0)}}var S={key:a,sheet:new Bk({key:a,container:u,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:f};return S.sheet.hydrate(p),S},Mp={exports:{}},De={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _b;function f9(){if(_b)return De;_b=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,a=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,p=e?Symbol.for("react.context"):60110,f=e?Symbol.for("react.async_mode"):60111,m=e?Symbol.for("react.concurrent_mode"):60111,g=e?Symbol.for("react.forward_ref"):60112,x=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,v=e?Symbol.for("react.memo"):60115,S=e?Symbol.for("react.lazy"):60116,k=e?Symbol.for("react.block"):60121,C=e?Symbol.for("react.fundamental"):60117,M=e?Symbol.for("react.responder"):60118,z=e?Symbol.for("react.scope"):60119;function A(E){if(typeof E=="object"&&E!==null){var V=E.$$typeof;switch(V){case t:switch(E=E.type,E){case f:case m:case i:case l:case o:case x:return E;default:switch(E=E&&E.$$typeof,E){case p:case g:case S:case v:case u:return E;default:return V}}case a:return V}}}function $(E){return A(E)===m}return De.AsyncMode=f,De.ConcurrentMode=m,De.ContextConsumer=p,De.ContextProvider=u,De.Element=t,De.ForwardRef=g,De.Fragment=i,De.Lazy=S,De.Memo=v,De.Portal=a,De.Profiler=l,De.StrictMode=o,De.Suspense=x,De.isAsyncMode=function(E){return $(E)||A(E)===f},De.isConcurrentMode=$,De.isContextConsumer=function(E){return A(E)===p},De.isContextProvider=function(E){return A(E)===u},De.isElement=function(E){return typeof E=="object"&&E!==null&&E.$$typeof===t},De.isForwardRef=function(E){return A(E)===g},De.isFragment=function(E){return A(E)===i},De.isLazy=function(E){return A(E)===S},De.isMemo=function(E){return A(E)===v},De.isPortal=function(E){return A(E)===a},De.isProfiler=function(E){return A(E)===l},De.isStrictMode=function(E){return A(E)===o},De.isSuspense=function(E){return A(E)===x},De.isValidElementType=function(E){return typeof E=="string"||typeof E=="function"||E===i||E===m||E===l||E===o||E===x||E===y||typeof E=="object"&&E!==null&&(E.$$typeof===S||E.$$typeof===v||E.$$typeof===u||E.$$typeof===p||E.$$typeof===g||E.$$typeof===C||E.$$typeof===M||E.$$typeof===z||E.$$typeof===k)},De.typeOf=A,De}var Hb;function p9(){return Hb||(Hb=1,Mp.exports=f9()),Mp.exports}var zp,$b;function h9(){if($b)return zp;$b=1;var e=p9(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[e.ForwardRef]=i,l[e.Memo]=o;function u(S){return e.isMemo(S)?o:l[S.$$typeof]||t}var p=Object.defineProperty,f=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,g=Object.getOwnPropertyDescriptor,x=Object.getPrototypeOf,y=Object.prototype;function v(S,k,C){if(typeof k!="string"){if(y){var M=x(k);M&&M!==y&&v(S,M,C)}var z=f(k);m&&(z=z.concat(m(k)));for(var A=u(S),$=u(k),E=0;E<z.length;++E){var V=z[E];if(!a[V]&&!(C&&C[V])&&!($&&$[V])&&!(A&&A[V])){var N=g(k,V);try{p(S,V,N)}catch{}}}}return S}return zp=v,zp}h9();var m9=!0;function g9(e,t,a){var i="";return a.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):o&&(i+=o+" ")}),i}var r5=function(t,a,i){var o=t.key+"-"+a.name;(i===!1||m9===!1)&&t.registered[o]===void 0&&(t.registered[o]=a.styles)},s5=function(t,a,i){r5(t,a,i);var o=t.key+"-"+a.name;if(t.inserted[a.name]===void 0){var l=a;do t.insert(a===l?"."+o:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function b9(e){for(var t=0,a,i=0,o=e.length;o>=4;++i,o-=4)a=e.charCodeAt(i)&255|(e.charCodeAt(++i)&255)<<8|(e.charCodeAt(++i)&255)<<16|(e.charCodeAt(++i)&255)<<24,a=(a&65535)*1540483477+((a>>>16)*59797<<16),a^=a>>>24,t=(a&65535)*1540483477+((a>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(i+2)&255)<<16;case 2:t^=(e.charCodeAt(i+1)&255)<<8;case 1:t^=e.charCodeAt(i)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var x9={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},y9=/[A-Z]|^ms/g,v9=/_EMO_([^_]+?)_([^]*?)_EMO_/g,o5=function(t){return t.charCodeAt(1)===45},Ub=function(t){return t!=null&&typeof t!="boolean"},Rp=a9(function(e){return o5(e)?e:e.replace(y9,"-$&").toLowerCase()}),Gb=function(t,a){switch(t){case"animation":case"animationName":if(typeof a=="string")return a.replace(v9,function(i,o,l){return ta={name:o,styles:l,next:ta},o})}return x9[t]!==1&&!o5(t)&&typeof a=="number"&&a!==0?a+"px":a};function Ko(e,t,a){if(a==null)return"";var i=a;if(i.__emotion_styles!==void 0)return i;switch(typeof a){case"boolean":return"";case"object":{var o=a;if(o.anim===1)return ta={name:o.name,styles:o.styles,next:ta},o.name;var l=a;if(l.styles!==void 0){var u=l.next;if(u!==void 0)for(;u!==void 0;)ta={name:u.name,styles:u.styles,next:ta},u=u.next;var p=l.styles+";";return p}return w9(e,t,a)}case"function":{if(e!==void 0){var f=ta,m=a(e);return ta=f,Ko(e,t,m)}break}}var g=a;return g}function w9(e,t,a){var i="";if(Array.isArray(a))for(var o=0;o<a.length;o++)i+=Ko(e,t,a[o])+";";else for(var l in a){var u=a[l];if(typeof u!="object"){var p=u;Ub(p)&&(i+=Rp(l)+":"+Gb(l,p)+";")}else if(Array.isArray(u)&&typeof u[0]=="string"&&t==null)for(var f=0;f<u.length;f++)Ub(u[f])&&(i+=Rp(l)+":"+Gb(l,u[f])+";");else{var m=Ko(e,t,u);switch(l){case"animation":case"animationName":{i+=Rp(l)+":"+m+";";break}default:i+=l+"{"+m+"}"}}}return i}var Ib=/label:\s*([^\s;{]+)\s*(;|$)/g,ta;function Lm(e,t,a){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,o="";ta=void 0;var l=e[0];if(l==null||l.raw===void 0)i=!1,o+=Ko(a,t,l);else{var u=l;o+=u[0]}for(var p=1;p<e.length;p++)if(o+=Ko(a,t,e[p]),i){var f=l;o+=f[p]}Ib.lastIndex=0;for(var m="",g;(g=Ib.exec(o))!==null;)m+="-"+g[1];var x=b9(o)+m;return{name:x,styles:o,next:ta}}var S9=function(t){return t()},l5=Mb.useInsertionEffect?Mb.useInsertionEffect:!1,k9=l5||S9,Fb=l5||j.useLayoutEffect,c5=j.createContext(typeof HTMLElement<"u"?d9({key:"css"}):null);c5.Provider;var u5=function(t){return j.forwardRef(function(a,i){var o=j.useContext(c5);return t(a,o,i)})},d5=j.createContext({}),Om={}.hasOwnProperty,Ch="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",T9=function(t,a){var i={};for(var o in a)Om.call(a,o)&&(i[o]=a[o]);return i[Ch]=t,i},j9=function(t){var a=t.cache,i=t.serialized,o=t.isStringTag;return r5(a,i,o),k9(function(){return s5(a,i,o)}),null},A9=u5(function(e,t,a){var i=e.css;typeof i=="string"&&t.registered[i]!==void 0&&(i=t.registered[i]);var o=e[Ch],l=[i],u="";typeof e.className=="string"?u=g9(t.registered,l,e.className):e.className!=null&&(u=e.className+" ");var p=Lm(l,void 0,j.useContext(d5));u+=t.key+"-"+p.name;var f={};for(var m in e)Om.call(e,m)&&m!=="css"&&m!==Ch&&(f[m]=e[m]);return f.className=u,a&&(f.ref=a),j.createElement(j.Fragment,null,j.createElement(j9,{cache:t,serialized:p,isStringTag:typeof o=="string"}),j.createElement(o,f))}),C9=A9,qb=function(t,a){var i=arguments;if(a==null||!Om.call(a,"css"))return j.createElement.apply(void 0,i);var o=i.length,l=new Array(o);l[0]=C9,l[1]=T9(t,a);for(var u=2;u<o;u++)l[u]=i[u];return j.createElement.apply(null,l)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(qb||(qb={}));var E9=u5(function(e,t){var a=e.styles,i=Lm([a],void 0,j.useContext(d5)),o=j.useRef();return Fb(function(){var l=t.key+"-global",u=new t.sheet.constructor({key:l,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),p=!1,f=document.querySelector('style[data-emotion="'+l+" "+i.name+'"]');return t.sheet.tags.length&&(u.before=t.sheet.tags[0]),f!==null&&(p=!0,f.setAttribute("data-emotion",l),u.hydrate([f])),o.current=[u,p],function(){u.flush()}},[t]),Fb(function(){var l=o.current,u=l[0],p=l[1];if(p){l[1]=!1;return}if(i.next!==void 0&&s5(t,i.next,!0),u.tags.length){var f=u.tags[u.tags.length-1].nextElementSibling;u.before=f,u.flush()}t.insert("",i,u,!1)},[t,i.name]),null});function M9(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return Lm(t)}const z9="/assets/Geist-Regular-BCrLS6HJ.ttf",R9="/assets/Geist-Medium-C6X8vKEc.ttf",L9="/assets/BebasNeue-Regular-D2CONTwO.ttf",O9="/assets/Inter_24pt-Regular-BPx6xqqj.ttf",D9=M9`
  /* ========== FONTS ========== */
  @font-face {
    font-family: "Geist";
    src: url(${z9}) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Geist";
    src: url(${R9}) format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Bebas Neue";
    src: url(${L9}) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Inter";
    src: url(${O9}) format("truetype");
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
`,Dm=j.createContext({});function ps(e){const t=j.useRef(null);return t.current===null&&(t.current=e()),t.current}const Pm=typeof window<"u",Iu=Pm?j.useLayoutEffect:j.useEffect,Fu=j.createContext(null);function Vm(e,t){e.indexOf(t)===-1&&e.push(t)}function Nm(e,t){const a=e.indexOf(t);a>-1&&e.splice(a,1)}const ca=(e,t,a)=>a>t?t:a<e?e:a;let Yo=()=>{};const Oa={},f5=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function p5(e){return typeof e=="object"&&e!==null}const h5=e=>/^0[^.\s]+$/u.test(e);function Bm(e){let t;return()=>(t===void 0&&(t=e()),t)}const Qt=e=>e,P9=(e,t)=>a=>t(e(a)),cl=(...e)=>e.reduce(P9),es=(e,t,a)=>{const i=t-e;return i===0?1:(a-e)/i};class _m{constructor(){this.subscriptions=[]}add(t){return Vm(this.subscriptions,t),()=>Nm(this.subscriptions,t)}notify(t,a,i){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,a,i);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(t,a,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ra=e=>e*1e3,sa=e=>e/1e3;function Hm(e,t){return t?e*(1e3/t):0}const m5=(e,t,a)=>(((1-3*a+3*t)*e+(3*a-6*t))*e+3*t)*e,V9=1e-7,N9=12;function B9(e,t,a,i,o){let l,u,p=0;do u=t+(a-t)/2,l=m5(u,i,o)-e,l>0?a=u:t=u;while(Math.abs(l)>V9&&++p<N9);return u}function ul(e,t,a,i){if(e===t&&a===i)return Qt;const o=l=>B9(l,0,1,e,a);return l=>l===0||l===1?l:m5(o(l),t,i)}const g5=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,b5=e=>t=>1-e(1-t),qu=ul(.33,1.53,.69,.99),$m=b5(qu),x5=g5($m),y5=e=>(e*=2)<1?.5*$m(e):.5*(2-Math.pow(2,-10*(e-1))),Um=e=>1-Math.sin(Math.acos(e)),v5=b5(Um),w5=g5(Um),_9=ul(.42,0,1,1),hn=ul(0,0,.58,1),Gm=ul(.42,0,.58,1),H9=e=>Array.isArray(e)&&typeof e[0]!="number",S5=e=>Array.isArray(e)&&typeof e[0]=="number",$9={linear:Qt,easeIn:_9,easeInOut:Gm,easeOut:hn,circIn:Um,circInOut:w5,circOut:v5,backIn:$m,backInOut:x5,backOut:qu,anticipate:y5},U9=e=>typeof e=="string",Kb=e=>{if(S5(e)){Yo(e.length===4);const[t,a,i,o]=e;return ul(t,a,i,o)}else if(U9(e))return $9[e];return e},Lc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function G9(e,t){let a=new Set,i=new Set,o=!1,l=!1;const u=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function f(g){u.has(g)&&(m.schedule(g),e()),g(p)}const m={schedule:(g,x=!1,y=!1)=>{const S=y&&o?a:i;return x&&u.add(g),S.has(g)||S.add(g),g},cancel:g=>{i.delete(g),u.delete(g)},process:g=>{if(p=g,o){l=!0;return}o=!0,[a,i]=[i,a],a.forEach(f),a.clear(),o=!1,l&&(l=!1,m.process(g))}};return m}const I9=40;function k5(e,t){let a=!1,i=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>a=!0,u=Lc.reduce((A,$)=>(A[$]=G9(l),A),{}),{setup:p,read:f,resolveKeyframes:m,preUpdate:g,update:x,preRender:y,render:v,postRender:S}=u,k=()=>{const A=Oa.useManualTiming?o.timestamp:performance.now();a=!1,Oa.useManualTiming||(o.delta=i?1e3/60:Math.max(Math.min(A-o.timestamp,I9),1)),o.timestamp=A,o.isProcessing=!0,p.process(o),f.process(o),m.process(o),g.process(o),x.process(o),y.process(o),v.process(o),S.process(o),o.isProcessing=!1,a&&t&&(i=!1,e(k))},C=()=>{a=!0,i=!0,o.isProcessing||e(k)};return{schedule:Lc.reduce((A,$)=>{const E=u[$];return A[$]=(V,N=!1,O=!1)=>(a||C(),E.schedule(V,N,O)),A},{}),cancel:A=>{for(let $=0;$<Lc.length;$++)u[Lc[$]].cancel(A)},state:o,steps:u}}const{schedule:Be,cancel:Bn,state:Tt,steps:Lp}=k5(typeof requestAnimationFrame<"u"?requestAnimationFrame:Qt,!0);let eu;function F9(){eu=void 0}const Xt={now:()=>(eu===void 0&&Xt.set(Tt.isProcessing||Oa.useManualTiming?Tt.timestamp:performance.now()),eu),set:e=>{eu=e,queueMicrotask(F9)}},T5=e=>t=>typeof t=="string"&&t.startsWith(e),Im=T5("--"),q9=T5("var(--"),Fm=e=>q9(e)?K9.test(e.split("/*")[0].trim()):!1,K9=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,hs={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Xo={...hs,transform:e=>ca(0,1,e)},Oc={...hs,default:1},Oo=e=>Math.round(e*1e5)/1e5,qm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Y9(e){return e==null}const X9=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Km=(e,t)=>a=>!!(typeof a=="string"&&X9.test(a)&&a.startsWith(e)||t&&!Y9(a)&&Object.prototype.hasOwnProperty.call(a,t)),j5=(e,t,a)=>i=>{if(typeof i!="string")return i;const[o,l,u,p]=i.match(qm);return{[e]:parseFloat(o),[t]:parseFloat(l),[a]:parseFloat(u),alpha:p!==void 0?parseFloat(p):1}},W9=e=>ca(0,255,e),Op={...hs,transform:e=>Math.round(W9(e))},Ni={test:Km("rgb","red"),parse:j5("red","green","blue"),transform:({red:e,green:t,blue:a,alpha:i=1})=>"rgba("+Op.transform(e)+", "+Op.transform(t)+", "+Op.transform(a)+", "+Oo(Xo.transform(i))+")"};function Q9(e){let t="",a="",i="",o="";return e.length>5?(t=e.substring(1,3),a=e.substring(3,5),i=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),a=e.substring(2,3),i=e.substring(3,4),o=e.substring(4,5),t+=t,a+=a,i+=i,o+=o),{red:parseInt(t,16),green:parseInt(a,16),blue:parseInt(i,16),alpha:o?parseInt(o,16)/255:1}}const Eh={test:Km("#"),parse:Q9,transform:Ni.transform},dl=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),si=dl("deg"),oa=dl("%"),me=dl("px"),Z9=dl("vh"),J9=dl("vw"),Yb={...oa,parse:e=>oa.parse(e)/100,transform:e=>oa.transform(e*100)},Ur={test:Km("hsl","hue"),parse:j5("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:a,alpha:i=1})=>"hsla("+Math.round(e)+", "+oa.transform(Oo(t))+", "+oa.transform(Oo(a))+", "+Oo(Xo.transform(i))+")"},ut={test:e=>Ni.test(e)||Eh.test(e)||Ur.test(e),parse:e=>Ni.test(e)?Ni.parse(e):Ur.test(e)?Ur.parse(e):Eh.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Ni.transform(e):Ur.transform(e),getAnimatableNone:e=>{const t=ut.parse(e);return t.alpha=0,ut.transform(t)}},eT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function tT(e){var t,a;return isNaN(e)&&typeof e=="string"&&(((t=e.match(qm))==null?void 0:t.length)||0)+(((a=e.match(eT))==null?void 0:a.length)||0)>0}const A5="number",C5="color",nT="var",aT="var(",Xb="${}",iT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Wo(e){const t=e.toString(),a=[],i={color:[],number:[],var:[]},o=[];let l=0;const p=t.replace(iT,f=>(ut.test(f)?(i.color.push(l),o.push(C5),a.push(ut.parse(f))):f.startsWith(aT)?(i.var.push(l),o.push(nT),a.push(f)):(i.number.push(l),o.push(A5),a.push(parseFloat(f))),++l,Xb)).split(Xb);return{values:a,split:p,indexes:i,types:o}}function E5(e){return Wo(e).values}function M5(e){const{split:t,types:a}=Wo(e),i=t.length;return o=>{let l="";for(let u=0;u<i;u++)if(l+=t[u],o[u]!==void 0){const p=a[u];p===A5?l+=Oo(o[u]):p===C5?l+=ut.transform(o[u]):l+=o[u]}return l}}const rT=e=>typeof e=="number"?0:ut.test(e)?ut.getAnimatableNone(e):e;function sT(e){const t=E5(e);return M5(e)(t.map(rT))}const di={test:tT,parse:E5,createTransformer:M5,getAnimatableNone:sT};function Dp(e,t,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?e+(t-e)*6*a:a<1/2?t:a<2/3?e+(t-e)*(2/3-a)*6:e}function oT({hue:e,saturation:t,lightness:a,alpha:i}){e/=360,t/=100,a/=100;let o=0,l=0,u=0;if(!t)o=l=u=a;else{const p=a<.5?a*(1+t):a+t-a*t,f=2*a-p;o=Dp(f,p,e+1/3),l=Dp(f,p,e),u=Dp(f,p,e-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:i}}function mu(e,t){return a=>a>0?t:e}const tt=(e,t,a)=>e+(t-e)*a,Pp=(e,t,a)=>{const i=e*e,o=a*(t*t-i)+i;return o<0?0:Math.sqrt(o)},lT=[Eh,Ni,Ur],cT=e=>lT.find(t=>t.test(e));function Wb(e){const t=cT(e);if(!t)return!1;let a=t.parse(e);return t===Ur&&(a=oT(a)),a}const Qb=(e,t)=>{const a=Wb(e),i=Wb(t);if(!a||!i)return mu(e,t);const o={...a};return l=>(o.red=Pp(a.red,i.red,l),o.green=Pp(a.green,i.green,l),o.blue=Pp(a.blue,i.blue,l),o.alpha=tt(a.alpha,i.alpha,l),Ni.transform(o))},Mh=new Set(["none","hidden"]);function uT(e,t){return Mh.has(e)?a=>a<=0?e:t:a=>a>=1?t:e}function dT(e,t){return a=>tt(e,t,a)}function Ym(e){return typeof e=="number"?dT:typeof e=="string"?Fm(e)?mu:ut.test(e)?Qb:hT:Array.isArray(e)?z5:typeof e=="object"?ut.test(e)?Qb:fT:mu}function z5(e,t){const a=[...e],i=a.length,o=e.map((l,u)=>Ym(l)(l,t[u]));return l=>{for(let u=0;u<i;u++)a[u]=o[u](l);return a}}function fT(e,t){const a={...e,...t},i={};for(const o in a)e[o]!==void 0&&t[o]!==void 0&&(i[o]=Ym(e[o])(e[o],t[o]));return o=>{for(const l in i)a[l]=i[l](o);return a}}function pT(e,t){const a=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const l=t.types[o],u=e.indexes[l][i[l]],p=e.values[u]??0;a[o]=p,i[l]++}return a}const hT=(e,t)=>{const a=di.createTransformer(t),i=Wo(e),o=Wo(t);return i.indexes.var.length===o.indexes.var.length&&i.indexes.color.length===o.indexes.color.length&&i.indexes.number.length>=o.indexes.number.length?Mh.has(e)&&!o.values.length||Mh.has(t)&&!i.values.length?uT(e,t):cl(z5(pT(i,o),o.values),a):mu(e,t)};function R5(e,t,a){return typeof e=="number"&&typeof t=="number"&&typeof a=="number"?tt(e,t,a):Ym(e)(e,t)}const mT=e=>{const t=({timestamp:a})=>e(a);return{start:(a=!0)=>Be.update(t,a),stop:()=>Bn(t),now:()=>Tt.isProcessing?Tt.timestamp:Xt.now()}},L5=(e,t,a=10)=>{let i="";const o=Math.max(Math.round(t/a),2);for(let l=0;l<o;l++)i+=Math.round(e(l/(o-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},gu=2e4;function Xm(e){let t=0;const a=50;let i=e.next(t);for(;!i.done&&t<gu;)t+=a,i=e.next(t);return t>=gu?1/0:t}function gT(e,t=100,a){const i=a({...e,keyframes:[0,t]}),o=Math.min(Xm(i),gu);return{type:"keyframes",ease:l=>i.next(o*l).value/t,duration:sa(o)}}const bT=5;function O5(e,t,a){const i=Math.max(t-bT,0);return Hm(a-e(i),t-i)}const it={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Vp=.001;function xT({duration:e=it.duration,bounce:t=it.bounce,velocity:a=it.velocity,mass:i=it.mass}){let o,l,u=1-t;u=ca(it.minDamping,it.maxDamping,u),e=ca(it.minDuration,it.maxDuration,sa(e)),u<1?(o=m=>{const g=m*u,x=g*e,y=g-a,v=zh(m,u),S=Math.exp(-x);return Vp-y/v*S},l=m=>{const x=m*u*e,y=x*a+a,v=Math.pow(u,2)*Math.pow(m,2)*e,S=Math.exp(-x),k=zh(Math.pow(m,2),u);return(-o(m)+Vp>0?-1:1)*((y-v)*S)/k}):(o=m=>{const g=Math.exp(-m*e),x=(m-a)*e+1;return-Vp+g*x},l=m=>{const g=Math.exp(-m*e),x=(a-m)*(e*e);return g*x});const p=5/e,f=vT(o,l,p);if(e=ra(e),isNaN(f))return{stiffness:it.stiffness,damping:it.damping,duration:e};{const m=Math.pow(f,2)*i;return{stiffness:m,damping:u*2*Math.sqrt(i*m),duration:e}}}const yT=12;function vT(e,t,a){let i=a;for(let o=1;o<yT;o++)i=i-e(i)/t(i);return i}function zh(e,t){return e*Math.sqrt(1-t*t)}const wT=["duration","bounce"],ST=["stiffness","damping","mass"];function Zb(e,t){return t.some(a=>e[a]!==void 0)}function kT(e){let t={velocity:it.velocity,stiffness:it.stiffness,damping:it.damping,mass:it.mass,isResolvedFromDuration:!1,...e};if(!Zb(e,ST)&&Zb(e,wT))if(e.visualDuration){const a=e.visualDuration,i=2*Math.PI/(a*1.2),o=i*i,l=2*ca(.05,1,1-(e.bounce||0))*Math.sqrt(o);t={...t,mass:it.mass,stiffness:o,damping:l}}else{const a=xT(e);t={...t,...a,mass:it.mass},t.isResolvedFromDuration=!0}return t}function bu(e=it.visualDuration,t=it.bounce){const a=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:i,restDelta:o}=a;const l=a.keyframes[0],u=a.keyframes[a.keyframes.length-1],p={done:!1,value:l},{stiffness:f,damping:m,mass:g,duration:x,velocity:y,isResolvedFromDuration:v}=kT({...a,velocity:-sa(a.velocity||0)}),S=y||0,k=m/(2*Math.sqrt(f*g)),C=u-l,M=sa(Math.sqrt(f/g)),z=Math.abs(C)<5;i||(i=z?it.restSpeed.granular:it.restSpeed.default),o||(o=z?it.restDelta.granular:it.restDelta.default);let A;if(k<1){const E=zh(M,k);A=V=>{const N=Math.exp(-k*M*V);return u-N*((S+k*M*C)/E*Math.sin(E*V)+C*Math.cos(E*V))}}else if(k===1)A=E=>u-Math.exp(-M*E)*(C+(S+M*C)*E);else{const E=M*Math.sqrt(k*k-1);A=V=>{const N=Math.exp(-k*M*V),O=Math.min(E*V,300);return u-N*((S+k*M*C)*Math.sinh(O)+E*C*Math.cosh(O))/E}}const $={calculatedDuration:v&&x||null,next:E=>{const V=A(E);if(v)p.done=E>=x;else{let N=E===0?S:0;k<1&&(N=E===0?ra(S):O5(A,E,V));const O=Math.abs(N)<=i,X=Math.abs(u-V)<=o;p.done=O&&X}return p.value=p.done?u:V,p},toString:()=>{const E=Math.min(Xm($),gu),V=L5(N=>$.next(E*N).value,E,30);return E+"ms "+V},toTransition:()=>{}};return $}bu.applyToOptions=e=>{const t=gT(e,100,bu);return e.ease=t.ease,e.duration=ra(t.duration),e.type="keyframes",e};function Rh({keyframes:e,velocity:t=0,power:a=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:p,max:f,restDelta:m=.5,restSpeed:g}){const x=e[0],y={done:!1,value:x},v=O=>p!==void 0&&O<p||f!==void 0&&O>f,S=O=>p===void 0?f:f===void 0||Math.abs(p-O)<Math.abs(f-O)?p:f;let k=a*t;const C=x+k,M=u===void 0?C:u(C);M!==C&&(k=M-x);const z=O=>-k*Math.exp(-O/i),A=O=>M+z(O),$=O=>{const X=z(O),J=A(O);y.done=Math.abs(X)<=m,y.value=y.done?M:J};let E,V;const N=O=>{v(y.value)&&(E=O,V=bu({keyframes:[y.value,S(y.value)],velocity:O5(A,O,y.value),damping:o,stiffness:l,restDelta:m,restSpeed:g}))};return N(0),{calculatedDuration:null,next:O=>{let X=!1;return!V&&E===void 0&&(X=!0,$(O),N(O)),E!==void 0&&O>=E?V.next(O-E):(!X&&$(O),y)}}}function TT(e,t,a){const i=[],o=a||Oa.mix||R5,l=e.length-1;for(let u=0;u<l;u++){let p=o(e[u],e[u+1]);if(t){const f=Array.isArray(t)?t[u]||Qt:t;p=cl(f,p)}i.push(p)}return i}function Wm(e,t,{clamp:a=!0,ease:i,mixer:o}={}){const l=e.length;if(Yo(l===t.length),l===1)return()=>t[0];if(l===2&&t[0]===t[1])return()=>t[1];const u=e[0]===e[1];e[0]>e[l-1]&&(e=[...e].reverse(),t=[...t].reverse());const p=TT(t,i,o),f=p.length,m=g=>{if(u&&g<e[0])return t[0];let x=0;if(f>1)for(;x<e.length-2&&!(g<e[x+1]);x++);const y=es(e[x],e[x+1],g);return p[x](y)};return a?g=>m(ca(e[0],e[l-1],g)):m}function jT(e,t){const a=e[e.length-1];for(let i=1;i<=t;i++){const o=es(0,t,i);e.push(tt(a,1,o))}}function D5(e){const t=[0];return jT(t,e.length-1),t}function AT(e,t){return e.map(a=>a*t)}function CT(e,t){return e.map(()=>t||Gm).splice(0,e.length-1)}function Do({duration:e=300,keyframes:t,times:a,ease:i="easeInOut"}){const o=H9(i)?i.map(Kb):Kb(i),l={done:!1,value:t[0]},u=AT(a&&a.length===t.length?a:D5(t),e),p=Wm(u,t,{ease:Array.isArray(o)?o:CT(t,o)});return{calculatedDuration:e,next:f=>(l.value=p(f),l.done=f>=e,l)}}const ET=e=>e!==null;function Qm(e,{repeat:t,repeatType:a="loop"},i,o=1){const l=e.filter(ET),p=o<0||t&&a!=="loop"&&t%2===1?0:l.length-1;return!p||i===void 0?l[p]:i}const MT={decay:Rh,inertia:Rh,tween:Do,keyframes:Do,spring:bu};function P5(e){typeof e.type=="string"&&(e.type=MT[e.type])}class Zm{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,a){return this.finished.then(t,a)}}const zT=e=>e/100;class Jm extends Zm{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var i,o;const{motionValue:a}=this.options;a&&a.updatedAt!==Xt.now()&&this.tick(Xt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(i=this.options).onStop)==null||o.call(i))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;P5(t);const{type:a=Do,repeat:i=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=t;let{keyframes:p}=t;const f=a||Do;f!==Do&&typeof p[0]!="number"&&(this.mixKeyframes=cl(zT,R5(p[0],p[1])),p=[0,100]);const m=f({...t,keyframes:p});l==="mirror"&&(this.mirroredGenerator=f({...t,keyframes:[...p].reverse(),velocity:-u})),m.calculatedDuration===null&&(m.calculatedDuration=Xm(m));const{calculatedDuration:g}=m;this.calculatedDuration=g,this.resolvedDuration=g+o,this.totalDuration=this.resolvedDuration*(i+1)-o,this.generator=m}updateTime(t){const a=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=a}tick(t,a=!1){const{generator:i,totalDuration:o,mixKeyframes:l,mirroredGenerator:u,resolvedDuration:p,calculatedDuration:f}=this;if(this.startTime===null)return i.next(0);const{delay:m=0,keyframes:g,repeat:x,repeatType:y,repeatDelay:v,type:S,onUpdate:k,finalKeyframe:C}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-o/this.speed,this.startTime)),a?this.currentTime=t:this.updateTime(t);const M=this.currentTime-m*(this.playbackSpeed>=0?1:-1),z=this.playbackSpeed>=0?M<0:M>o;this.currentTime=Math.max(M,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let A=this.currentTime,$=i;if(x){const O=Math.min(this.currentTime,o)/p;let X=Math.floor(O),J=O%1;!J&&O>=1&&(J=1),J===1&&X--,X=Math.min(X,x+1),!!(X%2)&&(y==="reverse"?(J=1-J,v&&(J-=v/p)):y==="mirror"&&($=u)),A=ca(0,1,J)*p}const E=z?{done:!1,value:g[0]}:$.next(A);l&&(E.value=l(E.value));let{done:V}=E;!z&&f!==null&&(V=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const N=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&V);return N&&S!==Rh&&(E.value=Qm(g,this.options,C,this.speed)),k&&k(E.value),N&&this.finish(),E}then(t,a){return this.finished.then(t,a)}get duration(){return sa(this.calculatedDuration)}get time(){return sa(this.currentTime)}set time(t){var a;t=ra(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(a=this.driver)==null||a.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Xt.now());const a=this.playbackSpeed!==t;this.playbackSpeed=t,a&&(this.time=sa(this.currentTime))}play(){var o,l;if(this.isStopped)return;const{driver:t=mT,startTime:a}=this.options;this.driver||(this.driver=t(u=>this.tick(u))),(l=(o=this.options).onPlay)==null||l.call(o);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=a??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Xt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,a;this.notifyFinished(),this.teardown(),this.state="finished",(a=(t=this.options).onComplete)==null||a.call(t)}cancel(){var t,a;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(a=(t=this.options).onCancel)==null||a.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var a;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(a=this.driver)==null||a.stop(),t.observe(this)}}function RT(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const Bi=e=>e*180/Math.PI,Lh=e=>{const t=Bi(Math.atan2(e[1],e[0]));return Oh(t)},LT={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Lh,rotateZ:Lh,skewX:e=>Bi(Math.atan(e[1])),skewY:e=>Bi(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Oh=e=>(e=e%360,e<0&&(e+=360),e),Jb=Lh,ex=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),tx=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),OT={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ex,scaleY:tx,scale:e=>(ex(e)+tx(e))/2,rotateX:e=>Oh(Bi(Math.atan2(e[6],e[5]))),rotateY:e=>Oh(Bi(Math.atan2(-e[2],e[0]))),rotateZ:Jb,rotate:Jb,skewX:e=>Bi(Math.atan(e[4])),skewY:e=>Bi(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Dh(e){return e.includes("scale")?1:0}function Ph(e,t){if(!e||e==="none")return Dh(t);const a=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,o;if(a)i=OT,o=a;else{const p=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=LT,o=p}if(!o)return Dh(t);const l=i[t],u=o[1].split(",").map(PT);return typeof l=="function"?l(u):u[l]}const DT=(e,t)=>{const{transform:a="none"}=getComputedStyle(e);return Ph(a,t)};function PT(e){return parseFloat(e.trim())}const ms=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],gs=new Set(ms),nx=e=>e===hs||e===me,VT=new Set(["x","y","z"]),NT=ms.filter(e=>!VT.has(e));function BT(e){const t=[];return NT.forEach(a=>{const i=e.getValue(a);i!==void 0&&(t.push([a,i.get()]),i.set(a.startsWith("scale")?1:0))}),t}const Hi={width:({x:e},{paddingLeft:t="0",paddingRight:a="0"})=>e.max-e.min-parseFloat(t)-parseFloat(a),height:({y:e},{paddingTop:t="0",paddingBottom:a="0"})=>e.max-e.min-parseFloat(t)-parseFloat(a),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Ph(t,"x"),y:(e,{transform:t})=>Ph(t,"y")};Hi.translateX=Hi.x;Hi.translateY=Hi.y;const $i=new Set;let Vh=!1,Nh=!1,Bh=!1;function V5(){if(Nh){const e=Array.from($i).filter(i=>i.needsMeasurement),t=new Set(e.map(i=>i.element)),a=new Map;t.forEach(i=>{const o=BT(i);o.length&&(a.set(i,o),i.render())}),e.forEach(i=>i.measureInitialState()),t.forEach(i=>{i.render();const o=a.get(i);o&&o.forEach(([l,u])=>{var p;(p=i.getValue(l))==null||p.set(u)})}),e.forEach(i=>i.measureEndState()),e.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Nh=!1,Vh=!1,$i.forEach(e=>e.complete(Bh)),$i.clear()}function N5(){$i.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Nh=!0)})}function _T(){Bh=!0,N5(),V5(),Bh=!1}class eg{constructor(t,a,i,o,l,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=a,this.name=i,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?($i.add(this),Vh||(Vh=!0,Be.read(N5),Be.resolveKeyframes(V5))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:a,element:i,motionValue:o}=this;if(t[0]===null){const l=o==null?void 0:o.get(),u=t[t.length-1];if(l!==void 0)t[0]=l;else if(i&&a){const p=i.readValue(a,u);p!=null&&(t[0]=p)}t[0]===void 0&&(t[0]=u),o&&l===void 0&&o.set(t[0])}RT(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),$i.delete(this)}cancel(){this.state==="scheduled"&&($i.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const HT=e=>e.startsWith("--");function $T(e,t,a){HT(t)?e.style.setProperty(t,a):e.style[t]=a}const B5=Bm(()=>window.ScrollTimeline!==void 0),UT={};function GT(e,t){const a=Bm(e);return()=>UT[t]??a()}const _5=GT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),zo=([e,t,a,i])=>`cubic-bezier(${e}, ${t}, ${a}, ${i})`,ax={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:zo([0,.65,.55,1]),circOut:zo([.55,0,1,.45]),backIn:zo([.31,.01,.66,-.59]),backOut:zo([.33,1.53,.69,.99])};function H5(e,t){if(e)return typeof e=="function"?_5()?L5(e,t):"ease-out":S5(e)?zo(e):Array.isArray(e)?e.map(a=>H5(a,t)||ax.easeOut):ax[e]}function IT(e,t,a,{delay:i=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:p="easeOut",times:f}={},m=void 0){const g={[t]:a};f&&(g.offset=f);const x=H5(p,o);Array.isArray(x)&&(g.easing=x);const y={delay:i,duration:o,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"};return m&&(y.pseudoElement=m),e.animate(g,y)}function $5(e){return typeof e=="function"&&"applyToOptions"in e}function FT({type:e,...t}){return $5(e)&&_5()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class qT extends Zm{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:a,name:i,keyframes:o,pseudoElement:l,allowFlatten:u=!1,finalKeyframe:p,onComplete:f}=t;this.isPseudoElement=!!l,this.allowFlatten=u,this.options=t,Yo(typeof t.type!="string");const m=FT(t);this.animation=IT(a,i,o,m,l),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const g=Qm(o,this.options,p,this.speed);this.updateMotionValue?this.updateMotionValue(g):$T(a,i,g),this.animation.cancel()}f==null||f(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,a;(a=(t=this.animation).finish)==null||a.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,a;this.isPseudoElement||(a=(t=this.animation).commitStyles)==null||a.call(t)}get duration(){var a,i;const t=((i=(a=this.animation.effect)==null?void 0:a.getComputedTiming)==null?void 0:i.call(a).duration)||0;return sa(Number(t))}get time(){return sa(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=ra(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:a}){var i;return this.allowFlatten&&((i=this.animation.effect)==null||i.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&B5()?(this.animation.timeline=t,Qt):a(this)}}const U5={anticipate:y5,backInOut:x5,circInOut:w5};function KT(e){return e in U5}function YT(e){typeof e.ease=="string"&&KT(e.ease)&&(e.ease=U5[e.ease])}const ix=10;class XT extends qT{constructor(t){YT(t),P5(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:a,onUpdate:i,onComplete:o,element:l,...u}=this.options;if(!a)return;if(t!==void 0){a.set(t);return}const p=new Jm({...u,autoplay:!1}),f=ra(this.finishedTime??this.time);a.setWithVelocity(p.sample(f-ix).value,p.sample(f).value,ix),p.stop()}}const rx=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(di.test(e)||e==="0")&&!e.startsWith("url("));function WT(e){const t=e[0];if(e.length===1)return!0;for(let a=0;a<e.length;a++)if(e[a]!==t)return!0}function QT(e,t,a,i){const o=e[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const l=e[e.length-1],u=rx(o,t),p=rx(l,t);return!u||!p?!1:WT(e)||(a==="spring"||$5(a))&&i}function _h(e){e.duration=0,e.type}const ZT=new Set(["opacity","clipPath","filter","transform"]),JT=Bm(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function ej(e){var g;const{motionValue:t,name:a,repeatDelay:i,repeatType:o,damping:l,type:u}=e;if(!(((g=t==null?void 0:t.owner)==null?void 0:g.current)instanceof HTMLElement))return!1;const{onUpdate:f,transformTemplate:m}=t.owner.getProps();return JT()&&a&&ZT.has(a)&&(a!=="transform"||!m)&&!f&&!i&&o!=="mirror"&&l!==0&&u!=="inertia"}const tj=40;class nj extends Zm{constructor({autoplay:t=!0,delay:a=0,type:i="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",keyframes:p,name:f,motionValue:m,element:g,...x}){var S;super(),this.stop=()=>{var k,C;this._animation&&(this._animation.stop(),(k=this.stopTimeline)==null||k.call(this)),(C=this.keyframeResolver)==null||C.cancel()},this.createdAt=Xt.now();const y={autoplay:t,delay:a,type:i,repeat:o,repeatDelay:l,repeatType:u,name:f,motionValue:m,element:g,...x},v=(g==null?void 0:g.KeyframeResolver)||eg;this.keyframeResolver=new v(p,(k,C,M)=>this.onKeyframesResolved(k,C,y,!M),f,m,g),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(t,a,i,o){this.keyframeResolver=void 0;const{name:l,type:u,velocity:p,delay:f,isHandoff:m,onUpdate:g}=i;this.resolvedAt=Xt.now(),QT(t,l,u,p)||((Oa.instantAnimations||!f)&&(g==null||g(Qm(t,i,a))),t[0]=t[t.length-1],_h(i),i.repeat=0);const y={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>tj?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:a,...i,keyframes:t},v=!m&&ej(y)?new XT({...y,element:y.motionValue.owner.current}):new Jm(y);v.finished.then(()=>this.notifyFinished()).catch(Qt),this.pendingTimeline&&(this.stopTimeline=v.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=v}get finished(){return this._animation?this.animation.finished:this._finished}then(t,a){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),_T()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const aj=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function ij(e){const t=aj.exec(e);if(!t)return[,];const[,a,i,o]=t;return[`--${a??i}`,o]}function G5(e,t,a=1){const[i,o]=ij(e);if(!i)return;const l=window.getComputedStyle(t).getPropertyValue(i);if(l){const u=l.trim();return f5(u)?parseFloat(u):u}return Fm(o)?G5(o,t,a+1):o}function tg(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const I5=new Set(["width","height","top","left","right","bottom",...ms]),rj={test:e=>e==="auto",parse:e=>e},F5=e=>t=>t.test(e),q5=[hs,me,oa,si,J9,Z9,rj],sx=e=>q5.find(F5(e));function sj(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||h5(e):!0}const oj=new Set(["brightness","contrast","saturate","opacity"]);function lj(e){const[t,a]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[i]=a.match(qm)||[];if(!i)return e;const o=a.replace(i,"");let l=oj.has(t)?1:0;return i!==a&&(l*=100),t+"("+l+o+")"}const cj=/\b([a-z-]*)\(.*?\)/gu,Hh={...di,getAnimatableNone:e=>{const t=e.match(cj);return t?t.map(lj).join(" "):e}},ox={...hs,transform:Math.round},uj={rotate:si,rotateX:si,rotateY:si,rotateZ:si,scale:Oc,scaleX:Oc,scaleY:Oc,scaleZ:Oc,skew:si,skewX:si,skewY:si,distance:me,translateX:me,translateY:me,translateZ:me,x:me,y:me,z:me,perspective:me,transformPerspective:me,opacity:Xo,originX:Yb,originY:Yb,originZ:me},ng={borderWidth:me,borderTopWidth:me,borderRightWidth:me,borderBottomWidth:me,borderLeftWidth:me,borderRadius:me,radius:me,borderTopLeftRadius:me,borderTopRightRadius:me,borderBottomRightRadius:me,borderBottomLeftRadius:me,width:me,maxWidth:me,height:me,maxHeight:me,top:me,right:me,bottom:me,left:me,padding:me,paddingTop:me,paddingRight:me,paddingBottom:me,paddingLeft:me,margin:me,marginTop:me,marginRight:me,marginBottom:me,marginLeft:me,backgroundPositionX:me,backgroundPositionY:me,...uj,zIndex:ox,fillOpacity:Xo,strokeOpacity:Xo,numOctaves:ox},dj={...ng,color:ut,backgroundColor:ut,outlineColor:ut,fill:ut,stroke:ut,borderColor:ut,borderTopColor:ut,borderRightColor:ut,borderBottomColor:ut,borderLeftColor:ut,filter:Hh,WebkitFilter:Hh},K5=e=>dj[e];function Y5(e,t){let a=K5(e);return a!==Hh&&(a=di),a.getAnimatableNone?a.getAnimatableNone(t):void 0}const fj=new Set(["auto","none","0"]);function pj(e,t,a){let i=0,o;for(;i<e.length&&!o;){const l=e[i];typeof l=="string"&&!fj.has(l)&&Wo(l).values.length&&(o=e[i]),i++}if(o&&a)for(const l of t)e[l]=Y5(a,o)}class hj extends eg{constructor(t,a,i,o,l){super(t,a,i,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:a,name:i}=this;if(!a||!a.current)return;super.readKeyframes();for(let f=0;f<t.length;f++){let m=t[f];if(typeof m=="string"&&(m=m.trim(),Fm(m))){const g=G5(m,a.current);g!==void 0&&(t[f]=g),f===t.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!I5.has(i)||t.length!==2)return;const[o,l]=t,u=sx(o),p=sx(l);if(u!==p)if(nx(u)&&nx(p))for(let f=0;f<t.length;f++){const m=t[f];typeof m=="string"&&(t[f]=parseFloat(m))}else Hi[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:a}=this,i=[];for(let o=0;o<t.length;o++)(t[o]===null||sj(t[o]))&&i.push(o);i.length&&pj(t,i,a)}measureInitialState(){const{element:t,unresolvedKeyframes:a,name:i}=this;if(!t||!t.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Hi[i](t.measureViewportBox(),window.getComputedStyle(t.current)),a[0]=this.measuredOrigin;const o=a[a.length-1];o!==void 0&&t.getValue(i,o).jump(o,!1)}measureEndState(){var p;const{element:t,name:a,unresolvedKeyframes:i}=this;if(!t||!t.current)return;const o=t.getValue(a);o&&o.jump(this.measuredOrigin,!1);const l=i.length-1,u=i[l];i[l]=Hi[a](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),(p=this.removedTransforms)!=null&&p.length&&this.removedTransforms.forEach(([f,m])=>{t.getValue(f).set(m)}),this.resolveNoneKeyframes()}}function X5(e,t,a){if(e instanceof EventTarget)return[e];if(typeof e=="string"){const o=document.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}const W5=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function ag(e){return p5(e)&&"offsetHeight"in e}const lx=30,mj=e=>!isNaN(parseFloat(e)),Po={current:void 0};class gj{constructor(t,a={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var l;const o=Xt.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((l=this.events.change)==null||l.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=a.owner}setCurrent(t){this.current=t,this.updatedAt=Xt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=mj(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,a){this.events[t]||(this.events[t]=new _m);const i=this.events[t].add(a);return t==="change"?()=>{i(),Be.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,a){this.passiveEffect=t,this.stopPassiveEffect=a}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,a,i){this.set(a),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-i}jump(t,a=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,a&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return Po.current&&Po.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=Xt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>lx)return 0;const a=Math.min(this.updatedAt-this.prevUpdatedAt,lx);return Hm(parseFloat(this.current)-parseFloat(this.prevFrameValue),a)}start(t){return this.stop(),new Promise(a=>{this.hasAnimated=!0,this.animation=t(a),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,a;(t=this.dependents)==null||t.clear(),(a=this.events.destroy)==null||a.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Pn(e,t){return new gj(e,t)}const{schedule:ig}=k5(queueMicrotask,!1),Dn={x:!1,y:!1};function Q5(){return Dn.x||Dn.y}function bj(e){return e==="x"||e==="y"?Dn[e]?null:(Dn[e]=!0,()=>{Dn[e]=!1}):Dn.x||Dn.y?null:(Dn.x=Dn.y=!0,()=>{Dn.x=Dn.y=!1})}function Z5(e,t){const a=X5(e),i=new AbortController,o={passive:!0,...t,signal:i.signal};return[a,o,()=>i.abort()]}function cx(e){return!(e.pointerType==="touch"||Q5())}function xj(e,t,a={}){const[i,o,l]=Z5(e,a),u=p=>{if(!cx(p))return;const{target:f}=p,m=t(f,p);if(typeof m!="function"||!f)return;const g=x=>{cx(x)&&(m(x),f.removeEventListener("pointerleave",g))};f.addEventListener("pointerleave",g,o)};return i.forEach(p=>{p.addEventListener("pointerenter",u,o)}),l}const J5=(e,t)=>t?e===t?!0:J5(e,t.parentElement):!1,rg=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,yj=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function vj(e){return yj.has(e.tagName)||e.tabIndex!==-1}const tu=new WeakSet;function ux(e){return t=>{t.key==="Enter"&&e(t)}}function Np(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const wj=(e,t)=>{const a=e.currentTarget;if(!a)return;const i=ux(()=>{if(tu.has(a))return;Np(a,"down");const o=ux(()=>{Np(a,"up")}),l=()=>Np(a,"cancel");a.addEventListener("keyup",o,t),a.addEventListener("blur",l,t)});a.addEventListener("keydown",i,t),a.addEventListener("blur",()=>a.removeEventListener("keydown",i),t)};function dx(e){return rg(e)&&!Q5()}function Sj(e,t,a={}){const[i,o,l]=Z5(e,a),u=p=>{const f=p.currentTarget;if(!dx(p))return;tu.add(f);const m=t(f,p),g=(v,S)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",y),tu.has(f)&&tu.delete(f),dx(v)&&typeof m=="function"&&m(v,{success:S})},x=v=>{g(v,f===window||f===document||a.useGlobalTarget||J5(f,v.target))},y=v=>{g(v,!1)};window.addEventListener("pointerup",x,o),window.addEventListener("pointercancel",y,o)};return i.forEach(p=>{(a.useGlobalTarget?window:p).addEventListener("pointerdown",u,o),ag(p)&&(p.addEventListener("focus",m=>wj(m,o)),!vj(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),l}function sg(e){return p5(e)&&"ownerSVGElement"in e}const nu=new WeakMap;let oi;const e4=(e,t,a)=>(i,o)=>o&&o[0]?o[0][e+"Size"]:sg(i)&&"getBBox"in i?i.getBBox()[t]:i[a],kj=e4("inline","width","offsetWidth"),Tj=e4("block","height","offsetHeight");function jj({target:e,borderBoxSize:t}){var a;(a=nu.get(e))==null||a.forEach(i=>{i(e,{get width(){return kj(e,t)},get height(){return Tj(e,t)}})})}function Aj(e){e.forEach(jj)}function Cj(){typeof ResizeObserver>"u"||(oi=new ResizeObserver(Aj))}function Ej(e,t){oi||Cj();const a=X5(e);return a.forEach(i=>{let o=nu.get(i);o||(o=new Set,nu.set(i,o)),o.add(t),oi==null||oi.observe(i)}),()=>{a.forEach(i=>{const o=nu.get(i);o==null||o.delete(t),o!=null&&o.size||oi==null||oi.unobserve(i)})}}const au=new Set;let Gr;function Mj(){Gr=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};au.forEach(t=>t(e))},window.addEventListener("resize",Gr)}function zj(e){return au.add(e),Gr||Mj(),()=>{au.delete(e),!au.size&&typeof Gr=="function"&&(window.removeEventListener("resize",Gr),Gr=void 0)}}function Rj(e,t){return typeof e=="function"?zj(e):Ej(e,t)}function t4(e,t){let a;const i=()=>{const{currentTime:o}=t,u=(o===null?0:o.value)/100;a!==u&&e(u),a=u};return Be.preUpdate(i,!0),()=>Bn(i)}function Lj(e){return sg(e)&&e.tagName==="svg"}function Oj(...e){const t=!Array.isArray(e[0]),a=t?0:-1,i=e[0+a],o=e[1+a],l=e[2+a],u=e[3+a],p=Wm(o,l,u);return t?p(i):p}const Bt=e=>!!(e&&e.getVelocity),Dj=[...q5,ut,di],Pj=e=>Dj.find(F5(e)),Ku=j.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Vj extends j.Component{getSnapshotBeforeUpdate(t){const a=this.props.childRef.current;if(a&&t.isPresent&&!this.props.isPresent){const i=a.offsetParent,o=ag(i)&&i.offsetWidth||0,l=this.props.sizeRef.current;l.height=a.offsetHeight||0,l.width=a.offsetWidth||0,l.top=a.offsetTop,l.left=a.offsetLeft,l.right=o-l.width-l.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Nj({children:e,isPresent:t,anchorX:a,root:i}){const o=j.useId(),l=j.useRef(null),u=j.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:p}=j.useContext(Ku);return j.useInsertionEffect(()=>{const{width:f,height:m,top:g,left:x,right:y}=u.current;if(t||!l.current||!f||!m)return;const v=a==="left"?`left: ${x}`:`right: ${y}`;l.current.dataset.motionPopId=o;const S=document.createElement("style");p&&(S.nonce=p);const k=i??document.head;return k.appendChild(S),S.sheet&&S.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${m}px !important;
            ${v}px !important;
            top: ${g}px !important;
          }
        `),()=>{k.contains(S)&&k.removeChild(S)}},[t]),d.jsx(Vj,{isPresent:t,childRef:l,sizeRef:u,children:j.cloneElement(e,{ref:l})})}const Bj=({children:e,initial:t,isPresent:a,onExitComplete:i,custom:o,presenceAffectsLayout:l,mode:u,anchorX:p,root:f})=>{const m=ps(_j),g=j.useId();let x=!0,y=j.useMemo(()=>(x=!1,{id:g,initial:t,isPresent:a,custom:o,onExitComplete:v=>{m.set(v,!0);for(const S of m.values())if(!S)return;i&&i()},register:v=>(m.set(v,!1),()=>m.delete(v))}),[a,m,i]);return l&&x&&(y={...y}),j.useMemo(()=>{m.forEach((v,S)=>m.set(S,!1))},[a]),j.useEffect(()=>{!a&&!m.size&&i&&i()},[a]),u==="popLayout"&&(e=d.jsx(Nj,{isPresent:a,anchorX:p,root:f,children:e})),d.jsx(Fu.Provider,{value:y,children:e})};function _j(){return new Map}function n4(e=!0){const t=j.useContext(Fu);if(t===null)return[!0,null];const{isPresent:a,onExitComplete:i,register:o}=t,l=j.useId();j.useEffect(()=>{if(e)return o(l)},[e]);const u=j.useCallback(()=>e&&i&&i(l),[l,i,e]);return!a&&i?[!1,u]:[!0]}const Dc=e=>e.key||"";function fx(e){const t=[];return j.Children.forEach(e,a=>{j.isValidElement(a)&&t.push(a)}),t}const a4=({children:e,custom:t,initial:a=!0,onExitComplete:i,presenceAffectsLayout:o=!0,mode:l="sync",propagate:u=!1,anchorX:p="left",root:f})=>{const[m,g]=n4(u),x=j.useMemo(()=>fx(e),[e]),y=u&&!m?[]:x.map(Dc),v=j.useRef(!0),S=j.useRef(x),k=ps(()=>new Map),[C,M]=j.useState(x),[z,A]=j.useState(x);Iu(()=>{v.current=!1,S.current=x;for(let V=0;V<z.length;V++){const N=Dc(z[V]);y.includes(N)?k.delete(N):k.get(N)!==!0&&k.set(N,!1)}},[z,y.length,y.join("-")]);const $=[];if(x!==C){let V=[...x];for(let N=0;N<z.length;N++){const O=z[N],X=Dc(O);y.includes(X)||(V.splice(N,0,O),$.push(O))}return l==="wait"&&$.length&&(V=$),A(fx(V)),M(x),null}const{forceRender:E}=j.useContext(Dm);return d.jsx(d.Fragment,{children:z.map(V=>{const N=Dc(V),O=u&&!m?!1:x===z||y.includes(N),X=()=>{if(k.has(N))k.set(N,!0);else return;let J=!0;k.forEach(H=>{H||(J=!1)}),J&&(E==null||E(),A(S.current),u&&(g==null||g()),i&&i())};return d.jsx(Bj,{isPresent:O,initial:!v.current||a?void 0:!1,custom:t,presenceAffectsLayout:o,mode:l,root:f,onExitComplete:O?void 0:X,anchorX:p,children:V},N)})})},i4=j.createContext({strict:!1}),px={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ts={};for(const e in px)ts[e]={isEnabled:t=>px[e].some(a=>!!t[a])};function Hj(e){for(const t in e)ts[t]={...ts[t],...e[t]}}const $j=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function xu(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||$j.has(e)}let r4=e=>!xu(e);function Uj(e){typeof e=="function"&&(r4=t=>t.startsWith("on")?!xu(t):e(t))}try{Uj(require("@emotion/is-prop-valid").default)}catch{}function Gj(e,t,a){const i={};for(const o in e)o==="values"&&typeof e.values=="object"||(r4(o)||a===!0&&xu(o)||!t&&!xu(o)||e.draggable&&o.startsWith("onDrag"))&&(i[o]=e[o]);return i}const Yu=j.createContext({});function Xu(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Qo(e){return typeof e=="string"||Array.isArray(e)}const og=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],lg=["initial",...og];function Wu(e){return Xu(e.animate)||lg.some(t=>Qo(e[t]))}function s4(e){return!!(Wu(e)||e.variants)}function Ij(e,t){if(Wu(e)){const{initial:a,animate:i}=e;return{initial:a===!1||Qo(a)?a:void 0,animate:Qo(i)?i:void 0}}return e.inherit!==!1?t:{}}function Fj(e){const{initial:t,animate:a}=Ij(e,j.useContext(Yu));return j.useMemo(()=>({initial:t,animate:a}),[hx(t),hx(a)])}function hx(e){return Array.isArray(e)?e.join(" "):e}const Zo={};function qj(e){for(const t in e)Zo[t]=e[t],Im(t)&&(Zo[t].isCSSVariable=!0)}function o4(e,{layout:t,layoutId:a}){return gs.has(e)||e.startsWith("origin")||(t||a!==void 0)&&(!!Zo[e]||e==="opacity")}const Kj={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Yj=ms.length;function Xj(e,t,a){let i="",o=!0;for(let l=0;l<Yj;l++){const u=ms[l],p=e[u];if(p===void 0)continue;let f=!0;if(typeof p=="number"?f=p===(u.startsWith("scale")?1:0):f=parseFloat(p)===0,!f||a){const m=W5(p,ng[u]);if(!f){o=!1;const g=Kj[u]||u;i+=`${g}(${m}) `}a&&(t[u]=m)}}return i=i.trim(),a?i=a(t,o?"":i):o&&(i="none"),i}function cg(e,t,a){const{style:i,vars:o,transformOrigin:l}=e;let u=!1,p=!1;for(const f in t){const m=t[f];if(gs.has(f)){u=!0;continue}else if(Im(f)){o[f]=m;continue}else{const g=W5(m,ng[f]);f.startsWith("origin")?(p=!0,l[f]=g):i[f]=g}}if(t.transform||(u||a?i.transform=Xj(t,e.transform,a):i.transform&&(i.transform="none")),p){const{originX:f="50%",originY:m="50%",originZ:g=0}=l;i.transformOrigin=`${f} ${m} ${g}`}}const ug=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function l4(e,t,a){for(const i in t)!Bt(t[i])&&!o4(i,a)&&(e[i]=t[i])}function Wj({transformTemplate:e},t){return j.useMemo(()=>{const a=ug();return cg(a,t,e),Object.assign({},a.vars,a.style)},[t])}function Qj(e,t){const a=e.style||{},i={};return l4(i,a,e),Object.assign(i,Wj(e,t)),i}function Zj(e,t){const a={},i=Qj(e,t);return e.drag&&e.dragListener!==!1&&(a.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(a.tabIndex=0),a.style=i,a}const Jj={offset:"stroke-dashoffset",array:"stroke-dasharray"},e7={offset:"strokeDashoffset",array:"strokeDasharray"};function t7(e,t,a=1,i=0,o=!0){e.pathLength=1;const l=o?Jj:e7;e[l.offset]=me.transform(-i);const u=me.transform(t),p=me.transform(a);e[l.array]=`${u} ${p}`}function c4(e,{attrX:t,attrY:a,attrScale:i,pathLength:o,pathSpacing:l=1,pathOffset:u=0,...p},f,m,g){if(cg(e,p,m),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:x,style:y}=e;x.transform&&(y.transform=x.transform,delete x.transform),(y.transform||x.transformOrigin)&&(y.transformOrigin=x.transformOrigin??"50% 50%",delete x.transformOrigin),y.transform&&(y.transformBox=(g==null?void 0:g.transformBox)??"fill-box",delete x.transformBox),t!==void 0&&(x.x=t),a!==void 0&&(x.y=a),i!==void 0&&(x.scale=i),o!==void 0&&t7(x,o,l,u,!1)}const u4=()=>({...ug(),attrs:{}}),d4=e=>typeof e=="string"&&e.toLowerCase()==="svg";function n7(e,t,a,i){const o=j.useMemo(()=>{const l=u4();return c4(l,t,d4(i),e.transformTemplate,e.style),{...l.attrs,style:{...l.style}}},[t]);if(e.style){const l={};l4(l,e.style,e),o.style={...l,...o.style}}return o}const a7=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function dg(e){return typeof e!="string"||e.includes("-")?!1:!!(a7.indexOf(e)>-1||/[A-Z]/u.test(e))}function i7(e,t,a,{latestValues:i},o,l=!1){const p=(dg(e)?n7:Zj)(t,i,o,e),f=Gj(t,typeof e=="string",l),m=e!==j.Fragment?{...f,...p,ref:a}:{},{children:g}=t,x=j.useMemo(()=>Bt(g)?g.get():g,[g]);return j.createElement(e,{...m,children:x})}function mx(e){const t=[{},{}];return e==null||e.values.forEach((a,i)=>{t[0][i]=a.get(),t[1][i]=a.getVelocity()}),t}function fg(e,t,a,i){if(typeof t=="function"){const[o,l]=mx(i);t=t(a!==void 0?a:e.custom,o,l)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[o,l]=mx(i);t=t(a!==void 0?a:e.custom,o,l)}return t}function iu(e){return Bt(e)?e.get():e}function r7({scrapeMotionValuesFromProps:e,createRenderState:t},a,i,o){return{latestValues:s7(a,i,o,e),renderState:t()}}function s7(e,t,a,i){const o={},l=i(e,{});for(const y in l)o[y]=iu(l[y]);let{initial:u,animate:p}=e;const f=Wu(e),m=s4(e);t&&m&&!f&&e.inherit!==!1&&(u===void 0&&(u=t.initial),p===void 0&&(p=t.animate));let g=a?a.initial===!1:!1;g=g||u===!1;const x=g?p:u;if(x&&typeof x!="boolean"&&!Xu(x)){const y=Array.isArray(x)?x:[x];for(let v=0;v<y.length;v++){const S=fg(e,y[v]);if(S){const{transitionEnd:k,transition:C,...M}=S;for(const z in M){let A=M[z];if(Array.isArray(A)){const $=g?A.length-1:0;A=A[$]}A!==null&&(o[z]=A)}for(const z in k)o[z]=k[z]}}}return o}const f4=e=>(t,a)=>{const i=j.useContext(Yu),o=j.useContext(Fu),l=()=>r7(e,t,i,o);return a?l():ps(l)};function pg(e,t,a){var l;const{style:i}=e,o={};for(const u in i)(Bt(i[u])||t.style&&Bt(t.style[u])||o4(u,e)||((l=a==null?void 0:a.getValue(u))==null?void 0:l.liveStyle)!==void 0)&&(o[u]=i[u]);return o}const o7=f4({scrapeMotionValuesFromProps:pg,createRenderState:ug});function p4(e,t,a){const i=pg(e,t,a);for(const o in e)if(Bt(e[o])||Bt(t[o])){const l=ms.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;i[l]=e[o]}return i}const l7=f4({scrapeMotionValuesFromProps:p4,createRenderState:u4}),c7=Symbol.for("motionComponentSymbol");function Ir(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function u7(e,t,a){return j.useCallback(i=>{i&&e.onMount&&e.onMount(i),t&&(i?t.mount(i):t.unmount()),a&&(typeof a=="function"?a(i):Ir(a)&&(a.current=i))},[t])}const hg=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),d7="framerAppearId",h4="data-"+hg(d7),m4=j.createContext({});function f7(e,t,a,i,o){var k,C;const{visualElement:l}=j.useContext(Yu),u=j.useContext(i4),p=j.useContext(Fu),f=j.useContext(Ku).reducedMotion,m=j.useRef(null);i=i||u.renderer,!m.current&&i&&(m.current=i(e,{visualState:t,parent:l,props:a,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:f}));const g=m.current,x=j.useContext(m4);g&&!g.projection&&o&&(g.type==="html"||g.type==="svg")&&p7(m.current,a,o,x);const y=j.useRef(!1);j.useInsertionEffect(()=>{g&&y.current&&g.update(a,p)});const v=a[h4],S=j.useRef(!!v&&!((k=window.MotionHandoffIsComplete)!=null&&k.call(window,v))&&((C=window.MotionHasOptimisedAnimation)==null?void 0:C.call(window,v)));return Iu(()=>{g&&(y.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),S.current&&g.animationState&&g.animationState.animateChanges())}),j.useEffect(()=>{g&&(!S.current&&g.animationState&&g.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var M;(M=window.MotionHandoffMarkAsComplete)==null||M.call(window,v)}),S.current=!1),g.enteringChildren=void 0)}),g}function p7(e,t,a,i){const{layoutId:o,layout:l,drag:u,dragConstraints:p,layoutScroll:f,layoutRoot:m,layoutCrossfade:g}=t;e.projection=new a(e.latestValues,t["data-framer-portal-id"]?void 0:g4(e.parent)),e.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||p&&Ir(p),visualElement:e,animationType:typeof l=="string"?l:"both",initialPromotionConfig:i,crossfade:g,layoutScroll:f,layoutRoot:m})}function g4(e){if(e)return e.options.allowProjection!==!1?e.projection:g4(e.parent)}function Bp(e,{forwardMotionProps:t=!1}={},a,i){a&&Hj(a);const o=dg(e)?l7:o7;function l(p,f){let m;const g={...j.useContext(Ku),...p,layoutId:h7(p)},{isStatic:x}=g,y=Fj(p),v=o(p,x);if(!x&&Pm){m7();const S=g7(g);m=S.MeasureLayout,y.visualElement=f7(e,v,g,i,S.ProjectionNode)}return d.jsxs(Yu.Provider,{value:y,children:[m&&y.visualElement?d.jsx(m,{visualElement:y.visualElement,...g}):null,i7(e,p,u7(v,y.visualElement,f),v,x,t)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const u=j.forwardRef(l);return u[c7]=e,u}function h7({layoutId:e}){const t=j.useContext(Dm).id;return t&&e!==void 0?t+"-"+e:e}function m7(e,t){j.useContext(i4).strict}function g7(e){const{drag:t,layout:a}=ts;if(!t&&!a)return{};const i={...t,...a};return{MeasureLayout:t!=null&&t.isEnabled(e)||a!=null&&a.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function b7(e,t){if(typeof Proxy>"u")return Bp;const a=new Map,i=(l,u)=>Bp(l,u,e,t),o=(l,u)=>i(l,u);return new Proxy(o,{get:(l,u)=>u==="create"?i:(a.has(u)||a.set(u,Bp(u,void 0,e,t)),a.get(u))})}function b4({top:e,left:t,right:a,bottom:i}){return{x:{min:t,max:a},y:{min:e,max:i}}}function x7({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function y7(e,t){if(!t)return e;const a=t({x:e.left,y:e.top}),i=t({x:e.right,y:e.bottom});return{top:a.y,left:a.x,bottom:i.y,right:i.x}}function _p(e){return e===void 0||e===1}function $h({scale:e,scaleX:t,scaleY:a}){return!_p(e)||!_p(t)||!_p(a)}function Vi(e){return $h(e)||x4(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function x4(e){return gx(e.x)||gx(e.y)}function gx(e){return e&&e!=="0%"}function yu(e,t,a){const i=e-a,o=t*i;return a+o}function bx(e,t,a,i,o){return o!==void 0&&(e=yu(e,o,i)),yu(e,a,i)+t}function Uh(e,t=0,a=1,i,o){e.min=bx(e.min,t,a,i,o),e.max=bx(e.max,t,a,i,o)}function y4(e,{x:t,y:a}){Uh(e.x,t.translate,t.scale,t.originPoint),Uh(e.y,a.translate,a.scale,a.originPoint)}const xx=.999999999999,yx=1.0000000000001;function v7(e,t,a,i=!1){const o=a.length;if(!o)return;t.x=t.y=1;let l,u;for(let p=0;p<o;p++){l=a[p],u=l.projectionDelta;const{visualElement:f}=l.options;f&&f.props.style&&f.props.style.display==="contents"||(i&&l.options.layoutScroll&&l.scroll&&l!==l.root&&qr(e,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(t.x*=u.x.scale,t.y*=u.y.scale,y4(e,u)),i&&Vi(l.latestValues)&&qr(e,l.latestValues))}t.x<yx&&t.x>xx&&(t.x=1),t.y<yx&&t.y>xx&&(t.y=1)}function Fr(e,t){e.min=e.min+t,e.max=e.max+t}function vx(e,t,a,i,o=.5){const l=tt(e.min,e.max,o);Uh(e,t,a,l,i)}function qr(e,t){vx(e.x,t.x,t.scaleX,t.scale,t.originX),vx(e.y,t.y,t.scaleY,t.scale,t.originY)}function v4(e,t){return b4(y7(e.getBoundingClientRect(),t))}function w7(e,t,a){const i=v4(e,a),{scroll:o}=t;return o&&(Fr(i.x,o.offset.x),Fr(i.y,o.offset.y)),i}const wx=()=>({translate:0,scale:1,origin:0,originPoint:0}),Kr=()=>({x:wx(),y:wx()}),Sx=()=>({min:0,max:0}),ot=()=>({x:Sx(),y:Sx()}),Gh={current:null},w4={current:!1};function S7(){if(w4.current=!0,!!Pm)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Gh.current=e.matches;e.addEventListener("change",t),t()}else Gh.current=!1}const k7=new WeakMap;function T7(e,t,a){for(const i in t){const o=t[i],l=a[i];if(Bt(o))e.addValue(i,o);else if(Bt(l))e.addValue(i,Pn(o,{owner:e}));else if(l!==o)if(e.hasValue(i)){const u=e.getValue(i);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=e.getStaticValue(i);e.addValue(i,Pn(u!==void 0?u:o,{owner:e}))}}for(const i in a)t[i]===void 0&&e.removeValue(i);return t}const kx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class j7{scrapeMotionValuesFromProps(t,a,i){return{}}constructor({parent:t,props:a,presenceContext:i,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=eg,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=Xt.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,Be.render(this.render,!1,!0))};const{latestValues:f,renderState:m}=u;this.latestValues=f,this.baseTarget={...f},this.initialValues=a.initial?{...f}:{},this.renderState=m,this.parent=t,this.props=a,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=p,this.blockInitialAnimation=!!l,this.isControllingVariants=Wu(a),this.isVariantNode=s4(a),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:g,...x}=this.scrapeMotionValuesFromProps(a,{},this);for(const y in x){const v=x[y];f[y]!==void 0&&Bt(v)&&v.set(f[y])}}mount(t){var a;this.current=t,k7.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,o)=>this.bindToMotionValue(o,i)),w4.current||S7(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Gh.current,(a=this.parent)==null||a.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),Bn(this.notifyUpdate),Bn(this.render),this.valueSubscriptions.forEach(a=>a()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const a in this.events)this.events[a].clear();for(const a in this.features){const i=this.features[a];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,a){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const i=gs.has(t);i&&this.onBindTransform&&this.onBindTransform();const o=a.on("change",u=>{this.latestValues[t]=u,this.props.onUpdate&&Be.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,t,a)),this.valueSubscriptions.set(t,()=>{o(),l&&l(),a.owner&&a.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in ts){const a=ts[t];if(!a)continue;const{isEnabled:i,Feature:o}=a;if(!this.features[t]&&o&&i(this.props)&&(this.features[t]=new o(this)),this.features[t]){const l=this.features[t];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ot()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,a){this.latestValues[t]=a}update(t,a){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=a;for(let i=0;i<kx.length;i++){const o=kx[i];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=t[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=T7(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const a=this.getClosestVariantNode();if(a)return a.variantChildren&&a.variantChildren.add(t),()=>a.variantChildren.delete(t)}addValue(t,a){const i=this.values.get(t);a!==i&&(i&&this.removeValue(t),this.bindToMotionValue(t,a),this.values.set(t,a),this.latestValues[t]=a.get())}removeValue(t){this.values.delete(t);const a=this.valueSubscriptions.get(t);a&&(a(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,a){if(this.props.values&&this.props.values[t])return this.props.values[t];let i=this.values.get(t);return i===void 0&&a!==void 0&&(i=Pn(a===null?void 0:a,{owner:this}),this.addValue(t,i)),i}readValue(t,a){let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(f5(i)||h5(i))?i=parseFloat(i):!Pj(i)&&di.test(a)&&(i=Y5(t,a)),this.setBaseTarget(t,Bt(i)?i.get():i)),Bt(i)?i.get():i}setBaseTarget(t,a){this.baseTarget[t]=a}getBaseTarget(t){var l;const{initial:a}=this.props;let i;if(typeof a=="string"||typeof a=="object"){const u=fg(this.props,a,(l=this.presenceContext)==null?void 0:l.custom);u&&(i=u[t])}if(a&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Bt(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,a){return this.events[t]||(this.events[t]=new _m),this.events[t].add(a)}notify(t,...a){this.events[t]&&this.events[t].notify(...a)}scheduleRenderMicrotask(){ig.render(this.render)}}class S4 extends j7{constructor(){super(...arguments),this.KeyframeResolver=hj}sortInstanceNodePosition(t,a){return t.compareDocumentPosition(a)&2?1:-1}getBaseTargetFromProps(t,a){return t.style?t.style[a]:void 0}removeValueFromRenderState(t,{vars:a,style:i}){delete a[t],delete i[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Bt(t)&&(this.childSubscription=t.on("change",a=>{this.current&&(this.current.textContent=`${a}`)}))}}function k4(e,{style:t,vars:a},i,o){const l=e.style;let u;for(u in t)l[u]=t[u];o==null||o.applyProjectionStyles(l,i);for(u in a)l.setProperty(u,a[u])}function A7(e){return window.getComputedStyle(e)}class C7 extends S4{constructor(){super(...arguments),this.type="html",this.renderInstance=k4}readValueFromInstance(t,a){var i;if(gs.has(a))return(i=this.projection)!=null&&i.isProjecting?Dh(a):DT(t,a);{const o=A7(t),l=(Im(a)?o.getPropertyValue(a):o[a])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(t,{transformPagePoint:a}){return v4(t,a)}build(t,a,i){cg(t,a,i.transformTemplate)}scrapeMotionValuesFromProps(t,a,i){return pg(t,a,i)}}const T4=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function E7(e,t,a,i){k4(e,t,void 0,i);for(const o in t.attrs)e.setAttribute(T4.has(o)?o:hg(o),t.attrs[o])}class M7 extends S4{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ot}getBaseTargetFromProps(t,a){return t[a]}readValueFromInstance(t,a){if(gs.has(a)){const i=K5(a);return i&&i.default||0}return a=T4.has(a)?a:hg(a),t.getAttribute(a)}scrapeMotionValuesFromProps(t,a,i){return p4(t,a,i)}build(t,a,i){c4(t,a,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(t,a,i,o){E7(t,a,i,o)}mount(t){this.isSVGTag=d4(t.tagName),super.mount(t)}}const z7=(e,t)=>dg(e)?new M7(t):new C7(t,{allowProjection:e!==j.Fragment});function Qr(e,t,a){const i=e.getProps();return fg(i,t,a!==void 0?a:i.custom,e)}const Ih=e=>Array.isArray(e);function R7(e,t,a){e.hasValue(t)?e.getValue(t).set(a):e.addValue(t,Pn(a))}function L7(e){return Ih(e)?e[e.length-1]||0:e}function O7(e,t){const a=Qr(e,t);let{transitionEnd:i={},transition:o={},...l}=a||{};l={...l,...i};for(const u in l){const p=L7(l[u]);R7(e,u,p)}}function D7(e){return!!(Bt(e)&&e.add)}function Fh(e,t){const a=e.getValue("willChange");if(D7(a))return a.add(t);if(!a&&Oa.WillChange){const i=new Oa.WillChange("auto");e.addValue("willChange",i),i.add(t)}}function j4(e){return e.props[h4]}const P7=e=>e!==null;function V7(e,{repeat:t,repeatType:a="loop"},i){const o=e.filter(P7),l=t&&a!=="loop"&&t%2===1?0:o.length-1;return o[l]}const N7={type:"spring",stiffness:500,damping:25,restSpeed:10},B7=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),_7={type:"keyframes",duration:.8},H7={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},$7=(e,{keyframes:t})=>t.length>2?_7:gs.has(e)?e.startsWith("scale")?B7(t[1]):N7:H7;function U7({when:e,delay:t,delayChildren:a,staggerChildren:i,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:p,from:f,elapsed:m,...g}){return!!Object.keys(g).length}const mg=(e,t,a,i={},o,l)=>u=>{const p=tg(i,e)||{},f=p.delay||i.delay||0;let{elapsed:m=0}=i;m=m-ra(f);const g={keyframes:Array.isArray(a)?a:[null,a],ease:"easeOut",velocity:t.getVelocity(),...p,delay:-m,onUpdate:y=>{t.set(y),p.onUpdate&&p.onUpdate(y)},onComplete:()=>{u(),p.onComplete&&p.onComplete()},name:e,motionValue:t,element:l?void 0:o};U7(p)||Object.assign(g,$7(e,g)),g.duration&&(g.duration=ra(g.duration)),g.repeatDelay&&(g.repeatDelay=ra(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let x=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(_h(g),g.delay===0&&(x=!0)),(Oa.instantAnimations||Oa.skipAnimations)&&(x=!0,_h(g),g.delay=0),g.allowFlatten=!p.type&&!p.ease,x&&!l&&t.get()!==void 0){const y=V7(g.keyframes,p);if(y!==void 0){Be.update(()=>{g.onUpdate(y),g.onComplete()});return}}return p.isSync?new Jm(g):new nj(g)};function G7({protectedKeys:e,needsAnimating:t},a){const i=e.hasOwnProperty(a)&&t[a]!==!0;return t[a]=!1,i}function A4(e,t,{delay:a=0,transitionOverride:i,type:o}={}){let{transition:l=e.getDefaultTransition(),transitionEnd:u,...p}=t;i&&(l=i);const f=[],m=o&&e.animationState&&e.animationState.getState()[o];for(const g in p){const x=e.getValue(g,e.latestValues[g]??null),y=p[g];if(y===void 0||m&&G7(m,g))continue;const v={delay:a,...tg(l||{},g)},S=x.get();if(S!==void 0&&!x.isAnimating&&!Array.isArray(y)&&y===S&&!v.velocity)continue;let k=!1;if(window.MotionHandoffAnimation){const M=j4(e);if(M){const z=window.MotionHandoffAnimation(M,g,Be);z!==null&&(v.startTime=z,k=!0)}}Fh(e,g),x.start(mg(g,x,y,e.shouldReduceMotion&&I5.has(g)?{type:!1}:v,e,k));const C=x.animation;C&&f.push(C)}return u&&Promise.all(f).then(()=>{Be.update(()=>{u&&O7(e,u)})}),f}function C4(e,t,a,i=0,o=1){const l=Array.from(e).sort((m,g)=>m.sortNodePosition(g)).indexOf(t),u=e.size,p=(u-1)*i;return typeof a=="function"?a(l,u):o===1?l*i:p-l*i}function qh(e,t,a={}){var f;const i=Qr(e,t,a.type==="exit"?(f=e.presenceContext)==null?void 0:f.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};a.transitionOverride&&(o=a.transitionOverride);const l=i?()=>Promise.all(A4(e,i,a)):()=>Promise.resolve(),u=e.variantChildren&&e.variantChildren.size?(m=0)=>{const{delayChildren:g=0,staggerChildren:x,staggerDirection:y}=o;return I7(e,t,m,g,x,y,a)}:()=>Promise.resolve(),{when:p}=o;if(p){const[m,g]=p==="beforeChildren"?[l,u]:[u,l];return m().then(()=>g())}else return Promise.all([l(),u(a.delay)])}function I7(e,t,a=0,i=0,o=0,l=1,u){const p=[];for(const f of e.variantChildren)f.notify("AnimationStart",t),p.push(qh(f,t,{...u,delay:a+(typeof i=="function"?0:i)+C4(e.variantChildren,f,i,o,l)}).then(()=>f.notify("AnimationComplete",t)));return Promise.all(p)}function F7(e,t,a={}){e.notify("AnimationStart",t);let i;if(Array.isArray(t)){const o=t.map(l=>qh(e,l,a));i=Promise.all(o)}else if(typeof t=="string")i=qh(e,t,a);else{const o=typeof t=="function"?Qr(e,t,a.custom):t;i=Promise.all(A4(e,o,a))}return i.then(()=>{e.notify("AnimationComplete",t)})}function E4(e,t){if(!Array.isArray(t))return!1;const a=t.length;if(a!==e.length)return!1;for(let i=0;i<a;i++)if(t[i]!==e[i])return!1;return!0}const q7=lg.length;function M4(e){if(!e)return;if(!e.isControllingVariants){const a=e.parent?M4(e.parent)||{}:{};return e.props.initial!==void 0&&(a.initial=e.props.initial),a}const t={};for(let a=0;a<q7;a++){const i=lg[a],o=e.props[i];(Qo(o)||o===!1)&&(t[i]=o)}return t}const K7=[...og].reverse(),Y7=og.length;function X7(e){return t=>Promise.all(t.map(({animation:a,options:i})=>F7(e,a,i)))}function W7(e){let t=X7(e),a=Tx(),i=!0;const o=f=>(m,g)=>{var y;const x=Qr(e,g,f==="exit"?(y=e.presenceContext)==null?void 0:y.custom:void 0);if(x){const{transition:v,transitionEnd:S,...k}=x;m={...m,...k,...S}}return m};function l(f){t=f(e)}function u(f){const{props:m}=e,g=M4(e.parent)||{},x=[],y=new Set;let v={},S=1/0;for(let C=0;C<Y7;C++){const M=K7[C],z=a[M],A=m[M]!==void 0?m[M]:g[M],$=Qo(A),E=M===f?z.isActive:null;E===!1&&(S=C);let V=A===g[M]&&A!==m[M]&&$;if(V&&i&&e.manuallyAnimateOnMount&&(V=!1),z.protectedKeys={...v},!z.isActive&&E===null||!A&&!z.prevProp||Xu(A)||typeof A=="boolean")continue;const N=Q7(z.prevProp,A);let O=N||M===f&&z.isActive&&!V&&$||C>S&&$,X=!1;const J=Array.isArray(A)?A:[A];let H=J.reduce(o(M),{});E===!1&&(H={});const{prevResolvedValues:te={}}=z,ce={...te,...H},le=B=>{O=!0,y.has(B)&&(X=!0,y.delete(B)),z.needsAnimating[B]=!0;const G=e.getValue(B);G&&(G.liveStyle=!1)};for(const B in ce){const G=H[B],Z=te[B];if(v.hasOwnProperty(B))continue;let L=!1;Ih(G)&&Ih(Z)?L=!E4(G,Z):L=G!==Z,L?G!=null?le(B):y.add(B):G!==void 0&&y.has(B)?le(B):z.protectedKeys[B]=!0}z.prevProp=A,z.prevResolvedValues=H,z.isActive&&(v={...v,...H}),i&&e.blockInitialAnimation&&(O=!1);const oe=V&&N;O&&(!oe||X)&&x.push(...J.map(B=>{const G={type:M};if(typeof B=="string"&&i&&!oe&&e.manuallyAnimateOnMount&&e.parent){const{parent:Z}=e,L=Qr(Z,B);if(Z.enteringChildren&&L){const{delayChildren:Y}=L.transition||{};G.delay=C4(Z.enteringChildren,e,Y)}}return{animation:B,options:G}}))}if(y.size){const C={};if(typeof m.initial!="boolean"){const M=Qr(e,Array.isArray(m.initial)?m.initial[0]:m.initial);M&&M.transition&&(C.transition=M.transition)}y.forEach(M=>{const z=e.getBaseTarget(M),A=e.getValue(M);A&&(A.liveStyle=!0),C[M]=z??null}),x.push({animation:C})}let k=!!x.length;return i&&(m.initial===!1||m.initial===m.animate)&&!e.manuallyAnimateOnMount&&(k=!1),i=!1,k?t(x):Promise.resolve()}function p(f,m){var x;if(a[f].isActive===m)return Promise.resolve();(x=e.variantChildren)==null||x.forEach(y=>{var v;return(v=y.animationState)==null?void 0:v.setActive(f,m)}),a[f].isActive=m;const g=u(f);for(const y in a)a[y].protectedKeys={};return g}return{animateChanges:u,setActive:p,setAnimateFunction:l,getState:()=>a,reset:()=>{a=Tx(),i=!0}}}function Q7(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!E4(t,e):!1}function Oi(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Tx(){return{animate:Oi(!0),whileInView:Oi(),whileHover:Oi(),whileTap:Oi(),whileDrag:Oi(),whileFocus:Oi(),exit:Oi()}}class pi{constructor(t){this.isMounted=!1,this.node=t}update(){}}class Z7 extends pi{constructor(t){super(t),t.animationState||(t.animationState=W7(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Xu(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:a}=this.node.prevProps||{};t!==a&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let J7=0;class eA extends pi{constructor(){super(...arguments),this.id=J7++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:a}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const o=this.node.animationState.setActive("exit",!t);a&&!t&&o.then(()=>{a(this.id)})}mount(){const{register:t,onExitComplete:a}=this.node.presenceContext||{};a&&a(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const tA={animation:{Feature:Z7},exit:{Feature:eA}};function Jo(e,t,a,i={passive:!0}){return e.addEventListener(t,a,i),()=>e.removeEventListener(t,a)}function fl(e){return{point:{x:e.pageX,y:e.pageY}}}const nA=e=>t=>rg(t)&&e(t,fl(t));function Vo(e,t,a,i){return Jo(e,t,nA(a),i)}const z4=1e-4,aA=1-z4,iA=1+z4,R4=.01,rA=0-R4,sA=0+R4;function $t(e){return e.max-e.min}function oA(e,t,a){return Math.abs(e-t)<=a}function jx(e,t,a,i=.5){e.origin=i,e.originPoint=tt(t.min,t.max,e.origin),e.scale=$t(a)/$t(t),e.translate=tt(a.min,a.max,e.origin)-e.originPoint,(e.scale>=aA&&e.scale<=iA||isNaN(e.scale))&&(e.scale=1),(e.translate>=rA&&e.translate<=sA||isNaN(e.translate))&&(e.translate=0)}function No(e,t,a,i){jx(e.x,t.x,a.x,i?i.originX:void 0),jx(e.y,t.y,a.y,i?i.originY:void 0)}function Ax(e,t,a){e.min=a.min+t.min,e.max=e.min+$t(t)}function lA(e,t,a){Ax(e.x,t.x,a.x),Ax(e.y,t.y,a.y)}function Cx(e,t,a){e.min=t.min-a.min,e.max=e.min+$t(t)}function Bo(e,t,a){Cx(e.x,t.x,a.x),Cx(e.y,t.y,a.y)}function En(e){return[e("x"),e("y")]}const L4=({current:e})=>e?e.ownerDocument.defaultView:null,Ex=(e,t)=>Math.abs(e-t);function cA(e,t){const a=Ex(e.x,t.x),i=Ex(e.y,t.y);return Math.sqrt(a**2+i**2)}class O4{constructor(t,a,{transformPagePoint:i,contextWindow:o=window,dragSnapToOrigin:l=!1,distanceThreshold:u=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=$p(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,S=cA(y.offset,{x:0,y:0})>=this.distanceThreshold;if(!v&&!S)return;const{point:k}=y,{timestamp:C}=Tt;this.history.push({...k,timestamp:C});const{onStart:M,onMove:z}=this.handlers;v||(M&&M(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),z&&z(this.lastMoveEvent,y)},this.handlePointerMove=(y,v)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=Hp(v,this.transformPagePoint),Be.update(this.updatePoint,!0)},this.handlePointerUp=(y,v)=>{this.end();const{onEnd:S,onSessionEnd:k,resumeAnimation:C}=this.handlers;if(this.dragSnapToOrigin&&C&&C(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const M=$p(y.type==="pointercancel"?this.lastMoveEventInfo:Hp(v,this.transformPagePoint),this.history);this.startEvent&&S&&S(y,M),k&&k(y,M)},!rg(t))return;this.dragSnapToOrigin=l,this.handlers=a,this.transformPagePoint=i,this.distanceThreshold=u,this.contextWindow=o||window;const p=fl(t),f=Hp(p,this.transformPagePoint),{point:m}=f,{timestamp:g}=Tt;this.history=[{...m,timestamp:g}];const{onSessionStart:x}=a;x&&x(t,$p(f,this.history)),this.removeListeners=cl(Vo(this.contextWindow,"pointermove",this.handlePointerMove),Vo(this.contextWindow,"pointerup",this.handlePointerUp),Vo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Bn(this.updatePoint)}}function Hp(e,t){return t?{point:t(e.point)}:e}function Mx(e,t){return{x:e.x-t.x,y:e.y-t.y}}function $p({point:e},t){return{point:e,delta:Mx(e,D4(t)),offset:Mx(e,uA(t)),velocity:dA(t,.1)}}function uA(e){return e[0]}function D4(e){return e[e.length-1]}function dA(e,t){if(e.length<2)return{x:0,y:0};let a=e.length-1,i=null;const o=D4(e);for(;a>=0&&(i=e[a],!(o.timestamp-i.timestamp>ra(t)));)a--;if(!i)return{x:0,y:0};const l=sa(o.timestamp-i.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-i.x)/l,y:(o.y-i.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function fA(e,{min:t,max:a},i){return t!==void 0&&e<t?e=i?tt(t,e,i.min):Math.max(e,t):a!==void 0&&e>a&&(e=i?tt(a,e,i.max):Math.min(e,a)),e}function zx(e,t,a){return{min:t!==void 0?e.min+t:void 0,max:a!==void 0?e.max+a-(e.max-e.min):void 0}}function pA(e,{top:t,left:a,bottom:i,right:o}){return{x:zx(e.x,a,o),y:zx(e.y,t,i)}}function Rx(e,t){let a=t.min-e.min,i=t.max-e.max;return t.max-t.min<e.max-e.min&&([a,i]=[i,a]),{min:a,max:i}}function hA(e,t){return{x:Rx(e.x,t.x),y:Rx(e.y,t.y)}}function mA(e,t){let a=.5;const i=$t(e),o=$t(t);return o>i?a=es(t.min,t.max-i,e.min):i>o&&(a=es(e.min,e.max-o,t.min)),ca(0,1,a)}function gA(e,t){const a={};return t.min!==void 0&&(a.min=t.min-e.min),t.max!==void 0&&(a.max=t.max-e.min),a}const Kh=.35;function bA(e=Kh){return e===!1?e=0:e===!0&&(e=Kh),{x:Lx(e,"left","right"),y:Lx(e,"top","bottom")}}function Lx(e,t,a){return{min:Ox(e,t),max:Ox(e,a)}}function Ox(e,t){return typeof e=="number"?e:e[t]||0}const xA=new WeakMap;class yA{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ot(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:a=!1,distanceThreshold:i}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=x=>{const{dragSnapToOrigin:y}=this.getProps();y?this.pauseAnimation():this.stopAnimation(),a&&this.snapToCursor(fl(x).point)},u=(x,y)=>{const{drag:v,dragPropagation:S,onDragStart:k}=this.getProps();if(v&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=bj(v),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=y,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),En(M=>{let z=this.getAxisMotionValue(M).get()||0;if(oa.test(z)){const{projection:A}=this.visualElement;if(A&&A.layout){const $=A.layout.layoutBox[M];$&&(z=$t($)*(parseFloat(z)/100))}}this.originPoint[M]=z}),k&&Be.postRender(()=>k(x,y)),Fh(this.visualElement,"transform");const{animationState:C}=this.visualElement;C&&C.setActive("whileDrag",!0)},p=(x,y)=>{this.latestPointerEvent=x,this.latestPanInfo=y;const{dragPropagation:v,dragDirectionLock:S,onDirectionLock:k,onDrag:C}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:M}=y;if(S&&this.currentDirection===null){this.currentDirection=vA(M),this.currentDirection!==null&&k&&k(this.currentDirection);return}this.updateAxis("x",y.point,M),this.updateAxis("y",y.point,M),this.visualElement.render(),C&&C(x,y)},f=(x,y)=>{this.latestPointerEvent=x,this.latestPanInfo=y,this.stop(x,y),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>En(x=>{var y;return this.getAnimationState(x)==="paused"&&((y=this.getAxisMotionValue(x).animation)==null?void 0:y.play())}),{dragSnapToOrigin:g}=this.getProps();this.panSession=new O4(t,{onSessionStart:l,onStart:u,onMove:p,onSessionEnd:f,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:i,contextWindow:L4(this.visualElement)})}stop(t,a){const i=t||this.latestPointerEvent,o=a||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!o||!i)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:p}=this.getProps();p&&Be.postRender(()=>p(i,o))}cancel(){this.isDragging=!1;const{projection:t,animationState:a}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),a&&a.setActive("whileDrag",!1)}updateAxis(t,a,i){const{drag:o}=this.getProps();if(!i||!Pc(t,o,this.currentDirection))return;const l=this.getAxisMotionValue(t);let u=this.originPoint[t]+i[t];this.constraints&&this.constraints[t]&&(u=fA(u,this.constraints[t],this.elastic[t])),l.set(u)}resolveConstraints(){var l;const{dragConstraints:t,dragElastic:a}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(l=this.visualElement.projection)==null?void 0:l.layout,o=this.constraints;t&&Ir(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&i?this.constraints=pA(i.layoutBox,t):this.constraints=!1,this.elastic=bA(a),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&En(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=gA(i.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:a}=this.getProps();if(!t||!Ir(t))return!1;const i=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=w7(i,o.root,this.visualElement.getTransformPagePoint());let u=hA(o.layout.layoutBox,l);if(a){const p=a(x7(u));this.hasMutatedConstraints=!!p,p&&(u=b4(p))}return u}startAnimation(t){const{drag:a,dragMomentum:i,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:p}=this.getProps(),f=this.constraints||{},m=En(g=>{if(!Pc(g,a,this.currentDirection))return;let x=f&&f[g]||{};u&&(x={min:0,max:0});const y=o?200:1e6,v=o?40:1e7,S={type:"inertia",velocity:i?t[g]:0,bounceStiffness:y,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...l,...x};return this.startAxisValueAnimation(g,S)});return Promise.all(m).then(p)}startAxisValueAnimation(t,a){const i=this.getAxisMotionValue(t);return Fh(this.visualElement,t),i.start(mg(t,i,0,a,this.visualElement,!1))}stopAnimation(){En(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){En(t=>{var a;return(a=this.getAxisMotionValue(t).animation)==null?void 0:a.pause()})}getAnimationState(t){var a;return(a=this.getAxisMotionValue(t).animation)==null?void 0:a.state}getAxisMotionValue(t){const a=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps(),o=i[a];return o||this.visualElement.getValue(t,(i.initial?i.initial[t]:void 0)||0)}snapToCursor(t){En(a=>{const{drag:i}=this.getProps();if(!Pc(a,i,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(a);if(o&&o.layout){const{min:u,max:p}=o.layout.layoutBox[a];l.set(t[a]-tt(u,p,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:a}=this.getProps(),{projection:i}=this.visualElement;if(!Ir(a)||!i||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};En(u=>{const p=this.getAxisMotionValue(u);if(p&&this.constraints!==!1){const f=p.get();o[u]=mA({min:f,max:f},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),En(u=>{if(!Pc(u,t,null))return;const p=this.getAxisMotionValue(u),{min:f,max:m}=this.constraints[u];p.set(tt(f,m,o[u]))})}addListeners(){if(!this.visualElement.current)return;xA.set(this.visualElement,this);const t=this.visualElement.current,a=Vo(t,"pointerdown",f=>{const{drag:m,dragListener:g=!0}=this.getProps();m&&g&&this.start(f)}),i=()=>{const{dragConstraints:f}=this.getProps();Ir(f)&&f.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",i);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Be.read(i);const u=Jo(window,"resize",()=>this.scalePositionWithinConstraints()),p=o.addEventListener("didUpdate",({delta:f,hasLayoutChanged:m})=>{this.isDragging&&m&&(En(g=>{const x=this.getAxisMotionValue(g);x&&(this.originPoint[g]+=f[g].translate,x.set(x.get()+f[g].translate))}),this.visualElement.render())});return()=>{u(),a(),l(),p&&p()}}getProps(){const t=this.visualElement.getProps(),{drag:a=!1,dragDirectionLock:i=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=Kh,dragMomentum:p=!0}=t;return{...t,drag:a,dragDirectionLock:i,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:p}}}function Pc(e,t,a){return(t===!0||t===e)&&(a===null||a===e)}function vA(e,t=10){let a=null;return Math.abs(e.y)>t?a="y":Math.abs(e.x)>t&&(a="x"),a}class wA extends pi{constructor(t){super(t),this.removeGroupControls=Qt,this.removeListeners=Qt,this.controls=new yA(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Qt}unmount(){this.removeGroupControls(),this.removeListeners()}}const Dx=e=>(t,a)=>{e&&Be.postRender(()=>e(t,a))};class SA extends pi{constructor(){super(...arguments),this.removePointerDownListener=Qt}onPointerDown(t){this.session=new O4(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:L4(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:a,onPan:i,onPanEnd:o}=this.node.getProps();return{onSessionStart:Dx(t),onStart:Dx(a),onMove:i,onEnd:(l,u)=>{delete this.session,o&&Be.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=Vo(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const ru={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Px(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const vo={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(me.test(e))e=parseFloat(e);else return e;const a=Px(e,t.target.x),i=Px(e,t.target.y);return`${a}% ${i}%`}},kA={correct:(e,{treeScale:t,projectionDelta:a})=>{const i=e,o=di.parse(e);if(o.length>5)return i;const l=di.createTransformer(e),u=typeof o[0]!="number"?1:0,p=a.x.scale*t.x,f=a.y.scale*t.y;o[0+u]/=p,o[1+u]/=f;const m=tt(p,f,.5);return typeof o[2+u]=="number"&&(o[2+u]/=m),typeof o[3+u]=="number"&&(o[3+u]/=m),l(o)}};let Up=!1;class TA extends j.Component{componentDidMount(){const{visualElement:t,layoutGroup:a,switchLayoutGroup:i,layoutId:o}=this.props,{projection:l}=t;qj(jA),l&&(a.group&&a.group.add(l),i&&i.register&&o&&i.register(l),Up&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),ru.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:a,visualElement:i,drag:o,isPresent:l}=this.props,{projection:u}=i;return u&&(u.isPresent=l,Up=!0,o||t.layoutDependency!==a||a===void 0||t.isPresent!==l?u.willUpdate():this.safeToRemove(),t.isPresent!==l&&(l?u.promote():u.relegate()||Be.postRender(()=>{const p=u.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),ig.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:a,switchLayoutGroup:i}=this.props,{projection:o}=t;Up=!0,o&&(o.scheduleCheckAfterUnmount(),a&&a.group&&a.group.remove(o),i&&i.deregister&&i.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function P4(e){const[t,a]=n4(),i=j.useContext(Dm);return d.jsx(TA,{...e,layoutGroup:i,switchLayoutGroup:j.useContext(m4),isPresent:t,safeToRemove:a})}const jA={borderRadius:{...vo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:vo,borderTopRightRadius:vo,borderBottomLeftRadius:vo,borderBottomRightRadius:vo,boxShadow:kA};function AA(e,t,a){const i=Bt(e)?e:Pn(e);return i.start(mg("",i,t,a)),i.animation}const CA=(e,t)=>e.depth-t.depth;class EA{constructor(){this.children=[],this.isDirty=!1}add(t){Vm(this.children,t),this.isDirty=!0}remove(t){Nm(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(CA),this.isDirty=!1,this.children.forEach(t)}}function MA(e,t){const a=Xt.now(),i=({timestamp:o})=>{const l=o-a;l>=t&&(Bn(i),e(l-t))};return Be.setup(i,!0),()=>Bn(i)}const V4=["TopLeft","TopRight","BottomLeft","BottomRight"],zA=V4.length,Vx=e=>typeof e=="string"?parseFloat(e):e,Nx=e=>typeof e=="number"||me.test(e);function RA(e,t,a,i,o,l){o?(e.opacity=tt(0,a.opacity??1,LA(i)),e.opacityExit=tt(t.opacity??1,0,OA(i))):l&&(e.opacity=tt(t.opacity??1,a.opacity??1,i));for(let u=0;u<zA;u++){const p=`border${V4[u]}Radius`;let f=Bx(t,p),m=Bx(a,p);if(f===void 0&&m===void 0)continue;f||(f=0),m||(m=0),f===0||m===0||Nx(f)===Nx(m)?(e[p]=Math.max(tt(Vx(f),Vx(m),i),0),(oa.test(m)||oa.test(f))&&(e[p]+="%")):e[p]=m}(t.rotate||a.rotate)&&(e.rotate=tt(t.rotate||0,a.rotate||0,i))}function Bx(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const LA=N4(0,.5,v5),OA=N4(.5,.95,Qt);function N4(e,t,a){return i=>i<e?0:i>t?1:a(es(e,t,i))}function _x(e,t){e.min=t.min,e.max=t.max}function Cn(e,t){_x(e.x,t.x),_x(e.y,t.y)}function Hx(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function $x(e,t,a,i,o){return e-=t,e=yu(e,1/a,i),o!==void 0&&(e=yu(e,1/o,i)),e}function DA(e,t=0,a=1,i=.5,o,l=e,u=e){if(oa.test(t)&&(t=parseFloat(t),t=tt(u.min,u.max,t/100)-u.min),typeof t!="number")return;let p=tt(l.min,l.max,i);e===l&&(p-=t),e.min=$x(e.min,t,a,p,o),e.max=$x(e.max,t,a,p,o)}function Ux(e,t,[a,i,o],l,u){DA(e,t[a],t[i],t[o],t.scale,l,u)}const PA=["x","scaleX","originX"],VA=["y","scaleY","originY"];function Gx(e,t,a,i){Ux(e.x,t,PA,a?a.x:void 0,i?i.x:void 0),Ux(e.y,t,VA,a?a.y:void 0,i?i.y:void 0)}function Ix(e){return e.translate===0&&e.scale===1}function B4(e){return Ix(e.x)&&Ix(e.y)}function Fx(e,t){return e.min===t.min&&e.max===t.max}function NA(e,t){return Fx(e.x,t.x)&&Fx(e.y,t.y)}function qx(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function _4(e,t){return qx(e.x,t.x)&&qx(e.y,t.y)}function Kx(e){return $t(e.x)/$t(e.y)}function Yx(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class BA{constructor(){this.members=[]}add(t){Vm(this.members,t),t.scheduleRender()}remove(t){if(Nm(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const a=this.members[this.members.length-1];a&&this.promote(a)}}relegate(t){const a=this.members.findIndex(o=>t===o);if(a===0)return!1;let i;for(let o=a;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){i=l;break}}return i?(this.promote(i),!0):!1}promote(t,a){const i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.instance&&i.scheduleRender(),t.scheduleRender(),t.resumeFrom=i,a&&(t.resumeFrom.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:a,resumingFrom:i}=t;a.onExitComplete&&a.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function _A(e,t,a){let i="";const o=e.x.translate/t.x,l=e.y.translate/t.y,u=(a==null?void 0:a.z)||0;if((o||l||u)&&(i=`translate3d(${o}px, ${l}px, ${u}px) `),(t.x!==1||t.y!==1)&&(i+=`scale(${1/t.x}, ${1/t.y}) `),a){const{transformPerspective:m,rotate:g,rotateX:x,rotateY:y,skewX:v,skewY:S}=a;m&&(i=`perspective(${m}px) ${i}`),g&&(i+=`rotate(${g}deg) `),x&&(i+=`rotateX(${x}deg) `),y&&(i+=`rotateY(${y}deg) `),v&&(i+=`skewX(${v}deg) `),S&&(i+=`skewY(${S}deg) `)}const p=e.x.scale*t.x,f=e.y.scale*t.y;return(p!==1||f!==1)&&(i+=`scale(${p}, ${f})`),i||"none"}const Gp=["","X","Y","Z"],HA=1e3;let $A=0;function Ip(e,t,a,i){const{latestValues:o}=t;o[e]&&(a[e]=o[e],t.setStaticValue(e,0),i&&(i[e]=0))}function H4(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const a=j4(t);if(window.MotionHasOptimisedAnimation(a,"transform")){const{layout:o,layoutId:l}=e.options;window.MotionCancelOptimisedAnimation(a,"transform",Be,!(o||l))}const{parent:i}=e;i&&!i.hasCheckedOptimisedAppear&&H4(i)}function $4({attachResizeListener:e,defaultParent:t,measureScroll:a,checkIsScrollRoot:i,resetTransform:o}){return class{constructor(u={},p=t==null?void 0:t()){this.id=$A++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(IA),this.nodes.forEach(YA),this.nodes.forEach(XA),this.nodes.forEach(FA)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new EA)}addEventListener(u,p){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new _m),this.eventHandlers.get(u).add(p)}notifyListeners(u,...p){const f=this.eventHandlers.get(u);f&&f.notify(...p)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=sg(u)&&!Lj(u),this.instance=u;const{layoutId:p,layout:f,visualElement:m}=this.options;if(m&&!m.current&&m.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(f||p)&&(this.isLayoutDirty=!0),e){let g,x=0;const y=()=>this.root.updateBlockedByResize=!1;Be.read(()=>{x=window.innerWidth}),e(u,()=>{const v=window.innerWidth;v!==x&&(x=v,this.root.updateBlockedByResize=!0,g&&g(),g=MA(y,250),ru.hasAnimatedSinceResize&&(ru.hasAnimatedSinceResize=!1,this.nodes.forEach(Qx)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&m&&(p||f)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:x,hasRelativeLayoutChanged:y,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||m.getDefaultTransition()||eC,{onLayoutAnimationStart:k,onLayoutAnimationComplete:C}=m.getProps(),M=!this.targetLayout||!_4(this.targetLayout,v),z=!x&&y;if(this.options.layoutRoot||this.resumeFrom||z||x&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const A={...tg(S,"layout"),onPlay:k,onComplete:C};(m.shouldReduceMotion||this.options.layoutRoot)&&(A.delay=0,A.type=!1),this.startAnimation(A),this.setAnimationOrigin(g,z)}else x||Qx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Bn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(WA),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&H4(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const x=this.path[g];x.shouldResetTransform=!0,x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:p,layout:f}=this.options;if(p===void 0&&!f)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Xx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Wx);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(KA),this.nodes.forEach(UA),this.nodes.forEach(GA)):this.nodes.forEach(Wx),this.clearAllSnapshots();const p=Xt.now();Tt.delta=ca(0,1e3/60,p-Tt.timestamp),Tt.timestamp=p,Tt.isProcessing=!0,Lp.update.process(Tt),Lp.preRender.process(Tt),Lp.render.process(Tt),Tt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ig.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(qA),this.sharedNodes.forEach(QA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Be.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Be.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!$t(this.snapshot.measuredBox.x)&&!$t(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ot(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(p=!1),p&&this.instance){const f=i(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:f,offset:a(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!B4(this.projectionDelta),f=this.getTransformTemplate(),m=f?f(this.latestValues,""):void 0,g=m!==this.prevTransformTemplateValue;u&&this.instance&&(p||Vi(this.latestValues)||g)&&(o(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const p=this.measurePageBox();let f=this.removeElementScroll(p);return u&&(f=this.removeTransform(f)),tC(f),{animationId:this.root.animationId,measuredBox:p,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var m;const{visualElement:u}=this.options;if(!u)return ot();const p=u.measureViewportBox();if(!(((m=this.scroll)==null?void 0:m.wasRoot)||this.path.some(nC))){const{scroll:g}=this.root;g&&(Fr(p.x,g.offset.x),Fr(p.y,g.offset.y))}return p}removeElementScroll(u){var f;const p=ot();if(Cn(p,u),(f=this.scroll)!=null&&f.wasRoot)return p;for(let m=0;m<this.path.length;m++){const g=this.path[m],{scroll:x,options:y}=g;g!==this.root&&x&&y.layoutScroll&&(x.wasRoot&&Cn(p,u),Fr(p.x,x.offset.x),Fr(p.y,x.offset.y))}return p}applyTransform(u,p=!1){const f=ot();Cn(f,u);for(let m=0;m<this.path.length;m++){const g=this.path[m];!p&&g.options.layoutScroll&&g.scroll&&g!==g.root&&qr(f,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),Vi(g.latestValues)&&qr(f,g.latestValues)}return Vi(this.latestValues)&&qr(f,this.latestValues),f}removeTransform(u){const p=ot();Cn(p,u);for(let f=0;f<this.path.length;f++){const m=this.path[f];if(!m.instance||!Vi(m.latestValues))continue;$h(m.latestValues)&&m.updateSnapshot();const g=ot(),x=m.measurePageBox();Cn(g,x),Gx(p,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,g)}return Vi(this.latestValues)&&Gx(p,this.latestValues),p}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Tt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var y;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==p;if(!(u||f&&this.isSharedProjectionDirty||this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:x}=this.options;if(!(!this.layout||!(g||x))){if(this.resolvedRelativeTargetAt=Tt.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ot(),this.relativeTargetOrigin=ot(),Bo(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),Cn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ot(),this.targetWithTransforms=ot()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),lA(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Cn(this.target,this.layout.layoutBox),y4(this.target,this.targetDelta)):Cn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ot(),this.relativeTargetOrigin=ot(),Bo(this.relativeTargetOrigin,this.target,v.target),Cn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||$h(this.parent.latestValues)||x4(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var S;const u=this.getLead(),p=!!this.resumingFrom||this!==u;let f=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(f=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===Tt.timestamp&&(f=!1),f)return;const{layout:m,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||g))return;Cn(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,y=this.treeScale.y;v7(this.layoutCorrected,this.treeScale,this.path,p),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=ot());const{target:v}=u;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Hx(this.prevProjectionDelta.x,this.projectionDelta.x),Hx(this.prevProjectionDelta.y,this.projectionDelta.y)),No(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==y||!Yx(this.projectionDelta.x,this.prevProjectionDelta.x)||!Yx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var p;if((p=this.options.visualElement)==null||p.scheduleRender(),u){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Kr(),this.projectionDelta=Kr(),this.projectionDeltaWithTransform=Kr()}setAnimationOrigin(u,p=!1){const f=this.snapshot,m=f?f.latestValues:{},g={...this.latestValues},x=Kr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const y=ot(),v=f?f.source:void 0,S=this.layout?this.layout.source:void 0,k=v!==S,C=this.getStack(),M=!C||C.members.length<=1,z=!!(k&&!M&&this.options.crossfade===!0&&!this.path.some(JA));this.animationProgress=0;let A;this.mixTargetDelta=$=>{const E=$/1e3;Zx(x.x,u.x,E),Zx(x.y,u.y,E),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Bo(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox),ZA(this.relativeTarget,this.relativeTargetOrigin,y,E),A&&NA(this.relativeTarget,A)&&(this.isProjectionDirty=!1),A||(A=ot()),Cn(A,this.relativeTarget)),k&&(this.animationValues=g,RA(g,m,this.latestValues,E,z,M)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=E},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){var p,f,m;this.notifyListeners("animationStart"),(p=this.currentAnimation)==null||p.stop(),(m=(f=this.resumingFrom)==null?void 0:f.currentAnimation)==null||m.stop(),this.pendingAnimation&&(Bn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Be.update(()=>{ru.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Pn(0)),this.currentAnimation=AA(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),u.onUpdate&&u.onUpdate(g)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(HA),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:p,target:f,layout:m,latestValues:g}=u;if(!(!p||!f||!m)){if(this!==u&&this.layout&&m&&U4(this.options.animationType,this.layout.layoutBox,m.layoutBox)){f=this.target||ot();const x=$t(this.layout.layoutBox.x);f.x.min=u.target.x.min,f.x.max=f.x.min+x;const y=$t(this.layout.layoutBox.y);f.y.min=u.target.y.min,f.y.max=f.y.min+y}Cn(p,f),qr(p,g),No(this.projectionDeltaWithTransform,this.layoutCorrected,p,g)}}registerSharedNode(u,p){this.sharedNodes.has(u)||this.sharedNodes.set(u,new BA),this.sharedNodes.get(u).add(p);const m=p.options.initialPromotionConfig;p.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(p):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var p;const{layoutId:u}=this.options;return u?((p=this.getStack())==null?void 0:p.lead)||this:this}getPrevLead(){var p;const{layoutId:u}=this.options;return u?(p=this.getStack())==null?void 0:p.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:p,preserveFollowOpacity:f}={}){const m=this.getStack();m&&m.promote(this,f),u&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let p=!1;const{latestValues:f}=u;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(p=!0),!p)return;const m={};f.z&&Ip("z",u,m,this.animationValues);for(let g=0;g<Gp.length;g++)Ip(`rotate${Gp[g]}`,u,m,this.animationValues),Ip(`skew${Gp[g]}`,u,m,this.animationValues);u.render();for(const g in m)u.setStaticValue(g,m[g]),this.animationValues&&(this.animationValues[g]=m[g]);u.scheduleRender()}applyProjectionStyles(u,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const f=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=iu(p==null?void 0:p.pointerEvents)||"",u.transform=f?f(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=iu(p==null?void 0:p.pointerEvents)||""),this.hasProjected&&!Vi(this.latestValues)&&(u.transform=f?f({},""):"none",this.hasProjected=!1);return}u.visibility="";const g=m.animationValues||m.latestValues;this.applyTransformsToTarget();let x=_A(this.projectionDeltaWithTransform,this.treeScale,g);f&&(x=f(g,x)),u.transform=x;const{x:y,y:v}=this.projectionDelta;u.transformOrigin=`${y.origin*100}% ${v.origin*100}% 0`,m.animationValues?u.opacity=m===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:u.opacity=m===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const S in Zo){if(g[S]===void 0)continue;const{correct:k,applyTo:C,isCSSVariable:M}=Zo[S],z=x==="none"?g[S]:k(g[S],m);if(C){const A=C.length;for(let $=0;$<A;$++)u[C[$]]=z}else M?this.options.visualElement.renderState.vars[S]=z:u[S]=z}this.options.layoutId&&(u.pointerEvents=m===this?iu(p==null?void 0:p.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var p;return(p=u.currentAnimation)==null?void 0:p.stop()}),this.root.nodes.forEach(Xx),this.root.sharedNodes.clear()}}}function UA(e){e.updateLayout()}function GA(e){var a;const t=((a=e.resumeFrom)==null?void 0:a.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:o}=e.layout,{animationType:l}=e.options,u=t.source!==e.layout.source;l==="size"?En(x=>{const y=u?t.measuredBox[x]:t.layoutBox[x],v=$t(y);y.min=i[x].min,y.max=y.min+v}):U4(l,t.layoutBox,i)&&En(x=>{const y=u?t.measuredBox[x]:t.layoutBox[x],v=$t(i[x]);y.max=y.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[x].max=e.relativeTarget[x].min+v)});const p=Kr();No(p,i,t.layoutBox);const f=Kr();u?No(f,e.applyTransform(o,!0),t.measuredBox):No(f,i,t.layoutBox);const m=!B4(p);let g=!1;if(!e.resumeFrom){const x=e.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:y,layout:v}=x;if(y&&v){const S=ot();Bo(S,t.layoutBox,y.layoutBox);const k=ot();Bo(k,i,v.layoutBox),_4(S,k)||(g=!0),x.options.layoutRoot&&(e.relativeTarget=k,e.relativeTargetOrigin=S,e.relativeParent=x)}}}e.notifyListeners("didUpdate",{layout:i,snapshot:t,delta:f,layoutDelta:p,hasLayoutChanged:m,hasRelativeLayoutChanged:g})}else if(e.isLead()){const{onExitComplete:i}=e.options;i&&i()}e.options.transition=void 0}function IA(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function FA(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function qA(e){e.clearSnapshot()}function Xx(e){e.clearMeasurements()}function Wx(e){e.isLayoutDirty=!1}function KA(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Qx(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function YA(e){e.resolveTargetDelta()}function XA(e){e.calcProjection()}function WA(e){e.resetSkewAndRotation()}function QA(e){e.removeLeadSnapshot()}function Zx(e,t,a){e.translate=tt(t.translate,0,a),e.scale=tt(t.scale,1,a),e.origin=t.origin,e.originPoint=t.originPoint}function Jx(e,t,a,i){e.min=tt(t.min,a.min,i),e.max=tt(t.max,a.max,i)}function ZA(e,t,a,i){Jx(e.x,t.x,a.x,i),Jx(e.y,t.y,a.y,i)}function JA(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const eC={duration:.45,ease:[.4,0,.1,1]},ey=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),ty=ey("applewebkit/")&&!ey("chrome/")?Math.round:Qt;function ny(e){e.min=ty(e.min),e.max=ty(e.max)}function tC(e){ny(e.x),ny(e.y)}function U4(e,t,a){return e==="position"||e==="preserve-aspect"&&!oA(Kx(t),Kx(a),.2)}function nC(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const aC=$4({attachResizeListener:(e,t)=>Jo(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Fp={current:void 0},G4=$4({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Fp.current){const e=new aC({});e.mount(window),e.setOptions({layoutScroll:!0}),Fp.current=e}return Fp.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),iC={pan:{Feature:SA},drag:{Feature:wA,ProjectionNode:G4,MeasureLayout:P4}};function ay(e,t,a){const{props:i}=e;e.animationState&&i.whileHover&&e.animationState.setActive("whileHover",a==="Start");const o="onHover"+a,l=i[o];l&&Be.postRender(()=>l(t,fl(t)))}class rC extends pi{mount(){const{current:t}=this.node;t&&(this.unmount=xj(t,(a,i)=>(ay(this.node,i,"Start"),o=>ay(this.node,o,"End"))))}unmount(){}}class sC extends pi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=cl(Jo(this.node.current,"focus",()=>this.onFocus()),Jo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function iy(e,t,a){const{props:i}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&i.whileTap&&e.animationState.setActive("whileTap",a==="Start");const o="onTap"+(a==="End"?"":a),l=i[o];l&&Be.postRender(()=>l(t,fl(t)))}class oC extends pi{mount(){const{current:t}=this.node;t&&(this.unmount=Sj(t,(a,i)=>(iy(this.node,i,"Start"),(o,{success:l})=>iy(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Yh=new WeakMap,qp=new WeakMap,lC=e=>{const t=Yh.get(e.target);t&&t(e)},cC=e=>{e.forEach(lC)};function uC({root:e,...t}){const a=e||document;qp.has(a)||qp.set(a,{});const i=qp.get(a),o=JSON.stringify(t);return i[o]||(i[o]=new IntersectionObserver(cC,{root:e,...t})),i[o]}function dC(e,t,a){const i=uC(t);return Yh.set(e,a),i.observe(e),()=>{Yh.delete(e),i.unobserve(e)}}const fC={some:0,all:1};class pC extends pi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:a,margin:i,amount:o="some",once:l}=t,u={root:a?a.current:void 0,rootMargin:i,threshold:typeof o=="number"?o:fC[o]},p=f=>{const{isIntersecting:m}=f;if(this.isInView===m||(this.isInView=m,l&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:g,onViewportLeave:x}=this.node.getProps(),y=m?g:x;y&&y(f)};return dC(this.node.current,u,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:a}=this.node;["amount","margin","root"].some(hC(t,a))&&this.startObserver()}unmount(){}}function hC({viewport:e={}},{viewport:t={}}={}){return a=>e[a]!==t[a]}const mC={inView:{Feature:pC},tap:{Feature:oC},focus:{Feature:sC},hover:{Feature:rC}},gC={layout:{ProjectionNode:G4,MeasureLayout:P4}},bC={...tA,...mC,...iC,...gC},ie=b7(bC,z7),xC=50,ry=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),yC=()=>({time:0,x:ry(),y:ry()}),vC={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function sy(e,t,a,i){const o=a[t],{length:l,position:u}=vC[t],p=o.current,f=a.time;o.current=e[`scroll${u}`],o.scrollLength=e[`scroll${l}`]-e[`client${l}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=es(0,o.scrollLength,o.current);const m=i-f;o.velocity=m>xC?0:Hm(o.current-p,m)}function wC(e,t,a){sy(e,"x",t,a),sy(e,"y",t,a),t.time=a}function SC(e,t){const a={x:0,y:0};let i=e;for(;i&&i!==t;)if(ag(i))a.x+=i.offsetLeft,a.y+=i.offsetTop,i=i.offsetParent;else if(i.tagName==="svg"){const o=i.getBoundingClientRect();i=i.parentElement;const l=i.getBoundingClientRect();a.x+=o.left-l.left,a.y+=o.top-l.top}else if(i instanceof SVGGraphicsElement){const{x:o,y:l}=i.getBBox();a.x+=o,a.y+=l;let u=null,p=i.parentNode;for(;!u;)p.tagName==="svg"&&(u=p),p=i.parentNode;i=u}else break;return a}const Xh={start:0,center:.5,end:1};function oy(e,t,a=0){let i=0;if(e in Xh&&(e=Xh[e]),typeof e=="string"){const o=parseFloat(e);e.endsWith("px")?i=o:e.endsWith("%")?e=o/100:e.endsWith("vw")?i=o/100*document.documentElement.clientWidth:e.endsWith("vh")?i=o/100*document.documentElement.clientHeight:e=o}return typeof e=="number"&&(i=t*e),a+i}const kC=[0,0];function TC(e,t,a,i){let o=Array.isArray(e)?e:kC,l=0,u=0;return typeof e=="number"?o=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?o=e.split(" "):o=[e,Xh[e]?e:"0"]),l=oy(o[0],a,i),u=oy(o[1],t),l-u}const jC={All:[[0,0],[1,1]]},AC={x:0,y:0};function CC(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function EC(e,t,a){const{offset:i=jC.All}=a,{target:o=e,axis:l="y"}=a,u=l==="y"?"height":"width",p=o!==e?SC(o,e):AC,f=o===e?{width:e.scrollWidth,height:e.scrollHeight}:CC(o),m={width:e.clientWidth,height:e.clientHeight};t[l].offset.length=0;let g=!t[l].interpolate;const x=i.length;for(let y=0;y<x;y++){const v=TC(i[y],m[u],f[u],p[l]);!g&&v!==t[l].interpolatorOffsets[y]&&(g=!0),t[l].offset[y]=v}g&&(t[l].interpolate=Wm(t[l].offset,D5(i),{clamp:!1}),t[l].interpolatorOffsets=[...t[l].offset]),t[l].progress=ca(0,1,t[l].interpolate(t[l].current))}function MC(e,t=e,a){if(a.x.targetOffset=0,a.y.targetOffset=0,t!==e){let i=t;for(;i&&i!==e;)a.x.targetOffset+=i.offsetLeft,a.y.targetOffset+=i.offsetTop,i=i.offsetParent}a.x.targetLength=t===e?t.scrollWidth:t.clientWidth,a.y.targetLength=t===e?t.scrollHeight:t.clientHeight,a.x.containerLength=e.clientWidth,a.y.containerLength=e.clientHeight}function zC(e,t,a,i={}){return{measure:o=>{MC(e,i.target,a),wC(e,a,o),(i.offset||i.target)&&EC(e,a,i)},notify:()=>t(a)}}const wo=new WeakMap,ly=new WeakMap,Kp=new WeakMap,cy=e=>e===document.scrollingElement?window:e;function I4(e,{container:t=document.scrollingElement,...a}={}){if(!t)return Qt;let i=Kp.get(t);i||(i=new Set,Kp.set(t,i));const o=yC(),l=zC(t,e,o,a);if(i.add(l),!wo.has(t)){const p=()=>{for(const x of i)x.measure(Tt.timestamp);Be.preUpdate(f)},f=()=>{for(const x of i)x.notify()},m=()=>Be.read(p);wo.set(t,m);const g=cy(t);window.addEventListener("resize",m,{passive:!0}),t!==document.documentElement&&ly.set(t,Rj(t,m)),g.addEventListener("scroll",m,{passive:!0}),m()}const u=wo.get(t);return Be.read(u,!1,!0),()=>{var m;Bn(u);const p=Kp.get(t);if(!p||(p.delete(l),p.size))return;const f=wo.get(t);wo.delete(t),f&&(cy(t).removeEventListener("scroll",f),(m=ly.get(t))==null||m(),window.removeEventListener("resize",f))}}const uy=new Map;function RC(e){const t={value:0},a=I4(i=>{t.value=i[e.axis].progress*100},e);return{currentTime:t,cancel:a}}function F4({source:e,container:t,...a}){const{axis:i}=a;e&&(t=e);const o=uy.get(t)??new Map;uy.set(t,o);const l=a.target??"self",u=o.get(l)??{},p=i+(a.offset??[]).join(",");return u[p]||(u[p]=!a.target&&B5()?new ScrollTimeline({source:t,axis:i}):RC({container:t,...a})),u[p]}function LC(e,t){const a=F4(t);return e.attachTimeline({timeline:t.target?void 0:a,observe:i=>(i.pause(),t4(o=>{i.time=i.duration*o},a))})}function OC(e){return e.length===2}function DC(e,t){return OC(e)?I4(a=>{e(a[t.axis].progress,a)},t):t4(e,F4(t))}function PC(e,{axis:t="y",container:a=document.scrollingElement,...i}={}){if(!a)return Qt;const o={axis:t,container:a,...i};return typeof e=="function"?DC(e,o):LC(e,o)}const VC=()=>({scrollX:Pn(0),scrollY:Pn(0),scrollXProgress:Pn(0),scrollYProgress:Pn(0)}),Vc=e=>e?!e.current:!1;function NC({container:e,target:t,...a}={}){const i=ps(VC),o=j.useRef(null),l=j.useRef(!1),u=j.useCallback(()=>(o.current=PC((p,{x:f,y:m})=>{i.scrollX.set(f.current),i.scrollXProgress.set(f.progress),i.scrollY.set(m.current),i.scrollYProgress.set(m.progress)},{...a,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0}),()=>{var p;(p=o.current)==null||p.call(o)}),[e,t,JSON.stringify(a.offset)]);return Iu(()=>{if(l.current=!1,Vc(e)||Vc(t)){l.current=!0;return}else return u()},[u]),j.useEffect(()=>{if(l.current)return Yo(!Vc(e)),Yo(!Vc(t)),u()},[u]),i}function BC(e){const t=ps(()=>Pn(e)),{isStatic:a}=j.useContext(Ku);if(a){const[,i]=j.useState(e);j.useEffect(()=>t.on("change",i),[])}return t}function q4(e,t){const a=BC(t()),i=()=>a.set(t());return i(),Iu(()=>{const o=()=>Be.preRender(i,!1,!0),l=e.map(u=>u.on("change",o));return()=>{l.forEach(u=>u()),Bn(i)}}),a}function _C(e){Po.current=[],e();const t=q4(Po.current,e);return Po.current=void 0,t}function dy(e,t,a,i){if(typeof e=="function")return _C(e);const o=typeof t=="function"?t:Oj(t,a,i);return Array.isArray(e)?fy(e,o):fy([e],([l])=>o(l))}function fy(e,t){const a=ps(()=>[]);return q4(e,()=>{a.length=0;const i=e.length;for(let o=0;o<i;o++)a[o]=e[o].get();return t(a)})}var K4={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},py=Ce.createContext&&Ce.createContext(K4),HC=["attr","size","title"];function $C(e,t){if(e==null)return{};var a=UC(e,t),i,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)i=l[o],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}function UC(e,t){if(e==null)return{};var a={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(t.indexOf(i)>=0)continue;a[i]=e[i]}return a}function vu(){return vu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},vu.apply(this,arguments)}function hy(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),a.push.apply(a,i)}return a}function wu(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?hy(Object(a),!0).forEach(function(i){GC(e,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):hy(Object(a)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))})}return e}function GC(e,t,a){return t=IC(t),t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function IC(e){var t=FC(e,"string");return typeof t=="symbol"?t:t+""}function FC(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var i=a.call(e,t);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Y4(e){return e&&e.map((t,a)=>Ce.createElement(t.tag,wu({key:a},t.attr),Y4(t.child)))}function ge(e){return t=>Ce.createElement(qC,vu({attr:wu({},e.attr)},t),Y4(e.child))}function qC(e){var t=a=>{var{attr:i,size:o,title:l}=e,u=$C(e,HC),p=o||a.size||"1em",f;return a.className&&(f=a.className),e.className&&(f=(f?f+" ":"")+e.className),Ce.createElement("svg",vu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,i,u,{className:f,style:wu(wu({color:e.color||a.color},a.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),l&&Ce.createElement("title",null,l),e.children)};return py!==void 0?Ce.createElement(py.Consumer,null,a=>t(a)):t(K4)}function KC(e){return ge({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(e)}function _n(e){return ge({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function YC(e){return ge({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(e)}function XC(e){return ge({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56l72-144zm511.98 160c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02zM440 320l72-144 72 144H440zm88 128H352V153.25c23.51-10.29 41.16-31.48 46.39-57.25H528c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H383.64C369.04 12.68 346.09 0 320 0s-49.04 12.68-63.64 32H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h129.61c5.23 25.76 22.87 46.96 46.39 57.25V448H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"},child:[]}]})(e)}function Qu(e){return ge({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"},child:[]}]})(e)}function WC(e){return ge({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M256.47 216.77l86.73 109.18s-16.6 102.36-76.57 150.12C206.66 523.85 0 510.19 0 510.19s3.8-23.14 11-55.43l94.62-112.17c3.97-4.7-.87-11.62-6.65-9.5l-60.4 22.09c14.44-41.66 32.72-80.04 54.6-97.47 59.97-47.76 163.3-40.94 163.3-40.94zM636.53 31.03l-19.86-25c-5.49-6.9-15.52-8.05-22.41-2.56l-232.48 177.8-34.14-42.97c-5.09-6.41-15.14-5.21-18.59 2.21l-25.33 54.55 86.73 109.18 58.8-12.45c8-1.69 11.42-11.2 6.34-17.6l-34.09-42.92 232.48-177.8c6.89-5.48 8.04-15.53 2.55-22.44z"},child:[]}]})(e)}function X4(e){return ge({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(e)}function pl(e){return ge({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z"},child:[]}]})(e)}function QC(e){return ge({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"},child:[]}]})(e)}function my(e){return ge({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(e)}function ZC(e){return ge({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(e)}function Fi(e){return ge({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(e)}function jt(e){return ge({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function Kt(e){return ge({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function W4(e){return ge({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(e)}function gg(e){return ge({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(e)}function gy(e){return ge({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"},child:[]}]})(e)}function JC(e){return ge({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function el(e){return ge({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"},child:[]}]})(e)}function eE(e){return ge({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M104 96H56c-13.3 0-24 10.7-24 24v104H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h24v104c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm528 128h-24V120c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h24c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM456 32h-48c-13.3 0-24 10.7-24 24v168H256V56c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h128v168c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24z"},child:[]}]})(e)}function ui(e){return ge({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function Su(e){return ge({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M310.706 413.765c-1.314-6.63-7.835-10.872-14.424-9.369-10.692 2.439-27.422 5.413-45.426 5.413-56.763 0-101.929-34.79-121.461-85.449h113.689a12 12 0 0 0 11.708-9.369l6.373-28.36c1.686-7.502-4.019-14.631-11.708-14.631H115.22c-1.21-14.328-1.414-28.287.137-42.245H261.95a12 12 0 0 0 11.723-9.434l6.512-29.755c1.638-7.484-4.061-14.566-11.723-14.566H130.184c20.633-44.991 62.69-75.03 117.619-75.03 14.486 0 28.564 2.25 37.851 4.145 6.216 1.268 12.347-2.498 14.002-8.623l11.991-44.368c1.822-6.741-2.465-13.616-9.326-14.917C290.217 34.912 270.71 32 249.635 32 152.451 32 74.03 92.252 45.075 176H12c-6.627 0-12 5.373-12 12v29.755c0 6.627 5.373 12 12 12h21.569c-1.009 13.607-1.181 29.287-.181 42.245H12c-6.627 0-12 5.373-12 12v28.36c0 6.627 5.373 12 12 12h30.114C67.139 414.692 145.264 480 249.635 480c26.301 0 48.562-4.544 61.101-7.788 6.167-1.595 10.027-7.708 8.788-13.957l-8.818-44.49z"},child:[]}]})(e)}function tE(e){return ge({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"},child:[]}]})(e)}function by(e){return ge({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z"},child:[]}]})(e)}function Wh(e){return ge({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(e)}function nE(e){return ge({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(e)}function Q4(e){return ge({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M571.31 193.94l-22.63-22.63c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31-28.9-28.9c5.63-21.31.36-44.9-16.35-61.61l-45.25-45.25c-62.48-62.48-163.79-62.48-226.28 0l90.51 45.25v18.75c0 16.97 6.74 33.25 18.75 45.25l49.14 49.14c16.71 16.71 40.3 21.98 61.61 16.35l28.9 28.9-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l90.51-90.51c6.23-6.24 6.23-16.37-.02-22.62zm-286.72-15.2c-3.7-3.7-6.84-7.79-9.85-11.95L19.64 404.96c-25.57 23.88-26.26 64.19-1.53 88.93s65.05 24.05 88.93-1.53l238.13-255.07c-3.96-2.91-7.9-5.87-11.44-9.41l-49.14-49.14z"},child:[]}]})(e)}function aE(e){return ge({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"},child:[]}]})(e)}function Z4(e){return ge({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"},child:[]}]})(e)}function J4(e){return ge({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M475.115 163.781L336 252.309v-68.28c0-18.916-20.931-30.399-36.885-20.248L160 252.309V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h464c13.255 0 24-10.745 24-24V184.029c0-18.917-20.931-30.399-36.885-20.248z"},child:[]}]})(e)}function xy(e){return ge({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(e)}function ku(e){return ge({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"},child:[]}]})(e)}function iE(e){return ge({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm173.696 119.559l-63.399 63.399c-10.987-18.559-26.67-34.252-45.255-45.255l63.399-63.399a218.396 218.396 0 0 1 45.255 45.255zM256 352c-53.019 0-96-42.981-96-96s42.981-96 96-96 96 42.981 96 96-42.981 96-96 96zM127.559 82.304l63.399 63.399c-18.559 10.987-34.252 26.67-45.255 45.255l-63.399-63.399a218.372 218.372 0 0 1 45.255-45.255zM82.304 384.441l63.399-63.399c10.987 18.559 26.67 34.252 45.255 45.255l-63.399 63.399a218.396 218.396 0 0 1-45.255-45.255zm302.137 45.255l-63.399-63.399c18.559-10.987 34.252-26.67 45.255-45.255l63.399 63.399a218.403 218.403 0 0 1-45.255 45.255z"},child:[]}]})(e)}function _o(e){return ge({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(e)}function rE(e){return ge({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(e)}function ns(e){return ge({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"},child:[]}]})(e)}function sE(e){return ge({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function e3(e){return ge({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"},child:[]}]})(e)}function oE(e){return ge({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(e)}function lE(e){return ge({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M568.25 192c-29.04.13-135.01 6.16-213.84 83-33.12 29.63-53.36 63.3-66.41 94.86-13.05-31.56-33.29-65.23-66.41-94.86-78.83-76.84-184.8-82.87-213.84-83-4.41-.02-7.79 3.4-7.75 7.82.23 27.92 7.14 126.14 88.77 199.3C172.79 480.94 256 480 288 480s115.19.95 199.23-80.88c81.64-73.17 88.54-171.38 88.77-199.3.04-4.42-3.34-7.84-7.75-7.82zM287.98 302.6c12.82-18.85 27.6-35.78 44.09-50.52 19.09-18.61 39.58-33.3 60.26-45.18-16.44-70.5-51.72-133.05-96.73-172.22-4.11-3.58-11.02-3.58-15.14 0-44.99 39.14-80.27 101.63-96.74 172.07 20.37 11.7 40.5 26.14 59.22 44.39a282.768 282.768 0 0 1 45.04 51.46z"},child:[]}]})(e)}function cE(e){return ge({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function uE(e){return ge({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"},child:[]}]})(e)}function dE(e){return ge({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"},child:[]}]})(e)}function fE(e){return ge({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function Tu(e){return ge({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(e)}function pE(e){return ge({attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(e)}function hE(e){return ge({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"},child:[]}]})(e)}const mE=(e,t,a,i)=>{var l,u,p,f;const o=[a,{code:t,...i||{}}];if((u=(l=e==null?void 0:e.services)==null?void 0:l.logger)!=null&&u.forward)return e.services.logger.forward(o,"warn","react-i18next::",!0);Ui(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),(f=(p=e==null?void 0:e.services)==null?void 0:p.logger)!=null&&f.warn?e.services.logger.warn(...o):console!=null&&console.warn&&console.warn(...o)},yy={},Qh=(e,t,a,i)=>{Ui(a)&&yy[a]||(Ui(a)&&(yy[a]=new Date),mE(e,t,a,i))},t3=(e,t)=>()=>{if(e.isInitialized)t();else{const a=()=>{setTimeout(()=>{e.off("initialized",a)},0),t()};e.on("initialized",a)}},Zh=(e,t,a)=>{e.loadNamespaces(t,t3(e,a))},vy=(e,t,a,i)=>{if(Ui(a)&&(a=[a]),e.options.preload&&e.options.preload.indexOf(t)>-1)return Zh(e,a,i);a.forEach(o=>{e.options.ns.indexOf(o)<0&&e.options.ns.push(o)}),e.loadLanguages(t,t3(e,i))},gE=(e,t,a={})=>!t.languages||!t.languages.length?(Qh(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0):t.hasLoadedNamespace(e,{lng:a.lng,precheck:(i,o)=>{if(a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!o(i.isLanguageChangingTo,e))return!1}}),Ui=e=>typeof e=="string",bE=e=>typeof e=="object"&&e!==null,xE=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,yE={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},vE=e=>yE[e],wE=e=>e.replace(xE,vE);let Jh={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:wE};const SE=(e={})=>{Jh={...Jh,...e}},kE=()=>Jh;let n3;const TE=e=>{n3=e},jE=()=>n3,AE={type:"3rdParty",init(e){SE(e.options.react),TE(e)}},CE=j.createContext();class EE{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(a=>{this.usedNamespaces[a]||(this.usedNamespaces[a]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const ME=(e,t)=>{const a=j.useRef();return j.useEffect(()=>{a.current=e},[e,t]),a.current},a3=(e,t,a,i)=>e.getFixedT(t,a,i),zE=(e,t,a,i)=>j.useCallback(a3(e,t,a,i),[e,t,a,i]),Ge=(e,t={})=>{var $,E,V,N;const{i18n:a}=t,{i18n:i,defaultNS:o}=j.useContext(CE)||{},l=a||i||jE();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new EE),!l){Qh(l,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const O=(J,H)=>Ui(H)?H:bE(H)&&Ui(H.defaultValue)?H.defaultValue:Array.isArray(J)?J[J.length-1]:J,X=[O,{},!1];return X.t=O,X.i18n={},X.ready=!1,X}($=l.options.react)!=null&&$.wait&&Qh(l,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const u={...kE(),...l.options.react,...t},{useSuspense:p,keyPrefix:f}=u;let m=o||((E=l.options)==null?void 0:E.defaultNS);m=Ui(m)?[m]:m||["translation"],(N=(V=l.reportNamespaces).addUsedNamespaces)==null||N.call(V,m);const g=(l.isInitialized||l.initializedStoreOnce)&&m.every(O=>gE(O,l,u)),x=zE(l,t.lng||null,u.nsMode==="fallback"?m:m[0],f),y=()=>x,v=()=>a3(l,t.lng||null,u.nsMode==="fallback"?m:m[0],f),[S,k]=j.useState(y);let C=m.join();t.lng&&(C=`${t.lng}${C}`);const M=ME(C),z=j.useRef(!0);j.useEffect(()=>{const{bindI18n:O,bindI18nStore:X}=u;z.current=!0,!g&&!p&&(t.lng?vy(l,t.lng,m,()=>{z.current&&k(v)}):Zh(l,m,()=>{z.current&&k(v)})),g&&M&&M!==C&&z.current&&k(v);const J=()=>{z.current&&k(v)};return O&&(l==null||l.on(O,J)),X&&(l==null||l.store.on(X,J)),()=>{z.current=!1,l&&O&&(O==null||O.split(" ").forEach(H=>l.off(H,J))),X&&l&&X.split(" ").forEach(H=>l.store.off(H,J))}},[l,C]),j.useEffect(()=>{z.current&&g&&k(y)},[l,f,g]);const A=[S,l,g];if(A.t=S,A.i18n=l,A.ready=g,g||!g&&!p)return A;throw new Promise(O=>{t.lng?vy(l,t.lng,m,()=>O()):Zh(l,m,()=>O())})},be=e=>typeof e=="string",So=()=>{let e,t;const a=new Promise((i,o)=>{e=i,t=o});return a.resolve=e,a.reject=t,a},wy=e=>e==null?"":""+e,RE=(e,t,a)=>{e.forEach(i=>{t[i]&&(a[i]=t[i])})},LE=/###/g,Sy=e=>e&&e.indexOf("###")>-1?e.replace(LE,"."):e,ky=e=>!e||be(e),Ho=(e,t,a)=>{const i=be(t)?t.split("."):t;let o=0;for(;o<i.length-1;){if(ky(e))return{};const l=Sy(i[o]);!e[l]&&a&&(e[l]=new a),Object.prototype.hasOwnProperty.call(e,l)?e=e[l]:e={},++o}return ky(e)?{}:{obj:e,k:Sy(i[o])}},Ty=(e,t,a)=>{const{obj:i,k:o}=Ho(e,t,Object);if(i!==void 0||t.length===1){i[o]=a;return}let l=t[t.length-1],u=t.slice(0,t.length-1),p=Ho(e,u,Object);for(;p.obj===void 0&&u.length;)l=`${u[u.length-1]}.${l}`,u=u.slice(0,u.length-1),p=Ho(e,u,Object),p!=null&&p.obj&&typeof p.obj[`${p.k}.${l}`]<"u"&&(p.obj=void 0);p.obj[`${p.k}.${l}`]=a},OE=(e,t,a,i)=>{const{obj:o,k:l}=Ho(e,t,Object);o[l]=o[l]||[],o[l].push(a)},ju=(e,t)=>{const{obj:a,k:i}=Ho(e,t);if(a&&Object.prototype.hasOwnProperty.call(a,i))return a[i]},DE=(e,t,a)=>{const i=ju(e,a);return i!==void 0?i:ju(t,a)},i3=(e,t,a)=>{for(const i in t)i!=="__proto__"&&i!=="constructor"&&(i in e?be(e[i])||e[i]instanceof String||be(t[i])||t[i]instanceof String?a&&(e[i]=t[i]):i3(e[i],t[i],a):e[i]=t[i]);return e},Dr=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var PE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const VE=e=>be(e)?e.replace(/[&<>"'\/]/g,t=>PE[t]):e;class NE{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const a=this.regExpMap.get(t);if(a!==void 0)return a;const i=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,i),this.regExpQueue.push(t),i}}const BE=[" ",",","?","!",";"],_E=new NE(20),HE=(e,t,a)=>{t=t||"",a=a||"";const i=BE.filter(u=>t.indexOf(u)<0&&a.indexOf(u)<0);if(i.length===0)return!0;const o=_E.getRegExp(`(${i.map(u=>u==="?"?"\\?":u).join("|")})`);let l=!o.test(e);if(!l){const u=e.indexOf(a);u>0&&!o.test(e.substring(0,u))&&(l=!0)}return l},em=function(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;const i=t.split(a);let o=e;for(let l=0;l<i.length;){if(!o||typeof o!="object")return;let u,p="";for(let f=l;f<i.length;++f)if(f!==l&&(p+=a),p+=i[f],u=o[p],u!==void 0){if(["string","number","boolean"].indexOf(typeof u)>-1&&f<i.length-1)continue;l+=f-l+1;break}o=u}return o},Au=e=>e==null?void 0:e.replace("_","-"),$E={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){var a,i;(i=(a=console==null?void 0:console[e])==null?void 0:a.apply)==null||i.call(a,console,t)}};class Cu{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,a)}init(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=a.prefix||"i18next:",this.logger=t||$E,this.options=a,this.debug=a.debug}log(){for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return this.forward(a,"log","",!0)}warn(){for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return this.forward(a,"warn","",!0)}error(){for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return this.forward(a,"error","")}deprecate(){for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return this.forward(a,"warn","WARNING DEPRECATED: ",!0)}forward(t,a,i,o){return o&&!this.debug?null:(be(t[0])&&(t[0]=`${i}${this.prefix} ${t[0]}`),this.logger[a](t))}create(t){return new Cu(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new Cu(this.logger,t)}}var aa=new Cu;class Zu{constructor(){this.observers={}}on(t,a){return t.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const o=this.observers[i].get(a)||0;this.observers[i].set(a,o+1)}),this}off(t,a){if(this.observers[t]){if(!a){delete this.observers[t];return}this.observers[t].delete(a)}}emit(t){for(var a=arguments.length,i=new Array(a>1?a-1:0),o=1;o<a;o++)i[o-1]=arguments[o];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(u=>{let[p,f]=u;for(let m=0;m<f;m++)p(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(u=>{let[p,f]=u;for(let m=0;m<f;m++)p.apply(p,[t,...i])})}}class jy extends Zu{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=a,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const a=this.options.ns.indexOf(t);a>-1&&this.options.ns.splice(a,1)}getResource(t,a,i){var m,g;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,u=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let p;t.indexOf(".")>-1?p=t.split("."):(p=[t,a],i&&(Array.isArray(i)?p.push(...i):be(i)&&l?p.push(...i.split(l)):p.push(i)));const f=ju(this.data,p);return!f&&!a&&!i&&t.indexOf(".")>-1&&(t=p[0],a=p[1],i=p.slice(2).join(".")),f||!u||!be(i)?f:em((g=(m=this.data)==null?void 0:m[t])==null?void 0:g[a],i,l)}addResource(t,a,i,o){let l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const u=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator;let p=[t,a];i&&(p=p.concat(u?i.split(u):i)),t.indexOf(".")>-1&&(p=t.split("."),o=a,a=p[1]),this.addNamespaces(a),Ty(this.data,p,o),l.silent||this.emit("added",t,a,i,o)}addResources(t,a,i){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const l in i)(be(i[l])||Array.isArray(i[l]))&&this.addResource(t,a,l,i[l],{silent:!0});o.silent||this.emit("added",t,a,i)}addResourceBundle(t,a,i,o,l){let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},p=[t,a];t.indexOf(".")>-1&&(p=t.split("."),o=i,i=a,a=p[1]),this.addNamespaces(a);let f=ju(this.data,p)||{};u.skipCopy||(i=JSON.parse(JSON.stringify(i))),o?i3(f,i,l):f={...f,...i},Ty(this.data,p,f),u.silent||this.emit("added",t,a,i)}removeResourceBundle(t,a){this.hasResourceBundle(t,a)&&delete this.data[t][a],this.removeNamespaces(a),this.emit("removed",t,a)}hasResourceBundle(t,a){return this.getResource(t,a)!==void 0}getResourceBundle(t,a){return a||(a=this.options.defaultNS),this.getResource(t,a)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const a=this.getDataByLanguage(t);return!!(a&&Object.keys(a)||[]).find(o=>a[o]&&Object.keys(a[o]).length>0)}toJSON(){return this.data}}var r3={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,a,i,o){return e.forEach(l=>{var u;t=((u=this.processors[l])==null?void 0:u.process(t,a,i,o))??t}),t}};const Ay={},Cy=e=>!be(e)&&typeof e!="boolean"&&typeof e!="number";class Eu extends Zu{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),RE(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=a,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=aa.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const i=this.resolve(t,a);return(i==null?void 0:i.res)!==void 0}extractFromKey(t,a){let i=a.nsSeparator!==void 0?a.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const o=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator;let l=a.ns||this.options.defaultNS||[];const u=i&&t.indexOf(i)>-1,p=!this.options.userDefinedKeySeparator&&!a.keySeparator&&!this.options.userDefinedNsSeparator&&!a.nsSeparator&&!HE(t,i,o);if(u&&!p){const f=t.match(this.interpolator.nestingRegexp);if(f&&f.length>0)return{key:t,namespaces:be(l)?[l]:l};const m=t.split(i);(i!==o||i===o&&this.options.ns.indexOf(m[0])>-1)&&(l=m.shift()),t=m.join(o)}return{key:t,namespaces:be(l)?[l]:l}}translate(t,a,i){if(typeof a!="object"&&this.options.overloadTranslationOptionHandler&&(a=this.options.overloadTranslationOptionHandler(arguments)),typeof a=="object"&&(a={...a}),a||(a={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const o=a.returnDetails!==void 0?a.returnDetails:this.options.returnDetails,l=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,{key:u,namespaces:p}=this.extractFromKey(t[t.length-1],a),f=p[p.length-1],m=a.lng||this.language,g=a.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((m==null?void 0:m.toLowerCase())==="cimode"){if(g){const H=a.nsSeparator||this.options.nsSeparator;return o?{res:`${f}${H}${u}`,usedKey:u,exactUsedKey:u,usedLng:m,usedNS:f,usedParams:this.getUsedParamsDetails(a)}:`${f}${H}${u}`}return o?{res:u,usedKey:u,exactUsedKey:u,usedLng:m,usedNS:f,usedParams:this.getUsedParamsDetails(a)}:u}const x=this.resolve(t,a);let y=x==null?void 0:x.res;const v=(x==null?void 0:x.usedKey)||u,S=(x==null?void 0:x.exactUsedKey)||u,k=["[object Number]","[object Function]","[object RegExp]"],C=a.joinArrays!==void 0?a.joinArrays:this.options.joinArrays,M=!this.i18nFormat||this.i18nFormat.handleAsObject,z=a.count!==void 0&&!be(a.count),A=Eu.hasDefaultValue(a),$=z?this.pluralResolver.getSuffix(m,a.count,a):"",E=a.ordinal&&z?this.pluralResolver.getSuffix(m,a.count,{ordinal:!1}):"",V=z&&!a.ordinal&&a.count===0,N=V&&a[`defaultValue${this.options.pluralSeparator}zero`]||a[`defaultValue${$}`]||a[`defaultValue${E}`]||a.defaultValue;let O=y;M&&!y&&A&&(O=N);const X=Cy(O),J=Object.prototype.toString.apply(O);if(M&&O&&X&&k.indexOf(J)<0&&!(be(C)&&Array.isArray(O))){if(!a.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const H=this.options.returnedObjectHandler?this.options.returnedObjectHandler(v,O,{...a,ns:p}):`key '${u} (${this.language})' returned an object instead of string.`;return o?(x.res=H,x.usedParams=this.getUsedParamsDetails(a),x):H}if(l){const H=Array.isArray(O),te=H?[]:{},ce=H?S:v;for(const le in O)if(Object.prototype.hasOwnProperty.call(O,le)){const oe=`${ce}${l}${le}`;A&&!y?te[le]=this.translate(oe,{...a,defaultValue:Cy(N)?N[le]:void 0,joinArrays:!1,ns:p}):te[le]=this.translate(oe,{...a,joinArrays:!1,ns:p}),te[le]===oe&&(te[le]=O[le])}y=te}}else if(M&&be(C)&&Array.isArray(y))y=y.join(C),y&&(y=this.extendTranslation(y,t,a,i));else{let H=!1,te=!1;!this.isValidLookup(y)&&A&&(H=!0,y=N),this.isValidLookup(y)||(te=!0,y=u);const le=(a.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&te?void 0:y,oe=A&&N!==y&&this.options.updateMissing;if(te||H||oe){if(this.logger.log(oe?"updateKey":"missingKey",m,f,u,oe?N:y),l){const Z=this.resolve(u,{...a,keySeparator:!1});Z&&Z.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let D=[];const B=this.languageUtils.getFallbackCodes(this.options.fallbackLng,a.lng||this.language);if(this.options.saveMissingTo==="fallback"&&B&&B[0])for(let Z=0;Z<B.length;Z++)D.push(B[Z]);else this.options.saveMissingTo==="all"?D=this.languageUtils.toResolveHierarchy(a.lng||this.language):D.push(a.lng||this.language);const G=(Z,L,Y)=>{var ae;const ne=A&&Y!==y?Y:le;this.options.missingKeyHandler?this.options.missingKeyHandler(Z,f,L,ne,oe,a):(ae=this.backendConnector)!=null&&ae.saveMissing&&this.backendConnector.saveMissing(Z,f,L,ne,oe,a),this.emit("missingKey",Z,f,L,y)};this.options.saveMissing&&(this.options.saveMissingPlurals&&z?D.forEach(Z=>{const L=this.pluralResolver.getSuffixes(Z,a);V&&a[`defaultValue${this.options.pluralSeparator}zero`]&&L.indexOf(`${this.options.pluralSeparator}zero`)<0&&L.push(`${this.options.pluralSeparator}zero`),L.forEach(Y=>{G([Z],u+Y,a[`defaultValue${Y}`]||N)})}):G(D,u,N))}y=this.extendTranslation(y,t,a,x,i),te&&y===u&&this.options.appendNamespaceToMissingKey&&(y=`${f}:${u}`),(te||H)&&this.options.parseMissingKeyHandler&&(y=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${f}:${u}`:u,H?y:void 0))}return o?(x.res=y,x.usedParams=this.getUsedParamsDetails(a),x):y}extendTranslation(t,a,i,o,l){var m,g;var u=this;if((m=this.i18nFormat)!=null&&m.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const x=be(t)&&(((g=i==null?void 0:i.interpolation)==null?void 0:g.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let y;if(x){const S=t.match(this.interpolator.nestingRegexp);y=S&&S.length}let v=i.replace&&!be(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(v={...this.options.interpolation.defaultVariables,...v}),t=this.interpolator.interpolate(t,v,i.lng||this.language||o.usedLng,i),x){const S=t.match(this.interpolator.nestingRegexp),k=S&&S.length;y<k&&(i.nest=!1)}!i.lng&&o&&o.res&&(i.lng=this.language||o.usedLng),i.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var S=arguments.length,k=new Array(S),C=0;C<S;C++)k[C]=arguments[C];return(l==null?void 0:l[0])===k[0]&&!i.context?(u.logger.warn(`It seems you are nesting recursively key: ${k[0]} in key: ${a[0]}`),null):u.translate(...k,a)},i)),i.interpolation&&this.interpolator.reset()}const p=i.postProcess||this.options.postProcess,f=be(p)?[p]:p;return t!=null&&(f!=null&&f.length)&&i.applyPostProcessor!==!1&&(t=r3.handle(f,t,a,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),t}resolve(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,o,l,u,p;return be(t)&&(t=[t]),t.forEach(f=>{if(this.isValidLookup(i))return;const m=this.extractFromKey(f,a),g=m.key;o=g;let x=m.namespaces;this.options.fallbackNS&&(x=x.concat(this.options.fallbackNS));const y=a.count!==void 0&&!be(a.count),v=y&&!a.ordinal&&a.count===0,S=a.context!==void 0&&(be(a.context)||typeof a.context=="number")&&a.context!=="",k=a.lngs?a.lngs:this.languageUtils.toResolveHierarchy(a.lng||this.language,a.fallbackLng);x.forEach(C=>{var M,z;this.isValidLookup(i)||(p=C,!Ay[`${k[0]}-${C}`]&&((M=this.utils)!=null&&M.hasLoadedNamespace)&&!((z=this.utils)!=null&&z.hasLoadedNamespace(p))&&(Ay[`${k[0]}-${C}`]=!0,this.logger.warn(`key "${o}" for languages "${k.join(", ")}" won't get resolved as namespace "${p}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),k.forEach(A=>{var V;if(this.isValidLookup(i))return;u=A;const $=[g];if((V=this.i18nFormat)!=null&&V.addLookupKeys)this.i18nFormat.addLookupKeys($,g,A,C,a);else{let N;y&&(N=this.pluralResolver.getSuffix(A,a.count,a));const O=`${this.options.pluralSeparator}zero`,X=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(y&&($.push(g+N),a.ordinal&&N.indexOf(X)===0&&$.push(g+N.replace(X,this.options.pluralSeparator)),v&&$.push(g+O)),S){const J=`${g}${this.options.contextSeparator}${a.context}`;$.push(J),y&&($.push(J+N),a.ordinal&&N.indexOf(X)===0&&$.push(J+N.replace(X,this.options.pluralSeparator)),v&&$.push(J+O))}}let E;for(;E=$.pop();)this.isValidLookup(i)||(l=E,i=this.getResource(A,C,E,a))}))})}),{res:i,usedKey:o,exactUsedKey:l,usedLng:u,usedNS:p}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,a,i){var l;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(l=this.i18nFormat)!=null&&l.getResource?this.i18nFormat.getResource(t,a,i,o):this.resourceStore.getResource(t,a,i,o)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const a=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=t.replace&&!be(t.replace);let o=i?t.replace:t;if(i&&typeof t.count<"u"&&(o.count=t.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!i){o={...o};for(const l of a)delete o[l]}return o}static hasDefaultValue(t){const a="defaultValue";for(const i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&a===i.substring(0,a.length)&&t[i]!==void 0)return!0;return!1}}class Ey{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=aa.create("languageUtils")}getScriptPartFromCode(t){if(t=Au(t),!t||t.indexOf("-")<0)return null;const a=t.split("-");return a.length===2||(a.pop(),a[a.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(a.join("-"))}getLanguagePartFromCode(t){if(t=Au(t),!t||t.indexOf("-")<0)return t;const a=t.split("-");return this.formatLanguageCode(a[0])}formatLanguageCode(t){if(be(t)&&t.indexOf("-")>-1){let a;try{a=Intl.getCanonicalLocales(t)[0]}catch{}return a&&this.options.lowerCaseLng&&(a=a.toLowerCase()),a||(this.options.lowerCaseLng?t.toLowerCase():t)}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let a;return t.forEach(i=>{if(a)return;const o=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(o))&&(a=o)}),!a&&this.options.supportedLngs&&t.forEach(i=>{if(a)return;const o=this.getLanguagePartFromCode(i);if(this.isSupportedCode(o))return a=o;a=this.options.supportedLngs.find(l=>{if(l===o)return l;if(!(l.indexOf("-")<0&&o.indexOf("-")<0)&&(l.indexOf("-")>0&&o.indexOf("-")<0&&l.substring(0,l.indexOf("-"))===o||l.indexOf(o)===0&&o.length>1))return l})}),a||(a=this.getFallbackCodes(this.options.fallbackLng)[0]),a}getFallbackCodes(t,a){if(!t)return[];if(typeof t=="function"&&(t=t(a)),be(t)&&(t=[t]),Array.isArray(t))return t;if(!a)return t.default||[];let i=t[a];return i||(i=t[this.getScriptPartFromCode(a)]),i||(i=t[this.formatLanguageCode(a)]),i||(i=t[this.getLanguagePartFromCode(a)]),i||(i=t.default),i||[]}toResolveHierarchy(t,a){const i=this.getFallbackCodes(a||this.options.fallbackLng||[],t),o=[],l=u=>{u&&(this.isSupportedCode(u)?o.push(u):this.logger.warn(`rejecting language code not found in supportedLngs: ${u}`))};return be(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&l(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&l(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&l(this.getLanguagePartFromCode(t))):be(t)&&l(this.formatLanguageCode(t)),i.forEach(u=>{o.indexOf(u)<0&&l(this.formatLanguageCode(u))}),o}}const My={zero:0,one:1,two:2,few:3,many:4,other:5},zy={select:e=>e===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class UE{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=a,this.logger=aa.create("pluralResolver"),this.pluralRulesCache={}}addRule(t,a){this.rules[t]=a}clearCache(){this.pluralRulesCache={}}getRule(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=Au(t==="dev"?"en":t),o=a.ordinal?"ordinal":"cardinal",l=JSON.stringify({cleanedCode:i,type:o});if(l in this.pluralRulesCache)return this.pluralRulesCache[l];let u;try{u=new Intl.PluralRules(i,{type:o})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),zy;if(!t.match(/-|_/))return zy;const f=this.languageUtils.getLanguagePartFromCode(t);u=this.getRule(f,a)}return this.pluralRulesCache[l]=u,u}needsPlural(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(t,a);return i||(i=this.getRule("dev",a)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(t,a){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,i).map(o=>`${a}${o}`)}getSuffixes(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(t,a);return i||(i=this.getRule("dev",a)),i?i.resolvedOptions().pluralCategories.sort((o,l)=>My[o]-My[l]).map(o=>`${this.options.prepend}${a.ordinal?`ordinal${this.options.prepend}`:""}${o}`):[]}getSuffix(t,a){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(t,i);return o?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${o.select(a)}`:(this.logger.warn(`no plural rule found for: ${t}`),this.getSuffix("dev",a,i))}}const Ry=function(e,t,a){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=DE(e,t,a);return!l&&o&&be(a)&&(l=em(e,a,i),l===void 0&&(l=em(t,a,i))),l},Yp=e=>e.replace(/\$/g,"$$$$");class GE{constructor(){var a;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=aa.create("interpolator"),this.options=t,this.format=((a=t==null?void 0:t.interpolation)==null?void 0:a.format)||(i=>i),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:a,escapeValue:i,useRawValueToEscape:o,prefix:l,prefixEscaped:u,suffix:p,suffixEscaped:f,formatSeparator:m,unescapeSuffix:g,unescapePrefix:x,nestingPrefix:y,nestingPrefixEscaped:v,nestingSuffix:S,nestingSuffixEscaped:k,nestingOptionsSeparator:C,maxReplaces:M,alwaysFormat:z}=t.interpolation;this.escape=a!==void 0?a:VE,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=l?Dr(l):u||"{{",this.suffix=p?Dr(p):f||"}}",this.formatSeparator=m||",",this.unescapePrefix=g?"":x||"-",this.unescapeSuffix=this.unescapePrefix?"":g||"",this.nestingPrefix=y?Dr(y):v||Dr("$t("),this.nestingSuffix=S?Dr(S):k||Dr(")"),this.nestingOptionsSeparator=C||",",this.maxReplaces=M||1e3,this.alwaysFormat=z!==void 0?z:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(a,i)=>(a==null?void 0:a.source)===i?(a.lastIndex=0,a):new RegExp(i,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,a,i,o){var v;let l,u,p;const f=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},m=S=>{if(S.indexOf(this.formatSeparator)<0){const z=Ry(a,f,S,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(z,void 0,i,{...o,...a,interpolationkey:S}):z}const k=S.split(this.formatSeparator),C=k.shift().trim(),M=k.join(this.formatSeparator).trim();return this.format(Ry(a,f,C,this.options.keySeparator,this.options.ignoreJSONStructure),M,i,{...o,...a,interpolationkey:C})};this.resetRegExp();const g=(o==null?void 0:o.missingInterpolationHandler)||this.options.missingInterpolationHandler,x=((v=o==null?void 0:o.interpolation)==null?void 0:v.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:S=>Yp(S)},{regex:this.regexp,safeValue:S=>this.escapeValue?Yp(this.escape(S)):Yp(S)}].forEach(S=>{for(p=0;l=S.regex.exec(t);){const k=l[1].trim();if(u=m(k),u===void 0)if(typeof g=="function"){const M=g(t,l,o);u=be(M)?M:""}else if(o&&Object.prototype.hasOwnProperty.call(o,k))u="";else if(x){u=l[0];continue}else this.logger.warn(`missed to pass in variable ${k} for interpolating ${t}`),u="";else!be(u)&&!this.useRawValueToEscape&&(u=wy(u));const C=S.safeValue(u);if(t=t.replace(l[0],C),x?(S.regex.lastIndex+=u.length,S.regex.lastIndex-=l[0].length):S.regex.lastIndex=0,p++,p>=this.maxReplaces)break}}),t}nest(t,a){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,l,u;const p=(f,m)=>{const g=this.nestingOptionsSeparator;if(f.indexOf(g)<0)return f;const x=f.split(new RegExp(`${g}[ ]*{`));let y=`{${x[1]}`;f=x[0],y=this.interpolate(y,u);const v=y.match(/'/g),S=y.match(/"/g);(((v==null?void 0:v.length)??0)%2===0&&!S||S.length%2!==0)&&(y=y.replace(/'/g,'"'));try{u=JSON.parse(y),m&&(u={...m,...u})}catch(k){return this.logger.warn(`failed parsing options string in nesting for key ${f}`,k),`${f}${g}${y}`}return u.defaultValue&&u.defaultValue.indexOf(this.prefix)>-1&&delete u.defaultValue,f};for(;o=this.nestingRegexp.exec(t);){let f=[];u={...i},u=u.replace&&!be(u.replace)?u.replace:u,u.applyPostProcessor=!1,delete u.defaultValue;let m=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const g=o[1].split(this.formatSeparator).map(x=>x.trim());o[1]=g.shift(),f=g,m=!0}if(l=a(p.call(this,o[1].trim(),u),u),l&&o[0]===t&&!be(l))return l;be(l)||(l=wy(l)),l||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),l=""),m&&(l=f.reduce((g,x)=>this.format(g,x,i.lng,{...i,interpolationkey:o[1].trim()}),l.trim())),t=t.replace(o[0],l),this.regexp.lastIndex=0}return t}}const IE=e=>{let t=e.toLowerCase().trim();const a={};if(e.indexOf("(")>-1){const i=e.split("(");t=i[0].toLowerCase().trim();const o=i[1].substring(0,i[1].length-1);t==="currency"&&o.indexOf(":")<0?a.currency||(a.currency=o.trim()):t==="relativetime"&&o.indexOf(":")<0?a.range||(a.range=o.trim()):o.split(";").forEach(u=>{if(u){const[p,...f]=u.split(":"),m=f.join(":").trim().replace(/^'+|'+$/g,""),g=p.trim();a[g]||(a[g]=m),m==="false"&&(a[g]=!1),m==="true"&&(a[g]=!0),isNaN(m)||(a[g]=parseInt(m,10))}})}return{formatName:t,formatOptions:a}},Pr=e=>{const t={};return(a,i,o)=>{let l=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(l={...l,[o.interpolationkey]:void 0});const u=i+JSON.stringify(l);let p=t[u];return p||(p=e(Au(i),o),t[u]=p),p(a)}};class FE{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=aa.create("formatter"),this.options=t,this.formats={number:Pr((a,i)=>{const o=new Intl.NumberFormat(a,{...i});return l=>o.format(l)}),currency:Pr((a,i)=>{const o=new Intl.NumberFormat(a,{...i,style:"currency"});return l=>o.format(l)}),datetime:Pr((a,i)=>{const o=new Intl.DateTimeFormat(a,{...i});return l=>o.format(l)}),relativetime:Pr((a,i)=>{const o=new Intl.RelativeTimeFormat(a,{...i});return l=>o.format(l,i.range||"day")}),list:Pr((a,i)=>{const o=new Intl.ListFormat(a,{...i});return l=>o.format(l)})},this.init(t)}init(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=a.interpolation.formatSeparator||","}add(t,a){this.formats[t.toLowerCase().trim()]=a}addCached(t,a){this.formats[t.toLowerCase().trim()]=Pr(a)}format(t,a,i){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=a.split(this.formatSeparator);if(l.length>1&&l[0].indexOf("(")>1&&l[0].indexOf(")")<0&&l.find(p=>p.indexOf(")")>-1)){const p=l.findIndex(f=>f.indexOf(")")>-1);l[0]=[l[0],...l.splice(1,p)].join(this.formatSeparator)}return l.reduce((p,f)=>{var x;const{formatName:m,formatOptions:g}=IE(f);if(this.formats[m]){let y=p;try{const v=((x=o==null?void 0:o.formatParams)==null?void 0:x[o.interpolationkey])||{},S=v.locale||v.lng||o.locale||o.lng||i;y=this.formats[m](p,S,{...g,...o,...v})}catch(v){this.logger.warn(v)}return y}else this.logger.warn(`there was no format function for ${m}`);return p},t)}}const qE=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)};class KE extends Zu{constructor(t,a,i){var l,u;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=a,this.services=i,this.languageUtils=i.languageUtils,this.options=o,this.logger=aa.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],(u=(l=this.backend)==null?void 0:l.init)==null||u.call(l,i,o.backend,o)}queueLoad(t,a,i,o){const l={},u={},p={},f={};return t.forEach(m=>{let g=!0;a.forEach(x=>{const y=`${m}|${x}`;!i.reload&&this.store.hasResourceBundle(m,x)?this.state[y]=2:this.state[y]<0||(this.state[y]===1?u[y]===void 0&&(u[y]=!0):(this.state[y]=1,g=!1,u[y]===void 0&&(u[y]=!0),l[y]===void 0&&(l[y]=!0),f[x]===void 0&&(f[x]=!0)))}),g||(p[m]=!0)}),(Object.keys(l).length||Object.keys(u).length)&&this.queue.push({pending:u,pendingCount:Object.keys(u).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(l),pending:Object.keys(u),toLoadLanguages:Object.keys(p),toLoadNamespaces:Object.keys(f)}}loaded(t,a,i){const o=t.split("|"),l=o[0],u=o[1];a&&this.emit("failedLoading",l,u,a),!a&&i&&this.store.addResourceBundle(l,u,i,void 0,void 0,{skipCopy:!0}),this.state[t]=a?-1:2,a&&i&&(this.state[t]=0);const p={};this.queue.forEach(f=>{OE(f.loaded,[l],u),qE(f,t),a&&f.errors.push(a),f.pendingCount===0&&!f.done&&(Object.keys(f.loaded).forEach(m=>{p[m]||(p[m]={});const g=f.loaded[m];g.length&&g.forEach(x=>{p[m][x]===void 0&&(p[m][x]=!0)})}),f.done=!0,f.errors.length?f.callback(f.errors):f.callback())}),this.emit("loaded",p),this.queue=this.queue.filter(f=>!f.done)}read(t,a,i){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,u=arguments.length>5?arguments[5]:void 0;if(!t.length)return u(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:a,fcName:i,tried:o,wait:l,callback:u});return}this.readingCalls++;const p=(m,g)=>{if(this.readingCalls--,this.waitingReads.length>0){const x=this.waitingReads.shift();this.read(x.lng,x.ns,x.fcName,x.tried,x.wait,x.callback)}if(m&&g&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,t,a,i,o+1,l*2,u)},l);return}u(m,g)},f=this.backend[i].bind(this.backend);if(f.length===2){try{const m=f(t,a);m&&typeof m.then=="function"?m.then(g=>p(null,g)).catch(p):p(null,m)}catch(m){p(m)}return}return f(t,a,p)}prepareLoading(t,a){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();be(t)&&(t=this.languageUtils.toResolveHierarchy(t)),be(a)&&(a=[a]);const l=this.queueLoad(t,a,i,o);if(!l.toLoad.length)return l.pending.length||o(),null;l.toLoad.forEach(u=>{this.loadOne(u)})}load(t,a,i){this.prepareLoading(t,a,{},i)}reload(t,a,i){this.prepareLoading(t,a,{reload:!0},i)}loadOne(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=t.split("|"),o=i[0],l=i[1];this.read(o,l,"read",void 0,void 0,(u,p)=>{u&&this.logger.warn(`${a}loading namespace ${l} for language ${o} failed`,u),!u&&p&&this.logger.log(`${a}loaded namespace ${l} for language ${o}`,p),this.loaded(t,u,p)})}saveMissing(t,a,i,o,l){var f,m,g,x,y;let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},p=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((m=(f=this.services)==null?void 0:f.utils)!=null&&m.hasLoadedNamespace&&!((x=(g=this.services)==null?void 0:g.utils)!=null&&x.hasLoadedNamespace(a))){this.logger.warn(`did not save key "${i}" as the namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((y=this.backend)!=null&&y.create){const v={...u,isUpdate:l},S=this.backend.create.bind(this.backend);if(S.length<6)try{let k;S.length===5?k=S(t,a,i,o,v):k=S(t,a,i,o),k&&typeof k.then=="function"?k.then(C=>p(null,C)).catch(p):p(null,k)}catch(k){p(k)}else S(t,a,i,o,p,v)}!t||!t[0]||this.store.addResource(t[0],a,i,o)}}}const Ly=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]=="object"&&(t=e[1]),be(e[1])&&(t.defaultValue=e[1]),be(e[2])&&(t.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const a=e[3]||e[2];Object.keys(a).forEach(i=>{t[i]=a[i]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Oy=e=>{var t,a;return be(e.ns)&&(e.ns=[e.ns]),be(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),be(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),((a=(t=e.supportedLngs)==null?void 0:t.indexOf)==null?void 0:a.call(t,"cimode"))<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),typeof e.initImmediate=="boolean"&&(e.initAsync=e.initImmediate),e},Nc=()=>{},YE=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(a=>{typeof e[a]=="function"&&(e[a]=e[a].bind(e))})};class tl extends Zu{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Oy(t),this.services={},this.logger=aa,this.modules={external:[]},YE(this),a&&!this.isInitialized&&!t.isClone){if(!this.options.initAsync)return this.init(t,a),this;setTimeout(()=>{this.init(t,a)},0)}}init(){var t=this;let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof a=="function"&&(i=a,a={}),a.defaultNS==null&&a.ns&&(be(a.ns)?a.defaultNS=a.ns:a.ns.indexOf("translation")<0&&(a.defaultNS=a.ns[0]));const o=Ly();this.options={...o,...this.options,...Oy(a)},this.options.interpolation={...o.interpolation,...this.options.interpolation},a.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=a.keySeparator),a.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=a.nsSeparator);const l=g=>g?typeof g=="function"?new g:g:null;if(!this.options.isClone){this.modules.logger?aa.init(l(this.modules.logger),this.options):aa.init(null,this.options);let g;this.modules.formatter?g=this.modules.formatter:g=FE;const x=new Ey(this.options);this.store=new jy(this.options.resources,this.options);const y=this.services;y.logger=aa,y.resourceStore=this.store,y.languageUtils=x,y.pluralResolver=new UE(x,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),g&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(y.formatter=l(g),y.formatter.init(y,this.options),this.options.interpolation.format=y.formatter.format.bind(y.formatter)),y.interpolator=new GE(this.options),y.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},y.backendConnector=new KE(l(this.modules.backend),y.resourceStore,y,this.options),y.backendConnector.on("*",function(v){for(var S=arguments.length,k=new Array(S>1?S-1:0),C=1;C<S;C++)k[C-1]=arguments[C];t.emit(v,...k)}),this.modules.languageDetector&&(y.languageDetector=l(this.modules.languageDetector),y.languageDetector.init&&y.languageDetector.init(y,this.options.detection,this.options)),this.modules.i18nFormat&&(y.i18nFormat=l(this.modules.i18nFormat),y.i18nFormat.init&&y.i18nFormat.init(this)),this.translator=new Eu(this.services,this.options),this.translator.on("*",function(v){for(var S=arguments.length,k=new Array(S>1?S-1:0),C=1;C<S;C++)k[C-1]=arguments[C];t.emit(v,...k)}),this.modules.external.forEach(v=>{v.init&&v.init(this)})}if(this.format=this.options.interpolation.format,i||(i=Nc),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const g=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);g.length>0&&g[0]!=="dev"&&(this.options.lng=g[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(g=>{this[g]=function(){return t.store[g](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(g=>{this[g]=function(){return t.store[g](...arguments),t}});const f=So(),m=()=>{const g=(x,y)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),f.resolve(y),i(x,y)};if(this.languages&&!this.isInitialized)return g(null,this.t.bind(this));this.changeLanguage(this.options.lng,g)};return this.options.resources||!this.options.initAsync?m():setTimeout(m,0),f}loadResources(t){var l,u;let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Nc;const o=be(t)?t:this.language;if(typeof t=="function"&&(i=t),!this.options.resources||this.options.partialBundledLanguages){if((o==null?void 0:o.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const p=[],f=m=>{if(!m||m==="cimode")return;this.services.languageUtils.toResolveHierarchy(m).forEach(x=>{x!=="cimode"&&p.indexOf(x)<0&&p.push(x)})};o?f(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(g=>f(g)),(u=(l=this.options.preload)==null?void 0:l.forEach)==null||u.call(l,m=>f(m)),this.services.backendConnector.load(p,this.options.ns,m=>{!m&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(m)})}else i(null)}reloadResources(t,a,i){const o=So();return typeof t=="function"&&(i=t,t=void 0),typeof a=="function"&&(i=a,a=void 0),t||(t=this.languages),a||(a=this.options.ns),i||(i=Nc),this.services.backendConnector.reload(t,a,l=>{o.resolve(),i(l)}),o}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&r3.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let a=0;a<this.languages.length;a++){const i=this.languages[a];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(t,a){var i=this;this.isLanguageChangingTo=t;const o=So();this.emit("languageChanging",t);const l=f=>{this.language=f,this.languages=this.services.languageUtils.toResolveHierarchy(f),this.resolvedLanguage=void 0,this.setResolvedLanguage(f)},u=(f,m)=>{m?(l(m),this.translator.changeLanguage(m),this.isLanguageChangingTo=void 0,this.emit("languageChanged",m),this.logger.log("languageChanged",m)):this.isLanguageChangingTo=void 0,o.resolve(function(){return i.t(...arguments)}),a&&a(f,function(){return i.t(...arguments)})},p=f=>{var g,x;!t&&!f&&this.services.languageDetector&&(f=[]);const m=be(f)?f:this.services.languageUtils.getBestMatchFromCodes(f);m&&(this.language||l(m),this.translator.language||this.translator.changeLanguage(m),(x=(g=this.services.languageDetector)==null?void 0:g.cacheUserLanguage)==null||x.call(g,m)),this.loadResources(m,y=>{u(y,m)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?p(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(p):this.services.languageDetector.detect(p):p(t),o}getFixedT(t,a,i){var o=this;const l=function(u,p){let f;if(typeof p!="object"){for(var m=arguments.length,g=new Array(m>2?m-2:0),x=2;x<m;x++)g[x-2]=arguments[x];f=o.options.overloadTranslationOptionHandler([u,p].concat(g))}else f={...p};f.lng=f.lng||l.lng,f.lngs=f.lngs||l.lngs,f.ns=f.ns||l.ns,f.keyPrefix!==""&&(f.keyPrefix=f.keyPrefix||i||l.keyPrefix);const y=o.options.keySeparator||".";let v;return f.keyPrefix&&Array.isArray(u)?v=u.map(S=>`${f.keyPrefix}${y}${S}`):v=f.keyPrefix?`${f.keyPrefix}${y}${u}`:u,o.t(v,f)};return be(t)?l.lng=t:l.lngs=t,l.ns=a,l.keyPrefix=i,l}t(){var o;for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return(o=this.translator)==null?void 0:o.translate(...a)}exists(){var o;for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return(o=this.translator)==null?void 0:o.exists(...a)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=a.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,l=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const u=(p,f)=>{const m=this.services.backendConnector.state[`${p}|${f}`];return m===-1||m===0||m===2};if(a.precheck){const p=a.precheck(this,u);if(p!==void 0)return p}return!!(this.hasResourceBundle(i,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||u(i,t)&&(!o||u(l,t)))}loadNamespaces(t,a){const i=So();return this.options.ns?(be(t)&&(t=[t]),t.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{i.resolve(),a&&a(o)}),i):(a&&a(),Promise.resolve())}loadLanguages(t,a){const i=So();be(t)&&(t=[t]);const o=this.options.preload||[],l=t.filter(u=>o.indexOf(u)<0&&this.services.languageUtils.isSupportedCode(u));return l.length?(this.options.preload=o.concat(l),this.loadResources(u=>{i.resolve(),a&&a(u)}),i):(a&&a(),Promise.resolve())}dir(t){var o,l;if(t||(t=this.resolvedLanguage||(((o=this.languages)==null?void 0:o.length)>0?this.languages[0]:this.language)),!t)return"rtl";const a=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((l=this.services)==null?void 0:l.languageUtils)||new Ey(Ly());return a.indexOf(i.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;return new tl(t,a)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Nc;const i=t.forkResourceStore;i&&delete t.forkResourceStore;const o={...this.options,...t,isClone:!0},l=new tl(o);if((t.debug!==void 0||t.prefix!==void 0)&&(l.logger=l.logger.clone(t)),["store","services","language"].forEach(p=>{l[p]=this[p]}),l.services={...this.services},l.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},i){const p=Object.keys(this.store.data).reduce((f,m)=>(f[m]={...this.store.data[m]},Object.keys(f[m]).reduce((g,x)=>(g[x]={...f[m][x]},g),{})),{});l.store=new jy(p,o),l.services.resourceStore=l.store}return l.translator=new Eu(l.services,o),l.translator.on("*",function(p){for(var f=arguments.length,m=new Array(f>1?f-1:0),g=1;g<f;g++)m[g-1]=arguments[g];l.emit(p,...m)}),l.init(o,a),l.translator.options=o,l.translator.backendConnector.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},l}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const _t=tl.createInstance();_t.createInstance=tl.createInstance;_t.createInstance;_t.dir;_t.init;_t.loadResources;_t.reloadResources;_t.use;_t.changeLanguage;_t.getFixedT;_t.t;_t.exists;_t.setDefaultNamespace;_t.hasLoadedNamespace;_t.loadNamespaces;_t.loadLanguages;function tm(e){"@babel/helpers - typeof";return tm=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tm(e)}function s3(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":tm(XMLHttpRequest))==="object"}function XE(e){return!!e&&typeof e.then=="function"}function WE(e){return XE(e)?e:Promise.resolve(e)}const QE="modulepreload",ZE=function(e){return"/"+e},Dy={},JE=function(t,a,i){let o=Promise.resolve();if(a&&a.length>0){let u=function(m){return Promise.all(m.map(g=>Promise.resolve(g).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const p=document.querySelector("meta[property=csp-nonce]"),f=(p==null?void 0:p.nonce)||(p==null?void 0:p.getAttribute("nonce"));o=u(a.map(m=>{if(m=ZE(m),m in Dy)return;Dy[m]=!0;const g=m.endsWith(".css"),x=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${x}`))return;const y=document.createElement("link");if(y.rel=g?"stylesheet":QE,g||(y.as="script"),y.crossOrigin="",y.href=m,f&&y.setAttribute("nonce",f),document.head.appendChild(y),g)return new Promise((v,S)=>{y.addEventListener("load",v),y.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${m}`)))})}))}function l(u){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=u,window.dispatchEvent(p),!p.defaultPrevented)throw u}return o.then(u=>{for(const p of u||[])p.status==="rejected"&&l(p.reason);return t().catch(l)})};function Py(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),a.push.apply(a,i)}return a}function Vy(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Py(Object(a),!0).forEach(function(i){eM(e,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Py(Object(a)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))})}return e}function eM(e,t,a){return(t=tM(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function tM(e){var t=nM(e,"string");return qi(t)=="symbol"?t:t+""}function nM(e,t){if(qi(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var i=a.call(e,t);if(qi(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function qi(e){"@babel/helpers - typeof";return qi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qi(e)}var fi=typeof fetch=="function"?fetch:void 0;typeof global<"u"&&global.fetch?fi=global.fetch:typeof window<"u"&&window.fetch&&(fi=window.fetch);var nl;s3()&&(typeof global<"u"&&global.XMLHttpRequest?nl=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(nl=window.XMLHttpRequest));var Mu;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?Mu=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(Mu=window.ActiveXObject));typeof fi!="function"&&(fi=void 0);if(!fi&&!nl&&!Mu)try{JE(()=>import("./browser-ponyfill-CdFHoAbr.js").then(e=>e.b),[]).then(function(e){fi=e.default}).catch(function(){})}catch{}var nm=function(t,a){if(a&&qi(a)==="object"){var i="";for(var o in a)i+="&"+encodeURIComponent(o)+"="+encodeURIComponent(a[o]);if(!i)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+i.slice(1)}return t},Ny=function(t,a,i,o){var l=function(f){if(!f.ok)return i(f.statusText||"Error",{status:f.status});f.text().then(function(m){i(null,{status:f.status,data:m})}).catch(i)};if(o){var u=o(t,a);if(u instanceof Promise){u.then(l).catch(i);return}}typeof fetch=="function"?fetch(t,a).then(l).catch(i):fi(t,a).then(l).catch(i)},By=!1,aM=function(t,a,i,o){t.queryStringParams&&(a=nm(a,t.queryStringParams));var l=Vy({},typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(l["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),i&&(l["Content-Type"]="application/json");var u=typeof t.requestOptions=="function"?t.requestOptions(i):t.requestOptions,p=Vy({method:i?"POST":"GET",body:i?t.stringify(i):void 0,headers:l},By?{}:u),f=typeof t.alternateFetch=="function"&&t.alternateFetch.length>=1?t.alternateFetch:void 0;try{Ny(a,p,o,f)}catch(m){if(!u||Object.keys(u).length===0||!m.message||m.message.indexOf("not implemented")<0)return o(m);try{Object.keys(u).forEach(function(g){delete p[g]}),Ny(a,p,o,f),By=!0}catch(g){o(g)}}},iM=function(t,a,i,o){i&&qi(i)==="object"&&(i=nm("",i).slice(1)),t.queryStringParams&&(a=nm(a,t.queryStringParams));try{var l=nl?new nl:new Mu("MSXML2.XMLHTTP.3.0");l.open(i?"POST":"GET",a,1),t.crossDomain||l.setRequestHeader("X-Requested-With","XMLHttpRequest"),l.withCredentials=!!t.withCredentials,i&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),l.overrideMimeType&&l.overrideMimeType("application/json");var u=t.customHeaders;if(u=typeof u=="function"?u():u,u)for(var p in u)l.setRequestHeader(p,u[p]);l.onreadystatechange=function(){l.readyState>3&&o(l.status>=400?l.statusText:null,{status:l.status,data:l.responseText})},l.send(i)}catch(f){console&&console.log(f)}},rM=function(t,a,i,o){if(typeof i=="function"&&(o=i,i=void 0),o=o||function(){},fi&&a.indexOf("file:")!==0)return aM(t,a,i,o);if(s3()||typeof ActiveXObject=="function")return iM(t,a,i,o);o(new Error("No fetch and no xhr implementation found!"))};function as(e){"@babel/helpers - typeof";return as=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},as(e)}function _y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),a.push.apply(a,i)}return a}function Xp(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?_y(Object(a),!0).forEach(function(i){o3(e,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_y(Object(a)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))})}return e}function sM(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function oM(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,l3(i.key),i)}}function lM(e,t,a){return t&&oM(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function o3(e,t,a){return(t=l3(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l3(e){var t=cM(e,"string");return as(t)=="symbol"?t:t+""}function cM(e,t){if(as(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var i=a.call(e,t);if(as(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var uM=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(a){return JSON.parse(a)},stringify:JSON.stringify,parsePayload:function(a,i,o){return o3({},i,o||"")},parseLoadPayload:function(a,i){},request:rM,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},c3=function(){function e(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};sM(this,e),this.services=t,this.options=a,this.allOptions=i,this.type="backend",this.init(t,a,i)}return lM(e,[{key:"init",value:function(a){var i=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=a,this.options=Xp(Xp(Xp({},uM()),this.options||{}),o),this.allOptions=l,this.services&&this.options.reloadInterval){var u=setInterval(function(){return i.reload()},this.options.reloadInterval);as(u)==="object"&&typeof u.unref=="function"&&u.unref()}}},{key:"readMulti",value:function(a,i,o){this._readAny(a,a,i,i,o)}},{key:"read",value:function(a,i,o){this._readAny([a],a,[i],i,o)}},{key:"_readAny",value:function(a,i,o,l,u){var p=this,f=this.options.loadPath;typeof this.options.loadPath=="function"&&(f=this.options.loadPath(a,o)),f=WE(f),f.then(function(m){if(!m)return u(null,{});var g=p.services.interpolator.interpolate(m,{lng:a.join("+"),ns:o.join("+")});p.loadUrl(g,u,i,l)})}},{key:"loadUrl",value:function(a,i,o,l){var u=this,p=typeof o=="string"?[o]:o,f=typeof l=="string"?[l]:l,m=this.options.parseLoadPayload(p,f);this.options.request(this.options,a,m,function(g,x){if(x&&(x.status>=500&&x.status<600||!x.status))return i("failed loading "+a+"; status code: "+x.status,!0);if(x&&x.status>=400&&x.status<500)return i("failed loading "+a+"; status code: "+x.status,!1);if(!x&&g&&g.message){var y=g.message.toLowerCase(),v=["failed","fetch","network","load"].find(function(C){return y.indexOf(C)>-1});if(v)return i("failed loading "+a+": "+g.message,!0)}if(g)return i(g,!1);var S,k;try{typeof x.data=="string"?S=u.options.parse(x.data,o,l):S=x.data}catch{k="failed parsing "+a+" to json"}if(k)return i(k,!1);i(null,S)})}},{key:"create",value:function(a,i,o,l,u){var p=this;if(this.options.addPath){typeof a=="string"&&(a=[a]);var f=this.options.parsePayload(i,o,l),m=0,g=[],x=[];a.forEach(function(y){var v=p.options.addPath;typeof p.options.addPath=="function"&&(v=p.options.addPath(y,i));var S=p.services.interpolator.interpolate(v,{lng:y,ns:i});p.options.request(p.options,S,f,function(k,C){m+=1,g.push(k),x.push(C),m===a.length&&typeof u=="function"&&u(g,x)})})}}},{key:"reload",value:function(){var a=this,i=this.services,o=i.backendConnector,l=i.languageUtils,u=i.logger,p=o.language;if(!(p&&p.toLowerCase()==="cimode")){var f=[],m=function(x){var y=l.toResolveHierarchy(x);y.forEach(function(v){f.indexOf(v)<0&&f.push(v)})};m(p),this.allOptions.preload&&this.allOptions.preload.forEach(function(g){return m(g)}),f.forEach(function(g){a.allOptions.ns.forEach(function(x){o.read(g,x,"read",null,null,function(y,v){y&&u.warn("loading namespace ".concat(x," for language ").concat(g," failed"),y),!y&&v&&u.log("loaded namespace ".concat(x," for language ").concat(g),v),o.loaded("".concat(g,"|").concat(x),y,v)})})})}}}])}();c3.type="backend";const{slice:dM,forEach:fM}=[];function pM(e){return fM.call(dM.call(arguments,1),t=>{if(t)for(const a in t)e[a]===void 0&&(e[a]=t[a])}),e}function hM(e){return typeof e!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(a=>a.test(e))}const Hy=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,mM=function(e,t){const i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},o=encodeURIComponent(t);let l=`${e}=${o}`;if(i.maxAge>0){const u=i.maxAge-0;if(Number.isNaN(u))throw new Error("maxAge should be a Number");l+=`; Max-Age=${Math.floor(u)}`}if(i.domain){if(!Hy.test(i.domain))throw new TypeError("option domain is invalid");l+=`; Domain=${i.domain}`}if(i.path){if(!Hy.test(i.path))throw new TypeError("option path is invalid");l+=`; Path=${i.path}`}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");l+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(l+="; HttpOnly"),i.secure&&(l+="; Secure"),i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"strict":l+="; SameSite=Strict";break;case"none":l+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return i.partitioned&&(l+="; Partitioned"),l},$y={create(e,t,a,i){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};a&&(o.expires=new Date,o.expires.setTime(o.expires.getTime()+a*60*1e3)),i&&(o.domain=i),document.cookie=mM(e,t,o)},read(e){const t=`${e}=`,a=document.cookie.split(";");for(let i=0;i<a.length;i++){let o=a[i];for(;o.charAt(0)===" ";)o=o.substring(1,o.length);if(o.indexOf(t)===0)return o.substring(t.length,o.length)}return null},remove(e,t){this.create(e,"",-1,t)}};var gM={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&typeof document<"u")return $y.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:a,cookieMinutes:i,cookieDomain:o,cookieOptions:l}=t;a&&typeof document<"u"&&$y.create(a,e,i,o,l)}},bM={name:"querystring",lookup(e){var i;let{lookupQuerystring:t}=e,a;if(typeof window<"u"){let{search:o}=window.location;!window.location.search&&((i=window.location.hash)==null?void 0:i.indexOf("?"))>-1&&(o=window.location.hash.substring(window.location.hash.indexOf("?")));const u=o.substring(1).split("&");for(let p=0;p<u.length;p++){const f=u[p].indexOf("=");f>0&&u[p].substring(0,f)===t&&(a=u[p].substring(f+1))}}return a}},xM={name:"hash",lookup(e){var o;let{lookupHash:t,lookupFromHashIndex:a}=e,i;if(typeof window<"u"){const{hash:l}=window.location;if(l&&l.length>2){const u=l.substring(1);if(t){const p=u.split("&");for(let f=0;f<p.length;f++){const m=p[f].indexOf("=");m>0&&p[f].substring(0,m)===t&&(i=p[f].substring(m+1))}}if(i)return i;if(!i&&a>-1){const p=l.match(/\/([a-zA-Z-]*)/g);return Array.isArray(p)?(o=p[typeof a=="number"?a:0])==null?void 0:o.replace("/",""):void 0}}}return i}};let Vr=null;const Uy=()=>{if(Vr!==null)return Vr;try{if(Vr=typeof window<"u"&&window.localStorage!==null,!Vr)return!1;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch{Vr=!1}return Vr};var yM={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&Uy())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:a}=t;a&&Uy()&&window.localStorage.setItem(a,e)}};let Nr=null;const Gy=()=>{if(Nr!==null)return Nr;try{if(Nr=typeof window<"u"&&window.sessionStorage!==null,!Nr)return!1;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch{Nr=!1}return Nr};var vM={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&Gy())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:a}=t;a&&Gy()&&window.sessionStorage.setItem(a,e)}},wM={name:"navigator",lookup(e){const t=[];if(typeof navigator<"u"){const{languages:a,userLanguage:i,language:o}=navigator;if(a)for(let l=0;l<a.length;l++)t.push(a[l]);i&&t.push(i),o&&t.push(o)}return t.length>0?t:void 0}},SM={name:"htmlTag",lookup(e){let{htmlTag:t}=e,a;const i=t||(typeof document<"u"?document.documentElement:null);return i&&typeof i.getAttribute=="function"&&(a=i.getAttribute("lang")),a}},kM={name:"path",lookup(e){var o;let{lookupFromPathIndex:t}=e;if(typeof window>"u")return;const a=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(a)?(o=a[typeof t=="number"?t:0])==null?void 0:o.replace("/",""):void 0}},TM={name:"subdomain",lookup(e){var o,l;let{lookupFromSubdomainIndex:t}=e;const a=typeof t=="number"?t+1:1,i=typeof window<"u"&&((l=(o=window.location)==null?void 0:o.hostname)==null?void 0:l.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(i)return i[a]}};let u3=!1;try{document.cookie,u3=!0}catch{}const d3=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];u3||d3.splice(1,1);const jM=()=>({order:d3,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e});class f3{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(t,a)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=t,this.options=pM(a,this.options||{},jM()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=o=>o.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(gM),this.addDetector(bM),this.addDetector(yM),this.addDetector(vM),this.addDetector(wM),this.addDetector(SM),this.addDetector(kM),this.addDetector(TM),this.addDetector(xM)}addDetector(t){return this.detectors[t.name]=t,this}detect(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,a=[];return t.forEach(i=>{if(this.detectors[i]){let o=this.detectors[i].lookup(this.options);o&&typeof o=="string"&&(o=[o]),o&&(a=a.concat(o))}}),a=a.filter(i=>i!=null&&!hM(i)).map(i=>this.options.convertDetectedLanguage(i)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?a:a.length>0?a[0]:null}cacheUserLanguage(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;a&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(t)>-1||a.forEach(i=>{this.detectors[i]&&this.detectors[i].cacheUserLanguage(t,this.options)}))}}f3.type="languageDetector";const AM="20260312-de-source-repair",bg=["de","uk","tr","ar","pl","ku","fa","it","es","el","ro","bg"];_t.use(c3).use(f3).use(AE).init({supportedLngs:[...bg],fallbackLng:"de",debug:!1,interpolation:{escapeValue:!1},backend:{loadPath:`/locales/{{lng}}/translation.json?v=${AM}`},detection:{order:["localStorage","navigator"],caches:["localStorage"],lookupLocalStorage:"i18nextLng"}});const p3=j.createContext(void 0),CM=({children:e})=>{const{i18n:t}=Ge(),a=o=>{const l=(o||"").toLowerCase().split("-")[0];return bg.includes(l)?l:"de"},i=o=>{t.changeLanguage(o).then(()=>{window.location.reload()})};return d.jsx(p3.Provider,{value:{language:a(t.resolvedLanguage||t.language),setLanguage:i},children:e})},EM=()=>{const e=j.useContext(p3);if(!e)throw new Error("useLanguage must be used within a LanguageProvider");return e};var Wt=function(){return Wt=Object.assign||function(t){for(var a,i=1,o=arguments.length;i<o;i++){a=arguments[i];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(t[l]=a[l])}return t},Wt.apply(this,arguments)};function al(e,t,a){if(a||arguments.length===2)for(var i=0,o=t.length,l;i<o;i++)(l||!(i in t))&&(l||(l=Array.prototype.slice.call(t,0,i)),l[i]=t[i]);return e.concat(l||Array.prototype.slice.call(t))}var We="-ms-",$o="-moz-",Pe="-webkit-",h3="comm",Ju="rule",xg="decl",MM="@import",m3="@keyframes",zM="@layer",g3=Math.abs,yg=String.fromCharCode,am=Object.assign;function RM(e,t){return At(e,0)^45?(((t<<2^At(e,0))<<2^At(e,1))<<2^At(e,2))<<2^At(e,3):0}function b3(e){return e.trim()}function Ma(e,t){return(e=t.exec(e))?e[0]:e}function ve(e,t,a){return e.replace(t,a)}function su(e,t,a){return e.indexOf(t,a)}function At(e,t){return e.charCodeAt(t)|0}function is(e,t,a){return e.slice(t,a)}function na(e){return e.length}function x3(e){return e.length}function Ro(e,t){return t.push(e),e}function LM(e,t){return e.map(t).join("")}function Iy(e,t){return e.filter(function(a){return!Ma(a,t)})}var ed=1,rs=1,y3=0,Mn=0,ft=0,bs="";function td(e,t,a,i,o,l,u,p){return{value:e,root:t,parent:a,type:i,props:o,children:l,line:ed,column:rs,length:u,return:"",siblings:p}}function li(e,t){return am(td("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Br(e){for(;e.root;)e=li(e.root,{children:[e]});Ro(e,e.siblings)}function OM(){return ft}function DM(){return ft=Mn>0?At(bs,--Mn):0,rs--,ft===10&&(rs=1,ed--),ft}function Vn(){return ft=Mn<y3?At(bs,Mn++):0,rs++,ft===10&&(rs=1,ed++),ft}function Gi(){return At(bs,Mn)}function ou(){return Mn}function nd(e,t){return is(bs,e,t)}function im(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function PM(e){return ed=rs=1,y3=na(bs=e),Mn=0,[]}function VM(e){return bs="",e}function Wp(e){return b3(nd(Mn-1,rm(e===91?e+2:e===40?e+1:e)))}function NM(e){for(;(ft=Gi())&&ft<33;)Vn();return im(e)>2||im(ft)>3?"":" "}function BM(e,t){for(;--t&&Vn()&&!(ft<48||ft>102||ft>57&&ft<65||ft>70&&ft<97););return nd(e,ou()+(t<6&&Gi()==32&&Vn()==32))}function rm(e){for(;Vn();)switch(ft){case e:return Mn;case 34:case 39:e!==34&&e!==39&&rm(ft);break;case 40:e===41&&rm(e);break;case 92:Vn();break}return Mn}function _M(e,t){for(;Vn()&&e+ft!==57;)if(e+ft===84&&Gi()===47)break;return"/*"+nd(t,Mn-1)+"*"+yg(e===47?e:Vn())}function HM(e){for(;!im(Gi());)Vn();return nd(e,Mn)}function $M(e){return VM(lu("",null,null,null,[""],e=PM(e),0,[0],e))}function lu(e,t,a,i,o,l,u,p,f){for(var m=0,g=0,x=u,y=0,v=0,S=0,k=1,C=1,M=1,z=0,A="",$=o,E=l,V=i,N=A;C;)switch(S=z,z=Vn()){case 40:if(S!=108&&At(N,x-1)==58){su(N+=ve(Wp(z),"&","&\f"),"&\f",g3(m?p[m-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:N+=Wp(z);break;case 9:case 10:case 13:case 32:N+=NM(S);break;case 92:N+=BM(ou()-1,7);continue;case 47:switch(Gi()){case 42:case 47:Ro(UM(_M(Vn(),ou()),t,a,f),f);break;default:N+="/"}break;case 123*k:p[m++]=na(N)*M;case 125*k:case 59:case 0:switch(z){case 0:case 125:C=0;case 59+g:M==-1&&(N=ve(N,/\f/g,"")),v>0&&na(N)-x&&Ro(v>32?qy(N+";",i,a,x-1,f):qy(ve(N," ","")+";",i,a,x-2,f),f);break;case 59:N+=";";default:if(Ro(V=Fy(N,t,a,m,g,o,p,A,$=[],E=[],x,l),l),z===123)if(g===0)lu(N,t,V,V,$,l,x,p,E);else switch(y===99&&At(N,3)===110?100:y){case 100:case 108:case 109:case 115:lu(e,V,V,i&&Ro(Fy(e,V,V,0,0,o,p,A,o,$=[],x,E),E),o,E,x,p,i?$:E);break;default:lu(N,V,V,V,[""],E,0,p,E)}}m=g=v=0,k=M=1,A=N="",x=u;break;case 58:x=1+na(N),v=S;default:if(k<1){if(z==123)--k;else if(z==125&&k++==0&&DM()==125)continue}switch(N+=yg(z),z*k){case 38:M=g>0?1:(N+="\f",-1);break;case 44:p[m++]=(na(N)-1)*M,M=1;break;case 64:Gi()===45&&(N+=Wp(Vn())),y=Gi(),g=x=na(A=N+=HM(ou())),z++;break;case 45:S===45&&na(N)==2&&(k=0)}}return l}function Fy(e,t,a,i,o,l,u,p,f,m,g,x){for(var y=o-1,v=o===0?l:[""],S=x3(v),k=0,C=0,M=0;k<i;++k)for(var z=0,A=is(e,y+1,y=g3(C=u[k])),$=e;z<S;++z)($=b3(C>0?v[z]+" "+A:ve(A,/&\f/g,v[z])))&&(f[M++]=$);return td(e,t,a,o===0?Ju:p,f,m,g,x)}function UM(e,t,a,i){return td(e,t,a,h3,yg(OM()),is(e,2,-2),0,i)}function qy(e,t,a,i,o){return td(e,t,a,xg,is(e,0,i),is(e,i+1,-1),i,o)}function v3(e,t,a){switch(RM(e,t)){case 5103:return Pe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Pe+e+e;case 4789:return $o+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Pe+e+$o+e+We+e+e;case 5936:switch(At(e,t+11)){case 114:return Pe+e+We+ve(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Pe+e+We+ve(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Pe+e+We+ve(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Pe+e+We+e+e;case 6165:return Pe+e+We+"flex-"+e+e;case 5187:return Pe+e+ve(e,/(\w+).+(:[^]+)/,Pe+"box-$1$2"+We+"flex-$1$2")+e;case 5443:return Pe+e+We+"flex-item-"+ve(e,/flex-|-self/g,"")+(Ma(e,/flex-|baseline/)?"":We+"grid-row-"+ve(e,/flex-|-self/g,""))+e;case 4675:return Pe+e+We+"flex-line-pack"+ve(e,/align-content|flex-|-self/g,"")+e;case 5548:return Pe+e+We+ve(e,"shrink","negative")+e;case 5292:return Pe+e+We+ve(e,"basis","preferred-size")+e;case 6060:return Pe+"box-"+ve(e,"-grow","")+Pe+e+We+ve(e,"grow","positive")+e;case 4554:return Pe+ve(e,/([^-])(transform)/g,"$1"+Pe+"$2")+e;case 6187:return ve(ve(ve(e,/(zoom-|grab)/,Pe+"$1"),/(image-set)/,Pe+"$1"),e,"")+e;case 5495:case 3959:return ve(e,/(image-set\([^]*)/,Pe+"$1$`$1");case 4968:return ve(ve(e,/(.+:)(flex-)?(.*)/,Pe+"box-pack:$3"+We+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Pe+e+e;case 4200:if(!Ma(e,/flex-|baseline/))return We+"grid-column-align"+is(e,t)+e;break;case 2592:case 3360:return We+ve(e,"template-","")+e;case 4384:case 3616:return a&&a.some(function(i,o){return t=o,Ma(i.props,/grid-\w+-end/)})?~su(e+(a=a[t].value),"span",0)?e:We+ve(e,"-start","")+e+We+"grid-row-span:"+(~su(a,"span",0)?Ma(a,/\d+/):+Ma(a,/\d+/)-+Ma(e,/\d+/))+";":We+ve(e,"-start","")+e;case 4896:case 4128:return a&&a.some(function(i){return Ma(i.props,/grid-\w+-start/)})?e:We+ve(ve(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ve(e,/(.+)-inline(.+)/,Pe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(na(e)-1-t>6)switch(At(e,t+1)){case 109:if(At(e,t+4)!==45)break;case 102:return ve(e,/(.+:)(.+)-([^]+)/,"$1"+Pe+"$2-$3$1"+$o+(At(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~su(e,"stretch",0)?v3(ve(e,"stretch","fill-available"),t,a)+e:e}break;case 5152:case 5920:return ve(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,o,l,u,p,f,m){return We+o+":"+l+m+(u?We+o+"-span:"+(p?f:+f-+l)+m:"")+e});case 4949:if(At(e,t+6)===121)return ve(e,":",":"+Pe)+e;break;case 6444:switch(At(e,At(e,14)===45?18:11)){case 120:return ve(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Pe+(At(e,14)===45?"inline-":"")+"box$3$1"+Pe+"$2$3$1"+We+"$2box$3")+e;case 100:return ve(e,":",":"+We)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ve(e,"scroll-","scroll-snap-")+e}return e}function zu(e,t){for(var a="",i=0;i<e.length;i++)a+=t(e[i],i,e,t)||"";return a}function GM(e,t,a,i){switch(e.type){case zM:if(e.children.length)break;case MM:case xg:return e.return=e.return||e.value;case h3:return"";case m3:return e.return=e.value+"{"+zu(e.children,i)+"}";case Ju:if(!na(e.value=e.props.join(",")))return""}return na(a=zu(e.children,i))?e.return=e.value+"{"+a+"}":""}function IM(e){var t=x3(e);return function(a,i,o,l){for(var u="",p=0;p<t;p++)u+=e[p](a,i,o,l)||"";return u}}function FM(e){return function(t){t.root||(t=t.return)&&e(t)}}function qM(e,t,a,i){if(e.length>-1&&!e.return)switch(e.type){case xg:e.return=v3(e.value,e.length,a);return;case m3:return zu([li(e,{value:ve(e.value,"@","@"+Pe)})],i);case Ju:if(e.length)return LM(a=e.props,function(o){switch(Ma(o,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Br(li(e,{props:[ve(o,/:(read-\w+)/,":"+$o+"$1")]})),Br(li(e,{props:[o]})),am(e,{props:Iy(a,i)});break;case"::placeholder":Br(li(e,{props:[ve(o,/:(plac\w+)/,":"+Pe+"input-$1")]})),Br(li(e,{props:[ve(o,/:(plac\w+)/,":"+$o+"$1")]})),Br(li(e,{props:[ve(o,/:(plac\w+)/,We+"input-$1")]})),Br(li(e,{props:[o]})),am(e,{props:Iy(a,i)});break}return""})}}var KM={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dn={},ss=typeof process<"u"&&dn!==void 0&&(dn.REACT_APP_SC_ATTR||dn.SC_ATTR)||"data-styled",w3="active",S3="data-styled-version",ad="6.1.19",vg=`/*!sc*/
`,Ru=typeof window<"u"&&typeof document<"u",YM=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&dn!==void 0&&dn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&dn.REACT_APP_SC_DISABLE_SPEEDY!==""?dn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&dn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&dn!==void 0&&dn.SC_DISABLE_SPEEDY!==void 0&&dn.SC_DISABLE_SPEEDY!==""&&dn.SC_DISABLE_SPEEDY!=="false"&&dn.SC_DISABLE_SPEEDY),id=Object.freeze([]),os=Object.freeze({});function XM(e,t,a){return a===void 0&&(a=os),e.theme!==a.theme&&e.theme||t||a.theme}var k3=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),WM=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,QM=/(^-|-$)/g;function Ky(e){return e.replace(WM,"-").replace(QM,"")}var ZM=/(a)(d)/gi,Bc=52,Yy=function(e){return String.fromCharCode(e+(e>25?39:97))};function sm(e){var t,a="";for(t=Math.abs(e);t>Bc;t=t/Bc|0)a=Yy(t%Bc)+a;return(Yy(t%Bc)+a).replace(ZM,"$1-$2")}var Qp,T3=5381,Yr=function(e,t){for(var a=t.length;a;)e=33*e^t.charCodeAt(--a);return e},j3=function(e){return Yr(T3,e)};function A3(e){return sm(j3(e)>>>0)}function JM(e){return e.displayName||e.name||"Component"}function Zp(e){return typeof e=="string"&&!0}var C3=typeof Symbol=="function"&&Symbol.for,E3=C3?Symbol.for("react.memo"):60115,ez=C3?Symbol.for("react.forward_ref"):60112,tz={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},nz={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},M3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},az=((Qp={})[ez]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qp[E3]=M3,Qp);function Xy(e){return("type"in(t=e)&&t.type.$$typeof)===E3?M3:"$$typeof"in e?az[e.$$typeof]:tz;var t}var iz=Object.defineProperty,rz=Object.getOwnPropertyNames,Wy=Object.getOwnPropertySymbols,sz=Object.getOwnPropertyDescriptor,oz=Object.getPrototypeOf,Qy=Object.prototype;function z3(e,t,a){if(typeof t!="string"){if(Qy){var i=oz(t);i&&i!==Qy&&z3(e,i,a)}var o=rz(t);Wy&&(o=o.concat(Wy(t)));for(var l=Xy(e),u=Xy(t),p=0;p<o.length;++p){var f=o[p];if(!(f in nz||a&&a[f]||u&&f in u||l&&f in l)){var m=sz(t,f);try{iz(e,f,m)}catch{}}}}return e}function ls(e){return typeof e=="function"}function wg(e){return typeof e=="object"&&"styledComponentId"in e}function _i(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function om(e,t){if(e.length===0)return"";for(var a=e[0],i=1;i<e.length;i++)a+=e[i];return a}function il(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function lm(e,t,a){if(a===void 0&&(a=!1),!a&&!il(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=lm(e[i],t[i]);else if(il(t))for(var i in t)e[i]=lm(e[i],t[i]);return e}function Sg(e,t){Object.defineProperty(e,"toString",{value:t})}function hl(e){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var lz=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var a=0,i=0;i<t;i++)a+=this.groupSizes[i];return a},e.prototype.insertRules=function(t,a){if(t>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;t>=l;)if((l<<=1)<0)throw hl(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var u=o;u<l;u++)this.groupSizes[u]=0}for(var p=this.indexOfGroup(t+1),f=(u=0,a.length);u<f;u++)this.tag.insertRule(p,a[u])&&(this.groupSizes[t]++,p++)},e.prototype.clearGroup=function(t){if(t<this.length){var a=this.groupSizes[t],i=this.indexOfGroup(t),o=i+a;this.groupSizes[t]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(t){var a="";if(t>=this.length||this.groupSizes[t]===0)return a;for(var i=this.groupSizes[t],o=this.indexOfGroup(t),l=o+i,u=o;u<l;u++)a+="".concat(this.tag.getRule(u)).concat(vg);return a},e}(),cu=new Map,Lu=new Map,uu=1,_c=function(e){if(cu.has(e))return cu.get(e);for(;Lu.has(uu);)uu++;var t=uu++;return cu.set(e,t),Lu.set(t,e),t},cz=function(e,t){uu=t+1,cu.set(e,t),Lu.set(t,e)},uz="style[".concat(ss,"][").concat(S3,'="').concat(ad,'"]'),dz=new RegExp("^".concat(ss,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),fz=function(e,t,a){for(var i,o=a.split(","),l=0,u=o.length;l<u;l++)(i=o[l])&&e.registerName(t,i)},pz=function(e,t){for(var a,i=((a=t.textContent)!==null&&a!==void 0?a:"").split(vg),o=[],l=0,u=i.length;l<u;l++){var p=i[l].trim();if(p){var f=p.match(dz);if(f){var m=0|parseInt(f[1],10),g=f[2];m!==0&&(cz(g,m),fz(e,g,f[3]),e.getTag().insertRules(m,o)),o.length=0}else o.push(p)}}},Zy=function(e){for(var t=document.querySelectorAll(uz),a=0,i=t.length;a<i;a++){var o=t[a];o&&o.getAttribute(ss)!==w3&&(pz(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function hz(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var R3=function(e){var t=document.head,a=e||t,i=document.createElement("style"),o=function(p){var f=Array.from(p.querySelectorAll("style[".concat(ss,"]")));return f[f.length-1]}(a),l=o!==void 0?o.nextSibling:null;i.setAttribute(ss,w3),i.setAttribute(S3,ad);var u=hz();return u&&i.setAttribute("nonce",u),a.insertBefore(i,l),i},mz=function(){function e(t){this.element=R3(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var i=document.styleSheets,o=0,l=i.length;o<l;o++){var u=i[o];if(u.ownerNode===a)return u}throw hl(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,a){try{return this.sheet.insertRule(a,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var a=this.sheet.cssRules[t];return a&&a.cssText?a.cssText:""},e}(),gz=function(){function e(t){this.element=R3(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,a){if(t<=this.length&&t>=0){var i=document.createTextNode(a);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),bz=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,a){return t<=this.length&&(this.rules.splice(t,0,a),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Jy=Ru,xz={isServer:!Ru,useCSSOMInjection:!YM},L3=function(){function e(t,a,i){t===void 0&&(t=os),a===void 0&&(a={});var o=this;this.options=Wt(Wt({},xz),t),this.gs=a,this.names=new Map(i),this.server=!!t.isServer,!this.server&&Ru&&Jy&&(Jy=!1,Zy(this)),Sg(this,function(){return function(l){for(var u=l.getTag(),p=u.length,f="",m=function(x){var y=function(M){return Lu.get(M)}(x);if(y===void 0)return"continue";var v=l.names.get(y),S=u.getGroup(x);if(v===void 0||!v.size||S.length===0)return"continue";var k="".concat(ss,".g").concat(x,'[id="').concat(y,'"]'),C="";v!==void 0&&v.forEach(function(M){M.length>0&&(C+="".concat(M,","))}),f+="".concat(S).concat(k,'{content:"').concat(C,'"}').concat(vg)},g=0;g<p;g++)m(g);return f}(o)})}return e.registerId=function(t){return _c(t)},e.prototype.rehydrate=function(){!this.server&&Ru&&Zy(this)},e.prototype.reconstructWithOptions=function(t,a){return a===void 0&&(a=!0),new e(Wt(Wt({},this.options),t),this.gs,a&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(a){var i=a.useCSSOMInjection,o=a.target;return a.isServer?new bz(o):i?new mz(o):new gz(o)}(this.options),new lz(t)));var t},e.prototype.hasNameForId=function(t,a){return this.names.has(t)&&this.names.get(t).has(a)},e.prototype.registerName=function(t,a){if(_c(t),this.names.has(t))this.names.get(t).add(a);else{var i=new Set;i.add(a),this.names.set(t,i)}},e.prototype.insertRules=function(t,a,i){this.registerName(t,a),this.getTag().insertRules(_c(t),i)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(_c(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),yz=/&/g,vz=/^\s*\/\/.*$/gm;function O3(e,t){return e.map(function(a){return a.type==="rule"&&(a.value="".concat(t," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(t," ")),a.props=a.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=O3(a.children,t)),a})}function wz(e){var t,a,i,o=os,l=o.options,u=l===void 0?os:l,p=o.plugins,f=p===void 0?id:p,m=function(y,v,S){return S.startsWith(a)&&S.endsWith(a)&&S.replaceAll(a,"").length>0?".".concat(t):y},g=f.slice();g.push(function(y){y.type===Ju&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(yz,a).replace(i,m))}),u.prefix&&g.push(qM),g.push(GM);var x=function(y,v,S,k){v===void 0&&(v=""),S===void 0&&(S=""),k===void 0&&(k="&"),t=k,a=v,i=new RegExp("\\".concat(a,"\\b"),"g");var C=y.replace(vz,""),M=$M(S||v?"".concat(S," ").concat(v," { ").concat(C," }"):C);u.namespace&&(M=O3(M,u.namespace));var z=[];return zu(M,IM(g.concat(FM(function(A){return z.push(A)})))),z};return x.hash=f.length?f.reduce(function(y,v){return v.name||hl(15),Yr(y,v.name)},T3).toString():"",x}var Sz=new L3,cm=wz(),D3=Ce.createContext({shouldForwardProp:void 0,styleSheet:Sz,stylis:cm});D3.Consumer;Ce.createContext(void 0);function ev(){return j.useContext(D3)}var P3=function(){function e(t,a){var i=this;this.inject=function(o,l){l===void 0&&(l=cm);var u=i.name+l.hash;o.hasNameForId(i.id,u)||o.insertRules(i.id,u,l(i.rules,u,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=a,Sg(this,function(){throw hl(12,String(i.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=cm),this.name+t.hash},e}(),kz=function(e){return e>="A"&&e<="Z"};function tv(e){for(var t="",a=0;a<e.length;a++){var i=e[a];if(a===1&&i==="-"&&e[0]==="-")return e;kz(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var V3=function(e){return e==null||e===!1||e===""},N3=function(e){var t,a,i=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!V3(l)&&(Array.isArray(l)&&l.isCss||ls(l)?i.push("".concat(tv(o),":"),l,";"):il(l)?i.push.apply(i,al(al(["".concat(o," {")],N3(l),!1),["}"],!1)):i.push("".concat(tv(o),": ").concat((t=o,(a=l)==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||t in KM||t.startsWith("--")?String(a).trim():"".concat(a,"px")),";")))}return i};function Ii(e,t,a,i){if(V3(e))return[];if(wg(e))return[".".concat(e.styledComponentId)];if(ls(e)){if(!ls(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var o=e(t);return Ii(o,t,a,i)}var l;return e instanceof P3?a?(e.inject(a,i),[e.getName(i)]):[e]:il(e)?N3(e):Array.isArray(e)?Array.prototype.concat.apply(id,e.map(function(u){return Ii(u,t,a,i)})):[e.toString()]}function Tz(e){for(var t=0;t<e.length;t+=1){var a=e[t];if(ls(a)&&!wg(a))return!1}return!0}var jz=j3(ad),Az=function(){function e(t,a,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&Tz(t),this.componentId=a,this.baseHash=Yr(jz,a),this.baseStyle=i,L3.registerId(a)}return e.prototype.generateAndInjectStyles=function(t,a,i){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,a,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))o=_i(o,this.staticRulesId);else{var l=om(Ii(this.rules,t,a,i)),u=sm(Yr(this.baseHash,l)>>>0);if(!a.hasNameForId(this.componentId,u)){var p=i(l,".".concat(u),void 0,this.componentId);a.insertRules(this.componentId,u,p)}o=_i(o,u),this.staticRulesId=u}else{for(var f=Yr(this.baseHash,i.hash),m="",g=0;g<this.rules.length;g++){var x=this.rules[g];if(typeof x=="string")m+=x;else if(x){var y=om(Ii(x,t,a,i));f=Yr(f,y+g),m+=y}}if(m){var v=sm(f>>>0);a.hasNameForId(this.componentId,v)||a.insertRules(this.componentId,v,i(m,".".concat(v),void 0,this.componentId)),o=_i(o,v)}}return o},e}(),B3=Ce.createContext(void 0);B3.Consumer;var Jp={};function Cz(e,t,a){var i=wg(e),o=e,l=!Zp(e),u=t.attrs,p=u===void 0?id:u,f=t.componentId,m=f===void 0?function($,E){var V=typeof $!="string"?"sc":Ky($);Jp[V]=(Jp[V]||0)+1;var N="".concat(V,"-").concat(A3(ad+V+Jp[V]));return E?"".concat(E,"-").concat(N):N}(t.displayName,t.parentComponentId):f,g=t.displayName,x=g===void 0?function($){return Zp($)?"styled.".concat($):"Styled(".concat(JM($),")")}(e):g,y=t.displayName&&t.componentId?"".concat(Ky(t.displayName),"-").concat(t.componentId):t.componentId||m,v=i&&o.attrs?o.attrs.concat(p).filter(Boolean):p,S=t.shouldForwardProp;if(i&&o.shouldForwardProp){var k=o.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;S=function($,E){return k($,E)&&C($,E)}}else S=k}var M=new Az(a,y,i?o.componentStyle:void 0);function z($,E){return function(V,N,O){var X=V.attrs,J=V.componentStyle,H=V.defaultProps,te=V.foldedComponentIds,ce=V.styledComponentId,le=V.target,oe=Ce.useContext(B3),D=ev(),B=V.shouldForwardProp||D.shouldForwardProp,G=XM(N,oe,H)||os,Z=function(xe,de,bt){for(var Oe,Lt=Wt(Wt({},de),{className:void 0,theme:bt}),hi=0;hi<xe.length;hi+=1){var da=ls(Oe=xe[hi])?Oe(Lt):Oe;for(var bn in da)Lt[bn]=bn==="className"?_i(Lt[bn],da[bn]):bn==="style"?Wt(Wt({},Lt[bn]),da[bn]):da[bn]}return de.className&&(Lt.className=_i(Lt.className,de.className)),Lt}(X,N,G),L=Z.as||le,Y={};for(var ne in Z)Z[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&Z.theme===G||(ne==="forwardedAs"?Y.as=Z.forwardedAs:B&&!B(ne,L)||(Y[ne]=Z[ne]));var ae=function(xe,de){var bt=ev(),Oe=xe.generateAndInjectStyles(de,bt.styleSheet,bt.stylis);return Oe}(J,Z),se=_i(te,ce);return ae&&(se+=" "+ae),Z.className&&(se+=" "+Z.className),Y[Zp(L)&&!k3.has(L)?"class":"className"]=se,O&&(Y.ref=O),j.createElement(L,Y)}(A,$,E)}z.displayName=x;var A=Ce.forwardRef(z);return A.attrs=v,A.componentStyle=M,A.displayName=x,A.shouldForwardProp=S,A.foldedComponentIds=i?_i(o.foldedComponentIds,o.styledComponentId):"",A.styledComponentId=y,A.target=i?o.target:e,Object.defineProperty(A,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=i?function(E){for(var V=[],N=1;N<arguments.length;N++)V[N-1]=arguments[N];for(var O=0,X=V;O<X.length;O++)lm(E,X[O],!0);return E}({},o.defaultProps,$):$}}),Sg(A,function(){return".".concat(A.styledComponentId)}),l&&z3(A,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),A}function nv(e,t){for(var a=[e[0]],i=0,o=t.length;i<o;i+=1)a.push(t[i],e[i+1]);return a}var av=function(e){return Object.assign(e,{isCss:!0})};function rd(e){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];if(ls(e)||il(e))return av(Ii(nv(id,al([e],t,!0))));var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Ii(i):av(Ii(nv(i,t)))}function um(e,t,a){if(a===void 0&&(a=os),!t)throw hl(1,t);var i=function(o){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return e(t,a,rd.apply(void 0,al([o],l,!1)))};return i.attrs=function(o){return um(e,t,Wt(Wt({},a),{attrs:Array.prototype.concat(a.attrs,o).filter(Boolean)}))},i.withConfig=function(o){return um(e,t,Wt(Wt({},a),o))},i}var _3=function(e){return um(Cz,e)},R=_3;k3.forEach(function(e){R[e]=_3(e)});function qe(e){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];var i=om(rd.apply(void 0,al([e],t,!1))),o=A3(i);return new P3(o,i)}const Ez=R.div`
  display: inline-flex;
  align-items: center;

  @media (min-width: 1024px) {
    display: none;
  }
`,Mz=R.button`
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
`,eh=R(ie.span)`
  width: 22px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  display: block;
`,zz=R(ie.div)`
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
`,Rz=R.div`
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
`,Lz=R.span`
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
`,Oz=R.button`
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
`,_r=R(la)`
  color: #fff;
  text-decoration: none;
  font-size: clamp(30px, 8vw, 48px);
  font-weight: 700;
  line-height: 1.06;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 6px 0;
`,ko=R.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.16);
  margin: 2px 0 6px;
`,Dz=qe`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Pz=qe`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Vz=R.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${({$menuOpen:e})=>e?2e3:120};
  backdrop-filter: blur(10px);
  background: rgba(7, 9, 16, 0.78);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,Nz=R.div`
  width: 100%;
  max-width: 1560px;
  margin: 0 auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
`,Bz=R.div`
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
`,_z=R(la)`
  display: inline-flex;
  align-items: center;
  line-height: 0;
  text-decoration: none;
`,Hz=R.span`
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
  animation: ${Dz} 4.8s ease-in-out infinite;
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
`,$z=R.nav`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: 1023px) {
    display: none;
  }
`,To=R(la)`
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
`,Uz=R.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
  position: relative;
  z-index: 1200;
`,Gz=R(la)`
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
    animation: ${Pz} 2.2s linear infinite;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`,Iz=R.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`,Fz=R.button`
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
`,qz=R.div`
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
`,Kz=R.button`
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
`,Yz={open:{rotate:45,y:8},closed:{rotate:0,y:0}},Xz={open:{opacity:0},closed:{opacity:1}},Wz={open:{rotate:-45,y:-8},closed:{rotate:0,y:0}},Qz={open:{opacity:1},closed:{opacity:0}},Zz={de:"Deutsch",uk:"Українська",tr:"Türkçe",ar:"العربية",pl:"Polski",ku:"Kurmancî",fa:"فارسی",it:"Italiano",es:"Español",el:"Ελληνικά",ro:"Română",bg:"Български"},rv={de:"DE",uk:"UA",tr:"TR",ar:"SA",pl:"PL",ku:"KU",fa:"IR",it:"IT",es:"ES",el:"GR",ro:"RO",bg:"BG"},Jz=()=>{const[e,t]=j.useState(!1),[a,i]=j.useState(!1),{language:o,setLanguage:l}=EM(),{t:u}=Ge(),p=j.useRef(null);j.useEffect(()=>{const g=x=>{p.current&&(p.current.contains(x.target)||i(!1))};return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[]),j.useEffect(()=>(e?(document.body.classList.add("modal-open"),i(!1)):document.body.classList.remove("modal-open"),()=>document.body.classList.remove("modal-open")),[e]);const f=()=>t(!1),m=g=>{l(g),i(!1)};return d.jsxs(Vz,{$menuOpen:e,children:[d.jsx(Nz,{children:d.jsxs(Bz,{children:[d.jsx(_z,{to:"/",onClick:f,children:d.jsx(ie.div,{initial:{opacity:0,y:-12,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.82,ease:qu},children:d.jsx(Hz,{children:"<VS/>"})})}),d.jsxs($z,{children:[d.jsxs(To,{to:"/services",children:[d.jsx(gy,{})," ",u("header.services")]}),d.jsxs(To,{to:"/preise",children:[d.jsx(Su,{})," ",u("header.preise")]}),d.jsxs(To,{to:"/referenzen",children:[d.jsx(by,{})," ",u("header.referenzen")]}),d.jsxs(To,{to:"/ueber-uns",children:[d.jsx(xy,{})," ",u("header.ueberUns")]}),d.jsxs(To,{to:"/kontakt",children:[d.jsx(ui,{})," ",u("header.kontakt")]})]}),d.jsxs(Uz,{children:[d.jsxs(Gz,{to:"/kontakt",children:[d.jsx(_n,{})," ",u("common.projectRequest")]}),e?null:d.jsxs(Iz,{ref:p,children:[d.jsx(Fz,{type:"button","aria-expanded":a,"aria-label":"Language switcher",onClick:()=>i(g=>!g),children:d.jsx(iv,{children:rv[o]})}),a?d.jsx(qz,{children:bg.map(g=>d.jsxs(Kz,{type:"button",$active:o===g,onClick:()=>m(g),children:[d.jsx(iv,{children:rv[g]}),d.jsx("span",{children:Zz[g]})]},g))}):null]}),d.jsx(Ez,{children:d.jsxs(Mz,{onClick:()=>t(g=>!g),"aria-label":e?"Close menu":"Open menu",children:[d.jsx(eh,{animate:e?"open":"closed",variants:Yz}),d.jsx(eh,{animate:e?"open":"closed",variants:Xz}),d.jsx(eh,{animate:e?"open":"closed",variants:Wz})]})})]})]})}),typeof document<"u"?Pk.createPortal(d.jsx(a4,{children:e?d.jsxs(zz,{initial:"closed",animate:"open",exit:"closed",variants:Qz,transition:{duration:.28,ease:Gm},children:[d.jsxs(Rz,{children:[d.jsx(Lz,{children:"<VS/>"}),d.jsx(Oz,{type:"button","aria-label":"Close menu",onClick:f,children:d.jsx(cE,{})})]}),d.jsxs(_r,{to:"/services",onClick:f,children:[d.jsx(gy,{})," ",u("header.services")]}),d.jsx(ko,{}),d.jsxs(_r,{to:"/preise",onClick:f,children:[d.jsx(Su,{})," ",u("header.preise")]}),d.jsx(ko,{}),d.jsxs(_r,{to:"/referenzen",onClick:f,children:[d.jsx(by,{})," ",u("header.referenzen")]}),d.jsx(ko,{}),d.jsxs(_r,{to:"/ueber-uns",onClick:f,children:[d.jsx(xy,{})," ",u("header.ueberUns")]}),d.jsx(ko,{}),d.jsxs(_r,{to:"/kontakt",onClick:f,children:[d.jsx(ui,{})," ",u("header.kontakt")]}),d.jsx(ko,{}),d.jsxs(_r,{to:"/kontakt",onClick:f,children:[d.jsx(_n,{})," ",u("common.projectRequest")]})]}):null}),document.body):null]})},eR=R.footer`
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding: 30px 0 44px;
  background: rgba(8, 10, 18, 0.9);
`,tR=R.div`
  width: 100%;
  max-width: 1560px;
  margin: 0 auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
`,nR=R.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,aR=R.div`
  p {
    margin: 0;
  }
`,iR=R.p`
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
`,rR=R.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 14px;
`,H3=`
  color: rgba(255, 255, 255, 0.84);
  text-decoration: none;
  transition: transform var(--dur-fast) var(--ease-smooth), color var(--dur-fast) var(--ease-smooth);

  &:hover,
  &:focus-visible {
    color: #ffd08a;
    transform: translateY(-1px);
  }
`,jo=R(la)`
  ${H3}
`,sR=R.button`
  ${H3}
  border: 0;
  background: transparent;
  padding: 0;
  font: inherit;
  cursor: pointer;
`,oR=e=>/[\u00C3\u00C2\uFFFD]/.test(e),Di=(e,t)=>oR(e)?t:e,lR=()=>{const{t:e}=Ge(),t=()=>{window.dispatchEvent(new Event("open-cookie-settings"))};return d.jsx(eR,{children:d.jsx(tR,{children:d.jsxs(nR,{children:[d.jsxs(aR,{children:[d.jsx("p",{children:Di(e("footer.tagline"),"VS Studio - Websites, Web-Apps, Ads & Automationen")}),d.jsxs(iR,{children:[d.jsx("a",{href:"mailto:anfrage@vs-web-studio.de",children:"anfrage@vs-web-studio.de"})," | ",d.jsx("a",{href:"tel:+4915164392053",children:"+49 1516 4392053"})]})]}),d.jsxs(rR,{children:[d.jsx(jo,{to:"/impressum",children:Di(e("footer.impressum"),"Impressum")}),d.jsx(jo,{to:"/datenschutz",children:Di(e("footer.datenschutz"),"Datenschutz")}),d.jsx(jo,{to:"/agb",children:Di(e("footer.agb"),"AGB")}),d.jsx(jo,{to:"/cookies",children:Di(e("footer.cookies"),"Cookies")}),d.jsx(sR,{type:"button",onClick:t,children:Di(e("footer.cookieSettings"),"Cookie-Einstellungen")}),d.jsx(jo,{to:"/blog",children:Di(e("footer.blog"),"Blog")})]})]})})})},th="cookie_consent_v2",cR=()=>{const{t:e}=Ge(),[t,a]=j.useState(!1),[i,o]=j.useState(!1),[l,u]=j.useState(!1),[p,f]=j.useState(!1),[m,g]=j.useState(!1);j.useEffect(()=>{const v=window.localStorage.getItem(th);if(v)try{const S=JSON.parse(v);f(!!S.statistics),g(!!S.marketing)}catch{}o(!v),a(!0)},[]),j.useEffect(()=>{const v=()=>{const S=window.localStorage.getItem(th);if(S)try{const k=JSON.parse(S);f(!!k.statistics),g(!!k.marketing)}catch{}o(!0),u(!0)};return window.addEventListener("open-cookie-settings",v),()=>window.removeEventListener("open-cookie-settings",v)},[]);const x=j.useMemo(()=>({essential:!0,statistics:p,marketing:m}),[p,m]),y=v=>{window.localStorage.setItem(th,JSON.stringify(v)),o(!1),u(!1)};return!t||!i?null:d.jsxs(d.Fragment,{children:[d.jsxs(ie.div,{className:"cookie-banner",initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.5},role:"dialog","aria-live":"polite","aria-label":e("cookie.aria"),children:[d.jsxs("div",{className:"cookie-text",children:[e("cookie.bannerText")," ",d.jsx("a",{href:"/datenschutz",children:e("footer.datenschutz")}),","," ",d.jsx("a",{href:"/cookies",children:e("footer.cookies")}),","," ",d.jsx("a",{href:"/impressum",children:e("footer.impressum")}),"."]}),d.jsxs("div",{className:"cookie-actions",children:[d.jsx("button",{className:"btn btn-secondary cookie-btn",onClick:()=>y({essential:!0,statistics:!1,marketing:!1}),children:e("cookie.onlyEssential")}),d.jsx("button",{className:"btn btn-secondary cookie-btn",onClick:()=>u(!0),children:e("cookie.settings")}),d.jsx("button",{className:"btn btn-primary cookie-btn",onClick:()=>y({essential:!0,statistics:!0,marketing:!0}),children:e("cookie.acceptAll")})]})]}),l?d.jsx(ie.div,{className:"cookie-modal-backdrop",initial:{opacity:0},animate:{opacity:1},children:d.jsxs(ie.div,{className:"cookie-modal",initial:{opacity:0,y:16},animate:{opacity:1,y:0},children:[d.jsx("h3",{children:e("cookie.modalTitle")}),d.jsx("p",{className:"muted",children:e("cookie.modalText")}),d.jsxs("label",{className:"cookie-option",children:[d.jsx("input",{type:"checkbox",checked:!0,disabled:!0}),d.jsx("span",{children:e("cookie.essential")})]}),d.jsxs("label",{className:"cookie-option",children:[d.jsx("input",{type:"checkbox",checked:p,onChange:v=>f(v.target.checked)}),d.jsx("span",{children:e("cookie.statistics")})]}),d.jsxs("label",{className:"cookie-option",children:[d.jsx("input",{type:"checkbox",checked:m,onChange:v=>g(v.target.checked)}),d.jsx("span",{children:e("cookie.marketing")})]}),d.jsxs("div",{className:"cookie-actions",children:[d.jsx("button",{className:"btn btn-secondary cookie-btn",onClick:()=>u(!1),children:e("common.cancel")}),d.jsx("button",{className:"btn btn-primary cookie-btn",onClick:()=>y(x),children:e("cookie.saveSelection")})]})]})}):null]})},uR={baseUrl:"https://vs-web-studio.de",siteName:"VS Web Studio",defaultImage:"https://vs-web-studio.de/og.png",defaultImageAlt:"VS Web Studio - Websites, SEO und Lead-Systeme",locale:"de_DE",language:"de",themeColor:"#0B0B0F",telephone:"+49 1516 4392053",email:"anfrage@vs-web-studio.de",priceRange:"EUR",address:{streetAddress:"Ehrlicherstr. 52",addressLocality:"Hildesheim",postalCode:"31135",addressCountry:"DE"},geo:{latitude:"52.154778",longitude:"9.957965"}},dR=[{question:"Wie schnell koennen Sie starten?",answer:"In der Regel starten wir innerhalb von drei bis fuenf Werktagen. Nach der Anfrage erhalten Sie einen klaren Startplan mit den ersten Schritten."},{question:"Was wird am Anfang benoetigt?",answer:"Fuer den Start reichen Basisinfos zu Angebot, Zielgruppe und Kontaktwegen. Struktur, Texte und Prioritaeten erarbeiten wir gemeinsam."},{question:"Wie laeuft die Zusammenarbeit ab?",answer:"Wir arbeiten in klaren Etappen: Konzept, Design, Entwicklung, Launch und Optimierung. Sie erhalten waehrend des gesamten Projekts transparente Updates."},{question:"Ist das Angebot fuer kleine Unternehmen geeignet?",answer:"Ja. Die Pakete sind bewusst fuer lokale Unternehmen aufgebaut und fokussieren Anfragen, klare Preise und eine schnelle Umsetzung."},{question:"Was passiert nach dem Launch?",answer:"Nach dem Launch pruefen wir Tracking, Conversion-Punkte und Ladezeit und erstellen einen konkreten Verbesserungsplan fuer die naechsten 30 Tage."}],fR=[{name:"Starter",price:"ab EUR 690",description:"Landingpage mit Lead-Formular, Tracking und SEO-Basis fuer kleine lokale Unternehmen."},{name:"Business",price:"ab EUR 1.290",description:"Mehrseitige Website mit CRM-Integration, Tracking und Conversion-Fokus."},{name:"Pro",price:"ab EUR 2.490",description:"Growth-Setup mit Website, Ads, Marketing-Dashboard und Automationen."}],pR=[{path:"/",name:"Startseite",title:"VS Web Studio | Websites, SEO und Lead-Systeme fuer Deutschland",description:"VS Web Studio entwickelt schnelle Websites, Landingpages und Lead-Systeme fuer lokale Unternehmen in Deutschland. SEO, Performance, Tracking und Conversion aus einer Hand.",keywords:"webagentur deutschland, webdesign hildesheim, seo agentur niedersachsen, landingpage agentur, lead system fuer lokale unternehmen, performance website",pageKind:"home",changeFrequency:"weekly",priority:1,indexable:!0,sitemap:!0,breadcrumb:["Startseite"]},{path:"/services",name:"Leistungen",title:"Leistungen | Website, SEO, Tracking, Ads und Automationen",description:"Website-Entwicklung, SEO-Basis, Tracking, Social Ads, KI-Automationen und Lead-Systeme fuer lokale Unternehmen in Deutschland.",keywords:"website entwicklung deutschland, seo basis, tracking setup, social ads agentur, ki automation, lead funnel",pageKind:"services",changeFrequency:"weekly",priority:.95,indexable:!0,sitemap:!0,breadcrumb:["Startseite","Leistungen"]},{path:"/preise",name:"Preise",title:"Preise | Website- und Lead-Systeme ab EUR 690",description:"Transparente Preise fuer Landingpages, mehrseitige Websites und Lead-Systeme inklusive SEO-Basis, Tracking und Support fuer lokale Unternehmen.",keywords:"website preise deutschland, landingpage ab 690, webagentur preise, lead system kosten, seo paket",pageKind:"pricing",changeFrequency:"weekly",priority:.92,indexable:!0,sitemap:!0,breadcrumb:["Startseite","Preise"]},{path:"/referenzen",name:"Referenzen",title:"Referenzen | Messbare Ergebnisse fuer lokale Unternehmen",description:"Ausgewaehlte Referenzen mit messbaren Ergebnissen: mehr Anfragen, mehr Termine, mehr qualifizierte Leads und bessere Conversion.",keywords:"webagentur referenzen, case studies lokale unternehmen, mehr anfragen website, conversion optimierung referenzen",pageKind:"references",changeFrequency:"weekly",priority:.9,indexable:!0,sitemap:!0,breadcrumb:["Startseite","Referenzen"]},{path:"/ueber-uns",name:"Ueber uns",title:"Ueber VS Web Studio | Webagentur aus Hildesheim",description:"VS Web Studio aus Hildesheim entwickelt Websites und Lead-Systeme fuer lokale Unternehmen in Niedersachsen und ganz Deutschland.",keywords:"webagentur hildesheim, webdesign niedersachsen, ueber vs web studio, lokale agentur deutschland",pageKind:"about",changeFrequency:"monthly",priority:.86,indexable:!0,sitemap:!0,breadcrumb:["Startseite","Ueber uns"]},{path:"/kontakt",name:"Kontakt",title:"Kontakt | Projektanfrage an VS Web Studio",description:"Projektanfrage fuer Website, Relaunch, SEO, Tracking oder Lead-System. Direkter Kontakt mit VS Web Studio in Hildesheim.",keywords:"kontakt webagentur hildesheim, projektanfrage website, seo agentur kontakt, landingpage anfragen",pageKind:"contact",changeFrequency:"monthly",priority:.88,indexable:!0,sitemap:!0,breadcrumb:["Startseite","Kontakt"]},{path:"/blog",name:"Blog",title:"Blog | Insights zu Website, SEO, Ads und Automationen",description:"Insights zu Websites, Lead-Funnels, SEO, Tracking, Social Ads und Automationen fuer lokale Unternehmen in Deutschland.",keywords:"website blog deutschland, seo insights, lead funnel tipps, social ads tracking, automation blog",pageKind:"blog",changeFrequency:"weekly",priority:.76,indexable:!0,sitemap:!0,breadcrumb:["Startseite","Blog"]},{path:"/handwerker",name:"Handwerker",title:"Websites fuer Handwerker | Mehr passende Anfragen",description:"Websites fuer Handwerker mit lokaler Sichtbarkeit, klaren Leistungsseiten, schneller Ladezeit und direktem Anfrage-Fokus.",keywords:"website fuer handwerker, handwerker webdesign, lokale sichtbarkeit handwerk, anfragen fuer handwerker",pageKind:"niche",changeFrequency:"monthly",priority:.84,indexable:!0,sitemap:!0,breadcrumb:["Startseite","Handwerker"]},{path:"/praxis",name:"Praxis",title:"Websites fuer Praxen | Mehr Terminanfragen und weniger Rueckfragen",description:"Websites fuer Praxen mit patientenfreundlicher Struktur, klaren Kontaktwegen und messbarer Conversion fuer Terminanfragen.",keywords:"website fuer praxis, arztpraxis webdesign, terminanfragen website, praxis marketing deutschland",pageKind:"niche",changeFrequency:"monthly",priority:.84,indexable:!0,sitemap:!0,breadcrumb:["Startseite","Praxis"]},{path:"/werkstatt",name:"Werkstatt",title:"Websites fuer Werkstaetten | Planbare Leads statt Zufall",description:"Website- und Lead-Systeme fuer Werkstaetten mit serviceorientierten Seiten, Tracking und klarem Anfrageprozess.",keywords:"website fuer werkstatt, auto werkstatt webdesign, lead system werkstatt, conversion website servicebetrieb",pageKind:"niche",changeFrequency:"monthly",priority:.84,indexable:!0,sitemap:!0,breadcrumb:["Startseite","Werkstatt"]},{path:"/impressum",name:"Impressum",title:"Impressum | VS Web Studio",description:"Rechtliche Angaben von VS Web Studio.",keywords:"impressum vs web studio",pageKind:"legal",changeFrequency:"yearly",priority:.2,indexable:!1,sitemap:!1,breadcrumb:["Startseite","Impressum"]},{path:"/datenschutz",name:"Datenschutz",title:"Datenschutz | VS Web Studio",description:"Datenschutzhinweise von VS Web Studio.",keywords:"datenschutz vs web studio",pageKind:"legal",changeFrequency:"yearly",priority:.2,indexable:!1,sitemap:!1,breadcrumb:["Startseite","Datenschutz"]},{path:"/agb",name:"AGB",title:"AGB | VS Web Studio",description:"Allgemeine Geschaeftsbedingungen von VS Web Studio.",keywords:"agb vs web studio",pageKind:"legal",changeFrequency:"yearly",priority:.2,indexable:!1,sitemap:!1,breadcrumb:["Startseite","AGB"]},{path:"/cookies",name:"Cookies",title:"Cookie-Hinweise | VS Web Studio",description:"Informationen zu Cookies und Messdiensten von VS Web Studio.",keywords:"cookies vs web studio",pageKind:"legal",changeFrequency:"yearly",priority:.2,indexable:!1,sitemap:!1,breadcrumb:["Startseite","Cookies"]}],hR={site:uR,homeFaq:dR,pricingPackages:fR,routes:pR},Xe=hR,Xn=Xe.site,mR=new Map(Xe.routes.map(e=>[e.path,e])),gR={path:"/404",name:"404",title:"404 | Seite nicht gefunden | VS Web Studio",description:"Die angeforderte Seite wurde nicht gefunden. Wechseln Sie zur Startseite oder senden Sie uns direkt eine Projektanfrage.",keywords:"404, seite nicht gefunden, vs web studio",pageKind:"notFound",changeFrequency:"yearly",priority:0,indexable:!1,sitemap:!1,breadcrumb:["Startseite","404"],absoluteUrl:`${Xe.site.baseUrl}/404`,robots:"noindex,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",canonicalUrl:null},bR=e=>{var i;const t=((i=e.split("?")[0])==null?void 0:i.split("#")[0])??"/";if(!t||t==="/")return"/";const a=t.endsWith("/")?t.slice(0,-1):t;return a==="/home"?"/":a},Ou=e=>e==="/"?`${Xe.site.baseUrl}/`:`${Xe.site.baseUrl}${e}`,xR=e=>{const t=bR(e),a=mR.get(t);return a?{...a,absoluteUrl:Ou(a.path),robots:a.indexable?"index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1":"noindex,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",canonicalUrl:Ou(a.path)}:gR},$3=`${Xe.site.baseUrl}/#website`,ml=`${Xe.site.baseUrl}/#organization`,yR={home:"WebPage",services:"CollectionPage",pricing:"CollectionPage",references:"CollectionPage",about:"AboutPage",contact:"ContactPage",blog:"Blog",niche:"Service",legal:"WebPage",notFound:"WebPage"},vR=e=>({"@type":"BreadcrumbList","@id":`${e.absoluteUrl}#breadcrumb`,itemListElement:e.breadcrumb.map((t,a)=>({"@type":"ListItem",position:a+1,name:t,item:Ou(a===0?"/":e.path)}))}),wR=()=>({"@type":["ProfessionalService","Organization"],"@id":ml,name:Xe.site.siteName,url:`${Xe.site.baseUrl}/`,logo:`${Xe.site.baseUrl}/apple-touch-icon.png`,image:Xe.site.defaultImage,email:Xe.site.email,telephone:Xe.site.telephone,priceRange:Xe.site.priceRange,address:{"@type":"PostalAddress",...Xe.site.address},geo:{"@type":"GeoCoordinates",...Xe.site.geo},areaServed:[{"@type":"City",name:"Hildesheim"},{"@type":"AdministrativeArea",name:"Niedersachsen"},{"@type":"Country",name:"Germany"}],contactPoint:[{"@type":"ContactPoint",contactType:"sales",email:Xe.site.email,telephone:Xe.site.telephone,availableLanguage:["de","uk","en"]}]}),SR=()=>({"@type":"WebSite","@id":$3,url:`${Xe.site.baseUrl}/`,name:Xe.site.siteName,inLanguage:"de-DE",publisher:{"@id":ml}}),kR=e=>({"@type":yR[e.pageKind],"@id":`${e.absoluteUrl}#webpage`,url:e.absoluteUrl,name:e.title,headline:e.title,description:e.description,inLanguage:"de-DE",isPartOf:{"@id":$3},about:{"@id":ml},primaryImageOfPage:{"@type":"ImageObject",url:Xe.site.defaultImage}}),TR=()=>({"@type":"FAQPage","@id":`${Xe.site.baseUrl}/#faq`,mainEntity:Xe.homeFaq.map(e=>({"@type":"Question",name:e.question,acceptedAnswer:{"@type":"Answer",text:e.answer}}))}),jR=()=>({"@type":"OfferCatalog","@id":`${Xe.site.baseUrl}/preise#offers`,name:"Website- und Lead-System Pakete",itemListElement:Xe.pricingPackages.map((e,t)=>({"@type":"Offer",position:t+1,name:e.name,description:e.description,priceSpecification:{"@type":"PriceSpecification",priceCurrency:"EUR",description:e.price}}))}),AR=()=>({"@type":"Service","@id":`${Xe.site.baseUrl}/services#service`,serviceType:["Website Entwicklung","Landingpages","SEO Basis","Tracking und Analytics","Social Ads","Automationen und KI"],provider:{"@id":ml},areaServed:"DE"}),CR=e=>({"@type":"Service","@id":`${e.absoluteUrl}#service`,name:e.name,description:e.description,provider:{"@id":ml},areaServed:"DE"}),ER=e=>{const t=[wR(),SR(),kR(e),vR(e)];return e.pageKind==="home"&&t.push(TR()),e.pageKind==="pricing"&&t.push(jR()),e.pageKind==="services"&&t.push(AR()),e.pageKind==="niche"&&t.push(CR(e)),{"@context":"https://schema.org","@graph":t}},Ze=(e,t,a)=>{let i=document.head.querySelector(`meta[${e}="${t}"]`);i||(i=document.createElement("meta"),i.setAttribute(e,t),document.head.appendChild(i)),i.setAttribute("content",a)},MR=(e,t)=>{let a=document.head.querySelector(`link[rel="${e}"]`);a||(a=document.createElement("link"),a.setAttribute("rel",e),document.head.appendChild(a)),a.setAttribute("href",t)},zR=e=>{let t=document.head.querySelector('script[data-seo="structured-data"]');t||(t=document.createElement("script"),t.type="application/ld+json",t.setAttribute("data-seo","structured-data"),document.head.appendChild(t)),t.textContent=JSON.stringify(e)},RR=()=>{const e=document.head.querySelector('link[rel="canonical"]');e==null||e.remove()},LR=()=>{const e=$n();return j.useEffect(()=>{const t=xR(e.pathname),a=ER(t);document.title=t.title,document.documentElement.lang=Xn.language,Ze("name","description",t.description),Ze("name","keywords",t.keywords),Ze("name","author",Xn.siteName),Ze("name","robots",t.robots),Ze("name","googlebot",t.robots),Ze("name","theme-color",Xn.themeColor),Ze("property","og:type",t.pageKind==="blog"?"article":"website"),Ze("property","og:locale",Xn.locale),Ze("property","og:site_name",Xn.siteName),Ze("property","og:title",t.title),Ze("property","og:description",t.description),Ze("property","og:url",t.absoluteUrl),Ze("property","og:image",Xn.defaultImage),Ze("property","og:image:secure_url",Xn.defaultImage),Ze("property","og:image:type","image/png"),Ze("property","og:image:width","1200"),Ze("property","og:image:height","630"),Ze("property","og:image:alt",Xn.defaultImageAlt),Ze("name","twitter:card","summary_large_image"),Ze("name","twitter:title",t.title),Ze("name","twitter:description",t.description),Ze("name","twitter:image",Xn.defaultImage),Ze("name","twitter:image:alt",Xn.defaultImageAlt),Ze("name","twitter:url",t.absoluteUrl),t.canonicalUrl?MR("canonical",t.canonicalUrl):RR(),zR(a)},[e.pathname]),null},OR=R.div`
  min-height: 100vh;
  background:
    radial-gradient(1200px 500px at 12% -10%, rgba(255, 160, 70, 0.2), transparent 60%),
    radial-gradient(900px 420px at 88% 10%, rgba(70, 127, 255, 0.22), transparent 60%),
    linear-gradient(180deg, #070812 0%, #0e1220 100%);
`,DR=R(ie.main)`
  padding-top: 76px;

  @media (max-width: 767px) {
    padding-top: 66px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding-top: 72px;
  }
`,PR=()=>{const e=$n();return j.useEffect(()=>{window.scrollTo({top:0,behavior:"auto"})},[e.pathname]),d.jsxs(OR,{children:[d.jsx(LR,{}),d.jsx(Jz,{}),d.jsx(a4,{mode:"wait",children:d.jsx(DR,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.32,ease:hn},children:d.jsx(ek,{})},e.pathname)}),d.jsx(lR,{}),d.jsx(cR,{})]})};function VR(e=!1){j.useEffect(()=>{if(e)return;let t=0,a=window.innerWidth*.5,i=window.innerHeight*.3;const o=()=>{document.documentElement.style.setProperty("--spotlight-x",`${a}px`),document.documentElement.style.setProperty("--spotlight-y",`${i}px`),t=0},l=u=>{a=u.clientX,i=u.clientY,t||(t=window.requestAnimationFrame(o))};return window.addEventListener("pointermove",l,{passive:!0}),o(),()=>{window.removeEventListener("pointermove",l),t&&window.cancelAnimationFrame(t)}},[e])}function NR(){const[e,t]=j.useState(!1);return j.useEffect(()=>{var o;const a=window.matchMedia("(prefers-reduced-motion: reduce)"),i=()=>t(a.matches);return t(a.matches),(o=a.addEventListener)==null||o.call(a,"change",i),()=>{var l;return(l=a.removeEventListener)==null?void 0:l.call(a,"change",i)}},[]),e}const Wn=({label:e,value:t,options:a,onChange:i})=>d.jsxs("div",{className:"seg",children:[d.jsx("div",{className:"seg-label",children:e}),d.jsx("div",{className:"seg-row",role:"group","aria-label":e,children:a.map(o=>d.jsxs("button",{type:"button",role:"checkbox","aria-checked":t.includes(o.value),className:`seg-btn ${t.includes(o.value)?"active":""}`,onClick:()=>i(t.includes(o.value)?t.filter(l=>l!==o.value):[...t,o.value]),children:[d.jsx("span",{className:"seg-title",children:o.title}),o.hint?d.jsx("span",{className:"seg-hint",children:o.hint}):null]},o.value))})]}),Lo="/assets/hero-main-BwizpqXp.webm",dm="/assets/photo_2025-09-16_22-57-47-BZW9LnVG.jpg",fm="/assets/photo_2025-09-16_22-58-19-CMYu6dTK.jpg",pm="/assets/photo_2025-09-16_22-58-10-Bd-7i7_Y.jpg",hm="/assets/photo_2025-09-16_22-58-06-Byl6jOLf.jpg",BR="/assets/01-call-Bgwp57KR.webp",_R="/assets/02-prototype-BmhFIUL-.webp",HR="/assets/03-dev-Vc9Lg5zG.webp",$R="/assets/04-launch-C8dDkkp8.webp",UR={hidden:{opacity:0,y:34,scale:.98},show:{opacity:1,y:0,scale:1}},nh=[{step:"01",image:BR},{step:"02",image:_R},{step:"03",image:HR},{step:"04",image:$R}],GR=[{id:"c1",tags:["React","TypeScript","SEO","GA4"],poster:dm,video:Lo},{id:"c2",tags:["Landing","Ads","Tracking"],poster:fm,video:Lo},{id:"c3",tags:["Forms","Analytics","UX"],poster:pm,video:Lo},{id:"c4",tags:["Firebase","React","Automation"],poster:hm,video:Lo}],IR=["d1","d2","d3","d4"],Qn={goal:[{value:"leads",title:"home.configurator.options.goal.leads"},{value:"calls",title:"home.configurator.options.goal.calls"},{value:"booking",title:"home.configurator.options.goal.booking"},{value:"other",title:"home.configurator.options.common.other"}],integrations:[{value:"booking",title:"home.configurator.options.integrations.booking"},{value:"crm",title:"home.configurator.options.integrations.crm"},{value:"chat",title:"home.configurator.options.integrations.chat"},{value:"payments",title:"home.configurator.options.integrations.payments"},{value:"other",title:"home.configurator.options.common.other"}],ads:[{value:"none",title:"home.configurator.options.ads.none"},{value:"meta",title:"home.configurator.options.ads.meta"},{value:"google",title:"home.configurator.options.ads.google"},{value:"other",title:"home.configurator.options.common.other"}],term:[{value:"up-to-7",title:"home.configurator.options.term.up_to_7"},{value:"7-14",title:"home.configurator.options.term.from_7_to_14"},{value:"14-21",title:"home.configurator.options.term.from_14_to_21"},{value:"21-30",title:"home.configurator.options.term.from_21_to_30"},{value:"other",title:"home.configurator.options.common.other"}],content:[{value:"has",title:"home.configurator.options.content.has"},{value:"copy",title:"home.configurator.options.content.copy"},{value:"other",title:"home.configurator.options.common.other"}],languages:[{value:"basic",title:"home.configurator.options.languages.basic"},{value:"multi",title:"home.configurator.options.languages.multi"},{value:"other",title:"home.configurator.options.common.other"}],hosting:[{value:"shared",title:"home.configurator.options.hosting.shared"},{value:"vps",title:"home.configurator.options.hosting.vps"},{value:"managed",title:"home.configurator.options.hosting.managed"},{value:"other",title:"home.configurator.options.common.other"}],domain:[{value:"new-domain",title:"home.configurator.options.domain.new_domain"},{value:"existing-domain",title:"home.configurator.options.domain.existing_domain"},{value:"transfer",title:"home.configurator.options.domain.transfer"},{value:"other",title:"home.configurator.options.common.other"}],pages:[{value:"one",title:"home.configurator.options.pages.one"},{value:"up-to-3",title:"home.configurator.options.pages.up_to_3"},{value:"five-plus",title:"home.configurator.options.pages.five_plus"},{value:"other",title:"home.configurator.options.common.other"}],seo:[{value:"base",title:"home.configurator.options.seo.base"},{value:"extended",title:"home.configurator.options.seo.extended"},{value:"other",title:"home.configurator.options.common.other"}]},FR={leads:576,calls:558,booking:630,other:180},qR={booking:108,crm:153,chat:81,payments:189,other:45},KR={none:20,meta:108,google:135,other:25},YR={"up-to-7":198,"7-14":153,"14-21":81,"21-30":35,other:30},XR={has:35,copy:117,other:35},WR={basic:25,multi:135,other:25},QR={shared:30,vps:85,managed:120,other:30},ZR={"new-domain":25,"existing-domain":20,transfer:45,other:25},JR={one:70,"up-to-3":117,"five-plus":189,other:70},eL={base:20,extended:126,other:20},tL={leads:576,calls:558,booking:630,other:320},nL={booking:108,crm:153,chat:81,payments:189,other:120},aL={none:20,meta:108,google:135,other:90},iL={"up-to-7":198,"7-14":153,"14-21":81,"21-30":35,other:120},rL={has:35,copy:117,other:90},sL={basic:25,multi:135,other:90},oL={shared:30,vps:85,managed:120,other:90},lL={"new-domain":25,"existing-domain":20,transfer:45,other:90},cL={one:70,"up-to-3":117,"five-plus":189,other:170},uL={base:20,extended:126,other:90},Zn={goal:"Ziel",integrations:"Integrationen",ads:"Werbung",term:"Zeitrahmen",content:"Content-Level",languages:"Sprachen",hosting:"Hosting",domain:"Domain",pages:"Seiten",seo:"SEO"},dL={goal:{leads:"Leads",calls:"Anrufe",booking:"Buchungen",other:"Andere"},integrations:{booking:"Buchung",crm:"CRM",chat:"Chat",payments:"Zahlungen",other:"Andere"},ads:{none:"Ohne Werbung",meta:"Meta",google:"Google",other:"Andere"},term:{"up-to-7":"Bis 1 Woche","7-14":"7-14 Tage","14-21":"14-21 Tage","21-30":"21-30 Tage",other:"Andere"},content:{has:"Texte vorhanden",copy:"Copywriting ötig",other:"Andere"},languages:{basic:"1 Sprache",multi:"2+ Sprachen",other:"Andere"},hosting:{shared:"Shared Hosting",vps:"VPS",managed:"Managed Hosting",other:"Andere"},domain:{"new-domain":"Neue Domain","existing-domain":"Domain vorhanden",transfer:"Domain-Transfer",other:"Andere"},pages:{one:"1 Seite","up-to-3":"Bis 3 Seiten","five-plus":"5+ Seiten",other:"Andere"},seo:{base:"SEO Base",extended:"SEO Extended",other:"Andere"}},fL=()=>{const{t:e}=Ge(),[t,a]=j.useState([]),[i,o]=j.useState([]),[l,u]=j.useState([]),[p,f]=j.useState([]),[m,g]=j.useState([]),[x,y]=j.useState([]),[v,S]=j.useState([]),[k,C]=j.useState([]),[M,z]=j.useState([]),[A,$]=j.useState([]),E=()=>{a([]),o([]),u([]),f([]),g([]),y([]),S([]),C([]),z([]),$([])},V=(H,te,ce)=>e(H,{defaultValue:te,...ce}),N=(H,te)=>{var ce;return((ce=dL[H])==null?void 0:ce[te])??te},O=j.useMemo(()=>({goal:Qn.goal.map(H=>({...H,title:V(H.title,N("goal",H.value))})),integrations:Qn.integrations.map(H=>({...H,title:V(H.title,N("integrations",H.value))})),ads:Qn.ads.map(H=>({...H,title:V(H.title,N("ads",H.value))})),term:Qn.term.map(H=>({...H,title:V(H.title,N("term",H.value))})),content:Qn.content.map(H=>({...H,title:V(H.title,N("content",H.value))})),languages:Qn.languages.map(H=>({...H,title:V(H.title,N("languages",H.value))})),hosting:Qn.hosting.map(H=>({...H,title:V(H.title,N("hosting",H.value))})),domain:Qn.domain.map(H=>({...H,title:V(H.title,N("domain",H.value))})),pages:Qn.pages.map(H=>({...H,title:V(H.title,N("pages",H.value))})),seo:Qn.seo.map(H=>({...H,title:V(H.title,N("seo",H.value))}))}),[e]),X=j.useMemo(()=>{if(![t,i,l,p,m,x,v,k,M,A].every(ne=>ne.length>0))return{isComplete:!1};const te=(ne,ae)=>ne.reduce((se,xe)=>se+(ae[xe]??0),0),ce=(ne,ae)=>ne.map(se=>{var xe;return((xe=ae.find(de=>de.value===se))==null?void 0:xe.title)||se}).join(", "),le=te(t,FR)+te(i,qR)+te(l,KR)+te(p,YR)+te(m,XR)+te(x,WR)+te(v,QR)+te(k,ZR)+te(M,JR)+te(A,eL),oe=te(t,tL)+te(i,nL)+te(l,aL)+te(p,iL)+te(m,rL)+te(x,sL)+te(v,oL)+te(k,lL)+te(M,cL)+te(A,uL),D=x.includes("multi")||M.includes("five-plus")||A.includes("extended")||l.some(ne=>ne!=="none"&&ne!=="other")||i.includes("crm")||i.includes("payments"),B=oe>980||D?"Business":"Starter",G=B==="Business"?86:62,Z=G*12,L=Math.round(Z*.7),Y=[V("home.configurator.bullets.prototype","Prototyp und Struktur mit Fokus auf Anfragen"),V("home.configurator.bullets.goal","Ziele: {{value}}",{value:ce(t,O.goal)}),V("home.configurator.bullets.integrations","Integrationen: {{value}}",{value:ce(i,O.integrations)}),V("home.configurator.bullets.term","Zeitrahmen: {{value}}",{value:ce(p,O.term)}),V("home.configurator.bullets.hosting","Hosting: {{value}}",{value:ce(v,O.hosting)}),V("home.configurator.bullets.domain","Domain: {{value}}",{value:ce(k,O.domain)}),V("home.configurator.bullets.pages","Seiten: {{value}}",{value:ce(M,O.pages)}),V("home.configurator.bullets.analytics","GA4 und Event-Tracking für Formulare/Kontakte"),m.includes("copy")?V("home.configurator.bullets.copy_true","Unterstützung bei Texten und Offer"):V("home.configurator.bullets.copy_false","Wir arbeiten mit Ihren vorhandenen Texten"),V("home.configurator.bullets.market_note","Orientierungspreis unter marktüblichem Niveau für kleine Unternehmen")];return{isComplete:!0,pack:B,bullets:Y,totalFrom:le,totalTo:oe,supportMonthly:G,supportYearlyRaw:Z,supportYearly:L,cta:"/kontakt"}},[l,m,k,t,v,i,x,M,A,e,p,O]),J=j.useMemo(()=>{if(!X.isComplete)return"";const H=(ce,le)=>ce.map(oe=>{var D;return((D=le.find(B=>B.value===oe))==null?void 0:D.title)||oe}).join(", "),te=X.totalFrom===X.totalTo?`${X.totalFrom} EUR`:`${X.totalFrom} - ${X.totalTo} EUR`;return[V("home.configurator.brief.title","Brief aus dem Angebots-Konfigurator:"),V("home.configurator.brief.goal","Ziel: {{value}}",{value:H(t,O.goal)}),V("home.configurator.brief.integrations","Integrationen: {{value}}",{value:H(i,O.integrations)}),V("home.configurator.brief.ads","Werbung: {{value}}",{value:H(l,O.ads)}),V("home.configurator.brief.term","Zeitrahmen: {{value}}",{value:H(p,O.term)}),V("home.configurator.brief.content","Content: {{value}}",{value:H(m,O.content)}),V("home.configurator.brief.languages","Sprachen: {{value}}",{value:H(x,O.languages)}),V("home.configurator.brief.hosting","Hosting: {{value}}",{value:H(v,O.hosting)}),V("home.configurator.brief.domain","Domain: {{value}}",{value:H(k,O.domain)}),V("home.configurator.brief.pages","Seiten: {{value}}",{value:H(M,O.pages)}),V("home.configurator.brief.seo","SEO: {{value}}",{value:H(A,O.seo)}),V("home.configurator.brief.launch_price","Startpreis: {{value}}",{value:te}),V("home.configurator.brief.support_monthly","Support / Monat: {{value}}",{value:`${X.supportMonthly} EUR`}),V("home.configurator.brief.support_yearly","Support / Jahr (-30%): {{value}}",{value:`${X.supportYearly} EUR`})].join(`
`)},[l,m,k,t,v,i,x,X,M,A,e,p,O]);return d.jsxs("div",{className:"card configurator-card",children:[d.jsx(Wn,{label:V("home.configurator.labels.goal",Zn.goal),value:t,options:O.goal,onChange:a}),d.jsx(Wn,{label:V("home.configurator.labels.integrations",Zn.integrations),value:i,options:O.integrations,onChange:o}),d.jsx(Wn,{label:V("home.configurator.labels.ads",Zn.ads),value:l,options:O.ads,onChange:u}),d.jsx(Wn,{label:V("home.configurator.labels.term",Zn.term),value:p,options:O.term,onChange:f}),d.jsx(Wn,{label:V("home.configurator.labels.content",Zn.content),value:m,options:O.content,onChange:g}),d.jsx(Wn,{label:V("home.configurator.labels.languages",Zn.languages),value:x,options:O.languages,onChange:y}),d.jsx(Wn,{label:V("home.configurator.labels.hosting",Zn.hosting),value:v,options:O.hosting,onChange:S}),d.jsx(Wn,{label:V("home.configurator.labels.domain",Zn.domain),value:k,options:O.domain,onChange:C}),d.jsx(Wn,{label:V("home.configurator.labels.pages",Zn.pages),value:M,options:O.pages,onChange:z}),d.jsx(Wn,{label:V("home.configurator.labels.seo",Zn.seo),value:A,options:O.seo,onChange:$}),d.jsxs("div",{className:"offer",children:[d.jsx("button",{type:"button",className:"btn btn-secondary reset-btn",onClick:E,children:V("home.configurator.reset","Alles zurücksetzen")}),X.isComplete?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"offer-title",children:[V("home.configurator.recommended","Empfohlen:")," ",d.jsx("strong",{children:X.pack==="Business"?V("home.configurator.pack.business","Business"):V("home.configurator.pack.starter","Starter")})]}),d.jsxs("p",{className:"offer-price",children:[V("home.configurator.launchPrice","Startpreis:")," ",d.jsx("strong",{children:X.totalFrom===X.totalTo?`${X.totalFrom} EUR`:`${X.totalFrom} - ${X.totalTo} EUR`})]}),d.jsx("ul",{className:"offer-list",children:X.bullets.map(H=>d.jsx("li",{children:H},H))}),d.jsxs("div",{className:"support-grid",children:[d.jsxs("article",{className:"support-card",children:[d.jsx("h3",{children:V("home.configurator.supportMonthly","Support / Monat")}),d.jsx("p",{children:d.jsxs("strong",{children:[X.supportMonthly," EUR"]})})]}),d.jsxs("article",{className:"support-card",children:[d.jsx("h3",{children:V("home.configurator.supportYearly","Support / Jahr (-30%)")}),d.jsxs("p",{children:[d.jsxs("strong",{children:[X.supportYearly," EUR"]})," ",d.jsxs("span",{className:"support-old",children:[X.supportYearlyRaw," EUR"]})]})]})]}),d.jsx(la,{to:X.cta,state:{prefillNeed:J},className:"btn btn-primary offer-cta",children:V("home.configurator.cta","Kontaktanfrage und exakter Kostenvoranschlag")})]}):d.jsx("div",{className:"offer-empty",children:V("home.configurator.empty",'Wählen Sie mindestens eine Option in jedem Block. Mehrfachauswahl ist möglich; bei "Andere" wird keine Zusatzgebühr berechnet.')})]})]})},pL=R.div`
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
`,mt={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.6,ease:hn}}},Hc={hidden:{opacity:0,x:-40},visible:{opacity:1,x:0,transition:{duration:.7,ease:hn}}},ri={hidden:{opacity:0,x:40},visible:{opacity:1,x:0,transition:{duration:.7,ease:hn}}},Ye={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:.8,ease:hn}}},Nt={hidden:{},visible:{transition:{staggerChildren:.1}}},hL=()=>{const{t:e}=Ge();return d.jsx(pL,{children:d.jsxs(ie.section,{className:"section configurator",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.18},variants:mt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.configurator.title",{defaultValue:"Angebots-Konfigurator"})}),d.jsx("p",{className:"section-description",children:e("home.configurator.desc",{defaultValue:"Wählen Sie Projektparameter und erhalten Sie einen Startpreis sowie passende Support-Tarife."})})]}),d.jsx(ie.div,{variants:Ye,children:d.jsx(fL,{})})]})})},Ki=({text:e,durationMs:t=6200,storageKey:a="terminal_typed_once"})=>{const[i,o]=j.useState(0),[l,u]=j.useState(!1),p=j.useMemo(()=>{const f=Math.max(e.length,1);return Math.max(24,Math.floor(t/f))},[t,e.length]);return j.useEffect(()=>{if(typeof window>"u")return;if(window.sessionStorage.getItem(a)==="1"){o(e.length),u(!0);return}let m=0;const g=window.setInterval(()=>{m+=1,o(m),m>=e.length&&(window.clearInterval(g),u(!0),window.sessionStorage.setItem(a,"1"))},p);return()=>window.clearInterval(g)},[p,a,e]),d.jsxs("span",{className:"terminal-text","aria-label":e,children:[e.slice(0,i),!l&&d.jsx("span",{className:"terminal-cursor",children:"|"})]})},mL=R.div`
  .faq {
    display: grid;
    gap: 14px;
    margin-top: 14px;
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
`,gL=()=>{const{t:e}=Ge();return d.jsx(mL,{children:d.jsxs(ie.section,{id:"faq",className:"section",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.18},variants:mt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:d.jsx(Ki,{text:e("home.faqTitle",{defaultValue:"FAQ"}),durationMs:2200,storageKey:"faq_title_v2"})}),d.jsx("p",{className:"section-description",children:e("home.faq.desc",{defaultValue:"Antworten auf häufige Fragen zu Timing, Kosten, Launch-Prozess und laufender Betreuung."})})]}),d.jsxs(ie.div,{className:"faq",variants:Nt,children:[d.jsxs(ie.details,{variants:Ye,children:[d.jsx("summary",{children:e("home.faq.q1",{defaultValue:"Wie schnell könnt ihr starten?"})}),d.jsx("div",{className:"faq-answer",children:d.jsx("p",{children:e("home.faq.a1",{defaultValue:"In der Regel starten wir innerhalb von 3-5 Werktagen. Direkt nach deiner Anfrage bekommst du einen kurzen Plan mit den ersten Schritten."})})})]}),d.jsxs(ie.details,{variants:Ye,children:[d.jsx("summary",{children:e("home.faq.q2",{defaultValue:"Was brauche ich als Kunde am Anfang?"})}),d.jsx("div",{className:"faq-answer",children:d.jsx("p",{children:e("home.faq.a2",{defaultValue:"Nur Basisinfos zu deinem Angebot, Zielgruppe und Kontaktwegen. Wir helfen dir dann bei Struktur, Texten und Prioritäten."})})})]}),d.jsxs(ie.details,{variants:Ye,children:[d.jsx("summary",{children:e("home.faq.q3",{defaultValue:"Wie läuft die Zusammenarbeit ab?"})}),d.jsx("div",{className:"faq-answer",children:d.jsx("p",{children:e("home.faq.a3",{defaultValue:"Wir arbeiten in kurzen Etappen: Konzept, Design, Umsetzung, Launch. Du bekommst klare Updates, damit du immer weißt, was als Nächstes passiert."})})})]}),d.jsxs(ie.details,{variants:Ye,children:[d.jsx("summary",{children:e("home.faq.q4",{defaultValue:"Ist das für kleine Unternehmen geeignet?"})}),d.jsx("div",{className:"faq-answer",children:d.jsx("p",{children:e("home.faq.a4",{defaultValue:"Ja. Unsere Pakete sind bewusst für lokale Betriebe aufgebaut: klare Preise, schneller Start und Fokus auf echte Anfragen statt nur Optik."})})})]}),d.jsxs(ie.details,{variants:Ye,children:[d.jsx("summary",{children:e("home.faq.q5",{defaultValue:"Was passiert nach dem Launch?"})}),d.jsx("div",{className:"faq-answer",children:d.jsx("p",{children:e("home.faq.a5",{defaultValue:"Nach dem Launch prüfen wir Daten, verbessern Conversion-Punkte und unterstützen dich beim Feinschliff, damit die Seite dauerhaft besser performt."})})})]})]})]})})},bL="/assets/Sub_Zero_Refrigerator_Cinematic_Reveal-BIqjoL6O.mov",xL=R.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
`,yL=R.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.04);
  z-index: 0;
`,vL=R.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgb(0 0 0 / 87%) 0%, rgb(0 0 0 / 48%) 50%, rgba(0, 0, 0, 0.4) 100%);
  z-index: 1;
`,wL=()=>d.jsxs(xL,{children:[d.jsxs(yL,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",poster:"/images/hero-generated.svg",children:[d.jsx("source",{src:Lo,type:"video/webm"}),d.jsx("source",{src:bL,type:"video/mp4"})]}),d.jsx(vL,{})]}),SL=R.div`
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
`,kL=({reducedMotion:e})=>{const{t}=Ge(),{scrollYProgress:a}=NC(),i=dy(a,[0,.45],[0,-24]),o=dy(a,[0,.4],[0,30]),[l,u]=j.useState({x:0,y:0}),p=m=>{if(e)return;const g=m.currentTarget.getBoundingClientRect(),x=(m.clientX-g.left-g.width/2)/12,y=(m.clientY-g.top-g.height/2)/12;u({x:Math.max(-8,Math.min(8,x)),y:Math.max(-8,Math.min(8,y))})},f=()=>u({x:0,y:0});return d.jsx(SL,{children:d.jsxs(ie.section,{className:"hero hero-with-video",initial:"hidden",animate:"show",variants:UR,transition:{duration:.85,ease:qu},children:[d.jsx(ie.div,{className:"hero-video-parallax",style:{y:o},children:d.jsx(wL,{})}),d.jsxs(ie.div,{className:"hero-content",style:{y:i},initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.9,ease:hn},children:[d.jsx("h1",{children:d.jsx(Ki,{text:t("home.heroTitle",{defaultValue:"Websites, die Anfragen bringen statt nur gut aussehen."}),durationMs:6200,storageKey:"hero_terminal_once"})}),d.jsx("p",{children:t("home.heroSubtitle",{defaultValue:"Klare Positionierung, schnelle Umsetzung und transparente Pakete für lokale Dienstleister in Deutschland."})}),d.jsxs("div",{className:"btn-row",children:[d.jsxs(la,{to:"/kontakt",className:"btn btn-primary btn-magnetic",onMouseMove:p,onMouseLeave:f,style:{transform:`translate(${l.x}px, ${l.y}px)`},children:[d.jsx(_n,{})," ",t("common.projectRequest")]}),d.jsxs(la,{to:"/preise",className:"btn btn-secondary",children:[d.jsx(Su,{})," ",t("common.viewPrices")]}),d.jsxs("a",{href:"#faq",className:"btn btn-secondary",children:[d.jsx(_n,{})," ",t("home.toFaq",{defaultValue:"Zum FAQ"})]})]})]}),d.jsxs("aside",{className:"hero-bento",children:[d.jsxs("article",{className:"bento-tile",children:[d.jsx("span",{children:t("home.hero.bento.speed.label",{defaultValue:"Geschwindigkeit"})}),d.jsx("strong",{children:t("home.hero.bento.speed.value",{defaultValue:"90+ Lighthouse"})}),d.jsx(Qu,{className:"bento-icon-bg","aria-hidden":"true"})]}),d.jsxs("article",{className:"bento-tile",children:[d.jsx("span",{children:t("home.hero.bento.seo.label",{defaultValue:"SEO"})}),d.jsx("strong",{children:t("home.hero.bento.seo.value",{defaultValue:"Technisches Fundament"})}),d.jsx(sE,{className:"bento-icon-bg","aria-hidden":"true"})]}),d.jsxs("article",{className:"bento-tile",children:[d.jsx("span",{children:t("home.hero.bento.leads.label",{defaultValue:"Anfragen"})}),d.jsx("strong",{children:t("home.hero.bento.leads.value",{defaultValue:"Klare CTA und Formulare"})}),d.jsx(QC,{className:"bento-icon-bg","aria-hidden":"true"})]}),d.jsxs("article",{className:"bento-tile",children:[d.jsx("span",{children:t("home.hero.bento.support.label",{defaultValue:"Support"})}),d.jsx("strong",{children:t("home.hero.bento.support.value",{defaultValue:"Nach dem Launch"})}),d.jsx(iE,{className:"bento-icon-bg","aria-hidden":"true"})]})]})]})})},TL=R.div`
  display: grid;
  gap: 16px;
`,jL=R.div`
  display: grid;
  gap: 8px;
`,AL=R.h3`
  font-size: 16px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.88);
`,CL=R.div`
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(10, 14, 26, 0.86);
  padding: 12px;
`,EL=R.div`
  display: flex;
  width: max-content;
  gap: 12px;
`,ML=R.div`
  min-width: 180px;
  min-height: 180px;
  border-radius: 14px;
  border: 1px solid rgba(255, 207, 130, 0.42);
  color: #fef6df;
  background-image: ${({$backgroundImage:e})=>e?`linear-gradient(155deg, rgba(7, 12, 23, 0.46), rgba(7, 12, 23, 0.82)), url(${e})`:"linear-gradient(130deg, rgba(255, 180, 90, 0.2), rgba(79, 141, 255, 0.16))"};
  background-size: cover;
  background-position: center;
  padding: 12px;
  display: grid;
  grid-template-rows: auto auto 1fr;
  align-content: start;
  gap: 8px;

  .badge-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }
`,zL=R.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.18);
`,RL=R.span`
  color: #ffdba2;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,LL=R.span`
  color: #fef6df;
  font-size: 15px;
  font-weight: 700;
`,OL=R.span`
  color: rgba(255, 255, 255, 0.78);
  font-size: 13px;
  line-height: 1.35;
`,DL=[{title:"Trusted Technologies",direction:"left",speed:60,items:[{label:"React",description:"UI",group:"Tech"},{label:"TypeScript",description:"Typing",group:"Tech"},{label:"SEO",description:"Visibility",group:"Growth"},{label:"Analytics",description:"Data",group:"Growth"},{label:"Automation",description:"Ops",group:"AI"}]}],U3=({rows:e=DL})=>d.jsx(TL,{children:e.map((t,a)=>{const i=t.speed??60,o=[...t.items,...t.items,...t.items];return d.jsxs(jL,{children:[t.title?d.jsx(ie.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.5},transition:{duration:.6,ease:hn},children:d.jsx(AL,{children:t.title})}):null,d.jsx(CL,{children:d.jsx(EL,{as:ie.div,animate:{x:t.direction==="right"?["-33.3333%","0%"]:["0%","-33.3333%"]},transition:{duration:i,ease:"linear",repeat:1/0,repeatType:"loop"},children:o.map((l,u)=>d.jsxs(ML,{$backgroundImage:l.backgroundImage,children:[d.jsxs("div",{className:"badge-top",children:[l.icon?d.jsx(zL,{style:{color:l.iconColor??"#fff",background:l.iconBg??"rgba(255,255,255,.18)"},children:l.icon}):null,l.group?d.jsx(RL,{children:l.group}):null]}),d.jsx(LL,{children:l.label}),l.description?d.jsx(OL,{children:l.description}):null]},`${l.group??"group"}-${l.label}-${u}`))})})]},`${t.title??"row"}-${a}`)})}),PL="/assets/Beauty-B5nCKot8.png",VL="/assets/Bildung-DUb95Jd7.png",NL="/assets/Coaching-Jbjo8OUB.png",BL="/assets/Fitness-CUZr8LbH.png",_L="/assets/Gastronomie-9VWW2aHc.png",HL="/assets/Handwerk-BNTwGaMa.png",$L="/assets/Immobilien-COg-qJ-F.png",UL="/assets/Kanzlei-BRg3E-LB.png",GL="/assets/Praxen-yTv6AWqn.png",IL="/assets/Reinigung-BnCbAVwW.png",FL="/assets/Transport-CSnl9Wxm.png",qL="/assets/Werkst%C3%A4tten-CrYP5CWR.png",KL=R.div`
  .marquee-wrap {
    margin-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
    background: rgba(255, 255, 255, 0.02);
  }
`,YL=()=>{const{t:e}=Ge(),t=j.useMemo(()=>[{label:e("home.marquee.items.handwerk",{defaultValue:"Handwerk"}),icon:d.jsx(Q4,{}),backgroundImage:HL},{label:e("home.marquee.items.praxen",{defaultValue:"Praxen"}),icon:d.jsx(Z4,{}),backgroundImage:GL},{label:e("home.marquee.items.werkstaetten",{defaultValue:"Werkstätten"}),icon:d.jsx(J4,{}),backgroundImage:qL},{label:e("home.marquee.items.gastronomie",{defaultValue:"Gastronomie"}),icon:d.jsx(pE,{}),backgroundImage:_L},{label:e("home.marquee.items.beauty",{defaultValue:"Beauty"}),icon:d.jsx(lE,{}),backgroundImage:PL},{label:e("home.marquee.items.immobilien",{defaultValue:"Immobilien"}),icon:d.jsx(X4,{}),backgroundImage:$L},{label:e("home.marquee.items.kanzlei",{defaultValue:"Kanzlei"}),icon:d.jsx(XC,{}),backgroundImage:UL},{label:e("home.marquee.items.fitness",{defaultValue:"Fitness"}),icon:d.jsx(eE,{}),backgroundImage:BL},{label:e("home.marquee.items.reinigung",{defaultValue:"Reinigung"}),icon:d.jsx(WC,{}),backgroundImage:IL},{label:e("home.marquee.items.transport",{defaultValue:"Transport"}),icon:d.jsx(dE,{}),backgroundImage:FL},{label:e("home.marquee.items.coaching",{defaultValue:"Coaching"}),icon:d.jsx(ZC,{}),backgroundImage:NL},{label:e("home.marquee.items.bildung",{defaultValue:"Bildung"}),icon:d.jsx(nE,{}),backgroundImage:VL}],[e]),a=j.useMemo(()=>[{direction:"left",speed:52,items:t}],[t]);return d.jsx(KL,{children:d.jsxs(ie.section,{className:"section marquee-wrap","aria-label":e("home.marquee.aria",{defaultValue:"Branchen"}),initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:mt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.marquee.title",{defaultValue:"Branchen, mit denen wir arbeiten"})}),d.jsx("p",{className:"section-description",children:e("home.marquee.desc",{defaultValue:"Wählen Sie eine Richtung und sehen Sie passende Stilbeispiele. So bauen wir schneller ein präzises Angebot für Ihr Unternehmen."})})]}),d.jsx(U3,{rows:a})]})})},XL=()=>{const{t:e}=Ge(),t=j.useMemo(()=>[{title:e("home.partnersTitle",{defaultValue:"Highlights, Zielgruppen und Leistungen"}),direction:"right",speed:58,items:[{group:e("home.groups.highlights",{defaultValue:"Highlights"}),label:e("home.partners.fastLoad.title",{defaultValue:"Schnell geladen"}),description:e("home.partners.fastLoad.desc",{defaultValue:"Seite lädt in Sekunden"}),icon:d.jsx(Qu,{}),iconColor:"#FFD25F",iconBg:"rgba(255,210,95,.2)"},{group:e("home.groups.highlights",{defaultValue:"Highlights"}),label:e("home.partners.moreLeads.title",{defaultValue:"Mehr Anfragen"}),description:e("home.partners.moreLeads.desc",{defaultValue:"Mehr Kontakte über Formulare"}),icon:d.jsx(Fi,{}),iconColor:"#58D68D",iconBg:"rgba(88,214,141,.2)"},{group:e("home.groups.highlights",{defaultValue:"Highlights"}),label:e("home.partners.clearPrices.title",{defaultValue:"Klare Preise"}),description:e("home.partners.clearPrices.desc",{defaultValue:"Du kennst Kosten im Voraus"}),icon:d.jsx(Su,{}),iconColor:"#5DADE2",iconBg:"rgba(93,173,226,.2)"},{group:e("home.groups.highlights",{defaultValue:"Highlights"}),label:e("home.partners.personalHelp.title",{defaultValue:"Persönliche Hilfe"}),description:e("home.partners.personalHelp.desc",{defaultValue:"Direkter Support ohne Warteschlange"}),icon:d.jsx(aE,{}),iconColor:"#F5B7B1",iconBg:"rgba(245,183,177,.2)"},{group:e("home.groups.forWhom",{defaultValue:"Für wen"}),label:e("home.partners.handwerker.title",{defaultValue:"Handwerker"}),description:e("home.partners.handwerker.desc",{defaultValue:"Anfragen pro Stadt und Leistung"}),icon:d.jsx(Q4,{}),iconColor:"#F8C471",iconBg:"rgba(248,196,113,.2)"},{group:e("home.groups.forWhom",{defaultValue:"Für wen"}),label:e("home.partners.praxen.title",{defaultValue:"Praxen"}),description:e("home.partners.praxen.desc",{defaultValue:"Patienten finden schneller Termine"}),icon:d.jsx(Z4,{}),iconColor:"#EC7063",iconBg:"rgba(236,112,99,.2)"},{group:e("home.groups.forWhom",{defaultValue:"Für wen"}),label:e("home.partners.werkstaetten.title",{defaultValue:"Werkstätten"}),description:e("home.partners.werkstaetten.desc",{defaultValue:"Klare Service-Seiten mit Tracking"}),icon:d.jsx(J4,{}),iconColor:"#AF7AC5",iconBg:"rgba(175,122,197,.2)"},{group:e("home.groups.forWhom",{defaultValue:"Für wen"}),label:e("home.partners.localServices.title",{defaultValue:"Lokale Services"}),description:e("home.partners.localServices.desc",{defaultValue:"Mehr Sichtbarkeit vor Ort"}),icon:d.jsx(_o,{}),iconColor:"#E74C3C",iconBg:"rgba(231,76,60,.2)"},{group:e("home.groups.services",{defaultValue:"Leistungen"}),label:e("home.partners.websites.title",{defaultValue:"Websites"}),description:e("home.partners.websites.desc",{defaultValue:"Modern, schnell, mobil optimiert"}),icon:d.jsx(Wh,{}),iconColor:"#48C9B0",iconBg:"rgba(72,201,176,.2)"},{group:e("home.groups.services",{defaultValue:"Leistungen"}),label:e("home.partners.webApps.title",{defaultValue:"Web-Apps"}),description:e("home.partners.webApps.desc",{defaultValue:"Tools für Team und Kunden"}),icon:d.jsx(gg,{}),iconColor:"#85C1E9",iconBg:"rgba(133,193,233,.2)"},{group:e("home.groups.services",{defaultValue:"Leistungen"}),label:e("home.partners.aiIntegration.title",{defaultValue:"AI Integration"}),description:e("home.partners.aiIntegration.desc",{defaultValue:"Chatbot für Fragen und Leads"}),icon:d.jsx(ns,{}),iconColor:"#F7DC6F",iconBg:"rgba(247,220,111,.2)"},{group:e("home.groups.services",{defaultValue:"Leistungen"}),label:e("home.partners.socialMedia.title",{defaultValue:"Social Media"}),description:e("home.partners.socialMedia.desc",{defaultValue:"Website + Instagram/Meta verbunden"}),icon:d.jsx(e3,{}),iconColor:"#5DADE2",iconBg:"rgba(93,173,226,.2)"},{group:e("home.groups.services",{defaultValue:"Leistungen"}),label:e("home.partners.socialAds.title",{defaultValue:"Social Ads"}),description:e("home.partners.socialAds.desc",{defaultValue:"Gezielte Werbung mit messbaren Ergebnissen"}),icon:d.jsx(pl,{}),iconColor:"#F1948A",iconBg:"rgba(241,148,138,.2)"}]}],[e]);return d.jsxs(ie.section,{className:"section",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:mt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.partnersSection.title",{defaultValue:"Vorteile und Einsatzbereiche"})}),d.jsx("p",{className:"section-description",children:e("home.partnersSection.desc",{defaultValue:"Welche Aufgaben wir abdecken und für welche lokalen Unternehmen wir am häufigsten Websites und Lead-Funnels umsetzen."})})]}),d.jsx(U3,{rows:t})]})};function sv(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function kg(e={},t={}){const a=["__proto__","constructor","prototype"];Object.keys(t).filter(i=>a.indexOf(i)<0).forEach(i=>{typeof e[i]>"u"?e[i]=t[i]:sv(t[i])&&sv(e[i])&&Object.keys(t[i]).length>0&&kg(e[i],t[i])})}const G3={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Zt(){const e=typeof document<"u"?document:{};return kg(e,G3),e}const WL={document:G3,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Rt(){const e=typeof window<"u"?window:{};return kg(e,WL),e}function QL(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function ZL(e){const t=e;Object.keys(t).forEach(a=>{try{t[a]=null}catch{}try{delete t[a]}catch{}})}function I3(e,t=0){return setTimeout(e,t)}function Du(){return Date.now()}function JL(e){const t=Rt();let a;return t.getComputedStyle&&(a=t.getComputedStyle(e,null)),!a&&e.currentStyle&&(a=e.currentStyle),a||(a=e.style),a}function eO(e,t="x"){const a=Rt();let i,o,l;const u=JL(e);return a.WebKitCSSMatrix?(o=u.transform||u.webkitTransform,o.split(",").length>6&&(o=o.split(", ").map(p=>p.replace(",",".")).join(", ")),l=new a.WebKitCSSMatrix(o==="none"?"":o)):(l=u.MozTransform||u.OTransform||u.MsTransform||u.msTransform||u.transform||u.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=l.toString().split(",")),t==="x"&&(a.WebKitCSSMatrix?o=l.m41:i.length===16?o=parseFloat(i[12]):o=parseFloat(i[4])),t==="y"&&(a.WebKitCSSMatrix?o=l.m42:i.length===16?o=parseFloat(i[13]):o=parseFloat(i[5])),o||0}function $c(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function tO(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function fn(...e){const t=Object(e[0]);for(let a=1;a<e.length;a+=1){const i=e[a];if(i!=null&&!tO(i)){const o=Object.keys(Object(i)).filter(l=>l!=="__proto__"&&l!=="constructor"&&l!=="prototype");for(let l=0,u=o.length;l<u;l+=1){const p=o[l],f=Object.getOwnPropertyDescriptor(i,p);f!==void 0&&f.enumerable&&($c(t[p])&&$c(i[p])?i[p].__swiper__?t[p]=i[p]:fn(t[p],i[p]):!$c(t[p])&&$c(i[p])?(t[p]={},i[p].__swiper__?t[p]=i[p]:fn(t[p],i[p])):t[p]=i[p])}}}return t}function Hr(e,t,a){e.style.setProperty(t,a)}function F3({swiper:e,targetPosition:t,side:a}){const i=Rt(),o=-e.translate;let l=null,u;const p=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);const f=t>o?"next":"prev",m=(x,y)=>f==="next"&&x>=y||f==="prev"&&x<=y,g=()=>{u=new Date().getTime(),l===null&&(l=u);const x=Math.max(Math.min((u-l)/p,1),0),y=.5-Math.cos(x*Math.PI)/2;let v=o+y*(t-o);if(m(v,t)&&(v=t),e.wrapperEl.scrollTo({[a]:v}),m(v,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[a]:v})}),i.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=i.requestAnimationFrame(g)};g()}function q3(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function za(e,t=""){const a=Rt(),i=[...e.children];return a.HTMLSlotElement&&e instanceof HTMLSlotElement&&i.push(...e.assignedElements()),t?i.filter(o=>o.matches(t)):i}function nO(e,t){const a=[t];for(;a.length>0;){const i=a.shift();if(e===i)return!0;a.push(...i.children,...i.shadowRoot?i.shadowRoot.children:[],...i.assignedElements?i.assignedElements():[])}}function aO(e,t){const a=Rt();let i=t.contains(e);return!i&&a.HTMLSlotElement&&t instanceof HTMLSlotElement&&(i=[...t.assignedElements()].includes(e),i||(i=nO(e,t))),i}function Pu(e){try{console.warn(e);return}catch{}}function Vu(e,t=[]){const a=document.createElement(e);return a.classList.add(...Array.isArray(t)?t:QL(t)),a}function iO(e){const t=Rt(),a=Zt(),i=e.getBoundingClientRect(),o=a.body,l=e.clientTop||o.clientTop||0,u=e.clientLeft||o.clientLeft||0,p=e===t?t.scrollY:e.scrollTop,f=e===t?t.scrollX:e.scrollLeft;return{top:i.top+p-l,left:i.left+f-u}}function rO(e,t){const a=[];for(;e.previousElementSibling;){const i=e.previousElementSibling;t?i.matches(t)&&a.push(i):a.push(i),e=i}return a}function sO(e,t){const a=[];for(;e.nextElementSibling;){const i=e.nextElementSibling;t?i.matches(t)&&a.push(i):a.push(i),e=i}return a}function ci(e,t){return Rt().getComputedStyle(e,null).getPropertyValue(t)}function mm(e){let t=e,a;if(t){for(a=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(a+=1);return a}}function gm(e,t){const a=[];let i=e.parentElement;for(;i;)t?i.matches(t)&&a.push(i):a.push(i),i=i.parentElement;return a}function oO(e,t){function a(i){i.target===e&&(t.call(e,i),e.removeEventListener("transitionend",a))}t&&e.addEventListener("transitionend",a)}function ov(e,t,a){const i=Rt();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function St(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function bm(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:a=>a}).createHTML(t):e.innerHTML=t}let ah;function lO(){const e=Rt(),t=Zt();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function K3(){return ah||(ah=lO()),ah}let ih;function cO({userAgent:e}={}){const t=K3(),a=Rt(),i=a.navigator.platform,o=e||a.navigator.userAgent,l={ios:!1,android:!1},u=a.screen.width,p=a.screen.height,f=o.match(/(Android);?[\s\/]+([\d.]+)?/);let m=o.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const g=o.match(/(iPod)(.*OS\s([\d_]+))?/),x=!m&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),y=i==="Win32";let v=i==="MacIntel";const S=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!m&&v&&t.touch&&S.indexOf(`${u}x${p}`)>=0&&(m=o.match(/(Version)\/([\d.]+)/),m||(m=[0,1,"13_0_0"]),v=!1),f&&!y&&(l.os="android",l.android=!0),(m||x||g)&&(l.os="ios",l.ios=!0),l}function Y3(e={}){return ih||(ih=cO(e)),ih}let rh;function uO(){const e=Rt(),t=Y3();let a=!1;function i(){const p=e.navigator.userAgent.toLowerCase();return p.indexOf("safari")>=0&&p.indexOf("chrome")<0&&p.indexOf("android")<0}if(i()){const p=String(e.navigator.userAgent);if(p.includes("Version/")){const[f,m]=p.split("Version/")[1].split(" ")[0].split(".").map(g=>Number(g));a=f<16||f===16&&m<2}}const o=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),l=i(),u=l||o&&t.ios;return{isSafari:a||l,needPerspectiveFix:a,need3dFix:u,isWebView:o}}function X3(){return rh||(rh=uO()),rh}function dO({swiper:e,on:t,emit:a}){const i=Rt();let o=null,l=null;const u=()=>{!e||e.destroyed||!e.initialized||(a("beforeResize"),a("resize"))},p=()=>{!e||e.destroyed||!e.initialized||(o=new ResizeObserver(g=>{l=i.requestAnimationFrame(()=>{const{width:x,height:y}=e;let v=x,S=y;g.forEach(({contentBoxSize:k,contentRect:C,target:M})=>{M&&M!==e.el||(v=C?C.width:(k[0]||k).inlineSize,S=C?C.height:(k[0]||k).blockSize)}),(v!==x||S!==y)&&u()})}),o.observe(e.el))},f=()=>{l&&i.cancelAnimationFrame(l),o&&o.unobserve&&e.el&&(o.unobserve(e.el),o=null)},m=()=>{!e||e.destroyed||!e.initialized||a("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof i.ResizeObserver<"u"){p();return}i.addEventListener("resize",u),i.addEventListener("orientationchange",m)}),t("destroy",()=>{f(),i.removeEventListener("resize",u),i.removeEventListener("orientationchange",m)})}function fO({swiper:e,extendParams:t,on:a,emit:i}){const o=[],l=Rt(),u=(m,g={})=>{const x=l.MutationObserver||l.WebkitMutationObserver,y=new x(v=>{if(e.__preventObserver__)return;if(v.length===1){i("observerUpdate",v[0]);return}const S=function(){i("observerUpdate",v[0])};l.requestAnimationFrame?l.requestAnimationFrame(S):l.setTimeout(S,0)});y.observe(m,{attributes:typeof g.attributes>"u"?!0:g.attributes,childList:e.isElement||(typeof g.childList>"u"?!0:g).childList,characterData:typeof g.characterData>"u"?!0:g.characterData}),o.push(y)},p=()=>{if(e.params.observer){if(e.params.observeParents){const m=gm(e.hostEl);for(let g=0;g<m.length;g+=1)u(m[g])}u(e.hostEl,{childList:e.params.observeSlideChildren}),u(e.wrapperEl,{attributes:!1})}},f=()=>{o.forEach(m=>{m.disconnect()}),o.splice(0,o.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",p),a("destroy",f)}var pO={on(e,t,a){const i=this;if(!i.eventsListeners||i.destroyed||typeof t!="function")return i;const o=a?"unshift":"push";return e.split(" ").forEach(l=>{i.eventsListeners[l]||(i.eventsListeners[l]=[]),i.eventsListeners[l][o](t)}),i},once(e,t,a){const i=this;if(!i.eventsListeners||i.destroyed||typeof t!="function")return i;function o(...l){i.off(e,o),o.__emitterProxy&&delete o.__emitterProxy,t.apply(i,l)}return o.__emitterProxy=t,i.on(e,o,a)},onAny(e,t){const a=this;if(!a.eventsListeners||a.destroyed||typeof e!="function")return a;const i=t?"unshift":"push";return a.eventsAnyListeners.indexOf(e)<0&&a.eventsAnyListeners[i](e),a},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const a=t.eventsAnyListeners.indexOf(e);return a>=0&&t.eventsAnyListeners.splice(a,1),t},off(e,t){const a=this;return!a.eventsListeners||a.destroyed||!a.eventsListeners||e.split(" ").forEach(i=>{typeof t>"u"?a.eventsListeners[i]=[]:a.eventsListeners[i]&&a.eventsListeners[i].forEach((o,l)=>{(o===t||o.__emitterProxy&&o.__emitterProxy===t)&&a.eventsListeners[i].splice(l,1)})}),a},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let a,i,o;return typeof e[0]=="string"||Array.isArray(e[0])?(a=e[0],i=e.slice(1,e.length),o=t):(a=e[0].events,i=e[0].data,o=e[0].context||t),i.unshift(o),(Array.isArray(a)?a:a.split(" ")).forEach(u=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(p=>{p.apply(o,[u,...i])}),t.eventsListeners&&t.eventsListeners[u]&&t.eventsListeners[u].forEach(p=>{p.apply(o,i)})}),t}};function hO(){const e=this;let t,a;const i=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=i.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?a=e.params.height:a=i.clientHeight,!(t===0&&e.isHorizontal()||a===0&&e.isVertical())&&(t=t-parseInt(ci(i,"padding-left")||0,10)-parseInt(ci(i,"padding-right")||0,10),a=a-parseInt(ci(i,"padding-top")||0,10)-parseInt(ci(i,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(a)&&(a=0),Object.assign(e,{width:t,height:a,size:e.isHorizontal()?t:a}))}function mO(){const e=this;function t(J,H){return parseFloat(J.getPropertyValue(e.getDirectionLabel(H))||0)}const a=e.params,{wrapperEl:i,slidesEl:o,rtlTranslate:l,wrongRTL:u}=e,p=e.virtual&&a.virtual.enabled,f=p?e.virtual.slides.length:e.slides.length,m=za(o,`.${e.params.slideClass}, swiper-slide`),g=p?e.virtual.slides.length:m.length;let x=[];const y=[],v=[];let S=a.slidesOffsetBefore;typeof S=="function"&&(S=a.slidesOffsetBefore.call(e));let k=a.slidesOffsetAfter;typeof k=="function"&&(k=a.slidesOffsetAfter.call(e));const C=e.snapGrid.length,M=e.slidesGrid.length,z=e.size-S-k;let A=a.spaceBetween,$=-S,E=0,V=0;if(typeof z>"u")return;typeof A=="string"&&A.indexOf("%")>=0?A=parseFloat(A.replace("%",""))/100*z:typeof A=="string"&&(A=parseFloat(A)),e.virtualSize=-A-S-k,m.forEach(J=>{l?J.style.marginLeft="":J.style.marginRight="",J.style.marginBottom="",J.style.marginTop=""}),a.centeredSlides&&a.cssMode&&(Hr(i,"--swiper-centered-offset-before",""),Hr(i,"--swiper-centered-offset-after","")),a.cssMode&&(Hr(i,"--swiper-slides-offset-before",`${S}px`),Hr(i,"--swiper-slides-offset-after",`${k}px`));const N=a.grid&&a.grid.rows>1&&e.grid;N?e.grid.initSlides(m):e.grid&&e.grid.unsetSlides();let O;const X=a.slidesPerView==="auto"&&a.breakpoints&&Object.keys(a.breakpoints).filter(J=>typeof a.breakpoints[J].slidesPerView<"u").length>0;for(let J=0;J<g;J+=1){O=0;const H=m[J];if(!(H&&(N&&e.grid.updateSlide(J,H,m),ci(H,"display")==="none"))){if(p&&a.slidesPerView==="auto")a.virtual.slidesPerViewAutoSlideSize&&(O=a.virtual.slidesPerViewAutoSlideSize),O&&H&&(a.roundLengths&&(O=Math.floor(O)),H.style[e.getDirectionLabel("width")]=`${O}px`);else if(a.slidesPerView==="auto"){X&&(H.style[e.getDirectionLabel("width")]="");const te=getComputedStyle(H),ce=H.style.transform,le=H.style.webkitTransform;if(ce&&(H.style.transform="none"),le&&(H.style.webkitTransform="none"),a.roundLengths)O=e.isHorizontal()?ov(H,"width"):ov(H,"height");else{const oe=t(te,"width"),D=t(te,"padding-left"),B=t(te,"padding-right"),G=t(te,"margin-left"),Z=t(te,"margin-right"),L=te.getPropertyValue("box-sizing");if(L&&L==="border-box")O=oe+G+Z;else{const{clientWidth:Y,offsetWidth:ne}=H;O=oe+D+B+G+Z+(ne-Y)}}ce&&(H.style.transform=ce),le&&(H.style.webkitTransform=le),a.roundLengths&&(O=Math.floor(O))}else O=(z-(a.slidesPerView-1)*A)/a.slidesPerView,a.roundLengths&&(O=Math.floor(O)),H&&(H.style[e.getDirectionLabel("width")]=`${O}px`);H&&(H.swiperSlideSize=O),v.push(O),a.centeredSlides?($=$+O/2+E/2+A,E===0&&J!==0&&($=$-z/2-A),J===0&&($=$-z/2-A),Math.abs($)<1/1e3&&($=0),a.roundLengths&&($=Math.floor($)),V%a.slidesPerGroup===0&&x.push($),y.push($)):(a.roundLengths&&($=Math.floor($)),(V-Math.min(e.params.slidesPerGroupSkip,V))%e.params.slidesPerGroup===0&&x.push($),y.push($),$=$+O+A),e.virtualSize+=O+A,E=O,V+=1}}if(e.virtualSize=Math.max(e.virtualSize,z)+k,l&&u&&(a.effect==="slide"||a.effect==="coverflow")&&(i.style.width=`${e.virtualSize+A}px`),a.setWrapperSize&&(i.style[e.getDirectionLabel("width")]=`${e.virtualSize+A}px`),N&&e.grid.updateWrapperSize(O,x),!a.centeredSlides){const J=a.slidesPerView!=="auto"&&a.slidesPerView%1!==0,H=a.snapToSlideEdge&&!a.loop&&(a.slidesPerView==="auto"||J);let te=x.length;if(H){let le;if(a.slidesPerView==="auto"){le=1;let oe=0;for(let D=v.length-1;D>=0&&(oe+=v[D]+(D<v.length-1?A:0),oe<=z);D-=1)le=v.length-D}else le=Math.floor(a.slidesPerView);te=Math.max(g-le,0)}const ce=[];for(let le=0;le<x.length;le+=1){let oe=x[le];a.roundLengths&&(oe=Math.floor(oe)),H?le<=te&&ce.push(oe):x[le]<=e.virtualSize-z&&ce.push(oe)}x=ce,Math.floor(e.virtualSize-z)-Math.floor(x[x.length-1])>1&&(H||x.push(e.virtualSize-z))}if(p&&a.loop){const J=v[0]+A;if(a.slidesPerGroup>1){const H=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/a.slidesPerGroup),te=J*a.slidesPerGroup;for(let ce=0;ce<H;ce+=1)x.push(x[x.length-1]+te)}for(let H=0;H<e.virtual.slidesBefore+e.virtual.slidesAfter;H+=1)a.slidesPerGroup===1&&x.push(x[x.length-1]+J),y.push(y[y.length-1]+J),e.virtualSize+=J}if(x.length===0&&(x=[0]),A!==0){const J=e.isHorizontal()&&l?"marginLeft":e.getDirectionLabel("marginRight");m.filter((H,te)=>!a.cssMode||a.loop?!0:te!==m.length-1).forEach(H=>{H.style[J]=`${A}px`})}if(a.centeredSlides&&a.centeredSlidesBounds){let J=0;v.forEach(te=>{J+=te+(A||0)}),J-=A;const H=J>z?J-z:0;x=x.map(te=>te<=0?-S:te>H?H+k:te)}if(a.centerInsufficientSlides){let J=0;if(v.forEach(H=>{J+=H+(A||0)}),J-=A,J<z){const H=(z-J)/2;x.forEach((te,ce)=>{x[ce]=te-H}),y.forEach((te,ce)=>{y[ce]=te+H})}}if(Object.assign(e,{slides:m,snapGrid:x,slidesGrid:y,slidesSizesGrid:v}),a.centeredSlides&&a.cssMode&&!a.centeredSlidesBounds){Hr(i,"--swiper-centered-offset-before",`${-x[0]}px`),Hr(i,"--swiper-centered-offset-after",`${e.size/2-v[v.length-1]/2}px`);const J=-e.snapGrid[0],H=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(te=>te+J),e.slidesGrid=e.slidesGrid.map(te=>te+H)}if(g!==f&&e.emit("slidesLengthChange"),x.length!==C&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),y.length!==M&&e.emit("slidesGridLengthChange"),a.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!p&&!a.cssMode&&(a.effect==="slide"||a.effect==="fade")){const J=`${a.containerModifierClass}backface-hidden`,H=e.el.classList.contains(J);g<=a.maxBackfaceHiddenSlides?H||e.el.classList.add(J):H&&e.el.classList.remove(J)}}function gO(e){const t=this,a=[],i=t.virtual&&t.params.virtual.enabled;let o=0,l;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const u=p=>i?t.slides[t.getSlideIndexByData(p)]:t.slides[p];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(p=>{a.push(p)});else for(l=0;l<Math.ceil(t.params.slidesPerView);l+=1){const p=t.activeIndex+l;if(p>t.slides.length&&!i)break;a.push(u(p))}else a.push(u(t.activeIndex));for(l=0;l<a.length;l+=1)if(typeof a[l]<"u"){const p=a[l].offsetHeight;o=p>o?p:o}(o||o===0)&&(t.wrapperEl.style.height=`${o}px`)}function bO(){const e=this,t=e.slides,a=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let i=0;i<t.length;i+=1)t[i].swiperSlideOffset=(e.isHorizontal()?t[i].offsetLeft:t[i].offsetTop)-a-e.cssOverflowAdjustment()}const lv=(e,t,a)=>{t&&!e.classList.contains(a)?e.classList.add(a):!t&&e.classList.contains(a)&&e.classList.remove(a)};function xO(e=this&&this.translate||0){const t=this,a=t.params,{slides:i,rtlTranslate:o,snapGrid:l}=t;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let u=-e;o&&(u=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let p=a.spaceBetween;typeof p=="string"&&p.indexOf("%")>=0?p=parseFloat(p.replace("%",""))/100*t.size:typeof p=="string"&&(p=parseFloat(p));for(let f=0;f<i.length;f+=1){const m=i[f];let g=m.swiperSlideOffset;a.cssMode&&a.centeredSlides&&(g-=i[0].swiperSlideOffset);const x=(u+(a.centeredSlides?t.minTranslate():0)-g)/(m.swiperSlideSize+p),y=(u-l[0]+(a.centeredSlides?t.minTranslate():0)-g)/(m.swiperSlideSize+p),v=-(u-g),S=v+t.slidesSizesGrid[f],k=v>=0&&v<=t.size-t.slidesSizesGrid[f],C=v>=0&&v<t.size-1||S>1&&S<=t.size||v<=0&&S>=t.size;C&&(t.visibleSlides.push(m),t.visibleSlidesIndexes.push(f)),lv(m,C,a.slideVisibleClass),lv(m,k,a.slideFullyVisibleClass),m.progress=o?-x:x,m.originalProgress=o?-y:y}}function yO(e){const t=this;if(typeof e>"u"){const g=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*g||0}const a=t.params,i=t.maxTranslate()-t.minTranslate();let{progress:o,isBeginning:l,isEnd:u,progressLoop:p}=t;const f=l,m=u;if(i===0)o=0,l=!0,u=!0;else{o=(e-t.minTranslate())/i;const g=Math.abs(e-t.minTranslate())<1,x=Math.abs(e-t.maxTranslate())<1;l=g||o<=0,u=x||o>=1,g&&(o=0),x&&(o=1)}if(a.loop){const g=t.getSlideIndexByData(0),x=t.getSlideIndexByData(t.slides.length-1),y=t.slidesGrid[g],v=t.slidesGrid[x],S=t.slidesGrid[t.slidesGrid.length-1],k=Math.abs(e);k>=y?p=(k-y)/S:p=(k+S-v)/S,p>1&&(p-=1)}Object.assign(t,{progress:o,progressLoop:p,isBeginning:l,isEnd:u}),(a.watchSlidesProgress||a.centeredSlides&&a.autoHeight)&&t.updateSlidesProgress(e),l&&!f&&t.emit("reachBeginning toEdge"),u&&!m&&t.emit("reachEnd toEdge"),(f&&!l||m&&!u)&&t.emit("fromEdge"),t.emit("progress",o)}const sh=(e,t,a)=>{t&&!e.classList.contains(a)?e.classList.add(a):!t&&e.classList.contains(a)&&e.classList.remove(a)};function vO(){const e=this,{slides:t,params:a,slidesEl:i,activeIndex:o}=e,l=e.virtual&&a.virtual.enabled,u=e.grid&&a.grid&&a.grid.rows>1,p=x=>za(i,`.${a.slideClass}${x}, swiper-slide${x}`)[0];let f,m,g;if(l)if(a.loop){let x=o-e.virtual.slidesBefore;x<0&&(x=e.virtual.slides.length+x),x>=e.virtual.slides.length&&(x-=e.virtual.slides.length),f=p(`[data-swiper-slide-index="${x}"]`)}else f=p(`[data-swiper-slide-index="${o}"]`);else u?(f=t.find(x=>x.column===o),g=t.find(x=>x.column===o+1),m=t.find(x=>x.column===o-1)):f=t[o];f&&(u||(g=sO(f,`.${a.slideClass}, swiper-slide`)[0],a.loop&&!g&&(g=t[0]),m=rO(f,`.${a.slideClass}, swiper-slide`)[0],a.loop&&!m===0&&(m=t[t.length-1]))),t.forEach(x=>{sh(x,x===f,a.slideActiveClass),sh(x,x===g,a.slideNextClass),sh(x,x===m,a.slidePrevClass)}),e.emitSlidesClasses()}const du=(e,t)=>{if(!e||e.destroyed||!e.params)return;const a=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,i=t.closest(a());if(i){let o=i.querySelector(`.${e.params.lazyPreloaderClass}`);!o&&e.isElement&&(i.shadowRoot?o=i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(o=i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),o&&!o.lazyPreloaderManaged&&o.remove())})),o&&!o.lazyPreloaderManaged&&o.remove()}},oh=(e,t)=>{if(!e.slides[t])return;const a=e.slides[t].querySelector('[loading="lazy"]');a&&a.removeAttribute("loading")},xm=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const a=e.slides.length;if(!a||!t||t<0)return;t=Math.min(t,a);const i=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),o=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const u=o,p=[u-t];p.push(...Array.from({length:t}).map((f,m)=>u+i+m)),e.slides.forEach((f,m)=>{p.includes(f.column)&&oh(e,m)});return}const l=o+i-1;if(e.params.rewind||e.params.loop)for(let u=o-t;u<=l+t;u+=1){const p=(u%a+a)%a;(p<o||p>l)&&oh(e,p)}else for(let u=Math.max(o-t,0);u<=Math.min(l+t,a-1);u+=1)u!==o&&(u>l||u<o)&&oh(e,u)};function wO(e){const{slidesGrid:t,params:a}=e,i=e.rtlTranslate?e.translate:-e.translate;let o;for(let l=0;l<t.length;l+=1)typeof t[l+1]<"u"?i>=t[l]&&i<t[l+1]-(t[l+1]-t[l])/2?o=l:i>=t[l]&&i<t[l+1]&&(o=l+1):i>=t[l]&&(o=l);return a.normalizeSlideIndex&&(o<0||typeof o>"u")&&(o=0),o}function SO(e){const t=this,a=t.rtlTranslate?t.translate:-t.translate,{snapGrid:i,params:o,activeIndex:l,realIndex:u,snapIndex:p}=t;let f=e,m;const g=v=>{let S=v-t.virtual.slidesBefore;return S<0&&(S=t.virtual.slides.length+S),S>=t.virtual.slides.length&&(S-=t.virtual.slides.length),S};if(typeof f>"u"&&(f=wO(t)),i.indexOf(a)>=0)m=i.indexOf(a);else{const v=Math.min(o.slidesPerGroupSkip,f);m=v+Math.floor((f-v)/o.slidesPerGroup)}if(m>=i.length&&(m=i.length-1),f===l&&!t.params.loop){m!==p&&(t.snapIndex=m,t.emit("snapIndexChange"));return}if(f===l&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=g(f);return}const x=t.grid&&o.grid&&o.grid.rows>1;let y;if(t.virtual&&o.virtual.enabled)o.loop?y=g(f):y=f;else if(x){const v=t.slides.find(k=>k.column===f);let S=parseInt(v.getAttribute("data-swiper-slide-index"),10);Number.isNaN(S)&&(S=Math.max(t.slides.indexOf(v),0)),y=Math.floor(S/o.grid.rows)}else if(t.slides[f]){const v=t.slides[f].getAttribute("data-swiper-slide-index");v?y=parseInt(v,10):y=f}else y=f;Object.assign(t,{previousSnapIndex:p,snapIndex:m,previousRealIndex:u,realIndex:y,previousIndex:l,activeIndex:f}),t.initialized&&xm(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(u!==y&&t.emit("realIndexChange"),t.emit("slideChange"))}function kO(e,t){const a=this,i=a.params;let o=e.closest(`.${i.slideClass}, swiper-slide`);!o&&a.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(p=>{!o&&p.matches&&p.matches(`.${i.slideClass}, swiper-slide`)&&(o=p)});let l=!1,u;if(o){for(let p=0;p<a.slides.length;p+=1)if(a.slides[p]===o){l=!0,u=p;break}}if(o&&l)a.clickedSlide=o,a.virtual&&a.params.virtual.enabled?a.clickedIndex=parseInt(o.getAttribute("data-swiper-slide-index"),10):a.clickedIndex=u;else{a.clickedSlide=void 0,a.clickedIndex=void 0;return}i.slideToClickedSlide&&a.clickedIndex!==void 0&&a.clickedIndex!==a.activeIndex&&a.slideToClickedSlide()}var TO={updateSize:hO,updateSlides:mO,updateAutoHeight:gO,updateSlidesOffset:bO,updateSlidesProgress:xO,updateProgress:yO,updateSlidesClasses:vO,updateActiveIndex:SO,updateClickedSlide:kO};function jO(e=this.isHorizontal()?"x":"y"){const t=this,{params:a,rtlTranslate:i,translate:o,wrapperEl:l}=t;if(a.virtualTranslate)return i?-o:o;if(a.cssMode)return o;let u=eO(l,e);return u+=t.cssOverflowAdjustment(),i&&(u=-u),u||0}function AO(e,t){const a=this,{rtlTranslate:i,params:o,wrapperEl:l,progress:u}=a;let p=0,f=0;const m=0;a.isHorizontal()?p=i?-e:e:f=e,o.roundLengths&&(p=Math.floor(p),f=Math.floor(f)),a.previousTranslate=a.translate,a.translate=a.isHorizontal()?p:f,o.cssMode?l[a.isHorizontal()?"scrollLeft":"scrollTop"]=a.isHorizontal()?-p:-f:o.virtualTranslate||(a.isHorizontal()?p-=a.cssOverflowAdjustment():f-=a.cssOverflowAdjustment(),l.style.transform=`translate3d(${p}px, ${f}px, ${m}px)`);let g;const x=a.maxTranslate()-a.minTranslate();x===0?g=0:g=(e-a.minTranslate())/x,g!==u&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)}function CO(){return-this.snapGrid[0]}function EO(){return-this.snapGrid[this.snapGrid.length-1]}function MO(e=0,t=this.params.speed,a=!0,i=!0,o){const l=this,{params:u,wrapperEl:p}=l;if(l.animating&&u.preventInteractionOnTransition)return!1;const f=l.minTranslate(),m=l.maxTranslate();let g;if(i&&e>f?g=f:i&&e<m?g=m:g=e,l.updateProgress(g),u.cssMode){const x=l.isHorizontal();if(t===0)p[x?"scrollLeft":"scrollTop"]=-g;else{if(!l.support.smoothScroll)return F3({swiper:l,targetPosition:-g,side:x?"left":"top"}),!0;p.scrollTo({[x?"left":"top"]:-g,behavior:"smooth"})}return!0}return t===0?(l.setTransition(0),l.setTranslate(g),a&&(l.emit("beforeTransitionStart",t,o),l.emit("transitionEnd"))):(l.setTransition(t),l.setTranslate(g),a&&(l.emit("beforeTransitionStart",t,o),l.emit("transitionStart")),l.animating||(l.animating=!0,l.onTranslateToWrapperTransitionEnd||(l.onTranslateToWrapperTransitionEnd=function(y){!l||l.destroyed||y.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onTranslateToWrapperTransitionEnd),l.onTranslateToWrapperTransitionEnd=null,delete l.onTranslateToWrapperTransitionEnd,l.animating=!1,a&&l.emit("transitionEnd"))}),l.wrapperEl.addEventListener("transitionend",l.onTranslateToWrapperTransitionEnd))),!0}var zO={getTranslate:jO,setTranslate:AO,minTranslate:CO,maxTranslate:EO,translateTo:MO};function RO(e,t){const a=this;a.params.cssMode||(a.wrapperEl.style.transitionDuration=`${e}ms`,a.wrapperEl.style.transitionDelay=e===0?"0ms":""),a.emit("setTransition",e,t)}function W3({swiper:e,runCallbacks:t,direction:a,step:i}){const{activeIndex:o,previousIndex:l}=e;let u=a;u||(o>l?u="next":o<l?u="prev":u="reset"),e.emit(`transition${i}`),t&&u==="reset"?e.emit(`slideResetTransition${i}`):t&&o!==l&&(e.emit(`slideChangeTransition${i}`),u==="next"?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`))}function LO(e=!0,t){const a=this,{params:i}=a;i.cssMode||(i.autoHeight&&a.updateAutoHeight(),W3({swiper:a,runCallbacks:e,direction:t,step:"Start"}))}function OO(e=!0,t){const a=this,{params:i}=a;a.animating=!1,!i.cssMode&&(a.setTransition(0),W3({swiper:a,runCallbacks:e,direction:t,step:"End"}))}var DO={setTransition:RO,transitionStart:LO,transitionEnd:OO};function PO(e=0,t,a=!0,i,o){typeof e=="string"&&(e=parseInt(e,10));const l=this;let u=e;u<0&&(u=0);const{params:p,snapGrid:f,slidesGrid:m,previousIndex:g,activeIndex:x,rtlTranslate:y,wrapperEl:v,enabled:S}=l;if(!S&&!i&&!o||l.destroyed||l.animating&&p.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=l.params.speed);const k=Math.min(l.params.slidesPerGroupSkip,u);let C=k+Math.floor((u-k)/l.params.slidesPerGroup);C>=f.length&&(C=f.length-1);const M=-f[C];if(p.normalizeSlideIndex)for(let N=0;N<m.length;N+=1){const O=-Math.floor(M*100),X=Math.floor(m[N]*100),J=Math.floor(m[N+1]*100);typeof m[N+1]<"u"?O>=X&&O<J-(J-X)/2?u=N:O>=X&&O<J&&(u=N+1):O>=X&&(u=N)}if(l.initialized&&u!==x&&(!l.allowSlideNext&&(y?M>l.translate&&M>l.minTranslate():M<l.translate&&M<l.minTranslate())||!l.allowSlidePrev&&M>l.translate&&M>l.maxTranslate()&&(x||0)!==u))return!1;u!==(g||0)&&a&&l.emit("beforeSlideChangeStart"),l.updateProgress(M);let z;u>x?z="next":u<x?z="prev":z="reset";const A=l.virtual&&l.params.virtual.enabled;if(!(A&&o)&&(y&&-M===l.translate||!y&&M===l.translate))return l.updateActiveIndex(u),p.autoHeight&&l.updateAutoHeight(),l.updateSlidesClasses(),p.effect!=="slide"&&l.setTranslate(M),z!=="reset"&&(l.transitionStart(a,z),l.transitionEnd(a,z)),!1;if(p.cssMode){const N=l.isHorizontal(),O=y?M:-M;if(t===0)A&&(l.wrapperEl.style.scrollSnapType="none",l._immediateVirtual=!0),A&&!l._cssModeVirtualInitialSet&&l.params.initialSlide>0?(l._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{v[N?"scrollLeft":"scrollTop"]=O})):v[N?"scrollLeft":"scrollTop"]=O,A&&requestAnimationFrame(()=>{l.wrapperEl.style.scrollSnapType="",l._immediateVirtual=!1});else{if(!l.support.smoothScroll)return F3({swiper:l,targetPosition:O,side:N?"left":"top"}),!0;v.scrollTo({[N?"left":"top"]:O,behavior:"smooth"})}return!0}const V=X3().isSafari;return A&&!o&&V&&l.isElement&&l.virtual.update(!1,!1,u),l.setTransition(t),l.setTranslate(M),l.updateActiveIndex(u),l.updateSlidesClasses(),l.emit("beforeTransitionStart",t,i),l.transitionStart(a,z),t===0?l.transitionEnd(a,z):l.animating||(l.animating=!0,l.onSlideToWrapperTransitionEnd||(l.onSlideToWrapperTransitionEnd=function(O){!l||l.destroyed||O.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onSlideToWrapperTransitionEnd),l.onSlideToWrapperTransitionEnd=null,delete l.onSlideToWrapperTransitionEnd,l.transitionEnd(a,z))}),l.wrapperEl.addEventListener("transitionend",l.onSlideToWrapperTransitionEnd)),!0}function VO(e=0,t,a=!0,i){typeof e=="string"&&(e=parseInt(e,10));const o=this;if(o.destroyed)return;typeof t>"u"&&(t=o.params.speed);const l=o.grid&&o.params.grid&&o.params.grid.rows>1;let u=e;if(o.params.loop)if(o.virtual&&o.params.virtual.enabled)u=u+o.virtual.slidesBefore;else{let p;if(l){const k=u*o.params.grid.rows;p=o.slides.find(C=>C.getAttribute("data-swiper-slide-index")*1===k).column}else p=o.getSlideIndexByData(u);const f=l?Math.ceil(o.slides.length/o.params.grid.rows):o.slides.length,{centeredSlides:m,slidesOffsetBefore:g,slidesOffsetAfter:x}=o.params,y=m||!!g||!!x;let v=o.params.slidesPerView;v==="auto"?v=o.slidesPerViewDynamic():(v=Math.ceil(parseFloat(o.params.slidesPerView,10)),y&&v%2===0&&(v=v+1));let S=f-p<v;if(y&&(S=S||p<Math.ceil(v/2)),i&&y&&o.params.slidesPerView!=="auto"&&!l&&(S=!1),S){const k=y?p<o.activeIndex?"prev":"next":p-o.activeIndex-1<o.params.slidesPerView?"next":"prev";o.loopFix({direction:k,slideTo:!0,activeSlideIndex:k==="next"?p+1:p-f+1,slideRealIndex:k==="next"?o.realIndex:void 0})}if(l){const k=u*o.params.grid.rows;u=o.slides.find(C=>C.getAttribute("data-swiper-slide-index")*1===k).column}else u=o.getSlideIndexByData(u)}return requestAnimationFrame(()=>{o.slideTo(u,t,a,i)}),o}function NO(e,t=!0,a){const i=this,{enabled:o,params:l,animating:u}=i;if(!o||i.destroyed)return i;typeof e>"u"&&(e=i.params.speed);let p=l.slidesPerGroup;l.slidesPerView==="auto"&&l.slidesPerGroup===1&&l.slidesPerGroupAuto&&(p=Math.max(i.slidesPerViewDynamic("current",!0),1));const f=i.activeIndex<l.slidesPerGroupSkip?1:p,m=i.virtual&&l.virtual.enabled;if(l.loop){if(u&&!m&&l.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&l.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+f,e,t,a)}),!0}return l.rewind&&i.isEnd?i.slideTo(0,e,t,a):i.slideTo(i.activeIndex+f,e,t,a)}function BO(e,t=!0,a){const i=this,{params:o,snapGrid:l,slidesGrid:u,rtlTranslate:p,enabled:f,animating:m}=i;if(!f||i.destroyed)return i;typeof e>"u"&&(e=i.params.speed);const g=i.virtual&&o.virtual.enabled;if(o.loop){if(m&&!g&&o.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const x=p?i.translate:-i.translate;function y(z){return z<0?-Math.floor(Math.abs(z)):Math.floor(z)}const v=y(x),S=l.map(z=>y(z)),k=o.freeMode&&o.freeMode.enabled;let C=l[S.indexOf(v)-1];if(typeof C>"u"&&(o.cssMode||k)){let z;l.forEach((A,$)=>{v>=A&&(z=$)}),typeof z<"u"&&(C=k?l[z]:l[z>0?z-1:z])}let M=0;if(typeof C<"u"&&(M=u.indexOf(C),M<0&&(M=i.activeIndex-1),o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(M=M-i.slidesPerViewDynamic("previous",!0)+1,M=Math.max(M,0))),o.rewind&&i.isBeginning){const z=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(z,e,t,a)}else if(o.loop&&i.activeIndex===0&&o.cssMode)return requestAnimationFrame(()=>{i.slideTo(M,e,t,a)}),!0;return i.slideTo(M,e,t,a)}function _O(e,t=!0,a){const i=this;if(!i.destroyed)return typeof e>"u"&&(e=i.params.speed),i.slideTo(i.activeIndex,e,t,a)}function HO(e,t=!0,a,i=.5){const o=this;if(o.destroyed)return;typeof e>"u"&&(e=o.params.speed);let l=o.activeIndex;const u=Math.min(o.params.slidesPerGroupSkip,l),p=u+Math.floor((l-u)/o.params.slidesPerGroup),f=o.rtlTranslate?o.translate:-o.translate;if(f>=o.snapGrid[p]){const m=o.snapGrid[p],g=o.snapGrid[p+1];f-m>(g-m)*i&&(l+=o.params.slidesPerGroup)}else{const m=o.snapGrid[p-1],g=o.snapGrid[p];f-m<=(g-m)*i&&(l-=o.params.slidesPerGroup)}return l=Math.max(l,0),l=Math.min(l,o.slidesGrid.length-1),o.slideTo(l,e,t,a)}function $O(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:a}=e,i=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let o=e.getSlideIndexWhenGrid(e.clickedIndex),l;const u=e.isElement?"swiper-slide":`.${t.slideClass}`,p=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;l=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(l):o>(p?(e.slides.length-i)/2-(e.params.grid.rows-1):e.slides.length-i)?(e.loopFix(),o=e.getSlideIndex(za(a,`${u}[data-swiper-slide-index="${l}"]`)[0]),I3(()=>{e.slideTo(o)})):e.slideTo(o)}else e.slideTo(o)}var UO={slideTo:PO,slideToLoop:VO,slideNext:NO,slidePrev:BO,slideReset:_O,slideToClosest:HO,slideToClickedSlide:$O};function GO(e,t){const a=this,{params:i,slidesEl:o}=a;if(!i.loop||a.virtual&&a.params.virtual.enabled)return;const l=()=>{za(o,`.${i.slideClass}, swiper-slide`).forEach((S,k)=>{S.setAttribute("data-swiper-slide-index",k)})},u=()=>{const v=za(o,`.${i.slideBlankClass}`);v.forEach(S=>{S.remove()}),v.length>0&&(a.recalcSlides(),a.updateSlides())},p=a.grid&&i.grid&&i.grid.rows>1;i.loopAddBlankSlides&&(i.slidesPerGroup>1||p)&&u();const f=i.slidesPerGroup*(p?i.grid.rows:1),m=a.slides.length%f!==0,g=p&&a.slides.length%i.grid.rows!==0,x=v=>{for(let S=0;S<v;S+=1){const k=a.isElement?Vu("swiper-slide",[i.slideBlankClass]):Vu("div",[i.slideClass,i.slideBlankClass]);a.slidesEl.append(k)}};if(m){if(i.loopAddBlankSlides){const v=f-a.slides.length%f;x(v),a.recalcSlides(),a.updateSlides()}else Pu("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else if(g){if(i.loopAddBlankSlides){const v=i.grid.rows-a.slides.length%i.grid.rows;x(v),a.recalcSlides(),a.updateSlides()}else Pu("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else l();const y=i.centeredSlides||!!i.slidesOffsetBefore||!!i.slidesOffsetAfter;a.loopFix({slideRealIndex:e,direction:y?void 0:"next",initial:t})}function IO({slideRealIndex:e,slideTo:t=!0,direction:a,setTranslate:i,activeSlideIndex:o,initial:l,byController:u,byMousewheel:p}={}){const f=this;if(!f.params.loop)return;f.emit("beforeLoopFix");const{slides:m,allowSlidePrev:g,allowSlideNext:x,slidesEl:y,params:v}=f,{centeredSlides:S,slidesOffsetBefore:k,slidesOffsetAfter:C,initialSlide:M}=v,z=S||!!k||!!C;if(f.allowSlidePrev=!0,f.allowSlideNext=!0,f.virtual&&v.virtual.enabled){t&&(!z&&f.snapIndex===0?f.slideTo(f.virtual.slides.length,0,!1,!0):z&&f.snapIndex<v.slidesPerView?f.slideTo(f.virtual.slides.length+f.snapIndex,0,!1,!0):f.snapIndex===f.snapGrid.length-1&&f.slideTo(f.virtual.slidesBefore,0,!1,!0)),f.allowSlidePrev=g,f.allowSlideNext=x,f.emit("loopFix");return}let A=v.slidesPerView;A==="auto"?A=f.slidesPerViewDynamic():(A=Math.ceil(parseFloat(v.slidesPerView,10)),z&&A%2===0&&(A=A+1));const $=v.slidesPerGroupAuto?A:v.slidesPerGroup;let E=z?Math.max($,Math.ceil(A/2)):$;E%$!==0&&(E+=$-E%$),E+=v.loopAdditionalSlides,f.loopedSlides=E;const V=f.grid&&v.grid&&v.grid.rows>1;m.length<A+E||f.params.effect==="cards"&&m.length<A+E*2?Pu("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):V&&v.grid.fill==="row"&&Pu("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const N=[],O=[],X=V?Math.ceil(m.length/v.grid.rows):m.length,J=l&&X-M<A&&!z;let H=J?M:f.activeIndex;typeof o>"u"?o=f.getSlideIndex(m.find(G=>G.classList.contains(v.slideActiveClass))):H=o;const te=a==="next"||!a,ce=a==="prev"||!a;let le=0,oe=0;const B=(V?m[o].column:o)+(z&&typeof i>"u"?-A/2+.5:0);if(B<E){le=Math.max(E-B,$);for(let G=0;G<E-B;G+=1){const Z=G-Math.floor(G/X)*X;if(V){const L=X-Z-1;for(let Y=m.length-1;Y>=0;Y-=1)m[Y].column===L&&N.push(Y)}else N.push(X-Z-1)}}else if(B+A>X-E){oe=Math.max(B-(X-E*2),$),J&&(oe=Math.max(oe,A-X+M+1));for(let G=0;G<oe;G+=1){const Z=G-Math.floor(G/X)*X;V?m.forEach((L,Y)=>{L.column===Z&&O.push(Y)}):O.push(Z)}}if(f.__preventObserver__=!0,requestAnimationFrame(()=>{f.__preventObserver__=!1}),f.params.effect==="cards"&&m.length<A+E*2&&(O.includes(o)&&O.splice(O.indexOf(o),1),N.includes(o)&&N.splice(N.indexOf(o),1)),ce&&N.forEach(G=>{m[G].swiperLoopMoveDOM=!0,y.prepend(m[G]),m[G].swiperLoopMoveDOM=!1}),te&&O.forEach(G=>{m[G].swiperLoopMoveDOM=!0,y.append(m[G]),m[G].swiperLoopMoveDOM=!1}),f.recalcSlides(),v.slidesPerView==="auto"?f.updateSlides():V&&(N.length>0&&ce||O.length>0&&te)&&f.slides.forEach((G,Z)=>{f.grid.updateSlide(Z,G,f.slides)}),v.watchSlidesProgress&&f.updateSlidesOffset(),t){if(N.length>0&&ce){if(typeof e>"u"){const G=f.slidesGrid[H],L=f.slidesGrid[H+le]-G;p?f.setTranslate(f.translate-L):(f.slideTo(H+Math.ceil(le),0,!1,!0),i&&(f.touchEventsData.startTranslate=f.touchEventsData.startTranslate-L,f.touchEventsData.currentTranslate=f.touchEventsData.currentTranslate-L))}else if(i){const G=V?N.length/v.grid.rows:N.length;f.slideTo(f.activeIndex+G,0,!1,!0),f.touchEventsData.currentTranslate=f.translate}}else if(O.length>0&&te)if(typeof e>"u"){const G=f.slidesGrid[H],L=f.slidesGrid[H-oe]-G;p?f.setTranslate(f.translate-L):(f.slideTo(H-oe,0,!1,!0),i&&(f.touchEventsData.startTranslate=f.touchEventsData.startTranslate-L,f.touchEventsData.currentTranslate=f.touchEventsData.currentTranslate-L))}else{const G=V?O.length/v.grid.rows:O.length;f.slideTo(f.activeIndex-G,0,!1,!0)}}if(f.allowSlidePrev=g,f.allowSlideNext=x,f.controller&&f.controller.control&&!u){const G={slideRealIndex:e,direction:a,setTranslate:i,activeSlideIndex:o,byController:!0};Array.isArray(f.controller.control)?f.controller.control.forEach(Z=>{!Z.destroyed&&Z.params.loop&&Z.loopFix({...G,slideTo:Z.params.slidesPerView===v.slidesPerView?t:!1})}):f.controller.control instanceof f.constructor&&f.controller.control.params.loop&&f.controller.control.loopFix({...G,slideTo:f.controller.control.params.slidesPerView===v.slidesPerView?t:!1})}f.emit("loopFix")}function FO(){const e=this,{params:t,slidesEl:a}=e;if(!t.loop||!a||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const i=[];e.slides.forEach(o=>{const l=typeof o.swiperSlideIndex>"u"?o.getAttribute("data-swiper-slide-index")*1:o.swiperSlideIndex;i[l]=o}),e.slides.forEach(o=>{o.removeAttribute("data-swiper-slide-index")}),i.forEach(o=>{a.append(o)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var qO={loopCreate:GO,loopFix:IO,loopDestroy:FO};function KO(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const a=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),a.style.cursor="move",a.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function YO(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var XO={setGrabCursor:KO,unsetGrabCursor:YO};function WO(e,t=this){function a(i){if(!i||i===Zt()||i===Rt())return null;i.assignedSlot&&(i=i.assignedSlot);const o=i.closest(e);return!o&&!i.getRootNode?null:o||a(i.getRootNode().host)}return a(t)}function cv(e,t,a){const i=Rt(),{params:o}=e,l=o.edgeSwipeDetection,u=o.edgeSwipeThreshold;return l&&(a<=u||a>=i.innerWidth-u)?l==="prevent"?(t.preventDefault(),!0):!1:!0}function QO(e){const t=this,a=Zt();let i=e;i.originalEvent&&(i=i.originalEvent);const o=t.touchEventsData;if(i.type==="pointerdown"){if(o.pointerId!==null&&o.pointerId!==i.pointerId)return;o.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(o.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){cv(t,i,i.targetTouches[0].pageX);return}const{params:l,touches:u,enabled:p}=t;if(!p||!l.simulateTouch&&i.pointerType==="mouse"||t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let f=i.target;if(l.touchEventsTarget==="wrapper"&&!aO(f,t.wrapperEl)||"which"in i&&i.which===3||"button"in i&&i.button>0||o.isTouched&&o.isMoved)return;const m=!!l.noSwipingClass&&l.noSwipingClass!=="",g=i.composedPath?i.composedPath():i.path;m&&i.target&&i.target.shadowRoot&&g&&(f=g[0]);const x=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,y=!!(i.target&&i.target.shadowRoot);if(l.noSwiping&&(y?WO(x,f):f.closest(x))){t.allowClick=!0;return}if(l.swipeHandler&&!f.closest(l.swipeHandler))return;u.currentX=i.pageX,u.currentY=i.pageY;const v=u.currentX,S=u.currentY;if(!cv(t,i,v))return;Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),u.startX=v,u.startY=S,o.touchStartTime=Du(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(o.allowThresholdMove=!1);let k=!0;f.matches(o.focusableElements)&&(k=!1,f.nodeName==="SELECT"&&(o.isTouched=!1)),a.activeElement&&a.activeElement.matches(o.focusableElements)&&a.activeElement!==f&&(i.pointerType==="mouse"||i.pointerType!=="mouse"&&!f.matches(o.focusableElements))&&a.activeElement.blur();const C=k&&t.allowTouchMove&&l.touchStartPreventDefault;(l.touchStartForcePreventDefault||C)&&!f.isContentEditable&&i.preventDefault(),l.freeMode&&l.freeMode.enabled&&t.freeMode&&t.animating&&!l.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",i)}function ZO(e){const t=Zt(),a=this,i=a.touchEventsData,{params:o,touches:l,rtlTranslate:u,enabled:p}=a;if(!p||!o.simulateTouch&&e.pointerType==="mouse")return;let f=e;if(f.originalEvent&&(f=f.originalEvent),f.type==="pointermove"&&(i.touchId!==null||f.pointerId!==i.pointerId))return;let m;if(f.type==="touchmove"){if(m=[...f.changedTouches].find(E=>E.identifier===i.touchId),!m||m.identifier!==i.touchId)return}else m=f;if(!i.isTouched){i.startMoving&&i.isScrolling&&a.emit("touchMoveOpposite",f);return}const g=m.pageX,x=m.pageY;if(f.preventedByNestedSwiper){l.startX=g,l.startY=x;return}if(!a.allowTouchMove){f.target.matches(i.focusableElements)||(a.allowClick=!1),i.isTouched&&(Object.assign(l,{startX:g,startY:x,currentX:g,currentY:x}),i.touchStartTime=Du());return}if(o.touchReleaseOnEdges&&!o.loop)if(a.isVertical()){if(x<l.startY&&a.translate<=a.maxTranslate()||x>l.startY&&a.translate>=a.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else{if(u&&(g>l.startX&&-a.translate<=a.maxTranslate()||g<l.startX&&-a.translate>=a.minTranslate()))return;if(!u&&(g<l.startX&&a.translate<=a.maxTranslate()||g>l.startX&&a.translate>=a.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(i.focusableElements)&&t.activeElement!==f.target&&f.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&f.target===t.activeElement&&f.target.matches(i.focusableElements)){i.isMoved=!0,a.allowClick=!1;return}i.allowTouchCallbacks&&a.emit("touchMove",f),l.previousX=l.currentX,l.previousY=l.currentY,l.currentX=g,l.currentY=x;const y=l.currentX-l.startX,v=l.currentY-l.startY;if(a.params.threshold&&Math.sqrt(y**2+v**2)<a.params.threshold)return;if(typeof i.isScrolling>"u"){let E;a.isHorizontal()&&l.currentY===l.startY||a.isVertical()&&l.currentX===l.startX?i.isScrolling=!1:y*y+v*v>=25&&(E=Math.atan2(Math.abs(v),Math.abs(y))*180/Math.PI,i.isScrolling=a.isHorizontal()?E>o.touchAngle:90-E>o.touchAngle)}if(i.isScrolling&&a.emit("touchMoveOpposite",f),typeof i.startMoving>"u"&&(l.currentX!==l.startX||l.currentY!==l.startY)&&(i.startMoving=!0),i.isScrolling||f.type==="touchmove"&&i.preventTouchMoveFromPointerMove){i.isTouched=!1;return}if(!i.startMoving)return;a.allowClick=!1,!o.cssMode&&f.cancelable&&f.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&f.stopPropagation();let S=a.isHorizontal()?y:v,k=a.isHorizontal()?l.currentX-l.previousX:l.currentY-l.previousY;o.oneWayMovement&&(S=Math.abs(S)*(u?1:-1),k=Math.abs(k)*(u?1:-1)),l.diff=S,S*=o.touchRatio,u&&(S=-S,k=-k);const C=a.touchesDirection;a.swipeDirection=S>0?"prev":"next",a.touchesDirection=k>0?"prev":"next";const M=a.params.loop&&!o.cssMode,z=a.touchesDirection==="next"&&a.allowSlideNext||a.touchesDirection==="prev"&&a.allowSlidePrev;if(!i.isMoved){if(M&&z&&a.loopFix({direction:a.swipeDirection}),i.startTranslate=a.getTranslate(),a.setTransition(0),a.animating){const E=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});a.wrapperEl.dispatchEvent(E)}i.allowMomentumBounce=!1,o.grabCursor&&(a.allowSlideNext===!0||a.allowSlidePrev===!0)&&a.setGrabCursor(!0),a.emit("sliderFirstMove",f)}if(new Date().getTime(),o._loopSwapReset!==!1&&i.isMoved&&i.allowThresholdMove&&C!==a.touchesDirection&&M&&z&&Math.abs(S)>=1){Object.assign(l,{startX:g,startY:x,currentX:g,currentY:x,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}a.emit("sliderMove",f),i.isMoved=!0,i.currentTranslate=S+i.startTranslate;let A=!0,$=o.resistanceRatio;if(o.touchReleaseOnEdges&&($=0),S>0?(M&&z&&i.allowThresholdMove&&i.currentTranslate>(o.centeredSlides?a.minTranslate()-a.slidesSizesGrid[a.activeIndex+1]-(o.slidesPerView!=="auto"&&a.slides.length-o.slidesPerView>=2?a.slidesSizesGrid[a.activeIndex+1]+a.params.spaceBetween:0)-a.params.spaceBetween:a.minTranslate())&&a.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>a.minTranslate()&&(A=!1,o.resistance&&(i.currentTranslate=a.minTranslate()-1+(-a.minTranslate()+i.startTranslate+S)**$))):S<0&&(M&&z&&i.allowThresholdMove&&i.currentTranslate<(o.centeredSlides?a.maxTranslate()+a.slidesSizesGrid[a.slidesSizesGrid.length-1]+a.params.spaceBetween+(o.slidesPerView!=="auto"&&a.slides.length-o.slidesPerView>=2?a.slidesSizesGrid[a.slidesSizesGrid.length-1]+a.params.spaceBetween:0):a.maxTranslate())&&a.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:a.slides.length-(o.slidesPerView==="auto"?a.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),i.currentTranslate<a.maxTranslate()&&(A=!1,o.resistance&&(i.currentTranslate=a.maxTranslate()+1-(a.maxTranslate()-i.startTranslate-S)**$))),A&&(f.preventedByNestedSwiper=!0),!a.allowSlideNext&&a.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!a.allowSlidePrev&&a.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!a.allowSlidePrev&&!a.allowSlideNext&&(i.currentTranslate=i.startTranslate),o.threshold>0)if(Math.abs(S)>o.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,l.startX=l.currentX,l.startY=l.currentY,i.currentTranslate=i.startTranslate,l.diff=a.isHorizontal()?l.currentX-l.startX:l.currentY-l.startY;return}}else{i.currentTranslate=i.startTranslate;return}!o.followFinger||o.cssMode||((o.freeMode&&o.freeMode.enabled&&a.freeMode||o.watchSlidesProgress)&&(a.updateActiveIndex(),a.updateSlidesClasses()),o.freeMode&&o.freeMode.enabled&&a.freeMode&&a.freeMode.onTouchMove(),a.updateProgress(i.currentTranslate),a.setTranslate(i.currentTranslate))}function JO(e){const t=this,a=t.touchEventsData;let i=e;i.originalEvent&&(i=i.originalEvent);let o;if(i.type==="touchend"||i.type==="touchcancel"){if(o=[...i.changedTouches].find(E=>E.identifier===a.touchId),!o||o.identifier!==a.touchId)return}else{if(a.touchId!==null||i.pointerId!==a.pointerId)return;o=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(t.browser.isSafari||t.browser.isWebView)))return;a.pointerId=null,a.touchId=null;const{params:u,touches:p,rtlTranslate:f,slidesGrid:m,enabled:g}=t;if(!g||!u.simulateTouch&&i.pointerType==="mouse")return;if(a.allowTouchCallbacks&&t.emit("touchEnd",i),a.allowTouchCallbacks=!1,!a.isTouched){a.isMoved&&u.grabCursor&&t.setGrabCursor(!1),a.isMoved=!1,a.startMoving=!1;return}u.grabCursor&&a.isMoved&&a.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const x=Du(),y=x-a.touchStartTime;if(t.allowClick){const E=i.path||i.composedPath&&i.composedPath();t.updateClickedSlide(E&&E[0]||i.target,E),t.emit("tap click",i),y<300&&x-a.lastClickTime<300&&t.emit("doubleTap doubleClick",i)}if(a.lastClickTime=Du(),I3(()=>{t.destroyed||(t.allowClick=!0)}),!a.isTouched||!a.isMoved||!t.swipeDirection||p.diff===0&&!a.loopSwapReset||a.currentTranslate===a.startTranslate&&!a.loopSwapReset){a.isTouched=!1,a.isMoved=!1,a.startMoving=!1;return}a.isTouched=!1,a.isMoved=!1,a.startMoving=!1;let v;if(u.followFinger?v=f?t.translate:-t.translate:v=-a.currentTranslate,u.cssMode)return;if(u.freeMode&&u.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:v});return}const S=v>=-t.maxTranslate()&&!t.params.loop;let k=0,C=t.slidesSizesGrid[0];for(let E=0;E<m.length;E+=E<u.slidesPerGroupSkip?1:u.slidesPerGroup){const V=E<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;typeof m[E+V]<"u"?(S||v>=m[E]&&v<m[E+V])&&(k=E,C=m[E+V]-m[E]):(S||v>=m[E])&&(k=E,C=m[m.length-1]-m[m.length-2])}let M=null,z=null;u.rewind&&(t.isBeginning?z=u.virtual&&u.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(M=0));const A=(v-m[k])/C,$=k<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;if(y>u.longSwipesMs){if(!u.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(A>=u.longSwipesRatio?t.slideTo(u.rewind&&t.isEnd?M:k+$):t.slideTo(k)),t.swipeDirection==="prev"&&(A>1-u.longSwipesRatio?t.slideTo(k+$):z!==null&&A<0&&Math.abs(A)>u.longSwipesRatio?t.slideTo(z):t.slideTo(k))}else{if(!u.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(i.target===t.navigation.nextEl||i.target===t.navigation.prevEl)?i.target===t.navigation.nextEl?t.slideTo(k+$):t.slideTo(k):(t.swipeDirection==="next"&&t.slideTo(M!==null?M:k+$),t.swipeDirection==="prev"&&t.slideTo(z!==null?z:k))}}function uv(){const e=this,{params:t,el:a}=e;if(a&&a.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:o,snapGrid:l}=e,u=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const p=u&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!p?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!u?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=o,e.allowSlideNext=i,e.params.watchOverflow&&l!==e.snapGrid&&e.checkOverflow()}function eD(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function tD(){const e=this,{wrapperEl:t,rtlTranslate:a,enabled:i}=e;if(!i)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let o;const l=e.maxTranslate()-e.minTranslate();l===0?o=0:o=(e.translate-e.minTranslate())/l,o!==e.progress&&e.updateProgress(a?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function nD(e){const t=this;du(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function aD(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Q3=(e,t)=>{const a=Zt(),{params:i,el:o,wrapperEl:l,device:u}=e,p=!!i.nested,f=t==="on"?"addEventListener":"removeEventListener",m=t;!o||typeof o=="string"||(a[f]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:p}),o[f]("touchstart",e.onTouchStart,{passive:!1}),o[f]("pointerdown",e.onTouchStart,{passive:!1}),a[f]("touchmove",e.onTouchMove,{passive:!1,capture:p}),a[f]("pointermove",e.onTouchMove,{passive:!1,capture:p}),a[f]("touchend",e.onTouchEnd,{passive:!0}),a[f]("pointerup",e.onTouchEnd,{passive:!0}),a[f]("pointercancel",e.onTouchEnd,{passive:!0}),a[f]("touchcancel",e.onTouchEnd,{passive:!0}),a[f]("pointerout",e.onTouchEnd,{passive:!0}),a[f]("pointerleave",e.onTouchEnd,{passive:!0}),a[f]("contextmenu",e.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&o[f]("click",e.onClick,!0),i.cssMode&&l[f]("scroll",e.onScroll),i.updateOnWindowResize?e[m](u.ios||u.android?"resize orientationchange observerUpdate":"resize observerUpdate",uv,!0):e[m]("observerUpdate",uv,!0),o[f]("load",e.onLoad,{capture:!0}))};function iD(){const e=this,{params:t}=e;e.onTouchStart=QO.bind(e),e.onTouchMove=ZO.bind(e),e.onTouchEnd=JO.bind(e),e.onDocumentTouchStart=aD.bind(e),t.cssMode&&(e.onScroll=tD.bind(e)),e.onClick=eD.bind(e),e.onLoad=nD.bind(e),Q3(e,"on")}function rD(){Q3(this,"off")}var sD={attachEvents:iD,detachEvents:rD};const dv=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function oD(){const e=this,{realIndex:t,initialized:a,params:i,el:o}=e,l=i.breakpoints;if(!l||l&&Object.keys(l).length===0)return;const u=Zt(),p=i.breakpointsBase==="window"||!i.breakpointsBase?i.breakpointsBase:"container",f=["window","container"].includes(i.breakpointsBase)||!i.breakpointsBase?e.el:u.querySelector(i.breakpointsBase),m=e.getBreakpoint(l,p,f);if(!m||e.currentBreakpoint===m)return;const x=(m in l?l[m]:void 0)||e.originalParams,y=dv(e,i),v=dv(e,x),S=e.params.grabCursor,k=x.grabCursor,C=i.enabled;y&&!v?(o.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!y&&v&&(o.classList.add(`${i.containerModifierClass}grid`),(x.grid.fill&&x.grid.fill==="column"||!x.grid.fill&&i.grid.fill==="column")&&o.classList.add(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),S&&!k?e.unsetGrabCursor():!S&&k&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(V=>{if(typeof x[V]>"u")return;const N=i[V]&&i[V].enabled,O=x[V]&&x[V].enabled;N&&!O&&e[V].disable(),!N&&O&&e[V].enable()});const M=x.direction&&x.direction!==i.direction,z=i.loop&&(x.slidesPerView!==i.slidesPerView||M),A=i.loop;M&&a&&e.changeDirection(),fn(e.params,x);const $=e.params.enabled,E=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),C&&!$?e.disable():!C&&$&&e.enable(),e.currentBreakpoint=m,e.emit("_beforeBreakpoint",x),a&&(z?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!A&&E?(e.loopCreate(t),e.updateSlides()):A&&!E&&e.loopDestroy()),e.emit("breakpoint",x)}function lD(e,t="window",a){if(!e||t==="container"&&!a)return;let i=!1;const o=Rt(),l=t==="window"?o.innerHeight:a.clientHeight,u=Object.keys(e).map(p=>{if(typeof p=="string"&&p.indexOf("@")===0){const f=parseFloat(p.substr(1));return{value:l*f,point:p}}return{value:p,point:p}});u.sort((p,f)=>parseInt(p.value,10)-parseInt(f.value,10));for(let p=0;p<u.length;p+=1){const{point:f,value:m}=u[p];t==="window"?o.matchMedia(`(min-width: ${m}px)`).matches&&(i=f):m<=a.clientWidth&&(i=f)}return i||"max"}var cD={setBreakpoint:oD,getBreakpoint:lD};function uD(e,t){const a=[];return e.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(o=>{i[o]&&a.push(t+o)}):typeof i=="string"&&a.push(t+i)}),a}function dD(){const e=this,{classNames:t,params:a,rtl:i,el:o,device:l}=e,u=uD(["initialized",a.direction,{"free-mode":e.params.freeMode&&a.freeMode.enabled},{autoheight:a.autoHeight},{rtl:i},{grid:a.grid&&a.grid.rows>1},{"grid-column":a.grid&&a.grid.rows>1&&a.grid.fill==="column"},{android:l.android},{ios:l.ios},{"css-mode":a.cssMode},{centered:a.cssMode&&a.centeredSlides},{"watch-progress":a.watchSlidesProgress}],a.containerModifierClass);t.push(...u),o.classList.add(...t),e.emitContainerClasses()}function fD(){const e=this,{el:t,classNames:a}=e;!t||typeof t=="string"||(t.classList.remove(...a),e.emitContainerClasses())}var pD={addClasses:dD,removeClasses:fD};function hD(){const e=this,{isLocked:t,params:a}=e,{slidesOffsetBefore:i}=a;if(i){const o=e.slides.length-1,l=e.slidesGrid[o]+e.slidesSizesGrid[o]+i*2;e.isLocked=e.size>l}else e.isLocked=e.snapGrid.length===1;a.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),a.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var mD={checkOverflow:hD},ym={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function gD(e,t){return function(i={}){const o=Object.keys(i)[0],l=i[o];if(typeof l!="object"||l===null){fn(t,i);return}if(e[o]===!0&&(e[o]={enabled:!0}),o==="navigation"&&e[o]&&e[o].enabled&&!e[o].prevEl&&!e[o].nextEl&&(e[o].auto=!0),["pagination","scrollbar"].indexOf(o)>=0&&e[o]&&e[o].enabled&&!e[o].el&&(e[o].auto=!0),!(o in e&&"enabled"in l)){fn(t,i);return}typeof e[o]=="object"&&!("enabled"in e[o])&&(e[o].enabled=!0),e[o]||(e[o]={enabled:!1}),fn(t,i)}}const lh={eventsEmitter:pO,update:TO,translate:zO,transition:DO,slide:UO,loop:qO,grabCursor:XO,events:sD,breakpoints:cD,checkOverflow:mD,classes:pD},ch={};let Tg=class Ea{constructor(...t){let a,i;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?i=t[0]:[a,i]=t,i||(i={}),i=fn({},i),a&&!i.el&&(i.el=a);const o=Zt();if(i.el&&typeof i.el=="string"&&o.querySelectorAll(i.el).length>1){const f=[];return o.querySelectorAll(i.el).forEach(m=>{const g=fn({},i,{el:m});f.push(new Ea(g))}),f}const l=this;l.__swiper__=!0,l.support=K3(),l.device=Y3({userAgent:i.userAgent}),l.browser=X3(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],i.modules&&Array.isArray(i.modules)&&i.modules.forEach(f=>{typeof f=="function"&&l.modules.indexOf(f)<0&&l.modules.push(f)});const u={};l.modules.forEach(f=>{f({params:i,swiper:l,extendParams:gD(i,u),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})});const p=fn({},ym,u);return l.params=fn({},p,ch,i),l.originalParams=fn({},l.params),l.passedParams=fn({},i),l.params&&l.params.on&&Object.keys(l.params.on).forEach(f=>{l.on(f,l.params.on[f])}),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:a,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return l.params.direction==="horizontal"},isVertical(){return l.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:a,params:i}=this,o=za(a,`.${i.slideClass}, swiper-slide`),l=mm(o[0]);return mm(t)-l}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(a=>a.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:a,params:i}=t;t.slides=za(a,`.${i.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,a){const i=this;t=Math.min(Math.max(t,0),1);const o=i.minTranslate(),u=(i.maxTranslate()-o)*t+o;i.translateTo(u,typeof a>"u"?0:a),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const a=t.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",a.join(" "))}getSlideClasses(t){const a=this;return a.destroyed?"":t.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(a.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const a=[];t.slides.forEach(i=>{const o=t.getSlideClasses(i);a.push({slideEl:i,classNames:o}),t.emit("_slideClass",i,o)}),t.emit("_slideClasses",a)}slidesPerViewDynamic(t="current",a=!1){const i=this,{params:o,slides:l,slidesGrid:u,slidesSizesGrid:p,size:f,activeIndex:m}=i;let g=1;if(typeof o.slidesPerView=="number")return o.slidesPerView;if(o.centeredSlides){let x=l[m]?Math.ceil(l[m].swiperSlideSize):0,y;for(let v=m+1;v<l.length;v+=1)l[v]&&!y&&(x+=Math.ceil(l[v].swiperSlideSize),g+=1,x>f&&(y=!0));for(let v=m-1;v>=0;v-=1)l[v]&&!y&&(x+=l[v].swiperSlideSize,g+=1,x>f&&(y=!0))}else if(t==="current")for(let x=m+1;x<l.length;x+=1)(a?u[x]+p[x]-u[m]<f:u[x]-u[m]<f)&&(g+=1);else for(let x=m-1;x>=0;x-=1)u[m]-u[x]<f&&(g+=1);return g}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:a,params:i}=t;i.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(u=>{u.complete&&du(t,u)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function o(){const u=t.rtlTranslate?t.translate*-1:t.translate,p=Math.min(Math.max(u,t.maxTranslate()),t.minTranslate());t.setTranslate(p),t.updateActiveIndex(),t.updateSlidesClasses()}let l;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)o(),i.autoHeight&&t.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&t.isEnd&&!i.centeredSlides){const u=t.virtual&&i.virtual.enabled?t.virtual.slides:t.slides;l=t.slideTo(u.length-1,0,!1,!0)}else l=t.slideTo(t.activeIndex,0,!1,!0);l||o()}i.watchOverflow&&a!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,a=!0){const i=this,o=i.params.direction;return t||(t=o==="horizontal"?"vertical":"horizontal"),t===o||t!=="horizontal"&&t!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${o}`),i.el.classList.add(`${i.params.containerModifierClass}${t}`),i.emitContainerClasses(),i.params.direction=t,i.slides.forEach(l=>{t==="vertical"?l.style.width="":l.style.height=""}),i.emit("changeDirection"),a&&i.update()),i}changeLanguageDirection(t){const a=this;a.rtl&&t==="rtl"||!a.rtl&&t==="ltr"||(a.rtl=t==="rtl",a.rtlTranslate=a.params.direction==="horizontal"&&a.rtl,a.rtl?(a.el.classList.add(`${a.params.containerModifierClass}rtl`),a.el.dir="rtl"):(a.el.classList.remove(`${a.params.containerModifierClass}rtl`),a.el.dir="ltr"),a.update())}mount(t){const a=this;if(a.mounted)return!0;let i=t||a.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=a,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===a.params.swiperElementNodeName.toUpperCase()&&(a.isElement=!0);const o=()=>`.${(a.params.wrapperClass||"").trim().split(" ").join(".")}`;let u=i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(o()):za(i,o())[0];return!u&&a.params.createElements&&(u=Vu("div",a.params.wrapperClass),i.append(u),za(i,`.${a.params.slideClass}`).forEach(p=>{u.append(p)})),Object.assign(a,{el:i,wrapperEl:u,slidesEl:a.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:u,hostEl:a.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||ci(i,"direction")==="rtl",rtlTranslate:a.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||ci(i,"direction")==="rtl"),wrongRTL:ci(u,"display")==="-webkit-box"}),!0}init(t){const a=this;if(a.initialized||a.mount(t)===!1)return a;a.emit("beforeInit"),a.params.breakpoints&&a.setBreakpoint(),a.addClasses(),a.updateSize(),a.updateSlides(),a.params.watchOverflow&&a.checkOverflow(),a.params.grabCursor&&a.enabled&&a.setGrabCursor(),a.params.loop&&a.virtual&&a.params.virtual.enabled?a.slideTo(a.params.initialSlide+a.virtual.slidesBefore,0,a.params.runCallbacksOnInit,!1,!0):a.slideTo(a.params.initialSlide,0,a.params.runCallbacksOnInit,!1,!0),a.params.loop&&a.loopCreate(void 0,!0),a.attachEvents();const o=[...a.el.querySelectorAll('[loading="lazy"]')];return a.isElement&&o.push(...a.hostEl.querySelectorAll('[loading="lazy"]')),o.forEach(l=>{l.complete?du(a,l):l.addEventListener("load",u=>{du(a,u.target)})}),xm(a),a.initialized=!0,xm(a),a.emit("init"),a.emit("afterInit"),a}destroy(t=!0,a=!0){const i=this,{params:o,el:l,wrapperEl:u,slides:p}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),o.loop&&i.loopDestroy(),a&&(i.removeClasses(),l&&typeof l!="string"&&l.removeAttribute("style"),u&&u.removeAttribute("style"),p&&p.length&&p.forEach(f=>{f.classList.remove(o.slideVisibleClass,o.slideFullyVisibleClass,o.slideActiveClass,o.slideNextClass,o.slidePrevClass),f.removeAttribute("style"),f.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(f=>{i.off(f)}),t!==!1&&(i.el&&typeof i.el!="string"&&(i.el.swiper=null),ZL(i)),i.destroyed=!0),null}static extendDefaults(t){fn(ch,t)}static get extendedDefaults(){return ch}static get defaults(){return ym}static installModule(t){Ea.prototype.__modules__||(Ea.prototype.__modules__=[]);const a=Ea.prototype.__modules__;typeof t=="function"&&a.indexOf(t)<0&&a.push(t)}static use(t){return Array.isArray(t)?(t.forEach(a=>Ea.installModule(a)),Ea):(Ea.installModule(t),Ea)}};Object.keys(lh).forEach(e=>{Object.keys(lh[e]).forEach(t=>{Tg.prototype[t]=lh[e][t]})});Tg.use([dO,fO]);const Z3=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Yi(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Zr(e,t){const a=["__proto__","constructor","prototype"];Object.keys(t).filter(i=>a.indexOf(i)<0).forEach(i=>{typeof e[i]>"u"?e[i]=t[i]:Yi(t[i])&&Yi(e[i])&&Object.keys(t[i]).length>0?t[i].__swiper__?e[i]=t[i]:Zr(e[i],t[i]):e[i]=t[i]})}function J3(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function ew(e={}){return e.pagination&&typeof e.pagination.el>"u"}function tw(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function nw(e=""){const t=e.split(" ").map(i=>i.trim()).filter(i=>!!i),a=[];return t.forEach(i=>{a.indexOf(i)<0&&a.push(i)}),a.join(" ")}function bD(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function xD({swiper:e,slides:t,passedParams:a,changedParams:i,nextEl:o,prevEl:l,scrollbarEl:u,paginationEl:p}){const f=i.filter(O=>O!=="children"&&O!=="direction"&&O!=="wrapperClass"),{params:m,pagination:g,navigation:x,scrollbar:y,virtual:v,thumbs:S}=e;let k,C,M,z,A,$,E,V;i.includes("thumbs")&&a.thumbs&&a.thumbs.swiper&&!a.thumbs.swiper.destroyed&&m.thumbs&&(!m.thumbs.swiper||m.thumbs.swiper.destroyed)&&(k=!0),i.includes("controller")&&a.controller&&a.controller.control&&m.controller&&!m.controller.control&&(C=!0),i.includes("pagination")&&a.pagination&&(a.pagination.el||p)&&(m.pagination||m.pagination===!1)&&g&&!g.el&&(M=!0),i.includes("scrollbar")&&a.scrollbar&&(a.scrollbar.el||u)&&(m.scrollbar||m.scrollbar===!1)&&y&&!y.el&&(z=!0),i.includes("navigation")&&a.navigation&&(a.navigation.prevEl||l)&&(a.navigation.nextEl||o)&&(m.navigation||m.navigation===!1)&&x&&!x.prevEl&&!x.nextEl&&(A=!0);const N=O=>{e[O]&&(e[O].destroy(),O==="navigation"?(e.isElement&&(e[O].prevEl.remove(),e[O].nextEl.remove()),m[O].prevEl=void 0,m[O].nextEl=void 0,e[O].prevEl=void 0,e[O].nextEl=void 0):(e.isElement&&e[O].el.remove(),m[O].el=void 0,e[O].el=void 0))};i.includes("loop")&&e.isElement&&(m.loop&&!a.loop?$=!0:!m.loop&&a.loop?E=!0:V=!0),f.forEach(O=>{if(Yi(m[O])&&Yi(a[O]))Object.assign(m[O],a[O]),(O==="navigation"||O==="pagination"||O==="scrollbar")&&"enabled"in a[O]&&!a[O].enabled&&N(O);else{const X=a[O];(X===!0||X===!1)&&(O==="navigation"||O==="pagination"||O==="scrollbar")?X===!1&&N(O):m[O]=a[O]}}),f.includes("controller")&&!C&&e.controller&&e.controller.control&&m.controller&&m.controller.control&&(e.controller.control=m.controller.control),i.includes("children")&&t&&v&&m.virtual.enabled?(v.slides=t,v.update(!0)):i.includes("virtual")&&v&&m.virtual.enabled&&(t&&(v.slides=t),v.update(!0)),i.includes("children")&&t&&m.loop&&(V=!0),k&&S.init()&&S.update(!0),C&&(e.controller.control=m.controller.control),M&&(e.isElement&&(!p||typeof p=="string")&&(p=document.createElement("div"),p.classList.add("swiper-pagination"),p.part.add("pagination"),e.el.appendChild(p)),p&&(m.pagination.el=p),g.init(),g.render(),g.update()),z&&(e.isElement&&(!u||typeof u=="string")&&(u=document.createElement("div"),u.classList.add("swiper-scrollbar"),u.part.add("scrollbar"),e.el.appendChild(u)),u&&(m.scrollbar.el=u),y.init(),y.updateSize(),y.setTranslate()),A&&(e.isElement&&((!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-next"),bm(o,e.navigation.arrowSvg),o.part.add("button-next"),e.el.appendChild(o)),(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-button-prev"),bm(l,e.navigation.arrowSvg),l.part.add("button-prev"),e.el.appendChild(l))),o&&(m.navigation.nextEl=o),l&&(m.navigation.prevEl=l),x.init(),x.update()),i.includes("allowSlideNext")&&(e.allowSlideNext=a.allowSlideNext),i.includes("allowSlidePrev")&&(e.allowSlidePrev=a.allowSlidePrev),i.includes("direction")&&e.changeDirection(a.direction,!1),($||V)&&e.loopDestroy(),(E||V)&&e.loopCreate(),e.update()}function yD(e={},t=!0){const a={on:{}},i={},o={};Zr(a,ym),a._emitClasses=!0,a.init=!1;const l={},u=Z3.map(f=>f.replace(/_/,"")),p=Object.assign({},e);return Object.keys(p).forEach(f=>{typeof e[f]>"u"||(u.indexOf(f)>=0?Yi(e[f])?(a[f]={},o[f]={},Zr(a[f],e[f]),Zr(o[f],e[f])):(a[f]=e[f],o[f]=e[f]):f.search(/on[A-Z]/)===0&&typeof e[f]=="function"?t?i[`${f[2].toLowerCase()}${f.substr(3)}`]=e[f]:a.on[`${f[2].toLowerCase()}${f.substr(3)}`]=e[f]:l[f]=e[f])}),["navigation","pagination","scrollbar"].forEach(f=>{a[f]===!0&&(a[f]={}),a[f]===!1&&delete a[f]}),{params:a,passedParams:o,rest:l,events:i}}function vD({el:e,nextEl:t,prevEl:a,paginationEl:i,scrollbarEl:o,swiper:l},u){J3(u)&&t&&a&&(l.params.navigation.nextEl=t,l.originalParams.navigation.nextEl=t,l.params.navigation.prevEl=a,l.originalParams.navigation.prevEl=a),ew(u)&&i&&(l.params.pagination.el=i,l.originalParams.pagination.el=i),tw(u)&&o&&(l.params.scrollbar.el=o,l.originalParams.scrollbar.el=o),l.init(e)}function wD(e,t,a,i,o){const l=[];if(!t)return l;const u=f=>{l.indexOf(f)<0&&l.push(f)};if(a&&i){const f=i.map(o),m=a.map(o);f.join("")!==m.join("")&&u("children"),i.length!==a.length&&u("children")}return Z3.filter(f=>f[0]==="_").map(f=>f.replace(/_/,"")).forEach(f=>{if(f in e&&f in t)if(Yi(e[f])&&Yi(t[f])){const m=Object.keys(e[f]),g=Object.keys(t[f]);m.length!==g.length?u(f):(m.forEach(x=>{e[f][x]!==t[f][x]&&u(f)}),g.forEach(x=>{e[f][x]!==t[f][x]&&u(f)}))}else e[f]!==t[f]&&u(f)}),l}const SD=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Nu(){return Nu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},Nu.apply(this,arguments)}function aw(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function iw(e){const t=[];return Ce.Children.toArray(e).forEach(a=>{aw(a)?t.push(a):a.props&&a.props.children&&iw(a.props.children).forEach(i=>t.push(i))}),t}function kD(e){const t=[],a={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Ce.Children.toArray(e).forEach(i=>{if(aw(i))t.push(i);else if(i.props&&i.props.slot&&a[i.props.slot])a[i.props.slot].push(i);else if(i.props&&i.props.children){const o=iw(i.props.children);o.length>0?o.forEach(l=>t.push(l)):a["container-end"].push(i)}else a["container-end"].push(i)}),{slides:t,slots:a}}function TD(e,t,a){if(!a)return null;const i=g=>{let x=g;return g<0?x=t.length+g:x>=t.length&&(x=x-t.length),x},o=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${a.offset}px`}:{top:`${a.offset}px`},{from:l,to:u}=a,p=e.params.loop?-t.length:0,f=e.params.loop?t.length*2:t.length,m=[];for(let g=p;g<f;g+=1)g>=l&&g<=u&&m.push(t[i(g)]);return m.map((g,x)=>Ce.cloneElement(g,{swiper:e,style:o,key:g.props.virtualIndex||g.key||`slide-${x}`}))}function Uo(e,t){return typeof window>"u"?j.useEffect(e,t):j.useLayoutEffect(e,t)}const fv=j.createContext(null),jD=j.createContext(null),rw=j.forwardRef(({className:e,tag:t="div",wrapperTag:a="div",children:i,onSwiper:o,...l}={},u)=>{let p=!1;const[f,m]=j.useState("swiper"),[g,x]=j.useState(null),[y,v]=j.useState(!1),S=j.useRef(!1),k=j.useRef(null),C=j.useRef(null),M=j.useRef(null),z=j.useRef(null),A=j.useRef(null),$=j.useRef(null),E=j.useRef(null),V=j.useRef(null),{params:N,passedParams:O,rest:X,events:J}=yD(l),{slides:H,slots:te}=kD(i),ce=()=>{v(!y)};Object.assign(N.on,{_containerClasses(G,Z){m(Z)}});const le=()=>{Object.assign(N.on,J),p=!0;const G={...N};if(delete G.wrapperClass,C.current=new Tg(G),C.current.virtual&&C.current.params.virtual.enabled){C.current.virtual.slides=H;const Z={cache:!1,slides:H,renderExternal:x,renderExternalUpdate:!1};Zr(C.current.params.virtual,Z),Zr(C.current.originalParams.virtual,Z)}};k.current||le(),C.current&&C.current.on("_beforeBreakpoint",ce);const oe=()=>{p||!J||!C.current||Object.keys(J).forEach(G=>{C.current.on(G,J[G])})},D=()=>{!J||!C.current||Object.keys(J).forEach(G=>{C.current.off(G,J[G])})};j.useEffect(()=>()=>{C.current&&C.current.off("_beforeBreakpoint",ce)}),j.useEffect(()=>{!S.current&&C.current&&(C.current.emitSlidesClasses(),S.current=!0)}),Uo(()=>{if(u&&(u.current=k.current),!!k.current)return C.current.destroyed&&le(),vD({el:k.current,nextEl:A.current,prevEl:$.current,paginationEl:E.current,scrollbarEl:V.current,swiper:C.current},N),o&&!C.current.destroyed&&o(C.current),()=>{C.current&&!C.current.destroyed&&C.current.destroy(!0,!1)}},[]),Uo(()=>{oe();const G=wD(O,M.current,H,z.current,Z=>Z.key);return M.current=O,z.current=H,G.length&&C.current&&!C.current.destroyed&&xD({swiper:C.current,slides:H,passedParams:O,changedParams:G,nextEl:A.current,prevEl:$.current,scrollbarEl:V.current,paginationEl:E.current}),()=>{D()}}),Uo(()=>{SD(C.current)},[g]);function B(){return N.virtual?TD(C.current,H,g):H.map((G,Z)=>Ce.cloneElement(G,{swiper:C.current,swiperSlideIndex:Z}))}return Ce.createElement(t,Nu({ref:k,className:nw(`${f}${e?` ${e}`:""}`)},X),Ce.createElement(jD.Provider,{value:C.current},te["container-start"],Ce.createElement(a,{className:bD(N.wrapperClass)},te["wrapper-start"],B(),te["wrapper-end"]),J3(N)&&Ce.createElement(Ce.Fragment,null,Ce.createElement("div",{ref:$,className:"swiper-button-prev"}),Ce.createElement("div",{ref:A,className:"swiper-button-next"})),tw(N)&&Ce.createElement("div",{ref:V,className:"swiper-scrollbar"}),ew(N)&&Ce.createElement("div",{ref:E,className:"swiper-pagination"}),te["container-end"]))});rw.displayName="Swiper";const sw=j.forwardRef(({tag:e="div",children:t,className:a="",swiper:i,zoom:o,lazy:l,virtualIndex:u,swiperSlideIndex:p,...f}={},m)=>{const g=j.useRef(null),[x,y]=j.useState("swiper-slide"),[v,S]=j.useState(!1);function k(A,$,E){$===g.current&&y(E)}Uo(()=>{if(typeof p<"u"&&(g.current.swiperSlideIndex=p),m&&(m.current=g.current),!(!g.current||!i)){if(i.destroyed){x!=="swiper-slide"&&y("swiper-slide");return}return i.on("_slideClass",k),()=>{i&&i.off("_slideClass",k)}}}),Uo(()=>{i&&g.current&&!i.destroyed&&y(i.getSlideClasses(g.current))},[i]);const C={isActive:x.indexOf("swiper-slide-active")>=0,isVisible:x.indexOf("swiper-slide-visible")>=0,isPrev:x.indexOf("swiper-slide-prev")>=0,isNext:x.indexOf("swiper-slide-next")>=0},M=()=>typeof t=="function"?t(C):t,z=()=>{S(!0)};return Ce.createElement(e,Nu({ref:g,className:nw(`${x}${a?` ${a}`:""}`),"data-swiper-slide-index":u,onLoad:z},f),o&&Ce.createElement(fv.Provider,{value:C},Ce.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},M(),l&&!v&&Ce.createElement("div",{className:"swiper-lazy-preloader",ref:A=>{A&&(A.lazyPreloaderManaged=!0)}}))),!o&&Ce.createElement(fv.Provider,{value:C},M(),l&&!v&&Ce.createElement("div",{className:"swiper-lazy-preloader",ref:A=>{A&&(A.lazyPreloaderManaged=!0)}})))});sw.displayName="SwiperSlide";function AD({swiper:e,extendParams:t,on:a,emit:i}){const o=Zt(),l=Rt();e.keyboard={enabled:!1},t({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0,speed:void 0}});function u(m){if(!e.enabled)return;const{rtlTranslate:g}=e;let x=m;x.originalEvent&&(x=x.originalEvent);const y=x.keyCode||x.charCode,v=e.params.keyboard.pageUpDown,S=v&&y===33,k=v&&y===34,C=y===37,M=y===39,z=y===38,A=y===40;if(!e.allowSlideNext&&(e.isHorizontal()&&M||e.isVertical()&&A||k)||!e.allowSlidePrev&&(e.isHorizontal()&&C||e.isVertical()&&z||S))return!1;if(x.shiftKey||x.altKey||x.ctrlKey||x.metaKey||o.activeElement&&(o.activeElement.isContentEditable||o.activeElement.nodeName&&(o.activeElement.nodeName.toLowerCase()==="input"||o.activeElement.nodeName.toLowerCase()==="textarea")))return;if(e.params.keyboard.onlyInViewport&&(S||k||C||M||z||A)){let E=!1;if(gm(e.el,`.${e.params.slideClass}, swiper-slide`).length>0&&gm(e.el,`.${e.params.slideActiveClass}`).length===0)return;const V=e.el,N=V.clientWidth,O=V.clientHeight,X=l.innerWidth,J=l.innerHeight,H=iO(V);g&&(H.left-=V.scrollLeft);const te=[[H.left,H.top],[H.left+N,H.top],[H.left,H.top+O],[H.left+N,H.top+O]];for(let ce=0;ce<te.length;ce+=1){const le=te[ce];if(le[0]>=0&&le[0]<=X&&le[1]>=0&&le[1]<=J){if(le[0]===0&&le[1]===0)continue;E=!0}}if(!E)return}const $=e.params.keyboard.speed;e.isHorizontal()?((S||k||C||M)&&(x.preventDefault?x.preventDefault():x.returnValue=!1),((k||M)&&!g||(S||C)&&g)&&e.slideNext($),((S||C)&&!g||(k||M)&&g)&&e.slidePrev($)):((S||k||z||A)&&(x.preventDefault?x.preventDefault():x.returnValue=!1),(k||A)&&e.slideNext($),(S||z)&&e.slidePrev($)),i("keyPress",y)}function p(){e.keyboard.enabled||(o.addEventListener("keydown",u),e.keyboard.enabled=!0)}function f(){e.keyboard.enabled&&(o.removeEventListener("keydown",u),e.keyboard.enabled=!1)}a("init",()=>{e.params.keyboard.enabled&&p()}),a("destroy",()=>{e.keyboard.enabled&&f()}),Object.assign(e.keyboard,{enable:p,disable:f})}function uh(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function CD({swiper:e,extendParams:t,on:a}){t({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,containerRole:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null,scrollOnFocus:!0,wrapperLiveRegion:!0}}),e.a11y={clicked:!1};let i=null,o,l,u=new Date().getTime();function p(D){const B=i;B.length!==0&&bm(B,D)}function f(D=16){const B=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(D).replace(/x/g,B)}function m(D){D=St(D),D.forEach(B=>{B.setAttribute("tabIndex","0")})}function g(D){D=St(D),D.forEach(B=>{B.setAttribute("tabIndex","-1")})}function x(D,B){D=St(D),D.forEach(G=>{G.setAttribute("role",B)})}function y(D,B){D=St(D),D.forEach(G=>{G.setAttribute("aria-roledescription",B)})}function v(D,B){D=St(D),D.forEach(G=>{G.setAttribute("aria-controls",B)})}function S(D,B){D=St(D),D.forEach(G=>{G.setAttribute("aria-label",B)})}function k(D,B){D=St(D),D.forEach(G=>{G.setAttribute("id",B)})}function C(D,B){D=St(D),D.forEach(G=>{G.setAttribute("aria-live",B)})}function M(D){D=St(D),D.forEach(B=>{B.setAttribute("aria-disabled",!0)})}function z(D){D=St(D),D.forEach(B=>{B.setAttribute("aria-disabled",!1)})}function A(D){if(D.keyCode!==13&&D.keyCode!==32)return;const B=e.params.a11y,G=D.target;if(!(e.pagination&&e.pagination.el&&(G===e.pagination.el||e.pagination.el.contains(D.target))&&!D.target.matches(uh(e.params.pagination.bulletClass)))){if(e.navigation&&e.navigation.prevEl&&e.navigation.nextEl){const Z=St(e.navigation.prevEl);St(e.navigation.nextEl).includes(G)&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?p(B.lastSlideMessage):p(B.nextSlideMessage)),Z.includes(G)&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?p(B.firstSlideMessage):p(B.prevSlideMessage))}e.pagination&&G.matches(uh(e.params.pagination.bulletClass))&&G.click()}}function $(){if(e.params.loop||e.params.rewind||!e.navigation)return;const{nextEl:D,prevEl:B}=e.navigation;B&&(e.isBeginning?(M(B),g(B)):(z(B),m(B))),D&&(e.isEnd?(M(D),g(D)):(z(D),m(D)))}function E(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function V(){return E()&&e.params.pagination.clickable}function N(){const D=e.params.a11y;E()&&e.pagination.bullets.forEach(B=>{e.params.pagination.clickable&&(m(B),e.params.pagination.renderBullet||(x(B,"button"),S(B,D.paginationBulletMessage.replace(/\{\{index\}\}/,mm(B)+1)))),B.matches(uh(e.params.pagination.bulletActiveClass))?B.setAttribute("aria-current","true"):B.removeAttribute("aria-current")})}const O=(D,B,G)=>{m(D),D.tagName!=="BUTTON"&&(x(D,"button"),D.addEventListener("keydown",A)),S(D,G),v(D,B)},X=D=>{l&&l!==D.target&&!l.contains(D.target)&&(o=!0),e.a11y.clicked=!0},J=()=>{o=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.destroyed||(e.a11y.clicked=!1)})})},H=D=>{u=new Date().getTime()},te=D=>{if(e.a11y.clicked||!e.params.a11y.scrollOnFocus||new Date().getTime()-u<100)return;const B=D.target.closest(`.${e.params.slideClass}, swiper-slide`);if(!B||!e.slides.includes(B))return;l=B;const G=e.virtual&&e.params.virtual.enabled,Z=(G?parseInt(B.getAttribute("data-swiper-slide-index"),10):e.slides.indexOf(B))===e.activeIndex,L=e.params.watchSlidesProgress&&e.visibleSlides&&e.visibleSlides.includes(B);Z||L||D.sourceCapabilities&&D.sourceCapabilities.firesTouchEvents||(e.isHorizontal()?e.el.scrollLeft=0:e.el.scrollTop=0,requestAnimationFrame(()=>{o||(e.params.loop?e.slideToLoop(e.getSlideIndexWhenGrid(parseInt(B.getAttribute("data-swiper-slide-index"))),0):G?e.slideTo(e.getSlideIndexWhenGrid(parseInt(B.getAttribute("data-swiper-slide-index"),10)),0):e.slideTo(e.getSlideIndexWhenGrid(e.slides.indexOf(B)),0),o=!1)}))},ce=()=>{const D=e.params.a11y;D.itemRoleDescriptionMessage&&y(e.slides,D.itemRoleDescriptionMessage),D.slideRole&&x(e.slides,D.slideRole);const B=e.slides.length;D.slideLabelMessage&&e.slides.forEach((G,Z)=>{const L=e.params.loop?parseInt(G.getAttribute("data-swiper-slide-index"),10):Z,Y=D.slideLabelMessage.replace(/\{\{index\}\}/,L+1).replace(/\{\{slidesLength\}\}/,B);S(G,Y)})},le=()=>{const D=e.params.a11y;e.el.append(i);const B=e.el;D.containerRoleDescriptionMessage&&y(B,D.containerRoleDescriptionMessage),D.containerMessage&&S(B,D.containerMessage),D.containerRole&&x(B,D.containerRole);const G=e.wrapperEl,Z=D.id||G.getAttribute("id")||`swiper-wrapper-${f(16)}`;if(k(G,Z),D.wrapperLiveRegion){const ae=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";C(G,ae)}ce();let{nextEl:L,prevEl:Y}=e.navigation?e.navigation:{};L=St(L),Y=St(Y),L&&L.forEach(ae=>O(ae,Z,D.nextSlideMessage)),Y&&Y.forEach(ae=>O(ae,Z,D.prevSlideMessage)),V()&&St(e.pagination.el).forEach(se=>{se.addEventListener("keydown",A)}),Zt().addEventListener("visibilitychange",H),e.el.addEventListener("focus",te,!0),e.el.addEventListener("pointerdown",X,!0),e.el.addEventListener("pointerup",J,!0)};function oe(){i&&i.remove();let{nextEl:D,prevEl:B}=e.navigation?e.navigation:{};D=St(D),B=St(B),D&&D.forEach(Z=>Z.removeEventListener("keydown",A)),B&&B.forEach(Z=>Z.removeEventListener("keydown",A)),V()&&St(e.pagination.el).forEach(L=>{L.removeEventListener("keydown",A)}),Zt().removeEventListener("visibilitychange",H),e.el&&typeof e.el!="string"&&(e.el.removeEventListener("focus",te,!0),e.el.removeEventListener("pointerdown",X,!0),e.el.removeEventListener("pointerup",J,!0))}a("beforeInit",()=>{i=Vu("span",e.params.a11y.notificationClass),i.setAttribute("aria-live","assertive"),i.setAttribute("aria-atomic","true")}),a("afterInit",()=>{e.params.a11y.enabled&&le()}),a("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{e.params.a11y.enabled&&ce()}),a("fromEdge toEdge afterInit lock unlock",()=>{e.params.a11y.enabled&&$()}),a("paginationUpdate",()=>{e.params.a11y.enabled&&N()}),a("destroy",()=>{e.params.a11y.enabled&&oe()})}function ED({swiper:e,extendParams:t,on:a,emit:i,params:o}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let l,u,p=o&&o.autoplay?o.autoplay.delay:3e3,f=o&&o.autoplay?o.autoplay.delay:3e3,m,g=new Date().getTime(),x,y,v,S,k,C;function M(B){!e||e.destroyed||!e.wrapperEl||B.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",M),!(C||B.detail&&B.detail.bySwiperTouchMove)&&X())}const z=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?x=!0:x&&(f=m,x=!1);const B=e.autoplay.paused?m:g+f-new Date().getTime();e.autoplay.timeLeft=B,i("autoplayTimeLeft",B,B/p),u=requestAnimationFrame(()=>{z()})},A=()=>{let B;return e.virtual&&e.params.virtual.enabled?B=e.slides.find(Z=>Z.classList.contains("swiper-slide-active")):B=e.slides[e.activeIndex],B?parseInt(B.getAttribute("data-swiper-autoplay"),10):void 0},$=()=>{let B=e.params.autoplay.delay;const G=A();return!Number.isNaN(G)&&G>0&&(B=G),B},E=B=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(u),z();let G=B;typeof G>"u"&&(G=$(),p=G,f=G),m=G;const Z=e.params.speed,L=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(Z,!0,!0),i("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,Z,!0,!0),i("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(Z,!0,!0),i("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,Z,!0,!0),i("autoplay")),e.params.cssMode&&(g=new Date().getTime(),requestAnimationFrame(()=>{E()})))};return G>0?(clearTimeout(l),l=setTimeout(()=>{L()},G)):requestAnimationFrame(()=>{L()}),G},V=()=>{g=new Date().getTime(),e.autoplay.running=!0,E(),i("autoplayStart")},N=()=>{e.autoplay.running=!1,clearTimeout(l),cancelAnimationFrame(u),i("autoplayStop")},O=(B,G)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(l),B||(k=!0);const Z=()=>{i("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",M):X()};if(e.autoplay.paused=!0,G){Z();return}m=(m||e.params.autoplay.delay)-(new Date().getTime()-g),!(e.isEnd&&m<0&&!e.params.loop)&&(m<0&&(m=0),Z())},X=()=>{e.isEnd&&m<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(g=new Date().getTime(),k?(k=!1,E(m)):E(),e.autoplay.paused=!1,i("autoplayResume"))},J=()=>{if(e.destroyed||!e.autoplay.running)return;const B=Zt();B.visibilityState==="hidden"&&(k=!0,O(!0)),B.visibilityState==="visible"&&X()},H=B=>{B.pointerType==="mouse"&&(k=!0,C=!0,!(e.animating||e.autoplay.paused)&&O(!0))},te=B=>{B.pointerType==="mouse"&&(C=!1,e.autoplay.paused&&X())},ce=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",H),e.el.addEventListener("pointerleave",te))},le=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",H),e.el.removeEventListener("pointerleave",te))},oe=()=>{Zt().addEventListener("visibilitychange",J)},D=()=>{Zt().removeEventListener("visibilitychange",J)};a("init",()=>{e.params.autoplay.enabled&&(ce(),oe(),V())}),a("destroy",()=>{le(),D(),e.autoplay.running&&N()}),a("_freeModeStaticRelease",()=>{(v||k)&&X()}),a("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?N():O(!0,!0)}),a("beforeTransitionStart",(B,G,Z)=>{e.destroyed||!e.autoplay.running||(Z||!e.params.autoplay.disableOnInteraction?O(!0,!0):N())}),a("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){N();return}y=!0,v=!1,k=!1,S=setTimeout(()=>{k=!0,v=!0,O(!0)},200)}}),a("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!y)){if(clearTimeout(S),clearTimeout(l),e.params.autoplay.disableOnInteraction){v=!1,y=!1;return}v&&e.params.cssMode&&X(),v=!1,y=!1}}),a("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(m=$(),p=$())}),Object.assign(e.autoplay,{start:V,stop:N,pause:O,resume:X})}function MD(e){const{effect:t,swiper:a,on:i,setTranslate:o,setTransition:l,overwriteParams:u,perspective:p,recreateShadows:f,getEffectParams:m}=e;i("beforeInit",()=>{if(a.params.effect!==t)return;a.classNames.push(`${a.params.containerModifierClass}${t}`),p&&p()&&a.classNames.push(`${a.params.containerModifierClass}3d`);const x=u?u():{};Object.assign(a.params,x),Object.assign(a.originalParams,x)}),i("setTranslate _virtualUpdated",()=>{a.params.effect===t&&o()}),i("setTransition",(x,y)=>{a.params.effect===t&&l(y)}),i("transitionEnd",()=>{if(a.params.effect===t&&f){if(!m||!m().slideShadows)return;a.slides.forEach(x=>{x.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(y=>y.remove())}),f()}});let g;i("virtualUpdate",()=>{a.params.effect===t&&(a.slides.length||(g=!0),requestAnimationFrame(()=>{g&&a.slides&&a.slides.length&&(o(),g=!1)}))})}function zD(e,t){const a=q3(t);return a!==t&&(a.style.backfaceVisibility="hidden",a.style["-webkit-backface-visibility"]="hidden"),a}function RD({swiper:e,duration:t,transformElements:a,allSlides:i}){const{activeIndex:o}=e;if(e.params.virtualTranslate&&t!==0){let l=!1,u;u=a,u.forEach(p=>{oO(p,()=>{if(l||!e||e.destroyed)return;l=!0,e.animating=!1;const f=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(f)})})}}function LD({swiper:e,extendParams:t,on:a}){t({fadeEffect:{crossFade:!1}}),MD({effect:"fade",swiper:e,on:a,setTranslate:()=>{const{slides:l}=e,u=e.params.fadeEffect;for(let p=0;p<l.length;p+=1){const f=e.slides[p];let g=-f.swiperSlideOffset;e.params.virtualTranslate||(g-=e.translate);let x=0;e.isHorizontal()||(x=g,g=0);const y=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(f.progress),0):1+Math.min(Math.max(f.progress,-1),0),v=zD(u,f);v.style.opacity=y,v.style.transform=`translate3d(${g}px, ${x}px, 0px)`}},setTransition:l=>{const u=e.slides.map(p=>q3(p));u.forEach(p=>{p.style.transitionDuration=`${l}ms`}),RD({swiper:e,duration:l,transformElements:u,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}const OD=R.div`
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
`,DD=()=>{const{t:e}=Ge(),[t,a]=j.useState(0),i=j.useRef(null),o=l=>{var u;(u=i.current)==null||u.slideTo(l)};return d.jsx(OD,{children:d.jsxs(ie.section,{className:"section sticky-process",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.18},variants:mt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.process.title",{defaultValue:"Wie wir arbeiten"})}),d.jsx("p",{className:"section-description",children:e("home.process.desc",{defaultValue:"Ein transparenter Prozess ohne unnötige Schritte: vom kurzen Briefing bis zu Launch und Optimierung mit klaren Deadlines."})})]}),d.jsxs("div",{className:"sticky-process-grid",children:[d.jsx(ie.div,{className:"sticky-steps",role:"tablist","aria-label":e("home.process.aria",{defaultValue:"Projektphasen"}),variants:Nt,children:nh.map((l,u)=>d.jsxs(ie.button,{className:`sticky-step ${t===u?"active":""}`,onClick:()=>o(u),type:"button",role:"tab","aria-selected":t===u,variants:Ye,children:[d.jsx("span",{children:l.step}),d.jsx("p",{children:e(`home.process.steps.s${u+1}.title`,{defaultValue:["15-Minuten-Call","Prototyp in 48h","Entwicklung in 7-14 Tagen","Launch und Optimierung"][u]})})]},l.step))}),d.jsx(ie.article,{className:"sticky-process-card card",initial:{opacity:0,y:10,scale:.99},animate:{opacity:1,y:0,scale:1},transition:{duration:.32,ease:hn},children:d.jsx(rw,{modules:[AD,CD,LD,ED],effect:"fade",fadeEffect:{crossFade:!0},slidesPerView:1,speed:420,keyboard:{enabled:!0},autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},onSwiper:l=>{i.current=l,a(l.activeIndex)},onSlideChange:l=>a(l.activeIndex),className:"process-swiper",children:nh.map((l,u)=>d.jsx(sw,{children:d.jsx("div",{className:"process-slide",style:{"--process-bg":`url(${l.image})`},children:d.jsxs("div",{className:"process-content",children:[d.jsxs("div",{className:"process-kicker",children:[d.jsx("span",{className:"process-chip",children:l.step}),d.jsx("span",{className:"process-chip subtle",children:e("home.process.stage",{defaultValue:"Phase"})})]}),d.jsx("h3",{children:e(`home.process.steps.s${u+1}.title`,{defaultValue:["15-Minuten-Call","Prototyp in 48h","Entwicklung in 7-14 Tagen","Launch und Optimierung"][u]})}),d.jsx("p",{children:e(`home.process.steps.s${u+1}.text`,{defaultValue:["Wir klären Aufgabe, KPI und Deadline und stimmen sofort das Launch-Format ab.","Wir zeigen Seitenstruktur, CTA und Lead-Flow vor der Entwicklung.","Umsetzung, SEO-Basis, Integrationen und Analytics ohne unnötigen Overhead.","Wir gehen live, prüfen Conversion und liefern einen 30-Tage-Verbesserungsplan."][u]})}),d.jsxs("div",{className:"process-nav",children:[d.jsx("button",{type:"button",className:"nav-btn",onClick:()=>{var p;return(p=i.current)==null?void 0:p.slidePrev()},disabled:t===0,children:e("home.process.nav.prev",{defaultValue:"Zurück"})}),d.jsx("button",{type:"button",className:"nav-btn primary",onClick:()=>{var p;return(p=i.current)==null?void 0:p.slideNext()},disabled:t===nh.length-1,children:e("home.process.nav.next",{defaultValue:"Weiter"})})]})]})})},`${l.step}-${u}`))})})]})]})})},PD=({poster:e,video:t,title:a})=>{const i=j.useRef(null),o=async()=>{const u=i.current;if(u)try{u.currentTime=0,await u.play()}catch{}},l=()=>{const u=i.current;u&&(u.pause(),u.currentTime=0)};return d.jsxs("div",{className:"project-preview",onMouseEnter:o,onMouseLeave:l,onFocus:o,onBlur:l,tabIndex:0,"aria-label":a,children:[d.jsx("img",{src:e,alt:"",loading:"lazy"}),d.jsx("video",{ref:i,muted:!0,loop:!0,playsInline:!0,preload:"none",children:d.jsx("source",{src:t,type:"video/webm"})}),d.jsx("div",{className:"preview-overlay"})]})},VD=R.div`
  .projects-grid .project-card {
    display: grid;
    gap: 10px;
  }

  .project-preview {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    height: 170px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(0, 0, 0, 0.25);
    outline: none;
    transform: translateZ(0);
  }

  .project-preview img,
  .project-preview video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .project-preview video {
    opacity: 0;
    transform: scale(1.02);
    transition: opacity 220ms ease;
  }

  .project-preview .preview-overlay {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(600px 220px at 20% 10%, rgba(246, 211, 101, 0.16), transparent 60%),
      linear-gradient(180deg, rgba(11, 11, 15, 0.18), rgba(11, 11, 15, 0.62));
    opacity: 1;
    transition: opacity 220ms ease;
  }

  .project-preview:hover video,
  .project-preview:focus-visible video {
    opacity: 1;
  }

  .project-preview:hover .preview-overlay,
  .project-preview:focus-visible .preview-overlay {
    opacity: 0.25;
  }

  .project-preview:focus-visible {
    box-shadow: 0 0 0 2px rgba(246, 211, 101, 0.35);
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .project-tags span {
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 999px;
    padding: 5px 10px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.78);
  }
`,ND=()=>{const{t:e}=Ge();return d.jsx(VD,{children:d.jsxs(ie.section,{className:"section",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:mt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.projects.title",{defaultValue:"Projekte / Case Studies"})}),d.jsx("p",{className:"section-description",children:e("home.projects.desc",{defaultValue:"Reale Aufgaben und erwartbare Ergebnisse ohne leere Versprechen. Hover auf einen Case für Live-Preview."})})]}),d.jsx(ie.div,{className:"grid-2 projects-grid",variants:Nt,children:GR.map((t,a)=>d.jsx(ie.article,{className:"card project-card",variants:Ye,children:(()=>{const i={c1:"Website für lokale Anfragen",c2:"Landingpage für Ads",c3:"Website für Praxis",c4:"Dashboard für Leads"},o={c1:"Landingpage mit Fokus auf Formular, Anruf und schnellen Mobile-Kontakt.",c2:"Separate Seite mit Tracking für Meta- und Google-Kampagnen.",c3:"Klare Leistungsstruktur, FAQ und Online-Termin-Flow.",c4:"Internes Interface zur Lead-Bearbeitung und Statuskontrolle."},l={c1:"Ziel: mehr Anfragen ohne Budgeterhöhung",c2:"Erwarteter Effekt: qualifiziertere Leads aus Werbung",c3:"Ziel: mehr Terminbuchungen mit weniger Rückfragen",c4:"Erwarteter Effekt: schnellere Bearbeitung von Anfragen"},u=e(`home.projects.cards.${t.id}.title`,{defaultValue:i[t.id]||t.id}),p=e(`home.projects.cards.${t.id}.description`,{defaultValue:o[t.id]||""}),f=e(`home.projects.cards.${t.id}.goal`,{defaultValue:l[t.id]||""});return d.jsxs(d.Fragment,{children:[d.jsx(PD,{poster:t.poster,video:t.video,title:u}),d.jsx("h3",{children:u}),d.jsx("p",{children:p}),d.jsx("div",{className:"project-tags",children:t.tags.map(m=>d.jsx("span",{children:m},`${m}-${a}`))}),d.jsx("p",{className:"muted",children:f})]})})()},t.id))})]})})},BD=R.div`
  .trust-grid .card {
    min-height: 132px;
  }
`,_D=()=>{const{t:e}=Ge();return d.jsx(BD,{children:d.jsxs(ie.section,{className:"section",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:mt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.trust.title",{defaultValue:"Was Sie in 14 Tagen bekommen"})}),d.jsx("p",{className:"section-description",children:e("home.trust.desc",{defaultValue:"Konkrete Start-Ergebnisse: eine anfrageorientierte Website, eingerichtete Analytics und ein Plan für weiteres Wachstum."})})]}),d.jsx(ie.div,{className:"grid-2 trust-grid",variants:Nt,children:IR.map(t=>d.jsxs(ie.article,{className:"card",variants:Ye,children:[d.jsx("h3",{children:e(`home.trust.deliverables.${t}.title`,{defaultValue:{d1:"Prototyp in 48h",d2:"Website für Anfragen",d3:"Analytics und Tracking",d4:"30-Tage-Optimierungsplan"}[t]})}),d.jsx("p",{className:"muted",children:e(`home.trust.deliverables.${t}.text`,{defaultValue:{d1:"Wir zeigen Struktur und CTA vor dem Coding, damit Entscheidungen planbar bleiben.",d2:"Formular, Anruf, Messenger und mobile Version für schnelle Kontaktaufnahme.",d3:"GA4 plus Events, damit sichtbar wird, wo Anfragen entstehen.",d4:"Klare nächste Schritte zur Conversion-Steigerung nach Launch."}[t]})})]},t))})]})})},HD=R.div`
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
`,$D=()=>{const e=NR();return VR(e),d.jsx(HD,{children:d.jsx("div",{className:"page",children:d.jsxs("div",{className:"container",children:[d.jsx(kL,{reducedMotion:e}),d.jsx(YL,{}),d.jsx("div",{className:"section-divider"}),d.jsx(XL,{}),d.jsx("div",{className:"section-divider"}),d.jsx(DD,{}),d.jsx("div",{className:"section-divider"}),d.jsx(ND,{}),d.jsx("div",{className:"section-divider"}),d.jsx(hL,{}),d.jsx("div",{className:"section-divider"}),d.jsx(_D,{}),d.jsx(gL,{})]})})})},UD=(e,t,a,i)=>`${a}${e.toFixed(t)}${i}`,Uc=({start:e,max:t,target:a,decimals:i=0,prefix:o="",suffix:l="",durationMs:u=1800,storageKey:p})=>{const f=a??t,[m,g]=j.useState(e),[x,y]=j.useState(!0),v=j.useRef(null);j.useEffect(()=>{if(typeof window>"u")return;if(p&&window.sessionStorage.getItem(p)==="1"){g(f),y(!1);return}let k=0;const C=e,M=f,z=A=>{k||(k=A);const $=Math.min((A-k)/u,1),E=C+(M-C)*$;g(E),$<1?v.current=window.requestAnimationFrame(z):(y(!1),g(M),p&&window.sessionStorage.setItem(p,"1"))};return v.current=window.requestAnimationFrame(z),()=>{v.current&&window.cancelAnimationFrame(v.current)}},[u,f,e,p]);const S=j.useMemo(()=>UD(m,i,o,l),[m,i,o,l]);return d.jsxs(ie.span,{className:"live-metric command-line-metric",initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.42},children:[S,x?d.jsx("span",{className:"terminal-cursor",children:"|"}):null]})},GD={copy:{eyebrow:"Almanya'daki yerel şirketler için öncü sistemler",heroTitle:["Trafikten","nitelikli potansiyel müşteriler","als steuerbares System"],heroLead:"Satış, pazarlama ve sahiplerin aynı verilerle çalışabilmesi için web sitesini, yapay zekayı, reklamları ve analitiği tek bir operasyonel mimaride birleştiriyoruz.",ctaTop:"Stratejik çağrıyı başlat",heroChips:["Potansiyel Müşteri Akışı","Yapay Zeka Yeterliliği","Atıf"],heroChipValues:["Canlı Yayın","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","İniş + Takip","Yapay Zeka Yeterliliği","CRM Boru Hattı"],heroBadges:["Sunucu tarafı izleme","Potansiyel Müşteri Puanlaması","ROAS Görünümü"],servicesTitle:"Sistem modülleri olarak hizmetler",servicesDesc:"Tek tip bir kart bloğu değil: baskın bir çekirdek, yan modüller ve kompakt bir operasyon katmanı.",trio:["Sorun","sistemi","Sonuç"],detailsSummary:"Uygulama ayrıntıları",kpiBadgesTitle:"KPI rozetleri",kpiBadgesDesc:"Her performans, yalnızca satış ve pazarlamanın birlikte okuyup kontrol edebileceği önemli rakamlar kullanılarak değerlendirilir.",signalLayerTitle:"Sinyal Katmanı",signalItems:["GA4 etkinlikleri","Meta CAPI'si","CRM Senkronizasyonu","GDPR modası"],opsTitle:"Operasyon Notları",opsItems:["Haftalık Test Sırası","Bütçenin Yeniden Dağıtılması","Dönüşüm Hunisi QA Yuvaları"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Tavsiye edilir",timelineTitle:"Nasıl çalışıyoruz?",stepLabel:"Adım",controlTitle:"Kontrol Odası: Gerçek zamanlı sonuçlar",controlPanelTitle:"Kontrol Paneli Mimarisi",controlPanelDesc:"Kanal verileri, huni sinyalleri ve CRM durumu tek bir görünümde birleşiyor. Kararlar içgüdüsel olarak değil, süreç düzeyinde alınır.",miniCharts:["Potansiyel Müşteri Hacmi","Kalite Puanı","Anlaşma Hızı"],kpiPanelTitle:"Canlı KPI Sayaçları",kpiLabels:["Nitelikli Potansiyel Müşteriler","Ort. İlk yanıt","Randevuya götür","ROAS kümeleri"],controlBadges:["Liderlik kontrolü","Bütçe kontrolü","Dönüşüm hunisi kontrolü"],ctaBottom:"Potansiyel müşteri sisteminiz için kapsam isteyin"},systems:{website:{title:"Web Sitesi Motoru",problem:"Trafik var ama mobil kullanıcılar formdan önce çıkıyor.",system:"GA4, Meta Piksel, sunucu tarafı izleme, CRM ve GDPR kurulumuyla Açılış/Çoklu Sayfa.",outcome:"Her müşteri izlenebilir bir şekilde kayıt altına alınır ve açıkça bir kanala atanır.",kpis:["izleme oranı","Form Doldurma","Potansiyel Müşteri Kaynağının Netliği"],details:["İzin modu doğru şekilde yapılandırıldı","Çağrı ve WhatsApp etkinlikleri","Gerçek zamanlı CRM aktarımı"]},ai:{title:"Yapay Zeka Yeterlilik Katmanı",problem:"Çok fazla niteliksiz soru satışları ve telefon ekibini engelliyor.",system:"Yapay zeka sohbet robotu, otomatik yeterlilik, WhatsApp/Instagram'da DM akışları, e-posta otomasyonu, müşteri adayı puanlama.",outcome:"Ekip, zaman alıcı ilk sıralama yerine satışla ilgili potansiyel müşterilere öncelik veriyor.",kpis:["İlk yanıt süresi","Nitelikli Potansiyel Müşteri Payı","Satış Ekibi Verimi"],details:["Sektöre özel bilgi istemi yolları","Gösterilmemesi Hatırlatıcıları","Puana göre önceliklendirme"]},ads:{title:"Ücretli Edinme",problem:"Bütçe kanallar arasında net bir öğrenme döngüsü olmadan dağıtılıyor.",system:"Google Ads + Meta Reklamlar + TikTok, A/B testleri, benzerler, dönüşüm izleme ve ROAS görünümü.",outcome:"Bütçe, salt tıklama hacmi yerine yüksek potansiyel müşteri kalitesine sahip kampanyalara akıyor.",kpis:["Nitelikli potansiyel müşteri başına maliyet","Kampanyaya göre ROAS","Yaratıcı Kazanma Oranı"],details:["Bölgesel kampanya kümeleri","Testteki şekil çeşitleri","Sinyale dayalı kitle güncellemeleri"]},analytics:{title:"Kontrol Analitiği",problem:"Kararlar, güvenilir huni verileri yerine platform ekran görüntülerine dayanmaktadır.",system:"Tek düzeyde kanal, huni ve CRM görünümlerini içeren kontrol odası kontrol paneli.",outcome:"Haftalık bütçe, optimizasyon ve ölçeklendirme kararları verilere dayalı olarak izlenebilir.",kpis:["Randevuya Yol Açmak","Anlaşmaya varmak","Boru Hattı Hızı"],details:["Bölgeye/hizmete göre segmentasyon","Huni Düşme Uyarıları","Aylık hipotez listesi"]}},packages:[{id:"başlangıç",title:"Başlangıç",scale:1,lead:"Sıfırdan ölçülebilir bir potansiyel müşteri tabanına giden yerel işletmeler için.",items:["Web dönüşüm hunisi + GA4","Meta Pikseller + İzin","CRM Yakalama","Temel raporlama"],effect:"Potansiyel müşteri kaynaklarının net görünümü ve esnek bir başlangıç süreci."},{id:"büyüme",title:"Büyüme",scale:2,recommended:!0,lead:"Daha nitelikli potansiyel müşterilere ihtiyaç duyan aktif satışları olan ekipler için.",items:["Google + Meta kampanyaları","Yapay Zeka Yeterlilik Akışları","A/B Test Kurulumu","Müşteri Adayı Puanlama + Otomasyon"],effect:"Daha iyi yanıt süreleri ve net önceliklendirme ile daha nitelikli talep."},{id:"ölçeği",title:"Terazi",scale:3,lead:"Birden fazla bölgeye veya hizmet kümesine sahip şirketler için.",items:["Çok kanallı kontrol","Sunucu Tarafı İlişkilendirmesi","Ops Web Uygulama Katmanı","Kontrol odası yönetimi"],effect:"Manuel deneme yanılma yerine süreçler ve güvenilir veriler üzerinden ölçeklendirme."}],timeline:[["01","Stratejik çağrı","Hedef pazar, teklif ve müşteri adayı darboğazı açıkça tanımlanmıştır."],["02","Kapsam belgesi","Kanal planı, takip planı ve sorumluluklar belirlendi."],["03","Yapım aşaması","Web sitesi otomasyonları ve entegrasyonları gerçekleştirilir."],["04","Lansman","QA takibi, kampanya lansmanı ve CRM akışları yayına giriyor."],["05","Optimizasyon","Reklam öğeleri, dönüşüm hunileri ve kalifikasyon için haftalık testler."],["06","Ölçekleme","İşleyen rotalar bölgelere/hizmetlere genişletildi."]]},ID={copy:{eyebrow:"الأنظمة الرائدة للشركات المحلية في ألمانيا",heroTitle:["من حركة المرور","العملاء المتوقعون المؤهلون","كنظام يمكن السيطرة عليه"],heroLead:"نقوم بربط مواقع الويب والذكاء الاصطناعي والإعلانات والتحليلات في بنية تشغيلية واحدة بحيث يعمل فريق المبيعات والتسويق والمالكون بنفس البيانات.",ctaTop:"ابدأ المكالمة الإستراتيجية",heroChips:["تدفق الرصاص","تأهل الذكاء الاصطناعي","الإسناد"],heroChipValues:["المدخول المباشر","رسالة مباشرة + بوت","GA4 + إدارة علاقات العملاء"],flowNodes:["جوجل / ميتا / تيك توك","الهبوط + التتبع","مؤهل الذكاء الاصطناعي","خط أنابيب إدارة علاقات العملاء"],heroBadges:["التتبع من جانب الخادم","نقاط الرصاص","عرض عائد النفقات الإعلانية"],servicesTitle:"الخدمات كوحدات النظام",servicesDesc:"ليست كتلة بطاقات موحدة: نواة مهيمنة ووحدات جانبية وطبقة عمليات مدمجة.",trio:["مشكلة","System","النتيجة"],detailsSummary:"تفاصيل التنفيذ",kpiBadgesTitle:"شارات مؤشرات الأداء الرئيسية",kpiBadgesDesc:"يتم تقييم كل أداء حصريًا باستخدام الأرقام الرئيسية التي يمكن للمبيعات والتسويق قراءتها والتحكم فيها معًا.",signalLayerTitle:"طبقة الإشارة",signalItems:['أحداث "إحصاءات Google" 4',"ميتا كابي","مزامنة إدارة علاقات العملاء","موضة القانون العام لحماية البيانات"],opsTitle:"ملاحظات العمليات",opsItems:["قائمة انتظار الاختبار الأسبوعية","إعادة تخصيص الميزانية","فتحات ضمان الجودة"],packagesTitle:"Pakete in SaaS-Logik",recommended:"موصى به",timelineTitle:"كيف نعمل",stepLabel:"الخطوة",controlTitle:"غرفة التحكم: النتائج في الوقت الحقيقي",controlPanelTitle:"بنية لوحة المعلومات",controlPanelDesc:"تتلاقى بيانات القناة وإشارات مسار التحويل وحالة إدارة علاقات العملاء (CRM) في عرض واحد. يتم اتخاذ القرارات على مستوى العملية بدلاً من الاعتماد على الشعور الغريزي.",miniCharts:["حجم الرصاص","نقاط الجودة","سرعة الصفقة"],kpiPanelTitle:"عدادات مؤشرات الأداء الرئيسية المباشرة",kpiLabels:["العملاء المتوقعون المؤهلون","متوسط. الرد الأول","يؤدي إلى التعيين","مجموعات عائد الإنفاق الإعلاني (ROAS)."],controlBadges:["التحكم في الرصاص","مراقبة الميزانية","التحكم في مسار التحويل"],ctaBottom:"نطاق الطلب لنظام العملاء المحتملين الخاص بك"},systems:{website:{title:"محرك الموقع",problem:"حركة المرور موجودة، لكن مستخدمي الهاتف المحمول يتخلون عنها قبل النموذج.",system:"الصفحات المقصودة/الصفحات المتعددة مع GA4 وMeta Pixel والتتبع من جانب الخادم وإدارة علاقات العملاء وإعداد القانون العام لحماية البيانات (GDPR).",outcome:"يتم تسجيل كل عميل متوقع بطريقة يمكن تتبعها وتعيينها بوضوح إلى القناة.",kpis:["معدل التتبع","إكمال النموذج","وضوح مصدر الرصاص"],details:["تم تكوين وضع الموافقة بشكل صحيح","أحداث الاتصال والواتس اب","دفع CRM في الوقت الحقيقي"]},ai:{title:"طبقة تأهيل الذكاء الاصطناعي",problem:"يؤدي وجود عدد كبير جدًا من الاستفسارات غير المؤهلة إلى عرقلة المبيعات وفريق الهاتف.",system:"روبوت الدردشة المدعم بالذكاء الاصطناعي، والتأهيل التلقائي، وتدفقات الرسائل المباشرة في WhatsApp/Instagram، وأتمتة البريد الإلكتروني، وسجل العملاء المحتملين.",outcome:"يقوم الفريق بإعطاء الأولوية للعملاء المحتملين المرتبطين بالمبيعات بدلاً من الفرز الأولي الذي يستغرق وقتًا طويلاً.",kpis:["وقت الاستجابة الأول","مشاركة العميل المحتمل المؤهل","إنتاجية فريق المبيعات"],details:["مسارات المطالبة الخاصة بالصناعة","عدم عرض التذكيرات","تحديد الأولويات حسب النتيجة"]},ads:{title:"الاستحواذ المدفوع",problem:"يتم توزيع الميزانية بين القنوات بدون حلقة تعليمية واضحة.",system:"إعلانات Google + Meta Ads + TikTok، واختبارات A/B، والمشابهين، وتتبع التحويل، وعرض عائد الإنفاق الإعلاني (ROAS).",outcome:"تتدفق الميزانية إلى الحملات ذات جودة العملاء المحتملين العالية بدلاً من حجم النقرات النقي.",kpis:["التكلفة لكل عميل محتمل مؤهل","عائد النفقات الإعلانية حسب الحملة","معدل الفوز الإبداعي"],details:["مجموعات الحملات الإقليمية","متغيرات الشكل في الاختبار","تحديثات الجمهور المستندة إلى الإشارة"]},analytics:{title:"تحليلات التحكم",problem:"تعتمد القرارات على لقطات شاشة النظام الأساسي بدلاً من بيانات مسار التحويل الموثوقة.",system:"لوحة معلومات غرفة التحكم مع طرق عرض القناة ومسار التحويل وإدارة علاقات العملاء (CRM) على مستوى واحد.",outcome:"يمكن تتبع القرارات الأسبوعية بشأن الميزانية والتحسين والقياس بناءً على البيانات.",kpis:["يؤدي إلى التعيين","يؤدي إلى التعامل","سرعة خط الأنابيب"],details:["التقسيم حسب المنطقة/الخدمة","تنبيهات إسقاط مسار التحويل","قائمة الفرضيات الشهرية"]}},packages:[{id:"بداية",title:"كاتب",scale:1,lead:"للشركات المحلية التي تنتقل من الصفر إلى قاعدة عملاء قابلة للقياس.",items:["مسار تحويل الويب + GA4","Meta Pixels + الموافقة","التقاط إدارة علاقات العملاء","إعداد التقارير الأساسية"],effect:"رؤية واضحة لمصادر العملاء المحتملين وعملية أولية مرنة."},{id:"النمو",title:"النمو",scale:2,recommended:!0,lead:"للفرق ذات المبيعات النشطة التي تحتاج إلى المزيد من العملاء المحتملين المؤهلين.",items:["حملات جوجل + ميتا","تدفقات تأهيل الذكاء الاصطناعي","إعداد اختبار أ/ب","تسجيل نقاط العميل المتوقع + الأتمتة"],effect:"طلب أكثر تأهيلاً مع أوقات استجابة أفضل وتحديد أولويات واضح."},{id:"scale",title:"مقياس",scale:3,lead:"للشركات ذات المناطق أو مجموعات الخدمة المتعددة.",items:["تحكم متعدد القنوات","الإسناد من جانب الخادم","طبقة تطبيق ويب العمليات","إدارة غرفة التحكم"],effect:"التوسع من خلال العمليات والبيانات الموثوقة بدلاً من التجربة والخطأ اليدويين."}],timeline:[["01","النداء الاستراتيجي","السوق المستهدف والعرض واختناقات الرصاص محددة بوضوح."],["02","مستند النطاق","تم إصلاح خطة القناة وخطة التتبع والمسؤوليات."],["03","مرحلة البناء","يتم تنفيذ موقع الويب والأتمتة والتكامل."],["04","الإطلاق","بدء تشغيل تتبع ضمان الجودة وإطلاق الحملة وتدفقات إدارة علاقات العملاء."],["05","التحسين","اختبارات أسبوعية للمبدعين والمسارات والتأهيل."],["06","التحجيم","يتم توسيع مسارات العمل إلى المناطق/الخدمات."]]},FD={copy:{eyebrow:"Systemy wiodące dla lokalnych firm w Niemczech",heroTitle:["Z ruchu","kwalifikowani potencjalni klienci","jako system sterowalny"],heroLead:"Łączymy stronę internetową, sztuczną inteligencję, reklamy i analitykę w jedną architekturę operacyjną, aby sprzedaż, marketing i właściciele pracowali z tymi samymi danymi.",ctaTop:"Rozpocznij rozmowę strategiczną",heroChips:["Przepływ ołowiu","AI Zakwalifikuj się","Uznanie autorstwa"],heroChipValues:["Ujęcie na żywo","DM + Bot","GA4 + CRM"],flowNodes:["Google/Meta/TikTok","Lądowanie + śledzenie","Kwalifikacja AI","Potok CRM"],heroBadges:["Śledzenie po stronie serwera","Punktacja leadów","ROAS Widok"],servicesTitle:"Usługi jako moduły systemu",servicesDesc:"Niejednolity blok kart: dominujący rdzeń, moduły flankujące i zwarta warstwa operacyjna.",trio:["Problem","systemu","Wynik"],detailsSummary:"Szczegóły implementacji",kpiBadgesTitle:"Odznaki KPI",kpiBadgesDesc:"Każde wyniki ocenia się wyłącznie na podstawie kluczowych danych, które sprzedaż i marketing mogą wspólnie odczytać i kontrolować.",signalLayerTitle:"Warstwa sygnału",signalItems:["Zdarzenia GA4","MetaCAPI","Synchronizacja CRM","Moda na RODO"],opsTitle:"Notatki operacyjne",opsItems:["Cotygodniowa kolejka testów","Realokacja budżetu","Szczeliny kontroli jakości lejka"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Zalecane",timelineTitle:"Jak pracujemy",stepLabel:"Krok",controlTitle:"Control Room: Wyniki w czasie rzeczywistym",controlPanelTitle:"Architektura pulpitu nawigacyjnego",controlPanelDesc:"Dane kanału, sygnały ze ścieżek i status CRM są zebrane w jednym widoku. Decyzje podejmowane są na poziomie procesu, a nie na podstawie przeczuć.",miniCharts:["Ilość leadów","Wynik Jakości","Prędkość rozdania"],kpiPanelTitle:"Liczniki KPI na żywo",kpiLabels:["Kwalifikowani potencjalni klienci","Średnia Pierwsza odpowiedź","Doprowadź do spotkania","Klastry ROAS"],controlBadges:["Kontrola leadów","Kontrola budżetu","Sterowanie lejkiem"],ctaBottom:"Zakres żądania dla Twojego systemu wiodącego"},systems:{website:{title:"Silnik strony internetowej",problem:"Ruch jest, ale użytkownicy mobilni rezygnują przed formularzem.",system:"Landing/Wielostronicowy z GA4, Meta Pixel, śledzeniem po stronie serwera, konfiguracją CRM i RODO.",outcome:"Każdy lead jest rejestrowany w sposób identyfikowalny i wyraźnie przypisany do kanału.",kpis:["szybkość śledzenia","Wypełnienie formularza","Przejrzystość źródła potencjalnego klienta"],details:["Tryb zgody skonfigurowany poprawnie","Połączenia i zdarzenia WhatsApp","CRM push w czasie rzeczywistym"]},ai:{title:"Warstwa kwalifikacji AI",problem:"Zbyt wiele niewykwalifikowanych zapytań blokuje sprzedaż i zespół telefoniczny.",system:"Chatbot AI, automatyczna kwalifikacja, przepływy DM w WhatsApp/Instagramie, automatyzacja poczty e-mail, scoring leadów.",outcome:"Zespół priorytetowo traktuje leady związane ze sprzedażą, zamiast czasochłonnego wstępnego sortowania.",kpis:["Czas pierwszej odpowiedzi","Kwalifikowany udział wiodący","Wydajność zespołu sprzedaży"],details:["Ścieżki podpowiedzi specyficzne dla branży","Przypomnienia o braku pokazu","Priorytetyzacja według wyniku"]},ads:{title:"Płatne pozyskiwanie",problem:"Budżet jest rozdzielany pomiędzy kanały bez wyraźnej pętli uczenia się.",system:"Google Ads + Meta Ads + TikTok, testy A/B, lookalikes, śledzenie konwersji i widok ROAS.",outcome:"Budżet wpływa na kampanie o wysokiej jakości potencjalnych klientów, a nie na samą liczbę kliknięć.",kpis:["Koszt za kwalifikowanego potencjalnego klienta","ROAS według kampanii","Współczynnik wygranych kreacji"],details:["Regionalne klastry kampanii","Warianty kształtu w teście","Aktualizacje odbiorców na podstawie sygnału"]},analytics:{title:"Analityka kontroli",problem:"Decyzje podejmowane są na podstawie zrzutów ekranu platformy, a nie wiarygodnych danych z lejka.",system:"Pulpit kontrolny z widokami kanałów, lejków i CRM na jednym poziomie.",outcome:"Cotygodniowe decyzje dotyczące budżetu, optymalizacji i skalowania są identyfikowalne na podstawie danych.",kpis:["Prowadź do spotkania","Prowadzić do transakcji","Prędkość rurociągu"],details:["Segmentacja według regionu/usługi","Alerty o spadku ścieżki","Miesięczna lista hipotez"]}},packages:[{id:"rozrusznik",title:"Rozrusznik",scale:1,lead:"Dla lokalnych firm przechodzących od zera do mierzalnej bazy leadów.",items:["Lejek internetowy + GA4","Meta piksele + zgoda","Przechwytywanie CRM","Podstawowe raportowanie"],effect:"Jasny obraz źródeł potencjalnych klientów i odporny proces początkowy."},{id:"wzrostu",title:"Wzrost",scale:2,recommended:!0,lead:"Dla zespołów z aktywną sprzedażą, które potrzebują większej liczby wykwalifikowanych potencjalnych klientów.",items:["Kampanie Google + Meta","Przepływy kwalifikacji AI","Konfiguracja testów A/B","Punktacja leadów + automatyzacja"],effect:"Bardziej kwalifikowany popyt z lepszymi czasami reakcji i jasnym ustalaniem priorytetów."},{id:"scale",title:"Skala",scale:3,lead:"Dla firm z wieloma regionami lub klastrami usług.",items:["Sterowanie wielokanałowe","Atrybucja po stronie serwera","Warstwa aplikacji internetowej Ops","Zarządzanie sterownią"],effect:"Skalowanie poprzez procesy i wiarygodne dane zamiast ręcznej metody prób i błędów."}],timeline:[["01","Połączenie strategiczne","Rynek docelowy, oferta i wiodące wąskie gardło są jasno określone."],["02","Dokument dotyczący zakresu","Plan kanału, plan śledzenia i obowiązki są stałe."],["03","Faza budowy","Serwis WWW, wdrażane są automatyzacje i integracje."],["04","Uruchomienie","Śledzenie kontroli jakości, uruchamiania kampanii i przepływów CRM zostaje uruchomione."],["05","Optymalizacja","Cotygodniowe testy kreacji, lejków i kwalifikacji."],["06","Skalowanie","Funkcjonujące trasy są rozszerzone o regiony/usługi."]]},qD={copy:{eyebrow:"Pergalên pêşeng ji bo pargîdaniyên herêmî yên li Elmanyayê",heroTitle:["Ji Trafîkê","pêşengên jêhatî","wekî pergalek kontrolkirî"],heroLead:"Em malper, AI, reklam û analîtîk di yek mîmariya xebitandinê de girêdidin da ku firotgeh, kirrûbirra û xwedan bi heman daneyan re bixebitin.",ctaTop:"Banga stratejîk dest pê bikin",heroChips:["Lead Flow","AI Qualify","Attribution"],heroChipValues:["Vegirtina Zindî","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Daxistina + Şopandin","Qalîteya AI","CRM Pipeline"],heroBadges:["Şopandina server-side","Nîşandana Serê","Dîtina ROAS"],servicesTitle:"Karûbarên wekî modulên pergalê",servicesDesc:"Ne bloka qerta yekgirtî: bingehek serdest, modulên alîgir û qatek operasyonên tevlihev.",trio:["Pirsgirêk","System","Encam"],detailsSummary:"Agahiyên pêkanînê",kpiBadgesTitle:"nîşaneyên KPI",kpiBadgesDesc:"Her performans bi taybetî bi karanîna hejmarên sereke yên ku firotgeh û kirrûbirra dikarin bi hev re bixwînin û kontrol bikin têne nirxandin.",signalLayerTitle:"Signal Layer",signalItems:["bûyerên GA4","Meta CAPI","CRM Sync","moda GDPR"],opsTitle:"Têbînîyên Ops",opsItems:["Dora Testa Heftane","Veqetandina budceyê","Funnel QA Slots"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Pêşniyar kirin",timelineTitle:"Em çawa dixebitin",stepLabel:"Gavê",controlTitle:"Odeya Kontrolê: Encam di wextê rast de",controlPanelTitle:"Mîmariya Dashboard",controlPanelDesc:"Daneyên kanalê, sînyalên funnel û rewşa CRM di yek dîmenê de li hev dicivin. Biryar di asta pêvajoyê de li şûna ku li ser bingeha hestiyariyê têne girtin.",miniCharts:["Volume Lead","Pîvana Kalîteyê","Deal Leza"],kpiPanelTitle:"Hejmarên KPI-ya Zindî",kpiLabels:["Rêberên Qeydkirî","Avg. Bersiva yekem","Ber bi randevûyê ve bibe","ROAS Cluster"],controlBadges:["Kontrola rêber","Kontrola budceyê","Kontrola funnel"],ctaBottom:"Ji bo pergala rêberiya xwe qada xwe daxwaz bikin"},systems:{website:{title:"Motora Malperê",problem:"Trafîk li wir e, lê bikarhênerên mobîl berê xwe didin formê.",system:"Zevî / Pir-Rûpel bi GA4, Meta Pixel, şopandina server-side, sazkirina CRM û GDPR.",outcome:"Her lînka bi şêwazek peydakirî tê tomar kirin û bi zelalî ji kanalek re tê veqetandin.",kpis:["rêjeya şopandinê","Temamkirina Formê","Zelaliya Çavkaniya Rêber"],details:["Moda razîbûnê rast hate mîheng kirin","Bang û bûyerên WhatsApp","CRM di wextê rast de bişopîne"]},ai:{title:"Qatê Qalîteya AI",problem:"Pir lêpirsînên bêkalîte firotan û tîmê têlefonê asteng dikin.",system:"chatbotê AI-ê, kalîteya xweser, DM di WhatsApp/Instagram-ê de diherike, otomasyona e-nameyê, pîvana pêşeng.",outcome:"Tîm li şûna rêzkirina destpêkê ya dem-dixwe, pêşengên bi firotanê ve girêdayî ye.",kpis:["Dema bersivê ya yekem","Parvekirina Pêşkêşiya Qeydkirî","Rêjeya Tîma Firotanê"],details:["Rêçên bilez ên pîşesaziyê","Bîranînên Nîşan Nade","Pêşniyarkirin li gorî puanê"]},ads:{title:"Bidestxistina Pad",problem:"Budçe di navbera kanalan de bêyî çerxa fêrbûnê ya zelal tê dabeş kirin.",system:"Google Ads + Meta Ads + TikTok, testên A/B, xuyang, şopandina veguheztinê û dîtina ROAS.",outcome:"Budçe li şûna voltaja klîk a paqij di kampanyayên bi kalîteya pêşeng a bilind de diherike.",kpis:["Mesrefa serê pêşengê jêhatî","ROAS ji hêla Kampanyayê ve","Rêjeya Serketina Afirîner"],details:["Komên kampanyaya herêmî","Guhertoyên şikilê di ceribandinê de","Nûvekirinên temaşevanan-based sînyala"]},analytics:{title:"Analîtîk kontrol bikin",problem:"Biryar li şûna daneyên pêbawer ên pêbawer li ser dîmenên platformê têne çêkirin.",system:"Tabloya jûreya kontrolê bi dîtinên kanal, kavil û CRM li yek astê.",outcome:"Biryarên heftane yên li ser budce, xweşbînkirin û pîvandinê li ser bingeha daneyan têne şopandin.",kpis:["Ber bi Randevûyê ve bibe","Bi rê ve bibin","Leza boriyê"],details:["Segmentkirin li gorî herêm/xizmet","Agahiyên Daxistina Funnel","Lîsteya hîpoteza mehane"]}},packages:[{id:"destpêk",title:"Destpêker",scale:1,lead:"Ji bo karsaziyên herêmî ku ji sifirê diçin bingehek pêşeng a pîvandî.",items:["Kanala Web + GA4","Meta Pixels + Destûr","Girtina CRM","Raporkirina bingehîn"],effect:"Dîtina zelal a çavkaniyên pêşeng û pêvajoyek destpêkê ya berxwedêr."},{id:"mezinbûn",title:"Mezinbûn",scale:2,recommended:!0,lead:"Ji bo tîmên xwedan firotana çalak ku hewceyê pêşengên jêhatîtir in.",items:["Google + Meta Kampagnen","Qalîteya AI-ê diherike","Sazkirina Testkirina A/B","Nîgarkirina Serê + Otomasyon"],effect:"Daxwaza jêhatîtir bi demên bersivdayînê çêtir û pêşengiya zelal."},{id:"scale",title:"Pîvana",scale:3,lead:"Ji bo pargîdaniyên bi gelek herêm an komên karûbarê.",items:["Kontrola pir-kanal","Server-Side Attribution","Ops Web App Layer","Rêveberiya odeya kontrolê"],effect:"Li şûna ceribandin û xeletiya destan, bi pêvajo û daneyên pêbawer ve pîvandin."}],timeline:[["01","Banga Stratejîk","Bazara armanc, pêşkêşî û kêşeya pêşeng bi zelalî têne destnîşan kirin."],["02","Belgeya çarçovê","Plana kanalê, plana şopandinê û berpirsiyarî têne rast kirin."],["03","Qonaxa avakirinê","Malper, otomasyon û entegrasyon têne pêkanîn."],["04","Destpêkirin","Şopandina QA, destpêkirina kampanyayê û herikîna CRM zindî diçin."],["05","Optimîzasyon","Testên heftane ji bo afirîner, kavil û jêhatîbûnê."],["06","Scaling","Rêçên fonksiyonel li herêm / karûbaran têne berfireh kirin."]]},KD={copy:{eyebrow:"سیستم های رهبری برای شرکت های محلی در آلمان",heroTitle:["از ترافیک","سرنخ های واجد شرایط","به عنوان یک سیستم قابل کنترل"],heroLead:"ما وب سایت، هوش مصنوعی، تبلیغات و تجزیه و تحلیل را در یک معماری عملیاتی به هم متصل می کنیم تا فروش، بازاریابی و مالکان با داده های یکسان کار کنند.",ctaTop:"تماس استراتژیک را شروع کنید",heroChips:["جریان سرب","AI Qualify","اسناد"],heroChipValues:["مصرف زنده","DM + ربات","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","فرود + ردیابی","صلاحیت هوش مصنوعی","خط لوله CRM"],heroBadges:["ردیابی سمت سرور","امتیازدهی برتر","نمای ROAS"],servicesTitle:"خدمات به عنوان ماژول های سیستم",servicesDesc:"یک بلوک کارت یکنواخت نیست: یک هسته غالب، ماژول های کناری و یک لایه عملیات فشرده.",trio:["مشکل","System","نتیجه"],detailsSummary:"جزئیات پیاده سازی",kpiBadgesTitle:"نشان های KPI",kpiBadgesDesc:"هر عملکرد منحصراً با استفاده از ارقام کلیدی ارزیابی می شود که فروش و بازاریابی می توانند با هم بخوانند و کنترل کنند.",signalLayerTitle:"لایه سیگنال",signalItems:["رویدادهای GA4","متا CAPI","CRM Sync","مد GDPR"],opsTitle:"یادداشت های عملیاتی",opsItems:["صف تست هفتگی","تخصیص مجدد بودجه","قیف QA اسلات"],packagesTitle:"Pakete in SaaS-Logik",recommended:"توصیه می شود",timelineTitle:"چگونه کار می کنیم",stepLabel:"گام",controlTitle:"اتاق کنترل: نتایج در زمان واقعی",controlPanelTitle:"معماری داشبورد",controlPanelDesc:"داده های کانال، سیگنال های قیف و وضعیت CRM در یک نما همگرا می شوند. تصمیمات به جای اینکه بر اساس احساس درونی باشد، در سطح فرآیند گرفته می شود.",miniCharts:["حجم سرب","امتیاز کیفیت","سرعت معامله"],kpiPanelTitle:"شمارنده های KPI زنده",kpiLabels:["سرنخ های واجد شرایط","میانگین اولین پاسخ","منجر به قرار ملاقات","خوشه های ROAS"],controlBadges:["کنترل سرب","کنترل بودجه","کنترل قیف"],ctaBottom:"دامنه درخواست برای سیستم رهبری خود"},systems:{website:{title:"موتور وب سایت",problem:"ترافیک وجود دارد، اما کاربران تلفن همراه قبل از فرم آن را رها می کنند.",system:"Landing/Multi-Page با GA4، Meta Pixel، ردیابی سمت سرور، راه اندازی CRM و GDPR.",outcome:"هر لید به شیوه ای قابل ردیابی ثبت می شود و به وضوح به یک کانال اختصاص داده می شود.",kpis:["نرخ ردیابی","تکمیل فرم","وضوح منبع سرب"],details:["حالت رضایت به درستی پیکربندی شده است","تماس و رویدادهای WhatsApp","فشار CRM در زمان واقعی"]},ai:{title:"لایه صلاحیت هوش مصنوعی",problem:"بسیاری از سوالات غیرمجاز فروش و تیم تلفن را مسدود می کند.",system:"چت ربات هوش مصنوعی، صلاحیت خودکار، جریان DM در واتس اپ/اینستاگرام، اتوماسیون ایمیل، امتیازدهی سرنخ.",outcome:"تیم سرنخ های مرتبط با فروش را به جای مرتب سازی اولیه وقت گیر در اولویت قرار می دهد.",kpis:["اولین زمان پاسخ","اشتراک سرب واجد شرایط","توان عملیاتی تیم فروش"],details:["مسیرهای سریع خاص صنعت","بدون نمایش یادآوری","اولویت بندی بر اساس امتیاز"]},ads:{title:"خرید پولی",problem:"بودجه بین کانال ها بدون یک حلقه یادگیری واضح توزیع می شود.",system:"Google Ads + Meta Ads + TikTok، تست های A/B، مشابه، ردیابی تبدیل و نمای ROAS.",outcome:"بودجه به جای حجم کلیک خالص به کمپین هایی با کیفیت سرنخ بالا سرازیر می شود.",kpis:["هزینه هر سرنخ واجد شرایط","ROAS توسط کمپین","نرخ برد خلاقانه"],details:["خوشه های کمپین منطقه ای","انواع شکل در آزمون","به روز رسانی مخاطبان مبتنی بر سیگنال"]},analytics:{title:"کنترل تجزیه و تحلیل",problem:"تصمیم‌گیری‌ها به جای داده‌های قیف قابل اعتماد، بر اساس اسکرین‌شات‌های پلتفرم هستند.",system:"داشبورد اتاق کنترل با نمای کانال، قیف و CRM در یک سطح.",outcome:"تصمیمات هفتگی در مورد بودجه، بهینه سازی و مقیاس بندی بر اساس داده ها قابل ردیابی هستند.",kpis:["منجر به قرار ملاقات","منجر به معامله شود","سرعت خط لوله"],details:["تقسیم بندی بر اساس منطقه/سرویس","هشدارهای سقوط قیف","فهرست فرضیه های ماهانه"]}},packages:[{id:"استارتر",title:"استارتر",scale:1,lead:"برای کسب و کارهای محلی که از صفر به یک پایه سرب قابل اندازه گیری می روند.",items:["قیف وب + GA4","متا پیکسل + رضایت","ضبط CRM","گزارش اولیه"],effect:"نمای واضح از منابع سرب و فرآیند اولیه انعطاف پذیر."},{id:"رشد",title:"رشد",scale:2,recommended:!0,lead:"برای تیم هایی با فروش فعال که به سرنخ های واجد شرایط بیشتری نیاز دارند.",items:["کمپین های Google + Meta","جریان های صلاحیت هوش مصنوعی","راه اندازی تست A/B","امتیازدهی سرب + اتوماسیون"],effect:"تقاضای واجد شرایط بیشتر با زمان پاسخگویی بهتر و اولویت بندی واضح."},{id:"scale",title:"مقیاس",scale:3,lead:"برای شرکت هایی با چندین منطقه یا خوشه خدمات.",items:["کنترل چند کاناله","اسناد سمت سرور","لایه برنامه وب Ops","اداره اتاق کنترل"],effect:"مقیاس گذاری از طریق فرآیندها و داده های قابل اعتماد به جای آزمون و خطای دستی."}],timeline:[["01","تماس استراتژیک","بازار هدف، پیشنهاد و گلوگاه سرب به وضوح تعریف شده است."],["02","سند محدوده","طرح کانال، طرح پیگیری و مسئولیت ها ثابت است."],["03","فاز ساخت","وب سایت، اتوماسیون ها و ادغام ها پیاده سازی شده اند."],["04","راه اندازی","پیگیری QA، راه‌اندازی کمپین و جریان‌های CRM فعال می‌شوند."],["05","بهینه سازی","آزمون های هفتگی برای خلاقیت ها، قیف ها و صلاحیت ها."],["06","مقیاس بندی","مسیرهای عملکردی به مناطق/خدمات گسترش یافته است."]]},YD={copy:{eyebrow:"Sistemi guida per aziende locali in Germania",heroTitle:["Dal traffico","lead qualificati","come sistema controllabile"],heroLead:"Colleghiamo sito web, intelligenza artificiale, pubblicità e analisi in un'unica architettura operativa in modo che vendite, marketing e proprietari lavorino con gli stessi dati.",ctaTop:"Avvia chiamata strategica",heroChips:["Flusso principale","Qualificazione AI","Attribuzione"],heroChipValues:["Assunzione dal vivo","DM + Bot","GA4 + CRM"],flowNodes:["Google/Meta/TikTok","Atterraggio + Inseguimento","Qualificazione AI","Pipeline CRM"],heroBadges:["Monitoraggio lato server","Punteggio principale","Visualizzazione ROAS"],servicesTitle:"Servizi come moduli di sistema",servicesDesc:"Blocco di carte non uniforme: un nucleo dominante, moduli affiancati e uno strato operativo compatto.",trio:["Problema","sistema","Risultato"],detailsSummary:"Dettagli di implementazione",kpiBadgesTitle:"Badge KPI",kpiBadgesDesc:"Ogni prestazione viene valutata esclusivamente utilizzando cifre chiave che vendite e marketing possono leggere e controllare insieme.",signalLayerTitle:"Livello del segnale",signalItems:["Eventi GA4","Meta CAPI","Sincronizzazione CRM","Moda GDPR"],opsTitle:"Note operative",opsItems:["Coda di prova settimanale","Riallocazione del budget","Slot QA canalizzazione"],packagesTitle:"pacchetti in logica SaaS",recommended:"Consigliato",timelineTitle:"Come lavoriamo",stepLabel:"Passaggio",controlTitle:"Sala di controllo: risultati in tempo reale",controlPanelTitle:"Architettura del dashboard",controlPanelDesc:"I dati del canale, i segnali del funnel e lo stato del CRM convergono in un'unica visualizzazione. Le decisioni vengono prese a livello di processo anziché in base al sentimento.",miniCharts:["Volume di lead","Punteggio di qualità","Velocità dell'operazione"],kpiPanelTitle:"Contatori KPI in tempo reale",kpiLabels:["Lead qualificati","Media Prima risposta","Porta all'appuntamento","Cluster ROAS"],controlBadges:["Controllo principale","Controllo del bilancio","Controllo imbuto"],ctaBottom:"Richiedi l'ambito per il tuo sistema lead"},systems:{website:{title:"Motore del sito web",problem:"Il traffico c'è, ma gli utenti mobile abbandonano prima del modulo.",system:"Landing/Multi-pagina con GA4, Meta Pixel, tracciamento lato server, configurazione CRM e GDPR.",outcome:"Ogni lead viene registrato in modo tracciabile e chiaramente assegnato a un canale.",kpis:["tasso di tracciamento","Completamento del modulo","Chiarezza della fonte principale"],details:["Modalità di consenso configurata correttamente","Chiama ed eventi WhatsApp","Push CRM in tempo reale"]},ai:{title:"Livello di qualificazione AI",problem:"Troppe richieste non qualificate bloccano le vendite e il team telefonico.",system:"Chatbot AI, autoqualificazione, flussi DM in WhatsApp/Instagram, automazione della posta elettronica, lead scoring.",outcome:"Il team dà priorità ai lead relativi alle vendite anziché al lungo smistamento iniziale.",kpis:["Tempo di prima risposta","Condivisione di lead qualificati","Produttività del team di vendita"],details:["Percorsi rapidi specifici del settore","Promemoria mancata presentazione","Priorità in base al punteggio"]},ads:{title:"Acquisizione a pagamento",problem:"Il budget è distribuito tra i canali senza un chiaro ciclo di apprendimento.",system:"Google Ads + Meta Ads + TikTok, test A/B, lookalike, monitoraggio delle conversioni e visualizzazione ROAS.",outcome:"Il budget confluisce in campagne con un'elevata qualità dei lead invece che con un puro volume di clic.",kpis:["Costo per lead qualificato","ROAS per campagna","Tasso di vincita creatività"],details:["Cluster di campagne regionali","Varianti di forma nel test","Aggiornamenti sul pubblico basati sui segnali"]},analytics:{title:"Analisi di controllo",problem:"Le decisioni si basano sugli screenshot della piattaforma anziché su dati affidabili della canalizzazione.",system:"Cruscotto della sala di controllo con visualizzazioni canale, canalizzazione e CRM su un unico livello.",outcome:"Le decisioni settimanali su budget, ottimizzazione e ridimensionamento sono tracciabili sulla base dei dati.",kpis:["Porta all'appuntamento","Porta all'affare","Velocità della pipeline"],details:["Segmentazione per regione/servizio","Avvisi di eliminazione della canalizzazione","Elenco mensile delle ipotesi"]}},packages:[{id:"motorino di avviamento",title:"Motorino d'avviamento",scale:1,lead:"Per le imprese locali che passano da zero a una base di lead misurabile.",items:["Imbuto web + GA4","Meta Pixel + Consenso","Acquisizione CRM","Reportistica di base"],effect:"Visione chiara delle fonti di lead e processo iniziale resiliente."},{id:"crescita",title:"Crescita",scale:2,recommended:!0,lead:"Per i team con vendite attive che necessitano di lead più qualificati.",items:["Campagne Google + Meta","Flussi di qualificazione AI","Impostazione test A/B","Punteggio lead + automazione"],effect:"Domanda più qualificata con tempi di risposta migliori e chiara definizione delle priorità."},{id:"scale",title:"Scala",scale:3,lead:"Per aziende con più regioni o cluster di servizi.",items:["Controllo multicanale","Attribuzione lato server","Livello app Web Ops","Governance della sala di controllo"],effect:"Scalabilità tramite processi e dati affidabili anziché tentativi ed errori manuali."}],timeline:[["01","Chiamata strategica","Il mercato target, l'offerta e il collo di bottiglia del lead sono chiaramente definiti."],["02","Documento di ambito","Il piano dei canali, il piano di monitoraggio e le responsabilità sono fissi."],["03","Fase di costruzione","Sito web, automazioni e integrazioni implementate."],["04","Lancio","Il monitoraggio del QA, del lancio della campagna e dei flussi CRM diventa attivo."],["05","Ottimizzazione","Test settimanali per creatività, canalizzazioni e qualificazione."],["06","Ridimensionamento","I percorsi funzionanti vengono estesi a regioni/servizi."]]},XD={copy:{eyebrow:"Sistemas líderes para empresas locales en Alemania",heroTitle:["Del tráfico","clientes potenciales calificados","como sistema controlable"],heroLead:"Conectamos sitios web, inteligencia artificial, anuncios y análisis en una arquitectura operativa para que ventas, marketing y propietarios trabajen con los mismos datos.",ctaTop:"Iniciar llamada estratégica",heroChips:["Flujo de plomo","Clasificación IA","Atribución"],heroChipValues:["Ingesta viva","DM + Bot","GA4 + CRM"],flowNodes:["Google/Meta/TikTok","Aterrizaje + Seguimiento","Calificación de IA","Canal de CRM"],heroBadges:["Seguimiento del lado del servidor","Puntuación de clientes potenciales","ROAS Ver"],servicesTitle:"Servicios como módulos del sistema",servicesDesc:"No es un bloque de tarjetas uniforme: un núcleo dominante, módulos flanqueantes y una capa de operaciones compacta.",trio:["Problema","System","Resultado"],detailsSummary:"Detalles de implementación",kpiBadgesTitle:"insignias de KPI",kpiBadgesDesc:"Cada desempeño se evalúa exclusivamente utilizando cifras clave que ventas y marketing pueden leer y controlar juntos.",signalLayerTitle:"Capa de señal",signalItems:["eventos GA4","Meta CAPI","Sincronización CRM","RGPD moda"],opsTitle:"Notas de operaciones",opsItems:["Cola de prueba semanal","Reasignación de presupuesto","Ranuras de control de calidad del embudo"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Recomendado",timelineTitle:"Cómo trabajamos",stepLabel:"Paso",controlTitle:"Sala de Control: Resultados en tiempo real",controlPanelTitle:"Arquitectura del tablero",controlPanelDesc:"Los datos del canal, las señales del embudo y el estado de CRM convergen en una sola vista. Las decisiones se toman a nivel de proceso en lugar de basarse en intuiciones.",miniCharts:["Volumen de clientes potenciales","Nivel de calidad","Velocidad de negociación"],kpiPanelTitle:"Contadores de KPI en vivo",kpiLabels:["Clientes potenciales calificados","Promedio Primera respuesta","Conduce a la cita","Clústeres de ROAS"],controlBadges:["Control de plomo","Control presupuestario","Control de embudo"],ctaBottom:"Solicite alcance para su sistema principal"},systems:{website:{title:"Motor de sitio web",problem:"Hay tráfico, pero los usuarios de dispositivos móviles abandonan antes del formulario.",system:"Landing/Multi-Page con GA4, Meta Pixel, seguimiento del lado del servidor, CRM y configuración GDPR.",outcome:"Cada cliente potencial se registra de manera rastreable y se asigna claramente a un canal.",kpis:["tasa de seguimiento","Completar formulario","Claridad de la fuente principal"],details:["Modo de consentimiento configurado correctamente","Llamadas y eventos de WhatsApp","Impulso de CRM en tiempo real"]},ai:{title:"Capa de calificación de IA",problem:"Demasiadas consultas no calificadas bloquean las ventas y el equipo telefónico.",system:"Chatbot AI, calificación automática, flujos de DM en WhatsApp/Instagram, automatización de correo electrónico, puntuación de clientes potenciales.",outcome:"El equipo prioriza los clientes potenciales relacionados con las ventas en lugar de una clasificación inicial que requiere mucho tiempo.",kpis:["Primer tiempo de respuesta","Participación de clientes potenciales calificados","Rendimiento del equipo de ventas"],details:["Rutas de aviso específicas de la industria","Recordatorios de ausencia","Priorización por puntuación"]},ads:{title:"Adquisición pagada",problem:"El presupuesto se distribuye entre los canales sin un ciclo de aprendizaje claro.",system:"Google Ads + Meta Ads + TikTok, pruebas A/B, lookalikes, seguimiento de conversiones y visualización de ROAS.",outcome:"El presupuesto fluye hacia campañas con alta calidad de clientes potenciales en lugar de solo volumen de clics.",kpis:["Costo por cliente potencial calificado","ROAS por campaña","Tasa de ganancias creativas"],details:["Grupos de campañas regionales","Variantes de forma en la prueba","Actualizaciones de audiencia basadas en señales"]},analytics:{title:"Análisis de control",problem:"Las decisiones se basan en capturas de pantalla de la plataforma en lugar de datos confiables del embudo.",system:"Panel de control de sala de control con vistas de canal, embudo y CRM en un nivel.",outcome:"Las decisiones semanales sobre presupuesto, optimización y escalamiento se pueden rastrear en función de los datos.",kpis:["Conduce a la cita","Llevar a cabo un trato","Velocidad de la tubería"],details:["Segmentación por región/servicio","Alertas de caída del embudo","Lista mensual de hipótesis"]}},packages:[{id:"motor de arranque",title:"Arrancador",scale:1,lead:"Para empresas locales que pasan de cero a una base de clientes potenciales mensurable.",items:["Embudo web + GA4","Metapíxeles + Consentimiento","Captura de CRM","Informes básicos"],effect:"Visión clara de las fuentes de clientes potenciales y un proceso inicial resiliente."},{id:"crecimiento",title:"Crecimiento",scale:2,recommended:!0,lead:"Para equipos con ventas activas que necesitan más clientes potenciales calificados.",items:["Metacampañas de Google +","Flujos de calificación de IA","Configuración de prueba A/B","Puntuación de clientes potenciales + Automatización"],effect:"Demanda más calificada con mejores tiempos de respuesta y priorización clara."},{id:"scale",title:"Scale",scale:3,lead:"Para empresas con múltiples regiones o grupos de servicios.",items:["Control multicanal","Atribución del lado del servidor","Capa de aplicación web de operaciones","Gobernanza de la sala de control"],effect:"Escalar a través de procesos y datos confiables en lugar de prueba y error manual."}],timeline:[["01","Llamada estratégica","El mercado objetivo, la oferta y el cuello de botella del cliente potencial están claramente definidos."],["02","Documento de alcance","Se fijan el plan de canales, el plan de seguimiento y las responsabilidades."],["03","Fase de construcción","Sitio web, automatizaciones e integraciones implementadas."],["04","Lanzamiento","Se activa el seguimiento de control de calidad, lanzamiento de campañas y flujos de CRM."],["05","Optimización","Pruebas semanales de creatividades, embudos y calificación."],["06","Escalado","Las rutas en funcionamiento se amplían a regiones/servicios."]]},WD={copy:{eyebrow:"Ηγετικά συστήματα για τοπικές εταιρείες στη Γερμανία",heroTitle:["Από Τροχαία","πιστοποιημένοι υποψήφιοι πελάτες","ως ελεγχόμενο σύστημα"],heroLead:"Συνδέουμε ιστότοπο, τεχνητή νοημοσύνη, διαφημίσεις και αναλυτικά στοιχεία σε μία λειτουργική αρχιτεκτονική, έτσι ώστε οι πωλήσεις, το μάρκετινγκ και οι ιδιοκτήτες να λειτουργούν με τα ίδια δεδομένα.",ctaTop:"Έναρξη στρατηγικής κλήσης",heroChips:["Ροή μολύβδου","AI Qualify","Αναφορά"],heroChipValues:["Ζωντανή πρόσληψη","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Προσγείωση + Παρακολούθηση","Πιστοποίηση AI","Αγωγός CRM"],heroBadges:["Παρακολούθηση από την πλευρά του διακομιστή","Βαθμολογία Πρωτοδικών","Προβολή ROAS"],servicesTitle:"Υπηρεσίες ως λειτουργικές μονάδες συστήματος",servicesDesc:"Δεν είναι ένα ομοιόμορφο μπλοκ κάρτας: ένας κυρίαρχος πυρήνας, πλευρικές μονάδες και ένα συμπαγές επίπεδο λειτουργιών.",trio:["Πρόβλημα","σύστημα","Αποτέλεσμα"],detailsSummary:"Λεπτομέρειες υλοποίησης",kpiBadgesTitle:"Σήματα KPI",kpiBadgesDesc:"Κάθε απόδοση αξιολογείται αποκλειστικά χρησιμοποιώντας βασικά στοιχεία που οι πωλήσεις και το μάρκετινγκ μπορούν να διαβάσουν και να ελέγξουν μαζί.",signalLayerTitle:"Επίπεδο σήματος",signalItems:["Γεγονότα GA4","Meta CAPI","CRM Sync","Μόδα GDPR"],opsTitle:"Σημειώσεις λειτουργιών",opsItems:["Εβδομαδιαία ουρά δοκιμής","Ανακατανομή Προϋπολογισμού","Κουλοχέρηδες QA Funnel"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Συνιστάται",timelineTitle:"Πώς δουλεύουμε",stepLabel:"Βήμα",controlTitle:"Χώρος ελέγχου: Αποτελέσματα σε πραγματικό χρόνο",controlPanelTitle:"Αρχιτεκτονική ταμπλό",controlPanelDesc:"Τα δεδομένα καναλιού, τα σήματα διοχέτευσης και η κατάσταση CRM συγκλίνουν σε μία προβολή. Οι αποφάσεις λαμβάνονται σε επίπεδο διαδικασίας αντί να βασίζονται στην αίσθηση του εντέρου.",miniCharts:["Όγκος μολύβδου","Βαθμολογία ποιότητας","Ταχύτητα συμφωνίας"],kpiPanelTitle:"Ζωντανοί μετρητές KPI",kpiLabels:["Πιστοποιημένοι δυνητικοί πελάτες","Μέσος όρος Πρώτη απάντηση","Οδηγήστε στο ραντεβού","συστάδες απόδοσης διαφημιστικής επένδυσης (ROAS)."],controlBadges:["Έλεγχος ηλεκτροδίου","Έλεγχος προϋπολογισμού","Έλεγχος διοχέτευσης"],ctaBottom:"Αίτημα πεδίου εφαρμογής για το σύστημά σας"},systems:{website:{title:"Μηχανή ιστότοπου",problem:"Υπάρχει επισκεψιμότητα, αλλά οι χρήστες κινητών εγκαταλείπουν τη φόρμα.",system:"Landing/Multi-Page με GA4, Meta Pixel, παρακολούθηση από την πλευρά του διακομιστή, CRM και ρύθμιση GDPR.",outcome:"Κάθε υποψήφιος πελάτης καταγράφεται με ανιχνεύσιμο τρόπο και εκχωρείται σαφώς σε ένα κανάλι.",kpis:["ποσοστό παρακολούθησης","Συμπλήρωση εντύπου","Διαύγεια πηγής μολύβδου"],details:["Η λειτουργία συναίνεσης διαμορφώθηκε σωστά","Εκδηλώσεις κλήσεων και WhatsApp","CRM push σε πραγματικό χρόνο"]},ai:{title:"Επίπεδο πιστοποίησης AI",problem:"Πάρα πολλές ακατάλληλες έρευνες μπλοκάρουν τις πωλήσεις και την τηλεφωνική ομάδα.",system:"AI chatbot, αυτόματη πιστοποίηση, ροές DM σε WhatsApp/Instagram, αυτοματοποίηση email, βαθμολογία δυνητικού πελάτη.",outcome:"Η ομάδα δίνει προτεραιότητα στους δυνητικούς πελάτες που σχετίζονται με τις πωλήσεις αντί της χρονοβόρας αρχικής ταξινόμησης.",kpis:["Πρώτος χρόνος απόκρισης","Πιστοποιημένο μερίδιο δυνητικού πελάτη","Διακίνηση της Ομάδας Πωλήσεων"],details:["Διαδρομές προτροπής για συγκεκριμένο κλάδο","Χωρίς εμφάνιση υπενθυμίσεων","Προτεραιότητα ανά βαθμολογία"]},ads:{title:"Απόκτηση επί πληρωμή",problem:"Ο προϋπολογισμός κατανέμεται μεταξύ των καναλιών χωρίς σαφή βρόχο εκμάθησης.",system:"Google Ads + Meta Ads + TikTok, δοκιμές A/B, εμφανίσεις, παρακολούθηση μετατροπών και προβολή Απόδοσης Διαφημιστικής Επένδυσης.",outcome:"Ο προϋπολογισμός ρέει σε καμπάνιες με υψηλή ποιότητα δυνητικού πελάτη αντί για καθαρό όγκο κλικ.",kpis:["Κόστος ανά κατάλληλο υποψήφιο πελάτη","Απόδοση Διαφημιστικής Επένδυσης κατά Campaign","Ποσοστό κέρδους δημιουργικού"],details:["Περιφερειακές ομάδες εκστρατειών","Παραλλαγές σχήματος στη δοκιμή","Ενημερώσεις κοινού βάσει σήματος"]},analytics:{title:"Control Analytics",problem:"Οι αποφάσεις βασίζονται σε στιγμιότυπα οθόνης πλατφόρμας αντί σε αξιόπιστα δεδομένα διοχέτευσης.",system:"Πίνακας ελέγχου δωματίου με προβολές καναλιού, διοχέτευσης και CRM σε ένα επίπεδο.",outcome:"Οι εβδομαδιαίες αποφάσεις σχετικά με τον προϋπολογισμό, τη βελτιστοποίηση και την κλιμάκωση είναι ανιχνεύσιμες βάσει δεδομένων.",kpis:["Οδήγησε στο ραντεβού","Οδήγησε σε συμφωνία","Ταχύτητα αγωγού"],details:["Τμηματοποίηση ανά περιοχή/υπηρεσία","Ειδοποιήσεις πτώσης διοχέτευσης","Μηνιαία λίστα υποθέσεων"]}},packages:[{id:"μίζα",title:"Μίζα",scale:1,lead:"Για τοπικές επιχειρήσεις που πηγαίνουν από το μηδέν σε μια μετρήσιμη βάση δυνητικών πελατών.",items:["Διοχέτευση Ιστού + GA4","Meta Pixels + Consent","Λήψη CRM","Βασική αναφορά"],effect:"Καθαρή άποψη των πηγών μολύβδου και μια ανθεκτική αρχική διαδικασία."},{id:"ανάπτυξη",title:"Ανάπτυξη",scale:2,recommended:!0,lead:"Για ομάδες με ενεργές πωλήσεις που χρειάζονται περισσότερους κατάλληλους δυνητικούς πελάτες.",items:["Καμπάνιες Google + Meta","Ροές πιστοποίησης AI","Ρύθμιση δοκιμής A/B","Βαθμολογία δυνάμεων + Αυτοματισμός"],effect:"Πιο κατάλληλη ζήτηση με καλύτερους χρόνους απόκρισης και σαφή ιεράρχηση προτεραιοτήτων."},{id:"κλίμακα",title:"Κλίμακα",scale:3,lead:"Για εταιρείες με πολλές περιοχές ή ομάδες υπηρεσιών.",items:["Έλεγχος πολλαπλών καναλιών","Απόδοση από την πλευρά του διακομιστή","Επίπεδο εφαρμογής Ιστού Ops","Διακυβέρνηση της αίθουσας ελέγχου"],effect:"Κλιμάκωση μέσω διαδικασιών και αξιόπιστων δεδομένων αντί για μη αυτόματη δοκιμή και σφάλμα."}],timeline:[["01","Στρατηγική κλήση","Η αγορά-στόχος, η προσφορά και το σημείο συμφόρησης είναι σαφώς καθορισμένα."],["02","Έγγραφο πεδίου","Το σχέδιο καναλιού, το σχέδιο παρακολούθησης και οι ευθύνες έχουν διορθωθεί."],["03","Φάση κατασκευής","Ιστοσελίδα, αυτοματισμοί και ενσωματώσεις υλοποιούνται."],["04","Εκκίνηση","Παρακολούθηση QA, εκκίνηση καμπάνιας και ροές CRM εμφανίζονται ζωντανά."],["05","Βελτιστοποίηση","Εβδομαδιαίες δοκιμές για δημιουργικά, διοχετεύσεις και πιστοποίηση."],["06","Κλιμάκωση","Οι λειτουργικές διαδρομές επεκτείνονται σε περιοχές/υπηρεσίες."]]},QD={copy:{eyebrow:"Sisteme de conducere pentru companiile locale din Germania",heroTitle:["Din Trafic","clienți potențiali calificați","ca sistem controlabil"],heroLead:"Conectăm site-ul web, AI, reclamele și analizele într-o singură arhitectură operațională, astfel încât vânzările, marketingul și proprietarii să lucreze cu aceleași date.",ctaTop:"Începe apelul strategic",heroChips:["Flux de plumb","AI Calify","Atribuire"],heroChipValues:["Aportul live","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Aterizare + Urmărire","Calificare AI","CRM Pipeline"],heroBadges:["Urmărire pe partea serverului","Punctajul potențial","Vizualizare ROAS"],servicesTitle:"Servicii ca module de sistem",servicesDesc:"Nu este un bloc de carduri uniform: un nucleu dominant, module de flancare și un strat de operațiuni compact.",trio:["Problemă","System","Rezultat"],detailsSummary:"Detalii de implementare",kpiBadgesTitle:"insigne KPI",kpiBadgesDesc:"Fiecare performanță este evaluată exclusiv folosind cifre cheie pe care vânzările și marketingul le pot citi și controla împreună.",signalLayerTitle:"Strat de semnal",signalItems:["evenimente GA4","Meta CAPI","Sincronizare CRM","GDPR moda"],opsTitle:"Note operaționale",opsItems:["Coada de test săptămânală","Realocarea bugetului","Sloturi QA canal"],packagesTitle:"pachete în logica SaaS",recommended:"Recomandat",timelineTitle:"Cum lucrăm",stepLabel:"Pas",controlTitle:"Camera de control: Rezultate în timp real",controlPanelTitle:"Arhitectura tabloului de bord",controlPanelDesc:"Datele canalului, semnalele canalului și starea CRM converg într-o singură vizualizare. Deciziile sunt luate la nivel de proces în loc să se bazeze pe sentimente.",miniCharts:["Volumul de plumb","Scor de calitate","Deal Velocity"],kpiPanelTitle:"Contoare KPI live",kpiLabels:["Clienti potentiali calificati","medie Primul răspuns","Conduce la programare","clustere ROAS"],controlBadges:["Control plumb","Controlul bugetului","Control pâlnie"],ctaBottom:"Solicitați domeniul de aplicare pentru sistemul dvs. principal"},systems:{website:{title:"Motor de site",problem:"Trafic există, dar utilizatorii de telefonie mobilă abandonează înainte de formular.",system:"Landing/Multi-Page cu GA4, Meta Pixel, urmărire pe server, configurare CRM și GDPR.",outcome:"Fiecare client potențial este înregistrat într-o manieră urmăribilă și atribuit în mod clar unui canal.",kpis:["rata de urmărire","Completarea formularului","Claritatea sursei potențiale"],details:["Modul de consimțământ configurat corect","Evenimente de apel și WhatsApp","CRM push în timp real"]},ai:{title:"Stratul de calificare AI",problem:"Prea multe întrebări necalificate blochează vânzările și echipa telefonică.",system:"AI chatbot, auto-calificare, fluxuri DM în WhatsApp/Instagram, automatizare e-mail, scoring lead.",outcome:"Echipa acordă prioritate clienților potențiali legate de vânzări în loc de sortarea inițială care necesită timp.",kpis:["Timpul primului răspuns","Cotă de lead calificată","Randamentul echipei de vânzări"],details:["Căi prompte specifice industriei","No Show Mementouri","Prioritizare după scor"]},ads:{title:"Achiziție plătită",problem:"Bugetul este distribuit între canale fără o buclă clară de învățare.",system:"Google Ads + Meta Ads + TikTok, teste A/B, asemănări, urmărirea conversiilor și vizualizarea ROAS.",outcome:"Bugetul este transferat în campanii cu o calitate ridicată a clienților potențiali în loc de volumul de clicuri pur.",kpis:["Costul pe client potențial calificat","Rentabilitatea cheltuielilor publicitare în funcție de campanie","Rata de câștiguri creative"],details:["Clustere regionale de campanii","Variante de formă în test","Actualizări ale publicului bazate pe semnal"]},analytics:{title:"Control Analytics",problem:"Deciziile se bazează pe capturi de ecran ale platformei, nu pe date fiabile ale canalului.",system:"Tabloul de bord al camerei de control cu ​​vizualizări ale canalului, pâlniei și CRM la un singur nivel.",outcome:"Deciziile săptămânale privind bugetul, optimizarea și scalarea sunt urmăribile pe baza datelor.",kpis:["Conduce la numire","Conduce la tranzacție","Viteza conductei"],details:["Segmentarea pe regiune/serviciu","Alerte de aruncare a pâlniei","Lista lunară de ipoteze"]}},packages:[{id:"starter",title:"Starter",scale:1,lead:"Pentru companiile locale care trec de la zero la o bază de lead-uri măsurabilă.",items:["Canal web + GA4","Meta Pixeli + Consimțământ","CRM Capture","Raportare de bază"],effect:"Vedere clară a surselor de plumb și un proces inițial rezistent."},{id:"creștere",title:"Creștere",scale:2,recommended:!0,lead:"Pentru echipele cu vânzări active care au nevoie de clienți potențiali mai calificați.",items:["Campanii Google + Meta","Fluxuri de calificare AI","Configurare testare A/B","Lead Scoring + Automatizare"],effect:"Cerere mai calificată, cu timpi de răspuns mai buni și prioritizare clară."},{id:"scară",title:"Scară",scale:3,lead:"Pentru companii cu mai multe regiuni sau clustere de servicii.",items:["Control multicanal","Atribuire pe partea serverului","Ops Web App Layer","Guvernarea camerei de control"],effect:"Scalare prin procese și date fiabile în loc de încercări și erori manuale."}],timeline:[["01","Apel strategic","Piața țintă, oferta și blocajele de plumb sunt clar definite."],["02","Document de aplicare","Planul canalului, planul de urmărire și responsabilitățile sunt fixate."],["03","Faza de construire","Site-ul web, automatizările și integrările sunt implementate."],["04","Lansare","Urmărirea QA, lansarea campaniei și fluxurile CRM sunt disponibile."],["05","Optimizare","Teste săptămânale pentru reclame, canale și calificare."],["06","Scalare","Rutele funcționale sunt extinse la regiuni/servicii."]]},ZD={copy:{eyebrow:"Лид системи за местни компании в Германия",heroTitle:["От Трафик","квалифицирани потенциални клиенти","като управляема система"],heroLead:"Ние свързваме уебсайт, AI, реклами и анализи в една оперативна архитектура, така че продажбите, маркетингът и собствениците да работят с едни и същи данни.",ctaTop:"Започнете стратегическо обаждане",heroChips:["Водещ поток","AI Квалификация","Приписване"],heroChipValues:["Прием на живо","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Кацане + Проследяване","AI квалификация","CRM тръбопровод"],heroBadges:["Проследяване от страна на сървъра","Оловно точкуване","Изглед на ROAS"],servicesTitle:"Услуги като системни модули",servicesDesc:"Не е единен картов блок: доминиращо ядро, странични модули и компактен оперативен слой.",trio:["Проблем","система","Резултат"],detailsSummary:"Подробности за внедряването",kpiBadgesTitle:"KPI значки",kpiBadgesDesc:"Всяко представяне се оценява изключително с помощта на ключови цифри, които продажбите и маркетингът могат да четат и контролират заедно.",signalLayerTitle:"Сигнален слой",signalItems:["GA4 събития","Meta CAPI","CRM синхронизиране","GDPR мода"],opsTitle:"Оперативни бележки",opsItems:["Седмична тестова опашка","Преразпределение на бюджета","Слотове за QA на фунии"],packagesTitle:"пакети в SaaS логиката",recommended:"Препоръчва се",timelineTitle:"Как работим",stepLabel:"Стъпка",controlTitle:"Контролна зала: Резултати в реално време",controlPanelTitle:"Архитектура на таблото",controlPanelDesc:"Данните за канала, сигналите във фунията и състоянието на CRM се събират в един изглед. Решенията се вземат на ниво процес, вместо на базата на усещане.",miniCharts:["Водещ обем","Качествен рейтинг","Скорост на сделката"],kpiPanelTitle:"Броячи на KPI на живо",kpiLabels:["Квалифицирани потенциални клиенти","Ср. Първи отговор","Води до среща","ROAS клъстери"],controlBadges:["Контрол на оловото","Бюджетен контрол","Контрол на фунията"],ctaBottom:"Обхват на заявката за вашата водеща система"},systems:{website:{title:"Двигател на уебсайта",problem:"Трафик има, но мобилните потребители изоставят преди формуляра.",system:"Landing/Multi-Page с GA4, Meta Pixel, проследяване от страна на сървъра, настройка на CRM и GDPR.",outcome:"Всеки потенциален клиент се записва по начин, който може да бъде проследен и ясно присвоен на канал.",kpis:["скорост на проследяване","Попълване на формуляр","Яснота на водещия източник"],details:["Режимът на съгласие е конфигуриран правилно","Обаждания и събития в WhatsApp","CRM push в реално време"]},ai:{title:"Квалификационен слой на AI",problem:"Твърде много неквалифицирани запитвания блокират продажбите и телефонния екип.",system:"AI чатбот, автоматична квалификация, DM потоци в WhatsApp/Instagram, автоматизация на имейл, точкуване за потенциални клиенти.",outcome:"Екипът дава приоритет на потенциални клиенти, свързани с продажби, вместо отнемащо време първоначално сортиране.",kpis:["Време за първа реакция","Квалифициран водещ дял","Пропускателна способност на екипа по продажбите"],details:["Специфични за индустрията подканващи пътища","Напомняния за неявяване","Приоритизиране по точки"]},ads:{title:"Платено придобиване",problem:"Бюджетът се разпределя между каналите без ясен цикъл на обучение.",system:"Google Ads + Meta Ads + TikTok, A/B тестове, lookalikes, проследяване на реализациите и изглед на ROAS.",outcome:"Бюджетът се влива в кампании с високо качество на потенциалните клиенти вместо чист обем на кликванията.",kpis:["Цена на квалифициран потенциален клиент","ROAS по кампания","Creative Win Rate"],details:["Регионални групи от кампании","Варианти на формата в теста","Актуализации на аудиторията, базирани на сигнала"]},analytics:{title:"Контролен анализ",problem:"Решенията се основават на екранни снимки на платформа вместо надеждни данни за фунията.",system:"Табло за управление на контролната зала с изгледи на канал, фуния и CRM на едно ниво.",outcome:"Седмичните решения за бюджет, оптимизация и мащабиране могат да бъдат проследени въз основа на данни.",kpis:["Води до назначаване","Води до сделка","Скорост на тръбопровода"],details:["Сегментиране по регион/услуга","Сигнали за падане на фуния","Месечен списък с хипотези"]}},packages:[{id:"стартер",title:"Стартер",scale:1,lead:"За местни фирми, преминаващи от нула към измерима потенциална база.",items:["Уеб фуния + GA4","Мета пиксели + съгласие","CRM Capture","Основно отчитане"],effect:"Ясен поглед върху източниците на олово и устойчив първоначален процес."},{id:"растеж",title:"Растеж",scale:2,recommended:!0,lead:"За екипи с активни продажби, които се нуждаят от повече квалифицирани потенциални клиенти.",items:["Google + мета кампании","AI квалификационни потоци","Настройка на A/B тестване","Водещ резултат + автоматизация"],effect:"По-квалифицирано търсене с по-добро време за реакция и ясно приоритизиране."},{id:"мащаб",title:"Мащаб",scale:3,lead:"За компании с множество региони или сервизни клъстери.",items:["Многоканален контрол","Приписване от страна на сървъра","Ops Web App Layer","Управление на контролната зала"],effect:"Мащабиране чрез процеси и надеждни данни вместо ръчни проби и грешки."}],timeline:[["01","Стратегическо обаждане","Целевият пазар, офертата и тесните места са ясно дефинирани."],["02","Документ за обхват","Планът на канала, планът за проследяване и отговорностите са фиксирани."],["03","Фаза на изграждане","Уеб сайт, автоматизации и интеграции са внедрени."],["04","Стартиране","Проследяване на QA, стартиране на кампания и CRM потоци стават активни."],["05","Оптимизация","Седмични тестове за рекламни послания, фунии и квалификация."],["06","Мащабиране","Функциониращите маршрути са разширени до региони/услуги."]]},JD={tr:GD,ar:ID,pl:FD,ku:qD,fa:KD,it:YD,es:XD,el:WD,ro:QD,bg:ZD},ow=qe`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,gn=R.div`
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
`,Un=R(ie.section).attrs({initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.22},variants:mt})`
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
`,gt=R(ie.section).attrs({initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.18},variants:mt})`
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
`,jg=R(ie.div).attrs({initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.12},variants:Nt})`
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
`,Ue=R(ie.article).attrs({initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:Ye})`
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
`,Ag=R(Ue).attrs({as:ie.section})`
  margin-top: 72px;

  @media (max-width: 767px) {
    margin-top: 48px;
  }
`,Fe=R.p`
  color: rgba(255, 255, 255, 0.72);
`,Da=R.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 767px) {
    width: 100%;
    gap: 16px;
  }
`,lw=`
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
  ${lw}
  background: linear-gradient(120deg, #f39a4f, #ffe1b5, #f39a4f);
  background-size: 220% 220%;
  color: #121723;

  &:hover,
  &:focus-visible {
    color: #f8fafc;
    background: linear-gradient(120deg, #121723, #253a64, #121723);
    background-size: 220% 220%;
    animation: ${ow} 2.2s linear infinite;
    box-shadow: 0 12px 22px rgba(21, 31, 52, 0.45);
  }
`,cw=R.button`
  ${lw}
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
    animation: ${ow} 2.2s linear infinite;
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
`;const eP=R.form`
  display: grid;
  gap: 10px;
`,uw=R.label`
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
`,tP=qe`
  0% { box-shadow: 0 0 0 0 rgba(58, 197, 255, 0.28); }
  70% { box-shadow: 0 0 0 14px rgba(58, 197, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(58, 197, 255, 0); }
`,nP=qe`
  0% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(0, -8px, 0); }
  100% { transform: translate3d(0, 0, 0); }
`,aP=R(gn)`
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
`,iP=R.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-inline: var(--gutter);
`,rP=R(ie.section)`
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
`,sP=R.div`
  display: grid;
  gap: 20px;
  align-content: center;

  @media (max-width: 980px) {
    align-content: start;
  }
`,oP=R.p`
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 12px;
  color: rgba(207, 233, 255, 0.8);
`,lP=R.h1`
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
`,cP=R.p`
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
`,uP=R.div`
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
`,dP=R.div`
  position: absolute;
  width: 220px;
  height: 220px;
  top: -72px;
  right: -54px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(70, 198, 255, 0.35), rgba(70, 198, 255, 0));
  filter: blur(2px);
  animation: ${nP} 6.2s ease-in-out infinite;
`,fP=R.div`
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
`,pP=R(ie.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
`,dh=R(ie.div)`
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
`,hP=R(ie.div)`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 10px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`,mP=R.div`
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
`,gP=R.div`
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
`,bP=R.div`
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
`,fh=R(ie.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Pi=R(ie.span)`
  border-radius: 999px;
  padding: 7px 11px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #d8f2ff;
  border: 1px solid rgba(111, 206, 255, 0.38);
  background: rgba(22, 41, 62, 0.76);
  box-shadow: inset 0 0 12px rgba(80, 193, 255, 0.14);
`,xP=R.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,yP=R.button`
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
`,vP=R(ie.div)`
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
`,wP=R.div`
  margin-top: 16px;
  display: grid;
  gap: 10px;
`,ph=R(ie.div)`
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
`,SP=R.details`
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
`,kP=R.div`
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
`,TP=R(ie.div)`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,jP=R(ie.article)`
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
`,AP=R.span`
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
`,CP=R.div`
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
`,EP=R.p`
  margin: 14px 0 20px;
  color: rgba(220, 238, 255, 0.84);
  line-height: 1.58;
`,MP=R(ie.ol)`
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
`,zP=R(ie.li)`
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
    animation: ${tP} 2.8s infinite;
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
`,RP=R.span`
  display: block;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(173, 216, 247, 0.82);
`,LP=R.h3`
  margin: 8px 0 12px;
  font-size: 18px;
`,OP=R(ie.div)`
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
`,DP=R.div`
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
`,PP=R.div`
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
`,Co=R(Fe)`
  font-size: 14px;
  line-height: 1.6;
  margin: 8px 0 18px;
`,Xr={website:{title:"Website Engine",icon:d.jsx(gg,{}),problem:"Traffic ist vorhanden, aber mobile Nutzer brechen vor dem Formular ab.",system:"Landing/Multi-Page mit GA4, Meta Pixel, Server-Side Tracking, CRM und DSGVO-Setup.",outcome:"Jeder Lead wird nachvollziehbar erfasst und eindeutig einem Kanal zugeordnet.",kpis:["Tracking-Quote","Form Completion","Lead Source Clarity"],details:["Consent Mode korrekt konfiguriert","Call- und WhatsApp-Events","CRM Push in Echtzeit"]},ai:{title:"AI Qualification Layer",icon:d.jsx(ns,{}),problem:"Zu viele unqualifizierte Anfragen blockieren Vertrieb und Telefonteam.",system:"AI-Chatbot, Auto-Qualifizierung, DM-Flows in WhatsApp/Instagram, E-Mail-Automation, Lead Scoring.",outcome:"Das Team priorisiert kaufnahe Leads statt zeitintensiver Erstsortierung.",kpis:["First Response Time","Qualified Lead Share","Sales Team Throughput"],details:["Branchenspezifische Prompt-Pfade","No-Show Reminders","Priorisierung nach Score"]},ads:{title:"Paid Acquisition",icon:d.jsx(pl,{}),problem:"Das Budget verteilt sich ohne klare Lernschleife zwischen den Kanaelen.",system:"Google Ads + Meta Ads + TikTok, A/B Tests, Lookalikes, Conversion Tracking und ROAS-View.",outcome:"Budget fliesst in Kampagnen mit hoher Lead-Qualitaet statt in reine Klickmenge.",kpis:["Cost per Qualified Lead","ROAS by Campaign","Creative Win Rate"],details:["Regionale Kampagnencluster","Form-Varianten im Test","Signalbasierte Audience-Updates"]},analytics:{title:"Control Analytics",icon:d.jsx(Fi,{}),problem:"Entscheidungen basieren auf Plattform-Screenshots statt auf belastbaren Funnel-Daten.",system:"Control-Room Dashboard mit Kanal-, Funnel- und CRM-Sicht in einer Ebene.",outcome:"Woechentliche Entscheidungen zu Budget, Optimierung und Skalierung sind datenbasiert nachvollziehbar.",kpis:["Lead to Appointment","Lead to Deal","Pipeline Velocity"],details:["Segmentierung nach Region/Service","Alerts bei Funnel Drop","Monatliche Hypothesenliste"]}},VP={website:{title:"Website Engine",icon:d.jsx(gg,{}),problem:"Трафік є, але мобільні користувачі не доходять до відправки форми.",system:"Landing або multi-page сайт з GA4, Meta Pixel, server-side tracking, CRM та DSGVO-базою.",outcome:"Кожен лід фіксується і чітко прив’язується до каналу.",kpis:["Якість трекінгу","Form Completion","Lead Source Clarity"],details:["Коректно налаштований Consent Mode","Call і WhatsApp події","CRM push у реальному часі"]},ai:{title:"AI Qualification Layer",icon:d.jsx(ns,{}),problem:"Надто багато нецільових звернень перевантажують продажі й телефонну лінію.",system:"AI-чатбот, автокваліфікація, DM-flow у WhatsApp/Instagram, email-автоматизація та lead scoring.",outcome:"Команда в першу чергу працює з лідами, які ближчі до покупки.",kpis:["First Response Time","Qualified Lead Share","Sales Team Throughput"],details:["Промпт-потоки під нішу","No-show нагадування","Пріоритезація за scoring"]},ads:{title:"Paid Acquisition",icon:d.jsx(pl,{}),problem:"Бюджет розподіляється між каналами без стабільної логіки навчання.",system:"Google Ads + Meta Ads + TikTok, A/B тести, lookalike аудиторії, conversion tracking і ROAS-аналіз.",outcome:"Бюджет іде в кампанії з кращою якістю лідів, а не просто в кліки.",kpis:["Cost per Qualified Lead","ROAS by Campaign","Creative Win Rate"],details:["Регіональні кластери кампаній","Тести варіантів форм","Оновлення аудиторій за сигналами"]},analytics:{title:"Control Analytics",icon:d.jsx(Fi,{}),problem:"Рішення приймаються за скріншотами платформ, а не за даними воронки.",system:"Control-room dashboard з єдиним шаром каналів, воронки та CRM.",outcome:"Щотижневі рішення щодо бюджету й оптимізації приймаються на основі даних.",kpis:["Lead to Appointment","Lead to Deal","Pipeline Velocity"],details:["Сегментація за регіоном і послугою","Алерти при просіданні funnel","Щомісячний backlog гіпотез"]}},dw=[{id:"starter",title:"Starter",scale:1,lead:"Fuer lokale Betriebe, die von null auf eine messbare Lead-Basis gehen.",items:["Web-Funnel + GA4","Meta Pixel + Consent","CRM Capture","Basis-Reporting"],effect:"Klare Sicht auf Lead-Quellen und ein belastbarer Erstprozess."},{id:"growth",title:"Growth",scale:2,recommended:!0,lead:"Fuer Teams mit aktivem Vertrieb, die mehr qualifizierte Leads brauchen.",items:["Google + Meta Kampagnen","AI Qualification Flows","A/B Testing Setup","Lead Scoring + Automation"],effect:"Mehr qualifizierte Nachfrage bei besserer Reaktionszeit und sauberer Priorisierung."},{id:"scale",title:"Scale",scale:3,lead:"Fuer Unternehmen mit mehreren Regionen oder Leistungsclustern.",items:["Multi-Channel Steuerung","Server-Side Attribution","Ops Web-App Layer","Control-Room Governance"],effect:"Skalierung ueber Prozesse und belastbare Daten statt manuellem Trial-and-Error."}],NP=[{id:"starter",title:"Starter",scale:1,lead:"Для локального бізнесу, який переходить від нуля до вимірюваної lead-системи.",items:["Web-funnel + GA4","Meta Pixel + Consent","CRM Capture","Базова аналітика"],effect:"Прозора картина джерел лідів і робочий базовий процес."},{id:"growth",title:"Growth",scale:2,recommended:!0,lead:"Для команд з активним продажем, яким потрібні якісніші ліди.",items:["Google + Meta кампанії","AI Qualification Flows","A/B Testing Setup","Lead Scoring + Automation"],effect:"Більше кваліфікованого попиту та швидша реакція команди."},{id:"scale",title:"Scale",scale:3,lead:"Для компаній з кількома регіонами або кластерами послуг.",items:["Multi-channel керування","Server-side attribution","Ops Web-App Layer","Control-Room Governance"],effect:"Масштабування через процеси та дані замість ручного trial-and-error."}],fw=[["01","Strategischer Call","Zielmarkt, Angebot und Lead-Engpass werden klar definiert."],["02","Scope Dokument","Kanalplan, Tracking-Plan und Verantwortlichkeiten werden fixiert."],["03","Build Phase","Website, Automationen und Integrationen werden umgesetzt."],["04","Launch","Tracking QA, Kampagnenstart und CRM-Flows gehen live."],["05","Optimierung","Woechentliche Tests fuer Creatives, Funnel und Qualifizierung."],["06","Skalierung","Funktionierende Strecken werden auf Regionen/Leistungen erweitert."]],BP=[["01","Стратегічний дзвінок","Фіксуємо ринок, офер і головні вузькі місця у lead-процесі."],["02","Scope документ","Узгоджуємо канали, tracking-план і відповідальності."],["03","Етап розробки","Реалізуємо сайт, автоматизації й інтеграції."],["04","Запуск","Робимо QA трекінгу, запускаємо кампанії та CRM-flow."],["05","Оптимізація","Щотижнево тестуємо креативи, воронку та логіку кваліфікації."],["06","Масштабування","Робочі зв’язки переносимо на нові регіони й послуги."]],pw={eyebrow:"Lead-Systeme fuer lokale Unternehmen in Deutschland",heroTitle:["Aus Traffic","qualifizierte Leads","als steuerbares System"],heroLead:"Wir verbinden Website, AI, Ads und Analytics in einer operativen Architektur, damit Vertrieb, Marketing und Inhaber mit denselben Daten arbeiten.",ctaTop:"Strategischen Call starten",heroChips:["Lead Flow","AI Qualify","Attribution"],heroChipValues:["Live Intake","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Landing + Tracking","AI Qualification","CRM Pipeline"],heroBadges:["Server-Side Tracking","Lead Scoring","ROAS View"],servicesTitle:"Leistungen als System-Module",servicesDesc:"Kein gleichfoermiger Kartenblock: ein dominanter Kern, flankierende Module und ein kompakter Operations-Layer.",trio:["Problem","System","Outcome"],detailsSummary:"Implementierungsdetails",kpiBadgesTitle:"KPI Badges",kpiBadgesDesc:"Jede Leistung wird ausschliesslich ueber Kennzahlen bewertet, die Sales und Marketing gemeinsam lesen und steuern koennen.",signalLayerTitle:"Signal Layer",signalItems:["GA4 Events","Meta CAPI","CRM Sync","DSGVO Mode"],opsTitle:"Ops Notes",opsItems:["Weekly Test Queue","Budget Reallocation","Funnel QA Slots"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Empfohlen",timelineTitle:"Wie wir arbeiten",stepLabel:"Step",controlTitle:"Control Room: Ergebnisse in Echtzeit",controlPanelTitle:"Dashboard Architektur",controlPanelDesc:"Kanaldaten, Funnel-Signale und CRM-Status laufen in einer Ansicht zusammen. Entscheidungen erfolgen auf Prozessebene statt aus dem Bauchgefuehl.",miniCharts:["Lead Volume","Quality Score","Deal Velocity"],kpiPanelTitle:"Live KPI Counters",kpiLabels:["Qualified Leads","Avg. First Response","Lead to Termin","ROAS Cluster"],controlBadges:["Lead Kontrolle","Budget Kontrolle","Funnel Kontrolle"],ctaBottom:"Scope fuer Ihr Lead-System anfragen"},_P={eyebrow:"Lead-системи для локального бізнесу в Німеччині",heroTitle:["З трафіку","у кваліфіковані ліди","як керовану систему"],heroLead:"Поєднуємо сайт, AI, рекламу та аналітику в єдину операційну архітектуру, щоб маркетинг, продажі й власник працювали з одними даними.",ctaTop:"Запустити стратегічний дзвінок",heroChips:["Lead Flow","AI Qualify","Attribution"],heroChipValues:["Live Intake","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Landing + Tracking","AI Qualification","CRM Pipeline"],heroBadges:["Server-Side Tracking","Lead Scoring","ROAS View"],servicesTitle:"Послуги як модулі системи",servicesDesc:"Не одноманітні картки, а система: домінантне ядро, підтримуючі модулі та компактний операційний шар.",trio:["Проблема","Система","Результат"],detailsSummary:"Деталі реалізації",kpiBadgesTitle:"KPI Badges",kpiBadgesDesc:"Кожну послугу оцінюємо тільки за метриками, які спільно читають маркетинг і продажі.",signalLayerTitle:"Signal Layer",signalItems:["GA4 Events","Meta CAPI","CRM Sync","DSGVO Mode"],opsTitle:"Ops Notes",opsItems:["Weekly Test Queue","Budget Reallocation","Funnel QA Slots"],packagesTitle:"Пакети в SaaS-логіці",recommended:"Рекомендовано",timelineTitle:"Як ми працюємо",stepLabel:"Крок",controlTitle:"Control Room: результати в реальному часі",controlPanelTitle:"Архітектура дашборду",controlPanelDesc:"Дані каналів, сигнали воронки та CRM-статуси зібрані в одному view. Рішення приймаються на рівні процесу, а не інтуїтивно.",miniCharts:["Lead Volume","Quality Score","Deal Velocity"],kpiPanelTitle:"Live KPI Counters",kpiLabels:["Qualified Leads","Avg. First Response","Lead to Termin","ROAS Cluster"],controlBadges:["Контроль лідів","Контроль бюджету","Контроль воронки"],ctaBottom:"Запросити scope для вашої lead-системи"},we=JD,Jn=e=>({website:{...Xr.website,...e.website},ai:{...Xr.ai,...e.ai},ads:{...Xr.ads,...e.ads},analytics:{...Xr.analytics,...e.analytics}}),HP={de:Xr,uk:VP,tr:Jn(we.tr.systems),ar:Jn(we.ar.systems),pl:Jn(we.pl.systems),ku:Jn(we.ku.systems),fa:Jn(we.fa.systems),it:Jn(we.it.systems),es:Jn(we.es.systems),el:Jn(we.el.systems),ro:Jn(we.ro.systems),bg:Jn(we.bg.systems)},$P={de:dw,uk:NP,tr:we.tr.packages,ar:we.ar.packages,pl:we.pl.packages,ku:we.ku.packages,fa:we.fa.packages,it:we.it.packages,es:we.es.packages,el:we.el.packages,ro:we.ro.packages,bg:we.bg.packages},UP={de:fw,uk:BP,tr:we.tr.timeline,ar:we.ar.timeline,pl:we.pl.timeline,ku:we.ku.timeline,fa:we.fa.timeline,it:we.it.timeline,es:we.es.timeline,el:we.el.timeline,ro:we.ro.timeline,bg:we.bg.timeline},GP={de:pw,uk:_P,tr:we.tr.copy,ar:we.ar.copy,pl:we.pl.copy,ku:we.ku.copy,fa:we.fa.copy,it:we.it.copy,es:we.es.copy,el:we.el.copy,ro:we.ro.copy,bg:we.bg.copy},IP=["34%","52%","47%","70%","62%","85%","73%"],FP=()=>{const{i18n:e}=Ge(),t=(e.resolvedLanguage||e.language||"de").split("-")[0],a=GP[t]??pw,i=HP[t]??Xr,o=$P[t]??dw,l=UP[t]??fw,[u,p]=j.useState("website"),f=j.useMemo(()=>i[u],[u,i]);return d.jsxs(aP,{children:[d.jsx(iP,{children:d.jsxs(rP,{initial:"hidden",animate:"visible",variants:Nt,children:[d.jsxs(sP,{as:ie.div,variants:Hc,children:[d.jsx(oP,{children:a.eyebrow}),d.jsxs(lP,{children:[d.jsx("span",{children:a.heroTitle[0]}),d.jsx("span",{children:a.heroTitle[1]}),d.jsx("span",{children:a.heroTitle[2]})]}),d.jsx(cP,{children:a.heroLead}),d.jsx(Da,{children:d.jsxs(pv,{to:"/kontakt",children:[d.jsx(_n,{})," ",a.ctaTop]})})]}),d.jsxs(uP,{as:ie.div,variants:ri,children:[d.jsx(dP,{}),d.jsxs(fP,{children:[d.jsxs(pP,{variants:Nt,initial:"hidden",animate:"visible",children:[d.jsxs(dh,{variants:Ye,children:[d.jsx("span",{children:a.heroChips[0]}),d.jsx("b",{children:d.jsx(Ki,{text:a.heroChipValues[0],durationMs:1400,storageKey:"hero_lead_flow"})})]}),d.jsxs(dh,{variants:Ye,children:[d.jsx("span",{children:a.heroChips[1]}),d.jsx("b",{children:a.heroChipValues[1]})]}),d.jsxs(dh,{variants:Ye,children:[d.jsx("span",{children:a.heroChips[2]}),d.jsx("b",{children:a.heroChipValues[2]})]})]}),d.jsxs(hP,{variants:Nt,initial:"hidden",animate:"visible",children:[d.jsx(mP,{children:d.jsx(gP,{children:IP.map((m,g)=>d.jsx(ie.span,{style:{height:m},animate:{scaleY:[.78,1.08,.9,1.02,.78],opacity:[.78,1,.86,.96,.78]},transition:{duration:2.6,delay:g*.16,repeat:1/0,ease:"easeInOut"}},m+g))})}),d.jsxs(bP,{children:[d.jsx(Gc,{variants:ri,children:a.flowNodes[0]}),d.jsx(Gc,{variants:ri,children:a.flowNodes[1]}),d.jsx(Gc,{variants:ri,children:a.flowNodes[2]}),d.jsx(Gc,{variants:ri,children:a.flowNodes[3]})]})]}),d.jsxs(fh,{variants:Nt,initial:"hidden",animate:"visible",children:[d.jsx(Pi,{variants:Ye,children:a.heroBadges[0]}),d.jsx(Pi,{variants:Ye,children:a.heroBadges[1]}),d.jsx(Pi,{variants:Ye,children:a.heroBadges[2]})]})]})]})]})}),d.jsxs(en,{children:[d.jsxs(Ao,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:mt,children:[d.jsx("h2",{children:a.servicesTitle}),d.jsx(Co,{children:a.servicesDesc}),d.jsx(xP,{children:Object.keys(i).map(m=>d.jsx(yP,{$active:u===m,onClick:()=>p(m),children:i[m].title},m))}),d.jsxs(vP,{variants:Nt,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.16},children:[d.jsxs(Ic,{$area:"dominant",$featured:!0,variants:Hc,children:[d.jsxs("h3",{children:[d.jsx(Yt,{children:f.icon}),f.title]}),d.jsxs(wP,{children:[d.jsxs(ph,{variants:mt,children:[d.jsx("strong",{children:a.trio[0]}),d.jsx("span",{children:f.problem})]}),d.jsxs(ph,{variants:mt,children:[d.jsx("strong",{children:a.trio[1]}),d.jsx("span",{children:f.system})]}),d.jsxs(ph,{variants:mt,children:[d.jsx("strong",{children:a.trio[2]}),d.jsx("span",{children:f.outcome})]})]}),d.jsxs(SP,{children:[d.jsx("summary",{children:a.detailsSummary}),d.jsx("ul",{children:f.details.map(m=>d.jsx("li",{children:m},m))})]})]}),d.jsxs(Ic,{$area:"mediumA",variants:mt,children:[d.jsxs("h3",{children:[d.jsx(Yt,{children:d.jsx(ku,{})}),a.kpiBadgesTitle]}),d.jsx(fh,{variants:Nt,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:f.kpis.map(m=>d.jsx(Pi,{variants:Ye,children:m},m))}),d.jsx(Co,{style:{marginTop:12},children:a.kpiBadgesDesc})]}),d.jsxs(Ic,{$area:"mediumB",variants:ri,children:[d.jsxs("h3",{children:[d.jsx(Yt,{children:d.jsx(el,{})}),a.signalLayerTitle]}),d.jsxs(kP,{children:[d.jsxs("span",{children:[d.jsx(jt,{})," ",a.signalItems[0]]}),d.jsxs("span",{children:[d.jsx(jt,{})," ",a.signalItems[1]]}),d.jsxs("span",{children:[d.jsx(jt,{})," ",a.signalItems[2]]}),d.jsxs("span",{children:[d.jsx(jt,{})," ",a.signalItems[3]]})]})]}),d.jsxs(Ic,{$area:"compact",$compact:!0,variants:Ye,children:[d.jsxs("h3",{children:[d.jsx(Yt,{children:d.jsx(Qu,{})}),a.opsTitle]}),d.jsxs(Go,{children:[d.jsxs("li",{children:[d.jsx(jt,{})," ",a.opsItems[0]]}),d.jsxs("li",{children:[d.jsx(jt,{})," ",a.opsItems[1]]}),d.jsxs("li",{children:[d.jsx(jt,{})," ",a.opsItems[2]]})]})]})]})]}),d.jsxs(Ao,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:mt,children:[d.jsx("h2",{children:a.packagesTitle}),d.jsx(TP,{variants:Nt,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.16},children:o.map(m=>d.jsxs(jP,{$recommended:m.recommended,variants:m.recommended?Ye:mt,children:[m.recommended?d.jsx(AP,{children:a.recommended}):null,d.jsx("h3",{children:m.title}),d.jsx(EP,{children:m.lead}),d.jsx(Go,{children:m.items.map(g=>d.jsxs("li",{children:[d.jsx(jt,{})," ",g]},g))}),d.jsxs(CP,{children:[d.jsx("i",{className:m.scale>=1?"on":""}),d.jsx("i",{className:m.scale>=2?"on":""}),d.jsx("i",{className:m.scale>=3?"on":""})]}),d.jsx(Co,{style:{marginTop:12},children:m.effect})]},m.id))})]}),d.jsxs(Ao,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:mt,children:[d.jsx("h2",{children:a.timelineTitle}),d.jsx(MP,{variants:Nt,children:l.map(m=>d.jsxs(zP,{variants:Number(m[0])%2===0?ri:Hc,children:[d.jsxs(RP,{children:[a.stepLabel," ",m[0]]}),d.jsx(LP,{children:m[1]}),d.jsx(Co,{children:m[2]})]},m[0]))})]}),d.jsxs(Ao,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:mt,children:[d.jsx("h2",{children:a.controlTitle}),d.jsxs(OP,{variants:Nt,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.18},children:[d.jsxs(hv,{variants:Hc,children:[d.jsx("h3",{children:a.controlPanelTitle}),d.jsx(Co,{children:a.controlPanelDesc}),d.jsxs(PP,{children:[d.jsxs("div",{children:[a.miniCharts[0],d.jsx("i",{style:{width:"68%"}})]}),d.jsxs("div",{children:[a.miniCharts[1],d.jsx("i",{style:{width:"82%"}})]}),d.jsxs("div",{children:[a.miniCharts[2],d.jsx("i",{style:{width:"59%"}})]})]})]}),d.jsxs(hv,{variants:ri,children:[d.jsx("h3",{children:a.kpiPanelTitle}),d.jsxs(DP,{children:[d.jsxs(Fc,{variants:Ye,children:[d.jsx("span",{children:a.kpiLabels[0]}),d.jsx("strong",{children:d.jsx(Uc,{start:0,max:38,durationMs:1800,storageKey:"metric_ql"})})]}),d.jsxs(Fc,{variants:Ye,children:[d.jsx("span",{children:a.kpiLabels[1]}),d.jsx("strong",{children:d.jsx(Uc,{start:0,max:11,suffix:"m",durationMs:1700,storageKey:"metric_rt"})})]}),d.jsxs(Fc,{variants:Ye,children:[d.jsx("span",{children:a.kpiLabels[2]}),d.jsx("strong",{children:d.jsx(Uc,{start:0,max:43,suffix:"%",durationMs:1900,storageKey:"metric_l2a"})})]}),d.jsxs(Fc,{variants:Ye,children:[d.jsx("span",{children:a.kpiLabels[3]}),d.jsx("strong",{children:d.jsx(Uc,{start:0,max:3.8,decimals:1,prefix:"x",durationMs:2100,storageKey:"metric_roas"})})]})]}),d.jsxs(fh,{style:{marginTop:12},variants:Nt,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[d.jsx(Pi,{variants:Ye,children:a.controlBadges[0]}),d.jsx(Pi,{variants:Ye,children:a.controlBadges[1]}),d.jsx(Pi,{variants:Ye,children:a.controlBadges[2]})]})]})]})]}),d.jsx(Ao,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:mt,children:d.jsx(Da,{children:d.jsxs(pv,{to:"/kontakt",children:[d.jsx(_n,{})," ",a.ctaBottom]})})})]})]})},qP={hidden:{opacity:0,y:24},show:{opacity:1,y:0}},KP=qe`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`,YP=qe`
  0% { box-shadow: 0 0 0 rgba(73, 157, 255, 0); }
  50% { box-shadow: 0 0 30px rgba(73, 157, 255, 0.28); }
  100% { box-shadow: 0 0 0 rgba(73, 157, 255, 0); }
`,XP=R.div`
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
`,WP=R.section`
  display: grid;
  gap: 26px;
  grid-template-columns: 1.15fr 1fr;
  align-items: center;
  padding: 84px 0 24px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    padding-top: 52px;
  }
`,QP=R.div`
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
`,ZP=R.span`
  color: #ffd08a;
  text-shadow: 0 0 28px rgba(255, 193, 104, 0.34);
`,JP=R.div`
  margin-top: 24px;
`,hw=R(ua)`
  min-height: 54px;
  padding: 0 28px;
  border: 1px solid rgba(255, 202, 128, 0.35);
  box-shadow: 0 10px 24px rgba(18, 33, 58, 0.34);

  &:hover,
  &:focus-visible {
    box-shadow: 0 0 0 1px rgba(255, 213, 150, 0.55), 0 16px 30px rgba(255, 183, 77, 0.28);
  }
`,eV=R(ie.div)`
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
`,tV=R.div`
  position: absolute;
  inset: 22px;
  display: grid;
  gap: 12px;
`,hh=R.div`
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
`,mh=R.div`
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
`,nV=R(ie.div)`
  margin-top: 4px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(7, 11, 22, 0.7);
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  animation: ${KP} 5.2s ease-in-out infinite;
`,Eo=R(ie.div)`
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
`,aV=R(gt)`
  margin-top: 26px;
`,iV=R.div`
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.86), rgba(10, 16, 30, 0.82));
  padding: 18px;
  box-shadow: 0 20px 54px rgba(5, 9, 18, 0.5);
`,rV=R.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,Mo=R(ie.div)`
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
`,sV=R.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 10px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,oV=R.div`
  display: inline-flex;
  gap: 6px;
  margin-top: 14px;
  margin-bottom: 8px;
  padding: 6px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(11, 17, 32, 0.72);
`,mv=R.button`
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
`,lV=R(ie.article)`
  position: relative;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(11, 17, 32, 0.78);
  padding: ${({$recommended:e})=>e?"24px":"20px"};
  box-shadow: ${({$recommended:e})=>e?"0 22px 60px rgba(32, 78, 148, 0.36)":"0 14px 34px rgba(5, 9, 18, 0.45)"};
  transform: ${({$recommended:e})=>e?"translateY(-6px)":"none"};
  border-color: ${({$recommended:e})=>e?"rgba(118, 182, 255, 0.68)":"rgba(255, 255, 255, 0.14)"};
  animation: ${({$recommended:e})=>e?YP:"none"} 4.6s ease-in-out infinite;

  &:hover {
    transform: ${({$recommended:e})=>e?"translateY(-9px)":"translateY(-5px)"};
    border-color: rgba(245, 195, 120, 0.58);
  }
`,cV=R.span`
  position: absolute;
  right: 16px;
  top: 14px;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 999px;
  background: linear-gradient(120deg, rgba(118, 182, 255, 0.24), rgba(255, 206, 132, 0.24));
  border: 1px solid rgba(153, 201, 255, 0.45);
`,uV=R.div`
  font-size: 34px;
  font-weight: 800;
  line-height: 1;
  margin: 10px 0 3px;
  color: #ffd28f;
`,dV=R.div`
  color: rgba(255, 255, 255, 0.66);
  font-size: 13px;
`,bh=R.div`
  margin-top: 14px;
  margin-bottom: 8px;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.58);
`,xh=R.ul`
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
`,fV=R.div`
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
`,pV=R.div`
  margin-top: 16px;
  padding: 16px;
  border-radius: 14px;
  border: 1px solid rgba(118, 182, 255, 0.2);
  background:
    linear-gradient(180deg, rgba(17, 27, 49, 0.82), rgba(10, 16, 31, 0.84)),
    radial-gradient(circle at top right, rgba(255, 206, 132, 0.12), transparent 42%);
`,hV=R.div`
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.58);
`,mV=R.div`
  margin-top: 8px;
  font-size: 28px;
  line-height: 1.05;
  font-weight: 800;
  color: #8fc5ff;
`,gV=R.div`
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 13px;
`,bV=R.div`
  margin-top: 12px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  overflow: hidden;
  background: rgba(11, 17, 32, 0.7);
`,xV=R.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: 12px 16px;
  gap: 8px;
  background: rgba(255, 255, 255, 0.06);
  font-weight: 700;
`,$r=R.div`
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
`,yV=R.div`
  margin-top: 12px;
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,yh=R.div`
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
`,vV=R.section`
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
`,wV=R(hw)`
  margin-top: 20px;
  min-height: 58px;
  padding: 0 32px;
  font-size: 16px;
`,SV=()=>{const{t:e}=Ge(),[t,a]=j.useState("monthly"),o=["starter","business","pro"].map(l=>({key:l,recommended:l==="business",name:e(`pricing.packages.${l}.name`),desc:e(`pricing.packages.${l}.desc`),price:e(`pricing.packages.${l}.price`),range:e(`pricing.packages.${l}.range`),core:e(`pricing.packages.${l}.core`,{returnObjects:!0}),plus:e(`pricing.packages.${l}.plus`,{returnObjects:!0}),outcome:e(`pricing.packages.${l}.outcome`),subscriptionPrice:e(`pricing.packages.${l}.subscription.${t}.price`),subscriptionMeta:e(`pricing.packages.${l}.subscription.${t}.meta`),subscriptionItems:e(`pricing.packages.${l}.subscription.includes`,{returnObjects:!0})}));return d.jsx(gn,{children:d.jsx(en,{children:d.jsxs(XP,{children:[d.jsxs(WP,{as:ie.section,initial:"hidden",animate:"show",variants:qP,transition:{duration:.64,ease:hn},children:[d.jsxs(QP,{children:[d.jsxs("h1",{children:[e("pricing.hero.titleLine1"),d.jsx("br",{}),e("pricing.hero.titleLine2"),d.jsx("br",{}),d.jsx(ZP,{children:e("pricing.hero.titleLine3")})]}),d.jsx("p",{children:e("pricing.hero.subtitle")}),d.jsx(JP,{children:d.jsxs(hw,{to:"/kontakt",children:[d.jsx(_n,{})," ",e("pricing.hero.cta")]})})]}),d.jsx(eV,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.7,delay:.12},children:d.jsxs(tV,{children:[d.jsxs(hh,{children:[d.jsx("strong",{children:e("pricing.hero.metrics.leadVolume")}),d.jsx(mh,{children:d.jsx(gh,{initial:{width:"22%"},animate:{width:["22%","72%","58%","72%"]},transition:{duration:6,delay:.35,repeat:1/0,ease:"easeInOut"}})})]}),d.jsxs(hh,{children:[d.jsx("strong",{children:e("pricing.hero.metrics.qualifiedLeads")}),d.jsx(mh,{children:d.jsx(gh,{initial:{width:"18%"},animate:{width:["18%","61%","49%","61%"]},transition:{duration:5.6,delay:.48,repeat:1/0,ease:"easeInOut"}})})]}),d.jsxs(hh,{children:[d.jsx("strong",{children:e("pricing.hero.metrics.costPerLead")}),d.jsx(mh,{children:d.jsx(gh,{initial:{width:"76%"},animate:{width:["76%","42%","54%","42%"]},transition:{duration:6.2,delay:.62,repeat:1/0,ease:"easeInOut"}})})]}),d.jsxs(nV,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.6,delay:.7},children:[d.jsxs(Eo,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut"},children:[d.jsx(Wh,{}),e("pricing.hero.funnel.traffic")]}),d.jsxs(Eo,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut",delay:.25},children:[d.jsx(ku,{}),e("pricing.hero.funnel.landing")]}),d.jsxs(Eo,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut",delay:.5},children:[d.jsx(Tu,{}),e("pricing.hero.funnel.leads")]}),d.jsxs(Eo,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut",delay:.75},children:[d.jsx(el,{}),e("pricing.hero.funnel.crm")]}),d.jsxs(Eo,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut",delay:1},children:[d.jsx(Fi,{}),e("pricing.hero.funnel.sales")]})]})]})})]}),d.jsxs(aV,{children:[d.jsx("h2",{children:e("pricing.flow.title")}),d.jsx(iV,{children:d.jsxs(rV,{children:[d.jsxs(Mo,{whileHover:{y:-3},children:[d.jsx(Wh,{}),e("pricing.flow.steps.traffic")]}),d.jsxs(Mo,{whileHover:{y:-3},children:[d.jsx(ku,{}),e("pricing.flow.steps.landing")]}),d.jsxs(Mo,{whileHover:{y:-3},children:[d.jsx(Tu,{}),e("pricing.flow.steps.capture")]}),d.jsxs(Mo,{whileHover:{y:-3},children:[d.jsx(el,{}),e("pricing.flow.steps.crm")]}),d.jsxs(Mo,{whileHover:{y:-3},children:[d.jsx(Fi,{}),e("pricing.flow.steps.sales")]})]})})]}),d.jsxs(gt,{children:[d.jsx("h2",{children:e("pricing.packages.title")}),d.jsxs(oV,{role:"tablist","aria-label":e("pricing.packages.subscriptionTitle"),children:[d.jsx(mv,{type:"button",$active:t==="monthly",onClick:()=>a("monthly"),children:e("pricing.packages.billing.monthly")}),d.jsx(mv,{type:"button",$active:t==="yearly",onClick:()=>a("yearly"),children:e("pricing.packages.billing.yearly")})]}),d.jsx(sV,{children:o.map(l=>d.jsxs(lV,{$recommended:l.recommended,whileHover:{y:l.recommended?-6:-4},transition:{duration:.25},children:[l.recommended?d.jsx(cV,{children:e("pricing.packages.badge")}):null,d.jsx("h3",{children:l.name}),d.jsx("p",{children:l.desc}),d.jsx(uV,{children:l.price}),d.jsx(dV,{children:l.range}),d.jsx(bh,{children:e("pricing.packages.coreTitle")}),d.jsx(xh,{children:l.core.map(u=>d.jsxs("li",{children:[d.jsx(Kt,{})," ",u]},u))}),d.jsx(bh,{children:e("pricing.packages.plusTitle")}),d.jsx(xh,{children:l.plus.map(u=>d.jsxs("li",{children:[d.jsx(Kt,{})," ",u]},u))}),d.jsxs(pV,{children:[d.jsx(hV,{children:e("pricing.packages.subscriptionTitle")}),d.jsx(mV,{children:l.subscriptionPrice}),d.jsx(gV,{children:l.subscriptionMeta}),d.jsx(bh,{children:e("pricing.packages.subscriptionIncludesTitle")}),d.jsx(xh,{children:l.subscriptionItems.map(u=>d.jsxs("li",{children:[d.jsx(Kt,{})," ",u]},u))})]}),d.jsxs(fV,{children:[d.jsx("strong",{children:e("pricing.packages.outcomeLabel")})," ",l.outcome]})]},l.key))})]}),d.jsxs(gt,{children:[d.jsx("h2",{children:e("pricing.comparison.title")}),d.jsxs(bV,{children:[d.jsxs(xV,{children:[d.jsx("span",{children:e("pricing.comparison.headers.feature")}),d.jsx("span",{children:e("pricing.comparison.headers.starter")}),d.jsx("span",{children:e("pricing.comparison.headers.business")}),d.jsx("span",{children:e("pricing.comparison.headers.pro")})]}),d.jsxs($r,{children:[d.jsx("span",{children:e("pricing.comparison.rows.landing")}),d.jsxs(On,{children:[d.jsx(Kt,{})," ",e("pricing.comparison.yes")]}),d.jsxs(On,{children:[d.jsx(Kt,{})," ",e("pricing.comparison.yes")]}),d.jsxs(On,{children:[d.jsx(Kt,{})," ",e("pricing.comparison.yes")]})]}),d.jsxs($r,{children:[d.jsx("span",{children:e("pricing.comparison.rows.multi")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsxs(On,{children:[d.jsx(Kt,{})," ",e("pricing.comparison.yes")]}),d.jsxs(On,{children:[d.jsx(Kt,{})," ",e("pricing.comparison.yes")]})]}),d.jsxs($r,{children:[d.jsx("span",{children:e("pricing.comparison.rows.crm")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsxs(On,{children:[d.jsx(Kt,{})," ",e("pricing.comparison.yes")]}),d.jsxs(On,{children:[d.jsx(Kt,{})," ",e("pricing.comparison.yes")]})]}),d.jsxs($r,{children:[d.jsx("span",{children:e("pricing.comparison.rows.ai")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsxs(On,{children:[d.jsx(Kt,{})," ",e("pricing.comparison.yes")]})]}),d.jsxs($r,{children:[d.jsx("span",{children:e("pricing.comparison.rows.ads")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsxs(On,{children:[d.jsx(Kt,{})," ",e("pricing.comparison.yes")]})]}),d.jsxs($r,{children:[d.jsx("span",{children:e("pricing.comparison.rows.dashboard")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsxs(On,{children:[d.jsx(Kt,{})," ",e("pricing.comparison.yes")]}),d.jsxs(On,{children:[d.jsx(Kt,{})," ",e("pricing.comparison.yes")]})]})]})]}),d.jsxs(gt,{children:[d.jsx("h2",{children:e("pricing.trust.title")}),d.jsxs(yV,{children:[d.jsxs(yh,{children:[d.jsx(W4,{}),d.jsx("strong",{children:e("pricing.trust.delivery.title")}),d.jsx("p",{children:e("pricing.trust.delivery.desc")})]}),d.jsxs(yh,{children:[d.jsx(uE,{}),d.jsx("strong",{children:e("pricing.trust.support.title")}),d.jsx("p",{children:e("pricing.trust.support.desc")})]}),d.jsxs(yh,{children:[d.jsx(oE,{}),d.jsx("strong",{children:e("pricing.trust.dsgvo.title")}),d.jsx("p",{children:e("pricing.trust.dsgvo.desc")})]})]})]}),d.jsxs(vV,{children:[d.jsx("h2",{children:e("pricing.final.title")}),d.jsx("p",{children:e("pricing.final.subtitle")}),d.jsxs(wV,{to:"/kontakt",children:[d.jsx(_n,{})," ",e("pricing.final.cta")]})]})]})})})},gv="/assets/photo_2025-09-16_22-58-01-CZJ1euxS.jpg",bv="/assets/photo_2025-09-16_22-58-14-BefjFQXO.jpg",kV=R.div`
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

`,TV={hidden:{opacity:0,y:20},show:{opacity:1,y:0}},jV=[{niche:"handwerk",labelKey:"references.niches.handwerk",metricLabelKey:"references.metrics.moreRequests",metricValue:"+41%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[16,18,22,24,27,31,34]},{niche:"praxen",labelKey:"references.niches.praxen",metricLabelKey:"references.metrics.moreAppointments",metricValue:"+33%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[14,15,19,23,25,27,30]},{niche:"werkstatt",labelKey:"references.niches.werkstatt",metricLabelKey:"references.metrics.moreCalls",metricValue:"+46%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[11,14,17,22,26,31,36]},{niche:"gastronomie",labelKey:"references.niches.gastronomie",metricLabelKey:"references.metrics.moreReservations",metricValue:"+27%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[16,16,19,21,22,24,27]},{niche:"beauty",labelKey:"references.niches.beauty",metricLabelKey:"references.metrics.moreBookings",metricValue:"+31%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[13,16,18,21,23,25,29]},{niche:"immobilien",labelKey:"references.niches.immobilien",metricLabelKey:"references.metrics.moreLeads",metricValue:"+22%",timeframe:"30-90",source:"GA4 / Search Console",sparkline:[9,11,12,14,16,17,19]},{niche:"kanzlei",labelKey:"references.niches.kanzlei",metricLabelKey:"references.metrics.moreIntroCalls",metricValue:"+24%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[11,12,14,15,17,18,20]},{niche:"fitnessPhysio",labelKey:"references.niches.fitnessPhysio",metricLabelKey:"references.metrics.moreTrialSessions",metricValue:"+29%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[10,13,15,18,20,22,25]},{niche:"reinigung",labelKey:"references.niches.reinigung",metricLabelKey:"references.metrics.moreOffers",metricValue:"+35%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[12,14,17,20,22,25,28]},{niche:"umzugTransport",labelKey:"references.niches.umzugTransport",metricLabelKey:"references.metrics.moreQualifiedLeads",metricValue:"+26%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[11,13,14,17,18,20,23]},{niche:"coachingBeratung",labelKey:"references.niches.coachingBeratung",metricLabelKey:"references.metrics.moreFirstContacts",metricValue:"+28%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[10,12,14,16,18,20,22]},{niche:"bildungKurse",labelKey:"references.niches.bildungKurse",metricLabelKey:"references.metrics.moreCourseSignups",metricValue:"+32%",timeframe:"30-90",source:"GA4 / Search Console / Ads",sparkline:[8,10,13,15,17,20,23]}],xv=[{id:"c1",titleKey:"references.cases.c1.title",category:"handwerk",challengeKey:"references.cases.c1.challenge",solutionKey:"references.cases.c1.solution",metrics:[{metricLabelKey:"references.metrics.moreRequests",metricValue:"+41%"},{metricLabelKey:"references.metrics.budgetEfficiency",metricValue:"+33%"}],timeframe:"30-90",source:"GA4 / Google Ads",beforeImage:dm,afterImage:gv},{id:"c2",titleKey:"references.cases.c2.title",category:"praxen",challengeKey:"references.cases.c2.challenge",solutionKey:"references.cases.c2.solution",metrics:[{metricLabelKey:"references.metrics.moreAppointments",metricValue:"+33%"},{metricLabelKey:"references.metrics.moreInteractions",metricValue:"+46%"}],timeframe:"30-90",source:"GA4 / Meta Ads",beforeImage:hm,afterImage:pm},{id:"c3",titleKey:"references.cases.c3.title",category:"werkstatt",challengeKey:"references.cases.c3.challenge",solutionKey:"references.cases.c3.solution",metrics:[{metricLabelKey:"references.metrics.moreQualifiedLeads",metricValue:"+32%"},{metricLabelKey:"references.metrics.moreLeadsPerBudget",metricValue:"+31%"}],timeframe:"30-90",source:"GA4 / Google Ads",beforeImage:bv,afterImage:fm},{id:"c4",titleKey:"references.cases.c4.title",category:"gastronomie",challengeKey:"references.cases.c4.challenge",solutionKey:"references.cases.c4.solution",metrics:[{metricLabelKey:"references.metrics.moreReservations",metricValue:"+27%"},{metricLabelKey:"references.metrics.moreCalls",metricValue:"+21%"}],timeframe:"30-90",source:"GA4 / Meta Ads",beforeImage:hm,afterImage:gv},{id:"c5",titleKey:"references.cases.c5.title",category:"immobilien",challengeKey:"references.cases.c5.challenge",solutionKey:"references.cases.c5.solution",metrics:[{metricLabelKey:"references.metrics.moreLeads",metricValue:"+22%"},{metricLabelKey:"references.metrics.moreIntroCalls",metricValue:"+19%"}],timeframe:"30-90",source:"GA4 / Search Console / Ads",beforeImage:dm,afterImage:fm},{id:"c6",titleKey:"references.cases.c6.title",category:"kanzlei",challengeKey:"references.cases.c6.challenge",solutionKey:"references.cases.c6.solution",metrics:[{metricLabelKey:"references.metrics.moreFirstContacts",metricValue:"+24%"},{metricLabelKey:"references.metrics.moreConsultations",metricValue:"+18%"}],timeframe:"30-90",source:"GA4 / Google Ads",beforeImage:bv,afterImage:pm}],AV=[{label:"references.filterGroups.all",items:["all"]},{label:"references.filterGroups.localServices",items:["handwerk","werkstatt","reinigung","umzugTransport"]},{label:"references.filterGroups.healthBeauty",items:["praxen","fitnessPhysio","beauty"]},{label:"references.filterGroups.professional",items:["immobilien","kanzlei","coachingBeratung","bildungKurse","gastronomie"]}],CV=[{value:"+41%",label:"references.kpis.leads"},{value:"+27%",label:"references.kpis.conversion"},{value:"+32%",label:"references.kpis.traffic"}],vh={traffic:"-12%",leads:"-18%",conversion:"-9%"},wh={traffic:"+32%",leads:"+41%",conversion:"+27%"},EV=[0,15,30,45,60,75,90],yv=[11,10,10,9,10,9,10],vv=[8,14,21,29,38,48,58],rl=(e,t,a)=>Math.max(t,Math.min(a,e)),mw="M 0 99 C 30 72, 70 30, 100 1",gw="M 0 39 C 35 30, 68 14, 100 1",wv=[98,94,89,83,77,70,62,54,46,38,29,21,12,3],Bu=e=>{if(e.length<2)return mw;const t=.1;let a=`M ${e[0].x.toFixed(2)} ${e[0].y.toFixed(2)}`;for(let i=0;i<e.length-1;i+=1){const o=e[i-1]??e[i],l=e[i],u=e[i+1],p=e[i+2]??u,f=l.x+(u.x-o.x)*t/6,m=l.y+(u.y-o.y)*t/6,g=u.x-(p.x-l.x)*t/6,x=u.y-(p.y-l.y)*t/6;a+=` C ${f.toFixed(2)} ${m.toFixed(2)}, ${g.toFixed(2)} ${x.toFixed(2)}, ${u.x.toFixed(2)} ${u.y.toFixed(2)}`}return a},MV=e=>{const i=wv.map((o,l)=>{const u=0+100*l/(wv.length-1),p=Math.sin(e*1.1+l*1.05)*6.8,f=Math.sin(e*.72+l*.46)*3.4,m=Math.sin(e*1.8+l*1.7)*1.6,g=rl(o+p+f+m,1,99);return{x:u,y:g}});return Bu(i)},zV=(e,t)=>{if(!e||e.length<2)return gw;const a=Math.min(...e),i=Math.max(...e),o=Math.max(1,i-a),l=e.map((u,p)=>{const f=p/(e.length-1)*100,g=39-(u-a)/o*38,x=Math.sin(t*1.15+p*1.2)*3.6,y=Math.sin(t*.74+p*.52)*2,v=Math.sin(t*1.9+p*1.65)*.9,S=rl(g+x+y+v,1,39);return{x:f,y:S}});return Bu(l)},Sv=e=>e.map((a,i)=>{const o=i/(e.length-1)*100,l=rl(56-a/60*52,2,58);return{x:o,y:l,value:a}}),kv=(e,t)=>{if(t===0)return"*";const a=e[t]-e[t-1];return a>0?`+${a}`:a<0?`${a}`:"0"},RV=()=>{const{t:e}=Ge(),[t,a]=j.useState("all"),[i,o]=j.useState(0),l=j.useMemo(()=>xv.filter(v=>t==="all"||v.category===t),[t]),u=j.useMemo(()=>jV.filter(v=>t==="all"||v.niche===t),[t]),p=l[0]??xv[0],f=j.useMemo(()=>MV(i)||mw,[i]),m=j.useMemo(()=>Sv(yv),[]),g=j.useMemo(()=>Sv(vv),[]),x=j.useMemo(()=>Bu(m),[m]),y=j.useMemo(()=>Bu(g),[g]);return j.useEffect(()=>{const v=window.setInterval(()=>{o(S=>(S+.12)%(Math.PI*8))},70);return()=>window.clearInterval(v)},[]),d.jsx(kV,{children:d.jsx(gn,{className:"references-page",children:d.jsxs(en,{children:[d.jsx(Un,{className:"references-hero",as:ie.section,initial:"hidden",animate:"show",variants:TV,transition:{duration:.62,ease:hn},children:d.jsxs("div",{className:"references-hero-grid",children:[d.jsxs("div",{className:"references-hero-copy",children:[d.jsx("h1",{children:d.jsx(Ki,{text:e("references.h1"),durationMs:2800,storageKey:"refs_h1_new_once"})}),d.jsx("p",{children:e("references.subtitle")}),d.jsx(Fe,{children:e("references.trustline")})]}),d.jsxs(Ue,{className:"references-hero-dashboard",as:ie.div,whileHover:{y:-4},animate:{boxShadow:["0 0 0 1px rgba(125, 210, 255, 0.2) inset, 0 24px 50px rgba(2, 8, 20, 0.52)","0 0 0 1px rgba(141, 218, 255, 0.32) inset, 0 30px 62px rgba(3, 12, 28, 0.62)","0 0 0 1px rgba(125, 210, 255, 0.2) inset, 0 24px 50px rgba(2, 8, 20, 0.52)"],borderColor:["rgba(124, 193, 255, 0.32)","rgba(124, 220, 255, 0.58)","rgba(124, 193, 255, 0.32)"]},transition:{duration:5.2,repeat:1/0,ease:"easeInOut"},children:[d.jsx("p",{className:"references-dashboard-label",children:e("references.performanceDashboard")}),d.jsx("div",{className:"references-kpi-row",children:CV.map((v,S)=>d.jsxs(ie.div,{className:"references-kpi-item",animate:{y:[0,-6,0],opacity:[.86,1,.86]},transition:{duration:3.4,delay:S*.45,repeat:1/0,ease:"easeInOut"},children:[d.jsx("span",{className:"references-kpi-value",children:v.value}),d.jsx("span",{className:"references-kpi-label",children:e(v.label)})]},v.label))}),d.jsxs("div",{className:"references-growth-chart-wrap",children:[d.jsx("p",{className:"references-chart-label",children:e("references.growthCurve90")}),d.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"none",className:"references-growth-chart",role:"img","aria-label":e("references.growthChartAria"),children:[d.jsx("defs",{children:d.jsxs("linearGradient",{id:"refsGrowth",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[d.jsx("stop",{offset:"0%",stopColor:"#00c2ff"}),d.jsx("stop",{offset:"100%",stopColor:"#56f5a0"})]})}),d.jsx("path",{d:f})]})]})]})]})}),d.jsxs(gt,{className:"references-filter-wrap",children:[d.jsxs("h2",{className:"references-title",children:[d.jsx(tE,{})," ",e("references.filterTitle")]}),d.jsx(Fe,{children:e("references.counter",{count:l.length})}),d.jsx("div",{className:"references-filter-groups",role:"tablist","aria-label":e("references.filterAria"),children:AV.map(v=>d.jsxs("div",{className:"references-filter-group",children:[d.jsx("p",{className:"references-filter-group-label",children:e(v.label)}),d.jsx("div",{className:"references-filters",children:v.items.map(S=>d.jsx("button",{type:"button",className:`references-filter-chip ${t===S?"active":""}`,onClick:()=>a(S),role:"tab","aria-selected":t===S,children:e(S==="all"?"references.filters.all":`references.niches.${S}`)},S))})]},v.label))})]}),d.jsxs(gt,{className:"references-metric-band",children:[d.jsxs("h2",{className:"references-title",children:[d.jsx(Fi,{})," ",e("references.growthByNiche")]}),d.jsx(fu,{className:"grid-3",children:u.map((v,S)=>d.jsxs(Ue,{className:"references-metric-card",as:ie.article,animate:{y:[0,-5,0],borderColor:["rgba(111, 178, 255, 0.18)","rgba(116, 210, 255, 0.48)","rgba(111, 178, 255, 0.18)"],boxShadow:["0 10px 24px rgba(0, 0, 0, 0.2)","0 16px 34px rgba(8, 31, 61, 0.36)","0 10px 24px rgba(0, 0, 0, 0.2)"]},transition:{duration:4.2,delay:S*.18,repeat:1/0,ease:"easeInOut"},children:[d.jsxs("div",{className:"references-metric-head",children:[d.jsx("h3",{children:e(v.labelKey)}),d.jsxs("span",{className:"references-kpi-badge",children:[d.jsx(YC,{})," ",v.metricValue]})]}),d.jsx("p",{className:"references-metric-line",children:e(v.metricLabelKey)}),d.jsx("svg",{viewBox:"0 0 100 40",preserveAspectRatio:"none",className:"references-sparkline",role:"img","aria-label":e("references.trendAria",{niche:e(v.labelKey)}),children:d.jsx("path",{d:zV(v.sparkline,i+S*.9)||gw})}),d.jsxs(Fe,{children:[d.jsx(my,{})," ",e("references.periodLabel"),": ",v.timeframe," ",e("references.daysUnit")]}),d.jsxs(Fe,{children:[d.jsx(el,{})," ",e("references.measurementLabel"),": ",v.source]})]},v.labelKey))})]}),d.jsxs(gt,{className:"references-cases",children:[d.jsx("h2",{className:"references-title",children:e("references.selectedCases")}),l.length===0?d.jsxs(Ue,{children:[d.jsx("h3",{children:e("references.emptyTitle")}),d.jsx(Fe,{children:e("references.emptyText")})]}):d.jsx(jg,{children:l.map(v=>d.jsxs(Ue,{className:"references-case-card",children:[d.jsx("h3",{children:e(v.titleKey)}),d.jsxs("div",{className:"references-case-block",children:[d.jsx("p",{className:"references-case-label",children:e("references.challengeLabel")}),d.jsx("p",{children:e(v.challengeKey)})]}),d.jsxs("div",{className:"references-case-block",children:[d.jsx("p",{className:"references-case-label",children:e("references.solutionLabel")}),d.jsx("p",{children:e(v.solutionKey)})]}),d.jsxs("div",{className:"references-case-result",children:[d.jsx("p",{className:"references-case-label",children:e("references.resultLabel")}),v.metrics.map(S=>d.jsxs("p",{children:[e(S.metricLabelKey),": ",d.jsx("span",{children:S.metricValue})]},`${v.id}-${S.metricLabelKey}`))]}),d.jsxs(Fe,{children:[d.jsx(my,{})," ",e("references.periodLabel"),": ",v.timeframe," ",e("references.daysUnit")]}),d.jsxs(Fe,{children:[d.jsx(el,{})," ",e("references.measurementLabel"),": ",v.source]})]},v.id))})]}),d.jsxs(gt,{children:[d.jsx("h2",{className:"references-title",children:e("references.beforeAfter")}),d.jsxs("div",{className:"references-compare-shell",children:[d.jsxs("div",{className:"references-compare-chart",children:[d.jsxs("svg",{viewBox:"0 0 100 60",preserveAspectRatio:"none",className:"references-compare-graph",role:"img","aria-label":e("references.compareGraphAria"),children:[[0,16.66,33.33,50,66.66,83.33,100].map(v=>d.jsx("line",{x1:v,y1:"0",x2:v,y2:"60",className:"grid-line"},`vx-${v}`)),[8,16,24,32,40,48,56].map(v=>d.jsx("line",{x1:"0",y1:v,x2:"100",y2:v,className:"grid-line"},`hy-${v}`)),d.jsx("line",{x1:"0",y1:"58",x2:"100",y2:"58",className:"axis-line"}),d.jsx("path",{className:"before-line",d:x}),d.jsx("path",{className:"after-line",d:y}),m.map((v,S)=>d.jsxs("g",{children:[d.jsx("circle",{className:"before-point",cx:v.x,cy:v.y,r:"1.2"}),d.jsx("text",{className:"point-delta before",x:v.x,y:rl(v.y+4.4,4,59),children:kv(yv,S)})]},`before-point-${S}`)),g.map((v,S)=>d.jsxs("g",{children:[d.jsx("circle",{className:"after-point",cx:v.x,cy:v.y,r:"1.4"}),d.jsx("text",{className:"point-delta after",x:v.x,y:rl(v.y-2.2,1.5,58),children:kv(vv,S)})]},`after-point-${S}`))]}),d.jsx("div",{className:"references-compare-days",children:EV.map(v=>d.jsx("span",{children:e("references.dayLabel",{day:v})},v))}),d.jsxs("div",{className:"references-compare-legend",children:[d.jsxs("span",{children:[d.jsx("i",{className:"dot before"})," ",e("references.beforeLegend")]}),d.jsxs("span",{children:[d.jsx("i",{className:"dot after"})," ",e("references.afterLegend")]})]})]}),d.jsxs("div",{className:"references-compare-kpis",children:[d.jsxs("div",{className:"kpi-panel before",children:[d.jsx("h3",{children:e("references.before")}),d.jsxs("p",{children:[e("references.kpis.traffic")," ",d.jsx("span",{children:vh.traffic})]}),d.jsxs("p",{children:[e("references.kpis.leads")," ",d.jsx("span",{children:vh.leads})]}),d.jsxs("p",{children:[e("references.kpis.conversion")," ",d.jsx("span",{children:vh.conversion})]})]}),d.jsxs("div",{className:"kpi-panel after",children:[d.jsx("h3",{children:e("references.after")}),d.jsxs("p",{children:[e("references.kpis.traffic")," ",d.jsx("span",{children:wh.traffic})]}),d.jsxs("p",{children:[e("references.kpis.leads")," ",d.jsx("span",{children:wh.leads})]}),d.jsxs("p",{children:[e("references.kpis.conversion")," ",d.jsx("span",{children:wh.conversion})]})]})]})]}),d.jsxs(Fe,{children:[e("references.periodLabel"),": ",p.timeframe," ",e("references.daysUnit")," · ",e("references.measurementLabel"),": ",p.source]})]}),d.jsxs(Ag,{children:[d.jsx("h2",{children:e("references.ctaTitle")}),d.jsx(Fe,{children:e("references.ctaText")}),d.jsx(Da,{children:d.jsxs(ua,{to:"/kontakt",children:[d.jsx(_n,{})," ",e("references.cta")]})})]})]})})})},LV="/assets/vladyslav-founder-C6kYUNTx.jpg",OV=qe`
  0% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(8px, -8px, 0); }
  100% { transform: translate3d(0, 0, 0); }
`,DV=qe`
  0% { background-position: -120px 0; opacity: 0.45; }
  50% { background-position: 0 0; opacity: 0.95; }
  100% { background-position: 120px 0; opacity: 0.45; }
`,PV=R.div`
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
    animation: ${OV} 12s ease-in-out infinite;
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
    animation: ${DV} 2.2s linear infinite;
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

`,VV=()=>{const{t:e}=Ge(),[t,a]=j.useState(0);j.useEffect(()=>{let v=0;const S=performance.now(),k=C=>{a((C-S)/1e3),v=window.requestAnimationFrame(k)};return v=window.requestAnimationFrame(k),()=>window.cancelAnimationFrame(v)},[]);const i=Math.sin(t*1.2)*-10,o=Math.sin(t*1.2+.8)*-12,l=Math.sin(t*1.2+1.6)*-9,u=t*40%64,p=(t*40+18)%64,f=.9+(Math.sin(t*2.4)+1)/2*.1,m=.88+(Math.sin(t*2.4+.6)+1)/2*.12,g=.84+(Math.sin(t*2.4+1.2)+1)/2*.14,x=1+(Math.sin(t*2.8)+1)/2*.05,y=Math.sin(t*1.1)*6;return d.jsxs("div",{className:"about-hero-visual","aria-hidden":"true",children:[d.jsxs("div",{className:"about-hero-bgLayer",children:[d.jsx("div",{className:"about-hero-radial"}),d.jsx("div",{className:"about-hero-grid"})]}),d.jsx("div",{className:"about-hero-contentLayer",children:d.jsxs("div",{className:"about-hero-dashboard-shell",children:[d.jsxs("div",{className:"about-hero-dashboard-head",children:[d.jsx("div",{className:"about-hero-product-badge",children:e("aboutPage.visual.productBadge",{defaultValue:"Lead System"})}),d.jsxs("div",{className:"about-hero-shell-metric",children:[d.jsx("span",{className:"about-hero-shell-label",children:e("aboutPage.visual.flowLabel",{defaultValue:"Flow"})}),d.jsx("span",{className:"about-hero-shell-value",children:e("aboutPage.visual.flowValue",{defaultValue:"Before zu System zu Result"})})]})]}),d.jsxs("div",{className:"about-hero-storyboard",children:[d.jsxs("article",{className:"about-hero-story-card about-hero-story-card-before",style:{transform:`translateY(${i}px)`},children:[d.jsx("p",{className:"about-hero-stage-eyebrow",children:e("aboutPage.visual.before.label",{defaultValue:"Before"})}),d.jsx("p",{className:"about-hero-metric-title",children:e("aboutPage.visual.before.title",{defaultValue:"Viele Klicks, wenig Klarheit"})}),d.jsxs("ul",{className:"about-hero-story-list",children:[d.jsx("li",{children:e("aboutPage.visual.before.i1",{defaultValue:"Langsame Seiten"})}),d.jsx("li",{children:e("aboutPage.visual.before.i2",{defaultValue:"Unklare Kontaktwege"})}),d.jsx("li",{children:e("aboutPage.visual.before.i3",{defaultValue:"Keine sauberen Daten"})})]})]}),d.jsxs("div",{className:"about-hero-story-connector",children:[d.jsx("div",{className:"about-hero-pipeline-line"}),d.jsx("span",{className:"about-hero-pipeline-pulse",style:{transform:`translate(${u}px, -50%) scale(1.15)`}})]}),d.jsxs("article",{className:"about-hero-story-card about-hero-story-card-system",style:{transform:`translateY(${o}px)`},children:[d.jsx("p",{className:"about-hero-stage-eyebrow",children:e("aboutPage.visual.system.label",{defaultValue:"System"})}),d.jsxs("div",{className:"about-hero-phone-preview",children:[d.jsx("div",{className:"about-hero-phone-notch"}),d.jsxs("div",{className:"about-hero-phone-screen",children:[d.jsx("div",{className:"about-hero-phone-badge",children:e("aboutPage.visual.system.phoneBadge",{defaultValue:"Website"})}),d.jsx("div",{className:"about-hero-phone-line about-hero-phone-line-strong",style:{transform:`scaleX(${f})`,opacity:.7+(f-.9)*2.2}}),d.jsx("div",{className:"about-hero-phone-line",style:{transform:`scaleX(${m})`,opacity:.56+(m-.88)*2.1}}),d.jsx("div",{className:"about-hero-phone-line",style:{transform:`scaleX(${g})`,opacity:.52+(g-.84)*1.9}}),d.jsx("div",{className:"about-hero-phone-cta",style:{transform:`scale(${x})`,opacity:.88+(x-1)*2},children:e("aboutPage.visual.system.cta",{defaultValue:"Termin anfragen"})})]})]}),d.jsxs("div",{className:"about-hero-system-pills",children:[d.jsx("span",{children:e("aboutPage.visual.system.pill1",{defaultValue:"Website"})}),d.jsx("span",{children:e("aboutPage.visual.system.pill2",{defaultValue:"Kontaktwege"})}),d.jsx("span",{children:e("aboutPage.visual.system.pill3",{defaultValue:"Tracking"})})]})]}),d.jsxs("div",{className:"about-hero-story-connector",children:[d.jsx("div",{className:"about-hero-pipeline-line"}),d.jsx("span",{className:"about-hero-pipeline-pulse",style:{transform:`translate(${p}px, -50%) scale(1.15)`}})]}),d.jsxs("article",{className:"about-hero-story-card about-hero-story-card-result",style:{transform:`translateY(${l}px)`},children:[d.jsx("p",{className:"about-hero-stage-eyebrow",children:e("aboutPage.visual.result.label",{defaultValue:"Result"})}),d.jsx("p",{className:"about-hero-result-metric",children:"+12"}),d.jsx("p",{className:"about-hero-metric-title",children:e("aboutPage.visual.result.title",{defaultValue:"Qualifizierte Anfragen"})}),d.jsx("p",{className:"about-hero-metric-text",children:e("aboutPage.visual.result.text",{defaultValue:"Messbar, schneller beantwortbar und klar im Funnel sichtbar."})})]})]}),d.jsxs("div",{className:"about-hero-metric-anchor",style:{transform:`translateX(${y}px)`},children:[d.jsx("span",{className:"about-hero-anchor-label",children:e("aboutPage.visual.anchor.label",{defaultValue:"Ergebnis"})}),d.jsx("span",{className:"about-hero-anchor-value",children:e("aboutPage.visual.anchor.value",{defaultValue:"Mehr qualifizierte Anfragen statt nur Website-Traffic"})})]})]})})]})},NV=()=>{const{t:e}=Ge();return d.jsx(PV,{children:d.jsx(gn,{children:d.jsxs(en,{children:[d.jsxs(Un,{className:"about-hero",children:[d.jsxs("div",{className:"about-hero-copy",children:[d.jsx("p",{className:"about-hero-eyebrow",children:e("aboutPage.heroEyebrow",{defaultValue:"VS Studio | Hildesheim | Niedersachsen | Deutschland"})}),d.jsxs("h1",{children:[d.jsx("span",{className:"about-hero-title-line",children:e("aboutPage.heroTitleLine1",{defaultValue:"Websites und"})}),d.jsx("span",{className:"about-hero-title-line",children:d.jsx("span",{className:"about-hero-title-highlight",children:e("aboutPage.heroTitleLine2",{defaultValue:"Lead-Systeme"})})}),d.jsx("span",{className:"about-hero-title-line",children:e("aboutPage.heroTitleLine3",{defaultValue:"fuer lokale Unternehmen"})}),d.jsx("span",{className:"about-hero-title-line",children:e("aboutPage.heroTitleLine4",{defaultValue:"in Hildesheim"})})]}),d.jsx("p",{className:"about-hero-subtitle",children:e("aboutPage.heroSubtitle",{defaultValue:"Mehr qualifizierte Anfragen durch schnelle Websites, klare Kontaktwege und messbares Marketing."})}),d.jsx("p",{className:"about-trustline",children:e("aboutPage.heroTrustline",{defaultValue:"Lokal in Hildesheim. Strategisch in Niedersachsen. Umsetzbar in ganz Deutschland."})}),d.jsx(Da,{className:"about-hero-actions",children:d.jsxs(ua,{to:"/kontakt",children:[d.jsx(_n,{})," ",e("aboutPage.primaryCta",{defaultValue:"Kostenlose Website-Analyse"})]})})]}),d.jsx(VV,{})]}),d.jsxs(gt,{children:[d.jsx("h2",{children:e("aboutPage.section.about",{defaultValue:"About"})}),d.jsxs(jg,{children:[d.jsxs(Ue,{children:[d.jsx("h3",{children:e("aboutPage.blocks.who.title",{defaultValue:"Fuer lokale Unternehmen"})}),d.jsx(Fe,{children:e("aboutPage.blocks.who.text",{defaultValue:"Websites, Lead-Systeme und Marketing fuer Betriebe, die planbar mehr Anfragen wollen."})})]}),d.jsxs(Ue,{children:[d.jsx("h3",{children:e("aboutPage.blocks.focus.title",{defaultValue:"Ein System statt Einzelloesungen"})}),d.jsx(Fe,{children:e("aboutPage.blocks.focus.text",{defaultValue:"Website, Kontaktwege, Kampagnen und Tracking greifen als ein klarer Prozess zusammen."})})]})]})]}),d.jsxs(gt,{children:[d.jsx("h2",{children:e("aboutPage.section.localAdvantages",{defaultValue:"Lokale Vorteile"})}),d.jsxs("div",{className:"about-main-grid",children:[d.jsxs(Ue,{className:"about-photo-card",children:[d.jsx("img",{className:"about-photo-image",src:LV,alt:e("aboutPage.photoAlt",{defaultValue:"Vladyslav, Gruender von VS Web Studio aus Hildesheim"})}),d.jsx("p",{className:"about-photo-caption",children:e("aboutPage.photoCaption",{defaultValue:"Vladyslav - Gruender von VS Web Studio"})}),d.jsxs(Go,{className:"about-photo-facts",children:[d.jsxs("li",{children:[d.jsx(jt,{})," ",e("aboutPage.photoFacts.f1",{defaultValue:"Fokus: lokale Unternehmen"})]}),d.jsxs("li",{children:[d.jsx(jt,{})," ",e("aboutPage.photoFacts.f2",{defaultValue:"Standort: Hildesheim"})]}),d.jsxs("li",{children:[d.jsx(jt,{})," ",e("aboutPage.photoFacts.f3",{defaultValue:"Projekte: deutschlandweit"})]})]}),d.jsxs("div",{className:"about-geo-badges",children:[d.jsxs("span",{className:"about-geo-badge",children:[d.jsx(_o,{})," ",e("aboutPage.geo.local",{defaultValue:"Hildesheim"})]}),d.jsxs("span",{className:"about-geo-badge",children:[d.jsx(_o,{})," ",e("aboutPage.geo.region",{defaultValue:"Niedersachsen"})]}),d.jsxs("span",{className:"about-geo-badge",children:[d.jsx(_o,{})," ",e("aboutPage.geo.country",{defaultValue:"Deutschlandweit"})]})]})]}),d.jsxs(Ue,{className:"about-text-card",children:[d.jsx("h3",{children:e("aboutPage.blocks.locality.title",{defaultValue:"Lokale Naehe als Vorteil"})}),d.jsx("p",{className:"about-local-subtitle",children:e("aboutPage.blocks.locality.subtitle",{defaultValue:"Schnelle Abstimmung, klare Prioritaeten und messbare Ergebnisse."})}),d.jsx(Fe,{className:"about-local-copy",children:e("aboutPage.blocks.locality.text1",{defaultValue:"Wir arbeiten direkt mit lokalen Unternehmen zusammen - ohne lange Agenturketten und unnoetige Buerokratie."})}),d.jsxs(Go,{className:"about-local-list",children:[d.jsxs("li",{children:[d.jsx(jt,{})," ",e("aboutPage.blocks.locality.i1",{defaultValue:"Direkte Kommunikation ohne Umwege"})]}),d.jsxs("li",{children:[d.jsx(jt,{})," ",e("aboutPage.blocks.locality.i2",{defaultValue:"Schnelle Umsetzung statt langer Abstimmungen"})]}),d.jsxs("li",{children:[d.jsx(jt,{})," ",e("aboutPage.blocks.locality.i3",{defaultValue:"Verstaendnis fuer lokale Maerkte und Budgets"})]})]}),d.jsx(Fe,{className:"about-local-copy",children:e("aboutPage.blocks.locality.text2",{defaultValue:"Unsere Kunden profitieren davon, dass Entscheidungen schneller getroffen werden und Projekte nicht wochenlang in Abstimmungsschleifen haengen bleiben."})}),d.jsx(Fe,{className:"about-local-copy",children:e("aboutPage.blocks.locality.text3",{defaultValue:"Das spart Zeit, reduziert Kosten und sorgt dafuer, dass Marketingmassnahmen schneller Ergebnisse liefern."})}),d.jsx(Fe,{className:"about-local-copy",children:e("aboutPage.blocks.locality.text4",{defaultValue:"Wir kennen die Realitaet kleiner und mittelstaendischer Unternehmen: begrenzte Budgets, wenig Zeit und den Wunsch nach klaren Resultaten statt komplizierten Konzepten."})}),d.jsx(Fe,{className:"about-local-copy",children:e("aboutPage.blocks.locality.text5",{defaultValue:"Deshalb arbeiten wir pragmatisch und strukturiert - von der ersten Analyse ueber die Umsetzung bis zur kontinuierlichen Optimierung."})}),d.jsx("p",{className:"about-local-priority",children:e("aboutPage.localPriority",{defaultValue:"Kurze Wege. Klare Prioritaeten. Fokus auf Ergebnisse."})})]})]})]}),d.jsxs(gt,{children:[d.jsx("h2",{children:e("aboutPage.section.how",{defaultValue:"How we work"})}),d.jsxs(fu,{className:"about-work-grid",children:[d.jsxs(Ue,{className:"about-step-card",children:[d.jsxs("h3",{children:[d.jsx(Yt,{children:d.jsx(ku,{})}),e("aboutPage.how.s1.title",{defaultValue:"1. Verstehen"})]}),d.jsx(Fe,{children:e("aboutPage.how.s1.text",{defaultValue:"Zielgruppe, Angebot und Markt analysieren."})})]}),d.jsxs(Ue,{className:"about-step-card",children:[d.jsxs("h3",{children:[d.jsx(Yt,{children:d.jsx(Tu,{})}),e("aboutPage.how.s2.title",{defaultValue:"2. Umsetzen"})]}),d.jsx(Fe,{children:e("aboutPage.how.s2.text",{defaultValue:"Website, Lead-System und Kampagnen starten."})})]}),d.jsxs(Ue,{className:"about-step-card",children:[d.jsxs("h3",{children:[d.jsx(Yt,{children:d.jsx(Fi,{})}),e("aboutPage.how.s3.title",{defaultValue:"3. Optimieren"})]}),d.jsx(Fe,{children:e("aboutPage.how.s3.text",{defaultValue:"Daten analysieren und Ergebnisse verbessern."})})]})]})]}),d.jsxs(gt,{children:[d.jsx("h2",{children:e("aboutPage.section.value",{defaultValue:"Value"})}),d.jsxs(fu,{className:"about-value-grid",children:[d.jsxs(Ue,{className:"about-value-card",children:[d.jsxs("h3",{children:[d.jsx(Yt,{children:d.jsx(Tu,{})}),e("aboutPage.cards.work.title",{defaultValue:"Klare Prozesse"})]}),d.jsx(Fe,{children:e("aboutPage.cards.work.desc",{defaultValue:"Kurze Wege. Klare Verantwortung."})})]}),d.jsxs(Ue,{className:"about-value-card",children:[d.jsxs("h3",{children:[d.jsx(Yt,{children:d.jsx(ns,{})}),e("aboutPage.cards.ai.title",{defaultValue:"AI First"})]}),d.jsx(Fe,{children:e("aboutPage.cards.ai.desc",{defaultValue:"Automatisierung dort, wo sie Zeit spart."})})]}),d.jsxs(Ue,{className:"about-value-card",children:[d.jsxs("h3",{children:[d.jsx(Yt,{children:d.jsx(pl,{})}),e("aboutPage.cards.leads.title",{defaultValue:"Lead Fokus"})]}),d.jsx(Fe,{children:e("aboutPage.cards.leads.desc",{defaultValue:"Design und Marketing arbeiten zusammen."})})]})]})]}),d.jsx(gt,{children:d.jsxs(Ue,{children:[d.jsx("h2",{children:e("aboutPage.results.title",{defaultValue:"Was Kunden erhalten"})}),d.jsxs(Go,{children:[d.jsxs("li",{children:[d.jsx(jt,{})," ",e("aboutPage.results.i1",{defaultValue:"Schnelle Website, die auf jedem Smartphone laedt"})]}),d.jsxs("li",{children:[d.jsx(jt,{})," ",e("aboutPage.results.i2",{defaultValue:"Klare Kontaktwege: Anruf, Formular, Termin"})]}),d.jsxs("li",{children:[d.jsx(jt,{})," ",e("aboutPage.results.i3",{defaultValue:"Messbare Anfragen mit Tracking und Marketing-Daten"})]})]})]})}),d.jsxs(gt,{children:[d.jsx("h2",{children:e("aboutPage.section.trust",{defaultValue:"Trust"})}),d.jsxs(fu,{children:[d.jsxs(Ue,{children:[d.jsx("h3",{children:e("aboutPage.trust.projects.label",{defaultValue:"Anzahl Projekte"})}),d.jsx("p",{className:"about-trust-metric",children:e("aboutPage.trust.projects.value",{defaultValue:"120+"})}),d.jsx(Fe,{children:e("aboutPage.trust.projects.text",{defaultValue:"Websites, Lead-Funnels und Relaunches."})})]}),d.jsxs(Ue,{children:[d.jsx("h3",{children:e("aboutPage.trust.industries.label",{defaultValue:"Branchen"})}),d.jsx("p",{className:"about-trust-metric",children:e("aboutPage.trust.industries.value",{defaultValue:"12"})}),d.jsx(Fe,{children:e("aboutPage.trust.industries.text",{defaultValue:"Handwerk, Praxen, Gastronomie, Beauty, Bildung und lokale Dienstleistungen."})})]}),d.jsxs(Ue,{children:[d.jsx("h3",{children:e("aboutPage.trust.focus.label",{defaultValue:"Fokus"})}),d.jsx("p",{className:"about-trust-metric",children:e("aboutPage.trust.focus.value",{defaultValue:"Lokal + Messbar"})}),d.jsx(Fe,{children:e("aboutPage.trust.focus.text",{defaultValue:"Hildesheim, Niedersachsen und Deutschland mit klarem Lead-Fokus."})})]})]})]}),d.jsxs(Ag,{className:"about-cta-band",children:[d.jsx("h2",{children:e("aboutPage.cta.title",{defaultValue:"Bereit für planbare Anfragen?"})}),d.jsx(Fe,{children:e("aboutPage.cta.text",{defaultValue:"Im kostenlosen Erstgespräch zeigen wir die größten Hebel für Ihre Website, Lead-Prozesse und Werbung."})}),d.jsx(Da,{children:d.jsxs(ua,{to:"/kontakt",children:[d.jsx(_n,{})," ",e("aboutPage.primaryCta",{defaultValue:"Kostenloses Erstgespräch starten"})]})})]})]})})})},BV=R.div`
  padding: 0 0 84px;

  @media (max-width: 991px) {
    padding: 0 0 72px;
  }
`,_V=R(ie.section)`
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
`,HV=R.div`
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
`,$V=R.div`
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
`,UV=R.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 10px 0 0;
`,GV=R.div`
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
`,IV=R.div`
  align-self: stretch;
  position: relative;
  z-index: 1;
`,FV=R.div`
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
`,qV=R.h1`
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
`,KV=R.p`
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
`,bw=rd`
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
`,YV=R(Ue)`
  ${bw}
`,XV=R(ie.form)`
  ${bw}
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  min-height: 100%;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(20px);
`,Tv=R(YV)`
  display: grid;
  gap: 14px;
`,vm=R.span`
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
`,jv=R.h2`
  margin: 0 0 10px;
  font-size: clamp(24px, 2.4vw, 34px);
  line-height: 1.02;
`,WV=R.p`
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
`,Yc=R(uw)`
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
`,QV=R.p`
  margin: 6px 0 0;
  color: rgba(255, 255, 255, 0.58);
  max-width: 36ch;
  font-size: 11px;
  line-height: 1.35;
`,Av=R.p`
  margin: 8px 0 0;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid
    ${({$tone:e})=>e==="success"?"rgba(104, 211, 145, 0.35)":"rgba(255, 150, 150, 0.32)"};
  background: ${({$tone:e})=>e==="success"?"rgba(104, 211, 145, 0.12)":"rgba(255, 120, 120, 0.12)"};
  color: ${({$tone:e})=>e==="success"?"#bef7d0":"#ffd0d0"};
  font-size: 12px;
  line-height: 1.45;
`,ZV=R.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,JV=R(cw)`
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
`,eN=R.div`
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
`,tN=R.div`
  display: grid;
  gap: 8px;
`,xw=rd`
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
  ${xw}
`;const Sh=R.a`
  ${xw}
  text-decoration: none;

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
    border-color: rgba(255, 180, 80, 0.3);
    background: rgba(255, 255, 255, 0.07);
  }
`,nN=R.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,aN=R.span`
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
`,iN=R(ie.section)`
  padding-top: 8px;
`,rN=R.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`,sN=R(vm)`
  color: rgba(255, 211, 148, 0.88);
`,oN=R.h3`
  margin: 0;
  font-size: clamp(22px, 2.8vw, 30px);
  line-height: 1.12;
`,lN=R.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  line-height: 1.55;
`,cN=R.div`
  display: grid;
  gap: 10px;
`,uN=R.div`
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
`,yw=qe`
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
`,dN=qe`
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
`,fN=qe`
  0%, 100% {
    transform: scaleX(0.18);
    opacity: 0.42;
  }
  50% {
    transform: scaleX(1);
    opacity: 1;
  }
`,pN=qe`
  0%, 100% {
    transform: translateY(0) scale(1);
    opacity: 0.72;
  }
  50% {
    transform: translateY(-2px) scale(1.06);
    opacity: 1;
  }
`,hN=qe`
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
`,mN=qe`
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
`,gN=qe`
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
`,bN=qe`
  0%, 100% {
    transform: translate(-50%, -50%) scale(0.92);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.28);
  }
`,xN=qe`
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
`,vw=qe`
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
`,yN=qe`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`,vN=R.div`
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
`,ww=R.div`
  position: absolute;
  border-radius: 999px;
  pointer-events: none;
  filter: blur(64px);
  opacity: 0.26;
  z-index: 0;
`,wN=R(ww)`
  width: 240px;
  height: 180px;
  top: 4%;
  left: 8%;
  background: radial-gradient(circle, rgba(255, 190, 98, 0.54), rgba(255, 190, 98, 0));
  animation: ${yw} 12s ease-in-out infinite;
`,SN=R(ww)`
  width: 280px;
  height: 220px;
  right: 0;
  bottom: 6%;
  background: radial-gradient(circle, rgba(68, 120, 255, 0.46), rgba(68, 120, 255, 0));
  animation: ${yw} 14s ease-in-out infinite reverse;
`,kN=R.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 3px;
  margin-bottom: 12px;
`,TN=R.span`
  color: rgba(255, 208, 148, 0.78);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`,jN=R.p`
  margin: 0;
  max-width: 24ch;
  color: rgba(255, 255, 255, 0.88);
  font-size: 12px;
  line-height: 1.3;
`,AN=R.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  align-items: start;
`,CN=R.div`
  display: grid;
  gap: 8px;
`,EN=R.div`
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
`,Cv=R.div`
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
`,MN=R.div`
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
`,zN=R.div`
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
`,RN=R.span`
  color: rgba(255, 211, 148, 0.82);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`,LN=R.strong`
  color: rgba(255, 255, 255, 0.96);
  font-size: 18px;
  line-height: 1.05;
`,ON=R.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.66);
  font-size: 11px;
  line-height: 1.3;
`,DN=R.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,Ev=R.span`
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
`,PN=R.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 6px;
`,VN=R.div`
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
  animation: ${dN} 12.6s ease-in-out infinite;
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
  animation: ${pN} 1.8s ease-in-out infinite;
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
  animation: ${fN} 1.6s ease-in-out infinite;
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
  animation: ${hN} ${({$duration:e})=>`${e}s`} ease-in-out infinite;
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
    animation: ${mN} ${({$duration:e})=>`${Math.max(e-.4,1.2)}s`} linear infinite;
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
    animation: ${gN} ${({$duration:e})=>`${e}s`} ease-out infinite;
    animation-delay: ${({$delay:e})=>`${e}s`};
  }

  &::after {
    width: 10px;
    height: 10px;
    background: radial-gradient(circle, rgba(255, 220, 168, 1), rgba(255, 178, 80, 0.2));
    box-shadow: 0 0 18px rgba(255, 200, 120, 0.58);
    animation: ${bN} ${({$duration:e})=>`${Math.max(e-.4,1.1)}s`} ease-in-out infinite;
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
  animation: ${xN} ${({$duration:e})=>`${e}s`} cubic-bezier(0.42, 0.08, 0.58, 0.92) infinite alternate both;
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
    animation: ${vw} ${({$duration:e})=>`${Math.max(e-.4,1.4)}s`} linear infinite;
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
  animation: ${yN} 2.4s ease-in-out infinite;
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
`;const NN=qe`
  from {
    transform: translate3d(calc(-50% - (var(--lane-gap) / 2)), 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`,BN=qe`
  0%, 100% {
    opacity: 0.24;
    transform: scaleX(0.92);
  }
  50% {
    opacity: 0.54;
    transform: scaleX(1);
  }
`,_N=qe`
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -3px, 0);
  }
`,HN=qe`
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-6px) scale(1.01);
  }
`,Mv=qe`
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
`,$N=qe`
  0%, 100% {
    transform: translateY(0);
    border-color: rgba(255, 255, 255, 0.08);
  }
  50% {
    transform: translateY(-3px);
    border-color: rgba(255, 188, 97, 0.18);
  }
`,UN=qe`
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
  animation: ${_N} 6.2s ease-in-out infinite;
  will-change: transform;

  &::before {
    content: '';
    position: absolute;
    left: 14px;
    right: 14px;
    bottom: 12px;
    height: 1px;
    background: linear-gradient(90deg, rgba(255, 188, 97, 0), rgba(255, 188, 97, 0.36), rgba(71, 133, 255, 0));
    animation: ${BN} 3.4s ease-in-out infinite;
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
  animation: ${NN} ${({$duration:e})=>`${e}s`} linear infinite;
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
  animation: ${UN} 3.6s ease-in-out infinite;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0));
    transform: translateX(-120%);
    animation: ${vw} 6.8s linear infinite;
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
  animation: ${HN} 8.6s ease-in-out infinite;

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
    animation: ${Mv} 4.8s ease-out infinite;
  }

  &::after {
    width: 152px;
    height: 152px;
    border: 1px solid rgba(76, 134, 255, 0.12);
    animation: ${Mv} 5.8s ease-out infinite;
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
  animation: ${$N} 3.8s ease-in-out infinite;
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
`;const Ca={eyebrow:"Lead Flow",title:"Website, Ads und Calls gehen direkt in den CRM-Flow.",lanes:[{source:"Website",target:"Lead",tone:"gold"},{source:"Ads",target:"Lead",tone:"blue"},{source:"Calls",target:"Lead",tone:"green"}],routerEyebrow:"CRM Hub",routerTitle:"CRM Router",routerMeta:"Capture, Routing und Rueckmeldung.",miniMeta:["1-2h Antwort","Live in CRM"],stats:[{value:"1-2h",label:"Response"},{value:"Live",label:"Assigned in CRM"}]},GN=()=>{const{t:e}=Ge();return d.jsxs(vN,{"aria-hidden":"true",children:[d.jsx(wN,{}),d.jsx(SN,{}),d.jsxs(kN,{children:[d.jsx(TN,{children:e("contact.visual.eyebrow",{defaultValue:Ca.eyebrow})}),d.jsx(jN,{children:e("contact.visual.title",{defaultValue:Ca.title})})]}),d.jsxs(AN,{children:[d.jsx(CN,{children:Ca.lanes.map((t,a)=>d.jsxs(EN,{children:[d.jsx(Cv,{$tone:t.tone,children:e(`contact.visual.lanes.${a}.source`,{defaultValue:t.source})}),d.jsx(MN,{}),d.jsx(Cv,{children:e(`contact.visual.lanes.${a}.target`,{defaultValue:t.target})})]},t.source))}),d.jsxs(zN,{children:[d.jsx(RN,{children:e("contact.visual.routerEyebrow",{defaultValue:Ca.routerEyebrow})}),d.jsx(LN,{children:e("contact.visual.routerTitle",{defaultValue:Ca.routerTitle})}),d.jsx(ON,{children:e("contact.visual.routerMeta",{defaultValue:Ca.routerMeta})}),d.jsxs(DN,{children:[d.jsxs(Ev,{children:[d.jsx(W4,{}),e("contact.visual.miniMeta.0",{defaultValue:Ca.miniMeta[0]})]}),d.jsxs(Ev,{children:[d.jsx(ui,{}),e("contact.visual.miniMeta.1",{defaultValue:Ca.miniMeta[1]})]})]}),d.jsx(PN,{children:Ca.stats.map((t,a)=>d.jsxs(VN,{children:[d.jsx("strong",{children:e(`contact.visual.stats.${a}.value`,{defaultValue:t.value})}),d.jsx("span",{children:e(`contact.visual.stats.${a}.label`,{defaultValue:t.label})})]},t.label))})]})]})]})},zv={hidden:{opacity:0,y:20},show:{opacity:1,y:0}},Me={headline:"Erzaehlen Sie uns von Ihrem Projekt",responseTime:"Durchschnittliche Antwortzeit: 1-2h",subtitle:"Kurz beschreiben, was Sie planen. Sie erhalten schnell eine Ersteinschaetzung und den naechsten Schritt.",quickContacts:"Direkter Kontakt",responseNote:"Antwort meist innerhalb von 1-2 Stunden",formTitle:"Projektanfrage",formIntro:"Drei Angaben reichen fuer den Start.",formHelp:"Name, Unternehmen und Ziel genuegen.",nextStepsTitle:"So geht es weiter",nextStepsLead:"Nach Ihrer Anfrage sehen Sie sofort, wie der erste Kontakt, die Priorisierung und die Rueckmeldung organisiert sind.",labels:{name:"Ihr Name",business:"Unternehmen",email:"E-Mail",message:"Projekt oder Ziel"},submitLoading:"Wird gesendet...",submitSuccess:"Vielen Dank. Ihre Anfrage wurde erfolgreich versendet.",submitError:"Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",contactMeta:{location:"Standort fuer schnelle Abstimmung",email:"Projektanfragen per E-Mail",phone:"Kurzes Erstgespraech oder Rueckruf"},trustItems:["Direkte Kommunikation","Klare Ersteinschaetzung","Schnelle Rueckmeldung"],nextSteps:["Ihre Anfrage landet direkt im Intake-Flow.","Wir melden uns meist innerhalb von 1-2 Stunden zurueck.","Sie erhalten einen klaren naechsten Schritt statt langer Rueckfragen."]},IN=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,FN="Ehrlicherstr. 52, 31135 Hildesheim, Germany",qN=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FN)}`,KN=()=>{var N;const{t:e}=Ge(),a=((N=$n().state)==null?void 0:N.prefillNeed)||"",[i,o]=j.useState(""),[l,u]=j.useState(""),[p,f]=j.useState(""),[m,g]=j.useState(a),[x,y]=j.useState(""),[v,S]=j.useState(!1),[k,C]=j.useState(!1),[M,z]=j.useState(!1),[A,$]=j.useState("");j.useEffect(()=>{a&&g(a)},[a]);const E=()=>["/.netlify/functions/contact","/api/contact"],V=async O=>{if(O.preventDefault(),C(!1),z(!1),$(""),!IN.test(p.trim())){z(!0),$(e("contact.form.error",{defaultValue:Me.submitError}));return}S(!0);try{const X=JSON.stringify({name:i.trim(),business:l.trim(),email:p.trim(),message:m.trim(),website:x.trim()}),J=E();let H=null;for(const te of J)if(H=await fetch(te,{method:"POST",headers:{"Content-Type":"application/json"},body:X}),H.ok||H.status!==404)break;if(!H||!H.ok)throw new Error(`Request failed with status ${(H==null?void 0:H.status)??"unknown"}`);o(""),u(""),f(""),g(""),y(""),C(!0)}catch(X){console.error("Contact form submit failed",X),z(!0),$(e("contact.form.error",{defaultValue:Me.submitError}))}finally{S(!1)}};return d.jsx(BV,{children:d.jsxs(en,{children:[d.jsx(_V,{initial:"hidden",animate:"show",variants:zv,transition:{duration:.62,ease:hn},children:d.jsx(HV,{children:d.jsxs($V,{children:[d.jsxs(UV,{children:[d.jsxs(FV,{children:[d.jsx(Qu,{}),d.jsx("span",{children:e("contact.responseTime",{defaultValue:Me.responseTime})})]}),d.jsx(qV,{children:d.jsx(Ki,{text:e("contact.h1",{defaultValue:Me.headline}),durationMs:2200,storageKey:"kontakt_h1_once"})}),d.jsx(KV,{children:e("contact.subtitle",{defaultValue:Me.subtitle})})]}),d.jsxs(GV,{children:[d.jsxs(XV,{onSubmit:V,noValidate:!0,children:[d.jsx(vm,{children:"VS Web Studio"}),d.jsx(jv,{children:e("contact.form.title",{defaultValue:Me.formTitle})}),d.jsx(WV,{children:e("contact.form.intro",{defaultValue:Me.formIntro})}),d.jsxs(ZV,{"aria-hidden":"true",children:[d.jsx("label",{htmlFor:"contact-website",children:"Website"}),d.jsx("input",{id:"contact-website",type:"text",name:"website",value:x,onChange:O=>y(O.target.value),tabIndex:-1,autoComplete:"off"})]}),d.jsxs(qc,{children:[d.jsx(Kc,{children:e("contact.form.labels.name",{defaultValue:Me.labels.name})}),d.jsxs(Yc,{children:[d.jsx(fE,{}),d.jsx("input",{type:"text",name:"name",value:i,onChange:O=>o(O.target.value),placeholder:e("contact.form.name",{defaultValue:Me.labels.name}),"aria-label":e("contact.form.labels.name",{defaultValue:Me.labels.name}),required:!0})]})]}),d.jsxs(qc,{children:[d.jsx(Kc,{children:e("contact.form.labels.business",{defaultValue:Me.labels.business})}),d.jsxs(Yc,{children:[d.jsx(X4,{}),d.jsx("input",{type:"text",name:"business",value:l,onChange:O=>u(O.target.value),placeholder:e("contact.form.business",{defaultValue:Me.labels.business}),"aria-label":e("contact.form.labels.business",{defaultValue:Me.labels.business}),required:!0})]})]}),d.jsxs(qc,{children:[d.jsx(Kc,{children:e("contact.form.labels.email",{defaultValue:Me.labels.email})}),d.jsxs(Yc,{children:[d.jsx(ui,{}),d.jsx("input",{type:"email",name:"email",value:p,onChange:O=>f(O.target.value),placeholder:e("contact.form.email",{defaultValue:Me.labels.email}),"aria-label":e("contact.form.labels.email",{defaultValue:Me.labels.email}),autoComplete:"email",required:!0})]})]}),d.jsxs(qc,{children:[d.jsx(Kc,{children:e("contact.form.labels.message",{defaultValue:Me.labels.message})}),d.jsxs(Yc,{children:[d.jsx(JC,{}),d.jsx("textarea",{name:"message",placeholder:e("contact.form.need",{defaultValue:Me.labels.message}),value:m,onChange:O=>g(O.target.value),"aria-label":e("contact.form.labels.message",{defaultValue:Me.labels.message}),required:!0})]})]}),d.jsx(QV,{children:e("contact.form.help",{defaultValue:Me.formHelp})}),k?d.jsx(Av,{$tone:"success",role:"status","aria-live":"polite",children:e("contact.form.success",{defaultValue:Me.submitSuccess})}):null,M?d.jsx(Av,{$tone:"error",role:"alert",children:A||e("contact.form.error",{defaultValue:Me.submitError})}):null,d.jsxs(JV,{type:"submit",disabled:v,"aria-busy":v,children:[d.jsx(ui,{}),v?e("contact.form.submitLoading",{defaultValue:Me.submitLoading}):e("contact.form.submit",{defaultValue:"Projekt anfragen"})]})]}),d.jsx(IV,{children:d.jsx(GN,{})})]})]})})}),d.jsx(iN,{initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.18},variants:zv,transition:{duration:.52,ease:hn},children:d.jsxs(rN,{children:[d.jsxs(Tv,{children:[d.jsx(vm,{children:"VS Web Studio"}),d.jsx(jv,{children:e("contact.quickContacts",{defaultValue:Me.quickContacts})}),d.jsxs(eN,{children:[d.jsx(hE,{}),d.jsx("span",{children:e("contact.responseNote",{defaultValue:Me.responseNote})})]}),d.jsxs(tN,{children:[d.jsxs(Sh,{href:qN,target:"_blank",rel:"noreferrer",children:[d.jsx(_o,{}),d.jsxs("div",{children:[d.jsx("strong",{children:"Ehrlicherstr. 52, 31135 Hildesheim"}),d.jsx("span",{children:e("contact.contactMeta.location",{defaultValue:Me.contactMeta.location})})]})]}),d.jsxs(Sh,{href:"mailto:anfrage@vs-web-studio.de",children:[d.jsx(ui,{}),d.jsxs("div",{children:[d.jsx("strong",{children:"anfrage@vs-web-studio.de"}),d.jsx("span",{children:e("contact.contactMeta.email",{defaultValue:Me.contactMeta.email})})]})]}),d.jsxs(Sh,{href:"tel:+4915164392053",children:[d.jsx(rE,{}),d.jsxs("div",{children:[d.jsx("strong",{children:"+49 1516 4392053"}),d.jsx("span",{children:e("contact.contactMeta.phone",{defaultValue:Me.contactMeta.phone})})]})]})]}),d.jsx(nN,{children:Me.trustItems.map((O,X)=>d.jsxs(aN,{children:[d.jsx(jt,{}),e(`contact.trustItems.${X}`,{defaultValue:O})]},O))})]}),d.jsxs(Tv,{children:[d.jsx(sN,{children:e("contact.nextStepsEyebrow",{defaultValue:"Lead Intake"})}),d.jsx(oN,{children:e("contact.nextStepsTitle",{defaultValue:Me.nextStepsTitle})}),d.jsx(lN,{children:e("contact.nextStepsLead",{defaultValue:Me.nextStepsLead})}),d.jsx(cN,{children:Me.nextSteps.map((O,X)=>d.jsxs(uN,{children:[d.jsxs("span",{children:["0",X+1]}),d.jsx("p",{children:e(`contact.nextSteps.${X}`,{defaultValue:O})})]},O))})]})]})})]})})},YN=()=>{const{t:e}=Ge();return d.jsx(gn,{children:d.jsxs(en,{children:[d.jsxs(Un,{children:[d.jsx("h1",{children:d.jsx(Ki,{text:e("blog.h1"),durationMs:2600,storageKey:"blog_h1_once"})}),d.jsx("p",{children:e("blog.subtitle")})]}),d.jsx(gt,{children:d.jsxs(jg,{children:[d.jsx(Ue,{children:d.jsxs("h3",{children:[d.jsx(Yt,{children:d.jsx(ns,{})}),e("blog.cards.c1")]})}),d.jsx(Ue,{children:d.jsxs("h3",{children:[d.jsx(Yt,{children:d.jsx(e3,{})}),e("blog.cards.c2")]})}),d.jsx(Ue,{children:d.jsxs("h3",{children:[d.jsx(Yt,{children:d.jsx(pl,{})}),e("blog.cards.c3")]})}),d.jsx(Ue,{children:d.jsxs("h3",{children:[d.jsx(Yt,{children:d.jsx(ns,{})}),e("blog.cards.c4")]})})]})}),d.jsxs(Ag,{children:[d.jsx("h2",{children:d.jsx(Ki,{text:e("blog.leadMagnet"),durationMs:1800,storageKey:"blog_leadmagnet_once"})}),d.jsxs(eP,{style:{maxWidth:420},children:[d.jsxs(uw,{children:[d.jsx(ui,{})," ",d.jsx("input",{type:"email",placeholder:e("blog.emailPlaceholder"),required:!0})]}),d.jsxs(cw,{type:"submit",children:[d.jsx(ui,{})," ",e("blog.getGuide")]})]})]})]})})},XN=()=>{const{t:e}=Ge();return d.jsx(gn,{children:d.jsxs(en,{children:[d.jsxs(Un,{children:[d.jsx("h1",{children:e("legal.impressum.h1")}),d.jsx("p",{children:e("legal.impressum.subtitle")})]}),d.jsx(gt,{children:d.jsxs(Ue,{children:[d.jsx("p",{children:e("legal.impressum.l1")}),d.jsx("p",{children:e("legal.impressum.l2")}),d.jsx("p",{children:e("legal.impressum.l3")}),d.jsx("p",{children:e("legal.impressum.l4")}),d.jsx("p",{children:e("legal.impressum.l5")})]})})]})})},WN=()=>{const{t:e}=Ge();return d.jsx(gn,{children:d.jsxs(en,{children:[d.jsxs(Un,{children:[d.jsx("h1",{children:e("legal.datenschutz.h1")}),d.jsx("p",{children:e("legal.datenschutz.subtitle")})]}),d.jsx(gt,{children:d.jsxs(Ue,{children:[d.jsx("p",{children:e("legal.datenschutz.l1")}),d.jsx("p",{children:e("legal.datenschutz.l2")}),d.jsx("p",{children:e("legal.datenschutz.l3")}),d.jsx("p",{children:e("legal.datenschutz.l4")})]})})]})})},QN=()=>{const{t:e}=Ge();return d.jsx(gn,{children:d.jsxs(en,{children:[d.jsxs(Un,{children:[d.jsx("h1",{children:e("legal.agb.h1")}),d.jsx("p",{children:e("legal.agb.subtitle")})]}),d.jsx(gt,{children:d.jsxs(Ue,{children:[d.jsx("p",{children:e("legal.agb.l1")}),d.jsx("p",{children:e("legal.agb.l2")})]})})]})})},ZN=()=>{const{t:e}=Ge();return d.jsx(gn,{children:d.jsxs(en,{children:[d.jsxs(Un,{children:[d.jsx("h1",{children:e("legal.cookies.h1")}),d.jsx("p",{children:e("legal.cookies.subtitle")})]}),d.jsx(gt,{children:d.jsxs(Ue,{children:[d.jsx("p",{children:e("legal.cookies.l1")}),d.jsx("p",{children:e("legal.cookies.l2")})]})})]})})},JN=()=>{const{t:e}=Ge();return d.jsx(gn,{children:d.jsx(en,{children:d.jsxs(Un,{children:[d.jsx("h1",{children:e("niche.handwerker.h1")}),d.jsx("p",{children:e("niche.handwerker.p")}),d.jsx(Da,{children:d.jsx(ua,{to:"/kontakt",children:e("common.projectRequest")})})]})})})},eB=()=>{const{t:e}=Ge();return d.jsx(gn,{children:d.jsx(en,{children:d.jsxs(Un,{children:[d.jsx("h1",{children:e("niche.praxis.h1")}),d.jsx("p",{children:e("niche.praxis.p")}),d.jsx(Da,{children:d.jsx(ua,{to:"/kontakt",children:e("common.projectRequest")})})]})})})},tB=()=>{const{t:e}=Ge();return d.jsx(gn,{children:d.jsx(en,{children:d.jsxs(Un,{children:[d.jsx("h1",{children:e("niche.werkstatt.h1")}),d.jsx("p",{children:e("niche.werkstatt.p")}),d.jsx(Da,{children:d.jsx(ua,{to:"/kontakt",children:e("common.projectRequest")})})]})})})},nB=()=>d.jsx(gn,{children:d.jsx(en,{children:d.jsxs(Un,{children:[d.jsx("p",{children:"404"}),d.jsx("h1",{children:"Seite nicht gefunden."}),d.jsx("p",{children:"Diese URL existiert nicht oder wurde verschoben. Wechseln Sie zur Startseite oder senden Sie uns direkt Ihre Projektanfrage."}),d.jsxs(Da,{children:[d.jsxs(ua,{to:"/",children:[d.jsx(KC,{})," Zur Startseite"]}),d.jsx(ua,{to:"/kontakt",children:"Projekt anfragen"})]})]})})}),Sw="vs-studio-maintenance-bypass",aB=5,iB=3200,rB=()=>typeof window>"u"?!1:window.localStorage.getItem(Sw)==="true",sB=({children:e})=>{const[t,a]=j.useState(rB),[i,o]=j.useState(0),l=j.useRef(null);j.useEffect(()=>()=>{l.current!==null&&window.clearTimeout(l.current)},[]);const u=()=>{window.localStorage.setItem(Sw,"true"),a(!0),o(0),l.current!==null&&(window.clearTimeout(l.current),l.current=null)},p=()=>{const f=i+1;if(f>=aB){u();return}o(f),l.current!==null&&window.clearTimeout(l.current),l.current=window.setTimeout(()=>{o(0),l.current=null},iB)};return t?d.jsx(d.Fragment,{children:e}):d.jsxs("div",{className:"maintenance-screen",children:[d.jsx("button",{type:"button",className:"maintenance-ghost-trigger","aria-label":"Open internal preview access",onClick:p}),d.jsxs("div",{className:"maintenance-shell",children:[d.jsx("div",{className:"maintenance-badge",children:"VS Web Studio"}),d.jsx("p",{className:"maintenance-kicker",children:"Website update in progress"}),d.jsx("h1",{children:"We are building something sharper."}),d.jsx("p",{className:"maintenance-copy",children:"Our website is currently under development. We are preparing the new experience and will be back online soon."}),d.jsxs("div",{className:"maintenance-meta",children:[d.jsx("span",{children:"Design"}),d.jsx("span",{children:"Development"}),d.jsx("span",{children:"Launch soon"})]})]})]})},oB=()=>d.jsx(sB,{children:d.jsx(nk,{children:d.jsxs(kt,{path:"/",element:d.jsx(PR,{}),children:[d.jsx(kt,{index:!0,element:d.jsx($D,{})}),d.jsx(kt,{path:"services",element:d.jsx(FP,{})}),d.jsx(kt,{path:"preise",element:d.jsx(SV,{})}),d.jsx(kt,{path:"referenzen",element:d.jsx(RV,{})}),d.jsx(kt,{path:"ueber-uns",element:d.jsx(NV,{})}),d.jsx(kt,{path:"kontakt",element:d.jsx(KN,{})}),d.jsx(kt,{path:"blog",element:d.jsx(YN,{})}),d.jsx(kt,{path:"handwerker",element:d.jsx(JN,{})}),d.jsx(kt,{path:"praxis",element:d.jsx(eB,{})}),d.jsx(kt,{path:"werkstatt",element:d.jsx(tB,{})}),d.jsx(kt,{path:"impressum",element:d.jsx(XN,{})}),d.jsx(kt,{path:"datenschutz",element:d.jsx(WN,{})}),d.jsx(kt,{path:"agb",element:d.jsx(QN,{})}),d.jsx(kt,{path:"cookies",element:d.jsx(ZN,{})}),d.jsx(kt,{path:"home",element:d.jsx(J8,{to:"/",replace:!0})}),d.jsx(kt,{path:"*",element:d.jsx(nB,{})})]})})});t8.createRoot(document.getElementById("root")).render(d.jsxs(Ce.StrictMode,{children:[d.jsx(E9,{styles:D9}),d.jsx(Ak,{basename:"/",children:d.jsx(CM,{children:d.jsx(oB,{})})})]}));export{lB as c,Rv as g};
