(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function bx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var rg={exports:{}},zc={},sg={exports:{}},Je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Po=Symbol.for("react.element"),Cx=Symbol.for("react.portal"),Rx=Symbol.for("react.fragment"),Px=Symbol.for("react.strict_mode"),Lx=Symbol.for("react.profiler"),Dx=Symbol.for("react.provider"),Nx=Symbol.for("react.context"),Ix=Symbol.for("react.forward_ref"),Ux=Symbol.for("react.suspense"),Fx=Symbol.for("react.memo"),Ox=Symbol.for("react.lazy"),Zd=Symbol.iterator;function zx(n){return n===null||typeof n!="object"?null:(n=Zd&&n[Zd]||n["@@iterator"],typeof n=="function"?n:null)}var ag={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},og=Object.assign,lg={};function ma(n,e,t){this.props=n,this.context=e,this.refs=lg,this.updater=t||ag}ma.prototype.isReactComponent={};ma.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ma.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function cg(){}cg.prototype=ma.prototype;function Nf(n,e,t){this.props=n,this.context=e,this.refs=lg,this.updater=t||ag}var If=Nf.prototype=new cg;If.constructor=Nf;og(If,ma.prototype);If.isPureReactComponent=!0;var Qd=Array.isArray,ug=Object.prototype.hasOwnProperty,Uf={current:null},hg={key:!0,ref:!0,__self:!0,__source:!0};function fg(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)ug.call(e,i)&&!hg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Po,type:n,key:s,ref:a,props:r,_owner:Uf.current}}function kx(n,e){return{$$typeof:Po,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Ff(n){return typeof n=="object"&&n!==null&&n.$$typeof===Po}function Bx(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var ep=/\/+/g;function cu(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Bx(""+n.key):e.toString(36)}function Gl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case Po:case Cx:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+cu(a,0):i,Qd(r)?(t="",n!=null&&(t=n.replace(ep,"$&/")+"/"),Gl(r,e,t,"",function(c){return c})):r!=null&&(Ff(r)&&(r=kx(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(ep,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Qd(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+cu(s,o);a+=Gl(s,e,t,l,r)}else if(l=zx(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+cu(s,o++),a+=Gl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Bo(n,e,t){if(n==null)return n;var i=[],r=0;return Gl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Hx(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var hn={current:null},Vl={transition:null},Gx={ReactCurrentDispatcher:hn,ReactCurrentBatchConfig:Vl,ReactCurrentOwner:Uf};function dg(){throw Error("act(...) is not supported in production builds of React.")}Je.Children={map:Bo,forEach:function(n,e,t){Bo(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Bo(n,function(){e++}),e},toArray:function(n){return Bo(n,function(e){return e})||[]},only:function(n){if(!Ff(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Je.Component=ma;Je.Fragment=Rx;Je.Profiler=Lx;Je.PureComponent=Nf;Je.StrictMode=Px;Je.Suspense=Ux;Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gx;Je.act=dg;Je.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=og({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Uf.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)ug.call(e,l)&&!hg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Po,type:n.type,key:r,ref:s,props:i,_owner:a}};Je.createContext=function(n){return n={$$typeof:Nx,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Dx,_context:n},n.Consumer=n};Je.createElement=fg;Je.createFactory=function(n){var e=fg.bind(null,n);return e.type=n,e};Je.createRef=function(){return{current:null}};Je.forwardRef=function(n){return{$$typeof:Ix,render:n}};Je.isValidElement=Ff;Je.lazy=function(n){return{$$typeof:Ox,_payload:{_status:-1,_result:n},_init:Hx}};Je.memo=function(n,e){return{$$typeof:Fx,type:n,compare:e===void 0?null:e}};Je.startTransition=function(n){var e=Vl.transition;Vl.transition={};try{n()}finally{Vl.transition=e}};Je.unstable_act=dg;Je.useCallback=function(n,e){return hn.current.useCallback(n,e)};Je.useContext=function(n){return hn.current.useContext(n)};Je.useDebugValue=function(){};Je.useDeferredValue=function(n){return hn.current.useDeferredValue(n)};Je.useEffect=function(n,e){return hn.current.useEffect(n,e)};Je.useId=function(){return hn.current.useId()};Je.useImperativeHandle=function(n,e,t){return hn.current.useImperativeHandle(n,e,t)};Je.useInsertionEffect=function(n,e){return hn.current.useInsertionEffect(n,e)};Je.useLayoutEffect=function(n,e){return hn.current.useLayoutEffect(n,e)};Je.useMemo=function(n,e){return hn.current.useMemo(n,e)};Je.useReducer=function(n,e,t){return hn.current.useReducer(n,e,t)};Je.useRef=function(n){return hn.current.useRef(n)};Je.useState=function(n){return hn.current.useState(n)};Je.useSyncExternalStore=function(n,e,t){return hn.current.useSyncExternalStore(n,e,t)};Je.useTransition=function(){return hn.current.useTransition()};Je.version="18.3.1";sg.exports=Je;var Ge=sg.exports;const Vx=bx(Ge);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wx=Ge,Xx=Symbol.for("react.element"),jx=Symbol.for("react.fragment"),qx=Object.prototype.hasOwnProperty,$x=Wx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yx={key:!0,ref:!0,__self:!0,__source:!0};function pg(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)qx.call(e,i)&&!Yx.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Xx,type:n,key:s,ref:a,props:r,_owner:$x.current}}zc.Fragment=jx;zc.jsx=pg;zc.jsxs=pg;rg.exports=zc;var W=rg.exports,mg={exports:{}},Dn={},gg={exports:{}},vg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(F,C){var D=F.length;F.push(C);e:for(;0<D;){var B=D-1>>>1,V=F[B];if(0<r(V,C))F[B]=C,F[D]=V,D=B;else break e}}function t(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var C=F[0],D=F.pop();if(D!==C){F[0]=D;e:for(var B=0,V=F.length,z=V>>>1;B<z;){var q=2*(B+1)-1,O=F[q],Y=q+1,ee=F[Y];if(0>r(O,D))Y<V&&0>r(ee,O)?(F[B]=ee,F[Y]=D,B=Y):(F[B]=O,F[q]=D,B=q);else if(Y<V&&0>r(ee,D))F[B]=ee,F[Y]=D,B=Y;else break e}}return C}function r(F,C){var D=F.sortIndex-C.sortIndex;return D!==0?D:F.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,h=null,d=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(F){for(var C=t(c);C!==null;){if(C.callback===null)i(c);else if(C.startTime<=F)i(c),C.sortIndex=C.expirationTime,e(l,C);else break;C=t(c)}}function S(F){if(x=!1,g(F),!v)if(t(l)!==null)v=!0,$(R);else{var C=t(c);C!==null&&se(S,C.startTime-F)}}function R(F,C){v=!1,x&&(x=!1,f(N),N=-1),p=!0;var D=d;try{for(g(C),h=t(l);h!==null&&(!(h.expirationTime>C)||F&&!H());){var B=h.callback;if(typeof B=="function"){h.callback=null,d=h.priorityLevel;var V=B(h.expirationTime<=C);C=n.unstable_now(),typeof V=="function"?h.callback=V:h===t(l)&&i(l),g(C)}else i(l);h=t(l)}if(h!==null)var z=!0;else{var q=t(c);q!==null&&se(S,q.startTime-C),z=!1}return z}finally{h=null,d=D,p=!1}}var E=!1,w=null,N=-1,M=5,T=-1;function H(){return!(n.unstable_now()-T<M)}function j(){if(w!==null){var F=n.unstable_now();T=F;var C=!0;try{C=w(!0,F)}finally{C?oe():(E=!1,w=null)}}else E=!1}var oe;if(typeof _=="function")oe=function(){_(j)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,G=P.port2;P.port1.onmessage=j,oe=function(){G.postMessage(null)}}else oe=function(){m(j,0)};function $(F){w=F,E||(E=!0,oe())}function se(F,C){N=m(function(){F(n.unstable_now())},C)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(F){F.callback=null},n.unstable_continueExecution=function(){v||p||(v=!0,$(R))},n.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<F?Math.floor(1e3/F):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(F){switch(d){case 1:case 2:case 3:var C=3;break;default:C=d}var D=d;d=C;try{return F()}finally{d=D}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(F,C){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var D=d;d=F;try{return C()}finally{d=D}},n.unstable_scheduleCallback=function(F,C,D){var B=n.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?B+D:B):D=B,F){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=D+V,F={id:u++,callback:C,priorityLevel:F,startTime:D,expirationTime:V,sortIndex:-1},D>B?(F.sortIndex=D,e(c,F),t(l)===null&&F===t(c)&&(x?(f(N),N=-1):x=!0,se(S,D-B))):(F.sortIndex=V,e(l,F),v||p||(v=!0,$(R))),F},n.unstable_shouldYield=H,n.unstable_wrapCallback=function(F){var C=d;return function(){var D=d;d=C;try{return F.apply(this,arguments)}finally{d=D}}}})(vg);gg.exports=vg;var Kx=gg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jx=Ge,Ln=Kx;function fe(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _g=new Set,so={};function Zr(n,e){ia(n,e),ia(n+"Capture",e)}function ia(n,e){for(so[n]=e,n=0;n<e.length;n++)_g.add(e[n])}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mh=Object.prototype.hasOwnProperty,Zx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tp={},np={};function Qx(n){return Mh.call(np,n)?!0:Mh.call(tp,n)?!1:Zx.test(n)?np[n]=!0:(tp[n]=!0,!1)}function ey(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function ty(n,e,t,i){if(e===null||typeof e>"u"||ey(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){qt[n]=new fn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];qt[e]=new fn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){qt[n]=new fn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){qt[n]=new fn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){qt[n]=new fn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){qt[n]=new fn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){qt[n]=new fn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){qt[n]=new fn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){qt[n]=new fn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Of=/[\-:]([a-z])/g;function zf(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Of,zf);qt[e]=new fn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Of,zf);qt[e]=new fn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Of,zf);qt[e]=new fn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){qt[n]=new fn(n,1,!1,n.toLowerCase(),null,!1,!1)});qt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){qt[n]=new fn(n,1,!1,n.toLowerCase(),null,!0,!0)});function kf(n,e,t,i){var r=qt.hasOwnProperty(e)?qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ty(e,t,r,i)&&(t=null),i||r===null?Qx(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Hi=Jx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ho=Symbol.for("react.element"),Ts=Symbol.for("react.portal"),As=Symbol.for("react.fragment"),Bf=Symbol.for("react.strict_mode"),Eh=Symbol.for("react.profiler"),xg=Symbol.for("react.provider"),yg=Symbol.for("react.context"),Hf=Symbol.for("react.forward_ref"),wh=Symbol.for("react.suspense"),Th=Symbol.for("react.suspense_list"),Gf=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),Sg=Symbol.for("react.offscreen"),ip=Symbol.iterator;function Ma(n){return n===null||typeof n!="object"?null:(n=ip&&n[ip]||n["@@iterator"],typeof n=="function"?n:null)}var xt=Object.assign,uu;function Ha(n){if(uu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);uu=e&&e[1]||""}return`
`+uu+n}var hu=!1;function fu(n,e){if(!n||hu)return"";hu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{hu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ha(n):""}function ny(n){switch(n.tag){case 5:return Ha(n.type);case 16:return Ha("Lazy");case 13:return Ha("Suspense");case 19:return Ha("SuspenseList");case 0:case 2:case 15:return n=fu(n.type,!1),n;case 11:return n=fu(n.type.render,!1),n;case 1:return n=fu(n.type,!0),n;default:return""}}function Ah(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case As:return"Fragment";case Ts:return"Portal";case Eh:return"Profiler";case Bf:return"StrictMode";case wh:return"Suspense";case Th:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case yg:return(n.displayName||"Context")+".Consumer";case xg:return(n._context.displayName||"Context")+".Provider";case Hf:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Gf:return e=n.displayName||null,e!==null?e:Ah(n.type)||"Memo";case Ji:e=n._payload,n=n._init;try{return Ah(n(e))}catch{}}return null}function iy(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ah(e);case 8:return e===Bf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Mg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ry(n){var e=Mg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Go(n){n._valueTracker||(n._valueTracker=ry(n))}function Eg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Mg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function rc(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function bh(n,e){var t=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function rp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=xr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function wg(n,e){e=e.checked,e!=null&&kf(n,"checked",e,!1)}function Ch(n,e){wg(n,e);var t=xr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Rh(n,e.type,t):e.hasOwnProperty("defaultValue")&&Rh(n,e.type,xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function sp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Rh(n,e,t){(e!=="number"||rc(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ga=Array.isArray;function js(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+xr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Ph(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(fe(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ap(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(fe(92));if(Ga(t)){if(1<t.length)throw Error(fe(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:xr(t)}}function Tg(n,e){var t=xr(e.value),i=xr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function op(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Ag(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lh(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Ag(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Vo,bg=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Vo=Vo||document.createElement("div"),Vo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vo.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ao(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sy=["Webkit","ms","Moz","O"];Object.keys(ja).forEach(function(n){sy.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),ja[e]=ja[n]})});function Cg(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||ja.hasOwnProperty(n)&&ja[n]?(""+e).trim():e+"px"}function Rg(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Cg(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var ay=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dh(n,e){if(e){if(ay[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(fe(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(fe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(fe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(fe(62))}}function Nh(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ih=null;function Vf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Uh=null,qs=null,$s=null;function lp(n){if(n=No(n)){if(typeof Uh!="function")throw Error(fe(280));var e=n.stateNode;e&&(e=Vc(e),Uh(n.stateNode,n.type,e))}}function Pg(n){qs?$s?$s.push(n):$s=[n]:qs=n}function Lg(){if(qs){var n=qs,e=$s;if($s=qs=null,lp(n),e)for(n=0;n<e.length;n++)lp(e[n])}}function Dg(n,e){return n(e)}function Ng(){}var du=!1;function Ig(n,e,t){if(du)return n(e,t);du=!0;try{return Dg(n,e,t)}finally{du=!1,(qs!==null||$s!==null)&&(Ng(),Lg())}}function oo(n,e){var t=n.stateNode;if(t===null)return null;var i=Vc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(fe(231,e,typeof t));return t}var Fh=!1;if(Fi)try{var Ea={};Object.defineProperty(Ea,"passive",{get:function(){Fh=!0}}),window.addEventListener("test",Ea,Ea),window.removeEventListener("test",Ea,Ea)}catch{Fh=!1}function oy(n,e,t,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var qa=!1,sc=null,ac=!1,Oh=null,ly={onError:function(n){qa=!0,sc=n}};function cy(n,e,t,i,r,s,a,o,l){qa=!1,sc=null,oy.apply(ly,arguments)}function uy(n,e,t,i,r,s,a,o,l){if(cy.apply(this,arguments),qa){if(qa){var c=sc;qa=!1,sc=null}else throw Error(fe(198));ac||(ac=!0,Oh=c)}}function Qr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Ug(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function cp(n){if(Qr(n)!==n)throw Error(fe(188))}function hy(n){var e=n.alternate;if(!e){if(e=Qr(n),e===null)throw Error(fe(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return cp(r),n;if(s===i)return cp(r),e;s=s.sibling}throw Error(fe(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(fe(189))}}if(t.alternate!==i)throw Error(fe(190))}if(t.tag!==3)throw Error(fe(188));return t.stateNode.current===t?n:e}function Fg(n){return n=hy(n),n!==null?Og(n):null}function Og(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Og(n);if(e!==null)return e;n=n.sibling}return null}var zg=Ln.unstable_scheduleCallback,up=Ln.unstable_cancelCallback,fy=Ln.unstable_shouldYield,dy=Ln.unstable_requestPaint,Tt=Ln.unstable_now,py=Ln.unstable_getCurrentPriorityLevel,Wf=Ln.unstable_ImmediatePriority,kg=Ln.unstable_UserBlockingPriority,oc=Ln.unstable_NormalPriority,my=Ln.unstable_LowPriority,Bg=Ln.unstable_IdlePriority,kc=null,fi=null;function gy(n){if(fi&&typeof fi.onCommitFiberRoot=="function")try{fi.onCommitFiberRoot(kc,n,void 0,(n.current.flags&128)===128)}catch{}}var ii=Math.clz32?Math.clz32:xy,vy=Math.log,_y=Math.LN2;function xy(n){return n>>>=0,n===0?32:31-(vy(n)/_y|0)|0}var Wo=64,Xo=4194304;function Va(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function lc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=Va(o):(s&=a,s!==0&&(i=Va(s)))}else a=t&~r,a!==0?i=Va(a):s!==0&&(i=Va(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ii(e),r=1<<t,i|=n[t],e&=~r;return i}function yy(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sy(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-ii(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=yy(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function zh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Hg(){var n=Wo;return Wo<<=1,!(Wo&4194240)&&(Wo=64),n}function pu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Lo(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ii(e),n[e]=t}function My(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ii(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Xf(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ii(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var st=0;function Gg(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Vg,jf,Wg,Xg,jg,kh=!1,jo=[],or=null,lr=null,cr=null,lo=new Map,co=new Map,Qi=[],Ey="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hp(n,e){switch(n){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":lo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(e.pointerId)}}function wa(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=No(e),e!==null&&jf(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function wy(n,e,t,i,r){switch(e){case"focusin":return or=wa(or,n,e,t,i,r),!0;case"dragenter":return lr=wa(lr,n,e,t,i,r),!0;case"mouseover":return cr=wa(cr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return lo.set(s,wa(lo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,co.set(s,wa(co.get(s)||null,n,e,t,i,r)),!0}return!1}function qg(n){var e=Or(n.target);if(e!==null){var t=Qr(e);if(t!==null){if(e=t.tag,e===13){if(e=Ug(t),e!==null){n.blockedOn=e,jg(n.priority,function(){Wg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Wl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Bh(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Ih=i,t.target.dispatchEvent(i),Ih=null}else return e=No(t),e!==null&&jf(e),n.blockedOn=t,!1;e.shift()}return!0}function fp(n,e,t){Wl(n)&&t.delete(e)}function Ty(){kh=!1,or!==null&&Wl(or)&&(or=null),lr!==null&&Wl(lr)&&(lr=null),cr!==null&&Wl(cr)&&(cr=null),lo.forEach(fp),co.forEach(fp)}function Ta(n,e){n.blockedOn===e&&(n.blockedOn=null,kh||(kh=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,Ty)))}function uo(n){function e(r){return Ta(r,n)}if(0<jo.length){Ta(jo[0],n);for(var t=1;t<jo.length;t++){var i=jo[t];i.blockedOn===n&&(i.blockedOn=null)}}for(or!==null&&Ta(or,n),lr!==null&&Ta(lr,n),cr!==null&&Ta(cr,n),lo.forEach(e),co.forEach(e),t=0;t<Qi.length;t++)i=Qi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Qi.length&&(t=Qi[0],t.blockedOn===null);)qg(t),t.blockedOn===null&&Qi.shift()}var Ys=Hi.ReactCurrentBatchConfig,cc=!0;function Ay(n,e,t,i){var r=st,s=Ys.transition;Ys.transition=null;try{st=1,qf(n,e,t,i)}finally{st=r,Ys.transition=s}}function by(n,e,t,i){var r=st,s=Ys.transition;Ys.transition=null;try{st=4,qf(n,e,t,i)}finally{st=r,Ys.transition=s}}function qf(n,e,t,i){if(cc){var r=Bh(n,e,t,i);if(r===null)wu(n,e,i,uc,t),hp(n,i);else if(wy(r,n,e,t,i))i.stopPropagation();else if(hp(n,i),e&4&&-1<Ey.indexOf(n)){for(;r!==null;){var s=No(r);if(s!==null&&Vg(s),s=Bh(n,e,t,i),s===null&&wu(n,e,i,uc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else wu(n,e,i,null,t)}}var uc=null;function Bh(n,e,t,i){if(uc=null,n=Vf(i),n=Or(n),n!==null)if(e=Qr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Ug(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return uc=n,null}function $g(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(py()){case Wf:return 1;case kg:return 4;case oc:case my:return 16;case Bg:return 536870912;default:return 16}default:return 16}}var tr=null,$f=null,Xl=null;function Yg(){if(Xl)return Xl;var n,e=$f,t=e.length,i,r="value"in tr?tr.value:tr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return Xl=r.slice(n,1<i?1-i:void 0)}function jl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function qo(){return!0}function dp(){return!1}function Nn(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qo:dp,this.isPropagationStopped=dp,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),e}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yf=Nn(ga),Do=xt({},ga,{view:0,detail:0}),Cy=Nn(Do),mu,gu,Aa,Bc=xt({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Aa&&(Aa&&n.type==="mousemove"?(mu=n.screenX-Aa.screenX,gu=n.screenY-Aa.screenY):gu=mu=0,Aa=n),mu)},movementY:function(n){return"movementY"in n?n.movementY:gu}}),pp=Nn(Bc),Ry=xt({},Bc,{dataTransfer:0}),Py=Nn(Ry),Ly=xt({},Do,{relatedTarget:0}),vu=Nn(Ly),Dy=xt({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Ny=Nn(Dy),Iy=xt({},ga,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Uy=Nn(Iy),Fy=xt({},ga,{data:0}),mp=Nn(Fy),Oy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ky={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function By(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=ky[n])?!!e[n]:!1}function Kf(){return By}var Hy=xt({},Do,{key:function(n){if(n.key){var e=Oy[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=jl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zy[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kf,charCode:function(n){return n.type==="keypress"?jl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?jl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Gy=Nn(Hy),Vy=xt({},Bc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gp=Nn(Vy),Wy=xt({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kf}),Xy=Nn(Wy),jy=xt({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),qy=Nn(jy),$y=xt({},Bc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Yy=Nn($y),Ky=[9,13,27,32],Jf=Fi&&"CompositionEvent"in window,$a=null;Fi&&"documentMode"in document&&($a=document.documentMode);var Jy=Fi&&"TextEvent"in window&&!$a,Kg=Fi&&(!Jf||$a&&8<$a&&11>=$a),vp=" ",_p=!1;function Jg(n,e){switch(n){case"keyup":return Ky.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var bs=!1;function Zy(n,e){switch(n){case"compositionend":return Zg(e);case"keypress":return e.which!==32?null:(_p=!0,vp);case"textInput":return n=e.data,n===vp&&_p?null:n;default:return null}}function Qy(n,e){if(bs)return n==="compositionend"||!Jf&&Jg(n,e)?(n=Yg(),Xl=$f=tr=null,bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kg&&e.locale!=="ko"?null:e.data;default:return null}}var eS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!eS[n.type]:e==="textarea"}function Qg(n,e,t,i){Pg(i),e=hc(e,"onChange"),0<e.length&&(t=new Yf("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ya=null,ho=null;function tS(n){uv(n,0)}function Hc(n){var e=Ps(n);if(Eg(e))return n}function nS(n,e){if(n==="change")return e}var ev=!1;if(Fi){var _u;if(Fi){var xu="oninput"in document;if(!xu){var yp=document.createElement("div");yp.setAttribute("oninput","return;"),xu=typeof yp.oninput=="function"}_u=xu}else _u=!1;ev=_u&&(!document.documentMode||9<document.documentMode)}function Sp(){Ya&&(Ya.detachEvent("onpropertychange",tv),ho=Ya=null)}function tv(n){if(n.propertyName==="value"&&Hc(ho)){var e=[];Qg(e,ho,n,Vf(n)),Ig(tS,e)}}function iS(n,e,t){n==="focusin"?(Sp(),Ya=e,ho=t,Ya.attachEvent("onpropertychange",tv)):n==="focusout"&&Sp()}function rS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Hc(ho)}function sS(n,e){if(n==="click")return Hc(e)}function aS(n,e){if(n==="input"||n==="change")return Hc(e)}function oS(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var si=typeof Object.is=="function"?Object.is:oS;function fo(n,e){if(si(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Mh.call(e,r)||!si(n[r],e[r]))return!1}return!0}function Mp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ep(n,e){var t=Mp(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Mp(t)}}function nv(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?nv(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function iv(){for(var n=window,e=rc();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=rc(n.document)}return e}function Zf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function lS(n){var e=iv(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&nv(t.ownerDocument.documentElement,t)){if(i!==null&&Zf(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Ep(t,s);var a=Ep(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var cS=Fi&&"documentMode"in document&&11>=document.documentMode,Cs=null,Hh=null,Ka=null,Gh=!1;function wp(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Gh||Cs==null||Cs!==rc(i)||(i=Cs,"selectionStart"in i&&Zf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ka&&fo(Ka,i)||(Ka=i,i=hc(Hh,"onSelect"),0<i.length&&(e=new Yf("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Cs)))}function $o(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Rs={animationend:$o("Animation","AnimationEnd"),animationiteration:$o("Animation","AnimationIteration"),animationstart:$o("Animation","AnimationStart"),transitionend:$o("Transition","TransitionEnd")},yu={},rv={};Fi&&(rv=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function Gc(n){if(yu[n])return yu[n];if(!Rs[n])return n;var e=Rs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in rv)return yu[n]=e[t];return n}var sv=Gc("animationend"),av=Gc("animationiteration"),ov=Gc("animationstart"),lv=Gc("transitionend"),cv=new Map,Tp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(n,e){cv.set(n,e),Zr(e,[n])}for(var Su=0;Su<Tp.length;Su++){var Mu=Tp[Su],uS=Mu.toLowerCase(),hS=Mu[0].toUpperCase()+Mu.slice(1);Mr(uS,"on"+hS)}Mr(sv,"onAnimationEnd");Mr(av,"onAnimationIteration");Mr(ov,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(lv,"onTransitionEnd");ia("onMouseEnter",["mouseout","mouseover"]);ia("onMouseLeave",["mouseout","mouseover"]);ia("onPointerEnter",["pointerout","pointerover"]);ia("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wa));function Ap(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,uy(i,e,void 0,n),n.currentTarget=null}function uv(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Ap(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Ap(r,o,c),s=l}}}if(ac)throw n=Oh,ac=!1,Oh=null,n}function ft(n,e){var t=e[qh];t===void 0&&(t=e[qh]=new Set);var i=n+"__bubble";t.has(i)||(hv(e,n,2,!1),t.add(i))}function Eu(n,e,t){var i=0;e&&(i|=4),hv(t,n,i,e)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function po(n){if(!n[Yo]){n[Yo]=!0,_g.forEach(function(t){t!=="selectionchange"&&(fS.has(t)||Eu(t,!1,n),Eu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Yo]||(e[Yo]=!0,Eu("selectionchange",!1,e))}}function hv(n,e,t,i){switch($g(e)){case 1:var r=Ay;break;case 4:r=by;break;default:r=qf}t=r.bind(null,e,t,n),r=void 0,!Fh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function wu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Or(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Ig(function(){var c=s,u=Vf(t),h=[];e:{var d=cv.get(n);if(d!==void 0){var p=Yf,v=n;switch(n){case"keypress":if(jl(t)===0)break e;case"keydown":case"keyup":p=Gy;break;case"focusin":v="focus",p=vu;break;case"focusout":v="blur",p=vu;break;case"beforeblur":case"afterblur":p=vu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Py;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Xy;break;case sv:case av:case ov:p=Ny;break;case lv:p=qy;break;case"scroll":p=Cy;break;case"wheel":p=Yy;break;case"copy":case"cut":case"paste":p=Uy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=gp}var x=(e&4)!==0,m=!x&&n==="scroll",f=x?d!==null?d+"Capture":null:d;x=[];for(var _=c,g;_!==null;){g=_;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,f!==null&&(S=oo(_,f),S!=null&&x.push(mo(_,S,g)))),m)break;_=_.return}0<x.length&&(d=new p(d,v,null,t,u),h.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==Ih&&(v=t.relatedTarget||t.fromElement)&&(Or(v)||v[Oi]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=t.relatedTarget||t.toElement,p=c,v=v?Or(v):null,v!==null&&(m=Qr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=pp,S="onMouseLeave",f="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(x=gp,S="onPointerLeave",f="onPointerEnter",_="pointer"),m=p==null?d:Ps(p),g=v==null?d:Ps(v),d=new x(S,_+"leave",p,t,u),d.target=m,d.relatedTarget=g,S=null,Or(u)===c&&(x=new x(f,_+"enter",v,t,u),x.target=g,x.relatedTarget=m,S=x),m=S,p&&v)t:{for(x=p,f=v,_=0,g=x;g;g=ns(g))_++;for(g=0,S=f;S;S=ns(S))g++;for(;0<_-g;)x=ns(x),_--;for(;0<g-_;)f=ns(f),g--;for(;_--;){if(x===f||f!==null&&x===f.alternate)break t;x=ns(x),f=ns(f)}x=null}else x=null;p!==null&&bp(h,d,p,x,!1),v!==null&&m!==null&&bp(h,m,v,x,!0)}}e:{if(d=c?Ps(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var R=nS;else if(xp(d))if(ev)R=aS;else{R=rS;var E=iS}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=sS);if(R&&(R=R(n,c))){Qg(h,R,t,u);break e}E&&E(n,d,c),n==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&Rh(d,"number",d.value)}switch(E=c?Ps(c):window,n){case"focusin":(xp(E)||E.contentEditable==="true")&&(Cs=E,Hh=c,Ka=null);break;case"focusout":Ka=Hh=Cs=null;break;case"mousedown":Gh=!0;break;case"contextmenu":case"mouseup":case"dragend":Gh=!1,wp(h,t,u);break;case"selectionchange":if(cS)break;case"keydown":case"keyup":wp(h,t,u)}var w;if(Jf)e:{switch(n){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else bs?Jg(n,t)&&(N="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(Kg&&t.locale!=="ko"&&(bs||N!=="onCompositionStart"?N==="onCompositionEnd"&&bs&&(w=Yg()):(tr=u,$f="value"in tr?tr.value:tr.textContent,bs=!0)),E=hc(c,N),0<E.length&&(N=new mp(N,n,null,t,u),h.push({event:N,listeners:E}),w?N.data=w:(w=Zg(t),w!==null&&(N.data=w)))),(w=Jy?Zy(n,t):Qy(n,t))&&(c=hc(c,"onBeforeInput"),0<c.length&&(u=new mp("onBeforeInput","beforeinput",null,t,u),h.push({event:u,listeners:c}),u.data=w))}uv(h,e)})}function mo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function hc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=oo(n,t),s!=null&&i.unshift(mo(n,s,r)),s=oo(n,e),s!=null&&i.push(mo(n,s,r))),n=n.return}return i}function ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function bp(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=oo(t,s),l!=null&&a.unshift(mo(t,l,o))):r||(l=oo(t,s),l!=null&&a.push(mo(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var dS=/\r\n?/g,pS=/\u0000|\uFFFD/g;function Cp(n){return(typeof n=="string"?n:""+n).replace(dS,`
`).replace(pS,"")}function Ko(n,e,t){if(e=Cp(e),Cp(n)!==e&&t)throw Error(fe(425))}function fc(){}var Vh=null,Wh=null;function Xh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jh=typeof setTimeout=="function"?setTimeout:void 0,mS=typeof clearTimeout=="function"?clearTimeout:void 0,Rp=typeof Promise=="function"?Promise:void 0,gS=typeof queueMicrotask=="function"?queueMicrotask:typeof Rp<"u"?function(n){return Rp.resolve(null).then(n).catch(vS)}:jh;function vS(n){setTimeout(function(){throw n})}function Tu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),uo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);uo(e)}function ur(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Pp(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var va=Math.random().toString(36).slice(2),hi="__reactFiber$"+va,go="__reactProps$"+va,Oi="__reactContainer$"+va,qh="__reactEvents$"+va,_S="__reactListeners$"+va,xS="__reactHandles$"+va;function Or(n){var e=n[hi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Oi]||t[hi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Pp(n);n!==null;){if(t=n[hi])return t;n=Pp(n)}return e}n=t,t=n.parentNode}return null}function No(n){return n=n[hi]||n[Oi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ps(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(fe(33))}function Vc(n){return n[go]||null}var $h=[],Ls=-1;function Er(n){return{current:n}}function dt(n){0>Ls||(n.current=$h[Ls],$h[Ls]=null,Ls--)}function ut(n,e){Ls++,$h[Ls]=n.current,n.current=e}var yr={},en=Er(yr),vn=Er(!1),Xr=yr;function ra(n,e){var t=n.type.contextTypes;if(!t)return yr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function _n(n){return n=n.childContextTypes,n!=null}function dc(){dt(vn),dt(en)}function Lp(n,e,t){if(en.current!==yr)throw Error(fe(168));ut(en,e),ut(vn,t)}function fv(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(fe(108,iy(n)||"Unknown",r));return xt({},t,i)}function pc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||yr,Xr=en.current,ut(en,n),ut(vn,vn.current),!0}function Dp(n,e,t){var i=n.stateNode;if(!i)throw Error(fe(169));t?(n=fv(n,e,Xr),i.__reactInternalMemoizedMergedChildContext=n,dt(vn),dt(en),ut(en,n)):dt(vn),ut(vn,t)}var Ti=null,Wc=!1,Au=!1;function dv(n){Ti===null?Ti=[n]:Ti.push(n)}function yS(n){Wc=!0,dv(n)}function wr(){if(!Au&&Ti!==null){Au=!0;var n=0,e=st;try{var t=Ti;for(st=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ti=null,Wc=!1}catch(r){throw Ti!==null&&(Ti=Ti.slice(n+1)),zg(Wf,wr),r}finally{st=e,Au=!1}}return null}var Ds=[],Ns=0,mc=null,gc=0,Fn=[],On=0,jr=null,bi=1,Ci="";function Lr(n,e){Ds[Ns++]=gc,Ds[Ns++]=mc,mc=n,gc=e}function pv(n,e,t){Fn[On++]=bi,Fn[On++]=Ci,Fn[On++]=jr,jr=n;var i=bi;n=Ci;var r=32-ii(i)-1;i&=~(1<<r),t+=1;var s=32-ii(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,bi=1<<32-ii(e)+r|t<<r|i,Ci=s+n}else bi=1<<s|t<<r|i,Ci=n}function Qf(n){n.return!==null&&(Lr(n,1),pv(n,1,0))}function ed(n){for(;n===mc;)mc=Ds[--Ns],Ds[Ns]=null,gc=Ds[--Ns],Ds[Ns]=null;for(;n===jr;)jr=Fn[--On],Fn[On]=null,Ci=Fn[--On],Fn[On]=null,bi=Fn[--On],Fn[On]=null}var Rn=null,Cn=null,pt=!1,Qn=null;function mv(n,e){var t=Gn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Np(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Rn=n,Cn=ur(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Rn=n,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=jr!==null?{id:bi,overflow:Ci}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Gn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Rn=n,Cn=null,!0):!1;default:return!1}}function Yh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Kh(n){if(pt){var e=Cn;if(e){var t=e;if(!Np(n,e)){if(Yh(n))throw Error(fe(418));e=ur(t.nextSibling);var i=Rn;e&&Np(n,e)?mv(i,t):(n.flags=n.flags&-4097|2,pt=!1,Rn=n)}}else{if(Yh(n))throw Error(fe(418));n.flags=n.flags&-4097|2,pt=!1,Rn=n}}}function Ip(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Rn=n}function Jo(n){if(n!==Rn)return!1;if(!pt)return Ip(n),pt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Xh(n.type,n.memoizedProps)),e&&(e=Cn)){if(Yh(n))throw gv(),Error(fe(418));for(;e;)mv(n,e),e=ur(e.nextSibling)}if(Ip(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(fe(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Cn=ur(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Cn=null}}else Cn=Rn?ur(n.stateNode.nextSibling):null;return!0}function gv(){for(var n=Cn;n;)n=ur(n.nextSibling)}function sa(){Cn=Rn=null,pt=!1}function td(n){Qn===null?Qn=[n]:Qn.push(n)}var SS=Hi.ReactCurrentBatchConfig;function ba(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(fe(309));var i=t.stateNode}if(!i)throw Error(fe(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(fe(284));if(!t._owner)throw Error(fe(290,n))}return n}function Zo(n,e){throw n=Object.prototype.toString.call(e),Error(fe(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Up(n){var e=n._init;return e(n._payload)}function vv(n){function e(f,_){if(n){var g=f.deletions;g===null?(f.deletions=[_],f.flags|=16):g.push(_)}}function t(f,_){if(!n)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=pr(f,_),f.index=0,f.sibling=null,f}function s(f,_,g){return f.index=g,n?(g=f.alternate,g!==null?(g=g.index,g<_?(f.flags|=2,_):g):(f.flags|=2,_)):(f.flags|=1048576,_)}function a(f){return n&&f.alternate===null&&(f.flags|=2),f}function o(f,_,g,S){return _===null||_.tag!==6?(_=Nu(g,f.mode,S),_.return=f,_):(_=r(_,g),_.return=f,_)}function l(f,_,g,S){var R=g.type;return R===As?u(f,_,g.props.children,S,g.key):_!==null&&(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ji&&Up(R)===_.type)?(S=r(_,g.props),S.ref=ba(f,_,g),S.return=f,S):(S=Ql(g.type,g.key,g.props,null,f.mode,S),S.ref=ba(f,_,g),S.return=f,S)}function c(f,_,g,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=Iu(g,f.mode,S),_.return=f,_):(_=r(_,g.children||[]),_.return=f,_)}function u(f,_,g,S,R){return _===null||_.tag!==7?(_=Hr(g,f.mode,S,R),_.return=f,_):(_=r(_,g),_.return=f,_)}function h(f,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Nu(""+_,f.mode,g),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ho:return g=Ql(_.type,_.key,_.props,null,f.mode,g),g.ref=ba(f,null,_),g.return=f,g;case Ts:return _=Iu(_,f.mode,g),_.return=f,_;case Ji:var S=_._init;return h(f,S(_._payload),g)}if(Ga(_)||Ma(_))return _=Hr(_,f.mode,g,null),_.return=f,_;Zo(f,_)}return null}function d(f,_,g,S){var R=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return R!==null?null:o(f,_,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ho:return g.key===R?l(f,_,g,S):null;case Ts:return g.key===R?c(f,_,g,S):null;case Ji:return R=g._init,d(f,_,R(g._payload),S)}if(Ga(g)||Ma(g))return R!==null?null:u(f,_,g,S,null);Zo(f,g)}return null}function p(f,_,g,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(g)||null,o(_,f,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ho:return f=f.get(S.key===null?g:S.key)||null,l(_,f,S,R);case Ts:return f=f.get(S.key===null?g:S.key)||null,c(_,f,S,R);case Ji:var E=S._init;return p(f,_,g,E(S._payload),R)}if(Ga(S)||Ma(S))return f=f.get(g)||null,u(_,f,S,R,null);Zo(_,S)}return null}function v(f,_,g,S){for(var R=null,E=null,w=_,N=_=0,M=null;w!==null&&N<g.length;N++){w.index>N?(M=w,w=null):M=w.sibling;var T=d(f,w,g[N],S);if(T===null){w===null&&(w=M);break}n&&w&&T.alternate===null&&e(f,w),_=s(T,_,N),E===null?R=T:E.sibling=T,E=T,w=M}if(N===g.length)return t(f,w),pt&&Lr(f,N),R;if(w===null){for(;N<g.length;N++)w=h(f,g[N],S),w!==null&&(_=s(w,_,N),E===null?R=w:E.sibling=w,E=w);return pt&&Lr(f,N),R}for(w=i(f,w);N<g.length;N++)M=p(w,f,N,g[N],S),M!==null&&(n&&M.alternate!==null&&w.delete(M.key===null?N:M.key),_=s(M,_,N),E===null?R=M:E.sibling=M,E=M);return n&&w.forEach(function(H){return e(f,H)}),pt&&Lr(f,N),R}function x(f,_,g,S){var R=Ma(g);if(typeof R!="function")throw Error(fe(150));if(g=R.call(g),g==null)throw Error(fe(151));for(var E=R=null,w=_,N=_=0,M=null,T=g.next();w!==null&&!T.done;N++,T=g.next()){w.index>N?(M=w,w=null):M=w.sibling;var H=d(f,w,T.value,S);if(H===null){w===null&&(w=M);break}n&&w&&H.alternate===null&&e(f,w),_=s(H,_,N),E===null?R=H:E.sibling=H,E=H,w=M}if(T.done)return t(f,w),pt&&Lr(f,N),R;if(w===null){for(;!T.done;N++,T=g.next())T=h(f,T.value,S),T!==null&&(_=s(T,_,N),E===null?R=T:E.sibling=T,E=T);return pt&&Lr(f,N),R}for(w=i(f,w);!T.done;N++,T=g.next())T=p(w,f,N,T.value,S),T!==null&&(n&&T.alternate!==null&&w.delete(T.key===null?N:T.key),_=s(T,_,N),E===null?R=T:E.sibling=T,E=T);return n&&w.forEach(function(j){return e(f,j)}),pt&&Lr(f,N),R}function m(f,_,g,S){if(typeof g=="object"&&g!==null&&g.type===As&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ho:e:{for(var R=g.key,E=_;E!==null;){if(E.key===R){if(R=g.type,R===As){if(E.tag===7){t(f,E.sibling),_=r(E,g.props.children),_.return=f,f=_;break e}}else if(E.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ji&&Up(R)===E.type){t(f,E.sibling),_=r(E,g.props),_.ref=ba(f,E,g),_.return=f,f=_;break e}t(f,E);break}else e(f,E);E=E.sibling}g.type===As?(_=Hr(g.props.children,f.mode,S,g.key),_.return=f,f=_):(S=Ql(g.type,g.key,g.props,null,f.mode,S),S.ref=ba(f,_,g),S.return=f,f=S)}return a(f);case Ts:e:{for(E=g.key;_!==null;){if(_.key===E)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){t(f,_.sibling),_=r(_,g.children||[]),_.return=f,f=_;break e}else{t(f,_);break}else e(f,_);_=_.sibling}_=Iu(g,f.mode,S),_.return=f,f=_}return a(f);case Ji:return E=g._init,m(f,_,E(g._payload),S)}if(Ga(g))return v(f,_,g,S);if(Ma(g))return x(f,_,g,S);Zo(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(t(f,_.sibling),_=r(_,g),_.return=f,f=_):(t(f,_),_=Nu(g,f.mode,S),_.return=f,f=_),a(f)):t(f,_)}return m}var aa=vv(!0),_v=vv(!1),vc=Er(null),_c=null,Is=null,nd=null;function id(){nd=Is=_c=null}function rd(n){var e=vc.current;dt(vc),n._currentValue=e}function Jh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ks(n,e){_c=n,nd=Is=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(mn=!0),n.firstContext=null)}function Xn(n){var e=n._currentValue;if(nd!==n)if(n={context:n,memoizedValue:e,next:null},Is===null){if(_c===null)throw Error(fe(308));Is=n,_c.dependencies={lanes:0,firstContext:n}}else Is=Is.next=n;return e}var zr=null;function sd(n){zr===null?zr=[n]:zr.push(n)}function xv(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,sd(e)):(t.next=r.next,r.next=t),e.interleaved=t,zi(n,i)}function zi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Zi=!1;function ad(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Li(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,zi(n,t)}return r=i.interleaved,r===null?(e.next=e,sd(i)):(e.next=r.next,r.next=e),i.interleaved=e,zi(n,t)}function ql(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Xf(n,t)}}function Fp(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function xc(n,e,t,i){var r=n.updateQueue;Zi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=n.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,u=c=l=null,o=s;do{var d=o.lane,p=o.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=n,x=o;switch(d=e,p=t,x.tag){case 1:if(v=x.payload,typeof v=="function"){h=v.call(p,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,d=typeof v=="function"?v.call(p,h,d):v,d==null)break e;h=xt({},h,d);break e;case 2:Zi=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);$r|=a,n.lanes=a,n.memoizedState=h}}function Op(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(fe(191,r));r.call(i)}}}var Io={},di=Er(Io),vo=Er(Io),_o=Er(Io);function kr(n){if(n===Io)throw Error(fe(174));return n}function od(n,e){switch(ut(_o,e),ut(vo,n),ut(di,Io),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lh(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Lh(e,n)}dt(di),ut(di,e)}function oa(){dt(di),dt(vo),dt(_o)}function Sv(n){kr(_o.current);var e=kr(di.current),t=Lh(e,n.type);e!==t&&(ut(vo,n),ut(di,t))}function ld(n){vo.current===n&&(dt(di),dt(vo))}var gt=Er(0);function yc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bu=[];function cd(){for(var n=0;n<bu.length;n++)bu[n]._workInProgressVersionPrimary=null;bu.length=0}var $l=Hi.ReactCurrentDispatcher,Cu=Hi.ReactCurrentBatchConfig,qr=0,_t=null,Lt=null,zt=null,Sc=!1,Ja=!1,xo=0,MS=0;function Yt(){throw Error(fe(321))}function ud(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!si(n[t],e[t]))return!1;return!0}function hd(n,e,t,i,r,s){if(qr=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$l.current=n===null||n.memoizedState===null?AS:bS,n=t(i,r),Ja){s=0;do{if(Ja=!1,xo=0,25<=s)throw Error(fe(301));s+=1,zt=Lt=null,e.updateQueue=null,$l.current=CS,n=t(i,r)}while(Ja)}if($l.current=Mc,e=Lt!==null&&Lt.next!==null,qr=0,zt=Lt=_t=null,Sc=!1,e)throw Error(fe(300));return n}function fd(){var n=xo!==0;return xo=0,n}function li(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?_t.memoizedState=zt=n:zt=zt.next=n,zt}function jn(){if(Lt===null){var n=_t.alternate;n=n!==null?n.memoizedState:null}else n=Lt.next;var e=zt===null?_t.memoizedState:zt.next;if(e!==null)zt=e,Lt=n;else{if(n===null)throw Error(fe(310));Lt=n,n={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},zt===null?_t.memoizedState=zt=n:zt=zt.next=n}return zt}function yo(n,e){return typeof e=="function"?e(n):e}function Ru(n){var e=jn(),t=e.queue;if(t===null)throw Error(fe(311));t.lastRenderedReducer=n;var i=Lt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((qr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,_t.lanes|=u,$r|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,si(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,_t.lanes|=s,$r|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Pu(n){var e=jn(),t=e.queue;if(t===null)throw Error(fe(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);si(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Mv(){}function Ev(n,e){var t=_t,i=jn(),r=e(),s=!si(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,dd(Av.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(t.flags|=2048,So(9,Tv.bind(null,t,i,r,e),void 0,null),Gt===null)throw Error(fe(349));qr&30||wv(t,e,r)}return r}function wv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Tv(n,e,t,i){e.value=t,e.getSnapshot=i,bv(e)&&Cv(n)}function Av(n,e,t){return t(function(){bv(e)&&Cv(n)})}function bv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!si(n,t)}catch{return!0}}function Cv(n){var e=zi(n,1);e!==null&&ri(e,n,1,-1)}function zp(n){var e=li();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:n},e.queue=n,n=n.dispatch=TS.bind(null,_t,n),[e.memoizedState,n]}function So(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Rv(){return jn().memoizedState}function Yl(n,e,t,i){var r=li();_t.flags|=n,r.memoizedState=So(1|e,t,void 0,i===void 0?null:i)}function Xc(n,e,t,i){var r=jn();i=i===void 0?null:i;var s=void 0;if(Lt!==null){var a=Lt.memoizedState;if(s=a.destroy,i!==null&&ud(i,a.deps)){r.memoizedState=So(e,t,s,i);return}}_t.flags|=n,r.memoizedState=So(1|e,t,s,i)}function kp(n,e){return Yl(8390656,8,n,e)}function dd(n,e){return Xc(2048,8,n,e)}function Pv(n,e){return Xc(4,2,n,e)}function Lv(n,e){return Xc(4,4,n,e)}function Dv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Nv(n,e,t){return t=t!=null?t.concat([n]):null,Xc(4,4,Dv.bind(null,e,n),t)}function pd(){}function Iv(n,e){var t=jn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&ud(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Uv(n,e){var t=jn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&ud(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Fv(n,e,t){return qr&21?(si(t,e)||(t=Hg(),_t.lanes|=t,$r|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,mn=!0),n.memoizedState=t)}function ES(n,e){var t=st;st=t!==0&&4>t?t:4,n(!0);var i=Cu.transition;Cu.transition={};try{n(!1),e()}finally{st=t,Cu.transition=i}}function Ov(){return jn().memoizedState}function wS(n,e,t){var i=dr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},zv(n))kv(e,t);else if(t=xv(n,e,t,i),t!==null){var r=cn();ri(t,n,i,r),Bv(t,e,i)}}function TS(n,e,t){var i=dr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(zv(n))kv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,si(o,a)){var l=e.interleaved;l===null?(r.next=r,sd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=xv(n,e,r,i),t!==null&&(r=cn(),ri(t,n,i,r),Bv(t,e,i))}}function zv(n){var e=n.alternate;return n===_t||e!==null&&e===_t}function kv(n,e){Ja=Sc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Bv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Xf(n,t)}}var Mc={readContext:Xn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},AS={readContext:Xn,useCallback:function(n,e){return li().memoizedState=[n,e===void 0?null:e],n},useContext:Xn,useEffect:kp,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Yl(4194308,4,Dv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Yl(4194308,4,n,e)},useInsertionEffect:function(n,e){return Yl(4,2,n,e)},useMemo:function(n,e){var t=li();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=li();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=wS.bind(null,_t,n),[i.memoizedState,n]},useRef:function(n){var e=li();return n={current:n},e.memoizedState=n},useState:zp,useDebugValue:pd,useDeferredValue:function(n){return li().memoizedState=n},useTransition:function(){var n=zp(!1),e=n[0];return n=ES.bind(null,n[1]),li().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=_t,r=li();if(pt){if(t===void 0)throw Error(fe(407));t=t()}else{if(t=e(),Gt===null)throw Error(fe(349));qr&30||wv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,kp(Av.bind(null,i,s,n),[n]),i.flags|=2048,So(9,Tv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=li(),e=Gt.identifierPrefix;if(pt){var t=Ci,i=bi;t=(i&~(1<<32-ii(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=xo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=MS++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},bS={readContext:Xn,useCallback:Iv,useContext:Xn,useEffect:dd,useImperativeHandle:Nv,useInsertionEffect:Pv,useLayoutEffect:Lv,useMemo:Uv,useReducer:Ru,useRef:Rv,useState:function(){return Ru(yo)},useDebugValue:pd,useDeferredValue:function(n){var e=jn();return Fv(e,Lt.memoizedState,n)},useTransition:function(){var n=Ru(yo)[0],e=jn().memoizedState;return[n,e]},useMutableSource:Mv,useSyncExternalStore:Ev,useId:Ov,unstable_isNewReconciler:!1},CS={readContext:Xn,useCallback:Iv,useContext:Xn,useEffect:dd,useImperativeHandle:Nv,useInsertionEffect:Pv,useLayoutEffect:Lv,useMemo:Uv,useReducer:Pu,useRef:Rv,useState:function(){return Pu(yo)},useDebugValue:pd,useDeferredValue:function(n){var e=jn();return Lt===null?e.memoizedState=n:Fv(e,Lt.memoizedState,n)},useTransition:function(){var n=Pu(yo)[0],e=jn().memoizedState;return[n,e]},useMutableSource:Mv,useSyncExternalStore:Ev,useId:Ov,unstable_isNewReconciler:!1};function Jn(n,e){if(n&&n.defaultProps){e=xt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Zh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:xt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var jc={isMounted:function(n){return(n=n._reactInternals)?Qr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=cn(),r=dr(n),s=Li(i,r);s.payload=e,t!=null&&(s.callback=t),e=hr(n,s,r),e!==null&&(ri(e,n,r,i),ql(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=cn(),r=dr(n),s=Li(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=hr(n,s,r),e!==null&&(ri(e,n,r,i),ql(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=cn(),i=dr(n),r=Li(t,i);r.tag=2,e!=null&&(r.callback=e),e=hr(n,r,i),e!==null&&(ri(e,n,i,t),ql(e,n,i))}};function Bp(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!fo(t,i)||!fo(r,s):!0}function Hv(n,e,t){var i=!1,r=yr,s=e.contextType;return typeof s=="object"&&s!==null?s=Xn(s):(r=_n(e)?Xr:en.current,i=e.contextTypes,s=(i=i!=null)?ra(n,r):yr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=jc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Hp(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&jc.enqueueReplaceState(e,e.state,null)}function Qh(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},ad(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Xn(s):(s=_n(e)?Xr:en.current,r.context=ra(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&jc.enqueueReplaceState(r,r.state,null),xc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function la(n,e){try{var t="",i=e;do t+=ny(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Lu(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function ef(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var RS=typeof WeakMap=="function"?WeakMap:Map;function Gv(n,e,t){t=Li(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){wc||(wc=!0,hf=i),ef(n,e)},t}function Vv(n,e,t){t=Li(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){ef(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){ef(n,e),typeof i!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function Gp(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new RS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=VS.bind(null,n,e,t),e.then(n,n))}function Vp(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Wp(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Li(-1,1),e.tag=2,hr(t,e,1))),t.lanes|=1),n)}var PS=Hi.ReactCurrentOwner,mn=!1;function on(n,e,t,i){e.child=n===null?_v(e,null,t,i):aa(e,n.child,t,i)}function Xp(n,e,t,i,r){t=t.render;var s=e.ref;return Ks(e,r),i=hd(n,e,t,i,s,r),t=fd(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ki(n,e,r)):(pt&&t&&Qf(e),e.flags|=1,on(n,e,i,r),e.child)}function jp(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Md(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Wv(n,e,s,i,r)):(n=Ql(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:fo,t(a,i)&&n.ref===e.ref)return ki(n,e,r)}return e.flags|=1,n=pr(s,i),n.ref=e.ref,n.return=e,e.child=n}function Wv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(fo(s,i)&&n.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(mn=!0);else return e.lanes=n.lanes,ki(n,e,r)}return tf(n,e,t,i,r)}function Xv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(Fs,An),An|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ut(Fs,An),An|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,ut(Fs,An),An|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,ut(Fs,An),An|=i;return on(n,e,r,t),e.child}function jv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function tf(n,e,t,i,r){var s=_n(t)?Xr:en.current;return s=ra(e,s),Ks(e,r),t=hd(n,e,t,i,s,r),i=fd(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ki(n,e,r)):(pt&&i&&Qf(e),e.flags|=1,on(n,e,t,r),e.child)}function qp(n,e,t,i,r){if(_n(t)){var s=!0;pc(e)}else s=!1;if(Ks(e,r),e.stateNode===null)Kl(n,e),Hv(e,t,i),Qh(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=Xn(c):(c=_n(t)?Xr:en.current,c=ra(e,c));var u=t.getDerivedStateFromProps,h=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Hp(e,a,i,c),Zi=!1;var d=e.memoizedState;a.state=d,xc(e,i,a,r),l=e.memoizedState,o!==i||d!==l||vn.current||Zi?(typeof u=="function"&&(Zh(e,t,u,i),l=e.memoizedState),(o=Zi||Bp(e,t,o,i,d,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,yv(n,e),o=e.memoizedProps,c=e.type===e.elementType?o:Jn(e.type,o),a.props=c,h=e.pendingProps,d=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=Xn(l):(l=_n(t)?Xr:en.current,l=ra(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||d!==l)&&Hp(e,a,i,l),Zi=!1,d=e.memoizedState,a.state=d,xc(e,i,a,r);var v=e.memoizedState;o!==h||d!==v||vn.current||Zi?(typeof p=="function"&&(Zh(e,t,p,i),v=e.memoizedState),(c=Zi||Bp(e,t,c,i,d,v,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return nf(n,e,t,i,s,r)}function nf(n,e,t,i,r,s){jv(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Dp(e,t,!1),ki(n,e,s);i=e.stateNode,PS.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=aa(e,n.child,null,s),e.child=aa(e,null,o,s)):on(n,e,o,s),e.memoizedState=i.state,r&&Dp(e,t,!0),e.child}function qv(n){var e=n.stateNode;e.pendingContext?Lp(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Lp(n,e.context,!1),od(n,e.containerInfo)}function $p(n,e,t,i,r){return sa(),td(r),e.flags|=256,on(n,e,t,i),e.child}var rf={dehydrated:null,treeContext:null,retryLane:0};function sf(n){return{baseLanes:n,cachePool:null,transitions:null}}function $v(n,e,t){var i=e.pendingProps,r=gt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),ut(gt,r&1),n===null)return Kh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Yc(a,i,0,null),n=Hr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=sf(t),e.memoizedState=rf,n):md(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return LS(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=pr(o,s):(s=Hr(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?sf(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=rf,i}return s=n.child,n=s.sibling,i=pr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function md(n,e){return e=Yc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Qo(n,e,t,i){return i!==null&&td(i),aa(e,n.child,null,t),n=md(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function LS(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=Lu(Error(fe(422))),Qo(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Yc({mode:"visible",children:i.children},r,0,null),s=Hr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&aa(e,n.child,null,a),e.child.memoizedState=sf(a),e.memoizedState=rf,s);if(!(e.mode&1))return Qo(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(fe(419)),i=Lu(s,i,void 0),Qo(n,e,a,i)}if(o=(a&n.childLanes)!==0,mn||o){if(i=Gt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,zi(n,r),ri(i,n,r,-1))}return Sd(),i=Lu(Error(fe(421))),Qo(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=WS.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Cn=ur(r.nextSibling),Rn=e,pt=!0,Qn=null,n!==null&&(Fn[On++]=bi,Fn[On++]=Ci,Fn[On++]=jr,bi=n.id,Ci=n.overflow,jr=e),e=md(e,i.children),e.flags|=4096,e)}function Yp(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Jh(n.return,e,t)}function Du(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Yv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(on(n,e,i.children,t),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Yp(n,t,e);else if(n.tag===19)Yp(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ut(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&yc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Du(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&yc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Du(e,!0,t,null,s);break;case"together":Du(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Kl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function ki(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),$r|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(fe(153));if(e.child!==null){for(n=e.child,t=pr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=pr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function DS(n,e,t){switch(e.tag){case 3:qv(e),sa();break;case 5:Sv(e);break;case 1:_n(e.type)&&pc(e);break;case 4:od(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(vc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(gt,gt.current&1),e.flags|=128,null):t&e.child.childLanes?$v(n,e,t):(ut(gt,gt.current&1),n=ki(n,e,t),n!==null?n.sibling:null);ut(gt,gt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Yv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,Xv(n,e,t)}return ki(n,e,t)}var Kv,af,Jv,Zv;Kv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};af=function(){};Jv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,kr(di.current);var s=null;switch(t){case"input":r=bh(n,r),i=bh(n,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=Ph(n,r),i=Ph(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=fc)}Dh(t,i);var a;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(so.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(so.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ft("scroll",n),s||o===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Zv=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ca(n,e){if(!pt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Kt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function NS(n,e,t){var i=e.pendingProps;switch(ed(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(e),null;case 1:return _n(e.type)&&dc(),Kt(e),null;case 3:return i=e.stateNode,oa(),dt(vn),dt(en),cd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Jo(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qn!==null&&(pf(Qn),Qn=null))),af(n,e),Kt(e),null;case 5:ld(e);var r=kr(_o.current);if(t=e.type,n!==null&&e.stateNode!=null)Jv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(fe(166));return Kt(e),null}if(n=kr(di.current),Jo(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[hi]=e,i[go]=s,n=(e.mode&1)!==0,t){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<Wa.length;r++)ft(Wa[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":rp(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":ap(i,s),ft("invalid",i)}Dh(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ko(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ko(i.textContent,o,n),r=["children",""+o]):so.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ft("scroll",i)}switch(t){case"input":Go(i),sp(i,s,!0);break;case"textarea":Go(i),op(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=fc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ag(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[hi]=e,n[go]=i,Kv(n,e,!1,!1),e.stateNode=n;e:{switch(a=Nh(t,i),t){case"dialog":ft("cancel",n),ft("close",n),r=i;break;case"iframe":case"object":case"embed":ft("load",n),r=i;break;case"video":case"audio":for(r=0;r<Wa.length;r++)ft(Wa[r],n);r=i;break;case"source":ft("error",n),r=i;break;case"img":case"image":case"link":ft("error",n),ft("load",n),r=i;break;case"details":ft("toggle",n),r=i;break;case"input":rp(n,i),r=bh(n,i),ft("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ft("invalid",n);break;case"textarea":ap(n,i),r=Ph(n,i),ft("invalid",n);break;default:r=i}Dh(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Rg(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&bg(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ao(n,l):typeof l=="number"&&ao(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(so.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ft("scroll",n):l!=null&&kf(n,s,l,a))}switch(t){case"input":Go(n),sp(n,i,!1);break;case"textarea":Go(n),op(n);break;case"option":i.value!=null&&n.setAttribute("value",""+xr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?js(n,!!i.multiple,s,!1):i.defaultValue!=null&&js(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=fc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Kt(e),null;case 6:if(n&&e.stateNode!=null)Zv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(fe(166));if(t=kr(_o.current),kr(di.current),Jo(e)){if(i=e.stateNode,t=e.memoizedProps,i[hi]=e,(s=i.nodeValue!==t)&&(n=Rn,n!==null))switch(n.tag){case 3:Ko(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ko(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[hi]=e,e.stateNode=i}return Kt(e),null;case 13:if(dt(gt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(pt&&Cn!==null&&e.mode&1&&!(e.flags&128))gv(),sa(),e.flags|=98560,s=!1;else if(s=Jo(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(fe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(fe(317));s[hi]=e}else sa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Kt(e),s=!1}else Qn!==null&&(pf(Qn),Qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||gt.current&1?Dt===0&&(Dt=3):Sd())),e.updateQueue!==null&&(e.flags|=4),Kt(e),null);case 4:return oa(),af(n,e),n===null&&po(e.stateNode.containerInfo),Kt(e),null;case 10:return rd(e.type._context),Kt(e),null;case 17:return _n(e.type)&&dc(),Kt(e),null;case 19:if(dt(gt),s=e.memoizedState,s===null)return Kt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ca(s,!1);else{if(Dt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=yc(n),a!==null){for(e.flags|=128,Ca(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ut(gt,gt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Tt()>ca&&(e.flags|=128,i=!0,Ca(s,!1),e.lanes=4194304)}else{if(!i)if(n=yc(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ca(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!pt)return Kt(e),null}else 2*Tt()-s.renderingStartTime>ca&&t!==1073741824&&(e.flags|=128,i=!0,Ca(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,t=gt.current,ut(gt,i?t&1|2:t&1),e):(Kt(e),null);case 22:case 23:return yd(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&(Kt(e),e.subtreeFlags&6&&(e.flags|=8192)):Kt(e),null;case 24:return null;case 25:return null}throw Error(fe(156,e.tag))}function IS(n,e){switch(ed(e),e.tag){case 1:return _n(e.type)&&dc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return oa(),dt(vn),dt(en),cd(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return ld(e),null;case 13:if(dt(gt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(fe(340));sa()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return dt(gt),null;case 4:return oa(),null;case 10:return rd(e.type._context),null;case 22:case 23:return yd(),null;case 24:return null;default:return null}}var el=!1,Qt=!1,US=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function Us(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Mt(n,e,i)}else t.current=null}function of(n,e,t){try{t()}catch(i){Mt(n,e,i)}}var Kp=!1;function FS(n,e){if(Vh=cc,n=iv(),Zf(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,c=0,u=0,h=n,d=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===n)break t;if(d===t&&++c===r&&(o=a),d===s&&++u===i&&(l=a),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Wh={focusedElem:n,selectionRange:t},cc=!1,Pe=e;Pe!==null;)if(e=Pe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Pe=n;else for(;Pe!==null;){e=Pe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:Jn(e.type,x),m);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(fe(163))}}catch(S){Mt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Pe=n;break}Pe=e.return}return v=Kp,Kp=!1,v}function Za(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&of(e,t,s)}r=r.next}while(r!==i)}}function qc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function lf(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Qv(n){var e=n.alternate;e!==null&&(n.alternate=null,Qv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[hi],delete e[go],delete e[qh],delete e[_S],delete e[xS])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function e_(n){return n.tag===5||n.tag===3||n.tag===4}function Jp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||e_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function cf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=fc));else if(i!==4&&(n=n.child,n!==null))for(cf(n,e,t),n=n.sibling;n!==null;)cf(n,e,t),n=n.sibling}function uf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(uf(n,e,t),n=n.sibling;n!==null;)uf(n,e,t),n=n.sibling}var Vt=null,Zn=!1;function Vi(n,e,t){for(t=t.child;t!==null;)t_(n,e,t),t=t.sibling}function t_(n,e,t){if(fi&&typeof fi.onCommitFiberUnmount=="function")try{fi.onCommitFiberUnmount(kc,t)}catch{}switch(t.tag){case 5:Qt||Us(t,e);case 6:var i=Vt,r=Zn;Vt=null,Vi(n,e,t),Vt=i,Zn=r,Vt!==null&&(Zn?(n=Vt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Vt.removeChild(t.stateNode));break;case 18:Vt!==null&&(Zn?(n=Vt,t=t.stateNode,n.nodeType===8?Tu(n.parentNode,t):n.nodeType===1&&Tu(n,t),uo(n)):Tu(Vt,t.stateNode));break;case 4:i=Vt,r=Zn,Vt=t.stateNode.containerInfo,Zn=!0,Vi(n,e,t),Vt=i,Zn=r;break;case 0:case 11:case 14:case 15:if(!Qt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&of(t,e,a),r=r.next}while(r!==i)}Vi(n,e,t);break;case 1:if(!Qt&&(Us(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){Mt(t,e,o)}Vi(n,e,t);break;case 21:Vi(n,e,t);break;case 22:t.mode&1?(Qt=(i=Qt)||t.memoizedState!==null,Vi(n,e,t),Qt=i):Vi(n,e,t);break;default:Vi(n,e,t)}}function Zp(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new US),e.forEach(function(i){var r=XS.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function qn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Vt=o.stateNode,Zn=!1;break e;case 3:Vt=o.stateNode.containerInfo,Zn=!0;break e;case 4:Vt=o.stateNode.containerInfo,Zn=!0;break e}o=o.return}if(Vt===null)throw Error(fe(160));t_(s,a,r),Vt=null,Zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)n_(e,n),e=e.sibling}function n_(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(qn(e,n),oi(n),i&4){try{Za(3,n,n.return),qc(3,n)}catch(x){Mt(n,n.return,x)}try{Za(5,n,n.return)}catch(x){Mt(n,n.return,x)}}break;case 1:qn(e,n),oi(n),i&512&&t!==null&&Us(t,t.return);break;case 5:if(qn(e,n),oi(n),i&512&&t!==null&&Us(t,t.return),n.flags&32){var r=n.stateNode;try{ao(r,"")}catch(x){Mt(n,n.return,x)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&wg(r,s),Nh(o,a);var c=Nh(o,s);for(a=0;a<l.length;a+=2){var u=l[a],h=l[a+1];u==="style"?Rg(r,h):u==="dangerouslySetInnerHTML"?bg(r,h):u==="children"?ao(r,h):kf(r,u,h,c)}switch(o){case"input":Ch(r,s);break;case"textarea":Tg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?js(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?js(r,!!s.multiple,s.defaultValue,!0):js(r,!!s.multiple,s.multiple?[]:"",!1))}r[go]=s}catch(x){Mt(n,n.return,x)}}break;case 6:if(qn(e,n),oi(n),i&4){if(n.stateNode===null)throw Error(fe(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(x){Mt(n,n.return,x)}}break;case 3:if(qn(e,n),oi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{uo(e.containerInfo)}catch(x){Mt(n,n.return,x)}break;case 4:qn(e,n),oi(n);break;case 13:qn(e,n),oi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(_d=Tt())),i&4&&Zp(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(Qt=(c=Qt)||u,qn(e,n),Qt=c):qn(e,n),oi(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(Pe=n,u=n.child;u!==null;){for(h=Pe=u;Pe!==null;){switch(d=Pe,p=d.child,d.tag){case 0:case 11:case 14:case 15:Za(4,d,d.return);break;case 1:Us(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){Mt(i,t,x)}}break;case 5:Us(d,d.return);break;case 22:if(d.memoizedState!==null){em(h);continue}}p!==null?(p.return=d,Pe=p):em(h)}u=u.sibling}e:for(u=null,h=n;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Cg("display",a))}catch(x){Mt(n,n.return,x)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){Mt(n,n.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:qn(e,n),oi(n),i&4&&Zp(n);break;case 21:break;default:qn(e,n),oi(n)}}function oi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(e_(t)){var i=t;break e}t=t.return}throw Error(fe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ao(r,""),i.flags&=-33);var s=Jp(n);uf(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Jp(n);cf(n,o,a);break;default:throw Error(fe(161))}}catch(l){Mt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function OS(n,e,t){Pe=n,i_(n)}function i_(n,e,t){for(var i=(n.mode&1)!==0;Pe!==null;){var r=Pe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||el;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Qt;o=el;var c=Qt;if(el=a,(Qt=l)&&!c)for(Pe=r;Pe!==null;)a=Pe,l=a.child,a.tag===22&&a.memoizedState!==null?tm(r):l!==null?(l.return=a,Pe=l):tm(r);for(;s!==null;)Pe=s,i_(s),s=s.sibling;Pe=r,el=o,Qt=c}Qp(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Pe=s):Qp(n)}}function Qp(n){for(;Pe!==null;){var e=Pe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qt||qc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Qt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Jn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Op(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Op(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&uo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(fe(163))}Qt||e.flags&512&&lf(e)}catch(d){Mt(e,e.return,d)}}if(e===n){Pe=null;break}if(t=e.sibling,t!==null){t.return=e.return,Pe=t;break}Pe=e.return}}function em(n){for(;Pe!==null;){var e=Pe;if(e===n){Pe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Pe=t;break}Pe=e.return}}function tm(n){for(;Pe!==null;){var e=Pe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{qc(4,e)}catch(l){Mt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{lf(e)}catch(l){Mt(e,s,l)}break;case 5:var a=e.return;try{lf(e)}catch(l){Mt(e,a,l)}}}catch(l){Mt(e,e.return,l)}if(e===n){Pe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Pe=o;break}Pe=e.return}}var zS=Math.ceil,Ec=Hi.ReactCurrentDispatcher,gd=Hi.ReactCurrentOwner,Vn=Hi.ReactCurrentBatchConfig,et=0,Gt=null,Rt=null,jt=0,An=0,Fs=Er(0),Dt=0,Mo=null,$r=0,$c=0,vd=0,Qa=null,pn=null,_d=0,ca=1/0,Ei=null,wc=!1,hf=null,fr=null,tl=!1,nr=null,Tc=0,eo=0,ff=null,Jl=-1,Zl=0;function cn(){return et&6?Tt():Jl!==-1?Jl:Jl=Tt()}function dr(n){return n.mode&1?et&2&&jt!==0?jt&-jt:SS.transition!==null?(Zl===0&&(Zl=Hg()),Zl):(n=st,n!==0||(n=window.event,n=n===void 0?16:$g(n.type)),n):1}function ri(n,e,t,i){if(50<eo)throw eo=0,ff=null,Error(fe(185));Lo(n,t,i),(!(et&2)||n!==Gt)&&(n===Gt&&(!(et&2)&&($c|=t),Dt===4&&er(n,jt)),xn(n,i),t===1&&et===0&&!(e.mode&1)&&(ca=Tt()+500,Wc&&wr()))}function xn(n,e){var t=n.callbackNode;Sy(n,e);var i=lc(n,n===Gt?jt:0);if(i===0)t!==null&&up(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&up(t),e===1)n.tag===0?yS(nm.bind(null,n)):dv(nm.bind(null,n)),gS(function(){!(et&6)&&wr()}),t=null;else{switch(Gg(i)){case 1:t=Wf;break;case 4:t=kg;break;case 16:t=oc;break;case 536870912:t=Bg;break;default:t=oc}t=h_(t,r_.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function r_(n,e){if(Jl=-1,Zl=0,et&6)throw Error(fe(327));var t=n.callbackNode;if(Js()&&n.callbackNode!==t)return null;var i=lc(n,n===Gt?jt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Ac(n,i);else{e=i;var r=et;et|=2;var s=a_();(Gt!==n||jt!==e)&&(Ei=null,ca=Tt()+500,Br(n,e));do try{HS();break}catch(o){s_(n,o)}while(!0);id(),Ec.current=s,et=r,Rt!==null?e=0:(Gt=null,jt=0,e=Dt)}if(e!==0){if(e===2&&(r=zh(n),r!==0&&(i=r,e=df(n,r))),e===1)throw t=Mo,Br(n,0),er(n,i),xn(n,Tt()),t;if(e===6)er(n,i);else{if(r=n.current.alternate,!(i&30)&&!kS(r)&&(e=Ac(n,i),e===2&&(s=zh(n),s!==0&&(i=s,e=df(n,s))),e===1))throw t=Mo,Br(n,0),er(n,i),xn(n,Tt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(fe(345));case 2:Dr(n,pn,Ei);break;case 3:if(er(n,i),(i&130023424)===i&&(e=_d+500-Tt(),10<e)){if(lc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){cn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=jh(Dr.bind(null,n,pn,Ei),e);break}Dr(n,pn,Ei);break;case 4:if(er(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-ii(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*zS(i/1960))-i,10<i){n.timeoutHandle=jh(Dr.bind(null,n,pn,Ei),i);break}Dr(n,pn,Ei);break;case 5:Dr(n,pn,Ei);break;default:throw Error(fe(329))}}}return xn(n,Tt()),n.callbackNode===t?r_.bind(null,n):null}function df(n,e){var t=Qa;return n.current.memoizedState.isDehydrated&&(Br(n,e).flags|=256),n=Ac(n,e),n!==2&&(e=pn,pn=t,e!==null&&pf(e)),n}function pf(n){pn===null?pn=n:pn.push.apply(pn,n)}function kS(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!si(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(n,e){for(e&=~vd,e&=~$c,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ii(e),i=1<<t;n[t]=-1,e&=~i}}function nm(n){if(et&6)throw Error(fe(327));Js();var e=lc(n,0);if(!(e&1))return xn(n,Tt()),null;var t=Ac(n,e);if(n.tag!==0&&t===2){var i=zh(n);i!==0&&(e=i,t=df(n,i))}if(t===1)throw t=Mo,Br(n,0),er(n,e),xn(n,Tt()),t;if(t===6)throw Error(fe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Dr(n,pn,Ei),xn(n,Tt()),null}function xd(n,e){var t=et;et|=1;try{return n(e)}finally{et=t,et===0&&(ca=Tt()+500,Wc&&wr())}}function Yr(n){nr!==null&&nr.tag===0&&!(et&6)&&Js();var e=et;et|=1;var t=Vn.transition,i=st;try{if(Vn.transition=null,st=1,n)return n()}finally{st=i,Vn.transition=t,et=e,!(et&6)&&wr()}}function yd(){An=Fs.current,dt(Fs)}function Br(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,mS(t)),Rt!==null)for(t=Rt.return;t!==null;){var i=t;switch(ed(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&dc();break;case 3:oa(),dt(vn),dt(en),cd();break;case 5:ld(i);break;case 4:oa();break;case 13:dt(gt);break;case 19:dt(gt);break;case 10:rd(i.type._context);break;case 22:case 23:yd()}t=t.return}if(Gt=n,Rt=n=pr(n.current,null),jt=An=e,Dt=0,Mo=null,vd=$c=$r=0,pn=Qa=null,zr!==null){for(e=0;e<zr.length;e++)if(t=zr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}zr=null}return n}function s_(n,e){do{var t=Rt;try{if(id(),$l.current=Mc,Sc){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Sc=!1}if(qr=0,zt=Lt=_t=null,Ja=!1,xo=0,gd.current=null,t===null||t.return===null){Dt=1,Mo=e,Rt=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=jt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Vp(a);if(p!==null){p.flags&=-257,Wp(p,a,o,s,e),p.mode&1&&Gp(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){Gp(s,c,e),Sd();break e}l=Error(fe(426))}}else if(pt&&o.mode&1){var m=Vp(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Wp(m,a,o,s,e),td(la(l,o));break e}}s=l=la(l,o),Dt!==4&&(Dt=2),Qa===null?Qa=[s]:Qa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Gv(s,l,e);Fp(s,f);break e;case 1:o=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(fr===null||!fr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Vv(s,o,e);Fp(s,S);break e}}s=s.return}while(s!==null)}l_(t)}catch(R){e=R,Rt===t&&t!==null&&(Rt=t=t.return);continue}break}while(!0)}function a_(){var n=Ec.current;return Ec.current=Mc,n===null?Mc:n}function Sd(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),Gt===null||!($r&268435455)&&!($c&268435455)||er(Gt,jt)}function Ac(n,e){var t=et;et|=2;var i=a_();(Gt!==n||jt!==e)&&(Ei=null,Br(n,e));do try{BS();break}catch(r){s_(n,r)}while(!0);if(id(),et=t,Ec.current=i,Rt!==null)throw Error(fe(261));return Gt=null,jt=0,Dt}function BS(){for(;Rt!==null;)o_(Rt)}function HS(){for(;Rt!==null&&!fy();)o_(Rt)}function o_(n){var e=u_(n.alternate,n,An);n.memoizedProps=n.pendingProps,e===null?l_(n):Rt=e,gd.current=null}function l_(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=IS(t,e),t!==null){t.flags&=32767,Rt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Dt=6,Rt=null;return}}else if(t=NS(t,e,An),t!==null){Rt=t;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=n}while(e!==null);Dt===0&&(Dt=5)}function Dr(n,e,t){var i=st,r=Vn.transition;try{Vn.transition=null,st=1,GS(n,e,t,i)}finally{Vn.transition=r,st=i}return null}function GS(n,e,t,i){do Js();while(nr!==null);if(et&6)throw Error(fe(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(fe(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(My(n,s),n===Gt&&(Rt=Gt=null,jt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||tl||(tl=!0,h_(oc,function(){return Js(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Vn.transition,Vn.transition=null;var a=st;st=1;var o=et;et|=4,gd.current=null,FS(n,t),n_(t,n),lS(Wh),cc=!!Vh,Wh=Vh=null,n.current=t,OS(t),dy(),et=o,st=a,Vn.transition=s}else n.current=t;if(tl&&(tl=!1,nr=n,Tc=r),s=n.pendingLanes,s===0&&(fr=null),gy(t.stateNode),xn(n,Tt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(wc)throw wc=!1,n=hf,hf=null,n;return Tc&1&&n.tag!==0&&Js(),s=n.pendingLanes,s&1?n===ff?eo++:(eo=0,ff=n):eo=0,wr(),null}function Js(){if(nr!==null){var n=Gg(Tc),e=Vn.transition,t=st;try{if(Vn.transition=null,st=16>n?16:n,nr===null)var i=!1;else{if(n=nr,nr=null,Tc=0,et&6)throw Error(fe(331));var r=et;for(et|=4,Pe=n.current;Pe!==null;){var s=Pe,a=s.child;if(Pe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Pe=c;Pe!==null;){var u=Pe;switch(u.tag){case 0:case 11:case 15:Za(8,u,s)}var h=u.child;if(h!==null)h.return=u,Pe=h;else for(;Pe!==null;){u=Pe;var d=u.sibling,p=u.return;if(Qv(u),u===c){Pe=null;break}if(d!==null){d.return=p,Pe=d;break}Pe=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}Pe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Pe=a;else e:for(;Pe!==null;){if(s=Pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Za(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Pe=f;break e}Pe=s.return}}var _=n.current;for(Pe=_;Pe!==null;){a=Pe;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,Pe=g;else e:for(a=_;Pe!==null;){if(o=Pe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:qc(9,o)}}catch(R){Mt(o,o.return,R)}if(o===a){Pe=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Pe=S;break e}Pe=o.return}}if(et=r,wr(),fi&&typeof fi.onPostCommitFiberRoot=="function")try{fi.onPostCommitFiberRoot(kc,n)}catch{}i=!0}return i}finally{st=t,Vn.transition=e}}return!1}function im(n,e,t){e=la(t,e),e=Gv(n,e,1),n=hr(n,e,1),e=cn(),n!==null&&(Lo(n,1,e),xn(n,e))}function Mt(n,e,t){if(n.tag===3)im(n,n,t);else for(;e!==null;){if(e.tag===3){im(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fr===null||!fr.has(i))){n=la(t,n),n=Vv(e,n,1),e=hr(e,n,1),n=cn(),e!==null&&(Lo(e,1,n),xn(e,n));break}}e=e.return}}function VS(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=cn(),n.pingedLanes|=n.suspendedLanes&t,Gt===n&&(jt&t)===t&&(Dt===4||Dt===3&&(jt&130023424)===jt&&500>Tt()-_d?Br(n,0):vd|=t),xn(n,e)}function c_(n,e){e===0&&(n.mode&1?(e=Xo,Xo<<=1,!(Xo&130023424)&&(Xo=4194304)):e=1);var t=cn();n=zi(n,e),n!==null&&(Lo(n,e,t),xn(n,t))}function WS(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),c_(n,t)}function XS(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(fe(314))}i!==null&&i.delete(e),c_(n,t)}var u_;u_=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||vn.current)mn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return mn=!1,DS(n,e,t);mn=!!(n.flags&131072)}else mn=!1,pt&&e.flags&1048576&&pv(e,gc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Kl(n,e),n=e.pendingProps;var r=ra(e,en.current);Ks(e,t),r=hd(null,e,i,n,r,t);var s=fd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,pc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ad(e),r.updater=jc,e.stateNode=r,r._reactInternals=e,Qh(e,i,n,t),e=nf(null,e,i,!0,s,t)):(e.tag=0,pt&&s&&Qf(e),on(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Kl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=qS(i),n=Jn(i,n),r){case 0:e=tf(null,e,i,n,t);break e;case 1:e=qp(null,e,i,n,t);break e;case 11:e=Xp(null,e,i,n,t);break e;case 14:e=jp(null,e,i,Jn(i.type,n),t);break e}throw Error(fe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),tf(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),qp(n,e,i,r,t);case 3:e:{if(qv(e),n===null)throw Error(fe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,yv(n,e),xc(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=la(Error(fe(423)),e),e=$p(n,e,i,t,r);break e}else if(i!==r){r=la(Error(fe(424)),e),e=$p(n,e,i,t,r);break e}else for(Cn=ur(e.stateNode.containerInfo.firstChild),Rn=e,pt=!0,Qn=null,t=_v(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(sa(),i===r){e=ki(n,e,t);break e}on(n,e,i,t)}e=e.child}return e;case 5:return Sv(e),n===null&&Kh(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,Xh(i,r)?a=null:s!==null&&Xh(i,s)&&(e.flags|=32),jv(n,e),on(n,e,a,t),e.child;case 6:return n===null&&Kh(e),null;case 13:return $v(n,e,t);case 4:return od(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=aa(e,null,i,t):on(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),Xp(n,e,i,r,t);case 7:return on(n,e,e.pendingProps,t),e.child;case 8:return on(n,e,e.pendingProps.children,t),e.child;case 12:return on(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ut(vc,i._currentValue),i._currentValue=a,s!==null)if(si(s.value,a)){if(s.children===r.children&&!vn.current){e=ki(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Li(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Jh(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(fe(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),Jh(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}on(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ks(e,t),r=Xn(r),i=i(r),e.flags|=1,on(n,e,i,t),e.child;case 14:return i=e.type,r=Jn(i,e.pendingProps),r=Jn(i.type,r),jp(n,e,i,r,t);case 15:return Wv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),Kl(n,e),e.tag=1,_n(i)?(n=!0,pc(e)):n=!1,Ks(e,t),Hv(e,i,r),Qh(e,i,r,t),nf(null,e,i,!0,n,t);case 19:return Yv(n,e,t);case 22:return Xv(n,e,t)}throw Error(fe(156,e.tag))};function h_(n,e){return zg(n,e)}function jS(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(n,e,t,i){return new jS(n,e,t,i)}function Md(n){return n=n.prototype,!(!n||!n.isReactComponent)}function qS(n){if(typeof n=="function")return Md(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Hf)return 11;if(n===Gf)return 14}return 2}function pr(n,e){var t=n.alternate;return t===null?(t=Gn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ql(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")Md(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case As:return Hr(t.children,r,s,e);case Bf:a=8,r|=8;break;case Eh:return n=Gn(12,t,e,r|2),n.elementType=Eh,n.lanes=s,n;case wh:return n=Gn(13,t,e,r),n.elementType=wh,n.lanes=s,n;case Th:return n=Gn(19,t,e,r),n.elementType=Th,n.lanes=s,n;case Sg:return Yc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case xg:a=10;break e;case yg:a=9;break e;case Hf:a=11;break e;case Gf:a=14;break e;case Ji:a=16,i=null;break e}throw Error(fe(130,n==null?n:typeof n,""))}return e=Gn(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Hr(n,e,t,i){return n=Gn(7,n,i,e),n.lanes=t,n}function Yc(n,e,t,i){return n=Gn(22,n,i,e),n.elementType=Sg,n.lanes=t,n.stateNode={isHidden:!1},n}function Nu(n,e,t){return n=Gn(6,n,null,e),n.lanes=t,n}function Iu(n,e,t){return e=Gn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function $S(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pu(0),this.expirationTimes=pu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ed(n,e,t,i,r,s,a,o,l){return n=new $S(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ad(s),n}function YS(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ts,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function f_(n){if(!n)return yr;n=n._reactInternals;e:{if(Qr(n)!==n||n.tag!==1)throw Error(fe(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(fe(171))}if(n.tag===1){var t=n.type;if(_n(t))return fv(n,t,e)}return e}function d_(n,e,t,i,r,s,a,o,l){return n=Ed(t,i,!0,n,r,s,a,o,l),n.context=f_(null),t=n.current,i=cn(),r=dr(t),s=Li(i,r),s.callback=e??null,hr(t,s,r),n.current.lanes=r,Lo(n,r,i),xn(n,i),n}function Kc(n,e,t,i){var r=e.current,s=cn(),a=dr(r);return t=f_(t),e.context===null?e.context=t:e.pendingContext=t,e=Li(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=hr(r,e,a),n!==null&&(ri(n,r,a,s),ql(n,r,a)),a}function bc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function rm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function wd(n,e){rm(n,e),(n=n.alternate)&&rm(n,e)}function KS(){return null}var p_=typeof reportError=="function"?reportError:function(n){console.error(n)};function Td(n){this._internalRoot=n}Jc.prototype.render=Td.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(fe(409));Kc(n,e,null,null)};Jc.prototype.unmount=Td.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Yr(function(){Kc(null,n,null,null)}),e[Oi]=null}};function Jc(n){this._internalRoot=n}Jc.prototype.unstable_scheduleHydration=function(n){if(n){var e=Xg();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Qi.length&&e!==0&&e<Qi[t].priority;t++);Qi.splice(t,0,n),t===0&&qg(n)}};function Ad(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Zc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function sm(){}function JS(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=bc(a);s.call(c)}}var a=d_(e,i,n,0,null,!1,!1,"",sm);return n._reactRootContainer=a,n[Oi]=a.current,po(n.nodeType===8?n.parentNode:n),Yr(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=bc(l);o.call(c)}}var l=Ed(n,0,!1,null,null,!1,!1,"",sm);return n._reactRootContainer=l,n[Oi]=l.current,po(n.nodeType===8?n.parentNode:n),Yr(function(){Kc(e,l,t,i)}),l}function Qc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=bc(a);o.call(l)}}Kc(e,a,n,r)}else a=JS(t,e,n,r,i);return bc(a)}Vg=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Va(e.pendingLanes);t!==0&&(Xf(e,t|1),xn(e,Tt()),!(et&6)&&(ca=Tt()+500,wr()))}break;case 13:Yr(function(){var i=zi(n,1);if(i!==null){var r=cn();ri(i,n,1,r)}}),wd(n,1)}};jf=function(n){if(n.tag===13){var e=zi(n,134217728);if(e!==null){var t=cn();ri(e,n,134217728,t)}wd(n,134217728)}};Wg=function(n){if(n.tag===13){var e=dr(n),t=zi(n,e);if(t!==null){var i=cn();ri(t,n,e,i)}wd(n,e)}};Xg=function(){return st};jg=function(n,e){var t=st;try{return st=n,e()}finally{st=t}};Uh=function(n,e,t){switch(e){case"input":if(Ch(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Vc(i);if(!r)throw Error(fe(90));Eg(i),Ch(i,r)}}}break;case"textarea":Tg(n,t);break;case"select":e=t.value,e!=null&&js(n,!!t.multiple,e,!1)}};Dg=xd;Ng=Yr;var ZS={usingClientEntryPoint:!1,Events:[No,Ps,Vc,Pg,Lg,xd]},Ra={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},QS={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Fg(n),n===null?null:n.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||KS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{kc=nl.inject(QS),fi=nl}catch{}}Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZS;Dn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ad(e))throw Error(fe(200));return YS(n,e,null,t)};Dn.createRoot=function(n,e){if(!Ad(n))throw Error(fe(299));var t=!1,i="",r=p_;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ed(n,1,!1,null,null,t,!1,i,r),n[Oi]=e.current,po(n.nodeType===8?n.parentNode:n),new Td(e)};Dn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(fe(188)):(n=Object.keys(n).join(","),Error(fe(268,n)));return n=Fg(e),n=n===null?null:n.stateNode,n};Dn.flushSync=function(n){return Yr(n)};Dn.hydrate=function(n,e,t){if(!Zc(e))throw Error(fe(200));return Qc(null,n,e,!0,t)};Dn.hydrateRoot=function(n,e,t){if(!Ad(n))throw Error(fe(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=p_;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=d_(e,null,n,1,t??null,r,!1,s,a),n[Oi]=e.current,po(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Jc(e)};Dn.render=function(n,e,t){if(!Zc(e))throw Error(fe(200));return Qc(null,n,e,!1,t)};Dn.unmountComponentAtNode=function(n){if(!Zc(n))throw Error(fe(40));return n._reactRootContainer?(Yr(function(){Qc(null,null,n,!1,function(){n._reactRootContainer=null,n[Oi]=null})}),!0):!1};Dn.unstable_batchedUpdates=xd;Dn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Zc(t))throw Error(fe(200));if(n==null||n._reactInternals===void 0)throw Error(fe(38));return Qc(n,e,t,!1,i)};Dn.version="18.3.1-next-f1338f8080-20240426";function m_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m_)}catch(n){console.error(n)}}m_(),mg.exports=Dn;var eM=mg.exports,g_,am=eM;g_=am.createRoot,am.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bd="160",tM=0,om=1,nM=2,v_=1,__=2,Mi=3,Sr=0,un=1,Xt=2,Di=0,Zs=1,Qs=2,lm=3,cm=4,iM=5,Ur=100,rM=101,sM=102,um=103,hm=104,aM=200,oM=201,lM=202,cM=203,mf=204,gf=205,uM=206,hM=207,fM=208,dM=209,pM=210,mM=211,gM=212,vM=213,_M=214,xM=0,yM=1,SM=2,Cc=3,MM=4,EM=5,wM=6,TM=7,Cd=0,AM=1,bM=2,mr=0,x_=1,y_=2,S_=3,Rd=4,CM=5,M_=6,E_=300,ua=301,ha=302,vf=303,_f=304,eu=306,Rc=1e3,ei=1001,xf=1002,ln=1003,fm=1004,Uu=1005,zn=1006,RM=1007,Kr=1008,gr=1009,PM=1010,LM=1011,Pd=1012,w_=1013,ir=1014,rr=1015,pi=1016,T_=1017,A_=1018,Gr=1020,DM=1021,ti=1023,NM=1024,IM=1025,Vr=1026,fa=1027,UM=1028,b_=1029,FM=1030,C_=1031,R_=1033,Fu=33776,Ou=33777,zu=33778,ku=33779,dm=35840,pm=35841,mm=35842,gm=35843,P_=36196,vm=37492,_m=37496,xm=37808,ym=37809,Sm=37810,Mm=37811,Em=37812,wm=37813,Tm=37814,Am=37815,bm=37816,Cm=37817,Rm=37818,Pm=37819,Lm=37820,Dm=37821,Bu=36492,Nm=36494,Im=36495,OM=36283,Um=36284,Fm=36285,Om=36286,L_=3e3,Wr=3001,zM=3200,kM=3201,Ld=0,BM=1,Bn="",kt="srgb",Bi="srgb-linear",Dd="display-p3",tu="display-p3-linear",Pc="linear",ct="srgb",Lc="rec709",Dc="p3",is=7680,zm=519,HM=512,GM=513,VM=514,D_=515,WM=516,XM=517,jM=518,qM=519,yf=35044,km="300 es",Sf=1035,Ri=2e3,Nc=2001;class _a{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ec=Math.PI/180,Mf=180/Math.PI;function Ni(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function Bt(n,e,t){return Math.max(e,Math.min(t,n))}function $M(n,e){return(n%e+e)%e}function Hu(n,e,t){return(1-t)*n+t*e}function Bm(n){return(n&n-1)===0&&n!==0}function Ef(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ai(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,i,r,s,a,o,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],v=i[8],x=r[0],m=r[3],f=r[6],_=r[1],g=r[4],S=r[7],R=r[2],E=r[5],w=r[8];return s[0]=a*x+o*_+l*R,s[3]=a*m+o*g+l*E,s[6]=a*f+o*S+l*w,s[1]=c*x+u*_+h*R,s[4]=c*m+u*g+h*E,s[7]=c*f+u*S+h*w,s[2]=d*x+p*_+v*R,s[5]=d*m+p*g+v*E,s[8]=d*f+p*S+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,p=c*s-a*l,v=t*h+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=h*x,e[1]=(r*c-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=d*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Gu.makeScale(e,t)),this}rotate(e){return this.premultiply(Gu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gu=new Ke;function N_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ic(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function YM(){const n=Ic("canvas");return n.style.display="block",n}const Hm={};function to(n){n in Hm||(Hm[n]=!0,console.warn(n))}const Gm=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vm=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),il={[Bi]:{transfer:Pc,primaries:Lc,toReference:n=>n,fromReference:n=>n},[kt]:{transfer:ct,primaries:Lc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[tu]:{transfer:Pc,primaries:Dc,toReference:n=>n.applyMatrix3(Vm),fromReference:n=>n.applyMatrix3(Gm)},[Dd]:{transfer:ct,primaries:Dc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Vm),fromReference:n=>n.applyMatrix3(Gm).convertLinearToSRGB()}},KM=new Set([Bi,tu]),rt={enabled:!0,_workingColorSpace:Bi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!KM.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=il[e].toReference,r=il[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return il[n].primaries},getTransfer:function(n){return n===Bn?Pc:il[n].transfer}};function ea(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let rs;class I_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rs===void 0&&(rs=Ic("canvas")),rs.width=e.width,rs.height=e.height;const i=rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ic("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ea(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ea(t[i]/255)*255):t[i]=ea(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JM=0;class U_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=Ni(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Wu(r[a].image)):s.push(Wu(r[a]))}else s=Wu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Wu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?I_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZM=0;class yn extends _a{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,i=ei,r=ei,s=zn,a=Kr,o=ti,l=gr,c=yn.DEFAULT_ANISOTROPY,u=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=Ni(),this.name="",this.source=new U_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(to("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Wr?kt:Bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==E_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rc:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case xf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rc:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case xf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return to("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===kt?Wr:L_}set encoding(e){to("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Wr?kt:Bn}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=E_;yn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,i=0,r=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],v=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(c+1)/2,S=(p+1)/2,R=(f+1)/2,E=(u+d)/4,w=(h+x)/4,N=(v+m)/4;return g>S&&g>R?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=E/i,s=w/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=E/r,s=N/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=w/s,r=N/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-v)*(m-v)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(h-x)/_,this.z=(d-u)/_,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QM extends _a{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(to("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Wr?kt:Bn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new yn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new U_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends QM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class F_ extends yn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class e1 extends yn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[a+0],p=s[a+1],v=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=v,e[t+3]=x;return}if(h!==x||l!==d||c!==p||u!==v){let m=1-o;const f=l*d+c*p+u*v+h*x,_=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const R=Math.sqrt(g),E=Math.atan2(R,f*_);m=Math.sin(m*E)/R,o=Math.sin(o*E)/R}const S=o*_;if(l=l*m+d*S,c=c*m+p*S,u=u*m+v*S,h=h*m+x*S,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],d=s[a+1],p=s[a+2],v=s[a+3];return e[t]=o*v+u*h+l*p-c*d,e[t+1]=l*v+u*d+c*h-o*p,e[t+2]=c*v+u*p+o*d-l*h,e[t+3]=u*v-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h-d*p*v;break;case"YXZ":this._x=d*u*h+c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h+d*p*v;break;case"ZXY":this._x=d*u*h-c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h-d*p*v;break;case"ZYX":this._x=d*u*h-c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h+d*p*v;break;case"YZX":this._x=d*u*h+c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h-d*p*v;break;case"XZY":this._x=d*u*h-c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xu.copy(this).projectOnVector(e),this.sub(Xu)}reflect(e){return this.sub(Xu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xu=new I,Wm=new Uo;class es{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$n):$n.fromBufferAttribute(s,a),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rl.copy(i.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pa),sl.subVectors(this.max,Pa),ss.subVectors(e.a,Pa),as.subVectors(e.b,Pa),os.subVectors(e.c,Pa),Wi.subVectors(as,ss),Xi.subVectors(os,as),br.subVectors(ss,os);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-br.z,br.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,br.z,0,-br.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-br.y,br.x,0];return!ju(t,ss,as,os,sl)||(t=[1,0,0,0,1,0,0,0,1],!ju(t,ss,as,os,sl))?!1:(al.crossVectors(Wi,Xi),t=[al.x,al.y,al.z],ju(t,ss,as,os,sl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vi=[new I,new I,new I,new I,new I,new I,new I,new I],$n=new I,rl=new es,ss=new I,as=new I,os=new I,Wi=new I,Xi=new I,br=new I,Pa=new I,sl=new I,al=new I,Cr=new I;function ju(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Cr.fromArray(n,s);const o=r.x*Math.abs(Cr.x)+r.y*Math.abs(Cr.y)+r.z*Math.abs(Cr.z),l=e.dot(Cr),c=t.dot(Cr),u=i.dot(Cr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const t1=new es,La=new I,qu=new I;class ts{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):t1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;La.subVectors(e,this.center);const t=La.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(La,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(La.copy(e.center).add(qu)),this.expandByPoint(La.copy(e.center).sub(qu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new I,$u=new I,ol=new I,ji=new I,Yu=new I,ll=new I,Ku=new I;class Nd{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){$u.copy(e).add(t).multiplyScalar(.5),ol.copy(t).sub(e).normalize(),ji.copy(this.origin).sub($u);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ol),o=ji.dot(this.direction),l=-ji.dot(ol),c=ji.lengthSq(),u=Math.abs(1-a*a);let h,d,p,v;if(u>0)if(h=a*l-o,d=a*o-l,v=s*u,h>=0)if(d>=-v)if(d<=v){const x=1/u;h*=x,d*=x,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy($u).addScaledVector(ol,d),p}intersectSphere(e,t){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),r=_i.dot(_i)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,i,r,s){Yu.subVectors(t,e),ll.subVectors(i,e),Ku.crossVectors(Yu,ll);let a=this.direction.dot(Ku),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ji.subVectors(this.origin,e);const l=o*this.direction.dot(ll.crossVectors(ji,ll));if(l<0)return null;const c=o*this.direction.dot(Yu.cross(ji));if(c<0||l+c>a)return null;const u=-o*ji.dot(Ku);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,r,s,a,o,l,c,u,h,d,p,v,x,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,h,d,p,v,x,m)}set(e,t,i,r,s,a,o,l,c,u,h,d,p,v,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=v,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ls.setFromMatrixColumn(e,0).length(),s=1/ls.setFromMatrixColumn(e,1).length(),a=1/ls.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*h,v=o*u,x=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+v*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,v=c*u,x=c*h;t[0]=d+x*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,v=c*u,x=c*h;t[0]=d-x*o,t[4]=-a*h,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,v=o*u,x=o*h;t[0]=l*u,t[4]=v*c-p,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,v=o*l,x=o*c;t[0]=l*u,t[4]=x-d*h,t[8]=v*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+v,t[10]=d-x*h}else if(e.order==="XZY"){const d=a*l,p=a*c,v=o*l,x=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=a*u,t[9]=p*h-v,t[2]=v*h-p,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(n1,e,i1)}lookAt(e,t,i){const r=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),qi.crossVectors(i,Mn),qi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),qi.crossVectors(i,Mn)),qi.normalize(),cl.crossVectors(Mn,qi),r[0]=qi.x,r[4]=cl.x,r[8]=Mn.x,r[1]=qi.y,r[5]=cl.y,r[9]=Mn.y,r[2]=qi.z,r[6]=cl.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],v=i[2],x=i[6],m=i[10],f=i[14],_=i[3],g=i[7],S=i[11],R=i[15],E=r[0],w=r[4],N=r[8],M=r[12],T=r[1],H=r[5],j=r[9],oe=r[13],P=r[2],G=r[6],$=r[10],se=r[14],F=r[3],C=r[7],D=r[11],B=r[15];return s[0]=a*E+o*T+l*P+c*F,s[4]=a*w+o*H+l*G+c*C,s[8]=a*N+o*j+l*$+c*D,s[12]=a*M+o*oe+l*se+c*B,s[1]=u*E+h*T+d*P+p*F,s[5]=u*w+h*H+d*G+p*C,s[9]=u*N+h*j+d*$+p*D,s[13]=u*M+h*oe+d*se+p*B,s[2]=v*E+x*T+m*P+f*F,s[6]=v*w+x*H+m*G+f*C,s[10]=v*N+x*j+m*$+f*D,s[14]=v*M+x*oe+m*se+f*B,s[3]=_*E+g*T+S*P+R*F,s[7]=_*w+g*H+S*G+R*C,s[11]=_*N+g*j+S*$+R*D,s[15]=_*M+g*oe+S*se+R*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],v=e[3],x=e[7],m=e[11],f=e[15];return v*(+s*l*h-r*c*h-s*o*d+i*c*d+r*o*p-i*l*p)+x*(+t*l*p-t*c*d+s*a*d-r*a*p+r*c*u-s*l*u)+m*(+t*c*h-t*o*p-s*a*h+i*a*p+s*o*u-i*c*u)+f*(-r*o*u-t*l*h+t*o*d+r*a*h-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],v=e[12],x=e[13],m=e[14],f=e[15],_=h*m*c-x*d*c+x*l*p-o*m*p-h*l*f+o*d*f,g=v*d*c-u*m*c-v*l*p+a*m*p+u*l*f-a*d*f,S=u*x*c-v*h*c+v*o*p-a*x*p-u*o*f+a*h*f,R=v*h*l-u*x*l-v*o*d+a*x*d+u*o*m-a*h*m,E=t*_+i*g+r*S+s*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=_*w,e[1]=(x*d*s-h*m*s-x*r*p+i*m*p+h*r*f-i*d*f)*w,e[2]=(o*m*s-x*l*s+x*r*c-i*m*c-o*r*f+i*l*f)*w,e[3]=(h*l*s-o*d*s-h*r*c+i*d*c+o*r*p-i*l*p)*w,e[4]=g*w,e[5]=(u*m*s-v*d*s+v*r*p-t*m*p-u*r*f+t*d*f)*w,e[6]=(v*l*s-a*m*s-v*r*c+t*m*c+a*r*f-t*l*f)*w,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*p+t*l*p)*w,e[8]=S*w,e[9]=(v*h*s-u*x*s-v*i*p+t*x*p+u*i*f-t*h*f)*w,e[10]=(a*x*s-v*o*s+v*i*c-t*x*c-a*i*f+t*o*f)*w,e[11]=(u*o*s-a*h*s-u*i*c+t*h*c+a*i*p-t*o*p)*w,e[12]=R*w,e[13]=(u*x*r-v*h*r+v*i*d-t*x*d-u*i*m+t*h*m)*w,e[14]=(v*o*r-a*x*r-v*i*l+t*x*l+a*i*m-t*o*m)*w,e[15]=(a*h*r-u*o*r+u*i*l-t*h*l-a*i*d+t*o*d)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,p=s*u,v=s*h,x=a*u,m=a*h,f=o*h,_=l*c,g=l*u,S=l*h,R=i.x,E=i.y,w=i.z;return r[0]=(1-(x+f))*R,r[1]=(p+S)*R,r[2]=(v-g)*R,r[3]=0,r[4]=(p-S)*E,r[5]=(1-(d+f))*E,r[6]=(m+_)*E,r[7]=0,r[8]=(v+g)*w,r[9]=(m-_)*w,r[10]=(1-(d+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ls.set(r[0],r[1],r[2]).length();const a=ls.set(r[4],r[5],r[6]).length(),o=ls.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yn.copy(this);const c=1/s,u=1/a,h=1/o;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=h,Yn.elements[9]*=h,Yn.elements[10]*=h,t.setFromRotationMatrix(Yn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Ri){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let p,v;if(o===Ri)p=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Nc)p=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Ri){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(a-s),d=(t+e)*c,p=(i+r)*u;let v,x;if(o===Ri)v=(a+s)*h,x=-2*h;else if(o===Nc)v=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ls=new I,Yn=new ht,n1=new I(0,0,0),i1=new I(1,1,1),qi=new I,cl=new I,Mn=new I,Xm=new ht,jm=new Uo;class nu{constructor(e=0,t=0,i=0,r=nu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Xm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jm.setFromEuler(this),this.setFromQuaternion(jm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nu.DEFAULT_ORDER="XYZ";class O_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let r1=0;const qm=new I,cs=new Uo,xi=new ht,ul=new I,Da=new I,s1=new I,a1=new Uo,$m=new I(1,0,0),Ym=new I(0,1,0),Km=new I(0,0,1),o1={type:"added"},l1={type:"removed"};class At extends _a{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r1++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new I,t=new nu,i=new Uo,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ke}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new O_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis($m,e)}rotateY(e){return this.rotateOnAxis(Ym,e)}rotateZ(e){return this.rotateOnAxis(Km,e)}translateOnAxis(e,t){return qm.copy(e).applyQuaternion(this.quaternion),this.position.add(qm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($m,e)}translateY(e){return this.translateOnAxis(Ym,e)}translateZ(e){return this.translateOnAxis(Km,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ul.copy(e):ul.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Da,ul,this.up):xi.lookAt(ul,Da,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),cs.setFromRotationMatrix(xi),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(o1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(l1)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,e,s1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Da,a1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}At.DEFAULT_UP=new I(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new I,yi=new I,Ju=new I,Si=new I,us=new I,hs=new I,Jm=new I,Zu=new I,Qu=new I,eh=new I;let hl=!1;class bn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Kn.subVectors(e,t),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Kn.subVectors(r,t),yi.subVectors(i,t),Ju.subVectors(e,t);const a=Kn.dot(Kn),o=Kn.dot(yi),l=Kn.dot(Ju),c=yi.dot(yi),u=yi.dot(Ju),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,v=(a*u-o*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getUV(e,t,i,r,s,a,o,l){return hl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hl=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Si.x),l.addScaledVector(a,Si.y),l.addScaledVector(o,Si.z),l)}static isFrontFacing(e,t,i,r){return Kn.subVectors(i,t),yi.subVectors(e,t),Kn.cross(yi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Kn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return hl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hl=!0),bn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return bn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;us.subVectors(r,i),hs.subVectors(s,i),Zu.subVectors(e,i);const l=us.dot(Zu),c=hs.dot(Zu);if(l<=0&&c<=0)return t.copy(i);Qu.subVectors(e,r);const u=us.dot(Qu),h=hs.dot(Qu);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(us,a);eh.subVectors(e,s);const p=us.dot(eh),v=hs.dot(eh);if(v>=0&&p<=v)return t.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(hs,o);const m=u*v-p*h;if(m<=0&&h-u>=0&&p-v>=0)return Jm.subVectors(s,r),o=(h-u)/(h-u+(p-v)),t.copy(r).addScaledVector(Jm,o);const f=1/(m+x+d);return a=x*f,o=d*f,t.copy(i).addScaledVector(us,a).addScaledVector(hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const z_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},fl={h:0,s:0,l:0};function th(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=$M(e,1),t=Bt(t,0,1),i=Bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=th(a,s,e+1/3),this.g=th(a,s,e),this.b=th(a,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,t=kt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const i=z_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}copyLinearToSRGB(e){return this.r=Vu(e.r),this.g=Vu(e.g),this.b=Vu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return rt.fromWorkingColorSpace(Zt.copy(this),e),Math.round(Bt(Zt.r*255,0,255))*65536+Math.round(Bt(Zt.g*255,0,255))*256+Math.round(Bt(Zt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Zt.copy(this),t);const i=Zt.r,r=Zt.g,s=Zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=kt){rt.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,i=Zt.g,r=Zt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(fl);const i=Hu($i.h,fl.h,t),r=Hu($i.s,fl.s,t),s=Hu($i.l,fl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new ke;ke.NAMES=z_;let c1=0;class Gi extends _a{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=Zs,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mf,this.blendDst=gf,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Cc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(i.blending=this.blending),this.side!==Sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mf&&(i.blendSrc=this.blendSrc),this.blendDst!==gf&&(i.blendDst=this.blendDst),this.blendEquation!==Ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wt extends Gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Cd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new I,dl=new le;class Pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=rr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)dl.fromBufferAttribute(this,t),dl.applyMatrix3(e),this.setXY(t,dl.x,dl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ai(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yf&&(e.usage=this.usage),e}}class k_ extends Pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class B_ extends Pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ze extends Pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let u1=0;const Un=new ht,nh=new At,fs=new I,En=new es,Na=new es,Ft=new I;class bt extends _a{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(N_(e)?B_:k_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,i){return Un.makeTranslation(e,t,i),this.applyMatrix4(Un),this}scale(e,t,i){return Un.makeScale(e,t,i),this.applyMatrix4(Un),this}lookAt(e){return nh.lookAt(e),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ze(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Na.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(En.min,Na.min),En.expandByPoint(Ft),Ft.addVectors(En.max,Na.max),En.expandByPoint(Ft)):(En.expandByPoint(Na.min),En.expandByPoint(Na.max))}En.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ft.fromBufferAttribute(o,c),l&&(fs.fromBufferAttribute(e,c),Ft.add(fs)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<o;T++)c[T]=new I,u[T]=new I;const h=new I,d=new I,p=new I,v=new le,x=new le,m=new le,f=new I,_=new I;function g(T,H,j){h.fromArray(r,T*3),d.fromArray(r,H*3),p.fromArray(r,j*3),v.fromArray(a,T*2),x.fromArray(a,H*2),m.fromArray(a,j*2),d.sub(h),p.sub(h),x.sub(v),m.sub(v);const oe=1/(x.x*m.y-m.x*x.y);isFinite(oe)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(oe),_.copy(p).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(oe),c[T].add(f),c[H].add(f),c[j].add(f),u[T].add(_),u[H].add(_),u[j].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let T=0,H=S.length;T<H;++T){const j=S[T],oe=j.start,P=j.count;for(let G=oe,$=oe+P;G<$;G+=3)g(i[G+0],i[G+1],i[G+2])}const R=new I,E=new I,w=new I,N=new I;function M(T){w.fromArray(s,T*3),N.copy(w);const H=c[T];R.copy(H),R.sub(w.multiplyScalar(w.dot(H))).normalize(),E.crossVectors(N,H);const oe=E.dot(u[T])<0?-1:1;l[T*4]=R.x,l[T*4+1]=R.y,l[T*4+2]=R.z,l[T*4+3]=oe}for(let T=0,H=S.length;T<H;++T){const j=S[T],oe=j.start,P=j.count;for(let G=oe,$=oe+P;G<$;G+=3)M(i[G+0]),M(i[G+1]),M(i[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let f=0;f<u;f++)d[v++]=c[p++]}return new Pn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zm=new ht,Rr=new Nd,pl=new ts,Qm=new I,ds=new I,ps=new I,ms=new I,ih=new I,ml=new I,gl=new le,vl=new le,_l=new le,e0=new I,t0=new I,n0=new I,xl=new I,yl=new I;class ze extends At{constructor(e=new bt,t=new wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ml.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(ih.fromBufferAttribute(h,e),a?ml.addScaledVector(ih,u):ml.addScaledVector(ih.sub(t),u))}t.add(ml)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(s),Rr.copy(e.ray).recast(e.near),!(pl.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(pl,Qm)===null||Rr.origin.distanceToSquared(Qm)>(e.far-e.near)**2))&&(Zm.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(Zm),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Rr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=d.length;v<x;v++){const m=d[v],f=a[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,R=g;S<R;S+=3){const E=o.getX(S),w=o.getX(S+1),N=o.getX(S+2);r=Sl(this,f,e,i,c,u,h,E,w,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=v,f=x;m<f;m+=3){const _=o.getX(m),g=o.getX(m+1),S=o.getX(m+2);r=Sl(this,a,e,i,c,u,h,_,g,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=d.length;v<x;v++){const m=d[v],f=a[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,R=g;S<R;S+=3){const E=S,w=S+1,N=S+2;r=Sl(this,f,e,i,c,u,h,E,w,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,f=x;m<f;m+=3){const _=m,g=m+1,S=m+2;r=Sl(this,a,e,i,c,u,h,_,g,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function h1(n,e,t,i,r,s,a,o){let l;if(e.side===un?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Sr,o),l===null)return null;yl.copy(o),yl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(yl);return c<t.near||c>t.far?null:{distance:c,point:yl.clone(),object:n}}function Sl(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ds),n.getVertexPosition(l,ps),n.getVertexPosition(c,ms);const u=h1(n,e,t,i,ds,ps,ms,xl);if(u){r&&(gl.fromBufferAttribute(r,o),vl.fromBufferAttribute(r,l),_l.fromBufferAttribute(r,c),u.uv=bn.getInterpolation(xl,ds,ps,ms,gl,vl,_l,new le)),s&&(gl.fromBufferAttribute(s,o),vl.fromBufferAttribute(s,l),_l.fromBufferAttribute(s,c),u.uv1=bn.getInterpolation(xl,ds,ps,ms,gl,vl,_l,new le),u.uv2=u.uv1),a&&(e0.fromBufferAttribute(a,o),t0.fromBufferAttribute(a,l),n0.fromBufferAttribute(a,c),u.normal=bn.getInterpolation(xl,ds,ps,ms,e0,t0,n0,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new I,materialIndex:0};bn.getNormal(ds,ps,ms,h.normal),u.face=h}return u}class Ii extends bt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(h,2));function v(x,m,f,_,g,S,R,E,w,N,M){const T=S/w,H=R/N,j=S/2,oe=R/2,P=E/2,G=w+1,$=N+1;let se=0,F=0;const C=new I;for(let D=0;D<$;D++){const B=D*H-oe;for(let V=0;V<G;V++){const z=V*T-j;C[x]=z*_,C[m]=B*g,C[f]=P,c.push(C.x,C.y,C.z),C[x]=0,C[m]=0,C[f]=E>0?1:-1,u.push(C.x,C.y,C.z),h.push(V/w),h.push(1-D/N),se+=1}}for(let D=0;D<N;D++)for(let B=0;B<w;B++){const V=d+B+G*D,z=d+B+G*(D+1),q=d+(B+1)+G*(D+1),O=d+(B+1)+G*D;l.push(V,z,O),l.push(z,q,O),F+=6}o.addGroup(p,F,M),p+=F,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function da(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function an(n){const e={};for(let t=0;t<n.length;t++){const i=da(n[t]);for(const r in i)e[r]=i[r]}return e}function f1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function H_(n){return n.getRenderTarget()===null?n.outputColorSpace:rt.workingColorSpace}const Eo={clone:da,merge:an};var d1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends Gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d1,this.fragmentShader=p1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=da(e.uniforms),this.uniformsGroups=f1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class G_ extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kn extends G_{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ec*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mf*2*Math.atan(Math.tan(ec*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ec*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gs=-90,vs=1;class V_ extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn(gs,vs,e,t);r.layers=this.layers,this.add(r);const s=new kn(gs,vs,e,t);s.layers=this.layers,this.add(s);const a=new kn(gs,vs,e,t);a.layers=this.layers,this.add(a);const o=new kn(gs,vs,e,t);o.layers=this.layers,this.add(o);const l=new kn(gs,vs,e,t);l.layers=this.layers,this.add(l);const c=new kn(gs,vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class W_ extends yn{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ua,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class X_ extends Wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(to("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Wr?kt:Bn),this.texture=new W_(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ii(5,5,5),s=new gn({name:"CubemapFromEquirect",uniforms:da(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Di});s.uniforms.tEquirect.value=t;const a=new ze(r,s),o=t.minFilter;return t.minFilter===Kr&&(t.minFilter=zn),new V_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const rh=new I,m1=new I,g1=new Ke;class Nr{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=rh.subVectors(i,t).cross(m1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(rh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||g1.getNormalMatrix(e),r=this.coplanarPoint(rh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new ts,Ml=new I;class Id{constructor(e=new Nr,t=new Nr,i=new Nr,r=new Nr,s=new Nr,a=new Nr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ri){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],p=r[8],v=r[9],x=r[10],m=r[11],f=r[12],_=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,m-p,S-f).normalize(),i[1].setComponents(l+s,d+c,m+p,S+f).normalize(),i[2].setComponents(l+a,d+u,m+v,S+_).normalize(),i[3].setComponents(l-a,d-u,m-v,S-_).normalize(),i[4].setComponents(l-o,d-h,m-x,S-g).normalize(),t===Ri)i[5].setComponents(l+o,d+h,m+x,S+g).normalize();else if(t===Nc)i[5].setComponents(o,h,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ml.x=r.normal.x>0?e.max.x:e.min.x,Ml.y=r.normal.y>0?e.max.y:e.min.y,Ml.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function j_(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function v1(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,d=c.usage,p=h.byteLength,v=n.createBuffer();n.bindBuffer(u,v),n.bufferData(u,h,d),c.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,h){const d=u.array,p=u._updateRange,v=u.updateRanges;if(n.bindBuffer(h,c),p.count===-1&&v.length===0&&n.bufferSubData(h,0,d),v.length!==0){for(let x=0,m=v.length;x<m;x++){const f=v[x];t?n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:a,remove:o,update:l}}class Wt extends bt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,p=[],v=[],x=[],m=[];for(let f=0;f<u;f++){const _=f*d-a;for(let g=0;g<c;g++){const S=g*h-s;v.push(S,-_,0),x.push(0,0,1),m.push(g/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){const g=_+c*f,S=_+c*(f+1),R=_+1+c*(f+1),E=_+1+c*f;p.push(g,S,E),p.push(S,R,E)}this.setIndex(p),this.setAttribute("position",new Ze(v,3)),this.setAttribute("normal",new Ze(x,3)),this.setAttribute("uv",new Ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wt(e.width,e.height,e.widthSegments,e.heightSegments)}}var _1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,y1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,E1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,T1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A1=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,b1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,C1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,L1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,D1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,N1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,U1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,z1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,k1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,B1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,H1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,G1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,V1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,W1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,K1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,J1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Z1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Q1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,aE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,oE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_E=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ME=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,TE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,CE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,NE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,IE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,UE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,FE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,OE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,HE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$E=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ew=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ow=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_w=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ew=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ww=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Tw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Aw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ow=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ww=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$w=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:_1,alphahash_pars_fragment:x1,alphamap_fragment:y1,alphamap_pars_fragment:S1,alphatest_fragment:M1,alphatest_pars_fragment:E1,aomap_fragment:w1,aomap_pars_fragment:T1,batching_pars_vertex:A1,batching_vertex:b1,begin_vertex:C1,beginnormal_vertex:R1,bsdfs:P1,iridescence_fragment:L1,bumpmap_pars_fragment:D1,clipping_planes_fragment:N1,clipping_planes_pars_fragment:I1,clipping_planes_pars_vertex:U1,clipping_planes_vertex:F1,color_fragment:O1,color_pars_fragment:z1,color_pars_vertex:k1,color_vertex:B1,common:H1,cube_uv_reflection_fragment:G1,defaultnormal_vertex:V1,displacementmap_pars_vertex:W1,displacementmap_vertex:X1,emissivemap_fragment:j1,emissivemap_pars_fragment:q1,colorspace_fragment:$1,colorspace_pars_fragment:Y1,envmap_fragment:K1,envmap_common_pars_fragment:J1,envmap_pars_fragment:Z1,envmap_pars_vertex:Q1,envmap_physical_pars_fragment:hE,envmap_vertex:eE,fog_vertex:tE,fog_pars_vertex:nE,fog_fragment:iE,fog_pars_fragment:rE,gradientmap_pars_fragment:sE,lightmap_fragment:aE,lightmap_pars_fragment:oE,lights_lambert_fragment:lE,lights_lambert_pars_fragment:cE,lights_pars_begin:uE,lights_toon_fragment:fE,lights_toon_pars_fragment:dE,lights_phong_fragment:pE,lights_phong_pars_fragment:mE,lights_physical_fragment:gE,lights_physical_pars_fragment:vE,lights_fragment_begin:_E,lights_fragment_maps:xE,lights_fragment_end:yE,logdepthbuf_fragment:SE,logdepthbuf_pars_fragment:ME,logdepthbuf_pars_vertex:EE,logdepthbuf_vertex:wE,map_fragment:TE,map_pars_fragment:AE,map_particle_fragment:bE,map_particle_pars_fragment:CE,metalnessmap_fragment:RE,metalnessmap_pars_fragment:PE,morphcolor_vertex:LE,morphnormal_vertex:DE,morphtarget_pars_vertex:NE,morphtarget_vertex:IE,normal_fragment_begin:UE,normal_fragment_maps:FE,normal_pars_fragment:OE,normal_pars_vertex:zE,normal_vertex:kE,normalmap_pars_fragment:BE,clearcoat_normal_fragment_begin:HE,clearcoat_normal_fragment_maps:GE,clearcoat_pars_fragment:VE,iridescence_pars_fragment:WE,opaque_fragment:XE,packing:jE,premultiplied_alpha_fragment:qE,project_vertex:$E,dithering_fragment:YE,dithering_pars_fragment:KE,roughnessmap_fragment:JE,roughnessmap_pars_fragment:ZE,shadowmap_pars_fragment:QE,shadowmap_pars_vertex:ew,shadowmap_vertex:tw,shadowmask_pars_fragment:nw,skinbase_vertex:iw,skinning_pars_vertex:rw,skinning_vertex:sw,skinnormal_vertex:aw,specularmap_fragment:ow,specularmap_pars_fragment:lw,tonemapping_fragment:cw,tonemapping_pars_fragment:uw,transmission_fragment:hw,transmission_pars_fragment:fw,uv_pars_fragment:dw,uv_pars_vertex:pw,uv_vertex:mw,worldpos_vertex:gw,background_vert:vw,background_frag:_w,backgroundCube_vert:xw,backgroundCube_frag:yw,cube_vert:Sw,cube_frag:Mw,depth_vert:Ew,depth_frag:ww,distanceRGBA_vert:Tw,distanceRGBA_frag:Aw,equirect_vert:bw,equirect_frag:Cw,linedashed_vert:Rw,linedashed_frag:Pw,meshbasic_vert:Lw,meshbasic_frag:Dw,meshlambert_vert:Nw,meshlambert_frag:Iw,meshmatcap_vert:Uw,meshmatcap_frag:Fw,meshnormal_vert:Ow,meshnormal_frag:zw,meshphong_vert:kw,meshphong_frag:Bw,meshphysical_vert:Hw,meshphysical_frag:Gw,meshtoon_vert:Vw,meshtoon_frag:Ww,points_vert:Xw,points_frag:jw,shadow_vert:qw,shadow_frag:$w,sprite_vert:Yw,sprite_frag:Kw},ye={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},ci={basic:{uniforms:an([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:an([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ke(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:an([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:an([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:an([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ke(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:an([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:an([ye.points,ye.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:an([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:an([ye.common,ye.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:an([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:an([ye.sprite,ye.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:an([ye.common,ye.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:an([ye.lights,ye.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};ci.physical={uniforms:an([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const El={r:0,b:0,g:0};function Jw(n,e,t,i,r,s,a){const o=new ke(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function v(m,f){let _=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?t:e).get(g)),g===null?x(o,l):g&&g.isColor&&(x(g,1),_=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===eu)?(u===void 0&&(u=new ze(new Ii(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:da(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=rt.getTransfer(g.colorSpace)!==ct,(h!==g||d!==g.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=g,d=g.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new ze(new Wt(2,2),new gn({name:"BackgroundMaterial",uniforms:da(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=rt.getTransfer(g.colorSpace)!==ct,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||d!==g.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=g,d=g.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,f){m.getRGB(El,H_(n)),i.buffers.color.setClear(El.r,El.g,El.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:v}}function Zw(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function h(P,G,$,se,F){let C=!1;if(a){const D=x(se,$,G);c!==D&&(c=D,p(c.object)),C=f(P,se,$,F),C&&_(P,se,$,F)}else{const D=G.wireframe===!0;(c.geometry!==se.id||c.program!==$.id||c.wireframe!==D)&&(c.geometry=se.id,c.program=$.id,c.wireframe=D,C=!0)}F!==null&&t.update(F,n.ELEMENT_ARRAY_BUFFER),(C||u)&&(u=!1,N(P,G,$,se),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(P){return i.isWebGL2?n.bindVertexArray(P):s.bindVertexArrayOES(P)}function v(P){return i.isWebGL2?n.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function x(P,G,$){const se=$.wireframe===!0;let F=o[P.id];F===void 0&&(F={},o[P.id]=F);let C=F[G.id];C===void 0&&(C={},F[G.id]=C);let D=C[se];return D===void 0&&(D=m(d()),C[se]=D),D}function m(P){const G=[],$=[],se=[];for(let F=0;F<r;F++)G[F]=0,$[F]=0,se[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:$,attributeDivisors:se,object:P,attributes:{},index:null}}function f(P,G,$,se){const F=c.attributes,C=G.attributes;let D=0;const B=$.getAttributes();for(const V in B)if(B[V].location>=0){const q=F[V];let O=C[V];if(O===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(O=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(O=P.instanceColor)),q===void 0||q.attribute!==O||O&&q.data!==O.data)return!0;D++}return c.attributesNum!==D||c.index!==se}function _(P,G,$,se){const F={},C=G.attributes;let D=0;const B=$.getAttributes();for(const V in B)if(B[V].location>=0){let q=C[V];q===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(q=P.instanceColor));const O={};O.attribute=q,q&&q.data&&(O.data=q.data),F[V]=O,D++}c.attributes=F,c.attributesNum=D,c.index=se}function g(){const P=c.newAttributes;for(let G=0,$=P.length;G<$;G++)P[G]=0}function S(P){R(P,0)}function R(P,G){const $=c.newAttributes,se=c.enabledAttributes,F=c.attributeDivisors;$[P]=1,se[P]===0&&(n.enableVertexAttribArray(P),se[P]=1),F[P]!==G&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,G),F[P]=G)}function E(){const P=c.newAttributes,G=c.enabledAttributes;for(let $=0,se=G.length;$<se;$++)G[$]!==P[$]&&(n.disableVertexAttribArray($),G[$]=0)}function w(P,G,$,se,F,C,D){D===!0?n.vertexAttribIPointer(P,G,$,F,C):n.vertexAttribPointer(P,G,$,se,F,C)}function N(P,G,$,se){if(i.isWebGL2===!1&&(P.isInstancedMesh||se.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const F=se.attributes,C=$.getAttributes(),D=G.defaultAttributeValues;for(const B in C){const V=C[B];if(V.location>=0){let z=F[B];if(z===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(z=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(z=P.instanceColor)),z!==void 0){const q=z.normalized,O=z.itemSize,Y=t.get(z);if(Y===void 0)continue;const ee=Y.buffer,me=Y.type,Te=Y.bytesPerElement,Me=i.isWebGL2===!0&&(me===n.INT||me===n.UNSIGNED_INT||z.gpuType===w_);if(z.isInterleavedBufferAttribute){const Le=z.data,L=Le.stride,de=z.offset;if(Le.isInstancedInterleavedBuffer){for(let Z=0;Z<V.locationSize;Z++)R(V.location+Z,Le.meshPerAttribute);P.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let Z=0;Z<V.locationSize;Z++)S(V.location+Z);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let Z=0;Z<V.locationSize;Z++)w(V.location+Z,O/V.locationSize,me,q,L*Te,(de+O/V.locationSize*Z)*Te,Me)}else{if(z.isInstancedBufferAttribute){for(let Le=0;Le<V.locationSize;Le++)R(V.location+Le,z.meshPerAttribute);P.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let Le=0;Le<V.locationSize;Le++)S(V.location+Le);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let Le=0;Le<V.locationSize;Le++)w(V.location+Le,O/V.locationSize,me,q,O*Te,O/V.locationSize*Le*Te,Me)}}else if(D!==void 0){const q=D[B];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(V.location,q);break;case 3:n.vertexAttrib3fv(V.location,q);break;case 4:n.vertexAttrib4fv(V.location,q);break;default:n.vertexAttrib1fv(V.location,q)}}}}E()}function M(){j();for(const P in o){const G=o[P];for(const $ in G){const se=G[$];for(const F in se)v(se[F].object),delete se[F];delete G[$]}delete o[P]}}function T(P){if(o[P.id]===void 0)return;const G=o[P.id];for(const $ in G){const se=G[$];for(const F in se)v(se[F].object),delete se[F];delete G[$]}delete o[P.id]}function H(P){for(const G in o){const $=o[G];if($[P.id]===void 0)continue;const se=$[P.id];for(const F in se)v(se[F].object),delete se[F];delete $[P.id]}}function j(){oe(),u=!0,c!==l&&(c=l,p(c.object))}function oe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:j,resetDefaultState:oe,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:H,initAttributes:g,enableAttribute:S,disableUnusedAttributes:E}}function Qw(n,e,t,i){const r=i.isWebGL2;let s;function a(u){s=u}function o(u,h){n.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,d){if(d===0)return;let p,v;if(r)p=n,v="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](s,u,h,d),t.update(h,s,d)}function c(u,h,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<d;v++)this.render(u[v],h[v]);else{p.multiDrawArraysWEBGL(s,u,0,h,0,d);let v=0;for(let x=0;x<d;x++)v+=h[x];t.update(v,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function eT(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,S=a||e.has("OES_texture_float"),R=g&&S,E=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:E}}function tT(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Nr,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const v=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,g=_*4;let S=f.clippingState||null;l.value=S,S=u(v,d,g,p);for(let R=0;R!==g;++R)S[R]=t[R];f.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,v){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const f=p+x*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let g=0,S=p;g!==x;++g,S+=4)a.copy(h[g]).applyMatrix4(_,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function nT(n){let e=new WeakMap;function t(a,o){return o===vf?a.mapping=ua:o===_f&&(a.mapping=ha),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===vf||o===_f)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new X_(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ud extends G_{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Os=4,i0=[.125,.215,.35,.446,.526,.582],Fr=20,sh=new Ud,r0=new ke;let ah=null,oh=0,lh=0;const Ir=(1+Math.sqrt(5))/2,_s=1/Ir,s0=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Ir,_s),new I(0,Ir,-_s),new I(_s,0,Ir),new I(-_s,0,Ir),new I(Ir,_s,0),new I(-Ir,_s,0)];class a0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ah=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=c0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=l0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ah,oh,lh),e.scissorTest=!1,wl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ua||e.mapping===ha?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ah=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:pi,format:ti,colorSpace:Bi,depthBuffer:!1},r=o0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=o0(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iT(s)),this._blurMaterial=rT(s,e,t)}return r}_compileMaterial(e){const t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,sh)}_sceneToCubeUV(e,t,i,r){const o=new kn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(r0),u.toneMapping=mr,u.autoClear=!1;const p=new wt({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),v=new ze(new Ii,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(r0),x=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):_===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const g=this._cubeSize;wl(r,_*g,f>2?g:0,g,g),u.setRenderTarget(r),x&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ua||e.mapping===ha;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=c0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=l0());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ze(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;wl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,sh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=s0[(r-1)%s0.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ze(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Fr-1),x=s/v,m=isFinite(s)?1+Math.floor(u*x):Fr;m>Fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fr}`);const f=[];let _=0;for(let w=0;w<Fr;++w){const N=w/x,M=Math.exp(-N*N/2);f.push(M),w===0?_+=M:w<m&&(_+=2*M)}for(let w=0;w<f.length;w++)f[w]=f[w]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:g}=this;d.dTheta.value=v,d.mipInt.value=g-i;const S=this._sizeLods[r],R=3*S*(r>g-Os?r-g+Os:0),E=4*(this._cubeSize-S);wl(t,R,E,3*S,2*S),l.setRenderTarget(t),l.render(h,sh)}}function iT(n){const e=[],t=[],i=[];let r=n;const s=n-Os+1+i0.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Os?l=i0[a-n+Os-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,v=6,x=3,m=2,f=1,_=new Float32Array(x*v*p),g=new Float32Array(m*v*p),S=new Float32Array(f*v*p);for(let E=0;E<p;E++){const w=E%3*2/3-1,N=E>2?0:-1,M=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];_.set(M,x*v*E),g.set(d,m*v*E);const T=[E,E,E,E,E,E];S.set(T,f*v*E)}const R=new bt;R.setAttribute("position",new Pn(_,x)),R.setAttribute("uv",new Pn(g,m)),R.setAttribute("faceIndex",new Pn(S,f)),e.push(R),r>Os&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function o0(n,e,t){const i=new Wn(n,e,t);return i.texture.mapping=eu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function rT(n,e,t){const i=new Float32Array(Fr),r=new I(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function l0(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function c0(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Fd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sT(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===vf||l===_f,u=l===ua||l===ha;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new a0(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new a0(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function aT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function oT(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const x=p[v];for(let m=0,f=x.length;m<f;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,v=h.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let g=0,S=_.length;g<S;g+=3){const R=_[g+0],E=_[g+1],w=_[g+2];d.push(R,E,E,w,w,R)}}else if(v!==void 0){const _=v.array;x=v.version;for(let g=0,S=_.length/3-1;g<S;g+=3){const R=g+0,E=g+1,w=g+2;d.push(R,E,E,w,w,R)}}else return;const m=new(N_(d)?B_:k_)(d,1);m.version=x;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function lT(n,e,t,i){const r=i.isWebGL2;let s;function a(p){s=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function u(p,v){n.drawElements(s,v,o,p*l),t.update(v,s,1)}function h(p,v,x){if(x===0)return;let m,f;if(r)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,v,o,p*l,x),t.update(v,s,x)}function d(p,v,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<x;f++)this.render(p[f]/l,v[f]);else{m.multiDrawElementsWEBGL(s,v,0,o,p,0,x);let f=0;for(let _=0;_<x;_++)f+=v[_];t.update(f,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function cT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function uT(n,e){return n[0]-e[0]}function hT(n,e){return Math.abs(e[1])-Math.abs(n[1])}function fT(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new Ht,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=p!==void 0?p.length:0;let x=s.get(u);if(x===void 0||x.count!==v){let P=function(){j.dispose(),s.delete(u),u.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();const _=u.morphAttributes.position!==void 0,g=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let N=0;_===!0&&(N=1),g===!0&&(N=2),S===!0&&(N=3);let M=u.attributes.position.count*N,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const H=new Float32Array(M*T*4*v),j=new F_(H,M,T,v);j.type=rr,j.needsUpdate=!0;const oe=N*4;for(let G=0;G<v;G++){const $=R[G],se=E[G],F=w[G],C=M*T*4*G;for(let D=0;D<$.count;D++){const B=D*oe;_===!0&&(a.fromBufferAttribute($,D),H[C+B+0]=a.x,H[C+B+1]=a.y,H[C+B+2]=a.z,H[C+B+3]=0),g===!0&&(a.fromBufferAttribute(se,D),H[C+B+4]=a.x,H[C+B+5]=a.y,H[C+B+6]=a.z,H[C+B+7]=0),S===!0&&(a.fromBufferAttribute(F,D),H[C+B+8]=a.x,H[C+B+9]=a.y,H[C+B+10]=a.z,H[C+B+11]=F.itemSize===4?a.w:1)}}x={count:v,texture:j,size:new le(M,T)},s.set(u,x),u.addEventListener("dispose",P)}let m=0;for(let _=0;_<d.length;_++)m+=d[_];const f=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",f),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{const p=d===void 0?0:d.length;let v=i[u.id];if(v===void 0||v.length!==p){v=[];for(let g=0;g<p;g++)v[g]=[g,0];i[u.id]=v}for(let g=0;g<p;g++){const S=v[g];S[0]=g,S[1]=d[g]}v.sort(hT);for(let g=0;g<8;g++)g<p&&v[g][1]?(o[g][0]=v[g][0],o[g][1]=v[g][1]):(o[g][0]=Number.MAX_SAFE_INTEGER,o[g][1]=0);o.sort(uT);const x=u.morphAttributes.position,m=u.morphAttributes.normal;let f=0;for(let g=0;g<8;g++){const S=o[g],R=S[0],E=S[1];R!==Number.MAX_SAFE_INTEGER&&E?(x&&u.getAttribute("morphTarget"+g)!==x[R]&&u.setAttribute("morphTarget"+g,x[R]),m&&u.getAttribute("morphNormal"+g)!==m[R]&&u.setAttribute("morphNormal"+g,m[R]),r[g]=E,f+=E):(x&&u.hasAttribute("morphTarget"+g)===!0&&u.deleteAttribute("morphTarget"+g),m&&u.hasAttribute("morphNormal"+g)===!0&&u.deleteAttribute("morphNormal"+g),r[g]=0)}const _=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(n,"morphTargetBaseInfluence",_),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function dT(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class q_ extends yn{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:Vr,u!==Vr&&u!==fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Vr&&(i=ir),i===void 0&&u===fa&&(i=Gr),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const $_=new yn,Y_=new q_(1,1);Y_.compareFunction=D_;const K_=new F_,J_=new e1,Z_=new W_,u0=[],h0=[],f0=new Float32Array(16),d0=new Float32Array(9),p0=new Float32Array(4);function xa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=u0[r];if(s===void 0&&(s=new Float32Array(r),u0[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function iu(n,e){let t=h0[e];t===void 0&&(t=new Int32Array(e),h0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function pT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function mT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function gT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function vT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function _T(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Nt(t,i))return;p0.set(i),n.uniformMatrix2fv(this.addr,!1,p0),It(t,i)}}function xT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Nt(t,i))return;d0.set(i),n.uniformMatrix3fv(this.addr,!1,d0),It(t,i)}}function yT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Nt(t,i))return;f0.set(i),n.uniformMatrix4fv(this.addr,!1,f0),It(t,i)}}function ST(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function MT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function ET(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function wT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function TT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function AT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function bT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function CT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function RT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Y_:$_;t.setTexture2D(e||s,r)}function PT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||J_,r)}function LT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Z_,r)}function DT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||K_,r)}function NT(n){switch(n){case 5126:return pT;case 35664:return mT;case 35665:return gT;case 35666:return vT;case 35674:return _T;case 35675:return xT;case 35676:return yT;case 5124:case 35670:return ST;case 35667:case 35671:return MT;case 35668:case 35672:return ET;case 35669:case 35673:return wT;case 5125:return TT;case 36294:return AT;case 36295:return bT;case 36296:return CT;case 35678:case 36198:case 36298:case 36306:case 35682:return RT;case 35679:case 36299:case 36307:return PT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return DT}}function IT(n,e){n.uniform1fv(this.addr,e)}function UT(n,e){const t=xa(e,this.size,2);n.uniform2fv(this.addr,t)}function FT(n,e){const t=xa(e,this.size,3);n.uniform3fv(this.addr,t)}function OT(n,e){const t=xa(e,this.size,4);n.uniform4fv(this.addr,t)}function zT(n,e){const t=xa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function kT(n,e){const t=xa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function BT(n,e){const t=xa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function HT(n,e){n.uniform1iv(this.addr,e)}function GT(n,e){n.uniform2iv(this.addr,e)}function VT(n,e){n.uniform3iv(this.addr,e)}function WT(n,e){n.uniform4iv(this.addr,e)}function XT(n,e){n.uniform1uiv(this.addr,e)}function jT(n,e){n.uniform2uiv(this.addr,e)}function qT(n,e){n.uniform3uiv(this.addr,e)}function $T(n,e){n.uniform4uiv(this.addr,e)}function YT(n,e,t){const i=this.cache,r=e.length,s=iu(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||$_,s[a])}function KT(n,e,t){const i=this.cache,r=e.length,s=iu(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||J_,s[a])}function JT(n,e,t){const i=this.cache,r=e.length,s=iu(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Z_,s[a])}function ZT(n,e,t){const i=this.cache,r=e.length,s=iu(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||K_,s[a])}function QT(n){switch(n){case 5126:return IT;case 35664:return UT;case 35665:return FT;case 35666:return OT;case 35674:return zT;case 35675:return kT;case 35676:return BT;case 5124:case 35670:return HT;case 35667:case 35671:return GT;case 35668:case 35672:return VT;case 35669:case 35673:return WT;case 5125:return XT;case 36294:return jT;case 36295:return qT;case 36296:return $T;case 35678:case 36198:case 36298:case 36306:case 35682:return YT;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return ZT}}class e2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=NT(t.type)}}class t2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=QT(t.type)}}class n2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ch=/(\w+)(\])?(\[|\.)?/g;function m0(n,e){n.seq.push(e),n.map[e.id]=e}function i2(n,e,t){const i=n.name,r=i.length;for(ch.lastIndex=0;;){const s=ch.exec(i),a=ch.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){m0(t,c===void 0?new e2(o,n,e):new t2(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new n2(o),m0(t,h)),t=h}}}class tc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);i2(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function g0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const r2=37297;let s2=0;function a2(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function o2(n){const e=rt.getPrimaries(rt.workingColorSpace),t=rt.getPrimaries(n);let i;switch(e===t?i="":e===Dc&&t===Lc?i="LinearDisplayP3ToLinearSRGB":e===Lc&&t===Dc&&(i="LinearSRGBToLinearDisplayP3"),n){case Bi:case tu:return[i,"LinearTransferOETF"];case kt:case Dd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function v0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+a2(n.getShaderSource(e),a)}else return r}function l2(n,e){const t=o2(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function c2(n,e){let t;switch(e){case x_:t="Linear";break;case y_:t="Reinhard";break;case S_:t="OptimizedCineon";break;case Rd:t="ACESFilmic";break;case M_:t="AgX";break;case CM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function u2(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zs).join(`
`)}function h2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(zs).join(`
`)}function f2(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function d2(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function zs(n){return n!==""}function _0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function x0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const p2=/^[ \t]*#include +<([\w\d./]+)>/gm;function wf(n){return n.replace(p2,g2)}const m2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function g2(n,e){let t=qe[e];if(t===void 0){const i=m2.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wf(t)}const v2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function y0(n){return n.replace(v2,_2)}function _2(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function S0(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function x2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===v_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===__?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function y2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ua:case ha:e="ENVMAP_TYPE_CUBE";break;case eu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function S2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ha:e="ENVMAP_MODE_REFRACTION";break}return e}function M2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Cd:e="ENVMAP_BLENDING_MULTIPLY";break;case AM:e="ENVMAP_BLENDING_MIX";break;case bM:e="ENVMAP_BLENDING_ADD";break}return e}function E2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function w2(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=x2(t),c=y2(t),u=S2(t),h=M2(t),d=E2(t),p=t.isWebGL2?"":u2(t),v=h2(t),x=f2(s),m=r.createProgram();let f,_,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(zs).join(`
`),f.length>0&&(f+=`
`),_=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(zs).join(`
`),_.length>0&&(_+=`
`)):(f=[S0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),_=[p,S0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mr?"#define TONE_MAPPING":"",t.toneMapping!==mr?qe.tonemapping_pars_fragment:"",t.toneMapping!==mr?c2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,l2("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),a=wf(a),a=_0(a,t),a=x0(a,t),o=wf(o),o=_0(o,t),o=x0(o,t),a=y0(a),o=y0(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,f=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===km?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===km?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const S=g+f+a,R=g+_+o,E=g0(r,r.VERTEX_SHADER,S),w=g0(r,r.FRAGMENT_SHADER,R);r.attachShader(m,E),r.attachShader(m,w),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function N(j){if(n.debug.checkShaderErrors){const oe=r.getProgramInfoLog(m).trim(),P=r.getShaderInfoLog(E).trim(),G=r.getShaderInfoLog(w).trim();let $=!0,se=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,E,w);else{const F=v0(r,E,"vertex"),C=v0(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+oe+`
`+F+`
`+C)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(P===""||G==="")&&(se=!1);se&&(j.diagnostics={runnable:$,programLog:oe,vertexShader:{log:P,prefix:f},fragmentShader:{log:G,prefix:_}})}r.deleteShader(E),r.deleteShader(w),M=new tc(r,m),T=d2(r,m)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let T;this.getAttributes=function(){return T===void 0&&N(this),T};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=r.getProgramParameter(m,r2)),H},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=s2++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=w,this}let T2=0;class A2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new b2(e),t.set(e,i)),i}}class b2{constructor(e){this.id=T2++,this.code=e,this.usedTimes=0}}function C2(n,e,t,i,r,s,a){const o=new O_,l=new A2,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,T,H,j,oe){const P=j.fog,G=oe.geometry,$=M.isMeshStandardMaterial?j.environment:null,se=(M.isMeshStandardMaterial?t:e).get(M.envMap||$),F=se&&se.mapping===eu?se.image.height:null,C=v[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const D=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,B=D!==void 0?D.length:0;let V=0;G.morphAttributes.position!==void 0&&(V=1),G.morphAttributes.normal!==void 0&&(V=2),G.morphAttributes.color!==void 0&&(V=3);let z,q,O,Y;if(C){const tn=ci[C];z=tn.vertexShader,q=tn.fragmentShader}else z=M.vertexShader,q=M.fragmentShader,l.update(M),O=l.getVertexShaderID(M),Y=l.getFragmentShaderID(M);const ee=n.getRenderTarget(),me=oe.isInstancedMesh===!0,Te=oe.isBatchedMesh===!0,Me=!!M.map,Le=!!M.matcap,L=!!se,de=!!M.aoMap,Z=!!M.lightMap,ue=!!M.bumpMap,te=!!M.normalMap,Ne=!!M.displacementMap,we=!!M.emissiveMap,A=!!M.metalnessMap,y=!!M.roughnessMap,k=M.anisotropy>0,re=M.clearcoat>0,ne=M.iridescence>0,ae=M.sheen>0,_e=M.transmission>0,ce=k&&!!M.anisotropyMap,ge=re&&!!M.clearcoatMap,Re=re&&!!M.clearcoatNormalMap,xe=re&&!!M.clearcoatRoughnessMap,ie=ne&&!!M.iridescenceMap,Se=ne&&!!M.iridescenceThicknessMap,De=ae&&!!M.sheenColorMap,Ae=ae&&!!M.sheenRoughnessMap,be=!!M.specularMap,ve=!!M.specularColorMap,Ie=!!M.specularIntensityMap,We=_e&&!!M.transmissionMap,tt=_e&&!!M.thicknessMap,He=!!M.gradientMap,pe=!!M.alphaMap,U=M.alphaTest>0,he=!!M.alphaHash,Ee=!!M.extensions,Oe=!!G.attributes.uv1,Fe=!!G.attributes.uv2,at=!!G.attributes.uv3;let nt=mr;return M.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(nt=n.toneMapping),{isWebGL2:u,shaderID:C,shaderType:M.type,shaderName:M.name,vertexShader:z,fragmentShader:q,defines:M.defines,customVertexShaderID:O,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Te,instancing:me,instancingColor:me&&oe.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Bi,map:Me,matcap:Le,envMap:L,envMapMode:L&&se.mapping,envMapCubeUVHeight:F,aoMap:de,lightMap:Z,bumpMap:ue,normalMap:te,displacementMap:d&&Ne,emissiveMap:we,normalMapObjectSpace:te&&M.normalMapType===BM,normalMapTangentSpace:te&&M.normalMapType===Ld,metalnessMap:A,roughnessMap:y,anisotropy:k,anisotropyMap:ce,clearcoat:re,clearcoatMap:ge,clearcoatNormalMap:Re,clearcoatRoughnessMap:xe,iridescence:ne,iridescenceMap:ie,iridescenceThicknessMap:Se,sheen:ae,sheenColorMap:De,sheenRoughnessMap:Ae,specularMap:be,specularColorMap:ve,specularIntensityMap:Ie,transmission:_e,transmissionMap:We,thicknessMap:tt,gradientMap:He,opaque:M.transparent===!1&&M.blending===Zs,alphaMap:pe,alphaTest:U,alphaHash:he,combine:M.combine,mapUv:Me&&x(M.map.channel),aoMapUv:de&&x(M.aoMap.channel),lightMapUv:Z&&x(M.lightMap.channel),bumpMapUv:ue&&x(M.bumpMap.channel),normalMapUv:te&&x(M.normalMap.channel),displacementMapUv:Ne&&x(M.displacementMap.channel),emissiveMapUv:we&&x(M.emissiveMap.channel),metalnessMapUv:A&&x(M.metalnessMap.channel),roughnessMapUv:y&&x(M.roughnessMap.channel),anisotropyMapUv:ce&&x(M.anisotropyMap.channel),clearcoatMapUv:ge&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Re&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:De&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&x(M.sheenRoughnessMap.channel),specularMapUv:be&&x(M.specularMap.channel),specularColorMapUv:ve&&x(M.specularColorMap.channel),specularIntensityMapUv:Ie&&x(M.specularIntensityMap.channel),transmissionMapUv:We&&x(M.transmissionMap.channel),thicknessMapUv:tt&&x(M.thicknessMap.channel),alphaMapUv:pe&&x(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(te||k),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Oe,vertexUv2s:Fe,vertexUv3s:at,pointsUvs:oe.isPoints===!0&&!!G.attributes.uv&&(Me||pe),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:oe.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:V,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Me&&M.map.isVideoTexture===!0&&rt.getTransfer(M.map.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xt,flipSided:M.side===un,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Ee&&M.extensions.derivatives===!0,extensionFragDepth:Ee&&M.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const H in M.defines)T.push(H),T.push(M.defines[H]);return M.isRawShaderMaterial===!1&&(_(T,M),g(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function _(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function g(M,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function S(M){const T=v[M.type];let H;if(T){const j=ci[T];H=Eo.clone(j.uniforms)}else H=M.uniforms;return H}function R(M,T){let H;for(let j=0,oe=c.length;j<oe;j++){const P=c[j];if(P.cacheKey===T){H=P,++H.usedTimes;break}}return H===void 0&&(H=new w2(n,T,M,s),c.push(H)),H}function E(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function w(M){l.remove(M)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:R,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:N}}function R2(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function P2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function M0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function E0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,d,p,v,x,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:v,renderOrder:h.renderOrder,z:x,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=v,f.renderOrder=h.renderOrder,f.z=x,f.group=m),e++,f}function o(h,d,p,v,x,m){const f=a(h,d,p,v,x,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(h,d,p,v,x,m){const f=a(h,d,p,v,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||P2),i.length>1&&i.sort(d||M0),r.length>1&&r.sort(d||M0)}function u(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function L2(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new E0,n.set(i,[a])):r>=s.length?(a=new E0,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function D2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ke};break;case"SpotLight":t={position:new I,direction:new I,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function N2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let I2=0;function U2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function F2(n,e){const t=new D2,i=N2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,a=new ht,o=new ht;function l(u,h){let d=0,p=0,v=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let x=0,m=0,f=0,_=0,g=0,S=0,R=0,E=0,w=0,N=0,M=0;u.sort(U2);const T=h===!0?Math.PI:1;for(let j=0,oe=u.length;j<oe;j++){const P=u[j],G=P.color,$=P.intensity,se=P.distance,F=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=G.r*$*T,p+=G.g*$*T,v+=G.b*$*T;else if(P.isLightProbe){for(let C=0;C<9;C++)r.probe[C].addScaledVector(P.sh.coefficients[C],$);M++}else if(P.isDirectionalLight){const C=t.get(P);if(C.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const D=P.shadow,B=i.get(P);B.shadowBias=D.bias,B.shadowNormalBias=D.normalBias,B.shadowRadius=D.radius,B.shadowMapSize=D.mapSize,r.directionalShadow[x]=B,r.directionalShadowMap[x]=F,r.directionalShadowMatrix[x]=P.shadow.matrix,S++}r.directional[x]=C,x++}else if(P.isSpotLight){const C=t.get(P);C.position.setFromMatrixPosition(P.matrixWorld),C.color.copy(G).multiplyScalar($*T),C.distance=se,C.coneCos=Math.cos(P.angle),C.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),C.decay=P.decay,r.spot[f]=C;const D=P.shadow;if(P.map&&(r.spotLightMap[w]=P.map,w++,D.updateMatrices(P),P.castShadow&&N++),r.spotLightMatrix[f]=D.matrix,P.castShadow){const B=i.get(P);B.shadowBias=D.bias,B.shadowNormalBias=D.normalBias,B.shadowRadius=D.radius,B.shadowMapSize=D.mapSize,r.spotShadow[f]=B,r.spotShadowMap[f]=F,E++}f++}else if(P.isRectAreaLight){const C=t.get(P);C.color.copy(G).multiplyScalar($),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),r.rectArea[_]=C,_++}else if(P.isPointLight){const C=t.get(P);if(C.color.copy(P.color).multiplyScalar(P.intensity*T),C.distance=P.distance,C.decay=P.decay,P.castShadow){const D=P.shadow,B=i.get(P);B.shadowBias=D.bias,B.shadowNormalBias=D.normalBias,B.shadowRadius=D.radius,B.shadowMapSize=D.mapSize,B.shadowCameraNear=D.camera.near,B.shadowCameraFar=D.camera.far,r.pointShadow[m]=B,r.pointShadowMap[m]=F,r.pointShadowMatrix[m]=P.shadow.matrix,R++}r.point[m]=C,m++}else if(P.isHemisphereLight){const C=t.get(P);C.skyColor.copy(P.color).multiplyScalar($*T),C.groundColor.copy(P.groundColor).multiplyScalar($*T),r.hemi[g]=C,g++}}_>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=v;const H=r.hash;(H.directionalLength!==x||H.pointLength!==m||H.spotLength!==f||H.rectAreaLength!==_||H.hemiLength!==g||H.numDirectionalShadows!==S||H.numPointShadows!==R||H.numSpotShadows!==E||H.numSpotMaps!==w||H.numLightProbes!==M)&&(r.directional.length=x,r.spot.length=f,r.rectArea.length=_,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=E+w-N,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=M,H.directionalLength=x,H.pointLength=m,H.spotLength=f,H.rectAreaLength=_,H.hemiLength=g,H.numDirectionalShadows=S,H.numPointShadows=R,H.numSpotShadows=E,H.numSpotMaps=w,H.numLightProbes=M,r.version=I2++)}function c(u,h){let d=0,p=0,v=0,x=0,m=0;const f=h.matrixWorldInverse;for(let _=0,g=u.length;_<g;_++){const S=u[_];if(S.isDirectionalLight){const R=r.directional[d];R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),d++}else if(S.isSpotLight){const R=r.spot[v];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),v++}else if(S.isRectAreaLight){const R=r.rectArea[x];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),o.identity(),a.copy(S.matrixWorld),a.premultiply(f),o.extractRotation(a),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){const R=r.point[p];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const R=r.hemi[m];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:r}}function w0(n,e){const t=new F2(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(h){i.push(h)}function o(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function O2(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new w0(n,e),t.set(s,[l])):a>=o.length?(l=new w0(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class z2 extends Gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class k2 extends Gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const B2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function G2(n,e,t){let i=new Id;const r=new le,s=new le,a=new Ht,o=new z2({depthPacking:kM}),l=new k2,c={},u=t.maxTextureSize,h={[Sr]:un,[un]:Sr,[Xt]:Xt},d=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:B2,fragmentShader:H2}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new bt;v.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ze(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=v_;let f=this.type;this.render=function(E,w,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const M=n.getRenderTarget(),T=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),j=n.state;j.setBlending(Di),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const oe=f!==Mi&&this.type===Mi,P=f===Mi&&this.type!==Mi;for(let G=0,$=E.length;G<$;G++){const se=E[G],F=se.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const C=F.getFrameExtents();if(r.multiply(C),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/C.x),r.x=s.x*C.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/C.y),r.y=s.y*C.y,F.mapSize.y=s.y)),F.map===null||oe===!0||P===!0){const B=this.type!==Mi?{minFilter:ln,magFilter:ln}:{};F.map!==null&&F.map.dispose(),F.map=new Wn(r.x,r.y,B),F.map.texture.name=se.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const D=F.getViewportCount();for(let B=0;B<D;B++){const V=F.getViewport(B);a.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),j.viewport(a),F.updateMatrices(se,B),i=F.getFrustum(),S(w,N,F.camera,se,this.type)}F.isPointLightShadow!==!0&&this.type===Mi&&_(F,N),F.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(M,T,H)};function _(E,w){const N=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Wn(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(w,null,N,d,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(w,null,N,p,x,null)}function g(E,w,N,M){let T=null;const H=N.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(H!==void 0)T=H;else if(T=N.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const j=T.uuid,oe=w.uuid;let P=c[j];P===void 0&&(P={},c[j]=P);let G=P[oe];G===void 0&&(G=T.clone(),P[oe]=G,w.addEventListener("dispose",R)),T=G}if(T.visible=w.visible,T.wireframe=w.wireframe,M===Mi?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:h[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,N.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const j=n.properties.get(T);j.light=N}return T}function S(E,w,N,M,T){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===Mi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,E.matrixWorld);const oe=e.update(E),P=E.material;if(Array.isArray(P)){const G=oe.groups;for(let $=0,se=G.length;$<se;$++){const F=G[$],C=P[F.materialIndex];if(C&&C.visible){const D=g(E,C,M,T);E.onBeforeShadow(n,E,w,N,oe,D,F),n.renderBufferDirect(N,null,oe,D,E,F),E.onAfterShadow(n,E,w,N,oe,D,F)}}}else if(P.visible){const G=g(E,P,M,T);E.onBeforeShadow(n,E,w,N,oe,G,null),n.renderBufferDirect(N,null,oe,G,E,null),E.onAfterShadow(n,E,w,N,oe,G,null)}}const j=E.children;for(let oe=0,P=j.length;oe<P;oe++)S(j[oe],w,N,M,T)}function R(E){E.target.removeEventListener("dispose",R);for(const N in c){const M=c[N],T=E.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function V2(n,e,t){const i=t.isWebGL2;function r(){let U=!1;const he=new Ht;let Ee=null;const Oe=new Ht(0,0,0,0);return{setMask:function(Fe){Ee!==Fe&&!U&&(n.colorMask(Fe,Fe,Fe,Fe),Ee=Fe)},setLocked:function(Fe){U=Fe},setClear:function(Fe,at,nt,yt,tn){tn===!0&&(Fe*=yt,at*=yt,nt*=yt),he.set(Fe,at,nt,yt),Oe.equals(he)===!1&&(n.clearColor(Fe,at,nt,yt),Oe.copy(he))},reset:function(){U=!1,Ee=null,Oe.set(-1,0,0,0)}}}function s(){let U=!1,he=null,Ee=null,Oe=null;return{setTest:function(Fe){Fe?Te(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(Fe){he!==Fe&&!U&&(n.depthMask(Fe),he=Fe)},setFunc:function(Fe){if(Ee!==Fe){switch(Fe){case xM:n.depthFunc(n.NEVER);break;case yM:n.depthFunc(n.ALWAYS);break;case SM:n.depthFunc(n.LESS);break;case Cc:n.depthFunc(n.LEQUAL);break;case MM:n.depthFunc(n.EQUAL);break;case EM:n.depthFunc(n.GEQUAL);break;case wM:n.depthFunc(n.GREATER);break;case TM:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ee=Fe}},setLocked:function(Fe){U=Fe},setClear:function(Fe){Oe!==Fe&&(n.clearDepth(Fe),Oe=Fe)},reset:function(){U=!1,he=null,Ee=null,Oe=null}}}function a(){let U=!1,he=null,Ee=null,Oe=null,Fe=null,at=null,nt=null,yt=null,tn=null;return{setTest:function(lt){U||(lt?Te(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(lt){he!==lt&&!U&&(n.stencilMask(lt),he=lt)},setFunc:function(lt,nn,ai){(Ee!==lt||Oe!==nn||Fe!==ai)&&(n.stencilFunc(lt,nn,ai),Ee=lt,Oe=nn,Fe=ai)},setOp:function(lt,nn,ai){(at!==lt||nt!==nn||yt!==ai)&&(n.stencilOp(lt,nn,ai),at=lt,nt=nn,yt=ai)},setLocked:function(lt){U=lt},setClear:function(lt){tn!==lt&&(n.clearStencil(lt),tn=lt)},reset:function(){U=!1,he=null,Ee=null,Oe=null,Fe=null,at=null,nt=null,yt=null,tn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let d={},p={},v=new WeakMap,x=[],m=null,f=!1,_=null,g=null,S=null,R=null,E=null,w=null,N=null,M=new ke(0,0,0),T=0,H=!1,j=null,oe=null,P=null,G=null,$=null;const se=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,C=0;const D=n.getParameter(n.VERSION);D.indexOf("WebGL")!==-1?(C=parseFloat(/^WebGL (\d)/.exec(D)[1]),F=C>=1):D.indexOf("OpenGL ES")!==-1&&(C=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),F=C>=2);let B=null,V={};const z=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),O=new Ht().fromArray(z),Y=new Ht().fromArray(q);function ee(U,he,Ee,Oe){const Fe=new Uint8Array(4),at=n.createTexture();n.bindTexture(U,at),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let nt=0;nt<Ee;nt++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(he,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,Fe):n.texImage2D(he+nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Fe);return at}const me={};me[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),me[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(me[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),me[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Te(n.DEPTH_TEST),l.setFunc(Cc),we(!1),A(om),Te(n.CULL_FACE),te(Di);function Te(U){d[U]!==!0&&(n.enable(U),d[U]=!0)}function Me(U){d[U]!==!1&&(n.disable(U),d[U]=!1)}function Le(U,he){return p[U]!==he?(n.bindFramebuffer(U,he),p[U]=he,i&&(U===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=he),U===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=he)),!0):!1}function L(U,he){let Ee=x,Oe=!1;if(U)if(Ee=v.get(he),Ee===void 0&&(Ee=[],v.set(he,Ee)),U.isWebGLMultipleRenderTargets){const Fe=U.texture;if(Ee.length!==Fe.length||Ee[0]!==n.COLOR_ATTACHMENT0){for(let at=0,nt=Fe.length;at<nt;at++)Ee[at]=n.COLOR_ATTACHMENT0+at;Ee.length=Fe.length,Oe=!0}}else Ee[0]!==n.COLOR_ATTACHMENT0&&(Ee[0]=n.COLOR_ATTACHMENT0,Oe=!0);else Ee[0]!==n.BACK&&(Ee[0]=n.BACK,Oe=!0);Oe&&(t.isWebGL2?n.drawBuffers(Ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ee))}function de(U){return m!==U?(n.useProgram(U),m=U,!0):!1}const Z={[Ur]:n.FUNC_ADD,[rM]:n.FUNC_SUBTRACT,[sM]:n.FUNC_REVERSE_SUBTRACT};if(i)Z[um]=n.MIN,Z[hm]=n.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(Z[um]=U.MIN_EXT,Z[hm]=U.MAX_EXT)}const ue={[aM]:n.ZERO,[oM]:n.ONE,[lM]:n.SRC_COLOR,[mf]:n.SRC_ALPHA,[pM]:n.SRC_ALPHA_SATURATE,[fM]:n.DST_COLOR,[uM]:n.DST_ALPHA,[cM]:n.ONE_MINUS_SRC_COLOR,[gf]:n.ONE_MINUS_SRC_ALPHA,[dM]:n.ONE_MINUS_DST_COLOR,[hM]:n.ONE_MINUS_DST_ALPHA,[mM]:n.CONSTANT_COLOR,[gM]:n.ONE_MINUS_CONSTANT_COLOR,[vM]:n.CONSTANT_ALPHA,[_M]:n.ONE_MINUS_CONSTANT_ALPHA};function te(U,he,Ee,Oe,Fe,at,nt,yt,tn,lt){if(U===Di){f===!0&&(Me(n.BLEND),f=!1);return}if(f===!1&&(Te(n.BLEND),f=!0),U!==iM){if(U!==_||lt!==H){if((g!==Ur||E!==Ur)&&(n.blendEquation(n.FUNC_ADD),g=Ur,E=Ur),lt)switch(U){case Zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qs:n.blendFunc(n.ONE,n.ONE);break;case lm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qs:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case lm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,R=null,w=null,N=null,M.set(0,0,0),T=0,_=U,H=lt}return}Fe=Fe||he,at=at||Ee,nt=nt||Oe,(he!==g||Fe!==E)&&(n.blendEquationSeparate(Z[he],Z[Fe]),g=he,E=Fe),(Ee!==S||Oe!==R||at!==w||nt!==N)&&(n.blendFuncSeparate(ue[Ee],ue[Oe],ue[at],ue[nt]),S=Ee,R=Oe,w=at,N=nt),(yt.equals(M)===!1||tn!==T)&&(n.blendColor(yt.r,yt.g,yt.b,tn),M.copy(yt),T=tn),_=U,H=!1}function Ne(U,he){U.side===Xt?Me(n.CULL_FACE):Te(n.CULL_FACE);let Ee=U.side===un;he&&(Ee=!Ee),we(Ee),U.blending===Zs&&U.transparent===!1?te(Di):te(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);const Oe=U.stencilWrite;c.setTest(Oe),Oe&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),k(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Te(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}function we(U){j!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),j=U)}function A(U){U!==tM?(Te(n.CULL_FACE),U!==oe&&(U===om?n.cullFace(n.BACK):U===nM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),oe=U}function y(U){U!==P&&(F&&n.lineWidth(U),P=U)}function k(U,he,Ee){U?(Te(n.POLYGON_OFFSET_FILL),(G!==he||$!==Ee)&&(n.polygonOffset(he,Ee),G=he,$=Ee)):Me(n.POLYGON_OFFSET_FILL)}function re(U){U?Te(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}function ne(U){U===void 0&&(U=n.TEXTURE0+se-1),B!==U&&(n.activeTexture(U),B=U)}function ae(U,he,Ee){Ee===void 0&&(B===null?Ee=n.TEXTURE0+se-1:Ee=B);let Oe=V[Ee];Oe===void 0&&(Oe={type:void 0,texture:void 0},V[Ee]=Oe),(Oe.type!==U||Oe.texture!==he)&&(B!==Ee&&(n.activeTexture(Ee),B=Ee),n.bindTexture(U,he||me[U]),Oe.type=U,Oe.texture=he)}function _e(){const U=V[B];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ce(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(U){O.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),O.copy(U))}function We(U){Y.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Y.copy(U))}function tt(U,he){let Ee=h.get(he);Ee===void 0&&(Ee=new WeakMap,h.set(he,Ee));let Oe=Ee.get(U);Oe===void 0&&(Oe=n.getUniformBlockIndex(he,U.name),Ee.set(U,Oe))}function He(U,he){const Oe=h.get(he).get(U);u.get(he)!==Oe&&(n.uniformBlockBinding(he,Oe,U.__bindingPointIndex),u.set(he,Oe))}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},B=null,V={},p={},v=new WeakMap,x=[],m=null,f=!1,_=null,g=null,S=null,R=null,E=null,w=null,N=null,M=new ke(0,0,0),T=0,H=!1,j=null,oe=null,P=null,G=null,$=null,O.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Te,disable:Me,bindFramebuffer:Le,drawBuffers:L,useProgram:de,setBlending:te,setMaterial:Ne,setFlipSided:we,setCullFace:A,setLineWidth:y,setPolygonOffset:k,setScissorTest:re,activeTexture:ne,bindTexture:ae,unbindTexture:_e,compressedTexImage2D:ce,compressedTexImage3D:ge,texImage2D:be,texImage3D:ve,updateUBOMapping:tt,uniformBlockBinding:He,texStorage2D:De,texStorage3D:Ae,texSubImage2D:Re,texSubImage3D:xe,compressedTexSubImage2D:ie,compressedTexSubImage3D:Se,scissor:Ie,viewport:We,reset:pe}}function W2(n,e,t,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,y){return p?new OffscreenCanvas(A,y):Ic("canvas")}function x(A,y,k,re){let ne=1;if((A.width>re||A.height>re)&&(ne=re/Math.max(A.width,A.height)),ne<1||y===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ae=y?Ef:Math.floor,_e=ae(ne*A.width),ce=ae(ne*A.height);h===void 0&&(h=v(_e,ce));const ge=k?v(_e,ce):h;return ge.width=_e,ge.height=ce,ge.getContext("2d").drawImage(A,0,0,_e,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+_e+"x"+ce+")."),ge}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Bm(A.width)&&Bm(A.height)}function f(A){return o?!1:A.wrapS!==ei||A.wrapT!==ei||A.minFilter!==ln&&A.minFilter!==zn}function _(A,y){return A.generateMipmaps&&y&&A.minFilter!==ln&&A.minFilter!==zn}function g(A){n.generateMipmap(A)}function S(A,y,k,re,ne=!1){if(o===!1)return y;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ae=y;if(y===n.RED&&(k===n.FLOAT&&(ae=n.R32F),k===n.HALF_FLOAT&&(ae=n.R16F),k===n.UNSIGNED_BYTE&&(ae=n.R8)),y===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(ae=n.R8UI),k===n.UNSIGNED_SHORT&&(ae=n.R16UI),k===n.UNSIGNED_INT&&(ae=n.R32UI),k===n.BYTE&&(ae=n.R8I),k===n.SHORT&&(ae=n.R16I),k===n.INT&&(ae=n.R32I)),y===n.RG&&(k===n.FLOAT&&(ae=n.RG32F),k===n.HALF_FLOAT&&(ae=n.RG16F),k===n.UNSIGNED_BYTE&&(ae=n.RG8)),y===n.RGBA){const _e=ne?Pc:rt.getTransfer(re);k===n.FLOAT&&(ae=n.RGBA32F),k===n.HALF_FLOAT&&(ae=n.RGBA16F),k===n.UNSIGNED_BYTE&&(ae=_e===ct?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(ae=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(ae=n.RGB5_A1)}return(ae===n.R16F||ae===n.R32F||ae===n.RG16F||ae===n.RG32F||ae===n.RGBA16F||ae===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function R(A,y,k){return _(A,k)===!0||A.isFramebufferTexture&&A.minFilter!==ln&&A.minFilter!==zn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function E(A){return A===ln||A===fm||A===Uu?n.NEAREST:n.LINEAR}function w(A){const y=A.target;y.removeEventListener("dispose",w),M(y),y.isVideoTexture&&u.delete(y)}function N(A){const y=A.target;y.removeEventListener("dispose",N),H(y)}function M(A){const y=i.get(A);if(y.__webglInit===void 0)return;const k=A.source,re=d.get(k);if(re){const ne=re[y.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&T(A),Object.keys(re).length===0&&d.delete(k)}i.remove(A)}function T(A){const y=i.get(A);n.deleteTexture(y.__webglTexture);const k=A.source,re=d.get(k);delete re[y.__cacheKey],a.memory.textures--}function H(A){const y=A.texture,k=i.get(A),re=i.get(y);if(re.__webglTexture!==void 0&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(k.__webglFramebuffer[ne]))for(let ae=0;ae<k.__webglFramebuffer[ne].length;ae++)n.deleteFramebuffer(k.__webglFramebuffer[ne][ae]);else n.deleteFramebuffer(k.__webglFramebuffer[ne]);k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer[ne])}else{if(Array.isArray(k.__webglFramebuffer))for(let ne=0;ne<k.__webglFramebuffer.length;ne++)n.deleteFramebuffer(k.__webglFramebuffer[ne]);else n.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&n.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ne=0;ne<k.__webglColorRenderbuffer.length;ne++)k.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(k.__webglColorRenderbuffer[ne]);k.__webglDepthRenderbuffer&&n.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ne=0,ae=y.length;ne<ae;ne++){const _e=i.get(y[ne]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),a.memory.textures--),i.remove(y[ne])}i.remove(y),i.remove(A)}let j=0;function oe(){j=0}function P(){const A=j;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),j+=1,A}function G(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function $(A,y){const k=i.get(A);if(A.isVideoTexture&&Ne(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const re=A.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(k,A,y);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+y)}function se(A,y){const k=i.get(A);if(A.version>0&&k.__version!==A.version){O(k,A,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+y)}function F(A,y){const k=i.get(A);if(A.version>0&&k.__version!==A.version){O(k,A,y);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+y)}function C(A,y){const k=i.get(A);if(A.version>0&&k.__version!==A.version){Y(k,A,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+y)}const D={[Rc]:n.REPEAT,[ei]:n.CLAMP_TO_EDGE,[xf]:n.MIRRORED_REPEAT},B={[ln]:n.NEAREST,[fm]:n.NEAREST_MIPMAP_NEAREST,[Uu]:n.NEAREST_MIPMAP_LINEAR,[zn]:n.LINEAR,[RM]:n.LINEAR_MIPMAP_NEAREST,[Kr]:n.LINEAR_MIPMAP_LINEAR},V={[HM]:n.NEVER,[qM]:n.ALWAYS,[GM]:n.LESS,[D_]:n.LEQUAL,[VM]:n.EQUAL,[jM]:n.GEQUAL,[WM]:n.GREATER,[XM]:n.NOTEQUAL};function z(A,y,k){if(k?(n.texParameteri(A,n.TEXTURE_WRAP_S,D[y.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,D[y.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,D[y.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,B[y.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,B[y.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(y.wrapS!==ei||y.wrapT!==ei)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,E(y.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,E(y.minFilter)),y.minFilter!==ln&&y.minFilter!==zn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,V[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===ln||y.minFilter!==Uu&&y.minFilter!==Kr||y.type===rr&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===pi&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(A,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function q(A,y){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",w));const re=y.source;let ne=d.get(re);ne===void 0&&(ne={},d.set(re,ne));const ae=G(y);if(ae!==A.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),ne[ae].usedTimes++;const _e=ne[A.__cacheKey];_e!==void 0&&(ne[A.__cacheKey].usedTimes--,_e.usedTimes===0&&T(y)),A.__cacheKey=ae,A.__webglTexture=ne[ae].texture}return k}function O(A,y,k){let re=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(re=n.TEXTURE_3D);const ne=q(A,y),ae=y.source;t.bindTexture(re,A.__webglTexture,n.TEXTURE0+k);const _e=i.get(ae);if(ae.version!==_e.__version||ne===!0){t.activeTexture(n.TEXTURE0+k);const ce=rt.getPrimaries(rt.workingColorSpace),ge=y.colorSpace===Bn?null:rt.getPrimaries(y.colorSpace),Re=y.colorSpace===Bn||ce===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const xe=f(y)&&m(y.image)===!1;let ie=x(y.image,xe,!1,r.maxTextureSize);ie=we(y,ie);const Se=m(ie)||o,De=s.convert(y.format,y.colorSpace);let Ae=s.convert(y.type),be=S(y.internalFormat,De,Ae,y.colorSpace,y.isVideoTexture);z(re,y,Se);let ve;const Ie=y.mipmaps,We=o&&y.isVideoTexture!==!0&&be!==P_,tt=_e.__version===void 0||ne===!0,He=R(y,ie,Se);if(y.isDepthTexture)be=n.DEPTH_COMPONENT,o?y.type===rr?be=n.DEPTH_COMPONENT32F:y.type===ir?be=n.DEPTH_COMPONENT24:y.type===Gr?be=n.DEPTH24_STENCIL8:be=n.DEPTH_COMPONENT16:y.type===rr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Vr&&be===n.DEPTH_COMPONENT&&y.type!==Pd&&y.type!==ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=ir,Ae=s.convert(y.type)),y.format===fa&&be===n.DEPTH_COMPONENT&&(be=n.DEPTH_STENCIL,y.type!==Gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Gr,Ae=s.convert(y.type))),tt&&(We?t.texStorage2D(n.TEXTURE_2D,1,be,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,be,ie.width,ie.height,0,De,Ae,null));else if(y.isDataTexture)if(Ie.length>0&&Se){We&&tt&&t.texStorage2D(n.TEXTURE_2D,He,be,Ie[0].width,Ie[0].height);for(let pe=0,U=Ie.length;pe<U;pe++)ve=Ie[pe],We?t.texSubImage2D(n.TEXTURE_2D,pe,0,0,ve.width,ve.height,De,Ae,ve.data):t.texImage2D(n.TEXTURE_2D,pe,be,ve.width,ve.height,0,De,Ae,ve.data);y.generateMipmaps=!1}else We?(tt&&t.texStorage2D(n.TEXTURE_2D,He,be,ie.width,ie.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,De,Ae,ie.data)):t.texImage2D(n.TEXTURE_2D,0,be,ie.width,ie.height,0,De,Ae,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){We&&tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,be,Ie[0].width,Ie[0].height,ie.depth);for(let pe=0,U=Ie.length;pe<U;pe++)ve=Ie[pe],y.format!==ti?De!==null?We?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,ve.width,ve.height,ie.depth,De,ve.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,be,ve.width,ve.height,ie.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,ve.width,ve.height,ie.depth,De,Ae,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,be,ve.width,ve.height,ie.depth,0,De,Ae,ve.data)}else{We&&tt&&t.texStorage2D(n.TEXTURE_2D,He,be,Ie[0].width,Ie[0].height);for(let pe=0,U=Ie.length;pe<U;pe++)ve=Ie[pe],y.format!==ti?De!==null?We?t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,ve.width,ve.height,De,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,be,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage2D(n.TEXTURE_2D,pe,0,0,ve.width,ve.height,De,Ae,ve.data):t.texImage2D(n.TEXTURE_2D,pe,be,ve.width,ve.height,0,De,Ae,ve.data)}else if(y.isDataArrayTexture)We?(tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,be,ie.width,ie.height,ie.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,De,Ae,ie.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,ie.width,ie.height,ie.depth,0,De,Ae,ie.data);else if(y.isData3DTexture)We?(tt&&t.texStorage3D(n.TEXTURE_3D,He,be,ie.width,ie.height,ie.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,De,Ae,ie.data)):t.texImage3D(n.TEXTURE_3D,0,be,ie.width,ie.height,ie.depth,0,De,Ae,ie.data);else if(y.isFramebufferTexture){if(tt)if(We)t.texStorage2D(n.TEXTURE_2D,He,be,ie.width,ie.height);else{let pe=ie.width,U=ie.height;for(let he=0;he<He;he++)t.texImage2D(n.TEXTURE_2D,he,be,pe,U,0,De,Ae,null),pe>>=1,U>>=1}}else if(Ie.length>0&&Se){We&&tt&&t.texStorage2D(n.TEXTURE_2D,He,be,Ie[0].width,Ie[0].height);for(let pe=0,U=Ie.length;pe<U;pe++)ve=Ie[pe],We?t.texSubImage2D(n.TEXTURE_2D,pe,0,0,De,Ae,ve):t.texImage2D(n.TEXTURE_2D,pe,be,De,Ae,ve);y.generateMipmaps=!1}else We?(tt&&t.texStorage2D(n.TEXTURE_2D,He,be,ie.width,ie.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,Ae,ie)):t.texImage2D(n.TEXTURE_2D,0,be,De,Ae,ie);_(y,Se)&&g(re),_e.__version=ae.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Y(A,y,k){if(y.image.length!==6)return;const re=q(A,y),ne=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+k);const ae=i.get(ne);if(ne.version!==ae.__version||re===!0){t.activeTexture(n.TEXTURE0+k);const _e=rt.getPrimaries(rt.workingColorSpace),ce=y.colorSpace===Bn?null:rt.getPrimaries(y.colorSpace),ge=y.colorSpace===Bn||_e===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Re=y.isCompressedTexture||y.image[0].isCompressedTexture,xe=y.image[0]&&y.image[0].isDataTexture,ie=[];for(let pe=0;pe<6;pe++)!Re&&!xe?ie[pe]=x(y.image[pe],!1,!0,r.maxCubemapSize):ie[pe]=xe?y.image[pe].image:y.image[pe],ie[pe]=we(y,ie[pe]);const Se=ie[0],De=m(Se)||o,Ae=s.convert(y.format,y.colorSpace),be=s.convert(y.type),ve=S(y.internalFormat,Ae,be,y.colorSpace),Ie=o&&y.isVideoTexture!==!0,We=ae.__version===void 0||re===!0;let tt=R(y,Se,De);z(n.TEXTURE_CUBE_MAP,y,De);let He;if(Re){Ie&&We&&t.texStorage2D(n.TEXTURE_CUBE_MAP,tt,ve,Se.width,Se.height);for(let pe=0;pe<6;pe++){He=ie[pe].mipmaps;for(let U=0;U<He.length;U++){const he=He[U];y.format!==ti?Ae!==null?Ie?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U,0,0,he.width,he.height,Ae,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U,ve,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U,0,0,he.width,he.height,Ae,be,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U,ve,he.width,he.height,0,Ae,be,he.data)}}}else{He=y.mipmaps,Ie&&We&&(He.length>0&&tt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,tt,ve,ie[0].width,ie[0].height));for(let pe=0;pe<6;pe++)if(xe){Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ie[pe].width,ie[pe].height,Ae,be,ie[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ve,ie[pe].width,ie[pe].height,0,Ae,be,ie[pe].data);for(let U=0;U<He.length;U++){const Ee=He[U].image[pe].image;Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U+1,0,0,Ee.width,Ee.height,Ae,be,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U+1,ve,Ee.width,Ee.height,0,Ae,be,Ee.data)}}else{Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ae,be,ie[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ve,Ae,be,ie[pe]);for(let U=0;U<He.length;U++){const he=He[U];Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U+1,0,0,Ae,be,he.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U+1,ve,Ae,be,he.image[pe])}}}_(y,De)&&g(n.TEXTURE_CUBE_MAP),ae.__version=ne.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ee(A,y,k,re,ne,ae){const _e=s.convert(k.format,k.colorSpace),ce=s.convert(k.type),ge=S(k.internalFormat,_e,ce,k.colorSpace);if(!i.get(y).__hasExternalTextures){const xe=Math.max(1,y.width>>ae),ie=Math.max(1,y.height>>ae);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,ae,ge,xe,ie,y.depth,0,_e,ce,null):t.texImage2D(ne,ae,ge,xe,ie,0,_e,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),te(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,ne,i.get(k).__webglTexture,0,ue(y)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,ne,i.get(k).__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(A,y,k){if(n.bindRenderbuffer(n.RENDERBUFFER,A),y.depthBuffer&&!y.stencilBuffer){let re=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(k||te(y)){const ne=y.depthTexture;ne&&ne.isDepthTexture&&(ne.type===rr?re=n.DEPTH_COMPONENT32F:ne.type===ir&&(re=n.DEPTH_COMPONENT24));const ae=ue(y);te(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,re,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,re,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,re,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(y.depthBuffer&&y.stencilBuffer){const re=ue(y);k&&te(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,y.width,y.height):te(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const re=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ne=0;ne<re.length;ne++){const ae=re[ne],_e=s.convert(ae.format,ae.colorSpace),ce=s.convert(ae.type),ge=S(ae.internalFormat,_e,ce,ae.colorSpace),Re=ue(y);k&&te(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,ge,y.width,y.height):te(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,ge,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ge,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$(y.depthTexture,0);const re=i.get(y.depthTexture).__webglTexture,ne=ue(y);if(y.depthTexture.format===Vr)te(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(y.depthTexture.format===fa)te(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Me(A){const y=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Te(y.__webglFramebuffer,A)}else if(k){y.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[re]),y.__webglDepthbuffer[re]=n.createRenderbuffer(),me(y.__webglDepthbuffer[re],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),me(y.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(A,y,k){const re=i.get(A);y!==void 0&&ee(re.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Me(A)}function L(A){const y=A.texture,k=i.get(A),re=i.get(y);A.addEventListener("dispose",N),A.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=y.version,a.memory.textures++);const ne=A.isWebGLCubeRenderTarget===!0,ae=A.isWebGLMultipleRenderTargets===!0,_e=m(A)||o;if(ne){k.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(o&&y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[ce]=[];for(let ge=0;ge<y.mipmaps.length;ge++)k.__webglFramebuffer[ce][ge]=n.createFramebuffer()}else k.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let ce=0;ce<y.mipmaps.length;ce++)k.__webglFramebuffer[ce]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(ae)if(r.drawBuffers){const ce=A.texture;for(let ge=0,Re=ce.length;ge<Re;ge++){const xe=i.get(ce[ge]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&te(A)===!1){const ce=ae?y:[y];k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ge=0;ge<ce.length;ge++){const Re=ce[ge];k.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ge]);const xe=s.convert(Re.format,Re.colorSpace),ie=s.convert(Re.type),Se=S(Re.internalFormat,xe,ie,Re.colorSpace,A.isXRRenderTarget===!0),De=ue(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Se,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,k.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),me(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),z(n.TEXTURE_CUBE_MAP,y,_e);for(let ce=0;ce<6;ce++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)ee(k.__webglFramebuffer[ce][ge],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ge);else ee(k.__webglFramebuffer[ce],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);_(y,_e)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){const ce=A.texture;for(let ge=0,Re=ce.length;ge<Re;ge++){const xe=ce[ge],ie=i.get(xe);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),z(n.TEXTURE_2D,xe,_e),ee(k.__webglFramebuffer,A,xe,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,0),_(xe,_e)&&g(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?ce=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,re.__webglTexture),z(ce,y,_e),o&&y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)ee(k.__webglFramebuffer[ge],A,y,n.COLOR_ATTACHMENT0,ce,ge);else ee(k.__webglFramebuffer,A,y,n.COLOR_ATTACHMENT0,ce,0);_(y,_e)&&g(ce),t.unbindTexture()}A.depthBuffer&&Me(A)}function de(A){const y=m(A)||o,k=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let re=0,ne=k.length;re<ne;re++){const ae=k[re];if(_(ae,y)){const _e=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ce=i.get(ae).__webglTexture;t.bindTexture(_e,ce),g(_e),t.unbindTexture()}}}function Z(A){if(o&&A.samples>0&&te(A)===!1){const y=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],k=A.width,re=A.height;let ne=n.COLOR_BUFFER_BIT;const ae=[],_e=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(A),ge=A.isWebGLMultipleRenderTargets===!0;if(ge)for(let Re=0;Re<y.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Re=0;Re<y.length;Re++){ae.push(n.COLOR_ATTACHMENT0+Re),A.depthBuffer&&ae.push(_e);const xe=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(xe===!1&&(A.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),ge&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[Re]),xe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[_e]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_e])),ge){const ie=i.get(y[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,k,re,0,0,k,re,ne,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ae)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Re=0;Re<y.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,ce.__webglColorRenderbuffer[Re]);const xe=i.get(y[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function ue(A){return Math.min(r.maxSamples,A.samples)}function te(A){const y=i.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ne(A){const y=a.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function we(A,y){const k=A.colorSpace,re=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Sf||k!==Bi&&k!==Bn&&(rt.getTransfer(k)===ct?o===!1?e.has("EXT_sRGB")===!0&&re===ti?(A.format=Sf,A.minFilter=zn,A.generateMipmaps=!1):y=I_.sRGBToLinear(y):(re!==ti||ne!==gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}this.allocateTextureUnit=P,this.resetTextureUnits=oe,this.setTexture2D=$,this.setTexture2DArray=se,this.setTexture3D=F,this.setTextureCube=C,this.rebindTextures=Le,this.setupRenderTarget=L,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=te}function X2(n,e,t){const i=t.isWebGL2;function r(s,a=Bn){let o;const l=rt.getTransfer(a);if(s===gr)return n.UNSIGNED_BYTE;if(s===T_)return n.UNSIGNED_SHORT_4_4_4_4;if(s===A_)return n.UNSIGNED_SHORT_5_5_5_1;if(s===PM)return n.BYTE;if(s===LM)return n.SHORT;if(s===Pd)return n.UNSIGNED_SHORT;if(s===w_)return n.INT;if(s===ir)return n.UNSIGNED_INT;if(s===rr)return n.FLOAT;if(s===pi)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===DM)return n.ALPHA;if(s===ti)return n.RGBA;if(s===NM)return n.LUMINANCE;if(s===IM)return n.LUMINANCE_ALPHA;if(s===Vr)return n.DEPTH_COMPONENT;if(s===fa)return n.DEPTH_STENCIL;if(s===Sf)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===UM)return n.RED;if(s===b_)return n.RED_INTEGER;if(s===FM)return n.RG;if(s===C_)return n.RG_INTEGER;if(s===R_)return n.RGBA_INTEGER;if(s===Fu||s===Ou||s===zu||s===ku)if(l===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Fu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ou)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ku)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Fu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ou)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ku)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===dm||s===pm||s===mm||s===gm)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===dm)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===pm)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===mm)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gm)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===P_)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===vm||s===_m)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===vm)return l===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===_m)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===xm||s===ym||s===Sm||s===Mm||s===Em||s===wm||s===Tm||s===Am||s===bm||s===Cm||s===Rm||s===Pm||s===Lm||s===Dm)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===xm)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ym)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sm)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Mm)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Em)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===wm)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Tm)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Am)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bm)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Cm)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Rm)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Pm)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Lm)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Dm)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Bu||s===Nm||s===Im)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Bu)return l===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Nm)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Im)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===OM||s===Um||s===Fm||s===Om)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Bu)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Um)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Fm)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Om)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Gr?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class j2 extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pt extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const q2={type:"move"};class uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(q2)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Pt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class $2 extends _a{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,v=null;const x=t.getContextAttributes();let m=null,f=null;const _=[],g=[],S=new le;let R=null;const E=new kn;E.layers.enable(1),E.viewport=new Ht;const w=new kn;w.layers.enable(2),w.viewport=new Ht;const N=[E,w],M=new j2;M.layers.enable(1),M.layers.enable(2);let T=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let q=_[z];return q===void 0&&(q=new uh,_[z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(z){let q=_[z];return q===void 0&&(q=new uh,_[z]=q),q.getGripSpace()},this.getHand=function(z){let q=_[z];return q===void 0&&(q=new uh,_[z]=q),q.getHandSpace()};function j(z){const q=g.indexOf(z.inputSource);if(q===-1)return;const O=_[q];O!==void 0&&(O.update(z.inputSource,z.frame,c||a),O.dispatchEvent({type:z.type,data:z.inputSource}))}function oe(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",oe),r.removeEventListener("inputsourceschange",P);for(let z=0;z<_.length;z++){const q=g[z];q!==null&&(g[z]=null,_[z].disconnect(q))}T=null,H=null,e.setRenderTarget(m),p=null,d=null,h=null,r=null,f=null,V.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",oe),r.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Wn(p.framebufferWidth,p.framebufferHeight,{format:ti,type:gr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let q=null,O=null,Y=null;x.depth&&(Y=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=x.stencil?fa:Vr,O=x.stencil?Gr:ir);const ee={colorFormat:t.RGBA8,depthFormat:Y,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(ee),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Wn(d.textureWidth,d.textureHeight,{format:ti,type:gr,depthTexture:new q_(d.textureWidth,d.textureHeight,O,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const me=e.properties.get(f);me.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),V.setContext(r),V.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(z){for(let q=0;q<z.removed.length;q++){const O=z.removed[q],Y=g.indexOf(O);Y>=0&&(g[Y]=null,_[Y].disconnect(O))}for(let q=0;q<z.added.length;q++){const O=z.added[q];let Y=g.indexOf(O);if(Y===-1){for(let me=0;me<_.length;me++)if(me>=g.length){g.push(O),Y=me;break}else if(g[me]===null){g[me]=O,Y=me;break}if(Y===-1)break}const ee=_[Y];ee&&ee.connect(O)}}const G=new I,$=new I;function se(z,q,O){G.setFromMatrixPosition(q.matrixWorld),$.setFromMatrixPosition(O.matrixWorld);const Y=G.distanceTo($),ee=q.projectionMatrix.elements,me=O.projectionMatrix.elements,Te=ee[14]/(ee[10]-1),Me=ee[14]/(ee[10]+1),Le=(ee[9]+1)/ee[5],L=(ee[9]-1)/ee[5],de=(ee[8]-1)/ee[0],Z=(me[8]+1)/me[0],ue=Te*de,te=Te*Z,Ne=Y/(-de+Z),we=Ne*-de;q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(we),z.translateZ(Ne),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const A=Te+Ne,y=Me+Ne,k=ue-we,re=te+(Y-we),ne=Le*Me/y*A,ae=L*Me/y*A;z.projectionMatrix.makePerspective(k,re,ne,ae,A,y),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function F(z,q){q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;M.near=w.near=E.near=z.near,M.far=w.far=E.far=z.far,(T!==M.near||H!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,H=M.far);const q=z.parent,O=M.cameras;F(M,q);for(let Y=0;Y<O.length;Y++)F(O[Y],q);O.length===2?se(M,E,w):M.projectionMatrix.copy(E.projectionMatrix),C(z,M,q)};function C(z,q,O){O===null?z.matrix.copy(q.matrixWorld):(z.matrix.copy(O.matrixWorld),z.matrix.invert(),z.matrix.multiply(q.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(q.projectionMatrix),z.projectionMatrixInverse.copy(q.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Mf*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)};let D=null;function B(z,q){if(u=q.getViewerPose(c||a),v=q,u!==null){const O=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let Y=!1;O.length!==M.cameras.length&&(M.cameras.length=0,Y=!0);for(let ee=0;ee<O.length;ee++){const me=O[ee];let Te=null;if(p!==null)Te=p.getViewport(me);else{const Le=h.getViewSubImage(d,me);Te=Le.viewport,ee===0&&(e.setRenderTargetTextures(f,Le.colorTexture,d.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(f))}let Me=N[ee];Me===void 0&&(Me=new kn,Me.layers.enable(ee),Me.viewport=new Ht,N[ee]=Me),Me.matrix.fromArray(me.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(me.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Te.x,Te.y,Te.width,Te.height),ee===0&&(M.matrix.copy(Me.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Y===!0&&M.cameras.push(Me)}}for(let O=0;O<_.length;O++){const Y=g[O],ee=_[O];Y!==null&&ee!==void 0&&ee.update(Y,q,c||a)}D&&D(z,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),v=null}const V=new j_;V.setAnimationLoop(B),this.setAnimationLoop=function(z){D=z},this.dispose=function(){}}}function Y2(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,H_(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,g,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,_,g):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===un&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===un&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const g=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*g,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,g){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=g*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===un&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function K2(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const S=g.program;i.uniformBlockBinding(_,S)}function c(_,g){let S=r[_.id];S===void 0&&(v(_),S=u(_),r[_.id]=S,_.addEventListener("dispose",m));const R=g.program;i.updateUBOMapping(_,R);const E=e.render.frame;s[_.id]!==E&&(d(_),s[_.id]=E)}function u(_){const g=h();_.__bindingPointIndex=g;const S=n.createBuffer(),R=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,R,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,S),S}function h(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const g=r[_.id],S=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let E=0,w=S.length;E<w;E++){const N=Array.isArray(S[E])?S[E]:[S[E]];for(let M=0,T=N.length;M<T;M++){const H=N[M];if(p(H,E,M,R)===!0){const j=H.__offset,oe=Array.isArray(H.value)?H.value:[H.value];let P=0;for(let G=0;G<oe.length;G++){const $=oe[G],se=x($);typeof $=="number"||typeof $=="boolean"?(H.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,j+P,H.__data)):$.isMatrix3?(H.__data[0]=$.elements[0],H.__data[1]=$.elements[1],H.__data[2]=$.elements[2],H.__data[3]=0,H.__data[4]=$.elements[3],H.__data[5]=$.elements[4],H.__data[6]=$.elements[5],H.__data[7]=0,H.__data[8]=$.elements[6],H.__data[9]=$.elements[7],H.__data[10]=$.elements[8],H.__data[11]=0):($.toArray(H.__data,P),P+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,j,H.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,g,S,R){const E=_.value,w=g+"_"+S;if(R[w]===void 0)return typeof E=="number"||typeof E=="boolean"?R[w]=E:R[w]=E.clone(),!0;{const N=R[w];if(typeof E=="number"||typeof E=="boolean"){if(N!==E)return R[w]=E,!0}else if(N.equals(E)===!1)return N.copy(E),!0}return!1}function v(_){const g=_.uniforms;let S=0;const R=16;for(let w=0,N=g.length;w<N;w++){const M=Array.isArray(g[w])?g[w]:[g[w]];for(let T=0,H=M.length;T<H;T++){const j=M[T],oe=Array.isArray(j.value)?j.value:[j.value];for(let P=0,G=oe.length;P<G;P++){const $=oe[P],se=x($),F=S%R;F!==0&&R-F<se.boundary&&(S+=R-F),j.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=S,S+=se.storage}}}const E=S%R;return E>0&&(S+=R-E),_.__size=S,_.__cache={},this}function x(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const S=a.indexOf(g.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function f(){for(const _ in r)n.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Q_{constructor(e={}){const{canvas:t=YM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const f=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this._useLegacyLights=!1,this.toneMapping=mr,this.toneMappingExposure=1;const g=this;let S=!1,R=0,E=0,w=null,N=-1,M=null;const T=new Ht,H=new Ht;let j=null;const oe=new ke(0);let P=0,G=t.width,$=t.height,se=1,F=null,C=null;const D=new Ht(0,0,G,$),B=new Ht(0,0,G,$);let V=!1;const z=new Id;let q=!1,O=!1,Y=null;const ee=new ht,me=new le,Te=new I,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return w===null?se:1}let L=i;function de(b,X){for(let J=0;J<b.length;J++){const Q=b[J],K=t.getContext(Q,X);if(K!==null)return K}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bd}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",he,!1),L===null){const X=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&X.shift(),L=de(X,b),L===null)throw de(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Z,ue,te,Ne,we,A,y,k,re,ne,ae,_e,ce,ge,Re,xe,ie,Se,De,Ae,be,ve,Ie,We;function tt(){Z=new aT(L),ue=new eT(L,Z,e),Z.init(ue),ve=new X2(L,Z,ue),te=new V2(L,Z,ue),Ne=new cT(L),we=new R2,A=new W2(L,Z,te,we,ue,ve,Ne),y=new nT(g),k=new sT(g),re=new v1(L,ue),Ie=new Zw(L,Z,re,ue),ne=new oT(L,re,Ne,Ie),ae=new dT(L,ne,re,Ne),De=new fT(L,ue,A),xe=new tT(we),_e=new C2(g,y,k,Z,ue,Ie,xe),ce=new Y2(g,we),ge=new L2,Re=new O2(Z,ue),Se=new Jw(g,y,k,te,ae,d,l),ie=new G2(g,ae,ue),We=new K2(L,Ne,ue,te),Ae=new Qw(L,Z,Ne,ue),be=new lT(L,Z,Ne,ue),Ne.programs=_e.programs,g.capabilities=ue,g.extensions=Z,g.properties=we,g.renderLists=ge,g.shadowMap=ie,g.state=te,g.info=Ne}tt();const He=new $2(g,L);this.xr=He,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=Z.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Z.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(b){b!==void 0&&(se=b,this.setSize(G,$,!1))},this.getSize=function(b){return b.set(G,$)},this.setSize=function(b,X,J=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,$=X,t.width=Math.floor(b*se),t.height=Math.floor(X*se),J===!0&&(t.style.width=b+"px",t.style.height=X+"px"),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(G*se,$*se).floor()},this.setDrawingBufferSize=function(b,X,J){G=b,$=X,se=J,t.width=Math.floor(b*J),t.height=Math.floor(X*J),this.setViewport(0,0,b,X)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(D)},this.setViewport=function(b,X,J,Q){b.isVector4?D.set(b.x,b.y,b.z,b.w):D.set(b,X,J,Q),te.viewport(T.copy(D).multiplyScalar(se).floor())},this.getScissor=function(b){return b.copy(B)},this.setScissor=function(b,X,J,Q){b.isVector4?B.set(b.x,b.y,b.z,b.w):B.set(b,X,J,Q),te.scissor(H.copy(B).multiplyScalar(se).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(b){te.setScissorTest(V=b)},this.setOpaqueSort=function(b){F=b},this.setTransparentSort=function(b){C=b},this.getClearColor=function(b){return b.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(b=!0,X=!0,J=!0){let Q=0;if(b){let K=!1;if(w!==null){const Ce=w.texture.format;K=Ce===R_||Ce===C_||Ce===b_}if(K){const Ce=w.texture.type,Ue=Ce===gr||Ce===ir||Ce===Pd||Ce===Gr||Ce===T_||Ce===A_,Be=Se.getClearColor(),Ve=Se.getClearAlpha(),$e=Be.r,Xe=Be.g,je=Be.b;Ue?(p[0]=$e,p[1]=Xe,p[2]=je,p[3]=Ve,L.clearBufferuiv(L.COLOR,0,p)):(v[0]=$e,v[1]=Xe,v[2]=je,v[3]=Ve,L.clearBufferiv(L.COLOR,0,v))}else Q|=L.COLOR_BUFFER_BIT}X&&(Q|=L.DEPTH_BUFFER_BIT),J&&(Q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ge.dispose(),Re.dispose(),we.dispose(),y.dispose(),k.dispose(),ae.dispose(),Ie.dispose(),We.dispose(),_e.dispose(),He.dispose(),He.removeEventListener("sessionstart",tn),He.removeEventListener("sessionend",lt),Y&&(Y.dispose(),Y=null),nn.stop()};function pe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=Ne.autoReset,X=ie.enabled,J=ie.autoUpdate,Q=ie.needsUpdate,K=ie.type;tt(),Ne.autoReset=b,ie.enabled=X,ie.autoUpdate=J,ie.needsUpdate=Q,ie.type=K}function he(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ee(b){const X=b.target;X.removeEventListener("dispose",Ee),Oe(X)}function Oe(b){Fe(b),we.remove(b)}function Fe(b){const X=we.get(b).programs;X!==void 0&&(X.forEach(function(J){_e.releaseProgram(J)}),b.isShaderMaterial&&_e.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,J,Q,K,Ce){X===null&&(X=Me);const Ue=K.isMesh&&K.matrixWorld.determinant()<0,Be=Ex(b,X,J,Q,K);te.setMaterial(Q,Ue);let Ve=J.index,$e=1;if(Q.wireframe===!0){if(Ve=ne.getWireframeAttribute(J),Ve===void 0)return;$e=2}const Xe=J.drawRange,je=J.attributes.position;let Et=Xe.start*$e,Sn=(Xe.start+Xe.count)*$e;Ce!==null&&(Et=Math.max(Et,Ce.start*$e),Sn=Math.min(Sn,(Ce.start+Ce.count)*$e)),Ve!==null?(Et=Math.max(Et,0),Sn=Math.min(Sn,Ve.count)):je!=null&&(Et=Math.max(Et,0),Sn=Math.min(Sn,je.count));const Ut=Sn-Et;if(Ut<0||Ut===1/0)return;Ie.setup(K,Q,Be,J,Ve);let gi,mt=Ae;if(Ve!==null&&(gi=re.get(Ve),mt=be,mt.setIndex(gi)),K.isMesh)Q.wireframe===!0?(te.setLineWidth(Q.wireframeLinewidth*Le()),mt.setMode(L.LINES)):mt.setMode(L.TRIANGLES);else if(K.isLine){let Ye=Q.linewidth;Ye===void 0&&(Ye=1),te.setLineWidth(Ye*Le()),K.isLineSegments?mt.setMode(L.LINES):K.isLineLoop?mt.setMode(L.LINE_LOOP):mt.setMode(L.LINE_STRIP)}else K.isPoints?mt.setMode(L.POINTS):K.isSprite&&mt.setMode(L.TRIANGLES);if(K.isBatchedMesh)mt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)mt.renderInstances(Et,Ut,K.count);else if(J.isInstancedBufferGeometry){const Ye=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,su=Math.min(J.instanceCount,Ye);mt.renderInstances(Et,Ut,su)}else mt.render(Et,Ut)};function at(b,X,J){b.transparent===!0&&b.side===Xt&&b.forceSinglePass===!1?(b.side=un,b.needsUpdate=!0,ko(b,X,J),b.side=Sr,b.needsUpdate=!0,ko(b,X,J),b.side=Xt):ko(b,X,J)}this.compile=function(b,X,J=null){J===null&&(J=b),m=Re.get(J),m.init(),_.push(m),J.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),b!==J&&b.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights(g._useLegacyLights);const Q=new Set;return b.traverse(function(K){const Ce=K.material;if(Ce)if(Array.isArray(Ce))for(let Ue=0;Ue<Ce.length;Ue++){const Be=Ce[Ue];at(Be,J,K),Q.add(Be)}else at(Ce,J,K),Q.add(Ce)}),_.pop(),m=null,Q},this.compileAsync=function(b,X,J=null){const Q=this.compile(b,X,J);return new Promise(K=>{function Ce(){if(Q.forEach(function(Ue){we.get(Ue).currentProgram.isReady()&&Q.delete(Ue)}),Q.size===0){K(b);return}setTimeout(Ce,10)}Z.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let nt=null;function yt(b){nt&&nt(b)}function tn(){nn.stop()}function lt(){nn.start()}const nn=new j_;nn.setAnimationLoop(yt),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(b){nt=b,He.setAnimationLoop(b),b===null?nn.stop():nn.start()},He.addEventListener("sessionstart",tn),He.addEventListener("sessionend",lt),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(X),X=He.getCamera()),b.isScene===!0&&b.onBeforeRender(g,b,X,w),m=Re.get(b,_.length),m.init(),_.push(m),ee.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),z.setFromProjectionMatrix(ee),O=this.localClippingEnabled,q=xe.init(this.clippingPlanes,O),x=ge.get(b,f.length),x.init(),f.push(x),ai(b,X,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(F,C),this.info.render.frame++,q===!0&&xe.beginShadows();const J=m.state.shadowsArray;if(ie.render(J,b,X),q===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Se.render(x,b),m.setupLights(g._useLegacyLights),X.isArrayCamera){const Q=X.cameras;for(let K=0,Ce=Q.length;K<Ce;K++){const Ue=Q[K];jd(x,b,Ue,Ue.viewport)}}else jd(x,b,X);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(g,b,X),Ie.resetDefaultState(),N=-1,M=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function ai(b,X,J,Q){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)J=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||z.intersectsSprite(b)){Q&&Te.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ee);const Ue=ae.update(b),Be=b.material;Be.visible&&x.push(b,Ue,Be,J,Te.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||z.intersectsObject(b))){const Ue=ae.update(b),Be=b.material;if(Q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Te.copy(b.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Te.copy(Ue.boundingSphere.center)),Te.applyMatrix4(b.matrixWorld).applyMatrix4(ee)),Array.isArray(Be)){const Ve=Ue.groups;for(let $e=0,Xe=Ve.length;$e<Xe;$e++){const je=Ve[$e],Et=Be[je.materialIndex];Et&&Et.visible&&x.push(b,Ue,Et,J,Te.z,je)}}else Be.visible&&x.push(b,Ue,Be,J,Te.z,null)}}const Ce=b.children;for(let Ue=0,Be=Ce.length;Ue<Be;Ue++)ai(Ce[Ue],X,J,Q)}function jd(b,X,J,Q){const K=b.opaque,Ce=b.transmissive,Ue=b.transparent;m.setupLightsView(J),q===!0&&xe.setGlobalState(g.clippingPlanes,J),Ce.length>0&&Mx(K,Ce,X,J),Q&&te.viewport(T.copy(Q)),K.length>0&&zo(K,X,J),Ce.length>0&&zo(Ce,X,J),Ue.length>0&&zo(Ue,X,J),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function Mx(b,X,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;const Ce=ue.isWebGL2;Y===null&&(Y=new Wn(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")?pi:gr,minFilter:Kr,samples:Ce?4:0})),g.getDrawingBufferSize(me),Ce?Y.setSize(me.x,me.y):Y.setSize(Ef(me.x),Ef(me.y));const Ue=g.getRenderTarget();g.setRenderTarget(Y),g.getClearColor(oe),P=g.getClearAlpha(),P<1&&g.setClearColor(16777215,.5),g.clear();const Be=g.toneMapping;g.toneMapping=mr,zo(b,J,Q),A.updateMultisampleRenderTarget(Y),A.updateRenderTargetMipmap(Y);let Ve=!1;for(let $e=0,Xe=X.length;$e<Xe;$e++){const je=X[$e],Et=je.object,Sn=je.geometry,Ut=je.material,gi=je.group;if(Ut.side===Xt&&Et.layers.test(Q.layers)){const mt=Ut.side;Ut.side=un,Ut.needsUpdate=!0,qd(Et,J,Q,Sn,Ut,gi),Ut.side=mt,Ut.needsUpdate=!0,Ve=!0}}Ve===!0&&(A.updateMultisampleRenderTarget(Y),A.updateRenderTargetMipmap(Y)),g.setRenderTarget(Ue),g.setClearColor(oe,P),g.toneMapping=Be}function zo(b,X,J){const Q=X.isScene===!0?X.overrideMaterial:null;for(let K=0,Ce=b.length;K<Ce;K++){const Ue=b[K],Be=Ue.object,Ve=Ue.geometry,$e=Q===null?Ue.material:Q,Xe=Ue.group;Be.layers.test(J.layers)&&qd(Be,X,J,Ve,$e,Xe)}}function qd(b,X,J,Q,K,Ce){b.onBeforeRender(g,X,J,Q,K,Ce),b.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),K.onBeforeRender(g,X,J,Q,b,Ce),K.transparent===!0&&K.side===Xt&&K.forceSinglePass===!1?(K.side=un,K.needsUpdate=!0,g.renderBufferDirect(J,X,Q,K,b,Ce),K.side=Sr,K.needsUpdate=!0,g.renderBufferDirect(J,X,Q,K,b,Ce),K.side=Xt):g.renderBufferDirect(J,X,Q,K,b,Ce),b.onAfterRender(g,X,J,Q,K,Ce)}function ko(b,X,J){X.isScene!==!0&&(X=Me);const Q=we.get(b),K=m.state.lights,Ce=m.state.shadowsArray,Ue=K.state.version,Be=_e.getParameters(b,K.state,Ce,X,J),Ve=_e.getProgramCacheKey(Be);let $e=Q.programs;Q.environment=b.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(b.isMeshStandardMaterial?k:y).get(b.envMap||Q.environment),$e===void 0&&(b.addEventListener("dispose",Ee),$e=new Map,Q.programs=$e);let Xe=$e.get(Ve);if(Xe!==void 0){if(Q.currentProgram===Xe&&Q.lightsStateVersion===Ue)return Yd(b,Be),Xe}else Be.uniforms=_e.getUniforms(b),b.onBuild(J,Be,g),b.onBeforeCompile(Be,g),Xe=_e.acquireProgram(Be,Ve),$e.set(Ve,Xe),Q.uniforms=Be.uniforms;const je=Q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(je.clippingPlanes=xe.uniform),Yd(b,Be),Q.needsLights=Tx(b),Q.lightsStateVersion=Ue,Q.needsLights&&(je.ambientLightColor.value=K.state.ambient,je.lightProbe.value=K.state.probe,je.directionalLights.value=K.state.directional,je.directionalLightShadows.value=K.state.directionalShadow,je.spotLights.value=K.state.spot,je.spotLightShadows.value=K.state.spotShadow,je.rectAreaLights.value=K.state.rectArea,je.ltc_1.value=K.state.rectAreaLTC1,je.ltc_2.value=K.state.rectAreaLTC2,je.pointLights.value=K.state.point,je.pointLightShadows.value=K.state.pointShadow,je.hemisphereLights.value=K.state.hemi,je.directionalShadowMap.value=K.state.directionalShadowMap,je.directionalShadowMatrix.value=K.state.directionalShadowMatrix,je.spotShadowMap.value=K.state.spotShadowMap,je.spotLightMatrix.value=K.state.spotLightMatrix,je.spotLightMap.value=K.state.spotLightMap,je.pointShadowMap.value=K.state.pointShadowMap,je.pointShadowMatrix.value=K.state.pointShadowMatrix),Q.currentProgram=Xe,Q.uniformsList=null,Xe}function $d(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=tc.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function Yd(b,X){const J=we.get(b);J.outputColorSpace=X.outputColorSpace,J.batching=X.batching,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function Ex(b,X,J,Q,K){X.isScene!==!0&&(X=Me),A.resetTextureUnits();const Ce=X.fog,Ue=Q.isMeshStandardMaterial?X.environment:null,Be=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Bi,Ve=(Q.isMeshStandardMaterial?k:y).get(Q.envMap||Ue),$e=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Xe=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),je=!!J.morphAttributes.position,Et=!!J.morphAttributes.normal,Sn=!!J.morphAttributes.color;let Ut=mr;Q.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ut=g.toneMapping);const gi=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,mt=gi!==void 0?gi.length:0,Ye=we.get(Q),su=m.state.lights;if(q===!0&&(O===!0||b!==M)){const In=b===M&&Q.id===N;xe.setState(Q,b,In)}let St=!1;Q.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==su.state.version||Ye.outputColorSpace!==Be||K.isBatchedMesh&&Ye.batching===!1||!K.isBatchedMesh&&Ye.batching===!0||K.isInstancedMesh&&Ye.instancing===!1||!K.isInstancedMesh&&Ye.instancing===!0||K.isSkinnedMesh&&Ye.skinning===!1||!K.isSkinnedMesh&&Ye.skinning===!0||K.isInstancedMesh&&Ye.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ye.instancingColor===!1&&K.instanceColor!==null||Ye.envMap!==Ve||Q.fog===!0&&Ye.fog!==Ce||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==xe.numPlanes||Ye.numIntersection!==xe.numIntersection)||Ye.vertexAlphas!==$e||Ye.vertexTangents!==Xe||Ye.morphTargets!==je||Ye.morphNormals!==Et||Ye.morphColors!==Sn||Ye.toneMapping!==Ut||ue.isWebGL2===!0&&Ye.morphTargetsCount!==mt)&&(St=!0):(St=!0,Ye.__version=Q.version);let Tr=Ye.currentProgram;St===!0&&(Tr=ko(Q,X,K));let Kd=!1,Sa=!1,au=!1;const $t=Tr.getUniforms(),Ar=Ye.uniforms;if(te.useProgram(Tr.program)&&(Kd=!0,Sa=!0,au=!0),Q.id!==N&&(N=Q.id,Sa=!0),Kd||M!==b){$t.setValue(L,"projectionMatrix",b.projectionMatrix),$t.setValue(L,"viewMatrix",b.matrixWorldInverse);const In=$t.map.cameraPosition;In!==void 0&&In.setValue(L,Te.setFromMatrixPosition(b.matrixWorld)),ue.logarithmicDepthBuffer&&$t.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&$t.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Sa=!0,au=!0)}if(K.isSkinnedMesh){$t.setOptional(L,K,"bindMatrix"),$t.setOptional(L,K,"bindMatrixInverse");const In=K.skeleton;In&&(ue.floatVertexTextures?(In.boneTexture===null&&In.computeBoneTexture(),$t.setValue(L,"boneTexture",In.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&($t.setOptional(L,K,"batchingTexture"),$t.setValue(L,"batchingTexture",K._matricesTexture,A));const ou=J.morphAttributes;if((ou.position!==void 0||ou.normal!==void 0||ou.color!==void 0&&ue.isWebGL2===!0)&&De.update(K,J,Tr),(Sa||Ye.receiveShadow!==K.receiveShadow)&&(Ye.receiveShadow=K.receiveShadow,$t.setValue(L,"receiveShadow",K.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Ar.envMap.value=Ve,Ar.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),Sa&&($t.setValue(L,"toneMappingExposure",g.toneMappingExposure),Ye.needsLights&&wx(Ar,au),Ce&&Q.fog===!0&&ce.refreshFogUniforms(Ar,Ce),ce.refreshMaterialUniforms(Ar,Q,se,$,Y),tc.upload(L,$d(Ye),Ar,A)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(tc.upload(L,$d(Ye),Ar,A),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&$t.setValue(L,"center",K.center),$t.setValue(L,"modelViewMatrix",K.modelViewMatrix),$t.setValue(L,"normalMatrix",K.normalMatrix),$t.setValue(L,"modelMatrix",K.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const In=Q.uniformsGroups;for(let lu=0,Ax=In.length;lu<Ax;lu++)if(ue.isWebGL2){const Jd=In[lu];We.update(Jd,Tr),We.bind(Jd,Tr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tr}function wx(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function Tx(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,X,J){we.get(b.texture).__webglTexture=X,we.get(b.depthTexture).__webglTexture=J;const Q=we.get(b);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,X){const J=we.get(b);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(b,X=0,J=0){w=b,R=X,E=J;let Q=!0,K=null,Ce=!1,Ue=!1;if(b){const Ve=we.get(b);Ve.__useDefaultFramebuffer!==void 0?(te.bindFramebuffer(L.FRAMEBUFFER,null),Q=!1):Ve.__webglFramebuffer===void 0?A.setupRenderTarget(b):Ve.__hasExternalTextures&&A.rebindTextures(b,we.get(b.texture).__webglTexture,we.get(b.depthTexture).__webglTexture);const $e=b.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ue=!0);const Xe=we.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Xe[X])?K=Xe[X][J]:K=Xe[X],Ce=!0):ue.isWebGL2&&b.samples>0&&A.useMultisampledRTT(b)===!1?K=we.get(b).__webglMultisampledFramebuffer:Array.isArray(Xe)?K=Xe[J]:K=Xe,T.copy(b.viewport),H.copy(b.scissor),j=b.scissorTest}else T.copy(D).multiplyScalar(se).floor(),H.copy(B).multiplyScalar(se).floor(),j=V;if(te.bindFramebuffer(L.FRAMEBUFFER,K)&&ue.drawBuffers&&Q&&te.drawBuffers(b,K),te.viewport(T),te.scissor(H),te.setScissorTest(j),Ce){const Ve=we.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ve.__webglTexture,J)}else if(Ue){const Ve=we.get(b.texture),$e=X||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ve.__webglTexture,J||0,$e)}N=-1},this.readRenderTargetPixels=function(b,X,J,Q,K,Ce,Ue){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=we.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be){te.bindFramebuffer(L.FRAMEBUFFER,Be);try{const Ve=b.texture,$e=Ve.format,Xe=Ve.type;if($e!==ti&&ve.convert($e)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=Xe===pi&&(Z.has("EXT_color_buffer_half_float")||ue.isWebGL2&&Z.has("EXT_color_buffer_float"));if(Xe!==gr&&ve.convert(Xe)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===rr&&(ue.isWebGL2||Z.has("OES_texture_float")||Z.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-Q&&J>=0&&J<=b.height-K&&L.readPixels(X,J,Q,K,ve.convert($e),ve.convert(Xe),Ce)}finally{const Ve=w!==null?we.get(w).__webglFramebuffer:null;te.bindFramebuffer(L.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(b,X,J=0){const Q=Math.pow(2,-J),K=Math.floor(X.image.width*Q),Ce=Math.floor(X.image.height*Q);A.setTexture2D(X,0),L.copyTexSubImage2D(L.TEXTURE_2D,J,0,0,b.x,b.y,K,Ce),te.unbindTexture()},this.copyTextureToTexture=function(b,X,J,Q=0){const K=X.image.width,Ce=X.image.height,Ue=ve.convert(J.format),Be=ve.convert(J.type);A.setTexture2D(J,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,J.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,J.unpackAlignment),X.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Q,b.x,b.y,K,Ce,Ue,Be,X.image.data):X.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Q,b.x,b.y,X.mipmaps[0].width,X.mipmaps[0].height,Ue,X.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,Q,b.x,b.y,Ue,Be,X.image),Q===0&&J.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),te.unbindTexture()},this.copyTextureToTexture3D=function(b,X,J,Q,K=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=b.max.x-b.min.x+1,Ue=b.max.y-b.min.y+1,Be=b.max.z-b.min.z+1,Ve=ve.convert(Q.format),$e=ve.convert(Q.type);let Xe;if(Q.isData3DTexture)A.setTexture3D(Q,0),Xe=L.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)A.setTexture2DArray(Q,0),Xe=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Q.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Q.unpackAlignment);const je=L.getParameter(L.UNPACK_ROW_LENGTH),Et=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Sn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ut=L.getParameter(L.UNPACK_SKIP_ROWS),gi=L.getParameter(L.UNPACK_SKIP_IMAGES),mt=J.isCompressedTexture?J.mipmaps[K]:J.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,b.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,b.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,b.min.z),J.isDataTexture||J.isData3DTexture?L.texSubImage3D(Xe,K,X.x,X.y,X.z,Ce,Ue,Be,Ve,$e,mt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Xe,K,X.x,X.y,X.z,Ce,Ue,Be,Ve,mt.data)):L.texSubImage3D(Xe,K,X.x,X.y,X.z,Ce,Ue,Be,Ve,$e,mt),L.pixelStorei(L.UNPACK_ROW_LENGTH,je),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Et),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Sn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ut),L.pixelStorei(L.UNPACK_SKIP_IMAGES,gi),K===0&&Q.generateMipmaps&&L.generateMipmap(Xe),te.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),te.unbindTexture()},this.resetState=function(){R=0,E=0,w=null,te.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Dd?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===tu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===kt?Wr:L_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Wr?kt:Bi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class J2 extends Q_{}J2.prototype.isWebGL1Renderer=!0;class Od{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=i}clone(){return new Od(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Z2 extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Q2{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new I;class Uc{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ai(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Uc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ex extends Gi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let xs;const Ia=new I,ys=new I,Ss=new I,Ms=new le,Ua=new le,tx=new ht,Tl=new I,Fa=new I,Al=new I,T0=new le,hh=new le,A0=new le;class eA extends At{constructor(e=new ex){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new bt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Q2(t,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new Uc(i,3,0,!1)),xs.setAttribute("uv",new Uc(i,2,3,!1))}this.geometry=xs,this.material=e,this.center=new le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ys.setFromMatrixScale(this.matrixWorld),tx.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ss.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ys.multiplyScalar(-Ss.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;bl(Tl.set(-.5,-.5,0),Ss,a,ys,r,s),bl(Fa.set(.5,-.5,0),Ss,a,ys,r,s),bl(Al.set(.5,.5,0),Ss,a,ys,r,s),T0.set(0,0),hh.set(1,0),A0.set(1,1);let o=e.ray.intersectTriangle(Tl,Fa,Al,!1,Ia);if(o===null&&(bl(Fa.set(-.5,.5,0),Ss,a,ys,r,s),hh.set(0,1),o=e.ray.intersectTriangle(Tl,Al,Fa,!1,Ia),o===null))return;const l=e.ray.origin.distanceTo(Ia);l<e.near||l>e.far||t.push({distance:l,point:Ia.clone(),uv:bn.getInterpolation(Ia,Tl,Fa,Al,T0,hh,A0,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function bl(n,e,t,i,r,s){Ms.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ua.x=s*Ms.x-r*Ms.y,Ua.y=r*Ms.x+s*Ms.y):Ua.copy(Ms),n.copy(e),n.x+=Ua.x,n.y+=Ua.y,n.applyMatrix4(tx)}class b0 extends Pn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Es=new ht,C0=new ht,Cl=[],R0=new es,tA=new ht,Oa=new ze,za=new ts;class nA extends ze{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new b0(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,tA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new es),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Es),R0.copy(e.boundingBox).applyMatrix4(Es),this.boundingBox.union(R0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ts),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Es),za.copy(e.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(za)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Oa.geometry=this.geometry,Oa.material=this.material,Oa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),za.copy(this.boundingSphere),za.applyMatrix4(i),e.ray.intersectsSphere(za)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Es),C0.multiplyMatrices(i,Es),Oa.matrixWorld=C0,Oa.raycast(e,Cl);for(let a=0,o=Cl.length;a<o;a++){const l=Cl[a];l.instanceId=s,l.object=this,t.push(l)}Cl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new b0(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class nx extends Gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const P0=new I,L0=new I,D0=new ht,fh=new Nd,Rl=new ts;class iA extends At{constructor(e=new bt,t=new nx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)P0.fromBufferAttribute(t,r-1),L0.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=P0.distanceTo(L0);e.setAttribute("lineDistance",new Ze(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rl.copy(i.boundingSphere),Rl.applyMatrix4(r),Rl.radius+=s,e.ray.intersectsSphere(Rl)===!1)return;D0.copy(r).invert(),fh.copy(e.ray).applyMatrix4(D0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new I,u=new I,h=new I,d=new I,p=this.isLineSegments?2:1,v=i.index,m=i.attributes.position;if(v!==null){const f=Math.max(0,a.start),_=Math.min(v.count,a.start+a.count);for(let g=f,S=_-1;g<S;g+=p){const R=v.getX(g),E=v.getX(g+1);if(c.fromBufferAttribute(m,R),u.fromBufferAttribute(m,E),fh.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(d);N<e.near||N>e.far||t.push({distance:N,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count);for(let g=f,S=_-1;g<S;g+=p){if(c.fromBufferAttribute(m,g),u.fromBufferAttribute(m,g+1),fh.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const N0=new I,I0=new I;class rA extends iA{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)N0.fromBufferAttribute(t,r),I0.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+N0.distanceTo(I0);e.setAttribute("lineDistance",new Ze(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ix extends Gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const U0=new ht,Tf=new Nd,Pl=new ts,Ll=new I;class sA extends At{constructor(e=new bt,t=new ix){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pl.copy(i.boundingSphere),Pl.applyMatrix4(r),Pl.radius+=s,e.ray.intersectsSphere(Pl)===!1)return;U0.copy(r).invert(),Tf.copy(e.ray).applyMatrix4(U0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=d,x=p;v<x;v++){const m=c.getX(v);Ll.fromBufferAttribute(h,m),F0(Ll,m,l,r,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=d,x=p;v<x;v++)Ll.fromBufferAttribute(h,v),F0(Ll,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function F0(n,e,t,i,r,s,a){const o=Tf.distanceSqToPoint(n);if(o<t){const l=new I;Tf.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class aA extends yn{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const u=i[r],d=i[r+1]-u,p=(a-u)/d;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new le:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new I,r=[],s=[],a=[],o=new I,l=new ht;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new I)}s[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(Bt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,v))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Bt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class zd extends mi{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const i=t||new le,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class oA extends zd{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function kd(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,p*=u,r(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const Dl=new I,dh=new kd,ph=new kd,mh=new kd;class lA extends mi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new I){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(Dl.subVectors(r[0],r[1]).add(r[0]),c=Dl);const h=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Dl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Dl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);x<1e-4&&(x=1),v<1e-4&&(v=x),m<1e-4&&(m=x),dh.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,v,x,m),ph.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,v,x,m),mh.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,v,x,m)}else this.curveType==="catmullrom"&&(dh.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),ph.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),mh.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(dh.calc(l),ph.calc(l),mh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function O0(n,e,t,i,r){const s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function cA(n,e){const t=1-n;return t*t*e}function uA(n,e){return 2*(1-n)*n*e}function hA(n,e){return n*n*e}function no(n,e,t,i){return cA(n,e)+uA(n,t)+hA(n,i)}function fA(n,e){const t=1-n;return t*t*t*e}function dA(n,e){const t=1-n;return 3*t*t*n*e}function pA(n,e){return 3*(1-n)*n*n*e}function mA(n,e){return n*n*n*e}function io(n,e,t,i,r){return fA(n,e)+dA(n,t)+pA(n,i)+mA(n,r)}class rx extends mi{constructor(e=new le,t=new le,i=new le,r=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new le){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(io(e,r.x,s.x,a.x,o.x),io(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gA extends mi{constructor(e=new I,t=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new I){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(io(e,r.x,s.x,a.x,o.x),io(e,r.y,s.y,a.y,o.y),io(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sx extends mi{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vA extends mi{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ax extends mi{constructor(e=new le,t=new le,i=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new le){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(no(e,r.x,s.x,a.x),no(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _A extends mi{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(no(e,r.x,s.x,a.x),no(e,r.y,s.y,a.y),no(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ox extends mi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return i.set(O0(o,l.x,c.x,u.x,h.x),O0(o,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new le().fromArray(r))}return this}}var Af=Object.freeze({__proto__:null,ArcCurve:oA,CatmullRomCurve3:lA,CubicBezierCurve:rx,CubicBezierCurve3:gA,EllipseCurve:zd,LineCurve:sx,LineCurve3:vA,QuadraticBezierCurve:ax,QuadraticBezierCurve3:_A,SplineCurve:ox});class xA extends mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Af[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Af[r.type]().fromJSON(r))}return this}}class Fc extends xA{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new sx(this.currentPoint.clone(),new le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new ax(this.currentPoint.clone(),new le(e,t),new le(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){const o=new rx(this.currentPoint.clone(),new le(e,t),new le(i,r),new le(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new ox(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){const c=new zd(e,t,i,r,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Bd extends bt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Bt(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],u=1/t,h=new I,d=new le,p=new I,v=new I,x=new I;let m=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-m,p.z=f*0,v.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(v)}for(let _=0;_<=t;_++){const g=i+_*u*r,S=Math.sin(g),R=Math.cos(g);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*S,h.y=e[E].y,h.z=e[E].x*R,a.push(h.x,h.y,h.z),d.x=_/t,d.y=E/(e.length-1),o.push(d.x,d.y);const w=l[3*E+0]*S,N=l[3*E+1],M=l[3*E+0]*R;c.push(w,N,M)}}for(let _=0;_<t;_++)for(let g=0;g<e.length-1;g++){const S=g+_*e.length,R=S,E=S+e.length,w=S+e.length+1,N=S+1;s.push(R,E,N),s.push(w,N,E)}this.setIndex(s),this.setAttribute("position",new Ze(a,3)),this.setAttribute("uv",new Ze(o,2)),this.setAttribute("normal",new Ze(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bd(e.points,e.segments,e.phiStart,e.phiLength)}}class wo extends Bd{constructor(e=1,t=1,i=4,r=8){const s=new Fc;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:r}}static fromJSON(e){return new wo(e.radius,e.length,e.capSegments,e.radialSegments)}}class ks extends bt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new I,u=new le;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const p=i+h/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ze(a,3)),this.setAttribute("normal",new Ze(o,3)),this.setAttribute("uv",new Ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Fo extends bt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],p=[];let v=0;const x=[],m=i/2;let f=0;_(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new Ze(h,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(p,2));function _(){const S=new I,R=new I;let E=0;const w=(t-e)/i;for(let N=0;N<=s;N++){const M=[],T=N/s,H=T*(t-e)+e;for(let j=0;j<=r;j++){const oe=j/r,P=oe*l+o,G=Math.sin(P),$=Math.cos(P);R.x=H*G,R.y=-T*i+m,R.z=H*$,h.push(R.x,R.y,R.z),S.set(G,w,$).normalize(),d.push(S.x,S.y,S.z),p.push(oe,1-T),M.push(v++)}x.push(M)}for(let N=0;N<r;N++)for(let M=0;M<s;M++){const T=x[M][N],H=x[M+1][N],j=x[M+1][N+1],oe=x[M][N+1];u.push(T,H,oe),u.push(H,j,oe),E+=6}c.addGroup(f,E,0),f+=E}function g(S){const R=v,E=new le,w=new I;let N=0;const M=S===!0?e:t,T=S===!0?1:-1;for(let j=1;j<=r;j++)h.push(0,m*T,0),d.push(0,T,0),p.push(.5,.5),v++;const H=v;for(let j=0;j<=r;j++){const P=j/r*l+o,G=Math.cos(P),$=Math.sin(P);w.x=M*$,w.y=m*T,w.z=M*G,h.push(w.x,w.y,w.z),d.push(0,T,0),E.x=G*.5+.5,E.y=$*.5*T+.5,p.push(E.x,E.y),v++}for(let j=0;j<r;j++){const oe=R+j,P=H+j;S===!0?u.push(P,P+1,oe):u.push(P+1,P,oe),N+=3}c.addGroup(f,N,S===!0?1:2),f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hd extends Fo{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Hd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Nl=new I,Il=new I,gh=new I,Ul=new bn;class yA extends bt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(ec*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},p=[];for(let v=0;v<l;v+=3){a?(c[0]=a.getX(v),c[1]=a.getX(v+1),c[2]=a.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:x,b:m,c:f}=Ul;if(x.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),Ul.getNormal(gh),h[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let _=0;_<3;_++){const g=(_+1)%3,S=h[_],R=h[g],E=Ul[u[_]],w=Ul[u[g]],N=`${S}_${R}`,M=`${R}_${S}`;M in d&&d[M]?(gh.dot(d[M].normal)<=s&&(p.push(E.x,E.y,E.z),p.push(w.x,w.y,w.z)),d[M]=null):N in d||(d[N]={index0:c[_],index1:c[g],normal:gh.clone()})}}for(const v in d)if(d[v]){const{index0:x,index1:m}=d[v];Nl.fromBufferAttribute(o,x),Il.fromBufferAttribute(o,m),p.push(Nl.x,Nl.y,Nl.z),p.push(Il.x,Il.y,Il.z)}this.setAttribute("position",new Ze(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Oc extends Fc{constructor(e){super(e),this.uuid=Ni(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Fc().fromJSON(r))}return this}}const SA={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=lx(n,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,d,p;if(i&&(s=AA(n,e,s,t)),n.length>80*t){o=c=n[0],l=u=n[1];for(let v=t;v<r;v+=t)h=n[v],d=n[v+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-o,u-l),p=p!==0?32767/p:0}return To(s,a,t,o,l,p,0),a}};function lx(n,e,t,i,r){let s,a;if(r===OA(n,e,t,i)>0)for(s=e;s<t;s+=i)a=z0(s,n[s],n[s+1],a);else for(s=t-i;s>=e;s-=i)a=z0(s,n[s],n[s+1],a);return a&&ru(a,a.next)&&(bo(a),a=a.next),a}function Jr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ru(t,t.next)||vt(t.prev,t,t.next)===0)){if(bo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function To(n,e,t,i,r,s,a){if(!n)return;!a&&s&&LA(n,i,r,s);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?EA(n,i,r,s):MA(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),bo(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=wA(Jr(n),e,t),To(n,e,t,i,r,s,2)):a===2&&TA(n,e,t,i,r,s):To(Jr(n),e,t,i,r,s,1);break}}}function MA(n){const e=n.prev,t=n,i=n.next;if(vt(e,t,i)>=0)return!1;const r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=r<s?r<a?r:a:s<a?s:a,h=o<l?o<c?o:c:l<c?l:c,d=r>s?r>a?r:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c;let v=i.next;for(;v!==e;){if(v.x>=u&&v.x<=d&&v.y>=h&&v.y<=p&&Bs(r,o,s,l,a,c,v.x,v.y)&&vt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function EA(n,e,t,i){const r=n.prev,s=n,a=n.next;if(vt(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,h=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,v=u<h?u<d?u:d:h<d?h:d,x=o>l?o>c?o:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,f=bf(p,v,e,t,i),_=bf(x,m,e,t,i);let g=n.prevZ,S=n.nextZ;for(;g&&g.z>=f&&S&&S.z<=_;){if(g.x>=p&&g.x<=x&&g.y>=v&&g.y<=m&&g!==r&&g!==a&&Bs(o,u,l,h,c,d,g.x,g.y)&&vt(g.prev,g,g.next)>=0||(g=g.prevZ,S.x>=p&&S.x<=x&&S.y>=v&&S.y<=m&&S!==r&&S!==a&&Bs(o,u,l,h,c,d,S.x,S.y)&&vt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;g&&g.z>=f;){if(g.x>=p&&g.x<=x&&g.y>=v&&g.y<=m&&g!==r&&g!==a&&Bs(o,u,l,h,c,d,g.x,g.y)&&vt(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;S&&S.z<=_;){if(S.x>=p&&S.x<=x&&S.y>=v&&S.y<=m&&S!==r&&S!==a&&Bs(o,u,l,h,c,d,S.x,S.y)&&vt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function wA(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!ru(r,s)&&cx(r,i,i.next,s)&&Ao(r,s)&&Ao(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),bo(i),bo(i.next),i=n=s),i=i.next}while(i!==n);return Jr(i)}function TA(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&IA(a,o)){let l=ux(a,o);a=Jr(a,a.next),l=Jr(l,l.next),To(a,e,t,i,r,s,0),To(l,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function AA(n,e,t,i){const r=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*i,l=s<a-1?e[s+1]*i:n.length,c=lx(n,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(NA(c));for(r.sort(bA),s=0;s<r.length;s++)t=CA(r[s],t);return t}function bA(n,e){return n.x-e.x}function CA(n,e){const t=RA(n,e);if(!t)return e;const i=ux(t,n);return Jr(i,i.next),Jr(t,t.next)}function RA(n,e){let t=e,i=-1/0,r;const s=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>i&&(i=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Bs(a<c?s:i,a,l,c,a<c?i:s,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(s-t.x),Ao(t,n)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&PA(r,t)))&&(r=t,u=h)),t=t.next;while(t!==o);return r}function PA(n,e){return vt(n.prev,n,e.prev)<0&&vt(e.next,n,n.next)<0}function LA(n,e,t,i){let r=n;do r.z===0&&(r.z=bf(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,DA(r)}function DA(n){let e,t,i,r,s,a,o,l,c=1;do{for(t=n,n=null,s=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,o--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(a>1);return n}function bf(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function NA(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Bs(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function IA(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!UA(n,e)&&(Ao(n,e)&&Ao(e,n)&&FA(n,e)&&(vt(n.prev,n,e.prev)||vt(n,e.prev,e))||ru(n,e)&&vt(n.prev,n,n.next)>0&&vt(e.prev,e,e.next)>0)}function vt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ru(n,e){return n.x===e.x&&n.y===e.y}function cx(n,e,t,i){const r=Ol(vt(n,e,t)),s=Ol(vt(n,e,i)),a=Ol(vt(t,i,n)),o=Ol(vt(t,i,e));return!!(r!==s&&a!==o||r===0&&Fl(n,t,e)||s===0&&Fl(n,i,e)||a===0&&Fl(t,n,i)||o===0&&Fl(t,e,i))}function Fl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ol(n){return n>0?1:n<0?-1:0}function UA(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&cx(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ao(n,e){return vt(n.prev,n,n.next)<0?vt(n,e,n.next)>=0&&vt(n,n.prev,e)>=0:vt(n,e,n.prev)<0||vt(n,n.next,e)<0}function FA(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function ux(n,e){const t=new Cf(n.i,n.x,n.y),i=new Cf(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function z0(n,e,t,i){const r=new Cf(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function bo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Cf(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function OA(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class vr{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return vr.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];k0(e),B0(i,e);let a=e.length;t.forEach(k0);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,B0(i,t[l]);const o=SA.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function k0(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function B0(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Gd extends bt{constructor(e=new Oc([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Ze(r,3)),this.setAttribute("uv",new Ze(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:zA;let g,S=!1,R,E,w,N;f&&(g=f.getSpacedPoints(u),S=!0,d=!1,R=f.computeFrenetFrames(u,!1),E=new I,w=new I,N=new I),d||(m=0,p=0,v=0,x=0);const M=o.extractPoints(c);let T=M.shape;const H=M.holes;if(!vr.isClockWise(T)){T=T.reverse();for(let L=0,de=H.length;L<de;L++){const Z=H[L];vr.isClockWise(Z)&&(H[L]=Z.reverse())}}const oe=vr.triangulateShape(T,H),P=T;for(let L=0,de=H.length;L<de;L++){const Z=H[L];T=T.concat(Z)}function G(L,de,Z){return de||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(de,Z)}const $=T.length,se=oe.length;function F(L,de,Z){let ue,te,Ne;const we=L.x-de.x,A=L.y-de.y,y=Z.x-L.x,k=Z.y-L.y,re=we*we+A*A,ne=we*k-A*y;if(Math.abs(ne)>Number.EPSILON){const ae=Math.sqrt(re),_e=Math.sqrt(y*y+k*k),ce=de.x-A/ae,ge=de.y+we/ae,Re=Z.x-k/_e,xe=Z.y+y/_e,ie=((Re-ce)*k-(xe-ge)*y)/(we*k-A*y);ue=ce+we*ie-L.x,te=ge+A*ie-L.y;const Se=ue*ue+te*te;if(Se<=2)return new le(ue,te);Ne=Math.sqrt(Se/2)}else{let ae=!1;we>Number.EPSILON?y>Number.EPSILON&&(ae=!0):we<-Number.EPSILON?y<-Number.EPSILON&&(ae=!0):Math.sign(A)===Math.sign(k)&&(ae=!0),ae?(ue=-A,te=we,Ne=Math.sqrt(re)):(ue=we,te=A,Ne=Math.sqrt(re/2))}return new le(ue/Ne,te/Ne)}const C=[];for(let L=0,de=P.length,Z=de-1,ue=L+1;L<de;L++,Z++,ue++)Z===de&&(Z=0),ue===de&&(ue=0),C[L]=F(P[L],P[Z],P[ue]);const D=[];let B,V=C.concat();for(let L=0,de=H.length;L<de;L++){const Z=H[L];B=[];for(let ue=0,te=Z.length,Ne=te-1,we=ue+1;ue<te;ue++,Ne++,we++)Ne===te&&(Ne=0),we===te&&(we=0),B[ue]=F(Z[ue],Z[Ne],Z[we]);D.push(B),V=V.concat(B)}for(let L=0;L<m;L++){const de=L/m,Z=p*Math.cos(de*Math.PI/2),ue=v*Math.sin(de*Math.PI/2)+x;for(let te=0,Ne=P.length;te<Ne;te++){const we=G(P[te],C[te],ue);ee(we.x,we.y,-Z)}for(let te=0,Ne=H.length;te<Ne;te++){const we=H[te];B=D[te];for(let A=0,y=we.length;A<y;A++){const k=G(we[A],B[A],ue);ee(k.x,k.y,-Z)}}}const z=v+x;for(let L=0;L<$;L++){const de=d?G(T[L],V[L],z):T[L];S?(w.copy(R.normals[0]).multiplyScalar(de.x),E.copy(R.binormals[0]).multiplyScalar(de.y),N.copy(g[0]).add(w).add(E),ee(N.x,N.y,N.z)):ee(de.x,de.y,0)}for(let L=1;L<=u;L++)for(let de=0;de<$;de++){const Z=d?G(T[de],V[de],z):T[de];S?(w.copy(R.normals[L]).multiplyScalar(Z.x),E.copy(R.binormals[L]).multiplyScalar(Z.y),N.copy(g[L]).add(w).add(E),ee(N.x,N.y,N.z)):ee(Z.x,Z.y,h/u*L)}for(let L=m-1;L>=0;L--){const de=L/m,Z=p*Math.cos(de*Math.PI/2),ue=v*Math.sin(de*Math.PI/2)+x;for(let te=0,Ne=P.length;te<Ne;te++){const we=G(P[te],C[te],ue);ee(we.x,we.y,h+Z)}for(let te=0,Ne=H.length;te<Ne;te++){const we=H[te];B=D[te];for(let A=0,y=we.length;A<y;A++){const k=G(we[A],B[A],ue);S?ee(k.x,k.y+g[u-1].y,g[u-1].x+Z):ee(k.x,k.y,h+Z)}}}q(),O();function q(){const L=r.length/3;if(d){let de=0,Z=$*de;for(let ue=0;ue<se;ue++){const te=oe[ue];me(te[2]+Z,te[1]+Z,te[0]+Z)}de=u+m*2,Z=$*de;for(let ue=0;ue<se;ue++){const te=oe[ue];me(te[0]+Z,te[1]+Z,te[2]+Z)}}else{for(let de=0;de<se;de++){const Z=oe[de];me(Z[2],Z[1],Z[0])}for(let de=0;de<se;de++){const Z=oe[de];me(Z[0]+$*u,Z[1]+$*u,Z[2]+$*u)}}i.addGroup(L,r.length/3-L,0)}function O(){const L=r.length/3;let de=0;Y(P,de),de+=P.length;for(let Z=0,ue=H.length;Z<ue;Z++){const te=H[Z];Y(te,de),de+=te.length}i.addGroup(L,r.length/3-L,1)}function Y(L,de){let Z=L.length;for(;--Z>=0;){const ue=Z;let te=Z-1;te<0&&(te=L.length-1);for(let Ne=0,we=u+m*2;Ne<we;Ne++){const A=$*Ne,y=$*(Ne+1),k=de+ue+A,re=de+te+A,ne=de+te+y,ae=de+ue+y;Te(k,re,ne,ae)}}}function ee(L,de,Z){l.push(L),l.push(de),l.push(Z)}function me(L,de,Z){Me(L),Me(de),Me(Z);const ue=r.length/3,te=_.generateTopUV(i,r,ue-3,ue-2,ue-1);Le(te[0]),Le(te[1]),Le(te[2])}function Te(L,de,Z,ue){Me(L),Me(de),Me(ue),Me(de),Me(Z),Me(ue);const te=r.length/3,Ne=_.generateSideWallUV(i,r,te-6,te-3,te-2,te-1);Le(Ne[0]),Le(Ne[1]),Le(Ne[3]),Le(Ne[1]),Le(Ne[2]),Le(Ne[3])}function Me(L){r.push(l[L*3+0]),r.push(l[L*3+1]),r.push(l[L*3+2])}function Le(L){s.push(L.x),s.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return kA(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Af[r.type]().fromJSON(r)),new Gd(i,e.options)}}const zA={generateTopUV:function(n,e,t,i,r){const s=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new le(s,a),new le(o,l),new le(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[r*3],p=e[r*3+1],v=e[r*3+2],x=e[s*3],m=e[s*3+1],f=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new le(a,1-l),new le(c,1-h),new le(d,1-v),new le(x,1-f)]:[new le(o,1-l),new le(u,1-h),new le(p,1-v),new le(m,1-f)]}};function kA(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class wi extends bt{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let h=e;const d=(t-e)/r,p=new I,v=new le;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){const f=s+m/i*a;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/t+1)/2,v.y=(p.y/t+1)/2,u.push(v.x,v.y)}h+=d}for(let x=0;x<r;x++){const m=x*(i+1);for(let f=0;f<i;f++){const _=f+m,g=_,S=_+i+1,R=_+i+2,E=_+1;o.push(g,S,E),o.push(S,R,E)}}this.setIndex(o),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(c,3)),this.setAttribute("uv",new Ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Vd extends bt{constructor(e=new Oc([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(s,3)),this.setAttribute("uv",new Ze(a,2));function c(u){const h=r.length/3,d=u.extractPoints(t);let p=d.shape;const v=d.holes;vr.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=v.length;m<f;m++){const _=v[m];vr.isClockWise(_)===!0&&(v[m]=_.reverse())}const x=vr.triangulateShape(p,v);for(let m=0,f=v.length;m<f;m++){const _=v[m];p=p.concat(_)}for(let m=0,f=p.length;m<f;m++){const _=p[m];r.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let m=0,f=x.length;m<f;m++){const _=x[m],g=_[0]+h,S=_[1]+h,R=_[2]+h;i.push(g,S,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return BA(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];i.push(a)}return new Vd(i,e.curveSegments)}}function BA(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class ni extends bt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new I,d=new I,p=[],v=[],x=[],m=[];for(let f=0;f<=i;f++){const _=[],g=f/i;let S=0;f===0&&a===0?S=.5/t:f===i&&l===Math.PI&&(S=-.5/t);for(let R=0;R<=t;R++){const E=R/t;h.x=-e*Math.cos(r+E*s)*Math.sin(a+g*o),h.y=e*Math.cos(a+g*o),h.z=e*Math.sin(r+E*s)*Math.sin(a+g*o),v.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(E+S,1-g),_.push(c++)}u.push(_)}for(let f=0;f<i;f++)for(let _=0;_<t;_++){const g=u[f][_+1],S=u[f][_],R=u[f+1][_],E=u[f+1][_+1];(f!==0||a>0)&&p.push(g,S,E),(f!==i-1||l<Math.PI)&&p.push(S,R,E)}this.setIndex(p),this.setAttribute("position",new Ze(v,3)),this.setAttribute("normal",new Ze(x,3)),this.setAttribute("uv",new Ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ni(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ro extends bt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new I,h=new I,d=new I;for(let p=0;p<=i;p++)for(let v=0;v<=r;v++){const x=v/r*s,m=p/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(v/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=r;v++){const x=(r+1)*p+v-1,m=(r+1)*(p-1)+v-1,f=(r+1)*(p-1)+v,_=(r+1)*p+v;a.push(x,m,_),a.push(m,f,_)}this.setIndex(a),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class HA extends gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sr extends Gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ld,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class GA extends sr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class VA extends Gi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ld,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Cd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hx extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class WA extends hx{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const vh=new ht,H0=new I,G0=new I;class XA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Id,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;H0.setFromMatrixPosition(e.matrixWorld),t.position.copy(H0),G0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(G0),t.updateMatrixWorld(),vh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jA extends XA{constructor(){super(new Ud(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qA extends hx{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new jA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class $A{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=V0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=V0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function V0(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bd);const fx={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ya{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const YA=new Ud(-1,1,1,-1,0,1);class KA extends bt{constructor(){super(),this.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ze([0,2,0,0,2,0],2))}}const JA=new KA;class Wd{constructor(e){this._mesh=new ze(JA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,YA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class dx extends ya{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof gn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Eo.clone(e.uniforms),this.material=new gn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Wd(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class W0 extends ya{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class ZA extends ya{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class QA{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new le);this._width=i.width,this._height=i.height,t=new Wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new dx(fx),this.copyPass.material.blending=Di,this.clock=new $A}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}W0!==void 0&&(a instanceof W0?i=!0:a instanceof ZA&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class eb extends ya{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ke}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const tb={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ke(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class pa extends ya{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new ke(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Wn(s,a,{type:pi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Wn(s,a,{type:pi});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new Wn(s,a,{type:pi});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),a=Math.round(a/2)}const o=tb;this.highPassUniforms=Eo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new gn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new le(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=fx;this.copyUniforms=Eo.clone(u.uniforms),this.blendMaterial=new gn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Qs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ke,this.oldClearAlpha=1,this.basic=new wt,this.fsQuad=new Wd(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new le(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=pa.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=pa.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new gn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new gn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}pa.BlurDirectionX=new le(1,0);pa.BlurDirectionY=new le(0,1);const nb={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class ib extends ya{constructor(){super();const e=nb;this.uniforms=Eo.clone(e.uniforms),this.material=new HA({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Wd(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},rt.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===x_?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===y_?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===S_?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Rd?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===M_&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Hs=16,Pi=.14,Co={exp:{label:"Express",games:2,winBy:1,tbAt:0,need:1,cols:1},full:{label:"Completo",games:6,winBy:2,tbAt:6,need:2,cols:3}},rb={drive:{T:1,d:7.2},globo:{T:1.9,d:8.7},dejada:{T:1.25,d:1.9},remate:{T:.62,d:6},saque:{T:1.15,d:5.2},x3:{T:.55,d:3.4},x4:{T:.62,d:8.4}},X0={drive:[-.7,1.7,.28],saque:[-.7,1.7,.28],globo:[.1,2.5,.4],dejada:[.7,1.2,.3],remate:[.6,.15,.46,3.15]},sb=6.95,j0={drive:.5,globo:.35,dejada:-1,remate:.2,saque:.1,x3:.2,x4:.2},ab={drive:.95,globo:.5,dejada:.8,remate:2.2},ob=["Perfecto","Bien","Justo"],px={"2v2":[0,2,1,3],"1v1":[0,2]},Rf=n=>n<2?"a":"b",sn=n=>n==="a"?1:-1,_r=n=>n==="a"?"b":"a",ar={sideGlass:2,sideTop:3,backGlass:3,backTop:4},Ro={facil:{label:"Fácil",sp:3,run:4.1,react:.3,wall:0,err:.2,grow:.03,q:[.1,.35],pw:.3,special:0,aim:.25,serr:.25},medio:{label:"Medio",sp:3.6,run:4.9,react:.12,wall:.6,err:.08,grow:.02,q:[.3,.15],pw:.6,special:.1,aim:.7,serr:.1},dificil:{label:"Difícil",sp:4.2,run:5.9,react:0,wall:1,err:.03,grow:.008,q:[.5,.08],pw:.95,special:.22,aim:1,serr:.04}},lb={serve:{label:"Entrenar saque",max:20},smash:{label:"Entrenar remate",max:20}};function mx(n,e=4){let{x:t,y:i,z:r,vx:s,vy:a,vz:o}=n,l=n.spin||0,c=n.bounces||0,u=0,h=!1;const d={land:null,wall:null,drop:null,pre:null,mesh:!1,exit:!1},p=1/60;for(;u<e;){const v=t,x=i,m=r;if(a-=Hs*p,t+=s*p,i+=a*p,r+=o*p,u+=p,i<Pi&&a<0){const f=x>i?Math.min(1,Math.max(0,(x-Pi)/(x-i))):1,_=v+(t-v)*f,g=m+(r-m)*f,S=u-p+p*f;if(i=Pi,a=-a*.74*(1-.12*l),s*=.92,o*=.92,l*=.6,c++,c===1&&!d.land&&(d.land={x:_,z:g,t:S}),c>=2)break}if(c>=1&&a<0&&i>.5&&i<1.5){const f={x:t,z:r,t:u,y:i};if(h){d.drop=f;break}d.pre||(d.pre=f)}if(Math.abs(t)>4.88)if(i>ar.sideTop){if(Math.abs(t)>5.02){d.exit=!0;break}}else if(i>ar.sideGlass){d.mesh=!0;break}else{const f=t>0?1:-1;t=f*4.88;const _=Math.hypot(s,a,o);s=-f*Math.abs(s)*Math.min(.8,Math.max(.62,.84-.012*_)),o*=.94,d.wall||(d.wall={x:t,y:i,z:r,t:u}),h=!0}if(Math.abs(r)>9.88)if(i>ar.backTop){if(Math.abs(r)>10.02){d.exit=!0;break}}else if(i>ar.backGlass){d.mesh=!0;break}else{const f=r>0?1:-1;r=f*9.88;const _=Math.hypot(s,a,o);o=-f*Math.abs(o)*Math.min(.8,Math.max(.62,.84-.012*_)),s*=.94,d.wall||(d.wall={x:t,y:i,z:r,t:u}),h=!0}}return d}const Pf=n=>{const e=parseInt(n.slice(1),16);return(e>>16&255)*.299+(e>>8&255)*.587+(e&255)*.114};function ta(n,e,t,i=4){const r=document.createElement("canvas");r.width=n,r.height=e,t(r.getContext("2d"),n,e);const s=new aA(r);return s.anisotropy=i,s.colorSpace=kt,s}const Gs=.15,Vs=.21,zl=.06;function _h(n,e){n.absarc(0,zl*e,Gs*e,0,Math.PI,!1),n.bezierCurveTo(-Gs*e,(zl-.1)*e,-.05*e,(-Vs+.06)*e,-.022*e,-Vs*e),n.lineTo(.022*e,-Vs*e),n.bezierCurveTo(.05*e,(-Vs+.06)*e,Gs*e,(zl-.1)*e,Gs*e,zl*e)}let Ws=null;function cb(){if(Ws)return Ws;const n=new Oc;_h(n,1);const e=new Fc;_h(e,.9),n.holes.push(e);const t=new Gd(n,{depth:.034,bevelEnabled:!1,curveSegments:16});t.translate(0,0,-.017);const i=new Vd((()=>{const l=new Oc;return _h(l,.93),l})(),16),r=i.attributes.uv,s=i.attributes.position;for(let l=0;l<r.count;l++)r.setXY(l,(s.getX(l)+Gs)/(2*Gs),(s.getY(l)+Vs)/(2*Vs));const a=i.clone();a.translate(0,0,.0185);const o=i.clone();return o.rotateY(Math.PI),o.translate(0,0,-.0185),Ws={rim:t,front:a,back:o},Ws}function ub(n){const i=ta(256,360,r=>{const s=new ke(n),a=Pf(n);r.fillStyle=n,r.fillRect(0,0,256,360);const o=r.createLinearGradient(0,0,256,360);o.addColorStop(0,"rgba(255,255,255,0.16)"),o.addColorStop(1,"rgba(0,0,0,0.18)"),r.fillStyle=o,r.fillRect(0,0,256,360),r.save(),r.setTransform(1,0,-.18,1,26,0),r.fillStyle=a>185?"#1B1B1A":"#FFFFFF",r.fillRect(34,62,30,130),r.fillRect(90,62,30,130),r.fillRect(34,162,86,30),r.fillRect(136,62,80,30),r.fillRect(136,62,30,130),r.fillRect(136,162,80,30),r.restore(),r.fillStyle=`#${s.clone().multiplyScalar(.6).getHexString()}`,r.beginPath(),r.moveTo(128,214),r.lineTo(80,300),r.lineTo(176,300),r.closePath(),r.fill(),r.globalCompositeOperation="destination-out";for(let l=0;l<8;l++)for(let c=0;c<9;c++){const u=34+c*23+l%2*11.5,h=34+l*24;h>215&&Math.abs(u-128)<70+(h-215)||(r.beginPath(),r.arc(u,h,5.6,0,6.283),r.fill())}r.beginPath(),r.moveTo(128,226),r.lineTo(92,292),r.lineTo(164,292),r.closePath(),r.fill()},8);return i.userData.shared=!0,i}const Lf=new Map;function hb(n){let e=Lf.get(n);if(!e){const t=new sr({map:ub(n),roughness:.45,metalness:.05,alphaTest:.5,transparent:!1}),i=new sr({color:new ke(n).multiplyScalar(.55),roughness:.4});e={face:t,rim:i},Lf.set(n,e)}return e}function fb(n){const{rim:e,front:t,back:i}=cb(),r=hb(n),s=new Pt,a=new ze(e,r.rim);return a.castShadow=!0,s.add(a,new ze(t,r.face),new ze(i,r.face)),s.rotation.z=Math.PI,s}const gx=new wt({color:"#141821",side:un});gx.userData.shared=!0;let nc=null;const ws=(n,e)=>`#${new ke(n).multiplyScalar(e).getHexString()}`;function q0(n,e,t){const i=new Pt,r=new Pt;r.position.y=.92,i.add(r);const s=(O,Y=.7)=>new sr({color:O,roughness:Y}),a=(O,Y=1.07)=>{const ee=new ze(O.geometry,gx);return ee.scale.setScalar(Y),O.add(ee),O},o=(O,Y,ee,me,Te,Me=1.07)=>(O.position.set(Y,ee,me),O.castShadow=!!Te,Me&&a(O,Me),O),l=(O,Y,ee,me,Te,Me,Le,L)=>o(new ze(new Fo(O,Y,ee,16),s(me)),Te,Me,Le,!0,L),c=(O,Y,ee,me,Te,Me,Le)=>o(new ze(new wo(O,Y,4,12),s(ee)),me,Te,Me,!0,Le),u=(O,Y,ee,me,Te,Me,Le,L,de)=>{const Z=o(new ze(new ni(O,18,14),s(Y)),ee,me,Te,!0,de);return Me&&Z.scale.set(Me,Le,L),Z},h=(O,Y,ee,me,Te,Me,Le,L)=>o(new ze(new Ii(O,Y,ee),s(me)),Te,Me,Le,L,0),d=ws(n.shirt,.35),p=ws(n.skin,.8),v="#F4F4F0",x=O=>{const Y=new Pt;Y.position.set(O*.12,.92,0),Y.add(l(.118,.1,.34,d,0,-.17,0)),Y.add(h(.012,.3,.07,ws(n.shirt,1.25),O*.113,-.17,0)),Y.add(c(.072,.1,n.skin,0,-.38,0));const ee=new Pt;ee.position.y=-.43,ee.add(c(.06,.2,n.skin,0,-.17,0)),ee.add(l(.066,.064,.17,v,0,-.34,0),l(.0675,.0675,.035,n.shirt,0,-.27,0,0));const me=new Pt;me.add(h(.125,.07,.25,v,0,0,0,!0));const Te=u(.062,v,0,0,-.12,1,.78,1,0);return me.add(Te),me.add(h(.13,.03,.27,"#D8D8D2",0,-.045,0),h(.04,.045,.14,n.shirt,O*.06,0,0)),me.position.set(0,-.455,-.045),ee.add(me),Y.add(ee),Y.userData.kn=ee,Y},m=x(-1),f=x(1);i.add(m,f);const _=c(.2,.3,n.shirt,0,.3,0);_.scale.z=.62,r.add(_);const g=l(.205,.2,.14,d,0,-.03,0);g.scale.z=.66,r.add(g),r.add(u(.108,n.shirt,-.29,.54,0),u(.108,n.shirt,.29,.54,0),l(.06,.07,.12,n.skin,0,.7,0));const S=new ze(new ro(.075,.018,8,20),s(ws(n.shirt,1.35)));S.rotation.x=Math.PI/2,S.position.set(0,.67,-.01),r.add(S);const R=new ze(new Wt(.11,.07),new wt({transparent:!0,toneMapped:!1,map:ta(64,40,(O,Y,ee)=>{O.fillStyle=Pf(n.shirt)<140?"#fff":"#1B1B1A",O.font="900 30px sans-serif",O.textAlign="center",O.textBaseline="middle",O.save(),O.transform(1,0,-.2,1,5,0),O.fillText("UC",Y/2,ee/2+2),O.restore()})}));R.position.set(-.1,.5,-.127),R.rotation.y=.12,r.add(R);const E=new Pt;E.position.y=.84,r.add(E);const w=u(.2,n.skin,0,0,0,1,1.08,1.02);E.add(w),E.add(u(.045,n.skin,-.2,-.01,0,1,1.1,.7),u(.045,n.skin,.2,-.01,0,1,1.1,.7)),E.add(u(.03,p,0,-.03,-.2,1,.9,.9,0));const N=O=>{const Y=new Pt;return Y.position.set(O*.075,.02,-.178),Y.add(u(.034,"#fff",0,0,0,1,.9,.55,0),u(.019,"#241812",0,0,-.012,1,1,.6,0),u(.006,"#fff",O*.006,.008,-.022,1,1,1,0)),Y},M=N(-1),T=N(1);E.add(M,T);const H=O=>{const Y=h(.075,.014,.014,n.hair,O*.075,.075,-.188);return Y.rotation.z=O*-.12,Y};E.add(H(-1),H(1));const j=new ze(new ro(.04,.007,6,12,Math.PI),s("#8a4040"));j.rotation.z=Math.PI,j.position.set(0,-.09,-.19),E.add(j);const oe=s(n.hair,.85),P=new ze(new ni(.215,20,14,0,6.283,0,1.28),oe);P.position.y=.035,P.castShadow=!0,a(P,1.06),E.add(P);const G=new ze(new ni(.214,18,12,0,Math.PI,0,2),oe);G.position.y=.035,G.rotation.y=0,a(G,1.05),E.add(G);let $=null;if(n.style==="corto"){const O=h(.3,.05,.08,n.hair,0,.15,-.165);O.rotation.x=-.25,E.add(O),E.add(h(.02,.08,.05,n.hair,-.188,.05,-.07),h(.02,.08,.05,n.hair,.188,.05,-.07))}if(n.style==="largo"&&($=new Pt,$.position.set(0,.06,.15),$.add(c(.1,.34,n.hair,0,-.22,.02),c(.03,.05,ws(n.hair,1.5),0,-.02,0,0)),E.add($),E.add(h(.3,.1,.09,n.hair,0,.13,-.16))),n.style==="rodete"&&(E.add(u(.1,n.hair,0,.21,.04)),E.add(h(.3,.06,.09,n.hair,0,.14,-.16))),n.acc==="vincha"){const O=new ze(new ro(.212,.028,8,24),s("#E24B4A"));O.rotation.x=Math.PI/2,O.position.y=.07,E.add(O)}if(n.acc==="gorra"){const O=new ze(new ni(.235,18,10,0,6.283,0,1.45),s("#E24B4A"));O.position.y=.04,O.castShadow=!0,a(O,1.05),E.add(O),E.add(h(.3,.03,.2,"#A32D2D",0,.09,-.26))}n.acc==="lentes"&&E.add(h(.1,.055,.02,"#1B1B1A",-.075,.02,-.2),h(.1,.055,.02,"#1B1B1A",.075,.02,-.2),h(.04,.012,.012,"#1B1B1A",0,.03,-.2));const se=Pf(n.shirt)<140,F=ta(128,128,(O,Y)=>{O.fillStyle=se?"#fff":"#1B1B1A",O.textAlign="center",O.font="500 17px sans-serif",O.fillText(String(e||"").split(" ")[0].toUpperCase().slice(0,9),Y/2,34),O.font="500 62px sans-serif",O.fillText(String(t??7),Y/2,100)}),C=new ze(new Wt(.26,.26),new wt({map:F,transparent:!0,toneMapped:!1}));C.position.set(0,.34,.153),r.add(C);const D=O=>{O.add(l(.078,.072,.2,n.shirt,0,-.1,0),l(.0735,.0735,.03,ws(n.shirt,1.4),0,-.17,0,0))},B=new Pt;B.position.set(-.3,.52,0),D(B),B.add(c(.05,.22,n.skin,0,-.36,0),l(.056,.056,.045,v,0,-.47,0,0),u(.055,n.skin,0,-.56,0)),r.add(B);const V=new Pt;V.position.set(.3,.52,0),D(V),V.add(c(.05,.22,n.skin,0,-.36,0),l(.058,.058,.05,v,0,-.47,0,0),u(.058,n.skin,0,-.56,0),u(.02,n.skin,-.04,-.54,-.03,1,1,1,0),l(.024,.024,.2,"#F2F2EE",0,-.62,0,0),h(.05,.07,.03,"#1B1B1A",0,-.74,0,!0));const z=fb(n.paddle);z.position.y=-.95,V.add(z),V.rotation.x=.5,r.add(V),nc||(nc=ta(64,64,O=>{const Y=O.createRadialGradient(32,32,2,32,32,30);Y.addColorStop(0,"rgba(0,0,0,0.5)"),Y.addColorStop(1,"rgba(0,0,0,0)"),O.fillStyle=Y,O.fillRect(0,0,64,64)},1));const q=new ze(new Wt(.95,.95),new wt({map:nc,transparent:!0,depthWrite:!1}));return q.userData.shared=!0,q.rotation.x=-Math.PI/2,q.position.y=.012,q.renderOrder=1,i.add(q),i.userData={up:r,arm:V,la:B,lL:m,lR:f,kL:m.userData.kn,kR:f.userData.kn,head:E,eyes:[M,T],tail:$,blob:q},i}function $0(n){n.traverse(e=>{e.geometry&&!(Ws&&Object.values(Ws).includes(e.geometry))&&e.geometry.dispose(),e.material&&!db(e.material)&&(Array.isArray(e.material)?e.material:[e.material]).forEach(t=>{t.map&&!t.map.userData.shared&&t.map!==nc&&t.map.dispose(),(!t.userData||!t.userData.shared)&&t.dispose()})})}function db(n){for(const e of Lf.values())if(e.face===n||e.rim===n)return!0;return!1}const pb={};let it=null,Ui=null,Xd=null,Xs=null,Oo=!1;const vx={};try{Oo=localStorage.getItem("padel.mute")==="1"}catch{}function ka(){try{if(!it){it=new(window.AudioContext||window.webkitAudioContext),Ui=it.createGain(),Ui.gain.value=Oo?0:.9;const n=it.createDynamicsCompressor();Ui.connect(n),n.connect(it.destination);const e=it.sampleRate*2,t=it.createBuffer(1,e,it.sampleRate),i=t.getChannelData(0);for(let r=0;r<e;r++)i[r]=Math.random()*2-1;Xd=t,gb()}it.state==="suspended"&&it.resume()}catch{}}const mb=()=>Oo;function Y0(n){Oo=n;try{localStorage.setItem("padel.mute",n?"1":"0")}catch{}Ui&&Ui.gain.setTargetAtTime(n?0:.9,it.currentTime,.05)}function gb(){(import.meta&&pb||{}).VITE_SFX&&["hit","bounce","glass","crowd"].forEach(e=>{fetch(new URL(`sfx/${e}.ogg`,document.baseURI)).then(t=>t.ok?t.arrayBuffer():null).then(t=>t?it.decodeAudioData(t):null).then(t=>{t&&(vx[e]=t)}).catch(()=>{})})}function kl(n,e=1,t=1){const i=vx[n];if(!i||!it)return!1;const r=it.createBufferSource(),s=it.createGain();return r.buffer=i,r.playbackRate.value=t*(.94+Math.random()*.12),s.gain.value=e,r.connect(s),s.connect(Ui),r.start(),!0}function wn({dur:n=.08,f:e=2e3,q:t=1,type:i="bandpass",gain:r=.4,attack:s=.002,f2:a,delay:o=0}){const l=it.currentTime+o,c=it.createBufferSource(),u=it.createBiquadFilter(),h=it.createGain();c.buffer=Xd,c.loop=!0,u.type=i,u.Q.value=t,u.frequency.setValueAtTime(e,l),a&&u.frequency.exponentialRampToValueAtTime(a,l+n),h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(r,l+s),h.gain.exponentialRampToValueAtTime(1e-4,l+n),c.connect(u),u.connect(h),h.connect(Ui),c.start(l,Math.random()),c.stop(l+n+.05)}function Tn({f:n=200,f2:e,dur:t=.1,type:i="sine",gain:r=.3,delay:s=0}){const a=it.currentTime+s,o=it.createOscillator(),l=it.createGain();o.type=i,o.frequency.setValueAtTime(n,a),e&&o.frequency.exponentialRampToValueAtTime(e,a+t),l.gain.setValueAtTime(r,a),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l),l.connect(Ui),o.start(a),o.stop(a+t+.02)}const Yi=()=>it&&!Oo,Ki={hit(n,e,t=0){if(!Yi())return;const i=(n==="remate"?1.5:n==="dejada"?.5:n==="globo"?.8:1)*(1+.5*t);kl("hit",.7*i,n==="remate"?.8:1)||(wn({dur:.05+.03*i,f:2300-(e||0)*350,q:1.2,gain:.55*i}),wn({dur:.12,f:900,q:.8,type:"lowpass",gain:.35*i}),Tn({f:190,f2:95,dur:.09,gain:.32*i}),n==="remate"&&(Tn({f:85,f2:45,dur:.22,gain:.45}),wn({dur:.18,f:3200,q:.6,gain:.3})),e===0&&Tn({f:3600,f2:3e3,dur:.05,type:"triangle",gain:.06}))},bounce(){!Yi()||kl("bounce",.8)||(wn({dur:.06,f:500,q:.7,type:"lowpass",gain:.45}),Tn({f:130,f2:70,dur:.07,gain:.3}))},wall(n=10){if(!Yi()||kl("glass",.7))return;const e=Math.max(.35,Math.min(1.5,n/11));wn({dur:.16,f:2600,q:7,gain:.3*e}),wn({dur:.07,f:5200,q:3,gain:.15*e}),Tn({f:1180,dur:.32,gain:.05*e}),Tn({f:1760,dur:.22,gain:.035*e}),wn({dur:.2,f:300,q:1,type:"lowpass",gain:.12*e,delay:.01})},mesh(n=8){if(!Yi())return;const e=Math.max(.4,Math.min(1.3,n/10));for(let t=0;t<5;t++)wn({dur:.05,f:3800+t*500,q:5,type:"highpass",gain:.14*e*(1-t*.15),delay:t*.035});Tn({f:620,f2:480,dur:.18,gain:.04*e})},net(){Yi()&&(wn({dur:.14,f:900,q:.7,type:"lowpass",gain:.3}),Tn({f:140,f2:90,dur:.1,gain:.12}))},exit(){Yi()&&wn({dur:.5,f:400,f2:3500,q:1.5,gain:.22,attack:.15})},cheer(n=1){if(!Yi()||kl("crowd",.6*n))return;wn({dur:.35+1.1*n,f:900,q:.5,gain:.07+.1*n,attack:.2}),wn({dur:.3+.9*n,f:2400,q:.6,gain:.04+.05*n,attack:.15});const e=Math.round(10+22*n);for(let t=0;t<e;t++)wn({dur:.03,f:1500+Math.random()*2500,q:1,gain:.05+Math.random()*.05,delay:.1+Math.random()*(.6+n)});n>.9&&Tn({f:520,f2:640,dur:.5,type:"sawtooth",gain:.02,delay:.1})},point(n,e){if(Yi()){if(n==="punto"){Tn({f:e?660:330,dur:.1,gain:.08});return}Tn({f:520,dur:.12,gain:.1}),setTimeout(()=>Tn({f:780,dur:n==="game"?.18:.12,gain:.1}),130),n!=="game"&&setTimeout(()=>Tn({f:1040,dur:.25,gain:.1}),260)}}};function vb(){if(!it||Xs)return;const n=it.createBufferSource(),e=it.createBiquadFilter(),t=it.createGain(),i=it.createOscillator(),r=it.createGain();n.buffer=Xd,n.loop=!0,e.type="bandpass",e.frequency.value=650,e.Q.value=.45,t.gain.value=.045,i.frequency.value=.23,r.gain.value=.015,i.connect(r),r.connect(t.gain),n.connect(e),e.connect(t),t.connect(Ui),n.start(),i.start(),Xs={s:n,lfo:i,g:t}}function K0(){if(Xs){try{Xs.g.gain.setTargetAtTime(0,it.currentTime,.2);const n=Xs;setTimeout(()=>{try{n.s.stop(),n.lfo.stop()}catch{}},800)}catch{}Xs=null}}const _b={skin:"#E0AC82",hair:"#5F5E5A",style:"corto",shirt:"#888780",acc:"none",paddle:"#B4B2A9"},Ba=(n,e,t)=>Math.max(e,Math.min(t,n)),J0=()=>{},xb={uniforms:{tDiffuse:{value:null},time:{value:0},res:{value:new le(1,1)},blur:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    varying vec2 vUv; uniform sampler2D tDiffuse; uniform float time; uniform vec2 res; uniform float blur;
    void main(){
      vec2 uv = vUv;
      float d = abs(uv.y - 0.52);
      float b = smoothstep(0.2, 0.52, d) * blur;
      vec3 c = vec3(0.0); float w = 0.0;
      for (int i = -4; i <= 4; i++) {
        float k = exp(-float(i * i) * 0.09);
        c += texture2D(tDiffuse, uv + vec2(0.0, float(i)) * b * 0.0035).rgb * k; w += k;
      }
      c /= w;
      float l = dot(c, vec3(0.299, 0.587, 0.114));
      c = mix(vec3(l), c, 1.1);
      c = (c - 0.5) * 1.07 + 0.5;
      c *= vec3(1.02, 1.0, 0.96);
      float v = 1.0 - smoothstep(0.38, 0.98, length((uv - 0.5) * vec2(res.x / res.y * 0.95, 1.0)));
      c *= mix(0.74, 1.0, v);
      float g = fract(sin(dot(uv * res + time, vec2(12.9898, 78.233))) * 43758.5453);
      c += (g - 0.5) * 0.032;
      gl_FragColor = vec4(c, 1.0);
    }`},Bl={azul:{base:"#2D74B8",line:"#f4f6f8",wear:"rgba(45,116,184,0.55)",rough:.45,cc:.3,bump:.5,dots:12e3,grain:.05},verde:{base:"#2F8F5B",line:"#f4f6f0",wear:"rgba(47,143,91,0.55)",rough:.55,cc:.2,bump:.8,dots:16e3,grain:.06},cemento:{base:"#8C8F93",line:"#f2f2ee",wear:"rgba(140,143,147,0.6)",rough:.85,cc:0,bump:1,dots:22e3,grain:.09},arena:{base:"#C0693A",line:"#f7efe4",wear:"rgba(192,105,58,0.6)",rough:.95,cc:0,bump:1.1,dots:22e3,grain:.1}},yb=[["azul","Azul"],["verde","Verde"],["cemento","Cemento"],["arena","Arena"]];class Sb{constructor(e,{onQuality:t,onReplay:i,look:r,autoQuality:s=!0}={}){this.container=e,this.autoQuality=s,this.onQuality=t||J0,this.onReplay=i||J0,this.rec=[],this.rp=null,this.replayArm=null,this.syncSw=!1,this.camGoal=new I,this.tgtV=new I,this.landP=new I,this.landTl=0,this.landOn=!1,this.landGrace=0,this.landCol="",this.dropP=new I,this.dropT=0,this.dropOn=!1,this.dtv=.016,this.cheer=0,this.cheerDirty=!1,this.fovKick=0,this.fovVel=0,this.lookInit=!1,this.camInit=!1,this.camPos=new I,this.look=new I,this.dIdx=0,this.composer=null,this.hq=!0,this.clk=0,this.slow=0,this.shake=0,this.mySlot=-1,this.myTeam="a",this.avatars=new Map,this.rosterKey="",this.preview=null,this.previewKey="",this.fxT=0,this.ripT=0,this.pT=0,this.hist=[],this.ok=!0,this.inGame=!1;let a;try{a=new Q_({antialias:!0,powerPreference:"high-performance"})}catch{this.ok=!1;return}this.ren=a,this.dpr=window.devicePixelRatio||1,a.setPixelRatio(Math.min(this.dpr,2)),a.shadowMap.enabled=!0,a.shadowMap.type=__,a.toneMapping=Rd,a.toneMappingExposure=1,a.domElement.style.cssText="display:block;width:100%;height:100%;touch-action:none",e.appendChild(a.domElement),this.scene=new Z2,this.cam=new kn(58,1,.1,160),this.aniso=Math.min(a.capabilities.getMaxAnisotropy(),8),this.buildWorld(),this.setupPost(),this.warm(),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(e),this.resize(),r&&this.setPreviewLook(r)}tex(e,t,i){return ta(e,t,i,this.aniso)}buildWorld(){const e=this.scene,t=(C,D,B)=>this.tex(C,D,B);e.background=t(512,512,(C,D,B)=>{const V=C.createLinearGradient(0,0,0,B);V.addColorStop(0,"#4F93D6"),V.addColorStop(.55,"#9CC8EC"),V.addColorStop(.85,"#F3DDBC"),V.addColorStop(1,"#F7C98F"),C.fillStyle=V,C.fillRect(0,0,D,B);const z=C.createRadialGradient(D*.72,B*.8,4,D*.72,B*.8,D*.5);z.addColorStop(0,"rgba(255,238,190,0.95)"),z.addColorStop(.25,"rgba(255,214,150,0.45)"),z.addColorStop(1,"rgba(255,200,130,0)"),C.fillStyle=z,C.fillRect(0,0,D,B);for(let q=0;q<26;q++){const O=Math.random()*D,Y=B*(.25+Math.random()*.5),ee=40+Math.random()*90;for(let me=0;me<6;me++){const Te=O+(Math.random()-.5)*ee,Me=Y+(Math.random()-.5)*12,Le=ee*(.25+Math.random()*.25),L=C.createRadialGradient(Te,Me,0,Te,Me,Le);L.addColorStop(0,"rgba(255,255,255,0.22)"),L.addColorStop(1,"rgba(255,255,255,0)"),C.fillStyle=L,C.fillRect(Te-Le,Me-Le,Le*2,Le*2)}}}),e.fog=new Od("#EBD7BC",45,100),e.add(new WA(14478072,4871494,2));const i=new qA(16769720,3);i.position.set(9,13,9),i.castShadow=!0,i.shadow.mapSize.set(2048,2048),i.shadow.normalBias=.02;const r=i.shadow.camera;r.left=-14,r.right=14,r.top=18,r.bottom=-18,r.near=1,r.far=50,i.shadow.bias=-6e-4,e.add(i),this.dl=i;const s=(C,D=.8)=>new sr({color:C,roughness:D}),a=(C,D,B,V,z,q,O,Y)=>{const ee=new ze(new Ii(C,D,B),s(V));return ee.position.set(z,q,O),ee.castShadow=!!Y,ee},o=(C,D,B)=>(C.wrapS=C.wrapT=Rc,C.repeat.set(D,B),C.needsUpdate=!0,C);this.mkFloor=C=>{const D=Bl[C]||Bl.azul;return t(512,1024,(V,z,q)=>{V.fillStyle=D.base,V.fillRect(0,0,z,q);for(let O=0;O<D.dots;O++)V.fillStyle=Math.random()<.5?`rgba(255,255,255,${D.grain})`:`rgba(0,0,0,${D.grain+.02})`,V.fillRect(Math.random()*z,Math.random()*q,2,2);for(let O=0;O<60;O++){const Y=Math.random()*z,ee=Math.random()*q,me=18+Math.random()*70,Te=V.createRadialGradient(Y,ee,0,Y,ee,me);Te.addColorStop(0,Math.random()<.55?"rgba(255,255,255,0.07)":"rgba(0,20,40,0.09)"),Te.addColorStop(1,"rgba(0,0,0,0)"),V.fillStyle=Te,V.fillRect(Y-me,ee-me,me*2,me*2)}[[156,.1],[868,.1],[512,.12]].forEach(([O,Y])=>{const ee=V.createLinearGradient(0,O-70,0,O+70);ee.addColorStop(0,"rgba(255,255,255,0)"),ee.addColorStop(.5,`rgba(255,255,255,${Y})`),ee.addColorStop(1,"rgba(255,255,255,0)"),V.fillStyle=ee,V.fillRect(0,O-70,z,140)}),V.strokeStyle=D.line,V.lineWidth=4,V.strokeRect(2,2,z-4,q-4),V.beginPath(),V.moveTo(0,156),V.lineTo(z,156),V.moveTo(0,868),V.lineTo(z,868),V.moveTo(256,156),V.lineTo(256,868),V.stroke();for(let O=0;O<700;O++){const Y=Math.random()<.5,ee=Math.random(),me=Y?ee*z:[2,256,z-2][Math.floor(Math.random()*3)],Te=Y?[2,156,868,q-2][Math.floor(Math.random()*4)]:156+ee*712;V.fillStyle=D.wear,V.fillRect(me+(Math.random()-.5)*3,Te+(Math.random()-.5)*3,1+Math.random()*2,1+Math.random()*2)}})};const l=C=>t(256,256,(D,B,V)=>{const z=D.createImageData(B,V);for(let q=0;q<B*V;q++){const O=C==="bump"?90+Math.random()*120:170+Math.random()*85;z.data[q*4]=z.data[q*4+1]=z.data[q*4+2]=O,z.data[q*4+3]=255}D.putImageData(z,0,0);for(let q=0;q<40;q++)D.fillStyle=`rgba(${C==="bump"?"255,255,255":"0,0,0"},0.05)`,D.beginPath(),D.arc(Math.random()*B,Math.random()*V,6+Math.random()*20,0,7),D.fill()}),c=o(l("bump"),20,40),u=o(l("rough"),20,40);[c,u].forEach(C=>{C.anisotropy=this.aniso,C.generateMipmaps=!0,C.minFilter=Kr}),this.floorMat=new GA({map:this.mkFloor(this.court||"azul"),bumpMap:c,bumpScale:.6,roughnessMap:u,roughness:.5,clearcoat:.3,clearcoatRoughness:.4});const h=new ze(new Wt(10,20),this.floorMat);h.rotation.x=-Math.PI/2,h.receiveShadow=!0,e.add(h);const d=new ze(new Wt(26,38),s("#2F6F55",.9));d.rotation.x=-Math.PI/2,d.position.y=-.01,d.receiveShadow=!0,e.add(d);const p=new ze(new Wt(140,140),s("#7A7973",1));p.rotation.x=-Math.PI/2,p.position.y=-.03,e.add(p);const v=t(64,64,(C,D,B)=>{C.strokeStyle="rgba(40,40,40,0.95)",C.lineWidth=4,C.beginPath(),C.moveTo(0,2),C.lineTo(D,2),C.moveTo(2,0),C.lineTo(2,B),C.stroke()});v.generateMipmaps=!0,v.minFilter=Kr;const x=(C,D,B,V,z,q,O)=>{const Y=v.clone();o(Y,C/O,D/O);const ee=new ze(new Wt(C,D),new wt({map:Y,transparent:!0,side:Xt,depthWrite:!1}));ee.position.set(B,V,z),ee.rotation.y=q||0,e.add(ee)},m=t(128,128,(C,D,B)=>{C.fillStyle="#9a9a9a",C.fillRect(0,0,D,B);for(let V=0;V<26;V++){const z=Math.random()*D,q=C.createLinearGradient(z,0,z+6,0);q.addColorStop(0,"rgba(255,255,255,0)"),q.addColorStop(.5,`rgba(255,255,255,${.1+Math.random()*.2})`),q.addColorStop(1,"rgba(255,255,255,0)"),C.fillStyle=q,C.fillRect(z,0,6,B)}}),f=new sr({color:"#CFE8F7",transparent:!0,opacity:.2,alphaMap:m,roughness:.1,roughnessMap:m,metalness:.35,side:Xt,depthWrite:!1}),_=(C,D,B,V,z,q)=>{const O=new ze(new Wt(C,D),f);O.position.set(B,V,z),O.rotation.y=q||0,e.add(O)};_(10,3,0,1.5,10,0),_(10,3,0,1.5,-10,0),_(20,2,5,1,0,Math.PI/2),_(20,2,-5,1,0,Math.PI/2),x(10,1,0,3.5,-10,0,.12),x(20,1,5,2.5,0,Math.PI/2,.12),x(20,1,-5,2.5,0,Math.PI/2,.12);const g="#3A3A38";for(let C=-2;C<=2;C++)e.add(a(.07,4,.07,g,C*2.5,2,-10.02));for(let C=-4;C<=4;C++)e.add(a(.07,3,.07,g,5.02,1.5,C*2.5),a(.07,3,.07,g,-5.02,1.5,C*2.5));e.add(a(10.1,.06,.06,g,0,3,-10.02),a(10.1,.06,.06,g,0,4,-10.02),a(.06,.06,20,g,5.02,2,0),a(.06,.06,20,g,5.02,3,0),a(.06,.06,20,g,-5.02,2,0),a(.06,.06,20,g,-5.02,3,0));const S=v.clone();o(S,10/.12,.88/.12);const R=new ze(new Wt(10,.88),new wt({map:S,transparent:!0,side:Xt,depthWrite:!1}));R.position.set(0,.44,0),e.add(R);const E=(C,D,B,V,z,q)=>{const O=new ze(new Ii(C,D,B),new sr({color:"#E8F4FB",roughness:.2,metalness:.3,emissive:"#6fa8c8",emissiveIntensity:.25}));O.position.set(V,z,q),e.add(O)};E(10,.04,.04,0,3,10),E(10,.04,.04,0,3,-10),E(.04,.04,20,5,2,0),E(.04,.04,20,-5,2,0),e.add(a(10,.012,.012,"#222",0,.45,0),a(10,.07,.05,"#fff",0,.91,0),a(.1,1.02,.1,"#2C2C2A",-5.05,.51,0,!0),a(.1,1.02,.1,"#2C2C2A",5.05,.51,0,!0));const w=(C,D,B,V,z,q)=>{const O=t(512,96,(Y,ee,me)=>{Y.fillStyle=D,Y.fillRect(0,0,ee,me),Y.fillStyle="#fff",Y.font="500 46px sans-serif",Y.textAlign="center",Y.textBaseline="middle",Y.fillText(C,ee/2,me/2+2)});[0,Math.PI].forEach(Y=>{const ee=new ze(new Wt(q,q*96/512),new wt({map:O,toneMapped:!1})),me=Math.sin(z+Y)*.01,Te=Math.cos(z+Y)*.01;ee.position.set(B+me,.45,V+Te),ee.rotation.y=z+Y,e.add(ee)})};w("CLUB SIERRAS","#0C447C",-2.6,-10.2,0,4.6),w("PADEL PRO","#D85A30",2.6,-10.2,0,4.6),w("CLUB SIERRAS","#0C447C",-2.6,10.2,0,4.6),w("PADEL PRO","#D85A30",2.6,10.2,0,4.6),w("CLUB SIERRAS","#0C447C",5.2,-4.5,-Math.PI/2,4.6),w("PADEL PRO","#D85A30",5.2,4.5,-Math.PI/2,4.6),w("PADEL PRO","#D85A30",-5.2,-4.5,Math.PI/2,4.6),w("CLUB SIERRAS","#0C447C",-5.2,4.5,Math.PI/2,4.6);const N=t(64,64,C=>{const D=C.createRadialGradient(32,32,1,32,32,31);D.addColorStop(0,"rgba(255,255,255,1)"),D.addColorStop(.2,"rgba(255,240,200,0.6)"),D.addColorStop(1,"rgba(255,230,180,0)"),C.fillStyle=D,C.fillRect(0,0,64,64)}),M=()=>{const C=new Pt,D=[];let B=1234567;const V=()=>(B=B*1664525+1013904223>>>0,B/4294967296),z=8,q=.56,O=1.1,Y=-12.2,ee=["#D85A30","#185FA5","#0C447C","#EF9F27","#1D9E75","#F1EFE8","#534AB7","#D4537E","#2C2C2A","#B33A3A"],me=["#F5D0B0","#E0AC82","#B9774F","#7A4A2E","#5A3520"],Te=["#1B1B1A","#3B2A1E","#6B4423","#D9A441","#8E3B2A","#B8B8B2"];for(let Se=0;Se<z;Se++){const De=.45+Se*.8,Ae=Y-Se*O;C.add(a(27,De,O+.02,Se%2?"#8F8E88":"#85847E",0,De/2-.03,Ae)),C.add(a(27,.05,.42,Se%2?"#2C5E8F":"#C0502C",0,De+.02,Ae+.2))}const Me=t(1024,64,(Se,De,Ae)=>{Se.fillStyle="#0C447C",Se.fillRect(0,0,De,Ae);const be=["CLUB SIERRAS","UC","PADEL PRO","UC"],ve=["#0C447C","#111","#D85A30","#2A93A8"];be.forEach((Ie,We)=>{Se.fillStyle=ve[We],Se.fillRect(We*256,0,256,Ae),Se.fillStyle="#fff",Se.font="800 34px sans-serif",Se.textAlign="center",Se.textBaseline="middle",Se.fillText(Ie,We*256+128,Ae/2+2)})});o(Me,3,1);const Le=new ze(new Wt(26,.7),new wt({map:Me}));Le.position.set(0,.75,-11.75),C.add(Le);const L=a(26,.05,.05,"#C9C9C2",0,1.15,-11.7);C.add(L),C.add(a(27,9,.4,"#4B4E58",0,4.4,Y-z*O-.1));const de=()=>new VA({color:16777215}),Z=new wo(.17,.26,2,6),ue=new ni(.125,9,7),te=new ni(.135,9,5,0,Math.PI*2,0,1.55),Ne=new wo(.045,.26,2,5),we=z*50,A=Se=>{const De=new nA(Se,de(),we);return De.frustumCulled=!1,De},y=A(Z),k=A(ue),re=A(te),ne=A(Ne),ae=A(Ne),_e=A(Ne),ce=new At,ge=new ke,Re=new Float32Array(we*16),xe=(Se,De,Ae,be,ve,Ie,We,tt,He=0,pe=0)=>{ce.position.set(Ae,be,ve),ce.rotation.set(He,0,pe),ce.scale.set(Ie,We,tt),ce.updateMatrix(),Se.setMatrixAt(De,ce.matrix)};let ie=0;for(let Se=0;Se<z;Se++){const De=.45+Se*.8,Ae=Y-Se*O+.1;for(let be=-11.2;be<=11.2;be+=q){if(V()<.1+Se*.02||ie>=we)continue;const ve=be+(V()-.5)*.14,Ie=.88+V()*.22,We=ee[Math.floor(V()*ee.length)],tt=me[Math.floor(V()*me.length)];xe(y,ie,ve,De+.42*Ie,Ae,1,Ie,.78),y.setColorAt(ie,ge.set(We)),xe(k,ie,ve,De+.9*Ie,Ae,1,1.08,1),k.setColorAt(ie,ge.set(tt));const He=V()<.86;xe(re,ie,ve,De+.92*Ie,Ae,He?1:0,He?1:0,He?1:0),re.setColorAt(ie,ge.set(Te[Math.floor(V()*Te.length)])),xe(ne,ie,ve-.2,De+.36*Ie,Ae+.04,1,1,1,-.25,.12),ne.setColorAt(ie,ge.set(tt)),xe(ae,ie,ve+.2,De+.36*Ie,Ae+.04,1,1,1,-.25,-.12),ae.setColorAt(ie,ge.set(tt));const pe=V()<.12;xe(_e,ie,ve+.22,De+.78*Ie,Ae,1,1,1,0,-.35),_e.setColorAt(ie,ge.set(tt)),ce.updateMatrix(),Re.set(ce.matrix.elements,ie*16),pe||xe(_e,ie,ve+.22,De+.78*Ie,Ae,0,0,0),ie++}}return[y,k,re,ne,ae,_e].forEach(Se=>{Se.count=ie,Se.instanceMatrix.needsUpdate=!0,Se.instanceColor&&(Se.instanceColor.needsUpdate=!0),C.add(Se)}),[y,k,re,ne,ae].forEach(Se=>D.push({m:Se,base:Se.instanceMatrix.array.slice(),alt:null,g:C})),D.push({m:_e,base:_e.instanceMatrix.array.slice(),alt:Re.slice(0,ie*16),g:C}),[-1,1].forEach(Se=>{const De=new ze(new Fo(.09,.12,11,8),s("#5F5E5A",.6));De.position.set(Se*9.5,5.5,-11.6),C.add(De);const Ae=new ze(new Ii(1.6,.35,.4),new wt({color:"#FFF6D0"}));Ae.position.set(Se*9.5,11.1,-11.4),C.add(Ae);const be=new eA(new ex({map:N,color:"#FFE9B0",transparent:!0,blending:Qs,depthWrite:!1,opacity:.8}));be.scale.set(5,5,1),be.position.set(Se*9.5,11.1,-11.2),C.add(be);const ve=new ze(new Hd(3.2,11,18,1,!0),new wt({color:"#FFF1CC",transparent:!0,opacity:.035,blending:Qs,depthWrite:!1,side:Xt}));ve.position.set(Se*8.2,5.8,-10.6),ve.rotation.z=Se*.35,ve.rotation.x=-.35,C.add(ve)}),{g:C,parts:D}},T=M(),H=M();this.crowd=T.g,this.crowd2=H.g,this.crowd2.rotation.y=Math.PI,e.add(this.crowd,this.crowd2),this.cm=[...T.parts,...H.parts];try{const C=new X_(128),D=new V_(.1,200,C);D.position.set(0,2,0),e.add(D),D.update(this.ren,e),e.remove(D),f.envMap=C.texture,f.envMapIntensity=.9,h.material.envMap=C.texture,h.material.envMapIntensity=.45}catch{}const j=t(128,64,(C,D,B)=>{C.fillStyle="#D9E03A",C.fillRect(0,0,D,B);for(let V=0;V<900;V++)C.fillStyle="rgba(255,255,255,0.07)",C.fillRect(Math.random()*D,Math.random()*B,1,1);C.strokeStyle="#F4F6E8",C.lineWidth=5,C.beginPath(),C.arc(32,32,26,-1.2,1.2),C.stroke(),C.beginPath(),C.arc(96,32,26,Math.PI-1.2,Math.PI+1.2),C.stroke()});this.ball=new ze(new ni(Pi,16,12),new sr({map:j,roughness:.95,emissive:"#4A4A08"})),this.ball.castShadow=!0,e.add(this.ball);const oe=(C,D,B)=>{const V=new ze(C,new wt({color:D,transparent:!0,opacity:B,side:Xt,depthWrite:!1}));return V.rotation.x=-Math.PI/2,e.add(V),V};this.bsh=oe(new ks(.2,14),"#000",.3),this.ring=oe(new wi(.85,1,28),"#fff",.4),this.ring.position.y=.03,this.aim=oe(new wi(.35,.5,20),"#97C459",.9),this.aim.position.y=.04,this.rip=oe(new wi(.22,.3,18),"#fff",.5),this.rip.visible=!1,this.land=new Pt,this.land.visible=!1,e.add(this.land);const P=(C,D)=>{const B=new ze(C,new wt({color:"#fff",transparent:!0,opacity:D,depthWrite:!1,side:Xt}));return B.rotation.x=-Math.PI/2,this.land.add(B),B};this.landDisc=P(new ks(.55,28),.26),this.landRing=P(new wi(.5,.6,28),.85),this.landOuter=P(new wi(.9,.95,28),.7),this.land.position.y=.035,this.dropM=new Pt,this.dropM.visible=!1,e.add(this.dropM);const G=(C,D)=>{const B=new ze(C,new wt({color:"#FFB347",transparent:!0,opacity:D,depthWrite:!1,side:Xt}));return B.rotation.x=-Math.PI/2,this.dropM.add(B),B};G(new ks(.5,28),.22),G(new wi(.45,.55,28),.9),this.dropRing=G(new wi(.8,.85,28),.7),this.dropM.position.y=.04;const $=ta(64,64,C=>{const D=C.createRadialGradient(32,32,2,32,32,30);D.addColorStop(0,"rgba(255,255,255,0.95)"),D.addColorStop(.35,"rgba(210,240,255,0.5)"),D.addColorStop(1,"rgba(200,230,255,0)"),C.fillStyle=D,C.fillRect(0,0,64,64)},1);this.glints=[];for(let C=0;C<4;C++){const D=new ze(new Wt(1.4,1.4),new wt({map:$,transparent:!0,depthWrite:!1,blending:Qs,side:Xt}));D.visible=!1,D.userData.t=0,e.add(D),this.glints.push(D)}this.gIdx=0,this.sbox=new Pt,this.sbox.visible=!1,e.add(this.sbox);const se=new ze(new Wt(5,6.95),new wt({color:"#FFF3A0",transparent:!0,opacity:.34,depthWrite:!1}));se.rotation.x=-Math.PI/2,this.sbox.add(se);const F=new rA(new yA(new Wt(5,6.95)),new nx({color:"#FFE066",transparent:!0,opacity:.9}));F.rotation.x=-Math.PI/2,this.sbox.add(F),this.sbox.position.y=.025,this.fxm=new ze(new ni(.2,10,8),new wt({color:"#fff",transparent:!0,opacity:.8})),this.fxm.visible=!1,e.add(this.fxm),this.trail=[];for(let C=0;C<8;C++){const D=new ze(new ni(.09,6,6),new wt({color:"#E8E34A",transparent:!0,opacity:.45-C*.05}));D.visible=!1,e.add(D),this.trail.push(D)}this.decals=[];for(let C=0;C<12;C++){const D=new ze(new ks(.11,12),new wt({color:"#0b2a4a",transparent:!0,opacity:0,depthWrite:!1}));D.rotation.x=-Math.PI/2,D.position.y=.012,D.visible=!1,D.life=0,e.add(D),this.decals.push(D)}this.NP=16,this.pg=new bt,this.pp=new Float32Array(this.NP*3),this.pv=new Float32Array(this.NP*3),this.pg.setAttribute("position",new Pn(this.pp,3)),this.pm=new ix({color:"#fff",size:.13,transparent:!0,opacity:.9,depthWrite:!1}),this.pts=new sA(this.pg,this.pm),this.pts.frustumCulled=!1,this.pts.visible=!1,e.add(this.pts)}setupPost(){try{const e=new Wn(2,2,{type:pi,samples:4}),t=new QA(this.ren,e);t.addPass(new eb(this.scene,this.cam)),this.bloom=new pa(new le(2,2),.3,.55,.92),t.addPass(this.bloom),t.addPass(new ib),this.grade=new dx(xb),t.addPass(this.grade),this.composer=t}catch{this.composer=null}}resize(){if(!this.ok)return;const e=Math.max(1,this.container.clientWidth),t=Math.max(1,this.container.clientHeight);if(this.w=e,this.h=t,this.ren.setPixelRatio(this.hq?Math.min(this.dpr,2):1),this.ren.setSize(e,t,!1),this.cam.aspect=e/t,this.cam.updateProjectionMatrix(),this.composer){const i=this.ren.getPixelRatio();this.composer.setPixelRatio(i),this.composer.setSize(e,t),this.grade.uniforms.res.value.set(e*i,t*i)}}warm(){if(!this.ok)return;const e=[this.fxm,this.rip,this.land,this.dropM,this.sbox,this.pts,this.ball,this.bsh,this.ring,this.aim,...this.glints,...this.decals,...this.trail].filter(Boolean),t=e.map(i=>i.visible);e.forEach(i=>{i.visible=!0});try{this.ren.compile(this.scene,this.cam),this.hq&&this.composer?this.composer.render(0):this.ren.render(this.scene,this.cam)}catch{}e.forEach((i,r)=>{i.visible=t[r]})}setCourt(e){if(Bl[e]||(e="azul"),this.court=e,!this.floorMat)return;const t=Bl[e],i=this.floorMat,r=i.map;i.map=this.mkFloor(e),i.roughness=t.rough,i.clearcoat=t.cc,i.bumpScale=t.bump,i.needsUpdate=!0,r&&r.dispose&&r.dispose()}setQuality(e){this.ok&&(this.hq=e,this.ren.shadowMap.enabled=e,this.dl.castShadow=e,this.resize(),this.scene.traverse(t=>{t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>{i.needsUpdate=!0})}),this.warm())}setPreviewLook(e,t="Vos",i=10){if(!this.ok)return;const r=JSON.stringify(e)+t+i;r!==this.previewKey&&(this.previewKey=r,this.preview&&(this.scene.remove(this.preview),$0(this.preview)),this.preview=q0(e,t,i),this.scene.add(this.preview))}syncRoster(e){const t=e.map(r=>`${r.slot}:${r.uid||"bot"}:${r.name}:${r.num}:${JSON.stringify(r.look)}`).join("|");if(t===this.rosterKey)return;this.rosterKey=t,this.avatars.forEach(r=>{this.scene.remove(r.g),$0(r.g)}),this.avatars.clear();const i={a:[],b:[]};e.forEach(r=>i[r.slot<2?"a":"b"].push(r)),e.forEach(r=>{const s=r.slot<2?"a":"b",a=i[s],o=a.indexOf(r),l=q0(r.look||_b,r.name,r.num);l.rotation.y=s==="a"?0:Math.PI,this.scene.add(l),this.avatars.set(r.slot,{g:l,team:s,off:r.slot*1.7,sw:null,swId:0,lx:a.length>1?o===0?2.3:-2.3:0,lz:(s==="a"?1:-1)*(a.length>1?7:8)})})}animate(e,t,i,r,s){const a=e.g.userData,o=Math.sin(this.clk*11+e.off)*r,l=Math.cos(this.clk*11+e.off)*r;a.lL.rotation.x=o*.9,a.lR.rotation.x=-o*.9,a.kL.rotation.x=-(Math.max(0,-l)*.95+.14),a.kR.rotation.x=-(Math.max(0,l)*.95+.14),a.la.rotation.x=-o*.8,a.up.rotation.x=-.14*r,e.g.position.set(t,Math.abs(o)*.04,i);const c=1-Math.min(1,r*1.5),u=this.clk+e.off;a.up.scale.y=1+.012*Math.sin(u*2.4)*c,a.up.rotation.z=.025*Math.sin(u*1.7)*c,a.la.rotation.z=.05+.03*Math.sin(u*2.4)*c;const h=this.ball&&this.ball.visible&&this.inGame?this.ball.position:null;let d=0,p=0;if(h){const m=h.x-t,f=h.z-i,_=e.team==="a"?1:-1;d=Ba(Math.atan2(-m*_,-f*_),-1,1),p=Ba((h.y-1.7)*.12,-.25,.1)}e.hy=(e.hy||0)+(d-(e.hy||0))*Math.min(1,s*9),a.head.rotation.y=e.hy,a.head.rotation.x=p+.05*r;const v=u%3.7<.12?.12:1;a.eyes[0].scale.y=a.eyes[1].scale.y=v,a.tail&&(a.tail.rotation.x=.12+.3*r*Math.abs(Math.sin(this.clk*11+e.off)),a.tail.rotation.z=.1*Math.sin(u*3)+.25*o*.4),a.blob.position.y=.012-e.g.position.y;let x=0;if(e.sw){e.sw.t+=s;const m=Math.min(1,e.sw.t/e.sw.dur),f=1-Math.pow(1-m,3);if(e.sw.wind!=null){if(m<.32){const S=m/.32;a.arm.rotation.x=e.sw.a0+(e.sw.wind-e.sw.a0)*(1-Math.pow(1-S,2)),a.up.rotation.x=-.32*S}else{const S=(m-.32)/.6799999999999999,R=S*S*(3-2*S);a.arm.rotation.x=e.sw.wind+(e.sw.a1-e.sw.wind)*R,a.up.rotation.x=-.32+.75*R}e.g.position.y+=Math.sin(Math.PI*Math.min(1,m*1.1))*.28,x=.25*Math.sin(Math.PI*m)}else a.arm.rotation.x=e.sw.a0+(e.sw.a1-e.sw.a0)*f,x=(e.sw.yaw>0?.55:-.45)*Math.sin(Math.PI*m);a.arm.rotation.y=e.sw.yaw*Math.sin(Math.PI*m);const _=Math.sin(Math.PI*m);a.la.rotation.x=e.sw.wind!=null?1.9*_:-.7*_,a.lL.rotation.x+=-.4*_,a.lR.rotation.x+=.4*_,e.sw.t>e.sw.dur+.25&&(e.sw=null,a.arm.rotation.set(.5,0,0),a.up.rotation.x=0)}else a.arm.rotation.x=.5+o*.15;a.up.rotation.y=x}handleEvent(e){if(this.ok){if(e.t==="hit"){const t=e.gold||e.q===0,i=e.gold?"#EF9F27":["#EF9F27","#ffffff","#B4B2A9"][e.q];this.fxm.material.color.set(i),this.fxm.position.set(e.x,e.y,e.z),this.fxm.visible=!0,this.fxT=.25,this.hq&&this.burst(e.x,e.y,e.z,i);const r=e.slot===this.mySlot;if(this.shake=Math.max(this.shake,((e.shot==="remate"?.05:t?.035:.012)+(e.pw||0)*.02)*(r?1:.5)),(e.shot==="remate"||e.gold)&&(this.fovVel-=r?12:6),Ki.hit(e.shot,e.q,e.pw||0),r&&navigator.vibrate)try{navigator.vibrate(e.shot==="remate"?35:e.q===0?22:12)}catch{}}else if(e.t==="bounce"){this.rip.position.set(e.x,.04,e.z),this.rip.visible=!0,this.ripT=.3,Ki.bounce();const t=this.decals[this.dIdx++%this.decals.length];t.position.set(e.x,.012,e.z),t.life=7,t.visible=!0,this.hq&&this.burst(e.x,.05,e.z,"#d9ccae",.55)}else if(e.t==="wall")e.mesh?Ki.mesh(e.v):Ki.wall(e.v),this.shake=Math.max(this.shake,Math.min(.035,(e.v||8)*.003)),e.x!=null&&this.glint(e);else if(e.t==="net")Ki.net();else if(e.t==="point"){const t=this.mySlot<0||e.who===this.myTeam;Ki.point(e.ev,t);const i=e.replay?1.3:e.ev==="punto"?.55:1;this.cheer=Math.max(this.cheer,Math.min(1,i)),Ki.cheer(i),e.label&&(this.shake=Math.max(this.shake,.06),this.fovVel-=16,Ki.exit()),e.replay&&(this.replayArm=this.clk+.45)}}}glint(e){const t=this.glints[this.gIdx++%this.glints.length],i=Math.abs(e.x)>4.5&&Math.abs(e.x)>Math.abs(e.z)*.45;t.rotation.set(0,i?Math.PI/2:0,0),t.position.set(i?Math.sign(e.x)*4.95:e.x,Math.max(.3,e.y),i?e.z:Math.sign(e.z)*9.95),t.material.color.set(e.mesh?"#c9ced3":"#ffffff"),t.userData.t=.5,t.userData.k=e.mesh?.6:Math.min(1.4,.7+(e.v||8)*.05),t.visible=!0}burst(e,t,i,r,s=1){this.pm.color.set(r);for(let a=0;a<this.NP;a++){this.pp[a*3]=e,this.pp[a*3+1]=t,this.pp[a*3+2]=i;const o=Math.random()*6.283,l=(Math.random()*2-.5)*s,c=1.5+Math.random()*2.5;this.pv[a*3]=Math.cos(o)*c,this.pv[a*3+1]=l*c+1*s,this.pv[a*3+2]=Math.sin(o)*c}this.pT=.45,this.pts.visible=!0,this.pg.attributes.position.needsUpdate=!0}updateFx(e){if(this.fxT>0){this.fxT-=e;const t=1-Math.max(this.fxT,0)/.25;this.fxm.scale.setScalar(1+t*3),this.fxm.material.opacity=.8*(1-t),this.fxT<=0&&(this.fxm.visible=!1)}if(this.ripT>0){this.ripT-=e;const t=1-Math.max(this.ripT,0)/.3;this.rip.scale.set(1+t*3,1+t*3,1),this.rip.material.opacity=.5*(1-t),this.ripT<=0&&(this.rip.visible=!1)}if(this.pT>0){this.pT-=e;for(let t=0;t<this.NP;t++)this.pv[t*3+1]-=9*e,this.pp[t*3]+=this.pv[t*3]*e,this.pp[t*3+1]=Math.max(.03,this.pp[t*3+1]+this.pv[t*3+1]*e),this.pp[t*3+2]+=this.pv[t*3+2]*e;this.pg.attributes.position.needsUpdate=!0,this.pm.opacity=Math.max(0,this.pT/.45)*.9,this.pT<=0&&(this.pts.visible=!1)}this.glints.forEach(t=>{if(t.visible){t.userData.t-=e;const i=1-Math.max(0,t.userData.t)/.5;t.scale.setScalar((.5+i*1.5)*t.userData.k),t.material.opacity=Math.max(0,1-i),t.userData.t<=0&&(t.visible=!1)}}),this.decals.forEach(t=>{t.visible&&(t.life-=e,t.material.opacity=.32*Math.min(1,t.life/2.5),t.life<=0&&(t.visible=!1))}),this.updateCrowd(e)}updateCrowd(e){if(this.cheer<=.001){this.cheerDirty&&(this.cm.forEach(r=>{r.m.instanceMatrix.array.set(r.base),r.m.instanceMatrix.needsUpdate=!0}),this.cheerDirty=!1);return}this.cheer=Math.max(0,this.cheer-e*.45);const t=.3*Math.min(1,this.cheer*1.6),i=this.cheer>.12;this.cm.forEach(r=>{if(!r.g.visible)return;const s=r.m.instanceMatrix.array;s.set(r.alt&&i?r.alt:r.base);for(let a=0;a<r.m.count;a++)s[a*16+13]+=Math.abs(Math.sin(this.clk*7+a*.73%6.283))*t;r.m.instanceMatrix.needsUpdate=!0}),this.cheerDirty=!0}placeAvatars(e,t){this.avatars.forEach(i=>{i.g.visible=!1}),e.forEach(i=>{const r=this.avatars.get(i.slot);if(r){if(r.g.visible=!0,!this.syncSw&&i.swId&&i.swId!==r.swId){const s=X0[i.swK]||X0.remate;r.sw={a0:s[0],a1:s[1],dur:s[2],wind:s[3]==null?null:s[3],yaw:i.swYaw,t:0}}r.swId=i.swId,this.animate(r,i.x,i.z,i.mv,t),r.g.rotation.y=r.team==="a"?0:Math.PI}}),this.syncSw=!1}placeBall(e,t){this.ball.visible=!0,this.bsh.visible=!0,this.ball.position.set(e.x,e.y,e.z);const i=e.vz>=0?1:-1;this.ball.rotation.x+=e.vz*t*.8+i*(e.spin||0)*t*16,this.ball.rotation.z-=e.vx*t*.8,this.bsh.position.set(e.x,.02,e.z),this.bsh.scale.setScalar(Math.max(.4,1-e.y*.12)),this.hist.unshift({x:e.x,y:e.y,z:e.z}),this.hist.length>9&&this.hist.pop();const r=Math.hypot(e.vx,e.vy,e.vz)>7&&!e.hold;this.trail.forEach((s,a)=>{const o=this.hist[a+1];s.visible=r&&!!o,o&&(s.position.set(o.x,o.y,o.z),s.scale.setScalar(1-a*.1))})}updateMarkers(e,t){const i=e.ys||1;let r=!1,s=!1;const a=!t.hold&&e.st==="play"?mx({x:t.x,y:t.y,z:t.z,vx:t.vx,vy:t.vy,vz:t.vz,spin:t.spin,bounces:t.bn||0},3.4):null;if(a&&!t.bn&&a.land&&Math.abs(a.land.x)<5.1&&Math.abs(a.land.z)<10.1){r=!0;const l=a.land.x,c=a.land.z,u=a.land.t,h=e.mySlot>=0&&c*i>0,d=h?"#97C459":"#FFFFFF";this.landOn?(this.landP.x+=(l-this.landP.x)*(1-Math.exp(-16*this.dtv)),this.landP.z+=(c-this.landP.z)*(1-Math.exp(-16*this.dtv)),this.landTl=Math.max(0,this.landTl-this.dtv),this.landTl+=(u-this.landTl)*.2):(this.landP.set(l,.035,c),this.landTl=u),this.land.position.copy(this.landP),this.landOuter.scale.setScalar(1+Math.min(this.landTl,1.5)*.9),this.landCol!==d&&(this.landCol=d,[this.landDisc,this.landRing,this.landOuter].forEach(p=>p.material.color.set(d))),this.landDisc.material.opacity=.24+.04*Math.sin(this.clk*4),this.landGrace=.15}if(a&&a.wall&&a.drop&&e.mySlot>=0&&a.drop.z*i>.3&&!a.mesh&&(s=!0,this.dropOn?(this.dropP.x+=(a.drop.x-this.dropP.x)*(1-Math.exp(-12*this.dtv)),this.dropP.z+=(a.drop.z-this.dropP.z)*(1-Math.exp(-12*this.dtv))):this.dropP.set(a.drop.x,.04,a.drop.z),this.dropM.position.copy(this.dropP),this.dropT=this.dropOn?Math.max(0,this.dropT-this.dtv)+(a.drop.t-Math.max(0,this.dropT-this.dtv))*.2:a.drop.t,this.dropRing.scale.setScalar(1+Math.min(this.dropT,1.6)*.8)),this.dropOn=s,this.dropM.visible=s,!r&&this.landGrace>0&&!t.hold&&!t.bn&&(this.landGrace-=this.dtv,r=!0),this.landOn=r,this.land.visible=r,(e.st==="serve"||e.st==="play"&&t.sf&&!t.bn)&&e.srv>=0&&e.sx){const l=e.srv<2?1:-1;this.sbox.position.set(-e.sx*2.5,.025,-l*3.475),this.sbox.visible=!0}else this.sbox.visible=!1}startReplay(){const e=this.clk,t=this.rec.filter(s=>s.t>=e-2.5);if(t.length<12)return;const i=t.slice(-12),r=i.reduce((s,a)=>s+a.b[0],0)/i.length;this.rp={frames:t,t0:t[0].t,dur:t[t.length-1].t-t[0].t,t:0,i:0,speed:.5,side:r>=0?1:-1},this.hist.length=0,this.onReplay(!0)}endReplay(){this.rp&&(this.rp=null,this.syncSw=!0,this.lookInit=!1,this.hist.length=0,this.avatars.forEach(e=>{e.sw=null}),this.onReplay(!1))}skipReplay(){this.endReplay(),this.replayArm=null}renderReplay(e){const t=this.rp;if(this.clk-=e*(1-t.speed),t.t+=e*t.speed,t.t>=t.dur)return this.endReplay(),!1;const i=t.frames;for(;t.i<i.length-2&&i[t.i+1].t-t.t0<=t.t;)t.i++;const r=i[t.i],s=i[t.i+1],a=Ba((t.t-(r.t-t.t0))/Math.max(1e-4,s.t-r.t),0,1),o=r.e.map(p=>{const v=s.e.find(x=>x[0]===p[0])||p;return{slot:p[0],x:p[1]+(v[1]-p[1])*a,z:p[2]+(v[2]-p[2])*a,mv:p[3],swId:p[4],swK:p[5],swYaw:p[6]}}),l=r.b,c=s.b,u={x:l[0]+(c[0]-l[0])*a,y:l[1]+(c[1]-l[1])*a,z:l[2]+(c[2]-l[2])*a,vx:l[3],vy:l[4],vz:l[5],spin:l[6],hold:!1};this.placeAvatars(o,e*t.speed),this.placeBall(u,e*t.speed),this.ring.visible=!1,this.aim.visible=!1,this.land.visible=!1,this.dropM.visible=!1,this.sbox.visible=!1;const h=t.t/t.dur,d=this.cam;return d.fov=36,d.position.set(t.side*(12.5-2.5*h),5.2+1.2*h,Ba(u.z*.55,-5.5,5.5)),this.look.lerp(new I(u.x*.6,1,u.z),1-Math.exp(-6*e)),d.lookAt(this.look),!0}render(e,t,i={}){if(!this.ok)return;t=Math.min(t,.1),this.dtv=t,this.clk+=t,this.autoQuality&&this.hq&&e&&e.st!=="lobby"&&(t>.036?this.slow++:this.slow=Math.max(0,this.slow-1),this.slow>70&&(this.slow=0,this.setQuality(!1),this.onQuality(!1)));const r=this.cam,s=e&&e.phase==="match"&&e.ball;this.inGame=!!s;const a=e&&e.ys?e.ys:1;if(this.crowd.visible=this.hq&&a>0,this.crowd2.visible=this.hq&&a<0,this.updateFx(t),!s&&this.rp&&this.endReplay(),!e)this.lookInit=!1,this.hideGame(!0),this.preview&&(this.preview.visible=!0,this.preview.rotation.y=.6*Math.sin(this.clk*.8),this.preview.position.set(0,0,8.5)),this.avatars.forEach(o=>{o.g.visible=!1}),r.fov=40,r.position.set(.2,1.3,3.9),r.lookAt(0,1,8.5),this.offset(.2);else if(s){if(this.preview&&(this.preview.visible=!1),this.syncRoster(e.roster),this.mySlot=e.mySlot,this.myTeam=e.mySlot>=0?e.mySlot<2?"a":"b":"a",this.rp||e.events.forEach(o=>this.handleEvent(o)),this.replayArm!=null&&this.clk>=this.replayArm&&(this.replayArm=null,this.startReplay()),this.offset(0),!(this.rp&&this.renderReplay(t))){const o=e.ball;if(this.placeAvatars(e.ents,t),this.placeBall(o,t),this.updateMarkers(e,o),e.st==="serve"||e.st==="play"||e.st==="point")for(this.rec.push({t:this.clk,e:e.ents.map(u=>[u.slot,u.x,u.z,u.mv,u.swId,u.swK,u.swYaw]),b:[o.x,o.y,o.z,o.vx,o.vy,o.vz,o.spin||0]});this.rec.length&&this.clk-this.rec[0].t>3.2;)this.rec.shift();const l=e.ents.find(u=>u.slot===e.mySlot);let c;if(l){const u=e.ys,h=e.st==="play"&&o.z*u>.2&&o.vz*u>-.5&&Math.hypot(o.x-l.x,o.z-l.z)<2&&o.y<2.8;this.ring.visible=!0,this.ring.position.set(l.x,.03,l.z),this.ring.material.color.set(h?"#97C459":"#fff"),this.ring.material.opacity=h?.9:.35;const d=e.st==="serve"&&e.srv===e.mySlot,p=i.aim==null?d?-e.sx*2.2:Ba(-l.x*.5,-3.8,3.8):i.aim;this.aim.visible=h||d,this.aim.position.set(p,.04,(d?-5.4:-6.2)*u),this.aim.material.color.set(!d||p*-e.sx>.3?"#97C459":"#E24B4A"),this.aim.scale.setScalar(1+(i.charge||0)*.9),this.camGoal.set(l.x*.5,8.8,19.5*u),c=this.tgtV.set(l.x*.35+o.x*.05,0,-1.5*u+o.z*.035)}else this.ring.visible=!1,this.aim.visible=!1,this.camGoal.set(Math.sin(this.clk*.15)*4,9,19.5),c=this.tgtV.set(o.x*.05,0,-1.5+o.z*.035);this.lookInit?(this.look.lerp(c,1-Math.exp(-3.5*t)),this.camPos.lerp(this.camGoal,1-Math.exp(-9*t))):(this.look.copy(c),this.camPos.copy(this.camGoal),this.lookInit=!0),r.position.copy(this.camPos),this.fovVel+=(-90*this.fovKick-12*this.fovVel)*t,this.fovKick+=this.fovVel*t,r.fov=58+this.fovKick,this.shake>.002?(this.shake*=Math.exp(-7*t),r.position.x+=Math.sin(this.clk*41)*this.shake*.5,r.position.y+=Math.sin(this.clk*29+1.7)*this.shake*.4):this.shake=0,r.lookAt(this.look)}}else{this.lookInit=!1,this.hideGame(!0),this.preview&&(this.preview.visible=!1),this.syncRoster(e.roster),this.mySlot=e.mySlot,this.avatars.forEach(l=>{l.g.visible=!0,this.animate(l,l.lx,l.lz,0,t),l.g.rotation.y=l.team==="a"?0:Math.PI});const o=this.clk*.12;r.fov=52,r.position.set(Math.sin(o)*11,16,Math.cos(o)*22),r.lookAt(0,0,0),this.offset(.3)}r.updateProjectionMatrix(),this.hq&&this.composer?(this.grade.uniforms.time.value=this.clk*7%97,this.grade.uniforms.blur.value=e?1:0,this.composer.render(t)):this.ren.render(this.scene,r)}hideGame(e){this.ball.visible=!e,this.bsh.visible=!e,this.ring.visible=!e,this.aim.visible=!e,this.land.visible=!1,this.dropM.visible=!1,this.sbox.visible=!1,this.trail.forEach(t=>{t.visible=!1})}offset(e){if(!e){this.cam.clearViewOffset();return}this.cam.setViewOffset(this.w,this.h,0,Math.round(this.h*e),this.w,this.h)}dispose(){this.ok&&(this.ro.disconnect(),this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(t=>{t.map&&t.map.dispose(),t.dispose()})}),this.ren.dispose(),this.ren.domElement.remove())}}function Z0(){return{sets:[],g:{a:0,b:0},p:{a:0,b:0},tb:!1,sw:{a:0,b:0},srv:"a",sIdx:{a:0,b:0}}}const Mb=["0","15","30","40"],Df=(n,e)=>n.tb?String(n.p[e]):Mb[n.p[e]],Eb=n=>!n.tb&&n.p.a===3&&n.p.b===3;function wb(n,e,t){const i=Co[t],r=_r(e);return n.tb?(n.p[e]++,(n.p.a+n.p.b)%2===1&&(n.srv=_r(n.srv)),n.p[e]>=7&&n.p[e]-n.p[r]>=2?(n.g[e]++,n.srv=_r(n.srv),n.sIdx[n.srv]++,_x(n,e,i)):"punto"):n.p[e]===3?Tb(n,e,i):(n.p[e]++,"punto")}function Tb(n,e,t){const i=_r(e);return n.g[e]++,n.p.a=0,n.p.b=0,n.srv=_r(n.srv),n.sIdx[n.srv]++,n.g[e]>=t.games&&n.g[e]-n.g[i]>=t.winBy?_x(n,e,t):(t.tbAt&&n.g.a===t.tbAt&&n.g.b===t.tbAt&&(n.tb=!0),"game")}function _x(n,e,t){return n.sets.push({a:n.g.a,b:n.g.b}),n.sw[e]++,n.g.a=0,n.g.b=0,n.p.a=0,n.p.b=0,n.tb=!1,n.sw[e]>=t.need?"match":"set"}const Ab=["plano","altura","ataque"];function bb(n,e){if(n==="plano")return{shot:"drive",pw:e.pw};if(n==="altura")return{shot:"globo",pw:e.pw};if(n!=="ataque")return{shot:n,pw:e.pw};const t=e.pw>=.7||e.sl;return e.by>1.7?t?{shot:Math.abs(e.ax||0)>=2||Math.abs(e.px)>2.2?"x3":"x4",pw:e.pw}:{shot:"remate",pw:e.pw}:e.by>1.3&&!t?{shot:"remate",pw:e.pw}:Math.abs(e.pz)<6.5&&!t?{shot:"dejada",pw:0}:{shot:"drive",pw:Math.max(e.pw,.6)}}function Cb(n,e){return n>1.7?"Remate":Math.abs(e)<6.5?"Dejada":"Potente"}const Ot=(n,e,t)=>Math.max(e,Math.min(t,n)),Qe=n=>Math.round(n*100)/100,Rb=20;class Q0{constructor({fmt:e="exp",rng:t=Math.random}={}){this.fmt=e,this.rng=t,this.state="idle",this.ents=[],this.ball={x:0,y:1,z:0,vx:0,vy:0,vz:0,last:null,bounces:0,shot:"",hold:!0,out:!1,spin:0},this.m=Z0(),this.events=[],this.srv=null,this.stT=0,this.serveT=0,this.rallyT=0,this.rallyHits=0,this.matchEnd=!1,this.winner=null,this.pending=null,this.swSeq=0,this.sn=1,this.sx=1,this.retry=!1,this.clock=0,this.diff="medio",this.mode="match",this.tr={n:0,ok:0,streak:0,best:0,pts:0,max:20},this.hitSeq=0}D(){return Ro[this.diff]||Ro.medio}emit(e){this.events.push(e)}drain(){const e=this.events;return this.events=[],e}team(e){return this.ents.filter(t=>t.team===e)}entOf(e){return this.ents.find(t=>t.uid===e)||null}setRoster(e){const t=new Map(this.ents.map(i=>[i.slot,i]));this.ents=e.map(i=>{const r=t.get(i.slot);return r&&r.uid===i.uid?(r.name=i.name,r):{slot:i.slot,team:Rf(i.slot),uid:i.uid,name:i.name,bot:i.uid==null,x:0,z:0,mv:0,sw:null,lv:null,cd:0,hx:0,buf:null,inp:{mx:0,mz:0,ax:null,age:9}}}),["a","b"].forEach(i=>{const r=this.team(i);r.forEach((s,a)=>{s.hx=r.length>1?a===0?2.3:-2.3:0})})}start(e){this.fmt=e||this.fmt,this.m=Z0(),this.matchEnd=!1,this.winner=null,this.clock=0,this.retry=!1,this.tr={n:0,ok:0,streak:0,best:0,pts:0,max:(lb[this.mode]||{max:20}).max},this.newServe()}input(e,t){const i=this.entOf(e);i&&(i.inp.mx=Ot(+t.mx||0,-1,1),i.inp.mz=Ot(+t.mz||0,-1,1),i.inp.ax=t.ax==null?null:Ot(+t.ax,-4.2,4.2),i.inp.age=0,t.shot&&this.shotInput(i,t.shot,i.inp.ax,Ot(+t.pw||0,0,1),!!t.sl))}newServe(){if(this.pending&&(this.setRoster(this.pending),this.pending=null,this.emit({t:"roster"})),this.mode==="smash"){this.newFeed();return}const e=this.m.srv,t=this.team(e);this.srv=t.length?t[this.m.sIdx[e]%t.length]:null,this.retry||(this.sn=1),this.retry=!1;const i=this.mode==="serve"?this.tr.n%2:(this.m.p.a+this.m.p.b)%2;this.sx=i===0?sn(e):-sn(e),this.ents.forEach(s=>{const a=sn(s.team),o=s===this.srv,l=s.team===e&&!o,c=this.team(s.team).length>1;s.x=o?this.sx*2.4:s.hx,s.z=a*(o?8.8:l?3.8:c?7:8.2),s.mv=0,s.sw=null,s.lv=null,s.buf=null,s.cd=0});const r=this.ball;r.hold=!0,r.vx=r.vy=r.vz=0,r.last=null,r.out=!1,r.bounces=0,r.spin=0,r.let=!1,r.pw=0,r.shot="",this.srv&&(r.x=this.srv.x+.35,r.y=1,r.z=this.srv.z-sn(this.srv.team)*.5),this.state="serve",this.serveT=1,this.rallyT=0,this.rallyHits=0,this.emit({t:"serve",slot:this.srv?this.srv.slot:-1,sn:this.sn}),Eb(this.m)&&this.emit({t:"msg",tx:"Punto de oro",ms:2200,gold:!0})}point(e,t){if(this.state!=="play")return;if(this.mode!=="match"){this.trainPoint(e,t);return}const i=wb(this.m,e,this.fmt);this.state="point";const r=!!t||i==="set"||i==="match";this.stT=i==="punto"&&!t?1.3:r?6:2.3,this.matchEnd=i==="match",this.matchEnd&&(this.winner=e),this.emit({t:"point",who:e,ev:i,replay:r,label:t||null,pts:[Df(this.m,"a"),Df(this.m,"b")]})}fault(e){const t=this.ball;if(this.state==="play"&&t.shot==="saque"&&t.bounces===0&&this.srv&&e===this.srv.team){this.serveFault();return}this.point(_r(e))}serveFault(e){if(this.state==="play"){if(this.mode==="serve"){this.trainEnd(!1,`Falta${e?" · "+e:""}`,0);return}this.sn===1?(this.sn=2,this.retry=!0,this.state="point",this.stT=1.4,this.emit({t:"msg",tx:`Falta${e?" · "+e:""} · 2º saque`,ms:1700})):(this.emit({t:"msg",tx:`Doble falta${e?" · "+e:""}`,ms:1700}),this.point(_r(this.srv.team)))}}letServe(){this.state==="play"&&(this.retry=!0,this.state="point",this.stT=1.4,this.emit({t:"msg",tx:"Let · se repite el saque",ms:1500,gold:!0}))}serveValid(){const e=this.ball,t=-this.sx;return e.z*sn(this.srv.team)>=0?"cayó de tu lado":e.x*t<=0?"al paralelo":Math.abs(e.z)>sb?"largo":null}trainEnd(e,t,i){if(this.state!=="play")return;const r=this.tr;r.n++,e?(r.ok++,r.streak++,r.best=Math.max(r.best,r.streak),r.pts+=i):r.streak=0,this.emit({t:"msg",tx:t,ms:1400,gold:e}),this.emit({t:"train",ok:e,pts:i}),this.state="point",this.stT=1.4,r.n>=r.max&&(this.matchEnd=!0,this.winner=null)}trainPoint(e,t){if(e!=="a"){this.trainEnd(!1,"Fallaste",0);return}const i=this.ball.shot,r=t&&t.includes("3")?3:t?4:i==="remate"?2:1;this.trainEnd(!0,t?t.split(":")[0]:i==="remate"?"Buen remate · +2":"Punto · +1",r)}newFeed(){const e=this.ents.find(o=>o.team==="a");e&&(e.x=0,e.z=5,e.mv=0,e.sw=null,e.lv=null,e.buf=null,e.cd=0);const t=this.ball,i=this.rng;t.x=(i()-.5)*5,t.y=1.5,t.z=-9,t.vx=t.vy=t.vz=0;const r=(i()-.5)*6.4,s=2.4+i()*3.2,a=1.75+i()*.35;this.launch(r,s,a,!1),t.last="b",t.shot="globo",t.bounces=0,t.hold=!1,t.out=!1,t.spin=.2,t.let=!1,t.pw=0,t.hid=++this.hitSeq,this.state="play",this.rallyT=0,this.rallyHits=0,this.srv=e||null,this.emit({t:"msg",tx:"Pelota alta: rematá o probá un x3 / x4",ms:1600})}launch(e,t,i,r){const s=this.ball,a=s.x,o=s.y,l=s.z;let c,u,h;for(let d=0;d<6;d++){c=(e-a)/i,h=(t-l)/i,u=(Pi-o)/i+.5*Hs*i;const p=(0-l)/h,v=o+u*p-.5*Hs*p*p;if(!r||p>0&&p<i&&v>1.25)break;i+=.12}s.vx=c,s.vy=u,s.vz=h}swing(e,t,i){e.sw={id:++this.swSeq,k:t,yaw:i||0,t:0}}hit(e,t,i,r,s,a,o,l,c=0){const u=e==="a"?-1:1;let h=t,d=!1;l&&(h=l.ok?l.k:"remate",d=l.ok);const p=rb[h],v=h==="dejada"?0:Ot(c||0,0,1),x=[0,.5,1.3][a]*(1+.7*v),m=u*Math.min(9.3,p.d*(1+.1*v)+(this.rng()-.5)*(.6+(d?.3:x))),f=p.T*[.9,1,1.12][a]*(1-.22*v);i=Ot(i+(this.rng()-.5)*2*(d?.4:x),-4.4,4.4),this.launch(i,m,r?.5:f,!r);const _=this.ball;_.last=e,_.bounces=0,_.shot=h,_.hold=!1,_.out=!1,_.let=!1,_.pw=v,_.hid=++this.hitSeq,_.walled=!1,_.spin=(j0[h]||0)*[1.2,1,.6][a],this.rallyT=0,this.rallyHits++,this.swing(o,l?"remate":t,s)}serve(e,t,i){const r=this.ball,s=sn(e.team),a=Ot(i||0,0,1),o=-s*(4.6+this.rng()*1.2+.3*a);t=Ot(t+(this.rng()-.5)*(1+.6*a),-4.4,4.4);let l=2.2-.95*a+(this.rng()-.5)*.3;const c=this.rng(),u=a<.4?0:.01+.1*a*a,h=.1*a*a;let d=!1;c<u?(l=1+this.rng()*.06,d=!0):c<u+h&&(l=.7);const p=Math.abs(r.z),v=p/(p+Math.abs(o)),x=r.y,m=(l-x-(Pi-x)*v)/(.5*Hs*v*(1-v)),f=Ot(Math.sqrt(Math.max(m,.1)),.5,1.4);this.launch(t,o,f,!1),r.last=e.team,r.bounces=0,r.shot="saque",r.hold=!1,r.out=!1,r.let=d,r.pw=a,r.hid=++this.hitSeq,r.walled=!1,r.spin=j0.saque,this.rallyT=0,this.rallyHits++,this.swing(e,"saque",0)}reach(e){const t=this.ball;if(this.state!=="play"||!t.last||t.last===e.team||t.shot==="saque"&&t.bounces===0)return!1;const i=sn(e.team);return t.z*i>.2&&Math.hypot(t.x-e.x,t.z-e.z)<2&&t.y<2.8}quality(e,t){const i=this.ball,r=sn(t.team),s=i.x-t.x,a=i.z-t.z,o=Math.hypot(s,a),l=Math.abs(o-1)*.9+Math.abs(i.y-ab[e])*.7+(a*r>.35?.5:0);return l<.55?0:l<1.15?1:2}aimFor(e,t){return t??Ot(-e.x*.5,-3.8,3.8)}impact(e,t,i,r,s=0){const a=this.ball;this.emit({t:"hit",slot:r.slot,shot:t,q:e,gold:!!i,pw:Qe(s),x:Qe(a.x),y:Qe(a.y),z:Qe(a.z)})}exec(e,t,i,r=0,s=!1){const a=this.ball,o=sn(e.team);Ab.includes(t)&&({shot:t,pw:r}=bb(t,{by:a.y,px:e.x,pz:e.z,pw:r,sl:s,ax:i})),e.cd=.35;const l=t==="x3"||t==="x4";if((l||t==="remate")&&a.y<(l?1.7:1.3)){this.swing(e,"remate",0),this.emit({t:"msg",slot:e.slot,tx:l?"Necesitás una pelota alta":"Muy baja para rematar",ms:900});return}const c=l?"remate":t,u=this.quality(c,e),h=(a.x-e.x)*o<0,d=a.x-e.x,p=a.z-e.z;e.lv={x:Ot(d,-.9,.9)*5,z:Ot(p,-.9,.9)*5,t:.12};let v=null,x=this.aimFor(e,i);if(l){const f=u===0||u===1&&this.rng()<.35+.5*r||u===2&&r>.7&&this.rng()<.2;v={k:t,ok:f},x=t==="x3"?(x>=0?1:-1)*3.9:x*.5}this.hit(e.team,c,x,!1,h?.9:0,u,e,v,r);let m;l?m=v.ok?t:"Remate":t==="drive"?m=h?"Revés":"Drive":t==="globo"?m=h?"Globo de revés":"Globo":t==="dejada"?m="Dejada":m="Remate",this.emit({t:"msg",slot:e.slot,tx:`${m} · ${ob[u]}`,ms:900,gold:u===0}),this.impact(u,c,l&&v.ok,e,r)}shotInput(e,t,i,r=0,s=!1){const a=this.ball;if(this.state==="serve"&&a.hold&&this.srv===e){if(e.cd>0)return;e.cd=.4,this.state="play",this.serve(e,i??-this.sx*2.2,r),this.emit({t:"msg",slot:e.slot,tx:this.sn===2?"Segundo saque":"Saque",ms:700}),this.impact(1,"saque",!1,e,r);return}if(this.state!=="play"||e.cd>0)return;if(this.reach(e)){this.exec(e,t,i,r,s);return}const o=sn(e.team);if(a.last&&a.last!==e.team&&a.z*o>.2&&Math.hypot(a.x-e.x,a.z-e.z)<6){e.buf={shot:t,ax:i,pw:r,sl:s,t:.3};return}e.cd=.4,this.swing(e,t==="x3"||t==="x4"||t==="ataque"&&a.y>1.5?"remate":t==="plano"?"drive":t==="altura"?"globo":t==="ataque"?"drive":t,0)}botTarget(e){const t=this.ball,i=sn(e.team),r=this.D();e.planId!==t.hid&&(e.planId=t.hid,e.plan=this.rng()<r.wall);const s=mx(t,3.5);return e.wait=!1,e.plan&&s.wall&&s.drop&&s.drop.z*i>.5&&!t.walled?(e.wait=!0,{x:s.drop.x,z:s.drop.z-i*.55}):s.pre&&s.pre.z*i>.5?{x:s.pre.x,z:s.pre.z-i*.5}:s.land&&s.land.z*i>.5?{x:s.land.x,z:s.land.z-i*.6}:{x:t.x+t.vx*.3,z:t.z+t.vz*.3}}aiMove(e,t){const i=this.ball,r=sn(e.team),s=this.D();let a=e.hx,o=r*5.4,l=s.sp;if(i.last&&i.last!==e.team&&(i.z*r>-1.5||i.vz*r>0)){e.rt=(e.rt||0)-t,(e.rt<=0||!e.tgt)&&(e.rt=s.react,e.tgt=this.botTarget(e));let{x:c,z:u}=e.tgt;u=r>0?Ot(u,1.2,9.1):Ot(u,-9.1,-1.2);let h=null,d=1e9;this.team(e.team).forEach(p=>{const v=Math.abs(c-p.x)+.35*Math.abs(u-p.z)+(p.bot?0:-.5);v<d&&(d=v,h=p)}),h===e&&(a=c,o=u,l=s.run)}else e.tgt=null,e.wait=!1,i.last===e.team&&(o=r*4.6);this.moveTo(e,Ot(a,-4.6,4.6),o,l,t)}moveTo(e,t,i,r,s){const a=t-e.x,o=i-e.z,l=Math.hypot(a,o);if(l>.05){const c=Math.min(r*s,l);e.x+=a/l*c,e.z+=o/l*c,e.mv=1}else e.mv=0}aiHit(e){const t=this.ball,i=this.D();if(e.cd>0||!this.reach(e)||t.y>2.7||e.wait&&!t.walled&&t.bounces>=1&&t.y<1.8)return;const r=Math.hypot(t.x-e.x,t.z-e.z);if(this.team(e.team).filter(g=>!g.bot&&this.reach(g)).some(g=>Math.hypot(t.x-g.x,t.z-g.z)<r+.8)&&r>.8)return;const a=this.team(_r(e.team));let o=0,l=0;a.forEach(g=>{o+=g.x,l+=g.z}),o/=Math.max(1,a.length),l/=Math.max(1,a.length);const c=this.rng()<i.aim?o>0?-1:1:this.rng()<.5?-1:1;let u=c*(1+this.rng()*2.7);const h=this.rng(),d=this.rng()<i.q[0]?0:this.rng()<i.q[1]?2:1;let p="drive",v=null;const x=Math.abs(l)<3.8,m=Math.abs(l)>6;if(t.y>2&&h<i.special){const g=this.rng()<.5?"x3":"x4";v={k:g,ok:d===0},p="remate",u=g==="x3"?c*3.9:u*.4}else t.y>1.7&&h<.55?p="remate":i.aim>=.7&&x&&h<.35?p="globo":i.aim>=.7&&m&&h<.3?p="dejada":h<.25?p="globo":h<.35&&i.aim>=.5&&(p="dejada");e.cd=.6;const f=this.rng()<i.err+i.grow*this.rallyHits,_=this.rng()*i.pw;this.hit(e.team,p,u,f,0,d,e,v,_),this.emit({t:"hit",slot:e.slot,shot:p,q:d,pw:Qe(_),gold:!!(v&&v.ok),x:Qe(t.x),y:Qe(t.y),z:Qe(t.z)})}stepBall(e){const t=this.ball;if(t.hold){const s=sn(this.srv.team);t.x=this.srv.x+.35,t.y=1,t.z=this.srv.z-s*.5;return}const i=t.z;t.vy-=Hs*e,t.x+=t.vx*e,t.y+=t.vy*e,t.z+=t.vz*e;const r=i>0&&t.z<=0||i<0&&t.z>=0;if(r&&t.let&&t.y>=.92&&t.bounces===0&&(t.vz*=.45,t.vy*=.3,t.vx*=.7,this.emit({t:"net"})),r&&t.y<.92&&(t.z=i,t.vz*=-.15,t.vx*=.3,this.emit({t:"net"}),this.state==="play"&&this.fault(t.last)),t.y<Pi&&t.vy<0){const s=Math.hypot(t.vx,t.vy,t.vz),a=t.bounces===0,o=t.shot;t.y=Pi;const l=t.spin||0;t.vy=-t.vy*(a&&o==="globo"?.8:.74)*(1-.12*l);const c=(a?o==="remate"?.98:o==="globo"?.75:.92:.92)*(1+.1*l);if(t.vx*=c,t.vz*=c,t.spin=l*.6,a&&o==="dejada"&&(t.vz*=.3,t.vy*=.6),a&&o==="x3"){const u=t.x>=0?1:-1;t.vx=u*Math.max(3,(5.35-Math.abs(t.x))/.42),t.vy=11.5,t.vz*=.25}if(a&&o==="x4"){const u=t.vz>=0?1:-1;t.vz=u*Math.max(3,(10.4-Math.abs(t.z))/.45),t.vy=13,t.vx*=.3}s>3&&this.emit({t:"bounce",x:Qe(t.x),z:Qe(t.z)}),this.onBounce()}t.out||(Math.abs(t.x)>4.88&&(t.y>ar.sideTop?Math.abs(t.x)>5.02&&this.exitBall("x3"):t.y>ar.sideGlass?this.meshHit("x"):this.glassHit("x")),!t.out&&Math.abs(t.z)>9.88&&(t.y>ar.backTop?Math.abs(t.z)>10.02&&this.exitBall("x4"):t.y>ar.backGlass?this.meshHit("z"):this.glassHit("z")))}glassHit(e){const t=this.ball,i=Math.hypot(t.vx,t.vy,t.vz),r=Ot(.84-.012*i,.62,.8);if(e==="x"){const s=t.x>0?1:-1;t.x=s*4.88,t.vx=-s*Math.abs(t.vx)*r,t.vz*=.94}else{const s=t.z>0?1:-1;t.z=s*9.88,t.vz=-s*Math.abs(t.vz)*r,t.vx*=.94}t.y>1.6&&(e==="z"?t.vx+=(this.rng()-.5)*1.4:t.vz+=(this.rng()-.5)*1.4),t.walled=!0,this.wall(i,t.x,t.y,t.z,!1)}meshHit(e){const t=this.ball,i=Math.hypot(t.vx,t.vy,t.vz);if(e==="x"){const r=t.x>0?1:-1;t.x=r*4.88,t.vx=-r*Math.abs(t.vx)*.2,t.vz*=.5}else{const r=t.z>0?1:-1;t.z=r*9.88,t.vz=-r*Math.abs(t.vz)*.2,t.vx*=.5}t.vy=-Math.abs(t.vy)*.3,t.walled=!0,this.emit({t:"wall",mesh:1,v:Qe(i),x:Qe(t.x),y:Qe(t.y),z:Qe(t.z)}),this.state==="play"&&(t.out=!0,t.bounces===0?(this.fault(t.last),this.emit({t:"msg",tx:"Pelota en la reja",ms:1400})):this.point(t.last,"Reja: punto directo"))}onBounce(){if(this.state!=="play")return;const e=this.ball;e.bounces++;const t=e.z<0?"b":"a";if(e.shot==="saque"&&e.bounces===1){const i=this.serveValid();if(i)this.serveFault(i);else if(e.let)this.letServe();else if(this.mode==="serve"){const r=1+(Math.abs(e.z)>5.4?1:0)+(Math.abs(e.x)>3.2?1:0);this.trainEnd(!0,`Saque válido · +${r}`,r)}return}e.bounces===1?t===e.last&&this.fault(e.last):this.point(e.last)}wall(e=0,t=0,i=0,r=0,s=!1){this.ball.vy-=(this.ball.spin||0)*1.5,this.ball.spin=(this.ball.spin||0)*.6,this.emit({t:"wall",v:Qe(e),x:Qe(t),y:Qe(i),z:Qe(r),mesh:s?1:0}),this.state==="play"&&this.ball.bounces===0&&this.fault(this.ball.last)}exitBall(e){const t=this.ball;t.out=!0,this.state==="play"&&(t.bounces===0?(this.fault(t.last),this.emit({t:"msg",tx:"Pelota afuera",ms:1400})):this.point(t.last,e==="x3"?"Por 3: punto directo":"Por 4: punto directo"))}step(e){if((this.state==="serve"||this.state==="play"||this.state==="point")&&(this.clock+=e),this.ents.forEach(t=>{t.cd>0&&(t.cd-=e),t.inp.age+=e,t.sw&&(t.sw.t+=e,t.sw.t>.7&&(t.sw=null))}),this.state==="serve"||this.state==="play"){if(this.ents.forEach(t=>{if(t.bot)return;const i=t.inp.age<.5,r=i?t.inp.mx:0,s=i?t.inp.mz:0;let a=t.x+r*6.5*e,o=t.z+s*6.5*e;t.lv&&(a+=t.lv.x*e,o+=t.lv.z*e,t.lv.t-=e,t.lv.t<=0&&(t.lv=null));const l=sn(t.team);if(t.x=Ot(a,-4.5,4.5),t.z=l*Ot(l*o,.9,9),t.mv=Math.min(1,Math.hypot(r,s)*1.5),t.buf){if(t.buf.t-=e,this.reach(t)&&t.cd<=0){const c=t.buf;t.buf=null,this.exec(t,c.shot,c.ax,c.pw,c.sl)}else if(t.buf.t<=0){const c=t.buf;t.buf=null,t.cd=.4,this.swing(t,c.shot==="x3"||c.shot==="x4"?"remate":c.shot,0)}}}),this.state==="play"?this.ents.forEach(t=>{t.bot&&(this.aiMove(t,e),this.aiHit(t))}):this.ents.forEach(t=>{t.bot&&(t.mv=0)}),this.state==="serve"&&this.srv.bot&&(this.serveT-=e,this.serveT<=0)){this.state="play";const t=this.D(),i=.1+this.rng()*t.pw,r=t.aim>=.7?2.2+this.rng()*1.8:.8+this.rng()*3;this.serve(this.srv,-this.sx*(this.rng()<t.serr?-.8:r),i),this.emit({t:"hit",slot:this.srv.slot,shot:"saque",q:1,pw:Qe(i),gold:!1,x:Qe(this.ball.x),y:Qe(this.ball.y),z:Qe(this.ball.z)})}this.stepBall(e),this.state==="play"&&(this.rallyT+=e,this.rallyT>Rb&&this.point(this.ball.last||"a"))}else this.state==="point"&&(this.stepBall(e),this.ents.forEach(t=>{t.mv=0}),this.stT-=e,this.stT<=0&&(this.matchEnd?(this.state="end",this.emit({t:"end",winner:this.winner})):this.newServe()))}snapshot(){const e=this.ball;return{st:this.state,m:this.m,srv:this.srv?this.srv.slot:-1,w:this.winner,sx:this.sx,sn:this.sn,ck:Qe(this.clock),md:this.mode,tr:this.mode==="match"?0:[this.tr.n,this.tr.ok,this.tr.streak,this.tr.best,this.tr.pts,this.tr.max],b:[Qe(e.x),Qe(e.y),Qe(e.z),Qe(e.vx),Qe(e.vy),Qe(e.vz),e.hold?1:0,Qe(e.spin||0),e.bounces,e.shot==="saque"?1:0],e:this.ents.map(t=>[t.slot,Qe(t.x),Qe(t.z),Qe(t.mv),t.sw?t.sw.id:0,t.sw?t.sw.k:"",t.sw?t.sw.yaw:0]),ev:this.drain()}}save(){return{fmt:this.fmt,state:this.state,m:JSON.parse(JSON.stringify(this.m)),matchEnd:this.matchEnd,winner:this.winner,clock:this.clock,diff:this.diff,mode:this.mode,tr:this.tr,roster:this.ents.map(e=>({slot:e.slot,uid:e.uid,name:e.name}))}}load(e){this.fmt=e.fmt,this.m=JSON.parse(JSON.stringify(e.m)),this.matchEnd=e.matchEnd,this.winner=e.winner,this.clock=e.clock||0,this.retry=!1,this.diff=e.diff||this.diff,this.mode=e.mode||this.mode,e.tr&&(this.tr=e.tr),this.setRoster(e.roster),e.state==="end"?this.state="end":e.state==="point"&&e.matchEnd?this.state="end":this.newServe()}}function Pb(){return{mode:"2v2",fmt:"exp",diff:"medio",train:"",users:[],slots:[null,null,null,null]}}const ui=(n,e)=>n.users.find(t=>t.id===e)||null;function eg(n){const e=n.slots.slice(),t=px[n.mode],i=[];for(let a=0;a<4;a++)t.includes(a)||(n.slots[a]=null);t.forEach(a=>{const o=n.slots[a];if(o&&o!=="bot"){const l=ui(n,o);(!l||l.watch)&&(n.slots[a]=null)}});const r=n.slots.filter(a=>a&&a!=="bot"),s=n.users.filter(a=>!a.watch&&!r.includes(a.id)).sort((a,o)=>a.q-o.q);return t.forEach(a=>{(!n.slots[a]||n.slots[a]==="bot")&&(n.slots[a]=s.length?s.shift().id:"bot")}),t.forEach(a=>{e[a]!==n.slots[a]&&(n.slots[a]!=="bot"?i.push(`${ui(n,n.slots[a]).name} pasa a jugar`):e[a]&&e[a]!=="bot"&&i.push("Sale un jugador: entra un bot"))}),i}function xh(n){const e=px[n.mode].slice().sort((t,i)=>t-i).map(t=>{const i=n.slots[t],r=i&&i!=="bot"?ui(n,i):null;return{slot:t,uid:r?r.id:null,name:r?r.name:"Bot",num:r?r.num:20+t,look:r?r.look:null}});return n.train?e.filter(t=>t.uid).slice(0,1):e}const Lb=n=>n.users.filter(e=>!n.slots.includes(e.id));class Db{constructor(){this.h={}}on(e,t){return(this.h[e]=this.h[e]||[]).push(t),()=>this.off(e,t)}off(e,t){this.h[e]=(this.h[e]||[]).filter(i=>i!==t)}emit(e,...t){(this.h[e]||[]).slice().forEach(i=>i(...t))}}const Nb=/^#[0-9a-fA-F]{6}$/,Ib=["corto","largo","rodete"],Ub=["none","vincha","gorra","lentes"],tg=["drive","globo","dejada","remate","x3","x4","plano","altura","ataque"],Xa={skin:"#E0AC82",hair:"#2C2C2A",style:"corto",shirt:"#0C447C",acc:"none",paddle:"#2A93A8"};function ic(n){const e=n&&typeof n=="object"?n:{},t=(i,r)=>typeof i=="string"&&Nb.test(i)?i:r;return{skin:t(e.skin,Xa.skin),hair:t(e.hair,Xa.hair),shirt:t(e.shirt,Xa.shirt),paddle:t(e.paddle,Xa.paddle),style:Ib.includes(e.style)?e.style:"corto",acc:Ub.includes(e.acc)?e.acc:"none"}}function na(n){return String(n??"").replace(/[\u0000-\u001f<>&"'`]/g,"").trim().slice(0,14)||"Jugador"}const yh=n=>{const e=Math.floor(+n);return Number.isFinite(e)?Math.max(0,Math.min(99,e)):7};function Fb(n){return String(n||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,6)}function Ob(){const n="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="";for(let t=0;t<4;t++)e+=n[Math.floor(Math.random()*n.length)];return e}const zb=1/20,kb=1,Bb=1/20,Hb=16,Gb=12e3,ng=(n,e,t)=>Math.max(e,Math.min(t,n));class Vb extends Db{constructor(e,{profile:t,create:i=!1,code:r="",timeouts:s={}}){super(),this.code=r,this.t=e,this.profile={name:na(t.name),look:ic(t.look),num:yh(t.num)},this.create=i,this.joinTimeout=s.join??Gb,this.role="connecting",this.selfId=null,this.hostId=null,this.expectHost=null,this.room=Pb(),this.roster=[],this.phase="lobby",this.qc=0,this.sim=null,this.snap=null,this.sinceSnap=0,this.lastSave=null,this.disp=new Map,this.ballDisp=null,this.evq=[],this.ctrl={mx:0,mz:0,ax:null},this.accSnap=0,this.accSave=0,this.accInp=0,this.helloAt=0,this.timer=null}async start(){this.t.onMessage((e,t,i)=>this.onMsg(e,t,i)),this.t.onJoin(e=>this.onJoin(e)),this.t.onLeave(e=>this.onLeave(e)),this.selfId=await this.t.start(),this.role!=="closed"&&(this.create?this.becomeHost():this.armTimer("nohost"),this.emit("change"))}leave(){this.role="closed",clearTimeout(this.timer);try{this.t.leave()}catch{}this.emit("change")}armTimer(e){clearTimeout(this.timer),this.timer=setTimeout(()=>{(this.role==="connecting"||this.expectHost)&&(this.role="closed",this.emit("error",e),this.emit("change"))},this.joinTimeout)}get mySlot(){const e=this.roster.find(t=>t.uid===this.selfId);return e?e.slot:-1}get ys(){const e=this.mySlot;return e>=0&&Rf(e)==="b"?-1:1}get me(){return ui(this.room,this.selfId)}get isHost(){return this.role==="host"}get playing(){return this.phase==="match"}becomeHost(){this.role="host",this.hostId=this.selfId,clearTimeout(this.timer),ui(this.room,this.selfId)||this.room.users.push({id:this.selfId,...this.profile,q:++this.qc,watch:!1}),this.sim||(this.sim=new Q0({fmt:this.room.fmt})),this.seat(!0),this.broadcastRoom()}seat(e){if(e||this.phase==="lobby"||!this.sim||this.sim.state==="idle"){const t=eg(this.room);this.roster=xh(this.room),t.forEach(i=>this.emit("notice",i))}else{const t=eg(this.room);this.sim.pending=xh(this.room),t.forEach(i=>this.emit("notice",i))}}broadcastRoom(e){this.t.send("room",{room:this.room,roster:this.roster,hostId:this.hostId,phase:this.phase},e),this.emit("change")}setMode(e){!this.isHost||this.phase!=="lobby"||!["1v1","2v2"].includes(e)||(this.room.mode=e,this.seat(!0),this.broadcastRoom())}setFmt(e){!this.isHost||this.phase!=="lobby"||!Co[e]||(this.room.fmt=e,this.broadcastRoom())}setDiff(e){!this.isHost||this.phase!=="lobby"||!Ro[e]||(this.room.diff=e,this.broadcastRoom())}setTrain(e){!this.isHost||this.phase!=="lobby"||!["","serve","smash"].includes(e)||(this.room.train=e,e&&(this.room.mode="1v1"),this.seat(!0),this.broadcastRoom())}setWatch(e){if(this.isHost){const t=this.me;if(!t)return;t.watch=!!e,e||(t.q=++this.qc),this.seat(),this.broadcastRoom()}else this.t.send("watch",{v:!!e},this.hostId)}startMatch(){this.isHost&&(this.seat(!0),this.phase="match",this.sim.setRoster(this.roster.map(e=>({slot:e.slot,uid:e.uid,name:e.name}))),this.sim.diff=this.room.diff||"medio",this.sim.mode=this.room.train||"match",this.sim.start(this.room.fmt),this.accSnap=0,this.accSave=0,this.lastSave=this.sim.save(),this.broadcastRoom(),this.sendSave())}backToLobby(){this.isHost&&(this.phase="lobby",this.sim.state="idle",this.snap=null,this.seat(!0),this.broadcastRoom())}sendSave(){this.lastSave=this.sim.save(),this.t.send("sv",this.lastSave)}onJoin(e){this.role==="host"&&this.broadcastRoom(e)}onLeave(e){if(this.role==="host"){const t=ui(this.room,e);if(!t)return;this.room.users=this.room.users.filter(i=>i.id!==e),this.emit("notice",`${t.name} salió de la sala`),this.seat(),this.broadcastRoom()}else this.role==="client"&&e===this.hostId&&this.migrate(e)}onMsg(e,t,i){if(this.role!=="closed"){if(e==="room")return this.onRoom(t,i);if(e==="snap"){i===this.hostId&&this.role==="client"&&this.onSnap(t);return}if(e==="sv"){i===this.hostId&&(this.lastSave=t);return}if(this.role==="host"){if(e==="hello")return this.onHello(t,i);if(e==="watch"){const r=ui(this.room,i);r&&t&&(r.watch=!!t.v,r.watch||(r.q=++this.qc),this.seat(),this.broadcastRoom());return}e==="inp"&&this.phase==="match"&&t&&this.sim.input(i,{mx:t.mx,mz:t.mz,ax:t.ax,pw:t.pw,sl:!!t.sl,shot:tg.includes(t.shot)?t.shot:null})}}}onHello(e,t){if(!e)return;let i=ui(this.room,t);if(i)i.name=na(e.name),i.look=ic(e.look),i.num=yh(e.num);else{if(this.room.users.length>=Hb){this.t.send("full",{},t);return}i={id:t,name:na(e.name),look:ic(e.look),num:yh(e.num),q:++this.qc,watch:!1},this.room.users.push(i),this.emit("notice",`${i.name} se une a la sala`)}this.seat(),this.broadcastRoom()}onRoom(e,t){if(this.role==="host"||!e||t!==e.hostId||!(this.hostId==null||t===this.hostId||t===this.expectHost))return;this.role==="connecting"&&(this.role="client",clearTimeout(this.timer)),this.hostId=t,this.expectHost=null,clearTimeout(this.timer),this.room=e.room,this.roster=e.roster,this.phase=e.phase;const r=this.room.users.reduce((s,a)=>Math.max(s,a.q),0);this.qc=Math.max(this.qc,r),!ui(this.room,this.selfId)&&Date.now()-this.helloAt>1500&&(this.helloAt=Date.now(),this.t.send("hello",this.profile,this.hostId)),this.phase==="lobby"&&(this.snap=null,this.disp.clear(),this.ballDisp=null),this.emit("change")}onSnap(e){this.snap=e,this.sinceSnap=0,(e.ev||[]).forEach(t=>this.evq.push(t))}migrate(e){this.room.users=this.room.users.filter(i=>i.id!==e);const t=this.room.users.slice().sort((i,r)=>i.q-r.q)[0];if(!t){this.role="closed",this.emit("error","closed"),this.emit("change");return}this.emit("notice","El anfitrión salió de la sala"),t.id===this.selfId?this.promote():(this.hostId=t.id,this.expectHost=t.id,this.armTimer("hostlost"),this.emit("change"))}promote(){this.role="host",this.hostId=this.selfId,this.expectHost=null,clearTimeout(this.timer),this.qc=this.room.users.reduce((e,t)=>Math.max(e,t.q),0),this.sim=new Q0({fmt:this.room.fmt}),this.sim.diff=this.room.diff||"medio",this.sim.mode=this.room.train||"match",this.seat(!0),this.phase==="match"&&this.lastSave?(this.sim.load({...this.lastSave,roster:this.roster.map(e=>({slot:e.slot,uid:e.uid,name:e.name}))}),this.evq.push({t:"msg",tx:"Nuevo anfitrión: se repite el punto",ms:2200})):this.phase="lobby",this.snap=null,this.disp.clear(),this.ballDisp=null,this.emit("notice","Ahora sos el anfitrión de la sala"),this.broadcastRoom()}setControl(e){this.ctrl={mx:e.mx||0,mz:e.mz||0,ax:e.ax==null?null:e.ax}}shot(e,t=0,i=!1){if(this.mySlot<0||this.phase!=="match"||!tg.includes(e))return;const r={...this.ctrl,shot:e,pw:Math.max(0,Math.min(1,+t||0)),sl:!!i};this.isHost?this.sim.input(this.selfId,r):this.t.send("inp",r,this.hostId)}tick(e){if(this.role==="host"){if(this.phase!=="match"||this.sim.state==="idle")return;this.mySlot>=0&&this.sim.input(this.selfId,this.ctrl);let t=Math.min(e,.25);for(;t>1e-6;){const i=Math.min(t,.016666666666666666);this.sim.step(i),t-=i}if(this.accSnap+=e,this.accSnap>=zb){this.accSnap=0;const i=this.sim.snapshot();i.ev.forEach(r=>{this.evq.push(r),r.t==="roster"&&(this.roster=xh(this.room),this.broadcastRoom())}),this.snap=i,this.t.send("snap",i)}this.accSave+=e,this.accSave>=kb&&(this.accSave=0,this.sendSave())}else this.role==="client"&&this.phase==="match"&&this.mySlot>=0&&(this.accInp+=e,this.accInp>=Bb&&(this.accInp=0,this.t.send("inp",this.ctrl,this.hostId)))}takeEvents(){const e=this.evq;return this.evq=[],e}frame(e){const t={roster:this.roster,mySlot:this.mySlot,ys:this.ys,phase:this.phase,events:this.takeEvents(),room:this.room};if(this.phase!=="match")return{...t,st:"lobby",ents:[],ball:null,m:null,srv:-1,winner:null};if(this.role==="host"){const w=this.sim,N=w.ball;return{...t,st:w.state,m:w.m,srv:w.srv?w.srv.slot:-1,winner:w.winner,sx:w.sx,sn:w.sn,clock:w.clock,mode:w.mode,tr:w.mode==="match"?null:[w.tr.n,w.tr.ok,w.tr.streak,w.tr.best,w.tr.pts,w.tr.max],ball:{x:N.x,y:N.y,z:N.z,vx:N.vx,vy:N.vy,vz:N.vz,hold:N.hold,spin:N.spin||0,bn:N.bounces,sf:N.shot==="saque"?1:0},ents:w.ents.map(M=>({slot:M.slot,x:M.x,z:M.z,mv:M.mv,swId:M.sw?M.sw.id:0,swK:M.sw?M.sw.k:"",swYaw:M.sw?M.sw.yaw:0}))}}const i=this.snap;if(!i)return{...t,st:"wait",ents:[],ball:null,m:null,srv:-1,winner:null};this.sinceSnap+=e;const r=1-Math.exp(-20*e),s=this.mySlot,a=i.st==="play"||i.st==="serve",o=i.e.map(([w,N,M,T,H,j,oe])=>{let P=this.disp.get(w);if(P||(P={x:N,z:M},this.disp.set(w,P)),w===s&&a){const G=sn(Rf(w));P.x=ng(P.x+this.ctrl.mx*6.5*e,-4.5,4.5),P.z=G*ng(G*(P.z+this.ctrl.mz*6.5*e),.9,9);const $=1-Math.exp(-4*e);P.x+=(N-P.x)*$,P.z+=(M-P.z)*$,Math.hypot(N-P.x,M-P.z)>1.8&&(P.x=N,P.z=M)}else Math.hypot(N-P.x,M-P.z)>3?(P.x=N,P.z=M):(P.x+=(N-P.x)*r,P.z+=(M-P.z)*r);return{slot:w,x:P.x,z:P.z,mv:T,swId:H,swK:j,swYaw:oe}}),[l,c,u,h,d,p,v,x,m,f]=i.b,_=Math.min(this.sinceSnap,.12),g=l+h*_,S=Math.max(Pi,c+d*_-.5*Hs*_*_),R=u+p*_;let E=this.ballDisp;if(!E||v||Math.hypot(g-E.x,R-E.z)>4)E={x:g,y:S,z:R};else{const w=1-Math.exp(-30*e);E={x:E.x+(g-E.x)*w,y:E.y+(S-E.y)*w,z:E.z+(R-E.z)*w}}return this.ballDisp=E,{...t,st:i.st,m:i.m,srv:i.srv,winner:i.w,ents:o,mode:i.md||"match",tr:i.tr||null,sx:i.sx,sn:i.sn,clock:(i.ck||0)+(i.st==="end"?0:this.sinceSnap),ball:{x:E.x,y:E.y,z:E.z,vx:h,vy:d,vz:p,hold:!!v,spin:x||0,bn:m||0,sf:f||0}}}}const Wb="modulepreload",Xb=function(n){return"/padel-v1/"+n},ig={},jb=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=Xb(l),l in ig)return;ig[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":Wb,c||(h.as="script"),h.crossOrigin="",h.href=l,o&&h.setAttribute("nonce",o),document.head.appendChild(h),c)return new Promise((d,p)=>{h.addEventListener("load",d),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},qb={},xx=()=>Math.random().toString(36).slice(2,10),Hn=()=>{};function $b(){return{async start(){return"solo-"+xx()},send:Hn,onMessage:Hn,onJoin:Hn,onLeave:Hn,leave:Hn}}function Yb(n){const e=xx(),t={msg:Hn,join:Hn,leave:Hn},i=new Set;let r=null;return{async start(){return r=new BroadcastChannel("padel-club-"+n),r.onmessage=s=>{const a=s.data;!a||a.from===e||a.to&&a.to!==e||(a.k==="hi"?(i.has(a.from)||(i.add(a.from),t.join(a.from)),a.to||r.postMessage({k:"hi",from:e,to:a.from})):a.k==="bye"?i.delete(a.from)&&t.leave(a.from):a.k==="m"&&t.msg(a.type,a.data,a.from))},r.postMessage({k:"hi",from:e}),addEventListener("pagehide",()=>r&&r.postMessage({k:"bye",from:e})),e},send(s,a,o){r.postMessage({k:"m",from:e,to:o,type:s,data:a})},onMessage(s){t.msg=s},onJoin(s){t.join=s},onLeave(s){t.leave=s},leave(){r&&(r.postMessage({k:"bye",from:e}),r.close(),r=null)}}}function Kb(n,e="padel-club-comunidad-v1"){const t={msg:Hn,join:Hn,leave:Hn};let i=null,r=null;return{async start(){const{joinRoom:s}=await jb(async()=>{const{joinRoom:c}=await import("./dist-DVIO7BUi.js");return{joinRoom:c}},[]),a=import.meta&&qb||{},o=a.VITE_TURN_URL?[{urls:a.VITE_TURN_URL.split(","),username:a.VITE_TURN_USER,credential:a.VITE_TURN_PASS}]:void 0;return i=s({appId:e,...o?{turnConfig:o}:{}},"padel-"+n),r=i.makeAction("m"),r.onMessage((c,u)=>{c&&typeof c.t=="string"&&t.msg(c.t,c.d,u.peerId)}),i.onPeerJoin(({peerId:c})=>t.join(c)),i.onPeerLeave(({peerId:c})=>t.leave(c)),(await i.getSelf()).peerId},send(s,a,o){r&&r.send({t:s,d:a},o?{target:o}:void 0).catch(Hn)},onMessage(s){t.msg=s},onJoin(s){t.join=s},onLeave(s){t.leave=s},leave(){i&&(i.leave(),i=null,r=null)}}}function Jb(n,e){return n==="solo"?$b():n==="broadcast"?Yb(e):Kb(e)}const Zb={shirt:["#0C447C","#D85A30","#1D9E75","#2C2C2A","#EF9F27","#534AB7"],hair:["#2C2C2A","#6B4423","#D9A441","#A32D2D"],skin:["#F5D0B0","#E0AC82","#B9774F","#7A4A2E"],paddle:["#2A93A8","#1C1C1E","#2F6F8F","#C8232C","#E58BB5"]},Qb=[["corto","Corto"],["largo","Largo"],["rodete","Rodete"]],eC=[["none","Ninguno"],["vincha","Vincha"],["gorra","Gorra"],["lentes","Lentes"]],tC=[["Camiseta","shirt"],["Pelo","hair"],["Piel","skin"],["Paleta","paddle"]];function nC({label:n,k:e,look:t,setLook:i}){return W.jsxs("div",{className:"row",children:[W.jsx("span",{className:"lbl",children:n}),W.jsx("div",{className:"chips",children:Zb[e].map(r=>W.jsx("button",{"aria-label":`${n} ${r}`,"aria-pressed":t[e]===r,className:`sw ${t[e]===r?"on":""}`,style:{background:r},onClick:()=>i({...t,[e]:r})},r))})]})}function Hl({label:n,list:e,value:t,onPick:i}){return W.jsxs("div",{className:"row",children:[W.jsx("span",{className:"lbl",children:n}),W.jsx("div",{className:"chips",children:e.map(([r,s])=>W.jsx("button",{className:`chip ${t===r?"on":""}`,"aria-pressed":t===r,onClick:()=>i(r),children:s},r))})]})}function iC({profile:n,setProfile:e,hq:t,setHq:i,court:r,setCourt:s,joinCode:a,setJoinCode:o,onCreate:l,onJoin:c,onSolo:u,error:h,muted:d,onMute:p}){const v=x=>e({...n,look:x});return W.jsxs("div",{className:"sheet menu",children:[W.jsxs("div",{className:"titlebar",children:[W.jsx("h1",{children:"Padel Club"}),W.jsx("button",{className:"icon","aria-label":d?"Activar sonido":"Silenciar",onClick:p,children:d?"🔇":"🔊"})]}),W.jsxs("label",{className:"field",children:[W.jsx("span",{className:"lbl",children:"Tu nombre"}),W.jsx("input",{value:n.name,maxLength:14,placeholder:"Nico",onChange:x=>e({...n,name:x.target.value})})]}),W.jsxs("details",{className:"look",children:[W.jsx("summary",{children:"Personalizar jugador"}),tC.map(([x,m])=>W.jsx(nC,{label:x,k:m,look:n.look,setLook:v},m)),W.jsx(Hl,{label:"Peinado",list:Qb,value:n.look.style,onPick:x=>v({...n.look,style:x})}),W.jsx(Hl,{label:"Accesorio",list:eC,value:n.look.acc,onPick:x=>v({...n.look,acc:x})}),W.jsx(Hl,{label:"Cancha",list:yb,value:r,onPick:s}),W.jsx(Hl,{label:"Calidad",list:[["hi","Alta"],["lo","Media"]],value:t?"hi":"lo",onPick:x=>i(x==="hi")})]}),h&&W.jsx("p",{className:"err",role:"alert",children:h}),W.jsx("button",{className:"btn primary",onClick:l,children:"Crear sala"}),W.jsxs("div",{className:"join",children:[W.jsx("input",{value:a,maxLength:6,placeholder:"Código","aria-label":"Código de sala",autoCapitalize:"characters",onChange:x=>o(x.target.value.toUpperCase()),onKeyDown:x=>{x.key==="Enter"&&c()}}),W.jsx("button",{className:"btn",onClick:c,children:"Unirme"})]}),W.jsx("button",{className:"btn ghost",onClick:u,children:"Practicar"})]})}function rC({onPick:n,onBack:e}){const[t,i]=Vx.useState("medio");return W.jsxs("div",{className:"sheet practice",children:[W.jsxs("div",{className:"titlebar",children:[W.jsx("h2",{children:"Práctica"}),W.jsx("button",{className:"btn small",onClick:e,children:"Volver"})]}),W.jsxs("div",{className:"card",children:[W.jsx("b",{children:"Partido contra bots"}),W.jsx("span",{className:"muted",children:"Jugás con un compañero bot contra dos bots."}),W.jsx("div",{className:"chips",children:Object.entries(Ro).map(([r,s])=>W.jsx("button",{className:`chip ${t===r?"on":""}`,onClick:()=>i(r),children:s.label},r))}),W.jsx("button",{className:"btn primary",onClick:()=>n({diff:t}),children:"Jugar"})]}),W.jsxs("div",{className:"card",children:[W.jsx("b",{children:"Entrenar saque"}),W.jsx("span",{className:"muted",children:"20 saques cruzados. Más puntos si son profundos y abiertos. Probá la fuerza: más rápido, pero arriesgás la red."}),W.jsx("button",{className:"btn",onClick:()=>n({train:"serve"}),children:"Entrenar saque"})]}),W.jsxs("div",{className:"card",children:[W.jsx("b",{children:"Entrenar remate"}),W.jsx("span",{className:"muted",children:"Una máquina te tira 20 pelotas altas. Rematá, y buscá el x3 y el x4 para más puntos."}),W.jsx("button",{className:"btn",onClick:()=>n({train:"smash"}),children:"Entrenar remate"})]})]})}function sC({code:n,onCancel:e}){return W.jsxs("div",{className:"sheet center",children:[W.jsx("div",{className:"spin","aria-hidden":"true"}),W.jsxs("p",{children:["Buscando la sala ",W.jsx("b",{children:n}),"…"]}),W.jsx("p",{className:"muted",children:"El anfitrión tiene que tener la sala abierta."}),W.jsx("button",{className:"btn",onClick:e,children:"Cancelar"})]})}function aC({slot:n,room:e,selfId:t}){const i=e.slots[n],r=i&&i!=="bot"?ui(e,i):null;return W.jsxs("div",{className:`slot ${r?"human":"bot"}`,children:[W.jsx("span",{className:"dot",style:{background:r?r.look.shirt:"#888780"}}),W.jsxs("span",{className:"nm",children:[r?r.name:"Bot",r&&r.id===t?" (vos)":""]}),W.jsx("span",{className:"tag",children:r?"Jugador":"Bot"})]})}function oC({session:n,link:e,onCopy:t,onStart:i,onLeave:r,solo:s}){const a=n.room,o=n.isHost,l=n.me,c=n.mySlot,u=a.mode==="2v2"?[[0,1],[2,3]]:[[0],[2]],h=Lb(a);return W.jsxs("div",{className:"sheet lobby",children:[W.jsxs("div",{className:"titlebar",children:[W.jsxs("div",{children:[W.jsx("h2",{children:s?"Práctica":`Sala ${n.code||""}`}),W.jsxs("span",{className:"muted",children:[a.users.length," ",a.users.length===1?"persona":"personas",s?"":o?" · sos el anfitrión":""]})]}),!s&&W.jsx("button",{className:"btn small",onClick:t,children:"Copiar link"})]}),!s&&W.jsx("p",{className:"link","aria-label":"Link de la sala",children:e}),W.jsxs("div",{className:"opts",children:[W.jsx("div",{className:"chips",children:[["2v2","2 vs 2"],["1v1","1 vs 1"]].map(([d,p])=>W.jsx("button",{className:`chip ${a.mode===d?"on":""}`,disabled:!o,onClick:()=>n.setMode(d),children:p},d))}),W.jsx("div",{className:"chips",children:Object.entries(Ro).map(([d,p])=>W.jsxs("button",{className:`chip ${(a.diff||"medio")===d?"on":""}`,disabled:!o,onClick:()=>n.setDiff(d),children:["Bots: ",p.label]},d))}),W.jsx("div",{className:"chips",children:Object.entries(Co).map(([d,p])=>W.jsx("button",{className:`chip ${a.fmt===d?"on":""}`,disabled:!o,onClick:()=>n.setFmt(d),children:p.label},d))})]}),W.jsx("div",{className:"teams",children:u.map((d,p)=>W.jsxs("div",{className:"team",children:[W.jsxs("span",{className:"lbl",children:["Equipo ",p?"B":"A"]}),d.map(v=>W.jsx(aC,{slot:v,room:a,selfId:n.selfId},v))]},p))}),W.jsxs("p",{className:"muted spec",children:["Espectadores: ",h.length?h.map(d=>d.name+(d.id===n.selfId?" (vos)":"")).join(", "):"ninguno","."," ","Si un jugador se va, entra el primero en espera; si no hay nadie, entra un bot."]}),W.jsxs("div",{className:"actions",children:[l&&W.jsx("button",{className:"btn",onClick:()=>n.setWatch(c>=0),children:c>=0?"Mirar":"Jugar"}),o?W.jsx("button",{className:"btn primary grow",onClick:i,children:"Empezar partido"}):W.jsx("button",{className:"btn grow",disabled:!0,children:"Esperando al anfitrión…"}),W.jsx("button",{className:"btn ghost",onClick:r,children:"Salir"})]})]})}const yx=(n,e)=>{const t=n.filter(i=>i.slot<2==(e==="a")).map(i=>i.name.split(" ")[0]);return t.length?t.join(" / "):e==="a"?"Equipo A":"Equipo B"};function Sx({m:n,roster:e,fmt:t,srv:i,theme:r}){if(!n)return null;const s=Co[t]||Co.exp,a=i>=0?i<2?"a":"b":n.srv;return W.jsxs("table",{className:`score ${r||""}`,children:[W.jsx("thead",{children:W.jsxs("tr",{children:[W.jsx("th",{}),Array.from({length:s.cols},(o,l)=>W.jsxs("th",{children:["S",l+1]},l)),W.jsx("th",{children:n.tb?"TB":"Pts"})]})}),W.jsx("tbody",{children:["b","a"].map(o=>{const l=o==="a"?"b":"a";return W.jsxs("tr",{children:[W.jsxs("td",{className:"tn",children:[W.jsx("i",{className:a===o?"srv":"nosrv"}),yx(e,o)]}),Array.from({length:s.cols},(c,u)=>{let h="-",d=!1;return u<n.sets.length?(h=n.sets[u][o],d=n.sets[u][o]>n.sets[u][l]):u===n.sets.length&&(h=n.g[o],d=!0),W.jsx("td",{className:d?"b":"",children:h},u)}),W.jsx("td",{className:"b",children:Df(n,o)})]},o)})})]})}function lC({session:n,hud:e,onRematch:t,onLobby:i,onLeave:r}){if(e.mode&&e.mode!=="match"&&e.tr){const[c,u,,h,d]=e.tr;return W.jsx("div",{className:"end",children:W.jsxs("div",{className:"sheet center",children:[W.jsx("h2",{children:"Entrenamiento terminado"}),W.jsxs("p",{className:"trsum",children:[W.jsx("b",{children:u})," de ",c," aciertos · mejor racha ",W.jsx("b",{children:h})," · ",W.jsx("b",{children:d})," puntos"]}),W.jsx("button",{className:"btn primary",onClick:t,children:"Repetir"}),W.jsx("button",{className:"btn",onClick:i,children:"Elegir otro modo"}),W.jsx("button",{className:"btn ghost",onClick:r,children:"Salir"})]})})}const s=n.isHost,a=n.mySlot>=0?n.mySlot<2?"a":"b":null,o=a?e.winner===a:null,l=o==null?`Ganó ${yx(n.roster,e.winner)}`:o?"Ganaste el partido":"Perdiste el partido";return W.jsx("div",{className:"end",children:W.jsxs("div",{className:"sheet center",children:[W.jsx("h2",{children:l}),W.jsx(Sx,{m:e.m,roster:n.roster,fmt:n.room.fmt,srv:-1}),a&&W.jsxs("p",{className:"pts",children:["Puntos del club ",W.jsx("b",{children:o?"+25":"+10"})]}),s?W.jsxs(W.Fragment,{children:[W.jsx("button",{className:"btn primary",onClick:t,children:"Revancha"}),W.jsx("button",{className:"btn",onClick:i,children:"Volver a la sala"})]}):W.jsx("p",{className:"muted",children:"Esperando que el anfitrión elija…"}),W.jsx("button",{className:"btn ghost",onClick:r,children:"Salir"})]})})}const dn=56,Sh=.1,cC=.8;function uC({ctrl:n}){const e=Ge.useRef(null),t=Ge.useRef(null),i=Ge.useRef(null),r=Ge.useRef({id:null,cx:0,cy:0}),s=(l,c)=>{t.current.style.transform=`translate(${l-dn}px, ${c-dn}px)`},a=l=>{const c=r.current,u=e.current.getBoundingClientRect();let h=l.clientX-u.left-c.cx,d=l.clientY-u.top-c.cy;const p=Math.hypot(h,d);if(p>dn){const g=(p-dn)/p;c.cx=Math.max(dn+6,Math.min(u.width-dn-6,c.cx+h*g)),c.cy=Math.max(dn+6,Math.min(u.height-dn-6,c.cy+d*g)),s(c.cx,c.cy),h=l.clientX-u.left-c.cx,d=l.clientY-u.top-c.cy}const v=Math.min(dn,Math.hypot(h,d)),x=v/dn,m=v?h/Math.hypot(h,d):0,f=v?d/Math.hypot(h,d):0,_=x<Sh?0:Math.min(1,(x-Sh)/(cC-Sh));n.current={x:m*_,y:f*_,active:!0},i.current.style.transform=`translate(${m*v*.8}px, ${f*v*.8}px)`},o=l=>{const c=r.current;l&&c.id!==l.pointerId||(c.id=null,n.current={x:0,y:0,active:!1},e.current.dataset.on="",i.current.style.transform="translate(0,0)")};return W.jsxs("div",{ref:e,className:"joyzone","aria-label":"Joystick",onPointerDown:l=>{const c=r.current;if(c.id!=null)return;l.currentTarget.setPointerCapture(l.pointerId),c.id=l.pointerId;const u=e.current.getBoundingClientRect();c.cx=Math.max(dn+6,Math.min(u.width-dn-6,l.clientX-u.left)),c.cy=Math.max(dn+6,Math.min(u.height-dn-6,l.clientY-u.top)),s(c.cx,c.cy),e.current.dataset.on="1",a(l)},onPointerMove:l=>{r.current.id===l.pointerId&&a(l)},onPointerUp:o,onPointerCancel:o,onContextMenu:l=>l.preventDefault(),children:[W.jsxs("div",{className:"joyhint","aria-hidden":"true",children:[W.jsx("b",{children:"✥"}),W.jsx("span",{children:"Tocá y arrastrá"})]}),W.jsx("div",{ref:t,className:"joybase",children:W.jsx("div",{ref:i,className:"knob"})})]})}const hC=[{k:"plano",l:"Drive",c:"plano"},{k:"altura",l:"Globo",c:"altura"},{k:"ataque",l:"Ataque",c:"ataque"}];function fC({onPress:n,onRelease:e,back:t,atk:i,chg:r}){const s=Ge.useRef({id:-1,y0:0,sl:!1}),a=Ge.useRef(null),o=Ge.useRef(null);return Ge.useEffect(()=>{let l=0;const c=()=>{l=requestAnimationFrame(c);const u=r.current,h=u.k?Math.min(1,Math.max(0,((performance.now()-u.t0)/1e3-.14)/.8)):0;a.current&&(a.current.style.transform=`scaleX(${h})`,a.current.style.opacity=u.k&&h>.02?1:0,a.current.dataset.full=h>=.98?"1":""),o.current&&(o.current.dataset.on=u.k||"")};return l=requestAnimationFrame(c),()=>cancelAnimationFrame(l)},[r]),W.jsxs("div",{className:"shots",ref:o,children:[W.jsx("div",{className:"charge",children:W.jsx("i",{ref:a})}),hC.map(l=>W.jsx("button",{className:`shot ${l.c}`,"data-k":l.k,onPointerDown:c=>{c.preventDefault(),c.currentTarget.setPointerCapture(c.pointerId),s.current={id:c.pointerId,y0:c.clientY,sl:!1},n(l.k)},onPointerMove:c=>{const u=s.current;c.pointerId===u.id&&!u.sl&&u.y0-c.clientY>34&&(u.sl=!0,c.currentTarget.dataset.sl="1")},onPointerUp:c=>{const u=s.current.sl;s.current={id:-1,y0:0,sl:!1},c.currentTarget.dataset.sl="",e(l.k,u)},onPointerCancel:c=>{s.current={id:-1,y0:0,sl:!1},c.currentTarget.dataset.sl="",e(l.k,!1)},onContextMenu:c=>c.preventDefault(),children:W.jsx("span",{children:l.k==="plano"?t?"Revés":"Drive":l.k==="ataque"?i||"Ataque":l.l})},l.k))]})}const dC=(n,e,t)=>Math.max(e,Math.min(t,n)),pC=new URLSearchParams(location.search).get("net")==="local"?"broadcast":"trystero";function mC(){try{const n=JSON.parse(localStorage.getItem("padel.profile"));if(n)return{name:String(n.name||""),look:ic(n.look),num:Number.isFinite(+n.num)?+n.num:7}}catch{}return{name:"",look:{...Xa},num:1+Math.floor(Math.random()*98)}}const gC=()=>{const n=location.hash.match(/#\/sala\/([A-Za-z0-9]{3,6})/);return n?n[1].toUpperCase():""},vC=n=>{const e=Math.max(0,n|0),t=e/3600|0,i=e%3600/60|0,r=e%60;return`${t?t+":"+String(i).padStart(2,"0"):i}:${String(r).padStart(2,"0")}`};function _C(){const n=Ge.useRef(null),e=Ge.useRef(null),t=Ge.useRef(null),i=Ge.useRef({x:0,y:0,active:!1}),r=Ge.useRef({}),s=Ge.useRef(null),a=Ge.useRef(null),o=Ge.useRef(""),[,l]=Ge.useReducer(y=>y+1,0),[c,u]=Ge.useState(mC),[h,d]=Ge.useState(!0),[p,v]=Ge.useState(()=>{try{return localStorage.getItem("padel.court")||"azul"}catch{return"azul"}}),x=y=>{v(y);try{localStorage.setItem("padel.court",y)}catch{}e.current&&e.current.setCourt(y)},[m,f]=Ge.useState(gC()),[_,g]=Ge.useState(""),[S,R]=Ge.useState(""),[E,w]=Ge.useState(mb()),[N,M]=Ge.useState([]),[T,H]=Ge.useState(null),[j,oe]=Ge.useState(null),[P,G]=Ge.useState(!1),[$,se]=Ge.useState(!1),[F,C]=Ge.useState(!1),[D,B]=Ge.useState(!1),[V,z]=Ge.useState(()=>{try{return localStorage.getItem("padel.lefty")==="1"}catch{return!1}}),q=()=>z(y=>{try{localStorage.setItem("padel.lefty",y?"0":"1")}catch{}return!y}),O=Ge.useRef({k:null,t0:0});a.current=c;const Y=Ge.useCallback(y=>{const k=Math.random();M(re=>[...re.slice(-2),{id:k,tx:y}]),setTimeout(()=>M(re=>re.filter(ne=>ne.id!==k)),3200)},[]),ee=Ge.useCallback((y,k,re)=>{const ne=Math.random();H({id:ne,tx:y,gold:re}),setTimeout(()=>H(ae=>ae&&ae.id===ne?null:ae),k||900)},[]),me=Ge.useCallback(y=>{if(y==="dejada"){t.current&&t.current.shot(y,0);return}O.current.k||(O.current={k:y,t0:performance.now()})},[]),Te=Ge.useCallback((y,k=!1)=>{const re=O.current;if(re.k!==y)return;O.current={k:null,t0:0};const ne=(performance.now()-re.t0)/1e3;t.current&&t.current.shot(y,ne<.14?0:Math.min(1,(ne-.14)/.8),k)},[]),Me=y=>{d(y),e.current&&e.current.setQuality(y)};Ge.useEffect(()=>{try{localStorage.setItem("padel.profile",JSON.stringify(c))}catch{}},[c]),Ge.useEffect(()=>{e.current&&e.current.setPreviewLook(c.look,na(c.name).split(" ")[0],c.num)},[c]),Ge.useEffect(()=>{const y=new Sb(n.current,{autoQuality:new URLSearchParams(location.search).get("q")!=="hi",onQuality:()=>{d(!1),Y("Calidad ajustada para mantener la fluidez")},onReplay:ce=>{B(ce),ce&&H(null)}});if(y.setCourt(p),new URLSearchParams(location.search).has("debug")&&(window.__stage=y),!y.ok){G(!0);return}e.current=y,y.setPreviewLook(a.current.look,na(a.current.name).split(" ")[0],a.current.num);let k=0,re=performance.now();const ne=ce=>{k=requestAnimationFrame(ne);const ge=Math.min((ce-re)/1e3,.25);re=ce;const Re=t.current;let xe=null;if(Re&&(Re.role==="host"||Re.role==="client")){const Se=Re.ys,De=i.current,Ae=r.current;let be=De.x,ve=De.y;De.active||(be=(Ae.d||Ae.arrowright?1:0)-(Ae.a||Ae.arrowleft?1:0),ve=(Ae.s||Ae.arrowdown?1:0)-(Ae.w||Ae.arrowup?1:0));const Ie=Math.abs(be)>.25?dC(be*4*Se,-4,4):null;s.current=Ie,Re.setControl({mx:be*Se,mz:ve*Se,ax:Ie}),Re.tick(ge),xe=Re.frame(ge);for(const he of xe.events)if(he.t==="msg"&&(he.slot==null||he.slot===xe.mySlot))ee(he.tx,he.ms,he.gold);else if(he.t==="point"){const Ee=xe.mySlot>=0?xe.mySlot<2?"a":"b":null,Oe=Ee?he.who===Ee:null,Fe=he.pts,at=Ee==="b"?`${Fe[1]} - ${Fe[0]}`:`${Fe[0]} - ${Fe[1]}`,nt=Oe==null?he.who==="a"?"Equipo A":"Equipo B":Oe?"para vos":"rival";let yt=he.label;yt||(yt=he.ev==="punto"?`${Oe==null?"Punto "+nt:Oe?"Punto para vos":"Punto rival"} · ${at}`:he.ev==="game"?`Game ${nt}`:he.ev==="set"?`Set ${nt}`:"Partido"),ee(yt,he.ev==="punto"&&!he.label?1200:2e3,he.ev!=="punto"||!!he.label)}const We=xe.ents.find(he=>he.slot===xe.mySlot),tt=!!(We&&xe.ball&&(xe.ball.x-We.x)*Se<0),He=Math.floor(xe.clock||0),pe=We&&xe.ball?Cb(xe.ball.y,We.z):"Ataque",U=`${pe}|${xe.phase}|${xe.st}|${xe.srv}|${JSON.stringify(xe.m)}|${tt}|${xe.mySlot}|${xe.sn}|${He}|${xe.tr}`;U!==o.current&&(o.current=U,oe({atk:pe,st:xe.st,m:xe.m,srv:xe.srv,winner:xe.winner,back:tt,phase:xe.phase,mySlot:xe.mySlot,sn:xe.sn,ck:He,mode:xe.mode,tr:xe.tr}))}else o.current&&(o.current="",oe(null));const ie=O.current;y.render(xe,ge,{aim:s.current,charge:ie.k?Math.min(1,Math.max(0,((performance.now()-ie.t0)/1e3-.14)/.8)):0})};k=requestAnimationFrame(ne);const ae=ce=>{const ge=ce.key.toLowerCase();r.current[ge]=!0;const Re={1:"plano",2:"altura",3:"ataque",4:"remate",5:"x3",6:"x4"};Re[ge]&&!ce.repeat&&me(Re[ge]),(ce.key.startsWith("Arrow")||ge===" ")&&ce.preventDefault()},_e=ce=>{const ge=ce.key.toLowerCase();r.current[ge]=!1;const Re={1:"plano",2:"altura",3:"ataque",4:"remate",5:"x3",6:"x4"};Re[ge]&&Te(Re[ge])};return window.addEventListener("keydown",ae),window.addEventListener("keyup",_e),()=>{cancelAnimationFrame(k),window.removeEventListener("keydown",ae),window.removeEventListener("keyup",_e),t.current&&t.current.leave(),y.dispose(),e.current=null}},[Y,ee,me,Te]);const Le=!!(j&&j.phase==="match");Ge.useEffect(()=>(Le?vb():(K0(),B(!1)),()=>K0()),[Le]);const L=Ge.useCallback(()=>{t.current&&t.current.leave(),t.current=null,g(""),se(!1),oe(null),H(null),location.hash&&history.replaceState(null,"",location.pathname+location.search),l()},[]),de=Ge.useCallback(async(y,k,re={})=>{ka(),R("");const ne=y==="join"?Fb(k):Ob();if(y==="join"&&ne.length<3){R("Escribí el código de la sala");return}t.current&&t.current.leave();const ae=a.current,_e=new Vb(Jb(y==="solo"?"solo":pC,ne),{profile:{name:na(ae.name),look:ae.look,num:ae.num},create:y!=="join",code:ne});_e.on("change",l),_e.on("notice",Y),_e.on("error",ce=>{g(""),R(ce==="nohost"?`No encontramos la sala ${ne}. Revisá el código y que el anfitrión la tenga abierta.`:ce==="hostlost"?"Se perdió la conexión con la sala.":"La sala se cerró."),t.current=null,l()}),t.current=_e,se(y==="solo"),y==="join"&&g(ne);try{await _e.start(),y==="create"&&history.replaceState(null,"",`${location.pathname}${location.search}#/sala/${ne}`),y==="solo"&&(re.diff&&_e.setDiff(re.diff),re.train&&_e.setTrain(re.train),_e.startMatch()),(_e.role==="host"||_e.role==="client")&&g("")}catch{g(""),t.current=null,R("No se pudo conectar. Revisá tu conexión e intentá de nuevo."),l()}},[Y]);Ge.useEffect(()=>{_&&t.current&&t.current.role==="client"&&g("")});const Z=t.current,ue=Z&&(Z.role==="host"||Z.role==="client"),te=Z?`${location.origin}${location.pathname}${location.search}#/sala/${Z.code}`:"",Ne=async()=>{try{navigator.share&&/Mobi/i.test(navigator.userAgent)?await navigator.share({title:"Padel Club",text:"Sumate a mi partido",url:te}):(await navigator.clipboard.writeText(te),Y("Link copiado"))}catch{Y("No se pudo copiar: copialo a mano")}},we=ue&&Z.phase==="match"&&j&&j.phase==="match",A=we&&Z.mySlot>=0&&j.st!=="end";return W.jsxs("div",{className:"app",children:[W.jsx("div",{className:"stage",ref:n}),P&&W.jsxs("div",{className:"sheet center",children:[W.jsx("h2",{children:"Tu navegador no soporta 3D"}),W.jsx("p",{className:"muted",children:"Probá con Chrome, Safari o Firefox actualizados."})]}),W.jsx("div",{className:"toasts","aria-live":"polite",children:N.map(y=>W.jsx("div",{className:"toast",children:y.tx},y.id))}),!P&&!ue&&!_&&F&&W.jsx(rC,{onBack:()=>C(!1),onPick:y=>{C(!1),de("solo",null,y)}}),!P&&!ue&&!_&&!F&&W.jsx(iC,{profile:c,setProfile:u,hq:h,setHq:Me,court:p,setCourt:x,joinCode:m,setJoinCode:f,onCreate:()=>de("create"),onJoin:()=>de("join",m),onSolo:()=>C(!0),error:S,muted:E,onMute:()=>{const y=!E;Y0(y),w(y),ka()}}),!P&&_&&W.jsx(sC,{code:_,onCancel:L}),!P&&ue&&Z.phase==="lobby"&&W.jsx(oC,{session:Z,link:te,solo:$,onCopy:Ne,onLeave:L,onStart:()=>{ka(),Z.startMatch()}}),we&&W.jsxs(W.Fragment,{children:[W.jsxs("div",{className:"hud",children:[j.mode==="match"||!j.tr?W.jsx(Sx,{m:j.m,roster:Z.roster,fmt:Z.room.fmt,srv:j.srv,theme:"hud"}):W.jsxs("div",{className:"trbar",children:[W.jsx("b",{children:j.mode==="serve"?"Saque":"Remate"}),W.jsxs("span",{children:["Intento ",Math.min(j.tr[0]+1,j.tr[5]),"/",j.tr[5]]}),W.jsxs("span",{children:["✔ ",j.tr[1]]}),W.jsxs("span",{children:["Racha ",j.tr[2]]}),W.jsxs("span",{children:[j.tr[4]," pts"]})]}),W.jsxs("div",{className:"chips",children:[W.jsxs("span",{className:"chip clock",children:["⏱ ",vC(j.ck)]}),j.mode==="match"&&j.st==="serve"&&W.jsx("span",{className:"chip",children:j.sn===2?"2º saque":"1er saque"})]}),W.jsx("button",{className:"icon float","aria-label":E?"Activar sonido":"Silenciar",onClick:()=>{const y=!E;Y0(y),w(y),ka()},children:E?"🔇":"🔊"}),W.jsx("button",{className:"icon float hand","aria-label":"Cambiar de mano",onClick:q,children:V?"🫲":"🫱"}),W.jsx("button",{className:"icon float exit","aria-label":"Salir de la sala",onClick:L,children:"✕"})]}),D&&W.jsxs("div",{className:"replay-tag",children:[W.jsx("span",{children:"● REPETICIÓN"}),W.jsx("button",{onClick:()=>e.current&&e.current.skipReplay(),children:"Saltar"})]}),T&&!D&&W.jsx("div",{className:`banner ${T.gold?"gold":""}`,children:T.tx},T.id),Z.mySlot<0&&W.jsx("div",{className:"spectator",children:"Mirás como espectador · entrás cuando se libere un lugar"}),A&&!D&&W.jsxs("div",{className:`controls ${V?"lefty":""}`,children:[W.jsx(uC,{ctrl:i}),W.jsx(fC,{back:j.back,atk:j.atk,chg:O,onPress:y=>{ka(),me(y)},onRelease:Te})]}),j.st==="end"&&W.jsx(lC,{session:Z,hud:j,onRematch:()=>Z.startMatch(),onLobby:()=>{$?(L(),C(!0)):Z.backToLobby()},onLeave:L})]})]})}g_(document.getElementById("root")).render(W.jsx(_C,{}));
