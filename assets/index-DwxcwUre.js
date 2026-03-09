function B8(e,t){for(var i=0;i<t.length;i++){const a=t[i];if(typeof a!="string"&&!Array.isArray(a)){for(const o in a)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(a,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>a[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=i(o);fetch(o.href,l)}})();var SV=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Cv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cp={exports:{}},lo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ub;function _8(){if(ub)return lo;ub=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,o,l){var u=null;if(l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),"key"in o){l={};for(var f in o)f!=="key"&&(l[f]=o[f])}else l=o;return o=l.ref,{$$typeof:e,type:a,key:u,ref:o!==void 0?o:null,props:l}}return lo.Fragment=t,lo.jsx=i,lo.jsxs=i,lo}var db;function $8(){return db||(db=1,cp.exports=_8()),cp.exports}var d=$8(),up={exports:{}},co={},dp={exports:{}},fp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fb;function H8(){return fb||(fb=1,function(e){function t(H,D){var _=H.length;H.push(D);e:for(;0<_;){var Q=_-1>>>1,z=H[Q];if(0<o(z,D))H[Q]=D,H[_]=z,_=Q;else break e}}function i(H){return H.length===0?null:H[0]}function a(H){if(H.length===0)return null;var D=H[0],_=H.pop();if(_!==D){H[0]=_;e:for(var Q=0,z=H.length,X=z>>>1;Q<X;){var te=2*(Q+1)-1,ie=H[te],se=te+1,xe=H[se];if(0>o(ie,_))se<z&&0>o(xe,ie)?(H[Q]=xe,H[se]=_,Q=se):(H[Q]=ie,H[te]=_,Q=te);else if(se<z&&0>o(xe,_))H[Q]=xe,H[se]=_,Q=se;else break e}}return D}function o(H,D){var _=H.sortIndex-D.sortIndex;return _!==0?_:H.id-D.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();e.unstable_now=function(){return u.now()-f}}var p=[],m=[],g=1,x=null,y=3,v=!1,S=!1,j=!1,A=!1,k=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;function B(H){for(var D=i(m);D!==null;){if(D.callback===null)a(m);else if(D.startTime<=H)a(m),D.sortIndex=D.expirationTime,t(p,D);else break;D=i(m)}}function M(H){if(j=!1,B(H),!S)if(i(p)!==null)S=!0,N||(N=!0,ne());else{var D=i(m);D!==null&&ue(M,D.startTime-H)}}var N=!1,P=-1,U=5,G=-1;function Y(){return A?!0:!(e.unstable_now()-G<U)}function Z(){if(A=!1,N){var H=e.unstable_now();G=H;var D=!0;try{e:{S=!1,j&&(j=!1,R(P),P=-1),v=!0;var _=y;try{t:{for(B(H),x=i(p);x!==null&&!(x.expirationTime>H&&Y());){var Q=x.callback;if(typeof Q=="function"){x.callback=null,y=x.priorityLevel;var z=Q(x.expirationTime<=H);if(H=e.unstable_now(),typeof z=="function"){x.callback=z,B(H),D=!0;break t}x===i(p)&&a(p),B(H)}else a(p);x=i(p)}if(x!==null)D=!0;else{var X=i(m);X!==null&&ue(M,X.startTime-H),D=!1}}break e}finally{x=null,y=_,v=!1}D=void 0}}finally{D?ne():N=!1}}}var ne;if(typeof E=="function")ne=function(){E(Z)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ce=le.port2;le.port1.onmessage=Z,ne=function(){ce.postMessage(null)}}else ne=function(){k(Z,0)};function ue(H,D){P=k(function(){H(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(H){H.callback=null},e.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<H?Math.floor(1e3/H):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_next=function(H){switch(y){case 1:case 2:case 3:var D=3;break;default:D=y}var _=y;y=D;try{return H()}finally{y=_}},e.unstable_requestPaint=function(){A=!0},e.unstable_runWithPriority=function(H,D){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var _=y;y=H;try{return D()}finally{y=_}},e.unstable_scheduleCallback=function(H,D,_){var Q=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?Q+_:Q):_=Q,H){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=_+z,H={id:g++,callback:D,priorityLevel:H,startTime:_,expirationTime:z,sortIndex:-1},_>Q?(H.sortIndex=_,t(m,H),i(p)===null&&H===i(m)&&(j?(R(P),P=-1):j=!0,ue(M,_-Q))):(H.sortIndex=z,t(p,H),S||v||(S=!0,N||(N=!0,ne()))),H},e.unstable_shouldYield=Y,e.unstable_wrapCallback=function(H){var D=y;return function(){var _=y;y=D;try{return H.apply(this,arguments)}finally{y=_}}}}(fp)),fp}var pb;function G8(){return pb||(pb=1,dp.exports=H8()),dp.exports}var pp={exports:{}},ye={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hb;function U8(){if(hb)return ye;hb=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=x&&z[x]||z["@@iterator"],typeof z=="function"?z:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,j={};function A(z,X,te){this.props=z,this.context=X,this.refs=j,this.updater=te||v}A.prototype.isReactComponent={},A.prototype.setState=function(z,X){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,X,"setState")},A.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function k(){}k.prototype=A.prototype;function R(z,X,te){this.props=z,this.context=X,this.refs=j,this.updater=te||v}var E=R.prototype=new k;E.constructor=R,S(E,A.prototype),E.isPureReactComponent=!0;var B=Array.isArray,M={H:null,A:null,T:null,S:null,V:null},N=Object.prototype.hasOwnProperty;function P(z,X,te,ie,se,xe){return te=xe.ref,{$$typeof:e,type:z,key:X,ref:te!==void 0?te:null,props:xe}}function U(z,X){return P(z.type,X,void 0,void 0,void 0,z.props)}function G(z){return typeof z=="object"&&z!==null&&z.$$typeof===e}function Y(z){var X={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(te){return X[te]})}var Z=/\/+/g;function ne(z,X){return typeof z=="object"&&z!==null&&z.key!=null?Y(""+z.key):X.toString(36)}function le(){}function ce(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(le,le):(z.status="pending",z.then(function(X){z.status==="pending"&&(z.status="fulfilled",z.value=X)},function(X){z.status==="pending"&&(z.status="rejected",z.reason=X)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function ue(z,X,te,ie,se){var xe=typeof z;(xe==="undefined"||xe==="boolean")&&(z=null);var de=!1;if(z===null)de=!0;else switch(xe){case"bigint":case"string":case"number":de=!0;break;case"object":switch(z.$$typeof){case e:case t:de=!0;break;case g:return de=z._init,ue(de(z._payload),X,te,ie,se)}}if(de)return se=se(z),de=ie===""?"."+ne(z,0):ie,B(se)?(te="",de!=null&&(te=de.replace(Z,"$&/")+"/"),ue(se,X,te,"",function(Mt){return Mt})):se!=null&&(G(se)&&(se=U(se,te+(se.key==null||z&&z.key===se.key?"":(""+se.key).replace(Z,"$&/")+"/")+de)),X.push(se)),1;de=0;var mt=ie===""?".":ie+":";if(B(z))for(var Le=0;Le<z.length;Le++)ie=z[Le],xe=mt+ne(ie,Le),de+=ue(ie,X,te,xe,se);else if(Le=y(z),typeof Le=="function")for(z=Le.call(z),Le=0;!(ie=z.next()).done;)ie=ie.value,xe=mt+ne(ie,Le++),de+=ue(ie,X,te,xe,se);else if(xe==="object"){if(typeof z.then=="function")return ue(ce(z),X,te,ie,se);throw X=String(z),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return de}function H(z,X,te){if(z==null)return z;var ie=[],se=0;return ue(z,ie,"","",function(xe){return X.call(te,xe,se++)}),ie}function D(z){if(z._status===-1){var X=z._result;X=X(),X.then(function(te){(z._status===0||z._status===-1)&&(z._status=1,z._result=te)},function(te){(z._status===0||z._status===-1)&&(z._status=2,z._result=te)}),z._status===-1&&(z._status=0,z._result=X)}if(z._status===1)return z._result.default;throw z._result}var _=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function Q(){}return ye.Children={map:H,forEach:function(z,X,te){H(z,function(){X.apply(this,arguments)},te)},count:function(z){var X=0;return H(z,function(){X++}),X},toArray:function(z){return H(z,function(X){return X})||[]},only:function(z){if(!G(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},ye.Component=A,ye.Fragment=i,ye.Profiler=o,ye.PureComponent=R,ye.StrictMode=a,ye.Suspense=p,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=M,ye.__COMPILER_RUNTIME={__proto__:null,c:function(z){return M.H.useMemoCache(z)}},ye.cache=function(z){return function(){return z.apply(null,arguments)}},ye.cloneElement=function(z,X,te){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var ie=S({},z.props),se=z.key,xe=void 0;if(X!=null)for(de in X.ref!==void 0&&(xe=void 0),X.key!==void 0&&(se=""+X.key),X)!N.call(X,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&X.ref===void 0||(ie[de]=X[de]);var de=arguments.length-2;if(de===1)ie.children=te;else if(1<de){for(var mt=Array(de),Le=0;Le<de;Le++)mt[Le]=arguments[Le+2];ie.children=mt}return P(z.type,se,void 0,void 0,xe,ie)},ye.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:l,_context:z},z},ye.createElement=function(z,X,te){var ie,se={},xe=null;if(X!=null)for(ie in X.key!==void 0&&(xe=""+X.key),X)N.call(X,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(se[ie]=X[ie]);var de=arguments.length-2;if(de===1)se.children=te;else if(1<de){for(var mt=Array(de),Le=0;Le<de;Le++)mt[Le]=arguments[Le+2];se.children=mt}if(z&&z.defaultProps)for(ie in de=z.defaultProps,de)se[ie]===void 0&&(se[ie]=de[ie]);return P(z,xe,void 0,void 0,null,se)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(z){return{$$typeof:f,render:z}},ye.isValidElement=G,ye.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:D}},ye.memo=function(z,X){return{$$typeof:m,type:z,compare:X===void 0?null:X}},ye.startTransition=function(z){var X=M.T,te={};M.T=te;try{var ie=z(),se=M.S;se!==null&&se(te,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(Q,_)}catch(xe){_(xe)}finally{M.T=X}},ye.unstable_useCacheRefresh=function(){return M.H.useCacheRefresh()},ye.use=function(z){return M.H.use(z)},ye.useActionState=function(z,X,te){return M.H.useActionState(z,X,te)},ye.useCallback=function(z,X){return M.H.useCallback(z,X)},ye.useContext=function(z){return M.H.useContext(z)},ye.useDebugValue=function(){},ye.useDeferredValue=function(z,X){return M.H.useDeferredValue(z,X)},ye.useEffect=function(z,X,te){var ie=M.H;if(typeof te=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(z,X)},ye.useId=function(){return M.H.useId()},ye.useImperativeHandle=function(z,X,te){return M.H.useImperativeHandle(z,X,te)},ye.useInsertionEffect=function(z,X){return M.H.useInsertionEffect(z,X)},ye.useLayoutEffect=function(z,X){return M.H.useLayoutEffect(z,X)},ye.useMemo=function(z,X){return M.H.useMemo(z,X)},ye.useOptimistic=function(z,X){return M.H.useOptimistic(z,X)},ye.useReducer=function(z,X,te){return M.H.useReducer(z,X,te)},ye.useRef=function(z){return M.H.useRef(z)},ye.useState=function(z){return M.H.useState(z)},ye.useSyncExternalStore=function(z,X,te){return M.H.useSyncExternalStore(z,X,te)},ye.useTransition=function(){return M.H.useTransition()},ye.version="19.1.1",ye}var mb;function dm(){return mb||(mb=1,pp.exports=U8()),pp.exports}var hp={exports:{}},Lt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gb;function I8(){if(gb)return Lt;gb=1;var e=dm();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(p,m,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:x==null?null:""+x,children:p,containerInfo:m,implementation:g}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Lt.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return l(p,m,null,g)},Lt.flushSync=function(p){var m=u.T,g=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=m,a.p=g,a.d.f()}},Lt.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(p,m))},Lt.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Lt.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,x=f(g,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,v=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?a.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:v}):g==="script"&&a.d.X(p,{crossOrigin:x,integrity:y,fetchPriority:v,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Lt.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=f(m.as,m.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(p)},Lt.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,x=f(g,m.crossOrigin);a.d.L(p,g,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Lt.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=f(m.as,m.crossOrigin);a.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(p)},Lt.requestFormReset=function(p){a.d.r(p)},Lt.unstable_batchedUpdates=function(p,m){return p(m)},Lt.useFormState=function(p,m,g){return u.H.useFormState(p,m,g)},Lt.useFormStatus=function(){return u.H.useHostTransitionStatus()},Lt.version="19.1.1",Lt}var bb;function Ev(){if(bb)return hp.exports;bb=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),hp.exports=I8(),hp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xb;function F8(){if(xb)return co;xb=1;var e=G8(),t=dm(),i=Ev();function a(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var r=n,s=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(s=r.return),n=r.return;while(n)}return r.tag===3?s:null}function u(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function f(n){if(l(n)!==n)throw Error(a(188))}function p(n){var r=n.alternate;if(!r){if(r=l(n),r===null)throw Error(a(188));return r!==n?null:n}for(var s=n,c=r;;){var h=s.return;if(h===null)break;var b=h.alternate;if(b===null){if(c=h.return,c!==null){s=c;continue}break}if(h.child===b.child){for(b=h.child;b;){if(b===s)return f(h),n;if(b===c)return f(h),r;b=b.sibling}throw Error(a(188))}if(s.return!==c.return)s=h,c=b;else{for(var w=!1,T=h.child;T;){if(T===s){w=!0,s=h,c=b;break}if(T===c){w=!0,c=h,s=b;break}T=T.sibling}if(!w){for(T=b.child;T;){if(T===s){w=!0,s=b,c=h;break}if(T===c){w=!0,c=b,s=h;break}T=T.sibling}if(!w)throw Error(a(189))}}if(s.alternate!==c)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?n:r}function m(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=m(n),r!==null)return r;n=n.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),R=Symbol.for("react.consumer"),E=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),G=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),Z=Symbol.iterator;function ne(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var le=Symbol.for("react.client.reference");function ce(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===le?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case S:return"Fragment";case A:return"Profiler";case j:return"StrictMode";case M:return"Suspense";case N:return"SuspenseList";case G:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case v:return"Portal";case E:return(n.displayName||"Context")+".Provider";case R:return(n._context.displayName||"Context")+".Consumer";case B:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case P:return r=n.displayName||null,r!==null?r:ce(n.type)||"Memo";case U:r=n._payload,n=n._init;try{return ce(n(r))}catch{}}return null}var ue=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_={pending:!1,data:null,method:null,action:null},Q=[],z=-1;function X(n){return{current:n}}function te(n){0>z||(n.current=Q[z],Q[z]=null,z--)}function ie(n,r){z++,Q[z]=n.current,n.current=r}var se=X(null),xe=X(null),de=X(null),mt=X(null);function Le(n,r){switch(ie(de,r),ie(xe,n),ie(se,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?B2(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=B2(r),n=_2(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}te(se),ie(se,n)}function Mt(){te(se),te(xe),te(de)}function oa(n){n.memoizedState!==null&&ie(mt,n);var r=se.current,s=_2(r,n.type);r!==s&&(ie(xe,n),ie(se,s))}function ri(n){xe.current===n&&(te(se),te(xe)),mt.current===n&&(te(mt),io._currentValue=_)}var pn=Object.prototype.hasOwnProperty,Xu=e.unstable_scheduleCallback,Qu=e.unstable_cancelCallback,g3=e.unstable_shouldYield,b3=e.unstable_requestPaint,Bn=e.unstable_now,x3=e.unstable_getCurrentPriorityLevel,xg=e.unstable_ImmediatePriority,yg=e.unstable_UserBlockingPriority,ol=e.unstable_NormalPriority,y3=e.unstable_LowPriority,vg=e.unstable_IdlePriority,v3=e.log,w3=e.unstable_setDisableYieldValue,ds=null,Wt=null;function Ei(n){if(typeof v3=="function"&&w3(n),Wt&&typeof Wt.setStrictMode=="function")try{Wt.setStrictMode(ds,n)}catch{}}var Zt=Math.clz32?Math.clz32:j3,S3=Math.log,T3=Math.LN2;function j3(n){return n>>>=0,n===0?32:31-(S3(n)/T3|0)|0}var ll=256,cl=4194304;function la(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function ul(n,r,s){var c=n.pendingLanes;if(c===0)return 0;var h=0,b=n.suspendedLanes,w=n.pingedLanes;n=n.warmLanes;var T=c&134217727;return T!==0?(c=T&~b,c!==0?h=la(c):(w&=T,w!==0?h=la(w):s||(s=T&~n,s!==0&&(h=la(s))))):(T=c&~b,T!==0?h=la(T):w!==0?h=la(w):s||(s=c&~n,s!==0&&(h=la(s)))),h===0?0:r!==0&&r!==h&&(r&b)===0&&(b=h&-h,s=r&-r,b>=s||b===32&&(s&4194048)!==0)?r:h}function fs(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function k3(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wg(){var n=ll;return ll<<=1,(ll&4194048)===0&&(ll=256),n}function Sg(){var n=cl;return cl<<=1,(cl&62914560)===0&&(cl=4194304),n}function Wu(n){for(var r=[],s=0;31>s;s++)r.push(n);return r}function ps(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function C3(n,r,s,c,h,b){var w=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var T=n.entanglements,L=n.expirationTimes,F=n.hiddenUpdates;for(s=w&~s;0<s;){var W=31-Zt(s),ee=1<<W;T[W]=0,L[W]=-1;var q=F[W];if(q!==null)for(F[W]=null,W=0;W<q.length;W++){var K=q[W];K!==null&&(K.lane&=-536870913)}s&=~ee}c!==0&&Tg(n,c,0),b!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=b&~(w&~r))}function Tg(n,r,s){n.pendingLanes|=r,n.suspendedLanes&=~r;var c=31-Zt(r);n.entangledLanes|=r,n.entanglements[c]=n.entanglements[c]|1073741824|s&4194090}function jg(n,r){var s=n.entangledLanes|=r;for(n=n.entanglements;s;){var c=31-Zt(s),h=1<<c;h&r|n[c]&r&&(n[c]|=r),s&=~h}}function Zu(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Ju(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function kg(){var n=D.p;return n!==0?n:(n=window.event,n===void 0?32:ab(n.type))}function E3(n,r){var s=D.p;try{return D.p=n,r()}finally{D.p=s}}var Ai=Math.random().toString(36).slice(2),zt="__reactFiber$"+Ai,_t="__reactProps$"+Ai,Ga="__reactContainer$"+Ai,ed="__reactEvents$"+Ai,A3="__reactListeners$"+Ai,M3="__reactHandles$"+Ai,Cg="__reactResources$"+Ai,hs="__reactMarker$"+Ai;function td(n){delete n[zt],delete n[_t],delete n[ed],delete n[A3],delete n[M3]}function Ua(n){var r=n[zt];if(r)return r;for(var s=n.parentNode;s;){if(r=s[Ga]||s[zt]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(n=U2(n);n!==null;){if(s=n[zt])return s;n=U2(n)}return r}n=s,s=n.parentNode}return null}function Ia(n){if(n=n[zt]||n[Ga]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function ms(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(a(33))}function Fa(n){var r=n[Cg];return r||(r=n[Cg]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function gt(n){n[hs]=!0}var Eg=new Set,Ag={};function ca(n,r){qa(n,r),qa(n+"Capture",r)}function qa(n,r){for(Ag[n]=r,n=0;n<r.length;n++)Eg.add(r[n])}var z3=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mg={},zg={};function R3(n){return pn.call(zg,n)?!0:pn.call(Mg,n)?!1:z3.test(n)?zg[n]=!0:(Mg[n]=!0,!1)}function dl(n,r,s){if(R3(r))if(s===null)n.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var c=r.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+s)}}function fl(n,r,s){if(s===null)n.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+s)}}function si(n,r,s,c){if(c===null)n.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(r,s,""+c)}}var nd,Rg;function Ka(n){if(nd===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);nd=r&&r[1]||"",Rg=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nd+n+Rg}var id=!1;function ad(n,r){if(!n||id)return"";id=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(r){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(K){var q=K}Reflect.construct(n,[],ee)}else{try{ee.call()}catch(K){q=K}n.call(ee.prototype)}}else{try{throw Error()}catch(K){q=K}(ee=n())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(K){if(K&&q&&typeof K.stack=="string")return[K.stack,q.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var b=c.DetermineComponentFrameRoot(),w=b[0],T=b[1];if(w&&T){var L=w.split(`
`),F=T.split(`
`);for(h=c=0;c<L.length&&!L[c].includes("DetermineComponentFrameRoot");)c++;for(;h<F.length&&!F[h].includes("DetermineComponentFrameRoot");)h++;if(c===L.length||h===F.length)for(c=L.length-1,h=F.length-1;1<=c&&0<=h&&L[c]!==F[h];)h--;for(;1<=c&&0<=h;c--,h--)if(L[c]!==F[h]){if(c!==1||h!==1)do if(c--,h--,0>h||L[c]!==F[h]){var W=`
`+L[c].replace(" at new "," at ");return n.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",n.displayName)),W}while(1<=c&&0<=h);break}}}finally{id=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?Ka(s):""}function L3(n){switch(n.tag){case 26:case 27:case 5:return Ka(n.type);case 16:return Ka("Lazy");case 13:return Ka("Suspense");case 19:return Ka("SuspenseList");case 0:case 15:return ad(n.type,!1);case 11:return ad(n.type.render,!1);case 1:return ad(n.type,!0);case 31:return Ka("Activity");default:return""}}function Lg(n){try{var r="";do r+=L3(n),n=n.return;while(n);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function hn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Og(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function O3(n){var r=Og(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,b=s.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(w){c=""+w,b.call(this,w)}}),Object.defineProperty(n,r,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function pl(n){n._valueTracker||(n._valueTracker=O3(n))}function Dg(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var s=r.getValue(),c="";return n&&(c=Og(n)?n.checked?"true":"false":n.value),n=c,n!==s?(r.setValue(n),!0):!1}function hl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var D3=/[\n"\\]/g;function mn(n){return n.replace(D3,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function rd(n,r,s,c,h,b,w,T){n.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?n.type=w:n.removeAttribute("type"),r!=null?w==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+hn(r)):n.value!==""+hn(r)&&(n.value=""+hn(r)):w!=="submit"&&w!=="reset"||n.removeAttribute("value"),r!=null?sd(n,w,hn(r)):s!=null?sd(n,w,hn(s)):c!=null&&n.removeAttribute("value"),h==null&&b!=null&&(n.defaultChecked=!!b),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.name=""+hn(T):n.removeAttribute("name")}function Pg(n,r,s,c,h,b,w,T){if(b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(n.type=b),r!=null||s!=null){if(!(b!=="submit"&&b!=="reset"||r!=null))return;s=s!=null?""+hn(s):"",r=r!=null?""+hn(r):s,T||r===n.value||(n.value=r),n.defaultValue=r}c=c??h,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=T?n.checked:!!c,n.defaultChecked=!!c,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(n.name=w)}function sd(n,r,s){r==="number"&&hl(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function Ya(n,r,s,c){if(n=n.options,r){r={};for(var h=0;h<s.length;h++)r["$"+s[h]]=!0;for(s=0;s<n.length;s++)h=r.hasOwnProperty("$"+n[s].value),n[s].selected!==h&&(n[s].selected=h),h&&c&&(n[s].defaultSelected=!0)}else{for(s=""+hn(s),r=null,h=0;h<n.length;h++){if(n[h].value===s){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function Ng(n,r,s){if(r!=null&&(r=""+hn(r),r!==n.value&&(n.value=r),s==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=s!=null?""+hn(s):""}function Vg(n,r,s,c){if(r==null){if(c!=null){if(s!=null)throw Error(a(92));if(ue(c)){if(1<c.length)throw Error(a(93));c=c[0]}s=c}s==null&&(s=""),r=s}s=hn(r),n.defaultValue=s,c=n.textContent,c===s&&c!==""&&c!==null&&(n.value=c)}function Xa(n,r){if(r){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=r;return}}n.textContent=r}var P3=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bg(n,r,s){var c=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":c?n.setProperty(r,s):typeof s!="number"||s===0||P3.has(r)?r==="float"?n.cssFloat=s:n[r]=(""+s).trim():n[r]=s+"px"}function _g(n,r,s){if(r!=null&&typeof r!="object")throw Error(a(62));if(n=n.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||r!=null&&r.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var h in r)c=r[h],r.hasOwnProperty(h)&&s[h]!==c&&Bg(n,h,c)}else for(var b in r)r.hasOwnProperty(b)&&Bg(n,b,r[b])}function od(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var N3=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),V3=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ml(n){return V3.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var ld=null;function cd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Qa=null,Wa=null;function $g(n){var r=Ia(n);if(r&&(n=r.stateNode)){var s=n[_t]||null;e:switch(n=r.stateNode,r.type){case"input":if(rd(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+mn(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var c=s[r];if(c!==n&&c.form===n.form){var h=c[_t]||null;if(!h)throw Error(a(90));rd(c,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<s.length;r++)c=s[r],c.form===n.form&&Dg(c)}break e;case"textarea":Ng(n,s.value,s.defaultValue);break e;case"select":r=s.value,r!=null&&Ya(n,!!s.multiple,r,!1)}}}var ud=!1;function Hg(n,r,s){if(ud)return n(r,s);ud=!0;try{var c=n(r);return c}finally{if(ud=!1,(Qa!==null||Wa!==null)&&(ec(),Qa&&(r=Qa,n=Wa,Wa=Qa=null,$g(r),n)))for(r=0;r<n.length;r++)$g(n[r])}}function gs(n,r){var s=n.stateNode;if(s===null)return null;var c=s[_t]||null;if(c===null)return null;s=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(a(231,r,typeof s));return s}var oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dd=!1;if(oi)try{var bs={};Object.defineProperty(bs,"passive",{get:function(){dd=!0}}),window.addEventListener("test",bs,bs),window.removeEventListener("test",bs,bs)}catch{dd=!1}var Mi=null,fd=null,gl=null;function Gg(){if(gl)return gl;var n,r=fd,s=r.length,c,h="value"in Mi?Mi.value:Mi.textContent,b=h.length;for(n=0;n<s&&r[n]===h[n];n++);var w=s-n;for(c=1;c<=w&&r[s-c]===h[b-c];c++);return gl=h.slice(n,1<c?1-c:void 0)}function bl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function xl(){return!0}function Ug(){return!1}function $t(n){function r(s,c,h,b,w){this._reactName=s,this._targetInst=h,this.type=c,this.nativeEvent=b,this.target=w,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(s=n[T],this[T]=s?s(b):b[T]);return this.isDefaultPrevented=(b.defaultPrevented!=null?b.defaultPrevented:b.returnValue===!1)?xl:Ug,this.isPropagationStopped=Ug,this}return g(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),r}var ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=$t(ua),xs=g({},ua,{view:0,detail:0}),B3=$t(xs),pd,hd,ys,vl=g({},xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ys&&(ys&&n.type==="mousemove"?(pd=n.screenX-ys.screenX,hd=n.screenY-ys.screenY):hd=pd=0,ys=n),pd)},movementY:function(n){return"movementY"in n?n.movementY:hd}}),Ig=$t(vl),_3=g({},vl,{dataTransfer:0}),$3=$t(_3),H3=g({},xs,{relatedTarget:0}),md=$t(H3),G3=g({},ua,{animationName:0,elapsedTime:0,pseudoElement:0}),U3=$t(G3),I3=g({},ua,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),F3=$t(I3),q3=g({},ua,{data:0}),Fg=$t(q3),K3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q3(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=X3[n])?!!r[n]:!1}function gd(){return Q3}var W3=g({},xs,{key:function(n){if(n.key){var r=K3[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=bl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Y3[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gd,charCode:function(n){return n.type==="keypress"?bl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?bl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Z3=$t(W3),J3=g({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qg=$t(J3),e6=g({},xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gd}),t6=$t(e6),n6=g({},ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),i6=$t(n6),a6=g({},vl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),r6=$t(a6),s6=g({},ua,{newState:0,oldState:0}),o6=$t(s6),l6=[9,13,27,32],bd=oi&&"CompositionEvent"in window,vs=null;oi&&"documentMode"in document&&(vs=document.documentMode);var c6=oi&&"TextEvent"in window&&!vs,Kg=oi&&(!bd||vs&&8<vs&&11>=vs),Yg=" ",Xg=!1;function Qg(n,r){switch(n){case"keyup":return l6.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Za=!1;function u6(n,r){switch(n){case"compositionend":return Wg(r);case"keypress":return r.which!==32?null:(Xg=!0,Yg);case"textInput":return n=r.data,n===Yg&&Xg?null:n;default:return null}}function d6(n,r){if(Za)return n==="compositionend"||!bd&&Qg(n,r)?(n=Gg(),gl=fd=Mi=null,Za=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Kg&&r.locale!=="ko"?null:r.data;default:return null}}var f6={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zg(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!f6[n.type]:r==="textarea"}function Jg(n,r,s,c){Qa?Wa?Wa.push(c):Wa=[c]:Qa=c,r=sc(r,"onChange"),0<r.length&&(s=new yl("onChange","change",null,s,c),n.push({event:s,listeners:r}))}var ws=null,Ss=null;function p6(n){O2(n,0)}function wl(n){var r=ms(n);if(Dg(r))return n}function e0(n,r){if(n==="change")return r}var t0=!1;if(oi){var xd;if(oi){var yd="oninput"in document;if(!yd){var n0=document.createElement("div");n0.setAttribute("oninput","return;"),yd=typeof n0.oninput=="function"}xd=yd}else xd=!1;t0=xd&&(!document.documentMode||9<document.documentMode)}function i0(){ws&&(ws.detachEvent("onpropertychange",a0),Ss=ws=null)}function a0(n){if(n.propertyName==="value"&&wl(Ss)){var r=[];Jg(r,Ss,n,cd(n)),Hg(p6,r)}}function h6(n,r,s){n==="focusin"?(i0(),ws=r,Ss=s,ws.attachEvent("onpropertychange",a0)):n==="focusout"&&i0()}function m6(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return wl(Ss)}function g6(n,r){if(n==="click")return wl(r)}function b6(n,r){if(n==="input"||n==="change")return wl(r)}function x6(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Jt=typeof Object.is=="function"?Object.is:x6;function Ts(n,r){if(Jt(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var s=Object.keys(n),c=Object.keys(r);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var h=s[c];if(!pn.call(r,h)||!Jt(n[h],r[h]))return!1}return!0}function r0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function s0(n,r){var s=r0(n);n=0;for(var c;s;){if(s.nodeType===3){if(c=n+s.textContent.length,n<=r&&c>=r)return{node:s,offset:r-n};n=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=r0(s)}}function o0(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?o0(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function l0(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=hl(n.document);r instanceof n.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)n=r.contentWindow;else break;r=hl(n.document)}return r}function vd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var y6=oi&&"documentMode"in document&&11>=document.documentMode,Ja=null,wd=null,js=null,Sd=!1;function c0(n,r,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Sd||Ja==null||Ja!==hl(c)||(c=Ja,"selectionStart"in c&&vd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),js&&Ts(js,c)||(js=c,c=sc(wd,"onSelect"),0<c.length&&(r=new yl("onSelect","select",null,r,s),n.push({event:r,listeners:c}),r.target=Ja)))}function da(n,r){var s={};return s[n.toLowerCase()]=r.toLowerCase(),s["Webkit"+n]="webkit"+r,s["Moz"+n]="moz"+r,s}var er={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionrun:da("Transition","TransitionRun"),transitionstart:da("Transition","TransitionStart"),transitioncancel:da("Transition","TransitionCancel"),transitionend:da("Transition","TransitionEnd")},Td={},u0={};oi&&(u0=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function fa(n){if(Td[n])return Td[n];if(!er[n])return n;var r=er[n],s;for(s in r)if(r.hasOwnProperty(s)&&s in u0)return Td[n]=r[s];return n}var d0=fa("animationend"),f0=fa("animationiteration"),p0=fa("animationstart"),v6=fa("transitionrun"),w6=fa("transitionstart"),S6=fa("transitioncancel"),h0=fa("transitionend"),m0=new Map,jd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jd.push("scrollEnd");function En(n,r){m0.set(n,r),ca(r,[n])}var g0=new WeakMap;function gn(n,r){if(typeof n=="object"&&n!==null){var s=g0.get(n);return s!==void 0?s:(r={value:n,source:r,stack:Lg(r)},g0.set(n,r),r)}return{value:n,source:r,stack:Lg(r)}}var bn=[],tr=0,kd=0;function Sl(){for(var n=tr,r=kd=tr=0;r<n;){var s=bn[r];bn[r++]=null;var c=bn[r];bn[r++]=null;var h=bn[r];bn[r++]=null;var b=bn[r];if(bn[r++]=null,c!==null&&h!==null){var w=c.pending;w===null?h.next=h:(h.next=w.next,w.next=h),c.pending=h}b!==0&&b0(s,h,b)}}function Tl(n,r,s,c){bn[tr++]=n,bn[tr++]=r,bn[tr++]=s,bn[tr++]=c,kd|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function Cd(n,r,s,c){return Tl(n,r,s,c),jl(n)}function nr(n,r){return Tl(n,null,null,r),jl(n)}function b0(n,r,s){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s);for(var h=!1,b=n.return;b!==null;)b.childLanes|=s,c=b.alternate,c!==null&&(c.childLanes|=s),b.tag===22&&(n=b.stateNode,n===null||n._visibility&1||(h=!0)),n=b,b=b.return;return n.tag===3?(b=n.stateNode,h&&r!==null&&(h=31-Zt(s),n=b.hiddenUpdates,c=n[h],c===null?n[h]=[r]:c.push(r),r.lane=s|536870912),b):null}function jl(n){if(50<Xs)throw Xs=0,Of=null,Error(a(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var ir={};function T6(n,r,s,c){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(n,r,s,c){return new T6(n,r,s,c)}function Ed(n){return n=n.prototype,!(!n||!n.isReactComponent)}function li(n,r){var s=n.alternate;return s===null?(s=en(n.tag,r,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=r,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,r=n.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function x0(n,r){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,r=s.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function kl(n,r,s,c,h,b){var w=0;if(c=n,typeof n=="function")Ed(n)&&(w=1);else if(typeof n=="string")w=k8(n,s,se.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case G:return n=en(31,s,r,h),n.elementType=G,n.lanes=b,n;case S:return pa(s.children,h,b,r);case j:w=8,h|=24;break;case A:return n=en(12,s,r,h|2),n.elementType=A,n.lanes=b,n;case M:return n=en(13,s,r,h),n.elementType=M,n.lanes=b,n;case N:return n=en(19,s,r,h),n.elementType=N,n.lanes=b,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:case E:w=10;break e;case R:w=9;break e;case B:w=11;break e;case P:w=14;break e;case U:w=16,c=null;break e}w=29,s=Error(a(130,n===null?"null":typeof n,"")),c=null}return r=en(w,s,r,h),r.elementType=n,r.type=c,r.lanes=b,r}function pa(n,r,s,c){return n=en(7,n,c,r),n.lanes=s,n}function Ad(n,r,s){return n=en(6,n,null,r),n.lanes=s,n}function Md(n,r,s){return r=en(4,n.children!==null?n.children:[],n.key,r),r.lanes=s,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var ar=[],rr=0,Cl=null,El=0,xn=[],yn=0,ha=null,ci=1,ui="";function ma(n,r){ar[rr++]=El,ar[rr++]=Cl,Cl=n,El=r}function y0(n,r,s){xn[yn++]=ci,xn[yn++]=ui,xn[yn++]=ha,ha=n;var c=ci;n=ui;var h=32-Zt(c)-1;c&=~(1<<h),s+=1;var b=32-Zt(r)+h;if(30<b){var w=h-h%5;b=(c&(1<<w)-1).toString(32),c>>=w,h-=w,ci=1<<32-Zt(r)+h|s<<h|c,ui=b+n}else ci=1<<b|s<<h|c,ui=n}function zd(n){n.return!==null&&(ma(n,1),y0(n,1,0))}function Rd(n){for(;n===Cl;)Cl=ar[--rr],ar[rr]=null,El=ar[--rr],ar[rr]=null;for(;n===ha;)ha=xn[--yn],xn[yn]=null,ui=xn[--yn],xn[yn]=null,ci=xn[--yn],xn[yn]=null}var Vt=null,et=null,Me=!1,ga=null,_n=!1,Ld=Error(a(519));function ba(n){var r=Error(a(418,""));throw Es(gn(r,n)),Ld}function v0(n){var r=n.stateNode,s=n.type,c=n.memoizedProps;switch(r[zt]=n,r[_t]=c,s){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(s=0;s<Ws.length;s++)ke(Ws[s],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":ke("invalid",r),Pg(r,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),pl(r);break;case"select":ke("invalid",r);break;case"textarea":ke("invalid",r),Vg(r,c.value,c.defaultValue,c.children),pl(r)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||c.suppressHydrationWarning===!0||V2(r.textContent,s)?(c.popover!=null&&(ke("beforetoggle",r),ke("toggle",r)),c.onScroll!=null&&ke("scroll",r),c.onScrollEnd!=null&&ke("scrollend",r),c.onClick!=null&&(r.onclick=oc),r=!0):r=!1,r||ba(n)}function w0(n){for(Vt=n.return;Vt;)switch(Vt.tag){case 5:case 13:_n=!1;return;case 27:case 3:_n=!0;return;default:Vt=Vt.return}}function ks(n){if(n!==Vt)return!1;if(!Me)return w0(n),Me=!0,!1;var r=n.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||Xf(n.type,n.memoizedProps)),s=!s),s&&et&&ba(n),w0(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(r===0){et=Mn(n.nextSibling);break e}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;n=n.nextSibling}et=null}}else r===27?(r=et,Fi(n.type)?(n=Jf,Jf=null,et=n):et=r):et=Vt?Mn(n.stateNode.nextSibling):null;return!0}function Cs(){et=Vt=null,Me=!1}function S0(){var n=ga;return n!==null&&(Ut===null?Ut=n:Ut.push.apply(Ut,n),ga=null),n}function Es(n){ga===null?ga=[n]:ga.push(n)}var Od=X(null),xa=null,di=null;function zi(n,r,s){ie(Od,r._currentValue),r._currentValue=s}function fi(n){n._currentValue=Od.current,te(Od)}function Dd(n,r,s){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===s)break;n=n.return}}function Pd(n,r,s,c){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var b=h.dependencies;if(b!==null){var w=h.child;b=b.firstContext;e:for(;b!==null;){var T=b;b=h;for(var L=0;L<r.length;L++)if(T.context===r[L]){b.lanes|=s,T=b.alternate,T!==null&&(T.lanes|=s),Dd(b.return,s,n),c||(w=null);break e}b=T.next}}else if(h.tag===18){if(w=h.return,w===null)throw Error(a(341));w.lanes|=s,b=w.alternate,b!==null&&(b.lanes|=s),Dd(w,s,n),w=null}else w=h.child;if(w!==null)w.return=h;else for(w=h;w!==null;){if(w===n){w=null;break}if(h=w.sibling,h!==null){h.return=w.return,w=h;break}w=w.return}h=w}}function As(n,r,s,c){n=null;for(var h=r,b=!1;h!==null;){if(!b){if((h.flags&524288)!==0)b=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var w=h.alternate;if(w===null)throw Error(a(387));if(w=w.memoizedProps,w!==null){var T=h.type;Jt(h.pendingProps.value,w.value)||(n!==null?n.push(T):n=[T])}}else if(h===mt.current){if(w=h.alternate,w===null)throw Error(a(387));w.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push(io):n=[io])}h=h.return}n!==null&&Pd(r,n,s,c),r.flags|=262144}function Al(n){for(n=n.firstContext;n!==null;){if(!Jt(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ya(n){xa=n,di=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Rt(n){return T0(xa,n)}function Ml(n,r){return xa===null&&ya(n),T0(n,r)}function T0(n,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},di===null){if(n===null)throw Error(a(308));di=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else di=di.next=r;return s}var j6=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(s,c){n.push(c)}};this.abort=function(){r.aborted=!0,n.forEach(function(s){return s()})}},k6=e.unstable_scheduleCallback,C6=e.unstable_NormalPriority,dt={$$typeof:E,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nd(){return{controller:new j6,data:new Map,refCount:0}}function Ms(n){n.refCount--,n.refCount===0&&k6(C6,function(){n.controller.abort()})}var zs=null,Vd=0,sr=0,or=null;function E6(n,r){if(zs===null){var s=zs=[];Vd=0,sr=$f(),or={status:"pending",value:void 0,then:function(c){s.push(c)}}}return Vd++,r.then(j0,j0),r}function j0(){if(--Vd===0&&zs!==null){or!==null&&(or.status="fulfilled");var n=zs;zs=null,sr=0,or=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function A6(n,r){var s=[],c={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return n.then(function(){c.status="fulfilled",c.value=r;for(var h=0;h<s.length;h++)(0,s[h])(r)},function(h){for(c.status="rejected",c.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),c}var k0=H.S;H.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&E6(n,r),k0!==null&&k0(n,r)};var va=X(null);function Bd(){var n=va.current;return n!==null?n:qe.pooledCache}function zl(n,r){r===null?ie(va,va.current):ie(va,r.pool)}function C0(){var n=Bd();return n===null?null:{parent:dt._currentValue,pool:n}}var Rs=Error(a(460)),E0=Error(a(474)),Rl=Error(a(542)),_d={then:function(){}};function A0(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Ll(){}function M0(n,r,s){switch(s=n[s],s===void 0?n.push(r):s!==r&&(r.then(Ll,Ll),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,R0(n),n;default:if(typeof r.status=="string")r.then(Ll,Ll);else{if(n=qe,n!==null&&100<n.shellSuspendCounter)throw Error(a(482));n=r,n.status="pending",n.then(function(c){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=c}},function(c){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=c}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,R0(n),n}throw Ls=r,Rs}}var Ls=null;function z0(){if(Ls===null)throw Error(a(459));var n=Ls;return Ls=null,n}function R0(n){if(n===Rs||n===Rl)throw Error(a(483))}var Ri=!1;function $d(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hd(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Li(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Oi(n,r,s){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Pe&2)!==0){var h=c.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),c.pending=r,r=jl(n),b0(n,null,s),r}return Tl(n,c,r,s),jl(n)}function Os(n,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var c=r.lanes;c&=n.pendingLanes,s|=c,r.lanes=s,jg(n,s)}}function Gd(n,r){var s=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var h=null,b=null;if(s=s.firstBaseUpdate,s!==null){do{var w={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};b===null?h=b=w:b=b.next=w,s=s.next}while(s!==null);b===null?h=b=r:b=b.next=r}else h=b=r;s={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:b,shared:c.shared,callbacks:c.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=r:n.next=r,s.lastBaseUpdate=r}var Ud=!1;function Ds(){if(Ud){var n=or;if(n!==null)throw n}}function Ps(n,r,s,c){Ud=!1;var h=n.updateQueue;Ri=!1;var b=h.firstBaseUpdate,w=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var L=T,F=L.next;L.next=null,w===null?b=F:w.next=F,w=L;var W=n.alternate;W!==null&&(W=W.updateQueue,T=W.lastBaseUpdate,T!==w&&(T===null?W.firstBaseUpdate=F:T.next=F,W.lastBaseUpdate=L))}if(b!==null){var ee=h.baseState;w=0,W=F=L=null,T=b;do{var q=T.lane&-536870913,K=q!==T.lane;if(K?(Ce&q)===q:(c&q)===q){q!==0&&q===sr&&(Ud=!0),W!==null&&(W=W.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var me=n,fe=T;q=r;var $e=s;switch(fe.tag){case 1:if(me=fe.payload,typeof me=="function"){ee=me.call($e,ee,q);break e}ee=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=fe.payload,q=typeof me=="function"?me.call($e,ee,q):me,q==null)break e;ee=g({},ee,q);break e;case 2:Ri=!0}}q=T.callback,q!==null&&(n.flags|=64,K&&(n.flags|=8192),K=h.callbacks,K===null?h.callbacks=[q]:K.push(q))}else K={lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},W===null?(F=W=K,L=ee):W=W.next=K,w|=q;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;K=T,T=K.next,K.next=null,h.lastBaseUpdate=K,h.shared.pending=null}}while(!0);W===null&&(L=ee),h.baseState=L,h.firstBaseUpdate=F,h.lastBaseUpdate=W,b===null&&(h.shared.lanes=0),Hi|=w,n.lanes=w,n.memoizedState=ee}}function L0(n,r){if(typeof n!="function")throw Error(a(191,n));n.call(r)}function O0(n,r){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)L0(s[n],r)}var lr=X(null),Ol=X(0);function D0(n,r){n=yi,ie(Ol,n),ie(lr,r),yi=n|r.baseLanes}function Id(){ie(Ol,yi),ie(lr,lr.current)}function Fd(){yi=Ol.current,te(lr),te(Ol)}var Di=0,Se=null,Be=null,st=null,Dl=!1,cr=!1,wa=!1,Pl=0,Ns=0,ur=null,M6=0;function it(){throw Error(a(321))}function qd(n,r){if(r===null)return!1;for(var s=0;s<r.length&&s<n.length;s++)if(!Jt(n[s],r[s]))return!1;return!0}function Kd(n,r,s,c,h,b){return Di=b,Se=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,H.H=n===null||n.memoizedState===null?b1:x1,wa=!1,b=s(c,h),wa=!1,cr&&(b=N0(r,s,c,h)),P0(n),b}function P0(n){H.H=Hl;var r=Be!==null&&Be.next!==null;if(Di=0,st=Be=Se=null,Dl=!1,Ns=0,ur=null,r)throw Error(a(300));n===null||bt||(n=n.dependencies,n!==null&&Al(n)&&(bt=!0))}function N0(n,r,s,c){Se=n;var h=0;do{if(cr&&(ur=null),Ns=0,cr=!1,25<=h)throw Error(a(301));if(h+=1,st=Be=null,n.updateQueue!=null){var b=n.updateQueue;b.lastEffect=null,b.events=null,b.stores=null,b.memoCache!=null&&(b.memoCache.index=0)}H.H=N6,b=r(s,c)}while(cr);return b}function z6(){var n=H.H,r=n.useState()[0];return r=typeof r.then=="function"?Vs(r):r,n=n.useState()[0],(Be!==null?Be.memoizedState:null)!==n&&(Se.flags|=1024),r}function Yd(){var n=Pl!==0;return Pl=0,n}function Xd(n,r,s){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~s}function Qd(n){if(Dl){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Dl=!1}Di=0,st=Be=Se=null,cr=!1,Ns=Pl=0,ur=null}function Ht(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Se.memoizedState=st=n:st=st.next=n,st}function ot(){if(Be===null){var n=Se.alternate;n=n!==null?n.memoizedState:null}else n=Be.next;var r=st===null?Se.memoizedState:st.next;if(r!==null)st=r,Be=n;else{if(n===null)throw Se.alternate===null?Error(a(467)):Error(a(310));Be=n,n={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},st===null?Se.memoizedState=st=n:st=st.next=n}return st}function Wd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vs(n){var r=Ns;return Ns+=1,ur===null&&(ur=[]),n=M0(ur,n,r),r=Se,(st===null?r.memoizedState:st.next)===null&&(r=r.alternate,H.H=r===null||r.memoizedState===null?b1:x1),n}function Nl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Vs(n);if(n.$$typeof===E)return Rt(n)}throw Error(a(438,String(n)))}function Zd(n){var r=null,s=Se.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var c=Se.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(r={data:c.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=Wd(),Se.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(n),c=0;c<n;c++)s[c]=Y;return r.index++,s}function pi(n,r){return typeof r=="function"?r(n):r}function Vl(n){var r=ot();return Jd(r,Be,n)}function Jd(n,r,s){var c=n.queue;if(c===null)throw Error(a(311));c.lastRenderedReducer=s;var h=n.baseQueue,b=c.pending;if(b!==null){if(h!==null){var w=h.next;h.next=b.next,b.next=w}r.baseQueue=h=b,c.pending=null}if(b=n.baseState,h===null)n.memoizedState=b;else{r=h.next;var T=w=null,L=null,F=r,W=!1;do{var ee=F.lane&-536870913;if(ee!==F.lane?(Ce&ee)===ee:(Di&ee)===ee){var q=F.revertLane;if(q===0)L!==null&&(L=L.next={lane:0,revertLane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),ee===sr&&(W=!0);else if((Di&q)===q){F=F.next,q===sr&&(W=!0);continue}else ee={lane:0,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},L===null?(T=L=ee,w=b):L=L.next=ee,Se.lanes|=q,Hi|=q;ee=F.action,wa&&s(b,ee),b=F.hasEagerState?F.eagerState:s(b,ee)}else q={lane:ee,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},L===null?(T=L=q,w=b):L=L.next=q,Se.lanes|=ee,Hi|=ee;F=F.next}while(F!==null&&F!==r);if(L===null?w=b:L.next=T,!Jt(b,n.memoizedState)&&(bt=!0,W&&(s=or,s!==null)))throw s;n.memoizedState=b,n.baseState=w,n.baseQueue=L,c.lastRenderedState=b}return h===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function ef(n){var r=ot(),s=r.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=n;var c=s.dispatch,h=s.pending,b=r.memoizedState;if(h!==null){s.pending=null;var w=h=h.next;do b=n(b,w.action),w=w.next;while(w!==h);Jt(b,r.memoizedState)||(bt=!0),r.memoizedState=b,r.baseQueue===null&&(r.baseState=b),s.lastRenderedState=b}return[b,c]}function V0(n,r,s){var c=Se,h=ot(),b=Me;if(b){if(s===void 0)throw Error(a(407));s=s()}else s=r();var w=!Jt((Be||h).memoizedState,s);w&&(h.memoizedState=s,bt=!0),h=h.queue;var T=$0.bind(null,c,h,n);if(Bs(2048,8,T,[n]),h.getSnapshot!==r||w||st!==null&&st.memoizedState.tag&1){if(c.flags|=2048,dr(9,Bl(),_0.bind(null,c,h,s,r),null),qe===null)throw Error(a(349));b||(Di&124)!==0||B0(c,r,s)}return s}function B0(n,r,s){n.flags|=16384,n={getSnapshot:r,value:s},r=Se.updateQueue,r===null?(r=Wd(),Se.updateQueue=r,r.stores=[n]):(s=r.stores,s===null?r.stores=[n]:s.push(n))}function _0(n,r,s,c){r.value=s,r.getSnapshot=c,H0(r)&&G0(n)}function $0(n,r,s){return s(function(){H0(r)&&G0(n)})}function H0(n){var r=n.getSnapshot;n=n.value;try{var s=r();return!Jt(n,s)}catch{return!0}}function G0(n){var r=nr(n,2);r!==null&&sn(r,n,2)}function tf(n){var r=Ht();if(typeof n=="function"){var s=n;if(n=s(),wa){Ei(!0);try{s()}finally{Ei(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pi,lastRenderedState:n},r}function U0(n,r,s,c){return n.baseState=s,Jd(n,Be,typeof c=="function"?c:pi)}function R6(n,r,s,c,h){if($l(n))throw Error(a(485));if(n=r.action,n!==null){var b={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){b.listeners.push(w)}};H.T!==null?s(!0):b.isTransition=!1,c(b),s=r.pending,s===null?(b.next=r.pending=b,I0(r,b)):(b.next=s.next,r.pending=s.next=b)}}function I0(n,r){var s=r.action,c=r.payload,h=n.state;if(r.isTransition){var b=H.T,w={};H.T=w;try{var T=s(h,c),L=H.S;L!==null&&L(w,T),F0(n,r,T)}catch(F){nf(n,r,F)}finally{H.T=b}}else try{b=s(h,c),F0(n,r,b)}catch(F){nf(n,r,F)}}function F0(n,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){q0(n,r,c)},function(c){return nf(n,r,c)}):q0(n,r,s)}function q0(n,r,s){r.status="fulfilled",r.value=s,K0(r),n.state=s,r=n.pending,r!==null&&(s=r.next,s===r?n.pending=null:(s=s.next,r.next=s,I0(n,s)))}function nf(n,r,s){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do r.status="rejected",r.reason=s,K0(r),r=r.next;while(r!==c)}n.action=null}function K0(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function Y0(n,r){return r}function X0(n,r){if(Me){var s=qe.formState;if(s!==null){e:{var c=Se;if(Me){if(et){t:{for(var h=et,b=_n;h.nodeType!==8;){if(!b){h=null;break t}if(h=Mn(h.nextSibling),h===null){h=null;break t}}b=h.data,h=b==="F!"||b==="F"?h:null}if(h){et=Mn(h.nextSibling),c=h.data==="F!";break e}}ba(c)}c=!1}c&&(r=s[0])}}return s=Ht(),s.memoizedState=s.baseState=r,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Y0,lastRenderedState:r},s.queue=c,s=h1.bind(null,Se,c),c.dispatch=s,c=tf(!1),b=lf.bind(null,Se,!1,c.queue),c=Ht(),h={state:r,dispatch:null,action:n,pending:null},c.queue=h,s=R6.bind(null,Se,h,b,s),h.dispatch=s,c.memoizedState=n,[r,s,!1]}function Q0(n){var r=ot();return W0(r,Be,n)}function W0(n,r,s){if(r=Jd(n,r,Y0)[0],n=Vl(pi)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var c=Vs(r)}catch(w){throw w===Rs?Rl:w}else c=r;r=ot();var h=r.queue,b=h.dispatch;return s!==r.memoizedState&&(Se.flags|=2048,dr(9,Bl(),L6.bind(null,h,s),null)),[c,b,n]}function L6(n,r){n.action=r}function Z0(n){var r=ot(),s=Be;if(s!==null)return W0(r,s,n);ot(),r=r.memoizedState,s=ot();var c=s.queue.dispatch;return s.memoizedState=n,[r,c,!1]}function dr(n,r,s,c){return n={tag:n,create:s,deps:c,inst:r,next:null},r=Se.updateQueue,r===null&&(r=Wd(),Se.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=n.next=n:(c=s.next,s.next=n,n.next=c,r.lastEffect=n),n}function Bl(){return{destroy:void 0,resource:void 0}}function J0(){return ot().memoizedState}function _l(n,r,s,c){var h=Ht();c=c===void 0?null:c,Se.flags|=n,h.memoizedState=dr(1|r,Bl(),s,c)}function Bs(n,r,s,c){var h=ot();c=c===void 0?null:c;var b=h.memoizedState.inst;Be!==null&&c!==null&&qd(c,Be.memoizedState.deps)?h.memoizedState=dr(r,b,s,c):(Se.flags|=n,h.memoizedState=dr(1|r,b,s,c))}function e1(n,r){_l(8390656,8,n,r)}function t1(n,r){Bs(2048,8,n,r)}function n1(n,r){return Bs(4,2,n,r)}function i1(n,r){return Bs(4,4,n,r)}function a1(n,r){if(typeof r=="function"){n=n();var s=r(n);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function r1(n,r,s){s=s!=null?s.concat([n]):null,Bs(4,4,a1.bind(null,r,n),s)}function af(){}function s1(n,r){var s=ot();r=r===void 0?null:r;var c=s.memoizedState;return r!==null&&qd(r,c[1])?c[0]:(s.memoizedState=[n,r],n)}function o1(n,r){var s=ot();r=r===void 0?null:r;var c=s.memoizedState;if(r!==null&&qd(r,c[1]))return c[0];if(c=n(),wa){Ei(!0);try{n()}finally{Ei(!1)}}return s.memoizedState=[c,r],c}function rf(n,r,s){return s===void 0||(Di&1073741824)!==0?n.memoizedState=r:(n.memoizedState=s,n=u2(),Se.lanes|=n,Hi|=n,s)}function l1(n,r,s,c){return Jt(s,r)?s:lr.current!==null?(n=rf(n,s,c),Jt(n,r)||(bt=!0),n):(Di&42)===0?(bt=!0,n.memoizedState=s):(n=u2(),Se.lanes|=n,Hi|=n,r)}function c1(n,r,s,c,h){var b=D.p;D.p=b!==0&&8>b?b:8;var w=H.T,T={};H.T=T,lf(n,!1,r,s);try{var L=h(),F=H.S;if(F!==null&&F(T,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var W=A6(L,c);_s(n,r,W,rn(n))}else _s(n,r,c,rn(n))}catch(ee){_s(n,r,{then:function(){},status:"rejected",reason:ee},rn())}finally{D.p=b,H.T=w}}function O6(){}function sf(n,r,s,c){if(n.tag!==5)throw Error(a(476));var h=u1(n).queue;c1(n,h,r,_,s===null?O6:function(){return d1(n),s(c)})}function u1(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:_,baseState:_,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pi,lastRenderedState:_},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pi,lastRenderedState:s},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function d1(n){var r=u1(n).next.queue;_s(n,r,{},rn())}function of(){return Rt(io)}function f1(){return ot().memoizedState}function p1(){return ot().memoizedState}function D6(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var s=rn();n=Li(s);var c=Oi(r,n,s);c!==null&&(sn(c,r,s),Os(c,r,s)),r={cache:Nd()},n.payload=r;return}r=r.return}}function P6(n,r,s){var c=rn();s={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},$l(n)?m1(r,s):(s=Cd(n,r,s,c),s!==null&&(sn(s,n,c),g1(s,r,c)))}function h1(n,r,s){var c=rn();_s(n,r,s,c)}function _s(n,r,s,c){var h={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if($l(n))m1(r,h);else{var b=n.alternate;if(n.lanes===0&&(b===null||b.lanes===0)&&(b=r.lastRenderedReducer,b!==null))try{var w=r.lastRenderedState,T=b(w,s);if(h.hasEagerState=!0,h.eagerState=T,Jt(T,w))return Tl(n,r,h,0),qe===null&&Sl(),!1}catch{}finally{}if(s=Cd(n,r,h,c),s!==null)return sn(s,n,c),g1(s,r,c),!0}return!1}function lf(n,r,s,c){if(c={lane:2,revertLane:$f(),action:c,hasEagerState:!1,eagerState:null,next:null},$l(n)){if(r)throw Error(a(479))}else r=Cd(n,s,c,2),r!==null&&sn(r,n,2)}function $l(n){var r=n.alternate;return n===Se||r!==null&&r===Se}function m1(n,r){cr=Dl=!0;var s=n.pending;s===null?r.next=r:(r.next=s.next,s.next=r),n.pending=r}function g1(n,r,s){if((s&4194048)!==0){var c=r.lanes;c&=n.pendingLanes,s|=c,r.lanes=s,jg(n,s)}}var Hl={readContext:Rt,use:Nl,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useLayoutEffect:it,useInsertionEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useSyncExternalStore:it,useId:it,useHostTransitionStatus:it,useFormState:it,useActionState:it,useOptimistic:it,useMemoCache:it,useCacheRefresh:it},b1={readContext:Rt,use:Nl,useCallback:function(n,r){return Ht().memoizedState=[n,r===void 0?null:r],n},useContext:Rt,useEffect:e1,useImperativeHandle:function(n,r,s){s=s!=null?s.concat([n]):null,_l(4194308,4,a1.bind(null,r,n),s)},useLayoutEffect:function(n,r){return _l(4194308,4,n,r)},useInsertionEffect:function(n,r){_l(4,2,n,r)},useMemo:function(n,r){var s=Ht();r=r===void 0?null:r;var c=n();if(wa){Ei(!0);try{n()}finally{Ei(!1)}}return s.memoizedState=[c,r],c},useReducer:function(n,r,s){var c=Ht();if(s!==void 0){var h=s(r);if(wa){Ei(!0);try{s(r)}finally{Ei(!1)}}}else h=r;return c.memoizedState=c.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},c.queue=n,n=n.dispatch=P6.bind(null,Se,n),[c.memoizedState,n]},useRef:function(n){var r=Ht();return n={current:n},r.memoizedState=n},useState:function(n){n=tf(n);var r=n.queue,s=h1.bind(null,Se,r);return r.dispatch=s,[n.memoizedState,s]},useDebugValue:af,useDeferredValue:function(n,r){var s=Ht();return rf(s,n,r)},useTransition:function(){var n=tf(!1);return n=c1.bind(null,Se,n.queue,!0,!1),Ht().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,s){var c=Se,h=Ht();if(Me){if(s===void 0)throw Error(a(407));s=s()}else{if(s=r(),qe===null)throw Error(a(349));(Ce&124)!==0||B0(c,r,s)}h.memoizedState=s;var b={value:s,getSnapshot:r};return h.queue=b,e1($0.bind(null,c,b,n),[n]),c.flags|=2048,dr(9,Bl(),_0.bind(null,c,b,s,r),null),s},useId:function(){var n=Ht(),r=qe.identifierPrefix;if(Me){var s=ui,c=ci;s=(c&~(1<<32-Zt(c)-1)).toString(32)+s,r="«"+r+"R"+s,s=Pl++,0<s&&(r+="H"+s.toString(32)),r+="»"}else s=M6++,r="«"+r+"r"+s.toString(32)+"»";return n.memoizedState=r},useHostTransitionStatus:of,useFormState:X0,useActionState:X0,useOptimistic:function(n){var r=Ht();r.memoizedState=r.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=lf.bind(null,Se,!0,s),s.dispatch=r,[n,r]},useMemoCache:Zd,useCacheRefresh:function(){return Ht().memoizedState=D6.bind(null,Se)}},x1={readContext:Rt,use:Nl,useCallback:s1,useContext:Rt,useEffect:t1,useImperativeHandle:r1,useInsertionEffect:n1,useLayoutEffect:i1,useMemo:o1,useReducer:Vl,useRef:J0,useState:function(){return Vl(pi)},useDebugValue:af,useDeferredValue:function(n,r){var s=ot();return l1(s,Be.memoizedState,n,r)},useTransition:function(){var n=Vl(pi)[0],r=ot().memoizedState;return[typeof n=="boolean"?n:Vs(n),r]},useSyncExternalStore:V0,useId:f1,useHostTransitionStatus:of,useFormState:Q0,useActionState:Q0,useOptimistic:function(n,r){var s=ot();return U0(s,Be,n,r)},useMemoCache:Zd,useCacheRefresh:p1},N6={readContext:Rt,use:Nl,useCallback:s1,useContext:Rt,useEffect:t1,useImperativeHandle:r1,useInsertionEffect:n1,useLayoutEffect:i1,useMemo:o1,useReducer:ef,useRef:J0,useState:function(){return ef(pi)},useDebugValue:af,useDeferredValue:function(n,r){var s=ot();return Be===null?rf(s,n,r):l1(s,Be.memoizedState,n,r)},useTransition:function(){var n=ef(pi)[0],r=ot().memoizedState;return[typeof n=="boolean"?n:Vs(n),r]},useSyncExternalStore:V0,useId:f1,useHostTransitionStatus:of,useFormState:Z0,useActionState:Z0,useOptimistic:function(n,r){var s=ot();return Be!==null?U0(s,Be,n,r):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:Zd,useCacheRefresh:p1},fr=null,$s=0;function Gl(n){var r=$s;return $s+=1,fr===null&&(fr=[]),M0(fr,n,r)}function Hs(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function Ul(n,r){throw r.$$typeof===x?Error(a(525)):(n=Object.prototype.toString.call(r),Error(a(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function y1(n){var r=n._init;return r(n._payload)}function v1(n){function r($,V){if(n){var I=$.deletions;I===null?($.deletions=[V],$.flags|=16):I.push(V)}}function s($,V){if(!n)return null;for(;V!==null;)r($,V),V=V.sibling;return null}function c($){for(var V=new Map;$!==null;)$.key!==null?V.set($.key,$):V.set($.index,$),$=$.sibling;return V}function h($,V){return $=li($,V),$.index=0,$.sibling=null,$}function b($,V,I){return $.index=I,n?(I=$.alternate,I!==null?(I=I.index,I<V?($.flags|=67108866,V):I):($.flags|=67108866,V)):($.flags|=1048576,V)}function w($){return n&&$.alternate===null&&($.flags|=67108866),$}function T($,V,I,J){return V===null||V.tag!==6?(V=Ad(I,$.mode,J),V.return=$,V):(V=h(V,I),V.return=$,V)}function L($,V,I,J){var re=I.type;return re===S?W($,V,I.props.children,J,I.key):V!==null&&(V.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===U&&y1(re)===V.type)?(V=h(V,I.props),Hs(V,I),V.return=$,V):(V=kl(I.type,I.key,I.props,null,$.mode,J),Hs(V,I),V.return=$,V)}function F($,V,I,J){return V===null||V.tag!==4||V.stateNode.containerInfo!==I.containerInfo||V.stateNode.implementation!==I.implementation?(V=Md(I,$.mode,J),V.return=$,V):(V=h(V,I.children||[]),V.return=$,V)}function W($,V,I,J,re){return V===null||V.tag!==7?(V=pa(I,$.mode,J,re),V.return=$,V):(V=h(V,I),V.return=$,V)}function ee($,V,I){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Ad(""+V,$.mode,I),V.return=$,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case y:return I=kl(V.type,V.key,V.props,null,$.mode,I),Hs(I,V),I.return=$,I;case v:return V=Md(V,$.mode,I),V.return=$,V;case U:var J=V._init;return V=J(V._payload),ee($,V,I)}if(ue(V)||ne(V))return V=pa(V,$.mode,I,null),V.return=$,V;if(typeof V.then=="function")return ee($,Gl(V),I);if(V.$$typeof===E)return ee($,Ml($,V),I);Ul($,V)}return null}function q($,V,I,J){var re=V!==null?V.key:null;if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return re!==null?null:T($,V,""+I,J);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case y:return I.key===re?L($,V,I,J):null;case v:return I.key===re?F($,V,I,J):null;case U:return re=I._init,I=re(I._payload),q($,V,I,J)}if(ue(I)||ne(I))return re!==null?null:W($,V,I,J,null);if(typeof I.then=="function")return q($,V,Gl(I),J);if(I.$$typeof===E)return q($,V,Ml($,I),J);Ul($,I)}return null}function K($,V,I,J,re){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return $=$.get(I)||null,T(V,$,""+J,re);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case y:return $=$.get(J.key===null?I:J.key)||null,L(V,$,J,re);case v:return $=$.get(J.key===null?I:J.key)||null,F(V,$,J,re);case U:var Te=J._init;return J=Te(J._payload),K($,V,I,J,re)}if(ue(J)||ne(J))return $=$.get(I)||null,W(V,$,J,re,null);if(typeof J.then=="function")return K($,V,I,Gl(J),re);if(J.$$typeof===E)return K($,V,I,Ml(V,J),re);Ul(V,J)}return null}function me($,V,I,J){for(var re=null,Te=null,oe=V,pe=V=0,yt=null;oe!==null&&pe<I.length;pe++){oe.index>pe?(yt=oe,oe=null):yt=oe.sibling;var Ae=q($,oe,I[pe],J);if(Ae===null){oe===null&&(oe=yt);break}n&&oe&&Ae.alternate===null&&r($,oe),V=b(Ae,V,pe),Te===null?re=Ae:Te.sibling=Ae,Te=Ae,oe=yt}if(pe===I.length)return s($,oe),Me&&ma($,pe),re;if(oe===null){for(;pe<I.length;pe++)oe=ee($,I[pe],J),oe!==null&&(V=b(oe,V,pe),Te===null?re=oe:Te.sibling=oe,Te=oe);return Me&&ma($,pe),re}for(oe=c(oe);pe<I.length;pe++)yt=K(oe,$,pe,I[pe],J),yt!==null&&(n&&yt.alternate!==null&&oe.delete(yt.key===null?pe:yt.key),V=b(yt,V,pe),Te===null?re=yt:Te.sibling=yt,Te=yt);return n&&oe.forEach(function(Qi){return r($,Qi)}),Me&&ma($,pe),re}function fe($,V,I,J){if(I==null)throw Error(a(151));for(var re=null,Te=null,oe=V,pe=V=0,yt=null,Ae=I.next();oe!==null&&!Ae.done;pe++,Ae=I.next()){oe.index>pe?(yt=oe,oe=null):yt=oe.sibling;var Qi=q($,oe,Ae.value,J);if(Qi===null){oe===null&&(oe=yt);break}n&&oe&&Qi.alternate===null&&r($,oe),V=b(Qi,V,pe),Te===null?re=Qi:Te.sibling=Qi,Te=Qi,oe=yt}if(Ae.done)return s($,oe),Me&&ma($,pe),re;if(oe===null){for(;!Ae.done;pe++,Ae=I.next())Ae=ee($,Ae.value,J),Ae!==null&&(V=b(Ae,V,pe),Te===null?re=Ae:Te.sibling=Ae,Te=Ae);return Me&&ma($,pe),re}for(oe=c(oe);!Ae.done;pe++,Ae=I.next())Ae=K(oe,$,pe,Ae.value,J),Ae!==null&&(n&&Ae.alternate!==null&&oe.delete(Ae.key===null?pe:Ae.key),V=b(Ae,V,pe),Te===null?re=Ae:Te.sibling=Ae,Te=Ae);return n&&oe.forEach(function(V8){return r($,V8)}),Me&&ma($,pe),re}function $e($,V,I,J){if(typeof I=="object"&&I!==null&&I.type===S&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case y:e:{for(var re=I.key;V!==null;){if(V.key===re){if(re=I.type,re===S){if(V.tag===7){s($,V.sibling),J=h(V,I.props.children),J.return=$,$=J;break e}}else if(V.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===U&&y1(re)===V.type){s($,V.sibling),J=h(V,I.props),Hs(J,I),J.return=$,$=J;break e}s($,V);break}else r($,V);V=V.sibling}I.type===S?(J=pa(I.props.children,$.mode,J,I.key),J.return=$,$=J):(J=kl(I.type,I.key,I.props,null,$.mode,J),Hs(J,I),J.return=$,$=J)}return w($);case v:e:{for(re=I.key;V!==null;){if(V.key===re)if(V.tag===4&&V.stateNode.containerInfo===I.containerInfo&&V.stateNode.implementation===I.implementation){s($,V.sibling),J=h(V,I.children||[]),J.return=$,$=J;break e}else{s($,V);break}else r($,V);V=V.sibling}J=Md(I,$.mode,J),J.return=$,$=J}return w($);case U:return re=I._init,I=re(I._payload),$e($,V,I,J)}if(ue(I))return me($,V,I,J);if(ne(I)){if(re=ne(I),typeof re!="function")throw Error(a(150));return I=re.call(I),fe($,V,I,J)}if(typeof I.then=="function")return $e($,V,Gl(I),J);if(I.$$typeof===E)return $e($,V,Ml($,I),J);Ul($,I)}return typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint"?(I=""+I,V!==null&&V.tag===6?(s($,V.sibling),J=h(V,I),J.return=$,$=J):(s($,V),J=Ad(I,$.mode,J),J.return=$,$=J),w($)):s($,V)}return function($,V,I,J){try{$s=0;var re=$e($,V,I,J);return fr=null,re}catch(oe){if(oe===Rs||oe===Rl)throw oe;var Te=en(29,oe,null,$.mode);return Te.lanes=J,Te.return=$,Te}finally{}}}var pr=v1(!0),w1=v1(!1),vn=X(null),$n=null;function Pi(n){var r=n.alternate;ie(ft,ft.current&1),ie(vn,n),$n===null&&(r===null||lr.current!==null||r.memoizedState!==null)&&($n=n)}function S1(n){if(n.tag===22){if(ie(ft,ft.current),ie(vn,n),$n===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&($n=n)}}else Ni()}function Ni(){ie(ft,ft.current),ie(vn,vn.current)}function hi(n){te(vn),$n===n&&($n=null),te(ft)}var ft=X(0);function Il(n){for(var r=n;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Zf(s)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function cf(n,r,s,c){r=n.memoizedState,s=s(c,r),s=s==null?r:g({},r,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var uf={enqueueSetState:function(n,r,s){n=n._reactInternals;var c=rn(),h=Li(c);h.payload=r,s!=null&&(h.callback=s),r=Oi(n,h,c),r!==null&&(sn(r,n,c),Os(r,n,c))},enqueueReplaceState:function(n,r,s){n=n._reactInternals;var c=rn(),h=Li(c);h.tag=1,h.payload=r,s!=null&&(h.callback=s),r=Oi(n,h,c),r!==null&&(sn(r,n,c),Os(r,n,c))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var s=rn(),c=Li(s);c.tag=2,r!=null&&(c.callback=r),r=Oi(n,c,s),r!==null&&(sn(r,n,s),Os(r,n,s))}};function T1(n,r,s,c,h,b,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,b,w):r.prototype&&r.prototype.isPureReactComponent?!Ts(s,c)||!Ts(h,b):!0}function j1(n,r,s,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,c),r.state!==n&&uf.enqueueReplaceState(r,r.state,null)}function Sa(n,r){var s=r;if("ref"in r){s={};for(var c in r)c!=="ref"&&(s[c]=r[c])}if(n=n.defaultProps){s===r&&(s=g({},s));for(var h in n)s[h]===void 0&&(s[h]=n[h])}return s}var Fl=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function k1(n){Fl(n)}function C1(n){console.error(n)}function E1(n){Fl(n)}function ql(n,r){try{var s=n.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(c){setTimeout(function(){throw c})}}function A1(n,r,s){try{var c=n.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function df(n,r,s){return s=Li(s),s.tag=3,s.payload={element:null},s.callback=function(){ql(n,r)},s}function M1(n){return n=Li(n),n.tag=3,n}function z1(n,r,s,c){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var b=c.value;n.payload=function(){return h(b)},n.callback=function(){A1(r,s,c)}}var w=s.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(n.callback=function(){A1(r,s,c),typeof h!="function"&&(Gi===null?Gi=new Set([this]):Gi.add(this));var T=c.stack;this.componentDidCatch(c.value,{componentStack:T!==null?T:""})})}function V6(n,r,s,c,h){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(r=s.alternate,r!==null&&As(r,s,h,!0),s=vn.current,s!==null){switch(s.tag){case 13:return $n===null?Pf():s.alternate===null&&tt===0&&(tt=3),s.flags&=-257,s.flags|=65536,s.lanes=h,c===_d?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([c]):r.add(c),Vf(n,c,h)),!1;case 22:return s.flags|=65536,c===_d?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([c]):s.add(c)),Vf(n,c,h)),!1}throw Error(a(435,s.tag))}return Vf(n,c,h),Pf(),!1}if(Me)return r=vn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,c!==Ld&&(n=Error(a(422),{cause:c}),Es(gn(n,s)))):(c!==Ld&&(r=Error(a(423),{cause:c}),Es(gn(r,s))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,c=gn(c,s),h=df(n.stateNode,c,h),Gd(n,h),tt!==4&&(tt=2)),!1;var b=Error(a(520),{cause:c});if(b=gn(b,s),Ys===null?Ys=[b]:Ys.push(b),tt!==4&&(tt=2),r===null)return!0;c=gn(c,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,n=h&-h,s.lanes|=n,n=df(s.stateNode,c,n),Gd(s,n),!1;case 1:if(r=s.type,b=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Gi===null||!Gi.has(b))))return s.flags|=65536,h&=-h,s.lanes|=h,h=M1(h),z1(h,n,s,c),Gd(s,h),!1}s=s.return}while(s!==null);return!1}var R1=Error(a(461)),bt=!1;function jt(n,r,s,c){r.child=n===null?w1(r,null,s,c):pr(r,n.child,s,c)}function L1(n,r,s,c,h){s=s.render;var b=r.ref;if("ref"in c){var w={};for(var T in c)T!=="ref"&&(w[T]=c[T])}else w=c;return ya(r),c=Kd(n,r,s,w,b,h),T=Yd(),n!==null&&!bt?(Xd(n,r,h),mi(n,r,h)):(Me&&T&&zd(r),r.flags|=1,jt(n,r,c,h),r.child)}function O1(n,r,s,c,h){if(n===null){var b=s.type;return typeof b=="function"&&!Ed(b)&&b.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=b,D1(n,r,b,c,h)):(n=kl(s.type,null,c,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(b=n.child,!yf(n,h)){var w=b.memoizedProps;if(s=s.compare,s=s!==null?s:Ts,s(w,c)&&n.ref===r.ref)return mi(n,r,h)}return r.flags|=1,n=li(b,c),n.ref=r.ref,n.return=r,r.child=n}function D1(n,r,s,c,h){if(n!==null){var b=n.memoizedProps;if(Ts(b,c)&&n.ref===r.ref)if(bt=!1,r.pendingProps=c=b,yf(n,h))(n.flags&131072)!==0&&(bt=!0);else return r.lanes=n.lanes,mi(n,r,h)}return ff(n,r,s,c,h)}function P1(n,r,s){var c=r.pendingProps,h=c.children,b=n!==null?n.memoizedState:null;if(c.mode==="hidden"){if((r.flags&128)!==0){if(c=b!==null?b.baseLanes|s:s,n!==null){for(h=r.child=n.child,b=0;h!==null;)b=b|h.lanes|h.childLanes,h=h.sibling;r.childLanes=b&~c}else r.childLanes=0,r.child=null;return N1(n,r,c,s)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&zl(r,b!==null?b.cachePool:null),b!==null?D0(r,b):Id(),S1(r);else return r.lanes=r.childLanes=536870912,N1(n,r,b!==null?b.baseLanes|s:s,s)}else b!==null?(zl(r,b.cachePool),D0(r,b),Ni(),r.memoizedState=null):(n!==null&&zl(r,null),Id(),Ni());return jt(n,r,h,s),r.child}function N1(n,r,s,c){var h=Bd();return h=h===null?null:{parent:dt._currentValue,pool:h},r.memoizedState={baseLanes:s,cachePool:h},n!==null&&zl(r,null),Id(),S1(r),n!==null&&As(n,r,c,!0),null}function Kl(n,r){var s=r.ref;if(s===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(n===null||n.ref!==s)&&(r.flags|=4194816)}}function ff(n,r,s,c,h){return ya(r),s=Kd(n,r,s,c,void 0,h),c=Yd(),n!==null&&!bt?(Xd(n,r,h),mi(n,r,h)):(Me&&c&&zd(r),r.flags|=1,jt(n,r,s,h),r.child)}function V1(n,r,s,c,h,b){return ya(r),r.updateQueue=null,s=N0(r,c,s,h),P0(n),c=Yd(),n!==null&&!bt?(Xd(n,r,b),mi(n,r,b)):(Me&&c&&zd(r),r.flags|=1,jt(n,r,s,b),r.child)}function B1(n,r,s,c,h){if(ya(r),r.stateNode===null){var b=ir,w=s.contextType;typeof w=="object"&&w!==null&&(b=Rt(w)),b=new s(c,b),r.memoizedState=b.state!==null&&b.state!==void 0?b.state:null,b.updater=uf,r.stateNode=b,b._reactInternals=r,b=r.stateNode,b.props=c,b.state=r.memoizedState,b.refs={},$d(r),w=s.contextType,b.context=typeof w=="object"&&w!==null?Rt(w):ir,b.state=r.memoizedState,w=s.getDerivedStateFromProps,typeof w=="function"&&(cf(r,s,w,c),b.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof b.getSnapshotBeforeUpdate=="function"||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(w=b.state,typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount(),w!==b.state&&uf.enqueueReplaceState(b,b.state,null),Ps(r,c,b,h),Ds(),b.state=r.memoizedState),typeof b.componentDidMount=="function"&&(r.flags|=4194308),c=!0}else if(n===null){b=r.stateNode;var T=r.memoizedProps,L=Sa(s,T);b.props=L;var F=b.context,W=s.contextType;w=ir,typeof W=="object"&&W!==null&&(w=Rt(W));var ee=s.getDerivedStateFromProps;W=typeof ee=="function"||typeof b.getSnapshotBeforeUpdate=="function",T=r.pendingProps!==T,W||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(T||F!==w)&&j1(r,b,c,w),Ri=!1;var q=r.memoizedState;b.state=q,Ps(r,c,b,h),Ds(),F=r.memoizedState,T||q!==F||Ri?(typeof ee=="function"&&(cf(r,s,ee,c),F=r.memoizedState),(L=Ri||T1(r,s,L,c,q,F,w))?(W||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(r.flags|=4194308)):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=F),b.props=c,b.state=F,b.context=w,c=L):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{b=r.stateNode,Hd(n,r),w=r.memoizedProps,W=Sa(s,w),b.props=W,ee=r.pendingProps,q=b.context,F=s.contextType,L=ir,typeof F=="object"&&F!==null&&(L=Rt(F)),T=s.getDerivedStateFromProps,(F=typeof T=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(w!==ee||q!==L)&&j1(r,b,c,L),Ri=!1,q=r.memoizedState,b.state=q,Ps(r,c,b,h),Ds();var K=r.memoizedState;w!==ee||q!==K||Ri||n!==null&&n.dependencies!==null&&Al(n.dependencies)?(typeof T=="function"&&(cf(r,s,T,c),K=r.memoizedState),(W=Ri||T1(r,s,W,c,q,K,L)||n!==null&&n.dependencies!==null&&Al(n.dependencies))?(F||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,K,L),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,K,L)),typeof b.componentDidUpdate=="function"&&(r.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof b.componentDidUpdate!="function"||w===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=K),b.props=c,b.state=K,b.context=L,c=W):(typeof b.componentDidUpdate!="function"||w===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),c=!1)}return b=c,Kl(n,r),c=(r.flags&128)!==0,b||c?(b=r.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:b.render(),r.flags|=1,n!==null&&c?(r.child=pr(r,n.child,null,h),r.child=pr(r,null,s,h)):jt(n,r,s,h),r.memoizedState=b.state,n=r.child):n=mi(n,r,h),n}function _1(n,r,s,c){return Cs(),r.flags|=256,jt(n,r,s,c),r.child}var pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hf(n){return{baseLanes:n,cachePool:C0()}}function mf(n,r,s){return n=n!==null?n.childLanes&~s:0,r&&(n|=wn),n}function $1(n,r,s){var c=r.pendingProps,h=!1,b=(r.flags&128)!==0,w;if((w=b)||(w=n!==null&&n.memoizedState===null?!1:(ft.current&2)!==0),w&&(h=!0,r.flags&=-129),w=(r.flags&32)!==0,r.flags&=-33,n===null){if(Me){if(h?Pi(r):Ni(),Me){var T=et,L;if(L=T){e:{for(L=T,T=_n;L.nodeType!==8;){if(!T){T=null;break e}if(L=Mn(L.nextSibling),L===null){T=null;break e}}T=L}T!==null?(r.memoizedState={dehydrated:T,treeContext:ha!==null?{id:ci,overflow:ui}:null,retryLane:536870912,hydrationErrors:null},L=en(18,null,null,0),L.stateNode=T,L.return=r,r.child=L,Vt=r,et=null,L=!0):L=!1}L||ba(r)}if(T=r.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Zf(T)?r.lanes=32:r.lanes=536870912,null;hi(r)}return T=c.children,c=c.fallback,h?(Ni(),h=r.mode,T=Yl({mode:"hidden",children:T},h),c=pa(c,h,s,null),T.return=r,c.return=r,T.sibling=c,r.child=T,h=r.child,h.memoizedState=hf(s),h.childLanes=mf(n,w,s),r.memoizedState=pf,c):(Pi(r),gf(r,T))}if(L=n.memoizedState,L!==null&&(T=L.dehydrated,T!==null)){if(b)r.flags&256?(Pi(r),r.flags&=-257,r=bf(n,r,s)):r.memoizedState!==null?(Ni(),r.child=n.child,r.flags|=128,r=null):(Ni(),h=c.fallback,T=r.mode,c=Yl({mode:"visible",children:c.children},T),h=pa(h,T,s,null),h.flags|=2,c.return=r,h.return=r,c.sibling=h,r.child=c,pr(r,n.child,null,s),c=r.child,c.memoizedState=hf(s),c.childLanes=mf(n,w,s),r.memoizedState=pf,r=h);else if(Pi(r),Zf(T)){if(w=T.nextSibling&&T.nextSibling.dataset,w)var F=w.dgst;w=F,c=Error(a(419)),c.stack="",c.digest=w,Es({value:c,source:null,stack:null}),r=bf(n,r,s)}else if(bt||As(n,r,s,!1),w=(s&n.childLanes)!==0,bt||w){if(w=qe,w!==null&&(c=s&-s,c=(c&42)!==0?1:Zu(c),c=(c&(w.suspendedLanes|s))!==0?0:c,c!==0&&c!==L.retryLane))throw L.retryLane=c,nr(n,c),sn(w,n,c),R1;T.data==="$?"||Pf(),r=bf(n,r,s)}else T.data==="$?"?(r.flags|=192,r.child=n.child,r=null):(n=L.treeContext,et=Mn(T.nextSibling),Vt=r,Me=!0,ga=null,_n=!1,n!==null&&(xn[yn++]=ci,xn[yn++]=ui,xn[yn++]=ha,ci=n.id,ui=n.overflow,ha=r),r=gf(r,c.children),r.flags|=4096);return r}return h?(Ni(),h=c.fallback,T=r.mode,L=n.child,F=L.sibling,c=li(L,{mode:"hidden",children:c.children}),c.subtreeFlags=L.subtreeFlags&65011712,F!==null?h=li(F,h):(h=pa(h,T,s,null),h.flags|=2),h.return=r,c.return=r,c.sibling=h,r.child=c,c=h,h=r.child,T=n.child.memoizedState,T===null?T=hf(s):(L=T.cachePool,L!==null?(F=dt._currentValue,L=L.parent!==F?{parent:F,pool:F}:L):L=C0(),T={baseLanes:T.baseLanes|s,cachePool:L}),h.memoizedState=T,h.childLanes=mf(n,w,s),r.memoizedState=pf,c):(Pi(r),s=n.child,n=s.sibling,s=li(s,{mode:"visible",children:c.children}),s.return=r,s.sibling=null,n!==null&&(w=r.deletions,w===null?(r.deletions=[n],r.flags|=16):w.push(n)),r.child=s,r.memoizedState=null,s)}function gf(n,r){return r=Yl({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function Yl(n,r){return n=en(22,n,null,r),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function bf(n,r,s){return pr(r,n.child,null,s),n=gf(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function H1(n,r,s){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Dd(n.return,r,s)}function xf(n,r,s,c,h){var b=n.memoizedState;b===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:h}:(b.isBackwards=r,b.rendering=null,b.renderingStartTime=0,b.last=c,b.tail=s,b.tailMode=h)}function G1(n,r,s){var c=r.pendingProps,h=c.revealOrder,b=c.tail;if(jt(n,r,c.children,s),c=ft.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&H1(n,s,r);else if(n.tag===19)H1(n,s,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(ie(ft,c),h){case"forwards":for(s=r.child,h=null;s!==null;)n=s.alternate,n!==null&&Il(n)===null&&(h=s),s=s.sibling;s=h,s===null?(h=r.child,r.child=null):(h=s.sibling,s.sibling=null),xf(r,!1,h,s,b);break;case"backwards":for(s=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&Il(n)===null){r.child=h;break}n=h.sibling,h.sibling=s,s=h,h=n}xf(r,!0,s,null,b);break;case"together":xf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function mi(n,r,s){if(n!==null&&(r.dependencies=n.dependencies),Hi|=r.lanes,(s&r.childLanes)===0)if(n!==null){if(As(n,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(a(153));if(r.child!==null){for(n=r.child,s=li(n,n.pendingProps),r.child=s,s.return=r;n.sibling!==null;)n=n.sibling,s=s.sibling=li(n,n.pendingProps),s.return=r;s.sibling=null}return r.child}function yf(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&Al(n)))}function B6(n,r,s){switch(r.tag){case 3:Le(r,r.stateNode.containerInfo),zi(r,dt,n.memoizedState.cache),Cs();break;case 27:case 5:oa(r);break;case 4:Le(r,r.stateNode.containerInfo);break;case 10:zi(r,r.type,r.memoizedProps.value);break;case 13:var c=r.memoizedState;if(c!==null)return c.dehydrated!==null?(Pi(r),r.flags|=128,null):(s&r.child.childLanes)!==0?$1(n,r,s):(Pi(r),n=mi(n,r,s),n!==null?n.sibling:null);Pi(r);break;case 19:var h=(n.flags&128)!==0;if(c=(s&r.childLanes)!==0,c||(As(n,r,s,!1),c=(s&r.childLanes)!==0),h){if(c)return G1(n,r,s);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ie(ft,ft.current),c)break;return null;case 22:case 23:return r.lanes=0,P1(n,r,s);case 24:zi(r,dt,n.memoizedState.cache)}return mi(n,r,s)}function U1(n,r,s){if(n!==null)if(n.memoizedProps!==r.pendingProps)bt=!0;else{if(!yf(n,s)&&(r.flags&128)===0)return bt=!1,B6(n,r,s);bt=(n.flags&131072)!==0}else bt=!1,Me&&(r.flags&1048576)!==0&&y0(r,El,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var c=r.elementType,h=c._init;if(c=h(c._payload),r.type=c,typeof c=="function")Ed(c)?(n=Sa(c,n),r.tag=1,r=B1(null,r,c,n,s)):(r.tag=0,r=ff(null,r,c,n,s));else{if(c!=null){if(h=c.$$typeof,h===B){r.tag=11,r=L1(null,r,c,n,s);break e}else if(h===P){r.tag=14,r=O1(null,r,c,n,s);break e}}throw r=ce(c)||c,Error(a(306,r,""))}}return r;case 0:return ff(n,r,r.type,r.pendingProps,s);case 1:return c=r.type,h=Sa(c,r.pendingProps),B1(n,r,c,h,s);case 3:e:{if(Le(r,r.stateNode.containerInfo),n===null)throw Error(a(387));c=r.pendingProps;var b=r.memoizedState;h=b.element,Hd(n,r),Ps(r,c,null,s);var w=r.memoizedState;if(c=w.cache,zi(r,dt,c),c!==b.cache&&Pd(r,[dt],s,!0),Ds(),c=w.element,b.isDehydrated)if(b={element:c,isDehydrated:!1,cache:w.cache},r.updateQueue.baseState=b,r.memoizedState=b,r.flags&256){r=_1(n,r,c,s);break e}else if(c!==h){h=gn(Error(a(424)),r),Es(h),r=_1(n,r,c,s);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(et=Mn(n.firstChild),Vt=r,Me=!0,ga=null,_n=!0,s=w1(r,null,c,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Cs(),c===h){r=mi(n,r,s);break e}jt(n,r,c,s)}r=r.child}return r;case 26:return Kl(n,r),n===null?(s=K2(r.type,null,r.pendingProps,null))?r.memoizedState=s:Me||(s=r.type,n=r.pendingProps,c=lc(de.current).createElement(s),c[zt]=r,c[_t]=n,Ct(c,s,n),gt(c),r.stateNode=c):r.memoizedState=K2(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return oa(r),n===null&&Me&&(c=r.stateNode=I2(r.type,r.pendingProps,de.current),Vt=r,_n=!0,h=et,Fi(r.type)?(Jf=h,et=Mn(c.firstChild)):et=h),jt(n,r,r.pendingProps.children,s),Kl(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&Me&&((h=c=et)&&(c=f8(c,r.type,r.pendingProps,_n),c!==null?(r.stateNode=c,Vt=r,et=Mn(c.firstChild),_n=!1,h=!0):h=!1),h||ba(r)),oa(r),h=r.type,b=r.pendingProps,w=n!==null?n.memoizedProps:null,c=b.children,Xf(h,b)?c=null:w!==null&&Xf(h,w)&&(r.flags|=32),r.memoizedState!==null&&(h=Kd(n,r,z6,null,null,s),io._currentValue=h),Kl(n,r),jt(n,r,c,s),r.child;case 6:return n===null&&Me&&((n=s=et)&&(s=p8(s,r.pendingProps,_n),s!==null?(r.stateNode=s,Vt=r,et=null,n=!0):n=!1),n||ba(r)),null;case 13:return $1(n,r,s);case 4:return Le(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=pr(r,null,c,s):jt(n,r,c,s),r.child;case 11:return L1(n,r,r.type,r.pendingProps,s);case 7:return jt(n,r,r.pendingProps,s),r.child;case 8:return jt(n,r,r.pendingProps.children,s),r.child;case 12:return jt(n,r,r.pendingProps.children,s),r.child;case 10:return c=r.pendingProps,zi(r,r.type,c.value),jt(n,r,c.children,s),r.child;case 9:return h=r.type._context,c=r.pendingProps.children,ya(r),h=Rt(h),c=c(h),r.flags|=1,jt(n,r,c,s),r.child;case 14:return O1(n,r,r.type,r.pendingProps,s);case 15:return D1(n,r,r.type,r.pendingProps,s);case 19:return G1(n,r,s);case 31:return c=r.pendingProps,s=r.mode,c={mode:c.mode,children:c.children},n===null?(s=Yl(c,s),s.ref=r.ref,r.child=s,s.return=r,r=s):(s=li(n.child,c),s.ref=r.ref,r.child=s,s.return=r,r=s),r;case 22:return P1(n,r,s);case 24:return ya(r),c=Rt(dt),n===null?(h=Bd(),h===null&&(h=qe,b=Nd(),h.pooledCache=b,b.refCount++,b!==null&&(h.pooledCacheLanes|=s),h=b),r.memoizedState={parent:c,cache:h},$d(r),zi(r,dt,h)):((n.lanes&s)!==0&&(Hd(n,r),Ps(r,null,null,s),Ds()),h=n.memoizedState,b=r.memoizedState,h.parent!==c?(h={parent:c,cache:c},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),zi(r,dt,c)):(c=b.cache,zi(r,dt,c),c!==h.cache&&Pd(r,[dt],s,!0))),jt(n,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function gi(n){n.flags|=4}function I1(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Z2(r)){if(r=vn.current,r!==null&&((Ce&4194048)===Ce?$n!==null:(Ce&62914560)!==Ce&&(Ce&536870912)===0||r!==$n))throw Ls=_d,E0;n.flags|=8192}}function Xl(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?Sg():536870912,n.lanes|=r,br|=r)}function Gs(n,r){if(!Me)switch(n.tailMode){case"hidden":r=n.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ze(n){var r=n.alternate!==null&&n.alternate.child===n.child,s=0,c=0;if(r)for(var h=n.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags&65011712,c|=h.flags&65011712,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=s,r}function _6(n,r,s){var c=r.pendingProps;switch(Rd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(r),null;case 1:return Ze(r),null;case 3:return s=r.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),r.memoizedState.cache!==c&&(r.flags|=2048),fi(dt),Mt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(ks(r)?gi(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,S0())),Ze(r),null;case 26:return s=r.memoizedState,n===null?(gi(r),s!==null?(Ze(r),I1(r,s)):(Ze(r),r.flags&=-16777217)):s?s!==n.memoizedState?(gi(r),Ze(r),I1(r,s)):(Ze(r),r.flags&=-16777217):(n.memoizedProps!==c&&gi(r),Ze(r),r.flags&=-16777217),null;case 27:ri(r),s=de.current;var h=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==c&&gi(r);else{if(!c){if(r.stateNode===null)throw Error(a(166));return Ze(r),null}n=se.current,ks(r)?v0(r):(n=I2(h,c,s),r.stateNode=n,gi(r))}return Ze(r),null;case 5:if(ri(r),s=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==c&&gi(r);else{if(!c){if(r.stateNode===null)throw Error(a(166));return Ze(r),null}if(n=se.current,ks(r))v0(r);else{switch(h=lc(de.current),n){case 1:n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=h.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?h.createElement("select",{is:c.is}):h.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?h.createElement(s,{is:c.is}):h.createElement(s)}}n[zt]=r,n[_t]=c;e:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)n.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break e;for(;h.sibling===null;){if(h.return===null||h.return===r)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=n;e:switch(Ct(n,s,c),s){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&gi(r)}}return Ze(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==c&&gi(r);else{if(typeof c!="string"&&r.stateNode===null)throw Error(a(166));if(n=de.current,ks(r)){if(n=r.stateNode,s=r.memoizedProps,c=null,h=Vt,h!==null)switch(h.tag){case 27:case 5:c=h.memoizedProps}n[zt]=r,n=!!(n.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||V2(n.nodeValue,s)),n||ba(r)}else n=lc(n).createTextNode(c),n[zt]=r,r.stateNode=n}return Ze(r),null;case 13:if(c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=ks(r),c!==null&&c.dehydrated!==null){if(n===null){if(!h)throw Error(a(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[zt]=r}else Cs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ze(r),h=!1}else h=S0(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(hi(r),r):(hi(r),null)}if(hi(r),(r.flags&128)!==0)return r.lanes=s,r;if(s=c!==null,n=n!==null&&n.memoizedState!==null,s){c=r.child,h=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(h=c.alternate.memoizedState.cachePool.pool);var b=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(b=c.memoizedState.cachePool.pool),b!==h&&(c.flags|=2048)}return s!==n&&s&&(r.child.flags|=8192),Xl(r,r.updateQueue),Ze(r),null;case 4:return Mt(),n===null&&If(r.stateNode.containerInfo),Ze(r),null;case 10:return fi(r.type),Ze(r),null;case 19:if(te(ft),h=r.memoizedState,h===null)return Ze(r),null;if(c=(r.flags&128)!==0,b=h.rendering,b===null)if(c)Gs(h,!1);else{if(tt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(b=Il(n),b!==null){for(r.flags|=128,Gs(h,!1),n=b.updateQueue,r.updateQueue=n,Xl(r,n),r.subtreeFlags=0,n=s,s=r.child;s!==null;)x0(s,n),s=s.sibling;return ie(ft,ft.current&1|2),r.child}n=n.sibling}h.tail!==null&&Bn()>Zl&&(r.flags|=128,c=!0,Gs(h,!1),r.lanes=4194304)}else{if(!c)if(n=Il(b),n!==null){if(r.flags|=128,c=!0,n=n.updateQueue,r.updateQueue=n,Xl(r,n),Gs(h,!0),h.tail===null&&h.tailMode==="hidden"&&!b.alternate&&!Me)return Ze(r),null}else 2*Bn()-h.renderingStartTime>Zl&&s!==536870912&&(r.flags|=128,c=!0,Gs(h,!1),r.lanes=4194304);h.isBackwards?(b.sibling=r.child,r.child=b):(n=h.last,n!==null?n.sibling=b:r.child=b,h.last=b)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=Bn(),r.sibling=null,n=ft.current,ie(ft,c?n&1|2:n&1),r):(Ze(r),null);case 22:case 23:return hi(r),Fd(),c=r.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(r.flags|=8192):c&&(r.flags|=8192),c?(s&536870912)!==0&&(r.flags&128)===0&&(Ze(r),r.subtreeFlags&6&&(r.flags|=8192)):Ze(r),s=r.updateQueue,s!==null&&Xl(r,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==s&&(r.flags|=2048),n!==null&&te(va),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),fi(dt),Ze(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function $6(n,r){switch(Rd(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return fi(dt),Mt(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return ri(r),null;case 13:if(hi(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(a(340));Cs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return te(ft),null;case 4:return Mt(),null;case 10:return fi(r.type),null;case 22:case 23:return hi(r),Fd(),n!==null&&te(va),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return fi(dt),null;case 25:return null;default:return null}}function F1(n,r){switch(Rd(r),r.tag){case 3:fi(dt),Mt();break;case 26:case 27:case 5:ri(r);break;case 4:Mt();break;case 13:hi(r);break;case 19:te(ft);break;case 10:fi(r.type);break;case 22:case 23:hi(r),Fd(),n!==null&&te(va);break;case 24:fi(dt)}}function Us(n,r){try{var s=r.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var h=c.next;s=h;do{if((s.tag&n)===n){c=void 0;var b=s.create,w=s.inst;c=b(),w.destroy=c}s=s.next}while(s!==h)}}catch(T){Ue(r,r.return,T)}}function Vi(n,r,s){try{var c=r.updateQueue,h=c!==null?c.lastEffect:null;if(h!==null){var b=h.next;c=b;do{if((c.tag&n)===n){var w=c.inst,T=w.destroy;if(T!==void 0){w.destroy=void 0,h=r;var L=s,F=T;try{F()}catch(W){Ue(h,L,W)}}}c=c.next}while(c!==b)}}catch(W){Ue(r,r.return,W)}}function q1(n){var r=n.updateQueue;if(r!==null){var s=n.stateNode;try{O0(r,s)}catch(c){Ue(n,n.return,c)}}}function K1(n,r,s){s.props=Sa(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(c){Ue(n,r,c)}}function Is(n,r){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof s=="function"?n.refCleanup=s(c):s.current=c}}catch(h){Ue(n,r,h)}}function Hn(n,r){var s=n.ref,c=n.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(h){Ue(n,r,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){Ue(n,r,h)}else s.current=null}function Y1(n){var r=n.type,s=n.memoizedProps,c=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break e;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(h){Ue(n,n.return,h)}}function vf(n,r,s){try{var c=n.stateNode;o8(c,n.type,s,r),c[_t]=r}catch(h){Ue(n,n.return,h)}}function X1(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Fi(n.type)||n.tag===4}function wf(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||X1(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Fi(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Sf(n,r,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(n),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=oc));else if(c!==4&&(c===27&&Fi(n.type)&&(s=n.stateNode,r=null),n=n.child,n!==null))for(Sf(n,r,s),n=n.sibling;n!==null;)Sf(n,r,s),n=n.sibling}function Ql(n,r,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?s.insertBefore(n,r):s.appendChild(n);else if(c!==4&&(c===27&&Fi(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(Ql(n,r,s),n=n.sibling;n!==null;)Ql(n,r,s),n=n.sibling}function Q1(n){var r=n.stateNode,s=n.memoizedProps;try{for(var c=n.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);Ct(r,c,s),r[zt]=n,r[_t]=s}catch(b){Ue(n,n.return,b)}}var bi=!1,at=!1,Tf=!1,W1=typeof WeakSet=="function"?WeakSet:Set,xt=null;function H6(n,r){if(n=n.containerInfo,Kf=hc,n=l0(n),vd(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var h=c.anchorOffset,b=c.focusNode;c=c.focusOffset;try{s.nodeType,b.nodeType}catch{s=null;break e}var w=0,T=-1,L=-1,F=0,W=0,ee=n,q=null;t:for(;;){for(var K;ee!==s||h!==0&&ee.nodeType!==3||(T=w+h),ee!==b||c!==0&&ee.nodeType!==3||(L=w+c),ee.nodeType===3&&(w+=ee.nodeValue.length),(K=ee.firstChild)!==null;)q=ee,ee=K;for(;;){if(ee===n)break t;if(q===s&&++F===h&&(T=w),q===b&&++W===c&&(L=w),(K=ee.nextSibling)!==null)break;ee=q,q=ee.parentNode}ee=K}s=T===-1||L===-1?null:{start:T,end:L}}else s=null}s=s||{start:0,end:0}}else s=null;for(Yf={focusedElem:n,selectionRange:s},hc=!1,xt=r;xt!==null;)if(r=xt,n=r.child,(r.subtreeFlags&1024)!==0&&n!==null)n.return=r,xt=n;else for(;xt!==null;){switch(r=xt,b=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&b!==null){n=void 0,s=r,h=b.memoizedProps,b=b.memoizedState,c=s.stateNode;try{var me=Sa(s.type,h,s.elementType===s.type);n=c.getSnapshotBeforeUpdate(me,b),c.__reactInternalSnapshotBeforeUpdate=n}catch(fe){Ue(s,s.return,fe)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,s=n.nodeType,s===9)Wf(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Wf(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(a(163))}if(n=r.sibling,n!==null){n.return=r.return,xt=n;break}xt=r.return}}function Z1(n,r,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:Bi(n,s),c&4&&Us(5,s);break;case 1:if(Bi(n,s),c&4)if(n=s.stateNode,r===null)try{n.componentDidMount()}catch(w){Ue(s,s.return,w)}else{var h=Sa(s.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(h,r,n.__reactInternalSnapshotBeforeUpdate)}catch(w){Ue(s,s.return,w)}}c&64&&q1(s),c&512&&Is(s,s.return);break;case 3:if(Bi(n,s),c&64&&(n=s.updateQueue,n!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{O0(n,r)}catch(w){Ue(s,s.return,w)}}break;case 27:r===null&&c&4&&Q1(s);case 26:case 5:Bi(n,s),r===null&&c&4&&Y1(s),c&512&&Is(s,s.return);break;case 12:Bi(n,s);break;case 13:Bi(n,s),c&4&&t2(n,s),c&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=Q6.bind(null,s),h8(n,s))));break;case 22:if(c=s.memoizedState!==null||bi,!c){r=r!==null&&r.memoizedState!==null||at,h=bi;var b=at;bi=c,(at=r)&&!b?_i(n,s,(s.subtreeFlags&8772)!==0):Bi(n,s),bi=h,at=b}break;case 30:break;default:Bi(n,s)}}function J1(n){var r=n.alternate;r!==null&&(n.alternate=null,J1(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&td(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Xe=null,Gt=!1;function xi(n,r,s){for(s=s.child;s!==null;)e2(n,r,s),s=s.sibling}function e2(n,r,s){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(ds,s)}catch{}switch(s.tag){case 26:at||Hn(s,r),xi(n,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:at||Hn(s,r);var c=Xe,h=Gt;Fi(s.type)&&(Xe=s.stateNode,Gt=!1),xi(n,r,s),Js(s.stateNode),Xe=c,Gt=h;break;case 5:at||Hn(s,r);case 6:if(c=Xe,h=Gt,Xe=null,xi(n,r,s),Xe=c,Gt=h,Xe!==null)if(Gt)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(s.stateNode)}catch(b){Ue(s,r,b)}else try{Xe.removeChild(s.stateNode)}catch(b){Ue(s,r,b)}break;case 18:Xe!==null&&(Gt?(n=Xe,G2(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),oo(n)):G2(Xe,s.stateNode));break;case 4:c=Xe,h=Gt,Xe=s.stateNode.containerInfo,Gt=!0,xi(n,r,s),Xe=c,Gt=h;break;case 0:case 11:case 14:case 15:at||Vi(2,s,r),at||Vi(4,s,r),xi(n,r,s);break;case 1:at||(Hn(s,r),c=s.stateNode,typeof c.componentWillUnmount=="function"&&K1(s,r,c)),xi(n,r,s);break;case 21:xi(n,r,s);break;case 22:at=(c=at)||s.memoizedState!==null,xi(n,r,s),at=c;break;default:xi(n,r,s)}}function t2(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{oo(n)}catch(s){Ue(r,r.return,s)}}function G6(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new W1),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new W1),r;default:throw Error(a(435,n.tag))}}function jf(n,r){var s=G6(n);r.forEach(function(c){var h=W6.bind(null,n,c);s.has(c)||(s.add(c),c.then(h,h))})}function tn(n,r){var s=r.deletions;if(s!==null)for(var c=0;c<s.length;c++){var h=s[c],b=n,w=r,T=w;e:for(;T!==null;){switch(T.tag){case 27:if(Fi(T.type)){Xe=T.stateNode,Gt=!1;break e}break;case 5:Xe=T.stateNode,Gt=!1;break e;case 3:case 4:Xe=T.stateNode.containerInfo,Gt=!0;break e}T=T.return}if(Xe===null)throw Error(a(160));e2(b,w,h),Xe=null,Gt=!1,b=h.alternate,b!==null&&(b.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)n2(r,n),r=r.sibling}var An=null;function n2(n,r){var s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:tn(r,n),nn(n),c&4&&(Vi(3,n,n.return),Us(3,n),Vi(5,n,n.return));break;case 1:tn(r,n),nn(n),c&512&&(at||s===null||Hn(s,s.return)),c&64&&bi&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var h=An;if(tn(r,n),nn(n),c&512&&(at||s===null||Hn(s,s.return)),c&4){var b=s!==null?s.memoizedState:null;if(c=n.memoizedState,s===null)if(c===null)if(n.stateNode===null){e:{c=n.type,s=n.memoizedProps,h=h.ownerDocument||h;t:switch(c){case"title":b=h.getElementsByTagName("title")[0],(!b||b[hs]||b[zt]||b.namespaceURI==="http://www.w3.org/2000/svg"||b.hasAttribute("itemprop"))&&(b=h.createElement(c),h.head.insertBefore(b,h.querySelector("head > title"))),Ct(b,c,s),b[zt]=n,gt(b),c=b;break e;case"link":var w=Q2("link","href",h).get(c+(s.href||""));if(w){for(var T=0;T<w.length;T++)if(b=w[T],b.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&b.getAttribute("rel")===(s.rel==null?null:s.rel)&&b.getAttribute("title")===(s.title==null?null:s.title)&&b.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){w.splice(T,1);break t}}b=h.createElement(c),Ct(b,c,s),h.head.appendChild(b);break;case"meta":if(w=Q2("meta","content",h).get(c+(s.content||""))){for(T=0;T<w.length;T++)if(b=w[T],b.getAttribute("content")===(s.content==null?null:""+s.content)&&b.getAttribute("name")===(s.name==null?null:s.name)&&b.getAttribute("property")===(s.property==null?null:s.property)&&b.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&b.getAttribute("charset")===(s.charSet==null?null:s.charSet)){w.splice(T,1);break t}}b=h.createElement(c),Ct(b,c,s),h.head.appendChild(b);break;default:throw Error(a(468,c))}b[zt]=n,gt(b),c=b}n.stateNode=c}else W2(h,n.type,n.stateNode);else n.stateNode=X2(h,c,n.memoizedProps);else b!==c?(b===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):b.count--,c===null?W2(h,n.type,n.stateNode):X2(h,c,n.memoizedProps)):c===null&&n.stateNode!==null&&vf(n,n.memoizedProps,s.memoizedProps)}break;case 27:tn(r,n),nn(n),c&512&&(at||s===null||Hn(s,s.return)),s!==null&&c&4&&vf(n,n.memoizedProps,s.memoizedProps);break;case 5:if(tn(r,n),nn(n),c&512&&(at||s===null||Hn(s,s.return)),n.flags&32){h=n.stateNode;try{Xa(h,"")}catch(K){Ue(n,n.return,K)}}c&4&&n.stateNode!=null&&(h=n.memoizedProps,vf(n,h,s!==null?s.memoizedProps:h)),c&1024&&(Tf=!0);break;case 6:if(tn(r,n),nn(n),c&4){if(n.stateNode===null)throw Error(a(162));c=n.memoizedProps,s=n.stateNode;try{s.nodeValue=c}catch(K){Ue(n,n.return,K)}}break;case 3:if(dc=null,h=An,An=cc(r.containerInfo),tn(r,n),An=h,nn(n),c&4&&s!==null&&s.memoizedState.isDehydrated)try{oo(r.containerInfo)}catch(K){Ue(n,n.return,K)}Tf&&(Tf=!1,i2(n));break;case 4:c=An,An=cc(n.stateNode.containerInfo),tn(r,n),nn(n),An=c;break;case 12:tn(r,n),nn(n);break;case 13:tn(r,n),nn(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(zf=Bn()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,jf(n,c)));break;case 22:h=n.memoizedState!==null;var L=s!==null&&s.memoizedState!==null,F=bi,W=at;if(bi=F||h,at=W||L,tn(r,n),at=W,bi=F,nn(n),c&8192)e:for(r=n.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(s===null||L||bi||at||Ta(n)),s=null,r=n;;){if(r.tag===5||r.tag===26){if(s===null){L=s=r;try{if(b=L.stateNode,h)w=b.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{T=L.stateNode;var ee=L.memoizedProps.style,q=ee!=null&&ee.hasOwnProperty("display")?ee.display:null;T.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(K){Ue(L,L.return,K)}}}else if(r.tag===6){if(s===null){L=r;try{L.stateNode.nodeValue=h?"":L.memoizedProps}catch(K){Ue(L,L.return,K)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}c&4&&(c=n.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,jf(n,s))));break;case 19:tn(r,n),nn(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,jf(n,c)));break;case 30:break;case 21:break;default:tn(r,n),nn(n)}}function nn(n){var r=n.flags;if(r&2){try{for(var s,c=n.return;c!==null;){if(X1(c)){s=c;break}c=c.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,b=wf(n);Ql(n,b,h);break;case 5:var w=s.stateNode;s.flags&32&&(Xa(w,""),s.flags&=-33);var T=wf(n);Ql(n,T,w);break;case 3:case 4:var L=s.stateNode.containerInfo,F=wf(n);Sf(n,F,L);break;default:throw Error(a(161))}}catch(W){Ue(n,n.return,W)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function i2(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;i2(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function Bi(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Z1(n,r.alternate,r),r=r.sibling}function Ta(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:Vi(4,r,r.return),Ta(r);break;case 1:Hn(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&K1(r,r.return,s),Ta(r);break;case 27:Js(r.stateNode);case 26:case 5:Hn(r,r.return),Ta(r);break;case 22:r.memoizedState===null&&Ta(r);break;case 30:Ta(r);break;default:Ta(r)}n=n.sibling}}function _i(n,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var c=r.alternate,h=n,b=r,w=b.flags;switch(b.tag){case 0:case 11:case 15:_i(h,b,s),Us(4,b);break;case 1:if(_i(h,b,s),c=b,h=c.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(F){Ue(c,c.return,F)}if(c=b,h=c.updateQueue,h!==null){var T=c.stateNode;try{var L=h.shared.hiddenCallbacks;if(L!==null)for(h.shared.hiddenCallbacks=null,h=0;h<L.length;h++)L0(L[h],T)}catch(F){Ue(c,c.return,F)}}s&&w&64&&q1(b),Is(b,b.return);break;case 27:Q1(b);case 26:case 5:_i(h,b,s),s&&c===null&&w&4&&Y1(b),Is(b,b.return);break;case 12:_i(h,b,s);break;case 13:_i(h,b,s),s&&w&4&&t2(h,b);break;case 22:b.memoizedState===null&&_i(h,b,s),Is(b,b.return);break;case 30:break;default:_i(h,b,s)}r=r.sibling}}function kf(n,r){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&Ms(s))}function Cf(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Ms(n))}function Gn(n,r,s,c){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)a2(n,r,s,c),r=r.sibling}function a2(n,r,s,c){var h=r.flags;switch(r.tag){case 0:case 11:case 15:Gn(n,r,s,c),h&2048&&Us(9,r);break;case 1:Gn(n,r,s,c);break;case 3:Gn(n,r,s,c),h&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Ms(n)));break;case 12:if(h&2048){Gn(n,r,s,c),n=r.stateNode;try{var b=r.memoizedProps,w=b.id,T=b.onPostCommit;typeof T=="function"&&T(w,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(L){Ue(r,r.return,L)}}else Gn(n,r,s,c);break;case 13:Gn(n,r,s,c);break;case 23:break;case 22:b=r.stateNode,w=r.alternate,r.memoizedState!==null?b._visibility&2?Gn(n,r,s,c):Fs(n,r):b._visibility&2?Gn(n,r,s,c):(b._visibility|=2,hr(n,r,s,c,(r.subtreeFlags&10256)!==0)),h&2048&&kf(w,r);break;case 24:Gn(n,r,s,c),h&2048&&Cf(r.alternate,r);break;default:Gn(n,r,s,c)}}function hr(n,r,s,c,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var b=n,w=r,T=s,L=c,F=w.flags;switch(w.tag){case 0:case 11:case 15:hr(b,w,T,L,h),Us(8,w);break;case 23:break;case 22:var W=w.stateNode;w.memoizedState!==null?W._visibility&2?hr(b,w,T,L,h):Fs(b,w):(W._visibility|=2,hr(b,w,T,L,h)),h&&F&2048&&kf(w.alternate,w);break;case 24:hr(b,w,T,L,h),h&&F&2048&&Cf(w.alternate,w);break;default:hr(b,w,T,L,h)}r=r.sibling}}function Fs(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=n,c=r,h=c.flags;switch(c.tag){case 22:Fs(s,c),h&2048&&kf(c.alternate,c);break;case 24:Fs(s,c),h&2048&&Cf(c.alternate,c);break;default:Fs(s,c)}r=r.sibling}}var qs=8192;function mr(n){if(n.subtreeFlags&qs)for(n=n.child;n!==null;)r2(n),n=n.sibling}function r2(n){switch(n.tag){case 26:mr(n),n.flags&qs&&n.memoizedState!==null&&E8(An,n.memoizedState,n.memoizedProps);break;case 5:mr(n);break;case 3:case 4:var r=An;An=cc(n.stateNode.containerInfo),mr(n),An=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=qs,qs=16777216,mr(n),qs=r):mr(n));break;default:mr(n)}}function s2(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function Ks(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var c=r[s];xt=c,l2(c,n)}s2(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)o2(n),n=n.sibling}function o2(n){switch(n.tag){case 0:case 11:case 15:Ks(n),n.flags&2048&&Vi(9,n,n.return);break;case 3:Ks(n);break;case 12:Ks(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,Wl(n)):Ks(n);break;default:Ks(n)}}function Wl(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var c=r[s];xt=c,l2(c,n)}s2(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:Vi(8,r,r.return),Wl(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,Wl(r));break;default:Wl(r)}n=n.sibling}}function l2(n,r){for(;xt!==null;){var s=xt;switch(s.tag){case 0:case 11:case 15:Vi(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Ms(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,xt=c;else e:for(s=n;xt!==null;){c=xt;var h=c.sibling,b=c.return;if(J1(c),c===s){xt=null;break e}if(h!==null){h.return=b,xt=h;break e}xt=b}}}var U6={getCacheForType:function(n){var r=Rt(dt),s=r.data.get(n);return s===void 0&&(s=n(),r.data.set(n,s)),s}},I6=typeof WeakMap=="function"?WeakMap:Map,Pe=0,qe=null,je=null,Ce=0,Ne=0,an=null,$i=!1,gr=!1,Ef=!1,yi=0,tt=0,Hi=0,ja=0,Af=0,wn=0,br=0,Ys=null,Ut=null,Mf=!1,zf=0,Zl=1/0,Jl=null,Gi=null,kt=0,Ui=null,xr=null,yr=0,Rf=0,Lf=null,c2=null,Xs=0,Of=null;function rn(){if((Pe&2)!==0&&Ce!==0)return Ce&-Ce;if(H.T!==null){var n=sr;return n!==0?n:$f()}return kg()}function u2(){wn===0&&(wn=(Ce&536870912)===0||Me?wg():536870912);var n=vn.current;return n!==null&&(n.flags|=32),wn}function sn(n,r,s){(n===qe&&(Ne===2||Ne===9)||n.cancelPendingCommit!==null)&&(vr(n,0),Ii(n,Ce,wn,!1)),ps(n,s),((Pe&2)===0||n!==qe)&&(n===qe&&((Pe&2)===0&&(ja|=s),tt===4&&Ii(n,Ce,wn,!1)),Un(n))}function d2(n,r,s){if((Pe&6)!==0)throw Error(a(327));var c=!s&&(r&124)===0&&(r&n.expiredLanes)===0||fs(n,r),h=c?K6(n,r):Nf(n,r,!0),b=c;do{if(h===0){gr&&!c&&Ii(n,r,0,!1);break}else{if(s=n.current.alternate,b&&!F6(s)){h=Nf(n,r,!1),b=!1;continue}if(h===2){if(b=r,n.errorRecoveryDisabledLanes&b)var w=0;else w=n.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){r=w;e:{var T=n;h=Ys;var L=T.current.memoizedState.isDehydrated;if(L&&(vr(T,w).flags|=256),w=Nf(T,w,!1),w!==2){if(Ef&&!L){T.errorRecoveryDisabledLanes|=b,ja|=b,h=4;break e}b=Ut,Ut=h,b!==null&&(Ut===null?Ut=b:Ut.push.apply(Ut,b))}h=w}if(b=!1,h!==2)continue}}if(h===1){vr(n,0),Ii(n,r,0,!0);break}e:{switch(c=n,b=h,b){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:Ii(c,r,wn,!$i);break e;case 2:Ut=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(h=zf+300-Bn(),10<h)){if(Ii(c,r,wn,!$i),ul(c,0,!0)!==0)break e;c.timeoutHandle=$2(f2.bind(null,c,s,Ut,Jl,Mf,r,wn,ja,br,$i,b,2,-0,0),h);break e}f2(c,s,Ut,Jl,Mf,r,wn,ja,br,$i,b,0,-0,0)}}break}while(!0);Un(n)}function f2(n,r,s,c,h,b,w,T,L,F,W,ee,q,K){if(n.timeoutHandle=-1,ee=r.subtreeFlags,(ee&8192||(ee&16785408)===16785408)&&(no={stylesheets:null,count:0,unsuspend:C8},r2(r),ee=A8(),ee!==null)){n.cancelPendingCommit=ee(y2.bind(null,n,r,b,s,c,h,w,T,L,W,1,q,K)),Ii(n,b,w,!F);return}y2(n,r,b,s,c,h,w,T,L)}function F6(n){for(var r=n;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var h=s[c],b=h.getSnapshot;h=h.value;try{if(!Jt(b(),h))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ii(n,r,s,c){r&=~Af,r&=~ja,n.suspendedLanes|=r,n.pingedLanes&=~r,c&&(n.warmLanes|=r),c=n.expirationTimes;for(var h=r;0<h;){var b=31-Zt(h),w=1<<b;c[b]=-1,h&=~w}s!==0&&Tg(n,s,r)}function ec(){return(Pe&6)===0?(Qs(0),!1):!0}function Df(){if(je!==null){if(Ne===0)var n=je.return;else n=je,di=xa=null,Qd(n),fr=null,$s=0,n=je;for(;n!==null;)F1(n.alternate,n),n=n.return;je=null}}function vr(n,r){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,c8(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),Df(),qe=n,je=s=li(n.current,null),Ce=r,Ne=0,an=null,$i=!1,gr=fs(n,r),Ef=!1,br=wn=Af=ja=Hi=tt=0,Ut=Ys=null,Mf=!1,(r&8)!==0&&(r|=r&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=r;0<c;){var h=31-Zt(c),b=1<<h;r|=n[h],c&=~b}return yi=r,Sl(),s}function p2(n,r){Se=null,H.H=Hl,r===Rs||r===Rl?(r=z0(),Ne=3):r===E0?(r=z0(),Ne=4):Ne=r===R1?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,an=r,je===null&&(tt=1,ql(n,gn(r,n.current)))}function h2(){var n=H.H;return H.H=Hl,n===null?Hl:n}function m2(){var n=H.A;return H.A=U6,n}function Pf(){tt=4,$i||(Ce&4194048)!==Ce&&vn.current!==null||(gr=!0),(Hi&134217727)===0&&(ja&134217727)===0||qe===null||Ii(qe,Ce,wn,!1)}function Nf(n,r,s){var c=Pe;Pe|=2;var h=h2(),b=m2();(qe!==n||Ce!==r)&&(Jl=null,vr(n,r)),r=!1;var w=tt;e:do try{if(Ne!==0&&je!==null){var T=je,L=an;switch(Ne){case 8:Df(),w=6;break e;case 3:case 2:case 9:case 6:vn.current===null&&(r=!0);var F=Ne;if(Ne=0,an=null,wr(n,T,L,F),s&&gr){w=0;break e}break;default:F=Ne,Ne=0,an=null,wr(n,T,L,F)}}q6(),w=tt;break}catch(W){p2(n,W)}while(!0);return r&&n.shellSuspendCounter++,di=xa=null,Pe=c,H.H=h,H.A=b,je===null&&(qe=null,Ce=0,Sl()),w}function q6(){for(;je!==null;)g2(je)}function K6(n,r){var s=Pe;Pe|=2;var c=h2(),h=m2();qe!==n||Ce!==r?(Jl=null,Zl=Bn()+500,vr(n,r)):gr=fs(n,r);e:do try{if(Ne!==0&&je!==null){r=je;var b=an;t:switch(Ne){case 1:Ne=0,an=null,wr(n,r,b,1);break;case 2:case 9:if(A0(b)){Ne=0,an=null,b2(r);break}r=function(){Ne!==2&&Ne!==9||qe!==n||(Ne=7),Un(n)},b.then(r,r);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:A0(b)?(Ne=0,an=null,b2(r)):(Ne=0,an=null,wr(n,r,b,7));break;case 5:var w=null;switch(je.tag){case 26:w=je.memoizedState;case 5:case 27:var T=je;if(!w||Z2(w)){Ne=0,an=null;var L=T.sibling;if(L!==null)je=L;else{var F=T.return;F!==null?(je=F,tc(F)):je=null}break t}}Ne=0,an=null,wr(n,r,b,5);break;case 6:Ne=0,an=null,wr(n,r,b,6);break;case 8:Df(),tt=6;break e;default:throw Error(a(462))}}Y6();break}catch(W){p2(n,W)}while(!0);return di=xa=null,H.H=c,H.A=h,Pe=s,je!==null?0:(qe=null,Ce=0,Sl(),tt)}function Y6(){for(;je!==null&&!g3();)g2(je)}function g2(n){var r=U1(n.alternate,n,yi);n.memoizedProps=n.pendingProps,r===null?tc(n):je=r}function b2(n){var r=n,s=r.alternate;switch(r.tag){case 15:case 0:r=V1(s,r,r.pendingProps,r.type,void 0,Ce);break;case 11:r=V1(s,r,r.pendingProps,r.type.render,r.ref,Ce);break;case 5:Qd(r);default:F1(s,r),r=je=x0(r,yi),r=U1(s,r,yi)}n.memoizedProps=n.pendingProps,r===null?tc(n):je=r}function wr(n,r,s,c){di=xa=null,Qd(r),fr=null,$s=0;var h=r.return;try{if(V6(n,h,r,s,Ce)){tt=1,ql(n,gn(s,n.current)),je=null;return}}catch(b){if(h!==null)throw je=h,b;tt=1,ql(n,gn(s,n.current)),je=null;return}r.flags&32768?(Me||c===1?n=!0:gr||(Ce&536870912)!==0?n=!1:($i=n=!0,(c===2||c===9||c===3||c===6)&&(c=vn.current,c!==null&&c.tag===13&&(c.flags|=16384))),x2(r,n)):tc(r)}function tc(n){var r=n;do{if((r.flags&32768)!==0){x2(r,$i);return}n=r.return;var s=_6(r.alternate,r,yi);if(s!==null){je=s;return}if(r=r.sibling,r!==null){je=r;return}je=r=n}while(r!==null);tt===0&&(tt=5)}function x2(n,r){do{var s=$6(n.alternate,n);if(s!==null){s.flags&=32767,je=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(n=n.sibling,n!==null)){je=n;return}je=n=s}while(n!==null);tt=6,je=null}function y2(n,r,s,c,h,b,w,T,L){n.cancelPendingCommit=null;do nc();while(kt!==0);if((Pe&6)!==0)throw Error(a(327));if(r!==null){if(r===n.current)throw Error(a(177));if(b=r.lanes|r.childLanes,b|=kd,C3(n,s,b,w,T,L),n===qe&&(je=qe=null,Ce=0),xr=r,Ui=n,yr=s,Rf=b,Lf=h,c2=c,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,Z6(ol,function(){return j2(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||c){c=H.T,H.T=null,h=D.p,D.p=2,w=Pe,Pe|=4;try{H6(n,r,s)}finally{Pe=w,D.p=h,H.T=c}}kt=1,v2(),w2(),S2()}}function v2(){if(kt===1){kt=0;var n=Ui,r=xr,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=H.T,H.T=null;var c=D.p;D.p=2;var h=Pe;Pe|=4;try{n2(r,n);var b=Yf,w=l0(n.containerInfo),T=b.focusedElem,L=b.selectionRange;if(w!==T&&T&&T.ownerDocument&&o0(T.ownerDocument.documentElement,T)){if(L!==null&&vd(T)){var F=L.start,W=L.end;if(W===void 0&&(W=F),"selectionStart"in T)T.selectionStart=F,T.selectionEnd=Math.min(W,T.value.length);else{var ee=T.ownerDocument||document,q=ee&&ee.defaultView||window;if(q.getSelection){var K=q.getSelection(),me=T.textContent.length,fe=Math.min(L.start,me),$e=L.end===void 0?fe:Math.min(L.end,me);!K.extend&&fe>$e&&(w=$e,$e=fe,fe=w);var $=s0(T,fe),V=s0(T,$e);if($&&V&&(K.rangeCount!==1||K.anchorNode!==$.node||K.anchorOffset!==$.offset||K.focusNode!==V.node||K.focusOffset!==V.offset)){var I=ee.createRange();I.setStart($.node,$.offset),K.removeAllRanges(),fe>$e?(K.addRange(I),K.extend(V.node,V.offset)):(I.setEnd(V.node,V.offset),K.addRange(I))}}}}for(ee=[],K=T;K=K.parentNode;)K.nodeType===1&&ee.push({element:K,left:K.scrollLeft,top:K.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ee.length;T++){var J=ee[T];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}hc=!!Kf,Yf=Kf=null}finally{Pe=h,D.p=c,H.T=s}}n.current=r,kt=2}}function w2(){if(kt===2){kt=0;var n=Ui,r=xr,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=H.T,H.T=null;var c=D.p;D.p=2;var h=Pe;Pe|=4;try{Z1(n,r.alternate,r)}finally{Pe=h,D.p=c,H.T=s}}kt=3}}function S2(){if(kt===4||kt===3){kt=0,b3();var n=Ui,r=xr,s=yr,c=c2;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?kt=5:(kt=0,xr=Ui=null,T2(n,n.pendingLanes));var h=n.pendingLanes;if(h===0&&(Gi=null),Ju(s),r=r.stateNode,Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(ds,r,void 0,(r.current.flags&128)===128)}catch{}if(c!==null){r=H.T,h=D.p,D.p=2,H.T=null;try{for(var b=n.onRecoverableError,w=0;w<c.length;w++){var T=c[w];b(T.value,{componentStack:T.stack})}}finally{H.T=r,D.p=h}}(yr&3)!==0&&nc(),Un(n),h=n.pendingLanes,(s&4194090)!==0&&(h&42)!==0?n===Of?Xs++:(Xs=0,Of=n):Xs=0,Qs(0)}}function T2(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Ms(r)))}function nc(n){return v2(),w2(),S2(),j2()}function j2(){if(kt!==5)return!1;var n=Ui,r=Rf;Rf=0;var s=Ju(yr),c=H.T,h=D.p;try{D.p=32>s?32:s,H.T=null,s=Lf,Lf=null;var b=Ui,w=yr;if(kt=0,xr=Ui=null,yr=0,(Pe&6)!==0)throw Error(a(331));var T=Pe;if(Pe|=4,o2(b.current),a2(b,b.current,w,s),Pe=T,Qs(0,!1),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(ds,b)}catch{}return!0}finally{D.p=h,H.T=c,T2(n,r)}}function k2(n,r,s){r=gn(s,r),r=df(n.stateNode,r,2),n=Oi(n,r,2),n!==null&&(ps(n,2),Un(n))}function Ue(n,r,s){if(n.tag===3)k2(n,n,s);else for(;r!==null;){if(r.tag===3){k2(r,n,s);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Gi===null||!Gi.has(c))){n=gn(s,n),s=M1(2),c=Oi(r,s,2),c!==null&&(z1(s,c,r,n),ps(c,2),Un(c));break}}r=r.return}}function Vf(n,r,s){var c=n.pingCache;if(c===null){c=n.pingCache=new I6;var h=new Set;c.set(r,h)}else h=c.get(r),h===void 0&&(h=new Set,c.set(r,h));h.has(s)||(Ef=!0,h.add(s),n=X6.bind(null,n,r,s),r.then(n,n))}function X6(n,r,s){var c=n.pingCache;c!==null&&c.delete(r),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,qe===n&&(Ce&s)===s&&(tt===4||tt===3&&(Ce&62914560)===Ce&&300>Bn()-zf?(Pe&2)===0&&vr(n,0):Af|=s,br===Ce&&(br=0)),Un(n)}function C2(n,r){r===0&&(r=Sg()),n=nr(n,r),n!==null&&(ps(n,r),Un(n))}function Q6(n){var r=n.memoizedState,s=0;r!==null&&(s=r.retryLane),C2(n,s)}function W6(n,r){var s=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(s=h.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(a(314))}c!==null&&c.delete(r),C2(n,s)}function Z6(n,r){return Xu(n,r)}var ic=null,Sr=null,Bf=!1,ac=!1,_f=!1,ka=0;function Un(n){n!==Sr&&n.next===null&&(Sr===null?ic=Sr=n:Sr=Sr.next=n),ac=!0,Bf||(Bf=!0,e8())}function Qs(n,r){if(!_f&&ac){_f=!0;do for(var s=!1,c=ic;c!==null;){if(n!==0){var h=c.pendingLanes;if(h===0)var b=0;else{var w=c.suspendedLanes,T=c.pingedLanes;b=(1<<31-Zt(42|n)+1)-1,b&=h&~(w&~T),b=b&201326741?b&201326741|1:b?b|2:0}b!==0&&(s=!0,z2(c,b))}else b=Ce,b=ul(c,c===qe?b:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(b&3)===0||fs(c,b)||(s=!0,z2(c,b));c=c.next}while(s);_f=!1}}function J6(){E2()}function E2(){ac=Bf=!1;var n=0;ka!==0&&(l8()&&(n=ka),ka=0);for(var r=Bn(),s=null,c=ic;c!==null;){var h=c.next,b=A2(c,r);b===0?(c.next=null,s===null?ic=h:s.next=h,h===null&&(Sr=s)):(s=c,(n!==0||(b&3)!==0)&&(ac=!0)),c=h}Qs(n)}function A2(n,r){for(var s=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,b=n.pendingLanes&-62914561;0<b;){var w=31-Zt(b),T=1<<w,L=h[w];L===-1?((T&s)===0||(T&c)!==0)&&(h[w]=k3(T,r)):L<=r&&(n.expiredLanes|=T),b&=~T}if(r=qe,s=Ce,s=ul(n,n===r?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,s===0||n===r&&(Ne===2||Ne===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&Qu(c),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||fs(n,s)){if(r=s&-s,r===n.callbackPriority)return r;switch(c!==null&&Qu(c),Ju(s)){case 2:case 8:s=yg;break;case 32:s=ol;break;case 268435456:s=vg;break;default:s=ol}return c=M2.bind(null,n),s=Xu(s,c),n.callbackPriority=r,n.callbackNode=s,r}return c!==null&&c!==null&&Qu(c),n.callbackPriority=2,n.callbackNode=null,2}function M2(n,r){if(kt!==0&&kt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(nc()&&n.callbackNode!==s)return null;var c=Ce;return c=ul(n,n===qe?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(d2(n,c,r),A2(n,Bn()),n.callbackNode!=null&&n.callbackNode===s?M2.bind(null,n):null)}function z2(n,r){if(nc())return null;d2(n,r,!0)}function e8(){u8(function(){(Pe&6)!==0?Xu(xg,J6):E2()})}function $f(){return ka===0&&(ka=wg()),ka}function R2(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:ml(""+n)}function L2(n,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,n.id&&s.setAttribute("form",n.id),r.parentNode.insertBefore(s,r),n=new FormData(n),s.parentNode.removeChild(s),n}function t8(n,r,s,c,h){if(r==="submit"&&s&&s.stateNode===h){var b=R2((h[_t]||null).action),w=c.submitter;w&&(r=(r=w[_t]||null)?R2(r.formAction):w.getAttribute("formAction"),r!==null&&(b=r,w=null));var T=new yl("action","action",null,c,h);n.push({event:T,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(ka!==0){var L=w?L2(h,w):new FormData(h);sf(s,{pending:!0,data:L,method:h.method,action:b},null,L)}}else typeof b=="function"&&(T.preventDefault(),L=w?L2(h,w):new FormData(h),sf(s,{pending:!0,data:L,method:h.method,action:b},b,L))},currentTarget:h}]})}}for(var Hf=0;Hf<jd.length;Hf++){var Gf=jd[Hf],n8=Gf.toLowerCase(),i8=Gf[0].toUpperCase()+Gf.slice(1);En(n8,"on"+i8)}En(d0,"onAnimationEnd"),En(f0,"onAnimationIteration"),En(p0,"onAnimationStart"),En("dblclick","onDoubleClick"),En("focusin","onFocus"),En("focusout","onBlur"),En(v6,"onTransitionRun"),En(w6,"onTransitionStart"),En(S6,"onTransitionCancel"),En(h0,"onTransitionEnd"),qa("onMouseEnter",["mouseout","mouseover"]),qa("onMouseLeave",["mouseout","mouseover"]),qa("onPointerEnter",["pointerout","pointerover"]),qa("onPointerLeave",["pointerout","pointerover"]),ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a8=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ws));function O2(n,r){r=(r&4)!==0;for(var s=0;s<n.length;s++){var c=n[s],h=c.event;c=c.listeners;e:{var b=void 0;if(r)for(var w=c.length-1;0<=w;w--){var T=c[w],L=T.instance,F=T.currentTarget;if(T=T.listener,L!==b&&h.isPropagationStopped())break e;b=T,h.currentTarget=F;try{b(h)}catch(W){Fl(W)}h.currentTarget=null,b=L}else for(w=0;w<c.length;w++){if(T=c[w],L=T.instance,F=T.currentTarget,T=T.listener,L!==b&&h.isPropagationStopped())break e;b=T,h.currentTarget=F;try{b(h)}catch(W){Fl(W)}h.currentTarget=null,b=L}}}}function ke(n,r){var s=r[ed];s===void 0&&(s=r[ed]=new Set);var c=n+"__bubble";s.has(c)||(D2(r,n,2,!1),s.add(c))}function Uf(n,r,s){var c=0;r&&(c|=4),D2(s,n,c,r)}var rc="_reactListening"+Math.random().toString(36).slice(2);function If(n){if(!n[rc]){n[rc]=!0,Eg.forEach(function(s){s!=="selectionchange"&&(a8.has(s)||Uf(s,!1,n),Uf(s,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[rc]||(r[rc]=!0,Uf("selectionchange",!1,r))}}function D2(n,r,s,c){switch(ab(r)){case 2:var h=R8;break;case 8:h=L8;break;default:h=ap}s=h.bind(null,r,s,n),h=void 0,!dd||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(r,s,{capture:!0,passive:h}):n.addEventListener(r,s,!0):h!==void 0?n.addEventListener(r,s,{passive:h}):n.addEventListener(r,s,!1)}function Ff(n,r,s,c,h){var b=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var T=c.stateNode.containerInfo;if(T===h)break;if(w===4)for(w=c.return;w!==null;){var L=w.tag;if((L===3||L===4)&&w.stateNode.containerInfo===h)return;w=w.return}for(;T!==null;){if(w=Ua(T),w===null)return;if(L=w.tag,L===5||L===6||L===26||L===27){c=b=w;continue e}T=T.parentNode}}c=c.return}Hg(function(){var F=b,W=cd(s),ee=[];e:{var q=m0.get(n);if(q!==void 0){var K=yl,me=n;switch(n){case"keypress":if(bl(s)===0)break e;case"keydown":case"keyup":K=Z3;break;case"focusin":me="focus",K=md;break;case"focusout":me="blur",K=md;break;case"beforeblur":case"afterblur":K=md;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=Ig;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=$3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=t6;break;case d0:case f0:case p0:K=U3;break;case h0:K=i6;break;case"scroll":case"scrollend":K=B3;break;case"wheel":K=r6;break;case"copy":case"cut":case"paste":K=F3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=qg;break;case"toggle":case"beforetoggle":K=o6}var fe=(r&4)!==0,$e=!fe&&(n==="scroll"||n==="scrollend"),$=fe?q!==null?q+"Capture":null:q;fe=[];for(var V=F,I;V!==null;){var J=V;if(I=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||I===null||$===null||(J=gs(V,$),J!=null&&fe.push(Zs(V,J,I))),$e)break;V=V.return}0<fe.length&&(q=new K(q,me,null,s,W),ee.push({event:q,listeners:fe}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",K=n==="mouseout"||n==="pointerout",q&&s!==ld&&(me=s.relatedTarget||s.fromElement)&&(Ua(me)||me[Ga]))break e;if((K||q)&&(q=W.window===W?W:(q=W.ownerDocument)?q.defaultView||q.parentWindow:window,K?(me=s.relatedTarget||s.toElement,K=F,me=me?Ua(me):null,me!==null&&($e=l(me),fe=me.tag,me!==$e||fe!==5&&fe!==27&&fe!==6)&&(me=null)):(K=null,me=F),K!==me)){if(fe=Ig,J="onMouseLeave",$="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(fe=qg,J="onPointerLeave",$="onPointerEnter",V="pointer"),$e=K==null?q:ms(K),I=me==null?q:ms(me),q=new fe(J,V+"leave",K,s,W),q.target=$e,q.relatedTarget=I,J=null,Ua(W)===F&&(fe=new fe($,V+"enter",me,s,W),fe.target=I,fe.relatedTarget=$e,J=fe),$e=J,K&&me)t:{for(fe=K,$=me,V=0,I=fe;I;I=Tr(I))V++;for(I=0,J=$;J;J=Tr(J))I++;for(;0<V-I;)fe=Tr(fe),V--;for(;0<I-V;)$=Tr($),I--;for(;V--;){if(fe===$||$!==null&&fe===$.alternate)break t;fe=Tr(fe),$=Tr($)}fe=null}else fe=null;K!==null&&P2(ee,q,K,fe,!1),me!==null&&$e!==null&&P2(ee,$e,me,fe,!0)}}e:{if(q=F?ms(F):window,K=q.nodeName&&q.nodeName.toLowerCase(),K==="select"||K==="input"&&q.type==="file")var re=e0;else if(Zg(q))if(t0)re=b6;else{re=m6;var Te=h6}else K=q.nodeName,!K||K.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?F&&od(F.elementType)&&(re=e0):re=g6;if(re&&(re=re(n,F))){Jg(ee,re,s,W);break e}Te&&Te(n,q,F),n==="focusout"&&F&&q.type==="number"&&F.memoizedProps.value!=null&&sd(q,"number",q.value)}switch(Te=F?ms(F):window,n){case"focusin":(Zg(Te)||Te.contentEditable==="true")&&(Ja=Te,wd=F,js=null);break;case"focusout":js=wd=Ja=null;break;case"mousedown":Sd=!0;break;case"contextmenu":case"mouseup":case"dragend":Sd=!1,c0(ee,s,W);break;case"selectionchange":if(y6)break;case"keydown":case"keyup":c0(ee,s,W)}var oe;if(bd)e:{switch(n){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else Za?Qg(n,s)&&(pe="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(pe="onCompositionStart");pe&&(Kg&&s.locale!=="ko"&&(Za||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&Za&&(oe=Gg()):(Mi=W,fd="value"in Mi?Mi.value:Mi.textContent,Za=!0)),Te=sc(F,pe),0<Te.length&&(pe=new Fg(pe,n,null,s,W),ee.push({event:pe,listeners:Te}),oe?pe.data=oe:(oe=Wg(s),oe!==null&&(pe.data=oe)))),(oe=c6?u6(n,s):d6(n,s))&&(pe=sc(F,"onBeforeInput"),0<pe.length&&(Te=new Fg("onBeforeInput","beforeinput",null,s,W),ee.push({event:Te,listeners:pe}),Te.data=oe)),t8(ee,n,F,s,W)}O2(ee,r)})}function Zs(n,r,s){return{instance:n,listener:r,currentTarget:s}}function sc(n,r){for(var s=r+"Capture",c=[];n!==null;){var h=n,b=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||b===null||(h=gs(n,s),h!=null&&c.unshift(Zs(n,h,b)),h=gs(n,r),h!=null&&c.push(Zs(n,h,b))),n.tag===3)return c;n=n.return}return[]}function Tr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function P2(n,r,s,c,h){for(var b=r._reactName,w=[];s!==null&&s!==c;){var T=s,L=T.alternate,F=T.stateNode;if(T=T.tag,L!==null&&L===c)break;T!==5&&T!==26&&T!==27||F===null||(L=F,h?(F=gs(s,b),F!=null&&w.unshift(Zs(s,F,L))):h||(F=gs(s,b),F!=null&&w.push(Zs(s,F,L)))),s=s.return}w.length!==0&&n.push({event:r,listeners:w})}var r8=/\r\n?/g,s8=/\u0000|\uFFFD/g;function N2(n){return(typeof n=="string"?n:""+n).replace(r8,`
`).replace(s8,"")}function V2(n,r){return r=N2(r),N2(n)===r}function oc(){}function _e(n,r,s,c,h,b){switch(s){case"children":typeof c=="string"?r==="body"||r==="textarea"&&c===""||Xa(n,c):(typeof c=="number"||typeof c=="bigint")&&r!=="body"&&Xa(n,""+c);break;case"className":fl(n,"class",c);break;case"tabIndex":fl(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":fl(n,s,c);break;case"style":_g(n,c,b);break;case"data":if(r!=="object"){fl(n,"data",c);break}case"src":case"href":if(c===""&&(r!=="a"||s!=="href")){n.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=ml(""+c),n.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof b=="function"&&(s==="formAction"?(r!=="input"&&_e(n,r,"name",h.name,h,null),_e(n,r,"formEncType",h.formEncType,h,null),_e(n,r,"formMethod",h.formMethod,h,null),_e(n,r,"formTarget",h.formTarget,h,null)):(_e(n,r,"encType",h.encType,h,null),_e(n,r,"method",h.method,h,null),_e(n,r,"target",h.target,h,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=ml(""+c),n.setAttribute(s,c);break;case"onClick":c!=null&&(n.onclick=oc);break;case"onScroll":c!=null&&ke("scroll",n);break;case"onScrollEnd":c!=null&&ke("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}s=ml(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""+c):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":c===!0?n.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,c):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(s,c):n.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(s):n.setAttribute(s,c);break;case"popover":ke("beforetoggle",n),ke("toggle",n),dl(n,"popover",c);break;case"xlinkActuate":si(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":si(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":si(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":si(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":si(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":si(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":si(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":si(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":si(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":dl(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=N3.get(s)||s,dl(n,s,c))}}function qf(n,r,s,c,h,b){switch(s){case"style":_g(n,c,b);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"children":typeof c=="string"?Xa(n,c):(typeof c=="number"||typeof c=="bigint")&&Xa(n,""+c);break;case"onScroll":c!=null&&ke("scroll",n);break;case"onScrollEnd":c!=null&&ke("scrollend",n);break;case"onClick":c!=null&&(n.onclick=oc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ag.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),r=s.slice(2,h?s.length-7:void 0),b=n[_t]||null,b=b!=null?b[s]:null,typeof b=="function"&&n.removeEventListener(r,b,h),typeof c=="function")){typeof b!="function"&&b!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(r,c,h);break e}s in n?n[s]=c:c===!0?n.setAttribute(s,""):dl(n,s,c)}}}function Ct(n,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ke("error",n),ke("load",n);var c=!1,h=!1,b;for(b in s)if(s.hasOwnProperty(b)){var w=s[b];if(w!=null)switch(b){case"src":c=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:_e(n,r,b,w,s,null)}}h&&_e(n,r,"srcSet",s.srcSet,s,null),c&&_e(n,r,"src",s.src,s,null);return;case"input":ke("invalid",n);var T=b=w=h=null,L=null,F=null;for(c in s)if(s.hasOwnProperty(c)){var W=s[c];if(W!=null)switch(c){case"name":h=W;break;case"type":w=W;break;case"checked":L=W;break;case"defaultChecked":F=W;break;case"value":b=W;break;case"defaultValue":T=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(a(137,r));break;default:_e(n,r,c,W,s,null)}}Pg(n,b,T,L,F,w,h,!1),pl(n);return;case"select":ke("invalid",n),c=w=b=null;for(h in s)if(s.hasOwnProperty(h)&&(T=s[h],T!=null))switch(h){case"value":b=T;break;case"defaultValue":w=T;break;case"multiple":c=T;default:_e(n,r,h,T,s,null)}r=b,s=w,n.multiple=!!c,r!=null?Ya(n,!!c,r,!1):s!=null&&Ya(n,!!c,s,!0);return;case"textarea":ke("invalid",n),b=h=c=null;for(w in s)if(s.hasOwnProperty(w)&&(T=s[w],T!=null))switch(w){case"value":c=T;break;case"defaultValue":h=T;break;case"children":b=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:_e(n,r,w,T,s,null)}Vg(n,c,h,b),pl(n);return;case"option":for(L in s)if(s.hasOwnProperty(L)&&(c=s[L],c!=null))switch(L){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:_e(n,r,L,c,s,null)}return;case"dialog":ke("beforetoggle",n),ke("toggle",n),ke("cancel",n),ke("close",n);break;case"iframe":case"object":ke("load",n);break;case"video":case"audio":for(c=0;c<Ws.length;c++)ke(Ws[c],n);break;case"image":ke("error",n),ke("load",n);break;case"details":ke("toggle",n);break;case"embed":case"source":case"link":ke("error",n),ke("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(F in s)if(s.hasOwnProperty(F)&&(c=s[F],c!=null))switch(F){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:_e(n,r,F,c,s,null)}return;default:if(od(r)){for(W in s)s.hasOwnProperty(W)&&(c=s[W],c!==void 0&&qf(n,r,W,c,s,void 0));return}}for(T in s)s.hasOwnProperty(T)&&(c=s[T],c!=null&&_e(n,r,T,c,s,null))}function o8(n,r,s,c){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,b=null,w=null,T=null,L=null,F=null,W=null;for(K in s){var ee=s[K];if(s.hasOwnProperty(K)&&ee!=null)switch(K){case"checked":break;case"value":break;case"defaultValue":L=ee;default:c.hasOwnProperty(K)||_e(n,r,K,null,c,ee)}}for(var q in c){var K=c[q];if(ee=s[q],c.hasOwnProperty(q)&&(K!=null||ee!=null))switch(q){case"type":b=K;break;case"name":h=K;break;case"checked":F=K;break;case"defaultChecked":W=K;break;case"value":w=K;break;case"defaultValue":T=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(a(137,r));break;default:K!==ee&&_e(n,r,q,K,c,ee)}}rd(n,w,T,L,F,W,b,h);return;case"select":K=w=T=q=null;for(b in s)if(L=s[b],s.hasOwnProperty(b)&&L!=null)switch(b){case"value":break;case"multiple":K=L;default:c.hasOwnProperty(b)||_e(n,r,b,null,c,L)}for(h in c)if(b=c[h],L=s[h],c.hasOwnProperty(h)&&(b!=null||L!=null))switch(h){case"value":q=b;break;case"defaultValue":T=b;break;case"multiple":w=b;default:b!==L&&_e(n,r,h,b,c,L)}r=T,s=w,c=K,q!=null?Ya(n,!!s,q,!1):!!c!=!!s&&(r!=null?Ya(n,!!s,r,!0):Ya(n,!!s,s?[]:"",!1));return;case"textarea":K=q=null;for(T in s)if(h=s[T],s.hasOwnProperty(T)&&h!=null&&!c.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:_e(n,r,T,null,c,h)}for(w in c)if(h=c[w],b=s[w],c.hasOwnProperty(w)&&(h!=null||b!=null))switch(w){case"value":q=h;break;case"defaultValue":K=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==b&&_e(n,r,w,h,c,b)}Ng(n,q,K);return;case"option":for(var me in s)if(q=s[me],s.hasOwnProperty(me)&&q!=null&&!c.hasOwnProperty(me))switch(me){case"selected":n.selected=!1;break;default:_e(n,r,me,null,c,q)}for(L in c)if(q=c[L],K=s[L],c.hasOwnProperty(L)&&q!==K&&(q!=null||K!=null))switch(L){case"selected":n.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:_e(n,r,L,q,c,K)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in s)q=s[fe],s.hasOwnProperty(fe)&&q!=null&&!c.hasOwnProperty(fe)&&_e(n,r,fe,null,c,q);for(F in c)if(q=c[F],K=s[F],c.hasOwnProperty(F)&&q!==K&&(q!=null||K!=null))switch(F){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(a(137,r));break;default:_e(n,r,F,q,c,K)}return;default:if(od(r)){for(var $e in s)q=s[$e],s.hasOwnProperty($e)&&q!==void 0&&!c.hasOwnProperty($e)&&qf(n,r,$e,void 0,c,q);for(W in c)q=c[W],K=s[W],!c.hasOwnProperty(W)||q===K||q===void 0&&K===void 0||qf(n,r,W,q,c,K);return}}for(var $ in s)q=s[$],s.hasOwnProperty($)&&q!=null&&!c.hasOwnProperty($)&&_e(n,r,$,null,c,q);for(ee in c)q=c[ee],K=s[ee],!c.hasOwnProperty(ee)||q===K||q==null&&K==null||_e(n,r,ee,q,c,K)}var Kf=null,Yf=null;function lc(n){return n.nodeType===9?n:n.ownerDocument}function B2(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _2(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function Xf(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Qf=null;function l8(){var n=window.event;return n&&n.type==="popstate"?n===Qf?!1:(Qf=n,!0):(Qf=null,!1)}var $2=typeof setTimeout=="function"?setTimeout:void 0,c8=typeof clearTimeout=="function"?clearTimeout:void 0,H2=typeof Promise=="function"?Promise:void 0,u8=typeof queueMicrotask=="function"?queueMicrotask:typeof H2<"u"?function(n){return H2.resolve(null).then(n).catch(d8)}:$2;function d8(n){setTimeout(function(){throw n})}function Fi(n){return n==="head"}function G2(n,r){var s=r,c=0,h=0;do{var b=s.nextSibling;if(n.removeChild(s),b&&b.nodeType===8)if(s=b.data,s==="/$"){if(0<c&&8>c){s=c;var w=n.ownerDocument;if(s&1&&Js(w.documentElement),s&2&&Js(w.body),s&4)for(s=w.head,Js(s),w=s.firstChild;w;){var T=w.nextSibling,L=w.nodeName;w[hs]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&w.rel.toLowerCase()==="stylesheet"||s.removeChild(w),w=T}}if(h===0){n.removeChild(b),oo(r);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:c=s.charCodeAt(0)-48;else c=0;s=b}while(s);oo(r)}function Wf(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Wf(s),td(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function f8(n,r,s,c){for(;n.nodeType===1;){var h=s;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[hs])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(b=n.getAttribute("rel"),b==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(b!==h.rel||n.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(b=n.getAttribute("src"),(b!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&b&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var b=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===b)return n}else return n;if(n=Mn(n.nextSibling),n===null)break}return null}function p8(n,r,s){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=Mn(n.nextSibling),n===null))return null;return n}function Zf(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function h8(n,r){var s=n.ownerDocument;if(n.data!=="$?"||s.readyState==="complete")r();else{var c=function(){r(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function Mn(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}var Jf=null;function U2(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return n;r--}else s==="/$"&&r++}n=n.previousSibling}return null}function I2(n,r,s){switch(r=lc(s),n){case"html":if(n=r.documentElement,!n)throw Error(a(452));return n;case"head":if(n=r.head,!n)throw Error(a(453));return n;case"body":if(n=r.body,!n)throw Error(a(454));return n;default:throw Error(a(451))}}function Js(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);td(n)}var Sn=new Map,F2=new Set;function cc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var vi=D.d;D.d={f:m8,r:g8,D:b8,C:x8,L:y8,m:v8,X:S8,S:w8,M:T8};function m8(){var n=vi.f(),r=ec();return n||r}function g8(n){var r=Ia(n);r!==null&&r.tag===5&&r.type==="form"?d1(r):vi.r(n)}var jr=typeof document>"u"?null:document;function q2(n,r,s){var c=jr;if(c&&typeof r=="string"&&r){var h=mn(r);h='link[rel="'+n+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),F2.has(h)||(F2.add(h),n={rel:n,crossOrigin:s,href:r},c.querySelector(h)===null&&(r=c.createElement("link"),Ct(r,"link",n),gt(r),c.head.appendChild(r)))}}function b8(n){vi.D(n),q2("dns-prefetch",n,null)}function x8(n,r){vi.C(n,r),q2("preconnect",n,r)}function y8(n,r,s){vi.L(n,r,s);var c=jr;if(c&&n&&r){var h='link[rel="preload"][as="'+mn(r)+'"]';r==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+mn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+mn(s.imageSizes)+'"]')):h+='[href="'+mn(n)+'"]';var b=h;switch(r){case"style":b=kr(n);break;case"script":b=Cr(n)}Sn.has(b)||(n=g({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:n,as:r},s),Sn.set(b,n),c.querySelector(h)!==null||r==="style"&&c.querySelector(eo(b))||r==="script"&&c.querySelector(to(b))||(r=c.createElement("link"),Ct(r,"link",n),gt(r),c.head.appendChild(r)))}}function v8(n,r){vi.m(n,r);var s=jr;if(s&&n){var c=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+mn(c)+'"][href="'+mn(n)+'"]',b=h;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":b=Cr(n)}if(!Sn.has(b)&&(n=g({rel:"modulepreload",href:n},r),Sn.set(b,n),s.querySelector(h)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(to(b)))return}c=s.createElement("link"),Ct(c,"link",n),gt(c),s.head.appendChild(c)}}}function w8(n,r,s){vi.S(n,r,s);var c=jr;if(c&&n){var h=Fa(c).hoistableStyles,b=kr(n);r=r||"default";var w=h.get(b);if(!w){var T={loading:0,preload:null};if(w=c.querySelector(eo(b)))T.loading=5;else{n=g({rel:"stylesheet",href:n,"data-precedence":r},s),(s=Sn.get(b))&&ep(n,s);var L=w=c.createElement("link");gt(L),Ct(L,"link",n),L._p=new Promise(function(F,W){L.onload=F,L.onerror=W}),L.addEventListener("load",function(){T.loading|=1}),L.addEventListener("error",function(){T.loading|=2}),T.loading|=4,uc(w,r,c)}w={type:"stylesheet",instance:w,count:1,state:T},h.set(b,w)}}}function S8(n,r){vi.X(n,r);var s=jr;if(s&&n){var c=Fa(s).hoistableScripts,h=Cr(n),b=c.get(h);b||(b=s.querySelector(to(h)),b||(n=g({src:n,async:!0},r),(r=Sn.get(h))&&tp(n,r),b=s.createElement("script"),gt(b),Ct(b,"link",n),s.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},c.set(h,b))}}function T8(n,r){vi.M(n,r);var s=jr;if(s&&n){var c=Fa(s).hoistableScripts,h=Cr(n),b=c.get(h);b||(b=s.querySelector(to(h)),b||(n=g({src:n,async:!0,type:"module"},r),(r=Sn.get(h))&&tp(n,r),b=s.createElement("script"),gt(b),Ct(b,"link",n),s.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},c.set(h,b))}}function K2(n,r,s,c){var h=(h=de.current)?cc(h):null;if(!h)throw Error(a(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=kr(s.href),s=Fa(h).hoistableStyles,c=s.get(r),c||(c={type:"style",instance:null,count:0,state:null},s.set(r,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=kr(s.href);var b=Fa(h).hoistableStyles,w=b.get(n);if(w||(h=h.ownerDocument||h,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},b.set(n,w),(b=h.querySelector(eo(n)))&&!b._p&&(w.instance=b,w.state.loading=5),Sn.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Sn.set(n,s),b||j8(h,n,s,w.state))),r&&c===null)throw Error(a(528,""));return w}if(r&&c!==null)throw Error(a(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Cr(s),s=Fa(h).hoistableScripts,c=s.get(r),c||(c={type:"script",instance:null,count:0,state:null},s.set(r,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,n))}}function kr(n){return'href="'+mn(n)+'"'}function eo(n){return'link[rel="stylesheet"]['+n+"]"}function Y2(n){return g({},n,{"data-precedence":n.precedence,precedence:null})}function j8(n,r,s,c){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?c.loading=1:(r=n.createElement("link"),c.preload=r,r.addEventListener("load",function(){return c.loading|=1}),r.addEventListener("error",function(){return c.loading|=2}),Ct(r,"link",s),gt(r),n.head.appendChild(r))}function Cr(n){return'[src="'+mn(n)+'"]'}function to(n){return"script[async]"+n}function X2(n,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var c=n.querySelector('style[data-href~="'+mn(s.href)+'"]');if(c)return r.instance=c,gt(c),c;var h=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),gt(c),Ct(c,"style",h),uc(c,s.precedence,n),r.instance=c;case"stylesheet":h=kr(s.href);var b=n.querySelector(eo(h));if(b)return r.state.loading|=4,r.instance=b,gt(b),b;c=Y2(s),(h=Sn.get(h))&&ep(c,h),b=(n.ownerDocument||n).createElement("link"),gt(b);var w=b;return w._p=new Promise(function(T,L){w.onload=T,w.onerror=L}),Ct(b,"link",c),r.state.loading|=4,uc(b,s.precedence,n),r.instance=b;case"script":return b=Cr(s.src),(h=n.querySelector(to(b)))?(r.instance=h,gt(h),h):(c=s,(h=Sn.get(b))&&(c=g({},s),tp(c,h)),n=n.ownerDocument||n,h=n.createElement("script"),gt(h),Ct(h,"link",c),n.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(c=r.instance,r.state.loading|=4,uc(c,s.precedence,n));return r.instance}function uc(n,r,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=c.length?c[c.length-1]:null,b=h,w=0;w<c.length;w++){var T=c[w];if(T.dataset.precedence===r)b=T;else if(b!==h)break}b?b.parentNode.insertBefore(n,b.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(n,r.firstChild))}function ep(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function tp(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var dc=null;function Q2(n,r,s){if(dc===null){var c=new Map,h=dc=new Map;h.set(s,c)}else h=dc,c=h.get(s),c||(c=new Map,h.set(s,c));if(c.has(n))return c;for(c.set(n,null),s=s.getElementsByTagName(n),h=0;h<s.length;h++){var b=s[h];if(!(b[hs]||b[zt]||n==="link"&&b.getAttribute("rel")==="stylesheet")&&b.namespaceURI!=="http://www.w3.org/2000/svg"){var w=b.getAttribute(r)||"";w=n+w;var T=c.get(w);T?T.push(b):c.set(w,[b])}}return c}function W2(n,r,s){n=n.ownerDocument||n,n.head.insertBefore(s,r==="title"?n.querySelector("head > title"):null)}function k8(n,r,s){if(s===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function Z2(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var no=null;function C8(){}function E8(n,r,s){if(no===null)throw Error(a(475));var c=no;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=kr(s.href),b=n.querySelector(eo(h));if(b){n=b._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=fc.bind(c),n.then(c,c)),r.state.loading|=4,r.instance=b,gt(b);return}b=n.ownerDocument||n,s=Y2(s),(h=Sn.get(h))&&ep(s,h),b=b.createElement("link"),gt(b);var w=b;w._p=new Promise(function(T,L){w.onload=T,w.onerror=L}),Ct(b,"link",s),r.instance=b}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(c.count++,r=fc.bind(c),n.addEventListener("load",r),n.addEventListener("error",r))}}function A8(){if(no===null)throw Error(a(475));var n=no;return n.stylesheets&&n.count===0&&np(n,n.stylesheets),0<n.count?function(r){var s=setTimeout(function(){if(n.stylesheets&&np(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(s)}}:null}function fc(){if(this.count--,this.count===0){if(this.stylesheets)np(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var pc=null;function np(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,pc=new Map,r.forEach(M8,n),pc=null,fc.call(n))}function M8(n,r){if(!(r.state.loading&4)){var s=pc.get(n);if(s)var c=s.get(null);else{s=new Map,pc.set(n,s);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),b=0;b<h.length;b++){var w=h[b];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(s.set(w.dataset.precedence,w),c=w)}c&&s.set(null,c)}h=r.instance,w=h.getAttribute("data-precedence"),b=s.get(w)||c,b===c&&s.set(null,h),s.set(w,h),this.count++,c=fc.bind(this),h.addEventListener("load",c),h.addEventListener("error",c),b?b.parentNode.insertBefore(h,b.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),r.state.loading|=4}}var io={$$typeof:E,Provider:null,Consumer:null,_currentValue:_,_currentValue2:_,_threadCount:0};function z8(n,r,s,c,h,b,w,T){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wu(0),this.hiddenUpdates=Wu(null),this.identifierPrefix=c,this.onUncaughtError=h,this.onCaughtError=b,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function J2(n,r,s,c,h,b,w,T,L,F,W,ee){return n=new z8(n,r,s,w,T,L,F,ee),r=1,b===!0&&(r|=24),b=en(3,null,null,r),n.current=b,b.stateNode=n,r=Nd(),r.refCount++,n.pooledCache=r,r.refCount++,b.memoizedState={element:c,isDehydrated:s,cache:r},$d(b),n}function eb(n){return n?(n=ir,n):ir}function tb(n,r,s,c,h,b){h=eb(h),c.context===null?c.context=h:c.pendingContext=h,c=Li(r),c.payload={element:s},b=b===void 0?null:b,b!==null&&(c.callback=b),s=Oi(n,c,r),s!==null&&(sn(s,n,r),Os(s,n,r))}function nb(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<r?s:r}}function ip(n,r){nb(n,r),(n=n.alternate)&&nb(n,r)}function ib(n){if(n.tag===13){var r=nr(n,67108864);r!==null&&sn(r,n,67108864),ip(n,67108864)}}var hc=!0;function R8(n,r,s,c){var h=H.T;H.T=null;var b=D.p;try{D.p=2,ap(n,r,s,c)}finally{D.p=b,H.T=h}}function L8(n,r,s,c){var h=H.T;H.T=null;var b=D.p;try{D.p=8,ap(n,r,s,c)}finally{D.p=b,H.T=h}}function ap(n,r,s,c){if(hc){var h=rp(c);if(h===null)Ff(n,r,c,mc,s),rb(n,c);else if(D8(h,n,r,s,c))c.stopPropagation();else if(rb(n,c),r&4&&-1<O8.indexOf(n)){for(;h!==null;){var b=Ia(h);if(b!==null)switch(b.tag){case 3:if(b=b.stateNode,b.current.memoizedState.isDehydrated){var w=la(b.pendingLanes);if(w!==0){var T=b;for(T.pendingLanes|=2,T.entangledLanes|=2;w;){var L=1<<31-Zt(w);T.entanglements[1]|=L,w&=~L}Un(b),(Pe&6)===0&&(Zl=Bn()+500,Qs(0))}}break;case 13:T=nr(b,2),T!==null&&sn(T,b,2),ec(),ip(b,2)}if(b=rp(c),b===null&&Ff(n,r,c,mc,s),b===h)break;h=b}h!==null&&c.stopPropagation()}else Ff(n,r,c,null,s)}}function rp(n){return n=cd(n),sp(n)}var mc=null;function sp(n){if(mc=null,n=Ua(n),n!==null){var r=l(n);if(r===null)n=null;else{var s=r.tag;if(s===13){if(n=u(r),n!==null)return n;n=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return mc=n,null}function ab(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(x3()){case xg:return 2;case yg:return 8;case ol:case y3:return 32;case vg:return 268435456;default:return 32}default:return 32}}var op=!1,qi=null,Ki=null,Yi=null,ao=new Map,ro=new Map,Xi=[],O8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rb(n,r){switch(n){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":ao.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(r.pointerId)}}function so(n,r,s,c,h,b){return n===null||n.nativeEvent!==b?(n={blockedOn:r,domEventName:s,eventSystemFlags:c,nativeEvent:b,targetContainers:[h]},r!==null&&(r=Ia(r),r!==null&&ib(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function D8(n,r,s,c,h){switch(r){case"focusin":return qi=so(qi,n,r,s,c,h),!0;case"dragenter":return Ki=so(Ki,n,r,s,c,h),!0;case"mouseover":return Yi=so(Yi,n,r,s,c,h),!0;case"pointerover":var b=h.pointerId;return ao.set(b,so(ao.get(b)||null,n,r,s,c,h)),!0;case"gotpointercapture":return b=h.pointerId,ro.set(b,so(ro.get(b)||null,n,r,s,c,h)),!0}return!1}function sb(n){var r=Ua(n.target);if(r!==null){var s=l(r);if(s!==null){if(r=s.tag,r===13){if(r=u(s),r!==null){n.blockedOn=r,E3(n.priority,function(){if(s.tag===13){var c=rn();c=Zu(c);var h=nr(s,c);h!==null&&sn(h,s,c),ip(s,c)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function gc(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var s=rp(n.nativeEvent);if(s===null){s=n.nativeEvent;var c=new s.constructor(s.type,s);ld=c,s.target.dispatchEvent(c),ld=null}else return r=Ia(s),r!==null&&ib(r),n.blockedOn=s,!1;r.shift()}return!0}function ob(n,r,s){gc(n)&&s.delete(r)}function P8(){op=!1,qi!==null&&gc(qi)&&(qi=null),Ki!==null&&gc(Ki)&&(Ki=null),Yi!==null&&gc(Yi)&&(Yi=null),ao.forEach(ob),ro.forEach(ob)}function bc(n,r){n.blockedOn===r&&(n.blockedOn=null,op||(op=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,P8)))}var xc=null;function lb(n){xc!==n&&(xc=n,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){xc===n&&(xc=null);for(var r=0;r<n.length;r+=3){var s=n[r],c=n[r+1],h=n[r+2];if(typeof c!="function"){if(sp(c||s)===null)continue;break}var b=Ia(s);b!==null&&(n.splice(r,3),r-=3,sf(b,{pending:!0,data:h,method:s.method,action:c},c,h))}}))}function oo(n){function r(L){return bc(L,n)}qi!==null&&bc(qi,n),Ki!==null&&bc(Ki,n),Yi!==null&&bc(Yi,n),ao.forEach(r),ro.forEach(r);for(var s=0;s<Xi.length;s++){var c=Xi[s];c.blockedOn===n&&(c.blockedOn=null)}for(;0<Xi.length&&(s=Xi[0],s.blockedOn===null);)sb(s),s.blockedOn===null&&Xi.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var h=s[c],b=s[c+1],w=h[_t]||null;if(typeof b=="function")w||lb(s);else if(w){var T=null;if(b&&b.hasAttribute("formAction")){if(h=b,w=b[_t]||null)T=w.formAction;else if(sp(h)!==null)continue}else T=w.action;typeof T=="function"?s[c+1]=T:(s.splice(c,3),c-=3),lb(s)}}}function lp(n){this._internalRoot=n}yc.prototype.render=lp.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(a(409));var s=r.current,c=rn();tb(s,c,n,r,null,null)},yc.prototype.unmount=lp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;tb(n.current,2,null,n,null,null),ec(),r[Ga]=null}};function yc(n){this._internalRoot=n}yc.prototype.unstable_scheduleHydration=function(n){if(n){var r=kg();n={blockedOn:null,target:n,priority:r};for(var s=0;s<Xi.length&&r!==0&&r<Xi[s].priority;s++);Xi.splice(s,0,n),s===0&&sb(n)}};var cb=t.version;if(cb!=="19.1.1")throw Error(a(527,cb,"19.1.1"));D.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(a(188)):(n=Object.keys(n).join(","),Error(a(268,n)));return n=p(r),n=n!==null?m(n):null,n=n===null?null:n.stateNode,n};var N8={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{ds=vc.inject(N8),Wt=vc}catch{}}return co.createRoot=function(n,r){if(!o(n))throw Error(a(299));var s=!1,c="",h=k1,b=C1,w=E1,T=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(b=r.onCaughtError),r.onRecoverableError!==void 0&&(w=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(T=r.unstable_transitionCallbacks)),r=J2(n,1,!1,null,null,s,c,h,b,w,T,null),n[Ga]=r.current,If(n),new lp(r)},co.hydrateRoot=function(n,r,s){if(!o(n))throw Error(a(299));var c=!1,h="",b=k1,w=C1,T=E1,L=null,F=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(b=s.onUncaughtError),s.onCaughtError!==void 0&&(w=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(L=s.unstable_transitionCallbacks),s.formState!==void 0&&(F=s.formState)),r=J2(n,1,!0,r,s??null,c,h,b,w,T,L,F),r.context=eb(null),s=r.current,c=rn(),c=Zu(c),h=Li(c),h.callback=null,Oi(s,h,c),s=c,r.current.lanes=s,ps(r,s),Un(r),n[Ga]=r.current,If(n),new yc(r)},co.version="19.1.1",co}var yb;function q8(){if(yb)return up.exports;yb=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),up.exports=F8(),up.exports}var K8=q8();const Y8=Cv(K8);var C=dm();const Ee=Cv(C),vb=B8({__proto__:null,default:Ee},[C]);/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var wb="popstate";function X8(e={}){function t(a,o){let{pathname:l,search:u,hash:f}=a.location;return hh("",{pathname:l,search:u,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function i(a,o){return typeof o=="string"?o:Vo(o)}return W8(t,i,null,e)}function We(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Dn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Q8(){return Math.random().toString(36).substring(2,10)}function Sb(e,t){return{usr:e.state,key:e.key,idx:t}}function hh(e,t,i=null,a){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?ns(t):t,state:i,key:t&&t.key||a||Q8()}}function Vo({pathname:e="/",search:t="",hash:i=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ns(e){let t={};if(e){let i=e.indexOf("#");i>=0&&(t.hash=e.substring(i),e=e.substring(0,i));let a=e.indexOf("?");a>=0&&(t.search=e.substring(a),e=e.substring(0,a)),e&&(t.pathname=e)}return t}function W8(e,t,i,a={}){let{window:o=document.defaultView,v5Compat:l=!1}=a,u=o.history,f="POP",p=null,m=g();m==null&&(m=0,u.replaceState({...u.state,idx:m},""));function g(){return(u.state||{idx:null}).idx}function x(){f="POP";let A=g(),k=A==null?null:A-m;m=A,p&&p({action:f,location:j.location,delta:k})}function y(A,k){f="PUSH";let R=hh(j.location,A,k);m=g()+1;let E=Sb(R,m),B=j.createHref(R);try{u.pushState(E,"",B)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;o.location.assign(B)}l&&p&&p({action:f,location:j.location,delta:1})}function v(A,k){f="REPLACE";let R=hh(j.location,A,k);m=g();let E=Sb(R,m),B=j.createHref(R);u.replaceState(E,"",B),l&&p&&p({action:f,location:j.location,delta:0})}function S(A){return Z8(A)}let j={get action(){return f},get location(){return e(o,u)},listen(A){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(wb,x),p=A,()=>{o.removeEventListener(wb,x),p=null}},createHref(A){return t(o,A)},createURL:S,encodeLocation(A){let k=S(A);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:y,replace:v,go(A){return u.go(A)}};return j}function Z8(e,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),We(i,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:Vo(e);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=i+a),new URL(a,i)}function Av(e,t,i="/"){return J8(e,t,i,!1)}function J8(e,t,i,a){let o=typeof t=="string"?ns(t):t,l=ki(o.pathname||"/",i);if(l==null)return null;let u=Mv(e);eS(u);let f=null;for(let p=0;f==null&&p<u.length;++p){let m=dS(l);f=cS(u[p],m,a)}return f}function Mv(e,t=[],i=[],a="",o=!1){let l=(u,f,p=o,m)=>{let g={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(a)&&p)return;We(g.relativePath.startsWith(a),`Absolute route path "${g.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(a.length)}let x=ji([a,g.relativePath]),y=i.concat(g);u.children&&u.children.length>0&&(We(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Mv(u.children,t,y,x,p)),!(u.path==null&&!u.index)&&t.push({path:x,score:oS(x,u.index),routesMeta:y})};return e.forEach((u,f)=>{var p;if(u.path===""||!((p=u.path)!=null&&p.includes("?")))l(u,f);else for(let m of zv(u.path))l(u,f,!0,m)}),t}function zv(e){let t=e.split("/");if(t.length===0)return[];let[i,...a]=t,o=i.endsWith("?"),l=i.replace(/\?$/,"");if(a.length===0)return o?[l,""]:[l];let u=zv(a.join("/")),f=[];return f.push(...u.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...u),f.map(p=>e.startsWith("/")&&p===""?"/":p)}function eS(e){e.sort((t,i)=>t.score!==i.score?i.score-t.score:lS(t.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var tS=/^:[\w-]+$/,nS=3,iS=2,aS=1,rS=10,sS=-2,Tb=e=>e==="*";function oS(e,t){let i=e.split("/"),a=i.length;return i.some(Tb)&&(a+=sS),t&&(a+=iS),i.filter(o=>!Tb(o)).reduce((o,l)=>o+(tS.test(l)?nS:l===""?aS:rS),a)}function lS(e,t){return e.length===t.length&&e.slice(0,-1).every((a,o)=>a===t[o])?e[e.length-1]-t[t.length-1]:0}function cS(e,t,i=!1){let{routesMeta:a}=e,o={},l="/",u=[];for(let f=0;f<a.length;++f){let p=a[f],m=f===a.length-1,g=l==="/"?t:t.slice(l.length)||"/",x=nu({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),y=p.route;if(!x&&m&&i&&!a[a.length-1].route.index&&(x=nu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!x)return null;Object.assign(o,x.params),u.push({params:o,pathname:ji([l,x.pathname]),pathnameBase:mS(ji([l,x.pathnameBase])),route:y}),x.pathnameBase!=="/"&&(l=ji([l,x.pathnameBase]))}return u}function nu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,a]=uS(e.path,e.caseSensitive,e.end),o=t.match(i);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:a.reduce((m,{paramName:g,isOptional:x},y)=>{if(g==="*"){let S=f[y]||"";u=l.slice(0,l.length-S.length).replace(/(.)\/+$/,"$1")}const v=f[y];return x&&!v?m[g]=void 0:m[g]=(v||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:u,pattern:e}}function uS(e,t=!1,i=!0){Dn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,p)=>(a.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(a.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function dS(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Dn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ki(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,a=e.charAt(i);return a&&a!=="/"?null:e.slice(i)||"/"}var fS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function pS(e,t="/"){let{pathname:i,search:a="",hash:o=""}=typeof e=="string"?ns(e):e,l;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?l=jb(i.substring(1),"/"):l=jb(i,t)):l=t,{pathname:l,search:gS(a),hash:bS(o)}}function jb(e,t){let i=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function mp(e,t,i,a){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function hS(e){return e.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function fm(e){let t=hS(e);return t.map((i,a)=>a===t.length-1?i.pathname:i.pathnameBase)}function pm(e,t,i,a=!1){let o;typeof e=="string"?o=ns(e):(o={...e},We(!o.pathname||!o.pathname.includes("?"),mp("?","pathname","search",o)),We(!o.pathname||!o.pathname.includes("#"),mp("#","pathname","hash",o)),We(!o.search||!o.search.includes("#"),mp("#","search","hash",o)));let l=e===""||o.pathname==="",u=l?"/":o.pathname,f;if(u==null)f=i;else{let x=t.length-1;if(!a&&u.startsWith("..")){let y=u.split("/");for(;y[0]==="..";)y.shift(),x-=1;o.pathname=y.join("/")}f=x>=0?t[x]:"/"}let p=pS(o,f),m=u&&u!=="/"&&u.endsWith("/"),g=(l||u===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var ji=e=>e.join("/").replace(/\/\/+/g,"/"),mS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),gS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,bS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,xS=class{constructor(e,t,i,a=!1){this.status=e,this.statusText=t||"",this.internal=a,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function yS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function vS(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Rv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Lv(e,t){let i=e;if(typeof i!="string"||!fS.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let a=i,o=!1;if(Rv)try{let l=new URL(window.location.href),u=i.startsWith("//")?new URL(l.protocol+i):new URL(i),f=ki(u.pathname,t);u.origin===l.origin&&f!=null?i=f+u.search+u.hash:o=!0}catch{Dn(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:o,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ov=["POST","PUT","PATCH","DELETE"];new Set(Ov);var wS=["GET",...Ov];new Set(wS);var is=C.createContext(null);is.displayName="DataRouter";var Mu=C.createContext(null);Mu.displayName="DataRouterState";var SS=C.createContext(!1),Dv=C.createContext({isTransitioning:!1});Dv.displayName="ViewTransition";var TS=C.createContext(new Map);TS.displayName="Fetchers";var jS=C.createContext(null);jS.displayName="Await";var un=C.createContext(null);un.displayName="Navigation";var Jo=C.createContext(null);Jo.displayName="Location";var Vn=C.createContext({outlet:null,matches:[],isDataRoute:!1});Vn.displayName="Route";var hm=C.createContext(null);hm.displayName="RouteError";var Pv="REACT_ROUTER_ERROR",kS="REDIRECT",CS="ROUTE_ERROR_RESPONSE";function ES(e){if(e.startsWith(`${Pv}:${kS}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function AS(e){if(e.startsWith(`${Pv}:${CS}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new xS(t.status,t.statusText,t.data)}catch{}}function MS(e,{relative:t}={}){We(as(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=C.useContext(un),{hash:o,pathname:l,search:u}=el(e,{relative:t}),f=l;return i!=="/"&&(f=l==="/"?i:ji([i,l])),a.createHref({pathname:f,search:u,hash:o})}function as(){return C.useContext(Jo)!=null}function ii(){return We(as(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(Jo).location}var Nv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Vv(e){C.useContext(un).static||C.useLayoutEffect(e)}function Bv(){let{isDataRoute:e}=C.useContext(Vn);return e?IS():zS()}function zS(){We(as(),"useNavigate() may be used only in the context of a <Router> component.");let e=C.useContext(is),{basename:t,navigator:i}=C.useContext(un),{matches:a}=C.useContext(Vn),{pathname:o}=ii(),l=JSON.stringify(fm(a)),u=C.useRef(!1);return Vv(()=>{u.current=!0}),C.useCallback((p,m={})=>{if(Dn(u.current,Nv),!u.current)return;if(typeof p=="number"){i.go(p);return}let g=pm(p,JSON.parse(l),o,m.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:ji([t,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[t,i,l,o,e])}var RS=C.createContext(null);function LS(e){let t=C.useContext(Vn).outlet;return C.useMemo(()=>t&&C.createElement(RS.Provider,{value:e},t),[t,e])}function el(e,{relative:t}={}){let{matches:i}=C.useContext(Vn),{pathname:a}=ii(),o=JSON.stringify(fm(i));return C.useMemo(()=>pm(e,JSON.parse(o),a,t==="path"),[e,o,a,t])}function OS(e,t){return _v(e,t)}function _v(e,t,i,a,o){var R;We(as(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=C.useContext(un),{matches:u}=C.useContext(Vn),f=u[u.length-1],p=f?f.params:{},m=f?f.pathname:"/",g=f?f.pathnameBase:"/",x=f&&f.route;{let E=x&&x.path||"";Hv(m,!x||E.endsWith("*")||E.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let y=ii(),v;if(t){let E=typeof t=="string"?ns(t):t;We(g==="/"||((R=E.pathname)==null?void 0:R.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${E.pathname}" was given in the \`location\` prop.`),v=E}else v=y;let S=v.pathname||"/",j=S;if(g!=="/"){let E=g.replace(/^\//,"").split("/");j="/"+S.replace(/^\//,"").split("/").slice(E.length).join("/")}let A=Av(e,{pathname:j});Dn(x||A!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Dn(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=BS(A&&A.map(E=>Object.assign({},E,{params:Object.assign({},p,E.params),pathname:ji([g,l.encodeLocation?l.encodeLocation(E.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?g:ji([g,l.encodeLocation?l.encodeLocation(E.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathnameBase])})),u,i,a,o);return t&&k?C.createElement(Jo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},k):k}function DS(){let e=US(),t=yS(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},l={padding:"2px 4px",backgroundColor:a},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:l},"ErrorBoundary")," or"," ",C.createElement("code",{style:l},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),i?C.createElement("pre",{style:o},i):null,u)}var PS=C.createElement(DS,null),$v=class extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const i=AS(e.digest);i&&(e=i)}let t=e!==void 0?C.createElement(Vn.Provider,{value:this.props.routeContext},C.createElement(hm.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?C.createElement(NS,{error:e},t):t}};$v.contextType=SS;var gp=new WeakMap;function NS({children:e,error:t}){let{basename:i}=C.useContext(un);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let a=ES(t.digest);if(a){let o=gp.get(t);if(o)throw o;let l=Lv(a.location,i);if(Rv&&!gp.get(t))if(l.isExternal||a.reloadDocument)window.location.href=l.absoluteURL||l.to;else{const u=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:a.replace}));throw gp.set(t,u),u}return C.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l.absoluteURL||l.to}`})}}return e}function VS({routeContext:e,match:t,children:i}){let a=C.useContext(is);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),C.createElement(Vn.Provider,{value:e},i)}function BS(e,t=[],i=null,a=null,o=null){if(e==null){if(!i)return null;if(i.errors)e=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let l=e,u=i==null?void 0:i.errors;if(u!=null){let g=l.findIndex(x=>x.route.id&&(u==null?void 0:u[x.route.id])!==void 0);We(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,g+1))}let f=!1,p=-1;if(i)for(let g=0;g<l.length;g++){let x=l[g];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(p=g),x.route.id){let{loaderData:y,errors:v}=i,S=x.route.loader&&!y.hasOwnProperty(x.route.id)&&(!v||v[x.route.id]===void 0);if(x.route.lazy||S){f=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}let m=i&&a?(g,x)=>{var y,v;a(g,{location:i.location,params:((v=(y=i.matches)==null?void 0:y[0])==null?void 0:v.params)??{},unstable_pattern:vS(i.matches),errorInfo:x})}:void 0;return l.reduceRight((g,x,y)=>{let v,S=!1,j=null,A=null;i&&(v=u&&x.route.id?u[x.route.id]:void 0,j=x.route.errorElement||PS,f&&(p<0&&y===0?(Hv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,A=null):p===y&&(S=!0,A=x.route.hydrateFallbackElement||null)));let k=t.concat(l.slice(0,y+1)),R=()=>{let E;return v?E=j:S?E=A:x.route.Component?E=C.createElement(x.route.Component,null):x.route.element?E=x.route.element:E=g,C.createElement(VS,{match:x,routeContext:{outlet:g,matches:k,isDataRoute:i!=null},children:E})};return i&&(x.route.ErrorBoundary||x.route.errorElement||y===0)?C.createElement($v,{location:i.location,revalidation:i.revalidation,component:j,error:v,children:R(),routeContext:{outlet:null,matches:k,isDataRoute:!0},onError:m}):R()},null)}function mm(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _S(e){let t=C.useContext(is);return We(t,mm(e)),t}function $S(e){let t=C.useContext(Mu);return We(t,mm(e)),t}function HS(e){let t=C.useContext(Vn);return We(t,mm(e)),t}function gm(e){let t=HS(e),i=t.matches[t.matches.length-1];return We(i.route.id,`${e} can only be used on routes that contain a unique "id"`),i.route.id}function GS(){return gm("useRouteId")}function US(){var a;let e=C.useContext(hm),t=$S("useRouteError"),i=gm("useRouteError");return e!==void 0?e:(a=t.errors)==null?void 0:a[i]}function IS(){let{router:e}=_S("useNavigate"),t=gm("useNavigate"),i=C.useRef(!1);return Vv(()=>{i.current=!0}),C.useCallback(async(o,l={})=>{Dn(i.current,Nv),i.current&&(typeof o=="number"?await e.navigate(o):await e.navigate(o,{fromRouteId:t,...l}))},[e,t])}var kb={};function Hv(e,t,i){!t&&!kb[e]&&(kb[e]=!0,Dn(!1,i))}C.memo(FS);function FS({routes:e,future:t,state:i,onError:a}){return _v(e,void 0,i,a,t)}function Cb({to:e,replace:t,state:i,relative:a}){We(as(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=C.useContext(un);Dn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=C.useContext(Vn),{pathname:u}=ii(),f=Bv(),p=pm(e,fm(l),u,a==="path"),m=JSON.stringify(p);return C.useEffect(()=>{f(JSON.parse(m),{replace:t,state:i,relative:a})},[f,m,a,t,i]),null}function qS(e){return LS(e.context)}function wt(e){We(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function KS({basename:e="/",children:t=null,location:i,navigationType:a="POP",navigator:o,static:l=!1,unstable_useTransitions:u}){We(!as(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=e.replace(/^\/*/,"/"),p=C.useMemo(()=>({basename:f,navigator:o,static:l,unstable_useTransitions:u,future:{}}),[f,o,l,u]);typeof i=="string"&&(i=ns(i));let{pathname:m="/",search:g="",hash:x="",state:y=null,key:v="default"}=i,S=C.useMemo(()=>{let j=ki(m,f);return j==null?null:{location:{pathname:j,search:g,hash:x,state:y,key:v},navigationType:a}},[f,m,g,x,y,v,a]);return Dn(S!=null,`<Router basename="${f}"> is not able to match the URL "${m}${g}${x}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:C.createElement(un.Provider,{value:p},C.createElement(Jo.Provider,{children:t,value:S}))}function YS({children:e,location:t}){return OS(mh(e),t)}function mh(e,t=[]){let i=[];return C.Children.forEach(e,(a,o)=>{if(!C.isValidElement(a))return;let l=[...t,o];if(a.type===C.Fragment){i.push.apply(i,mh(a.props.children,l));return}We(a.type===wt,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),We(!a.props.index||!a.props.children,"An index route cannot have child routes.");let u={id:a.props.id||l.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(u.children=mh(a.props.children,l)),i.push(u)}),i}var Bc="get",_c="application/x-www-form-urlencoded";function zu(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function XS(e){return zu(e)&&e.tagName.toLowerCase()==="button"}function QS(e){return zu(e)&&e.tagName.toLowerCase()==="form"}function WS(e){return zu(e)&&e.tagName.toLowerCase()==="input"}function ZS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function JS(e,t){return e.button===0&&(!t||t==="_self")&&!ZS(e)}var wc=null;function e9(){if(wc===null)try{new FormData(document.createElement("form"),0),wc=!1}catch{wc=!0}return wc}var t9=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function bp(e){return e!=null&&!t9.has(e)?(Dn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${_c}"`),null):e}function n9(e,t){let i,a,o,l,u;if(QS(e)){let f=e.getAttribute("action");a=f?ki(f,t):null,i=e.getAttribute("method")||Bc,o=bp(e.getAttribute("enctype"))||_c,l=new FormData(e)}else if(XS(e)||WS(e)&&(e.type==="submit"||e.type==="image")){let f=e.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=e.getAttribute("formaction")||f.getAttribute("action");if(a=p?ki(p,t):null,i=e.getAttribute("formmethod")||f.getAttribute("method")||Bc,o=bp(e.getAttribute("formenctype"))||bp(f.getAttribute("enctype"))||_c,l=new FormData(f,e),!e9()){let{name:m,type:g,value:x}=e;if(g==="image"){let y=m?`${m}.`:"";l.append(`${y}x`,"0"),l.append(`${y}y`,"0")}else m&&l.append(m,x)}}else{if(zu(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Bc,a=null,o=_c,u=e}return l&&o==="text/plain"&&(u=l,l=void 0),{action:a,method:i.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function bm(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function i9(e,t,i,a){let o=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return i?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${a}`:o.pathname=`${o.pathname}.${a}`:o.pathname==="/"?o.pathname=`_root.${a}`:t&&ki(o.pathname,t)==="/"?o.pathname=`${t.replace(/\/$/,"")}/_root.${a}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${a}`,o}async function a9(e,t){if(e.id in t)return t[e.id];try{let i=await import(e.module);return t[e.id]=i,i}catch(i){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function r9(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function s9(e,t,i){let a=await Promise.all(e.map(async o=>{let l=t.routes[o.route.id];if(l){let u=await a9(l,i);return u.links?u.links():[]}return[]}));return u9(a.flat(1).filter(r9).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Eb(e,t,i,a,o,l){let u=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,f=(p,m)=>{var g;return i[m].pathname!==p.pathname||((g=i[m].route.path)==null?void 0:g.endsWith("*"))&&i[m].params["*"]!==p.params["*"]};return l==="assets"?t.filter((p,m)=>u(p,m)||f(p,m)):l==="data"?t.filter((p,m)=>{var x;let g=a.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(u(p,m)||f(p,m))return!0;if(p.route.shouldRevalidate){let y=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((x=i[0])==null?void 0:x.params)||{},nextUrl:new URL(e,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function o9(e,t,{includeHydrateFallback:i}={}){return l9(e.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function l9(e){return[...new Set(e)]}function c9(e){let t={},i=Object.keys(e).sort();for(let a of i)t[a]=e[a];return t}function u9(e,t){let i=new Set;return new Set(t),e.reduce((a,o)=>{let l=JSON.stringify(c9(o));return i.has(l)||(i.add(l),a.push({key:l,link:o})),a},[])}function Gv(){let e=C.useContext(is);return bm(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function d9(){let e=C.useContext(Mu);return bm(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var xm=C.createContext(void 0);xm.displayName="FrameworkContext";function Uv(){let e=C.useContext(xm);return bm(e,"You must render this element inside a <HydratedRouter> element"),e}function f9(e,t){let i=C.useContext(xm),[a,o]=C.useState(!1),[l,u]=C.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:x}=t,y=C.useRef(null);C.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let j=k=>{k.forEach(R=>{u(R.isIntersecting)})},A=new IntersectionObserver(j,{threshold:.5});return y.current&&A.observe(y.current),()=>{A.disconnect()}}},[e]),C.useEffect(()=>{if(a){let j=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(j)}}},[a]);let v=()=>{o(!0)},S=()=>{o(!1),u(!1)};return i?e!=="intent"?[l,y,{}]:[l,y,{onFocus:uo(f,v),onBlur:uo(p,S),onMouseEnter:uo(m,v),onMouseLeave:uo(g,S),onTouchStart:uo(x,v)}]:[!1,y,{}]}function uo(e,t){return i=>{e&&e(i),i.defaultPrevented||t(i)}}function p9({page:e,...t}){let{router:i}=Gv(),a=C.useMemo(()=>Av(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?C.createElement(m9,{page:e,matches:a,...t}):null}function h9(e){let{manifest:t,routeModules:i}=Uv(),[a,o]=C.useState([]);return C.useEffect(()=>{let l=!1;return s9(e,t,i).then(u=>{l||o(u)}),()=>{l=!0}},[e,t,i]),a}function m9({page:e,matches:t,...i}){let a=ii(),{future:o,manifest:l,routeModules:u}=Uv(),{basename:f}=Gv(),{loaderData:p,matches:m}=d9(),g=C.useMemo(()=>Eb(e,t,m,l,a,"data"),[e,t,m,l,a]),x=C.useMemo(()=>Eb(e,t,m,l,a,"assets"),[e,t,m,l,a]),y=C.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let j=new Set,A=!1;if(t.forEach(R=>{var B;let E=l.routes[R.route.id];!E||!E.hasLoader||(!g.some(M=>M.route.id===R.route.id)&&R.route.id in p&&((B=u[R.route.id])!=null&&B.shouldRevalidate)||E.hasClientLoader?A=!0:j.add(R.route.id))}),j.size===0)return[];let k=i9(e,f,o.unstable_trailingSlashAwareDataRequests,"data");return A&&j.size>0&&k.searchParams.set("_routes",t.filter(R=>j.has(R.route.id)).map(R=>R.route.id).join(",")),[k.pathname+k.search]},[f,o.unstable_trailingSlashAwareDataRequests,p,a,l,g,t,e,u]),v=C.useMemo(()=>o9(x,l),[x,l]),S=h9(x);return C.createElement(C.Fragment,null,y.map(j=>C.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...i})),v.map(j=>C.createElement("link",{key:j,rel:"modulepreload",href:j,...i})),S.map(({key:j,link:A})=>C.createElement("link",{key:j,nonce:i.nonce,...A,crossOrigin:A.crossOrigin??i.crossOrigin})))}function g9(...e){return t=>{e.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var b9=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{b9&&(window.__reactRouterVersion="7.13.0")}catch{}function x9({basename:e,children:t,unstable_useTransitions:i,window:a}){let o=C.useRef();o.current==null&&(o.current=X8({window:a,v5Compat:!0}));let l=o.current,[u,f]=C.useState({action:l.action,location:l.location}),p=C.useCallback(m=>{i===!1?f(m):C.startTransition(()=>f(m))},[i]);return C.useLayoutEffect(()=>l.listen(p),[l,p]),C.createElement(KS,{basename:e,children:t,location:u.location,navigationType:u.action,navigator:l,unstable_useTransitions:i})}var Iv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fv=C.forwardRef(function({onClick:t,discover:i="render",prefetch:a="none",relative:o,reloadDocument:l,replace:u,state:f,target:p,to:m,preventScrollReset:g,viewTransition:x,unstable_defaultShouldRevalidate:y,...v},S){let{basename:j,unstable_useTransitions:A}=C.useContext(un),k=typeof m=="string"&&Iv.test(m),R=Lv(m,j);m=R.to;let E=MS(m,{relative:o}),[B,M,N]=f9(a,v),P=w9(m,{replace:u,state:f,target:p,preventScrollReset:g,relative:o,viewTransition:x,unstable_defaultShouldRevalidate:y,unstable_useTransitions:A});function U(Y){t&&t(Y),Y.defaultPrevented||P(Y)}let G=C.createElement("a",{...v,...N,href:R.absoluteURL||E,onClick:R.isExternal||l?t:U,ref:g9(S,M),target:p,"data-discover":!k&&i==="render"?"true":void 0});return B&&!k?C.createElement(C.Fragment,null,G,C.createElement(p9,{page:E})):G});Fv.displayName="Link";var ti=C.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:a="",end:o=!1,style:l,to:u,viewTransition:f,children:p,...m},g){let x=el(u,{relative:m.relative}),y=ii(),v=C.useContext(Mu),{navigator:S,basename:j}=C.useContext(un),A=v!=null&&C9(x)&&f===!0,k=S.encodeLocation?S.encodeLocation(x).pathname:x.pathname,R=y.pathname,E=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(R=R.toLowerCase(),E=E?E.toLowerCase():null,k=k.toLowerCase()),E&&j&&(E=ki(E,j)||E);const B=k!=="/"&&k.endsWith("/")?k.length-1:k.length;let M=R===k||!o&&R.startsWith(k)&&R.charAt(B)==="/",N=E!=null&&(E===k||!o&&E.startsWith(k)&&E.charAt(k.length)==="/"),P={isActive:M,isPending:N,isTransitioning:A},U=M?t:void 0,G;typeof a=="function"?G=a(P):G=[a,M?"active":null,N?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let Y=typeof l=="function"?l(P):l;return C.createElement(Fv,{...m,"aria-current":U,className:G,ref:g,style:Y,to:u,viewTransition:f},typeof p=="function"?p(P):p)});ti.displayName="NavLink";var y9=C.forwardRef(({discover:e="render",fetcherKey:t,navigate:i,reloadDocument:a,replace:o,state:l,method:u=Bc,action:f,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:x,unstable_defaultShouldRevalidate:y,...v},S)=>{let{unstable_useTransitions:j}=C.useContext(un),A=j9(),k=k9(f,{relative:m}),R=u.toLowerCase()==="get"?"get":"post",E=typeof f=="string"&&Iv.test(f),B=M=>{if(p&&p(M),M.defaultPrevented)return;M.preventDefault();let N=M.nativeEvent.submitter,P=(N==null?void 0:N.getAttribute("formmethod"))||u,U=()=>A(N||M.currentTarget,{fetcherKey:t,method:P,navigate:i,replace:o,state:l,relative:m,preventScrollReset:g,viewTransition:x,unstable_defaultShouldRevalidate:y});j&&i!==!1?C.startTransition(()=>U()):U()};return C.createElement("form",{ref:S,method:R,action:k,onSubmit:a?p:B,...v,"data-discover":!E&&e==="render"?"true":void 0})});y9.displayName="Form";function v9(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qv(e){let t=C.useContext(is);return We(t,v9(e)),t}function w9(e,{target:t,replace:i,state:a,preventScrollReset:o,relative:l,viewTransition:u,unstable_defaultShouldRevalidate:f,unstable_useTransitions:p}={}){let m=Bv(),g=ii(),x=el(e,{relative:l});return C.useCallback(y=>{if(JS(y,t)){y.preventDefault();let v=i!==void 0?i:Vo(g)===Vo(x),S=()=>m(e,{replace:v,state:a,preventScrollReset:o,relative:l,viewTransition:u,unstable_defaultShouldRevalidate:f});p?C.startTransition(()=>S()):S()}},[g,m,x,i,a,t,e,o,l,u,f,p])}var S9=0,T9=()=>`__${String(++S9)}__`;function j9(){let{router:e}=qv("useSubmit"),{basename:t}=C.useContext(un),i=GS(),a=e.fetch,o=e.navigate;return C.useCallback(async(l,u={})=>{let{action:f,method:p,encType:m,formData:g,body:x}=n9(l,t);if(u.navigate===!1){let y=u.fetcherKey||T9();await a(y,i,u.action||f,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:g,body:x,formMethod:u.method||p,formEncType:u.encType||m,flushSync:u.flushSync})}else await o(u.action||f,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:g,body:x,formMethod:u.method||p,formEncType:u.encType||m,replace:u.replace,state:u.state,fromRouteId:i,flushSync:u.flushSync,viewTransition:u.viewTransition})},[a,o,t,i])}function k9(e,{relative:t}={}){let{basename:i}=C.useContext(un),a=C.useContext(Vn);We(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),l={...el(e||".",{relative:t})},u=ii();if(e==null){l.search=u.search;let f=new URLSearchParams(l.search),p=f.getAll("index");if(p.some(g=>g==="")){f.delete("index"),p.filter(x=>x).forEach(x=>f.append("index",x));let g=f.toString();l.search=g?`?${g}`:""}}return(!e||e===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(l.pathname=l.pathname==="/"?i:ji([i,l.pathname])),Vo(l)}function C9(e,{relative:t}={}){let i=C.useContext(Dv);We(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=qv("useViewTransitionState"),o=el(e,{relative:t});if(!i.isTransitioning)return!1;let l=ki(i.currentLocation.pathname,a)||i.currentLocation.pathname,u=ki(i.nextLocation.pathname,a)||i.nextLocation.pathname;return nu(o.pathname,u)!=null||nu(o.pathname,l)!=null}var E9=Ev();function A9(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function M9(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var z9=function(){function e(i){var a=this;this._insertTag=function(o){var l;a.tags.length===0?a.insertionPoint?l=a.insertionPoint.nextSibling:a.prepend?l=a.container.firstChild:l=a.before:l=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(o,l),a.tags.push(o)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(a){a.forEach(this._insertTag)},t.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(M9(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=A9(o);try{l.insertRule(a,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(a));this.ctr++},t.flush=function(){this.tags.forEach(function(a){var o;return(o=a.parentNode)==null?void 0:o.removeChild(a)}),this.tags=[],this.ctr=0},e}(),Ot="-ms-",iu="-moz-",ze="-webkit-",Kv="comm",ym="rule",vm="decl",R9="@import",Yv="@keyframes",L9="@layer",O9=Math.abs,Ru=String.fromCharCode,D9=Object.assign;function P9(e,t){return Et(e,0)^45?(((t<<2^Et(e,0))<<2^Et(e,1))<<2^Et(e,2))<<2^Et(e,3):0}function Xv(e){return e.trim()}function N9(e,t){return(e=t.exec(e))?e[0]:e}function Re(e,t,i){return e.replace(t,i)}function gh(e,t){return e.indexOf(t)}function Et(e,t){return e.charCodeAt(t)|0}function Bo(e,t,i){return e.slice(t,i)}function Kn(e){return e.length}function wm(e){return e.length}function Sc(e,t){return t.push(e),e}function V9(e,t){return e.map(t).join("")}var Lu=1,Fr=1,Qv=0,Qt=0,ct=0,rs="";function Ou(e,t,i,a,o,l,u){return{value:e,root:t,parent:i,type:a,props:o,children:l,line:Lu,column:Fr,length:u,return:""}}function fo(e,t){return D9(Ou("",null,null,"",null,null,0),e,{length:-e.length},t)}function B9(){return ct}function _9(){return ct=Qt>0?Et(rs,--Qt):0,Fr--,ct===10&&(Fr=1,Lu--),ct}function cn(){return ct=Qt<Qv?Et(rs,Qt++):0,Fr++,ct===10&&(Fr=1,Lu++),ct}function Wn(){return Et(rs,Qt)}function $c(){return Qt}function tl(e,t){return Bo(rs,e,t)}function _o(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Wv(e){return Lu=Fr=1,Qv=Kn(rs=e),Qt=0,[]}function Zv(e){return rs="",e}function Hc(e){return Xv(tl(Qt-1,bh(e===91?e+2:e===40?e+1:e)))}function $9(e){for(;(ct=Wn())&&ct<33;)cn();return _o(e)>2||_o(ct)>3?"":" "}function H9(e,t){for(;--t&&cn()&&!(ct<48||ct>102||ct>57&&ct<65||ct>70&&ct<97););return tl(e,$c()+(t<6&&Wn()==32&&cn()==32))}function bh(e){for(;cn();)switch(ct){case e:return Qt;case 34:case 39:e!==34&&e!==39&&bh(ct);break;case 40:e===41&&bh(e);break;case 92:cn();break}return Qt}function G9(e,t){for(;cn()&&e+ct!==57;)if(e+ct===84&&Wn()===47)break;return"/*"+tl(t,Qt-1)+"*"+Ru(e===47?e:cn())}function U9(e){for(;!_o(Wn());)cn();return tl(e,Qt)}function I9(e){return Zv(Gc("",null,null,null,[""],e=Wv(e),0,[0],e))}function Gc(e,t,i,a,o,l,u,f,p){for(var m=0,g=0,x=u,y=0,v=0,S=0,j=1,A=1,k=1,R=0,E="",B=o,M=l,N=a,P=E;A;)switch(S=R,R=cn()){case 40:if(S!=108&&Et(P,x-1)==58){gh(P+=Re(Hc(R),"&","&\f"),"&\f")!=-1&&(k=-1);break}case 34:case 39:case 91:P+=Hc(R);break;case 9:case 10:case 13:case 32:P+=$9(S);break;case 92:P+=H9($c()-1,7);continue;case 47:switch(Wn()){case 42:case 47:Sc(F9(G9(cn(),$c()),t,i),p);break;default:P+="/"}break;case 123*j:f[m++]=Kn(P)*k;case 125*j:case 59:case 0:switch(R){case 0:case 125:A=0;case 59+g:k==-1&&(P=Re(P,/\f/g,"")),v>0&&Kn(P)-x&&Sc(v>32?Mb(P+";",a,i,x-1):Mb(Re(P," ","")+";",a,i,x-2),p);break;case 59:P+=";";default:if(Sc(N=Ab(P,t,i,m,g,o,f,E,B=[],M=[],x),l),R===123)if(g===0)Gc(P,t,N,N,B,l,x,f,M);else switch(y===99&&Et(P,3)===110?100:y){case 100:case 108:case 109:case 115:Gc(e,N,N,a&&Sc(Ab(e,N,N,0,0,o,f,E,o,B=[],x),M),o,M,x,f,a?B:M);break;default:Gc(P,N,N,N,[""],M,0,f,M)}}m=g=v=0,j=k=1,E=P="",x=u;break;case 58:x=1+Kn(P),v=S;default:if(j<1){if(R==123)--j;else if(R==125&&j++==0&&_9()==125)continue}switch(P+=Ru(R),R*j){case 38:k=g>0?1:(P+="\f",-1);break;case 44:f[m++]=(Kn(P)-1)*k,k=1;break;case 64:Wn()===45&&(P+=Hc(cn())),y=Wn(),g=x=Kn(E=P+=U9($c())),R++;break;case 45:S===45&&Kn(P)==2&&(j=0)}}return l}function Ab(e,t,i,a,o,l,u,f,p,m,g){for(var x=o-1,y=o===0?l:[""],v=wm(y),S=0,j=0,A=0;S<a;++S)for(var k=0,R=Bo(e,x+1,x=O9(j=u[S])),E=e;k<v;++k)(E=Xv(j>0?y[k]+" "+R:Re(R,/&\f/g,y[k])))&&(p[A++]=E);return Ou(e,t,i,o===0?ym:f,p,m,g)}function F9(e,t,i){return Ou(e,t,i,Kv,Ru(B9()),Bo(e,2,-2),0)}function Mb(e,t,i,a){return Ou(e,t,i,vm,Bo(e,0,a),Bo(e,a+1,-1),a)}function Gr(e,t){for(var i="",a=wm(e),o=0;o<a;o++)i+=t(e[o],o,e,t)||"";return i}function q9(e,t,i,a){switch(e.type){case L9:if(e.children.length)break;case R9:case vm:return e.return=e.return||e.value;case Kv:return"";case Yv:return e.return=e.value+"{"+Gr(e.children,a)+"}";case ym:e.value=e.props.join(",")}return Kn(i=Gr(e.children,a))?e.return=e.value+"{"+i+"}":""}function K9(e){var t=wm(e);return function(i,a,o,l){for(var u="",f=0;f<t;f++)u+=e[f](i,a,o,l)||"";return u}}function Y9(e){return function(t){t.root||(t=t.return)&&e(t)}}function X9(e){var t=Object.create(null);return function(i){return t[i]===void 0&&(t[i]=e(i)),t[i]}}var Q9=function(t,i,a){for(var o=0,l=0;o=l,l=Wn(),o===38&&l===12&&(i[a]=1),!_o(l);)cn();return tl(t,Qt)},W9=function(t,i){var a=-1,o=44;do switch(_o(o)){case 0:o===38&&Wn()===12&&(i[a]=1),t[a]+=Q9(Qt-1,i,a);break;case 2:t[a]+=Hc(o);break;case 4:if(o===44){t[++a]=Wn()===58?"&\f":"",i[a]=t[a].length;break}default:t[a]+=Ru(o)}while(o=cn());return t},Z9=function(t,i){return Zv(W9(Wv(t),i))},zb=new WeakMap,J9=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var i=t.value,a=t.parent,o=t.column===a.column&&t.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(t.props.length===1&&i.charCodeAt(0)!==58&&!zb.get(a))&&!o){zb.set(t,!0);for(var l=[],u=Z9(i,l),f=a.props,p=0,m=0;p<u.length;p++)for(var g=0;g<f.length;g++,m++)t.props[m]=l[p]?u[p].replace(/&\f/g,f[g]):f[g]+" "+u[p]}}},eT=function(t){if(t.type==="decl"){var i=t.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(t.return="",t.value="")}};function Jv(e,t){switch(P9(e,t)){case 5103:return ze+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ze+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ze+e+iu+e+Ot+e+e;case 6828:case 4268:return ze+e+Ot+e+e;case 6165:return ze+e+Ot+"flex-"+e+e;case 5187:return ze+e+Re(e,/(\w+).+(:[^]+)/,ze+"box-$1$2"+Ot+"flex-$1$2")+e;case 5443:return ze+e+Ot+"flex-item-"+Re(e,/flex-|-self/,"")+e;case 4675:return ze+e+Ot+"flex-line-pack"+Re(e,/align-content|flex-|-self/,"")+e;case 5548:return ze+e+Ot+Re(e,"shrink","negative")+e;case 5292:return ze+e+Ot+Re(e,"basis","preferred-size")+e;case 6060:return ze+"box-"+Re(e,"-grow","")+ze+e+Ot+Re(e,"grow","positive")+e;case 4554:return ze+Re(e,/([^-])(transform)/g,"$1"+ze+"$2")+e;case 6187:return Re(Re(Re(e,/(zoom-|grab)/,ze+"$1"),/(image-set)/,ze+"$1"),e,"")+e;case 5495:case 3959:return Re(e,/(image-set\([^]*)/,ze+"$1$`$1");case 4968:return Re(Re(e,/(.+:)(flex-)?(.*)/,ze+"box-pack:$3"+Ot+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ze+e+e;case 4095:case 3583:case 4068:case 2532:return Re(e,/(.+)-inline(.+)/,ze+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Kn(e)-1-t>6)switch(Et(e,t+1)){case 109:if(Et(e,t+4)!==45)break;case 102:return Re(e,/(.+:)(.+)-([^]+)/,"$1"+ze+"$2-$3$1"+iu+(Et(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~gh(e,"stretch")?Jv(Re(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Et(e,t+1)!==115)break;case 6444:switch(Et(e,Kn(e)-3-(~gh(e,"!important")&&10))){case 107:return Re(e,":",":"+ze)+e;case 101:return Re(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ze+(Et(e,14)===45?"inline-":"")+"box$3$1"+ze+"$2$3$1"+Ot+"$2box$3")+e}break;case 5936:switch(Et(e,t+11)){case 114:return ze+e+Ot+Re(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ze+e+Ot+Re(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ze+e+Ot+Re(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ze+e+Ot+e+e}return e}var tT=function(t,i,a,o){if(t.length>-1&&!t.return)switch(t.type){case vm:t.return=Jv(t.value,t.length);break;case Yv:return Gr([fo(t,{value:Re(t.value,"@","@"+ze)})],o);case ym:if(t.length)return V9(t.props,function(l){switch(N9(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Gr([fo(t,{props:[Re(l,/:(read-\w+)/,":"+iu+"$1")]})],o);case"::placeholder":return Gr([fo(t,{props:[Re(l,/:(plac\w+)/,":"+ze+"input-$1")]}),fo(t,{props:[Re(l,/:(plac\w+)/,":"+iu+"$1")]}),fo(t,{props:[Re(l,/:(plac\w+)/,Ot+"input-$1")]})],o)}return""})}},nT=[tT],iT=function(t){var i=t.key;if(i==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(j){var A=j.getAttribute("data-emotion");A.indexOf(" ")!==-1&&(document.head.appendChild(j),j.setAttribute("data-s",""))})}var o=t.stylisPlugins||nT,l={},u,f=[];u=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(j){for(var A=j.getAttribute("data-emotion").split(" "),k=1;k<A.length;k++)l[A[k]]=!0;f.push(j)});var p,m=[J9,eT];{var g,x=[q9,Y9(function(j){g.insert(j)})],y=K9(m.concat(o,x)),v=function(A){return Gr(I9(A),y)};p=function(A,k,R,E){g=R,v(A?A+"{"+k.styles+"}":k.styles),E&&(S.inserted[k.name]=!0)}}var S={key:i,sheet:new z9({key:i,container:u,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:p};return S.sheet.hydrate(f),S},xp={exports:{}},Oe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rb;function aT(){if(Rb)return Oe;Rb=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,i=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,f=e?Symbol.for("react.context"):60110,p=e?Symbol.for("react.async_mode"):60111,m=e?Symbol.for("react.concurrent_mode"):60111,g=e?Symbol.for("react.forward_ref"):60112,x=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,v=e?Symbol.for("react.memo"):60115,S=e?Symbol.for("react.lazy"):60116,j=e?Symbol.for("react.block"):60121,A=e?Symbol.for("react.fundamental"):60117,k=e?Symbol.for("react.responder"):60118,R=e?Symbol.for("react.scope"):60119;function E(M){if(typeof M=="object"&&M!==null){var N=M.$$typeof;switch(N){case t:switch(M=M.type,M){case p:case m:case a:case l:case o:case x:return M;default:switch(M=M&&M.$$typeof,M){case f:case g:case S:case v:case u:return M;default:return N}}case i:return N}}}function B(M){return E(M)===m}return Oe.AsyncMode=p,Oe.ConcurrentMode=m,Oe.ContextConsumer=f,Oe.ContextProvider=u,Oe.Element=t,Oe.ForwardRef=g,Oe.Fragment=a,Oe.Lazy=S,Oe.Memo=v,Oe.Portal=i,Oe.Profiler=l,Oe.StrictMode=o,Oe.Suspense=x,Oe.isAsyncMode=function(M){return B(M)||E(M)===p},Oe.isConcurrentMode=B,Oe.isContextConsumer=function(M){return E(M)===f},Oe.isContextProvider=function(M){return E(M)===u},Oe.isElement=function(M){return typeof M=="object"&&M!==null&&M.$$typeof===t},Oe.isForwardRef=function(M){return E(M)===g},Oe.isFragment=function(M){return E(M)===a},Oe.isLazy=function(M){return E(M)===S},Oe.isMemo=function(M){return E(M)===v},Oe.isPortal=function(M){return E(M)===i},Oe.isProfiler=function(M){return E(M)===l},Oe.isStrictMode=function(M){return E(M)===o},Oe.isSuspense=function(M){return E(M)===x},Oe.isValidElementType=function(M){return typeof M=="string"||typeof M=="function"||M===a||M===m||M===l||M===o||M===x||M===y||typeof M=="object"&&M!==null&&(M.$$typeof===S||M.$$typeof===v||M.$$typeof===u||M.$$typeof===f||M.$$typeof===g||M.$$typeof===A||M.$$typeof===k||M.$$typeof===R||M.$$typeof===j)},Oe.typeOf=E,Oe}var Lb;function rT(){return Lb||(Lb=1,xp.exports=aT()),xp.exports}var yp,Ob;function sT(){if(Ob)return yp;Ob=1;var e=rT(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[e.ForwardRef]=a,l[e.Memo]=o;function u(S){return e.isMemo(S)?o:l[S.$$typeof]||t}var f=Object.defineProperty,p=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,g=Object.getOwnPropertyDescriptor,x=Object.getPrototypeOf,y=Object.prototype;function v(S,j,A){if(typeof j!="string"){if(y){var k=x(j);k&&k!==y&&v(S,k,A)}var R=p(j);m&&(R=R.concat(m(j)));for(var E=u(S),B=u(j),M=0;M<R.length;++M){var N=R[M];if(!i[N]&&!(A&&A[N])&&!(B&&B[N])&&!(E&&E[N])){var P=g(j,N);try{f(S,N,P)}catch{}}}}return S}return yp=v,yp}sT();var oT=!0;function lT(e,t,i){var a="";return i.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):o&&(a+=o+" ")}),a}var e5=function(t,i,a){var o=t.key+"-"+i.name;(a===!1||oT===!1)&&t.registered[o]===void 0&&(t.registered[o]=i.styles)},t5=function(t,i,a){e5(t,i,a);var o=t.key+"-"+i.name;if(t.inserted[i.name]===void 0){var l=i;do t.insert(i===l?"."+o:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function cT(e){for(var t=0,i,a=0,o=e.length;o>=4;++a,o-=4)i=e.charCodeAt(a)&255|(e.charCodeAt(++a)&255)<<8|(e.charCodeAt(++a)&255)<<16|(e.charCodeAt(++a)&255)<<24,i=(i&65535)*1540483477+((i>>>16)*59797<<16),i^=i>>>24,t=(i&65535)*1540483477+((i>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(a+2)&255)<<16;case 2:t^=(e.charCodeAt(a+1)&255)<<8;case 1:t^=e.charCodeAt(a)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var uT={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dT=/[A-Z]|^ms/g,fT=/_EMO_([^_]+?)_([^]*?)_EMO_/g,n5=function(t){return t.charCodeAt(1)===45},Db=function(t){return t!=null&&typeof t!="boolean"},vp=X9(function(e){return n5(e)?e:e.replace(dT,"-$&").toLowerCase()}),Pb=function(t,i){switch(t){case"animation":case"animationName":if(typeof i=="string")return i.replace(fT,function(a,o,l){return Yn={name:o,styles:l,next:Yn},o})}return uT[t]!==1&&!n5(t)&&typeof i=="number"&&i!==0?i+"px":i};function $o(e,t,i){if(i==null)return"";var a=i;if(a.__emotion_styles!==void 0)return a;switch(typeof i){case"boolean":return"";case"object":{var o=i;if(o.anim===1)return Yn={name:o.name,styles:o.styles,next:Yn},o.name;var l=i;if(l.styles!==void 0){var u=l.next;if(u!==void 0)for(;u!==void 0;)Yn={name:u.name,styles:u.styles,next:Yn},u=u.next;var f=l.styles+";";return f}return pT(e,t,i)}case"function":{if(e!==void 0){var p=Yn,m=i(e);return Yn=p,$o(e,t,m)}break}}var g=i;return g}function pT(e,t,i){var a="";if(Array.isArray(i))for(var o=0;o<i.length;o++)a+=$o(e,t,i[o])+";";else for(var l in i){var u=i[l];if(typeof u!="object"){var f=u;Db(f)&&(a+=vp(l)+":"+Pb(l,f)+";")}else if(Array.isArray(u)&&typeof u[0]=="string"&&t==null)for(var p=0;p<u.length;p++)Db(u[p])&&(a+=vp(l)+":"+Pb(l,u[p])+";");else{var m=$o(e,t,u);switch(l){case"animation":case"animationName":{a+=vp(l)+":"+m+";";break}default:a+=l+"{"+m+"}"}}}return a}var Nb=/label:\s*([^\s;{]+)\s*(;|$)/g,Yn;function Sm(e,t,i){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var a=!0,o="";Yn=void 0;var l=e[0];if(l==null||l.raw===void 0)a=!1,o+=$o(i,t,l);else{var u=l;o+=u[0]}for(var f=1;f<e.length;f++)if(o+=$o(i,t,e[f]),a){var p=l;o+=p[f]}Nb.lastIndex=0;for(var m="",g;(g=Nb.exec(o))!==null;)m+="-"+g[1];var x=cT(o)+m;return{name:x,styles:o,next:Yn}}var hT=function(t){return t()},i5=vb.useInsertionEffect?vb.useInsertionEffect:!1,mT=i5||hT,Vb=i5||C.useLayoutEffect,a5=C.createContext(typeof HTMLElement<"u"?iT({key:"css"}):null);a5.Provider;var r5=function(t){return C.forwardRef(function(i,a){var o=C.useContext(a5);return t(i,o,a)})},s5=C.createContext({}),Tm={}.hasOwnProperty,xh="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",gT=function(t,i){var a={};for(var o in i)Tm.call(i,o)&&(a[o]=i[o]);return a[xh]=t,a},bT=function(t){var i=t.cache,a=t.serialized,o=t.isStringTag;return e5(i,a,o),mT(function(){return t5(i,a,o)}),null},xT=r5(function(e,t,i){var a=e.css;typeof a=="string"&&t.registered[a]!==void 0&&(a=t.registered[a]);var o=e[xh],l=[a],u="";typeof e.className=="string"?u=lT(t.registered,l,e.className):e.className!=null&&(u=e.className+" ");var f=Sm(l,void 0,C.useContext(s5));u+=t.key+"-"+f.name;var p={};for(var m in e)Tm.call(e,m)&&m!=="css"&&m!==xh&&(p[m]=e[m]);return p.className=u,i&&(p.ref=i),C.createElement(C.Fragment,null,C.createElement(bT,{cache:t,serialized:f,isStringTag:typeof o=="string"}),C.createElement(o,p))}),yT=xT,Bb=function(t,i){var a=arguments;if(i==null||!Tm.call(i,"css"))return C.createElement.apply(void 0,a);var o=a.length,l=new Array(o);l[0]=yT,l[1]=gT(t,i);for(var u=2;u<o;u++)l[u]=a[u];return C.createElement.apply(null,l)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(Bb||(Bb={}));var vT=r5(function(e,t){var i=e.styles,a=Sm([i],void 0,C.useContext(s5)),o=C.useRef();return Vb(function(){var l=t.key+"-global",u=new t.sheet.constructor({key:l,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),f=!1,p=document.querySelector('style[data-emotion="'+l+" "+a.name+'"]');return t.sheet.tags.length&&(u.before=t.sheet.tags[0]),p!==null&&(f=!0,p.setAttribute("data-emotion",l),u.hydrate([p])),o.current=[u,f],function(){u.flush()}},[t]),Vb(function(){var l=o.current,u=l[0],f=l[1];if(f){l[1]=!1;return}if(a.next!==void 0&&t5(t,a.next,!0),u.tags.length){var p=u.tags[u.tags.length-1].nextElementSibling;u.before=p,u.flush()}t.insert("",a,u,!1)},[t,a.name]),null});function wT(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return Sm(t)}const ST="/assets/Geist-Regular-BCrLS6HJ.ttf",TT="/assets/Geist-Medium-C6X8vKEc.ttf",jT="/assets/BebasNeue-Regular-D2CONTwO.ttf",kT="/assets/Inter_24pt-Regular-BPx6xqqj.ttf",CT=wT`
  /* ========== FONTS ========== */
  @font-face {
    font-family: "Geist";
    src: url(${ST}) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Geist";
    src: url(${TT}) format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Bebas Neue";
    src: url(${jT}) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Inter";
    src: url(${kT}) format("truetype");
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
`,jm=C.createContext({});function ss(e){const t=C.useRef(null);return t.current===null&&(t.current=e()),t.current}const km=typeof window<"u",Du=km?C.useLayoutEffect:C.useEffect,Pu=C.createContext(null);function Cm(e,t){e.indexOf(t)===-1&&e.push(t)}function Em(e,t){const i=e.indexOf(t);i>-1&&e.splice(i,1)}const ni=(e,t,i)=>i>t?t:i<e?e:i;let Ho=()=>{};const Ci={},o5=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function l5(e){return typeof e=="object"&&e!==null}const c5=e=>/^0[^.\s]+$/u.test(e);function Am(e){let t;return()=>(t===void 0&&(t=e()),t)}const Yt=e=>e,ET=(e,t)=>i=>t(e(i)),nl=(...e)=>e.reduce(ET),qr=(e,t,i)=>{const a=t-e;return a===0?1:(i-e)/a};class Mm{constructor(){this.subscriptions=[]}add(t){return Cm(this.subscriptions,t),()=>Em(this.subscriptions,t)}notify(t,i,a){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,i,a);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(t,i,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Zn=e=>e*1e3,Jn=e=>e/1e3;function zm(e,t){return t?e*(1e3/t):0}const u5=(e,t,i)=>(((1-3*i+3*t)*e+(3*i-6*t))*e+3*t)*e,AT=1e-7,MT=12;function zT(e,t,i,a,o){let l,u,f=0;do u=t+(i-t)/2,l=u5(u,a,o)-e,l>0?i=u:t=u;while(Math.abs(l)>AT&&++f<MT);return u}function il(e,t,i,a){if(e===t&&i===a)return Yt;const o=l=>zT(l,0,1,e,i);return l=>l===0||l===1?l:u5(o(l),t,a)}const d5=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,f5=e=>t=>1-e(1-t),Nu=il(.33,1.53,.69,.99),Rm=f5(Nu),p5=d5(Rm),h5=e=>(e*=2)<1?.5*Rm(e):.5*(2-Math.pow(2,-10*(e-1))),Lm=e=>1-Math.sin(Math.acos(e)),m5=f5(Lm),g5=d5(Lm),RT=il(.42,0,1,1),Cn=il(0,0,.58,1),Om=il(.42,0,.58,1),LT=e=>Array.isArray(e)&&typeof e[0]!="number",b5=e=>Array.isArray(e)&&typeof e[0]=="number",OT={linear:Yt,easeIn:RT,easeInOut:Om,easeOut:Cn,circIn:Lm,circInOut:g5,circOut:m5,backIn:Rm,backInOut:p5,backOut:Nu,anticipate:h5},DT=e=>typeof e=="string",_b=e=>{if(b5(e)){Ho(e.length===4);const[t,i,a,o]=e;return il(t,i,a,o)}else if(DT(e))return OT[e];return e},Tc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function PT(e,t){let i=new Set,a=new Set,o=!1,l=!1;const u=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function p(g){u.has(g)&&(m.schedule(g),e()),g(f)}const m={schedule:(g,x=!1,y=!1)=>{const S=y&&o?i:a;return x&&u.add(g),S.has(g)||S.add(g),g},cancel:g=>{a.delete(g),u.delete(g)},process:g=>{if(f=g,o){l=!0;return}o=!0,[i,a]=[a,i],i.forEach(p),i.clear(),o=!1,l&&(l=!1,m.process(g))}};return m}const NT=40;function x5(e,t){let i=!1,a=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>i=!0,u=Tc.reduce((E,B)=>(E[B]=PT(l),E),{}),{setup:f,read:p,resolveKeyframes:m,preUpdate:g,update:x,preRender:y,render:v,postRender:S}=u,j=()=>{const E=Ci.useManualTiming?o.timestamp:performance.now();i=!1,Ci.useManualTiming||(o.delta=a?1e3/60:Math.max(Math.min(E-o.timestamp,NT),1)),o.timestamp=E,o.isProcessing=!0,f.process(o),p.process(o),m.process(o),g.process(o),x.process(o),y.process(o),v.process(o),S.process(o),o.isProcessing=!1,i&&t&&(a=!1,e(j))},A=()=>{i=!0,a=!0,o.isProcessing||e(j)};return{schedule:Tc.reduce((E,B)=>{const M=u[B];return E[B]=(N,P=!1,U=!1)=>(i||A(),M.schedule(N,P,U)),E},{}),cancel:E=>{for(let B=0;B<Tc.length;B++)u[Tc[B]].cancel(E)},state:o,steps:u}}const{schedule:Ve,cancel:Pn,state:St,steps:wp}=x5(typeof requestAnimationFrame<"u"?requestAnimationFrame:Yt,!0);let Uc;function VT(){Uc=void 0}const qt={now:()=>(Uc===void 0&&qt.set(St.isProcessing||Ci.useManualTiming?St.timestamp:performance.now()),Uc),set:e=>{Uc=e,queueMicrotask(VT)}},y5=e=>t=>typeof t=="string"&&t.startsWith(e),Dm=y5("--"),BT=y5("var(--"),Pm=e=>BT(e)?_T.test(e.split("/*")[0].trim()):!1,_T=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,os={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Go={...os,transform:e=>ni(0,1,e)},jc={...os,default:1},Co=e=>Math.round(e*1e5)/1e5,Nm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function $T(e){return e==null}const HT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Vm=(e,t)=>i=>!!(typeof i=="string"&&HT.test(i)&&i.startsWith(e)||t&&!$T(i)&&Object.prototype.hasOwnProperty.call(i,t)),v5=(e,t,i)=>a=>{if(typeof a!="string")return a;const[o,l,u,f]=a.match(Nm);return{[e]:parseFloat(o),[t]:parseFloat(l),[i]:parseFloat(u),alpha:f!==void 0?parseFloat(f):1}},GT=e=>ni(0,255,e),Sp={...os,transform:e=>Math.round(GT(e))},Ma={test:Vm("rgb","red"),parse:v5("red","green","blue"),transform:({red:e,green:t,blue:i,alpha:a=1})=>"rgba("+Sp.transform(e)+", "+Sp.transform(t)+", "+Sp.transform(i)+", "+Co(Go.transform(a))+")"};function UT(e){let t="",i="",a="",o="";return e.length>5?(t=e.substring(1,3),i=e.substring(3,5),a=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),i=e.substring(2,3),a=e.substring(3,4),o=e.substring(4,5),t+=t,i+=i,a+=a,o+=o),{red:parseInt(t,16),green:parseInt(i,16),blue:parseInt(a,16),alpha:o?parseInt(o,16)/255:1}}const yh={test:Vm("#"),parse:UT,transform:Ma.transform},al=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Zi=al("deg"),ei=al("%"),ge=al("px"),IT=al("vh"),FT=al("vw"),$b={...ei,parse:e=>ei.parse(e)/100,transform:e=>ei.transform(e*100)},Dr={test:Vm("hsl","hue"),parse:v5("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:i,alpha:a=1})=>"hsla("+Math.round(e)+", "+ei.transform(Co(t))+", "+ei.transform(Co(i))+", "+Co(Go.transform(a))+")"},lt={test:e=>Ma.test(e)||yh.test(e)||Dr.test(e),parse:e=>Ma.test(e)?Ma.parse(e):Dr.test(e)?Dr.parse(e):yh.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Ma.transform(e):Dr.transform(e),getAnimatableNone:e=>{const t=lt.parse(e);return t.alpha=0,lt.transform(t)}},qT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function KT(e){var t,i;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Nm))==null?void 0:t.length)||0)+(((i=e.match(qT))==null?void 0:i.length)||0)>0}const w5="number",S5="color",YT="var",XT="var(",Hb="${}",QT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Uo(e){const t=e.toString(),i=[],a={color:[],number:[],var:[]},o=[];let l=0;const f=t.replace(QT,p=>(lt.test(p)?(a.color.push(l),o.push(S5),i.push(lt.parse(p))):p.startsWith(XT)?(a.var.push(l),o.push(YT),i.push(p)):(a.number.push(l),o.push(w5),i.push(parseFloat(p))),++l,Hb)).split(Hb);return{values:i,split:f,indexes:a,types:o}}function T5(e){return Uo(e).values}function j5(e){const{split:t,types:i}=Uo(e),a=t.length;return o=>{let l="";for(let u=0;u<a;u++)if(l+=t[u],o[u]!==void 0){const f=i[u];f===w5?l+=Co(o[u]):f===S5?l+=lt.transform(o[u]):l+=o[u]}return l}}const WT=e=>typeof e=="number"?0:lt.test(e)?lt.getAnimatableNone(e):e;function ZT(e){const t=T5(e);return j5(e)(t.map(WT))}const na={test:KT,parse:T5,createTransformer:j5,getAnimatableNone:ZT};function Tp(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*(2/3-i)*6:e}function JT({hue:e,saturation:t,lightness:i,alpha:a}){e/=360,t/=100,i/=100;let o=0,l=0,u=0;if(!t)o=l=u=i;else{const f=i<.5?i*(1+t):i+t-i*t,p=2*i-f;o=Tp(p,f,e+1/3),l=Tp(p,f,e),u=Tp(p,f,e-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:a}}function au(e,t){return i=>i>0?t:e}const Je=(e,t,i)=>e+(t-e)*i,jp=(e,t,i)=>{const a=e*e,o=i*(t*t-a)+a;return o<0?0:Math.sqrt(o)},e7=[yh,Ma,Dr],t7=e=>e7.find(t=>t.test(e));function Gb(e){const t=t7(e);if(!t)return!1;let i=t.parse(e);return t===Dr&&(i=JT(i)),i}const Ub=(e,t)=>{const i=Gb(e),a=Gb(t);if(!i||!a)return au(e,t);const o={...i};return l=>(o.red=jp(i.red,a.red,l),o.green=jp(i.green,a.green,l),o.blue=jp(i.blue,a.blue,l),o.alpha=Je(i.alpha,a.alpha,l),Ma.transform(o))},vh=new Set(["none","hidden"]);function n7(e,t){return vh.has(e)?i=>i<=0?e:t:i=>i>=1?t:e}function i7(e,t){return i=>Je(e,t,i)}function Bm(e){return typeof e=="number"?i7:typeof e=="string"?Pm(e)?au:lt.test(e)?Ub:s7:Array.isArray(e)?k5:typeof e=="object"?lt.test(e)?Ub:a7:au}function k5(e,t){const i=[...e],a=i.length,o=e.map((l,u)=>Bm(l)(l,t[u]));return l=>{for(let u=0;u<a;u++)i[u]=o[u](l);return i}}function a7(e,t){const i={...e,...t},a={};for(const o in i)e[o]!==void 0&&t[o]!==void 0&&(a[o]=Bm(e[o])(e[o],t[o]));return o=>{for(const l in a)i[l]=a[l](o);return i}}function r7(e,t){const i=[],a={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const l=t.types[o],u=e.indexes[l][a[l]],f=e.values[u]??0;i[o]=f,a[l]++}return i}const s7=(e,t)=>{const i=na.createTransformer(t),a=Uo(e),o=Uo(t);return a.indexes.var.length===o.indexes.var.length&&a.indexes.color.length===o.indexes.color.length&&a.indexes.number.length>=o.indexes.number.length?vh.has(e)&&!o.values.length||vh.has(t)&&!a.values.length?n7(e,t):nl(k5(r7(a,o),o.values),i):au(e,t)};function C5(e,t,i){return typeof e=="number"&&typeof t=="number"&&typeof i=="number"?Je(e,t,i):Bm(e)(e,t)}const o7=e=>{const t=({timestamp:i})=>e(i);return{start:(i=!0)=>Ve.update(t,i),stop:()=>Pn(t),now:()=>St.isProcessing?St.timestamp:qt.now()}},E5=(e,t,i=10)=>{let a="";const o=Math.max(Math.round(t/i),2);for(let l=0;l<o;l++)a+=Math.round(e(l/(o-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},ru=2e4;function _m(e){let t=0;const i=50;let a=e.next(t);for(;!a.done&&t<ru;)t+=i,a=e.next(t);return t>=ru?1/0:t}function l7(e,t=100,i){const a=i({...e,keyframes:[0,t]}),o=Math.min(_m(a),ru);return{type:"keyframes",ease:l=>a.next(o*l).value/t,duration:Jn(o)}}const c7=5;function A5(e,t,i){const a=Math.max(t-c7,0);return zm(i-e(a),t-a)}const nt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},kp=.001;function u7({duration:e=nt.duration,bounce:t=nt.bounce,velocity:i=nt.velocity,mass:a=nt.mass}){let o,l,u=1-t;u=ni(nt.minDamping,nt.maxDamping,u),e=ni(nt.minDuration,nt.maxDuration,Jn(e)),u<1?(o=m=>{const g=m*u,x=g*e,y=g-i,v=wh(m,u),S=Math.exp(-x);return kp-y/v*S},l=m=>{const x=m*u*e,y=x*i+i,v=Math.pow(u,2)*Math.pow(m,2)*e,S=Math.exp(-x),j=wh(Math.pow(m,2),u);return(-o(m)+kp>0?-1:1)*((y-v)*S)/j}):(o=m=>{const g=Math.exp(-m*e),x=(m-i)*e+1;return-kp+g*x},l=m=>{const g=Math.exp(-m*e),x=(i-m)*(e*e);return g*x});const f=5/e,p=f7(o,l,f);if(e=Zn(e),isNaN(p))return{stiffness:nt.stiffness,damping:nt.damping,duration:e};{const m=Math.pow(p,2)*a;return{stiffness:m,damping:u*2*Math.sqrt(a*m),duration:e}}}const d7=12;function f7(e,t,i){let a=i;for(let o=1;o<d7;o++)a=a-e(a)/t(a);return a}function wh(e,t){return e*Math.sqrt(1-t*t)}const p7=["duration","bounce"],h7=["stiffness","damping","mass"];function Ib(e,t){return t.some(i=>e[i]!==void 0)}function m7(e){let t={velocity:nt.velocity,stiffness:nt.stiffness,damping:nt.damping,mass:nt.mass,isResolvedFromDuration:!1,...e};if(!Ib(e,h7)&&Ib(e,p7))if(e.visualDuration){const i=e.visualDuration,a=2*Math.PI/(i*1.2),o=a*a,l=2*ni(.05,1,1-(e.bounce||0))*Math.sqrt(o);t={...t,mass:nt.mass,stiffness:o,damping:l}}else{const i=u7(e);t={...t,...i,mass:nt.mass},t.isResolvedFromDuration=!0}return t}function su(e=nt.visualDuration,t=nt.bounce){const i=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:a,restDelta:o}=i;const l=i.keyframes[0],u=i.keyframes[i.keyframes.length-1],f={done:!1,value:l},{stiffness:p,damping:m,mass:g,duration:x,velocity:y,isResolvedFromDuration:v}=m7({...i,velocity:-Jn(i.velocity||0)}),S=y||0,j=m/(2*Math.sqrt(p*g)),A=u-l,k=Jn(Math.sqrt(p/g)),R=Math.abs(A)<5;a||(a=R?nt.restSpeed.granular:nt.restSpeed.default),o||(o=R?nt.restDelta.granular:nt.restDelta.default);let E;if(j<1){const M=wh(k,j);E=N=>{const P=Math.exp(-j*k*N);return u-P*((S+j*k*A)/M*Math.sin(M*N)+A*Math.cos(M*N))}}else if(j===1)E=M=>u-Math.exp(-k*M)*(A+(S+k*A)*M);else{const M=k*Math.sqrt(j*j-1);E=N=>{const P=Math.exp(-j*k*N),U=Math.min(M*N,300);return u-P*((S+j*k*A)*Math.sinh(U)+M*A*Math.cosh(U))/M}}const B={calculatedDuration:v&&x||null,next:M=>{const N=E(M);if(v)f.done=M>=x;else{let P=M===0?S:0;j<1&&(P=M===0?Zn(S):A5(E,M,N));const U=Math.abs(P)<=a,G=Math.abs(u-N)<=o;f.done=U&&G}return f.value=f.done?u:N,f},toString:()=>{const M=Math.min(_m(B),ru),N=E5(P=>B.next(M*P).value,M,30);return M+"ms "+N},toTransition:()=>{}};return B}su.applyToOptions=e=>{const t=l7(e,100,su);return e.ease=t.ease,e.duration=Zn(t.duration),e.type="keyframes",e};function Sh({keyframes:e,velocity:t=0,power:i=.8,timeConstant:a=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:f,max:p,restDelta:m=.5,restSpeed:g}){const x=e[0],y={done:!1,value:x},v=U=>f!==void 0&&U<f||p!==void 0&&U>p,S=U=>f===void 0?p:p===void 0||Math.abs(f-U)<Math.abs(p-U)?f:p;let j=i*t;const A=x+j,k=u===void 0?A:u(A);k!==A&&(j=k-x);const R=U=>-j*Math.exp(-U/a),E=U=>k+R(U),B=U=>{const G=R(U),Y=E(U);y.done=Math.abs(G)<=m,y.value=y.done?k:Y};let M,N;const P=U=>{v(y.value)&&(M=U,N=su({keyframes:[y.value,S(y.value)],velocity:A5(E,U,y.value),damping:o,stiffness:l,restDelta:m,restSpeed:g}))};return P(0),{calculatedDuration:null,next:U=>{let G=!1;return!N&&M===void 0&&(G=!0,B(U),P(U)),M!==void 0&&U>=M?N.next(U-M):(!G&&B(U),y)}}}function g7(e,t,i){const a=[],o=i||Ci.mix||C5,l=e.length-1;for(let u=0;u<l;u++){let f=o(e[u],e[u+1]);if(t){const p=Array.isArray(t)?t[u]||Yt:t;f=nl(p,f)}a.push(f)}return a}function $m(e,t,{clamp:i=!0,ease:a,mixer:o}={}){const l=e.length;if(Ho(l===t.length),l===1)return()=>t[0];if(l===2&&t[0]===t[1])return()=>t[1];const u=e[0]===e[1];e[0]>e[l-1]&&(e=[...e].reverse(),t=[...t].reverse());const f=g7(t,a,o),p=f.length,m=g=>{if(u&&g<e[0])return t[0];let x=0;if(p>1)for(;x<e.length-2&&!(g<e[x+1]);x++);const y=qr(e[x],e[x+1],g);return f[x](y)};return i?g=>m(ni(e[0],e[l-1],g)):m}function b7(e,t){const i=e[e.length-1];for(let a=1;a<=t;a++){const o=qr(0,t,a);e.push(Je(i,1,o))}}function M5(e){const t=[0];return b7(t,e.length-1),t}function x7(e,t){return e.map(i=>i*t)}function y7(e,t){return e.map(()=>t||Om).splice(0,e.length-1)}function Eo({duration:e=300,keyframes:t,times:i,ease:a="easeInOut"}){const o=LT(a)?a.map(_b):_b(a),l={done:!1,value:t[0]},u=x7(i&&i.length===t.length?i:M5(t),e),f=$m(u,t,{ease:Array.isArray(o)?o:y7(t,o)});return{calculatedDuration:e,next:p=>(l.value=f(p),l.done=p>=e,l)}}const v7=e=>e!==null;function Hm(e,{repeat:t,repeatType:i="loop"},a,o=1){const l=e.filter(v7),f=o<0||t&&i!=="loop"&&t%2===1?0:l.length-1;return!f||a===void 0?l[f]:a}const w7={decay:Sh,inertia:Sh,tween:Eo,keyframes:Eo,spring:su};function z5(e){typeof e.type=="string"&&(e.type=w7[e.type])}class Gm{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,i){return this.finished.then(t,i)}}const S7=e=>e/100;class Um extends Gm{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var a,o;const{motionValue:i}=this.options;i&&i.updatedAt!==qt.now()&&this.tick(qt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(a=this.options).onStop)==null||o.call(a))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;z5(t);const{type:i=Eo,repeat:a=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=t;let{keyframes:f}=t;const p=i||Eo;p!==Eo&&typeof f[0]!="number"&&(this.mixKeyframes=nl(S7,C5(f[0],f[1])),f=[0,100]);const m=p({...t,keyframes:f});l==="mirror"&&(this.mirroredGenerator=p({...t,keyframes:[...f].reverse(),velocity:-u})),m.calculatedDuration===null&&(m.calculatedDuration=_m(m));const{calculatedDuration:g}=m;this.calculatedDuration=g,this.resolvedDuration=g+o,this.totalDuration=this.resolvedDuration*(a+1)-o,this.generator=m}updateTime(t){const i=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(t,i=!1){const{generator:a,totalDuration:o,mixKeyframes:l,mirroredGenerator:u,resolvedDuration:f,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:m=0,keyframes:g,repeat:x,repeatType:y,repeatDelay:v,type:S,onUpdate:j,finalKeyframe:A}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-o/this.speed,this.startTime)),i?this.currentTime=t:this.updateTime(t);const k=this.currentTime-m*(this.playbackSpeed>=0?1:-1),R=this.playbackSpeed>=0?k<0:k>o;this.currentTime=Math.max(k,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let E=this.currentTime,B=a;if(x){const U=Math.min(this.currentTime,o)/f;let G=Math.floor(U),Y=U%1;!Y&&U>=1&&(Y=1),Y===1&&G--,G=Math.min(G,x+1),!!(G%2)&&(y==="reverse"?(Y=1-Y,v&&(Y-=v/f)):y==="mirror"&&(B=u)),E=ni(0,1,Y)*f}const M=R?{done:!1,value:g[0]}:B.next(E);l&&(M.value=l(M.value));let{done:N}=M;!R&&p!==null&&(N=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&N);return P&&S!==Sh&&(M.value=Hm(g,this.options,A,this.speed)),j&&j(M.value),P&&this.finish(),M}then(t,i){return this.finished.then(t,i)}get duration(){return Jn(this.calculatedDuration)}get time(){return Jn(this.currentTime)}set time(t){var i;t=Zn(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(i=this.driver)==null||i.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(qt.now());const i=this.playbackSpeed!==t;this.playbackSpeed=t,i&&(this.time=Jn(this.currentTime))}play(){var o,l;if(this.isStopped)return;const{driver:t=o7,startTime:i}=this.options;this.driver||(this.driver=t(u=>this.tick(u))),(l=(o=this.options).onPlay)==null||l.call(o);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=i??a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(qt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(t=this.options).onComplete)==null||i.call(t)}cancel(){var t,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(t=this.options).onCancel)==null||i.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),t.observe(this)}}function T7(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const za=e=>e*180/Math.PI,Th=e=>{const t=za(Math.atan2(e[1],e[0]));return jh(t)},j7={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Th,rotateZ:Th,skewX:e=>za(Math.atan(e[1])),skewY:e=>za(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},jh=e=>(e=e%360,e<0&&(e+=360),e),Fb=Th,qb=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Kb=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),k7={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:qb,scaleY:Kb,scale:e=>(qb(e)+Kb(e))/2,rotateX:e=>jh(za(Math.atan2(e[6],e[5]))),rotateY:e=>jh(za(Math.atan2(-e[2],e[0]))),rotateZ:Fb,rotate:Fb,skewX:e=>za(Math.atan(e[4])),skewY:e=>za(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function kh(e){return e.includes("scale")?1:0}function Ch(e,t){if(!e||e==="none")return kh(t);const i=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,o;if(i)a=k7,o=i;else{const f=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=j7,o=f}if(!o)return kh(t);const l=a[t],u=o[1].split(",").map(E7);return typeof l=="function"?l(u):u[l]}const C7=(e,t)=>{const{transform:i="none"}=getComputedStyle(e);return Ch(i,t)};function E7(e){return parseFloat(e.trim())}const ls=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],cs=new Set(ls),Yb=e=>e===os||e===ge,A7=new Set(["x","y","z"]),M7=ls.filter(e=>!A7.has(e));function z7(e){const t=[];return M7.forEach(i=>{const a=e.getValue(i);a!==void 0&&(t.push([i,a.get()]),a.set(i.startsWith("scale")?1:0))}),t}const La={width:({x:e},{paddingLeft:t="0",paddingRight:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),height:({y:e},{paddingTop:t="0",paddingBottom:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Ch(t,"x"),y:(e,{transform:t})=>Ch(t,"y")};La.translateX=La.x;La.translateY=La.y;const Oa=new Set;let Eh=!1,Ah=!1,Mh=!1;function R5(){if(Ah){const e=Array.from(Oa).filter(a=>a.needsMeasurement),t=new Set(e.map(a=>a.element)),i=new Map;t.forEach(a=>{const o=z7(a);o.length&&(i.set(a,o),a.render())}),e.forEach(a=>a.measureInitialState()),t.forEach(a=>{a.render();const o=i.get(a);o&&o.forEach(([l,u])=>{var f;(f=a.getValue(l))==null||f.set(u)})}),e.forEach(a=>a.measureEndState()),e.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Ah=!1,Eh=!1,Oa.forEach(e=>e.complete(Mh)),Oa.clear()}function L5(){Oa.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Ah=!0)})}function R7(){Mh=!0,L5(),R5(),Mh=!1}class Im{constructor(t,i,a,o,l,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=i,this.name=a,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(Oa.add(this),Eh||(Eh=!0,Ve.read(L5),Ve.resolveKeyframes(R5))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:i,element:a,motionValue:o}=this;if(t[0]===null){const l=o==null?void 0:o.get(),u=t[t.length-1];if(l!==void 0)t[0]=l;else if(a&&i){const f=a.readValue(i,u);f!=null&&(t[0]=f)}t[0]===void 0&&(t[0]=u),o&&l===void 0&&o.set(t[0])}T7(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),Oa.delete(this)}cancel(){this.state==="scheduled"&&(Oa.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const L7=e=>e.startsWith("--");function O7(e,t,i){L7(t)?e.style.setProperty(t,i):e.style[t]=i}const O5=Am(()=>window.ScrollTimeline!==void 0),D7={};function P7(e,t){const i=Am(e);return()=>D7[t]??i()}const D5=P7(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),To=([e,t,i,a])=>`cubic-bezier(${e}, ${t}, ${i}, ${a})`,Xb={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:To([0,.65,.55,1]),circOut:To([.55,0,1,.45]),backIn:To([.31,.01,.66,-.59]),backOut:To([.33,1.53,.69,.99])};function P5(e,t){if(e)return typeof e=="function"?D5()?E5(e,t):"ease-out":b5(e)?To(e):Array.isArray(e)?e.map(i=>P5(i,t)||Xb.easeOut):Xb[e]}function N7(e,t,i,{delay:a=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:f="easeOut",times:p}={},m=void 0){const g={[t]:i};p&&(g.offset=p);const x=P5(f,o);Array.isArray(x)&&(g.easing=x);const y={delay:a,duration:o,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"};return m&&(y.pseudoElement=m),e.animate(g,y)}function N5(e){return typeof e=="function"&&"applyToOptions"in e}function V7({type:e,...t}){return N5(e)&&D5()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class B7 extends Gm{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:i,name:a,keyframes:o,pseudoElement:l,allowFlatten:u=!1,finalKeyframe:f,onComplete:p}=t;this.isPseudoElement=!!l,this.allowFlatten=u,this.options=t,Ho(typeof t.type!="string");const m=V7(t);this.animation=N7(i,a,o,m,l),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const g=Hm(o,this.options,f,this.speed);this.updateMotionValue?this.updateMotionValue(g):O7(i,a,g),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,i;(i=(t=this.animation).finish)==null||i.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,i;this.isPseudoElement||(i=(t=this.animation).commitStyles)==null||i.call(t)}get duration(){var i,a;const t=((a=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:a.call(i).duration)||0;return Jn(Number(t))}get time(){return Jn(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=Zn(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:i}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&O5()?(this.animation.timeline=t,Yt):i(this)}}const V5={anticipate:h5,backInOut:p5,circInOut:g5};function _7(e){return e in V5}function $7(e){typeof e.ease=="string"&&_7(e.ease)&&(e.ease=V5[e.ease])}const Qb=10;class H7 extends B7{constructor(t){$7(t),z5(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:i,onUpdate:a,onComplete:o,element:l,...u}=this.options;if(!i)return;if(t!==void 0){i.set(t);return}const f=new Um({...u,autoplay:!1}),p=Zn(this.finishedTime??this.time);i.setWithVelocity(f.sample(p-Qb).value,f.sample(p).value,Qb),f.stop()}}const Wb=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(na.test(e)||e==="0")&&!e.startsWith("url("));function G7(e){const t=e[0];if(e.length===1)return!0;for(let i=0;i<e.length;i++)if(e[i]!==t)return!0}function U7(e,t,i,a){const o=e[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const l=e[e.length-1],u=Wb(o,t),f=Wb(l,t);return!u||!f?!1:G7(e)||(i==="spring"||N5(i))&&a}function zh(e){e.duration=0,e.type}const I7=new Set(["opacity","clipPath","filter","transform"]),F7=Am(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function q7(e){var g;const{motionValue:t,name:i,repeatDelay:a,repeatType:o,damping:l,type:u}=e;if(!(((g=t==null?void 0:t.owner)==null?void 0:g.current)instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:m}=t.owner.getProps();return F7()&&i&&I7.has(i)&&(i!=="transform"||!m)&&!p&&!a&&o!=="mirror"&&l!==0&&u!=="inertia"}const K7=40;class Y7 extends Gm{constructor({autoplay:t=!0,delay:i=0,type:a="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",keyframes:f,name:p,motionValue:m,element:g,...x}){var S;super(),this.stop=()=>{var j,A;this._animation&&(this._animation.stop(),(j=this.stopTimeline)==null||j.call(this)),(A=this.keyframeResolver)==null||A.cancel()},this.createdAt=qt.now();const y={autoplay:t,delay:i,type:a,repeat:o,repeatDelay:l,repeatType:u,name:p,motionValue:m,element:g,...x},v=(g==null?void 0:g.KeyframeResolver)||Im;this.keyframeResolver=new v(f,(j,A,k)=>this.onKeyframesResolved(j,A,y,!k),p,m,g),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(t,i,a,o){this.keyframeResolver=void 0;const{name:l,type:u,velocity:f,delay:p,isHandoff:m,onUpdate:g}=a;this.resolvedAt=qt.now(),U7(t,l,u,f)||((Ci.instantAnimations||!p)&&(g==null||g(Hm(t,a,i))),t[0]=t[t.length-1],zh(a),a.repeat=0);const y={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>K7?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...a,keyframes:t},v=!m&&q7(y)?new H7({...y,element:y.motionValue.owner.current}):new Um(y);v.finished.then(()=>this.notifyFinished()).catch(Yt),this.pendingTimeline&&(this.stopTimeline=v.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=v}get finished(){return this._animation?this.animation.finished:this._finished}then(t,i){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),R7()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const X7=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Q7(e){const t=X7.exec(e);if(!t)return[,];const[,i,a,o]=t;return[`--${i??a}`,o]}function B5(e,t,i=1){const[a,o]=Q7(e);if(!a)return;const l=window.getComputedStyle(t).getPropertyValue(a);if(l){const u=l.trim();return o5(u)?parseFloat(u):u}return Pm(o)?B5(o,t,i+1):o}function Fm(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const _5=new Set(["width","height","top","left","right","bottom",...ls]),W7={test:e=>e==="auto",parse:e=>e},$5=e=>t=>t.test(e),H5=[os,ge,ei,Zi,FT,IT,W7],Zb=e=>H5.find($5(e));function Z7(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||c5(e):!0}const J7=new Set(["brightness","contrast","saturate","opacity"]);function ej(e){const[t,i]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[a]=i.match(Nm)||[];if(!a)return e;const o=i.replace(a,"");let l=J7.has(t)?1:0;return a!==i&&(l*=100),t+"("+l+o+")"}const tj=/\b([a-z-]*)\(.*?\)/gu,Rh={...na,getAnimatableNone:e=>{const t=e.match(tj);return t?t.map(ej).join(" "):e}},Jb={...os,transform:Math.round},nj={rotate:Zi,rotateX:Zi,rotateY:Zi,rotateZ:Zi,scale:jc,scaleX:jc,scaleY:jc,scaleZ:jc,skew:Zi,skewX:Zi,skewY:Zi,distance:ge,translateX:ge,translateY:ge,translateZ:ge,x:ge,y:ge,z:ge,perspective:ge,transformPerspective:ge,opacity:Go,originX:$b,originY:$b,originZ:ge},qm={borderWidth:ge,borderTopWidth:ge,borderRightWidth:ge,borderBottomWidth:ge,borderLeftWidth:ge,borderRadius:ge,radius:ge,borderTopLeftRadius:ge,borderTopRightRadius:ge,borderBottomRightRadius:ge,borderBottomLeftRadius:ge,width:ge,maxWidth:ge,height:ge,maxHeight:ge,top:ge,right:ge,bottom:ge,left:ge,padding:ge,paddingTop:ge,paddingRight:ge,paddingBottom:ge,paddingLeft:ge,margin:ge,marginTop:ge,marginRight:ge,marginBottom:ge,marginLeft:ge,backgroundPositionX:ge,backgroundPositionY:ge,...nj,zIndex:Jb,fillOpacity:Go,strokeOpacity:Go,numOctaves:Jb},ij={...qm,color:lt,backgroundColor:lt,outlineColor:lt,fill:lt,stroke:lt,borderColor:lt,borderTopColor:lt,borderRightColor:lt,borderBottomColor:lt,borderLeftColor:lt,filter:Rh,WebkitFilter:Rh},G5=e=>ij[e];function U5(e,t){let i=G5(e);return i!==Rh&&(i=na),i.getAnimatableNone?i.getAnimatableNone(t):void 0}const aj=new Set(["auto","none","0"]);function rj(e,t,i){let a=0,o;for(;a<e.length&&!o;){const l=e[a];typeof l=="string"&&!aj.has(l)&&Uo(l).values.length&&(o=e[a]),a++}if(o&&i)for(const l of t)e[l]=U5(i,o)}class sj extends Im{constructor(t,i,a,o,l){super(t,i,a,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:i,name:a}=this;if(!i||!i.current)return;super.readKeyframes();for(let p=0;p<t.length;p++){let m=t[p];if(typeof m=="string"&&(m=m.trim(),Pm(m))){const g=B5(m,i.current);g!==void 0&&(t[p]=g),p===t.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!_5.has(a)||t.length!==2)return;const[o,l]=t,u=Zb(o),f=Zb(l);if(u!==f)if(Yb(u)&&Yb(f))for(let p=0;p<t.length;p++){const m=t[p];typeof m=="string"&&(t[p]=parseFloat(m))}else La[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:i}=this,a=[];for(let o=0;o<t.length;o++)(t[o]===null||Z7(t[o]))&&a.push(o);a.length&&rj(t,a,i)}measureInitialState(){const{element:t,unresolvedKeyframes:i,name:a}=this;if(!t||!t.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=La[a](t.measureViewportBox(),window.getComputedStyle(t.current)),i[0]=this.measuredOrigin;const o=i[i.length-1];o!==void 0&&t.getValue(a,o).jump(o,!1)}measureEndState(){var f;const{element:t,name:i,unresolvedKeyframes:a}=this;if(!t||!t.current)return;const o=t.getValue(i);o&&o.jump(this.measuredOrigin,!1);const l=a.length-1,u=a[l];a[l]=La[i](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),(f=this.removedTransforms)!=null&&f.length&&this.removedTransforms.forEach(([p,m])=>{t.getValue(p).set(m)}),this.resolveNoneKeyframes()}}function I5(e,t,i){if(e instanceof EventTarget)return[e];if(typeof e=="string"){const o=document.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}const F5=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function Km(e){return l5(e)&&"offsetHeight"in e}const ex=30,oj=e=>!isNaN(parseFloat(e)),Ao={current:void 0};class lj{constructor(t,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var l;const o=qt.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((l=this.events.change)==null||l.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=i.owner}setCurrent(t){this.current=t,this.updatedAt=qt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=oj(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,i){this.events[t]||(this.events[t]=new Mm);const a=this.events[t].add(i);return t==="change"?()=>{a(),Ve.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,i){this.passiveEffect=t,this.stopPassiveEffect=i}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,i,a){this.set(i),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-a}jump(t,i=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return Ao.current&&Ao.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=qt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>ex)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,ex);return zm(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(t){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=t(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,i;(t=this.dependents)==null||t.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ln(e,t){return new lj(e,t)}const{schedule:Ym}=x5(queueMicrotask,!1),Rn={x:!1,y:!1};function q5(){return Rn.x||Rn.y}function cj(e){return e==="x"||e==="y"?Rn[e]?null:(Rn[e]=!0,()=>{Rn[e]=!1}):Rn.x||Rn.y?null:(Rn.x=Rn.y=!0,()=>{Rn.x=Rn.y=!1})}function K5(e,t){const i=I5(e),a=new AbortController,o={passive:!0,...t,signal:a.signal};return[i,o,()=>a.abort()]}function tx(e){return!(e.pointerType==="touch"||q5())}function uj(e,t,i={}){const[a,o,l]=K5(e,i),u=f=>{if(!tx(f))return;const{target:p}=f,m=t(p,f);if(typeof m!="function"||!p)return;const g=x=>{tx(x)&&(m(x),p.removeEventListener("pointerleave",g))};p.addEventListener("pointerleave",g,o)};return a.forEach(f=>{f.addEventListener("pointerenter",u,o)}),l}const Y5=(e,t)=>t?e===t?!0:Y5(e,t.parentElement):!1,Xm=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,dj=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function fj(e){return dj.has(e.tagName)||e.tabIndex!==-1}const Ic=new WeakSet;function nx(e){return t=>{t.key==="Enter"&&e(t)}}function Cp(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const pj=(e,t)=>{const i=e.currentTarget;if(!i)return;const a=nx(()=>{if(Ic.has(i))return;Cp(i,"down");const o=nx(()=>{Cp(i,"up")}),l=()=>Cp(i,"cancel");i.addEventListener("keyup",o,t),i.addEventListener("blur",l,t)});i.addEventListener("keydown",a,t),i.addEventListener("blur",()=>i.removeEventListener("keydown",a),t)};function ix(e){return Xm(e)&&!q5()}function hj(e,t,i={}){const[a,o,l]=K5(e,i),u=f=>{const p=f.currentTarget;if(!ix(f))return;Ic.add(p);const m=t(p,f),g=(v,S)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",y),Ic.has(p)&&Ic.delete(p),ix(v)&&typeof m=="function"&&m(v,{success:S})},x=v=>{g(v,p===window||p===document||i.useGlobalTarget||Y5(p,v.target))},y=v=>{g(v,!1)};window.addEventListener("pointerup",x,o),window.addEventListener("pointercancel",y,o)};return a.forEach(f=>{(i.useGlobalTarget?window:f).addEventListener("pointerdown",u,o),Km(f)&&(f.addEventListener("focus",m=>pj(m,o)),!fj(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),l}function Qm(e){return l5(e)&&"ownerSVGElement"in e}const Fc=new WeakMap;let Ji;const X5=(e,t,i)=>(a,o)=>o&&o[0]?o[0][e+"Size"]:Qm(a)&&"getBBox"in a?a.getBBox()[t]:a[i],mj=X5("inline","width","offsetWidth"),gj=X5("block","height","offsetHeight");function bj({target:e,borderBoxSize:t}){var i;(i=Fc.get(e))==null||i.forEach(a=>{a(e,{get width(){return mj(e,t)},get height(){return gj(e,t)}})})}function xj(e){e.forEach(bj)}function yj(){typeof ResizeObserver>"u"||(Ji=new ResizeObserver(xj))}function vj(e,t){Ji||yj();const i=I5(e);return i.forEach(a=>{let o=Fc.get(a);o||(o=new Set,Fc.set(a,o)),o.add(t),Ji==null||Ji.observe(a)}),()=>{i.forEach(a=>{const o=Fc.get(a);o==null||o.delete(t),o!=null&&o.size||Ji==null||Ji.unobserve(a)})}}const qc=new Set;let Pr;function wj(){Pr=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};qc.forEach(t=>t(e))},window.addEventListener("resize",Pr)}function Sj(e){return qc.add(e),Pr||wj(),()=>{qc.delete(e),!qc.size&&typeof Pr=="function"&&(window.removeEventListener("resize",Pr),Pr=void 0)}}function Tj(e,t){return typeof e=="function"?Sj(e):vj(e,t)}function Q5(e,t){let i;const a=()=>{const{currentTime:o}=t,u=(o===null?0:o.value)/100;i!==u&&e(u),i=u};return Ve.preUpdate(a,!0),()=>Pn(a)}function jj(e){return Qm(e)&&e.tagName==="svg"}function kj(...e){const t=!Array.isArray(e[0]),i=t?0:-1,a=e[0+i],o=e[1+i],l=e[2+i],u=e[3+i],f=$m(o,l,u);return t?f(a):f}const Pt=e=>!!(e&&e.getVelocity),Cj=[...H5,lt,na],Ej=e=>Cj.find($5(e)),Vu=C.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Aj extends C.Component{getSnapshotBeforeUpdate(t){const i=this.props.childRef.current;if(i&&t.isPresent&&!this.props.isPresent){const a=i.offsetParent,o=Km(a)&&a.offsetWidth||0,l=this.props.sizeRef.current;l.height=i.offsetHeight||0,l.width=i.offsetWidth||0,l.top=i.offsetTop,l.left=i.offsetLeft,l.right=o-l.width-l.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Mj({children:e,isPresent:t,anchorX:i,root:a}){const o=C.useId(),l=C.useRef(null),u=C.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:f}=C.useContext(Vu);return C.useInsertionEffect(()=>{const{width:p,height:m,top:g,left:x,right:y}=u.current;if(t||!l.current||!p||!m)return;const v=i==="left"?`left: ${x}`:`right: ${y}`;l.current.dataset.motionPopId=o;const S=document.createElement("style");f&&(S.nonce=f);const j=a??document.head;return j.appendChild(S),S.sheet&&S.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${m}px !important;
            ${v}px !important;
            top: ${g}px !important;
          }
        `),()=>{j.contains(S)&&j.removeChild(S)}},[t]),d.jsx(Aj,{isPresent:t,childRef:l,sizeRef:u,children:C.cloneElement(e,{ref:l})})}const zj=({children:e,initial:t,isPresent:i,onExitComplete:a,custom:o,presenceAffectsLayout:l,mode:u,anchorX:f,root:p})=>{const m=ss(Rj),g=C.useId();let x=!0,y=C.useMemo(()=>(x=!1,{id:g,initial:t,isPresent:i,custom:o,onExitComplete:v=>{m.set(v,!0);for(const S of m.values())if(!S)return;a&&a()},register:v=>(m.set(v,!1),()=>m.delete(v))}),[i,m,a]);return l&&x&&(y={...y}),C.useMemo(()=>{m.forEach((v,S)=>m.set(S,!1))},[i]),C.useEffect(()=>{!i&&!m.size&&a&&a()},[i]),u==="popLayout"&&(e=d.jsx(Mj,{isPresent:i,anchorX:f,root:p,children:e})),d.jsx(Pu.Provider,{value:y,children:e})};function Rj(){return new Map}function W5(e=!0){const t=C.useContext(Pu);if(t===null)return[!0,null];const{isPresent:i,onExitComplete:a,register:o}=t,l=C.useId();C.useEffect(()=>{if(e)return o(l)},[e]);const u=C.useCallback(()=>e&&a&&a(l),[l,a,e]);return!i&&a?[!1,u]:[!0]}const kc=e=>e.key||"";function ax(e){const t=[];return C.Children.forEach(e,i=>{C.isValidElement(i)&&t.push(i)}),t}const Z5=({children:e,custom:t,initial:i=!0,onExitComplete:a,presenceAffectsLayout:o=!0,mode:l="sync",propagate:u=!1,anchorX:f="left",root:p})=>{const[m,g]=W5(u),x=C.useMemo(()=>ax(e),[e]),y=u&&!m?[]:x.map(kc),v=C.useRef(!0),S=C.useRef(x),j=ss(()=>new Map),[A,k]=C.useState(x),[R,E]=C.useState(x);Du(()=>{v.current=!1,S.current=x;for(let N=0;N<R.length;N++){const P=kc(R[N]);y.includes(P)?j.delete(P):j.get(P)!==!0&&j.set(P,!1)}},[R,y.length,y.join("-")]);const B=[];if(x!==A){let N=[...x];for(let P=0;P<R.length;P++){const U=R[P],G=kc(U);y.includes(G)||(N.splice(P,0,U),B.push(U))}return l==="wait"&&B.length&&(N=B),E(ax(N)),k(x),null}const{forceRender:M}=C.useContext(jm);return d.jsx(d.Fragment,{children:R.map(N=>{const P=kc(N),U=u&&!m?!1:x===R||y.includes(P),G=()=>{if(j.has(P))j.set(P,!0);else return;let Y=!0;j.forEach(Z=>{Z||(Y=!1)}),Y&&(M==null||M(),E(S.current),u&&(g==null||g()),a&&a())};return d.jsx(zj,{isPresent:U,initial:!v.current||i?void 0:!1,custom:t,presenceAffectsLayout:o,mode:l,root:p,onExitComplete:U?void 0:G,anchorX:f,children:N},P)})})},J5=C.createContext({strict:!1}),rx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Kr={};for(const e in rx)Kr[e]={isEnabled:t=>rx[e].some(i=>!!t[i])};function Lj(e){for(const t in e)Kr[t]={...Kr[t],...e[t]}}const Oj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ou(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Oj.has(e)}let e4=e=>!ou(e);function Dj(e){typeof e=="function"&&(e4=t=>t.startsWith("on")?!ou(t):e(t))}try{Dj(require("@emotion/is-prop-valid").default)}catch{}function Pj(e,t,i){const a={};for(const o in e)o==="values"&&typeof e.values=="object"||(e4(o)||i===!0&&ou(o)||!t&&!ou(o)||e.draggable&&o.startsWith("onDrag"))&&(a[o]=e[o]);return a}const Bu=C.createContext({});function _u(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Io(e){return typeof e=="string"||Array.isArray(e)}const Wm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Zm=["initial",...Wm];function $u(e){return _u(e.animate)||Zm.some(t=>Io(e[t]))}function t4(e){return!!($u(e)||e.variants)}function Nj(e,t){if($u(e)){const{initial:i,animate:a}=e;return{initial:i===!1||Io(i)?i:void 0,animate:Io(a)?a:void 0}}return e.inherit!==!1?t:{}}function Vj(e){const{initial:t,animate:i}=Nj(e,C.useContext(Bu));return C.useMemo(()=>({initial:t,animate:i}),[sx(t),sx(i)])}function sx(e){return Array.isArray(e)?e.join(" "):e}const Fo={};function Bj(e){for(const t in e)Fo[t]=e[t],Dm(t)&&(Fo[t].isCSSVariable=!0)}function n4(e,{layout:t,layoutId:i}){return cs.has(e)||e.startsWith("origin")||(t||i!==void 0)&&(!!Fo[e]||e==="opacity")}const _j={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},$j=ls.length;function Hj(e,t,i){let a="",o=!0;for(let l=0;l<$j;l++){const u=ls[l],f=e[u];if(f===void 0)continue;let p=!0;if(typeof f=="number"?p=f===(u.startsWith("scale")?1:0):p=parseFloat(f)===0,!p||i){const m=F5(f,qm[u]);if(!p){o=!1;const g=_j[u]||u;a+=`${g}(${m}) `}i&&(t[u]=m)}}return a=a.trim(),i?a=i(t,o?"":a):o&&(a="none"),a}function Jm(e,t,i){const{style:a,vars:o,transformOrigin:l}=e;let u=!1,f=!1;for(const p in t){const m=t[p];if(cs.has(p)){u=!0;continue}else if(Dm(p)){o[p]=m;continue}else{const g=F5(m,qm[p]);p.startsWith("origin")?(f=!0,l[p]=g):a[p]=g}}if(t.transform||(u||i?a.transform=Hj(t,e.transform,i):a.transform&&(a.transform="none")),f){const{originX:p="50%",originY:m="50%",originZ:g=0}=l;a.transformOrigin=`${p} ${m} ${g}`}}const eg=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function i4(e,t,i){for(const a in t)!Pt(t[a])&&!n4(a,i)&&(e[a]=t[a])}function Gj({transformTemplate:e},t){return C.useMemo(()=>{const i=eg();return Jm(i,t,e),Object.assign({},i.vars,i.style)},[t])}function Uj(e,t){const i=e.style||{},a={};return i4(a,i,e),Object.assign(a,Gj(e,t)),a}function Ij(e,t){const i={},a=Uj(e,t);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=a,i}const Fj={offset:"stroke-dashoffset",array:"stroke-dasharray"},qj={offset:"strokeDashoffset",array:"strokeDasharray"};function Kj(e,t,i=1,a=0,o=!0){e.pathLength=1;const l=o?Fj:qj;e[l.offset]=ge.transform(-a);const u=ge.transform(t),f=ge.transform(i);e[l.array]=`${u} ${f}`}function a4(e,{attrX:t,attrY:i,attrScale:a,pathLength:o,pathSpacing:l=1,pathOffset:u=0,...f},p,m,g){if(Jm(e,f,m),p){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:x,style:y}=e;x.transform&&(y.transform=x.transform,delete x.transform),(y.transform||x.transformOrigin)&&(y.transformOrigin=x.transformOrigin??"50% 50%",delete x.transformOrigin),y.transform&&(y.transformBox=(g==null?void 0:g.transformBox)??"fill-box",delete x.transformBox),t!==void 0&&(x.x=t),i!==void 0&&(x.y=i),a!==void 0&&(x.scale=a),o!==void 0&&Kj(x,o,l,u,!1)}const r4=()=>({...eg(),attrs:{}}),s4=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Yj(e,t,i,a){const o=C.useMemo(()=>{const l=r4();return a4(l,t,s4(a),e.transformTemplate,e.style),{...l.attrs,style:{...l.style}}},[t]);if(e.style){const l={};i4(l,e.style,e),o.style={...l,...o.style}}return o}const Xj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function tg(e){return typeof e!="string"||e.includes("-")?!1:!!(Xj.indexOf(e)>-1||/[A-Z]/u.test(e))}function Qj(e,t,i,{latestValues:a},o,l=!1){const f=(tg(e)?Yj:Ij)(t,a,o,e),p=Pj(t,typeof e=="string",l),m=e!==C.Fragment?{...p,...f,ref:i}:{},{children:g}=t,x=C.useMemo(()=>Pt(g)?g.get():g,[g]);return C.createElement(e,{...m,children:x})}function ox(e){const t=[{},{}];return e==null||e.values.forEach((i,a)=>{t[0][a]=i.get(),t[1][a]=i.getVelocity()}),t}function ng(e,t,i,a){if(typeof t=="function"){const[o,l]=ox(a);t=t(i!==void 0?i:e.custom,o,l)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[o,l]=ox(a);t=t(i!==void 0?i:e.custom,o,l)}return t}function Kc(e){return Pt(e)?e.get():e}function Wj({scrapeMotionValuesFromProps:e,createRenderState:t},i,a,o){return{latestValues:Zj(i,a,o,e),renderState:t()}}function Zj(e,t,i,a){const o={},l=a(e,{});for(const y in l)o[y]=Kc(l[y]);let{initial:u,animate:f}=e;const p=$u(e),m=t4(e);t&&m&&!p&&e.inherit!==!1&&(u===void 0&&(u=t.initial),f===void 0&&(f=t.animate));let g=i?i.initial===!1:!1;g=g||u===!1;const x=g?f:u;if(x&&typeof x!="boolean"&&!_u(x)){const y=Array.isArray(x)?x:[x];for(let v=0;v<y.length;v++){const S=ng(e,y[v]);if(S){const{transitionEnd:j,transition:A,...k}=S;for(const R in k){let E=k[R];if(Array.isArray(E)){const B=g?E.length-1:0;E=E[B]}E!==null&&(o[R]=E)}for(const R in j)o[R]=j[R]}}}return o}const o4=e=>(t,i)=>{const a=C.useContext(Bu),o=C.useContext(Pu),l=()=>Wj(e,t,a,o);return i?l():ss(l)};function ig(e,t,i){var l;const{style:a}=e,o={};for(const u in a)(Pt(a[u])||t.style&&Pt(t.style[u])||n4(u,e)||((l=i==null?void 0:i.getValue(u))==null?void 0:l.liveStyle)!==void 0)&&(o[u]=a[u]);return o}const Jj=o4({scrapeMotionValuesFromProps:ig,createRenderState:eg});function l4(e,t,i){const a=ig(e,t,i);for(const o in e)if(Pt(e[o])||Pt(t[o])){const l=ls.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;a[l]=e[o]}return a}const ek=o4({scrapeMotionValuesFromProps:l4,createRenderState:r4}),tk=Symbol.for("motionComponentSymbol");function Nr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function nk(e,t,i){return C.useCallback(a=>{a&&e.onMount&&e.onMount(a),t&&(a?t.mount(a):t.unmount()),i&&(typeof i=="function"?i(a):Nr(i)&&(i.current=a))},[t])}const ag=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),ik="framerAppearId",c4="data-"+ag(ik),u4=C.createContext({});function ak(e,t,i,a,o){var j,A;const{visualElement:l}=C.useContext(Bu),u=C.useContext(J5),f=C.useContext(Pu),p=C.useContext(Vu).reducedMotion,m=C.useRef(null);a=a||u.renderer,!m.current&&a&&(m.current=a(e,{visualState:t,parent:l,props:i,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:p}));const g=m.current,x=C.useContext(u4);g&&!g.projection&&o&&(g.type==="html"||g.type==="svg")&&rk(m.current,i,o,x);const y=C.useRef(!1);C.useInsertionEffect(()=>{g&&y.current&&g.update(i,f)});const v=i[c4],S=C.useRef(!!v&&!((j=window.MotionHandoffIsComplete)!=null&&j.call(window,v))&&((A=window.MotionHasOptimisedAnimation)==null?void 0:A.call(window,v)));return Du(()=>{g&&(y.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),S.current&&g.animationState&&g.animationState.animateChanges())}),C.useEffect(()=>{g&&(!S.current&&g.animationState&&g.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var k;(k=window.MotionHandoffMarkAsComplete)==null||k.call(window,v)}),S.current=!1),g.enteringChildren=void 0)}),g}function rk(e,t,i,a){const{layoutId:o,layout:l,drag:u,dragConstraints:f,layoutScroll:p,layoutRoot:m,layoutCrossfade:g}=t;e.projection=new i(e.latestValues,t["data-framer-portal-id"]?void 0:d4(e.parent)),e.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||f&&Nr(f),visualElement:e,animationType:typeof l=="string"?l:"both",initialPromotionConfig:a,crossfade:g,layoutScroll:p,layoutRoot:m})}function d4(e){if(e)return e.options.allowProjection!==!1?e.projection:d4(e.parent)}function Ep(e,{forwardMotionProps:t=!1}={},i,a){i&&Lj(i);const o=tg(e)?ek:Jj;function l(f,p){let m;const g={...C.useContext(Vu),...f,layoutId:sk(f)},{isStatic:x}=g,y=Vj(f),v=o(f,x);if(!x&&km){ok();const S=lk(g);m=S.MeasureLayout,y.visualElement=ak(e,v,g,a,S.ProjectionNode)}return d.jsxs(Bu.Provider,{value:y,children:[m&&y.visualElement?d.jsx(m,{visualElement:y.visualElement,...g}):null,Qj(e,f,nk(v,y.visualElement,p),v,x,t)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const u=C.forwardRef(l);return u[tk]=e,u}function sk({layoutId:e}){const t=C.useContext(jm).id;return t&&e!==void 0?t+"-"+e:e}function ok(e,t){C.useContext(J5).strict}function lk(e){const{drag:t,layout:i}=Kr;if(!t&&!i)return{};const a={...t,...i};return{MeasureLayout:t!=null&&t.isEnabled(e)||i!=null&&i.isEnabled(e)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}function ck(e,t){if(typeof Proxy>"u")return Ep;const i=new Map,a=(l,u)=>Ep(l,u,e,t),o=(l,u)=>a(l,u);return new Proxy(o,{get:(l,u)=>u==="create"?a:(i.has(u)||i.set(u,Ep(u,void 0,e,t)),i.get(u))})}function f4({top:e,left:t,right:i,bottom:a}){return{x:{min:t,max:i},y:{min:e,max:a}}}function uk({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function dk(e,t){if(!t)return e;const i=t({x:e.left,y:e.top}),a=t({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:a.y,right:a.x}}function Ap(e){return e===void 0||e===1}function Lh({scale:e,scaleX:t,scaleY:i}){return!Ap(e)||!Ap(t)||!Ap(i)}function Aa(e){return Lh(e)||p4(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function p4(e){return lx(e.x)||lx(e.y)}function lx(e){return e&&e!=="0%"}function lu(e,t,i){const a=e-i,o=t*a;return i+o}function cx(e,t,i,a,o){return o!==void 0&&(e=lu(e,o,a)),lu(e,i,a)+t}function Oh(e,t=0,i=1,a,o){e.min=cx(e.min,t,i,a,o),e.max=cx(e.max,t,i,a,o)}function h4(e,{x:t,y:i}){Oh(e.x,t.translate,t.scale,t.originPoint),Oh(e.y,i.translate,i.scale,i.originPoint)}const ux=.999999999999,dx=1.0000000000001;function fk(e,t,i,a=!1){const o=i.length;if(!o)return;t.x=t.y=1;let l,u;for(let f=0;f<o;f++){l=i[f],u=l.projectionDelta;const{visualElement:p}=l.options;p&&p.props.style&&p.props.style.display==="contents"||(a&&l.options.layoutScroll&&l.scroll&&l!==l.root&&Br(e,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(t.x*=u.x.scale,t.y*=u.y.scale,h4(e,u)),a&&Aa(l.latestValues)&&Br(e,l.latestValues))}t.x<dx&&t.x>ux&&(t.x=1),t.y<dx&&t.y>ux&&(t.y=1)}function Vr(e,t){e.min=e.min+t,e.max=e.max+t}function fx(e,t,i,a,o=.5){const l=Je(e.min,e.max,o);Oh(e,t,i,l,a)}function Br(e,t){fx(e.x,t.x,t.scaleX,t.scale,t.originX),fx(e.y,t.y,t.scaleY,t.scale,t.originY)}function m4(e,t){return f4(dk(e.getBoundingClientRect(),t))}function pk(e,t,i){const a=m4(e,i),{scroll:o}=t;return o&&(Vr(a.x,o.offset.x),Vr(a.y,o.offset.y)),a}const px=()=>({translate:0,scale:1,origin:0,originPoint:0}),_r=()=>({x:px(),y:px()}),hx=()=>({min:0,max:0}),rt=()=>({x:hx(),y:hx()}),Dh={current:null},g4={current:!1};function hk(){if(g4.current=!0,!!km)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Dh.current=e.matches;e.addEventListener("change",t),t()}else Dh.current=!1}const mk=new WeakMap;function gk(e,t,i){for(const a in t){const o=t[a],l=i[a];if(Pt(o))e.addValue(a,o);else if(Pt(l))e.addValue(a,Ln(o,{owner:e}));else if(l!==o)if(e.hasValue(a)){const u=e.getValue(a);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=e.getStaticValue(a);e.addValue(a,Ln(u!==void 0?u:o,{owner:e}))}}for(const a in i)t[a]===void 0&&e.removeValue(a);return t}const mx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class bk{scrapeMotionValuesFromProps(t,i,a){return{}}constructor({parent:t,props:i,presenceContext:a,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Im,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=qt.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,Ve.render(this.render,!1,!0))};const{latestValues:p,renderState:m}=u;this.latestValues=p,this.baseTarget={...p},this.initialValues=i.initial?{...p}:{},this.renderState=m,this.parent=t,this.props=i,this.presenceContext=a,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=f,this.blockInitialAnimation=!!l,this.isControllingVariants=$u(i),this.isVariantNode=t4(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:g,...x}=this.scrapeMotionValuesFromProps(i,{},this);for(const y in x){const v=x[y];p[y]!==void 0&&Pt(v)&&v.set(p[y])}}mount(t){var i;this.current=t,mk.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((a,o)=>this.bindToMotionValue(o,a)),g4.current||hk(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Dh.current,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),Pn(this.notifyUpdate),Pn(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const a=this.features[i];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,i){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const a=cs.has(t);a&&this.onBindTransform&&this.onBindTransform();const o=i.on("change",u=>{this.latestValues[t]=u,this.props.onUpdate&&Ve.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,t,i)),this.valueSubscriptions.set(t,()=>{o(),l&&l(),i.owner&&i.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Kr){const i=Kr[t];if(!i)continue;const{isEnabled:a,Feature:o}=i;if(!this.features[t]&&o&&a(this.props)&&(this.features[t]=new o(this)),this.features[t]){const l=this.features[t];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):rt()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,i){this.latestValues[t]=i}update(t,i){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let a=0;a<mx.length;a++){const o=mx[a];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=t[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=gk(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(t),()=>i.variantChildren.delete(t)}addValue(t,i){const a=this.values.get(t);i!==a&&(a&&this.removeValue(t),this.bindToMotionValue(t,i),this.values.set(t,i),this.latestValues[t]=i.get())}removeValue(t){this.values.delete(t);const i=this.valueSubscriptions.get(t);i&&(i(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,i){if(this.props.values&&this.props.values[t])return this.props.values[t];let a=this.values.get(t);return a===void 0&&i!==void 0&&(a=Ln(i===null?void 0:i,{owner:this}),this.addValue(t,a)),a}readValue(t,i){let a=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return a!=null&&(typeof a=="string"&&(o5(a)||c5(a))?a=parseFloat(a):!Ej(a)&&na.test(i)&&(a=U5(t,i)),this.setBaseTarget(t,Pt(a)?a.get():a)),Pt(a)?a.get():a}setBaseTarget(t,i){this.baseTarget[t]=i}getBaseTarget(t){var l;const{initial:i}=this.props;let a;if(typeof i=="string"||typeof i=="object"){const u=ng(this.props,i,(l=this.presenceContext)==null?void 0:l.custom);u&&(a=u[t])}if(i&&a!==void 0)return a;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Pt(o)?o:this.initialValues[t]!==void 0&&a===void 0?void 0:this.baseTarget[t]}on(t,i){return this.events[t]||(this.events[t]=new Mm),this.events[t].add(i)}notify(t,...i){this.events[t]&&this.events[t].notify(...i)}scheduleRenderMicrotask(){Ym.render(this.render)}}class b4 extends bk{constructor(){super(...arguments),this.KeyframeResolver=sj}sortInstanceNodePosition(t,i){return t.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(t,i){return t.style?t.style[i]:void 0}removeValueFromRenderState(t,{vars:i,style:a}){delete i[t],delete a[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Pt(t)&&(this.childSubscription=t.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}function x4(e,{style:t,vars:i},a,o){const l=e.style;let u;for(u in t)l[u]=t[u];o==null||o.applyProjectionStyles(l,a);for(u in i)l.setProperty(u,i[u])}function xk(e){return window.getComputedStyle(e)}class yk extends b4{constructor(){super(...arguments),this.type="html",this.renderInstance=x4}readValueFromInstance(t,i){var a;if(cs.has(i))return(a=this.projection)!=null&&a.isProjecting?kh(i):C7(t,i);{const o=xk(t),l=(Dm(i)?o.getPropertyValue(i):o[i])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(t,{transformPagePoint:i}){return m4(t,i)}build(t,i,a){Jm(t,i,a.transformTemplate)}scrapeMotionValuesFromProps(t,i,a){return ig(t,i,a)}}const y4=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function vk(e,t,i,a){x4(e,t,void 0,a);for(const o in t.attrs)e.setAttribute(y4.has(o)?o:ag(o),t.attrs[o])}class wk extends b4{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=rt}getBaseTargetFromProps(t,i){return t[i]}readValueFromInstance(t,i){if(cs.has(i)){const a=G5(i);return a&&a.default||0}return i=y4.has(i)?i:ag(i),t.getAttribute(i)}scrapeMotionValuesFromProps(t,i,a){return l4(t,i,a)}build(t,i,a){a4(t,i,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(t,i,a,o){vk(t,i,a,o)}mount(t){this.isSVGTag=s4(t.tagName),super.mount(t)}}const Sk=(e,t)=>tg(e)?new wk(t):new yk(t,{allowProjection:e!==C.Fragment});function Ur(e,t,i){const a=e.getProps();return ng(a,t,i!==void 0?i:a.custom,e)}const Ph=e=>Array.isArray(e);function Tk(e,t,i){e.hasValue(t)?e.getValue(t).set(i):e.addValue(t,Ln(i))}function jk(e){return Ph(e)?e[e.length-1]||0:e}function kk(e,t){const i=Ur(e,t);let{transitionEnd:a={},transition:o={},...l}=i||{};l={...l,...a};for(const u in l){const f=jk(l[u]);Tk(e,u,f)}}function Ck(e){return!!(Pt(e)&&e.add)}function Nh(e,t){const i=e.getValue("willChange");if(Ck(i))return i.add(t);if(!i&&Ci.WillChange){const a=new Ci.WillChange("auto");e.addValue("willChange",a),a.add(t)}}function v4(e){return e.props[c4]}const Ek=e=>e!==null;function Ak(e,{repeat:t,repeatType:i="loop"},a){const o=e.filter(Ek),l=t&&i!=="loop"&&t%2===1?0:o.length-1;return o[l]}const Mk={type:"spring",stiffness:500,damping:25,restSpeed:10},zk=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Rk={type:"keyframes",duration:.8},Lk={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Ok=(e,{keyframes:t})=>t.length>2?Rk:cs.has(e)?e.startsWith("scale")?zk(t[1]):Mk:Lk;function Dk({when:e,delay:t,delayChildren:i,staggerChildren:a,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:f,from:p,elapsed:m,...g}){return!!Object.keys(g).length}const rg=(e,t,i,a={},o,l)=>u=>{const f=Fm(a,e)||{},p=f.delay||a.delay||0;let{elapsed:m=0}=a;m=m-Zn(p);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:t.getVelocity(),...f,delay:-m,onUpdate:y=>{t.set(y),f.onUpdate&&f.onUpdate(y)},onComplete:()=>{u(),f.onComplete&&f.onComplete()},name:e,motionValue:t,element:l?void 0:o};Dk(f)||Object.assign(g,Ok(e,g)),g.duration&&(g.duration=Zn(g.duration)),g.repeatDelay&&(g.repeatDelay=Zn(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let x=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(zh(g),g.delay===0&&(x=!0)),(Ci.instantAnimations||Ci.skipAnimations)&&(x=!0,zh(g),g.delay=0),g.allowFlatten=!f.type&&!f.ease,x&&!l&&t.get()!==void 0){const y=Ak(g.keyframes,f);if(y!==void 0){Ve.update(()=>{g.onUpdate(y),g.onComplete()});return}}return f.isSync?new Um(g):new Y7(g)};function Pk({protectedKeys:e,needsAnimating:t},i){const a=e.hasOwnProperty(i)&&t[i]!==!0;return t[i]=!1,a}function w4(e,t,{delay:i=0,transitionOverride:a,type:o}={}){let{transition:l=e.getDefaultTransition(),transitionEnd:u,...f}=t;a&&(l=a);const p=[],m=o&&e.animationState&&e.animationState.getState()[o];for(const g in f){const x=e.getValue(g,e.latestValues[g]??null),y=f[g];if(y===void 0||m&&Pk(m,g))continue;const v={delay:i,...Fm(l||{},g)},S=x.get();if(S!==void 0&&!x.isAnimating&&!Array.isArray(y)&&y===S&&!v.velocity)continue;let j=!1;if(window.MotionHandoffAnimation){const k=v4(e);if(k){const R=window.MotionHandoffAnimation(k,g,Ve);R!==null&&(v.startTime=R,j=!0)}}Nh(e,g),x.start(rg(g,x,y,e.shouldReduceMotion&&_5.has(g)?{type:!1}:v,e,j));const A=x.animation;A&&p.push(A)}return u&&Promise.all(p).then(()=>{Ve.update(()=>{u&&kk(e,u)})}),p}function S4(e,t,i,a=0,o=1){const l=Array.from(e).sort((m,g)=>m.sortNodePosition(g)).indexOf(t),u=e.size,f=(u-1)*a;return typeof i=="function"?i(l,u):o===1?l*a:f-l*a}function Vh(e,t,i={}){var p;const a=Ur(e,t,i.type==="exit"?(p=e.presenceContext)==null?void 0:p.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=a||{};i.transitionOverride&&(o=i.transitionOverride);const l=a?()=>Promise.all(w4(e,a,i)):()=>Promise.resolve(),u=e.variantChildren&&e.variantChildren.size?(m=0)=>{const{delayChildren:g=0,staggerChildren:x,staggerDirection:y}=o;return Nk(e,t,m,g,x,y,i)}:()=>Promise.resolve(),{when:f}=o;if(f){const[m,g]=f==="beforeChildren"?[l,u]:[u,l];return m().then(()=>g())}else return Promise.all([l(),u(i.delay)])}function Nk(e,t,i=0,a=0,o=0,l=1,u){const f=[];for(const p of e.variantChildren)p.notify("AnimationStart",t),f.push(Vh(p,t,{...u,delay:i+(typeof a=="function"?0:a)+S4(e.variantChildren,p,a,o,l)}).then(()=>p.notify("AnimationComplete",t)));return Promise.all(f)}function Vk(e,t,i={}){e.notify("AnimationStart",t);let a;if(Array.isArray(t)){const o=t.map(l=>Vh(e,l,i));a=Promise.all(o)}else if(typeof t=="string")a=Vh(e,t,i);else{const o=typeof t=="function"?Ur(e,t,i.custom):t;a=Promise.all(w4(e,o,i))}return a.then(()=>{e.notify("AnimationComplete",t)})}function T4(e,t){if(!Array.isArray(t))return!1;const i=t.length;if(i!==e.length)return!1;for(let a=0;a<i;a++)if(t[a]!==e[a])return!1;return!0}const Bk=Zm.length;function j4(e){if(!e)return;if(!e.isControllingVariants){const i=e.parent?j4(e.parent)||{}:{};return e.props.initial!==void 0&&(i.initial=e.props.initial),i}const t={};for(let i=0;i<Bk;i++){const a=Zm[i],o=e.props[a];(Io(o)||o===!1)&&(t[a]=o)}return t}const _k=[...Wm].reverse(),$k=Wm.length;function Hk(e){return t=>Promise.all(t.map(({animation:i,options:a})=>Vk(e,i,a)))}function Gk(e){let t=Hk(e),i=gx(),a=!0;const o=p=>(m,g)=>{var y;const x=Ur(e,g,p==="exit"?(y=e.presenceContext)==null?void 0:y.custom:void 0);if(x){const{transition:v,transitionEnd:S,...j}=x;m={...m,...j,...S}}return m};function l(p){t=p(e)}function u(p){const{props:m}=e,g=j4(e.parent)||{},x=[],y=new Set;let v={},S=1/0;for(let A=0;A<$k;A++){const k=_k[A],R=i[k],E=m[k]!==void 0?m[k]:g[k],B=Io(E),M=k===p?R.isActive:null;M===!1&&(S=A);let N=E===g[k]&&E!==m[k]&&B;if(N&&a&&e.manuallyAnimateOnMount&&(N=!1),R.protectedKeys={...v},!R.isActive&&M===null||!E&&!R.prevProp||_u(E)||typeof E=="boolean")continue;const P=Uk(R.prevProp,E);let U=P||k===p&&R.isActive&&!N&&B||A>S&&B,G=!1;const Y=Array.isArray(E)?E:[E];let Z=Y.reduce(o(k),{});M===!1&&(Z={});const{prevResolvedValues:ne={}}=R,le={...ne,...Z},ce=D=>{U=!0,y.has(D)&&(G=!0,y.delete(D)),R.needsAnimating[D]=!0;const _=e.getValue(D);_&&(_.liveStyle=!1)};for(const D in le){const _=Z[D],Q=ne[D];if(v.hasOwnProperty(D))continue;let z=!1;Ph(_)&&Ph(Q)?z=!T4(_,Q):z=_!==Q,z?_!=null?ce(D):y.add(D):_!==void 0&&y.has(D)?ce(D):R.protectedKeys[D]=!0}R.prevProp=E,R.prevResolvedValues=Z,R.isActive&&(v={...v,...Z}),a&&e.blockInitialAnimation&&(U=!1);const ue=N&&P;U&&(!ue||G)&&x.push(...Y.map(D=>{const _={type:k};if(typeof D=="string"&&a&&!ue&&e.manuallyAnimateOnMount&&e.parent){const{parent:Q}=e,z=Ur(Q,D);if(Q.enteringChildren&&z){const{delayChildren:X}=z.transition||{};_.delay=S4(Q.enteringChildren,e,X)}}return{animation:D,options:_}}))}if(y.size){const A={};if(typeof m.initial!="boolean"){const k=Ur(e,Array.isArray(m.initial)?m.initial[0]:m.initial);k&&k.transition&&(A.transition=k.transition)}y.forEach(k=>{const R=e.getBaseTarget(k),E=e.getValue(k);E&&(E.liveStyle=!0),A[k]=R??null}),x.push({animation:A})}let j=!!x.length;return a&&(m.initial===!1||m.initial===m.animate)&&!e.manuallyAnimateOnMount&&(j=!1),a=!1,j?t(x):Promise.resolve()}function f(p,m){var x;if(i[p].isActive===m)return Promise.resolve();(x=e.variantChildren)==null||x.forEach(y=>{var v;return(v=y.animationState)==null?void 0:v.setActive(p,m)}),i[p].isActive=m;const g=u(p);for(const y in i)i[y].protectedKeys={};return g}return{animateChanges:u,setActive:f,setAnimateFunction:l,getState:()=>i,reset:()=>{i=gx(),a=!0}}}function Uk(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!T4(t,e):!1}function Ca(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function gx(){return{animate:Ca(!0),whileInView:Ca(),whileHover:Ca(),whileTap:Ca(),whileDrag:Ca(),whileFocus:Ca(),exit:Ca()}}class sa{constructor(t){this.isMounted=!1,this.node=t}update(){}}class Ik extends sa{constructor(t){super(t),t.animationState||(t.animationState=Gk(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();_u(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:i}=this.node.prevProps||{};t!==i&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let Fk=0;class qk extends sa{constructor(){super(...arguments),this.id=Fk++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:i}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===a)return;const o=this.node.animationState.setActive("exit",!t);i&&!t&&o.then(()=>{i(this.id)})}mount(){const{register:t,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const Kk={animation:{Feature:Ik},exit:{Feature:qk}};function qo(e,t,i,a={passive:!0}){return e.addEventListener(t,i,a),()=>e.removeEventListener(t,i)}function rl(e){return{point:{x:e.pageX,y:e.pageY}}}const Yk=e=>t=>Xm(t)&&e(t,rl(t));function Mo(e,t,i,a){return qo(e,t,Yk(i),a)}const k4=1e-4,Xk=1-k4,Qk=1+k4,C4=.01,Wk=0-C4,Zk=0+C4;function Bt(e){return e.max-e.min}function Jk(e,t,i){return Math.abs(e-t)<=i}function bx(e,t,i,a=.5){e.origin=a,e.originPoint=Je(t.min,t.max,e.origin),e.scale=Bt(i)/Bt(t),e.translate=Je(i.min,i.max,e.origin)-e.originPoint,(e.scale>=Xk&&e.scale<=Qk||isNaN(e.scale))&&(e.scale=1),(e.translate>=Wk&&e.translate<=Zk||isNaN(e.translate))&&(e.translate=0)}function zo(e,t,i,a){bx(e.x,t.x,i.x,a?a.originX:void 0),bx(e.y,t.y,i.y,a?a.originY:void 0)}function xx(e,t,i){e.min=i.min+t.min,e.max=e.min+Bt(t)}function eC(e,t,i){xx(e.x,t.x,i.x),xx(e.y,t.y,i.y)}function yx(e,t,i){e.min=t.min-i.min,e.max=e.min+Bt(t)}function Ro(e,t,i){yx(e.x,t.x,i.x),yx(e.y,t.y,i.y)}function jn(e){return[e("x"),e("y")]}const E4=({current:e})=>e?e.ownerDocument.defaultView:null,vx=(e,t)=>Math.abs(e-t);function tC(e,t){const i=vx(e.x,t.x),a=vx(e.y,t.y);return Math.sqrt(i**2+a**2)}class A4{constructor(t,i,{transformPagePoint:a,contextWindow:o=window,dragSnapToOrigin:l=!1,distanceThreshold:u=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=zp(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,S=tC(y.offset,{x:0,y:0})>=this.distanceThreshold;if(!v&&!S)return;const{point:j}=y,{timestamp:A}=St;this.history.push({...j,timestamp:A});const{onStart:k,onMove:R}=this.handlers;v||(k&&k(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),R&&R(this.lastMoveEvent,y)},this.handlePointerMove=(y,v)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=Mp(v,this.transformPagePoint),Ve.update(this.updatePoint,!0)},this.handlePointerUp=(y,v)=>{this.end();const{onEnd:S,onSessionEnd:j,resumeAnimation:A}=this.handlers;if(this.dragSnapToOrigin&&A&&A(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=zp(y.type==="pointercancel"?this.lastMoveEventInfo:Mp(v,this.transformPagePoint),this.history);this.startEvent&&S&&S(y,k),j&&j(y,k)},!Xm(t))return;this.dragSnapToOrigin=l,this.handlers=i,this.transformPagePoint=a,this.distanceThreshold=u,this.contextWindow=o||window;const f=rl(t),p=Mp(f,this.transformPagePoint),{point:m}=p,{timestamp:g}=St;this.history=[{...m,timestamp:g}];const{onSessionStart:x}=i;x&&x(t,zp(p,this.history)),this.removeListeners=nl(Mo(this.contextWindow,"pointermove",this.handlePointerMove),Mo(this.contextWindow,"pointerup",this.handlePointerUp),Mo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Pn(this.updatePoint)}}function Mp(e,t){return t?{point:t(e.point)}:e}function wx(e,t){return{x:e.x-t.x,y:e.y-t.y}}function zp({point:e},t){return{point:e,delta:wx(e,M4(t)),offset:wx(e,nC(t)),velocity:iC(t,.1)}}function nC(e){return e[0]}function M4(e){return e[e.length-1]}function iC(e,t){if(e.length<2)return{x:0,y:0};let i=e.length-1,a=null;const o=M4(e);for(;i>=0&&(a=e[i],!(o.timestamp-a.timestamp>Zn(t)));)i--;if(!a)return{x:0,y:0};const l=Jn(o.timestamp-a.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-a.x)/l,y:(o.y-a.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function aC(e,{min:t,max:i},a){return t!==void 0&&e<t?e=a?Je(t,e,a.min):Math.max(e,t):i!==void 0&&e>i&&(e=a?Je(i,e,a.max):Math.min(e,i)),e}function Sx(e,t,i){return{min:t!==void 0?e.min+t:void 0,max:i!==void 0?e.max+i-(e.max-e.min):void 0}}function rC(e,{top:t,left:i,bottom:a,right:o}){return{x:Sx(e.x,i,o),y:Sx(e.y,t,a)}}function Tx(e,t){let i=t.min-e.min,a=t.max-e.max;return t.max-t.min<e.max-e.min&&([i,a]=[a,i]),{min:i,max:a}}function sC(e,t){return{x:Tx(e.x,t.x),y:Tx(e.y,t.y)}}function oC(e,t){let i=.5;const a=Bt(e),o=Bt(t);return o>a?i=qr(t.min,t.max-a,e.min):a>o&&(i=qr(e.min,e.max-o,t.min)),ni(0,1,i)}function lC(e,t){const i={};return t.min!==void 0&&(i.min=t.min-e.min),t.max!==void 0&&(i.max=t.max-e.min),i}const Bh=.35;function cC(e=Bh){return e===!1?e=0:e===!0&&(e=Bh),{x:jx(e,"left","right"),y:jx(e,"top","bottom")}}function jx(e,t,i){return{min:kx(e,t),max:kx(e,i)}}function kx(e,t){return typeof e=="number"?e:e[t]||0}const uC=new WeakMap;class dC{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=rt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:i=!1,distanceThreshold:a}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=x=>{const{dragSnapToOrigin:y}=this.getProps();y?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(rl(x).point)},u=(x,y)=>{const{drag:v,dragPropagation:S,onDragStart:j}=this.getProps();if(v&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=cj(v),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=y,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),jn(k=>{let R=this.getAxisMotionValue(k).get()||0;if(ei.test(R)){const{projection:E}=this.visualElement;if(E&&E.layout){const B=E.layout.layoutBox[k];B&&(R=Bt(B)*(parseFloat(R)/100))}}this.originPoint[k]=R}),j&&Ve.postRender(()=>j(x,y)),Nh(this.visualElement,"transform");const{animationState:A}=this.visualElement;A&&A.setActive("whileDrag",!0)},f=(x,y)=>{this.latestPointerEvent=x,this.latestPanInfo=y;const{dragPropagation:v,dragDirectionLock:S,onDirectionLock:j,onDrag:A}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:k}=y;if(S&&this.currentDirection===null){this.currentDirection=fC(k),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",y.point,k),this.updateAxis("y",y.point,k),this.visualElement.render(),A&&A(x,y)},p=(x,y)=>{this.latestPointerEvent=x,this.latestPanInfo=y,this.stop(x,y),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>jn(x=>{var y;return this.getAnimationState(x)==="paused"&&((y=this.getAxisMotionValue(x).animation)==null?void 0:y.play())}),{dragSnapToOrigin:g}=this.getProps();this.panSession=new A4(t,{onSessionStart:l,onStart:u,onMove:f,onSessionEnd:p,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:a,contextWindow:E4(this.visualElement)})}stop(t,i){const a=t||this.latestPointerEvent,o=i||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!o||!a)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:f}=this.getProps();f&&Ve.postRender(()=>f(a,o))}cancel(){this.isDragging=!1;const{projection:t,animationState:i}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(t,i,a){const{drag:o}=this.getProps();if(!a||!Cc(t,o,this.currentDirection))return;const l=this.getAxisMotionValue(t);let u=this.originPoint[t]+a[t];this.constraints&&this.constraints[t]&&(u=aC(u,this.constraints[t],this.elastic[t])),l.set(u)}resolveConstraints(){var l;const{dragConstraints:t,dragElastic:i}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(l=this.visualElement.projection)==null?void 0:l.layout,o=this.constraints;t&&Nr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&a?this.constraints=rC(a.layoutBox,t):this.constraints=!1,this.elastic=cC(i),o!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&jn(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=lC(a.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:i}=this.getProps();if(!t||!Nr(t))return!1;const a=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=pk(a,o.root,this.visualElement.getTransformPagePoint());let u=sC(o.layout.layoutBox,l);if(i){const f=i(uk(u));this.hasMutatedConstraints=!!f,f&&(u=f4(f))}return u}startAnimation(t){const{drag:i,dragMomentum:a,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:f}=this.getProps(),p=this.constraints||{},m=jn(g=>{if(!Cc(g,i,this.currentDirection))return;let x=p&&p[g]||{};u&&(x={min:0,max:0});const y=o?200:1e6,v=o?40:1e7,S={type:"inertia",velocity:a?t[g]:0,bounceStiffness:y,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...l,...x};return this.startAxisValueAnimation(g,S)});return Promise.all(m).then(f)}startAxisValueAnimation(t,i){const a=this.getAxisMotionValue(t);return Nh(this.visualElement,t),a.start(rg(t,a,0,i,this.visualElement,!1))}stopAnimation(){jn(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){jn(t=>{var i;return(i=this.getAxisMotionValue(t).animation)==null?void 0:i.pause()})}getAnimationState(t){var i;return(i=this.getAxisMotionValue(t).animation)==null?void 0:i.state}getAxisMotionValue(t){const i=`_drag${t.toUpperCase()}`,a=this.visualElement.getProps(),o=a[i];return o||this.visualElement.getValue(t,(a.initial?a.initial[t]:void 0)||0)}snapToCursor(t){jn(i=>{const{drag:a}=this.getProps();if(!Cc(i,a,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(i);if(o&&o.layout){const{min:u,max:f}=o.layout.layoutBox[i];l.set(t[i]-Je(u,f,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:i}=this.getProps(),{projection:a}=this.visualElement;if(!Nr(i)||!a||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};jn(u=>{const f=this.getAxisMotionValue(u);if(f&&this.constraints!==!1){const p=f.get();o[u]=oC({min:p,max:p},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),jn(u=>{if(!Cc(u,t,null))return;const f=this.getAxisMotionValue(u),{min:p,max:m}=this.constraints[u];f.set(Je(p,m,o[u]))})}addListeners(){if(!this.visualElement.current)return;uC.set(this.visualElement,this);const t=this.visualElement.current,i=Mo(t,"pointerdown",p=>{const{drag:m,dragListener:g=!0}=this.getProps();m&&g&&this.start(p)}),a=()=>{const{dragConstraints:p}=this.getProps();Nr(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",a);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Ve.read(a);const u=qo(window,"resize",()=>this.scalePositionWithinConstraints()),f=o.addEventListener("didUpdate",({delta:p,hasLayoutChanged:m})=>{this.isDragging&&m&&(jn(g=>{const x=this.getAxisMotionValue(g);x&&(this.originPoint[g]+=p[g].translate,x.set(x.get()+p[g].translate))}),this.visualElement.render())});return()=>{u(),i(),l(),f&&f()}}getProps(){const t=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:a=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=Bh,dragMomentum:f=!0}=t;return{...t,drag:i,dragDirectionLock:a,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:f}}}function Cc(e,t,i){return(t===!0||t===e)&&(i===null||i===e)}function fC(e,t=10){let i=null;return Math.abs(e.y)>t?i="y":Math.abs(e.x)>t&&(i="x"),i}class pC extends sa{constructor(t){super(t),this.removeGroupControls=Yt,this.removeListeners=Yt,this.controls=new dC(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Yt}unmount(){this.removeGroupControls(),this.removeListeners()}}const Cx=e=>(t,i)=>{e&&Ve.postRender(()=>e(t,i))};class hC extends sa{constructor(){super(...arguments),this.removePointerDownListener=Yt}onPointerDown(t){this.session=new A4(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:E4(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:i,onPan:a,onPanEnd:o}=this.node.getProps();return{onSessionStart:Cx(t),onStart:Cx(i),onMove:a,onEnd:(l,u)=>{delete this.session,o&&Ve.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=Mo(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Yc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ex(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const po={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(ge.test(e))e=parseFloat(e);else return e;const i=Ex(e,t.target.x),a=Ex(e,t.target.y);return`${i}% ${a}%`}},mC={correct:(e,{treeScale:t,projectionDelta:i})=>{const a=e,o=na.parse(e);if(o.length>5)return a;const l=na.createTransformer(e),u=typeof o[0]!="number"?1:0,f=i.x.scale*t.x,p=i.y.scale*t.y;o[0+u]/=f,o[1+u]/=p;const m=Je(f,p,.5);return typeof o[2+u]=="number"&&(o[2+u]/=m),typeof o[3+u]=="number"&&(o[3+u]/=m),l(o)}};let Rp=!1;class gC extends C.Component{componentDidMount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:a,layoutId:o}=this.props,{projection:l}=t;Bj(bC),l&&(i.group&&i.group.add(l),a&&a.register&&o&&a.register(l),Rp&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),Yc.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:i,visualElement:a,drag:o,isPresent:l}=this.props,{projection:u}=a;return u&&(u.isPresent=l,Rp=!0,o||t.layoutDependency!==i||i===void 0||t.isPresent!==l?u.willUpdate():this.safeToRemove(),t.isPresent!==l&&(l?u.promote():u.relegate()||Ve.postRender(()=>{const f=u.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Ym.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:i,switchLayoutGroup:a}=this.props,{projection:o}=t;Rp=!0,o&&(o.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(o),a&&a.deregister&&a.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function z4(e){const[t,i]=W5(),a=C.useContext(jm);return d.jsx(gC,{...e,layoutGroup:a,switchLayoutGroup:C.useContext(u4),isPresent:t,safeToRemove:i})}const bC={borderRadius:{...po,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:po,borderTopRightRadius:po,borderBottomLeftRadius:po,borderBottomRightRadius:po,boxShadow:mC};function xC(e,t,i){const a=Pt(e)?e:Ln(e);return a.start(rg("",a,t,i)),a.animation}const yC=(e,t)=>e.depth-t.depth;class vC{constructor(){this.children=[],this.isDirty=!1}add(t){Cm(this.children,t),this.isDirty=!0}remove(t){Em(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(yC),this.isDirty=!1,this.children.forEach(t)}}function wC(e,t){const i=qt.now(),a=({timestamp:o})=>{const l=o-i;l>=t&&(Pn(a),e(l-t))};return Ve.setup(a,!0),()=>Pn(a)}const R4=["TopLeft","TopRight","BottomLeft","BottomRight"],SC=R4.length,Ax=e=>typeof e=="string"?parseFloat(e):e,Mx=e=>typeof e=="number"||ge.test(e);function TC(e,t,i,a,o,l){o?(e.opacity=Je(0,i.opacity??1,jC(a)),e.opacityExit=Je(t.opacity??1,0,kC(a))):l&&(e.opacity=Je(t.opacity??1,i.opacity??1,a));for(let u=0;u<SC;u++){const f=`border${R4[u]}Radius`;let p=zx(t,f),m=zx(i,f);if(p===void 0&&m===void 0)continue;p||(p=0),m||(m=0),p===0||m===0||Mx(p)===Mx(m)?(e[f]=Math.max(Je(Ax(p),Ax(m),a),0),(ei.test(m)||ei.test(p))&&(e[f]+="%")):e[f]=m}(t.rotate||i.rotate)&&(e.rotate=Je(t.rotate||0,i.rotate||0,a))}function zx(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const jC=L4(0,.5,m5),kC=L4(.5,.95,Yt);function L4(e,t,i){return a=>a<e?0:a>t?1:i(qr(e,t,a))}function Rx(e,t){e.min=t.min,e.max=t.max}function Tn(e,t){Rx(e.x,t.x),Rx(e.y,t.y)}function Lx(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Ox(e,t,i,a,o){return e-=t,e=lu(e,1/i,a),o!==void 0&&(e=lu(e,1/o,a)),e}function CC(e,t=0,i=1,a=.5,o,l=e,u=e){if(ei.test(t)&&(t=parseFloat(t),t=Je(u.min,u.max,t/100)-u.min),typeof t!="number")return;let f=Je(l.min,l.max,a);e===l&&(f-=t),e.min=Ox(e.min,t,i,f,o),e.max=Ox(e.max,t,i,f,o)}function Dx(e,t,[i,a,o],l,u){CC(e,t[i],t[a],t[o],t.scale,l,u)}const EC=["x","scaleX","originX"],AC=["y","scaleY","originY"];function Px(e,t,i,a){Dx(e.x,t,EC,i?i.x:void 0,a?a.x:void 0),Dx(e.y,t,AC,i?i.y:void 0,a?a.y:void 0)}function Nx(e){return e.translate===0&&e.scale===1}function O4(e){return Nx(e.x)&&Nx(e.y)}function Vx(e,t){return e.min===t.min&&e.max===t.max}function MC(e,t){return Vx(e.x,t.x)&&Vx(e.y,t.y)}function Bx(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function D4(e,t){return Bx(e.x,t.x)&&Bx(e.y,t.y)}function _x(e){return Bt(e.x)/Bt(e.y)}function $x(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class zC{constructor(){this.members=[]}add(t){Cm(this.members,t),t.scheduleRender()}remove(t){if(Em(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(t){const i=this.members.findIndex(o=>t===o);if(i===0)return!1;let a;for(let o=i;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){a=l;break}}return a?(this.promote(a),!0):!1}promote(t,i){const a=this.lead;if(t!==a&&(this.prevLead=a,this.lead=t,t.show(),a)){a.instance&&a.scheduleRender(),t.scheduleRender(),t.resumeFrom=a,i&&(t.resumeFrom.preserveOpacity=!0),a.snapshot&&(t.snapshot=a.snapshot,t.snapshot.latestValues=a.animationValues||a.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:i,resumingFrom:a}=t;i.onExitComplete&&i.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function RC(e,t,i){let a="";const o=e.x.translate/t.x,l=e.y.translate/t.y,u=(i==null?void 0:i.z)||0;if((o||l||u)&&(a=`translate3d(${o}px, ${l}px, ${u}px) `),(t.x!==1||t.y!==1)&&(a+=`scale(${1/t.x}, ${1/t.y}) `),i){const{transformPerspective:m,rotate:g,rotateX:x,rotateY:y,skewX:v,skewY:S}=i;m&&(a=`perspective(${m}px) ${a}`),g&&(a+=`rotate(${g}deg) `),x&&(a+=`rotateX(${x}deg) `),y&&(a+=`rotateY(${y}deg) `),v&&(a+=`skewX(${v}deg) `),S&&(a+=`skewY(${S}deg) `)}const f=e.x.scale*t.x,p=e.y.scale*t.y;return(f!==1||p!==1)&&(a+=`scale(${f}, ${p})`),a||"none"}const Lp=["","X","Y","Z"],LC=1e3;let OC=0;function Op(e,t,i,a){const{latestValues:o}=t;o[e]&&(i[e]=o[e],t.setStaticValue(e,0),a&&(a[e]=0))}function P4(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const i=v4(t);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:o,layoutId:l}=e.options;window.MotionCancelOptimisedAnimation(i,"transform",Ve,!(o||l))}const{parent:a}=e;a&&!a.hasCheckedOptimisedAppear&&P4(a)}function N4({attachResizeListener:e,defaultParent:t,measureScroll:i,checkIsScrollRoot:a,resetTransform:o}){return class{constructor(u={},f=t==null?void 0:t()){this.id=OC++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(NC),this.nodes.forEach($C),this.nodes.forEach(HC),this.nodes.forEach(VC)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new vC)}addEventListener(u,f){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Mm),this.eventHandlers.get(u).add(f)}notifyListeners(u,...f){const p=this.eventHandlers.get(u);p&&p.notify(...f)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=Qm(u)&&!jj(u),this.instance=u;const{layoutId:f,layout:p,visualElement:m}=this.options;if(m&&!m.current&&m.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||f)&&(this.isLayoutDirty=!0),e){let g,x=0;const y=()=>this.root.updateBlockedByResize=!1;Ve.read(()=>{x=window.innerWidth}),e(u,()=>{const v=window.innerWidth;v!==x&&(x=v,this.root.updateBlockedByResize=!0,g&&g(),g=wC(y,250),Yc.hasAnimatedSinceResize&&(Yc.hasAnimatedSinceResize=!1,this.nodes.forEach(Ux)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&m&&(f||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:x,hasRelativeLayoutChanged:y,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||m.getDefaultTransition()||qC,{onLayoutAnimationStart:j,onLayoutAnimationComplete:A}=m.getProps(),k=!this.targetLayout||!D4(this.targetLayout,v),R=!x&&y;if(this.options.layoutRoot||this.resumeFrom||R||x&&(k||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const E={...Fm(S,"layout"),onPlay:j,onComplete:A};(m.shouldReduceMotion||this.options.layoutRoot)&&(E.delay=0,E.type=!1),this.startAnimation(E),this.setAnimationOrigin(g,R)}else x||Ux(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Pn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(GC),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&P4(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const x=this.path[g];x.shouldResetTransform=!0,x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:f,layout:p}=this.options;if(f===void 0&&!p)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Hx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Gx);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(_C),this.nodes.forEach(DC),this.nodes.forEach(PC)):this.nodes.forEach(Gx),this.clearAllSnapshots();const f=qt.now();St.delta=ni(0,1e3/60,f-St.timestamp),St.timestamp=f,St.isProcessing=!0,wp.update.process(St),wp.preRender.process(St),wp.render.process(St),St.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ym.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(BC),this.sharedNodes.forEach(UC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ve.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ve.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Bt(this.snapshot.measuredBox.x)&&!Bt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=rt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(f=!1),f&&this.instance){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!O4(this.projectionDelta),p=this.getTransformTemplate(),m=p?p(this.latestValues,""):void 0,g=m!==this.prevTransformTemplateValue;u&&this.instance&&(f||Aa(this.latestValues)||g)&&(o(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const f=this.measurePageBox();let p=this.removeElementScroll(f);return u&&(p=this.removeTransform(p)),KC(p),{animationId:this.root.animationId,measuredBox:f,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var m;const{visualElement:u}=this.options;if(!u)return rt();const f=u.measureViewportBox();if(!(((m=this.scroll)==null?void 0:m.wasRoot)||this.path.some(YC))){const{scroll:g}=this.root;g&&(Vr(f.x,g.offset.x),Vr(f.y,g.offset.y))}return f}removeElementScroll(u){var p;const f=rt();if(Tn(f,u),(p=this.scroll)!=null&&p.wasRoot)return f;for(let m=0;m<this.path.length;m++){const g=this.path[m],{scroll:x,options:y}=g;g!==this.root&&x&&y.layoutScroll&&(x.wasRoot&&Tn(f,u),Vr(f.x,x.offset.x),Vr(f.y,x.offset.y))}return f}applyTransform(u,f=!1){const p=rt();Tn(p,u);for(let m=0;m<this.path.length;m++){const g=this.path[m];!f&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Br(p,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),Aa(g.latestValues)&&Br(p,g.latestValues)}return Aa(this.latestValues)&&Br(p,this.latestValues),p}removeTransform(u){const f=rt();Tn(f,u);for(let p=0;p<this.path.length;p++){const m=this.path[p];if(!m.instance||!Aa(m.latestValues))continue;Lh(m.latestValues)&&m.updateSnapshot();const g=rt(),x=m.measurePageBox();Tn(g,x),Px(f,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,g)}return Aa(this.latestValues)&&Px(f,this.latestValues),f}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==St.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var y;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==f;if(!(u||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:x}=this.options;if(!(!this.layout||!(g||x))){if(this.resolvedRelativeTargetAt=St.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=rt(),this.relativeTargetOrigin=rt(),Ro(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),Tn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=rt(),this.targetWithTransforms=rt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),eC(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Tn(this.target,this.layout.layoutBox),h4(this.target,this.targetDelta)):Tn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=rt(),this.relativeTargetOrigin=rt(),Ro(this.relativeTargetOrigin,this.target,v.target),Tn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Lh(this.parent.latestValues)||p4(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var S;const u=this.getLead(),f=!!this.resumingFrom||this!==u;let p=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(p=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===St.timestamp&&(p=!1),p)return;const{layout:m,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||g))return;Tn(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,y=this.treeScale.y;fk(this.layoutCorrected,this.treeScale,this.path,f),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=rt());const{target:v}=u;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Lx(this.prevProjectionDelta.x,this.projectionDelta.x),Lx(this.prevProjectionDelta.y,this.projectionDelta.y)),zo(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==y||!$x(this.projectionDelta.x,this.prevProjectionDelta.x)||!$x(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var f;if((f=this.options.visualElement)==null||f.scheduleRender(),u){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=_r(),this.projectionDelta=_r(),this.projectionDeltaWithTransform=_r()}setAnimationOrigin(u,f=!1){const p=this.snapshot,m=p?p.latestValues:{},g={...this.latestValues},x=_r();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const y=rt(),v=p?p.source:void 0,S=this.layout?this.layout.source:void 0,j=v!==S,A=this.getStack(),k=!A||A.members.length<=1,R=!!(j&&!k&&this.options.crossfade===!0&&!this.path.some(FC));this.animationProgress=0;let E;this.mixTargetDelta=B=>{const M=B/1e3;Ix(x.x,u.x,M),Ix(x.y,u.y,M),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ro(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox),IC(this.relativeTarget,this.relativeTargetOrigin,y,M),E&&MC(this.relativeTarget,E)&&(this.isProjectionDirty=!1),E||(E=rt()),Tn(E,this.relativeTarget)),j&&(this.animationValues=g,TC(g,m,this.latestValues,M,R,k)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=M},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){var f,p,m;this.notifyListeners("animationStart"),(f=this.currentAnimation)==null||f.stop(),(m=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||m.stop(),this.pendingAnimation&&(Pn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ve.update(()=>{Yc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ln(0)),this.currentAnimation=xC(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),u.onUpdate&&u.onUpdate(g)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(LC),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:f,target:p,layout:m,latestValues:g}=u;if(!(!f||!p||!m)){if(this!==u&&this.layout&&m&&V4(this.options.animationType,this.layout.layoutBox,m.layoutBox)){p=this.target||rt();const x=Bt(this.layout.layoutBox.x);p.x.min=u.target.x.min,p.x.max=p.x.min+x;const y=Bt(this.layout.layoutBox.y);p.y.min=u.target.y.min,p.y.max=p.y.min+y}Tn(f,p),Br(f,g),zo(this.projectionDeltaWithTransform,this.layoutCorrected,f,g)}}registerSharedNode(u,f){this.sharedNodes.has(u)||this.sharedNodes.set(u,new zC),this.sharedNodes.get(u).add(f);const m=f.options.initialPromotionConfig;f.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(f):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var f;const{layoutId:u}=this.options;return u?((f=this.getStack())==null?void 0:f.lead)||this:this}getPrevLead(){var f;const{layoutId:u}=this.options;return u?(f=this.getStack())==null?void 0:f.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:f,preserveFollowOpacity:p}={}){const m=this.getStack();m&&m.promote(this,p),u&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let f=!1;const{latestValues:p}=u;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(f=!0),!f)return;const m={};p.z&&Op("z",u,m,this.animationValues);for(let g=0;g<Lp.length;g++)Op(`rotate${Lp[g]}`,u,m,this.animationValues),Op(`skew${Lp[g]}`,u,m,this.animationValues);u.render();for(const g in m)u.setStaticValue(g,m[g]),this.animationValues&&(this.animationValues[g]=m[g]);u.scheduleRender()}applyProjectionStyles(u,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=Kc(f==null?void 0:f.pointerEvents)||"",u.transform=p?p(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=Kc(f==null?void 0:f.pointerEvents)||""),this.hasProjected&&!Aa(this.latestValues)&&(u.transform=p?p({},""):"none",this.hasProjected=!1);return}u.visibility="";const g=m.animationValues||m.latestValues;this.applyTransformsToTarget();let x=RC(this.projectionDeltaWithTransform,this.treeScale,g);p&&(x=p(g,x)),u.transform=x;const{x:y,y:v}=this.projectionDelta;u.transformOrigin=`${y.origin*100}% ${v.origin*100}% 0`,m.animationValues?u.opacity=m===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:u.opacity=m===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const S in Fo){if(g[S]===void 0)continue;const{correct:j,applyTo:A,isCSSVariable:k}=Fo[S],R=x==="none"?g[S]:j(g[S],m);if(A){const E=A.length;for(let B=0;B<E;B++)u[A[B]]=R}else k?this.options.visualElement.renderState.vars[S]=R:u[S]=R}this.options.layoutId&&(u.pointerEvents=m===this?Kc(f==null?void 0:f.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var f;return(f=u.currentAnimation)==null?void 0:f.stop()}),this.root.nodes.forEach(Hx),this.root.sharedNodes.clear()}}}function DC(e){e.updateLayout()}function PC(e){var i;const t=((i=e.resumeFrom)==null?void 0:i.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:o}=e.layout,{animationType:l}=e.options,u=t.source!==e.layout.source;l==="size"?jn(x=>{const y=u?t.measuredBox[x]:t.layoutBox[x],v=Bt(y);y.min=a[x].min,y.max=y.min+v}):V4(l,t.layoutBox,a)&&jn(x=>{const y=u?t.measuredBox[x]:t.layoutBox[x],v=Bt(a[x]);y.max=y.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[x].max=e.relativeTarget[x].min+v)});const f=_r();zo(f,a,t.layoutBox);const p=_r();u?zo(p,e.applyTransform(o,!0),t.measuredBox):zo(p,a,t.layoutBox);const m=!O4(f);let g=!1;if(!e.resumeFrom){const x=e.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:y,layout:v}=x;if(y&&v){const S=rt();Ro(S,t.layoutBox,y.layoutBox);const j=rt();Ro(j,a,v.layoutBox),D4(S,j)||(g=!0),x.options.layoutRoot&&(e.relativeTarget=j,e.relativeTargetOrigin=S,e.relativeParent=x)}}}e.notifyListeners("didUpdate",{layout:a,snapshot:t,delta:p,layoutDelta:f,hasLayoutChanged:m,hasRelativeLayoutChanged:g})}else if(e.isLead()){const{onExitComplete:a}=e.options;a&&a()}e.options.transition=void 0}function NC(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function VC(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function BC(e){e.clearSnapshot()}function Hx(e){e.clearMeasurements()}function Gx(e){e.isLayoutDirty=!1}function _C(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Ux(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function $C(e){e.resolveTargetDelta()}function HC(e){e.calcProjection()}function GC(e){e.resetSkewAndRotation()}function UC(e){e.removeLeadSnapshot()}function Ix(e,t,i){e.translate=Je(t.translate,0,i),e.scale=Je(t.scale,1,i),e.origin=t.origin,e.originPoint=t.originPoint}function Fx(e,t,i,a){e.min=Je(t.min,i.min,a),e.max=Je(t.max,i.max,a)}function IC(e,t,i,a){Fx(e.x,t.x,i.x,a),Fx(e.y,t.y,i.y,a)}function FC(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const qC={duration:.45,ease:[.4,0,.1,1]},qx=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Kx=qx("applewebkit/")&&!qx("chrome/")?Math.round:Yt;function Yx(e){e.min=Kx(e.min),e.max=Kx(e.max)}function KC(e){Yx(e.x),Yx(e.y)}function V4(e,t,i){return e==="position"||e==="preserve-aspect"&&!Jk(_x(t),_x(i),.2)}function YC(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const XC=N4({attachResizeListener:(e,t)=>qo(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Dp={current:void 0},B4=N4({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Dp.current){const e=new XC({});e.mount(window),e.setOptions({layoutScroll:!0}),Dp.current=e}return Dp.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),QC={pan:{Feature:hC},drag:{Feature:pC,ProjectionNode:B4,MeasureLayout:z4}};function Xx(e,t,i){const{props:a}=e;e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",i==="Start");const o="onHover"+i,l=a[o];l&&Ve.postRender(()=>l(t,rl(t)))}class WC extends sa{mount(){const{current:t}=this.node;t&&(this.unmount=uj(t,(i,a)=>(Xx(this.node,a,"Start"),o=>Xx(this.node,o,"End"))))}unmount(){}}class ZC extends sa{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=nl(qo(this.node.current,"focus",()=>this.onFocus()),qo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Qx(e,t,i){const{props:a}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&a.whileTap&&e.animationState.setActive("whileTap",i==="Start");const o="onTap"+(i==="End"?"":i),l=a[o];l&&Ve.postRender(()=>l(t,rl(t)))}class JC extends sa{mount(){const{current:t}=this.node;t&&(this.unmount=hj(t,(i,a)=>(Qx(this.node,a,"Start"),(o,{success:l})=>Qx(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const _h=new WeakMap,Pp=new WeakMap,eE=e=>{const t=_h.get(e.target);t&&t(e)},tE=e=>{e.forEach(eE)};function nE({root:e,...t}){const i=e||document;Pp.has(i)||Pp.set(i,{});const a=Pp.get(i),o=JSON.stringify(t);return a[o]||(a[o]=new IntersectionObserver(tE,{root:e,...t})),a[o]}function iE(e,t,i){const a=nE(t);return _h.set(e,i),a.observe(e),()=>{_h.delete(e),a.unobserve(e)}}const aE={some:0,all:1};class rE extends sa{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:i,margin:a,amount:o="some",once:l}=t,u={root:i?i.current:void 0,rootMargin:a,threshold:typeof o=="number"?o:aE[o]},f=p=>{const{isIntersecting:m}=p;if(this.isInView===m||(this.isInView=m,l&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:g,onViewportLeave:x}=this.node.getProps(),y=m?g:x;y&&y(p)};return iE(this.node.current,u,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:i}=this.node;["amount","margin","root"].some(sE(t,i))&&this.startObserver()}unmount(){}}function sE({viewport:e={}},{viewport:t={}}={}){return i=>e[i]!==t[i]}const oE={inView:{Feature:rE},tap:{Feature:JC},focus:{Feature:ZC},hover:{Feature:WC}},lE={layout:{ProjectionNode:B4,MeasureLayout:z4}},cE={...Kk,...oE,...QC,...lE},ae=ck(cE,Sk),uE=50,Wx=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),dE=()=>({time:0,x:Wx(),y:Wx()}),fE={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Zx(e,t,i,a){const o=i[t],{length:l,position:u}=fE[t],f=o.current,p=i.time;o.current=e[`scroll${u}`],o.scrollLength=e[`scroll${l}`]-e[`client${l}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=qr(0,o.scrollLength,o.current);const m=a-p;o.velocity=m>uE?0:zm(o.current-f,m)}function pE(e,t,i){Zx(e,"x",t,i),Zx(e,"y",t,i),t.time=i}function hE(e,t){const i={x:0,y:0};let a=e;for(;a&&a!==t;)if(Km(a))i.x+=a.offsetLeft,i.y+=a.offsetTop,a=a.offsetParent;else if(a.tagName==="svg"){const o=a.getBoundingClientRect();a=a.parentElement;const l=a.getBoundingClientRect();i.x+=o.left-l.left,i.y+=o.top-l.top}else if(a instanceof SVGGraphicsElement){const{x:o,y:l}=a.getBBox();i.x+=o,i.y+=l;let u=null,f=a.parentNode;for(;!u;)f.tagName==="svg"&&(u=f),f=a.parentNode;a=u}else break;return i}const $h={start:0,center:.5,end:1};function Jx(e,t,i=0){let a=0;if(e in $h&&(e=$h[e]),typeof e=="string"){const o=parseFloat(e);e.endsWith("px")?a=o:e.endsWith("%")?e=o/100:e.endsWith("vw")?a=o/100*document.documentElement.clientWidth:e.endsWith("vh")?a=o/100*document.documentElement.clientHeight:e=o}return typeof e=="number"&&(a=t*e),i+a}const mE=[0,0];function gE(e,t,i,a){let o=Array.isArray(e)?e:mE,l=0,u=0;return typeof e=="number"?o=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?o=e.split(" "):o=[e,$h[e]?e:"0"]),l=Jx(o[0],i,a),u=Jx(o[1],t),l-u}const bE={All:[[0,0],[1,1]]},xE={x:0,y:0};function yE(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function vE(e,t,i){const{offset:a=bE.All}=i,{target:o=e,axis:l="y"}=i,u=l==="y"?"height":"width",f=o!==e?hE(o,e):xE,p=o===e?{width:e.scrollWidth,height:e.scrollHeight}:yE(o),m={width:e.clientWidth,height:e.clientHeight};t[l].offset.length=0;let g=!t[l].interpolate;const x=a.length;for(let y=0;y<x;y++){const v=gE(a[y],m[u],p[u],f[l]);!g&&v!==t[l].interpolatorOffsets[y]&&(g=!0),t[l].offset[y]=v}g&&(t[l].interpolate=$m(t[l].offset,M5(a),{clamp:!1}),t[l].interpolatorOffsets=[...t[l].offset]),t[l].progress=ni(0,1,t[l].interpolate(t[l].current))}function wE(e,t=e,i){if(i.x.targetOffset=0,i.y.targetOffset=0,t!==e){let a=t;for(;a&&a!==e;)i.x.targetOffset+=a.offsetLeft,i.y.targetOffset+=a.offsetTop,a=a.offsetParent}i.x.targetLength=t===e?t.scrollWidth:t.clientWidth,i.y.targetLength=t===e?t.scrollHeight:t.clientHeight,i.x.containerLength=e.clientWidth,i.y.containerLength=e.clientHeight}function SE(e,t,i,a={}){return{measure:o=>{wE(e,a.target,i),pE(e,i,o),(a.offset||a.target)&&vE(e,i,a)},notify:()=>t(i)}}const ho=new WeakMap,ey=new WeakMap,Np=new WeakMap,ty=e=>e===document.scrollingElement?window:e;function _4(e,{container:t=document.scrollingElement,...i}={}){if(!t)return Yt;let a=Np.get(t);a||(a=new Set,Np.set(t,a));const o=dE(),l=SE(t,e,o,i);if(a.add(l),!ho.has(t)){const f=()=>{for(const x of a)x.measure(St.timestamp);Ve.preUpdate(p)},p=()=>{for(const x of a)x.notify()},m=()=>Ve.read(f);ho.set(t,m);const g=ty(t);window.addEventListener("resize",m,{passive:!0}),t!==document.documentElement&&ey.set(t,Tj(t,m)),g.addEventListener("scroll",m,{passive:!0}),m()}const u=ho.get(t);return Ve.read(u,!1,!0),()=>{var m;Pn(u);const f=Np.get(t);if(!f||(f.delete(l),f.size))return;const p=ho.get(t);ho.delete(t),p&&(ty(t).removeEventListener("scroll",p),(m=ey.get(t))==null||m(),window.removeEventListener("resize",p))}}const ny=new Map;function TE(e){const t={value:0},i=_4(a=>{t.value=a[e.axis].progress*100},e);return{currentTime:t,cancel:i}}function $4({source:e,container:t,...i}){const{axis:a}=i;e&&(t=e);const o=ny.get(t)??new Map;ny.set(t,o);const l=i.target??"self",u=o.get(l)??{},f=a+(i.offset??[]).join(",");return u[f]||(u[f]=!i.target&&O5()?new ScrollTimeline({source:t,axis:a}):TE({container:t,...i})),u[f]}function jE(e,t){const i=$4(t);return e.attachTimeline({timeline:t.target?void 0:i,observe:a=>(a.pause(),Q5(o=>{a.time=a.duration*o},i))})}function kE(e){return e.length===2}function CE(e,t){return kE(e)?_4(i=>{e(i[t.axis].progress,i)},t):Q5(e,$4(t))}function EE(e,{axis:t="y",container:i=document.scrollingElement,...a}={}){if(!i)return Yt;const o={axis:t,container:i,...a};return typeof e=="function"?CE(e,o):jE(e,o)}const AE=()=>({scrollX:Ln(0),scrollY:Ln(0),scrollXProgress:Ln(0),scrollYProgress:Ln(0)}),Ec=e=>e?!e.current:!1;function ME({container:e,target:t,...i}={}){const a=ss(AE),o=C.useRef(null),l=C.useRef(!1),u=C.useCallback(()=>(o.current=EE((f,{x:p,y:m})=>{a.scrollX.set(p.current),a.scrollXProgress.set(p.progress),a.scrollY.set(m.current),a.scrollYProgress.set(m.progress)},{...i,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0}),()=>{var f;(f=o.current)==null||f.call(o)}),[e,t,JSON.stringify(i.offset)]);return Du(()=>{if(l.current=!1,Ec(e)||Ec(t)){l.current=!0;return}else return u()},[u]),C.useEffect(()=>{if(l.current)return Ho(!Ec(e)),Ho(!Ec(t)),u()},[u]),a}function zE(e){const t=ss(()=>Ln(e)),{isStatic:i}=C.useContext(Vu);if(i){const[,a]=C.useState(e);C.useEffect(()=>t.on("change",a),[])}return t}function H4(e,t){const i=zE(t()),a=()=>i.set(t());return a(),Du(()=>{const o=()=>Ve.preRender(a,!1,!0),l=e.map(u=>u.on("change",o));return()=>{l.forEach(u=>u()),Pn(a)}}),i}function RE(e){Ao.current=[],e();const t=H4(Ao.current,e);return Ao.current=void 0,t}function iy(e,t,i,a){if(typeof e=="function")return RE(e);const o=typeof t=="function"?t:kj(t,i,a);return Array.isArray(e)?ay(e,o):ay([e],([l])=>o(l))}function ay(e,t){const i=ss(()=>[]);return H4(e,()=>{i.length=0;const a=e.length;for(let o=0;o<a;o++)i[o]=e[o].get();return t(i)})}var G4={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ry=Ee.createContext&&Ee.createContext(G4),LE=["attr","size","title"];function OE(e,t){if(e==null)return{};var i=DE(e,t),a,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}function DE(e,t){if(e==null)return{};var i={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;i[a]=e[a]}return i}function cu(){return cu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},cu.apply(this,arguments)}function sy(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,a)}return i}function uu(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?sy(Object(i),!0).forEach(function(a){PE(e,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):sy(Object(i)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))})}return e}function PE(e,t,i){return t=NE(t),t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function NE(e){var t=VE(e,"string");return typeof t=="symbol"?t:t+""}function VE(e,t){if(typeof e!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var a=i.call(e,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function U4(e){return e&&e.map((t,i)=>Ee.createElement(t.tag,uu({key:i},t.attr),U4(t.child)))}function he(e){return t=>Ee.createElement(BE,cu({attr:uu({},e.attr)},t),U4(e.child))}function BE(e){var t=i=>{var{attr:a,size:o,title:l}=e,u=OE(e,LE),f=o||i.size||"1em",p;return i.className&&(p=i.className),e.className&&(p=(p?p+" ":"")+e.className),Ee.createElement("svg",cu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,a,u,{className:p,style:uu(uu({color:e.color||i.color},i.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&Ee.createElement("title",null,l),e.children)};return ry!==void 0?Ee.createElement(ry.Consumer,null,i=>t(i)):t(G4)}function Nn(e){return he({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function _E(e){return he({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(e)}function $E(e){return he({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56l72-144zm511.98 160c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02zM440 320l72-144 72 144H440zm88 128H352V153.25c23.51-10.29 41.16-31.48 46.39-57.25H528c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H383.64C369.04 12.68 346.09 0 320 0s-49.04 12.68-63.64 32H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h129.61c5.23 25.76 22.87 46.96 46.39 57.25V448H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"},child:[]}]})(e)}function Hu(e){return he({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"},child:[]}]})(e)}function HE(e){return he({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M256.47 216.77l86.73 109.18s-16.6 102.36-76.57 150.12C206.66 523.85 0 510.19 0 510.19s3.8-23.14 11-55.43l94.62-112.17c3.97-4.7-.87-11.62-6.65-9.5l-60.4 22.09c14.44-41.66 32.72-80.04 54.6-97.47 59.97-47.76 163.3-40.94 163.3-40.94zM636.53 31.03l-19.86-25c-5.49-6.9-15.52-8.05-22.41-2.56l-232.48 177.8-34.14-42.97c-5.09-6.41-15.14-5.21-18.59 2.21l-25.33 54.55 86.73 109.18 58.8-12.45c8-1.69 11.42-11.2 6.34-17.6l-34.09-42.92 232.48-177.8c6.89-5.48 8.04-15.53 2.55-22.44z"},child:[]}]})(e)}function I4(e){return he({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(e)}function Ha(e){return he({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z"},child:[]}]})(e)}function GE(e){return he({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"},child:[]}]})(e)}function oy(e){return he({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(e)}function F4(e){return he({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 160H12c-6.627 0-12-5.373-12-12v-36c0-26.51 21.49-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.51 0 48 21.49 48 48v36c0 6.627-5.373 12-12 12zM12 192h424c6.627 0 12 5.373 12 12v260c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V204c0-6.627 5.373-12 12-12zm333.296 95.947l-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L194.12 364.665l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068l-28.397 28.17c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97z"},child:[]}]})(e)}function UE(e){return he({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(e)}function Va(e){return he({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(e)}function Qe(e){return he({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function It(e){return he({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function IE(e){return he({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(e)}function sg(e){return he({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(e)}function ly(e){return he({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"},child:[]}]})(e)}function FE(e){return he({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function Ko(e){return he({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"},child:[]}]})(e)}function qE(e){return he({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M104 96H56c-13.3 0-24 10.7-24 24v104H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h24v104c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm528 128h-24V120c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h24c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM456 32h-48c-13.3 0-24 10.7-24 24v168H256V56c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h128v168c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24z"},child:[]}]})(e)}function Yr(e){return he({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function du(e){return he({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M310.706 413.765c-1.314-6.63-7.835-10.872-14.424-9.369-10.692 2.439-27.422 5.413-45.426 5.413-56.763 0-101.929-34.79-121.461-85.449h113.689a12 12 0 0 0 11.708-9.369l6.373-28.36c1.686-7.502-4.019-14.631-11.708-14.631H115.22c-1.21-14.328-1.414-28.287.137-42.245H261.95a12 12 0 0 0 11.723-9.434l6.512-29.755c1.638-7.484-4.061-14.566-11.723-14.566H130.184c20.633-44.991 62.69-75.03 117.619-75.03 14.486 0 28.564 2.25 37.851 4.145 6.216 1.268 12.347-2.498 14.002-8.623l11.991-44.368c1.822-6.741-2.465-13.616-9.326-14.917C290.217 34.912 270.71 32 249.635 32 152.451 32 74.03 92.252 45.075 176H12c-6.627 0-12 5.373-12 12v29.755c0 6.627 5.373 12 12 12h21.569c-1.009 13.607-1.181 29.287-.181 42.245H12c-6.627 0-12 5.373-12 12v28.36c0 6.627 5.373 12 12 12h30.114C67.139 414.692 145.264 480 249.635 480c26.301 0 48.562-4.544 61.101-7.788 6.167-1.595 10.027-7.708 8.788-13.957l-8.818-44.49z"},child:[]}]})(e)}function fu(e){return he({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"},child:[]}]})(e)}function KE(e){return he({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"},child:[]}]})(e)}function cy(e){return he({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z"},child:[]}]})(e)}function Hh(e){return he({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(e)}function YE(e){return he({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(e)}function q4(e){return he({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M571.31 193.94l-22.63-22.63c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31-28.9-28.9c5.63-21.31.36-44.9-16.35-61.61l-45.25-45.25c-62.48-62.48-163.79-62.48-226.28 0l90.51 45.25v18.75c0 16.97 6.74 33.25 18.75 45.25l49.14 49.14c16.71 16.71 40.3 21.98 61.61 16.35l28.9 28.9-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l90.51-90.51c6.23-6.24 6.23-16.37-.02-22.62zm-286.72-15.2c-3.7-3.7-6.84-7.79-9.85-11.95L19.64 404.96c-25.57 23.88-26.26 64.19-1.53 88.93s65.05 24.05 88.93-1.53l238.13-255.07c-3.96-2.91-7.9-5.87-11.44-9.41l-49.14-49.14z"},child:[]}]})(e)}function XE(e){return he({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"},child:[]}]})(e)}function K4(e){return he({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"},child:[]}]})(e)}function Y4(e){return he({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M475.115 163.781L336 252.309v-68.28c0-18.916-20.931-30.399-36.885-20.248L160 252.309V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h464c13.255 0 24-10.745 24-24V184.029c0-18.917-20.931-30.399-36.885-20.248z"},child:[]}]})(e)}function uy(e){return he({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(e)}function pu(e){return he({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"},child:[]}]})(e)}function QE(e){return he({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm173.696 119.559l-63.399 63.399c-10.987-18.559-26.67-34.252-45.255-45.255l63.399-63.399a218.396 218.396 0 0 1 45.255 45.255zM256 352c-53.019 0-96-42.981-96-96s42.981-96 96-96 96 42.981 96 96-42.981 96-96 96zM127.559 82.304l63.399 63.399c-18.559 10.987-34.252 26.67-45.255 45.255l-63.399-63.399a218.372 218.372 0 0 1 45.255-45.255zM82.304 384.441l63.399-63.399c10.987 18.559 26.67 34.252 45.255 45.255l-63.399 63.399a218.396 218.396 0 0 1-45.255-45.255zm302.137 45.255l-63.399-63.399c18.559-10.987 34.252-26.67 45.255-45.255l63.399 63.399a218.403 218.403 0 0 1-45.255 45.255z"},child:[]}]})(e)}function Lo(e){return he({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(e)}function WE(e){return he({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(e)}function Xr(e){return he({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"},child:[]}]})(e)}function ZE(e){return he({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function X4(e){return he({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"},child:[]}]})(e)}function JE(e){return he({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(e)}function eA(e){return he({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M568.25 192c-29.04.13-135.01 6.16-213.84 83-33.12 29.63-53.36 63.3-66.41 94.86-13.05-31.56-33.29-65.23-66.41-94.86-78.83-76.84-184.8-82.87-213.84-83-4.41-.02-7.79 3.4-7.75 7.82.23 27.92 7.14 126.14 88.77 199.3C172.79 480.94 256 480 288 480s115.19.95 199.23-80.88c81.64-73.17 88.54-171.38 88.77-199.3.04-4.42-3.34-7.84-7.75-7.82zM287.98 302.6c12.82-18.85 27.6-35.78 44.09-50.52 19.09-18.61 39.58-33.3 60.26-45.18-16.44-70.5-51.72-133.05-96.73-172.22-4.11-3.58-11.02-3.58-15.14 0-44.99 39.14-80.27 101.63-96.74 172.07 20.37 11.7 40.5 26.14 59.22 44.39a282.768 282.768 0 0 1 45.04 51.46z"},child:[]}]})(e)}function tA(e){return he({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function nA(e){return he({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"},child:[]}]})(e)}function iA(e){return he({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"},child:[]}]})(e)}function hu(e){return he({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function aA(e){return he({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function mu(e){return he({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(e)}function rA(e){return he({attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(e)}function sA(e){return he({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"},child:[]}]})(e)}const oA=(e,t,i,a)=>{var l,u,f,p;const o=[i,{code:t,...a||{}}];if((u=(l=e==null?void 0:e.services)==null?void 0:l.logger)!=null&&u.forward)return e.services.logger.forward(o,"warn","react-i18next::",!0);Da(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),(p=(f=e==null?void 0:e.services)==null?void 0:f.logger)!=null&&p.warn?e.services.logger.warn(...o):console!=null&&console.warn&&console.warn(...o)},dy={},Gh=(e,t,i,a)=>{Da(i)&&dy[i]||(Da(i)&&(dy[i]=new Date),oA(e,t,i,a))},Q4=(e,t)=>()=>{if(e.isInitialized)t();else{const i=()=>{setTimeout(()=>{e.off("initialized",i)},0),t()};e.on("initialized",i)}},Uh=(e,t,i)=>{e.loadNamespaces(t,Q4(e,i))},fy=(e,t,i,a)=>{if(Da(i)&&(i=[i]),e.options.preload&&e.options.preload.indexOf(t)>-1)return Uh(e,i,a);i.forEach(o=>{e.options.ns.indexOf(o)<0&&e.options.ns.push(o)}),e.loadLanguages(t,Q4(e,a))},lA=(e,t,i={})=>!t.languages||!t.languages.length?(Gh(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0):t.hasLoadedNamespace(e,{lng:i.lng,precheck:(a,o)=>{if(i.bindI18n&&i.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!o(a.isLanguageChangingTo,e))return!1}}),Da=e=>typeof e=="string",cA=e=>typeof e=="object"&&e!==null,uA=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,dA={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},fA=e=>dA[e],pA=e=>e.replace(uA,fA);let Ih={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:pA};const hA=(e={})=>{Ih={...Ih,...e}},mA=()=>Ih;let W4;const gA=e=>{W4=e},bA=()=>W4,xA={type:"3rdParty",init(e){hA(e.options.react),gA(e)}},yA=C.createContext();class vA{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(i=>{this.usedNamespaces[i]||(this.usedNamespaces[i]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const wA=(e,t)=>{const i=C.useRef();return C.useEffect(()=>{i.current=e},[e,t]),i.current},Z4=(e,t,i,a)=>e.getFixedT(t,i,a),SA=(e,t,i,a)=>C.useCallback(Z4(e,t,i,a),[e,t,i,a]),Ge=(e,t={})=>{var B,M,N,P;const{i18n:i}=t,{i18n:a,defaultNS:o}=C.useContext(yA)||{},l=i||a||bA();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new vA),!l){Gh(l,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const U=(Y,Z)=>Da(Z)?Z:cA(Z)&&Da(Z.defaultValue)?Z.defaultValue:Array.isArray(Y)?Y[Y.length-1]:Y,G=[U,{},!1];return G.t=U,G.i18n={},G.ready=!1,G}(B=l.options.react)!=null&&B.wait&&Gh(l,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const u={...mA(),...l.options.react,...t},{useSuspense:f,keyPrefix:p}=u;let m=o||((M=l.options)==null?void 0:M.defaultNS);m=Da(m)?[m]:m||["translation"],(P=(N=l.reportNamespaces).addUsedNamespaces)==null||P.call(N,m);const g=(l.isInitialized||l.initializedStoreOnce)&&m.every(U=>lA(U,l,u)),x=SA(l,t.lng||null,u.nsMode==="fallback"?m:m[0],p),y=()=>x,v=()=>Z4(l,t.lng||null,u.nsMode==="fallback"?m:m[0],p),[S,j]=C.useState(y);let A=m.join();t.lng&&(A=`${t.lng}${A}`);const k=wA(A),R=C.useRef(!0);C.useEffect(()=>{const{bindI18n:U,bindI18nStore:G}=u;R.current=!0,!g&&!f&&(t.lng?fy(l,t.lng,m,()=>{R.current&&j(v)}):Uh(l,m,()=>{R.current&&j(v)})),g&&k&&k!==A&&R.current&&j(v);const Y=()=>{R.current&&j(v)};return U&&(l==null||l.on(U,Y)),G&&(l==null||l.store.on(G,Y)),()=>{R.current=!1,l&&U&&(U==null||U.split(" ").forEach(Z=>l.off(Z,Y))),G&&l&&G.split(" ").forEach(Z=>l.store.off(Z,Y))}},[l,A]),C.useEffect(()=>{R.current&&g&&j(y)},[l,p,g]);const E=[S,l,g];if(E.t=S,E.i18n=l,E.ready=g,g||!g&&!f)return E;throw new Promise(U=>{t.lng?fy(l,t.lng,m,()=>U()):Uh(l,m,()=>U())})},be=e=>typeof e=="string",mo=()=>{let e,t;const i=new Promise((a,o)=>{e=a,t=o});return i.resolve=e,i.reject=t,i},py=e=>e==null?"":""+e,TA=(e,t,i)=>{e.forEach(a=>{t[a]&&(i[a]=t[a])})},jA=/###/g,hy=e=>e&&e.indexOf("###")>-1?e.replace(jA,"."):e,my=e=>!e||be(e),Oo=(e,t,i)=>{const a=be(t)?t.split("."):t;let o=0;for(;o<a.length-1;){if(my(e))return{};const l=hy(a[o]);!e[l]&&i&&(e[l]=new i),Object.prototype.hasOwnProperty.call(e,l)?e=e[l]:e={},++o}return my(e)?{}:{obj:e,k:hy(a[o])}},gy=(e,t,i)=>{const{obj:a,k:o}=Oo(e,t,Object);if(a!==void 0||t.length===1){a[o]=i;return}let l=t[t.length-1],u=t.slice(0,t.length-1),f=Oo(e,u,Object);for(;f.obj===void 0&&u.length;)l=`${u[u.length-1]}.${l}`,u=u.slice(0,u.length-1),f=Oo(e,u,Object),f!=null&&f.obj&&typeof f.obj[`${f.k}.${l}`]<"u"&&(f.obj=void 0);f.obj[`${f.k}.${l}`]=i},kA=(e,t,i,a)=>{const{obj:o,k:l}=Oo(e,t,Object);o[l]=o[l]||[],o[l].push(i)},gu=(e,t)=>{const{obj:i,k:a}=Oo(e,t);if(i&&Object.prototype.hasOwnProperty.call(i,a))return i[a]},CA=(e,t,i)=>{const a=gu(e,i);return a!==void 0?a:gu(t,i)},J4=(e,t,i)=>{for(const a in t)a!=="__proto__"&&a!=="constructor"&&(a in e?be(e[a])||e[a]instanceof String||be(t[a])||t[a]instanceof String?i&&(e[a]=t[a]):J4(e[a],t[a],i):e[a]=t[a]);return e},Er=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var EA={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const AA=e=>be(e)?e.replace(/[&<>"'\/]/g,t=>EA[t]):e;class MA{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const i=this.regExpMap.get(t);if(i!==void 0)return i;const a=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,a),this.regExpQueue.push(t),a}}const zA=[" ",",","?","!",";"],RA=new MA(20),LA=(e,t,i)=>{t=t||"",i=i||"";const a=zA.filter(u=>t.indexOf(u)<0&&i.indexOf(u)<0);if(a.length===0)return!0;const o=RA.getRegExp(`(${a.map(u=>u==="?"?"\\?":u).join("|")})`);let l=!o.test(e);if(!l){const u=e.indexOf(i);u>0&&!o.test(e.substring(0,u))&&(l=!0)}return l},Fh=function(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;const a=t.split(i);let o=e;for(let l=0;l<a.length;){if(!o||typeof o!="object")return;let u,f="";for(let p=l;p<a.length;++p)if(p!==l&&(f+=i),f+=a[p],u=o[f],u!==void 0){if(["string","number","boolean"].indexOf(typeof u)>-1&&p<a.length-1)continue;l+=p-l+1;break}o=u}return o},bu=e=>e==null?void 0:e.replace("_","-"),OA={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){var i,a;(a=(i=console==null?void 0:console[e])==null?void 0:i.apply)==null||a.call(i,console,t)}};class xu{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,i)}init(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=i.prefix||"i18next:",this.logger=t||OA,this.options=i,this.debug=i.debug}log(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return this.forward(i,"log","",!0)}warn(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return this.forward(i,"warn","",!0)}error(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return this.forward(i,"error","")}deprecate(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return this.forward(i,"warn","WARNING DEPRECATED: ",!0)}forward(t,i,a,o){return o&&!this.debug?null:(be(t[0])&&(t[0]=`${a}${this.prefix} ${t[0]}`),this.logger[i](t))}create(t){return new xu(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new xu(this.logger,t)}}var Qn=new xu;class Gu{constructor(){this.observers={}}on(t,i){return t.split(" ").forEach(a=>{this.observers[a]||(this.observers[a]=new Map);const o=this.observers[a].get(i)||0;this.observers[a].set(i,o+1)}),this}off(t,i){if(this.observers[t]){if(!i){delete this.observers[t];return}this.observers[t].delete(i)}}emit(t){for(var i=arguments.length,a=new Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(u=>{let[f,p]=u;for(let m=0;m<p;m++)f(...a)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(u=>{let[f,p]=u;for(let m=0;m<p;m++)f.apply(f,[t,...a])})}}class by extends Gu{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const i=this.options.ns.indexOf(t);i>-1&&this.options.ns.splice(i,1)}getResource(t,i,a){var m,g;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,u=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let f;t.indexOf(".")>-1?f=t.split("."):(f=[t,i],a&&(Array.isArray(a)?f.push(...a):be(a)&&l?f.push(...a.split(l)):f.push(a)));const p=gu(this.data,f);return!p&&!i&&!a&&t.indexOf(".")>-1&&(t=f[0],i=f[1],a=f.slice(2).join(".")),p||!u||!be(a)?p:Fh((g=(m=this.data)==null?void 0:m[t])==null?void 0:g[i],a,l)}addResource(t,i,a,o){let l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const u=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator;let f=[t,i];a&&(f=f.concat(u?a.split(u):a)),t.indexOf(".")>-1&&(f=t.split("."),o=i,i=f[1]),this.addNamespaces(i),gy(this.data,f,o),l.silent||this.emit("added",t,i,a,o)}addResources(t,i,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const l in a)(be(a[l])||Array.isArray(a[l]))&&this.addResource(t,i,l,a[l],{silent:!0});o.silent||this.emit("added",t,i,a)}addResourceBundle(t,i,a,o,l){let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},f=[t,i];t.indexOf(".")>-1&&(f=t.split("."),o=a,a=i,i=f[1]),this.addNamespaces(i);let p=gu(this.data,f)||{};u.skipCopy||(a=JSON.parse(JSON.stringify(a))),o?J4(p,a,l):p={...p,...a},gy(this.data,f,p),u.silent||this.emit("added",t,i,a)}removeResourceBundle(t,i){this.hasResourceBundle(t,i)&&delete this.data[t][i],this.removeNamespaces(i),this.emit("removed",t,i)}hasResourceBundle(t,i){return this.getResource(t,i)!==void 0}getResourceBundle(t,i){return i||(i=this.options.defaultNS),this.getResource(t,i)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const i=this.getDataByLanguage(t);return!!(i&&Object.keys(i)||[]).find(o=>i[o]&&Object.keys(i[o]).length>0)}toJSON(){return this.data}}var ew={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,i,a,o){return e.forEach(l=>{var u;t=((u=this.processors[l])==null?void 0:u.process(t,i,a,o))??t}),t}};const xy={},yy=e=>!be(e)&&typeof e!="boolean"&&typeof e!="number";class yu extends Gu{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),TA(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Qn.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const a=this.resolve(t,i);return(a==null?void 0:a.res)!==void 0}extractFromKey(t,i){let a=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;a===void 0&&(a=":");const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let l=i.ns||this.options.defaultNS||[];const u=a&&t.indexOf(a)>-1,f=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!LA(t,a,o);if(u&&!f){const p=t.match(this.interpolator.nestingRegexp);if(p&&p.length>0)return{key:t,namespaces:be(l)?[l]:l};const m=t.split(a);(a!==o||a===o&&this.options.ns.indexOf(m[0])>-1)&&(l=m.shift()),t=m.join(o)}return{key:t,namespaces:be(l)?[l]:l}}translate(t,i,a){if(typeof i!="object"&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i=="object"&&(i={...i}),i||(i={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const o=i.returnDetails!==void 0?i.returnDetails:this.options.returnDetails,l=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,{key:u,namespaces:f}=this.extractFromKey(t[t.length-1],i),p=f[f.length-1],m=i.lng||this.language,g=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((m==null?void 0:m.toLowerCase())==="cimode"){if(g){const Z=i.nsSeparator||this.options.nsSeparator;return o?{res:`${p}${Z}${u}`,usedKey:u,exactUsedKey:u,usedLng:m,usedNS:p,usedParams:this.getUsedParamsDetails(i)}:`${p}${Z}${u}`}return o?{res:u,usedKey:u,exactUsedKey:u,usedLng:m,usedNS:p,usedParams:this.getUsedParamsDetails(i)}:u}const x=this.resolve(t,i);let y=x==null?void 0:x.res;const v=(x==null?void 0:x.usedKey)||u,S=(x==null?void 0:x.exactUsedKey)||u,j=["[object Number]","[object Function]","[object RegExp]"],A=i.joinArrays!==void 0?i.joinArrays:this.options.joinArrays,k=!this.i18nFormat||this.i18nFormat.handleAsObject,R=i.count!==void 0&&!be(i.count),E=yu.hasDefaultValue(i),B=R?this.pluralResolver.getSuffix(m,i.count,i):"",M=i.ordinal&&R?this.pluralResolver.getSuffix(m,i.count,{ordinal:!1}):"",N=R&&!i.ordinal&&i.count===0,P=N&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${B}`]||i[`defaultValue${M}`]||i.defaultValue;let U=y;k&&!y&&E&&(U=P);const G=yy(U),Y=Object.prototype.toString.apply(U);if(k&&U&&G&&j.indexOf(Y)<0&&!(be(A)&&Array.isArray(U))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const Z=this.options.returnedObjectHandler?this.options.returnedObjectHandler(v,U,{...i,ns:f}):`key '${u} (${this.language})' returned an object instead of string.`;return o?(x.res=Z,x.usedParams=this.getUsedParamsDetails(i),x):Z}if(l){const Z=Array.isArray(U),ne=Z?[]:{},le=Z?S:v;for(const ce in U)if(Object.prototype.hasOwnProperty.call(U,ce)){const ue=`${le}${l}${ce}`;E&&!y?ne[ce]=this.translate(ue,{...i,defaultValue:yy(P)?P[ce]:void 0,joinArrays:!1,ns:f}):ne[ce]=this.translate(ue,{...i,joinArrays:!1,ns:f}),ne[ce]===ue&&(ne[ce]=U[ce])}y=ne}}else if(k&&be(A)&&Array.isArray(y))y=y.join(A),y&&(y=this.extendTranslation(y,t,i,a));else{let Z=!1,ne=!1;!this.isValidLookup(y)&&E&&(Z=!0,y=P),this.isValidLookup(y)||(ne=!0,y=u);const ce=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&ne?void 0:y,ue=E&&P!==y&&this.options.updateMissing;if(ne||Z||ue){if(this.logger.log(ue?"updateKey":"missingKey",m,p,u,ue?P:y),l){const Q=this.resolve(u,{...i,keySeparator:!1});Q&&Q.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let H=[];const D=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo==="fallback"&&D&&D[0])for(let Q=0;Q<D.length;Q++)H.push(D[Q]);else this.options.saveMissingTo==="all"?H=this.languageUtils.toResolveHierarchy(i.lng||this.language):H.push(i.lng||this.language);const _=(Q,z,X)=>{var ie;const te=E&&X!==y?X:ce;this.options.missingKeyHandler?this.options.missingKeyHandler(Q,p,z,te,ue,i):(ie=this.backendConnector)!=null&&ie.saveMissing&&this.backendConnector.saveMissing(Q,p,z,te,ue,i),this.emit("missingKey",Q,p,z,y)};this.options.saveMissing&&(this.options.saveMissingPlurals&&R?H.forEach(Q=>{const z=this.pluralResolver.getSuffixes(Q,i);N&&i[`defaultValue${this.options.pluralSeparator}zero`]&&z.indexOf(`${this.options.pluralSeparator}zero`)<0&&z.push(`${this.options.pluralSeparator}zero`),z.forEach(X=>{_([Q],u+X,i[`defaultValue${X}`]||P)})}):_(H,u,P))}y=this.extendTranslation(y,t,i,x,a),ne&&y===u&&this.options.appendNamespaceToMissingKey&&(y=`${p}:${u}`),(ne||Z)&&this.options.parseMissingKeyHandler&&(y=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${p}:${u}`:u,Z?y:void 0))}return o?(x.res=y,x.usedParams=this.getUsedParamsDetails(i),x):y}extendTranslation(t,i,a,o,l){var m,g;var u=this;if((m=this.i18nFormat)!=null&&m.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...a},a.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!a.skipInterpolation){a.interpolation&&this.interpolator.init({...a,interpolation:{...this.options.interpolation,...a.interpolation}});const x=be(t)&&(((g=a==null?void 0:a.interpolation)==null?void 0:g.skipOnVariables)!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let y;if(x){const S=t.match(this.interpolator.nestingRegexp);y=S&&S.length}let v=a.replace&&!be(a.replace)?a.replace:a;if(this.options.interpolation.defaultVariables&&(v={...this.options.interpolation.defaultVariables,...v}),t=this.interpolator.interpolate(t,v,a.lng||this.language||o.usedLng,a),x){const S=t.match(this.interpolator.nestingRegexp),j=S&&S.length;y<j&&(a.nest=!1)}!a.lng&&o&&o.res&&(a.lng=this.language||o.usedLng),a.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var S=arguments.length,j=new Array(S),A=0;A<S;A++)j[A]=arguments[A];return(l==null?void 0:l[0])===j[0]&&!a.context?(u.logger.warn(`It seems you are nesting recursively key: ${j[0]} in key: ${i[0]}`),null):u.translate(...j,i)},a)),a.interpolation&&this.interpolator.reset()}const f=a.postProcess||this.options.postProcess,p=be(f)?[f]:f;return t!=null&&(p!=null&&p.length)&&a.applyPostProcessor!==!1&&(t=ew.handle(p,t,i,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(a)},...a}:a,this)),t}resolve(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a,o,l,u,f;return be(t)&&(t=[t]),t.forEach(p=>{if(this.isValidLookup(a))return;const m=this.extractFromKey(p,i),g=m.key;o=g;let x=m.namespaces;this.options.fallbackNS&&(x=x.concat(this.options.fallbackNS));const y=i.count!==void 0&&!be(i.count),v=y&&!i.ordinal&&i.count===0,S=i.context!==void 0&&(be(i.context)||typeof i.context=="number")&&i.context!=="",j=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);x.forEach(A=>{var k,R;this.isValidLookup(a)||(f=A,!xy[`${j[0]}-${A}`]&&((k=this.utils)!=null&&k.hasLoadedNamespace)&&!((R=this.utils)!=null&&R.hasLoadedNamespace(f))&&(xy[`${j[0]}-${A}`]=!0,this.logger.warn(`key "${o}" for languages "${j.join(", ")}" won't get resolved as namespace "${f}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),j.forEach(E=>{var N;if(this.isValidLookup(a))return;u=E;const B=[g];if((N=this.i18nFormat)!=null&&N.addLookupKeys)this.i18nFormat.addLookupKeys(B,g,E,A,i);else{let P;y&&(P=this.pluralResolver.getSuffix(E,i.count,i));const U=`${this.options.pluralSeparator}zero`,G=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(y&&(B.push(g+P),i.ordinal&&P.indexOf(G)===0&&B.push(g+P.replace(G,this.options.pluralSeparator)),v&&B.push(g+U)),S){const Y=`${g}${this.options.contextSeparator}${i.context}`;B.push(Y),y&&(B.push(Y+P),i.ordinal&&P.indexOf(G)===0&&B.push(Y+P.replace(G,this.options.pluralSeparator)),v&&B.push(Y+U))}}let M;for(;M=B.pop();)this.isValidLookup(a)||(l=M,a=this.getResource(E,A,M,i))}))})}),{res:a,usedKey:o,exactUsedKey:l,usedLng:u,usedNS:f}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,i,a){var l;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(l=this.i18nFormat)!=null&&l.getResource?this.i18nFormat.getResource(t,i,a,o):this.resourceStore.getResource(t,i,a,o)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const i=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],a=t.replace&&!be(t.replace);let o=a?t.replace:t;if(a&&typeof t.count<"u"&&(o.count=t.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!a){o={...o};for(const l of i)delete o[l]}return o}static hasDefaultValue(t){const i="defaultValue";for(const a in t)if(Object.prototype.hasOwnProperty.call(t,a)&&i===a.substring(0,i.length)&&t[a]!==void 0)return!0;return!1}}class vy{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Qn.create("languageUtils")}getScriptPartFromCode(t){if(t=bu(t),!t||t.indexOf("-")<0)return null;const i=t.split("-");return i.length===2||(i.pop(),i[i.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(i.join("-"))}getLanguagePartFromCode(t){if(t=bu(t),!t||t.indexOf("-")<0)return t;const i=t.split("-");return this.formatLanguageCode(i[0])}formatLanguageCode(t){if(be(t)&&t.indexOf("-")>-1){let i;try{i=Intl.getCanonicalLocales(t)[0]}catch{}return i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i||(this.options.lowerCaseLng?t.toLowerCase():t)}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let i;return t.forEach(a=>{if(i)return;const o=this.formatLanguageCode(a);(!this.options.supportedLngs||this.isSupportedCode(o))&&(i=o)}),!i&&this.options.supportedLngs&&t.forEach(a=>{if(i)return;const o=this.getLanguagePartFromCode(a);if(this.isSupportedCode(o))return i=o;i=this.options.supportedLngs.find(l=>{if(l===o)return l;if(!(l.indexOf("-")<0&&o.indexOf("-")<0)&&(l.indexOf("-")>0&&o.indexOf("-")<0&&l.substring(0,l.indexOf("-"))===o||l.indexOf(o)===0&&o.length>1))return l})}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}getFallbackCodes(t,i){if(!t)return[];if(typeof t=="function"&&(t=t(i)),be(t)&&(t=[t]),Array.isArray(t))return t;if(!i)return t.default||[];let a=t[i];return a||(a=t[this.getScriptPartFromCode(i)]),a||(a=t[this.formatLanguageCode(i)]),a||(a=t[this.getLanguagePartFromCode(i)]),a||(a=t.default),a||[]}toResolveHierarchy(t,i){const a=this.getFallbackCodes(i||this.options.fallbackLng||[],t),o=[],l=u=>{u&&(this.isSupportedCode(u)?o.push(u):this.logger.warn(`rejecting language code not found in supportedLngs: ${u}`))};return be(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&l(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&l(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&l(this.getLanguagePartFromCode(t))):be(t)&&l(this.formatLanguageCode(t)),a.forEach(u=>{o.indexOf(u)<0&&l(this.formatLanguageCode(u))}),o}}const wy={zero:0,one:1,two:2,few:3,many:4,other:5},Sy={select:e=>e===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class DA{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=i,this.logger=Qn.create("pluralResolver"),this.pluralRulesCache={}}addRule(t,i){this.rules[t]=i}clearCache(){this.pluralRulesCache={}}getRule(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=bu(t==="dev"?"en":t),o=i.ordinal?"ordinal":"cardinal",l=JSON.stringify({cleanedCode:a,type:o});if(l in this.pluralRulesCache)return this.pluralRulesCache[l];let u;try{u=new Intl.PluralRules(a,{type:o})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Sy;if(!t.match(/-|_/))return Sy;const p=this.languageUtils.getLanguagePartFromCode(t);u=this.getRule(p,i)}return this.pluralRulesCache[l]=u,u}needsPlural(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(t,i);return a||(a=this.getRule("dev",i)),(a==null?void 0:a.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(t,i){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,a).map(o=>`${i}${o}`)}getSuffixes(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(t,i);return a||(a=this.getRule("dev",i)),a?a.resolvedOptions().pluralCategories.sort((o,l)=>wy[o]-wy[l]).map(o=>`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${o}`):[]}getSuffix(t,i){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(t,a);return o?`${this.options.prepend}${a.ordinal?`ordinal${this.options.prepend}`:""}${o.select(i)}`:(this.logger.warn(`no plural rule found for: ${t}`),this.getSuffix("dev",i,a))}}const Ty=function(e,t,i){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=CA(e,t,i);return!l&&o&&be(i)&&(l=Fh(e,i,a),l===void 0&&(l=Fh(t,i,a))),l},Vp=e=>e.replace(/\$/g,"$$$$");class PA{constructor(){var i;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Qn.create("interpolator"),this.options=t,this.format=((i=t==null?void 0:t.interpolation)==null?void 0:i.format)||(a=>a),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:i,escapeValue:a,useRawValueToEscape:o,prefix:l,prefixEscaped:u,suffix:f,suffixEscaped:p,formatSeparator:m,unescapeSuffix:g,unescapePrefix:x,nestingPrefix:y,nestingPrefixEscaped:v,nestingSuffix:S,nestingSuffixEscaped:j,nestingOptionsSeparator:A,maxReplaces:k,alwaysFormat:R}=t.interpolation;this.escape=i!==void 0?i:AA,this.escapeValue=a!==void 0?a:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=l?Er(l):u||"{{",this.suffix=f?Er(f):p||"}}",this.formatSeparator=m||",",this.unescapePrefix=g?"":x||"-",this.unescapeSuffix=this.unescapePrefix?"":g||"",this.nestingPrefix=y?Er(y):v||Er("$t("),this.nestingSuffix=S?Er(S):j||Er(")"),this.nestingOptionsSeparator=A||",",this.maxReplaces=k||1e3,this.alwaysFormat=R!==void 0?R:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(i,a)=>(i==null?void 0:i.source)===a?(i.lastIndex=0,i):new RegExp(a,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,i,a,o){var v;let l,u,f;const p=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},m=S=>{if(S.indexOf(this.formatSeparator)<0){const R=Ty(i,p,S,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(R,void 0,a,{...o,...i,interpolationkey:S}):R}const j=S.split(this.formatSeparator),A=j.shift().trim(),k=j.join(this.formatSeparator).trim();return this.format(Ty(i,p,A,this.options.keySeparator,this.options.ignoreJSONStructure),k,a,{...o,...i,interpolationkey:A})};this.resetRegExp();const g=(o==null?void 0:o.missingInterpolationHandler)||this.options.missingInterpolationHandler,x=((v=o==null?void 0:o.interpolation)==null?void 0:v.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:S=>Vp(S)},{regex:this.regexp,safeValue:S=>this.escapeValue?Vp(this.escape(S)):Vp(S)}].forEach(S=>{for(f=0;l=S.regex.exec(t);){const j=l[1].trim();if(u=m(j),u===void 0)if(typeof g=="function"){const k=g(t,l,o);u=be(k)?k:""}else if(o&&Object.prototype.hasOwnProperty.call(o,j))u="";else if(x){u=l[0];continue}else this.logger.warn(`missed to pass in variable ${j} for interpolating ${t}`),u="";else!be(u)&&!this.useRawValueToEscape&&(u=py(u));const A=S.safeValue(u);if(t=t.replace(l[0],A),x?(S.regex.lastIndex+=u.length,S.regex.lastIndex-=l[0].length):S.regex.lastIndex=0,f++,f>=this.maxReplaces)break}}),t}nest(t,i){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,l,u;const f=(p,m)=>{const g=this.nestingOptionsSeparator;if(p.indexOf(g)<0)return p;const x=p.split(new RegExp(`${g}[ ]*{`));let y=`{${x[1]}`;p=x[0],y=this.interpolate(y,u);const v=y.match(/'/g),S=y.match(/"/g);(((v==null?void 0:v.length)??0)%2===0&&!S||S.length%2!==0)&&(y=y.replace(/'/g,'"'));try{u=JSON.parse(y),m&&(u={...m,...u})}catch(j){return this.logger.warn(`failed parsing options string in nesting for key ${p}`,j),`${p}${g}${y}`}return u.defaultValue&&u.defaultValue.indexOf(this.prefix)>-1&&delete u.defaultValue,p};for(;o=this.nestingRegexp.exec(t);){let p=[];u={...a},u=u.replace&&!be(u.replace)?u.replace:u,u.applyPostProcessor=!1,delete u.defaultValue;let m=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const g=o[1].split(this.formatSeparator).map(x=>x.trim());o[1]=g.shift(),p=g,m=!0}if(l=i(f.call(this,o[1].trim(),u),u),l&&o[0]===t&&!be(l))return l;be(l)||(l=py(l)),l||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),l=""),m&&(l=p.reduce((g,x)=>this.format(g,x,a.lng,{...a,interpolationkey:o[1].trim()}),l.trim())),t=t.replace(o[0],l),this.regexp.lastIndex=0}return t}}const NA=e=>{let t=e.toLowerCase().trim();const i={};if(e.indexOf("(")>-1){const a=e.split("(");t=a[0].toLowerCase().trim();const o=a[1].substring(0,a[1].length-1);t==="currency"&&o.indexOf(":")<0?i.currency||(i.currency=o.trim()):t==="relativetime"&&o.indexOf(":")<0?i.range||(i.range=o.trim()):o.split(";").forEach(u=>{if(u){const[f,...p]=u.split(":"),m=p.join(":").trim().replace(/^'+|'+$/g,""),g=f.trim();i[g]||(i[g]=m),m==="false"&&(i[g]=!1),m==="true"&&(i[g]=!0),isNaN(m)||(i[g]=parseInt(m,10))}})}return{formatName:t,formatOptions:i}},Ar=e=>{const t={};return(i,a,o)=>{let l=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(l={...l,[o.interpolationkey]:void 0});const u=a+JSON.stringify(l);let f=t[u];return f||(f=e(bu(a),o),t[u]=f),f(i)}};class VA{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Qn.create("formatter"),this.options=t,this.formats={number:Ar((i,a)=>{const o=new Intl.NumberFormat(i,{...a});return l=>o.format(l)}),currency:Ar((i,a)=>{const o=new Intl.NumberFormat(i,{...a,style:"currency"});return l=>o.format(l)}),datetime:Ar((i,a)=>{const o=new Intl.DateTimeFormat(i,{...a});return l=>o.format(l)}),relativetime:Ar((i,a)=>{const o=new Intl.RelativeTimeFormat(i,{...a});return l=>o.format(l,a.range||"day")}),list:Ar((i,a)=>{const o=new Intl.ListFormat(i,{...a});return l=>o.format(l)})},this.init(t)}init(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=i.interpolation.formatSeparator||","}add(t,i){this.formats[t.toLowerCase().trim()]=i}addCached(t,i){this.formats[t.toLowerCase().trim()]=Ar(i)}format(t,i,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=i.split(this.formatSeparator);if(l.length>1&&l[0].indexOf("(")>1&&l[0].indexOf(")")<0&&l.find(f=>f.indexOf(")")>-1)){const f=l.findIndex(p=>p.indexOf(")")>-1);l[0]=[l[0],...l.splice(1,f)].join(this.formatSeparator)}return l.reduce((f,p)=>{var x;const{formatName:m,formatOptions:g}=NA(p);if(this.formats[m]){let y=f;try{const v=((x=o==null?void 0:o.formatParams)==null?void 0:x[o.interpolationkey])||{},S=v.locale||v.lng||o.locale||o.lng||a;y=this.formats[m](f,S,{...g,...o,...v})}catch(v){this.logger.warn(v)}return y}else this.logger.warn(`there was no format function for ${m}`);return f},t)}}const BA=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)};class _A extends Gu{constructor(t,i,a){var l,u;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=i,this.services=a,this.languageUtils=a.languageUtils,this.options=o,this.logger=Qn.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],(u=(l=this.backend)==null?void 0:l.init)==null||u.call(l,a,o.backend,o)}queueLoad(t,i,a,o){const l={},u={},f={},p={};return t.forEach(m=>{let g=!0;i.forEach(x=>{const y=`${m}|${x}`;!a.reload&&this.store.hasResourceBundle(m,x)?this.state[y]=2:this.state[y]<0||(this.state[y]===1?u[y]===void 0&&(u[y]=!0):(this.state[y]=1,g=!1,u[y]===void 0&&(u[y]=!0),l[y]===void 0&&(l[y]=!0),p[x]===void 0&&(p[x]=!0)))}),g||(f[m]=!0)}),(Object.keys(l).length||Object.keys(u).length)&&this.queue.push({pending:u,pendingCount:Object.keys(u).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(l),pending:Object.keys(u),toLoadLanguages:Object.keys(f),toLoadNamespaces:Object.keys(p)}}loaded(t,i,a){const o=t.split("|"),l=o[0],u=o[1];i&&this.emit("failedLoading",l,u,i),!i&&a&&this.store.addResourceBundle(l,u,a,void 0,void 0,{skipCopy:!0}),this.state[t]=i?-1:2,i&&a&&(this.state[t]=0);const f={};this.queue.forEach(p=>{kA(p.loaded,[l],u),BA(p,t),i&&p.errors.push(i),p.pendingCount===0&&!p.done&&(Object.keys(p.loaded).forEach(m=>{f[m]||(f[m]={});const g=p.loaded[m];g.length&&g.forEach(x=>{f[m][x]===void 0&&(f[m][x]=!0)})}),p.done=!0,p.errors.length?p.callback(p.errors):p.callback())}),this.emit("loaded",f),this.queue=this.queue.filter(p=>!p.done)}read(t,i,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,u=arguments.length>5?arguments[5]:void 0;if(!t.length)return u(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:i,fcName:a,tried:o,wait:l,callback:u});return}this.readingCalls++;const f=(m,g)=>{if(this.readingCalls--,this.waitingReads.length>0){const x=this.waitingReads.shift();this.read(x.lng,x.ns,x.fcName,x.tried,x.wait,x.callback)}if(m&&g&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,t,i,a,o+1,l*2,u)},l);return}u(m,g)},p=this.backend[a].bind(this.backend);if(p.length===2){try{const m=p(t,i);m&&typeof m.then=="function"?m.then(g=>f(null,g)).catch(f):f(null,m)}catch(m){f(m)}return}return p(t,i,f)}prepareLoading(t,i){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();be(t)&&(t=this.languageUtils.toResolveHierarchy(t)),be(i)&&(i=[i]);const l=this.queueLoad(t,i,a,o);if(!l.toLoad.length)return l.pending.length||o(),null;l.toLoad.forEach(u=>{this.loadOne(u)})}load(t,i,a){this.prepareLoading(t,i,{},a)}reload(t,i,a){this.prepareLoading(t,i,{reload:!0},a)}loadOne(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const a=t.split("|"),o=a[0],l=a[1];this.read(o,l,"read",void 0,void 0,(u,f)=>{u&&this.logger.warn(`${i}loading namespace ${l} for language ${o} failed`,u),!u&&f&&this.logger.log(`${i}loaded namespace ${l} for language ${o}`,f),this.loaded(t,u,f)})}saveMissing(t,i,a,o,l){var p,m,g,x,y;let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},f=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((m=(p=this.services)==null?void 0:p.utils)!=null&&m.hasLoadedNamespace&&!((x=(g=this.services)==null?void 0:g.utils)!=null&&x.hasLoadedNamespace(i))){this.logger.warn(`did not save key "${a}" as the namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(a==null||a==="")){if((y=this.backend)!=null&&y.create){const v={...u,isUpdate:l},S=this.backend.create.bind(this.backend);if(S.length<6)try{let j;S.length===5?j=S(t,i,a,o,v):j=S(t,i,a,o),j&&typeof j.then=="function"?j.then(A=>f(null,A)).catch(f):f(null,j)}catch(j){f(j)}else S(t,i,a,o,f,v)}!t||!t[0]||this.store.addResource(t[0],i,a,o)}}}const jy=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]=="object"&&(t=e[1]),be(e[1])&&(t.defaultValue=e[1]),be(e[2])&&(t.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const i=e[3]||e[2];Object.keys(i).forEach(a=>{t[a]=i[a]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),ky=e=>{var t,i;return be(e.ns)&&(e.ns=[e.ns]),be(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),be(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),((i=(t=e.supportedLngs)==null?void 0:t.indexOf)==null?void 0:i.call(t,"cimode"))<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),typeof e.initImmediate=="boolean"&&(e.initAsync=e.initImmediate),e},Ac=()=>{},$A=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(i=>{typeof e[i]=="function"&&(e[i]=e[i].bind(e))})};class Yo extends Gu{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(super(),this.options=ky(t),this.services={},this.logger=Qn,this.modules={external:[]},$A(this),i&&!this.isInitialized&&!t.isClone){if(!this.options.initAsync)return this.init(t,i),this;setTimeout(()=>{this.init(t,i)},0)}}init(){var t=this;let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof i=="function"&&(a=i,i={}),i.defaultNS==null&&i.ns&&(be(i.ns)?i.defaultNS=i.ns:i.ns.indexOf("translation")<0&&(i.defaultNS=i.ns[0]));const o=jy();this.options={...o,...this.options,...ky(i)},this.options.interpolation={...o.interpolation,...this.options.interpolation},i.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=i.keySeparator),i.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=i.nsSeparator);const l=g=>g?typeof g=="function"?new g:g:null;if(!this.options.isClone){this.modules.logger?Qn.init(l(this.modules.logger),this.options):Qn.init(null,this.options);let g;this.modules.formatter?g=this.modules.formatter:g=VA;const x=new vy(this.options);this.store=new by(this.options.resources,this.options);const y=this.services;y.logger=Qn,y.resourceStore=this.store,y.languageUtils=x,y.pluralResolver=new DA(x,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),g&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(y.formatter=l(g),y.formatter.init(y,this.options),this.options.interpolation.format=y.formatter.format.bind(y.formatter)),y.interpolator=new PA(this.options),y.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},y.backendConnector=new _A(l(this.modules.backend),y.resourceStore,y,this.options),y.backendConnector.on("*",function(v){for(var S=arguments.length,j=new Array(S>1?S-1:0),A=1;A<S;A++)j[A-1]=arguments[A];t.emit(v,...j)}),this.modules.languageDetector&&(y.languageDetector=l(this.modules.languageDetector),y.languageDetector.init&&y.languageDetector.init(y,this.options.detection,this.options)),this.modules.i18nFormat&&(y.i18nFormat=l(this.modules.i18nFormat),y.i18nFormat.init&&y.i18nFormat.init(this)),this.translator=new yu(this.services,this.options),this.translator.on("*",function(v){for(var S=arguments.length,j=new Array(S>1?S-1:0),A=1;A<S;A++)j[A-1]=arguments[A];t.emit(v,...j)}),this.modules.external.forEach(v=>{v.init&&v.init(this)})}if(this.format=this.options.interpolation.format,a||(a=Ac),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const g=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);g.length>0&&g[0]!=="dev"&&(this.options.lng=g[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(g=>{this[g]=function(){return t.store[g](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(g=>{this[g]=function(){return t.store[g](...arguments),t}});const p=mo(),m=()=>{const g=(x,y)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),p.resolve(y),a(x,y)};if(this.languages&&!this.isInitialized)return g(null,this.t.bind(this));this.changeLanguage(this.options.lng,g)};return this.options.resources||!this.options.initAsync?m():setTimeout(m,0),p}loadResources(t){var l,u;let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ac;const o=be(t)?t:this.language;if(typeof t=="function"&&(a=t),!this.options.resources||this.options.partialBundledLanguages){if((o==null?void 0:o.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return a();const f=[],p=m=>{if(!m||m==="cimode")return;this.services.languageUtils.toResolveHierarchy(m).forEach(x=>{x!=="cimode"&&f.indexOf(x)<0&&f.push(x)})};o?p(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(g=>p(g)),(u=(l=this.options.preload)==null?void 0:l.forEach)==null||u.call(l,m=>p(m)),this.services.backendConnector.load(f,this.options.ns,m=>{!m&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),a(m)})}else a(null)}reloadResources(t,i,a){const o=mo();return typeof t=="function"&&(a=t,t=void 0),typeof i=="function"&&(a=i,i=void 0),t||(t=this.languages),i||(i=this.options.ns),a||(a=Ac),this.services.backendConnector.reload(t,i,l=>{o.resolve(),a(l)}),o}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&ew.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let i=0;i<this.languages.length;i++){const a=this.languages[i];if(!(["cimode","dev"].indexOf(a)>-1)&&this.store.hasLanguageSomeTranslations(a)){this.resolvedLanguage=a;break}}}changeLanguage(t,i){var a=this;this.isLanguageChangingTo=t;const o=mo();this.emit("languageChanging",t);const l=p=>{this.language=p,this.languages=this.services.languageUtils.toResolveHierarchy(p),this.resolvedLanguage=void 0,this.setResolvedLanguage(p)},u=(p,m)=>{m?(l(m),this.translator.changeLanguage(m),this.isLanguageChangingTo=void 0,this.emit("languageChanged",m),this.logger.log("languageChanged",m)):this.isLanguageChangingTo=void 0,o.resolve(function(){return a.t(...arguments)}),i&&i(p,function(){return a.t(...arguments)})},f=p=>{var g,x;!t&&!p&&this.services.languageDetector&&(p=[]);const m=be(p)?p:this.services.languageUtils.getBestMatchFromCodes(p);m&&(this.language||l(m),this.translator.language||this.translator.changeLanguage(m),(x=(g=this.services.languageDetector)==null?void 0:g.cacheUserLanguage)==null||x.call(g,m)),this.loadResources(m,y=>{u(y,m)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?f(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(f):this.services.languageDetector.detect(f):f(t),o}getFixedT(t,i,a){var o=this;const l=function(u,f){let p;if(typeof f!="object"){for(var m=arguments.length,g=new Array(m>2?m-2:0),x=2;x<m;x++)g[x-2]=arguments[x];p=o.options.overloadTranslationOptionHandler([u,f].concat(g))}else p={...f};p.lng=p.lng||l.lng,p.lngs=p.lngs||l.lngs,p.ns=p.ns||l.ns,p.keyPrefix!==""&&(p.keyPrefix=p.keyPrefix||a||l.keyPrefix);const y=o.options.keySeparator||".";let v;return p.keyPrefix&&Array.isArray(u)?v=u.map(S=>`${p.keyPrefix}${y}${S}`):v=p.keyPrefix?`${p.keyPrefix}${y}${u}`:u,o.t(v,p)};return be(t)?l.lng=t:l.lngs=t,l.ns=i,l.keyPrefix=a,l}t(){var o;for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return(o=this.translator)==null?void 0:o.translate(...i)}exists(){var o;for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return(o=this.translator)==null?void 0:o.exists(...i)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const a=i.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,l=this.languages[this.languages.length-1];if(a.toLowerCase()==="cimode")return!0;const u=(f,p)=>{const m=this.services.backendConnector.state[`${f}|${p}`];return m===-1||m===0||m===2};if(i.precheck){const f=i.precheck(this,u);if(f!==void 0)return f}return!!(this.hasResourceBundle(a,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||u(a,t)&&(!o||u(l,t)))}loadNamespaces(t,i){const a=mo();return this.options.ns?(be(t)&&(t=[t]),t.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{a.resolve(),i&&i(o)}),a):(i&&i(),Promise.resolve())}loadLanguages(t,i){const a=mo();be(t)&&(t=[t]);const o=this.options.preload||[],l=t.filter(u=>o.indexOf(u)<0&&this.services.languageUtils.isSupportedCode(u));return l.length?(this.options.preload=o.concat(l),this.loadResources(u=>{a.resolve(),i&&i(u)}),a):(i&&i(),Promise.resolve())}dir(t){var o,l;if(t||(t=this.resolvedLanguage||(((o=this.languages)==null?void 0:o.length)>0?this.languages[0]:this.language)),!t)return"rtl";const i=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],a=((l=this.services)==null?void 0:l.languageUtils)||new vy(jy());return i.indexOf(a.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;return new Yo(t,i)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ac;const a=t.forkResourceStore;a&&delete t.forkResourceStore;const o={...this.options,...t,isClone:!0},l=new Yo(o);if((t.debug!==void 0||t.prefix!==void 0)&&(l.logger=l.logger.clone(t)),["store","services","language"].forEach(f=>{l[f]=this[f]}),l.services={...this.services},l.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},a){const f=Object.keys(this.store.data).reduce((p,m)=>(p[m]={...this.store.data[m]},Object.keys(p[m]).reduce((g,x)=>(g[x]={...p[m][x]},g),{})),{});l.store=new by(f,o),l.services.resourceStore=l.store}return l.translator=new yu(l.services,o),l.translator.on("*",function(f){for(var p=arguments.length,m=new Array(p>1?p-1:0),g=1;g<p;g++)m[g-1]=arguments[g];l.emit(f,...m)}),l.init(o,i),l.translator.options=o,l.translator.backendConnector.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},l}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Nt=Yo.createInstance();Nt.createInstance=Yo.createInstance;Nt.createInstance;Nt.dir;Nt.init;Nt.loadResources;Nt.reloadResources;Nt.use;Nt.changeLanguage;Nt.getFixedT;Nt.t;Nt.exists;Nt.setDefaultNamespace;Nt.hasLoadedNamespace;Nt.loadNamespaces;Nt.loadLanguages;function qh(e){"@babel/helpers - typeof";return qh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qh(e)}function tw(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":qh(XMLHttpRequest))==="object"}function HA(e){return!!e&&typeof e.then=="function"}function GA(e){return HA(e)?e:Promise.resolve(e)}const UA="modulepreload",IA=function(e){return"/"+e},Cy={},FA=function(t,i,a){let o=Promise.resolve();if(i&&i.length>0){let u=function(m){return Promise.all(m.map(g=>Promise.resolve(g).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),p=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));o=u(i.map(m=>{if(m=IA(m),m in Cy)return;Cy[m]=!0;const g=m.endsWith(".css"),x=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${x}`))return;const y=document.createElement("link");if(y.rel=g?"stylesheet":UA,g||(y.as="script"),y.crossOrigin="",y.href=m,p&&y.setAttribute("nonce",p),document.head.appendChild(y),g)return new Promise((v,S)=>{y.addEventListener("load",v),y.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${m}`)))})}))}function l(u){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=u,window.dispatchEvent(f),!f.defaultPrevented)throw u}return o.then(u=>{for(const f of u||[])f.status==="rejected"&&l(f.reason);return t().catch(l)})};function Ey(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,a)}return i}function Ay(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?Ey(Object(i),!0).forEach(function(a){qA(e,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Ey(Object(i)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))})}return e}function qA(e,t,i){return(t=KA(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function KA(e){var t=YA(e,"string");return Ba(t)=="symbol"?t:t+""}function YA(e,t){if(Ba(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var a=i.call(e,t);if(Ba(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ba(e){"@babel/helpers - typeof";return Ba=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ba(e)}var ia=typeof fetch=="function"?fetch:void 0;typeof global<"u"&&global.fetch?ia=global.fetch:typeof window<"u"&&window.fetch&&(ia=window.fetch);var Xo;tw()&&(typeof global<"u"&&global.XMLHttpRequest?Xo=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(Xo=window.XMLHttpRequest));var vu;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?vu=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(vu=window.ActiveXObject));typeof ia!="function"&&(ia=void 0);if(!ia&&!Xo&&!vu)try{FA(()=>import("./browser-ponyfill-CGG7sVpA.js").then(e=>e.b),[]).then(function(e){ia=e.default}).catch(function(){})}catch{}var Kh=function(t,i){if(i&&Ba(i)==="object"){var a="";for(var o in i)a+="&"+encodeURIComponent(o)+"="+encodeURIComponent(i[o]);if(!a)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+a.slice(1)}return t},My=function(t,i,a,o){var l=function(p){if(!p.ok)return a(p.statusText||"Error",{status:p.status});p.text().then(function(m){a(null,{status:p.status,data:m})}).catch(a)};if(o){var u=o(t,i);if(u instanceof Promise){u.then(l).catch(a);return}}typeof fetch=="function"?fetch(t,i).then(l).catch(a):ia(t,i).then(l).catch(a)},zy=!1,XA=function(t,i,a,o){t.queryStringParams&&(i=Kh(i,t.queryStringParams));var l=Ay({},typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(l["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),a&&(l["Content-Type"]="application/json");var u=typeof t.requestOptions=="function"?t.requestOptions(a):t.requestOptions,f=Ay({method:a?"POST":"GET",body:a?t.stringify(a):void 0,headers:l},zy?{}:u),p=typeof t.alternateFetch=="function"&&t.alternateFetch.length>=1?t.alternateFetch:void 0;try{My(i,f,o,p)}catch(m){if(!u||Object.keys(u).length===0||!m.message||m.message.indexOf("not implemented")<0)return o(m);try{Object.keys(u).forEach(function(g){delete f[g]}),My(i,f,o,p),zy=!0}catch(g){o(g)}}},QA=function(t,i,a,o){a&&Ba(a)==="object"&&(a=Kh("",a).slice(1)),t.queryStringParams&&(i=Kh(i,t.queryStringParams));try{var l=Xo?new Xo:new vu("MSXML2.XMLHTTP.3.0");l.open(a?"POST":"GET",i,1),t.crossDomain||l.setRequestHeader("X-Requested-With","XMLHttpRequest"),l.withCredentials=!!t.withCredentials,a&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),l.overrideMimeType&&l.overrideMimeType("application/json");var u=t.customHeaders;if(u=typeof u=="function"?u():u,u)for(var f in u)l.setRequestHeader(f,u[f]);l.onreadystatechange=function(){l.readyState>3&&o(l.status>=400?l.statusText:null,{status:l.status,data:l.responseText})},l.send(a)}catch(p){console&&console.log(p)}},WA=function(t,i,a,o){if(typeof a=="function"&&(o=a,a=void 0),o=o||function(){},ia&&i.indexOf("file:")!==0)return XA(t,i,a,o);if(tw()||typeof ActiveXObject=="function")return QA(t,i,a,o);o(new Error("No fetch and no xhr implementation found!"))};function Qr(e){"@babel/helpers - typeof";return Qr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qr(e)}function Ry(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,a)}return i}function Bp(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?Ry(Object(i),!0).forEach(function(a){nw(e,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Ry(Object(i)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))})}return e}function ZA(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function JA(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,iw(a.key),a)}}function eM(e,t,i){return t&&JA(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function nw(e,t,i){return(t=iw(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function iw(e){var t=tM(e,"string");return Qr(t)=="symbol"?t:t+""}function tM(e,t){if(Qr(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var a=i.call(e,t);if(Qr(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var nM=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(i){return JSON.parse(i)},stringify:JSON.stringify,parsePayload:function(i,a,o){return nw({},a,o||"")},parseLoadPayload:function(i,a){},request:WA,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},aw=function(){function e(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};ZA(this,e),this.services=t,this.options=i,this.allOptions=a,this.type="backend",this.init(t,i,a)}return eM(e,[{key:"init",value:function(i){var a=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=i,this.options=Bp(Bp(Bp({},nM()),this.options||{}),o),this.allOptions=l,this.services&&this.options.reloadInterval){var u=setInterval(function(){return a.reload()},this.options.reloadInterval);Qr(u)==="object"&&typeof u.unref=="function"&&u.unref()}}},{key:"readMulti",value:function(i,a,o){this._readAny(i,i,a,a,o)}},{key:"read",value:function(i,a,o){this._readAny([i],i,[a],a,o)}},{key:"_readAny",value:function(i,a,o,l,u){var f=this,p=this.options.loadPath;typeof this.options.loadPath=="function"&&(p=this.options.loadPath(i,o)),p=GA(p),p.then(function(m){if(!m)return u(null,{});var g=f.services.interpolator.interpolate(m,{lng:i.join("+"),ns:o.join("+")});f.loadUrl(g,u,a,l)})}},{key:"loadUrl",value:function(i,a,o,l){var u=this,f=typeof o=="string"?[o]:o,p=typeof l=="string"?[l]:l,m=this.options.parseLoadPayload(f,p);this.options.request(this.options,i,m,function(g,x){if(x&&(x.status>=500&&x.status<600||!x.status))return a("failed loading "+i+"; status code: "+x.status,!0);if(x&&x.status>=400&&x.status<500)return a("failed loading "+i+"; status code: "+x.status,!1);if(!x&&g&&g.message){var y=g.message.toLowerCase(),v=["failed","fetch","network","load"].find(function(A){return y.indexOf(A)>-1});if(v)return a("failed loading "+i+": "+g.message,!0)}if(g)return a(g,!1);var S,j;try{typeof x.data=="string"?S=u.options.parse(x.data,o,l):S=x.data}catch{j="failed parsing "+i+" to json"}if(j)return a(j,!1);a(null,S)})}},{key:"create",value:function(i,a,o,l,u){var f=this;if(this.options.addPath){typeof i=="string"&&(i=[i]);var p=this.options.parsePayload(a,o,l),m=0,g=[],x=[];i.forEach(function(y){var v=f.options.addPath;typeof f.options.addPath=="function"&&(v=f.options.addPath(y,a));var S=f.services.interpolator.interpolate(v,{lng:y,ns:a});f.options.request(f.options,S,p,function(j,A){m+=1,g.push(j),x.push(A),m===i.length&&typeof u=="function"&&u(g,x)})})}}},{key:"reload",value:function(){var i=this,a=this.services,o=a.backendConnector,l=a.languageUtils,u=a.logger,f=o.language;if(!(f&&f.toLowerCase()==="cimode")){var p=[],m=function(x){var y=l.toResolveHierarchy(x);y.forEach(function(v){p.indexOf(v)<0&&p.push(v)})};m(f),this.allOptions.preload&&this.allOptions.preload.forEach(function(g){return m(g)}),p.forEach(function(g){i.allOptions.ns.forEach(function(x){o.read(g,x,"read",null,null,function(y,v){y&&u.warn("loading namespace ".concat(x," for language ").concat(g," failed"),y),!y&&v&&u.log("loaded namespace ".concat(x," for language ").concat(g),v),o.loaded("".concat(g,"|").concat(x),y,v)})})})}}}])}();aw.type="backend";const{slice:iM,forEach:aM}=[];function rM(e){return aM.call(iM.call(arguments,1),t=>{if(t)for(const i in t)e[i]===void 0&&(e[i]=t[i])}),e}function sM(e){return typeof e!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(i=>i.test(e))}const Ly=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,oM=function(e,t){const a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},o=encodeURIComponent(t);let l=`${e}=${o}`;if(a.maxAge>0){const u=a.maxAge-0;if(Number.isNaN(u))throw new Error("maxAge should be a Number");l+=`; Max-Age=${Math.floor(u)}`}if(a.domain){if(!Ly.test(a.domain))throw new TypeError("option domain is invalid");l+=`; Domain=${a.domain}`}if(a.path){if(!Ly.test(a.path))throw new TypeError("option path is invalid");l+=`; Path=${a.path}`}if(a.expires){if(typeof a.expires.toUTCString!="function")throw new TypeError("option expires is invalid");l+=`; Expires=${a.expires.toUTCString()}`}if(a.httpOnly&&(l+="; HttpOnly"),a.secure&&(l+="; Secure"),a.sameSite)switch(typeof a.sameSite=="string"?a.sameSite.toLowerCase():a.sameSite){case!0:l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"strict":l+="; SameSite=Strict";break;case"none":l+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return a.partitioned&&(l+="; Partitioned"),l},Oy={create(e,t,i,a){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};i&&(o.expires=new Date,o.expires.setTime(o.expires.getTime()+i*60*1e3)),a&&(o.domain=a),document.cookie=oM(e,t,o)},read(e){const t=`${e}=`,i=document.cookie.split(";");for(let a=0;a<i.length;a++){let o=i[a];for(;o.charAt(0)===" ";)o=o.substring(1,o.length);if(o.indexOf(t)===0)return o.substring(t.length,o.length)}return null},remove(e,t){this.create(e,"",-1,t)}};var lM={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&typeof document<"u")return Oy.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:i,cookieMinutes:a,cookieDomain:o,cookieOptions:l}=t;i&&typeof document<"u"&&Oy.create(i,e,a,o,l)}},cM={name:"querystring",lookup(e){var a;let{lookupQuerystring:t}=e,i;if(typeof window<"u"){let{search:o}=window.location;!window.location.search&&((a=window.location.hash)==null?void 0:a.indexOf("?"))>-1&&(o=window.location.hash.substring(window.location.hash.indexOf("?")));const u=o.substring(1).split("&");for(let f=0;f<u.length;f++){const p=u[f].indexOf("=");p>0&&u[f].substring(0,p)===t&&(i=u[f].substring(p+1))}}return i}},uM={name:"hash",lookup(e){var o;let{lookupHash:t,lookupFromHashIndex:i}=e,a;if(typeof window<"u"){const{hash:l}=window.location;if(l&&l.length>2){const u=l.substring(1);if(t){const f=u.split("&");for(let p=0;p<f.length;p++){const m=f[p].indexOf("=");m>0&&f[p].substring(0,m)===t&&(a=f[p].substring(m+1))}}if(a)return a;if(!a&&i>-1){const f=l.match(/\/([a-zA-Z-]*)/g);return Array.isArray(f)?(o=f[typeof i=="number"?i:0])==null?void 0:o.replace("/",""):void 0}}}return a}};let Mr=null;const Dy=()=>{if(Mr!==null)return Mr;try{if(Mr=typeof window<"u"&&window.localStorage!==null,!Mr)return!1;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch{Mr=!1}return Mr};var dM={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&Dy())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:i}=t;i&&Dy()&&window.localStorage.setItem(i,e)}};let zr=null;const Py=()=>{if(zr!==null)return zr;try{if(zr=typeof window<"u"&&window.sessionStorage!==null,!zr)return!1;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch{zr=!1}return zr};var fM={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&Py())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:i}=t;i&&Py()&&window.sessionStorage.setItem(i,e)}},pM={name:"navigator",lookup(e){const t=[];if(typeof navigator<"u"){const{languages:i,userLanguage:a,language:o}=navigator;if(i)for(let l=0;l<i.length;l++)t.push(i[l]);a&&t.push(a),o&&t.push(o)}return t.length>0?t:void 0}},hM={name:"htmlTag",lookup(e){let{htmlTag:t}=e,i;const a=t||(typeof document<"u"?document.documentElement:null);return a&&typeof a.getAttribute=="function"&&(i=a.getAttribute("lang")),i}},mM={name:"path",lookup(e){var o;let{lookupFromPathIndex:t}=e;if(typeof window>"u")return;const i=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(i)?(o=i[typeof t=="number"?t:0])==null?void 0:o.replace("/",""):void 0}},gM={name:"subdomain",lookup(e){var o,l;let{lookupFromSubdomainIndex:t}=e;const i=typeof t=="number"?t+1:1,a=typeof window<"u"&&((l=(o=window.location)==null?void 0:o.hostname)==null?void 0:l.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(a)return a[i]}};let rw=!1;try{document.cookie,rw=!0}catch{}const sw=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];rw||sw.splice(1,1);const bM=()=>({order:sw,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e});class ow{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(t,i)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=t,this.options=rM(i,this.options||{},bM()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=o=>o.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=a,this.addDetector(lM),this.addDetector(cM),this.addDetector(dM),this.addDetector(fM),this.addDetector(pM),this.addDetector(hM),this.addDetector(mM),this.addDetector(gM),this.addDetector(uM)}addDetector(t){return this.detectors[t.name]=t,this}detect(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,i=[];return t.forEach(a=>{if(this.detectors[a]){let o=this.detectors[a].lookup(this.options);o&&typeof o=="string"&&(o=[o]),o&&(i=i.concat(o))}}),i=i.filter(a=>a!=null&&!sM(a)).map(a=>this.options.convertDetectedLanguage(a)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?i:i.length>0?i[0]:null}cacheUserLanguage(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;i&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(t)>-1||i.forEach(a=>{this.detectors[a]&&this.detectors[a].cacheUserLanguage(t,this.options)}))}}ow.type="languageDetector";const xM="20260309-contact-hero-refresh",og=["de","uk","tr","ar","pl","ku","fa","it","es","el","ro","bg"];Nt.use(aw).use(ow).use(xA).init({supportedLngs:[...og],fallbackLng:"de",debug:!1,interpolation:{escapeValue:!1},backend:{loadPath:`/locales/{{lng}}/translation.json?v=${xM}`},detection:{order:["localStorage","navigator"],caches:["localStorage"],lookupLocalStorage:"i18nextLng"}});const lw=C.createContext(void 0),yM=({children:e})=>{const{i18n:t}=Ge(),i=o=>{const l=(o||"").toLowerCase().split("-")[0];return og.includes(l)?l:"de"},a=o=>{t.changeLanguage(o).then(()=>{window.location.reload()})};return d.jsx(lw.Provider,{value:{language:i(t.resolvedLanguage||t.language),setLanguage:a},children:e})},vM=()=>{const e=C.useContext(lw);if(!e)throw new Error("useLanguage must be used within a LanguageProvider");return e};var Kt=function(){return Kt=Object.assign||function(t){for(var i,a=1,o=arguments.length;a<o;a++){i=arguments[a];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l])}return t},Kt.apply(this,arguments)};function Qo(e,t,i){if(i||arguments.length===2)for(var a=0,o=t.length,l;a<o;a++)(l||!(a in t))&&(l||(l=Array.prototype.slice.call(t,0,a)),l[a]=t[a]);return e.concat(l||Array.prototype.slice.call(t))}var Ye="-ms-",Do="-moz-",De="-webkit-",cw="comm",Uu="rule",lg="decl",wM="@import",uw="@keyframes",SM="@layer",dw=Math.abs,cg=String.fromCharCode,Yh=Object.assign;function TM(e,t){return Tt(e,0)^45?(((t<<2^Tt(e,0))<<2^Tt(e,1))<<2^Tt(e,2))<<2^Tt(e,3):0}function fw(e){return e.trim()}function Si(e,t){return(e=t.exec(e))?e[0]:e}function ve(e,t,i){return e.replace(t,i)}function Xc(e,t,i){return e.indexOf(t,i)}function Tt(e,t){return e.charCodeAt(t)|0}function Wr(e,t,i){return e.slice(t,i)}function Xn(e){return e.length}function pw(e){return e.length}function jo(e,t){return t.push(e),e}function jM(e,t){return e.map(t).join("")}function Ny(e,t){return e.filter(function(i){return!Si(i,t)})}var Iu=1,Zr=1,hw=0,kn=0,ut=0,us="";function Fu(e,t,i,a,o,l,u,f){return{value:e,root:t,parent:i,type:a,props:o,children:l,line:Iu,column:Zr,length:u,return:"",siblings:f}}function ea(e,t){return Yh(Fu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Rr(e){for(;e.root;)e=ea(e.root,{children:[e]});jo(e,e.siblings)}function kM(){return ut}function CM(){return ut=kn>0?Tt(us,--kn):0,Zr--,ut===10&&(Zr=1,Iu--),ut}function On(){return ut=kn<hw?Tt(us,kn++):0,Zr++,ut===10&&(Zr=1,Iu++),ut}function Pa(){return Tt(us,kn)}function Qc(){return kn}function qu(e,t){return Wr(us,e,t)}function Xh(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function EM(e){return Iu=Zr=1,hw=Xn(us=e),kn=0,[]}function AM(e){return us="",e}function _p(e){return fw(qu(kn-1,Qh(e===91?e+2:e===40?e+1:e)))}function MM(e){for(;(ut=Pa())&&ut<33;)On();return Xh(e)>2||Xh(ut)>3?"":" "}function zM(e,t){for(;--t&&On()&&!(ut<48||ut>102||ut>57&&ut<65||ut>70&&ut<97););return qu(e,Qc()+(t<6&&Pa()==32&&On()==32))}function Qh(e){for(;On();)switch(ut){case e:return kn;case 34:case 39:e!==34&&e!==39&&Qh(ut);break;case 40:e===41&&Qh(e);break;case 92:On();break}return kn}function RM(e,t){for(;On()&&e+ut!==57;)if(e+ut===84&&Pa()===47)break;return"/*"+qu(t,kn-1)+"*"+cg(e===47?e:On())}function LM(e){for(;!Xh(Pa());)On();return qu(e,kn)}function OM(e){return AM(Wc("",null,null,null,[""],e=EM(e),0,[0],e))}function Wc(e,t,i,a,o,l,u,f,p){for(var m=0,g=0,x=u,y=0,v=0,S=0,j=1,A=1,k=1,R=0,E="",B=o,M=l,N=a,P=E;A;)switch(S=R,R=On()){case 40:if(S!=108&&Tt(P,x-1)==58){Xc(P+=ve(_p(R),"&","&\f"),"&\f",dw(m?f[m-1]:0))!=-1&&(k=-1);break}case 34:case 39:case 91:P+=_p(R);break;case 9:case 10:case 13:case 32:P+=MM(S);break;case 92:P+=zM(Qc()-1,7);continue;case 47:switch(Pa()){case 42:case 47:jo(DM(RM(On(),Qc()),t,i,p),p);break;default:P+="/"}break;case 123*j:f[m++]=Xn(P)*k;case 125*j:case 59:case 0:switch(R){case 0:case 125:A=0;case 59+g:k==-1&&(P=ve(P,/\f/g,"")),v>0&&Xn(P)-x&&jo(v>32?By(P+";",a,i,x-1,p):By(ve(P," ","")+";",a,i,x-2,p),p);break;case 59:P+=";";default:if(jo(N=Vy(P,t,i,m,g,o,f,E,B=[],M=[],x,l),l),R===123)if(g===0)Wc(P,t,N,N,B,l,x,f,M);else switch(y===99&&Tt(P,3)===110?100:y){case 100:case 108:case 109:case 115:Wc(e,N,N,a&&jo(Vy(e,N,N,0,0,o,f,E,o,B=[],x,M),M),o,M,x,f,a?B:M);break;default:Wc(P,N,N,N,[""],M,0,f,M)}}m=g=v=0,j=k=1,E=P="",x=u;break;case 58:x=1+Xn(P),v=S;default:if(j<1){if(R==123)--j;else if(R==125&&j++==0&&CM()==125)continue}switch(P+=cg(R),R*j){case 38:k=g>0?1:(P+="\f",-1);break;case 44:f[m++]=(Xn(P)-1)*k,k=1;break;case 64:Pa()===45&&(P+=_p(On())),y=Pa(),g=x=Xn(E=P+=LM(Qc())),R++;break;case 45:S===45&&Xn(P)==2&&(j=0)}}return l}function Vy(e,t,i,a,o,l,u,f,p,m,g,x){for(var y=o-1,v=o===0?l:[""],S=pw(v),j=0,A=0,k=0;j<a;++j)for(var R=0,E=Wr(e,y+1,y=dw(A=u[j])),B=e;R<S;++R)(B=fw(A>0?v[R]+" "+E:ve(E,/&\f/g,v[R])))&&(p[k++]=B);return Fu(e,t,i,o===0?Uu:f,p,m,g,x)}function DM(e,t,i,a){return Fu(e,t,i,cw,cg(kM()),Wr(e,2,-2),0,a)}function By(e,t,i,a,o){return Fu(e,t,i,lg,Wr(e,0,a),Wr(e,a+1,-1),a,o)}function mw(e,t,i){switch(TM(e,t)){case 5103:return De+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return De+e+e;case 4789:return Do+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return De+e+Do+e+Ye+e+e;case 5936:switch(Tt(e,t+11)){case 114:return De+e+Ye+ve(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return De+e+Ye+ve(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return De+e+Ye+ve(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return De+e+Ye+e+e;case 6165:return De+e+Ye+"flex-"+e+e;case 5187:return De+e+ve(e,/(\w+).+(:[^]+)/,De+"box-$1$2"+Ye+"flex-$1$2")+e;case 5443:return De+e+Ye+"flex-item-"+ve(e,/flex-|-self/g,"")+(Si(e,/flex-|baseline/)?"":Ye+"grid-row-"+ve(e,/flex-|-self/g,""))+e;case 4675:return De+e+Ye+"flex-line-pack"+ve(e,/align-content|flex-|-self/g,"")+e;case 5548:return De+e+Ye+ve(e,"shrink","negative")+e;case 5292:return De+e+Ye+ve(e,"basis","preferred-size")+e;case 6060:return De+"box-"+ve(e,"-grow","")+De+e+Ye+ve(e,"grow","positive")+e;case 4554:return De+ve(e,/([^-])(transform)/g,"$1"+De+"$2")+e;case 6187:return ve(ve(ve(e,/(zoom-|grab)/,De+"$1"),/(image-set)/,De+"$1"),e,"")+e;case 5495:case 3959:return ve(e,/(image-set\([^]*)/,De+"$1$`$1");case 4968:return ve(ve(e,/(.+:)(flex-)?(.*)/,De+"box-pack:$3"+Ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+De+e+e;case 4200:if(!Si(e,/flex-|baseline/))return Ye+"grid-column-align"+Wr(e,t)+e;break;case 2592:case 3360:return Ye+ve(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(a,o){return t=o,Si(a.props,/grid-\w+-end/)})?~Xc(e+(i=i[t].value),"span",0)?e:Ye+ve(e,"-start","")+e+Ye+"grid-row-span:"+(~Xc(i,"span",0)?Si(i,/\d+/):+Si(i,/\d+/)-+Si(e,/\d+/))+";":Ye+ve(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(a){return Si(a.props,/grid-\w+-start/)})?e:Ye+ve(ve(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ve(e,/(.+)-inline(.+)/,De+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xn(e)-1-t>6)switch(Tt(e,t+1)){case 109:if(Tt(e,t+4)!==45)break;case 102:return ve(e,/(.+:)(.+)-([^]+)/,"$1"+De+"$2-$3$1"+Do+(Tt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Xc(e,"stretch",0)?mw(ve(e,"stretch","fill-available"),t,i)+e:e}break;case 5152:case 5920:return ve(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,o,l,u,f,p,m){return Ye+o+":"+l+m+(u?Ye+o+"-span:"+(f?p:+p-+l)+m:"")+e});case 4949:if(Tt(e,t+6)===121)return ve(e,":",":"+De)+e;break;case 6444:switch(Tt(e,Tt(e,14)===45?18:11)){case 120:return ve(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+De+(Tt(e,14)===45?"inline-":"")+"box$3$1"+De+"$2$3$1"+Ye+"$2box$3")+e;case 100:return ve(e,":",":"+Ye)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ve(e,"scroll-","scroll-snap-")+e}return e}function wu(e,t){for(var i="",a=0;a<e.length;a++)i+=t(e[a],a,e,t)||"";return i}function PM(e,t,i,a){switch(e.type){case SM:if(e.children.length)break;case wM:case lg:return e.return=e.return||e.value;case cw:return"";case uw:return e.return=e.value+"{"+wu(e.children,a)+"}";case Uu:if(!Xn(e.value=e.props.join(",")))return""}return Xn(i=wu(e.children,a))?e.return=e.value+"{"+i+"}":""}function NM(e){var t=pw(e);return function(i,a,o,l){for(var u="",f=0;f<t;f++)u+=e[f](i,a,o,l)||"";return u}}function VM(e){return function(t){t.root||(t=t.return)&&e(t)}}function BM(e,t,i,a){if(e.length>-1&&!e.return)switch(e.type){case lg:e.return=mw(e.value,e.length,i);return;case uw:return wu([ea(e,{value:ve(e.value,"@","@"+De)})],a);case Uu:if(e.length)return jM(i=e.props,function(o){switch(Si(o,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Rr(ea(e,{props:[ve(o,/:(read-\w+)/,":"+Do+"$1")]})),Rr(ea(e,{props:[o]})),Yh(e,{props:Ny(i,a)});break;case"::placeholder":Rr(ea(e,{props:[ve(o,/:(plac\w+)/,":"+De+"input-$1")]})),Rr(ea(e,{props:[ve(o,/:(plac\w+)/,":"+Do+"$1")]})),Rr(ea(e,{props:[ve(o,/:(plac\w+)/,Ye+"input-$1")]})),Rr(ea(e,{props:[o]})),Yh(e,{props:Ny(i,a)});break}return""})}}var _M={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},on={},Jr=typeof process<"u"&&on!==void 0&&(on.REACT_APP_SC_ATTR||on.SC_ATTR)||"data-styled",gw="active",bw="data-styled-version",Ku="6.1.19",ug=`/*!sc*/
`,Su=typeof window<"u"&&typeof document<"u",$M=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&on!==void 0&&on.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&on.REACT_APP_SC_DISABLE_SPEEDY!==""?on.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&on.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&on!==void 0&&on.SC_DISABLE_SPEEDY!==void 0&&on.SC_DISABLE_SPEEDY!==""&&on.SC_DISABLE_SPEEDY!=="false"&&on.SC_DISABLE_SPEEDY),Yu=Object.freeze([]),es=Object.freeze({});function HM(e,t,i){return i===void 0&&(i=es),e.theme!==i.theme&&e.theme||t||i.theme}var xw=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),GM=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,UM=/(^-|-$)/g;function _y(e){return e.replace(GM,"-").replace(UM,"")}var IM=/(a)(d)/gi,Mc=52,$y=function(e){return String.fromCharCode(e+(e>25?39:97))};function Wh(e){var t,i="";for(t=Math.abs(e);t>Mc;t=t/Mc|0)i=$y(t%Mc)+i;return($y(t%Mc)+i).replace(IM,"$1-$2")}var $p,yw=5381,$r=function(e,t){for(var i=t.length;i;)e=33*e^t.charCodeAt(--i);return e},vw=function(e){return $r(yw,e)};function ww(e){return Wh(vw(e)>>>0)}function FM(e){return e.displayName||e.name||"Component"}function Hp(e){return typeof e=="string"&&!0}var Sw=typeof Symbol=="function"&&Symbol.for,Tw=Sw?Symbol.for("react.memo"):60115,qM=Sw?Symbol.for("react.forward_ref"):60112,KM={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},YM={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},jw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},XM=(($p={})[qM]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$p[Tw]=jw,$p);function Hy(e){return("type"in(t=e)&&t.type.$$typeof)===Tw?jw:"$$typeof"in e?XM[e.$$typeof]:KM;var t}var QM=Object.defineProperty,WM=Object.getOwnPropertyNames,Gy=Object.getOwnPropertySymbols,ZM=Object.getOwnPropertyDescriptor,JM=Object.getPrototypeOf,Uy=Object.prototype;function kw(e,t,i){if(typeof t!="string"){if(Uy){var a=JM(t);a&&a!==Uy&&kw(e,a,i)}var o=WM(t);Gy&&(o=o.concat(Gy(t)));for(var l=Hy(e),u=Hy(t),f=0;f<o.length;++f){var p=o[f];if(!(p in YM||i&&i[p]||u&&p in u||l&&p in l)){var m=ZM(t,p);try{QM(e,p,m)}catch{}}}}return e}function ts(e){return typeof e=="function"}function dg(e){return typeof e=="object"&&"styledComponentId"in e}function Ra(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Zh(e,t){if(e.length===0)return"";for(var i=e[0],a=1;a<e.length;a++)i+=e[a];return i}function Wo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Jh(e,t,i){if(i===void 0&&(i=!1),!i&&!Wo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var a=0;a<t.length;a++)e[a]=Jh(e[a],t[a]);else if(Wo(t))for(var a in t)e[a]=Jh(e[a],t[a]);return e}function fg(e,t){Object.defineProperty(e,"toString",{value:t})}function sl(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ez=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var i=0,a=0;a<t;a++)i+=this.groupSizes[a];return i},e.prototype.insertRules=function(t,i){if(t>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,l=o;t>=l;)if((l<<=1)<0)throw sl(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(a),this.length=l;for(var u=o;u<l;u++)this.groupSizes[u]=0}for(var f=this.indexOfGroup(t+1),p=(u=0,i.length);u<p;u++)this.tag.insertRule(f,i[u])&&(this.groupSizes[t]++,f++)},e.prototype.clearGroup=function(t){if(t<this.length){var i=this.groupSizes[t],a=this.indexOfGroup(t),o=a+i;this.groupSizes[t]=0;for(var l=a;l<o;l++)this.tag.deleteRule(a)}},e.prototype.getGroup=function(t){var i="";if(t>=this.length||this.groupSizes[t]===0)return i;for(var a=this.groupSizes[t],o=this.indexOfGroup(t),l=o+a,u=o;u<l;u++)i+="".concat(this.tag.getRule(u)).concat(ug);return i},e}(),Zc=new Map,Tu=new Map,Jc=1,zc=function(e){if(Zc.has(e))return Zc.get(e);for(;Tu.has(Jc);)Jc++;var t=Jc++;return Zc.set(e,t),Tu.set(t,e),t},tz=function(e,t){Jc=t+1,Zc.set(e,t),Tu.set(t,e)},nz="style[".concat(Jr,"][").concat(bw,'="').concat(Ku,'"]'),iz=new RegExp("^".concat(Jr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),az=function(e,t,i){for(var a,o=i.split(","),l=0,u=o.length;l<u;l++)(a=o[l])&&e.registerName(t,a)},rz=function(e,t){for(var i,a=((i=t.textContent)!==null&&i!==void 0?i:"").split(ug),o=[],l=0,u=a.length;l<u;l++){var f=a[l].trim();if(f){var p=f.match(iz);if(p){var m=0|parseInt(p[1],10),g=p[2];m!==0&&(tz(g,m),az(e,g,p[3]),e.getTag().insertRules(m,o)),o.length=0}else o.push(f)}}},Iy=function(e){for(var t=document.querySelectorAll(nz),i=0,a=t.length;i<a;i++){var o=t[i];o&&o.getAttribute(Jr)!==gw&&(rz(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function sz(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Cw=function(e){var t=document.head,i=e||t,a=document.createElement("style"),o=function(f){var p=Array.from(f.querySelectorAll("style[".concat(Jr,"]")));return p[p.length-1]}(i),l=o!==void 0?o.nextSibling:null;a.setAttribute(Jr,gw),a.setAttribute(bw,Ku);var u=sz();return u&&a.setAttribute("nonce",u),i.insertBefore(a,l),a},oz=function(){function e(t){this.element=Cw(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,o=0,l=a.length;o<l;o++){var u=a[o];if(u.ownerNode===i)return u}throw sl(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,i){try{return this.sheet.insertRule(i,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var i=this.sheet.cssRules[t];return i&&i.cssText?i.cssText:""},e}(),lz=function(){function e(t){this.element=Cw(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,i){if(t<=this.length&&t>=0){var a=document.createTextNode(i);return this.element.insertBefore(a,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),cz=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,i){return t<=this.length&&(this.rules.splice(t,0,i),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Fy=Su,uz={isServer:!Su,useCSSOMInjection:!$M},Ew=function(){function e(t,i,a){t===void 0&&(t=es),i===void 0&&(i={});var o=this;this.options=Kt(Kt({},uz),t),this.gs=i,this.names=new Map(a),this.server=!!t.isServer,!this.server&&Su&&Fy&&(Fy=!1,Iy(this)),fg(this,function(){return function(l){for(var u=l.getTag(),f=u.length,p="",m=function(x){var y=function(k){return Tu.get(k)}(x);if(y===void 0)return"continue";var v=l.names.get(y),S=u.getGroup(x);if(v===void 0||!v.size||S.length===0)return"continue";var j="".concat(Jr,".g").concat(x,'[id="').concat(y,'"]'),A="";v!==void 0&&v.forEach(function(k){k.length>0&&(A+="".concat(k,","))}),p+="".concat(S).concat(j,'{content:"').concat(A,'"}').concat(ug)},g=0;g<f;g++)m(g);return p}(o)})}return e.registerId=function(t){return zc(t)},e.prototype.rehydrate=function(){!this.server&&Su&&Iy(this)},e.prototype.reconstructWithOptions=function(t,i){return i===void 0&&(i=!0),new e(Kt(Kt({},this.options),t),this.gs,i&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(i){var a=i.useCSSOMInjection,o=i.target;return i.isServer?new cz(o):a?new oz(o):new lz(o)}(this.options),new ez(t)));var t},e.prototype.hasNameForId=function(t,i){return this.names.has(t)&&this.names.get(t).has(i)},e.prototype.registerName=function(t,i){if(zc(t),this.names.has(t))this.names.get(t).add(i);else{var a=new Set;a.add(i),this.names.set(t,a)}},e.prototype.insertRules=function(t,i,a){this.registerName(t,i),this.getTag().insertRules(zc(t),a)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(zc(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),dz=/&/g,fz=/^\s*\/\/.*$/gm;function Aw(e,t){return e.map(function(i){return i.type==="rule"&&(i.value="".concat(t," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(t," ")),i.props=i.props.map(function(a){return"".concat(t," ").concat(a)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=Aw(i.children,t)),i})}function pz(e){var t,i,a,o=es,l=o.options,u=l===void 0?es:l,f=o.plugins,p=f===void 0?Yu:f,m=function(y,v,S){return S.startsWith(i)&&S.endsWith(i)&&S.replaceAll(i,"").length>0?".".concat(t):y},g=p.slice();g.push(function(y){y.type===Uu&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(dz,i).replace(a,m))}),u.prefix&&g.push(BM),g.push(PM);var x=function(y,v,S,j){v===void 0&&(v=""),S===void 0&&(S=""),j===void 0&&(j="&"),t=j,i=v,a=new RegExp("\\".concat(i,"\\b"),"g");var A=y.replace(fz,""),k=OM(S||v?"".concat(S," ").concat(v," { ").concat(A," }"):A);u.namespace&&(k=Aw(k,u.namespace));var R=[];return wu(k,NM(g.concat(VM(function(E){return R.push(E)})))),R};return x.hash=p.length?p.reduce(function(y,v){return v.name||sl(15),$r(y,v.name)},yw).toString():"",x}var hz=new Ew,em=pz(),Mw=Ee.createContext({shouldForwardProp:void 0,styleSheet:hz,stylis:em});Mw.Consumer;Ee.createContext(void 0);function qy(){return C.useContext(Mw)}var zw=function(){function e(t,i){var a=this;this.inject=function(o,l){l===void 0&&(l=em);var u=a.name+l.hash;o.hasNameForId(a.id,u)||o.insertRules(a.id,u,l(a.rules,u,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=i,fg(this,function(){throw sl(12,String(a.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=em),this.name+t.hash},e}(),mz=function(e){return e>="A"&&e<="Z"};function Ky(e){for(var t="",i=0;i<e.length;i++){var a=e[i];if(i===1&&a==="-"&&e[0]==="-")return e;mz(a)?t+="-"+a.toLowerCase():t+=a}return t.startsWith("ms-")?"-"+t:t}var Rw=function(e){return e==null||e===!1||e===""},Lw=function(e){var t,i,a=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!Rw(l)&&(Array.isArray(l)&&l.isCss||ts(l)?a.push("".concat(Ky(o),":"),l,";"):Wo(l)?a.push.apply(a,Qo(Qo(["".concat(o," {")],Lw(l),!1),["}"],!1)):a.push("".concat(Ky(o),": ").concat((t=o,(i=l)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||t in _M||t.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return a};function Na(e,t,i,a){if(Rw(e))return[];if(dg(e))return[".".concat(e.styledComponentId)];if(ts(e)){if(!ts(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var o=e(t);return Na(o,t,i,a)}var l;return e instanceof zw?i?(e.inject(i,a),[e.getName(a)]):[e]:Wo(e)?Lw(e):Array.isArray(e)?Array.prototype.concat.apply(Yu,e.map(function(u){return Na(u,t,i,a)})):[e.toString()]}function gz(e){for(var t=0;t<e.length;t+=1){var i=e[t];if(ts(i)&&!dg(i))return!1}return!0}var bz=vw(Ku),xz=function(){function e(t,i,a){this.rules=t,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&gz(t),this.componentId=i,this.baseHash=$r(bz,i),this.baseStyle=a,Ew.registerId(i)}return e.prototype.generateAndInjectStyles=function(t,i,a){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,i,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))o=Ra(o,this.staticRulesId);else{var l=Zh(Na(this.rules,t,i,a)),u=Wh($r(this.baseHash,l)>>>0);if(!i.hasNameForId(this.componentId,u)){var f=a(l,".".concat(u),void 0,this.componentId);i.insertRules(this.componentId,u,f)}o=Ra(o,u),this.staticRulesId=u}else{for(var p=$r(this.baseHash,a.hash),m="",g=0;g<this.rules.length;g++){var x=this.rules[g];if(typeof x=="string")m+=x;else if(x){var y=Zh(Na(x,t,i,a));p=$r(p,y+g),m+=y}}if(m){var v=Wh(p>>>0);i.hasNameForId(this.componentId,v)||i.insertRules(this.componentId,v,a(m,".".concat(v),void 0,this.componentId)),o=Ra(o,v)}}return o},e}(),Ow=Ee.createContext(void 0);Ow.Consumer;var Gp={};function yz(e,t,i){var a=dg(e),o=e,l=!Hp(e),u=t.attrs,f=u===void 0?Yu:u,p=t.componentId,m=p===void 0?function(B,M){var N=typeof B!="string"?"sc":_y(B);Gp[N]=(Gp[N]||0)+1;var P="".concat(N,"-").concat(ww(Ku+N+Gp[N]));return M?"".concat(M,"-").concat(P):P}(t.displayName,t.parentComponentId):p,g=t.displayName,x=g===void 0?function(B){return Hp(B)?"styled.".concat(B):"Styled(".concat(FM(B),")")}(e):g,y=t.displayName&&t.componentId?"".concat(_y(t.displayName),"-").concat(t.componentId):t.componentId||m,v=a&&o.attrs?o.attrs.concat(f).filter(Boolean):f,S=t.shouldForwardProp;if(a&&o.shouldForwardProp){var j=o.shouldForwardProp;if(t.shouldForwardProp){var A=t.shouldForwardProp;S=function(B,M){return j(B,M)&&A(B,M)}}else S=j}var k=new xz(i,y,a?o.componentStyle:void 0);function R(B,M){return function(N,P,U){var G=N.attrs,Y=N.componentStyle,Z=N.defaultProps,ne=N.foldedComponentIds,le=N.styledComponentId,ce=N.target,ue=Ee.useContext(Ow),H=qy(),D=N.shouldForwardProp||H.shouldForwardProp,_=HM(P,ue,Z)||es,Q=function(xe,de,mt){for(var Le,Mt=Kt(Kt({},de),{className:void 0,theme:mt}),oa=0;oa<xe.length;oa+=1){var ri=ts(Le=xe[oa])?Le(Mt):Le;for(var pn in ri)Mt[pn]=pn==="className"?Ra(Mt[pn],ri[pn]):pn==="style"?Kt(Kt({},Mt[pn]),ri[pn]):ri[pn]}return de.className&&(Mt.className=Ra(Mt.className,de.className)),Mt}(G,P,_),z=Q.as||ce,X={};for(var te in Q)Q[te]===void 0||te[0]==="$"||te==="as"||te==="theme"&&Q.theme===_||(te==="forwardedAs"?X.as=Q.forwardedAs:D&&!D(te,z)||(X[te]=Q[te]));var ie=function(xe,de){var mt=qy(),Le=xe.generateAndInjectStyles(de,mt.styleSheet,mt.stylis);return Le}(Y,Q),se=Ra(ne,le);return ie&&(se+=" "+ie),Q.className&&(se+=" "+Q.className),X[Hp(z)&&!xw.has(z)?"class":"className"]=se,U&&(X.ref=U),C.createElement(z,X)}(E,B,M)}R.displayName=x;var E=Ee.forwardRef(R);return E.attrs=v,E.componentStyle=k,E.displayName=x,E.shouldForwardProp=S,E.foldedComponentIds=a?Ra(o.foldedComponentIds,o.styledComponentId):"",E.styledComponentId=y,E.target=a?o.target:e,Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(B){this._foldedDefaultProps=a?function(M){for(var N=[],P=1;P<arguments.length;P++)N[P-1]=arguments[P];for(var U=0,G=N;U<G.length;U++)Jh(M,G[U],!0);return M}({},o.defaultProps,B):B}}),fg(E,function(){return".".concat(E.styledComponentId)}),l&&kw(E,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),E}function Yy(e,t){for(var i=[e[0]],a=0,o=t.length;a<o;a+=1)i.push(t[a],e[a+1]);return i}var Xy=function(e){return Object.assign(e,{isCss:!0})};function pg(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(ts(e)||Wo(e))return Xy(Na(Yy(Yu,Qo([e],t,!0))));var a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?Na(a):Xy(Na(Yy(a,t)))}function tm(e,t,i){if(i===void 0&&(i=es),!t)throw sl(1,t);var a=function(o){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return e(t,i,pg.apply(void 0,Qo([o],l,!1)))};return a.attrs=function(o){return tm(e,t,Kt(Kt({},i),{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return tm(e,t,Kt(Kt({},i),o))},a}var Dw=function(e){return tm(yz,e)},O=Dw;xw.forEach(function(e){O[e]=Dw(e)});function Fe(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var a=Zh(pg.apply(void 0,Qo([e],t,!1))),o=ww(a);return new zw(o,a)}const vz=O.div`
  display: inline-flex;
  align-items: center;

  @media (min-width: 1024px) {
    display: none;
  }
`,wz=O.button`
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
`,Up=O(ae.span)`
  width: 22px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  display: block;
`,Sz=O(ae.div)`
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
`,Tz=O.div`
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
`,jz=O.span`
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
`,kz=O.button`
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
`,Lr=O(ti)`
  color: #fff;
  text-decoration: none;
  font-size: clamp(30px, 8vw, 48px);
  font-weight: 700;
  line-height: 1.06;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 6px 0;
`,go=O.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.16);
  margin: 2px 0 6px;
`,Cz=Fe`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Ez=Fe`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Az=O.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${({$menuOpen:e})=>e?2e3:120};
  backdrop-filter: blur(10px);
  background: rgba(7, 9, 16, 0.78);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,Mz=O.div`
  width: 100%;
  max-width: 1560px;
  margin: 0 auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
`,zz=O.div`
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
`,Rz=O(ti)`
  display: inline-flex;
  align-items: center;
  line-height: 0;
  text-decoration: none;
`,Lz=O.span`
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
  animation: ${Cz} 4.8s ease-in-out infinite;
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
`,Oz=O.nav`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: 1023px) {
    display: none;
  }
`,bo=O(ti)`
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
`,Dz=O.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
  position: relative;
  z-index: 1200;
`,Pz=O(ti)`
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
    animation: ${Ez} 2.2s linear infinite;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`,Nz=O.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`,Vz=O.button`
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
`,Qy=O.span`
  font-size: 18px;
  line-height: 1;
`,Bz=O.div`
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
`,_z=O.button`
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
`,$z={open:{rotate:45,y:8},closed:{rotate:0,y:0}},Hz={open:{opacity:0},closed:{opacity:1}},Gz={open:{rotate:-45,y:-8},closed:{rotate:0,y:0}},Uz={open:{opacity:1},closed:{opacity:0}},Iz={de:"Deutsch",uk:"Українська",tr:"Türkçe",ar:"العربية",pl:"Polski",ku:"Kurmancî",fa:"فارسی",it:"Italiano",es:"Español",el:"Ελληνικά",ro:"Română",bg:"Български"},Wy={de:"DE",uk:"UA",tr:"TR",ar:"SA",pl:"PL",ku:"KU",fa:"IR",it:"IT",es:"ES",el:"GR",ro:"RO",bg:"BG"},Fz=()=>{const[e,t]=C.useState(!1),[i,a]=C.useState(!1),{language:o,setLanguage:l}=vM(),{t:u}=Ge(),f=C.useRef(null);C.useEffect(()=>{const g=x=>{f.current&&(f.current.contains(x.target)||a(!1))};return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[]),C.useEffect(()=>(e?(document.body.classList.add("modal-open"),a(!1)):document.body.classList.remove("modal-open"),()=>document.body.classList.remove("modal-open")),[e]);const p=()=>t(!1),m=g=>{l(g),a(!1)};return d.jsxs(Az,{$menuOpen:e,children:[d.jsx(Mz,{children:d.jsxs(zz,{children:[d.jsx(Rz,{to:"/",onClick:p,children:d.jsx(ae.div,{initial:{opacity:0,y:-12,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.82,ease:Nu},children:d.jsx(Lz,{children:"<VS/>"})})}),d.jsxs(Oz,{children:[d.jsxs(bo,{to:"/services",children:[d.jsx(ly,{})," ",u("header.services")]}),d.jsxs(bo,{to:"/preise",children:[d.jsx(du,{})," ",u("header.preise")]}),d.jsxs(bo,{to:"/referenzen",children:[d.jsx(cy,{})," ",u("header.referenzen")]}),d.jsxs(bo,{to:"/ueber-uns",children:[d.jsx(uy,{})," ",u("header.ueberUns")]}),d.jsxs(bo,{to:"/kontakt",children:[d.jsx(Yr,{})," ",u("header.kontakt")]})]}),d.jsxs(Dz,{children:[d.jsxs(Pz,{to:"/kontakt",children:[d.jsx(Nn,{})," ",u("common.projectRequest")]}),e?null:d.jsxs(Nz,{ref:f,children:[d.jsx(Vz,{type:"button","aria-expanded":i,"aria-label":"Language switcher",onClick:()=>a(g=>!g),children:d.jsx(Qy,{children:Wy[o]})}),i?d.jsx(Bz,{children:og.map(g=>d.jsxs(_z,{type:"button",$active:o===g,onClick:()=>m(g),children:[d.jsx(Qy,{children:Wy[g]}),d.jsx("span",{children:Iz[g]})]},g))}):null]}),d.jsx(vz,{children:d.jsxs(wz,{onClick:()=>t(g=>!g),"aria-label":e?"Close menu":"Open menu",children:[d.jsx(Up,{animate:e?"open":"closed",variants:$z}),d.jsx(Up,{animate:e?"open":"closed",variants:Hz}),d.jsx(Up,{animate:e?"open":"closed",variants:Gz})]})})]})]})}),typeof document<"u"?E9.createPortal(d.jsx(Z5,{children:e?d.jsxs(Sz,{initial:"closed",animate:"open",exit:"closed",variants:Uz,transition:{duration:.28,ease:Om},children:[d.jsxs(Tz,{children:[d.jsx(jz,{children:"<VS/>"}),d.jsx(kz,{type:"button","aria-label":"Close menu",onClick:p,children:d.jsx(tA,{})})]}),d.jsxs(Lr,{to:"/services",onClick:p,children:[d.jsx(ly,{})," ",u("header.services")]}),d.jsx(go,{}),d.jsxs(Lr,{to:"/preise",onClick:p,children:[d.jsx(du,{})," ",u("header.preise")]}),d.jsx(go,{}),d.jsxs(Lr,{to:"/referenzen",onClick:p,children:[d.jsx(cy,{})," ",u("header.referenzen")]}),d.jsx(go,{}),d.jsxs(Lr,{to:"/ueber-uns",onClick:p,children:[d.jsx(uy,{})," ",u("header.ueberUns")]}),d.jsx(go,{}),d.jsxs(Lr,{to:"/kontakt",onClick:p,children:[d.jsx(Yr,{})," ",u("header.kontakt")]}),d.jsx(go,{}),d.jsxs(Lr,{to:"/kontakt",onClick:p,children:[d.jsx(Nn,{})," ",u("common.projectRequest")]})]}):null}),document.body):null]})},qz=O.footer`
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding: 30px 0 44px;
  background: rgba(8, 10, 18, 0.9);
`,Kz=O.div`
  width: 100%;
  max-width: 1560px;
  margin: 0 auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
`,Yz=O.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,Xz=O.div`
  p {
    margin: 0;
  }
`,Qz=O.p`
  color: rgba(255, 255, 255, 0.72) !important;
  margin-top: 4px !important;
`,Wz=O.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 14px;
`,Pw=`
  color: rgba(255, 255, 255, 0.84);
  text-decoration: none;
  transition: transform var(--dur-fast) var(--ease-smooth), color var(--dur-fast) var(--ease-smooth);

  &:hover,
  &:focus-visible {
    color: #ffd08a;
    transform: translateY(-1px);
  }
`,xo=O(ti)`
  ${Pw}
`,Zz=O.button`
  ${Pw}
  border: 0;
  background: transparent;
  padding: 0;
  font: inherit;
  cursor: pointer;
`,Jz=()=>{const{t:e}=Ge(),t=()=>{window.dispatchEvent(new Event("open-cookie-settings"))};return d.jsx(qz,{children:d.jsx(Kz,{children:d.jsxs(Yz,{children:[d.jsxs(Xz,{children:[d.jsx("p",{children:e("footer.tagline")}),d.jsx(Qz,{children:"kontakt@vs-web-studio.de · +49 30 1234567"})]}),d.jsxs(Wz,{children:[d.jsx(xo,{to:"/impressum",children:e("footer.impressum")}),d.jsx(xo,{to:"/datenschutz",children:e("footer.datenschutz")}),d.jsx(xo,{to:"/agb",children:e("footer.agb")}),d.jsx(xo,{to:"/cookies",children:e("footer.cookies")}),d.jsx(Zz,{type:"button",onClick:t,children:e("footer.cookieSettings")}),d.jsx(xo,{to:"/blog",children:e("footer.blog")})]})]})})})},Ip="cookie_consent_v2",eR=()=>{const{t:e}=Ge(),[t,i]=C.useState(!1),[a,o]=C.useState(!1),[l,u]=C.useState(!1),[f,p]=C.useState(!1),[m,g]=C.useState(!1);C.useEffect(()=>{const v=window.localStorage.getItem(Ip);if(v)try{const S=JSON.parse(v);p(!!S.statistics),g(!!S.marketing)}catch{}o(!v),i(!0)},[]),C.useEffect(()=>{const v=()=>{const S=window.localStorage.getItem(Ip);if(S)try{const j=JSON.parse(S);p(!!j.statistics),g(!!j.marketing)}catch{}o(!0),u(!0)};return window.addEventListener("open-cookie-settings",v),()=>window.removeEventListener("open-cookie-settings",v)},[]);const x=C.useMemo(()=>({essential:!0,statistics:f,marketing:m}),[f,m]),y=v=>{window.localStorage.setItem(Ip,JSON.stringify(v)),o(!1),u(!1)};return!t||!a?null:d.jsxs(d.Fragment,{children:[d.jsxs(ae.div,{className:"cookie-banner",initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.5},role:"dialog","aria-live":"polite","aria-label":e("cookie.aria"),children:[d.jsxs("div",{className:"cookie-text",children:[e("cookie.bannerText")," ",d.jsx("a",{href:"/datenschutz",children:e("footer.datenschutz")}),","," ",d.jsx("a",{href:"/cookies",children:e("footer.cookies")}),","," ",d.jsx("a",{href:"/impressum",children:e("footer.impressum")}),"."]}),d.jsxs("div",{className:"cookie-actions",children:[d.jsx("button",{className:"btn btn-secondary cookie-btn",onClick:()=>y({essential:!0,statistics:!1,marketing:!1}),children:e("cookie.onlyEssential")}),d.jsx("button",{className:"btn btn-secondary cookie-btn",onClick:()=>u(!0),children:e("cookie.settings")}),d.jsx("button",{className:"btn btn-primary cookie-btn",onClick:()=>y({essential:!0,statistics:!0,marketing:!0}),children:e("cookie.acceptAll")})]})]}),l?d.jsx(ae.div,{className:"cookie-modal-backdrop",initial:{opacity:0},animate:{opacity:1},children:d.jsxs(ae.div,{className:"cookie-modal",initial:{opacity:0,y:16},animate:{opacity:1,y:0},children:[d.jsx("h3",{children:e("cookie.modalTitle")}),d.jsx("p",{className:"muted",children:e("cookie.modalText")}),d.jsxs("label",{className:"cookie-option",children:[d.jsx("input",{type:"checkbox",checked:!0,disabled:!0}),d.jsx("span",{children:e("cookie.essential")})]}),d.jsxs("label",{className:"cookie-option",children:[d.jsx("input",{type:"checkbox",checked:f,onChange:v=>p(v.target.checked)}),d.jsx("span",{children:e("cookie.statistics")})]}),d.jsxs("label",{className:"cookie-option",children:[d.jsx("input",{type:"checkbox",checked:m,onChange:v=>g(v.target.checked)}),d.jsx("span",{children:e("cookie.marketing")})]}),d.jsxs("div",{className:"cookie-actions",children:[d.jsx("button",{className:"btn btn-secondary cookie-btn",onClick:()=>u(!1),children:e("common.cancel")}),d.jsx("button",{className:"btn btn-primary cookie-btn",onClick:()=>y(x),children:e("cookie.saveSelection")})]})]})}):null]})},tR=O.div`
  min-height: 100vh;
  background:
    radial-gradient(1200px 500px at 12% -10%, rgba(255, 160, 70, 0.2), transparent 60%),
    radial-gradient(900px 420px at 88% 10%, rgba(70, 127, 255, 0.22), transparent 60%),
    linear-gradient(180deg, #070812 0%, #0e1220 100%);
`,nR=O(ae.main)`
  padding-top: 76px;

  @media (max-width: 767px) {
    padding-top: 66px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding-top: 72px;
  }
`,iR=()=>{const e=ii();return C.useEffect(()=>{window.scrollTo({top:0,behavior:"auto"})},[e.pathname]),d.jsxs(tR,{children:[d.jsx(Fz,{}),d.jsx(Z5,{mode:"wait",children:d.jsx(nR,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.32,ease:Cn},children:d.jsx(qS,{})},e.pathname)}),d.jsx(Jz,{}),d.jsx(eR,{})]})};function aR(e=!1){C.useEffect(()=>{if(e)return;let t=0,i=window.innerWidth*.5,a=window.innerHeight*.3;const o=()=>{document.documentElement.style.setProperty("--spotlight-x",`${i}px`),document.documentElement.style.setProperty("--spotlight-y",`${a}px`),t=0},l=u=>{i=u.clientX,a=u.clientY,t||(t=window.requestAnimationFrame(o))};return window.addEventListener("pointermove",l,{passive:!0}),o(),()=>{window.removeEventListener("pointermove",l),t&&window.cancelAnimationFrame(t)}},[e])}function rR(){const[e,t]=C.useState(!1);return C.useEffect(()=>{var o;const i=window.matchMedia("(prefers-reduced-motion: reduce)"),a=()=>t(i.matches);return t(i.matches),(o=i.addEventListener)==null||o.call(i,"change",a),()=>{var l;return(l=i.removeEventListener)==null?void 0:l.call(i,"change",a)}},[]),e}const In=({label:e,value:t,options:i,onChange:a})=>d.jsxs("div",{className:"seg",children:[d.jsx("div",{className:"seg-label",children:e}),d.jsx("div",{className:"seg-row",role:"group","aria-label":e,children:i.map(o=>d.jsxs("button",{type:"button",role:"checkbox","aria-checked":t.includes(o.value),className:`seg-btn ${t.includes(o.value)?"active":""}`,onClick:()=>a(t.includes(o.value)?t.filter(l=>l!==o.value):[...t,o.value]),children:[d.jsx("span",{className:"seg-title",children:o.title}),o.hint?d.jsx("span",{className:"seg-hint",children:o.hint}):null]},o.value))})]}),ko="/assets/hero-main-BwizpqXp.webm",nm="/assets/photo_2025-09-16_22-57-47-BZW9LnVG.jpg",im="/assets/photo_2025-09-16_22-58-19-CMYu6dTK.jpg",am="/assets/photo_2025-09-16_22-58-10-Bd-7i7_Y.jpg",rm="/assets/photo_2025-09-16_22-58-06-Byl6jOLf.jpg",sR="/assets/01-call-Bgwp57KR.webp",oR="/assets/02-prototype-BmhFIUL-.webp",lR="/assets/03-dev-Vc9Lg5zG.webp",cR="/assets/04-launch-C8dDkkp8.webp",uR={hidden:{opacity:0,y:34,scale:.98},show:{opacity:1,y:0,scale:1}},Fp=[{step:"01",image:sR},{step:"02",image:oR},{step:"03",image:lR},{step:"04",image:cR}],dR=[{id:"c1",tags:["React","TypeScript","SEO","GA4"],poster:nm,video:ko},{id:"c2",tags:["Landing","Ads","Tracking"],poster:im,video:ko},{id:"c3",tags:["Forms","Analytics","UX"],poster:am,video:ko},{id:"c4",tags:["Firebase","React","Automation"],poster:rm,video:ko}],fR=["d1","d2","d3","d4"],Fn={goal:[{value:"leads",title:"home.configurator.options.goal.leads"},{value:"calls",title:"home.configurator.options.goal.calls"},{value:"booking",title:"home.configurator.options.goal.booking"},{value:"other",title:"home.configurator.options.common.other"}],integrations:[{value:"booking",title:"home.configurator.options.integrations.booking"},{value:"crm",title:"home.configurator.options.integrations.crm"},{value:"chat",title:"home.configurator.options.integrations.chat"},{value:"payments",title:"home.configurator.options.integrations.payments"},{value:"other",title:"home.configurator.options.common.other"}],ads:[{value:"none",title:"home.configurator.options.ads.none"},{value:"meta",title:"home.configurator.options.ads.meta"},{value:"google",title:"home.configurator.options.ads.google"},{value:"other",title:"home.configurator.options.common.other"}],term:[{value:"up-to-7",title:"home.configurator.options.term.up_to_7"},{value:"7-14",title:"home.configurator.options.term.from_7_to_14"},{value:"14-21",title:"home.configurator.options.term.from_14_to_21"},{value:"21-30",title:"home.configurator.options.term.from_21_to_30"},{value:"other",title:"home.configurator.options.common.other"}],content:[{value:"has",title:"home.configurator.options.content.has"},{value:"copy",title:"home.configurator.options.content.copy"},{value:"other",title:"home.configurator.options.common.other"}],languages:[{value:"basic",title:"home.configurator.options.languages.basic"},{value:"multi",title:"home.configurator.options.languages.multi"},{value:"other",title:"home.configurator.options.common.other"}],hosting:[{value:"shared",title:"home.configurator.options.hosting.shared"},{value:"vps",title:"home.configurator.options.hosting.vps"},{value:"managed",title:"home.configurator.options.hosting.managed"},{value:"other",title:"home.configurator.options.common.other"}],domain:[{value:"new-domain",title:"home.configurator.options.domain.new_domain"},{value:"existing-domain",title:"home.configurator.options.domain.existing_domain"},{value:"transfer",title:"home.configurator.options.domain.transfer"},{value:"other",title:"home.configurator.options.common.other"}],pages:[{value:"one",title:"home.configurator.options.pages.one"},{value:"up-to-3",title:"home.configurator.options.pages.up_to_3"},{value:"five-plus",title:"home.configurator.options.pages.five_plus"},{value:"other",title:"home.configurator.options.common.other"}],seo:[{value:"base",title:"home.configurator.options.seo.base"},{value:"extended",title:"home.configurator.options.seo.extended"},{value:"other",title:"home.configurator.options.common.other"}]},pR={leads:576,calls:558,booking:630,other:180},hR={booking:108,crm:153,chat:81,payments:189,other:45},mR={none:20,meta:108,google:135,other:25},gR={"up-to-7":198,"7-14":153,"14-21":81,"21-30":35,other:30},bR={has:35,copy:117,other:35},xR={basic:25,multi:135,other:25},yR={shared:30,vps:85,managed:120,other:30},vR={"new-domain":25,"existing-domain":20,transfer:45,other:25},wR={one:70,"up-to-3":117,"five-plus":189,other:70},SR={base:20,extended:126,other:20},TR={leads:576,calls:558,booking:630,other:320},jR={booking:108,crm:153,chat:81,payments:189,other:120},kR={none:20,meta:108,google:135,other:90},CR={"up-to-7":198,"7-14":153,"14-21":81,"21-30":35,other:120},ER={has:35,copy:117,other:90},AR={basic:25,multi:135,other:90},MR={shared:30,vps:85,managed:120,other:90},zR={"new-domain":25,"existing-domain":20,transfer:45,other:90},RR={one:70,"up-to-3":117,"five-plus":189,other:170},LR={base:20,extended:126,other:90},OR=()=>{const{t:e}=Ge(),[t,i]=C.useState([]),[a,o]=C.useState([]),[l,u]=C.useState([]),[f,p]=C.useState([]),[m,g]=C.useState([]),[x,y]=C.useState([]),[v,S]=C.useState([]),[j,A]=C.useState([]),[k,R]=C.useState([]),[E,B]=C.useState([]),M=()=>{i([]),o([]),u([]),p([]),g([]),y([]),S([]),A([]),R([]),B([])},N=C.useMemo(()=>({goal:Fn.goal.map(G=>({...G,title:e(G.title)})),integrations:Fn.integrations.map(G=>({...G,title:e(G.title)})),ads:Fn.ads.map(G=>({...G,title:e(G.title)})),term:Fn.term.map(G=>({...G,title:e(G.title)})),content:Fn.content.map(G=>({...G,title:e(G.title)})),languages:Fn.languages.map(G=>({...G,title:e(G.title)})),hosting:Fn.hosting.map(G=>({...G,title:e(G.title)})),domain:Fn.domain.map(G=>({...G,title:e(G.title)})),pages:Fn.pages.map(G=>({...G,title:e(G.title)})),seo:Fn.seo.map(G=>({...G,title:e(G.title)}))}),[e]),P=C.useMemo(()=>{if(![t,a,l,f,m,x,v,j,k,E].every(z=>z.length>0))return{isComplete:!1};const Y=(z,X)=>z.reduce((te,ie)=>te+(X[ie]??0),0),Z=(z,X)=>z.map(te=>{var ie;return((ie=X.find(se=>se.value===te))==null?void 0:ie.title)||te}).join(", "),ne=Y(t,pR)+Y(a,hR)+Y(l,mR)+Y(f,gR)+Y(m,bR)+Y(x,xR)+Y(v,yR)+Y(j,vR)+Y(k,wR)+Y(E,SR),le=Y(t,TR)+Y(a,jR)+Y(l,kR)+Y(f,CR)+Y(m,ER)+Y(x,AR)+Y(v,MR)+Y(j,zR)+Y(k,RR)+Y(E,LR),ce=x.includes("multi")||k.includes("five-plus")||E.includes("extended")||l.some(z=>z!=="none"&&z!=="other")||a.includes("crm")||a.includes("payments"),ue=le>980||ce?"Business":"Starter",H=ue==="Business"?86:62,D=H*12,_=Math.round(D*.7),Q=[e("home.configurator.bullets.prototype"),e("home.configurator.bullets.goal",{value:Z(t,N.goal)}),e("home.configurator.bullets.integrations",{value:Z(a,N.integrations)}),e("home.configurator.bullets.term",{value:Z(f,N.term)}),e("home.configurator.bullets.hosting",{value:Z(v,N.hosting)}),e("home.configurator.bullets.domain",{value:Z(j,N.domain)}),e("home.configurator.bullets.pages",{value:Z(k,N.pages)}),e("home.configurator.bullets.analytics"),m.includes("copy")?e("home.configurator.bullets.copy_true"):e("home.configurator.bullets.copy_false"),e("home.configurator.bullets.market_note")];return{isComplete:!0,pack:ue,bullets:Q,totalFrom:ne,totalTo:le,supportMonthly:H,supportYearlyRaw:D,supportYearly:_,cta:"/kontakt"}},[l,m,j,t,v,a,x,k,E,e,f,N]),U=C.useMemo(()=>{if(!P.isComplete)return"";const G=(Z,ne)=>Z.map(le=>{var ce;return((ce=ne.find(ue=>ue.value===le))==null?void 0:ce.title)||le}).join(", "),Y=P.totalFrom===P.totalTo?`${P.totalFrom} EUR`:`${P.totalFrom} - ${P.totalTo} EUR`;return[e("home.configurator.brief.title"),e("home.configurator.brief.goal",{value:G(t,N.goal)}),e("home.configurator.brief.integrations",{value:G(a,N.integrations)}),e("home.configurator.brief.ads",{value:G(l,N.ads)}),e("home.configurator.brief.term",{value:G(f,N.term)}),e("home.configurator.brief.content",{value:G(m,N.content)}),e("home.configurator.brief.languages",{value:G(x,N.languages)}),e("home.configurator.brief.hosting",{value:G(v,N.hosting)}),e("home.configurator.brief.domain",{value:G(j,N.domain)}),e("home.configurator.brief.pages",{value:G(k,N.pages)}),e("home.configurator.brief.seo",{value:G(E,N.seo)}),e("home.configurator.brief.launch_price",{value:Y}),e("home.configurator.brief.support_monthly",{value:`${P.supportMonthly} EUR`}),e("home.configurator.brief.support_yearly",{value:`${P.supportYearly} EUR`})].join(`
`)},[l,m,j,t,v,a,x,P,k,E,e,f,N]);return d.jsxs("div",{className:"card configurator-card",children:[d.jsx(In,{label:e("home.configurator.labels.goal"),value:t,options:N.goal,onChange:i}),d.jsx(In,{label:e("home.configurator.labels.integrations"),value:a,options:N.integrations,onChange:o}),d.jsx(In,{label:e("home.configurator.labels.ads"),value:l,options:N.ads,onChange:u}),d.jsx(In,{label:e("home.configurator.labels.term"),value:f,options:N.term,onChange:p}),d.jsx(In,{label:e("home.configurator.labels.content"),value:m,options:N.content,onChange:g}),d.jsx(In,{label:e("home.configurator.labels.languages"),value:x,options:N.languages,onChange:y}),d.jsx(In,{label:e("home.configurator.labels.hosting"),value:v,options:N.hosting,onChange:S}),d.jsx(In,{label:e("home.configurator.labels.domain"),value:j,options:N.domain,onChange:A}),d.jsx(In,{label:e("home.configurator.labels.pages"),value:k,options:N.pages,onChange:R}),d.jsx(In,{label:e("home.configurator.labels.seo"),value:E,options:N.seo,onChange:B}),d.jsxs("div",{className:"offer",children:[d.jsx("button",{type:"button",className:"btn btn-secondary reset-btn",onClick:M,children:e("home.configurator.reset")}),P.isComplete?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"offer-title",children:[e("home.configurator.recommended")," ",d.jsx("strong",{children:P.pack==="Business"?e("home.configurator.pack.business"):e("home.configurator.pack.starter")})]}),d.jsxs("p",{className:"offer-price",children:[e("home.configurator.launchPrice")," ",d.jsx("strong",{children:P.totalFrom===P.totalTo?`${P.totalFrom} EUR`:`${P.totalFrom} - ${P.totalTo} EUR`})]}),d.jsx("ul",{className:"offer-list",children:P.bullets.map(G=>d.jsx("li",{children:G},G))}),d.jsxs("div",{className:"support-grid",children:[d.jsxs("article",{className:"support-card",children:[d.jsx("h3",{children:e("home.configurator.supportMonthly")}),d.jsx("p",{children:d.jsxs("strong",{children:[P.supportMonthly," EUR"]})})]}),d.jsxs("article",{className:"support-card",children:[d.jsx("h3",{children:e("home.configurator.supportYearly")}),d.jsxs("p",{children:[d.jsxs("strong",{children:[P.supportYearly," EUR"]})," ",d.jsxs("span",{className:"support-old",children:[P.supportYearlyRaw," EUR"]})]})]})]}),d.jsx(ti,{to:P.cta,state:{prefillNeed:U},className:"btn btn-primary offer-cta",children:e("home.configurator.cta")})]}):d.jsx("div",{className:"offer-empty",children:e("home.configurator.empty")})]})]})},DR=O.div`
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
`,pt={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.6,ease:Cn}}},Rc={hidden:{opacity:0,x:-40},visible:{opacity:1,x:0,transition:{duration:.7,ease:Cn}}},Wi={hidden:{opacity:0,x:40},visible:{opacity:1,x:0,transition:{duration:.7,ease:Cn}}},Ke={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:.8,ease:Cn}}},Dt={hidden:{},visible:{transition:{staggerChildren:.1}}},PR=()=>{const{t:e}=Ge();return d.jsx(DR,{children:d.jsxs(ae.section,{className:"section configurator",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.18},variants:pt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.configurator.title")}),d.jsx("p",{className:"section-description",children:e("home.configurator.desc")})]}),d.jsx(ae.div,{variants:Ke,children:d.jsx(OR,{})})]})})},_a=({text:e,durationMs:t=6200,storageKey:i="terminal_typed_once"})=>{const[a,o]=C.useState(0),[l,u]=C.useState(!1),f=C.useMemo(()=>{const p=Math.max(e.length,1);return Math.max(24,Math.floor(t/p))},[t,e.length]);return C.useEffect(()=>{if(typeof window>"u")return;if(window.sessionStorage.getItem(i)==="1"){o(e.length),u(!0);return}let m=0;const g=window.setInterval(()=>{m+=1,o(m),m>=e.length&&(window.clearInterval(g),u(!0),window.sessionStorage.setItem(i,"1"))},f);return()=>window.clearInterval(g)},[f,i,e]),d.jsxs("span",{className:"terminal-text","aria-label":e,children:[e.slice(0,a),!l&&d.jsx("span",{className:"terminal-cursor",children:"|"})]})},NR=O.div`
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
`,VR=()=>{const{t:e}=Ge();return d.jsx(NR,{children:d.jsxs(ae.section,{id:"faq",className:"section",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.18},variants:pt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:d.jsx(_a,{text:e("home.faqTitle"),durationMs:2200,storageKey:"faq_title_v2"})}),d.jsx("p",{className:"section-description",children:e("home.faq.desc")})]}),d.jsxs(ae.div,{className:"faq",variants:Dt,children:[d.jsxs(ae.details,{variants:Ke,children:[d.jsx("summary",{children:e("home.faq.q1")}),d.jsx("div",{className:"faq-answer",children:d.jsx("p",{children:e("home.faq.a1")})})]}),d.jsxs(ae.details,{variants:Ke,children:[d.jsx("summary",{children:e("home.faq.q2")}),d.jsx("div",{className:"faq-answer",children:d.jsx("p",{children:e("home.faq.a2")})})]}),d.jsxs(ae.details,{variants:Ke,children:[d.jsx("summary",{children:e("home.faq.q3")}),d.jsx("div",{className:"faq-answer",children:d.jsx("p",{children:e("home.faq.a3")})})]}),d.jsxs(ae.details,{variants:Ke,children:[d.jsx("summary",{children:e("home.faq.q4")}),d.jsx("div",{className:"faq-answer",children:d.jsx("p",{children:e("home.faq.a4")})})]}),d.jsxs(ae.details,{variants:Ke,children:[d.jsx("summary",{children:e("home.faq.q5")}),d.jsx("div",{className:"faq-answer",children:d.jsx("p",{children:e("home.faq.a5")})})]})]})]})})},BR="/assets/Sub_Zero_Refrigerator_Cinematic_Reveal-BIqjoL6O.mov",_R=O.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
`,$R=O.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.04);
  z-index: 0;
`,HR=O.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgb(0 0 0 / 87%) 0%, rgb(0 0 0 / 48%) 50%, rgba(0, 0, 0, 0.4) 100%);
  z-index: 1;
`,GR=()=>d.jsxs(_R,{children:[d.jsxs($R,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",poster:"/images/hero-generated.svg",children:[d.jsx("source",{src:ko,type:"video/webm"}),d.jsx("source",{src:BR,type:"video/mp4"})]}),d.jsx(HR,{})]}),UR=O.div`
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
`,IR=({reducedMotion:e})=>{const{t}=Ge(),{scrollYProgress:i}=ME(),a=iy(i,[0,.45],[0,-24]),o=iy(i,[0,.4],[0,30]),[l,u]=C.useState({x:0,y:0}),f=m=>{if(e)return;const g=m.currentTarget.getBoundingClientRect(),x=(m.clientX-g.left-g.width/2)/12,y=(m.clientY-g.top-g.height/2)/12;u({x:Math.max(-8,Math.min(8,x)),y:Math.max(-8,Math.min(8,y))})},p=()=>u({x:0,y:0});return d.jsx(UR,{children:d.jsxs(ae.section,{className:"hero hero-with-video",initial:"hidden",animate:"show",variants:uR,transition:{duration:.85,ease:Nu},children:[d.jsx(ae.div,{className:"hero-video-parallax",style:{y:o},children:d.jsx(GR,{})}),d.jsxs(ae.div,{className:"hero-content",style:{y:a},initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.9,ease:Cn},children:[d.jsx("h1",{children:d.jsx(_a,{text:t("home.heroTitle"),durationMs:6200,storageKey:"hero_terminal_once"})}),d.jsx("p",{children:t("home.heroSubtitle")}),d.jsxs("div",{className:"btn-row",children:[d.jsxs(ti,{to:"/kontakt",className:"btn btn-primary btn-magnetic",onMouseMove:f,onMouseLeave:p,style:{transform:`translate(${l.x}px, ${l.y}px)`},children:[d.jsx(Nn,{})," ",t("common.projectRequest")]}),d.jsxs(ti,{to:"/preise",className:"btn btn-secondary",children:[d.jsx(du,{})," ",t("common.viewPrices")]}),d.jsxs("a",{href:"#faq",className:"btn btn-secondary",children:[d.jsx(Nn,{})," ",t("home.toFaq")]})]})]}),d.jsxs("aside",{className:"hero-bento",children:[d.jsxs("article",{className:"bento-tile",children:[d.jsx("span",{children:t("home.hero.bento.speed.label")}),d.jsx("strong",{children:t("home.hero.bento.speed.value")}),d.jsx(Hu,{className:"bento-icon-bg","aria-hidden":"true"})]}),d.jsxs("article",{className:"bento-tile",children:[d.jsx("span",{children:t("home.hero.bento.seo.label")}),d.jsx("strong",{children:t("home.hero.bento.seo.value")}),d.jsx(ZE,{className:"bento-icon-bg","aria-hidden":"true"})]}),d.jsxs("article",{className:"bento-tile",children:[d.jsx("span",{children:t("home.hero.bento.leads.label")}),d.jsx("strong",{children:t("home.hero.bento.leads.value")}),d.jsx(GE,{className:"bento-icon-bg","aria-hidden":"true"})]}),d.jsxs("article",{className:"bento-tile",children:[d.jsx("span",{children:t("home.hero.bento.support.label")}),d.jsx("strong",{children:t("home.hero.bento.support.value")}),d.jsx(QE,{className:"bento-icon-bg","aria-hidden":"true"})]})]})]})})},FR=O.div`
  display: grid;
  gap: 16px;
`,qR=O.div`
  display: grid;
  gap: 8px;
`,KR=O.h3`
  font-size: 16px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.88);
`,YR=O.div`
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(10, 14, 26, 0.86);
  padding: 12px;
`,XR=O.div`
  display: flex;
  width: max-content;
  gap: 12px;
`,QR=O.div`
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
`,WR=O.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.18);
`,ZR=O.span`
  color: #ffdba2;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,JR=O.span`
  color: #fef6df;
  font-size: 15px;
  font-weight: 700;
`,eL=O.span`
  color: rgba(255, 255, 255, 0.78);
  font-size: 13px;
  line-height: 1.35;
`,tL=[{title:"Trusted Technologies",direction:"left",speed:60,items:[{label:"React",description:"UI",group:"Tech"},{label:"TypeScript",description:"Typing",group:"Tech"},{label:"SEO",description:"Visibility",group:"Growth"},{label:"Analytics",description:"Data",group:"Growth"},{label:"Automation",description:"Ops",group:"AI"}]}],Nw=({rows:e=tL})=>d.jsx(FR,{children:e.map((t,i)=>{const a=t.speed??60,o=[...t.items,...t.items,...t.items];return d.jsxs(qR,{children:[t.title?d.jsx(ae.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.5},transition:{duration:.6,ease:Cn},children:d.jsx(KR,{children:t.title})}):null,d.jsx(YR,{children:d.jsx(XR,{as:ae.div,animate:{x:t.direction==="right"?["-33.3333%","0%"]:["0%","-33.3333%"]},transition:{duration:a,ease:"linear",repeat:1/0,repeatType:"loop"},children:o.map((l,u)=>d.jsxs(QR,{$backgroundImage:l.backgroundImage,children:[d.jsxs("div",{className:"badge-top",children:[l.icon?d.jsx(WR,{style:{color:l.iconColor??"#fff",background:l.iconBg??"rgba(255,255,255,.18)"},children:l.icon}):null,l.group?d.jsx(ZR,{children:l.group}):null]}),d.jsx(JR,{children:l.label}),l.description?d.jsx(eL,{children:l.description}):null]},`${l.group??"group"}-${l.label}-${u}`))})})]},`${t.title??"row"}-${i}`)})}),nL="/assets/Beauty-B5nCKot8.png",iL="/assets/Bildung-DUb95Jd7.png",aL="/assets/Coaching-Jbjo8OUB.png",rL="/assets/Fitness-CUZr8LbH.png",sL="/assets/Gastronomie-9VWW2aHc.png",oL="/assets/Handwerk-BNTwGaMa.png",lL="/assets/Immobilien-COg-qJ-F.png",cL="/assets/Kanzlei-BRg3E-LB.png",uL="/assets/Praxen-yTv6AWqn.png",dL="/assets/Reinigung-BnCbAVwW.png",fL="/assets/Transport-CSnl9Wxm.png",pL="/assets/Werkst%C3%A4tten-CrYP5CWR.png",hL=O.div`
  .marquee-wrap {
    margin-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
    background: rgba(255, 255, 255, 0.02);
  }
`,mL=()=>{const{t:e}=Ge(),t=C.useMemo(()=>[{label:e("home.marquee.items.handwerk"),icon:d.jsx(q4,{}),backgroundImage:oL},{label:e("home.marquee.items.praxen"),icon:d.jsx(K4,{}),backgroundImage:uL},{label:e("home.marquee.items.werkstaetten"),icon:d.jsx(Y4,{}),backgroundImage:pL},{label:e("home.marquee.items.gastronomie"),icon:d.jsx(rA,{}),backgroundImage:sL},{label:e("home.marquee.items.beauty"),icon:d.jsx(eA,{}),backgroundImage:nL},{label:e("home.marquee.items.immobilien"),icon:d.jsx(I4,{}),backgroundImage:lL},{label:e("home.marquee.items.kanzlei"),icon:d.jsx($E,{}),backgroundImage:cL},{label:e("home.marquee.items.fitness"),icon:d.jsx(qE,{}),backgroundImage:rL},{label:e("home.marquee.items.reinigung"),icon:d.jsx(HE,{}),backgroundImage:dL},{label:e("home.marquee.items.transport"),icon:d.jsx(iA,{}),backgroundImage:fL},{label:e("home.marquee.items.coaching"),icon:d.jsx(UE,{}),backgroundImage:aL},{label:e("home.marquee.items.bildung"),icon:d.jsx(YE,{}),backgroundImage:iL}],[e]),i=C.useMemo(()=>[{direction:"left",speed:52,items:t}],[t]);return d.jsx(hL,{children:d.jsxs(ae.section,{className:"section marquee-wrap","aria-label":e("home.marquee.aria"),initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:pt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.marquee.title")}),d.jsx("p",{className:"section-description",children:e("home.marquee.desc")})]}),d.jsx(Nw,{rows:i})]})})},gL=()=>{const{t:e}=Ge(),t=C.useMemo(()=>[{title:e("home.partnersTitle"),direction:"right",speed:58,items:[{group:e("home.groups.highlights"),label:e("home.partners.fastLoad.title"),description:e("home.partners.fastLoad.desc"),icon:d.jsx(Hu,{}),iconColor:"#FFD25F",iconBg:"rgba(255,210,95,.2)"},{group:e("home.groups.highlights"),label:e("home.partners.moreLeads.title"),description:e("home.partners.moreLeads.desc"),icon:d.jsx(Va,{}),iconColor:"#58D68D",iconBg:"rgba(88,214,141,.2)"},{group:e("home.groups.highlights"),label:e("home.partners.clearPrices.title"),description:e("home.partners.clearPrices.desc"),icon:d.jsx(du,{}),iconColor:"#5DADE2",iconBg:"rgba(93,173,226,.2)"},{group:e("home.groups.highlights"),label:e("home.partners.personalHelp.title"),description:e("home.partners.personalHelp.desc"),icon:d.jsx(XE,{}),iconColor:"#F5B7B1",iconBg:"rgba(245,183,177,.2)"},{group:e("home.groups.forWhom"),label:e("home.partners.handwerker.title"),description:e("home.partners.handwerker.desc"),icon:d.jsx(q4,{}),iconColor:"#F8C471",iconBg:"rgba(248,196,113,.2)"},{group:e("home.groups.forWhom"),label:e("home.partners.praxen.title"),description:e("home.partners.praxen.desc"),icon:d.jsx(K4,{}),iconColor:"#EC7063",iconBg:"rgba(236,112,99,.2)"},{group:e("home.groups.forWhom"),label:e("home.partners.werkstaetten.title"),description:e("home.partners.werkstaetten.desc"),icon:d.jsx(Y4,{}),iconColor:"#AF7AC5",iconBg:"rgba(175,122,197,.2)"},{group:e("home.groups.forWhom"),label:e("home.partners.localServices.title"),description:e("home.partners.localServices.desc"),icon:d.jsx(Lo,{}),iconColor:"#E74C3C",iconBg:"rgba(231,76,60,.2)"},{group:e("home.groups.services"),label:e("home.partners.websites.title"),description:e("home.partners.websites.desc"),icon:d.jsx(Hh,{}),iconColor:"#48C9B0",iconBg:"rgba(72,201,176,.2)"},{group:e("home.groups.services"),label:e("home.partners.webApps.title"),description:e("home.partners.webApps.desc"),icon:d.jsx(sg,{}),iconColor:"#85C1E9",iconBg:"rgba(133,193,233,.2)"},{group:e("home.groups.services"),label:e("home.partners.aiIntegration.title"),description:e("home.partners.aiIntegration.desc"),icon:d.jsx(Xr,{}),iconColor:"#F7DC6F",iconBg:"rgba(247,220,111,.2)"},{group:e("home.groups.services"),label:e("home.partners.socialMedia.title"),description:e("home.partners.socialMedia.desc"),icon:d.jsx(X4,{}),iconColor:"#5DADE2",iconBg:"rgba(93,173,226,.2)"},{group:e("home.groups.services"),label:e("home.partners.socialAds.title"),description:e("home.partners.socialAds.desc"),icon:d.jsx(Ha,{}),iconColor:"#F1948A",iconBg:"rgba(241,148,138,.2)"}]}],[e]);return d.jsxs(ae.section,{className:"section",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:pt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.partnersSection.title")}),d.jsx("p",{className:"section-description",children:e("home.partnersSection.desc")})]}),d.jsx(Nw,{rows:t})]})};function Zy(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function hg(e,t){e===void 0&&(e={}),t===void 0&&(t={});const i=["__proto__","constructor","prototype"];Object.keys(t).filter(a=>i.indexOf(a)<0).forEach(a=>{typeof e[a]>"u"?e[a]=t[a]:Zy(t[a])&&Zy(e[a])&&Object.keys(t[a]).length>0&&hg(e[a],t[a])})}const Vw={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Xt(){const e=typeof document<"u"?document:{};return hg(e,Vw),e}const bL={document:Vw,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function At(){const e=typeof window<"u"?window:{};return hg(e,bL),e}function xL(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function yL(e){const t=e;Object.keys(t).forEach(i=>{try{t[i]=null}catch{}try{delete t[i]}catch{}})}function Bw(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function ju(){return Date.now()}function vL(e){const t=At();let i;return t.getComputedStyle&&(i=t.getComputedStyle(e,null)),!i&&e.currentStyle&&(i=e.currentStyle),i||(i=e.style),i}function wL(e,t){t===void 0&&(t="x");const i=At();let a,o,l;const u=vL(e);return i.WebKitCSSMatrix?(o=u.transform||u.webkitTransform,o.split(",").length>6&&(o=o.split(", ").map(f=>f.replace(",",".")).join(", ")),l=new i.WebKitCSSMatrix(o==="none"?"":o)):(l=u.MozTransform||u.OTransform||u.MsTransform||u.msTransform||u.transform||u.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=l.toString().split(",")),t==="x"&&(i.WebKitCSSMatrix?o=l.m41:a.length===16?o=parseFloat(a[12]):o=parseFloat(a[4])),t==="y"&&(i.WebKitCSSMatrix?o=l.m42:a.length===16?o=parseFloat(a[13]):o=parseFloat(a[5])),o||0}function Lc(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function SL(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function ln(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let i=1;i<arguments.length;i+=1){const a=i<0||arguments.length<=i?void 0:arguments[i];if(a!=null&&!SL(a)){const o=Object.keys(Object(a)).filter(l=>t.indexOf(l)<0);for(let l=0,u=o.length;l<u;l+=1){const f=o[l],p=Object.getOwnPropertyDescriptor(a,f);p!==void 0&&p.enumerable&&(Lc(e[f])&&Lc(a[f])?a[f].__swiper__?e[f]=a[f]:ln(e[f],a[f]):!Lc(e[f])&&Lc(a[f])?(e[f]={},a[f].__swiper__?e[f]=a[f]:ln(e[f],a[f])):e[f]=a[f])}}}return e}function Oc(e,t,i){e.style.setProperty(t,i)}function _w(e){let{swiper:t,targetPosition:i,side:a}=e;const o=At(),l=-t.translate;let u=null,f;const p=t.params.speed;t.wrapperEl.style.scrollSnapType="none",o.cancelAnimationFrame(t.cssModeFrameID);const m=i>l?"next":"prev",g=(y,v)=>m==="next"&&y>=v||m==="prev"&&y<=v,x=()=>{f=new Date().getTime(),u===null&&(u=f);const y=Math.max(Math.min((f-u)/p,1),0),v=.5-Math.cos(y*Math.PI)/2;let S=l+v*(i-l);if(g(S,i)&&(S=i),t.wrapperEl.scrollTo({[a]:S}),g(S,i)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[a]:S})}),o.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=o.requestAnimationFrame(x)};x()}function $w(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function Ti(e,t){t===void 0&&(t="");const i=At(),a=[...e.children];return i.HTMLSlotElement&&e instanceof HTMLSlotElement&&a.push(...e.assignedElements()),t?a.filter(o=>o.matches(t)):a}function TL(e,t){const i=[t];for(;i.length>0;){const a=i.shift();if(e===a)return!0;i.push(...a.children,...a.shadowRoot?a.shadowRoot.children:[],...a.assignedElements?a.assignedElements():[])}}function jL(e,t){const i=At();let a=t.contains(e);return!a&&i.HTMLSlotElement&&t instanceof HTMLSlotElement&&(a=[...t.assignedElements()].includes(e),a||(a=TL(e,t))),a}function ku(e){try{console.warn(e);return}catch{}}function Cu(e,t){t===void 0&&(t=[]);const i=document.createElement(e);return i.classList.add(...Array.isArray(t)?t:xL(t)),i}function kL(e){const t=At(),i=Xt(),a=e.getBoundingClientRect(),o=i.body,l=e.clientTop||o.clientTop||0,u=e.clientLeft||o.clientLeft||0,f=e===t?t.scrollY:e.scrollTop,p=e===t?t.scrollX:e.scrollLeft;return{top:a.top+f-l,left:a.left+p-u}}function CL(e,t){const i=[];for(;e.previousElementSibling;){const a=e.previousElementSibling;t?a.matches(t)&&i.push(a):i.push(a),e=a}return i}function EL(e,t){const i=[];for(;e.nextElementSibling;){const a=e.nextElementSibling;t?a.matches(t)&&i.push(a):i.push(a),e=a}return i}function ta(e,t){return At().getComputedStyle(e,null).getPropertyValue(t)}function sm(e){let t=e,i;if(t){for(i=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(i+=1);return i}}function om(e,t){const i=[];let a=e.parentElement;for(;a;)t?a.matches(t)&&i.push(a):i.push(a),a=a.parentElement;return i}function AL(e,t){function i(a){a.target===e&&(t.call(e,a),e.removeEventListener("transitionend",i))}t&&e.addEventListener("transitionend",i)}function Jy(e,t,i){const a=At();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(a.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(a.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function vt(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function lm(e,t){t===void 0&&(t=""),typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:i=>i}).createHTML(t):e.innerHTML=t}let qp;function ML(){const e=At(),t=Xt();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Hw(){return qp||(qp=ML()),qp}let Kp;function zL(e){let{userAgent:t}=e===void 0?{}:e;const i=Hw(),a=At(),o=a.navigator.platform,l=t||a.navigator.userAgent,u={ios:!1,android:!1},f=a.screen.width,p=a.screen.height,m=l.match(/(Android);?[\s\/]+([\d.]+)?/);let g=l.match(/(iPad).*OS\s([\d_]+)/);const x=l.match(/(iPod)(.*OS\s([\d_]+))?/),y=!g&&l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=o==="Win32";let S=o==="MacIntel";const j=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!g&&S&&i.touch&&j.indexOf(`${f}x${p}`)>=0&&(g=l.match(/(Version)\/([\d.]+)/),g||(g=[0,1,"13_0_0"]),S=!1),m&&!v&&(u.os="android",u.android=!0),(g||y||x)&&(u.os="ios",u.ios=!0),u}function Gw(e){return e===void 0&&(e={}),Kp||(Kp=zL(e)),Kp}let Yp;function RL(){const e=At(),t=Gw();let i=!1;function a(){const f=e.navigator.userAgent.toLowerCase();return f.indexOf("safari")>=0&&f.indexOf("chrome")<0&&f.indexOf("android")<0}if(a()){const f=String(e.navigator.userAgent);if(f.includes("Version/")){const[p,m]=f.split("Version/")[1].split(" ")[0].split(".").map(g=>Number(g));i=p<16||p===16&&m<2}}const o=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),l=a(),u=l||o&&t.ios;return{isSafari:i||l,needPerspectiveFix:i,need3dFix:u,isWebView:o}}function Uw(){return Yp||(Yp=RL()),Yp}function LL(e){let{swiper:t,on:i,emit:a}=e;const o=At();let l=null,u=null;const f=()=>{!t||t.destroyed||!t.initialized||(a("beforeResize"),a("resize"))},p=()=>{!t||t.destroyed||!t.initialized||(l=new ResizeObserver(x=>{u=o.requestAnimationFrame(()=>{const{width:y,height:v}=t;let S=y,j=v;x.forEach(A=>{let{contentBoxSize:k,contentRect:R,target:E}=A;E&&E!==t.el||(S=R?R.width:(k[0]||k).inlineSize,j=R?R.height:(k[0]||k).blockSize)}),(S!==y||j!==v)&&f()})}),l.observe(t.el))},m=()=>{u&&o.cancelAnimationFrame(u),l&&l.unobserve&&t.el&&(l.unobserve(t.el),l=null)},g=()=>{!t||t.destroyed||!t.initialized||a("orientationchange")};i("init",()=>{if(t.params.resizeObserver&&typeof o.ResizeObserver<"u"){p();return}o.addEventListener("resize",f),o.addEventListener("orientationchange",g)}),i("destroy",()=>{m(),o.removeEventListener("resize",f),o.removeEventListener("orientationchange",g)})}function OL(e){let{swiper:t,extendParams:i,on:a,emit:o}=e;const l=[],u=At(),f=function(g,x){x===void 0&&(x={});const y=u.MutationObserver||u.WebkitMutationObserver,v=new y(S=>{if(t.__preventObserver__)return;if(S.length===1){o("observerUpdate",S[0]);return}const j=function(){o("observerUpdate",S[0])};u.requestAnimationFrame?u.requestAnimationFrame(j):u.setTimeout(j,0)});v.observe(g,{attributes:typeof x.attributes>"u"?!0:x.attributes,childList:t.isElement||(typeof x.childList>"u"?!0:x).childList,characterData:typeof x.characterData>"u"?!0:x.characterData}),l.push(v)},p=()=>{if(t.params.observer){if(t.params.observeParents){const g=om(t.hostEl);for(let x=0;x<g.length;x+=1)f(g[x])}f(t.hostEl,{childList:t.params.observeSlideChildren}),f(t.wrapperEl,{attributes:!1})}},m=()=>{l.forEach(g=>{g.disconnect()}),l.splice(0,l.length)};i({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",p),a("destroy",m)}var DL={on(e,t,i){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;const o=i?"unshift":"push";return e.split(" ").forEach(l=>{a.eventsListeners[l]||(a.eventsListeners[l]=[]),a.eventsListeners[l][o](t)}),a},once(e,t,i){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;function o(){a.off(e,o),o.__emitterProxy&&delete o.__emitterProxy;for(var l=arguments.length,u=new Array(l),f=0;f<l;f++)u[f]=arguments[f];t.apply(a,u)}return o.__emitterProxy=t,a.on(e,o,i)},onAny(e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;const a=t?"unshift":"push";return i.eventsAnyListeners.indexOf(e)<0&&i.eventsAnyListeners[a](e),i},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const i=t.eventsAnyListeners.indexOf(e);return i>=0&&t.eventsAnyListeners.splice(i,1),t},off(e,t){const i=this;return!i.eventsListeners||i.destroyed||!i.eventsListeners||e.split(" ").forEach(a=>{typeof t>"u"?i.eventsListeners[a]=[]:i.eventsListeners[a]&&i.eventsListeners[a].forEach((o,l)=>{(o===t||o.__emitterProxy&&o.__emitterProxy===t)&&i.eventsListeners[a].splice(l,1)})}),i},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,i,a;for(var o=arguments.length,l=new Array(o),u=0;u<o;u++)l[u]=arguments[u];return typeof l[0]=="string"||Array.isArray(l[0])?(t=l[0],i=l.slice(1,l.length),a=e):(t=l[0].events,i=l[0].data,a=l[0].context||e),i.unshift(a),(Array.isArray(t)?t:t.split(" ")).forEach(p=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(m=>{m.apply(a,[p,...i])}),e.eventsListeners&&e.eventsListeners[p]&&e.eventsListeners[p].forEach(m=>{m.apply(a,i)})}),e}};function PL(){const e=this;let t,i;const a=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=a.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?i=e.params.height:i=a.clientHeight,!(t===0&&e.isHorizontal()||i===0&&e.isVertical())&&(t=t-parseInt(ta(a,"padding-left")||0,10)-parseInt(ta(a,"padding-right")||0,10),i=i-parseInt(ta(a,"padding-top")||0,10)-parseInt(ta(a,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(i)&&(i=0),Object.assign(e,{width:t,height:i,size:e.isHorizontal()?t:i}))}function NL(){const e=this;function t(Y,Z){return parseFloat(Y.getPropertyValue(e.getDirectionLabel(Z))||0)}const i=e.params,{wrapperEl:a,slidesEl:o,size:l,rtlTranslate:u,wrongRTL:f}=e,p=e.virtual&&i.virtual.enabled,m=p?e.virtual.slides.length:e.slides.length,g=Ti(o,`.${e.params.slideClass}, swiper-slide`),x=p?e.virtual.slides.length:g.length;let y=[];const v=[],S=[];let j=i.slidesOffsetBefore;typeof j=="function"&&(j=i.slidesOffsetBefore.call(e));let A=i.slidesOffsetAfter;typeof A=="function"&&(A=i.slidesOffsetAfter.call(e));const k=e.snapGrid.length,R=e.slidesGrid.length;let E=i.spaceBetween,B=-j,M=0,N=0;if(typeof l>"u")return;typeof E=="string"&&E.indexOf("%")>=0?E=parseFloat(E.replace("%",""))/100*l:typeof E=="string"&&(E=parseFloat(E)),e.virtualSize=-E,g.forEach(Y=>{u?Y.style.marginLeft="":Y.style.marginRight="",Y.style.marginBottom="",Y.style.marginTop=""}),i.centeredSlides&&i.cssMode&&(Oc(a,"--swiper-centered-offset-before",""),Oc(a,"--swiper-centered-offset-after",""));const P=i.grid&&i.grid.rows>1&&e.grid;P?e.grid.initSlides(g):e.grid&&e.grid.unsetSlides();let U;const G=i.slidesPerView==="auto"&&i.breakpoints&&Object.keys(i.breakpoints).filter(Y=>typeof i.breakpoints[Y].slidesPerView<"u").length>0;for(let Y=0;Y<x;Y+=1){U=0;let Z;if(g[Y]&&(Z=g[Y]),P&&e.grid.updateSlide(Y,Z,g),!(g[Y]&&ta(Z,"display")==="none")){if(i.slidesPerView==="auto"){G&&(g[Y].style[e.getDirectionLabel("width")]="");const ne=getComputedStyle(Z),le=Z.style.transform,ce=Z.style.webkitTransform;if(le&&(Z.style.transform="none"),ce&&(Z.style.webkitTransform="none"),i.roundLengths)U=e.isHorizontal()?Jy(Z,"width"):Jy(Z,"height");else{const ue=t(ne,"width"),H=t(ne,"padding-left"),D=t(ne,"padding-right"),_=t(ne,"margin-left"),Q=t(ne,"margin-right"),z=ne.getPropertyValue("box-sizing");if(z&&z==="border-box")U=ue+_+Q;else{const{clientWidth:X,offsetWidth:te}=Z;U=ue+H+D+_+Q+(te-X)}}le&&(Z.style.transform=le),ce&&(Z.style.webkitTransform=ce),i.roundLengths&&(U=Math.floor(U))}else U=(l-(i.slidesPerView-1)*E)/i.slidesPerView,i.roundLengths&&(U=Math.floor(U)),g[Y]&&(g[Y].style[e.getDirectionLabel("width")]=`${U}px`);g[Y]&&(g[Y].swiperSlideSize=U),S.push(U),i.centeredSlides?(B=B+U/2+M/2+E,M===0&&Y!==0&&(B=B-l/2-E),Y===0&&(B=B-l/2-E),Math.abs(B)<1/1e3&&(B=0),i.roundLengths&&(B=Math.floor(B)),N%i.slidesPerGroup===0&&y.push(B),v.push(B)):(i.roundLengths&&(B=Math.floor(B)),(N-Math.min(e.params.slidesPerGroupSkip,N))%e.params.slidesPerGroup===0&&y.push(B),v.push(B),B=B+U+E),e.virtualSize+=U+E,M=U,N+=1}}if(e.virtualSize=Math.max(e.virtualSize,l)+A,u&&f&&(i.effect==="slide"||i.effect==="coverflow")&&(a.style.width=`${e.virtualSize+E}px`),i.setWrapperSize&&(a.style[e.getDirectionLabel("width")]=`${e.virtualSize+E}px`),P&&e.grid.updateWrapperSize(U,y),!i.centeredSlides){const Y=[];for(let Z=0;Z<y.length;Z+=1){let ne=y[Z];i.roundLengths&&(ne=Math.floor(ne)),y[Z]<=e.virtualSize-l&&Y.push(ne)}y=Y,Math.floor(e.virtualSize-l)-Math.floor(y[y.length-1])>1&&y.push(e.virtualSize-l)}if(p&&i.loop){const Y=S[0]+E;if(i.slidesPerGroup>1){const Z=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/i.slidesPerGroup),ne=Y*i.slidesPerGroup;for(let le=0;le<Z;le+=1)y.push(y[y.length-1]+ne)}for(let Z=0;Z<e.virtual.slidesBefore+e.virtual.slidesAfter;Z+=1)i.slidesPerGroup===1&&y.push(y[y.length-1]+Y),v.push(v[v.length-1]+Y),e.virtualSize+=Y}if(y.length===0&&(y=[0]),E!==0){const Y=e.isHorizontal()&&u?"marginLeft":e.getDirectionLabel("marginRight");g.filter((Z,ne)=>!i.cssMode||i.loop?!0:ne!==g.length-1).forEach(Z=>{Z.style[Y]=`${E}px`})}if(i.centeredSlides&&i.centeredSlidesBounds){let Y=0;S.forEach(ne=>{Y+=ne+(E||0)}),Y-=E;const Z=Y>l?Y-l:0;y=y.map(ne=>ne<=0?-j:ne>Z?Z+A:ne)}if(i.centerInsufficientSlides){let Y=0;S.forEach(ne=>{Y+=ne+(E||0)}),Y-=E;const Z=(i.slidesOffsetBefore||0)+(i.slidesOffsetAfter||0);if(Y+Z<l){const ne=(l-Y-Z)/2;y.forEach((le,ce)=>{y[ce]=le-ne}),v.forEach((le,ce)=>{v[ce]=le+ne})}}if(Object.assign(e,{slides:g,snapGrid:y,slidesGrid:v,slidesSizesGrid:S}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){Oc(a,"--swiper-centered-offset-before",`${-y[0]}px`),Oc(a,"--swiper-centered-offset-after",`${e.size/2-S[S.length-1]/2}px`);const Y=-e.snapGrid[0],Z=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(ne=>ne+Y),e.slidesGrid=e.slidesGrid.map(ne=>ne+Z)}if(x!==m&&e.emit("slidesLengthChange"),y.length!==k&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==R&&e.emit("slidesGridLengthChange"),i.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!p&&!i.cssMode&&(i.effect==="slide"||i.effect==="fade")){const Y=`${i.containerModifierClass}backface-hidden`,Z=e.el.classList.contains(Y);x<=i.maxBackfaceHiddenSlides?Z||e.el.classList.add(Y):Z&&e.el.classList.remove(Y)}}function VL(e){const t=this,i=[],a=t.virtual&&t.params.virtual.enabled;let o=0,l;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const u=f=>a?t.slides[t.getSlideIndexByData(f)]:t.slides[f];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(f=>{i.push(f)});else for(l=0;l<Math.ceil(t.params.slidesPerView);l+=1){const f=t.activeIndex+l;if(f>t.slides.length&&!a)break;i.push(u(f))}else i.push(u(t.activeIndex));for(l=0;l<i.length;l+=1)if(typeof i[l]<"u"){const f=i[l].offsetHeight;o=f>o?f:o}(o||o===0)&&(t.wrapperEl.style.height=`${o}px`)}function BL(){const e=this,t=e.slides,i=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let a=0;a<t.length;a+=1)t[a].swiperSlideOffset=(e.isHorizontal()?t[a].offsetLeft:t[a].offsetTop)-i-e.cssOverflowAdjustment()}const ev=(e,t,i)=>{t&&!e.classList.contains(i)?e.classList.add(i):!t&&e.classList.contains(i)&&e.classList.remove(i)};function _L(e){e===void 0&&(e=this&&this.translate||0);const t=this,i=t.params,{slides:a,rtlTranslate:o,snapGrid:l}=t;if(a.length===0)return;typeof a[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let u=-e;o&&(u=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let f=i.spaceBetween;typeof f=="string"&&f.indexOf("%")>=0?f=parseFloat(f.replace("%",""))/100*t.size:typeof f=="string"&&(f=parseFloat(f));for(let p=0;p<a.length;p+=1){const m=a[p];let g=m.swiperSlideOffset;i.cssMode&&i.centeredSlides&&(g-=a[0].swiperSlideOffset);const x=(u+(i.centeredSlides?t.minTranslate():0)-g)/(m.swiperSlideSize+f),y=(u-l[0]+(i.centeredSlides?t.minTranslate():0)-g)/(m.swiperSlideSize+f),v=-(u-g),S=v+t.slidesSizesGrid[p],j=v>=0&&v<=t.size-t.slidesSizesGrid[p],A=v>=0&&v<t.size-1||S>1&&S<=t.size||v<=0&&S>=t.size;A&&(t.visibleSlides.push(m),t.visibleSlidesIndexes.push(p)),ev(m,A,i.slideVisibleClass),ev(m,j,i.slideFullyVisibleClass),m.progress=o?-x:x,m.originalProgress=o?-y:y}}function $L(e){const t=this;if(typeof e>"u"){const g=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*g||0}const i=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:o,isBeginning:l,isEnd:u,progressLoop:f}=t;const p=l,m=u;if(a===0)o=0,l=!0,u=!0;else{o=(e-t.minTranslate())/a;const g=Math.abs(e-t.minTranslate())<1,x=Math.abs(e-t.maxTranslate())<1;l=g||o<=0,u=x||o>=1,g&&(o=0),x&&(o=1)}if(i.loop){const g=t.getSlideIndexByData(0),x=t.getSlideIndexByData(t.slides.length-1),y=t.slidesGrid[g],v=t.slidesGrid[x],S=t.slidesGrid[t.slidesGrid.length-1],j=Math.abs(e);j>=y?f=(j-y)/S:f=(j+S-v)/S,f>1&&(f-=1)}Object.assign(t,{progress:o,progressLoop:f,isBeginning:l,isEnd:u}),(i.watchSlidesProgress||i.centeredSlides&&i.autoHeight)&&t.updateSlidesProgress(e),l&&!p&&t.emit("reachBeginning toEdge"),u&&!m&&t.emit("reachEnd toEdge"),(p&&!l||m&&!u)&&t.emit("fromEdge"),t.emit("progress",o)}const Xp=(e,t,i)=>{t&&!e.classList.contains(i)?e.classList.add(i):!t&&e.classList.contains(i)&&e.classList.remove(i)};function HL(){const e=this,{slides:t,params:i,slidesEl:a,activeIndex:o}=e,l=e.virtual&&i.virtual.enabled,u=e.grid&&i.grid&&i.grid.rows>1,f=x=>Ti(a,`.${i.slideClass}${x}, swiper-slide${x}`)[0];let p,m,g;if(l)if(i.loop){let x=o-e.virtual.slidesBefore;x<0&&(x=e.virtual.slides.length+x),x>=e.virtual.slides.length&&(x-=e.virtual.slides.length),p=f(`[data-swiper-slide-index="${x}"]`)}else p=f(`[data-swiper-slide-index="${o}"]`);else u?(p=t.find(x=>x.column===o),g=t.find(x=>x.column===o+1),m=t.find(x=>x.column===o-1)):p=t[o];p&&(u||(g=EL(p,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!g&&(g=t[0]),m=CL(p,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!m===0&&(m=t[t.length-1]))),t.forEach(x=>{Xp(x,x===p,i.slideActiveClass),Xp(x,x===g,i.slideNextClass),Xp(x,x===m,i.slidePrevClass)}),e.emitSlidesClasses()}const eu=(e,t)=>{if(!e||e.destroyed||!e.params)return;const i=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,a=t.closest(i());if(a){let o=a.querySelector(`.${e.params.lazyPreloaderClass}`);!o&&e.isElement&&(a.shadowRoot?o=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{a.shadowRoot&&(o=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),o&&o.remove())})),o&&o.remove()}},Qp=(e,t)=>{if(!e.slides[t])return;const i=e.slides[t].querySelector('[loading="lazy"]');i&&i.removeAttribute("loading")},cm=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const i=e.slides.length;if(!i||!t||t<0)return;t=Math.min(t,i);const a=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),o=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const u=o,f=[u-t];f.push(...Array.from({length:t}).map((p,m)=>u+a+m)),e.slides.forEach((p,m)=>{f.includes(p.column)&&Qp(e,m)});return}const l=o+a-1;if(e.params.rewind||e.params.loop)for(let u=o-t;u<=l+t;u+=1){const f=(u%i+i)%i;(f<o||f>l)&&Qp(e,f)}else for(let u=Math.max(o-t,0);u<=Math.min(l+t,i-1);u+=1)u!==o&&(u>l||u<o)&&Qp(e,u)};function GL(e){const{slidesGrid:t,params:i}=e,a=e.rtlTranslate?e.translate:-e.translate;let o;for(let l=0;l<t.length;l+=1)typeof t[l+1]<"u"?a>=t[l]&&a<t[l+1]-(t[l+1]-t[l])/2?o=l:a>=t[l]&&a<t[l+1]&&(o=l+1):a>=t[l]&&(o=l);return i.normalizeSlideIndex&&(o<0||typeof o>"u")&&(o=0),o}function UL(e){const t=this,i=t.rtlTranslate?t.translate:-t.translate,{snapGrid:a,params:o,activeIndex:l,realIndex:u,snapIndex:f}=t;let p=e,m;const g=v=>{let S=v-t.virtual.slidesBefore;return S<0&&(S=t.virtual.slides.length+S),S>=t.virtual.slides.length&&(S-=t.virtual.slides.length),S};if(typeof p>"u"&&(p=GL(t)),a.indexOf(i)>=0)m=a.indexOf(i);else{const v=Math.min(o.slidesPerGroupSkip,p);m=v+Math.floor((p-v)/o.slidesPerGroup)}if(m>=a.length&&(m=a.length-1),p===l&&!t.params.loop){m!==f&&(t.snapIndex=m,t.emit("snapIndexChange"));return}if(p===l&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=g(p);return}const x=t.grid&&o.grid&&o.grid.rows>1;let y;if(t.virtual&&o.virtual.enabled&&o.loop)y=g(p);else if(x){const v=t.slides.find(j=>j.column===p);let S=parseInt(v.getAttribute("data-swiper-slide-index"),10);Number.isNaN(S)&&(S=Math.max(t.slides.indexOf(v),0)),y=Math.floor(S/o.grid.rows)}else if(t.slides[p]){const v=t.slides[p].getAttribute("data-swiper-slide-index");v?y=parseInt(v,10):y=p}else y=p;Object.assign(t,{previousSnapIndex:f,snapIndex:m,previousRealIndex:u,realIndex:y,previousIndex:l,activeIndex:p}),t.initialized&&cm(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(u!==y&&t.emit("realIndexChange"),t.emit("slideChange"))}function IL(e,t){const i=this,a=i.params;let o=e.closest(`.${a.slideClass}, swiper-slide`);!o&&i.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(f=>{!o&&f.matches&&f.matches(`.${a.slideClass}, swiper-slide`)&&(o=f)});let l=!1,u;if(o){for(let f=0;f<i.slides.length;f+=1)if(i.slides[f]===o){l=!0,u=f;break}}if(o&&l)i.clickedSlide=o,i.virtual&&i.params.virtual.enabled?i.clickedIndex=parseInt(o.getAttribute("data-swiper-slide-index"),10):i.clickedIndex=u;else{i.clickedSlide=void 0,i.clickedIndex=void 0;return}a.slideToClickedSlide&&i.clickedIndex!==void 0&&i.clickedIndex!==i.activeIndex&&i.slideToClickedSlide()}var FL={updateSize:PL,updateSlides:NL,updateAutoHeight:VL,updateSlidesOffset:BL,updateSlidesProgress:_L,updateProgress:$L,updateSlidesClasses:HL,updateActiveIndex:UL,updateClickedSlide:IL};function qL(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:i,rtlTranslate:a,translate:o,wrapperEl:l}=t;if(i.virtualTranslate)return a?-o:o;if(i.cssMode)return o;let u=wL(l,e);return u+=t.cssOverflowAdjustment(),a&&(u=-u),u||0}function KL(e,t){const i=this,{rtlTranslate:a,params:o,wrapperEl:l,progress:u}=i;let f=0,p=0;const m=0;i.isHorizontal()?f=a?-e:e:p=e,o.roundLengths&&(f=Math.floor(f),p=Math.floor(p)),i.previousTranslate=i.translate,i.translate=i.isHorizontal()?f:p,o.cssMode?l[i.isHorizontal()?"scrollLeft":"scrollTop"]=i.isHorizontal()?-f:-p:o.virtualTranslate||(i.isHorizontal()?f-=i.cssOverflowAdjustment():p-=i.cssOverflowAdjustment(),l.style.transform=`translate3d(${f}px, ${p}px, ${m}px)`);let g;const x=i.maxTranslate()-i.minTranslate();x===0?g=0:g=(e-i.minTranslate())/x,g!==u&&i.updateProgress(e),i.emit("setTranslate",i.translate,t)}function YL(){return-this.snapGrid[0]}function XL(){return-this.snapGrid[this.snapGrid.length-1]}function QL(e,t,i,a,o){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),i===void 0&&(i=!0),a===void 0&&(a=!0);const l=this,{params:u,wrapperEl:f}=l;if(l.animating&&u.preventInteractionOnTransition)return!1;const p=l.minTranslate(),m=l.maxTranslate();let g;if(a&&e>p?g=p:a&&e<m?g=m:g=e,l.updateProgress(g),u.cssMode){const x=l.isHorizontal();if(t===0)f[x?"scrollLeft":"scrollTop"]=-g;else{if(!l.support.smoothScroll)return _w({swiper:l,targetPosition:-g,side:x?"left":"top"}),!0;f.scrollTo({[x?"left":"top"]:-g,behavior:"smooth"})}return!0}return t===0?(l.setTransition(0),l.setTranslate(g),i&&(l.emit("beforeTransitionStart",t,o),l.emit("transitionEnd"))):(l.setTransition(t),l.setTranslate(g),i&&(l.emit("beforeTransitionStart",t,o),l.emit("transitionStart")),l.animating||(l.animating=!0,l.onTranslateToWrapperTransitionEnd||(l.onTranslateToWrapperTransitionEnd=function(y){!l||l.destroyed||y.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onTranslateToWrapperTransitionEnd),l.onTranslateToWrapperTransitionEnd=null,delete l.onTranslateToWrapperTransitionEnd,l.animating=!1,i&&l.emit("transitionEnd"))}),l.wrapperEl.addEventListener("transitionend",l.onTranslateToWrapperTransitionEnd))),!0}var WL={getTranslate:qL,setTranslate:KL,minTranslate:YL,maxTranslate:XL,translateTo:QL};function ZL(e,t){const i=this;i.params.cssMode||(i.wrapperEl.style.transitionDuration=`${e}ms`,i.wrapperEl.style.transitionDelay=e===0?"0ms":""),i.emit("setTransition",e,t)}function Iw(e){let{swiper:t,runCallbacks:i,direction:a,step:o}=e;const{activeIndex:l,previousIndex:u}=t;let f=a;f||(l>u?f="next":l<u?f="prev":f="reset"),t.emit(`transition${o}`),i&&f==="reset"?t.emit(`slideResetTransition${o}`):i&&l!==u&&(t.emit(`slideChangeTransition${o}`),f==="next"?t.emit(`slideNextTransition${o}`):t.emit(`slidePrevTransition${o}`))}function JL(e,t){e===void 0&&(e=!0);const i=this,{params:a}=i;a.cssMode||(a.autoHeight&&i.updateAutoHeight(),Iw({swiper:i,runCallbacks:e,direction:t,step:"Start"}))}function eO(e,t){e===void 0&&(e=!0);const i=this,{params:a}=i;i.animating=!1,!a.cssMode&&(i.setTransition(0),Iw({swiper:i,runCallbacks:e,direction:t,step:"End"}))}var tO={setTransition:ZL,transitionStart:JL,transitionEnd:eO};function nO(e,t,i,a,o){e===void 0&&(e=0),i===void 0&&(i=!0),typeof e=="string"&&(e=parseInt(e,10));const l=this;let u=e;u<0&&(u=0);const{params:f,snapGrid:p,slidesGrid:m,previousIndex:g,activeIndex:x,rtlTranslate:y,wrapperEl:v,enabled:S}=l;if(!S&&!a&&!o||l.destroyed||l.animating&&f.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=l.params.speed);const j=Math.min(l.params.slidesPerGroupSkip,u);let A=j+Math.floor((u-j)/l.params.slidesPerGroup);A>=p.length&&(A=p.length-1);const k=-p[A];if(f.normalizeSlideIndex)for(let P=0;P<m.length;P+=1){const U=-Math.floor(k*100),G=Math.floor(m[P]*100),Y=Math.floor(m[P+1]*100);typeof m[P+1]<"u"?U>=G&&U<Y-(Y-G)/2?u=P:U>=G&&U<Y&&(u=P+1):U>=G&&(u=P)}if(l.initialized&&u!==x&&(!l.allowSlideNext&&(y?k>l.translate&&k>l.minTranslate():k<l.translate&&k<l.minTranslate())||!l.allowSlidePrev&&k>l.translate&&k>l.maxTranslate()&&(x||0)!==u))return!1;u!==(g||0)&&i&&l.emit("beforeSlideChangeStart"),l.updateProgress(k);let R;u>x?R="next":u<x?R="prev":R="reset";const E=l.virtual&&l.params.virtual.enabled;if(!(E&&o)&&(y&&-k===l.translate||!y&&k===l.translate))return l.updateActiveIndex(u),f.autoHeight&&l.updateAutoHeight(),l.updateSlidesClasses(),f.effect!=="slide"&&l.setTranslate(k),R!=="reset"&&(l.transitionStart(i,R),l.transitionEnd(i,R)),!1;if(f.cssMode){const P=l.isHorizontal(),U=y?k:-k;if(t===0)E&&(l.wrapperEl.style.scrollSnapType="none",l._immediateVirtual=!0),E&&!l._cssModeVirtualInitialSet&&l.params.initialSlide>0?(l._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{v[P?"scrollLeft":"scrollTop"]=U})):v[P?"scrollLeft":"scrollTop"]=U,E&&requestAnimationFrame(()=>{l.wrapperEl.style.scrollSnapType="",l._immediateVirtual=!1});else{if(!l.support.smoothScroll)return _w({swiper:l,targetPosition:U,side:P?"left":"top"}),!0;v.scrollTo({[P?"left":"top"]:U,behavior:"smooth"})}return!0}const N=Uw().isSafari;return E&&!o&&N&&l.isElement&&l.virtual.update(!1,!1,u),l.setTransition(t),l.setTranslate(k),l.updateActiveIndex(u),l.updateSlidesClasses(),l.emit("beforeTransitionStart",t,a),l.transitionStart(i,R),t===0?l.transitionEnd(i,R):l.animating||(l.animating=!0,l.onSlideToWrapperTransitionEnd||(l.onSlideToWrapperTransitionEnd=function(U){!l||l.destroyed||U.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onSlideToWrapperTransitionEnd),l.onSlideToWrapperTransitionEnd=null,delete l.onSlideToWrapperTransitionEnd,l.transitionEnd(i,R))}),l.wrapperEl.addEventListener("transitionend",l.onSlideToWrapperTransitionEnd)),!0}function iO(e,t,i,a){e===void 0&&(e=0),i===void 0&&(i=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;if(o.destroyed)return;typeof t>"u"&&(t=o.params.speed);const l=o.grid&&o.params.grid&&o.params.grid.rows>1;let u=e;if(o.params.loop)if(o.virtual&&o.params.virtual.enabled)u=u+o.virtual.slidesBefore;else{let f;if(l){const y=u*o.params.grid.rows;f=o.slides.find(v=>v.getAttribute("data-swiper-slide-index")*1===y).column}else f=o.getSlideIndexByData(u);const p=l?Math.ceil(o.slides.length/o.params.grid.rows):o.slides.length,{centeredSlides:m}=o.params;let g=o.params.slidesPerView;g==="auto"?g=o.slidesPerViewDynamic():(g=Math.ceil(parseFloat(o.params.slidesPerView,10)),m&&g%2===0&&(g=g+1));let x=p-f<g;if(m&&(x=x||f<Math.ceil(g/2)),a&&m&&o.params.slidesPerView!=="auto"&&!l&&(x=!1),x){const y=m?f<o.activeIndex?"prev":"next":f-o.activeIndex-1<o.params.slidesPerView?"next":"prev";o.loopFix({direction:y,slideTo:!0,activeSlideIndex:y==="next"?f+1:f-p+1,slideRealIndex:y==="next"?o.realIndex:void 0})}if(l){const y=u*o.params.grid.rows;u=o.slides.find(v=>v.getAttribute("data-swiper-slide-index")*1===y).column}else u=o.getSlideIndexByData(u)}return requestAnimationFrame(()=>{o.slideTo(u,t,i,a)}),o}function aO(e,t,i){t===void 0&&(t=!0);const a=this,{enabled:o,params:l,animating:u}=a;if(!o||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);let f=l.slidesPerGroup;l.slidesPerView==="auto"&&l.slidesPerGroup===1&&l.slidesPerGroupAuto&&(f=Math.max(a.slidesPerViewDynamic("current",!0),1));const p=a.activeIndex<l.slidesPerGroupSkip?1:f,m=a.virtual&&l.virtual.enabled;if(l.loop){if(u&&!m&&l.loopPreventsSliding)return!1;if(a.loopFix({direction:"next"}),a._clientLeft=a.wrapperEl.clientLeft,a.activeIndex===a.slides.length-1&&l.cssMode)return requestAnimationFrame(()=>{a.slideTo(a.activeIndex+p,e,t,i)}),!0}return l.rewind&&a.isEnd?a.slideTo(0,e,t,i):a.slideTo(a.activeIndex+p,e,t,i)}function rO(e,t,i){t===void 0&&(t=!0);const a=this,{params:o,snapGrid:l,slidesGrid:u,rtlTranslate:f,enabled:p,animating:m}=a;if(!p||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);const g=a.virtual&&o.virtual.enabled;if(o.loop){if(m&&!g&&o.loopPreventsSliding)return!1;a.loopFix({direction:"prev"}),a._clientLeft=a.wrapperEl.clientLeft}const x=f?a.translate:-a.translate;function y(R){return R<0?-Math.floor(Math.abs(R)):Math.floor(R)}const v=y(x),S=l.map(R=>y(R)),j=o.freeMode&&o.freeMode.enabled;let A=l[S.indexOf(v)-1];if(typeof A>"u"&&(o.cssMode||j)){let R;l.forEach((E,B)=>{v>=E&&(R=B)}),typeof R<"u"&&(A=j?l[R]:l[R>0?R-1:R])}let k=0;if(typeof A<"u"&&(k=u.indexOf(A),k<0&&(k=a.activeIndex-1),o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(k=k-a.slidesPerViewDynamic("previous",!0)+1,k=Math.max(k,0))),o.rewind&&a.isBeginning){const R=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(R,e,t,i)}else if(o.loop&&a.activeIndex===0&&o.cssMode)return requestAnimationFrame(()=>{a.slideTo(k,e,t,i)}),!0;return a.slideTo(k,e,t,i)}function sO(e,t,i){t===void 0&&(t=!0);const a=this;if(!a.destroyed)return typeof e>"u"&&(e=a.params.speed),a.slideTo(a.activeIndex,e,t,i)}function oO(e,t,i,a){t===void 0&&(t=!0),a===void 0&&(a=.5);const o=this;if(o.destroyed)return;typeof e>"u"&&(e=o.params.speed);let l=o.activeIndex;const u=Math.min(o.params.slidesPerGroupSkip,l),f=u+Math.floor((l-u)/o.params.slidesPerGroup),p=o.rtlTranslate?o.translate:-o.translate;if(p>=o.snapGrid[f]){const m=o.snapGrid[f],g=o.snapGrid[f+1];p-m>(g-m)*a&&(l+=o.params.slidesPerGroup)}else{const m=o.snapGrid[f-1],g=o.snapGrid[f];p-m<=(g-m)*a&&(l-=o.params.slidesPerGroup)}return l=Math.max(l,0),l=Math.min(l,o.slidesGrid.length-1),o.slideTo(l,e,t,i)}function lO(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:i}=e,a=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let o=e.getSlideIndexWhenGrid(e.clickedIndex),l;const u=e.isElement?"swiper-slide":`.${t.slideClass}`,f=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;l=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(l):o>(f?(e.slides.length-a)/2-(e.params.grid.rows-1):e.slides.length-a)?(e.loopFix(),o=e.getSlideIndex(Ti(i,`${u}[data-swiper-slide-index="${l}"]`)[0]),Bw(()=>{e.slideTo(o)})):e.slideTo(o)}else e.slideTo(o)}var cO={slideTo:nO,slideToLoop:iO,slideNext:aO,slidePrev:rO,slideReset:sO,slideToClosest:oO,slideToClickedSlide:lO};function uO(e,t){const i=this,{params:a,slidesEl:o}=i;if(!a.loop||i.virtual&&i.params.virtual.enabled)return;const l=()=>{Ti(o,`.${a.slideClass}, swiper-slide`).forEach((v,S)=>{v.setAttribute("data-swiper-slide-index",S)})},u=()=>{const y=Ti(o,`.${a.slideBlankClass}`);y.forEach(v=>{v.remove()}),y.length>0&&(i.recalcSlides(),i.updateSlides())},f=i.grid&&a.grid&&a.grid.rows>1;a.loopAddBlankSlides&&(a.slidesPerGroup>1||f)&&u();const p=a.slidesPerGroup*(f?a.grid.rows:1),m=i.slides.length%p!==0,g=f&&i.slides.length%a.grid.rows!==0,x=y=>{for(let v=0;v<y;v+=1){const S=i.isElement?Cu("swiper-slide",[a.slideBlankClass]):Cu("div",[a.slideClass,a.slideBlankClass]);i.slidesEl.append(S)}};if(m){if(a.loopAddBlankSlides){const y=p-i.slides.length%p;x(y),i.recalcSlides(),i.updateSlides()}else ku("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else if(g){if(a.loopAddBlankSlides){const y=a.grid.rows-i.slides.length%a.grid.rows;x(y),i.recalcSlides(),i.updateSlides()}else ku("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else l();i.loopFix({slideRealIndex:e,direction:a.centeredSlides?void 0:"next",initial:t})}function dO(e){let{slideRealIndex:t,slideTo:i=!0,direction:a,setTranslate:o,activeSlideIndex:l,initial:u,byController:f,byMousewheel:p}=e===void 0?{}:e;const m=this;if(!m.params.loop)return;m.emit("beforeLoopFix");const{slides:g,allowSlidePrev:x,allowSlideNext:y,slidesEl:v,params:S}=m,{centeredSlides:j,initialSlide:A}=S;if(m.allowSlidePrev=!0,m.allowSlideNext=!0,m.virtual&&S.virtual.enabled){i&&(!S.centeredSlides&&m.snapIndex===0?m.slideTo(m.virtual.slides.length,0,!1,!0):S.centeredSlides&&m.snapIndex<S.slidesPerView?m.slideTo(m.virtual.slides.length+m.snapIndex,0,!1,!0):m.snapIndex===m.snapGrid.length-1&&m.slideTo(m.virtual.slidesBefore,0,!1,!0)),m.allowSlidePrev=x,m.allowSlideNext=y,m.emit("loopFix");return}let k=S.slidesPerView;k==="auto"?k=m.slidesPerViewDynamic():(k=Math.ceil(parseFloat(S.slidesPerView,10)),j&&k%2===0&&(k=k+1));const R=S.slidesPerGroupAuto?k:S.slidesPerGroup;let E=j?Math.max(R,Math.ceil(k/2)):R;E%R!==0&&(E+=R-E%R),E+=S.loopAdditionalSlides,m.loopedSlides=E;const B=m.grid&&S.grid&&S.grid.rows>1;g.length<k+E||m.params.effect==="cards"&&g.length<k+E*2?ku("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):B&&S.grid.fill==="row"&&ku("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const M=[],N=[],P=B?Math.ceil(g.length/S.grid.rows):g.length,U=u&&P-A<k&&!j;let G=U?A:m.activeIndex;typeof l>"u"?l=m.getSlideIndex(g.find(H=>H.classList.contains(S.slideActiveClass))):G=l;const Y=a==="next"||!a,Z=a==="prev"||!a;let ne=0,le=0;const ue=(B?g[l].column:l)+(j&&typeof o>"u"?-k/2+.5:0);if(ue<E){ne=Math.max(E-ue,R);for(let H=0;H<E-ue;H+=1){const D=H-Math.floor(H/P)*P;if(B){const _=P-D-1;for(let Q=g.length-1;Q>=0;Q-=1)g[Q].column===_&&M.push(Q)}else M.push(P-D-1)}}else if(ue+k>P-E){le=Math.max(ue-(P-E*2),R),U&&(le=Math.max(le,k-P+A+1));for(let H=0;H<le;H+=1){const D=H-Math.floor(H/P)*P;B?g.forEach((_,Q)=>{_.column===D&&N.push(Q)}):N.push(D)}}if(m.__preventObserver__=!0,requestAnimationFrame(()=>{m.__preventObserver__=!1}),m.params.effect==="cards"&&g.length<k+E*2&&(N.includes(l)&&N.splice(N.indexOf(l),1),M.includes(l)&&M.splice(M.indexOf(l),1)),Z&&M.forEach(H=>{g[H].swiperLoopMoveDOM=!0,v.prepend(g[H]),g[H].swiperLoopMoveDOM=!1}),Y&&N.forEach(H=>{g[H].swiperLoopMoveDOM=!0,v.append(g[H]),g[H].swiperLoopMoveDOM=!1}),m.recalcSlides(),S.slidesPerView==="auto"?m.updateSlides():B&&(M.length>0&&Z||N.length>0&&Y)&&m.slides.forEach((H,D)=>{m.grid.updateSlide(D,H,m.slides)}),S.watchSlidesProgress&&m.updateSlidesOffset(),i){if(M.length>0&&Z){if(typeof t>"u"){const H=m.slidesGrid[G],_=m.slidesGrid[G+ne]-H;p?m.setTranslate(m.translate-_):(m.slideTo(G+Math.ceil(ne),0,!1,!0),o&&(m.touchEventsData.startTranslate=m.touchEventsData.startTranslate-_,m.touchEventsData.currentTranslate=m.touchEventsData.currentTranslate-_))}else if(o){const H=B?M.length/S.grid.rows:M.length;m.slideTo(m.activeIndex+H,0,!1,!0),m.touchEventsData.currentTranslate=m.translate}}else if(N.length>0&&Y)if(typeof t>"u"){const H=m.slidesGrid[G],_=m.slidesGrid[G-le]-H;p?m.setTranslate(m.translate-_):(m.slideTo(G-le,0,!1,!0),o&&(m.touchEventsData.startTranslate=m.touchEventsData.startTranslate-_,m.touchEventsData.currentTranslate=m.touchEventsData.currentTranslate-_))}else{const H=B?N.length/S.grid.rows:N.length;m.slideTo(m.activeIndex-H,0,!1,!0)}}if(m.allowSlidePrev=x,m.allowSlideNext=y,m.controller&&m.controller.control&&!f){const H={slideRealIndex:t,direction:a,setTranslate:o,activeSlideIndex:l,byController:!0};Array.isArray(m.controller.control)?m.controller.control.forEach(D=>{!D.destroyed&&D.params.loop&&D.loopFix({...H,slideTo:D.params.slidesPerView===S.slidesPerView?i:!1})}):m.controller.control instanceof m.constructor&&m.controller.control.params.loop&&m.controller.control.loopFix({...H,slideTo:m.controller.control.params.slidesPerView===S.slidesPerView?i:!1})}m.emit("loopFix")}function fO(){const e=this,{params:t,slidesEl:i}=e;if(!t.loop||!i||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const a=[];e.slides.forEach(o=>{const l=typeof o.swiperSlideIndex>"u"?o.getAttribute("data-swiper-slide-index")*1:o.swiperSlideIndex;a[l]=o}),e.slides.forEach(o=>{o.removeAttribute("data-swiper-slide-index")}),a.forEach(o=>{i.append(o)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var pO={loopCreate:uO,loopFix:dO,loopDestroy:fO};function hO(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const i=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),i.style.cursor="move",i.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function mO(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var gO={setGrabCursor:hO,unsetGrabCursor:mO};function bO(e,t){t===void 0&&(t=this);function i(a){if(!a||a===Xt()||a===At())return null;a.assignedSlot&&(a=a.assignedSlot);const o=a.closest(e);return!o&&!a.getRootNode?null:o||i(a.getRootNode().host)}return i(t)}function tv(e,t,i){const a=At(),{params:o}=e,l=o.edgeSwipeDetection,u=o.edgeSwipeThreshold;return l&&(i<=u||i>=a.innerWidth-u)?l==="prevent"?(t.preventDefault(),!0):!1:!0}function xO(e){const t=this,i=Xt();let a=e;a.originalEvent&&(a=a.originalEvent);const o=t.touchEventsData;if(a.type==="pointerdown"){if(o.pointerId!==null&&o.pointerId!==a.pointerId)return;o.pointerId=a.pointerId}else a.type==="touchstart"&&a.targetTouches.length===1&&(o.touchId=a.targetTouches[0].identifier);if(a.type==="touchstart"){tv(t,a,a.targetTouches[0].pageX);return}const{params:l,touches:u,enabled:f}=t;if(!f||!l.simulateTouch&&a.pointerType==="mouse"||t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let p=a.target;if(l.touchEventsTarget==="wrapper"&&!jL(p,t.wrapperEl)||"which"in a&&a.which===3||"button"in a&&a.button>0||o.isTouched&&o.isMoved)return;const m=!!l.noSwipingClass&&l.noSwipingClass!=="",g=a.composedPath?a.composedPath():a.path;m&&a.target&&a.target.shadowRoot&&g&&(p=g[0]);const x=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,y=!!(a.target&&a.target.shadowRoot);if(l.noSwiping&&(y?bO(x,p):p.closest(x))){t.allowClick=!0;return}if(l.swipeHandler&&!p.closest(l.swipeHandler))return;u.currentX=a.pageX,u.currentY=a.pageY;const v=u.currentX,S=u.currentY;if(!tv(t,a,v))return;Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),u.startX=v,u.startY=S,o.touchStartTime=ju(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(o.allowThresholdMove=!1);let j=!0;p.matches(o.focusableElements)&&(j=!1,p.nodeName==="SELECT"&&(o.isTouched=!1)),i.activeElement&&i.activeElement.matches(o.focusableElements)&&i.activeElement!==p&&(a.pointerType==="mouse"||a.pointerType!=="mouse"&&!p.matches(o.focusableElements))&&i.activeElement.blur();const A=j&&t.allowTouchMove&&l.touchStartPreventDefault;(l.touchStartForcePreventDefault||A)&&!p.isContentEditable&&a.preventDefault(),l.freeMode&&l.freeMode.enabled&&t.freeMode&&t.animating&&!l.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",a)}function yO(e){const t=Xt(),i=this,a=i.touchEventsData,{params:o,touches:l,rtlTranslate:u,enabled:f}=i;if(!f||!o.simulateTouch&&e.pointerType==="mouse")return;let p=e;if(p.originalEvent&&(p=p.originalEvent),p.type==="pointermove"&&(a.touchId!==null||p.pointerId!==a.pointerId))return;let m;if(p.type==="touchmove"){if(m=[...p.changedTouches].find(M=>M.identifier===a.touchId),!m||m.identifier!==a.touchId)return}else m=p;if(!a.isTouched){a.startMoving&&a.isScrolling&&i.emit("touchMoveOpposite",p);return}const g=m.pageX,x=m.pageY;if(p.preventedByNestedSwiper){l.startX=g,l.startY=x;return}if(!i.allowTouchMove){p.target.matches(a.focusableElements)||(i.allowClick=!1),a.isTouched&&(Object.assign(l,{startX:g,startY:x,currentX:g,currentY:x}),a.touchStartTime=ju());return}if(o.touchReleaseOnEdges&&!o.loop)if(i.isVertical()){if(x<l.startY&&i.translate<=i.maxTranslate()||x>l.startY&&i.translate>=i.minTranslate()){a.isTouched=!1,a.isMoved=!1;return}}else{if(u&&(g>l.startX&&-i.translate<=i.maxTranslate()||g<l.startX&&-i.translate>=i.minTranslate()))return;if(!u&&(g<l.startX&&i.translate<=i.maxTranslate()||g>l.startX&&i.translate>=i.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(a.focusableElements)&&t.activeElement!==p.target&&p.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&p.target===t.activeElement&&p.target.matches(a.focusableElements)){a.isMoved=!0,i.allowClick=!1;return}a.allowTouchCallbacks&&i.emit("touchMove",p),l.previousX=l.currentX,l.previousY=l.currentY,l.currentX=g,l.currentY=x;const y=l.currentX-l.startX,v=l.currentY-l.startY;if(i.params.threshold&&Math.sqrt(y**2+v**2)<i.params.threshold)return;if(typeof a.isScrolling>"u"){let M;i.isHorizontal()&&l.currentY===l.startY||i.isVertical()&&l.currentX===l.startX?a.isScrolling=!1:y*y+v*v>=25&&(M=Math.atan2(Math.abs(v),Math.abs(y))*180/Math.PI,a.isScrolling=i.isHorizontal()?M>o.touchAngle:90-M>o.touchAngle)}if(a.isScrolling&&i.emit("touchMoveOpposite",p),typeof a.startMoving>"u"&&(l.currentX!==l.startX||l.currentY!==l.startY)&&(a.startMoving=!0),a.isScrolling||p.type==="touchmove"&&a.preventTouchMoveFromPointerMove){a.isTouched=!1;return}if(!a.startMoving)return;i.allowClick=!1,!o.cssMode&&p.cancelable&&p.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&p.stopPropagation();let S=i.isHorizontal()?y:v,j=i.isHorizontal()?l.currentX-l.previousX:l.currentY-l.previousY;o.oneWayMovement&&(S=Math.abs(S)*(u?1:-1),j=Math.abs(j)*(u?1:-1)),l.diff=S,S*=o.touchRatio,u&&(S=-S,j=-j);const A=i.touchesDirection;i.swipeDirection=S>0?"prev":"next",i.touchesDirection=j>0?"prev":"next";const k=i.params.loop&&!o.cssMode,R=i.touchesDirection==="next"&&i.allowSlideNext||i.touchesDirection==="prev"&&i.allowSlidePrev;if(!a.isMoved){if(k&&R&&i.loopFix({direction:i.swipeDirection}),a.startTranslate=i.getTranslate(),i.setTransition(0),i.animating){const M=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});i.wrapperEl.dispatchEvent(M)}a.allowMomentumBounce=!1,o.grabCursor&&(i.allowSlideNext===!0||i.allowSlidePrev===!0)&&i.setGrabCursor(!0),i.emit("sliderFirstMove",p)}if(new Date().getTime(),o._loopSwapReset!==!1&&a.isMoved&&a.allowThresholdMove&&A!==i.touchesDirection&&k&&R&&Math.abs(S)>=1){Object.assign(l,{startX:g,startY:x,currentX:g,currentY:x,startTranslate:a.currentTranslate}),a.loopSwapReset=!0,a.startTranslate=a.currentTranslate;return}i.emit("sliderMove",p),a.isMoved=!0,a.currentTranslate=S+a.startTranslate;let E=!0,B=o.resistanceRatio;if(o.touchReleaseOnEdges&&(B=0),S>0?(k&&R&&a.allowThresholdMove&&a.currentTranslate>(o.centeredSlides?i.minTranslate()-i.slidesSizesGrid[i.activeIndex+1]-(o.slidesPerView!=="auto"&&i.slides.length-o.slidesPerView>=2?i.slidesSizesGrid[i.activeIndex+1]+i.params.spaceBetween:0)-i.params.spaceBetween:i.minTranslate())&&i.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),a.currentTranslate>i.minTranslate()&&(E=!1,o.resistance&&(a.currentTranslate=i.minTranslate()-1+(-i.minTranslate()+a.startTranslate+S)**B))):S<0&&(k&&R&&a.allowThresholdMove&&a.currentTranslate<(o.centeredSlides?i.maxTranslate()+i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween+(o.slidesPerView!=="auto"&&i.slides.length-o.slidesPerView>=2?i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween:0):i.maxTranslate())&&i.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:i.slides.length-(o.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),a.currentTranslate<i.maxTranslate()&&(E=!1,o.resistance&&(a.currentTranslate=i.maxTranslate()+1-(i.maxTranslate()-a.startTranslate-S)**B))),E&&(p.preventedByNestedSwiper=!0),!i.allowSlideNext&&i.swipeDirection==="next"&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!i.allowSlidePrev&&i.swipeDirection==="prev"&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),!i.allowSlidePrev&&!i.allowSlideNext&&(a.currentTranslate=a.startTranslate),o.threshold>0)if(Math.abs(S)>o.threshold||a.allowThresholdMove){if(!a.allowThresholdMove){a.allowThresholdMove=!0,l.startX=l.currentX,l.startY=l.currentY,a.currentTranslate=a.startTranslate,l.diff=i.isHorizontal()?l.currentX-l.startX:l.currentY-l.startY;return}}else{a.currentTranslate=a.startTranslate;return}!o.followFinger||o.cssMode||((o.freeMode&&o.freeMode.enabled&&i.freeMode||o.watchSlidesProgress)&&(i.updateActiveIndex(),i.updateSlidesClasses()),o.freeMode&&o.freeMode.enabled&&i.freeMode&&i.freeMode.onTouchMove(),i.updateProgress(a.currentTranslate),i.setTranslate(a.currentTranslate))}function vO(e){const t=this,i=t.touchEventsData;let a=e;a.originalEvent&&(a=a.originalEvent);let o;if(a.type==="touchend"||a.type==="touchcancel"){if(o=[...a.changedTouches].find(M=>M.identifier===i.touchId),!o||o.identifier!==i.touchId)return}else{if(i.touchId!==null||a.pointerId!==i.pointerId)return;o=a}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(a.type)&&!(["pointercancel","contextmenu"].includes(a.type)&&(t.browser.isSafari||t.browser.isWebView)))return;i.pointerId=null,i.touchId=null;const{params:u,touches:f,rtlTranslate:p,slidesGrid:m,enabled:g}=t;if(!g||!u.simulateTouch&&a.pointerType==="mouse")return;if(i.allowTouchCallbacks&&t.emit("touchEnd",a),i.allowTouchCallbacks=!1,!i.isTouched){i.isMoved&&u.grabCursor&&t.setGrabCursor(!1),i.isMoved=!1,i.startMoving=!1;return}u.grabCursor&&i.isMoved&&i.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const x=ju(),y=x-i.touchStartTime;if(t.allowClick){const M=a.path||a.composedPath&&a.composedPath();t.updateClickedSlide(M&&M[0]||a.target,M),t.emit("tap click",a),y<300&&x-i.lastClickTime<300&&t.emit("doubleTap doubleClick",a)}if(i.lastClickTime=ju(),Bw(()=>{t.destroyed||(t.allowClick=!0)}),!i.isTouched||!i.isMoved||!t.swipeDirection||f.diff===0&&!i.loopSwapReset||i.currentTranslate===i.startTranslate&&!i.loopSwapReset){i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;return}i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;let v;if(u.followFinger?v=p?t.translate:-t.translate:v=-i.currentTranslate,u.cssMode)return;if(u.freeMode&&u.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:v});return}const S=v>=-t.maxTranslate()&&!t.params.loop;let j=0,A=t.slidesSizesGrid[0];for(let M=0;M<m.length;M+=M<u.slidesPerGroupSkip?1:u.slidesPerGroup){const N=M<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;typeof m[M+N]<"u"?(S||v>=m[M]&&v<m[M+N])&&(j=M,A=m[M+N]-m[M]):(S||v>=m[M])&&(j=M,A=m[m.length-1]-m[m.length-2])}let k=null,R=null;u.rewind&&(t.isBeginning?R=u.virtual&&u.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(k=0));const E=(v-m[j])/A,B=j<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;if(y>u.longSwipesMs){if(!u.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(E>=u.longSwipesRatio?t.slideTo(u.rewind&&t.isEnd?k:j+B):t.slideTo(j)),t.swipeDirection==="prev"&&(E>1-u.longSwipesRatio?t.slideTo(j+B):R!==null&&E<0&&Math.abs(E)>u.longSwipesRatio?t.slideTo(R):t.slideTo(j))}else{if(!u.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(a.target===t.navigation.nextEl||a.target===t.navigation.prevEl)?a.target===t.navigation.nextEl?t.slideTo(j+B):t.slideTo(j):(t.swipeDirection==="next"&&t.slideTo(k!==null?k:j+B),t.swipeDirection==="prev"&&t.slideTo(R!==null?R:j))}}function nv(){const e=this,{params:t,el:i}=e;if(i&&i.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:o,snapGrid:l}=e,u=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const f=u&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!f?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!u?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=o,e.allowSlideNext=a,e.params.watchOverflow&&l!==e.snapGrid&&e.checkOverflow()}function wO(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function SO(){const e=this,{wrapperEl:t,rtlTranslate:i,enabled:a}=e;if(!a)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let o;const l=e.maxTranslate()-e.minTranslate();l===0?o=0:o=(e.translate-e.minTranslate())/l,o!==e.progress&&e.updateProgress(i?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function TO(e){const t=this;eu(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function jO(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Fw=(e,t)=>{const i=Xt(),{params:a,el:o,wrapperEl:l,device:u}=e,f=!!a.nested,p=t==="on"?"addEventListener":"removeEventListener",m=t;!o||typeof o=="string"||(i[p]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:f}),o[p]("touchstart",e.onTouchStart,{passive:!1}),o[p]("pointerdown",e.onTouchStart,{passive:!1}),i[p]("touchmove",e.onTouchMove,{passive:!1,capture:f}),i[p]("pointermove",e.onTouchMove,{passive:!1,capture:f}),i[p]("touchend",e.onTouchEnd,{passive:!0}),i[p]("pointerup",e.onTouchEnd,{passive:!0}),i[p]("pointercancel",e.onTouchEnd,{passive:!0}),i[p]("touchcancel",e.onTouchEnd,{passive:!0}),i[p]("pointerout",e.onTouchEnd,{passive:!0}),i[p]("pointerleave",e.onTouchEnd,{passive:!0}),i[p]("contextmenu",e.onTouchEnd,{passive:!0}),(a.preventClicks||a.preventClicksPropagation)&&o[p]("click",e.onClick,!0),a.cssMode&&l[p]("scroll",e.onScroll),a.updateOnWindowResize?e[m](u.ios||u.android?"resize orientationchange observerUpdate":"resize observerUpdate",nv,!0):e[m]("observerUpdate",nv,!0),o[p]("load",e.onLoad,{capture:!0}))};function kO(){const e=this,{params:t}=e;e.onTouchStart=xO.bind(e),e.onTouchMove=yO.bind(e),e.onTouchEnd=vO.bind(e),e.onDocumentTouchStart=jO.bind(e),t.cssMode&&(e.onScroll=SO.bind(e)),e.onClick=wO.bind(e),e.onLoad=TO.bind(e),Fw(e,"on")}function CO(){Fw(this,"off")}var EO={attachEvents:kO,detachEvents:CO};const iv=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function AO(){const e=this,{realIndex:t,initialized:i,params:a,el:o}=e,l=a.breakpoints;if(!l||l&&Object.keys(l).length===0)return;const u=Xt(),f=a.breakpointsBase==="window"||!a.breakpointsBase?a.breakpointsBase:"container",p=["window","container"].includes(a.breakpointsBase)||!a.breakpointsBase?e.el:u.querySelector(a.breakpointsBase),m=e.getBreakpoint(l,f,p);if(!m||e.currentBreakpoint===m)return;const x=(m in l?l[m]:void 0)||e.originalParams,y=iv(e,a),v=iv(e,x),S=e.params.grabCursor,j=x.grabCursor,A=a.enabled;y&&!v?(o.classList.remove(`${a.containerModifierClass}grid`,`${a.containerModifierClass}grid-column`),e.emitContainerClasses()):!y&&v&&(o.classList.add(`${a.containerModifierClass}grid`),(x.grid.fill&&x.grid.fill==="column"||!x.grid.fill&&a.grid.fill==="column")&&o.classList.add(`${a.containerModifierClass}grid-column`),e.emitContainerClasses()),S&&!j?e.unsetGrabCursor():!S&&j&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(N=>{if(typeof x[N]>"u")return;const P=a[N]&&a[N].enabled,U=x[N]&&x[N].enabled;P&&!U&&e[N].disable(),!P&&U&&e[N].enable()});const k=x.direction&&x.direction!==a.direction,R=a.loop&&(x.slidesPerView!==a.slidesPerView||k),E=a.loop;k&&i&&e.changeDirection(),ln(e.params,x);const B=e.params.enabled,M=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),A&&!B?e.disable():!A&&B&&e.enable(),e.currentBreakpoint=m,e.emit("_beforeBreakpoint",x),i&&(R?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!E&&M?(e.loopCreate(t),e.updateSlides()):E&&!M&&e.loopDestroy()),e.emit("breakpoint",x)}function MO(e,t,i){if(t===void 0&&(t="window"),!e||t==="container"&&!i)return;let a=!1;const o=At(),l=t==="window"?o.innerHeight:i.clientHeight,u=Object.keys(e).map(f=>{if(typeof f=="string"&&f.indexOf("@")===0){const p=parseFloat(f.substr(1));return{value:l*p,point:f}}return{value:f,point:f}});u.sort((f,p)=>parseInt(f.value,10)-parseInt(p.value,10));for(let f=0;f<u.length;f+=1){const{point:p,value:m}=u[f];t==="window"?o.matchMedia(`(min-width: ${m}px)`).matches&&(a=p):m<=i.clientWidth&&(a=p)}return a||"max"}var zO={setBreakpoint:AO,getBreakpoint:MO};function RO(e,t){const i=[];return e.forEach(a=>{typeof a=="object"?Object.keys(a).forEach(o=>{a[o]&&i.push(t+o)}):typeof a=="string"&&i.push(t+a)}),i}function LO(){const e=this,{classNames:t,params:i,rtl:a,el:o,device:l}=e,u=RO(["initialized",i.direction,{"free-mode":e.params.freeMode&&i.freeMode.enabled},{autoheight:i.autoHeight},{rtl:a},{grid:i.grid&&i.grid.rows>1},{"grid-column":i.grid&&i.grid.rows>1&&i.grid.fill==="column"},{android:l.android},{ios:l.ios},{"css-mode":i.cssMode},{centered:i.cssMode&&i.centeredSlides},{"watch-progress":i.watchSlidesProgress}],i.containerModifierClass);t.push(...u),o.classList.add(...t),e.emitContainerClasses()}function OO(){const e=this,{el:t,classNames:i}=e;!t||typeof t=="string"||(t.classList.remove(...i),e.emitContainerClasses())}var DO={addClasses:LO,removeClasses:OO};function PO(){const e=this,{isLocked:t,params:i}=e,{slidesOffsetBefore:a}=i;if(a){const o=e.slides.length-1,l=e.slidesGrid[o]+e.slidesSizesGrid[o]+a*2;e.isLocked=e.size>l}else e.isLocked=e.snapGrid.length===1;i.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),i.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var NO={checkOverflow:PO},um={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function VO(e,t){return function(a){a===void 0&&(a={});const o=Object.keys(a)[0],l=a[o];if(typeof l!="object"||l===null){ln(t,a);return}if(e[o]===!0&&(e[o]={enabled:!0}),o==="navigation"&&e[o]&&e[o].enabled&&!e[o].prevEl&&!e[o].nextEl&&(e[o].auto=!0),["pagination","scrollbar"].indexOf(o)>=0&&e[o]&&e[o].enabled&&!e[o].el&&(e[o].auto=!0),!(o in e&&"enabled"in l)){ln(t,a);return}typeof e[o]=="object"&&!("enabled"in e[o])&&(e[o].enabled=!0),e[o]||(e[o]={enabled:!1}),ln(t,a)}}const Wp={eventsEmitter:DL,update:FL,translate:WL,transition:tO,slide:cO,loop:pO,grabCursor:gO,events:EO,breakpoints:zO,checkOverflow:NO,classes:DO},Zp={};let mg=class wi{constructor(){let t,i;for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];o.length===1&&o[0].constructor&&Object.prototype.toString.call(o[0]).slice(8,-1)==="Object"?i=o[0]:[t,i]=o,i||(i={}),i=ln({},i),t&&!i.el&&(i.el=t);const u=Xt();if(i.el&&typeof i.el=="string"&&u.querySelectorAll(i.el).length>1){const g=[];return u.querySelectorAll(i.el).forEach(x=>{const y=ln({},i,{el:x});g.push(new wi(y))}),g}const f=this;f.__swiper__=!0,f.support=Hw(),f.device=Gw({userAgent:i.userAgent}),f.browser=Uw(),f.eventsListeners={},f.eventsAnyListeners=[],f.modules=[...f.__modules__],i.modules&&Array.isArray(i.modules)&&f.modules.push(...i.modules);const p={};f.modules.forEach(g=>{g({params:i,swiper:f,extendParams:VO(i,p),on:f.on.bind(f),once:f.once.bind(f),off:f.off.bind(f),emit:f.emit.bind(f)})});const m=ln({},um,p);return f.params=ln({},m,Zp,i),f.originalParams=ln({},f.params),f.passedParams=ln({},i),f.params&&f.params.on&&Object.keys(f.params.on).forEach(g=>{f.on(g,f.params.on[g])}),f.params&&f.params.onAny&&f.onAny(f.params.onAny),Object.assign(f,{enabled:f.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return f.params.direction==="horizontal"},isVertical(){return f.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:f.params.allowSlideNext,allowSlidePrev:f.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:f.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:f.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),f.emit("_swiper"),f.params.init&&f.init(),f}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:i,params:a}=this,o=Ti(i,`.${a.slideClass}, swiper-slide`),l=sm(o[0]);return sm(t)-l}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(i=>i.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:i,params:a}=t;t.slides=Ti(i,`.${a.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,i){const a=this;t=Math.min(Math.max(t,0),1);const o=a.minTranslate(),u=(a.maxTranslate()-o)*t+o;a.translateTo(u,typeof i>"u"?0:i),a.updateActiveIndex(),a.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const i=t.el.className.split(" ").filter(a=>a.indexOf("swiper")===0||a.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",i.join(" "))}getSlideClasses(t){const i=this;return i.destroyed?"":t.className.split(" ").filter(a=>a.indexOf("swiper-slide")===0||a.indexOf(i.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const i=[];t.slides.forEach(a=>{const o=t.getSlideClasses(a);i.push({slideEl:a,classNames:o}),t.emit("_slideClass",a,o)}),t.emit("_slideClasses",i)}slidesPerViewDynamic(t,i){t===void 0&&(t="current"),i===void 0&&(i=!1);const a=this,{params:o,slides:l,slidesGrid:u,slidesSizesGrid:f,size:p,activeIndex:m}=a;let g=1;if(typeof o.slidesPerView=="number")return o.slidesPerView;if(o.centeredSlides){let x=l[m]?Math.ceil(l[m].swiperSlideSize):0,y;for(let v=m+1;v<l.length;v+=1)l[v]&&!y&&(x+=Math.ceil(l[v].swiperSlideSize),g+=1,x>p&&(y=!0));for(let v=m-1;v>=0;v-=1)l[v]&&!y&&(x+=l[v].swiperSlideSize,g+=1,x>p&&(y=!0))}else if(t==="current")for(let x=m+1;x<l.length;x+=1)(i?u[x]+f[x]-u[m]<p:u[x]-u[m]<p)&&(g+=1);else for(let x=m-1;x>=0;x-=1)u[m]-u[x]<p&&(g+=1);return g}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:i,params:a}=t;a.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(u=>{u.complete&&eu(t,u)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function o(){const u=t.rtlTranslate?t.translate*-1:t.translate,f=Math.min(Math.max(u,t.maxTranslate()),t.minTranslate());t.setTranslate(f),t.updateActiveIndex(),t.updateSlidesClasses()}let l;if(a.freeMode&&a.freeMode.enabled&&!a.cssMode)o(),a.autoHeight&&t.updateAutoHeight();else{if((a.slidesPerView==="auto"||a.slidesPerView>1)&&t.isEnd&&!a.centeredSlides){const u=t.virtual&&a.virtual.enabled?t.virtual.slides:t.slides;l=t.slideTo(u.length-1,0,!1,!0)}else l=t.slideTo(t.activeIndex,0,!1,!0);l||o()}a.watchOverflow&&i!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,i){i===void 0&&(i=!0);const a=this,o=a.params.direction;return t||(t=o==="horizontal"?"vertical":"horizontal"),t===o||t!=="horizontal"&&t!=="vertical"||(a.el.classList.remove(`${a.params.containerModifierClass}${o}`),a.el.classList.add(`${a.params.containerModifierClass}${t}`),a.emitContainerClasses(),a.params.direction=t,a.slides.forEach(l=>{t==="vertical"?l.style.width="":l.style.height=""}),a.emit("changeDirection"),i&&a.update()),a}changeLanguageDirection(t){const i=this;i.rtl&&t==="rtl"||!i.rtl&&t==="ltr"||(i.rtl=t==="rtl",i.rtlTranslate=i.params.direction==="horizontal"&&i.rtl,i.rtl?(i.el.classList.add(`${i.params.containerModifierClass}rtl`),i.el.dir="rtl"):(i.el.classList.remove(`${i.params.containerModifierClass}rtl`),i.el.dir="ltr"),i.update())}mount(t){const i=this;if(i.mounted)return!0;let a=t||i.params.el;if(typeof a=="string"&&(a=document.querySelector(a)),!a)return!1;a.swiper=i,a.parentNode&&a.parentNode.host&&a.parentNode.host.nodeName===i.params.swiperElementNodeName.toUpperCase()&&(i.isElement=!0);const o=()=>`.${(i.params.wrapperClass||"").trim().split(" ").join(".")}`;let u=a&&a.shadowRoot&&a.shadowRoot.querySelector?a.shadowRoot.querySelector(o()):Ti(a,o())[0];return!u&&i.params.createElements&&(u=Cu("div",i.params.wrapperClass),a.append(u),Ti(a,`.${i.params.slideClass}`).forEach(f=>{u.append(f)})),Object.assign(i,{el:a,wrapperEl:u,slidesEl:i.isElement&&!a.parentNode.host.slideSlots?a.parentNode.host:u,hostEl:i.isElement?a.parentNode.host:a,mounted:!0,rtl:a.dir.toLowerCase()==="rtl"||ta(a,"direction")==="rtl",rtlTranslate:i.params.direction==="horizontal"&&(a.dir.toLowerCase()==="rtl"||ta(a,"direction")==="rtl"),wrongRTL:ta(u,"display")==="-webkit-box"}),!0}init(t){const i=this;if(i.initialized||i.mount(t)===!1)return i;i.emit("beforeInit"),i.params.breakpoints&&i.setBreakpoint(),i.addClasses(),i.updateSize(),i.updateSlides(),i.params.watchOverflow&&i.checkOverflow(),i.params.grabCursor&&i.enabled&&i.setGrabCursor(),i.params.loop&&i.virtual&&i.params.virtual.enabled?i.slideTo(i.params.initialSlide+i.virtual.slidesBefore,0,i.params.runCallbacksOnInit,!1,!0):i.slideTo(i.params.initialSlide,0,i.params.runCallbacksOnInit,!1,!0),i.params.loop&&i.loopCreate(void 0,!0),i.attachEvents();const o=[...i.el.querySelectorAll('[loading="lazy"]')];return i.isElement&&o.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),o.forEach(l=>{l.complete?eu(i,l):l.addEventListener("load",u=>{eu(i,u.target)})}),cm(i),i.initialized=!0,cm(i),i.emit("init"),i.emit("afterInit"),i}destroy(t,i){t===void 0&&(t=!0),i===void 0&&(i=!0);const a=this,{params:o,el:l,wrapperEl:u,slides:f}=a;return typeof a.params>"u"||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),o.loop&&a.loopDestroy(),i&&(a.removeClasses(),l&&typeof l!="string"&&l.removeAttribute("style"),u&&u.removeAttribute("style"),f&&f.length&&f.forEach(p=>{p.classList.remove(o.slideVisibleClass,o.slideFullyVisibleClass,o.slideActiveClass,o.slideNextClass,o.slidePrevClass),p.removeAttribute("style"),p.removeAttribute("data-swiper-slide-index")})),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(p=>{a.off(p)}),t!==!1&&(a.el&&typeof a.el!="string"&&(a.el.swiper=null),yL(a)),a.destroyed=!0),null}static extendDefaults(t){ln(Zp,t)}static get extendedDefaults(){return Zp}static get defaults(){return um}static installModule(t){wi.prototype.__modules__||(wi.prototype.__modules__=[]);const i=wi.prototype.__modules__;typeof t=="function"&&i.indexOf(t)<0&&i.push(t)}static use(t){return Array.isArray(t)?(t.forEach(i=>wi.installModule(i)),wi):(wi.installModule(t),wi)}};Object.keys(Wp).forEach(e=>{Object.keys(Wp[e]).forEach(t=>{mg.prototype[t]=Wp[e][t]})});mg.use([LL,OL]);const qw=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function $a(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Ir(e,t){const i=["__proto__","constructor","prototype"];Object.keys(t).filter(a=>i.indexOf(a)<0).forEach(a=>{typeof e[a]>"u"?e[a]=t[a]:$a(t[a])&&$a(e[a])&&Object.keys(t[a]).length>0?t[a].__swiper__?e[a]=t[a]:Ir(e[a],t[a]):e[a]=t[a]})}function Kw(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Yw(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function Xw(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function Qw(e){e===void 0&&(e="");const t=e.split(" ").map(a=>a.trim()).filter(a=>!!a),i=[];return t.forEach(a=>{i.indexOf(a)<0&&i.push(a)}),i.join(" ")}function BO(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function _O(e){let{swiper:t,slides:i,passedParams:a,changedParams:o,nextEl:l,prevEl:u,scrollbarEl:f,paginationEl:p}=e;const m=o.filter(G=>G!=="children"&&G!=="direction"&&G!=="wrapperClass"),{params:g,pagination:x,navigation:y,scrollbar:v,virtual:S,thumbs:j}=t;let A,k,R,E,B,M,N,P;o.includes("thumbs")&&a.thumbs&&a.thumbs.swiper&&!a.thumbs.swiper.destroyed&&g.thumbs&&(!g.thumbs.swiper||g.thumbs.swiper.destroyed)&&(A=!0),o.includes("controller")&&a.controller&&a.controller.control&&g.controller&&!g.controller.control&&(k=!0),o.includes("pagination")&&a.pagination&&(a.pagination.el||p)&&(g.pagination||g.pagination===!1)&&x&&!x.el&&(R=!0),o.includes("scrollbar")&&a.scrollbar&&(a.scrollbar.el||f)&&(g.scrollbar||g.scrollbar===!1)&&v&&!v.el&&(E=!0),o.includes("navigation")&&a.navigation&&(a.navigation.prevEl||u)&&(a.navigation.nextEl||l)&&(g.navigation||g.navigation===!1)&&y&&!y.prevEl&&!y.nextEl&&(B=!0);const U=G=>{t[G]&&(t[G].destroy(),G==="navigation"?(t.isElement&&(t[G].prevEl.remove(),t[G].nextEl.remove()),g[G].prevEl=void 0,g[G].nextEl=void 0,t[G].prevEl=void 0,t[G].nextEl=void 0):(t.isElement&&t[G].el.remove(),g[G].el=void 0,t[G].el=void 0))};o.includes("loop")&&t.isElement&&(g.loop&&!a.loop?M=!0:!g.loop&&a.loop?N=!0:P=!0),m.forEach(G=>{if($a(g[G])&&$a(a[G]))Object.assign(g[G],a[G]),(G==="navigation"||G==="pagination"||G==="scrollbar")&&"enabled"in a[G]&&!a[G].enabled&&U(G);else{const Y=a[G];(Y===!0||Y===!1)&&(G==="navigation"||G==="pagination"||G==="scrollbar")?Y===!1&&U(G):g[G]=a[G]}}),m.includes("controller")&&!k&&t.controller&&t.controller.control&&g.controller&&g.controller.control&&(t.controller.control=g.controller.control),o.includes("children")&&i&&S&&g.virtual.enabled?(S.slides=i,S.update(!0)):o.includes("virtual")&&S&&g.virtual.enabled&&(i&&(S.slides=i),S.update(!0)),o.includes("children")&&i&&g.loop&&(P=!0),A&&j.init()&&j.update(!0),k&&(t.controller.control=g.controller.control),R&&(t.isElement&&(!p||typeof p=="string")&&(p=document.createElement("div"),p.classList.add("swiper-pagination"),p.part.add("pagination"),t.el.appendChild(p)),p&&(g.pagination.el=p),x.init(),x.render(),x.update()),E&&(t.isElement&&(!f||typeof f=="string")&&(f=document.createElement("div"),f.classList.add("swiper-scrollbar"),f.part.add("scrollbar"),t.el.appendChild(f)),f&&(g.scrollbar.el=f),v.init(),v.updateSize(),v.setTranslate()),B&&(t.isElement&&((!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-button-next"),lm(l,t.hostEl.constructor.nextButtonSvg),l.part.add("button-next"),t.el.appendChild(l)),(!u||typeof u=="string")&&(u=document.createElement("div"),u.classList.add("swiper-button-prev"),lm(u,t.hostEl.constructor.prevButtonSvg),u.part.add("button-prev"),t.el.appendChild(u))),l&&(g.navigation.nextEl=l),u&&(g.navigation.prevEl=u),y.init(),y.update()),o.includes("allowSlideNext")&&(t.allowSlideNext=a.allowSlideNext),o.includes("allowSlidePrev")&&(t.allowSlidePrev=a.allowSlidePrev),o.includes("direction")&&t.changeDirection(a.direction,!1),(M||P)&&t.loopDestroy(),(N||P)&&t.loopCreate(),t.update()}function $O(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const i={on:{}},a={},o={};Ir(i,um),i._emitClasses=!0,i.init=!1;const l={},u=qw.map(p=>p.replace(/_/,"")),f=Object.assign({},e);return Object.keys(f).forEach(p=>{typeof e[p]>"u"||(u.indexOf(p)>=0?$a(e[p])?(i[p]={},o[p]={},Ir(i[p],e[p]),Ir(o[p],e[p])):(i[p]=e[p],o[p]=e[p]):p.search(/on[A-Z]/)===0&&typeof e[p]=="function"?t?a[`${p[2].toLowerCase()}${p.substr(3)}`]=e[p]:i.on[`${p[2].toLowerCase()}${p.substr(3)}`]=e[p]:l[p]=e[p])}),["navigation","pagination","scrollbar"].forEach(p=>{i[p]===!0&&(i[p]={}),i[p]===!1&&delete i[p]}),{params:i,passedParams:o,rest:l,events:a}}function HO(e,t){let{el:i,nextEl:a,prevEl:o,paginationEl:l,scrollbarEl:u,swiper:f}=e;Kw(t)&&a&&o&&(f.params.navigation.nextEl=a,f.originalParams.navigation.nextEl=a,f.params.navigation.prevEl=o,f.originalParams.navigation.prevEl=o),Yw(t)&&l&&(f.params.pagination.el=l,f.originalParams.pagination.el=l),Xw(t)&&u&&(f.params.scrollbar.el=u,f.originalParams.scrollbar.el=u),f.init(i)}function GO(e,t,i,a,o){const l=[];if(!t)return l;const u=p=>{l.indexOf(p)<0&&l.push(p)};if(i&&a){const p=a.map(o),m=i.map(o);p.join("")!==m.join("")&&u("children"),a.length!==i.length&&u("children")}return qw.filter(p=>p[0]==="_").map(p=>p.replace(/_/,"")).forEach(p=>{if(p in e&&p in t)if($a(e[p])&&$a(t[p])){const m=Object.keys(e[p]),g=Object.keys(t[p]);m.length!==g.length?u(p):(m.forEach(x=>{e[p][x]!==t[p][x]&&u(p)}),g.forEach(x=>{e[p][x]!==t[p][x]&&u(p)}))}else e[p]!==t[p]&&u(p)}),l}const UO=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Eu(){return Eu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},Eu.apply(this,arguments)}function Ww(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function Zw(e){const t=[];return Ee.Children.toArray(e).forEach(i=>{Ww(i)?t.push(i):i.props&&i.props.children&&Zw(i.props.children).forEach(a=>t.push(a))}),t}function IO(e){const t=[],i={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Ee.Children.toArray(e).forEach(a=>{if(Ww(a))t.push(a);else if(a.props&&a.props.slot&&i[a.props.slot])i[a.props.slot].push(a);else if(a.props&&a.props.children){const o=Zw(a.props.children);o.length>0?o.forEach(l=>t.push(l)):i["container-end"].push(a)}else i["container-end"].push(a)}),{slides:t,slots:i}}function FO(e,t,i){if(!i)return null;const a=g=>{let x=g;return g<0?x=t.length+g:x>=t.length&&(x=x-t.length),x},o=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${i.offset}px`}:{top:`${i.offset}px`},{from:l,to:u}=i,f=e.params.loop?-t.length:0,p=e.params.loop?t.length*2:t.length,m=[];for(let g=f;g<p;g+=1)g>=l&&g<=u&&m.push(t[a(g)]);return m.map((g,x)=>Ee.cloneElement(g,{swiper:e,style:o,key:g.props.virtualIndex||g.key||`slide-${x}`}))}function Po(e,t){return typeof window>"u"?C.useEffect(e,t):C.useLayoutEffect(e,t)}const av=C.createContext(null),qO=C.createContext(null),Jw=C.forwardRef(function(e,t){let{className:i,tag:a="div",wrapperTag:o="div",children:l,onSwiper:u,...f}=e===void 0?{}:e,p=!1;const[m,g]=C.useState("swiper"),[x,y]=C.useState(null),[v,S]=C.useState(!1),j=C.useRef(!1),A=C.useRef(null),k=C.useRef(null),R=C.useRef(null),E=C.useRef(null),B=C.useRef(null),M=C.useRef(null),N=C.useRef(null),P=C.useRef(null),{params:U,passedParams:G,rest:Y,events:Z}=$O(f),{slides:ne,slots:le}=IO(l),ce=()=>{S(!v)};Object.assign(U.on,{_containerClasses(Q,z){g(z)}});const ue=()=>{Object.assign(U.on,Z),p=!0;const Q={...U};if(delete Q.wrapperClass,k.current=new mg(Q),k.current.virtual&&k.current.params.virtual.enabled){k.current.virtual.slides=ne;const z={cache:!1,slides:ne,renderExternal:y,renderExternalUpdate:!1};Ir(k.current.params.virtual,z),Ir(k.current.originalParams.virtual,z)}};A.current||ue(),k.current&&k.current.on("_beforeBreakpoint",ce);const H=()=>{p||!Z||!k.current||Object.keys(Z).forEach(Q=>{k.current.on(Q,Z[Q])})},D=()=>{!Z||!k.current||Object.keys(Z).forEach(Q=>{k.current.off(Q,Z[Q])})};C.useEffect(()=>()=>{k.current&&k.current.off("_beforeBreakpoint",ce)}),C.useEffect(()=>{!j.current&&k.current&&(k.current.emitSlidesClasses(),j.current=!0)}),Po(()=>{if(t&&(t.current=A.current),!!A.current)return k.current.destroyed&&ue(),HO({el:A.current,nextEl:B.current,prevEl:M.current,paginationEl:N.current,scrollbarEl:P.current,swiper:k.current},U),u&&!k.current.destroyed&&u(k.current),()=>{k.current&&!k.current.destroyed&&k.current.destroy(!0,!1)}},[]),Po(()=>{H();const Q=GO(G,R.current,ne,E.current,z=>z.key);return R.current=G,E.current=ne,Q.length&&k.current&&!k.current.destroyed&&_O({swiper:k.current,slides:ne,passedParams:G,changedParams:Q,nextEl:B.current,prevEl:M.current,scrollbarEl:P.current,paginationEl:N.current}),()=>{D()}}),Po(()=>{UO(k.current)},[x]);function _(){return U.virtual?FO(k.current,ne,x):ne.map((Q,z)=>Ee.cloneElement(Q,{swiper:k.current,swiperSlideIndex:z}))}return Ee.createElement(a,Eu({ref:A,className:Qw(`${m}${i?` ${i}`:""}`)},Y),Ee.createElement(qO.Provider,{value:k.current},le["container-start"],Ee.createElement(o,{className:BO(U.wrapperClass)},le["wrapper-start"],_(),le["wrapper-end"]),Kw(U)&&Ee.createElement(Ee.Fragment,null,Ee.createElement("div",{ref:M,className:"swiper-button-prev"}),Ee.createElement("div",{ref:B,className:"swiper-button-next"})),Xw(U)&&Ee.createElement("div",{ref:P,className:"swiper-scrollbar"}),Yw(U)&&Ee.createElement("div",{ref:N,className:"swiper-pagination"}),le["container-end"]))});Jw.displayName="Swiper";const e3=C.forwardRef(function(e,t){let{tag:i="div",children:a,className:o="",swiper:l,zoom:u,lazy:f,virtualIndex:p,swiperSlideIndex:m,...g}=e===void 0?{}:e;const x=C.useRef(null),[y,v]=C.useState("swiper-slide"),[S,j]=C.useState(!1);function A(B,M,N){M===x.current&&v(N)}Po(()=>{if(typeof m<"u"&&(x.current.swiperSlideIndex=m),t&&(t.current=x.current),!(!x.current||!l)){if(l.destroyed){y!=="swiper-slide"&&v("swiper-slide");return}return l.on("_slideClass",A),()=>{l&&l.off("_slideClass",A)}}}),Po(()=>{l&&x.current&&!l.destroyed&&v(l.getSlideClasses(x.current))},[l]);const k={isActive:y.indexOf("swiper-slide-active")>=0,isVisible:y.indexOf("swiper-slide-visible")>=0,isPrev:y.indexOf("swiper-slide-prev")>=0,isNext:y.indexOf("swiper-slide-next")>=0},R=()=>typeof a=="function"?a(k):a,E=()=>{j(!0)};return Ee.createElement(i,Eu({ref:x,className:Qw(`${y}${o?` ${o}`:""}`),"data-swiper-slide-index":p,onLoad:E},g),u&&Ee.createElement(av.Provider,{value:k},Ee.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof u=="number"?u:void 0},R(),f&&!S&&Ee.createElement("div",{className:"swiper-lazy-preloader"}))),!u&&Ee.createElement(av.Provider,{value:k},R(),f&&!S&&Ee.createElement("div",{className:"swiper-lazy-preloader"})))});e3.displayName="SwiperSlide";function KO(e){let{swiper:t,extendParams:i,on:a,emit:o}=e;const l=Xt(),u=At();t.keyboard={enabled:!1},i({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function f(g){if(!t.enabled)return;const{rtlTranslate:x}=t;let y=g;y.originalEvent&&(y=y.originalEvent);const v=y.keyCode||y.charCode,S=t.params.keyboard.pageUpDown,j=S&&v===33,A=S&&v===34,k=v===37,R=v===39,E=v===38,B=v===40;if(!t.allowSlideNext&&(t.isHorizontal()&&R||t.isVertical()&&B||A)||!t.allowSlidePrev&&(t.isHorizontal()&&k||t.isVertical()&&E||j))return!1;if(!(y.shiftKey||y.altKey||y.ctrlKey||y.metaKey)&&!(l.activeElement&&(l.activeElement.isContentEditable||l.activeElement.nodeName&&(l.activeElement.nodeName.toLowerCase()==="input"||l.activeElement.nodeName.toLowerCase()==="textarea")))){if(t.params.keyboard.onlyInViewport&&(j||A||k||R||E||B)){let M=!1;if(om(t.el,`.${t.params.slideClass}, swiper-slide`).length>0&&om(t.el,`.${t.params.slideActiveClass}`).length===0)return;const N=t.el,P=N.clientWidth,U=N.clientHeight,G=u.innerWidth,Y=u.innerHeight,Z=kL(N);x&&(Z.left-=N.scrollLeft);const ne=[[Z.left,Z.top],[Z.left+P,Z.top],[Z.left,Z.top+U],[Z.left+P,Z.top+U]];for(let le=0;le<ne.length;le+=1){const ce=ne[le];if(ce[0]>=0&&ce[0]<=G&&ce[1]>=0&&ce[1]<=Y){if(ce[0]===0&&ce[1]===0)continue;M=!0}}if(!M)return}t.isHorizontal()?((j||A||k||R)&&(y.preventDefault?y.preventDefault():y.returnValue=!1),((A||R)&&!x||(j||k)&&x)&&t.slideNext(),((j||k)&&!x||(A||R)&&x)&&t.slidePrev()):((j||A||E||B)&&(y.preventDefault?y.preventDefault():y.returnValue=!1),(A||B)&&t.slideNext(),(j||E)&&t.slidePrev()),o("keyPress",v)}}function p(){t.keyboard.enabled||(l.addEventListener("keydown",f),t.keyboard.enabled=!0)}function m(){t.keyboard.enabled&&(l.removeEventListener("keydown",f),t.keyboard.enabled=!1)}a("init",()=>{t.params.keyboard.enabled&&p()}),a("destroy",()=>{t.keyboard.enabled&&m()}),Object.assign(t.keyboard,{enable:p,disable:m})}function Jp(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function YO(e){let{swiper:t,extendParams:i,on:a}=e;i({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,containerRole:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null,scrollOnFocus:!0}}),t.a11y={clicked:!1};let o=null,l,u,f=new Date().getTime();function p(D){const _=o;_.length!==0&&lm(_,D)}function m(D){const _=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(D).replace(/x/g,_)}function g(D){D=vt(D),D.forEach(_=>{_.setAttribute("tabIndex","0")})}function x(D){D=vt(D),D.forEach(_=>{_.setAttribute("tabIndex","-1")})}function y(D,_){D=vt(D),D.forEach(Q=>{Q.setAttribute("role",_)})}function v(D,_){D=vt(D),D.forEach(Q=>{Q.setAttribute("aria-roledescription",_)})}function S(D,_){D=vt(D),D.forEach(Q=>{Q.setAttribute("aria-controls",_)})}function j(D,_){D=vt(D),D.forEach(Q=>{Q.setAttribute("aria-label",_)})}function A(D,_){D=vt(D),D.forEach(Q=>{Q.setAttribute("id",_)})}function k(D,_){D=vt(D),D.forEach(Q=>{Q.setAttribute("aria-live",_)})}function R(D){D=vt(D),D.forEach(_=>{_.setAttribute("aria-disabled",!0)})}function E(D){D=vt(D),D.forEach(_=>{_.setAttribute("aria-disabled",!1)})}function B(D){if(D.keyCode!==13&&D.keyCode!==32)return;const _=t.params.a11y,Q=D.target;if(!(t.pagination&&t.pagination.el&&(Q===t.pagination.el||t.pagination.el.contains(D.target))&&!D.target.matches(Jp(t.params.pagination.bulletClass)))){if(t.navigation&&t.navigation.prevEl&&t.navigation.nextEl){const z=vt(t.navigation.prevEl);vt(t.navigation.nextEl).includes(Q)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?p(_.lastSlideMessage):p(_.nextSlideMessage)),z.includes(Q)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?p(_.firstSlideMessage):p(_.prevSlideMessage))}t.pagination&&Q.matches(Jp(t.params.pagination.bulletClass))&&Q.click()}}function M(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{nextEl:D,prevEl:_}=t.navigation;_&&(t.isBeginning?(R(_),x(_)):(E(_),g(_))),D&&(t.isEnd?(R(D),x(D)):(E(D),g(D)))}function N(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function P(){return N()&&t.params.pagination.clickable}function U(){const D=t.params.a11y;N()&&t.pagination.bullets.forEach(_=>{t.params.pagination.clickable&&(g(_),t.params.pagination.renderBullet||(y(_,"button"),j(_,D.paginationBulletMessage.replace(/\{\{index\}\}/,sm(_)+1)))),_.matches(Jp(t.params.pagination.bulletActiveClass))?_.setAttribute("aria-current","true"):_.removeAttribute("aria-current")})}const G=(D,_,Q)=>{g(D),D.tagName!=="BUTTON"&&(y(D,"button"),D.addEventListener("keydown",B)),j(D,Q),S(D,_)},Y=D=>{u&&u!==D.target&&!u.contains(D.target)&&(l=!0),t.a11y.clicked=!0},Z=()=>{l=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{t.destroyed||(t.a11y.clicked=!1)})})},ne=D=>{f=new Date().getTime()},le=D=>{if(t.a11y.clicked||!t.params.a11y.scrollOnFocus||new Date().getTime()-f<100)return;const _=D.target.closest(`.${t.params.slideClass}, swiper-slide`);if(!_||!t.slides.includes(_))return;u=_;const Q=t.slides.indexOf(_)===t.activeIndex,z=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(_);Q||z||D.sourceCapabilities&&D.sourceCapabilities.firesTouchEvents||(t.isHorizontal()?t.el.scrollLeft=0:t.el.scrollTop=0,requestAnimationFrame(()=>{l||(t.params.loop?t.slideToLoop(t.getSlideIndexWhenGrid(parseInt(_.getAttribute("data-swiper-slide-index"))),0):t.slideTo(t.getSlideIndexWhenGrid(t.slides.indexOf(_)),0),l=!1)}))},ce=()=>{const D=t.params.a11y;D.itemRoleDescriptionMessage&&v(t.slides,D.itemRoleDescriptionMessage),D.slideRole&&y(t.slides,D.slideRole);const _=t.slides.length;D.slideLabelMessage&&t.slides.forEach((Q,z)=>{const X=t.params.loop?parseInt(Q.getAttribute("data-swiper-slide-index"),10):z,te=D.slideLabelMessage.replace(/\{\{index\}\}/,X+1).replace(/\{\{slidesLength\}\}/,_);j(Q,te)})},ue=()=>{const D=t.params.a11y;t.el.append(o);const _=t.el;D.containerRoleDescriptionMessage&&v(_,D.containerRoleDescriptionMessage),D.containerMessage&&j(_,D.containerMessage),D.containerRole&&y(_,D.containerRole);const Q=t.wrapperEl,z=D.id||Q.getAttribute("id")||`swiper-wrapper-${m(16)}`,X=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";A(Q,z),k(Q,X),ce();let{nextEl:te,prevEl:ie}=t.navigation?t.navigation:{};te=vt(te),ie=vt(ie),te&&te.forEach(xe=>G(xe,z,D.nextSlideMessage)),ie&&ie.forEach(xe=>G(xe,z,D.prevSlideMessage)),P()&&vt(t.pagination.el).forEach(de=>{de.addEventListener("keydown",B)}),Xt().addEventListener("visibilitychange",ne),t.el.addEventListener("focus",le,!0),t.el.addEventListener("focus",le,!0),t.el.addEventListener("pointerdown",Y,!0),t.el.addEventListener("pointerup",Z,!0)};function H(){o&&o.remove();let{nextEl:D,prevEl:_}=t.navigation?t.navigation:{};D=vt(D),_=vt(_),D&&D.forEach(z=>z.removeEventListener("keydown",B)),_&&_.forEach(z=>z.removeEventListener("keydown",B)),P()&&vt(t.pagination.el).forEach(X=>{X.removeEventListener("keydown",B)}),Xt().removeEventListener("visibilitychange",ne),t.el&&typeof t.el!="string"&&(t.el.removeEventListener("focus",le,!0),t.el.removeEventListener("pointerdown",Y,!0),t.el.removeEventListener("pointerup",Z,!0))}a("beforeInit",()=>{o=Cu("span",t.params.a11y.notificationClass),o.setAttribute("aria-live","assertive"),o.setAttribute("aria-atomic","true")}),a("afterInit",()=>{t.params.a11y.enabled&&ue()}),a("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{t.params.a11y.enabled&&ce()}),a("fromEdge toEdge afterInit lock unlock",()=>{t.params.a11y.enabled&&M()}),a("paginationUpdate",()=>{t.params.a11y.enabled&&U()}),a("destroy",()=>{t.params.a11y.enabled&&H()})}function XO(e){let{swiper:t,extendParams:i,on:a,emit:o,params:l}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let u,f,p=l&&l.autoplay?l.autoplay.delay:3e3,m=l&&l.autoplay?l.autoplay.delay:3e3,g,x=new Date().getTime(),y,v,S,j,A,k,R;function E(_){!t||t.destroyed||!t.wrapperEl||_.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",E),!(R||_.detail&&_.detail.bySwiperTouchMove)&&Y())}const B=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?y=!0:y&&(m=g,y=!1);const _=t.autoplay.paused?g:x+m-new Date().getTime();t.autoplay.timeLeft=_,o("autoplayTimeLeft",_,_/p),f=requestAnimationFrame(()=>{B()})},M=()=>{let _;return t.virtual&&t.params.virtual.enabled?_=t.slides.find(z=>z.classList.contains("swiper-slide-active")):_=t.slides[t.activeIndex],_?parseInt(_.getAttribute("data-swiper-autoplay"),10):void 0},N=_=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(f),B();let Q=typeof _>"u"?t.params.autoplay.delay:_;p=t.params.autoplay.delay,m=t.params.autoplay.delay;const z=M();!Number.isNaN(z)&&z>0&&typeof _>"u"&&(Q=z,p=z,m=z),g=Q;const X=t.params.speed,te=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(X,!0,!0),o("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,X,!0,!0),o("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(X,!0,!0),o("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,X,!0,!0),o("autoplay")),t.params.cssMode&&(x=new Date().getTime(),requestAnimationFrame(()=>{N()})))};return Q>0?(clearTimeout(u),u=setTimeout(()=>{te()},Q)):requestAnimationFrame(()=>{te()}),Q},P=()=>{x=new Date().getTime(),t.autoplay.running=!0,N(),o("autoplayStart")},U=()=>{t.autoplay.running=!1,clearTimeout(u),cancelAnimationFrame(f),o("autoplayStop")},G=(_,Q)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(u),_||(k=!0);const z=()=>{o("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",E):Y()};if(t.autoplay.paused=!0,Q){A&&(g=t.params.autoplay.delay),A=!1,z();return}g=(g||t.params.autoplay.delay)-(new Date().getTime()-x),!(t.isEnd&&g<0&&!t.params.loop)&&(g<0&&(g=0),z())},Y=()=>{t.isEnd&&g<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(x=new Date().getTime(),k?(k=!1,N(g)):N(),t.autoplay.paused=!1,o("autoplayResume"))},Z=()=>{if(t.destroyed||!t.autoplay.running)return;const _=Xt();_.visibilityState==="hidden"&&(k=!0,G(!0)),_.visibilityState==="visible"&&Y()},ne=_=>{_.pointerType==="mouse"&&(k=!0,R=!0,!(t.animating||t.autoplay.paused)&&G(!0))},le=_=>{_.pointerType==="mouse"&&(R=!1,t.autoplay.paused&&Y())},ce=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",ne),t.el.addEventListener("pointerleave",le))},ue=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",ne),t.el.removeEventListener("pointerleave",le))},H=()=>{Xt().addEventListener("visibilitychange",Z)},D=()=>{Xt().removeEventListener("visibilitychange",Z)};a("init",()=>{t.params.autoplay.enabled&&(ce(),H(),P())}),a("destroy",()=>{ue(),D(),t.autoplay.running&&U()}),a("_freeModeStaticRelease",()=>{(S||k)&&Y()}),a("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?U():G(!0,!0)}),a("beforeTransitionStart",(_,Q,z)=>{t.destroyed||!t.autoplay.running||(z||!t.params.autoplay.disableOnInteraction?G(!0,!0):U())}),a("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){U();return}v=!0,S=!1,k=!1,j=setTimeout(()=>{k=!0,S=!0,G(!0)},200)}}),a("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!v)){if(clearTimeout(j),clearTimeout(u),t.params.autoplay.disableOnInteraction){S=!1,v=!1;return}S&&t.params.cssMode&&Y(),S=!1,v=!1}}),a("slideChange",()=>{t.destroyed||!t.autoplay.running||(A=!0)}),Object.assign(t.autoplay,{start:P,stop:U,pause:G,resume:Y})}function QO(e){const{effect:t,swiper:i,on:a,setTranslate:o,setTransition:l,overwriteParams:u,perspective:f,recreateShadows:p,getEffectParams:m}=e;a("beforeInit",()=>{if(i.params.effect!==t)return;i.classNames.push(`${i.params.containerModifierClass}${t}`),f&&f()&&i.classNames.push(`${i.params.containerModifierClass}3d`);const x=u?u():{};Object.assign(i.params,x),Object.assign(i.originalParams,x)}),a("setTranslate _virtualUpdated",()=>{i.params.effect===t&&o()}),a("setTransition",(x,y)=>{i.params.effect===t&&l(y)}),a("transitionEnd",()=>{if(i.params.effect===t&&p){if(!m||!m().slideShadows)return;i.slides.forEach(x=>{x.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(y=>y.remove())}),p()}});let g;a("virtualUpdate",()=>{i.params.effect===t&&(i.slides.length||(g=!0),requestAnimationFrame(()=>{g&&i.slides&&i.slides.length&&(o(),g=!1)}))})}function WO(e,t){const i=$w(t);return i!==t&&(i.style.backfaceVisibility="hidden",i.style["-webkit-backface-visibility"]="hidden"),i}function ZO(e){let{swiper:t,duration:i,transformElements:a}=e;const{activeIndex:o}=t;if(t.params.virtualTranslate&&i!==0){let l=!1,u;u=a,u.forEach(f=>{AL(f,()=>{if(l||!t||t.destroyed)return;l=!0,t.animating=!1;const p=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(p)})})}}function JO(e){let{swiper:t,extendParams:i,on:a}=e;i({fadeEffect:{crossFade:!1}}),QO({effect:"fade",swiper:t,on:a,setTranslate:()=>{const{slides:u}=t,f=t.params.fadeEffect;for(let p=0;p<u.length;p+=1){const m=t.slides[p];let x=-m.swiperSlideOffset;t.params.virtualTranslate||(x-=t.translate);let y=0;t.isHorizontal()||(y=x,x=0);const v=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(m.progress),0):1+Math.min(Math.max(m.progress,-1),0),S=WO(f,m);S.style.opacity=v,S.style.transform=`translate3d(${x}px, ${y}px, 0px)`}},setTransition:u=>{const f=t.slides.map(p=>$w(p));f.forEach(p=>{p.style.transitionDuration=`${u}ms`}),ZO({swiper:t,duration:u,transformElements:f})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})}const eD=O.div`
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
`,tD=()=>{const{t:e}=Ge(),[t,i]=C.useState(0),a=C.useRef(null),o=l=>{var u;(u=a.current)==null||u.slideTo(l)};return d.jsx(eD,{children:d.jsxs(ae.section,{className:"section sticky-process",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.18},variants:pt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.process.title")}),d.jsx("p",{className:"section-description",children:e("home.process.desc")})]}),d.jsxs("div",{className:"sticky-process-grid",children:[d.jsx(ae.div,{className:"sticky-steps",role:"tablist","aria-label":e("home.process.aria"),variants:Dt,children:Fp.map((l,u)=>d.jsxs(ae.button,{className:`sticky-step ${t===u?"active":""}`,onClick:()=>o(u),type:"button",role:"tab","aria-selected":t===u,variants:Ke,children:[d.jsx("span",{children:l.step}),d.jsx("p",{children:e(`home.process.steps.s${u+1}.title`)})]},l.step))}),d.jsx(ae.article,{className:"sticky-process-card card",initial:{opacity:0,y:10,scale:.99},animate:{opacity:1,y:0,scale:1},transition:{duration:.32,ease:Cn},children:d.jsx(Jw,{modules:[KO,YO,JO,XO],effect:"fade",fadeEffect:{crossFade:!0},slidesPerView:1,speed:420,keyboard:{enabled:!0},autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},onSwiper:l=>{a.current=l,i(l.activeIndex)},onSlideChange:l=>i(l.activeIndex),className:"process-swiper",children:Fp.map((l,u)=>d.jsx(e3,{children:d.jsx("div",{className:"process-slide",style:{"--process-bg":`url(${l.image})`},children:d.jsxs("div",{className:"process-content",children:[d.jsxs("div",{className:"process-kicker",children:[d.jsx("span",{className:"process-chip",children:l.step}),d.jsx("span",{className:"process-chip subtle",children:e("home.process.stage")})]}),d.jsx("h3",{children:e(`home.process.steps.s${u+1}.title`)}),d.jsx("p",{children:e(`home.process.steps.s${u+1}.text`)}),d.jsxs("div",{className:"process-nav",children:[d.jsx("button",{type:"button",className:"nav-btn",onClick:()=>{var f;return(f=a.current)==null?void 0:f.slidePrev()},disabled:t===0,children:e("home.process.nav.prev")}),d.jsx("button",{type:"button",className:"nav-btn primary",onClick:()=>{var f;return(f=a.current)==null?void 0:f.slideNext()},disabled:t===Fp.length-1,children:e("home.process.nav.next")})]})]})})},`${l.step}-${u}`))})})]})]})})},nD=({poster:e,video:t,title:i})=>{const a=C.useRef(null),o=async()=>{const u=a.current;if(u)try{u.currentTime=0,await u.play()}catch{}},l=()=>{const u=a.current;u&&(u.pause(),u.currentTime=0)};return d.jsxs("div",{className:"project-preview",onMouseEnter:o,onMouseLeave:l,onFocus:o,onBlur:l,tabIndex:0,"aria-label":i,children:[d.jsx("img",{src:e,alt:"",loading:"lazy"}),d.jsx("video",{ref:a,muted:!0,loop:!0,playsInline:!0,preload:"none",children:d.jsx("source",{src:t,type:"video/webm"})}),d.jsx("div",{className:"preview-overlay"})]})},iD=O.div`
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
`,aD=()=>{const{t:e}=Ge();return d.jsx(iD,{children:d.jsxs(ae.section,{className:"section",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:pt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.projects.title")}),d.jsx("p",{className:"section-description",children:e("home.projects.desc")})]}),d.jsx(ae.div,{className:"grid-2 projects-grid",variants:Dt,children:dR.map((t,i)=>d.jsxs(ae.article,{className:"card project-card",variants:Ke,children:[d.jsx(nD,{poster:t.poster,video:t.video,title:e(`home.projects.cards.${t.id}.title`)}),d.jsx("h3",{children:e(`home.projects.cards.${t.id}.title`)}),d.jsx("p",{children:e(`home.projects.cards.${t.id}.description`)}),d.jsx("div",{className:"project-tags",children:t.tags.map(a=>d.jsx("span",{children:a},`${a}-${i}`))}),d.jsx("p",{className:"muted",children:e(`home.projects.cards.${t.id}.goal`)})]},t.id))})]})})},rD=O.div`
  .trust-grid .card {
    min-height: 132px;
  }
`,sD=()=>{const{t:e}=Ge();return d.jsx(rD,{children:d.jsxs(ae.section,{className:"section",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:pt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.trust.title")}),d.jsx("p",{className:"section-description",children:e("home.trust.desc")})]}),d.jsx(ae.div,{className:"grid-2 trust-grid",variants:Dt,children:fR.map(t=>d.jsxs(ae.article,{className:"card",variants:Ke,children:[d.jsx("h3",{children:e(`home.trust.deliverables.${t}.title`)}),d.jsx("p",{className:"muted",children:e(`home.trust.deliverables.${t}.text`)})]},t))})]})})},oD=O.div`
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
`,lD=()=>{const e=rR();return aR(e),d.jsx(oD,{children:d.jsx("div",{className:"page",children:d.jsxs("div",{className:"container",children:[d.jsx(IR,{reducedMotion:e}),d.jsx(mL,{}),d.jsx("div",{className:"section-divider"}),d.jsx(gL,{}),d.jsx("div",{className:"section-divider"}),d.jsx(tD,{}),d.jsx("div",{className:"section-divider"}),d.jsx(aD,{}),d.jsx("div",{className:"section-divider"}),d.jsx(PR,{}),d.jsx("div",{className:"section-divider"}),d.jsx(sD,{}),d.jsx(VR,{})]})})})},cD=(e,t,i,a)=>`${i}${e.toFixed(t)}${a}`,Dc=({start:e,max:t,target:i,decimals:a=0,prefix:o="",suffix:l="",durationMs:u=1800,storageKey:f})=>{const p=i??t,[m,g]=C.useState(e),[x,y]=C.useState(!0),v=C.useRef(null);C.useEffect(()=>{if(typeof window>"u")return;if(f&&window.sessionStorage.getItem(f)==="1"){g(p),y(!1);return}let j=0;const A=e,k=p,R=E=>{j||(j=E);const B=Math.min((E-j)/u,1),M=A+(k-A)*B;g(M),B<1?v.current=window.requestAnimationFrame(R):(y(!1),g(k),f&&window.sessionStorage.setItem(f,"1"))};return v.current=window.requestAnimationFrame(R),()=>{v.current&&window.cancelAnimationFrame(v.current)}},[u,p,e,f]);const S=C.useMemo(()=>cD(m,a,o,l),[m,a,o,l]);return d.jsxs(ae.span,{className:"live-metric command-line-metric",initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.42},children:[S,x?d.jsx("span",{className:"terminal-cursor",children:"|"}):null]})},uD={copy:{eyebrow:"Almanya'daki yerel şirketler için öncü sistemler",heroTitle:["Trafikten","nitelikli potansiyel müşteriler","als steuerbares System"],heroLead:"Satış, pazarlama ve sahiplerin aynı verilerle çalışabilmesi için web sitesini, yapay zekayı, reklamları ve analitiği tek bir operasyonel mimaride birleştiriyoruz.",ctaTop:"Stratejik çağrıyı başlat",heroChips:["Potansiyel Müşteri Akışı","Yapay Zeka Yeterliliği","Atıf"],heroChipValues:["Canlı Yayın","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","İniş + Takip","Yapay Zeka Yeterliliği","CRM Boru Hattı"],heroBadges:["Sunucu tarafı izleme","Potansiyel Müşteri Puanlaması","ROAS Görünümü"],servicesTitle:"Sistem modülleri olarak hizmetler",servicesDesc:"Tek tip bir kart bloğu değil: baskın bir çekirdek, yan modüller ve kompakt bir operasyon katmanı.",trio:["Sorun","sistemi","Sonuç"],detailsSummary:"Uygulama ayrıntıları",kpiBadgesTitle:"KPI rozetleri",kpiBadgesDesc:"Her performans, yalnızca satış ve pazarlamanın birlikte okuyup kontrol edebileceği önemli rakamlar kullanılarak değerlendirilir.",signalLayerTitle:"Sinyal Katmanı",signalItems:["GA4 etkinlikleri","Meta CAPI'si","CRM Senkronizasyonu","GDPR modası"],opsTitle:"Operasyon Notları",opsItems:["Haftalık Test Sırası","Bütçenin Yeniden Dağıtılması","Dönüşüm Hunisi QA Yuvaları"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Tavsiye edilir",timelineTitle:"Nasıl çalışıyoruz?",stepLabel:"Adım",controlTitle:"Kontrol Odası: Gerçek zamanlı sonuçlar",controlPanelTitle:"Kontrol Paneli Mimarisi",controlPanelDesc:"Kanal verileri, huni sinyalleri ve CRM durumu tek bir görünümde birleşiyor. Kararlar içgüdüsel olarak değil, süreç düzeyinde alınır.",miniCharts:["Potansiyel Müşteri Hacmi","Kalite Puanı","Anlaşma Hızı"],kpiPanelTitle:"Canlı KPI Sayaçları",kpiLabels:["Nitelikli Potansiyel Müşteriler","Ort. İlk yanıt","Randevuya götür","ROAS kümeleri"],controlBadges:["Liderlik kontrolü","Bütçe kontrolü","Dönüşüm hunisi kontrolü"],ctaBottom:"Potansiyel müşteri sisteminiz için kapsam isteyin"},systems:{website:{title:"Web Sitesi Motoru",problem:"Trafik var ama mobil kullanıcılar formdan önce çıkıyor.",system:"GA4, Meta Piksel, sunucu tarafı izleme, CRM ve GDPR kurulumuyla Açılış/Çoklu Sayfa.",outcome:"Her müşteri izlenebilir bir şekilde kayıt altına alınır ve açıkça bir kanala atanır.",kpis:["izleme oranı","Form Doldurma","Potansiyel Müşteri Kaynağının Netliği"],details:["İzin modu doğru şekilde yapılandırıldı","Çağrı ve WhatsApp etkinlikleri","Gerçek zamanlı CRM aktarımı"]},ai:{title:"Yapay Zeka Yeterlilik Katmanı",problem:"Çok fazla niteliksiz soru satışları ve telefon ekibini engelliyor.",system:"Yapay zeka sohbet robotu, otomatik yeterlilik, WhatsApp/Instagram'da DM akışları, e-posta otomasyonu, müşteri adayı puanlama.",outcome:"Ekip, zaman alıcı ilk sıralama yerine satışla ilgili potansiyel müşterilere öncelik veriyor.",kpis:["İlk yanıt süresi","Nitelikli Potansiyel Müşteri Payı","Satış Ekibi Verimi"],details:["Sektöre özel bilgi istemi yolları","Gösterilmemesi Hatırlatıcıları","Puana göre önceliklendirme"]},ads:{title:"Ücretli Edinme",problem:"Bütçe kanallar arasında net bir öğrenme döngüsü olmadan dağıtılıyor.",system:"Google Ads + Meta Reklamlar + TikTok, A/B testleri, benzerler, dönüşüm izleme ve ROAS görünümü.",outcome:"Bütçe, salt tıklama hacmi yerine yüksek potansiyel müşteri kalitesine sahip kampanyalara akıyor.",kpis:["Nitelikli potansiyel müşteri başına maliyet","Kampanyaya göre ROAS","Yaratıcı Kazanma Oranı"],details:["Bölgesel kampanya kümeleri","Testteki şekil çeşitleri","Sinyale dayalı kitle güncellemeleri"]},analytics:{title:"Kontrol Analitiği",problem:"Kararlar, güvenilir huni verileri yerine platform ekran görüntülerine dayanmaktadır.",system:"Tek düzeyde kanal, huni ve CRM görünümlerini içeren kontrol odası kontrol paneli.",outcome:"Haftalık bütçe, optimizasyon ve ölçeklendirme kararları verilere dayalı olarak izlenebilir.",kpis:["Randevuya Yol Açmak","Anlaşmaya varmak","Boru Hattı Hızı"],details:["Bölgeye/hizmete göre segmentasyon","Huni Düşme Uyarıları","Aylık hipotez listesi"]}},packages:[{id:"başlangıç",title:"Başlangıç",scale:1,lead:"Sıfırdan ölçülebilir bir potansiyel müşteri tabanına giden yerel işletmeler için.",items:["Web dönüşüm hunisi + GA4","Meta Pikseller + İzin","CRM Yakalama","Temel raporlama"],effect:"Potansiyel müşteri kaynaklarının net görünümü ve esnek bir başlangıç süreci."},{id:"büyüme",title:"Büyüme",scale:2,recommended:!0,lead:"Daha nitelikli potansiyel müşterilere ihtiyaç duyan aktif satışları olan ekipler için.",items:["Google + Meta kampanyaları","Yapay Zeka Yeterlilik Akışları","A/B Test Kurulumu","Müşteri Adayı Puanlama + Otomasyon"],effect:"Daha iyi yanıt süreleri ve net önceliklendirme ile daha nitelikli talep."},{id:"ölçeği",title:"Terazi",scale:3,lead:"Birden fazla bölgeye veya hizmet kümesine sahip şirketler için.",items:["Çok kanallı kontrol","Sunucu Tarafı İlişkilendirmesi","Ops Web Uygulama Katmanı","Kontrol odası yönetimi"],effect:"Manuel deneme yanılma yerine süreçler ve güvenilir veriler üzerinden ölçeklendirme."}],timeline:[["01","Stratejik çağrı","Hedef pazar, teklif ve müşteri adayı darboğazı açıkça tanımlanmıştır."],["02","Kapsam belgesi","Kanal planı, takip planı ve sorumluluklar belirlendi."],["03","Yapım aşaması","Web sitesi otomasyonları ve entegrasyonları gerçekleştirilir."],["04","Lansman","QA takibi, kampanya lansmanı ve CRM akışları yayına giriyor."],["05","Optimizasyon","Reklam öğeleri, dönüşüm hunileri ve kalifikasyon için haftalık testler."],["06","Ölçekleme","İşleyen rotalar bölgelere/hizmetlere genişletildi."]]},dD={copy:{eyebrow:"الأنظمة الرائدة للشركات المحلية في ألمانيا",heroTitle:["من حركة المرور","العملاء المتوقعون المؤهلون","كنظام يمكن السيطرة عليه"],heroLead:"نقوم بربط مواقع الويب والذكاء الاصطناعي والإعلانات والتحليلات في بنية تشغيلية واحدة بحيث يعمل فريق المبيعات والتسويق والمالكون بنفس البيانات.",ctaTop:"ابدأ المكالمة الإستراتيجية",heroChips:["تدفق الرصاص","تأهل الذكاء الاصطناعي","الإسناد"],heroChipValues:["المدخول المباشر","رسالة مباشرة + بوت","GA4 + إدارة علاقات العملاء"],flowNodes:["جوجل / ميتا / تيك توك","الهبوط + التتبع","مؤهل الذكاء الاصطناعي","خط أنابيب إدارة علاقات العملاء"],heroBadges:["التتبع من جانب الخادم","نقاط الرصاص","عرض عائد النفقات الإعلانية"],servicesTitle:"الخدمات كوحدات النظام",servicesDesc:"ليست كتلة بطاقات موحدة: نواة مهيمنة ووحدات جانبية وطبقة عمليات مدمجة.",trio:["مشكلة","System","النتيجة"],detailsSummary:"تفاصيل التنفيذ",kpiBadgesTitle:"شارات مؤشرات الأداء الرئيسية",kpiBadgesDesc:"يتم تقييم كل أداء حصريًا باستخدام الأرقام الرئيسية التي يمكن للمبيعات والتسويق قراءتها والتحكم فيها معًا.",signalLayerTitle:"طبقة الإشارة",signalItems:['أحداث "إحصاءات Google" 4',"ميتا كابي","مزامنة إدارة علاقات العملاء","موضة القانون العام لحماية البيانات"],opsTitle:"ملاحظات العمليات",opsItems:["قائمة انتظار الاختبار الأسبوعية","إعادة تخصيص الميزانية","فتحات ضمان الجودة"],packagesTitle:"Pakete in SaaS-Logik",recommended:"موصى به",timelineTitle:"كيف نعمل",stepLabel:"الخطوة",controlTitle:"غرفة التحكم: النتائج في الوقت الحقيقي",controlPanelTitle:"بنية لوحة المعلومات",controlPanelDesc:"تتلاقى بيانات القناة وإشارات مسار التحويل وحالة إدارة علاقات العملاء (CRM) في عرض واحد. يتم اتخاذ القرارات على مستوى العملية بدلاً من الاعتماد على الشعور الغريزي.",miniCharts:["حجم الرصاص","نقاط الجودة","سرعة الصفقة"],kpiPanelTitle:"عدادات مؤشرات الأداء الرئيسية المباشرة",kpiLabels:["العملاء المتوقعون المؤهلون","متوسط. الرد الأول","يؤدي إلى التعيين","مجموعات عائد الإنفاق الإعلاني (ROAS)."],controlBadges:["التحكم في الرصاص","مراقبة الميزانية","التحكم في مسار التحويل"],ctaBottom:"نطاق الطلب لنظام العملاء المحتملين الخاص بك"},systems:{website:{title:"محرك الموقع",problem:"حركة المرور موجودة، لكن مستخدمي الهاتف المحمول يتخلون عنها قبل النموذج.",system:"الصفحات المقصودة/الصفحات المتعددة مع GA4 وMeta Pixel والتتبع من جانب الخادم وإدارة علاقات العملاء وإعداد القانون العام لحماية البيانات (GDPR).",outcome:"يتم تسجيل كل عميل متوقع بطريقة يمكن تتبعها وتعيينها بوضوح إلى القناة.",kpis:["معدل التتبع","إكمال النموذج","وضوح مصدر الرصاص"],details:["تم تكوين وضع الموافقة بشكل صحيح","أحداث الاتصال والواتس اب","دفع CRM في الوقت الحقيقي"]},ai:{title:"طبقة تأهيل الذكاء الاصطناعي",problem:"يؤدي وجود عدد كبير جدًا من الاستفسارات غير المؤهلة إلى عرقلة المبيعات وفريق الهاتف.",system:"روبوت الدردشة المدعم بالذكاء الاصطناعي، والتأهيل التلقائي، وتدفقات الرسائل المباشرة في WhatsApp/Instagram، وأتمتة البريد الإلكتروني، وسجل العملاء المحتملين.",outcome:"يقوم الفريق بإعطاء الأولوية للعملاء المحتملين المرتبطين بالمبيعات بدلاً من الفرز الأولي الذي يستغرق وقتًا طويلاً.",kpis:["وقت الاستجابة الأول","مشاركة العميل المحتمل المؤهل","إنتاجية فريق المبيعات"],details:["مسارات المطالبة الخاصة بالصناعة","عدم عرض التذكيرات","تحديد الأولويات حسب النتيجة"]},ads:{title:"الاستحواذ المدفوع",problem:"يتم توزيع الميزانية بين القنوات بدون حلقة تعليمية واضحة.",system:"إعلانات Google + Meta Ads + TikTok، واختبارات A/B، والمشابهين، وتتبع التحويل، وعرض عائد الإنفاق الإعلاني (ROAS).",outcome:"تتدفق الميزانية إلى الحملات ذات جودة العملاء المحتملين العالية بدلاً من حجم النقرات النقي.",kpis:["التكلفة لكل عميل محتمل مؤهل","عائد النفقات الإعلانية حسب الحملة","معدل الفوز الإبداعي"],details:["مجموعات الحملات الإقليمية","متغيرات الشكل في الاختبار","تحديثات الجمهور المستندة إلى الإشارة"]},analytics:{title:"تحليلات التحكم",problem:"تعتمد القرارات على لقطات شاشة النظام الأساسي بدلاً من بيانات مسار التحويل الموثوقة.",system:"لوحة معلومات غرفة التحكم مع طرق عرض القناة ومسار التحويل وإدارة علاقات العملاء (CRM) على مستوى واحد.",outcome:"يمكن تتبع القرارات الأسبوعية بشأن الميزانية والتحسين والقياس بناءً على البيانات.",kpis:["يؤدي إلى التعيين","يؤدي إلى التعامل","سرعة خط الأنابيب"],details:["التقسيم حسب المنطقة/الخدمة","تنبيهات إسقاط مسار التحويل","قائمة الفرضيات الشهرية"]}},packages:[{id:"بداية",title:"كاتب",scale:1,lead:"للشركات المحلية التي تنتقل من الصفر إلى قاعدة عملاء قابلة للقياس.",items:["مسار تحويل الويب + GA4","Meta Pixels + الموافقة","التقاط إدارة علاقات العملاء","إعداد التقارير الأساسية"],effect:"رؤية واضحة لمصادر العملاء المحتملين وعملية أولية مرنة."},{id:"النمو",title:"النمو",scale:2,recommended:!0,lead:"للفرق ذات المبيعات النشطة التي تحتاج إلى المزيد من العملاء المحتملين المؤهلين.",items:["حملات جوجل + ميتا","تدفقات تأهيل الذكاء الاصطناعي","إعداد اختبار أ/ب","تسجيل نقاط العميل المتوقع + الأتمتة"],effect:"طلب أكثر تأهيلاً مع أوقات استجابة أفضل وتحديد أولويات واضح."},{id:"scale",title:"مقياس",scale:3,lead:"للشركات ذات المناطق أو مجموعات الخدمة المتعددة.",items:["تحكم متعدد القنوات","الإسناد من جانب الخادم","طبقة تطبيق ويب العمليات","إدارة غرفة التحكم"],effect:"التوسع من خلال العمليات والبيانات الموثوقة بدلاً من التجربة والخطأ اليدويين."}],timeline:[["01","النداء الاستراتيجي","السوق المستهدف والعرض واختناقات الرصاص محددة بوضوح."],["02","مستند النطاق","تم إصلاح خطة القناة وخطة التتبع والمسؤوليات."],["03","مرحلة البناء","يتم تنفيذ موقع الويب والأتمتة والتكامل."],["04","الإطلاق","بدء تشغيل تتبع ضمان الجودة وإطلاق الحملة وتدفقات إدارة علاقات العملاء."],["05","التحسين","اختبارات أسبوعية للمبدعين والمسارات والتأهيل."],["06","التحجيم","يتم توسيع مسارات العمل إلى المناطق/الخدمات."]]},fD={copy:{eyebrow:"Systemy wiodące dla lokalnych firm w Niemczech",heroTitle:["Z ruchu","kwalifikowani potencjalni klienci","jako system sterowalny"],heroLead:"Łączymy stronę internetową, sztuczną inteligencję, reklamy i analitykę w jedną architekturę operacyjną, aby sprzedaż, marketing i właściciele pracowali z tymi samymi danymi.",ctaTop:"Rozpocznij rozmowę strategiczną",heroChips:["Przepływ ołowiu","AI Zakwalifikuj się","Uznanie autorstwa"],heroChipValues:["Ujęcie na żywo","DM + Bot","GA4 + CRM"],flowNodes:["Google/Meta/TikTok","Lądowanie + śledzenie","Kwalifikacja AI","Potok CRM"],heroBadges:["Śledzenie po stronie serwera","Punktacja leadów","ROAS Widok"],servicesTitle:"Usługi jako moduły systemu",servicesDesc:"Niejednolity blok kart: dominujący rdzeń, moduły flankujące i zwarta warstwa operacyjna.",trio:["Problem","systemu","Wynik"],detailsSummary:"Szczegóły implementacji",kpiBadgesTitle:"Odznaki KPI",kpiBadgesDesc:"Każde wyniki ocenia się wyłącznie na podstawie kluczowych danych, które sprzedaż i marketing mogą wspólnie odczytać i kontrolować.",signalLayerTitle:"Warstwa sygnału",signalItems:["Zdarzenia GA4","MetaCAPI","Synchronizacja CRM","Moda na RODO"],opsTitle:"Notatki operacyjne",opsItems:["Cotygodniowa kolejka testów","Realokacja budżetu","Szczeliny kontroli jakości lejka"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Zalecane",timelineTitle:"Jak pracujemy",stepLabel:"Krok",controlTitle:"Control Room: Wyniki w czasie rzeczywistym",controlPanelTitle:"Architektura pulpitu nawigacyjnego",controlPanelDesc:"Dane kanału, sygnały ze ścieżek i status CRM są zebrane w jednym widoku. Decyzje podejmowane są na poziomie procesu, a nie na podstawie przeczuć.",miniCharts:["Ilość leadów","Wynik Jakości","Prędkość rozdania"],kpiPanelTitle:"Liczniki KPI na żywo",kpiLabels:["Kwalifikowani potencjalni klienci","Średnia Pierwsza odpowiedź","Doprowadź do spotkania","Klastry ROAS"],controlBadges:["Kontrola leadów","Kontrola budżetu","Sterowanie lejkiem"],ctaBottom:"Zakres żądania dla Twojego systemu wiodącego"},systems:{website:{title:"Silnik strony internetowej",problem:"Ruch jest, ale użytkownicy mobilni rezygnują przed formularzem.",system:"Landing/Wielostronicowy z GA4, Meta Pixel, śledzeniem po stronie serwera, konfiguracją CRM i RODO.",outcome:"Każdy lead jest rejestrowany w sposób identyfikowalny i wyraźnie przypisany do kanału.",kpis:["szybkość śledzenia","Wypełnienie formularza","Przejrzystość źródła potencjalnego klienta"],details:["Tryb zgody skonfigurowany poprawnie","Połączenia i zdarzenia WhatsApp","CRM push w czasie rzeczywistym"]},ai:{title:"Warstwa kwalifikacji AI",problem:"Zbyt wiele niewykwalifikowanych zapytań blokuje sprzedaż i zespół telefoniczny.",system:"Chatbot AI, automatyczna kwalifikacja, przepływy DM w WhatsApp/Instagramie, automatyzacja poczty e-mail, scoring leadów.",outcome:"Zespół priorytetowo traktuje leady związane ze sprzedażą, zamiast czasochłonnego wstępnego sortowania.",kpis:["Czas pierwszej odpowiedzi","Kwalifikowany udział wiodący","Wydajność zespołu sprzedaży"],details:["Ścieżki podpowiedzi specyficzne dla branży","Przypomnienia o braku pokazu","Priorytetyzacja według wyniku"]},ads:{title:"Płatne pozyskiwanie",problem:"Budżet jest rozdzielany pomiędzy kanały bez wyraźnej pętli uczenia się.",system:"Google Ads + Meta Ads + TikTok, testy A/B, lookalikes, śledzenie konwersji i widok ROAS.",outcome:"Budżet wpływa na kampanie o wysokiej jakości potencjalnych klientów, a nie na samą liczbę kliknięć.",kpis:["Koszt za kwalifikowanego potencjalnego klienta","ROAS według kampanii","Współczynnik wygranych kreacji"],details:["Regionalne klastry kampanii","Warianty kształtu w teście","Aktualizacje odbiorców na podstawie sygnału"]},analytics:{title:"Analityka kontroli",problem:"Decyzje podejmowane są na podstawie zrzutów ekranu platformy, a nie wiarygodnych danych z lejka.",system:"Pulpit kontrolny z widokami kanałów, lejków i CRM na jednym poziomie.",outcome:"Cotygodniowe decyzje dotyczące budżetu, optymalizacji i skalowania są identyfikowalne na podstawie danych.",kpis:["Prowadź do spotkania","Prowadzić do transakcji","Prędkość rurociągu"],details:["Segmentacja według regionu/usługi","Alerty o spadku ścieżki","Miesięczna lista hipotez"]}},packages:[{id:"rozrusznik",title:"Rozrusznik",scale:1,lead:"Dla lokalnych firm przechodzących od zera do mierzalnej bazy leadów.",items:["Lejek internetowy + GA4","Meta piksele + zgoda","Przechwytywanie CRM","Podstawowe raportowanie"],effect:"Jasny obraz źródeł potencjalnych klientów i odporny proces początkowy."},{id:"wzrostu",title:"Wzrost",scale:2,recommended:!0,lead:"Dla zespołów z aktywną sprzedażą, które potrzebują większej liczby wykwalifikowanych potencjalnych klientów.",items:["Kampanie Google + Meta","Przepływy kwalifikacji AI","Konfiguracja testów A/B","Punktacja leadów + automatyzacja"],effect:"Bardziej kwalifikowany popyt z lepszymi czasami reakcji i jasnym ustalaniem priorytetów."},{id:"scale",title:"Skala",scale:3,lead:"Dla firm z wieloma regionami lub klastrami usług.",items:["Sterowanie wielokanałowe","Atrybucja po stronie serwera","Warstwa aplikacji internetowej Ops","Zarządzanie sterownią"],effect:"Skalowanie poprzez procesy i wiarygodne dane zamiast ręcznej metody prób i błędów."}],timeline:[["01","Połączenie strategiczne","Rynek docelowy, oferta i wiodące wąskie gardło są jasno określone."],["02","Dokument dotyczący zakresu","Plan kanału, plan śledzenia i obowiązki są stałe."],["03","Faza budowy","Serwis WWW, wdrażane są automatyzacje i integracje."],["04","Uruchomienie","Śledzenie kontroli jakości, uruchamiania kampanii i przepływów CRM zostaje uruchomione."],["05","Optymalizacja","Cotygodniowe testy kreacji, lejków i kwalifikacji."],["06","Skalowanie","Funkcjonujące trasy są rozszerzone o regiony/usługi."]]},pD={copy:{eyebrow:"Pergalên pêşeng ji bo pargîdaniyên herêmî yên li Elmanyayê",heroTitle:["Ji Trafîkê","pêşengên jêhatî","wekî pergalek kontrolkirî"],heroLead:"Em malper, AI, reklam û analîtîk di yek mîmariya xebitandinê de girêdidin da ku firotgeh, kirrûbirra û xwedan bi heman daneyan re bixebitin.",ctaTop:"Banga stratejîk dest pê bikin",heroChips:["Lead Flow","AI Qualify","Attribution"],heroChipValues:["Vegirtina Zindî","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Daxistina + Şopandin","Qalîteya AI","CRM Pipeline"],heroBadges:["Şopandina server-side","Nîşandana Serê","Dîtina ROAS"],servicesTitle:"Karûbarên wekî modulên pergalê",servicesDesc:"Ne bloka qerta yekgirtî: bingehek serdest, modulên alîgir û qatek operasyonên tevlihev.",trio:["Pirsgirêk","System","Encam"],detailsSummary:"Agahiyên pêkanînê",kpiBadgesTitle:"nîşaneyên KPI",kpiBadgesDesc:"Her performans bi taybetî bi karanîna hejmarên sereke yên ku firotgeh û kirrûbirra dikarin bi hev re bixwînin û kontrol bikin têne nirxandin.",signalLayerTitle:"Signal Layer",signalItems:["bûyerên GA4","Meta CAPI","CRM Sync","moda GDPR"],opsTitle:"Têbînîyên Ops",opsItems:["Dora Testa Heftane","Veqetandina budceyê","Funnel QA Slots"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Pêşniyar kirin",timelineTitle:"Em çawa dixebitin",stepLabel:"Gavê",controlTitle:"Odeya Kontrolê: Encam di wextê rast de",controlPanelTitle:"Mîmariya Dashboard",controlPanelDesc:"Daneyên kanalê, sînyalên funnel û rewşa CRM di yek dîmenê de li hev dicivin. Biryar di asta pêvajoyê de li şûna ku li ser bingeha hestiyariyê têne girtin.",miniCharts:["Volume Lead","Pîvana Kalîteyê","Deal Leza"],kpiPanelTitle:"Hejmarên KPI-ya Zindî",kpiLabels:["Rêberên Qeydkirî","Avg. Bersiva yekem","Ber bi randevûyê ve bibe","ROAS Cluster"],controlBadges:["Kontrola rêber","Kontrola budceyê","Kontrola funnel"],ctaBottom:"Ji bo pergala rêberiya xwe qada xwe daxwaz bikin"},systems:{website:{title:"Motora Malperê",problem:"Trafîk li wir e, lê bikarhênerên mobîl berê xwe didin formê.",system:"Zevî / Pir-Rûpel bi GA4, Meta Pixel, şopandina server-side, sazkirina CRM û GDPR.",outcome:"Her lînka bi şêwazek peydakirî tê tomar kirin û bi zelalî ji kanalek re tê veqetandin.",kpis:["rêjeya şopandinê","Temamkirina Formê","Zelaliya Çavkaniya Rêber"],details:["Moda razîbûnê rast hate mîheng kirin","Bang û bûyerên WhatsApp","CRM di wextê rast de bişopîne"]},ai:{title:"Qatê Qalîteya AI",problem:"Pir lêpirsînên bêkalîte firotan û tîmê têlefonê asteng dikin.",system:"chatbotê AI-ê, kalîteya xweser, DM di WhatsApp/Instagram-ê de diherike, otomasyona e-nameyê, pîvana pêşeng.",outcome:"Tîm li şûna rêzkirina destpêkê ya dem-dixwe, pêşengên bi firotanê ve girêdayî ye.",kpis:["Dema bersivê ya yekem","Parvekirina Pêşkêşiya Qeydkirî","Rêjeya Tîma Firotanê"],details:["Rêçên bilez ên pîşesaziyê","Bîranînên Nîşan Nade","Pêşniyarkirin li gorî puanê"]},ads:{title:"Bidestxistina Pad",problem:"Budçe di navbera kanalan de bêyî çerxa fêrbûnê ya zelal tê dabeş kirin.",system:"Google Ads + Meta Ads + TikTok, testên A/B, xuyang, şopandina veguheztinê û dîtina ROAS.",outcome:"Budçe li şûna voltaja klîk a paqij di kampanyayên bi kalîteya pêşeng a bilind de diherike.",kpis:["Mesrefa serê pêşengê jêhatî","ROAS ji hêla Kampanyayê ve","Rêjeya Serketina Afirîner"],details:["Komên kampanyaya herêmî","Guhertoyên şikilê di ceribandinê de","Nûvekirinên temaşevanan-based sînyala"]},analytics:{title:"Analîtîk kontrol bikin",problem:"Biryar li şûna daneyên pêbawer ên pêbawer li ser dîmenên platformê têne çêkirin.",system:"Tabloya jûreya kontrolê bi dîtinên kanal, kavil û CRM li yek astê.",outcome:"Biryarên heftane yên li ser budce, xweşbînkirin û pîvandinê li ser bingeha daneyan têne şopandin.",kpis:["Ber bi Randevûyê ve bibe","Bi rê ve bibin","Leza boriyê"],details:["Segmentkirin li gorî herêm/xizmet","Agahiyên Daxistina Funnel","Lîsteya hîpoteza mehane"]}},packages:[{id:"destpêk",title:"Destpêker",scale:1,lead:"Ji bo karsaziyên herêmî ku ji sifirê diçin bingehek pêşeng a pîvandî.",items:["Kanala Web + GA4","Meta Pixels + Destûr","Girtina CRM","Raporkirina bingehîn"],effect:"Dîtina zelal a çavkaniyên pêşeng û pêvajoyek destpêkê ya berxwedêr."},{id:"mezinbûn",title:"Mezinbûn",scale:2,recommended:!0,lead:"Ji bo tîmên xwedan firotana çalak ku hewceyê pêşengên jêhatîtir in.",items:["Google + Meta Kampagnen","Qalîteya AI-ê diherike","Sazkirina Testkirina A/B","Nîgarkirina Serê + Otomasyon"],effect:"Daxwaza jêhatîtir bi demên bersivdayînê çêtir û pêşengiya zelal."},{id:"scale",title:"Pîvana",scale:3,lead:"Ji bo pargîdaniyên bi gelek herêm an komên karûbarê.",items:["Kontrola pir-kanal","Server-Side Attribution","Ops Web App Layer","Rêveberiya odeya kontrolê"],effect:"Li şûna ceribandin û xeletiya destan, bi pêvajo û daneyên pêbawer ve pîvandin."}],timeline:[["01","Banga Stratejîk","Bazara armanc, pêşkêşî û kêşeya pêşeng bi zelalî têne destnîşan kirin."],["02","Belgeya çarçovê","Plana kanalê, plana şopandinê û berpirsiyarî têne rast kirin."],["03","Qonaxa avakirinê","Malper, otomasyon û entegrasyon têne pêkanîn."],["04","Destpêkirin","Şopandina QA, destpêkirina kampanyayê û herikîna CRM zindî diçin."],["05","Optimîzasyon","Testên heftane ji bo afirîner, kavil û jêhatîbûnê."],["06","Scaling","Rêçên fonksiyonel li herêm / karûbaran têne berfireh kirin."]]},hD={copy:{eyebrow:"سیستم های رهبری برای شرکت های محلی در آلمان",heroTitle:["از ترافیک","سرنخ های واجد شرایط","به عنوان یک سیستم قابل کنترل"],heroLead:"ما وب سایت، هوش مصنوعی، تبلیغات و تجزیه و تحلیل را در یک معماری عملیاتی به هم متصل می کنیم تا فروش، بازاریابی و مالکان با داده های یکسان کار کنند.",ctaTop:"تماس استراتژیک را شروع کنید",heroChips:["جریان سرب","AI Qualify","اسناد"],heroChipValues:["مصرف زنده","DM + ربات","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","فرود + ردیابی","صلاحیت هوش مصنوعی","خط لوله CRM"],heroBadges:["ردیابی سمت سرور","امتیازدهی برتر","نمای ROAS"],servicesTitle:"خدمات به عنوان ماژول های سیستم",servicesDesc:"یک بلوک کارت یکنواخت نیست: یک هسته غالب، ماژول های کناری و یک لایه عملیات فشرده.",trio:["مشکل","System","نتیجه"],detailsSummary:"جزئیات پیاده سازی",kpiBadgesTitle:"نشان های KPI",kpiBadgesDesc:"هر عملکرد منحصراً با استفاده از ارقام کلیدی ارزیابی می شود که فروش و بازاریابی می توانند با هم بخوانند و کنترل کنند.",signalLayerTitle:"لایه سیگنال",signalItems:["رویدادهای GA4","متا CAPI","CRM Sync","مد GDPR"],opsTitle:"یادداشت های عملیاتی",opsItems:["صف تست هفتگی","تخصیص مجدد بودجه","قیف QA اسلات"],packagesTitle:"Pakete in SaaS-Logik",recommended:"توصیه می شود",timelineTitle:"چگونه کار می کنیم",stepLabel:"گام",controlTitle:"اتاق کنترل: نتایج در زمان واقعی",controlPanelTitle:"معماری داشبورد",controlPanelDesc:"داده های کانال، سیگنال های قیف و وضعیت CRM در یک نما همگرا می شوند. تصمیمات به جای اینکه بر اساس احساس درونی باشد، در سطح فرآیند گرفته می شود.",miniCharts:["حجم سرب","امتیاز کیفیت","سرعت معامله"],kpiPanelTitle:"شمارنده های KPI زنده",kpiLabels:["سرنخ های واجد شرایط","میانگین اولین پاسخ","منجر به قرار ملاقات","خوشه های ROAS"],controlBadges:["کنترل سرب","کنترل بودجه","کنترل قیف"],ctaBottom:"دامنه درخواست برای سیستم رهبری خود"},systems:{website:{title:"موتور وب سایت",problem:"ترافیک وجود دارد، اما کاربران تلفن همراه قبل از فرم آن را رها می کنند.",system:"Landing/Multi-Page با GA4، Meta Pixel، ردیابی سمت سرور، راه اندازی CRM و GDPR.",outcome:"هر لید به شیوه ای قابل ردیابی ثبت می شود و به وضوح به یک کانال اختصاص داده می شود.",kpis:["نرخ ردیابی","تکمیل فرم","وضوح منبع سرب"],details:["حالت رضایت به درستی پیکربندی شده است","تماس و رویدادهای WhatsApp","فشار CRM در زمان واقعی"]},ai:{title:"لایه صلاحیت هوش مصنوعی",problem:"بسیاری از سوالات غیرمجاز فروش و تیم تلفن را مسدود می کند.",system:"چت ربات هوش مصنوعی، صلاحیت خودکار، جریان DM در واتس اپ/اینستاگرام، اتوماسیون ایمیل، امتیازدهی سرنخ.",outcome:"تیم سرنخ های مرتبط با فروش را به جای مرتب سازی اولیه وقت گیر در اولویت قرار می دهد.",kpis:["اولین زمان پاسخ","اشتراک سرب واجد شرایط","توان عملیاتی تیم فروش"],details:["مسیرهای سریع خاص صنعت","بدون نمایش یادآوری","اولویت بندی بر اساس امتیاز"]},ads:{title:"خرید پولی",problem:"بودجه بین کانال ها بدون یک حلقه یادگیری واضح توزیع می شود.",system:"Google Ads + Meta Ads + TikTok، تست های A/B، مشابه، ردیابی تبدیل و نمای ROAS.",outcome:"بودجه به جای حجم کلیک خالص به کمپین هایی با کیفیت سرنخ بالا سرازیر می شود.",kpis:["هزینه هر سرنخ واجد شرایط","ROAS توسط کمپین","نرخ برد خلاقانه"],details:["خوشه های کمپین منطقه ای","انواع شکل در آزمون","به روز رسانی مخاطبان مبتنی بر سیگنال"]},analytics:{title:"کنترل تجزیه و تحلیل",problem:"تصمیم‌گیری‌ها به جای داده‌های قیف قابل اعتماد، بر اساس اسکرین‌شات‌های پلتفرم هستند.",system:"داشبورد اتاق کنترل با نمای کانال، قیف و CRM در یک سطح.",outcome:"تصمیمات هفتگی در مورد بودجه، بهینه سازی و مقیاس بندی بر اساس داده ها قابل ردیابی هستند.",kpis:["منجر به قرار ملاقات","منجر به معامله شود","سرعت خط لوله"],details:["تقسیم بندی بر اساس منطقه/سرویس","هشدارهای سقوط قیف","فهرست فرضیه های ماهانه"]}},packages:[{id:"استارتر",title:"استارتر",scale:1,lead:"برای کسب و کارهای محلی که از صفر به یک پایه سرب قابل اندازه گیری می روند.",items:["قیف وب + GA4","متا پیکسل + رضایت","ضبط CRM","گزارش اولیه"],effect:"نمای واضح از منابع سرب و فرآیند اولیه انعطاف پذیر."},{id:"رشد",title:"رشد",scale:2,recommended:!0,lead:"برای تیم هایی با فروش فعال که به سرنخ های واجد شرایط بیشتری نیاز دارند.",items:["کمپین های Google + Meta","جریان های صلاحیت هوش مصنوعی","راه اندازی تست A/B","امتیازدهی سرب + اتوماسیون"],effect:"تقاضای واجد شرایط بیشتر با زمان پاسخگویی بهتر و اولویت بندی واضح."},{id:"scale",title:"مقیاس",scale:3,lead:"برای شرکت هایی با چندین منطقه یا خوشه خدمات.",items:["کنترل چند کاناله","اسناد سمت سرور","لایه برنامه وب Ops","اداره اتاق کنترل"],effect:"مقیاس گذاری از طریق فرآیندها و داده های قابل اعتماد به جای آزمون و خطای دستی."}],timeline:[["01","تماس استراتژیک","بازار هدف، پیشنهاد و گلوگاه سرب به وضوح تعریف شده است."],["02","سند محدوده","طرح کانال، طرح پیگیری و مسئولیت ها ثابت است."],["03","فاز ساخت","وب سایت، اتوماسیون ها و ادغام ها پیاده سازی شده اند."],["04","راه اندازی","پیگیری QA، راه‌اندازی کمپین و جریان‌های CRM فعال می‌شوند."],["05","بهینه سازی","آزمون های هفتگی برای خلاقیت ها، قیف ها و صلاحیت ها."],["06","مقیاس بندی","مسیرهای عملکردی به مناطق/خدمات گسترش یافته است."]]},mD={copy:{eyebrow:"Sistemi guida per aziende locali in Germania",heroTitle:["Dal traffico","lead qualificati","come sistema controllabile"],heroLead:"Colleghiamo sito web, intelligenza artificiale, pubblicità e analisi in un'unica architettura operativa in modo che vendite, marketing e proprietari lavorino con gli stessi dati.",ctaTop:"Avvia chiamata strategica",heroChips:["Flusso principale","Qualificazione AI","Attribuzione"],heroChipValues:["Assunzione dal vivo","DM + Bot","GA4 + CRM"],flowNodes:["Google/Meta/TikTok","Atterraggio + Inseguimento","Qualificazione AI","Pipeline CRM"],heroBadges:["Monitoraggio lato server","Punteggio principale","Visualizzazione ROAS"],servicesTitle:"Servizi come moduli di sistema",servicesDesc:"Blocco di carte non uniforme: un nucleo dominante, moduli affiancati e uno strato operativo compatto.",trio:["Problema","sistema","Risultato"],detailsSummary:"Dettagli di implementazione",kpiBadgesTitle:"Badge KPI",kpiBadgesDesc:"Ogni prestazione viene valutata esclusivamente utilizzando cifre chiave che vendite e marketing possono leggere e controllare insieme.",signalLayerTitle:"Livello del segnale",signalItems:["Eventi GA4","Meta CAPI","Sincronizzazione CRM","Moda GDPR"],opsTitle:"Note operative",opsItems:["Coda di prova settimanale","Riallocazione del budget","Slot QA canalizzazione"],packagesTitle:"pacchetti in logica SaaS",recommended:"Consigliato",timelineTitle:"Come lavoriamo",stepLabel:"Passaggio",controlTitle:"Sala di controllo: risultati in tempo reale",controlPanelTitle:"Architettura del dashboard",controlPanelDesc:"I dati del canale, i segnali del funnel e lo stato del CRM convergono in un'unica visualizzazione. Le decisioni vengono prese a livello di processo anziché in base al sentimento.",miniCharts:["Volume di lead","Punteggio di qualità","Velocità dell'operazione"],kpiPanelTitle:"Contatori KPI in tempo reale",kpiLabels:["Lead qualificati","Media Prima risposta","Porta all'appuntamento","Cluster ROAS"],controlBadges:["Controllo principale","Controllo del bilancio","Controllo imbuto"],ctaBottom:"Richiedi l'ambito per il tuo sistema lead"},systems:{website:{title:"Motore del sito web",problem:"Il traffico c'è, ma gli utenti mobile abbandonano prima del modulo.",system:"Landing/Multi-pagina con GA4, Meta Pixel, tracciamento lato server, configurazione CRM e GDPR.",outcome:"Ogni lead viene registrato in modo tracciabile e chiaramente assegnato a un canale.",kpis:["tasso di tracciamento","Completamento del modulo","Chiarezza della fonte principale"],details:["Modalità di consenso configurata correttamente","Chiama ed eventi WhatsApp","Push CRM in tempo reale"]},ai:{title:"Livello di qualificazione AI",problem:"Troppe richieste non qualificate bloccano le vendite e il team telefonico.",system:"Chatbot AI, autoqualificazione, flussi DM in WhatsApp/Instagram, automazione della posta elettronica, lead scoring.",outcome:"Il team dà priorità ai lead relativi alle vendite anziché al lungo smistamento iniziale.",kpis:["Tempo di prima risposta","Condivisione di lead qualificati","Produttività del team di vendita"],details:["Percorsi rapidi specifici del settore","Promemoria mancata presentazione","Priorità in base al punteggio"]},ads:{title:"Acquisizione a pagamento",problem:"Il budget è distribuito tra i canali senza un chiaro ciclo di apprendimento.",system:"Google Ads + Meta Ads + TikTok, test A/B, lookalike, monitoraggio delle conversioni e visualizzazione ROAS.",outcome:"Il budget confluisce in campagne con un'elevata qualità dei lead invece che con un puro volume di clic.",kpis:["Costo per lead qualificato","ROAS per campagna","Tasso di vincita creatività"],details:["Cluster di campagne regionali","Varianti di forma nel test","Aggiornamenti sul pubblico basati sui segnali"]},analytics:{title:"Analisi di controllo",problem:"Le decisioni si basano sugli screenshot della piattaforma anziché su dati affidabili della canalizzazione.",system:"Cruscotto della sala di controllo con visualizzazioni canale, canalizzazione e CRM su un unico livello.",outcome:"Le decisioni settimanali su budget, ottimizzazione e ridimensionamento sono tracciabili sulla base dei dati.",kpis:["Porta all'appuntamento","Porta all'affare","Velocità della pipeline"],details:["Segmentazione per regione/servizio","Avvisi di eliminazione della canalizzazione","Elenco mensile delle ipotesi"]}},packages:[{id:"motorino di avviamento",title:"Motorino d'avviamento",scale:1,lead:"Per le imprese locali che passano da zero a una base di lead misurabile.",items:["Imbuto web + GA4","Meta Pixel + Consenso","Acquisizione CRM","Reportistica di base"],effect:"Visione chiara delle fonti di lead e processo iniziale resiliente."},{id:"crescita",title:"Crescita",scale:2,recommended:!0,lead:"Per i team con vendite attive che necessitano di lead più qualificati.",items:["Campagne Google + Meta","Flussi di qualificazione AI","Impostazione test A/B","Punteggio lead + automazione"],effect:"Domanda più qualificata con tempi di risposta migliori e chiara definizione delle priorità."},{id:"scale",title:"Scala",scale:3,lead:"Per aziende con più regioni o cluster di servizi.",items:["Controllo multicanale","Attribuzione lato server","Livello app Web Ops","Governance della sala di controllo"],effect:"Scalabilità tramite processi e dati affidabili anziché tentativi ed errori manuali."}],timeline:[["01","Chiamata strategica","Il mercato target, l'offerta e il collo di bottiglia del lead sono chiaramente definiti."],["02","Documento di ambito","Il piano dei canali, il piano di monitoraggio e le responsabilità sono fissi."],["03","Fase di costruzione","Sito web, automazioni e integrazioni implementate."],["04","Lancio","Il monitoraggio del QA, del lancio della campagna e dei flussi CRM diventa attivo."],["05","Ottimizzazione","Test settimanali per creatività, canalizzazioni e qualificazione."],["06","Ridimensionamento","I percorsi funzionanti vengono estesi a regioni/servizi."]]},gD={copy:{eyebrow:"Sistemas líderes para empresas locales en Alemania",heroTitle:["Del tráfico","clientes potenciales calificados","como sistema controlable"],heroLead:"Conectamos sitios web, inteligencia artificial, anuncios y análisis en una arquitectura operativa para que ventas, marketing y propietarios trabajen con los mismos datos.",ctaTop:"Iniciar llamada estratégica",heroChips:["Flujo de plomo","Clasificación IA","Atribución"],heroChipValues:["Ingesta viva","DM + Bot","GA4 + CRM"],flowNodes:["Google/Meta/TikTok","Aterrizaje + Seguimiento","Calificación de IA","Canal de CRM"],heroBadges:["Seguimiento del lado del servidor","Puntuación de clientes potenciales","ROAS Ver"],servicesTitle:"Servicios como módulos del sistema",servicesDesc:"No es un bloque de tarjetas uniforme: un núcleo dominante, módulos flanqueantes y una capa de operaciones compacta.",trio:["Problema","System","Resultado"],detailsSummary:"Detalles de implementación",kpiBadgesTitle:"insignias de KPI",kpiBadgesDesc:"Cada desempeño se evalúa exclusivamente utilizando cifras clave que ventas y marketing pueden leer y controlar juntos.",signalLayerTitle:"Capa de señal",signalItems:["eventos GA4","Meta CAPI","Sincronización CRM","RGPD moda"],opsTitle:"Notas de operaciones",opsItems:["Cola de prueba semanal","Reasignación de presupuesto","Ranuras de control de calidad del embudo"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Recomendado",timelineTitle:"Cómo trabajamos",stepLabel:"Paso",controlTitle:"Sala de Control: Resultados en tiempo real",controlPanelTitle:"Arquitectura del tablero",controlPanelDesc:"Los datos del canal, las señales del embudo y el estado de CRM convergen en una sola vista. Las decisiones se toman a nivel de proceso en lugar de basarse en intuiciones.",miniCharts:["Volumen de clientes potenciales","Nivel de calidad","Velocidad de negociación"],kpiPanelTitle:"Contadores de KPI en vivo",kpiLabels:["Clientes potenciales calificados","Promedio Primera respuesta","Conduce a la cita","Clústeres de ROAS"],controlBadges:["Control de plomo","Control presupuestario","Control de embudo"],ctaBottom:"Solicite alcance para su sistema principal"},systems:{website:{title:"Motor de sitio web",problem:"Hay tráfico, pero los usuarios de dispositivos móviles abandonan antes del formulario.",system:"Landing/Multi-Page con GA4, Meta Pixel, seguimiento del lado del servidor, CRM y configuración GDPR.",outcome:"Cada cliente potencial se registra de manera rastreable y se asigna claramente a un canal.",kpis:["tasa de seguimiento","Completar formulario","Claridad de la fuente principal"],details:["Modo de consentimiento configurado correctamente","Llamadas y eventos de WhatsApp","Impulso de CRM en tiempo real"]},ai:{title:"Capa de calificación de IA",problem:"Demasiadas consultas no calificadas bloquean las ventas y el equipo telefónico.",system:"Chatbot AI, calificación automática, flujos de DM en WhatsApp/Instagram, automatización de correo electrónico, puntuación de clientes potenciales.",outcome:"El equipo prioriza los clientes potenciales relacionados con las ventas en lugar de una clasificación inicial que requiere mucho tiempo.",kpis:["Primer tiempo de respuesta","Participación de clientes potenciales calificados","Rendimiento del equipo de ventas"],details:["Rutas de aviso específicas de la industria","Recordatorios de ausencia","Priorización por puntuación"]},ads:{title:"Adquisición pagada",problem:"El presupuesto se distribuye entre los canales sin un ciclo de aprendizaje claro.",system:"Google Ads + Meta Ads + TikTok, pruebas A/B, lookalikes, seguimiento de conversiones y visualización de ROAS.",outcome:"El presupuesto fluye hacia campañas con alta calidad de clientes potenciales en lugar de solo volumen de clics.",kpis:["Costo por cliente potencial calificado","ROAS por campaña","Tasa de ganancias creativas"],details:["Grupos de campañas regionales","Variantes de forma en la prueba","Actualizaciones de audiencia basadas en señales"]},analytics:{title:"Análisis de control",problem:"Las decisiones se basan en capturas de pantalla de la plataforma en lugar de datos confiables del embudo.",system:"Panel de control de sala de control con vistas de canal, embudo y CRM en un nivel.",outcome:"Las decisiones semanales sobre presupuesto, optimización y escalamiento se pueden rastrear en función de los datos.",kpis:["Conduce a la cita","Llevar a cabo un trato","Velocidad de la tubería"],details:["Segmentación por región/servicio","Alertas de caída del embudo","Lista mensual de hipótesis"]}},packages:[{id:"motor de arranque",title:"Arrancador",scale:1,lead:"Para empresas locales que pasan de cero a una base de clientes potenciales mensurable.",items:["Embudo web + GA4","Metapíxeles + Consentimiento","Captura de CRM","Informes básicos"],effect:"Visión clara de las fuentes de clientes potenciales y un proceso inicial resiliente."},{id:"crecimiento",title:"Crecimiento",scale:2,recommended:!0,lead:"Para equipos con ventas activas que necesitan más clientes potenciales calificados.",items:["Metacampañas de Google +","Flujos de calificación de IA","Configuración de prueba A/B","Puntuación de clientes potenciales + Automatización"],effect:"Demanda más calificada con mejores tiempos de respuesta y priorización clara."},{id:"scale",title:"Scale",scale:3,lead:"Para empresas con múltiples regiones o grupos de servicios.",items:["Control multicanal","Atribución del lado del servidor","Capa de aplicación web de operaciones","Gobernanza de la sala de control"],effect:"Escalar a través de procesos y datos confiables en lugar de prueba y error manual."}],timeline:[["01","Llamada estratégica","El mercado objetivo, la oferta y el cuello de botella del cliente potencial están claramente definidos."],["02","Documento de alcance","Se fijan el plan de canales, el plan de seguimiento y las responsabilidades."],["03","Fase de construcción","Sitio web, automatizaciones e integraciones implementadas."],["04","Lanzamiento","Se activa el seguimiento de control de calidad, lanzamiento de campañas y flujos de CRM."],["05","Optimización","Pruebas semanales de creatividades, embudos y calificación."],["06","Escalado","Las rutas en funcionamiento se amplían a regiones/servicios."]]},bD={copy:{eyebrow:"Ηγετικά συστήματα για τοπικές εταιρείες στη Γερμανία",heroTitle:["Από Τροχαία","πιστοποιημένοι υποψήφιοι πελάτες","ως ελεγχόμενο σύστημα"],heroLead:"Συνδέουμε ιστότοπο, τεχνητή νοημοσύνη, διαφημίσεις και αναλυτικά στοιχεία σε μία λειτουργική αρχιτεκτονική, έτσι ώστε οι πωλήσεις, το μάρκετινγκ και οι ιδιοκτήτες να λειτουργούν με τα ίδια δεδομένα.",ctaTop:"Έναρξη στρατηγικής κλήσης",heroChips:["Ροή μολύβδου","AI Qualify","Αναφορά"],heroChipValues:["Ζωντανή πρόσληψη","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Προσγείωση + Παρακολούθηση","Πιστοποίηση AI","Αγωγός CRM"],heroBadges:["Παρακολούθηση από την πλευρά του διακομιστή","Βαθμολογία Πρωτοδικών","Προβολή ROAS"],servicesTitle:"Υπηρεσίες ως λειτουργικές μονάδες συστήματος",servicesDesc:"Δεν είναι ένα ομοιόμορφο μπλοκ κάρτας: ένας κυρίαρχος πυρήνας, πλευρικές μονάδες και ένα συμπαγές επίπεδο λειτουργιών.",trio:["Πρόβλημα","σύστημα","Αποτέλεσμα"],detailsSummary:"Λεπτομέρειες υλοποίησης",kpiBadgesTitle:"Σήματα KPI",kpiBadgesDesc:"Κάθε απόδοση αξιολογείται αποκλειστικά χρησιμοποιώντας βασικά στοιχεία που οι πωλήσεις και το μάρκετινγκ μπορούν να διαβάσουν και να ελέγξουν μαζί.",signalLayerTitle:"Επίπεδο σήματος",signalItems:["Γεγονότα GA4","Meta CAPI","CRM Sync","Μόδα GDPR"],opsTitle:"Σημειώσεις λειτουργιών",opsItems:["Εβδομαδιαία ουρά δοκιμής","Ανακατανομή Προϋπολογισμού","Κουλοχέρηδες QA Funnel"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Συνιστάται",timelineTitle:"Πώς δουλεύουμε",stepLabel:"Βήμα",controlTitle:"Χώρος ελέγχου: Αποτελέσματα σε πραγματικό χρόνο",controlPanelTitle:"Αρχιτεκτονική ταμπλό",controlPanelDesc:"Τα δεδομένα καναλιού, τα σήματα διοχέτευσης και η κατάσταση CRM συγκλίνουν σε μία προβολή. Οι αποφάσεις λαμβάνονται σε επίπεδο διαδικασίας αντί να βασίζονται στην αίσθηση του εντέρου.",miniCharts:["Όγκος μολύβδου","Βαθμολογία ποιότητας","Ταχύτητα συμφωνίας"],kpiPanelTitle:"Ζωντανοί μετρητές KPI",kpiLabels:["Πιστοποιημένοι δυνητικοί πελάτες","Μέσος όρος Πρώτη απάντηση","Οδηγήστε στο ραντεβού","συστάδες απόδοσης διαφημιστικής επένδυσης (ROAS)."],controlBadges:["Έλεγχος ηλεκτροδίου","Έλεγχος προϋπολογισμού","Έλεγχος διοχέτευσης"],ctaBottom:"Αίτημα πεδίου εφαρμογής για το σύστημά σας"},systems:{website:{title:"Μηχανή ιστότοπου",problem:"Υπάρχει επισκεψιμότητα, αλλά οι χρήστες κινητών εγκαταλείπουν τη φόρμα.",system:"Landing/Multi-Page με GA4, Meta Pixel, παρακολούθηση από την πλευρά του διακομιστή, CRM και ρύθμιση GDPR.",outcome:"Κάθε υποψήφιος πελάτης καταγράφεται με ανιχνεύσιμο τρόπο και εκχωρείται σαφώς σε ένα κανάλι.",kpis:["ποσοστό παρακολούθησης","Συμπλήρωση εντύπου","Διαύγεια πηγής μολύβδου"],details:["Η λειτουργία συναίνεσης διαμορφώθηκε σωστά","Εκδηλώσεις κλήσεων και WhatsApp","CRM push σε πραγματικό χρόνο"]},ai:{title:"Επίπεδο πιστοποίησης AI",problem:"Πάρα πολλές ακατάλληλες έρευνες μπλοκάρουν τις πωλήσεις και την τηλεφωνική ομάδα.",system:"AI chatbot, αυτόματη πιστοποίηση, ροές DM σε WhatsApp/Instagram, αυτοματοποίηση email, βαθμολογία δυνητικού πελάτη.",outcome:"Η ομάδα δίνει προτεραιότητα στους δυνητικούς πελάτες που σχετίζονται με τις πωλήσεις αντί της χρονοβόρας αρχικής ταξινόμησης.",kpis:["Πρώτος χρόνος απόκρισης","Πιστοποιημένο μερίδιο δυνητικού πελάτη","Διακίνηση της Ομάδας Πωλήσεων"],details:["Διαδρομές προτροπής για συγκεκριμένο κλάδο","Χωρίς εμφάνιση υπενθυμίσεων","Προτεραιότητα ανά βαθμολογία"]},ads:{title:"Απόκτηση επί πληρωμή",problem:"Ο προϋπολογισμός κατανέμεται μεταξύ των καναλιών χωρίς σαφή βρόχο εκμάθησης.",system:"Google Ads + Meta Ads + TikTok, δοκιμές A/B, εμφανίσεις, παρακολούθηση μετατροπών και προβολή Απόδοσης Διαφημιστικής Επένδυσης.",outcome:"Ο προϋπολογισμός ρέει σε καμπάνιες με υψηλή ποιότητα δυνητικού πελάτη αντί για καθαρό όγκο κλικ.",kpis:["Κόστος ανά κατάλληλο υποψήφιο πελάτη","Απόδοση Διαφημιστικής Επένδυσης κατά Campaign","Ποσοστό κέρδους δημιουργικού"],details:["Περιφερειακές ομάδες εκστρατειών","Παραλλαγές σχήματος στη δοκιμή","Ενημερώσεις κοινού βάσει σήματος"]},analytics:{title:"Control Analytics",problem:"Οι αποφάσεις βασίζονται σε στιγμιότυπα οθόνης πλατφόρμας αντί σε αξιόπιστα δεδομένα διοχέτευσης.",system:"Πίνακας ελέγχου δωματίου με προβολές καναλιού, διοχέτευσης και CRM σε ένα επίπεδο.",outcome:"Οι εβδομαδιαίες αποφάσεις σχετικά με τον προϋπολογισμό, τη βελτιστοποίηση και την κλιμάκωση είναι ανιχνεύσιμες βάσει δεδομένων.",kpis:["Οδήγησε στο ραντεβού","Οδήγησε σε συμφωνία","Ταχύτητα αγωγού"],details:["Τμηματοποίηση ανά περιοχή/υπηρεσία","Ειδοποιήσεις πτώσης διοχέτευσης","Μηνιαία λίστα υποθέσεων"]}},packages:[{id:"μίζα",title:"Μίζα",scale:1,lead:"Για τοπικές επιχειρήσεις που πηγαίνουν από το μηδέν σε μια μετρήσιμη βάση δυνητικών πελατών.",items:["Διοχέτευση Ιστού + GA4","Meta Pixels + Consent","Λήψη CRM","Βασική αναφορά"],effect:"Καθαρή άποψη των πηγών μολύβδου και μια ανθεκτική αρχική διαδικασία."},{id:"ανάπτυξη",title:"Ανάπτυξη",scale:2,recommended:!0,lead:"Για ομάδες με ενεργές πωλήσεις που χρειάζονται περισσότερους κατάλληλους δυνητικούς πελάτες.",items:["Καμπάνιες Google + Meta","Ροές πιστοποίησης AI","Ρύθμιση δοκιμής A/B","Βαθμολογία δυνάμεων + Αυτοματισμός"],effect:"Πιο κατάλληλη ζήτηση με καλύτερους χρόνους απόκρισης και σαφή ιεράρχηση προτεραιοτήτων."},{id:"κλίμακα",title:"Κλίμακα",scale:3,lead:"Για εταιρείες με πολλές περιοχές ή ομάδες υπηρεσιών.",items:["Έλεγχος πολλαπλών καναλιών","Απόδοση από την πλευρά του διακομιστή","Επίπεδο εφαρμογής Ιστού Ops","Διακυβέρνηση της αίθουσας ελέγχου"],effect:"Κλιμάκωση μέσω διαδικασιών και αξιόπιστων δεδομένων αντί για μη αυτόματη δοκιμή και σφάλμα."}],timeline:[["01","Στρατηγική κλήση","Η αγορά-στόχος, η προσφορά και το σημείο συμφόρησης είναι σαφώς καθορισμένα."],["02","Έγγραφο πεδίου","Το σχέδιο καναλιού, το σχέδιο παρακολούθησης και οι ευθύνες έχουν διορθωθεί."],["03","Φάση κατασκευής","Ιστοσελίδα, αυτοματισμοί και ενσωματώσεις υλοποιούνται."],["04","Εκκίνηση","Παρακολούθηση QA, εκκίνηση καμπάνιας και ροές CRM εμφανίζονται ζωντανά."],["05","Βελτιστοποίηση","Εβδομαδιαίες δοκιμές για δημιουργικά, διοχετεύσεις και πιστοποίηση."],["06","Κλιμάκωση","Οι λειτουργικές διαδρομές επεκτείνονται σε περιοχές/υπηρεσίες."]]},xD={copy:{eyebrow:"Sisteme de conducere pentru companiile locale din Germania",heroTitle:["Din Trafic","clienți potențiali calificați","ca sistem controlabil"],heroLead:"Conectăm site-ul web, AI, reclamele și analizele într-o singură arhitectură operațională, astfel încât vânzările, marketingul și proprietarii să lucreze cu aceleași date.",ctaTop:"Începe apelul strategic",heroChips:["Flux de plumb","AI Calify","Atribuire"],heroChipValues:["Aportul live","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Aterizare + Urmărire","Calificare AI","CRM Pipeline"],heroBadges:["Urmărire pe partea serverului","Punctajul potențial","Vizualizare ROAS"],servicesTitle:"Servicii ca module de sistem",servicesDesc:"Nu este un bloc de carduri uniform: un nucleu dominant, module de flancare și un strat de operațiuni compact.",trio:["Problemă","System","Rezultat"],detailsSummary:"Detalii de implementare",kpiBadgesTitle:"insigne KPI",kpiBadgesDesc:"Fiecare performanță este evaluată exclusiv folosind cifre cheie pe care vânzările și marketingul le pot citi și controla împreună.",signalLayerTitle:"Strat de semnal",signalItems:["evenimente GA4","Meta CAPI","Sincronizare CRM","GDPR moda"],opsTitle:"Note operaționale",opsItems:["Coada de test săptămânală","Realocarea bugetului","Sloturi QA canal"],packagesTitle:"pachete în logica SaaS",recommended:"Recomandat",timelineTitle:"Cum lucrăm",stepLabel:"Pas",controlTitle:"Camera de control: Rezultate în timp real",controlPanelTitle:"Arhitectura tabloului de bord",controlPanelDesc:"Datele canalului, semnalele canalului și starea CRM converg într-o singură vizualizare. Deciziile sunt luate la nivel de proces în loc să se bazeze pe sentimente.",miniCharts:["Volumul de plumb","Scor de calitate","Deal Velocity"],kpiPanelTitle:"Contoare KPI live",kpiLabels:["Clienti potentiali calificati","medie Primul răspuns","Conduce la programare","clustere ROAS"],controlBadges:["Control plumb","Controlul bugetului","Control pâlnie"],ctaBottom:"Solicitați domeniul de aplicare pentru sistemul dvs. principal"},systems:{website:{title:"Motor de site",problem:"Trafic există, dar utilizatorii de telefonie mobilă abandonează înainte de formular.",system:"Landing/Multi-Page cu GA4, Meta Pixel, urmărire pe server, configurare CRM și GDPR.",outcome:"Fiecare client potențial este înregistrat într-o manieră urmăribilă și atribuit în mod clar unui canal.",kpis:["rata de urmărire","Completarea formularului","Claritatea sursei potențiale"],details:["Modul de consimțământ configurat corect","Evenimente de apel și WhatsApp","CRM push în timp real"]},ai:{title:"Stratul de calificare AI",problem:"Prea multe întrebări necalificate blochează vânzările și echipa telefonică.",system:"AI chatbot, auto-calificare, fluxuri DM în WhatsApp/Instagram, automatizare e-mail, scoring lead.",outcome:"Echipa acordă prioritate clienților potențiali legate de vânzări în loc de sortarea inițială care necesită timp.",kpis:["Timpul primului răspuns","Cotă de lead calificată","Randamentul echipei de vânzări"],details:["Căi prompte specifice industriei","No Show Mementouri","Prioritizare după scor"]},ads:{title:"Achiziție plătită",problem:"Bugetul este distribuit între canale fără o buclă clară de învățare.",system:"Google Ads + Meta Ads + TikTok, teste A/B, asemănări, urmărirea conversiilor și vizualizarea ROAS.",outcome:"Bugetul este transferat în campanii cu o calitate ridicată a clienților potențiali în loc de volumul de clicuri pur.",kpis:["Costul pe client potențial calificat","Rentabilitatea cheltuielilor publicitare în funcție de campanie","Rata de câștiguri creative"],details:["Clustere regionale de campanii","Variante de formă în test","Actualizări ale publicului bazate pe semnal"]},analytics:{title:"Control Analytics",problem:"Deciziile se bazează pe capturi de ecran ale platformei, nu pe date fiabile ale canalului.",system:"Tabloul de bord al camerei de control cu ​​vizualizări ale canalului, pâlniei și CRM la un singur nivel.",outcome:"Deciziile săptămânale privind bugetul, optimizarea și scalarea sunt urmăribile pe baza datelor.",kpis:["Conduce la numire","Conduce la tranzacție","Viteza conductei"],details:["Segmentarea pe regiune/serviciu","Alerte de aruncare a pâlniei","Lista lunară de ipoteze"]}},packages:[{id:"starter",title:"Starter",scale:1,lead:"Pentru companiile locale care trec de la zero la o bază de lead-uri măsurabilă.",items:["Canal web + GA4","Meta Pixeli + Consimțământ","CRM Capture","Raportare de bază"],effect:"Vedere clară a surselor de plumb și un proces inițial rezistent."},{id:"creștere",title:"Creștere",scale:2,recommended:!0,lead:"Pentru echipele cu vânzări active care au nevoie de clienți potențiali mai calificați.",items:["Campanii Google + Meta","Fluxuri de calificare AI","Configurare testare A/B","Lead Scoring + Automatizare"],effect:"Cerere mai calificată, cu timpi de răspuns mai buni și prioritizare clară."},{id:"scară",title:"Scară",scale:3,lead:"Pentru companii cu mai multe regiuni sau clustere de servicii.",items:["Control multicanal","Atribuire pe partea serverului","Ops Web App Layer","Guvernarea camerei de control"],effect:"Scalare prin procese și date fiabile în loc de încercări și erori manuale."}],timeline:[["01","Apel strategic","Piața țintă, oferta și blocajele de plumb sunt clar definite."],["02","Document de aplicare","Planul canalului, planul de urmărire și responsabilitățile sunt fixate."],["03","Faza de construire","Site-ul web, automatizările și integrările sunt implementate."],["04","Lansare","Urmărirea QA, lansarea campaniei și fluxurile CRM sunt disponibile."],["05","Optimizare","Teste săptămânale pentru reclame, canale și calificare."],["06","Scalare","Rutele funcționale sunt extinse la regiuni/servicii."]]},yD={copy:{eyebrow:"Лид системи за местни компании в Германия",heroTitle:["От Трафик","квалифицирани потенциални клиенти","като управляема система"],heroLead:"Ние свързваме уебсайт, AI, реклами и анализи в една оперативна архитектура, така че продажбите, маркетингът и собствениците да работят с едни и същи данни.",ctaTop:"Започнете стратегическо обаждане",heroChips:["Водещ поток","AI Квалификация","Приписване"],heroChipValues:["Прием на живо","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Кацане + Проследяване","AI квалификация","CRM тръбопровод"],heroBadges:["Проследяване от страна на сървъра","Оловно точкуване","Изглед на ROAS"],servicesTitle:"Услуги като системни модули",servicesDesc:"Не е единен картов блок: доминиращо ядро, странични модули и компактен оперативен слой.",trio:["Проблем","система","Резултат"],detailsSummary:"Подробности за внедряването",kpiBadgesTitle:"KPI значки",kpiBadgesDesc:"Всяко представяне се оценява изключително с помощта на ключови цифри, които продажбите и маркетингът могат да четат и контролират заедно.",signalLayerTitle:"Сигнален слой",signalItems:["GA4 събития","Meta CAPI","CRM синхронизиране","GDPR мода"],opsTitle:"Оперативни бележки",opsItems:["Седмична тестова опашка","Преразпределение на бюджета","Слотове за QA на фунии"],packagesTitle:"пакети в SaaS логиката",recommended:"Препоръчва се",timelineTitle:"Как работим",stepLabel:"Стъпка",controlTitle:"Контролна зала: Резултати в реално време",controlPanelTitle:"Архитектура на таблото",controlPanelDesc:"Данните за канала, сигналите във фунията и състоянието на CRM се събират в един изглед. Решенията се вземат на ниво процес, вместо на базата на усещане.",miniCharts:["Водещ обем","Качествен рейтинг","Скорост на сделката"],kpiPanelTitle:"Броячи на KPI на живо",kpiLabels:["Квалифицирани потенциални клиенти","Ср. Първи отговор","Води до среща","ROAS клъстери"],controlBadges:["Контрол на оловото","Бюджетен контрол","Контрол на фунията"],ctaBottom:"Обхват на заявката за вашата водеща система"},systems:{website:{title:"Двигател на уебсайта",problem:"Трафик има, но мобилните потребители изоставят преди формуляра.",system:"Landing/Multi-Page с GA4, Meta Pixel, проследяване от страна на сървъра, настройка на CRM и GDPR.",outcome:"Всеки потенциален клиент се записва по начин, който може да бъде проследен и ясно присвоен на канал.",kpis:["скорост на проследяване","Попълване на формуляр","Яснота на водещия източник"],details:["Режимът на съгласие е конфигуриран правилно","Обаждания и събития в WhatsApp","CRM push в реално време"]},ai:{title:"Квалификационен слой на AI",problem:"Твърде много неквалифицирани запитвания блокират продажбите и телефонния екип.",system:"AI чатбот, автоматична квалификация, DM потоци в WhatsApp/Instagram, автоматизация на имейл, точкуване за потенциални клиенти.",outcome:"Екипът дава приоритет на потенциални клиенти, свързани с продажби, вместо отнемащо време първоначално сортиране.",kpis:["Време за първа реакция","Квалифициран водещ дял","Пропускателна способност на екипа по продажбите"],details:["Специфични за индустрията подканващи пътища","Напомняния за неявяване","Приоритизиране по точки"]},ads:{title:"Платено придобиване",problem:"Бюджетът се разпределя между каналите без ясен цикъл на обучение.",system:"Google Ads + Meta Ads + TikTok, A/B тестове, lookalikes, проследяване на реализациите и изглед на ROAS.",outcome:"Бюджетът се влива в кампании с високо качество на потенциалните клиенти вместо чист обем на кликванията.",kpis:["Цена на квалифициран потенциален клиент","ROAS по кампания","Creative Win Rate"],details:["Регионални групи от кампании","Варианти на формата в теста","Актуализации на аудиторията, базирани на сигнала"]},analytics:{title:"Контролен анализ",problem:"Решенията се основават на екранни снимки на платформа вместо надеждни данни за фунията.",system:"Табло за управление на контролната зала с изгледи на канал, фуния и CRM на едно ниво.",outcome:"Седмичните решения за бюджет, оптимизация и мащабиране могат да бъдат проследени въз основа на данни.",kpis:["Води до назначаване","Води до сделка","Скорост на тръбопровода"],details:["Сегментиране по регион/услуга","Сигнали за падане на фуния","Месечен списък с хипотези"]}},packages:[{id:"стартер",title:"Стартер",scale:1,lead:"За местни фирми, преминаващи от нула към измерима потенциална база.",items:["Уеб фуния + GA4","Мета пиксели + съгласие","CRM Capture","Основно отчитане"],effect:"Ясен поглед върху източниците на олово и устойчив първоначален процес."},{id:"растеж",title:"Растеж",scale:2,recommended:!0,lead:"За екипи с активни продажби, които се нуждаят от повече квалифицирани потенциални клиенти.",items:["Google + мета кампании","AI квалификационни потоци","Настройка на A/B тестване","Водещ резултат + автоматизация"],effect:"По-квалифицирано търсене с по-добро време за реакция и ясно приоритизиране."},{id:"мащаб",title:"Мащаб",scale:3,lead:"За компании с множество региони или сервизни клъстери.",items:["Многоканален контрол","Приписване от страна на сървъра","Ops Web App Layer","Управление на контролната зала"],effect:"Мащабиране чрез процеси и надеждни данни вместо ръчни проби и грешки."}],timeline:[["01","Стратегическо обаждане","Целевият пазар, офертата и тесните места са ясно дефинирани."],["02","Документ за обхват","Планът на канала, планът за проследяване и отговорностите са фиксирани."],["03","Фаза на изграждане","Уеб сайт, автоматизации и интеграции са внедрени."],["04","Стартиране","Проследяване на QA, стартиране на кампания и CRM потоци стават активни."],["05","Оптимизация","Седмични тестове за рекламни послания, фунии и квалификация."],["06","Мащабиране","Функциониращите маршрути са разширени до региони/услуги."]]},vD={tr:uD,ar:dD,pl:fD,ku:pD,fa:hD,it:mD,es:gD,el:bD,ro:xD,bg:yD},t3=Fe`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,dn=O.div`
  padding: 48px 0 96px;

  @media (max-width: 767px) {
    padding: 24px 0 72px;
  }
`,fn=O.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
`,ai=O(ae.section).attrs({initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.22},variants:pt})`
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
`,ht=O(ae.section).attrs({initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.18},variants:pt})`
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
`,gg=O(ae.div).attrs({initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.12},variants:Dt})`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`,tu=O(ae.div).attrs({initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.12},variants:Dt})`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`,He=O(ae.article).attrs({initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:Ke})`
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
`,bg=O(He).attrs({as:ae.section})`
  margin-top: 72px;

  @media (max-width: 767px) {
    margin-top: 48px;
  }
`,Ie=O.p`
  color: rgba(255, 255, 255, 0.72);
`,aa=O.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 767px) {
    width: 100%;
    gap: 16px;
  }
`,n3=`
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
`,ra=O(ti)`
  ${n3}
  background: linear-gradient(120deg, #f39a4f, #ffe1b5, #f39a4f);
  background-size: 220% 220%;
  color: #121723;

  &:hover,
  &:focus-visible {
    color: #f8fafc;
    background: linear-gradient(120deg, #121723, #253a64, #121723);
    background-size: 220% 220%;
    animation: ${t3} 2.2s linear infinite;
    box-shadow: 0 12px 22px rgba(21, 31, 52, 0.45);
  }
`,i3=O.button`
  ${n3}
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
    animation: ${t3} 2.2s linear infinite;
    box-shadow: 0 12px 22px rgba(21, 31, 52, 0.45);
  }
`,Ft=O.span`
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
`,No=O.ul`
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
`;O.p`
  font-size: 30px;
  color: #ffd08a;
  margin: 8px 0;
`;O.div`
  display: grid;
  gap: 10px;
`;O.div`
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
`;const wD=O.form`
  display: grid;
  gap: 10px;
`,a3=O.label`
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
`,SD=Fe`
  0% { box-shadow: 0 0 0 0 rgba(58, 197, 255, 0.28); }
  70% { box-shadow: 0 0 0 14px rgba(58, 197, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(58, 197, 255, 0); }
`,TD=Fe`
  0% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(0, -8px, 0); }
  100% { transform: translate3d(0, 0, 0); }
`,jD=O(dn)`
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
`,yo=O(ae.section)`
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
`,kD=O(ae.section)`
  display: grid;
  grid-template-columns: 1.06fr 0.94fr;
  gap: clamp(24px, 3vw, 44px);
  padding-top: clamp(44px, 6vw, 80px);

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,CD=O.div`
  display: grid;
  gap: 20px;
  align-content: start;
`,ED=O.p`
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 12px;
  color: rgba(207, 233, 255, 0.8);
`,AD=O.h1`
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
`,MD=O.p`
  margin: 8px 0 18px;
  max-width: 62ch;
  color: rgba(235, 244, 255, 0.82);
  font-size: clamp(15px, 2vw, 19px);
  line-height: 1.62;
`,rv=O(ra)`
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
`,zD=O.div`
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
`,RD=O.div`
  position: absolute;
  width: 220px;
  height: 220px;
  top: -72px;
  right: -54px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(70, 198, 255, 0.35), rgba(70, 198, 255, 0));
  filter: blur(2px);
  animation: ${TD} 6.2s ease-in-out infinite;
`,LD=O.div`
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
`,OD=O(ae.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
`,eh=O(ae.div)`
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
`,DD=O(ae.div)`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 10px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`,PD=O.div`
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
`,ND=O.div`
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
`,VD=O.div`
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
`,Pc=O(ae.div)`
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
`,th=O(ae.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Ea=O(ae.span)`
  border-radius: 999px;
  padding: 7px 11px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #d8f2ff;
  border: 1px solid rgba(111, 206, 255, 0.38);
  background: rgba(22, 41, 62, 0.76);
  box-shadow: inset 0 0 12px rgba(80, 193, 255, 0.14);
`,BD=O.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,_D=O.button`
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
`,$D=O(ae.div)`
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
`,Nc=O(ae.article)`
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
`,HD=O.div`
  margin-top: 16px;
  display: grid;
  gap: 10px;
`,nh=O(ae.div)`
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
`,GD=O.details`
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
`,UD=O.div`
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
`,ID=O(ae.div)`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,FD=O(ae.article)`
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
`,qD=O.span`
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
`,KD=O.div`
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
`,YD=O.p`
  margin: 14px 0 20px;
  color: rgba(220, 238, 255, 0.84);
  line-height: 1.58;
`,XD=O(ae.ol)`
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
`,QD=O(ae.li)`
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
    animation: ${SD} 2.8s infinite;
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
`,WD=O.span`
  display: block;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(173, 216, 247, 0.82);
`,ZD=O.h3`
  margin: 8px 0 12px;
  font-size: 18px;
`,JD=O(ae.div)`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 18px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,sv=O(ae.article)`
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
`,eP=O.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Vc=O(ae.div)`
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
`,tP=O.div`
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
`,vo=O(Ie)`
  font-size: 14px;
  line-height: 1.6;
  margin: 8px 0 18px;
`,Hr={website:{title:"Website Engine",icon:d.jsx(sg,{}),problem:"Traffic ist vorhanden, aber mobile Nutzer brechen vor dem Formular ab.",system:"Landing/Multi-Page mit GA4, Meta Pixel, Server-Side Tracking, CRM und DSGVO-Setup.",outcome:"Jeder Lead wird nachvollziehbar erfasst und eindeutig einem Kanal zugeordnet.",kpis:["Tracking-Quote","Form Completion","Lead Source Clarity"],details:["Consent Mode korrekt konfiguriert","Call- und WhatsApp-Events","CRM Push in Echtzeit"]},ai:{title:"AI Qualification Layer",icon:d.jsx(Xr,{}),problem:"Zu viele unqualifizierte Anfragen blockieren Vertrieb und Telefonteam.",system:"AI-Chatbot, Auto-Qualifizierung, DM-Flows in WhatsApp/Instagram, E-Mail-Automation, Lead Scoring.",outcome:"Das Team priorisiert kaufnahe Leads statt zeitintensiver Erstsortierung.",kpis:["First Response Time","Qualified Lead Share","Sales Team Throughput"],details:["Branchenspezifische Prompt-Pfade","No-Show Reminders","Priorisierung nach Score"]},ads:{title:"Paid Acquisition",icon:d.jsx(Ha,{}),problem:"Das Budget verteilt sich ohne klare Lernschleife zwischen den Kanaelen.",system:"Google Ads + Meta Ads + TikTok, A/B Tests, Lookalikes, Conversion Tracking und ROAS-View.",outcome:"Budget fliesst in Kampagnen mit hoher Lead-Qualitaet statt in reine Klickmenge.",kpis:["Cost per Qualified Lead","ROAS by Campaign","Creative Win Rate"],details:["Regionale Kampagnencluster","Form-Varianten im Test","Signalbasierte Audience-Updates"]},analytics:{title:"Control Analytics",icon:d.jsx(Va,{}),problem:"Entscheidungen basieren auf Plattform-Screenshots statt auf belastbaren Funnel-Daten.",system:"Control-Room Dashboard mit Kanal-, Funnel- und CRM-Sicht in einer Ebene.",outcome:"Woechentliche Entscheidungen zu Budget, Optimierung und Skalierung sind datenbasiert nachvollziehbar.",kpis:["Lead to Appointment","Lead to Deal","Pipeline Velocity"],details:["Segmentierung nach Region/Service","Alerts bei Funnel Drop","Monatliche Hypothesenliste"]}},nP={website:{title:"Website Engine",icon:d.jsx(sg,{}),problem:"Трафік є, але мобільні користувачі не доходять до відправки форми.",system:"Landing або multi-page сайт з GA4, Meta Pixel, server-side tracking, CRM та DSGVO-базою.",outcome:"Кожен лід фіксується і чітко прив’язується до каналу.",kpis:["Якість трекінгу","Form Completion","Lead Source Clarity"],details:["Коректно налаштований Consent Mode","Call і WhatsApp події","CRM push у реальному часі"]},ai:{title:"AI Qualification Layer",icon:d.jsx(Xr,{}),problem:"Надто багато нецільових звернень перевантажують продажі й телефонну лінію.",system:"AI-чатбот, автокваліфікація, DM-flow у WhatsApp/Instagram, email-автоматизація та lead scoring.",outcome:"Команда в першу чергу працює з лідами, які ближчі до покупки.",kpis:["First Response Time","Qualified Lead Share","Sales Team Throughput"],details:["Промпт-потоки під нішу","No-show нагадування","Пріоритезація за scoring"]},ads:{title:"Paid Acquisition",icon:d.jsx(Ha,{}),problem:"Бюджет розподіляється між каналами без стабільної логіки навчання.",system:"Google Ads + Meta Ads + TikTok, A/B тести, lookalike аудиторії, conversion tracking і ROAS-аналіз.",outcome:"Бюджет іде в кампанії з кращою якістю лідів, а не просто в кліки.",kpis:["Cost per Qualified Lead","ROAS by Campaign","Creative Win Rate"],details:["Регіональні кластери кампаній","Тести варіантів форм","Оновлення аудиторій за сигналами"]},analytics:{title:"Control Analytics",icon:d.jsx(Va,{}),problem:"Рішення приймаються за скріншотами платформ, а не за даними воронки.",system:"Control-room dashboard з єдиним шаром каналів, воронки та CRM.",outcome:"Щотижневі рішення щодо бюджету й оптимізації приймаються на основі даних.",kpis:["Lead to Appointment","Lead to Deal","Pipeline Velocity"],details:["Сегментація за регіоном і послугою","Алерти при просіданні funnel","Щомісячний backlog гіпотез"]}},r3=[{id:"starter",title:"Starter",scale:1,lead:"Fuer lokale Betriebe, die von null auf eine messbare Lead-Basis gehen.",items:["Web-Funnel + GA4","Meta Pixel + Consent","CRM Capture","Basis-Reporting"],effect:"Klare Sicht auf Lead-Quellen und ein belastbarer Erstprozess."},{id:"growth",title:"Growth",scale:2,recommended:!0,lead:"Fuer Teams mit aktivem Vertrieb, die mehr qualifizierte Leads brauchen.",items:["Google + Meta Kampagnen","AI Qualification Flows","A/B Testing Setup","Lead Scoring + Automation"],effect:"Mehr qualifizierte Nachfrage bei besserer Reaktionszeit und sauberer Priorisierung."},{id:"scale",title:"Scale",scale:3,lead:"Fuer Unternehmen mit mehreren Regionen oder Leistungsclustern.",items:["Multi-Channel Steuerung","Server-Side Attribution","Ops Web-App Layer","Control-Room Governance"],effect:"Skalierung ueber Prozesse und belastbare Daten statt manuellem Trial-and-Error."}],iP=[{id:"starter",title:"Starter",scale:1,lead:"Для локального бізнесу, який переходить від нуля до вимірюваної lead-системи.",items:["Web-funnel + GA4","Meta Pixel + Consent","CRM Capture","Базова аналітика"],effect:"Прозора картина джерел лідів і робочий базовий процес."},{id:"growth",title:"Growth",scale:2,recommended:!0,lead:"Для команд з активним продажем, яким потрібні якісніші ліди.",items:["Google + Meta кампанії","AI Qualification Flows","A/B Testing Setup","Lead Scoring + Automation"],effect:"Більше кваліфікованого попиту та швидша реакція команди."},{id:"scale",title:"Scale",scale:3,lead:"Для компаній з кількома регіонами або кластерами послуг.",items:["Multi-channel керування","Server-side attribution","Ops Web-App Layer","Control-Room Governance"],effect:"Масштабування через процеси та дані замість ручного trial-and-error."}],s3=[["01","Strategischer Call","Zielmarkt, Angebot und Lead-Engpass werden klar definiert."],["02","Scope Dokument","Kanalplan, Tracking-Plan und Verantwortlichkeiten werden fixiert."],["03","Build Phase","Website, Automationen und Integrationen werden umgesetzt."],["04","Launch","Tracking QA, Kampagnenstart und CRM-Flows gehen live."],["05","Optimierung","Woechentliche Tests fuer Creatives, Funnel und Qualifizierung."],["06","Skalierung","Funktionierende Strecken werden auf Regionen/Leistungen erweitert."]],aP=[["01","Стратегічний дзвінок","Фіксуємо ринок, офер і головні вузькі місця у lead-процесі."],["02","Scope документ","Узгоджуємо канали, tracking-план і відповідальності."],["03","Етап розробки","Реалізуємо сайт, автоматизації й інтеграції."],["04","Запуск","Робимо QA трекінгу, запускаємо кампанії та CRM-flow."],["05","Оптимізація","Щотижнево тестуємо креативи, воронку та логіку кваліфікації."],["06","Масштабування","Робочі зв’язки переносимо на нові регіони й послуги."]],o3={eyebrow:"Lead-Systeme fuer lokale Unternehmen in Deutschland",heroTitle:["Aus Traffic","qualifizierte Leads","als steuerbares System"],heroLead:"Wir verbinden Website, AI, Ads und Analytics in einer operativen Architektur, damit Vertrieb, Marketing und Inhaber mit denselben Daten arbeiten.",ctaTop:"Strategischen Call starten",heroChips:["Lead Flow","AI Qualify","Attribution"],heroChipValues:["Live Intake","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Landing + Tracking","AI Qualification","CRM Pipeline"],heroBadges:["Server-Side Tracking","Lead Scoring","ROAS View"],servicesTitle:"Leistungen als System-Module",servicesDesc:"Kein gleichfoermiger Kartenblock: ein dominanter Kern, flankierende Module und ein kompakter Operations-Layer.",trio:["Problem","System","Outcome"],detailsSummary:"Implementierungsdetails",kpiBadgesTitle:"KPI Badges",kpiBadgesDesc:"Jede Leistung wird ausschliesslich ueber Kennzahlen bewertet, die Sales und Marketing gemeinsam lesen und steuern koennen.",signalLayerTitle:"Signal Layer",signalItems:["GA4 Events","Meta CAPI","CRM Sync","DSGVO Mode"],opsTitle:"Ops Notes",opsItems:["Weekly Test Queue","Budget Reallocation","Funnel QA Slots"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Empfohlen",timelineTitle:"Wie wir arbeiten",stepLabel:"Step",controlTitle:"Control Room: Ergebnisse in Echtzeit",controlPanelTitle:"Dashboard Architektur",controlPanelDesc:"Kanaldaten, Funnel-Signale und CRM-Status laufen in einer Ansicht zusammen. Entscheidungen erfolgen auf Prozessebene statt aus dem Bauchgefuehl.",miniCharts:["Lead Volume","Quality Score","Deal Velocity"],kpiPanelTitle:"Live KPI Counters",kpiLabels:["Qualified Leads","Avg. First Response","Lead to Termin","ROAS Cluster"],controlBadges:["Lead Kontrolle","Budget Kontrolle","Funnel Kontrolle"],ctaBottom:"Scope fuer Ihr Lead-System anfragen"},rP={eyebrow:"Lead-системи для локального бізнесу в Німеччині",heroTitle:["З трафіку","у кваліфіковані ліди","як керовану систему"],heroLead:"Поєднуємо сайт, AI, рекламу та аналітику в єдину операційну архітектуру, щоб маркетинг, продажі й власник працювали з одними даними.",ctaTop:"Запустити стратегічний дзвінок",heroChips:["Lead Flow","AI Qualify","Attribution"],heroChipValues:["Live Intake","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Landing + Tracking","AI Qualification","CRM Pipeline"],heroBadges:["Server-Side Tracking","Lead Scoring","ROAS View"],servicesTitle:"Послуги як модулі системи",servicesDesc:"Не одноманітні картки, а система: домінантне ядро, підтримуючі модулі та компактний операційний шар.",trio:["Проблема","Система","Результат"],detailsSummary:"Деталі реалізації",kpiBadgesTitle:"KPI Badges",kpiBadgesDesc:"Кожну послугу оцінюємо тільки за метриками, які спільно читають маркетинг і продажі.",signalLayerTitle:"Signal Layer",signalItems:["GA4 Events","Meta CAPI","CRM Sync","DSGVO Mode"],opsTitle:"Ops Notes",opsItems:["Weekly Test Queue","Budget Reallocation","Funnel QA Slots"],packagesTitle:"Пакети в SaaS-логіці",recommended:"Рекомендовано",timelineTitle:"Як ми працюємо",stepLabel:"Крок",controlTitle:"Control Room: результати в реальному часі",controlPanelTitle:"Архітектура дашборду",controlPanelDesc:"Дані каналів, сигнали воронки та CRM-статуси зібрані в одному view. Рішення приймаються на рівні процесу, а не інтуїтивно.",miniCharts:["Lead Volume","Quality Score","Deal Velocity"],kpiPanelTitle:"Live KPI Counters",kpiLabels:["Qualified Leads","Avg. First Response","Lead to Termin","ROAS Cluster"],controlBadges:["Контроль лідів","Контроль бюджету","Контроль воронки"],ctaBottom:"Запросити scope для вашої lead-системи"},we=vD,qn=e=>({website:{...Hr.website,...e.website},ai:{...Hr.ai,...e.ai},ads:{...Hr.ads,...e.ads},analytics:{...Hr.analytics,...e.analytics}}),sP={de:Hr,uk:nP,tr:qn(we.tr.systems),ar:qn(we.ar.systems),pl:qn(we.pl.systems),ku:qn(we.ku.systems),fa:qn(we.fa.systems),it:qn(we.it.systems),es:qn(we.es.systems),el:qn(we.el.systems),ro:qn(we.ro.systems),bg:qn(we.bg.systems)},oP={de:r3,uk:iP,tr:we.tr.packages,ar:we.ar.packages,pl:we.pl.packages,ku:we.ku.packages,fa:we.fa.packages,it:we.it.packages,es:we.es.packages,el:we.el.packages,ro:we.ro.packages,bg:we.bg.packages},lP={de:s3,uk:aP,tr:we.tr.timeline,ar:we.ar.timeline,pl:we.pl.timeline,ku:we.ku.timeline,fa:we.fa.timeline,it:we.it.timeline,es:we.es.timeline,el:we.el.timeline,ro:we.ro.timeline,bg:we.bg.timeline},cP={de:o3,uk:rP,tr:we.tr.copy,ar:we.ar.copy,pl:we.pl.copy,ku:we.ku.copy,fa:we.fa.copy,it:we.it.copy,es:we.es.copy,el:we.el.copy,ro:we.ro.copy,bg:we.bg.copy},uP=["34%","52%","47%","70%","62%","85%","73%"],dP=()=>{const{i18n:e}=Ge(),t=(e.resolvedLanguage||e.language||"de").split("-")[0],i=cP[t]??o3,a=sP[t]??Hr,o=oP[t]??r3,l=lP[t]??s3,[u,f]=C.useState("website"),p=C.useMemo(()=>a[u],[u,a]);return d.jsx(jD,{children:d.jsxs(fn,{children:[d.jsxs(kD,{initial:"hidden",animate:"visible",variants:Dt,children:[d.jsxs(CD,{as:ae.div,variants:Rc,children:[d.jsx(ED,{children:i.eyebrow}),d.jsxs(AD,{children:[d.jsx("span",{children:i.heroTitle[0]}),d.jsx("span",{children:i.heroTitle[1]}),d.jsx("span",{children:i.heroTitle[2]})]}),d.jsx(MD,{children:i.heroLead}),d.jsx(aa,{children:d.jsxs(rv,{to:"/kontakt",children:[d.jsx(Nn,{})," ",i.ctaTop]})})]}),d.jsxs(zD,{as:ae.div,variants:Wi,children:[d.jsx(RD,{}),d.jsxs(LD,{children:[d.jsxs(OD,{variants:Dt,initial:"hidden",animate:"visible",children:[d.jsxs(eh,{variants:Ke,children:[d.jsx("span",{children:i.heroChips[0]}),d.jsx("b",{children:d.jsx(_a,{text:i.heroChipValues[0],durationMs:1400,storageKey:"hero_lead_flow"})})]}),d.jsxs(eh,{variants:Ke,children:[d.jsx("span",{children:i.heroChips[1]}),d.jsx("b",{children:i.heroChipValues[1]})]}),d.jsxs(eh,{variants:Ke,children:[d.jsx("span",{children:i.heroChips[2]}),d.jsx("b",{children:i.heroChipValues[2]})]})]}),d.jsxs(DD,{variants:Dt,initial:"hidden",animate:"visible",children:[d.jsx(PD,{children:d.jsx(ND,{children:uP.map((m,g)=>d.jsx(ae.span,{style:{height:m},animate:{scaleY:[.78,1.08,.9,1.02,.78],opacity:[.78,1,.86,.96,.78]},transition:{duration:2.6,delay:g*.16,repeat:1/0,ease:"easeInOut"}},m+g))})}),d.jsxs(VD,{children:[d.jsx(Pc,{variants:Wi,children:i.flowNodes[0]}),d.jsx(Pc,{variants:Wi,children:i.flowNodes[1]}),d.jsx(Pc,{variants:Wi,children:i.flowNodes[2]}),d.jsx(Pc,{variants:Wi,children:i.flowNodes[3]})]})]}),d.jsxs(th,{variants:Dt,initial:"hidden",animate:"visible",children:[d.jsx(Ea,{variants:Ke,children:i.heroBadges[0]}),d.jsx(Ea,{variants:Ke,children:i.heroBadges[1]}),d.jsx(Ea,{variants:Ke,children:i.heroBadges[2]})]})]})]})]}),d.jsxs(yo,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:pt,children:[d.jsx("h2",{children:i.servicesTitle}),d.jsx(vo,{children:i.servicesDesc}),d.jsx(BD,{children:Object.keys(a).map(m=>d.jsx(_D,{$active:u===m,onClick:()=>f(m),children:a[m].title},m))}),d.jsxs($D,{variants:Dt,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.16},children:[d.jsxs(Nc,{$area:"dominant",$featured:!0,variants:Rc,children:[d.jsxs("h3",{children:[d.jsx(Ft,{children:p.icon}),p.title]}),d.jsxs(HD,{children:[d.jsxs(nh,{variants:pt,children:[d.jsx("strong",{children:i.trio[0]}),d.jsx("span",{children:p.problem})]}),d.jsxs(nh,{variants:pt,children:[d.jsx("strong",{children:i.trio[1]}),d.jsx("span",{children:p.system})]}),d.jsxs(nh,{variants:pt,children:[d.jsx("strong",{children:i.trio[2]}),d.jsx("span",{children:p.outcome})]})]}),d.jsxs(GD,{children:[d.jsx("summary",{children:i.detailsSummary}),d.jsx("ul",{children:p.details.map(m=>d.jsx("li",{children:m},m))})]})]}),d.jsxs(Nc,{$area:"mediumA",variants:pt,children:[d.jsxs("h3",{children:[d.jsx(Ft,{children:d.jsx(pu,{})}),i.kpiBadgesTitle]}),d.jsx(th,{variants:Dt,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:p.kpis.map(m=>d.jsx(Ea,{variants:Ke,children:m},m))}),d.jsx(vo,{style:{marginTop:12},children:i.kpiBadgesDesc})]}),d.jsxs(Nc,{$area:"mediumB",variants:Wi,children:[d.jsxs("h3",{children:[d.jsx(Ft,{children:d.jsx(Ko,{})}),i.signalLayerTitle]}),d.jsxs(UD,{children:[d.jsxs("span",{children:[d.jsx(Qe,{})," ",i.signalItems[0]]}),d.jsxs("span",{children:[d.jsx(Qe,{})," ",i.signalItems[1]]}),d.jsxs("span",{children:[d.jsx(Qe,{})," ",i.signalItems[2]]}),d.jsxs("span",{children:[d.jsx(Qe,{})," ",i.signalItems[3]]})]})]}),d.jsxs(Nc,{$area:"compact",$compact:!0,variants:Ke,children:[d.jsxs("h3",{children:[d.jsx(Ft,{children:d.jsx(Hu,{})}),i.opsTitle]}),d.jsxs(No,{children:[d.jsxs("li",{children:[d.jsx(Qe,{})," ",i.opsItems[0]]}),d.jsxs("li",{children:[d.jsx(Qe,{})," ",i.opsItems[1]]}),d.jsxs("li",{children:[d.jsx(Qe,{})," ",i.opsItems[2]]})]})]})]})]}),d.jsxs(yo,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:pt,children:[d.jsx("h2",{children:i.packagesTitle}),d.jsx(ID,{variants:Dt,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.16},children:o.map(m=>d.jsxs(FD,{$recommended:m.recommended,variants:m.recommended?Ke:pt,children:[m.recommended?d.jsx(qD,{children:i.recommended}):null,d.jsx("h3",{children:m.title}),d.jsx(YD,{children:m.lead}),d.jsx(No,{children:m.items.map(g=>d.jsxs("li",{children:[d.jsx(Qe,{})," ",g]},g))}),d.jsxs(KD,{children:[d.jsx("i",{className:m.scale>=1?"on":""}),d.jsx("i",{className:m.scale>=2?"on":""}),d.jsx("i",{className:m.scale>=3?"on":""})]}),d.jsx(vo,{style:{marginTop:12},children:m.effect})]},m.id))})]}),d.jsxs(yo,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:pt,children:[d.jsx("h2",{children:i.timelineTitle}),d.jsx(XD,{variants:Dt,children:l.map(m=>d.jsxs(QD,{variants:Number(m[0])%2===0?Wi:Rc,children:[d.jsxs(WD,{children:[i.stepLabel," ",m[0]]}),d.jsx(ZD,{children:m[1]}),d.jsx(vo,{children:m[2]})]},m[0]))})]}),d.jsxs(yo,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:pt,children:[d.jsx("h2",{children:i.controlTitle}),d.jsxs(JD,{variants:Dt,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.18},children:[d.jsxs(sv,{variants:Rc,children:[d.jsx("h3",{children:i.controlPanelTitle}),d.jsx(vo,{children:i.controlPanelDesc}),d.jsxs(tP,{children:[d.jsxs("div",{children:[i.miniCharts[0],d.jsx("i",{style:{width:"68%"}})]}),d.jsxs("div",{children:[i.miniCharts[1],d.jsx("i",{style:{width:"82%"}})]}),d.jsxs("div",{children:[i.miniCharts[2],d.jsx("i",{style:{width:"59%"}})]})]})]}),d.jsxs(sv,{variants:Wi,children:[d.jsx("h3",{children:i.kpiPanelTitle}),d.jsxs(eP,{children:[d.jsxs(Vc,{variants:Ke,children:[d.jsx("span",{children:i.kpiLabels[0]}),d.jsx("strong",{children:d.jsx(Dc,{start:0,max:38,durationMs:1800,storageKey:"metric_ql"})})]}),d.jsxs(Vc,{variants:Ke,children:[d.jsx("span",{children:i.kpiLabels[1]}),d.jsx("strong",{children:d.jsx(Dc,{start:0,max:11,suffix:"m",durationMs:1700,storageKey:"metric_rt"})})]}),d.jsxs(Vc,{variants:Ke,children:[d.jsx("span",{children:i.kpiLabels[2]}),d.jsx("strong",{children:d.jsx(Dc,{start:0,max:43,suffix:"%",durationMs:1900,storageKey:"metric_l2a"})})]}),d.jsxs(Vc,{variants:Ke,children:[d.jsx("span",{children:i.kpiLabels[3]}),d.jsx("strong",{children:d.jsx(Dc,{start:0,max:3.8,decimals:1,prefix:"x",durationMs:2100,storageKey:"metric_roas"})})]})]}),d.jsxs(th,{style:{marginTop:12},variants:Dt,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[d.jsx(Ea,{variants:Ke,children:i.controlBadges[0]}),d.jsx(Ea,{variants:Ke,children:i.controlBadges[1]}),d.jsx(Ea,{variants:Ke,children:i.controlBadges[2]})]})]})]})]}),d.jsx(yo,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:pt,children:d.jsx(aa,{children:d.jsxs(rv,{to:"/kontakt",children:[d.jsx(Nn,{})," ",i.ctaBottom]})})})]})})},fP={hidden:{opacity:0,y:24},show:{opacity:1,y:0}},pP=Fe`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`,hP=Fe`
  0% { box-shadow: 0 0 0 rgba(73, 157, 255, 0); }
  50% { box-shadow: 0 0 30px rgba(73, 157, 255, 0.28); }
  100% { box-shadow: 0 0 0 rgba(73, 157, 255, 0); }
`,mP=O.div`
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
`,gP=O.section`
  display: grid;
  gap: 26px;
  grid-template-columns: 1.15fr 1fr;
  align-items: center;
  padding: 84px 0 24px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    padding-top: 52px;
  }
`,bP=O.div`
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
`,xP=O.span`
  color: #ffd08a;
  text-shadow: 0 0 28px rgba(255, 193, 104, 0.34);
`,yP=O.div`
  margin-top: 24px;
`,l3=O(ra)`
  min-height: 54px;
  padding: 0 28px;
  border: 1px solid rgba(255, 202, 128, 0.35);
  box-shadow: 0 10px 24px rgba(18, 33, 58, 0.34);

  &:hover,
  &:focus-visible {
    box-shadow: 0 0 0 1px rgba(255, 213, 150, 0.55), 0 16px 30px rgba(255, 183, 77, 0.28);
  }
`,vP=O(ae.div)`
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
`,wP=O.div`
  position: absolute;
  inset: 22px;
  display: grid;
  gap: 12px;
`,ih=O.div`
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
`,ah=O.div`
  flex: 1;
  height: 9px;
  margin-left: 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
`,rh=O(ae.div)`
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #3f8cff, #76b8ff);
`,SP=O(ae.div)`
  margin-top: 4px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(7, 11, 22, 0.7);
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  animation: ${pP} 5.2s ease-in-out infinite;
`,wo=O(ae.div)`
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
`,TP=O(ht)`
  margin-top: 26px;
`,jP=O.div`
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.86), rgba(10, 16, 30, 0.82));
  padding: 18px;
  box-shadow: 0 20px 54px rgba(5, 9, 18, 0.5);
`,kP=O.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,So=O(ae.div)`
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
`,CP=O.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 10px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,EP=O.div`
  display: inline-flex;
  gap: 6px;
  margin-top: 14px;
  margin-bottom: 8px;
  padding: 6px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(11, 17, 32, 0.72);
`,ov=O.button`
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
`,AP=O(ae.article)`
  position: relative;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(11, 17, 32, 0.78);
  padding: ${({$recommended:e})=>e?"24px":"20px"};
  box-shadow: ${({$recommended:e})=>e?"0 22px 60px rgba(32, 78, 148, 0.36)":"0 14px 34px rgba(5, 9, 18, 0.45)"};
  transform: ${({$recommended:e})=>e?"translateY(-6px)":"none"};
  border-color: ${({$recommended:e})=>e?"rgba(118, 182, 255, 0.68)":"rgba(255, 255, 255, 0.14)"};
  animation: ${({$recommended:e})=>e?hP:"none"} 4.6s ease-in-out infinite;

  &:hover {
    transform: ${({$recommended:e})=>e?"translateY(-9px)":"translateY(-5px)"};
    border-color: rgba(245, 195, 120, 0.58);
  }
`,MP=O.span`
  position: absolute;
  right: 16px;
  top: 14px;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 999px;
  background: linear-gradient(120deg, rgba(118, 182, 255, 0.24), rgba(255, 206, 132, 0.24));
  border: 1px solid rgba(153, 201, 255, 0.45);
`,zP=O.div`
  font-size: 34px;
  font-weight: 800;
  line-height: 1;
  margin: 10px 0 3px;
  color: #ffd28f;
`,RP=O.div`
  color: rgba(255, 255, 255, 0.66);
  font-size: 13px;
`,sh=O.div`
  margin-top: 14px;
  margin-bottom: 8px;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.58);
`,oh=O.ul`
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
`,LP=O.div`
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
`,OP=O.div`
  margin-top: 16px;
  padding: 16px;
  border-radius: 14px;
  border: 1px solid rgba(118, 182, 255, 0.2);
  background:
    linear-gradient(180deg, rgba(17, 27, 49, 0.82), rgba(10, 16, 31, 0.84)),
    radial-gradient(circle at top right, rgba(255, 206, 132, 0.12), transparent 42%);
`,DP=O.div`
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.58);
`,PP=O.div`
  margin-top: 8px;
  font-size: 28px;
  line-height: 1.05;
  font-weight: 800;
  color: #8fc5ff;
`,NP=O.div`
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 13px;
`,VP=O.div`
  margin-top: 12px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  overflow: hidden;
  background: rgba(11, 17, 32, 0.7);
`,BP=O.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: 12px 16px;
  gap: 8px;
  background: rgba(255, 255, 255, 0.06);
  font-weight: 700;
`,Or=O.div`
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
`,zn=O.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;

  svg {
    color: #8ec4ff;
  }
`,_P=O.div`
  margin-top: 12px;
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,lh=O.div`
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
`,$P=O.section`
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
`,HP=O(l3)`
  margin-top: 20px;
  min-height: 58px;
  padding: 0 32px;
  font-size: 16px;
`,GP=()=>{const{t:e}=Ge(),[t,i]=C.useState("monthly"),o=["starter","business","pro"].map(l=>({key:l,recommended:l==="business",name:e(`pricing.packages.${l}.name`),desc:e(`pricing.packages.${l}.desc`),price:e(`pricing.packages.${l}.price`),range:e(`pricing.packages.${l}.range`),core:e(`pricing.packages.${l}.core`,{returnObjects:!0}),plus:e(`pricing.packages.${l}.plus`,{returnObjects:!0}),outcome:e(`pricing.packages.${l}.outcome`),subscriptionPrice:e(`pricing.packages.${l}.subscription.${t}.price`),subscriptionMeta:e(`pricing.packages.${l}.subscription.${t}.meta`),subscriptionItems:e(`pricing.packages.${l}.subscription.includes`,{returnObjects:!0})}));return d.jsx(dn,{children:d.jsx(fn,{children:d.jsxs(mP,{children:[d.jsxs(gP,{as:ae.section,initial:"hidden",animate:"show",variants:fP,transition:{duration:.64,ease:Cn},children:[d.jsxs(bP,{children:[d.jsxs("h1",{children:[e("pricing.hero.titleLine1"),d.jsx("br",{}),e("pricing.hero.titleLine2"),d.jsx("br",{}),d.jsx(xP,{children:e("pricing.hero.titleLine3")})]}),d.jsx("p",{children:e("pricing.hero.subtitle")}),d.jsx(yP,{children:d.jsxs(l3,{to:"/kontakt",children:[d.jsx(Nn,{})," ",e("pricing.hero.cta")]})})]}),d.jsx(vP,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.7,delay:.12},children:d.jsxs(wP,{children:[d.jsxs(ih,{children:[d.jsx("strong",{children:e("pricing.hero.metrics.leadVolume")}),d.jsx(ah,{children:d.jsx(rh,{initial:{width:"22%"},animate:{width:["22%","72%","58%","72%"]},transition:{duration:6,delay:.35,repeat:1/0,ease:"easeInOut"}})})]}),d.jsxs(ih,{children:[d.jsx("strong",{children:e("pricing.hero.metrics.qualifiedLeads")}),d.jsx(ah,{children:d.jsx(rh,{initial:{width:"18%"},animate:{width:["18%","61%","49%","61%"]},transition:{duration:5.6,delay:.48,repeat:1/0,ease:"easeInOut"}})})]}),d.jsxs(ih,{children:[d.jsx("strong",{children:e("pricing.hero.metrics.costPerLead")}),d.jsx(ah,{children:d.jsx(rh,{initial:{width:"76%"},animate:{width:["76%","42%","54%","42%"]},transition:{duration:6.2,delay:.62,repeat:1/0,ease:"easeInOut"}})})]}),d.jsxs(SP,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.6,delay:.7},children:[d.jsxs(wo,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut"},children:[d.jsx(Hh,{}),e("pricing.hero.funnel.traffic")]}),d.jsxs(wo,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut",delay:.25},children:[d.jsx(pu,{}),e("pricing.hero.funnel.landing")]}),d.jsxs(wo,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut",delay:.5},children:[d.jsx(mu,{}),e("pricing.hero.funnel.leads")]}),d.jsxs(wo,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut",delay:.75},children:[d.jsx(Ko,{}),e("pricing.hero.funnel.crm")]}),d.jsxs(wo,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut",delay:1},children:[d.jsx(Va,{}),e("pricing.hero.funnel.sales")]})]})]})})]}),d.jsxs(TP,{children:[d.jsx("h2",{children:e("pricing.flow.title")}),d.jsx(jP,{children:d.jsxs(kP,{children:[d.jsxs(So,{whileHover:{y:-3},children:[d.jsx(Hh,{}),e("pricing.flow.steps.traffic")]}),d.jsxs(So,{whileHover:{y:-3},children:[d.jsx(pu,{}),e("pricing.flow.steps.landing")]}),d.jsxs(So,{whileHover:{y:-3},children:[d.jsx(mu,{}),e("pricing.flow.steps.capture")]}),d.jsxs(So,{whileHover:{y:-3},children:[d.jsx(Ko,{}),e("pricing.flow.steps.crm")]}),d.jsxs(So,{whileHover:{y:-3},children:[d.jsx(Va,{}),e("pricing.flow.steps.sales")]})]})})]}),d.jsxs(ht,{children:[d.jsx("h2",{children:e("pricing.packages.title")}),d.jsxs(EP,{role:"tablist","aria-label":e("pricing.packages.subscriptionTitle"),children:[d.jsx(ov,{type:"button",$active:t==="monthly",onClick:()=>i("monthly"),children:e("pricing.packages.billing.monthly")}),d.jsx(ov,{type:"button",$active:t==="yearly",onClick:()=>i("yearly"),children:e("pricing.packages.billing.yearly")})]}),d.jsx(CP,{children:o.map(l=>d.jsxs(AP,{$recommended:l.recommended,whileHover:{y:l.recommended?-6:-4},transition:{duration:.25},children:[l.recommended?d.jsx(MP,{children:e("pricing.packages.badge")}):null,d.jsx("h3",{children:l.name}),d.jsx("p",{children:l.desc}),d.jsx(zP,{children:l.price}),d.jsx(RP,{children:l.range}),d.jsx(sh,{children:e("pricing.packages.coreTitle")}),d.jsx(oh,{children:l.core.map(u=>d.jsxs("li",{children:[d.jsx(It,{})," ",u]},u))}),d.jsx(sh,{children:e("pricing.packages.plusTitle")}),d.jsx(oh,{children:l.plus.map(u=>d.jsxs("li",{children:[d.jsx(It,{})," ",u]},u))}),d.jsxs(OP,{children:[d.jsx(DP,{children:e("pricing.packages.subscriptionTitle")}),d.jsx(PP,{children:l.subscriptionPrice}),d.jsx(NP,{children:l.subscriptionMeta}),d.jsx(sh,{children:e("pricing.packages.subscriptionIncludesTitle")}),d.jsx(oh,{children:l.subscriptionItems.map(u=>d.jsxs("li",{children:[d.jsx(It,{})," ",u]},u))})]}),d.jsxs(LP,{children:[d.jsx("strong",{children:e("pricing.packages.outcomeLabel")})," ",l.outcome]})]},l.key))})]}),d.jsxs(ht,{children:[d.jsx("h2",{children:e("pricing.comparison.title")}),d.jsxs(VP,{children:[d.jsxs(BP,{children:[d.jsx("span",{children:e("pricing.comparison.headers.feature")}),d.jsx("span",{children:e("pricing.comparison.headers.starter")}),d.jsx("span",{children:e("pricing.comparison.headers.business")}),d.jsx("span",{children:e("pricing.comparison.headers.pro")})]}),d.jsxs(Or,{children:[d.jsx("span",{children:e("pricing.comparison.rows.landing")}),d.jsxs(zn,{children:[d.jsx(It,{})," ",e("pricing.comparison.yes")]}),d.jsxs(zn,{children:[d.jsx(It,{})," ",e("pricing.comparison.yes")]}),d.jsxs(zn,{children:[d.jsx(It,{})," ",e("pricing.comparison.yes")]})]}),d.jsxs(Or,{children:[d.jsx("span",{children:e("pricing.comparison.rows.multi")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsxs(zn,{children:[d.jsx(It,{})," ",e("pricing.comparison.yes")]}),d.jsxs(zn,{children:[d.jsx(It,{})," ",e("pricing.comparison.yes")]})]}),d.jsxs(Or,{children:[d.jsx("span",{children:e("pricing.comparison.rows.crm")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsxs(zn,{children:[d.jsx(It,{})," ",e("pricing.comparison.yes")]}),d.jsxs(zn,{children:[d.jsx(It,{})," ",e("pricing.comparison.yes")]})]}),d.jsxs(Or,{children:[d.jsx("span",{children:e("pricing.comparison.rows.ai")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsxs(zn,{children:[d.jsx(It,{})," ",e("pricing.comparison.yes")]})]}),d.jsxs(Or,{children:[d.jsx("span",{children:e("pricing.comparison.rows.ads")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsxs(zn,{children:[d.jsx(It,{})," ",e("pricing.comparison.yes")]})]}),d.jsxs(Or,{children:[d.jsx("span",{children:e("pricing.comparison.rows.dashboard")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsxs(zn,{children:[d.jsx(It,{})," ",e("pricing.comparison.yes")]}),d.jsxs(zn,{children:[d.jsx(It,{})," ",e("pricing.comparison.yes")]})]})]})]}),d.jsxs(ht,{children:[d.jsx("h2",{children:e("pricing.trust.title")}),d.jsxs(_P,{children:[d.jsxs(lh,{children:[d.jsx(IE,{}),d.jsx("strong",{children:e("pricing.trust.delivery.title")}),d.jsx("p",{children:e("pricing.trust.delivery.desc")})]}),d.jsxs(lh,{children:[d.jsx(nA,{}),d.jsx("strong",{children:e("pricing.trust.support.title")}),d.jsx("p",{children:e("pricing.trust.support.desc")})]}),d.jsxs(lh,{children:[d.jsx(JE,{}),d.jsx("strong",{children:e("pricing.trust.dsgvo.title")}),d.jsx("p",{children:e("pricing.trust.dsgvo.desc")})]})]})]}),d.jsxs($P,{children:[d.jsx("h2",{children:e("pricing.final.title")}),d.jsx("p",{children:e("pricing.final.subtitle")}),d.jsxs(HP,{to:"/kontakt",children:[d.jsx(Nn,{})," ",e("pricing.final.cta")]})]})]})})})},lv="/assets/photo_2025-09-16_22-58-01-CZJ1euxS.jpg",cv="/assets/photo_2025-09-16_22-58-14-BefjFQXO.jpg",UP=O.div`
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

`,IP={hidden:{opacity:0,y:20},show:{opacity:1,y:0}},FP=[{niche:"handwerk",labelKey:"references.niches.handwerk",metricLabelKey:"references.metrics.moreRequests",metricValue:"+41%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[16,18,22,24,27,31,34]},{niche:"praxen",labelKey:"references.niches.praxen",metricLabelKey:"references.metrics.moreAppointments",metricValue:"+33%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[14,15,19,23,25,27,30]},{niche:"werkstatt",labelKey:"references.niches.werkstatt",metricLabelKey:"references.metrics.moreCalls",metricValue:"+46%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[11,14,17,22,26,31,36]},{niche:"gastronomie",labelKey:"references.niches.gastronomie",metricLabelKey:"references.metrics.moreReservations",metricValue:"+27%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[16,16,19,21,22,24,27]},{niche:"beauty",labelKey:"references.niches.beauty",metricLabelKey:"references.metrics.moreBookings",metricValue:"+31%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[13,16,18,21,23,25,29]},{niche:"immobilien",labelKey:"references.niches.immobilien",metricLabelKey:"references.metrics.moreLeads",metricValue:"+22%",timeframe:"30-90",source:"GA4 / Search Console",sparkline:[9,11,12,14,16,17,19]},{niche:"kanzlei",labelKey:"references.niches.kanzlei",metricLabelKey:"references.metrics.moreIntroCalls",metricValue:"+24%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[11,12,14,15,17,18,20]},{niche:"fitnessPhysio",labelKey:"references.niches.fitnessPhysio",metricLabelKey:"references.metrics.moreTrialSessions",metricValue:"+29%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[10,13,15,18,20,22,25]},{niche:"reinigung",labelKey:"references.niches.reinigung",metricLabelKey:"references.metrics.moreOffers",metricValue:"+35%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[12,14,17,20,22,25,28]},{niche:"umzugTransport",labelKey:"references.niches.umzugTransport",metricLabelKey:"references.metrics.moreQualifiedLeads",metricValue:"+26%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[11,13,14,17,18,20,23]},{niche:"coachingBeratung",labelKey:"references.niches.coachingBeratung",metricLabelKey:"references.metrics.moreFirstContacts",metricValue:"+28%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[10,12,14,16,18,20,22]},{niche:"bildungKurse",labelKey:"references.niches.bildungKurse",metricLabelKey:"references.metrics.moreCourseSignups",metricValue:"+32%",timeframe:"30-90",source:"GA4 / Search Console / Ads",sparkline:[8,10,13,15,17,20,23]}],uv=[{id:"c1",titleKey:"references.cases.c1.title",category:"handwerk",challengeKey:"references.cases.c1.challenge",solutionKey:"references.cases.c1.solution",metrics:[{metricLabelKey:"references.metrics.moreRequests",metricValue:"+41%"},{metricLabelKey:"references.metrics.budgetEfficiency",metricValue:"+33%"}],timeframe:"30-90",source:"GA4 / Google Ads",beforeImage:nm,afterImage:lv},{id:"c2",titleKey:"references.cases.c2.title",category:"praxen",challengeKey:"references.cases.c2.challenge",solutionKey:"references.cases.c2.solution",metrics:[{metricLabelKey:"references.metrics.moreAppointments",metricValue:"+33%"},{metricLabelKey:"references.metrics.moreInteractions",metricValue:"+46%"}],timeframe:"30-90",source:"GA4 / Meta Ads",beforeImage:rm,afterImage:am},{id:"c3",titleKey:"references.cases.c3.title",category:"werkstatt",challengeKey:"references.cases.c3.challenge",solutionKey:"references.cases.c3.solution",metrics:[{metricLabelKey:"references.metrics.moreQualifiedLeads",metricValue:"+32%"},{metricLabelKey:"references.metrics.moreLeadsPerBudget",metricValue:"+31%"}],timeframe:"30-90",source:"GA4 / Google Ads",beforeImage:cv,afterImage:im},{id:"c4",titleKey:"references.cases.c4.title",category:"gastronomie",challengeKey:"references.cases.c4.challenge",solutionKey:"references.cases.c4.solution",metrics:[{metricLabelKey:"references.metrics.moreReservations",metricValue:"+27%"},{metricLabelKey:"references.metrics.moreCalls",metricValue:"+21%"}],timeframe:"30-90",source:"GA4 / Meta Ads",beforeImage:rm,afterImage:lv},{id:"c5",titleKey:"references.cases.c5.title",category:"immobilien",challengeKey:"references.cases.c5.challenge",solutionKey:"references.cases.c5.solution",metrics:[{metricLabelKey:"references.metrics.moreLeads",metricValue:"+22%"},{metricLabelKey:"references.metrics.moreIntroCalls",metricValue:"+19%"}],timeframe:"30-90",source:"GA4 / Search Console / Ads",beforeImage:nm,afterImage:im},{id:"c6",titleKey:"references.cases.c6.title",category:"kanzlei",challengeKey:"references.cases.c6.challenge",solutionKey:"references.cases.c6.solution",metrics:[{metricLabelKey:"references.metrics.moreFirstContacts",metricValue:"+24%"},{metricLabelKey:"references.metrics.moreConsultations",metricValue:"+18%"}],timeframe:"30-90",source:"GA4 / Google Ads",beforeImage:cv,afterImage:am}],qP=[{label:"references.filterGroups.all",items:["all"]},{label:"references.filterGroups.localServices",items:["handwerk","werkstatt","reinigung","umzugTransport"]},{label:"references.filterGroups.healthBeauty",items:["praxen","fitnessPhysio","beauty"]},{label:"references.filterGroups.professional",items:["immobilien","kanzlei","coachingBeratung","bildungKurse","gastronomie"]}],KP=[{value:"+41%",label:"references.kpis.leads"},{value:"+27%",label:"references.kpis.conversion"},{value:"+32%",label:"references.kpis.traffic"}],ch={traffic:"-12%",leads:"-18%",conversion:"-9%"},uh={traffic:"+32%",leads:"+41%",conversion:"+27%"},YP=[0,15,30,45,60,75,90],dv=[11,10,10,9,10,9,10],fv=[8,14,21,29,38,48,58],Zo=(e,t,i)=>Math.max(t,Math.min(i,e)),c3="M 0 99 C 30 72, 70 30, 100 1",u3="M 0 39 C 35 30, 68 14, 100 1",pv=[98,94,89,83,77,70,62,54,46,38,29,21,12,3],Au=e=>{if(e.length<2)return c3;const t=.1;let i=`M ${e[0].x.toFixed(2)} ${e[0].y.toFixed(2)}`;for(let a=0;a<e.length-1;a+=1){const o=e[a-1]??e[a],l=e[a],u=e[a+1],f=e[a+2]??u,p=l.x+(u.x-o.x)*t/6,m=l.y+(u.y-o.y)*t/6,g=u.x-(f.x-l.x)*t/6,x=u.y-(f.y-l.y)*t/6;i+=` C ${p.toFixed(2)} ${m.toFixed(2)}, ${g.toFixed(2)} ${x.toFixed(2)}, ${u.x.toFixed(2)} ${u.y.toFixed(2)}`}return i},XP=e=>{const a=pv.map((o,l)=>{const u=0+100*l/(pv.length-1),f=Math.sin(e*1.1+l*1.05)*6.8,p=Math.sin(e*.72+l*.46)*3.4,m=Math.sin(e*1.8+l*1.7)*1.6,g=Zo(o+f+p+m,1,99);return{x:u,y:g}});return Au(a)},QP=(e,t)=>{if(!e||e.length<2)return u3;const i=Math.min(...e),a=Math.max(...e),o=Math.max(1,a-i),l=e.map((u,f)=>{const p=f/(e.length-1)*100,g=39-(u-i)/o*38,x=Math.sin(t*1.15+f*1.2)*3.6,y=Math.sin(t*.74+f*.52)*2,v=Math.sin(t*1.9+f*1.65)*.9,S=Zo(g+x+y+v,1,39);return{x:p,y:S}});return Au(l)},hv=e=>e.map((i,a)=>{const o=a/(e.length-1)*100,l=Zo(56-i/60*52,2,58);return{x:o,y:l,value:i}}),mv=(e,t)=>{if(t===0)return"*";const i=e[t]-e[t-1];return i>0?`+${i}`:i<0?`${i}`:"0"},WP=()=>{const{t:e}=Ge(),[t,i]=C.useState("all"),[a,o]=C.useState(0),l=C.useMemo(()=>uv.filter(v=>t==="all"||v.category===t),[t]),u=C.useMemo(()=>FP.filter(v=>t==="all"||v.niche===t),[t]),f=l[0]??uv[0],p=C.useMemo(()=>XP(a)||c3,[a]),m=C.useMemo(()=>hv(dv),[]),g=C.useMemo(()=>hv(fv),[]),x=C.useMemo(()=>Au(m),[m]),y=C.useMemo(()=>Au(g),[g]);return C.useEffect(()=>{const v=window.setInterval(()=>{o(S=>(S+.12)%(Math.PI*8))},70);return()=>window.clearInterval(v)},[]),d.jsx(UP,{children:d.jsx(dn,{className:"references-page",children:d.jsxs(fn,{children:[d.jsx(ai,{className:"references-hero",as:ae.section,initial:"hidden",animate:"show",variants:IP,transition:{duration:.62,ease:Cn},children:d.jsxs("div",{className:"references-hero-grid",children:[d.jsxs("div",{className:"references-hero-copy",children:[d.jsx("h1",{children:d.jsx(_a,{text:e("references.h1"),durationMs:2800,storageKey:"refs_h1_new_once"})}),d.jsx("p",{children:e("references.subtitle")}),d.jsx(Ie,{children:e("references.trustline")})]}),d.jsxs(He,{className:"references-hero-dashboard",as:ae.div,whileHover:{y:-4},animate:{boxShadow:["0 0 0 1px rgba(125, 210, 255, 0.2) inset, 0 24px 50px rgba(2, 8, 20, 0.52)","0 0 0 1px rgba(141, 218, 255, 0.32) inset, 0 30px 62px rgba(3, 12, 28, 0.62)","0 0 0 1px rgba(125, 210, 255, 0.2) inset, 0 24px 50px rgba(2, 8, 20, 0.52)"],borderColor:["rgba(124, 193, 255, 0.32)","rgba(124, 220, 255, 0.58)","rgba(124, 193, 255, 0.32)"]},transition:{duration:5.2,repeat:1/0,ease:"easeInOut"},children:[d.jsx("p",{className:"references-dashboard-label",children:e("references.performanceDashboard")}),d.jsx("div",{className:"references-kpi-row",children:KP.map((v,S)=>d.jsxs(ae.div,{className:"references-kpi-item",animate:{y:[0,-6,0],opacity:[.86,1,.86]},transition:{duration:3.4,delay:S*.45,repeat:1/0,ease:"easeInOut"},children:[d.jsx("span",{className:"references-kpi-value",children:v.value}),d.jsx("span",{className:"references-kpi-label",children:e(v.label)})]},v.label))}),d.jsxs("div",{className:"references-growth-chart-wrap",children:[d.jsx("p",{className:"references-chart-label",children:e("references.growthCurve90")}),d.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"none",className:"references-growth-chart",role:"img","aria-label":e("references.growthChartAria"),children:[d.jsx("defs",{children:d.jsxs("linearGradient",{id:"refsGrowth",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[d.jsx("stop",{offset:"0%",stopColor:"#00c2ff"}),d.jsx("stop",{offset:"100%",stopColor:"#56f5a0"})]})}),d.jsx("path",{d:p})]})]})]})]})}),d.jsxs(ht,{className:"references-filter-wrap",children:[d.jsxs("h2",{className:"references-title",children:[d.jsx(KE,{})," ",e("references.filterTitle")]}),d.jsx(Ie,{children:e("references.counter",{count:l.length})}),d.jsx("div",{className:"references-filter-groups",role:"tablist","aria-label":e("references.filterAria"),children:qP.map(v=>d.jsxs("div",{className:"references-filter-group",children:[d.jsx("p",{className:"references-filter-group-label",children:e(v.label)}),d.jsx("div",{className:"references-filters",children:v.items.map(S=>d.jsx("button",{type:"button",className:`references-filter-chip ${t===S?"active":""}`,onClick:()=>i(S),role:"tab","aria-selected":t===S,children:e(S==="all"?"references.filters.all":`references.niches.${S}`)},S))})]},v.label))})]}),d.jsxs(ht,{className:"references-metric-band",children:[d.jsxs("h2",{className:"references-title",children:[d.jsx(Va,{})," ",e("references.growthByNiche")]}),d.jsx(tu,{className:"grid-3",children:u.map((v,S)=>d.jsxs(He,{className:"references-metric-card",as:ae.article,animate:{y:[0,-5,0],borderColor:["rgba(111, 178, 255, 0.18)","rgba(116, 210, 255, 0.48)","rgba(111, 178, 255, 0.18)"],boxShadow:["0 10px 24px rgba(0, 0, 0, 0.2)","0 16px 34px rgba(8, 31, 61, 0.36)","0 10px 24px rgba(0, 0, 0, 0.2)"]},transition:{duration:4.2,delay:S*.18,repeat:1/0,ease:"easeInOut"},children:[d.jsxs("div",{className:"references-metric-head",children:[d.jsx("h3",{children:e(v.labelKey)}),d.jsxs("span",{className:"references-kpi-badge",children:[d.jsx(_E,{})," ",v.metricValue]})]}),d.jsx("p",{className:"references-metric-line",children:e(v.metricLabelKey)}),d.jsx("svg",{viewBox:"0 0 100 40",preserveAspectRatio:"none",className:"references-sparkline",role:"img","aria-label":e("references.trendAria",{niche:e(v.labelKey)}),children:d.jsx("path",{d:QP(v.sparkline,a+S*.9)||u3})}),d.jsxs(Ie,{children:[d.jsx(oy,{})," ",e("references.periodLabel"),": ",v.timeframe," ",e("references.daysUnit")]}),d.jsxs(Ie,{children:[d.jsx(Ko,{})," ",e("references.measurementLabel"),": ",v.source]})]},v.labelKey))})]}),d.jsxs(ht,{className:"references-cases",children:[d.jsx("h2",{className:"references-title",children:e("references.selectedCases")}),l.length===0?d.jsxs(He,{children:[d.jsx("h3",{children:e("references.emptyTitle")}),d.jsx(Ie,{children:e("references.emptyText")})]}):d.jsx(gg,{children:l.map(v=>d.jsxs(He,{className:"references-case-card",children:[d.jsx("h3",{children:e(v.titleKey)}),d.jsxs("div",{className:"references-case-block",children:[d.jsx("p",{className:"references-case-label",children:e("references.challengeLabel")}),d.jsx("p",{children:e(v.challengeKey)})]}),d.jsxs("div",{className:"references-case-block",children:[d.jsx("p",{className:"references-case-label",children:e("references.solutionLabel")}),d.jsx("p",{children:e(v.solutionKey)})]}),d.jsxs("div",{className:"references-case-result",children:[d.jsx("p",{className:"references-case-label",children:e("references.resultLabel")}),v.metrics.map(S=>d.jsxs("p",{children:[e(S.metricLabelKey),": ",d.jsx("span",{children:S.metricValue})]},`${v.id}-${S.metricLabelKey}`))]}),d.jsxs(Ie,{children:[d.jsx(oy,{})," ",e("references.periodLabel"),": ",v.timeframe," ",e("references.daysUnit")]}),d.jsxs(Ie,{children:[d.jsx(Ko,{})," ",e("references.measurementLabel"),": ",v.source]})]},v.id))})]}),d.jsxs(ht,{children:[d.jsx("h2",{className:"references-title",children:e("references.beforeAfter")}),d.jsxs("div",{className:"references-compare-shell",children:[d.jsxs("div",{className:"references-compare-chart",children:[d.jsxs("svg",{viewBox:"0 0 100 60",preserveAspectRatio:"none",className:"references-compare-graph",role:"img","aria-label":e("references.compareGraphAria"),children:[[0,16.66,33.33,50,66.66,83.33,100].map(v=>d.jsx("line",{x1:v,y1:"0",x2:v,y2:"60",className:"grid-line"},`vx-${v}`)),[8,16,24,32,40,48,56].map(v=>d.jsx("line",{x1:"0",y1:v,x2:"100",y2:v,className:"grid-line"},`hy-${v}`)),d.jsx("line",{x1:"0",y1:"58",x2:"100",y2:"58",className:"axis-line"}),d.jsx("path",{className:"before-line",d:x}),d.jsx("path",{className:"after-line",d:y}),m.map((v,S)=>d.jsxs("g",{children:[d.jsx("circle",{className:"before-point",cx:v.x,cy:v.y,r:"1.2"}),d.jsx("text",{className:"point-delta before",x:v.x,y:Zo(v.y+4.4,4,59),children:mv(dv,S)})]},`before-point-${S}`)),g.map((v,S)=>d.jsxs("g",{children:[d.jsx("circle",{className:"after-point",cx:v.x,cy:v.y,r:"1.4"}),d.jsx("text",{className:"point-delta after",x:v.x,y:Zo(v.y-2.2,1.5,58),children:mv(fv,S)})]},`after-point-${S}`))]}),d.jsx("div",{className:"references-compare-days",children:YP.map(v=>d.jsx("span",{children:e("references.dayLabel",{day:v})},v))}),d.jsxs("div",{className:"references-compare-legend",children:[d.jsxs("span",{children:[d.jsx("i",{className:"dot before"})," ",e("references.beforeLegend")]}),d.jsxs("span",{children:[d.jsx("i",{className:"dot after"})," ",e("references.afterLegend")]})]})]}),d.jsxs("div",{className:"references-compare-kpis",children:[d.jsxs("div",{className:"kpi-panel before",children:[d.jsx("h3",{children:e("references.before")}),d.jsxs("p",{children:[e("references.kpis.traffic")," ",d.jsx("span",{children:ch.traffic})]}),d.jsxs("p",{children:[e("references.kpis.leads")," ",d.jsx("span",{children:ch.leads})]}),d.jsxs("p",{children:[e("references.kpis.conversion")," ",d.jsx("span",{children:ch.conversion})]})]}),d.jsxs("div",{className:"kpi-panel after",children:[d.jsx("h3",{children:e("references.after")}),d.jsxs("p",{children:[e("references.kpis.traffic")," ",d.jsx("span",{children:uh.traffic})]}),d.jsxs("p",{children:[e("references.kpis.leads")," ",d.jsx("span",{children:uh.leads})]}),d.jsxs("p",{children:[e("references.kpis.conversion")," ",d.jsx("span",{children:uh.conversion})]})]})]})]}),d.jsxs(Ie,{children:[e("references.periodLabel"),": ",f.timeframe," ",e("references.daysUnit")," · ",e("references.measurementLabel"),": ",f.source]})]}),d.jsxs(bg,{children:[d.jsx("h2",{children:e("references.ctaTitle")}),d.jsx(Ie,{children:e("references.ctaText")}),d.jsx(aa,{children:d.jsxs(ra,{to:"/kontakt",children:[d.jsx(Nn,{})," ",e("references.cta")]})})]})]})})})},ZP="/assets/vladyslav-founder-C6kYUNTx.jpg",JP=Fe`
  0% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(8px, -8px, 0); }
  100% { transform: translate3d(0, 0, 0); }
`,eN=Fe`
  0% { background-position: -120px 0; opacity: 0.45; }
  50% { background-position: 0 0; opacity: 0.95; }
  100% { background-position: 120px 0; opacity: 0.45; }
`,tN=O.div`
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
    animation: ${JP} 12s ease-in-out infinite;
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
    animation: ${eN} 2.2s linear infinite;
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

`,nN=()=>{const{t:e}=Ge(),[t,i]=C.useState(0);C.useEffect(()=>{let v=0;const S=performance.now(),j=A=>{i((A-S)/1e3),v=window.requestAnimationFrame(j)};return v=window.requestAnimationFrame(j),()=>window.cancelAnimationFrame(v)},[]);const a=Math.sin(t*1.2)*-10,o=Math.sin(t*1.2+.8)*-12,l=Math.sin(t*1.2+1.6)*-9,u=t*40%64,f=(t*40+18)%64,p=.9+(Math.sin(t*2.4)+1)/2*.1,m=.88+(Math.sin(t*2.4+.6)+1)/2*.12,g=.84+(Math.sin(t*2.4+1.2)+1)/2*.14,x=1+(Math.sin(t*2.8)+1)/2*.05,y=Math.sin(t*1.1)*6;return d.jsxs("div",{className:"about-hero-visual","aria-hidden":"true",children:[d.jsxs("div",{className:"about-hero-bgLayer",children:[d.jsx("div",{className:"about-hero-radial"}),d.jsx("div",{className:"about-hero-grid"})]}),d.jsx("div",{className:"about-hero-contentLayer",children:d.jsxs("div",{className:"about-hero-dashboard-shell",children:[d.jsxs("div",{className:"about-hero-dashboard-head",children:[d.jsx("div",{className:"about-hero-product-badge",children:e("aboutPage.visual.productBadge",{defaultValue:"Lead System"})}),d.jsxs("div",{className:"about-hero-shell-metric",children:[d.jsx("span",{className:"about-hero-shell-label",children:e("aboutPage.visual.flowLabel",{defaultValue:"Flow"})}),d.jsx("span",{className:"about-hero-shell-value",children:e("aboutPage.visual.flowValue",{defaultValue:"Before zu System zu Result"})})]})]}),d.jsxs("div",{className:"about-hero-storyboard",children:[d.jsxs("article",{className:"about-hero-story-card about-hero-story-card-before",style:{transform:`translateY(${a}px)`},children:[d.jsx("p",{className:"about-hero-stage-eyebrow",children:e("aboutPage.visual.before.label",{defaultValue:"Before"})}),d.jsx("p",{className:"about-hero-metric-title",children:e("aboutPage.visual.before.title",{defaultValue:"Viele Klicks, wenig Klarheit"})}),d.jsxs("ul",{className:"about-hero-story-list",children:[d.jsx("li",{children:e("aboutPage.visual.before.i1",{defaultValue:"Langsame Seiten"})}),d.jsx("li",{children:e("aboutPage.visual.before.i2",{defaultValue:"Unklare Kontaktwege"})}),d.jsx("li",{children:e("aboutPage.visual.before.i3",{defaultValue:"Keine sauberen Daten"})})]})]}),d.jsxs("div",{className:"about-hero-story-connector",children:[d.jsx("div",{className:"about-hero-pipeline-line"}),d.jsx("span",{className:"about-hero-pipeline-pulse",style:{transform:`translate(${u}px, -50%) scale(1.15)`}})]}),d.jsxs("article",{className:"about-hero-story-card about-hero-story-card-system",style:{transform:`translateY(${o}px)`},children:[d.jsx("p",{className:"about-hero-stage-eyebrow",children:e("aboutPage.visual.system.label",{defaultValue:"System"})}),d.jsxs("div",{className:"about-hero-phone-preview",children:[d.jsx("div",{className:"about-hero-phone-notch"}),d.jsxs("div",{className:"about-hero-phone-screen",children:[d.jsx("div",{className:"about-hero-phone-badge",children:e("aboutPage.visual.system.phoneBadge",{defaultValue:"Website"})}),d.jsx("div",{className:"about-hero-phone-line about-hero-phone-line-strong",style:{transform:`scaleX(${p})`,opacity:.7+(p-.9)*2.2}}),d.jsx("div",{className:"about-hero-phone-line",style:{transform:`scaleX(${m})`,opacity:.56+(m-.88)*2.1}}),d.jsx("div",{className:"about-hero-phone-line",style:{transform:`scaleX(${g})`,opacity:.52+(g-.84)*1.9}}),d.jsx("div",{className:"about-hero-phone-cta",style:{transform:`scale(${x})`,opacity:.88+(x-1)*2},children:e("aboutPage.visual.system.cta",{defaultValue:"Termin anfragen"})})]})]}),d.jsxs("div",{className:"about-hero-system-pills",children:[d.jsx("span",{children:e("aboutPage.visual.system.pill1",{defaultValue:"Website"})}),d.jsx("span",{children:e("aboutPage.visual.system.pill2",{defaultValue:"Kontaktwege"})}),d.jsx("span",{children:e("aboutPage.visual.system.pill3",{defaultValue:"Tracking"})})]})]}),d.jsxs("div",{className:"about-hero-story-connector",children:[d.jsx("div",{className:"about-hero-pipeline-line"}),d.jsx("span",{className:"about-hero-pipeline-pulse",style:{transform:`translate(${f}px, -50%) scale(1.15)`}})]}),d.jsxs("article",{className:"about-hero-story-card about-hero-story-card-result",style:{transform:`translateY(${l}px)`},children:[d.jsx("p",{className:"about-hero-stage-eyebrow",children:e("aboutPage.visual.result.label",{defaultValue:"Result"})}),d.jsx("p",{className:"about-hero-result-metric",children:"+12"}),d.jsx("p",{className:"about-hero-metric-title",children:e("aboutPage.visual.result.title",{defaultValue:"Qualifizierte Anfragen"})}),d.jsx("p",{className:"about-hero-metric-text",children:e("aboutPage.visual.result.text",{defaultValue:"Messbar, schneller beantwortbar und klar im Funnel sichtbar."})})]})]}),d.jsxs("div",{className:"about-hero-metric-anchor",style:{transform:`translateX(${y}px)`},children:[d.jsx("span",{className:"about-hero-anchor-label",children:e("aboutPage.visual.anchor.label",{defaultValue:"Ergebnis"})}),d.jsx("span",{className:"about-hero-anchor-value",children:e("aboutPage.visual.anchor.value",{defaultValue:"Mehr qualifizierte Anfragen statt nur Website-Traffic"})})]})]})})]})},iN=()=>{const{t:e}=Ge();return d.jsx(tN,{children:d.jsx(dn,{children:d.jsxs(fn,{children:[d.jsxs(ai,{className:"about-hero",children:[d.jsxs("div",{className:"about-hero-copy",children:[d.jsx("p",{className:"about-hero-eyebrow",children:e("aboutPage.heroEyebrow",{defaultValue:"VS Studio | Hildesheim | Niedersachsen | Deutschland"})}),d.jsxs("h1",{children:[d.jsx("span",{className:"about-hero-title-line",children:e("aboutPage.heroTitleLine1",{defaultValue:"Websites und"})}),d.jsx("span",{className:"about-hero-title-line",children:d.jsx("span",{className:"about-hero-title-highlight",children:e("aboutPage.heroTitleLine2",{defaultValue:"Lead-Systeme"})})}),d.jsx("span",{className:"about-hero-title-line",children:e("aboutPage.heroTitleLine3",{defaultValue:"fuer lokale Unternehmen"})}),d.jsx("span",{className:"about-hero-title-line",children:e("aboutPage.heroTitleLine4",{defaultValue:"in Hildesheim"})})]}),d.jsx("p",{className:"about-hero-subtitle",children:e("aboutPage.heroSubtitle",{defaultValue:"Mehr qualifizierte Anfragen durch schnelle Websites, klare Kontaktwege und messbares Marketing."})}),d.jsx("p",{className:"about-trustline",children:e("aboutPage.heroTrustline",{defaultValue:"Lokal in Hildesheim. Strategisch in Niedersachsen. Umsetzbar in ganz Deutschland."})}),d.jsx(aa,{className:"about-hero-actions",children:d.jsxs(ra,{to:"/kontakt",children:[d.jsx(Nn,{})," ",e("aboutPage.primaryCta",{defaultValue:"Kostenlose Website-Analyse"})]})})]}),d.jsx(nN,{})]}),d.jsxs(ht,{children:[d.jsx("h2",{children:e("aboutPage.section.about",{defaultValue:"About"})}),d.jsxs(gg,{children:[d.jsxs(He,{children:[d.jsx("h3",{children:e("aboutPage.blocks.who.title",{defaultValue:"Fuer lokale Unternehmen"})}),d.jsx(Ie,{children:e("aboutPage.blocks.who.text",{defaultValue:"Websites, Lead-Systeme und Marketing fuer Betriebe, die planbar mehr Anfragen wollen."})})]}),d.jsxs(He,{children:[d.jsx("h3",{children:e("aboutPage.blocks.focus.title",{defaultValue:"Ein System statt Einzelloesungen"})}),d.jsx(Ie,{children:e("aboutPage.blocks.focus.text",{defaultValue:"Website, Kontaktwege, Kampagnen und Tracking greifen als ein klarer Prozess zusammen."})})]})]})]}),d.jsxs(ht,{children:[d.jsx("h2",{children:e("aboutPage.section.localAdvantages",{defaultValue:"Lokale Vorteile"})}),d.jsxs("div",{className:"about-main-grid",children:[d.jsxs(He,{className:"about-photo-card",children:[d.jsx("img",{className:"about-photo-image",src:ZP,alt:e("aboutPage.photoAlt",{defaultValue:"Vladyslav, Gruender von VS Web Studio aus Hildesheim"})}),d.jsx("p",{className:"about-photo-caption",children:e("aboutPage.photoCaption",{defaultValue:"Vladyslav - Gruender von VS Web Studio"})}),d.jsxs(No,{className:"about-photo-facts",children:[d.jsxs("li",{children:[d.jsx(Qe,{})," ",e("aboutPage.photoFacts.f1",{defaultValue:"Fokus: lokale Unternehmen"})]}),d.jsxs("li",{children:[d.jsx(Qe,{})," ",e("aboutPage.photoFacts.f2",{defaultValue:"Standort: Hildesheim"})]}),d.jsxs("li",{children:[d.jsx(Qe,{})," ",e("aboutPage.photoFacts.f3",{defaultValue:"Projekte: deutschlandweit"})]})]}),d.jsxs("div",{className:"about-geo-badges",children:[d.jsxs("span",{className:"about-geo-badge",children:[d.jsx(Lo,{})," ",e("aboutPage.geo.local",{defaultValue:"Hildesheim"})]}),d.jsxs("span",{className:"about-geo-badge",children:[d.jsx(Lo,{})," ",e("aboutPage.geo.region",{defaultValue:"Niedersachsen"})]}),d.jsxs("span",{className:"about-geo-badge",children:[d.jsx(Lo,{})," ",e("aboutPage.geo.country",{defaultValue:"Deutschlandweit"})]})]})]}),d.jsxs(He,{className:"about-text-card",children:[d.jsx("h3",{children:e("aboutPage.blocks.locality.title",{defaultValue:"Lokale Naehe als Vorteil"})}),d.jsx("p",{className:"about-local-subtitle",children:e("aboutPage.blocks.locality.subtitle",{defaultValue:"Schnelle Abstimmung, klare Prioritaeten und messbare Ergebnisse."})}),d.jsx(Ie,{className:"about-local-copy",children:e("aboutPage.blocks.locality.text1",{defaultValue:"Wir arbeiten direkt mit lokalen Unternehmen zusammen - ohne lange Agenturketten und unnoetige Buerokratie."})}),d.jsxs(No,{className:"about-local-list",children:[d.jsxs("li",{children:[d.jsx(Qe,{})," ",e("aboutPage.blocks.locality.i1",{defaultValue:"Direkte Kommunikation ohne Umwege"})]}),d.jsxs("li",{children:[d.jsx(Qe,{})," ",e("aboutPage.blocks.locality.i2",{defaultValue:"Schnelle Umsetzung statt langer Abstimmungen"})]}),d.jsxs("li",{children:[d.jsx(Qe,{})," ",e("aboutPage.blocks.locality.i3",{defaultValue:"Verstaendnis fuer lokale Maerkte und Budgets"})]})]}),d.jsx(Ie,{className:"about-local-copy",children:e("aboutPage.blocks.locality.text2",{defaultValue:"Unsere Kunden profitieren davon, dass Entscheidungen schneller getroffen werden und Projekte nicht wochenlang in Abstimmungsschleifen haengen bleiben."})}),d.jsx(Ie,{className:"about-local-copy",children:e("aboutPage.blocks.locality.text3",{defaultValue:"Das spart Zeit, reduziert Kosten und sorgt dafuer, dass Marketingmassnahmen schneller Ergebnisse liefern."})}),d.jsx(Ie,{className:"about-local-copy",children:e("aboutPage.blocks.locality.text4",{defaultValue:"Wir kennen die Realitaet kleiner und mittelstaendischer Unternehmen: begrenzte Budgets, wenig Zeit und den Wunsch nach klaren Resultaten statt komplizierten Konzepten."})}),d.jsx(Ie,{className:"about-local-copy",children:e("aboutPage.blocks.locality.text5",{defaultValue:"Deshalb arbeiten wir pragmatisch und strukturiert - von der ersten Analyse ueber die Umsetzung bis zur kontinuierlichen Optimierung."})}),d.jsx("p",{className:"about-local-priority",children:e("aboutPage.localPriority",{defaultValue:"Kurze Wege. Klare Prioritaeten. Fokus auf Ergebnisse."})})]})]})]}),d.jsxs(ht,{children:[d.jsx("h2",{children:e("aboutPage.section.how",{defaultValue:"How we work"})}),d.jsxs(tu,{className:"about-work-grid",children:[d.jsxs(He,{className:"about-step-card",children:[d.jsxs("h3",{children:[d.jsx(Ft,{children:d.jsx(pu,{})}),e("aboutPage.how.s1.title",{defaultValue:"1. Verstehen"})]}),d.jsx(Ie,{children:e("aboutPage.how.s1.text",{defaultValue:"Zielgruppe, Angebot und Markt analysieren."})})]}),d.jsxs(He,{className:"about-step-card",children:[d.jsxs("h3",{children:[d.jsx(Ft,{children:d.jsx(mu,{})}),e("aboutPage.how.s2.title",{defaultValue:"2. Umsetzen"})]}),d.jsx(Ie,{children:e("aboutPage.how.s2.text",{defaultValue:"Website, Lead-System und Kampagnen starten."})})]}),d.jsxs(He,{className:"about-step-card",children:[d.jsxs("h3",{children:[d.jsx(Ft,{children:d.jsx(Va,{})}),e("aboutPage.how.s3.title",{defaultValue:"3. Optimieren"})]}),d.jsx(Ie,{children:e("aboutPage.how.s3.text",{defaultValue:"Daten analysieren und Ergebnisse verbessern."})})]})]})]}),d.jsxs(ht,{children:[d.jsx("h2",{children:e("aboutPage.section.value",{defaultValue:"Value"})}),d.jsxs(tu,{className:"about-value-grid",children:[d.jsxs(He,{className:"about-value-card",children:[d.jsxs("h3",{children:[d.jsx(Ft,{children:d.jsx(mu,{})}),e("aboutPage.cards.work.title",{defaultValue:"Klare Prozesse"})]}),d.jsx(Ie,{children:e("aboutPage.cards.work.desc",{defaultValue:"Kurze Wege. Klare Verantwortung."})})]}),d.jsxs(He,{className:"about-value-card",children:[d.jsxs("h3",{children:[d.jsx(Ft,{children:d.jsx(Xr,{})}),e("aboutPage.cards.ai.title",{defaultValue:"AI First"})]}),d.jsx(Ie,{children:e("aboutPage.cards.ai.desc",{defaultValue:"Automatisierung dort, wo sie Zeit spart."})})]}),d.jsxs(He,{className:"about-value-card",children:[d.jsxs("h3",{children:[d.jsx(Ft,{children:d.jsx(Ha,{})}),e("aboutPage.cards.leads.title",{defaultValue:"Lead Fokus"})]}),d.jsx(Ie,{children:e("aboutPage.cards.leads.desc",{defaultValue:"Design und Marketing arbeiten zusammen."})})]})]})]}),d.jsx(ht,{children:d.jsxs(He,{children:[d.jsx("h2",{children:e("aboutPage.results.title",{defaultValue:"Was Kunden erhalten"})}),d.jsxs(No,{children:[d.jsxs("li",{children:[d.jsx(Qe,{})," ",e("aboutPage.results.i1",{defaultValue:"Schnelle Website, die auf jedem Smartphone laedt"})]}),d.jsxs("li",{children:[d.jsx(Qe,{})," ",e("aboutPage.results.i2",{defaultValue:"Klare Kontaktwege: Anruf, Formular, Termin"})]}),d.jsxs("li",{children:[d.jsx(Qe,{})," ",e("aboutPage.results.i3",{defaultValue:"Messbare Anfragen mit Tracking und Marketing-Daten"})]})]})]})}),d.jsxs(ht,{children:[d.jsx("h2",{children:e("aboutPage.section.trust",{defaultValue:"Trust"})}),d.jsxs(tu,{children:[d.jsxs(He,{children:[d.jsx("h3",{children:e("aboutPage.trust.projects.label",{defaultValue:"Anzahl Projekte"})}),d.jsx("p",{className:"about-trust-metric",children:e("aboutPage.trust.projects.value",{defaultValue:"120+"})}),d.jsx(Ie,{children:e("aboutPage.trust.projects.text",{defaultValue:"Websites, Lead-Funnels und Relaunches."})})]}),d.jsxs(He,{children:[d.jsx("h3",{children:e("aboutPage.trust.industries.label",{defaultValue:"Branchen"})}),d.jsx("p",{className:"about-trust-metric",children:e("aboutPage.trust.industries.value",{defaultValue:"12"})}),d.jsx(Ie,{children:e("aboutPage.trust.industries.text",{defaultValue:"Handwerk, Praxen, Gastronomie, Beauty, Bildung und lokale Dienstleistungen."})})]}),d.jsxs(He,{children:[d.jsx("h3",{children:e("aboutPage.trust.focus.label",{defaultValue:"Fokus"})}),d.jsx("p",{className:"about-trust-metric",children:e("aboutPage.trust.focus.value",{defaultValue:"Lokal + Messbar"})}),d.jsx(Ie,{children:e("aboutPage.trust.focus.text",{defaultValue:"Hildesheim, Niedersachsen und Deutschland mit klarem Lead-Fokus."})})]})]})]}),d.jsxs(bg,{className:"about-cta-band",children:[d.jsx("h2",{children:e("aboutPage.cta.title",{defaultValue:"Bereit fuer planbare Anfragen?"})}),d.jsx(Ie,{children:e("aboutPage.cta.text",{defaultValue:"Im kostenlosen Erstgespraech zeigen wir die groessten Hebel fuer Ihre Website, Lead-Prozesse und Werbung."})}),d.jsx(aa,{children:d.jsxs(ra,{to:"/kontakt",children:[d.jsx(Nn,{})," ",e("aboutPage.primaryCta",{defaultValue:"Kostenloses Erstgespraech starten"})]})})]})]})})})},aN=O(ae.section)`
  padding-top: 80px;
  padding-bottom: 80px;
`,rN=O.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 32px;
  align-items: start;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`,sN=O.div`
  display: grid;
  gap: 20px;
`,oN=O.div`
  display: grid;
  gap: 18px;

  @media (min-width: 992px) {
    position: sticky;
    top: 112px;
  }
`,lN=O.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 180, 80, 0.12);
  border: 1px solid rgba(255, 180, 80, 0.25);
  color: #ffd8ab;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
`,cN=O.h1`
  max-width: 620px;
  margin: 0;
  font-size: clamp(34px, 8vw, 70px);
  line-height: 1.08;

  @media (max-width: 767px) {
    font-size: clamp(30px, 10vw, 44px);
  }
`,uN=O.p`
  max-width: 620px;
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: 17px;
  line-height: 1.65;
`,d3=O(He)`
  padding: 32px;
  border-radius: 24px;
  background:
    radial-gradient(circle at top right, rgba(255, 180, 80, 0.16), transparent 38%),
    linear-gradient(180deg, rgba(14, 20, 35, 0.94), rgba(9, 13, 24, 0.9));

  @media (max-width: 767px) {
    padding: 24px;
  }
`,dN=O(d3).attrs({as:"form"})`
  display: grid;
  gap: 18px;
`,fN=O(d3)`
  display: grid;
  gap: 18px;
`,gv=O.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  color: #ffcf94;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`,bv=O.h2`
  margin: 0;
  font-size: clamp(28px, 5vw, 40px);
  line-height: 1.1;
`,pN=O.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.65;
`,dh=O.div`
  display: grid;
  gap: 8px;
`,fh=O.span`
  color: rgba(255, 255, 255, 0.72);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
`,ph=O(a3)`
  gap: 12px;
  padding: 12px 14px;
  border-radius: 14px;
  border-color: rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.05);

  svg {
    color: rgba(255, 200, 138, 0.88);
  }

  input,
  textarea {
    font: inherit;
  }

  input::placeholder,
  textarea::placeholder {
    color: rgba(255, 255, 255, 0.42);
  }

  textarea {
    min-height: 140px;
  }
`,hN=O.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.58);
  font-size: 14px;
  line-height: 1.6;
`,mN=O(i3)`
  width: fit-content;
  min-height: auto;
  padding: 14px 22px;
  border-radius: 12px;
  font-weight: 600;

  @media (max-width: 767px) {
    width: 100%;
  }
`,gN=O.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  border-radius: 16px;
  background: rgba(255, 180, 80, 0.12);
  border: 1px solid rgba(255, 180, 80, 0.25);
  color: #ffd8ab;
  font-weight: 600;
  line-height: 1.5;
`,bN=O.div`
  display: grid;
  gap: 12px;
`,f3=pg`
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 12px;
  align-items: start;
  padding: 14px 16px;
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
    font-size: 16px;
    font-weight: 600;
  }

  span {
    display: block;
    margin-top: 4px;
    color: rgba(255, 255, 255, 0.64);
    font-size: 14px;
    line-height: 1.6;
  }
`,xN=O.div`
  ${f3}
`,xv=O.a`
  ${f3}
  text-decoration: none;

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
    border-color: rgba(255, 180, 80, 0.3);
    background: rgba(255, 255, 255, 0.07);
  }
`,yN=O.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,vN=O.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.78);
  font-size: 13px;
  line-height: 1.4;

  svg {
    color: #ffcf94;
  }
`,p3=Fe`
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
`,wN=Fe`
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
`,SN=Fe`
  0%, 100% {
    transform: scaleX(0.18);
    opacity: 0.42;
  }
  50% {
    transform: scaleX(1);
    opacity: 1;
  }
`,TN=Fe`
  0%, 100% {
    transform: translateY(0) scale(1);
    opacity: 0.72;
  }
  50% {
    transform: translateY(-2px) scale(1.06);
    opacity: 1;
  }
`,jN=Fe`
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
`,kN=Fe`
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
`,CN=Fe`
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
`,EN=Fe`
  0%, 100% {
    transform: translate(-50%, -50%) scale(0.92);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.28);
  }
`,AN=Fe`
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
`,h3=Fe`
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
`,MN=Fe`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`,zN=O.div`
  position: relative;
  overflow: hidden;
  padding: 22px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(180deg, rgba(14, 20, 35, 0.84), rgba(8, 12, 22, 0.9)),
    radial-gradient(circle at 20% 12%, rgba(255, 195, 110, 0.09), transparent 44%);
  box-shadow: 0 24px 80px rgba(3, 8, 20, 0.28);
  isolation: isolate;

  @media (max-width: 991px) {
    display: none;
  }
`,m3=O.div`
  position: absolute;
  border-radius: 999px;
  pointer-events: none;
  filter: blur(64px);
  opacity: 0.26;
  z-index: 0;
`,RN=O(m3)`
  width: 240px;
  height: 180px;
  top: 4%;
  left: 8%;
  background: radial-gradient(circle, rgba(255, 190, 98, 0.54), rgba(255, 190, 98, 0));
  animation: ${p3} 12s ease-in-out infinite;
`,LN=O(m3)`
  width: 280px;
  height: 220px;
  right: 0;
  bottom: 6%;
  background: radial-gradient(circle, rgba(68, 120, 255, 0.46), rgba(68, 120, 255, 0));
  animation: ${p3} 14s ease-in-out infinite reverse;
`,ON=O.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 6px;
  margin-bottom: 18px;
`,DN=O.span`
  color: rgba(255, 208, 148, 0.78);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`,PN=O.p`
  margin: 0;
  max-width: 30ch;
  color: rgba(255, 255, 255, 0.88);
  font-size: 15px;
  line-height: 1.5;
`;O.div`
  position: relative;
  min-height: 346px;
  z-index: 1;
  animation: ${wN} 12.6s ease-in-out infinite;
  transform-style: preserve-3d;
`;O.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  min-height: 260px;
`;O.div`
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
`;O.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 12px;
`;O.strong`
  display: block;
  color: rgba(255, 255, 255, 0.94);
  font-size: 13px;
  font-weight: 700;
`;O.span`
  display: block;
  margin-top: 2px;
  color: rgba(255, 255, 255, 0.56);
  font-size: 11px;
`;O.span`
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
  animation: ${TN} 1.8s ease-in-out infinite;
`;O.div`
  display: grid;
  gap: 10px;
`;O.div`
  position: relative;
  overflow: hidden;
  height: 42px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(10, 15, 28, 0.7);
`;O.div`
  position: absolute;
  inset: 0 auto 0 0;
  width: ${({$width:e})=>`${e}%`};
  border-radius: inherit;
  transform-origin: left center;
  background: ${({$tone:e})=>{switch(e){case"blue":return"linear-gradient(90deg, rgba(72, 129, 255, 0.18), rgba(108, 183, 255, 0.62))";case"green":return"linear-gradient(90deg, rgba(42, 189, 141, 0.18), rgba(88, 227, 178, 0.62))";case"gold":default:return"linear-gradient(90deg, rgba(255, 184, 87, 0.16), rgba(255, 214, 144, 0.62))"}}};
  animation: ${SN} 1.6s ease-in-out infinite;
  animation-delay: ${({$delay:e})=>`${e}s`};
`;O.div`
  --beam-width: ${({$width:e})=>`${e}px`};
  position: absolute;
  width: ${({$width:e})=>`${e}px`};
  height: 4px;
  border-radius: 999px;
  transform: rotate(${({$rotate:e})=>`${e}deg`});
  transform-origin: left center;
  background: linear-gradient(90deg, rgba(255, 188, 97, 0.08), rgba(87, 147, 255, 0.84), rgba(255, 188, 97, 0.08));
  background-size: 200% 100%;
  animation: ${jN} ${({$duration:e})=>`${e}s`} ease-in-out infinite;
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
    animation: ${kN} ${({$duration:e})=>`${Math.max(e-.4,1.2)}s`} linear infinite;
    animation-delay: ${({$delay:e})=>`${e*.5}s`};
  }
`;O.div`
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
    animation: ${CN} ${({$duration:e})=>`${e}s`} ease-out infinite;
    animation-delay: ${({$delay:e})=>`${e}s`};
  }

  &::after {
    width: 10px;
    height: 10px;
    background: radial-gradient(circle, rgba(255, 220, 168, 1), rgba(255, 178, 80, 0.2));
    box-shadow: 0 0 18px rgba(255, 200, 120, 0.58);
    animation: ${EN} ${({$duration:e})=>`${Math.max(e-.4,1.1)}s`} ease-in-out infinite;
    animation-delay: ${({$delay:e})=>`${(e*.5).toFixed(2)}s`};
  }
`;O.div`
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
  animation: ${AN} ${({$duration:e})=>`${e}s`} cubic-bezier(0.42, 0.08, 0.58, 0.92) infinite alternate both;
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
    animation: ${h3} ${({$duration:e})=>`${Math.max(e-.4,1.4)}s`} linear infinite;
    animation-delay: ${({$delay:e})=>`${e}s`};
    pointer-events: none;
  }
`;O.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  color: #fff;
  background: ${({$tone:e})=>{switch(e){case"blue":return"linear-gradient(135deg, rgba(66, 132, 255, 0.88), rgba(92, 181, 255, 0.7))";case"green":return"linear-gradient(135deg, rgba(52, 211, 153, 0.88), rgba(96, 230, 188, 0.66))";case"violet":return"linear-gradient(135deg, rgba(117, 92, 255, 0.84), rgba(173, 110, 255, 0.66))";case"gold":default:return"linear-gradient(135deg, rgba(255, 188, 97, 0.92), rgba(255, 211, 136, 0.7))"}}}; 
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22);
  animation: ${MN} 2.4s ease-in-out infinite;
`;O.div`
  display: grid;
  gap: 3px;
`;O.strong`
  color: rgba(255, 255, 255, 0.94);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
`;O.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  line-height: 1.35;
`;const NN=Fe`
  from {
    transform: translate3d(calc(-50% - (var(--lane-gap) / 2)), 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`,VN=Fe`
  0%, 100% {
    opacity: 0.24;
    transform: scaleX(0.92);
  }
  50% {
    opacity: 0.54;
    transform: scaleX(1);
  }
`,BN=Fe`
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -3px, 0);
  }
`,_N=Fe`
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-6px) scale(1.01);
  }
`,yv=Fe`
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
`,$N=Fe`
  0%, 100% {
    transform: translateY(0);
    border-color: rgba(255, 255, 255, 0.08);
  }
  50% {
    transform: translateY(-3px);
    border-color: rgba(255, 188, 97, 0.18);
  }
`,HN=Fe`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
`,GN=O.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(220px, 0.88fr);
  gap: 18px;
  min-height: 344px;
`,UN=O.div`
  display: grid;
  gap: 14px;
  align-content: start;
`,IN=O.div`
  position: relative;
  overflow: hidden;
  padding: 14px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(180deg, rgba(16, 21, 36, 0.78), rgba(10, 14, 24, 0.84)),
    radial-gradient(circle at left center, rgba(255, 188, 97, 0.08), transparent 44%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
  animation: ${BN} 6.2s ease-in-out infinite;
  will-change: transform;

  &::before {
    content: '';
    position: absolute;
    left: 14px;
    right: 14px;
    bottom: 12px;
    height: 1px;
    background: linear-gradient(90deg, rgba(255, 188, 97, 0), rgba(255, 188, 97, 0.36), rgba(71, 133, 255, 0));
    animation: ${VN} 3.4s ease-in-out infinite;
    pointer-events: none;
  }
`,FN=O.div`
  display: grid;
  gap: 3px;
  margin-bottom: 12px;
`,qN=O.span`
  color: rgba(255, 211, 148, 0.86);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`,KN=O.span`
  color: rgba(255, 255, 255, 0.56);
  font-size: 12px;
  line-height: 1.4;
`,YN=O.div`
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
`,XN=O.div`
  --lane-gap: 12px;
  display: flex;
  gap: var(--lane-gap);
  width: max-content;
  transform: translate3d(calc(-50% - (var(--lane-gap) / 2)), 0, 0);
  animation: ${NN} ${({$duration:e})=>`${e}s`} linear infinite;
  animation-delay: ${({$delay:e})=>`${e}s`};
  will-change: transform;
`,vv=O.div`
  display: flex;
  flex-shrink: 0;
  gap: 12px;
`,wv=O.div`
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
  animation: ${HN} 3.6s ease-in-out infinite;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0));
    transform: translateX(-120%);
    animation: ${h3} 6.8s linear infinite;
    pointer-events: none;
  }
`,Sv=O.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 11px;
  color: #fff;
  background: ${({$tone:e})=>{switch(e){case"blue":return"linear-gradient(135deg, rgba(66, 132, 255, 0.92), rgba(92, 181, 255, 0.72))";case"green":return"linear-gradient(135deg, rgba(52, 211, 153, 0.92), rgba(96, 230, 188, 0.68))";case"violet":return"linear-gradient(135deg, rgba(117, 92, 255, 0.88), rgba(173, 110, 255, 0.68))";case"gold":default:return"linear-gradient(135deg, rgba(255, 188, 97, 0.94), rgba(255, 211, 136, 0.72))"}}};
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18);
`,Tv=O.div`
  display: grid;
  gap: 2px;
`,jv=O.strong`
  color: rgba(255, 255, 255, 0.94);
  font-size: 13px;
  font-weight: 700;
  line-height: 1.3;
`,kv=O.span`
  color: rgba(255, 255, 255, 0.58);
  font-size: 11px;
  line-height: 1.35;
`,QN=O.div`
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
  animation: ${_N} 8.6s ease-in-out infinite;

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
    animation: ${yv} 4.8s ease-out infinite;
  }

  &::after {
    width: 152px;
    height: 152px;
    border: 1px solid rgba(76, 134, 255, 0.12);
    animation: ${yv} 5.8s ease-out infinite;
    animation-delay: 1.1s;
  }
`,WN=O.span`
  position: relative;
  z-index: 1;
  color: rgba(255, 211, 148, 0.82);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`,ZN=O.p`
  position: relative;
  z-index: 1;
  margin: 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: 15px;
  line-height: 1.5;
`,JN=O.div`
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
`,eV=O.strong`
  color: rgba(255, 255, 255, 0.96);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
`,tV=O.span`
  color: rgba(255, 255, 255, 0.58);
  font-size: 12px;
  line-height: 1.4;
`,nV=O.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 10px;
`,iV=O.div`
  display: grid;
  gap: 2px;
  padding: 12px 14px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  animation: ${$N} 3.8s ease-in-out infinite;
  animation-delay: ${({$delay:e})=>`${e}s`};
`,aV=O.strong`
  color: rgba(255, 255, 255, 0.95);
  font-size: 15px;
  font-weight: 700;
  line-height: 1.2;
`,rV=O.span`
  color: rgba(255, 255, 255, 0.58);
  font-size: 12px;
  line-height: 1.35;
`,sV={eyebrow:"Lead Flow",title:"Anfragen laufen sichtbar und ohne Unterbrechung ins CRM, werden sortiert und direkt an den naechsten Schritt uebergeben.",lanes:[{kicker:"Website",caption:"Landingpage + Kontaktformular",duration:9.5,delay:-4.2,cards:[{title:"New Lead",meta:"Website Anfrage",icon:hu,tone:"gold"},{title:"Form submitted",meta:"Kontaktformular",icon:fu,tone:"blue"},{title:"Qualified",meta:"Fit geprueft",icon:Qe,tone:"green"}]},{kicker:"Ads",caption:"Meta Ads + Kampagnen",duration:11,delay:-7.4,cards:[{title:"Meta Ads Lead",meta:"Paid Acquisition",icon:Ha,tone:"violet"},{title:"New Lead",meta:"Campaign entry",icon:hu,tone:"gold"},{title:"Qualified",meta:"Priority score",icon:Qe,tone:"green"}]},{kicker:"Calls",caption:"Terminierung + Follow-up",duration:10.2,delay:-5.8,cards:[{title:"Call booked",meta:"Calendar sync",icon:F4,tone:"green"},{title:"Form submitted",meta:"Brief erhalten",icon:fu,tone:"blue"},{title:"Qualified",meta:"Sales ready",icon:Qe,tone:"gold"}]}],hubEyebrow:"CRM Hub",hubTitle:"Alle Signale laufen in einen klaren Intake-Flow.",hubCoreTitle:"Lead Router",hubCoreMeta:"Capture -> assign -> book",stats:[{value:"1-2h",label:"Antwortzeit",delay:0},{value:"24/7",label:"Inbox capture",delay:.2},{value:"Live",label:"Assigned in CRM",delay:.4}]},oV={eyebrow:"Lead Flow",title:"Zapity bezperervno zakhodiat u CRM, sortuiutsia i peredaiutsia v nastupnyi krok bez pauz i rizkykh loopiv.",lanes:[{kicker:"Website",caption:"Landing page + forma",duration:9.5,delay:-4.2,cards:[{title:"New Lead",meta:"Website Anfrage",icon:hu,tone:"gold"},{title:"Form submitted",meta:"Forma vidpravlena",icon:fu,tone:"blue"},{title:"Qualified",meta:"Lid perevireno",icon:Qe,tone:"green"}]},{kicker:"Ads",caption:"Meta Ads + kampanii",duration:11,delay:-7.4,cards:[{title:"Meta Ads Lead",meta:"Paid Acquisition",icon:Ha,tone:"violet"},{title:"New Lead",meta:"Campaign entry",icon:hu,tone:"gold"},{title:"Qualified",meta:"Priority score",icon:Qe,tone:"green"}]},{kicker:"Calls",caption:"Call booking + follow-up",duration:10.2,delay:-5.8,cards:[{title:"Call booked",meta:"Calendar sync",icon:F4,tone:"green"},{title:"Form submitted",meta:"Brief otrymano",icon:fu,tone:"blue"},{title:"Qualified",meta:"Sales ready",icon:Qe,tone:"gold"}]}],hubEyebrow:"CRM Hub",hubTitle:"Usi signaly skhodiatsia v odyn zrozumilyi intake-flow.",hubCoreTitle:"Lead Router",hubCoreMeta:"Capture -> assign -> book",stats:[{value:"1-2h",label:"Vidpovid",delay:0},{value:"24/7",label:"Lead capture",delay:.2},{value:"Live",label:"Assigned in CRM",delay:.4}]},lV=()=>{const{i18n:e}=Ge(),i=(e.resolvedLanguage??e.language??"de").startsWith("uk")?oV:sV;return d.jsxs(zN,{"aria-hidden":"true",children:[d.jsx(RN,{}),d.jsx(LN,{}),d.jsxs(ON,{children:[d.jsx(DN,{children:i.eyebrow}),d.jsx(PN,{children:i.title})]}),d.jsxs(GN,{children:[d.jsx(UN,{children:i.lanes.map(a=>d.jsxs(IN,{children:[d.jsxs(FN,{children:[d.jsx(qN,{children:a.kicker}),d.jsx(KN,{children:a.caption})]}),d.jsx(YN,{children:d.jsxs(XN,{$duration:a.duration,$delay:a.delay,children:[d.jsx(vv,{children:a.cards.map(o=>{const l=o.icon;return d.jsxs(wv,{children:[d.jsx(Sv,{$tone:o.tone,children:d.jsx(l,{})}),d.jsxs(Tv,{children:[d.jsx(jv,{children:o.title}),d.jsx(kv,{children:o.meta})]})]},`${a.kicker}-${o.title}-${o.meta}`)})}),d.jsx(vv,{"aria-hidden":"true",children:a.cards.map(o=>{const l=o.icon;return d.jsxs(wv,{children:[d.jsx(Sv,{$tone:o.tone,children:d.jsx(l,{})}),d.jsxs(Tv,{children:[d.jsx(jv,{children:o.title}),d.jsx(kv,{children:o.meta})]})]},`${a.kicker}-${o.title}-${o.meta}-clone`)})})]})})]},a.kicker))}),d.jsxs(QN,{children:[d.jsx(WN,{children:i.hubEyebrow}),d.jsx(ZN,{children:i.hubTitle}),d.jsxs(JN,{children:[d.jsx(eV,{children:i.hubCoreTitle}),d.jsx(tV,{children:i.hubCoreMeta})]}),d.jsx(nV,{children:i.stats.map(a=>d.jsxs(iV,{$delay:a.delay,children:[d.jsx(aV,{children:a.value}),d.jsx(rV,{children:a.label})]},a.label))})]})]})]})},cV={hidden:{opacity:0,y:20},show:{opacity:1,y:0}},uV={headline:"Erzaehlen Sie uns von Ihrem Projekt",responseTime:"Durchschnittliche Antwortzeit: 1-2h",subtitle:"Kurz beschreiben, was Sie planen. Sie erhalten eine klare Ersteinschaetzung und den naechsten sinnvollen Schritt.",quickContacts:"Direkter Kontakt",responseNote:"Antwort meist innerhalb von 1-2 Stunden",formTitle:"Projektanfrage",formIntro:"Je klarer die Anfrage, desto schneller koennen wir Aufwand, Prioritaeten und naechste Schritte einschaetzen.",formHelp:"Zum Start reichen Branche, Ziel und was zuerst verbessert werden soll.",labels:{name:"Ihr Name",business:"Unternehmen",message:"Projekt oder Ziel"},contactMeta:{location:"Standort fuer schnelle Abstimmung",email:"Projektanfragen per E-Mail",phone:"Kurzes Erstgespraech oder Rueckruf"},trustItems:["Direkte Kommunikation","Klare Ersteinschaetzung","Schnelle Rueckmeldung"]},dV={headline:"Розкажіть про ваш проєкт",responseTime:"Середній час відповіді: 1-2 години",subtitle:"Коротко опишіть ваш запит. Ви отримаєте чітку первинну оцінку та зрозумілий наступний крок.",quickContacts:"Прямий контакт",responseNote:"Відповідаємо зазвичай протягом 1-2 годин",formTitle:"Запит на консультацію",formIntro:"Чим чіткіше описаний запит, тим швидше ми зможемо оцінити обсяг роботи та запропонувати наступний крок.",formHelp:"Для старту достатньо ніші, цілі та того, що потрібно покращити в першу чергу.",labels:{name:"Ваше ім'я",business:"Компанія",message:"Проєкт або задача"},contactMeta:{location:"Локальна студія з швидким контактом",email:"Запит на консультацію електронною поштою",phone:"Короткий дзвінок або зворотний зв'язок"},trustItems:["Пряма комунікація","Чітка перша оцінка","Швидкий зворотний зв'язок"]},fV=()=>{var v;const{t:e,i18n:t}=Ge(),a=((v=ii().state)==null?void 0:v.prefillNeed)||"",[o,l]=C.useState(""),[u,f]=C.useState(""),[p,m]=C.useState(a),x=(t.resolvedLanguage??t.language??"de").startsWith("uk")?dV:uV;C.useEffect(()=>{a&&m(a)},[a]);const y=S=>{S.preventDefault();const j=e("contact.form.title",{defaultValue:x.formTitle}),A=u.trim()?` - ${u.trim()}`:"",k=[`${x.labels.name}: ${o.trim()||"-"}`,`${x.labels.business}: ${u.trim()||"-"}`,`${x.labels.message}:`,p.trim()||"-"].join(`
`);window.location.href=`mailto:kontakt@vs-web-studio.de?subject=${encodeURIComponent(`${j}${A}`)}&body=${encodeURIComponent(k)}`};return d.jsx(dn,{children:d.jsx(fn,{children:d.jsx(aN,{as:ae.section,initial:"hidden",animate:"show",variants:cV,transition:{duration:.62,ease:Cn},children:d.jsxs(rN,{children:[d.jsxs(sN,{children:[d.jsxs(lN,{children:[d.jsx(Hu,{}),d.jsx("span",{children:e("contact.responseTime",{defaultValue:x.responseTime})})]}),d.jsx(cN,{children:d.jsx(_a,{text:e("contact.h1",{defaultValue:x.headline}),durationMs:2200,storageKey:"kontakt_h1_once"})}),d.jsx(uN,{children:e("contact.subtitle",{defaultValue:x.subtitle})}),d.jsxs(dN,{onSubmit:y,noValidate:!0,children:[d.jsx(gv,{children:"VS Web Studio"}),d.jsx(bv,{children:e("contact.form.title",{defaultValue:x.formTitle})}),d.jsx(pN,{children:e("contact.form.intro",{defaultValue:x.formIntro})}),d.jsxs(dh,{children:[d.jsx(fh,{children:e("contact.form.labels.name",{defaultValue:x.labels.name})}),d.jsxs(ph,{children:[d.jsx(aA,{}),d.jsx("input",{type:"text",name:"name",value:o,onChange:S=>l(S.target.value),placeholder:e("contact.form.name",{defaultValue:x.labels.name}),"aria-label":e("contact.form.labels.name",{defaultValue:x.labels.name}),required:!0})]})]}),d.jsxs(dh,{children:[d.jsx(fh,{children:e("contact.form.labels.business",{defaultValue:x.labels.business})}),d.jsxs(ph,{children:[d.jsx(I4,{}),d.jsx("input",{type:"text",name:"business",value:u,onChange:S=>f(S.target.value),placeholder:e("contact.form.business",{defaultValue:x.labels.business}),"aria-label":e("contact.form.labels.business",{defaultValue:x.labels.business}),required:!0})]})]}),d.jsxs(dh,{children:[d.jsx(fh,{children:e("contact.form.labels.message",{defaultValue:x.labels.message})}),d.jsxs(ph,{children:[d.jsx(FE,{}),d.jsx("textarea",{name:"message",placeholder:e("contact.form.need"),value:p,onChange:S=>m(S.target.value),"aria-label":e("contact.form.labels.message",{defaultValue:x.labels.message}),required:!0})]})]}),d.jsx(hN,{children:e("contact.form.help",{defaultValue:x.formHelp})}),d.jsxs(mN,{type:"submit",children:[d.jsx(Yr,{}),e("contact.form.submit")]})]})]}),d.jsxs(oN,{children:[d.jsx(lV,{}),d.jsxs(fN,{children:[d.jsx(gv,{children:"VS Web Studio"}),d.jsx(bv,{children:e("contact.quickContacts",{defaultValue:x.quickContacts})}),d.jsxs(gN,{children:[d.jsx(sA,{}),d.jsx("span",{children:e("contact.responseNote",{defaultValue:x.responseNote})})]}),d.jsxs(bN,{children:[d.jsxs(xN,{children:[d.jsx(Lo,{}),d.jsxs("div",{children:[d.jsx("strong",{children:"Hildesheim"}),d.jsx("span",{children:e("contact.contactMeta.location",{defaultValue:x.contactMeta.location})})]})]}),d.jsxs(xv,{href:"mailto:kontakt@vs-web-studio.de",children:[d.jsx(Yr,{}),d.jsxs("div",{children:[d.jsx("strong",{children:"kontakt@vs-web-studio.de"}),d.jsx("span",{children:e("contact.contactMeta.email",{defaultValue:x.contactMeta.email})})]})]}),d.jsxs(xv,{href:"tel:+49301234567",children:[d.jsx(WE,{}),d.jsxs("div",{children:[d.jsx("strong",{children:"+49 30 1234567"}),d.jsx("span",{children:e("contact.contactMeta.phone",{defaultValue:x.contactMeta.phone})})]})]})]}),d.jsx(yN,{children:x.trustItems.map((S,j)=>d.jsxs(vN,{children:[d.jsx(Qe,{}),e(`contact.trustItems.${j}`,{defaultValue:S})]},S))})]})]})]})})})})},pV=()=>{const{t:e}=Ge();return d.jsx(dn,{children:d.jsxs(fn,{children:[d.jsxs(ai,{children:[d.jsx("h1",{children:d.jsx(_a,{text:e("blog.h1"),durationMs:2600,storageKey:"blog_h1_once"})}),d.jsx("p",{children:e("blog.subtitle")})]}),d.jsx(ht,{children:d.jsxs(gg,{children:[d.jsx(He,{children:d.jsxs("h3",{children:[d.jsx(Ft,{children:d.jsx(Xr,{})}),e("blog.cards.c1")]})}),d.jsx(He,{children:d.jsxs("h3",{children:[d.jsx(Ft,{children:d.jsx(X4,{})}),e("blog.cards.c2")]})}),d.jsx(He,{children:d.jsxs("h3",{children:[d.jsx(Ft,{children:d.jsx(Ha,{})}),e("blog.cards.c3")]})}),d.jsx(He,{children:d.jsxs("h3",{children:[d.jsx(Ft,{children:d.jsx(Xr,{})}),e("blog.cards.c4")]})})]})}),d.jsxs(bg,{children:[d.jsx("h2",{children:d.jsx(_a,{text:e("blog.leadMagnet"),durationMs:1800,storageKey:"blog_leadmagnet_once"})}),d.jsxs(wD,{style:{maxWidth:420},children:[d.jsxs(a3,{children:[d.jsx(Yr,{})," ",d.jsx("input",{type:"email",placeholder:e("blog.emailPlaceholder"),required:!0})]}),d.jsxs(i3,{type:"submit",children:[d.jsx(Yr,{})," ",e("blog.getGuide")]})]})]})]})})},hV=()=>{const{t:e}=Ge();return d.jsx(dn,{children:d.jsxs(fn,{children:[d.jsxs(ai,{children:[d.jsx("h1",{children:e("legal.impressum.h1")}),d.jsx("p",{children:e("legal.impressum.subtitle")})]}),d.jsx(ht,{children:d.jsxs(He,{children:[d.jsx("p",{children:e("legal.impressum.l1")}),d.jsx("p",{children:e("legal.impressum.l2")}),d.jsx("p",{children:e("legal.impressum.l3")}),d.jsx("p",{children:e("legal.impressum.l4")}),d.jsx("p",{children:e("legal.impressum.l5")})]})})]})})},mV=()=>{const{t:e}=Ge();return d.jsx(dn,{children:d.jsxs(fn,{children:[d.jsxs(ai,{children:[d.jsx("h1",{children:e("legal.datenschutz.h1")}),d.jsx("p",{children:e("legal.datenschutz.subtitle")})]}),d.jsx(ht,{children:d.jsxs(He,{children:[d.jsx("p",{children:e("legal.datenschutz.l1")}),d.jsx("p",{children:e("legal.datenschutz.l2")}),d.jsx("p",{children:e("legal.datenschutz.l3")}),d.jsx("p",{children:e("legal.datenschutz.l4")})]})})]})})},gV=()=>{const{t:e}=Ge();return d.jsx(dn,{children:d.jsxs(fn,{children:[d.jsxs(ai,{children:[d.jsx("h1",{children:e("legal.agb.h1")}),d.jsx("p",{children:e("legal.agb.subtitle")})]}),d.jsx(ht,{children:d.jsxs(He,{children:[d.jsx("p",{children:e("legal.agb.l1")}),d.jsx("p",{children:e("legal.agb.l2")})]})})]})})},bV=()=>{const{t:e}=Ge();return d.jsx(dn,{children:d.jsxs(fn,{children:[d.jsxs(ai,{children:[d.jsx("h1",{children:e("legal.cookies.h1")}),d.jsx("p",{children:e("legal.cookies.subtitle")})]}),d.jsx(ht,{children:d.jsxs(He,{children:[d.jsx("p",{children:e("legal.cookies.l1")}),d.jsx("p",{children:e("legal.cookies.l2")})]})})]})})},xV=()=>{const{t:e}=Ge();return d.jsx(dn,{children:d.jsx(fn,{children:d.jsxs(ai,{children:[d.jsx("h1",{children:e("niche.handwerker.h1")}),d.jsx("p",{children:e("niche.handwerker.p")}),d.jsx(aa,{children:d.jsx(ra,{to:"/kontakt",children:e("common.projectRequest")})})]})})})},yV=()=>{const{t:e}=Ge();return d.jsx(dn,{children:d.jsx(fn,{children:d.jsxs(ai,{children:[d.jsx("h1",{children:e("niche.praxis.h1")}),d.jsx("p",{children:e("niche.praxis.p")}),d.jsx(aa,{children:d.jsx(ra,{to:"/kontakt",children:e("common.projectRequest")})})]})})})},vV=()=>{const{t:e}=Ge();return d.jsx(dn,{children:d.jsx(fn,{children:d.jsxs(ai,{children:[d.jsx("h1",{children:e("niche.werkstatt.h1")}),d.jsx("p",{children:e("niche.werkstatt.p")}),d.jsx(aa,{children:d.jsx(ra,{to:"/kontakt",children:e("common.projectRequest")})})]})})})},wV=()=>d.jsx(YS,{children:d.jsxs(wt,{path:"/",element:d.jsx(iR,{}),children:[d.jsx(wt,{index:!0,element:d.jsx(lD,{})}),d.jsx(wt,{path:"services",element:d.jsx(dP,{})}),d.jsx(wt,{path:"preise",element:d.jsx(GP,{})}),d.jsx(wt,{path:"referenzen",element:d.jsx(WP,{})}),d.jsx(wt,{path:"ueber-uns",element:d.jsx(iN,{})}),d.jsx(wt,{path:"kontakt",element:d.jsx(fV,{})}),d.jsx(wt,{path:"blog",element:d.jsx(pV,{})}),d.jsx(wt,{path:"handwerker",element:d.jsx(xV,{})}),d.jsx(wt,{path:"praxis",element:d.jsx(yV,{})}),d.jsx(wt,{path:"werkstatt",element:d.jsx(vV,{})}),d.jsx(wt,{path:"impressum",element:d.jsx(hV,{})}),d.jsx(wt,{path:"datenschutz",element:d.jsx(mV,{})}),d.jsx(wt,{path:"agb",element:d.jsx(gV,{})}),d.jsx(wt,{path:"cookies",element:d.jsx(bV,{})}),d.jsx(wt,{path:"home",element:d.jsx(Cb,{to:"/",replace:!0})}),d.jsx(wt,{path:"*",element:d.jsx(Cb,{to:"/",replace:!0})})]})});Y8.createRoot(document.getElementById("root")).render(d.jsxs(Ee.StrictMode,{children:[d.jsx(vT,{styles:CT}),d.jsx(x9,{basename:"/",children:d.jsx(yM,{children:d.jsx(wV,{})})})]}));export{SV as c,Cv as g};
