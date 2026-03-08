function yS(e,t){for(var i=0;i<t.length;i++){const a=t[i];if(typeof a!="string"&&!Array.isArray(a)){for(const o in a)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(a,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>a[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=i(o);fetch(o.href,l)}})();var FP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lp={exports:{}},oo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rb;function xS(){if(rb)return oo;rb=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,o,l){var u=null;if(l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),"key"in o){l={};for(var f in o)f!=="key"&&(l[f]=o[f])}else l=o;return o=l.ref,{$$typeof:e,type:a,key:u,ref:o!==void 0?o:null,props:l}}return oo.Fragment=t,oo.jsx=i,oo.jsxs=i,oo}var sb;function vS(){return sb||(sb=1,lp.exports=xS()),lp.exports}var d=vS(),cp={exports:{}},lo={},up={exports:{}},dp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ob;function wS(){return ob||(ob=1,function(e){function t(H,L){var B=H.length;H.push(L);e:for(;0<B;){var Q=B-1>>>1,z=H[Q];if(0<o(z,L))H[Q]=L,H[B]=z,B=Q;else break e}}function i(H){return H.length===0?null:H[0]}function a(H){if(H.length===0)return null;var L=H[0],B=H.pop();if(B!==L){H[0]=B;e:for(var Q=0,z=H.length,X=z>>>1;Q<X;){var te=2*(Q+1)-1,ie=H[te],se=te+1,ye=H[se];if(0>o(ie,B))se<z&&0>o(ye,ie)?(H[Q]=ye,H[se]=B,Q=se):(H[Q]=ie,H[te]=B,Q=te);else if(se<z&&0>o(ye,B))H[Q]=ye,H[se]=B,Q=se;else break e}}return L}function o(H,L){var B=H.sortIndex-L.sortIndex;return B!==0?B:H.id-L.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();e.unstable_now=function(){return u.now()-f}}var p=[],m=[],g=1,y=null,x=3,v=!1,S=!1,j=!1,C=!1,k=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function V(H){for(var L=i(m);L!==null;){if(L.callback===null)a(m);else if(L.startTime<=H)a(m),L.sortIndex=L.expirationTime,t(p,L);else break;L=i(m)}}function M(H){if(j=!1,V(H),!S)if(i(p)!==null)S=!0,P||(P=!0,ne());else{var L=i(m);L!==null&&ue(M,L.startTime-H)}}var P=!1,D=-1,U=5,G=-1;function Y(){return C?!0:!(e.unstable_now()-G<U)}function Z(){if(C=!1,P){var H=e.unstable_now();G=H;var L=!0;try{e:{S=!1,j&&(j=!1,R(D),D=-1),v=!0;var B=x;try{t:{for(V(H),y=i(p);y!==null&&!(y.expirationTime>H&&Y());){var Q=y.callback;if(typeof Q=="function"){y.callback=null,x=y.priorityLevel;var z=Q(y.expirationTime<=H);if(H=e.unstable_now(),typeof z=="function"){y.callback=z,V(H),L=!0;break t}y===i(p)&&a(p),V(H)}else a(p);y=i(p)}if(y!==null)L=!0;else{var X=i(m);X!==null&&ue(M,X.startTime-H),L=!1}}break e}finally{y=null,x=B,v=!1}L=void 0}}finally{L?ne():P=!1}}}var ne;if(typeof A=="function")ne=function(){A(Z)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ce=le.port2;le.port1.onmessage=Z,ne=function(){ce.postMessage(null)}}else ne=function(){k(Z,0)};function ue(H,L){D=k(function(){H(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(H){H.callback=null},e.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<H?Math.floor(1e3/H):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_next=function(H){switch(x){case 1:case 2:case 3:var L=3;break;default:L=x}var B=x;x=L;try{return H()}finally{x=B}},e.unstable_requestPaint=function(){C=!0},e.unstable_runWithPriority=function(H,L){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var B=x;x=H;try{return L()}finally{x=B}},e.unstable_scheduleCallback=function(H,L,B){var Q=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Q+B:Q):B=Q,H){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=B+z,H={id:g++,callback:L,priorityLevel:H,startTime:B,expirationTime:z,sortIndex:-1},B>Q?(H.sortIndex=B,t(m,H),i(p)===null&&H===i(m)&&(j?(R(D),D=-1):j=!0,ue(M,B-Q))):(H.sortIndex=z,t(p,H),S||v||(S=!0,P||(P=!0,ne()))),H},e.unstable_shouldYield=Y,e.unstable_wrapCallback=function(H){var L=x;return function(){var B=x;x=L;try{return H.apply(this,arguments)}finally{x=B}}}}(dp)),dp}var lb;function SS(){return lb||(lb=1,up.exports=wS()),up.exports}var fp={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cb;function TS(){if(cb)return xe;cb=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function x(z){return z===null||typeof z!="object"?null:(z=y&&z[y]||z["@@iterator"],typeof z=="function"?z:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,j={};function C(z,X,te){this.props=z,this.context=X,this.refs=j,this.updater=te||v}C.prototype.isReactComponent={},C.prototype.setState=function(z,X){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,X,"setState")},C.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function k(){}k.prototype=C.prototype;function R(z,X,te){this.props=z,this.context=X,this.refs=j,this.updater=te||v}var A=R.prototype=new k;A.constructor=R,S(A,C.prototype),A.isPureReactComponent=!0;var V=Array.isArray,M={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function D(z,X,te,ie,se,ye){return te=ye.ref,{$$typeof:e,type:z,key:X,ref:te!==void 0?te:null,props:ye}}function U(z,X){return D(z.type,X,void 0,void 0,void 0,z.props)}function G(z){return typeof z=="object"&&z!==null&&z.$$typeof===e}function Y(z){var X={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(te){return X[te]})}var Z=/\/+/g;function ne(z,X){return typeof z=="object"&&z!==null&&z.key!=null?Y(""+z.key):X.toString(36)}function le(){}function ce(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(le,le):(z.status="pending",z.then(function(X){z.status==="pending"&&(z.status="fulfilled",z.value=X)},function(X){z.status==="pending"&&(z.status="rejected",z.reason=X)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function ue(z,X,te,ie,se){var ye=typeof z;(ye==="undefined"||ye==="boolean")&&(z=null);var de=!1;if(z===null)de=!0;else switch(ye){case"bigint":case"string":case"number":de=!0;break;case"object":switch(z.$$typeof){case e:case t:de=!0;break;case g:return de=z._init,ue(de(z._payload),X,te,ie,se)}}if(de)return se=se(z),de=ie===""?"."+ne(z,0):ie,V(se)?(te="",de!=null&&(te=de.replace(Z,"$&/")+"/"),ue(se,X,te,"",function(Ct){return Ct})):se!=null&&(G(se)&&(se=U(se,te+(se.key==null||z&&z.key===se.key?"":(""+se.key).replace(Z,"$&/")+"/")+de)),X.push(se)),1;de=0;var pt=ie===""?".":ie+":";if(V(z))for(var Oe=0;Oe<z.length;Oe++)ie=z[Oe],ye=pt+ne(ie,Oe),de+=ue(ie,X,te,ye,se);else if(Oe=x(z),typeof Oe=="function")for(z=Oe.call(z),Oe=0;!(ie=z.next()).done;)ie=ie.value,ye=pt+ne(ie,Oe++),de+=ue(ie,X,te,ye,se);else if(ye==="object"){if(typeof z.then=="function")return ue(ce(z),X,te,ie,se);throw X=String(z),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return de}function H(z,X,te){if(z==null)return z;var ie=[],se=0;return ue(z,ie,"","",function(ye){return X.call(te,ye,se++)}),ie}function L(z){if(z._status===-1){var X=z._result;X=X(),X.then(function(te){(z._status===0||z._status===-1)&&(z._status=1,z._result=te)},function(te){(z._status===0||z._status===-1)&&(z._status=2,z._result=te)}),z._status===-1&&(z._status=0,z._result=X)}if(z._status===1)return z._result.default;throw z._result}var B=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function Q(){}return xe.Children={map:H,forEach:function(z,X,te){H(z,function(){X.apply(this,arguments)},te)},count:function(z){var X=0;return H(z,function(){X++}),X},toArray:function(z){return H(z,function(X){return X})||[]},only:function(z){if(!G(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},xe.Component=C,xe.Fragment=i,xe.Profiler=o,xe.PureComponent=R,xe.StrictMode=a,xe.Suspense=p,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=M,xe.__COMPILER_RUNTIME={__proto__:null,c:function(z){return M.H.useMemoCache(z)}},xe.cache=function(z){return function(){return z.apply(null,arguments)}},xe.cloneElement=function(z,X,te){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var ie=S({},z.props),se=z.key,ye=void 0;if(X!=null)for(de in X.ref!==void 0&&(ye=void 0),X.key!==void 0&&(se=""+X.key),X)!P.call(X,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&X.ref===void 0||(ie[de]=X[de]);var de=arguments.length-2;if(de===1)ie.children=te;else if(1<de){for(var pt=Array(de),Oe=0;Oe<de;Oe++)pt[Oe]=arguments[Oe+2];ie.children=pt}return D(z.type,se,void 0,void 0,ye,ie)},xe.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:l,_context:z},z},xe.createElement=function(z,X,te){var ie,se={},ye=null;if(X!=null)for(ie in X.key!==void 0&&(ye=""+X.key),X)P.call(X,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(se[ie]=X[ie]);var de=arguments.length-2;if(de===1)se.children=te;else if(1<de){for(var pt=Array(de),Oe=0;Oe<de;Oe++)pt[Oe]=arguments[Oe+2];se.children=pt}if(z&&z.defaultProps)for(ie in de=z.defaultProps,de)se[ie]===void 0&&(se[ie]=de[ie]);return D(z,ye,void 0,void 0,null,se)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(z){return{$$typeof:f,render:z}},xe.isValidElement=G,xe.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:L}},xe.memo=function(z,X){return{$$typeof:m,type:z,compare:X===void 0?null:X}},xe.startTransition=function(z){var X=M.T,te={};M.T=te;try{var ie=z(),se=M.S;se!==null&&se(te,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(Q,B)}catch(ye){B(ye)}finally{M.T=X}},xe.unstable_useCacheRefresh=function(){return M.H.useCacheRefresh()},xe.use=function(z){return M.H.use(z)},xe.useActionState=function(z,X,te){return M.H.useActionState(z,X,te)},xe.useCallback=function(z,X){return M.H.useCallback(z,X)},xe.useContext=function(z){return M.H.useContext(z)},xe.useDebugValue=function(){},xe.useDeferredValue=function(z,X){return M.H.useDeferredValue(z,X)},xe.useEffect=function(z,X,te){var ie=M.H;if(typeof te=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(z,X)},xe.useId=function(){return M.H.useId()},xe.useImperativeHandle=function(z,X,te){return M.H.useImperativeHandle(z,X,te)},xe.useInsertionEffect=function(z,X){return M.H.useInsertionEffect(z,X)},xe.useLayoutEffect=function(z,X){return M.H.useLayoutEffect(z,X)},xe.useMemo=function(z,X){return M.H.useMemo(z,X)},xe.useOptimistic=function(z,X){return M.H.useOptimistic(z,X)},xe.useReducer=function(z,X,te){return M.H.useReducer(z,X,te)},xe.useRef=function(z){return M.H.useRef(z)},xe.useState=function(z){return M.H.useState(z)},xe.useSyncExternalStore=function(z,X,te){return M.H.useSyncExternalStore(z,X,te)},xe.useTransition=function(){return M.H.useTransition()},xe.version="19.1.1",xe}var ub;function om(){return ub||(ub=1,fp.exports=TS()),fp.exports}var pp={exports:{}},Rt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var db;function jS(){if(db)return Rt;db=1;var e=om();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(p,m,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:y==null?null:""+y,children:p,containerInfo:m,implementation:g}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Rt.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return l(p,m,null,g)},Rt.flushSync=function(p){var m=u.T,g=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=m,a.p=g,a.d.f()}},Rt.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(p,m))},Rt.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Rt.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,y=f(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,v=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?a.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:x,fetchPriority:v}):g==="script"&&a.d.X(p,{crossOrigin:y,integrity:x,fetchPriority:v,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Rt.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=f(m.as,m.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(p)},Rt.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,y=f(g,m.crossOrigin);a.d.L(p,g,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Rt.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=f(m.as,m.crossOrigin);a.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(p)},Rt.requestFormReset=function(p){a.d.r(p)},Rt.unstable_batchedUpdates=function(p,m){return p(m)},Rt.useFormState=function(p,m,g){return u.H.useFormState(p,m,g)},Rt.useFormStatus=function(){return u.H.useHostTransitionStatus()},Rt.version="19.1.1",Rt}var fb;function fv(){if(fb)return pp.exports;fb=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),pp.exports=jS(),pp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pb;function kS(){if(pb)return lo;pb=1;var e=SS(),t=om(),i=fv();function a(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var r=n,s=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(s=r.return),n=r.return;while(n)}return r.tag===3?s:null}function u(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function f(n){if(l(n)!==n)throw Error(a(188))}function p(n){var r=n.alternate;if(!r){if(r=l(n),r===null)throw Error(a(188));return r!==n?null:n}for(var s=n,c=r;;){var h=s.return;if(h===null)break;var b=h.alternate;if(b===null){if(c=h.return,c!==null){s=c;continue}break}if(h.child===b.child){for(b=h.child;b;){if(b===s)return f(h),n;if(b===c)return f(h),r;b=b.sibling}throw Error(a(188))}if(s.return!==c.return)s=h,c=b;else{for(var w=!1,T=h.child;T;){if(T===s){w=!0,s=h,c=b;break}if(T===c){w=!0,c=h,s=b;break}T=T.sibling}if(!w){for(T=b.child;T;){if(T===s){w=!0,s=b,c=h;break}if(T===c){w=!0,c=b,s=h;break}T=T.sibling}if(!w)throw Error(a(189))}}if(s.alternate!==c)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?n:r}function m(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=m(n),r!==null)return r;n=n.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),R=Symbol.for("react.consumer"),A=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),G=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),Z=Symbol.iterator;function ne(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var le=Symbol.for("react.client.reference");function ce(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===le?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case S:return"Fragment";case C:return"Profiler";case j:return"StrictMode";case M:return"Suspense";case P:return"SuspenseList";case G:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case v:return"Portal";case A:return(n.displayName||"Context")+".Provider";case R:return(n._context.displayName||"Context")+".Consumer";case V:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case D:return r=n.displayName||null,r!==null?r:ce(n.type)||"Memo";case U:r=n._payload,n=n._init;try{return ce(n(r))}catch{}}return null}var ue=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},Q=[],z=-1;function X(n){return{current:n}}function te(n){0>z||(n.current=Q[z],Q[z]=null,z--)}function ie(n,r){z++,Q[z]=n.current,n.current=r}var se=X(null),ye=X(null),de=X(null),pt=X(null);function Oe(n,r){switch(ie(de,r),ie(ye,n),ie(se,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?L2(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=L2(r),n=D2(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}te(se),ie(se,n)}function Ct(){te(se),te(ye),te(de)}function oa(n){n.memoizedState!==null&&ie(pt,n);var r=se.current,s=D2(r,n.type);r!==s&&(ie(ye,n),ie(se,s))}function ai(n){ye.current===n&&(te(se),te(ye)),pt.current===n&&(te(pt),no._currentValue=B)}var fn=Object.prototype.hasOwnProperty,Yu=e.unstable_scheduleCallback,Xu=e.unstable_cancelCallback,Qw=e.unstable_shouldYield,Ww=e.unstable_requestPaint,Bn=e.unstable_now,Zw=e.unstable_getCurrentPriorityLevel,pg=e.unstable_ImmediatePriority,hg=e.unstable_UserBlockingPriority,ol=e.unstable_NormalPriority,Jw=e.unstable_LowPriority,mg=e.unstable_IdlePriority,e3=e.log,t3=e.unstable_setDisableYieldValue,us=null,Qt=null;function Ai(n){if(typeof e3=="function"&&t3(n),Qt&&typeof Qt.setStrictMode=="function")try{Qt.setStrictMode(us,n)}catch{}}var Wt=Math.clz32?Math.clz32:a3,n3=Math.log,i3=Math.LN2;function a3(n){return n>>>=0,n===0?32:31-(n3(n)/i3|0)|0}var ll=256,cl=4194304;function la(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function ul(n,r,s){var c=n.pendingLanes;if(c===0)return 0;var h=0,b=n.suspendedLanes,w=n.pingedLanes;n=n.warmLanes;var T=c&134217727;return T!==0?(c=T&~b,c!==0?h=la(c):(w&=T,w!==0?h=la(w):s||(s=T&~n,s!==0&&(h=la(s))))):(T=c&~b,T!==0?h=la(T):w!==0?h=la(w):s||(s=c&~n,s!==0&&(h=la(s)))),h===0?0:r!==0&&r!==h&&(r&b)===0&&(b=h&-h,s=r&-r,b>=s||b===32&&(s&4194048)!==0)?r:h}function ds(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function r3(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gg(){var n=ll;return ll<<=1,(ll&4194048)===0&&(ll=256),n}function bg(){var n=cl;return cl<<=1,(cl&62914560)===0&&(cl=4194304),n}function Qu(n){for(var r=[],s=0;31>s;s++)r.push(n);return r}function fs(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function s3(n,r,s,c,h,b){var w=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var T=n.entanglements,O=n.expirationTimes,$=n.hiddenUpdates;for(s=w&~s;0<s;){var W=31-Wt(s),ee=1<<W;T[W]=0,O[W]=-1;var F=$[W];if(F!==null)for($[W]=null,W=0;W<F.length;W++){var K=F[W];K!==null&&(K.lane&=-536870913)}s&=~ee}c!==0&&yg(n,c,0),b!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=b&~(w&~r))}function yg(n,r,s){n.pendingLanes|=r,n.suspendedLanes&=~r;var c=31-Wt(r);n.entangledLanes|=r,n.entanglements[c]=n.entanglements[c]|1073741824|s&4194090}function xg(n,r){var s=n.entangledLanes|=r;for(n=n.entanglements;s;){var c=31-Wt(s),h=1<<c;h&r|n[c]&r&&(n[c]|=r),s&=~h}}function Wu(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Zu(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function vg(){var n=L.p;return n!==0?n:(n=window.event,n===void 0?32:J2(n.type))}function o3(n,r){var s=L.p;try{return L.p=n,r()}finally{L.p=s}}var Ci=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Ci,Bt="__reactProps$"+Ci,Ua="__reactContainer$"+Ci,Ju="__reactEvents$"+Ci,l3="__reactListeners$"+Ci,c3="__reactHandles$"+Ci,wg="__reactResources$"+Ci,ps="__reactMarker$"+Ci;function ed(n){delete n[Mt],delete n[Bt],delete n[Ju],delete n[l3],delete n[c3]}function Ia(n){var r=n[Mt];if(r)return r;for(var s=n.parentNode;s;){if(r=s[Ua]||s[Mt]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(n=B2(n);n!==null;){if(s=n[Mt])return s;n=B2(n)}return r}n=s,s=n.parentNode}return null}function $a(n){if(n=n[Mt]||n[Ua]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function hs(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(a(33))}function qa(n){var r=n[wg];return r||(r=n[wg]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function ht(n){n[ps]=!0}var Sg=new Set,Tg={};function ca(n,r){Fa(n,r),Fa(n+"Capture",r)}function Fa(n,r){for(Tg[n]=r,n=0;n<r.length;n++)Sg.add(r[n])}var u3=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jg={},kg={};function d3(n){return fn.call(kg,n)?!0:fn.call(jg,n)?!1:u3.test(n)?kg[n]=!0:(jg[n]=!0,!1)}function dl(n,r,s){if(d3(r))if(s===null)n.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var c=r.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+s)}}function fl(n,r,s){if(s===null)n.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+s)}}function ri(n,r,s,c){if(c===null)n.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(r,s,""+c)}}var td,Eg;function Ka(n){if(td===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);td=r&&r[1]||"",Eg=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+td+n+Eg}var nd=!1;function id(n,r){if(!n||nd)return"";nd=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(r){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(K){var F=K}Reflect.construct(n,[],ee)}else{try{ee.call()}catch(K){F=K}n.call(ee.prototype)}}else{try{throw Error()}catch(K){F=K}(ee=n())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(K){if(K&&F&&typeof K.stack=="string")return[K.stack,F.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var b=c.DetermineComponentFrameRoot(),w=b[0],T=b[1];if(w&&T){var O=w.split(`
`),$=T.split(`
`);for(h=c=0;c<O.length&&!O[c].includes("DetermineComponentFrameRoot");)c++;for(;h<$.length&&!$[h].includes("DetermineComponentFrameRoot");)h++;if(c===O.length||h===$.length)for(c=O.length-1,h=$.length-1;1<=c&&0<=h&&O[c]!==$[h];)h--;for(;1<=c&&0<=h;c--,h--)if(O[c]!==$[h]){if(c!==1||h!==1)do if(c--,h--,0>h||O[c]!==$[h]){var W=`
`+O[c].replace(" at new "," at ");return n.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",n.displayName)),W}while(1<=c&&0<=h);break}}}finally{nd=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?Ka(s):""}function f3(n){switch(n.tag){case 26:case 27:case 5:return Ka(n.type);case 16:return Ka("Lazy");case 13:return Ka("Suspense");case 19:return Ka("SuspenseList");case 0:case 15:return id(n.type,!1);case 11:return id(n.type.render,!1);case 1:return id(n.type,!0);case 31:return Ka("Activity");default:return""}}function Ag(n){try{var r="";do r+=f3(n),n=n.return;while(n);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function pn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Cg(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function p3(n){var r=Cg(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,b=s.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(w){c=""+w,b.call(this,w)}}),Object.defineProperty(n,r,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function pl(n){n._valueTracker||(n._valueTracker=p3(n))}function Mg(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var s=r.getValue(),c="";return n&&(c=Cg(n)?n.checked?"true":"false":n.value),n=c,n!==s?(r.setValue(n),!0):!1}function hl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var h3=/[\n"\\]/g;function hn(n){return n.replace(h3,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function ad(n,r,s,c,h,b,w,T){n.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?n.type=w:n.removeAttribute("type"),r!=null?w==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+pn(r)):n.value!==""+pn(r)&&(n.value=""+pn(r)):w!=="submit"&&w!=="reset"||n.removeAttribute("value"),r!=null?rd(n,w,pn(r)):s!=null?rd(n,w,pn(s)):c!=null&&n.removeAttribute("value"),h==null&&b!=null&&(n.defaultChecked=!!b),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.name=""+pn(T):n.removeAttribute("name")}function zg(n,r,s,c,h,b,w,T){if(b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(n.type=b),r!=null||s!=null){if(!(b!=="submit"&&b!=="reset"||r!=null))return;s=s!=null?""+pn(s):"",r=r!=null?""+pn(r):s,T||r===n.value||(n.value=r),n.defaultValue=r}c=c??h,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=T?n.checked:!!c,n.defaultChecked=!!c,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(n.name=w)}function rd(n,r,s){r==="number"&&hl(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function Ya(n,r,s,c){if(n=n.options,r){r={};for(var h=0;h<s.length;h++)r["$"+s[h]]=!0;for(s=0;s<n.length;s++)h=r.hasOwnProperty("$"+n[s].value),n[s].selected!==h&&(n[s].selected=h),h&&c&&(n[s].defaultSelected=!0)}else{for(s=""+pn(s),r=null,h=0;h<n.length;h++){if(n[h].value===s){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function Rg(n,r,s){if(r!=null&&(r=""+pn(r),r!==n.value&&(n.value=r),s==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=s!=null?""+pn(s):""}function Og(n,r,s,c){if(r==null){if(c!=null){if(s!=null)throw Error(a(92));if(ue(c)){if(1<c.length)throw Error(a(93));c=c[0]}s=c}s==null&&(s=""),r=s}s=pn(r),n.defaultValue=s,c=n.textContent,c===s&&c!==""&&c!==null&&(n.value=c)}function Xa(n,r){if(r){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=r;return}}n.textContent=r}var m3=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lg(n,r,s){var c=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":c?n.setProperty(r,s):typeof s!="number"||s===0||m3.has(r)?r==="float"?n.cssFloat=s:n[r]=(""+s).trim():n[r]=s+"px"}function Dg(n,r,s){if(r!=null&&typeof r!="object")throw Error(a(62));if(n=n.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||r!=null&&r.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var h in r)c=r[h],r.hasOwnProperty(h)&&s[h]!==c&&Lg(n,h,c)}else for(var b in r)r.hasOwnProperty(b)&&Lg(n,b,r[b])}function sd(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var g3=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),b3=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ml(n){return b3.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var od=null;function ld(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Qa=null,Wa=null;function Pg(n){var r=$a(n);if(r&&(n=r.stateNode)){var s=n[Bt]||null;e:switch(n=r.stateNode,r.type){case"input":if(ad(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+hn(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var c=s[r];if(c!==n&&c.form===n.form){var h=c[Bt]||null;if(!h)throw Error(a(90));ad(c,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<s.length;r++)c=s[r],c.form===n.form&&Mg(c)}break e;case"textarea":Rg(n,s.value,s.defaultValue);break e;case"select":r=s.value,r!=null&&Ya(n,!!s.multiple,r,!1)}}}var cd=!1;function Ng(n,r,s){if(cd)return n(r,s);cd=!0;try{var c=n(r);return c}finally{if(cd=!1,(Qa!==null||Wa!==null)&&(ec(),Qa&&(r=Qa,n=Wa,Wa=Qa=null,Pg(r),n)))for(r=0;r<n.length;r++)Pg(n[r])}}function ms(n,r){var s=n.stateNode;if(s===null)return null;var c=s[Bt]||null;if(c===null)return null;s=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(a(231,r,typeof s));return s}var si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ud=!1;if(si)try{var gs={};Object.defineProperty(gs,"passive",{get:function(){ud=!0}}),window.addEventListener("test",gs,gs),window.removeEventListener("test",gs,gs)}catch{ud=!1}var Mi=null,dd=null,gl=null;function Vg(){if(gl)return gl;var n,r=dd,s=r.length,c,h="value"in Mi?Mi.value:Mi.textContent,b=h.length;for(n=0;n<s&&r[n]===h[n];n++);var w=s-n;for(c=1;c<=w&&r[s-c]===h[b-c];c++);return gl=h.slice(n,1<c?1-c:void 0)}function bl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function yl(){return!0}function Bg(){return!1}function _t(n){function r(s,c,h,b,w){this._reactName=s,this._targetInst=h,this.type=c,this.nativeEvent=b,this.target=w,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(s=n[T],this[T]=s?s(b):b[T]);return this.isDefaultPrevented=(b.defaultPrevented!=null?b.defaultPrevented:b.returnValue===!1)?yl:Bg,this.isPropagationStopped=Bg,this}return g(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),r}var ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=_t(ua),bs=g({},ua,{view:0,detail:0}),y3=_t(bs),fd,pd,ys,vl=g({},bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:md,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ys&&(ys&&n.type==="mousemove"?(fd=n.screenX-ys.screenX,pd=n.screenY-ys.screenY):pd=fd=0,ys=n),fd)},movementY:function(n){return"movementY"in n?n.movementY:pd}}),_g=_t(vl),x3=g({},vl,{dataTransfer:0}),v3=_t(x3),w3=g({},bs,{relatedTarget:0}),hd=_t(w3),S3=g({},ua,{animationName:0,elapsedTime:0,pseudoElement:0}),T3=_t(S3),j3=g({},ua,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),k3=_t(j3),E3=g({},ua,{data:0}),Hg=_t(E3),A3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z3(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=M3[n])?!!r[n]:!1}function md(){return z3}var R3=g({},bs,{key:function(n){if(n.key){var r=A3[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=bl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?C3[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:md,charCode:function(n){return n.type==="keypress"?bl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?bl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),O3=_t(R3),L3=g({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gg=_t(L3),D3=g({},bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:md}),P3=_t(D3),N3=g({},ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),V3=_t(N3),B3=g({},vl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),_3=_t(B3),H3=g({},ua,{newState:0,oldState:0}),G3=_t(H3),U3=[9,13,27,32],gd=si&&"CompositionEvent"in window,xs=null;si&&"documentMode"in document&&(xs=document.documentMode);var I3=si&&"TextEvent"in window&&!xs,Ug=si&&(!gd||xs&&8<xs&&11>=xs),Ig=" ",$g=!1;function qg(n,r){switch(n){case"keyup":return U3.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Za=!1;function $3(n,r){switch(n){case"compositionend":return Fg(r);case"keypress":return r.which!==32?null:($g=!0,Ig);case"textInput":return n=r.data,n===Ig&&$g?null:n;default:return null}}function q3(n,r){if(Za)return n==="compositionend"||!gd&&qg(n,r)?(n=Vg(),gl=dd=Mi=null,Za=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ug&&r.locale!=="ko"?null:r.data;default:return null}}var F3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kg(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!F3[n.type]:r==="textarea"}function Yg(n,r,s,c){Qa?Wa?Wa.push(c):Wa=[c]:Qa=c,r=sc(r,"onChange"),0<r.length&&(s=new xl("onChange","change",null,s,c),n.push({event:s,listeners:r}))}var vs=null,ws=null;function K3(n){C2(n,0)}function wl(n){var r=hs(n);if(Mg(r))return n}function Xg(n,r){if(n==="change")return r}var Qg=!1;if(si){var bd;if(si){var yd="oninput"in document;if(!yd){var Wg=document.createElement("div");Wg.setAttribute("oninput","return;"),yd=typeof Wg.oninput=="function"}bd=yd}else bd=!1;Qg=bd&&(!document.documentMode||9<document.documentMode)}function Zg(){vs&&(vs.detachEvent("onpropertychange",Jg),ws=vs=null)}function Jg(n){if(n.propertyName==="value"&&wl(ws)){var r=[];Yg(r,ws,n,ld(n)),Ng(K3,r)}}function Y3(n,r,s){n==="focusin"?(Zg(),vs=r,ws=s,vs.attachEvent("onpropertychange",Jg)):n==="focusout"&&Zg()}function X3(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return wl(ws)}function Q3(n,r){if(n==="click")return wl(r)}function W3(n,r){if(n==="input"||n==="change")return wl(r)}function Z3(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Zt=typeof Object.is=="function"?Object.is:Z3;function Ss(n,r){if(Zt(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var s=Object.keys(n),c=Object.keys(r);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var h=s[c];if(!fn.call(r,h)||!Zt(n[h],r[h]))return!1}return!0}function e0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function t0(n,r){var s=e0(n);n=0;for(var c;s;){if(s.nodeType===3){if(c=n+s.textContent.length,n<=r&&c>=r)return{node:s,offset:r-n};n=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=e0(s)}}function n0(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?n0(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function i0(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=hl(n.document);r instanceof n.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)n=r.contentWindow;else break;r=hl(n.document)}return r}function xd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var J3=si&&"documentMode"in document&&11>=document.documentMode,Ja=null,vd=null,Ts=null,wd=!1;function a0(n,r,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;wd||Ja==null||Ja!==hl(c)||(c=Ja,"selectionStart"in c&&xd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ts&&Ss(Ts,c)||(Ts=c,c=sc(vd,"onSelect"),0<c.length&&(r=new xl("onSelect","select",null,r,s),n.push({event:r,listeners:c}),r.target=Ja)))}function da(n,r){var s={};return s[n.toLowerCase()]=r.toLowerCase(),s["Webkit"+n]="webkit"+r,s["Moz"+n]="moz"+r,s}var er={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionrun:da("Transition","TransitionRun"),transitionstart:da("Transition","TransitionStart"),transitioncancel:da("Transition","TransitionCancel"),transitionend:da("Transition","TransitionEnd")},Sd={},r0={};si&&(r0=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function fa(n){if(Sd[n])return Sd[n];if(!er[n])return n;var r=er[n],s;for(s in r)if(r.hasOwnProperty(s)&&s in r0)return Sd[n]=r[s];return n}var s0=fa("animationend"),o0=fa("animationiteration"),l0=fa("animationstart"),e6=fa("transitionrun"),t6=fa("transitionstart"),n6=fa("transitioncancel"),c0=fa("transitionend"),u0=new Map,Td="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Td.push("scrollEnd");function En(n,r){u0.set(n,r),ca(r,[n])}var d0=new WeakMap;function mn(n,r){if(typeof n=="object"&&n!==null){var s=d0.get(n);return s!==void 0?s:(r={value:n,source:r,stack:Ag(r)},d0.set(n,r),r)}return{value:n,source:r,stack:Ag(r)}}var gn=[],tr=0,jd=0;function Sl(){for(var n=tr,r=jd=tr=0;r<n;){var s=gn[r];gn[r++]=null;var c=gn[r];gn[r++]=null;var h=gn[r];gn[r++]=null;var b=gn[r];if(gn[r++]=null,c!==null&&h!==null){var w=c.pending;w===null?h.next=h:(h.next=w.next,w.next=h),c.pending=h}b!==0&&f0(s,h,b)}}function Tl(n,r,s,c){gn[tr++]=n,gn[tr++]=r,gn[tr++]=s,gn[tr++]=c,jd|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function kd(n,r,s,c){return Tl(n,r,s,c),jl(n)}function nr(n,r){return Tl(n,null,null,r),jl(n)}function f0(n,r,s){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s);for(var h=!1,b=n.return;b!==null;)b.childLanes|=s,c=b.alternate,c!==null&&(c.childLanes|=s),b.tag===22&&(n=b.stateNode,n===null||n._visibility&1||(h=!0)),n=b,b=b.return;return n.tag===3?(b=n.stateNode,h&&r!==null&&(h=31-Wt(s),n=b.hiddenUpdates,c=n[h],c===null?n[h]=[r]:c.push(r),r.lane=s|536870912),b):null}function jl(n){if(50<Ys)throw Ys=0,Of=null,Error(a(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var ir={};function i6(n,r,s,c){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(n,r,s,c){return new i6(n,r,s,c)}function Ed(n){return n=n.prototype,!(!n||!n.isReactComponent)}function oi(n,r){var s=n.alternate;return s===null?(s=Jt(n.tag,r,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=r,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,r=n.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function p0(n,r){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,r=s.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function kl(n,r,s,c,h,b){var w=0;if(c=n,typeof n=="function")Ed(n)&&(w=1);else if(typeof n=="string")w=rS(n,s,se.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case G:return n=Jt(31,s,r,h),n.elementType=G,n.lanes=b,n;case S:return pa(s.children,h,b,r);case j:w=8,h|=24;break;case C:return n=Jt(12,s,r,h|2),n.elementType=C,n.lanes=b,n;case M:return n=Jt(13,s,r,h),n.elementType=M,n.lanes=b,n;case P:return n=Jt(19,s,r,h),n.elementType=P,n.lanes=b,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:case A:w=10;break e;case R:w=9;break e;case V:w=11;break e;case D:w=14;break e;case U:w=16,c=null;break e}w=29,s=Error(a(130,n===null?"null":typeof n,"")),c=null}return r=Jt(w,s,r,h),r.elementType=n,r.type=c,r.lanes=b,r}function pa(n,r,s,c){return n=Jt(7,n,c,r),n.lanes=s,n}function Ad(n,r,s){return n=Jt(6,n,null,r),n.lanes=s,n}function Cd(n,r,s){return r=Jt(4,n.children!==null?n.children:[],n.key,r),r.lanes=s,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var ar=[],rr=0,El=null,Al=0,bn=[],yn=0,ha=null,li=1,ci="";function ma(n,r){ar[rr++]=Al,ar[rr++]=El,El=n,Al=r}function h0(n,r,s){bn[yn++]=li,bn[yn++]=ci,bn[yn++]=ha,ha=n;var c=li;n=ci;var h=32-Wt(c)-1;c&=~(1<<h),s+=1;var b=32-Wt(r)+h;if(30<b){var w=h-h%5;b=(c&(1<<w)-1).toString(32),c>>=w,h-=w,li=1<<32-Wt(r)+h|s<<h|c,ci=b+n}else li=1<<b|s<<h|c,ci=n}function Md(n){n.return!==null&&(ma(n,1),h0(n,1,0))}function zd(n){for(;n===El;)El=ar[--rr],ar[rr]=null,Al=ar[--rr],ar[rr]=null;for(;n===ha;)ha=bn[--yn],bn[yn]=null,ci=bn[--yn],bn[yn]=null,li=bn[--yn],bn[yn]=null}var Nt=null,Ze=null,Me=!1,ga=null,_n=!1,Rd=Error(a(519));function ba(n){var r=Error(a(418,""));throw Es(mn(r,n)),Rd}function m0(n){var r=n.stateNode,s=n.type,c=n.memoizedProps;switch(r[Mt]=n,r[Bt]=c,s){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(s=0;s<Qs.length;s++)ke(Qs[s],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":ke("invalid",r),zg(r,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),pl(r);break;case"select":ke("invalid",r);break;case"textarea":ke("invalid",r),Og(r,c.value,c.defaultValue,c.children),pl(r)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||c.suppressHydrationWarning===!0||O2(r.textContent,s)?(c.popover!=null&&(ke("beforetoggle",r),ke("toggle",r)),c.onScroll!=null&&ke("scroll",r),c.onScrollEnd!=null&&ke("scrollend",r),c.onClick!=null&&(r.onclick=oc),r=!0):r=!1,r||ba(n)}function g0(n){for(Nt=n.return;Nt;)switch(Nt.tag){case 5:case 13:_n=!1;return;case 27:case 3:_n=!0;return;default:Nt=Nt.return}}function js(n){if(n!==Nt)return!1;if(!Me)return g0(n),Me=!0,!1;var r=n.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||Yf(n.type,n.memoizedProps)),s=!s),s&&Ze&&ba(n),g0(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(r===0){Ze=Cn(n.nextSibling);break e}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;n=n.nextSibling}Ze=null}}else r===27?(r=Ze,qi(n.type)?(n=Zf,Zf=null,Ze=n):Ze=r):Ze=Nt?Cn(n.stateNode.nextSibling):null;return!0}function ks(){Ze=Nt=null,Me=!1}function b0(){var n=ga;return n!==null&&(Ut===null?Ut=n:Ut.push.apply(Ut,n),ga=null),n}function Es(n){ga===null?ga=[n]:ga.push(n)}var Od=X(null),ya=null,ui=null;function zi(n,r,s){ie(Od,r._currentValue),r._currentValue=s}function di(n){n._currentValue=Od.current,te(Od)}function Ld(n,r,s){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===s)break;n=n.return}}function Dd(n,r,s,c){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var b=h.dependencies;if(b!==null){var w=h.child;b=b.firstContext;e:for(;b!==null;){var T=b;b=h;for(var O=0;O<r.length;O++)if(T.context===r[O]){b.lanes|=s,T=b.alternate,T!==null&&(T.lanes|=s),Ld(b.return,s,n),c||(w=null);break e}b=T.next}}else if(h.tag===18){if(w=h.return,w===null)throw Error(a(341));w.lanes|=s,b=w.alternate,b!==null&&(b.lanes|=s),Ld(w,s,n),w=null}else w=h.child;if(w!==null)w.return=h;else for(w=h;w!==null;){if(w===n){w=null;break}if(h=w.sibling,h!==null){h.return=w.return,w=h;break}w=w.return}h=w}}function As(n,r,s,c){n=null;for(var h=r,b=!1;h!==null;){if(!b){if((h.flags&524288)!==0)b=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var w=h.alternate;if(w===null)throw Error(a(387));if(w=w.memoizedProps,w!==null){var T=h.type;Zt(h.pendingProps.value,w.value)||(n!==null?n.push(T):n=[T])}}else if(h===pt.current){if(w=h.alternate,w===null)throw Error(a(387));w.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push(no):n=[no])}h=h.return}n!==null&&Dd(r,n,s,c),r.flags|=262144}function Cl(n){for(n=n.firstContext;n!==null;){if(!Zt(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function xa(n){ya=n,ui=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function zt(n){return y0(ya,n)}function Ml(n,r){return ya===null&&xa(n),y0(n,r)}function y0(n,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},ui===null){if(n===null)throw Error(a(308));ui=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else ui=ui.next=r;return s}var a6=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(s,c){n.push(c)}};this.abort=function(){r.aborted=!0,n.forEach(function(s){return s()})}},r6=e.unstable_scheduleCallback,s6=e.unstable_NormalPriority,ut={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pd(){return{controller:new a6,data:new Map,refCount:0}}function Cs(n){n.refCount--,n.refCount===0&&r6(s6,function(){n.controller.abort()})}var Ms=null,Nd=0,sr=0,or=null;function o6(n,r){if(Ms===null){var s=Ms=[];Nd=0,sr=_f(),or={status:"pending",value:void 0,then:function(c){s.push(c)}}}return Nd++,r.then(x0,x0),r}function x0(){if(--Nd===0&&Ms!==null){or!==null&&(or.status="fulfilled");var n=Ms;Ms=null,sr=0,or=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function l6(n,r){var s=[],c={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return n.then(function(){c.status="fulfilled",c.value=r;for(var h=0;h<s.length;h++)(0,s[h])(r)},function(h){for(c.status="rejected",c.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),c}var v0=H.S;H.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&o6(n,r),v0!==null&&v0(n,r)};var va=X(null);function Vd(){var n=va.current;return n!==null?n:qe.pooledCache}function zl(n,r){r===null?ie(va,va.current):ie(va,r.pool)}function w0(){var n=Vd();return n===null?null:{parent:ut._currentValue,pool:n}}var zs=Error(a(460)),S0=Error(a(474)),Rl=Error(a(542)),Bd={then:function(){}};function T0(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Ol(){}function j0(n,r,s){switch(s=n[s],s===void 0?n.push(r):s!==r&&(r.then(Ol,Ol),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,E0(n),n;default:if(typeof r.status=="string")r.then(Ol,Ol);else{if(n=qe,n!==null&&100<n.shellSuspendCounter)throw Error(a(482));n=r,n.status="pending",n.then(function(c){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=c}},function(c){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=c}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,E0(n),n}throw Rs=r,zs}}var Rs=null;function k0(){if(Rs===null)throw Error(a(459));var n=Rs;return Rs=null,n}function E0(n){if(n===zs||n===Rl)throw Error(a(483))}var Ri=!1;function _d(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hd(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Oi(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Li(n,r,s){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Pe&2)!==0){var h=c.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),c.pending=r,r=jl(n),f0(n,null,s),r}return Tl(n,c,r,s),jl(n)}function Os(n,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var c=r.lanes;c&=n.pendingLanes,s|=c,r.lanes=s,xg(n,s)}}function Gd(n,r){var s=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var h=null,b=null;if(s=s.firstBaseUpdate,s!==null){do{var w={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};b===null?h=b=w:b=b.next=w,s=s.next}while(s!==null);b===null?h=b=r:b=b.next=r}else h=b=r;s={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:b,shared:c.shared,callbacks:c.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=r:n.next=r,s.lastBaseUpdate=r}var Ud=!1;function Ls(){if(Ud){var n=or;if(n!==null)throw n}}function Ds(n,r,s,c){Ud=!1;var h=n.updateQueue;Ri=!1;var b=h.firstBaseUpdate,w=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var O=T,$=O.next;O.next=null,w===null?b=$:w.next=$,w=O;var W=n.alternate;W!==null&&(W=W.updateQueue,T=W.lastBaseUpdate,T!==w&&(T===null?W.firstBaseUpdate=$:T.next=$,W.lastBaseUpdate=O))}if(b!==null){var ee=h.baseState;w=0,W=$=O=null,T=b;do{var F=T.lane&-536870913,K=F!==T.lane;if(K?(Ee&F)===F:(c&F)===F){F!==0&&F===sr&&(Ud=!0),W!==null&&(W=W.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var he=n,fe=T;F=r;var Ge=s;switch(fe.tag){case 1:if(he=fe.payload,typeof he=="function"){ee=he.call(Ge,ee,F);break e}ee=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=fe.payload,F=typeof he=="function"?he.call(Ge,ee,F):he,F==null)break e;ee=g({},ee,F);break e;case 2:Ri=!0}}F=T.callback,F!==null&&(n.flags|=64,K&&(n.flags|=8192),K=h.callbacks,K===null?h.callbacks=[F]:K.push(F))}else K={lane:F,tag:T.tag,payload:T.payload,callback:T.callback,next:null},W===null?($=W=K,O=ee):W=W.next=K,w|=F;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;K=T,T=K.next,K.next=null,h.lastBaseUpdate=K,h.shared.pending=null}}while(!0);W===null&&(O=ee),h.baseState=O,h.firstBaseUpdate=$,h.lastBaseUpdate=W,b===null&&(h.shared.lanes=0),Gi|=w,n.lanes=w,n.memoizedState=ee}}function A0(n,r){if(typeof n!="function")throw Error(a(191,n));n.call(r)}function C0(n,r){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)A0(s[n],r)}var lr=X(null),Ll=X(0);function M0(n,r){n=yi,ie(Ll,n),ie(lr,r),yi=n|r.baseLanes}function Id(){ie(Ll,yi),ie(lr,lr.current)}function $d(){yi=Ll.current,te(lr),te(Ll)}var Di=0,Se=null,_e=null,at=null,Dl=!1,cr=!1,wa=!1,Pl=0,Ps=0,ur=null,c6=0;function tt(){throw Error(a(321))}function qd(n,r){if(r===null)return!1;for(var s=0;s<r.length&&s<n.length;s++)if(!Zt(n[s],r[s]))return!1;return!0}function Fd(n,r,s,c,h,b){return Di=b,Se=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,H.H=n===null||n.memoizedState===null?f1:p1,wa=!1,b=s(c,h),wa=!1,cr&&(b=R0(r,s,c,h)),z0(n),b}function z0(n){H.H=Gl;var r=_e!==null&&_e.next!==null;if(Di=0,at=_e=Se=null,Dl=!1,Ps=0,ur=null,r)throw Error(a(300));n===null||mt||(n=n.dependencies,n!==null&&Cl(n)&&(mt=!0))}function R0(n,r,s,c){Se=n;var h=0;do{if(cr&&(ur=null),Ps=0,cr=!1,25<=h)throw Error(a(301));if(h+=1,at=_e=null,n.updateQueue!=null){var b=n.updateQueue;b.lastEffect=null,b.events=null,b.stores=null,b.memoCache!=null&&(b.memoCache.index=0)}H.H=g6,b=r(s,c)}while(cr);return b}function u6(){var n=H.H,r=n.useState()[0];return r=typeof r.then=="function"?Ns(r):r,n=n.useState()[0],(_e!==null?_e.memoizedState:null)!==n&&(Se.flags|=1024),r}function Kd(){var n=Pl!==0;return Pl=0,n}function Yd(n,r,s){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~s}function Xd(n){if(Dl){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Dl=!1}Di=0,at=_e=Se=null,cr=!1,Ps=Pl=0,ur=null}function Ht(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?Se.memoizedState=at=n:at=at.next=n,at}function rt(){if(_e===null){var n=Se.alternate;n=n!==null?n.memoizedState:null}else n=_e.next;var r=at===null?Se.memoizedState:at.next;if(r!==null)at=r,_e=n;else{if(n===null)throw Se.alternate===null?Error(a(467)):Error(a(310));_e=n,n={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},at===null?Se.memoizedState=at=n:at=at.next=n}return at}function Qd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ns(n){var r=Ps;return Ps+=1,ur===null&&(ur=[]),n=j0(ur,n,r),r=Se,(at===null?r.memoizedState:at.next)===null&&(r=r.alternate,H.H=r===null||r.memoizedState===null?f1:p1),n}function Nl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Ns(n);if(n.$$typeof===A)return zt(n)}throw Error(a(438,String(n)))}function Wd(n){var r=null,s=Se.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var c=Se.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(r={data:c.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=Qd(),Se.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(n),c=0;c<n;c++)s[c]=Y;return r.index++,s}function fi(n,r){return typeof r=="function"?r(n):r}function Vl(n){var r=rt();return Zd(r,_e,n)}function Zd(n,r,s){var c=n.queue;if(c===null)throw Error(a(311));c.lastRenderedReducer=s;var h=n.baseQueue,b=c.pending;if(b!==null){if(h!==null){var w=h.next;h.next=b.next,b.next=w}r.baseQueue=h=b,c.pending=null}if(b=n.baseState,h===null)n.memoizedState=b;else{r=h.next;var T=w=null,O=null,$=r,W=!1;do{var ee=$.lane&-536870913;if(ee!==$.lane?(Ee&ee)===ee:(Di&ee)===ee){var F=$.revertLane;if(F===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ee===sr&&(W=!0);else if((Di&F)===F){$=$.next,F===sr&&(W=!0);continue}else ee={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},O===null?(T=O=ee,w=b):O=O.next=ee,Se.lanes|=F,Gi|=F;ee=$.action,wa&&s(b,ee),b=$.hasEagerState?$.eagerState:s(b,ee)}else F={lane:ee,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},O===null?(T=O=F,w=b):O=O.next=F,Se.lanes|=ee,Gi|=ee;$=$.next}while($!==null&&$!==r);if(O===null?w=b:O.next=T,!Zt(b,n.memoizedState)&&(mt=!0,W&&(s=or,s!==null)))throw s;n.memoizedState=b,n.baseState=w,n.baseQueue=O,c.lastRenderedState=b}return h===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function Jd(n){var r=rt(),s=r.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=n;var c=s.dispatch,h=s.pending,b=r.memoizedState;if(h!==null){s.pending=null;var w=h=h.next;do b=n(b,w.action),w=w.next;while(w!==h);Zt(b,r.memoizedState)||(mt=!0),r.memoizedState=b,r.baseQueue===null&&(r.baseState=b),s.lastRenderedState=b}return[b,c]}function O0(n,r,s){var c=Se,h=rt(),b=Me;if(b){if(s===void 0)throw Error(a(407));s=s()}else s=r();var w=!Zt((_e||h).memoizedState,s);w&&(h.memoizedState=s,mt=!0),h=h.queue;var T=P0.bind(null,c,h,n);if(Vs(2048,8,T,[n]),h.getSnapshot!==r||w||at!==null&&at.memoizedState.tag&1){if(c.flags|=2048,dr(9,Bl(),D0.bind(null,c,h,s,r),null),qe===null)throw Error(a(349));b||(Di&124)!==0||L0(c,r,s)}return s}function L0(n,r,s){n.flags|=16384,n={getSnapshot:r,value:s},r=Se.updateQueue,r===null?(r=Qd(),Se.updateQueue=r,r.stores=[n]):(s=r.stores,s===null?r.stores=[n]:s.push(n))}function D0(n,r,s,c){r.value=s,r.getSnapshot=c,N0(r)&&V0(n)}function P0(n,r,s){return s(function(){N0(r)&&V0(n)})}function N0(n){var r=n.getSnapshot;n=n.value;try{var s=r();return!Zt(n,s)}catch{return!0}}function V0(n){var r=nr(n,2);r!==null&&rn(r,n,2)}function ef(n){var r=Ht();if(typeof n=="function"){var s=n;if(n=s(),wa){Ai(!0);try{s()}finally{Ai(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fi,lastRenderedState:n},r}function B0(n,r,s,c){return n.baseState=s,Zd(n,_e,typeof c=="function"?c:fi)}function d6(n,r,s,c,h){if(Hl(n))throw Error(a(485));if(n=r.action,n!==null){var b={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){b.listeners.push(w)}};H.T!==null?s(!0):b.isTransition=!1,c(b),s=r.pending,s===null?(b.next=r.pending=b,_0(r,b)):(b.next=s.next,r.pending=s.next=b)}}function _0(n,r){var s=r.action,c=r.payload,h=n.state;if(r.isTransition){var b=H.T,w={};H.T=w;try{var T=s(h,c),O=H.S;O!==null&&O(w,T),H0(n,r,T)}catch($){tf(n,r,$)}finally{H.T=b}}else try{b=s(h,c),H0(n,r,b)}catch($){tf(n,r,$)}}function H0(n,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){G0(n,r,c)},function(c){return tf(n,r,c)}):G0(n,r,s)}function G0(n,r,s){r.status="fulfilled",r.value=s,U0(r),n.state=s,r=n.pending,r!==null&&(s=r.next,s===r?n.pending=null:(s=s.next,r.next=s,_0(n,s)))}function tf(n,r,s){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do r.status="rejected",r.reason=s,U0(r),r=r.next;while(r!==c)}n.action=null}function U0(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function I0(n,r){return r}function $0(n,r){if(Me){var s=qe.formState;if(s!==null){e:{var c=Se;if(Me){if(Ze){t:{for(var h=Ze,b=_n;h.nodeType!==8;){if(!b){h=null;break t}if(h=Cn(h.nextSibling),h===null){h=null;break t}}b=h.data,h=b==="F!"||b==="F"?h:null}if(h){Ze=Cn(h.nextSibling),c=h.data==="F!";break e}}ba(c)}c=!1}c&&(r=s[0])}}return s=Ht(),s.memoizedState=s.baseState=r,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:I0,lastRenderedState:r},s.queue=c,s=c1.bind(null,Se,c),c.dispatch=s,c=ef(!1),b=of.bind(null,Se,!1,c.queue),c=Ht(),h={state:r,dispatch:null,action:n,pending:null},c.queue=h,s=d6.bind(null,Se,h,b,s),h.dispatch=s,c.memoizedState=n,[r,s,!1]}function q0(n){var r=rt();return F0(r,_e,n)}function F0(n,r,s){if(r=Zd(n,r,I0)[0],n=Vl(fi)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var c=Ns(r)}catch(w){throw w===zs?Rl:w}else c=r;r=rt();var h=r.queue,b=h.dispatch;return s!==r.memoizedState&&(Se.flags|=2048,dr(9,Bl(),f6.bind(null,h,s),null)),[c,b,n]}function f6(n,r){n.action=r}function K0(n){var r=rt(),s=_e;if(s!==null)return F0(r,s,n);rt(),r=r.memoizedState,s=rt();var c=s.queue.dispatch;return s.memoizedState=n,[r,c,!1]}function dr(n,r,s,c){return n={tag:n,create:s,deps:c,inst:r,next:null},r=Se.updateQueue,r===null&&(r=Qd(),Se.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=n.next=n:(c=s.next,s.next=n,n.next=c,r.lastEffect=n),n}function Bl(){return{destroy:void 0,resource:void 0}}function Y0(){return rt().memoizedState}function _l(n,r,s,c){var h=Ht();c=c===void 0?null:c,Se.flags|=n,h.memoizedState=dr(1|r,Bl(),s,c)}function Vs(n,r,s,c){var h=rt();c=c===void 0?null:c;var b=h.memoizedState.inst;_e!==null&&c!==null&&qd(c,_e.memoizedState.deps)?h.memoizedState=dr(r,b,s,c):(Se.flags|=n,h.memoizedState=dr(1|r,b,s,c))}function X0(n,r){_l(8390656,8,n,r)}function Q0(n,r){Vs(2048,8,n,r)}function W0(n,r){return Vs(4,2,n,r)}function Z0(n,r){return Vs(4,4,n,r)}function J0(n,r){if(typeof r=="function"){n=n();var s=r(n);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function e1(n,r,s){s=s!=null?s.concat([n]):null,Vs(4,4,J0.bind(null,r,n),s)}function nf(){}function t1(n,r){var s=rt();r=r===void 0?null:r;var c=s.memoizedState;return r!==null&&qd(r,c[1])?c[0]:(s.memoizedState=[n,r],n)}function n1(n,r){var s=rt();r=r===void 0?null:r;var c=s.memoizedState;if(r!==null&&qd(r,c[1]))return c[0];if(c=n(),wa){Ai(!0);try{n()}finally{Ai(!1)}}return s.memoizedState=[c,r],c}function af(n,r,s){return s===void 0||(Di&1073741824)!==0?n.memoizedState=r:(n.memoizedState=s,n=r2(),Se.lanes|=n,Gi|=n,s)}function i1(n,r,s,c){return Zt(s,r)?s:lr.current!==null?(n=af(n,s,c),Zt(n,r)||(mt=!0),n):(Di&42)===0?(mt=!0,n.memoizedState=s):(n=r2(),Se.lanes|=n,Gi|=n,r)}function a1(n,r,s,c,h){var b=L.p;L.p=b!==0&&8>b?b:8;var w=H.T,T={};H.T=T,of(n,!1,r,s);try{var O=h(),$=H.S;if($!==null&&$(T,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var W=l6(O,c);Bs(n,r,W,an(n))}else Bs(n,r,c,an(n))}catch(ee){Bs(n,r,{then:function(){},status:"rejected",reason:ee},an())}finally{L.p=b,H.T=w}}function p6(){}function rf(n,r,s,c){if(n.tag!==5)throw Error(a(476));var h=r1(n).queue;a1(n,h,r,B,s===null?p6:function(){return s1(n),s(c)})}function r1(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fi,lastRenderedState:B},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fi,lastRenderedState:s},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function s1(n){var r=r1(n).next.queue;Bs(n,r,{},an())}function sf(){return zt(no)}function o1(){return rt().memoizedState}function l1(){return rt().memoizedState}function h6(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var s=an();n=Oi(s);var c=Li(r,n,s);c!==null&&(rn(c,r,s),Os(c,r,s)),r={cache:Pd()},n.payload=r;return}r=r.return}}function m6(n,r,s){var c=an();s={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Hl(n)?u1(r,s):(s=kd(n,r,s,c),s!==null&&(rn(s,n,c),d1(s,r,c)))}function c1(n,r,s){var c=an();Bs(n,r,s,c)}function Bs(n,r,s,c){var h={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Hl(n))u1(r,h);else{var b=n.alternate;if(n.lanes===0&&(b===null||b.lanes===0)&&(b=r.lastRenderedReducer,b!==null))try{var w=r.lastRenderedState,T=b(w,s);if(h.hasEagerState=!0,h.eagerState=T,Zt(T,w))return Tl(n,r,h,0),qe===null&&Sl(),!1}catch{}finally{}if(s=kd(n,r,h,c),s!==null)return rn(s,n,c),d1(s,r,c),!0}return!1}function of(n,r,s,c){if(c={lane:2,revertLane:_f(),action:c,hasEagerState:!1,eagerState:null,next:null},Hl(n)){if(r)throw Error(a(479))}else r=kd(n,s,c,2),r!==null&&rn(r,n,2)}function Hl(n){var r=n.alternate;return n===Se||r!==null&&r===Se}function u1(n,r){cr=Dl=!0;var s=n.pending;s===null?r.next=r:(r.next=s.next,s.next=r),n.pending=r}function d1(n,r,s){if((s&4194048)!==0){var c=r.lanes;c&=n.pendingLanes,s|=c,r.lanes=s,xg(n,s)}}var Gl={readContext:zt,use:Nl,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useLayoutEffect:tt,useInsertionEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useSyncExternalStore:tt,useId:tt,useHostTransitionStatus:tt,useFormState:tt,useActionState:tt,useOptimistic:tt,useMemoCache:tt,useCacheRefresh:tt},f1={readContext:zt,use:Nl,useCallback:function(n,r){return Ht().memoizedState=[n,r===void 0?null:r],n},useContext:zt,useEffect:X0,useImperativeHandle:function(n,r,s){s=s!=null?s.concat([n]):null,_l(4194308,4,J0.bind(null,r,n),s)},useLayoutEffect:function(n,r){return _l(4194308,4,n,r)},useInsertionEffect:function(n,r){_l(4,2,n,r)},useMemo:function(n,r){var s=Ht();r=r===void 0?null:r;var c=n();if(wa){Ai(!0);try{n()}finally{Ai(!1)}}return s.memoizedState=[c,r],c},useReducer:function(n,r,s){var c=Ht();if(s!==void 0){var h=s(r);if(wa){Ai(!0);try{s(r)}finally{Ai(!1)}}}else h=r;return c.memoizedState=c.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},c.queue=n,n=n.dispatch=m6.bind(null,Se,n),[c.memoizedState,n]},useRef:function(n){var r=Ht();return n={current:n},r.memoizedState=n},useState:function(n){n=ef(n);var r=n.queue,s=c1.bind(null,Se,r);return r.dispatch=s,[n.memoizedState,s]},useDebugValue:nf,useDeferredValue:function(n,r){var s=Ht();return af(s,n,r)},useTransition:function(){var n=ef(!1);return n=a1.bind(null,Se,n.queue,!0,!1),Ht().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,s){var c=Se,h=Ht();if(Me){if(s===void 0)throw Error(a(407));s=s()}else{if(s=r(),qe===null)throw Error(a(349));(Ee&124)!==0||L0(c,r,s)}h.memoizedState=s;var b={value:s,getSnapshot:r};return h.queue=b,X0(P0.bind(null,c,b,n),[n]),c.flags|=2048,dr(9,Bl(),D0.bind(null,c,b,s,r),null),s},useId:function(){var n=Ht(),r=qe.identifierPrefix;if(Me){var s=ci,c=li;s=(c&~(1<<32-Wt(c)-1)).toString(32)+s,r="«"+r+"R"+s,s=Pl++,0<s&&(r+="H"+s.toString(32)),r+="»"}else s=c6++,r="«"+r+"r"+s.toString(32)+"»";return n.memoizedState=r},useHostTransitionStatus:sf,useFormState:$0,useActionState:$0,useOptimistic:function(n){var r=Ht();r.memoizedState=r.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=of.bind(null,Se,!0,s),s.dispatch=r,[n,r]},useMemoCache:Wd,useCacheRefresh:function(){return Ht().memoizedState=h6.bind(null,Se)}},p1={readContext:zt,use:Nl,useCallback:t1,useContext:zt,useEffect:Q0,useImperativeHandle:e1,useInsertionEffect:W0,useLayoutEffect:Z0,useMemo:n1,useReducer:Vl,useRef:Y0,useState:function(){return Vl(fi)},useDebugValue:nf,useDeferredValue:function(n,r){var s=rt();return i1(s,_e.memoizedState,n,r)},useTransition:function(){var n=Vl(fi)[0],r=rt().memoizedState;return[typeof n=="boolean"?n:Ns(n),r]},useSyncExternalStore:O0,useId:o1,useHostTransitionStatus:sf,useFormState:q0,useActionState:q0,useOptimistic:function(n,r){var s=rt();return B0(s,_e,n,r)},useMemoCache:Wd,useCacheRefresh:l1},g6={readContext:zt,use:Nl,useCallback:t1,useContext:zt,useEffect:Q0,useImperativeHandle:e1,useInsertionEffect:W0,useLayoutEffect:Z0,useMemo:n1,useReducer:Jd,useRef:Y0,useState:function(){return Jd(fi)},useDebugValue:nf,useDeferredValue:function(n,r){var s=rt();return _e===null?af(s,n,r):i1(s,_e.memoizedState,n,r)},useTransition:function(){var n=Jd(fi)[0],r=rt().memoizedState;return[typeof n=="boolean"?n:Ns(n),r]},useSyncExternalStore:O0,useId:o1,useHostTransitionStatus:sf,useFormState:K0,useActionState:K0,useOptimistic:function(n,r){var s=rt();return _e!==null?B0(s,_e,n,r):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:Wd,useCacheRefresh:l1},fr=null,_s=0;function Ul(n){var r=_s;return _s+=1,fr===null&&(fr=[]),j0(fr,n,r)}function Hs(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function Il(n,r){throw r.$$typeof===y?Error(a(525)):(n=Object.prototype.toString.call(r),Error(a(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function h1(n){var r=n._init;return r(n._payload)}function m1(n){function r(_,N){if(n){var I=_.deletions;I===null?(_.deletions=[N],_.flags|=16):I.push(N)}}function s(_,N){if(!n)return null;for(;N!==null;)r(_,N),N=N.sibling;return null}function c(_){for(var N=new Map;_!==null;)_.key!==null?N.set(_.key,_):N.set(_.index,_),_=_.sibling;return N}function h(_,N){return _=oi(_,N),_.index=0,_.sibling=null,_}function b(_,N,I){return _.index=I,n?(I=_.alternate,I!==null?(I=I.index,I<N?(_.flags|=67108866,N):I):(_.flags|=67108866,N)):(_.flags|=1048576,N)}function w(_){return n&&_.alternate===null&&(_.flags|=67108866),_}function T(_,N,I,J){return N===null||N.tag!==6?(N=Ad(I,_.mode,J),N.return=_,N):(N=h(N,I),N.return=_,N)}function O(_,N,I,J){var re=I.type;return re===S?W(_,N,I.props.children,J,I.key):N!==null&&(N.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===U&&h1(re)===N.type)?(N=h(N,I.props),Hs(N,I),N.return=_,N):(N=kl(I.type,I.key,I.props,null,_.mode,J),Hs(N,I),N.return=_,N)}function $(_,N,I,J){return N===null||N.tag!==4||N.stateNode.containerInfo!==I.containerInfo||N.stateNode.implementation!==I.implementation?(N=Cd(I,_.mode,J),N.return=_,N):(N=h(N,I.children||[]),N.return=_,N)}function W(_,N,I,J,re){return N===null||N.tag!==7?(N=pa(I,_.mode,J,re),N.return=_,N):(N=h(N,I),N.return=_,N)}function ee(_,N,I){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=Ad(""+N,_.mode,I),N.return=_,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case x:return I=kl(N.type,N.key,N.props,null,_.mode,I),Hs(I,N),I.return=_,I;case v:return N=Cd(N,_.mode,I),N.return=_,N;case U:var J=N._init;return N=J(N._payload),ee(_,N,I)}if(ue(N)||ne(N))return N=pa(N,_.mode,I,null),N.return=_,N;if(typeof N.then=="function")return ee(_,Ul(N),I);if(N.$$typeof===A)return ee(_,Ml(_,N),I);Il(_,N)}return null}function F(_,N,I,J){var re=N!==null?N.key:null;if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return re!==null?null:T(_,N,""+I,J);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case x:return I.key===re?O(_,N,I,J):null;case v:return I.key===re?$(_,N,I,J):null;case U:return re=I._init,I=re(I._payload),F(_,N,I,J)}if(ue(I)||ne(I))return re!==null?null:W(_,N,I,J,null);if(typeof I.then=="function")return F(_,N,Ul(I),J);if(I.$$typeof===A)return F(_,N,Ml(_,I),J);Il(_,I)}return null}function K(_,N,I,J,re){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return _=_.get(I)||null,T(N,_,""+J,re);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case x:return _=_.get(J.key===null?I:J.key)||null,O(N,_,J,re);case v:return _=_.get(J.key===null?I:J.key)||null,$(N,_,J,re);case U:var Te=J._init;return J=Te(J._payload),K(_,N,I,J,re)}if(ue(J)||ne(J))return _=_.get(I)||null,W(N,_,J,re,null);if(typeof J.then=="function")return K(_,N,I,Ul(J),re);if(J.$$typeof===A)return K(_,N,I,Ml(N,J),re);Il(N,J)}return null}function he(_,N,I,J){for(var re=null,Te=null,oe=N,pe=N=0,bt=null;oe!==null&&pe<I.length;pe++){oe.index>pe?(bt=oe,oe=null):bt=oe.sibling;var Ce=F(_,oe,I[pe],J);if(Ce===null){oe===null&&(oe=bt);break}n&&oe&&Ce.alternate===null&&r(_,oe),N=b(Ce,N,pe),Te===null?re=Ce:Te.sibling=Ce,Te=Ce,oe=bt}if(pe===I.length)return s(_,oe),Me&&ma(_,pe),re;if(oe===null){for(;pe<I.length;pe++)oe=ee(_,I[pe],J),oe!==null&&(N=b(oe,N,pe),Te===null?re=oe:Te.sibling=oe,Te=oe);return Me&&ma(_,pe),re}for(oe=c(oe);pe<I.length;pe++)bt=K(oe,_,pe,I[pe],J),bt!==null&&(n&&bt.alternate!==null&&oe.delete(bt.key===null?pe:bt.key),N=b(bt,N,pe),Te===null?re=bt:Te.sibling=bt,Te=bt);return n&&oe.forEach(function(Qi){return r(_,Qi)}),Me&&ma(_,pe),re}function fe(_,N,I,J){if(I==null)throw Error(a(151));for(var re=null,Te=null,oe=N,pe=N=0,bt=null,Ce=I.next();oe!==null&&!Ce.done;pe++,Ce=I.next()){oe.index>pe?(bt=oe,oe=null):bt=oe.sibling;var Qi=F(_,oe,Ce.value,J);if(Qi===null){oe===null&&(oe=bt);break}n&&oe&&Qi.alternate===null&&r(_,oe),N=b(Qi,N,pe),Te===null?re=Qi:Te.sibling=Qi,Te=Qi,oe=bt}if(Ce.done)return s(_,oe),Me&&ma(_,pe),re;if(oe===null){for(;!Ce.done;pe++,Ce=I.next())Ce=ee(_,Ce.value,J),Ce!==null&&(N=b(Ce,N,pe),Te===null?re=Ce:Te.sibling=Ce,Te=Ce);return Me&&ma(_,pe),re}for(oe=c(oe);!Ce.done;pe++,Ce=I.next())Ce=K(oe,_,pe,Ce.value,J),Ce!==null&&(n&&Ce.alternate!==null&&oe.delete(Ce.key===null?pe:Ce.key),N=b(Ce,N,pe),Te===null?re=Ce:Te.sibling=Ce,Te=Ce);return n&&oe.forEach(function(bS){return r(_,bS)}),Me&&ma(_,pe),re}function Ge(_,N,I,J){if(typeof I=="object"&&I!==null&&I.type===S&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case x:e:{for(var re=I.key;N!==null;){if(N.key===re){if(re=I.type,re===S){if(N.tag===7){s(_,N.sibling),J=h(N,I.props.children),J.return=_,_=J;break e}}else if(N.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===U&&h1(re)===N.type){s(_,N.sibling),J=h(N,I.props),Hs(J,I),J.return=_,_=J;break e}s(_,N);break}else r(_,N);N=N.sibling}I.type===S?(J=pa(I.props.children,_.mode,J,I.key),J.return=_,_=J):(J=kl(I.type,I.key,I.props,null,_.mode,J),Hs(J,I),J.return=_,_=J)}return w(_);case v:e:{for(re=I.key;N!==null;){if(N.key===re)if(N.tag===4&&N.stateNode.containerInfo===I.containerInfo&&N.stateNode.implementation===I.implementation){s(_,N.sibling),J=h(N,I.children||[]),J.return=_,_=J;break e}else{s(_,N);break}else r(_,N);N=N.sibling}J=Cd(I,_.mode,J),J.return=_,_=J}return w(_);case U:return re=I._init,I=re(I._payload),Ge(_,N,I,J)}if(ue(I))return he(_,N,I,J);if(ne(I)){if(re=ne(I),typeof re!="function")throw Error(a(150));return I=re.call(I),fe(_,N,I,J)}if(typeof I.then=="function")return Ge(_,N,Ul(I),J);if(I.$$typeof===A)return Ge(_,N,Ml(_,I),J);Il(_,I)}return typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint"?(I=""+I,N!==null&&N.tag===6?(s(_,N.sibling),J=h(N,I),J.return=_,_=J):(s(_,N),J=Ad(I,_.mode,J),J.return=_,_=J),w(_)):s(_,N)}return function(_,N,I,J){try{_s=0;var re=Ge(_,N,I,J);return fr=null,re}catch(oe){if(oe===zs||oe===Rl)throw oe;var Te=Jt(29,oe,null,_.mode);return Te.lanes=J,Te.return=_,Te}finally{}}}var pr=m1(!0),g1=m1(!1),xn=X(null),Hn=null;function Pi(n){var r=n.alternate;ie(dt,dt.current&1),ie(xn,n),Hn===null&&(r===null||lr.current!==null||r.memoizedState!==null)&&(Hn=n)}function b1(n){if(n.tag===22){if(ie(dt,dt.current),ie(xn,n),Hn===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(Hn=n)}}else Ni()}function Ni(){ie(dt,dt.current),ie(xn,xn.current)}function pi(n){te(xn),Hn===n&&(Hn=null),te(dt)}var dt=X(0);function $l(n){for(var r=n;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Wf(s)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function lf(n,r,s,c){r=n.memoizedState,s=s(c,r),s=s==null?r:g({},r,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var cf={enqueueSetState:function(n,r,s){n=n._reactInternals;var c=an(),h=Oi(c);h.payload=r,s!=null&&(h.callback=s),r=Li(n,h,c),r!==null&&(rn(r,n,c),Os(r,n,c))},enqueueReplaceState:function(n,r,s){n=n._reactInternals;var c=an(),h=Oi(c);h.tag=1,h.payload=r,s!=null&&(h.callback=s),r=Li(n,h,c),r!==null&&(rn(r,n,c),Os(r,n,c))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var s=an(),c=Oi(s);c.tag=2,r!=null&&(c.callback=r),r=Li(n,c,s),r!==null&&(rn(r,n,s),Os(r,n,s))}};function y1(n,r,s,c,h,b,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,b,w):r.prototype&&r.prototype.isPureReactComponent?!Ss(s,c)||!Ss(h,b):!0}function x1(n,r,s,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,c),r.state!==n&&cf.enqueueReplaceState(r,r.state,null)}function Sa(n,r){var s=r;if("ref"in r){s={};for(var c in r)c!=="ref"&&(s[c]=r[c])}if(n=n.defaultProps){s===r&&(s=g({},s));for(var h in n)s[h]===void 0&&(s[h]=n[h])}return s}var ql=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function v1(n){ql(n)}function w1(n){console.error(n)}function S1(n){ql(n)}function Fl(n,r){try{var s=n.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(c){setTimeout(function(){throw c})}}function T1(n,r,s){try{var c=n.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function uf(n,r,s){return s=Oi(s),s.tag=3,s.payload={element:null},s.callback=function(){Fl(n,r)},s}function j1(n){return n=Oi(n),n.tag=3,n}function k1(n,r,s,c){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var b=c.value;n.payload=function(){return h(b)},n.callback=function(){T1(r,s,c)}}var w=s.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(n.callback=function(){T1(r,s,c),typeof h!="function"&&(Ui===null?Ui=new Set([this]):Ui.add(this));var T=c.stack;this.componentDidCatch(c.value,{componentStack:T!==null?T:""})})}function b6(n,r,s,c,h){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(r=s.alternate,r!==null&&As(r,s,h,!0),s=xn.current,s!==null){switch(s.tag){case 13:return Hn===null?Df():s.alternate===null&&Je===0&&(Je=3),s.flags&=-257,s.flags|=65536,s.lanes=h,c===Bd?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([c]):r.add(c),Nf(n,c,h)),!1;case 22:return s.flags|=65536,c===Bd?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([c]):s.add(c)),Nf(n,c,h)),!1}throw Error(a(435,s.tag))}return Nf(n,c,h),Df(),!1}if(Me)return r=xn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,c!==Rd&&(n=Error(a(422),{cause:c}),Es(mn(n,s)))):(c!==Rd&&(r=Error(a(423),{cause:c}),Es(mn(r,s))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,c=mn(c,s),h=uf(n.stateNode,c,h),Gd(n,h),Je!==4&&(Je=2)),!1;var b=Error(a(520),{cause:c});if(b=mn(b,s),Ks===null?Ks=[b]:Ks.push(b),Je!==4&&(Je=2),r===null)return!0;c=mn(c,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,n=h&-h,s.lanes|=n,n=uf(s.stateNode,c,n),Gd(s,n),!1;case 1:if(r=s.type,b=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Ui===null||!Ui.has(b))))return s.flags|=65536,h&=-h,s.lanes|=h,h=j1(h),k1(h,n,s,c),Gd(s,h),!1}s=s.return}while(s!==null);return!1}var E1=Error(a(461)),mt=!1;function St(n,r,s,c){r.child=n===null?g1(r,null,s,c):pr(r,n.child,s,c)}function A1(n,r,s,c,h){s=s.render;var b=r.ref;if("ref"in c){var w={};for(var T in c)T!=="ref"&&(w[T]=c[T])}else w=c;return xa(r),c=Fd(n,r,s,w,b,h),T=Kd(),n!==null&&!mt?(Yd(n,r,h),hi(n,r,h)):(Me&&T&&Md(r),r.flags|=1,St(n,r,c,h),r.child)}function C1(n,r,s,c,h){if(n===null){var b=s.type;return typeof b=="function"&&!Ed(b)&&b.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=b,M1(n,r,b,c,h)):(n=kl(s.type,null,c,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(b=n.child,!yf(n,h)){var w=b.memoizedProps;if(s=s.compare,s=s!==null?s:Ss,s(w,c)&&n.ref===r.ref)return hi(n,r,h)}return r.flags|=1,n=oi(b,c),n.ref=r.ref,n.return=r,r.child=n}function M1(n,r,s,c,h){if(n!==null){var b=n.memoizedProps;if(Ss(b,c)&&n.ref===r.ref)if(mt=!1,r.pendingProps=c=b,yf(n,h))(n.flags&131072)!==0&&(mt=!0);else return r.lanes=n.lanes,hi(n,r,h)}return df(n,r,s,c,h)}function z1(n,r,s){var c=r.pendingProps,h=c.children,b=n!==null?n.memoizedState:null;if(c.mode==="hidden"){if((r.flags&128)!==0){if(c=b!==null?b.baseLanes|s:s,n!==null){for(h=r.child=n.child,b=0;h!==null;)b=b|h.lanes|h.childLanes,h=h.sibling;r.childLanes=b&~c}else r.childLanes=0,r.child=null;return R1(n,r,c,s)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&zl(r,b!==null?b.cachePool:null),b!==null?M0(r,b):Id(),b1(r);else return r.lanes=r.childLanes=536870912,R1(n,r,b!==null?b.baseLanes|s:s,s)}else b!==null?(zl(r,b.cachePool),M0(r,b),Ni(),r.memoizedState=null):(n!==null&&zl(r,null),Id(),Ni());return St(n,r,h,s),r.child}function R1(n,r,s,c){var h=Vd();return h=h===null?null:{parent:ut._currentValue,pool:h},r.memoizedState={baseLanes:s,cachePool:h},n!==null&&zl(r,null),Id(),b1(r),n!==null&&As(n,r,c,!0),null}function Kl(n,r){var s=r.ref;if(s===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(n===null||n.ref!==s)&&(r.flags|=4194816)}}function df(n,r,s,c,h){return xa(r),s=Fd(n,r,s,c,void 0,h),c=Kd(),n!==null&&!mt?(Yd(n,r,h),hi(n,r,h)):(Me&&c&&Md(r),r.flags|=1,St(n,r,s,h),r.child)}function O1(n,r,s,c,h,b){return xa(r),r.updateQueue=null,s=R0(r,c,s,h),z0(n),c=Kd(),n!==null&&!mt?(Yd(n,r,b),hi(n,r,b)):(Me&&c&&Md(r),r.flags|=1,St(n,r,s,b),r.child)}function L1(n,r,s,c,h){if(xa(r),r.stateNode===null){var b=ir,w=s.contextType;typeof w=="object"&&w!==null&&(b=zt(w)),b=new s(c,b),r.memoizedState=b.state!==null&&b.state!==void 0?b.state:null,b.updater=cf,r.stateNode=b,b._reactInternals=r,b=r.stateNode,b.props=c,b.state=r.memoizedState,b.refs={},_d(r),w=s.contextType,b.context=typeof w=="object"&&w!==null?zt(w):ir,b.state=r.memoizedState,w=s.getDerivedStateFromProps,typeof w=="function"&&(lf(r,s,w,c),b.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof b.getSnapshotBeforeUpdate=="function"||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(w=b.state,typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount(),w!==b.state&&cf.enqueueReplaceState(b,b.state,null),Ds(r,c,b,h),Ls(),b.state=r.memoizedState),typeof b.componentDidMount=="function"&&(r.flags|=4194308),c=!0}else if(n===null){b=r.stateNode;var T=r.memoizedProps,O=Sa(s,T);b.props=O;var $=b.context,W=s.contextType;w=ir,typeof W=="object"&&W!==null&&(w=zt(W));var ee=s.getDerivedStateFromProps;W=typeof ee=="function"||typeof b.getSnapshotBeforeUpdate=="function",T=r.pendingProps!==T,W||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(T||$!==w)&&x1(r,b,c,w),Ri=!1;var F=r.memoizedState;b.state=F,Ds(r,c,b,h),Ls(),$=r.memoizedState,T||F!==$||Ri?(typeof ee=="function"&&(lf(r,s,ee,c),$=r.memoizedState),(O=Ri||y1(r,s,O,c,F,$,w))?(W||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(r.flags|=4194308)):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=$),b.props=c,b.state=$,b.context=w,c=O):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{b=r.stateNode,Hd(n,r),w=r.memoizedProps,W=Sa(s,w),b.props=W,ee=r.pendingProps,F=b.context,$=s.contextType,O=ir,typeof $=="object"&&$!==null&&(O=zt($)),T=s.getDerivedStateFromProps,($=typeof T=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(w!==ee||F!==O)&&x1(r,b,c,O),Ri=!1,F=r.memoizedState,b.state=F,Ds(r,c,b,h),Ls();var K=r.memoizedState;w!==ee||F!==K||Ri||n!==null&&n.dependencies!==null&&Cl(n.dependencies)?(typeof T=="function"&&(lf(r,s,T,c),K=r.memoizedState),(W=Ri||y1(r,s,W,c,F,K,O)||n!==null&&n.dependencies!==null&&Cl(n.dependencies))?($||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,K,O),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,K,O)),typeof b.componentDidUpdate=="function"&&(r.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof b.componentDidUpdate!="function"||w===n.memoizedProps&&F===n.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&F===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=K),b.props=c,b.state=K,b.context=O,c=W):(typeof b.componentDidUpdate!="function"||w===n.memoizedProps&&F===n.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&F===n.memoizedState||(r.flags|=1024),c=!1)}return b=c,Kl(n,r),c=(r.flags&128)!==0,b||c?(b=r.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:b.render(),r.flags|=1,n!==null&&c?(r.child=pr(r,n.child,null,h),r.child=pr(r,null,s,h)):St(n,r,s,h),r.memoizedState=b.state,n=r.child):n=hi(n,r,h),n}function D1(n,r,s,c){return ks(),r.flags|=256,St(n,r,s,c),r.child}var ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pf(n){return{baseLanes:n,cachePool:w0()}}function hf(n,r,s){return n=n!==null?n.childLanes&~s:0,r&&(n|=vn),n}function P1(n,r,s){var c=r.pendingProps,h=!1,b=(r.flags&128)!==0,w;if((w=b)||(w=n!==null&&n.memoizedState===null?!1:(dt.current&2)!==0),w&&(h=!0,r.flags&=-129),w=(r.flags&32)!==0,r.flags&=-33,n===null){if(Me){if(h?Pi(r):Ni(),Me){var T=Ze,O;if(O=T){e:{for(O=T,T=_n;O.nodeType!==8;){if(!T){T=null;break e}if(O=Cn(O.nextSibling),O===null){T=null;break e}}T=O}T!==null?(r.memoizedState={dehydrated:T,treeContext:ha!==null?{id:li,overflow:ci}:null,retryLane:536870912,hydrationErrors:null},O=Jt(18,null,null,0),O.stateNode=T,O.return=r,r.child=O,Nt=r,Ze=null,O=!0):O=!1}O||ba(r)}if(T=r.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Wf(T)?r.lanes=32:r.lanes=536870912,null;pi(r)}return T=c.children,c=c.fallback,h?(Ni(),h=r.mode,T=Yl({mode:"hidden",children:T},h),c=pa(c,h,s,null),T.return=r,c.return=r,T.sibling=c,r.child=T,h=r.child,h.memoizedState=pf(s),h.childLanes=hf(n,w,s),r.memoizedState=ff,c):(Pi(r),mf(r,T))}if(O=n.memoizedState,O!==null&&(T=O.dehydrated,T!==null)){if(b)r.flags&256?(Pi(r),r.flags&=-257,r=gf(n,r,s)):r.memoizedState!==null?(Ni(),r.child=n.child,r.flags|=128,r=null):(Ni(),h=c.fallback,T=r.mode,c=Yl({mode:"visible",children:c.children},T),h=pa(h,T,s,null),h.flags|=2,c.return=r,h.return=r,c.sibling=h,r.child=c,pr(r,n.child,null,s),c=r.child,c.memoizedState=pf(s),c.childLanes=hf(n,w,s),r.memoizedState=ff,r=h);else if(Pi(r),Wf(T)){if(w=T.nextSibling&&T.nextSibling.dataset,w)var $=w.dgst;w=$,c=Error(a(419)),c.stack="",c.digest=w,Es({value:c,source:null,stack:null}),r=gf(n,r,s)}else if(mt||As(n,r,s,!1),w=(s&n.childLanes)!==0,mt||w){if(w=qe,w!==null&&(c=s&-s,c=(c&42)!==0?1:Wu(c),c=(c&(w.suspendedLanes|s))!==0?0:c,c!==0&&c!==O.retryLane))throw O.retryLane=c,nr(n,c),rn(w,n,c),E1;T.data==="$?"||Df(),r=gf(n,r,s)}else T.data==="$?"?(r.flags|=192,r.child=n.child,r=null):(n=O.treeContext,Ze=Cn(T.nextSibling),Nt=r,Me=!0,ga=null,_n=!1,n!==null&&(bn[yn++]=li,bn[yn++]=ci,bn[yn++]=ha,li=n.id,ci=n.overflow,ha=r),r=mf(r,c.children),r.flags|=4096);return r}return h?(Ni(),h=c.fallback,T=r.mode,O=n.child,$=O.sibling,c=oi(O,{mode:"hidden",children:c.children}),c.subtreeFlags=O.subtreeFlags&65011712,$!==null?h=oi($,h):(h=pa(h,T,s,null),h.flags|=2),h.return=r,c.return=r,c.sibling=h,r.child=c,c=h,h=r.child,T=n.child.memoizedState,T===null?T=pf(s):(O=T.cachePool,O!==null?($=ut._currentValue,O=O.parent!==$?{parent:$,pool:$}:O):O=w0(),T={baseLanes:T.baseLanes|s,cachePool:O}),h.memoizedState=T,h.childLanes=hf(n,w,s),r.memoizedState=ff,c):(Pi(r),s=n.child,n=s.sibling,s=oi(s,{mode:"visible",children:c.children}),s.return=r,s.sibling=null,n!==null&&(w=r.deletions,w===null?(r.deletions=[n],r.flags|=16):w.push(n)),r.child=s,r.memoizedState=null,s)}function mf(n,r){return r=Yl({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function Yl(n,r){return n=Jt(22,n,null,r),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function gf(n,r,s){return pr(r,n.child,null,s),n=mf(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function N1(n,r,s){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Ld(n.return,r,s)}function bf(n,r,s,c,h){var b=n.memoizedState;b===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:h}:(b.isBackwards=r,b.rendering=null,b.renderingStartTime=0,b.last=c,b.tail=s,b.tailMode=h)}function V1(n,r,s){var c=r.pendingProps,h=c.revealOrder,b=c.tail;if(St(n,r,c.children,s),c=dt.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&N1(n,s,r);else if(n.tag===19)N1(n,s,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(ie(dt,c),h){case"forwards":for(s=r.child,h=null;s!==null;)n=s.alternate,n!==null&&$l(n)===null&&(h=s),s=s.sibling;s=h,s===null?(h=r.child,r.child=null):(h=s.sibling,s.sibling=null),bf(r,!1,h,s,b);break;case"backwards":for(s=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&$l(n)===null){r.child=h;break}n=h.sibling,h.sibling=s,s=h,h=n}bf(r,!0,s,null,b);break;case"together":bf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function hi(n,r,s){if(n!==null&&(r.dependencies=n.dependencies),Gi|=r.lanes,(s&r.childLanes)===0)if(n!==null){if(As(n,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(a(153));if(r.child!==null){for(n=r.child,s=oi(n,n.pendingProps),r.child=s,s.return=r;n.sibling!==null;)n=n.sibling,s=s.sibling=oi(n,n.pendingProps),s.return=r;s.sibling=null}return r.child}function yf(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&Cl(n)))}function y6(n,r,s){switch(r.tag){case 3:Oe(r,r.stateNode.containerInfo),zi(r,ut,n.memoizedState.cache),ks();break;case 27:case 5:oa(r);break;case 4:Oe(r,r.stateNode.containerInfo);break;case 10:zi(r,r.type,r.memoizedProps.value);break;case 13:var c=r.memoizedState;if(c!==null)return c.dehydrated!==null?(Pi(r),r.flags|=128,null):(s&r.child.childLanes)!==0?P1(n,r,s):(Pi(r),n=hi(n,r,s),n!==null?n.sibling:null);Pi(r);break;case 19:var h=(n.flags&128)!==0;if(c=(s&r.childLanes)!==0,c||(As(n,r,s,!1),c=(s&r.childLanes)!==0),h){if(c)return V1(n,r,s);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ie(dt,dt.current),c)break;return null;case 22:case 23:return r.lanes=0,z1(n,r,s);case 24:zi(r,ut,n.memoizedState.cache)}return hi(n,r,s)}function B1(n,r,s){if(n!==null)if(n.memoizedProps!==r.pendingProps)mt=!0;else{if(!yf(n,s)&&(r.flags&128)===0)return mt=!1,y6(n,r,s);mt=(n.flags&131072)!==0}else mt=!1,Me&&(r.flags&1048576)!==0&&h0(r,Al,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var c=r.elementType,h=c._init;if(c=h(c._payload),r.type=c,typeof c=="function")Ed(c)?(n=Sa(c,n),r.tag=1,r=L1(null,r,c,n,s)):(r.tag=0,r=df(null,r,c,n,s));else{if(c!=null){if(h=c.$$typeof,h===V){r.tag=11,r=A1(null,r,c,n,s);break e}else if(h===D){r.tag=14,r=C1(null,r,c,n,s);break e}}throw r=ce(c)||c,Error(a(306,r,""))}}return r;case 0:return df(n,r,r.type,r.pendingProps,s);case 1:return c=r.type,h=Sa(c,r.pendingProps),L1(n,r,c,h,s);case 3:e:{if(Oe(r,r.stateNode.containerInfo),n===null)throw Error(a(387));c=r.pendingProps;var b=r.memoizedState;h=b.element,Hd(n,r),Ds(r,c,null,s);var w=r.memoizedState;if(c=w.cache,zi(r,ut,c),c!==b.cache&&Dd(r,[ut],s,!0),Ls(),c=w.element,b.isDehydrated)if(b={element:c,isDehydrated:!1,cache:w.cache},r.updateQueue.baseState=b,r.memoizedState=b,r.flags&256){r=D1(n,r,c,s);break e}else if(c!==h){h=mn(Error(a(424)),r),Es(h),r=D1(n,r,c,s);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(Ze=Cn(n.firstChild),Nt=r,Me=!0,ga=null,_n=!0,s=g1(r,null,c,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ks(),c===h){r=hi(n,r,s);break e}St(n,r,c,s)}r=r.child}return r;case 26:return Kl(n,r),n===null?(s=U2(r.type,null,r.pendingProps,null))?r.memoizedState=s:Me||(s=r.type,n=r.pendingProps,c=lc(de.current).createElement(s),c[Mt]=r,c[Bt]=n,jt(c,s,n),ht(c),r.stateNode=c):r.memoizedState=U2(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return oa(r),n===null&&Me&&(c=r.stateNode=_2(r.type,r.pendingProps,de.current),Nt=r,_n=!0,h=Ze,qi(r.type)?(Zf=h,Ze=Cn(c.firstChild)):Ze=h),St(n,r,r.pendingProps.children,s),Kl(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&Me&&((h=c=Ze)&&(c=F6(c,r.type,r.pendingProps,_n),c!==null?(r.stateNode=c,Nt=r,Ze=Cn(c.firstChild),_n=!1,h=!0):h=!1),h||ba(r)),oa(r),h=r.type,b=r.pendingProps,w=n!==null?n.memoizedProps:null,c=b.children,Yf(h,b)?c=null:w!==null&&Yf(h,w)&&(r.flags|=32),r.memoizedState!==null&&(h=Fd(n,r,u6,null,null,s),no._currentValue=h),Kl(n,r),St(n,r,c,s),r.child;case 6:return n===null&&Me&&((n=s=Ze)&&(s=K6(s,r.pendingProps,_n),s!==null?(r.stateNode=s,Nt=r,Ze=null,n=!0):n=!1),n||ba(r)),null;case 13:return P1(n,r,s);case 4:return Oe(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=pr(r,null,c,s):St(n,r,c,s),r.child;case 11:return A1(n,r,r.type,r.pendingProps,s);case 7:return St(n,r,r.pendingProps,s),r.child;case 8:return St(n,r,r.pendingProps.children,s),r.child;case 12:return St(n,r,r.pendingProps.children,s),r.child;case 10:return c=r.pendingProps,zi(r,r.type,c.value),St(n,r,c.children,s),r.child;case 9:return h=r.type._context,c=r.pendingProps.children,xa(r),h=zt(h),c=c(h),r.flags|=1,St(n,r,c,s),r.child;case 14:return C1(n,r,r.type,r.pendingProps,s);case 15:return M1(n,r,r.type,r.pendingProps,s);case 19:return V1(n,r,s);case 31:return c=r.pendingProps,s=r.mode,c={mode:c.mode,children:c.children},n===null?(s=Yl(c,s),s.ref=r.ref,r.child=s,s.return=r,r=s):(s=oi(n.child,c),s.ref=r.ref,r.child=s,s.return=r,r=s),r;case 22:return z1(n,r,s);case 24:return xa(r),c=zt(ut),n===null?(h=Vd(),h===null&&(h=qe,b=Pd(),h.pooledCache=b,b.refCount++,b!==null&&(h.pooledCacheLanes|=s),h=b),r.memoizedState={parent:c,cache:h},_d(r),zi(r,ut,h)):((n.lanes&s)!==0&&(Hd(n,r),Ds(r,null,null,s),Ls()),h=n.memoizedState,b=r.memoizedState,h.parent!==c?(h={parent:c,cache:c},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),zi(r,ut,c)):(c=b.cache,zi(r,ut,c),c!==h.cache&&Dd(r,[ut],s,!0))),St(n,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function mi(n){n.flags|=4}function _1(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!K2(r)){if(r=xn.current,r!==null&&((Ee&4194048)===Ee?Hn!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||r!==Hn))throw Rs=Bd,S0;n.flags|=8192}}function Xl(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?bg():536870912,n.lanes|=r,br|=r)}function Gs(n,r){if(!Me)switch(n.tailMode){case"hidden":r=n.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Qe(n){var r=n.alternate!==null&&n.alternate.child===n.child,s=0,c=0;if(r)for(var h=n.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags&65011712,c|=h.flags&65011712,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=s,r}function x6(n,r,s){var c=r.pendingProps;switch(zd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(r),null;case 1:return Qe(r),null;case 3:return s=r.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),r.memoizedState.cache!==c&&(r.flags|=2048),di(ut),Ct(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(js(r)?mi(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,b0())),Qe(r),null;case 26:return s=r.memoizedState,n===null?(mi(r),s!==null?(Qe(r),_1(r,s)):(Qe(r),r.flags&=-16777217)):s?s!==n.memoizedState?(mi(r),Qe(r),_1(r,s)):(Qe(r),r.flags&=-16777217):(n.memoizedProps!==c&&mi(r),Qe(r),r.flags&=-16777217),null;case 27:ai(r),s=de.current;var h=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==c&&mi(r);else{if(!c){if(r.stateNode===null)throw Error(a(166));return Qe(r),null}n=se.current,js(r)?m0(r):(n=_2(h,c,s),r.stateNode=n,mi(r))}return Qe(r),null;case 5:if(ai(r),s=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==c&&mi(r);else{if(!c){if(r.stateNode===null)throw Error(a(166));return Qe(r),null}if(n=se.current,js(r))m0(r);else{switch(h=lc(de.current),n){case 1:n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=h.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?h.createElement("select",{is:c.is}):h.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?h.createElement(s,{is:c.is}):h.createElement(s)}}n[Mt]=r,n[Bt]=c;e:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)n.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break e;for(;h.sibling===null;){if(h.return===null||h.return===r)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=n;e:switch(jt(n,s,c),s){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&mi(r)}}return Qe(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==c&&mi(r);else{if(typeof c!="string"&&r.stateNode===null)throw Error(a(166));if(n=de.current,js(r)){if(n=r.stateNode,s=r.memoizedProps,c=null,h=Nt,h!==null)switch(h.tag){case 27:case 5:c=h.memoizedProps}n[Mt]=r,n=!!(n.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||O2(n.nodeValue,s)),n||ba(r)}else n=lc(n).createTextNode(c),n[Mt]=r,r.stateNode=n}return Qe(r),null;case 13:if(c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=js(r),c!==null&&c.dehydrated!==null){if(n===null){if(!h)throw Error(a(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[Mt]=r}else ks(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Qe(r),h=!1}else h=b0(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(pi(r),r):(pi(r),null)}if(pi(r),(r.flags&128)!==0)return r.lanes=s,r;if(s=c!==null,n=n!==null&&n.memoizedState!==null,s){c=r.child,h=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(h=c.alternate.memoizedState.cachePool.pool);var b=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(b=c.memoizedState.cachePool.pool),b!==h&&(c.flags|=2048)}return s!==n&&s&&(r.child.flags|=8192),Xl(r,r.updateQueue),Qe(r),null;case 4:return Ct(),n===null&&If(r.stateNode.containerInfo),Qe(r),null;case 10:return di(r.type),Qe(r),null;case 19:if(te(dt),h=r.memoizedState,h===null)return Qe(r),null;if(c=(r.flags&128)!==0,b=h.rendering,b===null)if(c)Gs(h,!1);else{if(Je!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(b=$l(n),b!==null){for(r.flags|=128,Gs(h,!1),n=b.updateQueue,r.updateQueue=n,Xl(r,n),r.subtreeFlags=0,n=s,s=r.child;s!==null;)p0(s,n),s=s.sibling;return ie(dt,dt.current&1|2),r.child}n=n.sibling}h.tail!==null&&Bn()>Zl&&(r.flags|=128,c=!0,Gs(h,!1),r.lanes=4194304)}else{if(!c)if(n=$l(b),n!==null){if(r.flags|=128,c=!0,n=n.updateQueue,r.updateQueue=n,Xl(r,n),Gs(h,!0),h.tail===null&&h.tailMode==="hidden"&&!b.alternate&&!Me)return Qe(r),null}else 2*Bn()-h.renderingStartTime>Zl&&s!==536870912&&(r.flags|=128,c=!0,Gs(h,!1),r.lanes=4194304);h.isBackwards?(b.sibling=r.child,r.child=b):(n=h.last,n!==null?n.sibling=b:r.child=b,h.last=b)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=Bn(),r.sibling=null,n=dt.current,ie(dt,c?n&1|2:n&1),r):(Qe(r),null);case 22:case 23:return pi(r),$d(),c=r.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(r.flags|=8192):c&&(r.flags|=8192),c?(s&536870912)!==0&&(r.flags&128)===0&&(Qe(r),r.subtreeFlags&6&&(r.flags|=8192)):Qe(r),s=r.updateQueue,s!==null&&Xl(r,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==s&&(r.flags|=2048),n!==null&&te(va),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),di(ut),Qe(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function v6(n,r){switch(zd(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return di(ut),Ct(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return ai(r),null;case 13:if(pi(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(a(340));ks()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return te(dt),null;case 4:return Ct(),null;case 10:return di(r.type),null;case 22:case 23:return pi(r),$d(),n!==null&&te(va),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return di(ut),null;case 25:return null;default:return null}}function H1(n,r){switch(zd(r),r.tag){case 3:di(ut),Ct();break;case 26:case 27:case 5:ai(r);break;case 4:Ct();break;case 13:pi(r);break;case 19:te(dt);break;case 10:di(r.type);break;case 22:case 23:pi(r),$d(),n!==null&&te(va);break;case 24:di(ut)}}function Us(n,r){try{var s=r.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var h=c.next;s=h;do{if((s.tag&n)===n){c=void 0;var b=s.create,w=s.inst;c=b(),w.destroy=c}s=s.next}while(s!==h)}}catch(T){Ue(r,r.return,T)}}function Vi(n,r,s){try{var c=r.updateQueue,h=c!==null?c.lastEffect:null;if(h!==null){var b=h.next;c=b;do{if((c.tag&n)===n){var w=c.inst,T=w.destroy;if(T!==void 0){w.destroy=void 0,h=r;var O=s,$=T;try{$()}catch(W){Ue(h,O,W)}}}c=c.next}while(c!==b)}}catch(W){Ue(r,r.return,W)}}function G1(n){var r=n.updateQueue;if(r!==null){var s=n.stateNode;try{C0(r,s)}catch(c){Ue(n,n.return,c)}}}function U1(n,r,s){s.props=Sa(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(c){Ue(n,r,c)}}function Is(n,r){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof s=="function"?n.refCleanup=s(c):s.current=c}}catch(h){Ue(n,r,h)}}function Gn(n,r){var s=n.ref,c=n.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(h){Ue(n,r,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){Ue(n,r,h)}else s.current=null}function I1(n){var r=n.type,s=n.memoizedProps,c=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break e;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(h){Ue(n,n.return,h)}}function xf(n,r,s){try{var c=n.stateNode;G6(c,n.type,s,r),c[Bt]=r}catch(h){Ue(n,n.return,h)}}function $1(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&qi(n.type)||n.tag===4}function vf(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||$1(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&qi(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function wf(n,r,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(n),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=oc));else if(c!==4&&(c===27&&qi(n.type)&&(s=n.stateNode,r=null),n=n.child,n!==null))for(wf(n,r,s),n=n.sibling;n!==null;)wf(n,r,s),n=n.sibling}function Ql(n,r,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?s.insertBefore(n,r):s.appendChild(n);else if(c!==4&&(c===27&&qi(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(Ql(n,r,s),n=n.sibling;n!==null;)Ql(n,r,s),n=n.sibling}function q1(n){var r=n.stateNode,s=n.memoizedProps;try{for(var c=n.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);jt(r,c,s),r[Mt]=n,r[Bt]=s}catch(b){Ue(n,n.return,b)}}var gi=!1,nt=!1,Sf=!1,F1=typeof WeakSet=="function"?WeakSet:Set,gt=null;function w6(n,r){if(n=n.containerInfo,Ff=hc,n=i0(n),xd(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var h=c.anchorOffset,b=c.focusNode;c=c.focusOffset;try{s.nodeType,b.nodeType}catch{s=null;break e}var w=0,T=-1,O=-1,$=0,W=0,ee=n,F=null;t:for(;;){for(var K;ee!==s||h!==0&&ee.nodeType!==3||(T=w+h),ee!==b||c!==0&&ee.nodeType!==3||(O=w+c),ee.nodeType===3&&(w+=ee.nodeValue.length),(K=ee.firstChild)!==null;)F=ee,ee=K;for(;;){if(ee===n)break t;if(F===s&&++$===h&&(T=w),F===b&&++W===c&&(O=w),(K=ee.nextSibling)!==null)break;ee=F,F=ee.parentNode}ee=K}s=T===-1||O===-1?null:{start:T,end:O}}else s=null}s=s||{start:0,end:0}}else s=null;for(Kf={focusedElem:n,selectionRange:s},hc=!1,gt=r;gt!==null;)if(r=gt,n=r.child,(r.subtreeFlags&1024)!==0&&n!==null)n.return=r,gt=n;else for(;gt!==null;){switch(r=gt,b=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&b!==null){n=void 0,s=r,h=b.memoizedProps,b=b.memoizedState,c=s.stateNode;try{var he=Sa(s.type,h,s.elementType===s.type);n=c.getSnapshotBeforeUpdate(he,b),c.__reactInternalSnapshotBeforeUpdate=n}catch(fe){Ue(s,s.return,fe)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,s=n.nodeType,s===9)Qf(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Qf(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(a(163))}if(n=r.sibling,n!==null){n.return=r.return,gt=n;break}gt=r.return}}function K1(n,r,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:Bi(n,s),c&4&&Us(5,s);break;case 1:if(Bi(n,s),c&4)if(n=s.stateNode,r===null)try{n.componentDidMount()}catch(w){Ue(s,s.return,w)}else{var h=Sa(s.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(h,r,n.__reactInternalSnapshotBeforeUpdate)}catch(w){Ue(s,s.return,w)}}c&64&&G1(s),c&512&&Is(s,s.return);break;case 3:if(Bi(n,s),c&64&&(n=s.updateQueue,n!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{C0(n,r)}catch(w){Ue(s,s.return,w)}}break;case 27:r===null&&c&4&&q1(s);case 26:case 5:Bi(n,s),r===null&&c&4&&I1(s),c&512&&Is(s,s.return);break;case 12:Bi(n,s);break;case 13:Bi(n,s),c&4&&Q1(n,s),c&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=z6.bind(null,s),Y6(n,s))));break;case 22:if(c=s.memoizedState!==null||gi,!c){r=r!==null&&r.memoizedState!==null||nt,h=gi;var b=nt;gi=c,(nt=r)&&!b?_i(n,s,(s.subtreeFlags&8772)!==0):Bi(n,s),gi=h,nt=b}break;case 30:break;default:Bi(n,s)}}function Y1(n){var r=n.alternate;r!==null&&(n.alternate=null,Y1(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&ed(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Ye=null,Gt=!1;function bi(n,r,s){for(s=s.child;s!==null;)X1(n,r,s),s=s.sibling}function X1(n,r,s){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(us,s)}catch{}switch(s.tag){case 26:nt||Gn(s,r),bi(n,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:nt||Gn(s,r);var c=Ye,h=Gt;qi(s.type)&&(Ye=s.stateNode,Gt=!1),bi(n,r,s),Zs(s.stateNode),Ye=c,Gt=h;break;case 5:nt||Gn(s,r);case 6:if(c=Ye,h=Gt,Ye=null,bi(n,r,s),Ye=c,Gt=h,Ye!==null)if(Gt)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(s.stateNode)}catch(b){Ue(s,r,b)}else try{Ye.removeChild(s.stateNode)}catch(b){Ue(s,r,b)}break;case 18:Ye!==null&&(Gt?(n=Ye,V2(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),so(n)):V2(Ye,s.stateNode));break;case 4:c=Ye,h=Gt,Ye=s.stateNode.containerInfo,Gt=!0,bi(n,r,s),Ye=c,Gt=h;break;case 0:case 11:case 14:case 15:nt||Vi(2,s,r),nt||Vi(4,s,r),bi(n,r,s);break;case 1:nt||(Gn(s,r),c=s.stateNode,typeof c.componentWillUnmount=="function"&&U1(s,r,c)),bi(n,r,s);break;case 21:bi(n,r,s);break;case 22:nt=(c=nt)||s.memoizedState!==null,bi(n,r,s),nt=c;break;default:bi(n,r,s)}}function Q1(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{so(n)}catch(s){Ue(r,r.return,s)}}function S6(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new F1),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new F1),r;default:throw Error(a(435,n.tag))}}function Tf(n,r){var s=S6(n);r.forEach(function(c){var h=R6.bind(null,n,c);s.has(c)||(s.add(c),c.then(h,h))})}function en(n,r){var s=r.deletions;if(s!==null)for(var c=0;c<s.length;c++){var h=s[c],b=n,w=r,T=w;e:for(;T!==null;){switch(T.tag){case 27:if(qi(T.type)){Ye=T.stateNode,Gt=!1;break e}break;case 5:Ye=T.stateNode,Gt=!1;break e;case 3:case 4:Ye=T.stateNode.containerInfo,Gt=!0;break e}T=T.return}if(Ye===null)throw Error(a(160));X1(b,w,h),Ye=null,Gt=!1,b=h.alternate,b!==null&&(b.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)W1(r,n),r=r.sibling}var An=null;function W1(n,r){var s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:en(r,n),tn(n),c&4&&(Vi(3,n,n.return),Us(3,n),Vi(5,n,n.return));break;case 1:en(r,n),tn(n),c&512&&(nt||s===null||Gn(s,s.return)),c&64&&gi&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var h=An;if(en(r,n),tn(n),c&512&&(nt||s===null||Gn(s,s.return)),c&4){var b=s!==null?s.memoizedState:null;if(c=n.memoizedState,s===null)if(c===null)if(n.stateNode===null){e:{c=n.type,s=n.memoizedProps,h=h.ownerDocument||h;t:switch(c){case"title":b=h.getElementsByTagName("title")[0],(!b||b[ps]||b[Mt]||b.namespaceURI==="http://www.w3.org/2000/svg"||b.hasAttribute("itemprop"))&&(b=h.createElement(c),h.head.insertBefore(b,h.querySelector("head > title"))),jt(b,c,s),b[Mt]=n,ht(b),c=b;break e;case"link":var w=q2("link","href",h).get(c+(s.href||""));if(w){for(var T=0;T<w.length;T++)if(b=w[T],b.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&b.getAttribute("rel")===(s.rel==null?null:s.rel)&&b.getAttribute("title")===(s.title==null?null:s.title)&&b.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){w.splice(T,1);break t}}b=h.createElement(c),jt(b,c,s),h.head.appendChild(b);break;case"meta":if(w=q2("meta","content",h).get(c+(s.content||""))){for(T=0;T<w.length;T++)if(b=w[T],b.getAttribute("content")===(s.content==null?null:""+s.content)&&b.getAttribute("name")===(s.name==null?null:s.name)&&b.getAttribute("property")===(s.property==null?null:s.property)&&b.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&b.getAttribute("charset")===(s.charSet==null?null:s.charSet)){w.splice(T,1);break t}}b=h.createElement(c),jt(b,c,s),h.head.appendChild(b);break;default:throw Error(a(468,c))}b[Mt]=n,ht(b),c=b}n.stateNode=c}else F2(h,n.type,n.stateNode);else n.stateNode=$2(h,c,n.memoizedProps);else b!==c?(b===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):b.count--,c===null?F2(h,n.type,n.stateNode):$2(h,c,n.memoizedProps)):c===null&&n.stateNode!==null&&xf(n,n.memoizedProps,s.memoizedProps)}break;case 27:en(r,n),tn(n),c&512&&(nt||s===null||Gn(s,s.return)),s!==null&&c&4&&xf(n,n.memoizedProps,s.memoizedProps);break;case 5:if(en(r,n),tn(n),c&512&&(nt||s===null||Gn(s,s.return)),n.flags&32){h=n.stateNode;try{Xa(h,"")}catch(K){Ue(n,n.return,K)}}c&4&&n.stateNode!=null&&(h=n.memoizedProps,xf(n,h,s!==null?s.memoizedProps:h)),c&1024&&(Sf=!0);break;case 6:if(en(r,n),tn(n),c&4){if(n.stateNode===null)throw Error(a(162));c=n.memoizedProps,s=n.stateNode;try{s.nodeValue=c}catch(K){Ue(n,n.return,K)}}break;case 3:if(dc=null,h=An,An=cc(r.containerInfo),en(r,n),An=h,tn(n),c&4&&s!==null&&s.memoizedState.isDehydrated)try{so(r.containerInfo)}catch(K){Ue(n,n.return,K)}Sf&&(Sf=!1,Z1(n));break;case 4:c=An,An=cc(n.stateNode.containerInfo),en(r,n),tn(n),An=c;break;case 12:en(r,n),tn(n);break;case 13:en(r,n),tn(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Mf=Bn()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Tf(n,c)));break;case 22:h=n.memoizedState!==null;var O=s!==null&&s.memoizedState!==null,$=gi,W=nt;if(gi=$||h,nt=W||O,en(r,n),nt=W,gi=$,tn(n),c&8192)e:for(r=n.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(s===null||O||gi||nt||Ta(n)),s=null,r=n;;){if(r.tag===5||r.tag===26){if(s===null){O=s=r;try{if(b=O.stateNode,h)w=b.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{T=O.stateNode;var ee=O.memoizedProps.style,F=ee!=null&&ee.hasOwnProperty("display")?ee.display:null;T.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(K){Ue(O,O.return,K)}}}else if(r.tag===6){if(s===null){O=r;try{O.stateNode.nodeValue=h?"":O.memoizedProps}catch(K){Ue(O,O.return,K)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}c&4&&(c=n.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,Tf(n,s))));break;case 19:en(r,n),tn(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Tf(n,c)));break;case 30:break;case 21:break;default:en(r,n),tn(n)}}function tn(n){var r=n.flags;if(r&2){try{for(var s,c=n.return;c!==null;){if($1(c)){s=c;break}c=c.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,b=vf(n);Ql(n,b,h);break;case 5:var w=s.stateNode;s.flags&32&&(Xa(w,""),s.flags&=-33);var T=vf(n);Ql(n,T,w);break;case 3:case 4:var O=s.stateNode.containerInfo,$=vf(n);wf(n,$,O);break;default:throw Error(a(161))}}catch(W){Ue(n,n.return,W)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Z1(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;Z1(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function Bi(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)K1(n,r.alternate,r),r=r.sibling}function Ta(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:Vi(4,r,r.return),Ta(r);break;case 1:Gn(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&U1(r,r.return,s),Ta(r);break;case 27:Zs(r.stateNode);case 26:case 5:Gn(r,r.return),Ta(r);break;case 22:r.memoizedState===null&&Ta(r);break;case 30:Ta(r);break;default:Ta(r)}n=n.sibling}}function _i(n,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var c=r.alternate,h=n,b=r,w=b.flags;switch(b.tag){case 0:case 11:case 15:_i(h,b,s),Us(4,b);break;case 1:if(_i(h,b,s),c=b,h=c.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch($){Ue(c,c.return,$)}if(c=b,h=c.updateQueue,h!==null){var T=c.stateNode;try{var O=h.shared.hiddenCallbacks;if(O!==null)for(h.shared.hiddenCallbacks=null,h=0;h<O.length;h++)A0(O[h],T)}catch($){Ue(c,c.return,$)}}s&&w&64&&G1(b),Is(b,b.return);break;case 27:q1(b);case 26:case 5:_i(h,b,s),s&&c===null&&w&4&&I1(b),Is(b,b.return);break;case 12:_i(h,b,s);break;case 13:_i(h,b,s),s&&w&4&&Q1(h,b);break;case 22:b.memoizedState===null&&_i(h,b,s),Is(b,b.return);break;case 30:break;default:_i(h,b,s)}r=r.sibling}}function jf(n,r){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&Cs(s))}function kf(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Cs(n))}function Un(n,r,s,c){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)J1(n,r,s,c),r=r.sibling}function J1(n,r,s,c){var h=r.flags;switch(r.tag){case 0:case 11:case 15:Un(n,r,s,c),h&2048&&Us(9,r);break;case 1:Un(n,r,s,c);break;case 3:Un(n,r,s,c),h&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Cs(n)));break;case 12:if(h&2048){Un(n,r,s,c),n=r.stateNode;try{var b=r.memoizedProps,w=b.id,T=b.onPostCommit;typeof T=="function"&&T(w,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(O){Ue(r,r.return,O)}}else Un(n,r,s,c);break;case 13:Un(n,r,s,c);break;case 23:break;case 22:b=r.stateNode,w=r.alternate,r.memoizedState!==null?b._visibility&2?Un(n,r,s,c):$s(n,r):b._visibility&2?Un(n,r,s,c):(b._visibility|=2,hr(n,r,s,c,(r.subtreeFlags&10256)!==0)),h&2048&&jf(w,r);break;case 24:Un(n,r,s,c),h&2048&&kf(r.alternate,r);break;default:Un(n,r,s,c)}}function hr(n,r,s,c,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var b=n,w=r,T=s,O=c,$=w.flags;switch(w.tag){case 0:case 11:case 15:hr(b,w,T,O,h),Us(8,w);break;case 23:break;case 22:var W=w.stateNode;w.memoizedState!==null?W._visibility&2?hr(b,w,T,O,h):$s(b,w):(W._visibility|=2,hr(b,w,T,O,h)),h&&$&2048&&jf(w.alternate,w);break;case 24:hr(b,w,T,O,h),h&&$&2048&&kf(w.alternate,w);break;default:hr(b,w,T,O,h)}r=r.sibling}}function $s(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=n,c=r,h=c.flags;switch(c.tag){case 22:$s(s,c),h&2048&&jf(c.alternate,c);break;case 24:$s(s,c),h&2048&&kf(c.alternate,c);break;default:$s(s,c)}r=r.sibling}}var qs=8192;function mr(n){if(n.subtreeFlags&qs)for(n=n.child;n!==null;)e2(n),n=n.sibling}function e2(n){switch(n.tag){case 26:mr(n),n.flags&qs&&n.memoizedState!==null&&oS(An,n.memoizedState,n.memoizedProps);break;case 5:mr(n);break;case 3:case 4:var r=An;An=cc(n.stateNode.containerInfo),mr(n),An=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=qs,qs=16777216,mr(n),qs=r):mr(n));break;default:mr(n)}}function t2(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function Fs(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var c=r[s];gt=c,i2(c,n)}t2(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)n2(n),n=n.sibling}function n2(n){switch(n.tag){case 0:case 11:case 15:Fs(n),n.flags&2048&&Vi(9,n,n.return);break;case 3:Fs(n);break;case 12:Fs(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,Wl(n)):Fs(n);break;default:Fs(n)}}function Wl(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var c=r[s];gt=c,i2(c,n)}t2(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:Vi(8,r,r.return),Wl(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,Wl(r));break;default:Wl(r)}n=n.sibling}}function i2(n,r){for(;gt!==null;){var s=gt;switch(s.tag){case 0:case 11:case 15:Vi(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Cs(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,gt=c;else e:for(s=n;gt!==null;){c=gt;var h=c.sibling,b=c.return;if(Y1(c),c===s){gt=null;break e}if(h!==null){h.return=b,gt=h;break e}gt=b}}}var T6={getCacheForType:function(n){var r=zt(ut),s=r.data.get(n);return s===void 0&&(s=n(),r.data.set(n,s)),s}},j6=typeof WeakMap=="function"?WeakMap:Map,Pe=0,qe=null,je=null,Ee=0,Ne=0,nn=null,Hi=!1,gr=!1,Ef=!1,yi=0,Je=0,Gi=0,ja=0,Af=0,vn=0,br=0,Ks=null,Ut=null,Cf=!1,Mf=0,Zl=1/0,Jl=null,Ui=null,Tt=0,Ii=null,yr=null,xr=0,zf=0,Rf=null,a2=null,Ys=0,Of=null;function an(){if((Pe&2)!==0&&Ee!==0)return Ee&-Ee;if(H.T!==null){var n=sr;return n!==0?n:_f()}return vg()}function r2(){vn===0&&(vn=(Ee&536870912)===0||Me?gg():536870912);var n=xn.current;return n!==null&&(n.flags|=32),vn}function rn(n,r,s){(n===qe&&(Ne===2||Ne===9)||n.cancelPendingCommit!==null)&&(vr(n,0),$i(n,Ee,vn,!1)),fs(n,s),((Pe&2)===0||n!==qe)&&(n===qe&&((Pe&2)===0&&(ja|=s),Je===4&&$i(n,Ee,vn,!1)),In(n))}function s2(n,r,s){if((Pe&6)!==0)throw Error(a(327));var c=!s&&(r&124)===0&&(r&n.expiredLanes)===0||ds(n,r),h=c?A6(n,r):Pf(n,r,!0),b=c;do{if(h===0){gr&&!c&&$i(n,r,0,!1);break}else{if(s=n.current.alternate,b&&!k6(s)){h=Pf(n,r,!1),b=!1;continue}if(h===2){if(b=r,n.errorRecoveryDisabledLanes&b)var w=0;else w=n.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){r=w;e:{var T=n;h=Ks;var O=T.current.memoizedState.isDehydrated;if(O&&(vr(T,w).flags|=256),w=Pf(T,w,!1),w!==2){if(Ef&&!O){T.errorRecoveryDisabledLanes|=b,ja|=b,h=4;break e}b=Ut,Ut=h,b!==null&&(Ut===null?Ut=b:Ut.push.apply(Ut,b))}h=w}if(b=!1,h!==2)continue}}if(h===1){vr(n,0),$i(n,r,0,!0);break}e:{switch(c=n,b=h,b){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:$i(c,r,vn,!Hi);break e;case 2:Ut=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(h=Mf+300-Bn(),10<h)){if($i(c,r,vn,!Hi),ul(c,0,!0)!==0)break e;c.timeoutHandle=P2(o2.bind(null,c,s,Ut,Jl,Cf,r,vn,ja,br,Hi,b,2,-0,0),h);break e}o2(c,s,Ut,Jl,Cf,r,vn,ja,br,Hi,b,0,-0,0)}}break}while(!0);In(n)}function o2(n,r,s,c,h,b,w,T,O,$,W,ee,F,K){if(n.timeoutHandle=-1,ee=r.subtreeFlags,(ee&8192||(ee&16785408)===16785408)&&(to={stylesheets:null,count:0,unsuspend:sS},e2(r),ee=lS(),ee!==null)){n.cancelPendingCommit=ee(h2.bind(null,n,r,b,s,c,h,w,T,O,W,1,F,K)),$i(n,b,w,!$);return}h2(n,r,b,s,c,h,w,T,O)}function k6(n){for(var r=n;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var h=s[c],b=h.getSnapshot;h=h.value;try{if(!Zt(b(),h))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function $i(n,r,s,c){r&=~Af,r&=~ja,n.suspendedLanes|=r,n.pingedLanes&=~r,c&&(n.warmLanes|=r),c=n.expirationTimes;for(var h=r;0<h;){var b=31-Wt(h),w=1<<b;c[b]=-1,h&=~w}s!==0&&yg(n,s,r)}function ec(){return(Pe&6)===0?(Xs(0),!1):!0}function Lf(){if(je!==null){if(Ne===0)var n=je.return;else n=je,ui=ya=null,Xd(n),fr=null,_s=0,n=je;for(;n!==null;)H1(n.alternate,n),n=n.return;je=null}}function vr(n,r){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,I6(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),Lf(),qe=n,je=s=oi(n.current,null),Ee=r,Ne=0,nn=null,Hi=!1,gr=ds(n,r),Ef=!1,br=vn=Af=ja=Gi=Je=0,Ut=Ks=null,Cf=!1,(r&8)!==0&&(r|=r&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=r;0<c;){var h=31-Wt(c),b=1<<h;r|=n[h],c&=~b}return yi=r,Sl(),s}function l2(n,r){Se=null,H.H=Gl,r===zs||r===Rl?(r=k0(),Ne=3):r===S0?(r=k0(),Ne=4):Ne=r===E1?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,nn=r,je===null&&(Je=1,Fl(n,mn(r,n.current)))}function c2(){var n=H.H;return H.H=Gl,n===null?Gl:n}function u2(){var n=H.A;return H.A=T6,n}function Df(){Je=4,Hi||(Ee&4194048)!==Ee&&xn.current!==null||(gr=!0),(Gi&134217727)===0&&(ja&134217727)===0||qe===null||$i(qe,Ee,vn,!1)}function Pf(n,r,s){var c=Pe;Pe|=2;var h=c2(),b=u2();(qe!==n||Ee!==r)&&(Jl=null,vr(n,r)),r=!1;var w=Je;e:do try{if(Ne!==0&&je!==null){var T=je,O=nn;switch(Ne){case 8:Lf(),w=6;break e;case 3:case 2:case 9:case 6:xn.current===null&&(r=!0);var $=Ne;if(Ne=0,nn=null,wr(n,T,O,$),s&&gr){w=0;break e}break;default:$=Ne,Ne=0,nn=null,wr(n,T,O,$)}}E6(),w=Je;break}catch(W){l2(n,W)}while(!0);return r&&n.shellSuspendCounter++,ui=ya=null,Pe=c,H.H=h,H.A=b,je===null&&(qe=null,Ee=0,Sl()),w}function E6(){for(;je!==null;)d2(je)}function A6(n,r){var s=Pe;Pe|=2;var c=c2(),h=u2();qe!==n||Ee!==r?(Jl=null,Zl=Bn()+500,vr(n,r)):gr=ds(n,r);e:do try{if(Ne!==0&&je!==null){r=je;var b=nn;t:switch(Ne){case 1:Ne=0,nn=null,wr(n,r,b,1);break;case 2:case 9:if(T0(b)){Ne=0,nn=null,f2(r);break}r=function(){Ne!==2&&Ne!==9||qe!==n||(Ne=7),In(n)},b.then(r,r);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:T0(b)?(Ne=0,nn=null,f2(r)):(Ne=0,nn=null,wr(n,r,b,7));break;case 5:var w=null;switch(je.tag){case 26:w=je.memoizedState;case 5:case 27:var T=je;if(!w||K2(w)){Ne=0,nn=null;var O=T.sibling;if(O!==null)je=O;else{var $=T.return;$!==null?(je=$,tc($)):je=null}break t}}Ne=0,nn=null,wr(n,r,b,5);break;case 6:Ne=0,nn=null,wr(n,r,b,6);break;case 8:Lf(),Je=6;break e;default:throw Error(a(462))}}C6();break}catch(W){l2(n,W)}while(!0);return ui=ya=null,H.H=c,H.A=h,Pe=s,je!==null?0:(qe=null,Ee=0,Sl(),Je)}function C6(){for(;je!==null&&!Qw();)d2(je)}function d2(n){var r=B1(n.alternate,n,yi);n.memoizedProps=n.pendingProps,r===null?tc(n):je=r}function f2(n){var r=n,s=r.alternate;switch(r.tag){case 15:case 0:r=O1(s,r,r.pendingProps,r.type,void 0,Ee);break;case 11:r=O1(s,r,r.pendingProps,r.type.render,r.ref,Ee);break;case 5:Xd(r);default:H1(s,r),r=je=p0(r,yi),r=B1(s,r,yi)}n.memoizedProps=n.pendingProps,r===null?tc(n):je=r}function wr(n,r,s,c){ui=ya=null,Xd(r),fr=null,_s=0;var h=r.return;try{if(b6(n,h,r,s,Ee)){Je=1,Fl(n,mn(s,n.current)),je=null;return}}catch(b){if(h!==null)throw je=h,b;Je=1,Fl(n,mn(s,n.current)),je=null;return}r.flags&32768?(Me||c===1?n=!0:gr||(Ee&536870912)!==0?n=!1:(Hi=n=!0,(c===2||c===9||c===3||c===6)&&(c=xn.current,c!==null&&c.tag===13&&(c.flags|=16384))),p2(r,n)):tc(r)}function tc(n){var r=n;do{if((r.flags&32768)!==0){p2(r,Hi);return}n=r.return;var s=x6(r.alternate,r,yi);if(s!==null){je=s;return}if(r=r.sibling,r!==null){je=r;return}je=r=n}while(r!==null);Je===0&&(Je=5)}function p2(n,r){do{var s=v6(n.alternate,n);if(s!==null){s.flags&=32767,je=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(n=n.sibling,n!==null)){je=n;return}je=n=s}while(n!==null);Je=6,je=null}function h2(n,r,s,c,h,b,w,T,O){n.cancelPendingCommit=null;do nc();while(Tt!==0);if((Pe&6)!==0)throw Error(a(327));if(r!==null){if(r===n.current)throw Error(a(177));if(b=r.lanes|r.childLanes,b|=jd,s3(n,s,b,w,T,O),n===qe&&(je=qe=null,Ee=0),yr=r,Ii=n,xr=s,zf=b,Rf=h,a2=c,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,O6(ol,function(){return x2(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||c){c=H.T,H.T=null,h=L.p,L.p=2,w=Pe,Pe|=4;try{w6(n,r,s)}finally{Pe=w,L.p=h,H.T=c}}Tt=1,m2(),g2(),b2()}}function m2(){if(Tt===1){Tt=0;var n=Ii,r=yr,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=H.T,H.T=null;var c=L.p;L.p=2;var h=Pe;Pe|=4;try{W1(r,n);var b=Kf,w=i0(n.containerInfo),T=b.focusedElem,O=b.selectionRange;if(w!==T&&T&&T.ownerDocument&&n0(T.ownerDocument.documentElement,T)){if(O!==null&&xd(T)){var $=O.start,W=O.end;if(W===void 0&&(W=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(W,T.value.length);else{var ee=T.ownerDocument||document,F=ee&&ee.defaultView||window;if(F.getSelection){var K=F.getSelection(),he=T.textContent.length,fe=Math.min(O.start,he),Ge=O.end===void 0?fe:Math.min(O.end,he);!K.extend&&fe>Ge&&(w=Ge,Ge=fe,fe=w);var _=t0(T,fe),N=t0(T,Ge);if(_&&N&&(K.rangeCount!==1||K.anchorNode!==_.node||K.anchorOffset!==_.offset||K.focusNode!==N.node||K.focusOffset!==N.offset)){var I=ee.createRange();I.setStart(_.node,_.offset),K.removeAllRanges(),fe>Ge?(K.addRange(I),K.extend(N.node,N.offset)):(I.setEnd(N.node,N.offset),K.addRange(I))}}}}for(ee=[],K=T;K=K.parentNode;)K.nodeType===1&&ee.push({element:K,left:K.scrollLeft,top:K.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ee.length;T++){var J=ee[T];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}hc=!!Ff,Kf=Ff=null}finally{Pe=h,L.p=c,H.T=s}}n.current=r,Tt=2}}function g2(){if(Tt===2){Tt=0;var n=Ii,r=yr,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=H.T,H.T=null;var c=L.p;L.p=2;var h=Pe;Pe|=4;try{K1(n,r.alternate,r)}finally{Pe=h,L.p=c,H.T=s}}Tt=3}}function b2(){if(Tt===4||Tt===3){Tt=0,Ww();var n=Ii,r=yr,s=xr,c=a2;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Tt=5:(Tt=0,yr=Ii=null,y2(n,n.pendingLanes));var h=n.pendingLanes;if(h===0&&(Ui=null),Zu(s),r=r.stateNode,Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(us,r,void 0,(r.current.flags&128)===128)}catch{}if(c!==null){r=H.T,h=L.p,L.p=2,H.T=null;try{for(var b=n.onRecoverableError,w=0;w<c.length;w++){var T=c[w];b(T.value,{componentStack:T.stack})}}finally{H.T=r,L.p=h}}(xr&3)!==0&&nc(),In(n),h=n.pendingLanes,(s&4194090)!==0&&(h&42)!==0?n===Of?Ys++:(Ys=0,Of=n):Ys=0,Xs(0)}}function y2(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Cs(r)))}function nc(n){return m2(),g2(),b2(),x2()}function x2(){if(Tt!==5)return!1;var n=Ii,r=zf;zf=0;var s=Zu(xr),c=H.T,h=L.p;try{L.p=32>s?32:s,H.T=null,s=Rf,Rf=null;var b=Ii,w=xr;if(Tt=0,yr=Ii=null,xr=0,(Pe&6)!==0)throw Error(a(331));var T=Pe;if(Pe|=4,n2(b.current),J1(b,b.current,w,s),Pe=T,Xs(0,!1),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(us,b)}catch{}return!0}finally{L.p=h,H.T=c,y2(n,r)}}function v2(n,r,s){r=mn(s,r),r=uf(n.stateNode,r,2),n=Li(n,r,2),n!==null&&(fs(n,2),In(n))}function Ue(n,r,s){if(n.tag===3)v2(n,n,s);else for(;r!==null;){if(r.tag===3){v2(r,n,s);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ui===null||!Ui.has(c))){n=mn(s,n),s=j1(2),c=Li(r,s,2),c!==null&&(k1(s,c,r,n),fs(c,2),In(c));break}}r=r.return}}function Nf(n,r,s){var c=n.pingCache;if(c===null){c=n.pingCache=new j6;var h=new Set;c.set(r,h)}else h=c.get(r),h===void 0&&(h=new Set,c.set(r,h));h.has(s)||(Ef=!0,h.add(s),n=M6.bind(null,n,r,s),r.then(n,n))}function M6(n,r,s){var c=n.pingCache;c!==null&&c.delete(r),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,qe===n&&(Ee&s)===s&&(Je===4||Je===3&&(Ee&62914560)===Ee&&300>Bn()-Mf?(Pe&2)===0&&vr(n,0):Af|=s,br===Ee&&(br=0)),In(n)}function w2(n,r){r===0&&(r=bg()),n=nr(n,r),n!==null&&(fs(n,r),In(n))}function z6(n){var r=n.memoizedState,s=0;r!==null&&(s=r.retryLane),w2(n,s)}function R6(n,r){var s=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(s=h.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(a(314))}c!==null&&c.delete(r),w2(n,s)}function O6(n,r){return Yu(n,r)}var ic=null,Sr=null,Vf=!1,ac=!1,Bf=!1,ka=0;function In(n){n!==Sr&&n.next===null&&(Sr===null?ic=Sr=n:Sr=Sr.next=n),ac=!0,Vf||(Vf=!0,D6())}function Xs(n,r){if(!Bf&&ac){Bf=!0;do for(var s=!1,c=ic;c!==null;){if(n!==0){var h=c.pendingLanes;if(h===0)var b=0;else{var w=c.suspendedLanes,T=c.pingedLanes;b=(1<<31-Wt(42|n)+1)-1,b&=h&~(w&~T),b=b&201326741?b&201326741|1:b?b|2:0}b!==0&&(s=!0,k2(c,b))}else b=Ee,b=ul(c,c===qe?b:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(b&3)===0||ds(c,b)||(s=!0,k2(c,b));c=c.next}while(s);Bf=!1}}function L6(){S2()}function S2(){ac=Vf=!1;var n=0;ka!==0&&(U6()&&(n=ka),ka=0);for(var r=Bn(),s=null,c=ic;c!==null;){var h=c.next,b=T2(c,r);b===0?(c.next=null,s===null?ic=h:s.next=h,h===null&&(Sr=s)):(s=c,(n!==0||(b&3)!==0)&&(ac=!0)),c=h}Xs(n)}function T2(n,r){for(var s=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,b=n.pendingLanes&-62914561;0<b;){var w=31-Wt(b),T=1<<w,O=h[w];O===-1?((T&s)===0||(T&c)!==0)&&(h[w]=r3(T,r)):O<=r&&(n.expiredLanes|=T),b&=~T}if(r=qe,s=Ee,s=ul(n,n===r?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,s===0||n===r&&(Ne===2||Ne===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&Xu(c),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||ds(n,s)){if(r=s&-s,r===n.callbackPriority)return r;switch(c!==null&&Xu(c),Zu(s)){case 2:case 8:s=hg;break;case 32:s=ol;break;case 268435456:s=mg;break;default:s=ol}return c=j2.bind(null,n),s=Yu(s,c),n.callbackPriority=r,n.callbackNode=s,r}return c!==null&&c!==null&&Xu(c),n.callbackPriority=2,n.callbackNode=null,2}function j2(n,r){if(Tt!==0&&Tt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(nc()&&n.callbackNode!==s)return null;var c=Ee;return c=ul(n,n===qe?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(s2(n,c,r),T2(n,Bn()),n.callbackNode!=null&&n.callbackNode===s?j2.bind(null,n):null)}function k2(n,r){if(nc())return null;s2(n,r,!0)}function D6(){$6(function(){(Pe&6)!==0?Yu(pg,L6):S2()})}function _f(){return ka===0&&(ka=gg()),ka}function E2(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:ml(""+n)}function A2(n,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,n.id&&s.setAttribute("form",n.id),r.parentNode.insertBefore(s,r),n=new FormData(n),s.parentNode.removeChild(s),n}function P6(n,r,s,c,h){if(r==="submit"&&s&&s.stateNode===h){var b=E2((h[Bt]||null).action),w=c.submitter;w&&(r=(r=w[Bt]||null)?E2(r.formAction):w.getAttribute("formAction"),r!==null&&(b=r,w=null));var T=new xl("action","action",null,c,h);n.push({event:T,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(ka!==0){var O=w?A2(h,w):new FormData(h);rf(s,{pending:!0,data:O,method:h.method,action:b},null,O)}}else typeof b=="function"&&(T.preventDefault(),O=w?A2(h,w):new FormData(h),rf(s,{pending:!0,data:O,method:h.method,action:b},b,O))},currentTarget:h}]})}}for(var Hf=0;Hf<Td.length;Hf++){var Gf=Td[Hf],N6=Gf.toLowerCase(),V6=Gf[0].toUpperCase()+Gf.slice(1);En(N6,"on"+V6)}En(s0,"onAnimationEnd"),En(o0,"onAnimationIteration"),En(l0,"onAnimationStart"),En("dblclick","onDoubleClick"),En("focusin","onFocus"),En("focusout","onBlur"),En(e6,"onTransitionRun"),En(t6,"onTransitionStart"),En(n6,"onTransitionCancel"),En(c0,"onTransitionEnd"),Fa("onMouseEnter",["mouseout","mouseover"]),Fa("onMouseLeave",["mouseout","mouseover"]),Fa("onPointerEnter",["pointerout","pointerover"]),Fa("onPointerLeave",["pointerout","pointerover"]),ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B6=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qs));function C2(n,r){r=(r&4)!==0;for(var s=0;s<n.length;s++){var c=n[s],h=c.event;c=c.listeners;e:{var b=void 0;if(r)for(var w=c.length-1;0<=w;w--){var T=c[w],O=T.instance,$=T.currentTarget;if(T=T.listener,O!==b&&h.isPropagationStopped())break e;b=T,h.currentTarget=$;try{b(h)}catch(W){ql(W)}h.currentTarget=null,b=O}else for(w=0;w<c.length;w++){if(T=c[w],O=T.instance,$=T.currentTarget,T=T.listener,O!==b&&h.isPropagationStopped())break e;b=T,h.currentTarget=$;try{b(h)}catch(W){ql(W)}h.currentTarget=null,b=O}}}}function ke(n,r){var s=r[Ju];s===void 0&&(s=r[Ju]=new Set);var c=n+"__bubble";s.has(c)||(M2(r,n,2,!1),s.add(c))}function Uf(n,r,s){var c=0;r&&(c|=4),M2(s,n,c,r)}var rc="_reactListening"+Math.random().toString(36).slice(2);function If(n){if(!n[rc]){n[rc]=!0,Sg.forEach(function(s){s!=="selectionchange"&&(B6.has(s)||Uf(s,!1,n),Uf(s,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[rc]||(r[rc]=!0,Uf("selectionchange",!1,r))}}function M2(n,r,s,c){switch(J2(r)){case 2:var h=dS;break;case 8:h=fS;break;default:h=ip}s=h.bind(null,r,s,n),h=void 0,!ud||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(r,s,{capture:!0,passive:h}):n.addEventListener(r,s,!0):h!==void 0?n.addEventListener(r,s,{passive:h}):n.addEventListener(r,s,!1)}function $f(n,r,s,c,h){var b=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var T=c.stateNode.containerInfo;if(T===h)break;if(w===4)for(w=c.return;w!==null;){var O=w.tag;if((O===3||O===4)&&w.stateNode.containerInfo===h)return;w=w.return}for(;T!==null;){if(w=Ia(T),w===null)return;if(O=w.tag,O===5||O===6||O===26||O===27){c=b=w;continue e}T=T.parentNode}}c=c.return}Ng(function(){var $=b,W=ld(s),ee=[];e:{var F=u0.get(n);if(F!==void 0){var K=xl,he=n;switch(n){case"keypress":if(bl(s)===0)break e;case"keydown":case"keyup":K=O3;break;case"focusin":he="focus",K=hd;break;case"focusout":he="blur",K=hd;break;case"beforeblur":case"afterblur":K=hd;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=_g;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=v3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=P3;break;case s0:case o0:case l0:K=T3;break;case c0:K=V3;break;case"scroll":case"scrollend":K=y3;break;case"wheel":K=_3;break;case"copy":case"cut":case"paste":K=k3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=Gg;break;case"toggle":case"beforetoggle":K=G3}var fe=(r&4)!==0,Ge=!fe&&(n==="scroll"||n==="scrollend"),_=fe?F!==null?F+"Capture":null:F;fe=[];for(var N=$,I;N!==null;){var J=N;if(I=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||I===null||_===null||(J=ms(N,_),J!=null&&fe.push(Ws(N,J,I))),Ge)break;N=N.return}0<fe.length&&(F=new K(F,he,null,s,W),ee.push({event:F,listeners:fe}))}}if((r&7)===0){e:{if(F=n==="mouseover"||n==="pointerover",K=n==="mouseout"||n==="pointerout",F&&s!==od&&(he=s.relatedTarget||s.fromElement)&&(Ia(he)||he[Ua]))break e;if((K||F)&&(F=W.window===W?W:(F=W.ownerDocument)?F.defaultView||F.parentWindow:window,K?(he=s.relatedTarget||s.toElement,K=$,he=he?Ia(he):null,he!==null&&(Ge=l(he),fe=he.tag,he!==Ge||fe!==5&&fe!==27&&fe!==6)&&(he=null)):(K=null,he=$),K!==he)){if(fe=_g,J="onMouseLeave",_="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(fe=Gg,J="onPointerLeave",_="onPointerEnter",N="pointer"),Ge=K==null?F:hs(K),I=he==null?F:hs(he),F=new fe(J,N+"leave",K,s,W),F.target=Ge,F.relatedTarget=I,J=null,Ia(W)===$&&(fe=new fe(_,N+"enter",he,s,W),fe.target=I,fe.relatedTarget=Ge,J=fe),Ge=J,K&&he)t:{for(fe=K,_=he,N=0,I=fe;I;I=Tr(I))N++;for(I=0,J=_;J;J=Tr(J))I++;for(;0<N-I;)fe=Tr(fe),N--;for(;0<I-N;)_=Tr(_),I--;for(;N--;){if(fe===_||_!==null&&fe===_.alternate)break t;fe=Tr(fe),_=Tr(_)}fe=null}else fe=null;K!==null&&z2(ee,F,K,fe,!1),he!==null&&Ge!==null&&z2(ee,Ge,he,fe,!0)}}e:{if(F=$?hs($):window,K=F.nodeName&&F.nodeName.toLowerCase(),K==="select"||K==="input"&&F.type==="file")var re=Xg;else if(Kg(F))if(Qg)re=W3;else{re=X3;var Te=Y3}else K=F.nodeName,!K||K.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?$&&sd($.elementType)&&(re=Xg):re=Q3;if(re&&(re=re(n,$))){Yg(ee,re,s,W);break e}Te&&Te(n,F,$),n==="focusout"&&$&&F.type==="number"&&$.memoizedProps.value!=null&&rd(F,"number",F.value)}switch(Te=$?hs($):window,n){case"focusin":(Kg(Te)||Te.contentEditable==="true")&&(Ja=Te,vd=$,Ts=null);break;case"focusout":Ts=vd=Ja=null;break;case"mousedown":wd=!0;break;case"contextmenu":case"mouseup":case"dragend":wd=!1,a0(ee,s,W);break;case"selectionchange":if(J3)break;case"keydown":case"keyup":a0(ee,s,W)}var oe;if(gd)e:{switch(n){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else Za?qg(n,s)&&(pe="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(pe="onCompositionStart");pe&&(Ug&&s.locale!=="ko"&&(Za||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&Za&&(oe=Vg()):(Mi=W,dd="value"in Mi?Mi.value:Mi.textContent,Za=!0)),Te=sc($,pe),0<Te.length&&(pe=new Hg(pe,n,null,s,W),ee.push({event:pe,listeners:Te}),oe?pe.data=oe:(oe=Fg(s),oe!==null&&(pe.data=oe)))),(oe=I3?$3(n,s):q3(n,s))&&(pe=sc($,"onBeforeInput"),0<pe.length&&(Te=new Hg("onBeforeInput","beforeinput",null,s,W),ee.push({event:Te,listeners:pe}),Te.data=oe)),P6(ee,n,$,s,W)}C2(ee,r)})}function Ws(n,r,s){return{instance:n,listener:r,currentTarget:s}}function sc(n,r){for(var s=r+"Capture",c=[];n!==null;){var h=n,b=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||b===null||(h=ms(n,s),h!=null&&c.unshift(Ws(n,h,b)),h=ms(n,r),h!=null&&c.push(Ws(n,h,b))),n.tag===3)return c;n=n.return}return[]}function Tr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function z2(n,r,s,c,h){for(var b=r._reactName,w=[];s!==null&&s!==c;){var T=s,O=T.alternate,$=T.stateNode;if(T=T.tag,O!==null&&O===c)break;T!==5&&T!==26&&T!==27||$===null||(O=$,h?($=ms(s,b),$!=null&&w.unshift(Ws(s,$,O))):h||($=ms(s,b),$!=null&&w.push(Ws(s,$,O)))),s=s.return}w.length!==0&&n.push({event:r,listeners:w})}var _6=/\r\n?/g,H6=/\u0000|\uFFFD/g;function R2(n){return(typeof n=="string"?n:""+n).replace(_6,`
`).replace(H6,"")}function O2(n,r){return r=R2(r),R2(n)===r}function oc(){}function He(n,r,s,c,h,b){switch(s){case"children":typeof c=="string"?r==="body"||r==="textarea"&&c===""||Xa(n,c):(typeof c=="number"||typeof c=="bigint")&&r!=="body"&&Xa(n,""+c);break;case"className":fl(n,"class",c);break;case"tabIndex":fl(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":fl(n,s,c);break;case"style":Dg(n,c,b);break;case"data":if(r!=="object"){fl(n,"data",c);break}case"src":case"href":if(c===""&&(r!=="a"||s!=="href")){n.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=ml(""+c),n.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof b=="function"&&(s==="formAction"?(r!=="input"&&He(n,r,"name",h.name,h,null),He(n,r,"formEncType",h.formEncType,h,null),He(n,r,"formMethod",h.formMethod,h,null),He(n,r,"formTarget",h.formTarget,h,null)):(He(n,r,"encType",h.encType,h,null),He(n,r,"method",h.method,h,null),He(n,r,"target",h.target,h,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=ml(""+c),n.setAttribute(s,c);break;case"onClick":c!=null&&(n.onclick=oc);break;case"onScroll":c!=null&&ke("scroll",n);break;case"onScrollEnd":c!=null&&ke("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}s=ml(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""+c):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":c===!0?n.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,c):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(s,c):n.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(s):n.setAttribute(s,c);break;case"popover":ke("beforetoggle",n),ke("toggle",n),dl(n,"popover",c);break;case"xlinkActuate":ri(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":ri(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":ri(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":ri(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":ri(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":ri(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":ri(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":ri(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":ri(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":dl(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=g3.get(s)||s,dl(n,s,c))}}function qf(n,r,s,c,h,b){switch(s){case"style":Dg(n,c,b);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"children":typeof c=="string"?Xa(n,c):(typeof c=="number"||typeof c=="bigint")&&Xa(n,""+c);break;case"onScroll":c!=null&&ke("scroll",n);break;case"onScrollEnd":c!=null&&ke("scrollend",n);break;case"onClick":c!=null&&(n.onclick=oc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tg.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),r=s.slice(2,h?s.length-7:void 0),b=n[Bt]||null,b=b!=null?b[s]:null,typeof b=="function"&&n.removeEventListener(r,b,h),typeof c=="function")){typeof b!="function"&&b!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(r,c,h);break e}s in n?n[s]=c:c===!0?n.setAttribute(s,""):dl(n,s,c)}}}function jt(n,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ke("error",n),ke("load",n);var c=!1,h=!1,b;for(b in s)if(s.hasOwnProperty(b)){var w=s[b];if(w!=null)switch(b){case"src":c=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:He(n,r,b,w,s,null)}}h&&He(n,r,"srcSet",s.srcSet,s,null),c&&He(n,r,"src",s.src,s,null);return;case"input":ke("invalid",n);var T=b=w=h=null,O=null,$=null;for(c in s)if(s.hasOwnProperty(c)){var W=s[c];if(W!=null)switch(c){case"name":h=W;break;case"type":w=W;break;case"checked":O=W;break;case"defaultChecked":$=W;break;case"value":b=W;break;case"defaultValue":T=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(a(137,r));break;default:He(n,r,c,W,s,null)}}zg(n,b,T,O,$,w,h,!1),pl(n);return;case"select":ke("invalid",n),c=w=b=null;for(h in s)if(s.hasOwnProperty(h)&&(T=s[h],T!=null))switch(h){case"value":b=T;break;case"defaultValue":w=T;break;case"multiple":c=T;default:He(n,r,h,T,s,null)}r=b,s=w,n.multiple=!!c,r!=null?Ya(n,!!c,r,!1):s!=null&&Ya(n,!!c,s,!0);return;case"textarea":ke("invalid",n),b=h=c=null;for(w in s)if(s.hasOwnProperty(w)&&(T=s[w],T!=null))switch(w){case"value":c=T;break;case"defaultValue":h=T;break;case"children":b=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:He(n,r,w,T,s,null)}Og(n,c,h,b),pl(n);return;case"option":for(O in s)if(s.hasOwnProperty(O)&&(c=s[O],c!=null))switch(O){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:He(n,r,O,c,s,null)}return;case"dialog":ke("beforetoggle",n),ke("toggle",n),ke("cancel",n),ke("close",n);break;case"iframe":case"object":ke("load",n);break;case"video":case"audio":for(c=0;c<Qs.length;c++)ke(Qs[c],n);break;case"image":ke("error",n),ke("load",n);break;case"details":ke("toggle",n);break;case"embed":case"source":case"link":ke("error",n),ke("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in s)if(s.hasOwnProperty($)&&(c=s[$],c!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:He(n,r,$,c,s,null)}return;default:if(sd(r)){for(W in s)s.hasOwnProperty(W)&&(c=s[W],c!==void 0&&qf(n,r,W,c,s,void 0));return}}for(T in s)s.hasOwnProperty(T)&&(c=s[T],c!=null&&He(n,r,T,c,s,null))}function G6(n,r,s,c){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,b=null,w=null,T=null,O=null,$=null,W=null;for(K in s){var ee=s[K];if(s.hasOwnProperty(K)&&ee!=null)switch(K){case"checked":break;case"value":break;case"defaultValue":O=ee;default:c.hasOwnProperty(K)||He(n,r,K,null,c,ee)}}for(var F in c){var K=c[F];if(ee=s[F],c.hasOwnProperty(F)&&(K!=null||ee!=null))switch(F){case"type":b=K;break;case"name":h=K;break;case"checked":$=K;break;case"defaultChecked":W=K;break;case"value":w=K;break;case"defaultValue":T=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(a(137,r));break;default:K!==ee&&He(n,r,F,K,c,ee)}}ad(n,w,T,O,$,W,b,h);return;case"select":K=w=T=F=null;for(b in s)if(O=s[b],s.hasOwnProperty(b)&&O!=null)switch(b){case"value":break;case"multiple":K=O;default:c.hasOwnProperty(b)||He(n,r,b,null,c,O)}for(h in c)if(b=c[h],O=s[h],c.hasOwnProperty(h)&&(b!=null||O!=null))switch(h){case"value":F=b;break;case"defaultValue":T=b;break;case"multiple":w=b;default:b!==O&&He(n,r,h,b,c,O)}r=T,s=w,c=K,F!=null?Ya(n,!!s,F,!1):!!c!=!!s&&(r!=null?Ya(n,!!s,r,!0):Ya(n,!!s,s?[]:"",!1));return;case"textarea":K=F=null;for(T in s)if(h=s[T],s.hasOwnProperty(T)&&h!=null&&!c.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:He(n,r,T,null,c,h)}for(w in c)if(h=c[w],b=s[w],c.hasOwnProperty(w)&&(h!=null||b!=null))switch(w){case"value":F=h;break;case"defaultValue":K=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==b&&He(n,r,w,h,c,b)}Rg(n,F,K);return;case"option":for(var he in s)if(F=s[he],s.hasOwnProperty(he)&&F!=null&&!c.hasOwnProperty(he))switch(he){case"selected":n.selected=!1;break;default:He(n,r,he,null,c,F)}for(O in c)if(F=c[O],K=s[O],c.hasOwnProperty(O)&&F!==K&&(F!=null||K!=null))switch(O){case"selected":n.selected=F&&typeof F!="function"&&typeof F!="symbol";break;default:He(n,r,O,F,c,K)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in s)F=s[fe],s.hasOwnProperty(fe)&&F!=null&&!c.hasOwnProperty(fe)&&He(n,r,fe,null,c,F);for($ in c)if(F=c[$],K=s[$],c.hasOwnProperty($)&&F!==K&&(F!=null||K!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(a(137,r));break;default:He(n,r,$,F,c,K)}return;default:if(sd(r)){for(var Ge in s)F=s[Ge],s.hasOwnProperty(Ge)&&F!==void 0&&!c.hasOwnProperty(Ge)&&qf(n,r,Ge,void 0,c,F);for(W in c)F=c[W],K=s[W],!c.hasOwnProperty(W)||F===K||F===void 0&&K===void 0||qf(n,r,W,F,c,K);return}}for(var _ in s)F=s[_],s.hasOwnProperty(_)&&F!=null&&!c.hasOwnProperty(_)&&He(n,r,_,null,c,F);for(ee in c)F=c[ee],K=s[ee],!c.hasOwnProperty(ee)||F===K||F==null&&K==null||He(n,r,ee,F,c,K)}var Ff=null,Kf=null;function lc(n){return n.nodeType===9?n:n.ownerDocument}function L2(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function D2(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function Yf(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Xf=null;function U6(){var n=window.event;return n&&n.type==="popstate"?n===Xf?!1:(Xf=n,!0):(Xf=null,!1)}var P2=typeof setTimeout=="function"?setTimeout:void 0,I6=typeof clearTimeout=="function"?clearTimeout:void 0,N2=typeof Promise=="function"?Promise:void 0,$6=typeof queueMicrotask=="function"?queueMicrotask:typeof N2<"u"?function(n){return N2.resolve(null).then(n).catch(q6)}:P2;function q6(n){setTimeout(function(){throw n})}function qi(n){return n==="head"}function V2(n,r){var s=r,c=0,h=0;do{var b=s.nextSibling;if(n.removeChild(s),b&&b.nodeType===8)if(s=b.data,s==="/$"){if(0<c&&8>c){s=c;var w=n.ownerDocument;if(s&1&&Zs(w.documentElement),s&2&&Zs(w.body),s&4)for(s=w.head,Zs(s),w=s.firstChild;w;){var T=w.nextSibling,O=w.nodeName;w[ps]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&w.rel.toLowerCase()==="stylesheet"||s.removeChild(w),w=T}}if(h===0){n.removeChild(b),so(r);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:c=s.charCodeAt(0)-48;else c=0;s=b}while(s);so(r)}function Qf(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Qf(s),ed(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function F6(n,r,s,c){for(;n.nodeType===1;){var h=s;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[ps])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(b=n.getAttribute("rel"),b==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(b!==h.rel||n.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(b=n.getAttribute("src"),(b!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&b&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var b=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===b)return n}else return n;if(n=Cn(n.nextSibling),n===null)break}return null}function K6(n,r,s){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=Cn(n.nextSibling),n===null))return null;return n}function Wf(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function Y6(n,r){var s=n.ownerDocument;if(n.data!=="$?"||s.readyState==="complete")r();else{var c=function(){r(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function Cn(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}var Zf=null;function B2(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return n;r--}else s==="/$"&&r++}n=n.previousSibling}return null}function _2(n,r,s){switch(r=lc(s),n){case"html":if(n=r.documentElement,!n)throw Error(a(452));return n;case"head":if(n=r.head,!n)throw Error(a(453));return n;case"body":if(n=r.body,!n)throw Error(a(454));return n;default:throw Error(a(451))}}function Zs(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);ed(n)}var wn=new Map,H2=new Set;function cc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var xi=L.d;L.d={f:X6,r:Q6,D:W6,C:Z6,L:J6,m:eS,X:nS,S:tS,M:iS};function X6(){var n=xi.f(),r=ec();return n||r}function Q6(n){var r=$a(n);r!==null&&r.tag===5&&r.type==="form"?s1(r):xi.r(n)}var jr=typeof document>"u"?null:document;function G2(n,r,s){var c=jr;if(c&&typeof r=="string"&&r){var h=hn(r);h='link[rel="'+n+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),H2.has(h)||(H2.add(h),n={rel:n,crossOrigin:s,href:r},c.querySelector(h)===null&&(r=c.createElement("link"),jt(r,"link",n),ht(r),c.head.appendChild(r)))}}function W6(n){xi.D(n),G2("dns-prefetch",n,null)}function Z6(n,r){xi.C(n,r),G2("preconnect",n,r)}function J6(n,r,s){xi.L(n,r,s);var c=jr;if(c&&n&&r){var h='link[rel="preload"][as="'+hn(r)+'"]';r==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+hn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+hn(s.imageSizes)+'"]')):h+='[href="'+hn(n)+'"]';var b=h;switch(r){case"style":b=kr(n);break;case"script":b=Er(n)}wn.has(b)||(n=g({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:n,as:r},s),wn.set(b,n),c.querySelector(h)!==null||r==="style"&&c.querySelector(Js(b))||r==="script"&&c.querySelector(eo(b))||(r=c.createElement("link"),jt(r,"link",n),ht(r),c.head.appendChild(r)))}}function eS(n,r){xi.m(n,r);var s=jr;if(s&&n){var c=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+hn(c)+'"][href="'+hn(n)+'"]',b=h;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":b=Er(n)}if(!wn.has(b)&&(n=g({rel:"modulepreload",href:n},r),wn.set(b,n),s.querySelector(h)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(eo(b)))return}c=s.createElement("link"),jt(c,"link",n),ht(c),s.head.appendChild(c)}}}function tS(n,r,s){xi.S(n,r,s);var c=jr;if(c&&n){var h=qa(c).hoistableStyles,b=kr(n);r=r||"default";var w=h.get(b);if(!w){var T={loading:0,preload:null};if(w=c.querySelector(Js(b)))T.loading=5;else{n=g({rel:"stylesheet",href:n,"data-precedence":r},s),(s=wn.get(b))&&Jf(n,s);var O=w=c.createElement("link");ht(O),jt(O,"link",n),O._p=new Promise(function($,W){O.onload=$,O.onerror=W}),O.addEventListener("load",function(){T.loading|=1}),O.addEventListener("error",function(){T.loading|=2}),T.loading|=4,uc(w,r,c)}w={type:"stylesheet",instance:w,count:1,state:T},h.set(b,w)}}}function nS(n,r){xi.X(n,r);var s=jr;if(s&&n){var c=qa(s).hoistableScripts,h=Er(n),b=c.get(h);b||(b=s.querySelector(eo(h)),b||(n=g({src:n,async:!0},r),(r=wn.get(h))&&ep(n,r),b=s.createElement("script"),ht(b),jt(b,"link",n),s.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},c.set(h,b))}}function iS(n,r){xi.M(n,r);var s=jr;if(s&&n){var c=qa(s).hoistableScripts,h=Er(n),b=c.get(h);b||(b=s.querySelector(eo(h)),b||(n=g({src:n,async:!0,type:"module"},r),(r=wn.get(h))&&ep(n,r),b=s.createElement("script"),ht(b),jt(b,"link",n),s.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},c.set(h,b))}}function U2(n,r,s,c){var h=(h=de.current)?cc(h):null;if(!h)throw Error(a(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=kr(s.href),s=qa(h).hoistableStyles,c=s.get(r),c||(c={type:"style",instance:null,count:0,state:null},s.set(r,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=kr(s.href);var b=qa(h).hoistableStyles,w=b.get(n);if(w||(h=h.ownerDocument||h,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},b.set(n,w),(b=h.querySelector(Js(n)))&&!b._p&&(w.instance=b,w.state.loading=5),wn.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},wn.set(n,s),b||aS(h,n,s,w.state))),r&&c===null)throw Error(a(528,""));return w}if(r&&c!==null)throw Error(a(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Er(s),s=qa(h).hoistableScripts,c=s.get(r),c||(c={type:"script",instance:null,count:0,state:null},s.set(r,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,n))}}function kr(n){return'href="'+hn(n)+'"'}function Js(n){return'link[rel="stylesheet"]['+n+"]"}function I2(n){return g({},n,{"data-precedence":n.precedence,precedence:null})}function aS(n,r,s,c){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?c.loading=1:(r=n.createElement("link"),c.preload=r,r.addEventListener("load",function(){return c.loading|=1}),r.addEventListener("error",function(){return c.loading|=2}),jt(r,"link",s),ht(r),n.head.appendChild(r))}function Er(n){return'[src="'+hn(n)+'"]'}function eo(n){return"script[async]"+n}function $2(n,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var c=n.querySelector('style[data-href~="'+hn(s.href)+'"]');if(c)return r.instance=c,ht(c),c;var h=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),ht(c),jt(c,"style",h),uc(c,s.precedence,n),r.instance=c;case"stylesheet":h=kr(s.href);var b=n.querySelector(Js(h));if(b)return r.state.loading|=4,r.instance=b,ht(b),b;c=I2(s),(h=wn.get(h))&&Jf(c,h),b=(n.ownerDocument||n).createElement("link"),ht(b);var w=b;return w._p=new Promise(function(T,O){w.onload=T,w.onerror=O}),jt(b,"link",c),r.state.loading|=4,uc(b,s.precedence,n),r.instance=b;case"script":return b=Er(s.src),(h=n.querySelector(eo(b)))?(r.instance=h,ht(h),h):(c=s,(h=wn.get(b))&&(c=g({},s),ep(c,h)),n=n.ownerDocument||n,h=n.createElement("script"),ht(h),jt(h,"link",c),n.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(c=r.instance,r.state.loading|=4,uc(c,s.precedence,n));return r.instance}function uc(n,r,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=c.length?c[c.length-1]:null,b=h,w=0;w<c.length;w++){var T=c[w];if(T.dataset.precedence===r)b=T;else if(b!==h)break}b?b.parentNode.insertBefore(n,b.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(n,r.firstChild))}function Jf(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function ep(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var dc=null;function q2(n,r,s){if(dc===null){var c=new Map,h=dc=new Map;h.set(s,c)}else h=dc,c=h.get(s),c||(c=new Map,h.set(s,c));if(c.has(n))return c;for(c.set(n,null),s=s.getElementsByTagName(n),h=0;h<s.length;h++){var b=s[h];if(!(b[ps]||b[Mt]||n==="link"&&b.getAttribute("rel")==="stylesheet")&&b.namespaceURI!=="http://www.w3.org/2000/svg"){var w=b.getAttribute(r)||"";w=n+w;var T=c.get(w);T?T.push(b):c.set(w,[b])}}return c}function F2(n,r,s){n=n.ownerDocument||n,n.head.insertBefore(s,r==="title"?n.querySelector("head > title"):null)}function rS(n,r,s){if(s===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function K2(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var to=null;function sS(){}function oS(n,r,s){if(to===null)throw Error(a(475));var c=to;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=kr(s.href),b=n.querySelector(Js(h));if(b){n=b._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=fc.bind(c),n.then(c,c)),r.state.loading|=4,r.instance=b,ht(b);return}b=n.ownerDocument||n,s=I2(s),(h=wn.get(h))&&Jf(s,h),b=b.createElement("link"),ht(b);var w=b;w._p=new Promise(function(T,O){w.onload=T,w.onerror=O}),jt(b,"link",s),r.instance=b}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(c.count++,r=fc.bind(c),n.addEventListener("load",r),n.addEventListener("error",r))}}function lS(){if(to===null)throw Error(a(475));var n=to;return n.stylesheets&&n.count===0&&tp(n,n.stylesheets),0<n.count?function(r){var s=setTimeout(function(){if(n.stylesheets&&tp(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(s)}}:null}function fc(){if(this.count--,this.count===0){if(this.stylesheets)tp(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var pc=null;function tp(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,pc=new Map,r.forEach(cS,n),pc=null,fc.call(n))}function cS(n,r){if(!(r.state.loading&4)){var s=pc.get(n);if(s)var c=s.get(null);else{s=new Map,pc.set(n,s);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),b=0;b<h.length;b++){var w=h[b];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(s.set(w.dataset.precedence,w),c=w)}c&&s.set(null,c)}h=r.instance,w=h.getAttribute("data-precedence"),b=s.get(w)||c,b===c&&s.set(null,h),s.set(w,h),this.count++,c=fc.bind(this),h.addEventListener("load",c),h.addEventListener("error",c),b?b.parentNode.insertBefore(h,b.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),r.state.loading|=4}}var no={$$typeof:A,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function uS(n,r,s,c,h,b,w,T){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qu(0),this.hiddenUpdates=Qu(null),this.identifierPrefix=c,this.onUncaughtError=h,this.onCaughtError=b,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Y2(n,r,s,c,h,b,w,T,O,$,W,ee){return n=new uS(n,r,s,w,T,O,$,ee),r=1,b===!0&&(r|=24),b=Jt(3,null,null,r),n.current=b,b.stateNode=n,r=Pd(),r.refCount++,n.pooledCache=r,r.refCount++,b.memoizedState={element:c,isDehydrated:s,cache:r},_d(b),n}function X2(n){return n?(n=ir,n):ir}function Q2(n,r,s,c,h,b){h=X2(h),c.context===null?c.context=h:c.pendingContext=h,c=Oi(r),c.payload={element:s},b=b===void 0?null:b,b!==null&&(c.callback=b),s=Li(n,c,r),s!==null&&(rn(s,n,r),Os(s,n,r))}function W2(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<r?s:r}}function np(n,r){W2(n,r),(n=n.alternate)&&W2(n,r)}function Z2(n){if(n.tag===13){var r=nr(n,67108864);r!==null&&rn(r,n,67108864),np(n,67108864)}}var hc=!0;function dS(n,r,s,c){var h=H.T;H.T=null;var b=L.p;try{L.p=2,ip(n,r,s,c)}finally{L.p=b,H.T=h}}function fS(n,r,s,c){var h=H.T;H.T=null;var b=L.p;try{L.p=8,ip(n,r,s,c)}finally{L.p=b,H.T=h}}function ip(n,r,s,c){if(hc){var h=ap(c);if(h===null)$f(n,r,c,mc,s),eb(n,c);else if(hS(h,n,r,s,c))c.stopPropagation();else if(eb(n,c),r&4&&-1<pS.indexOf(n)){for(;h!==null;){var b=$a(h);if(b!==null)switch(b.tag){case 3:if(b=b.stateNode,b.current.memoizedState.isDehydrated){var w=la(b.pendingLanes);if(w!==0){var T=b;for(T.pendingLanes|=2,T.entangledLanes|=2;w;){var O=1<<31-Wt(w);T.entanglements[1]|=O,w&=~O}In(b),(Pe&6)===0&&(Zl=Bn()+500,Xs(0))}}break;case 13:T=nr(b,2),T!==null&&rn(T,b,2),ec(),np(b,2)}if(b=ap(c),b===null&&$f(n,r,c,mc,s),b===h)break;h=b}h!==null&&c.stopPropagation()}else $f(n,r,c,null,s)}}function ap(n){return n=ld(n),rp(n)}var mc=null;function rp(n){if(mc=null,n=Ia(n),n!==null){var r=l(n);if(r===null)n=null;else{var s=r.tag;if(s===13){if(n=u(r),n!==null)return n;n=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return mc=n,null}function J2(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zw()){case pg:return 2;case hg:return 8;case ol:case Jw:return 32;case mg:return 268435456;default:return 32}default:return 32}}var sp=!1,Fi=null,Ki=null,Yi=null,io=new Map,ao=new Map,Xi=[],pS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function eb(n,r){switch(n){case"focusin":case"focusout":Fi=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":io.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(r.pointerId)}}function ro(n,r,s,c,h,b){return n===null||n.nativeEvent!==b?(n={blockedOn:r,domEventName:s,eventSystemFlags:c,nativeEvent:b,targetContainers:[h]},r!==null&&(r=$a(r),r!==null&&Z2(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function hS(n,r,s,c,h){switch(r){case"focusin":return Fi=ro(Fi,n,r,s,c,h),!0;case"dragenter":return Ki=ro(Ki,n,r,s,c,h),!0;case"mouseover":return Yi=ro(Yi,n,r,s,c,h),!0;case"pointerover":var b=h.pointerId;return io.set(b,ro(io.get(b)||null,n,r,s,c,h)),!0;case"gotpointercapture":return b=h.pointerId,ao.set(b,ro(ao.get(b)||null,n,r,s,c,h)),!0}return!1}function tb(n){var r=Ia(n.target);if(r!==null){var s=l(r);if(s!==null){if(r=s.tag,r===13){if(r=u(s),r!==null){n.blockedOn=r,o3(n.priority,function(){if(s.tag===13){var c=an();c=Wu(c);var h=nr(s,c);h!==null&&rn(h,s,c),np(s,c)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function gc(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var s=ap(n.nativeEvent);if(s===null){s=n.nativeEvent;var c=new s.constructor(s.type,s);od=c,s.target.dispatchEvent(c),od=null}else return r=$a(s),r!==null&&Z2(r),n.blockedOn=s,!1;r.shift()}return!0}function nb(n,r,s){gc(n)&&s.delete(r)}function mS(){sp=!1,Fi!==null&&gc(Fi)&&(Fi=null),Ki!==null&&gc(Ki)&&(Ki=null),Yi!==null&&gc(Yi)&&(Yi=null),io.forEach(nb),ao.forEach(nb)}function bc(n,r){n.blockedOn===r&&(n.blockedOn=null,sp||(sp=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,mS)))}var yc=null;function ib(n){yc!==n&&(yc=n,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){yc===n&&(yc=null);for(var r=0;r<n.length;r+=3){var s=n[r],c=n[r+1],h=n[r+2];if(typeof c!="function"){if(rp(c||s)===null)continue;break}var b=$a(s);b!==null&&(n.splice(r,3),r-=3,rf(b,{pending:!0,data:h,method:s.method,action:c},c,h))}}))}function so(n){function r(O){return bc(O,n)}Fi!==null&&bc(Fi,n),Ki!==null&&bc(Ki,n),Yi!==null&&bc(Yi,n),io.forEach(r),ao.forEach(r);for(var s=0;s<Xi.length;s++){var c=Xi[s];c.blockedOn===n&&(c.blockedOn=null)}for(;0<Xi.length&&(s=Xi[0],s.blockedOn===null);)tb(s),s.blockedOn===null&&Xi.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var h=s[c],b=s[c+1],w=h[Bt]||null;if(typeof b=="function")w||ib(s);else if(w){var T=null;if(b&&b.hasAttribute("formAction")){if(h=b,w=b[Bt]||null)T=w.formAction;else if(rp(h)!==null)continue}else T=w.action;typeof T=="function"?s[c+1]=T:(s.splice(c,3),c-=3),ib(s)}}}function op(n){this._internalRoot=n}xc.prototype.render=op.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(a(409));var s=r.current,c=an();Q2(s,c,n,r,null,null)},xc.prototype.unmount=op.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Q2(n.current,2,null,n,null,null),ec(),r[Ua]=null}};function xc(n){this._internalRoot=n}xc.prototype.unstable_scheduleHydration=function(n){if(n){var r=vg();n={blockedOn:null,target:n,priority:r};for(var s=0;s<Xi.length&&r!==0&&r<Xi[s].priority;s++);Xi.splice(s,0,n),s===0&&tb(n)}};var ab=t.version;if(ab!=="19.1.1")throw Error(a(527,ab,"19.1.1"));L.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(a(188)):(n=Object.keys(n).join(","),Error(a(268,n)));return n=p(r),n=n!==null?m(n):null,n=n===null?null:n.stateNode,n};var gS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{us=vc.inject(gS),Qt=vc}catch{}}return lo.createRoot=function(n,r){if(!o(n))throw Error(a(299));var s=!1,c="",h=v1,b=w1,w=S1,T=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(b=r.onCaughtError),r.onRecoverableError!==void 0&&(w=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(T=r.unstable_transitionCallbacks)),r=Y2(n,1,!1,null,null,s,c,h,b,w,T,null),n[Ua]=r.current,If(n),new op(r)},lo.hydrateRoot=function(n,r,s){if(!o(n))throw Error(a(299));var c=!1,h="",b=v1,w=w1,T=S1,O=null,$=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(b=s.onUncaughtError),s.onCaughtError!==void 0&&(w=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(O=s.unstable_transitionCallbacks),s.formState!==void 0&&($=s.formState)),r=Y2(n,1,!0,r,s??null,c,h,b,w,T,O,$),r.context=X2(null),s=r.current,c=an(),c=Wu(c),h=Oi(c),h.callback=null,Li(s,h,c),s=c,r.current.lanes=s,fs(r,s),In(r),n[Ua]=r.current,If(n),new xc(r)},lo.version="19.1.1",lo}var hb;function ES(){if(hb)return cp.exports;hb=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),cp.exports=kS(),cp.exports}var AS=ES();const CS=dv(AS);var E=om();const Ae=dv(E),mb=yS({__proto__:null,default:Ae},[E]);/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var gb="popstate";function MS(e={}){function t(a,o){let{pathname:l,search:u,hash:f}=a.location;return uh("",{pathname:l,search:u,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function i(a,o){return typeof o=="string"?o:No(o)}return RS(t,i,null,e)}function Xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ln(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function zS(){return Math.random().toString(36).substring(2,10)}function bb(e,t){return{usr:e.state,key:e.key,idx:t}}function uh(e,t,i=null,a){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?ts(t):t,state:i,key:t&&t.key||a||zS()}}function No({pathname:e="/",search:t="",hash:i=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ts(e){let t={};if(e){let i=e.indexOf("#");i>=0&&(t.hash=e.substring(i),e=e.substring(0,i));let a=e.indexOf("?");a>=0&&(t.search=e.substring(a),e=e.substring(0,a)),e&&(t.pathname=e)}return t}function RS(e,t,i,a={}){let{window:o=document.defaultView,v5Compat:l=!1}=a,u=o.history,f="POP",p=null,m=g();m==null&&(m=0,u.replaceState({...u.state,idx:m},""));function g(){return(u.state||{idx:null}).idx}function y(){f="POP";let C=g(),k=C==null?null:C-m;m=C,p&&p({action:f,location:j.location,delta:k})}function x(C,k){f="PUSH";let R=uh(j.location,C,k);m=g()+1;let A=bb(R,m),V=j.createHref(R);try{u.pushState(A,"",V)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;o.location.assign(V)}l&&p&&p({action:f,location:j.location,delta:1})}function v(C,k){f="REPLACE";let R=uh(j.location,C,k);m=g();let A=bb(R,m),V=j.createHref(R);u.replaceState(A,"",V),l&&p&&p({action:f,location:j.location,delta:0})}function S(C){return OS(C)}let j={get action(){return f},get location(){return e(o,u)},listen(C){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(gb,y),p=C,()=>{o.removeEventListener(gb,y),p=null}},createHref(C){return t(o,C)},createURL:S,encodeLocation(C){let k=S(C);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:x,replace:v,go(C){return u.go(C)}};return j}function OS(e,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Xe(i,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:No(e);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=i+a),new URL(a,i)}function pv(e,t,i="/"){return LS(e,t,i,!1)}function LS(e,t,i,a){let o=typeof t=="string"?ts(t):t,l=ji(o.pathname||"/",i);if(l==null)return null;let u=hv(e);DS(u);let f=null;for(let p=0;f==null&&p<u.length;++p){let m=qS(l);f=IS(u[p],m,a)}return f}function hv(e,t=[],i=[],a="",o=!1){let l=(u,f,p=o,m)=>{let g={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(a)&&p)return;Xe(g.relativePath.startsWith(a),`Absolute route path "${g.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(a.length)}let y=Ti([a,g.relativePath]),x=i.concat(g);u.children&&u.children.length>0&&(Xe(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),hv(u.children,t,x,y,p)),!(u.path==null&&!u.index)&&t.push({path:y,score:GS(y,u.index),routesMeta:x})};return e.forEach((u,f)=>{var p;if(u.path===""||!((p=u.path)!=null&&p.includes("?")))l(u,f);else for(let m of mv(u.path))l(u,f,!0,m)}),t}function mv(e){let t=e.split("/");if(t.length===0)return[];let[i,...a]=t,o=i.endsWith("?"),l=i.replace(/\?$/,"");if(a.length===0)return o?[l,""]:[l];let u=mv(a.join("/")),f=[];return f.push(...u.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...u),f.map(p=>e.startsWith("/")&&p===""?"/":p)}function DS(e){e.sort((t,i)=>t.score!==i.score?i.score-t.score:US(t.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var PS=/^:[\w-]+$/,NS=3,VS=2,BS=1,_S=10,HS=-2,yb=e=>e==="*";function GS(e,t){let i=e.split("/"),a=i.length;return i.some(yb)&&(a+=HS),t&&(a+=VS),i.filter(o=>!yb(o)).reduce((o,l)=>o+(PS.test(l)?NS:l===""?BS:_S),a)}function US(e,t){return e.length===t.length&&e.slice(0,-1).every((a,o)=>a===t[o])?e[e.length-1]-t[t.length-1]:0}function IS(e,t,i=!1){let{routesMeta:a}=e,o={},l="/",u=[];for(let f=0;f<a.length;++f){let p=a[f],m=f===a.length-1,g=l==="/"?t:t.slice(l.length)||"/",y=iu({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),x=p.route;if(!y&&m&&i&&!a[a.length-1].route.index&&(y=iu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!y)return null;Object.assign(o,y.params),u.push({params:o,pathname:Ti([l,y.pathname]),pathnameBase:XS(Ti([l,y.pathnameBase])),route:x}),y.pathnameBase!=="/"&&(l=Ti([l,y.pathnameBase]))}return u}function iu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,a]=$S(e.path,e.caseSensitive,e.end),o=t.match(i);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:a.reduce((m,{paramName:g,isOptional:y},x)=>{if(g==="*"){let S=f[x]||"";u=l.slice(0,l.length-S.length).replace(/(.)\/+$/,"$1")}const v=f[x];return y&&!v?m[g]=void 0:m[g]=(v||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:u,pattern:e}}function $S(e,t=!1,i=!0){Ln(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,p)=>(a.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(a.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function qS(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ln(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ji(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,a=e.charAt(i);return a&&a!=="/"?null:e.slice(i)||"/"}var FS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function KS(e,t="/"){let{pathname:i,search:a="",hash:o=""}=typeof e=="string"?ts(e):e,l;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?l=xb(i.substring(1),"/"):l=xb(i,t)):l=t,{pathname:l,search:QS(a),hash:WS(o)}}function xb(e,t){let i=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function hp(e,t,i,a){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function YS(e){return e.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function lm(e){let t=YS(e);return t.map((i,a)=>a===t.length-1?i.pathname:i.pathnameBase)}function cm(e,t,i,a=!1){let o;typeof e=="string"?o=ts(e):(o={...e},Xe(!o.pathname||!o.pathname.includes("?"),hp("?","pathname","search",o)),Xe(!o.pathname||!o.pathname.includes("#"),hp("#","pathname","hash",o)),Xe(!o.search||!o.search.includes("#"),hp("#","search","hash",o)));let l=e===""||o.pathname==="",u=l?"/":o.pathname,f;if(u==null)f=i;else{let y=t.length-1;if(!a&&u.startsWith("..")){let x=u.split("/");for(;x[0]==="..";)x.shift(),y-=1;o.pathname=x.join("/")}f=y>=0?t[y]:"/"}let p=KS(o,f),m=u&&u!=="/"&&u.endsWith("/"),g=(l||u===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var Ti=e=>e.join("/").replace(/\/\/+/g,"/"),XS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),QS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,WS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,ZS=class{constructor(e,t,i,a=!1){this.status=e,this.statusText=t||"",this.internal=a,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function JS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function e8(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var gv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function bv(e,t){let i=e;if(typeof i!="string"||!FS.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let a=i,o=!1;if(gv)try{let l=new URL(window.location.href),u=i.startsWith("//")?new URL(l.protocol+i):new URL(i),f=ji(u.pathname,t);u.origin===l.origin&&f!=null?i=f+u.search+u.hash:o=!0}catch{Ln(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:o,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var yv=["POST","PUT","PATCH","DELETE"];new Set(yv);var t8=["GET",...yv];new Set(t8);var ns=E.createContext(null);ns.displayName="DataRouter";var Cu=E.createContext(null);Cu.displayName="DataRouterState";var n8=E.createContext(!1),xv=E.createContext({isTransitioning:!1});xv.displayName="ViewTransition";var i8=E.createContext(new Map);i8.displayName="Fetchers";var a8=E.createContext(null);a8.displayName="Await";var cn=E.createContext(null);cn.displayName="Navigation";var Zo=E.createContext(null);Zo.displayName="Location";var Nn=E.createContext({outlet:null,matches:[],isDataRoute:!1});Nn.displayName="Route";var um=E.createContext(null);um.displayName="RouteError";var vv="REACT_ROUTER_ERROR",r8="REDIRECT",s8="ROUTE_ERROR_RESPONSE";function o8(e){if(e.startsWith(`${vv}:${r8}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function l8(e){if(e.startsWith(`${vv}:${s8}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new ZS(t.status,t.statusText,t.data)}catch{}}function c8(e,{relative:t}={}){Xe(is(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=E.useContext(cn),{hash:o,pathname:l,search:u}=Jo(e,{relative:t}),f=l;return i!=="/"&&(f=l==="/"?i:Ti([i,l])),a.createHref({pathname:f,search:u,hash:o})}function is(){return E.useContext(Zo)!=null}function ii(){return Xe(is(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(Zo).location}var wv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sv(e){E.useContext(cn).static||E.useLayoutEffect(e)}function Tv(){let{isDataRoute:e}=E.useContext(Nn);return e?j8():u8()}function u8(){Xe(is(),"useNavigate() may be used only in the context of a <Router> component.");let e=E.useContext(ns),{basename:t,navigator:i}=E.useContext(cn),{matches:a}=E.useContext(Nn),{pathname:o}=ii(),l=JSON.stringify(lm(a)),u=E.useRef(!1);return Sv(()=>{u.current=!0}),E.useCallback((p,m={})=>{if(Ln(u.current,wv),!u.current)return;if(typeof p=="number"){i.go(p);return}let g=cm(p,JSON.parse(l),o,m.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:Ti([t,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[t,i,l,o,e])}var d8=E.createContext(null);function f8(e){let t=E.useContext(Nn).outlet;return E.useMemo(()=>t&&E.createElement(d8.Provider,{value:e},t),[t,e])}function Jo(e,{relative:t}={}){let{matches:i}=E.useContext(Nn),{pathname:a}=ii(),o=JSON.stringify(lm(i));return E.useMemo(()=>cm(e,JSON.parse(o),a,t==="path"),[e,o,a,t])}function p8(e,t){return jv(e,t)}function jv(e,t,i,a,o){var R;Xe(is(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=E.useContext(cn),{matches:u}=E.useContext(Nn),f=u[u.length-1],p=f?f.params:{},m=f?f.pathname:"/",g=f?f.pathnameBase:"/",y=f&&f.route;{let A=y&&y.path||"";Ev(m,!y||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let x=ii(),v;if(t){let A=typeof t=="string"?ts(t):t;Xe(g==="/"||((R=A.pathname)==null?void 0:R.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${A.pathname}" was given in the \`location\` prop.`),v=A}else v=x;let S=v.pathname||"/",j=S;if(g!=="/"){let A=g.replace(/^\//,"").split("/");j="/"+S.replace(/^\//,"").split("/").slice(A.length).join("/")}let C=pv(e,{pathname:j});Ln(y||C!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Ln(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=y8(C&&C.map(A=>Object.assign({},A,{params:Object.assign({},p,A.params),pathname:Ti([g,l.encodeLocation?l.encodeLocation(A.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?g:Ti([g,l.encodeLocation?l.encodeLocation(A.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathnameBase])})),u,i,a,o);return t&&k?E.createElement(Zo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},k):k}function h8(){let e=T8(),t=JS(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},l={padding:"2px 4px",backgroundColor:a},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:l},"ErrorBoundary")," or"," ",E.createElement("code",{style:l},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),i?E.createElement("pre",{style:o},i):null,u)}var m8=E.createElement(h8,null),kv=class extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const i=l8(e.digest);i&&(e=i)}let t=e!==void 0?E.createElement(Nn.Provider,{value:this.props.routeContext},E.createElement(um.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?E.createElement(g8,{error:e},t):t}};kv.contextType=n8;var mp=new WeakMap;function g8({children:e,error:t}){let{basename:i}=E.useContext(cn);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let a=o8(t.digest);if(a){let o=mp.get(t);if(o)throw o;let l=bv(a.location,i);if(gv&&!mp.get(t))if(l.isExternal||a.reloadDocument)window.location.href=l.absoluteURL||l.to;else{const u=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:a.replace}));throw mp.set(t,u),u}return E.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l.absoluteURL||l.to}`})}}return e}function b8({routeContext:e,match:t,children:i}){let a=E.useContext(ns);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),E.createElement(Nn.Provider,{value:e},i)}function y8(e,t=[],i=null,a=null,o=null){if(e==null){if(!i)return null;if(i.errors)e=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let l=e,u=i==null?void 0:i.errors;if(u!=null){let g=l.findIndex(y=>y.route.id&&(u==null?void 0:u[y.route.id])!==void 0);Xe(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,g+1))}let f=!1,p=-1;if(i)for(let g=0;g<l.length;g++){let y=l[g];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(p=g),y.route.id){let{loaderData:x,errors:v}=i,S=y.route.loader&&!x.hasOwnProperty(y.route.id)&&(!v||v[y.route.id]===void 0);if(y.route.lazy||S){f=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}let m=i&&a?(g,y)=>{var x,v;a(g,{location:i.location,params:((v=(x=i.matches)==null?void 0:x[0])==null?void 0:v.params)??{},unstable_pattern:e8(i.matches),errorInfo:y})}:void 0;return l.reduceRight((g,y,x)=>{let v,S=!1,j=null,C=null;i&&(v=u&&y.route.id?u[y.route.id]:void 0,j=y.route.errorElement||m8,f&&(p<0&&x===0?(Ev("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,C=null):p===x&&(S=!0,C=y.route.hydrateFallbackElement||null)));let k=t.concat(l.slice(0,x+1)),R=()=>{let A;return v?A=j:S?A=C:y.route.Component?A=E.createElement(y.route.Component,null):y.route.element?A=y.route.element:A=g,E.createElement(b8,{match:y,routeContext:{outlet:g,matches:k,isDataRoute:i!=null},children:A})};return i&&(y.route.ErrorBoundary||y.route.errorElement||x===0)?E.createElement(kv,{location:i.location,revalidation:i.revalidation,component:j,error:v,children:R(),routeContext:{outlet:null,matches:k,isDataRoute:!0},onError:m}):R()},null)}function dm(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function x8(e){let t=E.useContext(ns);return Xe(t,dm(e)),t}function v8(e){let t=E.useContext(Cu);return Xe(t,dm(e)),t}function w8(e){let t=E.useContext(Nn);return Xe(t,dm(e)),t}function fm(e){let t=w8(e),i=t.matches[t.matches.length-1];return Xe(i.route.id,`${e} can only be used on routes that contain a unique "id"`),i.route.id}function S8(){return fm("useRouteId")}function T8(){var a;let e=E.useContext(um),t=v8("useRouteError"),i=fm("useRouteError");return e!==void 0?e:(a=t.errors)==null?void 0:a[i]}function j8(){let{router:e}=x8("useNavigate"),t=fm("useNavigate"),i=E.useRef(!1);return Sv(()=>{i.current=!0}),E.useCallback(async(o,l={})=>{Ln(i.current,wv),i.current&&(typeof o=="number"?await e.navigate(o):await e.navigate(o,{fromRouteId:t,...l}))},[e,t])}var vb={};function Ev(e,t,i){!t&&!vb[e]&&(vb[e]=!0,Ln(!1,i))}E.memo(k8);function k8({routes:e,future:t,state:i,onError:a}){return jv(e,void 0,i,a,t)}function wb({to:e,replace:t,state:i,relative:a}){Xe(is(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=E.useContext(cn);Ln(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=E.useContext(Nn),{pathname:u}=ii(),f=Tv(),p=cm(e,lm(l),u,a==="path"),m=JSON.stringify(p);return E.useEffect(()=>{f(JSON.parse(m),{replace:t,state:i,relative:a})},[f,m,a,t,i]),null}function E8(e){return f8(e.context)}function xt(e){Xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function A8({basename:e="/",children:t=null,location:i,navigationType:a="POP",navigator:o,static:l=!1,unstable_useTransitions:u}){Xe(!is(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=e.replace(/^\/*/,"/"),p=E.useMemo(()=>({basename:f,navigator:o,static:l,unstable_useTransitions:u,future:{}}),[f,o,l,u]);typeof i=="string"&&(i=ts(i));let{pathname:m="/",search:g="",hash:y="",state:x=null,key:v="default"}=i,S=E.useMemo(()=>{let j=ji(m,f);return j==null?null:{location:{pathname:j,search:g,hash:y,state:x,key:v},navigationType:a}},[f,m,g,y,x,v,a]);return Ln(S!=null,`<Router basename="${f}"> is not able to match the URL "${m}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:E.createElement(cn.Provider,{value:p},E.createElement(Zo.Provider,{children:t,value:S}))}function C8({children:e,location:t}){return p8(dh(e),t)}function dh(e,t=[]){let i=[];return E.Children.forEach(e,(a,o)=>{if(!E.isValidElement(a))return;let l=[...t,o];if(a.type===E.Fragment){i.push.apply(i,dh(a.props.children,l));return}Xe(a.type===xt,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xe(!a.props.index||!a.props.children,"An index route cannot have child routes.");let u={id:a.props.id||l.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(u.children=dh(a.props.children,l)),i.push(u)}),i}var Vc="get",Bc="application/x-www-form-urlencoded";function Mu(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function M8(e){return Mu(e)&&e.tagName.toLowerCase()==="button"}function z8(e){return Mu(e)&&e.tagName.toLowerCase()==="form"}function R8(e){return Mu(e)&&e.tagName.toLowerCase()==="input"}function O8(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function L8(e,t){return e.button===0&&(!t||t==="_self")&&!O8(e)}var wc=null;function D8(){if(wc===null)try{new FormData(document.createElement("form"),0),wc=!1}catch{wc=!0}return wc}var P8=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gp(e){return e!=null&&!P8.has(e)?(Ln(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Bc}"`),null):e}function N8(e,t){let i,a,o,l,u;if(z8(e)){let f=e.getAttribute("action");a=f?ji(f,t):null,i=e.getAttribute("method")||Vc,o=gp(e.getAttribute("enctype"))||Bc,l=new FormData(e)}else if(M8(e)||R8(e)&&(e.type==="submit"||e.type==="image")){let f=e.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=e.getAttribute("formaction")||f.getAttribute("action");if(a=p?ji(p,t):null,i=e.getAttribute("formmethod")||f.getAttribute("method")||Vc,o=gp(e.getAttribute("formenctype"))||gp(f.getAttribute("enctype"))||Bc,l=new FormData(f,e),!D8()){let{name:m,type:g,value:y}=e;if(g==="image"){let x=m?`${m}.`:"";l.append(`${x}x`,"0"),l.append(`${x}y`,"0")}else m&&l.append(m,y)}}else{if(Mu(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Vc,a=null,o=Bc,u=e}return l&&o==="text/plain"&&(u=l,l=void 0),{action:a,method:i.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function pm(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function V8(e,t,i,a){let o=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return i?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${a}`:o.pathname=`${o.pathname}.${a}`:o.pathname==="/"?o.pathname=`_root.${a}`:t&&ji(o.pathname,t)==="/"?o.pathname=`${t.replace(/\/$/,"")}/_root.${a}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${a}`,o}async function B8(e,t){if(e.id in t)return t[e.id];try{let i=await import(e.module);return t[e.id]=i,i}catch(i){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function _8(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function H8(e,t,i){let a=await Promise.all(e.map(async o=>{let l=t.routes[o.route.id];if(l){let u=await B8(l,i);return u.links?u.links():[]}return[]}));return $8(a.flat(1).filter(_8).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Sb(e,t,i,a,o,l){let u=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,f=(p,m)=>{var g;return i[m].pathname!==p.pathname||((g=i[m].route.path)==null?void 0:g.endsWith("*"))&&i[m].params["*"]!==p.params["*"]};return l==="assets"?t.filter((p,m)=>u(p,m)||f(p,m)):l==="data"?t.filter((p,m)=>{var y;let g=a.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(u(p,m)||f(p,m))return!0;if(p.route.shouldRevalidate){let x=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((y=i[0])==null?void 0:y.params)||{},nextUrl:new URL(e,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function G8(e,t,{includeHydrateFallback:i}={}){return U8(e.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function U8(e){return[...new Set(e)]}function I8(e){let t={},i=Object.keys(e).sort();for(let a of i)t[a]=e[a];return t}function $8(e,t){let i=new Set;return new Set(t),e.reduce((a,o)=>{let l=JSON.stringify(I8(o));return i.has(l)||(i.add(l),a.push({key:l,link:o})),a},[])}function Av(){let e=E.useContext(ns);return pm(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function q8(){let e=E.useContext(Cu);return pm(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var hm=E.createContext(void 0);hm.displayName="FrameworkContext";function Cv(){let e=E.useContext(hm);return pm(e,"You must render this element inside a <HydratedRouter> element"),e}function F8(e,t){let i=E.useContext(hm),[a,o]=E.useState(!1),[l,u]=E.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:y}=t,x=E.useRef(null);E.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let j=k=>{k.forEach(R=>{u(R.isIntersecting)})},C=new IntersectionObserver(j,{threshold:.5});return x.current&&C.observe(x.current),()=>{C.disconnect()}}},[e]),E.useEffect(()=>{if(a){let j=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(j)}}},[a]);let v=()=>{o(!0)},S=()=>{o(!1),u(!1)};return i?e!=="intent"?[l,x,{}]:[l,x,{onFocus:co(f,v),onBlur:co(p,S),onMouseEnter:co(m,v),onMouseLeave:co(g,S),onTouchStart:co(y,v)}]:[!1,x,{}]}function co(e,t){return i=>{e&&e(i),i.defaultPrevented||t(i)}}function K8({page:e,...t}){let{router:i}=Av(),a=E.useMemo(()=>pv(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?E.createElement(X8,{page:e,matches:a,...t}):null}function Y8(e){let{manifest:t,routeModules:i}=Cv(),[a,o]=E.useState([]);return E.useEffect(()=>{let l=!1;return H8(e,t,i).then(u=>{l||o(u)}),()=>{l=!0}},[e,t,i]),a}function X8({page:e,matches:t,...i}){let a=ii(),{future:o,manifest:l,routeModules:u}=Cv(),{basename:f}=Av(),{loaderData:p,matches:m}=q8(),g=E.useMemo(()=>Sb(e,t,m,l,a,"data"),[e,t,m,l,a]),y=E.useMemo(()=>Sb(e,t,m,l,a,"assets"),[e,t,m,l,a]),x=E.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let j=new Set,C=!1;if(t.forEach(R=>{var V;let A=l.routes[R.route.id];!A||!A.hasLoader||(!g.some(M=>M.route.id===R.route.id)&&R.route.id in p&&((V=u[R.route.id])!=null&&V.shouldRevalidate)||A.hasClientLoader?C=!0:j.add(R.route.id))}),j.size===0)return[];let k=V8(e,f,o.unstable_trailingSlashAwareDataRequests,"data");return C&&j.size>0&&k.searchParams.set("_routes",t.filter(R=>j.has(R.route.id)).map(R=>R.route.id).join(",")),[k.pathname+k.search]},[f,o.unstable_trailingSlashAwareDataRequests,p,a,l,g,t,e,u]),v=E.useMemo(()=>G8(y,l),[y,l]),S=Y8(y);return E.createElement(E.Fragment,null,x.map(j=>E.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...i})),v.map(j=>E.createElement("link",{key:j,rel:"modulepreload",href:j,...i})),S.map(({key:j,link:C})=>E.createElement("link",{key:j,nonce:i.nonce,...C,crossOrigin:C.crossOrigin??i.crossOrigin})))}function Q8(...e){return t=>{e.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var W8=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{W8&&(window.__reactRouterVersion="7.13.0")}catch{}function Z8({basename:e,children:t,unstable_useTransitions:i,window:a}){let o=E.useRef();o.current==null&&(o.current=MS({window:a,v5Compat:!0}));let l=o.current,[u,f]=E.useState({action:l.action,location:l.location}),p=E.useCallback(m=>{i===!1?f(m):E.startTransition(()=>f(m))},[i]);return E.useLayoutEffect(()=>l.listen(p),[l,p]),E.createElement(A8,{basename:e,children:t,location:u.location,navigationType:u.action,navigator:l,unstable_useTransitions:i})}var Mv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zv=E.forwardRef(function({onClick:t,discover:i="render",prefetch:a="none",relative:o,reloadDocument:l,replace:u,state:f,target:p,to:m,preventScrollReset:g,viewTransition:y,unstable_defaultShouldRevalidate:x,...v},S){let{basename:j,unstable_useTransitions:C}=E.useContext(cn),k=typeof m=="string"&&Mv.test(m),R=bv(m,j);m=R.to;let A=c8(m,{relative:o}),[V,M,P]=F8(a,v),D=tT(m,{replace:u,state:f,target:p,preventScrollReset:g,relative:o,viewTransition:y,unstable_defaultShouldRevalidate:x,unstable_useTransitions:C});function U(Y){t&&t(Y),Y.defaultPrevented||D(Y)}let G=E.createElement("a",{...v,...P,href:R.absoluteURL||A,onClick:R.isExternal||l?t:U,ref:Q8(S,M),target:p,"data-discover":!k&&i==="render"?"true":void 0});return V&&!k?E.createElement(E.Fragment,null,G,E.createElement(K8,{page:A})):G});zv.displayName="Link";var ti=E.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:a="",end:o=!1,style:l,to:u,viewTransition:f,children:p,...m},g){let y=Jo(u,{relative:m.relative}),x=ii(),v=E.useContext(Cu),{navigator:S,basename:j}=E.useContext(cn),C=v!=null&&sT(y)&&f===!0,k=S.encodeLocation?S.encodeLocation(y).pathname:y.pathname,R=x.pathname,A=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(R=R.toLowerCase(),A=A?A.toLowerCase():null,k=k.toLowerCase()),A&&j&&(A=ji(A,j)||A);const V=k!=="/"&&k.endsWith("/")?k.length-1:k.length;let M=R===k||!o&&R.startsWith(k)&&R.charAt(V)==="/",P=A!=null&&(A===k||!o&&A.startsWith(k)&&A.charAt(k.length)==="/"),D={isActive:M,isPending:P,isTransitioning:C},U=M?t:void 0,G;typeof a=="function"?G=a(D):G=[a,M?"active":null,P?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let Y=typeof l=="function"?l(D):l;return E.createElement(zv,{...m,"aria-current":U,className:G,ref:g,style:Y,to:u,viewTransition:f},typeof p=="function"?p(D):p)});ti.displayName="NavLink";var J8=E.forwardRef(({discover:e="render",fetcherKey:t,navigate:i,reloadDocument:a,replace:o,state:l,method:u=Vc,action:f,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:y,unstable_defaultShouldRevalidate:x,...v},S)=>{let{unstable_useTransitions:j}=E.useContext(cn),C=aT(),k=rT(f,{relative:m}),R=u.toLowerCase()==="get"?"get":"post",A=typeof f=="string"&&Mv.test(f),V=M=>{if(p&&p(M),M.defaultPrevented)return;M.preventDefault();let P=M.nativeEvent.submitter,D=(P==null?void 0:P.getAttribute("formmethod"))||u,U=()=>C(P||M.currentTarget,{fetcherKey:t,method:D,navigate:i,replace:o,state:l,relative:m,preventScrollReset:g,viewTransition:y,unstable_defaultShouldRevalidate:x});j&&i!==!1?E.startTransition(()=>U()):U()};return E.createElement("form",{ref:S,method:R,action:k,onSubmit:a?p:V,...v,"data-discover":!A&&e==="render"?"true":void 0})});J8.displayName="Form";function eT(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rv(e){let t=E.useContext(ns);return Xe(t,eT(e)),t}function tT(e,{target:t,replace:i,state:a,preventScrollReset:o,relative:l,viewTransition:u,unstable_defaultShouldRevalidate:f,unstable_useTransitions:p}={}){let m=Tv(),g=ii(),y=Jo(e,{relative:l});return E.useCallback(x=>{if(L8(x,t)){x.preventDefault();let v=i!==void 0?i:No(g)===No(y),S=()=>m(e,{replace:v,state:a,preventScrollReset:o,relative:l,viewTransition:u,unstable_defaultShouldRevalidate:f});p?E.startTransition(()=>S()):S()}},[g,m,y,i,a,t,e,o,l,u,f,p])}var nT=0,iT=()=>`__${String(++nT)}__`;function aT(){let{router:e}=Rv("useSubmit"),{basename:t}=E.useContext(cn),i=S8(),a=e.fetch,o=e.navigate;return E.useCallback(async(l,u={})=>{let{action:f,method:p,encType:m,formData:g,body:y}=N8(l,t);if(u.navigate===!1){let x=u.fetcherKey||iT();await a(x,i,u.action||f,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:g,body:y,formMethod:u.method||p,formEncType:u.encType||m,flushSync:u.flushSync})}else await o(u.action||f,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:g,body:y,formMethod:u.method||p,formEncType:u.encType||m,replace:u.replace,state:u.state,fromRouteId:i,flushSync:u.flushSync,viewTransition:u.viewTransition})},[a,o,t,i])}function rT(e,{relative:t}={}){let{basename:i}=E.useContext(cn),a=E.useContext(Nn);Xe(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),l={...Jo(e||".",{relative:t})},u=ii();if(e==null){l.search=u.search;let f=new URLSearchParams(l.search),p=f.getAll("index");if(p.some(g=>g==="")){f.delete("index"),p.filter(y=>y).forEach(y=>f.append("index",y));let g=f.toString();l.search=g?`?${g}`:""}}return(!e||e===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(l.pathname=l.pathname==="/"?i:Ti([i,l.pathname])),No(l)}function sT(e,{relative:t}={}){let i=E.useContext(xv);Xe(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Rv("useViewTransitionState"),o=Jo(e,{relative:t});if(!i.isTransitioning)return!1;let l=ji(i.currentLocation.pathname,a)||i.currentLocation.pathname,u=ji(i.nextLocation.pathname,a)||i.nextLocation.pathname;return iu(o.pathname,u)!=null||iu(o.pathname,l)!=null}var oT=fv();function lT(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function cT(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var uT=function(){function e(i){var a=this;this._insertTag=function(o){var l;a.tags.length===0?a.insertionPoint?l=a.insertionPoint.nextSibling:a.prepend?l=a.container.firstChild:l=a.before:l=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(o,l),a.tags.push(o)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(a){a.forEach(this._insertTag)},t.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(cT(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=lT(o);try{l.insertRule(a,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(a));this.ctr++},t.flush=function(){this.tags.forEach(function(a){var o;return(o=a.parentNode)==null?void 0:o.removeChild(a)}),this.tags=[],this.ctr=0},e}(),Ot="-ms-",au="-moz-",ze="-webkit-",Ov="comm",mm="rule",gm="decl",dT="@import",Lv="@keyframes",fT="@layer",pT=Math.abs,zu=String.fromCharCode,hT=Object.assign;function mT(e,t){return Et(e,0)^45?(((t<<2^Et(e,0))<<2^Et(e,1))<<2^Et(e,2))<<2^Et(e,3):0}function Dv(e){return e.trim()}function gT(e,t){return(e=t.exec(e))?e[0]:e}function Re(e,t,i){return e.replace(t,i)}function fh(e,t){return e.indexOf(t)}function Et(e,t){return e.charCodeAt(t)|0}function Vo(e,t,i){return e.slice(t,i)}function Kn(e){return e.length}function bm(e){return e.length}function Sc(e,t){return t.push(e),e}function bT(e,t){return e.map(t).join("")}var Ru=1,qr=1,Pv=0,Xt=0,ot=0,as="";function Ou(e,t,i,a,o,l,u){return{value:e,root:t,parent:i,type:a,props:o,children:l,line:Ru,column:qr,length:u,return:""}}function uo(e,t){return hT(Ou("",null,null,"",null,null,0),e,{length:-e.length},t)}function yT(){return ot}function xT(){return ot=Xt>0?Et(as,--Xt):0,qr--,ot===10&&(qr=1,Ru--),ot}function ln(){return ot=Xt<Pv?Et(as,Xt++):0,qr++,ot===10&&(qr=1,Ru++),ot}function Wn(){return Et(as,Xt)}function _c(){return Xt}function el(e,t){return Vo(as,e,t)}function Bo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Nv(e){return Ru=qr=1,Pv=Kn(as=e),Xt=0,[]}function Vv(e){return as="",e}function Hc(e){return Dv(el(Xt-1,ph(e===91?e+2:e===40?e+1:e)))}function vT(e){for(;(ot=Wn())&&ot<33;)ln();return Bo(e)>2||Bo(ot)>3?"":" "}function wT(e,t){for(;--t&&ln()&&!(ot<48||ot>102||ot>57&&ot<65||ot>70&&ot<97););return el(e,_c()+(t<6&&Wn()==32&&ln()==32))}function ph(e){for(;ln();)switch(ot){case e:return Xt;case 34:case 39:e!==34&&e!==39&&ph(ot);break;case 40:e===41&&ph(e);break;case 92:ln();break}return Xt}function ST(e,t){for(;ln()&&e+ot!==57;)if(e+ot===84&&Wn()===47)break;return"/*"+el(t,Xt-1)+"*"+zu(e===47?e:ln())}function TT(e){for(;!Bo(Wn());)ln();return el(e,Xt)}function jT(e){return Vv(Gc("",null,null,null,[""],e=Nv(e),0,[0],e))}function Gc(e,t,i,a,o,l,u,f,p){for(var m=0,g=0,y=u,x=0,v=0,S=0,j=1,C=1,k=1,R=0,A="",V=o,M=l,P=a,D=A;C;)switch(S=R,R=ln()){case 40:if(S!=108&&Et(D,y-1)==58){fh(D+=Re(Hc(R),"&","&\f"),"&\f")!=-1&&(k=-1);break}case 34:case 39:case 91:D+=Hc(R);break;case 9:case 10:case 13:case 32:D+=vT(S);break;case 92:D+=wT(_c()-1,7);continue;case 47:switch(Wn()){case 42:case 47:Sc(kT(ST(ln(),_c()),t,i),p);break;default:D+="/"}break;case 123*j:f[m++]=Kn(D)*k;case 125*j:case 59:case 0:switch(R){case 0:case 125:C=0;case 59+g:k==-1&&(D=Re(D,/\f/g,"")),v>0&&Kn(D)-y&&Sc(v>32?jb(D+";",a,i,y-1):jb(Re(D," ","")+";",a,i,y-2),p);break;case 59:D+=";";default:if(Sc(P=Tb(D,t,i,m,g,o,f,A,V=[],M=[],y),l),R===123)if(g===0)Gc(D,t,P,P,V,l,y,f,M);else switch(x===99&&Et(D,3)===110?100:x){case 100:case 108:case 109:case 115:Gc(e,P,P,a&&Sc(Tb(e,P,P,0,0,o,f,A,o,V=[],y),M),o,M,y,f,a?V:M);break;default:Gc(D,P,P,P,[""],M,0,f,M)}}m=g=v=0,j=k=1,A=D="",y=u;break;case 58:y=1+Kn(D),v=S;default:if(j<1){if(R==123)--j;else if(R==125&&j++==0&&xT()==125)continue}switch(D+=zu(R),R*j){case 38:k=g>0?1:(D+="\f",-1);break;case 44:f[m++]=(Kn(D)-1)*k,k=1;break;case 64:Wn()===45&&(D+=Hc(ln())),x=Wn(),g=y=Kn(A=D+=TT(_c())),R++;break;case 45:S===45&&Kn(D)==2&&(j=0)}}return l}function Tb(e,t,i,a,o,l,u,f,p,m,g){for(var y=o-1,x=o===0?l:[""],v=bm(x),S=0,j=0,C=0;S<a;++S)for(var k=0,R=Vo(e,y+1,y=pT(j=u[S])),A=e;k<v;++k)(A=Dv(j>0?x[k]+" "+R:Re(R,/&\f/g,x[k])))&&(p[C++]=A);return Ou(e,t,i,o===0?mm:f,p,m,g)}function kT(e,t,i){return Ou(e,t,i,Ov,zu(yT()),Vo(e,2,-2),0)}function jb(e,t,i,a){return Ou(e,t,i,gm,Vo(e,0,a),Vo(e,a+1,-1),a)}function Ur(e,t){for(var i="",a=bm(e),o=0;o<a;o++)i+=t(e[o],o,e,t)||"";return i}function ET(e,t,i,a){switch(e.type){case fT:if(e.children.length)break;case dT:case gm:return e.return=e.return||e.value;case Ov:return"";case Lv:return e.return=e.value+"{"+Ur(e.children,a)+"}";case mm:e.value=e.props.join(",")}return Kn(i=Ur(e.children,a))?e.return=e.value+"{"+i+"}":""}function AT(e){var t=bm(e);return function(i,a,o,l){for(var u="",f=0;f<t;f++)u+=e[f](i,a,o,l)||"";return u}}function CT(e){return function(t){t.root||(t=t.return)&&e(t)}}function MT(e){var t=Object.create(null);return function(i){return t[i]===void 0&&(t[i]=e(i)),t[i]}}var zT=function(t,i,a){for(var o=0,l=0;o=l,l=Wn(),o===38&&l===12&&(i[a]=1),!Bo(l);)ln();return el(t,Xt)},RT=function(t,i){var a=-1,o=44;do switch(Bo(o)){case 0:o===38&&Wn()===12&&(i[a]=1),t[a]+=zT(Xt-1,i,a);break;case 2:t[a]+=Hc(o);break;case 4:if(o===44){t[++a]=Wn()===58?"&\f":"",i[a]=t[a].length;break}default:t[a]+=zu(o)}while(o=ln());return t},OT=function(t,i){return Vv(RT(Nv(t),i))},kb=new WeakMap,LT=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var i=t.value,a=t.parent,o=t.column===a.column&&t.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(t.props.length===1&&i.charCodeAt(0)!==58&&!kb.get(a))&&!o){kb.set(t,!0);for(var l=[],u=OT(i,l),f=a.props,p=0,m=0;p<u.length;p++)for(var g=0;g<f.length;g++,m++)t.props[m]=l[p]?u[p].replace(/&\f/g,f[g]):f[g]+" "+u[p]}}},DT=function(t){if(t.type==="decl"){var i=t.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(t.return="",t.value="")}};function Bv(e,t){switch(mT(e,t)){case 5103:return ze+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ze+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ze+e+au+e+Ot+e+e;case 6828:case 4268:return ze+e+Ot+e+e;case 6165:return ze+e+Ot+"flex-"+e+e;case 5187:return ze+e+Re(e,/(\w+).+(:[^]+)/,ze+"box-$1$2"+Ot+"flex-$1$2")+e;case 5443:return ze+e+Ot+"flex-item-"+Re(e,/flex-|-self/,"")+e;case 4675:return ze+e+Ot+"flex-line-pack"+Re(e,/align-content|flex-|-self/,"")+e;case 5548:return ze+e+Ot+Re(e,"shrink","negative")+e;case 5292:return ze+e+Ot+Re(e,"basis","preferred-size")+e;case 6060:return ze+"box-"+Re(e,"-grow","")+ze+e+Ot+Re(e,"grow","positive")+e;case 4554:return ze+Re(e,/([^-])(transform)/g,"$1"+ze+"$2")+e;case 6187:return Re(Re(Re(e,/(zoom-|grab)/,ze+"$1"),/(image-set)/,ze+"$1"),e,"")+e;case 5495:case 3959:return Re(e,/(image-set\([^]*)/,ze+"$1$`$1");case 4968:return Re(Re(e,/(.+:)(flex-)?(.*)/,ze+"box-pack:$3"+Ot+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ze+e+e;case 4095:case 3583:case 4068:case 2532:return Re(e,/(.+)-inline(.+)/,ze+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Kn(e)-1-t>6)switch(Et(e,t+1)){case 109:if(Et(e,t+4)!==45)break;case 102:return Re(e,/(.+:)(.+)-([^]+)/,"$1"+ze+"$2-$3$1"+au+(Et(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~fh(e,"stretch")?Bv(Re(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Et(e,t+1)!==115)break;case 6444:switch(Et(e,Kn(e)-3-(~fh(e,"!important")&&10))){case 107:return Re(e,":",":"+ze)+e;case 101:return Re(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ze+(Et(e,14)===45?"inline-":"")+"box$3$1"+ze+"$2$3$1"+Ot+"$2box$3")+e}break;case 5936:switch(Et(e,t+11)){case 114:return ze+e+Ot+Re(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ze+e+Ot+Re(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ze+e+Ot+Re(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ze+e+Ot+e+e}return e}var PT=function(t,i,a,o){if(t.length>-1&&!t.return)switch(t.type){case gm:t.return=Bv(t.value,t.length);break;case Lv:return Ur([uo(t,{value:Re(t.value,"@","@"+ze)})],o);case mm:if(t.length)return bT(t.props,function(l){switch(gT(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ur([uo(t,{props:[Re(l,/:(read-\w+)/,":"+au+"$1")]})],o);case"::placeholder":return Ur([uo(t,{props:[Re(l,/:(plac\w+)/,":"+ze+"input-$1")]}),uo(t,{props:[Re(l,/:(plac\w+)/,":"+au+"$1")]}),uo(t,{props:[Re(l,/:(plac\w+)/,Ot+"input-$1")]})],o)}return""})}},NT=[PT],VT=function(t){var i=t.key;if(i==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(j){var C=j.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(j),j.setAttribute("data-s",""))})}var o=t.stylisPlugins||NT,l={},u,f=[];u=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(j){for(var C=j.getAttribute("data-emotion").split(" "),k=1;k<C.length;k++)l[C[k]]=!0;f.push(j)});var p,m=[LT,DT];{var g,y=[ET,CT(function(j){g.insert(j)})],x=AT(m.concat(o,y)),v=function(C){return Ur(jT(C),x)};p=function(C,k,R,A){g=R,v(C?C+"{"+k.styles+"}":k.styles),A&&(S.inserted[k.name]=!0)}}var S={key:i,sheet:new uT({key:i,container:u,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:p};return S.sheet.hydrate(f),S},bp={exports:{}},Le={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eb;function BT(){if(Eb)return Le;Eb=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,i=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,f=e?Symbol.for("react.context"):60110,p=e?Symbol.for("react.async_mode"):60111,m=e?Symbol.for("react.concurrent_mode"):60111,g=e?Symbol.for("react.forward_ref"):60112,y=e?Symbol.for("react.suspense"):60113,x=e?Symbol.for("react.suspense_list"):60120,v=e?Symbol.for("react.memo"):60115,S=e?Symbol.for("react.lazy"):60116,j=e?Symbol.for("react.block"):60121,C=e?Symbol.for("react.fundamental"):60117,k=e?Symbol.for("react.responder"):60118,R=e?Symbol.for("react.scope"):60119;function A(M){if(typeof M=="object"&&M!==null){var P=M.$$typeof;switch(P){case t:switch(M=M.type,M){case p:case m:case a:case l:case o:case y:return M;default:switch(M=M&&M.$$typeof,M){case f:case g:case S:case v:case u:return M;default:return P}}case i:return P}}}function V(M){return A(M)===m}return Le.AsyncMode=p,Le.ConcurrentMode=m,Le.ContextConsumer=f,Le.ContextProvider=u,Le.Element=t,Le.ForwardRef=g,Le.Fragment=a,Le.Lazy=S,Le.Memo=v,Le.Portal=i,Le.Profiler=l,Le.StrictMode=o,Le.Suspense=y,Le.isAsyncMode=function(M){return V(M)||A(M)===p},Le.isConcurrentMode=V,Le.isContextConsumer=function(M){return A(M)===f},Le.isContextProvider=function(M){return A(M)===u},Le.isElement=function(M){return typeof M=="object"&&M!==null&&M.$$typeof===t},Le.isForwardRef=function(M){return A(M)===g},Le.isFragment=function(M){return A(M)===a},Le.isLazy=function(M){return A(M)===S},Le.isMemo=function(M){return A(M)===v},Le.isPortal=function(M){return A(M)===i},Le.isProfiler=function(M){return A(M)===l},Le.isStrictMode=function(M){return A(M)===o},Le.isSuspense=function(M){return A(M)===y},Le.isValidElementType=function(M){return typeof M=="string"||typeof M=="function"||M===a||M===m||M===l||M===o||M===y||M===x||typeof M=="object"&&M!==null&&(M.$$typeof===S||M.$$typeof===v||M.$$typeof===u||M.$$typeof===f||M.$$typeof===g||M.$$typeof===C||M.$$typeof===k||M.$$typeof===R||M.$$typeof===j)},Le.typeOf=A,Le}var Ab;function _T(){return Ab||(Ab=1,bp.exports=BT()),bp.exports}var yp,Cb;function HT(){if(Cb)return yp;Cb=1;var e=_T(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[e.ForwardRef]=a,l[e.Memo]=o;function u(S){return e.isMemo(S)?o:l[S.$$typeof]||t}var f=Object.defineProperty,p=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,g=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,x=Object.prototype;function v(S,j,C){if(typeof j!="string"){if(x){var k=y(j);k&&k!==x&&v(S,k,C)}var R=p(j);m&&(R=R.concat(m(j)));for(var A=u(S),V=u(j),M=0;M<R.length;++M){var P=R[M];if(!i[P]&&!(C&&C[P])&&!(V&&V[P])&&!(A&&A[P])){var D=g(j,P);try{f(S,P,D)}catch{}}}}return S}return yp=v,yp}HT();var GT=!0;function UT(e,t,i){var a="";return i.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):o&&(a+=o+" ")}),a}var _v=function(t,i,a){var o=t.key+"-"+i.name;(a===!1||GT===!1)&&t.registered[o]===void 0&&(t.registered[o]=i.styles)},Hv=function(t,i,a){_v(t,i,a);var o=t.key+"-"+i.name;if(t.inserted[i.name]===void 0){var l=i;do t.insert(i===l?"."+o:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function IT(e){for(var t=0,i,a=0,o=e.length;o>=4;++a,o-=4)i=e.charCodeAt(a)&255|(e.charCodeAt(++a)&255)<<8|(e.charCodeAt(++a)&255)<<16|(e.charCodeAt(++a)&255)<<24,i=(i&65535)*1540483477+((i>>>16)*59797<<16),i^=i>>>24,t=(i&65535)*1540483477+((i>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(a+2)&255)<<16;case 2:t^=(e.charCodeAt(a+1)&255)<<8;case 1:t^=e.charCodeAt(a)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var $T={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qT=/[A-Z]|^ms/g,FT=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Gv=function(t){return t.charCodeAt(1)===45},Mb=function(t){return t!=null&&typeof t!="boolean"},xp=MT(function(e){return Gv(e)?e:e.replace(qT,"-$&").toLowerCase()}),zb=function(t,i){switch(t){case"animation":case"animationName":if(typeof i=="string")return i.replace(FT,function(a,o,l){return Yn={name:o,styles:l,next:Yn},o})}return $T[t]!==1&&!Gv(t)&&typeof i=="number"&&i!==0?i+"px":i};function _o(e,t,i){if(i==null)return"";var a=i;if(a.__emotion_styles!==void 0)return a;switch(typeof i){case"boolean":return"";case"object":{var o=i;if(o.anim===1)return Yn={name:o.name,styles:o.styles,next:Yn},o.name;var l=i;if(l.styles!==void 0){var u=l.next;if(u!==void 0)for(;u!==void 0;)Yn={name:u.name,styles:u.styles,next:Yn},u=u.next;var f=l.styles+";";return f}return KT(e,t,i)}case"function":{if(e!==void 0){var p=Yn,m=i(e);return Yn=p,_o(e,t,m)}break}}var g=i;return g}function KT(e,t,i){var a="";if(Array.isArray(i))for(var o=0;o<i.length;o++)a+=_o(e,t,i[o])+";";else for(var l in i){var u=i[l];if(typeof u!="object"){var f=u;Mb(f)&&(a+=xp(l)+":"+zb(l,f)+";")}else if(Array.isArray(u)&&typeof u[0]=="string"&&t==null)for(var p=0;p<u.length;p++)Mb(u[p])&&(a+=xp(l)+":"+zb(l,u[p])+";");else{var m=_o(e,t,u);switch(l){case"animation":case"animationName":{a+=xp(l)+":"+m+";";break}default:a+=l+"{"+m+"}"}}}return a}var Rb=/label:\s*([^\s;{]+)\s*(;|$)/g,Yn;function ym(e,t,i){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var a=!0,o="";Yn=void 0;var l=e[0];if(l==null||l.raw===void 0)a=!1,o+=_o(i,t,l);else{var u=l;o+=u[0]}for(var f=1;f<e.length;f++)if(o+=_o(i,t,e[f]),a){var p=l;o+=p[f]}Rb.lastIndex=0;for(var m="",g;(g=Rb.exec(o))!==null;)m+="-"+g[1];var y=IT(o)+m;return{name:y,styles:o,next:Yn}}var YT=function(t){return t()},Uv=mb.useInsertionEffect?mb.useInsertionEffect:!1,XT=Uv||YT,Ob=Uv||E.useLayoutEffect,Iv=E.createContext(typeof HTMLElement<"u"?VT({key:"css"}):null);Iv.Provider;var $v=function(t){return E.forwardRef(function(i,a){var o=E.useContext(Iv);return t(i,o,a)})},qv=E.createContext({}),xm={}.hasOwnProperty,hh="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",QT=function(t,i){var a={};for(var o in i)xm.call(i,o)&&(a[o]=i[o]);return a[hh]=t,a},WT=function(t){var i=t.cache,a=t.serialized,o=t.isStringTag;return _v(i,a,o),XT(function(){return Hv(i,a,o)}),null},ZT=$v(function(e,t,i){var a=e.css;typeof a=="string"&&t.registered[a]!==void 0&&(a=t.registered[a]);var o=e[hh],l=[a],u="";typeof e.className=="string"?u=UT(t.registered,l,e.className):e.className!=null&&(u=e.className+" ");var f=ym(l,void 0,E.useContext(qv));u+=t.key+"-"+f.name;var p={};for(var m in e)xm.call(e,m)&&m!=="css"&&m!==hh&&(p[m]=e[m]);return p.className=u,i&&(p.ref=i),E.createElement(E.Fragment,null,E.createElement(WT,{cache:t,serialized:f,isStringTag:typeof o=="string"}),E.createElement(o,p))}),JT=ZT,Lb=function(t,i){var a=arguments;if(i==null||!xm.call(i,"css"))return E.createElement.apply(void 0,a);var o=a.length,l=new Array(o);l[0]=JT,l[1]=QT(t,i);for(var u=2;u<o;u++)l[u]=a[u];return E.createElement.apply(null,l)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(Lb||(Lb={}));var e9=$v(function(e,t){var i=e.styles,a=ym([i],void 0,E.useContext(qv)),o=E.useRef();return Ob(function(){var l=t.key+"-global",u=new t.sheet.constructor({key:l,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),f=!1,p=document.querySelector('style[data-emotion="'+l+" "+a.name+'"]');return t.sheet.tags.length&&(u.before=t.sheet.tags[0]),p!==null&&(f=!0,p.setAttribute("data-emotion",l),u.hydrate([p])),o.current=[u,f],function(){u.flush()}},[t]),Ob(function(){var l=o.current,u=l[0],f=l[1];if(f){l[1]=!1;return}if(a.next!==void 0&&Hv(t,a.next,!0),u.tags.length){var p=u.tags[u.tags.length-1].nextElementSibling;u.before=p,u.flush()}t.insert("",a,u,!1)},[t,a.name]),null});function t9(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return ym(t)}const n9="/assets/Geist-Regular-BCrLS6HJ.ttf",i9="/assets/Geist-Medium-C6X8vKEc.ttf",a9="/assets/BebasNeue-Regular-D2CONTwO.ttf",r9="/assets/Inter_24pt-Regular-BPx6xqqj.ttf",s9=t9`
  /* ========== FONTS ========== */
  @font-face {
    font-family: "Geist";
    src: url(${n9}) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Geist";
    src: url(${i9}) format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Bebas Neue";
    src: url(${a9}) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Inter";
    src: url(${r9}) format("truetype");
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
`,vm=E.createContext({});function rs(e){const t=E.useRef(null);return t.current===null&&(t.current=e()),t.current}const wm=typeof window<"u",Lu=wm?E.useLayoutEffect:E.useEffect,Du=E.createContext(null);function Sm(e,t){e.indexOf(t)===-1&&e.push(t)}function Tm(e,t){const i=e.indexOf(t);i>-1&&e.splice(i,1)}const ni=(e,t,i)=>i>t?t:i<e?e:i;let Ho=()=>{};const ki={},Fv=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function Kv(e){return typeof e=="object"&&e!==null}const Yv=e=>/^0[^.\s]+$/u.test(e);function jm(e){let t;return()=>(t===void 0&&(t=e()),t)}const Kt=e=>e,o9=(e,t)=>i=>t(e(i)),tl=(...e)=>e.reduce(o9),Fr=(e,t,i)=>{const a=t-e;return a===0?1:(i-e)/a};class km{constructor(){this.subscriptions=[]}add(t){return Sm(this.subscriptions,t),()=>Tm(this.subscriptions,t)}notify(t,i,a){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,i,a);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(t,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Zn=e=>e*1e3,Jn=e=>e/1e3;function Em(e,t){return t?e*(1e3/t):0}const Xv=(e,t,i)=>(((1-3*i+3*t)*e+(3*i-6*t))*e+3*t)*e,l9=1e-7,c9=12;function u9(e,t,i,a,o){let l,u,f=0;do u=t+(i-t)/2,l=Xv(u,a,o)-e,l>0?i=u:t=u;while(Math.abs(l)>l9&&++f<c9);return u}function nl(e,t,i,a){if(e===t&&i===a)return Kt;const o=l=>u9(l,0,1,e,i);return l=>l===0||l===1?l:Xv(o(l),t,a)}const Qv=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Wv=e=>t=>1-e(1-t),Pu=nl(.33,1.53,.69,.99),Am=Wv(Pu),Zv=Qv(Am),Jv=e=>(e*=2)<1?.5*Am(e):.5*(2-Math.pow(2,-10*(e-1))),Cm=e=>1-Math.sin(Math.acos(e)),e5=Wv(Cm),t5=Qv(Cm),d9=nl(.42,0,1,1),kn=nl(0,0,.58,1),Mm=nl(.42,0,.58,1),f9=e=>Array.isArray(e)&&typeof e[0]!="number",n5=e=>Array.isArray(e)&&typeof e[0]=="number",p9={linear:Kt,easeIn:d9,easeInOut:Mm,easeOut:kn,circIn:Cm,circInOut:t5,circOut:e5,backIn:Am,backInOut:Zv,backOut:Pu,anticipate:Jv},h9=e=>typeof e=="string",Db=e=>{if(n5(e)){Ho(e.length===4);const[t,i,a,o]=e;return nl(t,i,a,o)}else if(h9(e))return p9[e];return e},Tc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function m9(e,t){let i=new Set,a=new Set,o=!1,l=!1;const u=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function p(g){u.has(g)&&(m.schedule(g),e()),g(f)}const m={schedule:(g,y=!1,x=!1)=>{const S=x&&o?i:a;return y&&u.add(g),S.has(g)||S.add(g),g},cancel:g=>{a.delete(g),u.delete(g)},process:g=>{if(f=g,o){l=!0;return}o=!0,[i,a]=[a,i],i.forEach(p),i.clear(),o=!1,l&&(l=!1,m.process(g))}};return m}const g9=40;function i5(e,t){let i=!1,a=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>i=!0,u=Tc.reduce((A,V)=>(A[V]=m9(l),A),{}),{setup:f,read:p,resolveKeyframes:m,preUpdate:g,update:y,preRender:x,render:v,postRender:S}=u,j=()=>{const A=ki.useManualTiming?o.timestamp:performance.now();i=!1,ki.useManualTiming||(o.delta=a?1e3/60:Math.max(Math.min(A-o.timestamp,g9),1)),o.timestamp=A,o.isProcessing=!0,f.process(o),p.process(o),m.process(o),g.process(o),y.process(o),x.process(o),v.process(o),S.process(o),o.isProcessing=!1,i&&t&&(a=!1,e(j))},C=()=>{i=!0,a=!0,o.isProcessing||e(j)};return{schedule:Tc.reduce((A,V)=>{const M=u[V];return A[V]=(P,D=!1,U=!1)=>(i||C(),M.schedule(P,D,U)),A},{}),cancel:A=>{for(let V=0;V<Tc.length;V++)u[Tc[V]].cancel(A)},state:o,steps:u}}const{schedule:Be,cancel:Dn,state:vt,steps:vp}=i5(typeof requestAnimationFrame<"u"?requestAnimationFrame:Kt,!0);let Uc;function b9(){Uc=void 0}const qt={now:()=>(Uc===void 0&&qt.set(vt.isProcessing||ki.useManualTiming?vt.timestamp:performance.now()),Uc),set:e=>{Uc=e,queueMicrotask(b9)}},a5=e=>t=>typeof t=="string"&&t.startsWith(e),zm=a5("--"),y9=a5("var(--"),Rm=e=>y9(e)?x9.test(e.split("/*")[0].trim()):!1,x9=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ss={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Go={...ss,transform:e=>ni(0,1,e)},jc={...ss,default:1},Eo=e=>Math.round(e*1e5)/1e5,Om=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function v9(e){return e==null}const w9=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Lm=(e,t)=>i=>!!(typeof i=="string"&&w9.test(i)&&i.startsWith(e)||t&&!v9(i)&&Object.prototype.hasOwnProperty.call(i,t)),r5=(e,t,i)=>a=>{if(typeof a!="string")return a;const[o,l,u,f]=a.match(Om);return{[e]:parseFloat(o),[t]:parseFloat(l),[i]:parseFloat(u),alpha:f!==void 0?parseFloat(f):1}},S9=e=>ni(0,255,e),wp={...ss,transform:e=>Math.round(S9(e))},Ma={test:Lm("rgb","red"),parse:r5("red","green","blue"),transform:({red:e,green:t,blue:i,alpha:a=1})=>"rgba("+wp.transform(e)+", "+wp.transform(t)+", "+wp.transform(i)+", "+Eo(Go.transform(a))+")"};function T9(e){let t="",i="",a="",o="";return e.length>5?(t=e.substring(1,3),i=e.substring(3,5),a=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),i=e.substring(2,3),a=e.substring(3,4),o=e.substring(4,5),t+=t,i+=i,a+=a,o+=o),{red:parseInt(t,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:o?parseInt(o,16)/255:1}}const mh={test:Lm("#"),parse:T9,transform:Ma.transform},il=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Zi=il("deg"),ei=il("%"),me=il("px"),j9=il("vh"),k9=il("vw"),Pb={...ei,parse:e=>ei.parse(e)/100,transform:e=>ei.transform(e*100)},Dr={test:Lm("hsl","hue"),parse:r5("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:i,alpha:a=1})=>"hsla("+Math.round(e)+", "+ei.transform(Eo(t))+", "+ei.transform(Eo(i))+", "+Eo(Go.transform(a))+")"},st={test:e=>Ma.test(e)||mh.test(e)||Dr.test(e),parse:e=>Ma.test(e)?Ma.parse(e):Dr.test(e)?Dr.parse(e):mh.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Ma.transform(e):Dr.transform(e),getAnimatableNone:e=>{const t=st.parse(e);return t.alpha=0,st.transform(t)}},E9=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function A9(e){var t,i;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Om))==null?void 0:t.length)||0)+(((i=e.match(E9))==null?void 0:i.length)||0)>0}const s5="number",o5="color",C9="var",M9="var(",Nb="${}",z9=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Uo(e){const t=e.toString(),i=[],a={color:[],number:[],var:[]},o=[];let l=0;const f=t.replace(z9,p=>(st.test(p)?(a.color.push(l),o.push(o5),i.push(st.parse(p))):p.startsWith(M9)?(a.var.push(l),o.push(C9),i.push(p)):(a.number.push(l),o.push(s5),i.push(parseFloat(p))),++l,Nb)).split(Nb);return{values:i,split:f,indexes:a,types:o}}function l5(e){return Uo(e).values}function c5(e){const{split:t,types:i}=Uo(e),a=t.length;return o=>{let l="";for(let u=0;u<a;u++)if(l+=t[u],o[u]!==void 0){const f=i[u];f===s5?l+=Eo(o[u]):f===o5?l+=st.transform(o[u]):l+=o[u]}return l}}const R9=e=>typeof e=="number"?0:st.test(e)?st.getAnimatableNone(e):e;function O9(e){const t=l5(e);return c5(e)(t.map(R9))}const na={test:A9,parse:l5,createTransformer:c5,getAnimatableNone:O9};function Sp(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*(2/3-i)*6:e}function L9({hue:e,saturation:t,lightness:i,alpha:a}){e/=360,t/=100,i/=100;let o=0,l=0,u=0;if(!t)o=l=u=i;else{const f=i<.5?i*(1+t):i+t-i*t,p=2*i-f;o=Sp(p,f,e+1/3),l=Sp(p,f,e),u=Sp(p,f,e-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:a}}function ru(e,t){return i=>i>0?t:e}const We=(e,t,i)=>e+(t-e)*i,Tp=(e,t,i)=>{const a=e*e,o=i*(t*t-a)+a;return o<0?0:Math.sqrt(o)},D9=[mh,Ma,Dr],P9=e=>D9.find(t=>t.test(e));function Vb(e){const t=P9(e);if(!t)return!1;let i=t.parse(e);return t===Dr&&(i=L9(i)),i}const Bb=(e,t)=>{const i=Vb(e),a=Vb(t);if(!i||!a)return ru(e,t);const o={...i};return l=>(o.red=Tp(i.red,a.red,l),o.green=Tp(i.green,a.green,l),o.blue=Tp(i.blue,a.blue,l),o.alpha=We(i.alpha,a.alpha,l),Ma.transform(o))},gh=new Set(["none","hidden"]);function N9(e,t){return gh.has(e)?i=>i<=0?e:t:i=>i>=1?t:e}function V9(e,t){return i=>We(e,t,i)}function Dm(e){return typeof e=="number"?V9:typeof e=="string"?Rm(e)?ru:st.test(e)?Bb:H9:Array.isArray(e)?u5:typeof e=="object"?st.test(e)?Bb:B9:ru}function u5(e,t){const i=[...e],a=i.length,o=e.map((l,u)=>Dm(l)(l,t[u]));return l=>{for(let u=0;u<a;u++)i[u]=o[u](l);return i}}function B9(e,t){const i={...e,...t},a={};for(const o in i)e[o]!==void 0&&t[o]!==void 0&&(a[o]=Dm(e[o])(e[o],t[o]));return o=>{for(const l in a)i[l]=a[l](o);return i}}function _9(e,t){const i=[],a={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const l=t.types[o],u=e.indexes[l][a[l]],f=e.values[u]??0;i[o]=f,a[l]++}return i}const H9=(e,t)=>{const i=na.createTransformer(t),a=Uo(e),o=Uo(t);return a.indexes.var.length===o.indexes.var.length&&a.indexes.color.length===o.indexes.color.length&&a.indexes.number.length>=o.indexes.number.length?gh.has(e)&&!o.values.length||gh.has(t)&&!a.values.length?N9(e,t):tl(u5(_9(a,o),o.values),i):ru(e,t)};function d5(e,t,i){return typeof e=="number"&&typeof t=="number"&&typeof i=="number"?We(e,t,i):Dm(e)(e,t)}const G9=e=>{const t=({timestamp:i})=>e(i);return{start:(i=!0)=>Be.update(t,i),stop:()=>Dn(t),now:()=>vt.isProcessing?vt.timestamp:qt.now()}},f5=(e,t,i=10)=>{let a="";const o=Math.max(Math.round(t/i),2);for(let l=0;l<o;l++)a+=Math.round(e(l/(o-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},su=2e4;function Pm(e){let t=0;const i=50;let a=e.next(t);for(;!a.done&&t<su;)t+=i,a=e.next(t);return t>=su?1/0:t}function U9(e,t=100,i){const a=i({...e,keyframes:[0,t]}),o=Math.min(Pm(a),su);return{type:"keyframes",ease:l=>a.next(o*l).value/t,duration:Jn(o)}}const I9=5;function p5(e,t,i){const a=Math.max(t-I9,0);return Em(i-e(a),t-a)}const et={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},jp=.001;function $9({duration:e=et.duration,bounce:t=et.bounce,velocity:i=et.velocity,mass:a=et.mass}){let o,l,u=1-t;u=ni(et.minDamping,et.maxDamping,u),e=ni(et.minDuration,et.maxDuration,Jn(e)),u<1?(o=m=>{const g=m*u,y=g*e,x=g-i,v=bh(m,u),S=Math.exp(-y);return jp-x/v*S},l=m=>{const y=m*u*e,x=y*i+i,v=Math.pow(u,2)*Math.pow(m,2)*e,S=Math.exp(-y),j=bh(Math.pow(m,2),u);return(-o(m)+jp>0?-1:1)*((x-v)*S)/j}):(o=m=>{const g=Math.exp(-m*e),y=(m-i)*e+1;return-jp+g*y},l=m=>{const g=Math.exp(-m*e),y=(i-m)*(e*e);return g*y});const f=5/e,p=F9(o,l,f);if(e=Zn(e),isNaN(p))return{stiffness:et.stiffness,damping:et.damping,duration:e};{const m=Math.pow(p,2)*a;return{stiffness:m,damping:u*2*Math.sqrt(a*m),duration:e}}}const q9=12;function F9(e,t,i){let a=i;for(let o=1;o<q9;o++)a=a-e(a)/t(a);return a}function bh(e,t){return e*Math.sqrt(1-t*t)}const K9=["duration","bounce"],Y9=["stiffness","damping","mass"];function _b(e,t){return t.some(i=>e[i]!==void 0)}function X9(e){let t={velocity:et.velocity,stiffness:et.stiffness,damping:et.damping,mass:et.mass,isResolvedFromDuration:!1,...e};if(!_b(e,Y9)&&_b(e,K9))if(e.visualDuration){const i=e.visualDuration,a=2*Math.PI/(i*1.2),o=a*a,l=2*ni(.05,1,1-(e.bounce||0))*Math.sqrt(o);t={...t,mass:et.mass,stiffness:o,damping:l}}else{const i=$9(e);t={...t,...i,mass:et.mass},t.isResolvedFromDuration=!0}return t}function ou(e=et.visualDuration,t=et.bounce){const i=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:a,restDelta:o}=i;const l=i.keyframes[0],u=i.keyframes[i.keyframes.length-1],f={done:!1,value:l},{stiffness:p,damping:m,mass:g,duration:y,velocity:x,isResolvedFromDuration:v}=X9({...i,velocity:-Jn(i.velocity||0)}),S=x||0,j=m/(2*Math.sqrt(p*g)),C=u-l,k=Jn(Math.sqrt(p/g)),R=Math.abs(C)<5;a||(a=R?et.restSpeed.granular:et.restSpeed.default),o||(o=R?et.restDelta.granular:et.restDelta.default);let A;if(j<1){const M=bh(k,j);A=P=>{const D=Math.exp(-j*k*P);return u-D*((S+j*k*C)/M*Math.sin(M*P)+C*Math.cos(M*P))}}else if(j===1)A=M=>u-Math.exp(-k*M)*(C+(S+k*C)*M);else{const M=k*Math.sqrt(j*j-1);A=P=>{const D=Math.exp(-j*k*P),U=Math.min(M*P,300);return u-D*((S+j*k*C)*Math.sinh(U)+M*C*Math.cosh(U))/M}}const V={calculatedDuration:v&&y||null,next:M=>{const P=A(M);if(v)f.done=M>=y;else{let D=M===0?S:0;j<1&&(D=M===0?Zn(S):p5(A,M,P));const U=Math.abs(D)<=a,G=Math.abs(u-P)<=o;f.done=U&&G}return f.value=f.done?u:P,f},toString:()=>{const M=Math.min(Pm(V),su),P=f5(D=>V.next(M*D).value,M,30);return M+"ms "+P},toTransition:()=>{}};return V}ou.applyToOptions=e=>{const t=U9(e,100,ou);return e.ease=t.ease,e.duration=Zn(t.duration),e.type="keyframes",e};function yh({keyframes:e,velocity:t=0,power:i=.8,timeConstant:a=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:f,max:p,restDelta:m=.5,restSpeed:g}){const y=e[0],x={done:!1,value:y},v=U=>f!==void 0&&U<f||p!==void 0&&U>p,S=U=>f===void 0?p:p===void 0||Math.abs(f-U)<Math.abs(p-U)?f:p;let j=i*t;const C=y+j,k=u===void 0?C:u(C);k!==C&&(j=k-y);const R=U=>-j*Math.exp(-U/a),A=U=>k+R(U),V=U=>{const G=R(U),Y=A(U);x.done=Math.abs(G)<=m,x.value=x.done?k:Y};let M,P;const D=U=>{v(x.value)&&(M=U,P=ou({keyframes:[x.value,S(x.value)],velocity:p5(A,U,x.value),damping:o,stiffness:l,restDelta:m,restSpeed:g}))};return D(0),{calculatedDuration:null,next:U=>{let G=!1;return!P&&M===void 0&&(G=!0,V(U),D(U)),M!==void 0&&U>=M?P.next(U-M):(!G&&V(U),x)}}}function Q9(e,t,i){const a=[],o=i||ki.mix||d5,l=e.length-1;for(let u=0;u<l;u++){let f=o(e[u],e[u+1]);if(t){const p=Array.isArray(t)?t[u]||Kt:t;f=tl(p,f)}a.push(f)}return a}function Nm(e,t,{clamp:i=!0,ease:a,mixer:o}={}){const l=e.length;if(Ho(l===t.length),l===1)return()=>t[0];if(l===2&&t[0]===t[1])return()=>t[1];const u=e[0]===e[1];e[0]>e[l-1]&&(e=[...e].reverse(),t=[...t].reverse());const f=Q9(t,a,o),p=f.length,m=g=>{if(u&&g<e[0])return t[0];let y=0;if(p>1)for(;y<e.length-2&&!(g<e[y+1]);y++);const x=Fr(e[y],e[y+1],g);return f[y](x)};return i?g=>m(ni(e[0],e[l-1],g)):m}function W9(e,t){const i=e[e.length-1];for(let a=1;a<=t;a++){const o=Fr(0,t,a);e.push(We(i,1,o))}}function h5(e){const t=[0];return W9(t,e.length-1),t}function Z9(e,t){return e.map(i=>i*t)}function J9(e,t){return e.map(()=>t||Mm).splice(0,e.length-1)}function Ao({duration:e=300,keyframes:t,times:i,ease:a="easeInOut"}){const o=f9(a)?a.map(Db):Db(a),l={done:!1,value:t[0]},u=Z9(i&&i.length===t.length?i:h5(t),e),f=Nm(u,t,{ease:Array.isArray(o)?o:J9(t,o)});return{calculatedDuration:e,next:p=>(l.value=f(p),l.done=p>=e,l)}}const ej=e=>e!==null;function Vm(e,{repeat:t,repeatType:i="loop"},a,o=1){const l=e.filter(ej),f=o<0||t&&i!=="loop"&&t%2===1?0:l.length-1;return!f||a===void 0?l[f]:a}const tj={decay:yh,inertia:yh,tween:Ao,keyframes:Ao,spring:ou};function m5(e){typeof e.type=="string"&&(e.type=tj[e.type])}class Bm{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,i){return this.finished.then(t,i)}}const nj=e=>e/100;class _m extends Bm{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var a,o;const{motionValue:i}=this.options;i&&i.updatedAt!==qt.now()&&this.tick(qt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(a=this.options).onStop)==null||o.call(a))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;m5(t);const{type:i=Ao,repeat:a=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=t;let{keyframes:f}=t;const p=i||Ao;p!==Ao&&typeof f[0]!="number"&&(this.mixKeyframes=tl(nj,d5(f[0],f[1])),f=[0,100]);const m=p({...t,keyframes:f});l==="mirror"&&(this.mirroredGenerator=p({...t,keyframes:[...f].reverse(),velocity:-u})),m.calculatedDuration===null&&(m.calculatedDuration=Pm(m));const{calculatedDuration:g}=m;this.calculatedDuration=g,this.resolvedDuration=g+o,this.totalDuration=this.resolvedDuration*(a+1)-o,this.generator=m}updateTime(t){const i=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(t,i=!1){const{generator:a,totalDuration:o,mixKeyframes:l,mirroredGenerator:u,resolvedDuration:f,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:m=0,keyframes:g,repeat:y,repeatType:x,repeatDelay:v,type:S,onUpdate:j,finalKeyframe:C}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-o/this.speed,this.startTime)),i?this.currentTime=t:this.updateTime(t);const k=this.currentTime-m*(this.playbackSpeed>=0?1:-1),R=this.playbackSpeed>=0?k<0:k>o;this.currentTime=Math.max(k,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let A=this.currentTime,V=a;if(y){const U=Math.min(this.currentTime,o)/f;let G=Math.floor(U),Y=U%1;!Y&&U>=1&&(Y=1),Y===1&&G--,G=Math.min(G,y+1),!!(G%2)&&(x==="reverse"?(Y=1-Y,v&&(Y-=v/f)):x==="mirror"&&(V=u)),A=ni(0,1,Y)*f}const M=R?{done:!1,value:g[0]}:V.next(A);l&&(M.value=l(M.value));let{done:P}=M;!R&&p!==null&&(P=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const D=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&P);return D&&S!==yh&&(M.value=Vm(g,this.options,C,this.speed)),j&&j(M.value),D&&this.finish(),M}then(t,i){return this.finished.then(t,i)}get duration(){return Jn(this.calculatedDuration)}get time(){return Jn(this.currentTime)}set time(t){var i;t=Zn(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(i=this.driver)==null||i.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(qt.now());const i=this.playbackSpeed!==t;this.playbackSpeed=t,i&&(this.time=Jn(this.currentTime))}play(){var o,l;if(this.isStopped)return;const{driver:t=G9,startTime:i}=this.options;this.driver||(this.driver=t(u=>this.tick(u))),(l=(o=this.options).onPlay)==null||l.call(o);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i??a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(qt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(t=this.options).onComplete)==null||i.call(t)}cancel(){var t,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(t=this.options).onCancel)==null||i.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),t.observe(this)}}function ij(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const za=e=>e*180/Math.PI,xh=e=>{const t=za(Math.atan2(e[1],e[0]));return vh(t)},aj={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:xh,rotateZ:xh,skewX:e=>za(Math.atan(e[1])),skewY:e=>za(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},vh=e=>(e=e%360,e<0&&(e+=360),e),Hb=xh,Gb=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Ub=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),rj={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Gb,scaleY:Ub,scale:e=>(Gb(e)+Ub(e))/2,rotateX:e=>vh(za(Math.atan2(e[6],e[5]))),rotateY:e=>vh(za(Math.atan2(-e[2],e[0]))),rotateZ:Hb,rotate:Hb,skewX:e=>za(Math.atan(e[4])),skewY:e=>za(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function wh(e){return e.includes("scale")?1:0}function Sh(e,t){if(!e||e==="none")return wh(t);const i=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,o;if(i)a=rj,o=i;else{const f=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=aj,o=f}if(!o)return wh(t);const l=a[t],u=o[1].split(",").map(oj);return typeof l=="function"?l(u):u[l]}const sj=(e,t)=>{const{transform:i="none"}=getComputedStyle(e);return Sh(i,t)};function oj(e){return parseFloat(e.trim())}const os=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ls=new Set(os),Ib=e=>e===ss||e===me,lj=new Set(["x","y","z"]),cj=os.filter(e=>!lj.has(e));function uj(e){const t=[];return cj.forEach(i=>{const a=e.getValue(i);a!==void 0&&(t.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),t}const Oa={width:({x:e},{paddingLeft:t="0",paddingRight:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),height:({y:e},{paddingTop:t="0",paddingBottom:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Sh(t,"x"),y:(e,{transform:t})=>Sh(t,"y")};Oa.translateX=Oa.x;Oa.translateY=Oa.y;const La=new Set;let Th=!1,jh=!1,kh=!1;function g5(){if(jh){const e=Array.from(La).filter(a=>a.needsMeasurement),t=new Set(e.map(a=>a.element)),i=new Map;t.forEach(a=>{const o=uj(a);o.length&&(i.set(a,o),a.render())}),e.forEach(a=>a.measureInitialState()),t.forEach(a=>{a.render();const o=i.get(a);o&&o.forEach(([l,u])=>{var f;(f=a.getValue(l))==null||f.set(u)})}),e.forEach(a=>a.measureEndState()),e.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}jh=!1,Th=!1,La.forEach(e=>e.complete(kh)),La.clear()}function b5(){La.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(jh=!0)})}function dj(){kh=!0,b5(),g5(),kh=!1}class Hm{constructor(t,i,a,o,l,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=i,this.name=a,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(La.add(this),Th||(Th=!0,Be.read(b5),Be.resolveKeyframes(g5))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:i,element:a,motionValue:o}=this;if(t[0]===null){const l=o==null?void 0:o.get(),u=t[t.length-1];if(l!==void 0)t[0]=l;else if(a&&i){const f=a.readValue(i,u);f!=null&&(t[0]=f)}t[0]===void 0&&(t[0]=u),o&&l===void 0&&o.set(t[0])}ij(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),La.delete(this)}cancel(){this.state==="scheduled"&&(La.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const fj=e=>e.startsWith("--");function pj(e,t,i){fj(t)?e.style.setProperty(t,i):e.style[t]=i}const y5=jm(()=>window.ScrollTimeline!==void 0),hj={};function mj(e,t){const i=jm(e);return()=>hj[t]??i()}const x5=mj(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),So=([e,t,i,a])=>`cubic-bezier(${e}, ${t}, ${i}, ${a})`,$b={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:So([0,.65,.55,1]),circOut:So([.55,0,1,.45]),backIn:So([.31,.01,.66,-.59]),backOut:So([.33,1.53,.69,.99])};function v5(e,t){if(e)return typeof e=="function"?x5()?f5(e,t):"ease-out":n5(e)?So(e):Array.isArray(e)?e.map(i=>v5(i,t)||$b.easeOut):$b[e]}function gj(e,t,i,{delay:a=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:f="easeOut",times:p}={},m=void 0){const g={[t]:i};p&&(g.offset=p);const y=v5(f,o);Array.isArray(y)&&(g.easing=y);const x={delay:a,duration:o,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"};return m&&(x.pseudoElement=m),e.animate(g,x)}function w5(e){return typeof e=="function"&&"applyToOptions"in e}function bj({type:e,...t}){return w5(e)&&x5()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class yj extends Bm{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:i,name:a,keyframes:o,pseudoElement:l,allowFlatten:u=!1,finalKeyframe:f,onComplete:p}=t;this.isPseudoElement=!!l,this.allowFlatten=u,this.options=t,Ho(typeof t.type!="string");const m=bj(t);this.animation=gj(i,a,o,m,l),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const g=Vm(o,this.options,f,this.speed);this.updateMotionValue?this.updateMotionValue(g):pj(i,a,g),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,i;(i=(t=this.animation).finish)==null||i.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,i;this.isPseudoElement||(i=(t=this.animation).commitStyles)==null||i.call(t)}get duration(){var i,a;const t=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return Jn(Number(t))}get time(){return Jn(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=Zn(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:i}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&y5()?(this.animation.timeline=t,Kt):i(this)}}const S5={anticipate:Jv,backInOut:Zv,circInOut:t5};function xj(e){return e in S5}function vj(e){typeof e.ease=="string"&&xj(e.ease)&&(e.ease=S5[e.ease])}const qb=10;class wj extends yj{constructor(t){vj(t),m5(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:i,onUpdate:a,onComplete:o,element:l,...u}=this.options;if(!i)return;if(t!==void 0){i.set(t);return}const f=new _m({...u,autoplay:!1}),p=Zn(this.finishedTime??this.time);i.setWithVelocity(f.sample(p-qb).value,f.sample(p).value,qb),f.stop()}}const Fb=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(na.test(e)||e==="0")&&!e.startsWith("url("));function Sj(e){const t=e[0];if(e.length===1)return!0;for(let i=0;i<e.length;i++)if(e[i]!==t)return!0}function Tj(e,t,i,a){const o=e[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const l=e[e.length-1],u=Fb(o,t),f=Fb(l,t);return!u||!f?!1:Sj(e)||(i==="spring"||w5(i))&&a}function Eh(e){e.duration=0,e.type}const jj=new Set(["opacity","clipPath","filter","transform"]),kj=jm(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Ej(e){var g;const{motionValue:t,name:i,repeatDelay:a,repeatType:o,damping:l,type:u}=e;if(!(((g=t==null?void 0:t.owner)==null?void 0:g.current)instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:m}=t.owner.getProps();return kj()&&i&&jj.has(i)&&(i!=="transform"||!m)&&!p&&!a&&o!=="mirror"&&l!==0&&u!=="inertia"}const Aj=40;class Cj extends Bm{constructor({autoplay:t=!0,delay:i=0,type:a="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",keyframes:f,name:p,motionValue:m,element:g,...y}){var S;super(),this.stop=()=>{var j,C;this._animation&&(this._animation.stop(),(j=this.stopTimeline)==null||j.call(this)),(C=this.keyframeResolver)==null||C.cancel()},this.createdAt=qt.now();const x={autoplay:t,delay:i,type:a,repeat:o,repeatDelay:l,repeatType:u,name:p,motionValue:m,element:g,...y},v=(g==null?void 0:g.KeyframeResolver)||Hm;this.keyframeResolver=new v(f,(j,C,k)=>this.onKeyframesResolved(j,C,x,!k),p,m,g),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(t,i,a,o){this.keyframeResolver=void 0;const{name:l,type:u,velocity:f,delay:p,isHandoff:m,onUpdate:g}=a;this.resolvedAt=qt.now(),Tj(t,l,u,f)||((ki.instantAnimations||!p)&&(g==null||g(Vm(t,a,i))),t[0]=t[t.length-1],Eh(a),a.repeat=0);const x={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>Aj?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:t},v=!m&&Ej(x)?new wj({...x,element:x.motionValue.owner.current}):new _m(x);v.finished.then(()=>this.notifyFinished()).catch(Kt),this.pendingTimeline&&(this.stopTimeline=v.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=v}get finished(){return this._animation?this.animation.finished:this._finished}then(t,i){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),dj()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const Mj=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function zj(e){const t=Mj.exec(e);if(!t)return[,];const[,i,a,o]=t;return[`--${i??a}`,o]}function T5(e,t,i=1){const[a,o]=zj(e);if(!a)return;const l=window.getComputedStyle(t).getPropertyValue(a);if(l){const u=l.trim();return Fv(u)?parseFloat(u):u}return Rm(o)?T5(o,t,i+1):o}function Gm(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const j5=new Set(["width","height","top","left","right","bottom",...os]),Rj={test:e=>e==="auto",parse:e=>e},k5=e=>t=>t.test(e),E5=[ss,me,ei,Zi,k9,j9,Rj],Kb=e=>E5.find(k5(e));function Oj(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Yv(e):!0}const Lj=new Set(["brightness","contrast","saturate","opacity"]);function Dj(e){const[t,i]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[a]=i.match(Om)||[];if(!a)return e;const o=i.replace(a,"");let l=Lj.has(t)?1:0;return a!==i&&(l*=100),t+"("+l+o+")"}const Pj=/\b([a-z-]*)\(.*?\)/gu,Ah={...na,getAnimatableNone:e=>{const t=e.match(Pj);return t?t.map(Dj).join(" "):e}},Yb={...ss,transform:Math.round},Nj={rotate:Zi,rotateX:Zi,rotateY:Zi,rotateZ:Zi,scale:jc,scaleX:jc,scaleY:jc,scaleZ:jc,skew:Zi,skewX:Zi,skewY:Zi,distance:me,translateX:me,translateY:me,translateZ:me,x:me,y:me,z:me,perspective:me,transformPerspective:me,opacity:Go,originX:Pb,originY:Pb,originZ:me},Um={borderWidth:me,borderTopWidth:me,borderRightWidth:me,borderBottomWidth:me,borderLeftWidth:me,borderRadius:me,radius:me,borderTopLeftRadius:me,borderTopRightRadius:me,borderBottomRightRadius:me,borderBottomLeftRadius:me,width:me,maxWidth:me,height:me,maxHeight:me,top:me,right:me,bottom:me,left:me,padding:me,paddingTop:me,paddingRight:me,paddingBottom:me,paddingLeft:me,margin:me,marginTop:me,marginRight:me,marginBottom:me,marginLeft:me,backgroundPositionX:me,backgroundPositionY:me,...Nj,zIndex:Yb,fillOpacity:Go,strokeOpacity:Go,numOctaves:Yb},Vj={...Um,color:st,backgroundColor:st,outlineColor:st,fill:st,stroke:st,borderColor:st,borderTopColor:st,borderRightColor:st,borderBottomColor:st,borderLeftColor:st,filter:Ah,WebkitFilter:Ah},A5=e=>Vj[e];function C5(e,t){let i=A5(e);return i!==Ah&&(i=na),i.getAnimatableNone?i.getAnimatableNone(t):void 0}const Bj=new Set(["auto","none","0"]);function _j(e,t,i){let a=0,o;for(;a<e.length&&!o;){const l=e[a];typeof l=="string"&&!Bj.has(l)&&Uo(l).values.length&&(o=e[a]),a++}if(o&&i)for(const l of t)e[l]=C5(i,o)}class Hj extends Hm{constructor(t,i,a,o,l){super(t,i,a,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let p=0;p<t.length;p++){let m=t[p];if(typeof m=="string"&&(m=m.trim(),Rm(m))){const g=T5(m,i.current);g!==void 0&&(t[p]=g),p===t.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!j5.has(a)||t.length!==2)return;const[o,l]=t,u=Kb(o),f=Kb(l);if(u!==f)if(Ib(u)&&Ib(f))for(let p=0;p<t.length;p++){const m=t[p];typeof m=="string"&&(t[p]=parseFloat(m))}else Oa[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:i}=this,a=[];for(let o=0;o<t.length;o++)(t[o]===null||Oj(t[o]))&&a.push(o);a.length&&_j(t,a,i)}measureInitialState(){const{element:t,unresolvedKeyframes:i,name:a}=this;if(!t||!t.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Oa[a](t.measureViewportBox(),window.getComputedStyle(t.current)),i[0]=this.measuredOrigin;const o=i[i.length-1];o!==void 0&&t.getValue(a,o).jump(o,!1)}measureEndState(){var f;const{element:t,name:i,unresolvedKeyframes:a}=this;if(!t||!t.current)return;const o=t.getValue(i);o&&o.jump(this.measuredOrigin,!1);const l=a.length-1,u=a[l];a[l]=Oa[i](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),(f=this.removedTransforms)!=null&&f.length&&this.removedTransforms.forEach(([p,m])=>{t.getValue(p).set(m)}),this.resolveNoneKeyframes()}}function M5(e,t,i){if(e instanceof EventTarget)return[e];if(typeof e=="string"){const o=document.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}const z5=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function Im(e){return Kv(e)&&"offsetHeight"in e}const Xb=30,Gj=e=>!isNaN(parseFloat(e)),Co={current:void 0};class Uj{constructor(t,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var l;const o=qt.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((l=this.events.change)==null||l.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=i.owner}setCurrent(t){this.current=t,this.updatedAt=qt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=Gj(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,i){this.events[t]||(this.events[t]=new km);const a=this.events[t].add(i);return t==="change"?()=>{a(),Be.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,i){this.passiveEffect=t,this.stopPassiveEffect=i}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-a}jump(t,i=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return Co.current&&Co.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=qt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Xb)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,Xb);return Em(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(t){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=t(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,i;(t=this.dependents)==null||t.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Rn(e,t){return new Uj(e,t)}const{schedule:$m}=i5(queueMicrotask,!1),zn={x:!1,y:!1};function R5(){return zn.x||zn.y}function Ij(e){return e==="x"||e==="y"?zn[e]?null:(zn[e]=!0,()=>{zn[e]=!1}):zn.x||zn.y?null:(zn.x=zn.y=!0,()=>{zn.x=zn.y=!1})}function O5(e,t){const i=M5(e),a=new AbortController,o={passive:!0,...t,signal:a.signal};return[i,o,()=>a.abort()]}function Qb(e){return!(e.pointerType==="touch"||R5())}function $j(e,t,i={}){const[a,o,l]=O5(e,i),u=f=>{if(!Qb(f))return;const{target:p}=f,m=t(p,f);if(typeof m!="function"||!p)return;const g=y=>{Qb(y)&&(m(y),p.removeEventListener("pointerleave",g))};p.addEventListener("pointerleave",g,o)};return a.forEach(f=>{f.addEventListener("pointerenter",u,o)}),l}const L5=(e,t)=>t?e===t?!0:L5(e,t.parentElement):!1,qm=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,qj=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Fj(e){return qj.has(e.tagName)||e.tabIndex!==-1}const Ic=new WeakSet;function Wb(e){return t=>{t.key==="Enter"&&e(t)}}function kp(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const Kj=(e,t)=>{const i=e.currentTarget;if(!i)return;const a=Wb(()=>{if(Ic.has(i))return;kp(i,"down");const o=Wb(()=>{kp(i,"up")}),l=()=>kp(i,"cancel");i.addEventListener("keyup",o,t),i.addEventListener("blur",l,t)});i.addEventListener("keydown",a,t),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),t)};function Zb(e){return qm(e)&&!R5()}function Yj(e,t,i={}){const[a,o,l]=O5(e,i),u=f=>{const p=f.currentTarget;if(!Zb(f))return;Ic.add(p);const m=t(p,f),g=(v,S)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",x),Ic.has(p)&&Ic.delete(p),Zb(v)&&typeof m=="function"&&m(v,{success:S})},y=v=>{g(v,p===window||p===document||i.useGlobalTarget||L5(p,v.target))},x=v=>{g(v,!1)};window.addEventListener("pointerup",y,o),window.addEventListener("pointercancel",x,o)};return a.forEach(f=>{(i.useGlobalTarget?window:f).addEventListener("pointerdown",u,o),Im(f)&&(f.addEventListener("focus",m=>Kj(m,o)),!Fj(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),l}function Fm(e){return Kv(e)&&"ownerSVGElement"in e}const $c=new WeakMap;let Ji;const D5=(e,t,i)=>(a,o)=>o&&o[0]?o[0][e+"Size"]:Fm(a)&&"getBBox"in a?a.getBBox()[t]:a[i],Xj=D5("inline","width","offsetWidth"),Qj=D5("block","height","offsetHeight");function Wj({target:e,borderBoxSize:t}){var i;(i=$c.get(e))==null||i.forEach(a=>{a(e,{get width(){return Xj(e,t)},get height(){return Qj(e,t)}})})}function Zj(e){e.forEach(Wj)}function Jj(){typeof ResizeObserver>"u"||(Ji=new ResizeObserver(Zj))}function ek(e,t){Ji||Jj();const i=M5(e);return i.forEach(a=>{let o=$c.get(a);o||(o=new Set,$c.set(a,o)),o.add(t),Ji==null||Ji.observe(a)}),()=>{i.forEach(a=>{const o=$c.get(a);o==null||o.delete(t),o!=null&&o.size||Ji==null||Ji.unobserve(a)})}}const qc=new Set;let Pr;function tk(){Pr=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};qc.forEach(t=>t(e))},window.addEventListener("resize",Pr)}function nk(e){return qc.add(e),Pr||tk(),()=>{qc.delete(e),!qc.size&&typeof Pr=="function"&&(window.removeEventListener("resize",Pr),Pr=void 0)}}function ik(e,t){return typeof e=="function"?nk(e):ek(e,t)}function P5(e,t){let i;const a=()=>{const{currentTime:o}=t,u=(o===null?0:o.value)/100;i!==u&&e(u),i=u};return Be.preUpdate(a,!0),()=>Dn(a)}function ak(e){return Fm(e)&&e.tagName==="svg"}function rk(...e){const t=!Array.isArray(e[0]),i=t?0:-1,a=e[0+i],o=e[1+i],l=e[2+i],u=e[3+i],f=Nm(o,l,u);return t?f(a):f}const Dt=e=>!!(e&&e.getVelocity),sk=[...E5,st,na],ok=e=>sk.find(k5(e)),Nu=E.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class lk extends E.Component{getSnapshotBeforeUpdate(t){const i=this.props.childRef.current;if(i&&t.isPresent&&!this.props.isPresent){const a=i.offsetParent,o=Im(a)&&a.offsetWidth||0,l=this.props.sizeRef.current;l.height=i.offsetHeight||0,l.width=i.offsetWidth||0,l.top=i.offsetTop,l.left=i.offsetLeft,l.right=o-l.width-l.left}return null}componentDidUpdate(){}render(){return this.props.children}}function ck({children:e,isPresent:t,anchorX:i,root:a}){const o=E.useId(),l=E.useRef(null),u=E.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:f}=E.useContext(Nu);return E.useInsertionEffect(()=>{const{width:p,height:m,top:g,left:y,right:x}=u.current;if(t||!l.current||!p||!m)return;const v=i==="left"?`left: ${y}`:`right: ${x}`;l.current.dataset.motionPopId=o;const S=document.createElement("style");f&&(S.nonce=f);const j=a??document.head;return j.appendChild(S),S.sheet&&S.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${m}px !important;
            ${v}px !important;
            top: ${g}px !important;
          }
        `),()=>{j.contains(S)&&j.removeChild(S)}},[t]),d.jsx(lk,{isPresent:t,childRef:l,sizeRef:u,children:E.cloneElement(e,{ref:l})})}const uk=({children:e,initial:t,isPresent:i,onExitComplete:a,custom:o,presenceAffectsLayout:l,mode:u,anchorX:f,root:p})=>{const m=rs(dk),g=E.useId();let y=!0,x=E.useMemo(()=>(y=!1,{id:g,initial:t,isPresent:i,custom:o,onExitComplete:v=>{m.set(v,!0);for(const S of m.values())if(!S)return;a&&a()},register:v=>(m.set(v,!1),()=>m.delete(v))}),[i,m,a]);return l&&y&&(x={...x}),E.useMemo(()=>{m.forEach((v,S)=>m.set(S,!1))},[i]),E.useEffect(()=>{!i&&!m.size&&a&&a()},[i]),u==="popLayout"&&(e=d.jsx(ck,{isPresent:i,anchorX:f,root:p,children:e})),d.jsx(Du.Provider,{value:x,children:e})};function dk(){return new Map}function N5(e=!0){const t=E.useContext(Du);if(t===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:o}=t,l=E.useId();E.useEffect(()=>{if(e)return o(l)},[e]);const u=E.useCallback(()=>e&&a&&a(l),[l,a,e]);return!i&&a?[!1,u]:[!0]}const kc=e=>e.key||"";function Jb(e){const t=[];return E.Children.forEach(e,i=>{E.isValidElement(i)&&t.push(i)}),t}const V5=({children:e,custom:t,initial:i=!0,onExitComplete:a,presenceAffectsLayout:o=!0,mode:l="sync",propagate:u=!1,anchorX:f="left",root:p})=>{const[m,g]=N5(u),y=E.useMemo(()=>Jb(e),[e]),x=u&&!m?[]:y.map(kc),v=E.useRef(!0),S=E.useRef(y),j=rs(()=>new Map),[C,k]=E.useState(y),[R,A]=E.useState(y);Lu(()=>{v.current=!1,S.current=y;for(let P=0;P<R.length;P++){const D=kc(R[P]);x.includes(D)?j.delete(D):j.get(D)!==!0&&j.set(D,!1)}},[R,x.length,x.join("-")]);const V=[];if(y!==C){let P=[...y];for(let D=0;D<R.length;D++){const U=R[D],G=kc(U);x.includes(G)||(P.splice(D,0,U),V.push(U))}return l==="wait"&&V.length&&(P=V),A(Jb(P)),k(y),null}const{forceRender:M}=E.useContext(vm);return d.jsx(d.Fragment,{children:R.map(P=>{const D=kc(P),U=u&&!m?!1:y===R||x.includes(D),G=()=>{if(j.has(D))j.set(D,!0);else return;let Y=!0;j.forEach(Z=>{Z||(Y=!1)}),Y&&(M==null||M(),A(S.current),u&&(g==null||g()),a&&a())};return d.jsx(uk,{isPresent:U,initial:!v.current||i?void 0:!1,custom:t,presenceAffectsLayout:o,mode:l,root:p,onExitComplete:U?void 0:G,anchorX:f,children:P},D)})})},B5=E.createContext({strict:!1}),ey={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Kr={};for(const e in ey)Kr[e]={isEnabled:t=>ey[e].some(i=>!!t[i])};function fk(e){for(const t in e)Kr[t]={...Kr[t],...e[t]}}const pk=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function lu(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||pk.has(e)}let _5=e=>!lu(e);function hk(e){typeof e=="function"&&(_5=t=>t.startsWith("on")?!lu(t):e(t))}try{hk(require("@emotion/is-prop-valid").default)}catch{}function mk(e,t,i){const a={};for(const o in e)o==="values"&&typeof e.values=="object"||(_5(o)||i===!0&&lu(o)||!t&&!lu(o)||e.draggable&&o.startsWith("onDrag"))&&(a[o]=e[o]);return a}const Vu=E.createContext({});function Bu(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Io(e){return typeof e=="string"||Array.isArray(e)}const Km=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ym=["initial",...Km];function _u(e){return Bu(e.animate)||Ym.some(t=>Io(e[t]))}function H5(e){return!!(_u(e)||e.variants)}function gk(e,t){if(_u(e)){const{initial:i,animate:a}=e;return{initial:i===!1||Io(i)?i:void 0,animate:Io(a)?a:void 0}}return e.inherit!==!1?t:{}}function bk(e){const{initial:t,animate:i}=gk(e,E.useContext(Vu));return E.useMemo(()=>({initial:t,animate:i}),[ty(t),ty(i)])}function ty(e){return Array.isArray(e)?e.join(" "):e}const $o={};function yk(e){for(const t in e)$o[t]=e[t],zm(t)&&($o[t].isCSSVariable=!0)}function G5(e,{layout:t,layoutId:i}){return ls.has(e)||e.startsWith("origin")||(t||i!==void 0)&&(!!$o[e]||e==="opacity")}const xk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},vk=os.length;function wk(e,t,i){let a="",o=!0;for(let l=0;l<vk;l++){const u=os[l],f=e[u];if(f===void 0)continue;let p=!0;if(typeof f=="number"?p=f===(u.startsWith("scale")?1:0):p=parseFloat(f)===0,!p||i){const m=z5(f,Um[u]);if(!p){o=!1;const g=xk[u]||u;a+=`${g}(${m}) `}i&&(t[u]=m)}}return a=a.trim(),i?a=i(t,o?"":a):o&&(a="none"),a}function Xm(e,t,i){const{style:a,vars:o,transformOrigin:l}=e;let u=!1,f=!1;for(const p in t){const m=t[p];if(ls.has(p)){u=!0;continue}else if(zm(p)){o[p]=m;continue}else{const g=z5(m,Um[p]);p.startsWith("origin")?(f=!0,l[p]=g):a[p]=g}}if(t.transform||(u||i?a.transform=wk(t,e.transform,i):a.transform&&(a.transform="none")),f){const{originX:p="50%",originY:m="50%",originZ:g=0}=l;a.transformOrigin=`${p} ${m} ${g}`}}const Qm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function U5(e,t,i){for(const a in t)!Dt(t[a])&&!G5(a,i)&&(e[a]=t[a])}function Sk({transformTemplate:e},t){return E.useMemo(()=>{const i=Qm();return Xm(i,t,e),Object.assign({},i.vars,i.style)},[t])}function Tk(e,t){const i=e.style||{},a={};return U5(a,i,e),Object.assign(a,Sk(e,t)),a}function jk(e,t){const i={},a=Tk(e,t);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=a,i}const kk={offset:"stroke-dashoffset",array:"stroke-dasharray"},Ek={offset:"strokeDashoffset",array:"strokeDasharray"};function Ak(e,t,i=1,a=0,o=!0){e.pathLength=1;const l=o?kk:Ek;e[l.offset]=me.transform(-a);const u=me.transform(t),f=me.transform(i);e[l.array]=`${u} ${f}`}function I5(e,{attrX:t,attrY:i,attrScale:a,pathLength:o,pathSpacing:l=1,pathOffset:u=0,...f},p,m,g){if(Xm(e,f,m),p){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:y,style:x}=e;y.transform&&(x.transform=y.transform,delete y.transform),(x.transform||y.transformOrigin)&&(x.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),x.transform&&(x.transformBox=(g==null?void 0:g.transformBox)??"fill-box",delete y.transformBox),t!==void 0&&(y.x=t),i!==void 0&&(y.y=i),a!==void 0&&(y.scale=a),o!==void 0&&Ak(y,o,l,u,!1)}const $5=()=>({...Qm(),attrs:{}}),q5=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Ck(e,t,i,a){const o=E.useMemo(()=>{const l=$5();return I5(l,t,q5(a),e.transformTemplate,e.style),{...l.attrs,style:{...l.style}}},[t]);if(e.style){const l={};U5(l,e.style,e),o.style={...l,...o.style}}return o}const Mk=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Wm(e){return typeof e!="string"||e.includes("-")?!1:!!(Mk.indexOf(e)>-1||/[A-Z]/u.test(e))}function zk(e,t,i,{latestValues:a},o,l=!1){const f=(Wm(e)?Ck:jk)(t,a,o,e),p=mk(t,typeof e=="string",l),m=e!==E.Fragment?{...p,...f,ref:i}:{},{children:g}=t,y=E.useMemo(()=>Dt(g)?g.get():g,[g]);return E.createElement(e,{...m,children:y})}function ny(e){const t=[{},{}];return e==null||e.values.forEach((i,a)=>{t[0][a]=i.get(),t[1][a]=i.getVelocity()}),t}function Zm(e,t,i,a){if(typeof t=="function"){const[o,l]=ny(a);t=t(i!==void 0?i:e.custom,o,l)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[o,l]=ny(a);t=t(i!==void 0?i:e.custom,o,l)}return t}function Fc(e){return Dt(e)?e.get():e}function Rk({scrapeMotionValuesFromProps:e,createRenderState:t},i,a,o){return{latestValues:Ok(i,a,o,e),renderState:t()}}function Ok(e,t,i,a){const o={},l=a(e,{});for(const x in l)o[x]=Fc(l[x]);let{initial:u,animate:f}=e;const p=_u(e),m=H5(e);t&&m&&!p&&e.inherit!==!1&&(u===void 0&&(u=t.initial),f===void 0&&(f=t.animate));let g=i?i.initial===!1:!1;g=g||u===!1;const y=g?f:u;if(y&&typeof y!="boolean"&&!Bu(y)){const x=Array.isArray(y)?y:[y];for(let v=0;v<x.length;v++){const S=Zm(e,x[v]);if(S){const{transitionEnd:j,transition:C,...k}=S;for(const R in k){let A=k[R];if(Array.isArray(A)){const V=g?A.length-1:0;A=A[V]}A!==null&&(o[R]=A)}for(const R in j)o[R]=j[R]}}}return o}const F5=e=>(t,i)=>{const a=E.useContext(Vu),o=E.useContext(Du),l=()=>Rk(e,t,a,o);return i?l():rs(l)};function Jm(e,t,i){var l;const{style:a}=e,o={};for(const u in a)(Dt(a[u])||t.style&&Dt(t.style[u])||G5(u,e)||((l=i==null?void 0:i.getValue(u))==null?void 0:l.liveStyle)!==void 0)&&(o[u]=a[u]);return o}const Lk=F5({scrapeMotionValuesFromProps:Jm,createRenderState:Qm});function K5(e,t,i){const a=Jm(e,t,i);for(const o in e)if(Dt(e[o])||Dt(t[o])){const l=os.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;a[l]=e[o]}return a}const Dk=F5({scrapeMotionValuesFromProps:K5,createRenderState:$5}),Pk=Symbol.for("motionComponentSymbol");function Nr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Nk(e,t,i){return E.useCallback(a=>{a&&e.onMount&&e.onMount(a),t&&(a?t.mount(a):t.unmount()),i&&(typeof i=="function"?i(a):Nr(i)&&(i.current=a))},[t])}const eg=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Vk="framerAppearId",Y5="data-"+eg(Vk),X5=E.createContext({});function Bk(e,t,i,a,o){var j,C;const{visualElement:l}=E.useContext(Vu),u=E.useContext(B5),f=E.useContext(Du),p=E.useContext(Nu).reducedMotion,m=E.useRef(null);a=a||u.renderer,!m.current&&a&&(m.current=a(e,{visualState:t,parent:l,props:i,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:p}));const g=m.current,y=E.useContext(X5);g&&!g.projection&&o&&(g.type==="html"||g.type==="svg")&&_k(m.current,i,o,y);const x=E.useRef(!1);E.useInsertionEffect(()=>{g&&x.current&&g.update(i,f)});const v=i[Y5],S=E.useRef(!!v&&!((j=window.MotionHandoffIsComplete)!=null&&j.call(window,v))&&((C=window.MotionHasOptimisedAnimation)==null?void 0:C.call(window,v)));return Lu(()=>{g&&(x.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),S.current&&g.animationState&&g.animationState.animateChanges())}),E.useEffect(()=>{g&&(!S.current&&g.animationState&&g.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var k;(k=window.MotionHandoffMarkAsComplete)==null||k.call(window,v)}),S.current=!1),g.enteringChildren=void 0)}),g}function _k(e,t,i,a){const{layoutId:o,layout:l,drag:u,dragConstraints:f,layoutScroll:p,layoutRoot:m,layoutCrossfade:g}=t;e.projection=new i(e.latestValues,t["data-framer-portal-id"]?void 0:Q5(e.parent)),e.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||f&&Nr(f),visualElement:e,animationType:typeof l=="string"?l:"both",initialPromotionConfig:a,crossfade:g,layoutScroll:p,layoutRoot:m})}function Q5(e){if(e)return e.options.allowProjection!==!1?e.projection:Q5(e.parent)}function Ep(e,{forwardMotionProps:t=!1}={},i,a){i&&fk(i);const o=Wm(e)?Dk:Lk;function l(f,p){let m;const g={...E.useContext(Nu),...f,layoutId:Hk(f)},{isStatic:y}=g,x=bk(f),v=o(f,y);if(!y&&wm){Gk();const S=Uk(g);m=S.MeasureLayout,x.visualElement=Bk(e,v,g,a,S.ProjectionNode)}return d.jsxs(Vu.Provider,{value:x,children:[m&&x.visualElement?d.jsx(m,{visualElement:x.visualElement,...g}):null,zk(e,f,Nk(v,x.visualElement,p),v,y,t)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const u=E.forwardRef(l);return u[Pk]=e,u}function Hk({layoutId:e}){const t=E.useContext(vm).id;return t&&e!==void 0?t+"-"+e:e}function Gk(e,t){E.useContext(B5).strict}function Uk(e){const{drag:t,layout:i}=Kr;if(!t&&!i)return{};const a={...t,...i};return{MeasureLayout:t!=null&&t.isEnabled(e)||i!=null&&i.isEnabled(e)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}function Ik(e,t){if(typeof Proxy>"u")return Ep;const i=new Map,a=(l,u)=>Ep(l,u,e,t),o=(l,u)=>a(l,u);return new Proxy(o,{get:(l,u)=>u==="create"?a:(i.has(u)||i.set(u,Ep(u,void 0,e,t)),i.get(u))})}function W5({top:e,left:t,right:i,bottom:a}){return{x:{min:t,max:i},y:{min:e,max:a}}}function $k({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function qk(e,t){if(!t)return e;const i=t({x:e.left,y:e.top}),a=t({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function Ap(e){return e===void 0||e===1}function Ch({scale:e,scaleX:t,scaleY:i}){return!Ap(e)||!Ap(t)||!Ap(i)}function Ca(e){return Ch(e)||Z5(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Z5(e){return iy(e.x)||iy(e.y)}function iy(e){return e&&e!=="0%"}function cu(e,t,i){const a=e-i,o=t*a;return i+o}function ay(e,t,i,a,o){return o!==void 0&&(e=cu(e,o,a)),cu(e,i,a)+t}function Mh(e,t=0,i=1,a,o){e.min=ay(e.min,t,i,a,o),e.max=ay(e.max,t,i,a,o)}function J5(e,{x:t,y:i}){Mh(e.x,t.translate,t.scale,t.originPoint),Mh(e.y,i.translate,i.scale,i.originPoint)}const ry=.999999999999,sy=1.0000000000001;function Fk(e,t,i,a=!1){const o=i.length;if(!o)return;t.x=t.y=1;let l,u;for(let f=0;f<o;f++){l=i[f],u=l.projectionDelta;const{visualElement:p}=l.options;p&&p.props.style&&p.props.style.display==="contents"||(a&&l.options.layoutScroll&&l.scroll&&l!==l.root&&Br(e,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(t.x*=u.x.scale,t.y*=u.y.scale,J5(e,u)),a&&Ca(l.latestValues)&&Br(e,l.latestValues))}t.x<sy&&t.x>ry&&(t.x=1),t.y<sy&&t.y>ry&&(t.y=1)}function Vr(e,t){e.min=e.min+t,e.max=e.max+t}function oy(e,t,i,a,o=.5){const l=We(e.min,e.max,o);Mh(e,t,i,l,a)}function Br(e,t){oy(e.x,t.x,t.scaleX,t.scale,t.originX),oy(e.y,t.y,t.scaleY,t.scale,t.originY)}function e4(e,t){return W5(qk(e.getBoundingClientRect(),t))}function Kk(e,t,i){const a=e4(e,i),{scroll:o}=t;return o&&(Vr(a.x,o.offset.x),Vr(a.y,o.offset.y)),a}const ly=()=>({translate:0,scale:1,origin:0,originPoint:0}),_r=()=>({x:ly(),y:ly()}),cy=()=>({min:0,max:0}),it=()=>({x:cy(),y:cy()}),zh={current:null},t4={current:!1};function Yk(){if(t4.current=!0,!!wm)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>zh.current=e.matches;e.addEventListener("change",t),t()}else zh.current=!1}const Xk=new WeakMap;function Qk(e,t,i){for(const a in t){const o=t[a],l=i[a];if(Dt(o))e.addValue(a,o);else if(Dt(l))e.addValue(a,Rn(o,{owner:e}));else if(l!==o)if(e.hasValue(a)){const u=e.getValue(a);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=e.getStaticValue(a);e.addValue(a,Rn(u!==void 0?u:o,{owner:e}))}}for(const a in i)t[a]===void 0&&e.removeValue(a);return t}const uy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Wk{scrapeMotionValuesFromProps(t,i,a){return{}}constructor({parent:t,props:i,presenceContext:a,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Hm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=qt.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,Be.render(this.render,!1,!0))};const{latestValues:p,renderState:m}=u;this.latestValues=p,this.baseTarget={...p},this.initialValues=i.initial?{...p}:{},this.renderState=m,this.parent=t,this.props=i,this.presenceContext=a,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=f,this.blockInitialAnimation=!!l,this.isControllingVariants=_u(i),this.isVariantNode=H5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:g,...y}=this.scrapeMotionValuesFromProps(i,{},this);for(const x in y){const v=y[x];p[x]!==void 0&&Dt(v)&&v.set(p[x])}}mount(t){var i;this.current=t,Xk.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((a,o)=>this.bindToMotionValue(o,a)),t4.current||Yk(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:zh.current,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),Dn(this.notifyUpdate),Dn(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,i){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const a=ls.has(t);a&&this.onBindTransform&&this.onBindTransform();const o=i.on("change",u=>{this.latestValues[t]=u,this.props.onUpdate&&Be.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,t,i)),this.valueSubscriptions.set(t,()=>{o(),l&&l(),i.owner&&i.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Kr){const i=Kr[t];if(!i)continue;const{isEnabled:a,Feature:o}=i;if(!this.features[t]&&o&&a(this.props)&&(this.features[t]=new o(this)),this.features[t]){const l=this.features[t];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):it()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,i){this.latestValues[t]=i}update(t,i){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<uy.length;a++){const o=uy[a];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=t[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=Qk(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(t),()=>i.variantChildren.delete(t)}addValue(t,i){const a=this.values.get(t);i!==a&&(a&&this.removeValue(t),this.bindToMotionValue(t,i),this.values.set(t,i),this.latestValues[t]=i.get())}removeValue(t){this.values.delete(t);const i=this.valueSubscriptions.get(t);i&&(i(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,i){if(this.props.values&&this.props.values[t])return this.props.values[t];let a=this.values.get(t);return a===void 0&&i!==void 0&&(a=Rn(i===null?void 0:i,{owner:this}),this.addValue(t,a)),a}readValue(t,i){let a=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return a!=null&&(typeof a=="string"&&(Fv(a)||Yv(a))?a=parseFloat(a):!ok(a)&&na.test(i)&&(a=C5(t,i)),this.setBaseTarget(t,Dt(a)?a.get():a)),Dt(a)?a.get():a}setBaseTarget(t,i){this.baseTarget[t]=i}getBaseTarget(t){var l;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const u=Zm(this.props,i,(l=this.presenceContext)==null?void 0:l.custom);u&&(a=u[t])}if(i&&a!==void 0)return a;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Dt(o)?o:this.initialValues[t]!==void 0&&a===void 0?void 0:this.baseTarget[t]}on(t,i){return this.events[t]||(this.events[t]=new km),this.events[t].add(i)}notify(t,...i){this.events[t]&&this.events[t].notify(...i)}scheduleRenderMicrotask(){$m.render(this.render)}}class n4 extends Wk{constructor(){super(...arguments),this.KeyframeResolver=Hj}sortInstanceNodePosition(t,i){return t.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(t,i){return t.style?t.style[i]:void 0}removeValueFromRenderState(t,{vars:i,style:a}){delete i[t],delete a[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Dt(t)&&(this.childSubscription=t.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}function i4(e,{style:t,vars:i},a,o){const l=e.style;let u;for(u in t)l[u]=t[u];o==null||o.applyProjectionStyles(l,a);for(u in i)l.setProperty(u,i[u])}function Zk(e){return window.getComputedStyle(e)}class Jk extends n4{constructor(){super(...arguments),this.type="html",this.renderInstance=i4}readValueFromInstance(t,i){var a;if(ls.has(i))return(a=this.projection)!=null&&a.isProjecting?wh(i):sj(t,i);{const o=Zk(t),l=(zm(i)?o.getPropertyValue(i):o[i])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(t,{transformPagePoint:i}){return e4(t,i)}build(t,i,a){Xm(t,i,a.transformTemplate)}scrapeMotionValuesFromProps(t,i,a){return Jm(t,i,a)}}const a4=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function e7(e,t,i,a){i4(e,t,void 0,a);for(const o in t.attrs)e.setAttribute(a4.has(o)?o:eg(o),t.attrs[o])}class t7 extends n4{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=it}getBaseTargetFromProps(t,i){return t[i]}readValueFromInstance(t,i){if(ls.has(i)){const a=A5(i);return a&&a.default||0}return i=a4.has(i)?i:eg(i),t.getAttribute(i)}scrapeMotionValuesFromProps(t,i,a){return K5(t,i,a)}build(t,i,a){I5(t,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(t,i,a,o){e7(t,i,a,o)}mount(t){this.isSVGTag=q5(t.tagName),super.mount(t)}}const n7=(e,t)=>Wm(e)?new t7(t):new Jk(t,{allowProjection:e!==E.Fragment});function Ir(e,t,i){const a=e.getProps();return Zm(a,t,i!==void 0?i:a.custom,e)}const Rh=e=>Array.isArray(e);function i7(e,t,i){e.hasValue(t)?e.getValue(t).set(i):e.addValue(t,Rn(i))}function a7(e){return Rh(e)?e[e.length-1]||0:e}function r7(e,t){const i=Ir(e,t);let{transitionEnd:a={},transition:o={},...l}=i||{};l={...l,...a};for(const u in l){const f=a7(l[u]);i7(e,u,f)}}function s7(e){return!!(Dt(e)&&e.add)}function Oh(e,t){const i=e.getValue("willChange");if(s7(i))return i.add(t);if(!i&&ki.WillChange){const a=new ki.WillChange("auto");e.addValue("willChange",a),a.add(t)}}function r4(e){return e.props[Y5]}const o7=e=>e!==null;function l7(e,{repeat:t,repeatType:i="loop"},a){const o=e.filter(o7),l=t&&i!=="loop"&&t%2===1?0:o.length-1;return o[l]}const c7={type:"spring",stiffness:500,damping:25,restSpeed:10},u7=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),d7={type:"keyframes",duration:.8},f7={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},p7=(e,{keyframes:t})=>t.length>2?d7:ls.has(e)?e.startsWith("scale")?u7(t[1]):c7:f7;function h7({when:e,delay:t,delayChildren:i,staggerChildren:a,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:f,from:p,elapsed:m,...g}){return!!Object.keys(g).length}const tg=(e,t,i,a={},o,l)=>u=>{const f=Gm(a,e)||{},p=f.delay||a.delay||0;let{elapsed:m=0}=a;m=m-Zn(p);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:t.getVelocity(),...f,delay:-m,onUpdate:x=>{t.set(x),f.onUpdate&&f.onUpdate(x)},onComplete:()=>{u(),f.onComplete&&f.onComplete()},name:e,motionValue:t,element:l?void 0:o};h7(f)||Object.assign(g,p7(e,g)),g.duration&&(g.duration=Zn(g.duration)),g.repeatDelay&&(g.repeatDelay=Zn(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let y=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Eh(g),g.delay===0&&(y=!0)),(ki.instantAnimations||ki.skipAnimations)&&(y=!0,Eh(g),g.delay=0),g.allowFlatten=!f.type&&!f.ease,y&&!l&&t.get()!==void 0){const x=l7(g.keyframes,f);if(x!==void 0){Be.update(()=>{g.onUpdate(x),g.onComplete()});return}}return f.isSync?new _m(g):new Cj(g)};function m7({protectedKeys:e,needsAnimating:t},i){const a=e.hasOwnProperty(i)&&t[i]!==!0;return t[i]=!1,a}function s4(e,t,{delay:i=0,transitionOverride:a,type:o}={}){let{transition:l=e.getDefaultTransition(),transitionEnd:u,...f}=t;a&&(l=a);const p=[],m=o&&e.animationState&&e.animationState.getState()[o];for(const g in f){const y=e.getValue(g,e.latestValues[g]??null),x=f[g];if(x===void 0||m&&m7(m,g))continue;const v={delay:i,...Gm(l||{},g)},S=y.get();if(S!==void 0&&!y.isAnimating&&!Array.isArray(x)&&x===S&&!v.velocity)continue;let j=!1;if(window.MotionHandoffAnimation){const k=r4(e);if(k){const R=window.MotionHandoffAnimation(k,g,Be);R!==null&&(v.startTime=R,j=!0)}}Oh(e,g),y.start(tg(g,y,x,e.shouldReduceMotion&&j5.has(g)?{type:!1}:v,e,j));const C=y.animation;C&&p.push(C)}return u&&Promise.all(p).then(()=>{Be.update(()=>{u&&r7(e,u)})}),p}function o4(e,t,i,a=0,o=1){const l=Array.from(e).sort((m,g)=>m.sortNodePosition(g)).indexOf(t),u=e.size,f=(u-1)*a;return typeof i=="function"?i(l,u):o===1?l*a:f-l*a}function Lh(e,t,i={}){var p;const a=Ir(e,t,i.type==="exit"?(p=e.presenceContext)==null?void 0:p.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(o=i.transitionOverride);const l=a?()=>Promise.all(s4(e,a,i)):()=>Promise.resolve(),u=e.variantChildren&&e.variantChildren.size?(m=0)=>{const{delayChildren:g=0,staggerChildren:y,staggerDirection:x}=o;return g7(e,t,m,g,y,x,i)}:()=>Promise.resolve(),{when:f}=o;if(f){const[m,g]=f==="beforeChildren"?[l,u]:[u,l];return m().then(()=>g())}else return Promise.all([l(),u(i.delay)])}function g7(e,t,i=0,a=0,o=0,l=1,u){const f=[];for(const p of e.variantChildren)p.notify("AnimationStart",t),f.push(Lh(p,t,{...u,delay:i+(typeof a=="function"?0:a)+o4(e.variantChildren,p,a,o,l)}).then(()=>p.notify("AnimationComplete",t)));return Promise.all(f)}function b7(e,t,i={}){e.notify("AnimationStart",t);let a;if(Array.isArray(t)){const o=t.map(l=>Lh(e,l,i));a=Promise.all(o)}else if(typeof t=="string")a=Lh(e,t,i);else{const o=typeof t=="function"?Ir(e,t,i.custom):t;a=Promise.all(s4(e,o,i))}return a.then(()=>{e.notify("AnimationComplete",t)})}function l4(e,t){if(!Array.isArray(t))return!1;const i=t.length;if(i!==e.length)return!1;for(let a=0;a<i;a++)if(t[a]!==e[a])return!1;return!0}const y7=Ym.length;function c4(e){if(!e)return;if(!e.isControllingVariants){const i=e.parent?c4(e.parent)||{}:{};return e.props.initial!==void 0&&(i.initial=e.props.initial),i}const t={};for(let i=0;i<y7;i++){const a=Ym[i],o=e.props[a];(Io(o)||o===!1)&&(t[a]=o)}return t}const x7=[...Km].reverse(),v7=Km.length;function w7(e){return t=>Promise.all(t.map(({animation:i,options:a})=>b7(e,i,a)))}function S7(e){let t=w7(e),i=dy(),a=!0;const o=p=>(m,g)=>{var x;const y=Ir(e,g,p==="exit"?(x=e.presenceContext)==null?void 0:x.custom:void 0);if(y){const{transition:v,transitionEnd:S,...j}=y;m={...m,...j,...S}}return m};function l(p){t=p(e)}function u(p){const{props:m}=e,g=c4(e.parent)||{},y=[],x=new Set;let v={},S=1/0;for(let C=0;C<v7;C++){const k=x7[C],R=i[k],A=m[k]!==void 0?m[k]:g[k],V=Io(A),M=k===p?R.isActive:null;M===!1&&(S=C);let P=A===g[k]&&A!==m[k]&&V;if(P&&a&&e.manuallyAnimateOnMount&&(P=!1),R.protectedKeys={...v},!R.isActive&&M===null||!A&&!R.prevProp||Bu(A)||typeof A=="boolean")continue;const D=T7(R.prevProp,A);let U=D||k===p&&R.isActive&&!P&&V||C>S&&V,G=!1;const Y=Array.isArray(A)?A:[A];let Z=Y.reduce(o(k),{});M===!1&&(Z={});const{prevResolvedValues:ne={}}=R,le={...ne,...Z},ce=L=>{U=!0,x.has(L)&&(G=!0,x.delete(L)),R.needsAnimating[L]=!0;const B=e.getValue(L);B&&(B.liveStyle=!1)};for(const L in le){const B=Z[L],Q=ne[L];if(v.hasOwnProperty(L))continue;let z=!1;Rh(B)&&Rh(Q)?z=!l4(B,Q):z=B!==Q,z?B!=null?ce(L):x.add(L):B!==void 0&&x.has(L)?ce(L):R.protectedKeys[L]=!0}R.prevProp=A,R.prevResolvedValues=Z,R.isActive&&(v={...v,...Z}),a&&e.blockInitialAnimation&&(U=!1);const ue=P&&D;U&&(!ue||G)&&y.push(...Y.map(L=>{const B={type:k};if(typeof L=="string"&&a&&!ue&&e.manuallyAnimateOnMount&&e.parent){const{parent:Q}=e,z=Ir(Q,L);if(Q.enteringChildren&&z){const{delayChildren:X}=z.transition||{};B.delay=o4(Q.enteringChildren,e,X)}}return{animation:L,options:B}}))}if(x.size){const C={};if(typeof m.initial!="boolean"){const k=Ir(e,Array.isArray(m.initial)?m.initial[0]:m.initial);k&&k.transition&&(C.transition=k.transition)}x.forEach(k=>{const R=e.getBaseTarget(k),A=e.getValue(k);A&&(A.liveStyle=!0),C[k]=R??null}),y.push({animation:C})}let j=!!y.length;return a&&(m.initial===!1||m.initial===m.animate)&&!e.manuallyAnimateOnMount&&(j=!1),a=!1,j?t(y):Promise.resolve()}function f(p,m){var y;if(i[p].isActive===m)return Promise.resolve();(y=e.variantChildren)==null||y.forEach(x=>{var v;return(v=x.animationState)==null?void 0:v.setActive(p,m)}),i[p].isActive=m;const g=u(p);for(const x in i)i[x].protectedKeys={};return g}return{animateChanges:u,setActive:f,setAnimateFunction:l,getState:()=>i,reset:()=>{i=dy(),a=!0}}}function T7(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!l4(t,e):!1}function Ea(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function dy(){return{animate:Ea(!0),whileInView:Ea(),whileHover:Ea(),whileTap:Ea(),whileDrag:Ea(),whileFocus:Ea(),exit:Ea()}}class sa{constructor(t){this.isMounted=!1,this.node=t}update(){}}class j7 extends sa{constructor(t){super(t),t.animationState||(t.animationState=S7(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Bu(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:i}=this.node.prevProps||{};t!==i&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let k7=0;class E7 extends sa{constructor(){super(...arguments),this.id=k7++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===a)return;const o=this.node.animationState.setActive("exit",!t);i&&!t&&o.then(()=>{i(this.id)})}mount(){const{register:t,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const A7={animation:{Feature:j7},exit:{Feature:E7}};function qo(e,t,i,a={passive:!0}){return e.addEventListener(t,i,a),()=>e.removeEventListener(t,i)}function al(e){return{point:{x:e.pageX,y:e.pageY}}}const C7=e=>t=>qm(t)&&e(t,al(t));function Mo(e,t,i,a){return qo(e,t,C7(i),a)}const u4=1e-4,M7=1-u4,z7=1+u4,d4=.01,R7=0-d4,O7=0+d4;function Vt(e){return e.max-e.min}function L7(e,t,i){return Math.abs(e-t)<=i}function fy(e,t,i,a=.5){e.origin=a,e.originPoint=We(t.min,t.max,e.origin),e.scale=Vt(i)/Vt(t),e.translate=We(i.min,i.max,e.origin)-e.originPoint,(e.scale>=M7&&e.scale<=z7||isNaN(e.scale))&&(e.scale=1),(e.translate>=R7&&e.translate<=O7||isNaN(e.translate))&&(e.translate=0)}function zo(e,t,i,a){fy(e.x,t.x,i.x,a?a.originX:void 0),fy(e.y,t.y,i.y,a?a.originY:void 0)}function py(e,t,i){e.min=i.min+t.min,e.max=e.min+Vt(t)}function D7(e,t,i){py(e.x,t.x,i.x),py(e.y,t.y,i.y)}function hy(e,t,i){e.min=t.min-i.min,e.max=e.min+Vt(t)}function Ro(e,t,i){hy(e.x,t.x,i.x),hy(e.y,t.y,i.y)}function Tn(e){return[e("x"),e("y")]}const f4=({current:e})=>e?e.ownerDocument.defaultView:null,my=(e,t)=>Math.abs(e-t);function P7(e,t){const i=my(e.x,t.x),a=my(e.y,t.y);return Math.sqrt(i**2+a**2)}class p4{constructor(t,i,{transformPagePoint:a,contextWindow:o=window,dragSnapToOrigin:l=!1,distanceThreshold:u=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=Mp(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,S=P7(x.offset,{x:0,y:0})>=this.distanceThreshold;if(!v&&!S)return;const{point:j}=x,{timestamp:C}=vt;this.history.push({...j,timestamp:C});const{onStart:k,onMove:R}=this.handlers;v||(k&&k(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),R&&R(this.lastMoveEvent,x)},this.handlePointerMove=(x,v)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=Cp(v,this.transformPagePoint),Be.update(this.updatePoint,!0)},this.handlePointerUp=(x,v)=>{this.end();const{onEnd:S,onSessionEnd:j,resumeAnimation:C}=this.handlers;if(this.dragSnapToOrigin&&C&&C(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=Mp(x.type==="pointercancel"?this.lastMoveEventInfo:Cp(v,this.transformPagePoint),this.history);this.startEvent&&S&&S(x,k),j&&j(x,k)},!qm(t))return;this.dragSnapToOrigin=l,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=u,this.contextWindow=o||window;const f=al(t),p=Cp(f,this.transformPagePoint),{point:m}=p,{timestamp:g}=vt;this.history=[{...m,timestamp:g}];const{onSessionStart:y}=i;y&&y(t,Mp(p,this.history)),this.removeListeners=tl(Mo(this.contextWindow,"pointermove",this.handlePointerMove),Mo(this.contextWindow,"pointerup",this.handlePointerUp),Mo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Dn(this.updatePoint)}}function Cp(e,t){return t?{point:t(e.point)}:e}function gy(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Mp({point:e},t){return{point:e,delta:gy(e,h4(t)),offset:gy(e,N7(t)),velocity:V7(t,.1)}}function N7(e){return e[0]}function h4(e){return e[e.length-1]}function V7(e,t){if(e.length<2)return{x:0,y:0};let i=e.length-1,a=null;const o=h4(e);for(;i>=0&&(a=e[i],!(o.timestamp-a.timestamp>Zn(t)));)i--;if(!a)return{x:0,y:0};const l=Jn(o.timestamp-a.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-a.x)/l,y:(o.y-a.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function B7(e,{min:t,max:i},a){return t!==void 0&&e<t?e=a?We(t,e,a.min):Math.max(e,t):i!==void 0&&e>i&&(e=a?We(i,e,a.max):Math.min(e,i)),e}function by(e,t,i){return{min:t!==void 0?e.min+t:void 0,max:i!==void 0?e.max+i-(e.max-e.min):void 0}}function _7(e,{top:t,left:i,bottom:a,right:o}){return{x:by(e.x,i,o),y:by(e.y,t,a)}}function yy(e,t){let i=t.min-e.min,a=t.max-e.max;return t.max-t.min<e.max-e.min&&([i,a]=[a,i]),{min:i,max:a}}function H7(e,t){return{x:yy(e.x,t.x),y:yy(e.y,t.y)}}function G7(e,t){let i=.5;const a=Vt(e),o=Vt(t);return o>a?i=Fr(t.min,t.max-a,e.min):a>o&&(i=Fr(e.min,e.max-o,t.min)),ni(0,1,i)}function U7(e,t){const i={};return t.min!==void 0&&(i.min=t.min-e.min),t.max!==void 0&&(i.max=t.max-e.min),i}const Dh=.35;function I7(e=Dh){return e===!1?e=0:e===!0&&(e=Dh),{x:xy(e,"left","right"),y:xy(e,"top","bottom")}}function xy(e,t,i){return{min:vy(e,t),max:vy(e,i)}}function vy(e,t){return typeof e=="number"?e:e[t]||0}const $7=new WeakMap;class q7{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=it(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=y=>{const{dragSnapToOrigin:x}=this.getProps();x?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(al(y).point)},u=(y,x)=>{const{drag:v,dragPropagation:S,onDragStart:j}=this.getProps();if(v&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Ij(v),!this.openDragLock))return;this.latestPointerEvent=y,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Tn(k=>{let R=this.getAxisMotionValue(k).get()||0;if(ei.test(R)){const{projection:A}=this.visualElement;if(A&&A.layout){const V=A.layout.layoutBox[k];V&&(R=Vt(V)*(parseFloat(R)/100))}}this.originPoint[k]=R}),j&&Be.postRender(()=>j(y,x)),Oh(this.visualElement,"transform");const{animationState:C}=this.visualElement;C&&C.setActive("whileDrag",!0)},f=(y,x)=>{this.latestPointerEvent=y,this.latestPanInfo=x;const{dragPropagation:v,dragDirectionLock:S,onDirectionLock:j,onDrag:C}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:k}=x;if(S&&this.currentDirection===null){this.currentDirection=F7(k),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",x.point,k),this.updateAxis("y",x.point,k),this.visualElement.render(),C&&C(y,x)},p=(y,x)=>{this.latestPointerEvent=y,this.latestPanInfo=x,this.stop(y,x),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>Tn(y=>{var x;return this.getAnimationState(y)==="paused"&&((x=this.getAxisMotionValue(y).animation)==null?void 0:x.play())}),{dragSnapToOrigin:g}=this.getProps();this.panSession=new p4(t,{onSessionStart:l,onStart:u,onMove:f,onSessionEnd:p,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:a,contextWindow:f4(this.visualElement)})}stop(t,i){const a=t||this.latestPointerEvent,o=i||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!o||!a)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:f}=this.getProps();f&&Be.postRender(()=>f(a,o))}cancel(){this.isDragging=!1;const{projection:t,animationState:i}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(t,i,a){const{drag:o}=this.getProps();if(!a||!Ec(t,o,this.currentDirection))return;const l=this.getAxisMotionValue(t);let u=this.originPoint[t]+a[t];this.constraints&&this.constraints[t]&&(u=B7(u,this.constraints[t],this.elastic[t])),l.set(u)}resolveConstraints(){var l;const{dragConstraints:t,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(l=this.visualElement.projection)==null?void 0:l.layout,o=this.constraints;t&&Nr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&a?this.constraints=_7(a.layoutBox,t):this.constraints=!1,this.elastic=I7(i),o!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&Tn(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=U7(a.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:i}=this.getProps();if(!t||!Nr(t))return!1;const a=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=Kk(a,o.root,this.visualElement.getTransformPagePoint());let u=H7(o.layout.layoutBox,l);if(i){const f=i($k(u));this.hasMutatedConstraints=!!f,f&&(u=W5(f))}return u}startAnimation(t){const{drag:i,dragMomentum:a,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:f}=this.getProps(),p=this.constraints||{},m=Tn(g=>{if(!Ec(g,i,this.currentDirection))return;let y=p&&p[g]||{};u&&(y={min:0,max:0});const x=o?200:1e6,v=o?40:1e7,S={type:"inertia",velocity:a?t[g]:0,bounceStiffness:x,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...l,...y};return this.startAxisValueAnimation(g,S)});return Promise.all(m).then(f)}startAxisValueAnimation(t,i){const a=this.getAxisMotionValue(t);return Oh(this.visualElement,t),a.start(tg(t,a,0,i,this.visualElement,!1))}stopAnimation(){Tn(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Tn(t=>{var i;return(i=this.getAxisMotionValue(t).animation)==null?void 0:i.pause()})}getAnimationState(t){var i;return(i=this.getAxisMotionValue(t).animation)==null?void 0:i.state}getAxisMotionValue(t){const i=`_drag${t.toUpperCase()}`,a=this.visualElement.getProps(),o=a[i];return o||this.visualElement.getValue(t,(a.initial?a.initial[t]:void 0)||0)}snapToCursor(t){Tn(i=>{const{drag:a}=this.getProps();if(!Ec(i,a,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(i);if(o&&o.layout){const{min:u,max:f}=o.layout.layoutBox[i];l.set(t[i]-We(u,f,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!Nr(i)||!a||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Tn(u=>{const f=this.getAxisMotionValue(u);if(f&&this.constraints!==!1){const p=f.get();o[u]=G7({min:p,max:p},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),Tn(u=>{if(!Ec(u,t,null))return;const f=this.getAxisMotionValue(u),{min:p,max:m}=this.constraints[u];f.set(We(p,m,o[u]))})}addListeners(){if(!this.visualElement.current)return;$7.set(this.visualElement,this);const t=this.visualElement.current,i=Mo(t,"pointerdown",p=>{const{drag:m,dragListener:g=!0}=this.getProps();m&&g&&this.start(p)}),a=()=>{const{dragConstraints:p}=this.getProps();Nr(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",a);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Be.read(a);const u=qo(window,"resize",()=>this.scalePositionWithinConstraints()),f=o.addEventListener("didUpdate",({delta:p,hasLayoutChanged:m})=>{this.isDragging&&m&&(Tn(g=>{const y=this.getAxisMotionValue(g);y&&(this.originPoint[g]+=p[g].translate,y.set(y.get()+p[g].translate))}),this.visualElement.render())});return()=>{u(),i(),l(),f&&f()}}getProps(){const t=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=Dh,dragMomentum:f=!0}=t;return{...t,drag:i,dragDirectionLock:a,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:f}}}function Ec(e,t,i){return(t===!0||t===e)&&(i===null||i===e)}function F7(e,t=10){let i=null;return Math.abs(e.y)>t?i="y":Math.abs(e.x)>t&&(i="x"),i}class K7 extends sa{constructor(t){super(t),this.removeGroupControls=Kt,this.removeListeners=Kt,this.controls=new q7(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Kt}unmount(){this.removeGroupControls(),this.removeListeners()}}const wy=e=>(t,i)=>{e&&Be.postRender(()=>e(t,i))};class Y7 extends sa{constructor(){super(...arguments),this.removePointerDownListener=Kt}onPointerDown(t){this.session=new p4(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:f4(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:i,onPan:a,onPanEnd:o}=this.node.getProps();return{onSessionStart:wy(t),onStart:wy(i),onMove:a,onEnd:(l,u)=>{delete this.session,o&&Be.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=Mo(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Kc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Sy(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const fo={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(me.test(e))e=parseFloat(e);else return e;const i=Sy(e,t.target.x),a=Sy(e,t.target.y);return`${i}% ${a}%`}},X7={correct:(e,{treeScale:t,projectionDelta:i})=>{const a=e,o=na.parse(e);if(o.length>5)return a;const l=na.createTransformer(e),u=typeof o[0]!="number"?1:0,f=i.x.scale*t.x,p=i.y.scale*t.y;o[0+u]/=f,o[1+u]/=p;const m=We(f,p,.5);return typeof o[2+u]=="number"&&(o[2+u]/=m),typeof o[3+u]=="number"&&(o[3+u]/=m),l(o)}};let zp=!1;class Q7 extends E.Component{componentDidMount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:a,layoutId:o}=this.props,{projection:l}=t;yk(W7),l&&(i.group&&i.group.add(l),a&&a.register&&o&&a.register(l),zp&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),Kc.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:i,visualElement:a,drag:o,isPresent:l}=this.props,{projection:u}=a;return u&&(u.isPresent=l,zp=!0,o||t.layoutDependency!==i||i===void 0||t.isPresent!==l?u.willUpdate():this.safeToRemove(),t.isPresent!==l&&(l?u.promote():u.relegate()||Be.postRender(()=>{const f=u.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),$m.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:o}=t;zp=!0,o&&(o.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(o),a&&a.deregister&&a.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function m4(e){const[t,i]=N5(),a=E.useContext(vm);return d.jsx(Q7,{...e,layoutGroup:a,switchLayoutGroup:E.useContext(X5),isPresent:t,safeToRemove:i})}const W7={borderRadius:{...fo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:fo,borderTopRightRadius:fo,borderBottomLeftRadius:fo,borderBottomRightRadius:fo,boxShadow:X7};function Z7(e,t,i){const a=Dt(e)?e:Rn(e);return a.start(tg("",a,t,i)),a.animation}const J7=(e,t)=>e.depth-t.depth;class eE{constructor(){this.children=[],this.isDirty=!1}add(t){Sm(this.children,t),this.isDirty=!0}remove(t){Tm(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(J7),this.isDirty=!1,this.children.forEach(t)}}function tE(e,t){const i=qt.now(),a=({timestamp:o})=>{const l=o-i;l>=t&&(Dn(a),e(l-t))};return Be.setup(a,!0),()=>Dn(a)}const g4=["TopLeft","TopRight","BottomLeft","BottomRight"],nE=g4.length,Ty=e=>typeof e=="string"?parseFloat(e):e,jy=e=>typeof e=="number"||me.test(e);function iE(e,t,i,a,o,l){o?(e.opacity=We(0,i.opacity??1,aE(a)),e.opacityExit=We(t.opacity??1,0,rE(a))):l&&(e.opacity=We(t.opacity??1,i.opacity??1,a));for(let u=0;u<nE;u++){const f=`border${g4[u]}Radius`;let p=ky(t,f),m=ky(i,f);if(p===void 0&&m===void 0)continue;p||(p=0),m||(m=0),p===0||m===0||jy(p)===jy(m)?(e[f]=Math.max(We(Ty(p),Ty(m),a),0),(ei.test(m)||ei.test(p))&&(e[f]+="%")):e[f]=m}(t.rotate||i.rotate)&&(e.rotate=We(t.rotate||0,i.rotate||0,a))}function ky(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const aE=b4(0,.5,e5),rE=b4(.5,.95,Kt);function b4(e,t,i){return a=>a<e?0:a>t?1:i(Fr(e,t,a))}function Ey(e,t){e.min=t.min,e.max=t.max}function Sn(e,t){Ey(e.x,t.x),Ey(e.y,t.y)}function Ay(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Cy(e,t,i,a,o){return e-=t,e=cu(e,1/i,a),o!==void 0&&(e=cu(e,1/o,a)),e}function sE(e,t=0,i=1,a=.5,o,l=e,u=e){if(ei.test(t)&&(t=parseFloat(t),t=We(u.min,u.max,t/100)-u.min),typeof t!="number")return;let f=We(l.min,l.max,a);e===l&&(f-=t),e.min=Cy(e.min,t,i,f,o),e.max=Cy(e.max,t,i,f,o)}function My(e,t,[i,a,o],l,u){sE(e,t[i],t[a],t[o],t.scale,l,u)}const oE=["x","scaleX","originX"],lE=["y","scaleY","originY"];function zy(e,t,i,a){My(e.x,t,oE,i?i.x:void 0,a?a.x:void 0),My(e.y,t,lE,i?i.y:void 0,a?a.y:void 0)}function Ry(e){return e.translate===0&&e.scale===1}function y4(e){return Ry(e.x)&&Ry(e.y)}function Oy(e,t){return e.min===t.min&&e.max===t.max}function cE(e,t){return Oy(e.x,t.x)&&Oy(e.y,t.y)}function Ly(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function x4(e,t){return Ly(e.x,t.x)&&Ly(e.y,t.y)}function Dy(e){return Vt(e.x)/Vt(e.y)}function Py(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class uE{constructor(){this.members=[]}add(t){Sm(this.members,t),t.scheduleRender()}remove(t){if(Tm(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(t){const i=this.members.findIndex(o=>t===o);if(i===0)return!1;let a;for(let o=i;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){a=l;break}}return a?(this.promote(a),!0):!1}promote(t,i){const a=this.lead;if(t!==a&&(this.prevLead=a,this.lead=t,t.show(),a)){a.instance&&a.scheduleRender(),t.scheduleRender(),t.resumeFrom=a,i&&(t.resumeFrom.preserveOpacity=!0),a.snapshot&&(t.snapshot=a.snapshot,t.snapshot.latestValues=a.animationValues||a.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:i,resumingFrom:a}=t;i.onExitComplete&&i.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function dE(e,t,i){let a="";const o=e.x.translate/t.x,l=e.y.translate/t.y,u=(i==null?void 0:i.z)||0;if((o||l||u)&&(a=`translate3d(${o}px, ${l}px, ${u}px) `),(t.x!==1||t.y!==1)&&(a+=`scale(${1/t.x}, ${1/t.y}) `),i){const{transformPerspective:m,rotate:g,rotateX:y,rotateY:x,skewX:v,skewY:S}=i;m&&(a=`perspective(${m}px) ${a}`),g&&(a+=`rotate(${g}deg) `),y&&(a+=`rotateX(${y}deg) `),x&&(a+=`rotateY(${x}deg) `),v&&(a+=`skewX(${v}deg) `),S&&(a+=`skewY(${S}deg) `)}const f=e.x.scale*t.x,p=e.y.scale*t.y;return(f!==1||p!==1)&&(a+=`scale(${f}, ${p})`),a||"none"}const Rp=["","X","Y","Z"],fE=1e3;let pE=0;function Op(e,t,i,a){const{latestValues:o}=t;o[e]&&(i[e]=o[e],t.setStaticValue(e,0),a&&(a[e]=0))}function v4(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const i=r4(t);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:o,layoutId:l}=e.options;window.MotionCancelOptimisedAnimation(i,"transform",Be,!(o||l))}const{parent:a}=e;a&&!a.hasCheckedOptimisedAppear&&v4(a)}function w4({attachResizeListener:e,defaultParent:t,measureScroll:i,checkIsScrollRoot:a,resetTransform:o}){return class{constructor(u={},f=t==null?void 0:t()){this.id=pE++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(gE),this.nodes.forEach(vE),this.nodes.forEach(wE),this.nodes.forEach(bE)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new eE)}addEventListener(u,f){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new km),this.eventHandlers.get(u).add(f)}notifyListeners(u,...f){const p=this.eventHandlers.get(u);p&&p.notify(...f)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=Fm(u)&&!ak(u),this.instance=u;const{layoutId:f,layout:p,visualElement:m}=this.options;if(m&&!m.current&&m.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||f)&&(this.isLayoutDirty=!0),e){let g,y=0;const x=()=>this.root.updateBlockedByResize=!1;Be.read(()=>{y=window.innerWidth}),e(u,()=>{const v=window.innerWidth;v!==y&&(y=v,this.root.updateBlockedByResize=!0,g&&g(),g=tE(x,250),Kc.hasAnimatedSinceResize&&(Kc.hasAnimatedSinceResize=!1,this.nodes.forEach(By)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&m&&(f||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:y,hasRelativeLayoutChanged:x,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||m.getDefaultTransition()||EE,{onLayoutAnimationStart:j,onLayoutAnimationComplete:C}=m.getProps(),k=!this.targetLayout||!x4(this.targetLayout,v),R=!y&&x;if(this.options.layoutRoot||this.resumeFrom||R||y&&(k||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const A={...Gm(S,"layout"),onPlay:j,onComplete:C};(m.shouldReduceMotion||this.options.layoutRoot)&&(A.delay=0,A.type=!1),this.startAnimation(A),this.setAnimationOrigin(g,R)}else y||By(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Dn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(SE),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&v4(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const y=this.path[g];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:f,layout:p}=this.options;if(f===void 0&&!p)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Ny);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Vy);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(xE),this.nodes.forEach(hE),this.nodes.forEach(mE)):this.nodes.forEach(Vy),this.clearAllSnapshots();const f=qt.now();vt.delta=ni(0,1e3/60,f-vt.timestamp),vt.timestamp=f,vt.isProcessing=!0,vp.update.process(vt),vp.preRender.process(vt),vp.render.process(vt),vt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,$m.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(yE),this.sharedNodes.forEach(TE)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Be.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Be.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Vt(this.snapshot.measuredBox.x)&&!Vt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=it(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(f=!1),f&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!y4(this.projectionDelta),p=this.getTransformTemplate(),m=p?p(this.latestValues,""):void 0,g=m!==this.prevTransformTemplateValue;u&&this.instance&&(f||Ca(this.latestValues)||g)&&(o(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const f=this.measurePageBox();let p=this.removeElementScroll(f);return u&&(p=this.removeTransform(p)),AE(p),{animationId:this.root.animationId,measuredBox:f,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var m;const{visualElement:u}=this.options;if(!u)return it();const f=u.measureViewportBox();if(!(((m=this.scroll)==null?void 0:m.wasRoot)||this.path.some(CE))){const{scroll:g}=this.root;g&&(Vr(f.x,g.offset.x),Vr(f.y,g.offset.y))}return f}removeElementScroll(u){var p;const f=it();if(Sn(f,u),(p=this.scroll)!=null&&p.wasRoot)return f;for(let m=0;m<this.path.length;m++){const g=this.path[m],{scroll:y,options:x}=g;g!==this.root&&y&&x.layoutScroll&&(y.wasRoot&&Sn(f,u),Vr(f.x,y.offset.x),Vr(f.y,y.offset.y))}return f}applyTransform(u,f=!1){const p=it();Sn(p,u);for(let m=0;m<this.path.length;m++){const g=this.path[m];!f&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Br(p,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),Ca(g.latestValues)&&Br(p,g.latestValues)}return Ca(this.latestValues)&&Br(p,this.latestValues),p}removeTransform(u){const f=it();Sn(f,u);for(let p=0;p<this.path.length;p++){const m=this.path[p];if(!m.instance||!Ca(m.latestValues))continue;Ch(m.latestValues)&&m.updateSnapshot();const g=it(),y=m.measurePageBox();Sn(g,y),zy(f,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,g)}return Ca(this.latestValues)&&zy(f,this.latestValues),f}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==vt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var x;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==f;if(!(u||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(x=this.parent)!=null&&x.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:y}=this.options;if(!(!this.layout||!(g||y))){if(this.resolvedRelativeTargetAt=vt.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=it(),this.relativeTargetOrigin=it(),Ro(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),Sn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=it(),this.targetWithTransforms=it()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),D7(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Sn(this.target,this.layout.layoutBox),J5(this.target,this.targetDelta)):Sn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=it(),this.relativeTargetOrigin=it(),Ro(this.relativeTargetOrigin,this.target,v.target),Sn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Ch(this.parent.latestValues)||Z5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var S;const u=this.getLead(),f=!!this.resumingFrom||this!==u;let p=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(p=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===vt.timestamp&&(p=!1),p)return;const{layout:m,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||g))return;Sn(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,x=this.treeScale.y;Fk(this.layoutCorrected,this.treeScale,this.path,f),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=it());const{target:v}=u;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ay(this.prevProjectionDelta.x,this.projectionDelta.x),Ay(this.prevProjectionDelta.y,this.projectionDelta.y)),zo(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==x||!Py(this.projectionDelta.x,this.prevProjectionDelta.x)||!Py(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var f;if((f=this.options.visualElement)==null||f.scheduleRender(),u){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=_r(),this.projectionDelta=_r(),this.projectionDeltaWithTransform=_r()}setAnimationOrigin(u,f=!1){const p=this.snapshot,m=p?p.latestValues:{},g={...this.latestValues},y=_r();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const x=it(),v=p?p.source:void 0,S=this.layout?this.layout.source:void 0,j=v!==S,C=this.getStack(),k=!C||C.members.length<=1,R=!!(j&&!k&&this.options.crossfade===!0&&!this.path.some(kE));this.animationProgress=0;let A;this.mixTargetDelta=V=>{const M=V/1e3;_y(y.x,u.x,M),_y(y.y,u.y,M),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ro(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),jE(this.relativeTarget,this.relativeTargetOrigin,x,M),A&&cE(this.relativeTarget,A)&&(this.isProjectionDirty=!1),A||(A=it()),Sn(A,this.relativeTarget)),j&&(this.animationValues=g,iE(g,m,this.latestValues,M,R,k)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=M},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){var f,p,m;this.notifyListeners("animationStart"),(f=this.currentAnimation)==null||f.stop(),(m=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||m.stop(),this.pendingAnimation&&(Dn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Be.update(()=>{Kc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Rn(0)),this.currentAnimation=Z7(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),u.onUpdate&&u.onUpdate(g)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(fE),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:f,target:p,layout:m,latestValues:g}=u;if(!(!f||!p||!m)){if(this!==u&&this.layout&&m&&S4(this.options.animationType,this.layout.layoutBox,m.layoutBox)){p=this.target||it();const y=Vt(this.layout.layoutBox.x);p.x.min=u.target.x.min,p.x.max=p.x.min+y;const x=Vt(this.layout.layoutBox.y);p.y.min=u.target.y.min,p.y.max=p.y.min+x}Sn(f,p),Br(f,g),zo(this.projectionDeltaWithTransform,this.layoutCorrected,f,g)}}registerSharedNode(u,f){this.sharedNodes.has(u)||this.sharedNodes.set(u,new uE),this.sharedNodes.get(u).add(f);const m=f.options.initialPromotionConfig;f.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(f):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var f;const{layoutId:u}=this.options;return u?((f=this.getStack())==null?void 0:f.lead)||this:this}getPrevLead(){var f;const{layoutId:u}=this.options;return u?(f=this.getStack())==null?void 0:f.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:f,preserveFollowOpacity:p}={}){const m=this.getStack();m&&m.promote(this,p),u&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let f=!1;const{latestValues:p}=u;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(f=!0),!f)return;const m={};p.z&&Op("z",u,m,this.animationValues);for(let g=0;g<Rp.length;g++)Op(`rotate${Rp[g]}`,u,m,this.animationValues),Op(`skew${Rp[g]}`,u,m,this.animationValues);u.render();for(const g in m)u.setStaticValue(g,m[g]),this.animationValues&&(this.animationValues[g]=m[g]);u.scheduleRender()}applyProjectionStyles(u,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=Fc(f==null?void 0:f.pointerEvents)||"",u.transform=p?p(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=Fc(f==null?void 0:f.pointerEvents)||""),this.hasProjected&&!Ca(this.latestValues)&&(u.transform=p?p({},""):"none",this.hasProjected=!1);return}u.visibility="";const g=m.animationValues||m.latestValues;this.applyTransformsToTarget();let y=dE(this.projectionDeltaWithTransform,this.treeScale,g);p&&(y=p(g,y)),u.transform=y;const{x,y:v}=this.projectionDelta;u.transformOrigin=`${x.origin*100}% ${v.origin*100}% 0`,m.animationValues?u.opacity=m===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:u.opacity=m===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const S in $o){if(g[S]===void 0)continue;const{correct:j,applyTo:C,isCSSVariable:k}=$o[S],R=y==="none"?g[S]:j(g[S],m);if(C){const A=C.length;for(let V=0;V<A;V++)u[C[V]]=R}else k?this.options.visualElement.renderState.vars[S]=R:u[S]=R}this.options.layoutId&&(u.pointerEvents=m===this?Fc(f==null?void 0:f.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var f;return(f=u.currentAnimation)==null?void 0:f.stop()}),this.root.nodes.forEach(Ny),this.root.sharedNodes.clear()}}}function hE(e){e.updateLayout()}function mE(e){var i;const t=((i=e.resumeFrom)==null?void 0:i.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:o}=e.layout,{animationType:l}=e.options,u=t.source!==e.layout.source;l==="size"?Tn(y=>{const x=u?t.measuredBox[y]:t.layoutBox[y],v=Vt(x);x.min=a[y].min,x.max=x.min+v}):S4(l,t.layoutBox,a)&&Tn(y=>{const x=u?t.measuredBox[y]:t.layoutBox[y],v=Vt(a[y]);x.max=x.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[y].max=e.relativeTarget[y].min+v)});const f=_r();zo(f,a,t.layoutBox);const p=_r();u?zo(p,e.applyTransform(o,!0),t.measuredBox):zo(p,a,t.layoutBox);const m=!y4(f);let g=!1;if(!e.resumeFrom){const y=e.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:x,layout:v}=y;if(x&&v){const S=it();Ro(S,t.layoutBox,x.layoutBox);const j=it();Ro(j,a,v.layoutBox),x4(S,j)||(g=!0),y.options.layoutRoot&&(e.relativeTarget=j,e.relativeTargetOrigin=S,e.relativeParent=y)}}}e.notifyListeners("didUpdate",{layout:a,snapshot:t,delta:p,layoutDelta:f,hasLayoutChanged:m,hasRelativeLayoutChanged:g})}else if(e.isLead()){const{onExitComplete:a}=e.options;a&&a()}e.options.transition=void 0}function gE(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function bE(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function yE(e){e.clearSnapshot()}function Ny(e){e.clearMeasurements()}function Vy(e){e.isLayoutDirty=!1}function xE(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function By(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function vE(e){e.resolveTargetDelta()}function wE(e){e.calcProjection()}function SE(e){e.resetSkewAndRotation()}function TE(e){e.removeLeadSnapshot()}function _y(e,t,i){e.translate=We(t.translate,0,i),e.scale=We(t.scale,1,i),e.origin=t.origin,e.originPoint=t.originPoint}function Hy(e,t,i,a){e.min=We(t.min,i.min,a),e.max=We(t.max,i.max,a)}function jE(e,t,i,a){Hy(e.x,t.x,i.x,a),Hy(e.y,t.y,i.y,a)}function kE(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const EE={duration:.45,ease:[.4,0,.1,1]},Gy=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Uy=Gy("applewebkit/")&&!Gy("chrome/")?Math.round:Kt;function Iy(e){e.min=Uy(e.min),e.max=Uy(e.max)}function AE(e){Iy(e.x),Iy(e.y)}function S4(e,t,i){return e==="position"||e==="preserve-aspect"&&!L7(Dy(t),Dy(i),.2)}function CE(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const ME=w4({attachResizeListener:(e,t)=>qo(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Lp={current:void 0},T4=w4({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Lp.current){const e=new ME({});e.mount(window),e.setOptions({layoutScroll:!0}),Lp.current=e}return Lp.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),zE={pan:{Feature:Y7},drag:{Feature:K7,ProjectionNode:T4,MeasureLayout:m4}};function $y(e,t,i){const{props:a}=e;e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",i==="Start");const o="onHover"+i,l=a[o];l&&Be.postRender(()=>l(t,al(t)))}class RE extends sa{mount(){const{current:t}=this.node;t&&(this.unmount=$j(t,(i,a)=>($y(this.node,a,"Start"),o=>$y(this.node,o,"End"))))}unmount(){}}class OE extends sa{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=tl(qo(this.node.current,"focus",()=>this.onFocus()),qo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function qy(e,t,i){const{props:a}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&a.whileTap&&e.animationState.setActive("whileTap",i==="Start");const o="onTap"+(i==="End"?"":i),l=a[o];l&&Be.postRender(()=>l(t,al(t)))}class LE extends sa{mount(){const{current:t}=this.node;t&&(this.unmount=Yj(t,(i,a)=>(qy(this.node,a,"Start"),(o,{success:l})=>qy(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Ph=new WeakMap,Dp=new WeakMap,DE=e=>{const t=Ph.get(e.target);t&&t(e)},PE=e=>{e.forEach(DE)};function NE({root:e,...t}){const i=e||document;Dp.has(i)||Dp.set(i,{});const a=Dp.get(i),o=JSON.stringify(t);return a[o]||(a[o]=new IntersectionObserver(PE,{root:e,...t})),a[o]}function VE(e,t,i){const a=NE(t);return Ph.set(e,i),a.observe(e),()=>{Ph.delete(e),a.unobserve(e)}}const BE={some:0,all:1};class _E extends sa{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:i,margin:a,amount:o="some",once:l}=t,u={root:i?i.current:void 0,rootMargin:a,threshold:typeof o=="number"?o:BE[o]},f=p=>{const{isIntersecting:m}=p;if(this.isInView===m||(this.isInView=m,l&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:g,onViewportLeave:y}=this.node.getProps(),x=m?g:y;x&&x(p)};return VE(this.node.current,u,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:i}=this.node;["amount","margin","root"].some(HE(t,i))&&this.startObserver()}unmount(){}}function HE({viewport:e={}},{viewport:t={}}={}){return i=>e[i]!==t[i]}const GE={inView:{Feature:_E},tap:{Feature:LE},focus:{Feature:OE},hover:{Feature:RE}},UE={layout:{ProjectionNode:T4,MeasureLayout:m4}},IE={...A7,...GE,...zE,...UE},ae=Ik(IE,n7),$E=50,Fy=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),qE=()=>({time:0,x:Fy(),y:Fy()}),FE={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Ky(e,t,i,a){const o=i[t],{length:l,position:u}=FE[t],f=o.current,p=i.time;o.current=e[`scroll${u}`],o.scrollLength=e[`scroll${l}`]-e[`client${l}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=Fr(0,o.scrollLength,o.current);const m=a-p;o.velocity=m>$E?0:Em(o.current-f,m)}function KE(e,t,i){Ky(e,"x",t,i),Ky(e,"y",t,i),t.time=i}function YE(e,t){const i={x:0,y:0};let a=e;for(;a&&a!==t;)if(Im(a))i.x+=a.offsetLeft,i.y+=a.offsetTop,a=a.offsetParent;else if(a.tagName==="svg"){const o=a.getBoundingClientRect();a=a.parentElement;const l=a.getBoundingClientRect();i.x+=o.left-l.left,i.y+=o.top-l.top}else if(a instanceof SVGGraphicsElement){const{x:o,y:l}=a.getBBox();i.x+=o,i.y+=l;let u=null,f=a.parentNode;for(;!u;)f.tagName==="svg"&&(u=f),f=a.parentNode;a=u}else break;return i}const Nh={start:0,center:.5,end:1};function Yy(e,t,i=0){let a=0;if(e in Nh&&(e=Nh[e]),typeof e=="string"){const o=parseFloat(e);e.endsWith("px")?a=o:e.endsWith("%")?e=o/100:e.endsWith("vw")?a=o/100*document.documentElement.clientWidth:e.endsWith("vh")?a=o/100*document.documentElement.clientHeight:e=o}return typeof e=="number"&&(a=t*e),i+a}const XE=[0,0];function QE(e,t,i,a){let o=Array.isArray(e)?e:XE,l=0,u=0;return typeof e=="number"?o=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?o=e.split(" "):o=[e,Nh[e]?e:"0"]),l=Yy(o[0],i,a),u=Yy(o[1],t),l-u}const WE={All:[[0,0],[1,1]]},ZE={x:0,y:0};function JE(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function eA(e,t,i){const{offset:a=WE.All}=i,{target:o=e,axis:l="y"}=i,u=l==="y"?"height":"width",f=o!==e?YE(o,e):ZE,p=o===e?{width:e.scrollWidth,height:e.scrollHeight}:JE(o),m={width:e.clientWidth,height:e.clientHeight};t[l].offset.length=0;let g=!t[l].interpolate;const y=a.length;for(let x=0;x<y;x++){const v=QE(a[x],m[u],p[u],f[l]);!g&&v!==t[l].interpolatorOffsets[x]&&(g=!0),t[l].offset[x]=v}g&&(t[l].interpolate=Nm(t[l].offset,h5(a),{clamp:!1}),t[l].interpolatorOffsets=[...t[l].offset]),t[l].progress=ni(0,1,t[l].interpolate(t[l].current))}function tA(e,t=e,i){if(i.x.targetOffset=0,i.y.targetOffset=0,t!==e){let a=t;for(;a&&a!==e;)i.x.targetOffset+=a.offsetLeft,i.y.targetOffset+=a.offsetTop,a=a.offsetParent}i.x.targetLength=t===e?t.scrollWidth:t.clientWidth,i.y.targetLength=t===e?t.scrollHeight:t.clientHeight,i.x.containerLength=e.clientWidth,i.y.containerLength=e.clientHeight}function nA(e,t,i,a={}){return{measure:o=>{tA(e,a.target,i),KE(e,i,o),(a.offset||a.target)&&eA(e,i,a)},notify:()=>t(i)}}const po=new WeakMap,Xy=new WeakMap,Pp=new WeakMap,Qy=e=>e===document.scrollingElement?window:e;function j4(e,{container:t=document.scrollingElement,...i}={}){if(!t)return Kt;let a=Pp.get(t);a||(a=new Set,Pp.set(t,a));const o=qE(),l=nA(t,e,o,i);if(a.add(l),!po.has(t)){const f=()=>{for(const y of a)y.measure(vt.timestamp);Be.preUpdate(p)},p=()=>{for(const y of a)y.notify()},m=()=>Be.read(f);po.set(t,m);const g=Qy(t);window.addEventListener("resize",m,{passive:!0}),t!==document.documentElement&&Xy.set(t,ik(t,m)),g.addEventListener("scroll",m,{passive:!0}),m()}const u=po.get(t);return Be.read(u,!1,!0),()=>{var m;Dn(u);const f=Pp.get(t);if(!f||(f.delete(l),f.size))return;const p=po.get(t);po.delete(t),p&&(Qy(t).removeEventListener("scroll",p),(m=Xy.get(t))==null||m(),window.removeEventListener("resize",p))}}const Wy=new Map;function iA(e){const t={value:0},i=j4(a=>{t.value=a[e.axis].progress*100},e);return{currentTime:t,cancel:i}}function k4({source:e,container:t,...i}){const{axis:a}=i;e&&(t=e);const o=Wy.get(t)??new Map;Wy.set(t,o);const l=i.target??"self",u=o.get(l)??{},f=a+(i.offset??[]).join(",");return u[f]||(u[f]=!i.target&&y5()?new ScrollTimeline({source:t,axis:a}):iA({container:t,...i})),u[f]}function aA(e,t){const i=k4(t);return e.attachTimeline({timeline:t.target?void 0:i,observe:a=>(a.pause(),P5(o=>{a.time=a.duration*o},i))})}function rA(e){return e.length===2}function sA(e,t){return rA(e)?j4(i=>{e(i[t.axis].progress,i)},t):P5(e,k4(t))}function oA(e,{axis:t="y",container:i=document.scrollingElement,...a}={}){if(!i)return Kt;const o={axis:t,container:i,...a};return typeof e=="function"?sA(e,o):aA(e,o)}const lA=()=>({scrollX:Rn(0),scrollY:Rn(0),scrollXProgress:Rn(0),scrollYProgress:Rn(0)}),Ac=e=>e?!e.current:!1;function cA({container:e,target:t,...i}={}){const a=rs(lA),o=E.useRef(null),l=E.useRef(!1),u=E.useCallback(()=>(o.current=oA((f,{x:p,y:m})=>{a.scrollX.set(p.current),a.scrollXProgress.set(p.progress),a.scrollY.set(m.current),a.scrollYProgress.set(m.progress)},{...i,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0}),()=>{var f;(f=o.current)==null||f.call(o)}),[e,t,JSON.stringify(i.offset)]);return Lu(()=>{if(l.current=!1,Ac(e)||Ac(t)){l.current=!0;return}else return u()},[u]),E.useEffect(()=>{if(l.current)return Ho(!Ac(e)),Ho(!Ac(t)),u()},[u]),a}function uA(e){const t=rs(()=>Rn(e)),{isStatic:i}=E.useContext(Nu);if(i){const[,a]=E.useState(e);E.useEffect(()=>t.on("change",a),[])}return t}function E4(e,t){const i=uA(t()),a=()=>i.set(t());return a(),Lu(()=>{const o=()=>Be.preRender(a,!1,!0),l=e.map(u=>u.on("change",o));return()=>{l.forEach(u=>u()),Dn(a)}}),i}function dA(e){Co.current=[],e();const t=E4(Co.current,e);return Co.current=void 0,t}function Zy(e,t,i,a){if(typeof e=="function")return dA(e);const o=typeof t=="function"?t:rk(t,i,a);return Array.isArray(e)?Jy(e,o):Jy([e],([l])=>o(l))}function Jy(e,t){const i=rs(()=>[]);return E4(e,()=>{i.length=0;const a=e.length;for(let o=0;o<a;o++)i[o]=e[o].get();return t(i)})}var A4={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ex=Ae.createContext&&Ae.createContext(A4),fA=["attr","size","title"];function pA(e,t){if(e==null)return{};var i=hA(e,t),a,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}function hA(e,t){if(e==null)return{};var i={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;i[a]=e[a]}return i}function uu(){return uu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},uu.apply(this,arguments)}function tx(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,a)}return i}function du(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?tx(Object(i),!0).forEach(function(a){mA(e,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):tx(Object(i)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))})}return e}function mA(e,t,i){return t=gA(t),t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function gA(e){var t=bA(e,"string");return typeof t=="symbol"?t:t+""}function bA(e,t){if(typeof e!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var a=i.call(e,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function C4(e){return e&&e.map((t,i)=>Ae.createElement(t.tag,du({key:i},t.attr),C4(t.child)))}function be(e){return t=>Ae.createElement(yA,uu({attr:du({},e.attr)},t),C4(e.child))}function yA(e){var t=i=>{var{attr:a,size:o,title:l}=e,u=pA(e,fA),f=o||i.size||"1em",p;return i.className&&(p=i.className),e.className&&(p=(p?p+" ":"")+e.className),Ae.createElement("svg",uu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,a,u,{className:p,style:du(du({color:e.color||i.color},i.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&Ae.createElement("title",null,l),e.children)};return ex!==void 0?Ae.createElement(ex.Consumer,null,i=>t(i)):t(A4)}function Pn(e){return be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function xA(e){return be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(e)}function vA(e){return be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56l72-144zm511.98 160c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02zM440 320l72-144 72 144H440zm88 128H352V153.25c23.51-10.29 41.16-31.48 46.39-57.25H528c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H383.64C369.04 12.68 346.09 0 320 0s-49.04 12.68-63.64 32H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h129.61c5.23 25.76 22.87 46.96 46.39 57.25V448H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"},child:[]}]})(e)}function ng(e){return be({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"},child:[]}]})(e)}function wA(e){return be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M256.47 216.77l86.73 109.18s-16.6 102.36-76.57 150.12C206.66 523.85 0 510.19 0 510.19s3.8-23.14 11-55.43l94.62-112.17c3.97-4.7-.87-11.62-6.65-9.5l-60.4 22.09c14.44-41.66 32.72-80.04 54.6-97.47 59.97-47.76 163.3-40.94 163.3-40.94zM636.53 31.03l-19.86-25c-5.49-6.9-15.52-8.05-22.41-2.56l-232.48 177.8-34.14-42.97c-5.09-6.41-15.14-5.21-18.59 2.21l-25.33 54.55 86.73 109.18 58.8-12.45c8-1.69 11.42-11.2 6.34-17.6l-34.09-42.92 232.48-177.8c6.89-5.48 8.04-15.53 2.55-22.44z"},child:[]}]})(e)}function M4(e){return be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(e)}function rl(e){return be({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z"},child:[]}]})(e)}function SA(e){return be({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"},child:[]}]})(e)}function nx(e){return be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(e)}function TA(e){return be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(e)}function Va(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(e)}function kt(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function It(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function jA(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(e)}function ig(e){return be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(e)}function ix(e){return be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"},child:[]}]})(e)}function Fo(e){return be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"},child:[]}]})(e)}function kA(e){return be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M104 96H56c-13.3 0-24 10.7-24 24v104H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h24v104c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm528 128h-24V120c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h24c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM456 32h-48c-13.3 0-24 10.7-24 24v168H256V56c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h128v168c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24z"},child:[]}]})(e)}function Yr(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function fu(e){return be({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M310.706 413.765c-1.314-6.63-7.835-10.872-14.424-9.369-10.692 2.439-27.422 5.413-45.426 5.413-56.763 0-101.929-34.79-121.461-85.449h113.689a12 12 0 0 0 11.708-9.369l6.373-28.36c1.686-7.502-4.019-14.631-11.708-14.631H115.22c-1.21-14.328-1.414-28.287.137-42.245H261.95a12 12 0 0 0 11.723-9.434l6.512-29.755c1.638-7.484-4.061-14.566-11.723-14.566H130.184c20.633-44.991 62.69-75.03 117.619-75.03 14.486 0 28.564 2.25 37.851 4.145 6.216 1.268 12.347-2.498 14.002-8.623l11.991-44.368c1.822-6.741-2.465-13.616-9.326-14.917C290.217 34.912 270.71 32 249.635 32 152.451 32 74.03 92.252 45.075 176H12c-6.627 0-12 5.373-12 12v29.755c0 6.627 5.373 12 12 12h21.569c-1.009 13.607-1.181 29.287-.181 42.245H12c-6.627 0-12 5.373-12 12v28.36c0 6.627 5.373 12 12 12h30.114C67.139 414.692 145.264 480 249.635 480c26.301 0 48.562-4.544 61.101-7.788 6.167-1.595 10.027-7.708 8.788-13.957l-8.818-44.49z"},child:[]}]})(e)}function EA(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"},child:[]}]})(e)}function ax(e){return be({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z"},child:[]}]})(e)}function Vh(e){return be({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(e)}function AA(e){return be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(e)}function z4(e){return be({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M571.31 193.94l-22.63-22.63c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31-28.9-28.9c5.63-21.31.36-44.9-16.35-61.61l-45.25-45.25c-62.48-62.48-163.79-62.48-226.28 0l90.51 45.25v18.75c0 16.97 6.74 33.25 18.75 45.25l49.14 49.14c16.71 16.71 40.3 21.98 61.61 16.35l28.9 28.9-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l90.51-90.51c6.23-6.24 6.23-16.37-.02-22.62zm-286.72-15.2c-3.7-3.7-6.84-7.79-9.85-11.95L19.64 404.96c-25.57 23.88-26.26 64.19-1.53 88.93s65.05 24.05 88.93-1.53l238.13-255.07c-3.96-2.91-7.9-5.87-11.44-9.41l-49.14-49.14z"},child:[]}]})(e)}function CA(e){return be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"},child:[]}]})(e)}function R4(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"},child:[]}]})(e)}function O4(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M475.115 163.781L336 252.309v-68.28c0-18.916-20.931-30.399-36.885-20.248L160 252.309V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h464c13.255 0 24-10.745 24-24V184.029c0-18.917-20.931-30.399-36.885-20.248z"},child:[]}]})(e)}function rx(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(e)}function pu(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"},child:[]}]})(e)}function MA(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm173.696 119.559l-63.399 63.399c-10.987-18.559-26.67-34.252-45.255-45.255l63.399-63.399a218.396 218.396 0 0 1 45.255 45.255zM256 352c-53.019 0-96-42.981-96-96s42.981-96 96-96 96 42.981 96 96-42.981 96-96 96zM127.559 82.304l63.399 63.399c-18.559 10.987-34.252 26.67-45.255 45.255l-63.399-63.399a218.372 218.372 0 0 1 45.255-45.255zM82.304 384.441l63.399-63.399c10.987 18.559 26.67 34.252 45.255 45.255l-63.399 63.399a218.396 218.396 0 0 1-45.255-45.255zm302.137 45.255l-63.399-63.399c18.559-10.987 34.252-26.67 45.255-45.255l63.399 63.399a218.403 218.403 0 0 1-45.255 45.255z"},child:[]}]})(e)}function Yc(e){return be({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(e)}function zA(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(e)}function Ba(e){return be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"},child:[]}]})(e)}function RA(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function L4(e){return be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"},child:[]}]})(e)}function OA(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(e)}function LA(e){return be({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M568.25 192c-29.04.13-135.01 6.16-213.84 83-33.12 29.63-53.36 63.3-66.41 94.86-13.05-31.56-33.29-65.23-66.41-94.86-78.83-76.84-184.8-82.87-213.84-83-4.41-.02-7.79 3.4-7.75 7.82.23 27.92 7.14 126.14 88.77 199.3C172.79 480.94 256 480 288 480s115.19.95 199.23-80.88c81.64-73.17 88.54-171.38 88.77-199.3.04-4.42-3.34-7.84-7.75-7.82zM287.98 302.6c12.82-18.85 27.6-35.78 44.09-50.52 19.09-18.61 39.58-33.3 60.26-45.18-16.44-70.5-51.72-133.05-96.73-172.22-4.11-3.58-11.02-3.58-15.14 0-44.99 39.14-80.27 101.63-96.74 172.07 20.37 11.7 40.5 26.14 59.22 44.39a282.768 282.768 0 0 1 45.04 51.46z"},child:[]}]})(e)}function DA(e){return be({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function PA(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"},child:[]}]})(e)}function NA(e){return be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"},child:[]}]})(e)}function VA(e){return be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function hu(e){return be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(e)}function BA(e){return be({attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(e)}const _A=(e,t,i,a)=>{var l,u,f,p;const o=[i,{code:t,...a||{}}];if((u=(l=e==null?void 0:e.services)==null?void 0:l.logger)!=null&&u.forward)return e.services.logger.forward(o,"warn","react-i18next::",!0);Da(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),(p=(f=e==null?void 0:e.services)==null?void 0:f.logger)!=null&&p.warn?e.services.logger.warn(...o):console!=null&&console.warn&&console.warn(...o)},sx={},Bh=(e,t,i,a)=>{Da(i)&&sx[i]||(Da(i)&&(sx[i]=new Date),_A(e,t,i,a))},D4=(e,t)=>()=>{if(e.isInitialized)t();else{const i=()=>{setTimeout(()=>{e.off("initialized",i)},0),t()};e.on("initialized",i)}},_h=(e,t,i)=>{e.loadNamespaces(t,D4(e,i))},ox=(e,t,i,a)=>{if(Da(i)&&(i=[i]),e.options.preload&&e.options.preload.indexOf(t)>-1)return _h(e,i,a);i.forEach(o=>{e.options.ns.indexOf(o)<0&&e.options.ns.push(o)}),e.loadLanguages(t,D4(e,a))},HA=(e,t,i={})=>!t.languages||!t.languages.length?(Bh(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0):t.hasLoadedNamespace(e,{lng:i.lng,precheck:(a,o)=>{if(i.bindI18n&&i.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!o(a.isLanguageChangingTo,e))return!1}}),Da=e=>typeof e=="string",GA=e=>typeof e=="object"&&e!==null,UA=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,IA={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},$A=e=>IA[e],qA=e=>e.replace(UA,$A);let Hh={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:qA};const FA=(e={})=>{Hh={...Hh,...e}},KA=()=>Hh;let P4;const YA=e=>{P4=e},XA=()=>P4,QA={type:"3rdParty",init(e){FA(e.options.react),YA(e)}},WA=E.createContext();class ZA{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(i=>{this.usedNamespaces[i]||(this.usedNamespaces[i]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const JA=(e,t)=>{const i=E.useRef();return E.useEffect(()=>{i.current=e},[e,t]),i.current},N4=(e,t,i,a)=>e.getFixedT(t,i,a),eC=(e,t,i,a)=>E.useCallback(N4(e,t,i,a),[e,t,i,a]),$e=(e,t={})=>{var V,M,P,D;const{i18n:i}=t,{i18n:a,defaultNS:o}=E.useContext(WA)||{},l=i||a||XA();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new ZA),!l){Bh(l,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const U=(Y,Z)=>Da(Z)?Z:GA(Z)&&Da(Z.defaultValue)?Z.defaultValue:Array.isArray(Y)?Y[Y.length-1]:Y,G=[U,{},!1];return G.t=U,G.i18n={},G.ready=!1,G}(V=l.options.react)!=null&&V.wait&&Bh(l,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const u={...KA(),...l.options.react,...t},{useSuspense:f,keyPrefix:p}=u;let m=o||((M=l.options)==null?void 0:M.defaultNS);m=Da(m)?[m]:m||["translation"],(D=(P=l.reportNamespaces).addUsedNamespaces)==null||D.call(P,m);const g=(l.isInitialized||l.initializedStoreOnce)&&m.every(U=>HA(U,l,u)),y=eC(l,t.lng||null,u.nsMode==="fallback"?m:m[0],p),x=()=>y,v=()=>N4(l,t.lng||null,u.nsMode==="fallback"?m:m[0],p),[S,j]=E.useState(x);let C=m.join();t.lng&&(C=`${t.lng}${C}`);const k=JA(C),R=E.useRef(!0);E.useEffect(()=>{const{bindI18n:U,bindI18nStore:G}=u;R.current=!0,!g&&!f&&(t.lng?ox(l,t.lng,m,()=>{R.current&&j(v)}):_h(l,m,()=>{R.current&&j(v)})),g&&k&&k!==C&&R.current&&j(v);const Y=()=>{R.current&&j(v)};return U&&(l==null||l.on(U,Y)),G&&(l==null||l.store.on(G,Y)),()=>{R.current=!1,l&&U&&(U==null||U.split(" ").forEach(Z=>l.off(Z,Y))),G&&l&&G.split(" ").forEach(Z=>l.store.off(Z,Y))}},[l,C]),E.useEffect(()=>{R.current&&g&&j(x)},[l,p,g]);const A=[S,l,g];if(A.t=S,A.i18n=l,A.ready=g,g||!g&&!f)return A;throw new Promise(U=>{t.lng?ox(l,t.lng,m,()=>U()):_h(l,m,()=>U())})},ge=e=>typeof e=="string",ho=()=>{let e,t;const i=new Promise((a,o)=>{e=a,t=o});return i.resolve=e,i.reject=t,i},lx=e=>e==null?"":""+e,tC=(e,t,i)=>{e.forEach(a=>{t[a]&&(i[a]=t[a])})},nC=/###/g,cx=e=>e&&e.indexOf("###")>-1?e.replace(nC,"."):e,ux=e=>!e||ge(e),Oo=(e,t,i)=>{const a=ge(t)?t.split("."):t;let o=0;for(;o<a.length-1;){if(ux(e))return{};const l=cx(a[o]);!e[l]&&i&&(e[l]=new i),Object.prototype.hasOwnProperty.call(e,l)?e=e[l]:e={},++o}return ux(e)?{}:{obj:e,k:cx(a[o])}},dx=(e,t,i)=>{const{obj:a,k:o}=Oo(e,t,Object);if(a!==void 0||t.length===1){a[o]=i;return}let l=t[t.length-1],u=t.slice(0,t.length-1),f=Oo(e,u,Object);for(;f.obj===void 0&&u.length;)l=`${u[u.length-1]}.${l}`,u=u.slice(0,u.length-1),f=Oo(e,u,Object),f!=null&&f.obj&&typeof f.obj[`${f.k}.${l}`]<"u"&&(f.obj=void 0);f.obj[`${f.k}.${l}`]=i},iC=(e,t,i,a)=>{const{obj:o,k:l}=Oo(e,t,Object);o[l]=o[l]||[],o[l].push(i)},mu=(e,t)=>{const{obj:i,k:a}=Oo(e,t);if(i&&Object.prototype.hasOwnProperty.call(i,a))return i[a]},aC=(e,t,i)=>{const a=mu(e,i);return a!==void 0?a:mu(t,i)},V4=(e,t,i)=>{for(const a in t)a!=="__proto__"&&a!=="constructor"&&(a in e?ge(e[a])||e[a]instanceof String||ge(t[a])||t[a]instanceof String?i&&(e[a]=t[a]):V4(e[a],t[a],i):e[a]=t[a]);return e},Ar=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var rC={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const sC=e=>ge(e)?e.replace(/[&<>"'\/]/g,t=>rC[t]):e;class oC{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const i=this.regExpMap.get(t);if(i!==void 0)return i;const a=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,a),this.regExpQueue.push(t),a}}const lC=[" ",",","?","!",";"],cC=new oC(20),uC=(e,t,i)=>{t=t||"",i=i||"";const a=lC.filter(u=>t.indexOf(u)<0&&i.indexOf(u)<0);if(a.length===0)return!0;const o=cC.getRegExp(`(${a.map(u=>u==="?"?"\\?":u).join("|")})`);let l=!o.test(e);if(!l){const u=e.indexOf(i);u>0&&!o.test(e.substring(0,u))&&(l=!0)}return l},Gh=function(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;const a=t.split(i);let o=e;for(let l=0;l<a.length;){if(!o||typeof o!="object")return;let u,f="";for(let p=l;p<a.length;++p)if(p!==l&&(f+=i),f+=a[p],u=o[f],u!==void 0){if(["string","number","boolean"].indexOf(typeof u)>-1&&p<a.length-1)continue;l+=p-l+1;break}o=u}return o},gu=e=>e==null?void 0:e.replace("_","-"),dC={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){var i,a;(a=(i=console==null?void 0:console[e])==null?void 0:i.apply)==null||a.call(i,console,t)}};class bu{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,i)}init(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=i.prefix||"i18next:",this.logger=t||dC,this.options=i,this.debug=i.debug}log(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return this.forward(i,"log","",!0)}warn(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return this.forward(i,"warn","",!0)}error(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return this.forward(i,"error","")}deprecate(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return this.forward(i,"warn","WARNING DEPRECATED: ",!0)}forward(t,i,a,o){return o&&!this.debug?null:(ge(t[0])&&(t[0]=`${a}${this.prefix} ${t[0]}`),this.logger[i](t))}create(t){return new bu(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new bu(this.logger,t)}}var Qn=new bu;class Hu{constructor(){this.observers={}}on(t,i){return t.split(" ").forEach(a=>{this.observers[a]||(this.observers[a]=new Map);const o=this.observers[a].get(i)||0;this.observers[a].set(i,o+1)}),this}off(t,i){if(this.observers[t]){if(!i){delete this.observers[t];return}this.observers[t].delete(i)}}emit(t){for(var i=arguments.length,a=new Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(u=>{let[f,p]=u;for(let m=0;m<p;m++)f(...a)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(u=>{let[f,p]=u;for(let m=0;m<p;m++)f.apply(f,[t,...a])})}}class fx extends Hu{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const i=this.options.ns.indexOf(t);i>-1&&this.options.ns.splice(i,1)}getResource(t,i,a){var m,g;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,u=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let f;t.indexOf(".")>-1?f=t.split("."):(f=[t,i],a&&(Array.isArray(a)?f.push(...a):ge(a)&&l?f.push(...a.split(l)):f.push(a)));const p=mu(this.data,f);return!p&&!i&&!a&&t.indexOf(".")>-1&&(t=f[0],i=f[1],a=f.slice(2).join(".")),p||!u||!ge(a)?p:Gh((g=(m=this.data)==null?void 0:m[t])==null?void 0:g[i],a,l)}addResource(t,i,a,o){let l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const u=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator;let f=[t,i];a&&(f=f.concat(u?a.split(u):a)),t.indexOf(".")>-1&&(f=t.split("."),o=i,i=f[1]),this.addNamespaces(i),dx(this.data,f,o),l.silent||this.emit("added",t,i,a,o)}addResources(t,i,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const l in a)(ge(a[l])||Array.isArray(a[l]))&&this.addResource(t,i,l,a[l],{silent:!0});o.silent||this.emit("added",t,i,a)}addResourceBundle(t,i,a,o,l){let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},f=[t,i];t.indexOf(".")>-1&&(f=t.split("."),o=a,a=i,i=f[1]),this.addNamespaces(i);let p=mu(this.data,f)||{};u.skipCopy||(a=JSON.parse(JSON.stringify(a))),o?V4(p,a,l):p={...p,...a},dx(this.data,f,p),u.silent||this.emit("added",t,i,a)}removeResourceBundle(t,i){this.hasResourceBundle(t,i)&&delete this.data[t][i],this.removeNamespaces(i),this.emit("removed",t,i)}hasResourceBundle(t,i){return this.getResource(t,i)!==void 0}getResourceBundle(t,i){return i||(i=this.options.defaultNS),this.getResource(t,i)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const i=this.getDataByLanguage(t);return!!(i&&Object.keys(i)||[]).find(o=>i[o]&&Object.keys(i[o]).length>0)}toJSON(){return this.data}}var B4={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,i,a,o){return e.forEach(l=>{var u;t=((u=this.processors[l])==null?void 0:u.process(t,i,a,o))??t}),t}};const px={},hx=e=>!ge(e)&&typeof e!="boolean"&&typeof e!="number";class yu extends Hu{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),tC(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Qn.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const a=this.resolve(t,i);return(a==null?void 0:a.res)!==void 0}extractFromKey(t,i){let a=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;a===void 0&&(a=":");const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let l=i.ns||this.options.defaultNS||[];const u=a&&t.indexOf(a)>-1,f=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!uC(t,a,o);if(u&&!f){const p=t.match(this.interpolator.nestingRegexp);if(p&&p.length>0)return{key:t,namespaces:ge(l)?[l]:l};const m=t.split(a);(a!==o||a===o&&this.options.ns.indexOf(m[0])>-1)&&(l=m.shift()),t=m.join(o)}return{key:t,namespaces:ge(l)?[l]:l}}translate(t,i,a){if(typeof i!="object"&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i=="object"&&(i={...i}),i||(i={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const o=i.returnDetails!==void 0?i.returnDetails:this.options.returnDetails,l=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,{key:u,namespaces:f}=this.extractFromKey(t[t.length-1],i),p=f[f.length-1],m=i.lng||this.language,g=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((m==null?void 0:m.toLowerCase())==="cimode"){if(g){const Z=i.nsSeparator||this.options.nsSeparator;return o?{res:`${p}${Z}${u}`,usedKey:u,exactUsedKey:u,usedLng:m,usedNS:p,usedParams:this.getUsedParamsDetails(i)}:`${p}${Z}${u}`}return o?{res:u,usedKey:u,exactUsedKey:u,usedLng:m,usedNS:p,usedParams:this.getUsedParamsDetails(i)}:u}const y=this.resolve(t,i);let x=y==null?void 0:y.res;const v=(y==null?void 0:y.usedKey)||u,S=(y==null?void 0:y.exactUsedKey)||u,j=["[object Number]","[object Function]","[object RegExp]"],C=i.joinArrays!==void 0?i.joinArrays:this.options.joinArrays,k=!this.i18nFormat||this.i18nFormat.handleAsObject,R=i.count!==void 0&&!ge(i.count),A=yu.hasDefaultValue(i),V=R?this.pluralResolver.getSuffix(m,i.count,i):"",M=i.ordinal&&R?this.pluralResolver.getSuffix(m,i.count,{ordinal:!1}):"",P=R&&!i.ordinal&&i.count===0,D=P&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${V}`]||i[`defaultValue${M}`]||i.defaultValue;let U=x;k&&!x&&A&&(U=D);const G=hx(U),Y=Object.prototype.toString.apply(U);if(k&&U&&G&&j.indexOf(Y)<0&&!(ge(C)&&Array.isArray(U))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const Z=this.options.returnedObjectHandler?this.options.returnedObjectHandler(v,U,{...i,ns:f}):`key '${u} (${this.language})' returned an object instead of string.`;return o?(y.res=Z,y.usedParams=this.getUsedParamsDetails(i),y):Z}if(l){const Z=Array.isArray(U),ne=Z?[]:{},le=Z?S:v;for(const ce in U)if(Object.prototype.hasOwnProperty.call(U,ce)){const ue=`${le}${l}${ce}`;A&&!x?ne[ce]=this.translate(ue,{...i,defaultValue:hx(D)?D[ce]:void 0,joinArrays:!1,ns:f}):ne[ce]=this.translate(ue,{...i,joinArrays:!1,ns:f}),ne[ce]===ue&&(ne[ce]=U[ce])}x=ne}}else if(k&&ge(C)&&Array.isArray(x))x=x.join(C),x&&(x=this.extendTranslation(x,t,i,a));else{let Z=!1,ne=!1;!this.isValidLookup(x)&&A&&(Z=!0,x=D),this.isValidLookup(x)||(ne=!0,x=u);const ce=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&ne?void 0:x,ue=A&&D!==x&&this.options.updateMissing;if(ne||Z||ue){if(this.logger.log(ue?"updateKey":"missingKey",m,p,u,ue?D:x),l){const Q=this.resolve(u,{...i,keySeparator:!1});Q&&Q.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let H=[];const L=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo==="fallback"&&L&&L[0])for(let Q=0;Q<L.length;Q++)H.push(L[Q]);else this.options.saveMissingTo==="all"?H=this.languageUtils.toResolveHierarchy(i.lng||this.language):H.push(i.lng||this.language);const B=(Q,z,X)=>{var ie;const te=A&&X!==x?X:ce;this.options.missingKeyHandler?this.options.missingKeyHandler(Q,p,z,te,ue,i):(ie=this.backendConnector)!=null&&ie.saveMissing&&this.backendConnector.saveMissing(Q,p,z,te,ue,i),this.emit("missingKey",Q,p,z,x)};this.options.saveMissing&&(this.options.saveMissingPlurals&&R?H.forEach(Q=>{const z=this.pluralResolver.getSuffixes(Q,i);P&&i[`defaultValue${this.options.pluralSeparator}zero`]&&z.indexOf(`${this.options.pluralSeparator}zero`)<0&&z.push(`${this.options.pluralSeparator}zero`),z.forEach(X=>{B([Q],u+X,i[`defaultValue${X}`]||D)})}):B(H,u,D))}x=this.extendTranslation(x,t,i,y,a),ne&&x===u&&this.options.appendNamespaceToMissingKey&&(x=`${p}:${u}`),(ne||Z)&&this.options.parseMissingKeyHandler&&(x=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${p}:${u}`:u,Z?x:void 0))}return o?(y.res=x,y.usedParams=this.getUsedParamsDetails(i),y):x}extendTranslation(t,i,a,o,l){var m,g;var u=this;if((m=this.i18nFormat)!=null&&m.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...a},a.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!a.skipInterpolation){a.interpolation&&this.interpolator.init({...a,interpolation:{...this.options.interpolation,...a.interpolation}});const y=ge(t)&&(((g=a==null?void 0:a.interpolation)==null?void 0:g.skipOnVariables)!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let x;if(y){const S=t.match(this.interpolator.nestingRegexp);x=S&&S.length}let v=a.replace&&!ge(a.replace)?a.replace:a;if(this.options.interpolation.defaultVariables&&(v={...this.options.interpolation.defaultVariables,...v}),t=this.interpolator.interpolate(t,v,a.lng||this.language||o.usedLng,a),y){const S=t.match(this.interpolator.nestingRegexp),j=S&&S.length;x<j&&(a.nest=!1)}!a.lng&&o&&o.res&&(a.lng=this.language||o.usedLng),a.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var S=arguments.length,j=new Array(S),C=0;C<S;C++)j[C]=arguments[C];return(l==null?void 0:l[0])===j[0]&&!a.context?(u.logger.warn(`It seems you are nesting recursively key: ${j[0]} in key: ${i[0]}`),null):u.translate(...j,i)},a)),a.interpolation&&this.interpolator.reset()}const f=a.postProcess||this.options.postProcess,p=ge(f)?[f]:f;return t!=null&&(p!=null&&p.length)&&a.applyPostProcessor!==!1&&(t=B4.handle(p,t,i,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(a)},...a}:a,this)),t}resolve(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a,o,l,u,f;return ge(t)&&(t=[t]),t.forEach(p=>{if(this.isValidLookup(a))return;const m=this.extractFromKey(p,i),g=m.key;o=g;let y=m.namespaces;this.options.fallbackNS&&(y=y.concat(this.options.fallbackNS));const x=i.count!==void 0&&!ge(i.count),v=x&&!i.ordinal&&i.count===0,S=i.context!==void 0&&(ge(i.context)||typeof i.context=="number")&&i.context!=="",j=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);y.forEach(C=>{var k,R;this.isValidLookup(a)||(f=C,!px[`${j[0]}-${C}`]&&((k=this.utils)!=null&&k.hasLoadedNamespace)&&!((R=this.utils)!=null&&R.hasLoadedNamespace(f))&&(px[`${j[0]}-${C}`]=!0,this.logger.warn(`key "${o}" for languages "${j.join(", ")}" won't get resolved as namespace "${f}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),j.forEach(A=>{var P;if(this.isValidLookup(a))return;u=A;const V=[g];if((P=this.i18nFormat)!=null&&P.addLookupKeys)this.i18nFormat.addLookupKeys(V,g,A,C,i);else{let D;x&&(D=this.pluralResolver.getSuffix(A,i.count,i));const U=`${this.options.pluralSeparator}zero`,G=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(x&&(V.push(g+D),i.ordinal&&D.indexOf(G)===0&&V.push(g+D.replace(G,this.options.pluralSeparator)),v&&V.push(g+U)),S){const Y=`${g}${this.options.contextSeparator}${i.context}`;V.push(Y),x&&(V.push(Y+D),i.ordinal&&D.indexOf(G)===0&&V.push(Y+D.replace(G,this.options.pluralSeparator)),v&&V.push(Y+U))}}let M;for(;M=V.pop();)this.isValidLookup(a)||(l=M,a=this.getResource(A,C,M,i))}))})}),{res:a,usedKey:o,exactUsedKey:l,usedLng:u,usedNS:f}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,i,a){var l;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(l=this.i18nFormat)!=null&&l.getResource?this.i18nFormat.getResource(t,i,a,o):this.resourceStore.getResource(t,i,a,o)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const i=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],a=t.replace&&!ge(t.replace);let o=a?t.replace:t;if(a&&typeof t.count<"u"&&(o.count=t.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!a){o={...o};for(const l of i)delete o[l]}return o}static hasDefaultValue(t){const i="defaultValue";for(const a in t)if(Object.prototype.hasOwnProperty.call(t,a)&&i===a.substring(0,i.length)&&t[a]!==void 0)return!0;return!1}}class mx{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Qn.create("languageUtils")}getScriptPartFromCode(t){if(t=gu(t),!t||t.indexOf("-")<0)return null;const i=t.split("-");return i.length===2||(i.pop(),i[i.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(i.join("-"))}getLanguagePartFromCode(t){if(t=gu(t),!t||t.indexOf("-")<0)return t;const i=t.split("-");return this.formatLanguageCode(i[0])}formatLanguageCode(t){if(ge(t)&&t.indexOf("-")>-1){let i;try{i=Intl.getCanonicalLocales(t)[0]}catch{}return i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i||(this.options.lowerCaseLng?t.toLowerCase():t)}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let i;return t.forEach(a=>{if(i)return;const o=this.formatLanguageCode(a);(!this.options.supportedLngs||this.isSupportedCode(o))&&(i=o)}),!i&&this.options.supportedLngs&&t.forEach(a=>{if(i)return;const o=this.getLanguagePartFromCode(a);if(this.isSupportedCode(o))return i=o;i=this.options.supportedLngs.find(l=>{if(l===o)return l;if(!(l.indexOf("-")<0&&o.indexOf("-")<0)&&(l.indexOf("-")>0&&o.indexOf("-")<0&&l.substring(0,l.indexOf("-"))===o||l.indexOf(o)===0&&o.length>1))return l})}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}getFallbackCodes(t,i){if(!t)return[];if(typeof t=="function"&&(t=t(i)),ge(t)&&(t=[t]),Array.isArray(t))return t;if(!i)return t.default||[];let a=t[i];return a||(a=t[this.getScriptPartFromCode(i)]),a||(a=t[this.formatLanguageCode(i)]),a||(a=t[this.getLanguagePartFromCode(i)]),a||(a=t.default),a||[]}toResolveHierarchy(t,i){const a=this.getFallbackCodes(i||this.options.fallbackLng||[],t),o=[],l=u=>{u&&(this.isSupportedCode(u)?o.push(u):this.logger.warn(`rejecting language code not found in supportedLngs: ${u}`))};return ge(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&l(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&l(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&l(this.getLanguagePartFromCode(t))):ge(t)&&l(this.formatLanguageCode(t)),a.forEach(u=>{o.indexOf(u)<0&&l(this.formatLanguageCode(u))}),o}}const gx={zero:0,one:1,two:2,few:3,many:4,other:5},bx={select:e=>e===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class fC{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=i,this.logger=Qn.create("pluralResolver"),this.pluralRulesCache={}}addRule(t,i){this.rules[t]=i}clearCache(){this.pluralRulesCache={}}getRule(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=gu(t==="dev"?"en":t),o=i.ordinal?"ordinal":"cardinal",l=JSON.stringify({cleanedCode:a,type:o});if(l in this.pluralRulesCache)return this.pluralRulesCache[l];let u;try{u=new Intl.PluralRules(a,{type:o})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),bx;if(!t.match(/-|_/))return bx;const p=this.languageUtils.getLanguagePartFromCode(t);u=this.getRule(p,i)}return this.pluralRulesCache[l]=u,u}needsPlural(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(t,i);return a||(a=this.getRule("dev",i)),(a==null?void 0:a.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(t,i){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,a).map(o=>`${i}${o}`)}getSuffixes(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(t,i);return a||(a=this.getRule("dev",i)),a?a.resolvedOptions().pluralCategories.sort((o,l)=>gx[o]-gx[l]).map(o=>`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${o}`):[]}getSuffix(t,i){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(t,a);return o?`${this.options.prepend}${a.ordinal?`ordinal${this.options.prepend}`:""}${o.select(i)}`:(this.logger.warn(`no plural rule found for: ${t}`),this.getSuffix("dev",i,a))}}const yx=function(e,t,i){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=aC(e,t,i);return!l&&o&&ge(i)&&(l=Gh(e,i,a),l===void 0&&(l=Gh(t,i,a))),l},Np=e=>e.replace(/\$/g,"$$$$");class pC{constructor(){var i;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Qn.create("interpolator"),this.options=t,this.format=((i=t==null?void 0:t.interpolation)==null?void 0:i.format)||(a=>a),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:i,escapeValue:a,useRawValueToEscape:o,prefix:l,prefixEscaped:u,suffix:f,suffixEscaped:p,formatSeparator:m,unescapeSuffix:g,unescapePrefix:y,nestingPrefix:x,nestingPrefixEscaped:v,nestingSuffix:S,nestingSuffixEscaped:j,nestingOptionsSeparator:C,maxReplaces:k,alwaysFormat:R}=t.interpolation;this.escape=i!==void 0?i:sC,this.escapeValue=a!==void 0?a:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=l?Ar(l):u||"{{",this.suffix=f?Ar(f):p||"}}",this.formatSeparator=m||",",this.unescapePrefix=g?"":y||"-",this.unescapeSuffix=this.unescapePrefix?"":g||"",this.nestingPrefix=x?Ar(x):v||Ar("$t("),this.nestingSuffix=S?Ar(S):j||Ar(")"),this.nestingOptionsSeparator=C||",",this.maxReplaces=k||1e3,this.alwaysFormat=R!==void 0?R:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(i,a)=>(i==null?void 0:i.source)===a?(i.lastIndex=0,i):new RegExp(a,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,i,a,o){var v;let l,u,f;const p=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},m=S=>{if(S.indexOf(this.formatSeparator)<0){const R=yx(i,p,S,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(R,void 0,a,{...o,...i,interpolationkey:S}):R}const j=S.split(this.formatSeparator),C=j.shift().trim(),k=j.join(this.formatSeparator).trim();return this.format(yx(i,p,C,this.options.keySeparator,this.options.ignoreJSONStructure),k,a,{...o,...i,interpolationkey:C})};this.resetRegExp();const g=(o==null?void 0:o.missingInterpolationHandler)||this.options.missingInterpolationHandler,y=((v=o==null?void 0:o.interpolation)==null?void 0:v.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:S=>Np(S)},{regex:this.regexp,safeValue:S=>this.escapeValue?Np(this.escape(S)):Np(S)}].forEach(S=>{for(f=0;l=S.regex.exec(t);){const j=l[1].trim();if(u=m(j),u===void 0)if(typeof g=="function"){const k=g(t,l,o);u=ge(k)?k:""}else if(o&&Object.prototype.hasOwnProperty.call(o,j))u="";else if(y){u=l[0];continue}else this.logger.warn(`missed to pass in variable ${j} for interpolating ${t}`),u="";else!ge(u)&&!this.useRawValueToEscape&&(u=lx(u));const C=S.safeValue(u);if(t=t.replace(l[0],C),y?(S.regex.lastIndex+=u.length,S.regex.lastIndex-=l[0].length):S.regex.lastIndex=0,f++,f>=this.maxReplaces)break}}),t}nest(t,i){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,l,u;const f=(p,m)=>{const g=this.nestingOptionsSeparator;if(p.indexOf(g)<0)return p;const y=p.split(new RegExp(`${g}[ ]*{`));let x=`{${y[1]}`;p=y[0],x=this.interpolate(x,u);const v=x.match(/'/g),S=x.match(/"/g);(((v==null?void 0:v.length)??0)%2===0&&!S||S.length%2!==0)&&(x=x.replace(/'/g,'"'));try{u=JSON.parse(x),m&&(u={...m,...u})}catch(j){return this.logger.warn(`failed parsing options string in nesting for key ${p}`,j),`${p}${g}${x}`}return u.defaultValue&&u.defaultValue.indexOf(this.prefix)>-1&&delete u.defaultValue,p};for(;o=this.nestingRegexp.exec(t);){let p=[];u={...a},u=u.replace&&!ge(u.replace)?u.replace:u,u.applyPostProcessor=!1,delete u.defaultValue;let m=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const g=o[1].split(this.formatSeparator).map(y=>y.trim());o[1]=g.shift(),p=g,m=!0}if(l=i(f.call(this,o[1].trim(),u),u),l&&o[0]===t&&!ge(l))return l;ge(l)||(l=lx(l)),l||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),l=""),m&&(l=p.reduce((g,y)=>this.format(g,y,a.lng,{...a,interpolationkey:o[1].trim()}),l.trim())),t=t.replace(o[0],l),this.regexp.lastIndex=0}return t}}const hC=e=>{let t=e.toLowerCase().trim();const i={};if(e.indexOf("(")>-1){const a=e.split("(");t=a[0].toLowerCase().trim();const o=a[1].substring(0,a[1].length-1);t==="currency"&&o.indexOf(":")<0?i.currency||(i.currency=o.trim()):t==="relativetime"&&o.indexOf(":")<0?i.range||(i.range=o.trim()):o.split(";").forEach(u=>{if(u){const[f,...p]=u.split(":"),m=p.join(":").trim().replace(/^'+|'+$/g,""),g=f.trim();i[g]||(i[g]=m),m==="false"&&(i[g]=!1),m==="true"&&(i[g]=!0),isNaN(m)||(i[g]=parseInt(m,10))}})}return{formatName:t,formatOptions:i}},Cr=e=>{const t={};return(i,a,o)=>{let l=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(l={...l,[o.interpolationkey]:void 0});const u=a+JSON.stringify(l);let f=t[u];return f||(f=e(gu(a),o),t[u]=f),f(i)}};class mC{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Qn.create("formatter"),this.options=t,this.formats={number:Cr((i,a)=>{const o=new Intl.NumberFormat(i,{...a});return l=>o.format(l)}),currency:Cr((i,a)=>{const o=new Intl.NumberFormat(i,{...a,style:"currency"});return l=>o.format(l)}),datetime:Cr((i,a)=>{const o=new Intl.DateTimeFormat(i,{...a});return l=>o.format(l)}),relativetime:Cr((i,a)=>{const o=new Intl.RelativeTimeFormat(i,{...a});return l=>o.format(l,a.range||"day")}),list:Cr((i,a)=>{const o=new Intl.ListFormat(i,{...a});return l=>o.format(l)})},this.init(t)}init(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=i.interpolation.formatSeparator||","}add(t,i){this.formats[t.toLowerCase().trim()]=i}addCached(t,i){this.formats[t.toLowerCase().trim()]=Cr(i)}format(t,i,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=i.split(this.formatSeparator);if(l.length>1&&l[0].indexOf("(")>1&&l[0].indexOf(")")<0&&l.find(f=>f.indexOf(")")>-1)){const f=l.findIndex(p=>p.indexOf(")")>-1);l[0]=[l[0],...l.splice(1,f)].join(this.formatSeparator)}return l.reduce((f,p)=>{var y;const{formatName:m,formatOptions:g}=hC(p);if(this.formats[m]){let x=f;try{const v=((y=o==null?void 0:o.formatParams)==null?void 0:y[o.interpolationkey])||{},S=v.locale||v.lng||o.locale||o.lng||a;x=this.formats[m](f,S,{...g,...o,...v})}catch(v){this.logger.warn(v)}return x}else this.logger.warn(`there was no format function for ${m}`);return f},t)}}const gC=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)};class bC extends Hu{constructor(t,i,a){var l,u;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=i,this.services=a,this.languageUtils=a.languageUtils,this.options=o,this.logger=Qn.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],(u=(l=this.backend)==null?void 0:l.init)==null||u.call(l,a,o.backend,o)}queueLoad(t,i,a,o){const l={},u={},f={},p={};return t.forEach(m=>{let g=!0;i.forEach(y=>{const x=`${m}|${y}`;!a.reload&&this.store.hasResourceBundle(m,y)?this.state[x]=2:this.state[x]<0||(this.state[x]===1?u[x]===void 0&&(u[x]=!0):(this.state[x]=1,g=!1,u[x]===void 0&&(u[x]=!0),l[x]===void 0&&(l[x]=!0),p[y]===void 0&&(p[y]=!0)))}),g||(f[m]=!0)}),(Object.keys(l).length||Object.keys(u).length)&&this.queue.push({pending:u,pendingCount:Object.keys(u).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(l),pending:Object.keys(u),toLoadLanguages:Object.keys(f),toLoadNamespaces:Object.keys(p)}}loaded(t,i,a){const o=t.split("|"),l=o[0],u=o[1];i&&this.emit("failedLoading",l,u,i),!i&&a&&this.store.addResourceBundle(l,u,a,void 0,void 0,{skipCopy:!0}),this.state[t]=i?-1:2,i&&a&&(this.state[t]=0);const f={};this.queue.forEach(p=>{iC(p.loaded,[l],u),gC(p,t),i&&p.errors.push(i),p.pendingCount===0&&!p.done&&(Object.keys(p.loaded).forEach(m=>{f[m]||(f[m]={});const g=p.loaded[m];g.length&&g.forEach(y=>{f[m][y]===void 0&&(f[m][y]=!0)})}),p.done=!0,p.errors.length?p.callback(p.errors):p.callback())}),this.emit("loaded",f),this.queue=this.queue.filter(p=>!p.done)}read(t,i,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,u=arguments.length>5?arguments[5]:void 0;if(!t.length)return u(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:i,fcName:a,tried:o,wait:l,callback:u});return}this.readingCalls++;const f=(m,g)=>{if(this.readingCalls--,this.waitingReads.length>0){const y=this.waitingReads.shift();this.read(y.lng,y.ns,y.fcName,y.tried,y.wait,y.callback)}if(m&&g&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,t,i,a,o+1,l*2,u)},l);return}u(m,g)},p=this.backend[a].bind(this.backend);if(p.length===2){try{const m=p(t,i);m&&typeof m.then=="function"?m.then(g=>f(null,g)).catch(f):f(null,m)}catch(m){f(m)}return}return p(t,i,f)}prepareLoading(t,i){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();ge(t)&&(t=this.languageUtils.toResolveHierarchy(t)),ge(i)&&(i=[i]);const l=this.queueLoad(t,i,a,o);if(!l.toLoad.length)return l.pending.length||o(),null;l.toLoad.forEach(u=>{this.loadOne(u)})}load(t,i,a){this.prepareLoading(t,i,{},a)}reload(t,i,a){this.prepareLoading(t,i,{reload:!0},a)}loadOne(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const a=t.split("|"),o=a[0],l=a[1];this.read(o,l,"read",void 0,void 0,(u,f)=>{u&&this.logger.warn(`${i}loading namespace ${l} for language ${o} failed`,u),!u&&f&&this.logger.log(`${i}loaded namespace ${l} for language ${o}`,f),this.loaded(t,u,f)})}saveMissing(t,i,a,o,l){var p,m,g,y,x;let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},f=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((m=(p=this.services)==null?void 0:p.utils)!=null&&m.hasLoadedNamespace&&!((y=(g=this.services)==null?void 0:g.utils)!=null&&y.hasLoadedNamespace(i))){this.logger.warn(`did not save key "${a}" as the namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(a==null||a==="")){if((x=this.backend)!=null&&x.create){const v={...u,isUpdate:l},S=this.backend.create.bind(this.backend);if(S.length<6)try{let j;S.length===5?j=S(t,i,a,o,v):j=S(t,i,a,o),j&&typeof j.then=="function"?j.then(C=>f(null,C)).catch(f):f(null,j)}catch(j){f(j)}else S(t,i,a,o,f,v)}!t||!t[0]||this.store.addResource(t[0],i,a,o)}}}const xx=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]=="object"&&(t=e[1]),ge(e[1])&&(t.defaultValue=e[1]),ge(e[2])&&(t.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const i=e[3]||e[2];Object.keys(i).forEach(a=>{t[a]=i[a]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),vx=e=>{var t,i;return ge(e.ns)&&(e.ns=[e.ns]),ge(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),ge(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),((i=(t=e.supportedLngs)==null?void 0:t.indexOf)==null?void 0:i.call(t,"cimode"))<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),typeof e.initImmediate=="boolean"&&(e.initAsync=e.initImmediate),e},Cc=()=>{},yC=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(i=>{typeof e[i]=="function"&&(e[i]=e[i].bind(e))})};class Ko extends Hu{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(super(),this.options=vx(t),this.services={},this.logger=Qn,this.modules={external:[]},yC(this),i&&!this.isInitialized&&!t.isClone){if(!this.options.initAsync)return this.init(t,i),this;setTimeout(()=>{this.init(t,i)},0)}}init(){var t=this;let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof i=="function"&&(a=i,i={}),i.defaultNS==null&&i.ns&&(ge(i.ns)?i.defaultNS=i.ns:i.ns.indexOf("translation")<0&&(i.defaultNS=i.ns[0]));const o=xx();this.options={...o,...this.options,...vx(i)},this.options.interpolation={...o.interpolation,...this.options.interpolation},i.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=i.keySeparator),i.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=i.nsSeparator);const l=g=>g?typeof g=="function"?new g:g:null;if(!this.options.isClone){this.modules.logger?Qn.init(l(this.modules.logger),this.options):Qn.init(null,this.options);let g;this.modules.formatter?g=this.modules.formatter:g=mC;const y=new mx(this.options);this.store=new fx(this.options.resources,this.options);const x=this.services;x.logger=Qn,x.resourceStore=this.store,x.languageUtils=y,x.pluralResolver=new fC(y,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),g&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(x.formatter=l(g),x.formatter.init(x,this.options),this.options.interpolation.format=x.formatter.format.bind(x.formatter)),x.interpolator=new pC(this.options),x.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},x.backendConnector=new bC(l(this.modules.backend),x.resourceStore,x,this.options),x.backendConnector.on("*",function(v){for(var S=arguments.length,j=new Array(S>1?S-1:0),C=1;C<S;C++)j[C-1]=arguments[C];t.emit(v,...j)}),this.modules.languageDetector&&(x.languageDetector=l(this.modules.languageDetector),x.languageDetector.init&&x.languageDetector.init(x,this.options.detection,this.options)),this.modules.i18nFormat&&(x.i18nFormat=l(this.modules.i18nFormat),x.i18nFormat.init&&x.i18nFormat.init(this)),this.translator=new yu(this.services,this.options),this.translator.on("*",function(v){for(var S=arguments.length,j=new Array(S>1?S-1:0),C=1;C<S;C++)j[C-1]=arguments[C];t.emit(v,...j)}),this.modules.external.forEach(v=>{v.init&&v.init(this)})}if(this.format=this.options.interpolation.format,a||(a=Cc),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const g=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);g.length>0&&g[0]!=="dev"&&(this.options.lng=g[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(g=>{this[g]=function(){return t.store[g](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(g=>{this[g]=function(){return t.store[g](...arguments),t}});const p=ho(),m=()=>{const g=(y,x)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),p.resolve(x),a(y,x)};if(this.languages&&!this.isInitialized)return g(null,this.t.bind(this));this.changeLanguage(this.options.lng,g)};return this.options.resources||!this.options.initAsync?m():setTimeout(m,0),p}loadResources(t){var l,u;let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Cc;const o=ge(t)?t:this.language;if(typeof t=="function"&&(a=t),!this.options.resources||this.options.partialBundledLanguages){if((o==null?void 0:o.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return a();const f=[],p=m=>{if(!m||m==="cimode")return;this.services.languageUtils.toResolveHierarchy(m).forEach(y=>{y!=="cimode"&&f.indexOf(y)<0&&f.push(y)})};o?p(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(g=>p(g)),(u=(l=this.options.preload)==null?void 0:l.forEach)==null||u.call(l,m=>p(m)),this.services.backendConnector.load(f,this.options.ns,m=>{!m&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),a(m)})}else a(null)}reloadResources(t,i,a){const o=ho();return typeof t=="function"&&(a=t,t=void 0),typeof i=="function"&&(a=i,i=void 0),t||(t=this.languages),i||(i=this.options.ns),a||(a=Cc),this.services.backendConnector.reload(t,i,l=>{o.resolve(),a(l)}),o}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&B4.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let i=0;i<this.languages.length;i++){const a=this.languages[i];if(!(["cimode","dev"].indexOf(a)>-1)&&this.store.hasLanguageSomeTranslations(a)){this.resolvedLanguage=a;break}}}changeLanguage(t,i){var a=this;this.isLanguageChangingTo=t;const o=ho();this.emit("languageChanging",t);const l=p=>{this.language=p,this.languages=this.services.languageUtils.toResolveHierarchy(p),this.resolvedLanguage=void 0,this.setResolvedLanguage(p)},u=(p,m)=>{m?(l(m),this.translator.changeLanguage(m),this.isLanguageChangingTo=void 0,this.emit("languageChanged",m),this.logger.log("languageChanged",m)):this.isLanguageChangingTo=void 0,o.resolve(function(){return a.t(...arguments)}),i&&i(p,function(){return a.t(...arguments)})},f=p=>{var g,y;!t&&!p&&this.services.languageDetector&&(p=[]);const m=ge(p)?p:this.services.languageUtils.getBestMatchFromCodes(p);m&&(this.language||l(m),this.translator.language||this.translator.changeLanguage(m),(y=(g=this.services.languageDetector)==null?void 0:g.cacheUserLanguage)==null||y.call(g,m)),this.loadResources(m,x=>{u(x,m)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?f(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(f):this.services.languageDetector.detect(f):f(t),o}getFixedT(t,i,a){var o=this;const l=function(u,f){let p;if(typeof f!="object"){for(var m=arguments.length,g=new Array(m>2?m-2:0),y=2;y<m;y++)g[y-2]=arguments[y];p=o.options.overloadTranslationOptionHandler([u,f].concat(g))}else p={...f};p.lng=p.lng||l.lng,p.lngs=p.lngs||l.lngs,p.ns=p.ns||l.ns,p.keyPrefix!==""&&(p.keyPrefix=p.keyPrefix||a||l.keyPrefix);const x=o.options.keySeparator||".";let v;return p.keyPrefix&&Array.isArray(u)?v=u.map(S=>`${p.keyPrefix}${x}${S}`):v=p.keyPrefix?`${p.keyPrefix}${x}${u}`:u,o.t(v,p)};return ge(t)?l.lng=t:l.lngs=t,l.ns=i,l.keyPrefix=a,l}t(){var o;for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return(o=this.translator)==null?void 0:o.translate(...i)}exists(){var o;for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return(o=this.translator)==null?void 0:o.exists(...i)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const a=i.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,l=this.languages[this.languages.length-1];if(a.toLowerCase()==="cimode")return!0;const u=(f,p)=>{const m=this.services.backendConnector.state[`${f}|${p}`];return m===-1||m===0||m===2};if(i.precheck){const f=i.precheck(this,u);if(f!==void 0)return f}return!!(this.hasResourceBundle(a,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||u(a,t)&&(!o||u(l,t)))}loadNamespaces(t,i){const a=ho();return this.options.ns?(ge(t)&&(t=[t]),t.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{a.resolve(),i&&i(o)}),a):(i&&i(),Promise.resolve())}loadLanguages(t,i){const a=ho();ge(t)&&(t=[t]);const o=this.options.preload||[],l=t.filter(u=>o.indexOf(u)<0&&this.services.languageUtils.isSupportedCode(u));return l.length?(this.options.preload=o.concat(l),this.loadResources(u=>{a.resolve(),i&&i(u)}),a):(i&&i(),Promise.resolve())}dir(t){var o,l;if(t||(t=this.resolvedLanguage||(((o=this.languages)==null?void 0:o.length)>0?this.languages[0]:this.language)),!t)return"rtl";const i=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],a=((l=this.services)==null?void 0:l.languageUtils)||new mx(xx());return i.indexOf(a.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;return new Ko(t,i)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Cc;const a=t.forkResourceStore;a&&delete t.forkResourceStore;const o={...this.options,...t,isClone:!0},l=new Ko(o);if((t.debug!==void 0||t.prefix!==void 0)&&(l.logger=l.logger.clone(t)),["store","services","language"].forEach(f=>{l[f]=this[f]}),l.services={...this.services},l.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},a){const f=Object.keys(this.store.data).reduce((p,m)=>(p[m]={...this.store.data[m]},Object.keys(p[m]).reduce((g,y)=>(g[y]={...p[m][y]},g),{})),{});l.store=new fx(f,o),l.services.resourceStore=l.store}return l.translator=new yu(l.services,o),l.translator.on("*",function(f){for(var p=arguments.length,m=new Array(p>1?p-1:0),g=1;g<p;g++)m[g-1]=arguments[g];l.emit(f,...m)}),l.init(o,i),l.translator.options=o,l.translator.backendConnector.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},l}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Pt=Ko.createInstance();Pt.createInstance=Ko.createInstance;Pt.createInstance;Pt.dir;Pt.init;Pt.loadResources;Pt.reloadResources;Pt.use;Pt.changeLanguage;Pt.getFixedT;Pt.t;Pt.exists;Pt.setDefaultNamespace;Pt.hasLoadedNamespace;Pt.loadNamespaces;Pt.loadLanguages;function Uh(e){"@babel/helpers - typeof";return Uh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Uh(e)}function _4(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":Uh(XMLHttpRequest))==="object"}function xC(e){return!!e&&typeof e.then=="function"}function vC(e){return xC(e)?e:Promise.resolve(e)}const wC="modulepreload",SC=function(e){return"/"+e},wx={},TC=function(t,i,a){let o=Promise.resolve();if(i&&i.length>0){let u=function(m){return Promise.all(m.map(g=>Promise.resolve(g).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),p=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));o=u(i.map(m=>{if(m=SC(m),m in wx)return;wx[m]=!0;const g=m.endsWith(".css"),y=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${y}`))return;const x=document.createElement("link");if(x.rel=g?"stylesheet":wC,g||(x.as="script"),x.crossOrigin="",x.href=m,p&&x.setAttribute("nonce",p),document.head.appendChild(x),g)return new Promise((v,S)=>{x.addEventListener("load",v),x.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${m}`)))})}))}function l(u){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=u,window.dispatchEvent(f),!f.defaultPrevented)throw u}return o.then(u=>{for(const f of u||[])f.status==="rejected"&&l(f.reason);return t().catch(l)})};function Sx(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,a)}return i}function Tx(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?Sx(Object(i),!0).forEach(function(a){jC(e,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Sx(Object(i)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))})}return e}function jC(e,t,i){return(t=kC(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function kC(e){var t=EC(e,"string");return _a(t)=="symbol"?t:t+""}function EC(e,t){if(_a(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var a=i.call(e,t);if(_a(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _a(e){"@babel/helpers - typeof";return _a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_a(e)}var ia=typeof fetch=="function"?fetch:void 0;typeof global<"u"&&global.fetch?ia=global.fetch:typeof window<"u"&&window.fetch&&(ia=window.fetch);var Yo;_4()&&(typeof global<"u"&&global.XMLHttpRequest?Yo=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(Yo=window.XMLHttpRequest));var xu;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?xu=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(xu=window.ActiveXObject));typeof ia!="function"&&(ia=void 0);if(!ia&&!Yo&&!xu)try{TC(()=>import("./browser-ponyfill-Bj6dZxvG.js").then(e=>e.b),[]).then(function(e){ia=e.default}).catch(function(){})}catch{}var Ih=function(t,i){if(i&&_a(i)==="object"){var a="";for(var o in i)a+="&"+encodeURIComponent(o)+"="+encodeURIComponent(i[o]);if(!a)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+a.slice(1)}return t},jx=function(t,i,a,o){var l=function(p){if(!p.ok)return a(p.statusText||"Error",{status:p.status});p.text().then(function(m){a(null,{status:p.status,data:m})}).catch(a)};if(o){var u=o(t,i);if(u instanceof Promise){u.then(l).catch(a);return}}typeof fetch=="function"?fetch(t,i).then(l).catch(a):ia(t,i).then(l).catch(a)},kx=!1,AC=function(t,i,a,o){t.queryStringParams&&(i=Ih(i,t.queryStringParams));var l=Tx({},typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(l["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),a&&(l["Content-Type"]="application/json");var u=typeof t.requestOptions=="function"?t.requestOptions(a):t.requestOptions,f=Tx({method:a?"POST":"GET",body:a?t.stringify(a):void 0,headers:l},kx?{}:u),p=typeof t.alternateFetch=="function"&&t.alternateFetch.length>=1?t.alternateFetch:void 0;try{jx(i,f,o,p)}catch(m){if(!u||Object.keys(u).length===0||!m.message||m.message.indexOf("not implemented")<0)return o(m);try{Object.keys(u).forEach(function(g){delete f[g]}),jx(i,f,o,p),kx=!0}catch(g){o(g)}}},CC=function(t,i,a,o){a&&_a(a)==="object"&&(a=Ih("",a).slice(1)),t.queryStringParams&&(i=Ih(i,t.queryStringParams));try{var l=Yo?new Yo:new xu("MSXML2.XMLHTTP.3.0");l.open(a?"POST":"GET",i,1),t.crossDomain||l.setRequestHeader("X-Requested-With","XMLHttpRequest"),l.withCredentials=!!t.withCredentials,a&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),l.overrideMimeType&&l.overrideMimeType("application/json");var u=t.customHeaders;if(u=typeof u=="function"?u():u,u)for(var f in u)l.setRequestHeader(f,u[f]);l.onreadystatechange=function(){l.readyState>3&&o(l.status>=400?l.statusText:null,{status:l.status,data:l.responseText})},l.send(a)}catch(p){console&&console.log(p)}},MC=function(t,i,a,o){if(typeof a=="function"&&(o=a,a=void 0),o=o||function(){},ia&&i.indexOf("file:")!==0)return AC(t,i,a,o);if(_4()||typeof ActiveXObject=="function")return CC(t,i,a,o);o(new Error("No fetch and no xhr implementation found!"))};function Xr(e){"@babel/helpers - typeof";return Xr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xr(e)}function Ex(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,a)}return i}function Vp(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?Ex(Object(i),!0).forEach(function(a){H4(e,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Ex(Object(i)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))})}return e}function zC(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function RC(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,G4(a.key),a)}}function OC(e,t,i){return t&&RC(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function H4(e,t,i){return(t=G4(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function G4(e){var t=LC(e,"string");return Xr(t)=="symbol"?t:t+""}function LC(e,t){if(Xr(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var a=i.call(e,t);if(Xr(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var DC=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(i){return JSON.parse(i)},stringify:JSON.stringify,parsePayload:function(i,a,o){return H4({},a,o||"")},parseLoadPayload:function(i,a){},request:MC,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},U4=function(){function e(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};zC(this,e),this.services=t,this.options=i,this.allOptions=a,this.type="backend",this.init(t,i,a)}return OC(e,[{key:"init",value:function(i){var a=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=i,this.options=Vp(Vp(Vp({},DC()),this.options||{}),o),this.allOptions=l,this.services&&this.options.reloadInterval){var u=setInterval(function(){return a.reload()},this.options.reloadInterval);Xr(u)==="object"&&typeof u.unref=="function"&&u.unref()}}},{key:"readMulti",value:function(i,a,o){this._readAny(i,i,a,a,o)}},{key:"read",value:function(i,a,o){this._readAny([i],i,[a],a,o)}},{key:"_readAny",value:function(i,a,o,l,u){var f=this,p=this.options.loadPath;typeof this.options.loadPath=="function"&&(p=this.options.loadPath(i,o)),p=vC(p),p.then(function(m){if(!m)return u(null,{});var g=f.services.interpolator.interpolate(m,{lng:i.join("+"),ns:o.join("+")});f.loadUrl(g,u,a,l)})}},{key:"loadUrl",value:function(i,a,o,l){var u=this,f=typeof o=="string"?[o]:o,p=typeof l=="string"?[l]:l,m=this.options.parseLoadPayload(f,p);this.options.request(this.options,i,m,function(g,y){if(y&&(y.status>=500&&y.status<600||!y.status))return a("failed loading "+i+"; status code: "+y.status,!0);if(y&&y.status>=400&&y.status<500)return a("failed loading "+i+"; status code: "+y.status,!1);if(!y&&g&&g.message){var x=g.message.toLowerCase(),v=["failed","fetch","network","load"].find(function(C){return x.indexOf(C)>-1});if(v)return a("failed loading "+i+": "+g.message,!0)}if(g)return a(g,!1);var S,j;try{typeof y.data=="string"?S=u.options.parse(y.data,o,l):S=y.data}catch{j="failed parsing "+i+" to json"}if(j)return a(j,!1);a(null,S)})}},{key:"create",value:function(i,a,o,l,u){var f=this;if(this.options.addPath){typeof i=="string"&&(i=[i]);var p=this.options.parsePayload(a,o,l),m=0,g=[],y=[];i.forEach(function(x){var v=f.options.addPath;typeof f.options.addPath=="function"&&(v=f.options.addPath(x,a));var S=f.services.interpolator.interpolate(v,{lng:x,ns:a});f.options.request(f.options,S,p,function(j,C){m+=1,g.push(j),y.push(C),m===i.length&&typeof u=="function"&&u(g,y)})})}}},{key:"reload",value:function(){var i=this,a=this.services,o=a.backendConnector,l=a.languageUtils,u=a.logger,f=o.language;if(!(f&&f.toLowerCase()==="cimode")){var p=[],m=function(y){var x=l.toResolveHierarchy(y);x.forEach(function(v){p.indexOf(v)<0&&p.push(v)})};m(f),this.allOptions.preload&&this.allOptions.preload.forEach(function(g){return m(g)}),p.forEach(function(g){i.allOptions.ns.forEach(function(y){o.read(g,y,"read",null,null,function(x,v){x&&u.warn("loading namespace ".concat(y," for language ").concat(g," failed"),x),!x&&v&&u.log("loaded namespace ".concat(y," for language ").concat(g),v),o.loaded("".concat(g,"|").concat(y),x,v)})})})}}}])}();U4.type="backend";const{slice:PC,forEach:NC}=[];function VC(e){return NC.call(PC.call(arguments,1),t=>{if(t)for(const i in t)e[i]===void 0&&(e[i]=t[i])}),e}function BC(e){return typeof e!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(i=>i.test(e))}const Ax=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,_C=function(e,t){const a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},o=encodeURIComponent(t);let l=`${e}=${o}`;if(a.maxAge>0){const u=a.maxAge-0;if(Number.isNaN(u))throw new Error("maxAge should be a Number");l+=`; Max-Age=${Math.floor(u)}`}if(a.domain){if(!Ax.test(a.domain))throw new TypeError("option domain is invalid");l+=`; Domain=${a.domain}`}if(a.path){if(!Ax.test(a.path))throw new TypeError("option path is invalid");l+=`; Path=${a.path}`}if(a.expires){if(typeof a.expires.toUTCString!="function")throw new TypeError("option expires is invalid");l+=`; Expires=${a.expires.toUTCString()}`}if(a.httpOnly&&(l+="; HttpOnly"),a.secure&&(l+="; Secure"),a.sameSite)switch(typeof a.sameSite=="string"?a.sameSite.toLowerCase():a.sameSite){case!0:l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"strict":l+="; SameSite=Strict";break;case"none":l+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return a.partitioned&&(l+="; Partitioned"),l},Cx={create(e,t,i,a){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};i&&(o.expires=new Date,o.expires.setTime(o.expires.getTime()+i*60*1e3)),a&&(o.domain=a),document.cookie=_C(e,t,o)},read(e){const t=`${e}=`,i=document.cookie.split(";");for(let a=0;a<i.length;a++){let o=i[a];for(;o.charAt(0)===" ";)o=o.substring(1,o.length);if(o.indexOf(t)===0)return o.substring(t.length,o.length)}return null},remove(e,t){this.create(e,"",-1,t)}};var HC={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&typeof document<"u")return Cx.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:i,cookieMinutes:a,cookieDomain:o,cookieOptions:l}=t;i&&typeof document<"u"&&Cx.create(i,e,a,o,l)}},GC={name:"querystring",lookup(e){var a;let{lookupQuerystring:t}=e,i;if(typeof window<"u"){let{search:o}=window.location;!window.location.search&&((a=window.location.hash)==null?void 0:a.indexOf("?"))>-1&&(o=window.location.hash.substring(window.location.hash.indexOf("?")));const u=o.substring(1).split("&");for(let f=0;f<u.length;f++){const p=u[f].indexOf("=");p>0&&u[f].substring(0,p)===t&&(i=u[f].substring(p+1))}}return i}},UC={name:"hash",lookup(e){var o;let{lookupHash:t,lookupFromHashIndex:i}=e,a;if(typeof window<"u"){const{hash:l}=window.location;if(l&&l.length>2){const u=l.substring(1);if(t){const f=u.split("&");for(let p=0;p<f.length;p++){const m=f[p].indexOf("=");m>0&&f[p].substring(0,m)===t&&(a=f[p].substring(m+1))}}if(a)return a;if(!a&&i>-1){const f=l.match(/\/([a-zA-Z-]*)/g);return Array.isArray(f)?(o=f[typeof i=="number"?i:0])==null?void 0:o.replace("/",""):void 0}}}return a}};let Mr=null;const Mx=()=>{if(Mr!==null)return Mr;try{if(Mr=typeof window<"u"&&window.localStorage!==null,!Mr)return!1;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch{Mr=!1}return Mr};var IC={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&Mx())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:i}=t;i&&Mx()&&window.localStorage.setItem(i,e)}};let zr=null;const zx=()=>{if(zr!==null)return zr;try{if(zr=typeof window<"u"&&window.sessionStorage!==null,!zr)return!1;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch{zr=!1}return zr};var $C={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&zx())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:i}=t;i&&zx()&&window.sessionStorage.setItem(i,e)}},qC={name:"navigator",lookup(e){const t=[];if(typeof navigator<"u"){const{languages:i,userLanguage:a,language:o}=navigator;if(i)for(let l=0;l<i.length;l++)t.push(i[l]);a&&t.push(a),o&&t.push(o)}return t.length>0?t:void 0}},FC={name:"htmlTag",lookup(e){let{htmlTag:t}=e,i;const a=t||(typeof document<"u"?document.documentElement:null);return a&&typeof a.getAttribute=="function"&&(i=a.getAttribute("lang")),i}},KC={name:"path",lookup(e){var o;let{lookupFromPathIndex:t}=e;if(typeof window>"u")return;const i=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(i)?(o=i[typeof t=="number"?t:0])==null?void 0:o.replace("/",""):void 0}},YC={name:"subdomain",lookup(e){var o,l;let{lookupFromSubdomainIndex:t}=e;const i=typeof t=="number"?t+1:1,a=typeof window<"u"&&((l=(o=window.location)==null?void 0:o.hostname)==null?void 0:l.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(a)return a[i]}};let I4=!1;try{document.cookie,I4=!0}catch{}const $4=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];I4||$4.splice(1,1);const XC=()=>({order:$4,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e});class q4{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(t,i)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=t,this.options=VC(i,this.options||{},XC()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=o=>o.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=a,this.addDetector(HC),this.addDetector(GC),this.addDetector(IC),this.addDetector($C),this.addDetector(qC),this.addDetector(FC),this.addDetector(KC),this.addDetector(YC),this.addDetector(UC)}addDetector(t){return this.detectors[t.name]=t,this}detect(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,i=[];return t.forEach(a=>{if(this.detectors[a]){let o=this.detectors[a].lookup(this.options);o&&typeof o=="string"&&(o=[o]),o&&(i=i.concat(o))}}),i=i.filter(a=>a!=null&&!BC(a)).map(a=>this.options.convertDetectedLanguage(a)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?i:i.length>0?i[0]:null}cacheUserLanguage(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;i&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(t)>-1||i.forEach(a=>{this.detectors[a]&&this.detectors[a].cacheUserLanguage(t,this.options)}))}}q4.type="languageDetector";const QC="20260308-contact-locale-fix",ag=["de","uk","tr","ar","pl","ku","fa","it","es","el","ro","bg"];Pt.use(U4).use(q4).use(QA).init({supportedLngs:[...ag],fallbackLng:"de",debug:!1,interpolation:{escapeValue:!1},backend:{loadPath:`/locales/{{lng}}/translation.json?v=${QC}`},detection:{order:["localStorage","navigator"],caches:["localStorage"],lookupLocalStorage:"i18nextLng"}});const F4=E.createContext(void 0),WC=({children:e})=>{const{i18n:t}=$e(),i=o=>{const l=(o||"").toLowerCase().split("-")[0];return ag.includes(l)?l:"de"},a=o=>{t.changeLanguage(o).then(()=>{window.location.reload()})};return d.jsx(F4.Provider,{value:{language:i(t.resolvedLanguage||t.language),setLanguage:a},children:e})},ZC=()=>{const e=E.useContext(F4);if(!e)throw new Error("useLanguage must be used within a LanguageProvider");return e};var Ft=function(){return Ft=Object.assign||function(t){for(var i,a=1,o=arguments.length;a<o;a++){i=arguments[a];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l])}return t},Ft.apply(this,arguments)};function Xo(e,t,i){if(i||arguments.length===2)for(var a=0,o=t.length,l;a<o;a++)(l||!(a in t))&&(l||(l=Array.prototype.slice.call(t,0,a)),l[a]=t[a]);return e.concat(l||Array.prototype.slice.call(t))}var Ke="-ms-",Lo="-moz-",De="-webkit-",K4="comm",Gu="rule",rg="decl",JC="@import",Y4="@keyframes",eM="@layer",X4=Math.abs,sg=String.fromCharCode,$h=Object.assign;function tM(e,t){return wt(e,0)^45?(((t<<2^wt(e,0))<<2^wt(e,1))<<2^wt(e,2))<<2^wt(e,3):0}function Q4(e){return e.trim()}function wi(e,t){return(e=t.exec(e))?e[0]:e}function ve(e,t,i){return e.replace(t,i)}function Xc(e,t,i){return e.indexOf(t,i)}function wt(e,t){return e.charCodeAt(t)|0}function Qr(e,t,i){return e.slice(t,i)}function Xn(e){return e.length}function W4(e){return e.length}function To(e,t){return t.push(e),e}function nM(e,t){return e.map(t).join("")}function Rx(e,t){return e.filter(function(i){return!wi(i,t)})}var Uu=1,Wr=1,Z4=0,jn=0,lt=0,cs="";function Iu(e,t,i,a,o,l,u,f){return{value:e,root:t,parent:i,type:a,props:o,children:l,line:Uu,column:Wr,length:u,return:"",siblings:f}}function ea(e,t){return $h(Iu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Rr(e){for(;e.root;)e=ea(e.root,{children:[e]});To(e,e.siblings)}function iM(){return lt}function aM(){return lt=jn>0?wt(cs,--jn):0,Wr--,lt===10&&(Wr=1,Uu--),lt}function On(){return lt=jn<Z4?wt(cs,jn++):0,Wr++,lt===10&&(Wr=1,Uu++),lt}function Pa(){return wt(cs,jn)}function Qc(){return jn}function $u(e,t){return Qr(cs,e,t)}function qh(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rM(e){return Uu=Wr=1,Z4=Xn(cs=e),jn=0,[]}function sM(e){return cs="",e}function Bp(e){return Q4($u(jn-1,Fh(e===91?e+2:e===40?e+1:e)))}function oM(e){for(;(lt=Pa())&&lt<33;)On();return qh(e)>2||qh(lt)>3?"":" "}function lM(e,t){for(;--t&&On()&&!(lt<48||lt>102||lt>57&&lt<65||lt>70&&lt<97););return $u(e,Qc()+(t<6&&Pa()==32&&On()==32))}function Fh(e){for(;On();)switch(lt){case e:return jn;case 34:case 39:e!==34&&e!==39&&Fh(lt);break;case 40:e===41&&Fh(e);break;case 92:On();break}return jn}function cM(e,t){for(;On()&&e+lt!==57;)if(e+lt===84&&Pa()===47)break;return"/*"+$u(t,jn-1)+"*"+sg(e===47?e:On())}function uM(e){for(;!qh(Pa());)On();return $u(e,jn)}function dM(e){return sM(Wc("",null,null,null,[""],e=rM(e),0,[0],e))}function Wc(e,t,i,a,o,l,u,f,p){for(var m=0,g=0,y=u,x=0,v=0,S=0,j=1,C=1,k=1,R=0,A="",V=o,M=l,P=a,D=A;C;)switch(S=R,R=On()){case 40:if(S!=108&&wt(D,y-1)==58){Xc(D+=ve(Bp(R),"&","&\f"),"&\f",X4(m?f[m-1]:0))!=-1&&(k=-1);break}case 34:case 39:case 91:D+=Bp(R);break;case 9:case 10:case 13:case 32:D+=oM(S);break;case 92:D+=lM(Qc()-1,7);continue;case 47:switch(Pa()){case 42:case 47:To(fM(cM(On(),Qc()),t,i,p),p);break;default:D+="/"}break;case 123*j:f[m++]=Xn(D)*k;case 125*j:case 59:case 0:switch(R){case 0:case 125:C=0;case 59+g:k==-1&&(D=ve(D,/\f/g,"")),v>0&&Xn(D)-y&&To(v>32?Lx(D+";",a,i,y-1,p):Lx(ve(D," ","")+";",a,i,y-2,p),p);break;case 59:D+=";";default:if(To(P=Ox(D,t,i,m,g,o,f,A,V=[],M=[],y,l),l),R===123)if(g===0)Wc(D,t,P,P,V,l,y,f,M);else switch(x===99&&wt(D,3)===110?100:x){case 100:case 108:case 109:case 115:Wc(e,P,P,a&&To(Ox(e,P,P,0,0,o,f,A,o,V=[],y,M),M),o,M,y,f,a?V:M);break;default:Wc(D,P,P,P,[""],M,0,f,M)}}m=g=v=0,j=k=1,A=D="",y=u;break;case 58:y=1+Xn(D),v=S;default:if(j<1){if(R==123)--j;else if(R==125&&j++==0&&aM()==125)continue}switch(D+=sg(R),R*j){case 38:k=g>0?1:(D+="\f",-1);break;case 44:f[m++]=(Xn(D)-1)*k,k=1;break;case 64:Pa()===45&&(D+=Bp(On())),x=Pa(),g=y=Xn(A=D+=uM(Qc())),R++;break;case 45:S===45&&Xn(D)==2&&(j=0)}}return l}function Ox(e,t,i,a,o,l,u,f,p,m,g,y){for(var x=o-1,v=o===0?l:[""],S=W4(v),j=0,C=0,k=0;j<a;++j)for(var R=0,A=Qr(e,x+1,x=X4(C=u[j])),V=e;R<S;++R)(V=Q4(C>0?v[R]+" "+A:ve(A,/&\f/g,v[R])))&&(p[k++]=V);return Iu(e,t,i,o===0?Gu:f,p,m,g,y)}function fM(e,t,i,a){return Iu(e,t,i,K4,sg(iM()),Qr(e,2,-2),0,a)}function Lx(e,t,i,a,o){return Iu(e,t,i,rg,Qr(e,0,a),Qr(e,a+1,-1),a,o)}function J4(e,t,i){switch(tM(e,t)){case 5103:return De+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return De+e+e;case 4789:return Lo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return De+e+Lo+e+Ke+e+e;case 5936:switch(wt(e,t+11)){case 114:return De+e+Ke+ve(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return De+e+Ke+ve(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return De+e+Ke+ve(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return De+e+Ke+e+e;case 6165:return De+e+Ke+"flex-"+e+e;case 5187:return De+e+ve(e,/(\w+).+(:[^]+)/,De+"box-$1$2"+Ke+"flex-$1$2")+e;case 5443:return De+e+Ke+"flex-item-"+ve(e,/flex-|-self/g,"")+(wi(e,/flex-|baseline/)?"":Ke+"grid-row-"+ve(e,/flex-|-self/g,""))+e;case 4675:return De+e+Ke+"flex-line-pack"+ve(e,/align-content|flex-|-self/g,"")+e;case 5548:return De+e+Ke+ve(e,"shrink","negative")+e;case 5292:return De+e+Ke+ve(e,"basis","preferred-size")+e;case 6060:return De+"box-"+ve(e,"-grow","")+De+e+Ke+ve(e,"grow","positive")+e;case 4554:return De+ve(e,/([^-])(transform)/g,"$1"+De+"$2")+e;case 6187:return ve(ve(ve(e,/(zoom-|grab)/,De+"$1"),/(image-set)/,De+"$1"),e,"")+e;case 5495:case 3959:return ve(e,/(image-set\([^]*)/,De+"$1$`$1");case 4968:return ve(ve(e,/(.+:)(flex-)?(.*)/,De+"box-pack:$3"+Ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+De+e+e;case 4200:if(!wi(e,/flex-|baseline/))return Ke+"grid-column-align"+Qr(e,t)+e;break;case 2592:case 3360:return Ke+ve(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(a,o){return t=o,wi(a.props,/grid-\w+-end/)})?~Xc(e+(i=i[t].value),"span",0)?e:Ke+ve(e,"-start","")+e+Ke+"grid-row-span:"+(~Xc(i,"span",0)?wi(i,/\d+/):+wi(i,/\d+/)-+wi(e,/\d+/))+";":Ke+ve(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(a){return wi(a.props,/grid-\w+-start/)})?e:Ke+ve(ve(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ve(e,/(.+)-inline(.+)/,De+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xn(e)-1-t>6)switch(wt(e,t+1)){case 109:if(wt(e,t+4)!==45)break;case 102:return ve(e,/(.+:)(.+)-([^]+)/,"$1"+De+"$2-$3$1"+Lo+(wt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Xc(e,"stretch",0)?J4(ve(e,"stretch","fill-available"),t,i)+e:e}break;case 5152:case 5920:return ve(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,o,l,u,f,p,m){return Ke+o+":"+l+m+(u?Ke+o+"-span:"+(f?p:+p-+l)+m:"")+e});case 4949:if(wt(e,t+6)===121)return ve(e,":",":"+De)+e;break;case 6444:switch(wt(e,wt(e,14)===45?18:11)){case 120:return ve(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+De+(wt(e,14)===45?"inline-":"")+"box$3$1"+De+"$2$3$1"+Ke+"$2box$3")+e;case 100:return ve(e,":",":"+Ke)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ve(e,"scroll-","scroll-snap-")+e}return e}function vu(e,t){for(var i="",a=0;a<e.length;a++)i+=t(e[a],a,e,t)||"";return i}function pM(e,t,i,a){switch(e.type){case eM:if(e.children.length)break;case JC:case rg:return e.return=e.return||e.value;case K4:return"";case Y4:return e.return=e.value+"{"+vu(e.children,a)+"}";case Gu:if(!Xn(e.value=e.props.join(",")))return""}return Xn(i=vu(e.children,a))?e.return=e.value+"{"+i+"}":""}function hM(e){var t=W4(e);return function(i,a,o,l){for(var u="",f=0;f<t;f++)u+=e[f](i,a,o,l)||"";return u}}function mM(e){return function(t){t.root||(t=t.return)&&e(t)}}function gM(e,t,i,a){if(e.length>-1&&!e.return)switch(e.type){case rg:e.return=J4(e.value,e.length,i);return;case Y4:return vu([ea(e,{value:ve(e.value,"@","@"+De)})],a);case Gu:if(e.length)return nM(i=e.props,function(o){switch(wi(o,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Rr(ea(e,{props:[ve(o,/:(read-\w+)/,":"+Lo+"$1")]})),Rr(ea(e,{props:[o]})),$h(e,{props:Rx(i,a)});break;case"::placeholder":Rr(ea(e,{props:[ve(o,/:(plac\w+)/,":"+De+"input-$1")]})),Rr(ea(e,{props:[ve(o,/:(plac\w+)/,":"+Lo+"$1")]})),Rr(ea(e,{props:[ve(o,/:(plac\w+)/,Ke+"input-$1")]})),Rr(ea(e,{props:[o]})),$h(e,{props:Rx(i,a)});break}return""})}}var bM={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},sn={},Zr=typeof process<"u"&&sn!==void 0&&(sn.REACT_APP_SC_ATTR||sn.SC_ATTR)||"data-styled",ew="active",tw="data-styled-version",qu="6.1.19",og=`/*!sc*/
`,wu=typeof window<"u"&&typeof document<"u",yM=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&sn!==void 0&&sn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&sn.REACT_APP_SC_DISABLE_SPEEDY!==""?sn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&sn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&sn!==void 0&&sn.SC_DISABLE_SPEEDY!==void 0&&sn.SC_DISABLE_SPEEDY!==""&&sn.SC_DISABLE_SPEEDY!=="false"&&sn.SC_DISABLE_SPEEDY),Fu=Object.freeze([]),Jr=Object.freeze({});function xM(e,t,i){return i===void 0&&(i=Jr),e.theme!==i.theme&&e.theme||t||i.theme}var nw=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),vM=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wM=/(^-|-$)/g;function Dx(e){return e.replace(vM,"-").replace(wM,"")}var SM=/(a)(d)/gi,Mc=52,Px=function(e){return String.fromCharCode(e+(e>25?39:97))};function Kh(e){var t,i="";for(t=Math.abs(e);t>Mc;t=t/Mc|0)i=Px(t%Mc)+i;return(Px(t%Mc)+i).replace(SM,"$1-$2")}var _p,iw=5381,Hr=function(e,t){for(var i=t.length;i;)e=33*e^t.charCodeAt(--i);return e},aw=function(e){return Hr(iw,e)};function rw(e){return Kh(aw(e)>>>0)}function TM(e){return e.displayName||e.name||"Component"}function Hp(e){return typeof e=="string"&&!0}var sw=typeof Symbol=="function"&&Symbol.for,ow=sw?Symbol.for("react.memo"):60115,jM=sw?Symbol.for("react.forward_ref"):60112,kM={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},EM={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},lw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},AM=((_p={})[jM]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_p[ow]=lw,_p);function Nx(e){return("type"in(t=e)&&t.type.$$typeof)===ow?lw:"$$typeof"in e?AM[e.$$typeof]:kM;var t}var CM=Object.defineProperty,MM=Object.getOwnPropertyNames,Vx=Object.getOwnPropertySymbols,zM=Object.getOwnPropertyDescriptor,RM=Object.getPrototypeOf,Bx=Object.prototype;function cw(e,t,i){if(typeof t!="string"){if(Bx){var a=RM(t);a&&a!==Bx&&cw(e,a,i)}var o=MM(t);Vx&&(o=o.concat(Vx(t)));for(var l=Nx(e),u=Nx(t),f=0;f<o.length;++f){var p=o[f];if(!(p in EM||i&&i[p]||u&&p in u||l&&p in l)){var m=zM(t,p);try{CM(e,p,m)}catch{}}}}return e}function es(e){return typeof e=="function"}function lg(e){return typeof e=="object"&&"styledComponentId"in e}function Ra(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Yh(e,t){if(e.length===0)return"";for(var i=e[0],a=1;a<e.length;a++)i+=e[a];return i}function Qo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xh(e,t,i){if(i===void 0&&(i=!1),!i&&!Qo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)e[a]=Xh(e[a],t[a]);else if(Qo(t))for(var a in t)e[a]=Xh(e[a],t[a]);return e}function cg(e,t){Object.defineProperty(e,"toString",{value:t})}function sl(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var OM=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var i=0,a=0;a<t;a++)i+=this.groupSizes[a];return i},e.prototype.insertRules=function(t,i){if(t>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,l=o;t>=l;)if((l<<=1)<0)throw sl(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(a),this.length=l;for(var u=o;u<l;u++)this.groupSizes[u]=0}for(var f=this.indexOfGroup(t+1),p=(u=0,i.length);u<p;u++)this.tag.insertRule(f,i[u])&&(this.groupSizes[t]++,f++)},e.prototype.clearGroup=function(t){if(t<this.length){var i=this.groupSizes[t],a=this.indexOfGroup(t),o=a+i;this.groupSizes[t]=0;for(var l=a;l<o;l++)this.tag.deleteRule(a)}},e.prototype.getGroup=function(t){var i="";if(t>=this.length||this.groupSizes[t]===0)return i;for(var a=this.groupSizes[t],o=this.indexOfGroup(t),l=o+a,u=o;u<l;u++)i+="".concat(this.tag.getRule(u)).concat(og);return i},e}(),Zc=new Map,Su=new Map,Jc=1,zc=function(e){if(Zc.has(e))return Zc.get(e);for(;Su.has(Jc);)Jc++;var t=Jc++;return Zc.set(e,t),Su.set(t,e),t},LM=function(e,t){Jc=t+1,Zc.set(e,t),Su.set(t,e)},DM="style[".concat(Zr,"][").concat(tw,'="').concat(qu,'"]'),PM=new RegExp("^".concat(Zr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),NM=function(e,t,i){for(var a,o=i.split(","),l=0,u=o.length;l<u;l++)(a=o[l])&&e.registerName(t,a)},VM=function(e,t){for(var i,a=((i=t.textContent)!==null&&i!==void 0?i:"").split(og),o=[],l=0,u=a.length;l<u;l++){var f=a[l].trim();if(f){var p=f.match(PM);if(p){var m=0|parseInt(p[1],10),g=p[2];m!==0&&(LM(g,m),NM(e,g,p[3]),e.getTag().insertRules(m,o)),o.length=0}else o.push(f)}}},_x=function(e){for(var t=document.querySelectorAll(DM),i=0,a=t.length;i<a;i++){var o=t[i];o&&o.getAttribute(Zr)!==ew&&(VM(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function BM(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var uw=function(e){var t=document.head,i=e||t,a=document.createElement("style"),o=function(f){var p=Array.from(f.querySelectorAll("style[".concat(Zr,"]")));return p[p.length-1]}(i),l=o!==void 0?o.nextSibling:null;a.setAttribute(Zr,ew),a.setAttribute(tw,qu);var u=BM();return u&&a.setAttribute("nonce",u),i.insertBefore(a,l),a},_M=function(){function e(t){this.element=uw(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,o=0,l=a.length;o<l;o++){var u=a[o];if(u.ownerNode===i)return u}throw sl(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,i){try{return this.sheet.insertRule(i,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var i=this.sheet.cssRules[t];return i&&i.cssText?i.cssText:""},e}(),HM=function(){function e(t){this.element=uw(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,i){if(t<=this.length&&t>=0){var a=document.createTextNode(i);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),GM=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,i){return t<=this.length&&(this.rules.splice(t,0,i),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Hx=wu,UM={isServer:!wu,useCSSOMInjection:!yM},dw=function(){function e(t,i,a){t===void 0&&(t=Jr),i===void 0&&(i={});var o=this;this.options=Ft(Ft({},UM),t),this.gs=i,this.names=new Map(a),this.server=!!t.isServer,!this.server&&wu&&Hx&&(Hx=!1,_x(this)),cg(this,function(){return function(l){for(var u=l.getTag(),f=u.length,p="",m=function(y){var x=function(k){return Su.get(k)}(y);if(x===void 0)return"continue";var v=l.names.get(x),S=u.getGroup(y);if(v===void 0||!v.size||S.length===0)return"continue";var j="".concat(Zr,".g").concat(y,'[id="').concat(x,'"]'),C="";v!==void 0&&v.forEach(function(k){k.length>0&&(C+="".concat(k,","))}),p+="".concat(S).concat(j,'{content:"').concat(C,'"}').concat(og)},g=0;g<f;g++)m(g);return p}(o)})}return e.registerId=function(t){return zc(t)},e.prototype.rehydrate=function(){!this.server&&wu&&_x(this)},e.prototype.reconstructWithOptions=function(t,i){return i===void 0&&(i=!0),new e(Ft(Ft({},this.options),t),this.gs,i&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(i){var a=i.useCSSOMInjection,o=i.target;return i.isServer?new GM(o):a?new _M(o):new HM(o)}(this.options),new OM(t)));var t},e.prototype.hasNameForId=function(t,i){return this.names.has(t)&&this.names.get(t).has(i)},e.prototype.registerName=function(t,i){if(zc(t),this.names.has(t))this.names.get(t).add(i);else{var a=new Set;a.add(i),this.names.set(t,a)}},e.prototype.insertRules=function(t,i,a){this.registerName(t,i),this.getTag().insertRules(zc(t),a)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(zc(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),IM=/&/g,$M=/^\s*\/\/.*$/gm;function fw(e,t){return e.map(function(i){return i.type==="rule"&&(i.value="".concat(t," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(t," ")),i.props=i.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=fw(i.children,t)),i})}function qM(e){var t,i,a,o=Jr,l=o.options,u=l===void 0?Jr:l,f=o.plugins,p=f===void 0?Fu:f,m=function(x,v,S){return S.startsWith(i)&&S.endsWith(i)&&S.replaceAll(i,"").length>0?".".concat(t):x},g=p.slice();g.push(function(x){x.type===Gu&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(IM,i).replace(a,m))}),u.prefix&&g.push(gM),g.push(pM);var y=function(x,v,S,j){v===void 0&&(v=""),S===void 0&&(S=""),j===void 0&&(j="&"),t=j,i=v,a=new RegExp("\\".concat(i,"\\b"),"g");var C=x.replace($M,""),k=dM(S||v?"".concat(S," ").concat(v," { ").concat(C," }"):C);u.namespace&&(k=fw(k,u.namespace));var R=[];return vu(k,hM(g.concat(mM(function(A){return R.push(A)})))),R};return y.hash=p.length?p.reduce(function(x,v){return v.name||sl(15),Hr(x,v.name)},iw).toString():"",y}var FM=new dw,Qh=qM(),pw=Ae.createContext({shouldForwardProp:void 0,styleSheet:FM,stylis:Qh});pw.Consumer;Ae.createContext(void 0);function Gx(){return E.useContext(pw)}var hw=function(){function e(t,i){var a=this;this.inject=function(o,l){l===void 0&&(l=Qh);var u=a.name+l.hash;o.hasNameForId(a.id,u)||o.insertRules(a.id,u,l(a.rules,u,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=i,cg(this,function(){throw sl(12,String(a.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Qh),this.name+t.hash},e}(),KM=function(e){return e>="A"&&e<="Z"};function Ux(e){for(var t="",i=0;i<e.length;i++){var a=e[i];if(i===1&&a==="-"&&e[0]==="-")return e;KM(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var mw=function(e){return e==null||e===!1||e===""},gw=function(e){var t,i,a=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!mw(l)&&(Array.isArray(l)&&l.isCss||es(l)?a.push("".concat(Ux(o),":"),l,";"):Qo(l)?a.push.apply(a,Xo(Xo(["".concat(o," {")],gw(l),!1),["}"],!1)):a.push("".concat(Ux(o),": ").concat((t=o,(i=l)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||t in bM||t.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return a};function Na(e,t,i,a){if(mw(e))return[];if(lg(e))return[".".concat(e.styledComponentId)];if(es(e)){if(!es(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var o=e(t);return Na(o,t,i,a)}var l;return e instanceof hw?i?(e.inject(i,a),[e.getName(a)]):[e]:Qo(e)?gw(e):Array.isArray(e)?Array.prototype.concat.apply(Fu,e.map(function(u){return Na(u,t,i,a)})):[e.toString()]}function YM(e){for(var t=0;t<e.length;t+=1){var i=e[t];if(es(i)&&!lg(i))return!1}return!0}var XM=aw(qu),QM=function(){function e(t,i,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&YM(t),this.componentId=i,this.baseHash=Hr(XM,i),this.baseStyle=a,dw.registerId(i)}return e.prototype.generateAndInjectStyles=function(t,i,a){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,i,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))o=Ra(o,this.staticRulesId);else{var l=Yh(Na(this.rules,t,i,a)),u=Kh(Hr(this.baseHash,l)>>>0);if(!i.hasNameForId(this.componentId,u)){var f=a(l,".".concat(u),void 0,this.componentId);i.insertRules(this.componentId,u,f)}o=Ra(o,u),this.staticRulesId=u}else{for(var p=Hr(this.baseHash,a.hash),m="",g=0;g<this.rules.length;g++){var y=this.rules[g];if(typeof y=="string")m+=y;else if(y){var x=Yh(Na(y,t,i,a));p=Hr(p,x+g),m+=x}}if(m){var v=Kh(p>>>0);i.hasNameForId(this.componentId,v)||i.insertRules(this.componentId,v,a(m,".".concat(v),void 0,this.componentId)),o=Ra(o,v)}}return o},e}(),bw=Ae.createContext(void 0);bw.Consumer;var Gp={};function WM(e,t,i){var a=lg(e),o=e,l=!Hp(e),u=t.attrs,f=u===void 0?Fu:u,p=t.componentId,m=p===void 0?function(V,M){var P=typeof V!="string"?"sc":Dx(V);Gp[P]=(Gp[P]||0)+1;var D="".concat(P,"-").concat(rw(qu+P+Gp[P]));return M?"".concat(M,"-").concat(D):D}(t.displayName,t.parentComponentId):p,g=t.displayName,y=g===void 0?function(V){return Hp(V)?"styled.".concat(V):"Styled(".concat(TM(V),")")}(e):g,x=t.displayName&&t.componentId?"".concat(Dx(t.displayName),"-").concat(t.componentId):t.componentId||m,v=a&&o.attrs?o.attrs.concat(f).filter(Boolean):f,S=t.shouldForwardProp;if(a&&o.shouldForwardProp){var j=o.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;S=function(V,M){return j(V,M)&&C(V,M)}}else S=j}var k=new QM(i,x,a?o.componentStyle:void 0);function R(V,M){return function(P,D,U){var G=P.attrs,Y=P.componentStyle,Z=P.defaultProps,ne=P.foldedComponentIds,le=P.styledComponentId,ce=P.target,ue=Ae.useContext(bw),H=Gx(),L=P.shouldForwardProp||H.shouldForwardProp,B=xM(D,ue,Z)||Jr,Q=function(ye,de,pt){for(var Oe,Ct=Ft(Ft({},de),{className:void 0,theme:pt}),oa=0;oa<ye.length;oa+=1){var ai=es(Oe=ye[oa])?Oe(Ct):Oe;for(var fn in ai)Ct[fn]=fn==="className"?Ra(Ct[fn],ai[fn]):fn==="style"?Ft(Ft({},Ct[fn]),ai[fn]):ai[fn]}return de.className&&(Ct.className=Ra(Ct.className,de.className)),Ct}(G,D,B),z=Q.as||ce,X={};for(var te in Q)Q[te]===void 0||te[0]==="$"||te==="as"||te==="theme"&&Q.theme===B||(te==="forwardedAs"?X.as=Q.forwardedAs:L&&!L(te,z)||(X[te]=Q[te]));var ie=function(ye,de){var pt=Gx(),Oe=ye.generateAndInjectStyles(de,pt.styleSheet,pt.stylis);return Oe}(Y,Q),se=Ra(ne,le);return ie&&(se+=" "+ie),Q.className&&(se+=" "+Q.className),X[Hp(z)&&!nw.has(z)?"class":"className"]=se,U&&(X.ref=U),E.createElement(z,X)}(A,V,M)}R.displayName=y;var A=Ae.forwardRef(R);return A.attrs=v,A.componentStyle=k,A.displayName=y,A.shouldForwardProp=S,A.foldedComponentIds=a?Ra(o.foldedComponentIds,o.styledComponentId):"",A.styledComponentId=x,A.target=a?o.target:e,Object.defineProperty(A,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(V){this._foldedDefaultProps=a?function(M){for(var P=[],D=1;D<arguments.length;D++)P[D-1]=arguments[D];for(var U=0,G=P;U<G.length;U++)Xh(M,G[U],!0);return M}({},o.defaultProps,V):V}}),cg(A,function(){return".".concat(A.styledComponentId)}),l&&cw(A,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),A}function Ix(e,t){for(var i=[e[0]],a=0,o=t.length;a<o;a+=1)i.push(t[a],e[a+1]);return i}var $x=function(e){return Object.assign(e,{isCss:!0})};function yw(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(es(e)||Qo(e))return $x(Na(Ix(Fu,Xo([e],t,!0))));var a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?Na(a):$x(Na(Ix(a,t)))}function Wh(e,t,i){if(i===void 0&&(i=Jr),!t)throw sl(1,t);var a=function(o){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return e(t,i,yw.apply(void 0,Xo([o],l,!1)))};return a.attrs=function(o){return Wh(e,t,Ft(Ft({},i),{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return Wh(e,t,Ft(Ft({},i),o))},a}var xw=function(e){return Wh(WM,e)},q=xw;nw.forEach(function(e){q[e]=xw(e)});function Ei(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var a=Yh(yw.apply(void 0,Xo([e],t,!1))),o=rw(a);return new hw(o,a)}const ZM=q.div`
  display: inline-flex;
  align-items: center;

  @media (min-width: 1024px) {
    display: none;
  }
`,JM=q.button`
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
`,Up=q(ae.span)`
  width: 22px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  display: block;
`,ez=q(ae.div)`
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
`,tz=q.div`
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
`,nz=q.span`
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
`,iz=q.button`
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
`,Or=q(ti)`
  color: #fff;
  text-decoration: none;
  font-size: clamp(30px, 8vw, 48px);
  font-weight: 700;
  line-height: 1.06;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 6px 0;
`,mo=q.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.16);
  margin: 2px 0 6px;
`,az=Ei`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,rz=Ei`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,sz=q.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${({$menuOpen:e})=>e?2e3:120};
  backdrop-filter: blur(10px);
  background: rgba(7, 9, 16, 0.78);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,oz=q.div`
  width: 100%;
  max-width: 1560px;
  margin: 0 auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
`,lz=q.div`
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
`,cz=q(ti)`
  display: inline-flex;
  align-items: center;
  line-height: 0;
  text-decoration: none;
`,uz=q.span`
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
  animation: ${az} 4.8s ease-in-out infinite;
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
`,dz=q.nav`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: 1023px) {
    display: none;
  }
`,go=q(ti)`
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
`,fz=q.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
  position: relative;
  z-index: 1200;
`,pz=q(ti)`
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
    animation: ${rz} 2.2s linear infinite;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`,hz=q.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`,mz=q.button`
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
`,qx=q.span`
  font-size: 18px;
  line-height: 1;
`,gz=q.div`
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
`,bz=q.button`
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
`,yz={open:{rotate:45,y:8},closed:{rotate:0,y:0}},xz={open:{opacity:0},closed:{opacity:1}},vz={open:{rotate:-45,y:-8},closed:{rotate:0,y:0}},wz={open:{opacity:1},closed:{opacity:0}},Sz={de:"Deutsch",uk:"Українська",tr:"Türkçe",ar:"العربية",pl:"Polski",ku:"Kurmancî",fa:"فارسی",it:"Italiano",es:"Español",el:"Ελληνικά",ro:"Română",bg:"Български"},Fx={de:"DE",uk:"UA",tr:"TR",ar:"SA",pl:"PL",ku:"KU",fa:"IR",it:"IT",es:"ES",el:"GR",ro:"RO",bg:"BG"},Tz=()=>{const[e,t]=E.useState(!1),[i,a]=E.useState(!1),{language:o,setLanguage:l}=ZC(),{t:u}=$e(),f=E.useRef(null);E.useEffect(()=>{const g=y=>{f.current&&(f.current.contains(y.target)||a(!1))};return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[]),E.useEffect(()=>(e?(document.body.classList.add("modal-open"),a(!1)):document.body.classList.remove("modal-open"),()=>document.body.classList.remove("modal-open")),[e]);const p=()=>t(!1),m=g=>{l(g),a(!1)};return d.jsxs(sz,{$menuOpen:e,children:[d.jsx(oz,{children:d.jsxs(lz,{children:[d.jsx(cz,{to:"/",onClick:p,children:d.jsx(ae.div,{initial:{opacity:0,y:-12,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.82,ease:Pu},children:d.jsx(uz,{children:"<VS/>"})})}),d.jsxs(dz,{children:[d.jsxs(go,{to:"/services",children:[d.jsx(ix,{})," ",u("header.services")]}),d.jsxs(go,{to:"/preise",children:[d.jsx(fu,{})," ",u("header.preise")]}),d.jsxs(go,{to:"/referenzen",children:[d.jsx(ax,{})," ",u("header.referenzen")]}),d.jsxs(go,{to:"/ueber-uns",children:[d.jsx(rx,{})," ",u("header.ueberUns")]}),d.jsxs(go,{to:"/kontakt",children:[d.jsx(Yr,{})," ",u("header.kontakt")]})]}),d.jsxs(fz,{children:[d.jsxs(pz,{to:"/kontakt",children:[d.jsx(Pn,{})," ",u("common.projectRequest")]}),e?null:d.jsxs(hz,{ref:f,children:[d.jsx(mz,{type:"button","aria-expanded":i,"aria-label":"Language switcher",onClick:()=>a(g=>!g),children:d.jsx(qx,{children:Fx[o]})}),i?d.jsx(gz,{children:ag.map(g=>d.jsxs(bz,{type:"button",$active:o===g,onClick:()=>m(g),children:[d.jsx(qx,{children:Fx[g]}),d.jsx("span",{children:Sz[g]})]},g))}):null]}),d.jsx(ZM,{children:d.jsxs(JM,{onClick:()=>t(g=>!g),"aria-label":e?"Close menu":"Open menu",children:[d.jsx(Up,{animate:e?"open":"closed",variants:yz}),d.jsx(Up,{animate:e?"open":"closed",variants:xz}),d.jsx(Up,{animate:e?"open":"closed",variants:vz})]})})]})]})}),typeof document<"u"?oT.createPortal(d.jsx(V5,{children:e?d.jsxs(ez,{initial:"closed",animate:"open",exit:"closed",variants:wz,transition:{duration:.28,ease:Mm},children:[d.jsxs(tz,{children:[d.jsx(nz,{children:"<VS/>"}),d.jsx(iz,{type:"button","aria-label":"Close menu",onClick:p,children:d.jsx(DA,{})})]}),d.jsxs(Or,{to:"/services",onClick:p,children:[d.jsx(ix,{})," ",u("header.services")]}),d.jsx(mo,{}),d.jsxs(Or,{to:"/preise",onClick:p,children:[d.jsx(fu,{})," ",u("header.preise")]}),d.jsx(mo,{}),d.jsxs(Or,{to:"/referenzen",onClick:p,children:[d.jsx(ax,{})," ",u("header.referenzen")]}),d.jsx(mo,{}),d.jsxs(Or,{to:"/ueber-uns",onClick:p,children:[d.jsx(rx,{})," ",u("header.ueberUns")]}),d.jsx(mo,{}),d.jsxs(Or,{to:"/kontakt",onClick:p,children:[d.jsx(Yr,{})," ",u("header.kontakt")]}),d.jsx(mo,{}),d.jsxs(Or,{to:"/kontakt",onClick:p,children:[d.jsx(Pn,{})," ",u("common.projectRequest")]})]}):null}),document.body):null]})},jz=q.footer`
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding: 30px 0 44px;
  background: rgba(8, 10, 18, 0.9);
`,kz=q.div`
  width: 100%;
  max-width: 1560px;
  margin: 0 auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
`,Ez=q.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,Az=q.div`
  p {
    margin: 0;
  }
`,Cz=q.p`
  color: rgba(255, 255, 255, 0.72) !important;
  margin-top: 4px !important;
`,Mz=q.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 14px;
`,vw=`
  color: rgba(255, 255, 255, 0.84);
  text-decoration: none;
  transition: transform var(--dur-fast) var(--ease-smooth), color var(--dur-fast) var(--ease-smooth);

  &:hover,
  &:focus-visible {
    color: #ffd08a;
    transform: translateY(-1px);
  }
`,bo=q(ti)`
  ${vw}
`,zz=q.button`
  ${vw}
  border: 0;
  background: transparent;
  padding: 0;
  font: inherit;
  cursor: pointer;
`,Rz=()=>{const{t:e}=$e(),t=()=>{window.dispatchEvent(new Event("open-cookie-settings"))};return d.jsx(jz,{children:d.jsx(kz,{children:d.jsxs(Ez,{children:[d.jsxs(Az,{children:[d.jsx("p",{children:e("footer.tagline")}),d.jsx(Cz,{children:"kontakt@vs-web-studio.de · +49 30 1234567"})]}),d.jsxs(Mz,{children:[d.jsx(bo,{to:"/impressum",children:e("footer.impressum")}),d.jsx(bo,{to:"/datenschutz",children:e("footer.datenschutz")}),d.jsx(bo,{to:"/agb",children:e("footer.agb")}),d.jsx(bo,{to:"/cookies",children:e("footer.cookies")}),d.jsx(zz,{type:"button",onClick:t,children:e("footer.cookieSettings")}),d.jsx(bo,{to:"/blog",children:e("footer.blog")})]})]})})})},Ip="cookie_consent_v2",Oz=()=>{const{t:e}=$e(),[t,i]=E.useState(!1),[a,o]=E.useState(!1),[l,u]=E.useState(!1),[f,p]=E.useState(!1),[m,g]=E.useState(!1);E.useEffect(()=>{const v=window.localStorage.getItem(Ip);if(v)try{const S=JSON.parse(v);p(!!S.statistics),g(!!S.marketing)}catch{}o(!v),i(!0)},[]),E.useEffect(()=>{const v=()=>{const S=window.localStorage.getItem(Ip);if(S)try{const j=JSON.parse(S);p(!!j.statistics),g(!!j.marketing)}catch{}o(!0),u(!0)};return window.addEventListener("open-cookie-settings",v),()=>window.removeEventListener("open-cookie-settings",v)},[]);const y=E.useMemo(()=>({essential:!0,statistics:f,marketing:m}),[f,m]),x=v=>{window.localStorage.setItem(Ip,JSON.stringify(v)),o(!1),u(!1)};return!t||!a?null:d.jsxs(d.Fragment,{children:[d.jsxs(ae.div,{className:"cookie-banner",initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.5},role:"dialog","aria-live":"polite","aria-label":e("cookie.aria"),children:[d.jsxs("div",{className:"cookie-text",children:[e("cookie.bannerText")," ",d.jsx("a",{href:"/datenschutz",children:e("footer.datenschutz")}),","," ",d.jsx("a",{href:"/cookies",children:e("footer.cookies")}),","," ",d.jsx("a",{href:"/impressum",children:e("footer.impressum")}),"."]}),d.jsxs("div",{className:"cookie-actions",children:[d.jsx("button",{className:"btn btn-secondary cookie-btn",onClick:()=>x({essential:!0,statistics:!1,marketing:!1}),children:e("cookie.onlyEssential")}),d.jsx("button",{className:"btn btn-secondary cookie-btn",onClick:()=>u(!0),children:e("cookie.settings")}),d.jsx("button",{className:"btn btn-primary cookie-btn",onClick:()=>x({essential:!0,statistics:!0,marketing:!0}),children:e("cookie.acceptAll")})]})]}),l?d.jsx(ae.div,{className:"cookie-modal-backdrop",initial:{opacity:0},animate:{opacity:1},children:d.jsxs(ae.div,{className:"cookie-modal",initial:{opacity:0,y:16},animate:{opacity:1,y:0},children:[d.jsx("h3",{children:e("cookie.modalTitle")}),d.jsx("p",{className:"muted",children:e("cookie.modalText")}),d.jsxs("label",{className:"cookie-option",children:[d.jsx("input",{type:"checkbox",checked:!0,disabled:!0}),d.jsx("span",{children:e("cookie.essential")})]}),d.jsxs("label",{className:"cookie-option",children:[d.jsx("input",{type:"checkbox",checked:f,onChange:v=>p(v.target.checked)}),d.jsx("span",{children:e("cookie.statistics")})]}),d.jsxs("label",{className:"cookie-option",children:[d.jsx("input",{type:"checkbox",checked:m,onChange:v=>g(v.target.checked)}),d.jsx("span",{children:e("cookie.marketing")})]}),d.jsxs("div",{className:"cookie-actions",children:[d.jsx("button",{className:"btn btn-secondary cookie-btn",onClick:()=>u(!1),children:e("common.cancel")}),d.jsx("button",{className:"btn btn-primary cookie-btn",onClick:()=>x(y),children:e("cookie.saveSelection")})]})]})}):null]})},Lz=q.div`
  min-height: 100vh;
  background:
    radial-gradient(1200px 500px at 12% -10%, rgba(255, 160, 70, 0.2), transparent 60%),
    radial-gradient(900px 420px at 88% 10%, rgba(70, 127, 255, 0.22), transparent 60%),
    linear-gradient(180deg, #070812 0%, #0e1220 100%);
`,Dz=q(ae.main)`
  padding-top: 76px;

  @media (max-width: 767px) {
    padding-top: 66px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding-top: 72px;
  }
`,Pz=()=>{const e=ii();return E.useEffect(()=>{window.scrollTo({top:0,behavior:"auto"})},[e.pathname]),d.jsxs(Lz,{children:[d.jsx(Tz,{}),d.jsx(V5,{mode:"wait",children:d.jsx(Dz,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.32,ease:kn},children:d.jsx(E8,{})},e.pathname)}),d.jsx(Rz,{}),d.jsx(Oz,{})]})};function Nz(e=!1){E.useEffect(()=>{if(e)return;let t=0,i=window.innerWidth*.5,a=window.innerHeight*.3;const o=()=>{document.documentElement.style.setProperty("--spotlight-x",`${i}px`),document.documentElement.style.setProperty("--spotlight-y",`${a}px`),t=0},l=u=>{i=u.clientX,a=u.clientY,t||(t=window.requestAnimationFrame(o))};return window.addEventListener("pointermove",l,{passive:!0}),o(),()=>{window.removeEventListener("pointermove",l),t&&window.cancelAnimationFrame(t)}},[e])}function Vz(){const[e,t]=E.useState(!1);return E.useEffect(()=>{var o;const i=window.matchMedia("(prefers-reduced-motion: reduce)"),a=()=>t(i.matches);return t(i.matches),(o=i.addEventListener)==null||o.call(i,"change",a),()=>{var l;return(l=i.removeEventListener)==null?void 0:l.call(i,"change",a)}},[]),e}const $n=({label:e,value:t,options:i,onChange:a})=>d.jsxs("div",{className:"seg",children:[d.jsx("div",{className:"seg-label",children:e}),d.jsx("div",{className:"seg-row",role:"group","aria-label":e,children:i.map(o=>d.jsxs("button",{type:"button",role:"checkbox","aria-checked":t.includes(o.value),className:`seg-btn ${t.includes(o.value)?"active":""}`,onClick:()=>a(t.includes(o.value)?t.filter(l=>l!==o.value):[...t,o.value]),children:[d.jsx("span",{className:"seg-title",children:o.title}),o.hint?d.jsx("span",{className:"seg-hint",children:o.hint}):null]},o.value))})]}),jo="/assets/hero-main-BwizpqXp.webm",Zh="/assets/photo_2025-09-16_22-57-47-BZW9LnVG.jpg",Jh="/assets/photo_2025-09-16_22-58-19-CMYu6dTK.jpg",em="/assets/photo_2025-09-16_22-58-10-Bd-7i7_Y.jpg",tm="/assets/photo_2025-09-16_22-58-06-Byl6jOLf.jpg",Bz="/assets/01-call-Bgwp57KR.webp",_z="/assets/02-prototype-BmhFIUL-.webp",Hz="/assets/03-dev-Vc9Lg5zG.webp",Gz="/assets/04-launch-C8dDkkp8.webp",Uz={hidden:{opacity:0,y:34,scale:.98},show:{opacity:1,y:0,scale:1}},$p=[{step:"01",image:Bz},{step:"02",image:_z},{step:"03",image:Hz},{step:"04",image:Gz}],Iz=[{id:"c1",tags:["React","TypeScript","SEO","GA4"],poster:Zh,video:jo},{id:"c2",tags:["Landing","Ads","Tracking"],poster:Jh,video:jo},{id:"c3",tags:["Forms","Analytics","UX"],poster:em,video:jo},{id:"c4",tags:["Firebase","React","Automation"],poster:tm,video:jo}],$z=["d1","d2","d3","d4"],qn={goal:[{value:"leads",title:"home.configurator.options.goal.leads"},{value:"calls",title:"home.configurator.options.goal.calls"},{value:"booking",title:"home.configurator.options.goal.booking"},{value:"other",title:"home.configurator.options.common.other"}],integrations:[{value:"booking",title:"home.configurator.options.integrations.booking"},{value:"crm",title:"home.configurator.options.integrations.crm"},{value:"chat",title:"home.configurator.options.integrations.chat"},{value:"payments",title:"home.configurator.options.integrations.payments"},{value:"other",title:"home.configurator.options.common.other"}],ads:[{value:"none",title:"home.configurator.options.ads.none"},{value:"meta",title:"home.configurator.options.ads.meta"},{value:"google",title:"home.configurator.options.ads.google"},{value:"other",title:"home.configurator.options.common.other"}],term:[{value:"up-to-7",title:"home.configurator.options.term.up_to_7"},{value:"7-14",title:"home.configurator.options.term.from_7_to_14"},{value:"14-21",title:"home.configurator.options.term.from_14_to_21"},{value:"21-30",title:"home.configurator.options.term.from_21_to_30"},{value:"other",title:"home.configurator.options.common.other"}],content:[{value:"has",title:"home.configurator.options.content.has"},{value:"copy",title:"home.configurator.options.content.copy"},{value:"other",title:"home.configurator.options.common.other"}],languages:[{value:"basic",title:"home.configurator.options.languages.basic"},{value:"multi",title:"home.configurator.options.languages.multi"},{value:"other",title:"home.configurator.options.common.other"}],hosting:[{value:"shared",title:"home.configurator.options.hosting.shared"},{value:"vps",title:"home.configurator.options.hosting.vps"},{value:"managed",title:"home.configurator.options.hosting.managed"},{value:"other",title:"home.configurator.options.common.other"}],domain:[{value:"new-domain",title:"home.configurator.options.domain.new_domain"},{value:"existing-domain",title:"home.configurator.options.domain.existing_domain"},{value:"transfer",title:"home.configurator.options.domain.transfer"},{value:"other",title:"home.configurator.options.common.other"}],pages:[{value:"one",title:"home.configurator.options.pages.one"},{value:"up-to-3",title:"home.configurator.options.pages.up_to_3"},{value:"five-plus",title:"home.configurator.options.pages.five_plus"},{value:"other",title:"home.configurator.options.common.other"}],seo:[{value:"base",title:"home.configurator.options.seo.base"},{value:"extended",title:"home.configurator.options.seo.extended"},{value:"other",title:"home.configurator.options.common.other"}]},qz={leads:576,calls:558,booking:630,other:180},Fz={booking:108,crm:153,chat:81,payments:189,other:45},Kz={none:20,meta:108,google:135,other:25},Yz={"up-to-7":198,"7-14":153,"14-21":81,"21-30":35,other:30},Xz={has:35,copy:117,other:35},Qz={basic:25,multi:135,other:25},Wz={shared:30,vps:85,managed:120,other:30},Zz={"new-domain":25,"existing-domain":20,transfer:45,other:25},Jz={one:70,"up-to-3":117,"five-plus":189,other:70},eR={base:20,extended:126,other:20},tR={leads:576,calls:558,booking:630,other:320},nR={booking:108,crm:153,chat:81,payments:189,other:120},iR={none:20,meta:108,google:135,other:90},aR={"up-to-7":198,"7-14":153,"14-21":81,"21-30":35,other:120},rR={has:35,copy:117,other:90},sR={basic:25,multi:135,other:90},oR={shared:30,vps:85,managed:120,other:90},lR={"new-domain":25,"existing-domain":20,transfer:45,other:90},cR={one:70,"up-to-3":117,"five-plus":189,other:170},uR={base:20,extended:126,other:90},dR=()=>{const{t:e}=$e(),[t,i]=E.useState([]),[a,o]=E.useState([]),[l,u]=E.useState([]),[f,p]=E.useState([]),[m,g]=E.useState([]),[y,x]=E.useState([]),[v,S]=E.useState([]),[j,C]=E.useState([]),[k,R]=E.useState([]),[A,V]=E.useState([]),M=()=>{i([]),o([]),u([]),p([]),g([]),x([]),S([]),C([]),R([]),V([])},P=E.useMemo(()=>({goal:qn.goal.map(G=>({...G,title:e(G.title)})),integrations:qn.integrations.map(G=>({...G,title:e(G.title)})),ads:qn.ads.map(G=>({...G,title:e(G.title)})),term:qn.term.map(G=>({...G,title:e(G.title)})),content:qn.content.map(G=>({...G,title:e(G.title)})),languages:qn.languages.map(G=>({...G,title:e(G.title)})),hosting:qn.hosting.map(G=>({...G,title:e(G.title)})),domain:qn.domain.map(G=>({...G,title:e(G.title)})),pages:qn.pages.map(G=>({...G,title:e(G.title)})),seo:qn.seo.map(G=>({...G,title:e(G.title)}))}),[e]),D=E.useMemo(()=>{if(![t,a,l,f,m,y,v,j,k,A].every(z=>z.length>0))return{isComplete:!1};const Y=(z,X)=>z.reduce((te,ie)=>te+(X[ie]??0),0),Z=(z,X)=>z.map(te=>{var ie;return((ie=X.find(se=>se.value===te))==null?void 0:ie.title)||te}).join(", "),ne=Y(t,qz)+Y(a,Fz)+Y(l,Kz)+Y(f,Yz)+Y(m,Xz)+Y(y,Qz)+Y(v,Wz)+Y(j,Zz)+Y(k,Jz)+Y(A,eR),le=Y(t,tR)+Y(a,nR)+Y(l,iR)+Y(f,aR)+Y(m,rR)+Y(y,sR)+Y(v,oR)+Y(j,lR)+Y(k,cR)+Y(A,uR),ce=y.includes("multi")||k.includes("five-plus")||A.includes("extended")||l.some(z=>z!=="none"&&z!=="other")||a.includes("crm")||a.includes("payments"),ue=le>980||ce?"Business":"Starter",H=ue==="Business"?86:62,L=H*12,B=Math.round(L*.7),Q=[e("home.configurator.bullets.prototype"),e("home.configurator.bullets.goal",{value:Z(t,P.goal)}),e("home.configurator.bullets.integrations",{value:Z(a,P.integrations)}),e("home.configurator.bullets.term",{value:Z(f,P.term)}),e("home.configurator.bullets.hosting",{value:Z(v,P.hosting)}),e("home.configurator.bullets.domain",{value:Z(j,P.domain)}),e("home.configurator.bullets.pages",{value:Z(k,P.pages)}),e("home.configurator.bullets.analytics"),m.includes("copy")?e("home.configurator.bullets.copy_true"):e("home.configurator.bullets.copy_false"),e("home.configurator.bullets.market_note")];return{isComplete:!0,pack:ue,bullets:Q,totalFrom:ne,totalTo:le,supportMonthly:H,supportYearlyRaw:L,supportYearly:B,cta:"/kontakt"}},[l,m,j,t,v,a,y,k,A,e,f,P]),U=E.useMemo(()=>{if(!D.isComplete)return"";const G=(Z,ne)=>Z.map(le=>{var ce;return((ce=ne.find(ue=>ue.value===le))==null?void 0:ce.title)||le}).join(", "),Y=D.totalFrom===D.totalTo?`${D.totalFrom} EUR`:`${D.totalFrom} - ${D.totalTo} EUR`;return[e("home.configurator.brief.title"),e("home.configurator.brief.goal",{value:G(t,P.goal)}),e("home.configurator.brief.integrations",{value:G(a,P.integrations)}),e("home.configurator.brief.ads",{value:G(l,P.ads)}),e("home.configurator.brief.term",{value:G(f,P.term)}),e("home.configurator.brief.content",{value:G(m,P.content)}),e("home.configurator.brief.languages",{value:G(y,P.languages)}),e("home.configurator.brief.hosting",{value:G(v,P.hosting)}),e("home.configurator.brief.domain",{value:G(j,P.domain)}),e("home.configurator.brief.pages",{value:G(k,P.pages)}),e("home.configurator.brief.seo",{value:G(A,P.seo)}),e("home.configurator.brief.launch_price",{value:Y}),e("home.configurator.brief.support_monthly",{value:`${D.supportMonthly} EUR`}),e("home.configurator.brief.support_yearly",{value:`${D.supportYearly} EUR`})].join(`
`)},[l,m,j,t,v,a,y,D,k,A,e,f,P]);return d.jsxs("div",{className:"card configurator-card",children:[d.jsx($n,{label:e("home.configurator.labels.goal"),value:t,options:P.goal,onChange:i}),d.jsx($n,{label:e("home.configurator.labels.integrations"),value:a,options:P.integrations,onChange:o}),d.jsx($n,{label:e("home.configurator.labels.ads"),value:l,options:P.ads,onChange:u}),d.jsx($n,{label:e("home.configurator.labels.term"),value:f,options:P.term,onChange:p}),d.jsx($n,{label:e("home.configurator.labels.content"),value:m,options:P.content,onChange:g}),d.jsx($n,{label:e("home.configurator.labels.languages"),value:y,options:P.languages,onChange:x}),d.jsx($n,{label:e("home.configurator.labels.hosting"),value:v,options:P.hosting,onChange:S}),d.jsx($n,{label:e("home.configurator.labels.domain"),value:j,options:P.domain,onChange:C}),d.jsx($n,{label:e("home.configurator.labels.pages"),value:k,options:P.pages,onChange:R}),d.jsx($n,{label:e("home.configurator.labels.seo"),value:A,options:P.seo,onChange:V}),d.jsxs("div",{className:"offer",children:[d.jsx("button",{type:"button",className:"btn btn-secondary reset-btn",onClick:M,children:e("home.configurator.reset")}),D.isComplete?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"offer-title",children:[e("home.configurator.recommended")," ",d.jsx("strong",{children:D.pack==="Business"?e("home.configurator.pack.business"):e("home.configurator.pack.starter")})]}),d.jsxs("p",{className:"offer-price",children:[e("home.configurator.launchPrice")," ",d.jsx("strong",{children:D.totalFrom===D.totalTo?`${D.totalFrom} EUR`:`${D.totalFrom} - ${D.totalTo} EUR`})]}),d.jsx("ul",{className:"offer-list",children:D.bullets.map(G=>d.jsx("li",{children:G},G))}),d.jsxs("div",{className:"support-grid",children:[d.jsxs("article",{className:"support-card",children:[d.jsx("h3",{children:e("home.configurator.supportMonthly")}),d.jsx("p",{children:d.jsxs("strong",{children:[D.supportMonthly," EUR"]})})]}),d.jsxs("article",{className:"support-card",children:[d.jsx("h3",{children:e("home.configurator.supportYearly")}),d.jsxs("p",{children:[d.jsxs("strong",{children:[D.supportYearly," EUR"]})," ",d.jsxs("span",{className:"support-old",children:[D.supportYearlyRaw," EUR"]})]})]})]}),d.jsx(ti,{to:D.cta,state:{prefillNeed:U},className:"btn btn-primary offer-cta",children:e("home.configurator.cta")})]}):d.jsx("div",{className:"offer-empty",children:e("home.configurator.empty")})]})]})},fR=q.div`
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
`,ft={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.6,ease:kn}}},Rc={hidden:{opacity:0,x:-40},visible:{opacity:1,x:0,transition:{duration:.7,ease:kn}}},Wi={hidden:{opacity:0,x:40},visible:{opacity:1,x:0,transition:{duration:.7,ease:kn}}},Fe={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:.8,ease:kn}}},Lt={hidden:{},visible:{transition:{staggerChildren:.1}}},pR=()=>{const{t:e}=$e();return d.jsx(fR,{children:d.jsxs(ae.section,{className:"section configurator",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.18},variants:ft,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.configurator.title")}),d.jsx("p",{className:"section-description",children:e("home.configurator.desc")})]}),d.jsx(ae.div,{variants:Fe,children:d.jsx(dR,{})})]})})},Ha=({text:e,durationMs:t=6200,storageKey:i="terminal_typed_once"})=>{const[a,o]=E.useState(0),[l,u]=E.useState(!1),f=E.useMemo(()=>{const p=Math.max(e.length,1);return Math.max(24,Math.floor(t/p))},[t,e.length]);return E.useEffect(()=>{if(typeof window>"u")return;if(window.sessionStorage.getItem(i)==="1"){o(e.length),u(!0);return}let m=0;const g=window.setInterval(()=>{m+=1,o(m),m>=e.length&&(window.clearInterval(g),u(!0),window.sessionStorage.setItem(i,"1"))},f);return()=>window.clearInterval(g)},[f,i,e]),d.jsxs("span",{className:"terminal-text","aria-label":e,children:[e.slice(0,a),!l&&d.jsx("span",{className:"terminal-cursor",children:"|"})]})},hR=q.div`
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
`,mR=()=>{const{t:e}=$e();return d.jsx(hR,{children:d.jsxs(ae.section,{id:"faq",className:"section",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.18},variants:ft,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:d.jsx(Ha,{text:e("home.faqTitle"),durationMs:2200,storageKey:"faq_title_v2"})}),d.jsx("p",{className:"section-description",children:e("home.faq.desc")})]}),d.jsxs(ae.div,{className:"faq",variants:Lt,children:[d.jsxs(ae.details,{variants:Fe,children:[d.jsx("summary",{children:e("home.faq.q1")}),d.jsx("div",{className:"faq-answer",children:d.jsx("p",{children:e("home.faq.a1")})})]}),d.jsxs(ae.details,{variants:Fe,children:[d.jsx("summary",{children:e("home.faq.q2")}),d.jsx("div",{className:"faq-answer",children:d.jsx("p",{children:e("home.faq.a2")})})]}),d.jsxs(ae.details,{variants:Fe,children:[d.jsx("summary",{children:e("home.faq.q3")}),d.jsx("div",{className:"faq-answer",children:d.jsx("p",{children:e("home.faq.a3")})})]}),d.jsxs(ae.details,{variants:Fe,children:[d.jsx("summary",{children:e("home.faq.q4")}),d.jsx("div",{className:"faq-answer",children:d.jsx("p",{children:e("home.faq.a4")})})]}),d.jsxs(ae.details,{variants:Fe,children:[d.jsx("summary",{children:e("home.faq.q5")}),d.jsx("div",{className:"faq-answer",children:d.jsx("p",{children:e("home.faq.a5")})})]})]})]})})},gR="/assets/Sub_Zero_Refrigerator_Cinematic_Reveal-BIqjoL6O.mov",bR=q.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
`,yR=q.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.04);
  z-index: 0;
`,xR=q.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgb(0 0 0 / 87%) 0%, rgb(0 0 0 / 48%) 50%, rgba(0, 0, 0, 0.4) 100%);
  z-index: 1;
`,vR=()=>d.jsxs(bR,{children:[d.jsxs(yR,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",poster:"/images/hero-generated.svg",children:[d.jsx("source",{src:jo,type:"video/webm"}),d.jsx("source",{src:gR,type:"video/mp4"})]}),d.jsx(xR,{})]}),wR=q.div`
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
`,SR=({reducedMotion:e})=>{const{t}=$e(),{scrollYProgress:i}=cA(),a=Zy(i,[0,.45],[0,-24]),o=Zy(i,[0,.4],[0,30]),[l,u]=E.useState({x:0,y:0}),f=m=>{if(e)return;const g=m.currentTarget.getBoundingClientRect(),y=(m.clientX-g.left-g.width/2)/12,x=(m.clientY-g.top-g.height/2)/12;u({x:Math.max(-8,Math.min(8,y)),y:Math.max(-8,Math.min(8,x))})},p=()=>u({x:0,y:0});return d.jsx(wR,{children:d.jsxs(ae.section,{className:"hero hero-with-video",initial:"hidden",animate:"show",variants:Uz,transition:{duration:.85,ease:Pu},children:[d.jsx(ae.div,{className:"hero-video-parallax",style:{y:o},children:d.jsx(vR,{})}),d.jsxs(ae.div,{className:"hero-content",style:{y:a},initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.9,ease:kn},children:[d.jsx("h1",{children:d.jsx(Ha,{text:t("home.heroTitle"),durationMs:6200,storageKey:"hero_terminal_once"})}),d.jsx("p",{children:t("home.heroSubtitle")}),d.jsxs("div",{className:"btn-row",children:[d.jsxs(ti,{to:"/kontakt",className:"btn btn-primary btn-magnetic",onMouseMove:f,onMouseLeave:p,style:{transform:`translate(${l.x}px, ${l.y}px)`},children:[d.jsx(Pn,{})," ",t("common.projectRequest")]}),d.jsxs(ti,{to:"/preise",className:"btn btn-secondary",children:[d.jsx(fu,{})," ",t("common.viewPrices")]}),d.jsxs("a",{href:"#faq",className:"btn btn-secondary",children:[d.jsx(Pn,{})," ",t("home.toFaq")]})]})]}),d.jsxs("aside",{className:"hero-bento",children:[d.jsxs("article",{className:"bento-tile",children:[d.jsx("span",{children:t("home.hero.bento.speed.label")}),d.jsx("strong",{children:t("home.hero.bento.speed.value")}),d.jsx(ng,{className:"bento-icon-bg","aria-hidden":"true"})]}),d.jsxs("article",{className:"bento-tile",children:[d.jsx("span",{children:t("home.hero.bento.seo.label")}),d.jsx("strong",{children:t("home.hero.bento.seo.value")}),d.jsx(RA,{className:"bento-icon-bg","aria-hidden":"true"})]}),d.jsxs("article",{className:"bento-tile",children:[d.jsx("span",{children:t("home.hero.bento.leads.label")}),d.jsx("strong",{children:t("home.hero.bento.leads.value")}),d.jsx(SA,{className:"bento-icon-bg","aria-hidden":"true"})]}),d.jsxs("article",{className:"bento-tile",children:[d.jsx("span",{children:t("home.hero.bento.support.label")}),d.jsx("strong",{children:t("home.hero.bento.support.value")}),d.jsx(MA,{className:"bento-icon-bg","aria-hidden":"true"})]})]})]})})},TR=q.div`
  display: grid;
  gap: 16px;
`,jR=q.div`
  display: grid;
  gap: 8px;
`,kR=q.h3`
  font-size: 16px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.88);
`,ER=q.div`
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(10, 14, 26, 0.86);
  padding: 12px;
`,AR=q.div`
  display: flex;
  width: max-content;
  gap: 12px;
`,CR=q.div`
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
`,MR=q.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.18);
`,zR=q.span`
  color: #ffdba2;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,RR=q.span`
  color: #fef6df;
  font-size: 15px;
  font-weight: 700;
`,OR=q.span`
  color: rgba(255, 255, 255, 0.78);
  font-size: 13px;
  line-height: 1.35;
`,LR=[{title:"Trusted Technologies",direction:"left",speed:60,items:[{label:"React",description:"UI",group:"Tech"},{label:"TypeScript",description:"Typing",group:"Tech"},{label:"SEO",description:"Visibility",group:"Growth"},{label:"Analytics",description:"Data",group:"Growth"},{label:"Automation",description:"Ops",group:"AI"}]}],ww=({rows:e=LR})=>d.jsx(TR,{children:e.map((t,i)=>{const a=t.speed??60,o=[...t.items,...t.items,...t.items];return d.jsxs(jR,{children:[t.title?d.jsx(ae.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.5},transition:{duration:.6,ease:kn},children:d.jsx(kR,{children:t.title})}):null,d.jsx(ER,{children:d.jsx(AR,{as:ae.div,animate:{x:t.direction==="right"?["-33.3333%","0%"]:["0%","-33.3333%"]},transition:{duration:a,ease:"linear",repeat:1/0,repeatType:"loop"},children:o.map((l,u)=>d.jsxs(CR,{$backgroundImage:l.backgroundImage,children:[d.jsxs("div",{className:"badge-top",children:[l.icon?d.jsx(MR,{style:{color:l.iconColor??"#fff",background:l.iconBg??"rgba(255,255,255,.18)"},children:l.icon}):null,l.group?d.jsx(zR,{children:l.group}):null]}),d.jsx(RR,{children:l.label}),l.description?d.jsx(OR,{children:l.description}):null]},`${l.group??"group"}-${l.label}-${u}`))})})]},`${t.title??"row"}-${i}`)})}),DR="/assets/Beauty-B5nCKot8.png",PR="/assets/Bildung-DUb95Jd7.png",NR="/assets/Coaching-Jbjo8OUB.png",VR="/assets/Fitness-CUZr8LbH.png",BR="/assets/Gastronomie-9VWW2aHc.png",_R="/assets/Handwerk-BNTwGaMa.png",HR="/assets/Immobilien-COg-qJ-F.png",GR="/assets/Kanzlei-BRg3E-LB.png",UR="/assets/Praxen-yTv6AWqn.png",IR="/assets/Reinigung-BnCbAVwW.png",$R="/assets/Transport-CSnl9Wxm.png",qR="/assets/Werkst%C3%A4tten-CrYP5CWR.png",FR=q.div`
  .marquee-wrap {
    margin-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
    background: rgba(255, 255, 255, 0.02);
  }
`,KR=()=>{const{t:e}=$e(),t=E.useMemo(()=>[{label:e("home.marquee.items.handwerk"),icon:d.jsx(z4,{}),backgroundImage:_R},{label:e("home.marquee.items.praxen"),icon:d.jsx(R4,{}),backgroundImage:UR},{label:e("home.marquee.items.werkstaetten"),icon:d.jsx(O4,{}),backgroundImage:qR},{label:e("home.marquee.items.gastronomie"),icon:d.jsx(BA,{}),backgroundImage:BR},{label:e("home.marquee.items.beauty"),icon:d.jsx(LA,{}),backgroundImage:DR},{label:e("home.marquee.items.immobilien"),icon:d.jsx(M4,{}),backgroundImage:HR},{label:e("home.marquee.items.kanzlei"),icon:d.jsx(vA,{}),backgroundImage:GR},{label:e("home.marquee.items.fitness"),icon:d.jsx(kA,{}),backgroundImage:VR},{label:e("home.marquee.items.reinigung"),icon:d.jsx(wA,{}),backgroundImage:IR},{label:e("home.marquee.items.transport"),icon:d.jsx(NA,{}),backgroundImage:$R},{label:e("home.marquee.items.coaching"),icon:d.jsx(TA,{}),backgroundImage:NR},{label:e("home.marquee.items.bildung"),icon:d.jsx(AA,{}),backgroundImage:PR}],[e]),i=E.useMemo(()=>[{direction:"left",speed:52,items:t}],[t]);return d.jsx(FR,{children:d.jsxs(ae.section,{className:"section marquee-wrap","aria-label":e("home.marquee.aria"),initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:ft,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.marquee.title")}),d.jsx("p",{className:"section-description",children:e("home.marquee.desc")})]}),d.jsx(ww,{rows:i})]})})},YR=()=>{const{t:e}=$e(),t=E.useMemo(()=>[{title:e("home.partnersTitle"),direction:"right",speed:58,items:[{group:e("home.groups.highlights"),label:e("home.partners.fastLoad.title"),description:e("home.partners.fastLoad.desc"),icon:d.jsx(ng,{}),iconColor:"#FFD25F",iconBg:"rgba(255,210,95,.2)"},{group:e("home.groups.highlights"),label:e("home.partners.moreLeads.title"),description:e("home.partners.moreLeads.desc"),icon:d.jsx(Va,{}),iconColor:"#58D68D",iconBg:"rgba(88,214,141,.2)"},{group:e("home.groups.highlights"),label:e("home.partners.clearPrices.title"),description:e("home.partners.clearPrices.desc"),icon:d.jsx(fu,{}),iconColor:"#5DADE2",iconBg:"rgba(93,173,226,.2)"},{group:e("home.groups.highlights"),label:e("home.partners.personalHelp.title"),description:e("home.partners.personalHelp.desc"),icon:d.jsx(CA,{}),iconColor:"#F5B7B1",iconBg:"rgba(245,183,177,.2)"},{group:e("home.groups.forWhom"),label:e("home.partners.handwerker.title"),description:e("home.partners.handwerker.desc"),icon:d.jsx(z4,{}),iconColor:"#F8C471",iconBg:"rgba(248,196,113,.2)"},{group:e("home.groups.forWhom"),label:e("home.partners.praxen.title"),description:e("home.partners.praxen.desc"),icon:d.jsx(R4,{}),iconColor:"#EC7063",iconBg:"rgba(236,112,99,.2)"},{group:e("home.groups.forWhom"),label:e("home.partners.werkstaetten.title"),description:e("home.partners.werkstaetten.desc"),icon:d.jsx(O4,{}),iconColor:"#AF7AC5",iconBg:"rgba(175,122,197,.2)"},{group:e("home.groups.forWhom"),label:e("home.partners.localServices.title"),description:e("home.partners.localServices.desc"),icon:d.jsx(Yc,{}),iconColor:"#E74C3C",iconBg:"rgba(231,76,60,.2)"},{group:e("home.groups.services"),label:e("home.partners.websites.title"),description:e("home.partners.websites.desc"),icon:d.jsx(Vh,{}),iconColor:"#48C9B0",iconBg:"rgba(72,201,176,.2)"},{group:e("home.groups.services"),label:e("home.partners.webApps.title"),description:e("home.partners.webApps.desc"),icon:d.jsx(ig,{}),iconColor:"#85C1E9",iconBg:"rgba(133,193,233,.2)"},{group:e("home.groups.services"),label:e("home.partners.aiIntegration.title"),description:e("home.partners.aiIntegration.desc"),icon:d.jsx(Ba,{}),iconColor:"#F7DC6F",iconBg:"rgba(247,220,111,.2)"},{group:e("home.groups.services"),label:e("home.partners.socialMedia.title"),description:e("home.partners.socialMedia.desc"),icon:d.jsx(L4,{}),iconColor:"#5DADE2",iconBg:"rgba(93,173,226,.2)"},{group:e("home.groups.services"),label:e("home.partners.socialAds.title"),description:e("home.partners.socialAds.desc"),icon:d.jsx(rl,{}),iconColor:"#F1948A",iconBg:"rgba(241,148,138,.2)"}]}],[e]);return d.jsxs(ae.section,{className:"section",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:ft,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.partnersSection.title")}),d.jsx("p",{className:"section-description",children:e("home.partnersSection.desc")})]}),d.jsx(ww,{rows:t})]})};function Kx(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function ug(e,t){e===void 0&&(e={}),t===void 0&&(t={});const i=["__proto__","constructor","prototype"];Object.keys(t).filter(a=>i.indexOf(a)<0).forEach(a=>{typeof e[a]>"u"?e[a]=t[a]:Kx(t[a])&&Kx(e[a])&&Object.keys(t[a]).length>0&&ug(e[a],t[a])})}const Sw={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Yt(){const e=typeof document<"u"?document:{};return ug(e,Sw),e}const XR={document:Sw,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function At(){const e=typeof window<"u"?window:{};return ug(e,XR),e}function QR(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function WR(e){const t=e;Object.keys(t).forEach(i=>{try{t[i]=null}catch{}try{delete t[i]}catch{}})}function Tw(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function Tu(){return Date.now()}function ZR(e){const t=At();let i;return t.getComputedStyle&&(i=t.getComputedStyle(e,null)),!i&&e.currentStyle&&(i=e.currentStyle),i||(i=e.style),i}function JR(e,t){t===void 0&&(t="x");const i=At();let a,o,l;const u=ZR(e);return i.WebKitCSSMatrix?(o=u.transform||u.webkitTransform,o.split(",").length>6&&(o=o.split(", ").map(f=>f.replace(",",".")).join(", ")),l=new i.WebKitCSSMatrix(o==="none"?"":o)):(l=u.MozTransform||u.OTransform||u.MsTransform||u.msTransform||u.transform||u.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=l.toString().split(",")),t==="x"&&(i.WebKitCSSMatrix?o=l.m41:a.length===16?o=parseFloat(a[12]):o=parseFloat(a[4])),t==="y"&&(i.WebKitCSSMatrix?o=l.m42:a.length===16?o=parseFloat(a[13]):o=parseFloat(a[5])),o||0}function Oc(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function eO(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function on(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let i=1;i<arguments.length;i+=1){const a=i<0||arguments.length<=i?void 0:arguments[i];if(a!=null&&!eO(a)){const o=Object.keys(Object(a)).filter(l=>t.indexOf(l)<0);for(let l=0,u=o.length;l<u;l+=1){const f=o[l],p=Object.getOwnPropertyDescriptor(a,f);p!==void 0&&p.enumerable&&(Oc(e[f])&&Oc(a[f])?a[f].__swiper__?e[f]=a[f]:on(e[f],a[f]):!Oc(e[f])&&Oc(a[f])?(e[f]={},a[f].__swiper__?e[f]=a[f]:on(e[f],a[f])):e[f]=a[f])}}}return e}function Lc(e,t,i){e.style.setProperty(t,i)}function jw(e){let{swiper:t,targetPosition:i,side:a}=e;const o=At(),l=-t.translate;let u=null,f;const p=t.params.speed;t.wrapperEl.style.scrollSnapType="none",o.cancelAnimationFrame(t.cssModeFrameID);const m=i>l?"next":"prev",g=(x,v)=>m==="next"&&x>=v||m==="prev"&&x<=v,y=()=>{f=new Date().getTime(),u===null&&(u=f);const x=Math.max(Math.min((f-u)/p,1),0),v=.5-Math.cos(x*Math.PI)/2;let S=l+v*(i-l);if(g(S,i)&&(S=i),t.wrapperEl.scrollTo({[a]:S}),g(S,i)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[a]:S})}),o.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=o.requestAnimationFrame(y)};y()}function kw(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function Si(e,t){t===void 0&&(t="");const i=At(),a=[...e.children];return i.HTMLSlotElement&&e instanceof HTMLSlotElement&&a.push(...e.assignedElements()),t?a.filter(o=>o.matches(t)):a}function tO(e,t){const i=[t];for(;i.length>0;){const a=i.shift();if(e===a)return!0;i.push(...a.children,...a.shadowRoot?a.shadowRoot.children:[],...a.assignedElements?a.assignedElements():[])}}function nO(e,t){const i=At();let a=t.contains(e);return!a&&i.HTMLSlotElement&&t instanceof HTMLSlotElement&&(a=[...t.assignedElements()].includes(e),a||(a=tO(e,t))),a}function ju(e){try{console.warn(e);return}catch{}}function ku(e,t){t===void 0&&(t=[]);const i=document.createElement(e);return i.classList.add(...Array.isArray(t)?t:QR(t)),i}function iO(e){const t=At(),i=Yt(),a=e.getBoundingClientRect(),o=i.body,l=e.clientTop||o.clientTop||0,u=e.clientLeft||o.clientLeft||0,f=e===t?t.scrollY:e.scrollTop,p=e===t?t.scrollX:e.scrollLeft;return{top:a.top+f-l,left:a.left+p-u}}function aO(e,t){const i=[];for(;e.previousElementSibling;){const a=e.previousElementSibling;t?a.matches(t)&&i.push(a):i.push(a),e=a}return i}function rO(e,t){const i=[];for(;e.nextElementSibling;){const a=e.nextElementSibling;t?a.matches(t)&&i.push(a):i.push(a),e=a}return i}function ta(e,t){return At().getComputedStyle(e,null).getPropertyValue(t)}function nm(e){let t=e,i;if(t){for(i=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(i+=1);return i}}function im(e,t){const i=[];let a=e.parentElement;for(;a;)t?a.matches(t)&&i.push(a):i.push(a),a=a.parentElement;return i}function sO(e,t){function i(a){a.target===e&&(t.call(e,a),e.removeEventListener("transitionend",i))}t&&e.addEventListener("transitionend",i)}function Yx(e,t,i){const a=At();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(a.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(a.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function yt(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function am(e,t){t===void 0&&(t=""),typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:i=>i}).createHTML(t):e.innerHTML=t}let qp;function oO(){const e=At(),t=Yt();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Ew(){return qp||(qp=oO()),qp}let Fp;function lO(e){let{userAgent:t}=e===void 0?{}:e;const i=Ew(),a=At(),o=a.navigator.platform,l=t||a.navigator.userAgent,u={ios:!1,android:!1},f=a.screen.width,p=a.screen.height,m=l.match(/(Android);?[\s\/]+([\d.]+)?/);let g=l.match(/(iPad).*OS\s([\d_]+)/);const y=l.match(/(iPod)(.*OS\s([\d_]+))?/),x=!g&&l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=o==="Win32";let S=o==="MacIntel";const j=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!g&&S&&i.touch&&j.indexOf(`${f}x${p}`)>=0&&(g=l.match(/(Version)\/([\d.]+)/),g||(g=[0,1,"13_0_0"]),S=!1),m&&!v&&(u.os="android",u.android=!0),(g||x||y)&&(u.os="ios",u.ios=!0),u}function Aw(e){return e===void 0&&(e={}),Fp||(Fp=lO(e)),Fp}let Kp;function cO(){const e=At(),t=Aw();let i=!1;function a(){const f=e.navigator.userAgent.toLowerCase();return f.indexOf("safari")>=0&&f.indexOf("chrome")<0&&f.indexOf("android")<0}if(a()){const f=String(e.navigator.userAgent);if(f.includes("Version/")){const[p,m]=f.split("Version/")[1].split(" ")[0].split(".").map(g=>Number(g));i=p<16||p===16&&m<2}}const o=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),l=a(),u=l||o&&t.ios;return{isSafari:i||l,needPerspectiveFix:i,need3dFix:u,isWebView:o}}function Cw(){return Kp||(Kp=cO()),Kp}function uO(e){let{swiper:t,on:i,emit:a}=e;const o=At();let l=null,u=null;const f=()=>{!t||t.destroyed||!t.initialized||(a("beforeResize"),a("resize"))},p=()=>{!t||t.destroyed||!t.initialized||(l=new ResizeObserver(y=>{u=o.requestAnimationFrame(()=>{const{width:x,height:v}=t;let S=x,j=v;y.forEach(C=>{let{contentBoxSize:k,contentRect:R,target:A}=C;A&&A!==t.el||(S=R?R.width:(k[0]||k).inlineSize,j=R?R.height:(k[0]||k).blockSize)}),(S!==x||j!==v)&&f()})}),l.observe(t.el))},m=()=>{u&&o.cancelAnimationFrame(u),l&&l.unobserve&&t.el&&(l.unobserve(t.el),l=null)},g=()=>{!t||t.destroyed||!t.initialized||a("orientationchange")};i("init",()=>{if(t.params.resizeObserver&&typeof o.ResizeObserver<"u"){p();return}o.addEventListener("resize",f),o.addEventListener("orientationchange",g)}),i("destroy",()=>{m(),o.removeEventListener("resize",f),o.removeEventListener("orientationchange",g)})}function dO(e){let{swiper:t,extendParams:i,on:a,emit:o}=e;const l=[],u=At(),f=function(g,y){y===void 0&&(y={});const x=u.MutationObserver||u.WebkitMutationObserver,v=new x(S=>{if(t.__preventObserver__)return;if(S.length===1){o("observerUpdate",S[0]);return}const j=function(){o("observerUpdate",S[0])};u.requestAnimationFrame?u.requestAnimationFrame(j):u.setTimeout(j,0)});v.observe(g,{attributes:typeof y.attributes>"u"?!0:y.attributes,childList:t.isElement||(typeof y.childList>"u"?!0:y).childList,characterData:typeof y.characterData>"u"?!0:y.characterData}),l.push(v)},p=()=>{if(t.params.observer){if(t.params.observeParents){const g=im(t.hostEl);for(let y=0;y<g.length;y+=1)f(g[y])}f(t.hostEl,{childList:t.params.observeSlideChildren}),f(t.wrapperEl,{attributes:!1})}},m=()=>{l.forEach(g=>{g.disconnect()}),l.splice(0,l.length)};i({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",p),a("destroy",m)}var fO={on(e,t,i){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;const o=i?"unshift":"push";return e.split(" ").forEach(l=>{a.eventsListeners[l]||(a.eventsListeners[l]=[]),a.eventsListeners[l][o](t)}),a},once(e,t,i){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;function o(){a.off(e,o),o.__emitterProxy&&delete o.__emitterProxy;for(var l=arguments.length,u=new Array(l),f=0;f<l;f++)u[f]=arguments[f];t.apply(a,u)}return o.__emitterProxy=t,a.on(e,o,i)},onAny(e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;const a=t?"unshift":"push";return i.eventsAnyListeners.indexOf(e)<0&&i.eventsAnyListeners[a](e),i},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const i=t.eventsAnyListeners.indexOf(e);return i>=0&&t.eventsAnyListeners.splice(i,1),t},off(e,t){const i=this;return!i.eventsListeners||i.destroyed||!i.eventsListeners||e.split(" ").forEach(a=>{typeof t>"u"?i.eventsListeners[a]=[]:i.eventsListeners[a]&&i.eventsListeners[a].forEach((o,l)=>{(o===t||o.__emitterProxy&&o.__emitterProxy===t)&&i.eventsListeners[a].splice(l,1)})}),i},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,i,a;for(var o=arguments.length,l=new Array(o),u=0;u<o;u++)l[u]=arguments[u];return typeof l[0]=="string"||Array.isArray(l[0])?(t=l[0],i=l.slice(1,l.length),a=e):(t=l[0].events,i=l[0].data,a=l[0].context||e),i.unshift(a),(Array.isArray(t)?t:t.split(" ")).forEach(p=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(m=>{m.apply(a,[p,...i])}),e.eventsListeners&&e.eventsListeners[p]&&e.eventsListeners[p].forEach(m=>{m.apply(a,i)})}),e}};function pO(){const e=this;let t,i;const a=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=a.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?i=e.params.height:i=a.clientHeight,!(t===0&&e.isHorizontal()||i===0&&e.isVertical())&&(t=t-parseInt(ta(a,"padding-left")||0,10)-parseInt(ta(a,"padding-right")||0,10),i=i-parseInt(ta(a,"padding-top")||0,10)-parseInt(ta(a,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(i)&&(i=0),Object.assign(e,{width:t,height:i,size:e.isHorizontal()?t:i}))}function hO(){const e=this;function t(Y,Z){return parseFloat(Y.getPropertyValue(e.getDirectionLabel(Z))||0)}const i=e.params,{wrapperEl:a,slidesEl:o,size:l,rtlTranslate:u,wrongRTL:f}=e,p=e.virtual&&i.virtual.enabled,m=p?e.virtual.slides.length:e.slides.length,g=Si(o,`.${e.params.slideClass}, swiper-slide`),y=p?e.virtual.slides.length:g.length;let x=[];const v=[],S=[];let j=i.slidesOffsetBefore;typeof j=="function"&&(j=i.slidesOffsetBefore.call(e));let C=i.slidesOffsetAfter;typeof C=="function"&&(C=i.slidesOffsetAfter.call(e));const k=e.snapGrid.length,R=e.slidesGrid.length;let A=i.spaceBetween,V=-j,M=0,P=0;if(typeof l>"u")return;typeof A=="string"&&A.indexOf("%")>=0?A=parseFloat(A.replace("%",""))/100*l:typeof A=="string"&&(A=parseFloat(A)),e.virtualSize=-A,g.forEach(Y=>{u?Y.style.marginLeft="":Y.style.marginRight="",Y.style.marginBottom="",Y.style.marginTop=""}),i.centeredSlides&&i.cssMode&&(Lc(a,"--swiper-centered-offset-before",""),Lc(a,"--swiper-centered-offset-after",""));const D=i.grid&&i.grid.rows>1&&e.grid;D?e.grid.initSlides(g):e.grid&&e.grid.unsetSlides();let U;const G=i.slidesPerView==="auto"&&i.breakpoints&&Object.keys(i.breakpoints).filter(Y=>typeof i.breakpoints[Y].slidesPerView<"u").length>0;for(let Y=0;Y<y;Y+=1){U=0;let Z;if(g[Y]&&(Z=g[Y]),D&&e.grid.updateSlide(Y,Z,g),!(g[Y]&&ta(Z,"display")==="none")){if(i.slidesPerView==="auto"){G&&(g[Y].style[e.getDirectionLabel("width")]="");const ne=getComputedStyle(Z),le=Z.style.transform,ce=Z.style.webkitTransform;if(le&&(Z.style.transform="none"),ce&&(Z.style.webkitTransform="none"),i.roundLengths)U=e.isHorizontal()?Yx(Z,"width"):Yx(Z,"height");else{const ue=t(ne,"width"),H=t(ne,"padding-left"),L=t(ne,"padding-right"),B=t(ne,"margin-left"),Q=t(ne,"margin-right"),z=ne.getPropertyValue("box-sizing");if(z&&z==="border-box")U=ue+B+Q;else{const{clientWidth:X,offsetWidth:te}=Z;U=ue+H+L+B+Q+(te-X)}}le&&(Z.style.transform=le),ce&&(Z.style.webkitTransform=ce),i.roundLengths&&(U=Math.floor(U))}else U=(l-(i.slidesPerView-1)*A)/i.slidesPerView,i.roundLengths&&(U=Math.floor(U)),g[Y]&&(g[Y].style[e.getDirectionLabel("width")]=`${U}px`);g[Y]&&(g[Y].swiperSlideSize=U),S.push(U),i.centeredSlides?(V=V+U/2+M/2+A,M===0&&Y!==0&&(V=V-l/2-A),Y===0&&(V=V-l/2-A),Math.abs(V)<1/1e3&&(V=0),i.roundLengths&&(V=Math.floor(V)),P%i.slidesPerGroup===0&&x.push(V),v.push(V)):(i.roundLengths&&(V=Math.floor(V)),(P-Math.min(e.params.slidesPerGroupSkip,P))%e.params.slidesPerGroup===0&&x.push(V),v.push(V),V=V+U+A),e.virtualSize+=U+A,M=U,P+=1}}if(e.virtualSize=Math.max(e.virtualSize,l)+C,u&&f&&(i.effect==="slide"||i.effect==="coverflow")&&(a.style.width=`${e.virtualSize+A}px`),i.setWrapperSize&&(a.style[e.getDirectionLabel("width")]=`${e.virtualSize+A}px`),D&&e.grid.updateWrapperSize(U,x),!i.centeredSlides){const Y=[];for(let Z=0;Z<x.length;Z+=1){let ne=x[Z];i.roundLengths&&(ne=Math.floor(ne)),x[Z]<=e.virtualSize-l&&Y.push(ne)}x=Y,Math.floor(e.virtualSize-l)-Math.floor(x[x.length-1])>1&&x.push(e.virtualSize-l)}if(p&&i.loop){const Y=S[0]+A;if(i.slidesPerGroup>1){const Z=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/i.slidesPerGroup),ne=Y*i.slidesPerGroup;for(let le=0;le<Z;le+=1)x.push(x[x.length-1]+ne)}for(let Z=0;Z<e.virtual.slidesBefore+e.virtual.slidesAfter;Z+=1)i.slidesPerGroup===1&&x.push(x[x.length-1]+Y),v.push(v[v.length-1]+Y),e.virtualSize+=Y}if(x.length===0&&(x=[0]),A!==0){const Y=e.isHorizontal()&&u?"marginLeft":e.getDirectionLabel("marginRight");g.filter((Z,ne)=>!i.cssMode||i.loop?!0:ne!==g.length-1).forEach(Z=>{Z.style[Y]=`${A}px`})}if(i.centeredSlides&&i.centeredSlidesBounds){let Y=0;S.forEach(ne=>{Y+=ne+(A||0)}),Y-=A;const Z=Y>l?Y-l:0;x=x.map(ne=>ne<=0?-j:ne>Z?Z+C:ne)}if(i.centerInsufficientSlides){let Y=0;S.forEach(ne=>{Y+=ne+(A||0)}),Y-=A;const Z=(i.slidesOffsetBefore||0)+(i.slidesOffsetAfter||0);if(Y+Z<l){const ne=(l-Y-Z)/2;x.forEach((le,ce)=>{x[ce]=le-ne}),v.forEach((le,ce)=>{v[ce]=le+ne})}}if(Object.assign(e,{slides:g,snapGrid:x,slidesGrid:v,slidesSizesGrid:S}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){Lc(a,"--swiper-centered-offset-before",`${-x[0]}px`),Lc(a,"--swiper-centered-offset-after",`${e.size/2-S[S.length-1]/2}px`);const Y=-e.snapGrid[0],Z=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(ne=>ne+Y),e.slidesGrid=e.slidesGrid.map(ne=>ne+Z)}if(y!==m&&e.emit("slidesLengthChange"),x.length!==k&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==R&&e.emit("slidesGridLengthChange"),i.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!p&&!i.cssMode&&(i.effect==="slide"||i.effect==="fade")){const Y=`${i.containerModifierClass}backface-hidden`,Z=e.el.classList.contains(Y);y<=i.maxBackfaceHiddenSlides?Z||e.el.classList.add(Y):Z&&e.el.classList.remove(Y)}}function mO(e){const t=this,i=[],a=t.virtual&&t.params.virtual.enabled;let o=0,l;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const u=f=>a?t.slides[t.getSlideIndexByData(f)]:t.slides[f];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(f=>{i.push(f)});else for(l=0;l<Math.ceil(t.params.slidesPerView);l+=1){const f=t.activeIndex+l;if(f>t.slides.length&&!a)break;i.push(u(f))}else i.push(u(t.activeIndex));for(l=0;l<i.length;l+=1)if(typeof i[l]<"u"){const f=i[l].offsetHeight;o=f>o?f:o}(o||o===0)&&(t.wrapperEl.style.height=`${o}px`)}function gO(){const e=this,t=e.slides,i=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let a=0;a<t.length;a+=1)t[a].swiperSlideOffset=(e.isHorizontal()?t[a].offsetLeft:t[a].offsetTop)-i-e.cssOverflowAdjustment()}const Xx=(e,t,i)=>{t&&!e.classList.contains(i)?e.classList.add(i):!t&&e.classList.contains(i)&&e.classList.remove(i)};function bO(e){e===void 0&&(e=this&&this.translate||0);const t=this,i=t.params,{slides:a,rtlTranslate:o,snapGrid:l}=t;if(a.length===0)return;typeof a[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let u=-e;o&&(u=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let f=i.spaceBetween;typeof f=="string"&&f.indexOf("%")>=0?f=parseFloat(f.replace("%",""))/100*t.size:typeof f=="string"&&(f=parseFloat(f));for(let p=0;p<a.length;p+=1){const m=a[p];let g=m.swiperSlideOffset;i.cssMode&&i.centeredSlides&&(g-=a[0].swiperSlideOffset);const y=(u+(i.centeredSlides?t.minTranslate():0)-g)/(m.swiperSlideSize+f),x=(u-l[0]+(i.centeredSlides?t.minTranslate():0)-g)/(m.swiperSlideSize+f),v=-(u-g),S=v+t.slidesSizesGrid[p],j=v>=0&&v<=t.size-t.slidesSizesGrid[p],C=v>=0&&v<t.size-1||S>1&&S<=t.size||v<=0&&S>=t.size;C&&(t.visibleSlides.push(m),t.visibleSlidesIndexes.push(p)),Xx(m,C,i.slideVisibleClass),Xx(m,j,i.slideFullyVisibleClass),m.progress=o?-y:y,m.originalProgress=o?-x:x}}function yO(e){const t=this;if(typeof e>"u"){const g=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*g||0}const i=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:o,isBeginning:l,isEnd:u,progressLoop:f}=t;const p=l,m=u;if(a===0)o=0,l=!0,u=!0;else{o=(e-t.minTranslate())/a;const g=Math.abs(e-t.minTranslate())<1,y=Math.abs(e-t.maxTranslate())<1;l=g||o<=0,u=y||o>=1,g&&(o=0),y&&(o=1)}if(i.loop){const g=t.getSlideIndexByData(0),y=t.getSlideIndexByData(t.slides.length-1),x=t.slidesGrid[g],v=t.slidesGrid[y],S=t.slidesGrid[t.slidesGrid.length-1],j=Math.abs(e);j>=x?f=(j-x)/S:f=(j+S-v)/S,f>1&&(f-=1)}Object.assign(t,{progress:o,progressLoop:f,isBeginning:l,isEnd:u}),(i.watchSlidesProgress||i.centeredSlides&&i.autoHeight)&&t.updateSlidesProgress(e),l&&!p&&t.emit("reachBeginning toEdge"),u&&!m&&t.emit("reachEnd toEdge"),(p&&!l||m&&!u)&&t.emit("fromEdge"),t.emit("progress",o)}const Yp=(e,t,i)=>{t&&!e.classList.contains(i)?e.classList.add(i):!t&&e.classList.contains(i)&&e.classList.remove(i)};function xO(){const e=this,{slides:t,params:i,slidesEl:a,activeIndex:o}=e,l=e.virtual&&i.virtual.enabled,u=e.grid&&i.grid&&i.grid.rows>1,f=y=>Si(a,`.${i.slideClass}${y}, swiper-slide${y}`)[0];let p,m,g;if(l)if(i.loop){let y=o-e.virtual.slidesBefore;y<0&&(y=e.virtual.slides.length+y),y>=e.virtual.slides.length&&(y-=e.virtual.slides.length),p=f(`[data-swiper-slide-index="${y}"]`)}else p=f(`[data-swiper-slide-index="${o}"]`);else u?(p=t.find(y=>y.column===o),g=t.find(y=>y.column===o+1),m=t.find(y=>y.column===o-1)):p=t[o];p&&(u||(g=rO(p,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!g&&(g=t[0]),m=aO(p,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!m===0&&(m=t[t.length-1]))),t.forEach(y=>{Yp(y,y===p,i.slideActiveClass),Yp(y,y===g,i.slideNextClass),Yp(y,y===m,i.slidePrevClass)}),e.emitSlidesClasses()}const eu=(e,t)=>{if(!e||e.destroyed||!e.params)return;const i=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,a=t.closest(i());if(a){let o=a.querySelector(`.${e.params.lazyPreloaderClass}`);!o&&e.isElement&&(a.shadowRoot?o=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{a.shadowRoot&&(o=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),o&&o.remove())})),o&&o.remove()}},Xp=(e,t)=>{if(!e.slides[t])return;const i=e.slides[t].querySelector('[loading="lazy"]');i&&i.removeAttribute("loading")},rm=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const i=e.slides.length;if(!i||!t||t<0)return;t=Math.min(t,i);const a=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),o=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const u=o,f=[u-t];f.push(...Array.from({length:t}).map((p,m)=>u+a+m)),e.slides.forEach((p,m)=>{f.includes(p.column)&&Xp(e,m)});return}const l=o+a-1;if(e.params.rewind||e.params.loop)for(let u=o-t;u<=l+t;u+=1){const f=(u%i+i)%i;(f<o||f>l)&&Xp(e,f)}else for(let u=Math.max(o-t,0);u<=Math.min(l+t,i-1);u+=1)u!==o&&(u>l||u<o)&&Xp(e,u)};function vO(e){const{slidesGrid:t,params:i}=e,a=e.rtlTranslate?e.translate:-e.translate;let o;for(let l=0;l<t.length;l+=1)typeof t[l+1]<"u"?a>=t[l]&&a<t[l+1]-(t[l+1]-t[l])/2?o=l:a>=t[l]&&a<t[l+1]&&(o=l+1):a>=t[l]&&(o=l);return i.normalizeSlideIndex&&(o<0||typeof o>"u")&&(o=0),o}function wO(e){const t=this,i=t.rtlTranslate?t.translate:-t.translate,{snapGrid:a,params:o,activeIndex:l,realIndex:u,snapIndex:f}=t;let p=e,m;const g=v=>{let S=v-t.virtual.slidesBefore;return S<0&&(S=t.virtual.slides.length+S),S>=t.virtual.slides.length&&(S-=t.virtual.slides.length),S};if(typeof p>"u"&&(p=vO(t)),a.indexOf(i)>=0)m=a.indexOf(i);else{const v=Math.min(o.slidesPerGroupSkip,p);m=v+Math.floor((p-v)/o.slidesPerGroup)}if(m>=a.length&&(m=a.length-1),p===l&&!t.params.loop){m!==f&&(t.snapIndex=m,t.emit("snapIndexChange"));return}if(p===l&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=g(p);return}const y=t.grid&&o.grid&&o.grid.rows>1;let x;if(t.virtual&&o.virtual.enabled&&o.loop)x=g(p);else if(y){const v=t.slides.find(j=>j.column===p);let S=parseInt(v.getAttribute("data-swiper-slide-index"),10);Number.isNaN(S)&&(S=Math.max(t.slides.indexOf(v),0)),x=Math.floor(S/o.grid.rows)}else if(t.slides[p]){const v=t.slides[p].getAttribute("data-swiper-slide-index");v?x=parseInt(v,10):x=p}else x=p;Object.assign(t,{previousSnapIndex:f,snapIndex:m,previousRealIndex:u,realIndex:x,previousIndex:l,activeIndex:p}),t.initialized&&rm(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(u!==x&&t.emit("realIndexChange"),t.emit("slideChange"))}function SO(e,t){const i=this,a=i.params;let o=e.closest(`.${a.slideClass}, swiper-slide`);!o&&i.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(f=>{!o&&f.matches&&f.matches(`.${a.slideClass}, swiper-slide`)&&(o=f)});let l=!1,u;if(o){for(let f=0;f<i.slides.length;f+=1)if(i.slides[f]===o){l=!0,u=f;break}}if(o&&l)i.clickedSlide=o,i.virtual&&i.params.virtual.enabled?i.clickedIndex=parseInt(o.getAttribute("data-swiper-slide-index"),10):i.clickedIndex=u;else{i.clickedSlide=void 0,i.clickedIndex=void 0;return}a.slideToClickedSlide&&i.clickedIndex!==void 0&&i.clickedIndex!==i.activeIndex&&i.slideToClickedSlide()}var TO={updateSize:pO,updateSlides:hO,updateAutoHeight:mO,updateSlidesOffset:gO,updateSlidesProgress:bO,updateProgress:yO,updateSlidesClasses:xO,updateActiveIndex:wO,updateClickedSlide:SO};function jO(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:i,rtlTranslate:a,translate:o,wrapperEl:l}=t;if(i.virtualTranslate)return a?-o:o;if(i.cssMode)return o;let u=JR(l,e);return u+=t.cssOverflowAdjustment(),a&&(u=-u),u||0}function kO(e,t){const i=this,{rtlTranslate:a,params:o,wrapperEl:l,progress:u}=i;let f=0,p=0;const m=0;i.isHorizontal()?f=a?-e:e:p=e,o.roundLengths&&(f=Math.floor(f),p=Math.floor(p)),i.previousTranslate=i.translate,i.translate=i.isHorizontal()?f:p,o.cssMode?l[i.isHorizontal()?"scrollLeft":"scrollTop"]=i.isHorizontal()?-f:-p:o.virtualTranslate||(i.isHorizontal()?f-=i.cssOverflowAdjustment():p-=i.cssOverflowAdjustment(),l.style.transform=`translate3d(${f}px, ${p}px, ${m}px)`);let g;const y=i.maxTranslate()-i.minTranslate();y===0?g=0:g=(e-i.minTranslate())/y,g!==u&&i.updateProgress(e),i.emit("setTranslate",i.translate,t)}function EO(){return-this.snapGrid[0]}function AO(){return-this.snapGrid[this.snapGrid.length-1]}function CO(e,t,i,a,o){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),i===void 0&&(i=!0),a===void 0&&(a=!0);const l=this,{params:u,wrapperEl:f}=l;if(l.animating&&u.preventInteractionOnTransition)return!1;const p=l.minTranslate(),m=l.maxTranslate();let g;if(a&&e>p?g=p:a&&e<m?g=m:g=e,l.updateProgress(g),u.cssMode){const y=l.isHorizontal();if(t===0)f[y?"scrollLeft":"scrollTop"]=-g;else{if(!l.support.smoothScroll)return jw({swiper:l,targetPosition:-g,side:y?"left":"top"}),!0;f.scrollTo({[y?"left":"top"]:-g,behavior:"smooth"})}return!0}return t===0?(l.setTransition(0),l.setTranslate(g),i&&(l.emit("beforeTransitionStart",t,o),l.emit("transitionEnd"))):(l.setTransition(t),l.setTranslate(g),i&&(l.emit("beforeTransitionStart",t,o),l.emit("transitionStart")),l.animating||(l.animating=!0,l.onTranslateToWrapperTransitionEnd||(l.onTranslateToWrapperTransitionEnd=function(x){!l||l.destroyed||x.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onTranslateToWrapperTransitionEnd),l.onTranslateToWrapperTransitionEnd=null,delete l.onTranslateToWrapperTransitionEnd,l.animating=!1,i&&l.emit("transitionEnd"))}),l.wrapperEl.addEventListener("transitionend",l.onTranslateToWrapperTransitionEnd))),!0}var MO={getTranslate:jO,setTranslate:kO,minTranslate:EO,maxTranslate:AO,translateTo:CO};function zO(e,t){const i=this;i.params.cssMode||(i.wrapperEl.style.transitionDuration=`${e}ms`,i.wrapperEl.style.transitionDelay=e===0?"0ms":""),i.emit("setTransition",e,t)}function Mw(e){let{swiper:t,runCallbacks:i,direction:a,step:o}=e;const{activeIndex:l,previousIndex:u}=t;let f=a;f||(l>u?f="next":l<u?f="prev":f="reset"),t.emit(`transition${o}`),i&&f==="reset"?t.emit(`slideResetTransition${o}`):i&&l!==u&&(t.emit(`slideChangeTransition${o}`),f==="next"?t.emit(`slideNextTransition${o}`):t.emit(`slidePrevTransition${o}`))}function RO(e,t){e===void 0&&(e=!0);const i=this,{params:a}=i;a.cssMode||(a.autoHeight&&i.updateAutoHeight(),Mw({swiper:i,runCallbacks:e,direction:t,step:"Start"}))}function OO(e,t){e===void 0&&(e=!0);const i=this,{params:a}=i;i.animating=!1,!a.cssMode&&(i.setTransition(0),Mw({swiper:i,runCallbacks:e,direction:t,step:"End"}))}var LO={setTransition:zO,transitionStart:RO,transitionEnd:OO};function DO(e,t,i,a,o){e===void 0&&(e=0),i===void 0&&(i=!0),typeof e=="string"&&(e=parseInt(e,10));const l=this;let u=e;u<0&&(u=0);const{params:f,snapGrid:p,slidesGrid:m,previousIndex:g,activeIndex:y,rtlTranslate:x,wrapperEl:v,enabled:S}=l;if(!S&&!a&&!o||l.destroyed||l.animating&&f.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=l.params.speed);const j=Math.min(l.params.slidesPerGroupSkip,u);let C=j+Math.floor((u-j)/l.params.slidesPerGroup);C>=p.length&&(C=p.length-1);const k=-p[C];if(f.normalizeSlideIndex)for(let D=0;D<m.length;D+=1){const U=-Math.floor(k*100),G=Math.floor(m[D]*100),Y=Math.floor(m[D+1]*100);typeof m[D+1]<"u"?U>=G&&U<Y-(Y-G)/2?u=D:U>=G&&U<Y&&(u=D+1):U>=G&&(u=D)}if(l.initialized&&u!==y&&(!l.allowSlideNext&&(x?k>l.translate&&k>l.minTranslate():k<l.translate&&k<l.minTranslate())||!l.allowSlidePrev&&k>l.translate&&k>l.maxTranslate()&&(y||0)!==u))return!1;u!==(g||0)&&i&&l.emit("beforeSlideChangeStart"),l.updateProgress(k);let R;u>y?R="next":u<y?R="prev":R="reset";const A=l.virtual&&l.params.virtual.enabled;if(!(A&&o)&&(x&&-k===l.translate||!x&&k===l.translate))return l.updateActiveIndex(u),f.autoHeight&&l.updateAutoHeight(),l.updateSlidesClasses(),f.effect!=="slide"&&l.setTranslate(k),R!=="reset"&&(l.transitionStart(i,R),l.transitionEnd(i,R)),!1;if(f.cssMode){const D=l.isHorizontal(),U=x?k:-k;if(t===0)A&&(l.wrapperEl.style.scrollSnapType="none",l._immediateVirtual=!0),A&&!l._cssModeVirtualInitialSet&&l.params.initialSlide>0?(l._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{v[D?"scrollLeft":"scrollTop"]=U})):v[D?"scrollLeft":"scrollTop"]=U,A&&requestAnimationFrame(()=>{l.wrapperEl.style.scrollSnapType="",l._immediateVirtual=!1});else{if(!l.support.smoothScroll)return jw({swiper:l,targetPosition:U,side:D?"left":"top"}),!0;v.scrollTo({[D?"left":"top"]:U,behavior:"smooth"})}return!0}const P=Cw().isSafari;return A&&!o&&P&&l.isElement&&l.virtual.update(!1,!1,u),l.setTransition(t),l.setTranslate(k),l.updateActiveIndex(u),l.updateSlidesClasses(),l.emit("beforeTransitionStart",t,a),l.transitionStart(i,R),t===0?l.transitionEnd(i,R):l.animating||(l.animating=!0,l.onSlideToWrapperTransitionEnd||(l.onSlideToWrapperTransitionEnd=function(U){!l||l.destroyed||U.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onSlideToWrapperTransitionEnd),l.onSlideToWrapperTransitionEnd=null,delete l.onSlideToWrapperTransitionEnd,l.transitionEnd(i,R))}),l.wrapperEl.addEventListener("transitionend",l.onSlideToWrapperTransitionEnd)),!0}function PO(e,t,i,a){e===void 0&&(e=0),i===void 0&&(i=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;if(o.destroyed)return;typeof t>"u"&&(t=o.params.speed);const l=o.grid&&o.params.grid&&o.params.grid.rows>1;let u=e;if(o.params.loop)if(o.virtual&&o.params.virtual.enabled)u=u+o.virtual.slidesBefore;else{let f;if(l){const x=u*o.params.grid.rows;f=o.slides.find(v=>v.getAttribute("data-swiper-slide-index")*1===x).column}else f=o.getSlideIndexByData(u);const p=l?Math.ceil(o.slides.length/o.params.grid.rows):o.slides.length,{centeredSlides:m}=o.params;let g=o.params.slidesPerView;g==="auto"?g=o.slidesPerViewDynamic():(g=Math.ceil(parseFloat(o.params.slidesPerView,10)),m&&g%2===0&&(g=g+1));let y=p-f<g;if(m&&(y=y||f<Math.ceil(g/2)),a&&m&&o.params.slidesPerView!=="auto"&&!l&&(y=!1),y){const x=m?f<o.activeIndex?"prev":"next":f-o.activeIndex-1<o.params.slidesPerView?"next":"prev";o.loopFix({direction:x,slideTo:!0,activeSlideIndex:x==="next"?f+1:f-p+1,slideRealIndex:x==="next"?o.realIndex:void 0})}if(l){const x=u*o.params.grid.rows;u=o.slides.find(v=>v.getAttribute("data-swiper-slide-index")*1===x).column}else u=o.getSlideIndexByData(u)}return requestAnimationFrame(()=>{o.slideTo(u,t,i,a)}),o}function NO(e,t,i){t===void 0&&(t=!0);const a=this,{enabled:o,params:l,animating:u}=a;if(!o||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);let f=l.slidesPerGroup;l.slidesPerView==="auto"&&l.slidesPerGroup===1&&l.slidesPerGroupAuto&&(f=Math.max(a.slidesPerViewDynamic("current",!0),1));const p=a.activeIndex<l.slidesPerGroupSkip?1:f,m=a.virtual&&l.virtual.enabled;if(l.loop){if(u&&!m&&l.loopPreventsSliding)return!1;if(a.loopFix({direction:"next"}),a._clientLeft=a.wrapperEl.clientLeft,a.activeIndex===a.slides.length-1&&l.cssMode)return requestAnimationFrame(()=>{a.slideTo(a.activeIndex+p,e,t,i)}),!0}return l.rewind&&a.isEnd?a.slideTo(0,e,t,i):a.slideTo(a.activeIndex+p,e,t,i)}function VO(e,t,i){t===void 0&&(t=!0);const a=this,{params:o,snapGrid:l,slidesGrid:u,rtlTranslate:f,enabled:p,animating:m}=a;if(!p||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);const g=a.virtual&&o.virtual.enabled;if(o.loop){if(m&&!g&&o.loopPreventsSliding)return!1;a.loopFix({direction:"prev"}),a._clientLeft=a.wrapperEl.clientLeft}const y=f?a.translate:-a.translate;function x(R){return R<0?-Math.floor(Math.abs(R)):Math.floor(R)}const v=x(y),S=l.map(R=>x(R)),j=o.freeMode&&o.freeMode.enabled;let C=l[S.indexOf(v)-1];if(typeof C>"u"&&(o.cssMode||j)){let R;l.forEach((A,V)=>{v>=A&&(R=V)}),typeof R<"u"&&(C=j?l[R]:l[R>0?R-1:R])}let k=0;if(typeof C<"u"&&(k=u.indexOf(C),k<0&&(k=a.activeIndex-1),o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(k=k-a.slidesPerViewDynamic("previous",!0)+1,k=Math.max(k,0))),o.rewind&&a.isBeginning){const R=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(R,e,t,i)}else if(o.loop&&a.activeIndex===0&&o.cssMode)return requestAnimationFrame(()=>{a.slideTo(k,e,t,i)}),!0;return a.slideTo(k,e,t,i)}function BO(e,t,i){t===void 0&&(t=!0);const a=this;if(!a.destroyed)return typeof e>"u"&&(e=a.params.speed),a.slideTo(a.activeIndex,e,t,i)}function _O(e,t,i,a){t===void 0&&(t=!0),a===void 0&&(a=.5);const o=this;if(o.destroyed)return;typeof e>"u"&&(e=o.params.speed);let l=o.activeIndex;const u=Math.min(o.params.slidesPerGroupSkip,l),f=u+Math.floor((l-u)/o.params.slidesPerGroup),p=o.rtlTranslate?o.translate:-o.translate;if(p>=o.snapGrid[f]){const m=o.snapGrid[f],g=o.snapGrid[f+1];p-m>(g-m)*a&&(l+=o.params.slidesPerGroup)}else{const m=o.snapGrid[f-1],g=o.snapGrid[f];p-m<=(g-m)*a&&(l-=o.params.slidesPerGroup)}return l=Math.max(l,0),l=Math.min(l,o.slidesGrid.length-1),o.slideTo(l,e,t,i)}function HO(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:i}=e,a=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let o=e.getSlideIndexWhenGrid(e.clickedIndex),l;const u=e.isElement?"swiper-slide":`.${t.slideClass}`,f=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;l=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(l):o>(f?(e.slides.length-a)/2-(e.params.grid.rows-1):e.slides.length-a)?(e.loopFix(),o=e.getSlideIndex(Si(i,`${u}[data-swiper-slide-index="${l}"]`)[0]),Tw(()=>{e.slideTo(o)})):e.slideTo(o)}else e.slideTo(o)}var GO={slideTo:DO,slideToLoop:PO,slideNext:NO,slidePrev:VO,slideReset:BO,slideToClosest:_O,slideToClickedSlide:HO};function UO(e,t){const i=this,{params:a,slidesEl:o}=i;if(!a.loop||i.virtual&&i.params.virtual.enabled)return;const l=()=>{Si(o,`.${a.slideClass}, swiper-slide`).forEach((v,S)=>{v.setAttribute("data-swiper-slide-index",S)})},u=()=>{const x=Si(o,`.${a.slideBlankClass}`);x.forEach(v=>{v.remove()}),x.length>0&&(i.recalcSlides(),i.updateSlides())},f=i.grid&&a.grid&&a.grid.rows>1;a.loopAddBlankSlides&&(a.slidesPerGroup>1||f)&&u();const p=a.slidesPerGroup*(f?a.grid.rows:1),m=i.slides.length%p!==0,g=f&&i.slides.length%a.grid.rows!==0,y=x=>{for(let v=0;v<x;v+=1){const S=i.isElement?ku("swiper-slide",[a.slideBlankClass]):ku("div",[a.slideClass,a.slideBlankClass]);i.slidesEl.append(S)}};if(m){if(a.loopAddBlankSlides){const x=p-i.slides.length%p;y(x),i.recalcSlides(),i.updateSlides()}else ju("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else if(g){if(a.loopAddBlankSlides){const x=a.grid.rows-i.slides.length%a.grid.rows;y(x),i.recalcSlides(),i.updateSlides()}else ju("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else l();i.loopFix({slideRealIndex:e,direction:a.centeredSlides?void 0:"next",initial:t})}function IO(e){let{slideRealIndex:t,slideTo:i=!0,direction:a,setTranslate:o,activeSlideIndex:l,initial:u,byController:f,byMousewheel:p}=e===void 0?{}:e;const m=this;if(!m.params.loop)return;m.emit("beforeLoopFix");const{slides:g,allowSlidePrev:y,allowSlideNext:x,slidesEl:v,params:S}=m,{centeredSlides:j,initialSlide:C}=S;if(m.allowSlidePrev=!0,m.allowSlideNext=!0,m.virtual&&S.virtual.enabled){i&&(!S.centeredSlides&&m.snapIndex===0?m.slideTo(m.virtual.slides.length,0,!1,!0):S.centeredSlides&&m.snapIndex<S.slidesPerView?m.slideTo(m.virtual.slides.length+m.snapIndex,0,!1,!0):m.snapIndex===m.snapGrid.length-1&&m.slideTo(m.virtual.slidesBefore,0,!1,!0)),m.allowSlidePrev=y,m.allowSlideNext=x,m.emit("loopFix");return}let k=S.slidesPerView;k==="auto"?k=m.slidesPerViewDynamic():(k=Math.ceil(parseFloat(S.slidesPerView,10)),j&&k%2===0&&(k=k+1));const R=S.slidesPerGroupAuto?k:S.slidesPerGroup;let A=j?Math.max(R,Math.ceil(k/2)):R;A%R!==0&&(A+=R-A%R),A+=S.loopAdditionalSlides,m.loopedSlides=A;const V=m.grid&&S.grid&&S.grid.rows>1;g.length<k+A||m.params.effect==="cards"&&g.length<k+A*2?ju("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):V&&S.grid.fill==="row"&&ju("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const M=[],P=[],D=V?Math.ceil(g.length/S.grid.rows):g.length,U=u&&D-C<k&&!j;let G=U?C:m.activeIndex;typeof l>"u"?l=m.getSlideIndex(g.find(H=>H.classList.contains(S.slideActiveClass))):G=l;const Y=a==="next"||!a,Z=a==="prev"||!a;let ne=0,le=0;const ue=(V?g[l].column:l)+(j&&typeof o>"u"?-k/2+.5:0);if(ue<A){ne=Math.max(A-ue,R);for(let H=0;H<A-ue;H+=1){const L=H-Math.floor(H/D)*D;if(V){const B=D-L-1;for(let Q=g.length-1;Q>=0;Q-=1)g[Q].column===B&&M.push(Q)}else M.push(D-L-1)}}else if(ue+k>D-A){le=Math.max(ue-(D-A*2),R),U&&(le=Math.max(le,k-D+C+1));for(let H=0;H<le;H+=1){const L=H-Math.floor(H/D)*D;V?g.forEach((B,Q)=>{B.column===L&&P.push(Q)}):P.push(L)}}if(m.__preventObserver__=!0,requestAnimationFrame(()=>{m.__preventObserver__=!1}),m.params.effect==="cards"&&g.length<k+A*2&&(P.includes(l)&&P.splice(P.indexOf(l),1),M.includes(l)&&M.splice(M.indexOf(l),1)),Z&&M.forEach(H=>{g[H].swiperLoopMoveDOM=!0,v.prepend(g[H]),g[H].swiperLoopMoveDOM=!1}),Y&&P.forEach(H=>{g[H].swiperLoopMoveDOM=!0,v.append(g[H]),g[H].swiperLoopMoveDOM=!1}),m.recalcSlides(),S.slidesPerView==="auto"?m.updateSlides():V&&(M.length>0&&Z||P.length>0&&Y)&&m.slides.forEach((H,L)=>{m.grid.updateSlide(L,H,m.slides)}),S.watchSlidesProgress&&m.updateSlidesOffset(),i){if(M.length>0&&Z){if(typeof t>"u"){const H=m.slidesGrid[G],B=m.slidesGrid[G+ne]-H;p?m.setTranslate(m.translate-B):(m.slideTo(G+Math.ceil(ne),0,!1,!0),o&&(m.touchEventsData.startTranslate=m.touchEventsData.startTranslate-B,m.touchEventsData.currentTranslate=m.touchEventsData.currentTranslate-B))}else if(o){const H=V?M.length/S.grid.rows:M.length;m.slideTo(m.activeIndex+H,0,!1,!0),m.touchEventsData.currentTranslate=m.translate}}else if(P.length>0&&Y)if(typeof t>"u"){const H=m.slidesGrid[G],B=m.slidesGrid[G-le]-H;p?m.setTranslate(m.translate-B):(m.slideTo(G-le,0,!1,!0),o&&(m.touchEventsData.startTranslate=m.touchEventsData.startTranslate-B,m.touchEventsData.currentTranslate=m.touchEventsData.currentTranslate-B))}else{const H=V?P.length/S.grid.rows:P.length;m.slideTo(m.activeIndex-H,0,!1,!0)}}if(m.allowSlidePrev=y,m.allowSlideNext=x,m.controller&&m.controller.control&&!f){const H={slideRealIndex:t,direction:a,setTranslate:o,activeSlideIndex:l,byController:!0};Array.isArray(m.controller.control)?m.controller.control.forEach(L=>{!L.destroyed&&L.params.loop&&L.loopFix({...H,slideTo:L.params.slidesPerView===S.slidesPerView?i:!1})}):m.controller.control instanceof m.constructor&&m.controller.control.params.loop&&m.controller.control.loopFix({...H,slideTo:m.controller.control.params.slidesPerView===S.slidesPerView?i:!1})}m.emit("loopFix")}function $O(){const e=this,{params:t,slidesEl:i}=e;if(!t.loop||!i||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const a=[];e.slides.forEach(o=>{const l=typeof o.swiperSlideIndex>"u"?o.getAttribute("data-swiper-slide-index")*1:o.swiperSlideIndex;a[l]=o}),e.slides.forEach(o=>{o.removeAttribute("data-swiper-slide-index")}),a.forEach(o=>{i.append(o)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var qO={loopCreate:UO,loopFix:IO,loopDestroy:$O};function FO(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const i=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),i.style.cursor="move",i.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function KO(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var YO={setGrabCursor:FO,unsetGrabCursor:KO};function XO(e,t){t===void 0&&(t=this);function i(a){if(!a||a===Yt()||a===At())return null;a.assignedSlot&&(a=a.assignedSlot);const o=a.closest(e);return!o&&!a.getRootNode?null:o||i(a.getRootNode().host)}return i(t)}function Qx(e,t,i){const a=At(),{params:o}=e,l=o.edgeSwipeDetection,u=o.edgeSwipeThreshold;return l&&(i<=u||i>=a.innerWidth-u)?l==="prevent"?(t.preventDefault(),!0):!1:!0}function QO(e){const t=this,i=Yt();let a=e;a.originalEvent&&(a=a.originalEvent);const o=t.touchEventsData;if(a.type==="pointerdown"){if(o.pointerId!==null&&o.pointerId!==a.pointerId)return;o.pointerId=a.pointerId}else a.type==="touchstart"&&a.targetTouches.length===1&&(o.touchId=a.targetTouches[0].identifier);if(a.type==="touchstart"){Qx(t,a,a.targetTouches[0].pageX);return}const{params:l,touches:u,enabled:f}=t;if(!f||!l.simulateTouch&&a.pointerType==="mouse"||t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let p=a.target;if(l.touchEventsTarget==="wrapper"&&!nO(p,t.wrapperEl)||"which"in a&&a.which===3||"button"in a&&a.button>0||o.isTouched&&o.isMoved)return;const m=!!l.noSwipingClass&&l.noSwipingClass!=="",g=a.composedPath?a.composedPath():a.path;m&&a.target&&a.target.shadowRoot&&g&&(p=g[0]);const y=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,x=!!(a.target&&a.target.shadowRoot);if(l.noSwiping&&(x?XO(y,p):p.closest(y))){t.allowClick=!0;return}if(l.swipeHandler&&!p.closest(l.swipeHandler))return;u.currentX=a.pageX,u.currentY=a.pageY;const v=u.currentX,S=u.currentY;if(!Qx(t,a,v))return;Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),u.startX=v,u.startY=S,o.touchStartTime=Tu(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(o.allowThresholdMove=!1);let j=!0;p.matches(o.focusableElements)&&(j=!1,p.nodeName==="SELECT"&&(o.isTouched=!1)),i.activeElement&&i.activeElement.matches(o.focusableElements)&&i.activeElement!==p&&(a.pointerType==="mouse"||a.pointerType!=="mouse"&&!p.matches(o.focusableElements))&&i.activeElement.blur();const C=j&&t.allowTouchMove&&l.touchStartPreventDefault;(l.touchStartForcePreventDefault||C)&&!p.isContentEditable&&a.preventDefault(),l.freeMode&&l.freeMode.enabled&&t.freeMode&&t.animating&&!l.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",a)}function WO(e){const t=Yt(),i=this,a=i.touchEventsData,{params:o,touches:l,rtlTranslate:u,enabled:f}=i;if(!f||!o.simulateTouch&&e.pointerType==="mouse")return;let p=e;if(p.originalEvent&&(p=p.originalEvent),p.type==="pointermove"&&(a.touchId!==null||p.pointerId!==a.pointerId))return;let m;if(p.type==="touchmove"){if(m=[...p.changedTouches].find(M=>M.identifier===a.touchId),!m||m.identifier!==a.touchId)return}else m=p;if(!a.isTouched){a.startMoving&&a.isScrolling&&i.emit("touchMoveOpposite",p);return}const g=m.pageX,y=m.pageY;if(p.preventedByNestedSwiper){l.startX=g,l.startY=y;return}if(!i.allowTouchMove){p.target.matches(a.focusableElements)||(i.allowClick=!1),a.isTouched&&(Object.assign(l,{startX:g,startY:y,currentX:g,currentY:y}),a.touchStartTime=Tu());return}if(o.touchReleaseOnEdges&&!o.loop)if(i.isVertical()){if(y<l.startY&&i.translate<=i.maxTranslate()||y>l.startY&&i.translate>=i.minTranslate()){a.isTouched=!1,a.isMoved=!1;return}}else{if(u&&(g>l.startX&&-i.translate<=i.maxTranslate()||g<l.startX&&-i.translate>=i.minTranslate()))return;if(!u&&(g<l.startX&&i.translate<=i.maxTranslate()||g>l.startX&&i.translate>=i.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(a.focusableElements)&&t.activeElement!==p.target&&p.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&p.target===t.activeElement&&p.target.matches(a.focusableElements)){a.isMoved=!0,i.allowClick=!1;return}a.allowTouchCallbacks&&i.emit("touchMove",p),l.previousX=l.currentX,l.previousY=l.currentY,l.currentX=g,l.currentY=y;const x=l.currentX-l.startX,v=l.currentY-l.startY;if(i.params.threshold&&Math.sqrt(x**2+v**2)<i.params.threshold)return;if(typeof a.isScrolling>"u"){let M;i.isHorizontal()&&l.currentY===l.startY||i.isVertical()&&l.currentX===l.startX?a.isScrolling=!1:x*x+v*v>=25&&(M=Math.atan2(Math.abs(v),Math.abs(x))*180/Math.PI,a.isScrolling=i.isHorizontal()?M>o.touchAngle:90-M>o.touchAngle)}if(a.isScrolling&&i.emit("touchMoveOpposite",p),typeof a.startMoving>"u"&&(l.currentX!==l.startX||l.currentY!==l.startY)&&(a.startMoving=!0),a.isScrolling||p.type==="touchmove"&&a.preventTouchMoveFromPointerMove){a.isTouched=!1;return}if(!a.startMoving)return;i.allowClick=!1,!o.cssMode&&p.cancelable&&p.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&p.stopPropagation();let S=i.isHorizontal()?x:v,j=i.isHorizontal()?l.currentX-l.previousX:l.currentY-l.previousY;o.oneWayMovement&&(S=Math.abs(S)*(u?1:-1),j=Math.abs(j)*(u?1:-1)),l.diff=S,S*=o.touchRatio,u&&(S=-S,j=-j);const C=i.touchesDirection;i.swipeDirection=S>0?"prev":"next",i.touchesDirection=j>0?"prev":"next";const k=i.params.loop&&!o.cssMode,R=i.touchesDirection==="next"&&i.allowSlideNext||i.touchesDirection==="prev"&&i.allowSlidePrev;if(!a.isMoved){if(k&&R&&i.loopFix({direction:i.swipeDirection}),a.startTranslate=i.getTranslate(),i.setTransition(0),i.animating){const M=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});i.wrapperEl.dispatchEvent(M)}a.allowMomentumBounce=!1,o.grabCursor&&(i.allowSlideNext===!0||i.allowSlidePrev===!0)&&i.setGrabCursor(!0),i.emit("sliderFirstMove",p)}if(new Date().getTime(),o._loopSwapReset!==!1&&a.isMoved&&a.allowThresholdMove&&C!==i.touchesDirection&&k&&R&&Math.abs(S)>=1){Object.assign(l,{startX:g,startY:y,currentX:g,currentY:y,startTranslate:a.currentTranslate}),a.loopSwapReset=!0,a.startTranslate=a.currentTranslate;return}i.emit("sliderMove",p),a.isMoved=!0,a.currentTranslate=S+a.startTranslate;let A=!0,V=o.resistanceRatio;if(o.touchReleaseOnEdges&&(V=0),S>0?(k&&R&&a.allowThresholdMove&&a.currentTranslate>(o.centeredSlides?i.minTranslate()-i.slidesSizesGrid[i.activeIndex+1]-(o.slidesPerView!=="auto"&&i.slides.length-o.slidesPerView>=2?i.slidesSizesGrid[i.activeIndex+1]+i.params.spaceBetween:0)-i.params.spaceBetween:i.minTranslate())&&i.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),a.currentTranslate>i.minTranslate()&&(A=!1,o.resistance&&(a.currentTranslate=i.minTranslate()-1+(-i.minTranslate()+a.startTranslate+S)**V))):S<0&&(k&&R&&a.allowThresholdMove&&a.currentTranslate<(o.centeredSlides?i.maxTranslate()+i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween+(o.slidesPerView!=="auto"&&i.slides.length-o.slidesPerView>=2?i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween:0):i.maxTranslate())&&i.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:i.slides.length-(o.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),a.currentTranslate<i.maxTranslate()&&(A=!1,o.resistance&&(a.currentTranslate=i.maxTranslate()+1-(i.maxTranslate()-a.startTranslate-S)**V))),A&&(p.preventedByNestedSwiper=!0),!i.allowSlideNext&&i.swipeDirection==="next"&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!i.allowSlidePrev&&i.swipeDirection==="prev"&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),!i.allowSlidePrev&&!i.allowSlideNext&&(a.currentTranslate=a.startTranslate),o.threshold>0)if(Math.abs(S)>o.threshold||a.allowThresholdMove){if(!a.allowThresholdMove){a.allowThresholdMove=!0,l.startX=l.currentX,l.startY=l.currentY,a.currentTranslate=a.startTranslate,l.diff=i.isHorizontal()?l.currentX-l.startX:l.currentY-l.startY;return}}else{a.currentTranslate=a.startTranslate;return}!o.followFinger||o.cssMode||((o.freeMode&&o.freeMode.enabled&&i.freeMode||o.watchSlidesProgress)&&(i.updateActiveIndex(),i.updateSlidesClasses()),o.freeMode&&o.freeMode.enabled&&i.freeMode&&i.freeMode.onTouchMove(),i.updateProgress(a.currentTranslate),i.setTranslate(a.currentTranslate))}function ZO(e){const t=this,i=t.touchEventsData;let a=e;a.originalEvent&&(a=a.originalEvent);let o;if(a.type==="touchend"||a.type==="touchcancel"){if(o=[...a.changedTouches].find(M=>M.identifier===i.touchId),!o||o.identifier!==i.touchId)return}else{if(i.touchId!==null||a.pointerId!==i.pointerId)return;o=a}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(a.type)&&!(["pointercancel","contextmenu"].includes(a.type)&&(t.browser.isSafari||t.browser.isWebView)))return;i.pointerId=null,i.touchId=null;const{params:u,touches:f,rtlTranslate:p,slidesGrid:m,enabled:g}=t;if(!g||!u.simulateTouch&&a.pointerType==="mouse")return;if(i.allowTouchCallbacks&&t.emit("touchEnd",a),i.allowTouchCallbacks=!1,!i.isTouched){i.isMoved&&u.grabCursor&&t.setGrabCursor(!1),i.isMoved=!1,i.startMoving=!1;return}u.grabCursor&&i.isMoved&&i.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const y=Tu(),x=y-i.touchStartTime;if(t.allowClick){const M=a.path||a.composedPath&&a.composedPath();t.updateClickedSlide(M&&M[0]||a.target,M),t.emit("tap click",a),x<300&&y-i.lastClickTime<300&&t.emit("doubleTap doubleClick",a)}if(i.lastClickTime=Tu(),Tw(()=>{t.destroyed||(t.allowClick=!0)}),!i.isTouched||!i.isMoved||!t.swipeDirection||f.diff===0&&!i.loopSwapReset||i.currentTranslate===i.startTranslate&&!i.loopSwapReset){i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;return}i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;let v;if(u.followFinger?v=p?t.translate:-t.translate:v=-i.currentTranslate,u.cssMode)return;if(u.freeMode&&u.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:v});return}const S=v>=-t.maxTranslate()&&!t.params.loop;let j=0,C=t.slidesSizesGrid[0];for(let M=0;M<m.length;M+=M<u.slidesPerGroupSkip?1:u.slidesPerGroup){const P=M<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;typeof m[M+P]<"u"?(S||v>=m[M]&&v<m[M+P])&&(j=M,C=m[M+P]-m[M]):(S||v>=m[M])&&(j=M,C=m[m.length-1]-m[m.length-2])}let k=null,R=null;u.rewind&&(t.isBeginning?R=u.virtual&&u.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(k=0));const A=(v-m[j])/C,V=j<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;if(x>u.longSwipesMs){if(!u.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(A>=u.longSwipesRatio?t.slideTo(u.rewind&&t.isEnd?k:j+V):t.slideTo(j)),t.swipeDirection==="prev"&&(A>1-u.longSwipesRatio?t.slideTo(j+V):R!==null&&A<0&&Math.abs(A)>u.longSwipesRatio?t.slideTo(R):t.slideTo(j))}else{if(!u.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(a.target===t.navigation.nextEl||a.target===t.navigation.prevEl)?a.target===t.navigation.nextEl?t.slideTo(j+V):t.slideTo(j):(t.swipeDirection==="next"&&t.slideTo(k!==null?k:j+V),t.swipeDirection==="prev"&&t.slideTo(R!==null?R:j))}}function Wx(){const e=this,{params:t,el:i}=e;if(i&&i.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:o,snapGrid:l}=e,u=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const f=u&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!f?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!u?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=o,e.allowSlideNext=a,e.params.watchOverflow&&l!==e.snapGrid&&e.checkOverflow()}function JO(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function eL(){const e=this,{wrapperEl:t,rtlTranslate:i,enabled:a}=e;if(!a)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let o;const l=e.maxTranslate()-e.minTranslate();l===0?o=0:o=(e.translate-e.minTranslate())/l,o!==e.progress&&e.updateProgress(i?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function tL(e){const t=this;eu(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function nL(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const zw=(e,t)=>{const i=Yt(),{params:a,el:o,wrapperEl:l,device:u}=e,f=!!a.nested,p=t==="on"?"addEventListener":"removeEventListener",m=t;!o||typeof o=="string"||(i[p]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:f}),o[p]("touchstart",e.onTouchStart,{passive:!1}),o[p]("pointerdown",e.onTouchStart,{passive:!1}),i[p]("touchmove",e.onTouchMove,{passive:!1,capture:f}),i[p]("pointermove",e.onTouchMove,{passive:!1,capture:f}),i[p]("touchend",e.onTouchEnd,{passive:!0}),i[p]("pointerup",e.onTouchEnd,{passive:!0}),i[p]("pointercancel",e.onTouchEnd,{passive:!0}),i[p]("touchcancel",e.onTouchEnd,{passive:!0}),i[p]("pointerout",e.onTouchEnd,{passive:!0}),i[p]("pointerleave",e.onTouchEnd,{passive:!0}),i[p]("contextmenu",e.onTouchEnd,{passive:!0}),(a.preventClicks||a.preventClicksPropagation)&&o[p]("click",e.onClick,!0),a.cssMode&&l[p]("scroll",e.onScroll),a.updateOnWindowResize?e[m](u.ios||u.android?"resize orientationchange observerUpdate":"resize observerUpdate",Wx,!0):e[m]("observerUpdate",Wx,!0),o[p]("load",e.onLoad,{capture:!0}))};function iL(){const e=this,{params:t}=e;e.onTouchStart=QO.bind(e),e.onTouchMove=WO.bind(e),e.onTouchEnd=ZO.bind(e),e.onDocumentTouchStart=nL.bind(e),t.cssMode&&(e.onScroll=eL.bind(e)),e.onClick=JO.bind(e),e.onLoad=tL.bind(e),zw(e,"on")}function aL(){zw(this,"off")}var rL={attachEvents:iL,detachEvents:aL};const Zx=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function sL(){const e=this,{realIndex:t,initialized:i,params:a,el:o}=e,l=a.breakpoints;if(!l||l&&Object.keys(l).length===0)return;const u=Yt(),f=a.breakpointsBase==="window"||!a.breakpointsBase?a.breakpointsBase:"container",p=["window","container"].includes(a.breakpointsBase)||!a.breakpointsBase?e.el:u.querySelector(a.breakpointsBase),m=e.getBreakpoint(l,f,p);if(!m||e.currentBreakpoint===m)return;const y=(m in l?l[m]:void 0)||e.originalParams,x=Zx(e,a),v=Zx(e,y),S=e.params.grabCursor,j=y.grabCursor,C=a.enabled;x&&!v?(o.classList.remove(`${a.containerModifierClass}grid`,`${a.containerModifierClass}grid-column`),e.emitContainerClasses()):!x&&v&&(o.classList.add(`${a.containerModifierClass}grid`),(y.grid.fill&&y.grid.fill==="column"||!y.grid.fill&&a.grid.fill==="column")&&o.classList.add(`${a.containerModifierClass}grid-column`),e.emitContainerClasses()),S&&!j?e.unsetGrabCursor():!S&&j&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(P=>{if(typeof y[P]>"u")return;const D=a[P]&&a[P].enabled,U=y[P]&&y[P].enabled;D&&!U&&e[P].disable(),!D&&U&&e[P].enable()});const k=y.direction&&y.direction!==a.direction,R=a.loop&&(y.slidesPerView!==a.slidesPerView||k),A=a.loop;k&&i&&e.changeDirection(),on(e.params,y);const V=e.params.enabled,M=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),C&&!V?e.disable():!C&&V&&e.enable(),e.currentBreakpoint=m,e.emit("_beforeBreakpoint",y),i&&(R?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!A&&M?(e.loopCreate(t),e.updateSlides()):A&&!M&&e.loopDestroy()),e.emit("breakpoint",y)}function oL(e,t,i){if(t===void 0&&(t="window"),!e||t==="container"&&!i)return;let a=!1;const o=At(),l=t==="window"?o.innerHeight:i.clientHeight,u=Object.keys(e).map(f=>{if(typeof f=="string"&&f.indexOf("@")===0){const p=parseFloat(f.substr(1));return{value:l*p,point:f}}return{value:f,point:f}});u.sort((f,p)=>parseInt(f.value,10)-parseInt(p.value,10));for(let f=0;f<u.length;f+=1){const{point:p,value:m}=u[f];t==="window"?o.matchMedia(`(min-width: ${m}px)`).matches&&(a=p):m<=i.clientWidth&&(a=p)}return a||"max"}var lL={setBreakpoint:sL,getBreakpoint:oL};function cL(e,t){const i=[];return e.forEach(a=>{typeof a=="object"?Object.keys(a).forEach(o=>{a[o]&&i.push(t+o)}):typeof a=="string"&&i.push(t+a)}),i}function uL(){const e=this,{classNames:t,params:i,rtl:a,el:o,device:l}=e,u=cL(["initialized",i.direction,{"free-mode":e.params.freeMode&&i.freeMode.enabled},{autoheight:i.autoHeight},{rtl:a},{grid:i.grid&&i.grid.rows>1},{"grid-column":i.grid&&i.grid.rows>1&&i.grid.fill==="column"},{android:l.android},{ios:l.ios},{"css-mode":i.cssMode},{centered:i.cssMode&&i.centeredSlides},{"watch-progress":i.watchSlidesProgress}],i.containerModifierClass);t.push(...u),o.classList.add(...t),e.emitContainerClasses()}function dL(){const e=this,{el:t,classNames:i}=e;!t||typeof t=="string"||(t.classList.remove(...i),e.emitContainerClasses())}var fL={addClasses:uL,removeClasses:dL};function pL(){const e=this,{isLocked:t,params:i}=e,{slidesOffsetBefore:a}=i;if(a){const o=e.slides.length-1,l=e.slidesGrid[o]+e.slidesSizesGrid[o]+a*2;e.isLocked=e.size>l}else e.isLocked=e.snapGrid.length===1;i.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),i.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var hL={checkOverflow:pL},sm={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function mL(e,t){return function(a){a===void 0&&(a={});const o=Object.keys(a)[0],l=a[o];if(typeof l!="object"||l===null){on(t,a);return}if(e[o]===!0&&(e[o]={enabled:!0}),o==="navigation"&&e[o]&&e[o].enabled&&!e[o].prevEl&&!e[o].nextEl&&(e[o].auto=!0),["pagination","scrollbar"].indexOf(o)>=0&&e[o]&&e[o].enabled&&!e[o].el&&(e[o].auto=!0),!(o in e&&"enabled"in l)){on(t,a);return}typeof e[o]=="object"&&!("enabled"in e[o])&&(e[o].enabled=!0),e[o]||(e[o]={enabled:!1}),on(t,a)}}const Qp={eventsEmitter:fO,update:TO,translate:MO,transition:LO,slide:GO,loop:qO,grabCursor:YO,events:rL,breakpoints:lL,checkOverflow:hL,classes:fL},Wp={};let dg=class vi{constructor(){let t,i;for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];o.length===1&&o[0].constructor&&Object.prototype.toString.call(o[0]).slice(8,-1)==="Object"?i=o[0]:[t,i]=o,i||(i={}),i=on({},i),t&&!i.el&&(i.el=t);const u=Yt();if(i.el&&typeof i.el=="string"&&u.querySelectorAll(i.el).length>1){const g=[];return u.querySelectorAll(i.el).forEach(y=>{const x=on({},i,{el:y});g.push(new vi(x))}),g}const f=this;f.__swiper__=!0,f.support=Ew(),f.device=Aw({userAgent:i.userAgent}),f.browser=Cw(),f.eventsListeners={},f.eventsAnyListeners=[],f.modules=[...f.__modules__],i.modules&&Array.isArray(i.modules)&&f.modules.push(...i.modules);const p={};f.modules.forEach(g=>{g({params:i,swiper:f,extendParams:mL(i,p),on:f.on.bind(f),once:f.once.bind(f),off:f.off.bind(f),emit:f.emit.bind(f)})});const m=on({},sm,p);return f.params=on({},m,Wp,i),f.originalParams=on({},f.params),f.passedParams=on({},i),f.params&&f.params.on&&Object.keys(f.params.on).forEach(g=>{f.on(g,f.params.on[g])}),f.params&&f.params.onAny&&f.onAny(f.params.onAny),Object.assign(f,{enabled:f.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return f.params.direction==="horizontal"},isVertical(){return f.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:f.params.allowSlideNext,allowSlidePrev:f.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:f.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:f.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),f.emit("_swiper"),f.params.init&&f.init(),f}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:i,params:a}=this,o=Si(i,`.${a.slideClass}, swiper-slide`),l=nm(o[0]);return nm(t)-l}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(i=>i.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:i,params:a}=t;t.slides=Si(i,`.${a.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,i){const a=this;t=Math.min(Math.max(t,0),1);const o=a.minTranslate(),u=(a.maxTranslate()-o)*t+o;a.translateTo(u,typeof i>"u"?0:i),a.updateActiveIndex(),a.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const i=t.el.className.split(" ").filter(a=>a.indexOf("swiper")===0||a.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",i.join(" "))}getSlideClasses(t){const i=this;return i.destroyed?"":t.className.split(" ").filter(a=>a.indexOf("swiper-slide")===0||a.indexOf(i.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const i=[];t.slides.forEach(a=>{const o=t.getSlideClasses(a);i.push({slideEl:a,classNames:o}),t.emit("_slideClass",a,o)}),t.emit("_slideClasses",i)}slidesPerViewDynamic(t,i){t===void 0&&(t="current"),i===void 0&&(i=!1);const a=this,{params:o,slides:l,slidesGrid:u,slidesSizesGrid:f,size:p,activeIndex:m}=a;let g=1;if(typeof o.slidesPerView=="number")return o.slidesPerView;if(o.centeredSlides){let y=l[m]?Math.ceil(l[m].swiperSlideSize):0,x;for(let v=m+1;v<l.length;v+=1)l[v]&&!x&&(y+=Math.ceil(l[v].swiperSlideSize),g+=1,y>p&&(x=!0));for(let v=m-1;v>=0;v-=1)l[v]&&!x&&(y+=l[v].swiperSlideSize,g+=1,y>p&&(x=!0))}else if(t==="current")for(let y=m+1;y<l.length;y+=1)(i?u[y]+f[y]-u[m]<p:u[y]-u[m]<p)&&(g+=1);else for(let y=m-1;y>=0;y-=1)u[m]-u[y]<p&&(g+=1);return g}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:i,params:a}=t;a.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(u=>{u.complete&&eu(t,u)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function o(){const u=t.rtlTranslate?t.translate*-1:t.translate,f=Math.min(Math.max(u,t.maxTranslate()),t.minTranslate());t.setTranslate(f),t.updateActiveIndex(),t.updateSlidesClasses()}let l;if(a.freeMode&&a.freeMode.enabled&&!a.cssMode)o(),a.autoHeight&&t.updateAutoHeight();else{if((a.slidesPerView==="auto"||a.slidesPerView>1)&&t.isEnd&&!a.centeredSlides){const u=t.virtual&&a.virtual.enabled?t.virtual.slides:t.slides;l=t.slideTo(u.length-1,0,!1,!0)}else l=t.slideTo(t.activeIndex,0,!1,!0);l||o()}a.watchOverflow&&i!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,i){i===void 0&&(i=!0);const a=this,o=a.params.direction;return t||(t=o==="horizontal"?"vertical":"horizontal"),t===o||t!=="horizontal"&&t!=="vertical"||(a.el.classList.remove(`${a.params.containerModifierClass}${o}`),a.el.classList.add(`${a.params.containerModifierClass}${t}`),a.emitContainerClasses(),a.params.direction=t,a.slides.forEach(l=>{t==="vertical"?l.style.width="":l.style.height=""}),a.emit("changeDirection"),i&&a.update()),a}changeLanguageDirection(t){const i=this;i.rtl&&t==="rtl"||!i.rtl&&t==="ltr"||(i.rtl=t==="rtl",i.rtlTranslate=i.params.direction==="horizontal"&&i.rtl,i.rtl?(i.el.classList.add(`${i.params.containerModifierClass}rtl`),i.el.dir="rtl"):(i.el.classList.remove(`${i.params.containerModifierClass}rtl`),i.el.dir="ltr"),i.update())}mount(t){const i=this;if(i.mounted)return!0;let a=t||i.params.el;if(typeof a=="string"&&(a=document.querySelector(a)),!a)return!1;a.swiper=i,a.parentNode&&a.parentNode.host&&a.parentNode.host.nodeName===i.params.swiperElementNodeName.toUpperCase()&&(i.isElement=!0);const o=()=>`.${(i.params.wrapperClass||"").trim().split(" ").join(".")}`;let u=a&&a.shadowRoot&&a.shadowRoot.querySelector?a.shadowRoot.querySelector(o()):Si(a,o())[0];return!u&&i.params.createElements&&(u=ku("div",i.params.wrapperClass),a.append(u),Si(a,`.${i.params.slideClass}`).forEach(f=>{u.append(f)})),Object.assign(i,{el:a,wrapperEl:u,slidesEl:i.isElement&&!a.parentNode.host.slideSlots?a.parentNode.host:u,hostEl:i.isElement?a.parentNode.host:a,mounted:!0,rtl:a.dir.toLowerCase()==="rtl"||ta(a,"direction")==="rtl",rtlTranslate:i.params.direction==="horizontal"&&(a.dir.toLowerCase()==="rtl"||ta(a,"direction")==="rtl"),wrongRTL:ta(u,"display")==="-webkit-box"}),!0}init(t){const i=this;if(i.initialized||i.mount(t)===!1)return i;i.emit("beforeInit"),i.params.breakpoints&&i.setBreakpoint(),i.addClasses(),i.updateSize(),i.updateSlides(),i.params.watchOverflow&&i.checkOverflow(),i.params.grabCursor&&i.enabled&&i.setGrabCursor(),i.params.loop&&i.virtual&&i.params.virtual.enabled?i.slideTo(i.params.initialSlide+i.virtual.slidesBefore,0,i.params.runCallbacksOnInit,!1,!0):i.slideTo(i.params.initialSlide,0,i.params.runCallbacksOnInit,!1,!0),i.params.loop&&i.loopCreate(void 0,!0),i.attachEvents();const o=[...i.el.querySelectorAll('[loading="lazy"]')];return i.isElement&&o.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),o.forEach(l=>{l.complete?eu(i,l):l.addEventListener("load",u=>{eu(i,u.target)})}),rm(i),i.initialized=!0,rm(i),i.emit("init"),i.emit("afterInit"),i}destroy(t,i){t===void 0&&(t=!0),i===void 0&&(i=!0);const a=this,{params:o,el:l,wrapperEl:u,slides:f}=a;return typeof a.params>"u"||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),o.loop&&a.loopDestroy(),i&&(a.removeClasses(),l&&typeof l!="string"&&l.removeAttribute("style"),u&&u.removeAttribute("style"),f&&f.length&&f.forEach(p=>{p.classList.remove(o.slideVisibleClass,o.slideFullyVisibleClass,o.slideActiveClass,o.slideNextClass,o.slidePrevClass),p.removeAttribute("style"),p.removeAttribute("data-swiper-slide-index")})),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(p=>{a.off(p)}),t!==!1&&(a.el&&typeof a.el!="string"&&(a.el.swiper=null),WR(a)),a.destroyed=!0),null}static extendDefaults(t){on(Wp,t)}static get extendedDefaults(){return Wp}static get defaults(){return sm}static installModule(t){vi.prototype.__modules__||(vi.prototype.__modules__=[]);const i=vi.prototype.__modules__;typeof t=="function"&&i.indexOf(t)<0&&i.push(t)}static use(t){return Array.isArray(t)?(t.forEach(i=>vi.installModule(i)),vi):(vi.installModule(t),vi)}};Object.keys(Qp).forEach(e=>{Object.keys(Qp[e]).forEach(t=>{dg.prototype[t]=Qp[e][t]})});dg.use([uO,dO]);const Rw=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Ga(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function $r(e,t){const i=["__proto__","constructor","prototype"];Object.keys(t).filter(a=>i.indexOf(a)<0).forEach(a=>{typeof e[a]>"u"?e[a]=t[a]:Ga(t[a])&&Ga(e[a])&&Object.keys(t[a]).length>0?t[a].__swiper__?e[a]=t[a]:$r(e[a],t[a]):e[a]=t[a]})}function Ow(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Lw(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function Dw(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function Pw(e){e===void 0&&(e="");const t=e.split(" ").map(a=>a.trim()).filter(a=>!!a),i=[];return t.forEach(a=>{i.indexOf(a)<0&&i.push(a)}),i.join(" ")}function gL(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function bL(e){let{swiper:t,slides:i,passedParams:a,changedParams:o,nextEl:l,prevEl:u,scrollbarEl:f,paginationEl:p}=e;const m=o.filter(G=>G!=="children"&&G!=="direction"&&G!=="wrapperClass"),{params:g,pagination:y,navigation:x,scrollbar:v,virtual:S,thumbs:j}=t;let C,k,R,A,V,M,P,D;o.includes("thumbs")&&a.thumbs&&a.thumbs.swiper&&!a.thumbs.swiper.destroyed&&g.thumbs&&(!g.thumbs.swiper||g.thumbs.swiper.destroyed)&&(C=!0),o.includes("controller")&&a.controller&&a.controller.control&&g.controller&&!g.controller.control&&(k=!0),o.includes("pagination")&&a.pagination&&(a.pagination.el||p)&&(g.pagination||g.pagination===!1)&&y&&!y.el&&(R=!0),o.includes("scrollbar")&&a.scrollbar&&(a.scrollbar.el||f)&&(g.scrollbar||g.scrollbar===!1)&&v&&!v.el&&(A=!0),o.includes("navigation")&&a.navigation&&(a.navigation.prevEl||u)&&(a.navigation.nextEl||l)&&(g.navigation||g.navigation===!1)&&x&&!x.prevEl&&!x.nextEl&&(V=!0);const U=G=>{t[G]&&(t[G].destroy(),G==="navigation"?(t.isElement&&(t[G].prevEl.remove(),t[G].nextEl.remove()),g[G].prevEl=void 0,g[G].nextEl=void 0,t[G].prevEl=void 0,t[G].nextEl=void 0):(t.isElement&&t[G].el.remove(),g[G].el=void 0,t[G].el=void 0))};o.includes("loop")&&t.isElement&&(g.loop&&!a.loop?M=!0:!g.loop&&a.loop?P=!0:D=!0),m.forEach(G=>{if(Ga(g[G])&&Ga(a[G]))Object.assign(g[G],a[G]),(G==="navigation"||G==="pagination"||G==="scrollbar")&&"enabled"in a[G]&&!a[G].enabled&&U(G);else{const Y=a[G];(Y===!0||Y===!1)&&(G==="navigation"||G==="pagination"||G==="scrollbar")?Y===!1&&U(G):g[G]=a[G]}}),m.includes("controller")&&!k&&t.controller&&t.controller.control&&g.controller&&g.controller.control&&(t.controller.control=g.controller.control),o.includes("children")&&i&&S&&g.virtual.enabled?(S.slides=i,S.update(!0)):o.includes("virtual")&&S&&g.virtual.enabled&&(i&&(S.slides=i),S.update(!0)),o.includes("children")&&i&&g.loop&&(D=!0),C&&j.init()&&j.update(!0),k&&(t.controller.control=g.controller.control),R&&(t.isElement&&(!p||typeof p=="string")&&(p=document.createElement("div"),p.classList.add("swiper-pagination"),p.part.add("pagination"),t.el.appendChild(p)),p&&(g.pagination.el=p),y.init(),y.render(),y.update()),A&&(t.isElement&&(!f||typeof f=="string")&&(f=document.createElement("div"),f.classList.add("swiper-scrollbar"),f.part.add("scrollbar"),t.el.appendChild(f)),f&&(g.scrollbar.el=f),v.init(),v.updateSize(),v.setTranslate()),V&&(t.isElement&&((!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-button-next"),am(l,t.hostEl.constructor.nextButtonSvg),l.part.add("button-next"),t.el.appendChild(l)),(!u||typeof u=="string")&&(u=document.createElement("div"),u.classList.add("swiper-button-prev"),am(u,t.hostEl.constructor.prevButtonSvg),u.part.add("button-prev"),t.el.appendChild(u))),l&&(g.navigation.nextEl=l),u&&(g.navigation.prevEl=u),x.init(),x.update()),o.includes("allowSlideNext")&&(t.allowSlideNext=a.allowSlideNext),o.includes("allowSlidePrev")&&(t.allowSlidePrev=a.allowSlidePrev),o.includes("direction")&&t.changeDirection(a.direction,!1),(M||D)&&t.loopDestroy(),(P||D)&&t.loopCreate(),t.update()}function yL(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const i={on:{}},a={},o={};$r(i,sm),i._emitClasses=!0,i.init=!1;const l={},u=Rw.map(p=>p.replace(/_/,"")),f=Object.assign({},e);return Object.keys(f).forEach(p=>{typeof e[p]>"u"||(u.indexOf(p)>=0?Ga(e[p])?(i[p]={},o[p]={},$r(i[p],e[p]),$r(o[p],e[p])):(i[p]=e[p],o[p]=e[p]):p.search(/on[A-Z]/)===0&&typeof e[p]=="function"?t?a[`${p[2].toLowerCase()}${p.substr(3)}`]=e[p]:i.on[`${p[2].toLowerCase()}${p.substr(3)}`]=e[p]:l[p]=e[p])}),["navigation","pagination","scrollbar"].forEach(p=>{i[p]===!0&&(i[p]={}),i[p]===!1&&delete i[p]}),{params:i,passedParams:o,rest:l,events:a}}function xL(e,t){let{el:i,nextEl:a,prevEl:o,paginationEl:l,scrollbarEl:u,swiper:f}=e;Ow(t)&&a&&o&&(f.params.navigation.nextEl=a,f.originalParams.navigation.nextEl=a,f.params.navigation.prevEl=o,f.originalParams.navigation.prevEl=o),Lw(t)&&l&&(f.params.pagination.el=l,f.originalParams.pagination.el=l),Dw(t)&&u&&(f.params.scrollbar.el=u,f.originalParams.scrollbar.el=u),f.init(i)}function vL(e,t,i,a,o){const l=[];if(!t)return l;const u=p=>{l.indexOf(p)<0&&l.push(p)};if(i&&a){const p=a.map(o),m=i.map(o);p.join("")!==m.join("")&&u("children"),a.length!==i.length&&u("children")}return Rw.filter(p=>p[0]==="_").map(p=>p.replace(/_/,"")).forEach(p=>{if(p in e&&p in t)if(Ga(e[p])&&Ga(t[p])){const m=Object.keys(e[p]),g=Object.keys(t[p]);m.length!==g.length?u(p):(m.forEach(y=>{e[p][y]!==t[p][y]&&u(p)}),g.forEach(y=>{e[p][y]!==t[p][y]&&u(p)}))}else e[p]!==t[p]&&u(p)}),l}const wL=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Eu(){return Eu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},Eu.apply(this,arguments)}function Nw(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function Vw(e){const t=[];return Ae.Children.toArray(e).forEach(i=>{Nw(i)?t.push(i):i.props&&i.props.children&&Vw(i.props.children).forEach(a=>t.push(a))}),t}function SL(e){const t=[],i={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Ae.Children.toArray(e).forEach(a=>{if(Nw(a))t.push(a);else if(a.props&&a.props.slot&&i[a.props.slot])i[a.props.slot].push(a);else if(a.props&&a.props.children){const o=Vw(a.props.children);o.length>0?o.forEach(l=>t.push(l)):i["container-end"].push(a)}else i["container-end"].push(a)}),{slides:t,slots:i}}function TL(e,t,i){if(!i)return null;const a=g=>{let y=g;return g<0?y=t.length+g:y>=t.length&&(y=y-t.length),y},o=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${i.offset}px`}:{top:`${i.offset}px`},{from:l,to:u}=i,f=e.params.loop?-t.length:0,p=e.params.loop?t.length*2:t.length,m=[];for(let g=f;g<p;g+=1)g>=l&&g<=u&&m.push(t[a(g)]);return m.map((g,y)=>Ae.cloneElement(g,{swiper:e,style:o,key:g.props.virtualIndex||g.key||`slide-${y}`}))}function Do(e,t){return typeof window>"u"?E.useEffect(e,t):E.useLayoutEffect(e,t)}const Jx=E.createContext(null),jL=E.createContext(null),Bw=E.forwardRef(function(e,t){let{className:i,tag:a="div",wrapperTag:o="div",children:l,onSwiper:u,...f}=e===void 0?{}:e,p=!1;const[m,g]=E.useState("swiper"),[y,x]=E.useState(null),[v,S]=E.useState(!1),j=E.useRef(!1),C=E.useRef(null),k=E.useRef(null),R=E.useRef(null),A=E.useRef(null),V=E.useRef(null),M=E.useRef(null),P=E.useRef(null),D=E.useRef(null),{params:U,passedParams:G,rest:Y,events:Z}=yL(f),{slides:ne,slots:le}=SL(l),ce=()=>{S(!v)};Object.assign(U.on,{_containerClasses(Q,z){g(z)}});const ue=()=>{Object.assign(U.on,Z),p=!0;const Q={...U};if(delete Q.wrapperClass,k.current=new dg(Q),k.current.virtual&&k.current.params.virtual.enabled){k.current.virtual.slides=ne;const z={cache:!1,slides:ne,renderExternal:x,renderExternalUpdate:!1};$r(k.current.params.virtual,z),$r(k.current.originalParams.virtual,z)}};C.current||ue(),k.current&&k.current.on("_beforeBreakpoint",ce);const H=()=>{p||!Z||!k.current||Object.keys(Z).forEach(Q=>{k.current.on(Q,Z[Q])})},L=()=>{!Z||!k.current||Object.keys(Z).forEach(Q=>{k.current.off(Q,Z[Q])})};E.useEffect(()=>()=>{k.current&&k.current.off("_beforeBreakpoint",ce)}),E.useEffect(()=>{!j.current&&k.current&&(k.current.emitSlidesClasses(),j.current=!0)}),Do(()=>{if(t&&(t.current=C.current),!!C.current)return k.current.destroyed&&ue(),xL({el:C.current,nextEl:V.current,prevEl:M.current,paginationEl:P.current,scrollbarEl:D.current,swiper:k.current},U),u&&!k.current.destroyed&&u(k.current),()=>{k.current&&!k.current.destroyed&&k.current.destroy(!0,!1)}},[]),Do(()=>{H();const Q=vL(G,R.current,ne,A.current,z=>z.key);return R.current=G,A.current=ne,Q.length&&k.current&&!k.current.destroyed&&bL({swiper:k.current,slides:ne,passedParams:G,changedParams:Q,nextEl:V.current,prevEl:M.current,scrollbarEl:D.current,paginationEl:P.current}),()=>{L()}}),Do(()=>{wL(k.current)},[y]);function B(){return U.virtual?TL(k.current,ne,y):ne.map((Q,z)=>Ae.cloneElement(Q,{swiper:k.current,swiperSlideIndex:z}))}return Ae.createElement(a,Eu({ref:C,className:Pw(`${m}${i?` ${i}`:""}`)},Y),Ae.createElement(jL.Provider,{value:k.current},le["container-start"],Ae.createElement(o,{className:gL(U.wrapperClass)},le["wrapper-start"],B(),le["wrapper-end"]),Ow(U)&&Ae.createElement(Ae.Fragment,null,Ae.createElement("div",{ref:M,className:"swiper-button-prev"}),Ae.createElement("div",{ref:V,className:"swiper-button-next"})),Dw(U)&&Ae.createElement("div",{ref:D,className:"swiper-scrollbar"}),Lw(U)&&Ae.createElement("div",{ref:P,className:"swiper-pagination"}),le["container-end"]))});Bw.displayName="Swiper";const _w=E.forwardRef(function(e,t){let{tag:i="div",children:a,className:o="",swiper:l,zoom:u,lazy:f,virtualIndex:p,swiperSlideIndex:m,...g}=e===void 0?{}:e;const y=E.useRef(null),[x,v]=E.useState("swiper-slide"),[S,j]=E.useState(!1);function C(V,M,P){M===y.current&&v(P)}Do(()=>{if(typeof m<"u"&&(y.current.swiperSlideIndex=m),t&&(t.current=y.current),!(!y.current||!l)){if(l.destroyed){x!=="swiper-slide"&&v("swiper-slide");return}return l.on("_slideClass",C),()=>{l&&l.off("_slideClass",C)}}}),Do(()=>{l&&y.current&&!l.destroyed&&v(l.getSlideClasses(y.current))},[l]);const k={isActive:x.indexOf("swiper-slide-active")>=0,isVisible:x.indexOf("swiper-slide-visible")>=0,isPrev:x.indexOf("swiper-slide-prev")>=0,isNext:x.indexOf("swiper-slide-next")>=0},R=()=>typeof a=="function"?a(k):a,A=()=>{j(!0)};return Ae.createElement(i,Eu({ref:y,className:Pw(`${x}${o?` ${o}`:""}`),"data-swiper-slide-index":p,onLoad:A},g),u&&Ae.createElement(Jx.Provider,{value:k},Ae.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof u=="number"?u:void 0},R(),f&&!S&&Ae.createElement("div",{className:"swiper-lazy-preloader"}))),!u&&Ae.createElement(Jx.Provider,{value:k},R(),f&&!S&&Ae.createElement("div",{className:"swiper-lazy-preloader"})))});_w.displayName="SwiperSlide";function kL(e){let{swiper:t,extendParams:i,on:a,emit:o}=e;const l=Yt(),u=At();t.keyboard={enabled:!1},i({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function f(g){if(!t.enabled)return;const{rtlTranslate:y}=t;let x=g;x.originalEvent&&(x=x.originalEvent);const v=x.keyCode||x.charCode,S=t.params.keyboard.pageUpDown,j=S&&v===33,C=S&&v===34,k=v===37,R=v===39,A=v===38,V=v===40;if(!t.allowSlideNext&&(t.isHorizontal()&&R||t.isVertical()&&V||C)||!t.allowSlidePrev&&(t.isHorizontal()&&k||t.isVertical()&&A||j))return!1;if(!(x.shiftKey||x.altKey||x.ctrlKey||x.metaKey)&&!(l.activeElement&&(l.activeElement.isContentEditable||l.activeElement.nodeName&&(l.activeElement.nodeName.toLowerCase()==="input"||l.activeElement.nodeName.toLowerCase()==="textarea")))){if(t.params.keyboard.onlyInViewport&&(j||C||k||R||A||V)){let M=!1;if(im(t.el,`.${t.params.slideClass}, swiper-slide`).length>0&&im(t.el,`.${t.params.slideActiveClass}`).length===0)return;const P=t.el,D=P.clientWidth,U=P.clientHeight,G=u.innerWidth,Y=u.innerHeight,Z=iO(P);y&&(Z.left-=P.scrollLeft);const ne=[[Z.left,Z.top],[Z.left+D,Z.top],[Z.left,Z.top+U],[Z.left+D,Z.top+U]];for(let le=0;le<ne.length;le+=1){const ce=ne[le];if(ce[0]>=0&&ce[0]<=G&&ce[1]>=0&&ce[1]<=Y){if(ce[0]===0&&ce[1]===0)continue;M=!0}}if(!M)return}t.isHorizontal()?((j||C||k||R)&&(x.preventDefault?x.preventDefault():x.returnValue=!1),((C||R)&&!y||(j||k)&&y)&&t.slideNext(),((j||k)&&!y||(C||R)&&y)&&t.slidePrev()):((j||C||A||V)&&(x.preventDefault?x.preventDefault():x.returnValue=!1),(C||V)&&t.slideNext(),(j||A)&&t.slidePrev()),o("keyPress",v)}}function p(){t.keyboard.enabled||(l.addEventListener("keydown",f),t.keyboard.enabled=!0)}function m(){t.keyboard.enabled&&(l.removeEventListener("keydown",f),t.keyboard.enabled=!1)}a("init",()=>{t.params.keyboard.enabled&&p()}),a("destroy",()=>{t.keyboard.enabled&&m()}),Object.assign(t.keyboard,{enable:p,disable:m})}function Zp(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function EL(e){let{swiper:t,extendParams:i,on:a}=e;i({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,containerRole:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null,scrollOnFocus:!0}}),t.a11y={clicked:!1};let o=null,l,u,f=new Date().getTime();function p(L){const B=o;B.length!==0&&am(B,L)}function m(L){const B=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(L).replace(/x/g,B)}function g(L){L=yt(L),L.forEach(B=>{B.setAttribute("tabIndex","0")})}function y(L){L=yt(L),L.forEach(B=>{B.setAttribute("tabIndex","-1")})}function x(L,B){L=yt(L),L.forEach(Q=>{Q.setAttribute("role",B)})}function v(L,B){L=yt(L),L.forEach(Q=>{Q.setAttribute("aria-roledescription",B)})}function S(L,B){L=yt(L),L.forEach(Q=>{Q.setAttribute("aria-controls",B)})}function j(L,B){L=yt(L),L.forEach(Q=>{Q.setAttribute("aria-label",B)})}function C(L,B){L=yt(L),L.forEach(Q=>{Q.setAttribute("id",B)})}function k(L,B){L=yt(L),L.forEach(Q=>{Q.setAttribute("aria-live",B)})}function R(L){L=yt(L),L.forEach(B=>{B.setAttribute("aria-disabled",!0)})}function A(L){L=yt(L),L.forEach(B=>{B.setAttribute("aria-disabled",!1)})}function V(L){if(L.keyCode!==13&&L.keyCode!==32)return;const B=t.params.a11y,Q=L.target;if(!(t.pagination&&t.pagination.el&&(Q===t.pagination.el||t.pagination.el.contains(L.target))&&!L.target.matches(Zp(t.params.pagination.bulletClass)))){if(t.navigation&&t.navigation.prevEl&&t.navigation.nextEl){const z=yt(t.navigation.prevEl);yt(t.navigation.nextEl).includes(Q)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?p(B.lastSlideMessage):p(B.nextSlideMessage)),z.includes(Q)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?p(B.firstSlideMessage):p(B.prevSlideMessage))}t.pagination&&Q.matches(Zp(t.params.pagination.bulletClass))&&Q.click()}}function M(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{nextEl:L,prevEl:B}=t.navigation;B&&(t.isBeginning?(R(B),y(B)):(A(B),g(B))),L&&(t.isEnd?(R(L),y(L)):(A(L),g(L)))}function P(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function D(){return P()&&t.params.pagination.clickable}function U(){const L=t.params.a11y;P()&&t.pagination.bullets.forEach(B=>{t.params.pagination.clickable&&(g(B),t.params.pagination.renderBullet||(x(B,"button"),j(B,L.paginationBulletMessage.replace(/\{\{index\}\}/,nm(B)+1)))),B.matches(Zp(t.params.pagination.bulletActiveClass))?B.setAttribute("aria-current","true"):B.removeAttribute("aria-current")})}const G=(L,B,Q)=>{g(L),L.tagName!=="BUTTON"&&(x(L,"button"),L.addEventListener("keydown",V)),j(L,Q),S(L,B)},Y=L=>{u&&u!==L.target&&!u.contains(L.target)&&(l=!0),t.a11y.clicked=!0},Z=()=>{l=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{t.destroyed||(t.a11y.clicked=!1)})})},ne=L=>{f=new Date().getTime()},le=L=>{if(t.a11y.clicked||!t.params.a11y.scrollOnFocus||new Date().getTime()-f<100)return;const B=L.target.closest(`.${t.params.slideClass}, swiper-slide`);if(!B||!t.slides.includes(B))return;u=B;const Q=t.slides.indexOf(B)===t.activeIndex,z=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(B);Q||z||L.sourceCapabilities&&L.sourceCapabilities.firesTouchEvents||(t.isHorizontal()?t.el.scrollLeft=0:t.el.scrollTop=0,requestAnimationFrame(()=>{l||(t.params.loop?t.slideToLoop(t.getSlideIndexWhenGrid(parseInt(B.getAttribute("data-swiper-slide-index"))),0):t.slideTo(t.getSlideIndexWhenGrid(t.slides.indexOf(B)),0),l=!1)}))},ce=()=>{const L=t.params.a11y;L.itemRoleDescriptionMessage&&v(t.slides,L.itemRoleDescriptionMessage),L.slideRole&&x(t.slides,L.slideRole);const B=t.slides.length;L.slideLabelMessage&&t.slides.forEach((Q,z)=>{const X=t.params.loop?parseInt(Q.getAttribute("data-swiper-slide-index"),10):z,te=L.slideLabelMessage.replace(/\{\{index\}\}/,X+1).replace(/\{\{slidesLength\}\}/,B);j(Q,te)})},ue=()=>{const L=t.params.a11y;t.el.append(o);const B=t.el;L.containerRoleDescriptionMessage&&v(B,L.containerRoleDescriptionMessage),L.containerMessage&&j(B,L.containerMessage),L.containerRole&&x(B,L.containerRole);const Q=t.wrapperEl,z=L.id||Q.getAttribute("id")||`swiper-wrapper-${m(16)}`,X=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";C(Q,z),k(Q,X),ce();let{nextEl:te,prevEl:ie}=t.navigation?t.navigation:{};te=yt(te),ie=yt(ie),te&&te.forEach(ye=>G(ye,z,L.nextSlideMessage)),ie&&ie.forEach(ye=>G(ye,z,L.prevSlideMessage)),D()&&yt(t.pagination.el).forEach(de=>{de.addEventListener("keydown",V)}),Yt().addEventListener("visibilitychange",ne),t.el.addEventListener("focus",le,!0),t.el.addEventListener("focus",le,!0),t.el.addEventListener("pointerdown",Y,!0),t.el.addEventListener("pointerup",Z,!0)};function H(){o&&o.remove();let{nextEl:L,prevEl:B}=t.navigation?t.navigation:{};L=yt(L),B=yt(B),L&&L.forEach(z=>z.removeEventListener("keydown",V)),B&&B.forEach(z=>z.removeEventListener("keydown",V)),D()&&yt(t.pagination.el).forEach(X=>{X.removeEventListener("keydown",V)}),Yt().removeEventListener("visibilitychange",ne),t.el&&typeof t.el!="string"&&(t.el.removeEventListener("focus",le,!0),t.el.removeEventListener("pointerdown",Y,!0),t.el.removeEventListener("pointerup",Z,!0))}a("beforeInit",()=>{o=ku("span",t.params.a11y.notificationClass),o.setAttribute("aria-live","assertive"),o.setAttribute("aria-atomic","true")}),a("afterInit",()=>{t.params.a11y.enabled&&ue()}),a("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{t.params.a11y.enabled&&ce()}),a("fromEdge toEdge afterInit lock unlock",()=>{t.params.a11y.enabled&&M()}),a("paginationUpdate",()=>{t.params.a11y.enabled&&U()}),a("destroy",()=>{t.params.a11y.enabled&&H()})}function AL(e){let{swiper:t,extendParams:i,on:a,emit:o,params:l}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let u,f,p=l&&l.autoplay?l.autoplay.delay:3e3,m=l&&l.autoplay?l.autoplay.delay:3e3,g,y=new Date().getTime(),x,v,S,j,C,k,R;function A(B){!t||t.destroyed||!t.wrapperEl||B.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",A),!(R||B.detail&&B.detail.bySwiperTouchMove)&&Y())}const V=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?x=!0:x&&(m=g,x=!1);const B=t.autoplay.paused?g:y+m-new Date().getTime();t.autoplay.timeLeft=B,o("autoplayTimeLeft",B,B/p),f=requestAnimationFrame(()=>{V()})},M=()=>{let B;return t.virtual&&t.params.virtual.enabled?B=t.slides.find(z=>z.classList.contains("swiper-slide-active")):B=t.slides[t.activeIndex],B?parseInt(B.getAttribute("data-swiper-autoplay"),10):void 0},P=B=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(f),V();let Q=typeof B>"u"?t.params.autoplay.delay:B;p=t.params.autoplay.delay,m=t.params.autoplay.delay;const z=M();!Number.isNaN(z)&&z>0&&typeof B>"u"&&(Q=z,p=z,m=z),g=Q;const X=t.params.speed,te=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(X,!0,!0),o("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,X,!0,!0),o("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(X,!0,!0),o("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,X,!0,!0),o("autoplay")),t.params.cssMode&&(y=new Date().getTime(),requestAnimationFrame(()=>{P()})))};return Q>0?(clearTimeout(u),u=setTimeout(()=>{te()},Q)):requestAnimationFrame(()=>{te()}),Q},D=()=>{y=new Date().getTime(),t.autoplay.running=!0,P(),o("autoplayStart")},U=()=>{t.autoplay.running=!1,clearTimeout(u),cancelAnimationFrame(f),o("autoplayStop")},G=(B,Q)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(u),B||(k=!0);const z=()=>{o("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",A):Y()};if(t.autoplay.paused=!0,Q){C&&(g=t.params.autoplay.delay),C=!1,z();return}g=(g||t.params.autoplay.delay)-(new Date().getTime()-y),!(t.isEnd&&g<0&&!t.params.loop)&&(g<0&&(g=0),z())},Y=()=>{t.isEnd&&g<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(y=new Date().getTime(),k?(k=!1,P(g)):P(),t.autoplay.paused=!1,o("autoplayResume"))},Z=()=>{if(t.destroyed||!t.autoplay.running)return;const B=Yt();B.visibilityState==="hidden"&&(k=!0,G(!0)),B.visibilityState==="visible"&&Y()},ne=B=>{B.pointerType==="mouse"&&(k=!0,R=!0,!(t.animating||t.autoplay.paused)&&G(!0))},le=B=>{B.pointerType==="mouse"&&(R=!1,t.autoplay.paused&&Y())},ce=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",ne),t.el.addEventListener("pointerleave",le))},ue=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",ne),t.el.removeEventListener("pointerleave",le))},H=()=>{Yt().addEventListener("visibilitychange",Z)},L=()=>{Yt().removeEventListener("visibilitychange",Z)};a("init",()=>{t.params.autoplay.enabled&&(ce(),H(),D())}),a("destroy",()=>{ue(),L(),t.autoplay.running&&U()}),a("_freeModeStaticRelease",()=>{(S||k)&&Y()}),a("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?U():G(!0,!0)}),a("beforeTransitionStart",(B,Q,z)=>{t.destroyed||!t.autoplay.running||(z||!t.params.autoplay.disableOnInteraction?G(!0,!0):U())}),a("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){U();return}v=!0,S=!1,k=!1,j=setTimeout(()=>{k=!0,S=!0,G(!0)},200)}}),a("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!v)){if(clearTimeout(j),clearTimeout(u),t.params.autoplay.disableOnInteraction){S=!1,v=!1;return}S&&t.params.cssMode&&Y(),S=!1,v=!1}}),a("slideChange",()=>{t.destroyed||!t.autoplay.running||(C=!0)}),Object.assign(t.autoplay,{start:D,stop:U,pause:G,resume:Y})}function CL(e){const{effect:t,swiper:i,on:a,setTranslate:o,setTransition:l,overwriteParams:u,perspective:f,recreateShadows:p,getEffectParams:m}=e;a("beforeInit",()=>{if(i.params.effect!==t)return;i.classNames.push(`${i.params.containerModifierClass}${t}`),f&&f()&&i.classNames.push(`${i.params.containerModifierClass}3d`);const y=u?u():{};Object.assign(i.params,y),Object.assign(i.originalParams,y)}),a("setTranslate _virtualUpdated",()=>{i.params.effect===t&&o()}),a("setTransition",(y,x)=>{i.params.effect===t&&l(x)}),a("transitionEnd",()=>{if(i.params.effect===t&&p){if(!m||!m().slideShadows)return;i.slides.forEach(y=>{y.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(x=>x.remove())}),p()}});let g;a("virtualUpdate",()=>{i.params.effect===t&&(i.slides.length||(g=!0),requestAnimationFrame(()=>{g&&i.slides&&i.slides.length&&(o(),g=!1)}))})}function ML(e,t){const i=kw(t);return i!==t&&(i.style.backfaceVisibility="hidden",i.style["-webkit-backface-visibility"]="hidden"),i}function zL(e){let{swiper:t,duration:i,transformElements:a}=e;const{activeIndex:o}=t;if(t.params.virtualTranslate&&i!==0){let l=!1,u;u=a,u.forEach(f=>{sO(f,()=>{if(l||!t||t.destroyed)return;l=!0,t.animating=!1;const p=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(p)})})}}function RL(e){let{swiper:t,extendParams:i,on:a}=e;i({fadeEffect:{crossFade:!1}}),CL({effect:"fade",swiper:t,on:a,setTranslate:()=>{const{slides:u}=t,f=t.params.fadeEffect;for(let p=0;p<u.length;p+=1){const m=t.slides[p];let y=-m.swiperSlideOffset;t.params.virtualTranslate||(y-=t.translate);let x=0;t.isHorizontal()||(x=y,y=0);const v=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(m.progress),0):1+Math.min(Math.max(m.progress,-1),0),S=ML(f,m);S.style.opacity=v,S.style.transform=`translate3d(${y}px, ${x}px, 0px)`}},setTransition:u=>{const f=t.slides.map(p=>kw(p));f.forEach(p=>{p.style.transitionDuration=`${u}ms`}),zL({swiper:t,duration:u,transformElements:f})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})}const OL=q.div`
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
`,LL=()=>{const{t:e}=$e(),[t,i]=E.useState(0),a=E.useRef(null),o=l=>{var u;(u=a.current)==null||u.slideTo(l)};return d.jsx(OL,{children:d.jsxs(ae.section,{className:"section sticky-process",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.18},variants:ft,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.process.title")}),d.jsx("p",{className:"section-description",children:e("home.process.desc")})]}),d.jsxs("div",{className:"sticky-process-grid",children:[d.jsx(ae.div,{className:"sticky-steps",role:"tablist","aria-label":e("home.process.aria"),variants:Lt,children:$p.map((l,u)=>d.jsxs(ae.button,{className:`sticky-step ${t===u?"active":""}`,onClick:()=>o(u),type:"button",role:"tab","aria-selected":t===u,variants:Fe,children:[d.jsx("span",{children:l.step}),d.jsx("p",{children:e(`home.process.steps.s${u+1}.title`)})]},l.step))}),d.jsx(ae.article,{className:"sticky-process-card card",initial:{opacity:0,y:10,scale:.99},animate:{opacity:1,y:0,scale:1},transition:{duration:.32,ease:kn},children:d.jsx(Bw,{modules:[kL,EL,RL,AL],effect:"fade",fadeEffect:{crossFade:!0},slidesPerView:1,speed:420,keyboard:{enabled:!0},autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},onSwiper:l=>{a.current=l,i(l.activeIndex)},onSlideChange:l=>i(l.activeIndex),className:"process-swiper",children:$p.map((l,u)=>d.jsx(_w,{children:d.jsx("div",{className:"process-slide",style:{"--process-bg":`url(${l.image})`},children:d.jsxs("div",{className:"process-content",children:[d.jsxs("div",{className:"process-kicker",children:[d.jsx("span",{className:"process-chip",children:l.step}),d.jsx("span",{className:"process-chip subtle",children:e("home.process.stage")})]}),d.jsx("h3",{children:e(`home.process.steps.s${u+1}.title`)}),d.jsx("p",{children:e(`home.process.steps.s${u+1}.text`)}),d.jsxs("div",{className:"process-nav",children:[d.jsx("button",{type:"button",className:"nav-btn",onClick:()=>{var f;return(f=a.current)==null?void 0:f.slidePrev()},disabled:t===0,children:e("home.process.nav.prev")}),d.jsx("button",{type:"button",className:"nav-btn primary",onClick:()=>{var f;return(f=a.current)==null?void 0:f.slideNext()},disabled:t===$p.length-1,children:e("home.process.nav.next")})]})]})})},`${l.step}-${u}`))})})]})]})})},DL=({poster:e,video:t,title:i})=>{const a=E.useRef(null),o=async()=>{const u=a.current;if(u)try{u.currentTime=0,await u.play()}catch{}},l=()=>{const u=a.current;u&&(u.pause(),u.currentTime=0)};return d.jsxs("div",{className:"project-preview",onMouseEnter:o,onMouseLeave:l,onFocus:o,onBlur:l,tabIndex:0,"aria-label":i,children:[d.jsx("img",{src:e,alt:"",loading:"lazy"}),d.jsx("video",{ref:a,muted:!0,loop:!0,playsInline:!0,preload:"none",children:d.jsx("source",{src:t,type:"video/webm"})}),d.jsx("div",{className:"preview-overlay"})]})},PL=q.div`
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
`,NL=()=>{const{t:e}=$e();return d.jsx(PL,{children:d.jsxs(ae.section,{className:"section",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:ft,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.projects.title")}),d.jsx("p",{className:"section-description",children:e("home.projects.desc")})]}),d.jsx(ae.div,{className:"grid-2 projects-grid",variants:Lt,children:Iz.map((t,i)=>d.jsxs(ae.article,{className:"card project-card",variants:Fe,children:[d.jsx(DL,{poster:t.poster,video:t.video,title:e(`home.projects.cards.${t.id}.title`)}),d.jsx("h3",{children:e(`home.projects.cards.${t.id}.title`)}),d.jsx("p",{children:e(`home.projects.cards.${t.id}.description`)}),d.jsx("div",{className:"project-tags",children:t.tags.map(a=>d.jsx("span",{children:a},`${a}-${i}`))}),d.jsx("p",{className:"muted",children:e(`home.projects.cards.${t.id}.goal`)})]},t.id))})]})})},VL=q.div`
  .trust-grid .card {
    min-height: 132px;
  }
`,BL=()=>{const{t:e}=$e();return d.jsx(VL,{children:d.jsxs(ae.section,{className:"section",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:ft,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.trust.title")}),d.jsx("p",{className:"section-description",children:e("home.trust.desc")})]}),d.jsx(ae.div,{className:"grid-2 trust-grid",variants:Lt,children:$z.map(t=>d.jsxs(ae.article,{className:"card",variants:Fe,children:[d.jsx("h3",{children:e(`home.trust.deliverables.${t}.title`)}),d.jsx("p",{className:"muted",children:e(`home.trust.deliverables.${t}.text`)})]},t))})]})})},_L=q.div`
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
`,HL=()=>{const e=Vz();return Nz(e),d.jsx(_L,{children:d.jsx("div",{className:"page",children:d.jsxs("div",{className:"container",children:[d.jsx(SR,{reducedMotion:e}),d.jsx(KR,{}),d.jsx("div",{className:"section-divider"}),d.jsx(YR,{}),d.jsx("div",{className:"section-divider"}),d.jsx(LL,{}),d.jsx("div",{className:"section-divider"}),d.jsx(NL,{}),d.jsx("div",{className:"section-divider"}),d.jsx(pR,{}),d.jsx("div",{className:"section-divider"}),d.jsx(BL,{}),d.jsx(mR,{})]})})})},GL=(e,t,i,a)=>`${i}${e.toFixed(t)}${a}`,ko=({start:e,max:t,target:i,decimals:a=0,prefix:o="",suffix:l="",durationMs:u=1800,storageKey:f})=>{const p=i??t,[m,g]=E.useState(e),[y,x]=E.useState(!0),v=E.useRef(null);E.useEffect(()=>{if(typeof window>"u")return;if(f&&window.sessionStorage.getItem(f)==="1"){g(p),x(!1);return}let j=0;const C=e,k=p,R=A=>{j||(j=A);const V=Math.min((A-j)/u,1),M=C+(k-C)*V;g(M),V<1?v.current=window.requestAnimationFrame(R):(x(!1),g(k),f&&window.sessionStorage.setItem(f,"1"))};return v.current=window.requestAnimationFrame(R),()=>{v.current&&window.cancelAnimationFrame(v.current)}},[u,p,e,f]);const S=E.useMemo(()=>GL(m,a,o,l),[m,a,o,l]);return d.jsxs(ae.span,{className:"live-metric command-line-metric",initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.42},children:[S,y?d.jsx("span",{className:"terminal-cursor",children:"|"}):null]})},UL={copy:{eyebrow:"Almanya'daki yerel şirketler için öncü sistemler",heroTitle:["Trafikten","nitelikli potansiyel müşteriler","als steuerbares System"],heroLead:"Satış, pazarlama ve sahiplerin aynı verilerle çalışabilmesi için web sitesini, yapay zekayı, reklamları ve analitiği tek bir operasyonel mimaride birleştiriyoruz.",ctaTop:"Stratejik çağrıyı başlat",heroChips:["Potansiyel Müşteri Akışı","Yapay Zeka Yeterliliği","Atıf"],heroChipValues:["Canlı Yayın","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","İniş + Takip","Yapay Zeka Yeterliliği","CRM Boru Hattı"],heroBadges:["Sunucu tarafı izleme","Potansiyel Müşteri Puanlaması","ROAS Görünümü"],servicesTitle:"Sistem modülleri olarak hizmetler",servicesDesc:"Tek tip bir kart bloğu değil: baskın bir çekirdek, yan modüller ve kompakt bir operasyon katmanı.",trio:["Sorun","sistemi","Sonuç"],detailsSummary:"Uygulama ayrıntıları",kpiBadgesTitle:"KPI rozetleri",kpiBadgesDesc:"Her performans, yalnızca satış ve pazarlamanın birlikte okuyup kontrol edebileceği önemli rakamlar kullanılarak değerlendirilir.",signalLayerTitle:"Sinyal Katmanı",signalItems:["GA4 etkinlikleri","Meta CAPI'si","CRM Senkronizasyonu","GDPR modası"],opsTitle:"Operasyon Notları",opsItems:["Haftalık Test Sırası","Bütçenin Yeniden Dağıtılması","Dönüşüm Hunisi QA Yuvaları"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Tavsiye edilir",timelineTitle:"Nasıl çalışıyoruz?",stepLabel:"Adım",controlTitle:"Kontrol Odası: Gerçek zamanlı sonuçlar",controlPanelTitle:"Kontrol Paneli Mimarisi",controlPanelDesc:"Kanal verileri, huni sinyalleri ve CRM durumu tek bir görünümde birleşiyor. Kararlar içgüdüsel olarak değil, süreç düzeyinde alınır.",miniCharts:["Potansiyel Müşteri Hacmi","Kalite Puanı","Anlaşma Hızı"],kpiPanelTitle:"Canlı KPI Sayaçları",kpiLabels:["Nitelikli Potansiyel Müşteriler","Ort. İlk yanıt","Randevuya götür","ROAS kümeleri"],controlBadges:["Liderlik kontrolü","Bütçe kontrolü","Dönüşüm hunisi kontrolü"],ctaBottom:"Potansiyel müşteri sisteminiz için kapsam isteyin"},systems:{website:{title:"Web Sitesi Motoru",problem:"Trafik var ama mobil kullanıcılar formdan önce çıkıyor.",system:"GA4, Meta Piksel, sunucu tarafı izleme, CRM ve GDPR kurulumuyla Açılış/Çoklu Sayfa.",outcome:"Her müşteri izlenebilir bir şekilde kayıt altına alınır ve açıkça bir kanala atanır.",kpis:["izleme oranı","Form Doldurma","Potansiyel Müşteri Kaynağının Netliği"],details:["İzin modu doğru şekilde yapılandırıldı","Çağrı ve WhatsApp etkinlikleri","Gerçek zamanlı CRM aktarımı"]},ai:{title:"Yapay Zeka Yeterlilik Katmanı",problem:"Çok fazla niteliksiz soru satışları ve telefon ekibini engelliyor.",system:"Yapay zeka sohbet robotu, otomatik yeterlilik, WhatsApp/Instagram'da DM akışları, e-posta otomasyonu, müşteri adayı puanlama.",outcome:"Ekip, zaman alıcı ilk sıralama yerine satışla ilgili potansiyel müşterilere öncelik veriyor.",kpis:["İlk yanıt süresi","Nitelikli Potansiyel Müşteri Payı","Satış Ekibi Verimi"],details:["Sektöre özel bilgi istemi yolları","Gösterilmemesi Hatırlatıcıları","Puana göre önceliklendirme"]},ads:{title:"Ücretli Edinme",problem:"Bütçe kanallar arasında net bir öğrenme döngüsü olmadan dağıtılıyor.",system:"Google Ads + Meta Reklamlar + TikTok, A/B testleri, benzerler, dönüşüm izleme ve ROAS görünümü.",outcome:"Bütçe, salt tıklama hacmi yerine yüksek potansiyel müşteri kalitesine sahip kampanyalara akıyor.",kpis:["Nitelikli potansiyel müşteri başına maliyet","Kampanyaya göre ROAS","Yaratıcı Kazanma Oranı"],details:["Bölgesel kampanya kümeleri","Testteki şekil çeşitleri","Sinyale dayalı kitle güncellemeleri"]},analytics:{title:"Kontrol Analitiği",problem:"Kararlar, güvenilir huni verileri yerine platform ekran görüntülerine dayanmaktadır.",system:"Tek düzeyde kanal, huni ve CRM görünümlerini içeren kontrol odası kontrol paneli.",outcome:"Haftalık bütçe, optimizasyon ve ölçeklendirme kararları verilere dayalı olarak izlenebilir.",kpis:["Randevuya Yol Açmak","Anlaşmaya varmak","Boru Hattı Hızı"],details:["Bölgeye/hizmete göre segmentasyon","Huni Düşme Uyarıları","Aylık hipotez listesi"]}},packages:[{id:"başlangıç",title:"Başlangıç",scale:1,lead:"Sıfırdan ölçülebilir bir potansiyel müşteri tabanına giden yerel işletmeler için.",items:["Web dönüşüm hunisi + GA4","Meta Pikseller + İzin","CRM Yakalama","Temel raporlama"],effect:"Potansiyel müşteri kaynaklarının net görünümü ve esnek bir başlangıç süreci."},{id:"büyüme",title:"Büyüme",scale:2,recommended:!0,lead:"Daha nitelikli potansiyel müşterilere ihtiyaç duyan aktif satışları olan ekipler için.",items:["Google + Meta kampanyaları","Yapay Zeka Yeterlilik Akışları","A/B Test Kurulumu","Müşteri Adayı Puanlama + Otomasyon"],effect:"Daha iyi yanıt süreleri ve net önceliklendirme ile daha nitelikli talep."},{id:"ölçeği",title:"Terazi",scale:3,lead:"Birden fazla bölgeye veya hizmet kümesine sahip şirketler için.",items:["Çok kanallı kontrol","Sunucu Tarafı İlişkilendirmesi","Ops Web Uygulama Katmanı","Kontrol odası yönetimi"],effect:"Manuel deneme yanılma yerine süreçler ve güvenilir veriler üzerinden ölçeklendirme."}],timeline:[["01","Stratejik çağrı","Hedef pazar, teklif ve müşteri adayı darboğazı açıkça tanımlanmıştır."],["02","Kapsam belgesi","Kanal planı, takip planı ve sorumluluklar belirlendi."],["03","Yapım aşaması","Web sitesi otomasyonları ve entegrasyonları gerçekleştirilir."],["04","Lansman","QA takibi, kampanya lansmanı ve CRM akışları yayına giriyor."],["05","Optimizasyon","Reklam öğeleri, dönüşüm hunileri ve kalifikasyon için haftalık testler."],["06","Ölçekleme","İşleyen rotalar bölgelere/hizmetlere genişletildi."]]},IL={copy:{eyebrow:"الأنظمة الرائدة للشركات المحلية في ألمانيا",heroTitle:["من حركة المرور","العملاء المتوقعون المؤهلون","كنظام يمكن السيطرة عليه"],heroLead:"نقوم بربط مواقع الويب والذكاء الاصطناعي والإعلانات والتحليلات في بنية تشغيلية واحدة بحيث يعمل فريق المبيعات والتسويق والمالكون بنفس البيانات.",ctaTop:"ابدأ المكالمة الإستراتيجية",heroChips:["تدفق الرصاص","تأهل الذكاء الاصطناعي","الإسناد"],heroChipValues:["المدخول المباشر","رسالة مباشرة + بوت","GA4 + إدارة علاقات العملاء"],flowNodes:["جوجل / ميتا / تيك توك","الهبوط + التتبع","مؤهل الذكاء الاصطناعي","خط أنابيب إدارة علاقات العملاء"],heroBadges:["التتبع من جانب الخادم","نقاط الرصاص","عرض عائد النفقات الإعلانية"],servicesTitle:"الخدمات كوحدات النظام",servicesDesc:"ليست كتلة بطاقات موحدة: نواة مهيمنة ووحدات جانبية وطبقة عمليات مدمجة.",trio:["مشكلة","System","النتيجة"],detailsSummary:"تفاصيل التنفيذ",kpiBadgesTitle:"شارات مؤشرات الأداء الرئيسية",kpiBadgesDesc:"يتم تقييم كل أداء حصريًا باستخدام الأرقام الرئيسية التي يمكن للمبيعات والتسويق قراءتها والتحكم فيها معًا.",signalLayerTitle:"طبقة الإشارة",signalItems:['أحداث "إحصاءات Google" 4',"ميتا كابي","مزامنة إدارة علاقات العملاء","موضة القانون العام لحماية البيانات"],opsTitle:"ملاحظات العمليات",opsItems:["قائمة انتظار الاختبار الأسبوعية","إعادة تخصيص الميزانية","فتحات ضمان الجودة"],packagesTitle:"Pakete in SaaS-Logik",recommended:"موصى به",timelineTitle:"كيف نعمل",stepLabel:"الخطوة",controlTitle:"غرفة التحكم: النتائج في الوقت الحقيقي",controlPanelTitle:"بنية لوحة المعلومات",controlPanelDesc:"تتلاقى بيانات القناة وإشارات مسار التحويل وحالة إدارة علاقات العملاء (CRM) في عرض واحد. يتم اتخاذ القرارات على مستوى العملية بدلاً من الاعتماد على الشعور الغريزي.",miniCharts:["حجم الرصاص","نقاط الجودة","سرعة الصفقة"],kpiPanelTitle:"عدادات مؤشرات الأداء الرئيسية المباشرة",kpiLabels:["العملاء المتوقعون المؤهلون","متوسط. الرد الأول","يؤدي إلى التعيين","مجموعات عائد الإنفاق الإعلاني (ROAS)."],controlBadges:["التحكم في الرصاص","مراقبة الميزانية","التحكم في مسار التحويل"],ctaBottom:"نطاق الطلب لنظام العملاء المحتملين الخاص بك"},systems:{website:{title:"محرك الموقع",problem:"حركة المرور موجودة، لكن مستخدمي الهاتف المحمول يتخلون عنها قبل النموذج.",system:"الصفحات المقصودة/الصفحات المتعددة مع GA4 وMeta Pixel والتتبع من جانب الخادم وإدارة علاقات العملاء وإعداد القانون العام لحماية البيانات (GDPR).",outcome:"يتم تسجيل كل عميل متوقع بطريقة يمكن تتبعها وتعيينها بوضوح إلى القناة.",kpis:["معدل التتبع","إكمال النموذج","وضوح مصدر الرصاص"],details:["تم تكوين وضع الموافقة بشكل صحيح","أحداث الاتصال والواتس اب","دفع CRM في الوقت الحقيقي"]},ai:{title:"طبقة تأهيل الذكاء الاصطناعي",problem:"يؤدي وجود عدد كبير جدًا من الاستفسارات غير المؤهلة إلى عرقلة المبيعات وفريق الهاتف.",system:"روبوت الدردشة المدعم بالذكاء الاصطناعي، والتأهيل التلقائي، وتدفقات الرسائل المباشرة في WhatsApp/Instagram، وأتمتة البريد الإلكتروني، وسجل العملاء المحتملين.",outcome:"يقوم الفريق بإعطاء الأولوية للعملاء المحتملين المرتبطين بالمبيعات بدلاً من الفرز الأولي الذي يستغرق وقتًا طويلاً.",kpis:["وقت الاستجابة الأول","مشاركة العميل المحتمل المؤهل","إنتاجية فريق المبيعات"],details:["مسارات المطالبة الخاصة بالصناعة","عدم عرض التذكيرات","تحديد الأولويات حسب النتيجة"]},ads:{title:"الاستحواذ المدفوع",problem:"يتم توزيع الميزانية بين القنوات بدون حلقة تعليمية واضحة.",system:"إعلانات Google + Meta Ads + TikTok، واختبارات A/B، والمشابهين، وتتبع التحويل، وعرض عائد الإنفاق الإعلاني (ROAS).",outcome:"تتدفق الميزانية إلى الحملات ذات جودة العملاء المحتملين العالية بدلاً من حجم النقرات النقي.",kpis:["التكلفة لكل عميل محتمل مؤهل","عائد النفقات الإعلانية حسب الحملة","معدل الفوز الإبداعي"],details:["مجموعات الحملات الإقليمية","متغيرات الشكل في الاختبار","تحديثات الجمهور المستندة إلى الإشارة"]},analytics:{title:"تحليلات التحكم",problem:"تعتمد القرارات على لقطات شاشة النظام الأساسي بدلاً من بيانات مسار التحويل الموثوقة.",system:"لوحة معلومات غرفة التحكم مع طرق عرض القناة ومسار التحويل وإدارة علاقات العملاء (CRM) على مستوى واحد.",outcome:"يمكن تتبع القرارات الأسبوعية بشأن الميزانية والتحسين والقياس بناءً على البيانات.",kpis:["يؤدي إلى التعيين","يؤدي إلى التعامل","سرعة خط الأنابيب"],details:["التقسيم حسب المنطقة/الخدمة","تنبيهات إسقاط مسار التحويل","قائمة الفرضيات الشهرية"]}},packages:[{id:"بداية",title:"كاتب",scale:1,lead:"للشركات المحلية التي تنتقل من الصفر إلى قاعدة عملاء قابلة للقياس.",items:["مسار تحويل الويب + GA4","Meta Pixels + الموافقة","التقاط إدارة علاقات العملاء","إعداد التقارير الأساسية"],effect:"رؤية واضحة لمصادر العملاء المحتملين وعملية أولية مرنة."},{id:"النمو",title:"النمو",scale:2,recommended:!0,lead:"للفرق ذات المبيعات النشطة التي تحتاج إلى المزيد من العملاء المحتملين المؤهلين.",items:["حملات جوجل + ميتا","تدفقات تأهيل الذكاء الاصطناعي","إعداد اختبار أ/ب","تسجيل نقاط العميل المتوقع + الأتمتة"],effect:"طلب أكثر تأهيلاً مع أوقات استجابة أفضل وتحديد أولويات واضح."},{id:"scale",title:"مقياس",scale:3,lead:"للشركات ذات المناطق أو مجموعات الخدمة المتعددة.",items:["تحكم متعدد القنوات","الإسناد من جانب الخادم","طبقة تطبيق ويب العمليات","إدارة غرفة التحكم"],effect:"التوسع من خلال العمليات والبيانات الموثوقة بدلاً من التجربة والخطأ اليدويين."}],timeline:[["01","النداء الاستراتيجي","السوق المستهدف والعرض واختناقات الرصاص محددة بوضوح."],["02","مستند النطاق","تم إصلاح خطة القناة وخطة التتبع والمسؤوليات."],["03","مرحلة البناء","يتم تنفيذ موقع الويب والأتمتة والتكامل."],["04","الإطلاق","بدء تشغيل تتبع ضمان الجودة وإطلاق الحملة وتدفقات إدارة علاقات العملاء."],["05","التحسين","اختبارات أسبوعية للمبدعين والمسارات والتأهيل."],["06","التحجيم","يتم توسيع مسارات العمل إلى المناطق/الخدمات."]]},$L={copy:{eyebrow:"Systemy wiodące dla lokalnych firm w Niemczech",heroTitle:["Z ruchu","kwalifikowani potencjalni klienci","jako system sterowalny"],heroLead:"Łączymy stronę internetową, sztuczną inteligencję, reklamy i analitykę w jedną architekturę operacyjną, aby sprzedaż, marketing i właściciele pracowali z tymi samymi danymi.",ctaTop:"Rozpocznij rozmowę strategiczną",heroChips:["Przepływ ołowiu","AI Zakwalifikuj się","Uznanie autorstwa"],heroChipValues:["Ujęcie na żywo","DM + Bot","GA4 + CRM"],flowNodes:["Google/Meta/TikTok","Lądowanie + śledzenie","Kwalifikacja AI","Potok CRM"],heroBadges:["Śledzenie po stronie serwera","Punktacja leadów","ROAS Widok"],servicesTitle:"Usługi jako moduły systemu",servicesDesc:"Niejednolity blok kart: dominujący rdzeń, moduły flankujące i zwarta warstwa operacyjna.",trio:["Problem","systemu","Wynik"],detailsSummary:"Szczegóły implementacji",kpiBadgesTitle:"Odznaki KPI",kpiBadgesDesc:"Każde wyniki ocenia się wyłącznie na podstawie kluczowych danych, które sprzedaż i marketing mogą wspólnie odczytać i kontrolować.",signalLayerTitle:"Warstwa sygnału",signalItems:["Zdarzenia GA4","MetaCAPI","Synchronizacja CRM","Moda na RODO"],opsTitle:"Notatki operacyjne",opsItems:["Cotygodniowa kolejka testów","Realokacja budżetu","Szczeliny kontroli jakości lejka"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Zalecane",timelineTitle:"Jak pracujemy",stepLabel:"Krok",controlTitle:"Control Room: Wyniki w czasie rzeczywistym",controlPanelTitle:"Architektura pulpitu nawigacyjnego",controlPanelDesc:"Dane kanału, sygnały ze ścieżek i status CRM są zebrane w jednym widoku. Decyzje podejmowane są na poziomie procesu, a nie na podstawie przeczuć.",miniCharts:["Ilość leadów","Wynik Jakości","Prędkość rozdania"],kpiPanelTitle:"Liczniki KPI na żywo",kpiLabels:["Kwalifikowani potencjalni klienci","Średnia Pierwsza odpowiedź","Doprowadź do spotkania","Klastry ROAS"],controlBadges:["Kontrola leadów","Kontrola budżetu","Sterowanie lejkiem"],ctaBottom:"Zakres żądania dla Twojego systemu wiodącego"},systems:{website:{title:"Silnik strony internetowej",problem:"Ruch jest, ale użytkownicy mobilni rezygnują przed formularzem.",system:"Landing/Wielostronicowy z GA4, Meta Pixel, śledzeniem po stronie serwera, konfiguracją CRM i RODO.",outcome:"Każdy lead jest rejestrowany w sposób identyfikowalny i wyraźnie przypisany do kanału.",kpis:["szybkość śledzenia","Wypełnienie formularza","Przejrzystość źródła potencjalnego klienta"],details:["Tryb zgody skonfigurowany poprawnie","Połączenia i zdarzenia WhatsApp","CRM push w czasie rzeczywistym"]},ai:{title:"Warstwa kwalifikacji AI",problem:"Zbyt wiele niewykwalifikowanych zapytań blokuje sprzedaż i zespół telefoniczny.",system:"Chatbot AI, automatyczna kwalifikacja, przepływy DM w WhatsApp/Instagramie, automatyzacja poczty e-mail, scoring leadów.",outcome:"Zespół priorytetowo traktuje leady związane ze sprzedażą, zamiast czasochłonnego wstępnego sortowania.",kpis:["Czas pierwszej odpowiedzi","Kwalifikowany udział wiodący","Wydajność zespołu sprzedaży"],details:["Ścieżki podpowiedzi specyficzne dla branży","Przypomnienia o braku pokazu","Priorytetyzacja według wyniku"]},ads:{title:"Płatne pozyskiwanie",problem:"Budżet jest rozdzielany pomiędzy kanały bez wyraźnej pętli uczenia się.",system:"Google Ads + Meta Ads + TikTok, testy A/B, lookalikes, śledzenie konwersji i widok ROAS.",outcome:"Budżet wpływa na kampanie o wysokiej jakości potencjalnych klientów, a nie na samą liczbę kliknięć.",kpis:["Koszt za kwalifikowanego potencjalnego klienta","ROAS według kampanii","Współczynnik wygranych kreacji"],details:["Regionalne klastry kampanii","Warianty kształtu w teście","Aktualizacje odbiorców na podstawie sygnału"]},analytics:{title:"Analityka kontroli",problem:"Decyzje podejmowane są na podstawie zrzutów ekranu platformy, a nie wiarygodnych danych z lejka.",system:"Pulpit kontrolny z widokami kanałów, lejków i CRM na jednym poziomie.",outcome:"Cotygodniowe decyzje dotyczące budżetu, optymalizacji i skalowania są identyfikowalne na podstawie danych.",kpis:["Prowadź do spotkania","Prowadzić do transakcji","Prędkość rurociągu"],details:["Segmentacja według regionu/usługi","Alerty o spadku ścieżki","Miesięczna lista hipotez"]}},packages:[{id:"rozrusznik",title:"Rozrusznik",scale:1,lead:"Dla lokalnych firm przechodzących od zera do mierzalnej bazy leadów.",items:["Lejek internetowy + GA4","Meta piksele + zgoda","Przechwytywanie CRM","Podstawowe raportowanie"],effect:"Jasny obraz źródeł potencjalnych klientów i odporny proces początkowy."},{id:"wzrostu",title:"Wzrost",scale:2,recommended:!0,lead:"Dla zespołów z aktywną sprzedażą, które potrzebują większej liczby wykwalifikowanych potencjalnych klientów.",items:["Kampanie Google + Meta","Przepływy kwalifikacji AI","Konfiguracja testów A/B","Punktacja leadów + automatyzacja"],effect:"Bardziej kwalifikowany popyt z lepszymi czasami reakcji i jasnym ustalaniem priorytetów."},{id:"scale",title:"Skala",scale:3,lead:"Dla firm z wieloma regionami lub klastrami usług.",items:["Sterowanie wielokanałowe","Atrybucja po stronie serwera","Warstwa aplikacji internetowej Ops","Zarządzanie sterownią"],effect:"Skalowanie poprzez procesy i wiarygodne dane zamiast ręcznej metody prób i błędów."}],timeline:[["01","Połączenie strategiczne","Rynek docelowy, oferta i wiodące wąskie gardło są jasno określone."],["02","Dokument dotyczący zakresu","Plan kanału, plan śledzenia i obowiązki są stałe."],["03","Faza budowy","Serwis WWW, wdrażane są automatyzacje i integracje."],["04","Uruchomienie","Śledzenie kontroli jakości, uruchamiania kampanii i przepływów CRM zostaje uruchomione."],["05","Optymalizacja","Cotygodniowe testy kreacji, lejków i kwalifikacji."],["06","Skalowanie","Funkcjonujące trasy są rozszerzone o regiony/usługi."]]},qL={copy:{eyebrow:"Pergalên pêşeng ji bo pargîdaniyên herêmî yên li Elmanyayê",heroTitle:["Ji Trafîkê","pêşengên jêhatî","wekî pergalek kontrolkirî"],heroLead:"Em malper, AI, reklam û analîtîk di yek mîmariya xebitandinê de girêdidin da ku firotgeh, kirrûbirra û xwedan bi heman daneyan re bixebitin.",ctaTop:"Banga stratejîk dest pê bikin",heroChips:["Lead Flow","AI Qualify","Attribution"],heroChipValues:["Vegirtina Zindî","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Daxistina + Şopandin","Qalîteya AI","CRM Pipeline"],heroBadges:["Şopandina server-side","Nîşandana Serê","Dîtina ROAS"],servicesTitle:"Karûbarên wekî modulên pergalê",servicesDesc:"Ne bloka qerta yekgirtî: bingehek serdest, modulên alîgir û qatek operasyonên tevlihev.",trio:["Pirsgirêk","System","Encam"],detailsSummary:"Agahiyên pêkanînê",kpiBadgesTitle:"nîşaneyên KPI",kpiBadgesDesc:"Her performans bi taybetî bi karanîna hejmarên sereke yên ku firotgeh û kirrûbirra dikarin bi hev re bixwînin û kontrol bikin têne nirxandin.",signalLayerTitle:"Signal Layer",signalItems:["bûyerên GA4","Meta CAPI","CRM Sync","moda GDPR"],opsTitle:"Têbînîyên Ops",opsItems:["Dora Testa Heftane","Veqetandina budceyê","Funnel QA Slots"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Pêşniyar kirin",timelineTitle:"Em çawa dixebitin",stepLabel:"Gavê",controlTitle:"Odeya Kontrolê: Encam di wextê rast de",controlPanelTitle:"Mîmariya Dashboard",controlPanelDesc:"Daneyên kanalê, sînyalên funnel û rewşa CRM di yek dîmenê de li hev dicivin. Biryar di asta pêvajoyê de li şûna ku li ser bingeha hestiyariyê têne girtin.",miniCharts:["Volume Lead","Pîvana Kalîteyê","Deal Leza"],kpiPanelTitle:"Hejmarên KPI-ya Zindî",kpiLabels:["Rêberên Qeydkirî","Avg. Bersiva yekem","Ber bi randevûyê ve bibe","ROAS Cluster"],controlBadges:["Kontrola rêber","Kontrola budceyê","Kontrola funnel"],ctaBottom:"Ji bo pergala rêberiya xwe qada xwe daxwaz bikin"},systems:{website:{title:"Motora Malperê",problem:"Trafîk li wir e, lê bikarhênerên mobîl berê xwe didin formê.",system:"Zevî / Pir-Rûpel bi GA4, Meta Pixel, şopandina server-side, sazkirina CRM û GDPR.",outcome:"Her lînka bi şêwazek peydakirî tê tomar kirin û bi zelalî ji kanalek re tê veqetandin.",kpis:["rêjeya şopandinê","Temamkirina Formê","Zelaliya Çavkaniya Rêber"],details:["Moda razîbûnê rast hate mîheng kirin","Bang û bûyerên WhatsApp","CRM di wextê rast de bişopîne"]},ai:{title:"Qatê Qalîteya AI",problem:"Pir lêpirsînên bêkalîte firotan û tîmê têlefonê asteng dikin.",system:"chatbotê AI-ê, kalîteya xweser, DM di WhatsApp/Instagram-ê de diherike, otomasyona e-nameyê, pîvana pêşeng.",outcome:"Tîm li şûna rêzkirina destpêkê ya dem-dixwe, pêşengên bi firotanê ve girêdayî ye.",kpis:["Dema bersivê ya yekem","Parvekirina Pêşkêşiya Qeydkirî","Rêjeya Tîma Firotanê"],details:["Rêçên bilez ên pîşesaziyê","Bîranînên Nîşan Nade","Pêşniyarkirin li gorî puanê"]},ads:{title:"Bidestxistina Pad",problem:"Budçe di navbera kanalan de bêyî çerxa fêrbûnê ya zelal tê dabeş kirin.",system:"Google Ads + Meta Ads + TikTok, testên A/B, xuyang, şopandina veguheztinê û dîtina ROAS.",outcome:"Budçe li şûna voltaja klîk a paqij di kampanyayên bi kalîteya pêşeng a bilind de diherike.",kpis:["Mesrefa serê pêşengê jêhatî","ROAS ji hêla Kampanyayê ve","Rêjeya Serketina Afirîner"],details:["Komên kampanyaya herêmî","Guhertoyên şikilê di ceribandinê de","Nûvekirinên temaşevanan-based sînyala"]},analytics:{title:"Analîtîk kontrol bikin",problem:"Biryar li şûna daneyên pêbawer ên pêbawer li ser dîmenên platformê têne çêkirin.",system:"Tabloya jûreya kontrolê bi dîtinên kanal, kavil û CRM li yek astê.",outcome:"Biryarên heftane yên li ser budce, xweşbînkirin û pîvandinê li ser bingeha daneyan têne şopandin.",kpis:["Ber bi Randevûyê ve bibe","Bi rê ve bibin","Leza boriyê"],details:["Segmentkirin li gorî herêm/xizmet","Agahiyên Daxistina Funnel","Lîsteya hîpoteza mehane"]}},packages:[{id:"destpêk",title:"Destpêker",scale:1,lead:"Ji bo karsaziyên herêmî ku ji sifirê diçin bingehek pêşeng a pîvandî.",items:["Kanala Web + GA4","Meta Pixels + Destûr","Girtina CRM","Raporkirina bingehîn"],effect:"Dîtina zelal a çavkaniyên pêşeng û pêvajoyek destpêkê ya berxwedêr."},{id:"mezinbûn",title:"Mezinbûn",scale:2,recommended:!0,lead:"Ji bo tîmên xwedan firotana çalak ku hewceyê pêşengên jêhatîtir in.",items:["Google + Meta Kampagnen","Qalîteya AI-ê diherike","Sazkirina Testkirina A/B","Nîgarkirina Serê + Otomasyon"],effect:"Daxwaza jêhatîtir bi demên bersivdayînê çêtir û pêşengiya zelal."},{id:"scale",title:"Pîvana",scale:3,lead:"Ji bo pargîdaniyên bi gelek herêm an komên karûbarê.",items:["Kontrola pir-kanal","Server-Side Attribution","Ops Web App Layer","Rêveberiya odeya kontrolê"],effect:"Li şûna ceribandin û xeletiya destan, bi pêvajo û daneyên pêbawer ve pîvandin."}],timeline:[["01","Banga Stratejîk","Bazara armanc, pêşkêşî û kêşeya pêşeng bi zelalî têne destnîşan kirin."],["02","Belgeya çarçovê","Plana kanalê, plana şopandinê û berpirsiyarî têne rast kirin."],["03","Qonaxa avakirinê","Malper, otomasyon û entegrasyon têne pêkanîn."],["04","Destpêkirin","Şopandina QA, destpêkirina kampanyayê û herikîna CRM zindî diçin."],["05","Optimîzasyon","Testên heftane ji bo afirîner, kavil û jêhatîbûnê."],["06","Scaling","Rêçên fonksiyonel li herêm / karûbaran têne berfireh kirin."]]},FL={copy:{eyebrow:"سیستم های رهبری برای شرکت های محلی در آلمان",heroTitle:["از ترافیک","سرنخ های واجد شرایط","به عنوان یک سیستم قابل کنترل"],heroLead:"ما وب سایت، هوش مصنوعی، تبلیغات و تجزیه و تحلیل را در یک معماری عملیاتی به هم متصل می کنیم تا فروش، بازاریابی و مالکان با داده های یکسان کار کنند.",ctaTop:"تماس استراتژیک را شروع کنید",heroChips:["جریان سرب","AI Qualify","اسناد"],heroChipValues:["مصرف زنده","DM + ربات","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","فرود + ردیابی","صلاحیت هوش مصنوعی","خط لوله CRM"],heroBadges:["ردیابی سمت سرور","امتیازدهی برتر","نمای ROAS"],servicesTitle:"خدمات به عنوان ماژول های سیستم",servicesDesc:"یک بلوک کارت یکنواخت نیست: یک هسته غالب، ماژول های کناری و یک لایه عملیات فشرده.",trio:["مشکل","System","نتیجه"],detailsSummary:"جزئیات پیاده سازی",kpiBadgesTitle:"نشان های KPI",kpiBadgesDesc:"هر عملکرد منحصراً با استفاده از ارقام کلیدی ارزیابی می شود که فروش و بازاریابی می توانند با هم بخوانند و کنترل کنند.",signalLayerTitle:"لایه سیگنال",signalItems:["رویدادهای GA4","متا CAPI","CRM Sync","مد GDPR"],opsTitle:"یادداشت های عملیاتی",opsItems:["صف تست هفتگی","تخصیص مجدد بودجه","قیف QA اسلات"],packagesTitle:"Pakete in SaaS-Logik",recommended:"توصیه می شود",timelineTitle:"چگونه کار می کنیم",stepLabel:"گام",controlTitle:"اتاق کنترل: نتایج در زمان واقعی",controlPanelTitle:"معماری داشبورد",controlPanelDesc:"داده های کانال، سیگنال های قیف و وضعیت CRM در یک نما همگرا می شوند. تصمیمات به جای اینکه بر اساس احساس درونی باشد، در سطح فرآیند گرفته می شود.",miniCharts:["حجم سرب","امتیاز کیفیت","سرعت معامله"],kpiPanelTitle:"شمارنده های KPI زنده",kpiLabels:["سرنخ های واجد شرایط","میانگین اولین پاسخ","منجر به قرار ملاقات","خوشه های ROAS"],controlBadges:["کنترل سرب","کنترل بودجه","کنترل قیف"],ctaBottom:"دامنه درخواست برای سیستم رهبری خود"},systems:{website:{title:"موتور وب سایت",problem:"ترافیک وجود دارد، اما کاربران تلفن همراه قبل از فرم آن را رها می کنند.",system:"Landing/Multi-Page با GA4، Meta Pixel، ردیابی سمت سرور، راه اندازی CRM و GDPR.",outcome:"هر لید به شیوه ای قابل ردیابی ثبت می شود و به وضوح به یک کانال اختصاص داده می شود.",kpis:["نرخ ردیابی","تکمیل فرم","وضوح منبع سرب"],details:["حالت رضایت به درستی پیکربندی شده است","تماس و رویدادهای WhatsApp","فشار CRM در زمان واقعی"]},ai:{title:"لایه صلاحیت هوش مصنوعی",problem:"بسیاری از سوالات غیرمجاز فروش و تیم تلفن را مسدود می کند.",system:"چت ربات هوش مصنوعی، صلاحیت خودکار، جریان DM در واتس اپ/اینستاگرام، اتوماسیون ایمیل، امتیازدهی سرنخ.",outcome:"تیم سرنخ های مرتبط با فروش را به جای مرتب سازی اولیه وقت گیر در اولویت قرار می دهد.",kpis:["اولین زمان پاسخ","اشتراک سرب واجد شرایط","توان عملیاتی تیم فروش"],details:["مسیرهای سریع خاص صنعت","بدون نمایش یادآوری","اولویت بندی بر اساس امتیاز"]},ads:{title:"خرید پولی",problem:"بودجه بین کانال ها بدون یک حلقه یادگیری واضح توزیع می شود.",system:"Google Ads + Meta Ads + TikTok، تست های A/B، مشابه، ردیابی تبدیل و نمای ROAS.",outcome:"بودجه به جای حجم کلیک خالص به کمپین هایی با کیفیت سرنخ بالا سرازیر می شود.",kpis:["هزینه هر سرنخ واجد شرایط","ROAS توسط کمپین","نرخ برد خلاقانه"],details:["خوشه های کمپین منطقه ای","انواع شکل در آزمون","به روز رسانی مخاطبان مبتنی بر سیگنال"]},analytics:{title:"کنترل تجزیه و تحلیل",problem:"تصمیم‌گیری‌ها به جای داده‌های قیف قابل اعتماد، بر اساس اسکرین‌شات‌های پلتفرم هستند.",system:"داشبورد اتاق کنترل با نمای کانال، قیف و CRM در یک سطح.",outcome:"تصمیمات هفتگی در مورد بودجه، بهینه سازی و مقیاس بندی بر اساس داده ها قابل ردیابی هستند.",kpis:["منجر به قرار ملاقات","منجر به معامله شود","سرعت خط لوله"],details:["تقسیم بندی بر اساس منطقه/سرویس","هشدارهای سقوط قیف","فهرست فرضیه های ماهانه"]}},packages:[{id:"استارتر",title:"استارتر",scale:1,lead:"برای کسب و کارهای محلی که از صفر به یک پایه سرب قابل اندازه گیری می روند.",items:["قیف وب + GA4","متا پیکسل + رضایت","ضبط CRM","گزارش اولیه"],effect:"نمای واضح از منابع سرب و فرآیند اولیه انعطاف پذیر."},{id:"رشد",title:"رشد",scale:2,recommended:!0,lead:"برای تیم هایی با فروش فعال که به سرنخ های واجد شرایط بیشتری نیاز دارند.",items:["کمپین های Google + Meta","جریان های صلاحیت هوش مصنوعی","راه اندازی تست A/B","امتیازدهی سرب + اتوماسیون"],effect:"تقاضای واجد شرایط بیشتر با زمان پاسخگویی بهتر و اولویت بندی واضح."},{id:"scale",title:"مقیاس",scale:3,lead:"برای شرکت هایی با چندین منطقه یا خوشه خدمات.",items:["کنترل چند کاناله","اسناد سمت سرور","لایه برنامه وب Ops","اداره اتاق کنترل"],effect:"مقیاس گذاری از طریق فرآیندها و داده های قابل اعتماد به جای آزمون و خطای دستی."}],timeline:[["01","تماس استراتژیک","بازار هدف، پیشنهاد و گلوگاه سرب به وضوح تعریف شده است."],["02","سند محدوده","طرح کانال، طرح پیگیری و مسئولیت ها ثابت است."],["03","فاز ساخت","وب سایت، اتوماسیون ها و ادغام ها پیاده سازی شده اند."],["04","راه اندازی","پیگیری QA، راه‌اندازی کمپین و جریان‌های CRM فعال می‌شوند."],["05","بهینه سازی","آزمون های هفتگی برای خلاقیت ها، قیف ها و صلاحیت ها."],["06","مقیاس بندی","مسیرهای عملکردی به مناطق/خدمات گسترش یافته است."]]},KL={copy:{eyebrow:"Sistemi guida per aziende locali in Germania",heroTitle:["Dal traffico","lead qualificati","come sistema controllabile"],heroLead:"Colleghiamo sito web, intelligenza artificiale, pubblicità e analisi in un'unica architettura operativa in modo che vendite, marketing e proprietari lavorino con gli stessi dati.",ctaTop:"Avvia chiamata strategica",heroChips:["Flusso principale","Qualificazione AI","Attribuzione"],heroChipValues:["Assunzione dal vivo","DM + Bot","GA4 + CRM"],flowNodes:["Google/Meta/TikTok","Atterraggio + Inseguimento","Qualificazione AI","Pipeline CRM"],heroBadges:["Monitoraggio lato server","Punteggio principale","Visualizzazione ROAS"],servicesTitle:"Servizi come moduli di sistema",servicesDesc:"Blocco di carte non uniforme: un nucleo dominante, moduli affiancati e uno strato operativo compatto.",trio:["Problema","sistema","Risultato"],detailsSummary:"Dettagli di implementazione",kpiBadgesTitle:"Badge KPI",kpiBadgesDesc:"Ogni prestazione viene valutata esclusivamente utilizzando cifre chiave che vendite e marketing possono leggere e controllare insieme.",signalLayerTitle:"Livello del segnale",signalItems:["Eventi GA4","Meta CAPI","Sincronizzazione CRM","Moda GDPR"],opsTitle:"Note operative",opsItems:["Coda di prova settimanale","Riallocazione del budget","Slot QA canalizzazione"],packagesTitle:"pacchetti in logica SaaS",recommended:"Consigliato",timelineTitle:"Come lavoriamo",stepLabel:"Passaggio",controlTitle:"Sala di controllo: risultati in tempo reale",controlPanelTitle:"Architettura del dashboard",controlPanelDesc:"I dati del canale, i segnali del funnel e lo stato del CRM convergono in un'unica visualizzazione. Le decisioni vengono prese a livello di processo anziché in base al sentimento.",miniCharts:["Volume di lead","Punteggio di qualità","Velocità dell'operazione"],kpiPanelTitle:"Contatori KPI in tempo reale",kpiLabels:["Lead qualificati","Media Prima risposta","Porta all'appuntamento","Cluster ROAS"],controlBadges:["Controllo principale","Controllo del bilancio","Controllo imbuto"],ctaBottom:"Richiedi l'ambito per il tuo sistema lead"},systems:{website:{title:"Motore del sito web",problem:"Il traffico c'è, ma gli utenti mobile abbandonano prima del modulo.",system:"Landing/Multi-pagina con GA4, Meta Pixel, tracciamento lato server, configurazione CRM e GDPR.",outcome:"Ogni lead viene registrato in modo tracciabile e chiaramente assegnato a un canale.",kpis:["tasso di tracciamento","Completamento del modulo","Chiarezza della fonte principale"],details:["Modalità di consenso configurata correttamente","Chiama ed eventi WhatsApp","Push CRM in tempo reale"]},ai:{title:"Livello di qualificazione AI",problem:"Troppe richieste non qualificate bloccano le vendite e il team telefonico.",system:"Chatbot AI, autoqualificazione, flussi DM in WhatsApp/Instagram, automazione della posta elettronica, lead scoring.",outcome:"Il team dà priorità ai lead relativi alle vendite anziché al lungo smistamento iniziale.",kpis:["Tempo di prima risposta","Condivisione di lead qualificati","Produttività del team di vendita"],details:["Percorsi rapidi specifici del settore","Promemoria mancata presentazione","Priorità in base al punteggio"]},ads:{title:"Acquisizione a pagamento",problem:"Il budget è distribuito tra i canali senza un chiaro ciclo di apprendimento.",system:"Google Ads + Meta Ads + TikTok, test A/B, lookalike, monitoraggio delle conversioni e visualizzazione ROAS.",outcome:"Il budget confluisce in campagne con un'elevata qualità dei lead invece che con un puro volume di clic.",kpis:["Costo per lead qualificato","ROAS per campagna","Tasso di vincita creatività"],details:["Cluster di campagne regionali","Varianti di forma nel test","Aggiornamenti sul pubblico basati sui segnali"]},analytics:{title:"Analisi di controllo",problem:"Le decisioni si basano sugli screenshot della piattaforma anziché su dati affidabili della canalizzazione.",system:"Cruscotto della sala di controllo con visualizzazioni canale, canalizzazione e CRM su un unico livello.",outcome:"Le decisioni settimanali su budget, ottimizzazione e ridimensionamento sono tracciabili sulla base dei dati.",kpis:["Porta all'appuntamento","Porta all'affare","Velocità della pipeline"],details:["Segmentazione per regione/servizio","Avvisi di eliminazione della canalizzazione","Elenco mensile delle ipotesi"]}},packages:[{id:"motorino di avviamento",title:"Motorino d'avviamento",scale:1,lead:"Per le imprese locali che passano da zero a una base di lead misurabile.",items:["Imbuto web + GA4","Meta Pixel + Consenso","Acquisizione CRM","Reportistica di base"],effect:"Visione chiara delle fonti di lead e processo iniziale resiliente."},{id:"crescita",title:"Crescita",scale:2,recommended:!0,lead:"Per i team con vendite attive che necessitano di lead più qualificati.",items:["Campagne Google + Meta","Flussi di qualificazione AI","Impostazione test A/B","Punteggio lead + automazione"],effect:"Domanda più qualificata con tempi di risposta migliori e chiara definizione delle priorità."},{id:"scale",title:"Scala",scale:3,lead:"Per aziende con più regioni o cluster di servizi.",items:["Controllo multicanale","Attribuzione lato server","Livello app Web Ops","Governance della sala di controllo"],effect:"Scalabilità tramite processi e dati affidabili anziché tentativi ed errori manuali."}],timeline:[["01","Chiamata strategica","Il mercato target, l'offerta e il collo di bottiglia del lead sono chiaramente definiti."],["02","Documento di ambito","Il piano dei canali, il piano di monitoraggio e le responsabilità sono fissi."],["03","Fase di costruzione","Sito web, automazioni e integrazioni implementate."],["04","Lancio","Il monitoraggio del QA, del lancio della campagna e dei flussi CRM diventa attivo."],["05","Ottimizzazione","Test settimanali per creatività, canalizzazioni e qualificazione."],["06","Ridimensionamento","I percorsi funzionanti vengono estesi a regioni/servizi."]]},YL={copy:{eyebrow:"Sistemas líderes para empresas locales en Alemania",heroTitle:["Del tráfico","clientes potenciales calificados","como sistema controlable"],heroLead:"Conectamos sitios web, inteligencia artificial, anuncios y análisis en una arquitectura operativa para que ventas, marketing y propietarios trabajen con los mismos datos.",ctaTop:"Iniciar llamada estratégica",heroChips:["Flujo de plomo","Clasificación IA","Atribución"],heroChipValues:["Ingesta viva","DM + Bot","GA4 + CRM"],flowNodes:["Google/Meta/TikTok","Aterrizaje + Seguimiento","Calificación de IA","Canal de CRM"],heroBadges:["Seguimiento del lado del servidor","Puntuación de clientes potenciales","ROAS Ver"],servicesTitle:"Servicios como módulos del sistema",servicesDesc:"No es un bloque de tarjetas uniforme: un núcleo dominante, módulos flanqueantes y una capa de operaciones compacta.",trio:["Problema","System","Resultado"],detailsSummary:"Detalles de implementación",kpiBadgesTitle:"insignias de KPI",kpiBadgesDesc:"Cada desempeño se evalúa exclusivamente utilizando cifras clave que ventas y marketing pueden leer y controlar juntos.",signalLayerTitle:"Capa de señal",signalItems:["eventos GA4","Meta CAPI","Sincronización CRM","RGPD moda"],opsTitle:"Notas de operaciones",opsItems:["Cola de prueba semanal","Reasignación de presupuesto","Ranuras de control de calidad del embudo"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Recomendado",timelineTitle:"Cómo trabajamos",stepLabel:"Paso",controlTitle:"Sala de Control: Resultados en tiempo real",controlPanelTitle:"Arquitectura del tablero",controlPanelDesc:"Los datos del canal, las señales del embudo y el estado de CRM convergen en una sola vista. Las decisiones se toman a nivel de proceso en lugar de basarse en intuiciones.",miniCharts:["Volumen de clientes potenciales","Nivel de calidad","Velocidad de negociación"],kpiPanelTitle:"Contadores de KPI en vivo",kpiLabels:["Clientes potenciales calificados","Promedio Primera respuesta","Conduce a la cita","Clústeres de ROAS"],controlBadges:["Control de plomo","Control presupuestario","Control de embudo"],ctaBottom:"Solicite alcance para su sistema principal"},systems:{website:{title:"Motor de sitio web",problem:"Hay tráfico, pero los usuarios de dispositivos móviles abandonan antes del formulario.",system:"Landing/Multi-Page con GA4, Meta Pixel, seguimiento del lado del servidor, CRM y configuración GDPR.",outcome:"Cada cliente potencial se registra de manera rastreable y se asigna claramente a un canal.",kpis:["tasa de seguimiento","Completar formulario","Claridad de la fuente principal"],details:["Modo de consentimiento configurado correctamente","Llamadas y eventos de WhatsApp","Impulso de CRM en tiempo real"]},ai:{title:"Capa de calificación de IA",problem:"Demasiadas consultas no calificadas bloquean las ventas y el equipo telefónico.",system:"Chatbot AI, calificación automática, flujos de DM en WhatsApp/Instagram, automatización de correo electrónico, puntuación de clientes potenciales.",outcome:"El equipo prioriza los clientes potenciales relacionados con las ventas en lugar de una clasificación inicial que requiere mucho tiempo.",kpis:["Primer tiempo de respuesta","Participación de clientes potenciales calificados","Rendimiento del equipo de ventas"],details:["Rutas de aviso específicas de la industria","Recordatorios de ausencia","Priorización por puntuación"]},ads:{title:"Adquisición pagada",problem:"El presupuesto se distribuye entre los canales sin un ciclo de aprendizaje claro.",system:"Google Ads + Meta Ads + TikTok, pruebas A/B, lookalikes, seguimiento de conversiones y visualización de ROAS.",outcome:"El presupuesto fluye hacia campañas con alta calidad de clientes potenciales en lugar de solo volumen de clics.",kpis:["Costo por cliente potencial calificado","ROAS por campaña","Tasa de ganancias creativas"],details:["Grupos de campañas regionales","Variantes de forma en la prueba","Actualizaciones de audiencia basadas en señales"]},analytics:{title:"Análisis de control",problem:"Las decisiones se basan en capturas de pantalla de la plataforma en lugar de datos confiables del embudo.",system:"Panel de control de sala de control con vistas de canal, embudo y CRM en un nivel.",outcome:"Las decisiones semanales sobre presupuesto, optimización y escalamiento se pueden rastrear en función de los datos.",kpis:["Conduce a la cita","Llevar a cabo un trato","Velocidad de la tubería"],details:["Segmentación por región/servicio","Alertas de caída del embudo","Lista mensual de hipótesis"]}},packages:[{id:"motor de arranque",title:"Arrancador",scale:1,lead:"Para empresas locales que pasan de cero a una base de clientes potenciales mensurable.",items:["Embudo web + GA4","Metapíxeles + Consentimiento","Captura de CRM","Informes básicos"],effect:"Visión clara de las fuentes de clientes potenciales y un proceso inicial resiliente."},{id:"crecimiento",title:"Crecimiento",scale:2,recommended:!0,lead:"Para equipos con ventas activas que necesitan más clientes potenciales calificados.",items:["Metacampañas de Google +","Flujos de calificación de IA","Configuración de prueba A/B","Puntuación de clientes potenciales + Automatización"],effect:"Demanda más calificada con mejores tiempos de respuesta y priorización clara."},{id:"scale",title:"Scale",scale:3,lead:"Para empresas con múltiples regiones o grupos de servicios.",items:["Control multicanal","Atribución del lado del servidor","Capa de aplicación web de operaciones","Gobernanza de la sala de control"],effect:"Escalar a través de procesos y datos confiables en lugar de prueba y error manual."}],timeline:[["01","Llamada estratégica","El mercado objetivo, la oferta y el cuello de botella del cliente potencial están claramente definidos."],["02","Documento de alcance","Se fijan el plan de canales, el plan de seguimiento y las responsabilidades."],["03","Fase de construcción","Sitio web, automatizaciones e integraciones implementadas."],["04","Lanzamiento","Se activa el seguimiento de control de calidad, lanzamiento de campañas y flujos de CRM."],["05","Optimización","Pruebas semanales de creatividades, embudos y calificación."],["06","Escalado","Las rutas en funcionamiento se amplían a regiones/servicios."]]},XL={copy:{eyebrow:"Ηγετικά συστήματα για τοπικές εταιρείες στη Γερμανία",heroTitle:["Από Τροχαία","πιστοποιημένοι υποψήφιοι πελάτες","ως ελεγχόμενο σύστημα"],heroLead:"Συνδέουμε ιστότοπο, τεχνητή νοημοσύνη, διαφημίσεις και αναλυτικά στοιχεία σε μία λειτουργική αρχιτεκτονική, έτσι ώστε οι πωλήσεις, το μάρκετινγκ και οι ιδιοκτήτες να λειτουργούν με τα ίδια δεδομένα.",ctaTop:"Έναρξη στρατηγικής κλήσης",heroChips:["Ροή μολύβδου","AI Qualify","Αναφορά"],heroChipValues:["Ζωντανή πρόσληψη","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Προσγείωση + Παρακολούθηση","Πιστοποίηση AI","Αγωγός CRM"],heroBadges:["Παρακολούθηση από την πλευρά του διακομιστή","Βαθμολογία Πρωτοδικών","Προβολή ROAS"],servicesTitle:"Υπηρεσίες ως λειτουργικές μονάδες συστήματος",servicesDesc:"Δεν είναι ένα ομοιόμορφο μπλοκ κάρτας: ένας κυρίαρχος πυρήνας, πλευρικές μονάδες και ένα συμπαγές επίπεδο λειτουργιών.",trio:["Πρόβλημα","σύστημα","Αποτέλεσμα"],detailsSummary:"Λεπτομέρειες υλοποίησης",kpiBadgesTitle:"Σήματα KPI",kpiBadgesDesc:"Κάθε απόδοση αξιολογείται αποκλειστικά χρησιμοποιώντας βασικά στοιχεία που οι πωλήσεις και το μάρκετινγκ μπορούν να διαβάσουν και να ελέγξουν μαζί.",signalLayerTitle:"Επίπεδο σήματος",signalItems:["Γεγονότα GA4","Meta CAPI","CRM Sync","Μόδα GDPR"],opsTitle:"Σημειώσεις λειτουργιών",opsItems:["Εβδομαδιαία ουρά δοκιμής","Ανακατανομή Προϋπολογισμού","Κουλοχέρηδες QA Funnel"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Συνιστάται",timelineTitle:"Πώς δουλεύουμε",stepLabel:"Βήμα",controlTitle:"Χώρος ελέγχου: Αποτελέσματα σε πραγματικό χρόνο",controlPanelTitle:"Αρχιτεκτονική ταμπλό",controlPanelDesc:"Τα δεδομένα καναλιού, τα σήματα διοχέτευσης και η κατάσταση CRM συγκλίνουν σε μία προβολή. Οι αποφάσεις λαμβάνονται σε επίπεδο διαδικασίας αντί να βασίζονται στην αίσθηση του εντέρου.",miniCharts:["Όγκος μολύβδου","Βαθμολογία ποιότητας","Ταχύτητα συμφωνίας"],kpiPanelTitle:"Ζωντανοί μετρητές KPI",kpiLabels:["Πιστοποιημένοι δυνητικοί πελάτες","Μέσος όρος Πρώτη απάντηση","Οδηγήστε στο ραντεβού","συστάδες απόδοσης διαφημιστικής επένδυσης (ROAS)."],controlBadges:["Έλεγχος ηλεκτροδίου","Έλεγχος προϋπολογισμού","Έλεγχος διοχέτευσης"],ctaBottom:"Αίτημα πεδίου εφαρμογής για το σύστημά σας"},systems:{website:{title:"Μηχανή ιστότοπου",problem:"Υπάρχει επισκεψιμότητα, αλλά οι χρήστες κινητών εγκαταλείπουν τη φόρμα.",system:"Landing/Multi-Page με GA4, Meta Pixel, παρακολούθηση από την πλευρά του διακομιστή, CRM και ρύθμιση GDPR.",outcome:"Κάθε υποψήφιος πελάτης καταγράφεται με ανιχνεύσιμο τρόπο και εκχωρείται σαφώς σε ένα κανάλι.",kpis:["ποσοστό παρακολούθησης","Συμπλήρωση εντύπου","Διαύγεια πηγής μολύβδου"],details:["Η λειτουργία συναίνεσης διαμορφώθηκε σωστά","Εκδηλώσεις κλήσεων και WhatsApp","CRM push σε πραγματικό χρόνο"]},ai:{title:"Επίπεδο πιστοποίησης AI",problem:"Πάρα πολλές ακατάλληλες έρευνες μπλοκάρουν τις πωλήσεις και την τηλεφωνική ομάδα.",system:"AI chatbot, αυτόματη πιστοποίηση, ροές DM σε WhatsApp/Instagram, αυτοματοποίηση email, βαθμολογία δυνητικού πελάτη.",outcome:"Η ομάδα δίνει προτεραιότητα στους δυνητικούς πελάτες που σχετίζονται με τις πωλήσεις αντί της χρονοβόρας αρχικής ταξινόμησης.",kpis:["Πρώτος χρόνος απόκρισης","Πιστοποιημένο μερίδιο δυνητικού πελάτη","Διακίνηση της Ομάδας Πωλήσεων"],details:["Διαδρομές προτροπής για συγκεκριμένο κλάδο","Χωρίς εμφάνιση υπενθυμίσεων","Προτεραιότητα ανά βαθμολογία"]},ads:{title:"Απόκτηση επί πληρωμή",problem:"Ο προϋπολογισμός κατανέμεται μεταξύ των καναλιών χωρίς σαφή βρόχο εκμάθησης.",system:"Google Ads + Meta Ads + TikTok, δοκιμές A/B, εμφανίσεις, παρακολούθηση μετατροπών και προβολή Απόδοσης Διαφημιστικής Επένδυσης.",outcome:"Ο προϋπολογισμός ρέει σε καμπάνιες με υψηλή ποιότητα δυνητικού πελάτη αντί για καθαρό όγκο κλικ.",kpis:["Κόστος ανά κατάλληλο υποψήφιο πελάτη","Απόδοση Διαφημιστικής Επένδυσης κατά Campaign","Ποσοστό κέρδους δημιουργικού"],details:["Περιφερειακές ομάδες εκστρατειών","Παραλλαγές σχήματος στη δοκιμή","Ενημερώσεις κοινού βάσει σήματος"]},analytics:{title:"Control Analytics",problem:"Οι αποφάσεις βασίζονται σε στιγμιότυπα οθόνης πλατφόρμας αντί σε αξιόπιστα δεδομένα διοχέτευσης.",system:"Πίνακας ελέγχου δωματίου με προβολές καναλιού, διοχέτευσης και CRM σε ένα επίπεδο.",outcome:"Οι εβδομαδιαίες αποφάσεις σχετικά με τον προϋπολογισμό, τη βελτιστοποίηση και την κλιμάκωση είναι ανιχνεύσιμες βάσει δεδομένων.",kpis:["Οδήγησε στο ραντεβού","Οδήγησε σε συμφωνία","Ταχύτητα αγωγού"],details:["Τμηματοποίηση ανά περιοχή/υπηρεσία","Ειδοποιήσεις πτώσης διοχέτευσης","Μηνιαία λίστα υποθέσεων"]}},packages:[{id:"μίζα",title:"Μίζα",scale:1,lead:"Για τοπικές επιχειρήσεις που πηγαίνουν από το μηδέν σε μια μετρήσιμη βάση δυνητικών πελατών.",items:["Διοχέτευση Ιστού + GA4","Meta Pixels + Consent","Λήψη CRM","Βασική αναφορά"],effect:"Καθαρή άποψη των πηγών μολύβδου και μια ανθεκτική αρχική διαδικασία."},{id:"ανάπτυξη",title:"Ανάπτυξη",scale:2,recommended:!0,lead:"Για ομάδες με ενεργές πωλήσεις που χρειάζονται περισσότερους κατάλληλους δυνητικούς πελάτες.",items:["Καμπάνιες Google + Meta","Ροές πιστοποίησης AI","Ρύθμιση δοκιμής A/B","Βαθμολογία δυνάμεων + Αυτοματισμός"],effect:"Πιο κατάλληλη ζήτηση με καλύτερους χρόνους απόκρισης και σαφή ιεράρχηση προτεραιοτήτων."},{id:"κλίμακα",title:"Κλίμακα",scale:3,lead:"Για εταιρείες με πολλές περιοχές ή ομάδες υπηρεσιών.",items:["Έλεγχος πολλαπλών καναλιών","Απόδοση από την πλευρά του διακομιστή","Επίπεδο εφαρμογής Ιστού Ops","Διακυβέρνηση της αίθουσας ελέγχου"],effect:"Κλιμάκωση μέσω διαδικασιών και αξιόπιστων δεδομένων αντί για μη αυτόματη δοκιμή και σφάλμα."}],timeline:[["01","Στρατηγική κλήση","Η αγορά-στόχος, η προσφορά και το σημείο συμφόρησης είναι σαφώς καθορισμένα."],["02","Έγγραφο πεδίου","Το σχέδιο καναλιού, το σχέδιο παρακολούθησης και οι ευθύνες έχουν διορθωθεί."],["03","Φάση κατασκευής","Ιστοσελίδα, αυτοματισμοί και ενσωματώσεις υλοποιούνται."],["04","Εκκίνηση","Παρακολούθηση QA, εκκίνηση καμπάνιας και ροές CRM εμφανίζονται ζωντανά."],["05","Βελτιστοποίηση","Εβδομαδιαίες δοκιμές για δημιουργικά, διοχετεύσεις και πιστοποίηση."],["06","Κλιμάκωση","Οι λειτουργικές διαδρομές επεκτείνονται σε περιοχές/υπηρεσίες."]]},QL={copy:{eyebrow:"Sisteme de conducere pentru companiile locale din Germania",heroTitle:["Din Trafic","clienți potențiali calificați","ca sistem controlabil"],heroLead:"Conectăm site-ul web, AI, reclamele și analizele într-o singură arhitectură operațională, astfel încât vânzările, marketingul și proprietarii să lucreze cu aceleași date.",ctaTop:"Începe apelul strategic",heroChips:["Flux de plumb","AI Calify","Atribuire"],heroChipValues:["Aportul live","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Aterizare + Urmărire","Calificare AI","CRM Pipeline"],heroBadges:["Urmărire pe partea serverului","Punctajul potențial","Vizualizare ROAS"],servicesTitle:"Servicii ca module de sistem",servicesDesc:"Nu este un bloc de carduri uniform: un nucleu dominant, module de flancare și un strat de operațiuni compact.",trio:["Problemă","System","Rezultat"],detailsSummary:"Detalii de implementare",kpiBadgesTitle:"insigne KPI",kpiBadgesDesc:"Fiecare performanță este evaluată exclusiv folosind cifre cheie pe care vânzările și marketingul le pot citi și controla împreună.",signalLayerTitle:"Strat de semnal",signalItems:["evenimente GA4","Meta CAPI","Sincronizare CRM","GDPR moda"],opsTitle:"Note operaționale",opsItems:["Coada de test săptămânală","Realocarea bugetului","Sloturi QA canal"],packagesTitle:"pachete în logica SaaS",recommended:"Recomandat",timelineTitle:"Cum lucrăm",stepLabel:"Pas",controlTitle:"Camera de control: Rezultate în timp real",controlPanelTitle:"Arhitectura tabloului de bord",controlPanelDesc:"Datele canalului, semnalele canalului și starea CRM converg într-o singură vizualizare. Deciziile sunt luate la nivel de proces în loc să se bazeze pe sentimente.",miniCharts:["Volumul de plumb","Scor de calitate","Deal Velocity"],kpiPanelTitle:"Contoare KPI live",kpiLabels:["Clienti potentiali calificati","medie Primul răspuns","Conduce la programare","clustere ROAS"],controlBadges:["Control plumb","Controlul bugetului","Control pâlnie"],ctaBottom:"Solicitați domeniul de aplicare pentru sistemul dvs. principal"},systems:{website:{title:"Motor de site",problem:"Trafic există, dar utilizatorii de telefonie mobilă abandonează înainte de formular.",system:"Landing/Multi-Page cu GA4, Meta Pixel, urmărire pe server, configurare CRM și GDPR.",outcome:"Fiecare client potențial este înregistrat într-o manieră urmăribilă și atribuit în mod clar unui canal.",kpis:["rata de urmărire","Completarea formularului","Claritatea sursei potențiale"],details:["Modul de consimțământ configurat corect","Evenimente de apel și WhatsApp","CRM push în timp real"]},ai:{title:"Stratul de calificare AI",problem:"Prea multe întrebări necalificate blochează vânzările și echipa telefonică.",system:"AI chatbot, auto-calificare, fluxuri DM în WhatsApp/Instagram, automatizare e-mail, scoring lead.",outcome:"Echipa acordă prioritate clienților potențiali legate de vânzări în loc de sortarea inițială care necesită timp.",kpis:["Timpul primului răspuns","Cotă de lead calificată","Randamentul echipei de vânzări"],details:["Căi prompte specifice industriei","No Show Mementouri","Prioritizare după scor"]},ads:{title:"Achiziție plătită",problem:"Bugetul este distribuit între canale fără o buclă clară de învățare.",system:"Google Ads + Meta Ads + TikTok, teste A/B, asemănări, urmărirea conversiilor și vizualizarea ROAS.",outcome:"Bugetul este transferat în campanii cu o calitate ridicată a clienților potențiali în loc de volumul de clicuri pur.",kpis:["Costul pe client potențial calificat","Rentabilitatea cheltuielilor publicitare în funcție de campanie","Rata de câștiguri creative"],details:["Clustere regionale de campanii","Variante de formă în test","Actualizări ale publicului bazate pe semnal"]},analytics:{title:"Control Analytics",problem:"Deciziile se bazează pe capturi de ecran ale platformei, nu pe date fiabile ale canalului.",system:"Tabloul de bord al camerei de control cu ​​vizualizări ale canalului, pâlniei și CRM la un singur nivel.",outcome:"Deciziile săptămânale privind bugetul, optimizarea și scalarea sunt urmăribile pe baza datelor.",kpis:["Conduce la numire","Conduce la tranzacție","Viteza conductei"],details:["Segmentarea pe regiune/serviciu","Alerte de aruncare a pâlniei","Lista lunară de ipoteze"]}},packages:[{id:"starter",title:"Starter",scale:1,lead:"Pentru companiile locale care trec de la zero la o bază de lead-uri măsurabilă.",items:["Canal web + GA4","Meta Pixeli + Consimțământ","CRM Capture","Raportare de bază"],effect:"Vedere clară a surselor de plumb și un proces inițial rezistent."},{id:"creștere",title:"Creștere",scale:2,recommended:!0,lead:"Pentru echipele cu vânzări active care au nevoie de clienți potențiali mai calificați.",items:["Campanii Google + Meta","Fluxuri de calificare AI","Configurare testare A/B","Lead Scoring + Automatizare"],effect:"Cerere mai calificată, cu timpi de răspuns mai buni și prioritizare clară."},{id:"scară",title:"Scară",scale:3,lead:"Pentru companii cu mai multe regiuni sau clustere de servicii.",items:["Control multicanal","Atribuire pe partea serverului","Ops Web App Layer","Guvernarea camerei de control"],effect:"Scalare prin procese și date fiabile în loc de încercări și erori manuale."}],timeline:[["01","Apel strategic","Piața țintă, oferta și blocajele de plumb sunt clar definite."],["02","Document de aplicare","Planul canalului, planul de urmărire și responsabilitățile sunt fixate."],["03","Faza de construire","Site-ul web, automatizările și integrările sunt implementate."],["04","Lansare","Urmărirea QA, lansarea campaniei și fluxurile CRM sunt disponibile."],["05","Optimizare","Teste săptămânale pentru reclame, canale și calificare."],["06","Scalare","Rutele funcționale sunt extinse la regiuni/servicii."]]},WL={copy:{eyebrow:"Лид системи за местни компании в Германия",heroTitle:["От Трафик","квалифицирани потенциални клиенти","като управляема система"],heroLead:"Ние свързваме уебсайт, AI, реклами и анализи в една оперативна архитектура, така че продажбите, маркетингът и собствениците да работят с едни и същи данни.",ctaTop:"Започнете стратегическо обаждане",heroChips:["Водещ поток","AI Квалификация","Приписване"],heroChipValues:["Прием на живо","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Кацане + Проследяване","AI квалификация","CRM тръбопровод"],heroBadges:["Проследяване от страна на сървъра","Оловно точкуване","Изглед на ROAS"],servicesTitle:"Услуги като системни модули",servicesDesc:"Не е единен картов блок: доминиращо ядро, странични модули и компактен оперативен слой.",trio:["Проблем","система","Резултат"],detailsSummary:"Подробности за внедряването",kpiBadgesTitle:"KPI значки",kpiBadgesDesc:"Всяко представяне се оценява изключително с помощта на ключови цифри, които продажбите и маркетингът могат да четат и контролират заедно.",signalLayerTitle:"Сигнален слой",signalItems:["GA4 събития","Meta CAPI","CRM синхронизиране","GDPR мода"],opsTitle:"Оперативни бележки",opsItems:["Седмична тестова опашка","Преразпределение на бюджета","Слотове за QA на фунии"],packagesTitle:"пакети в SaaS логиката",recommended:"Препоръчва се",timelineTitle:"Как работим",stepLabel:"Стъпка",controlTitle:"Контролна зала: Резултати в реално време",controlPanelTitle:"Архитектура на таблото",controlPanelDesc:"Данните за канала, сигналите във фунията и състоянието на CRM се събират в един изглед. Решенията се вземат на ниво процес, вместо на базата на усещане.",miniCharts:["Водещ обем","Качествен рейтинг","Скорост на сделката"],kpiPanelTitle:"Броячи на KPI на живо",kpiLabels:["Квалифицирани потенциални клиенти","Ср. Първи отговор","Води до среща","ROAS клъстери"],controlBadges:["Контрол на оловото","Бюджетен контрол","Контрол на фунията"],ctaBottom:"Обхват на заявката за вашата водеща система"},systems:{website:{title:"Двигател на уебсайта",problem:"Трафик има, но мобилните потребители изоставят преди формуляра.",system:"Landing/Multi-Page с GA4, Meta Pixel, проследяване от страна на сървъра, настройка на CRM и GDPR.",outcome:"Всеки потенциален клиент се записва по начин, който може да бъде проследен и ясно присвоен на канал.",kpis:["скорост на проследяване","Попълване на формуляр","Яснота на водещия източник"],details:["Режимът на съгласие е конфигуриран правилно","Обаждания и събития в WhatsApp","CRM push в реално време"]},ai:{title:"Квалификационен слой на AI",problem:"Твърде много неквалифицирани запитвания блокират продажбите и телефонния екип.",system:"AI чатбот, автоматична квалификация, DM потоци в WhatsApp/Instagram, автоматизация на имейл, точкуване за потенциални клиенти.",outcome:"Екипът дава приоритет на потенциални клиенти, свързани с продажби, вместо отнемащо време първоначално сортиране.",kpis:["Време за първа реакция","Квалифициран водещ дял","Пропускателна способност на екипа по продажбите"],details:["Специфични за индустрията подканващи пътища","Напомняния за неявяване","Приоритизиране по точки"]},ads:{title:"Платено придобиване",problem:"Бюджетът се разпределя между каналите без ясен цикъл на обучение.",system:"Google Ads + Meta Ads + TikTok, A/B тестове, lookalikes, проследяване на реализациите и изглед на ROAS.",outcome:"Бюджетът се влива в кампании с високо качество на потенциалните клиенти вместо чист обем на кликванията.",kpis:["Цена на квалифициран потенциален клиент","ROAS по кампания","Creative Win Rate"],details:["Регионални групи от кампании","Варианти на формата в теста","Актуализации на аудиторията, базирани на сигнала"]},analytics:{title:"Контролен анализ",problem:"Решенията се основават на екранни снимки на платформа вместо надеждни данни за фунията.",system:"Табло за управление на контролната зала с изгледи на канал, фуния и CRM на едно ниво.",outcome:"Седмичните решения за бюджет, оптимизация и мащабиране могат да бъдат проследени въз основа на данни.",kpis:["Води до назначаване","Води до сделка","Скорост на тръбопровода"],details:["Сегментиране по регион/услуга","Сигнали за падане на фуния","Месечен списък с хипотези"]}},packages:[{id:"стартер",title:"Стартер",scale:1,lead:"За местни фирми, преминаващи от нула към измерима потенциална база.",items:["Уеб фуния + GA4","Мета пиксели + съгласие","CRM Capture","Основно отчитане"],effect:"Ясен поглед върху източниците на олово и устойчив първоначален процес."},{id:"растеж",title:"Растеж",scale:2,recommended:!0,lead:"За екипи с активни продажби, които се нуждаят от повече квалифицирани потенциални клиенти.",items:["Google + мета кампании","AI квалификационни потоци","Настройка на A/B тестване","Водещ резултат + автоматизация"],effect:"По-квалифицирано търсене с по-добро време за реакция и ясно приоритизиране."},{id:"мащаб",title:"Мащаб",scale:3,lead:"За компании с множество региони или сервизни клъстери.",items:["Многоканален контрол","Приписване от страна на сървъра","Ops Web App Layer","Управление на контролната зала"],effect:"Мащабиране чрез процеси и надеждни данни вместо ръчни проби и грешки."}],timeline:[["01","Стратегическо обаждане","Целевият пазар, офертата и тесните места са ясно дефинирани."],["02","Документ за обхват","Планът на канала, планът за проследяване и отговорностите са фиксирани."],["03","Фаза на изграждане","Уеб сайт, автоматизации и интеграции са внедрени."],["04","Стартиране","Проследяване на QA, стартиране на кампания и CRM потоци стават активни."],["05","Оптимизация","Седмични тестове за рекламни послания, фунии и квалификация."],["06","Мащабиране","Функциониращите маршрути са разширени до региони/услуги."]]},ZL={tr:UL,ar:IL,pl:$L,ku:qL,fa:FL,it:KL,es:YL,el:XL,ro:QL,bg:WL},Hw=Ei`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,un=q.div`
  padding: 48px 0 96px;

  @media (max-width: 767px) {
    padding: 24px 0 72px;
  }
`,dn=q.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
`,Vn=q(ae.section).attrs({initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.22},variants:ft})`
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
`,ct=q(ae.section).attrs({initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.18},variants:ft})`
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
`,Ku=q(ae.div).attrs({initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.12},variants:Lt})`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`,tu=q(ae.div).attrs({initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.12},variants:Lt})`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`,Ve=q(ae.article).attrs({initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:Fe})`
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
`,fg=q(Ve).attrs({as:ae.section})`
  margin-top: 72px;

  @media (max-width: 767px) {
    margin-top: 48px;
  }
`,Ie=q.p`
  color: rgba(255, 255, 255, 0.72);
`,aa=q.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 767px) {
    width: 100%;
    gap: 16px;
  }
`,Gw=`
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
`,ra=q(ti)`
  ${Gw}
  background: linear-gradient(120deg, #f39a4f, #ffe1b5, #f39a4f);
  background-size: 220% 220%;
  color: #121723;

  &:hover,
  &:focus-visible {
    color: #f8fafc;
    background: linear-gradient(120deg, #121723, #253a64, #121723);
    background-size: 220% 220%;
    animation: ${Hw} 2.2s linear infinite;
    box-shadow: 0 12px 22px rgba(21, 31, 52, 0.45);
  }
`,Uw=q.button`
  ${Gw}
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
    animation: ${Hw} 2.2s linear infinite;
    box-shadow: 0 12px 22px rgba(21, 31, 52, 0.45);
  }
`,$t=q.span`
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
`,Po=q.ul`
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
`;q.p`
  font-size: 30px;
  color: #ffd08a;
  margin: 8px 0;
`;q.div`
  display: grid;
  gap: 10px;
`;q.div`
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
`;const Iw=q.form`
  display: grid;
  gap: 10px;
`,nu=q.label`
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
`,JL=Ei`
  0% { box-shadow: 0 0 0 0 rgba(58, 197, 255, 0.28); }
  70% { box-shadow: 0 0 0 14px rgba(58, 197, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(58, 197, 255, 0); }
`,eD=Ei`
  0% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(0, -8px, 0); }
  100% { transform: translate3d(0, 0, 0); }
`,tD=q(un)`
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
`,yo=q(ae.section)`
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
`,nD=q(ae.section)`
  display: grid;
  grid-template-columns: 1.06fr 0.94fr;
  gap: clamp(24px, 3vw, 44px);
  padding-top: clamp(44px, 6vw, 80px);

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,iD=q.div`
  display: grid;
  gap: 20px;
  align-content: start;
`,aD=q.p`
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 12px;
  color: rgba(207, 233, 255, 0.8);
`,rD=q.h1`
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
`,sD=q.p`
  margin: 8px 0 18px;
  max-width: 62ch;
  color: rgba(235, 244, 255, 0.82);
  font-size: clamp(15px, 2vw, 19px);
  line-height: 1.62;
`,ev=q(ra)`
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
`,oD=q.div`
  position: relative;
  min-height: clamp(360px, 56vw, 520px);
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
`,lD=q.div`
  position: absolute;
  width: 220px;
  height: 220px;
  top: -72px;
  right: -54px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(70, 198, 255, 0.35), rgba(70, 198, 255, 0));
  filter: blur(2px);
  animation: ${eD} 6.2s ease-in-out infinite;
`,cD=q.div`
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
`,uD=q(ae.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
`,Jp=q(ae.div)`
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
`,dD=q(ae.div)`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 10px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`,fD=q.div`
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
`,pD=q.div`
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
`,hD=q.div`
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
`,Dc=q(ae.div)`
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
`,eh=q(ae.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Aa=q(ae.span)`
  border-radius: 999px;
  padding: 7px 11px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #d8f2ff;
  border: 1px solid rgba(111, 206, 255, 0.38);
  background: rgba(22, 41, 62, 0.76);
  box-shadow: inset 0 0 12px rgba(80, 193, 255, 0.14);
`,mD=q.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,gD=q.button`
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
`,bD=q(ae.div)`
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
`,Pc=q(ae.article)`
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
`,yD=q.div`
  margin-top: 16px;
  display: grid;
  gap: 10px;
`,th=q(ae.div)`
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
`,xD=q.details`
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
`,vD=q.div`
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
`,wD=q(ae.div)`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,SD=q(ae.article)`
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
`,TD=q.span`
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
`,jD=q.div`
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
`,kD=q.p`
  margin: 14px 0 20px;
  color: rgba(220, 238, 255, 0.84);
  line-height: 1.58;
`,ED=q(ae.ol)`
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
`,AD=q(ae.li)`
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
    animation: ${JL} 2.8s infinite;
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
`,CD=q.span`
  display: block;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(173, 216, 247, 0.82);
`,MD=q.h3`
  margin: 8px 0 12px;
  font-size: 18px;
`,zD=q(ae.div)`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 18px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,tv=q(ae.article)`
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
`,RD=q.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Nc=q(ae.div)`
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
`,OD=q.div`
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
`,xo=q(Ie)`
  font-size: 14px;
  line-height: 1.6;
  margin: 8px 0 18px;
`,Gr={website:{title:"Website Engine",icon:d.jsx(ig,{}),problem:"Traffic ist vorhanden, aber mobile Nutzer brechen vor dem Formular ab.",system:"Landing/Multi-Page mit GA4, Meta Pixel, Server-Side Tracking, CRM und DSGVO-Setup.",outcome:"Jeder Lead wird nachvollziehbar erfasst und eindeutig einem Kanal zugeordnet.",kpis:["Tracking-Quote","Form Completion","Lead Source Clarity"],details:["Consent Mode korrekt konfiguriert","Call- und WhatsApp-Events","CRM Push in Echtzeit"]},ai:{title:"AI Qualification Layer",icon:d.jsx(Ba,{}),problem:"Zu viele unqualifizierte Anfragen blockieren Vertrieb und Telefonteam.",system:"AI-Chatbot, Auto-Qualifizierung, DM-Flows in WhatsApp/Instagram, E-Mail-Automation, Lead Scoring.",outcome:"Das Team priorisiert kaufnahe Leads statt zeitintensiver Erstsortierung.",kpis:["First Response Time","Qualified Lead Share","Sales Team Throughput"],details:["Branchenspezifische Prompt-Pfade","No-Show Reminders","Priorisierung nach Score"]},ads:{title:"Paid Acquisition",icon:d.jsx(rl,{}),problem:"Das Budget verteilt sich ohne klare Lernschleife zwischen den Kanaelen.",system:"Google Ads + Meta Ads + TikTok, A/B Tests, Lookalikes, Conversion Tracking und ROAS-View.",outcome:"Budget fliesst in Kampagnen mit hoher Lead-Qualitaet statt in reine Klickmenge.",kpis:["Cost per Qualified Lead","ROAS by Campaign","Creative Win Rate"],details:["Regionale Kampagnencluster","Form-Varianten im Test","Signalbasierte Audience-Updates"]},analytics:{title:"Control Analytics",icon:d.jsx(Va,{}),problem:"Entscheidungen basieren auf Plattform-Screenshots statt auf belastbaren Funnel-Daten.",system:"Control-Room Dashboard mit Kanal-, Funnel- und CRM-Sicht in einer Ebene.",outcome:"Woechentliche Entscheidungen zu Budget, Optimierung und Skalierung sind datenbasiert nachvollziehbar.",kpis:["Lead to Appointment","Lead to Deal","Pipeline Velocity"],details:["Segmentierung nach Region/Service","Alerts bei Funnel Drop","Monatliche Hypothesenliste"]}},LD={website:{title:"Website Engine",icon:d.jsx(ig,{}),problem:"Трафік є, але мобільні користувачі не доходять до відправки форми.",system:"Landing або multi-page сайт з GA4, Meta Pixel, server-side tracking, CRM та DSGVO-базою.",outcome:"Кожен лід фіксується і чітко прив’язується до каналу.",kpis:["Якість трекінгу","Form Completion","Lead Source Clarity"],details:["Коректно налаштований Consent Mode","Call і WhatsApp події","CRM push у реальному часі"]},ai:{title:"AI Qualification Layer",icon:d.jsx(Ba,{}),problem:"Надто багато нецільових звернень перевантажують продажі й телефонну лінію.",system:"AI-чатбот, автокваліфікація, DM-flow у WhatsApp/Instagram, email-автоматизація та lead scoring.",outcome:"Команда в першу чергу працює з лідами, які ближчі до покупки.",kpis:["First Response Time","Qualified Lead Share","Sales Team Throughput"],details:["Промпт-потоки під нішу","No-show нагадування","Пріоритезація за scoring"]},ads:{title:"Paid Acquisition",icon:d.jsx(rl,{}),problem:"Бюджет розподіляється між каналами без стабільної логіки навчання.",system:"Google Ads + Meta Ads + TikTok, A/B тести, lookalike аудиторії, conversion tracking і ROAS-аналіз.",outcome:"Бюджет іде в кампанії з кращою якістю лідів, а не просто в кліки.",kpis:["Cost per Qualified Lead","ROAS by Campaign","Creative Win Rate"],details:["Регіональні кластери кампаній","Тести варіантів форм","Оновлення аудиторій за сигналами"]},analytics:{title:"Control Analytics",icon:d.jsx(Va,{}),problem:"Рішення приймаються за скріншотами платформ, а не за даними воронки.",system:"Control-room dashboard з єдиним шаром каналів, воронки та CRM.",outcome:"Щотижневі рішення щодо бюджету й оптимізації приймаються на основі даних.",kpis:["Lead to Appointment","Lead to Deal","Pipeline Velocity"],details:["Сегментація за регіоном і послугою","Алерти при просіданні funnel","Щомісячний backlog гіпотез"]}},$w=[{id:"starter",title:"Starter",scale:1,lead:"Fuer lokale Betriebe, die von null auf eine messbare Lead-Basis gehen.",items:["Web-Funnel + GA4","Meta Pixel + Consent","CRM Capture","Basis-Reporting"],effect:"Klare Sicht auf Lead-Quellen und ein belastbarer Erstprozess."},{id:"growth",title:"Growth",scale:2,recommended:!0,lead:"Fuer Teams mit aktivem Vertrieb, die mehr qualifizierte Leads brauchen.",items:["Google + Meta Kampagnen","AI Qualification Flows","A/B Testing Setup","Lead Scoring + Automation"],effect:"Mehr qualifizierte Nachfrage bei besserer Reaktionszeit und sauberer Priorisierung."},{id:"scale",title:"Scale",scale:3,lead:"Fuer Unternehmen mit mehreren Regionen oder Leistungsclustern.",items:["Multi-Channel Steuerung","Server-Side Attribution","Ops Web-App Layer","Control-Room Governance"],effect:"Skalierung ueber Prozesse und belastbare Daten statt manuellem Trial-and-Error."}],DD=[{id:"starter",title:"Starter",scale:1,lead:"Для локального бізнесу, який переходить від нуля до вимірюваної lead-системи.",items:["Web-funnel + GA4","Meta Pixel + Consent","CRM Capture","Базова аналітика"],effect:"Прозора картина джерел лідів і робочий базовий процес."},{id:"growth",title:"Growth",scale:2,recommended:!0,lead:"Для команд з активним продажем, яким потрібні якісніші ліди.",items:["Google + Meta кампанії","AI Qualification Flows","A/B Testing Setup","Lead Scoring + Automation"],effect:"Більше кваліфікованого попиту та швидша реакція команди."},{id:"scale",title:"Scale",scale:3,lead:"Для компаній з кількома регіонами або кластерами послуг.",items:["Multi-channel керування","Server-side attribution","Ops Web-App Layer","Control-Room Governance"],effect:"Масштабування через процеси та дані замість ручного trial-and-error."}],qw=[["01","Strategischer Call","Zielmarkt, Angebot und Lead-Engpass werden klar definiert."],["02","Scope Dokument","Kanalplan, Tracking-Plan und Verantwortlichkeiten werden fixiert."],["03","Build Phase","Website, Automationen und Integrationen werden umgesetzt."],["04","Launch","Tracking QA, Kampagnenstart und CRM-Flows gehen live."],["05","Optimierung","Woechentliche Tests fuer Creatives, Funnel und Qualifizierung."],["06","Skalierung","Funktionierende Strecken werden auf Regionen/Leistungen erweitert."]],PD=[["01","Стратегічний дзвінок","Фіксуємо ринок, офер і головні вузькі місця у lead-процесі."],["02","Scope документ","Узгоджуємо канали, tracking-план і відповідальності."],["03","Етап розробки","Реалізуємо сайт, автоматизації й інтеграції."],["04","Запуск","Робимо QA трекінгу, запускаємо кампанії та CRM-flow."],["05","Оптимізація","Щотижнево тестуємо креативи, воронку та логіку кваліфікації."],["06","Масштабування","Робочі зв’язки переносимо на нові регіони й послуги."]],Fw={eyebrow:"Lead-Systeme fuer lokale Unternehmen in Deutschland",heroTitle:["Aus Traffic","qualifizierte Leads","als steuerbares System"],heroLead:"Wir verbinden Website, AI, Ads und Analytics in einer operativen Architektur, damit Vertrieb, Marketing und Inhaber mit denselben Daten arbeiten.",ctaTop:"Strategischen Call starten",heroChips:["Lead Flow","AI Qualify","Attribution"],heroChipValues:["Live Intake","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Landing + Tracking","AI Qualification","CRM Pipeline"],heroBadges:["Server-Side Tracking","Lead Scoring","ROAS View"],servicesTitle:"Leistungen als System-Module",servicesDesc:"Kein gleichfoermiger Kartenblock: ein dominanter Kern, flankierende Module und ein kompakter Operations-Layer.",trio:["Problem","System","Outcome"],detailsSummary:"Implementierungsdetails",kpiBadgesTitle:"KPI Badges",kpiBadgesDesc:"Jede Leistung wird ausschliesslich ueber Kennzahlen bewertet, die Sales und Marketing gemeinsam lesen und steuern koennen.",signalLayerTitle:"Signal Layer",signalItems:["GA4 Events","Meta CAPI","CRM Sync","DSGVO Mode"],opsTitle:"Ops Notes",opsItems:["Weekly Test Queue","Budget Reallocation","Funnel QA Slots"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Empfohlen",timelineTitle:"Wie wir arbeiten",stepLabel:"Step",controlTitle:"Control Room: Ergebnisse in Echtzeit",controlPanelTitle:"Dashboard Architektur",controlPanelDesc:"Kanaldaten, Funnel-Signale und CRM-Status laufen in einer Ansicht zusammen. Entscheidungen erfolgen auf Prozessebene statt aus dem Bauchgefuehl.",miniCharts:["Lead Volume","Quality Score","Deal Velocity"],kpiPanelTitle:"Live KPI Counters",kpiLabels:["Qualified Leads","Avg. First Response","Lead to Termin","ROAS Cluster"],controlBadges:["Lead Kontrolle","Budget Kontrolle","Funnel Kontrolle"],ctaBottom:"Scope fuer Ihr Lead-System anfragen"},ND={eyebrow:"Lead-системи для локального бізнесу в Німеччині",heroTitle:["З трафіку","у кваліфіковані ліди","як керовану систему"],heroLead:"Поєднуємо сайт, AI, рекламу та аналітику в єдину операційну архітектуру, щоб маркетинг, продажі й власник працювали з одними даними.",ctaTop:"Запустити стратегічний дзвінок",heroChips:["Lead Flow","AI Qualify","Attribution"],heroChipValues:["Live Intake","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Landing + Tracking","AI Qualification","CRM Pipeline"],heroBadges:["Server-Side Tracking","Lead Scoring","ROAS View"],servicesTitle:"Послуги як модулі системи",servicesDesc:"Не одноманітні картки, а система: домінантне ядро, підтримуючі модулі та компактний операційний шар.",trio:["Проблема","Система","Результат"],detailsSummary:"Деталі реалізації",kpiBadgesTitle:"KPI Badges",kpiBadgesDesc:"Кожну послугу оцінюємо тільки за метриками, які спільно читають маркетинг і продажі.",signalLayerTitle:"Signal Layer",signalItems:["GA4 Events","Meta CAPI","CRM Sync","DSGVO Mode"],opsTitle:"Ops Notes",opsItems:["Weekly Test Queue","Budget Reallocation","Funnel QA Slots"],packagesTitle:"Пакети в SaaS-логіці",recommended:"Рекомендовано",timelineTitle:"Як ми працюємо",stepLabel:"Крок",controlTitle:"Control Room: результати в реальному часі",controlPanelTitle:"Архітектура дашборду",controlPanelDesc:"Дані каналів, сигнали воронки та CRM-статуси зібрані в одному view. Рішення приймаються на рівні процесу, а не інтуїтивно.",miniCharts:["Lead Volume","Quality Score","Deal Velocity"],kpiPanelTitle:"Live KPI Counters",kpiLabels:["Qualified Leads","Avg. First Response","Lead to Termin","ROAS Cluster"],controlBadges:["Контроль лідів","Контроль бюджету","Контроль воронки"],ctaBottom:"Запросити scope для вашої lead-системи"},we=ZL,Fn=e=>({website:{...Gr.website,...e.website},ai:{...Gr.ai,...e.ai},ads:{...Gr.ads,...e.ads},analytics:{...Gr.analytics,...e.analytics}}),VD={de:Gr,uk:LD,tr:Fn(we.tr.systems),ar:Fn(we.ar.systems),pl:Fn(we.pl.systems),ku:Fn(we.ku.systems),fa:Fn(we.fa.systems),it:Fn(we.it.systems),es:Fn(we.es.systems),el:Fn(we.el.systems),ro:Fn(we.ro.systems),bg:Fn(we.bg.systems)},BD={de:$w,uk:DD,tr:we.tr.packages,ar:we.ar.packages,pl:we.pl.packages,ku:we.ku.packages,fa:we.fa.packages,it:we.it.packages,es:we.es.packages,el:we.el.packages,ro:we.ro.packages,bg:we.bg.packages},_D={de:qw,uk:PD,tr:we.tr.timeline,ar:we.ar.timeline,pl:we.pl.timeline,ku:we.ku.timeline,fa:we.fa.timeline,it:we.it.timeline,es:we.es.timeline,el:we.el.timeline,ro:we.ro.timeline,bg:we.bg.timeline},HD={de:Fw,uk:ND,tr:we.tr.copy,ar:we.ar.copy,pl:we.pl.copy,ku:we.ku.copy,fa:we.fa.copy,it:we.it.copy,es:we.es.copy,el:we.el.copy,ro:we.ro.copy,bg:we.bg.copy},GD=["34%","52%","47%","70%","62%","85%","73%"],UD=()=>{const{i18n:e}=$e(),t=(e.resolvedLanguage||e.language||"de").split("-")[0],i=HD[t]??Fw,a=VD[t]??Gr,o=BD[t]??$w,l=_D[t]??qw,[u,f]=E.useState("website"),p=E.useMemo(()=>a[u],[u,a]);return d.jsx(tD,{children:d.jsxs(dn,{children:[d.jsxs(nD,{initial:"hidden",animate:"visible",variants:Lt,children:[d.jsxs(iD,{as:ae.div,variants:Rc,children:[d.jsx(aD,{children:i.eyebrow}),d.jsxs(rD,{children:[d.jsx("span",{children:i.heroTitle[0]}),d.jsx("span",{children:i.heroTitle[1]}),d.jsx("span",{children:i.heroTitle[2]})]}),d.jsx(sD,{children:i.heroLead}),d.jsx(aa,{children:d.jsxs(ev,{to:"/kontakt",children:[d.jsx(Pn,{})," ",i.ctaTop]})})]}),d.jsxs(oD,{as:ae.div,variants:Wi,children:[d.jsx(lD,{}),d.jsxs(cD,{children:[d.jsxs(uD,{variants:Lt,initial:"hidden",animate:"visible",children:[d.jsxs(Jp,{variants:Fe,children:[d.jsx("span",{children:i.heroChips[0]}),d.jsx("b",{children:d.jsx(Ha,{text:i.heroChipValues[0],durationMs:1400,storageKey:"hero_lead_flow"})})]}),d.jsxs(Jp,{variants:Fe,children:[d.jsx("span",{children:i.heroChips[1]}),d.jsx("b",{children:i.heroChipValues[1]})]}),d.jsxs(Jp,{variants:Fe,children:[d.jsx("span",{children:i.heroChips[2]}),d.jsx("b",{children:i.heroChipValues[2]})]})]}),d.jsxs(dD,{variants:Lt,initial:"hidden",animate:"visible",children:[d.jsx(fD,{children:d.jsx(pD,{children:GD.map((m,g)=>d.jsx(ae.span,{style:{height:m},animate:{scaleY:[.78,1.08,.9,1.02,.78],opacity:[.78,1,.86,.96,.78]},transition:{duration:2.6,delay:g*.16,repeat:1/0,ease:"easeInOut"}},m+g))})}),d.jsxs(hD,{children:[d.jsx(Dc,{variants:Wi,children:i.flowNodes[0]}),d.jsx(Dc,{variants:Wi,children:i.flowNodes[1]}),d.jsx(Dc,{variants:Wi,children:i.flowNodes[2]}),d.jsx(Dc,{variants:Wi,children:i.flowNodes[3]})]})]}),d.jsxs(eh,{variants:Lt,initial:"hidden",animate:"visible",children:[d.jsx(Aa,{variants:Fe,children:i.heroBadges[0]}),d.jsx(Aa,{variants:Fe,children:i.heroBadges[1]}),d.jsx(Aa,{variants:Fe,children:i.heroBadges[2]})]})]})]})]}),d.jsxs(yo,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:ft,children:[d.jsx("h2",{children:i.servicesTitle}),d.jsx(xo,{children:i.servicesDesc}),d.jsx(mD,{children:Object.keys(a).map(m=>d.jsx(gD,{$active:u===m,onClick:()=>f(m),children:a[m].title},m))}),d.jsxs(bD,{variants:Lt,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.16},children:[d.jsxs(Pc,{$area:"dominant",$featured:!0,variants:Rc,children:[d.jsxs("h3",{children:[d.jsx($t,{children:p.icon}),p.title]}),d.jsxs(yD,{children:[d.jsxs(th,{variants:ft,children:[d.jsx("strong",{children:i.trio[0]}),d.jsx("span",{children:p.problem})]}),d.jsxs(th,{variants:ft,children:[d.jsx("strong",{children:i.trio[1]}),d.jsx("span",{children:p.system})]}),d.jsxs(th,{variants:ft,children:[d.jsx("strong",{children:i.trio[2]}),d.jsx("span",{children:p.outcome})]})]}),d.jsxs(xD,{children:[d.jsx("summary",{children:i.detailsSummary}),d.jsx("ul",{children:p.details.map(m=>d.jsx("li",{children:m},m))})]})]}),d.jsxs(Pc,{$area:"mediumA",variants:ft,children:[d.jsxs("h3",{children:[d.jsx($t,{children:d.jsx(pu,{})}),i.kpiBadgesTitle]}),d.jsx(eh,{variants:Lt,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:p.kpis.map(m=>d.jsx(Aa,{variants:Fe,children:m},m))}),d.jsx(xo,{style:{marginTop:12},children:i.kpiBadgesDesc})]}),d.jsxs(Pc,{$area:"mediumB",variants:Wi,children:[d.jsxs("h3",{children:[d.jsx($t,{children:d.jsx(Fo,{})}),i.signalLayerTitle]}),d.jsxs(vD,{children:[d.jsxs("span",{children:[d.jsx(kt,{})," ",i.signalItems[0]]}),d.jsxs("span",{children:[d.jsx(kt,{})," ",i.signalItems[1]]}),d.jsxs("span",{children:[d.jsx(kt,{})," ",i.signalItems[2]]}),d.jsxs("span",{children:[d.jsx(kt,{})," ",i.signalItems[3]]})]})]}),d.jsxs(Pc,{$area:"compact",$compact:!0,variants:Fe,children:[d.jsxs("h3",{children:[d.jsx($t,{children:d.jsx(ng,{})}),i.opsTitle]}),d.jsxs(Po,{children:[d.jsxs("li",{children:[d.jsx(kt,{})," ",i.opsItems[0]]}),d.jsxs("li",{children:[d.jsx(kt,{})," ",i.opsItems[1]]}),d.jsxs("li",{children:[d.jsx(kt,{})," ",i.opsItems[2]]})]})]})]})]}),d.jsxs(yo,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:ft,children:[d.jsx("h2",{children:i.packagesTitle}),d.jsx(wD,{variants:Lt,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.16},children:o.map(m=>d.jsxs(SD,{$recommended:m.recommended,variants:m.recommended?Fe:ft,children:[m.recommended?d.jsx(TD,{children:i.recommended}):null,d.jsx("h3",{children:m.title}),d.jsx(kD,{children:m.lead}),d.jsx(Po,{children:m.items.map(g=>d.jsxs("li",{children:[d.jsx(kt,{})," ",g]},g))}),d.jsxs(jD,{children:[d.jsx("i",{className:m.scale>=1?"on":""}),d.jsx("i",{className:m.scale>=2?"on":""}),d.jsx("i",{className:m.scale>=3?"on":""})]}),d.jsx(xo,{style:{marginTop:12},children:m.effect})]},m.id))})]}),d.jsxs(yo,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:ft,children:[d.jsx("h2",{children:i.timelineTitle}),d.jsx(ED,{variants:Lt,children:l.map(m=>d.jsxs(AD,{variants:Number(m[0])%2===0?Wi:Rc,children:[d.jsxs(CD,{children:[i.stepLabel," ",m[0]]}),d.jsx(MD,{children:m[1]}),d.jsx(xo,{children:m[2]})]},m[0]))})]}),d.jsxs(yo,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:ft,children:[d.jsx("h2",{children:i.controlTitle}),d.jsxs(zD,{variants:Lt,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.18},children:[d.jsxs(tv,{variants:Rc,children:[d.jsx("h3",{children:i.controlPanelTitle}),d.jsx(xo,{children:i.controlPanelDesc}),d.jsxs(OD,{children:[d.jsxs("div",{children:[i.miniCharts[0],d.jsx("i",{style:{width:"68%"}})]}),d.jsxs("div",{children:[i.miniCharts[1],d.jsx("i",{style:{width:"82%"}})]}),d.jsxs("div",{children:[i.miniCharts[2],d.jsx("i",{style:{width:"59%"}})]})]})]}),d.jsxs(tv,{variants:Wi,children:[d.jsx("h3",{children:i.kpiPanelTitle}),d.jsxs(RD,{children:[d.jsxs(Nc,{variants:Fe,children:[d.jsx("span",{children:i.kpiLabels[0]}),d.jsx("strong",{children:d.jsx(ko,{start:0,max:38,durationMs:1800,storageKey:"metric_ql"})})]}),d.jsxs(Nc,{variants:Fe,children:[d.jsx("span",{children:i.kpiLabels[1]}),d.jsx("strong",{children:d.jsx(ko,{start:0,max:11,suffix:"m",durationMs:1700,storageKey:"metric_rt"})})]}),d.jsxs(Nc,{variants:Fe,children:[d.jsx("span",{children:i.kpiLabels[2]}),d.jsx("strong",{children:d.jsx(ko,{start:0,max:43,suffix:"%",durationMs:1900,storageKey:"metric_l2a"})})]}),d.jsxs(Nc,{variants:Fe,children:[d.jsx("span",{children:i.kpiLabels[3]}),d.jsx("strong",{children:d.jsx(ko,{start:0,max:3.8,decimals:1,prefix:"x",durationMs:2100,storageKey:"metric_roas"})})]})]}),d.jsxs(eh,{style:{marginTop:12},variants:Lt,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[d.jsx(Aa,{variants:Fe,children:i.controlBadges[0]}),d.jsx(Aa,{variants:Fe,children:i.controlBadges[1]}),d.jsx(Aa,{variants:Fe,children:i.controlBadges[2]})]})]})]})]}),d.jsx(yo,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:ft,children:d.jsx(aa,{children:d.jsxs(ev,{to:"/kontakt",children:[d.jsx(Pn,{})," ",i.ctaBottom]})})})]})})},ID={hidden:{opacity:0,y:24},show:{opacity:1,y:0}},$D=Ei`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`,qD=Ei`
  0% { box-shadow: 0 0 0 rgba(73, 157, 255, 0); }
  50% { box-shadow: 0 0 30px rgba(73, 157, 255, 0.28); }
  100% { box-shadow: 0 0 0 rgba(73, 157, 255, 0); }
`,FD=q.div`
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
`,KD=q.section`
  display: grid;
  gap: 26px;
  grid-template-columns: 1.15fr 1fr;
  align-items: center;
  padding: 84px 0 24px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    padding-top: 52px;
  }
`,YD=q.div`
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
`,XD=q.span`
  color: #ffd08a;
  text-shadow: 0 0 28px rgba(255, 193, 104, 0.34);
`,QD=q.div`
  margin-top: 24px;
`,Kw=q(ra)`
  min-height: 54px;
  padding: 0 28px;
  border: 1px solid rgba(255, 202, 128, 0.35);
  box-shadow: 0 10px 24px rgba(18, 33, 58, 0.34);

  &:hover,
  &:focus-visible {
    box-shadow: 0 0 0 1px rgba(255, 213, 150, 0.55), 0 16px 30px rgba(255, 183, 77, 0.28);
  }
`,WD=q(ae.div)`
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
`,ZD=q.div`
  position: absolute;
  inset: 22px;
  display: grid;
  gap: 12px;
`,nh=q.div`
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
`,ih=q.div`
  flex: 1;
  height: 9px;
  margin-left: 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
`,ah=q(ae.div)`
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #3f8cff, #76b8ff);
`,JD=q(ae.div)`
  margin-top: 4px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(7, 11, 22, 0.7);
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  animation: ${$D} 5.2s ease-in-out infinite;
`,vo=q(ae.div)`
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
`,eP=q(ct)`
  margin-top: 26px;
`,tP=q.div`
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.86), rgba(10, 16, 30, 0.82));
  padding: 18px;
  box-shadow: 0 20px 54px rgba(5, 9, 18, 0.5);
`,nP=q.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,wo=q(ae.div)`
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
`,iP=q.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 10px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,aP=q.div`
  display: inline-flex;
  gap: 6px;
  margin-top: 14px;
  margin-bottom: 8px;
  padding: 6px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(11, 17, 32, 0.72);
`,nv=q.button`
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
`,rP=q(ae.article)`
  position: relative;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(11, 17, 32, 0.78);
  padding: ${({$recommended:e})=>e?"24px":"20px"};
  box-shadow: ${({$recommended:e})=>e?"0 22px 60px rgba(32, 78, 148, 0.36)":"0 14px 34px rgba(5, 9, 18, 0.45)"};
  transform: ${({$recommended:e})=>e?"translateY(-6px)":"none"};
  border-color: ${({$recommended:e})=>e?"rgba(118, 182, 255, 0.68)":"rgba(255, 255, 255, 0.14)"};
  animation: ${({$recommended:e})=>e?qD:"none"} 4.6s ease-in-out infinite;

  &:hover {
    transform: ${({$recommended:e})=>e?"translateY(-9px)":"translateY(-5px)"};
    border-color: rgba(245, 195, 120, 0.58);
  }
`,sP=q.span`
  position: absolute;
  right: 16px;
  top: 14px;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 999px;
  background: linear-gradient(120deg, rgba(118, 182, 255, 0.24), rgba(255, 206, 132, 0.24));
  border: 1px solid rgba(153, 201, 255, 0.45);
`,oP=q.div`
  font-size: 34px;
  font-weight: 800;
  line-height: 1;
  margin: 10px 0 3px;
  color: #ffd28f;
`,lP=q.div`
  color: rgba(255, 255, 255, 0.66);
  font-size: 13px;
`,rh=q.div`
  margin-top: 14px;
  margin-bottom: 8px;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.58);
`,sh=q.ul`
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
`,cP=q.div`
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
`,uP=q.div`
  margin-top: 16px;
  padding: 16px;
  border-radius: 14px;
  border: 1px solid rgba(118, 182, 255, 0.2);
  background:
    linear-gradient(180deg, rgba(17, 27, 49, 0.82), rgba(10, 16, 31, 0.84)),
    radial-gradient(circle at top right, rgba(255, 206, 132, 0.12), transparent 42%);
`,dP=q.div`
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.58);
`,fP=q.div`
  margin-top: 8px;
  font-size: 28px;
  line-height: 1.05;
  font-weight: 800;
  color: #8fc5ff;
`,pP=q.div`
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 13px;
`,hP=q.div`
  margin-top: 12px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  overflow: hidden;
  background: rgba(11, 17, 32, 0.7);
`,mP=q.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: 12px 16px;
  gap: 8px;
  background: rgba(255, 255, 255, 0.06);
  font-weight: 700;
`,Lr=q.div`
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
`,Mn=q.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;

  svg {
    color: #8ec4ff;
  }
`,gP=q.div`
  margin-top: 12px;
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,oh=q.div`
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
`,bP=q.section`
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
`,yP=q(Kw)`
  margin-top: 20px;
  min-height: 58px;
  padding: 0 32px;
  font-size: 16px;
`,xP=()=>{const{t:e}=$e(),[t,i]=E.useState("monthly"),o=["starter","business","pro"].map(l=>({key:l,recommended:l==="business",name:e(`pricing.packages.${l}.name`),desc:e(`pricing.packages.${l}.desc`),price:e(`pricing.packages.${l}.price`),range:e(`pricing.packages.${l}.range`),core:e(`pricing.packages.${l}.core`,{returnObjects:!0}),plus:e(`pricing.packages.${l}.plus`,{returnObjects:!0}),outcome:e(`pricing.packages.${l}.outcome`),subscriptionPrice:e(`pricing.packages.${l}.subscription.${t}.price`),subscriptionMeta:e(`pricing.packages.${l}.subscription.${t}.meta`),subscriptionItems:e(`pricing.packages.${l}.subscription.includes`,{returnObjects:!0})}));return d.jsx(un,{children:d.jsx(dn,{children:d.jsxs(FD,{children:[d.jsxs(KD,{as:ae.section,initial:"hidden",animate:"show",variants:ID,transition:{duration:.64,ease:kn},children:[d.jsxs(YD,{children:[d.jsxs("h1",{children:[e("pricing.hero.titleLine1"),d.jsx("br",{}),e("pricing.hero.titleLine2"),d.jsx("br",{}),d.jsx(XD,{children:e("pricing.hero.titleLine3")})]}),d.jsx("p",{children:e("pricing.hero.subtitle")}),d.jsx(QD,{children:d.jsxs(Kw,{to:"/kontakt",children:[d.jsx(Pn,{})," ",e("pricing.hero.cta")]})})]}),d.jsx(WD,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.7,delay:.12},children:d.jsxs(ZD,{children:[d.jsxs(nh,{children:[d.jsx("strong",{children:e("pricing.hero.metrics.leadVolume")}),d.jsx(ih,{children:d.jsx(ah,{initial:{width:"22%"},animate:{width:["22%","72%","58%","72%"]},transition:{duration:6,delay:.35,repeat:1/0,ease:"easeInOut"}})})]}),d.jsxs(nh,{children:[d.jsx("strong",{children:e("pricing.hero.metrics.qualifiedLeads")}),d.jsx(ih,{children:d.jsx(ah,{initial:{width:"18%"},animate:{width:["18%","61%","49%","61%"]},transition:{duration:5.6,delay:.48,repeat:1/0,ease:"easeInOut"}})})]}),d.jsxs(nh,{children:[d.jsx("strong",{children:e("pricing.hero.metrics.costPerLead")}),d.jsx(ih,{children:d.jsx(ah,{initial:{width:"76%"},animate:{width:["76%","42%","54%","42%"]},transition:{duration:6.2,delay:.62,repeat:1/0,ease:"easeInOut"}})})]}),d.jsxs(JD,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.6,delay:.7},children:[d.jsxs(vo,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut"},children:[d.jsx(Vh,{}),e("pricing.hero.funnel.traffic")]}),d.jsxs(vo,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut",delay:.25},children:[d.jsx(pu,{}),e("pricing.hero.funnel.landing")]}),d.jsxs(vo,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut",delay:.5},children:[d.jsx(hu,{}),e("pricing.hero.funnel.leads")]}),d.jsxs(vo,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut",delay:.75},children:[d.jsx(Fo,{}),e("pricing.hero.funnel.crm")]}),d.jsxs(vo,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut",delay:1},children:[d.jsx(Va,{}),e("pricing.hero.funnel.sales")]})]})]})})]}),d.jsxs(eP,{children:[d.jsx("h2",{children:e("pricing.flow.title")}),d.jsx(tP,{children:d.jsxs(nP,{children:[d.jsxs(wo,{whileHover:{y:-3},children:[d.jsx(Vh,{}),e("pricing.flow.steps.traffic")]}),d.jsxs(wo,{whileHover:{y:-3},children:[d.jsx(pu,{}),e("pricing.flow.steps.landing")]}),d.jsxs(wo,{whileHover:{y:-3},children:[d.jsx(hu,{}),e("pricing.flow.steps.capture")]}),d.jsxs(wo,{whileHover:{y:-3},children:[d.jsx(Fo,{}),e("pricing.flow.steps.crm")]}),d.jsxs(wo,{whileHover:{y:-3},children:[d.jsx(Va,{}),e("pricing.flow.steps.sales")]})]})})]}),d.jsxs(ct,{children:[d.jsx("h2",{children:e("pricing.packages.title")}),d.jsxs(aP,{role:"tablist","aria-label":e("pricing.packages.subscriptionTitle"),children:[d.jsx(nv,{type:"button",$active:t==="monthly",onClick:()=>i("monthly"),children:e("pricing.packages.billing.monthly")}),d.jsx(nv,{type:"button",$active:t==="yearly",onClick:()=>i("yearly"),children:e("pricing.packages.billing.yearly")})]}),d.jsx(iP,{children:o.map(l=>d.jsxs(rP,{$recommended:l.recommended,whileHover:{y:l.recommended?-6:-4},transition:{duration:.25},children:[l.recommended?d.jsx(sP,{children:e("pricing.packages.badge")}):null,d.jsx("h3",{children:l.name}),d.jsx("p",{children:l.desc}),d.jsx(oP,{children:l.price}),d.jsx(lP,{children:l.range}),d.jsx(rh,{children:e("pricing.packages.coreTitle")}),d.jsx(sh,{children:l.core.map(u=>d.jsxs("li",{children:[d.jsx(It,{})," ",u]},u))}),d.jsx(rh,{children:e("pricing.packages.plusTitle")}),d.jsx(sh,{children:l.plus.map(u=>d.jsxs("li",{children:[d.jsx(It,{})," ",u]},u))}),d.jsxs(uP,{children:[d.jsx(dP,{children:e("pricing.packages.subscriptionTitle")}),d.jsx(fP,{children:l.subscriptionPrice}),d.jsx(pP,{children:l.subscriptionMeta}),d.jsx(rh,{children:e("pricing.packages.subscriptionIncludesTitle")}),d.jsx(sh,{children:l.subscriptionItems.map(u=>d.jsxs("li",{children:[d.jsx(It,{})," ",u]},u))})]}),d.jsxs(cP,{children:[d.jsx("strong",{children:e("pricing.packages.outcomeLabel")})," ",l.outcome]})]},l.key))})]}),d.jsxs(ct,{children:[d.jsx("h2",{children:e("pricing.comparison.title")}),d.jsxs(hP,{children:[d.jsxs(mP,{children:[d.jsx("span",{children:e("pricing.comparison.headers.feature")}),d.jsx("span",{children:e("pricing.comparison.headers.starter")}),d.jsx("span",{children:e("pricing.comparison.headers.business")}),d.jsx("span",{children:e("pricing.comparison.headers.pro")})]}),d.jsxs(Lr,{children:[d.jsx("span",{children:e("pricing.comparison.rows.landing")}),d.jsxs(Mn,{children:[d.jsx(It,{})," ",e("pricing.comparison.yes")]}),d.jsxs(Mn,{children:[d.jsx(It,{})," ",e("pricing.comparison.yes")]}),d.jsxs(Mn,{children:[d.jsx(It,{})," ",e("pricing.comparison.yes")]})]}),d.jsxs(Lr,{children:[d.jsx("span",{children:e("pricing.comparison.rows.multi")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsxs(Mn,{children:[d.jsx(It,{})," ",e("pricing.comparison.yes")]}),d.jsxs(Mn,{children:[d.jsx(It,{})," ",e("pricing.comparison.yes")]})]}),d.jsxs(Lr,{children:[d.jsx("span",{children:e("pricing.comparison.rows.crm")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsxs(Mn,{children:[d.jsx(It,{})," ",e("pricing.comparison.yes")]}),d.jsxs(Mn,{children:[d.jsx(It,{})," ",e("pricing.comparison.yes")]})]}),d.jsxs(Lr,{children:[d.jsx("span",{children:e("pricing.comparison.rows.ai")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsxs(Mn,{children:[d.jsx(It,{})," ",e("pricing.comparison.yes")]})]}),d.jsxs(Lr,{children:[d.jsx("span",{children:e("pricing.comparison.rows.ads")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsxs(Mn,{children:[d.jsx(It,{})," ",e("pricing.comparison.yes")]})]}),d.jsxs(Lr,{children:[d.jsx("span",{children:e("pricing.comparison.rows.dashboard")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsxs(Mn,{children:[d.jsx(It,{})," ",e("pricing.comparison.yes")]}),d.jsxs(Mn,{children:[d.jsx(It,{})," ",e("pricing.comparison.yes")]})]})]})]}),d.jsxs(ct,{children:[d.jsx("h2",{children:e("pricing.trust.title")}),d.jsxs(gP,{children:[d.jsxs(oh,{children:[d.jsx(jA,{}),d.jsx("strong",{children:e("pricing.trust.delivery.title")}),d.jsx("p",{children:e("pricing.trust.delivery.desc")})]}),d.jsxs(oh,{children:[d.jsx(PA,{}),d.jsx("strong",{children:e("pricing.trust.support.title")}),d.jsx("p",{children:e("pricing.trust.support.desc")})]}),d.jsxs(oh,{children:[d.jsx(OA,{}),d.jsx("strong",{children:e("pricing.trust.dsgvo.title")}),d.jsx("p",{children:e("pricing.trust.dsgvo.desc")})]})]})]}),d.jsxs(bP,{children:[d.jsx("h2",{children:e("pricing.final.title")}),d.jsx("p",{children:e("pricing.final.subtitle")}),d.jsxs(yP,{to:"/kontakt",children:[d.jsx(Pn,{})," ",e("pricing.final.cta")]})]})]})})})},iv="/assets/photo_2025-09-16_22-58-01-CZJ1euxS.jpg",av="/assets/photo_2025-09-16_22-58-14-BefjFQXO.jpg",vP=q.div`
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

`,wP={hidden:{opacity:0,y:20},show:{opacity:1,y:0}},SP=[{niche:"handwerk",labelKey:"references.niches.handwerk",metricLabelKey:"references.metrics.moreRequests",metricValue:"+41%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[16,18,22,24,27,31,34]},{niche:"praxen",labelKey:"references.niches.praxen",metricLabelKey:"references.metrics.moreAppointments",metricValue:"+33%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[14,15,19,23,25,27,30]},{niche:"werkstatt",labelKey:"references.niches.werkstatt",metricLabelKey:"references.metrics.moreCalls",metricValue:"+46%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[11,14,17,22,26,31,36]},{niche:"gastronomie",labelKey:"references.niches.gastronomie",metricLabelKey:"references.metrics.moreReservations",metricValue:"+27%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[16,16,19,21,22,24,27]},{niche:"beauty",labelKey:"references.niches.beauty",metricLabelKey:"references.metrics.moreBookings",metricValue:"+31%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[13,16,18,21,23,25,29]},{niche:"immobilien",labelKey:"references.niches.immobilien",metricLabelKey:"references.metrics.moreLeads",metricValue:"+22%",timeframe:"30-90",source:"GA4 / Search Console",sparkline:[9,11,12,14,16,17,19]},{niche:"kanzlei",labelKey:"references.niches.kanzlei",metricLabelKey:"references.metrics.moreIntroCalls",metricValue:"+24%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[11,12,14,15,17,18,20]},{niche:"fitnessPhysio",labelKey:"references.niches.fitnessPhysio",metricLabelKey:"references.metrics.moreTrialSessions",metricValue:"+29%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[10,13,15,18,20,22,25]},{niche:"reinigung",labelKey:"references.niches.reinigung",metricLabelKey:"references.metrics.moreOffers",metricValue:"+35%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[12,14,17,20,22,25,28]},{niche:"umzugTransport",labelKey:"references.niches.umzugTransport",metricLabelKey:"references.metrics.moreQualifiedLeads",metricValue:"+26%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[11,13,14,17,18,20,23]},{niche:"coachingBeratung",labelKey:"references.niches.coachingBeratung",metricLabelKey:"references.metrics.moreFirstContacts",metricValue:"+28%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[10,12,14,16,18,20,22]},{niche:"bildungKurse",labelKey:"references.niches.bildungKurse",metricLabelKey:"references.metrics.moreCourseSignups",metricValue:"+32%",timeframe:"30-90",source:"GA4 / Search Console / Ads",sparkline:[8,10,13,15,17,20,23]}],rv=[{id:"c1",titleKey:"references.cases.c1.title",category:"handwerk",challengeKey:"references.cases.c1.challenge",solutionKey:"references.cases.c1.solution",metrics:[{metricLabelKey:"references.metrics.moreRequests",metricValue:"+41%"},{metricLabelKey:"references.metrics.budgetEfficiency",metricValue:"+33%"}],timeframe:"30-90",source:"GA4 / Google Ads",beforeImage:Zh,afterImage:iv},{id:"c2",titleKey:"references.cases.c2.title",category:"praxen",challengeKey:"references.cases.c2.challenge",solutionKey:"references.cases.c2.solution",metrics:[{metricLabelKey:"references.metrics.moreAppointments",metricValue:"+33%"},{metricLabelKey:"references.metrics.moreInteractions",metricValue:"+46%"}],timeframe:"30-90",source:"GA4 / Meta Ads",beforeImage:tm,afterImage:em},{id:"c3",titleKey:"references.cases.c3.title",category:"werkstatt",challengeKey:"references.cases.c3.challenge",solutionKey:"references.cases.c3.solution",metrics:[{metricLabelKey:"references.metrics.moreQualifiedLeads",metricValue:"+32%"},{metricLabelKey:"references.metrics.moreLeadsPerBudget",metricValue:"+31%"}],timeframe:"30-90",source:"GA4 / Google Ads",beforeImage:av,afterImage:Jh},{id:"c4",titleKey:"references.cases.c4.title",category:"gastronomie",challengeKey:"references.cases.c4.challenge",solutionKey:"references.cases.c4.solution",metrics:[{metricLabelKey:"references.metrics.moreReservations",metricValue:"+27%"},{metricLabelKey:"references.metrics.moreCalls",metricValue:"+21%"}],timeframe:"30-90",source:"GA4 / Meta Ads",beforeImage:tm,afterImage:iv},{id:"c5",titleKey:"references.cases.c5.title",category:"immobilien",challengeKey:"references.cases.c5.challenge",solutionKey:"references.cases.c5.solution",metrics:[{metricLabelKey:"references.metrics.moreLeads",metricValue:"+22%"},{metricLabelKey:"references.metrics.moreIntroCalls",metricValue:"+19%"}],timeframe:"30-90",source:"GA4 / Search Console / Ads",beforeImage:Zh,afterImage:Jh},{id:"c6",titleKey:"references.cases.c6.title",category:"kanzlei",challengeKey:"references.cases.c6.challenge",solutionKey:"references.cases.c6.solution",metrics:[{metricLabelKey:"references.metrics.moreFirstContacts",metricValue:"+24%"},{metricLabelKey:"references.metrics.moreConsultations",metricValue:"+18%"}],timeframe:"30-90",source:"GA4 / Google Ads",beforeImage:av,afterImage:em}],TP=[{label:"references.filterGroups.all",items:["all"]},{label:"references.filterGroups.localServices",items:["handwerk","werkstatt","reinigung","umzugTransport"]},{label:"references.filterGroups.healthBeauty",items:["praxen","fitnessPhysio","beauty"]},{label:"references.filterGroups.professional",items:["immobilien","kanzlei","coachingBeratung","bildungKurse","gastronomie"]}],jP=[{value:"+41%",label:"references.kpis.leads"},{value:"+27%",label:"references.kpis.conversion"},{value:"+32%",label:"references.kpis.traffic"}],lh={traffic:"-12%",leads:"-18%",conversion:"-9%"},ch={traffic:"+32%",leads:"+41%",conversion:"+27%"},kP=[0,15,30,45,60,75,90],sv=[11,10,10,9,10,9,10],ov=[8,14,21,29,38,48,58],Wo=(e,t,i)=>Math.max(t,Math.min(i,e)),Yw="M 0 99 C 30 72, 70 30, 100 1",Xw="M 0 39 C 35 30, 68 14, 100 1",lv=[98,94,89,83,77,70,62,54,46,38,29,21,12,3],Au=e=>{if(e.length<2)return Yw;const t=.1;let i=`M ${e[0].x.toFixed(2)} ${e[0].y.toFixed(2)}`;for(let a=0;a<e.length-1;a+=1){const o=e[a-1]??e[a],l=e[a],u=e[a+1],f=e[a+2]??u,p=l.x+(u.x-o.x)*t/6,m=l.y+(u.y-o.y)*t/6,g=u.x-(f.x-l.x)*t/6,y=u.y-(f.y-l.y)*t/6;i+=` C ${p.toFixed(2)} ${m.toFixed(2)}, ${g.toFixed(2)} ${y.toFixed(2)}, ${u.x.toFixed(2)} ${u.y.toFixed(2)}`}return i},EP=e=>{const a=lv.map((o,l)=>{const u=0+100*l/(lv.length-1),f=Math.sin(e*1.1+l*1.05)*6.8,p=Math.sin(e*.72+l*.46)*3.4,m=Math.sin(e*1.8+l*1.7)*1.6,g=Wo(o+f+p+m,1,99);return{x:u,y:g}});return Au(a)},AP=(e,t)=>{if(!e||e.length<2)return Xw;const i=Math.min(...e),a=Math.max(...e),o=Math.max(1,a-i),l=e.map((u,f)=>{const p=f/(e.length-1)*100,g=39-(u-i)/o*38,y=Math.sin(t*1.15+f*1.2)*3.6,x=Math.sin(t*.74+f*.52)*2,v=Math.sin(t*1.9+f*1.65)*.9,S=Wo(g+y+x+v,1,39);return{x:p,y:S}});return Au(l)},cv=e=>e.map((i,a)=>{const o=a/(e.length-1)*100,l=Wo(56-i/60*52,2,58);return{x:o,y:l,value:i}}),uv=(e,t)=>{if(t===0)return"*";const i=e[t]-e[t-1];return i>0?`+${i}`:i<0?`${i}`:"0"},CP=()=>{const{t:e}=$e(),[t,i]=E.useState("all"),[a,o]=E.useState(0),l=E.useMemo(()=>rv.filter(v=>t==="all"||v.category===t),[t]),u=E.useMemo(()=>SP.filter(v=>t==="all"||v.niche===t),[t]),f=l[0]??rv[0],p=E.useMemo(()=>EP(a)||Yw,[a]),m=E.useMemo(()=>cv(sv),[]),g=E.useMemo(()=>cv(ov),[]),y=E.useMemo(()=>Au(m),[m]),x=E.useMemo(()=>Au(g),[g]);return E.useEffect(()=>{const v=window.setInterval(()=>{o(S=>(S+.12)%(Math.PI*8))},70);return()=>window.clearInterval(v)},[]),d.jsx(vP,{children:d.jsx(un,{className:"references-page",children:d.jsxs(dn,{children:[d.jsx(Vn,{className:"references-hero",as:ae.section,initial:"hidden",animate:"show",variants:wP,transition:{duration:.62,ease:kn},children:d.jsxs("div",{className:"references-hero-grid",children:[d.jsxs("div",{className:"references-hero-copy",children:[d.jsx("h1",{children:d.jsx(Ha,{text:e("references.h1"),durationMs:2800,storageKey:"refs_h1_new_once"})}),d.jsx("p",{children:e("references.subtitle")}),d.jsx(Ie,{children:e("references.trustline")})]}),d.jsxs(Ve,{className:"references-hero-dashboard",as:ae.div,whileHover:{y:-4},animate:{boxShadow:["0 0 0 1px rgba(125, 210, 255, 0.2) inset, 0 24px 50px rgba(2, 8, 20, 0.52)","0 0 0 1px rgba(141, 218, 255, 0.32) inset, 0 30px 62px rgba(3, 12, 28, 0.62)","0 0 0 1px rgba(125, 210, 255, 0.2) inset, 0 24px 50px rgba(2, 8, 20, 0.52)"],borderColor:["rgba(124, 193, 255, 0.32)","rgba(124, 220, 255, 0.58)","rgba(124, 193, 255, 0.32)"]},transition:{duration:5.2,repeat:1/0,ease:"easeInOut"},children:[d.jsx("p",{className:"references-dashboard-label",children:e("references.performanceDashboard")}),d.jsx("div",{className:"references-kpi-row",children:jP.map((v,S)=>d.jsxs(ae.div,{className:"references-kpi-item",animate:{y:[0,-6,0],opacity:[.86,1,.86]},transition:{duration:3.4,delay:S*.45,repeat:1/0,ease:"easeInOut"},children:[d.jsx("span",{className:"references-kpi-value",children:v.value}),d.jsx("span",{className:"references-kpi-label",children:e(v.label)})]},v.label))}),d.jsxs("div",{className:"references-growth-chart-wrap",children:[d.jsx("p",{className:"references-chart-label",children:e("references.growthCurve90")}),d.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"none",className:"references-growth-chart",role:"img","aria-label":e("references.growthChartAria"),children:[d.jsx("defs",{children:d.jsxs("linearGradient",{id:"refsGrowth",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[d.jsx("stop",{offset:"0%",stopColor:"#00c2ff"}),d.jsx("stop",{offset:"100%",stopColor:"#56f5a0"})]})}),d.jsx("path",{d:p})]})]})]})]})}),d.jsxs(ct,{className:"references-filter-wrap",children:[d.jsxs("h2",{className:"references-title",children:[d.jsx(EA,{})," ",e("references.filterTitle")]}),d.jsx(Ie,{children:e("references.counter",{count:l.length})}),d.jsx("div",{className:"references-filter-groups",role:"tablist","aria-label":e("references.filterAria"),children:TP.map(v=>d.jsxs("div",{className:"references-filter-group",children:[d.jsx("p",{className:"references-filter-group-label",children:e(v.label)}),d.jsx("div",{className:"references-filters",children:v.items.map(S=>d.jsx("button",{type:"button",className:`references-filter-chip ${t===S?"active":""}`,onClick:()=>i(S),role:"tab","aria-selected":t===S,children:e(S==="all"?"references.filters.all":`references.niches.${S}`)},S))})]},v.label))})]}),d.jsxs(ct,{className:"references-metric-band",children:[d.jsxs("h2",{className:"references-title",children:[d.jsx(Va,{})," ",e("references.growthByNiche")]}),d.jsx(tu,{className:"grid-3",children:u.map((v,S)=>d.jsxs(Ve,{className:"references-metric-card",as:ae.article,animate:{y:[0,-5,0],borderColor:["rgba(111, 178, 255, 0.18)","rgba(116, 210, 255, 0.48)","rgba(111, 178, 255, 0.18)"],boxShadow:["0 10px 24px rgba(0, 0, 0, 0.2)","0 16px 34px rgba(8, 31, 61, 0.36)","0 10px 24px rgba(0, 0, 0, 0.2)"]},transition:{duration:4.2,delay:S*.18,repeat:1/0,ease:"easeInOut"},children:[d.jsxs("div",{className:"references-metric-head",children:[d.jsx("h3",{children:e(v.labelKey)}),d.jsxs("span",{className:"references-kpi-badge",children:[d.jsx(xA,{})," ",v.metricValue]})]}),d.jsx("p",{className:"references-metric-line",children:e(v.metricLabelKey)}),d.jsx("svg",{viewBox:"0 0 100 40",preserveAspectRatio:"none",className:"references-sparkline",role:"img","aria-label":e("references.trendAria",{niche:e(v.labelKey)}),children:d.jsx("path",{d:AP(v.sparkline,a+S*.9)||Xw})}),d.jsxs(Ie,{children:[d.jsx(nx,{})," ",e("references.periodLabel"),": ",v.timeframe," ",e("references.daysUnit")]}),d.jsxs(Ie,{children:[d.jsx(Fo,{})," ",e("references.measurementLabel"),": ",v.source]})]},v.labelKey))})]}),d.jsxs(ct,{className:"references-cases",children:[d.jsx("h2",{className:"references-title",children:e("references.selectedCases")}),l.length===0?d.jsxs(Ve,{children:[d.jsx("h3",{children:e("references.emptyTitle")}),d.jsx(Ie,{children:e("references.emptyText")})]}):d.jsx(Ku,{children:l.map(v=>d.jsxs(Ve,{className:"references-case-card",children:[d.jsx("h3",{children:e(v.titleKey)}),d.jsxs("div",{className:"references-case-block",children:[d.jsx("p",{className:"references-case-label",children:e("references.challengeLabel")}),d.jsx("p",{children:e(v.challengeKey)})]}),d.jsxs("div",{className:"references-case-block",children:[d.jsx("p",{className:"references-case-label",children:e("references.solutionLabel")}),d.jsx("p",{children:e(v.solutionKey)})]}),d.jsxs("div",{className:"references-case-result",children:[d.jsx("p",{className:"references-case-label",children:e("references.resultLabel")}),v.metrics.map(S=>d.jsxs("p",{children:[e(S.metricLabelKey),": ",d.jsx("span",{children:S.metricValue})]},`${v.id}-${S.metricLabelKey}`))]}),d.jsxs(Ie,{children:[d.jsx(nx,{})," ",e("references.periodLabel"),": ",v.timeframe," ",e("references.daysUnit")]}),d.jsxs(Ie,{children:[d.jsx(Fo,{})," ",e("references.measurementLabel"),": ",v.source]})]},v.id))})]}),d.jsxs(ct,{children:[d.jsx("h2",{className:"references-title",children:e("references.beforeAfter")}),d.jsxs("div",{className:"references-compare-shell",children:[d.jsxs("div",{className:"references-compare-chart",children:[d.jsxs("svg",{viewBox:"0 0 100 60",preserveAspectRatio:"none",className:"references-compare-graph",role:"img","aria-label":e("references.compareGraphAria"),children:[[0,16.66,33.33,50,66.66,83.33,100].map(v=>d.jsx("line",{x1:v,y1:"0",x2:v,y2:"60",className:"grid-line"},`vx-${v}`)),[8,16,24,32,40,48,56].map(v=>d.jsx("line",{x1:"0",y1:v,x2:"100",y2:v,className:"grid-line"},`hy-${v}`)),d.jsx("line",{x1:"0",y1:"58",x2:"100",y2:"58",className:"axis-line"}),d.jsx("path",{className:"before-line",d:y}),d.jsx("path",{className:"after-line",d:x}),m.map((v,S)=>d.jsxs("g",{children:[d.jsx("circle",{className:"before-point",cx:v.x,cy:v.y,r:"1.2"}),d.jsx("text",{className:"point-delta before",x:v.x,y:Wo(v.y+4.4,4,59),children:uv(sv,S)})]},`before-point-${S}`)),g.map((v,S)=>d.jsxs("g",{children:[d.jsx("circle",{className:"after-point",cx:v.x,cy:v.y,r:"1.4"}),d.jsx("text",{className:"point-delta after",x:v.x,y:Wo(v.y-2.2,1.5,58),children:uv(ov,S)})]},`after-point-${S}`))]}),d.jsx("div",{className:"references-compare-days",children:kP.map(v=>d.jsx("span",{children:e("references.dayLabel",{day:v})},v))}),d.jsxs("div",{className:"references-compare-legend",children:[d.jsxs("span",{children:[d.jsx("i",{className:"dot before"})," ",e("references.beforeLegend")]}),d.jsxs("span",{children:[d.jsx("i",{className:"dot after"})," ",e("references.afterLegend")]})]})]}),d.jsxs("div",{className:"references-compare-kpis",children:[d.jsxs("div",{className:"kpi-panel before",children:[d.jsx("h3",{children:e("references.before")}),d.jsxs("p",{children:[e("references.kpis.traffic")," ",d.jsx("span",{children:lh.traffic})]}),d.jsxs("p",{children:[e("references.kpis.leads")," ",d.jsx("span",{children:lh.leads})]}),d.jsxs("p",{children:[e("references.kpis.conversion")," ",d.jsx("span",{children:lh.conversion})]})]}),d.jsxs("div",{className:"kpi-panel after",children:[d.jsx("h3",{children:e("references.after")}),d.jsxs("p",{children:[e("references.kpis.traffic")," ",d.jsx("span",{children:ch.traffic})]}),d.jsxs("p",{children:[e("references.kpis.leads")," ",d.jsx("span",{children:ch.leads})]}),d.jsxs("p",{children:[e("references.kpis.conversion")," ",d.jsx("span",{children:ch.conversion})]})]})]})]}),d.jsxs(Ie,{children:[e("references.periodLabel"),": ",f.timeframe," ",e("references.daysUnit")," · ",e("references.measurementLabel"),": ",f.source]})]}),d.jsxs(fg,{children:[d.jsx("h2",{children:e("references.ctaTitle")}),d.jsx(Ie,{children:e("references.ctaText")}),d.jsx(aa,{children:d.jsxs(ra,{to:"/kontakt",children:[d.jsx(Pn,{})," ",e("references.cta")]})})]})]})})})},MP="/assets/vladyslav-founder-C6kYUNTx.jpg",zP=Ei`
  0% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(8px, -8px, 0); }
  100% { transform: translate3d(0, 0, 0); }
`,RP=Ei`
  0% { background-position: -120px 0; opacity: 0.45; }
  50% { background-position: 0 0; opacity: 0.95; }
  100% { background-position: 120px 0; opacity: 0.45; }
`,OP=q.div`
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
    animation: ${zP} 12s ease-in-out infinite;
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
    animation: ${RP} 2.2s linear infinite;
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

`,LP=()=>{const{t:e}=$e(),[t,i]=E.useState(0);E.useEffect(()=>{let v=0;const S=performance.now(),j=C=>{i((C-S)/1e3),v=window.requestAnimationFrame(j)};return v=window.requestAnimationFrame(j),()=>window.cancelAnimationFrame(v)},[]);const a=Math.sin(t*1.2)*-10,o=Math.sin(t*1.2+.8)*-12,l=Math.sin(t*1.2+1.6)*-9,u=t*40%64,f=(t*40+18)%64,p=.9+(Math.sin(t*2.4)+1)/2*.1,m=.88+(Math.sin(t*2.4+.6)+1)/2*.12,g=.84+(Math.sin(t*2.4+1.2)+1)/2*.14,y=1+(Math.sin(t*2.8)+1)/2*.05,x=Math.sin(t*1.1)*6;return d.jsxs("div",{className:"about-hero-visual","aria-hidden":"true",children:[d.jsxs("div",{className:"about-hero-bgLayer",children:[d.jsx("div",{className:"about-hero-radial"}),d.jsx("div",{className:"about-hero-grid"})]}),d.jsx("div",{className:"about-hero-contentLayer",children:d.jsxs("div",{className:"about-hero-dashboard-shell",children:[d.jsxs("div",{className:"about-hero-dashboard-head",children:[d.jsx("div",{className:"about-hero-product-badge",children:e("aboutPage.visual.productBadge",{defaultValue:"Lead System"})}),d.jsxs("div",{className:"about-hero-shell-metric",children:[d.jsx("span",{className:"about-hero-shell-label",children:e("aboutPage.visual.flowLabel",{defaultValue:"Flow"})}),d.jsx("span",{className:"about-hero-shell-value",children:e("aboutPage.visual.flowValue",{defaultValue:"Before zu System zu Result"})})]})]}),d.jsxs("div",{className:"about-hero-storyboard",children:[d.jsxs("article",{className:"about-hero-story-card about-hero-story-card-before",style:{transform:`translateY(${a}px)`},children:[d.jsx("p",{className:"about-hero-stage-eyebrow",children:e("aboutPage.visual.before.label",{defaultValue:"Before"})}),d.jsx("p",{className:"about-hero-metric-title",children:e("aboutPage.visual.before.title",{defaultValue:"Viele Klicks, wenig Klarheit"})}),d.jsxs("ul",{className:"about-hero-story-list",children:[d.jsx("li",{children:e("aboutPage.visual.before.i1",{defaultValue:"Langsame Seiten"})}),d.jsx("li",{children:e("aboutPage.visual.before.i2",{defaultValue:"Unklare Kontaktwege"})}),d.jsx("li",{children:e("aboutPage.visual.before.i3",{defaultValue:"Keine sauberen Daten"})})]})]}),d.jsxs("div",{className:"about-hero-story-connector",children:[d.jsx("div",{className:"about-hero-pipeline-line"}),d.jsx("span",{className:"about-hero-pipeline-pulse",style:{transform:`translate(${u}px, -50%) scale(1.15)`}})]}),d.jsxs("article",{className:"about-hero-story-card about-hero-story-card-system",style:{transform:`translateY(${o}px)`},children:[d.jsx("p",{className:"about-hero-stage-eyebrow",children:e("aboutPage.visual.system.label",{defaultValue:"System"})}),d.jsxs("div",{className:"about-hero-phone-preview",children:[d.jsx("div",{className:"about-hero-phone-notch"}),d.jsxs("div",{className:"about-hero-phone-screen",children:[d.jsx("div",{className:"about-hero-phone-badge",children:e("aboutPage.visual.system.phoneBadge",{defaultValue:"Website"})}),d.jsx("div",{className:"about-hero-phone-line about-hero-phone-line-strong",style:{transform:`scaleX(${p})`,opacity:.7+(p-.9)*2.2}}),d.jsx("div",{className:"about-hero-phone-line",style:{transform:`scaleX(${m})`,opacity:.56+(m-.88)*2.1}}),d.jsx("div",{className:"about-hero-phone-line",style:{transform:`scaleX(${g})`,opacity:.52+(g-.84)*1.9}}),d.jsx("div",{className:"about-hero-phone-cta",style:{transform:`scale(${y})`,opacity:.88+(y-1)*2},children:e("aboutPage.visual.system.cta",{defaultValue:"Termin anfragen"})})]})]}),d.jsxs("div",{className:"about-hero-system-pills",children:[d.jsx("span",{children:e("aboutPage.visual.system.pill1",{defaultValue:"Website"})}),d.jsx("span",{children:e("aboutPage.visual.system.pill2",{defaultValue:"Kontaktwege"})}),d.jsx("span",{children:e("aboutPage.visual.system.pill3",{defaultValue:"Tracking"})})]})]}),d.jsxs("div",{className:"about-hero-story-connector",children:[d.jsx("div",{className:"about-hero-pipeline-line"}),d.jsx("span",{className:"about-hero-pipeline-pulse",style:{transform:`translate(${f}px, -50%) scale(1.15)`}})]}),d.jsxs("article",{className:"about-hero-story-card about-hero-story-card-result",style:{transform:`translateY(${l}px)`},children:[d.jsx("p",{className:"about-hero-stage-eyebrow",children:e("aboutPage.visual.result.label",{defaultValue:"Result"})}),d.jsx("p",{className:"about-hero-result-metric",children:"+12"}),d.jsx("p",{className:"about-hero-metric-title",children:e("aboutPage.visual.result.title",{defaultValue:"Qualifizierte Anfragen"})}),d.jsx("p",{className:"about-hero-metric-text",children:e("aboutPage.visual.result.text",{defaultValue:"Messbar, schneller beantwortbar und klar im Funnel sichtbar."})})]})]}),d.jsxs("div",{className:"about-hero-metric-anchor",style:{transform:`translateX(${x}px)`},children:[d.jsx("span",{className:"about-hero-anchor-label",children:e("aboutPage.visual.anchor.label",{defaultValue:"Ergebnis"})}),d.jsx("span",{className:"about-hero-anchor-value",children:e("aboutPage.visual.anchor.value",{defaultValue:"Mehr qualifizierte Anfragen statt nur Website-Traffic"})})]})]})})]})},DP=()=>{const{t:e}=$e();return d.jsx(OP,{children:d.jsx(un,{children:d.jsxs(dn,{children:[d.jsxs(Vn,{className:"about-hero",children:[d.jsxs("div",{className:"about-hero-copy",children:[d.jsx("p",{className:"about-hero-eyebrow",children:e("aboutPage.heroEyebrow",{defaultValue:"VS Studio | Hildesheim | Niedersachsen | Deutschland"})}),d.jsxs("h1",{children:[d.jsx("span",{className:"about-hero-title-line",children:e("aboutPage.heroTitleLine1",{defaultValue:"Websites und"})}),d.jsx("span",{className:"about-hero-title-line",children:d.jsx("span",{className:"about-hero-title-highlight",children:e("aboutPage.heroTitleLine2",{defaultValue:"Lead-Systeme"})})}),d.jsx("span",{className:"about-hero-title-line",children:e("aboutPage.heroTitleLine3",{defaultValue:"fuer lokale Unternehmen"})}),d.jsx("span",{className:"about-hero-title-line",children:e("aboutPage.heroTitleLine4",{defaultValue:"in Hildesheim"})})]}),d.jsx("p",{className:"about-hero-subtitle",children:e("aboutPage.heroSubtitle",{defaultValue:"Mehr qualifizierte Anfragen durch schnelle Websites, klare Kontaktwege und messbares Marketing."})}),d.jsx("p",{className:"about-trustline",children:e("aboutPage.heroTrustline",{defaultValue:"Lokal in Hildesheim. Strategisch in Niedersachsen. Umsetzbar in ganz Deutschland."})}),d.jsx(aa,{className:"about-hero-actions",children:d.jsxs(ra,{to:"/kontakt",children:[d.jsx(Pn,{})," ",e("aboutPage.primaryCta",{defaultValue:"Kostenlose Website-Analyse"})]})})]}),d.jsx(LP,{})]}),d.jsxs(ct,{children:[d.jsx("h2",{children:e("aboutPage.section.about",{defaultValue:"About"})}),d.jsxs(Ku,{children:[d.jsxs(Ve,{children:[d.jsx("h3",{children:e("aboutPage.blocks.who.title",{defaultValue:"Fuer lokale Unternehmen"})}),d.jsx(Ie,{children:e("aboutPage.blocks.who.text",{defaultValue:"Websites, Lead-Systeme und Marketing fuer Betriebe, die planbar mehr Anfragen wollen."})})]}),d.jsxs(Ve,{children:[d.jsx("h3",{children:e("aboutPage.blocks.focus.title",{defaultValue:"Ein System statt Einzelloesungen"})}),d.jsx(Ie,{children:e("aboutPage.blocks.focus.text",{defaultValue:"Website, Kontaktwege, Kampagnen und Tracking greifen als ein klarer Prozess zusammen."})})]})]})]}),d.jsxs(ct,{children:[d.jsx("h2",{children:e("aboutPage.section.localAdvantages",{defaultValue:"Lokale Vorteile"})}),d.jsxs("div",{className:"about-main-grid",children:[d.jsxs(Ve,{className:"about-photo-card",children:[d.jsx("img",{className:"about-photo-image",src:MP,alt:e("aboutPage.photoAlt",{defaultValue:"Vladyslav, Gruender von VS Web Studio aus Hildesheim"})}),d.jsx("p",{className:"about-photo-caption",children:e("aboutPage.photoCaption",{defaultValue:"Vladyslav - Gruender von VS Web Studio"})}),d.jsxs(Po,{className:"about-photo-facts",children:[d.jsxs("li",{children:[d.jsx(kt,{})," ",e("aboutPage.photoFacts.f1",{defaultValue:"Fokus: lokale Unternehmen"})]}),d.jsxs("li",{children:[d.jsx(kt,{})," ",e("aboutPage.photoFacts.f2",{defaultValue:"Standort: Hildesheim"})]}),d.jsxs("li",{children:[d.jsx(kt,{})," ",e("aboutPage.photoFacts.f3",{defaultValue:"Projekte: deutschlandweit"})]})]}),d.jsxs("div",{className:"about-geo-badges",children:[d.jsxs("span",{className:"about-geo-badge",children:[d.jsx(Yc,{})," ",e("aboutPage.geo.local",{defaultValue:"Hildesheim"})]}),d.jsxs("span",{className:"about-geo-badge",children:[d.jsx(Yc,{})," ",e("aboutPage.geo.region",{defaultValue:"Niedersachsen"})]}),d.jsxs("span",{className:"about-geo-badge",children:[d.jsx(Yc,{})," ",e("aboutPage.geo.country",{defaultValue:"Deutschlandweit"})]})]})]}),d.jsxs(Ve,{className:"about-text-card",children:[d.jsx("h3",{children:e("aboutPage.blocks.locality.title",{defaultValue:"Lokale Naehe als Vorteil"})}),d.jsx("p",{className:"about-local-subtitle",children:e("aboutPage.blocks.locality.subtitle",{defaultValue:"Schnelle Abstimmung, klare Prioritaeten und messbare Ergebnisse."})}),d.jsx(Ie,{className:"about-local-copy",children:e("aboutPage.blocks.locality.text1",{defaultValue:"Wir arbeiten direkt mit lokalen Unternehmen zusammen - ohne lange Agenturketten und unnoetige Buerokratie."})}),d.jsxs(Po,{className:"about-local-list",children:[d.jsxs("li",{children:[d.jsx(kt,{})," ",e("aboutPage.blocks.locality.i1",{defaultValue:"Direkte Kommunikation ohne Umwege"})]}),d.jsxs("li",{children:[d.jsx(kt,{})," ",e("aboutPage.blocks.locality.i2",{defaultValue:"Schnelle Umsetzung statt langer Abstimmungen"})]}),d.jsxs("li",{children:[d.jsx(kt,{})," ",e("aboutPage.blocks.locality.i3",{defaultValue:"Verstaendnis fuer lokale Maerkte und Budgets"})]})]}),d.jsx(Ie,{className:"about-local-copy",children:e("aboutPage.blocks.locality.text2",{defaultValue:"Unsere Kunden profitieren davon, dass Entscheidungen schneller getroffen werden und Projekte nicht wochenlang in Abstimmungsschleifen haengen bleiben."})}),d.jsx(Ie,{className:"about-local-copy",children:e("aboutPage.blocks.locality.text3",{defaultValue:"Das spart Zeit, reduziert Kosten und sorgt dafuer, dass Marketingmassnahmen schneller Ergebnisse liefern."})}),d.jsx(Ie,{className:"about-local-copy",children:e("aboutPage.blocks.locality.text4",{defaultValue:"Wir kennen die Realitaet kleiner und mittelstaendischer Unternehmen: begrenzte Budgets, wenig Zeit und den Wunsch nach klaren Resultaten statt komplizierten Konzepten."})}),d.jsx(Ie,{className:"about-local-copy",children:e("aboutPage.blocks.locality.text5",{defaultValue:"Deshalb arbeiten wir pragmatisch und strukturiert - von der ersten Analyse ueber die Umsetzung bis zur kontinuierlichen Optimierung."})}),d.jsx("p",{className:"about-local-priority",children:e("aboutPage.localPriority",{defaultValue:"Kurze Wege. Klare Prioritaeten. Fokus auf Ergebnisse."})})]})]})]}),d.jsxs(ct,{children:[d.jsx("h2",{children:e("aboutPage.section.how",{defaultValue:"How we work"})}),d.jsxs(tu,{className:"about-work-grid",children:[d.jsxs(Ve,{className:"about-step-card",children:[d.jsxs("h3",{children:[d.jsx($t,{children:d.jsx(pu,{})}),e("aboutPage.how.s1.title",{defaultValue:"1. Verstehen"})]}),d.jsx(Ie,{children:e("aboutPage.how.s1.text",{defaultValue:"Zielgruppe, Angebot und Markt analysieren."})})]}),d.jsxs(Ve,{className:"about-step-card",children:[d.jsxs("h3",{children:[d.jsx($t,{children:d.jsx(hu,{})}),e("aboutPage.how.s2.title",{defaultValue:"2. Umsetzen"})]}),d.jsx(Ie,{children:e("aboutPage.how.s2.text",{defaultValue:"Website, Lead-System und Kampagnen starten."})})]}),d.jsxs(Ve,{className:"about-step-card",children:[d.jsxs("h3",{children:[d.jsx($t,{children:d.jsx(Va,{})}),e("aboutPage.how.s3.title",{defaultValue:"3. Optimieren"})]}),d.jsx(Ie,{children:e("aboutPage.how.s3.text",{defaultValue:"Daten analysieren und Ergebnisse verbessern."})})]})]})]}),d.jsxs(ct,{children:[d.jsx("h2",{children:e("aboutPage.section.value",{defaultValue:"Value"})}),d.jsxs(tu,{className:"about-value-grid",children:[d.jsxs(Ve,{className:"about-value-card",children:[d.jsxs("h3",{children:[d.jsx($t,{children:d.jsx(hu,{})}),e("aboutPage.cards.work.title",{defaultValue:"Klare Prozesse"})]}),d.jsx(Ie,{children:e("aboutPage.cards.work.desc",{defaultValue:"Kurze Wege. Klare Verantwortung."})})]}),d.jsxs(Ve,{className:"about-value-card",children:[d.jsxs("h3",{children:[d.jsx($t,{children:d.jsx(Ba,{})}),e("aboutPage.cards.ai.title",{defaultValue:"AI First"})]}),d.jsx(Ie,{children:e("aboutPage.cards.ai.desc",{defaultValue:"Automatisierung dort, wo sie Zeit spart."})})]}),d.jsxs(Ve,{className:"about-value-card",children:[d.jsxs("h3",{children:[d.jsx($t,{children:d.jsx(rl,{})}),e("aboutPage.cards.leads.title",{defaultValue:"Lead Fokus"})]}),d.jsx(Ie,{children:e("aboutPage.cards.leads.desc",{defaultValue:"Design und Marketing arbeiten zusammen."})})]})]})]}),d.jsx(ct,{children:d.jsxs(Ve,{children:[d.jsx("h2",{children:e("aboutPage.results.title",{defaultValue:"Was Kunden erhalten"})}),d.jsxs(Po,{children:[d.jsxs("li",{children:[d.jsx(kt,{})," ",e("aboutPage.results.i1",{defaultValue:"Schnelle Website, die auf jedem Smartphone laedt"})]}),d.jsxs("li",{children:[d.jsx(kt,{})," ",e("aboutPage.results.i2",{defaultValue:"Klare Kontaktwege: Anruf, Formular, Termin"})]}),d.jsxs("li",{children:[d.jsx(kt,{})," ",e("aboutPage.results.i3",{defaultValue:"Messbare Anfragen mit Tracking und Marketing-Daten"})]})]})]})}),d.jsxs(ct,{children:[d.jsx("h2",{children:e("aboutPage.section.trust",{defaultValue:"Trust"})}),d.jsxs(tu,{children:[d.jsxs(Ve,{children:[d.jsx("h3",{children:e("aboutPage.trust.projects.label",{defaultValue:"Anzahl Projekte"})}),d.jsx("p",{className:"about-trust-metric",children:e("aboutPage.trust.projects.value",{defaultValue:"120+"})}),d.jsx(Ie,{children:e("aboutPage.trust.projects.text",{defaultValue:"Websites, Lead-Funnels und Relaunches."})})]}),d.jsxs(Ve,{children:[d.jsx("h3",{children:e("aboutPage.trust.industries.label",{defaultValue:"Branchen"})}),d.jsx("p",{className:"about-trust-metric",children:e("aboutPage.trust.industries.value",{defaultValue:"12"})}),d.jsx(Ie,{children:e("aboutPage.trust.industries.text",{defaultValue:"Handwerk, Praxen, Gastronomie, Beauty, Bildung und lokale Dienstleistungen."})})]}),d.jsxs(Ve,{children:[d.jsx("h3",{children:e("aboutPage.trust.focus.label",{defaultValue:"Fokus"})}),d.jsx("p",{className:"about-trust-metric",children:e("aboutPage.trust.focus.value",{defaultValue:"Lokal + Messbar"})}),d.jsx(Ie,{children:e("aboutPage.trust.focus.text",{defaultValue:"Hildesheim, Niedersachsen und Deutschland mit klarem Lead-Fokus."})})]})]})]}),d.jsxs(fg,{className:"about-cta-band",children:[d.jsx("h2",{children:e("aboutPage.cta.title",{defaultValue:"Bereit fuer planbare Anfragen?"})}),d.jsx(Ie,{children:e("aboutPage.cta.text",{defaultValue:"Im kostenlosen Erstgespraech zeigen wir die groessten Hebel fuer Ihre Website, Lead-Prozesse und Werbung."})}),d.jsx(aa,{children:d.jsxs(ra,{to:"/kontakt",children:[d.jsx(Pn,{})," ",e("aboutPage.primaryCta",{defaultValue:"Kostenloses Erstgespraech starten"})]})})]})]})})})},PP={hidden:{opacity:0,y:20},show:{opacity:1,y:0}},NP=()=>{var l;const{t:e}=$e(),i=((l=ii().state)==null?void 0:l.prefillNeed)||"",[a,o]=E.useState(i);return E.useEffect(()=>{i&&o(i)},[i]),d.jsx(un,{children:d.jsxs(dn,{children:[d.jsxs(Vn,{as:ae.section,initial:"hidden",animate:"show",variants:PP,transition:{duration:.62,ease:kn},children:[d.jsx("h1",{children:d.jsx(Ha,{text:e("contact.h1"),durationMs:2200,storageKey:"kontakt_h1_once"})}),d.jsxs("p",{children:[e("contact.responseTime")," ",d.jsx(ko,{start:58,min:34,max:95,step:1,suffix:" min"})]})]}),d.jsx(ct,{children:d.jsxs(Ku,{children:[d.jsxs(Ve,{as:Iw,children:[d.jsxs(nu,{children:[d.jsx(VA,{})," ",d.jsx("input",{type:"text",placeholder:e("contact.form.name"),required:!0})]}),d.jsxs(nu,{children:[d.jsx(M4,{})," ",d.jsx("input",{type:"text",placeholder:e("contact.form.business"),required:!0})]}),d.jsxs(nu,{children:[d.jsx(Ba,{})," ",d.jsx("textarea",{placeholder:e("contact.form.need"),value:a,onChange:u=>o(u.target.value),required:!0})]}),d.jsxs(Uw,{type:"submit",children:[d.jsx(Yr,{})," ",e("contact.form.submit")]})]}),d.jsxs(Ve,{children:[d.jsx("h3",{children:e("contact.quickContacts")}),d.jsx("p",{children:d.jsxs("a",{href:"mailto:kontakt@vs-web-studio.de",children:[d.jsx(Yr,{})," kontakt@vs-web-studio.de"]})}),d.jsx("p",{children:d.jsxs("a",{href:"tel:+49301234567",children:[d.jsx(zA,{})," +49 30 1234567"]})})]})]})})]})})},VP=()=>{const{t:e}=$e();return d.jsx(un,{children:d.jsxs(dn,{children:[d.jsxs(Vn,{children:[d.jsx("h1",{children:d.jsx(Ha,{text:e("blog.h1"),durationMs:2600,storageKey:"blog_h1_once"})}),d.jsx("p",{children:e("blog.subtitle")})]}),d.jsx(ct,{children:d.jsxs(Ku,{children:[d.jsx(Ve,{children:d.jsxs("h3",{children:[d.jsx($t,{children:d.jsx(Ba,{})}),e("blog.cards.c1")]})}),d.jsx(Ve,{children:d.jsxs("h3",{children:[d.jsx($t,{children:d.jsx(L4,{})}),e("blog.cards.c2")]})}),d.jsx(Ve,{children:d.jsxs("h3",{children:[d.jsx($t,{children:d.jsx(rl,{})}),e("blog.cards.c3")]})}),d.jsx(Ve,{children:d.jsxs("h3",{children:[d.jsx($t,{children:d.jsx(Ba,{})}),e("blog.cards.c4")]})})]})}),d.jsxs(fg,{children:[d.jsx("h2",{children:d.jsx(Ha,{text:e("blog.leadMagnet"),durationMs:1800,storageKey:"blog_leadmagnet_once"})}),d.jsxs(Iw,{style:{maxWidth:420},children:[d.jsxs(nu,{children:[d.jsx(Yr,{})," ",d.jsx("input",{type:"email",placeholder:e("blog.emailPlaceholder"),required:!0})]}),d.jsxs(Uw,{type:"submit",children:[d.jsx(Yr,{})," ",e("blog.getGuide")]})]})]})]})})},BP=()=>{const{t:e}=$e();return d.jsx(un,{children:d.jsxs(dn,{children:[d.jsxs(Vn,{children:[d.jsx("h1",{children:e("legal.impressum.h1")}),d.jsx("p",{children:e("legal.impressum.subtitle")})]}),d.jsx(ct,{children:d.jsxs(Ve,{children:[d.jsx("p",{children:e("legal.impressum.l1")}),d.jsx("p",{children:e("legal.impressum.l2")}),d.jsx("p",{children:e("legal.impressum.l3")}),d.jsx("p",{children:e("legal.impressum.l4")}),d.jsx("p",{children:e("legal.impressum.l5")})]})})]})})},_P=()=>{const{t:e}=$e();return d.jsx(un,{children:d.jsxs(dn,{children:[d.jsxs(Vn,{children:[d.jsx("h1",{children:e("legal.datenschutz.h1")}),d.jsx("p",{children:e("legal.datenschutz.subtitle")})]}),d.jsx(ct,{children:d.jsxs(Ve,{children:[d.jsx("p",{children:e("legal.datenschutz.l1")}),d.jsx("p",{children:e("legal.datenschutz.l2")}),d.jsx("p",{children:e("legal.datenschutz.l3")}),d.jsx("p",{children:e("legal.datenschutz.l4")})]})})]})})},HP=()=>{const{t:e}=$e();return d.jsx(un,{children:d.jsxs(dn,{children:[d.jsxs(Vn,{children:[d.jsx("h1",{children:e("legal.agb.h1")}),d.jsx("p",{children:e("legal.agb.subtitle")})]}),d.jsx(ct,{children:d.jsxs(Ve,{children:[d.jsx("p",{children:e("legal.agb.l1")}),d.jsx("p",{children:e("legal.agb.l2")})]})})]})})},GP=()=>{const{t:e}=$e();return d.jsx(un,{children:d.jsxs(dn,{children:[d.jsxs(Vn,{children:[d.jsx("h1",{children:e("legal.cookies.h1")}),d.jsx("p",{children:e("legal.cookies.subtitle")})]}),d.jsx(ct,{children:d.jsxs(Ve,{children:[d.jsx("p",{children:e("legal.cookies.l1")}),d.jsx("p",{children:e("legal.cookies.l2")})]})})]})})},UP=()=>{const{t:e}=$e();return d.jsx(un,{children:d.jsx(dn,{children:d.jsxs(Vn,{children:[d.jsx("h1",{children:e("niche.handwerker.h1")}),d.jsx("p",{children:e("niche.handwerker.p")}),d.jsx(aa,{children:d.jsx(ra,{to:"/kontakt",children:e("common.projectRequest")})})]})})})},IP=()=>{const{t:e}=$e();return d.jsx(un,{children:d.jsx(dn,{children:d.jsxs(Vn,{children:[d.jsx("h1",{children:e("niche.praxis.h1")}),d.jsx("p",{children:e("niche.praxis.p")}),d.jsx(aa,{children:d.jsx(ra,{to:"/kontakt",children:e("common.projectRequest")})})]})})})},$P=()=>{const{t:e}=$e();return d.jsx(un,{children:d.jsx(dn,{children:d.jsxs(Vn,{children:[d.jsx("h1",{children:e("niche.werkstatt.h1")}),d.jsx("p",{children:e("niche.werkstatt.p")}),d.jsx(aa,{children:d.jsx(ra,{to:"/kontakt",children:e("common.projectRequest")})})]})})})},qP=()=>d.jsx(C8,{children:d.jsxs(xt,{path:"/",element:d.jsx(Pz,{}),children:[d.jsx(xt,{index:!0,element:d.jsx(HL,{})}),d.jsx(xt,{path:"services",element:d.jsx(UD,{})}),d.jsx(xt,{path:"preise",element:d.jsx(xP,{})}),d.jsx(xt,{path:"referenzen",element:d.jsx(CP,{})}),d.jsx(xt,{path:"ueber-uns",element:d.jsx(DP,{})}),d.jsx(xt,{path:"kontakt",element:d.jsx(NP,{})}),d.jsx(xt,{path:"blog",element:d.jsx(VP,{})}),d.jsx(xt,{path:"handwerker",element:d.jsx(UP,{})}),d.jsx(xt,{path:"praxis",element:d.jsx(IP,{})}),d.jsx(xt,{path:"werkstatt",element:d.jsx($P,{})}),d.jsx(xt,{path:"impressum",element:d.jsx(BP,{})}),d.jsx(xt,{path:"datenschutz",element:d.jsx(_P,{})}),d.jsx(xt,{path:"agb",element:d.jsx(HP,{})}),d.jsx(xt,{path:"cookies",element:d.jsx(GP,{})}),d.jsx(xt,{path:"home",element:d.jsx(wb,{to:"/",replace:!0})}),d.jsx(xt,{path:"*",element:d.jsx(wb,{to:"/",replace:!0})})]})});CS.createRoot(document.getElementById("root")).render(d.jsxs(Ae.StrictMode,{children:[d.jsx(e9,{styles:s9}),d.jsx(Z8,{basename:"/",children:d.jsx(WC,{children:d.jsx(qP,{})})})]}));export{FP as c,dv as g};
