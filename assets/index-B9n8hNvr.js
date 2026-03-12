function _6(e,t){for(var a=0;a<t.length;a++){const i=t[a];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function a(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=a(o);fetch(o.href,l)}})();var EN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Cv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mp={exports:{}},fo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hb;function $6(){if(hb)return fo;hb=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function a(i,o,l){var u=null;if(l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),"key"in o){l={};for(var f in o)f!=="key"&&(l[f]=o[f])}else l=o;return o=l.ref,{$$typeof:e,type:i,key:u,ref:o!==void 0?o:null,props:l}}return fo.Fragment=t,fo.jsx=a,fo.jsxs=a,fo}var mb;function H6(){return mb||(mb=1,mp.exports=$6()),mp.exports}var d=H6(),gp={exports:{}},po={},bp={exports:{}},xp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gb;function G6(){return gb||(gb=1,function(e){function t(U,P){var $=U.length;U.push(P);e:for(;0<$;){var Q=$-1>>>1,z=U[Q];if(0<o(z,P))U[Q]=P,U[$]=z,$=Q;else break e}}function a(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var P=U[0],$=U.pop();if($!==P){U[0]=$;e:for(var Q=0,z=U.length,X=z>>>1;Q<X;){var ne=2*(Q+1)-1,ae=U[ne],oe=ne+1,ge=U[oe];if(0>o(ae,$))oe<z&&0>o(ge,ae)?(U[Q]=ge,U[oe]=$,Q=oe):(U[Q]=ae,U[ne]=$,Q=ne);else if(oe<z&&0>o(ge,$))U[Q]=ge,U[oe]=$,Q=oe;else break e}}return P}function o(U,P){var $=U.sortIndex-P.sortIndex;return $!==0?$:U.id-P.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();e.unstable_now=function(){return u.now()-f}}var p=[],m=[],g=1,x=null,y=3,v=!1,S=!1,k=!1,A=!1,j=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function _(U){for(var P=a(m);P!==null;){if(P.callback===null)i(m);else if(P.startTime<=U)i(m),P.sortIndex=P.expirationTime,t(p,P);else break;P=a(m)}}function M(U){if(k=!1,_(U),!S)if(a(p)!==null)S=!0,D||(D=!0,ee());else{var P=a(m);P!==null&&ue(M,P.startTime-U)}}var D=!1,N=-1,V=5,q=-1;function W(){return A?!0:!(e.unstable_now()-q<V)}function H(){if(A=!1,D){var U=e.unstable_now();q=U;var P=!0;try{e:{S=!1,k&&(k=!1,R(N),N=-1),v=!0;var $=y;try{t:{for(_(U),x=a(p);x!==null&&!(x.expirationTime>U&&W());){var Q=x.callback;if(typeof Q=="function"){x.callback=null,y=x.priorityLevel;var z=Q(x.expirationTime<=U);if(U=e.unstable_now(),typeof z=="function"){x.callback=z,_(U),P=!0;break t}x===a(p)&&i(p),_(U)}else i(p);x=a(p)}if(x!==null)P=!0;else{var X=a(m);X!==null&&ue(M,X.startTime-U),P=!1}}break e}finally{x=null,y=$,v=!1}P=void 0}}finally{P?ee():D=!1}}}var ee;if(typeof C=="function")ee=function(){C(H)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,de=se.port2;se.port1.onmessage=H,ee=function(){de.postMessage(null)}}else ee=function(){j(H,0)};function ue(U,P){N=j(function(){U(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_next=function(U){switch(y){case 1:case 2:case 3:var P=3;break;default:P=y}var $=y;y=P;try{return U()}finally{y=$}},e.unstable_requestPaint=function(){A=!0},e.unstable_runWithPriority=function(U,P){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var $=y;y=U;try{return P()}finally{y=$}},e.unstable_scheduleCallback=function(U,P,$){var Q=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?Q+$:Q):$=Q,U){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=$+z,U={id:g++,callback:P,priorityLevel:U,startTime:$,expirationTime:z,sortIndex:-1},$>Q?(U.sortIndex=$,t(m,U),a(p)===null&&U===a(m)&&(k?(R(N),N=-1):k=!0,ue(M,$-Q))):(U.sortIndex=z,t(p,U),S||v||(S=!0,D||(D=!0,ee()))),U},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(U){var P=y;return function(){var $=y;y=P;try{return U.apply(this,arguments)}finally{y=$}}}}(xp)),xp}var bb;function U6(){return bb||(bb=1,bp.exports=G6()),bp.exports}var yp={exports:{}},ye={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xb;function I6(){if(xb)return ye;xb=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=x&&z[x]||z["@@iterator"],typeof z=="function"?z:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,k={};function A(z,X,ne){this.props=z,this.context=X,this.refs=k,this.updater=ne||v}A.prototype.isReactComponent={},A.prototype.setState=function(z,X){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,X,"setState")},A.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function j(){}j.prototype=A.prototype;function R(z,X,ne){this.props=z,this.context=X,this.refs=k,this.updater=ne||v}var C=R.prototype=new j;C.constructor=R,S(C,A.prototype),C.isPureReactComponent=!0;var _=Array.isArray,M={H:null,A:null,T:null,S:null,V:null},D=Object.prototype.hasOwnProperty;function N(z,X,ne,ae,oe,ge){return ne=ge.ref,{$$typeof:e,type:z,key:X,ref:ne!==void 0?ne:null,props:ge}}function V(z,X){return N(z.type,X,void 0,void 0,void 0,z.props)}function q(z){return typeof z=="object"&&z!==null&&z.$$typeof===e}function W(z){var X={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(ne){return X[ne]})}var H=/\/+/g;function ee(z,X){return typeof z=="object"&&z!==null&&z.key!=null?W(""+z.key):X.toString(36)}function se(){}function de(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(se,se):(z.status="pending",z.then(function(X){z.status==="pending"&&(z.status="fulfilled",z.value=X)},function(X){z.status==="pending"&&(z.status="rejected",z.reason=X)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function ue(z,X,ne,ae,oe){var ge=typeof z;(ge==="undefined"||ge==="boolean")&&(z=null);var ce=!1;if(z===null)ce=!0;else switch(ge){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(z.$$typeof){case e:case t:ce=!0;break;case g:return ce=z._init,ue(ce(z._payload),X,ne,ae,oe)}}if(ce)return oe=oe(z),ce=ae===""?"."+ee(z,0):ae,_(oe)?(ne="",ce!=null&&(ne=ce.replace(H,"$&/")+"/"),ue(oe,X,ne,"",function(zt){return zt})):oe!=null&&(q(oe)&&(oe=V(oe,ne+(oe.key==null||z&&z.key===oe.key?"":(""+oe.key).replace(H,"$&/")+"/")+ce)),X.push(oe)),1;ce=0;var mt=ae===""?".":ae+":";if(_(z))for(var Oe=0;Oe<z.length;Oe++)ae=z[Oe],ge=mt+ee(ae,Oe),ce+=ue(ae,X,ne,ge,oe);else if(Oe=y(z),typeof Oe=="function")for(z=Oe.call(z),Oe=0;!(ae=z.next()).done;)ae=ae.value,ge=mt+ee(ae,Oe++),ce+=ue(ae,X,ne,ge,oe);else if(ge==="object"){if(typeof z.then=="function")return ue(de(z),X,ne,ae,oe);throw X=String(z),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return ce}function U(z,X,ne){if(z==null)return z;var ae=[],oe=0;return ue(z,ae,"","",function(ge){return X.call(ne,ge,oe++)}),ae}function P(z){if(z._status===-1){var X=z._result;X=X(),X.then(function(ne){(z._status===0||z._status===-1)&&(z._status=1,z._result=ne)},function(ne){(z._status===0||z._status===-1)&&(z._status=2,z._result=ne)}),z._status===-1&&(z._status=0,z._result=X)}if(z._status===1)return z._result.default;throw z._result}var $=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function Q(){}return ye.Children={map:U,forEach:function(z,X,ne){U(z,function(){X.apply(this,arguments)},ne)},count:function(z){var X=0;return U(z,function(){X++}),X},toArray:function(z){return U(z,function(X){return X})||[]},only:function(z){if(!q(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},ye.Component=A,ye.Fragment=a,ye.Profiler=o,ye.PureComponent=R,ye.StrictMode=i,ye.Suspense=p,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=M,ye.__COMPILER_RUNTIME={__proto__:null,c:function(z){return M.H.useMemoCache(z)}},ye.cache=function(z){return function(){return z.apply(null,arguments)}},ye.cloneElement=function(z,X,ne){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var ae=S({},z.props),oe=z.key,ge=void 0;if(X!=null)for(ce in X.ref!==void 0&&(ge=void 0),X.key!==void 0&&(oe=""+X.key),X)!D.call(X,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&X.ref===void 0||(ae[ce]=X[ce]);var ce=arguments.length-2;if(ce===1)ae.children=ne;else if(1<ce){for(var mt=Array(ce),Oe=0;Oe<ce;Oe++)mt[Oe]=arguments[Oe+2];ae.children=mt}return N(z.type,oe,void 0,void 0,ge,ae)},ye.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:l,_context:z},z},ye.createElement=function(z,X,ne){var ae,oe={},ge=null;if(X!=null)for(ae in X.key!==void 0&&(ge=""+X.key),X)D.call(X,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(oe[ae]=X[ae]);var ce=arguments.length-2;if(ce===1)oe.children=ne;else if(1<ce){for(var mt=Array(ce),Oe=0;Oe<ce;Oe++)mt[Oe]=arguments[Oe+2];oe.children=mt}if(z&&z.defaultProps)for(ae in ce=z.defaultProps,ce)oe[ae]===void 0&&(oe[ae]=ce[ae]);return N(z,ge,void 0,void 0,null,oe)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(z){return{$$typeof:f,render:z}},ye.isValidElement=q,ye.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:P}},ye.memo=function(z,X){return{$$typeof:m,type:z,compare:X===void 0?null:X}},ye.startTransition=function(z){var X=M.T,ne={};M.T=ne;try{var ae=z(),oe=M.S;oe!==null&&oe(ne,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(Q,$)}catch(ge){$(ge)}finally{M.T=X}},ye.unstable_useCacheRefresh=function(){return M.H.useCacheRefresh()},ye.use=function(z){return M.H.use(z)},ye.useActionState=function(z,X,ne){return M.H.useActionState(z,X,ne)},ye.useCallback=function(z,X){return M.H.useCallback(z,X)},ye.useContext=function(z){return M.H.useContext(z)},ye.useDebugValue=function(){},ye.useDeferredValue=function(z,X){return M.H.useDeferredValue(z,X)},ye.useEffect=function(z,X,ne){var ae=M.H;if(typeof ne=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ae.useEffect(z,X)},ye.useId=function(){return M.H.useId()},ye.useImperativeHandle=function(z,X,ne){return M.H.useImperativeHandle(z,X,ne)},ye.useInsertionEffect=function(z,X){return M.H.useInsertionEffect(z,X)},ye.useLayoutEffect=function(z,X){return M.H.useLayoutEffect(z,X)},ye.useMemo=function(z,X){return M.H.useMemo(z,X)},ye.useOptimistic=function(z,X){return M.H.useOptimistic(z,X)},ye.useReducer=function(z,X,ne){return M.H.useReducer(z,X,ne)},ye.useRef=function(z){return M.H.useRef(z)},ye.useState=function(z){return M.H.useState(z)},ye.useSyncExternalStore=function(z,X,ne){return M.H.useSyncExternalStore(z,X,ne)},ye.useTransition=function(){return M.H.useTransition()},ye.version="19.1.1",ye}var yb;function gm(){return yb||(yb=1,yp.exports=I6()),yp.exports}var vp={exports:{}},Ot={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vb;function F6(){if(vb)return Ot;vb=1;var e=gm();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var i={d:{f:a,r:function(){throw Error(t(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(p,m,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:x==null?null:""+x,children:p,containerInfo:m,implementation:g}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Ot.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return l(p,m,null,g)},Ot.flushSync=function(p){var m=u.T,g=i.p;try{if(u.T=null,i.p=2,p)return p()}finally{u.T=m,i.p=g,i.d.f()}},Ot.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,i.d.C(p,m))},Ot.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},Ot.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,x=f(g,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,v=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?i.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:v}):g==="script"&&i.d.X(p,{crossOrigin:x,integrity:y,fetchPriority:v,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Ot.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=f(m.as,m.crossOrigin);i.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&i.d.M(p)},Ot.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,x=f(g,m.crossOrigin);i.d.L(p,g,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Ot.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=f(m.as,m.crossOrigin);i.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else i.d.m(p)},Ot.requestFormReset=function(p){i.d.r(p)},Ot.unstable_batchedUpdates=function(p,m){return p(m)},Ot.useFormState=function(p,m,g){return u.H.useFormState(p,m,g)},Ot.useFormStatus=function(){return u.H.useHostTransitionStatus()},Ot.version="19.1.1",Ot}var wb;function Av(){if(wb)return vp.exports;wb=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),vp.exports=F6(),vp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sb;function q6(){if(Sb)return po;Sb=1;var e=U6(),t=gm(),a=Av();function i(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var r=n,s=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(s=r.return),n=r.return;while(n)}return r.tag===3?s:null}function u(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function f(n){if(l(n)!==n)throw Error(i(188))}function p(n){var r=n.alternate;if(!r){if(r=l(n),r===null)throw Error(i(188));return r!==n?null:n}for(var s=n,c=r;;){var h=s.return;if(h===null)break;var b=h.alternate;if(b===null){if(c=h.return,c!==null){s=c;continue}break}if(h.child===b.child){for(b=h.child;b;){if(b===s)return f(h),n;if(b===c)return f(h),r;b=b.sibling}throw Error(i(188))}if(s.return!==c.return)s=h,c=b;else{for(var w=!1,T=h.child;T;){if(T===s){w=!0,s=h,c=b;break}if(T===c){w=!0,c=h,s=b;break}T=T.sibling}if(!w){for(T=b.child;T;){if(T===s){w=!0,s=b,c=h;break}if(T===c){w=!0,c=b,s=h;break}T=T.sibling}if(!w)throw Error(i(189))}}if(s.alternate!==c)throw Error(i(190))}if(s.tag!==3)throw Error(i(188));return s.stateNode.current===s?n:r}function m(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=m(n),r!==null)return r;n=n.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),R=Symbol.for("react.consumer"),C=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),q=Symbol.for("react.activity"),W=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function ee(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var se=Symbol.for("react.client.reference");function de(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===se?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case S:return"Fragment";case A:return"Profiler";case k:return"StrictMode";case M:return"Suspense";case D:return"SuspenseList";case q:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case v:return"Portal";case C:return(n.displayName||"Context")+".Provider";case R:return(n._context.displayName||"Context")+".Consumer";case _:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case N:return r=n.displayName||null,r!==null?r:de(n.type)||"Memo";case V:r=n._payload,n=n._init;try{return de(n(r))}catch{}}return null}var ue=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},Q=[],z=-1;function X(n){return{current:n}}function ne(n){0>z||(n.current=Q[z],Q[z]=null,z--)}function ae(n,r){z++,Q[z]=n.current,n.current=r}var oe=X(null),ge=X(null),ce=X(null),mt=X(null);function Oe(n,r){switch(ae(ce,r),ae(ge,n),ae(oe,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?G2(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=G2(r),n=U2(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ne(oe),ae(oe,n)}function zt(){ne(oe),ne(ge),ne(ce)}function di(n){n.memoizedState!==null&&ae(mt,n);var r=oe.current,s=U2(r,n.type);r!==s&&(ae(ge,n),ae(oe,s))}function oa(n){ge.current===n&&(ne(oe),ne(ge)),mt.current===n&&(ne(mt),so._currentValue=$)}var hn=Object.prototype.hasOwnProperty,td=e.unstable_scheduleCallback,nd=e.unstable_cancelCallback,b3=e.unstable_shouldYield,x3=e.unstable_requestPaint,_n=e.unstable_now,y3=e.unstable_getCurrentPriorityLevel,Sg=e.unstable_ImmediatePriority,Tg=e.unstable_UserBlockingPriority,dl=e.unstable_NormalPriority,v3=e.unstable_LowPriority,kg=e.unstable_IdlePriority,w3=e.log,S3=e.unstable_setDisableYieldValue,hs=null,Zt=null;function za(n){if(typeof w3=="function"&&S3(n),Zt&&typeof Zt.setStrictMode=="function")try{Zt.setStrictMode(hs,n)}catch{}}var Jt=Math.clz32?Math.clz32:j3,T3=Math.log,k3=Math.LN2;function j3(n){return n>>>=0,n===0?32:31-(T3(n)/k3|0)|0}var fl=256,pl=4194304;function fi(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function hl(n,r,s){var c=n.pendingLanes;if(c===0)return 0;var h=0,b=n.suspendedLanes,w=n.pingedLanes;n=n.warmLanes;var T=c&134217727;return T!==0?(c=T&~b,c!==0?h=fi(c):(w&=T,w!==0?h=fi(w):s||(s=T&~n,s!==0&&(h=fi(s))))):(T=c&~b,T!==0?h=fi(T):w!==0?h=fi(w):s||(s=c&~n,s!==0&&(h=fi(s)))),h===0?0:r!==0&&r!==h&&(r&b)===0&&(b=h&-h,s=r&-r,b>=s||b===32&&(s&4194048)!==0)?r:h}function ms(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function E3(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jg(){var n=fl;return fl<<=1,(fl&4194048)===0&&(fl=256),n}function Eg(){var n=pl;return pl<<=1,(pl&62914560)===0&&(pl=4194304),n}function ad(n){for(var r=[],s=0;31>s;s++)r.push(n);return r}function gs(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function C3(n,r,s,c,h,b){var w=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var T=n.entanglements,O=n.expirationTimes,F=n.hiddenUpdates;for(s=w&~s;0<s;){var Z=31-Jt(s),te=1<<Z;T[Z]=0,O[Z]=-1;var K=F[Z];if(K!==null)for(F[Z]=null,Z=0;Z<K.length;Z++){var Y=K[Z];Y!==null&&(Y.lane&=-536870913)}s&=~te}c!==0&&Cg(n,c,0),b!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=b&~(w&~r))}function Cg(n,r,s){n.pendingLanes|=r,n.suspendedLanes&=~r;var c=31-Jt(r);n.entangledLanes|=r,n.entanglements[c]=n.entanglements[c]|1073741824|s&4194090}function Ag(n,r){var s=n.entangledLanes|=r;for(n=n.entanglements;s;){var c=31-Jt(s),h=1<<c;h&r|n[c]&r&&(n[c]|=r),s&=~h}}function id(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function rd(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Mg(){var n=P.p;return n!==0?n:(n=window.event,n===void 0?32:lb(n.type))}function A3(n,r){var s=P.p;try{return P.p=n,r()}finally{P.p=s}}var Ra=Math.random().toString(36).slice(2),Rt="__reactFiber$"+Ra,$t="__reactProps$"+Ra,qi="__reactContainer$"+Ra,sd="__reactEvents$"+Ra,M3="__reactListeners$"+Ra,z3="__reactHandles$"+Ra,zg="__reactResources$"+Ra,bs="__reactMarker$"+Ra;function od(n){delete n[Rt],delete n[$t],delete n[sd],delete n[M3],delete n[z3]}function Ki(n){var r=n[Rt];if(r)return r;for(var s=n.parentNode;s;){if(r=s[qi]||s[Rt]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(n=K2(n);n!==null;){if(s=n[Rt])return s;n=K2(n)}return r}n=s,s=n.parentNode}return null}function Yi(n){if(n=n[Rt]||n[qi]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function xs(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(i(33))}function Xi(n){var r=n[zg];return r||(r=n[zg]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function gt(n){n[bs]=!0}var Rg=new Set,Lg={};function pi(n,r){Wi(n,r),Wi(n+"Capture",r)}function Wi(n,r){for(Lg[n]=r,n=0;n<r.length;n++)Rg.add(r[n])}var R3=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Og={},Dg={};function L3(n){return hn.call(Dg,n)?!0:hn.call(Og,n)?!1:R3.test(n)?Dg[n]=!0:(Og[n]=!0,!1)}function ml(n,r,s){if(L3(r))if(s===null)n.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var c=r.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+s)}}function gl(n,r,s){if(s===null)n.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+s)}}function la(n,r,s,c){if(c===null)n.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(r,s,""+c)}}var ld,Pg;function Qi(n){if(ld===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);ld=r&&r[1]||"",Pg=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ld+n+Pg}var cd=!1;function ud(n,r){if(!n||cd)return"";cd=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(r){var te=function(){throw Error()};if(Object.defineProperty(te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(te,[])}catch(Y){var K=Y}Reflect.construct(n,[],te)}else{try{te.call()}catch(Y){K=Y}n.call(te.prototype)}}else{try{throw Error()}catch(Y){K=Y}(te=n())&&typeof te.catch=="function"&&te.catch(function(){})}}catch(Y){if(Y&&K&&typeof Y.stack=="string")return[Y.stack,K.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var b=c.DetermineComponentFrameRoot(),w=b[0],T=b[1];if(w&&T){var O=w.split(`
`),F=T.split(`
`);for(h=c=0;c<O.length&&!O[c].includes("DetermineComponentFrameRoot");)c++;for(;h<F.length&&!F[h].includes("DetermineComponentFrameRoot");)h++;if(c===O.length||h===F.length)for(c=O.length-1,h=F.length-1;1<=c&&0<=h&&O[c]!==F[h];)h--;for(;1<=c&&0<=h;c--,h--)if(O[c]!==F[h]){if(c!==1||h!==1)do if(c--,h--,0>h||O[c]!==F[h]){var Z=`
`+O[c].replace(" at new "," at ");return n.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",n.displayName)),Z}while(1<=c&&0<=h);break}}}finally{cd=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?Qi(s):""}function O3(n){switch(n.tag){case 26:case 27:case 5:return Qi(n.type);case 16:return Qi("Lazy");case 13:return Qi("Suspense");case 19:return Qi("SuspenseList");case 0:case 15:return ud(n.type,!1);case 11:return ud(n.type.render,!1);case 1:return ud(n.type,!0);case 31:return Qi("Activity");default:return""}}function Vg(n){try{var r="";do r+=O3(n),n=n.return;while(n);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function mn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ng(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function D3(n){var r=Ng(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,b=s.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(w){c=""+w,b.call(this,w)}}),Object.defineProperty(n,r,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function bl(n){n._valueTracker||(n._valueTracker=D3(n))}function Bg(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var s=r.getValue(),c="";return n&&(c=Ng(n)?n.checked?"true":"false":n.value),n=c,n!==s?(r.setValue(n),!0):!1}function xl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var P3=/[\n"\\]/g;function gn(n){return n.replace(P3,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function dd(n,r,s,c,h,b,w,T){n.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?n.type=w:n.removeAttribute("type"),r!=null?w==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+mn(r)):n.value!==""+mn(r)&&(n.value=""+mn(r)):w!=="submit"&&w!=="reset"||n.removeAttribute("value"),r!=null?fd(n,w,mn(r)):s!=null?fd(n,w,mn(s)):c!=null&&n.removeAttribute("value"),h==null&&b!=null&&(n.defaultChecked=!!b),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.name=""+mn(T):n.removeAttribute("name")}function _g(n,r,s,c,h,b,w,T){if(b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(n.type=b),r!=null||s!=null){if(!(b!=="submit"&&b!=="reset"||r!=null))return;s=s!=null?""+mn(s):"",r=r!=null?""+mn(r):s,T||r===n.value||(n.value=r),n.defaultValue=r}c=c??h,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=T?n.checked:!!c,n.defaultChecked=!!c,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(n.name=w)}function fd(n,r,s){r==="number"&&xl(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function Zi(n,r,s,c){if(n=n.options,r){r={};for(var h=0;h<s.length;h++)r["$"+s[h]]=!0;for(s=0;s<n.length;s++)h=r.hasOwnProperty("$"+n[s].value),n[s].selected!==h&&(n[s].selected=h),h&&c&&(n[s].defaultSelected=!0)}else{for(s=""+mn(s),r=null,h=0;h<n.length;h++){if(n[h].value===s){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function $g(n,r,s){if(r!=null&&(r=""+mn(r),r!==n.value&&(n.value=r),s==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=s!=null?""+mn(s):""}function Hg(n,r,s,c){if(r==null){if(c!=null){if(s!=null)throw Error(i(92));if(ue(c)){if(1<c.length)throw Error(i(93));c=c[0]}s=c}s==null&&(s=""),r=s}s=mn(r),n.defaultValue=s,c=n.textContent,c===s&&c!==""&&c!==null&&(n.value=c)}function Ji(n,r){if(r){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=r;return}}n.textContent=r}var V3=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gg(n,r,s){var c=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":c?n.setProperty(r,s):typeof s!="number"||s===0||V3.has(r)?r==="float"?n.cssFloat=s:n[r]=(""+s).trim():n[r]=s+"px"}function Ug(n,r,s){if(r!=null&&typeof r!="object")throw Error(i(62));if(n=n.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||r!=null&&r.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var h in r)c=r[h],r.hasOwnProperty(h)&&s[h]!==c&&Gg(n,h,c)}else for(var b in r)r.hasOwnProperty(b)&&Gg(n,b,r[b])}function pd(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var N3=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),B3=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yl(n){return B3.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var hd=null;function md(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var er=null,tr=null;function Ig(n){var r=Yi(n);if(r&&(n=r.stateNode)){var s=n[$t]||null;e:switch(n=r.stateNode,r.type){case"input":if(dd(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+gn(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var c=s[r];if(c!==n&&c.form===n.form){var h=c[$t]||null;if(!h)throw Error(i(90));dd(c,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<s.length;r++)c=s[r],c.form===n.form&&Bg(c)}break e;case"textarea":$g(n,s.value,s.defaultValue);break e;case"select":r=s.value,r!=null&&Zi(n,!!s.multiple,r,!1)}}}var gd=!1;function Fg(n,r,s){if(gd)return n(r,s);gd=!0;try{var c=n(r);return c}finally{if(gd=!1,(er!==null||tr!==null)&&(ic(),er&&(r=er,n=tr,tr=er=null,Ig(r),n)))for(r=0;r<n.length;r++)Ig(n[r])}}function ys(n,r){var s=n.stateNode;if(s===null)return null;var c=s[$t]||null;if(c===null)return null;s=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(i(231,r,typeof s));return s}var ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bd=!1;if(ca)try{var vs={};Object.defineProperty(vs,"passive",{get:function(){bd=!0}}),window.addEventListener("test",vs,vs),window.removeEventListener("test",vs,vs)}catch{bd=!1}var La=null,xd=null,vl=null;function qg(){if(vl)return vl;var n,r=xd,s=r.length,c,h="value"in La?La.value:La.textContent,b=h.length;for(n=0;n<s&&r[n]===h[n];n++);var w=s-n;for(c=1;c<=w&&r[s-c]===h[b-c];c++);return vl=h.slice(n,1<c?1-c:void 0)}function wl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Sl(){return!0}function Kg(){return!1}function Ht(n){function r(s,c,h,b,w){this._reactName=s,this._targetInst=h,this.type=c,this.nativeEvent=b,this.target=w,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(s=n[T],this[T]=s?s(b):b[T]);return this.isDefaultPrevented=(b.defaultPrevented!=null?b.defaultPrevented:b.returnValue===!1)?Sl:Kg,this.isPropagationStopped=Kg,this}return g(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),r}var hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tl=Ht(hi),ws=g({},hi,{view:0,detail:0}),_3=Ht(ws),yd,vd,Ss,kl=g({},ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ss&&(Ss&&n.type==="mousemove"?(yd=n.screenX-Ss.screenX,vd=n.screenY-Ss.screenY):vd=yd=0,Ss=n),yd)},movementY:function(n){return"movementY"in n?n.movementY:vd}}),Yg=Ht(kl),$3=g({},kl,{dataTransfer:0}),H3=Ht($3),G3=g({},ws,{relatedTarget:0}),wd=Ht(G3),U3=g({},hi,{animationName:0,elapsedTime:0,pseudoElement:0}),I3=Ht(U3),F3=g({},hi,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),q3=Ht(F3),K3=g({},hi,{data:0}),Xg=Ht(K3),Y3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q3(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=W3[n])?!!r[n]:!1}function Sd(){return Q3}var Z3=g({},ws,{key:function(n){if(n.key){var r=Y3[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=wl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?X3[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sd,charCode:function(n){return n.type==="keypress"?wl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?wl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),J3=Ht(Z3),e8=g({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wg=Ht(e8),t8=g({},ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sd}),n8=Ht(t8),a8=g({},hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),i8=Ht(a8),r8=g({},kl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),s8=Ht(r8),o8=g({},hi,{newState:0,oldState:0}),l8=Ht(o8),c8=[9,13,27,32],Td=ca&&"CompositionEvent"in window,Ts=null;ca&&"documentMode"in document&&(Ts=document.documentMode);var u8=ca&&"TextEvent"in window&&!Ts,Qg=ca&&(!Td||Ts&&8<Ts&&11>=Ts),Zg=" ",Jg=!1;function e0(n,r){switch(n){case"keyup":return c8.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function t0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var nr=!1;function d8(n,r){switch(n){case"compositionend":return t0(r);case"keypress":return r.which!==32?null:(Jg=!0,Zg);case"textInput":return n=r.data,n===Zg&&Jg?null:n;default:return null}}function f8(n,r){if(nr)return n==="compositionend"||!Td&&e0(n,r)?(n=qg(),vl=xd=La=null,nr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Qg&&r.locale!=="ko"?null:r.data;default:return null}}var p8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function n0(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!p8[n.type]:r==="textarea"}function a0(n,r,s,c){er?tr?tr.push(c):tr=[c]:er=c,r=uc(r,"onChange"),0<r.length&&(s=new Tl("onChange","change",null,s,c),n.push({event:s,listeners:r}))}var ks=null,js=null;function h8(n){N2(n,0)}function jl(n){var r=xs(n);if(Bg(r))return n}function i0(n,r){if(n==="change")return r}var r0=!1;if(ca){var kd;if(ca){var jd="oninput"in document;if(!jd){var s0=document.createElement("div");s0.setAttribute("oninput","return;"),jd=typeof s0.oninput=="function"}kd=jd}else kd=!1;r0=kd&&(!document.documentMode||9<document.documentMode)}function o0(){ks&&(ks.detachEvent("onpropertychange",l0),js=ks=null)}function l0(n){if(n.propertyName==="value"&&jl(js)){var r=[];a0(r,js,n,md(n)),Fg(h8,r)}}function m8(n,r,s){n==="focusin"?(o0(),ks=r,js=s,ks.attachEvent("onpropertychange",l0)):n==="focusout"&&o0()}function g8(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return jl(js)}function b8(n,r){if(n==="click")return jl(r)}function x8(n,r){if(n==="input"||n==="change")return jl(r)}function y8(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var en=typeof Object.is=="function"?Object.is:y8;function Es(n,r){if(en(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var s=Object.keys(n),c=Object.keys(r);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var h=s[c];if(!hn.call(r,h)||!en(n[h],r[h]))return!1}return!0}function c0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function u0(n,r){var s=c0(n);n=0;for(var c;s;){if(s.nodeType===3){if(c=n+s.textContent.length,n<=r&&c>=r)return{node:s,offset:r-n};n=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=c0(s)}}function d0(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?d0(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function f0(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=xl(n.document);r instanceof n.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)n=r.contentWindow;else break;r=xl(n.document)}return r}function Ed(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var v8=ca&&"documentMode"in document&&11>=document.documentMode,ar=null,Cd=null,Cs=null,Ad=!1;function p0(n,r,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ad||ar==null||ar!==xl(c)||(c=ar,"selectionStart"in c&&Ed(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Cs&&Es(Cs,c)||(Cs=c,c=uc(Cd,"onSelect"),0<c.length&&(r=new Tl("onSelect","select",null,r,s),n.push({event:r,listeners:c}),r.target=ar)))}function mi(n,r){var s={};return s[n.toLowerCase()]=r.toLowerCase(),s["Webkit"+n]="webkit"+r,s["Moz"+n]="moz"+r,s}var ir={animationend:mi("Animation","AnimationEnd"),animationiteration:mi("Animation","AnimationIteration"),animationstart:mi("Animation","AnimationStart"),transitionrun:mi("Transition","TransitionRun"),transitionstart:mi("Transition","TransitionStart"),transitioncancel:mi("Transition","TransitionCancel"),transitionend:mi("Transition","TransitionEnd")},Md={},h0={};ca&&(h0=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function gi(n){if(Md[n])return Md[n];if(!ir[n])return n;var r=ir[n],s;for(s in r)if(r.hasOwnProperty(s)&&s in h0)return Md[n]=r[s];return n}var m0=gi("animationend"),g0=gi("animationiteration"),b0=gi("animationstart"),w8=gi("transitionrun"),S8=gi("transitionstart"),T8=gi("transitioncancel"),x0=gi("transitionend"),y0=new Map,zd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zd.push("scrollEnd");function An(n,r){y0.set(n,r),pi(r,[n])}var v0=new WeakMap;function bn(n,r){if(typeof n=="object"&&n!==null){var s=v0.get(n);return s!==void 0?s:(r={value:n,source:r,stack:Vg(r)},v0.set(n,r),r)}return{value:n,source:r,stack:Vg(r)}}var xn=[],rr=0,Rd=0;function El(){for(var n=rr,r=Rd=rr=0;r<n;){var s=xn[r];xn[r++]=null;var c=xn[r];xn[r++]=null;var h=xn[r];xn[r++]=null;var b=xn[r];if(xn[r++]=null,c!==null&&h!==null){var w=c.pending;w===null?h.next=h:(h.next=w.next,w.next=h),c.pending=h}b!==0&&w0(s,h,b)}}function Cl(n,r,s,c){xn[rr++]=n,xn[rr++]=r,xn[rr++]=s,xn[rr++]=c,Rd|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function Ld(n,r,s,c){return Cl(n,r,s,c),Al(n)}function sr(n,r){return Cl(n,null,null,r),Al(n)}function w0(n,r,s){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s);for(var h=!1,b=n.return;b!==null;)b.childLanes|=s,c=b.alternate,c!==null&&(c.childLanes|=s),b.tag===22&&(n=b.stateNode,n===null||n._visibility&1||(h=!0)),n=b,b=b.return;return n.tag===3?(b=n.stateNode,h&&r!==null&&(h=31-Jt(s),n=b.hiddenUpdates,c=n[h],c===null?n[h]=[r]:c.push(r),r.lane=s|536870912),b):null}function Al(n){if(50<Zs)throw Zs=0,_f=null,Error(i(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var or={};function k8(n,r,s,c){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(n,r,s,c){return new k8(n,r,s,c)}function Od(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ua(n,r){var s=n.alternate;return s===null?(s=tn(n.tag,r,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=r,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,r=n.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function S0(n,r){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,r=s.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function Ml(n,r,s,c,h,b){var w=0;if(c=n,typeof n=="function")Od(n)&&(w=1);else if(typeof n=="string")w=E6(n,s,oe.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case q:return n=tn(31,s,r,h),n.elementType=q,n.lanes=b,n;case S:return bi(s.children,h,b,r);case k:w=8,h|=24;break;case A:return n=tn(12,s,r,h|2),n.elementType=A,n.lanes=b,n;case M:return n=tn(13,s,r,h),n.elementType=M,n.lanes=b,n;case D:return n=tn(19,s,r,h),n.elementType=D,n.lanes=b,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case j:case C:w=10;break e;case R:w=9;break e;case _:w=11;break e;case N:w=14;break e;case V:w=16,c=null;break e}w=29,s=Error(i(130,n===null?"null":typeof n,"")),c=null}return r=tn(w,s,r,h),r.elementType=n,r.type=c,r.lanes=b,r}function bi(n,r,s,c){return n=tn(7,n,c,r),n.lanes=s,n}function Dd(n,r,s){return n=tn(6,n,null,r),n.lanes=s,n}function Pd(n,r,s){return r=tn(4,n.children!==null?n.children:[],n.key,r),r.lanes=s,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var lr=[],cr=0,zl=null,Rl=0,yn=[],vn=0,xi=null,da=1,fa="";function yi(n,r){lr[cr++]=Rl,lr[cr++]=zl,zl=n,Rl=r}function T0(n,r,s){yn[vn++]=da,yn[vn++]=fa,yn[vn++]=xi,xi=n;var c=da;n=fa;var h=32-Jt(c)-1;c&=~(1<<h),s+=1;var b=32-Jt(r)+h;if(30<b){var w=h-h%5;b=(c&(1<<w)-1).toString(32),c>>=w,h-=w,da=1<<32-Jt(r)+h|s<<h|c,fa=b+n}else da=1<<b|s<<h|c,fa=n}function Vd(n){n.return!==null&&(yi(n,1),T0(n,1,0))}function Nd(n){for(;n===zl;)zl=lr[--cr],lr[cr]=null,Rl=lr[--cr],lr[cr]=null;for(;n===xi;)xi=yn[--vn],yn[vn]=null,fa=yn[--vn],yn[vn]=null,da=yn[--vn],yn[vn]=null}var Bt=null,et=null,ze=!1,vi=null,$n=!1,Bd=Error(i(519));function wi(n){var r=Error(i(418,""));throw zs(bn(r,n)),Bd}function k0(n){var r=n.stateNode,s=n.type,c=n.memoizedProps;switch(r[Rt]=n,r[$t]=c,s){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(s=0;s<eo.length;s++)je(eo[s],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":je("invalid",r),_g(r,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),bl(r);break;case"select":je("invalid",r);break;case"textarea":je("invalid",r),Hg(r,c.value,c.defaultValue,c.children),bl(r)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||c.suppressHydrationWarning===!0||H2(r.textContent,s)?(c.popover!=null&&(je("beforetoggle",r),je("toggle",r)),c.onScroll!=null&&je("scroll",r),c.onScrollEnd!=null&&je("scrollend",r),c.onClick!=null&&(r.onclick=dc),r=!0):r=!1,r||wi(n)}function j0(n){for(Bt=n.return;Bt;)switch(Bt.tag){case 5:case 13:$n=!1;return;case 27:case 3:$n=!0;return;default:Bt=Bt.return}}function As(n){if(n!==Bt)return!1;if(!ze)return j0(n),ze=!0,!1;var r=n.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||tp(n.type,n.memoizedProps)),s=!s),s&&et&&wi(n),j0(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(r===0){et=zn(n.nextSibling);break e}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;n=n.nextSibling}et=null}}else r===27?(r=et,Ya(n.type)?(n=rp,rp=null,et=n):et=r):et=Bt?zn(n.stateNode.nextSibling):null;return!0}function Ms(){et=Bt=null,ze=!1}function E0(){var n=vi;return n!==null&&(It===null?It=n:It.push.apply(It,n),vi=null),n}function zs(n){vi===null?vi=[n]:vi.push(n)}var _d=X(null),Si=null,pa=null;function Oa(n,r,s){ae(_d,r._currentValue),r._currentValue=s}function ha(n){n._currentValue=_d.current,ne(_d)}function $d(n,r,s){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===s)break;n=n.return}}function Hd(n,r,s,c){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var b=h.dependencies;if(b!==null){var w=h.child;b=b.firstContext;e:for(;b!==null;){var T=b;b=h;for(var O=0;O<r.length;O++)if(T.context===r[O]){b.lanes|=s,T=b.alternate,T!==null&&(T.lanes|=s),$d(b.return,s,n),c||(w=null);break e}b=T.next}}else if(h.tag===18){if(w=h.return,w===null)throw Error(i(341));w.lanes|=s,b=w.alternate,b!==null&&(b.lanes|=s),$d(w,s,n),w=null}else w=h.child;if(w!==null)w.return=h;else for(w=h;w!==null;){if(w===n){w=null;break}if(h=w.sibling,h!==null){h.return=w.return,w=h;break}w=w.return}h=w}}function Rs(n,r,s,c){n=null;for(var h=r,b=!1;h!==null;){if(!b){if((h.flags&524288)!==0)b=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var w=h.alternate;if(w===null)throw Error(i(387));if(w=w.memoizedProps,w!==null){var T=h.type;en(h.pendingProps.value,w.value)||(n!==null?n.push(T):n=[T])}}else if(h===mt.current){if(w=h.alternate,w===null)throw Error(i(387));w.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push(so):n=[so])}h=h.return}n!==null&&Hd(r,n,s,c),r.flags|=262144}function Ll(n){for(n=n.firstContext;n!==null;){if(!en(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ti(n){Si=n,pa=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Lt(n){return C0(Si,n)}function Ol(n,r){return Si===null&&Ti(n),C0(n,r)}function C0(n,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},pa===null){if(n===null)throw Error(i(308));pa=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else pa=pa.next=r;return s}var j8=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(s,c){n.push(c)}};this.abort=function(){r.aborted=!0,n.forEach(function(s){return s()})}},E8=e.unstable_scheduleCallback,C8=e.unstable_NormalPriority,dt={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gd(){return{controller:new j8,data:new Map,refCount:0}}function Ls(n){n.refCount--,n.refCount===0&&E8(C8,function(){n.controller.abort()})}var Os=null,Ud=0,ur=0,dr=null;function A8(n,r){if(Os===null){var s=Os=[];Ud=0,ur=qf(),dr={status:"pending",value:void 0,then:function(c){s.push(c)}}}return Ud++,r.then(A0,A0),r}function A0(){if(--Ud===0&&Os!==null){dr!==null&&(dr.status="fulfilled");var n=Os;Os=null,ur=0,dr=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function M8(n,r){var s=[],c={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return n.then(function(){c.status="fulfilled",c.value=r;for(var h=0;h<s.length;h++)(0,s[h])(r)},function(h){for(c.status="rejected",c.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),c}var M0=U.S;U.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&A8(n,r),M0!==null&&M0(n,r)};var ki=X(null);function Id(){var n=ki.current;return n!==null?n:Ke.pooledCache}function Dl(n,r){r===null?ae(ki,ki.current):ae(ki,r.pool)}function z0(){var n=Id();return n===null?null:{parent:dt._currentValue,pool:n}}var Ds=Error(i(460)),R0=Error(i(474)),Pl=Error(i(542)),Fd={then:function(){}};function L0(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Vl(){}function O0(n,r,s){switch(s=n[s],s===void 0?n.push(r):s!==r&&(r.then(Vl,Vl),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,P0(n),n;default:if(typeof r.status=="string")r.then(Vl,Vl);else{if(n=Ke,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=r,n.status="pending",n.then(function(c){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=c}},function(c){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=c}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,P0(n),n}throw Ps=r,Ds}}var Ps=null;function D0(){if(Ps===null)throw Error(i(459));var n=Ps;return Ps=null,n}function P0(n){if(n===Ds||n===Pl)throw Error(i(483))}var Da=!1;function qd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kd(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Pa(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Va(n,r,s){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ve&2)!==0){var h=c.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),c.pending=r,r=Al(n),w0(n,null,s),r}return Cl(n,c,r,s),Al(n)}function Vs(n,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var c=r.lanes;c&=n.pendingLanes,s|=c,r.lanes=s,Ag(n,s)}}function Yd(n,r){var s=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var h=null,b=null;if(s=s.firstBaseUpdate,s!==null){do{var w={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};b===null?h=b=w:b=b.next=w,s=s.next}while(s!==null);b===null?h=b=r:b=b.next=r}else h=b=r;s={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:b,shared:c.shared,callbacks:c.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=r:n.next=r,s.lastBaseUpdate=r}var Xd=!1;function Ns(){if(Xd){var n=dr;if(n!==null)throw n}}function Bs(n,r,s,c){Xd=!1;var h=n.updateQueue;Da=!1;var b=h.firstBaseUpdate,w=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var O=T,F=O.next;O.next=null,w===null?b=F:w.next=F,w=O;var Z=n.alternate;Z!==null&&(Z=Z.updateQueue,T=Z.lastBaseUpdate,T!==w&&(T===null?Z.firstBaseUpdate=F:T.next=F,Z.lastBaseUpdate=O))}if(b!==null){var te=h.baseState;w=0,Z=F=O=null,T=b;do{var K=T.lane&-536870913,Y=K!==T.lane;if(Y?(Ee&K)===K:(c&K)===K){K!==0&&K===ur&&(Xd=!0),Z!==null&&(Z=Z.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var he=n,fe=T;K=r;var He=s;switch(fe.tag){case 1:if(he=fe.payload,typeof he=="function"){te=he.call(He,te,K);break e}te=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=fe.payload,K=typeof he=="function"?he.call(He,te,K):he,K==null)break e;te=g({},te,K);break e;case 2:Da=!0}}K=T.callback,K!==null&&(n.flags|=64,Y&&(n.flags|=8192),Y=h.callbacks,Y===null?h.callbacks=[K]:Y.push(K))}else Y={lane:K,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Z===null?(F=Z=Y,O=te):Z=Z.next=Y,w|=K;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;Y=T,T=Y.next,Y.next=null,h.lastBaseUpdate=Y,h.shared.pending=null}}while(!0);Z===null&&(O=te),h.baseState=O,h.firstBaseUpdate=F,h.lastBaseUpdate=Z,b===null&&(h.shared.lanes=0),Ia|=w,n.lanes=w,n.memoizedState=te}}function V0(n,r){if(typeof n!="function")throw Error(i(191,n));n.call(r)}function N0(n,r){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)V0(s[n],r)}var fr=X(null),Nl=X(0);function B0(n,r){n=wa,ae(Nl,n),ae(fr,r),wa=n|r.baseLanes}function Wd(){ae(Nl,wa),ae(fr,fr.current)}function Qd(){wa=Nl.current,ne(fr),ne(Nl)}var Na=0,Se=null,_e=null,st=null,Bl=!1,pr=!1,ji=!1,_l=0,_s=0,hr=null,z8=0;function at(){throw Error(i(321))}function Zd(n,r){if(r===null)return!1;for(var s=0;s<r.length&&s<n.length;s++)if(!en(n[s],r[s]))return!1;return!0}function Jd(n,r,s,c,h,b){return Na=b,Se=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,U.H=n===null||n.memoizedState===null?w1:S1,ji=!1,b=s(c,h),ji=!1,pr&&(b=$0(r,s,c,h)),_0(n),b}function _0(n){U.H=Fl;var r=_e!==null&&_e.next!==null;if(Na=0,st=_e=Se=null,Bl=!1,_s=0,hr=null,r)throw Error(i(300));n===null||bt||(n=n.dependencies,n!==null&&Ll(n)&&(bt=!0))}function $0(n,r,s,c){Se=n;var h=0;do{if(pr&&(hr=null),_s=0,pr=!1,25<=h)throw Error(i(301));if(h+=1,st=_e=null,n.updateQueue!=null){var b=n.updateQueue;b.lastEffect=null,b.events=null,b.stores=null,b.memoCache!=null&&(b.memoCache.index=0)}U.H=N8,b=r(s,c)}while(pr);return b}function R8(){var n=U.H,r=n.useState()[0];return r=typeof r.then=="function"?$s(r):r,n=n.useState()[0],(_e!==null?_e.memoizedState:null)!==n&&(Se.flags|=1024),r}function ef(){var n=_l!==0;return _l=0,n}function tf(n,r,s){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~s}function nf(n){if(Bl){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Bl=!1}Na=0,st=_e=Se=null,pr=!1,_s=_l=0,hr=null}function Gt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Se.memoizedState=st=n:st=st.next=n,st}function ot(){if(_e===null){var n=Se.alternate;n=n!==null?n.memoizedState:null}else n=_e.next;var r=st===null?Se.memoizedState:st.next;if(r!==null)st=r,_e=n;else{if(n===null)throw Se.alternate===null?Error(i(467)):Error(i(310));_e=n,n={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},st===null?Se.memoizedState=st=n:st=st.next=n}return st}function af(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $s(n){var r=_s;return _s+=1,hr===null&&(hr=[]),n=O0(hr,n,r),r=Se,(st===null?r.memoizedState:st.next)===null&&(r=r.alternate,U.H=r===null||r.memoizedState===null?w1:S1),n}function $l(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return $s(n);if(n.$$typeof===C)return Lt(n)}throw Error(i(438,String(n)))}function rf(n){var r=null,s=Se.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var c=Se.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(r={data:c.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=af(),Se.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(n),c=0;c<n;c++)s[c]=W;return r.index++,s}function ma(n,r){return typeof r=="function"?r(n):r}function Hl(n){var r=ot();return sf(r,_e,n)}function sf(n,r,s){var c=n.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=s;var h=n.baseQueue,b=c.pending;if(b!==null){if(h!==null){var w=h.next;h.next=b.next,b.next=w}r.baseQueue=h=b,c.pending=null}if(b=n.baseState,h===null)n.memoizedState=b;else{r=h.next;var T=w=null,O=null,F=r,Z=!1;do{var te=F.lane&-536870913;if(te!==F.lane?(Ee&te)===te:(Na&te)===te){var K=F.revertLane;if(K===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),te===ur&&(Z=!0);else if((Na&K)===K){F=F.next,K===ur&&(Z=!0);continue}else te={lane:0,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},O===null?(T=O=te,w=b):O=O.next=te,Se.lanes|=K,Ia|=K;te=F.action,ji&&s(b,te),b=F.hasEagerState?F.eagerState:s(b,te)}else K={lane:te,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},O===null?(T=O=K,w=b):O=O.next=K,Se.lanes|=te,Ia|=te;F=F.next}while(F!==null&&F!==r);if(O===null?w=b:O.next=T,!en(b,n.memoizedState)&&(bt=!0,Z&&(s=dr,s!==null)))throw s;n.memoizedState=b,n.baseState=w,n.baseQueue=O,c.lastRenderedState=b}return h===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function of(n){var r=ot(),s=r.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=n;var c=s.dispatch,h=s.pending,b=r.memoizedState;if(h!==null){s.pending=null;var w=h=h.next;do b=n(b,w.action),w=w.next;while(w!==h);en(b,r.memoizedState)||(bt=!0),r.memoizedState=b,r.baseQueue===null&&(r.baseState=b),s.lastRenderedState=b}return[b,c]}function H0(n,r,s){var c=Se,h=ot(),b=ze;if(b){if(s===void 0)throw Error(i(407));s=s()}else s=r();var w=!en((_e||h).memoizedState,s);w&&(h.memoizedState=s,bt=!0),h=h.queue;var T=I0.bind(null,c,h,n);if(Hs(2048,8,T,[n]),h.getSnapshot!==r||w||st!==null&&st.memoizedState.tag&1){if(c.flags|=2048,mr(9,Gl(),U0.bind(null,c,h,s,r),null),Ke===null)throw Error(i(349));b||(Na&124)!==0||G0(c,r,s)}return s}function G0(n,r,s){n.flags|=16384,n={getSnapshot:r,value:s},r=Se.updateQueue,r===null?(r=af(),Se.updateQueue=r,r.stores=[n]):(s=r.stores,s===null?r.stores=[n]:s.push(n))}function U0(n,r,s,c){r.value=s,r.getSnapshot=c,F0(r)&&q0(n)}function I0(n,r,s){return s(function(){F0(r)&&q0(n)})}function F0(n){var r=n.getSnapshot;n=n.value;try{var s=r();return!en(n,s)}catch{return!0}}function q0(n){var r=sr(n,2);r!==null&&on(r,n,2)}function lf(n){var r=Gt();if(typeof n=="function"){var s=n;if(n=s(),ji){za(!0);try{s()}finally{za(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:n},r}function K0(n,r,s,c){return n.baseState=s,sf(n,_e,typeof c=="function"?c:ma)}function L8(n,r,s,c,h){if(Il(n))throw Error(i(485));if(n=r.action,n!==null){var b={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){b.listeners.push(w)}};U.T!==null?s(!0):b.isTransition=!1,c(b),s=r.pending,s===null?(b.next=r.pending=b,Y0(r,b)):(b.next=s.next,r.pending=s.next=b)}}function Y0(n,r){var s=r.action,c=r.payload,h=n.state;if(r.isTransition){var b=U.T,w={};U.T=w;try{var T=s(h,c),O=U.S;O!==null&&O(w,T),X0(n,r,T)}catch(F){cf(n,r,F)}finally{U.T=b}}else try{b=s(h,c),X0(n,r,b)}catch(F){cf(n,r,F)}}function X0(n,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){W0(n,r,c)},function(c){return cf(n,r,c)}):W0(n,r,s)}function W0(n,r,s){r.status="fulfilled",r.value=s,Q0(r),n.state=s,r=n.pending,r!==null&&(s=r.next,s===r?n.pending=null:(s=s.next,r.next=s,Y0(n,s)))}function cf(n,r,s){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do r.status="rejected",r.reason=s,Q0(r),r=r.next;while(r!==c)}n.action=null}function Q0(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function Z0(n,r){return r}function J0(n,r){if(ze){var s=Ke.formState;if(s!==null){e:{var c=Se;if(ze){if(et){t:{for(var h=et,b=$n;h.nodeType!==8;){if(!b){h=null;break t}if(h=zn(h.nextSibling),h===null){h=null;break t}}b=h.data,h=b==="F!"||b==="F"?h:null}if(h){et=zn(h.nextSibling),c=h.data==="F!";break e}}wi(c)}c=!1}c&&(r=s[0])}}return s=Gt(),s.memoizedState=s.baseState=r,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Z0,lastRenderedState:r},s.queue=c,s=x1.bind(null,Se,c),c.dispatch=s,c=lf(!1),b=hf.bind(null,Se,!1,c.queue),c=Gt(),h={state:r,dispatch:null,action:n,pending:null},c.queue=h,s=L8.bind(null,Se,h,b,s),h.dispatch=s,c.memoizedState=n,[r,s,!1]}function e1(n){var r=ot();return t1(r,_e,n)}function t1(n,r,s){if(r=sf(n,r,Z0)[0],n=Hl(ma)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var c=$s(r)}catch(w){throw w===Ds?Pl:w}else c=r;r=ot();var h=r.queue,b=h.dispatch;return s!==r.memoizedState&&(Se.flags|=2048,mr(9,Gl(),O8.bind(null,h,s),null)),[c,b,n]}function O8(n,r){n.action=r}function n1(n){var r=ot(),s=_e;if(s!==null)return t1(r,s,n);ot(),r=r.memoizedState,s=ot();var c=s.queue.dispatch;return s.memoizedState=n,[r,c,!1]}function mr(n,r,s,c){return n={tag:n,create:s,deps:c,inst:r,next:null},r=Se.updateQueue,r===null&&(r=af(),Se.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=n.next=n:(c=s.next,s.next=n,n.next=c,r.lastEffect=n),n}function Gl(){return{destroy:void 0,resource:void 0}}function a1(){return ot().memoizedState}function Ul(n,r,s,c){var h=Gt();c=c===void 0?null:c,Se.flags|=n,h.memoizedState=mr(1|r,Gl(),s,c)}function Hs(n,r,s,c){var h=ot();c=c===void 0?null:c;var b=h.memoizedState.inst;_e!==null&&c!==null&&Zd(c,_e.memoizedState.deps)?h.memoizedState=mr(r,b,s,c):(Se.flags|=n,h.memoizedState=mr(1|r,b,s,c))}function i1(n,r){Ul(8390656,8,n,r)}function r1(n,r){Hs(2048,8,n,r)}function s1(n,r){return Hs(4,2,n,r)}function o1(n,r){return Hs(4,4,n,r)}function l1(n,r){if(typeof r=="function"){n=n();var s=r(n);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function c1(n,r,s){s=s!=null?s.concat([n]):null,Hs(4,4,l1.bind(null,r,n),s)}function uf(){}function u1(n,r){var s=ot();r=r===void 0?null:r;var c=s.memoizedState;return r!==null&&Zd(r,c[1])?c[0]:(s.memoizedState=[n,r],n)}function d1(n,r){var s=ot();r=r===void 0?null:r;var c=s.memoizedState;if(r!==null&&Zd(r,c[1]))return c[0];if(c=n(),ji){za(!0);try{n()}finally{za(!1)}}return s.memoizedState=[c,r],c}function df(n,r,s){return s===void 0||(Na&1073741824)!==0?n.memoizedState=r:(n.memoizedState=s,n=h2(),Se.lanes|=n,Ia|=n,s)}function f1(n,r,s,c){return en(s,r)?s:fr.current!==null?(n=df(n,s,c),en(n,r)||(bt=!0),n):(Na&42)===0?(bt=!0,n.memoizedState=s):(n=h2(),Se.lanes|=n,Ia|=n,r)}function p1(n,r,s,c,h){var b=P.p;P.p=b!==0&&8>b?b:8;var w=U.T,T={};U.T=T,hf(n,!1,r,s);try{var O=h(),F=U.S;if(F!==null&&F(T,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var Z=M8(O,c);Gs(n,r,Z,sn(n))}else Gs(n,r,c,sn(n))}catch(te){Gs(n,r,{then:function(){},status:"rejected",reason:te},sn())}finally{P.p=b,U.T=w}}function D8(){}function ff(n,r,s,c){if(n.tag!==5)throw Error(i(476));var h=h1(n).queue;p1(n,h,r,$,s===null?D8:function(){return m1(n),s(c)})}function h1(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:$},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:s},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function m1(n){var r=h1(n).next.queue;Gs(n,r,{},sn())}function pf(){return Lt(so)}function g1(){return ot().memoizedState}function b1(){return ot().memoizedState}function P8(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var s=sn();n=Pa(s);var c=Va(r,n,s);c!==null&&(on(c,r,s),Vs(c,r,s)),r={cache:Gd()},n.payload=r;return}r=r.return}}function V8(n,r,s){var c=sn();s={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Il(n)?y1(r,s):(s=Ld(n,r,s,c),s!==null&&(on(s,n,c),v1(s,r,c)))}function x1(n,r,s){var c=sn();Gs(n,r,s,c)}function Gs(n,r,s,c){var h={lane:c,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Il(n))y1(r,h);else{var b=n.alternate;if(n.lanes===0&&(b===null||b.lanes===0)&&(b=r.lastRenderedReducer,b!==null))try{var w=r.lastRenderedState,T=b(w,s);if(h.hasEagerState=!0,h.eagerState=T,en(T,w))return Cl(n,r,h,0),Ke===null&&El(),!1}catch{}finally{}if(s=Ld(n,r,h,c),s!==null)return on(s,n,c),v1(s,r,c),!0}return!1}function hf(n,r,s,c){if(c={lane:2,revertLane:qf(),action:c,hasEagerState:!1,eagerState:null,next:null},Il(n)){if(r)throw Error(i(479))}else r=Ld(n,s,c,2),r!==null&&on(r,n,2)}function Il(n){var r=n.alternate;return n===Se||r!==null&&r===Se}function y1(n,r){pr=Bl=!0;var s=n.pending;s===null?r.next=r:(r.next=s.next,s.next=r),n.pending=r}function v1(n,r,s){if((s&4194048)!==0){var c=r.lanes;c&=n.pendingLanes,s|=c,r.lanes=s,Ag(n,s)}}var Fl={readContext:Lt,use:$l,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useLayoutEffect:at,useInsertionEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useSyncExternalStore:at,useId:at,useHostTransitionStatus:at,useFormState:at,useActionState:at,useOptimistic:at,useMemoCache:at,useCacheRefresh:at},w1={readContext:Lt,use:$l,useCallback:function(n,r){return Gt().memoizedState=[n,r===void 0?null:r],n},useContext:Lt,useEffect:i1,useImperativeHandle:function(n,r,s){s=s!=null?s.concat([n]):null,Ul(4194308,4,l1.bind(null,r,n),s)},useLayoutEffect:function(n,r){return Ul(4194308,4,n,r)},useInsertionEffect:function(n,r){Ul(4,2,n,r)},useMemo:function(n,r){var s=Gt();r=r===void 0?null:r;var c=n();if(ji){za(!0);try{n()}finally{za(!1)}}return s.memoizedState=[c,r],c},useReducer:function(n,r,s){var c=Gt();if(s!==void 0){var h=s(r);if(ji){za(!0);try{s(r)}finally{za(!1)}}}else h=r;return c.memoizedState=c.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},c.queue=n,n=n.dispatch=V8.bind(null,Se,n),[c.memoizedState,n]},useRef:function(n){var r=Gt();return n={current:n},r.memoizedState=n},useState:function(n){n=lf(n);var r=n.queue,s=x1.bind(null,Se,r);return r.dispatch=s,[n.memoizedState,s]},useDebugValue:uf,useDeferredValue:function(n,r){var s=Gt();return df(s,n,r)},useTransition:function(){var n=lf(!1);return n=p1.bind(null,Se,n.queue,!0,!1),Gt().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,s){var c=Se,h=Gt();if(ze){if(s===void 0)throw Error(i(407));s=s()}else{if(s=r(),Ke===null)throw Error(i(349));(Ee&124)!==0||G0(c,r,s)}h.memoizedState=s;var b={value:s,getSnapshot:r};return h.queue=b,i1(I0.bind(null,c,b,n),[n]),c.flags|=2048,mr(9,Gl(),U0.bind(null,c,b,s,r),null),s},useId:function(){var n=Gt(),r=Ke.identifierPrefix;if(ze){var s=fa,c=da;s=(c&~(1<<32-Jt(c)-1)).toString(32)+s,r="«"+r+"R"+s,s=_l++,0<s&&(r+="H"+s.toString(32)),r+="»"}else s=z8++,r="«"+r+"r"+s.toString(32)+"»";return n.memoizedState=r},useHostTransitionStatus:pf,useFormState:J0,useActionState:J0,useOptimistic:function(n){var r=Gt();r.memoizedState=r.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=hf.bind(null,Se,!0,s),s.dispatch=r,[n,r]},useMemoCache:rf,useCacheRefresh:function(){return Gt().memoizedState=P8.bind(null,Se)}},S1={readContext:Lt,use:$l,useCallback:u1,useContext:Lt,useEffect:r1,useImperativeHandle:c1,useInsertionEffect:s1,useLayoutEffect:o1,useMemo:d1,useReducer:Hl,useRef:a1,useState:function(){return Hl(ma)},useDebugValue:uf,useDeferredValue:function(n,r){var s=ot();return f1(s,_e.memoizedState,n,r)},useTransition:function(){var n=Hl(ma)[0],r=ot().memoizedState;return[typeof n=="boolean"?n:$s(n),r]},useSyncExternalStore:H0,useId:g1,useHostTransitionStatus:pf,useFormState:e1,useActionState:e1,useOptimistic:function(n,r){var s=ot();return K0(s,_e,n,r)},useMemoCache:rf,useCacheRefresh:b1},N8={readContext:Lt,use:$l,useCallback:u1,useContext:Lt,useEffect:r1,useImperativeHandle:c1,useInsertionEffect:s1,useLayoutEffect:o1,useMemo:d1,useReducer:of,useRef:a1,useState:function(){return of(ma)},useDebugValue:uf,useDeferredValue:function(n,r){var s=ot();return _e===null?df(s,n,r):f1(s,_e.memoizedState,n,r)},useTransition:function(){var n=of(ma)[0],r=ot().memoizedState;return[typeof n=="boolean"?n:$s(n),r]},useSyncExternalStore:H0,useId:g1,useHostTransitionStatus:pf,useFormState:n1,useActionState:n1,useOptimistic:function(n,r){var s=ot();return _e!==null?K0(s,_e,n,r):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:rf,useCacheRefresh:b1},gr=null,Us=0;function ql(n){var r=Us;return Us+=1,gr===null&&(gr=[]),O0(gr,n,r)}function Is(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function Kl(n,r){throw r.$$typeof===x?Error(i(525)):(n=Object.prototype.toString.call(r),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function T1(n){var r=n._init;return r(n._payload)}function k1(n){function r(G,B){if(n){var I=G.deletions;I===null?(G.deletions=[B],G.flags|=16):I.push(B)}}function s(G,B){if(!n)return null;for(;B!==null;)r(G,B),B=B.sibling;return null}function c(G){for(var B=new Map;G!==null;)G.key!==null?B.set(G.key,G):B.set(G.index,G),G=G.sibling;return B}function h(G,B){return G=ua(G,B),G.index=0,G.sibling=null,G}function b(G,B,I){return G.index=I,n?(I=G.alternate,I!==null?(I=I.index,I<B?(G.flags|=67108866,B):I):(G.flags|=67108866,B)):(G.flags|=1048576,B)}function w(G){return n&&G.alternate===null&&(G.flags|=67108866),G}function T(G,B,I,J){return B===null||B.tag!==6?(B=Dd(I,G.mode,J),B.return=G,B):(B=h(B,I),B.return=G,B)}function O(G,B,I,J){var re=I.type;return re===S?Z(G,B,I.props.children,J,I.key):B!==null&&(B.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===V&&T1(re)===B.type)?(B=h(B,I.props),Is(B,I),B.return=G,B):(B=Ml(I.type,I.key,I.props,null,G.mode,J),Is(B,I),B.return=G,B)}function F(G,B,I,J){return B===null||B.tag!==4||B.stateNode.containerInfo!==I.containerInfo||B.stateNode.implementation!==I.implementation?(B=Pd(I,G.mode,J),B.return=G,B):(B=h(B,I.children||[]),B.return=G,B)}function Z(G,B,I,J,re){return B===null||B.tag!==7?(B=bi(I,G.mode,J,re),B.return=G,B):(B=h(B,I),B.return=G,B)}function te(G,B,I){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=Dd(""+B,G.mode,I),B.return=G,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case y:return I=Ml(B.type,B.key,B.props,null,G.mode,I),Is(I,B),I.return=G,I;case v:return B=Pd(B,G.mode,I),B.return=G,B;case V:var J=B._init;return B=J(B._payload),te(G,B,I)}if(ue(B)||ee(B))return B=bi(B,G.mode,I,null),B.return=G,B;if(typeof B.then=="function")return te(G,ql(B),I);if(B.$$typeof===C)return te(G,Ol(G,B),I);Kl(G,B)}return null}function K(G,B,I,J){var re=B!==null?B.key:null;if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return re!==null?null:T(G,B,""+I,J);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case y:return I.key===re?O(G,B,I,J):null;case v:return I.key===re?F(G,B,I,J):null;case V:return re=I._init,I=re(I._payload),K(G,B,I,J)}if(ue(I)||ee(I))return re!==null?null:Z(G,B,I,J,null);if(typeof I.then=="function")return K(G,B,ql(I),J);if(I.$$typeof===C)return K(G,B,Ol(G,I),J);Kl(G,I)}return null}function Y(G,B,I,J,re){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return G=G.get(I)||null,T(B,G,""+J,re);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case y:return G=G.get(J.key===null?I:J.key)||null,O(B,G,J,re);case v:return G=G.get(J.key===null?I:J.key)||null,F(B,G,J,re);case V:var Te=J._init;return J=Te(J._payload),Y(G,B,I,J,re)}if(ue(J)||ee(J))return G=G.get(I)||null,Z(B,G,J,re,null);if(typeof J.then=="function")return Y(G,B,I,ql(J),re);if(J.$$typeof===C)return Y(G,B,I,Ol(B,J),re);Kl(B,J)}return null}function he(G,B,I,J){for(var re=null,Te=null,le=B,pe=B=0,yt=null;le!==null&&pe<I.length;pe++){le.index>pe?(yt=le,le=null):yt=le.sibling;var Ae=K(G,le,I[pe],J);if(Ae===null){le===null&&(le=yt);break}n&&le&&Ae.alternate===null&&r(G,le),B=b(Ae,B,pe),Te===null?re=Ae:Te.sibling=Ae,Te=Ae,le=yt}if(pe===I.length)return s(G,le),ze&&yi(G,pe),re;if(le===null){for(;pe<I.length;pe++)le=te(G,I[pe],J),le!==null&&(B=b(le,B,pe),Te===null?re=le:Te.sibling=le,Te=le);return ze&&yi(G,pe),re}for(le=c(le);pe<I.length;pe++)yt=Y(le,G,pe,I[pe],J),yt!==null&&(n&&yt.alternate!==null&&le.delete(yt.key===null?pe:yt.key),B=b(yt,B,pe),Te===null?re=yt:Te.sibling=yt,Te=yt);return n&&le.forEach(function(Ja){return r(G,Ja)}),ze&&yi(G,pe),re}function fe(G,B,I,J){if(I==null)throw Error(i(151));for(var re=null,Te=null,le=B,pe=B=0,yt=null,Ae=I.next();le!==null&&!Ae.done;pe++,Ae=I.next()){le.index>pe?(yt=le,le=null):yt=le.sibling;var Ja=K(G,le,Ae.value,J);if(Ja===null){le===null&&(le=yt);break}n&&le&&Ja.alternate===null&&r(G,le),B=b(Ja,B,pe),Te===null?re=Ja:Te.sibling=Ja,Te=Ja,le=yt}if(Ae.done)return s(G,le),ze&&yi(G,pe),re;if(le===null){for(;!Ae.done;pe++,Ae=I.next())Ae=te(G,Ae.value,J),Ae!==null&&(B=b(Ae,B,pe),Te===null?re=Ae:Te.sibling=Ae,Te=Ae);return ze&&yi(G,pe),re}for(le=c(le);!Ae.done;pe++,Ae=I.next())Ae=Y(le,G,pe,Ae.value,J),Ae!==null&&(n&&Ae.alternate!==null&&le.delete(Ae.key===null?pe:Ae.key),B=b(Ae,B,pe),Te===null?re=Ae:Te.sibling=Ae,Te=Ae);return n&&le.forEach(function(B6){return r(G,B6)}),ze&&yi(G,pe),re}function He(G,B,I,J){if(typeof I=="object"&&I!==null&&I.type===S&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case y:e:{for(var re=I.key;B!==null;){if(B.key===re){if(re=I.type,re===S){if(B.tag===7){s(G,B.sibling),J=h(B,I.props.children),J.return=G,G=J;break e}}else if(B.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===V&&T1(re)===B.type){s(G,B.sibling),J=h(B,I.props),Is(J,I),J.return=G,G=J;break e}s(G,B);break}else r(G,B);B=B.sibling}I.type===S?(J=bi(I.props.children,G.mode,J,I.key),J.return=G,G=J):(J=Ml(I.type,I.key,I.props,null,G.mode,J),Is(J,I),J.return=G,G=J)}return w(G);case v:e:{for(re=I.key;B!==null;){if(B.key===re)if(B.tag===4&&B.stateNode.containerInfo===I.containerInfo&&B.stateNode.implementation===I.implementation){s(G,B.sibling),J=h(B,I.children||[]),J.return=G,G=J;break e}else{s(G,B);break}else r(G,B);B=B.sibling}J=Pd(I,G.mode,J),J.return=G,G=J}return w(G);case V:return re=I._init,I=re(I._payload),He(G,B,I,J)}if(ue(I))return he(G,B,I,J);if(ee(I)){if(re=ee(I),typeof re!="function")throw Error(i(150));return I=re.call(I),fe(G,B,I,J)}if(typeof I.then=="function")return He(G,B,ql(I),J);if(I.$$typeof===C)return He(G,B,Ol(G,I),J);Kl(G,I)}return typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint"?(I=""+I,B!==null&&B.tag===6?(s(G,B.sibling),J=h(B,I),J.return=G,G=J):(s(G,B),J=Dd(I,G.mode,J),J.return=G,G=J),w(G)):s(G,B)}return function(G,B,I,J){try{Us=0;var re=He(G,B,I,J);return gr=null,re}catch(le){if(le===Ds||le===Pl)throw le;var Te=tn(29,le,null,G.mode);return Te.lanes=J,Te.return=G,Te}finally{}}}var br=k1(!0),j1=k1(!1),wn=X(null),Hn=null;function Ba(n){var r=n.alternate;ae(ft,ft.current&1),ae(wn,n),Hn===null&&(r===null||fr.current!==null||r.memoizedState!==null)&&(Hn=n)}function E1(n){if(n.tag===22){if(ae(ft,ft.current),ae(wn,n),Hn===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(Hn=n)}}else _a()}function _a(){ae(ft,ft.current),ae(wn,wn.current)}function ga(n){ne(wn),Hn===n&&(Hn=null),ne(ft)}var ft=X(0);function Yl(n){for(var r=n;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||ip(s)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function mf(n,r,s,c){r=n.memoizedState,s=s(c,r),s=s==null?r:g({},r,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var gf={enqueueSetState:function(n,r,s){n=n._reactInternals;var c=sn(),h=Pa(c);h.payload=r,s!=null&&(h.callback=s),r=Va(n,h,c),r!==null&&(on(r,n,c),Vs(r,n,c))},enqueueReplaceState:function(n,r,s){n=n._reactInternals;var c=sn(),h=Pa(c);h.tag=1,h.payload=r,s!=null&&(h.callback=s),r=Va(n,h,c),r!==null&&(on(r,n,c),Vs(r,n,c))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var s=sn(),c=Pa(s);c.tag=2,r!=null&&(c.callback=r),r=Va(n,c,s),r!==null&&(on(r,n,s),Vs(r,n,s))}};function C1(n,r,s,c,h,b,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,b,w):r.prototype&&r.prototype.isPureReactComponent?!Es(s,c)||!Es(h,b):!0}function A1(n,r,s,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,c),r.state!==n&&gf.enqueueReplaceState(r,r.state,null)}function Ei(n,r){var s=r;if("ref"in r){s={};for(var c in r)c!=="ref"&&(s[c]=r[c])}if(n=n.defaultProps){s===r&&(s=g({},s));for(var h in n)s[h]===void 0&&(s[h]=n[h])}return s}var Xl=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function M1(n){Xl(n)}function z1(n){console.error(n)}function R1(n){Xl(n)}function Wl(n,r){try{var s=n.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(c){setTimeout(function(){throw c})}}function L1(n,r,s){try{var c=n.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function bf(n,r,s){return s=Pa(s),s.tag=3,s.payload={element:null},s.callback=function(){Wl(n,r)},s}function O1(n){return n=Pa(n),n.tag=3,n}function D1(n,r,s,c){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var b=c.value;n.payload=function(){return h(b)},n.callback=function(){L1(r,s,c)}}var w=s.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(n.callback=function(){L1(r,s,c),typeof h!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var T=c.stack;this.componentDidCatch(c.value,{componentStack:T!==null?T:""})})}function B8(n,r,s,c,h){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(r=s.alternate,r!==null&&Rs(r,s,h,!0),s=wn.current,s!==null){switch(s.tag){case 13:return Hn===null?Hf():s.alternate===null&&tt===0&&(tt=3),s.flags&=-257,s.flags|=65536,s.lanes=h,c===Fd?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([c]):r.add(c),Uf(n,c,h)),!1;case 22:return s.flags|=65536,c===Fd?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([c]):s.add(c)),Uf(n,c,h)),!1}throw Error(i(435,s.tag))}return Uf(n,c,h),Hf(),!1}if(ze)return r=wn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,c!==Bd&&(n=Error(i(422),{cause:c}),zs(bn(n,s)))):(c!==Bd&&(r=Error(i(423),{cause:c}),zs(bn(r,s))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,c=bn(c,s),h=bf(n.stateNode,c,h),Yd(n,h),tt!==4&&(tt=2)),!1;var b=Error(i(520),{cause:c});if(b=bn(b,s),Qs===null?Qs=[b]:Qs.push(b),tt!==4&&(tt=2),r===null)return!0;c=bn(c,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,n=h&-h,s.lanes|=n,n=bf(s.stateNode,c,n),Yd(s,n),!1;case 1:if(r=s.type,b=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Fa===null||!Fa.has(b))))return s.flags|=65536,h&=-h,s.lanes|=h,h=O1(h),D1(h,n,s,c),Yd(s,h),!1}s=s.return}while(s!==null);return!1}var P1=Error(i(461)),bt=!1;function jt(n,r,s,c){r.child=n===null?j1(r,null,s,c):br(r,n.child,s,c)}function V1(n,r,s,c,h){s=s.render;var b=r.ref;if("ref"in c){var w={};for(var T in c)T!=="ref"&&(w[T]=c[T])}else w=c;return Ti(r),c=Jd(n,r,s,w,b,h),T=ef(),n!==null&&!bt?(tf(n,r,h),ba(n,r,h)):(ze&&T&&Vd(r),r.flags|=1,jt(n,r,c,h),r.child)}function N1(n,r,s,c,h){if(n===null){var b=s.type;return typeof b=="function"&&!Od(b)&&b.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=b,B1(n,r,b,c,h)):(n=Ml(s.type,null,c,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(b=n.child,!jf(n,h)){var w=b.memoizedProps;if(s=s.compare,s=s!==null?s:Es,s(w,c)&&n.ref===r.ref)return ba(n,r,h)}return r.flags|=1,n=ua(b,c),n.ref=r.ref,n.return=r,r.child=n}function B1(n,r,s,c,h){if(n!==null){var b=n.memoizedProps;if(Es(b,c)&&n.ref===r.ref)if(bt=!1,r.pendingProps=c=b,jf(n,h))(n.flags&131072)!==0&&(bt=!0);else return r.lanes=n.lanes,ba(n,r,h)}return xf(n,r,s,c,h)}function _1(n,r,s){var c=r.pendingProps,h=c.children,b=n!==null?n.memoizedState:null;if(c.mode==="hidden"){if((r.flags&128)!==0){if(c=b!==null?b.baseLanes|s:s,n!==null){for(h=r.child=n.child,b=0;h!==null;)b=b|h.lanes|h.childLanes,h=h.sibling;r.childLanes=b&~c}else r.childLanes=0,r.child=null;return $1(n,r,c,s)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&Dl(r,b!==null?b.cachePool:null),b!==null?B0(r,b):Wd(),E1(r);else return r.lanes=r.childLanes=536870912,$1(n,r,b!==null?b.baseLanes|s:s,s)}else b!==null?(Dl(r,b.cachePool),B0(r,b),_a(),r.memoizedState=null):(n!==null&&Dl(r,null),Wd(),_a());return jt(n,r,h,s),r.child}function $1(n,r,s,c){var h=Id();return h=h===null?null:{parent:dt._currentValue,pool:h},r.memoizedState={baseLanes:s,cachePool:h},n!==null&&Dl(r,null),Wd(),E1(r),n!==null&&Rs(n,r,c,!0),null}function Ql(n,r){var s=r.ref;if(s===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(i(284));(n===null||n.ref!==s)&&(r.flags|=4194816)}}function xf(n,r,s,c,h){return Ti(r),s=Jd(n,r,s,c,void 0,h),c=ef(),n!==null&&!bt?(tf(n,r,h),ba(n,r,h)):(ze&&c&&Vd(r),r.flags|=1,jt(n,r,s,h),r.child)}function H1(n,r,s,c,h,b){return Ti(r),r.updateQueue=null,s=$0(r,c,s,h),_0(n),c=ef(),n!==null&&!bt?(tf(n,r,b),ba(n,r,b)):(ze&&c&&Vd(r),r.flags|=1,jt(n,r,s,b),r.child)}function G1(n,r,s,c,h){if(Ti(r),r.stateNode===null){var b=or,w=s.contextType;typeof w=="object"&&w!==null&&(b=Lt(w)),b=new s(c,b),r.memoizedState=b.state!==null&&b.state!==void 0?b.state:null,b.updater=gf,r.stateNode=b,b._reactInternals=r,b=r.stateNode,b.props=c,b.state=r.memoizedState,b.refs={},qd(r),w=s.contextType,b.context=typeof w=="object"&&w!==null?Lt(w):or,b.state=r.memoizedState,w=s.getDerivedStateFromProps,typeof w=="function"&&(mf(r,s,w,c),b.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof b.getSnapshotBeforeUpdate=="function"||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(w=b.state,typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount(),w!==b.state&&gf.enqueueReplaceState(b,b.state,null),Bs(r,c,b,h),Ns(),b.state=r.memoizedState),typeof b.componentDidMount=="function"&&(r.flags|=4194308),c=!0}else if(n===null){b=r.stateNode;var T=r.memoizedProps,O=Ei(s,T);b.props=O;var F=b.context,Z=s.contextType;w=or,typeof Z=="object"&&Z!==null&&(w=Lt(Z));var te=s.getDerivedStateFromProps;Z=typeof te=="function"||typeof b.getSnapshotBeforeUpdate=="function",T=r.pendingProps!==T,Z||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(T||F!==w)&&A1(r,b,c,w),Da=!1;var K=r.memoizedState;b.state=K,Bs(r,c,b,h),Ns(),F=r.memoizedState,T||K!==F||Da?(typeof te=="function"&&(mf(r,s,te,c),F=r.memoizedState),(O=Da||C1(r,s,O,c,K,F,w))?(Z||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(r.flags|=4194308)):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=F),b.props=c,b.state=F,b.context=w,c=O):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{b=r.stateNode,Kd(n,r),w=r.memoizedProps,Z=Ei(s,w),b.props=Z,te=r.pendingProps,K=b.context,F=s.contextType,O=or,typeof F=="object"&&F!==null&&(O=Lt(F)),T=s.getDerivedStateFromProps,(F=typeof T=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(w!==te||K!==O)&&A1(r,b,c,O),Da=!1,K=r.memoizedState,b.state=K,Bs(r,c,b,h),Ns();var Y=r.memoizedState;w!==te||K!==Y||Da||n!==null&&n.dependencies!==null&&Ll(n.dependencies)?(typeof T=="function"&&(mf(r,s,T,c),Y=r.memoizedState),(Z=Da||C1(r,s,Z,c,K,Y,O)||n!==null&&n.dependencies!==null&&Ll(n.dependencies))?(F||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,Y,O),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,Y,O)),typeof b.componentDidUpdate=="function"&&(r.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof b.componentDidUpdate!="function"||w===n.memoizedProps&&K===n.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&K===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=Y),b.props=c,b.state=Y,b.context=O,c=Z):(typeof b.componentDidUpdate!="function"||w===n.memoizedProps&&K===n.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&K===n.memoizedState||(r.flags|=1024),c=!1)}return b=c,Ql(n,r),c=(r.flags&128)!==0,b||c?(b=r.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:b.render(),r.flags|=1,n!==null&&c?(r.child=br(r,n.child,null,h),r.child=br(r,null,s,h)):jt(n,r,s,h),r.memoizedState=b.state,n=r.child):n=ba(n,r,h),n}function U1(n,r,s,c){return Ms(),r.flags|=256,jt(n,r,s,c),r.child}var yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vf(n){return{baseLanes:n,cachePool:z0()}}function wf(n,r,s){return n=n!==null?n.childLanes&~s:0,r&&(n|=Sn),n}function I1(n,r,s){var c=r.pendingProps,h=!1,b=(r.flags&128)!==0,w;if((w=b)||(w=n!==null&&n.memoizedState===null?!1:(ft.current&2)!==0),w&&(h=!0,r.flags&=-129),w=(r.flags&32)!==0,r.flags&=-33,n===null){if(ze){if(h?Ba(r):_a(),ze){var T=et,O;if(O=T){e:{for(O=T,T=$n;O.nodeType!==8;){if(!T){T=null;break e}if(O=zn(O.nextSibling),O===null){T=null;break e}}T=O}T!==null?(r.memoizedState={dehydrated:T,treeContext:xi!==null?{id:da,overflow:fa}:null,retryLane:536870912,hydrationErrors:null},O=tn(18,null,null,0),O.stateNode=T,O.return=r,r.child=O,Bt=r,et=null,O=!0):O=!1}O||wi(r)}if(T=r.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return ip(T)?r.lanes=32:r.lanes=536870912,null;ga(r)}return T=c.children,c=c.fallback,h?(_a(),h=r.mode,T=Zl({mode:"hidden",children:T},h),c=bi(c,h,s,null),T.return=r,c.return=r,T.sibling=c,r.child=T,h=r.child,h.memoizedState=vf(s),h.childLanes=wf(n,w,s),r.memoizedState=yf,c):(Ba(r),Sf(r,T))}if(O=n.memoizedState,O!==null&&(T=O.dehydrated,T!==null)){if(b)r.flags&256?(Ba(r),r.flags&=-257,r=Tf(n,r,s)):r.memoizedState!==null?(_a(),r.child=n.child,r.flags|=128,r=null):(_a(),h=c.fallback,T=r.mode,c=Zl({mode:"visible",children:c.children},T),h=bi(h,T,s,null),h.flags|=2,c.return=r,h.return=r,c.sibling=h,r.child=c,br(r,n.child,null,s),c=r.child,c.memoizedState=vf(s),c.childLanes=wf(n,w,s),r.memoizedState=yf,r=h);else if(Ba(r),ip(T)){if(w=T.nextSibling&&T.nextSibling.dataset,w)var F=w.dgst;w=F,c=Error(i(419)),c.stack="",c.digest=w,zs({value:c,source:null,stack:null}),r=Tf(n,r,s)}else if(bt||Rs(n,r,s,!1),w=(s&n.childLanes)!==0,bt||w){if(w=Ke,w!==null&&(c=s&-s,c=(c&42)!==0?1:id(c),c=(c&(w.suspendedLanes|s))!==0?0:c,c!==0&&c!==O.retryLane))throw O.retryLane=c,sr(n,c),on(w,n,c),P1;T.data==="$?"||Hf(),r=Tf(n,r,s)}else T.data==="$?"?(r.flags|=192,r.child=n.child,r=null):(n=O.treeContext,et=zn(T.nextSibling),Bt=r,ze=!0,vi=null,$n=!1,n!==null&&(yn[vn++]=da,yn[vn++]=fa,yn[vn++]=xi,da=n.id,fa=n.overflow,xi=r),r=Sf(r,c.children),r.flags|=4096);return r}return h?(_a(),h=c.fallback,T=r.mode,O=n.child,F=O.sibling,c=ua(O,{mode:"hidden",children:c.children}),c.subtreeFlags=O.subtreeFlags&65011712,F!==null?h=ua(F,h):(h=bi(h,T,s,null),h.flags|=2),h.return=r,c.return=r,c.sibling=h,r.child=c,c=h,h=r.child,T=n.child.memoizedState,T===null?T=vf(s):(O=T.cachePool,O!==null?(F=dt._currentValue,O=O.parent!==F?{parent:F,pool:F}:O):O=z0(),T={baseLanes:T.baseLanes|s,cachePool:O}),h.memoizedState=T,h.childLanes=wf(n,w,s),r.memoizedState=yf,c):(Ba(r),s=n.child,n=s.sibling,s=ua(s,{mode:"visible",children:c.children}),s.return=r,s.sibling=null,n!==null&&(w=r.deletions,w===null?(r.deletions=[n],r.flags|=16):w.push(n)),r.child=s,r.memoizedState=null,s)}function Sf(n,r){return r=Zl({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function Zl(n,r){return n=tn(22,n,null,r),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Tf(n,r,s){return br(r,n.child,null,s),n=Sf(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function F1(n,r,s){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),$d(n.return,r,s)}function kf(n,r,s,c,h){var b=n.memoizedState;b===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:h}:(b.isBackwards=r,b.rendering=null,b.renderingStartTime=0,b.last=c,b.tail=s,b.tailMode=h)}function q1(n,r,s){var c=r.pendingProps,h=c.revealOrder,b=c.tail;if(jt(n,r,c.children,s),c=ft.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&F1(n,s,r);else if(n.tag===19)F1(n,s,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(ae(ft,c),h){case"forwards":for(s=r.child,h=null;s!==null;)n=s.alternate,n!==null&&Yl(n)===null&&(h=s),s=s.sibling;s=h,s===null?(h=r.child,r.child=null):(h=s.sibling,s.sibling=null),kf(r,!1,h,s,b);break;case"backwards":for(s=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&Yl(n)===null){r.child=h;break}n=h.sibling,h.sibling=s,s=h,h=n}kf(r,!0,s,null,b);break;case"together":kf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ba(n,r,s){if(n!==null&&(r.dependencies=n.dependencies),Ia|=r.lanes,(s&r.childLanes)===0)if(n!==null){if(Rs(n,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(i(153));if(r.child!==null){for(n=r.child,s=ua(n,n.pendingProps),r.child=s,s.return=r;n.sibling!==null;)n=n.sibling,s=s.sibling=ua(n,n.pendingProps),s.return=r;s.sibling=null}return r.child}function jf(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&Ll(n)))}function _8(n,r,s){switch(r.tag){case 3:Oe(r,r.stateNode.containerInfo),Oa(r,dt,n.memoizedState.cache),Ms();break;case 27:case 5:di(r);break;case 4:Oe(r,r.stateNode.containerInfo);break;case 10:Oa(r,r.type,r.memoizedProps.value);break;case 13:var c=r.memoizedState;if(c!==null)return c.dehydrated!==null?(Ba(r),r.flags|=128,null):(s&r.child.childLanes)!==0?I1(n,r,s):(Ba(r),n=ba(n,r,s),n!==null?n.sibling:null);Ba(r);break;case 19:var h=(n.flags&128)!==0;if(c=(s&r.childLanes)!==0,c||(Rs(n,r,s,!1),c=(s&r.childLanes)!==0),h){if(c)return q1(n,r,s);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ae(ft,ft.current),c)break;return null;case 22:case 23:return r.lanes=0,_1(n,r,s);case 24:Oa(r,dt,n.memoizedState.cache)}return ba(n,r,s)}function K1(n,r,s){if(n!==null)if(n.memoizedProps!==r.pendingProps)bt=!0;else{if(!jf(n,s)&&(r.flags&128)===0)return bt=!1,_8(n,r,s);bt=(n.flags&131072)!==0}else bt=!1,ze&&(r.flags&1048576)!==0&&T0(r,Rl,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var c=r.elementType,h=c._init;if(c=h(c._payload),r.type=c,typeof c=="function")Od(c)?(n=Ei(c,n),r.tag=1,r=G1(null,r,c,n,s)):(r.tag=0,r=xf(null,r,c,n,s));else{if(c!=null){if(h=c.$$typeof,h===_){r.tag=11,r=V1(null,r,c,n,s);break e}else if(h===N){r.tag=14,r=N1(null,r,c,n,s);break e}}throw r=de(c)||c,Error(i(306,r,""))}}return r;case 0:return xf(n,r,r.type,r.pendingProps,s);case 1:return c=r.type,h=Ei(c,r.pendingProps),G1(n,r,c,h,s);case 3:e:{if(Oe(r,r.stateNode.containerInfo),n===null)throw Error(i(387));c=r.pendingProps;var b=r.memoizedState;h=b.element,Kd(n,r),Bs(r,c,null,s);var w=r.memoizedState;if(c=w.cache,Oa(r,dt,c),c!==b.cache&&Hd(r,[dt],s,!0),Ns(),c=w.element,b.isDehydrated)if(b={element:c,isDehydrated:!1,cache:w.cache},r.updateQueue.baseState=b,r.memoizedState=b,r.flags&256){r=U1(n,r,c,s);break e}else if(c!==h){h=bn(Error(i(424)),r),zs(h),r=U1(n,r,c,s);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(et=zn(n.firstChild),Bt=r,ze=!0,vi=null,$n=!0,s=j1(r,null,c,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Ms(),c===h){r=ba(n,r,s);break e}jt(n,r,c,s)}r=r.child}return r;case 26:return Ql(n,r),n===null?(s=Q2(r.type,null,r.pendingProps,null))?r.memoizedState=s:ze||(s=r.type,n=r.pendingProps,c=fc(ce.current).createElement(s),c[Rt]=r,c[$t]=n,Ct(c,s,n),gt(c),r.stateNode=c):r.memoizedState=Q2(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return di(r),n===null&&ze&&(c=r.stateNode=Y2(r.type,r.pendingProps,ce.current),Bt=r,$n=!0,h=et,Ya(r.type)?(rp=h,et=zn(c.firstChild)):et=h),jt(n,r,r.pendingProps.children,s),Ql(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&ze&&((h=c=et)&&(c=p6(c,r.type,r.pendingProps,$n),c!==null?(r.stateNode=c,Bt=r,et=zn(c.firstChild),$n=!1,h=!0):h=!1),h||wi(r)),di(r),h=r.type,b=r.pendingProps,w=n!==null?n.memoizedProps:null,c=b.children,tp(h,b)?c=null:w!==null&&tp(h,w)&&(r.flags|=32),r.memoizedState!==null&&(h=Jd(n,r,R8,null,null,s),so._currentValue=h),Ql(n,r),jt(n,r,c,s),r.child;case 6:return n===null&&ze&&((n=s=et)&&(s=h6(s,r.pendingProps,$n),s!==null?(r.stateNode=s,Bt=r,et=null,n=!0):n=!1),n||wi(r)),null;case 13:return I1(n,r,s);case 4:return Oe(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=br(r,null,c,s):jt(n,r,c,s),r.child;case 11:return V1(n,r,r.type,r.pendingProps,s);case 7:return jt(n,r,r.pendingProps,s),r.child;case 8:return jt(n,r,r.pendingProps.children,s),r.child;case 12:return jt(n,r,r.pendingProps.children,s),r.child;case 10:return c=r.pendingProps,Oa(r,r.type,c.value),jt(n,r,c.children,s),r.child;case 9:return h=r.type._context,c=r.pendingProps.children,Ti(r),h=Lt(h),c=c(h),r.flags|=1,jt(n,r,c,s),r.child;case 14:return N1(n,r,r.type,r.pendingProps,s);case 15:return B1(n,r,r.type,r.pendingProps,s);case 19:return q1(n,r,s);case 31:return c=r.pendingProps,s=r.mode,c={mode:c.mode,children:c.children},n===null?(s=Zl(c,s),s.ref=r.ref,r.child=s,s.return=r,r=s):(s=ua(n.child,c),s.ref=r.ref,r.child=s,s.return=r,r=s),r;case 22:return _1(n,r,s);case 24:return Ti(r),c=Lt(dt),n===null?(h=Id(),h===null&&(h=Ke,b=Gd(),h.pooledCache=b,b.refCount++,b!==null&&(h.pooledCacheLanes|=s),h=b),r.memoizedState={parent:c,cache:h},qd(r),Oa(r,dt,h)):((n.lanes&s)!==0&&(Kd(n,r),Bs(r,null,null,s),Ns()),h=n.memoizedState,b=r.memoizedState,h.parent!==c?(h={parent:c,cache:c},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),Oa(r,dt,c)):(c=b.cache,Oa(r,dt,c),c!==h.cache&&Hd(r,[dt],s,!0))),jt(n,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(i(156,r.tag))}function xa(n){n.flags|=4}function Y1(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!nb(r)){if(r=wn.current,r!==null&&((Ee&4194048)===Ee?Hn!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||r!==Hn))throw Ps=Fd,R0;n.flags|=8192}}function Jl(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?Eg():536870912,n.lanes|=r,wr|=r)}function Fs(n,r){if(!ze)switch(n.tailMode){case"hidden":r=n.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ze(n){var r=n.alternate!==null&&n.alternate.child===n.child,s=0,c=0;if(r)for(var h=n.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags&65011712,c|=h.flags&65011712,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=s,r}function $8(n,r,s){var c=r.pendingProps;switch(Nd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(r),null;case 1:return Ze(r),null;case 3:return s=r.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),r.memoizedState.cache!==c&&(r.flags|=2048),ha(dt),zt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(As(r)?xa(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,E0())),Ze(r),null;case 26:return s=r.memoizedState,n===null?(xa(r),s!==null?(Ze(r),Y1(r,s)):(Ze(r),r.flags&=-16777217)):s?s!==n.memoizedState?(xa(r),Ze(r),Y1(r,s)):(Ze(r),r.flags&=-16777217):(n.memoizedProps!==c&&xa(r),Ze(r),r.flags&=-16777217),null;case 27:oa(r),s=ce.current;var h=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==c&&xa(r);else{if(!c){if(r.stateNode===null)throw Error(i(166));return Ze(r),null}n=oe.current,As(r)?k0(r):(n=Y2(h,c,s),r.stateNode=n,xa(r))}return Ze(r),null;case 5:if(oa(r),s=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==c&&xa(r);else{if(!c){if(r.stateNode===null)throw Error(i(166));return Ze(r),null}if(n=oe.current,As(r))k0(r);else{switch(h=fc(ce.current),n){case 1:n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=h.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?h.createElement("select",{is:c.is}):h.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?h.createElement(s,{is:c.is}):h.createElement(s)}}n[Rt]=r,n[$t]=c;e:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)n.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break e;for(;h.sibling===null;){if(h.return===null||h.return===r)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=n;e:switch(Ct(n,s,c),s){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&xa(r)}}return Ze(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==c&&xa(r);else{if(typeof c!="string"&&r.stateNode===null)throw Error(i(166));if(n=ce.current,As(r)){if(n=r.stateNode,s=r.memoizedProps,c=null,h=Bt,h!==null)switch(h.tag){case 27:case 5:c=h.memoizedProps}n[Rt]=r,n=!!(n.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||H2(n.nodeValue,s)),n||wi(r)}else n=fc(n).createTextNode(c),n[Rt]=r,r.stateNode=n}return Ze(r),null;case 13:if(c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=As(r),c!==null&&c.dehydrated!==null){if(n===null){if(!h)throw Error(i(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(i(317));h[Rt]=r}else Ms(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ze(r),h=!1}else h=E0(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(ga(r),r):(ga(r),null)}if(ga(r),(r.flags&128)!==0)return r.lanes=s,r;if(s=c!==null,n=n!==null&&n.memoizedState!==null,s){c=r.child,h=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(h=c.alternate.memoizedState.cachePool.pool);var b=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(b=c.memoizedState.cachePool.pool),b!==h&&(c.flags|=2048)}return s!==n&&s&&(r.child.flags|=8192),Jl(r,r.updateQueue),Ze(r),null;case 4:return zt(),n===null&&Wf(r.stateNode.containerInfo),Ze(r),null;case 10:return ha(r.type),Ze(r),null;case 19:if(ne(ft),h=r.memoizedState,h===null)return Ze(r),null;if(c=(r.flags&128)!==0,b=h.rendering,b===null)if(c)Fs(h,!1);else{if(tt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(b=Yl(n),b!==null){for(r.flags|=128,Fs(h,!1),n=b.updateQueue,r.updateQueue=n,Jl(r,n),r.subtreeFlags=0,n=s,s=r.child;s!==null;)S0(s,n),s=s.sibling;return ae(ft,ft.current&1|2),r.child}n=n.sibling}h.tail!==null&&_n()>nc&&(r.flags|=128,c=!0,Fs(h,!1),r.lanes=4194304)}else{if(!c)if(n=Yl(b),n!==null){if(r.flags|=128,c=!0,n=n.updateQueue,r.updateQueue=n,Jl(r,n),Fs(h,!0),h.tail===null&&h.tailMode==="hidden"&&!b.alternate&&!ze)return Ze(r),null}else 2*_n()-h.renderingStartTime>nc&&s!==536870912&&(r.flags|=128,c=!0,Fs(h,!1),r.lanes=4194304);h.isBackwards?(b.sibling=r.child,r.child=b):(n=h.last,n!==null?n.sibling=b:r.child=b,h.last=b)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=_n(),r.sibling=null,n=ft.current,ae(ft,c?n&1|2:n&1),r):(Ze(r),null);case 22:case 23:return ga(r),Qd(),c=r.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(r.flags|=8192):c&&(r.flags|=8192),c?(s&536870912)!==0&&(r.flags&128)===0&&(Ze(r),r.subtreeFlags&6&&(r.flags|=8192)):Ze(r),s=r.updateQueue,s!==null&&Jl(r,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==s&&(r.flags|=2048),n!==null&&ne(ki),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),ha(dt),Ze(r),null;case 25:return null;case 30:return null}throw Error(i(156,r.tag))}function H8(n,r){switch(Nd(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return ha(dt),zt(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return oa(r),null;case 13:if(ga(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(i(340));Ms()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return ne(ft),null;case 4:return zt(),null;case 10:return ha(r.type),null;case 22:case 23:return ga(r),Qd(),n!==null&&ne(ki),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return ha(dt),null;case 25:return null;default:return null}}function X1(n,r){switch(Nd(r),r.tag){case 3:ha(dt),zt();break;case 26:case 27:case 5:oa(r);break;case 4:zt();break;case 13:ga(r);break;case 19:ne(ft);break;case 10:ha(r.type);break;case 22:case 23:ga(r),Qd(),n!==null&&ne(ki);break;case 24:ha(dt)}}function qs(n,r){try{var s=r.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var h=c.next;s=h;do{if((s.tag&n)===n){c=void 0;var b=s.create,w=s.inst;c=b(),w.destroy=c}s=s.next}while(s!==h)}}catch(T){Ie(r,r.return,T)}}function $a(n,r,s){try{var c=r.updateQueue,h=c!==null?c.lastEffect:null;if(h!==null){var b=h.next;c=b;do{if((c.tag&n)===n){var w=c.inst,T=w.destroy;if(T!==void 0){w.destroy=void 0,h=r;var O=s,F=T;try{F()}catch(Z){Ie(h,O,Z)}}}c=c.next}while(c!==b)}}catch(Z){Ie(r,r.return,Z)}}function W1(n){var r=n.updateQueue;if(r!==null){var s=n.stateNode;try{N0(r,s)}catch(c){Ie(n,n.return,c)}}}function Q1(n,r,s){s.props=Ei(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(c){Ie(n,r,c)}}function Ks(n,r){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof s=="function"?n.refCleanup=s(c):s.current=c}}catch(h){Ie(n,r,h)}}function Gn(n,r){var s=n.ref,c=n.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(h){Ie(n,r,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){Ie(n,r,h)}else s.current=null}function Z1(n){var r=n.type,s=n.memoizedProps,c=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break e;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(h){Ie(n,n.return,h)}}function Ef(n,r,s){try{var c=n.stateNode;l6(c,n.type,s,r),c[$t]=r}catch(h){Ie(n,n.return,h)}}function J1(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Ya(n.type)||n.tag===4}function Cf(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||J1(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Ya(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Af(n,r,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(n),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=dc));else if(c!==4&&(c===27&&Ya(n.type)&&(s=n.stateNode,r=null),n=n.child,n!==null))for(Af(n,r,s),n=n.sibling;n!==null;)Af(n,r,s),n=n.sibling}function ec(n,r,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?s.insertBefore(n,r):s.appendChild(n);else if(c!==4&&(c===27&&Ya(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(ec(n,r,s),n=n.sibling;n!==null;)ec(n,r,s),n=n.sibling}function e2(n){var r=n.stateNode,s=n.memoizedProps;try{for(var c=n.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);Ct(r,c,s),r[Rt]=n,r[$t]=s}catch(b){Ie(n,n.return,b)}}var ya=!1,it=!1,Mf=!1,t2=typeof WeakSet=="function"?WeakSet:Set,xt=null;function G8(n,r){if(n=n.containerInfo,Jf=xc,n=f0(n),Ed(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var h=c.anchorOffset,b=c.focusNode;c=c.focusOffset;try{s.nodeType,b.nodeType}catch{s=null;break e}var w=0,T=-1,O=-1,F=0,Z=0,te=n,K=null;t:for(;;){for(var Y;te!==s||h!==0&&te.nodeType!==3||(T=w+h),te!==b||c!==0&&te.nodeType!==3||(O=w+c),te.nodeType===3&&(w+=te.nodeValue.length),(Y=te.firstChild)!==null;)K=te,te=Y;for(;;){if(te===n)break t;if(K===s&&++F===h&&(T=w),K===b&&++Z===c&&(O=w),(Y=te.nextSibling)!==null)break;te=K,K=te.parentNode}te=Y}s=T===-1||O===-1?null:{start:T,end:O}}else s=null}s=s||{start:0,end:0}}else s=null;for(ep={focusedElem:n,selectionRange:s},xc=!1,xt=r;xt!==null;)if(r=xt,n=r.child,(r.subtreeFlags&1024)!==0&&n!==null)n.return=r,xt=n;else for(;xt!==null;){switch(r=xt,b=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&b!==null){n=void 0,s=r,h=b.memoizedProps,b=b.memoizedState,c=s.stateNode;try{var he=Ei(s.type,h,s.elementType===s.type);n=c.getSnapshotBeforeUpdate(he,b),c.__reactInternalSnapshotBeforeUpdate=n}catch(fe){Ie(s,s.return,fe)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,s=n.nodeType,s===9)ap(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":ap(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=r.sibling,n!==null){n.return=r.return,xt=n;break}xt=r.return}}function n2(n,r,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:Ha(n,s),c&4&&qs(5,s);break;case 1:if(Ha(n,s),c&4)if(n=s.stateNode,r===null)try{n.componentDidMount()}catch(w){Ie(s,s.return,w)}else{var h=Ei(s.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(h,r,n.__reactInternalSnapshotBeforeUpdate)}catch(w){Ie(s,s.return,w)}}c&64&&W1(s),c&512&&Ks(s,s.return);break;case 3:if(Ha(n,s),c&64&&(n=s.updateQueue,n!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{N0(n,r)}catch(w){Ie(s,s.return,w)}}break;case 27:r===null&&c&4&&e2(s);case 26:case 5:Ha(n,s),r===null&&c&4&&Z1(s),c&512&&Ks(s,s.return);break;case 12:Ha(n,s);break;case 13:Ha(n,s),c&4&&r2(n,s),c&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=Q8.bind(null,s),m6(n,s))));break;case 22:if(c=s.memoizedState!==null||ya,!c){r=r!==null&&r.memoizedState!==null||it,h=ya;var b=it;ya=c,(it=r)&&!b?Ga(n,s,(s.subtreeFlags&8772)!==0):Ha(n,s),ya=h,it=b}break;case 30:break;default:Ha(n,s)}}function a2(n){var r=n.alternate;r!==null&&(n.alternate=null,a2(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&od(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var We=null,Ut=!1;function va(n,r,s){for(s=s.child;s!==null;)i2(n,r,s),s=s.sibling}function i2(n,r,s){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(hs,s)}catch{}switch(s.tag){case 26:it||Gn(s,r),va(n,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:it||Gn(s,r);var c=We,h=Ut;Ya(s.type)&&(We=s.stateNode,Ut=!1),va(n,r,s),no(s.stateNode),We=c,Ut=h;break;case 5:it||Gn(s,r);case 6:if(c=We,h=Ut,We=null,va(n,r,s),We=c,Ut=h,We!==null)if(Ut)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(s.stateNode)}catch(b){Ie(s,r,b)}else try{We.removeChild(s.stateNode)}catch(b){Ie(s,r,b)}break;case 18:We!==null&&(Ut?(n=We,q2(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),uo(n)):q2(We,s.stateNode));break;case 4:c=We,h=Ut,We=s.stateNode.containerInfo,Ut=!0,va(n,r,s),We=c,Ut=h;break;case 0:case 11:case 14:case 15:it||$a(2,s,r),it||$a(4,s,r),va(n,r,s);break;case 1:it||(Gn(s,r),c=s.stateNode,typeof c.componentWillUnmount=="function"&&Q1(s,r,c)),va(n,r,s);break;case 21:va(n,r,s);break;case 22:it=(c=it)||s.memoizedState!==null,va(n,r,s),it=c;break;default:va(n,r,s)}}function r2(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{uo(n)}catch(s){Ie(r,r.return,s)}}function U8(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new t2),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new t2),r;default:throw Error(i(435,n.tag))}}function zf(n,r){var s=U8(n);r.forEach(function(c){var h=Z8.bind(null,n,c);s.has(c)||(s.add(c),c.then(h,h))})}function nn(n,r){var s=r.deletions;if(s!==null)for(var c=0;c<s.length;c++){var h=s[c],b=n,w=r,T=w;e:for(;T!==null;){switch(T.tag){case 27:if(Ya(T.type)){We=T.stateNode,Ut=!1;break e}break;case 5:We=T.stateNode,Ut=!1;break e;case 3:case 4:We=T.stateNode.containerInfo,Ut=!0;break e}T=T.return}if(We===null)throw Error(i(160));i2(b,w,h),We=null,Ut=!1,b=h.alternate,b!==null&&(b.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)s2(r,n),r=r.sibling}var Mn=null;function s2(n,r){var s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:nn(r,n),an(n),c&4&&($a(3,n,n.return),qs(3,n),$a(5,n,n.return));break;case 1:nn(r,n),an(n),c&512&&(it||s===null||Gn(s,s.return)),c&64&&ya&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var h=Mn;if(nn(r,n),an(n),c&512&&(it||s===null||Gn(s,s.return)),c&4){var b=s!==null?s.memoizedState:null;if(c=n.memoizedState,s===null)if(c===null)if(n.stateNode===null){e:{c=n.type,s=n.memoizedProps,h=h.ownerDocument||h;t:switch(c){case"title":b=h.getElementsByTagName("title")[0],(!b||b[bs]||b[Rt]||b.namespaceURI==="http://www.w3.org/2000/svg"||b.hasAttribute("itemprop"))&&(b=h.createElement(c),h.head.insertBefore(b,h.querySelector("head > title"))),Ct(b,c,s),b[Rt]=n,gt(b),c=b;break e;case"link":var w=eb("link","href",h).get(c+(s.href||""));if(w){for(var T=0;T<w.length;T++)if(b=w[T],b.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&b.getAttribute("rel")===(s.rel==null?null:s.rel)&&b.getAttribute("title")===(s.title==null?null:s.title)&&b.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){w.splice(T,1);break t}}b=h.createElement(c),Ct(b,c,s),h.head.appendChild(b);break;case"meta":if(w=eb("meta","content",h).get(c+(s.content||""))){for(T=0;T<w.length;T++)if(b=w[T],b.getAttribute("content")===(s.content==null?null:""+s.content)&&b.getAttribute("name")===(s.name==null?null:s.name)&&b.getAttribute("property")===(s.property==null?null:s.property)&&b.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&b.getAttribute("charset")===(s.charSet==null?null:s.charSet)){w.splice(T,1);break t}}b=h.createElement(c),Ct(b,c,s),h.head.appendChild(b);break;default:throw Error(i(468,c))}b[Rt]=n,gt(b),c=b}n.stateNode=c}else tb(h,n.type,n.stateNode);else n.stateNode=J2(h,c,n.memoizedProps);else b!==c?(b===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):b.count--,c===null?tb(h,n.type,n.stateNode):J2(h,c,n.memoizedProps)):c===null&&n.stateNode!==null&&Ef(n,n.memoizedProps,s.memoizedProps)}break;case 27:nn(r,n),an(n),c&512&&(it||s===null||Gn(s,s.return)),s!==null&&c&4&&Ef(n,n.memoizedProps,s.memoizedProps);break;case 5:if(nn(r,n),an(n),c&512&&(it||s===null||Gn(s,s.return)),n.flags&32){h=n.stateNode;try{Ji(h,"")}catch(Y){Ie(n,n.return,Y)}}c&4&&n.stateNode!=null&&(h=n.memoizedProps,Ef(n,h,s!==null?s.memoizedProps:h)),c&1024&&(Mf=!0);break;case 6:if(nn(r,n),an(n),c&4){if(n.stateNode===null)throw Error(i(162));c=n.memoizedProps,s=n.stateNode;try{s.nodeValue=c}catch(Y){Ie(n,n.return,Y)}}break;case 3:if(mc=null,h=Mn,Mn=pc(r.containerInfo),nn(r,n),Mn=h,an(n),c&4&&s!==null&&s.memoizedState.isDehydrated)try{uo(r.containerInfo)}catch(Y){Ie(n,n.return,Y)}Mf&&(Mf=!1,o2(n));break;case 4:c=Mn,Mn=pc(n.stateNode.containerInfo),nn(r,n),an(n),Mn=c;break;case 12:nn(r,n),an(n);break;case 13:nn(r,n),an(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Vf=_n()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,zf(n,c)));break;case 22:h=n.memoizedState!==null;var O=s!==null&&s.memoizedState!==null,F=ya,Z=it;if(ya=F||h,it=Z||O,nn(r,n),it=Z,ya=F,an(n),c&8192)e:for(r=n.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(s===null||O||ya||it||Ci(n)),s=null,r=n;;){if(r.tag===5||r.tag===26){if(s===null){O=s=r;try{if(b=O.stateNode,h)w=b.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{T=O.stateNode;var te=O.memoizedProps.style,K=te!=null&&te.hasOwnProperty("display")?te.display:null;T.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(Y){Ie(O,O.return,Y)}}}else if(r.tag===6){if(s===null){O=r;try{O.stateNode.nodeValue=h?"":O.memoizedProps}catch(Y){Ie(O,O.return,Y)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}c&4&&(c=n.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,zf(n,s))));break;case 19:nn(r,n),an(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,zf(n,c)));break;case 30:break;case 21:break;default:nn(r,n),an(n)}}function an(n){var r=n.flags;if(r&2){try{for(var s,c=n.return;c!==null;){if(J1(c)){s=c;break}c=c.return}if(s==null)throw Error(i(160));switch(s.tag){case 27:var h=s.stateNode,b=Cf(n);ec(n,b,h);break;case 5:var w=s.stateNode;s.flags&32&&(Ji(w,""),s.flags&=-33);var T=Cf(n);ec(n,T,w);break;case 3:case 4:var O=s.stateNode.containerInfo,F=Cf(n);Af(n,F,O);break;default:throw Error(i(161))}}catch(Z){Ie(n,n.return,Z)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function o2(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;o2(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function Ha(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)n2(n,r.alternate,r),r=r.sibling}function Ci(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:$a(4,r,r.return),Ci(r);break;case 1:Gn(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&Q1(r,r.return,s),Ci(r);break;case 27:no(r.stateNode);case 26:case 5:Gn(r,r.return),Ci(r);break;case 22:r.memoizedState===null&&Ci(r);break;case 30:Ci(r);break;default:Ci(r)}n=n.sibling}}function Ga(n,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var c=r.alternate,h=n,b=r,w=b.flags;switch(b.tag){case 0:case 11:case 15:Ga(h,b,s),qs(4,b);break;case 1:if(Ga(h,b,s),c=b,h=c.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(F){Ie(c,c.return,F)}if(c=b,h=c.updateQueue,h!==null){var T=c.stateNode;try{var O=h.shared.hiddenCallbacks;if(O!==null)for(h.shared.hiddenCallbacks=null,h=0;h<O.length;h++)V0(O[h],T)}catch(F){Ie(c,c.return,F)}}s&&w&64&&W1(b),Ks(b,b.return);break;case 27:e2(b);case 26:case 5:Ga(h,b,s),s&&c===null&&w&4&&Z1(b),Ks(b,b.return);break;case 12:Ga(h,b,s);break;case 13:Ga(h,b,s),s&&w&4&&r2(h,b);break;case 22:b.memoizedState===null&&Ga(h,b,s),Ks(b,b.return);break;case 30:break;default:Ga(h,b,s)}r=r.sibling}}function Rf(n,r){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&Ls(s))}function Lf(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Ls(n))}function Un(n,r,s,c){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)l2(n,r,s,c),r=r.sibling}function l2(n,r,s,c){var h=r.flags;switch(r.tag){case 0:case 11:case 15:Un(n,r,s,c),h&2048&&qs(9,r);break;case 1:Un(n,r,s,c);break;case 3:Un(n,r,s,c),h&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Ls(n)));break;case 12:if(h&2048){Un(n,r,s,c),n=r.stateNode;try{var b=r.memoizedProps,w=b.id,T=b.onPostCommit;typeof T=="function"&&T(w,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(O){Ie(r,r.return,O)}}else Un(n,r,s,c);break;case 13:Un(n,r,s,c);break;case 23:break;case 22:b=r.stateNode,w=r.alternate,r.memoizedState!==null?b._visibility&2?Un(n,r,s,c):Ys(n,r):b._visibility&2?Un(n,r,s,c):(b._visibility|=2,xr(n,r,s,c,(r.subtreeFlags&10256)!==0)),h&2048&&Rf(w,r);break;case 24:Un(n,r,s,c),h&2048&&Lf(r.alternate,r);break;default:Un(n,r,s,c)}}function xr(n,r,s,c,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var b=n,w=r,T=s,O=c,F=w.flags;switch(w.tag){case 0:case 11:case 15:xr(b,w,T,O,h),qs(8,w);break;case 23:break;case 22:var Z=w.stateNode;w.memoizedState!==null?Z._visibility&2?xr(b,w,T,O,h):Ys(b,w):(Z._visibility|=2,xr(b,w,T,O,h)),h&&F&2048&&Rf(w.alternate,w);break;case 24:xr(b,w,T,O,h),h&&F&2048&&Lf(w.alternate,w);break;default:xr(b,w,T,O,h)}r=r.sibling}}function Ys(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=n,c=r,h=c.flags;switch(c.tag){case 22:Ys(s,c),h&2048&&Rf(c.alternate,c);break;case 24:Ys(s,c),h&2048&&Lf(c.alternate,c);break;default:Ys(s,c)}r=r.sibling}}var Xs=8192;function yr(n){if(n.subtreeFlags&Xs)for(n=n.child;n!==null;)c2(n),n=n.sibling}function c2(n){switch(n.tag){case 26:yr(n),n.flags&Xs&&n.memoizedState!==null&&A6(Mn,n.memoizedState,n.memoizedProps);break;case 5:yr(n);break;case 3:case 4:var r=Mn;Mn=pc(n.stateNode.containerInfo),yr(n),Mn=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=Xs,Xs=16777216,yr(n),Xs=r):yr(n));break;default:yr(n)}}function u2(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function Ws(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var c=r[s];xt=c,f2(c,n)}u2(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)d2(n),n=n.sibling}function d2(n){switch(n.tag){case 0:case 11:case 15:Ws(n),n.flags&2048&&$a(9,n,n.return);break;case 3:Ws(n);break;case 12:Ws(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,tc(n)):Ws(n);break;default:Ws(n)}}function tc(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var c=r[s];xt=c,f2(c,n)}u2(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:$a(8,r,r.return),tc(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,tc(r));break;default:tc(r)}n=n.sibling}}function f2(n,r){for(;xt!==null;){var s=xt;switch(s.tag){case 0:case 11:case 15:$a(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Ls(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,xt=c;else e:for(s=n;xt!==null;){c=xt;var h=c.sibling,b=c.return;if(a2(c),c===s){xt=null;break e}if(h!==null){h.return=b,xt=h;break e}xt=b}}}var I8={getCacheForType:function(n){var r=Lt(dt),s=r.data.get(n);return s===void 0&&(s=n(),r.data.set(n,s)),s}},F8=typeof WeakMap=="function"?WeakMap:Map,Ve=0,Ke=null,ke=null,Ee=0,Ne=0,rn=null,Ua=!1,vr=!1,Of=!1,wa=0,tt=0,Ia=0,Ai=0,Df=0,Sn=0,wr=0,Qs=null,It=null,Pf=!1,Vf=0,nc=1/0,ac=null,Fa=null,Et=0,qa=null,Sr=null,Tr=0,Nf=0,Bf=null,p2=null,Zs=0,_f=null;function sn(){if((Ve&2)!==0&&Ee!==0)return Ee&-Ee;if(U.T!==null){var n=ur;return n!==0?n:qf()}return Mg()}function h2(){Sn===0&&(Sn=(Ee&536870912)===0||ze?jg():536870912);var n=wn.current;return n!==null&&(n.flags|=32),Sn}function on(n,r,s){(n===Ke&&(Ne===2||Ne===9)||n.cancelPendingCommit!==null)&&(kr(n,0),Ka(n,Ee,Sn,!1)),gs(n,s),((Ve&2)===0||n!==Ke)&&(n===Ke&&((Ve&2)===0&&(Ai|=s),tt===4&&Ka(n,Ee,Sn,!1)),In(n))}function m2(n,r,s){if((Ve&6)!==0)throw Error(i(327));var c=!s&&(r&124)===0&&(r&n.expiredLanes)===0||ms(n,r),h=c?Y8(n,r):Gf(n,r,!0),b=c;do{if(h===0){vr&&!c&&Ka(n,r,0,!1);break}else{if(s=n.current.alternate,b&&!q8(s)){h=Gf(n,r,!1),b=!1;continue}if(h===2){if(b=r,n.errorRecoveryDisabledLanes&b)var w=0;else w=n.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){r=w;e:{var T=n;h=Qs;var O=T.current.memoizedState.isDehydrated;if(O&&(kr(T,w).flags|=256),w=Gf(T,w,!1),w!==2){if(Of&&!O){T.errorRecoveryDisabledLanes|=b,Ai|=b,h=4;break e}b=It,It=h,b!==null&&(It===null?It=b:It.push.apply(It,b))}h=w}if(b=!1,h!==2)continue}}if(h===1){kr(n,0),Ka(n,r,0,!0);break}e:{switch(c=n,b=h,b){case 0:case 1:throw Error(i(345));case 4:if((r&4194048)!==r)break;case 6:Ka(c,r,Sn,!Ua);break e;case 2:It=null;break;case 3:case 5:break;default:throw Error(i(329))}if((r&62914560)===r&&(h=Vf+300-_n(),10<h)){if(Ka(c,r,Sn,!Ua),hl(c,0,!0)!==0)break e;c.timeoutHandle=I2(g2.bind(null,c,s,It,ac,Pf,r,Sn,Ai,wr,Ua,b,2,-0,0),h);break e}g2(c,s,It,ac,Pf,r,Sn,Ai,wr,Ua,b,0,-0,0)}}break}while(!0);In(n)}function g2(n,r,s,c,h,b,w,T,O,F,Z,te,K,Y){if(n.timeoutHandle=-1,te=r.subtreeFlags,(te&8192||(te&16785408)===16785408)&&(ro={stylesheets:null,count:0,unsuspend:C6},c2(r),te=M6(),te!==null)){n.cancelPendingCommit=te(T2.bind(null,n,r,b,s,c,h,w,T,O,Z,1,K,Y)),Ka(n,b,w,!F);return}T2(n,r,b,s,c,h,w,T,O)}function q8(n){for(var r=n;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var h=s[c],b=h.getSnapshot;h=h.value;try{if(!en(b(),h))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ka(n,r,s,c){r&=~Df,r&=~Ai,n.suspendedLanes|=r,n.pingedLanes&=~r,c&&(n.warmLanes|=r),c=n.expirationTimes;for(var h=r;0<h;){var b=31-Jt(h),w=1<<b;c[b]=-1,h&=~w}s!==0&&Cg(n,s,r)}function ic(){return(Ve&6)===0?(Js(0),!1):!0}function $f(){if(ke!==null){if(Ne===0)var n=ke.return;else n=ke,pa=Si=null,nf(n),gr=null,Us=0,n=ke;for(;n!==null;)X1(n.alternate,n),n=n.return;ke=null}}function kr(n,r){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,u6(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),$f(),Ke=n,ke=s=ua(n.current,null),Ee=r,Ne=0,rn=null,Ua=!1,vr=ms(n,r),Of=!1,wr=Sn=Df=Ai=Ia=tt=0,It=Qs=null,Pf=!1,(r&8)!==0&&(r|=r&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=r;0<c;){var h=31-Jt(c),b=1<<h;r|=n[h],c&=~b}return wa=r,El(),s}function b2(n,r){Se=null,U.H=Fl,r===Ds||r===Pl?(r=D0(),Ne=3):r===R0?(r=D0(),Ne=4):Ne=r===P1?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,rn=r,ke===null&&(tt=1,Wl(n,bn(r,n.current)))}function x2(){var n=U.H;return U.H=Fl,n===null?Fl:n}function y2(){var n=U.A;return U.A=I8,n}function Hf(){tt=4,Ua||(Ee&4194048)!==Ee&&wn.current!==null||(vr=!0),(Ia&134217727)===0&&(Ai&134217727)===0||Ke===null||Ka(Ke,Ee,Sn,!1)}function Gf(n,r,s){var c=Ve;Ve|=2;var h=x2(),b=y2();(Ke!==n||Ee!==r)&&(ac=null,kr(n,r)),r=!1;var w=tt;e:do try{if(Ne!==0&&ke!==null){var T=ke,O=rn;switch(Ne){case 8:$f(),w=6;break e;case 3:case 2:case 9:case 6:wn.current===null&&(r=!0);var F=Ne;if(Ne=0,rn=null,jr(n,T,O,F),s&&vr){w=0;break e}break;default:F=Ne,Ne=0,rn=null,jr(n,T,O,F)}}K8(),w=tt;break}catch(Z){b2(n,Z)}while(!0);return r&&n.shellSuspendCounter++,pa=Si=null,Ve=c,U.H=h,U.A=b,ke===null&&(Ke=null,Ee=0,El()),w}function K8(){for(;ke!==null;)v2(ke)}function Y8(n,r){var s=Ve;Ve|=2;var c=x2(),h=y2();Ke!==n||Ee!==r?(ac=null,nc=_n()+500,kr(n,r)):vr=ms(n,r);e:do try{if(Ne!==0&&ke!==null){r=ke;var b=rn;t:switch(Ne){case 1:Ne=0,rn=null,jr(n,r,b,1);break;case 2:case 9:if(L0(b)){Ne=0,rn=null,w2(r);break}r=function(){Ne!==2&&Ne!==9||Ke!==n||(Ne=7),In(n)},b.then(r,r);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:L0(b)?(Ne=0,rn=null,w2(r)):(Ne=0,rn=null,jr(n,r,b,7));break;case 5:var w=null;switch(ke.tag){case 26:w=ke.memoizedState;case 5:case 27:var T=ke;if(!w||nb(w)){Ne=0,rn=null;var O=T.sibling;if(O!==null)ke=O;else{var F=T.return;F!==null?(ke=F,rc(F)):ke=null}break t}}Ne=0,rn=null,jr(n,r,b,5);break;case 6:Ne=0,rn=null,jr(n,r,b,6);break;case 8:$f(),tt=6;break e;default:throw Error(i(462))}}X8();break}catch(Z){b2(n,Z)}while(!0);return pa=Si=null,U.H=c,U.A=h,Ve=s,ke!==null?0:(Ke=null,Ee=0,El(),tt)}function X8(){for(;ke!==null&&!b3();)v2(ke)}function v2(n){var r=K1(n.alternate,n,wa);n.memoizedProps=n.pendingProps,r===null?rc(n):ke=r}function w2(n){var r=n,s=r.alternate;switch(r.tag){case 15:case 0:r=H1(s,r,r.pendingProps,r.type,void 0,Ee);break;case 11:r=H1(s,r,r.pendingProps,r.type.render,r.ref,Ee);break;case 5:nf(r);default:X1(s,r),r=ke=S0(r,wa),r=K1(s,r,wa)}n.memoizedProps=n.pendingProps,r===null?rc(n):ke=r}function jr(n,r,s,c){pa=Si=null,nf(r),gr=null,Us=0;var h=r.return;try{if(B8(n,h,r,s,Ee)){tt=1,Wl(n,bn(s,n.current)),ke=null;return}}catch(b){if(h!==null)throw ke=h,b;tt=1,Wl(n,bn(s,n.current)),ke=null;return}r.flags&32768?(ze||c===1?n=!0:vr||(Ee&536870912)!==0?n=!1:(Ua=n=!0,(c===2||c===9||c===3||c===6)&&(c=wn.current,c!==null&&c.tag===13&&(c.flags|=16384))),S2(r,n)):rc(r)}function rc(n){var r=n;do{if((r.flags&32768)!==0){S2(r,Ua);return}n=r.return;var s=$8(r.alternate,r,wa);if(s!==null){ke=s;return}if(r=r.sibling,r!==null){ke=r;return}ke=r=n}while(r!==null);tt===0&&(tt=5)}function S2(n,r){do{var s=H8(n.alternate,n);if(s!==null){s.flags&=32767,ke=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(n=n.sibling,n!==null)){ke=n;return}ke=n=s}while(n!==null);tt=6,ke=null}function T2(n,r,s,c,h,b,w,T,O){n.cancelPendingCommit=null;do sc();while(Et!==0);if((Ve&6)!==0)throw Error(i(327));if(r!==null){if(r===n.current)throw Error(i(177));if(b=r.lanes|r.childLanes,b|=Rd,C3(n,s,b,w,T,O),n===Ke&&(ke=Ke=null,Ee=0),Sr=r,qa=n,Tr=s,Nf=b,Bf=h,p2=c,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,J8(dl,function(){return A2(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||c){c=U.T,U.T=null,h=P.p,P.p=2,w=Ve,Ve|=4;try{G8(n,r,s)}finally{Ve=w,P.p=h,U.T=c}}Et=1,k2(),j2(),E2()}}function k2(){if(Et===1){Et=0;var n=qa,r=Sr,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=U.T,U.T=null;var c=P.p;P.p=2;var h=Ve;Ve|=4;try{s2(r,n);var b=ep,w=f0(n.containerInfo),T=b.focusedElem,O=b.selectionRange;if(w!==T&&T&&T.ownerDocument&&d0(T.ownerDocument.documentElement,T)){if(O!==null&&Ed(T)){var F=O.start,Z=O.end;if(Z===void 0&&(Z=F),"selectionStart"in T)T.selectionStart=F,T.selectionEnd=Math.min(Z,T.value.length);else{var te=T.ownerDocument||document,K=te&&te.defaultView||window;if(K.getSelection){var Y=K.getSelection(),he=T.textContent.length,fe=Math.min(O.start,he),He=O.end===void 0?fe:Math.min(O.end,he);!Y.extend&&fe>He&&(w=He,He=fe,fe=w);var G=u0(T,fe),B=u0(T,He);if(G&&B&&(Y.rangeCount!==1||Y.anchorNode!==G.node||Y.anchorOffset!==G.offset||Y.focusNode!==B.node||Y.focusOffset!==B.offset)){var I=te.createRange();I.setStart(G.node,G.offset),Y.removeAllRanges(),fe>He?(Y.addRange(I),Y.extend(B.node,B.offset)):(I.setEnd(B.node,B.offset),Y.addRange(I))}}}}for(te=[],Y=T;Y=Y.parentNode;)Y.nodeType===1&&te.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<te.length;T++){var J=te[T];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}xc=!!Jf,ep=Jf=null}finally{Ve=h,P.p=c,U.T=s}}n.current=r,Et=2}}function j2(){if(Et===2){Et=0;var n=qa,r=Sr,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=U.T,U.T=null;var c=P.p;P.p=2;var h=Ve;Ve|=4;try{n2(n,r.alternate,r)}finally{Ve=h,P.p=c,U.T=s}}Et=3}}function E2(){if(Et===4||Et===3){Et=0,x3();var n=qa,r=Sr,s=Tr,c=p2;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Et=5:(Et=0,Sr=qa=null,C2(n,n.pendingLanes));var h=n.pendingLanes;if(h===0&&(Fa=null),rd(s),r=r.stateNode,Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(hs,r,void 0,(r.current.flags&128)===128)}catch{}if(c!==null){r=U.T,h=P.p,P.p=2,U.T=null;try{for(var b=n.onRecoverableError,w=0;w<c.length;w++){var T=c[w];b(T.value,{componentStack:T.stack})}}finally{U.T=r,P.p=h}}(Tr&3)!==0&&sc(),In(n),h=n.pendingLanes,(s&4194090)!==0&&(h&42)!==0?n===_f?Zs++:(Zs=0,_f=n):Zs=0,Js(0)}}function C2(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Ls(r)))}function sc(n){return k2(),j2(),E2(),A2()}function A2(){if(Et!==5)return!1;var n=qa,r=Nf;Nf=0;var s=rd(Tr),c=U.T,h=P.p;try{P.p=32>s?32:s,U.T=null,s=Bf,Bf=null;var b=qa,w=Tr;if(Et=0,Sr=qa=null,Tr=0,(Ve&6)!==0)throw Error(i(331));var T=Ve;if(Ve|=4,d2(b.current),l2(b,b.current,w,s),Ve=T,Js(0,!1),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(hs,b)}catch{}return!0}finally{P.p=h,U.T=c,C2(n,r)}}function M2(n,r,s){r=bn(s,r),r=bf(n.stateNode,r,2),n=Va(n,r,2),n!==null&&(gs(n,2),In(n))}function Ie(n,r,s){if(n.tag===3)M2(n,n,s);else for(;r!==null;){if(r.tag===3){M2(r,n,s);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Fa===null||!Fa.has(c))){n=bn(s,n),s=O1(2),c=Va(r,s,2),c!==null&&(D1(s,c,r,n),gs(c,2),In(c));break}}r=r.return}}function Uf(n,r,s){var c=n.pingCache;if(c===null){c=n.pingCache=new F8;var h=new Set;c.set(r,h)}else h=c.get(r),h===void 0&&(h=new Set,c.set(r,h));h.has(s)||(Of=!0,h.add(s),n=W8.bind(null,n,r,s),r.then(n,n))}function W8(n,r,s){var c=n.pingCache;c!==null&&c.delete(r),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,Ke===n&&(Ee&s)===s&&(tt===4||tt===3&&(Ee&62914560)===Ee&&300>_n()-Vf?(Ve&2)===0&&kr(n,0):Df|=s,wr===Ee&&(wr=0)),In(n)}function z2(n,r){r===0&&(r=Eg()),n=sr(n,r),n!==null&&(gs(n,r),In(n))}function Q8(n){var r=n.memoizedState,s=0;r!==null&&(s=r.retryLane),z2(n,s)}function Z8(n,r){var s=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(s=h.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(r),z2(n,s)}function J8(n,r){return td(n,r)}var oc=null,Er=null,If=!1,lc=!1,Ff=!1,Mi=0;function In(n){n!==Er&&n.next===null&&(Er===null?oc=Er=n:Er=Er.next=n),lc=!0,If||(If=!0,t6())}function Js(n,r){if(!Ff&&lc){Ff=!0;do for(var s=!1,c=oc;c!==null;){if(n!==0){var h=c.pendingLanes;if(h===0)var b=0;else{var w=c.suspendedLanes,T=c.pingedLanes;b=(1<<31-Jt(42|n)+1)-1,b&=h&~(w&~T),b=b&201326741?b&201326741|1:b?b|2:0}b!==0&&(s=!0,D2(c,b))}else b=Ee,b=hl(c,c===Ke?b:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(b&3)===0||ms(c,b)||(s=!0,D2(c,b));c=c.next}while(s);Ff=!1}}function e6(){R2()}function R2(){lc=If=!1;var n=0;Mi!==0&&(c6()&&(n=Mi),Mi=0);for(var r=_n(),s=null,c=oc;c!==null;){var h=c.next,b=L2(c,r);b===0?(c.next=null,s===null?oc=h:s.next=h,h===null&&(Er=s)):(s=c,(n!==0||(b&3)!==0)&&(lc=!0)),c=h}Js(n)}function L2(n,r){for(var s=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,b=n.pendingLanes&-62914561;0<b;){var w=31-Jt(b),T=1<<w,O=h[w];O===-1?((T&s)===0||(T&c)!==0)&&(h[w]=E3(T,r)):O<=r&&(n.expiredLanes|=T),b&=~T}if(r=Ke,s=Ee,s=hl(n,n===r?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,s===0||n===r&&(Ne===2||Ne===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&nd(c),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||ms(n,s)){if(r=s&-s,r===n.callbackPriority)return r;switch(c!==null&&nd(c),rd(s)){case 2:case 8:s=Tg;break;case 32:s=dl;break;case 268435456:s=kg;break;default:s=dl}return c=O2.bind(null,n),s=td(s,c),n.callbackPriority=r,n.callbackNode=s,r}return c!==null&&c!==null&&nd(c),n.callbackPriority=2,n.callbackNode=null,2}function O2(n,r){if(Et!==0&&Et!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(sc()&&n.callbackNode!==s)return null;var c=Ee;return c=hl(n,n===Ke?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(m2(n,c,r),L2(n,_n()),n.callbackNode!=null&&n.callbackNode===s?O2.bind(null,n):null)}function D2(n,r){if(sc())return null;m2(n,r,!0)}function t6(){d6(function(){(Ve&6)!==0?td(Sg,e6):R2()})}function qf(){return Mi===0&&(Mi=jg()),Mi}function P2(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:yl(""+n)}function V2(n,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,n.id&&s.setAttribute("form",n.id),r.parentNode.insertBefore(s,r),n=new FormData(n),s.parentNode.removeChild(s),n}function n6(n,r,s,c,h){if(r==="submit"&&s&&s.stateNode===h){var b=P2((h[$t]||null).action),w=c.submitter;w&&(r=(r=w[$t]||null)?P2(r.formAction):w.getAttribute("formAction"),r!==null&&(b=r,w=null));var T=new Tl("action","action",null,c,h);n.push({event:T,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Mi!==0){var O=w?V2(h,w):new FormData(h);ff(s,{pending:!0,data:O,method:h.method,action:b},null,O)}}else typeof b=="function"&&(T.preventDefault(),O=w?V2(h,w):new FormData(h),ff(s,{pending:!0,data:O,method:h.method,action:b},b,O))},currentTarget:h}]})}}for(var Kf=0;Kf<zd.length;Kf++){var Yf=zd[Kf],a6=Yf.toLowerCase(),i6=Yf[0].toUpperCase()+Yf.slice(1);An(a6,"on"+i6)}An(m0,"onAnimationEnd"),An(g0,"onAnimationIteration"),An(b0,"onAnimationStart"),An("dblclick","onDoubleClick"),An("focusin","onFocus"),An("focusout","onBlur"),An(w8,"onTransitionRun"),An(S8,"onTransitionStart"),An(T8,"onTransitionCancel"),An(x0,"onTransitionEnd"),Wi("onMouseEnter",["mouseout","mouseover"]),Wi("onMouseLeave",["mouseout","mouseover"]),Wi("onPointerEnter",["pointerout","pointerover"]),Wi("onPointerLeave",["pointerout","pointerover"]),pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pi("onBeforeInput",["compositionend","keypress","textInput","paste"]),pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r6=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(eo));function N2(n,r){r=(r&4)!==0;for(var s=0;s<n.length;s++){var c=n[s],h=c.event;c=c.listeners;e:{var b=void 0;if(r)for(var w=c.length-1;0<=w;w--){var T=c[w],O=T.instance,F=T.currentTarget;if(T=T.listener,O!==b&&h.isPropagationStopped())break e;b=T,h.currentTarget=F;try{b(h)}catch(Z){Xl(Z)}h.currentTarget=null,b=O}else for(w=0;w<c.length;w++){if(T=c[w],O=T.instance,F=T.currentTarget,T=T.listener,O!==b&&h.isPropagationStopped())break e;b=T,h.currentTarget=F;try{b(h)}catch(Z){Xl(Z)}h.currentTarget=null,b=O}}}}function je(n,r){var s=r[sd];s===void 0&&(s=r[sd]=new Set);var c=n+"__bubble";s.has(c)||(B2(r,n,2,!1),s.add(c))}function Xf(n,r,s){var c=0;r&&(c|=4),B2(s,n,c,r)}var cc="_reactListening"+Math.random().toString(36).slice(2);function Wf(n){if(!n[cc]){n[cc]=!0,Rg.forEach(function(s){s!=="selectionchange"&&(r6.has(s)||Xf(s,!1,n),Xf(s,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[cc]||(r[cc]=!0,Xf("selectionchange",!1,r))}}function B2(n,r,s,c){switch(lb(r)){case 2:var h=L6;break;case 8:h=O6;break;default:h=up}s=h.bind(null,r,s,n),h=void 0,!bd||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(r,s,{capture:!0,passive:h}):n.addEventListener(r,s,!0):h!==void 0?n.addEventListener(r,s,{passive:h}):n.addEventListener(r,s,!1)}function Qf(n,r,s,c,h){var b=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var T=c.stateNode.containerInfo;if(T===h)break;if(w===4)for(w=c.return;w!==null;){var O=w.tag;if((O===3||O===4)&&w.stateNode.containerInfo===h)return;w=w.return}for(;T!==null;){if(w=Ki(T),w===null)return;if(O=w.tag,O===5||O===6||O===26||O===27){c=b=w;continue e}T=T.parentNode}}c=c.return}Fg(function(){var F=b,Z=md(s),te=[];e:{var K=y0.get(n);if(K!==void 0){var Y=Tl,he=n;switch(n){case"keypress":if(wl(s)===0)break e;case"keydown":case"keyup":Y=J3;break;case"focusin":he="focus",Y=wd;break;case"focusout":he="blur",Y=wd;break;case"beforeblur":case"afterblur":Y=wd;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=Yg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=H3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=n8;break;case m0:case g0:case b0:Y=I3;break;case x0:Y=i8;break;case"scroll":case"scrollend":Y=_3;break;case"wheel":Y=s8;break;case"copy":case"cut":case"paste":Y=q3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=Wg;break;case"toggle":case"beforetoggle":Y=l8}var fe=(r&4)!==0,He=!fe&&(n==="scroll"||n==="scrollend"),G=fe?K!==null?K+"Capture":null:K;fe=[];for(var B=F,I;B!==null;){var J=B;if(I=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||I===null||G===null||(J=ys(B,G),J!=null&&fe.push(to(B,J,I))),He)break;B=B.return}0<fe.length&&(K=new Y(K,he,null,s,Z),te.push({event:K,listeners:fe}))}}if((r&7)===0){e:{if(K=n==="mouseover"||n==="pointerover",Y=n==="mouseout"||n==="pointerout",K&&s!==hd&&(he=s.relatedTarget||s.fromElement)&&(Ki(he)||he[qi]))break e;if((Y||K)&&(K=Z.window===Z?Z:(K=Z.ownerDocument)?K.defaultView||K.parentWindow:window,Y?(he=s.relatedTarget||s.toElement,Y=F,he=he?Ki(he):null,he!==null&&(He=l(he),fe=he.tag,he!==He||fe!==5&&fe!==27&&fe!==6)&&(he=null)):(Y=null,he=F),Y!==he)){if(fe=Yg,J="onMouseLeave",G="onMouseEnter",B="mouse",(n==="pointerout"||n==="pointerover")&&(fe=Wg,J="onPointerLeave",G="onPointerEnter",B="pointer"),He=Y==null?K:xs(Y),I=he==null?K:xs(he),K=new fe(J,B+"leave",Y,s,Z),K.target=He,K.relatedTarget=I,J=null,Ki(Z)===F&&(fe=new fe(G,B+"enter",he,s,Z),fe.target=I,fe.relatedTarget=He,J=fe),He=J,Y&&he)t:{for(fe=Y,G=he,B=0,I=fe;I;I=Cr(I))B++;for(I=0,J=G;J;J=Cr(J))I++;for(;0<B-I;)fe=Cr(fe),B--;for(;0<I-B;)G=Cr(G),I--;for(;B--;){if(fe===G||G!==null&&fe===G.alternate)break t;fe=Cr(fe),G=Cr(G)}fe=null}else fe=null;Y!==null&&_2(te,K,Y,fe,!1),he!==null&&He!==null&&_2(te,He,he,fe,!0)}}e:{if(K=F?xs(F):window,Y=K.nodeName&&K.nodeName.toLowerCase(),Y==="select"||Y==="input"&&K.type==="file")var re=i0;else if(n0(K))if(r0)re=x8;else{re=g8;var Te=m8}else Y=K.nodeName,!Y||Y.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?F&&pd(F.elementType)&&(re=i0):re=b8;if(re&&(re=re(n,F))){a0(te,re,s,Z);break e}Te&&Te(n,K,F),n==="focusout"&&F&&K.type==="number"&&F.memoizedProps.value!=null&&fd(K,"number",K.value)}switch(Te=F?xs(F):window,n){case"focusin":(n0(Te)||Te.contentEditable==="true")&&(ar=Te,Cd=F,Cs=null);break;case"focusout":Cs=Cd=ar=null;break;case"mousedown":Ad=!0;break;case"contextmenu":case"mouseup":case"dragend":Ad=!1,p0(te,s,Z);break;case"selectionchange":if(v8)break;case"keydown":case"keyup":p0(te,s,Z)}var le;if(Td)e:{switch(n){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else nr?e0(n,s)&&(pe="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(pe="onCompositionStart");pe&&(Qg&&s.locale!=="ko"&&(nr||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&nr&&(le=qg()):(La=Z,xd="value"in La?La.value:La.textContent,nr=!0)),Te=uc(F,pe),0<Te.length&&(pe=new Xg(pe,n,null,s,Z),te.push({event:pe,listeners:Te}),le?pe.data=le:(le=t0(s),le!==null&&(pe.data=le)))),(le=u8?d8(n,s):f8(n,s))&&(pe=uc(F,"onBeforeInput"),0<pe.length&&(Te=new Xg("onBeforeInput","beforeinput",null,s,Z),te.push({event:Te,listeners:pe}),Te.data=le)),n6(te,n,F,s,Z)}N2(te,r)})}function to(n,r,s){return{instance:n,listener:r,currentTarget:s}}function uc(n,r){for(var s=r+"Capture",c=[];n!==null;){var h=n,b=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||b===null||(h=ys(n,s),h!=null&&c.unshift(to(n,h,b)),h=ys(n,r),h!=null&&c.push(to(n,h,b))),n.tag===3)return c;n=n.return}return[]}function Cr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function _2(n,r,s,c,h){for(var b=r._reactName,w=[];s!==null&&s!==c;){var T=s,O=T.alternate,F=T.stateNode;if(T=T.tag,O!==null&&O===c)break;T!==5&&T!==26&&T!==27||F===null||(O=F,h?(F=ys(s,b),F!=null&&w.unshift(to(s,F,O))):h||(F=ys(s,b),F!=null&&w.push(to(s,F,O)))),s=s.return}w.length!==0&&n.push({event:r,listeners:w})}var s6=/\r\n?/g,o6=/\u0000|\uFFFD/g;function $2(n){return(typeof n=="string"?n:""+n).replace(s6,`
`).replace(o6,"")}function H2(n,r){return r=$2(r),$2(n)===r}function dc(){}function $e(n,r,s,c,h,b){switch(s){case"children":typeof c=="string"?r==="body"||r==="textarea"&&c===""||Ji(n,c):(typeof c=="number"||typeof c=="bigint")&&r!=="body"&&Ji(n,""+c);break;case"className":gl(n,"class",c);break;case"tabIndex":gl(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":gl(n,s,c);break;case"style":Ug(n,c,b);break;case"data":if(r!=="object"){gl(n,"data",c);break}case"src":case"href":if(c===""&&(r!=="a"||s!=="href")){n.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=yl(""+c),n.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof b=="function"&&(s==="formAction"?(r!=="input"&&$e(n,r,"name",h.name,h,null),$e(n,r,"formEncType",h.formEncType,h,null),$e(n,r,"formMethod",h.formMethod,h,null),$e(n,r,"formTarget",h.formTarget,h,null)):($e(n,r,"encType",h.encType,h,null),$e(n,r,"method",h.method,h,null),$e(n,r,"target",h.target,h,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=yl(""+c),n.setAttribute(s,c);break;case"onClick":c!=null&&(n.onclick=dc);break;case"onScroll":c!=null&&je("scroll",n);break;case"onScrollEnd":c!=null&&je("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(i(60));n.innerHTML=s}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}s=yl(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""+c):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":c===!0?n.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,c):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(s,c):n.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(s):n.setAttribute(s,c);break;case"popover":je("beforetoggle",n),je("toggle",n),ml(n,"popover",c);break;case"xlinkActuate":la(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":la(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":la(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":la(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":la(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":la(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":la(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":la(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":la(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":ml(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=N3.get(s)||s,ml(n,s,c))}}function Zf(n,r,s,c,h,b){switch(s){case"style":Ug(n,c,b);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(i(60));n.innerHTML=s}}break;case"children":typeof c=="string"?Ji(n,c):(typeof c=="number"||typeof c=="bigint")&&Ji(n,""+c);break;case"onScroll":c!=null&&je("scroll",n);break;case"onScrollEnd":c!=null&&je("scrollend",n);break;case"onClick":c!=null&&(n.onclick=dc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Lg.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),r=s.slice(2,h?s.length-7:void 0),b=n[$t]||null,b=b!=null?b[s]:null,typeof b=="function"&&n.removeEventListener(r,b,h),typeof c=="function")){typeof b!="function"&&b!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(r,c,h);break e}s in n?n[s]=c:c===!0?n.setAttribute(s,""):ml(n,s,c)}}}function Ct(n,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":je("error",n),je("load",n);var c=!1,h=!1,b;for(b in s)if(s.hasOwnProperty(b)){var w=s[b];if(w!=null)switch(b){case"src":c=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:$e(n,r,b,w,s,null)}}h&&$e(n,r,"srcSet",s.srcSet,s,null),c&&$e(n,r,"src",s.src,s,null);return;case"input":je("invalid",n);var T=b=w=h=null,O=null,F=null;for(c in s)if(s.hasOwnProperty(c)){var Z=s[c];if(Z!=null)switch(c){case"name":h=Z;break;case"type":w=Z;break;case"checked":O=Z;break;case"defaultChecked":F=Z;break;case"value":b=Z;break;case"defaultValue":T=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(i(137,r));break;default:$e(n,r,c,Z,s,null)}}_g(n,b,T,O,F,w,h,!1),bl(n);return;case"select":je("invalid",n),c=w=b=null;for(h in s)if(s.hasOwnProperty(h)&&(T=s[h],T!=null))switch(h){case"value":b=T;break;case"defaultValue":w=T;break;case"multiple":c=T;default:$e(n,r,h,T,s,null)}r=b,s=w,n.multiple=!!c,r!=null?Zi(n,!!c,r,!1):s!=null&&Zi(n,!!c,s,!0);return;case"textarea":je("invalid",n),b=h=c=null;for(w in s)if(s.hasOwnProperty(w)&&(T=s[w],T!=null))switch(w){case"value":c=T;break;case"defaultValue":h=T;break;case"children":b=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(i(91));break;default:$e(n,r,w,T,s,null)}Hg(n,c,h,b),bl(n);return;case"option":for(O in s)if(s.hasOwnProperty(O)&&(c=s[O],c!=null))switch(O){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:$e(n,r,O,c,s,null)}return;case"dialog":je("beforetoggle",n),je("toggle",n),je("cancel",n),je("close",n);break;case"iframe":case"object":je("load",n);break;case"video":case"audio":for(c=0;c<eo.length;c++)je(eo[c],n);break;case"image":je("error",n),je("load",n);break;case"details":je("toggle",n);break;case"embed":case"source":case"link":je("error",n),je("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(F in s)if(s.hasOwnProperty(F)&&(c=s[F],c!=null))switch(F){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:$e(n,r,F,c,s,null)}return;default:if(pd(r)){for(Z in s)s.hasOwnProperty(Z)&&(c=s[Z],c!==void 0&&Zf(n,r,Z,c,s,void 0));return}}for(T in s)s.hasOwnProperty(T)&&(c=s[T],c!=null&&$e(n,r,T,c,s,null))}function l6(n,r,s,c){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,b=null,w=null,T=null,O=null,F=null,Z=null;for(Y in s){var te=s[Y];if(s.hasOwnProperty(Y)&&te!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":O=te;default:c.hasOwnProperty(Y)||$e(n,r,Y,null,c,te)}}for(var K in c){var Y=c[K];if(te=s[K],c.hasOwnProperty(K)&&(Y!=null||te!=null))switch(K){case"type":b=Y;break;case"name":h=Y;break;case"checked":F=Y;break;case"defaultChecked":Z=Y;break;case"value":w=Y;break;case"defaultValue":T=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(i(137,r));break;default:Y!==te&&$e(n,r,K,Y,c,te)}}dd(n,w,T,O,F,Z,b,h);return;case"select":Y=w=T=K=null;for(b in s)if(O=s[b],s.hasOwnProperty(b)&&O!=null)switch(b){case"value":break;case"multiple":Y=O;default:c.hasOwnProperty(b)||$e(n,r,b,null,c,O)}for(h in c)if(b=c[h],O=s[h],c.hasOwnProperty(h)&&(b!=null||O!=null))switch(h){case"value":K=b;break;case"defaultValue":T=b;break;case"multiple":w=b;default:b!==O&&$e(n,r,h,b,c,O)}r=T,s=w,c=Y,K!=null?Zi(n,!!s,K,!1):!!c!=!!s&&(r!=null?Zi(n,!!s,r,!0):Zi(n,!!s,s?[]:"",!1));return;case"textarea":Y=K=null;for(T in s)if(h=s[T],s.hasOwnProperty(T)&&h!=null&&!c.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:$e(n,r,T,null,c,h)}for(w in c)if(h=c[w],b=s[w],c.hasOwnProperty(w)&&(h!=null||b!=null))switch(w){case"value":K=h;break;case"defaultValue":Y=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(i(91));break;default:h!==b&&$e(n,r,w,h,c,b)}$g(n,K,Y);return;case"option":for(var he in s)if(K=s[he],s.hasOwnProperty(he)&&K!=null&&!c.hasOwnProperty(he))switch(he){case"selected":n.selected=!1;break;default:$e(n,r,he,null,c,K)}for(O in c)if(K=c[O],Y=s[O],c.hasOwnProperty(O)&&K!==Y&&(K!=null||Y!=null))switch(O){case"selected":n.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:$e(n,r,O,K,c,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in s)K=s[fe],s.hasOwnProperty(fe)&&K!=null&&!c.hasOwnProperty(fe)&&$e(n,r,fe,null,c,K);for(F in c)if(K=c[F],Y=s[F],c.hasOwnProperty(F)&&K!==Y&&(K!=null||Y!=null))switch(F){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(i(137,r));break;default:$e(n,r,F,K,c,Y)}return;default:if(pd(r)){for(var He in s)K=s[He],s.hasOwnProperty(He)&&K!==void 0&&!c.hasOwnProperty(He)&&Zf(n,r,He,void 0,c,K);for(Z in c)K=c[Z],Y=s[Z],!c.hasOwnProperty(Z)||K===Y||K===void 0&&Y===void 0||Zf(n,r,Z,K,c,Y);return}}for(var G in s)K=s[G],s.hasOwnProperty(G)&&K!=null&&!c.hasOwnProperty(G)&&$e(n,r,G,null,c,K);for(te in c)K=c[te],Y=s[te],!c.hasOwnProperty(te)||K===Y||K==null&&Y==null||$e(n,r,te,K,c,Y)}var Jf=null,ep=null;function fc(n){return n.nodeType===9?n:n.ownerDocument}function G2(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function U2(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function tp(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var np=null;function c6(){var n=window.event;return n&&n.type==="popstate"?n===np?!1:(np=n,!0):(np=null,!1)}var I2=typeof setTimeout=="function"?setTimeout:void 0,u6=typeof clearTimeout=="function"?clearTimeout:void 0,F2=typeof Promise=="function"?Promise:void 0,d6=typeof queueMicrotask=="function"?queueMicrotask:typeof F2<"u"?function(n){return F2.resolve(null).then(n).catch(f6)}:I2;function f6(n){setTimeout(function(){throw n})}function Ya(n){return n==="head"}function q2(n,r){var s=r,c=0,h=0;do{var b=s.nextSibling;if(n.removeChild(s),b&&b.nodeType===8)if(s=b.data,s==="/$"){if(0<c&&8>c){s=c;var w=n.ownerDocument;if(s&1&&no(w.documentElement),s&2&&no(w.body),s&4)for(s=w.head,no(s),w=s.firstChild;w;){var T=w.nextSibling,O=w.nodeName;w[bs]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&w.rel.toLowerCase()==="stylesheet"||s.removeChild(w),w=T}}if(h===0){n.removeChild(b),uo(r);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:c=s.charCodeAt(0)-48;else c=0;s=b}while(s);uo(r)}function ap(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":ap(s),od(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function p6(n,r,s,c){for(;n.nodeType===1;){var h=s;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[bs])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(b=n.getAttribute("rel"),b==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(b!==h.rel||n.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(b=n.getAttribute("src"),(b!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&b&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var b=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===b)return n}else return n;if(n=zn(n.nextSibling),n===null)break}return null}function h6(n,r,s){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=zn(n.nextSibling),n===null))return null;return n}function ip(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function m6(n,r){var s=n.ownerDocument;if(n.data!=="$?"||s.readyState==="complete")r();else{var c=function(){r(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function zn(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}var rp=null;function K2(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return n;r--}else s==="/$"&&r++}n=n.previousSibling}return null}function Y2(n,r,s){switch(r=fc(s),n){case"html":if(n=r.documentElement,!n)throw Error(i(452));return n;case"head":if(n=r.head,!n)throw Error(i(453));return n;case"body":if(n=r.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function no(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);od(n)}var Tn=new Map,X2=new Set;function pc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Sa=P.d;P.d={f:g6,r:b6,D:x6,C:y6,L:v6,m:w6,X:T6,S:S6,M:k6};function g6(){var n=Sa.f(),r=ic();return n||r}function b6(n){var r=Yi(n);r!==null&&r.tag===5&&r.type==="form"?m1(r):Sa.r(n)}var Ar=typeof document>"u"?null:document;function W2(n,r,s){var c=Ar;if(c&&typeof r=="string"&&r){var h=gn(r);h='link[rel="'+n+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),X2.has(h)||(X2.add(h),n={rel:n,crossOrigin:s,href:r},c.querySelector(h)===null&&(r=c.createElement("link"),Ct(r,"link",n),gt(r),c.head.appendChild(r)))}}function x6(n){Sa.D(n),W2("dns-prefetch",n,null)}function y6(n,r){Sa.C(n,r),W2("preconnect",n,r)}function v6(n,r,s){Sa.L(n,r,s);var c=Ar;if(c&&n&&r){var h='link[rel="preload"][as="'+gn(r)+'"]';r==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+gn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+gn(s.imageSizes)+'"]')):h+='[href="'+gn(n)+'"]';var b=h;switch(r){case"style":b=Mr(n);break;case"script":b=zr(n)}Tn.has(b)||(n=g({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:n,as:r},s),Tn.set(b,n),c.querySelector(h)!==null||r==="style"&&c.querySelector(ao(b))||r==="script"&&c.querySelector(io(b))||(r=c.createElement("link"),Ct(r,"link",n),gt(r),c.head.appendChild(r)))}}function w6(n,r){Sa.m(n,r);var s=Ar;if(s&&n){var c=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+gn(c)+'"][href="'+gn(n)+'"]',b=h;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":b=zr(n)}if(!Tn.has(b)&&(n=g({rel:"modulepreload",href:n},r),Tn.set(b,n),s.querySelector(h)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(io(b)))return}c=s.createElement("link"),Ct(c,"link",n),gt(c),s.head.appendChild(c)}}}function S6(n,r,s){Sa.S(n,r,s);var c=Ar;if(c&&n){var h=Xi(c).hoistableStyles,b=Mr(n);r=r||"default";var w=h.get(b);if(!w){var T={loading:0,preload:null};if(w=c.querySelector(ao(b)))T.loading=5;else{n=g({rel:"stylesheet",href:n,"data-precedence":r},s),(s=Tn.get(b))&&sp(n,s);var O=w=c.createElement("link");gt(O),Ct(O,"link",n),O._p=new Promise(function(F,Z){O.onload=F,O.onerror=Z}),O.addEventListener("load",function(){T.loading|=1}),O.addEventListener("error",function(){T.loading|=2}),T.loading|=4,hc(w,r,c)}w={type:"stylesheet",instance:w,count:1,state:T},h.set(b,w)}}}function T6(n,r){Sa.X(n,r);var s=Ar;if(s&&n){var c=Xi(s).hoistableScripts,h=zr(n),b=c.get(h);b||(b=s.querySelector(io(h)),b||(n=g({src:n,async:!0},r),(r=Tn.get(h))&&op(n,r),b=s.createElement("script"),gt(b),Ct(b,"link",n),s.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},c.set(h,b))}}function k6(n,r){Sa.M(n,r);var s=Ar;if(s&&n){var c=Xi(s).hoistableScripts,h=zr(n),b=c.get(h);b||(b=s.querySelector(io(h)),b||(n=g({src:n,async:!0,type:"module"},r),(r=Tn.get(h))&&op(n,r),b=s.createElement("script"),gt(b),Ct(b,"link",n),s.head.appendChild(b)),b={type:"script",instance:b,count:1,state:null},c.set(h,b))}}function Q2(n,r,s,c){var h=(h=ce.current)?pc(h):null;if(!h)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=Mr(s.href),s=Xi(h).hoistableStyles,c=s.get(r),c||(c={type:"style",instance:null,count:0,state:null},s.set(r,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=Mr(s.href);var b=Xi(h).hoistableStyles,w=b.get(n);if(w||(h=h.ownerDocument||h,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},b.set(n,w),(b=h.querySelector(ao(n)))&&!b._p&&(w.instance=b,w.state.loading=5),Tn.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Tn.set(n,s),b||j6(h,n,s,w.state))),r&&c===null)throw Error(i(528,""));return w}if(r&&c!==null)throw Error(i(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=zr(s),s=Xi(h).hoistableScripts,c=s.get(r),c||(c={type:"script",instance:null,count:0,state:null},s.set(r,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function Mr(n){return'href="'+gn(n)+'"'}function ao(n){return'link[rel="stylesheet"]['+n+"]"}function Z2(n){return g({},n,{"data-precedence":n.precedence,precedence:null})}function j6(n,r,s,c){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?c.loading=1:(r=n.createElement("link"),c.preload=r,r.addEventListener("load",function(){return c.loading|=1}),r.addEventListener("error",function(){return c.loading|=2}),Ct(r,"link",s),gt(r),n.head.appendChild(r))}function zr(n){return'[src="'+gn(n)+'"]'}function io(n){return"script[async]"+n}function J2(n,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var c=n.querySelector('style[data-href~="'+gn(s.href)+'"]');if(c)return r.instance=c,gt(c),c;var h=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),gt(c),Ct(c,"style",h),hc(c,s.precedence,n),r.instance=c;case"stylesheet":h=Mr(s.href);var b=n.querySelector(ao(h));if(b)return r.state.loading|=4,r.instance=b,gt(b),b;c=Z2(s),(h=Tn.get(h))&&sp(c,h),b=(n.ownerDocument||n).createElement("link"),gt(b);var w=b;return w._p=new Promise(function(T,O){w.onload=T,w.onerror=O}),Ct(b,"link",c),r.state.loading|=4,hc(b,s.precedence,n),r.instance=b;case"script":return b=zr(s.src),(h=n.querySelector(io(b)))?(r.instance=h,gt(h),h):(c=s,(h=Tn.get(b))&&(c=g({},s),op(c,h)),n=n.ownerDocument||n,h=n.createElement("script"),gt(h),Ct(h,"link",c),n.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(i(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(c=r.instance,r.state.loading|=4,hc(c,s.precedence,n));return r.instance}function hc(n,r,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=c.length?c[c.length-1]:null,b=h,w=0;w<c.length;w++){var T=c[w];if(T.dataset.precedence===r)b=T;else if(b!==h)break}b?b.parentNode.insertBefore(n,b.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(n,r.firstChild))}function sp(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function op(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var mc=null;function eb(n,r,s){if(mc===null){var c=new Map,h=mc=new Map;h.set(s,c)}else h=mc,c=h.get(s),c||(c=new Map,h.set(s,c));if(c.has(n))return c;for(c.set(n,null),s=s.getElementsByTagName(n),h=0;h<s.length;h++){var b=s[h];if(!(b[bs]||b[Rt]||n==="link"&&b.getAttribute("rel")==="stylesheet")&&b.namespaceURI!=="http://www.w3.org/2000/svg"){var w=b.getAttribute(r)||"";w=n+w;var T=c.get(w);T?T.push(b):c.set(w,[b])}}return c}function tb(n,r,s){n=n.ownerDocument||n,n.head.insertBefore(s,r==="title"?n.querySelector("head > title"):null)}function E6(n,r,s){if(s===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function nb(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var ro=null;function C6(){}function A6(n,r,s){if(ro===null)throw Error(i(475));var c=ro;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=Mr(s.href),b=n.querySelector(ao(h));if(b){n=b._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=gc.bind(c),n.then(c,c)),r.state.loading|=4,r.instance=b,gt(b);return}b=n.ownerDocument||n,s=Z2(s),(h=Tn.get(h))&&sp(s,h),b=b.createElement("link"),gt(b);var w=b;w._p=new Promise(function(T,O){w.onload=T,w.onerror=O}),Ct(b,"link",s),r.instance=b}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(c.count++,r=gc.bind(c),n.addEventListener("load",r),n.addEventListener("error",r))}}function M6(){if(ro===null)throw Error(i(475));var n=ro;return n.stylesheets&&n.count===0&&lp(n,n.stylesheets),0<n.count?function(r){var s=setTimeout(function(){if(n.stylesheets&&lp(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(s)}}:null}function gc(){if(this.count--,this.count===0){if(this.stylesheets)lp(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var bc=null;function lp(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,bc=new Map,r.forEach(z6,n),bc=null,gc.call(n))}function z6(n,r){if(!(r.state.loading&4)){var s=bc.get(n);if(s)var c=s.get(null);else{s=new Map,bc.set(n,s);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),b=0;b<h.length;b++){var w=h[b];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(s.set(w.dataset.precedence,w),c=w)}c&&s.set(null,c)}h=r.instance,w=h.getAttribute("data-precedence"),b=s.get(w)||c,b===c&&s.set(null,h),s.set(w,h),this.count++,c=gc.bind(this),h.addEventListener("load",c),h.addEventListener("error",c),b?b.parentNode.insertBefore(h,b.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),r.state.loading|=4}}var so={$$typeof:C,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function R6(n,r,s,c,h,b,w,T){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ad(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ad(0),this.hiddenUpdates=ad(null),this.identifierPrefix=c,this.onUncaughtError=h,this.onCaughtError=b,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function ab(n,r,s,c,h,b,w,T,O,F,Z,te){return n=new R6(n,r,s,w,T,O,F,te),r=1,b===!0&&(r|=24),b=tn(3,null,null,r),n.current=b,b.stateNode=n,r=Gd(),r.refCount++,n.pooledCache=r,r.refCount++,b.memoizedState={element:c,isDehydrated:s,cache:r},qd(b),n}function ib(n){return n?(n=or,n):or}function rb(n,r,s,c,h,b){h=ib(h),c.context===null?c.context=h:c.pendingContext=h,c=Pa(r),c.payload={element:s},b=b===void 0?null:b,b!==null&&(c.callback=b),s=Va(n,c,r),s!==null&&(on(s,n,r),Vs(s,n,r))}function sb(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<r?s:r}}function cp(n,r){sb(n,r),(n=n.alternate)&&sb(n,r)}function ob(n){if(n.tag===13){var r=sr(n,67108864);r!==null&&on(r,n,67108864),cp(n,67108864)}}var xc=!0;function L6(n,r,s,c){var h=U.T;U.T=null;var b=P.p;try{P.p=2,up(n,r,s,c)}finally{P.p=b,U.T=h}}function O6(n,r,s,c){var h=U.T;U.T=null;var b=P.p;try{P.p=8,up(n,r,s,c)}finally{P.p=b,U.T=h}}function up(n,r,s,c){if(xc){var h=dp(c);if(h===null)Qf(n,r,c,yc,s),cb(n,c);else if(P6(h,n,r,s,c))c.stopPropagation();else if(cb(n,c),r&4&&-1<D6.indexOf(n)){for(;h!==null;){var b=Yi(h);if(b!==null)switch(b.tag){case 3:if(b=b.stateNode,b.current.memoizedState.isDehydrated){var w=fi(b.pendingLanes);if(w!==0){var T=b;for(T.pendingLanes|=2,T.entangledLanes|=2;w;){var O=1<<31-Jt(w);T.entanglements[1]|=O,w&=~O}In(b),(Ve&6)===0&&(nc=_n()+500,Js(0))}}break;case 13:T=sr(b,2),T!==null&&on(T,b,2),ic(),cp(b,2)}if(b=dp(c),b===null&&Qf(n,r,c,yc,s),b===h)break;h=b}h!==null&&c.stopPropagation()}else Qf(n,r,c,null,s)}}function dp(n){return n=md(n),fp(n)}var yc=null;function fp(n){if(yc=null,n=Ki(n),n!==null){var r=l(n);if(r===null)n=null;else{var s=r.tag;if(s===13){if(n=u(r),n!==null)return n;n=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return yc=n,null}function lb(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(y3()){case Sg:return 2;case Tg:return 8;case dl:case v3:return 32;case kg:return 268435456;default:return 32}default:return 32}}var pp=!1,Xa=null,Wa=null,Qa=null,oo=new Map,lo=new Map,Za=[],D6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cb(n,r){switch(n){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":oo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(r.pointerId)}}function co(n,r,s,c,h,b){return n===null||n.nativeEvent!==b?(n={blockedOn:r,domEventName:s,eventSystemFlags:c,nativeEvent:b,targetContainers:[h]},r!==null&&(r=Yi(r),r!==null&&ob(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function P6(n,r,s,c,h){switch(r){case"focusin":return Xa=co(Xa,n,r,s,c,h),!0;case"dragenter":return Wa=co(Wa,n,r,s,c,h),!0;case"mouseover":return Qa=co(Qa,n,r,s,c,h),!0;case"pointerover":var b=h.pointerId;return oo.set(b,co(oo.get(b)||null,n,r,s,c,h)),!0;case"gotpointercapture":return b=h.pointerId,lo.set(b,co(lo.get(b)||null,n,r,s,c,h)),!0}return!1}function ub(n){var r=Ki(n.target);if(r!==null){var s=l(r);if(s!==null){if(r=s.tag,r===13){if(r=u(s),r!==null){n.blockedOn=r,A3(n.priority,function(){if(s.tag===13){var c=sn();c=id(c);var h=sr(s,c);h!==null&&on(h,s,c),cp(s,c)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function vc(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var s=dp(n.nativeEvent);if(s===null){s=n.nativeEvent;var c=new s.constructor(s.type,s);hd=c,s.target.dispatchEvent(c),hd=null}else return r=Yi(s),r!==null&&ob(r),n.blockedOn=s,!1;r.shift()}return!0}function db(n,r,s){vc(n)&&s.delete(r)}function V6(){pp=!1,Xa!==null&&vc(Xa)&&(Xa=null),Wa!==null&&vc(Wa)&&(Wa=null),Qa!==null&&vc(Qa)&&(Qa=null),oo.forEach(db),lo.forEach(db)}function wc(n,r){n.blockedOn===r&&(n.blockedOn=null,pp||(pp=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,V6)))}var Sc=null;function fb(n){Sc!==n&&(Sc=n,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Sc===n&&(Sc=null);for(var r=0;r<n.length;r+=3){var s=n[r],c=n[r+1],h=n[r+2];if(typeof c!="function"){if(fp(c||s)===null)continue;break}var b=Yi(s);b!==null&&(n.splice(r,3),r-=3,ff(b,{pending:!0,data:h,method:s.method,action:c},c,h))}}))}function uo(n){function r(O){return wc(O,n)}Xa!==null&&wc(Xa,n),Wa!==null&&wc(Wa,n),Qa!==null&&wc(Qa,n),oo.forEach(r),lo.forEach(r);for(var s=0;s<Za.length;s++){var c=Za[s];c.blockedOn===n&&(c.blockedOn=null)}for(;0<Za.length&&(s=Za[0],s.blockedOn===null);)ub(s),s.blockedOn===null&&Za.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var h=s[c],b=s[c+1],w=h[$t]||null;if(typeof b=="function")w||fb(s);else if(w){var T=null;if(b&&b.hasAttribute("formAction")){if(h=b,w=b[$t]||null)T=w.formAction;else if(fp(h)!==null)continue}else T=w.action;typeof T=="function"?s[c+1]=T:(s.splice(c,3),c-=3),fb(s)}}}function hp(n){this._internalRoot=n}Tc.prototype.render=hp.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(i(409));var s=r.current,c=sn();rb(s,c,n,r,null,null)},Tc.prototype.unmount=hp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;rb(n.current,2,null,n,null,null),ic(),r[qi]=null}};function Tc(n){this._internalRoot=n}Tc.prototype.unstable_scheduleHydration=function(n){if(n){var r=Mg();n={blockedOn:null,target:n,priority:r};for(var s=0;s<Za.length&&r!==0&&r<Za[s].priority;s++);Za.splice(s,0,n),s===0&&ub(n)}};var pb=t.version;if(pb!=="19.1.1")throw Error(i(527,pb,"19.1.1"));P.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=p(r),n=n!==null?m(n):null,n=n===null?null:n.stateNode,n};var N6={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kc.isDisabled&&kc.supportsFiber)try{hs=kc.inject(N6),Zt=kc}catch{}}return po.createRoot=function(n,r){if(!o(n))throw Error(i(299));var s=!1,c="",h=M1,b=z1,w=R1,T=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(b=r.onCaughtError),r.onRecoverableError!==void 0&&(w=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(T=r.unstable_transitionCallbacks)),r=ab(n,1,!1,null,null,s,c,h,b,w,T,null),n[qi]=r.current,Wf(n),new hp(r)},po.hydrateRoot=function(n,r,s){if(!o(n))throw Error(i(299));var c=!1,h="",b=M1,w=z1,T=R1,O=null,F=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(b=s.onUncaughtError),s.onCaughtError!==void 0&&(w=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(O=s.unstable_transitionCallbacks),s.formState!==void 0&&(F=s.formState)),r=ab(n,1,!0,r,s??null,c,h,b,w,T,O,F),r.context=ib(null),s=r.current,c=sn(),c=id(c),h=Pa(c),h.callback=null,Va(s,h,c),s=c,r.current.lanes=s,gs(r,s),In(r),n[qi]=r.current,Wf(n),new Tc(r)},po.version="19.1.1",po}var Tb;function K6(){if(Tb)return gp.exports;Tb=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),gp.exports=q6(),gp.exports}var Y6=K6();const X6=Cv(Y6);var E=gm();const Ce=Cv(E),kb=_6({__proto__:null,default:Ce},[E]);/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var jb="popstate";function W6(e={}){function t(i,o){let{pathname:l,search:u,hash:f}=i.location;return xh("",{pathname:l,search:u,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function a(i,o){return typeof o=="string"?o:$o(o)}return Z6(t,a,null,e)}function Qe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Pn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Q6(){return Math.random().toString(36).substring(2,10)}function Eb(e,t){return{usr:e.state,key:e.key,idx:t}}function xh(e,t,a=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?rs(t):t,state:a,key:t&&t.key||i||Q6()}}function $o({pathname:e="/",search:t="",hash:a=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function rs(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substring(a),e=e.substring(0,a));let i=e.indexOf("?");i>=0&&(t.search=e.substring(i),e=e.substring(0,i)),e&&(t.pathname=e)}return t}function Z6(e,t,a,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,u=o.history,f="POP",p=null,m=g();m==null&&(m=0,u.replaceState({...u.state,idx:m},""));function g(){return(u.state||{idx:null}).idx}function x(){f="POP";let A=g(),j=A==null?null:A-m;m=A,p&&p({action:f,location:k.location,delta:j})}function y(A,j){f="PUSH";let R=xh(k.location,A,j);m=g()+1;let C=Eb(R,m),_=k.createHref(R);try{u.pushState(C,"",_)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;o.location.assign(_)}l&&p&&p({action:f,location:k.location,delta:1})}function v(A,j){f="REPLACE";let R=xh(k.location,A,j);m=g();let C=Eb(R,m),_=k.createHref(R);u.replaceState(C,"",_),l&&p&&p({action:f,location:k.location,delta:0})}function S(A){return J6(A)}let k={get action(){return f},get location(){return e(o,u)},listen(A){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(jb,x),p=A,()=>{o.removeEventListener(jb,x),p=null}},createHref(A){return t(o,A)},createURL:S,encodeLocation(A){let j=S(A);return{pathname:j.pathname,search:j.search,hash:j.hash}},push:y,replace:v,go(A){return u.go(A)}};return k}function J6(e,t=!1){let a="http://localhost";typeof window<"u"&&(a=window.location.origin!=="null"?window.location.origin:window.location.href),Qe(a,"No window.location.(origin|href) available to create URL");let i=typeof e=="string"?e:$o(e);return i=i.replace(/ $/,"%20"),!t&&i.startsWith("//")&&(i=a+i),new URL(i,a)}function Mv(e,t,a="/"){return eS(e,t,a,!1)}function eS(e,t,a,i){let o=typeof t=="string"?rs(t):t,l=Aa(o.pathname||"/",a);if(l==null)return null;let u=zv(e);tS(u);let f=null;for(let p=0;f==null&&p<u.length;++p){let m=fS(l);f=uS(u[p],m,i)}return f}function zv(e,t=[],a=[],i="",o=!1){let l=(u,f,p=o,m)=>{let g={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(i)&&p)return;Qe(g.relativePath.startsWith(i),`Absolute route path "${g.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(i.length)}let x=Ca([i,g.relativePath]),y=a.concat(g);u.children&&u.children.length>0&&(Qe(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),zv(u.children,t,y,x,p)),!(u.path==null&&!u.index)&&t.push({path:x,score:lS(x,u.index),routesMeta:y})};return e.forEach((u,f)=>{var p;if(u.path===""||!((p=u.path)!=null&&p.includes("?")))l(u,f);else for(let m of Rv(u.path))l(u,f,!0,m)}),t}function Rv(e){let t=e.split("/");if(t.length===0)return[];let[a,...i]=t,o=a.endsWith("?"),l=a.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let u=Rv(i.join("/")),f=[];return f.push(...u.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...u),f.map(p=>e.startsWith("/")&&p===""?"/":p)}function tS(e){e.sort((t,a)=>t.score!==a.score?a.score-t.score:cS(t.routesMeta.map(i=>i.childrenIndex),a.routesMeta.map(i=>i.childrenIndex)))}var nS=/^:[\w-]+$/,aS=3,iS=2,rS=1,sS=10,oS=-2,Cb=e=>e==="*";function lS(e,t){let a=e.split("/"),i=a.length;return a.some(Cb)&&(i+=oS),t&&(i+=iS),a.filter(o=>!Cb(o)).reduce((o,l)=>o+(nS.test(l)?aS:l===""?rS:sS),i)}function cS(e,t){return e.length===t.length&&e.slice(0,-1).every((i,o)=>i===t[o])?e[e.length-1]-t[t.length-1]:0}function uS(e,t,a=!1){let{routesMeta:i}=e,o={},l="/",u=[];for(let f=0;f<i.length;++f){let p=i[f],m=f===i.length-1,g=l==="/"?t:t.slice(l.length)||"/",x=cu({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),y=p.route;if(!x&&m&&a&&!i[i.length-1].route.index&&(x=cu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!x)return null;Object.assign(o,x.params),u.push({params:o,pathname:Ca([l,x.pathname]),pathnameBase:gS(Ca([l,x.pathnameBase])),route:y}),x.pathnameBase!=="/"&&(l=Ca([l,x.pathnameBase]))}return u}function cu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,i]=dS(e.path,e.caseSensitive,e.end),o=t.match(a);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((m,{paramName:g,isOptional:x},y)=>{if(g==="*"){let S=f[y]||"";u=l.slice(0,l.length-S.length).replace(/(.)\/+$/,"$1")}const v=f[y];return x&&!v?m[g]=void 0:m[g]=(v||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:u,pattern:e}}function dS(e,t=!1,a=!0){Pn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,p)=>(i.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(i.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),i]}function fS(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Pn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Aa(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,i=e.charAt(a);return i&&i!=="/"?null:e.slice(a)||"/"}var pS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function hS(e,t="/"){let{pathname:a,search:i="",hash:o=""}=typeof e=="string"?rs(e):e,l;return a?(a=a.replace(/\/\/+/g,"/"),a.startsWith("/")?l=Ab(a.substring(1),"/"):l=Ab(a,t)):l=t,{pathname:l,search:bS(i),hash:xS(o)}}function Ab(e,t){let a=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?a.length>1&&a.pop():o!=="."&&a.push(o)}),a.length>1?a.join("/"):"/"}function wp(e,t,a,i){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function mS(e){return e.filter((t,a)=>a===0||t.route.path&&t.route.path.length>0)}function bm(e){let t=mS(e);return t.map((a,i)=>i===t.length-1?a.pathname:a.pathnameBase)}function xm(e,t,a,i=!1){let o;typeof e=="string"?o=rs(e):(o={...e},Qe(!o.pathname||!o.pathname.includes("?"),wp("?","pathname","search",o)),Qe(!o.pathname||!o.pathname.includes("#"),wp("#","pathname","hash",o)),Qe(!o.search||!o.search.includes("#"),wp("#","search","hash",o)));let l=e===""||o.pathname==="",u=l?"/":o.pathname,f;if(u==null)f=a;else{let x=t.length-1;if(!i&&u.startsWith("..")){let y=u.split("/");for(;y[0]==="..";)y.shift(),x-=1;o.pathname=y.join("/")}f=x>=0?t[x]:"/"}let p=hS(o,f),m=u&&u!=="/"&&u.endsWith("/"),g=(l||u===".")&&a.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var Ca=e=>e.join("/").replace(/\/\/+/g,"/"),gS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),bS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,xS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,yS=class{constructor(e,t,a,i=!1){this.status=e,this.statusText=t||"",this.internal=i,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function vS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function wS(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Lv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ov(e,t){let a=e;if(typeof a!="string"||!pS.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let i=a,o=!1;if(Lv)try{let l=new URL(window.location.href),u=a.startsWith("//")?new URL(l.protocol+a):new URL(a),f=Aa(u.pathname,t);u.origin===l.origin&&f!=null?a=f+u.search+u.hash:o=!0}catch{Pn(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:o,to:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Dv=["POST","PUT","PATCH","DELETE"];new Set(Dv);var SS=["GET",...Dv];new Set(SS);var ss=E.createContext(null);ss.displayName="DataRouter";var Du=E.createContext(null);Du.displayName="DataRouterState";var TS=E.createContext(!1),Pv=E.createContext({isTransitioning:!1});Pv.displayName="ViewTransition";var kS=E.createContext(new Map);kS.displayName="Fetchers";var jS=E.createContext(null);jS.displayName="Await";var fn=E.createContext(null);fn.displayName="Navigation";var nl=E.createContext(null);nl.displayName="Location";var Bn=E.createContext({outlet:null,matches:[],isDataRoute:!1});Bn.displayName="Route";var ym=E.createContext(null);ym.displayName="RouteError";var Vv="REACT_ROUTER_ERROR",ES="REDIRECT",CS="ROUTE_ERROR_RESPONSE";function AS(e){if(e.startsWith(`${Vv}:${ES}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function MS(e){if(e.startsWith(`${Vv}:${CS}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new yS(t.status,t.statusText,t.data)}catch{}}function zS(e,{relative:t}={}){Qe(os(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:i}=E.useContext(fn),{hash:o,pathname:l,search:u}=al(e,{relative:t}),f=l;return a!=="/"&&(f=l==="/"?a:Ca([a,l])),i.createHref({pathname:f,search:u,hash:o})}function os(){return E.useContext(nl)!=null}function ra(){return Qe(os(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(nl).location}var Nv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Bv(e){E.useContext(fn).static||E.useLayoutEffect(e)}function _v(){let{isDataRoute:e}=E.useContext(Bn);return e?FS():RS()}function RS(){Qe(os(),"useNavigate() may be used only in the context of a <Router> component.");let e=E.useContext(ss),{basename:t,navigator:a}=E.useContext(fn),{matches:i}=E.useContext(Bn),{pathname:o}=ra(),l=JSON.stringify(bm(i)),u=E.useRef(!1);return Bv(()=>{u.current=!0}),E.useCallback((p,m={})=>{if(Pn(u.current,Nv),!u.current)return;if(typeof p=="number"){a.go(p);return}let g=xm(p,JSON.parse(l),o,m.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:Ca([t,g.pathname])),(m.replace?a.replace:a.push)(g,m.state,m)},[t,a,l,o,e])}var LS=E.createContext(null);function OS(e){let t=E.useContext(Bn).outlet;return E.useMemo(()=>t&&E.createElement(LS.Provider,{value:e},t),[t,e])}function al(e,{relative:t}={}){let{matches:a}=E.useContext(Bn),{pathname:i}=ra(),o=JSON.stringify(bm(a));return E.useMemo(()=>xm(e,JSON.parse(o),i,t==="path"),[e,o,i,t])}function DS(e,t){return $v(e,t)}function $v(e,t,a,i,o){var R;Qe(os(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=E.useContext(fn),{matches:u}=E.useContext(Bn),f=u[u.length-1],p=f?f.params:{},m=f?f.pathname:"/",g=f?f.pathnameBase:"/",x=f&&f.route;{let C=x&&x.path||"";Gv(m,!x||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let y=ra(),v;if(t){let C=typeof t=="string"?rs(t):t;Qe(g==="/"||((R=C.pathname)==null?void 0:R.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${C.pathname}" was given in the \`location\` prop.`),v=C}else v=y;let S=v.pathname||"/",k=S;if(g!=="/"){let C=g.replace(/^\//,"").split("/");k="/"+S.replace(/^\//,"").split("/").slice(C.length).join("/")}let A=Mv(e,{pathname:k});Pn(x||A!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Pn(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let j=_S(A&&A.map(C=>Object.assign({},C,{params:Object.assign({},p,C.params),pathname:Ca([g,l.encodeLocation?l.encodeLocation(C.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?g:Ca([g,l.encodeLocation?l.encodeLocation(C.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathnameBase])})),u,a,i,o);return t&&j?E.createElement(nl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},j):j}function PS(){let e=IS(),t=vS(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:l},"ErrorBoundary")," or"," ",E.createElement("code",{style:l},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),a?E.createElement("pre",{style:o},a):null,u)}var VS=E.createElement(PS,null),Hv=class extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const a=MS(e.digest);a&&(e=a)}let t=e!==void 0?E.createElement(Bn.Provider,{value:this.props.routeContext},E.createElement(ym.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?E.createElement(NS,{error:e},t):t}};Hv.contextType=TS;var Sp=new WeakMap;function NS({children:e,error:t}){let{basename:a}=E.useContext(fn);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let i=AS(t.digest);if(i){let o=Sp.get(t);if(o)throw o;let l=Ov(i.location,a);if(Lv&&!Sp.get(t))if(l.isExternal||i.reloadDocument)window.location.href=l.absoluteURL||l.to;else{const u=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:i.replace}));throw Sp.set(t,u),u}return E.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l.absoluteURL||l.to}`})}}return e}function BS({routeContext:e,match:t,children:a}){let i=E.useContext(ss);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),E.createElement(Bn.Provider,{value:e},a)}function _S(e,t=[],a=null,i=null,o=null){if(e==null){if(!a)return null;if(a.errors)e=a.matches;else if(t.length===0&&!a.initialized&&a.matches.length>0)e=a.matches;else return null}let l=e,u=a==null?void 0:a.errors;if(u!=null){let g=l.findIndex(x=>x.route.id&&(u==null?void 0:u[x.route.id])!==void 0);Qe(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,g+1))}let f=!1,p=-1;if(a)for(let g=0;g<l.length;g++){let x=l[g];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(p=g),x.route.id){let{loaderData:y,errors:v}=a,S=x.route.loader&&!y.hasOwnProperty(x.route.id)&&(!v||v[x.route.id]===void 0);if(x.route.lazy||S){f=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}let m=a&&i?(g,x)=>{var y,v;i(g,{location:a.location,params:((v=(y=a.matches)==null?void 0:y[0])==null?void 0:v.params)??{},unstable_pattern:wS(a.matches),errorInfo:x})}:void 0;return l.reduceRight((g,x,y)=>{let v,S=!1,k=null,A=null;a&&(v=u&&x.route.id?u[x.route.id]:void 0,k=x.route.errorElement||VS,f&&(p<0&&y===0?(Gv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,A=null):p===y&&(S=!0,A=x.route.hydrateFallbackElement||null)));let j=t.concat(l.slice(0,y+1)),R=()=>{let C;return v?C=k:S?C=A:x.route.Component?C=E.createElement(x.route.Component,null):x.route.element?C=x.route.element:C=g,E.createElement(BS,{match:x,routeContext:{outlet:g,matches:j,isDataRoute:a!=null},children:C})};return a&&(x.route.ErrorBoundary||x.route.errorElement||y===0)?E.createElement(Hv,{location:a.location,revalidation:a.revalidation,component:k,error:v,children:R(),routeContext:{outlet:null,matches:j,isDataRoute:!0},onError:m}):R()},null)}function vm(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $S(e){let t=E.useContext(ss);return Qe(t,vm(e)),t}function HS(e){let t=E.useContext(Du);return Qe(t,vm(e)),t}function GS(e){let t=E.useContext(Bn);return Qe(t,vm(e)),t}function wm(e){let t=GS(e),a=t.matches[t.matches.length-1];return Qe(a.route.id,`${e} can only be used on routes that contain a unique "id"`),a.route.id}function US(){return wm("useRouteId")}function IS(){var i;let e=E.useContext(ym),t=HS("useRouteError"),a=wm("useRouteError");return e!==void 0?e:(i=t.errors)==null?void 0:i[a]}function FS(){let{router:e}=$S("useNavigate"),t=wm("useNavigate"),a=E.useRef(!1);return Bv(()=>{a.current=!0}),E.useCallback(async(o,l={})=>{Pn(a.current,Nv),a.current&&(typeof o=="number"?await e.navigate(o):await e.navigate(o,{fromRouteId:t,...l}))},[e,t])}var Mb={};function Gv(e,t,a){!t&&!Mb[e]&&(Mb[e]=!0,Pn(!1,a))}E.memo(qS);function qS({routes:e,future:t,state:a,onError:i}){return $v(e,void 0,a,i,t)}function zb({to:e,replace:t,state:a,relative:i}){Qe(os(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=E.useContext(fn);Pn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=E.useContext(Bn),{pathname:u}=ra(),f=_v(),p=xm(e,bm(l),u,i==="path"),m=JSON.stringify(p);return E.useEffect(()=>{f(JSON.parse(m),{replace:t,state:a,relative:i})},[f,m,i,t,a]),null}function KS(e){return OS(e.context)}function wt(e){Qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function YS({basename:e="/",children:t=null,location:a,navigationType:i="POP",navigator:o,static:l=!1,unstable_useTransitions:u}){Qe(!os(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=e.replace(/^\/*/,"/"),p=E.useMemo(()=>({basename:f,navigator:o,static:l,unstable_useTransitions:u,future:{}}),[f,o,l,u]);typeof a=="string"&&(a=rs(a));let{pathname:m="/",search:g="",hash:x="",state:y=null,key:v="default"}=a,S=E.useMemo(()=>{let k=Aa(m,f);return k==null?null:{location:{pathname:k,search:g,hash:x,state:y,key:v},navigationType:i}},[f,m,g,x,y,v,i]);return Pn(S!=null,`<Router basename="${f}"> is not able to match the URL "${m}${g}${x}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:E.createElement(fn.Provider,{value:p},E.createElement(nl.Provider,{children:t,value:S}))}function XS({children:e,location:t}){return DS(yh(e),t)}function yh(e,t=[]){let a=[];return E.Children.forEach(e,(i,o)=>{if(!E.isValidElement(i))return;let l=[...t,o];if(i.type===E.Fragment){a.push.apply(a,yh(i.props.children,l));return}Qe(i.type===wt,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qe(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=yh(i.props.children,l)),a.push(u)}),a}var Fc="get",qc="application/x-www-form-urlencoded";function Pu(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function WS(e){return Pu(e)&&e.tagName.toLowerCase()==="button"}function QS(e){return Pu(e)&&e.tagName.toLowerCase()==="form"}function ZS(e){return Pu(e)&&e.tagName.toLowerCase()==="input"}function JS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function e9(e,t){return e.button===0&&(!t||t==="_self")&&!JS(e)}var jc=null;function t9(){if(jc===null)try{new FormData(document.createElement("form"),0),jc=!1}catch{jc=!0}return jc}var n9=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Tp(e){return e!=null&&!n9.has(e)?(Pn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qc}"`),null):e}function a9(e,t){let a,i,o,l,u;if(QS(e)){let f=e.getAttribute("action");i=f?Aa(f,t):null,a=e.getAttribute("method")||Fc,o=Tp(e.getAttribute("enctype"))||qc,l=new FormData(e)}else if(WS(e)||ZS(e)&&(e.type==="submit"||e.type==="image")){let f=e.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=e.getAttribute("formaction")||f.getAttribute("action");if(i=p?Aa(p,t):null,a=e.getAttribute("formmethod")||f.getAttribute("method")||Fc,o=Tp(e.getAttribute("formenctype"))||Tp(f.getAttribute("enctype"))||qc,l=new FormData(f,e),!t9()){let{name:m,type:g,value:x}=e;if(g==="image"){let y=m?`${m}.`:"";l.append(`${y}x`,"0"),l.append(`${y}y`,"0")}else m&&l.append(m,x)}}else{if(Pu(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=Fc,i=null,o=qc,u=e}return l&&o==="text/plain"&&(u=l,l=void 0),{action:i,method:a.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Sm(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function i9(e,t,a,i){let o=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${i}`:o.pathname=`${o.pathname}.${i}`:o.pathname==="/"?o.pathname=`_root.${i}`:t&&Aa(o.pathname,t)==="/"?o.pathname=`${t.replace(/\/$/,"")}/_root.${i}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${i}`,o}async function r9(e,t){if(e.id in t)return t[e.id];try{let a=await import(e.module);return t[e.id]=a,a}catch(a){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function s9(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function o9(e,t,a){let i=await Promise.all(e.map(async o=>{let l=t.routes[o.route.id];if(l){let u=await r9(l,a);return u.links?u.links():[]}return[]}));return d9(i.flat(1).filter(s9).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Rb(e,t,a,i,o,l){let u=(p,m)=>a[m]?p.route.id!==a[m].route.id:!0,f=(p,m)=>{var g;return a[m].pathname!==p.pathname||((g=a[m].route.path)==null?void 0:g.endsWith("*"))&&a[m].params["*"]!==p.params["*"]};return l==="assets"?t.filter((p,m)=>u(p,m)||f(p,m)):l==="data"?t.filter((p,m)=>{var x;let g=i.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(u(p,m)||f(p,m))return!0;if(p.route.shouldRevalidate){let y=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((x=a[0])==null?void 0:x.params)||{},nextUrl:new URL(e,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function l9(e,t,{includeHydrateFallback:a}={}){return c9(e.map(i=>{let o=t.routes[i.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),a&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function c9(e){return[...new Set(e)]}function u9(e){let t={},a=Object.keys(e).sort();for(let i of a)t[i]=e[i];return t}function d9(e,t){let a=new Set;return new Set(t),e.reduce((i,o)=>{let l=JSON.stringify(u9(o));return a.has(l)||(a.add(l),i.push({key:l,link:o})),i},[])}function Uv(){let e=E.useContext(ss);return Sm(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function f9(){let e=E.useContext(Du);return Sm(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Tm=E.createContext(void 0);Tm.displayName="FrameworkContext";function Iv(){let e=E.useContext(Tm);return Sm(e,"You must render this element inside a <HydratedRouter> element"),e}function p9(e,t){let a=E.useContext(Tm),[i,o]=E.useState(!1),[l,u]=E.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:x}=t,y=E.useRef(null);E.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let k=j=>{j.forEach(R=>{u(R.isIntersecting)})},A=new IntersectionObserver(k,{threshold:.5});return y.current&&A.observe(y.current),()=>{A.disconnect()}}},[e]),E.useEffect(()=>{if(i){let k=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(k)}}},[i]);let v=()=>{o(!0)},S=()=>{o(!1),u(!1)};return a?e!=="intent"?[l,y,{}]:[l,y,{onFocus:ho(f,v),onBlur:ho(p,S),onMouseEnter:ho(m,v),onMouseLeave:ho(g,S),onTouchStart:ho(x,v)}]:[!1,y,{}]}function ho(e,t){return a=>{e&&e(a),a.defaultPrevented||t(a)}}function h9({page:e,...t}){let{router:a}=Uv(),i=E.useMemo(()=>Mv(a.routes,e,a.basename),[a.routes,e,a.basename]);return i?E.createElement(g9,{page:e,matches:i,...t}):null}function m9(e){let{manifest:t,routeModules:a}=Iv(),[i,o]=E.useState([]);return E.useEffect(()=>{let l=!1;return o9(e,t,a).then(u=>{l||o(u)}),()=>{l=!0}},[e,t,a]),i}function g9({page:e,matches:t,...a}){let i=ra(),{future:o,manifest:l,routeModules:u}=Iv(),{basename:f}=Uv(),{loaderData:p,matches:m}=f9(),g=E.useMemo(()=>Rb(e,t,m,l,i,"data"),[e,t,m,l,i]),x=E.useMemo(()=>Rb(e,t,m,l,i,"assets"),[e,t,m,l,i]),y=E.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let k=new Set,A=!1;if(t.forEach(R=>{var _;let C=l.routes[R.route.id];!C||!C.hasLoader||(!g.some(M=>M.route.id===R.route.id)&&R.route.id in p&&((_=u[R.route.id])!=null&&_.shouldRevalidate)||C.hasClientLoader?A=!0:k.add(R.route.id))}),k.size===0)return[];let j=i9(e,f,o.unstable_trailingSlashAwareDataRequests,"data");return A&&k.size>0&&j.searchParams.set("_routes",t.filter(R=>k.has(R.route.id)).map(R=>R.route.id).join(",")),[j.pathname+j.search]},[f,o.unstable_trailingSlashAwareDataRequests,p,i,l,g,t,e,u]),v=E.useMemo(()=>l9(x,l),[x,l]),S=m9(x);return E.createElement(E.Fragment,null,y.map(k=>E.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...a})),v.map(k=>E.createElement("link",{key:k,rel:"modulepreload",href:k,...a})),S.map(({key:k,link:A})=>E.createElement("link",{key:k,nonce:a.nonce,...A,crossOrigin:A.crossOrigin??a.crossOrigin})))}function b9(...e){return t=>{e.forEach(a=>{typeof a=="function"?a(t):a!=null&&(a.current=t)})}}var x9=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{x9&&(window.__reactRouterVersion="7.13.0")}catch{}function y9({basename:e,children:t,unstable_useTransitions:a,window:i}){let o=E.useRef();o.current==null&&(o.current=W6({window:i,v5Compat:!0}));let l=o.current,[u,f]=E.useState({action:l.action,location:l.location}),p=E.useCallback(m=>{a===!1?f(m):E.startTransition(()=>f(m))},[a]);return E.useLayoutEffect(()=>l.listen(p),[l,p]),E.createElement(YS,{basename:e,children:t,location:u.location,navigationType:u.action,navigator:l,unstable_useTransitions:a})}var Fv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qv=E.forwardRef(function({onClick:t,discover:a="render",prefetch:i="none",relative:o,reloadDocument:l,replace:u,state:f,target:p,to:m,preventScrollReset:g,viewTransition:x,unstable_defaultShouldRevalidate:y,...v},S){let{basename:k,unstable_useTransitions:A}=E.useContext(fn),j=typeof m=="string"&&Fv.test(m),R=Ov(m,k);m=R.to;let C=zS(m,{relative:o}),[_,M,D]=p9(i,v),N=S9(m,{replace:u,state:f,target:p,preventScrollReset:g,relative:o,viewTransition:x,unstable_defaultShouldRevalidate:y,unstable_useTransitions:A});function V(W){t&&t(W),W.defaultPrevented||N(W)}let q=E.createElement("a",{...v,...D,href:R.absoluteURL||C,onClick:R.isExternal||l?t:V,ref:b9(S,M),target:p,"data-discover":!j&&a==="render"?"true":void 0});return _&&!j?E.createElement(E.Fragment,null,q,E.createElement(h9,{page:C})):q});qv.displayName="Link";var aa=E.forwardRef(function({"aria-current":t="page",caseSensitive:a=!1,className:i="",end:o=!1,style:l,to:u,viewTransition:f,children:p,...m},g){let x=al(u,{relative:m.relative}),y=ra(),v=E.useContext(Du),{navigator:S,basename:k}=E.useContext(fn),A=v!=null&&C9(x)&&f===!0,j=S.encodeLocation?S.encodeLocation(x).pathname:x.pathname,R=y.pathname,C=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;a||(R=R.toLowerCase(),C=C?C.toLowerCase():null,j=j.toLowerCase()),C&&k&&(C=Aa(C,k)||C);const _=j!=="/"&&j.endsWith("/")?j.length-1:j.length;let M=R===j||!o&&R.startsWith(j)&&R.charAt(_)==="/",D=C!=null&&(C===j||!o&&C.startsWith(j)&&C.charAt(j.length)==="/"),N={isActive:M,isPending:D,isTransitioning:A},V=M?t:void 0,q;typeof i=="function"?q=i(N):q=[i,M?"active":null,D?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let W=typeof l=="function"?l(N):l;return E.createElement(qv,{...m,"aria-current":V,className:q,ref:g,style:W,to:u,viewTransition:f},typeof p=="function"?p(N):p)});aa.displayName="NavLink";var v9=E.forwardRef(({discover:e="render",fetcherKey:t,navigate:a,reloadDocument:i,replace:o,state:l,method:u=Fc,action:f,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:x,unstable_defaultShouldRevalidate:y,...v},S)=>{let{unstable_useTransitions:k}=E.useContext(fn),A=j9(),j=E9(f,{relative:m}),R=u.toLowerCase()==="get"?"get":"post",C=typeof f=="string"&&Fv.test(f),_=M=>{if(p&&p(M),M.defaultPrevented)return;M.preventDefault();let D=M.nativeEvent.submitter,N=(D==null?void 0:D.getAttribute("formmethod"))||u,V=()=>A(D||M.currentTarget,{fetcherKey:t,method:N,navigate:a,replace:o,state:l,relative:m,preventScrollReset:g,viewTransition:x,unstable_defaultShouldRevalidate:y});k&&a!==!1?E.startTransition(()=>V()):V()};return E.createElement("form",{ref:S,method:R,action:j,onSubmit:i?p:_,...v,"data-discover":!C&&e==="render"?"true":void 0})});v9.displayName="Form";function w9(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kv(e){let t=E.useContext(ss);return Qe(t,w9(e)),t}function S9(e,{target:t,replace:a,state:i,preventScrollReset:o,relative:l,viewTransition:u,unstable_defaultShouldRevalidate:f,unstable_useTransitions:p}={}){let m=_v(),g=ra(),x=al(e,{relative:l});return E.useCallback(y=>{if(e9(y,t)){y.preventDefault();let v=a!==void 0?a:$o(g)===$o(x),S=()=>m(e,{replace:v,state:i,preventScrollReset:o,relative:l,viewTransition:u,unstable_defaultShouldRevalidate:f});p?E.startTransition(()=>S()):S()}},[g,m,x,a,i,t,e,o,l,u,f,p])}var T9=0,k9=()=>`__${String(++T9)}__`;function j9(){let{router:e}=Kv("useSubmit"),{basename:t}=E.useContext(fn),a=US(),i=e.fetch,o=e.navigate;return E.useCallback(async(l,u={})=>{let{action:f,method:p,encType:m,formData:g,body:x}=a9(l,t);if(u.navigate===!1){let y=u.fetcherKey||k9();await i(y,a,u.action||f,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:g,body:x,formMethod:u.method||p,formEncType:u.encType||m,flushSync:u.flushSync})}else await o(u.action||f,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:g,body:x,formMethod:u.method||p,formEncType:u.encType||m,replace:u.replace,state:u.state,fromRouteId:a,flushSync:u.flushSync,viewTransition:u.viewTransition})},[i,o,t,a])}function E9(e,{relative:t}={}){let{basename:a}=E.useContext(fn),i=E.useContext(Bn);Qe(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...al(e||".",{relative:t})},u=ra();if(e==null){l.search=u.search;let f=new URLSearchParams(l.search),p=f.getAll("index");if(p.some(g=>g==="")){f.delete("index"),p.filter(x=>x).forEach(x=>f.append("index",x));let g=f.toString();l.search=g?`?${g}`:""}}return(!e||e===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(l.pathname=l.pathname==="/"?a:Ca([a,l.pathname])),$o(l)}function C9(e,{relative:t}={}){let a=E.useContext(Pv);Qe(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Kv("useViewTransitionState"),o=al(e,{relative:t});if(!a.isTransitioning)return!1;let l=Aa(a.currentLocation.pathname,i)||a.currentLocation.pathname,u=Aa(a.nextLocation.pathname,i)||a.nextLocation.pathname;return cu(o.pathname,u)!=null||cu(o.pathname,l)!=null}var A9=Av();function M9(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function z9(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var R9=function(){function e(a){var i=this;this._insertTag=function(o){var l;i.tags.length===0?i.insertionPoint?l=i.insertionPoint.nextSibling:i.prepend?l=i.container.firstChild:l=i.before:l=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(o,l),i.tags.push(o)},this.isSpeedy=a.speedy===void 0?!0:a.speedy,this.tags=[],this.ctr=0,this.nonce=a.nonce,this.key=a.key,this.container=a.container,this.prepend=a.prepend,this.insertionPoint=a.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(i){i.forEach(this._insertTag)},t.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(z9(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=M9(o);try{l.insertRule(i,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(i));this.ctr++},t.flush=function(){this.tags.forEach(function(i){var o;return(o=i.parentNode)==null?void 0:o.removeChild(i)}),this.tags=[],this.ctr=0},e}(),Dt="-ms-",uu="-moz-",Re="-webkit-",Yv="comm",km="rule",jm="decl",L9="@import",Xv="@keyframes",O9="@layer",D9=Math.abs,Vu=String.fromCharCode,P9=Object.assign;function V9(e,t){return At(e,0)^45?(((t<<2^At(e,0))<<2^At(e,1))<<2^At(e,2))<<2^At(e,3):0}function Wv(e){return e.trim()}function N9(e,t){return(e=t.exec(e))?e[0]:e}function Le(e,t,a){return e.replace(t,a)}function vh(e,t){return e.indexOf(t)}function At(e,t){return e.charCodeAt(t)|0}function Ho(e,t,a){return e.slice(t,a)}function Xn(e){return e.length}function Em(e){return e.length}function Ec(e,t){return t.push(e),e}function B9(e,t){return e.map(t).join("")}var Nu=1,Xr=1,Qv=0,Qt=0,ct=0,ls="";function Bu(e,t,a,i,o,l,u){return{value:e,root:t,parent:a,type:i,props:o,children:l,line:Nu,column:Xr,length:u,return:""}}function mo(e,t){return P9(Bu("",null,null,"",null,null,0),e,{length:-e.length},t)}function _9(){return ct}function $9(){return ct=Qt>0?At(ls,--Qt):0,Xr--,ct===10&&(Xr=1,Nu--),ct}function un(){return ct=Qt<Qv?At(ls,Qt++):0,Xr++,ct===10&&(Xr=1,Nu++),ct}function Jn(){return At(ls,Qt)}function Kc(){return Qt}function il(e,t){return Ho(ls,e,t)}function Go(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Zv(e){return Nu=Xr=1,Qv=Xn(ls=e),Qt=0,[]}function Jv(e){return ls="",e}function Yc(e){return Wv(il(Qt-1,wh(e===91?e+2:e===40?e+1:e)))}function H9(e){for(;(ct=Jn())&&ct<33;)un();return Go(e)>2||Go(ct)>3?"":" "}function G9(e,t){for(;--t&&un()&&!(ct<48||ct>102||ct>57&&ct<65||ct>70&&ct<97););return il(e,Kc()+(t<6&&Jn()==32&&un()==32))}function wh(e){for(;un();)switch(ct){case e:return Qt;case 34:case 39:e!==34&&e!==39&&wh(ct);break;case 40:e===41&&wh(e);break;case 92:un();break}return Qt}function U9(e,t){for(;un()&&e+ct!==57;)if(e+ct===84&&Jn()===47)break;return"/*"+il(t,Qt-1)+"*"+Vu(e===47?e:un())}function I9(e){for(;!Go(Jn());)un();return il(e,Qt)}function F9(e){return Jv(Xc("",null,null,null,[""],e=Zv(e),0,[0],e))}function Xc(e,t,a,i,o,l,u,f,p){for(var m=0,g=0,x=u,y=0,v=0,S=0,k=1,A=1,j=1,R=0,C="",_=o,M=l,D=i,N=C;A;)switch(S=R,R=un()){case 40:if(S!=108&&At(N,x-1)==58){vh(N+=Le(Yc(R),"&","&\f"),"&\f")!=-1&&(j=-1);break}case 34:case 39:case 91:N+=Yc(R);break;case 9:case 10:case 13:case 32:N+=H9(S);break;case 92:N+=G9(Kc()-1,7);continue;case 47:switch(Jn()){case 42:case 47:Ec(q9(U9(un(),Kc()),t,a),p);break;default:N+="/"}break;case 123*k:f[m++]=Xn(N)*j;case 125*k:case 59:case 0:switch(R){case 0:case 125:A=0;case 59+g:j==-1&&(N=Le(N,/\f/g,"")),v>0&&Xn(N)-x&&Ec(v>32?Ob(N+";",i,a,x-1):Ob(Le(N," ","")+";",i,a,x-2),p);break;case 59:N+=";";default:if(Ec(D=Lb(N,t,a,m,g,o,f,C,_=[],M=[],x),l),R===123)if(g===0)Xc(N,t,D,D,_,l,x,f,M);else switch(y===99&&At(N,3)===110?100:y){case 100:case 108:case 109:case 115:Xc(e,D,D,i&&Ec(Lb(e,D,D,0,0,o,f,C,o,_=[],x),M),o,M,x,f,i?_:M);break;default:Xc(N,D,D,D,[""],M,0,f,M)}}m=g=v=0,k=j=1,C=N="",x=u;break;case 58:x=1+Xn(N),v=S;default:if(k<1){if(R==123)--k;else if(R==125&&k++==0&&$9()==125)continue}switch(N+=Vu(R),R*k){case 38:j=g>0?1:(N+="\f",-1);break;case 44:f[m++]=(Xn(N)-1)*j,j=1;break;case 64:Jn()===45&&(N+=Yc(un())),y=Jn(),g=x=Xn(C=N+=I9(Kc())),R++;break;case 45:S===45&&Xn(N)==2&&(k=0)}}return l}function Lb(e,t,a,i,o,l,u,f,p,m,g){for(var x=o-1,y=o===0?l:[""],v=Em(y),S=0,k=0,A=0;S<i;++S)for(var j=0,R=Ho(e,x+1,x=D9(k=u[S])),C=e;j<v;++j)(C=Wv(k>0?y[j]+" "+R:Le(R,/&\f/g,y[j])))&&(p[A++]=C);return Bu(e,t,a,o===0?km:f,p,m,g)}function q9(e,t,a){return Bu(e,t,a,Yv,Vu(_9()),Ho(e,2,-2),0)}function Ob(e,t,a,i){return Bu(e,t,a,jm,Ho(e,0,i),Ho(e,i+1,-1),i)}function qr(e,t){for(var a="",i=Em(e),o=0;o<i;o++)a+=t(e[o],o,e,t)||"";return a}function K9(e,t,a,i){switch(e.type){case O9:if(e.children.length)break;case L9:case jm:return e.return=e.return||e.value;case Yv:return"";case Xv:return e.return=e.value+"{"+qr(e.children,i)+"}";case km:e.value=e.props.join(",")}return Xn(a=qr(e.children,i))?e.return=e.value+"{"+a+"}":""}function Y9(e){var t=Em(e);return function(a,i,o,l){for(var u="",f=0;f<t;f++)u+=e[f](a,i,o,l)||"";return u}}function X9(e){return function(t){t.root||(t=t.return)&&e(t)}}function W9(e){var t=Object.create(null);return function(a){return t[a]===void 0&&(t[a]=e(a)),t[a]}}var Q9=function(t,a,i){for(var o=0,l=0;o=l,l=Jn(),o===38&&l===12&&(a[i]=1),!Go(l);)un();return il(t,Qt)},Z9=function(t,a){var i=-1,o=44;do switch(Go(o)){case 0:o===38&&Jn()===12&&(a[i]=1),t[i]+=Q9(Qt-1,a,i);break;case 2:t[i]+=Yc(o);break;case 4:if(o===44){t[++i]=Jn()===58?"&\f":"",a[i]=t[i].length;break}default:t[i]+=Vu(o)}while(o=un());return t},J9=function(t,a){return Jv(Z9(Zv(t),a))},Db=new WeakMap,eT=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var a=t.value,i=t.parent,o=t.column===i.column&&t.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(t.props.length===1&&a.charCodeAt(0)!==58&&!Db.get(i))&&!o){Db.set(t,!0);for(var l=[],u=J9(a,l),f=i.props,p=0,m=0;p<u.length;p++)for(var g=0;g<f.length;g++,m++)t.props[m]=l[p]?u[p].replace(/&\f/g,f[g]):f[g]+" "+u[p]}}},tT=function(t){if(t.type==="decl"){var a=t.value;a.charCodeAt(0)===108&&a.charCodeAt(2)===98&&(t.return="",t.value="")}};function e5(e,t){switch(V9(e,t)){case 5103:return Re+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Re+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Re+e+uu+e+Dt+e+e;case 6828:case 4268:return Re+e+Dt+e+e;case 6165:return Re+e+Dt+"flex-"+e+e;case 5187:return Re+e+Le(e,/(\w+).+(:[^]+)/,Re+"box-$1$2"+Dt+"flex-$1$2")+e;case 5443:return Re+e+Dt+"flex-item-"+Le(e,/flex-|-self/,"")+e;case 4675:return Re+e+Dt+"flex-line-pack"+Le(e,/align-content|flex-|-self/,"")+e;case 5548:return Re+e+Dt+Le(e,"shrink","negative")+e;case 5292:return Re+e+Dt+Le(e,"basis","preferred-size")+e;case 6060:return Re+"box-"+Le(e,"-grow","")+Re+e+Dt+Le(e,"grow","positive")+e;case 4554:return Re+Le(e,/([^-])(transform)/g,"$1"+Re+"$2")+e;case 6187:return Le(Le(Le(e,/(zoom-|grab)/,Re+"$1"),/(image-set)/,Re+"$1"),e,"")+e;case 5495:case 3959:return Le(e,/(image-set\([^]*)/,Re+"$1$`$1");case 4968:return Le(Le(e,/(.+:)(flex-)?(.*)/,Re+"box-pack:$3"+Dt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Re+e+e;case 4095:case 3583:case 4068:case 2532:return Le(e,/(.+)-inline(.+)/,Re+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xn(e)-1-t>6)switch(At(e,t+1)){case 109:if(At(e,t+4)!==45)break;case 102:return Le(e,/(.+:)(.+)-([^]+)/,"$1"+Re+"$2-$3$1"+uu+(At(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~vh(e,"stretch")?e5(Le(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(At(e,t+1)!==115)break;case 6444:switch(At(e,Xn(e)-3-(~vh(e,"!important")&&10))){case 107:return Le(e,":",":"+Re)+e;case 101:return Le(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Re+(At(e,14)===45?"inline-":"")+"box$3$1"+Re+"$2$3$1"+Dt+"$2box$3")+e}break;case 5936:switch(At(e,t+11)){case 114:return Re+e+Dt+Le(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Re+e+Dt+Le(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Re+e+Dt+Le(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Re+e+Dt+e+e}return e}var nT=function(t,a,i,o){if(t.length>-1&&!t.return)switch(t.type){case jm:t.return=e5(t.value,t.length);break;case Xv:return qr([mo(t,{value:Le(t.value,"@","@"+Re)})],o);case km:if(t.length)return B9(t.props,function(l){switch(N9(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return qr([mo(t,{props:[Le(l,/:(read-\w+)/,":"+uu+"$1")]})],o);case"::placeholder":return qr([mo(t,{props:[Le(l,/:(plac\w+)/,":"+Re+"input-$1")]}),mo(t,{props:[Le(l,/:(plac\w+)/,":"+uu+"$1")]}),mo(t,{props:[Le(l,/:(plac\w+)/,Dt+"input-$1")]})],o)}return""})}},aT=[nT],iT=function(t){var a=t.key;if(a==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(k){var A=k.getAttribute("data-emotion");A.indexOf(" ")!==-1&&(document.head.appendChild(k),k.setAttribute("data-s",""))})}var o=t.stylisPlugins||aT,l={},u,f=[];u=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+a+' "]'),function(k){for(var A=k.getAttribute("data-emotion").split(" "),j=1;j<A.length;j++)l[A[j]]=!0;f.push(k)});var p,m=[eT,tT];{var g,x=[K9,X9(function(k){g.insert(k)})],y=Y9(m.concat(o,x)),v=function(A){return qr(F9(A),y)};p=function(A,j,R,C){g=R,v(A?A+"{"+j.styles+"}":j.styles),C&&(S.inserted[j.name]=!0)}}var S={key:a,sheet:new R9({key:a,container:u,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:p};return S.sheet.hydrate(f),S},kp={exports:{}},De={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pb;function rT(){if(Pb)return De;Pb=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,a=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,f=e?Symbol.for("react.context"):60110,p=e?Symbol.for("react.async_mode"):60111,m=e?Symbol.for("react.concurrent_mode"):60111,g=e?Symbol.for("react.forward_ref"):60112,x=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,v=e?Symbol.for("react.memo"):60115,S=e?Symbol.for("react.lazy"):60116,k=e?Symbol.for("react.block"):60121,A=e?Symbol.for("react.fundamental"):60117,j=e?Symbol.for("react.responder"):60118,R=e?Symbol.for("react.scope"):60119;function C(M){if(typeof M=="object"&&M!==null){var D=M.$$typeof;switch(D){case t:switch(M=M.type,M){case p:case m:case i:case l:case o:case x:return M;default:switch(M=M&&M.$$typeof,M){case f:case g:case S:case v:case u:return M;default:return D}}case a:return D}}}function _(M){return C(M)===m}return De.AsyncMode=p,De.ConcurrentMode=m,De.ContextConsumer=f,De.ContextProvider=u,De.Element=t,De.ForwardRef=g,De.Fragment=i,De.Lazy=S,De.Memo=v,De.Portal=a,De.Profiler=l,De.StrictMode=o,De.Suspense=x,De.isAsyncMode=function(M){return _(M)||C(M)===p},De.isConcurrentMode=_,De.isContextConsumer=function(M){return C(M)===f},De.isContextProvider=function(M){return C(M)===u},De.isElement=function(M){return typeof M=="object"&&M!==null&&M.$$typeof===t},De.isForwardRef=function(M){return C(M)===g},De.isFragment=function(M){return C(M)===i},De.isLazy=function(M){return C(M)===S},De.isMemo=function(M){return C(M)===v},De.isPortal=function(M){return C(M)===a},De.isProfiler=function(M){return C(M)===l},De.isStrictMode=function(M){return C(M)===o},De.isSuspense=function(M){return C(M)===x},De.isValidElementType=function(M){return typeof M=="string"||typeof M=="function"||M===i||M===m||M===l||M===o||M===x||M===y||typeof M=="object"&&M!==null&&(M.$$typeof===S||M.$$typeof===v||M.$$typeof===u||M.$$typeof===f||M.$$typeof===g||M.$$typeof===A||M.$$typeof===j||M.$$typeof===R||M.$$typeof===k)},De.typeOf=C,De}var Vb;function sT(){return Vb||(Vb=1,kp.exports=rT()),kp.exports}var jp,Nb;function oT(){if(Nb)return jp;Nb=1;var e=sT(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[e.ForwardRef]=i,l[e.Memo]=o;function u(S){return e.isMemo(S)?o:l[S.$$typeof]||t}var f=Object.defineProperty,p=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,g=Object.getOwnPropertyDescriptor,x=Object.getPrototypeOf,y=Object.prototype;function v(S,k,A){if(typeof k!="string"){if(y){var j=x(k);j&&j!==y&&v(S,j,A)}var R=p(k);m&&(R=R.concat(m(k)));for(var C=u(S),_=u(k),M=0;M<R.length;++M){var D=R[M];if(!a[D]&&!(A&&A[D])&&!(_&&_[D])&&!(C&&C[D])){var N=g(k,D);try{f(S,D,N)}catch{}}}}return S}return jp=v,jp}oT();var lT=!0;function cT(e,t,a){var i="";return a.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):o&&(i+=o+" ")}),i}var t5=function(t,a,i){var o=t.key+"-"+a.name;(i===!1||lT===!1)&&t.registered[o]===void 0&&(t.registered[o]=a.styles)},n5=function(t,a,i){t5(t,a,i);var o=t.key+"-"+a.name;if(t.inserted[a.name]===void 0){var l=a;do t.insert(a===l?"."+o:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function uT(e){for(var t=0,a,i=0,o=e.length;o>=4;++i,o-=4)a=e.charCodeAt(i)&255|(e.charCodeAt(++i)&255)<<8|(e.charCodeAt(++i)&255)<<16|(e.charCodeAt(++i)&255)<<24,a=(a&65535)*1540483477+((a>>>16)*59797<<16),a^=a>>>24,t=(a&65535)*1540483477+((a>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(i+2)&255)<<16;case 2:t^=(e.charCodeAt(i+1)&255)<<8;case 1:t^=e.charCodeAt(i)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var dT={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},fT=/[A-Z]|^ms/g,pT=/_EMO_([^_]+?)_([^]*?)_EMO_/g,a5=function(t){return t.charCodeAt(1)===45},Bb=function(t){return t!=null&&typeof t!="boolean"},Ep=W9(function(e){return a5(e)?e:e.replace(fT,"-$&").toLowerCase()}),_b=function(t,a){switch(t){case"animation":case"animationName":if(typeof a=="string")return a.replace(pT,function(i,o,l){return Wn={name:o,styles:l,next:Wn},o})}return dT[t]!==1&&!a5(t)&&typeof a=="number"&&a!==0?a+"px":a};function Uo(e,t,a){if(a==null)return"";var i=a;if(i.__emotion_styles!==void 0)return i;switch(typeof a){case"boolean":return"";case"object":{var o=a;if(o.anim===1)return Wn={name:o.name,styles:o.styles,next:Wn},o.name;var l=a;if(l.styles!==void 0){var u=l.next;if(u!==void 0)for(;u!==void 0;)Wn={name:u.name,styles:u.styles,next:Wn},u=u.next;var f=l.styles+";";return f}return hT(e,t,a)}case"function":{if(e!==void 0){var p=Wn,m=a(e);return Wn=p,Uo(e,t,m)}break}}var g=a;return g}function hT(e,t,a){var i="";if(Array.isArray(a))for(var o=0;o<a.length;o++)i+=Uo(e,t,a[o])+";";else for(var l in a){var u=a[l];if(typeof u!="object"){var f=u;Bb(f)&&(i+=Ep(l)+":"+_b(l,f)+";")}else if(Array.isArray(u)&&typeof u[0]=="string"&&t==null)for(var p=0;p<u.length;p++)Bb(u[p])&&(i+=Ep(l)+":"+_b(l,u[p])+";");else{var m=Uo(e,t,u);switch(l){case"animation":case"animationName":{i+=Ep(l)+":"+m+";";break}default:i+=l+"{"+m+"}"}}}return i}var $b=/label:\s*([^\s;{]+)\s*(;|$)/g,Wn;function Cm(e,t,a){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,o="";Wn=void 0;var l=e[0];if(l==null||l.raw===void 0)i=!1,o+=Uo(a,t,l);else{var u=l;o+=u[0]}for(var f=1;f<e.length;f++)if(o+=Uo(a,t,e[f]),i){var p=l;o+=p[f]}$b.lastIndex=0;for(var m="",g;(g=$b.exec(o))!==null;)m+="-"+g[1];var x=uT(o)+m;return{name:x,styles:o,next:Wn}}var mT=function(t){return t()},i5=kb.useInsertionEffect?kb.useInsertionEffect:!1,gT=i5||mT,Hb=i5||E.useLayoutEffect,r5=E.createContext(typeof HTMLElement<"u"?iT({key:"css"}):null);r5.Provider;var s5=function(t){return E.forwardRef(function(a,i){var o=E.useContext(r5);return t(a,o,i)})},o5=E.createContext({}),Am={}.hasOwnProperty,Sh="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",bT=function(t,a){var i={};for(var o in a)Am.call(a,o)&&(i[o]=a[o]);return i[Sh]=t,i},xT=function(t){var a=t.cache,i=t.serialized,o=t.isStringTag;return t5(a,i,o),gT(function(){return n5(a,i,o)}),null},yT=s5(function(e,t,a){var i=e.css;typeof i=="string"&&t.registered[i]!==void 0&&(i=t.registered[i]);var o=e[Sh],l=[i],u="";typeof e.className=="string"?u=cT(t.registered,l,e.className):e.className!=null&&(u=e.className+" ");var f=Cm(l,void 0,E.useContext(o5));u+=t.key+"-"+f.name;var p={};for(var m in e)Am.call(e,m)&&m!=="css"&&m!==Sh&&(p[m]=e[m]);return p.className=u,a&&(p.ref=a),E.createElement(E.Fragment,null,E.createElement(xT,{cache:t,serialized:f,isStringTag:typeof o=="string"}),E.createElement(o,p))}),vT=yT,Gb=function(t,a){var i=arguments;if(a==null||!Am.call(a,"css"))return E.createElement.apply(void 0,i);var o=i.length,l=new Array(o);l[0]=vT,l[1]=bT(t,a);for(var u=2;u<o;u++)l[u]=i[u];return E.createElement.apply(null,l)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(Gb||(Gb={}));var wT=s5(function(e,t){var a=e.styles,i=Cm([a],void 0,E.useContext(o5)),o=E.useRef();return Hb(function(){var l=t.key+"-global",u=new t.sheet.constructor({key:l,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),f=!1,p=document.querySelector('style[data-emotion="'+l+" "+i.name+'"]');return t.sheet.tags.length&&(u.before=t.sheet.tags[0]),p!==null&&(f=!0,p.setAttribute("data-emotion",l),u.hydrate([p])),o.current=[u,f],function(){u.flush()}},[t]),Hb(function(){var l=o.current,u=l[0],f=l[1];if(f){l[1]=!1;return}if(i.next!==void 0&&n5(t,i.next,!0),u.tags.length){var p=u.tags[u.tags.length-1].nextElementSibling;u.before=p,u.flush()}t.insert("",i,u,!1)},[t,i.name]),null});function ST(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return Cm(t)}const TT="/assets/Geist-Regular-BCrLS6HJ.ttf",kT="/assets/Geist-Medium-C6X8vKEc.ttf",jT="/assets/BebasNeue-Regular-D2CONTwO.ttf",ET="/assets/Inter_24pt-Regular-BPx6xqqj.ttf",CT=ST`
  /* ========== FONTS ========== */
  @font-face {
    font-family: "Geist";
    src: url(${TT}) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Geist";
    src: url(${kT}) format("truetype");
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
    src: url(${ET}) format("truetype");
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
`,Mm=E.createContext({});function cs(e){const t=E.useRef(null);return t.current===null&&(t.current=e()),t.current}const zm=typeof window<"u",_u=zm?E.useLayoutEffect:E.useEffect,$u=E.createContext(null);function Rm(e,t){e.indexOf(t)===-1&&e.push(t)}function Lm(e,t){const a=e.indexOf(t);a>-1&&e.splice(a,1)}const ia=(e,t,a)=>a>t?t:a<e?e:a;let Io=()=>{};const Ma={},l5=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function c5(e){return typeof e=="object"&&e!==null}const u5=e=>/^0[^.\s]+$/u.test(e);function Om(e){let t;return()=>(t===void 0&&(t=e()),t)}const Xt=e=>e,AT=(e,t)=>a=>t(e(a)),rl=(...e)=>e.reduce(AT),Wr=(e,t,a)=>{const i=t-e;return i===0?1:(a-e)/i};class Dm{constructor(){this.subscriptions=[]}add(t){return Rm(this.subscriptions,t),()=>Lm(this.subscriptions,t)}notify(t,a,i){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,a,i);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(t,a,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ea=e=>e*1e3,ta=e=>e/1e3;function Pm(e,t){return t?e*(1e3/t):0}const d5=(e,t,a)=>(((1-3*a+3*t)*e+(3*a-6*t))*e+3*t)*e,MT=1e-7,zT=12;function RT(e,t,a,i,o){let l,u,f=0;do u=t+(a-t)/2,l=d5(u,i,o)-e,l>0?a=u:t=u;while(Math.abs(l)>MT&&++f<zT);return u}function sl(e,t,a,i){if(e===t&&a===i)return Xt;const o=l=>RT(l,0,1,e,a);return l=>l===0||l===1?l:d5(o(l),t,i)}const f5=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,p5=e=>t=>1-e(1-t),Hu=sl(.33,1.53,.69,.99),Vm=p5(Hu),h5=f5(Vm),m5=e=>(e*=2)<1?.5*Vm(e):.5*(2-Math.pow(2,-10*(e-1))),Nm=e=>1-Math.sin(Math.acos(e)),g5=p5(Nm),b5=f5(Nm),LT=sl(.42,0,1,1),dn=sl(0,0,.58,1),Bm=sl(.42,0,.58,1),OT=e=>Array.isArray(e)&&typeof e[0]!="number",x5=e=>Array.isArray(e)&&typeof e[0]=="number",DT={linear:Xt,easeIn:LT,easeInOut:Bm,easeOut:dn,circIn:Nm,circInOut:b5,circOut:g5,backIn:Vm,backInOut:h5,backOut:Hu,anticipate:m5},PT=e=>typeof e=="string",Ub=e=>{if(x5(e)){Io(e.length===4);const[t,a,i,o]=e;return sl(t,a,i,o)}else if(PT(e))return DT[e];return e},Cc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function VT(e,t){let a=new Set,i=new Set,o=!1,l=!1;const u=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function p(g){u.has(g)&&(m.schedule(g),e()),g(f)}const m={schedule:(g,x=!1,y=!1)=>{const S=y&&o?a:i;return x&&u.add(g),S.has(g)||S.add(g),g},cancel:g=>{i.delete(g),u.delete(g)},process:g=>{if(f=g,o){l=!0;return}o=!0,[a,i]=[i,a],a.forEach(p),a.clear(),o=!1,l&&(l=!1,m.process(g))}};return m}const NT=40;function y5(e,t){let a=!1,i=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>a=!0,u=Cc.reduce((C,_)=>(C[_]=VT(l),C),{}),{setup:f,read:p,resolveKeyframes:m,preUpdate:g,update:x,preRender:y,render:v,postRender:S}=u,k=()=>{const C=Ma.useManualTiming?o.timestamp:performance.now();a=!1,Ma.useManualTiming||(o.delta=i?1e3/60:Math.max(Math.min(C-o.timestamp,NT),1)),o.timestamp=C,o.isProcessing=!0,f.process(o),p.process(o),m.process(o),g.process(o),x.process(o),y.process(o),v.process(o),S.process(o),o.isProcessing=!1,a&&t&&(i=!1,e(k))},A=()=>{a=!0,i=!0,o.isProcessing||e(k)};return{schedule:Cc.reduce((C,_)=>{const M=u[_];return C[_]=(D,N=!1,V=!1)=>(a||A(),M.schedule(D,N,V)),C},{}),cancel:C=>{for(let _=0;_<Cc.length;_++)u[Cc[_]].cancel(C)},state:o,steps:u}}const{schedule:Be,cancel:Vn,state:St,steps:Cp}=y5(typeof requestAnimationFrame<"u"?requestAnimationFrame:Xt,!0);let Wc;function BT(){Wc=void 0}const Kt={now:()=>(Wc===void 0&&Kt.set(St.isProcessing||Ma.useManualTiming?St.timestamp:performance.now()),Wc),set:e=>{Wc=e,queueMicrotask(BT)}},v5=e=>t=>typeof t=="string"&&t.startsWith(e),_m=v5("--"),_T=v5("var(--"),$m=e=>_T(e)?$T.test(e.split("/*")[0].trim()):!1,$T=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,us={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Fo={...us,transform:e=>ia(0,1,e)},Ac={...us,default:1},Mo=e=>Math.round(e*1e5)/1e5,Hm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function HT(e){return e==null}const GT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Gm=(e,t)=>a=>!!(typeof a=="string"&&GT.test(a)&&a.startsWith(e)||t&&!HT(a)&&Object.prototype.hasOwnProperty.call(a,t)),w5=(e,t,a)=>i=>{if(typeof i!="string")return i;const[o,l,u,f]=i.match(Hm);return{[e]:parseFloat(o),[t]:parseFloat(l),[a]:parseFloat(u),alpha:f!==void 0?parseFloat(f):1}},UT=e=>ia(0,255,e),Ap={...us,transform:e=>Math.round(UT(e))},Di={test:Gm("rgb","red"),parse:w5("red","green","blue"),transform:({red:e,green:t,blue:a,alpha:i=1})=>"rgba("+Ap.transform(e)+", "+Ap.transform(t)+", "+Ap.transform(a)+", "+Mo(Fo.transform(i))+")"};function IT(e){let t="",a="",i="",o="";return e.length>5?(t=e.substring(1,3),a=e.substring(3,5),i=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),a=e.substring(2,3),i=e.substring(3,4),o=e.substring(4,5),t+=t,a+=a,i+=i,o+=o),{red:parseInt(t,16),green:parseInt(a,16),blue:parseInt(i,16),alpha:o?parseInt(o,16)/255:1}}const Th={test:Gm("#"),parse:IT,transform:Di.transform},ol=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),ti=ol("deg"),na=ol("%"),me=ol("px"),FT=ol("vh"),qT=ol("vw"),Ib={...na,parse:e=>na.parse(e)/100,transform:e=>na.transform(e*100)},Br={test:Gm("hsl","hue"),parse:w5("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:a,alpha:i=1})=>"hsla("+Math.round(e)+", "+na.transform(Mo(t))+", "+na.transform(Mo(a))+", "+Mo(Fo.transform(i))+")"},lt={test:e=>Di.test(e)||Th.test(e)||Br.test(e),parse:e=>Di.test(e)?Di.parse(e):Br.test(e)?Br.parse(e):Th.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Di.transform(e):Br.transform(e),getAnimatableNone:e=>{const t=lt.parse(e);return t.alpha=0,lt.transform(t)}},KT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function YT(e){var t,a;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Hm))==null?void 0:t.length)||0)+(((a=e.match(KT))==null?void 0:a.length)||0)>0}const S5="number",T5="color",XT="var",WT="var(",Fb="${}",QT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function qo(e){const t=e.toString(),a=[],i={color:[],number:[],var:[]},o=[];let l=0;const f=t.replace(QT,p=>(lt.test(p)?(i.color.push(l),o.push(T5),a.push(lt.parse(p))):p.startsWith(WT)?(i.var.push(l),o.push(XT),a.push(p)):(i.number.push(l),o.push(S5),a.push(parseFloat(p))),++l,Fb)).split(Fb);return{values:a,split:f,indexes:i,types:o}}function k5(e){return qo(e).values}function j5(e){const{split:t,types:a}=qo(e),i=t.length;return o=>{let l="";for(let u=0;u<i;u++)if(l+=t[u],o[u]!==void 0){const f=a[u];f===S5?l+=Mo(o[u]):f===T5?l+=lt.transform(o[u]):l+=o[u]}return l}}const ZT=e=>typeof e=="number"?0:lt.test(e)?lt.getAnimatableNone(e):e;function JT(e){const t=k5(e);return j5(e)(t.map(ZT))}const si={test:YT,parse:k5,createTransformer:j5,getAnimatableNone:JT};function Mp(e,t,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?e+(t-e)*6*a:a<1/2?t:a<2/3?e+(t-e)*(2/3-a)*6:e}function ek({hue:e,saturation:t,lightness:a,alpha:i}){e/=360,t/=100,a/=100;let o=0,l=0,u=0;if(!t)o=l=u=a;else{const f=a<.5?a*(1+t):a+t-a*t,p=2*a-f;o=Mp(p,f,e+1/3),l=Mp(p,f,e),u=Mp(p,f,e-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:i}}function du(e,t){return a=>a>0?t:e}const Je=(e,t,a)=>e+(t-e)*a,zp=(e,t,a)=>{const i=e*e,o=a*(t*t-i)+i;return o<0?0:Math.sqrt(o)},tk=[Th,Di,Br],nk=e=>tk.find(t=>t.test(e));function qb(e){const t=nk(e);if(!t)return!1;let a=t.parse(e);return t===Br&&(a=ek(a)),a}const Kb=(e,t)=>{const a=qb(e),i=qb(t);if(!a||!i)return du(e,t);const o={...a};return l=>(o.red=zp(a.red,i.red,l),o.green=zp(a.green,i.green,l),o.blue=zp(a.blue,i.blue,l),o.alpha=Je(a.alpha,i.alpha,l),Di.transform(o))},kh=new Set(["none","hidden"]);function ak(e,t){return kh.has(e)?a=>a<=0?e:t:a=>a>=1?t:e}function ik(e,t){return a=>Je(e,t,a)}function Um(e){return typeof e=="number"?ik:typeof e=="string"?$m(e)?du:lt.test(e)?Kb:ok:Array.isArray(e)?E5:typeof e=="object"?lt.test(e)?Kb:rk:du}function E5(e,t){const a=[...e],i=a.length,o=e.map((l,u)=>Um(l)(l,t[u]));return l=>{for(let u=0;u<i;u++)a[u]=o[u](l);return a}}function rk(e,t){const a={...e,...t},i={};for(const o in a)e[o]!==void 0&&t[o]!==void 0&&(i[o]=Um(e[o])(e[o],t[o]));return o=>{for(const l in i)a[l]=i[l](o);return a}}function sk(e,t){const a=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const l=t.types[o],u=e.indexes[l][i[l]],f=e.values[u]??0;a[o]=f,i[l]++}return a}const ok=(e,t)=>{const a=si.createTransformer(t),i=qo(e),o=qo(t);return i.indexes.var.length===o.indexes.var.length&&i.indexes.color.length===o.indexes.color.length&&i.indexes.number.length>=o.indexes.number.length?kh.has(e)&&!o.values.length||kh.has(t)&&!i.values.length?ak(e,t):rl(E5(sk(i,o),o.values),a):du(e,t)};function C5(e,t,a){return typeof e=="number"&&typeof t=="number"&&typeof a=="number"?Je(e,t,a):Um(e)(e,t)}const lk=e=>{const t=({timestamp:a})=>e(a);return{start:(a=!0)=>Be.update(t,a),stop:()=>Vn(t),now:()=>St.isProcessing?St.timestamp:Kt.now()}},A5=(e,t,a=10)=>{let i="";const o=Math.max(Math.round(t/a),2);for(let l=0;l<o;l++)i+=Math.round(e(l/(o-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},fu=2e4;function Im(e){let t=0;const a=50;let i=e.next(t);for(;!i.done&&t<fu;)t+=a,i=e.next(t);return t>=fu?1/0:t}function ck(e,t=100,a){const i=a({...e,keyframes:[0,t]}),o=Math.min(Im(i),fu);return{type:"keyframes",ease:l=>i.next(o*l).value/t,duration:ta(o)}}const uk=5;function M5(e,t,a){const i=Math.max(t-uk,0);return Pm(a-e(i),t-i)}const nt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Rp=.001;function dk({duration:e=nt.duration,bounce:t=nt.bounce,velocity:a=nt.velocity,mass:i=nt.mass}){let o,l,u=1-t;u=ia(nt.minDamping,nt.maxDamping,u),e=ia(nt.minDuration,nt.maxDuration,ta(e)),u<1?(o=m=>{const g=m*u,x=g*e,y=g-a,v=jh(m,u),S=Math.exp(-x);return Rp-y/v*S},l=m=>{const x=m*u*e,y=x*a+a,v=Math.pow(u,2)*Math.pow(m,2)*e,S=Math.exp(-x),k=jh(Math.pow(m,2),u);return(-o(m)+Rp>0?-1:1)*((y-v)*S)/k}):(o=m=>{const g=Math.exp(-m*e),x=(m-a)*e+1;return-Rp+g*x},l=m=>{const g=Math.exp(-m*e),x=(a-m)*(e*e);return g*x});const f=5/e,p=pk(o,l,f);if(e=ea(e),isNaN(p))return{stiffness:nt.stiffness,damping:nt.damping,duration:e};{const m=Math.pow(p,2)*i;return{stiffness:m,damping:u*2*Math.sqrt(i*m),duration:e}}}const fk=12;function pk(e,t,a){let i=a;for(let o=1;o<fk;o++)i=i-e(i)/t(i);return i}function jh(e,t){return e*Math.sqrt(1-t*t)}const hk=["duration","bounce"],mk=["stiffness","damping","mass"];function Yb(e,t){return t.some(a=>e[a]!==void 0)}function gk(e){let t={velocity:nt.velocity,stiffness:nt.stiffness,damping:nt.damping,mass:nt.mass,isResolvedFromDuration:!1,...e};if(!Yb(e,mk)&&Yb(e,hk))if(e.visualDuration){const a=e.visualDuration,i=2*Math.PI/(a*1.2),o=i*i,l=2*ia(.05,1,1-(e.bounce||0))*Math.sqrt(o);t={...t,mass:nt.mass,stiffness:o,damping:l}}else{const a=dk(e);t={...t,...a,mass:nt.mass},t.isResolvedFromDuration=!0}return t}function pu(e=nt.visualDuration,t=nt.bounce){const a=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:i,restDelta:o}=a;const l=a.keyframes[0],u=a.keyframes[a.keyframes.length-1],f={done:!1,value:l},{stiffness:p,damping:m,mass:g,duration:x,velocity:y,isResolvedFromDuration:v}=gk({...a,velocity:-ta(a.velocity||0)}),S=y||0,k=m/(2*Math.sqrt(p*g)),A=u-l,j=ta(Math.sqrt(p/g)),R=Math.abs(A)<5;i||(i=R?nt.restSpeed.granular:nt.restSpeed.default),o||(o=R?nt.restDelta.granular:nt.restDelta.default);let C;if(k<1){const M=jh(j,k);C=D=>{const N=Math.exp(-k*j*D);return u-N*((S+k*j*A)/M*Math.sin(M*D)+A*Math.cos(M*D))}}else if(k===1)C=M=>u-Math.exp(-j*M)*(A+(S+j*A)*M);else{const M=j*Math.sqrt(k*k-1);C=D=>{const N=Math.exp(-k*j*D),V=Math.min(M*D,300);return u-N*((S+k*j*A)*Math.sinh(V)+M*A*Math.cosh(V))/M}}const _={calculatedDuration:v&&x||null,next:M=>{const D=C(M);if(v)f.done=M>=x;else{let N=M===0?S:0;k<1&&(N=M===0?ea(S):M5(C,M,D));const V=Math.abs(N)<=i,q=Math.abs(u-D)<=o;f.done=V&&q}return f.value=f.done?u:D,f},toString:()=>{const M=Math.min(Im(_),fu),D=A5(N=>_.next(M*N).value,M,30);return M+"ms "+D},toTransition:()=>{}};return _}pu.applyToOptions=e=>{const t=ck(e,100,pu);return e.ease=t.ease,e.duration=ea(t.duration),e.type="keyframes",e};function Eh({keyframes:e,velocity:t=0,power:a=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:f,max:p,restDelta:m=.5,restSpeed:g}){const x=e[0],y={done:!1,value:x},v=V=>f!==void 0&&V<f||p!==void 0&&V>p,S=V=>f===void 0?p:p===void 0||Math.abs(f-V)<Math.abs(p-V)?f:p;let k=a*t;const A=x+k,j=u===void 0?A:u(A);j!==A&&(k=j-x);const R=V=>-k*Math.exp(-V/i),C=V=>j+R(V),_=V=>{const q=R(V),W=C(V);y.done=Math.abs(q)<=m,y.value=y.done?j:W};let M,D;const N=V=>{v(y.value)&&(M=V,D=pu({keyframes:[y.value,S(y.value)],velocity:M5(C,V,y.value),damping:o,stiffness:l,restDelta:m,restSpeed:g}))};return N(0),{calculatedDuration:null,next:V=>{let q=!1;return!D&&M===void 0&&(q=!0,_(V),N(V)),M!==void 0&&V>=M?D.next(V-M):(!q&&_(V),y)}}}function bk(e,t,a){const i=[],o=a||Ma.mix||C5,l=e.length-1;for(let u=0;u<l;u++){let f=o(e[u],e[u+1]);if(t){const p=Array.isArray(t)?t[u]||Xt:t;f=rl(p,f)}i.push(f)}return i}function Fm(e,t,{clamp:a=!0,ease:i,mixer:o}={}){const l=e.length;if(Io(l===t.length),l===1)return()=>t[0];if(l===2&&t[0]===t[1])return()=>t[1];const u=e[0]===e[1];e[0]>e[l-1]&&(e=[...e].reverse(),t=[...t].reverse());const f=bk(t,i,o),p=f.length,m=g=>{if(u&&g<e[0])return t[0];let x=0;if(p>1)for(;x<e.length-2&&!(g<e[x+1]);x++);const y=Wr(e[x],e[x+1],g);return f[x](y)};return a?g=>m(ia(e[0],e[l-1],g)):m}function xk(e,t){const a=e[e.length-1];for(let i=1;i<=t;i++){const o=Wr(0,t,i);e.push(Je(a,1,o))}}function z5(e){const t=[0];return xk(t,e.length-1),t}function yk(e,t){return e.map(a=>a*t)}function vk(e,t){return e.map(()=>t||Bm).splice(0,e.length-1)}function zo({duration:e=300,keyframes:t,times:a,ease:i="easeInOut"}){const o=OT(i)?i.map(Ub):Ub(i),l={done:!1,value:t[0]},u=yk(a&&a.length===t.length?a:z5(t),e),f=Fm(u,t,{ease:Array.isArray(o)?o:vk(t,o)});return{calculatedDuration:e,next:p=>(l.value=f(p),l.done=p>=e,l)}}const wk=e=>e!==null;function qm(e,{repeat:t,repeatType:a="loop"},i,o=1){const l=e.filter(wk),f=o<0||t&&a!=="loop"&&t%2===1?0:l.length-1;return!f||i===void 0?l[f]:i}const Sk={decay:Eh,inertia:Eh,tween:zo,keyframes:zo,spring:pu};function R5(e){typeof e.type=="string"&&(e.type=Sk[e.type])}class Km{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,a){return this.finished.then(t,a)}}const Tk=e=>e/100;class Ym extends Km{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var i,o;const{motionValue:a}=this.options;a&&a.updatedAt!==Kt.now()&&this.tick(Kt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(i=this.options).onStop)==null||o.call(i))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;R5(t);const{type:a=zo,repeat:i=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=t;let{keyframes:f}=t;const p=a||zo;p!==zo&&typeof f[0]!="number"&&(this.mixKeyframes=rl(Tk,C5(f[0],f[1])),f=[0,100]);const m=p({...t,keyframes:f});l==="mirror"&&(this.mirroredGenerator=p({...t,keyframes:[...f].reverse(),velocity:-u})),m.calculatedDuration===null&&(m.calculatedDuration=Im(m));const{calculatedDuration:g}=m;this.calculatedDuration=g,this.resolvedDuration=g+o,this.totalDuration=this.resolvedDuration*(i+1)-o,this.generator=m}updateTime(t){const a=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=a}tick(t,a=!1){const{generator:i,totalDuration:o,mixKeyframes:l,mirroredGenerator:u,resolvedDuration:f,calculatedDuration:p}=this;if(this.startTime===null)return i.next(0);const{delay:m=0,keyframes:g,repeat:x,repeatType:y,repeatDelay:v,type:S,onUpdate:k,finalKeyframe:A}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-o/this.speed,this.startTime)),a?this.currentTime=t:this.updateTime(t);const j=this.currentTime-m*(this.playbackSpeed>=0?1:-1),R=this.playbackSpeed>=0?j<0:j>o;this.currentTime=Math.max(j,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let C=this.currentTime,_=i;if(x){const V=Math.min(this.currentTime,o)/f;let q=Math.floor(V),W=V%1;!W&&V>=1&&(W=1),W===1&&q--,q=Math.min(q,x+1),!!(q%2)&&(y==="reverse"?(W=1-W,v&&(W-=v/f)):y==="mirror"&&(_=u)),C=ia(0,1,W)*f}const M=R?{done:!1,value:g[0]}:_.next(C);l&&(M.value=l(M.value));let{done:D}=M;!R&&p!==null&&(D=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const N=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&D);return N&&S!==Eh&&(M.value=qm(g,this.options,A,this.speed)),k&&k(M.value),N&&this.finish(),M}then(t,a){return this.finished.then(t,a)}get duration(){return ta(this.calculatedDuration)}get time(){return ta(this.currentTime)}set time(t){var a;t=ea(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(a=this.driver)==null||a.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Kt.now());const a=this.playbackSpeed!==t;this.playbackSpeed=t,a&&(this.time=ta(this.currentTime))}play(){var o,l;if(this.isStopped)return;const{driver:t=lk,startTime:a}=this.options;this.driver||(this.driver=t(u=>this.tick(u))),(l=(o=this.options).onPlay)==null||l.call(o);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=a??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Kt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,a;this.notifyFinished(),this.teardown(),this.state="finished",(a=(t=this.options).onComplete)==null||a.call(t)}cancel(){var t,a;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(a=(t=this.options).onCancel)==null||a.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var a;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(a=this.driver)==null||a.stop(),t.observe(this)}}function kk(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const Pi=e=>e*180/Math.PI,Ch=e=>{const t=Pi(Math.atan2(e[1],e[0]));return Ah(t)},jk={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Ch,rotateZ:Ch,skewX:e=>Pi(Math.atan(e[1])),skewY:e=>Pi(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Ah=e=>(e=e%360,e<0&&(e+=360),e),Xb=Ch,Wb=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Qb=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Ek={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Wb,scaleY:Qb,scale:e=>(Wb(e)+Qb(e))/2,rotateX:e=>Ah(Pi(Math.atan2(e[6],e[5]))),rotateY:e=>Ah(Pi(Math.atan2(-e[2],e[0]))),rotateZ:Xb,rotate:Xb,skewX:e=>Pi(Math.atan(e[4])),skewY:e=>Pi(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Mh(e){return e.includes("scale")?1:0}function zh(e,t){if(!e||e==="none")return Mh(t);const a=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,o;if(a)i=Ek,o=a;else{const f=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=jk,o=f}if(!o)return Mh(t);const l=i[t],u=o[1].split(",").map(Ak);return typeof l=="function"?l(u):u[l]}const Ck=(e,t)=>{const{transform:a="none"}=getComputedStyle(e);return zh(a,t)};function Ak(e){return parseFloat(e.trim())}const ds=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],fs=new Set(ds),Zb=e=>e===us||e===me,Mk=new Set(["x","y","z"]),zk=ds.filter(e=>!Mk.has(e));function Rk(e){const t=[];return zk.forEach(a=>{const i=e.getValue(a);i!==void 0&&(t.push([a,i.get()]),i.set(a.startsWith("scale")?1:0))}),t}const Ni={width:({x:e},{paddingLeft:t="0",paddingRight:a="0"})=>e.max-e.min-parseFloat(t)-parseFloat(a),height:({y:e},{paddingTop:t="0",paddingBottom:a="0"})=>e.max-e.min-parseFloat(t)-parseFloat(a),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>zh(t,"x"),y:(e,{transform:t})=>zh(t,"y")};Ni.translateX=Ni.x;Ni.translateY=Ni.y;const Bi=new Set;let Rh=!1,Lh=!1,Oh=!1;function L5(){if(Lh){const e=Array.from(Bi).filter(i=>i.needsMeasurement),t=new Set(e.map(i=>i.element)),a=new Map;t.forEach(i=>{const o=Rk(i);o.length&&(a.set(i,o),i.render())}),e.forEach(i=>i.measureInitialState()),t.forEach(i=>{i.render();const o=a.get(i);o&&o.forEach(([l,u])=>{var f;(f=i.getValue(l))==null||f.set(u)})}),e.forEach(i=>i.measureEndState()),e.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Lh=!1,Rh=!1,Bi.forEach(e=>e.complete(Oh)),Bi.clear()}function O5(){Bi.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Lh=!0)})}function Lk(){Oh=!0,O5(),L5(),Oh=!1}class Xm{constructor(t,a,i,o,l,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=a,this.name=i,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(Bi.add(this),Rh||(Rh=!0,Be.read(O5),Be.resolveKeyframes(L5))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:a,element:i,motionValue:o}=this;if(t[0]===null){const l=o==null?void 0:o.get(),u=t[t.length-1];if(l!==void 0)t[0]=l;else if(i&&a){const f=i.readValue(a,u);f!=null&&(t[0]=f)}t[0]===void 0&&(t[0]=u),o&&l===void 0&&o.set(t[0])}kk(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),Bi.delete(this)}cancel(){this.state==="scheduled"&&(Bi.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Ok=e=>e.startsWith("--");function Dk(e,t,a){Ok(t)?e.style.setProperty(t,a):e.style[t]=a}const D5=Om(()=>window.ScrollTimeline!==void 0),Pk={};function Vk(e,t){const a=Om(e);return()=>Pk[t]??a()}const P5=Vk(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Eo=([e,t,a,i])=>`cubic-bezier(${e}, ${t}, ${a}, ${i})`,Jb={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Eo([0,.65,.55,1]),circOut:Eo([.55,0,1,.45]),backIn:Eo([.31,.01,.66,-.59]),backOut:Eo([.33,1.53,.69,.99])};function V5(e,t){if(e)return typeof e=="function"?P5()?A5(e,t):"ease-out":x5(e)?Eo(e):Array.isArray(e)?e.map(a=>V5(a,t)||Jb.easeOut):Jb[e]}function Nk(e,t,a,{delay:i=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:f="easeOut",times:p}={},m=void 0){const g={[t]:a};p&&(g.offset=p);const x=V5(f,o);Array.isArray(x)&&(g.easing=x);const y={delay:i,duration:o,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"};return m&&(y.pseudoElement=m),e.animate(g,y)}function N5(e){return typeof e=="function"&&"applyToOptions"in e}function Bk({type:e,...t}){return N5(e)&&P5()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class _k extends Km{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:a,name:i,keyframes:o,pseudoElement:l,allowFlatten:u=!1,finalKeyframe:f,onComplete:p}=t;this.isPseudoElement=!!l,this.allowFlatten=u,this.options=t,Io(typeof t.type!="string");const m=Bk(t);this.animation=Nk(a,i,o,m,l),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const g=qm(o,this.options,f,this.speed);this.updateMotionValue?this.updateMotionValue(g):Dk(a,i,g),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,a;(a=(t=this.animation).finish)==null||a.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,a;this.isPseudoElement||(a=(t=this.animation).commitStyles)==null||a.call(t)}get duration(){var a,i;const t=((i=(a=this.animation.effect)==null?void 0:a.getComputedTiming)==null?void 0:i.call(a).duration)||0;return ta(Number(t))}get time(){return ta(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=ea(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:a}){var i;return this.allowFlatten&&((i=this.animation.effect)==null||i.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&D5()?(this.animation.timeline=t,Xt):a(this)}}const B5={anticipate:m5,backInOut:h5,circInOut:b5};function $k(e){return e in B5}function Hk(e){typeof e.ease=="string"&&$k(e.ease)&&(e.ease=B5[e.ease])}const ex=10;class Gk extends _k{constructor(t){Hk(t),R5(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:a,onUpdate:i,onComplete:o,element:l,...u}=this.options;if(!a)return;if(t!==void 0){a.set(t);return}const f=new Ym({...u,autoplay:!1}),p=ea(this.finishedTime??this.time);a.setWithVelocity(f.sample(p-ex).value,f.sample(p).value,ex),f.stop()}}const tx=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(si.test(e)||e==="0")&&!e.startsWith("url("));function Uk(e){const t=e[0];if(e.length===1)return!0;for(let a=0;a<e.length;a++)if(e[a]!==t)return!0}function Ik(e,t,a,i){const o=e[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const l=e[e.length-1],u=tx(o,t),f=tx(l,t);return!u||!f?!1:Uk(e)||(a==="spring"||N5(a))&&i}function Dh(e){e.duration=0,e.type}const Fk=new Set(["opacity","clipPath","filter","transform"]),qk=Om(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Kk(e){var g;const{motionValue:t,name:a,repeatDelay:i,repeatType:o,damping:l,type:u}=e;if(!(((g=t==null?void 0:t.owner)==null?void 0:g.current)instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:m}=t.owner.getProps();return qk()&&a&&Fk.has(a)&&(a!=="transform"||!m)&&!p&&!i&&o!=="mirror"&&l!==0&&u!=="inertia"}const Yk=40;class Xk extends Km{constructor({autoplay:t=!0,delay:a=0,type:i="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",keyframes:f,name:p,motionValue:m,element:g,...x}){var S;super(),this.stop=()=>{var k,A;this._animation&&(this._animation.stop(),(k=this.stopTimeline)==null||k.call(this)),(A=this.keyframeResolver)==null||A.cancel()},this.createdAt=Kt.now();const y={autoplay:t,delay:a,type:i,repeat:o,repeatDelay:l,repeatType:u,name:p,motionValue:m,element:g,...x},v=(g==null?void 0:g.KeyframeResolver)||Xm;this.keyframeResolver=new v(f,(k,A,j)=>this.onKeyframesResolved(k,A,y,!j),p,m,g),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(t,a,i,o){this.keyframeResolver=void 0;const{name:l,type:u,velocity:f,delay:p,isHandoff:m,onUpdate:g}=i;this.resolvedAt=Kt.now(),Ik(t,l,u,f)||((Ma.instantAnimations||!p)&&(g==null||g(qm(t,i,a))),t[0]=t[t.length-1],Dh(i),i.repeat=0);const y={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>Yk?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:a,...i,keyframes:t},v=!m&&Kk(y)?new Gk({...y,element:y.motionValue.owner.current}):new Ym(y);v.finished.then(()=>this.notifyFinished()).catch(Xt),this.pendingTimeline&&(this.stopTimeline=v.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=v}get finished(){return this._animation?this.animation.finished:this._finished}then(t,a){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),Lk()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const Wk=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Qk(e){const t=Wk.exec(e);if(!t)return[,];const[,a,i,o]=t;return[`--${a??i}`,o]}function _5(e,t,a=1){const[i,o]=Qk(e);if(!i)return;const l=window.getComputedStyle(t).getPropertyValue(i);if(l){const u=l.trim();return l5(u)?parseFloat(u):u}return $m(o)?_5(o,t,a+1):o}function Wm(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const $5=new Set(["width","height","top","left","right","bottom",...ds]),Zk={test:e=>e==="auto",parse:e=>e},H5=e=>t=>t.test(e),G5=[us,me,na,ti,qT,FT,Zk],nx=e=>G5.find(H5(e));function Jk(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||u5(e):!0}const ej=new Set(["brightness","contrast","saturate","opacity"]);function tj(e){const[t,a]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[i]=a.match(Hm)||[];if(!i)return e;const o=a.replace(i,"");let l=ej.has(t)?1:0;return i!==a&&(l*=100),t+"("+l+o+")"}const nj=/\b([a-z-]*)\(.*?\)/gu,Ph={...si,getAnimatableNone:e=>{const t=e.match(nj);return t?t.map(tj).join(" "):e}},ax={...us,transform:Math.round},aj={rotate:ti,rotateX:ti,rotateY:ti,rotateZ:ti,scale:Ac,scaleX:Ac,scaleY:Ac,scaleZ:Ac,skew:ti,skewX:ti,skewY:ti,distance:me,translateX:me,translateY:me,translateZ:me,x:me,y:me,z:me,perspective:me,transformPerspective:me,opacity:Fo,originX:Ib,originY:Ib,originZ:me},Qm={borderWidth:me,borderTopWidth:me,borderRightWidth:me,borderBottomWidth:me,borderLeftWidth:me,borderRadius:me,radius:me,borderTopLeftRadius:me,borderTopRightRadius:me,borderBottomRightRadius:me,borderBottomLeftRadius:me,width:me,maxWidth:me,height:me,maxHeight:me,top:me,right:me,bottom:me,left:me,padding:me,paddingTop:me,paddingRight:me,paddingBottom:me,paddingLeft:me,margin:me,marginTop:me,marginRight:me,marginBottom:me,marginLeft:me,backgroundPositionX:me,backgroundPositionY:me,...aj,zIndex:ax,fillOpacity:Fo,strokeOpacity:Fo,numOctaves:ax},ij={...Qm,color:lt,backgroundColor:lt,outlineColor:lt,fill:lt,stroke:lt,borderColor:lt,borderTopColor:lt,borderRightColor:lt,borderBottomColor:lt,borderLeftColor:lt,filter:Ph,WebkitFilter:Ph},U5=e=>ij[e];function I5(e,t){let a=U5(e);return a!==Ph&&(a=si),a.getAnimatableNone?a.getAnimatableNone(t):void 0}const rj=new Set(["auto","none","0"]);function sj(e,t,a){let i=0,o;for(;i<e.length&&!o;){const l=e[i];typeof l=="string"&&!rj.has(l)&&qo(l).values.length&&(o=e[i]),i++}if(o&&a)for(const l of t)e[l]=I5(a,o)}class oj extends Xm{constructor(t,a,i,o,l){super(t,a,i,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:a,name:i}=this;if(!a||!a.current)return;super.readKeyframes();for(let p=0;p<t.length;p++){let m=t[p];if(typeof m=="string"&&(m=m.trim(),$m(m))){const g=_5(m,a.current);g!==void 0&&(t[p]=g),p===t.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!$5.has(i)||t.length!==2)return;const[o,l]=t,u=nx(o),f=nx(l);if(u!==f)if(Zb(u)&&Zb(f))for(let p=0;p<t.length;p++){const m=t[p];typeof m=="string"&&(t[p]=parseFloat(m))}else Ni[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:a}=this,i=[];for(let o=0;o<t.length;o++)(t[o]===null||Jk(t[o]))&&i.push(o);i.length&&sj(t,i,a)}measureInitialState(){const{element:t,unresolvedKeyframes:a,name:i}=this;if(!t||!t.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ni[i](t.measureViewportBox(),window.getComputedStyle(t.current)),a[0]=this.measuredOrigin;const o=a[a.length-1];o!==void 0&&t.getValue(i,o).jump(o,!1)}measureEndState(){var f;const{element:t,name:a,unresolvedKeyframes:i}=this;if(!t||!t.current)return;const o=t.getValue(a);o&&o.jump(this.measuredOrigin,!1);const l=i.length-1,u=i[l];i[l]=Ni[a](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),(f=this.removedTransforms)!=null&&f.length&&this.removedTransforms.forEach(([p,m])=>{t.getValue(p).set(m)}),this.resolveNoneKeyframes()}}function F5(e,t,a){if(e instanceof EventTarget)return[e];if(typeof e=="string"){const o=document.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}const q5=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function Zm(e){return c5(e)&&"offsetHeight"in e}const ix=30,lj=e=>!isNaN(parseFloat(e)),Ro={current:void 0};class cj{constructor(t,a={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var l;const o=Kt.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((l=this.events.change)==null||l.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=a.owner}setCurrent(t){this.current=t,this.updatedAt=Kt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=lj(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,a){this.events[t]||(this.events[t]=new Dm);const i=this.events[t].add(a);return t==="change"?()=>{i(),Be.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,a){this.passiveEffect=t,this.stopPassiveEffect=a}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,a,i){this.set(a),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-i}jump(t,a=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,a&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return Ro.current&&Ro.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=Kt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>ix)return 0;const a=Math.min(this.updatedAt-this.prevUpdatedAt,ix);return Pm(parseFloat(this.current)-parseFloat(this.prevFrameValue),a)}start(t){return this.stop(),new Promise(a=>{this.hasAnimated=!0,this.animation=t(a),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,a;(t=this.dependents)==null||t.clear(),(a=this.events.destroy)==null||a.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function On(e,t){return new cj(e,t)}const{schedule:Jm}=y5(queueMicrotask,!1),Ln={x:!1,y:!1};function K5(){return Ln.x||Ln.y}function uj(e){return e==="x"||e==="y"?Ln[e]?null:(Ln[e]=!0,()=>{Ln[e]=!1}):Ln.x||Ln.y?null:(Ln.x=Ln.y=!0,()=>{Ln.x=Ln.y=!1})}function Y5(e,t){const a=F5(e),i=new AbortController,o={passive:!0,...t,signal:i.signal};return[a,o,()=>i.abort()]}function rx(e){return!(e.pointerType==="touch"||K5())}function dj(e,t,a={}){const[i,o,l]=Y5(e,a),u=f=>{if(!rx(f))return;const{target:p}=f,m=t(p,f);if(typeof m!="function"||!p)return;const g=x=>{rx(x)&&(m(x),p.removeEventListener("pointerleave",g))};p.addEventListener("pointerleave",g,o)};return i.forEach(f=>{f.addEventListener("pointerenter",u,o)}),l}const X5=(e,t)=>t?e===t?!0:X5(e,t.parentElement):!1,eg=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,fj=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function pj(e){return fj.has(e.tagName)||e.tabIndex!==-1}const Qc=new WeakSet;function sx(e){return t=>{t.key==="Enter"&&e(t)}}function Lp(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const hj=(e,t)=>{const a=e.currentTarget;if(!a)return;const i=sx(()=>{if(Qc.has(a))return;Lp(a,"down");const o=sx(()=>{Lp(a,"up")}),l=()=>Lp(a,"cancel");a.addEventListener("keyup",o,t),a.addEventListener("blur",l,t)});a.addEventListener("keydown",i,t),a.addEventListener("blur",()=>a.removeEventListener("keydown",i),t)};function ox(e){return eg(e)&&!K5()}function mj(e,t,a={}){const[i,o,l]=Y5(e,a),u=f=>{const p=f.currentTarget;if(!ox(f))return;Qc.add(p);const m=t(p,f),g=(v,S)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",y),Qc.has(p)&&Qc.delete(p),ox(v)&&typeof m=="function"&&m(v,{success:S})},x=v=>{g(v,p===window||p===document||a.useGlobalTarget||X5(p,v.target))},y=v=>{g(v,!1)};window.addEventListener("pointerup",x,o),window.addEventListener("pointercancel",y,o)};return i.forEach(f=>{(a.useGlobalTarget?window:f).addEventListener("pointerdown",u,o),Zm(f)&&(f.addEventListener("focus",m=>hj(m,o)),!pj(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),l}function tg(e){return c5(e)&&"ownerSVGElement"in e}const Zc=new WeakMap;let ni;const W5=(e,t,a)=>(i,o)=>o&&o[0]?o[0][e+"Size"]:tg(i)&&"getBBox"in i?i.getBBox()[t]:i[a],gj=W5("inline","width","offsetWidth"),bj=W5("block","height","offsetHeight");function xj({target:e,borderBoxSize:t}){var a;(a=Zc.get(e))==null||a.forEach(i=>{i(e,{get width(){return gj(e,t)},get height(){return bj(e,t)}})})}function yj(e){e.forEach(xj)}function vj(){typeof ResizeObserver>"u"||(ni=new ResizeObserver(yj))}function wj(e,t){ni||vj();const a=F5(e);return a.forEach(i=>{let o=Zc.get(i);o||(o=new Set,Zc.set(i,o)),o.add(t),ni==null||ni.observe(i)}),()=>{a.forEach(i=>{const o=Zc.get(i);o==null||o.delete(t),o!=null&&o.size||ni==null||ni.unobserve(i)})}}const Jc=new Set;let _r;function Sj(){_r=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Jc.forEach(t=>t(e))},window.addEventListener("resize",_r)}function Tj(e){return Jc.add(e),_r||Sj(),()=>{Jc.delete(e),!Jc.size&&typeof _r=="function"&&(window.removeEventListener("resize",_r),_r=void 0)}}function kj(e,t){return typeof e=="function"?Tj(e):wj(e,t)}function Q5(e,t){let a;const i=()=>{const{currentTime:o}=t,u=(o===null?0:o.value)/100;a!==u&&e(u),a=u};return Be.preUpdate(i,!0),()=>Vn(i)}function jj(e){return tg(e)&&e.tagName==="svg"}function Ej(...e){const t=!Array.isArray(e[0]),a=t?0:-1,i=e[0+a],o=e[1+a],l=e[2+a],u=e[3+a],f=Fm(o,l,u);return t?f(i):f}const Vt=e=>!!(e&&e.getVelocity),Cj=[...G5,lt,si],Aj=e=>Cj.find(H5(e)),Gu=E.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Mj extends E.Component{getSnapshotBeforeUpdate(t){const a=this.props.childRef.current;if(a&&t.isPresent&&!this.props.isPresent){const i=a.offsetParent,o=Zm(i)&&i.offsetWidth||0,l=this.props.sizeRef.current;l.height=a.offsetHeight||0,l.width=a.offsetWidth||0,l.top=a.offsetTop,l.left=a.offsetLeft,l.right=o-l.width-l.left}return null}componentDidUpdate(){}render(){return this.props.children}}function zj({children:e,isPresent:t,anchorX:a,root:i}){const o=E.useId(),l=E.useRef(null),u=E.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:f}=E.useContext(Gu);return E.useInsertionEffect(()=>{const{width:p,height:m,top:g,left:x,right:y}=u.current;if(t||!l.current||!p||!m)return;const v=a==="left"?`left: ${x}`:`right: ${y}`;l.current.dataset.motionPopId=o;const S=document.createElement("style");f&&(S.nonce=f);const k=i??document.head;return k.appendChild(S),S.sheet&&S.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${m}px !important;
            ${v}px !important;
            top: ${g}px !important;
          }
        `),()=>{k.contains(S)&&k.removeChild(S)}},[t]),d.jsx(Mj,{isPresent:t,childRef:l,sizeRef:u,children:E.cloneElement(e,{ref:l})})}const Rj=({children:e,initial:t,isPresent:a,onExitComplete:i,custom:o,presenceAffectsLayout:l,mode:u,anchorX:f,root:p})=>{const m=cs(Lj),g=E.useId();let x=!0,y=E.useMemo(()=>(x=!1,{id:g,initial:t,isPresent:a,custom:o,onExitComplete:v=>{m.set(v,!0);for(const S of m.values())if(!S)return;i&&i()},register:v=>(m.set(v,!1),()=>m.delete(v))}),[a,m,i]);return l&&x&&(y={...y}),E.useMemo(()=>{m.forEach((v,S)=>m.set(S,!1))},[a]),E.useEffect(()=>{!a&&!m.size&&i&&i()},[a]),u==="popLayout"&&(e=d.jsx(zj,{isPresent:a,anchorX:f,root:p,children:e})),d.jsx($u.Provider,{value:y,children:e})};function Lj(){return new Map}function Z5(e=!0){const t=E.useContext($u);if(t===null)return[!0,null];const{isPresent:a,onExitComplete:i,register:o}=t,l=E.useId();E.useEffect(()=>{if(e)return o(l)},[e]);const u=E.useCallback(()=>e&&i&&i(l),[l,i,e]);return!a&&i?[!1,u]:[!0]}const Mc=e=>e.key||"";function lx(e){const t=[];return E.Children.forEach(e,a=>{E.isValidElement(a)&&t.push(a)}),t}const J5=({children:e,custom:t,initial:a=!0,onExitComplete:i,presenceAffectsLayout:o=!0,mode:l="sync",propagate:u=!1,anchorX:f="left",root:p})=>{const[m,g]=Z5(u),x=E.useMemo(()=>lx(e),[e]),y=u&&!m?[]:x.map(Mc),v=E.useRef(!0),S=E.useRef(x),k=cs(()=>new Map),[A,j]=E.useState(x),[R,C]=E.useState(x);_u(()=>{v.current=!1,S.current=x;for(let D=0;D<R.length;D++){const N=Mc(R[D]);y.includes(N)?k.delete(N):k.get(N)!==!0&&k.set(N,!1)}},[R,y.length,y.join("-")]);const _=[];if(x!==A){let D=[...x];for(let N=0;N<R.length;N++){const V=R[N],q=Mc(V);y.includes(q)||(D.splice(N,0,V),_.push(V))}return l==="wait"&&_.length&&(D=_),C(lx(D)),j(x),null}const{forceRender:M}=E.useContext(Mm);return d.jsx(d.Fragment,{children:R.map(D=>{const N=Mc(D),V=u&&!m?!1:x===R||y.includes(N),q=()=>{if(k.has(N))k.set(N,!0);else return;let W=!0;k.forEach(H=>{H||(W=!1)}),W&&(M==null||M(),C(S.current),u&&(g==null||g()),i&&i())};return d.jsx(Rj,{isPresent:V,initial:!v.current||a?void 0:!1,custom:t,presenceAffectsLayout:o,mode:l,root:p,onExitComplete:V?void 0:q,anchorX:f,children:D},N)})})},e4=E.createContext({strict:!1}),cx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Qr={};for(const e in cx)Qr[e]={isEnabled:t=>cx[e].some(a=>!!t[a])};function Oj(e){for(const t in e)Qr[t]={...Qr[t],...e[t]}}const Dj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function hu(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Dj.has(e)}let t4=e=>!hu(e);function Pj(e){typeof e=="function"&&(t4=t=>t.startsWith("on")?!hu(t):e(t))}try{Pj(require("@emotion/is-prop-valid").default)}catch{}function Vj(e,t,a){const i={};for(const o in e)o==="values"&&typeof e.values=="object"||(t4(o)||a===!0&&hu(o)||!t&&!hu(o)||e.draggable&&o.startsWith("onDrag"))&&(i[o]=e[o]);return i}const Uu=E.createContext({});function Iu(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Ko(e){return typeof e=="string"||Array.isArray(e)}const ng=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ag=["initial",...ng];function Fu(e){return Iu(e.animate)||ag.some(t=>Ko(e[t]))}function n4(e){return!!(Fu(e)||e.variants)}function Nj(e,t){if(Fu(e)){const{initial:a,animate:i}=e;return{initial:a===!1||Ko(a)?a:void 0,animate:Ko(i)?i:void 0}}return e.inherit!==!1?t:{}}function Bj(e){const{initial:t,animate:a}=Nj(e,E.useContext(Uu));return E.useMemo(()=>({initial:t,animate:a}),[ux(t),ux(a)])}function ux(e){return Array.isArray(e)?e.join(" "):e}const Yo={};function _j(e){for(const t in e)Yo[t]=e[t],_m(t)&&(Yo[t].isCSSVariable=!0)}function a4(e,{layout:t,layoutId:a}){return fs.has(e)||e.startsWith("origin")||(t||a!==void 0)&&(!!Yo[e]||e==="opacity")}const $j={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Hj=ds.length;function Gj(e,t,a){let i="",o=!0;for(let l=0;l<Hj;l++){const u=ds[l],f=e[u];if(f===void 0)continue;let p=!0;if(typeof f=="number"?p=f===(u.startsWith("scale")?1:0):p=parseFloat(f)===0,!p||a){const m=q5(f,Qm[u]);if(!p){o=!1;const g=$j[u]||u;i+=`${g}(${m}) `}a&&(t[u]=m)}}return i=i.trim(),a?i=a(t,o?"":i):o&&(i="none"),i}function ig(e,t,a){const{style:i,vars:o,transformOrigin:l}=e;let u=!1,f=!1;for(const p in t){const m=t[p];if(fs.has(p)){u=!0;continue}else if(_m(p)){o[p]=m;continue}else{const g=q5(m,Qm[p]);p.startsWith("origin")?(f=!0,l[p]=g):i[p]=g}}if(t.transform||(u||a?i.transform=Gj(t,e.transform,a):i.transform&&(i.transform="none")),f){const{originX:p="50%",originY:m="50%",originZ:g=0}=l;i.transformOrigin=`${p} ${m} ${g}`}}const rg=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function i4(e,t,a){for(const i in t)!Vt(t[i])&&!a4(i,a)&&(e[i]=t[i])}function Uj({transformTemplate:e},t){return E.useMemo(()=>{const a=rg();return ig(a,t,e),Object.assign({},a.vars,a.style)},[t])}function Ij(e,t){const a=e.style||{},i={};return i4(i,a,e),Object.assign(i,Uj(e,t)),i}function Fj(e,t){const a={},i=Ij(e,t);return e.drag&&e.dragListener!==!1&&(a.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(a.tabIndex=0),a.style=i,a}const qj={offset:"stroke-dashoffset",array:"stroke-dasharray"},Kj={offset:"strokeDashoffset",array:"strokeDasharray"};function Yj(e,t,a=1,i=0,o=!0){e.pathLength=1;const l=o?qj:Kj;e[l.offset]=me.transform(-i);const u=me.transform(t),f=me.transform(a);e[l.array]=`${u} ${f}`}function r4(e,{attrX:t,attrY:a,attrScale:i,pathLength:o,pathSpacing:l=1,pathOffset:u=0,...f},p,m,g){if(ig(e,f,m),p){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:x,style:y}=e;x.transform&&(y.transform=x.transform,delete x.transform),(y.transform||x.transformOrigin)&&(y.transformOrigin=x.transformOrigin??"50% 50%",delete x.transformOrigin),y.transform&&(y.transformBox=(g==null?void 0:g.transformBox)??"fill-box",delete x.transformBox),t!==void 0&&(x.x=t),a!==void 0&&(x.y=a),i!==void 0&&(x.scale=i),o!==void 0&&Yj(x,o,l,u,!1)}const s4=()=>({...rg(),attrs:{}}),o4=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Xj(e,t,a,i){const o=E.useMemo(()=>{const l=s4();return r4(l,t,o4(i),e.transformTemplate,e.style),{...l.attrs,style:{...l.style}}},[t]);if(e.style){const l={};i4(l,e.style,e),o.style={...l,...o.style}}return o}const Wj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function sg(e){return typeof e!="string"||e.includes("-")?!1:!!(Wj.indexOf(e)>-1||/[A-Z]/u.test(e))}function Qj(e,t,a,{latestValues:i},o,l=!1){const f=(sg(e)?Xj:Fj)(t,i,o,e),p=Vj(t,typeof e=="string",l),m=e!==E.Fragment?{...p,...f,ref:a}:{},{children:g}=t,x=E.useMemo(()=>Vt(g)?g.get():g,[g]);return E.createElement(e,{...m,children:x})}function dx(e){const t=[{},{}];return e==null||e.values.forEach((a,i)=>{t[0][i]=a.get(),t[1][i]=a.getVelocity()}),t}function og(e,t,a,i){if(typeof t=="function"){const[o,l]=dx(i);t=t(a!==void 0?a:e.custom,o,l)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[o,l]=dx(i);t=t(a!==void 0?a:e.custom,o,l)}return t}function eu(e){return Vt(e)?e.get():e}function Zj({scrapeMotionValuesFromProps:e,createRenderState:t},a,i,o){return{latestValues:Jj(a,i,o,e),renderState:t()}}function Jj(e,t,a,i){const o={},l=i(e,{});for(const y in l)o[y]=eu(l[y]);let{initial:u,animate:f}=e;const p=Fu(e),m=n4(e);t&&m&&!p&&e.inherit!==!1&&(u===void 0&&(u=t.initial),f===void 0&&(f=t.animate));let g=a?a.initial===!1:!1;g=g||u===!1;const x=g?f:u;if(x&&typeof x!="boolean"&&!Iu(x)){const y=Array.isArray(x)?x:[x];for(let v=0;v<y.length;v++){const S=og(e,y[v]);if(S){const{transitionEnd:k,transition:A,...j}=S;for(const R in j){let C=j[R];if(Array.isArray(C)){const _=g?C.length-1:0;C=C[_]}C!==null&&(o[R]=C)}for(const R in k)o[R]=k[R]}}}return o}const l4=e=>(t,a)=>{const i=E.useContext(Uu),o=E.useContext($u),l=()=>Zj(e,t,i,o);return a?l():cs(l)};function lg(e,t,a){var l;const{style:i}=e,o={};for(const u in i)(Vt(i[u])||t.style&&Vt(t.style[u])||a4(u,e)||((l=a==null?void 0:a.getValue(u))==null?void 0:l.liveStyle)!==void 0)&&(o[u]=i[u]);return o}const e7=l4({scrapeMotionValuesFromProps:lg,createRenderState:rg});function c4(e,t,a){const i=lg(e,t,a);for(const o in e)if(Vt(e[o])||Vt(t[o])){const l=ds.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;i[l]=e[o]}return i}const t7=l4({scrapeMotionValuesFromProps:c4,createRenderState:s4}),n7=Symbol.for("motionComponentSymbol");function $r(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function a7(e,t,a){return E.useCallback(i=>{i&&e.onMount&&e.onMount(i),t&&(i?t.mount(i):t.unmount()),a&&(typeof a=="function"?a(i):$r(a)&&(a.current=i))},[t])}const cg=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),i7="framerAppearId",u4="data-"+cg(i7),d4=E.createContext({});function r7(e,t,a,i,o){var k,A;const{visualElement:l}=E.useContext(Uu),u=E.useContext(e4),f=E.useContext($u),p=E.useContext(Gu).reducedMotion,m=E.useRef(null);i=i||u.renderer,!m.current&&i&&(m.current=i(e,{visualState:t,parent:l,props:a,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:p}));const g=m.current,x=E.useContext(d4);g&&!g.projection&&o&&(g.type==="html"||g.type==="svg")&&s7(m.current,a,o,x);const y=E.useRef(!1);E.useInsertionEffect(()=>{g&&y.current&&g.update(a,f)});const v=a[u4],S=E.useRef(!!v&&!((k=window.MotionHandoffIsComplete)!=null&&k.call(window,v))&&((A=window.MotionHasOptimisedAnimation)==null?void 0:A.call(window,v)));return _u(()=>{g&&(y.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),S.current&&g.animationState&&g.animationState.animateChanges())}),E.useEffect(()=>{g&&(!S.current&&g.animationState&&g.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var j;(j=window.MotionHandoffMarkAsComplete)==null||j.call(window,v)}),S.current=!1),g.enteringChildren=void 0)}),g}function s7(e,t,a,i){const{layoutId:o,layout:l,drag:u,dragConstraints:f,layoutScroll:p,layoutRoot:m,layoutCrossfade:g}=t;e.projection=new a(e.latestValues,t["data-framer-portal-id"]?void 0:f4(e.parent)),e.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||f&&$r(f),visualElement:e,animationType:typeof l=="string"?l:"both",initialPromotionConfig:i,crossfade:g,layoutScroll:p,layoutRoot:m})}function f4(e){if(e)return e.options.allowProjection!==!1?e.projection:f4(e.parent)}function Op(e,{forwardMotionProps:t=!1}={},a,i){a&&Oj(a);const o=sg(e)?t7:e7;function l(f,p){let m;const g={...E.useContext(Gu),...f,layoutId:o7(f)},{isStatic:x}=g,y=Bj(f),v=o(f,x);if(!x&&zm){l7();const S=c7(g);m=S.MeasureLayout,y.visualElement=r7(e,v,g,i,S.ProjectionNode)}return d.jsxs(Uu.Provider,{value:y,children:[m&&y.visualElement?d.jsx(m,{visualElement:y.visualElement,...g}):null,Qj(e,f,a7(v,y.visualElement,p),v,x,t)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const u=E.forwardRef(l);return u[n7]=e,u}function o7({layoutId:e}){const t=E.useContext(Mm).id;return t&&e!==void 0?t+"-"+e:e}function l7(e,t){E.useContext(e4).strict}function c7(e){const{drag:t,layout:a}=Qr;if(!t&&!a)return{};const i={...t,...a};return{MeasureLayout:t!=null&&t.isEnabled(e)||a!=null&&a.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function u7(e,t){if(typeof Proxy>"u")return Op;const a=new Map,i=(l,u)=>Op(l,u,e,t),o=(l,u)=>i(l,u);return new Proxy(o,{get:(l,u)=>u==="create"?i:(a.has(u)||a.set(u,Op(u,void 0,e,t)),a.get(u))})}function p4({top:e,left:t,right:a,bottom:i}){return{x:{min:t,max:a},y:{min:e,max:i}}}function d7({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function f7(e,t){if(!t)return e;const a=t({x:e.left,y:e.top}),i=t({x:e.right,y:e.bottom});return{top:a.y,left:a.x,bottom:i.y,right:i.x}}function Dp(e){return e===void 0||e===1}function Vh({scale:e,scaleX:t,scaleY:a}){return!Dp(e)||!Dp(t)||!Dp(a)}function Oi(e){return Vh(e)||h4(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function h4(e){return fx(e.x)||fx(e.y)}function fx(e){return e&&e!=="0%"}function mu(e,t,a){const i=e-a,o=t*i;return a+o}function px(e,t,a,i,o){return o!==void 0&&(e=mu(e,o,i)),mu(e,a,i)+t}function Nh(e,t=0,a=1,i,o){e.min=px(e.min,t,a,i,o),e.max=px(e.max,t,a,i,o)}function m4(e,{x:t,y:a}){Nh(e.x,t.translate,t.scale,t.originPoint),Nh(e.y,a.translate,a.scale,a.originPoint)}const hx=.999999999999,mx=1.0000000000001;function p7(e,t,a,i=!1){const o=a.length;if(!o)return;t.x=t.y=1;let l,u;for(let f=0;f<o;f++){l=a[f],u=l.projectionDelta;const{visualElement:p}=l.options;p&&p.props.style&&p.props.style.display==="contents"||(i&&l.options.layoutScroll&&l.scroll&&l!==l.root&&Gr(e,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(t.x*=u.x.scale,t.y*=u.y.scale,m4(e,u)),i&&Oi(l.latestValues)&&Gr(e,l.latestValues))}t.x<mx&&t.x>hx&&(t.x=1),t.y<mx&&t.y>hx&&(t.y=1)}function Hr(e,t){e.min=e.min+t,e.max=e.max+t}function gx(e,t,a,i,o=.5){const l=Je(e.min,e.max,o);Nh(e,t,a,l,i)}function Gr(e,t){gx(e.x,t.x,t.scaleX,t.scale,t.originX),gx(e.y,t.y,t.scaleY,t.scale,t.originY)}function g4(e,t){return p4(f7(e.getBoundingClientRect(),t))}function h7(e,t,a){const i=g4(e,a),{scroll:o}=t;return o&&(Hr(i.x,o.offset.x),Hr(i.y,o.offset.y)),i}const bx=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ur=()=>({x:bx(),y:bx()}),xx=()=>({min:0,max:0}),rt=()=>({x:xx(),y:xx()}),Bh={current:null},b4={current:!1};function m7(){if(b4.current=!0,!!zm)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Bh.current=e.matches;e.addEventListener("change",t),t()}else Bh.current=!1}const g7=new WeakMap;function b7(e,t,a){for(const i in t){const o=t[i],l=a[i];if(Vt(o))e.addValue(i,o);else if(Vt(l))e.addValue(i,On(o,{owner:e}));else if(l!==o)if(e.hasValue(i)){const u=e.getValue(i);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=e.getStaticValue(i);e.addValue(i,On(u!==void 0?u:o,{owner:e}))}}for(const i in a)t[i]===void 0&&e.removeValue(i);return t}const yx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class x7{scrapeMotionValuesFromProps(t,a,i){return{}}constructor({parent:t,props:a,presenceContext:i,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Xm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=Kt.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,Be.render(this.render,!1,!0))};const{latestValues:p,renderState:m}=u;this.latestValues=p,this.baseTarget={...p},this.initialValues=a.initial?{...p}:{},this.renderState=m,this.parent=t,this.props=a,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=f,this.blockInitialAnimation=!!l,this.isControllingVariants=Fu(a),this.isVariantNode=n4(a),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:g,...x}=this.scrapeMotionValuesFromProps(a,{},this);for(const y in x){const v=x[y];p[y]!==void 0&&Vt(v)&&v.set(p[y])}}mount(t){var a;this.current=t,g7.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,o)=>this.bindToMotionValue(o,i)),b4.current||m7(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Bh.current,(a=this.parent)==null||a.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),Vn(this.notifyUpdate),Vn(this.render),this.valueSubscriptions.forEach(a=>a()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const a in this.events)this.events[a].clear();for(const a in this.features){const i=this.features[a];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,a){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const i=fs.has(t);i&&this.onBindTransform&&this.onBindTransform();const o=a.on("change",u=>{this.latestValues[t]=u,this.props.onUpdate&&Be.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,t,a)),this.valueSubscriptions.set(t,()=>{o(),l&&l(),a.owner&&a.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Qr){const a=Qr[t];if(!a)continue;const{isEnabled:i,Feature:o}=a;if(!this.features[t]&&o&&i(this.props)&&(this.features[t]=new o(this)),this.features[t]){const l=this.features[t];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):rt()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,a){this.latestValues[t]=a}update(t,a){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=a;for(let i=0;i<yx.length;i++){const o=yx[i];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=t[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=b7(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const a=this.getClosestVariantNode();if(a)return a.variantChildren&&a.variantChildren.add(t),()=>a.variantChildren.delete(t)}addValue(t,a){const i=this.values.get(t);a!==i&&(i&&this.removeValue(t),this.bindToMotionValue(t,a),this.values.set(t,a),this.latestValues[t]=a.get())}removeValue(t){this.values.delete(t);const a=this.valueSubscriptions.get(t);a&&(a(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,a){if(this.props.values&&this.props.values[t])return this.props.values[t];let i=this.values.get(t);return i===void 0&&a!==void 0&&(i=On(a===null?void 0:a,{owner:this}),this.addValue(t,i)),i}readValue(t,a){let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(l5(i)||u5(i))?i=parseFloat(i):!Aj(i)&&si.test(a)&&(i=I5(t,a)),this.setBaseTarget(t,Vt(i)?i.get():i)),Vt(i)?i.get():i}setBaseTarget(t,a){this.baseTarget[t]=a}getBaseTarget(t){var l;const{initial:a}=this.props;let i;if(typeof a=="string"||typeof a=="object"){const u=og(this.props,a,(l=this.presenceContext)==null?void 0:l.custom);u&&(i=u[t])}if(a&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Vt(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,a){return this.events[t]||(this.events[t]=new Dm),this.events[t].add(a)}notify(t,...a){this.events[t]&&this.events[t].notify(...a)}scheduleRenderMicrotask(){Jm.render(this.render)}}class x4 extends x7{constructor(){super(...arguments),this.KeyframeResolver=oj}sortInstanceNodePosition(t,a){return t.compareDocumentPosition(a)&2?1:-1}getBaseTargetFromProps(t,a){return t.style?t.style[a]:void 0}removeValueFromRenderState(t,{vars:a,style:i}){delete a[t],delete i[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Vt(t)&&(this.childSubscription=t.on("change",a=>{this.current&&(this.current.textContent=`${a}`)}))}}function y4(e,{style:t,vars:a},i,o){const l=e.style;let u;for(u in t)l[u]=t[u];o==null||o.applyProjectionStyles(l,i);for(u in a)l.setProperty(u,a[u])}function y7(e){return window.getComputedStyle(e)}class v7 extends x4{constructor(){super(...arguments),this.type="html",this.renderInstance=y4}readValueFromInstance(t,a){var i;if(fs.has(a))return(i=this.projection)!=null&&i.isProjecting?Mh(a):Ck(t,a);{const o=y7(t),l=(_m(a)?o.getPropertyValue(a):o[a])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(t,{transformPagePoint:a}){return g4(t,a)}build(t,a,i){ig(t,a,i.transformTemplate)}scrapeMotionValuesFromProps(t,a,i){return lg(t,a,i)}}const v4=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function w7(e,t,a,i){y4(e,t,void 0,i);for(const o in t.attrs)e.setAttribute(v4.has(o)?o:cg(o),t.attrs[o])}class S7 extends x4{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=rt}getBaseTargetFromProps(t,a){return t[a]}readValueFromInstance(t,a){if(fs.has(a)){const i=U5(a);return i&&i.default||0}return a=v4.has(a)?a:cg(a),t.getAttribute(a)}scrapeMotionValuesFromProps(t,a,i){return c4(t,a,i)}build(t,a,i){r4(t,a,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(t,a,i,o){w7(t,a,i,o)}mount(t){this.isSVGTag=o4(t.tagName),super.mount(t)}}const T7=(e,t)=>sg(e)?new S7(t):new v7(t,{allowProjection:e!==E.Fragment});function Kr(e,t,a){const i=e.getProps();return og(i,t,a!==void 0?a:i.custom,e)}const _h=e=>Array.isArray(e);function k7(e,t,a){e.hasValue(t)?e.getValue(t).set(a):e.addValue(t,On(a))}function j7(e){return _h(e)?e[e.length-1]||0:e}function E7(e,t){const a=Kr(e,t);let{transitionEnd:i={},transition:o={},...l}=a||{};l={...l,...i};for(const u in l){const f=j7(l[u]);k7(e,u,f)}}function C7(e){return!!(Vt(e)&&e.add)}function $h(e,t){const a=e.getValue("willChange");if(C7(a))return a.add(t);if(!a&&Ma.WillChange){const i=new Ma.WillChange("auto");e.addValue("willChange",i),i.add(t)}}function w4(e){return e.props[u4]}const A7=e=>e!==null;function M7(e,{repeat:t,repeatType:a="loop"},i){const o=e.filter(A7),l=t&&a!=="loop"&&t%2===1?0:o.length-1;return o[l]}const z7={type:"spring",stiffness:500,damping:25,restSpeed:10},R7=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),L7={type:"keyframes",duration:.8},O7={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},D7=(e,{keyframes:t})=>t.length>2?L7:fs.has(e)?e.startsWith("scale")?R7(t[1]):z7:O7;function P7({when:e,delay:t,delayChildren:a,staggerChildren:i,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:f,from:p,elapsed:m,...g}){return!!Object.keys(g).length}const ug=(e,t,a,i={},o,l)=>u=>{const f=Wm(i,e)||{},p=f.delay||i.delay||0;let{elapsed:m=0}=i;m=m-ea(p);const g={keyframes:Array.isArray(a)?a:[null,a],ease:"easeOut",velocity:t.getVelocity(),...f,delay:-m,onUpdate:y=>{t.set(y),f.onUpdate&&f.onUpdate(y)},onComplete:()=>{u(),f.onComplete&&f.onComplete()},name:e,motionValue:t,element:l?void 0:o};P7(f)||Object.assign(g,D7(e,g)),g.duration&&(g.duration=ea(g.duration)),g.repeatDelay&&(g.repeatDelay=ea(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let x=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Dh(g),g.delay===0&&(x=!0)),(Ma.instantAnimations||Ma.skipAnimations)&&(x=!0,Dh(g),g.delay=0),g.allowFlatten=!f.type&&!f.ease,x&&!l&&t.get()!==void 0){const y=M7(g.keyframes,f);if(y!==void 0){Be.update(()=>{g.onUpdate(y),g.onComplete()});return}}return f.isSync?new Ym(g):new Xk(g)};function V7({protectedKeys:e,needsAnimating:t},a){const i=e.hasOwnProperty(a)&&t[a]!==!0;return t[a]=!1,i}function S4(e,t,{delay:a=0,transitionOverride:i,type:o}={}){let{transition:l=e.getDefaultTransition(),transitionEnd:u,...f}=t;i&&(l=i);const p=[],m=o&&e.animationState&&e.animationState.getState()[o];for(const g in f){const x=e.getValue(g,e.latestValues[g]??null),y=f[g];if(y===void 0||m&&V7(m,g))continue;const v={delay:a,...Wm(l||{},g)},S=x.get();if(S!==void 0&&!x.isAnimating&&!Array.isArray(y)&&y===S&&!v.velocity)continue;let k=!1;if(window.MotionHandoffAnimation){const j=w4(e);if(j){const R=window.MotionHandoffAnimation(j,g,Be);R!==null&&(v.startTime=R,k=!0)}}$h(e,g),x.start(ug(g,x,y,e.shouldReduceMotion&&$5.has(g)?{type:!1}:v,e,k));const A=x.animation;A&&p.push(A)}return u&&Promise.all(p).then(()=>{Be.update(()=>{u&&E7(e,u)})}),p}function T4(e,t,a,i=0,o=1){const l=Array.from(e).sort((m,g)=>m.sortNodePosition(g)).indexOf(t),u=e.size,f=(u-1)*i;return typeof a=="function"?a(l,u):o===1?l*i:f-l*i}function Hh(e,t,a={}){var p;const i=Kr(e,t,a.type==="exit"?(p=e.presenceContext)==null?void 0:p.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};a.transitionOverride&&(o=a.transitionOverride);const l=i?()=>Promise.all(S4(e,i,a)):()=>Promise.resolve(),u=e.variantChildren&&e.variantChildren.size?(m=0)=>{const{delayChildren:g=0,staggerChildren:x,staggerDirection:y}=o;return N7(e,t,m,g,x,y,a)}:()=>Promise.resolve(),{when:f}=o;if(f){const[m,g]=f==="beforeChildren"?[l,u]:[u,l];return m().then(()=>g())}else return Promise.all([l(),u(a.delay)])}function N7(e,t,a=0,i=0,o=0,l=1,u){const f=[];for(const p of e.variantChildren)p.notify("AnimationStart",t),f.push(Hh(p,t,{...u,delay:a+(typeof i=="function"?0:i)+T4(e.variantChildren,p,i,o,l)}).then(()=>p.notify("AnimationComplete",t)));return Promise.all(f)}function B7(e,t,a={}){e.notify("AnimationStart",t);let i;if(Array.isArray(t)){const o=t.map(l=>Hh(e,l,a));i=Promise.all(o)}else if(typeof t=="string")i=Hh(e,t,a);else{const o=typeof t=="function"?Kr(e,t,a.custom):t;i=Promise.all(S4(e,o,a))}return i.then(()=>{e.notify("AnimationComplete",t)})}function k4(e,t){if(!Array.isArray(t))return!1;const a=t.length;if(a!==e.length)return!1;for(let i=0;i<a;i++)if(t[i]!==e[i])return!1;return!0}const _7=ag.length;function j4(e){if(!e)return;if(!e.isControllingVariants){const a=e.parent?j4(e.parent)||{}:{};return e.props.initial!==void 0&&(a.initial=e.props.initial),a}const t={};for(let a=0;a<_7;a++){const i=ag[a],o=e.props[i];(Ko(o)||o===!1)&&(t[i]=o)}return t}const $7=[...ng].reverse(),H7=ng.length;function G7(e){return t=>Promise.all(t.map(({animation:a,options:i})=>B7(e,a,i)))}function U7(e){let t=G7(e),a=vx(),i=!0;const o=p=>(m,g)=>{var y;const x=Kr(e,g,p==="exit"?(y=e.presenceContext)==null?void 0:y.custom:void 0);if(x){const{transition:v,transitionEnd:S,...k}=x;m={...m,...k,...S}}return m};function l(p){t=p(e)}function u(p){const{props:m}=e,g=j4(e.parent)||{},x=[],y=new Set;let v={},S=1/0;for(let A=0;A<H7;A++){const j=$7[A],R=a[j],C=m[j]!==void 0?m[j]:g[j],_=Ko(C),M=j===p?R.isActive:null;M===!1&&(S=A);let D=C===g[j]&&C!==m[j]&&_;if(D&&i&&e.manuallyAnimateOnMount&&(D=!1),R.protectedKeys={...v},!R.isActive&&M===null||!C&&!R.prevProp||Iu(C)||typeof C=="boolean")continue;const N=I7(R.prevProp,C);let V=N||j===p&&R.isActive&&!D&&_||A>S&&_,q=!1;const W=Array.isArray(C)?C:[C];let H=W.reduce(o(j),{});M===!1&&(H={});const{prevResolvedValues:ee={}}=R,se={...ee,...H},de=P=>{V=!0,y.has(P)&&(q=!0,y.delete(P)),R.needsAnimating[P]=!0;const $=e.getValue(P);$&&($.liveStyle=!1)};for(const P in se){const $=H[P],Q=ee[P];if(v.hasOwnProperty(P))continue;let z=!1;_h($)&&_h(Q)?z=!k4($,Q):z=$!==Q,z?$!=null?de(P):y.add(P):$!==void 0&&y.has(P)?de(P):R.protectedKeys[P]=!0}R.prevProp=C,R.prevResolvedValues=H,R.isActive&&(v={...v,...H}),i&&e.blockInitialAnimation&&(V=!1);const ue=D&&N;V&&(!ue||q)&&x.push(...W.map(P=>{const $={type:j};if(typeof P=="string"&&i&&!ue&&e.manuallyAnimateOnMount&&e.parent){const{parent:Q}=e,z=Kr(Q,P);if(Q.enteringChildren&&z){const{delayChildren:X}=z.transition||{};$.delay=T4(Q.enteringChildren,e,X)}}return{animation:P,options:$}}))}if(y.size){const A={};if(typeof m.initial!="boolean"){const j=Kr(e,Array.isArray(m.initial)?m.initial[0]:m.initial);j&&j.transition&&(A.transition=j.transition)}y.forEach(j=>{const R=e.getBaseTarget(j),C=e.getValue(j);C&&(C.liveStyle=!0),A[j]=R??null}),x.push({animation:A})}let k=!!x.length;return i&&(m.initial===!1||m.initial===m.animate)&&!e.manuallyAnimateOnMount&&(k=!1),i=!1,k?t(x):Promise.resolve()}function f(p,m){var x;if(a[p].isActive===m)return Promise.resolve();(x=e.variantChildren)==null||x.forEach(y=>{var v;return(v=y.animationState)==null?void 0:v.setActive(p,m)}),a[p].isActive=m;const g=u(p);for(const y in a)a[y].protectedKeys={};return g}return{animateChanges:u,setActive:f,setAnimateFunction:l,getState:()=>a,reset:()=>{a=vx(),i=!0}}}function I7(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!k4(t,e):!1}function zi(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function vx(){return{animate:zi(!0),whileInView:zi(),whileHover:zi(),whileTap:zi(),whileDrag:zi(),whileFocus:zi(),exit:zi()}}class ui{constructor(t){this.isMounted=!1,this.node=t}update(){}}class F7 extends ui{constructor(t){super(t),t.animationState||(t.animationState=U7(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Iu(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:a}=this.node.prevProps||{};t!==a&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let q7=0;class K7 extends ui{constructor(){super(...arguments),this.id=q7++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:a}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const o=this.node.animationState.setActive("exit",!t);a&&!t&&o.then(()=>{a(this.id)})}mount(){const{register:t,onExitComplete:a}=this.node.presenceContext||{};a&&a(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const Y7={animation:{Feature:F7},exit:{Feature:K7}};function Xo(e,t,a,i={passive:!0}){return e.addEventListener(t,a,i),()=>e.removeEventListener(t,a)}function ll(e){return{point:{x:e.pageX,y:e.pageY}}}const X7=e=>t=>eg(t)&&e(t,ll(t));function Lo(e,t,a,i){return Xo(e,t,X7(a),i)}const E4=1e-4,W7=1-E4,Q7=1+E4,C4=.01,Z7=0-C4,J7=0+C4;function _t(e){return e.max-e.min}function eE(e,t,a){return Math.abs(e-t)<=a}function wx(e,t,a,i=.5){e.origin=i,e.originPoint=Je(t.min,t.max,e.origin),e.scale=_t(a)/_t(t),e.translate=Je(a.min,a.max,e.origin)-e.originPoint,(e.scale>=W7&&e.scale<=Q7||isNaN(e.scale))&&(e.scale=1),(e.translate>=Z7&&e.translate<=J7||isNaN(e.translate))&&(e.translate=0)}function Oo(e,t,a,i){wx(e.x,t.x,a.x,i?i.originX:void 0),wx(e.y,t.y,a.y,i?i.originY:void 0)}function Sx(e,t,a){e.min=a.min+t.min,e.max=e.min+_t(t)}function tE(e,t,a){Sx(e.x,t.x,a.x),Sx(e.y,t.y,a.y)}function Tx(e,t,a){e.min=t.min-a.min,e.max=e.min+_t(t)}function Do(e,t,a){Tx(e.x,t.x,a.x),Tx(e.y,t.y,a.y)}function jn(e){return[e("x"),e("y")]}const A4=({current:e})=>e?e.ownerDocument.defaultView:null,kx=(e,t)=>Math.abs(e-t);function nE(e,t){const a=kx(e.x,t.x),i=kx(e.y,t.y);return Math.sqrt(a**2+i**2)}class M4{constructor(t,a,{transformPagePoint:i,contextWindow:o=window,dragSnapToOrigin:l=!1,distanceThreshold:u=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=Vp(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,S=nE(y.offset,{x:0,y:0})>=this.distanceThreshold;if(!v&&!S)return;const{point:k}=y,{timestamp:A}=St;this.history.push({...k,timestamp:A});const{onStart:j,onMove:R}=this.handlers;v||(j&&j(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),R&&R(this.lastMoveEvent,y)},this.handlePointerMove=(y,v)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=Pp(v,this.transformPagePoint),Be.update(this.updatePoint,!0)},this.handlePointerUp=(y,v)=>{this.end();const{onEnd:S,onSessionEnd:k,resumeAnimation:A}=this.handlers;if(this.dragSnapToOrigin&&A&&A(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const j=Vp(y.type==="pointercancel"?this.lastMoveEventInfo:Pp(v,this.transformPagePoint),this.history);this.startEvent&&S&&S(y,j),k&&k(y,j)},!eg(t))return;this.dragSnapToOrigin=l,this.handlers=a,this.transformPagePoint=i,this.distanceThreshold=u,this.contextWindow=o||window;const f=ll(t),p=Pp(f,this.transformPagePoint),{point:m}=p,{timestamp:g}=St;this.history=[{...m,timestamp:g}];const{onSessionStart:x}=a;x&&x(t,Vp(p,this.history)),this.removeListeners=rl(Lo(this.contextWindow,"pointermove",this.handlePointerMove),Lo(this.contextWindow,"pointerup",this.handlePointerUp),Lo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Vn(this.updatePoint)}}function Pp(e,t){return t?{point:t(e.point)}:e}function jx(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Vp({point:e},t){return{point:e,delta:jx(e,z4(t)),offset:jx(e,aE(t)),velocity:iE(t,.1)}}function aE(e){return e[0]}function z4(e){return e[e.length-1]}function iE(e,t){if(e.length<2)return{x:0,y:0};let a=e.length-1,i=null;const o=z4(e);for(;a>=0&&(i=e[a],!(o.timestamp-i.timestamp>ea(t)));)a--;if(!i)return{x:0,y:0};const l=ta(o.timestamp-i.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-i.x)/l,y:(o.y-i.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function rE(e,{min:t,max:a},i){return t!==void 0&&e<t?e=i?Je(t,e,i.min):Math.max(e,t):a!==void 0&&e>a&&(e=i?Je(a,e,i.max):Math.min(e,a)),e}function Ex(e,t,a){return{min:t!==void 0?e.min+t:void 0,max:a!==void 0?e.max+a-(e.max-e.min):void 0}}function sE(e,{top:t,left:a,bottom:i,right:o}){return{x:Ex(e.x,a,o),y:Ex(e.y,t,i)}}function Cx(e,t){let a=t.min-e.min,i=t.max-e.max;return t.max-t.min<e.max-e.min&&([a,i]=[i,a]),{min:a,max:i}}function oE(e,t){return{x:Cx(e.x,t.x),y:Cx(e.y,t.y)}}function lE(e,t){let a=.5;const i=_t(e),o=_t(t);return o>i?a=Wr(t.min,t.max-i,e.min):i>o&&(a=Wr(e.min,e.max-o,t.min)),ia(0,1,a)}function cE(e,t){const a={};return t.min!==void 0&&(a.min=t.min-e.min),t.max!==void 0&&(a.max=t.max-e.min),a}const Gh=.35;function uE(e=Gh){return e===!1?e=0:e===!0&&(e=Gh),{x:Ax(e,"left","right"),y:Ax(e,"top","bottom")}}function Ax(e,t,a){return{min:Mx(e,t),max:Mx(e,a)}}function Mx(e,t){return typeof e=="number"?e:e[t]||0}const dE=new WeakMap;class fE{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=rt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:a=!1,distanceThreshold:i}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=x=>{const{dragSnapToOrigin:y}=this.getProps();y?this.pauseAnimation():this.stopAnimation(),a&&this.snapToCursor(ll(x).point)},u=(x,y)=>{const{drag:v,dragPropagation:S,onDragStart:k}=this.getProps();if(v&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=uj(v),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=y,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),jn(j=>{let R=this.getAxisMotionValue(j).get()||0;if(na.test(R)){const{projection:C}=this.visualElement;if(C&&C.layout){const _=C.layout.layoutBox[j];_&&(R=_t(_)*(parseFloat(R)/100))}}this.originPoint[j]=R}),k&&Be.postRender(()=>k(x,y)),$h(this.visualElement,"transform");const{animationState:A}=this.visualElement;A&&A.setActive("whileDrag",!0)},f=(x,y)=>{this.latestPointerEvent=x,this.latestPanInfo=y;const{dragPropagation:v,dragDirectionLock:S,onDirectionLock:k,onDrag:A}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:j}=y;if(S&&this.currentDirection===null){this.currentDirection=pE(j),this.currentDirection!==null&&k&&k(this.currentDirection);return}this.updateAxis("x",y.point,j),this.updateAxis("y",y.point,j),this.visualElement.render(),A&&A(x,y)},p=(x,y)=>{this.latestPointerEvent=x,this.latestPanInfo=y,this.stop(x,y),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>jn(x=>{var y;return this.getAnimationState(x)==="paused"&&((y=this.getAxisMotionValue(x).animation)==null?void 0:y.play())}),{dragSnapToOrigin:g}=this.getProps();this.panSession=new M4(t,{onSessionStart:l,onStart:u,onMove:f,onSessionEnd:p,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:i,contextWindow:A4(this.visualElement)})}stop(t,a){const i=t||this.latestPointerEvent,o=a||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!o||!i)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:f}=this.getProps();f&&Be.postRender(()=>f(i,o))}cancel(){this.isDragging=!1;const{projection:t,animationState:a}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),a&&a.setActive("whileDrag",!1)}updateAxis(t,a,i){const{drag:o}=this.getProps();if(!i||!zc(t,o,this.currentDirection))return;const l=this.getAxisMotionValue(t);let u=this.originPoint[t]+i[t];this.constraints&&this.constraints[t]&&(u=rE(u,this.constraints[t],this.elastic[t])),l.set(u)}resolveConstraints(){var l;const{dragConstraints:t,dragElastic:a}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(l=this.visualElement.projection)==null?void 0:l.layout,o=this.constraints;t&&$r(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&i?this.constraints=sE(i.layoutBox,t):this.constraints=!1,this.elastic=uE(a),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&jn(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=cE(i.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:a}=this.getProps();if(!t||!$r(t))return!1;const i=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=h7(i,o.root,this.visualElement.getTransformPagePoint());let u=oE(o.layout.layoutBox,l);if(a){const f=a(d7(u));this.hasMutatedConstraints=!!f,f&&(u=p4(f))}return u}startAnimation(t){const{drag:a,dragMomentum:i,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:f}=this.getProps(),p=this.constraints||{},m=jn(g=>{if(!zc(g,a,this.currentDirection))return;let x=p&&p[g]||{};u&&(x={min:0,max:0});const y=o?200:1e6,v=o?40:1e7,S={type:"inertia",velocity:i?t[g]:0,bounceStiffness:y,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...l,...x};return this.startAxisValueAnimation(g,S)});return Promise.all(m).then(f)}startAxisValueAnimation(t,a){const i=this.getAxisMotionValue(t);return $h(this.visualElement,t),i.start(ug(t,i,0,a,this.visualElement,!1))}stopAnimation(){jn(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){jn(t=>{var a;return(a=this.getAxisMotionValue(t).animation)==null?void 0:a.pause()})}getAnimationState(t){var a;return(a=this.getAxisMotionValue(t).animation)==null?void 0:a.state}getAxisMotionValue(t){const a=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps(),o=i[a];return o||this.visualElement.getValue(t,(i.initial?i.initial[t]:void 0)||0)}snapToCursor(t){jn(a=>{const{drag:i}=this.getProps();if(!zc(a,i,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(a);if(o&&o.layout){const{min:u,max:f}=o.layout.layoutBox[a];l.set(t[a]-Je(u,f,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:a}=this.getProps(),{projection:i}=this.visualElement;if(!$r(a)||!i||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};jn(u=>{const f=this.getAxisMotionValue(u);if(f&&this.constraints!==!1){const p=f.get();o[u]=lE({min:p,max:p},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),jn(u=>{if(!zc(u,t,null))return;const f=this.getAxisMotionValue(u),{min:p,max:m}=this.constraints[u];f.set(Je(p,m,o[u]))})}addListeners(){if(!this.visualElement.current)return;dE.set(this.visualElement,this);const t=this.visualElement.current,a=Lo(t,"pointerdown",p=>{const{drag:m,dragListener:g=!0}=this.getProps();m&&g&&this.start(p)}),i=()=>{const{dragConstraints:p}=this.getProps();$r(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",i);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Be.read(i);const u=Xo(window,"resize",()=>this.scalePositionWithinConstraints()),f=o.addEventListener("didUpdate",({delta:p,hasLayoutChanged:m})=>{this.isDragging&&m&&(jn(g=>{const x=this.getAxisMotionValue(g);x&&(this.originPoint[g]+=p[g].translate,x.set(x.get()+p[g].translate))}),this.visualElement.render())});return()=>{u(),a(),l(),f&&f()}}getProps(){const t=this.visualElement.getProps(),{drag:a=!1,dragDirectionLock:i=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=Gh,dragMomentum:f=!0}=t;return{...t,drag:a,dragDirectionLock:i,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:f}}}function zc(e,t,a){return(t===!0||t===e)&&(a===null||a===e)}function pE(e,t=10){let a=null;return Math.abs(e.y)>t?a="y":Math.abs(e.x)>t&&(a="x"),a}class hE extends ui{constructor(t){super(t),this.removeGroupControls=Xt,this.removeListeners=Xt,this.controls=new fE(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Xt}unmount(){this.removeGroupControls(),this.removeListeners()}}const zx=e=>(t,a)=>{e&&Be.postRender(()=>e(t,a))};class mE extends ui{constructor(){super(...arguments),this.removePointerDownListener=Xt}onPointerDown(t){this.session=new M4(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:A4(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:a,onPan:i,onPanEnd:o}=this.node.getProps();return{onSessionStart:zx(t),onStart:zx(a),onMove:i,onEnd:(l,u)=>{delete this.session,o&&Be.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=Lo(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const tu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Rx(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const go={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(me.test(e))e=parseFloat(e);else return e;const a=Rx(e,t.target.x),i=Rx(e,t.target.y);return`${a}% ${i}%`}},gE={correct:(e,{treeScale:t,projectionDelta:a})=>{const i=e,o=si.parse(e);if(o.length>5)return i;const l=si.createTransformer(e),u=typeof o[0]!="number"?1:0,f=a.x.scale*t.x,p=a.y.scale*t.y;o[0+u]/=f,o[1+u]/=p;const m=Je(f,p,.5);return typeof o[2+u]=="number"&&(o[2+u]/=m),typeof o[3+u]=="number"&&(o[3+u]/=m),l(o)}};let Np=!1;class bE extends E.Component{componentDidMount(){const{visualElement:t,layoutGroup:a,switchLayoutGroup:i,layoutId:o}=this.props,{projection:l}=t;_j(xE),l&&(a.group&&a.group.add(l),i&&i.register&&o&&i.register(l),Np&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),tu.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:a,visualElement:i,drag:o,isPresent:l}=this.props,{projection:u}=i;return u&&(u.isPresent=l,Np=!0,o||t.layoutDependency!==a||a===void 0||t.isPresent!==l?u.willUpdate():this.safeToRemove(),t.isPresent!==l&&(l?u.promote():u.relegate()||Be.postRender(()=>{const f=u.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Jm.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:a,switchLayoutGroup:i}=this.props,{projection:o}=t;Np=!0,o&&(o.scheduleCheckAfterUnmount(),a&&a.group&&a.group.remove(o),i&&i.deregister&&i.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function R4(e){const[t,a]=Z5(),i=E.useContext(Mm);return d.jsx(bE,{...e,layoutGroup:i,switchLayoutGroup:E.useContext(d4),isPresent:t,safeToRemove:a})}const xE={borderRadius:{...go,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:go,borderTopRightRadius:go,borderBottomLeftRadius:go,borderBottomRightRadius:go,boxShadow:gE};function yE(e,t,a){const i=Vt(e)?e:On(e);return i.start(ug("",i,t,a)),i.animation}const vE=(e,t)=>e.depth-t.depth;class wE{constructor(){this.children=[],this.isDirty=!1}add(t){Rm(this.children,t),this.isDirty=!0}remove(t){Lm(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(vE),this.isDirty=!1,this.children.forEach(t)}}function SE(e,t){const a=Kt.now(),i=({timestamp:o})=>{const l=o-a;l>=t&&(Vn(i),e(l-t))};return Be.setup(i,!0),()=>Vn(i)}const L4=["TopLeft","TopRight","BottomLeft","BottomRight"],TE=L4.length,Lx=e=>typeof e=="string"?parseFloat(e):e,Ox=e=>typeof e=="number"||me.test(e);function kE(e,t,a,i,o,l){o?(e.opacity=Je(0,a.opacity??1,jE(i)),e.opacityExit=Je(t.opacity??1,0,EE(i))):l&&(e.opacity=Je(t.opacity??1,a.opacity??1,i));for(let u=0;u<TE;u++){const f=`border${L4[u]}Radius`;let p=Dx(t,f),m=Dx(a,f);if(p===void 0&&m===void 0)continue;p||(p=0),m||(m=0),p===0||m===0||Ox(p)===Ox(m)?(e[f]=Math.max(Je(Lx(p),Lx(m),i),0),(na.test(m)||na.test(p))&&(e[f]+="%")):e[f]=m}(t.rotate||a.rotate)&&(e.rotate=Je(t.rotate||0,a.rotate||0,i))}function Dx(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const jE=O4(0,.5,g5),EE=O4(.5,.95,Xt);function O4(e,t,a){return i=>i<e?0:i>t?1:a(Wr(e,t,i))}function Px(e,t){e.min=t.min,e.max=t.max}function kn(e,t){Px(e.x,t.x),Px(e.y,t.y)}function Vx(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Nx(e,t,a,i,o){return e-=t,e=mu(e,1/a,i),o!==void 0&&(e=mu(e,1/o,i)),e}function CE(e,t=0,a=1,i=.5,o,l=e,u=e){if(na.test(t)&&(t=parseFloat(t),t=Je(u.min,u.max,t/100)-u.min),typeof t!="number")return;let f=Je(l.min,l.max,i);e===l&&(f-=t),e.min=Nx(e.min,t,a,f,o),e.max=Nx(e.max,t,a,f,o)}function Bx(e,t,[a,i,o],l,u){CE(e,t[a],t[i],t[o],t.scale,l,u)}const AE=["x","scaleX","originX"],ME=["y","scaleY","originY"];function _x(e,t,a,i){Bx(e.x,t,AE,a?a.x:void 0,i?i.x:void 0),Bx(e.y,t,ME,a?a.y:void 0,i?i.y:void 0)}function $x(e){return e.translate===0&&e.scale===1}function D4(e){return $x(e.x)&&$x(e.y)}function Hx(e,t){return e.min===t.min&&e.max===t.max}function zE(e,t){return Hx(e.x,t.x)&&Hx(e.y,t.y)}function Gx(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function P4(e,t){return Gx(e.x,t.x)&&Gx(e.y,t.y)}function Ux(e){return _t(e.x)/_t(e.y)}function Ix(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class RE{constructor(){this.members=[]}add(t){Rm(this.members,t),t.scheduleRender()}remove(t){if(Lm(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const a=this.members[this.members.length-1];a&&this.promote(a)}}relegate(t){const a=this.members.findIndex(o=>t===o);if(a===0)return!1;let i;for(let o=a;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){i=l;break}}return i?(this.promote(i),!0):!1}promote(t,a){const i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.instance&&i.scheduleRender(),t.scheduleRender(),t.resumeFrom=i,a&&(t.resumeFrom.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:a,resumingFrom:i}=t;a.onExitComplete&&a.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function LE(e,t,a){let i="";const o=e.x.translate/t.x,l=e.y.translate/t.y,u=(a==null?void 0:a.z)||0;if((o||l||u)&&(i=`translate3d(${o}px, ${l}px, ${u}px) `),(t.x!==1||t.y!==1)&&(i+=`scale(${1/t.x}, ${1/t.y}) `),a){const{transformPerspective:m,rotate:g,rotateX:x,rotateY:y,skewX:v,skewY:S}=a;m&&(i=`perspective(${m}px) ${i}`),g&&(i+=`rotate(${g}deg) `),x&&(i+=`rotateX(${x}deg) `),y&&(i+=`rotateY(${y}deg) `),v&&(i+=`skewX(${v}deg) `),S&&(i+=`skewY(${S}deg) `)}const f=e.x.scale*t.x,p=e.y.scale*t.y;return(f!==1||p!==1)&&(i+=`scale(${f}, ${p})`),i||"none"}const Bp=["","X","Y","Z"],OE=1e3;let DE=0;function _p(e,t,a,i){const{latestValues:o}=t;o[e]&&(a[e]=o[e],t.setStaticValue(e,0),i&&(i[e]=0))}function V4(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const a=w4(t);if(window.MotionHasOptimisedAnimation(a,"transform")){const{layout:o,layoutId:l}=e.options;window.MotionCancelOptimisedAnimation(a,"transform",Be,!(o||l))}const{parent:i}=e;i&&!i.hasCheckedOptimisedAppear&&V4(i)}function N4({attachResizeListener:e,defaultParent:t,measureScroll:a,checkIsScrollRoot:i,resetTransform:o}){return class{constructor(u={},f=t==null?void 0:t()){this.id=DE++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(NE),this.nodes.forEach(HE),this.nodes.forEach(GE),this.nodes.forEach(BE)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new wE)}addEventListener(u,f){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Dm),this.eventHandlers.get(u).add(f)}notifyListeners(u,...f){const p=this.eventHandlers.get(u);p&&p.notify(...f)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=tg(u)&&!jj(u),this.instance=u;const{layoutId:f,layout:p,visualElement:m}=this.options;if(m&&!m.current&&m.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||f)&&(this.isLayoutDirty=!0),e){let g,x=0;const y=()=>this.root.updateBlockedByResize=!1;Be.read(()=>{x=window.innerWidth}),e(u,()=>{const v=window.innerWidth;v!==x&&(x=v,this.root.updateBlockedByResize=!0,g&&g(),g=SE(y,250),tu.hasAnimatedSinceResize&&(tu.hasAnimatedSinceResize=!1,this.nodes.forEach(Kx)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&m&&(f||p)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:x,hasRelativeLayoutChanged:y,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||m.getDefaultTransition()||KE,{onLayoutAnimationStart:k,onLayoutAnimationComplete:A}=m.getProps(),j=!this.targetLayout||!P4(this.targetLayout,v),R=!x&&y;if(this.options.layoutRoot||this.resumeFrom||R||x&&(j||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const C={...Wm(S,"layout"),onPlay:k,onComplete:A};(m.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C),this.setAnimationOrigin(g,R)}else x||Kx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Vn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(UE),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&V4(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const x=this.path[g];x.shouldResetTransform=!0,x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:f,layout:p}=this.options;if(f===void 0&&!p)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Fx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(qx);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach($E),this.nodes.forEach(PE),this.nodes.forEach(VE)):this.nodes.forEach(qx),this.clearAllSnapshots();const f=Kt.now();St.delta=ia(0,1e3/60,f-St.timestamp),St.timestamp=f,St.isProcessing=!0,Cp.update.process(St),Cp.preRender.process(St),Cp.render.process(St),St.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Jm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(_E),this.sharedNodes.forEach(IE)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Be.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Be.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!_t(this.snapshot.measuredBox.x)&&!_t(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=rt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(f=!1),f&&this.instance){const p=i(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:p,offset:a(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!D4(this.projectionDelta),p=this.getTransformTemplate(),m=p?p(this.latestValues,""):void 0,g=m!==this.prevTransformTemplateValue;u&&this.instance&&(f||Oi(this.latestValues)||g)&&(o(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const f=this.measurePageBox();let p=this.removeElementScroll(f);return u&&(p=this.removeTransform(p)),YE(p),{animationId:this.root.animationId,measuredBox:f,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var m;const{visualElement:u}=this.options;if(!u)return rt();const f=u.measureViewportBox();if(!(((m=this.scroll)==null?void 0:m.wasRoot)||this.path.some(XE))){const{scroll:g}=this.root;g&&(Hr(f.x,g.offset.x),Hr(f.y,g.offset.y))}return f}removeElementScroll(u){var p;const f=rt();if(kn(f,u),(p=this.scroll)!=null&&p.wasRoot)return f;for(let m=0;m<this.path.length;m++){const g=this.path[m],{scroll:x,options:y}=g;g!==this.root&&x&&y.layoutScroll&&(x.wasRoot&&kn(f,u),Hr(f.x,x.offset.x),Hr(f.y,x.offset.y))}return f}applyTransform(u,f=!1){const p=rt();kn(p,u);for(let m=0;m<this.path.length;m++){const g=this.path[m];!f&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Gr(p,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),Oi(g.latestValues)&&Gr(p,g.latestValues)}return Oi(this.latestValues)&&Gr(p,this.latestValues),p}removeTransform(u){const f=rt();kn(f,u);for(let p=0;p<this.path.length;p++){const m=this.path[p];if(!m.instance||!Oi(m.latestValues))continue;Vh(m.latestValues)&&m.updateSnapshot();const g=rt(),x=m.measurePageBox();kn(g,x),_x(f,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,g)}return Oi(this.latestValues)&&_x(f,this.latestValues),f}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==St.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var y;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==f;if(!(u||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:x}=this.options;if(!(!this.layout||!(g||x))){if(this.resolvedRelativeTargetAt=St.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=rt(),this.relativeTargetOrigin=rt(),Do(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),kn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=rt(),this.targetWithTransforms=rt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),tE(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):kn(this.target,this.layout.layoutBox),m4(this.target,this.targetDelta)):kn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=rt(),this.relativeTargetOrigin=rt(),Do(this.relativeTargetOrigin,this.target,v.target),kn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Vh(this.parent.latestValues)||h4(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var S;const u=this.getLead(),f=!!this.resumingFrom||this!==u;let p=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(p=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===St.timestamp&&(p=!1),p)return;const{layout:m,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||g))return;kn(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,y=this.treeScale.y;p7(this.layoutCorrected,this.treeScale,this.path,f),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=rt());const{target:v}=u;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Vx(this.prevProjectionDelta.x,this.projectionDelta.x),Vx(this.prevProjectionDelta.y,this.projectionDelta.y)),Oo(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==y||!Ix(this.projectionDelta.x,this.prevProjectionDelta.x)||!Ix(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var f;if((f=this.options.visualElement)==null||f.scheduleRender(),u){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ur(),this.projectionDelta=Ur(),this.projectionDeltaWithTransform=Ur()}setAnimationOrigin(u,f=!1){const p=this.snapshot,m=p?p.latestValues:{},g={...this.latestValues},x=Ur();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const y=rt(),v=p?p.source:void 0,S=this.layout?this.layout.source:void 0,k=v!==S,A=this.getStack(),j=!A||A.members.length<=1,R=!!(k&&!j&&this.options.crossfade===!0&&!this.path.some(qE));this.animationProgress=0;let C;this.mixTargetDelta=_=>{const M=_/1e3;Yx(x.x,u.x,M),Yx(x.y,u.y,M),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Do(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox),FE(this.relativeTarget,this.relativeTargetOrigin,y,M),C&&zE(this.relativeTarget,C)&&(this.isProjectionDirty=!1),C||(C=rt()),kn(C,this.relativeTarget)),k&&(this.animationValues=g,kE(g,m,this.latestValues,M,R,j)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=M},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){var f,p,m;this.notifyListeners("animationStart"),(f=this.currentAnimation)==null||f.stop(),(m=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||m.stop(),this.pendingAnimation&&(Vn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Be.update(()=>{tu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=On(0)),this.currentAnimation=yE(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),u.onUpdate&&u.onUpdate(g)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(OE),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:f,target:p,layout:m,latestValues:g}=u;if(!(!f||!p||!m)){if(this!==u&&this.layout&&m&&B4(this.options.animationType,this.layout.layoutBox,m.layoutBox)){p=this.target||rt();const x=_t(this.layout.layoutBox.x);p.x.min=u.target.x.min,p.x.max=p.x.min+x;const y=_t(this.layout.layoutBox.y);p.y.min=u.target.y.min,p.y.max=p.y.min+y}kn(f,p),Gr(f,g),Oo(this.projectionDeltaWithTransform,this.layoutCorrected,f,g)}}registerSharedNode(u,f){this.sharedNodes.has(u)||this.sharedNodes.set(u,new RE),this.sharedNodes.get(u).add(f);const m=f.options.initialPromotionConfig;f.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(f):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var f;const{layoutId:u}=this.options;return u?((f=this.getStack())==null?void 0:f.lead)||this:this}getPrevLead(){var f;const{layoutId:u}=this.options;return u?(f=this.getStack())==null?void 0:f.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:f,preserveFollowOpacity:p}={}){const m=this.getStack();m&&m.promote(this,p),u&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let f=!1;const{latestValues:p}=u;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(f=!0),!f)return;const m={};p.z&&_p("z",u,m,this.animationValues);for(let g=0;g<Bp.length;g++)_p(`rotate${Bp[g]}`,u,m,this.animationValues),_p(`skew${Bp[g]}`,u,m,this.animationValues);u.render();for(const g in m)u.setStaticValue(g,m[g]),this.animationValues&&(this.animationValues[g]=m[g]);u.scheduleRender()}applyProjectionStyles(u,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=eu(f==null?void 0:f.pointerEvents)||"",u.transform=p?p(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=eu(f==null?void 0:f.pointerEvents)||""),this.hasProjected&&!Oi(this.latestValues)&&(u.transform=p?p({},""):"none",this.hasProjected=!1);return}u.visibility="";const g=m.animationValues||m.latestValues;this.applyTransformsToTarget();let x=LE(this.projectionDeltaWithTransform,this.treeScale,g);p&&(x=p(g,x)),u.transform=x;const{x:y,y:v}=this.projectionDelta;u.transformOrigin=`${y.origin*100}% ${v.origin*100}% 0`,m.animationValues?u.opacity=m===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:u.opacity=m===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const S in Yo){if(g[S]===void 0)continue;const{correct:k,applyTo:A,isCSSVariable:j}=Yo[S],R=x==="none"?g[S]:k(g[S],m);if(A){const C=A.length;for(let _=0;_<C;_++)u[A[_]]=R}else j?this.options.visualElement.renderState.vars[S]=R:u[S]=R}this.options.layoutId&&(u.pointerEvents=m===this?eu(f==null?void 0:f.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var f;return(f=u.currentAnimation)==null?void 0:f.stop()}),this.root.nodes.forEach(Fx),this.root.sharedNodes.clear()}}}function PE(e){e.updateLayout()}function VE(e){var a;const t=((a=e.resumeFrom)==null?void 0:a.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:o}=e.layout,{animationType:l}=e.options,u=t.source!==e.layout.source;l==="size"?jn(x=>{const y=u?t.measuredBox[x]:t.layoutBox[x],v=_t(y);y.min=i[x].min,y.max=y.min+v}):B4(l,t.layoutBox,i)&&jn(x=>{const y=u?t.measuredBox[x]:t.layoutBox[x],v=_t(i[x]);y.max=y.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[x].max=e.relativeTarget[x].min+v)});const f=Ur();Oo(f,i,t.layoutBox);const p=Ur();u?Oo(p,e.applyTransform(o,!0),t.measuredBox):Oo(p,i,t.layoutBox);const m=!D4(f);let g=!1;if(!e.resumeFrom){const x=e.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:y,layout:v}=x;if(y&&v){const S=rt();Do(S,t.layoutBox,y.layoutBox);const k=rt();Do(k,i,v.layoutBox),P4(S,k)||(g=!0),x.options.layoutRoot&&(e.relativeTarget=k,e.relativeTargetOrigin=S,e.relativeParent=x)}}}e.notifyListeners("didUpdate",{layout:i,snapshot:t,delta:p,layoutDelta:f,hasLayoutChanged:m,hasRelativeLayoutChanged:g})}else if(e.isLead()){const{onExitComplete:i}=e.options;i&&i()}e.options.transition=void 0}function NE(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function BE(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function _E(e){e.clearSnapshot()}function Fx(e){e.clearMeasurements()}function qx(e){e.isLayoutDirty=!1}function $E(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Kx(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function HE(e){e.resolveTargetDelta()}function GE(e){e.calcProjection()}function UE(e){e.resetSkewAndRotation()}function IE(e){e.removeLeadSnapshot()}function Yx(e,t,a){e.translate=Je(t.translate,0,a),e.scale=Je(t.scale,1,a),e.origin=t.origin,e.originPoint=t.originPoint}function Xx(e,t,a,i){e.min=Je(t.min,a.min,i),e.max=Je(t.max,a.max,i)}function FE(e,t,a,i){Xx(e.x,t.x,a.x,i),Xx(e.y,t.y,a.y,i)}function qE(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const KE={duration:.45,ease:[.4,0,.1,1]},Wx=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Qx=Wx("applewebkit/")&&!Wx("chrome/")?Math.round:Xt;function Zx(e){e.min=Qx(e.min),e.max=Qx(e.max)}function YE(e){Zx(e.x),Zx(e.y)}function B4(e,t,a){return e==="position"||e==="preserve-aspect"&&!eE(Ux(t),Ux(a),.2)}function XE(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const WE=N4({attachResizeListener:(e,t)=>Xo(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),$p={current:void 0},_4=N4({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!$p.current){const e=new WE({});e.mount(window),e.setOptions({layoutScroll:!0}),$p.current=e}return $p.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),QE={pan:{Feature:mE},drag:{Feature:hE,ProjectionNode:_4,MeasureLayout:R4}};function Jx(e,t,a){const{props:i}=e;e.animationState&&i.whileHover&&e.animationState.setActive("whileHover",a==="Start");const o="onHover"+a,l=i[o];l&&Be.postRender(()=>l(t,ll(t)))}class ZE extends ui{mount(){const{current:t}=this.node;t&&(this.unmount=dj(t,(a,i)=>(Jx(this.node,i,"Start"),o=>Jx(this.node,o,"End"))))}unmount(){}}class JE extends ui{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=rl(Xo(this.node.current,"focus",()=>this.onFocus()),Xo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function ey(e,t,a){const{props:i}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&i.whileTap&&e.animationState.setActive("whileTap",a==="Start");const o="onTap"+(a==="End"?"":a),l=i[o];l&&Be.postRender(()=>l(t,ll(t)))}class eC extends ui{mount(){const{current:t}=this.node;t&&(this.unmount=mj(t,(a,i)=>(ey(this.node,i,"Start"),(o,{success:l})=>ey(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Uh=new WeakMap,Hp=new WeakMap,tC=e=>{const t=Uh.get(e.target);t&&t(e)},nC=e=>{e.forEach(tC)};function aC({root:e,...t}){const a=e||document;Hp.has(a)||Hp.set(a,{});const i=Hp.get(a),o=JSON.stringify(t);return i[o]||(i[o]=new IntersectionObserver(nC,{root:e,...t})),i[o]}function iC(e,t,a){const i=aC(t);return Uh.set(e,a),i.observe(e),()=>{Uh.delete(e),i.unobserve(e)}}const rC={some:0,all:1};class sC extends ui{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:a,margin:i,amount:o="some",once:l}=t,u={root:a?a.current:void 0,rootMargin:i,threshold:typeof o=="number"?o:rC[o]},f=p=>{const{isIntersecting:m}=p;if(this.isInView===m||(this.isInView=m,l&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:g,onViewportLeave:x}=this.node.getProps(),y=m?g:x;y&&y(p)};return iC(this.node.current,u,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:a}=this.node;["amount","margin","root"].some(oC(t,a))&&this.startObserver()}unmount(){}}function oC({viewport:e={}},{viewport:t={}}={}){return a=>e[a]!==t[a]}const lC={inView:{Feature:sC},tap:{Feature:eC},focus:{Feature:JE},hover:{Feature:ZE}},cC={layout:{ProjectionNode:_4,MeasureLayout:R4}},uC={...Y7,...lC,...QE,...cC},ie=u7(uC,T7),dC=50,ty=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),fC=()=>({time:0,x:ty(),y:ty()}),pC={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function ny(e,t,a,i){const o=a[t],{length:l,position:u}=pC[t],f=o.current,p=a.time;o.current=e[`scroll${u}`],o.scrollLength=e[`scroll${l}`]-e[`client${l}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=Wr(0,o.scrollLength,o.current);const m=i-p;o.velocity=m>dC?0:Pm(o.current-f,m)}function hC(e,t,a){ny(e,"x",t,a),ny(e,"y",t,a),t.time=a}function mC(e,t){const a={x:0,y:0};let i=e;for(;i&&i!==t;)if(Zm(i))a.x+=i.offsetLeft,a.y+=i.offsetTop,i=i.offsetParent;else if(i.tagName==="svg"){const o=i.getBoundingClientRect();i=i.parentElement;const l=i.getBoundingClientRect();a.x+=o.left-l.left,a.y+=o.top-l.top}else if(i instanceof SVGGraphicsElement){const{x:o,y:l}=i.getBBox();a.x+=o,a.y+=l;let u=null,f=i.parentNode;for(;!u;)f.tagName==="svg"&&(u=f),f=i.parentNode;i=u}else break;return a}const Ih={start:0,center:.5,end:1};function ay(e,t,a=0){let i=0;if(e in Ih&&(e=Ih[e]),typeof e=="string"){const o=parseFloat(e);e.endsWith("px")?i=o:e.endsWith("%")?e=o/100:e.endsWith("vw")?i=o/100*document.documentElement.clientWidth:e.endsWith("vh")?i=o/100*document.documentElement.clientHeight:e=o}return typeof e=="number"&&(i=t*e),a+i}const gC=[0,0];function bC(e,t,a,i){let o=Array.isArray(e)?e:gC,l=0,u=0;return typeof e=="number"?o=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?o=e.split(" "):o=[e,Ih[e]?e:"0"]),l=ay(o[0],a,i),u=ay(o[1],t),l-u}const xC={All:[[0,0],[1,1]]},yC={x:0,y:0};function vC(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function wC(e,t,a){const{offset:i=xC.All}=a,{target:o=e,axis:l="y"}=a,u=l==="y"?"height":"width",f=o!==e?mC(o,e):yC,p=o===e?{width:e.scrollWidth,height:e.scrollHeight}:vC(o),m={width:e.clientWidth,height:e.clientHeight};t[l].offset.length=0;let g=!t[l].interpolate;const x=i.length;for(let y=0;y<x;y++){const v=bC(i[y],m[u],p[u],f[l]);!g&&v!==t[l].interpolatorOffsets[y]&&(g=!0),t[l].offset[y]=v}g&&(t[l].interpolate=Fm(t[l].offset,z5(i),{clamp:!1}),t[l].interpolatorOffsets=[...t[l].offset]),t[l].progress=ia(0,1,t[l].interpolate(t[l].current))}function SC(e,t=e,a){if(a.x.targetOffset=0,a.y.targetOffset=0,t!==e){let i=t;for(;i&&i!==e;)a.x.targetOffset+=i.offsetLeft,a.y.targetOffset+=i.offsetTop,i=i.offsetParent}a.x.targetLength=t===e?t.scrollWidth:t.clientWidth,a.y.targetLength=t===e?t.scrollHeight:t.clientHeight,a.x.containerLength=e.clientWidth,a.y.containerLength=e.clientHeight}function TC(e,t,a,i={}){return{measure:o=>{SC(e,i.target,a),hC(e,a,o),(i.offset||i.target)&&wC(e,a,i)},notify:()=>t(a)}}const bo=new WeakMap,iy=new WeakMap,Gp=new WeakMap,ry=e=>e===document.scrollingElement?window:e;function $4(e,{container:t=document.scrollingElement,...a}={}){if(!t)return Xt;let i=Gp.get(t);i||(i=new Set,Gp.set(t,i));const o=fC(),l=TC(t,e,o,a);if(i.add(l),!bo.has(t)){const f=()=>{for(const x of i)x.measure(St.timestamp);Be.preUpdate(p)},p=()=>{for(const x of i)x.notify()},m=()=>Be.read(f);bo.set(t,m);const g=ry(t);window.addEventListener("resize",m,{passive:!0}),t!==document.documentElement&&iy.set(t,kj(t,m)),g.addEventListener("scroll",m,{passive:!0}),m()}const u=bo.get(t);return Be.read(u,!1,!0),()=>{var m;Vn(u);const f=Gp.get(t);if(!f||(f.delete(l),f.size))return;const p=bo.get(t);bo.delete(t),p&&(ry(t).removeEventListener("scroll",p),(m=iy.get(t))==null||m(),window.removeEventListener("resize",p))}}const sy=new Map;function kC(e){const t={value:0},a=$4(i=>{t.value=i[e.axis].progress*100},e);return{currentTime:t,cancel:a}}function H4({source:e,container:t,...a}){const{axis:i}=a;e&&(t=e);const o=sy.get(t)??new Map;sy.set(t,o);const l=a.target??"self",u=o.get(l)??{},f=i+(a.offset??[]).join(",");return u[f]||(u[f]=!a.target&&D5()?new ScrollTimeline({source:t,axis:i}):kC({container:t,...a})),u[f]}function jC(e,t){const a=H4(t);return e.attachTimeline({timeline:t.target?void 0:a,observe:i=>(i.pause(),Q5(o=>{i.time=i.duration*o},a))})}function EC(e){return e.length===2}function CC(e,t){return EC(e)?$4(a=>{e(a[t.axis].progress,a)},t):Q5(e,H4(t))}function AC(e,{axis:t="y",container:a=document.scrollingElement,...i}={}){if(!a)return Xt;const o={axis:t,container:a,...i};return typeof e=="function"?CC(e,o):jC(e,o)}const MC=()=>({scrollX:On(0),scrollY:On(0),scrollXProgress:On(0),scrollYProgress:On(0)}),Rc=e=>e?!e.current:!1;function zC({container:e,target:t,...a}={}){const i=cs(MC),o=E.useRef(null),l=E.useRef(!1),u=E.useCallback(()=>(o.current=AC((f,{x:p,y:m})=>{i.scrollX.set(p.current),i.scrollXProgress.set(p.progress),i.scrollY.set(m.current),i.scrollYProgress.set(m.progress)},{...a,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0}),()=>{var f;(f=o.current)==null||f.call(o)}),[e,t,JSON.stringify(a.offset)]);return _u(()=>{if(l.current=!1,Rc(e)||Rc(t)){l.current=!0;return}else return u()},[u]),E.useEffect(()=>{if(l.current)return Io(!Rc(e)),Io(!Rc(t)),u()},[u]),i}function RC(e){const t=cs(()=>On(e)),{isStatic:a}=E.useContext(Gu);if(a){const[,i]=E.useState(e);E.useEffect(()=>t.on("change",i),[])}return t}function G4(e,t){const a=RC(t()),i=()=>a.set(t());return i(),_u(()=>{const o=()=>Be.preRender(i,!1,!0),l=e.map(u=>u.on("change",o));return()=>{l.forEach(u=>u()),Vn(i)}}),a}function LC(e){Ro.current=[],e();const t=G4(Ro.current,e);return Ro.current=void 0,t}function oy(e,t,a,i){if(typeof e=="function")return LC(e);const o=typeof t=="function"?t:Ej(t,a,i);return Array.isArray(e)?ly(e,o):ly([e],([l])=>o(l))}function ly(e,t){const a=cs(()=>[]);return G4(e,()=>{a.length=0;const i=e.length;for(let o=0;o<i;o++)a[o]=e[o].get();return t(a)})}var U4={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},cy=Ce.createContext&&Ce.createContext(U4),OC=["attr","size","title"];function DC(e,t){if(e==null)return{};var a=PC(e,t),i,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)i=l[o],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}function PC(e,t){if(e==null)return{};var a={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(t.indexOf(i)>=0)continue;a[i]=e[i]}return a}function gu(){return gu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},gu.apply(this,arguments)}function uy(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),a.push.apply(a,i)}return a}function bu(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?uy(Object(a),!0).forEach(function(i){VC(e,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):uy(Object(a)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))})}return e}function VC(e,t,a){return t=NC(t),t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function NC(e){var t=BC(e,"string");return typeof t=="symbol"?t:t+""}function BC(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var i=a.call(e,t);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function I4(e){return e&&e.map((t,a)=>Ce.createElement(t.tag,bu({key:a},t.attr),I4(t.child)))}function be(e){return t=>Ce.createElement(_C,gu({attr:bu({},e.attr)},t),I4(e.child))}function _C(e){var t=a=>{var{attr:i,size:o,title:l}=e,u=DC(e,OC),f=o||a.size||"1em",p;return a.className&&(p=a.className),e.className&&(p=(p?p+" ":"")+e.className),Ce.createElement("svg",gu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,i,u,{className:p,style:bu(bu({color:e.color||a.color},a.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&Ce.createElement("title",null,l),e.children)};return cy!==void 0?Ce.createElement(cy.Consumer,null,a=>t(a)):t(U4)}function Nn(e){return be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function $C(e){return be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(e)}function HC(e){return be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56l72-144zm511.98 160c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02zM440 320l72-144 72 144H440zm88 128H352V153.25c23.51-10.29 41.16-31.48 46.39-57.25H528c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H383.64C369.04 12.68 346.09 0 320 0s-49.04 12.68-63.64 32H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h129.61c5.23 25.76 22.87 46.96 46.39 57.25V448H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"},child:[]}]})(e)}function qu(e){return be({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"},child:[]}]})(e)}function GC(e){return be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M256.47 216.77l86.73 109.18s-16.6 102.36-76.57 150.12C206.66 523.85 0 510.19 0 510.19s3.8-23.14 11-55.43l94.62-112.17c3.97-4.7-.87-11.62-6.65-9.5l-60.4 22.09c14.44-41.66 32.72-80.04 54.6-97.47 59.97-47.76 163.3-40.94 163.3-40.94zM636.53 31.03l-19.86-25c-5.49-6.9-15.52-8.05-22.41-2.56l-232.48 177.8-34.14-42.97c-5.09-6.41-15.14-5.21-18.59 2.21l-25.33 54.55 86.73 109.18 58.8-12.45c8-1.69 11.42-11.2 6.34-17.6l-34.09-42.92 232.48-177.8c6.89-5.48 8.04-15.53 2.55-22.44z"},child:[]}]})(e)}function F4(e){return be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(e)}function cl(e){return be({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z"},child:[]}]})(e)}function UC(e){return be({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"},child:[]}]})(e)}function dy(e){return be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(e)}function IC(e){return be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(e)}function Gi(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(e)}function Tt(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function Ft(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function q4(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(e)}function dg(e){return be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(e)}function fy(e){return be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"},child:[]}]})(e)}function FC(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)}function Wo(e){return be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"},child:[]}]})(e)}function qC(e){return be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M104 96H56c-13.3 0-24 10.7-24 24v104H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h24v104c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm528 128h-24V120c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h24c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM456 32h-48c-13.3 0-24 10.7-24 24v168H256V56c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h128v168c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24z"},child:[]}]})(e)}function ri(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function xu(e){return be({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M310.706 413.765c-1.314-6.63-7.835-10.872-14.424-9.369-10.692 2.439-27.422 5.413-45.426 5.413-56.763 0-101.929-34.79-121.461-85.449h113.689a12 12 0 0 0 11.708-9.369l6.373-28.36c1.686-7.502-4.019-14.631-11.708-14.631H115.22c-1.21-14.328-1.414-28.287.137-42.245H261.95a12 12 0 0 0 11.723-9.434l6.512-29.755c1.638-7.484-4.061-14.566-11.723-14.566H130.184c20.633-44.991 62.69-75.03 117.619-75.03 14.486 0 28.564 2.25 37.851 4.145 6.216 1.268 12.347-2.498 14.002-8.623l11.991-44.368c1.822-6.741-2.465-13.616-9.326-14.917C290.217 34.912 270.71 32 249.635 32 152.451 32 74.03 92.252 45.075 176H12c-6.627 0-12 5.373-12 12v29.755c0 6.627 5.373 12 12 12h21.569c-1.009 13.607-1.181 29.287-.181 42.245H12c-6.627 0-12 5.373-12 12v28.36c0 6.627 5.373 12 12 12h30.114C67.139 414.692 145.264 480 249.635 480c26.301 0 48.562-4.544 61.101-7.788 6.167-1.595 10.027-7.708 8.788-13.957l-8.818-44.49z"},child:[]}]})(e)}function KC(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"},child:[]}]})(e)}function py(e){return be({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z"},child:[]}]})(e)}function Fh(e){return be({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(e)}function YC(e){return be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(e)}function K4(e){return be({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M571.31 193.94l-22.63-22.63c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31-28.9-28.9c5.63-21.31.36-44.9-16.35-61.61l-45.25-45.25c-62.48-62.48-163.79-62.48-226.28 0l90.51 45.25v18.75c0 16.97 6.74 33.25 18.75 45.25l49.14 49.14c16.71 16.71 40.3 21.98 61.61 16.35l28.9 28.9-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l90.51-90.51c6.23-6.24 6.23-16.37-.02-22.62zm-286.72-15.2c-3.7-3.7-6.84-7.79-9.85-11.95L19.64 404.96c-25.57 23.88-26.26 64.19-1.53 88.93s65.05 24.05 88.93-1.53l238.13-255.07c-3.96-2.91-7.9-5.87-11.44-9.41l-49.14-49.14z"},child:[]}]})(e)}function XC(e){return be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"},child:[]}]})(e)}function Y4(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"},child:[]}]})(e)}function X4(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M475.115 163.781L336 252.309v-68.28c0-18.916-20.931-30.399-36.885-20.248L160 252.309V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h464c13.255 0 24-10.745 24-24V184.029c0-18.917-20.931-30.399-36.885-20.248z"},child:[]}]})(e)}function hy(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(e)}function yu(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"},child:[]}]})(e)}function WC(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm173.696 119.559l-63.399 63.399c-10.987-18.559-26.67-34.252-45.255-45.255l63.399-63.399a218.396 218.396 0 0 1 45.255 45.255zM256 352c-53.019 0-96-42.981-96-96s42.981-96 96-96 96 42.981 96 96-42.981 96-96 96zM127.559 82.304l63.399 63.399c-18.559 10.987-34.252 26.67-45.255 45.255l-63.399-63.399a218.372 218.372 0 0 1 45.255-45.255zM82.304 384.441l63.399-63.399c10.987 18.559 26.67 34.252 45.255 45.255l-63.399 63.399a218.396 218.396 0 0 1-45.255-45.255zm302.137 45.255l-63.399-63.399c18.559-10.987 34.252-26.67 45.255-45.255l63.399 63.399a218.403 218.403 0 0 1-45.255 45.255z"},child:[]}]})(e)}function Po(e){return be({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(e)}function QC(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(e)}function Zr(e){return be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"},child:[]}]})(e)}function ZC(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function W4(e){return be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"},child:[]}]})(e)}function JC(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(e)}function eA(e){return be({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M568.25 192c-29.04.13-135.01 6.16-213.84 83-33.12 29.63-53.36 63.3-66.41 94.86-13.05-31.56-33.29-65.23-66.41-94.86-78.83-76.84-184.8-82.87-213.84-83-4.41-.02-7.79 3.4-7.75 7.82.23 27.92 7.14 126.14 88.77 199.3C172.79 480.94 256 480 288 480s115.19.95 199.23-80.88c81.64-73.17 88.54-171.38 88.77-199.3.04-4.42-3.34-7.84-7.75-7.82zM287.98 302.6c12.82-18.85 27.6-35.78 44.09-50.52 19.09-18.61 39.58-33.3 60.26-45.18-16.44-70.5-51.72-133.05-96.73-172.22-4.11-3.58-11.02-3.58-15.14 0-44.99 39.14-80.27 101.63-96.74 172.07 20.37 11.7 40.5 26.14 59.22 44.39a282.768 282.768 0 0 1 45.04 51.46z"},child:[]}]})(e)}function tA(e){return be({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function nA(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"},child:[]}]})(e)}function aA(e){return be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"},child:[]}]})(e)}function iA(e){return be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function vu(e){return be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(e)}function rA(e){return be({attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(e)}function sA(e){return be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"},child:[]}]})(e)}const oA=(e,t,a,i)=>{var l,u,f,p;const o=[a,{code:t,...i||{}}];if((u=(l=e==null?void 0:e.services)==null?void 0:l.logger)!=null&&u.forward)return e.services.logger.forward(o,"warn","react-i18next::",!0);_i(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),(p=(f=e==null?void 0:e.services)==null?void 0:f.logger)!=null&&p.warn?e.services.logger.warn(...o):console!=null&&console.warn&&console.warn(...o)},my={},qh=(e,t,a,i)=>{_i(a)&&my[a]||(_i(a)&&(my[a]=new Date),oA(e,t,a,i))},Q4=(e,t)=>()=>{if(e.isInitialized)t();else{const a=()=>{setTimeout(()=>{e.off("initialized",a)},0),t()};e.on("initialized",a)}},Kh=(e,t,a)=>{e.loadNamespaces(t,Q4(e,a))},gy=(e,t,a,i)=>{if(_i(a)&&(a=[a]),e.options.preload&&e.options.preload.indexOf(t)>-1)return Kh(e,a,i);a.forEach(o=>{e.options.ns.indexOf(o)<0&&e.options.ns.push(o)}),e.loadLanguages(t,Q4(e,i))},lA=(e,t,a={})=>!t.languages||!t.languages.length?(qh(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0):t.hasLoadedNamespace(e,{lng:a.lng,precheck:(i,o)=>{if(a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!o(i.isLanguageChangingTo,e))return!1}}),_i=e=>typeof e=="string",cA=e=>typeof e=="object"&&e!==null,uA=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,dA={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},fA=e=>dA[e],pA=e=>e.replace(uA,fA);let Yh={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:pA};const hA=(e={})=>{Yh={...Yh,...e}},mA=()=>Yh;let Z4;const gA=e=>{Z4=e},bA=()=>Z4,xA={type:"3rdParty",init(e){hA(e.options.react),gA(e)}},yA=E.createContext();class vA{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(a=>{this.usedNamespaces[a]||(this.usedNamespaces[a]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const wA=(e,t)=>{const a=E.useRef();return E.useEffect(()=>{a.current=e},[e,t]),a.current},J4=(e,t,a,i)=>e.getFixedT(t,a,i),SA=(e,t,a,i)=>E.useCallback(J4(e,t,a,i),[e,t,a,i]),Ue=(e,t={})=>{var _,M,D,N;const{i18n:a}=t,{i18n:i,defaultNS:o}=E.useContext(yA)||{},l=a||i||bA();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new vA),!l){qh(l,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const V=(W,H)=>_i(H)?H:cA(H)&&_i(H.defaultValue)?H.defaultValue:Array.isArray(W)?W[W.length-1]:W,q=[V,{},!1];return q.t=V,q.i18n={},q.ready=!1,q}(_=l.options.react)!=null&&_.wait&&qh(l,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const u={...mA(),...l.options.react,...t},{useSuspense:f,keyPrefix:p}=u;let m=o||((M=l.options)==null?void 0:M.defaultNS);m=_i(m)?[m]:m||["translation"],(N=(D=l.reportNamespaces).addUsedNamespaces)==null||N.call(D,m);const g=(l.isInitialized||l.initializedStoreOnce)&&m.every(V=>lA(V,l,u)),x=SA(l,t.lng||null,u.nsMode==="fallback"?m:m[0],p),y=()=>x,v=()=>J4(l,t.lng||null,u.nsMode==="fallback"?m:m[0],p),[S,k]=E.useState(y);let A=m.join();t.lng&&(A=`${t.lng}${A}`);const j=wA(A),R=E.useRef(!0);E.useEffect(()=>{const{bindI18n:V,bindI18nStore:q}=u;R.current=!0,!g&&!f&&(t.lng?gy(l,t.lng,m,()=>{R.current&&k(v)}):Kh(l,m,()=>{R.current&&k(v)})),g&&j&&j!==A&&R.current&&k(v);const W=()=>{R.current&&k(v)};return V&&(l==null||l.on(V,W)),q&&(l==null||l.store.on(q,W)),()=>{R.current=!1,l&&V&&(V==null||V.split(" ").forEach(H=>l.off(H,W))),q&&l&&q.split(" ").forEach(H=>l.store.off(H,W))}},[l,A]),E.useEffect(()=>{R.current&&g&&k(y)},[l,p,g]);const C=[S,l,g];if(C.t=S,C.i18n=l,C.ready=g,g||!g&&!f)return C;throw new Promise(V=>{t.lng?gy(l,t.lng,m,()=>V()):Kh(l,m,()=>V())})},xe=e=>typeof e=="string",xo=()=>{let e,t;const a=new Promise((i,o)=>{e=i,t=o});return a.resolve=e,a.reject=t,a},by=e=>e==null?"":""+e,TA=(e,t,a)=>{e.forEach(i=>{t[i]&&(a[i]=t[i])})},kA=/###/g,xy=e=>e&&e.indexOf("###")>-1?e.replace(kA,"."):e,yy=e=>!e||xe(e),Vo=(e,t,a)=>{const i=xe(t)?t.split("."):t;let o=0;for(;o<i.length-1;){if(yy(e))return{};const l=xy(i[o]);!e[l]&&a&&(e[l]=new a),Object.prototype.hasOwnProperty.call(e,l)?e=e[l]:e={},++o}return yy(e)?{}:{obj:e,k:xy(i[o])}},vy=(e,t,a)=>{const{obj:i,k:o}=Vo(e,t,Object);if(i!==void 0||t.length===1){i[o]=a;return}let l=t[t.length-1],u=t.slice(0,t.length-1),f=Vo(e,u,Object);for(;f.obj===void 0&&u.length;)l=`${u[u.length-1]}.${l}`,u=u.slice(0,u.length-1),f=Vo(e,u,Object),f!=null&&f.obj&&typeof f.obj[`${f.k}.${l}`]<"u"&&(f.obj=void 0);f.obj[`${f.k}.${l}`]=a},jA=(e,t,a,i)=>{const{obj:o,k:l}=Vo(e,t,Object);o[l]=o[l]||[],o[l].push(a)},wu=(e,t)=>{const{obj:a,k:i}=Vo(e,t);if(a&&Object.prototype.hasOwnProperty.call(a,i))return a[i]},EA=(e,t,a)=>{const i=wu(e,a);return i!==void 0?i:wu(t,a)},ew=(e,t,a)=>{for(const i in t)i!=="__proto__"&&i!=="constructor"&&(i in e?xe(e[i])||e[i]instanceof String||xe(t[i])||t[i]instanceof String?a&&(e[i]=t[i]):ew(e[i],t[i],a):e[i]=t[i]);return e},Rr=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var CA={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const AA=e=>xe(e)?e.replace(/[&<>"'\/]/g,t=>CA[t]):e;class MA{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const a=this.regExpMap.get(t);if(a!==void 0)return a;const i=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,i),this.regExpQueue.push(t),i}}const zA=[" ",",","?","!",";"],RA=new MA(20),LA=(e,t,a)=>{t=t||"",a=a||"";const i=zA.filter(u=>t.indexOf(u)<0&&a.indexOf(u)<0);if(i.length===0)return!0;const o=RA.getRegExp(`(${i.map(u=>u==="?"?"\\?":u).join("|")})`);let l=!o.test(e);if(!l){const u=e.indexOf(a);u>0&&!o.test(e.substring(0,u))&&(l=!0)}return l},Xh=function(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;const i=t.split(a);let o=e;for(let l=0;l<i.length;){if(!o||typeof o!="object")return;let u,f="";for(let p=l;p<i.length;++p)if(p!==l&&(f+=a),f+=i[p],u=o[f],u!==void 0){if(["string","number","boolean"].indexOf(typeof u)>-1&&p<i.length-1)continue;l+=p-l+1;break}o=u}return o},Su=e=>e==null?void 0:e.replace("_","-"),OA={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){var a,i;(i=(a=console==null?void 0:console[e])==null?void 0:a.apply)==null||i.call(a,console,t)}};class Tu{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,a)}init(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=a.prefix||"i18next:",this.logger=t||OA,this.options=a,this.debug=a.debug}log(){for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return this.forward(a,"log","",!0)}warn(){for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return this.forward(a,"warn","",!0)}error(){for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return this.forward(a,"error","")}deprecate(){for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return this.forward(a,"warn","WARNING DEPRECATED: ",!0)}forward(t,a,i,o){return o&&!this.debug?null:(xe(t[0])&&(t[0]=`${i}${this.prefix} ${t[0]}`),this.logger[a](t))}create(t){return new Tu(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new Tu(this.logger,t)}}var Zn=new Tu;class Ku{constructor(){this.observers={}}on(t,a){return t.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const o=this.observers[i].get(a)||0;this.observers[i].set(a,o+1)}),this}off(t,a){if(this.observers[t]){if(!a){delete this.observers[t];return}this.observers[t].delete(a)}}emit(t){for(var a=arguments.length,i=new Array(a>1?a-1:0),o=1;o<a;o++)i[o-1]=arguments[o];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(u=>{let[f,p]=u;for(let m=0;m<p;m++)f(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(u=>{let[f,p]=u;for(let m=0;m<p;m++)f.apply(f,[t,...i])})}}class wy extends Ku{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=a,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const a=this.options.ns.indexOf(t);a>-1&&this.options.ns.splice(a,1)}getResource(t,a,i){var m,g;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,u=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let f;t.indexOf(".")>-1?f=t.split("."):(f=[t,a],i&&(Array.isArray(i)?f.push(...i):xe(i)&&l?f.push(...i.split(l)):f.push(i)));const p=wu(this.data,f);return!p&&!a&&!i&&t.indexOf(".")>-1&&(t=f[0],a=f[1],i=f.slice(2).join(".")),p||!u||!xe(i)?p:Xh((g=(m=this.data)==null?void 0:m[t])==null?void 0:g[a],i,l)}addResource(t,a,i,o){let l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const u=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator;let f=[t,a];i&&(f=f.concat(u?i.split(u):i)),t.indexOf(".")>-1&&(f=t.split("."),o=a,a=f[1]),this.addNamespaces(a),vy(this.data,f,o),l.silent||this.emit("added",t,a,i,o)}addResources(t,a,i){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const l in i)(xe(i[l])||Array.isArray(i[l]))&&this.addResource(t,a,l,i[l],{silent:!0});o.silent||this.emit("added",t,a,i)}addResourceBundle(t,a,i,o,l){let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},f=[t,a];t.indexOf(".")>-1&&(f=t.split("."),o=i,i=a,a=f[1]),this.addNamespaces(a);let p=wu(this.data,f)||{};u.skipCopy||(i=JSON.parse(JSON.stringify(i))),o?ew(p,i,l):p={...p,...i},vy(this.data,f,p),u.silent||this.emit("added",t,a,i)}removeResourceBundle(t,a){this.hasResourceBundle(t,a)&&delete this.data[t][a],this.removeNamespaces(a),this.emit("removed",t,a)}hasResourceBundle(t,a){return this.getResource(t,a)!==void 0}getResourceBundle(t,a){return a||(a=this.options.defaultNS),this.getResource(t,a)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const a=this.getDataByLanguage(t);return!!(a&&Object.keys(a)||[]).find(o=>a[o]&&Object.keys(a[o]).length>0)}toJSON(){return this.data}}var tw={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,a,i,o){return e.forEach(l=>{var u;t=((u=this.processors[l])==null?void 0:u.process(t,a,i,o))??t}),t}};const Sy={},Ty=e=>!xe(e)&&typeof e!="boolean"&&typeof e!="number";class ku extends Ku{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),TA(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=a,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Zn.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const i=this.resolve(t,a);return(i==null?void 0:i.res)!==void 0}extractFromKey(t,a){let i=a.nsSeparator!==void 0?a.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const o=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator;let l=a.ns||this.options.defaultNS||[];const u=i&&t.indexOf(i)>-1,f=!this.options.userDefinedKeySeparator&&!a.keySeparator&&!this.options.userDefinedNsSeparator&&!a.nsSeparator&&!LA(t,i,o);if(u&&!f){const p=t.match(this.interpolator.nestingRegexp);if(p&&p.length>0)return{key:t,namespaces:xe(l)?[l]:l};const m=t.split(i);(i!==o||i===o&&this.options.ns.indexOf(m[0])>-1)&&(l=m.shift()),t=m.join(o)}return{key:t,namespaces:xe(l)?[l]:l}}translate(t,a,i){if(typeof a!="object"&&this.options.overloadTranslationOptionHandler&&(a=this.options.overloadTranslationOptionHandler(arguments)),typeof a=="object"&&(a={...a}),a||(a={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const o=a.returnDetails!==void 0?a.returnDetails:this.options.returnDetails,l=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,{key:u,namespaces:f}=this.extractFromKey(t[t.length-1],a),p=f[f.length-1],m=a.lng||this.language,g=a.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((m==null?void 0:m.toLowerCase())==="cimode"){if(g){const H=a.nsSeparator||this.options.nsSeparator;return o?{res:`${p}${H}${u}`,usedKey:u,exactUsedKey:u,usedLng:m,usedNS:p,usedParams:this.getUsedParamsDetails(a)}:`${p}${H}${u}`}return o?{res:u,usedKey:u,exactUsedKey:u,usedLng:m,usedNS:p,usedParams:this.getUsedParamsDetails(a)}:u}const x=this.resolve(t,a);let y=x==null?void 0:x.res;const v=(x==null?void 0:x.usedKey)||u,S=(x==null?void 0:x.exactUsedKey)||u,k=["[object Number]","[object Function]","[object RegExp]"],A=a.joinArrays!==void 0?a.joinArrays:this.options.joinArrays,j=!this.i18nFormat||this.i18nFormat.handleAsObject,R=a.count!==void 0&&!xe(a.count),C=ku.hasDefaultValue(a),_=R?this.pluralResolver.getSuffix(m,a.count,a):"",M=a.ordinal&&R?this.pluralResolver.getSuffix(m,a.count,{ordinal:!1}):"",D=R&&!a.ordinal&&a.count===0,N=D&&a[`defaultValue${this.options.pluralSeparator}zero`]||a[`defaultValue${_}`]||a[`defaultValue${M}`]||a.defaultValue;let V=y;j&&!y&&C&&(V=N);const q=Ty(V),W=Object.prototype.toString.apply(V);if(j&&V&&q&&k.indexOf(W)<0&&!(xe(A)&&Array.isArray(V))){if(!a.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const H=this.options.returnedObjectHandler?this.options.returnedObjectHandler(v,V,{...a,ns:f}):`key '${u} (${this.language})' returned an object instead of string.`;return o?(x.res=H,x.usedParams=this.getUsedParamsDetails(a),x):H}if(l){const H=Array.isArray(V),ee=H?[]:{},se=H?S:v;for(const de in V)if(Object.prototype.hasOwnProperty.call(V,de)){const ue=`${se}${l}${de}`;C&&!y?ee[de]=this.translate(ue,{...a,defaultValue:Ty(N)?N[de]:void 0,joinArrays:!1,ns:f}):ee[de]=this.translate(ue,{...a,joinArrays:!1,ns:f}),ee[de]===ue&&(ee[de]=V[de])}y=ee}}else if(j&&xe(A)&&Array.isArray(y))y=y.join(A),y&&(y=this.extendTranslation(y,t,a,i));else{let H=!1,ee=!1;!this.isValidLookup(y)&&C&&(H=!0,y=N),this.isValidLookup(y)||(ee=!0,y=u);const de=(a.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&ee?void 0:y,ue=C&&N!==y&&this.options.updateMissing;if(ee||H||ue){if(this.logger.log(ue?"updateKey":"missingKey",m,p,u,ue?N:y),l){const Q=this.resolve(u,{...a,keySeparator:!1});Q&&Q.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let U=[];const P=this.languageUtils.getFallbackCodes(this.options.fallbackLng,a.lng||this.language);if(this.options.saveMissingTo==="fallback"&&P&&P[0])for(let Q=0;Q<P.length;Q++)U.push(P[Q]);else this.options.saveMissingTo==="all"?U=this.languageUtils.toResolveHierarchy(a.lng||this.language):U.push(a.lng||this.language);const $=(Q,z,X)=>{var ae;const ne=C&&X!==y?X:de;this.options.missingKeyHandler?this.options.missingKeyHandler(Q,p,z,ne,ue,a):(ae=this.backendConnector)!=null&&ae.saveMissing&&this.backendConnector.saveMissing(Q,p,z,ne,ue,a),this.emit("missingKey",Q,p,z,y)};this.options.saveMissing&&(this.options.saveMissingPlurals&&R?U.forEach(Q=>{const z=this.pluralResolver.getSuffixes(Q,a);D&&a[`defaultValue${this.options.pluralSeparator}zero`]&&z.indexOf(`${this.options.pluralSeparator}zero`)<0&&z.push(`${this.options.pluralSeparator}zero`),z.forEach(X=>{$([Q],u+X,a[`defaultValue${X}`]||N)})}):$(U,u,N))}y=this.extendTranslation(y,t,a,x,i),ee&&y===u&&this.options.appendNamespaceToMissingKey&&(y=`${p}:${u}`),(ee||H)&&this.options.parseMissingKeyHandler&&(y=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${p}:${u}`:u,H?y:void 0))}return o?(x.res=y,x.usedParams=this.getUsedParamsDetails(a),x):y}extendTranslation(t,a,i,o,l){var m,g;var u=this;if((m=this.i18nFormat)!=null&&m.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const x=xe(t)&&(((g=i==null?void 0:i.interpolation)==null?void 0:g.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let y;if(x){const S=t.match(this.interpolator.nestingRegexp);y=S&&S.length}let v=i.replace&&!xe(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(v={...this.options.interpolation.defaultVariables,...v}),t=this.interpolator.interpolate(t,v,i.lng||this.language||o.usedLng,i),x){const S=t.match(this.interpolator.nestingRegexp),k=S&&S.length;y<k&&(i.nest=!1)}!i.lng&&o&&o.res&&(i.lng=this.language||o.usedLng),i.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var S=arguments.length,k=new Array(S),A=0;A<S;A++)k[A]=arguments[A];return(l==null?void 0:l[0])===k[0]&&!i.context?(u.logger.warn(`It seems you are nesting recursively key: ${k[0]} in key: ${a[0]}`),null):u.translate(...k,a)},i)),i.interpolation&&this.interpolator.reset()}const f=i.postProcess||this.options.postProcess,p=xe(f)?[f]:f;return t!=null&&(p!=null&&p.length)&&i.applyPostProcessor!==!1&&(t=tw.handle(p,t,a,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),t}resolve(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,o,l,u,f;return xe(t)&&(t=[t]),t.forEach(p=>{if(this.isValidLookup(i))return;const m=this.extractFromKey(p,a),g=m.key;o=g;let x=m.namespaces;this.options.fallbackNS&&(x=x.concat(this.options.fallbackNS));const y=a.count!==void 0&&!xe(a.count),v=y&&!a.ordinal&&a.count===0,S=a.context!==void 0&&(xe(a.context)||typeof a.context=="number")&&a.context!=="",k=a.lngs?a.lngs:this.languageUtils.toResolveHierarchy(a.lng||this.language,a.fallbackLng);x.forEach(A=>{var j,R;this.isValidLookup(i)||(f=A,!Sy[`${k[0]}-${A}`]&&((j=this.utils)!=null&&j.hasLoadedNamespace)&&!((R=this.utils)!=null&&R.hasLoadedNamespace(f))&&(Sy[`${k[0]}-${A}`]=!0,this.logger.warn(`key "${o}" for languages "${k.join(", ")}" won't get resolved as namespace "${f}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),k.forEach(C=>{var D;if(this.isValidLookup(i))return;u=C;const _=[g];if((D=this.i18nFormat)!=null&&D.addLookupKeys)this.i18nFormat.addLookupKeys(_,g,C,A,a);else{let N;y&&(N=this.pluralResolver.getSuffix(C,a.count,a));const V=`${this.options.pluralSeparator}zero`,q=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(y&&(_.push(g+N),a.ordinal&&N.indexOf(q)===0&&_.push(g+N.replace(q,this.options.pluralSeparator)),v&&_.push(g+V)),S){const W=`${g}${this.options.contextSeparator}${a.context}`;_.push(W),y&&(_.push(W+N),a.ordinal&&N.indexOf(q)===0&&_.push(W+N.replace(q,this.options.pluralSeparator)),v&&_.push(W+V))}}let M;for(;M=_.pop();)this.isValidLookup(i)||(l=M,i=this.getResource(C,A,M,a))}))})}),{res:i,usedKey:o,exactUsedKey:l,usedLng:u,usedNS:f}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,a,i){var l;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return(l=this.i18nFormat)!=null&&l.getResource?this.i18nFormat.getResource(t,a,i,o):this.resourceStore.getResource(t,a,i,o)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const a=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=t.replace&&!xe(t.replace);let o=i?t.replace:t;if(i&&typeof t.count<"u"&&(o.count=t.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!i){o={...o};for(const l of a)delete o[l]}return o}static hasDefaultValue(t){const a="defaultValue";for(const i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&a===i.substring(0,a.length)&&t[i]!==void 0)return!0;return!1}}class ky{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Zn.create("languageUtils")}getScriptPartFromCode(t){if(t=Su(t),!t||t.indexOf("-")<0)return null;const a=t.split("-");return a.length===2||(a.pop(),a[a.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(a.join("-"))}getLanguagePartFromCode(t){if(t=Su(t),!t||t.indexOf("-")<0)return t;const a=t.split("-");return this.formatLanguageCode(a[0])}formatLanguageCode(t){if(xe(t)&&t.indexOf("-")>-1){let a;try{a=Intl.getCanonicalLocales(t)[0]}catch{}return a&&this.options.lowerCaseLng&&(a=a.toLowerCase()),a||(this.options.lowerCaseLng?t.toLowerCase():t)}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let a;return t.forEach(i=>{if(a)return;const o=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(o))&&(a=o)}),!a&&this.options.supportedLngs&&t.forEach(i=>{if(a)return;const o=this.getLanguagePartFromCode(i);if(this.isSupportedCode(o))return a=o;a=this.options.supportedLngs.find(l=>{if(l===o)return l;if(!(l.indexOf("-")<0&&o.indexOf("-")<0)&&(l.indexOf("-")>0&&o.indexOf("-")<0&&l.substring(0,l.indexOf("-"))===o||l.indexOf(o)===0&&o.length>1))return l})}),a||(a=this.getFallbackCodes(this.options.fallbackLng)[0]),a}getFallbackCodes(t,a){if(!t)return[];if(typeof t=="function"&&(t=t(a)),xe(t)&&(t=[t]),Array.isArray(t))return t;if(!a)return t.default||[];let i=t[a];return i||(i=t[this.getScriptPartFromCode(a)]),i||(i=t[this.formatLanguageCode(a)]),i||(i=t[this.getLanguagePartFromCode(a)]),i||(i=t.default),i||[]}toResolveHierarchy(t,a){const i=this.getFallbackCodes(a||this.options.fallbackLng||[],t),o=[],l=u=>{u&&(this.isSupportedCode(u)?o.push(u):this.logger.warn(`rejecting language code not found in supportedLngs: ${u}`))};return xe(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&l(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&l(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&l(this.getLanguagePartFromCode(t))):xe(t)&&l(this.formatLanguageCode(t)),i.forEach(u=>{o.indexOf(u)<0&&l(this.formatLanguageCode(u))}),o}}const jy={zero:0,one:1,two:2,few:3,many:4,other:5},Ey={select:e=>e===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class DA{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=a,this.logger=Zn.create("pluralResolver"),this.pluralRulesCache={}}addRule(t,a){this.rules[t]=a}clearCache(){this.pluralRulesCache={}}getRule(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=Su(t==="dev"?"en":t),o=a.ordinal?"ordinal":"cardinal",l=JSON.stringify({cleanedCode:i,type:o});if(l in this.pluralRulesCache)return this.pluralRulesCache[l];let u;try{u=new Intl.PluralRules(i,{type:o})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Ey;if(!t.match(/-|_/))return Ey;const p=this.languageUtils.getLanguagePartFromCode(t);u=this.getRule(p,a)}return this.pluralRulesCache[l]=u,u}needsPlural(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(t,a);return i||(i=this.getRule("dev",a)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(t,a){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,i).map(o=>`${a}${o}`)}getSuffixes(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(t,a);return i||(i=this.getRule("dev",a)),i?i.resolvedOptions().pluralCategories.sort((o,l)=>jy[o]-jy[l]).map(o=>`${this.options.prepend}${a.ordinal?`ordinal${this.options.prepend}`:""}${o}`):[]}getSuffix(t,a){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(t,i);return o?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${o.select(a)}`:(this.logger.warn(`no plural rule found for: ${t}`),this.getSuffix("dev",a,i))}}const Cy=function(e,t,a){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=EA(e,t,a);return!l&&o&&xe(a)&&(l=Xh(e,a,i),l===void 0&&(l=Xh(t,a,i))),l},Up=e=>e.replace(/\$/g,"$$$$");class PA{constructor(){var a;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Zn.create("interpolator"),this.options=t,this.format=((a=t==null?void 0:t.interpolation)==null?void 0:a.format)||(i=>i),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:a,escapeValue:i,useRawValueToEscape:o,prefix:l,prefixEscaped:u,suffix:f,suffixEscaped:p,formatSeparator:m,unescapeSuffix:g,unescapePrefix:x,nestingPrefix:y,nestingPrefixEscaped:v,nestingSuffix:S,nestingSuffixEscaped:k,nestingOptionsSeparator:A,maxReplaces:j,alwaysFormat:R}=t.interpolation;this.escape=a!==void 0?a:AA,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=l?Rr(l):u||"{{",this.suffix=f?Rr(f):p||"}}",this.formatSeparator=m||",",this.unescapePrefix=g?"":x||"-",this.unescapeSuffix=this.unescapePrefix?"":g||"",this.nestingPrefix=y?Rr(y):v||Rr("$t("),this.nestingSuffix=S?Rr(S):k||Rr(")"),this.nestingOptionsSeparator=A||",",this.maxReplaces=j||1e3,this.alwaysFormat=R!==void 0?R:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(a,i)=>(a==null?void 0:a.source)===i?(a.lastIndex=0,a):new RegExp(i,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,a,i,o){var v;let l,u,f;const p=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},m=S=>{if(S.indexOf(this.formatSeparator)<0){const R=Cy(a,p,S,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(R,void 0,i,{...o,...a,interpolationkey:S}):R}const k=S.split(this.formatSeparator),A=k.shift().trim(),j=k.join(this.formatSeparator).trim();return this.format(Cy(a,p,A,this.options.keySeparator,this.options.ignoreJSONStructure),j,i,{...o,...a,interpolationkey:A})};this.resetRegExp();const g=(o==null?void 0:o.missingInterpolationHandler)||this.options.missingInterpolationHandler,x=((v=o==null?void 0:o.interpolation)==null?void 0:v.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:S=>Up(S)},{regex:this.regexp,safeValue:S=>this.escapeValue?Up(this.escape(S)):Up(S)}].forEach(S=>{for(f=0;l=S.regex.exec(t);){const k=l[1].trim();if(u=m(k),u===void 0)if(typeof g=="function"){const j=g(t,l,o);u=xe(j)?j:""}else if(o&&Object.prototype.hasOwnProperty.call(o,k))u="";else if(x){u=l[0];continue}else this.logger.warn(`missed to pass in variable ${k} for interpolating ${t}`),u="";else!xe(u)&&!this.useRawValueToEscape&&(u=by(u));const A=S.safeValue(u);if(t=t.replace(l[0],A),x?(S.regex.lastIndex+=u.length,S.regex.lastIndex-=l[0].length):S.regex.lastIndex=0,f++,f>=this.maxReplaces)break}}),t}nest(t,a){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,l,u;const f=(p,m)=>{const g=this.nestingOptionsSeparator;if(p.indexOf(g)<0)return p;const x=p.split(new RegExp(`${g}[ ]*{`));let y=`{${x[1]}`;p=x[0],y=this.interpolate(y,u);const v=y.match(/'/g),S=y.match(/"/g);(((v==null?void 0:v.length)??0)%2===0&&!S||S.length%2!==0)&&(y=y.replace(/'/g,'"'));try{u=JSON.parse(y),m&&(u={...m,...u})}catch(k){return this.logger.warn(`failed parsing options string in nesting for key ${p}`,k),`${p}${g}${y}`}return u.defaultValue&&u.defaultValue.indexOf(this.prefix)>-1&&delete u.defaultValue,p};for(;o=this.nestingRegexp.exec(t);){let p=[];u={...i},u=u.replace&&!xe(u.replace)?u.replace:u,u.applyPostProcessor=!1,delete u.defaultValue;let m=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const g=o[1].split(this.formatSeparator).map(x=>x.trim());o[1]=g.shift(),p=g,m=!0}if(l=a(f.call(this,o[1].trim(),u),u),l&&o[0]===t&&!xe(l))return l;xe(l)||(l=by(l)),l||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),l=""),m&&(l=p.reduce((g,x)=>this.format(g,x,i.lng,{...i,interpolationkey:o[1].trim()}),l.trim())),t=t.replace(o[0],l),this.regexp.lastIndex=0}return t}}const VA=e=>{let t=e.toLowerCase().trim();const a={};if(e.indexOf("(")>-1){const i=e.split("(");t=i[0].toLowerCase().trim();const o=i[1].substring(0,i[1].length-1);t==="currency"&&o.indexOf(":")<0?a.currency||(a.currency=o.trim()):t==="relativetime"&&o.indexOf(":")<0?a.range||(a.range=o.trim()):o.split(";").forEach(u=>{if(u){const[f,...p]=u.split(":"),m=p.join(":").trim().replace(/^'+|'+$/g,""),g=f.trim();a[g]||(a[g]=m),m==="false"&&(a[g]=!1),m==="true"&&(a[g]=!0),isNaN(m)||(a[g]=parseInt(m,10))}})}return{formatName:t,formatOptions:a}},Lr=e=>{const t={};return(a,i,o)=>{let l=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(l={...l,[o.interpolationkey]:void 0});const u=i+JSON.stringify(l);let f=t[u];return f||(f=e(Su(i),o),t[u]=f),f(a)}};class NA{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Zn.create("formatter"),this.options=t,this.formats={number:Lr((a,i)=>{const o=new Intl.NumberFormat(a,{...i});return l=>o.format(l)}),currency:Lr((a,i)=>{const o=new Intl.NumberFormat(a,{...i,style:"currency"});return l=>o.format(l)}),datetime:Lr((a,i)=>{const o=new Intl.DateTimeFormat(a,{...i});return l=>o.format(l)}),relativetime:Lr((a,i)=>{const o=new Intl.RelativeTimeFormat(a,{...i});return l=>o.format(l,i.range||"day")}),list:Lr((a,i)=>{const o=new Intl.ListFormat(a,{...i});return l=>o.format(l)})},this.init(t)}init(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=a.interpolation.formatSeparator||","}add(t,a){this.formats[t.toLowerCase().trim()]=a}addCached(t,a){this.formats[t.toLowerCase().trim()]=Lr(a)}format(t,a,i){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const l=a.split(this.formatSeparator);if(l.length>1&&l[0].indexOf("(")>1&&l[0].indexOf(")")<0&&l.find(f=>f.indexOf(")")>-1)){const f=l.findIndex(p=>p.indexOf(")")>-1);l[0]=[l[0],...l.splice(1,f)].join(this.formatSeparator)}return l.reduce((f,p)=>{var x;const{formatName:m,formatOptions:g}=VA(p);if(this.formats[m]){let y=f;try{const v=((x=o==null?void 0:o.formatParams)==null?void 0:x[o.interpolationkey])||{},S=v.locale||v.lng||o.locale||o.lng||i;y=this.formats[m](f,S,{...g,...o,...v})}catch(v){this.logger.warn(v)}return y}else this.logger.warn(`there was no format function for ${m}`);return f},t)}}const BA=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)};class _A extends Ku{constructor(t,a,i){var l,u;let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=a,this.services=i,this.languageUtils=i.languageUtils,this.options=o,this.logger=Zn.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],(u=(l=this.backend)==null?void 0:l.init)==null||u.call(l,i,o.backend,o)}queueLoad(t,a,i,o){const l={},u={},f={},p={};return t.forEach(m=>{let g=!0;a.forEach(x=>{const y=`${m}|${x}`;!i.reload&&this.store.hasResourceBundle(m,x)?this.state[y]=2:this.state[y]<0||(this.state[y]===1?u[y]===void 0&&(u[y]=!0):(this.state[y]=1,g=!1,u[y]===void 0&&(u[y]=!0),l[y]===void 0&&(l[y]=!0),p[x]===void 0&&(p[x]=!0)))}),g||(f[m]=!0)}),(Object.keys(l).length||Object.keys(u).length)&&this.queue.push({pending:u,pendingCount:Object.keys(u).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(l),pending:Object.keys(u),toLoadLanguages:Object.keys(f),toLoadNamespaces:Object.keys(p)}}loaded(t,a,i){const o=t.split("|"),l=o[0],u=o[1];a&&this.emit("failedLoading",l,u,a),!a&&i&&this.store.addResourceBundle(l,u,i,void 0,void 0,{skipCopy:!0}),this.state[t]=a?-1:2,a&&i&&(this.state[t]=0);const f={};this.queue.forEach(p=>{jA(p.loaded,[l],u),BA(p,t),a&&p.errors.push(a),p.pendingCount===0&&!p.done&&(Object.keys(p.loaded).forEach(m=>{f[m]||(f[m]={});const g=p.loaded[m];g.length&&g.forEach(x=>{f[m][x]===void 0&&(f[m][x]=!0)})}),p.done=!0,p.errors.length?p.callback(p.errors):p.callback())}),this.emit("loaded",f),this.queue=this.queue.filter(p=>!p.done)}read(t,a,i){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,u=arguments.length>5?arguments[5]:void 0;if(!t.length)return u(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:a,fcName:i,tried:o,wait:l,callback:u});return}this.readingCalls++;const f=(m,g)=>{if(this.readingCalls--,this.waitingReads.length>0){const x=this.waitingReads.shift();this.read(x.lng,x.ns,x.fcName,x.tried,x.wait,x.callback)}if(m&&g&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,t,a,i,o+1,l*2,u)},l);return}u(m,g)},p=this.backend[i].bind(this.backend);if(p.length===2){try{const m=p(t,a);m&&typeof m.then=="function"?m.then(g=>f(null,g)).catch(f):f(null,m)}catch(m){f(m)}return}return p(t,a,f)}prepareLoading(t,a){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();xe(t)&&(t=this.languageUtils.toResolveHierarchy(t)),xe(a)&&(a=[a]);const l=this.queueLoad(t,a,i,o);if(!l.toLoad.length)return l.pending.length||o(),null;l.toLoad.forEach(u=>{this.loadOne(u)})}load(t,a,i){this.prepareLoading(t,a,{},i)}reload(t,a,i){this.prepareLoading(t,a,{reload:!0},i)}loadOne(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=t.split("|"),o=i[0],l=i[1];this.read(o,l,"read",void 0,void 0,(u,f)=>{u&&this.logger.warn(`${a}loading namespace ${l} for language ${o} failed`,u),!u&&f&&this.logger.log(`${a}loaded namespace ${l} for language ${o}`,f),this.loaded(t,u,f)})}saveMissing(t,a,i,o,l){var p,m,g,x,y;let u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},f=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if((m=(p=this.services)==null?void 0:p.utils)!=null&&m.hasLoadedNamespace&&!((x=(g=this.services)==null?void 0:g.utils)!=null&&x.hasLoadedNamespace(a))){this.logger.warn(`did not save key "${i}" as the namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((y=this.backend)!=null&&y.create){const v={...u,isUpdate:l},S=this.backend.create.bind(this.backend);if(S.length<6)try{let k;S.length===5?k=S(t,a,i,o,v):k=S(t,a,i,o),k&&typeof k.then=="function"?k.then(A=>f(null,A)).catch(f):f(null,k)}catch(k){f(k)}else S(t,a,i,o,f,v)}!t||!t[0]||this.store.addResource(t[0],a,i,o)}}}const Ay=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]=="object"&&(t=e[1]),xe(e[1])&&(t.defaultValue=e[1]),xe(e[2])&&(t.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const a=e[3]||e[2];Object.keys(a).forEach(i=>{t[i]=a[i]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),My=e=>{var t,a;return xe(e.ns)&&(e.ns=[e.ns]),xe(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),xe(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),((a=(t=e.supportedLngs)==null?void 0:t.indexOf)==null?void 0:a.call(t,"cimode"))<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),typeof e.initImmediate=="boolean"&&(e.initAsync=e.initImmediate),e},Lc=()=>{},$A=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(a=>{typeof e[a]=="function"&&(e[a]=e[a].bind(e))})};class Qo extends Ku{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;if(super(),this.options=My(t),this.services={},this.logger=Zn,this.modules={external:[]},$A(this),a&&!this.isInitialized&&!t.isClone){if(!this.options.initAsync)return this.init(t,a),this;setTimeout(()=>{this.init(t,a)},0)}}init(){var t=this;let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof a=="function"&&(i=a,a={}),a.defaultNS==null&&a.ns&&(xe(a.ns)?a.defaultNS=a.ns:a.ns.indexOf("translation")<0&&(a.defaultNS=a.ns[0]));const o=Ay();this.options={...o,...this.options,...My(a)},this.options.interpolation={...o.interpolation,...this.options.interpolation},a.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=a.keySeparator),a.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=a.nsSeparator);const l=g=>g?typeof g=="function"?new g:g:null;if(!this.options.isClone){this.modules.logger?Zn.init(l(this.modules.logger),this.options):Zn.init(null,this.options);let g;this.modules.formatter?g=this.modules.formatter:g=NA;const x=new ky(this.options);this.store=new wy(this.options.resources,this.options);const y=this.services;y.logger=Zn,y.resourceStore=this.store,y.languageUtils=x,y.pluralResolver=new DA(x,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),g&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(y.formatter=l(g),y.formatter.init(y,this.options),this.options.interpolation.format=y.formatter.format.bind(y.formatter)),y.interpolator=new PA(this.options),y.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},y.backendConnector=new _A(l(this.modules.backend),y.resourceStore,y,this.options),y.backendConnector.on("*",function(v){for(var S=arguments.length,k=new Array(S>1?S-1:0),A=1;A<S;A++)k[A-1]=arguments[A];t.emit(v,...k)}),this.modules.languageDetector&&(y.languageDetector=l(this.modules.languageDetector),y.languageDetector.init&&y.languageDetector.init(y,this.options.detection,this.options)),this.modules.i18nFormat&&(y.i18nFormat=l(this.modules.i18nFormat),y.i18nFormat.init&&y.i18nFormat.init(this)),this.translator=new ku(this.services,this.options),this.translator.on("*",function(v){for(var S=arguments.length,k=new Array(S>1?S-1:0),A=1;A<S;A++)k[A-1]=arguments[A];t.emit(v,...k)}),this.modules.external.forEach(v=>{v.init&&v.init(this)})}if(this.format=this.options.interpolation.format,i||(i=Lc),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const g=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);g.length>0&&g[0]!=="dev"&&(this.options.lng=g[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(g=>{this[g]=function(){return t.store[g](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(g=>{this[g]=function(){return t.store[g](...arguments),t}});const p=xo(),m=()=>{const g=(x,y)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),p.resolve(y),i(x,y)};if(this.languages&&!this.isInitialized)return g(null,this.t.bind(this));this.changeLanguage(this.options.lng,g)};return this.options.resources||!this.options.initAsync?m():setTimeout(m,0),p}loadResources(t){var l,u;let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Lc;const o=xe(t)?t:this.language;if(typeof t=="function"&&(i=t),!this.options.resources||this.options.partialBundledLanguages){if((o==null?void 0:o.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const f=[],p=m=>{if(!m||m==="cimode")return;this.services.languageUtils.toResolveHierarchy(m).forEach(x=>{x!=="cimode"&&f.indexOf(x)<0&&f.push(x)})};o?p(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(g=>p(g)),(u=(l=this.options.preload)==null?void 0:l.forEach)==null||u.call(l,m=>p(m)),this.services.backendConnector.load(f,this.options.ns,m=>{!m&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(m)})}else i(null)}reloadResources(t,a,i){const o=xo();return typeof t=="function"&&(i=t,t=void 0),typeof a=="function"&&(i=a,a=void 0),t||(t=this.languages),a||(a=this.options.ns),i||(i=Lc),this.services.backendConnector.reload(t,a,l=>{o.resolve(),i(l)}),o}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&tw.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let a=0;a<this.languages.length;a++){const i=this.languages[a];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(t,a){var i=this;this.isLanguageChangingTo=t;const o=xo();this.emit("languageChanging",t);const l=p=>{this.language=p,this.languages=this.services.languageUtils.toResolveHierarchy(p),this.resolvedLanguage=void 0,this.setResolvedLanguage(p)},u=(p,m)=>{m?(l(m),this.translator.changeLanguage(m),this.isLanguageChangingTo=void 0,this.emit("languageChanged",m),this.logger.log("languageChanged",m)):this.isLanguageChangingTo=void 0,o.resolve(function(){return i.t(...arguments)}),a&&a(p,function(){return i.t(...arguments)})},f=p=>{var g,x;!t&&!p&&this.services.languageDetector&&(p=[]);const m=xe(p)?p:this.services.languageUtils.getBestMatchFromCodes(p);m&&(this.language||l(m),this.translator.language||this.translator.changeLanguage(m),(x=(g=this.services.languageDetector)==null?void 0:g.cacheUserLanguage)==null||x.call(g,m)),this.loadResources(m,y=>{u(y,m)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?f(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(f):this.services.languageDetector.detect(f):f(t),o}getFixedT(t,a,i){var o=this;const l=function(u,f){let p;if(typeof f!="object"){for(var m=arguments.length,g=new Array(m>2?m-2:0),x=2;x<m;x++)g[x-2]=arguments[x];p=o.options.overloadTranslationOptionHandler([u,f].concat(g))}else p={...f};p.lng=p.lng||l.lng,p.lngs=p.lngs||l.lngs,p.ns=p.ns||l.ns,p.keyPrefix!==""&&(p.keyPrefix=p.keyPrefix||i||l.keyPrefix);const y=o.options.keySeparator||".";let v;return p.keyPrefix&&Array.isArray(u)?v=u.map(S=>`${p.keyPrefix}${y}${S}`):v=p.keyPrefix?`${p.keyPrefix}${y}${u}`:u,o.t(v,p)};return xe(t)?l.lng=t:l.lngs=t,l.ns=a,l.keyPrefix=i,l}t(){var o;for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return(o=this.translator)==null?void 0:o.translate(...a)}exists(){var o;for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return(o=this.translator)==null?void 0:o.exists(...a)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=a.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,l=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const u=(f,p)=>{const m=this.services.backendConnector.state[`${f}|${p}`];return m===-1||m===0||m===2};if(a.precheck){const f=a.precheck(this,u);if(f!==void 0)return f}return!!(this.hasResourceBundle(i,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||u(i,t)&&(!o||u(l,t)))}loadNamespaces(t,a){const i=xo();return this.options.ns?(xe(t)&&(t=[t]),t.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{i.resolve(),a&&a(o)}),i):(a&&a(),Promise.resolve())}loadLanguages(t,a){const i=xo();xe(t)&&(t=[t]);const o=this.options.preload||[],l=t.filter(u=>o.indexOf(u)<0&&this.services.languageUtils.isSupportedCode(u));return l.length?(this.options.preload=o.concat(l),this.loadResources(u=>{i.resolve(),a&&a(u)}),i):(a&&a(),Promise.resolve())}dir(t){var o,l;if(t||(t=this.resolvedLanguage||(((o=this.languages)==null?void 0:o.length)>0?this.languages[0]:this.language)),!t)return"rtl";const a=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((l=this.services)==null?void 0:l.languageUtils)||new ky(Ay());return a.indexOf(i.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;return new Qo(t,a)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Lc;const i=t.forkResourceStore;i&&delete t.forkResourceStore;const o={...this.options,...t,isClone:!0},l=new Qo(o);if((t.debug!==void 0||t.prefix!==void 0)&&(l.logger=l.logger.clone(t)),["store","services","language"].forEach(f=>{l[f]=this[f]}),l.services={...this.services},l.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},i){const f=Object.keys(this.store.data).reduce((p,m)=>(p[m]={...this.store.data[m]},Object.keys(p[m]).reduce((g,x)=>(g[x]={...p[m][x]},g),{})),{});l.store=new wy(f,o),l.services.resourceStore=l.store}return l.translator=new ku(l.services,o),l.translator.on("*",function(f){for(var p=arguments.length,m=new Array(p>1?p-1:0),g=1;g<p;g++)m[g-1]=arguments[g];l.emit(f,...m)}),l.init(o,a),l.translator.options=o,l.translator.backendConnector.services.utils={hasLoadedNamespace:l.hasLoadedNamespace.bind(l)},l}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Nt=Qo.createInstance();Nt.createInstance=Qo.createInstance;Nt.createInstance;Nt.dir;Nt.init;Nt.loadResources;Nt.reloadResources;Nt.use;Nt.changeLanguage;Nt.getFixedT;Nt.t;Nt.exists;Nt.setDefaultNamespace;Nt.hasLoadedNamespace;Nt.loadNamespaces;Nt.loadLanguages;function Wh(e){"@babel/helpers - typeof";return Wh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wh(e)}function nw(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":Wh(XMLHttpRequest))==="object"}function HA(e){return!!e&&typeof e.then=="function"}function GA(e){return HA(e)?e:Promise.resolve(e)}const UA="modulepreload",IA=function(e){return"/"+e},zy={},FA=function(t,a,i){let o=Promise.resolve();if(a&&a.length>0){let u=function(m){return Promise.all(m.map(g=>Promise.resolve(g).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),p=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));o=u(a.map(m=>{if(m=IA(m),m in zy)return;zy[m]=!0;const g=m.endsWith(".css"),x=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${x}`))return;const y=document.createElement("link");if(y.rel=g?"stylesheet":UA,g||(y.as="script"),y.crossOrigin="",y.href=m,p&&y.setAttribute("nonce",p),document.head.appendChild(y),g)return new Promise((v,S)=>{y.addEventListener("load",v),y.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${m}`)))})}))}function l(u){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=u,window.dispatchEvent(f),!f.defaultPrevented)throw u}return o.then(u=>{for(const f of u||[])f.status==="rejected"&&l(f.reason);return t().catch(l)})};function Ry(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),a.push.apply(a,i)}return a}function Ly(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Ry(Object(a),!0).forEach(function(i){qA(e,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ry(Object(a)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))})}return e}function qA(e,t,a){return(t=KA(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function KA(e){var t=YA(e,"string");return Ui(t)=="symbol"?t:t+""}function YA(e,t){if(Ui(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var i=a.call(e,t);if(Ui(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ui(e){"@babel/helpers - typeof";return Ui=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ui(e)}var oi=typeof fetch=="function"?fetch:void 0;typeof global<"u"&&global.fetch?oi=global.fetch:typeof window<"u"&&window.fetch&&(oi=window.fetch);var Zo;nw()&&(typeof global<"u"&&global.XMLHttpRequest?Zo=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(Zo=window.XMLHttpRequest));var ju;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?ju=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(ju=window.ActiveXObject));typeof oi!="function"&&(oi=void 0);if(!oi&&!Zo&&!ju)try{FA(()=>import("./browser-ponyfill-Ba3P6iMx.js").then(e=>e.b),[]).then(function(e){oi=e.default}).catch(function(){})}catch{}var Qh=function(t,a){if(a&&Ui(a)==="object"){var i="";for(var o in a)i+="&"+encodeURIComponent(o)+"="+encodeURIComponent(a[o]);if(!i)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+i.slice(1)}return t},Oy=function(t,a,i,o){var l=function(p){if(!p.ok)return i(p.statusText||"Error",{status:p.status});p.text().then(function(m){i(null,{status:p.status,data:m})}).catch(i)};if(o){var u=o(t,a);if(u instanceof Promise){u.then(l).catch(i);return}}typeof fetch=="function"?fetch(t,a).then(l).catch(i):oi(t,a).then(l).catch(i)},Dy=!1,XA=function(t,a,i,o){t.queryStringParams&&(a=Qh(a,t.queryStringParams));var l=Ly({},typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(l["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),i&&(l["Content-Type"]="application/json");var u=typeof t.requestOptions=="function"?t.requestOptions(i):t.requestOptions,f=Ly({method:i?"POST":"GET",body:i?t.stringify(i):void 0,headers:l},Dy?{}:u),p=typeof t.alternateFetch=="function"&&t.alternateFetch.length>=1?t.alternateFetch:void 0;try{Oy(a,f,o,p)}catch(m){if(!u||Object.keys(u).length===0||!m.message||m.message.indexOf("not implemented")<0)return o(m);try{Object.keys(u).forEach(function(g){delete f[g]}),Oy(a,f,o,p),Dy=!0}catch(g){o(g)}}},WA=function(t,a,i,o){i&&Ui(i)==="object"&&(i=Qh("",i).slice(1)),t.queryStringParams&&(a=Qh(a,t.queryStringParams));try{var l=Zo?new Zo:new ju("MSXML2.XMLHTTP.3.0");l.open(i?"POST":"GET",a,1),t.crossDomain||l.setRequestHeader("X-Requested-With","XMLHttpRequest"),l.withCredentials=!!t.withCredentials,i&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),l.overrideMimeType&&l.overrideMimeType("application/json");var u=t.customHeaders;if(u=typeof u=="function"?u():u,u)for(var f in u)l.setRequestHeader(f,u[f]);l.onreadystatechange=function(){l.readyState>3&&o(l.status>=400?l.statusText:null,{status:l.status,data:l.responseText})},l.send(i)}catch(p){console&&console.log(p)}},QA=function(t,a,i,o){if(typeof i=="function"&&(o=i,i=void 0),o=o||function(){},oi&&a.indexOf("file:")!==0)return XA(t,a,i,o);if(nw()||typeof ActiveXObject=="function")return WA(t,a,i,o);o(new Error("No fetch and no xhr implementation found!"))};function Jr(e){"@babel/helpers - typeof";return Jr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Jr(e)}function Py(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),a.push.apply(a,i)}return a}function Ip(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Py(Object(a),!0).forEach(function(i){aw(e,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Py(Object(a)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))})}return e}function ZA(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function JA(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,iw(i.key),i)}}function eM(e,t,a){return t&&JA(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function aw(e,t,a){return(t=iw(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function iw(e){var t=tM(e,"string");return Jr(t)=="symbol"?t:t+""}function tM(e,t){if(Jr(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var i=a.call(e,t);if(Jr(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var nM=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(a){return JSON.parse(a)},stringify:JSON.stringify,parsePayload:function(a,i,o){return aw({},i,o||"")},parseLoadPayload:function(a,i){},request:QA,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},rw=function(){function e(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};ZA(this,e),this.services=t,this.options=a,this.allOptions=i,this.type="backend",this.init(t,a,i)}return eM(e,[{key:"init",value:function(a){var i=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=a,this.options=Ip(Ip(Ip({},nM()),this.options||{}),o),this.allOptions=l,this.services&&this.options.reloadInterval){var u=setInterval(function(){return i.reload()},this.options.reloadInterval);Jr(u)==="object"&&typeof u.unref=="function"&&u.unref()}}},{key:"readMulti",value:function(a,i,o){this._readAny(a,a,i,i,o)}},{key:"read",value:function(a,i,o){this._readAny([a],a,[i],i,o)}},{key:"_readAny",value:function(a,i,o,l,u){var f=this,p=this.options.loadPath;typeof this.options.loadPath=="function"&&(p=this.options.loadPath(a,o)),p=GA(p),p.then(function(m){if(!m)return u(null,{});var g=f.services.interpolator.interpolate(m,{lng:a.join("+"),ns:o.join("+")});f.loadUrl(g,u,i,l)})}},{key:"loadUrl",value:function(a,i,o,l){var u=this,f=typeof o=="string"?[o]:o,p=typeof l=="string"?[l]:l,m=this.options.parseLoadPayload(f,p);this.options.request(this.options,a,m,function(g,x){if(x&&(x.status>=500&&x.status<600||!x.status))return i("failed loading "+a+"; status code: "+x.status,!0);if(x&&x.status>=400&&x.status<500)return i("failed loading "+a+"; status code: "+x.status,!1);if(!x&&g&&g.message){var y=g.message.toLowerCase(),v=["failed","fetch","network","load"].find(function(A){return y.indexOf(A)>-1});if(v)return i("failed loading "+a+": "+g.message,!0)}if(g)return i(g,!1);var S,k;try{typeof x.data=="string"?S=u.options.parse(x.data,o,l):S=x.data}catch{k="failed parsing "+a+" to json"}if(k)return i(k,!1);i(null,S)})}},{key:"create",value:function(a,i,o,l,u){var f=this;if(this.options.addPath){typeof a=="string"&&(a=[a]);var p=this.options.parsePayload(i,o,l),m=0,g=[],x=[];a.forEach(function(y){var v=f.options.addPath;typeof f.options.addPath=="function"&&(v=f.options.addPath(y,i));var S=f.services.interpolator.interpolate(v,{lng:y,ns:i});f.options.request(f.options,S,p,function(k,A){m+=1,g.push(k),x.push(A),m===a.length&&typeof u=="function"&&u(g,x)})})}}},{key:"reload",value:function(){var a=this,i=this.services,o=i.backendConnector,l=i.languageUtils,u=i.logger,f=o.language;if(!(f&&f.toLowerCase()==="cimode")){var p=[],m=function(x){var y=l.toResolveHierarchy(x);y.forEach(function(v){p.indexOf(v)<0&&p.push(v)})};m(f),this.allOptions.preload&&this.allOptions.preload.forEach(function(g){return m(g)}),p.forEach(function(g){a.allOptions.ns.forEach(function(x){o.read(g,x,"read",null,null,function(y,v){y&&u.warn("loading namespace ".concat(x," for language ").concat(g," failed"),y),!y&&v&&u.log("loaded namespace ".concat(x," for language ").concat(g),v),o.loaded("".concat(g,"|").concat(x),y,v)})})})}}}])}();rw.type="backend";const{slice:aM,forEach:iM}=[];function rM(e){return iM.call(aM.call(arguments,1),t=>{if(t)for(const a in t)e[a]===void 0&&(e[a]=t[a])}),e}function sM(e){return typeof e!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(a=>a.test(e))}const Vy=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,oM=function(e,t){const i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},o=encodeURIComponent(t);let l=`${e}=${o}`;if(i.maxAge>0){const u=i.maxAge-0;if(Number.isNaN(u))throw new Error("maxAge should be a Number");l+=`; Max-Age=${Math.floor(u)}`}if(i.domain){if(!Vy.test(i.domain))throw new TypeError("option domain is invalid");l+=`; Domain=${i.domain}`}if(i.path){if(!Vy.test(i.path))throw new TypeError("option path is invalid");l+=`; Path=${i.path}`}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");l+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(l+="; HttpOnly"),i.secure&&(l+="; Secure"),i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"strict":l+="; SameSite=Strict";break;case"none":l+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return i.partitioned&&(l+="; Partitioned"),l},Ny={create(e,t,a,i){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};a&&(o.expires=new Date,o.expires.setTime(o.expires.getTime()+a*60*1e3)),i&&(o.domain=i),document.cookie=oM(e,t,o)},read(e){const t=`${e}=`,a=document.cookie.split(";");for(let i=0;i<a.length;i++){let o=a[i];for(;o.charAt(0)===" ";)o=o.substring(1,o.length);if(o.indexOf(t)===0)return o.substring(t.length,o.length)}return null},remove(e,t){this.create(e,"",-1,t)}};var lM={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&typeof document<"u")return Ny.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:a,cookieMinutes:i,cookieDomain:o,cookieOptions:l}=t;a&&typeof document<"u"&&Ny.create(a,e,i,o,l)}},cM={name:"querystring",lookup(e){var i;let{lookupQuerystring:t}=e,a;if(typeof window<"u"){let{search:o}=window.location;!window.location.search&&((i=window.location.hash)==null?void 0:i.indexOf("?"))>-1&&(o=window.location.hash.substring(window.location.hash.indexOf("?")));const u=o.substring(1).split("&");for(let f=0;f<u.length;f++){const p=u[f].indexOf("=");p>0&&u[f].substring(0,p)===t&&(a=u[f].substring(p+1))}}return a}},uM={name:"hash",lookup(e){var o;let{lookupHash:t,lookupFromHashIndex:a}=e,i;if(typeof window<"u"){const{hash:l}=window.location;if(l&&l.length>2){const u=l.substring(1);if(t){const f=u.split("&");for(let p=0;p<f.length;p++){const m=f[p].indexOf("=");m>0&&f[p].substring(0,m)===t&&(i=f[p].substring(m+1))}}if(i)return i;if(!i&&a>-1){const f=l.match(/\/([a-zA-Z-]*)/g);return Array.isArray(f)?(o=f[typeof a=="number"?a:0])==null?void 0:o.replace("/",""):void 0}}}return i}};let Or=null;const By=()=>{if(Or!==null)return Or;try{if(Or=typeof window<"u"&&window.localStorage!==null,!Or)return!1;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch{Or=!1}return Or};var dM={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&By())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:a}=t;a&&By()&&window.localStorage.setItem(a,e)}};let Dr=null;const _y=()=>{if(Dr!==null)return Dr;try{if(Dr=typeof window<"u"&&window.sessionStorage!==null,!Dr)return!1;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch{Dr=!1}return Dr};var fM={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&_y())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:a}=t;a&&_y()&&window.sessionStorage.setItem(a,e)}},pM={name:"navigator",lookup(e){const t=[];if(typeof navigator<"u"){const{languages:a,userLanguage:i,language:o}=navigator;if(a)for(let l=0;l<a.length;l++)t.push(a[l]);i&&t.push(i),o&&t.push(o)}return t.length>0?t:void 0}},hM={name:"htmlTag",lookup(e){let{htmlTag:t}=e,a;const i=t||(typeof document<"u"?document.documentElement:null);return i&&typeof i.getAttribute=="function"&&(a=i.getAttribute("lang")),a}},mM={name:"path",lookup(e){var o;let{lookupFromPathIndex:t}=e;if(typeof window>"u")return;const a=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(a)?(o=a[typeof t=="number"?t:0])==null?void 0:o.replace("/",""):void 0}},gM={name:"subdomain",lookup(e){var o,l;let{lookupFromSubdomainIndex:t}=e;const a=typeof t=="number"?t+1:1,i=typeof window<"u"&&((l=(o=window.location)==null?void 0:o.hostname)==null?void 0:l.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(i)return i[a]}};let sw=!1;try{document.cookie,sw=!0}catch{}const ow=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];sw||ow.splice(1,1);const bM=()=>({order:ow,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e});class lw{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(t,a)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=t,this.options=rM(a,this.options||{},bM()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=o=>o.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(lM),this.addDetector(cM),this.addDetector(dM),this.addDetector(fM),this.addDetector(pM),this.addDetector(hM),this.addDetector(mM),this.addDetector(gM),this.addDetector(uM)}addDetector(t){return this.detectors[t.name]=t,this}detect(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,a=[];return t.forEach(i=>{if(this.detectors[i]){let o=this.detectors[i].lookup(this.options);o&&typeof o=="string"&&(o=[o]),o&&(a=a.concat(o))}}),a=a.filter(i=>i!=null&&!sM(i)).map(i=>this.options.convertDetectedLanguage(i)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?a:a.length>0?a[0]:null}cacheUserLanguage(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;a&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(t)>-1||a.forEach(i=>{this.detectors[i]&&this.detectors[i].cacheUserLanguage(t,this.options)}))}}lw.type="languageDetector";const xM="20260312-de-source-repair",fg=["de","uk","tr","ar","pl","ku","fa","it","es","el","ro","bg"];Nt.use(rw).use(lw).use(xA).init({supportedLngs:[...fg],fallbackLng:"de",debug:!1,interpolation:{escapeValue:!1},backend:{loadPath:`/locales/{{lng}}/translation.json?v=${xM}`},detection:{order:["localStorage","navigator"],caches:["localStorage"],lookupLocalStorage:"i18nextLng"}});const cw=E.createContext(void 0),yM=({children:e})=>{const{i18n:t}=Ue(),a=o=>{const l=(o||"").toLowerCase().split("-")[0];return fg.includes(l)?l:"de"},i=o=>{t.changeLanguage(o).then(()=>{window.location.reload()})};return d.jsx(cw.Provider,{value:{language:a(t.resolvedLanguage||t.language),setLanguage:i},children:e})},vM=()=>{const e=E.useContext(cw);if(!e)throw new Error("useLanguage must be used within a LanguageProvider");return e};var Yt=function(){return Yt=Object.assign||function(t){for(var a,i=1,o=arguments.length;i<o;i++){a=arguments[i];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(t[l]=a[l])}return t},Yt.apply(this,arguments)};function Jo(e,t,a){if(a||arguments.length===2)for(var i=0,o=t.length,l;i<o;i++)(l||!(i in t))&&(l||(l=Array.prototype.slice.call(t,0,i)),l[i]=t[i]);return e.concat(l||Array.prototype.slice.call(t))}var Xe="-ms-",No="-moz-",Pe="-webkit-",uw="comm",Yu="rule",pg="decl",wM="@import",dw="@keyframes",SM="@layer",fw=Math.abs,hg=String.fromCharCode,Zh=Object.assign;function TM(e,t){return kt(e,0)^45?(((t<<2^kt(e,0))<<2^kt(e,1))<<2^kt(e,2))<<2^kt(e,3):0}function pw(e){return e.trim()}function ja(e,t){return(e=t.exec(e))?e[0]:e}function ve(e,t,a){return e.replace(t,a)}function nu(e,t,a){return e.indexOf(t,a)}function kt(e,t){return e.charCodeAt(t)|0}function es(e,t,a){return e.slice(t,a)}function Qn(e){return e.length}function hw(e){return e.length}function Co(e,t){return t.push(e),e}function kM(e,t){return e.map(t).join("")}function $y(e,t){return e.filter(function(a){return!ja(a,t)})}var Xu=1,ts=1,mw=0,En=0,ut=0,ps="";function Wu(e,t,a,i,o,l,u,f){return{value:e,root:t,parent:a,type:i,props:o,children:l,line:Xu,column:ts,length:u,return:"",siblings:f}}function ai(e,t){return Zh(Wu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Pr(e){for(;e.root;)e=ai(e.root,{children:[e]});Co(e,e.siblings)}function jM(){return ut}function EM(){return ut=En>0?kt(ps,--En):0,ts--,ut===10&&(ts=1,Xu--),ut}function Dn(){return ut=En<mw?kt(ps,En++):0,ts++,ut===10&&(ts=1,Xu++),ut}function $i(){return kt(ps,En)}function au(){return En}function Qu(e,t){return es(ps,e,t)}function Jh(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function CM(e){return Xu=ts=1,mw=Qn(ps=e),En=0,[]}function AM(e){return ps="",e}function Fp(e){return pw(Qu(En-1,em(e===91?e+2:e===40?e+1:e)))}function MM(e){for(;(ut=$i())&&ut<33;)Dn();return Jh(e)>2||Jh(ut)>3?"":" "}function zM(e,t){for(;--t&&Dn()&&!(ut<48||ut>102||ut>57&&ut<65||ut>70&&ut<97););return Qu(e,au()+(t<6&&$i()==32&&Dn()==32))}function em(e){for(;Dn();)switch(ut){case e:return En;case 34:case 39:e!==34&&e!==39&&em(ut);break;case 40:e===41&&em(e);break;case 92:Dn();break}return En}function RM(e,t){for(;Dn()&&e+ut!==57;)if(e+ut===84&&$i()===47)break;return"/*"+Qu(t,En-1)+"*"+hg(e===47?e:Dn())}function LM(e){for(;!Jh($i());)Dn();return Qu(e,En)}function OM(e){return AM(iu("",null,null,null,[""],e=CM(e),0,[0],e))}function iu(e,t,a,i,o,l,u,f,p){for(var m=0,g=0,x=u,y=0,v=0,S=0,k=1,A=1,j=1,R=0,C="",_=o,M=l,D=i,N=C;A;)switch(S=R,R=Dn()){case 40:if(S!=108&&kt(N,x-1)==58){nu(N+=ve(Fp(R),"&","&\f"),"&\f",fw(m?f[m-1]:0))!=-1&&(j=-1);break}case 34:case 39:case 91:N+=Fp(R);break;case 9:case 10:case 13:case 32:N+=MM(S);break;case 92:N+=zM(au()-1,7);continue;case 47:switch($i()){case 42:case 47:Co(DM(RM(Dn(),au()),t,a,p),p);break;default:N+="/"}break;case 123*k:f[m++]=Qn(N)*j;case 125*k:case 59:case 0:switch(R){case 0:case 125:A=0;case 59+g:j==-1&&(N=ve(N,/\f/g,"")),v>0&&Qn(N)-x&&Co(v>32?Gy(N+";",i,a,x-1,p):Gy(ve(N," ","")+";",i,a,x-2,p),p);break;case 59:N+=";";default:if(Co(D=Hy(N,t,a,m,g,o,f,C,_=[],M=[],x,l),l),R===123)if(g===0)iu(N,t,D,D,_,l,x,f,M);else switch(y===99&&kt(N,3)===110?100:y){case 100:case 108:case 109:case 115:iu(e,D,D,i&&Co(Hy(e,D,D,0,0,o,f,C,o,_=[],x,M),M),o,M,x,f,i?_:M);break;default:iu(N,D,D,D,[""],M,0,f,M)}}m=g=v=0,k=j=1,C=N="",x=u;break;case 58:x=1+Qn(N),v=S;default:if(k<1){if(R==123)--k;else if(R==125&&k++==0&&EM()==125)continue}switch(N+=hg(R),R*k){case 38:j=g>0?1:(N+="\f",-1);break;case 44:f[m++]=(Qn(N)-1)*j,j=1;break;case 64:$i()===45&&(N+=Fp(Dn())),y=$i(),g=x=Qn(C=N+=LM(au())),R++;break;case 45:S===45&&Qn(N)==2&&(k=0)}}return l}function Hy(e,t,a,i,o,l,u,f,p,m,g,x){for(var y=o-1,v=o===0?l:[""],S=hw(v),k=0,A=0,j=0;k<i;++k)for(var R=0,C=es(e,y+1,y=fw(A=u[k])),_=e;R<S;++R)(_=pw(A>0?v[R]+" "+C:ve(C,/&\f/g,v[R])))&&(p[j++]=_);return Wu(e,t,a,o===0?Yu:f,p,m,g,x)}function DM(e,t,a,i){return Wu(e,t,a,uw,hg(jM()),es(e,2,-2),0,i)}function Gy(e,t,a,i,o){return Wu(e,t,a,pg,es(e,0,i),es(e,i+1,-1),i,o)}function gw(e,t,a){switch(TM(e,t)){case 5103:return Pe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Pe+e+e;case 4789:return No+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Pe+e+No+e+Xe+e+e;case 5936:switch(kt(e,t+11)){case 114:return Pe+e+Xe+ve(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Pe+e+Xe+ve(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Pe+e+Xe+ve(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Pe+e+Xe+e+e;case 6165:return Pe+e+Xe+"flex-"+e+e;case 5187:return Pe+e+ve(e,/(\w+).+(:[^]+)/,Pe+"box-$1$2"+Xe+"flex-$1$2")+e;case 5443:return Pe+e+Xe+"flex-item-"+ve(e,/flex-|-self/g,"")+(ja(e,/flex-|baseline/)?"":Xe+"grid-row-"+ve(e,/flex-|-self/g,""))+e;case 4675:return Pe+e+Xe+"flex-line-pack"+ve(e,/align-content|flex-|-self/g,"")+e;case 5548:return Pe+e+Xe+ve(e,"shrink","negative")+e;case 5292:return Pe+e+Xe+ve(e,"basis","preferred-size")+e;case 6060:return Pe+"box-"+ve(e,"-grow","")+Pe+e+Xe+ve(e,"grow","positive")+e;case 4554:return Pe+ve(e,/([^-])(transform)/g,"$1"+Pe+"$2")+e;case 6187:return ve(ve(ve(e,/(zoom-|grab)/,Pe+"$1"),/(image-set)/,Pe+"$1"),e,"")+e;case 5495:case 3959:return ve(e,/(image-set\([^]*)/,Pe+"$1$`$1");case 4968:return ve(ve(e,/(.+:)(flex-)?(.*)/,Pe+"box-pack:$3"+Xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Pe+e+e;case 4200:if(!ja(e,/flex-|baseline/))return Xe+"grid-column-align"+es(e,t)+e;break;case 2592:case 3360:return Xe+ve(e,"template-","")+e;case 4384:case 3616:return a&&a.some(function(i,o){return t=o,ja(i.props,/grid-\w+-end/)})?~nu(e+(a=a[t].value),"span",0)?e:Xe+ve(e,"-start","")+e+Xe+"grid-row-span:"+(~nu(a,"span",0)?ja(a,/\d+/):+ja(a,/\d+/)-+ja(e,/\d+/))+";":Xe+ve(e,"-start","")+e;case 4896:case 4128:return a&&a.some(function(i){return ja(i.props,/grid-\w+-start/)})?e:Xe+ve(ve(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ve(e,/(.+)-inline(.+)/,Pe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Qn(e)-1-t>6)switch(kt(e,t+1)){case 109:if(kt(e,t+4)!==45)break;case 102:return ve(e,/(.+:)(.+)-([^]+)/,"$1"+Pe+"$2-$3$1"+No+(kt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~nu(e,"stretch",0)?gw(ve(e,"stretch","fill-available"),t,a)+e:e}break;case 5152:case 5920:return ve(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,o,l,u,f,p,m){return Xe+o+":"+l+m+(u?Xe+o+"-span:"+(f?p:+p-+l)+m:"")+e});case 4949:if(kt(e,t+6)===121)return ve(e,":",":"+Pe)+e;break;case 6444:switch(kt(e,kt(e,14)===45?18:11)){case 120:return ve(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Pe+(kt(e,14)===45?"inline-":"")+"box$3$1"+Pe+"$2$3$1"+Xe+"$2box$3")+e;case 100:return ve(e,":",":"+Xe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ve(e,"scroll-","scroll-snap-")+e}return e}function Eu(e,t){for(var a="",i=0;i<e.length;i++)a+=t(e[i],i,e,t)||"";return a}function PM(e,t,a,i){switch(e.type){case SM:if(e.children.length)break;case wM:case pg:return e.return=e.return||e.value;case uw:return"";case dw:return e.return=e.value+"{"+Eu(e.children,i)+"}";case Yu:if(!Qn(e.value=e.props.join(",")))return""}return Qn(a=Eu(e.children,i))?e.return=e.value+"{"+a+"}":""}function VM(e){var t=hw(e);return function(a,i,o,l){for(var u="",f=0;f<t;f++)u+=e[f](a,i,o,l)||"";return u}}function NM(e){return function(t){t.root||(t=t.return)&&e(t)}}function BM(e,t,a,i){if(e.length>-1&&!e.return)switch(e.type){case pg:e.return=gw(e.value,e.length,a);return;case dw:return Eu([ai(e,{value:ve(e.value,"@","@"+Pe)})],i);case Yu:if(e.length)return kM(a=e.props,function(o){switch(ja(o,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Pr(ai(e,{props:[ve(o,/:(read-\w+)/,":"+No+"$1")]})),Pr(ai(e,{props:[o]})),Zh(e,{props:$y(a,i)});break;case"::placeholder":Pr(ai(e,{props:[ve(o,/:(plac\w+)/,":"+Pe+"input-$1")]})),Pr(ai(e,{props:[ve(o,/:(plac\w+)/,":"+No+"$1")]})),Pr(ai(e,{props:[ve(o,/:(plac\w+)/,Xe+"input-$1")]})),Pr(ai(e,{props:[o]})),Zh(e,{props:$y(a,i)});break}return""})}}var _M={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ln={},ns=typeof process<"u"&&ln!==void 0&&(ln.REACT_APP_SC_ATTR||ln.SC_ATTR)||"data-styled",bw="active",xw="data-styled-version",Zu="6.1.19",mg=`/*!sc*/
`,Cu=typeof window<"u"&&typeof document<"u",$M=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ln!==void 0&&ln.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ln.REACT_APP_SC_DISABLE_SPEEDY!==""?ln.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ln.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ln!==void 0&&ln.SC_DISABLE_SPEEDY!==void 0&&ln.SC_DISABLE_SPEEDY!==""&&ln.SC_DISABLE_SPEEDY!=="false"&&ln.SC_DISABLE_SPEEDY),Ju=Object.freeze([]),as=Object.freeze({});function HM(e,t,a){return a===void 0&&(a=as),e.theme!==a.theme&&e.theme||t||a.theme}var yw=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),GM=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,UM=/(^-|-$)/g;function Uy(e){return e.replace(GM,"-").replace(UM,"")}var IM=/(a)(d)/gi,Oc=52,Iy=function(e){return String.fromCharCode(e+(e>25?39:97))};function tm(e){var t,a="";for(t=Math.abs(e);t>Oc;t=t/Oc|0)a=Iy(t%Oc)+a;return(Iy(t%Oc)+a).replace(IM,"$1-$2")}var qp,vw=5381,Ir=function(e,t){for(var a=t.length;a;)e=33*e^t.charCodeAt(--a);return e},ww=function(e){return Ir(vw,e)};function Sw(e){return tm(ww(e)>>>0)}function FM(e){return e.displayName||e.name||"Component"}function Kp(e){return typeof e=="string"&&!0}var Tw=typeof Symbol=="function"&&Symbol.for,kw=Tw?Symbol.for("react.memo"):60115,qM=Tw?Symbol.for("react.forward_ref"):60112,KM={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},YM={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},jw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},XM=((qp={})[qM]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},qp[kw]=jw,qp);function Fy(e){return("type"in(t=e)&&t.type.$$typeof)===kw?jw:"$$typeof"in e?XM[e.$$typeof]:KM;var t}var WM=Object.defineProperty,QM=Object.getOwnPropertyNames,qy=Object.getOwnPropertySymbols,ZM=Object.getOwnPropertyDescriptor,JM=Object.getPrototypeOf,Ky=Object.prototype;function Ew(e,t,a){if(typeof t!="string"){if(Ky){var i=JM(t);i&&i!==Ky&&Ew(e,i,a)}var o=QM(t);qy&&(o=o.concat(qy(t)));for(var l=Fy(e),u=Fy(t),f=0;f<o.length;++f){var p=o[f];if(!(p in YM||a&&a[p]||u&&p in u||l&&p in l)){var m=ZM(t,p);try{WM(e,p,m)}catch{}}}}return e}function is(e){return typeof e=="function"}function gg(e){return typeof e=="object"&&"styledComponentId"in e}function Vi(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function nm(e,t){if(e.length===0)return"";for(var a=e[0],i=1;i<e.length;i++)a+=e[i];return a}function el(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function am(e,t,a){if(a===void 0&&(a=!1),!a&&!el(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=am(e[i],t[i]);else if(el(t))for(var i in t)e[i]=am(e[i],t[i]);return e}function bg(e,t){Object.defineProperty(e,"toString",{value:t})}function ul(e){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ez=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var a=0,i=0;i<t;i++)a+=this.groupSizes[i];return a},e.prototype.insertRules=function(t,a){if(t>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;t>=l;)if((l<<=1)<0)throw ul(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var u=o;u<l;u++)this.groupSizes[u]=0}for(var f=this.indexOfGroup(t+1),p=(u=0,a.length);u<p;u++)this.tag.insertRule(f,a[u])&&(this.groupSizes[t]++,f++)},e.prototype.clearGroup=function(t){if(t<this.length){var a=this.groupSizes[t],i=this.indexOfGroup(t),o=i+a;this.groupSizes[t]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(t){var a="";if(t>=this.length||this.groupSizes[t]===0)return a;for(var i=this.groupSizes[t],o=this.indexOfGroup(t),l=o+i,u=o;u<l;u++)a+="".concat(this.tag.getRule(u)).concat(mg);return a},e}(),ru=new Map,Au=new Map,su=1,Dc=function(e){if(ru.has(e))return ru.get(e);for(;Au.has(su);)su++;var t=su++;return ru.set(e,t),Au.set(t,e),t},tz=function(e,t){su=t+1,ru.set(e,t),Au.set(t,e)},nz="style[".concat(ns,"][").concat(xw,'="').concat(Zu,'"]'),az=new RegExp("^".concat(ns,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),iz=function(e,t,a){for(var i,o=a.split(","),l=0,u=o.length;l<u;l++)(i=o[l])&&e.registerName(t,i)},rz=function(e,t){for(var a,i=((a=t.textContent)!==null&&a!==void 0?a:"").split(mg),o=[],l=0,u=i.length;l<u;l++){var f=i[l].trim();if(f){var p=f.match(az);if(p){var m=0|parseInt(p[1],10),g=p[2];m!==0&&(tz(g,m),iz(e,g,p[3]),e.getTag().insertRules(m,o)),o.length=0}else o.push(f)}}},Yy=function(e){for(var t=document.querySelectorAll(nz),a=0,i=t.length;a<i;a++){var o=t[a];o&&o.getAttribute(ns)!==bw&&(rz(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function sz(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Cw=function(e){var t=document.head,a=e||t,i=document.createElement("style"),o=function(f){var p=Array.from(f.querySelectorAll("style[".concat(ns,"]")));return p[p.length-1]}(a),l=o!==void 0?o.nextSibling:null;i.setAttribute(ns,bw),i.setAttribute(xw,Zu);var u=sz();return u&&i.setAttribute("nonce",u),a.insertBefore(i,l),i},oz=function(){function e(t){this.element=Cw(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var i=document.styleSheets,o=0,l=i.length;o<l;o++){var u=i[o];if(u.ownerNode===a)return u}throw ul(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,a){try{return this.sheet.insertRule(a,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var a=this.sheet.cssRules[t];return a&&a.cssText?a.cssText:""},e}(),lz=function(){function e(t){this.element=Cw(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,a){if(t<=this.length&&t>=0){var i=document.createTextNode(a);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),cz=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,a){return t<=this.length&&(this.rules.splice(t,0,a),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Xy=Cu,uz={isServer:!Cu,useCSSOMInjection:!$M},Aw=function(){function e(t,a,i){t===void 0&&(t=as),a===void 0&&(a={});var o=this;this.options=Yt(Yt({},uz),t),this.gs=a,this.names=new Map(i),this.server=!!t.isServer,!this.server&&Cu&&Xy&&(Xy=!1,Yy(this)),bg(this,function(){return function(l){for(var u=l.getTag(),f=u.length,p="",m=function(x){var y=function(j){return Au.get(j)}(x);if(y===void 0)return"continue";var v=l.names.get(y),S=u.getGroup(x);if(v===void 0||!v.size||S.length===0)return"continue";var k="".concat(ns,".g").concat(x,'[id="').concat(y,'"]'),A="";v!==void 0&&v.forEach(function(j){j.length>0&&(A+="".concat(j,","))}),p+="".concat(S).concat(k,'{content:"').concat(A,'"}').concat(mg)},g=0;g<f;g++)m(g);return p}(o)})}return e.registerId=function(t){return Dc(t)},e.prototype.rehydrate=function(){!this.server&&Cu&&Yy(this)},e.prototype.reconstructWithOptions=function(t,a){return a===void 0&&(a=!0),new e(Yt(Yt({},this.options),t),this.gs,a&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(a){var i=a.useCSSOMInjection,o=a.target;return a.isServer?new cz(o):i?new oz(o):new lz(o)}(this.options),new ez(t)));var t},e.prototype.hasNameForId=function(t,a){return this.names.has(t)&&this.names.get(t).has(a)},e.prototype.registerName=function(t,a){if(Dc(t),this.names.has(t))this.names.get(t).add(a);else{var i=new Set;i.add(a),this.names.set(t,i)}},e.prototype.insertRules=function(t,a,i){this.registerName(t,a),this.getTag().insertRules(Dc(t),i)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Dc(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),dz=/&/g,fz=/^\s*\/\/.*$/gm;function Mw(e,t){return e.map(function(a){return a.type==="rule"&&(a.value="".concat(t," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(t," ")),a.props=a.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=Mw(a.children,t)),a})}function pz(e){var t,a,i,o=as,l=o.options,u=l===void 0?as:l,f=o.plugins,p=f===void 0?Ju:f,m=function(y,v,S){return S.startsWith(a)&&S.endsWith(a)&&S.replaceAll(a,"").length>0?".".concat(t):y},g=p.slice();g.push(function(y){y.type===Yu&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(dz,a).replace(i,m))}),u.prefix&&g.push(BM),g.push(PM);var x=function(y,v,S,k){v===void 0&&(v=""),S===void 0&&(S=""),k===void 0&&(k="&"),t=k,a=v,i=new RegExp("\\".concat(a,"\\b"),"g");var A=y.replace(fz,""),j=OM(S||v?"".concat(S," ").concat(v," { ").concat(A," }"):A);u.namespace&&(j=Mw(j,u.namespace));var R=[];return Eu(j,VM(g.concat(NM(function(C){return R.push(C)})))),R};return x.hash=p.length?p.reduce(function(y,v){return v.name||ul(15),Ir(y,v.name)},vw).toString():"",x}var hz=new Aw,im=pz(),zw=Ce.createContext({shouldForwardProp:void 0,styleSheet:hz,stylis:im});zw.Consumer;Ce.createContext(void 0);function Wy(){return E.useContext(zw)}var Rw=function(){function e(t,a){var i=this;this.inject=function(o,l){l===void 0&&(l=im);var u=i.name+l.hash;o.hasNameForId(i.id,u)||o.insertRules(i.id,u,l(i.rules,u,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=a,bg(this,function(){throw ul(12,String(i.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=im),this.name+t.hash},e}(),mz=function(e){return e>="A"&&e<="Z"};function Qy(e){for(var t="",a=0;a<e.length;a++){var i=e[a];if(a===1&&i==="-"&&e[0]==="-")return e;mz(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var Lw=function(e){return e==null||e===!1||e===""},Ow=function(e){var t,a,i=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!Lw(l)&&(Array.isArray(l)&&l.isCss||is(l)?i.push("".concat(Qy(o),":"),l,";"):el(l)?i.push.apply(i,Jo(Jo(["".concat(o," {")],Ow(l),!1),["}"],!1)):i.push("".concat(Qy(o),": ").concat((t=o,(a=l)==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||t in _M||t.startsWith("--")?String(a).trim():"".concat(a,"px")),";")))}return i};function Hi(e,t,a,i){if(Lw(e))return[];if(gg(e))return[".".concat(e.styledComponentId)];if(is(e)){if(!is(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var o=e(t);return Hi(o,t,a,i)}var l;return e instanceof Rw?a?(e.inject(a,i),[e.getName(i)]):[e]:el(e)?Ow(e):Array.isArray(e)?Array.prototype.concat.apply(Ju,e.map(function(u){return Hi(u,t,a,i)})):[e.toString()]}function gz(e){for(var t=0;t<e.length;t+=1){var a=e[t];if(is(a)&&!gg(a))return!1}return!0}var bz=ww(Zu),xz=function(){function e(t,a,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&gz(t),this.componentId=a,this.baseHash=Ir(bz,a),this.baseStyle=i,Aw.registerId(a)}return e.prototype.generateAndInjectStyles=function(t,a,i){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,a,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))o=Vi(o,this.staticRulesId);else{var l=nm(Hi(this.rules,t,a,i)),u=tm(Ir(this.baseHash,l)>>>0);if(!a.hasNameForId(this.componentId,u)){var f=i(l,".".concat(u),void 0,this.componentId);a.insertRules(this.componentId,u,f)}o=Vi(o,u),this.staticRulesId=u}else{for(var p=Ir(this.baseHash,i.hash),m="",g=0;g<this.rules.length;g++){var x=this.rules[g];if(typeof x=="string")m+=x;else if(x){var y=nm(Hi(x,t,a,i));p=Ir(p,y+g),m+=y}}if(m){var v=tm(p>>>0);a.hasNameForId(this.componentId,v)||a.insertRules(this.componentId,v,i(m,".".concat(v),void 0,this.componentId)),o=Vi(o,v)}}return o},e}(),Dw=Ce.createContext(void 0);Dw.Consumer;var Yp={};function yz(e,t,a){var i=gg(e),o=e,l=!Kp(e),u=t.attrs,f=u===void 0?Ju:u,p=t.componentId,m=p===void 0?function(_,M){var D=typeof _!="string"?"sc":Uy(_);Yp[D]=(Yp[D]||0)+1;var N="".concat(D,"-").concat(Sw(Zu+D+Yp[D]));return M?"".concat(M,"-").concat(N):N}(t.displayName,t.parentComponentId):p,g=t.displayName,x=g===void 0?function(_){return Kp(_)?"styled.".concat(_):"Styled(".concat(FM(_),")")}(e):g,y=t.displayName&&t.componentId?"".concat(Uy(t.displayName),"-").concat(t.componentId):t.componentId||m,v=i&&o.attrs?o.attrs.concat(f).filter(Boolean):f,S=t.shouldForwardProp;if(i&&o.shouldForwardProp){var k=o.shouldForwardProp;if(t.shouldForwardProp){var A=t.shouldForwardProp;S=function(_,M){return k(_,M)&&A(_,M)}}else S=k}var j=new xz(a,y,i?o.componentStyle:void 0);function R(_,M){return function(D,N,V){var q=D.attrs,W=D.componentStyle,H=D.defaultProps,ee=D.foldedComponentIds,se=D.styledComponentId,de=D.target,ue=Ce.useContext(Dw),U=Wy(),P=D.shouldForwardProp||U.shouldForwardProp,$=HM(N,ue,H)||as,Q=function(ge,ce,mt){for(var Oe,zt=Yt(Yt({},ce),{className:void 0,theme:mt}),di=0;di<ge.length;di+=1){var oa=is(Oe=ge[di])?Oe(zt):Oe;for(var hn in oa)zt[hn]=hn==="className"?Vi(zt[hn],oa[hn]):hn==="style"?Yt(Yt({},zt[hn]),oa[hn]):oa[hn]}return ce.className&&(zt.className=Vi(zt.className,ce.className)),zt}(q,N,$),z=Q.as||de,X={};for(var ne in Q)Q[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&Q.theme===$||(ne==="forwardedAs"?X.as=Q.forwardedAs:P&&!P(ne,z)||(X[ne]=Q[ne]));var ae=function(ge,ce){var mt=Wy(),Oe=ge.generateAndInjectStyles(ce,mt.styleSheet,mt.stylis);return Oe}(W,Q),oe=Vi(ee,se);return ae&&(oe+=" "+ae),Q.className&&(oe+=" "+Q.className),X[Kp(z)&&!yw.has(z)?"class":"className"]=oe,V&&(X.ref=V),E.createElement(z,X)}(C,_,M)}R.displayName=x;var C=Ce.forwardRef(R);return C.attrs=v,C.componentStyle=j,C.displayName=x,C.shouldForwardProp=S,C.foldedComponentIds=i?Vi(o.foldedComponentIds,o.styledComponentId):"",C.styledComponentId=y,C.target=i?o.target:e,Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=i?function(M){for(var D=[],N=1;N<arguments.length;N++)D[N-1]=arguments[N];for(var V=0,q=D;V<q.length;V++)am(M,q[V],!0);return M}({},o.defaultProps,_):_}}),bg(C,function(){return".".concat(C.styledComponentId)}),l&&Ew(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),C}function Zy(e,t){for(var a=[e[0]],i=0,o=t.length;i<o;i+=1)a.push(t[i],e[i+1]);return a}var Jy=function(e){return Object.assign(e,{isCss:!0})};function ed(e){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];if(is(e)||el(e))return Jy(Hi(Zy(Ju,Jo([e],t,!0))));var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Hi(i):Jy(Hi(Zy(i,t)))}function rm(e,t,a){if(a===void 0&&(a=as),!t)throw ul(1,t);var i=function(o){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return e(t,a,ed.apply(void 0,Jo([o],l,!1)))};return i.attrs=function(o){return rm(e,t,Yt(Yt({},a),{attrs:Array.prototype.concat(a.attrs,o).filter(Boolean)}))},i.withConfig=function(o){return rm(e,t,Yt(Yt({},a),o))},i}var Pw=function(e){return rm(yz,e)},L=Pw;yw.forEach(function(e){L[e]=Pw(e)});function qe(e){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];var i=nm(ed.apply(void 0,Jo([e],t,!1))),o=Sw(i);return new Rw(o,i)}const vz=L.div`
  display: inline-flex;
  align-items: center;

  @media (min-width: 1024px) {
    display: none;
  }
`,wz=L.button`
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
`,Xp=L(ie.span)`
  width: 22px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  display: block;
`,Sz=L(ie.div)`
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
`,Tz=L.div`
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
`,kz=L.span`
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
`,jz=L.button`
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
`,Vr=L(aa)`
  color: #fff;
  text-decoration: none;
  font-size: clamp(30px, 8vw, 48px);
  font-weight: 700;
  line-height: 1.06;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 6px 0;
`,yo=L.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.16);
  margin: 2px 0 6px;
`,Ez=qe`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Cz=qe`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Az=L.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${({$menuOpen:e})=>e?2e3:120};
  backdrop-filter: blur(10px);
  background: rgba(7, 9, 16, 0.78);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,Mz=L.div`
  width: 100%;
  max-width: 1560px;
  margin: 0 auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
`,zz=L.div`
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
`,Rz=L(aa)`
  display: inline-flex;
  align-items: center;
  line-height: 0;
  text-decoration: none;
`,Lz=L.span`
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
  animation: ${Ez} 4.8s ease-in-out infinite;
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
`,Oz=L.nav`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: 1023px) {
    display: none;
  }
`,vo=L(aa)`
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
`,Dz=L.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
  position: relative;
  z-index: 1200;
`,Pz=L(aa)`
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
    animation: ${Cz} 2.2s linear infinite;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`,Vz=L.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`,Nz=L.button`
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
`,ev=L.span`
  font-size: 18px;
  line-height: 1;
`,Bz=L.div`
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
`,_z=L.button`
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
`,$z={open:{rotate:45,y:8},closed:{rotate:0,y:0}},Hz={open:{opacity:0},closed:{opacity:1}},Gz={open:{rotate:-45,y:-8},closed:{rotate:0,y:0}},Uz={open:{opacity:1},closed:{opacity:0}},Iz={de:"Deutsch",uk:"Українська",tr:"Türkçe",ar:"العربية",pl:"Polski",ku:"Kurmancî",fa:"فارسی",it:"Italiano",es:"Español",el:"Ελληνικά",ro:"Română",bg:"Български"},tv={de:"DE",uk:"UA",tr:"TR",ar:"SA",pl:"PL",ku:"KU",fa:"IR",it:"IT",es:"ES",el:"GR",ro:"RO",bg:"BG"},Fz=()=>{const[e,t]=E.useState(!1),[a,i]=E.useState(!1),{language:o,setLanguage:l}=vM(),{t:u}=Ue(),f=E.useRef(null);E.useEffect(()=>{const g=x=>{f.current&&(f.current.contains(x.target)||i(!1))};return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[]),E.useEffect(()=>(e?(document.body.classList.add("modal-open"),i(!1)):document.body.classList.remove("modal-open"),()=>document.body.classList.remove("modal-open")),[e]);const p=()=>t(!1),m=g=>{l(g),i(!1)};return d.jsxs(Az,{$menuOpen:e,children:[d.jsx(Mz,{children:d.jsxs(zz,{children:[d.jsx(Rz,{to:"/",onClick:p,children:d.jsx(ie.div,{initial:{opacity:0,y:-12,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.82,ease:Hu},children:d.jsx(Lz,{children:"<VS/>"})})}),d.jsxs(Oz,{children:[d.jsxs(vo,{to:"/services",children:[d.jsx(fy,{})," ",u("header.services")]}),d.jsxs(vo,{to:"/preise",children:[d.jsx(xu,{})," ",u("header.preise")]}),d.jsxs(vo,{to:"/referenzen",children:[d.jsx(py,{})," ",u("header.referenzen")]}),d.jsxs(vo,{to:"/ueber-uns",children:[d.jsx(hy,{})," ",u("header.ueberUns")]}),d.jsxs(vo,{to:"/kontakt",children:[d.jsx(ri,{})," ",u("header.kontakt")]})]}),d.jsxs(Dz,{children:[d.jsxs(Pz,{to:"/kontakt",children:[d.jsx(Nn,{})," ",u("common.projectRequest")]}),e?null:d.jsxs(Vz,{ref:f,children:[d.jsx(Nz,{type:"button","aria-expanded":a,"aria-label":"Language switcher",onClick:()=>i(g=>!g),children:d.jsx(ev,{children:tv[o]})}),a?d.jsx(Bz,{children:fg.map(g=>d.jsxs(_z,{type:"button",$active:o===g,onClick:()=>m(g),children:[d.jsx(ev,{children:tv[g]}),d.jsx("span",{children:Iz[g]})]},g))}):null]}),d.jsx(vz,{children:d.jsxs(wz,{onClick:()=>t(g=>!g),"aria-label":e?"Close menu":"Open menu",children:[d.jsx(Xp,{animate:e?"open":"closed",variants:$z}),d.jsx(Xp,{animate:e?"open":"closed",variants:Hz}),d.jsx(Xp,{animate:e?"open":"closed",variants:Gz})]})})]})]})}),typeof document<"u"?A9.createPortal(d.jsx(J5,{children:e?d.jsxs(Sz,{initial:"closed",animate:"open",exit:"closed",variants:Uz,transition:{duration:.28,ease:Bm},children:[d.jsxs(Tz,{children:[d.jsx(kz,{children:"<VS/>"}),d.jsx(jz,{type:"button","aria-label":"Close menu",onClick:p,children:d.jsx(tA,{})})]}),d.jsxs(Vr,{to:"/services",onClick:p,children:[d.jsx(fy,{})," ",u("header.services")]}),d.jsx(yo,{}),d.jsxs(Vr,{to:"/preise",onClick:p,children:[d.jsx(xu,{})," ",u("header.preise")]}),d.jsx(yo,{}),d.jsxs(Vr,{to:"/referenzen",onClick:p,children:[d.jsx(py,{})," ",u("header.referenzen")]}),d.jsx(yo,{}),d.jsxs(Vr,{to:"/ueber-uns",onClick:p,children:[d.jsx(hy,{})," ",u("header.ueberUns")]}),d.jsx(yo,{}),d.jsxs(Vr,{to:"/kontakt",onClick:p,children:[d.jsx(ri,{})," ",u("header.kontakt")]}),d.jsx(yo,{}),d.jsxs(Vr,{to:"/kontakt",onClick:p,children:[d.jsx(Nn,{})," ",u("common.projectRequest")]})]}):null}),document.body):null]})},qz=L.footer`
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding: 30px 0 44px;
  background: rgba(8, 10, 18, 0.9);
`,Kz=L.div`
  width: 100%;
  max-width: 1560px;
  margin: 0 auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
`,Yz=L.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,Xz=L.div`
  p {
    margin: 0;
  }
`,Wz=L.p`
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
`,Qz=L.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 14px;
`,Vw=`
  color: rgba(255, 255, 255, 0.84);
  text-decoration: none;
  transition: transform var(--dur-fast) var(--ease-smooth), color var(--dur-fast) var(--ease-smooth);

  &:hover,
  &:focus-visible {
    color: #ffd08a;
    transform: translateY(-1px);
  }
`,wo=L(aa)`
  ${Vw}
`,Zz=L.button`
  ${Vw}
  border: 0;
  background: transparent;
  padding: 0;
  font: inherit;
  cursor: pointer;
`,Jz=e=>/[\u00C3\u00C2\uFFFD]/.test(e),Ri=(e,t)=>Jz(e)?t:e,eR=()=>{const{t:e}=Ue(),t=()=>{window.dispatchEvent(new Event("open-cookie-settings"))};return d.jsx(qz,{children:d.jsx(Kz,{children:d.jsxs(Yz,{children:[d.jsxs(Xz,{children:[d.jsx("p",{children:Ri(e("footer.tagline"),"VS Studio - Websites, Web-Apps, Ads & Automationen")}),d.jsxs(Wz,{children:[d.jsx("a",{href:"mailto:anfrage@vs-web-studio.de",children:"anfrage@vs-web-studio.de"})," | ",d.jsx("a",{href:"tel:+4915164392053",children:"+49 1516 4392053"})]})]}),d.jsxs(Qz,{children:[d.jsx(wo,{to:"/impressum",children:Ri(e("footer.impressum"),"Impressum")}),d.jsx(wo,{to:"/datenschutz",children:Ri(e("footer.datenschutz"),"Datenschutz")}),d.jsx(wo,{to:"/agb",children:Ri(e("footer.agb"),"AGB")}),d.jsx(wo,{to:"/cookies",children:Ri(e("footer.cookies"),"Cookies")}),d.jsx(Zz,{type:"button",onClick:t,children:Ri(e("footer.cookieSettings"),"Cookie-Einstellungen")}),d.jsx(wo,{to:"/blog",children:Ri(e("footer.blog"),"Blog")})]})]})})})},Wp="cookie_consent_v2",tR=()=>{const{t:e}=Ue(),[t,a]=E.useState(!1),[i,o]=E.useState(!1),[l,u]=E.useState(!1),[f,p]=E.useState(!1),[m,g]=E.useState(!1);E.useEffect(()=>{const v=window.localStorage.getItem(Wp);if(v)try{const S=JSON.parse(v);p(!!S.statistics),g(!!S.marketing)}catch{}o(!v),a(!0)},[]),E.useEffect(()=>{const v=()=>{const S=window.localStorage.getItem(Wp);if(S)try{const k=JSON.parse(S);p(!!k.statistics),g(!!k.marketing)}catch{}o(!0),u(!0)};return window.addEventListener("open-cookie-settings",v),()=>window.removeEventListener("open-cookie-settings",v)},[]);const x=E.useMemo(()=>({essential:!0,statistics:f,marketing:m}),[f,m]),y=v=>{window.localStorage.setItem(Wp,JSON.stringify(v)),o(!1),u(!1)};return!t||!i?null:d.jsxs(d.Fragment,{children:[d.jsxs(ie.div,{className:"cookie-banner",initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.5},role:"dialog","aria-live":"polite","aria-label":e("cookie.aria"),children:[d.jsxs("div",{className:"cookie-text",children:[e("cookie.bannerText")," ",d.jsx("a",{href:"/datenschutz",children:e("footer.datenschutz")}),","," ",d.jsx("a",{href:"/cookies",children:e("footer.cookies")}),","," ",d.jsx("a",{href:"/impressum",children:e("footer.impressum")}),"."]}),d.jsxs("div",{className:"cookie-actions",children:[d.jsx("button",{className:"btn btn-secondary cookie-btn",onClick:()=>y({essential:!0,statistics:!1,marketing:!1}),children:e("cookie.onlyEssential")}),d.jsx("button",{className:"btn btn-secondary cookie-btn",onClick:()=>u(!0),children:e("cookie.settings")}),d.jsx("button",{className:"btn btn-primary cookie-btn",onClick:()=>y({essential:!0,statistics:!0,marketing:!0}),children:e("cookie.acceptAll")})]})]}),l?d.jsx(ie.div,{className:"cookie-modal-backdrop",initial:{opacity:0},animate:{opacity:1},children:d.jsxs(ie.div,{className:"cookie-modal",initial:{opacity:0,y:16},animate:{opacity:1,y:0},children:[d.jsx("h3",{children:e("cookie.modalTitle")}),d.jsx("p",{className:"muted",children:e("cookie.modalText")}),d.jsxs("label",{className:"cookie-option",children:[d.jsx("input",{type:"checkbox",checked:!0,disabled:!0}),d.jsx("span",{children:e("cookie.essential")})]}),d.jsxs("label",{className:"cookie-option",children:[d.jsx("input",{type:"checkbox",checked:f,onChange:v=>p(v.target.checked)}),d.jsx("span",{children:e("cookie.statistics")})]}),d.jsxs("label",{className:"cookie-option",children:[d.jsx("input",{type:"checkbox",checked:m,onChange:v=>g(v.target.checked)}),d.jsx("span",{children:e("cookie.marketing")})]}),d.jsxs("div",{className:"cookie-actions",children:[d.jsx("button",{className:"btn btn-secondary cookie-btn",onClick:()=>u(!1),children:e("common.cancel")}),d.jsx("button",{className:"btn btn-primary cookie-btn",onClick:()=>y(x),children:e("cookie.saveSelection")})]})]})}):null]})},nR=L.div`
  min-height: 100vh;
  background:
    radial-gradient(1200px 500px at 12% -10%, rgba(255, 160, 70, 0.2), transparent 60%),
    radial-gradient(900px 420px at 88% 10%, rgba(70, 127, 255, 0.22), transparent 60%),
    linear-gradient(180deg, #070812 0%, #0e1220 100%);
`,aR=L(ie.main)`
  padding-top: 76px;

  @media (max-width: 767px) {
    padding-top: 66px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding-top: 72px;
  }
`,iR=()=>{const e=ra();return E.useEffect(()=>{window.scrollTo({top:0,behavior:"auto"})},[e.pathname]),d.jsxs(nR,{children:[d.jsx(Fz,{}),d.jsx(J5,{mode:"wait",children:d.jsx(aR,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.32,ease:dn},children:d.jsx(KS,{})},e.pathname)}),d.jsx(eR,{}),d.jsx(tR,{})]})};function rR(e=!1){E.useEffect(()=>{if(e)return;let t=0,a=window.innerWidth*.5,i=window.innerHeight*.3;const o=()=>{document.documentElement.style.setProperty("--spotlight-x",`${a}px`),document.documentElement.style.setProperty("--spotlight-y",`${i}px`),t=0},l=u=>{a=u.clientX,i=u.clientY,t||(t=window.requestAnimationFrame(o))};return window.addEventListener("pointermove",l,{passive:!0}),o(),()=>{window.removeEventListener("pointermove",l),t&&window.cancelAnimationFrame(t)}},[e])}function sR(){const[e,t]=E.useState(!1);return E.useEffect(()=>{var o;const a=window.matchMedia("(prefers-reduced-motion: reduce)"),i=()=>t(a.matches);return t(a.matches),(o=a.addEventListener)==null||o.call(a,"change",i),()=>{var l;return(l=a.removeEventListener)==null?void 0:l.call(a,"change",i)}},[]),e}const Fn=({label:e,value:t,options:a,onChange:i})=>d.jsxs("div",{className:"seg",children:[d.jsx("div",{className:"seg-label",children:e}),d.jsx("div",{className:"seg-row",role:"group","aria-label":e,children:a.map(o=>d.jsxs("button",{type:"button",role:"checkbox","aria-checked":t.includes(o.value),className:`seg-btn ${t.includes(o.value)?"active":""}`,onClick:()=>i(t.includes(o.value)?t.filter(l=>l!==o.value):[...t,o.value]),children:[d.jsx("span",{className:"seg-title",children:o.title}),o.hint?d.jsx("span",{className:"seg-hint",children:o.hint}):null]},o.value))})]}),Ao="/assets/hero-main-BwizpqXp.webm",sm="/assets/photo_2025-09-16_22-57-47-BZW9LnVG.jpg",om="/assets/photo_2025-09-16_22-58-19-CMYu6dTK.jpg",lm="/assets/photo_2025-09-16_22-58-10-Bd-7i7_Y.jpg",cm="/assets/photo_2025-09-16_22-58-06-Byl6jOLf.jpg",oR="/assets/01-call-Bgwp57KR.webp",lR="/assets/02-prototype-BmhFIUL-.webp",cR="/assets/03-dev-Vc9Lg5zG.webp",uR="/assets/04-launch-C8dDkkp8.webp",dR={hidden:{opacity:0,y:34,scale:.98},show:{opacity:1,y:0,scale:1}},Qp=[{step:"01",image:oR},{step:"02",image:lR},{step:"03",image:cR},{step:"04",image:uR}],fR=[{id:"c1",tags:["React","TypeScript","SEO","GA4"],poster:sm,video:Ao},{id:"c2",tags:["Landing","Ads","Tracking"],poster:om,video:Ao},{id:"c3",tags:["Forms","Analytics","UX"],poster:lm,video:Ao},{id:"c4",tags:["Firebase","React","Automation"],poster:cm,video:Ao}],pR=["d1","d2","d3","d4"],qn={goal:[{value:"leads",title:"home.configurator.options.goal.leads"},{value:"calls",title:"home.configurator.options.goal.calls"},{value:"booking",title:"home.configurator.options.goal.booking"},{value:"other",title:"home.configurator.options.common.other"}],integrations:[{value:"booking",title:"home.configurator.options.integrations.booking"},{value:"crm",title:"home.configurator.options.integrations.crm"},{value:"chat",title:"home.configurator.options.integrations.chat"},{value:"payments",title:"home.configurator.options.integrations.payments"},{value:"other",title:"home.configurator.options.common.other"}],ads:[{value:"none",title:"home.configurator.options.ads.none"},{value:"meta",title:"home.configurator.options.ads.meta"},{value:"google",title:"home.configurator.options.ads.google"},{value:"other",title:"home.configurator.options.common.other"}],term:[{value:"up-to-7",title:"home.configurator.options.term.up_to_7"},{value:"7-14",title:"home.configurator.options.term.from_7_to_14"},{value:"14-21",title:"home.configurator.options.term.from_14_to_21"},{value:"21-30",title:"home.configurator.options.term.from_21_to_30"},{value:"other",title:"home.configurator.options.common.other"}],content:[{value:"has",title:"home.configurator.options.content.has"},{value:"copy",title:"home.configurator.options.content.copy"},{value:"other",title:"home.configurator.options.common.other"}],languages:[{value:"basic",title:"home.configurator.options.languages.basic"},{value:"multi",title:"home.configurator.options.languages.multi"},{value:"other",title:"home.configurator.options.common.other"}],hosting:[{value:"shared",title:"home.configurator.options.hosting.shared"},{value:"vps",title:"home.configurator.options.hosting.vps"},{value:"managed",title:"home.configurator.options.hosting.managed"},{value:"other",title:"home.configurator.options.common.other"}],domain:[{value:"new-domain",title:"home.configurator.options.domain.new_domain"},{value:"existing-domain",title:"home.configurator.options.domain.existing_domain"},{value:"transfer",title:"home.configurator.options.domain.transfer"},{value:"other",title:"home.configurator.options.common.other"}],pages:[{value:"one",title:"home.configurator.options.pages.one"},{value:"up-to-3",title:"home.configurator.options.pages.up_to_3"},{value:"five-plus",title:"home.configurator.options.pages.five_plus"},{value:"other",title:"home.configurator.options.common.other"}],seo:[{value:"base",title:"home.configurator.options.seo.base"},{value:"extended",title:"home.configurator.options.seo.extended"},{value:"other",title:"home.configurator.options.common.other"}]},hR={leads:576,calls:558,booking:630,other:180},mR={booking:108,crm:153,chat:81,payments:189,other:45},gR={none:20,meta:108,google:135,other:25},bR={"up-to-7":198,"7-14":153,"14-21":81,"21-30":35,other:30},xR={has:35,copy:117,other:35},yR={basic:25,multi:135,other:25},vR={shared:30,vps:85,managed:120,other:30},wR={"new-domain":25,"existing-domain":20,transfer:45,other:25},SR={one:70,"up-to-3":117,"five-plus":189,other:70},TR={base:20,extended:126,other:20},kR={leads:576,calls:558,booking:630,other:320},jR={booking:108,crm:153,chat:81,payments:189,other:120},ER={none:20,meta:108,google:135,other:90},CR={"up-to-7":198,"7-14":153,"14-21":81,"21-30":35,other:120},AR={has:35,copy:117,other:90},MR={basic:25,multi:135,other:90},zR={shared:30,vps:85,managed:120,other:90},RR={"new-domain":25,"existing-domain":20,transfer:45,other:90},LR={one:70,"up-to-3":117,"five-plus":189,other:170},OR={base:20,extended:126,other:90},Kn={goal:"Ziel",integrations:"Integrationen",ads:"Werbung",term:"Zeitrahmen",content:"Content-Level",languages:"Sprachen",hosting:"Hosting",domain:"Domain",pages:"Seiten",seo:"SEO"},DR={goal:{leads:"Leads",calls:"Anrufe",booking:"Buchungen",other:"Andere"},integrations:{booking:"Buchung",crm:"CRM",chat:"Chat",payments:"Zahlungen",other:"Andere"},ads:{none:"Ohne Werbung",meta:"Meta",google:"Google",other:"Andere"},term:{"up-to-7":"Bis 1 Woche","7-14":"7-14 Tage","14-21":"14-21 Tage","21-30":"21-30 Tage",other:"Andere"},content:{has:"Texte vorhanden",copy:"Copywriting ötig",other:"Andere"},languages:{basic:"1 Sprache",multi:"2+ Sprachen",other:"Andere"},hosting:{shared:"Shared Hosting",vps:"VPS",managed:"Managed Hosting",other:"Andere"},domain:{"new-domain":"Neue Domain","existing-domain":"Domain vorhanden",transfer:"Domain-Transfer",other:"Andere"},pages:{one:"1 Seite","up-to-3":"Bis 3 Seiten","five-plus":"5+ Seiten",other:"Andere"},seo:{base:"SEO Base",extended:"SEO Extended",other:"Andere"}},PR=()=>{const{t:e}=Ue(),[t,a]=E.useState([]),[i,o]=E.useState([]),[l,u]=E.useState([]),[f,p]=E.useState([]),[m,g]=E.useState([]),[x,y]=E.useState([]),[v,S]=E.useState([]),[k,A]=E.useState([]),[j,R]=E.useState([]),[C,_]=E.useState([]),M=()=>{a([]),o([]),u([]),p([]),g([]),y([]),S([]),A([]),R([]),_([])},D=(H,ee,se)=>e(H,{defaultValue:ee,...se}),N=(H,ee)=>{var se;return((se=DR[H])==null?void 0:se[ee])??ee},V=E.useMemo(()=>({goal:qn.goal.map(H=>({...H,title:D(H.title,N("goal",H.value))})),integrations:qn.integrations.map(H=>({...H,title:D(H.title,N("integrations",H.value))})),ads:qn.ads.map(H=>({...H,title:D(H.title,N("ads",H.value))})),term:qn.term.map(H=>({...H,title:D(H.title,N("term",H.value))})),content:qn.content.map(H=>({...H,title:D(H.title,N("content",H.value))})),languages:qn.languages.map(H=>({...H,title:D(H.title,N("languages",H.value))})),hosting:qn.hosting.map(H=>({...H,title:D(H.title,N("hosting",H.value))})),domain:qn.domain.map(H=>({...H,title:D(H.title,N("domain",H.value))})),pages:qn.pages.map(H=>({...H,title:D(H.title,N("pages",H.value))})),seo:qn.seo.map(H=>({...H,title:D(H.title,N("seo",H.value))}))}),[e]),q=E.useMemo(()=>{if(![t,i,l,f,m,x,v,k,j,C].every(ne=>ne.length>0))return{isComplete:!1};const ee=(ne,ae)=>ne.reduce((oe,ge)=>oe+(ae[ge]??0),0),se=(ne,ae)=>ne.map(oe=>{var ge;return((ge=ae.find(ce=>ce.value===oe))==null?void 0:ge.title)||oe}).join(", "),de=ee(t,hR)+ee(i,mR)+ee(l,gR)+ee(f,bR)+ee(m,xR)+ee(x,yR)+ee(v,vR)+ee(k,wR)+ee(j,SR)+ee(C,TR),ue=ee(t,kR)+ee(i,jR)+ee(l,ER)+ee(f,CR)+ee(m,AR)+ee(x,MR)+ee(v,zR)+ee(k,RR)+ee(j,LR)+ee(C,OR),U=x.includes("multi")||j.includes("five-plus")||C.includes("extended")||l.some(ne=>ne!=="none"&&ne!=="other")||i.includes("crm")||i.includes("payments"),P=ue>980||U?"Business":"Starter",$=P==="Business"?86:62,Q=$*12,z=Math.round(Q*.7),X=[D("home.configurator.bullets.prototype","Prototyp und Struktur mit Fokus auf Anfragen"),D("home.configurator.bullets.goal","Ziele: {{value}}",{value:se(t,V.goal)}),D("home.configurator.bullets.integrations","Integrationen: {{value}}",{value:se(i,V.integrations)}),D("home.configurator.bullets.term","Zeitrahmen: {{value}}",{value:se(f,V.term)}),D("home.configurator.bullets.hosting","Hosting: {{value}}",{value:se(v,V.hosting)}),D("home.configurator.bullets.domain","Domain: {{value}}",{value:se(k,V.domain)}),D("home.configurator.bullets.pages","Seiten: {{value}}",{value:se(j,V.pages)}),D("home.configurator.bullets.analytics","GA4 und Event-Tracking für Formulare/Kontakte"),m.includes("copy")?D("home.configurator.bullets.copy_true","Unterstützung bei Texten und Offer"):D("home.configurator.bullets.copy_false","Wir arbeiten mit Ihren vorhandenen Texten"),D("home.configurator.bullets.market_note","Orientierungspreis unter marktüblichem Niveau für kleine Unternehmen")];return{isComplete:!0,pack:P,bullets:X,totalFrom:de,totalTo:ue,supportMonthly:$,supportYearlyRaw:Q,supportYearly:z,cta:"/kontakt"}},[l,m,k,t,v,i,x,j,C,e,f,V]),W=E.useMemo(()=>{if(!q.isComplete)return"";const H=(se,de)=>se.map(ue=>{var U;return((U=de.find(P=>P.value===ue))==null?void 0:U.title)||ue}).join(", "),ee=q.totalFrom===q.totalTo?`${q.totalFrom} EUR`:`${q.totalFrom} - ${q.totalTo} EUR`;return[D("home.configurator.brief.title","Brief aus dem Angebots-Konfigurator:"),D("home.configurator.brief.goal","Ziel: {{value}}",{value:H(t,V.goal)}),D("home.configurator.brief.integrations","Integrationen: {{value}}",{value:H(i,V.integrations)}),D("home.configurator.brief.ads","Werbung: {{value}}",{value:H(l,V.ads)}),D("home.configurator.brief.term","Zeitrahmen: {{value}}",{value:H(f,V.term)}),D("home.configurator.brief.content","Content: {{value}}",{value:H(m,V.content)}),D("home.configurator.brief.languages","Sprachen: {{value}}",{value:H(x,V.languages)}),D("home.configurator.brief.hosting","Hosting: {{value}}",{value:H(v,V.hosting)}),D("home.configurator.brief.domain","Domain: {{value}}",{value:H(k,V.domain)}),D("home.configurator.brief.pages","Seiten: {{value}}",{value:H(j,V.pages)}),D("home.configurator.brief.seo","SEO: {{value}}",{value:H(C,V.seo)}),D("home.configurator.brief.launch_price","Startpreis: {{value}}",{value:ee}),D("home.configurator.brief.support_monthly","Support / Monat: {{value}}",{value:`${q.supportMonthly} EUR`}),D("home.configurator.brief.support_yearly","Support / Jahr (-30%): {{value}}",{value:`${q.supportYearly} EUR`})].join(`
`)},[l,m,k,t,v,i,x,q,j,C,e,f,V]);return d.jsxs("div",{className:"card configurator-card",children:[d.jsx(Fn,{label:D("home.configurator.labels.goal",Kn.goal),value:t,options:V.goal,onChange:a}),d.jsx(Fn,{label:D("home.configurator.labels.integrations",Kn.integrations),value:i,options:V.integrations,onChange:o}),d.jsx(Fn,{label:D("home.configurator.labels.ads",Kn.ads),value:l,options:V.ads,onChange:u}),d.jsx(Fn,{label:D("home.configurator.labels.term",Kn.term),value:f,options:V.term,onChange:p}),d.jsx(Fn,{label:D("home.configurator.labels.content",Kn.content),value:m,options:V.content,onChange:g}),d.jsx(Fn,{label:D("home.configurator.labels.languages",Kn.languages),value:x,options:V.languages,onChange:y}),d.jsx(Fn,{label:D("home.configurator.labels.hosting",Kn.hosting),value:v,options:V.hosting,onChange:S}),d.jsx(Fn,{label:D("home.configurator.labels.domain",Kn.domain),value:k,options:V.domain,onChange:A}),d.jsx(Fn,{label:D("home.configurator.labels.pages",Kn.pages),value:j,options:V.pages,onChange:R}),d.jsx(Fn,{label:D("home.configurator.labels.seo",Kn.seo),value:C,options:V.seo,onChange:_}),d.jsxs("div",{className:"offer",children:[d.jsx("button",{type:"button",className:"btn btn-secondary reset-btn",onClick:M,children:D("home.configurator.reset","Alles zurücksetzen")}),q.isComplete?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"offer-title",children:[D("home.configurator.recommended","Empfohlen:")," ",d.jsx("strong",{children:q.pack==="Business"?D("home.configurator.pack.business","Business"):D("home.configurator.pack.starter","Starter")})]}),d.jsxs("p",{className:"offer-price",children:[D("home.configurator.launchPrice","Startpreis:")," ",d.jsx("strong",{children:q.totalFrom===q.totalTo?`${q.totalFrom} EUR`:`${q.totalFrom} - ${q.totalTo} EUR`})]}),d.jsx("ul",{className:"offer-list",children:q.bullets.map(H=>d.jsx("li",{children:H},H))}),d.jsxs("div",{className:"support-grid",children:[d.jsxs("article",{className:"support-card",children:[d.jsx("h3",{children:D("home.configurator.supportMonthly","Support / Monat")}),d.jsx("p",{children:d.jsxs("strong",{children:[q.supportMonthly," EUR"]})})]}),d.jsxs("article",{className:"support-card",children:[d.jsx("h3",{children:D("home.configurator.supportYearly","Support / Jahr (-30%)")}),d.jsxs("p",{children:[d.jsxs("strong",{children:[q.supportYearly," EUR"]})," ",d.jsxs("span",{className:"support-old",children:[q.supportYearlyRaw," EUR"]})]})]})]}),d.jsx(aa,{to:q.cta,state:{prefillNeed:W},className:"btn btn-primary offer-cta",children:D("home.configurator.cta","Kontaktanfrage und exakter Kostenvoranschlag")})]}):d.jsx("div",{className:"offer-empty",children:D("home.configurator.empty",'Wählen Sie mindestens eine Option in jedem Block. Mehrfachauswahl ist möglich; bei "Andere" wird keine Zusatzgebühr berechnet.')})]})]})},VR=L.div`
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
`,pt={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.6,ease:dn}}},Pc={hidden:{opacity:0,x:-40},visible:{opacity:1,x:0,transition:{duration:.7,ease:dn}}},ei={hidden:{opacity:0,x:40},visible:{opacity:1,x:0,transition:{duration:.7,ease:dn}}},Ye={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:.8,ease:dn}}},Pt={hidden:{},visible:{transition:{staggerChildren:.1}}},NR=()=>{const{t:e}=Ue();return d.jsx(VR,{children:d.jsxs(ie.section,{className:"section configurator",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.18},variants:pt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.configurator.title",{defaultValue:"Angebots-Konfigurator"})}),d.jsx("p",{className:"section-description",children:e("home.configurator.desc",{defaultValue:"Wählen Sie Projektparameter und erhalten Sie einen Startpreis sowie passende Support-Tarife."})})]}),d.jsx(ie.div,{variants:Ye,children:d.jsx(PR,{})})]})})},Ii=({text:e,durationMs:t=6200,storageKey:a="terminal_typed_once"})=>{const[i,o]=E.useState(0),[l,u]=E.useState(!1),f=E.useMemo(()=>{const p=Math.max(e.length,1);return Math.max(24,Math.floor(t/p))},[t,e.length]);return E.useEffect(()=>{if(typeof window>"u")return;if(window.sessionStorage.getItem(a)==="1"){o(e.length),u(!0);return}let m=0;const g=window.setInterval(()=>{m+=1,o(m),m>=e.length&&(window.clearInterval(g),u(!0),window.sessionStorage.setItem(a,"1"))},f);return()=>window.clearInterval(g)},[f,a,e]),d.jsxs("span",{className:"terminal-text","aria-label":e,children:[e.slice(0,i),!l&&d.jsx("span",{className:"terminal-cursor",children:"|"})]})},BR=L.div`
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
`,_R=()=>{const{t:e}=Ue();return d.jsx(BR,{children:d.jsxs(ie.section,{id:"faq",className:"section",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.18},variants:pt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:d.jsx(Ii,{text:e("home.faqTitle",{defaultValue:"FAQ"}),durationMs:2200,storageKey:"faq_title_v2"})}),d.jsx("p",{className:"section-description",children:e("home.faq.desc",{defaultValue:"Antworten auf häufige Fragen zu Timing, Kosten, Launch-Prozess und laufender Betreuung."})})]}),d.jsxs(ie.div,{className:"faq",variants:Pt,children:[d.jsxs(ie.details,{variants:Ye,children:[d.jsx("summary",{children:e("home.faq.q1",{defaultValue:"Wie schnell könnt ihr starten?"})}),d.jsx("div",{className:"faq-answer",children:d.jsx("p",{children:e("home.faq.a1",{defaultValue:"In der Regel starten wir innerhalb von 3-5 Werktagen. Direkt nach deiner Anfrage bekommst du einen kurzen Plan mit den ersten Schritten."})})})]}),d.jsxs(ie.details,{variants:Ye,children:[d.jsx("summary",{children:e("home.faq.q2",{defaultValue:"Was brauche ich als Kunde am Anfang?"})}),d.jsx("div",{className:"faq-answer",children:d.jsx("p",{children:e("home.faq.a2",{defaultValue:"Nur Basisinfos zu deinem Angebot, Zielgruppe und Kontaktwegen. Wir helfen dir dann bei Struktur, Texten und Prioritäten."})})})]}),d.jsxs(ie.details,{variants:Ye,children:[d.jsx("summary",{children:e("home.faq.q3",{defaultValue:"Wie läuft die Zusammenarbeit ab?"})}),d.jsx("div",{className:"faq-answer",children:d.jsx("p",{children:e("home.faq.a3",{defaultValue:"Wir arbeiten in kurzen Etappen: Konzept, Design, Umsetzung, Launch. Du bekommst klare Updates, damit du immer weißt, was als Nächstes passiert."})})})]}),d.jsxs(ie.details,{variants:Ye,children:[d.jsx("summary",{children:e("home.faq.q4",{defaultValue:"Ist das für kleine Unternehmen geeignet?"})}),d.jsx("div",{className:"faq-answer",children:d.jsx("p",{children:e("home.faq.a4",{defaultValue:"Ja. Unsere Pakete sind bewusst für lokale Betriebe aufgebaut: klare Preise, schneller Start und Fokus auf echte Anfragen statt nur Optik."})})})]}),d.jsxs(ie.details,{variants:Ye,children:[d.jsx("summary",{children:e("home.faq.q5",{defaultValue:"Was passiert nach dem Launch?"})}),d.jsx("div",{className:"faq-answer",children:d.jsx("p",{children:e("home.faq.a5",{defaultValue:"Nach dem Launch prüfen wir Daten, verbessern Conversion-Punkte und unterstützen dich beim Feinschliff, damit die Seite dauerhaft besser performt."})})})]})]})]})})},$R="/assets/Sub_Zero_Refrigerator_Cinematic_Reveal-BIqjoL6O.mov",HR=L.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
`,GR=L.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.04);
  z-index: 0;
`,UR=L.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgb(0 0 0 / 87%) 0%, rgb(0 0 0 / 48%) 50%, rgba(0, 0, 0, 0.4) 100%);
  z-index: 1;
`,IR=()=>d.jsxs(HR,{children:[d.jsxs(GR,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",poster:"/images/hero-generated.svg",children:[d.jsx("source",{src:Ao,type:"video/webm"}),d.jsx("source",{src:$R,type:"video/mp4"})]}),d.jsx(UR,{})]}),FR=L.div`
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
`,qR=({reducedMotion:e})=>{const{t}=Ue(),{scrollYProgress:a}=zC(),i=oy(a,[0,.45],[0,-24]),o=oy(a,[0,.4],[0,30]),[l,u]=E.useState({x:0,y:0}),f=m=>{if(e)return;const g=m.currentTarget.getBoundingClientRect(),x=(m.clientX-g.left-g.width/2)/12,y=(m.clientY-g.top-g.height/2)/12;u({x:Math.max(-8,Math.min(8,x)),y:Math.max(-8,Math.min(8,y))})},p=()=>u({x:0,y:0});return d.jsx(FR,{children:d.jsxs(ie.section,{className:"hero hero-with-video",initial:"hidden",animate:"show",variants:dR,transition:{duration:.85,ease:Hu},children:[d.jsx(ie.div,{className:"hero-video-parallax",style:{y:o},children:d.jsx(IR,{})}),d.jsxs(ie.div,{className:"hero-content",style:{y:i},initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.9,ease:dn},children:[d.jsx("h1",{children:d.jsx(Ii,{text:t("home.heroTitle",{defaultValue:"Websites, die Anfragen bringen statt nur gut aussehen."}),durationMs:6200,storageKey:"hero_terminal_once"})}),d.jsx("p",{children:t("home.heroSubtitle",{defaultValue:"Klare Positionierung, schnelle Umsetzung und transparente Pakete für lokale Dienstleister in Deutschland."})}),d.jsxs("div",{className:"btn-row",children:[d.jsxs(aa,{to:"/kontakt",className:"btn btn-primary btn-magnetic",onMouseMove:f,onMouseLeave:p,style:{transform:`translate(${l.x}px, ${l.y}px)`},children:[d.jsx(Nn,{})," ",t("common.projectRequest")]}),d.jsxs(aa,{to:"/preise",className:"btn btn-secondary",children:[d.jsx(xu,{})," ",t("common.viewPrices")]}),d.jsxs("a",{href:"#faq",className:"btn btn-secondary",children:[d.jsx(Nn,{})," ",t("home.toFaq",{defaultValue:"Zum FAQ"})]})]})]}),d.jsxs("aside",{className:"hero-bento",children:[d.jsxs("article",{className:"bento-tile",children:[d.jsx("span",{children:t("home.hero.bento.speed.label",{defaultValue:"Geschwindigkeit"})}),d.jsx("strong",{children:t("home.hero.bento.speed.value",{defaultValue:"90+ Lighthouse"})}),d.jsx(qu,{className:"bento-icon-bg","aria-hidden":"true"})]}),d.jsxs("article",{className:"bento-tile",children:[d.jsx("span",{children:t("home.hero.bento.seo.label",{defaultValue:"SEO"})}),d.jsx("strong",{children:t("home.hero.bento.seo.value",{defaultValue:"Technisches Fundament"})}),d.jsx(ZC,{className:"bento-icon-bg","aria-hidden":"true"})]}),d.jsxs("article",{className:"bento-tile",children:[d.jsx("span",{children:t("home.hero.bento.leads.label",{defaultValue:"Anfragen"})}),d.jsx("strong",{children:t("home.hero.bento.leads.value",{defaultValue:"Klare CTA und Formulare"})}),d.jsx(UC,{className:"bento-icon-bg","aria-hidden":"true"})]}),d.jsxs("article",{className:"bento-tile",children:[d.jsx("span",{children:t("home.hero.bento.support.label",{defaultValue:"Support"})}),d.jsx("strong",{children:t("home.hero.bento.support.value",{defaultValue:"Nach dem Launch"})}),d.jsx(WC,{className:"bento-icon-bg","aria-hidden":"true"})]})]})]})})},KR=L.div`
  display: grid;
  gap: 16px;
`,YR=L.div`
  display: grid;
  gap: 8px;
`,XR=L.h3`
  font-size: 16px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.88);
`,WR=L.div`
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(10, 14, 26, 0.86);
  padding: 12px;
`,QR=L.div`
  display: flex;
  width: max-content;
  gap: 12px;
`,ZR=L.div`
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
`,JR=L.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.18);
`,eL=L.span`
  color: #ffdba2;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,tL=L.span`
  color: #fef6df;
  font-size: 15px;
  font-weight: 700;
`,nL=L.span`
  color: rgba(255, 255, 255, 0.78);
  font-size: 13px;
  line-height: 1.35;
`,aL=[{title:"Trusted Technologies",direction:"left",speed:60,items:[{label:"React",description:"UI",group:"Tech"},{label:"TypeScript",description:"Typing",group:"Tech"},{label:"SEO",description:"Visibility",group:"Growth"},{label:"Analytics",description:"Data",group:"Growth"},{label:"Automation",description:"Ops",group:"AI"}]}],Nw=({rows:e=aL})=>d.jsx(KR,{children:e.map((t,a)=>{const i=t.speed??60,o=[...t.items,...t.items,...t.items];return d.jsxs(YR,{children:[t.title?d.jsx(ie.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.5},transition:{duration:.6,ease:dn},children:d.jsx(XR,{children:t.title})}):null,d.jsx(WR,{children:d.jsx(QR,{as:ie.div,animate:{x:t.direction==="right"?["-33.3333%","0%"]:["0%","-33.3333%"]},transition:{duration:i,ease:"linear",repeat:1/0,repeatType:"loop"},children:o.map((l,u)=>d.jsxs(ZR,{$backgroundImage:l.backgroundImage,children:[d.jsxs("div",{className:"badge-top",children:[l.icon?d.jsx(JR,{style:{color:l.iconColor??"#fff",background:l.iconBg??"rgba(255,255,255,.18)"},children:l.icon}):null,l.group?d.jsx(eL,{children:l.group}):null]}),d.jsx(tL,{children:l.label}),l.description?d.jsx(nL,{children:l.description}):null]},`${l.group??"group"}-${l.label}-${u}`))})})]},`${t.title??"row"}-${a}`)})}),iL="/assets/Beauty-B5nCKot8.png",rL="/assets/Bildung-DUb95Jd7.png",sL="/assets/Coaching-Jbjo8OUB.png",oL="/assets/Fitness-CUZr8LbH.png",lL="/assets/Gastronomie-9VWW2aHc.png",cL="/assets/Handwerk-BNTwGaMa.png",uL="/assets/Immobilien-COg-qJ-F.png",dL="/assets/Kanzlei-BRg3E-LB.png",fL="/assets/Praxen-yTv6AWqn.png",pL="/assets/Reinigung-BnCbAVwW.png",hL="/assets/Transport-CSnl9Wxm.png",mL="/assets/Werkst%C3%A4tten-CrYP5CWR.png",gL=L.div`
  .marquee-wrap {
    margin-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
    background: rgba(255, 255, 255, 0.02);
  }
`,bL=()=>{const{t:e}=Ue(),t=E.useMemo(()=>[{label:e("home.marquee.items.handwerk",{defaultValue:"Handwerk"}),icon:d.jsx(K4,{}),backgroundImage:cL},{label:e("home.marquee.items.praxen",{defaultValue:"Praxen"}),icon:d.jsx(Y4,{}),backgroundImage:fL},{label:e("home.marquee.items.werkstaetten",{defaultValue:"Werkstätten"}),icon:d.jsx(X4,{}),backgroundImage:mL},{label:e("home.marquee.items.gastronomie",{defaultValue:"Gastronomie"}),icon:d.jsx(rA,{}),backgroundImage:lL},{label:e("home.marquee.items.beauty",{defaultValue:"Beauty"}),icon:d.jsx(eA,{}),backgroundImage:iL},{label:e("home.marquee.items.immobilien",{defaultValue:"Immobilien"}),icon:d.jsx(F4,{}),backgroundImage:uL},{label:e("home.marquee.items.kanzlei",{defaultValue:"Kanzlei"}),icon:d.jsx(HC,{}),backgroundImage:dL},{label:e("home.marquee.items.fitness",{defaultValue:"Fitness"}),icon:d.jsx(qC,{}),backgroundImage:oL},{label:e("home.marquee.items.reinigung",{defaultValue:"Reinigung"}),icon:d.jsx(GC,{}),backgroundImage:pL},{label:e("home.marquee.items.transport",{defaultValue:"Transport"}),icon:d.jsx(aA,{}),backgroundImage:hL},{label:e("home.marquee.items.coaching",{defaultValue:"Coaching"}),icon:d.jsx(IC,{}),backgroundImage:sL},{label:e("home.marquee.items.bildung",{defaultValue:"Bildung"}),icon:d.jsx(YC,{}),backgroundImage:rL}],[e]),a=E.useMemo(()=>[{direction:"left",speed:52,items:t}],[t]);return d.jsx(gL,{children:d.jsxs(ie.section,{className:"section marquee-wrap","aria-label":e("home.marquee.aria",{defaultValue:"Branchen"}),initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:pt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.marquee.title",{defaultValue:"Branchen, mit denen wir arbeiten"})}),d.jsx("p",{className:"section-description",children:e("home.marquee.desc",{defaultValue:"Wählen Sie eine Richtung und sehen Sie passende Stilbeispiele. So bauen wir schneller ein präzises Angebot für Ihr Unternehmen."})})]}),d.jsx(Nw,{rows:a})]})})},xL=()=>{const{t:e}=Ue(),t=E.useMemo(()=>[{title:e("home.partnersTitle",{defaultValue:"Highlights, Zielgruppen und Leistungen"}),direction:"right",speed:58,items:[{group:e("home.groups.highlights",{defaultValue:"Highlights"}),label:e("home.partners.fastLoad.title",{defaultValue:"Schnell geladen"}),description:e("home.partners.fastLoad.desc",{defaultValue:"Seite lädt in Sekunden"}),icon:d.jsx(qu,{}),iconColor:"#FFD25F",iconBg:"rgba(255,210,95,.2)"},{group:e("home.groups.highlights",{defaultValue:"Highlights"}),label:e("home.partners.moreLeads.title",{defaultValue:"Mehr Anfragen"}),description:e("home.partners.moreLeads.desc",{defaultValue:"Mehr Kontakte über Formulare"}),icon:d.jsx(Gi,{}),iconColor:"#58D68D",iconBg:"rgba(88,214,141,.2)"},{group:e("home.groups.highlights",{defaultValue:"Highlights"}),label:e("home.partners.clearPrices.title",{defaultValue:"Klare Preise"}),description:e("home.partners.clearPrices.desc",{defaultValue:"Du kennst Kosten im Voraus"}),icon:d.jsx(xu,{}),iconColor:"#5DADE2",iconBg:"rgba(93,173,226,.2)"},{group:e("home.groups.highlights",{defaultValue:"Highlights"}),label:e("home.partners.personalHelp.title",{defaultValue:"Persönliche Hilfe"}),description:e("home.partners.personalHelp.desc",{defaultValue:"Direkter Support ohne Warteschlange"}),icon:d.jsx(XC,{}),iconColor:"#F5B7B1",iconBg:"rgba(245,183,177,.2)"},{group:e("home.groups.forWhom",{defaultValue:"Für wen"}),label:e("home.partners.handwerker.title",{defaultValue:"Handwerker"}),description:e("home.partners.handwerker.desc",{defaultValue:"Anfragen pro Stadt und Leistung"}),icon:d.jsx(K4,{}),iconColor:"#F8C471",iconBg:"rgba(248,196,113,.2)"},{group:e("home.groups.forWhom",{defaultValue:"Für wen"}),label:e("home.partners.praxen.title",{defaultValue:"Praxen"}),description:e("home.partners.praxen.desc",{defaultValue:"Patienten finden schneller Termine"}),icon:d.jsx(Y4,{}),iconColor:"#EC7063",iconBg:"rgba(236,112,99,.2)"},{group:e("home.groups.forWhom",{defaultValue:"Für wen"}),label:e("home.partners.werkstaetten.title",{defaultValue:"Werkstätten"}),description:e("home.partners.werkstaetten.desc",{defaultValue:"Klare Service-Seiten mit Tracking"}),icon:d.jsx(X4,{}),iconColor:"#AF7AC5",iconBg:"rgba(175,122,197,.2)"},{group:e("home.groups.forWhom",{defaultValue:"Für wen"}),label:e("home.partners.localServices.title",{defaultValue:"Lokale Services"}),description:e("home.partners.localServices.desc",{defaultValue:"Mehr Sichtbarkeit vor Ort"}),icon:d.jsx(Po,{}),iconColor:"#E74C3C",iconBg:"rgba(231,76,60,.2)"},{group:e("home.groups.services",{defaultValue:"Leistungen"}),label:e("home.partners.websites.title",{defaultValue:"Websites"}),description:e("home.partners.websites.desc",{defaultValue:"Modern, schnell, mobil optimiert"}),icon:d.jsx(Fh,{}),iconColor:"#48C9B0",iconBg:"rgba(72,201,176,.2)"},{group:e("home.groups.services",{defaultValue:"Leistungen"}),label:e("home.partners.webApps.title",{defaultValue:"Web-Apps"}),description:e("home.partners.webApps.desc",{defaultValue:"Tools für Team und Kunden"}),icon:d.jsx(dg,{}),iconColor:"#85C1E9",iconBg:"rgba(133,193,233,.2)"},{group:e("home.groups.services",{defaultValue:"Leistungen"}),label:e("home.partners.aiIntegration.title",{defaultValue:"AI Integration"}),description:e("home.partners.aiIntegration.desc",{defaultValue:"Chatbot für Fragen und Leads"}),icon:d.jsx(Zr,{}),iconColor:"#F7DC6F",iconBg:"rgba(247,220,111,.2)"},{group:e("home.groups.services",{defaultValue:"Leistungen"}),label:e("home.partners.socialMedia.title",{defaultValue:"Social Media"}),description:e("home.partners.socialMedia.desc",{defaultValue:"Website + Instagram/Meta verbunden"}),icon:d.jsx(W4,{}),iconColor:"#5DADE2",iconBg:"rgba(93,173,226,.2)"},{group:e("home.groups.services",{defaultValue:"Leistungen"}),label:e("home.partners.socialAds.title",{defaultValue:"Social Ads"}),description:e("home.partners.socialAds.desc",{defaultValue:"Gezielte Werbung mit messbaren Ergebnissen"}),icon:d.jsx(cl,{}),iconColor:"#F1948A",iconBg:"rgba(241,148,138,.2)"}]}],[e]);return d.jsxs(ie.section,{className:"section",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:pt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.partnersSection.title",{defaultValue:"Vorteile und Einsatzbereiche"})}),d.jsx("p",{className:"section-description",children:e("home.partnersSection.desc",{defaultValue:"Welche Aufgaben wir abdecken und für welche lokalen Unternehmen wir am häufigsten Websites und Lead-Funnels umsetzen."})})]}),d.jsx(Nw,{rows:t})]})};function nv(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function xg(e,t){e===void 0&&(e={}),t===void 0&&(t={});const a=["__proto__","constructor","prototype"];Object.keys(t).filter(i=>a.indexOf(i)<0).forEach(i=>{typeof e[i]>"u"?e[i]=t[i]:nv(t[i])&&nv(e[i])&&Object.keys(t[i]).length>0&&xg(e[i],t[i])})}const Bw={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Wt(){const e=typeof document<"u"?document:{};return xg(e,Bw),e}const yL={document:Bw,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Mt(){const e=typeof window<"u"?window:{};return xg(e,yL),e}function vL(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function wL(e){const t=e;Object.keys(t).forEach(a=>{try{t[a]=null}catch{}try{delete t[a]}catch{}})}function _w(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function Mu(){return Date.now()}function SL(e){const t=Mt();let a;return t.getComputedStyle&&(a=t.getComputedStyle(e,null)),!a&&e.currentStyle&&(a=e.currentStyle),a||(a=e.style),a}function TL(e,t){t===void 0&&(t="x");const a=Mt();let i,o,l;const u=SL(e);return a.WebKitCSSMatrix?(o=u.transform||u.webkitTransform,o.split(",").length>6&&(o=o.split(", ").map(f=>f.replace(",",".")).join(", ")),l=new a.WebKitCSSMatrix(o==="none"?"":o)):(l=u.MozTransform||u.OTransform||u.MsTransform||u.msTransform||u.transform||u.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=l.toString().split(",")),t==="x"&&(a.WebKitCSSMatrix?o=l.m41:i.length===16?o=parseFloat(i[12]):o=parseFloat(i[4])),t==="y"&&(a.WebKitCSSMatrix?o=l.m42:i.length===16?o=parseFloat(i[13]):o=parseFloat(i[5])),o||0}function Vc(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function kL(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function cn(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let a=1;a<arguments.length;a+=1){const i=a<0||arguments.length<=a?void 0:arguments[a];if(i!=null&&!kL(i)){const o=Object.keys(Object(i)).filter(l=>t.indexOf(l)<0);for(let l=0,u=o.length;l<u;l+=1){const f=o[l],p=Object.getOwnPropertyDescriptor(i,f);p!==void 0&&p.enumerable&&(Vc(e[f])&&Vc(i[f])?i[f].__swiper__?e[f]=i[f]:cn(e[f],i[f]):!Vc(e[f])&&Vc(i[f])?(e[f]={},i[f].__swiper__?e[f]=i[f]:cn(e[f],i[f])):e[f]=i[f])}}}return e}function Nc(e,t,a){e.style.setProperty(t,a)}function $w(e){let{swiper:t,targetPosition:a,side:i}=e;const o=Mt(),l=-t.translate;let u=null,f;const p=t.params.speed;t.wrapperEl.style.scrollSnapType="none",o.cancelAnimationFrame(t.cssModeFrameID);const m=a>l?"next":"prev",g=(y,v)=>m==="next"&&y>=v||m==="prev"&&y<=v,x=()=>{f=new Date().getTime(),u===null&&(u=f);const y=Math.max(Math.min((f-u)/p,1),0),v=.5-Math.cos(y*Math.PI)/2;let S=l+v*(a-l);if(g(S,a)&&(S=a),t.wrapperEl.scrollTo({[i]:S}),g(S,a)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[i]:S})}),o.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=o.requestAnimationFrame(x)};x()}function Hw(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function Ea(e,t){t===void 0&&(t="");const a=Mt(),i=[...e.children];return a.HTMLSlotElement&&e instanceof HTMLSlotElement&&i.push(...e.assignedElements()),t?i.filter(o=>o.matches(t)):i}function jL(e,t){const a=[t];for(;a.length>0;){const i=a.shift();if(e===i)return!0;a.push(...i.children,...i.shadowRoot?i.shadowRoot.children:[],...i.assignedElements?i.assignedElements():[])}}function EL(e,t){const a=Mt();let i=t.contains(e);return!i&&a.HTMLSlotElement&&t instanceof HTMLSlotElement&&(i=[...t.assignedElements()].includes(e),i||(i=jL(e,t))),i}function zu(e){try{console.warn(e);return}catch{}}function Ru(e,t){t===void 0&&(t=[]);const a=document.createElement(e);return a.classList.add(...Array.isArray(t)?t:vL(t)),a}function CL(e){const t=Mt(),a=Wt(),i=e.getBoundingClientRect(),o=a.body,l=e.clientTop||o.clientTop||0,u=e.clientLeft||o.clientLeft||0,f=e===t?t.scrollY:e.scrollTop,p=e===t?t.scrollX:e.scrollLeft;return{top:i.top+f-l,left:i.left+p-u}}function AL(e,t){const a=[];for(;e.previousElementSibling;){const i=e.previousElementSibling;t?i.matches(t)&&a.push(i):a.push(i),e=i}return a}function ML(e,t){const a=[];for(;e.nextElementSibling;){const i=e.nextElementSibling;t?i.matches(t)&&a.push(i):a.push(i),e=i}return a}function ii(e,t){return Mt().getComputedStyle(e,null).getPropertyValue(t)}function um(e){let t=e,a;if(t){for(a=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(a+=1);return a}}function dm(e,t){const a=[];let i=e.parentElement;for(;i;)t?i.matches(t)&&a.push(i):a.push(i),i=i.parentElement;return a}function zL(e,t){function a(i){i.target===e&&(t.call(e,i),e.removeEventListener("transitionend",a))}t&&e.addEventListener("transitionend",a)}function av(e,t,a){const i=Mt();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function vt(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function fm(e,t){t===void 0&&(t=""),typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:a=>a}).createHTML(t):e.innerHTML=t}let Zp;function RL(){const e=Mt(),t=Wt();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Gw(){return Zp||(Zp=RL()),Zp}let Jp;function LL(e){let{userAgent:t}=e===void 0?{}:e;const a=Gw(),i=Mt(),o=i.navigator.platform,l=t||i.navigator.userAgent,u={ios:!1,android:!1},f=i.screen.width,p=i.screen.height,m=l.match(/(Android);?[\s\/]+([\d.]+)?/);let g=l.match(/(iPad).*OS\s([\d_]+)/);const x=l.match(/(iPod)(.*OS\s([\d_]+))?/),y=!g&&l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=o==="Win32";let S=o==="MacIntel";const k=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!g&&S&&a.touch&&k.indexOf(`${f}x${p}`)>=0&&(g=l.match(/(Version)\/([\d.]+)/),g||(g=[0,1,"13_0_0"]),S=!1),m&&!v&&(u.os="android",u.android=!0),(g||y||x)&&(u.os="ios",u.ios=!0),u}function Uw(e){return e===void 0&&(e={}),Jp||(Jp=LL(e)),Jp}let eh;function OL(){const e=Mt(),t=Uw();let a=!1;function i(){const f=e.navigator.userAgent.toLowerCase();return f.indexOf("safari")>=0&&f.indexOf("chrome")<0&&f.indexOf("android")<0}if(i()){const f=String(e.navigator.userAgent);if(f.includes("Version/")){const[p,m]=f.split("Version/")[1].split(" ")[0].split(".").map(g=>Number(g));a=p<16||p===16&&m<2}}const o=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),l=i(),u=l||o&&t.ios;return{isSafari:a||l,needPerspectiveFix:a,need3dFix:u,isWebView:o}}function Iw(){return eh||(eh=OL()),eh}function DL(e){let{swiper:t,on:a,emit:i}=e;const o=Mt();let l=null,u=null;const f=()=>{!t||t.destroyed||!t.initialized||(i("beforeResize"),i("resize"))},p=()=>{!t||t.destroyed||!t.initialized||(l=new ResizeObserver(x=>{u=o.requestAnimationFrame(()=>{const{width:y,height:v}=t;let S=y,k=v;x.forEach(A=>{let{contentBoxSize:j,contentRect:R,target:C}=A;C&&C!==t.el||(S=R?R.width:(j[0]||j).inlineSize,k=R?R.height:(j[0]||j).blockSize)}),(S!==y||k!==v)&&f()})}),l.observe(t.el))},m=()=>{u&&o.cancelAnimationFrame(u),l&&l.unobserve&&t.el&&(l.unobserve(t.el),l=null)},g=()=>{!t||t.destroyed||!t.initialized||i("orientationchange")};a("init",()=>{if(t.params.resizeObserver&&typeof o.ResizeObserver<"u"){p();return}o.addEventListener("resize",f),o.addEventListener("orientationchange",g)}),a("destroy",()=>{m(),o.removeEventListener("resize",f),o.removeEventListener("orientationchange",g)})}function PL(e){let{swiper:t,extendParams:a,on:i,emit:o}=e;const l=[],u=Mt(),f=function(g,x){x===void 0&&(x={});const y=u.MutationObserver||u.WebkitMutationObserver,v=new y(S=>{if(t.__preventObserver__)return;if(S.length===1){o("observerUpdate",S[0]);return}const k=function(){o("observerUpdate",S[0])};u.requestAnimationFrame?u.requestAnimationFrame(k):u.setTimeout(k,0)});v.observe(g,{attributes:typeof x.attributes>"u"?!0:x.attributes,childList:t.isElement||(typeof x.childList>"u"?!0:x).childList,characterData:typeof x.characterData>"u"?!0:x.characterData}),l.push(v)},p=()=>{if(t.params.observer){if(t.params.observeParents){const g=dm(t.hostEl);for(let x=0;x<g.length;x+=1)f(g[x])}f(t.hostEl,{childList:t.params.observeSlideChildren}),f(t.wrapperEl,{attributes:!1})}},m=()=>{l.forEach(g=>{g.disconnect()}),l.splice(0,l.length)};a({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",p),i("destroy",m)}var VL={on(e,t,a){const i=this;if(!i.eventsListeners||i.destroyed||typeof t!="function")return i;const o=a?"unshift":"push";return e.split(" ").forEach(l=>{i.eventsListeners[l]||(i.eventsListeners[l]=[]),i.eventsListeners[l][o](t)}),i},once(e,t,a){const i=this;if(!i.eventsListeners||i.destroyed||typeof t!="function")return i;function o(){i.off(e,o),o.__emitterProxy&&delete o.__emitterProxy;for(var l=arguments.length,u=new Array(l),f=0;f<l;f++)u[f]=arguments[f];t.apply(i,u)}return o.__emitterProxy=t,i.on(e,o,a)},onAny(e,t){const a=this;if(!a.eventsListeners||a.destroyed||typeof e!="function")return a;const i=t?"unshift":"push";return a.eventsAnyListeners.indexOf(e)<0&&a.eventsAnyListeners[i](e),a},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const a=t.eventsAnyListeners.indexOf(e);return a>=0&&t.eventsAnyListeners.splice(a,1),t},off(e,t){const a=this;return!a.eventsListeners||a.destroyed||!a.eventsListeners||e.split(" ").forEach(i=>{typeof t>"u"?a.eventsListeners[i]=[]:a.eventsListeners[i]&&a.eventsListeners[i].forEach((o,l)=>{(o===t||o.__emitterProxy&&o.__emitterProxy===t)&&a.eventsListeners[i].splice(l,1)})}),a},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,a,i;for(var o=arguments.length,l=new Array(o),u=0;u<o;u++)l[u]=arguments[u];return typeof l[0]=="string"||Array.isArray(l[0])?(t=l[0],a=l.slice(1,l.length),i=e):(t=l[0].events,a=l[0].data,i=l[0].context||e),a.unshift(i),(Array.isArray(t)?t:t.split(" ")).forEach(p=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(m=>{m.apply(i,[p,...a])}),e.eventsListeners&&e.eventsListeners[p]&&e.eventsListeners[p].forEach(m=>{m.apply(i,a)})}),e}};function NL(){const e=this;let t,a;const i=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=i.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?a=e.params.height:a=i.clientHeight,!(t===0&&e.isHorizontal()||a===0&&e.isVertical())&&(t=t-parseInt(ii(i,"padding-left")||0,10)-parseInt(ii(i,"padding-right")||0,10),a=a-parseInt(ii(i,"padding-top")||0,10)-parseInt(ii(i,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(a)&&(a=0),Object.assign(e,{width:t,height:a,size:e.isHorizontal()?t:a}))}function BL(){const e=this;function t(W,H){return parseFloat(W.getPropertyValue(e.getDirectionLabel(H))||0)}const a=e.params,{wrapperEl:i,slidesEl:o,size:l,rtlTranslate:u,wrongRTL:f}=e,p=e.virtual&&a.virtual.enabled,m=p?e.virtual.slides.length:e.slides.length,g=Ea(o,`.${e.params.slideClass}, swiper-slide`),x=p?e.virtual.slides.length:g.length;let y=[];const v=[],S=[];let k=a.slidesOffsetBefore;typeof k=="function"&&(k=a.slidesOffsetBefore.call(e));let A=a.slidesOffsetAfter;typeof A=="function"&&(A=a.slidesOffsetAfter.call(e));const j=e.snapGrid.length,R=e.slidesGrid.length;let C=a.spaceBetween,_=-k,M=0,D=0;if(typeof l>"u")return;typeof C=="string"&&C.indexOf("%")>=0?C=parseFloat(C.replace("%",""))/100*l:typeof C=="string"&&(C=parseFloat(C)),e.virtualSize=-C,g.forEach(W=>{u?W.style.marginLeft="":W.style.marginRight="",W.style.marginBottom="",W.style.marginTop=""}),a.centeredSlides&&a.cssMode&&(Nc(i,"--swiper-centered-offset-before",""),Nc(i,"--swiper-centered-offset-after",""));const N=a.grid&&a.grid.rows>1&&e.grid;N?e.grid.initSlides(g):e.grid&&e.grid.unsetSlides();let V;const q=a.slidesPerView==="auto"&&a.breakpoints&&Object.keys(a.breakpoints).filter(W=>typeof a.breakpoints[W].slidesPerView<"u").length>0;for(let W=0;W<x;W+=1){V=0;let H;if(g[W]&&(H=g[W]),N&&e.grid.updateSlide(W,H,g),!(g[W]&&ii(H,"display")==="none")){if(a.slidesPerView==="auto"){q&&(g[W].style[e.getDirectionLabel("width")]="");const ee=getComputedStyle(H),se=H.style.transform,de=H.style.webkitTransform;if(se&&(H.style.transform="none"),de&&(H.style.webkitTransform="none"),a.roundLengths)V=e.isHorizontal()?av(H,"width"):av(H,"height");else{const ue=t(ee,"width"),U=t(ee,"padding-left"),P=t(ee,"padding-right"),$=t(ee,"margin-left"),Q=t(ee,"margin-right"),z=ee.getPropertyValue("box-sizing");if(z&&z==="border-box")V=ue+$+Q;else{const{clientWidth:X,offsetWidth:ne}=H;V=ue+U+P+$+Q+(ne-X)}}se&&(H.style.transform=se),de&&(H.style.webkitTransform=de),a.roundLengths&&(V=Math.floor(V))}else V=(l-(a.slidesPerView-1)*C)/a.slidesPerView,a.roundLengths&&(V=Math.floor(V)),g[W]&&(g[W].style[e.getDirectionLabel("width")]=`${V}px`);g[W]&&(g[W].swiperSlideSize=V),S.push(V),a.centeredSlides?(_=_+V/2+M/2+C,M===0&&W!==0&&(_=_-l/2-C),W===0&&(_=_-l/2-C),Math.abs(_)<1/1e3&&(_=0),a.roundLengths&&(_=Math.floor(_)),D%a.slidesPerGroup===0&&y.push(_),v.push(_)):(a.roundLengths&&(_=Math.floor(_)),(D-Math.min(e.params.slidesPerGroupSkip,D))%e.params.slidesPerGroup===0&&y.push(_),v.push(_),_=_+V+C),e.virtualSize+=V+C,M=V,D+=1}}if(e.virtualSize=Math.max(e.virtualSize,l)+A,u&&f&&(a.effect==="slide"||a.effect==="coverflow")&&(i.style.width=`${e.virtualSize+C}px`),a.setWrapperSize&&(i.style[e.getDirectionLabel("width")]=`${e.virtualSize+C}px`),N&&e.grid.updateWrapperSize(V,y),!a.centeredSlides){const W=[];for(let H=0;H<y.length;H+=1){let ee=y[H];a.roundLengths&&(ee=Math.floor(ee)),y[H]<=e.virtualSize-l&&W.push(ee)}y=W,Math.floor(e.virtualSize-l)-Math.floor(y[y.length-1])>1&&y.push(e.virtualSize-l)}if(p&&a.loop){const W=S[0]+C;if(a.slidesPerGroup>1){const H=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/a.slidesPerGroup),ee=W*a.slidesPerGroup;for(let se=0;se<H;se+=1)y.push(y[y.length-1]+ee)}for(let H=0;H<e.virtual.slidesBefore+e.virtual.slidesAfter;H+=1)a.slidesPerGroup===1&&y.push(y[y.length-1]+W),v.push(v[v.length-1]+W),e.virtualSize+=W}if(y.length===0&&(y=[0]),C!==0){const W=e.isHorizontal()&&u?"marginLeft":e.getDirectionLabel("marginRight");g.filter((H,ee)=>!a.cssMode||a.loop?!0:ee!==g.length-1).forEach(H=>{H.style[W]=`${C}px`})}if(a.centeredSlides&&a.centeredSlidesBounds){let W=0;S.forEach(ee=>{W+=ee+(C||0)}),W-=C;const H=W>l?W-l:0;y=y.map(ee=>ee<=0?-k:ee>H?H+A:ee)}if(a.centerInsufficientSlides){let W=0;S.forEach(ee=>{W+=ee+(C||0)}),W-=C;const H=(a.slidesOffsetBefore||0)+(a.slidesOffsetAfter||0);if(W+H<l){const ee=(l-W-H)/2;y.forEach((se,de)=>{y[de]=se-ee}),v.forEach((se,de)=>{v[de]=se+ee})}}if(Object.assign(e,{slides:g,snapGrid:y,slidesGrid:v,slidesSizesGrid:S}),a.centeredSlides&&a.cssMode&&!a.centeredSlidesBounds){Nc(i,"--swiper-centered-offset-before",`${-y[0]}px`),Nc(i,"--swiper-centered-offset-after",`${e.size/2-S[S.length-1]/2}px`);const W=-e.snapGrid[0],H=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(ee=>ee+W),e.slidesGrid=e.slidesGrid.map(ee=>ee+H)}if(x!==m&&e.emit("slidesLengthChange"),y.length!==j&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==R&&e.emit("slidesGridLengthChange"),a.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!p&&!a.cssMode&&(a.effect==="slide"||a.effect==="fade")){const W=`${a.containerModifierClass}backface-hidden`,H=e.el.classList.contains(W);x<=a.maxBackfaceHiddenSlides?H||e.el.classList.add(W):H&&e.el.classList.remove(W)}}function _L(e){const t=this,a=[],i=t.virtual&&t.params.virtual.enabled;let o=0,l;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const u=f=>i?t.slides[t.getSlideIndexByData(f)]:t.slides[f];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(f=>{a.push(f)});else for(l=0;l<Math.ceil(t.params.slidesPerView);l+=1){const f=t.activeIndex+l;if(f>t.slides.length&&!i)break;a.push(u(f))}else a.push(u(t.activeIndex));for(l=0;l<a.length;l+=1)if(typeof a[l]<"u"){const f=a[l].offsetHeight;o=f>o?f:o}(o||o===0)&&(t.wrapperEl.style.height=`${o}px`)}function $L(){const e=this,t=e.slides,a=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let i=0;i<t.length;i+=1)t[i].swiperSlideOffset=(e.isHorizontal()?t[i].offsetLeft:t[i].offsetTop)-a-e.cssOverflowAdjustment()}const iv=(e,t,a)=>{t&&!e.classList.contains(a)?e.classList.add(a):!t&&e.classList.contains(a)&&e.classList.remove(a)};function HL(e){e===void 0&&(e=this&&this.translate||0);const t=this,a=t.params,{slides:i,rtlTranslate:o,snapGrid:l}=t;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let u=-e;o&&(u=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let f=a.spaceBetween;typeof f=="string"&&f.indexOf("%")>=0?f=parseFloat(f.replace("%",""))/100*t.size:typeof f=="string"&&(f=parseFloat(f));for(let p=0;p<i.length;p+=1){const m=i[p];let g=m.swiperSlideOffset;a.cssMode&&a.centeredSlides&&(g-=i[0].swiperSlideOffset);const x=(u+(a.centeredSlides?t.minTranslate():0)-g)/(m.swiperSlideSize+f),y=(u-l[0]+(a.centeredSlides?t.minTranslate():0)-g)/(m.swiperSlideSize+f),v=-(u-g),S=v+t.slidesSizesGrid[p],k=v>=0&&v<=t.size-t.slidesSizesGrid[p],A=v>=0&&v<t.size-1||S>1&&S<=t.size||v<=0&&S>=t.size;A&&(t.visibleSlides.push(m),t.visibleSlidesIndexes.push(p)),iv(m,A,a.slideVisibleClass),iv(m,k,a.slideFullyVisibleClass),m.progress=o?-x:x,m.originalProgress=o?-y:y}}function GL(e){const t=this;if(typeof e>"u"){const g=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*g||0}const a=t.params,i=t.maxTranslate()-t.minTranslate();let{progress:o,isBeginning:l,isEnd:u,progressLoop:f}=t;const p=l,m=u;if(i===0)o=0,l=!0,u=!0;else{o=(e-t.minTranslate())/i;const g=Math.abs(e-t.minTranslate())<1,x=Math.abs(e-t.maxTranslate())<1;l=g||o<=0,u=x||o>=1,g&&(o=0),x&&(o=1)}if(a.loop){const g=t.getSlideIndexByData(0),x=t.getSlideIndexByData(t.slides.length-1),y=t.slidesGrid[g],v=t.slidesGrid[x],S=t.slidesGrid[t.slidesGrid.length-1],k=Math.abs(e);k>=y?f=(k-y)/S:f=(k+S-v)/S,f>1&&(f-=1)}Object.assign(t,{progress:o,progressLoop:f,isBeginning:l,isEnd:u}),(a.watchSlidesProgress||a.centeredSlides&&a.autoHeight)&&t.updateSlidesProgress(e),l&&!p&&t.emit("reachBeginning toEdge"),u&&!m&&t.emit("reachEnd toEdge"),(p&&!l||m&&!u)&&t.emit("fromEdge"),t.emit("progress",o)}const th=(e,t,a)=>{t&&!e.classList.contains(a)?e.classList.add(a):!t&&e.classList.contains(a)&&e.classList.remove(a)};function UL(){const e=this,{slides:t,params:a,slidesEl:i,activeIndex:o}=e,l=e.virtual&&a.virtual.enabled,u=e.grid&&a.grid&&a.grid.rows>1,f=x=>Ea(i,`.${a.slideClass}${x}, swiper-slide${x}`)[0];let p,m,g;if(l)if(a.loop){let x=o-e.virtual.slidesBefore;x<0&&(x=e.virtual.slides.length+x),x>=e.virtual.slides.length&&(x-=e.virtual.slides.length),p=f(`[data-swiper-slide-index="${x}"]`)}else p=f(`[data-swiper-slide-index="${o}"]`);else u?(p=t.find(x=>x.column===o),g=t.find(x=>x.column===o+1),m=t.find(x=>x.column===o-1)):p=t[o];p&&(u||(g=ML(p,`.${a.slideClass}, swiper-slide`)[0],a.loop&&!g&&(g=t[0]),m=AL(p,`.${a.slideClass}, swiper-slide`)[0],a.loop&&!m===0&&(m=t[t.length-1]))),t.forEach(x=>{th(x,x===p,a.slideActiveClass),th(x,x===g,a.slideNextClass),th(x,x===m,a.slidePrevClass)}),e.emitSlidesClasses()}const ou=(e,t)=>{if(!e||e.destroyed||!e.params)return;const a=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,i=t.closest(a());if(i){let o=i.querySelector(`.${e.params.lazyPreloaderClass}`);!o&&e.isElement&&(i.shadowRoot?o=i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(o=i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),o&&o.remove())})),o&&o.remove()}},nh=(e,t)=>{if(!e.slides[t])return;const a=e.slides[t].querySelector('[loading="lazy"]');a&&a.removeAttribute("loading")},pm=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const a=e.slides.length;if(!a||!t||t<0)return;t=Math.min(t,a);const i=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),o=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const u=o,f=[u-t];f.push(...Array.from({length:t}).map((p,m)=>u+i+m)),e.slides.forEach((p,m)=>{f.includes(p.column)&&nh(e,m)});return}const l=o+i-1;if(e.params.rewind||e.params.loop)for(let u=o-t;u<=l+t;u+=1){const f=(u%a+a)%a;(f<o||f>l)&&nh(e,f)}else for(let u=Math.max(o-t,0);u<=Math.min(l+t,a-1);u+=1)u!==o&&(u>l||u<o)&&nh(e,u)};function IL(e){const{slidesGrid:t,params:a}=e,i=e.rtlTranslate?e.translate:-e.translate;let o;for(let l=0;l<t.length;l+=1)typeof t[l+1]<"u"?i>=t[l]&&i<t[l+1]-(t[l+1]-t[l])/2?o=l:i>=t[l]&&i<t[l+1]&&(o=l+1):i>=t[l]&&(o=l);return a.normalizeSlideIndex&&(o<0||typeof o>"u")&&(o=0),o}function FL(e){const t=this,a=t.rtlTranslate?t.translate:-t.translate,{snapGrid:i,params:o,activeIndex:l,realIndex:u,snapIndex:f}=t;let p=e,m;const g=v=>{let S=v-t.virtual.slidesBefore;return S<0&&(S=t.virtual.slides.length+S),S>=t.virtual.slides.length&&(S-=t.virtual.slides.length),S};if(typeof p>"u"&&(p=IL(t)),i.indexOf(a)>=0)m=i.indexOf(a);else{const v=Math.min(o.slidesPerGroupSkip,p);m=v+Math.floor((p-v)/o.slidesPerGroup)}if(m>=i.length&&(m=i.length-1),p===l&&!t.params.loop){m!==f&&(t.snapIndex=m,t.emit("snapIndexChange"));return}if(p===l&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=g(p);return}const x=t.grid&&o.grid&&o.grid.rows>1;let y;if(t.virtual&&o.virtual.enabled&&o.loop)y=g(p);else if(x){const v=t.slides.find(k=>k.column===p);let S=parseInt(v.getAttribute("data-swiper-slide-index"),10);Number.isNaN(S)&&(S=Math.max(t.slides.indexOf(v),0)),y=Math.floor(S/o.grid.rows)}else if(t.slides[p]){const v=t.slides[p].getAttribute("data-swiper-slide-index");v?y=parseInt(v,10):y=p}else y=p;Object.assign(t,{previousSnapIndex:f,snapIndex:m,previousRealIndex:u,realIndex:y,previousIndex:l,activeIndex:p}),t.initialized&&pm(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(u!==y&&t.emit("realIndexChange"),t.emit("slideChange"))}function qL(e,t){const a=this,i=a.params;let o=e.closest(`.${i.slideClass}, swiper-slide`);!o&&a.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(f=>{!o&&f.matches&&f.matches(`.${i.slideClass}, swiper-slide`)&&(o=f)});let l=!1,u;if(o){for(let f=0;f<a.slides.length;f+=1)if(a.slides[f]===o){l=!0,u=f;break}}if(o&&l)a.clickedSlide=o,a.virtual&&a.params.virtual.enabled?a.clickedIndex=parseInt(o.getAttribute("data-swiper-slide-index"),10):a.clickedIndex=u;else{a.clickedSlide=void 0,a.clickedIndex=void 0;return}i.slideToClickedSlide&&a.clickedIndex!==void 0&&a.clickedIndex!==a.activeIndex&&a.slideToClickedSlide()}var KL={updateSize:NL,updateSlides:BL,updateAutoHeight:_L,updateSlidesOffset:$L,updateSlidesProgress:HL,updateProgress:GL,updateSlidesClasses:UL,updateActiveIndex:FL,updateClickedSlide:qL};function YL(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:a,rtlTranslate:i,translate:o,wrapperEl:l}=t;if(a.virtualTranslate)return i?-o:o;if(a.cssMode)return o;let u=TL(l,e);return u+=t.cssOverflowAdjustment(),i&&(u=-u),u||0}function XL(e,t){const a=this,{rtlTranslate:i,params:o,wrapperEl:l,progress:u}=a;let f=0,p=0;const m=0;a.isHorizontal()?f=i?-e:e:p=e,o.roundLengths&&(f=Math.floor(f),p=Math.floor(p)),a.previousTranslate=a.translate,a.translate=a.isHorizontal()?f:p,o.cssMode?l[a.isHorizontal()?"scrollLeft":"scrollTop"]=a.isHorizontal()?-f:-p:o.virtualTranslate||(a.isHorizontal()?f-=a.cssOverflowAdjustment():p-=a.cssOverflowAdjustment(),l.style.transform=`translate3d(${f}px, ${p}px, ${m}px)`);let g;const x=a.maxTranslate()-a.minTranslate();x===0?g=0:g=(e-a.minTranslate())/x,g!==u&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)}function WL(){return-this.snapGrid[0]}function QL(){return-this.snapGrid[this.snapGrid.length-1]}function ZL(e,t,a,i,o){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),a===void 0&&(a=!0),i===void 0&&(i=!0);const l=this,{params:u,wrapperEl:f}=l;if(l.animating&&u.preventInteractionOnTransition)return!1;const p=l.minTranslate(),m=l.maxTranslate();let g;if(i&&e>p?g=p:i&&e<m?g=m:g=e,l.updateProgress(g),u.cssMode){const x=l.isHorizontal();if(t===0)f[x?"scrollLeft":"scrollTop"]=-g;else{if(!l.support.smoothScroll)return $w({swiper:l,targetPosition:-g,side:x?"left":"top"}),!0;f.scrollTo({[x?"left":"top"]:-g,behavior:"smooth"})}return!0}return t===0?(l.setTransition(0),l.setTranslate(g),a&&(l.emit("beforeTransitionStart",t,o),l.emit("transitionEnd"))):(l.setTransition(t),l.setTranslate(g),a&&(l.emit("beforeTransitionStart",t,o),l.emit("transitionStart")),l.animating||(l.animating=!0,l.onTranslateToWrapperTransitionEnd||(l.onTranslateToWrapperTransitionEnd=function(y){!l||l.destroyed||y.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onTranslateToWrapperTransitionEnd),l.onTranslateToWrapperTransitionEnd=null,delete l.onTranslateToWrapperTransitionEnd,l.animating=!1,a&&l.emit("transitionEnd"))}),l.wrapperEl.addEventListener("transitionend",l.onTranslateToWrapperTransitionEnd))),!0}var JL={getTranslate:YL,setTranslate:XL,minTranslate:WL,maxTranslate:QL,translateTo:ZL};function eO(e,t){const a=this;a.params.cssMode||(a.wrapperEl.style.transitionDuration=`${e}ms`,a.wrapperEl.style.transitionDelay=e===0?"0ms":""),a.emit("setTransition",e,t)}function Fw(e){let{swiper:t,runCallbacks:a,direction:i,step:o}=e;const{activeIndex:l,previousIndex:u}=t;let f=i;f||(l>u?f="next":l<u?f="prev":f="reset"),t.emit(`transition${o}`),a&&f==="reset"?t.emit(`slideResetTransition${o}`):a&&l!==u&&(t.emit(`slideChangeTransition${o}`),f==="next"?t.emit(`slideNextTransition${o}`):t.emit(`slidePrevTransition${o}`))}function tO(e,t){e===void 0&&(e=!0);const a=this,{params:i}=a;i.cssMode||(i.autoHeight&&a.updateAutoHeight(),Fw({swiper:a,runCallbacks:e,direction:t,step:"Start"}))}function nO(e,t){e===void 0&&(e=!0);const a=this,{params:i}=a;a.animating=!1,!i.cssMode&&(a.setTransition(0),Fw({swiper:a,runCallbacks:e,direction:t,step:"End"}))}var aO={setTransition:eO,transitionStart:tO,transitionEnd:nO};function iO(e,t,a,i,o){e===void 0&&(e=0),a===void 0&&(a=!0),typeof e=="string"&&(e=parseInt(e,10));const l=this;let u=e;u<0&&(u=0);const{params:f,snapGrid:p,slidesGrid:m,previousIndex:g,activeIndex:x,rtlTranslate:y,wrapperEl:v,enabled:S}=l;if(!S&&!i&&!o||l.destroyed||l.animating&&f.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=l.params.speed);const k=Math.min(l.params.slidesPerGroupSkip,u);let A=k+Math.floor((u-k)/l.params.slidesPerGroup);A>=p.length&&(A=p.length-1);const j=-p[A];if(f.normalizeSlideIndex)for(let N=0;N<m.length;N+=1){const V=-Math.floor(j*100),q=Math.floor(m[N]*100),W=Math.floor(m[N+1]*100);typeof m[N+1]<"u"?V>=q&&V<W-(W-q)/2?u=N:V>=q&&V<W&&(u=N+1):V>=q&&(u=N)}if(l.initialized&&u!==x&&(!l.allowSlideNext&&(y?j>l.translate&&j>l.minTranslate():j<l.translate&&j<l.minTranslate())||!l.allowSlidePrev&&j>l.translate&&j>l.maxTranslate()&&(x||0)!==u))return!1;u!==(g||0)&&a&&l.emit("beforeSlideChangeStart"),l.updateProgress(j);let R;u>x?R="next":u<x?R="prev":R="reset";const C=l.virtual&&l.params.virtual.enabled;if(!(C&&o)&&(y&&-j===l.translate||!y&&j===l.translate))return l.updateActiveIndex(u),f.autoHeight&&l.updateAutoHeight(),l.updateSlidesClasses(),f.effect!=="slide"&&l.setTranslate(j),R!=="reset"&&(l.transitionStart(a,R),l.transitionEnd(a,R)),!1;if(f.cssMode){const N=l.isHorizontal(),V=y?j:-j;if(t===0)C&&(l.wrapperEl.style.scrollSnapType="none",l._immediateVirtual=!0),C&&!l._cssModeVirtualInitialSet&&l.params.initialSlide>0?(l._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{v[N?"scrollLeft":"scrollTop"]=V})):v[N?"scrollLeft":"scrollTop"]=V,C&&requestAnimationFrame(()=>{l.wrapperEl.style.scrollSnapType="",l._immediateVirtual=!1});else{if(!l.support.smoothScroll)return $w({swiper:l,targetPosition:V,side:N?"left":"top"}),!0;v.scrollTo({[N?"left":"top"]:V,behavior:"smooth"})}return!0}const D=Iw().isSafari;return C&&!o&&D&&l.isElement&&l.virtual.update(!1,!1,u),l.setTransition(t),l.setTranslate(j),l.updateActiveIndex(u),l.updateSlidesClasses(),l.emit("beforeTransitionStart",t,i),l.transitionStart(a,R),t===0?l.transitionEnd(a,R):l.animating||(l.animating=!0,l.onSlideToWrapperTransitionEnd||(l.onSlideToWrapperTransitionEnd=function(V){!l||l.destroyed||V.target===this&&(l.wrapperEl.removeEventListener("transitionend",l.onSlideToWrapperTransitionEnd),l.onSlideToWrapperTransitionEnd=null,delete l.onSlideToWrapperTransitionEnd,l.transitionEnd(a,R))}),l.wrapperEl.addEventListener("transitionend",l.onSlideToWrapperTransitionEnd)),!0}function rO(e,t,a,i){e===void 0&&(e=0),a===void 0&&(a=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;if(o.destroyed)return;typeof t>"u"&&(t=o.params.speed);const l=o.grid&&o.params.grid&&o.params.grid.rows>1;let u=e;if(o.params.loop)if(o.virtual&&o.params.virtual.enabled)u=u+o.virtual.slidesBefore;else{let f;if(l){const y=u*o.params.grid.rows;f=o.slides.find(v=>v.getAttribute("data-swiper-slide-index")*1===y).column}else f=o.getSlideIndexByData(u);const p=l?Math.ceil(o.slides.length/o.params.grid.rows):o.slides.length,{centeredSlides:m}=o.params;let g=o.params.slidesPerView;g==="auto"?g=o.slidesPerViewDynamic():(g=Math.ceil(parseFloat(o.params.slidesPerView,10)),m&&g%2===0&&(g=g+1));let x=p-f<g;if(m&&(x=x||f<Math.ceil(g/2)),i&&m&&o.params.slidesPerView!=="auto"&&!l&&(x=!1),x){const y=m?f<o.activeIndex?"prev":"next":f-o.activeIndex-1<o.params.slidesPerView?"next":"prev";o.loopFix({direction:y,slideTo:!0,activeSlideIndex:y==="next"?f+1:f-p+1,slideRealIndex:y==="next"?o.realIndex:void 0})}if(l){const y=u*o.params.grid.rows;u=o.slides.find(v=>v.getAttribute("data-swiper-slide-index")*1===y).column}else u=o.getSlideIndexByData(u)}return requestAnimationFrame(()=>{o.slideTo(u,t,a,i)}),o}function sO(e,t,a){t===void 0&&(t=!0);const i=this,{enabled:o,params:l,animating:u}=i;if(!o||i.destroyed)return i;typeof e>"u"&&(e=i.params.speed);let f=l.slidesPerGroup;l.slidesPerView==="auto"&&l.slidesPerGroup===1&&l.slidesPerGroupAuto&&(f=Math.max(i.slidesPerViewDynamic("current",!0),1));const p=i.activeIndex<l.slidesPerGroupSkip?1:f,m=i.virtual&&l.virtual.enabled;if(l.loop){if(u&&!m&&l.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&l.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+p,e,t,a)}),!0}return l.rewind&&i.isEnd?i.slideTo(0,e,t,a):i.slideTo(i.activeIndex+p,e,t,a)}function oO(e,t,a){t===void 0&&(t=!0);const i=this,{params:o,snapGrid:l,slidesGrid:u,rtlTranslate:f,enabled:p,animating:m}=i;if(!p||i.destroyed)return i;typeof e>"u"&&(e=i.params.speed);const g=i.virtual&&o.virtual.enabled;if(o.loop){if(m&&!g&&o.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const x=f?i.translate:-i.translate;function y(R){return R<0?-Math.floor(Math.abs(R)):Math.floor(R)}const v=y(x),S=l.map(R=>y(R)),k=o.freeMode&&o.freeMode.enabled;let A=l[S.indexOf(v)-1];if(typeof A>"u"&&(o.cssMode||k)){let R;l.forEach((C,_)=>{v>=C&&(R=_)}),typeof R<"u"&&(A=k?l[R]:l[R>0?R-1:R])}let j=0;if(typeof A<"u"&&(j=u.indexOf(A),j<0&&(j=i.activeIndex-1),o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(j=j-i.slidesPerViewDynamic("previous",!0)+1,j=Math.max(j,0))),o.rewind&&i.isBeginning){const R=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(R,e,t,a)}else if(o.loop&&i.activeIndex===0&&o.cssMode)return requestAnimationFrame(()=>{i.slideTo(j,e,t,a)}),!0;return i.slideTo(j,e,t,a)}function lO(e,t,a){t===void 0&&(t=!0);const i=this;if(!i.destroyed)return typeof e>"u"&&(e=i.params.speed),i.slideTo(i.activeIndex,e,t,a)}function cO(e,t,a,i){t===void 0&&(t=!0),i===void 0&&(i=.5);const o=this;if(o.destroyed)return;typeof e>"u"&&(e=o.params.speed);let l=o.activeIndex;const u=Math.min(o.params.slidesPerGroupSkip,l),f=u+Math.floor((l-u)/o.params.slidesPerGroup),p=o.rtlTranslate?o.translate:-o.translate;if(p>=o.snapGrid[f]){const m=o.snapGrid[f],g=o.snapGrid[f+1];p-m>(g-m)*i&&(l+=o.params.slidesPerGroup)}else{const m=o.snapGrid[f-1],g=o.snapGrid[f];p-m<=(g-m)*i&&(l-=o.params.slidesPerGroup)}return l=Math.max(l,0),l=Math.min(l,o.slidesGrid.length-1),o.slideTo(l,e,t,a)}function uO(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:a}=e,i=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let o=e.getSlideIndexWhenGrid(e.clickedIndex),l;const u=e.isElement?"swiper-slide":`.${t.slideClass}`,f=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;l=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(l):o>(f?(e.slides.length-i)/2-(e.params.grid.rows-1):e.slides.length-i)?(e.loopFix(),o=e.getSlideIndex(Ea(a,`${u}[data-swiper-slide-index="${l}"]`)[0]),_w(()=>{e.slideTo(o)})):e.slideTo(o)}else e.slideTo(o)}var dO={slideTo:iO,slideToLoop:rO,slideNext:sO,slidePrev:oO,slideReset:lO,slideToClosest:cO,slideToClickedSlide:uO};function fO(e,t){const a=this,{params:i,slidesEl:o}=a;if(!i.loop||a.virtual&&a.params.virtual.enabled)return;const l=()=>{Ea(o,`.${i.slideClass}, swiper-slide`).forEach((v,S)=>{v.setAttribute("data-swiper-slide-index",S)})},u=()=>{const y=Ea(o,`.${i.slideBlankClass}`);y.forEach(v=>{v.remove()}),y.length>0&&(a.recalcSlides(),a.updateSlides())},f=a.grid&&i.grid&&i.grid.rows>1;i.loopAddBlankSlides&&(i.slidesPerGroup>1||f)&&u();const p=i.slidesPerGroup*(f?i.grid.rows:1),m=a.slides.length%p!==0,g=f&&a.slides.length%i.grid.rows!==0,x=y=>{for(let v=0;v<y;v+=1){const S=a.isElement?Ru("swiper-slide",[i.slideBlankClass]):Ru("div",[i.slideClass,i.slideBlankClass]);a.slidesEl.append(S)}};if(m){if(i.loopAddBlankSlides){const y=p-a.slides.length%p;x(y),a.recalcSlides(),a.updateSlides()}else zu("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else if(g){if(i.loopAddBlankSlides){const y=i.grid.rows-a.slides.length%i.grid.rows;x(y),a.recalcSlides(),a.updateSlides()}else zu("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");l()}else l();a.loopFix({slideRealIndex:e,direction:i.centeredSlides?void 0:"next",initial:t})}function pO(e){let{slideRealIndex:t,slideTo:a=!0,direction:i,setTranslate:o,activeSlideIndex:l,initial:u,byController:f,byMousewheel:p}=e===void 0?{}:e;const m=this;if(!m.params.loop)return;m.emit("beforeLoopFix");const{slides:g,allowSlidePrev:x,allowSlideNext:y,slidesEl:v,params:S}=m,{centeredSlides:k,initialSlide:A}=S;if(m.allowSlidePrev=!0,m.allowSlideNext=!0,m.virtual&&S.virtual.enabled){a&&(!S.centeredSlides&&m.snapIndex===0?m.slideTo(m.virtual.slides.length,0,!1,!0):S.centeredSlides&&m.snapIndex<S.slidesPerView?m.slideTo(m.virtual.slides.length+m.snapIndex,0,!1,!0):m.snapIndex===m.snapGrid.length-1&&m.slideTo(m.virtual.slidesBefore,0,!1,!0)),m.allowSlidePrev=x,m.allowSlideNext=y,m.emit("loopFix");return}let j=S.slidesPerView;j==="auto"?j=m.slidesPerViewDynamic():(j=Math.ceil(parseFloat(S.slidesPerView,10)),k&&j%2===0&&(j=j+1));const R=S.slidesPerGroupAuto?j:S.slidesPerGroup;let C=k?Math.max(R,Math.ceil(j/2)):R;C%R!==0&&(C+=R-C%R),C+=S.loopAdditionalSlides,m.loopedSlides=C;const _=m.grid&&S.grid&&S.grid.rows>1;g.length<j+C||m.params.effect==="cards"&&g.length<j+C*2?zu("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):_&&S.grid.fill==="row"&&zu("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const M=[],D=[],N=_?Math.ceil(g.length/S.grid.rows):g.length,V=u&&N-A<j&&!k;let q=V?A:m.activeIndex;typeof l>"u"?l=m.getSlideIndex(g.find(U=>U.classList.contains(S.slideActiveClass))):q=l;const W=i==="next"||!i,H=i==="prev"||!i;let ee=0,se=0;const ue=(_?g[l].column:l)+(k&&typeof o>"u"?-j/2+.5:0);if(ue<C){ee=Math.max(C-ue,R);for(let U=0;U<C-ue;U+=1){const P=U-Math.floor(U/N)*N;if(_){const $=N-P-1;for(let Q=g.length-1;Q>=0;Q-=1)g[Q].column===$&&M.push(Q)}else M.push(N-P-1)}}else if(ue+j>N-C){se=Math.max(ue-(N-C*2),R),V&&(se=Math.max(se,j-N+A+1));for(let U=0;U<se;U+=1){const P=U-Math.floor(U/N)*N;_?g.forEach(($,Q)=>{$.column===P&&D.push(Q)}):D.push(P)}}if(m.__preventObserver__=!0,requestAnimationFrame(()=>{m.__preventObserver__=!1}),m.params.effect==="cards"&&g.length<j+C*2&&(D.includes(l)&&D.splice(D.indexOf(l),1),M.includes(l)&&M.splice(M.indexOf(l),1)),H&&M.forEach(U=>{g[U].swiperLoopMoveDOM=!0,v.prepend(g[U]),g[U].swiperLoopMoveDOM=!1}),W&&D.forEach(U=>{g[U].swiperLoopMoveDOM=!0,v.append(g[U]),g[U].swiperLoopMoveDOM=!1}),m.recalcSlides(),S.slidesPerView==="auto"?m.updateSlides():_&&(M.length>0&&H||D.length>0&&W)&&m.slides.forEach((U,P)=>{m.grid.updateSlide(P,U,m.slides)}),S.watchSlidesProgress&&m.updateSlidesOffset(),a){if(M.length>0&&H){if(typeof t>"u"){const U=m.slidesGrid[q],$=m.slidesGrid[q+ee]-U;p?m.setTranslate(m.translate-$):(m.slideTo(q+Math.ceil(ee),0,!1,!0),o&&(m.touchEventsData.startTranslate=m.touchEventsData.startTranslate-$,m.touchEventsData.currentTranslate=m.touchEventsData.currentTranslate-$))}else if(o){const U=_?M.length/S.grid.rows:M.length;m.slideTo(m.activeIndex+U,0,!1,!0),m.touchEventsData.currentTranslate=m.translate}}else if(D.length>0&&W)if(typeof t>"u"){const U=m.slidesGrid[q],$=m.slidesGrid[q-se]-U;p?m.setTranslate(m.translate-$):(m.slideTo(q-se,0,!1,!0),o&&(m.touchEventsData.startTranslate=m.touchEventsData.startTranslate-$,m.touchEventsData.currentTranslate=m.touchEventsData.currentTranslate-$))}else{const U=_?D.length/S.grid.rows:D.length;m.slideTo(m.activeIndex-U,0,!1,!0)}}if(m.allowSlidePrev=x,m.allowSlideNext=y,m.controller&&m.controller.control&&!f){const U={slideRealIndex:t,direction:i,setTranslate:o,activeSlideIndex:l,byController:!0};Array.isArray(m.controller.control)?m.controller.control.forEach(P=>{!P.destroyed&&P.params.loop&&P.loopFix({...U,slideTo:P.params.slidesPerView===S.slidesPerView?a:!1})}):m.controller.control instanceof m.constructor&&m.controller.control.params.loop&&m.controller.control.loopFix({...U,slideTo:m.controller.control.params.slidesPerView===S.slidesPerView?a:!1})}m.emit("loopFix")}function hO(){const e=this,{params:t,slidesEl:a}=e;if(!t.loop||!a||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const i=[];e.slides.forEach(o=>{const l=typeof o.swiperSlideIndex>"u"?o.getAttribute("data-swiper-slide-index")*1:o.swiperSlideIndex;i[l]=o}),e.slides.forEach(o=>{o.removeAttribute("data-swiper-slide-index")}),i.forEach(o=>{a.append(o)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var mO={loopCreate:fO,loopFix:pO,loopDestroy:hO};function gO(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const a=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),a.style.cursor="move",a.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function bO(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var xO={setGrabCursor:gO,unsetGrabCursor:bO};function yO(e,t){t===void 0&&(t=this);function a(i){if(!i||i===Wt()||i===Mt())return null;i.assignedSlot&&(i=i.assignedSlot);const o=i.closest(e);return!o&&!i.getRootNode?null:o||a(i.getRootNode().host)}return a(t)}function rv(e,t,a){const i=Mt(),{params:o}=e,l=o.edgeSwipeDetection,u=o.edgeSwipeThreshold;return l&&(a<=u||a>=i.innerWidth-u)?l==="prevent"?(t.preventDefault(),!0):!1:!0}function vO(e){const t=this,a=Wt();let i=e;i.originalEvent&&(i=i.originalEvent);const o=t.touchEventsData;if(i.type==="pointerdown"){if(o.pointerId!==null&&o.pointerId!==i.pointerId)return;o.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(o.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){rv(t,i,i.targetTouches[0].pageX);return}const{params:l,touches:u,enabled:f}=t;if(!f||!l.simulateTouch&&i.pointerType==="mouse"||t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let p=i.target;if(l.touchEventsTarget==="wrapper"&&!EL(p,t.wrapperEl)||"which"in i&&i.which===3||"button"in i&&i.button>0||o.isTouched&&o.isMoved)return;const m=!!l.noSwipingClass&&l.noSwipingClass!=="",g=i.composedPath?i.composedPath():i.path;m&&i.target&&i.target.shadowRoot&&g&&(p=g[0]);const x=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,y=!!(i.target&&i.target.shadowRoot);if(l.noSwiping&&(y?yO(x,p):p.closest(x))){t.allowClick=!0;return}if(l.swipeHandler&&!p.closest(l.swipeHandler))return;u.currentX=i.pageX,u.currentY=i.pageY;const v=u.currentX,S=u.currentY;if(!rv(t,i,v))return;Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),u.startX=v,u.startY=S,o.touchStartTime=Mu(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(o.allowThresholdMove=!1);let k=!0;p.matches(o.focusableElements)&&(k=!1,p.nodeName==="SELECT"&&(o.isTouched=!1)),a.activeElement&&a.activeElement.matches(o.focusableElements)&&a.activeElement!==p&&(i.pointerType==="mouse"||i.pointerType!=="mouse"&&!p.matches(o.focusableElements))&&a.activeElement.blur();const A=k&&t.allowTouchMove&&l.touchStartPreventDefault;(l.touchStartForcePreventDefault||A)&&!p.isContentEditable&&i.preventDefault(),l.freeMode&&l.freeMode.enabled&&t.freeMode&&t.animating&&!l.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",i)}function wO(e){const t=Wt(),a=this,i=a.touchEventsData,{params:o,touches:l,rtlTranslate:u,enabled:f}=a;if(!f||!o.simulateTouch&&e.pointerType==="mouse")return;let p=e;if(p.originalEvent&&(p=p.originalEvent),p.type==="pointermove"&&(i.touchId!==null||p.pointerId!==i.pointerId))return;let m;if(p.type==="touchmove"){if(m=[...p.changedTouches].find(M=>M.identifier===i.touchId),!m||m.identifier!==i.touchId)return}else m=p;if(!i.isTouched){i.startMoving&&i.isScrolling&&a.emit("touchMoveOpposite",p);return}const g=m.pageX,x=m.pageY;if(p.preventedByNestedSwiper){l.startX=g,l.startY=x;return}if(!a.allowTouchMove){p.target.matches(i.focusableElements)||(a.allowClick=!1),i.isTouched&&(Object.assign(l,{startX:g,startY:x,currentX:g,currentY:x}),i.touchStartTime=Mu());return}if(o.touchReleaseOnEdges&&!o.loop)if(a.isVertical()){if(x<l.startY&&a.translate<=a.maxTranslate()||x>l.startY&&a.translate>=a.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else{if(u&&(g>l.startX&&-a.translate<=a.maxTranslate()||g<l.startX&&-a.translate>=a.minTranslate()))return;if(!u&&(g<l.startX&&a.translate<=a.maxTranslate()||g>l.startX&&a.translate>=a.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(i.focusableElements)&&t.activeElement!==p.target&&p.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&p.target===t.activeElement&&p.target.matches(i.focusableElements)){i.isMoved=!0,a.allowClick=!1;return}i.allowTouchCallbacks&&a.emit("touchMove",p),l.previousX=l.currentX,l.previousY=l.currentY,l.currentX=g,l.currentY=x;const y=l.currentX-l.startX,v=l.currentY-l.startY;if(a.params.threshold&&Math.sqrt(y**2+v**2)<a.params.threshold)return;if(typeof i.isScrolling>"u"){let M;a.isHorizontal()&&l.currentY===l.startY||a.isVertical()&&l.currentX===l.startX?i.isScrolling=!1:y*y+v*v>=25&&(M=Math.atan2(Math.abs(v),Math.abs(y))*180/Math.PI,i.isScrolling=a.isHorizontal()?M>o.touchAngle:90-M>o.touchAngle)}if(i.isScrolling&&a.emit("touchMoveOpposite",p),typeof i.startMoving>"u"&&(l.currentX!==l.startX||l.currentY!==l.startY)&&(i.startMoving=!0),i.isScrolling||p.type==="touchmove"&&i.preventTouchMoveFromPointerMove){i.isTouched=!1;return}if(!i.startMoving)return;a.allowClick=!1,!o.cssMode&&p.cancelable&&p.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&p.stopPropagation();let S=a.isHorizontal()?y:v,k=a.isHorizontal()?l.currentX-l.previousX:l.currentY-l.previousY;o.oneWayMovement&&(S=Math.abs(S)*(u?1:-1),k=Math.abs(k)*(u?1:-1)),l.diff=S,S*=o.touchRatio,u&&(S=-S,k=-k);const A=a.touchesDirection;a.swipeDirection=S>0?"prev":"next",a.touchesDirection=k>0?"prev":"next";const j=a.params.loop&&!o.cssMode,R=a.touchesDirection==="next"&&a.allowSlideNext||a.touchesDirection==="prev"&&a.allowSlidePrev;if(!i.isMoved){if(j&&R&&a.loopFix({direction:a.swipeDirection}),i.startTranslate=a.getTranslate(),a.setTransition(0),a.animating){const M=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});a.wrapperEl.dispatchEvent(M)}i.allowMomentumBounce=!1,o.grabCursor&&(a.allowSlideNext===!0||a.allowSlidePrev===!0)&&a.setGrabCursor(!0),a.emit("sliderFirstMove",p)}if(new Date().getTime(),o._loopSwapReset!==!1&&i.isMoved&&i.allowThresholdMove&&A!==a.touchesDirection&&j&&R&&Math.abs(S)>=1){Object.assign(l,{startX:g,startY:x,currentX:g,currentY:x,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}a.emit("sliderMove",p),i.isMoved=!0,i.currentTranslate=S+i.startTranslate;let C=!0,_=o.resistanceRatio;if(o.touchReleaseOnEdges&&(_=0),S>0?(j&&R&&i.allowThresholdMove&&i.currentTranslate>(o.centeredSlides?a.minTranslate()-a.slidesSizesGrid[a.activeIndex+1]-(o.slidesPerView!=="auto"&&a.slides.length-o.slidesPerView>=2?a.slidesSizesGrid[a.activeIndex+1]+a.params.spaceBetween:0)-a.params.spaceBetween:a.minTranslate())&&a.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>a.minTranslate()&&(C=!1,o.resistance&&(i.currentTranslate=a.minTranslate()-1+(-a.minTranslate()+i.startTranslate+S)**_))):S<0&&(j&&R&&i.allowThresholdMove&&i.currentTranslate<(o.centeredSlides?a.maxTranslate()+a.slidesSizesGrid[a.slidesSizesGrid.length-1]+a.params.spaceBetween+(o.slidesPerView!=="auto"&&a.slides.length-o.slidesPerView>=2?a.slidesSizesGrid[a.slidesSizesGrid.length-1]+a.params.spaceBetween:0):a.maxTranslate())&&a.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:a.slides.length-(o.slidesPerView==="auto"?a.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),i.currentTranslate<a.maxTranslate()&&(C=!1,o.resistance&&(i.currentTranslate=a.maxTranslate()+1-(a.maxTranslate()-i.startTranslate-S)**_))),C&&(p.preventedByNestedSwiper=!0),!a.allowSlideNext&&a.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!a.allowSlidePrev&&a.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!a.allowSlidePrev&&!a.allowSlideNext&&(i.currentTranslate=i.startTranslate),o.threshold>0)if(Math.abs(S)>o.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,l.startX=l.currentX,l.startY=l.currentY,i.currentTranslate=i.startTranslate,l.diff=a.isHorizontal()?l.currentX-l.startX:l.currentY-l.startY;return}}else{i.currentTranslate=i.startTranslate;return}!o.followFinger||o.cssMode||((o.freeMode&&o.freeMode.enabled&&a.freeMode||o.watchSlidesProgress)&&(a.updateActiveIndex(),a.updateSlidesClasses()),o.freeMode&&o.freeMode.enabled&&a.freeMode&&a.freeMode.onTouchMove(),a.updateProgress(i.currentTranslate),a.setTranslate(i.currentTranslate))}function SO(e){const t=this,a=t.touchEventsData;let i=e;i.originalEvent&&(i=i.originalEvent);let o;if(i.type==="touchend"||i.type==="touchcancel"){if(o=[...i.changedTouches].find(M=>M.identifier===a.touchId),!o||o.identifier!==a.touchId)return}else{if(a.touchId!==null||i.pointerId!==a.pointerId)return;o=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(t.browser.isSafari||t.browser.isWebView)))return;a.pointerId=null,a.touchId=null;const{params:u,touches:f,rtlTranslate:p,slidesGrid:m,enabled:g}=t;if(!g||!u.simulateTouch&&i.pointerType==="mouse")return;if(a.allowTouchCallbacks&&t.emit("touchEnd",i),a.allowTouchCallbacks=!1,!a.isTouched){a.isMoved&&u.grabCursor&&t.setGrabCursor(!1),a.isMoved=!1,a.startMoving=!1;return}u.grabCursor&&a.isMoved&&a.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const x=Mu(),y=x-a.touchStartTime;if(t.allowClick){const M=i.path||i.composedPath&&i.composedPath();t.updateClickedSlide(M&&M[0]||i.target,M),t.emit("tap click",i),y<300&&x-a.lastClickTime<300&&t.emit("doubleTap doubleClick",i)}if(a.lastClickTime=Mu(),_w(()=>{t.destroyed||(t.allowClick=!0)}),!a.isTouched||!a.isMoved||!t.swipeDirection||f.diff===0&&!a.loopSwapReset||a.currentTranslate===a.startTranslate&&!a.loopSwapReset){a.isTouched=!1,a.isMoved=!1,a.startMoving=!1;return}a.isTouched=!1,a.isMoved=!1,a.startMoving=!1;let v;if(u.followFinger?v=p?t.translate:-t.translate:v=-a.currentTranslate,u.cssMode)return;if(u.freeMode&&u.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:v});return}const S=v>=-t.maxTranslate()&&!t.params.loop;let k=0,A=t.slidesSizesGrid[0];for(let M=0;M<m.length;M+=M<u.slidesPerGroupSkip?1:u.slidesPerGroup){const D=M<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;typeof m[M+D]<"u"?(S||v>=m[M]&&v<m[M+D])&&(k=M,A=m[M+D]-m[M]):(S||v>=m[M])&&(k=M,A=m[m.length-1]-m[m.length-2])}let j=null,R=null;u.rewind&&(t.isBeginning?R=u.virtual&&u.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(j=0));const C=(v-m[k])/A,_=k<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;if(y>u.longSwipesMs){if(!u.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(C>=u.longSwipesRatio?t.slideTo(u.rewind&&t.isEnd?j:k+_):t.slideTo(k)),t.swipeDirection==="prev"&&(C>1-u.longSwipesRatio?t.slideTo(k+_):R!==null&&C<0&&Math.abs(C)>u.longSwipesRatio?t.slideTo(R):t.slideTo(k))}else{if(!u.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(i.target===t.navigation.nextEl||i.target===t.navigation.prevEl)?i.target===t.navigation.nextEl?t.slideTo(k+_):t.slideTo(k):(t.swipeDirection==="next"&&t.slideTo(j!==null?j:k+_),t.swipeDirection==="prev"&&t.slideTo(R!==null?R:k))}}function sv(){const e=this,{params:t,el:a}=e;if(a&&a.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:o,snapGrid:l}=e,u=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const f=u&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!f?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!u?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=o,e.allowSlideNext=i,e.params.watchOverflow&&l!==e.snapGrid&&e.checkOverflow()}function TO(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function kO(){const e=this,{wrapperEl:t,rtlTranslate:a,enabled:i}=e;if(!i)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let o;const l=e.maxTranslate()-e.minTranslate();l===0?o=0:o=(e.translate-e.minTranslate())/l,o!==e.progress&&e.updateProgress(a?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function jO(e){const t=this;ou(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function EO(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const qw=(e,t)=>{const a=Wt(),{params:i,el:o,wrapperEl:l,device:u}=e,f=!!i.nested,p=t==="on"?"addEventListener":"removeEventListener",m=t;!o||typeof o=="string"||(a[p]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:f}),o[p]("touchstart",e.onTouchStart,{passive:!1}),o[p]("pointerdown",e.onTouchStart,{passive:!1}),a[p]("touchmove",e.onTouchMove,{passive:!1,capture:f}),a[p]("pointermove",e.onTouchMove,{passive:!1,capture:f}),a[p]("touchend",e.onTouchEnd,{passive:!0}),a[p]("pointerup",e.onTouchEnd,{passive:!0}),a[p]("pointercancel",e.onTouchEnd,{passive:!0}),a[p]("touchcancel",e.onTouchEnd,{passive:!0}),a[p]("pointerout",e.onTouchEnd,{passive:!0}),a[p]("pointerleave",e.onTouchEnd,{passive:!0}),a[p]("contextmenu",e.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&o[p]("click",e.onClick,!0),i.cssMode&&l[p]("scroll",e.onScroll),i.updateOnWindowResize?e[m](u.ios||u.android?"resize orientationchange observerUpdate":"resize observerUpdate",sv,!0):e[m]("observerUpdate",sv,!0),o[p]("load",e.onLoad,{capture:!0}))};function CO(){const e=this,{params:t}=e;e.onTouchStart=vO.bind(e),e.onTouchMove=wO.bind(e),e.onTouchEnd=SO.bind(e),e.onDocumentTouchStart=EO.bind(e),t.cssMode&&(e.onScroll=kO.bind(e)),e.onClick=TO.bind(e),e.onLoad=jO.bind(e),qw(e,"on")}function AO(){qw(this,"off")}var MO={attachEvents:CO,detachEvents:AO};const ov=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function zO(){const e=this,{realIndex:t,initialized:a,params:i,el:o}=e,l=i.breakpoints;if(!l||l&&Object.keys(l).length===0)return;const u=Wt(),f=i.breakpointsBase==="window"||!i.breakpointsBase?i.breakpointsBase:"container",p=["window","container"].includes(i.breakpointsBase)||!i.breakpointsBase?e.el:u.querySelector(i.breakpointsBase),m=e.getBreakpoint(l,f,p);if(!m||e.currentBreakpoint===m)return;const x=(m in l?l[m]:void 0)||e.originalParams,y=ov(e,i),v=ov(e,x),S=e.params.grabCursor,k=x.grabCursor,A=i.enabled;y&&!v?(o.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!y&&v&&(o.classList.add(`${i.containerModifierClass}grid`),(x.grid.fill&&x.grid.fill==="column"||!x.grid.fill&&i.grid.fill==="column")&&o.classList.add(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),S&&!k?e.unsetGrabCursor():!S&&k&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(D=>{if(typeof x[D]>"u")return;const N=i[D]&&i[D].enabled,V=x[D]&&x[D].enabled;N&&!V&&e[D].disable(),!N&&V&&e[D].enable()});const j=x.direction&&x.direction!==i.direction,R=i.loop&&(x.slidesPerView!==i.slidesPerView||j),C=i.loop;j&&a&&e.changeDirection(),cn(e.params,x);const _=e.params.enabled,M=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),A&&!_?e.disable():!A&&_&&e.enable(),e.currentBreakpoint=m,e.emit("_beforeBreakpoint",x),a&&(R?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!C&&M?(e.loopCreate(t),e.updateSlides()):C&&!M&&e.loopDestroy()),e.emit("breakpoint",x)}function RO(e,t,a){if(t===void 0&&(t="window"),!e||t==="container"&&!a)return;let i=!1;const o=Mt(),l=t==="window"?o.innerHeight:a.clientHeight,u=Object.keys(e).map(f=>{if(typeof f=="string"&&f.indexOf("@")===0){const p=parseFloat(f.substr(1));return{value:l*p,point:f}}return{value:f,point:f}});u.sort((f,p)=>parseInt(f.value,10)-parseInt(p.value,10));for(let f=0;f<u.length;f+=1){const{point:p,value:m}=u[f];t==="window"?o.matchMedia(`(min-width: ${m}px)`).matches&&(i=p):m<=a.clientWidth&&(i=p)}return i||"max"}var LO={setBreakpoint:zO,getBreakpoint:RO};function OO(e,t){const a=[];return e.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(o=>{i[o]&&a.push(t+o)}):typeof i=="string"&&a.push(t+i)}),a}function DO(){const e=this,{classNames:t,params:a,rtl:i,el:o,device:l}=e,u=OO(["initialized",a.direction,{"free-mode":e.params.freeMode&&a.freeMode.enabled},{autoheight:a.autoHeight},{rtl:i},{grid:a.grid&&a.grid.rows>1},{"grid-column":a.grid&&a.grid.rows>1&&a.grid.fill==="column"},{android:l.android},{ios:l.ios},{"css-mode":a.cssMode},{centered:a.cssMode&&a.centeredSlides},{"watch-progress":a.watchSlidesProgress}],a.containerModifierClass);t.push(...u),o.classList.add(...t),e.emitContainerClasses()}function PO(){const e=this,{el:t,classNames:a}=e;!t||typeof t=="string"||(t.classList.remove(...a),e.emitContainerClasses())}var VO={addClasses:DO,removeClasses:PO};function NO(){const e=this,{isLocked:t,params:a}=e,{slidesOffsetBefore:i}=a;if(i){const o=e.slides.length-1,l=e.slidesGrid[o]+e.slidesSizesGrid[o]+i*2;e.isLocked=e.size>l}else e.isLocked=e.snapGrid.length===1;a.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),a.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var BO={checkOverflow:NO},hm={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function _O(e,t){return function(i){i===void 0&&(i={});const o=Object.keys(i)[0],l=i[o];if(typeof l!="object"||l===null){cn(t,i);return}if(e[o]===!0&&(e[o]={enabled:!0}),o==="navigation"&&e[o]&&e[o].enabled&&!e[o].prevEl&&!e[o].nextEl&&(e[o].auto=!0),["pagination","scrollbar"].indexOf(o)>=0&&e[o]&&e[o].enabled&&!e[o].el&&(e[o].auto=!0),!(o in e&&"enabled"in l)){cn(t,i);return}typeof e[o]=="object"&&!("enabled"in e[o])&&(e[o].enabled=!0),e[o]||(e[o]={enabled:!1}),cn(t,i)}}const ah={eventsEmitter:VL,update:KL,translate:JL,transition:aO,slide:dO,loop:mO,grabCursor:xO,events:MO,breakpoints:LO,checkOverflow:BO,classes:VO},ih={};let yg=class ka{constructor(){let t,a;for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];o.length===1&&o[0].constructor&&Object.prototype.toString.call(o[0]).slice(8,-1)==="Object"?a=o[0]:[t,a]=o,a||(a={}),a=cn({},a),t&&!a.el&&(a.el=t);const u=Wt();if(a.el&&typeof a.el=="string"&&u.querySelectorAll(a.el).length>1){const g=[];return u.querySelectorAll(a.el).forEach(x=>{const y=cn({},a,{el:x});g.push(new ka(y))}),g}const f=this;f.__swiper__=!0,f.support=Gw(),f.device=Uw({userAgent:a.userAgent}),f.browser=Iw(),f.eventsListeners={},f.eventsAnyListeners=[],f.modules=[...f.__modules__],a.modules&&Array.isArray(a.modules)&&f.modules.push(...a.modules);const p={};f.modules.forEach(g=>{g({params:a,swiper:f,extendParams:_O(a,p),on:f.on.bind(f),once:f.once.bind(f),off:f.off.bind(f),emit:f.emit.bind(f)})});const m=cn({},hm,p);return f.params=cn({},m,ih,a),f.originalParams=cn({},f.params),f.passedParams=cn({},a),f.params&&f.params.on&&Object.keys(f.params.on).forEach(g=>{f.on(g,f.params.on[g])}),f.params&&f.params.onAny&&f.onAny(f.params.onAny),Object.assign(f,{enabled:f.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return f.params.direction==="horizontal"},isVertical(){return f.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:f.params.allowSlideNext,allowSlidePrev:f.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:f.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:f.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),f.emit("_swiper"),f.params.init&&f.init(),f}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:a,params:i}=this,o=Ea(a,`.${i.slideClass}, swiper-slide`),l=um(o[0]);return um(t)-l}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(a=>a.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:a,params:i}=t;t.slides=Ea(a,`.${i.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,a){const i=this;t=Math.min(Math.max(t,0),1);const o=i.minTranslate(),u=(i.maxTranslate()-o)*t+o;i.translateTo(u,typeof a>"u"?0:a),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const a=t.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",a.join(" "))}getSlideClasses(t){const a=this;return a.destroyed?"":t.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(a.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const a=[];t.slides.forEach(i=>{const o=t.getSlideClasses(i);a.push({slideEl:i,classNames:o}),t.emit("_slideClass",i,o)}),t.emit("_slideClasses",a)}slidesPerViewDynamic(t,a){t===void 0&&(t="current"),a===void 0&&(a=!1);const i=this,{params:o,slides:l,slidesGrid:u,slidesSizesGrid:f,size:p,activeIndex:m}=i;let g=1;if(typeof o.slidesPerView=="number")return o.slidesPerView;if(o.centeredSlides){let x=l[m]?Math.ceil(l[m].swiperSlideSize):0,y;for(let v=m+1;v<l.length;v+=1)l[v]&&!y&&(x+=Math.ceil(l[v].swiperSlideSize),g+=1,x>p&&(y=!0));for(let v=m-1;v>=0;v-=1)l[v]&&!y&&(x+=l[v].swiperSlideSize,g+=1,x>p&&(y=!0))}else if(t==="current")for(let x=m+1;x<l.length;x+=1)(a?u[x]+f[x]-u[m]<p:u[x]-u[m]<p)&&(g+=1);else for(let x=m-1;x>=0;x-=1)u[m]-u[x]<p&&(g+=1);return g}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:a,params:i}=t;i.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(u=>{u.complete&&ou(t,u)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function o(){const u=t.rtlTranslate?t.translate*-1:t.translate,f=Math.min(Math.max(u,t.maxTranslate()),t.minTranslate());t.setTranslate(f),t.updateActiveIndex(),t.updateSlidesClasses()}let l;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)o(),i.autoHeight&&t.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&t.isEnd&&!i.centeredSlides){const u=t.virtual&&i.virtual.enabled?t.virtual.slides:t.slides;l=t.slideTo(u.length-1,0,!1,!0)}else l=t.slideTo(t.activeIndex,0,!1,!0);l||o()}i.watchOverflow&&a!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,a){a===void 0&&(a=!0);const i=this,o=i.params.direction;return t||(t=o==="horizontal"?"vertical":"horizontal"),t===o||t!=="horizontal"&&t!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${o}`),i.el.classList.add(`${i.params.containerModifierClass}${t}`),i.emitContainerClasses(),i.params.direction=t,i.slides.forEach(l=>{t==="vertical"?l.style.width="":l.style.height=""}),i.emit("changeDirection"),a&&i.update()),i}changeLanguageDirection(t){const a=this;a.rtl&&t==="rtl"||!a.rtl&&t==="ltr"||(a.rtl=t==="rtl",a.rtlTranslate=a.params.direction==="horizontal"&&a.rtl,a.rtl?(a.el.classList.add(`${a.params.containerModifierClass}rtl`),a.el.dir="rtl"):(a.el.classList.remove(`${a.params.containerModifierClass}rtl`),a.el.dir="ltr"),a.update())}mount(t){const a=this;if(a.mounted)return!0;let i=t||a.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=a,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===a.params.swiperElementNodeName.toUpperCase()&&(a.isElement=!0);const o=()=>`.${(a.params.wrapperClass||"").trim().split(" ").join(".")}`;let u=i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(o()):Ea(i,o())[0];return!u&&a.params.createElements&&(u=Ru("div",a.params.wrapperClass),i.append(u),Ea(i,`.${a.params.slideClass}`).forEach(f=>{u.append(f)})),Object.assign(a,{el:i,wrapperEl:u,slidesEl:a.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:u,hostEl:a.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||ii(i,"direction")==="rtl",rtlTranslate:a.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||ii(i,"direction")==="rtl"),wrongRTL:ii(u,"display")==="-webkit-box"}),!0}init(t){const a=this;if(a.initialized||a.mount(t)===!1)return a;a.emit("beforeInit"),a.params.breakpoints&&a.setBreakpoint(),a.addClasses(),a.updateSize(),a.updateSlides(),a.params.watchOverflow&&a.checkOverflow(),a.params.grabCursor&&a.enabled&&a.setGrabCursor(),a.params.loop&&a.virtual&&a.params.virtual.enabled?a.slideTo(a.params.initialSlide+a.virtual.slidesBefore,0,a.params.runCallbacksOnInit,!1,!0):a.slideTo(a.params.initialSlide,0,a.params.runCallbacksOnInit,!1,!0),a.params.loop&&a.loopCreate(void 0,!0),a.attachEvents();const o=[...a.el.querySelectorAll('[loading="lazy"]')];return a.isElement&&o.push(...a.hostEl.querySelectorAll('[loading="lazy"]')),o.forEach(l=>{l.complete?ou(a,l):l.addEventListener("load",u=>{ou(a,u.target)})}),pm(a),a.initialized=!0,pm(a),a.emit("init"),a.emit("afterInit"),a}destroy(t,a){t===void 0&&(t=!0),a===void 0&&(a=!0);const i=this,{params:o,el:l,wrapperEl:u,slides:f}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),o.loop&&i.loopDestroy(),a&&(i.removeClasses(),l&&typeof l!="string"&&l.removeAttribute("style"),u&&u.removeAttribute("style"),f&&f.length&&f.forEach(p=>{p.classList.remove(o.slideVisibleClass,o.slideFullyVisibleClass,o.slideActiveClass,o.slideNextClass,o.slidePrevClass),p.removeAttribute("style"),p.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(p=>{i.off(p)}),t!==!1&&(i.el&&typeof i.el!="string"&&(i.el.swiper=null),wL(i)),i.destroyed=!0),null}static extendDefaults(t){cn(ih,t)}static get extendedDefaults(){return ih}static get defaults(){return hm}static installModule(t){ka.prototype.__modules__||(ka.prototype.__modules__=[]);const a=ka.prototype.__modules__;typeof t=="function"&&a.indexOf(t)<0&&a.push(t)}static use(t){return Array.isArray(t)?(t.forEach(a=>ka.installModule(a)),ka):(ka.installModule(t),ka)}};Object.keys(ah).forEach(e=>{Object.keys(ah[e]).forEach(t=>{yg.prototype[t]=ah[e][t]})});yg.use([DL,PL]);const Kw=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Fi(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Yr(e,t){const a=["__proto__","constructor","prototype"];Object.keys(t).filter(i=>a.indexOf(i)<0).forEach(i=>{typeof e[i]>"u"?e[i]=t[i]:Fi(t[i])&&Fi(e[i])&&Object.keys(t[i]).length>0?t[i].__swiper__?e[i]=t[i]:Yr(e[i],t[i]):e[i]=t[i]})}function Yw(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Xw(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function Ww(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function Qw(e){e===void 0&&(e="");const t=e.split(" ").map(i=>i.trim()).filter(i=>!!i),a=[];return t.forEach(i=>{a.indexOf(i)<0&&a.push(i)}),a.join(" ")}function $O(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function HO(e){let{swiper:t,slides:a,passedParams:i,changedParams:o,nextEl:l,prevEl:u,scrollbarEl:f,paginationEl:p}=e;const m=o.filter(q=>q!=="children"&&q!=="direction"&&q!=="wrapperClass"),{params:g,pagination:x,navigation:y,scrollbar:v,virtual:S,thumbs:k}=t;let A,j,R,C,_,M,D,N;o.includes("thumbs")&&i.thumbs&&i.thumbs.swiper&&!i.thumbs.swiper.destroyed&&g.thumbs&&(!g.thumbs.swiper||g.thumbs.swiper.destroyed)&&(A=!0),o.includes("controller")&&i.controller&&i.controller.control&&g.controller&&!g.controller.control&&(j=!0),o.includes("pagination")&&i.pagination&&(i.pagination.el||p)&&(g.pagination||g.pagination===!1)&&x&&!x.el&&(R=!0),o.includes("scrollbar")&&i.scrollbar&&(i.scrollbar.el||f)&&(g.scrollbar||g.scrollbar===!1)&&v&&!v.el&&(C=!0),o.includes("navigation")&&i.navigation&&(i.navigation.prevEl||u)&&(i.navigation.nextEl||l)&&(g.navigation||g.navigation===!1)&&y&&!y.prevEl&&!y.nextEl&&(_=!0);const V=q=>{t[q]&&(t[q].destroy(),q==="navigation"?(t.isElement&&(t[q].prevEl.remove(),t[q].nextEl.remove()),g[q].prevEl=void 0,g[q].nextEl=void 0,t[q].prevEl=void 0,t[q].nextEl=void 0):(t.isElement&&t[q].el.remove(),g[q].el=void 0,t[q].el=void 0))};o.includes("loop")&&t.isElement&&(g.loop&&!i.loop?M=!0:!g.loop&&i.loop?D=!0:N=!0),m.forEach(q=>{if(Fi(g[q])&&Fi(i[q]))Object.assign(g[q],i[q]),(q==="navigation"||q==="pagination"||q==="scrollbar")&&"enabled"in i[q]&&!i[q].enabled&&V(q);else{const W=i[q];(W===!0||W===!1)&&(q==="navigation"||q==="pagination"||q==="scrollbar")?W===!1&&V(q):g[q]=i[q]}}),m.includes("controller")&&!j&&t.controller&&t.controller.control&&g.controller&&g.controller.control&&(t.controller.control=g.controller.control),o.includes("children")&&a&&S&&g.virtual.enabled?(S.slides=a,S.update(!0)):o.includes("virtual")&&S&&g.virtual.enabled&&(a&&(S.slides=a),S.update(!0)),o.includes("children")&&a&&g.loop&&(N=!0),A&&k.init()&&k.update(!0),j&&(t.controller.control=g.controller.control),R&&(t.isElement&&(!p||typeof p=="string")&&(p=document.createElement("div"),p.classList.add("swiper-pagination"),p.part.add("pagination"),t.el.appendChild(p)),p&&(g.pagination.el=p),x.init(),x.render(),x.update()),C&&(t.isElement&&(!f||typeof f=="string")&&(f=document.createElement("div"),f.classList.add("swiper-scrollbar"),f.part.add("scrollbar"),t.el.appendChild(f)),f&&(g.scrollbar.el=f),v.init(),v.updateSize(),v.setTranslate()),_&&(t.isElement&&((!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-button-next"),fm(l,t.hostEl.constructor.nextButtonSvg),l.part.add("button-next"),t.el.appendChild(l)),(!u||typeof u=="string")&&(u=document.createElement("div"),u.classList.add("swiper-button-prev"),fm(u,t.hostEl.constructor.prevButtonSvg),u.part.add("button-prev"),t.el.appendChild(u))),l&&(g.navigation.nextEl=l),u&&(g.navigation.prevEl=u),y.init(),y.update()),o.includes("allowSlideNext")&&(t.allowSlideNext=i.allowSlideNext),o.includes("allowSlidePrev")&&(t.allowSlidePrev=i.allowSlidePrev),o.includes("direction")&&t.changeDirection(i.direction,!1),(M||N)&&t.loopDestroy(),(D||N)&&t.loopCreate(),t.update()}function GO(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const a={on:{}},i={},o={};Yr(a,hm),a._emitClasses=!0,a.init=!1;const l={},u=Kw.map(p=>p.replace(/_/,"")),f=Object.assign({},e);return Object.keys(f).forEach(p=>{typeof e[p]>"u"||(u.indexOf(p)>=0?Fi(e[p])?(a[p]={},o[p]={},Yr(a[p],e[p]),Yr(o[p],e[p])):(a[p]=e[p],o[p]=e[p]):p.search(/on[A-Z]/)===0&&typeof e[p]=="function"?t?i[`${p[2].toLowerCase()}${p.substr(3)}`]=e[p]:a.on[`${p[2].toLowerCase()}${p.substr(3)}`]=e[p]:l[p]=e[p])}),["navigation","pagination","scrollbar"].forEach(p=>{a[p]===!0&&(a[p]={}),a[p]===!1&&delete a[p]}),{params:a,passedParams:o,rest:l,events:i}}function UO(e,t){let{el:a,nextEl:i,prevEl:o,paginationEl:l,scrollbarEl:u,swiper:f}=e;Yw(t)&&i&&o&&(f.params.navigation.nextEl=i,f.originalParams.navigation.nextEl=i,f.params.navigation.prevEl=o,f.originalParams.navigation.prevEl=o),Xw(t)&&l&&(f.params.pagination.el=l,f.originalParams.pagination.el=l),Ww(t)&&u&&(f.params.scrollbar.el=u,f.originalParams.scrollbar.el=u),f.init(a)}function IO(e,t,a,i,o){const l=[];if(!t)return l;const u=p=>{l.indexOf(p)<0&&l.push(p)};if(a&&i){const p=i.map(o),m=a.map(o);p.join("")!==m.join("")&&u("children"),i.length!==a.length&&u("children")}return Kw.filter(p=>p[0]==="_").map(p=>p.replace(/_/,"")).forEach(p=>{if(p in e&&p in t)if(Fi(e[p])&&Fi(t[p])){const m=Object.keys(e[p]),g=Object.keys(t[p]);m.length!==g.length?u(p):(m.forEach(x=>{e[p][x]!==t[p][x]&&u(p)}),g.forEach(x=>{e[p][x]!==t[p][x]&&u(p)}))}else e[p]!==t[p]&&u(p)}),l}const FO=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Lu(){return Lu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},Lu.apply(this,arguments)}function Zw(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function Jw(e){const t=[];return Ce.Children.toArray(e).forEach(a=>{Zw(a)?t.push(a):a.props&&a.props.children&&Jw(a.props.children).forEach(i=>t.push(i))}),t}function qO(e){const t=[],a={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Ce.Children.toArray(e).forEach(i=>{if(Zw(i))t.push(i);else if(i.props&&i.props.slot&&a[i.props.slot])a[i.props.slot].push(i);else if(i.props&&i.props.children){const o=Jw(i.props.children);o.length>0?o.forEach(l=>t.push(l)):a["container-end"].push(i)}else a["container-end"].push(i)}),{slides:t,slots:a}}function KO(e,t,a){if(!a)return null;const i=g=>{let x=g;return g<0?x=t.length+g:x>=t.length&&(x=x-t.length),x},o=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${a.offset}px`}:{top:`${a.offset}px`},{from:l,to:u}=a,f=e.params.loop?-t.length:0,p=e.params.loop?t.length*2:t.length,m=[];for(let g=f;g<p;g+=1)g>=l&&g<=u&&m.push(t[i(g)]);return m.map((g,x)=>Ce.cloneElement(g,{swiper:e,style:o,key:g.props.virtualIndex||g.key||`slide-${x}`}))}function Bo(e,t){return typeof window>"u"?E.useEffect(e,t):E.useLayoutEffect(e,t)}const lv=E.createContext(null),YO=E.createContext(null),e3=E.forwardRef(function(e,t){let{className:a,tag:i="div",wrapperTag:o="div",children:l,onSwiper:u,...f}=e===void 0?{}:e,p=!1;const[m,g]=E.useState("swiper"),[x,y]=E.useState(null),[v,S]=E.useState(!1),k=E.useRef(!1),A=E.useRef(null),j=E.useRef(null),R=E.useRef(null),C=E.useRef(null),_=E.useRef(null),M=E.useRef(null),D=E.useRef(null),N=E.useRef(null),{params:V,passedParams:q,rest:W,events:H}=GO(f),{slides:ee,slots:se}=qO(l),de=()=>{S(!v)};Object.assign(V.on,{_containerClasses(Q,z){g(z)}});const ue=()=>{Object.assign(V.on,H),p=!0;const Q={...V};if(delete Q.wrapperClass,j.current=new yg(Q),j.current.virtual&&j.current.params.virtual.enabled){j.current.virtual.slides=ee;const z={cache:!1,slides:ee,renderExternal:y,renderExternalUpdate:!1};Yr(j.current.params.virtual,z),Yr(j.current.originalParams.virtual,z)}};A.current||ue(),j.current&&j.current.on("_beforeBreakpoint",de);const U=()=>{p||!H||!j.current||Object.keys(H).forEach(Q=>{j.current.on(Q,H[Q])})},P=()=>{!H||!j.current||Object.keys(H).forEach(Q=>{j.current.off(Q,H[Q])})};E.useEffect(()=>()=>{j.current&&j.current.off("_beforeBreakpoint",de)}),E.useEffect(()=>{!k.current&&j.current&&(j.current.emitSlidesClasses(),k.current=!0)}),Bo(()=>{if(t&&(t.current=A.current),!!A.current)return j.current.destroyed&&ue(),UO({el:A.current,nextEl:_.current,prevEl:M.current,paginationEl:D.current,scrollbarEl:N.current,swiper:j.current},V),u&&!j.current.destroyed&&u(j.current),()=>{j.current&&!j.current.destroyed&&j.current.destroy(!0,!1)}},[]),Bo(()=>{U();const Q=IO(q,R.current,ee,C.current,z=>z.key);return R.current=q,C.current=ee,Q.length&&j.current&&!j.current.destroyed&&HO({swiper:j.current,slides:ee,passedParams:q,changedParams:Q,nextEl:_.current,prevEl:M.current,scrollbarEl:N.current,paginationEl:D.current}),()=>{P()}}),Bo(()=>{FO(j.current)},[x]);function $(){return V.virtual?KO(j.current,ee,x):ee.map((Q,z)=>Ce.cloneElement(Q,{swiper:j.current,swiperSlideIndex:z}))}return Ce.createElement(i,Lu({ref:A,className:Qw(`${m}${a?` ${a}`:""}`)},W),Ce.createElement(YO.Provider,{value:j.current},se["container-start"],Ce.createElement(o,{className:$O(V.wrapperClass)},se["wrapper-start"],$(),se["wrapper-end"]),Yw(V)&&Ce.createElement(Ce.Fragment,null,Ce.createElement("div",{ref:M,className:"swiper-button-prev"}),Ce.createElement("div",{ref:_,className:"swiper-button-next"})),Ww(V)&&Ce.createElement("div",{ref:N,className:"swiper-scrollbar"}),Xw(V)&&Ce.createElement("div",{ref:D,className:"swiper-pagination"}),se["container-end"]))});e3.displayName="Swiper";const t3=E.forwardRef(function(e,t){let{tag:a="div",children:i,className:o="",swiper:l,zoom:u,lazy:f,virtualIndex:p,swiperSlideIndex:m,...g}=e===void 0?{}:e;const x=E.useRef(null),[y,v]=E.useState("swiper-slide"),[S,k]=E.useState(!1);function A(_,M,D){M===x.current&&v(D)}Bo(()=>{if(typeof m<"u"&&(x.current.swiperSlideIndex=m),t&&(t.current=x.current),!(!x.current||!l)){if(l.destroyed){y!=="swiper-slide"&&v("swiper-slide");return}return l.on("_slideClass",A),()=>{l&&l.off("_slideClass",A)}}}),Bo(()=>{l&&x.current&&!l.destroyed&&v(l.getSlideClasses(x.current))},[l]);const j={isActive:y.indexOf("swiper-slide-active")>=0,isVisible:y.indexOf("swiper-slide-visible")>=0,isPrev:y.indexOf("swiper-slide-prev")>=0,isNext:y.indexOf("swiper-slide-next")>=0},R=()=>typeof i=="function"?i(j):i,C=()=>{k(!0)};return Ce.createElement(a,Lu({ref:x,className:Qw(`${y}${o?` ${o}`:""}`),"data-swiper-slide-index":p,onLoad:C},g),u&&Ce.createElement(lv.Provider,{value:j},Ce.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof u=="number"?u:void 0},R(),f&&!S&&Ce.createElement("div",{className:"swiper-lazy-preloader"}))),!u&&Ce.createElement(lv.Provider,{value:j},R(),f&&!S&&Ce.createElement("div",{className:"swiper-lazy-preloader"})))});t3.displayName="SwiperSlide";function XO(e){let{swiper:t,extendParams:a,on:i,emit:o}=e;const l=Wt(),u=Mt();t.keyboard={enabled:!1},a({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function f(g){if(!t.enabled)return;const{rtlTranslate:x}=t;let y=g;y.originalEvent&&(y=y.originalEvent);const v=y.keyCode||y.charCode,S=t.params.keyboard.pageUpDown,k=S&&v===33,A=S&&v===34,j=v===37,R=v===39,C=v===38,_=v===40;if(!t.allowSlideNext&&(t.isHorizontal()&&R||t.isVertical()&&_||A)||!t.allowSlidePrev&&(t.isHorizontal()&&j||t.isVertical()&&C||k))return!1;if(!(y.shiftKey||y.altKey||y.ctrlKey||y.metaKey)&&!(l.activeElement&&(l.activeElement.isContentEditable||l.activeElement.nodeName&&(l.activeElement.nodeName.toLowerCase()==="input"||l.activeElement.nodeName.toLowerCase()==="textarea")))){if(t.params.keyboard.onlyInViewport&&(k||A||j||R||C||_)){let M=!1;if(dm(t.el,`.${t.params.slideClass}, swiper-slide`).length>0&&dm(t.el,`.${t.params.slideActiveClass}`).length===0)return;const D=t.el,N=D.clientWidth,V=D.clientHeight,q=u.innerWidth,W=u.innerHeight,H=CL(D);x&&(H.left-=D.scrollLeft);const ee=[[H.left,H.top],[H.left+N,H.top],[H.left,H.top+V],[H.left+N,H.top+V]];for(let se=0;se<ee.length;se+=1){const de=ee[se];if(de[0]>=0&&de[0]<=q&&de[1]>=0&&de[1]<=W){if(de[0]===0&&de[1]===0)continue;M=!0}}if(!M)return}t.isHorizontal()?((k||A||j||R)&&(y.preventDefault?y.preventDefault():y.returnValue=!1),((A||R)&&!x||(k||j)&&x)&&t.slideNext(),((k||j)&&!x||(A||R)&&x)&&t.slidePrev()):((k||A||C||_)&&(y.preventDefault?y.preventDefault():y.returnValue=!1),(A||_)&&t.slideNext(),(k||C)&&t.slidePrev()),o("keyPress",v)}}function p(){t.keyboard.enabled||(l.addEventListener("keydown",f),t.keyboard.enabled=!0)}function m(){t.keyboard.enabled&&(l.removeEventListener("keydown",f),t.keyboard.enabled=!1)}i("init",()=>{t.params.keyboard.enabled&&p()}),i("destroy",()=>{t.keyboard.enabled&&m()}),Object.assign(t.keyboard,{enable:p,disable:m})}function rh(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function WO(e){let{swiper:t,extendParams:a,on:i}=e;a({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,containerRole:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null,scrollOnFocus:!0}}),t.a11y={clicked:!1};let o=null,l,u,f=new Date().getTime();function p(P){const $=o;$.length!==0&&fm($,P)}function m(P){const $=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(P).replace(/x/g,$)}function g(P){P=vt(P),P.forEach($=>{$.setAttribute("tabIndex","0")})}function x(P){P=vt(P),P.forEach($=>{$.setAttribute("tabIndex","-1")})}function y(P,$){P=vt(P),P.forEach(Q=>{Q.setAttribute("role",$)})}function v(P,$){P=vt(P),P.forEach(Q=>{Q.setAttribute("aria-roledescription",$)})}function S(P,$){P=vt(P),P.forEach(Q=>{Q.setAttribute("aria-controls",$)})}function k(P,$){P=vt(P),P.forEach(Q=>{Q.setAttribute("aria-label",$)})}function A(P,$){P=vt(P),P.forEach(Q=>{Q.setAttribute("id",$)})}function j(P,$){P=vt(P),P.forEach(Q=>{Q.setAttribute("aria-live",$)})}function R(P){P=vt(P),P.forEach($=>{$.setAttribute("aria-disabled",!0)})}function C(P){P=vt(P),P.forEach($=>{$.setAttribute("aria-disabled",!1)})}function _(P){if(P.keyCode!==13&&P.keyCode!==32)return;const $=t.params.a11y,Q=P.target;if(!(t.pagination&&t.pagination.el&&(Q===t.pagination.el||t.pagination.el.contains(P.target))&&!P.target.matches(rh(t.params.pagination.bulletClass)))){if(t.navigation&&t.navigation.prevEl&&t.navigation.nextEl){const z=vt(t.navigation.prevEl);vt(t.navigation.nextEl).includes(Q)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?p($.lastSlideMessage):p($.nextSlideMessage)),z.includes(Q)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?p($.firstSlideMessage):p($.prevSlideMessage))}t.pagination&&Q.matches(rh(t.params.pagination.bulletClass))&&Q.click()}}function M(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{nextEl:P,prevEl:$}=t.navigation;$&&(t.isBeginning?(R($),x($)):(C($),g($))),P&&(t.isEnd?(R(P),x(P)):(C(P),g(P)))}function D(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function N(){return D()&&t.params.pagination.clickable}function V(){const P=t.params.a11y;D()&&t.pagination.bullets.forEach($=>{t.params.pagination.clickable&&(g($),t.params.pagination.renderBullet||(y($,"button"),k($,P.paginationBulletMessage.replace(/\{\{index\}\}/,um($)+1)))),$.matches(rh(t.params.pagination.bulletActiveClass))?$.setAttribute("aria-current","true"):$.removeAttribute("aria-current")})}const q=(P,$,Q)=>{g(P),P.tagName!=="BUTTON"&&(y(P,"button"),P.addEventListener("keydown",_)),k(P,Q),S(P,$)},W=P=>{u&&u!==P.target&&!u.contains(P.target)&&(l=!0),t.a11y.clicked=!0},H=()=>{l=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{t.destroyed||(t.a11y.clicked=!1)})})},ee=P=>{f=new Date().getTime()},se=P=>{if(t.a11y.clicked||!t.params.a11y.scrollOnFocus||new Date().getTime()-f<100)return;const $=P.target.closest(`.${t.params.slideClass}, swiper-slide`);if(!$||!t.slides.includes($))return;u=$;const Q=t.slides.indexOf($)===t.activeIndex,z=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes($);Q||z||P.sourceCapabilities&&P.sourceCapabilities.firesTouchEvents||(t.isHorizontal()?t.el.scrollLeft=0:t.el.scrollTop=0,requestAnimationFrame(()=>{l||(t.params.loop?t.slideToLoop(t.getSlideIndexWhenGrid(parseInt($.getAttribute("data-swiper-slide-index"))),0):t.slideTo(t.getSlideIndexWhenGrid(t.slides.indexOf($)),0),l=!1)}))},de=()=>{const P=t.params.a11y;P.itemRoleDescriptionMessage&&v(t.slides,P.itemRoleDescriptionMessage),P.slideRole&&y(t.slides,P.slideRole);const $=t.slides.length;P.slideLabelMessage&&t.slides.forEach((Q,z)=>{const X=t.params.loop?parseInt(Q.getAttribute("data-swiper-slide-index"),10):z,ne=P.slideLabelMessage.replace(/\{\{index\}\}/,X+1).replace(/\{\{slidesLength\}\}/,$);k(Q,ne)})},ue=()=>{const P=t.params.a11y;t.el.append(o);const $=t.el;P.containerRoleDescriptionMessage&&v($,P.containerRoleDescriptionMessage),P.containerMessage&&k($,P.containerMessage),P.containerRole&&y($,P.containerRole);const Q=t.wrapperEl,z=P.id||Q.getAttribute("id")||`swiper-wrapper-${m(16)}`,X=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";A(Q,z),j(Q,X),de();let{nextEl:ne,prevEl:ae}=t.navigation?t.navigation:{};ne=vt(ne),ae=vt(ae),ne&&ne.forEach(ge=>q(ge,z,P.nextSlideMessage)),ae&&ae.forEach(ge=>q(ge,z,P.prevSlideMessage)),N()&&vt(t.pagination.el).forEach(ce=>{ce.addEventListener("keydown",_)}),Wt().addEventListener("visibilitychange",ee),t.el.addEventListener("focus",se,!0),t.el.addEventListener("focus",se,!0),t.el.addEventListener("pointerdown",W,!0),t.el.addEventListener("pointerup",H,!0)};function U(){o&&o.remove();let{nextEl:P,prevEl:$}=t.navigation?t.navigation:{};P=vt(P),$=vt($),P&&P.forEach(z=>z.removeEventListener("keydown",_)),$&&$.forEach(z=>z.removeEventListener("keydown",_)),N()&&vt(t.pagination.el).forEach(X=>{X.removeEventListener("keydown",_)}),Wt().removeEventListener("visibilitychange",ee),t.el&&typeof t.el!="string"&&(t.el.removeEventListener("focus",se,!0),t.el.removeEventListener("pointerdown",W,!0),t.el.removeEventListener("pointerup",H,!0))}i("beforeInit",()=>{o=Ru("span",t.params.a11y.notificationClass),o.setAttribute("aria-live","assertive"),o.setAttribute("aria-atomic","true")}),i("afterInit",()=>{t.params.a11y.enabled&&ue()}),i("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{t.params.a11y.enabled&&de()}),i("fromEdge toEdge afterInit lock unlock",()=>{t.params.a11y.enabled&&M()}),i("paginationUpdate",()=>{t.params.a11y.enabled&&V()}),i("destroy",()=>{t.params.a11y.enabled&&U()})}function QO(e){let{swiper:t,extendParams:a,on:i,emit:o,params:l}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},a({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let u,f,p=l&&l.autoplay?l.autoplay.delay:3e3,m=l&&l.autoplay?l.autoplay.delay:3e3,g,x=new Date().getTime(),y,v,S,k,A,j,R;function C($){!t||t.destroyed||!t.wrapperEl||$.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",C),!(R||$.detail&&$.detail.bySwiperTouchMove)&&W())}const _=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?y=!0:y&&(m=g,y=!1);const $=t.autoplay.paused?g:x+m-new Date().getTime();t.autoplay.timeLeft=$,o("autoplayTimeLeft",$,$/p),f=requestAnimationFrame(()=>{_()})},M=()=>{let $;return t.virtual&&t.params.virtual.enabled?$=t.slides.find(z=>z.classList.contains("swiper-slide-active")):$=t.slides[t.activeIndex],$?parseInt($.getAttribute("data-swiper-autoplay"),10):void 0},D=$=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(f),_();let Q=typeof $>"u"?t.params.autoplay.delay:$;p=t.params.autoplay.delay,m=t.params.autoplay.delay;const z=M();!Number.isNaN(z)&&z>0&&typeof $>"u"&&(Q=z,p=z,m=z),g=Q;const X=t.params.speed,ne=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(X,!0,!0),o("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,X,!0,!0),o("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(X,!0,!0),o("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,X,!0,!0),o("autoplay")),t.params.cssMode&&(x=new Date().getTime(),requestAnimationFrame(()=>{D()})))};return Q>0?(clearTimeout(u),u=setTimeout(()=>{ne()},Q)):requestAnimationFrame(()=>{ne()}),Q},N=()=>{x=new Date().getTime(),t.autoplay.running=!0,D(),o("autoplayStart")},V=()=>{t.autoplay.running=!1,clearTimeout(u),cancelAnimationFrame(f),o("autoplayStop")},q=($,Q)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(u),$||(j=!0);const z=()=>{o("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",C):W()};if(t.autoplay.paused=!0,Q){A&&(g=t.params.autoplay.delay),A=!1,z();return}g=(g||t.params.autoplay.delay)-(new Date().getTime()-x),!(t.isEnd&&g<0&&!t.params.loop)&&(g<0&&(g=0),z())},W=()=>{t.isEnd&&g<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(x=new Date().getTime(),j?(j=!1,D(g)):D(),t.autoplay.paused=!1,o("autoplayResume"))},H=()=>{if(t.destroyed||!t.autoplay.running)return;const $=Wt();$.visibilityState==="hidden"&&(j=!0,q(!0)),$.visibilityState==="visible"&&W()},ee=$=>{$.pointerType==="mouse"&&(j=!0,R=!0,!(t.animating||t.autoplay.paused)&&q(!0))},se=$=>{$.pointerType==="mouse"&&(R=!1,t.autoplay.paused&&W())},de=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",ee),t.el.addEventListener("pointerleave",se))},ue=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",ee),t.el.removeEventListener("pointerleave",se))},U=()=>{Wt().addEventListener("visibilitychange",H)},P=()=>{Wt().removeEventListener("visibilitychange",H)};i("init",()=>{t.params.autoplay.enabled&&(de(),U(),N())}),i("destroy",()=>{ue(),P(),t.autoplay.running&&V()}),i("_freeModeStaticRelease",()=>{(S||j)&&W()}),i("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?V():q(!0,!0)}),i("beforeTransitionStart",($,Q,z)=>{t.destroyed||!t.autoplay.running||(z||!t.params.autoplay.disableOnInteraction?q(!0,!0):V())}),i("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){V();return}v=!0,S=!1,j=!1,k=setTimeout(()=>{j=!0,S=!0,q(!0)},200)}}),i("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!v)){if(clearTimeout(k),clearTimeout(u),t.params.autoplay.disableOnInteraction){S=!1,v=!1;return}S&&t.params.cssMode&&W(),S=!1,v=!1}}),i("slideChange",()=>{t.destroyed||!t.autoplay.running||(A=!0)}),Object.assign(t.autoplay,{start:N,stop:V,pause:q,resume:W})}function ZO(e){const{effect:t,swiper:a,on:i,setTranslate:o,setTransition:l,overwriteParams:u,perspective:f,recreateShadows:p,getEffectParams:m}=e;i("beforeInit",()=>{if(a.params.effect!==t)return;a.classNames.push(`${a.params.containerModifierClass}${t}`),f&&f()&&a.classNames.push(`${a.params.containerModifierClass}3d`);const x=u?u():{};Object.assign(a.params,x),Object.assign(a.originalParams,x)}),i("setTranslate _virtualUpdated",()=>{a.params.effect===t&&o()}),i("setTransition",(x,y)=>{a.params.effect===t&&l(y)}),i("transitionEnd",()=>{if(a.params.effect===t&&p){if(!m||!m().slideShadows)return;a.slides.forEach(x=>{x.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(y=>y.remove())}),p()}});let g;i("virtualUpdate",()=>{a.params.effect===t&&(a.slides.length||(g=!0),requestAnimationFrame(()=>{g&&a.slides&&a.slides.length&&(o(),g=!1)}))})}function JO(e,t){const a=Hw(t);return a!==t&&(a.style.backfaceVisibility="hidden",a.style["-webkit-backface-visibility"]="hidden"),a}function eD(e){let{swiper:t,duration:a,transformElements:i}=e;const{activeIndex:o}=t;if(t.params.virtualTranslate&&a!==0){let l=!1,u;u=i,u.forEach(f=>{zL(f,()=>{if(l||!t||t.destroyed)return;l=!0,t.animating=!1;const p=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(p)})})}}function tD(e){let{swiper:t,extendParams:a,on:i}=e;a({fadeEffect:{crossFade:!1}}),ZO({effect:"fade",swiper:t,on:i,setTranslate:()=>{const{slides:u}=t,f=t.params.fadeEffect;for(let p=0;p<u.length;p+=1){const m=t.slides[p];let x=-m.swiperSlideOffset;t.params.virtualTranslate||(x-=t.translate);let y=0;t.isHorizontal()||(y=x,x=0);const v=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(m.progress),0):1+Math.min(Math.max(m.progress,-1),0),S=JO(f,m);S.style.opacity=v,S.style.transform=`translate3d(${x}px, ${y}px, 0px)`}},setTransition:u=>{const f=t.slides.map(p=>Hw(p));f.forEach(p=>{p.style.transitionDuration=`${u}ms`}),eD({swiper:t,duration:u,transformElements:f})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})}const nD=L.div`
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
`,aD=()=>{const{t:e}=Ue(),[t,a]=E.useState(0),i=E.useRef(null),o=l=>{var u;(u=i.current)==null||u.slideTo(l)};return d.jsx(nD,{children:d.jsxs(ie.section,{className:"section sticky-process",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.18},variants:pt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.process.title",{defaultValue:"Wie wir arbeiten"})}),d.jsx("p",{className:"section-description",children:e("home.process.desc",{defaultValue:"Ein transparenter Prozess ohne unnötige Schritte: vom kurzen Briefing bis zu Launch und Optimierung mit klaren Deadlines."})})]}),d.jsxs("div",{className:"sticky-process-grid",children:[d.jsx(ie.div,{className:"sticky-steps",role:"tablist","aria-label":e("home.process.aria",{defaultValue:"Projektphasen"}),variants:Pt,children:Qp.map((l,u)=>d.jsxs(ie.button,{className:`sticky-step ${t===u?"active":""}`,onClick:()=>o(u),type:"button",role:"tab","aria-selected":t===u,variants:Ye,children:[d.jsx("span",{children:l.step}),d.jsx("p",{children:e(`home.process.steps.s${u+1}.title`,{defaultValue:["15-Minuten-Call","Prototyp in 48h","Entwicklung in 7-14 Tagen","Launch und Optimierung"][u]})})]},l.step))}),d.jsx(ie.article,{className:"sticky-process-card card",initial:{opacity:0,y:10,scale:.99},animate:{opacity:1,y:0,scale:1},transition:{duration:.32,ease:dn},children:d.jsx(e3,{modules:[XO,WO,tD,QO],effect:"fade",fadeEffect:{crossFade:!0},slidesPerView:1,speed:420,keyboard:{enabled:!0},autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},onSwiper:l=>{i.current=l,a(l.activeIndex)},onSlideChange:l=>a(l.activeIndex),className:"process-swiper",children:Qp.map((l,u)=>d.jsx(t3,{children:d.jsx("div",{className:"process-slide",style:{"--process-bg":`url(${l.image})`},children:d.jsxs("div",{className:"process-content",children:[d.jsxs("div",{className:"process-kicker",children:[d.jsx("span",{className:"process-chip",children:l.step}),d.jsx("span",{className:"process-chip subtle",children:e("home.process.stage",{defaultValue:"Phase"})})]}),d.jsx("h3",{children:e(`home.process.steps.s${u+1}.title`,{defaultValue:["15-Minuten-Call","Prototyp in 48h","Entwicklung in 7-14 Tagen","Launch und Optimierung"][u]})}),d.jsx("p",{children:e(`home.process.steps.s${u+1}.text`,{defaultValue:["Wir klären Aufgabe, KPI und Deadline und stimmen sofort das Launch-Format ab.","Wir zeigen Seitenstruktur, CTA und Lead-Flow vor der Entwicklung.","Umsetzung, SEO-Basis, Integrationen und Analytics ohne unnötigen Overhead.","Wir gehen live, prüfen Conversion und liefern einen 30-Tage-Verbesserungsplan."][u]})}),d.jsxs("div",{className:"process-nav",children:[d.jsx("button",{type:"button",className:"nav-btn",onClick:()=>{var f;return(f=i.current)==null?void 0:f.slidePrev()},disabled:t===0,children:e("home.process.nav.prev",{defaultValue:"Zurück"})}),d.jsx("button",{type:"button",className:"nav-btn primary",onClick:()=>{var f;return(f=i.current)==null?void 0:f.slideNext()},disabled:t===Qp.length-1,children:e("home.process.nav.next",{defaultValue:"Weiter"})})]})]})})},`${l.step}-${u}`))})})]})]})})},iD=({poster:e,video:t,title:a})=>{const i=E.useRef(null),o=async()=>{const u=i.current;if(u)try{u.currentTime=0,await u.play()}catch{}},l=()=>{const u=i.current;u&&(u.pause(),u.currentTime=0)};return d.jsxs("div",{className:"project-preview",onMouseEnter:o,onMouseLeave:l,onFocus:o,onBlur:l,tabIndex:0,"aria-label":a,children:[d.jsx("img",{src:e,alt:"",loading:"lazy"}),d.jsx("video",{ref:i,muted:!0,loop:!0,playsInline:!0,preload:"none",children:d.jsx("source",{src:t,type:"video/webm"})}),d.jsx("div",{className:"preview-overlay"})]})},rD=L.div`
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
`,sD=()=>{const{t:e}=Ue();return d.jsx(rD,{children:d.jsxs(ie.section,{className:"section",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:pt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.projects.title",{defaultValue:"Projekte / Case Studies"})}),d.jsx("p",{className:"section-description",children:e("home.projects.desc",{defaultValue:"Reale Aufgaben und erwartbare Ergebnisse ohne leere Versprechen. Hover auf einen Case für Live-Preview."})})]}),d.jsx(ie.div,{className:"grid-2 projects-grid",variants:Pt,children:fR.map((t,a)=>d.jsx(ie.article,{className:"card project-card",variants:Ye,children:(()=>{const i={c1:"Website für lokale Anfragen",c2:"Landingpage für Ads",c3:"Website für Praxis",c4:"Dashboard für Leads"},o={c1:"Landingpage mit Fokus auf Formular, Anruf und schnellen Mobile-Kontakt.",c2:"Separate Seite mit Tracking für Meta- und Google-Kampagnen.",c3:"Klare Leistungsstruktur, FAQ und Online-Termin-Flow.",c4:"Internes Interface zur Lead-Bearbeitung und Statuskontrolle."},l={c1:"Ziel: mehr Anfragen ohne Budgeterhöhung",c2:"Erwarteter Effekt: qualifiziertere Leads aus Werbung",c3:"Ziel: mehr Terminbuchungen mit weniger Rückfragen",c4:"Erwarteter Effekt: schnellere Bearbeitung von Anfragen"},u=e(`home.projects.cards.${t.id}.title`,{defaultValue:i[t.id]||t.id}),f=e(`home.projects.cards.${t.id}.description`,{defaultValue:o[t.id]||""}),p=e(`home.projects.cards.${t.id}.goal`,{defaultValue:l[t.id]||""});return d.jsxs(d.Fragment,{children:[d.jsx(iD,{poster:t.poster,video:t.video,title:u}),d.jsx("h3",{children:u}),d.jsx("p",{children:f}),d.jsx("div",{className:"project-tags",children:t.tags.map(m=>d.jsx("span",{children:m},`${m}-${a}`))}),d.jsx("p",{className:"muted",children:p})]})})()},t.id))})]})})},oD=L.div`
  .trust-grid .card {
    min-height: 132px;
  }
`,lD=()=>{const{t:e}=Ue();return d.jsx(oD,{children:d.jsxs(ie.section,{className:"section",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:pt,children:[d.jsxs("div",{className:"section-header",children:[d.jsx("h2",{children:e("home.trust.title",{defaultValue:"Was Sie in 14 Tagen bekommen"})}),d.jsx("p",{className:"section-description",children:e("home.trust.desc",{defaultValue:"Konkrete Start-Ergebnisse: eine anfrageorientierte Website, eingerichtete Analytics und ein Plan für weiteres Wachstum."})})]}),d.jsx(ie.div,{className:"grid-2 trust-grid",variants:Pt,children:pR.map(t=>d.jsxs(ie.article,{className:"card",variants:Ye,children:[d.jsx("h3",{children:e(`home.trust.deliverables.${t}.title`,{defaultValue:{d1:"Prototyp in 48h",d2:"Website für Anfragen",d3:"Analytics und Tracking",d4:"30-Tage-Optimierungsplan"}[t]})}),d.jsx("p",{className:"muted",children:e(`home.trust.deliverables.${t}.text`,{defaultValue:{d1:"Wir zeigen Struktur und CTA vor dem Coding, damit Entscheidungen planbar bleiben.",d2:"Formular, Anruf, Messenger und mobile Version für schnelle Kontaktaufnahme.",d3:"GA4 plus Events, damit sichtbar wird, wo Anfragen entstehen.",d4:"Klare nächste Schritte zur Conversion-Steigerung nach Launch."}[t]})})]},t))})]})})},cD=L.div`
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
`,uD=()=>{const e=sR();return rR(e),d.jsx(cD,{children:d.jsx("div",{className:"page",children:d.jsxs("div",{className:"container",children:[d.jsx(qR,{reducedMotion:e}),d.jsx(bL,{}),d.jsx("div",{className:"section-divider"}),d.jsx(xL,{}),d.jsx("div",{className:"section-divider"}),d.jsx(aD,{}),d.jsx("div",{className:"section-divider"}),d.jsx(sD,{}),d.jsx("div",{className:"section-divider"}),d.jsx(NR,{}),d.jsx("div",{className:"section-divider"}),d.jsx(lD,{}),d.jsx(_R,{})]})})})},dD=(e,t,a,i)=>`${a}${e.toFixed(t)}${i}`,Bc=({start:e,max:t,target:a,decimals:i=0,prefix:o="",suffix:l="",durationMs:u=1800,storageKey:f})=>{const p=a??t,[m,g]=E.useState(e),[x,y]=E.useState(!0),v=E.useRef(null);E.useEffect(()=>{if(typeof window>"u")return;if(f&&window.sessionStorage.getItem(f)==="1"){g(p),y(!1);return}let k=0;const A=e,j=p,R=C=>{k||(k=C);const _=Math.min((C-k)/u,1),M=A+(j-A)*_;g(M),_<1?v.current=window.requestAnimationFrame(R):(y(!1),g(j),f&&window.sessionStorage.setItem(f,"1"))};return v.current=window.requestAnimationFrame(R),()=>{v.current&&window.cancelAnimationFrame(v.current)}},[u,p,e,f]);const S=E.useMemo(()=>dD(m,i,o,l),[m,i,o,l]);return d.jsxs(ie.span,{className:"live-metric command-line-metric",initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.42},children:[S,x?d.jsx("span",{className:"terminal-cursor",children:"|"}):null]})},fD={copy:{eyebrow:"Almanya'daki yerel şirketler için öncü sistemler",heroTitle:["Trafikten","nitelikli potansiyel müşteriler","als steuerbares System"],heroLead:"Satış, pazarlama ve sahiplerin aynı verilerle çalışabilmesi için web sitesini, yapay zekayı, reklamları ve analitiği tek bir operasyonel mimaride birleştiriyoruz.",ctaTop:"Stratejik çağrıyı başlat",heroChips:["Potansiyel Müşteri Akışı","Yapay Zeka Yeterliliği","Atıf"],heroChipValues:["Canlı Yayın","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","İniş + Takip","Yapay Zeka Yeterliliği","CRM Boru Hattı"],heroBadges:["Sunucu tarafı izleme","Potansiyel Müşteri Puanlaması","ROAS Görünümü"],servicesTitle:"Sistem modülleri olarak hizmetler",servicesDesc:"Tek tip bir kart bloğu değil: baskın bir çekirdek, yan modüller ve kompakt bir operasyon katmanı.",trio:["Sorun","sistemi","Sonuç"],detailsSummary:"Uygulama ayrıntıları",kpiBadgesTitle:"KPI rozetleri",kpiBadgesDesc:"Her performans, yalnızca satış ve pazarlamanın birlikte okuyup kontrol edebileceği önemli rakamlar kullanılarak değerlendirilir.",signalLayerTitle:"Sinyal Katmanı",signalItems:["GA4 etkinlikleri","Meta CAPI'si","CRM Senkronizasyonu","GDPR modası"],opsTitle:"Operasyon Notları",opsItems:["Haftalık Test Sırası","Bütçenin Yeniden Dağıtılması","Dönüşüm Hunisi QA Yuvaları"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Tavsiye edilir",timelineTitle:"Nasıl çalışıyoruz?",stepLabel:"Adım",controlTitle:"Kontrol Odası: Gerçek zamanlı sonuçlar",controlPanelTitle:"Kontrol Paneli Mimarisi",controlPanelDesc:"Kanal verileri, huni sinyalleri ve CRM durumu tek bir görünümde birleşiyor. Kararlar içgüdüsel olarak değil, süreç düzeyinde alınır.",miniCharts:["Potansiyel Müşteri Hacmi","Kalite Puanı","Anlaşma Hızı"],kpiPanelTitle:"Canlı KPI Sayaçları",kpiLabels:["Nitelikli Potansiyel Müşteriler","Ort. İlk yanıt","Randevuya götür","ROAS kümeleri"],controlBadges:["Liderlik kontrolü","Bütçe kontrolü","Dönüşüm hunisi kontrolü"],ctaBottom:"Potansiyel müşteri sisteminiz için kapsam isteyin"},systems:{website:{title:"Web Sitesi Motoru",problem:"Trafik var ama mobil kullanıcılar formdan önce çıkıyor.",system:"GA4, Meta Piksel, sunucu tarafı izleme, CRM ve GDPR kurulumuyla Açılış/Çoklu Sayfa.",outcome:"Her müşteri izlenebilir bir şekilde kayıt altına alınır ve açıkça bir kanala atanır.",kpis:["izleme oranı","Form Doldurma","Potansiyel Müşteri Kaynağının Netliği"],details:["İzin modu doğru şekilde yapılandırıldı","Çağrı ve WhatsApp etkinlikleri","Gerçek zamanlı CRM aktarımı"]},ai:{title:"Yapay Zeka Yeterlilik Katmanı",problem:"Çok fazla niteliksiz soru satışları ve telefon ekibini engelliyor.",system:"Yapay zeka sohbet robotu, otomatik yeterlilik, WhatsApp/Instagram'da DM akışları, e-posta otomasyonu, müşteri adayı puanlama.",outcome:"Ekip, zaman alıcı ilk sıralama yerine satışla ilgili potansiyel müşterilere öncelik veriyor.",kpis:["İlk yanıt süresi","Nitelikli Potansiyel Müşteri Payı","Satış Ekibi Verimi"],details:["Sektöre özel bilgi istemi yolları","Gösterilmemesi Hatırlatıcıları","Puana göre önceliklendirme"]},ads:{title:"Ücretli Edinme",problem:"Bütçe kanallar arasında net bir öğrenme döngüsü olmadan dağıtılıyor.",system:"Google Ads + Meta Reklamlar + TikTok, A/B testleri, benzerler, dönüşüm izleme ve ROAS görünümü.",outcome:"Bütçe, salt tıklama hacmi yerine yüksek potansiyel müşteri kalitesine sahip kampanyalara akıyor.",kpis:["Nitelikli potansiyel müşteri başına maliyet","Kampanyaya göre ROAS","Yaratıcı Kazanma Oranı"],details:["Bölgesel kampanya kümeleri","Testteki şekil çeşitleri","Sinyale dayalı kitle güncellemeleri"]},analytics:{title:"Kontrol Analitiği",problem:"Kararlar, güvenilir huni verileri yerine platform ekran görüntülerine dayanmaktadır.",system:"Tek düzeyde kanal, huni ve CRM görünümlerini içeren kontrol odası kontrol paneli.",outcome:"Haftalık bütçe, optimizasyon ve ölçeklendirme kararları verilere dayalı olarak izlenebilir.",kpis:["Randevuya Yol Açmak","Anlaşmaya varmak","Boru Hattı Hızı"],details:["Bölgeye/hizmete göre segmentasyon","Huni Düşme Uyarıları","Aylık hipotez listesi"]}},packages:[{id:"başlangıç",title:"Başlangıç",scale:1,lead:"Sıfırdan ölçülebilir bir potansiyel müşteri tabanına giden yerel işletmeler için.",items:["Web dönüşüm hunisi + GA4","Meta Pikseller + İzin","CRM Yakalama","Temel raporlama"],effect:"Potansiyel müşteri kaynaklarının net görünümü ve esnek bir başlangıç süreci."},{id:"büyüme",title:"Büyüme",scale:2,recommended:!0,lead:"Daha nitelikli potansiyel müşterilere ihtiyaç duyan aktif satışları olan ekipler için.",items:["Google + Meta kampanyaları","Yapay Zeka Yeterlilik Akışları","A/B Test Kurulumu","Müşteri Adayı Puanlama + Otomasyon"],effect:"Daha iyi yanıt süreleri ve net önceliklendirme ile daha nitelikli talep."},{id:"ölçeği",title:"Terazi",scale:3,lead:"Birden fazla bölgeye veya hizmet kümesine sahip şirketler için.",items:["Çok kanallı kontrol","Sunucu Tarafı İlişkilendirmesi","Ops Web Uygulama Katmanı","Kontrol odası yönetimi"],effect:"Manuel deneme yanılma yerine süreçler ve güvenilir veriler üzerinden ölçeklendirme."}],timeline:[["01","Stratejik çağrı","Hedef pazar, teklif ve müşteri adayı darboğazı açıkça tanımlanmıştır."],["02","Kapsam belgesi","Kanal planı, takip planı ve sorumluluklar belirlendi."],["03","Yapım aşaması","Web sitesi otomasyonları ve entegrasyonları gerçekleştirilir."],["04","Lansman","QA takibi, kampanya lansmanı ve CRM akışları yayına giriyor."],["05","Optimizasyon","Reklam öğeleri, dönüşüm hunileri ve kalifikasyon için haftalık testler."],["06","Ölçekleme","İşleyen rotalar bölgelere/hizmetlere genişletildi."]]},pD={copy:{eyebrow:"الأنظمة الرائدة للشركات المحلية في ألمانيا",heroTitle:["من حركة المرور","العملاء المتوقعون المؤهلون","كنظام يمكن السيطرة عليه"],heroLead:"نقوم بربط مواقع الويب والذكاء الاصطناعي والإعلانات والتحليلات في بنية تشغيلية واحدة بحيث يعمل فريق المبيعات والتسويق والمالكون بنفس البيانات.",ctaTop:"ابدأ المكالمة الإستراتيجية",heroChips:["تدفق الرصاص","تأهل الذكاء الاصطناعي","الإسناد"],heroChipValues:["المدخول المباشر","رسالة مباشرة + بوت","GA4 + إدارة علاقات العملاء"],flowNodes:["جوجل / ميتا / تيك توك","الهبوط + التتبع","مؤهل الذكاء الاصطناعي","خط أنابيب إدارة علاقات العملاء"],heroBadges:["التتبع من جانب الخادم","نقاط الرصاص","عرض عائد النفقات الإعلانية"],servicesTitle:"الخدمات كوحدات النظام",servicesDesc:"ليست كتلة بطاقات موحدة: نواة مهيمنة ووحدات جانبية وطبقة عمليات مدمجة.",trio:["مشكلة","System","النتيجة"],detailsSummary:"تفاصيل التنفيذ",kpiBadgesTitle:"شارات مؤشرات الأداء الرئيسية",kpiBadgesDesc:"يتم تقييم كل أداء حصريًا باستخدام الأرقام الرئيسية التي يمكن للمبيعات والتسويق قراءتها والتحكم فيها معًا.",signalLayerTitle:"طبقة الإشارة",signalItems:['أحداث "إحصاءات Google" 4',"ميتا كابي","مزامنة إدارة علاقات العملاء","موضة القانون العام لحماية البيانات"],opsTitle:"ملاحظات العمليات",opsItems:["قائمة انتظار الاختبار الأسبوعية","إعادة تخصيص الميزانية","فتحات ضمان الجودة"],packagesTitle:"Pakete in SaaS-Logik",recommended:"موصى به",timelineTitle:"كيف نعمل",stepLabel:"الخطوة",controlTitle:"غرفة التحكم: النتائج في الوقت الحقيقي",controlPanelTitle:"بنية لوحة المعلومات",controlPanelDesc:"تتلاقى بيانات القناة وإشارات مسار التحويل وحالة إدارة علاقات العملاء (CRM) في عرض واحد. يتم اتخاذ القرارات على مستوى العملية بدلاً من الاعتماد على الشعور الغريزي.",miniCharts:["حجم الرصاص","نقاط الجودة","سرعة الصفقة"],kpiPanelTitle:"عدادات مؤشرات الأداء الرئيسية المباشرة",kpiLabels:["العملاء المتوقعون المؤهلون","متوسط. الرد الأول","يؤدي إلى التعيين","مجموعات عائد الإنفاق الإعلاني (ROAS)."],controlBadges:["التحكم في الرصاص","مراقبة الميزانية","التحكم في مسار التحويل"],ctaBottom:"نطاق الطلب لنظام العملاء المحتملين الخاص بك"},systems:{website:{title:"محرك الموقع",problem:"حركة المرور موجودة، لكن مستخدمي الهاتف المحمول يتخلون عنها قبل النموذج.",system:"الصفحات المقصودة/الصفحات المتعددة مع GA4 وMeta Pixel والتتبع من جانب الخادم وإدارة علاقات العملاء وإعداد القانون العام لحماية البيانات (GDPR).",outcome:"يتم تسجيل كل عميل متوقع بطريقة يمكن تتبعها وتعيينها بوضوح إلى القناة.",kpis:["معدل التتبع","إكمال النموذج","وضوح مصدر الرصاص"],details:["تم تكوين وضع الموافقة بشكل صحيح","أحداث الاتصال والواتس اب","دفع CRM في الوقت الحقيقي"]},ai:{title:"طبقة تأهيل الذكاء الاصطناعي",problem:"يؤدي وجود عدد كبير جدًا من الاستفسارات غير المؤهلة إلى عرقلة المبيعات وفريق الهاتف.",system:"روبوت الدردشة المدعم بالذكاء الاصطناعي، والتأهيل التلقائي، وتدفقات الرسائل المباشرة في WhatsApp/Instagram، وأتمتة البريد الإلكتروني، وسجل العملاء المحتملين.",outcome:"يقوم الفريق بإعطاء الأولوية للعملاء المحتملين المرتبطين بالمبيعات بدلاً من الفرز الأولي الذي يستغرق وقتًا طويلاً.",kpis:["وقت الاستجابة الأول","مشاركة العميل المحتمل المؤهل","إنتاجية فريق المبيعات"],details:["مسارات المطالبة الخاصة بالصناعة","عدم عرض التذكيرات","تحديد الأولويات حسب النتيجة"]},ads:{title:"الاستحواذ المدفوع",problem:"يتم توزيع الميزانية بين القنوات بدون حلقة تعليمية واضحة.",system:"إعلانات Google + Meta Ads + TikTok، واختبارات A/B، والمشابهين، وتتبع التحويل، وعرض عائد الإنفاق الإعلاني (ROAS).",outcome:"تتدفق الميزانية إلى الحملات ذات جودة العملاء المحتملين العالية بدلاً من حجم النقرات النقي.",kpis:["التكلفة لكل عميل محتمل مؤهل","عائد النفقات الإعلانية حسب الحملة","معدل الفوز الإبداعي"],details:["مجموعات الحملات الإقليمية","متغيرات الشكل في الاختبار","تحديثات الجمهور المستندة إلى الإشارة"]},analytics:{title:"تحليلات التحكم",problem:"تعتمد القرارات على لقطات شاشة النظام الأساسي بدلاً من بيانات مسار التحويل الموثوقة.",system:"لوحة معلومات غرفة التحكم مع طرق عرض القناة ومسار التحويل وإدارة علاقات العملاء (CRM) على مستوى واحد.",outcome:"يمكن تتبع القرارات الأسبوعية بشأن الميزانية والتحسين والقياس بناءً على البيانات.",kpis:["يؤدي إلى التعيين","يؤدي إلى التعامل","سرعة خط الأنابيب"],details:["التقسيم حسب المنطقة/الخدمة","تنبيهات إسقاط مسار التحويل","قائمة الفرضيات الشهرية"]}},packages:[{id:"بداية",title:"كاتب",scale:1,lead:"للشركات المحلية التي تنتقل من الصفر إلى قاعدة عملاء قابلة للقياس.",items:["مسار تحويل الويب + GA4","Meta Pixels + الموافقة","التقاط إدارة علاقات العملاء","إعداد التقارير الأساسية"],effect:"رؤية واضحة لمصادر العملاء المحتملين وعملية أولية مرنة."},{id:"النمو",title:"النمو",scale:2,recommended:!0,lead:"للفرق ذات المبيعات النشطة التي تحتاج إلى المزيد من العملاء المحتملين المؤهلين.",items:["حملات جوجل + ميتا","تدفقات تأهيل الذكاء الاصطناعي","إعداد اختبار أ/ب","تسجيل نقاط العميل المتوقع + الأتمتة"],effect:"طلب أكثر تأهيلاً مع أوقات استجابة أفضل وتحديد أولويات واضح."},{id:"scale",title:"مقياس",scale:3,lead:"للشركات ذات المناطق أو مجموعات الخدمة المتعددة.",items:["تحكم متعدد القنوات","الإسناد من جانب الخادم","طبقة تطبيق ويب العمليات","إدارة غرفة التحكم"],effect:"التوسع من خلال العمليات والبيانات الموثوقة بدلاً من التجربة والخطأ اليدويين."}],timeline:[["01","النداء الاستراتيجي","السوق المستهدف والعرض واختناقات الرصاص محددة بوضوح."],["02","مستند النطاق","تم إصلاح خطة القناة وخطة التتبع والمسؤوليات."],["03","مرحلة البناء","يتم تنفيذ موقع الويب والأتمتة والتكامل."],["04","الإطلاق","بدء تشغيل تتبع ضمان الجودة وإطلاق الحملة وتدفقات إدارة علاقات العملاء."],["05","التحسين","اختبارات أسبوعية للمبدعين والمسارات والتأهيل."],["06","التحجيم","يتم توسيع مسارات العمل إلى المناطق/الخدمات."]]},hD={copy:{eyebrow:"Systemy wiodące dla lokalnych firm w Niemczech",heroTitle:["Z ruchu","kwalifikowani potencjalni klienci","jako system sterowalny"],heroLead:"Łączymy stronę internetową, sztuczną inteligencję, reklamy i analitykę w jedną architekturę operacyjną, aby sprzedaż, marketing i właściciele pracowali z tymi samymi danymi.",ctaTop:"Rozpocznij rozmowę strategiczną",heroChips:["Przepływ ołowiu","AI Zakwalifikuj się","Uznanie autorstwa"],heroChipValues:["Ujęcie na żywo","DM + Bot","GA4 + CRM"],flowNodes:["Google/Meta/TikTok","Lądowanie + śledzenie","Kwalifikacja AI","Potok CRM"],heroBadges:["Śledzenie po stronie serwera","Punktacja leadów","ROAS Widok"],servicesTitle:"Usługi jako moduły systemu",servicesDesc:"Niejednolity blok kart: dominujący rdzeń, moduły flankujące i zwarta warstwa operacyjna.",trio:["Problem","systemu","Wynik"],detailsSummary:"Szczegóły implementacji",kpiBadgesTitle:"Odznaki KPI",kpiBadgesDesc:"Każde wyniki ocenia się wyłącznie na podstawie kluczowych danych, które sprzedaż i marketing mogą wspólnie odczytać i kontrolować.",signalLayerTitle:"Warstwa sygnału",signalItems:["Zdarzenia GA4","MetaCAPI","Synchronizacja CRM","Moda na RODO"],opsTitle:"Notatki operacyjne",opsItems:["Cotygodniowa kolejka testów","Realokacja budżetu","Szczeliny kontroli jakości lejka"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Zalecane",timelineTitle:"Jak pracujemy",stepLabel:"Krok",controlTitle:"Control Room: Wyniki w czasie rzeczywistym",controlPanelTitle:"Architektura pulpitu nawigacyjnego",controlPanelDesc:"Dane kanału, sygnały ze ścieżek i status CRM są zebrane w jednym widoku. Decyzje podejmowane są na poziomie procesu, a nie na podstawie przeczuć.",miniCharts:["Ilość leadów","Wynik Jakości","Prędkość rozdania"],kpiPanelTitle:"Liczniki KPI na żywo",kpiLabels:["Kwalifikowani potencjalni klienci","Średnia Pierwsza odpowiedź","Doprowadź do spotkania","Klastry ROAS"],controlBadges:["Kontrola leadów","Kontrola budżetu","Sterowanie lejkiem"],ctaBottom:"Zakres żądania dla Twojego systemu wiodącego"},systems:{website:{title:"Silnik strony internetowej",problem:"Ruch jest, ale użytkownicy mobilni rezygnują przed formularzem.",system:"Landing/Wielostronicowy z GA4, Meta Pixel, śledzeniem po stronie serwera, konfiguracją CRM i RODO.",outcome:"Każdy lead jest rejestrowany w sposób identyfikowalny i wyraźnie przypisany do kanału.",kpis:["szybkość śledzenia","Wypełnienie formularza","Przejrzystość źródła potencjalnego klienta"],details:["Tryb zgody skonfigurowany poprawnie","Połączenia i zdarzenia WhatsApp","CRM push w czasie rzeczywistym"]},ai:{title:"Warstwa kwalifikacji AI",problem:"Zbyt wiele niewykwalifikowanych zapytań blokuje sprzedaż i zespół telefoniczny.",system:"Chatbot AI, automatyczna kwalifikacja, przepływy DM w WhatsApp/Instagramie, automatyzacja poczty e-mail, scoring leadów.",outcome:"Zespół priorytetowo traktuje leady związane ze sprzedażą, zamiast czasochłonnego wstępnego sortowania.",kpis:["Czas pierwszej odpowiedzi","Kwalifikowany udział wiodący","Wydajność zespołu sprzedaży"],details:["Ścieżki podpowiedzi specyficzne dla branży","Przypomnienia o braku pokazu","Priorytetyzacja według wyniku"]},ads:{title:"Płatne pozyskiwanie",problem:"Budżet jest rozdzielany pomiędzy kanały bez wyraźnej pętli uczenia się.",system:"Google Ads + Meta Ads + TikTok, testy A/B, lookalikes, śledzenie konwersji i widok ROAS.",outcome:"Budżet wpływa na kampanie o wysokiej jakości potencjalnych klientów, a nie na samą liczbę kliknięć.",kpis:["Koszt za kwalifikowanego potencjalnego klienta","ROAS według kampanii","Współczynnik wygranych kreacji"],details:["Regionalne klastry kampanii","Warianty kształtu w teście","Aktualizacje odbiorców na podstawie sygnału"]},analytics:{title:"Analityka kontroli",problem:"Decyzje podejmowane są na podstawie zrzutów ekranu platformy, a nie wiarygodnych danych z lejka.",system:"Pulpit kontrolny z widokami kanałów, lejków i CRM na jednym poziomie.",outcome:"Cotygodniowe decyzje dotyczące budżetu, optymalizacji i skalowania są identyfikowalne na podstawie danych.",kpis:["Prowadź do spotkania","Prowadzić do transakcji","Prędkość rurociągu"],details:["Segmentacja według regionu/usługi","Alerty o spadku ścieżki","Miesięczna lista hipotez"]}},packages:[{id:"rozrusznik",title:"Rozrusznik",scale:1,lead:"Dla lokalnych firm przechodzących od zera do mierzalnej bazy leadów.",items:["Lejek internetowy + GA4","Meta piksele + zgoda","Przechwytywanie CRM","Podstawowe raportowanie"],effect:"Jasny obraz źródeł potencjalnych klientów i odporny proces początkowy."},{id:"wzrostu",title:"Wzrost",scale:2,recommended:!0,lead:"Dla zespołów z aktywną sprzedażą, które potrzebują większej liczby wykwalifikowanych potencjalnych klientów.",items:["Kampanie Google + Meta","Przepływy kwalifikacji AI","Konfiguracja testów A/B","Punktacja leadów + automatyzacja"],effect:"Bardziej kwalifikowany popyt z lepszymi czasami reakcji i jasnym ustalaniem priorytetów."},{id:"scale",title:"Skala",scale:3,lead:"Dla firm z wieloma regionami lub klastrami usług.",items:["Sterowanie wielokanałowe","Atrybucja po stronie serwera","Warstwa aplikacji internetowej Ops","Zarządzanie sterownią"],effect:"Skalowanie poprzez procesy i wiarygodne dane zamiast ręcznej metody prób i błędów."}],timeline:[["01","Połączenie strategiczne","Rynek docelowy, oferta i wiodące wąskie gardło są jasno określone."],["02","Dokument dotyczący zakresu","Plan kanału, plan śledzenia i obowiązki są stałe."],["03","Faza budowy","Serwis WWW, wdrażane są automatyzacje i integracje."],["04","Uruchomienie","Śledzenie kontroli jakości, uruchamiania kampanii i przepływów CRM zostaje uruchomione."],["05","Optymalizacja","Cotygodniowe testy kreacji, lejków i kwalifikacji."],["06","Skalowanie","Funkcjonujące trasy są rozszerzone o regiony/usługi."]]},mD={copy:{eyebrow:"Pergalên pêşeng ji bo pargîdaniyên herêmî yên li Elmanyayê",heroTitle:["Ji Trafîkê","pêşengên jêhatî","wekî pergalek kontrolkirî"],heroLead:"Em malper, AI, reklam û analîtîk di yek mîmariya xebitandinê de girêdidin da ku firotgeh, kirrûbirra û xwedan bi heman daneyan re bixebitin.",ctaTop:"Banga stratejîk dest pê bikin",heroChips:["Lead Flow","AI Qualify","Attribution"],heroChipValues:["Vegirtina Zindî","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Daxistina + Şopandin","Qalîteya AI","CRM Pipeline"],heroBadges:["Şopandina server-side","Nîşandana Serê","Dîtina ROAS"],servicesTitle:"Karûbarên wekî modulên pergalê",servicesDesc:"Ne bloka qerta yekgirtî: bingehek serdest, modulên alîgir û qatek operasyonên tevlihev.",trio:["Pirsgirêk","System","Encam"],detailsSummary:"Agahiyên pêkanînê",kpiBadgesTitle:"nîşaneyên KPI",kpiBadgesDesc:"Her performans bi taybetî bi karanîna hejmarên sereke yên ku firotgeh û kirrûbirra dikarin bi hev re bixwînin û kontrol bikin têne nirxandin.",signalLayerTitle:"Signal Layer",signalItems:["bûyerên GA4","Meta CAPI","CRM Sync","moda GDPR"],opsTitle:"Têbînîyên Ops",opsItems:["Dora Testa Heftane","Veqetandina budceyê","Funnel QA Slots"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Pêşniyar kirin",timelineTitle:"Em çawa dixebitin",stepLabel:"Gavê",controlTitle:"Odeya Kontrolê: Encam di wextê rast de",controlPanelTitle:"Mîmariya Dashboard",controlPanelDesc:"Daneyên kanalê, sînyalên funnel û rewşa CRM di yek dîmenê de li hev dicivin. Biryar di asta pêvajoyê de li şûna ku li ser bingeha hestiyariyê têne girtin.",miniCharts:["Volume Lead","Pîvana Kalîteyê","Deal Leza"],kpiPanelTitle:"Hejmarên KPI-ya Zindî",kpiLabels:["Rêberên Qeydkirî","Avg. Bersiva yekem","Ber bi randevûyê ve bibe","ROAS Cluster"],controlBadges:["Kontrola rêber","Kontrola budceyê","Kontrola funnel"],ctaBottom:"Ji bo pergala rêberiya xwe qada xwe daxwaz bikin"},systems:{website:{title:"Motora Malperê",problem:"Trafîk li wir e, lê bikarhênerên mobîl berê xwe didin formê.",system:"Zevî / Pir-Rûpel bi GA4, Meta Pixel, şopandina server-side, sazkirina CRM û GDPR.",outcome:"Her lînka bi şêwazek peydakirî tê tomar kirin û bi zelalî ji kanalek re tê veqetandin.",kpis:["rêjeya şopandinê","Temamkirina Formê","Zelaliya Çavkaniya Rêber"],details:["Moda razîbûnê rast hate mîheng kirin","Bang û bûyerên WhatsApp","CRM di wextê rast de bişopîne"]},ai:{title:"Qatê Qalîteya AI",problem:"Pir lêpirsînên bêkalîte firotan û tîmê têlefonê asteng dikin.",system:"chatbotê AI-ê, kalîteya xweser, DM di WhatsApp/Instagram-ê de diherike, otomasyona e-nameyê, pîvana pêşeng.",outcome:"Tîm li şûna rêzkirina destpêkê ya dem-dixwe, pêşengên bi firotanê ve girêdayî ye.",kpis:["Dema bersivê ya yekem","Parvekirina Pêşkêşiya Qeydkirî","Rêjeya Tîma Firotanê"],details:["Rêçên bilez ên pîşesaziyê","Bîranînên Nîşan Nade","Pêşniyarkirin li gorî puanê"]},ads:{title:"Bidestxistina Pad",problem:"Budçe di navbera kanalan de bêyî çerxa fêrbûnê ya zelal tê dabeş kirin.",system:"Google Ads + Meta Ads + TikTok, testên A/B, xuyang, şopandina veguheztinê û dîtina ROAS.",outcome:"Budçe li şûna voltaja klîk a paqij di kampanyayên bi kalîteya pêşeng a bilind de diherike.",kpis:["Mesrefa serê pêşengê jêhatî","ROAS ji hêla Kampanyayê ve","Rêjeya Serketina Afirîner"],details:["Komên kampanyaya herêmî","Guhertoyên şikilê di ceribandinê de","Nûvekirinên temaşevanan-based sînyala"]},analytics:{title:"Analîtîk kontrol bikin",problem:"Biryar li şûna daneyên pêbawer ên pêbawer li ser dîmenên platformê têne çêkirin.",system:"Tabloya jûreya kontrolê bi dîtinên kanal, kavil û CRM li yek astê.",outcome:"Biryarên heftane yên li ser budce, xweşbînkirin û pîvandinê li ser bingeha daneyan têne şopandin.",kpis:["Ber bi Randevûyê ve bibe","Bi rê ve bibin","Leza boriyê"],details:["Segmentkirin li gorî herêm/xizmet","Agahiyên Daxistina Funnel","Lîsteya hîpoteza mehane"]}},packages:[{id:"destpêk",title:"Destpêker",scale:1,lead:"Ji bo karsaziyên herêmî ku ji sifirê diçin bingehek pêşeng a pîvandî.",items:["Kanala Web + GA4","Meta Pixels + Destûr","Girtina CRM","Raporkirina bingehîn"],effect:"Dîtina zelal a çavkaniyên pêşeng û pêvajoyek destpêkê ya berxwedêr."},{id:"mezinbûn",title:"Mezinbûn",scale:2,recommended:!0,lead:"Ji bo tîmên xwedan firotana çalak ku hewceyê pêşengên jêhatîtir in.",items:["Google + Meta Kampagnen","Qalîteya AI-ê diherike","Sazkirina Testkirina A/B","Nîgarkirina Serê + Otomasyon"],effect:"Daxwaza jêhatîtir bi demên bersivdayînê çêtir û pêşengiya zelal."},{id:"scale",title:"Pîvana",scale:3,lead:"Ji bo pargîdaniyên bi gelek herêm an komên karûbarê.",items:["Kontrola pir-kanal","Server-Side Attribution","Ops Web App Layer","Rêveberiya odeya kontrolê"],effect:"Li şûna ceribandin û xeletiya destan, bi pêvajo û daneyên pêbawer ve pîvandin."}],timeline:[["01","Banga Stratejîk","Bazara armanc, pêşkêşî û kêşeya pêşeng bi zelalî têne destnîşan kirin."],["02","Belgeya çarçovê","Plana kanalê, plana şopandinê û berpirsiyarî têne rast kirin."],["03","Qonaxa avakirinê","Malper, otomasyon û entegrasyon têne pêkanîn."],["04","Destpêkirin","Şopandina QA, destpêkirina kampanyayê û herikîna CRM zindî diçin."],["05","Optimîzasyon","Testên heftane ji bo afirîner, kavil û jêhatîbûnê."],["06","Scaling","Rêçên fonksiyonel li herêm / karûbaran têne berfireh kirin."]]},gD={copy:{eyebrow:"سیستم های رهبری برای شرکت های محلی در آلمان",heroTitle:["از ترافیک","سرنخ های واجد شرایط","به عنوان یک سیستم قابل کنترل"],heroLead:"ما وب سایت، هوش مصنوعی، تبلیغات و تجزیه و تحلیل را در یک معماری عملیاتی به هم متصل می کنیم تا فروش، بازاریابی و مالکان با داده های یکسان کار کنند.",ctaTop:"تماس استراتژیک را شروع کنید",heroChips:["جریان سرب","AI Qualify","اسناد"],heroChipValues:["مصرف زنده","DM + ربات","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","فرود + ردیابی","صلاحیت هوش مصنوعی","خط لوله CRM"],heroBadges:["ردیابی سمت سرور","امتیازدهی برتر","نمای ROAS"],servicesTitle:"خدمات به عنوان ماژول های سیستم",servicesDesc:"یک بلوک کارت یکنواخت نیست: یک هسته غالب، ماژول های کناری و یک لایه عملیات فشرده.",trio:["مشکل","System","نتیجه"],detailsSummary:"جزئیات پیاده سازی",kpiBadgesTitle:"نشان های KPI",kpiBadgesDesc:"هر عملکرد منحصراً با استفاده از ارقام کلیدی ارزیابی می شود که فروش و بازاریابی می توانند با هم بخوانند و کنترل کنند.",signalLayerTitle:"لایه سیگنال",signalItems:["رویدادهای GA4","متا CAPI","CRM Sync","مد GDPR"],opsTitle:"یادداشت های عملیاتی",opsItems:["صف تست هفتگی","تخصیص مجدد بودجه","قیف QA اسلات"],packagesTitle:"Pakete in SaaS-Logik",recommended:"توصیه می شود",timelineTitle:"چگونه کار می کنیم",stepLabel:"گام",controlTitle:"اتاق کنترل: نتایج در زمان واقعی",controlPanelTitle:"معماری داشبورد",controlPanelDesc:"داده های کانال، سیگنال های قیف و وضعیت CRM در یک نما همگرا می شوند. تصمیمات به جای اینکه بر اساس احساس درونی باشد، در سطح فرآیند گرفته می شود.",miniCharts:["حجم سرب","امتیاز کیفیت","سرعت معامله"],kpiPanelTitle:"شمارنده های KPI زنده",kpiLabels:["سرنخ های واجد شرایط","میانگین اولین پاسخ","منجر به قرار ملاقات","خوشه های ROAS"],controlBadges:["کنترل سرب","کنترل بودجه","کنترل قیف"],ctaBottom:"دامنه درخواست برای سیستم رهبری خود"},systems:{website:{title:"موتور وب سایت",problem:"ترافیک وجود دارد، اما کاربران تلفن همراه قبل از فرم آن را رها می کنند.",system:"Landing/Multi-Page با GA4، Meta Pixel، ردیابی سمت سرور، راه اندازی CRM و GDPR.",outcome:"هر لید به شیوه ای قابل ردیابی ثبت می شود و به وضوح به یک کانال اختصاص داده می شود.",kpis:["نرخ ردیابی","تکمیل فرم","وضوح منبع سرب"],details:["حالت رضایت به درستی پیکربندی شده است","تماس و رویدادهای WhatsApp","فشار CRM در زمان واقعی"]},ai:{title:"لایه صلاحیت هوش مصنوعی",problem:"بسیاری از سوالات غیرمجاز فروش و تیم تلفن را مسدود می کند.",system:"چت ربات هوش مصنوعی، صلاحیت خودکار، جریان DM در واتس اپ/اینستاگرام، اتوماسیون ایمیل، امتیازدهی سرنخ.",outcome:"تیم سرنخ های مرتبط با فروش را به جای مرتب سازی اولیه وقت گیر در اولویت قرار می دهد.",kpis:["اولین زمان پاسخ","اشتراک سرب واجد شرایط","توان عملیاتی تیم فروش"],details:["مسیرهای سریع خاص صنعت","بدون نمایش یادآوری","اولویت بندی بر اساس امتیاز"]},ads:{title:"خرید پولی",problem:"بودجه بین کانال ها بدون یک حلقه یادگیری واضح توزیع می شود.",system:"Google Ads + Meta Ads + TikTok، تست های A/B، مشابه، ردیابی تبدیل و نمای ROAS.",outcome:"بودجه به جای حجم کلیک خالص به کمپین هایی با کیفیت سرنخ بالا سرازیر می شود.",kpis:["هزینه هر سرنخ واجد شرایط","ROAS توسط کمپین","نرخ برد خلاقانه"],details:["خوشه های کمپین منطقه ای","انواع شکل در آزمون","به روز رسانی مخاطبان مبتنی بر سیگنال"]},analytics:{title:"کنترل تجزیه و تحلیل",problem:"تصمیم‌گیری‌ها به جای داده‌های قیف قابل اعتماد، بر اساس اسکرین‌شات‌های پلتفرم هستند.",system:"داشبورد اتاق کنترل با نمای کانال، قیف و CRM در یک سطح.",outcome:"تصمیمات هفتگی در مورد بودجه، بهینه سازی و مقیاس بندی بر اساس داده ها قابل ردیابی هستند.",kpis:["منجر به قرار ملاقات","منجر به معامله شود","سرعت خط لوله"],details:["تقسیم بندی بر اساس منطقه/سرویس","هشدارهای سقوط قیف","فهرست فرضیه های ماهانه"]}},packages:[{id:"استارتر",title:"استارتر",scale:1,lead:"برای کسب و کارهای محلی که از صفر به یک پایه سرب قابل اندازه گیری می روند.",items:["قیف وب + GA4","متا پیکسل + رضایت","ضبط CRM","گزارش اولیه"],effect:"نمای واضح از منابع سرب و فرآیند اولیه انعطاف پذیر."},{id:"رشد",title:"رشد",scale:2,recommended:!0,lead:"برای تیم هایی با فروش فعال که به سرنخ های واجد شرایط بیشتری نیاز دارند.",items:["کمپین های Google + Meta","جریان های صلاحیت هوش مصنوعی","راه اندازی تست A/B","امتیازدهی سرب + اتوماسیون"],effect:"تقاضای واجد شرایط بیشتر با زمان پاسخگویی بهتر و اولویت بندی واضح."},{id:"scale",title:"مقیاس",scale:3,lead:"برای شرکت هایی با چندین منطقه یا خوشه خدمات.",items:["کنترل چند کاناله","اسناد سمت سرور","لایه برنامه وب Ops","اداره اتاق کنترل"],effect:"مقیاس گذاری از طریق فرآیندها و داده های قابل اعتماد به جای آزمون و خطای دستی."}],timeline:[["01","تماس استراتژیک","بازار هدف، پیشنهاد و گلوگاه سرب به وضوح تعریف شده است."],["02","سند محدوده","طرح کانال، طرح پیگیری و مسئولیت ها ثابت است."],["03","فاز ساخت","وب سایت، اتوماسیون ها و ادغام ها پیاده سازی شده اند."],["04","راه اندازی","پیگیری QA، راه‌اندازی کمپین و جریان‌های CRM فعال می‌شوند."],["05","بهینه سازی","آزمون های هفتگی برای خلاقیت ها، قیف ها و صلاحیت ها."],["06","مقیاس بندی","مسیرهای عملکردی به مناطق/خدمات گسترش یافته است."]]},bD={copy:{eyebrow:"Sistemi guida per aziende locali in Germania",heroTitle:["Dal traffico","lead qualificati","come sistema controllabile"],heroLead:"Colleghiamo sito web, intelligenza artificiale, pubblicità e analisi in un'unica architettura operativa in modo che vendite, marketing e proprietari lavorino con gli stessi dati.",ctaTop:"Avvia chiamata strategica",heroChips:["Flusso principale","Qualificazione AI","Attribuzione"],heroChipValues:["Assunzione dal vivo","DM + Bot","GA4 + CRM"],flowNodes:["Google/Meta/TikTok","Atterraggio + Inseguimento","Qualificazione AI","Pipeline CRM"],heroBadges:["Monitoraggio lato server","Punteggio principale","Visualizzazione ROAS"],servicesTitle:"Servizi come moduli di sistema",servicesDesc:"Blocco di carte non uniforme: un nucleo dominante, moduli affiancati e uno strato operativo compatto.",trio:["Problema","sistema","Risultato"],detailsSummary:"Dettagli di implementazione",kpiBadgesTitle:"Badge KPI",kpiBadgesDesc:"Ogni prestazione viene valutata esclusivamente utilizzando cifre chiave che vendite e marketing possono leggere e controllare insieme.",signalLayerTitle:"Livello del segnale",signalItems:["Eventi GA4","Meta CAPI","Sincronizzazione CRM","Moda GDPR"],opsTitle:"Note operative",opsItems:["Coda di prova settimanale","Riallocazione del budget","Slot QA canalizzazione"],packagesTitle:"pacchetti in logica SaaS",recommended:"Consigliato",timelineTitle:"Come lavoriamo",stepLabel:"Passaggio",controlTitle:"Sala di controllo: risultati in tempo reale",controlPanelTitle:"Architettura del dashboard",controlPanelDesc:"I dati del canale, i segnali del funnel e lo stato del CRM convergono in un'unica visualizzazione. Le decisioni vengono prese a livello di processo anziché in base al sentimento.",miniCharts:["Volume di lead","Punteggio di qualità","Velocità dell'operazione"],kpiPanelTitle:"Contatori KPI in tempo reale",kpiLabels:["Lead qualificati","Media Prima risposta","Porta all'appuntamento","Cluster ROAS"],controlBadges:["Controllo principale","Controllo del bilancio","Controllo imbuto"],ctaBottom:"Richiedi l'ambito per il tuo sistema lead"},systems:{website:{title:"Motore del sito web",problem:"Il traffico c'è, ma gli utenti mobile abbandonano prima del modulo.",system:"Landing/Multi-pagina con GA4, Meta Pixel, tracciamento lato server, configurazione CRM e GDPR.",outcome:"Ogni lead viene registrato in modo tracciabile e chiaramente assegnato a un canale.",kpis:["tasso di tracciamento","Completamento del modulo","Chiarezza della fonte principale"],details:["Modalità di consenso configurata correttamente","Chiama ed eventi WhatsApp","Push CRM in tempo reale"]},ai:{title:"Livello di qualificazione AI",problem:"Troppe richieste non qualificate bloccano le vendite e il team telefonico.",system:"Chatbot AI, autoqualificazione, flussi DM in WhatsApp/Instagram, automazione della posta elettronica, lead scoring.",outcome:"Il team dà priorità ai lead relativi alle vendite anziché al lungo smistamento iniziale.",kpis:["Tempo di prima risposta","Condivisione di lead qualificati","Produttività del team di vendita"],details:["Percorsi rapidi specifici del settore","Promemoria mancata presentazione","Priorità in base al punteggio"]},ads:{title:"Acquisizione a pagamento",problem:"Il budget è distribuito tra i canali senza un chiaro ciclo di apprendimento.",system:"Google Ads + Meta Ads + TikTok, test A/B, lookalike, monitoraggio delle conversioni e visualizzazione ROAS.",outcome:"Il budget confluisce in campagne con un'elevata qualità dei lead invece che con un puro volume di clic.",kpis:["Costo per lead qualificato","ROAS per campagna","Tasso di vincita creatività"],details:["Cluster di campagne regionali","Varianti di forma nel test","Aggiornamenti sul pubblico basati sui segnali"]},analytics:{title:"Analisi di controllo",problem:"Le decisioni si basano sugli screenshot della piattaforma anziché su dati affidabili della canalizzazione.",system:"Cruscotto della sala di controllo con visualizzazioni canale, canalizzazione e CRM su un unico livello.",outcome:"Le decisioni settimanali su budget, ottimizzazione e ridimensionamento sono tracciabili sulla base dei dati.",kpis:["Porta all'appuntamento","Porta all'affare","Velocità della pipeline"],details:["Segmentazione per regione/servizio","Avvisi di eliminazione della canalizzazione","Elenco mensile delle ipotesi"]}},packages:[{id:"motorino di avviamento",title:"Motorino d'avviamento",scale:1,lead:"Per le imprese locali che passano da zero a una base di lead misurabile.",items:["Imbuto web + GA4","Meta Pixel + Consenso","Acquisizione CRM","Reportistica di base"],effect:"Visione chiara delle fonti di lead e processo iniziale resiliente."},{id:"crescita",title:"Crescita",scale:2,recommended:!0,lead:"Per i team con vendite attive che necessitano di lead più qualificati.",items:["Campagne Google + Meta","Flussi di qualificazione AI","Impostazione test A/B","Punteggio lead + automazione"],effect:"Domanda più qualificata con tempi di risposta migliori e chiara definizione delle priorità."},{id:"scale",title:"Scala",scale:3,lead:"Per aziende con più regioni o cluster di servizi.",items:["Controllo multicanale","Attribuzione lato server","Livello app Web Ops","Governance della sala di controllo"],effect:"Scalabilità tramite processi e dati affidabili anziché tentativi ed errori manuali."}],timeline:[["01","Chiamata strategica","Il mercato target, l'offerta e il collo di bottiglia del lead sono chiaramente definiti."],["02","Documento di ambito","Il piano dei canali, il piano di monitoraggio e le responsabilità sono fissi."],["03","Fase di costruzione","Sito web, automazioni e integrazioni implementate."],["04","Lancio","Il monitoraggio del QA, del lancio della campagna e dei flussi CRM diventa attivo."],["05","Ottimizzazione","Test settimanali per creatività, canalizzazioni e qualificazione."],["06","Ridimensionamento","I percorsi funzionanti vengono estesi a regioni/servizi."]]},xD={copy:{eyebrow:"Sistemas líderes para empresas locales en Alemania",heroTitle:["Del tráfico","clientes potenciales calificados","como sistema controlable"],heroLead:"Conectamos sitios web, inteligencia artificial, anuncios y análisis en una arquitectura operativa para que ventas, marketing y propietarios trabajen con los mismos datos.",ctaTop:"Iniciar llamada estratégica",heroChips:["Flujo de plomo","Clasificación IA","Atribución"],heroChipValues:["Ingesta viva","DM + Bot","GA4 + CRM"],flowNodes:["Google/Meta/TikTok","Aterrizaje + Seguimiento","Calificación de IA","Canal de CRM"],heroBadges:["Seguimiento del lado del servidor","Puntuación de clientes potenciales","ROAS Ver"],servicesTitle:"Servicios como módulos del sistema",servicesDesc:"No es un bloque de tarjetas uniforme: un núcleo dominante, módulos flanqueantes y una capa de operaciones compacta.",trio:["Problema","System","Resultado"],detailsSummary:"Detalles de implementación",kpiBadgesTitle:"insignias de KPI",kpiBadgesDesc:"Cada desempeño se evalúa exclusivamente utilizando cifras clave que ventas y marketing pueden leer y controlar juntos.",signalLayerTitle:"Capa de señal",signalItems:["eventos GA4","Meta CAPI","Sincronización CRM","RGPD moda"],opsTitle:"Notas de operaciones",opsItems:["Cola de prueba semanal","Reasignación de presupuesto","Ranuras de control de calidad del embudo"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Recomendado",timelineTitle:"Cómo trabajamos",stepLabel:"Paso",controlTitle:"Sala de Control: Resultados en tiempo real",controlPanelTitle:"Arquitectura del tablero",controlPanelDesc:"Los datos del canal, las señales del embudo y el estado de CRM convergen en una sola vista. Las decisiones se toman a nivel de proceso en lugar de basarse en intuiciones.",miniCharts:["Volumen de clientes potenciales","Nivel de calidad","Velocidad de negociación"],kpiPanelTitle:"Contadores de KPI en vivo",kpiLabels:["Clientes potenciales calificados","Promedio Primera respuesta","Conduce a la cita","Clústeres de ROAS"],controlBadges:["Control de plomo","Control presupuestario","Control de embudo"],ctaBottom:"Solicite alcance para su sistema principal"},systems:{website:{title:"Motor de sitio web",problem:"Hay tráfico, pero los usuarios de dispositivos móviles abandonan antes del formulario.",system:"Landing/Multi-Page con GA4, Meta Pixel, seguimiento del lado del servidor, CRM y configuración GDPR.",outcome:"Cada cliente potencial se registra de manera rastreable y se asigna claramente a un canal.",kpis:["tasa de seguimiento","Completar formulario","Claridad de la fuente principal"],details:["Modo de consentimiento configurado correctamente","Llamadas y eventos de WhatsApp","Impulso de CRM en tiempo real"]},ai:{title:"Capa de calificación de IA",problem:"Demasiadas consultas no calificadas bloquean las ventas y el equipo telefónico.",system:"Chatbot AI, calificación automática, flujos de DM en WhatsApp/Instagram, automatización de correo electrónico, puntuación de clientes potenciales.",outcome:"El equipo prioriza los clientes potenciales relacionados con las ventas en lugar de una clasificación inicial que requiere mucho tiempo.",kpis:["Primer tiempo de respuesta","Participación de clientes potenciales calificados","Rendimiento del equipo de ventas"],details:["Rutas de aviso específicas de la industria","Recordatorios de ausencia","Priorización por puntuación"]},ads:{title:"Adquisición pagada",problem:"El presupuesto se distribuye entre los canales sin un ciclo de aprendizaje claro.",system:"Google Ads + Meta Ads + TikTok, pruebas A/B, lookalikes, seguimiento de conversiones y visualización de ROAS.",outcome:"El presupuesto fluye hacia campañas con alta calidad de clientes potenciales en lugar de solo volumen de clics.",kpis:["Costo por cliente potencial calificado","ROAS por campaña","Tasa de ganancias creativas"],details:["Grupos de campañas regionales","Variantes de forma en la prueba","Actualizaciones de audiencia basadas en señales"]},analytics:{title:"Análisis de control",problem:"Las decisiones se basan en capturas de pantalla de la plataforma en lugar de datos confiables del embudo.",system:"Panel de control de sala de control con vistas de canal, embudo y CRM en un nivel.",outcome:"Las decisiones semanales sobre presupuesto, optimización y escalamiento se pueden rastrear en función de los datos.",kpis:["Conduce a la cita","Llevar a cabo un trato","Velocidad de la tubería"],details:["Segmentación por región/servicio","Alertas de caída del embudo","Lista mensual de hipótesis"]}},packages:[{id:"motor de arranque",title:"Arrancador",scale:1,lead:"Para empresas locales que pasan de cero a una base de clientes potenciales mensurable.",items:["Embudo web + GA4","Metapíxeles + Consentimiento","Captura de CRM","Informes básicos"],effect:"Visión clara de las fuentes de clientes potenciales y un proceso inicial resiliente."},{id:"crecimiento",title:"Crecimiento",scale:2,recommended:!0,lead:"Para equipos con ventas activas que necesitan más clientes potenciales calificados.",items:["Metacampañas de Google +","Flujos de calificación de IA","Configuración de prueba A/B","Puntuación de clientes potenciales + Automatización"],effect:"Demanda más calificada con mejores tiempos de respuesta y priorización clara."},{id:"scale",title:"Scale",scale:3,lead:"Para empresas con múltiples regiones o grupos de servicios.",items:["Control multicanal","Atribución del lado del servidor","Capa de aplicación web de operaciones","Gobernanza de la sala de control"],effect:"Escalar a través de procesos y datos confiables en lugar de prueba y error manual."}],timeline:[["01","Llamada estratégica","El mercado objetivo, la oferta y el cuello de botella del cliente potencial están claramente definidos."],["02","Documento de alcance","Se fijan el plan de canales, el plan de seguimiento y las responsabilidades."],["03","Fase de construcción","Sitio web, automatizaciones e integraciones implementadas."],["04","Lanzamiento","Se activa el seguimiento de control de calidad, lanzamiento de campañas y flujos de CRM."],["05","Optimización","Pruebas semanales de creatividades, embudos y calificación."],["06","Escalado","Las rutas en funcionamiento se amplían a regiones/servicios."]]},yD={copy:{eyebrow:"Ηγετικά συστήματα για τοπικές εταιρείες στη Γερμανία",heroTitle:["Από Τροχαία","πιστοποιημένοι υποψήφιοι πελάτες","ως ελεγχόμενο σύστημα"],heroLead:"Συνδέουμε ιστότοπο, τεχνητή νοημοσύνη, διαφημίσεις και αναλυτικά στοιχεία σε μία λειτουργική αρχιτεκτονική, έτσι ώστε οι πωλήσεις, το μάρκετινγκ και οι ιδιοκτήτες να λειτουργούν με τα ίδια δεδομένα.",ctaTop:"Έναρξη στρατηγικής κλήσης",heroChips:["Ροή μολύβδου","AI Qualify","Αναφορά"],heroChipValues:["Ζωντανή πρόσληψη","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Προσγείωση + Παρακολούθηση","Πιστοποίηση AI","Αγωγός CRM"],heroBadges:["Παρακολούθηση από την πλευρά του διακομιστή","Βαθμολογία Πρωτοδικών","Προβολή ROAS"],servicesTitle:"Υπηρεσίες ως λειτουργικές μονάδες συστήματος",servicesDesc:"Δεν είναι ένα ομοιόμορφο μπλοκ κάρτας: ένας κυρίαρχος πυρήνας, πλευρικές μονάδες και ένα συμπαγές επίπεδο λειτουργιών.",trio:["Πρόβλημα","σύστημα","Αποτέλεσμα"],detailsSummary:"Λεπτομέρειες υλοποίησης",kpiBadgesTitle:"Σήματα KPI",kpiBadgesDesc:"Κάθε απόδοση αξιολογείται αποκλειστικά χρησιμοποιώντας βασικά στοιχεία που οι πωλήσεις και το μάρκετινγκ μπορούν να διαβάσουν και να ελέγξουν μαζί.",signalLayerTitle:"Επίπεδο σήματος",signalItems:["Γεγονότα GA4","Meta CAPI","CRM Sync","Μόδα GDPR"],opsTitle:"Σημειώσεις λειτουργιών",opsItems:["Εβδομαδιαία ουρά δοκιμής","Ανακατανομή Προϋπολογισμού","Κουλοχέρηδες QA Funnel"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Συνιστάται",timelineTitle:"Πώς δουλεύουμε",stepLabel:"Βήμα",controlTitle:"Χώρος ελέγχου: Αποτελέσματα σε πραγματικό χρόνο",controlPanelTitle:"Αρχιτεκτονική ταμπλό",controlPanelDesc:"Τα δεδομένα καναλιού, τα σήματα διοχέτευσης και η κατάσταση CRM συγκλίνουν σε μία προβολή. Οι αποφάσεις λαμβάνονται σε επίπεδο διαδικασίας αντί να βασίζονται στην αίσθηση του εντέρου.",miniCharts:["Όγκος μολύβδου","Βαθμολογία ποιότητας","Ταχύτητα συμφωνίας"],kpiPanelTitle:"Ζωντανοί μετρητές KPI",kpiLabels:["Πιστοποιημένοι δυνητικοί πελάτες","Μέσος όρος Πρώτη απάντηση","Οδηγήστε στο ραντεβού","συστάδες απόδοσης διαφημιστικής επένδυσης (ROAS)."],controlBadges:["Έλεγχος ηλεκτροδίου","Έλεγχος προϋπολογισμού","Έλεγχος διοχέτευσης"],ctaBottom:"Αίτημα πεδίου εφαρμογής για το σύστημά σας"},systems:{website:{title:"Μηχανή ιστότοπου",problem:"Υπάρχει επισκεψιμότητα, αλλά οι χρήστες κινητών εγκαταλείπουν τη φόρμα.",system:"Landing/Multi-Page με GA4, Meta Pixel, παρακολούθηση από την πλευρά του διακομιστή, CRM και ρύθμιση GDPR.",outcome:"Κάθε υποψήφιος πελάτης καταγράφεται με ανιχνεύσιμο τρόπο και εκχωρείται σαφώς σε ένα κανάλι.",kpis:["ποσοστό παρακολούθησης","Συμπλήρωση εντύπου","Διαύγεια πηγής μολύβδου"],details:["Η λειτουργία συναίνεσης διαμορφώθηκε σωστά","Εκδηλώσεις κλήσεων και WhatsApp","CRM push σε πραγματικό χρόνο"]},ai:{title:"Επίπεδο πιστοποίησης AI",problem:"Πάρα πολλές ακατάλληλες έρευνες μπλοκάρουν τις πωλήσεις και την τηλεφωνική ομάδα.",system:"AI chatbot, αυτόματη πιστοποίηση, ροές DM σε WhatsApp/Instagram, αυτοματοποίηση email, βαθμολογία δυνητικού πελάτη.",outcome:"Η ομάδα δίνει προτεραιότητα στους δυνητικούς πελάτες που σχετίζονται με τις πωλήσεις αντί της χρονοβόρας αρχικής ταξινόμησης.",kpis:["Πρώτος χρόνος απόκρισης","Πιστοποιημένο μερίδιο δυνητικού πελάτη","Διακίνηση της Ομάδας Πωλήσεων"],details:["Διαδρομές προτροπής για συγκεκριμένο κλάδο","Χωρίς εμφάνιση υπενθυμίσεων","Προτεραιότητα ανά βαθμολογία"]},ads:{title:"Απόκτηση επί πληρωμή",problem:"Ο προϋπολογισμός κατανέμεται μεταξύ των καναλιών χωρίς σαφή βρόχο εκμάθησης.",system:"Google Ads + Meta Ads + TikTok, δοκιμές A/B, εμφανίσεις, παρακολούθηση μετατροπών και προβολή Απόδοσης Διαφημιστικής Επένδυσης.",outcome:"Ο προϋπολογισμός ρέει σε καμπάνιες με υψηλή ποιότητα δυνητικού πελάτη αντί για καθαρό όγκο κλικ.",kpis:["Κόστος ανά κατάλληλο υποψήφιο πελάτη","Απόδοση Διαφημιστικής Επένδυσης κατά Campaign","Ποσοστό κέρδους δημιουργικού"],details:["Περιφερειακές ομάδες εκστρατειών","Παραλλαγές σχήματος στη δοκιμή","Ενημερώσεις κοινού βάσει σήματος"]},analytics:{title:"Control Analytics",problem:"Οι αποφάσεις βασίζονται σε στιγμιότυπα οθόνης πλατφόρμας αντί σε αξιόπιστα δεδομένα διοχέτευσης.",system:"Πίνακας ελέγχου δωματίου με προβολές καναλιού, διοχέτευσης και CRM σε ένα επίπεδο.",outcome:"Οι εβδομαδιαίες αποφάσεις σχετικά με τον προϋπολογισμό, τη βελτιστοποίηση και την κλιμάκωση είναι ανιχνεύσιμες βάσει δεδομένων.",kpis:["Οδήγησε στο ραντεβού","Οδήγησε σε συμφωνία","Ταχύτητα αγωγού"],details:["Τμηματοποίηση ανά περιοχή/υπηρεσία","Ειδοποιήσεις πτώσης διοχέτευσης","Μηνιαία λίστα υποθέσεων"]}},packages:[{id:"μίζα",title:"Μίζα",scale:1,lead:"Για τοπικές επιχειρήσεις που πηγαίνουν από το μηδέν σε μια μετρήσιμη βάση δυνητικών πελατών.",items:["Διοχέτευση Ιστού + GA4","Meta Pixels + Consent","Λήψη CRM","Βασική αναφορά"],effect:"Καθαρή άποψη των πηγών μολύβδου και μια ανθεκτική αρχική διαδικασία."},{id:"ανάπτυξη",title:"Ανάπτυξη",scale:2,recommended:!0,lead:"Για ομάδες με ενεργές πωλήσεις που χρειάζονται περισσότερους κατάλληλους δυνητικούς πελάτες.",items:["Καμπάνιες Google + Meta","Ροές πιστοποίησης AI","Ρύθμιση δοκιμής A/B","Βαθμολογία δυνάμεων + Αυτοματισμός"],effect:"Πιο κατάλληλη ζήτηση με καλύτερους χρόνους απόκρισης και σαφή ιεράρχηση προτεραιοτήτων."},{id:"κλίμακα",title:"Κλίμακα",scale:3,lead:"Για εταιρείες με πολλές περιοχές ή ομάδες υπηρεσιών.",items:["Έλεγχος πολλαπλών καναλιών","Απόδοση από την πλευρά του διακομιστή","Επίπεδο εφαρμογής Ιστού Ops","Διακυβέρνηση της αίθουσας ελέγχου"],effect:"Κλιμάκωση μέσω διαδικασιών και αξιόπιστων δεδομένων αντί για μη αυτόματη δοκιμή και σφάλμα."}],timeline:[["01","Στρατηγική κλήση","Η αγορά-στόχος, η προσφορά και το σημείο συμφόρησης είναι σαφώς καθορισμένα."],["02","Έγγραφο πεδίου","Το σχέδιο καναλιού, το σχέδιο παρακολούθησης και οι ευθύνες έχουν διορθωθεί."],["03","Φάση κατασκευής","Ιστοσελίδα, αυτοματισμοί και ενσωματώσεις υλοποιούνται."],["04","Εκκίνηση","Παρακολούθηση QA, εκκίνηση καμπάνιας και ροές CRM εμφανίζονται ζωντανά."],["05","Βελτιστοποίηση","Εβδομαδιαίες δοκιμές για δημιουργικά, διοχετεύσεις και πιστοποίηση."],["06","Κλιμάκωση","Οι λειτουργικές διαδρομές επεκτείνονται σε περιοχές/υπηρεσίες."]]},vD={copy:{eyebrow:"Sisteme de conducere pentru companiile locale din Germania",heroTitle:["Din Trafic","clienți potențiali calificați","ca sistem controlabil"],heroLead:"Conectăm site-ul web, AI, reclamele și analizele într-o singură arhitectură operațională, astfel încât vânzările, marketingul și proprietarii să lucreze cu aceleași date.",ctaTop:"Începe apelul strategic",heroChips:["Flux de plumb","AI Calify","Atribuire"],heroChipValues:["Aportul live","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Aterizare + Urmărire","Calificare AI","CRM Pipeline"],heroBadges:["Urmărire pe partea serverului","Punctajul potențial","Vizualizare ROAS"],servicesTitle:"Servicii ca module de sistem",servicesDesc:"Nu este un bloc de carduri uniform: un nucleu dominant, module de flancare și un strat de operațiuni compact.",trio:["Problemă","System","Rezultat"],detailsSummary:"Detalii de implementare",kpiBadgesTitle:"insigne KPI",kpiBadgesDesc:"Fiecare performanță este evaluată exclusiv folosind cifre cheie pe care vânzările și marketingul le pot citi și controla împreună.",signalLayerTitle:"Strat de semnal",signalItems:["evenimente GA4","Meta CAPI","Sincronizare CRM","GDPR moda"],opsTitle:"Note operaționale",opsItems:["Coada de test săptămânală","Realocarea bugetului","Sloturi QA canal"],packagesTitle:"pachete în logica SaaS",recommended:"Recomandat",timelineTitle:"Cum lucrăm",stepLabel:"Pas",controlTitle:"Camera de control: Rezultate în timp real",controlPanelTitle:"Arhitectura tabloului de bord",controlPanelDesc:"Datele canalului, semnalele canalului și starea CRM converg într-o singură vizualizare. Deciziile sunt luate la nivel de proces în loc să se bazeze pe sentimente.",miniCharts:["Volumul de plumb","Scor de calitate","Deal Velocity"],kpiPanelTitle:"Contoare KPI live",kpiLabels:["Clienti potentiali calificati","medie Primul răspuns","Conduce la programare","clustere ROAS"],controlBadges:["Control plumb","Controlul bugetului","Control pâlnie"],ctaBottom:"Solicitați domeniul de aplicare pentru sistemul dvs. principal"},systems:{website:{title:"Motor de site",problem:"Trafic există, dar utilizatorii de telefonie mobilă abandonează înainte de formular.",system:"Landing/Multi-Page cu GA4, Meta Pixel, urmărire pe server, configurare CRM și GDPR.",outcome:"Fiecare client potențial este înregistrat într-o manieră urmăribilă și atribuit în mod clar unui canal.",kpis:["rata de urmărire","Completarea formularului","Claritatea sursei potențiale"],details:["Modul de consimțământ configurat corect","Evenimente de apel și WhatsApp","CRM push în timp real"]},ai:{title:"Stratul de calificare AI",problem:"Prea multe întrebări necalificate blochează vânzările și echipa telefonică.",system:"AI chatbot, auto-calificare, fluxuri DM în WhatsApp/Instagram, automatizare e-mail, scoring lead.",outcome:"Echipa acordă prioritate clienților potențiali legate de vânzări în loc de sortarea inițială care necesită timp.",kpis:["Timpul primului răspuns","Cotă de lead calificată","Randamentul echipei de vânzări"],details:["Căi prompte specifice industriei","No Show Mementouri","Prioritizare după scor"]},ads:{title:"Achiziție plătită",problem:"Bugetul este distribuit între canale fără o buclă clară de învățare.",system:"Google Ads + Meta Ads + TikTok, teste A/B, asemănări, urmărirea conversiilor și vizualizarea ROAS.",outcome:"Bugetul este transferat în campanii cu o calitate ridicată a clienților potențiali în loc de volumul de clicuri pur.",kpis:["Costul pe client potențial calificat","Rentabilitatea cheltuielilor publicitare în funcție de campanie","Rata de câștiguri creative"],details:["Clustere regionale de campanii","Variante de formă în test","Actualizări ale publicului bazate pe semnal"]},analytics:{title:"Control Analytics",problem:"Deciziile se bazează pe capturi de ecran ale platformei, nu pe date fiabile ale canalului.",system:"Tabloul de bord al camerei de control cu ​​vizualizări ale canalului, pâlniei și CRM la un singur nivel.",outcome:"Deciziile săptămânale privind bugetul, optimizarea și scalarea sunt urmăribile pe baza datelor.",kpis:["Conduce la numire","Conduce la tranzacție","Viteza conductei"],details:["Segmentarea pe regiune/serviciu","Alerte de aruncare a pâlniei","Lista lunară de ipoteze"]}},packages:[{id:"starter",title:"Starter",scale:1,lead:"Pentru companiile locale care trec de la zero la o bază de lead-uri măsurabilă.",items:["Canal web + GA4","Meta Pixeli + Consimțământ","CRM Capture","Raportare de bază"],effect:"Vedere clară a surselor de plumb și un proces inițial rezistent."},{id:"creștere",title:"Creștere",scale:2,recommended:!0,lead:"Pentru echipele cu vânzări active care au nevoie de clienți potențiali mai calificați.",items:["Campanii Google + Meta","Fluxuri de calificare AI","Configurare testare A/B","Lead Scoring + Automatizare"],effect:"Cerere mai calificată, cu timpi de răspuns mai buni și prioritizare clară."},{id:"scară",title:"Scară",scale:3,lead:"Pentru companii cu mai multe regiuni sau clustere de servicii.",items:["Control multicanal","Atribuire pe partea serverului","Ops Web App Layer","Guvernarea camerei de control"],effect:"Scalare prin procese și date fiabile în loc de încercări și erori manuale."}],timeline:[["01","Apel strategic","Piața țintă, oferta și blocajele de plumb sunt clar definite."],["02","Document de aplicare","Planul canalului, planul de urmărire și responsabilitățile sunt fixate."],["03","Faza de construire","Site-ul web, automatizările și integrările sunt implementate."],["04","Lansare","Urmărirea QA, lansarea campaniei și fluxurile CRM sunt disponibile."],["05","Optimizare","Teste săptămânale pentru reclame, canale și calificare."],["06","Scalare","Rutele funcționale sunt extinse la regiuni/servicii."]]},wD={copy:{eyebrow:"Лид системи за местни компании в Германия",heroTitle:["От Трафик","квалифицирани потенциални клиенти","като управляема система"],heroLead:"Ние свързваме уебсайт, AI, реклами и анализи в една оперативна архитектура, така че продажбите, маркетингът и собствениците да работят с едни и същи данни.",ctaTop:"Започнете стратегическо обаждане",heroChips:["Водещ поток","AI Квалификация","Приписване"],heroChipValues:["Прием на живо","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Кацане + Проследяване","AI квалификация","CRM тръбопровод"],heroBadges:["Проследяване от страна на сървъра","Оловно точкуване","Изглед на ROAS"],servicesTitle:"Услуги като системни модули",servicesDesc:"Не е единен картов блок: доминиращо ядро, странични модули и компактен оперативен слой.",trio:["Проблем","система","Резултат"],detailsSummary:"Подробности за внедряването",kpiBadgesTitle:"KPI значки",kpiBadgesDesc:"Всяко представяне се оценява изключително с помощта на ключови цифри, които продажбите и маркетингът могат да четат и контролират заедно.",signalLayerTitle:"Сигнален слой",signalItems:["GA4 събития","Meta CAPI","CRM синхронизиране","GDPR мода"],opsTitle:"Оперативни бележки",opsItems:["Седмична тестова опашка","Преразпределение на бюджета","Слотове за QA на фунии"],packagesTitle:"пакети в SaaS логиката",recommended:"Препоръчва се",timelineTitle:"Как работим",stepLabel:"Стъпка",controlTitle:"Контролна зала: Резултати в реално време",controlPanelTitle:"Архитектура на таблото",controlPanelDesc:"Данните за канала, сигналите във фунията и състоянието на CRM се събират в един изглед. Решенията се вземат на ниво процес, вместо на базата на усещане.",miniCharts:["Водещ обем","Качествен рейтинг","Скорост на сделката"],kpiPanelTitle:"Броячи на KPI на живо",kpiLabels:["Квалифицирани потенциални клиенти","Ср. Първи отговор","Води до среща","ROAS клъстери"],controlBadges:["Контрол на оловото","Бюджетен контрол","Контрол на фунията"],ctaBottom:"Обхват на заявката за вашата водеща система"},systems:{website:{title:"Двигател на уебсайта",problem:"Трафик има, но мобилните потребители изоставят преди формуляра.",system:"Landing/Multi-Page с GA4, Meta Pixel, проследяване от страна на сървъра, настройка на CRM и GDPR.",outcome:"Всеки потенциален клиент се записва по начин, който може да бъде проследен и ясно присвоен на канал.",kpis:["скорост на проследяване","Попълване на формуляр","Яснота на водещия източник"],details:["Режимът на съгласие е конфигуриран правилно","Обаждания и събития в WhatsApp","CRM push в реално време"]},ai:{title:"Квалификационен слой на AI",problem:"Твърде много неквалифицирани запитвания блокират продажбите и телефонния екип.",system:"AI чатбот, автоматична квалификация, DM потоци в WhatsApp/Instagram, автоматизация на имейл, точкуване за потенциални клиенти.",outcome:"Екипът дава приоритет на потенциални клиенти, свързани с продажби, вместо отнемащо време първоначално сортиране.",kpis:["Време за първа реакция","Квалифициран водещ дял","Пропускателна способност на екипа по продажбите"],details:["Специфични за индустрията подканващи пътища","Напомняния за неявяване","Приоритизиране по точки"]},ads:{title:"Платено придобиване",problem:"Бюджетът се разпределя между каналите без ясен цикъл на обучение.",system:"Google Ads + Meta Ads + TikTok, A/B тестове, lookalikes, проследяване на реализациите и изглед на ROAS.",outcome:"Бюджетът се влива в кампании с високо качество на потенциалните клиенти вместо чист обем на кликванията.",kpis:["Цена на квалифициран потенциален клиент","ROAS по кампания","Creative Win Rate"],details:["Регионални групи от кампании","Варианти на формата в теста","Актуализации на аудиторията, базирани на сигнала"]},analytics:{title:"Контролен анализ",problem:"Решенията се основават на екранни снимки на платформа вместо надеждни данни за фунията.",system:"Табло за управление на контролната зала с изгледи на канал, фуния и CRM на едно ниво.",outcome:"Седмичните решения за бюджет, оптимизация и мащабиране могат да бъдат проследени въз основа на данни.",kpis:["Води до назначаване","Води до сделка","Скорост на тръбопровода"],details:["Сегментиране по регион/услуга","Сигнали за падане на фуния","Месечен списък с хипотези"]}},packages:[{id:"стартер",title:"Стартер",scale:1,lead:"За местни фирми, преминаващи от нула към измерима потенциална база.",items:["Уеб фуния + GA4","Мета пиксели + съгласие","CRM Capture","Основно отчитане"],effect:"Ясен поглед върху източниците на олово и устойчив първоначален процес."},{id:"растеж",title:"Растеж",scale:2,recommended:!0,lead:"За екипи с активни продажби, които се нуждаят от повече квалифицирани потенциални клиенти.",items:["Google + мета кампании","AI квалификационни потоци","Настройка на A/B тестване","Водещ резултат + автоматизация"],effect:"По-квалифицирано търсене с по-добро време за реакция и ясно приоритизиране."},{id:"мащаб",title:"Мащаб",scale:3,lead:"За компании с множество региони или сервизни клъстери.",items:["Многоканален контрол","Приписване от страна на сървъра","Ops Web App Layer","Управление на контролната зала"],effect:"Мащабиране чрез процеси и надеждни данни вместо ръчни проби и грешки."}],timeline:[["01","Стратегическо обаждане","Целевият пазар, офертата и тесните места са ясно дефинирани."],["02","Документ за обхват","Планът на канала, планът за проследяване и отговорностите са фиксирани."],["03","Фаза на изграждане","Уеб сайт, автоматизации и интеграции са внедрени."],["04","Стартиране","Проследяване на QA, стартиране на кампания и CRM потоци стават активни."],["05","Оптимизация","Седмични тестове за рекламни послания, фунии и квалификация."],["06","Мащабиране","Функциониращите маршрути са разширени до региони/услуги."]]},SD={tr:fD,ar:pD,pl:hD,ku:mD,fa:gD,it:bD,es:xD,el:yD,ro:vD,bg:wD},n3=qe`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Cn=L.div`
  padding: 48px 0 96px;

  @media (max-width: 767px) {
    padding: 24px 0 72px;
  }
`,pn=L.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
`,sa=L(ie.section).attrs({initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.22},variants:pt})`
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
`,ht=L(ie.section).attrs({initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.18},variants:pt})`
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
`,vg=L(ie.div).attrs({initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.12},variants:Pt})`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`,lu=L(ie.div).attrs({initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.12},variants:Pt})`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`,Ge=L(ie.article).attrs({initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:Ye})`
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
`,wg=L(Ge).attrs({as:ie.section})`
  margin-top: 72px;

  @media (max-width: 767px) {
    margin-top: 48px;
  }
`,Fe=L.p`
  color: rgba(255, 255, 255, 0.72);
`,li=L.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 767px) {
    width: 100%;
    gap: 16px;
  }
`,a3=`
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
`,ci=L(aa)`
  ${a3}
  background: linear-gradient(120deg, #f39a4f, #ffe1b5, #f39a4f);
  background-size: 220% 220%;
  color: #121723;

  &:hover,
  &:focus-visible {
    color: #f8fafc;
    background: linear-gradient(120deg, #121723, #253a64, #121723);
    background-size: 220% 220%;
    animation: ${n3} 2.2s linear infinite;
    box-shadow: 0 12px 22px rgba(21, 31, 52, 0.45);
  }
`,i3=L.button`
  ${a3}
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
    animation: ${n3} 2.2s linear infinite;
    box-shadow: 0 12px 22px rgba(21, 31, 52, 0.45);
  }
`,qt=L.span`
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
`,_o=L.ul`
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
`;L.p`
  font-size: 30px;
  color: #ffd08a;
  margin: 8px 0;
`;L.div`
  display: grid;
  gap: 10px;
`;L.div`
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
`;const TD=L.form`
  display: grid;
  gap: 10px;
`,r3=L.label`
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
`,kD=qe`
  0% { box-shadow: 0 0 0 0 rgba(58, 197, 255, 0.28); }
  70% { box-shadow: 0 0 0 14px rgba(58, 197, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(58, 197, 255, 0); }
`,jD=qe`
  0% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(0, -8px, 0); }
  100% { transform: translate3d(0, 0, 0); }
`,ED=L(Cn)`
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
`,So=L(ie.section)`
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
`,CD=L.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-inline: var(--gutter);
`,AD=L(ie.section)`
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
`,MD=L.div`
  display: grid;
  gap: 20px;
  align-content: center;

  @media (max-width: 980px) {
    align-content: start;
  }
`,zD=L.p`
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 12px;
  color: rgba(207, 233, 255, 0.8);
`,RD=L.h1`
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
`,LD=L.p`
  margin: 8px 0 18px;
  max-width: 62ch;
  color: rgba(235, 244, 255, 0.82);
  font-size: clamp(15px, 2vw, 19px);
  line-height: 1.62;
`,cv=L(ci)`
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
`,OD=L.div`
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
`,DD=L.div`
  position: absolute;
  width: 220px;
  height: 220px;
  top: -72px;
  right: -54px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(70, 198, 255, 0.35), rgba(70, 198, 255, 0));
  filter: blur(2px);
  animation: ${jD} 6.2s ease-in-out infinite;
`,PD=L.div`
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
`,VD=L(ie.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
`,sh=L(ie.div)`
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
`,ND=L(ie.div)`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 10px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`,BD=L.div`
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
`,_D=L.div`
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
`,$D=L.div`
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
`,_c=L(ie.div)`
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
`,oh=L(ie.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Li=L(ie.span)`
  border-radius: 999px;
  padding: 7px 11px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #d8f2ff;
  border: 1px solid rgba(111, 206, 255, 0.38);
  background: rgba(22, 41, 62, 0.76);
  box-shadow: inset 0 0 12px rgba(80, 193, 255, 0.14);
`,HD=L.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,GD=L.button`
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
`,UD=L(ie.div)`
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
`,$c=L(ie.article)`
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
`,ID=L.div`
  margin-top: 16px;
  display: grid;
  gap: 10px;
`,lh=L(ie.div)`
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
`,FD=L.details`
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
`,qD=L.div`
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
`,KD=L(ie.div)`
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,YD=L(ie.article)`
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
`,XD=L.span`
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
`,WD=L.div`
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
`,QD=L.p`
  margin: 14px 0 20px;
  color: rgba(220, 238, 255, 0.84);
  line-height: 1.58;
`,ZD=L(ie.ol)`
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
`,JD=L(ie.li)`
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
    animation: ${kD} 2.8s infinite;
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
`,eP=L.span`
  display: block;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(173, 216, 247, 0.82);
`,tP=L.h3`
  margin: 8px 0 12px;
  font-size: 18px;
`,nP=L(ie.div)`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 18px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,uv=L(ie.article)`
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
`,aP=L.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Hc=L(ie.div)`
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
`,iP=L.div`
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
`,To=L(Fe)`
  font-size: 14px;
  line-height: 1.6;
  margin: 8px 0 18px;
`,Fr={website:{title:"Website Engine",icon:d.jsx(dg,{}),problem:"Traffic ist vorhanden, aber mobile Nutzer brechen vor dem Formular ab.",system:"Landing/Multi-Page mit GA4, Meta Pixel, Server-Side Tracking, CRM und DSGVO-Setup.",outcome:"Jeder Lead wird nachvollziehbar erfasst und eindeutig einem Kanal zugeordnet.",kpis:["Tracking-Quote","Form Completion","Lead Source Clarity"],details:["Consent Mode korrekt konfiguriert","Call- und WhatsApp-Events","CRM Push in Echtzeit"]},ai:{title:"AI Qualification Layer",icon:d.jsx(Zr,{}),problem:"Zu viele unqualifizierte Anfragen blockieren Vertrieb und Telefonteam.",system:"AI-Chatbot, Auto-Qualifizierung, DM-Flows in WhatsApp/Instagram, E-Mail-Automation, Lead Scoring.",outcome:"Das Team priorisiert kaufnahe Leads statt zeitintensiver Erstsortierung.",kpis:["First Response Time","Qualified Lead Share","Sales Team Throughput"],details:["Branchenspezifische Prompt-Pfade","No-Show Reminders","Priorisierung nach Score"]},ads:{title:"Paid Acquisition",icon:d.jsx(cl,{}),problem:"Das Budget verteilt sich ohne klare Lernschleife zwischen den Kanaelen.",system:"Google Ads + Meta Ads + TikTok, A/B Tests, Lookalikes, Conversion Tracking und ROAS-View.",outcome:"Budget fliesst in Kampagnen mit hoher Lead-Qualitaet statt in reine Klickmenge.",kpis:["Cost per Qualified Lead","ROAS by Campaign","Creative Win Rate"],details:["Regionale Kampagnencluster","Form-Varianten im Test","Signalbasierte Audience-Updates"]},analytics:{title:"Control Analytics",icon:d.jsx(Gi,{}),problem:"Entscheidungen basieren auf Plattform-Screenshots statt auf belastbaren Funnel-Daten.",system:"Control-Room Dashboard mit Kanal-, Funnel- und CRM-Sicht in einer Ebene.",outcome:"Woechentliche Entscheidungen zu Budget, Optimierung und Skalierung sind datenbasiert nachvollziehbar.",kpis:["Lead to Appointment","Lead to Deal","Pipeline Velocity"],details:["Segmentierung nach Region/Service","Alerts bei Funnel Drop","Monatliche Hypothesenliste"]}},rP={website:{title:"Website Engine",icon:d.jsx(dg,{}),problem:"Трафік є, але мобільні користувачі не доходять до відправки форми.",system:"Landing або multi-page сайт з GA4, Meta Pixel, server-side tracking, CRM та DSGVO-базою.",outcome:"Кожен лід фіксується і чітко прив’язується до каналу.",kpis:["Якість трекінгу","Form Completion","Lead Source Clarity"],details:["Коректно налаштований Consent Mode","Call і WhatsApp події","CRM push у реальному часі"]},ai:{title:"AI Qualification Layer",icon:d.jsx(Zr,{}),problem:"Надто багато нецільових звернень перевантажують продажі й телефонну лінію.",system:"AI-чатбот, автокваліфікація, DM-flow у WhatsApp/Instagram, email-автоматизація та lead scoring.",outcome:"Команда в першу чергу працює з лідами, які ближчі до покупки.",kpis:["First Response Time","Qualified Lead Share","Sales Team Throughput"],details:["Промпт-потоки під нішу","No-show нагадування","Пріоритезація за scoring"]},ads:{title:"Paid Acquisition",icon:d.jsx(cl,{}),problem:"Бюджет розподіляється між каналами без стабільної логіки навчання.",system:"Google Ads + Meta Ads + TikTok, A/B тести, lookalike аудиторії, conversion tracking і ROAS-аналіз.",outcome:"Бюджет іде в кампанії з кращою якістю лідів, а не просто в кліки.",kpis:["Cost per Qualified Lead","ROAS by Campaign","Creative Win Rate"],details:["Регіональні кластери кампаній","Тести варіантів форм","Оновлення аудиторій за сигналами"]},analytics:{title:"Control Analytics",icon:d.jsx(Gi,{}),problem:"Рішення приймаються за скріншотами платформ, а не за даними воронки.",system:"Control-room dashboard з єдиним шаром каналів, воронки та CRM.",outcome:"Щотижневі рішення щодо бюджету й оптимізації приймаються на основі даних.",kpis:["Lead to Appointment","Lead to Deal","Pipeline Velocity"],details:["Сегментація за регіоном і послугою","Алерти при просіданні funnel","Щомісячний backlog гіпотез"]}},s3=[{id:"starter",title:"Starter",scale:1,lead:"Fuer lokale Betriebe, die von null auf eine messbare Lead-Basis gehen.",items:["Web-Funnel + GA4","Meta Pixel + Consent","CRM Capture","Basis-Reporting"],effect:"Klare Sicht auf Lead-Quellen und ein belastbarer Erstprozess."},{id:"growth",title:"Growth",scale:2,recommended:!0,lead:"Fuer Teams mit aktivem Vertrieb, die mehr qualifizierte Leads brauchen.",items:["Google + Meta Kampagnen","AI Qualification Flows","A/B Testing Setup","Lead Scoring + Automation"],effect:"Mehr qualifizierte Nachfrage bei besserer Reaktionszeit und sauberer Priorisierung."},{id:"scale",title:"Scale",scale:3,lead:"Fuer Unternehmen mit mehreren Regionen oder Leistungsclustern.",items:["Multi-Channel Steuerung","Server-Side Attribution","Ops Web-App Layer","Control-Room Governance"],effect:"Skalierung ueber Prozesse und belastbare Daten statt manuellem Trial-and-Error."}],sP=[{id:"starter",title:"Starter",scale:1,lead:"Для локального бізнесу, який переходить від нуля до вимірюваної lead-системи.",items:["Web-funnel + GA4","Meta Pixel + Consent","CRM Capture","Базова аналітика"],effect:"Прозора картина джерел лідів і робочий базовий процес."},{id:"growth",title:"Growth",scale:2,recommended:!0,lead:"Для команд з активним продажем, яким потрібні якісніші ліди.",items:["Google + Meta кампанії","AI Qualification Flows","A/B Testing Setup","Lead Scoring + Automation"],effect:"Більше кваліфікованого попиту та швидша реакція команди."},{id:"scale",title:"Scale",scale:3,lead:"Для компаній з кількома регіонами або кластерами послуг.",items:["Multi-channel керування","Server-side attribution","Ops Web-App Layer","Control-Room Governance"],effect:"Масштабування через процеси та дані замість ручного trial-and-error."}],o3=[["01","Strategischer Call","Zielmarkt, Angebot und Lead-Engpass werden klar definiert."],["02","Scope Dokument","Kanalplan, Tracking-Plan und Verantwortlichkeiten werden fixiert."],["03","Build Phase","Website, Automationen und Integrationen werden umgesetzt."],["04","Launch","Tracking QA, Kampagnenstart und CRM-Flows gehen live."],["05","Optimierung","Woechentliche Tests fuer Creatives, Funnel und Qualifizierung."],["06","Skalierung","Funktionierende Strecken werden auf Regionen/Leistungen erweitert."]],oP=[["01","Стратегічний дзвінок","Фіксуємо ринок, офер і головні вузькі місця у lead-процесі."],["02","Scope документ","Узгоджуємо канали, tracking-план і відповідальності."],["03","Етап розробки","Реалізуємо сайт, автоматизації й інтеграції."],["04","Запуск","Робимо QA трекінгу, запускаємо кампанії та CRM-flow."],["05","Оптимізація","Щотижнево тестуємо креативи, воронку та логіку кваліфікації."],["06","Масштабування","Робочі зв’язки переносимо на нові регіони й послуги."]],l3={eyebrow:"Lead-Systeme fuer lokale Unternehmen in Deutschland",heroTitle:["Aus Traffic","qualifizierte Leads","als steuerbares System"],heroLead:"Wir verbinden Website, AI, Ads und Analytics in einer operativen Architektur, damit Vertrieb, Marketing und Inhaber mit denselben Daten arbeiten.",ctaTop:"Strategischen Call starten",heroChips:["Lead Flow","AI Qualify","Attribution"],heroChipValues:["Live Intake","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Landing + Tracking","AI Qualification","CRM Pipeline"],heroBadges:["Server-Side Tracking","Lead Scoring","ROAS View"],servicesTitle:"Leistungen als System-Module",servicesDesc:"Kein gleichfoermiger Kartenblock: ein dominanter Kern, flankierende Module und ein kompakter Operations-Layer.",trio:["Problem","System","Outcome"],detailsSummary:"Implementierungsdetails",kpiBadgesTitle:"KPI Badges",kpiBadgesDesc:"Jede Leistung wird ausschliesslich ueber Kennzahlen bewertet, die Sales und Marketing gemeinsam lesen und steuern koennen.",signalLayerTitle:"Signal Layer",signalItems:["GA4 Events","Meta CAPI","CRM Sync","DSGVO Mode"],opsTitle:"Ops Notes",opsItems:["Weekly Test Queue","Budget Reallocation","Funnel QA Slots"],packagesTitle:"Pakete in SaaS-Logik",recommended:"Empfohlen",timelineTitle:"Wie wir arbeiten",stepLabel:"Step",controlTitle:"Control Room: Ergebnisse in Echtzeit",controlPanelTitle:"Dashboard Architektur",controlPanelDesc:"Kanaldaten, Funnel-Signale und CRM-Status laufen in einer Ansicht zusammen. Entscheidungen erfolgen auf Prozessebene statt aus dem Bauchgefuehl.",miniCharts:["Lead Volume","Quality Score","Deal Velocity"],kpiPanelTitle:"Live KPI Counters",kpiLabels:["Qualified Leads","Avg. First Response","Lead to Termin","ROAS Cluster"],controlBadges:["Lead Kontrolle","Budget Kontrolle","Funnel Kontrolle"],ctaBottom:"Scope fuer Ihr Lead-System anfragen"},lP={eyebrow:"Lead-системи для локального бізнесу в Німеччині",heroTitle:["З трафіку","у кваліфіковані ліди","як керовану систему"],heroLead:"Поєднуємо сайт, AI, рекламу та аналітику в єдину операційну архітектуру, щоб маркетинг, продажі й власник працювали з одними даними.",ctaTop:"Запустити стратегічний дзвінок",heroChips:["Lead Flow","AI Qualify","Attribution"],heroChipValues:["Live Intake","DM + Bot","GA4 + CRM"],flowNodes:["Google / Meta / TikTok","Landing + Tracking","AI Qualification","CRM Pipeline"],heroBadges:["Server-Side Tracking","Lead Scoring","ROAS View"],servicesTitle:"Послуги як модулі системи",servicesDesc:"Не одноманітні картки, а система: домінантне ядро, підтримуючі модулі та компактний операційний шар.",trio:["Проблема","Система","Результат"],detailsSummary:"Деталі реалізації",kpiBadgesTitle:"KPI Badges",kpiBadgesDesc:"Кожну послугу оцінюємо тільки за метриками, які спільно читають маркетинг і продажі.",signalLayerTitle:"Signal Layer",signalItems:["GA4 Events","Meta CAPI","CRM Sync","DSGVO Mode"],opsTitle:"Ops Notes",opsItems:["Weekly Test Queue","Budget Reallocation","Funnel QA Slots"],packagesTitle:"Пакети в SaaS-логіці",recommended:"Рекомендовано",timelineTitle:"Як ми працюємо",stepLabel:"Крок",controlTitle:"Control Room: результати в реальному часі",controlPanelTitle:"Архітектура дашборду",controlPanelDesc:"Дані каналів, сигнали воронки та CRM-статуси зібрані в одному view. Рішення приймаються на рівні процесу, а не інтуїтивно.",miniCharts:["Lead Volume","Quality Score","Deal Velocity"],kpiPanelTitle:"Live KPI Counters",kpiLabels:["Qualified Leads","Avg. First Response","Lead to Termin","ROAS Cluster"],controlBadges:["Контроль лідів","Контроль бюджету","Контроль воронки"],ctaBottom:"Запросити scope для вашої lead-системи"},we=SD,Yn=e=>({website:{...Fr.website,...e.website},ai:{...Fr.ai,...e.ai},ads:{...Fr.ads,...e.ads},analytics:{...Fr.analytics,...e.analytics}}),cP={de:Fr,uk:rP,tr:Yn(we.tr.systems),ar:Yn(we.ar.systems),pl:Yn(we.pl.systems),ku:Yn(we.ku.systems),fa:Yn(we.fa.systems),it:Yn(we.it.systems),es:Yn(we.es.systems),el:Yn(we.el.systems),ro:Yn(we.ro.systems),bg:Yn(we.bg.systems)},uP={de:s3,uk:sP,tr:we.tr.packages,ar:we.ar.packages,pl:we.pl.packages,ku:we.ku.packages,fa:we.fa.packages,it:we.it.packages,es:we.es.packages,el:we.el.packages,ro:we.ro.packages,bg:we.bg.packages},dP={de:o3,uk:oP,tr:we.tr.timeline,ar:we.ar.timeline,pl:we.pl.timeline,ku:we.ku.timeline,fa:we.fa.timeline,it:we.it.timeline,es:we.es.timeline,el:we.el.timeline,ro:we.ro.timeline,bg:we.bg.timeline},fP={de:l3,uk:lP,tr:we.tr.copy,ar:we.ar.copy,pl:we.pl.copy,ku:we.ku.copy,fa:we.fa.copy,it:we.it.copy,es:we.es.copy,el:we.el.copy,ro:we.ro.copy,bg:we.bg.copy},pP=["34%","52%","47%","70%","62%","85%","73%"],hP=()=>{const{i18n:e}=Ue(),t=(e.resolvedLanguage||e.language||"de").split("-")[0],a=fP[t]??l3,i=cP[t]??Fr,o=uP[t]??s3,l=dP[t]??o3,[u,f]=E.useState("website"),p=E.useMemo(()=>i[u],[u,i]);return d.jsxs(ED,{children:[d.jsx(CD,{children:d.jsxs(AD,{initial:"hidden",animate:"visible",variants:Pt,children:[d.jsxs(MD,{as:ie.div,variants:Pc,children:[d.jsx(zD,{children:a.eyebrow}),d.jsxs(RD,{children:[d.jsx("span",{children:a.heroTitle[0]}),d.jsx("span",{children:a.heroTitle[1]}),d.jsx("span",{children:a.heroTitle[2]})]}),d.jsx(LD,{children:a.heroLead}),d.jsx(li,{children:d.jsxs(cv,{to:"/kontakt",children:[d.jsx(Nn,{})," ",a.ctaTop]})})]}),d.jsxs(OD,{as:ie.div,variants:ei,children:[d.jsx(DD,{}),d.jsxs(PD,{children:[d.jsxs(VD,{variants:Pt,initial:"hidden",animate:"visible",children:[d.jsxs(sh,{variants:Ye,children:[d.jsx("span",{children:a.heroChips[0]}),d.jsx("b",{children:d.jsx(Ii,{text:a.heroChipValues[0],durationMs:1400,storageKey:"hero_lead_flow"})})]}),d.jsxs(sh,{variants:Ye,children:[d.jsx("span",{children:a.heroChips[1]}),d.jsx("b",{children:a.heroChipValues[1]})]}),d.jsxs(sh,{variants:Ye,children:[d.jsx("span",{children:a.heroChips[2]}),d.jsx("b",{children:a.heroChipValues[2]})]})]}),d.jsxs(ND,{variants:Pt,initial:"hidden",animate:"visible",children:[d.jsx(BD,{children:d.jsx(_D,{children:pP.map((m,g)=>d.jsx(ie.span,{style:{height:m},animate:{scaleY:[.78,1.08,.9,1.02,.78],opacity:[.78,1,.86,.96,.78]},transition:{duration:2.6,delay:g*.16,repeat:1/0,ease:"easeInOut"}},m+g))})}),d.jsxs($D,{children:[d.jsx(_c,{variants:ei,children:a.flowNodes[0]}),d.jsx(_c,{variants:ei,children:a.flowNodes[1]}),d.jsx(_c,{variants:ei,children:a.flowNodes[2]}),d.jsx(_c,{variants:ei,children:a.flowNodes[3]})]})]}),d.jsxs(oh,{variants:Pt,initial:"hidden",animate:"visible",children:[d.jsx(Li,{variants:Ye,children:a.heroBadges[0]}),d.jsx(Li,{variants:Ye,children:a.heroBadges[1]}),d.jsx(Li,{variants:Ye,children:a.heroBadges[2]})]})]})]})]})}),d.jsxs(pn,{children:[d.jsxs(So,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:pt,children:[d.jsx("h2",{children:a.servicesTitle}),d.jsx(To,{children:a.servicesDesc}),d.jsx(HD,{children:Object.keys(i).map(m=>d.jsx(GD,{$active:u===m,onClick:()=>f(m),children:i[m].title},m))}),d.jsxs(UD,{variants:Pt,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.16},children:[d.jsxs($c,{$area:"dominant",$featured:!0,variants:Pc,children:[d.jsxs("h3",{children:[d.jsx(qt,{children:p.icon}),p.title]}),d.jsxs(ID,{children:[d.jsxs(lh,{variants:pt,children:[d.jsx("strong",{children:a.trio[0]}),d.jsx("span",{children:p.problem})]}),d.jsxs(lh,{variants:pt,children:[d.jsx("strong",{children:a.trio[1]}),d.jsx("span",{children:p.system})]}),d.jsxs(lh,{variants:pt,children:[d.jsx("strong",{children:a.trio[2]}),d.jsx("span",{children:p.outcome})]})]}),d.jsxs(FD,{children:[d.jsx("summary",{children:a.detailsSummary}),d.jsx("ul",{children:p.details.map(m=>d.jsx("li",{children:m},m))})]})]}),d.jsxs($c,{$area:"mediumA",variants:pt,children:[d.jsxs("h3",{children:[d.jsx(qt,{children:d.jsx(yu,{})}),a.kpiBadgesTitle]}),d.jsx(oh,{variants:Pt,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:p.kpis.map(m=>d.jsx(Li,{variants:Ye,children:m},m))}),d.jsx(To,{style:{marginTop:12},children:a.kpiBadgesDesc})]}),d.jsxs($c,{$area:"mediumB",variants:ei,children:[d.jsxs("h3",{children:[d.jsx(qt,{children:d.jsx(Wo,{})}),a.signalLayerTitle]}),d.jsxs(qD,{children:[d.jsxs("span",{children:[d.jsx(Tt,{})," ",a.signalItems[0]]}),d.jsxs("span",{children:[d.jsx(Tt,{})," ",a.signalItems[1]]}),d.jsxs("span",{children:[d.jsx(Tt,{})," ",a.signalItems[2]]}),d.jsxs("span",{children:[d.jsx(Tt,{})," ",a.signalItems[3]]})]})]}),d.jsxs($c,{$area:"compact",$compact:!0,variants:Ye,children:[d.jsxs("h3",{children:[d.jsx(qt,{children:d.jsx(qu,{})}),a.opsTitle]}),d.jsxs(_o,{children:[d.jsxs("li",{children:[d.jsx(Tt,{})," ",a.opsItems[0]]}),d.jsxs("li",{children:[d.jsx(Tt,{})," ",a.opsItems[1]]}),d.jsxs("li",{children:[d.jsx(Tt,{})," ",a.opsItems[2]]})]})]})]})]}),d.jsxs(So,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:pt,children:[d.jsx("h2",{children:a.packagesTitle}),d.jsx(KD,{variants:Pt,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.16},children:o.map(m=>d.jsxs(YD,{$recommended:m.recommended,variants:m.recommended?Ye:pt,children:[m.recommended?d.jsx(XD,{children:a.recommended}):null,d.jsx("h3",{children:m.title}),d.jsx(QD,{children:m.lead}),d.jsx(_o,{children:m.items.map(g=>d.jsxs("li",{children:[d.jsx(Tt,{})," ",g]},g))}),d.jsxs(WD,{children:[d.jsx("i",{className:m.scale>=1?"on":""}),d.jsx("i",{className:m.scale>=2?"on":""}),d.jsx("i",{className:m.scale>=3?"on":""})]}),d.jsx(To,{style:{marginTop:12},children:m.effect})]},m.id))})]}),d.jsxs(So,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:pt,children:[d.jsx("h2",{children:a.timelineTitle}),d.jsx(ZD,{variants:Pt,children:l.map(m=>d.jsxs(JD,{variants:Number(m[0])%2===0?ei:Pc,children:[d.jsxs(eP,{children:[a.stepLabel," ",m[0]]}),d.jsx(tP,{children:m[1]}),d.jsx(To,{children:m[2]})]},m[0]))})]}),d.jsxs(So,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:pt,children:[d.jsx("h2",{children:a.controlTitle}),d.jsxs(nP,{variants:Pt,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.18},children:[d.jsxs(uv,{variants:Pc,children:[d.jsx("h3",{children:a.controlPanelTitle}),d.jsx(To,{children:a.controlPanelDesc}),d.jsxs(iP,{children:[d.jsxs("div",{children:[a.miniCharts[0],d.jsx("i",{style:{width:"68%"}})]}),d.jsxs("div",{children:[a.miniCharts[1],d.jsx("i",{style:{width:"82%"}})]}),d.jsxs("div",{children:[a.miniCharts[2],d.jsx("i",{style:{width:"59%"}})]})]})]}),d.jsxs(uv,{variants:ei,children:[d.jsx("h3",{children:a.kpiPanelTitle}),d.jsxs(aP,{children:[d.jsxs(Hc,{variants:Ye,children:[d.jsx("span",{children:a.kpiLabels[0]}),d.jsx("strong",{children:d.jsx(Bc,{start:0,max:38,durationMs:1800,storageKey:"metric_ql"})})]}),d.jsxs(Hc,{variants:Ye,children:[d.jsx("span",{children:a.kpiLabels[1]}),d.jsx("strong",{children:d.jsx(Bc,{start:0,max:11,suffix:"m",durationMs:1700,storageKey:"metric_rt"})})]}),d.jsxs(Hc,{variants:Ye,children:[d.jsx("span",{children:a.kpiLabels[2]}),d.jsx("strong",{children:d.jsx(Bc,{start:0,max:43,suffix:"%",durationMs:1900,storageKey:"metric_l2a"})})]}),d.jsxs(Hc,{variants:Ye,children:[d.jsx("span",{children:a.kpiLabels[3]}),d.jsx("strong",{children:d.jsx(Bc,{start:0,max:3.8,decimals:1,prefix:"x",durationMs:2100,storageKey:"metric_roas"})})]})]}),d.jsxs(oh,{style:{marginTop:12},variants:Pt,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},children:[d.jsx(Li,{variants:Ye,children:a.controlBadges[0]}),d.jsx(Li,{variants:Ye,children:a.controlBadges[1]}),d.jsx(Li,{variants:Ye,children:a.controlBadges[2]})]})]})]})]}),d.jsx(So,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:pt,children:d.jsx(li,{children:d.jsxs(cv,{to:"/kontakt",children:[d.jsx(Nn,{})," ",a.ctaBottom]})})})]})]})},mP={hidden:{opacity:0,y:24},show:{opacity:1,y:0}},gP=qe`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`,bP=qe`
  0% { box-shadow: 0 0 0 rgba(73, 157, 255, 0); }
  50% { box-shadow: 0 0 30px rgba(73, 157, 255, 0.28); }
  100% { box-shadow: 0 0 0 rgba(73, 157, 255, 0); }
`,xP=L.div`
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
`,yP=L.section`
  display: grid;
  gap: 26px;
  grid-template-columns: 1.15fr 1fr;
  align-items: center;
  padding: 84px 0 24px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    padding-top: 52px;
  }
`,vP=L.div`
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
`,wP=L.span`
  color: #ffd08a;
  text-shadow: 0 0 28px rgba(255, 193, 104, 0.34);
`,SP=L.div`
  margin-top: 24px;
`,c3=L(ci)`
  min-height: 54px;
  padding: 0 28px;
  border: 1px solid rgba(255, 202, 128, 0.35);
  box-shadow: 0 10px 24px rgba(18, 33, 58, 0.34);

  &:hover,
  &:focus-visible {
    box-shadow: 0 0 0 1px rgba(255, 213, 150, 0.55), 0 16px 30px rgba(255, 183, 77, 0.28);
  }
`,TP=L(ie.div)`
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
`,kP=L.div`
  position: absolute;
  inset: 22px;
  display: grid;
  gap: 12px;
`,ch=L.div`
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
`,uh=L.div`
  flex: 1;
  height: 9px;
  margin-left: 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
`,dh=L(ie.div)`
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #3f8cff, #76b8ff);
`,jP=L(ie.div)`
  margin-top: 4px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(7, 11, 22, 0.7);
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  animation: ${gP} 5.2s ease-in-out infinite;
`,ko=L(ie.div)`
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
`,EP=L(ht)`
  margin-top: 26px;
`,CP=L.div`
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.86), rgba(10, 16, 30, 0.82));
  padding: 18px;
  box-shadow: 0 20px 54px rgba(5, 9, 18, 0.5);
`,AP=L.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,jo=L(ie.div)`
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
`,MP=L.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 10px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,zP=L.div`
  display: inline-flex;
  gap: 6px;
  margin-top: 14px;
  margin-bottom: 8px;
  padding: 6px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(11, 17, 32, 0.72);
`,dv=L.button`
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
`,RP=L(ie.article)`
  position: relative;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(11, 17, 32, 0.78);
  padding: ${({$recommended:e})=>e?"24px":"20px"};
  box-shadow: ${({$recommended:e})=>e?"0 22px 60px rgba(32, 78, 148, 0.36)":"0 14px 34px rgba(5, 9, 18, 0.45)"};
  transform: ${({$recommended:e})=>e?"translateY(-6px)":"none"};
  border-color: ${({$recommended:e})=>e?"rgba(118, 182, 255, 0.68)":"rgba(255, 255, 255, 0.14)"};
  animation: ${({$recommended:e})=>e?bP:"none"} 4.6s ease-in-out infinite;

  &:hover {
    transform: ${({$recommended:e})=>e?"translateY(-9px)":"translateY(-5px)"};
    border-color: rgba(245, 195, 120, 0.58);
  }
`,LP=L.span`
  position: absolute;
  right: 16px;
  top: 14px;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 999px;
  background: linear-gradient(120deg, rgba(118, 182, 255, 0.24), rgba(255, 206, 132, 0.24));
  border: 1px solid rgba(153, 201, 255, 0.45);
`,OP=L.div`
  font-size: 34px;
  font-weight: 800;
  line-height: 1;
  margin: 10px 0 3px;
  color: #ffd28f;
`,DP=L.div`
  color: rgba(255, 255, 255, 0.66);
  font-size: 13px;
`,fh=L.div`
  margin-top: 14px;
  margin-bottom: 8px;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.58);
`,ph=L.ul`
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
`,PP=L.div`
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
`,VP=L.div`
  margin-top: 16px;
  padding: 16px;
  border-radius: 14px;
  border: 1px solid rgba(118, 182, 255, 0.2);
  background:
    linear-gradient(180deg, rgba(17, 27, 49, 0.82), rgba(10, 16, 31, 0.84)),
    radial-gradient(circle at top right, rgba(255, 206, 132, 0.12), transparent 42%);
`,NP=L.div`
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.58);
`,BP=L.div`
  margin-top: 8px;
  font-size: 28px;
  line-height: 1.05;
  font-weight: 800;
  color: #8fc5ff;
`,_P=L.div`
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 13px;
`,$P=L.div`
  margin-top: 12px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  overflow: hidden;
  background: rgba(11, 17, 32, 0.7);
`,HP=L.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: 12px 16px;
  gap: 8px;
  background: rgba(255, 255, 255, 0.06);
  font-weight: 700;
`,Nr=L.div`
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
`,Rn=L.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;

  svg {
    color: #8ec4ff;
  }
`,GP=L.div`
  margin-top: 12px;
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,hh=L.div`
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
`,UP=L.section`
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
`,IP=L(c3)`
  margin-top: 20px;
  min-height: 58px;
  padding: 0 32px;
  font-size: 16px;
`,FP=()=>{const{t:e}=Ue(),[t,a]=E.useState("monthly"),o=["starter","business","pro"].map(l=>({key:l,recommended:l==="business",name:e(`pricing.packages.${l}.name`),desc:e(`pricing.packages.${l}.desc`),price:e(`pricing.packages.${l}.price`),range:e(`pricing.packages.${l}.range`),core:e(`pricing.packages.${l}.core`,{returnObjects:!0}),plus:e(`pricing.packages.${l}.plus`,{returnObjects:!0}),outcome:e(`pricing.packages.${l}.outcome`),subscriptionPrice:e(`pricing.packages.${l}.subscription.${t}.price`),subscriptionMeta:e(`pricing.packages.${l}.subscription.${t}.meta`),subscriptionItems:e(`pricing.packages.${l}.subscription.includes`,{returnObjects:!0})}));return d.jsx(Cn,{children:d.jsx(pn,{children:d.jsxs(xP,{children:[d.jsxs(yP,{as:ie.section,initial:"hidden",animate:"show",variants:mP,transition:{duration:.64,ease:dn},children:[d.jsxs(vP,{children:[d.jsxs("h1",{children:[e("pricing.hero.titleLine1"),d.jsx("br",{}),e("pricing.hero.titleLine2"),d.jsx("br",{}),d.jsx(wP,{children:e("pricing.hero.titleLine3")})]}),d.jsx("p",{children:e("pricing.hero.subtitle")}),d.jsx(SP,{children:d.jsxs(c3,{to:"/kontakt",children:[d.jsx(Nn,{})," ",e("pricing.hero.cta")]})})]}),d.jsx(TP,{initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.7,delay:.12},children:d.jsxs(kP,{children:[d.jsxs(ch,{children:[d.jsx("strong",{children:e("pricing.hero.metrics.leadVolume")}),d.jsx(uh,{children:d.jsx(dh,{initial:{width:"22%"},animate:{width:["22%","72%","58%","72%"]},transition:{duration:6,delay:.35,repeat:1/0,ease:"easeInOut"}})})]}),d.jsxs(ch,{children:[d.jsx("strong",{children:e("pricing.hero.metrics.qualifiedLeads")}),d.jsx(uh,{children:d.jsx(dh,{initial:{width:"18%"},animate:{width:["18%","61%","49%","61%"]},transition:{duration:5.6,delay:.48,repeat:1/0,ease:"easeInOut"}})})]}),d.jsxs(ch,{children:[d.jsx("strong",{children:e("pricing.hero.metrics.costPerLead")}),d.jsx(uh,{children:d.jsx(dh,{initial:{width:"76%"},animate:{width:["76%","42%","54%","42%"]},transition:{duration:6.2,delay:.62,repeat:1/0,ease:"easeInOut"}})})]}),d.jsxs(jP,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.6,delay:.7},children:[d.jsxs(ko,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut"},children:[d.jsx(Fh,{}),e("pricing.hero.funnel.traffic")]}),d.jsxs(ko,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut",delay:.25},children:[d.jsx(yu,{}),e("pricing.hero.funnel.landing")]}),d.jsxs(ko,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut",delay:.5},children:[d.jsx(vu,{}),e("pricing.hero.funnel.leads")]}),d.jsxs(ko,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut",delay:.75},children:[d.jsx(Wo,{}),e("pricing.hero.funnel.crm")]}),d.jsxs(ko,{animate:{y:[0,-3,0],boxShadow:["0 0 0 rgba(80,150,255,0)","0 0 16px rgba(80,150,255,0.2)","0 0 0 rgba(80,150,255,0)"]},transition:{duration:3.6,repeat:1/0,ease:"easeInOut",delay:1},children:[d.jsx(Gi,{}),e("pricing.hero.funnel.sales")]})]})]})})]}),d.jsxs(EP,{children:[d.jsx("h2",{children:e("pricing.flow.title")}),d.jsx(CP,{children:d.jsxs(AP,{children:[d.jsxs(jo,{whileHover:{y:-3},children:[d.jsx(Fh,{}),e("pricing.flow.steps.traffic")]}),d.jsxs(jo,{whileHover:{y:-3},children:[d.jsx(yu,{}),e("pricing.flow.steps.landing")]}),d.jsxs(jo,{whileHover:{y:-3},children:[d.jsx(vu,{}),e("pricing.flow.steps.capture")]}),d.jsxs(jo,{whileHover:{y:-3},children:[d.jsx(Wo,{}),e("pricing.flow.steps.crm")]}),d.jsxs(jo,{whileHover:{y:-3},children:[d.jsx(Gi,{}),e("pricing.flow.steps.sales")]})]})})]}),d.jsxs(ht,{children:[d.jsx("h2",{children:e("pricing.packages.title")}),d.jsxs(zP,{role:"tablist","aria-label":e("pricing.packages.subscriptionTitle"),children:[d.jsx(dv,{type:"button",$active:t==="monthly",onClick:()=>a("monthly"),children:e("pricing.packages.billing.monthly")}),d.jsx(dv,{type:"button",$active:t==="yearly",onClick:()=>a("yearly"),children:e("pricing.packages.billing.yearly")})]}),d.jsx(MP,{children:o.map(l=>d.jsxs(RP,{$recommended:l.recommended,whileHover:{y:l.recommended?-6:-4},transition:{duration:.25},children:[l.recommended?d.jsx(LP,{children:e("pricing.packages.badge")}):null,d.jsx("h3",{children:l.name}),d.jsx("p",{children:l.desc}),d.jsx(OP,{children:l.price}),d.jsx(DP,{children:l.range}),d.jsx(fh,{children:e("pricing.packages.coreTitle")}),d.jsx(ph,{children:l.core.map(u=>d.jsxs("li",{children:[d.jsx(Ft,{})," ",u]},u))}),d.jsx(fh,{children:e("pricing.packages.plusTitle")}),d.jsx(ph,{children:l.plus.map(u=>d.jsxs("li",{children:[d.jsx(Ft,{})," ",u]},u))}),d.jsxs(VP,{children:[d.jsx(NP,{children:e("pricing.packages.subscriptionTitle")}),d.jsx(BP,{children:l.subscriptionPrice}),d.jsx(_P,{children:l.subscriptionMeta}),d.jsx(fh,{children:e("pricing.packages.subscriptionIncludesTitle")}),d.jsx(ph,{children:l.subscriptionItems.map(u=>d.jsxs("li",{children:[d.jsx(Ft,{})," ",u]},u))})]}),d.jsxs(PP,{children:[d.jsx("strong",{children:e("pricing.packages.outcomeLabel")})," ",l.outcome]})]},l.key))})]}),d.jsxs(ht,{children:[d.jsx("h2",{children:e("pricing.comparison.title")}),d.jsxs($P,{children:[d.jsxs(HP,{children:[d.jsx("span",{children:e("pricing.comparison.headers.feature")}),d.jsx("span",{children:e("pricing.comparison.headers.starter")}),d.jsx("span",{children:e("pricing.comparison.headers.business")}),d.jsx("span",{children:e("pricing.comparison.headers.pro")})]}),d.jsxs(Nr,{children:[d.jsx("span",{children:e("pricing.comparison.rows.landing")}),d.jsxs(Rn,{children:[d.jsx(Ft,{})," ",e("pricing.comparison.yes")]}),d.jsxs(Rn,{children:[d.jsx(Ft,{})," ",e("pricing.comparison.yes")]}),d.jsxs(Rn,{children:[d.jsx(Ft,{})," ",e("pricing.comparison.yes")]})]}),d.jsxs(Nr,{children:[d.jsx("span",{children:e("pricing.comparison.rows.multi")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsxs(Rn,{children:[d.jsx(Ft,{})," ",e("pricing.comparison.yes")]}),d.jsxs(Rn,{children:[d.jsx(Ft,{})," ",e("pricing.comparison.yes")]})]}),d.jsxs(Nr,{children:[d.jsx("span",{children:e("pricing.comparison.rows.crm")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsxs(Rn,{children:[d.jsx(Ft,{})," ",e("pricing.comparison.yes")]}),d.jsxs(Rn,{children:[d.jsx(Ft,{})," ",e("pricing.comparison.yes")]})]}),d.jsxs(Nr,{children:[d.jsx("span",{children:e("pricing.comparison.rows.ai")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsxs(Rn,{children:[d.jsx(Ft,{})," ",e("pricing.comparison.yes")]})]}),d.jsxs(Nr,{children:[d.jsx("span",{children:e("pricing.comparison.rows.ads")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsxs(Rn,{children:[d.jsx(Ft,{})," ",e("pricing.comparison.yes")]})]}),d.jsxs(Nr,{children:[d.jsx("span",{children:e("pricing.comparison.rows.dashboard")}),d.jsx("span",{children:e("pricing.comparison.no")}),d.jsxs(Rn,{children:[d.jsx(Ft,{})," ",e("pricing.comparison.yes")]}),d.jsxs(Rn,{children:[d.jsx(Ft,{})," ",e("pricing.comparison.yes")]})]})]})]}),d.jsxs(ht,{children:[d.jsx("h2",{children:e("pricing.trust.title")}),d.jsxs(GP,{children:[d.jsxs(hh,{children:[d.jsx(q4,{}),d.jsx("strong",{children:e("pricing.trust.delivery.title")}),d.jsx("p",{children:e("pricing.trust.delivery.desc")})]}),d.jsxs(hh,{children:[d.jsx(nA,{}),d.jsx("strong",{children:e("pricing.trust.support.title")}),d.jsx("p",{children:e("pricing.trust.support.desc")})]}),d.jsxs(hh,{children:[d.jsx(JC,{}),d.jsx("strong",{children:e("pricing.trust.dsgvo.title")}),d.jsx("p",{children:e("pricing.trust.dsgvo.desc")})]})]})]}),d.jsxs(UP,{children:[d.jsx("h2",{children:e("pricing.final.title")}),d.jsx("p",{children:e("pricing.final.subtitle")}),d.jsxs(IP,{to:"/kontakt",children:[d.jsx(Nn,{})," ",e("pricing.final.cta")]})]})]})})})},fv="/assets/photo_2025-09-16_22-58-01-CZJ1euxS.jpg",pv="/assets/photo_2025-09-16_22-58-14-BefjFQXO.jpg",qP=L.div`
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

`,KP={hidden:{opacity:0,y:20},show:{opacity:1,y:0}},YP=[{niche:"handwerk",labelKey:"references.niches.handwerk",metricLabelKey:"references.metrics.moreRequests",metricValue:"+41%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[16,18,22,24,27,31,34]},{niche:"praxen",labelKey:"references.niches.praxen",metricLabelKey:"references.metrics.moreAppointments",metricValue:"+33%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[14,15,19,23,25,27,30]},{niche:"werkstatt",labelKey:"references.niches.werkstatt",metricLabelKey:"references.metrics.moreCalls",metricValue:"+46%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[11,14,17,22,26,31,36]},{niche:"gastronomie",labelKey:"references.niches.gastronomie",metricLabelKey:"references.metrics.moreReservations",metricValue:"+27%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[16,16,19,21,22,24,27]},{niche:"beauty",labelKey:"references.niches.beauty",metricLabelKey:"references.metrics.moreBookings",metricValue:"+31%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[13,16,18,21,23,25,29]},{niche:"immobilien",labelKey:"references.niches.immobilien",metricLabelKey:"references.metrics.moreLeads",metricValue:"+22%",timeframe:"30-90",source:"GA4 / Search Console",sparkline:[9,11,12,14,16,17,19]},{niche:"kanzlei",labelKey:"references.niches.kanzlei",metricLabelKey:"references.metrics.moreIntroCalls",metricValue:"+24%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[11,12,14,15,17,18,20]},{niche:"fitnessPhysio",labelKey:"references.niches.fitnessPhysio",metricLabelKey:"references.metrics.moreTrialSessions",metricValue:"+29%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[10,13,15,18,20,22,25]},{niche:"reinigung",labelKey:"references.niches.reinigung",metricLabelKey:"references.metrics.moreOffers",metricValue:"+35%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[12,14,17,20,22,25,28]},{niche:"umzugTransport",labelKey:"references.niches.umzugTransport",metricLabelKey:"references.metrics.moreQualifiedLeads",metricValue:"+26%",timeframe:"30-90",source:"GA4 / Google Ads",sparkline:[11,13,14,17,18,20,23]},{niche:"coachingBeratung",labelKey:"references.niches.coachingBeratung",metricLabelKey:"references.metrics.moreFirstContacts",metricValue:"+28%",timeframe:"30-90",source:"GA4 / Meta Ads",sparkline:[10,12,14,16,18,20,22]},{niche:"bildungKurse",labelKey:"references.niches.bildungKurse",metricLabelKey:"references.metrics.moreCourseSignups",metricValue:"+32%",timeframe:"30-90",source:"GA4 / Search Console / Ads",sparkline:[8,10,13,15,17,20,23]}],hv=[{id:"c1",titleKey:"references.cases.c1.title",category:"handwerk",challengeKey:"references.cases.c1.challenge",solutionKey:"references.cases.c1.solution",metrics:[{metricLabelKey:"references.metrics.moreRequests",metricValue:"+41%"},{metricLabelKey:"references.metrics.budgetEfficiency",metricValue:"+33%"}],timeframe:"30-90",source:"GA4 / Google Ads",beforeImage:sm,afterImage:fv},{id:"c2",titleKey:"references.cases.c2.title",category:"praxen",challengeKey:"references.cases.c2.challenge",solutionKey:"references.cases.c2.solution",metrics:[{metricLabelKey:"references.metrics.moreAppointments",metricValue:"+33%"},{metricLabelKey:"references.metrics.moreInteractions",metricValue:"+46%"}],timeframe:"30-90",source:"GA4 / Meta Ads",beforeImage:cm,afterImage:lm},{id:"c3",titleKey:"references.cases.c3.title",category:"werkstatt",challengeKey:"references.cases.c3.challenge",solutionKey:"references.cases.c3.solution",metrics:[{metricLabelKey:"references.metrics.moreQualifiedLeads",metricValue:"+32%"},{metricLabelKey:"references.metrics.moreLeadsPerBudget",metricValue:"+31%"}],timeframe:"30-90",source:"GA4 / Google Ads",beforeImage:pv,afterImage:om},{id:"c4",titleKey:"references.cases.c4.title",category:"gastronomie",challengeKey:"references.cases.c4.challenge",solutionKey:"references.cases.c4.solution",metrics:[{metricLabelKey:"references.metrics.moreReservations",metricValue:"+27%"},{metricLabelKey:"references.metrics.moreCalls",metricValue:"+21%"}],timeframe:"30-90",source:"GA4 / Meta Ads",beforeImage:cm,afterImage:fv},{id:"c5",titleKey:"references.cases.c5.title",category:"immobilien",challengeKey:"references.cases.c5.challenge",solutionKey:"references.cases.c5.solution",metrics:[{metricLabelKey:"references.metrics.moreLeads",metricValue:"+22%"},{metricLabelKey:"references.metrics.moreIntroCalls",metricValue:"+19%"}],timeframe:"30-90",source:"GA4 / Search Console / Ads",beforeImage:sm,afterImage:om},{id:"c6",titleKey:"references.cases.c6.title",category:"kanzlei",challengeKey:"references.cases.c6.challenge",solutionKey:"references.cases.c6.solution",metrics:[{metricLabelKey:"references.metrics.moreFirstContacts",metricValue:"+24%"},{metricLabelKey:"references.metrics.moreConsultations",metricValue:"+18%"}],timeframe:"30-90",source:"GA4 / Google Ads",beforeImage:pv,afterImage:lm}],XP=[{label:"references.filterGroups.all",items:["all"]},{label:"references.filterGroups.localServices",items:["handwerk","werkstatt","reinigung","umzugTransport"]},{label:"references.filterGroups.healthBeauty",items:["praxen","fitnessPhysio","beauty"]},{label:"references.filterGroups.professional",items:["immobilien","kanzlei","coachingBeratung","bildungKurse","gastronomie"]}],WP=[{value:"+41%",label:"references.kpis.leads"},{value:"+27%",label:"references.kpis.conversion"},{value:"+32%",label:"references.kpis.traffic"}],mh={traffic:"-12%",leads:"-18%",conversion:"-9%"},gh={traffic:"+32%",leads:"+41%",conversion:"+27%"},QP=[0,15,30,45,60,75,90],mv=[11,10,10,9,10,9,10],gv=[8,14,21,29,38,48,58],tl=(e,t,a)=>Math.max(t,Math.min(a,e)),u3="M 0 99 C 30 72, 70 30, 100 1",d3="M 0 39 C 35 30, 68 14, 100 1",bv=[98,94,89,83,77,70,62,54,46,38,29,21,12,3],Ou=e=>{if(e.length<2)return u3;const t=.1;let a=`M ${e[0].x.toFixed(2)} ${e[0].y.toFixed(2)}`;for(let i=0;i<e.length-1;i+=1){const o=e[i-1]??e[i],l=e[i],u=e[i+1],f=e[i+2]??u,p=l.x+(u.x-o.x)*t/6,m=l.y+(u.y-o.y)*t/6,g=u.x-(f.x-l.x)*t/6,x=u.y-(f.y-l.y)*t/6;a+=` C ${p.toFixed(2)} ${m.toFixed(2)}, ${g.toFixed(2)} ${x.toFixed(2)}, ${u.x.toFixed(2)} ${u.y.toFixed(2)}`}return a},ZP=e=>{const i=bv.map((o,l)=>{const u=0+100*l/(bv.length-1),f=Math.sin(e*1.1+l*1.05)*6.8,p=Math.sin(e*.72+l*.46)*3.4,m=Math.sin(e*1.8+l*1.7)*1.6,g=tl(o+f+p+m,1,99);return{x:u,y:g}});return Ou(i)},JP=(e,t)=>{if(!e||e.length<2)return d3;const a=Math.min(...e),i=Math.max(...e),o=Math.max(1,i-a),l=e.map((u,f)=>{const p=f/(e.length-1)*100,g=39-(u-a)/o*38,x=Math.sin(t*1.15+f*1.2)*3.6,y=Math.sin(t*.74+f*.52)*2,v=Math.sin(t*1.9+f*1.65)*.9,S=tl(g+x+y+v,1,39);return{x:p,y:S}});return Ou(l)},xv=e=>e.map((a,i)=>{const o=i/(e.length-1)*100,l=tl(56-a/60*52,2,58);return{x:o,y:l,value:a}}),yv=(e,t)=>{if(t===0)return"*";const a=e[t]-e[t-1];return a>0?`+${a}`:a<0?`${a}`:"0"},eV=()=>{const{t:e}=Ue(),[t,a]=E.useState("all"),[i,o]=E.useState(0),l=E.useMemo(()=>hv.filter(v=>t==="all"||v.category===t),[t]),u=E.useMemo(()=>YP.filter(v=>t==="all"||v.niche===t),[t]),f=l[0]??hv[0],p=E.useMemo(()=>ZP(i)||u3,[i]),m=E.useMemo(()=>xv(mv),[]),g=E.useMemo(()=>xv(gv),[]),x=E.useMemo(()=>Ou(m),[m]),y=E.useMemo(()=>Ou(g),[g]);return E.useEffect(()=>{const v=window.setInterval(()=>{o(S=>(S+.12)%(Math.PI*8))},70);return()=>window.clearInterval(v)},[]),d.jsx(qP,{children:d.jsx(Cn,{className:"references-page",children:d.jsxs(pn,{children:[d.jsx(sa,{className:"references-hero",as:ie.section,initial:"hidden",animate:"show",variants:KP,transition:{duration:.62,ease:dn},children:d.jsxs("div",{className:"references-hero-grid",children:[d.jsxs("div",{className:"references-hero-copy",children:[d.jsx("h1",{children:d.jsx(Ii,{text:e("references.h1"),durationMs:2800,storageKey:"refs_h1_new_once"})}),d.jsx("p",{children:e("references.subtitle")}),d.jsx(Fe,{children:e("references.trustline")})]}),d.jsxs(Ge,{className:"references-hero-dashboard",as:ie.div,whileHover:{y:-4},animate:{boxShadow:["0 0 0 1px rgba(125, 210, 255, 0.2) inset, 0 24px 50px rgba(2, 8, 20, 0.52)","0 0 0 1px rgba(141, 218, 255, 0.32) inset, 0 30px 62px rgba(3, 12, 28, 0.62)","0 0 0 1px rgba(125, 210, 255, 0.2) inset, 0 24px 50px rgba(2, 8, 20, 0.52)"],borderColor:["rgba(124, 193, 255, 0.32)","rgba(124, 220, 255, 0.58)","rgba(124, 193, 255, 0.32)"]},transition:{duration:5.2,repeat:1/0,ease:"easeInOut"},children:[d.jsx("p",{className:"references-dashboard-label",children:e("references.performanceDashboard")}),d.jsx("div",{className:"references-kpi-row",children:WP.map((v,S)=>d.jsxs(ie.div,{className:"references-kpi-item",animate:{y:[0,-6,0],opacity:[.86,1,.86]},transition:{duration:3.4,delay:S*.45,repeat:1/0,ease:"easeInOut"},children:[d.jsx("span",{className:"references-kpi-value",children:v.value}),d.jsx("span",{className:"references-kpi-label",children:e(v.label)})]},v.label))}),d.jsxs("div",{className:"references-growth-chart-wrap",children:[d.jsx("p",{className:"references-chart-label",children:e("references.growthCurve90")}),d.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"none",className:"references-growth-chart",role:"img","aria-label":e("references.growthChartAria"),children:[d.jsx("defs",{children:d.jsxs("linearGradient",{id:"refsGrowth",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[d.jsx("stop",{offset:"0%",stopColor:"#00c2ff"}),d.jsx("stop",{offset:"100%",stopColor:"#56f5a0"})]})}),d.jsx("path",{d:p})]})]})]})]})}),d.jsxs(ht,{className:"references-filter-wrap",children:[d.jsxs("h2",{className:"references-title",children:[d.jsx(KC,{})," ",e("references.filterTitle")]}),d.jsx(Fe,{children:e("references.counter",{count:l.length})}),d.jsx("div",{className:"references-filter-groups",role:"tablist","aria-label":e("references.filterAria"),children:XP.map(v=>d.jsxs("div",{className:"references-filter-group",children:[d.jsx("p",{className:"references-filter-group-label",children:e(v.label)}),d.jsx("div",{className:"references-filters",children:v.items.map(S=>d.jsx("button",{type:"button",className:`references-filter-chip ${t===S?"active":""}`,onClick:()=>a(S),role:"tab","aria-selected":t===S,children:e(S==="all"?"references.filters.all":`references.niches.${S}`)},S))})]},v.label))})]}),d.jsxs(ht,{className:"references-metric-band",children:[d.jsxs("h2",{className:"references-title",children:[d.jsx(Gi,{})," ",e("references.growthByNiche")]}),d.jsx(lu,{className:"grid-3",children:u.map((v,S)=>d.jsxs(Ge,{className:"references-metric-card",as:ie.article,animate:{y:[0,-5,0],borderColor:["rgba(111, 178, 255, 0.18)","rgba(116, 210, 255, 0.48)","rgba(111, 178, 255, 0.18)"],boxShadow:["0 10px 24px rgba(0, 0, 0, 0.2)","0 16px 34px rgba(8, 31, 61, 0.36)","0 10px 24px rgba(0, 0, 0, 0.2)"]},transition:{duration:4.2,delay:S*.18,repeat:1/0,ease:"easeInOut"},children:[d.jsxs("div",{className:"references-metric-head",children:[d.jsx("h3",{children:e(v.labelKey)}),d.jsxs("span",{className:"references-kpi-badge",children:[d.jsx($C,{})," ",v.metricValue]})]}),d.jsx("p",{className:"references-metric-line",children:e(v.metricLabelKey)}),d.jsx("svg",{viewBox:"0 0 100 40",preserveAspectRatio:"none",className:"references-sparkline",role:"img","aria-label":e("references.trendAria",{niche:e(v.labelKey)}),children:d.jsx("path",{d:JP(v.sparkline,i+S*.9)||d3})}),d.jsxs(Fe,{children:[d.jsx(dy,{})," ",e("references.periodLabel"),": ",v.timeframe," ",e("references.daysUnit")]}),d.jsxs(Fe,{children:[d.jsx(Wo,{})," ",e("references.measurementLabel"),": ",v.source]})]},v.labelKey))})]}),d.jsxs(ht,{className:"references-cases",children:[d.jsx("h2",{className:"references-title",children:e("references.selectedCases")}),l.length===0?d.jsxs(Ge,{children:[d.jsx("h3",{children:e("references.emptyTitle")}),d.jsx(Fe,{children:e("references.emptyText")})]}):d.jsx(vg,{children:l.map(v=>d.jsxs(Ge,{className:"references-case-card",children:[d.jsx("h3",{children:e(v.titleKey)}),d.jsxs("div",{className:"references-case-block",children:[d.jsx("p",{className:"references-case-label",children:e("references.challengeLabel")}),d.jsx("p",{children:e(v.challengeKey)})]}),d.jsxs("div",{className:"references-case-block",children:[d.jsx("p",{className:"references-case-label",children:e("references.solutionLabel")}),d.jsx("p",{children:e(v.solutionKey)})]}),d.jsxs("div",{className:"references-case-result",children:[d.jsx("p",{className:"references-case-label",children:e("references.resultLabel")}),v.metrics.map(S=>d.jsxs("p",{children:[e(S.metricLabelKey),": ",d.jsx("span",{children:S.metricValue})]},`${v.id}-${S.metricLabelKey}`))]}),d.jsxs(Fe,{children:[d.jsx(dy,{})," ",e("references.periodLabel"),": ",v.timeframe," ",e("references.daysUnit")]}),d.jsxs(Fe,{children:[d.jsx(Wo,{})," ",e("references.measurementLabel"),": ",v.source]})]},v.id))})]}),d.jsxs(ht,{children:[d.jsx("h2",{className:"references-title",children:e("references.beforeAfter")}),d.jsxs("div",{className:"references-compare-shell",children:[d.jsxs("div",{className:"references-compare-chart",children:[d.jsxs("svg",{viewBox:"0 0 100 60",preserveAspectRatio:"none",className:"references-compare-graph",role:"img","aria-label":e("references.compareGraphAria"),children:[[0,16.66,33.33,50,66.66,83.33,100].map(v=>d.jsx("line",{x1:v,y1:"0",x2:v,y2:"60",className:"grid-line"},`vx-${v}`)),[8,16,24,32,40,48,56].map(v=>d.jsx("line",{x1:"0",y1:v,x2:"100",y2:v,className:"grid-line"},`hy-${v}`)),d.jsx("line",{x1:"0",y1:"58",x2:"100",y2:"58",className:"axis-line"}),d.jsx("path",{className:"before-line",d:x}),d.jsx("path",{className:"after-line",d:y}),m.map((v,S)=>d.jsxs("g",{children:[d.jsx("circle",{className:"before-point",cx:v.x,cy:v.y,r:"1.2"}),d.jsx("text",{className:"point-delta before",x:v.x,y:tl(v.y+4.4,4,59),children:yv(mv,S)})]},`before-point-${S}`)),g.map((v,S)=>d.jsxs("g",{children:[d.jsx("circle",{className:"after-point",cx:v.x,cy:v.y,r:"1.4"}),d.jsx("text",{className:"point-delta after",x:v.x,y:tl(v.y-2.2,1.5,58),children:yv(gv,S)})]},`after-point-${S}`))]}),d.jsx("div",{className:"references-compare-days",children:QP.map(v=>d.jsx("span",{children:e("references.dayLabel",{day:v})},v))}),d.jsxs("div",{className:"references-compare-legend",children:[d.jsxs("span",{children:[d.jsx("i",{className:"dot before"})," ",e("references.beforeLegend")]}),d.jsxs("span",{children:[d.jsx("i",{className:"dot after"})," ",e("references.afterLegend")]})]})]}),d.jsxs("div",{className:"references-compare-kpis",children:[d.jsxs("div",{className:"kpi-panel before",children:[d.jsx("h3",{children:e("references.before")}),d.jsxs("p",{children:[e("references.kpis.traffic")," ",d.jsx("span",{children:mh.traffic})]}),d.jsxs("p",{children:[e("references.kpis.leads")," ",d.jsx("span",{children:mh.leads})]}),d.jsxs("p",{children:[e("references.kpis.conversion")," ",d.jsx("span",{children:mh.conversion})]})]}),d.jsxs("div",{className:"kpi-panel after",children:[d.jsx("h3",{children:e("references.after")}),d.jsxs("p",{children:[e("references.kpis.traffic")," ",d.jsx("span",{children:gh.traffic})]}),d.jsxs("p",{children:[e("references.kpis.leads")," ",d.jsx("span",{children:gh.leads})]}),d.jsxs("p",{children:[e("references.kpis.conversion")," ",d.jsx("span",{children:gh.conversion})]})]})]})]}),d.jsxs(Fe,{children:[e("references.periodLabel"),": ",f.timeframe," ",e("references.daysUnit")," · ",e("references.measurementLabel"),": ",f.source]})]}),d.jsxs(wg,{children:[d.jsx("h2",{children:e("references.ctaTitle")}),d.jsx(Fe,{children:e("references.ctaText")}),d.jsx(li,{children:d.jsxs(ci,{to:"/kontakt",children:[d.jsx(Nn,{})," ",e("references.cta")]})})]})]})})})},tV="/assets/vladyslav-founder-C6kYUNTx.jpg",nV=qe`
  0% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(8px, -8px, 0); }
  100% { transform: translate3d(0, 0, 0); }
`,aV=qe`
  0% { background-position: -120px 0; opacity: 0.45; }
  50% { background-position: 0 0; opacity: 0.95; }
  100% { background-position: 120px 0; opacity: 0.45; }
`,iV=L.div`
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
    animation: ${nV} 12s ease-in-out infinite;
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
    animation: ${aV} 2.2s linear infinite;
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

`,rV=()=>{const{t:e}=Ue(),[t,a]=E.useState(0);E.useEffect(()=>{let v=0;const S=performance.now(),k=A=>{a((A-S)/1e3),v=window.requestAnimationFrame(k)};return v=window.requestAnimationFrame(k),()=>window.cancelAnimationFrame(v)},[]);const i=Math.sin(t*1.2)*-10,o=Math.sin(t*1.2+.8)*-12,l=Math.sin(t*1.2+1.6)*-9,u=t*40%64,f=(t*40+18)%64,p=.9+(Math.sin(t*2.4)+1)/2*.1,m=.88+(Math.sin(t*2.4+.6)+1)/2*.12,g=.84+(Math.sin(t*2.4+1.2)+1)/2*.14,x=1+(Math.sin(t*2.8)+1)/2*.05,y=Math.sin(t*1.1)*6;return d.jsxs("div",{className:"about-hero-visual","aria-hidden":"true",children:[d.jsxs("div",{className:"about-hero-bgLayer",children:[d.jsx("div",{className:"about-hero-radial"}),d.jsx("div",{className:"about-hero-grid"})]}),d.jsx("div",{className:"about-hero-contentLayer",children:d.jsxs("div",{className:"about-hero-dashboard-shell",children:[d.jsxs("div",{className:"about-hero-dashboard-head",children:[d.jsx("div",{className:"about-hero-product-badge",children:e("aboutPage.visual.productBadge",{defaultValue:"Lead System"})}),d.jsxs("div",{className:"about-hero-shell-metric",children:[d.jsx("span",{className:"about-hero-shell-label",children:e("aboutPage.visual.flowLabel",{defaultValue:"Flow"})}),d.jsx("span",{className:"about-hero-shell-value",children:e("aboutPage.visual.flowValue",{defaultValue:"Before zu System zu Result"})})]})]}),d.jsxs("div",{className:"about-hero-storyboard",children:[d.jsxs("article",{className:"about-hero-story-card about-hero-story-card-before",style:{transform:`translateY(${i}px)`},children:[d.jsx("p",{className:"about-hero-stage-eyebrow",children:e("aboutPage.visual.before.label",{defaultValue:"Before"})}),d.jsx("p",{className:"about-hero-metric-title",children:e("aboutPage.visual.before.title",{defaultValue:"Viele Klicks, wenig Klarheit"})}),d.jsxs("ul",{className:"about-hero-story-list",children:[d.jsx("li",{children:e("aboutPage.visual.before.i1",{defaultValue:"Langsame Seiten"})}),d.jsx("li",{children:e("aboutPage.visual.before.i2",{defaultValue:"Unklare Kontaktwege"})}),d.jsx("li",{children:e("aboutPage.visual.before.i3",{defaultValue:"Keine sauberen Daten"})})]})]}),d.jsxs("div",{className:"about-hero-story-connector",children:[d.jsx("div",{className:"about-hero-pipeline-line"}),d.jsx("span",{className:"about-hero-pipeline-pulse",style:{transform:`translate(${u}px, -50%) scale(1.15)`}})]}),d.jsxs("article",{className:"about-hero-story-card about-hero-story-card-system",style:{transform:`translateY(${o}px)`},children:[d.jsx("p",{className:"about-hero-stage-eyebrow",children:e("aboutPage.visual.system.label",{defaultValue:"System"})}),d.jsxs("div",{className:"about-hero-phone-preview",children:[d.jsx("div",{className:"about-hero-phone-notch"}),d.jsxs("div",{className:"about-hero-phone-screen",children:[d.jsx("div",{className:"about-hero-phone-badge",children:e("aboutPage.visual.system.phoneBadge",{defaultValue:"Website"})}),d.jsx("div",{className:"about-hero-phone-line about-hero-phone-line-strong",style:{transform:`scaleX(${p})`,opacity:.7+(p-.9)*2.2}}),d.jsx("div",{className:"about-hero-phone-line",style:{transform:`scaleX(${m})`,opacity:.56+(m-.88)*2.1}}),d.jsx("div",{className:"about-hero-phone-line",style:{transform:`scaleX(${g})`,opacity:.52+(g-.84)*1.9}}),d.jsx("div",{className:"about-hero-phone-cta",style:{transform:`scale(${x})`,opacity:.88+(x-1)*2},children:e("aboutPage.visual.system.cta",{defaultValue:"Termin anfragen"})})]})]}),d.jsxs("div",{className:"about-hero-system-pills",children:[d.jsx("span",{children:e("aboutPage.visual.system.pill1",{defaultValue:"Website"})}),d.jsx("span",{children:e("aboutPage.visual.system.pill2",{defaultValue:"Kontaktwege"})}),d.jsx("span",{children:e("aboutPage.visual.system.pill3",{defaultValue:"Tracking"})})]})]}),d.jsxs("div",{className:"about-hero-story-connector",children:[d.jsx("div",{className:"about-hero-pipeline-line"}),d.jsx("span",{className:"about-hero-pipeline-pulse",style:{transform:`translate(${f}px, -50%) scale(1.15)`}})]}),d.jsxs("article",{className:"about-hero-story-card about-hero-story-card-result",style:{transform:`translateY(${l}px)`},children:[d.jsx("p",{className:"about-hero-stage-eyebrow",children:e("aboutPage.visual.result.label",{defaultValue:"Result"})}),d.jsx("p",{className:"about-hero-result-metric",children:"+12"}),d.jsx("p",{className:"about-hero-metric-title",children:e("aboutPage.visual.result.title",{defaultValue:"Qualifizierte Anfragen"})}),d.jsx("p",{className:"about-hero-metric-text",children:e("aboutPage.visual.result.text",{defaultValue:"Messbar, schneller beantwortbar und klar im Funnel sichtbar."})})]})]}),d.jsxs("div",{className:"about-hero-metric-anchor",style:{transform:`translateX(${y}px)`},children:[d.jsx("span",{className:"about-hero-anchor-label",children:e("aboutPage.visual.anchor.label",{defaultValue:"Ergebnis"})}),d.jsx("span",{className:"about-hero-anchor-value",children:e("aboutPage.visual.anchor.value",{defaultValue:"Mehr qualifizierte Anfragen statt nur Website-Traffic"})})]})]})})]})},sV=()=>{const{t:e}=Ue();return d.jsx(iV,{children:d.jsx(Cn,{children:d.jsxs(pn,{children:[d.jsxs(sa,{className:"about-hero",children:[d.jsxs("div",{className:"about-hero-copy",children:[d.jsx("p",{className:"about-hero-eyebrow",children:e("aboutPage.heroEyebrow",{defaultValue:"VS Studio | Hildesheim | Niedersachsen | Deutschland"})}),d.jsxs("h1",{children:[d.jsx("span",{className:"about-hero-title-line",children:e("aboutPage.heroTitleLine1",{defaultValue:"Websites und"})}),d.jsx("span",{className:"about-hero-title-line",children:d.jsx("span",{className:"about-hero-title-highlight",children:e("aboutPage.heroTitleLine2",{defaultValue:"Lead-Systeme"})})}),d.jsx("span",{className:"about-hero-title-line",children:e("aboutPage.heroTitleLine3",{defaultValue:"fuer lokale Unternehmen"})}),d.jsx("span",{className:"about-hero-title-line",children:e("aboutPage.heroTitleLine4",{defaultValue:"in Hildesheim"})})]}),d.jsx("p",{className:"about-hero-subtitle",children:e("aboutPage.heroSubtitle",{defaultValue:"Mehr qualifizierte Anfragen durch schnelle Websites, klare Kontaktwege und messbares Marketing."})}),d.jsx("p",{className:"about-trustline",children:e("aboutPage.heroTrustline",{defaultValue:"Lokal in Hildesheim. Strategisch in Niedersachsen. Umsetzbar in ganz Deutschland."})}),d.jsx(li,{className:"about-hero-actions",children:d.jsxs(ci,{to:"/kontakt",children:[d.jsx(Nn,{})," ",e("aboutPage.primaryCta",{defaultValue:"Kostenlose Website-Analyse"})]})})]}),d.jsx(rV,{})]}),d.jsxs(ht,{children:[d.jsx("h2",{children:e("aboutPage.section.about",{defaultValue:"About"})}),d.jsxs(vg,{children:[d.jsxs(Ge,{children:[d.jsx("h3",{children:e("aboutPage.blocks.who.title",{defaultValue:"Fuer lokale Unternehmen"})}),d.jsx(Fe,{children:e("aboutPage.blocks.who.text",{defaultValue:"Websites, Lead-Systeme und Marketing fuer Betriebe, die planbar mehr Anfragen wollen."})})]}),d.jsxs(Ge,{children:[d.jsx("h3",{children:e("aboutPage.blocks.focus.title",{defaultValue:"Ein System statt Einzelloesungen"})}),d.jsx(Fe,{children:e("aboutPage.blocks.focus.text",{defaultValue:"Website, Kontaktwege, Kampagnen und Tracking greifen als ein klarer Prozess zusammen."})})]})]})]}),d.jsxs(ht,{children:[d.jsx("h2",{children:e("aboutPage.section.localAdvantages",{defaultValue:"Lokale Vorteile"})}),d.jsxs("div",{className:"about-main-grid",children:[d.jsxs(Ge,{className:"about-photo-card",children:[d.jsx("img",{className:"about-photo-image",src:tV,alt:e("aboutPage.photoAlt",{defaultValue:"Vladyslav, Gruender von VS Web Studio aus Hildesheim"})}),d.jsx("p",{className:"about-photo-caption",children:e("aboutPage.photoCaption",{defaultValue:"Vladyslav - Gruender von VS Web Studio"})}),d.jsxs(_o,{className:"about-photo-facts",children:[d.jsxs("li",{children:[d.jsx(Tt,{})," ",e("aboutPage.photoFacts.f1",{defaultValue:"Fokus: lokale Unternehmen"})]}),d.jsxs("li",{children:[d.jsx(Tt,{})," ",e("aboutPage.photoFacts.f2",{defaultValue:"Standort: Hildesheim"})]}),d.jsxs("li",{children:[d.jsx(Tt,{})," ",e("aboutPage.photoFacts.f3",{defaultValue:"Projekte: deutschlandweit"})]})]}),d.jsxs("div",{className:"about-geo-badges",children:[d.jsxs("span",{className:"about-geo-badge",children:[d.jsx(Po,{})," ",e("aboutPage.geo.local",{defaultValue:"Hildesheim"})]}),d.jsxs("span",{className:"about-geo-badge",children:[d.jsx(Po,{})," ",e("aboutPage.geo.region",{defaultValue:"Niedersachsen"})]}),d.jsxs("span",{className:"about-geo-badge",children:[d.jsx(Po,{})," ",e("aboutPage.geo.country",{defaultValue:"Deutschlandweit"})]})]})]}),d.jsxs(Ge,{className:"about-text-card",children:[d.jsx("h3",{children:e("aboutPage.blocks.locality.title",{defaultValue:"Lokale Naehe als Vorteil"})}),d.jsx("p",{className:"about-local-subtitle",children:e("aboutPage.blocks.locality.subtitle",{defaultValue:"Schnelle Abstimmung, klare Prioritaeten und messbare Ergebnisse."})}),d.jsx(Fe,{className:"about-local-copy",children:e("aboutPage.blocks.locality.text1",{defaultValue:"Wir arbeiten direkt mit lokalen Unternehmen zusammen - ohne lange Agenturketten und unnoetige Buerokratie."})}),d.jsxs(_o,{className:"about-local-list",children:[d.jsxs("li",{children:[d.jsx(Tt,{})," ",e("aboutPage.blocks.locality.i1",{defaultValue:"Direkte Kommunikation ohne Umwege"})]}),d.jsxs("li",{children:[d.jsx(Tt,{})," ",e("aboutPage.blocks.locality.i2",{defaultValue:"Schnelle Umsetzung statt langer Abstimmungen"})]}),d.jsxs("li",{children:[d.jsx(Tt,{})," ",e("aboutPage.blocks.locality.i3",{defaultValue:"Verstaendnis fuer lokale Maerkte und Budgets"})]})]}),d.jsx(Fe,{className:"about-local-copy",children:e("aboutPage.blocks.locality.text2",{defaultValue:"Unsere Kunden profitieren davon, dass Entscheidungen schneller getroffen werden und Projekte nicht wochenlang in Abstimmungsschleifen haengen bleiben."})}),d.jsx(Fe,{className:"about-local-copy",children:e("aboutPage.blocks.locality.text3",{defaultValue:"Das spart Zeit, reduziert Kosten und sorgt dafuer, dass Marketingmassnahmen schneller Ergebnisse liefern."})}),d.jsx(Fe,{className:"about-local-copy",children:e("aboutPage.blocks.locality.text4",{defaultValue:"Wir kennen die Realitaet kleiner und mittelstaendischer Unternehmen: begrenzte Budgets, wenig Zeit und den Wunsch nach klaren Resultaten statt komplizierten Konzepten."})}),d.jsx(Fe,{className:"about-local-copy",children:e("aboutPage.blocks.locality.text5",{defaultValue:"Deshalb arbeiten wir pragmatisch und strukturiert - von der ersten Analyse ueber die Umsetzung bis zur kontinuierlichen Optimierung."})}),d.jsx("p",{className:"about-local-priority",children:e("aboutPage.localPriority",{defaultValue:"Kurze Wege. Klare Prioritaeten. Fokus auf Ergebnisse."})})]})]})]}),d.jsxs(ht,{children:[d.jsx("h2",{children:e("aboutPage.section.how",{defaultValue:"How we work"})}),d.jsxs(lu,{className:"about-work-grid",children:[d.jsxs(Ge,{className:"about-step-card",children:[d.jsxs("h3",{children:[d.jsx(qt,{children:d.jsx(yu,{})}),e("aboutPage.how.s1.title",{defaultValue:"1. Verstehen"})]}),d.jsx(Fe,{children:e("aboutPage.how.s1.text",{defaultValue:"Zielgruppe, Angebot und Markt analysieren."})})]}),d.jsxs(Ge,{className:"about-step-card",children:[d.jsxs("h3",{children:[d.jsx(qt,{children:d.jsx(vu,{})}),e("aboutPage.how.s2.title",{defaultValue:"2. Umsetzen"})]}),d.jsx(Fe,{children:e("aboutPage.how.s2.text",{defaultValue:"Website, Lead-System und Kampagnen starten."})})]}),d.jsxs(Ge,{className:"about-step-card",children:[d.jsxs("h3",{children:[d.jsx(qt,{children:d.jsx(Gi,{})}),e("aboutPage.how.s3.title",{defaultValue:"3. Optimieren"})]}),d.jsx(Fe,{children:e("aboutPage.how.s3.text",{defaultValue:"Daten analysieren und Ergebnisse verbessern."})})]})]})]}),d.jsxs(ht,{children:[d.jsx("h2",{children:e("aboutPage.section.value",{defaultValue:"Value"})}),d.jsxs(lu,{className:"about-value-grid",children:[d.jsxs(Ge,{className:"about-value-card",children:[d.jsxs("h3",{children:[d.jsx(qt,{children:d.jsx(vu,{})}),e("aboutPage.cards.work.title",{defaultValue:"Klare Prozesse"})]}),d.jsx(Fe,{children:e("aboutPage.cards.work.desc",{defaultValue:"Kurze Wege. Klare Verantwortung."})})]}),d.jsxs(Ge,{className:"about-value-card",children:[d.jsxs("h3",{children:[d.jsx(qt,{children:d.jsx(Zr,{})}),e("aboutPage.cards.ai.title",{defaultValue:"AI First"})]}),d.jsx(Fe,{children:e("aboutPage.cards.ai.desc",{defaultValue:"Automatisierung dort, wo sie Zeit spart."})})]}),d.jsxs(Ge,{className:"about-value-card",children:[d.jsxs("h3",{children:[d.jsx(qt,{children:d.jsx(cl,{})}),e("aboutPage.cards.leads.title",{defaultValue:"Lead Fokus"})]}),d.jsx(Fe,{children:e("aboutPage.cards.leads.desc",{defaultValue:"Design und Marketing arbeiten zusammen."})})]})]})]}),d.jsx(ht,{children:d.jsxs(Ge,{children:[d.jsx("h2",{children:e("aboutPage.results.title",{defaultValue:"Was Kunden erhalten"})}),d.jsxs(_o,{children:[d.jsxs("li",{children:[d.jsx(Tt,{})," ",e("aboutPage.results.i1",{defaultValue:"Schnelle Website, die auf jedem Smartphone laedt"})]}),d.jsxs("li",{children:[d.jsx(Tt,{})," ",e("aboutPage.results.i2",{defaultValue:"Klare Kontaktwege: Anruf, Formular, Termin"})]}),d.jsxs("li",{children:[d.jsx(Tt,{})," ",e("aboutPage.results.i3",{defaultValue:"Messbare Anfragen mit Tracking und Marketing-Daten"})]})]})]})}),d.jsxs(ht,{children:[d.jsx("h2",{children:e("aboutPage.section.trust",{defaultValue:"Trust"})}),d.jsxs(lu,{children:[d.jsxs(Ge,{children:[d.jsx("h3",{children:e("aboutPage.trust.projects.label",{defaultValue:"Anzahl Projekte"})}),d.jsx("p",{className:"about-trust-metric",children:e("aboutPage.trust.projects.value",{defaultValue:"120+"})}),d.jsx(Fe,{children:e("aboutPage.trust.projects.text",{defaultValue:"Websites, Lead-Funnels und Relaunches."})})]}),d.jsxs(Ge,{children:[d.jsx("h3",{children:e("aboutPage.trust.industries.label",{defaultValue:"Branchen"})}),d.jsx("p",{className:"about-trust-metric",children:e("aboutPage.trust.industries.value",{defaultValue:"12"})}),d.jsx(Fe,{children:e("aboutPage.trust.industries.text",{defaultValue:"Handwerk, Praxen, Gastronomie, Beauty, Bildung und lokale Dienstleistungen."})})]}),d.jsxs(Ge,{children:[d.jsx("h3",{children:e("aboutPage.trust.focus.label",{defaultValue:"Fokus"})}),d.jsx("p",{className:"about-trust-metric",children:e("aboutPage.trust.focus.value",{defaultValue:"Lokal + Messbar"})}),d.jsx(Fe,{children:e("aboutPage.trust.focus.text",{defaultValue:"Hildesheim, Niedersachsen und Deutschland mit klarem Lead-Fokus."})})]})]})]}),d.jsxs(wg,{className:"about-cta-band",children:[d.jsx("h2",{children:e("aboutPage.cta.title",{defaultValue:"Bereit für planbare Anfragen?"})}),d.jsx(Fe,{children:e("aboutPage.cta.text",{defaultValue:"Im kostenlosen Erstgespräch zeigen wir die größten Hebel für Ihre Website, Lead-Prozesse und Werbung."})}),d.jsx(li,{children:d.jsxs(ci,{to:"/kontakt",children:[d.jsx(Nn,{})," ",e("aboutPage.primaryCta",{defaultValue:"Kostenloses Erstgespräch starten"})]})})]})]})})})},oV=L.div`
  padding: 0 0 84px;

  @media (max-width: 991px) {
    padding: 0 0 72px;
  }
`,lV=L(ie.section)`
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
`,cV=L.div`
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
`,uV=L.div`
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
`,dV=L.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 10px 0 0;
`,fV=L.div`
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
`,pV=L.div`
  align-self: stretch;
  position: relative;
  z-index: 1;
`,hV=L.div`
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
`,mV=L.h1`
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
`,gV=L.p`
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
`,f3=ed`
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
`,bV=L(Ge)`
  ${f3}
`,xV=L(ie.form)`
  ${f3}
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  min-height: 100%;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(20px);
`,vv=L(bV)`
  display: grid;
  gap: 14px;
`,mm=L.span`
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
`,wv=L.h2`
  margin: 0 0 10px;
  font-size: clamp(24px, 2.4vw, 34px);
  line-height: 1.02;
`,yV=L.p`
  margin: 0 0 12px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 12px;
  line-height: 1.35;
`,Gc=L.div`
  display: grid;
  gap: 4px;
`,Uc=L.span`
  color: rgba(255, 255, 255, 0.72);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  margin-bottom: 6px;
`,Ic=L(r3)`
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
`,vV=L.p`
  margin: 6px 0 0;
  color: rgba(255, 255, 255, 0.58);
  max-width: 36ch;
  font-size: 11px;
  line-height: 1.35;
`,Sv=L.p`
  margin: 8px 0 0;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid
    ${({$tone:e})=>e==="success"?"rgba(104, 211, 145, 0.35)":"rgba(255, 150, 150, 0.32)"};
  background: ${({$tone:e})=>e==="success"?"rgba(104, 211, 145, 0.12)":"rgba(255, 120, 120, 0.12)"};
  color: ${({$tone:e})=>e==="success"?"#bef7d0":"#ffd0d0"};
  font-size: 12px;
  line-height: 1.45;
`,wV=L.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,SV=L(i3)`
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
`,TV=L.div`
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
`,kV=L.div`
  display: grid;
  gap: 8px;
`,p3=ed`
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
`;L.div`
  ${p3}
`;const bh=L.a`
  ${p3}
  text-decoration: none;

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
    border-color: rgba(255, 180, 80, 0.3);
    background: rgba(255, 255, 255, 0.07);
  }
`,jV=L.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,EV=L.span`
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
`,CV=L(ie.section)`
  padding-top: 8px;
`,AV=L.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`,MV=L(mm)`
  color: rgba(255, 211, 148, 0.88);
`,zV=L.h3`
  margin: 0;
  font-size: clamp(22px, 2.8vw, 30px);
  line-height: 1.12;
`,RV=L.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  line-height: 1.55;
`,LV=L.div`
  display: grid;
  gap: 10px;
`,OV=L.div`
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
`,h3=qe`
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
`,DV=qe`
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
`,PV=qe`
  0%, 100% {
    transform: scaleX(0.18);
    opacity: 0.42;
  }
  50% {
    transform: scaleX(1);
    opacity: 1;
  }
`,VV=qe`
  0%, 100% {
    transform: translateY(0) scale(1);
    opacity: 0.72;
  }
  50% {
    transform: translateY(-2px) scale(1.06);
    opacity: 1;
  }
`,NV=qe`
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
`,BV=qe`
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
`,_V=qe`
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
`,$V=qe`
  0%, 100% {
    transform: translate(-50%, -50%) scale(0.92);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.28);
  }
`,HV=qe`
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
`,m3=qe`
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
`,GV=qe`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`,UV=L.div`
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
`,g3=L.div`
  position: absolute;
  border-radius: 999px;
  pointer-events: none;
  filter: blur(64px);
  opacity: 0.26;
  z-index: 0;
`,IV=L(g3)`
  width: 240px;
  height: 180px;
  top: 4%;
  left: 8%;
  background: radial-gradient(circle, rgba(255, 190, 98, 0.54), rgba(255, 190, 98, 0));
  animation: ${h3} 12s ease-in-out infinite;
`,FV=L(g3)`
  width: 280px;
  height: 220px;
  right: 0;
  bottom: 6%;
  background: radial-gradient(circle, rgba(68, 120, 255, 0.46), rgba(68, 120, 255, 0));
  animation: ${h3} 14s ease-in-out infinite reverse;
`,qV=L.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 3px;
  margin-bottom: 12px;
`,KV=L.span`
  color: rgba(255, 208, 148, 0.78);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`,YV=L.p`
  margin: 0;
  max-width: 24ch;
  color: rgba(255, 255, 255, 0.88);
  font-size: 12px;
  line-height: 1.3;
`,XV=L.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  align-items: start;
`,WV=L.div`
  display: grid;
  gap: 8px;
`,QV=L.div`
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
`,Tv=L.div`
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
`,ZV=L.div`
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
`,JV=L.div`
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
`,eN=L.span`
  color: rgba(255, 211, 148, 0.82);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`,tN=L.strong`
  color: rgba(255, 255, 255, 0.96);
  font-size: 18px;
  line-height: 1.05;
`,nN=L.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.66);
  font-size: 11px;
  line-height: 1.3;
`,aN=L.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,kv=L.span`
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
`,iN=L.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 6px;
`,rN=L.div`
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
`;L.div`
  position: relative;
  min-height: 346px;
  z-index: 1;
  animation: ${DV} 12.6s ease-in-out infinite;
  transform-style: preserve-3d;
`;L.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  min-height: 260px;
`;L.div`
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
`;L.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 12px;
`;L.strong`
  display: block;
  color: rgba(255, 255, 255, 0.94);
  font-size: 13px;
  font-weight: 700;
`;L.span`
  display: block;
  margin-top: 2px;
  color: rgba(255, 255, 255, 0.56);
  font-size: 11px;
`;L.span`
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
  animation: ${VV} 1.8s ease-in-out infinite;
`;L.div`
  display: grid;
  gap: 10px;
`;L.div`
  position: relative;
  overflow: hidden;
  height: 42px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(10, 15, 28, 0.7);
`;L.div`
  position: absolute;
  inset: 0 auto 0 0;
  width: ${({$width:e})=>`${e}%`};
  border-radius: inherit;
  transform-origin: left center;
  background: ${({$tone:e})=>{switch(e){case"blue":return"linear-gradient(90deg, rgba(72, 129, 255, 0.18), rgba(108, 183, 255, 0.62))";case"green":return"linear-gradient(90deg, rgba(42, 189, 141, 0.18), rgba(88, 227, 178, 0.62))";case"gold":default:return"linear-gradient(90deg, rgba(255, 184, 87, 0.16), rgba(255, 214, 144, 0.62))"}}};
  animation: ${PV} 1.6s ease-in-out infinite;
  animation-delay: ${({$delay:e})=>`${e}s`};
`;L.div`
  --beam-width: ${({$width:e})=>`${e}px`};
  position: absolute;
  width: ${({$width:e})=>`${e}px`};
  height: 4px;
  border-radius: 999px;
  transform: rotate(${({$rotate:e})=>`${e}deg`});
  transform-origin: left center;
  background: linear-gradient(90deg, rgba(255, 188, 97, 0.08), rgba(87, 147, 255, 0.84), rgba(255, 188, 97, 0.08));
  background-size: 200% 100%;
  animation: ${NV} ${({$duration:e})=>`${e}s`} ease-in-out infinite;
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
    animation: ${BV} ${({$duration:e})=>`${Math.max(e-.4,1.2)}s`} linear infinite;
    animation-delay: ${({$delay:e})=>`${e*.5}s`};
  }
`;L.div`
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
    animation: ${_V} ${({$duration:e})=>`${e}s`} ease-out infinite;
    animation-delay: ${({$delay:e})=>`${e}s`};
  }

  &::after {
    width: 10px;
    height: 10px;
    background: radial-gradient(circle, rgba(255, 220, 168, 1), rgba(255, 178, 80, 0.2));
    box-shadow: 0 0 18px rgba(255, 200, 120, 0.58);
    animation: ${$V} ${({$duration:e})=>`${Math.max(e-.4,1.1)}s`} ease-in-out infinite;
    animation-delay: ${({$delay:e})=>`${(e*.5).toFixed(2)}s`};
  }
`;L.div`
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
  animation: ${HV} ${({$duration:e})=>`${e}s`} cubic-bezier(0.42, 0.08, 0.58, 0.92) infinite alternate both;
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
    animation: ${m3} ${({$duration:e})=>`${Math.max(e-.4,1.4)}s`} linear infinite;
    animation-delay: ${({$delay:e})=>`${e}s`};
    pointer-events: none;
  }
`;L.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  color: #fff;
  background: ${({$tone:e})=>{switch(e){case"blue":return"linear-gradient(135deg, rgba(66, 132, 255, 0.88), rgba(92, 181, 255, 0.7))";case"green":return"linear-gradient(135deg, rgba(52, 211, 153, 0.88), rgba(96, 230, 188, 0.66))";case"violet":return"linear-gradient(135deg, rgba(117, 92, 255, 0.84), rgba(173, 110, 255, 0.66))";case"gold":default:return"linear-gradient(135deg, rgba(255, 188, 97, 0.92), rgba(255, 211, 136, 0.7))"}}}; 
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22);
  animation: ${GV} 2.4s ease-in-out infinite;
`;L.div`
  display: grid;
  gap: 3px;
`;L.strong`
  color: rgba(255, 255, 255, 0.94);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
`;L.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  line-height: 1.35;
`;const sN=qe`
  from {
    transform: translate3d(calc(-50% - (var(--lane-gap) / 2)), 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`,oN=qe`
  0%, 100% {
    opacity: 0.24;
    transform: scaleX(0.92);
  }
  50% {
    opacity: 0.54;
    transform: scaleX(1);
  }
`,lN=qe`
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -3px, 0);
  }
`,cN=qe`
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-6px) scale(1.01);
  }
`,jv=qe`
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
`,uN=qe`
  0%, 100% {
    transform: translateY(0);
    border-color: rgba(255, 255, 255, 0.08);
  }
  50% {
    transform: translateY(-3px);
    border-color: rgba(255, 188, 97, 0.18);
  }
`,dN=qe`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
`;L.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(220px, 0.88fr);
  gap: 18px;
  min-height: 344px;
`;L.div`
  display: grid;
  gap: 14px;
  align-content: start;
`;L.div`
  position: relative;
  overflow: hidden;
  padding: 14px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(180deg, rgba(16, 21, 36, 0.78), rgba(10, 14, 24, 0.84)),
    radial-gradient(circle at left center, rgba(255, 188, 97, 0.08), transparent 44%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
  animation: ${lN} 6.2s ease-in-out infinite;
  will-change: transform;

  &::before {
    content: '';
    position: absolute;
    left: 14px;
    right: 14px;
    bottom: 12px;
    height: 1px;
    background: linear-gradient(90deg, rgba(255, 188, 97, 0), rgba(255, 188, 97, 0.36), rgba(71, 133, 255, 0));
    animation: ${oN} 3.4s ease-in-out infinite;
    pointer-events: none;
  }
`;L.div`
  display: grid;
  gap: 3px;
  margin-bottom: 12px;
`;L.span`
  color: rgba(255, 211, 148, 0.86);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;L.span`
  color: rgba(255, 255, 255, 0.56);
  font-size: 12px;
  line-height: 1.4;
`;L.div`
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
`;L.div`
  --lane-gap: 12px;
  display: flex;
  gap: var(--lane-gap);
  width: max-content;
  transform: translate3d(calc(-50% - (var(--lane-gap) / 2)), 0, 0);
  animation: ${sN} ${({$duration:e})=>`${e}s`} linear infinite;
  animation-delay: ${({$delay:e})=>`${e}s`};
  will-change: transform;
`;L.div`
  display: flex;
  flex-shrink: 0;
  gap: 12px;
`;L.div`
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
  animation: ${dN} 3.6s ease-in-out infinite;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0));
    transform: translateX(-120%);
    animation: ${m3} 6.8s linear infinite;
    pointer-events: none;
  }
`;L.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 11px;
  color: #fff;
  background: ${({$tone:e})=>{switch(e){case"blue":return"linear-gradient(135deg, rgba(66, 132, 255, 0.92), rgba(92, 181, 255, 0.72))";case"green":return"linear-gradient(135deg, rgba(52, 211, 153, 0.92), rgba(96, 230, 188, 0.68))";case"violet":return"linear-gradient(135deg, rgba(117, 92, 255, 0.88), rgba(173, 110, 255, 0.68))";case"gold":default:return"linear-gradient(135deg, rgba(255, 188, 97, 0.94), rgba(255, 211, 136, 0.72))"}}};
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18);
`;L.div`
  display: grid;
  gap: 2px;
`;L.strong`
  color: rgba(255, 255, 255, 0.94);
  font-size: 13px;
  font-weight: 700;
  line-height: 1.3;
`;L.span`
  color: rgba(255, 255, 255, 0.58);
  font-size: 11px;
  line-height: 1.35;
`;L.div`
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
  animation: ${cN} 8.6s ease-in-out infinite;

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
    animation: ${jv} 4.8s ease-out infinite;
  }

  &::after {
    width: 152px;
    height: 152px;
    border: 1px solid rgba(76, 134, 255, 0.12);
    animation: ${jv} 5.8s ease-out infinite;
    animation-delay: 1.1s;
  }
`;L.span`
  position: relative;
  z-index: 1;
  color: rgba(255, 211, 148, 0.82);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;L.p`
  position: relative;
  z-index: 1;
  margin: 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: 15px;
  line-height: 1.5;
`;L.div`
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
`;L.strong`
  color: rgba(255, 255, 255, 0.96);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
`;L.span`
  color: rgba(255, 255, 255, 0.58);
  font-size: 12px;
  line-height: 1.4;
`;L.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 10px;
`;L.div`
  display: grid;
  gap: 2px;
  padding: 12px 14px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  animation: ${uN} 3.8s ease-in-out infinite;
  animation-delay: ${({$delay:e})=>`${e}s`};
`;L.strong`
  color: rgba(255, 255, 255, 0.95);
  font-size: 15px;
  font-weight: 700;
  line-height: 1.2;
`;L.span`
  color: rgba(255, 255, 255, 0.58);
  font-size: 12px;
  line-height: 1.35;
`;const Ta={eyebrow:"Lead Flow",title:"Website, Ads und Calls gehen direkt in den CRM-Flow.",lanes:[{source:"Website",target:"Lead",tone:"gold"},{source:"Ads",target:"Lead",tone:"blue"},{source:"Calls",target:"Lead",tone:"green"}],routerEyebrow:"CRM Hub",routerTitle:"CRM Router",routerMeta:"Capture, Routing und Rueckmeldung.",miniMeta:["1-2h Antwort","Live in CRM"],stats:[{value:"1-2h",label:"Response"},{value:"Live",label:"Assigned in CRM"}]},fN=()=>{const{t:e}=Ue();return d.jsxs(UV,{"aria-hidden":"true",children:[d.jsx(IV,{}),d.jsx(FV,{}),d.jsxs(qV,{children:[d.jsx(KV,{children:e("contact.visual.eyebrow",{defaultValue:Ta.eyebrow})}),d.jsx(YV,{children:e("contact.visual.title",{defaultValue:Ta.title})})]}),d.jsxs(XV,{children:[d.jsx(WV,{children:Ta.lanes.map((t,a)=>d.jsxs(QV,{children:[d.jsx(Tv,{$tone:t.tone,children:e(`contact.visual.lanes.${a}.source`,{defaultValue:t.source})}),d.jsx(ZV,{}),d.jsx(Tv,{children:e(`contact.visual.lanes.${a}.target`,{defaultValue:t.target})})]},t.source))}),d.jsxs(JV,{children:[d.jsx(eN,{children:e("contact.visual.routerEyebrow",{defaultValue:Ta.routerEyebrow})}),d.jsx(tN,{children:e("contact.visual.routerTitle",{defaultValue:Ta.routerTitle})}),d.jsx(nN,{children:e("contact.visual.routerMeta",{defaultValue:Ta.routerMeta})}),d.jsxs(aN,{children:[d.jsxs(kv,{children:[d.jsx(q4,{}),e("contact.visual.miniMeta.0",{defaultValue:Ta.miniMeta[0]})]}),d.jsxs(kv,{children:[d.jsx(ri,{}),e("contact.visual.miniMeta.1",{defaultValue:Ta.miniMeta[1]})]})]}),d.jsx(iN,{children:Ta.stats.map((t,a)=>d.jsxs(rN,{children:[d.jsx("strong",{children:e(`contact.visual.stats.${a}.value`,{defaultValue:t.value})}),d.jsx("span",{children:e(`contact.visual.stats.${a}.label`,{defaultValue:t.label})})]},t.label))})]})]})]})},Ev={hidden:{opacity:0,y:20},show:{opacity:1,y:0}},Me={headline:"Erzaehlen Sie uns von Ihrem Projekt",responseTime:"Durchschnittliche Antwortzeit: 1-2h",subtitle:"Kurz beschreiben, was Sie planen. Sie erhalten schnell eine Ersteinschaetzung und den naechsten Schritt.",quickContacts:"Direkter Kontakt",responseNote:"Antwort meist innerhalb von 1-2 Stunden",formTitle:"Projektanfrage",formIntro:"Drei Angaben reichen fuer den Start.",formHelp:"Name, Unternehmen und Ziel genuegen.",nextStepsTitle:"So geht es weiter",nextStepsLead:"Nach Ihrer Anfrage sehen Sie sofort, wie der erste Kontakt, die Priorisierung und die Rueckmeldung organisiert sind.",labels:{name:"Ihr Name",business:"Unternehmen",email:"E-Mail",message:"Projekt oder Ziel"},submitLoading:"Wird gesendet...",submitSuccess:"Vielen Dank. Ihre Anfrage wurde erfolgreich versendet.",submitError:"Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",contactMeta:{location:"Standort fuer schnelle Abstimmung",email:"Projektanfragen per E-Mail",phone:"Kurzes Erstgespraech oder Rueckruf"},trustItems:["Direkte Kommunikation","Klare Ersteinschaetzung","Schnelle Rueckmeldung"],nextSteps:["Ihre Anfrage landet direkt im Intake-Flow.","Wir melden uns meist innerhalb von 1-2 Stunden zurueck.","Sie erhalten einen klaren naechsten Schritt statt langer Rueckfragen."]},pN=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,hN="Ehrlicherstr. 52, 31135 Hildesheim, Germany",mN=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hN)}`,gN=()=>{var N;const{t:e}=Ue(),a=((N=ra().state)==null?void 0:N.prefillNeed)||"",[i,o]=E.useState(""),[l,u]=E.useState(""),[f,p]=E.useState(""),[m,g]=E.useState(a),[x,y]=E.useState(""),[v,S]=E.useState(!1),[k,A]=E.useState(!1),[j,R]=E.useState(!1),[C,_]=E.useState("");E.useEffect(()=>{a&&g(a)},[a]);const M=()=>["/.netlify/functions/contact","/api/contact"],D=async V=>{if(V.preventDefault(),A(!1),R(!1),_(""),!pN.test(f.trim())){R(!0),_(e("contact.form.error",{defaultValue:Me.submitError}));return}S(!0);try{const q=JSON.stringify({name:i.trim(),business:l.trim(),email:f.trim(),message:m.trim(),website:x.trim()}),W=M();let H=null;for(const ee of W)if(H=await fetch(ee,{method:"POST",headers:{"Content-Type":"application/json"},body:q}),H.ok||H.status!==404)break;if(!H||!H.ok)throw new Error(`Request failed with status ${(H==null?void 0:H.status)??"unknown"}`);o(""),u(""),p(""),g(""),y(""),A(!0)}catch(q){console.error("Contact form submit failed",q),R(!0),_(e("contact.form.error",{defaultValue:Me.submitError}))}finally{S(!1)}};return d.jsx(oV,{children:d.jsxs(pn,{children:[d.jsx(lV,{initial:"hidden",animate:"show",variants:Ev,transition:{duration:.62,ease:dn},children:d.jsx(cV,{children:d.jsxs(uV,{children:[d.jsxs(dV,{children:[d.jsxs(hV,{children:[d.jsx(qu,{}),d.jsx("span",{children:e("contact.responseTime",{defaultValue:Me.responseTime})})]}),d.jsx(mV,{children:d.jsx(Ii,{text:e("contact.h1",{defaultValue:Me.headline}),durationMs:2200,storageKey:"kontakt_h1_once"})}),d.jsx(gV,{children:e("contact.subtitle",{defaultValue:Me.subtitle})})]}),d.jsxs(fV,{children:[d.jsxs(xV,{onSubmit:D,noValidate:!0,children:[d.jsx(mm,{children:"VS Web Studio"}),d.jsx(wv,{children:e("contact.form.title",{defaultValue:Me.formTitle})}),d.jsx(yV,{children:e("contact.form.intro",{defaultValue:Me.formIntro})}),d.jsxs(wV,{"aria-hidden":"true",children:[d.jsx("label",{htmlFor:"contact-website",children:"Website"}),d.jsx("input",{id:"contact-website",type:"text",name:"website",value:x,onChange:V=>y(V.target.value),tabIndex:-1,autoComplete:"off"})]}),d.jsxs(Gc,{children:[d.jsx(Uc,{children:e("contact.form.labels.name",{defaultValue:Me.labels.name})}),d.jsxs(Ic,{children:[d.jsx(iA,{}),d.jsx("input",{type:"text",name:"name",value:i,onChange:V=>o(V.target.value),placeholder:e("contact.form.name",{defaultValue:Me.labels.name}),"aria-label":e("contact.form.labels.name",{defaultValue:Me.labels.name}),required:!0})]})]}),d.jsxs(Gc,{children:[d.jsx(Uc,{children:e("contact.form.labels.business",{defaultValue:Me.labels.business})}),d.jsxs(Ic,{children:[d.jsx(F4,{}),d.jsx("input",{type:"text",name:"business",value:l,onChange:V=>u(V.target.value),placeholder:e("contact.form.business",{defaultValue:Me.labels.business}),"aria-label":e("contact.form.labels.business",{defaultValue:Me.labels.business}),required:!0})]})]}),d.jsxs(Gc,{children:[d.jsx(Uc,{children:e("contact.form.labels.email",{defaultValue:Me.labels.email})}),d.jsxs(Ic,{children:[d.jsx(ri,{}),d.jsx("input",{type:"email",name:"email",value:f,onChange:V=>p(V.target.value),placeholder:e("contact.form.email",{defaultValue:Me.labels.email}),"aria-label":e("contact.form.labels.email",{defaultValue:Me.labels.email}),autoComplete:"email",required:!0})]})]}),d.jsxs(Gc,{children:[d.jsx(Uc,{children:e("contact.form.labels.message",{defaultValue:Me.labels.message})}),d.jsxs(Ic,{children:[d.jsx(FC,{}),d.jsx("textarea",{name:"message",placeholder:e("contact.form.need",{defaultValue:Me.labels.message}),value:m,onChange:V=>g(V.target.value),"aria-label":e("contact.form.labels.message",{defaultValue:Me.labels.message}),required:!0})]})]}),d.jsx(vV,{children:e("contact.form.help",{defaultValue:Me.formHelp})}),k?d.jsx(Sv,{$tone:"success",role:"status","aria-live":"polite",children:e("contact.form.success",{defaultValue:Me.submitSuccess})}):null,j?d.jsx(Sv,{$tone:"error",role:"alert",children:C||e("contact.form.error",{defaultValue:Me.submitError})}):null,d.jsxs(SV,{type:"submit",disabled:v,"aria-busy":v,children:[d.jsx(ri,{}),v?e("contact.form.submitLoading",{defaultValue:Me.submitLoading}):e("contact.form.submit",{defaultValue:"Projekt anfragen"})]})]}),d.jsx(pV,{children:d.jsx(fN,{})})]})]})})}),d.jsx(CV,{initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.18},variants:Ev,transition:{duration:.52,ease:dn},children:d.jsxs(AV,{children:[d.jsxs(vv,{children:[d.jsx(mm,{children:"VS Web Studio"}),d.jsx(wv,{children:e("contact.quickContacts",{defaultValue:Me.quickContacts})}),d.jsxs(TV,{children:[d.jsx(sA,{}),d.jsx("span",{children:e("contact.responseNote",{defaultValue:Me.responseNote})})]}),d.jsxs(kV,{children:[d.jsxs(bh,{href:mN,target:"_blank",rel:"noreferrer",children:[d.jsx(Po,{}),d.jsxs("div",{children:[d.jsx("strong",{children:"Ehrlicherstr. 52, 31135 Hildesheim"}),d.jsx("span",{children:e("contact.contactMeta.location",{defaultValue:Me.contactMeta.location})})]})]}),d.jsxs(bh,{href:"mailto:anfrage@vs-web-studio.de",children:[d.jsx(ri,{}),d.jsxs("div",{children:[d.jsx("strong",{children:"anfrage@vs-web-studio.de"}),d.jsx("span",{children:e("contact.contactMeta.email",{defaultValue:Me.contactMeta.email})})]})]}),d.jsxs(bh,{href:"tel:+4915164392053",children:[d.jsx(QC,{}),d.jsxs("div",{children:[d.jsx("strong",{children:"+49 1516 4392053"}),d.jsx("span",{children:e("contact.contactMeta.phone",{defaultValue:Me.contactMeta.phone})})]})]})]}),d.jsx(jV,{children:Me.trustItems.map((V,q)=>d.jsxs(EV,{children:[d.jsx(Tt,{}),e(`contact.trustItems.${q}`,{defaultValue:V})]},V))})]}),d.jsxs(vv,{children:[d.jsx(MV,{children:e("contact.nextStepsEyebrow",{defaultValue:"Lead Intake"})}),d.jsx(zV,{children:e("contact.nextStepsTitle",{defaultValue:Me.nextStepsTitle})}),d.jsx(RV,{children:e("contact.nextStepsLead",{defaultValue:Me.nextStepsLead})}),d.jsx(LV,{children:Me.nextSteps.map((V,q)=>d.jsxs(OV,{children:[d.jsxs("span",{children:["0",q+1]}),d.jsx("p",{children:e(`contact.nextSteps.${q}`,{defaultValue:V})})]},V))})]})]})})]})})},bN=()=>{const{t:e}=Ue();return d.jsx(Cn,{children:d.jsxs(pn,{children:[d.jsxs(sa,{children:[d.jsx("h1",{children:d.jsx(Ii,{text:e("blog.h1"),durationMs:2600,storageKey:"blog_h1_once"})}),d.jsx("p",{children:e("blog.subtitle")})]}),d.jsx(ht,{children:d.jsxs(vg,{children:[d.jsx(Ge,{children:d.jsxs("h3",{children:[d.jsx(qt,{children:d.jsx(Zr,{})}),e("blog.cards.c1")]})}),d.jsx(Ge,{children:d.jsxs("h3",{children:[d.jsx(qt,{children:d.jsx(W4,{})}),e("blog.cards.c2")]})}),d.jsx(Ge,{children:d.jsxs("h3",{children:[d.jsx(qt,{children:d.jsx(cl,{})}),e("blog.cards.c3")]})}),d.jsx(Ge,{children:d.jsxs("h3",{children:[d.jsx(qt,{children:d.jsx(Zr,{})}),e("blog.cards.c4")]})})]})}),d.jsxs(wg,{children:[d.jsx("h2",{children:d.jsx(Ii,{text:e("blog.leadMagnet"),durationMs:1800,storageKey:"blog_leadmagnet_once"})}),d.jsxs(TD,{style:{maxWidth:420},children:[d.jsxs(r3,{children:[d.jsx(ri,{})," ",d.jsx("input",{type:"email",placeholder:e("blog.emailPlaceholder"),required:!0})]}),d.jsxs(i3,{type:"submit",children:[d.jsx(ri,{})," ",e("blog.getGuide")]})]})]})]})})},xN=()=>{const{t:e}=Ue();return d.jsx(Cn,{children:d.jsxs(pn,{children:[d.jsxs(sa,{children:[d.jsx("h1",{children:e("legal.impressum.h1")}),d.jsx("p",{children:e("legal.impressum.subtitle")})]}),d.jsx(ht,{children:d.jsxs(Ge,{children:[d.jsx("p",{children:e("legal.impressum.l1")}),d.jsx("p",{children:e("legal.impressum.l2")}),d.jsx("p",{children:e("legal.impressum.l3")}),d.jsx("p",{children:e("legal.impressum.l4")}),d.jsx("p",{children:e("legal.impressum.l5")})]})})]})})},yN=()=>{const{t:e}=Ue();return d.jsx(Cn,{children:d.jsxs(pn,{children:[d.jsxs(sa,{children:[d.jsx("h1",{children:e("legal.datenschutz.h1")}),d.jsx("p",{children:e("legal.datenschutz.subtitle")})]}),d.jsx(ht,{children:d.jsxs(Ge,{children:[d.jsx("p",{children:e("legal.datenschutz.l1")}),d.jsx("p",{children:e("legal.datenschutz.l2")}),d.jsx("p",{children:e("legal.datenschutz.l3")}),d.jsx("p",{children:e("legal.datenschutz.l4")})]})})]})})},vN=()=>{const{t:e}=Ue();return d.jsx(Cn,{children:d.jsxs(pn,{children:[d.jsxs(sa,{children:[d.jsx("h1",{children:e("legal.agb.h1")}),d.jsx("p",{children:e("legal.agb.subtitle")})]}),d.jsx(ht,{children:d.jsxs(Ge,{children:[d.jsx("p",{children:e("legal.agb.l1")}),d.jsx("p",{children:e("legal.agb.l2")})]})})]})})},wN=()=>{const{t:e}=Ue();return d.jsx(Cn,{children:d.jsxs(pn,{children:[d.jsxs(sa,{children:[d.jsx("h1",{children:e("legal.cookies.h1")}),d.jsx("p",{children:e("legal.cookies.subtitle")})]}),d.jsx(ht,{children:d.jsxs(Ge,{children:[d.jsx("p",{children:e("legal.cookies.l1")}),d.jsx("p",{children:e("legal.cookies.l2")})]})})]})})},SN=()=>{const{t:e}=Ue();return d.jsx(Cn,{children:d.jsx(pn,{children:d.jsxs(sa,{children:[d.jsx("h1",{children:e("niche.handwerker.h1")}),d.jsx("p",{children:e("niche.handwerker.p")}),d.jsx(li,{children:d.jsx(ci,{to:"/kontakt",children:e("common.projectRequest")})})]})})})},TN=()=>{const{t:e}=Ue();return d.jsx(Cn,{children:d.jsx(pn,{children:d.jsxs(sa,{children:[d.jsx("h1",{children:e("niche.praxis.h1")}),d.jsx("p",{children:e("niche.praxis.p")}),d.jsx(li,{children:d.jsx(ci,{to:"/kontakt",children:e("common.projectRequest")})})]})})})},kN=()=>{const{t:e}=Ue();return d.jsx(Cn,{children:d.jsx(pn,{children:d.jsxs(sa,{children:[d.jsx("h1",{children:e("niche.werkstatt.h1")}),d.jsx("p",{children:e("niche.werkstatt.p")}),d.jsx(li,{children:d.jsx(ci,{to:"/kontakt",children:e("common.projectRequest")})})]})})})},jN=()=>d.jsx(XS,{children:d.jsxs(wt,{path:"/",element:d.jsx(iR,{}),children:[d.jsx(wt,{index:!0,element:d.jsx(uD,{})}),d.jsx(wt,{path:"services",element:d.jsx(hP,{})}),d.jsx(wt,{path:"preise",element:d.jsx(FP,{})}),d.jsx(wt,{path:"referenzen",element:d.jsx(eV,{})}),d.jsx(wt,{path:"ueber-uns",element:d.jsx(sV,{})}),d.jsx(wt,{path:"kontakt",element:d.jsx(gN,{})}),d.jsx(wt,{path:"blog",element:d.jsx(bN,{})}),d.jsx(wt,{path:"handwerker",element:d.jsx(SN,{})}),d.jsx(wt,{path:"praxis",element:d.jsx(TN,{})}),d.jsx(wt,{path:"werkstatt",element:d.jsx(kN,{})}),d.jsx(wt,{path:"impressum",element:d.jsx(xN,{})}),d.jsx(wt,{path:"datenschutz",element:d.jsx(yN,{})}),d.jsx(wt,{path:"agb",element:d.jsx(vN,{})}),d.jsx(wt,{path:"cookies",element:d.jsx(wN,{})}),d.jsx(wt,{path:"home",element:d.jsx(zb,{to:"/",replace:!0})}),d.jsx(wt,{path:"*",element:d.jsx(zb,{to:"/",replace:!0})})]})});X6.createRoot(document.getElementById("root")).render(d.jsxs(Ce.StrictMode,{children:[d.jsx(wT,{styles:CT}),d.jsx(y9,{basename:"/",children:d.jsx(yM,{children:d.jsx(jN,{})})})]}));export{EN as c,Cv as g};
