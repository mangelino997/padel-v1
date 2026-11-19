(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var U0={exports:{}},pc={},F0={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var da=Symbol.for("react.element"),tx=Symbol.for("react.portal"),nx=Symbol.for("react.fragment"),ix=Symbol.for("react.strict_mode"),rx=Symbol.for("react.profiler"),sx=Symbol.for("react.provider"),ox=Symbol.for("react.context"),ax=Symbol.for("react.forward_ref"),lx=Symbol.for("react.suspense"),cx=Symbol.for("react.memo"),ux=Symbol.for("react.lazy"),Rd=Symbol.iterator;function hx(n){return n===null||typeof n!="object"?null:(n=Rd&&n[Rd]||n["@@iterator"],typeof n=="function"?n:null)}var O0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z0=Object.assign,k0={};function to(n,e,t){this.props=n,this.context=e,this.refs=k0,this.updater=t||O0}to.prototype.isReactComponent={};to.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};to.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function B0(){}B0.prototype=to.prototype;function cf(n,e,t){this.props=n,this.context=e,this.refs=k0,this.updater=t||O0}var uf=cf.prototype=new B0;uf.constructor=cf;z0(uf,to.prototype);uf.isPureReactComponent=!0;var Pd=Array.isArray,H0=Object.prototype.hasOwnProperty,hf={current:null},G0={key:!0,ref:!0,__self:!0,__source:!0};function V0(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)H0.call(e,i)&&!G0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:da,type:n,key:s,ref:o,props:r,_owner:hf.current}}function fx(n,e){return{$$typeof:da,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function ff(n){return typeof n=="object"&&n!==null&&n.$$typeof===da}function dx(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Ld=/\/+/g;function Bc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?dx(""+n.key):e.toString(36)}function xl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case da:case tx:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Bc(o,0):i,Pd(r)?(t="",n!=null&&(t=n.replace(Ld,"$&/")+"/"),xl(r,e,t,"",function(c){return c})):r!=null&&(ff(r)&&(r=fx(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ld,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Pd(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Bc(s,a);o+=xl(s,e,t,l,r)}else if(l=hx(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Bc(s,a++),o+=xl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ma(n,e,t){if(n==null)return n;var i=[],r=0;return xl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function px(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var rn={current:null},yl={transition:null},mx={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:yl,ReactCurrentOwner:hf};function W0(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:Ma,forEach:function(n,e,t){Ma(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ma(n,function(){e++}),e},toArray:function(n){return Ma(n,function(e){return e})||[]},only:function(n){if(!ff(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ke.Component=to;Ke.Fragment=nx;Ke.Profiler=rx;Ke.PureComponent=cf;Ke.StrictMode=ix;Ke.Suspense=lx;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mx;Ke.act=W0;Ke.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=z0({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=hf.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)H0.call(e,l)&&!G0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:da,type:n.type,key:r,ref:s,props:i,_owner:o}};Ke.createContext=function(n){return n={$$typeof:ox,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:sx,_context:n},n.Consumer=n};Ke.createElement=V0;Ke.createFactory=function(n){var e=V0.bind(null,n);return e.type=n,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(n){return{$$typeof:ax,render:n}};Ke.isValidElement=ff;Ke.lazy=function(n){return{$$typeof:ux,_payload:{_status:-1,_result:n},_init:px}};Ke.memo=function(n,e){return{$$typeof:cx,type:n,compare:e===void 0?null:e}};Ke.startTransition=function(n){var e=yl.transition;yl.transition={};try{n()}finally{yl.transition=e}};Ke.unstable_act=W0;Ke.useCallback=function(n,e){return rn.current.useCallback(n,e)};Ke.useContext=function(n){return rn.current.useContext(n)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(n){return rn.current.useDeferredValue(n)};Ke.useEffect=function(n,e){return rn.current.useEffect(n,e)};Ke.useId=function(){return rn.current.useId()};Ke.useImperativeHandle=function(n,e,t){return rn.current.useImperativeHandle(n,e,t)};Ke.useInsertionEffect=function(n,e){return rn.current.useInsertionEffect(n,e)};Ke.useLayoutEffect=function(n,e){return rn.current.useLayoutEffect(n,e)};Ke.useMemo=function(n,e){return rn.current.useMemo(n,e)};Ke.useReducer=function(n,e,t){return rn.current.useReducer(n,e,t)};Ke.useRef=function(n){return rn.current.useRef(n)};Ke.useState=function(n){return rn.current.useState(n)};Ke.useSyncExternalStore=function(n,e,t){return rn.current.useSyncExternalStore(n,e,t)};Ke.useTransition=function(){return rn.current.useTransition()};Ke.version="18.3.1";F0.exports=Ke;var We=F0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gx=We,vx=Symbol.for("react.element"),_x=Symbol.for("react.fragment"),xx=Object.prototype.hasOwnProperty,yx=gx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sx={key:!0,ref:!0,__self:!0,__source:!0};function X0(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)xx.call(e,i)&&!Sx.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:vx,type:n,key:s,ref:o,props:r,_owner:yx.current}}pc.Fragment=_x;pc.jsx=X0;pc.jsxs=X0;U0.exports=pc;var ee=U0.exports,j0={exports:{}},An={},q0={exports:{}},$0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,O){var V=N.length;N.push(O);e:for(;0<V;){var Q=V-1>>>1,ae=N[Q];if(0<r(ae,O))N[Q]=O,N[V]=ae,V=Q;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var O=N[0],V=N.pop();if(V!==O){N[0]=V;e:for(var Q=0,ae=N.length,$=ae>>>1;Q<$;){var te=2*(Q+1)-1,de=N[te],fe=te+1,ge=N[fe];if(0>r(de,V))fe<ae&&0>r(ge,de)?(N[Q]=ge,N[fe]=V,Q=fe):(N[Q]=de,N[te]=V,Q=te);else if(fe<ae&&0>r(ge,V))N[Q]=ge,N[fe]=V,Q=fe;else break e}}return O}function r(N,O){var V=N.sortIndex-O.sortIndex;return V!==0?V:N.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,d=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var O=t(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=N)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=t(c)}}function y(N){if(x=!1,g(N),!v)if(t(l)!==null)v=!0,H(P);else{var O=t(c);O!==null&&q(y,O.startTime-N)}}function P(N,O){v=!1,x&&(x=!1,f(D),D=-1),p=!0;var V=d;try{for(g(O),h=t(l);h!==null&&(!(h.expirationTime>O)||N&&!k());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,d=h.priorityLevel;var ae=Q(h.expirationTime<=O);O=n.unstable_now(),typeof ae=="function"?h.callback=ae:h===t(l)&&i(l),g(O)}else i(l);h=t(l)}if(h!==null)var $=!0;else{var te=t(c);te!==null&&q(y,te.startTime-O),$=!1}return $}finally{h=null,d=V,p=!1}}var E=!1,w=null,D=-1,S=5,A=-1;function k(){return!(n.unstable_now()-A<S)}function L(){if(w!==null){var N=n.unstable_now();A=N;var O=!0;try{O=w(!0,N)}finally{O?B():(E=!1,w=null)}}else E=!1}var B;if(typeof _=="function")B=function(){_(L)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,U=b.port2;b.port1.onmessage=L,B=function(){U.postMessage(null)}}else B=function(){m(L,0)};function H(N){w=N,E||(E=!0,B())}function q(N,O){D=m(function(){N(n.unstable_now())},O)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){v||p||(v=!0,H(P))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(d){case 1:case 2:case 3:var O=3;break;default:O=d}var V=d;d=O;try{return N()}finally{d=V}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,O){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var V=d;d=N;try{return O()}finally{d=V}},n.unstable_scheduleCallback=function(N,O,V){var Q=n.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?Q+V:Q):V=Q,N){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=V+ae,N={id:u++,callback:O,priorityLevel:N,startTime:V,expirationTime:ae,sortIndex:-1},V>Q?(N.sortIndex=V,e(c,N),t(l)===null&&N===t(c)&&(x?(f(D),D=-1):x=!0,q(y,V-Q))):(N.sortIndex=ae,e(l,N),v||p||(v=!0,H(P))),N},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(N){var O=d;return function(){var V=d;d=O;try{return N.apply(this,arguments)}finally{d=V}}}})($0);q0.exports=$0;var Mx=q0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ex=We,Tn=Mx;function ce(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Y0=new Set,Wo={};function qr(n,e){Vs(n,e),Vs(n+"Capture",e)}function Vs(n,e){for(Wo[n]=e,n=0;n<e.length;n++)Y0.add(e[n])}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zu=Object.prototype.hasOwnProperty,wx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dd={},Nd={};function Tx(n){return Zu.call(Nd,n)?!0:Zu.call(Dd,n)?!1:wx.test(n)?Nd[n]=!0:(Dd[n]=!0,!1)}function Ax(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Cx(n,e,t,i){if(e===null||typeof e>"u"||Ax(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Gt[n]=new sn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Gt[e]=new sn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Gt[n]=new sn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Gt[n]=new sn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Gt[n]=new sn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Gt[n]=new sn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Gt[n]=new sn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Gt[n]=new sn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Gt[n]=new sn(n,5,!1,n.toLowerCase(),null,!1,!1)});var df=/[\-:]([a-z])/g;function pf(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(df,pf);Gt[e]=new sn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(df,pf);Gt[e]=new sn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(df,pf);Gt[e]=new sn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Gt[n]=new sn(n,1,!1,n.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Gt[n]=new sn(n,1,!1,n.toLowerCase(),null,!0,!0)});function mf(n,e,t,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Cx(e,t,r,i)&&(t=null),i||r===null?Tx(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Ii=Ex.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ea=Symbol.for("react.element"),ms=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),gf=Symbol.for("react.strict_mode"),eh=Symbol.for("react.profiler"),K0=Symbol.for("react.provider"),J0=Symbol.for("react.context"),vf=Symbol.for("react.forward_ref"),th=Symbol.for("react.suspense"),nh=Symbol.for("react.suspense_list"),_f=Symbol.for("react.memo"),Hi=Symbol.for("react.lazy"),Q0=Symbol.for("react.offscreen"),Id=Symbol.iterator;function co(n){return n===null||typeof n!="object"?null:(n=Id&&n[Id]||n["@@iterator"],typeof n=="function"?n:null)}var _t=Object.assign,Hc;function Ao(n){if(Hc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Hc=e&&e[1]||""}return`
`+Hc+n}var Gc=!1;function Vc(n,e){if(!n||Gc)return"";Gc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Gc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ao(n):""}function bx(n){switch(n.tag){case 5:return Ao(n.type);case 16:return Ao("Lazy");case 13:return Ao("Suspense");case 19:return Ao("SuspenseList");case 0:case 2:case 15:return n=Vc(n.type,!1),n;case 11:return n=Vc(n.type.render,!1),n;case 1:return n=Vc(n.type,!0),n;default:return""}}function ih(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case gs:return"Fragment";case ms:return"Portal";case eh:return"Profiler";case gf:return"StrictMode";case th:return"Suspense";case nh:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case J0:return(n.displayName||"Context")+".Consumer";case K0:return(n._context.displayName||"Context")+".Provider";case vf:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case _f:return e=n.displayName||null,e!==null?e:ih(n.type)||"Memo";case Hi:e=n._payload,n=n._init;try{return ih(n(e))}catch{}}return null}function Rx(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ih(e);case 8:return e===gf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Z0(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Px(n){var e=Z0(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function wa(n){n._valueTracker||(n._valueTracker=Px(n))}function eg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Z0(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Il(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function rh(n,e){var t=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Ud(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=ar(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tg(n,e){e=e.checked,e!=null&&mf(n,"checked",e,!1)}function sh(n,e){tg(n,e);var t=ar(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?oh(n,e.type,t):e.hasOwnProperty("defaultValue")&&oh(n,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Fd(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function oh(n,e,t){(e!=="number"||Il(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Co=Array.isArray;function Is(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+ar(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function ah(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Od(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ce(92));if(Co(t)){if(1<t.length)throw Error(ce(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:ar(t)}}function ng(n,e){var t=ar(e.value),i=ar(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function zd(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function ig(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lh(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?ig(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ta,rg=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ta=Ta||document.createElement("div"),Ta.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ta.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Xo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lx=["Webkit","ms","Moz","O"];Object.keys(Lo).forEach(function(n){Lx.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Lo[e]=Lo[n]})});function sg(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Lo.hasOwnProperty(n)&&Lo[n]?(""+e).trim():e+"px"}function og(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=sg(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Dx=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ch(n,e){if(e){if(Dx[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function uh(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hh=null;function xf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var fh=null,Us=null,Fs=null;function kd(n){if(n=ga(n)){if(typeof fh!="function")throw Error(ce(280));var e=n.stateNode;e&&(e=xc(e),fh(n.stateNode,n.type,e))}}function ag(n){Us?Fs?Fs.push(n):Fs=[n]:Us=n}function lg(){if(Us){var n=Us,e=Fs;if(Fs=Us=null,kd(n),e)for(n=0;n<e.length;n++)kd(e[n])}}function cg(n,e){return n(e)}function ug(){}var Wc=!1;function hg(n,e,t){if(Wc)return n(e,t);Wc=!0;try{return cg(n,e,t)}finally{Wc=!1,(Us!==null||Fs!==null)&&(ug(),lg())}}function jo(n,e){var t=n.stateNode;if(t===null)return null;var i=xc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ce(231,e,typeof t));return t}var dh=!1;if(Ri)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){dh=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{dh=!1}function Nx(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Do=!1,Ul=null,Fl=!1,ph=null,Ix={onError:function(n){Do=!0,Ul=n}};function Ux(n,e,t,i,r,s,o,a,l){Do=!1,Ul=null,Nx.apply(Ix,arguments)}function Fx(n,e,t,i,r,s,o,a,l){if(Ux.apply(this,arguments),Do){if(Do){var c=Ul;Do=!1,Ul=null}else throw Error(ce(198));Fl||(Fl=!0,ph=c)}}function $r(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function fg(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Bd(n){if($r(n)!==n)throw Error(ce(188))}function Ox(n){var e=n.alternate;if(!e){if(e=$r(n),e===null)throw Error(ce(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Bd(r),n;if(s===i)return Bd(r),e;s=s.sibling}throw Error(ce(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ce(189))}}if(t.alternate!==i)throw Error(ce(190))}if(t.tag!==3)throw Error(ce(188));return t.stateNode.current===t?n:e}function dg(n){return n=Ox(n),n!==null?pg(n):null}function pg(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=pg(n);if(e!==null)return e;n=n.sibling}return null}var mg=Tn.unstable_scheduleCallback,Hd=Tn.unstable_cancelCallback,zx=Tn.unstable_shouldYield,kx=Tn.unstable_requestPaint,Mt=Tn.unstable_now,Bx=Tn.unstable_getCurrentPriorityLevel,yf=Tn.unstable_ImmediatePriority,gg=Tn.unstable_UserBlockingPriority,Ol=Tn.unstable_NormalPriority,Hx=Tn.unstable_LowPriority,vg=Tn.unstable_IdlePriority,mc=null,ui=null;function Gx(n){if(ui&&typeof ui.onCommitFiberRoot=="function")try{ui.onCommitFiberRoot(mc,n,void 0,(n.current.flags&128)===128)}catch{}}var ei=Math.clz32?Math.clz32:Xx,Vx=Math.log,Wx=Math.LN2;function Xx(n){return n>>>=0,n===0?32:31-(Vx(n)/Wx|0)|0}var Aa=64,Ca=4194304;function bo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function zl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=bo(a):(s&=o,s!==0&&(i=bo(s)))}else o=t&~r,o!==0?i=bo(o):s!==0&&(i=bo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ei(e),r=1<<t,i|=n[t],e&=~r;return i}function jx(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qx(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-ei(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=jx(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function mh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function _g(){var n=Aa;return Aa<<=1,!(Aa&4194240)&&(Aa=64),n}function Xc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function pa(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ei(e),n[e]=t}function $x(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ei(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Sf(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ei(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var nt=0;function xg(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var yg,Mf,Sg,Mg,Eg,gh=!1,ba=[],Yi=null,Ki=null,Ji=null,qo=new Map,$o=new Map,Vi=[],Yx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gd(n,e){switch(n){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":qo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(e.pointerId)}}function ho(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ga(e),e!==null&&Mf(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Kx(n,e,t,i,r){switch(e){case"focusin":return Yi=ho(Yi,n,e,t,i,r),!0;case"dragenter":return Ki=ho(Ki,n,e,t,i,r),!0;case"mouseover":return Ji=ho(Ji,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return qo.set(s,ho(qo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,$o.set(s,ho($o.get(s)||null,n,e,t,i,r)),!0}return!1}function wg(n){var e=Pr(n.target);if(e!==null){var t=$r(e);if(t!==null){if(e=t.tag,e===13){if(e=fg(t),e!==null){n.blockedOn=e,Eg(n.priority,function(){Sg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Sl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=vh(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);hh=i,t.target.dispatchEvent(i),hh=null}else return e=ga(t),e!==null&&Mf(e),n.blockedOn=t,!1;e.shift()}return!0}function Vd(n,e,t){Sl(n)&&t.delete(e)}function Jx(){gh=!1,Yi!==null&&Sl(Yi)&&(Yi=null),Ki!==null&&Sl(Ki)&&(Ki=null),Ji!==null&&Sl(Ji)&&(Ji=null),qo.forEach(Vd),$o.forEach(Vd)}function fo(n,e){n.blockedOn===e&&(n.blockedOn=null,gh||(gh=!0,Tn.unstable_scheduleCallback(Tn.unstable_NormalPriority,Jx)))}function Yo(n){function e(r){return fo(r,n)}if(0<ba.length){fo(ba[0],n);for(var t=1;t<ba.length;t++){var i=ba[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Yi!==null&&fo(Yi,n),Ki!==null&&fo(Ki,n),Ji!==null&&fo(Ji,n),qo.forEach(e),$o.forEach(e),t=0;t<Vi.length;t++)i=Vi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Vi.length&&(t=Vi[0],t.blockedOn===null);)wg(t),t.blockedOn===null&&Vi.shift()}var Os=Ii.ReactCurrentBatchConfig,kl=!0;function Qx(n,e,t,i){var r=nt,s=Os.transition;Os.transition=null;try{nt=1,Ef(n,e,t,i)}finally{nt=r,Os.transition=s}}function Zx(n,e,t,i){var r=nt,s=Os.transition;Os.transition=null;try{nt=4,Ef(n,e,t,i)}finally{nt=r,Os.transition=s}}function Ef(n,e,t,i){if(kl){var r=vh(n,e,t,i);if(r===null)tu(n,e,i,Bl,t),Gd(n,i);else if(Kx(r,n,e,t,i))i.stopPropagation();else if(Gd(n,i),e&4&&-1<Yx.indexOf(n)){for(;r!==null;){var s=ga(r);if(s!==null&&yg(s),s=vh(n,e,t,i),s===null&&tu(n,e,i,Bl,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else tu(n,e,i,null,t)}}var Bl=null;function vh(n,e,t,i){if(Bl=null,n=xf(i),n=Pr(n),n!==null)if(e=$r(n),e===null)n=null;else if(t=e.tag,t===13){if(n=fg(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Bl=n,null}function Tg(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bx()){case yf:return 1;case gg:return 4;case Ol:case Hx:return 16;case vg:return 536870912;default:return 16}default:return 16}}var Xi=null,wf=null,Ml=null;function Ag(){if(Ml)return Ml;var n,e=wf,t=e.length,i,r="value"in Xi?Xi.value:Xi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Ml=r.slice(n,1<i?1-i:void 0)}function El(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ra(){return!0}function Wd(){return!1}function Cn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ra:Wd,this.isPropagationStopped=Wd,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ra)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ra)},persist:function(){},isPersistent:Ra}),e}var no={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tf=Cn(no),ma=_t({},no,{view:0,detail:0}),ey=Cn(ma),jc,qc,po,gc=_t({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Af,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==po&&(po&&n.type==="mousemove"?(jc=n.screenX-po.screenX,qc=n.screenY-po.screenY):qc=jc=0,po=n),jc)},movementY:function(n){return"movementY"in n?n.movementY:qc}}),Xd=Cn(gc),ty=_t({},gc,{dataTransfer:0}),ny=Cn(ty),iy=_t({},ma,{relatedTarget:0}),$c=Cn(iy),ry=_t({},no,{animationName:0,elapsedTime:0,pseudoElement:0}),sy=Cn(ry),oy=_t({},no,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ay=Cn(oy),ly=_t({},no,{data:0}),jd=Cn(ly),cy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fy(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=hy[n])?!!e[n]:!1}function Af(){return fy}var dy=_t({},ma,{key:function(n){if(n.key){var e=cy[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=El(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?uy[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Af,charCode:function(n){return n.type==="keypress"?El(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?El(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),py=Cn(dy),my=_t({},gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qd=Cn(my),gy=_t({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Af}),vy=Cn(gy),_y=_t({},no,{propertyName:0,elapsedTime:0,pseudoElement:0}),xy=Cn(_y),yy=_t({},gc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Sy=Cn(yy),My=[9,13,27,32],Cf=Ri&&"CompositionEvent"in window,No=null;Ri&&"documentMode"in document&&(No=document.documentMode);var Ey=Ri&&"TextEvent"in window&&!No,Cg=Ri&&(!Cf||No&&8<No&&11>=No),$d=" ",Yd=!1;function bg(n,e){switch(n){case"keyup":return My.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var vs=!1;function wy(n,e){switch(n){case"compositionend":return Rg(e);case"keypress":return e.which!==32?null:(Yd=!0,$d);case"textInput":return n=e.data,n===$d&&Yd?null:n;default:return null}}function Ty(n,e){if(vs)return n==="compositionend"||!Cf&&bg(n,e)?(n=Ag(),Ml=wf=Xi=null,vs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Cg&&e.locale!=="ko"?null:e.data;default:return null}}var Ay={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Ay[n.type]:e==="textarea"}function Pg(n,e,t,i){ag(i),e=Hl(e,"onChange"),0<e.length&&(t=new Tf("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Io=null,Ko=null;function Cy(n){Hg(n,0)}function vc(n){var e=ys(n);if(eg(e))return n}function by(n,e){if(n==="change")return e}var Lg=!1;if(Ri){var Yc;if(Ri){var Kc="oninput"in document;if(!Kc){var Jd=document.createElement("div");Jd.setAttribute("oninput","return;"),Kc=typeof Jd.oninput=="function"}Yc=Kc}else Yc=!1;Lg=Yc&&(!document.documentMode||9<document.documentMode)}function Qd(){Io&&(Io.detachEvent("onpropertychange",Dg),Ko=Io=null)}function Dg(n){if(n.propertyName==="value"&&vc(Ko)){var e=[];Pg(e,Ko,n,xf(n)),hg(Cy,e)}}function Ry(n,e,t){n==="focusin"?(Qd(),Io=e,Ko=t,Io.attachEvent("onpropertychange",Dg)):n==="focusout"&&Qd()}function Py(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return vc(Ko)}function Ly(n,e){if(n==="click")return vc(e)}function Dy(n,e){if(n==="input"||n==="change")return vc(e)}function Ny(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ni=typeof Object.is=="function"?Object.is:Ny;function Jo(n,e){if(ni(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Zu.call(e,r)||!ni(n[r],e[r]))return!1}return!0}function Zd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ep(n,e){var t=Zd(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Zd(t)}}function Ng(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Ng(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Ig(){for(var n=window,e=Il();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Il(n.document)}return e}function bf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Iy(n){var e=Ig(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Ng(t.ownerDocument.documentElement,t)){if(i!==null&&bf(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=ep(t,s);var o=ep(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Uy=Ri&&"documentMode"in document&&11>=document.documentMode,_s=null,_h=null,Uo=null,xh=!1;function tp(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;xh||_s==null||_s!==Il(i)||(i=_s,"selectionStart"in i&&bf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Uo&&Jo(Uo,i)||(Uo=i,i=Hl(_h,"onSelect"),0<i.length&&(e=new Tf("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=_s)))}function Pa(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var xs={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionend:Pa("Transition","TransitionEnd")},Jc={},Ug={};Ri&&(Ug=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function _c(n){if(Jc[n])return Jc[n];if(!xs[n])return n;var e=xs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Ug)return Jc[n]=e[t];return n}var Fg=_c("animationend"),Og=_c("animationiteration"),zg=_c("animationstart"),kg=_c("transitionend"),Bg=new Map,np="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(n,e){Bg.set(n,e),qr(e,[n])}for(var Qc=0;Qc<np.length;Qc++){var Zc=np[Qc],Fy=Zc.toLowerCase(),Oy=Zc[0].toUpperCase()+Zc.slice(1);hr(Fy,"on"+Oy)}hr(Fg,"onAnimationEnd");hr(Og,"onAnimationIteration");hr(zg,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr(kg,"onTransitionEnd");Vs("onMouseEnter",["mouseout","mouseover"]);Vs("onMouseLeave",["mouseout","mouseover"]);Vs("onPointerEnter",["pointerout","pointerover"]);Vs("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ro));function ip(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Fx(i,e,void 0,n),n.currentTarget=null}function Hg(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ip(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ip(r,a,c),s=l}}}if(Fl)throw n=ph,Fl=!1,ph=null,n}function ut(n,e){var t=e[wh];t===void 0&&(t=e[wh]=new Set);var i=n+"__bubble";t.has(i)||(Gg(e,n,2,!1),t.add(i))}function eu(n,e,t){var i=0;e&&(i|=4),Gg(t,n,i,e)}var La="_reactListening"+Math.random().toString(36).slice(2);function Qo(n){if(!n[La]){n[La]=!0,Y0.forEach(function(t){t!=="selectionchange"&&(zy.has(t)||eu(t,!1,n),eu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[La]||(e[La]=!0,eu("selectionchange",!1,e))}}function Gg(n,e,t,i){switch(Tg(e)){case 1:var r=Qx;break;case 4:r=Zx;break;default:r=Ef}t=r.bind(null,e,t,n),r=void 0,!dh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function tu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Pr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}hg(function(){var c=s,u=xf(t),h=[];e:{var d=Bg.get(n);if(d!==void 0){var p=Tf,v=n;switch(n){case"keypress":if(El(t)===0)break e;case"keydown":case"keyup":p=py;break;case"focusin":v="focus",p=$c;break;case"focusout":v="blur",p=$c;break;case"beforeblur":case"afterblur":p=$c;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ny;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=vy;break;case Fg:case Og:case zg:p=sy;break;case kg:p=xy;break;case"scroll":p=ey;break;case"wheel":p=Sy;break;case"copy":case"cut":case"paste":p=ay;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=qd}var x=(e&4)!==0,m=!x&&n==="scroll",f=x?d!==null?d+"Capture":null:d;x=[];for(var _=c,g;_!==null;){g=_;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,f!==null&&(y=jo(_,f),y!=null&&x.push(Zo(_,y,g)))),m)break;_=_.return}0<x.length&&(d=new p(d,v,null,t,u),h.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==hh&&(v=t.relatedTarget||t.fromElement)&&(Pr(v)||v[Pi]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=t.relatedTarget||t.toElement,p=c,v=v?Pr(v):null,v!==null&&(m=$r(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=Xd,y="onMouseLeave",f="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(x=qd,y="onPointerLeave",f="onPointerEnter",_="pointer"),m=p==null?d:ys(p),g=v==null?d:ys(v),d=new x(y,_+"leave",p,t,u),d.target=m,d.relatedTarget=g,y=null,Pr(u)===c&&(x=new x(f,_+"enter",v,t,u),x.target=g,x.relatedTarget=m,y=x),m=y,p&&v)t:{for(x=p,f=v,_=0,g=x;g;g=Jr(g))_++;for(g=0,y=f;y;y=Jr(y))g++;for(;0<_-g;)x=Jr(x),_--;for(;0<g-_;)f=Jr(f),g--;for(;_--;){if(x===f||f!==null&&x===f.alternate)break t;x=Jr(x),f=Jr(f)}x=null}else x=null;p!==null&&rp(h,d,p,x,!1),v!==null&&m!==null&&rp(h,m,v,x,!0)}}e:{if(d=c?ys(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var P=by;else if(Kd(d))if(Lg)P=Dy;else{P=Py;var E=Ry}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(P=Ly);if(P&&(P=P(n,c))){Pg(h,P,t,u);break e}E&&E(n,d,c),n==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&oh(d,"number",d.value)}switch(E=c?ys(c):window,n){case"focusin":(Kd(E)||E.contentEditable==="true")&&(_s=E,_h=c,Uo=null);break;case"focusout":Uo=_h=_s=null;break;case"mousedown":xh=!0;break;case"contextmenu":case"mouseup":case"dragend":xh=!1,tp(h,t,u);break;case"selectionchange":if(Uy)break;case"keydown":case"keyup":tp(h,t,u)}var w;if(Cf)e:{switch(n){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else vs?bg(n,t)&&(D="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(D="onCompositionStart");D&&(Cg&&t.locale!=="ko"&&(vs||D!=="onCompositionStart"?D==="onCompositionEnd"&&vs&&(w=Ag()):(Xi=u,wf="value"in Xi?Xi.value:Xi.textContent,vs=!0)),E=Hl(c,D),0<E.length&&(D=new jd(D,n,null,t,u),h.push({event:D,listeners:E}),w?D.data=w:(w=Rg(t),w!==null&&(D.data=w)))),(w=Ey?wy(n,t):Ty(n,t))&&(c=Hl(c,"onBeforeInput"),0<c.length&&(u=new jd("onBeforeInput","beforeinput",null,t,u),h.push({event:u,listeners:c}),u.data=w))}Hg(h,e)})}function Zo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Hl(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=jo(n,t),s!=null&&i.unshift(Zo(n,s,r)),s=jo(n,e),s!=null&&i.push(Zo(n,s,r))),n=n.return}return i}function Jr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function rp(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=jo(t,s),l!=null&&o.unshift(Zo(t,l,a))):r||(l=jo(t,s),l!=null&&o.push(Zo(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var ky=/\r\n?/g,By=/\u0000|\uFFFD/g;function sp(n){return(typeof n=="string"?n:""+n).replace(ky,`
`).replace(By,"")}function Da(n,e,t){if(e=sp(e),sp(n)!==e&&t)throw Error(ce(425))}function Gl(){}var yh=null,Sh=null;function Mh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Eh=typeof setTimeout=="function"?setTimeout:void 0,Hy=typeof clearTimeout=="function"?clearTimeout:void 0,op=typeof Promise=="function"?Promise:void 0,Gy=typeof queueMicrotask=="function"?queueMicrotask:typeof op<"u"?function(n){return op.resolve(null).then(n).catch(Vy)}:Eh;function Vy(n){setTimeout(function(){throw n})}function nu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Yo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Yo(e)}function Qi(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function ap(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var io=Math.random().toString(36).slice(2),li="__reactFiber$"+io,ea="__reactProps$"+io,Pi="__reactContainer$"+io,wh="__reactEvents$"+io,Wy="__reactListeners$"+io,Xy="__reactHandles$"+io;function Pr(n){var e=n[li];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Pi]||t[li]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=ap(n);n!==null;){if(t=n[li])return t;n=ap(n)}return e}n=t,t=n.parentNode}return null}function ga(n){return n=n[li]||n[Pi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ce(33))}function xc(n){return n[ea]||null}var Th=[],Ss=-1;function fr(n){return{current:n}}function ht(n){0>Ss||(n.current=Th[Ss],Th[Ss]=null,Ss--)}function lt(n,e){Ss++,Th[Ss]=n.current,n.current=e}var lr={},Yt=fr(lr),pn=fr(!1),Hr=lr;function Ws(n,e){var t=n.type.contextTypes;if(!t)return lr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function mn(n){return n=n.childContextTypes,n!=null}function Vl(){ht(pn),ht(Yt)}function lp(n,e,t){if(Yt.current!==lr)throw Error(ce(168));lt(Yt,e),lt(pn,t)}function Vg(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,Rx(n)||"Unknown",r));return _t({},t,i)}function Wl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||lr,Hr=Yt.current,lt(Yt,n),lt(pn,pn.current),!0}function cp(n,e,t){var i=n.stateNode;if(!i)throw Error(ce(169));t?(n=Vg(n,e,Hr),i.__reactInternalMemoizedMergedChildContext=n,ht(pn),ht(Yt),lt(Yt,n)):ht(pn),lt(pn,t)}var Mi=null,yc=!1,iu=!1;function Wg(n){Mi===null?Mi=[n]:Mi.push(n)}function jy(n){yc=!0,Wg(n)}function dr(){if(!iu&&Mi!==null){iu=!0;var n=0,e=nt;try{var t=Mi;for(nt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Mi=null,yc=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(n+1)),mg(yf,dr),r}finally{nt=e,iu=!1}}return null}var Ms=[],Es=0,Xl=null,jl=0,Dn=[],Nn=0,Gr=null,Ei=1,wi="";function Er(n,e){Ms[Es++]=jl,Ms[Es++]=Xl,Xl=n,jl=e}function Xg(n,e,t){Dn[Nn++]=Ei,Dn[Nn++]=wi,Dn[Nn++]=Gr,Gr=n;var i=Ei;n=wi;var r=32-ei(i)-1;i&=~(1<<r),t+=1;var s=32-ei(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ei=1<<32-ei(e)+r|t<<r|i,wi=s+n}else Ei=1<<s|t<<r|i,wi=n}function Rf(n){n.return!==null&&(Er(n,1),Xg(n,1,0))}function Pf(n){for(;n===Xl;)Xl=Ms[--Es],Ms[Es]=null,jl=Ms[--Es],Ms[Es]=null;for(;n===Gr;)Gr=Dn[--Nn],Dn[Nn]=null,wi=Dn[--Nn],Dn[Nn]=null,Ei=Dn[--Nn],Dn[Nn]=null}var wn=null,En=null,dt=!1,Jn=null;function jg(n,e){var t=kn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function up(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,wn=n,En=Qi(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,wn=n,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Gr!==null?{id:Ei,overflow:wi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=kn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,wn=n,En=null,!0):!1;default:return!1}}function Ah(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ch(n){if(dt){var e=En;if(e){var t=e;if(!up(n,e)){if(Ah(n))throw Error(ce(418));e=Qi(t.nextSibling);var i=wn;e&&up(n,e)?jg(i,t):(n.flags=n.flags&-4097|2,dt=!1,wn=n)}}else{if(Ah(n))throw Error(ce(418));n.flags=n.flags&-4097|2,dt=!1,wn=n}}}function hp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;wn=n}function Na(n){if(n!==wn)return!1;if(!dt)return hp(n),dt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Mh(n.type,n.memoizedProps)),e&&(e=En)){if(Ah(n))throw qg(),Error(ce(418));for(;e;)jg(n,e),e=Qi(e.nextSibling)}if(hp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ce(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){En=Qi(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}En=null}}else En=wn?Qi(n.stateNode.nextSibling):null;return!0}function qg(){for(var n=En;n;)n=Qi(n.nextSibling)}function Xs(){En=wn=null,dt=!1}function Lf(n){Jn===null?Jn=[n]:Jn.push(n)}var qy=Ii.ReactCurrentBatchConfig;function mo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ce(309));var i=t.stateNode}if(!i)throw Error(ce(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ce(284));if(!t._owner)throw Error(ce(290,n))}return n}function Ia(n,e){throw n=Object.prototype.toString.call(e),Error(ce(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function fp(n){var e=n._init;return e(n._payload)}function $g(n){function e(f,_){if(n){var g=f.deletions;g===null?(f.deletions=[_],f.flags|=16):g.push(_)}}function t(f,_){if(!n)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=nr(f,_),f.index=0,f.sibling=null,f}function s(f,_,g){return f.index=g,n?(g=f.alternate,g!==null?(g=g.index,g<_?(f.flags|=2,_):g):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,_,g,y){return _===null||_.tag!==6?(_=uu(g,f.mode,y),_.return=f,_):(_=r(_,g),_.return=f,_)}function l(f,_,g,y){var P=g.type;return P===gs?u(f,_,g.props.children,y,g.key):_!==null&&(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Hi&&fp(P)===_.type)?(y=r(_,g.props),y.ref=mo(f,_,g),y.return=f,y):(y=Pl(g.type,g.key,g.props,null,f.mode,y),y.ref=mo(f,_,g),y.return=f,y)}function c(f,_,g,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=hu(g,f.mode,y),_.return=f,_):(_=r(_,g.children||[]),_.return=f,_)}function u(f,_,g,y,P){return _===null||_.tag!==7?(_=Or(g,f.mode,y,P),_.return=f,_):(_=r(_,g),_.return=f,_)}function h(f,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=uu(""+_,f.mode,g),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ea:return g=Pl(_.type,_.key,_.props,null,f.mode,g),g.ref=mo(f,null,_),g.return=f,g;case ms:return _=hu(_,f.mode,g),_.return=f,_;case Hi:var y=_._init;return h(f,y(_._payload),g)}if(Co(_)||co(_))return _=Or(_,f.mode,g,null),_.return=f,_;Ia(f,_)}return null}function d(f,_,g,y){var P=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:a(f,_,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ea:return g.key===P?l(f,_,g,y):null;case ms:return g.key===P?c(f,_,g,y):null;case Hi:return P=g._init,d(f,_,P(g._payload),y)}if(Co(g)||co(g))return P!==null?null:u(f,_,g,y,null);Ia(f,g)}return null}function p(f,_,g,y,P){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(g)||null,a(_,f,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ea:return f=f.get(y.key===null?g:y.key)||null,l(_,f,y,P);case ms:return f=f.get(y.key===null?g:y.key)||null,c(_,f,y,P);case Hi:var E=y._init;return p(f,_,g,E(y._payload),P)}if(Co(y)||co(y))return f=f.get(g)||null,u(_,f,y,P,null);Ia(_,y)}return null}function v(f,_,g,y){for(var P=null,E=null,w=_,D=_=0,S=null;w!==null&&D<g.length;D++){w.index>D?(S=w,w=null):S=w.sibling;var A=d(f,w,g[D],y);if(A===null){w===null&&(w=S);break}n&&w&&A.alternate===null&&e(f,w),_=s(A,_,D),E===null?P=A:E.sibling=A,E=A,w=S}if(D===g.length)return t(f,w),dt&&Er(f,D),P;if(w===null){for(;D<g.length;D++)w=h(f,g[D],y),w!==null&&(_=s(w,_,D),E===null?P=w:E.sibling=w,E=w);return dt&&Er(f,D),P}for(w=i(f,w);D<g.length;D++)S=p(w,f,D,g[D],y),S!==null&&(n&&S.alternate!==null&&w.delete(S.key===null?D:S.key),_=s(S,_,D),E===null?P=S:E.sibling=S,E=S);return n&&w.forEach(function(k){return e(f,k)}),dt&&Er(f,D),P}function x(f,_,g,y){var P=co(g);if(typeof P!="function")throw Error(ce(150));if(g=P.call(g),g==null)throw Error(ce(151));for(var E=P=null,w=_,D=_=0,S=null,A=g.next();w!==null&&!A.done;D++,A=g.next()){w.index>D?(S=w,w=null):S=w.sibling;var k=d(f,w,A.value,y);if(k===null){w===null&&(w=S);break}n&&w&&k.alternate===null&&e(f,w),_=s(k,_,D),E===null?P=k:E.sibling=k,E=k,w=S}if(A.done)return t(f,w),dt&&Er(f,D),P;if(w===null){for(;!A.done;D++,A=g.next())A=h(f,A.value,y),A!==null&&(_=s(A,_,D),E===null?P=A:E.sibling=A,E=A);return dt&&Er(f,D),P}for(w=i(f,w);!A.done;D++,A=g.next())A=p(w,f,D,A.value,y),A!==null&&(n&&A.alternate!==null&&w.delete(A.key===null?D:A.key),_=s(A,_,D),E===null?P=A:E.sibling=A,E=A);return n&&w.forEach(function(L){return e(f,L)}),dt&&Er(f,D),P}function m(f,_,g,y){if(typeof g=="object"&&g!==null&&g.type===gs&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ea:e:{for(var P=g.key,E=_;E!==null;){if(E.key===P){if(P=g.type,P===gs){if(E.tag===7){t(f,E.sibling),_=r(E,g.props.children),_.return=f,f=_;break e}}else if(E.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Hi&&fp(P)===E.type){t(f,E.sibling),_=r(E,g.props),_.ref=mo(f,E,g),_.return=f,f=_;break e}t(f,E);break}else e(f,E);E=E.sibling}g.type===gs?(_=Or(g.props.children,f.mode,y,g.key),_.return=f,f=_):(y=Pl(g.type,g.key,g.props,null,f.mode,y),y.ref=mo(f,_,g),y.return=f,f=y)}return o(f);case ms:e:{for(E=g.key;_!==null;){if(_.key===E)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){t(f,_.sibling),_=r(_,g.children||[]),_.return=f,f=_;break e}else{t(f,_);break}else e(f,_);_=_.sibling}_=hu(g,f.mode,y),_.return=f,f=_}return o(f);case Hi:return E=g._init,m(f,_,E(g._payload),y)}if(Co(g))return v(f,_,g,y);if(co(g))return x(f,_,g,y);Ia(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(t(f,_.sibling),_=r(_,g),_.return=f,f=_):(t(f,_),_=uu(g,f.mode,y),_.return=f,f=_),o(f)):t(f,_)}return m}var js=$g(!0),Yg=$g(!1),ql=fr(null),$l=null,ws=null,Df=null;function Nf(){Df=ws=$l=null}function If(n){var e=ql.current;ht(ql),n._currentValue=e}function bh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function zs(n,e){$l=n,Df=ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(fn=!0),n.firstContext=null)}function Vn(n){var e=n._currentValue;if(Df!==n)if(n={context:n,memoizedValue:e,next:null},ws===null){if($l===null)throw Error(ce(308));ws=n,$l.dependencies={lanes:0,firstContext:n}}else ws=ws.next=n;return e}var Lr=null;function Uf(n){Lr===null?Lr=[n]:Lr.push(n)}function Kg(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Uf(e)):(t.next=r.next,r.next=t),e.interleaved=t,Li(n,i)}function Li(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Gi=!1;function Ff(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jg(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ai(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Zi(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Li(n,t)}return r=i.interleaved,r===null?(e.next=e,Uf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Li(n,t)}function wl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Sf(n,t)}}function dp(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Yl(n,e,t,i){var r=n.updateQueue;Gi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=n,x=a;switch(d=e,p=t,x.tag){case 1:if(v=x.payload,typeof v=="function"){h=v.call(p,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,d=typeof v=="function"?v.call(p,h,d):v,d==null)break e;h=_t({},h,d);break e;case 2:Gi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Wr|=o,n.lanes=o,n.memoizedState=h}}function pp(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var va={},hi=fr(va),ta=fr(va),na=fr(va);function Dr(n){if(n===va)throw Error(ce(174));return n}function Of(n,e){switch(lt(na,e),lt(ta,n),lt(hi,va),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lh(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=lh(e,n)}ht(hi),lt(hi,e)}function qs(){ht(hi),ht(ta),ht(na)}function Qg(n){Dr(na.current);var e=Dr(hi.current),t=lh(e,n.type);e!==t&&(lt(ta,n),lt(hi,t))}function zf(n){ta.current===n&&(ht(hi),ht(ta))}var mt=fr(0);function Kl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ru=[];function kf(){for(var n=0;n<ru.length;n++)ru[n]._workInProgressVersionPrimary=null;ru.length=0}var Tl=Ii.ReactCurrentDispatcher,su=Ii.ReactCurrentBatchConfig,Vr=0,vt=null,Ct=null,It=null,Jl=!1,Fo=!1,ia=0,$y=0;function Wt(){throw Error(ce(321))}function Bf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ni(n[t],e[t]))return!1;return!0}function Hf(n,e,t,i,r,s){if(Vr=s,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Tl.current=n===null||n.memoizedState===null?Qy:Zy,n=t(i,r),Fo){s=0;do{if(Fo=!1,ia=0,25<=s)throw Error(ce(301));s+=1,It=Ct=null,e.updateQueue=null,Tl.current=eS,n=t(i,r)}while(Fo)}if(Tl.current=Ql,e=Ct!==null&&Ct.next!==null,Vr=0,It=Ct=vt=null,Jl=!1,e)throw Error(ce(300));return n}function Gf(){var n=ia!==0;return ia=0,n}function si(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?vt.memoizedState=It=n:It=It.next=n,It}function Wn(){if(Ct===null){var n=vt.alternate;n=n!==null?n.memoizedState:null}else n=Ct.next;var e=It===null?vt.memoizedState:It.next;if(e!==null)It=e,Ct=n;else{if(n===null)throw Error(ce(310));Ct=n,n={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},It===null?vt.memoizedState=It=n:It=It.next=n}return It}function ra(n,e){return typeof e=="function"?e(n):e}function ou(n){var e=Wn(),t=e.queue;if(t===null)throw Error(ce(311));t.lastRenderedReducer=n;var i=Ct,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Vr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,vt.lanes|=u,Wr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ni(i,e.memoizedState)||(fn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,vt.lanes|=s,Wr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function au(n){var e=Wn(),t=e.queue;if(t===null)throw Error(ce(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ni(s,e.memoizedState)||(fn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Zg(){}function ev(n,e){var t=vt,i=Wn(),r=e(),s=!ni(i.memoizedState,r);if(s&&(i.memoizedState=r,fn=!0),i=i.queue,Vf(iv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||It!==null&&It.memoizedState.tag&1){if(t.flags|=2048,sa(9,nv.bind(null,t,i,r,e),void 0,null),Ot===null)throw Error(ce(349));Vr&30||tv(t,e,r)}return r}function tv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function nv(n,e,t,i){e.value=t,e.getSnapshot=i,rv(e)&&sv(n)}function iv(n,e,t){return t(function(){rv(e)&&sv(n)})}function rv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ni(n,t)}catch{return!0}}function sv(n){var e=Li(n,1);e!==null&&ti(e,n,1,-1)}function mp(n){var e=si();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:n},e.queue=n,n=n.dispatch=Jy.bind(null,vt,n),[e.memoizedState,n]}function sa(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function ov(){return Wn().memoizedState}function Al(n,e,t,i){var r=si();vt.flags|=n,r.memoizedState=sa(1|e,t,void 0,i===void 0?null:i)}function Sc(n,e,t,i){var r=Wn();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&Bf(i,o.deps)){r.memoizedState=sa(e,t,s,i);return}}vt.flags|=n,r.memoizedState=sa(1|e,t,s,i)}function gp(n,e){return Al(8390656,8,n,e)}function Vf(n,e){return Sc(2048,8,n,e)}function av(n,e){return Sc(4,2,n,e)}function lv(n,e){return Sc(4,4,n,e)}function cv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function uv(n,e,t){return t=t!=null?t.concat([n]):null,Sc(4,4,cv.bind(null,e,n),t)}function Wf(){}function hv(n,e){var t=Wn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Bf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function fv(n,e){var t=Wn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Bf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function dv(n,e,t){return Vr&21?(ni(t,e)||(t=_g(),vt.lanes|=t,Wr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,fn=!0),n.memoizedState=t)}function Yy(n,e){var t=nt;nt=t!==0&&4>t?t:4,n(!0);var i=su.transition;su.transition={};try{n(!1),e()}finally{nt=t,su.transition=i}}function pv(){return Wn().memoizedState}function Ky(n,e,t){var i=tr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},mv(n))gv(e,t);else if(t=Kg(n,e,t,i),t!==null){var r=nn();ti(t,n,i,r),vv(t,e,i)}}function Jy(n,e,t){var i=tr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(mv(n))gv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ni(a,o)){var l=e.interleaved;l===null?(r.next=r,Uf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Kg(n,e,r,i),t!==null&&(r=nn(),ti(t,n,i,r),vv(t,e,i))}}function mv(n){var e=n.alternate;return n===vt||e!==null&&e===vt}function gv(n,e){Fo=Jl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function vv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Sf(n,t)}}var Ql={readContext:Vn,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},Qy={readContext:Vn,useCallback:function(n,e){return si().memoizedState=[n,e===void 0?null:e],n},useContext:Vn,useEffect:gp,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Al(4194308,4,cv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Al(4194308,4,n,e)},useInsertionEffect:function(n,e){return Al(4,2,n,e)},useMemo:function(n,e){var t=si();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=si();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Ky.bind(null,vt,n),[i.memoizedState,n]},useRef:function(n){var e=si();return n={current:n},e.memoizedState=n},useState:mp,useDebugValue:Wf,useDeferredValue:function(n){return si().memoizedState=n},useTransition:function(){var n=mp(!1),e=n[0];return n=Yy.bind(null,n[1]),si().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=vt,r=si();if(dt){if(t===void 0)throw Error(ce(407));t=t()}else{if(t=e(),Ot===null)throw Error(ce(349));Vr&30||tv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,gp(iv.bind(null,i,s,n),[n]),i.flags|=2048,sa(9,nv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=si(),e=Ot.identifierPrefix;if(dt){var t=wi,i=Ei;t=(i&~(1<<32-ei(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=ia++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=$y++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Zy={readContext:Vn,useCallback:hv,useContext:Vn,useEffect:Vf,useImperativeHandle:uv,useInsertionEffect:av,useLayoutEffect:lv,useMemo:fv,useReducer:ou,useRef:ov,useState:function(){return ou(ra)},useDebugValue:Wf,useDeferredValue:function(n){var e=Wn();return dv(e,Ct.memoizedState,n)},useTransition:function(){var n=ou(ra)[0],e=Wn().memoizedState;return[n,e]},useMutableSource:Zg,useSyncExternalStore:ev,useId:pv,unstable_isNewReconciler:!1},eS={readContext:Vn,useCallback:hv,useContext:Vn,useEffect:Vf,useImperativeHandle:uv,useInsertionEffect:av,useLayoutEffect:lv,useMemo:fv,useReducer:au,useRef:ov,useState:function(){return au(ra)},useDebugValue:Wf,useDeferredValue:function(n){var e=Wn();return Ct===null?e.memoizedState=n:dv(e,Ct.memoizedState,n)},useTransition:function(){var n=au(ra)[0],e=Wn().memoizedState;return[n,e]},useMutableSource:Zg,useSyncExternalStore:ev,useId:pv,unstable_isNewReconciler:!1};function Yn(n,e){if(n&&n.defaultProps){e=_t({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Rh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:_t({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Mc={isMounted:function(n){return(n=n._reactInternals)?$r(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=nn(),r=tr(n),s=Ai(i,r);s.payload=e,t!=null&&(s.callback=t),e=Zi(n,s,r),e!==null&&(ti(e,n,r,i),wl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=nn(),r=tr(n),s=Ai(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Zi(n,s,r),e!==null&&(ti(e,n,r,i),wl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=nn(),i=tr(n),r=Ai(t,i);r.tag=2,e!=null&&(r.callback=e),e=Zi(n,r,i),e!==null&&(ti(e,n,i,t),wl(e,n,i))}};function vp(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Jo(t,i)||!Jo(r,s):!0}function _v(n,e,t){var i=!1,r=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vn(s):(r=mn(e)?Hr:Yt.current,i=e.contextTypes,s=(i=i!=null)?Ws(n,r):lr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function _p(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Mc.enqueueReplaceState(e,e.state,null)}function Ph(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Ff(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Vn(s):(s=mn(e)?Hr:Yt.current,r.context=Ws(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Mc.enqueueReplaceState(r,r.state,null),Yl(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function $s(n,e){try{var t="",i=e;do t+=bx(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function lu(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Lh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var tS=typeof WeakMap=="function"?WeakMap:Map;function xv(n,e,t){t=Ai(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){ec||(ec=!0,Hh=i),Lh(n,e)},t}function yv(n,e,t){t=Ai(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Lh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Lh(n,e),typeof i!="function"&&(er===null?er=new Set([this]):er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function xp(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new tS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=mS.bind(null,n,e,t),e.then(n,n))}function yp(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Sp(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Ai(-1,1),e.tag=2,Zi(t,e,1))),t.lanes|=1),n)}var nS=Ii.ReactCurrentOwner,fn=!1;function en(n,e,t,i){e.child=n===null?Yg(e,null,t,i):js(e,n.child,t,i)}function Mp(n,e,t,i,r){t=t.render;var s=e.ref;return zs(e,r),i=Hf(n,e,t,i,s,r),t=Gf(),n!==null&&!fn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Di(n,e,r)):(dt&&t&&Rf(e),e.flags|=1,en(n,e,i,r),e.child)}function Ep(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Qf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Sv(n,e,s,i,r)):(n=Pl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Jo,t(o,i)&&n.ref===e.ref)return Di(n,e,r)}return e.flags|=1,n=nr(s,i),n.ref=e.ref,n.return=e,e.child=n}function Sv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Jo(s,i)&&n.ref===e.ref)if(fn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(fn=!0);else return e.lanes=n.lanes,Di(n,e,r)}return Dh(n,e,t,i,r)}function Mv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(As,Mn),Mn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,lt(As,Mn),Mn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,lt(As,Mn),Mn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,lt(As,Mn),Mn|=i;return en(n,e,r,t),e.child}function Ev(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Dh(n,e,t,i,r){var s=mn(t)?Hr:Yt.current;return s=Ws(e,s),zs(e,r),t=Hf(n,e,t,i,s,r),i=Gf(),n!==null&&!fn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Di(n,e,r)):(dt&&i&&Rf(e),e.flags|=1,en(n,e,t,r),e.child)}function wp(n,e,t,i,r){if(mn(t)){var s=!0;Wl(e)}else s=!1;if(zs(e,r),e.stateNode===null)Cl(n,e),_v(e,t,i),Ph(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Vn(c):(c=mn(t)?Hr:Yt.current,c=Ws(e,c));var u=t.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&_p(e,o,i,c),Gi=!1;var d=e.memoizedState;o.state=d,Yl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||pn.current||Gi?(typeof u=="function"&&(Rh(e,t,u,i),l=e.memoizedState),(a=Gi||vp(e,t,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Jg(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Yn(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Vn(l):(l=mn(t)?Hr:Yt.current,l=Ws(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&_p(e,o,i,l),Gi=!1,d=e.memoizedState,o.state=d,Yl(e,i,o,r);var v=e.memoizedState;a!==h||d!==v||pn.current||Gi?(typeof p=="function"&&(Rh(e,t,p,i),v=e.memoizedState),(c=Gi||vp(e,t,c,i,d,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return Nh(n,e,t,i,s,r)}function Nh(n,e,t,i,r,s){Ev(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&cp(e,t,!1),Di(n,e,s);i=e.stateNode,nS.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=js(e,n.child,null,s),e.child=js(e,null,a,s)):en(n,e,a,s),e.memoizedState=i.state,r&&cp(e,t,!0),e.child}function wv(n){var e=n.stateNode;e.pendingContext?lp(n,e.pendingContext,e.pendingContext!==e.context):e.context&&lp(n,e.context,!1),Of(n,e.containerInfo)}function Tp(n,e,t,i,r){return Xs(),Lf(r),e.flags|=256,en(n,e,t,i),e.child}var Ih={dehydrated:null,treeContext:null,retryLane:0};function Uh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Tv(n,e,t){var i=e.pendingProps,r=mt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),lt(mt,r&1),n===null)return Ch(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Tc(o,i,0,null),n=Or(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Uh(t),e.memoizedState=Ih,n):Xf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return iS(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=nr(a,s):(s=Or(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Uh(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Ih,i}return s=n.child,n=s.sibling,i=nr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Xf(n,e){return e=Tc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Ua(n,e,t,i){return i!==null&&Lf(i),js(e,n.child,null,t),n=Xf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function iS(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=lu(Error(ce(422))),Ua(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Tc({mode:"visible",children:i.children},r,0,null),s=Or(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&js(e,n.child,null,o),e.child.memoizedState=Uh(o),e.memoizedState=Ih,s);if(!(e.mode&1))return Ua(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ce(419)),i=lu(s,i,void 0),Ua(n,e,o,i)}if(a=(o&n.childLanes)!==0,fn||a){if(i=Ot,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Li(n,r),ti(i,n,r,-1))}return Jf(),i=lu(Error(ce(421))),Ua(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=gS.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,En=Qi(r.nextSibling),wn=e,dt=!0,Jn=null,n!==null&&(Dn[Nn++]=Ei,Dn[Nn++]=wi,Dn[Nn++]=Gr,Ei=n.id,wi=n.overflow,Gr=e),e=Xf(e,i.children),e.flags|=4096,e)}function Ap(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),bh(n.return,e,t)}function cu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Av(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(en(n,e,i.children,t),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ap(n,t,e);else if(n.tag===19)Ap(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(lt(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Kl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),cu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Kl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}cu(e,!0,t,null,s);break;case"together":cu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Cl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Di(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Wr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ce(153));if(e.child!==null){for(n=e.child,t=nr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=nr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function rS(n,e,t){switch(e.tag){case 3:wv(e),Xs();break;case 5:Qg(e);break;case 1:mn(e.type)&&Wl(e);break;case 4:Of(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(ql,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(mt,mt.current&1),e.flags|=128,null):t&e.child.childLanes?Tv(n,e,t):(lt(mt,mt.current&1),n=Di(n,e,t),n!==null?n.sibling:null);lt(mt,mt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Av(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,Mv(n,e,t)}return Di(n,e,t)}var Cv,Fh,bv,Rv;Cv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Fh=function(){};bv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Dr(hi.current);var s=null;switch(t){case"input":r=rh(n,r),i=rh(n,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=ah(n,r),i=ah(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Gl)}ch(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Rv=function(n,e,t,i){t!==i&&(e.flags|=4)};function go(n,e){if(!dt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Xt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function sS(n,e,t){var i=e.pendingProps;switch(Pf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return mn(e.type)&&Vl(),Xt(e),null;case 3:return i=e.stateNode,qs(),ht(pn),ht(Yt),kf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Na(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jn!==null&&(Wh(Jn),Jn=null))),Fh(n,e),Xt(e),null;case 5:zf(e);var r=Dr(na.current);if(t=e.type,n!==null&&e.stateNode!=null)bv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return Xt(e),null}if(n=Dr(hi.current),Na(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[li]=e,i[ea]=s,n=(e.mode&1)!==0,t){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<Ro.length;r++)ut(Ro[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":Ud(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":Od(i,s),ut("invalid",i)}ch(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Da(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Da(i.textContent,a,n),r=["children",""+a]):Wo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ut("scroll",i)}switch(t){case"input":wa(i),Fd(i,s,!0);break;case"textarea":wa(i),zd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Gl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ig(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[li]=e,n[ea]=i,Cv(n,e,!1,!1),e.stateNode=n;e:{switch(o=uh(t,i),t){case"dialog":ut("cancel",n),ut("close",n),r=i;break;case"iframe":case"object":case"embed":ut("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ro.length;r++)ut(Ro[r],n);r=i;break;case"source":ut("error",n),r=i;break;case"img":case"image":case"link":ut("error",n),ut("load",n),r=i;break;case"details":ut("toggle",n),r=i;break;case"input":Ud(n,i),r=rh(n,i),ut("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),ut("invalid",n);break;case"textarea":Od(n,i),r=ah(n,i),ut("invalid",n);break;default:r=i}ch(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?og(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&rg(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Xo(n,l):typeof l=="number"&&Xo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",n):l!=null&&mf(n,s,l,o))}switch(t){case"input":wa(n),Fd(n,i,!1);break;case"textarea":wa(n),zd(n);break;case"option":i.value!=null&&n.setAttribute("value",""+ar(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Is(n,!!i.multiple,s,!1):i.defaultValue!=null&&Is(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Gl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(n&&e.stateNode!=null)Rv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(t=Dr(na.current),Dr(hi.current),Na(e)){if(i=e.stateNode,t=e.memoizedProps,i[li]=e,(s=i.nodeValue!==t)&&(n=wn,n!==null))switch(n.tag){case 3:Da(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Da(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[li]=e,e.stateNode=i}return Xt(e),null;case 13:if(ht(mt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(dt&&En!==null&&e.mode&1&&!(e.flags&128))qg(),Xs(),e.flags|=98560,s=!1;else if(s=Na(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[li]=e}else Xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else Jn!==null&&(Wh(Jn),Jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||mt.current&1?bt===0&&(bt=3):Jf())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return qs(),Fh(n,e),n===null&&Qo(e.stateNode.containerInfo),Xt(e),null;case 10:return If(e.type._context),Xt(e),null;case 17:return mn(e.type)&&Vl(),Xt(e),null;case 19:if(ht(mt),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)go(s,!1);else{if(bt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Kl(n),o!==null){for(e.flags|=128,go(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return lt(mt,mt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Mt()>Ys&&(e.flags|=128,i=!0,go(s,!1),e.lanes=4194304)}else{if(!i)if(n=Kl(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),go(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!dt)return Xt(e),null}else 2*Mt()-s.renderingStartTime>Ys&&t!==1073741824&&(e.flags|=128,i=!0,go(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,t=mt.current,lt(mt,i?t&1|2:t&1),e):(Xt(e),null);case 22:case 23:return Kf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function oS(n,e){switch(Pf(e),e.tag){case 1:return mn(e.type)&&Vl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return qs(),ht(pn),ht(Yt),kf(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return zf(e),null;case 13:if(ht(mt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Xs()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ht(mt),null;case 4:return qs(),null;case 10:return If(e.type._context),null;case 22:case 23:return Kf(),null;case 24:return null;default:return null}}var Fa=!1,$t=!1,aS=typeof WeakSet=="function"?WeakSet:Set,we=null;function Ts(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){yt(n,e,i)}else t.current=null}function Oh(n,e,t){try{t()}catch(i){yt(n,e,i)}}var Cp=!1;function lS(n,e){if(yh=kl,n=Ig(),bf(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=n,d=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===n)break t;if(d===t&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Sh={focusedElem:n,selectionRange:t},kl=!1,we=e;we!==null;)if(e=we,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,we=n;else for(;we!==null;){e=we;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:Yn(e.type,x),m);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(y){yt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}return v=Cp,Cp=!1,v}function Oo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Oh(e,t,s)}r=r.next}while(r!==i)}}function Ec(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function zh(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Pv(n){var e=n.alternate;e!==null&&(n.alternate=null,Pv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[li],delete e[ea],delete e[wh],delete e[Wy],delete e[Xy])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Lv(n){return n.tag===5||n.tag===3||n.tag===4}function bp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Lv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function kh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Gl));else if(i!==4&&(n=n.child,n!==null))for(kh(n,e,t),n=n.sibling;n!==null;)kh(n,e,t),n=n.sibling}function Bh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Bh(n,e,t),n=n.sibling;n!==null;)Bh(n,e,t),n=n.sibling}var kt=null,Kn=!1;function Ui(n,e,t){for(t=t.child;t!==null;)Dv(n,e,t),t=t.sibling}function Dv(n,e,t){if(ui&&typeof ui.onCommitFiberUnmount=="function")try{ui.onCommitFiberUnmount(mc,t)}catch{}switch(t.tag){case 5:$t||Ts(t,e);case 6:var i=kt,r=Kn;kt=null,Ui(n,e,t),kt=i,Kn=r,kt!==null&&(Kn?(n=kt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):kt.removeChild(t.stateNode));break;case 18:kt!==null&&(Kn?(n=kt,t=t.stateNode,n.nodeType===8?nu(n.parentNode,t):n.nodeType===1&&nu(n,t),Yo(n)):nu(kt,t.stateNode));break;case 4:i=kt,r=Kn,kt=t.stateNode.containerInfo,Kn=!0,Ui(n,e,t),kt=i,Kn=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Oh(t,e,o),r=r.next}while(r!==i)}Ui(n,e,t);break;case 1:if(!$t&&(Ts(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){yt(t,e,a)}Ui(n,e,t);break;case 21:Ui(n,e,t);break;case 22:t.mode&1?($t=(i=$t)||t.memoizedState!==null,Ui(n,e,t),$t=i):Ui(n,e,t);break;default:Ui(n,e,t)}}function Rp(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new aS),e.forEach(function(i){var r=vS.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Xn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,Kn=!1;break e;case 3:kt=a.stateNode.containerInfo,Kn=!0;break e;case 4:kt=a.stateNode.containerInfo,Kn=!0;break e}a=a.return}if(kt===null)throw Error(ce(160));Dv(s,o,r),kt=null,Kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){yt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Nv(e,n),e=e.sibling}function Nv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Xn(e,n),ri(n),i&4){try{Oo(3,n,n.return),Ec(3,n)}catch(x){yt(n,n.return,x)}try{Oo(5,n,n.return)}catch(x){yt(n,n.return,x)}}break;case 1:Xn(e,n),ri(n),i&512&&t!==null&&Ts(t,t.return);break;case 5:if(Xn(e,n),ri(n),i&512&&t!==null&&Ts(t,t.return),n.flags&32){var r=n.stateNode;try{Xo(r,"")}catch(x){yt(n,n.return,x)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&tg(r,s),uh(a,o);var c=uh(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?og(r,h):u==="dangerouslySetInnerHTML"?rg(r,h):u==="children"?Xo(r,h):mf(r,u,h,c)}switch(a){case"input":sh(r,s);break;case"textarea":ng(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Is(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Is(r,!!s.multiple,s.defaultValue,!0):Is(r,!!s.multiple,s.multiple?[]:"",!1))}r[ea]=s}catch(x){yt(n,n.return,x)}}break;case 6:if(Xn(e,n),ri(n),i&4){if(n.stateNode===null)throw Error(ce(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(x){yt(n,n.return,x)}}break;case 3:if(Xn(e,n),ri(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Yo(e.containerInfo)}catch(x){yt(n,n.return,x)}break;case 4:Xn(e,n),ri(n);break;case 13:Xn(e,n),ri(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||($f=Mt())),i&4&&Rp(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?($t=(c=$t)||u,Xn(e,n),$t=c):Xn(e,n),ri(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(we=n,u=n.child;u!==null;){for(h=we=u;we!==null;){switch(d=we,p=d.child,d.tag){case 0:case 11:case 14:case 15:Oo(4,d,d.return);break;case 1:Ts(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){yt(i,t,x)}}break;case 5:Ts(d,d.return);break;case 22:if(d.memoizedState!==null){Lp(h);continue}}p!==null?(p.return=d,we=p):Lp(h)}u=u.sibling}e:for(u=null,h=n;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=sg("display",o))}catch(x){yt(n,n.return,x)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){yt(n,n.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Xn(e,n),ri(n),i&4&&Rp(n);break;case 21:break;default:Xn(e,n),ri(n)}}function ri(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Lv(t)){var i=t;break e}t=t.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Xo(r,""),i.flags&=-33);var s=bp(n);Bh(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=bp(n);kh(n,a,o);break;default:throw Error(ce(161))}}catch(l){yt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function cS(n,e,t){we=n,Iv(n)}function Iv(n,e,t){for(var i=(n.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Fa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||$t;a=Fa;var c=$t;if(Fa=o,($t=l)&&!c)for(we=r;we!==null;)o=we,l=o.child,o.tag===22&&o.memoizedState!==null?Dp(r):l!==null?(l.return=o,we=l):Dp(r);for(;s!==null;)we=s,Iv(s),s=s.sibling;we=r,Fa=a,$t=c}Pp(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):Pp(n)}}function Pp(n){for(;we!==null;){var e=we;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||Ec(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Yn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&pp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}pp(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Yo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}$t||e.flags&512&&zh(e)}catch(d){yt(e,e.return,d)}}if(e===n){we=null;break}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}}function Lp(n){for(;we!==null;){var e=we;if(e===n){we=null;break}var t=e.sibling;if(t!==null){t.return=e.return,we=t;break}we=e.return}}function Dp(n){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Ec(4,e)}catch(l){yt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{zh(e)}catch(l){yt(e,s,l)}break;case 5:var o=e.return;try{zh(e)}catch(l){yt(e,o,l)}}}catch(l){yt(e,e.return,l)}if(e===n){we=null;break}var a=e.sibling;if(a!==null){a.return=e.return,we=a;break}we=e.return}}var uS=Math.ceil,Zl=Ii.ReactCurrentDispatcher,jf=Ii.ReactCurrentOwner,Bn=Ii.ReactCurrentBatchConfig,Qe=0,Ot=null,wt=null,Ht=0,Mn=0,As=fr(0),bt=0,oa=null,Wr=0,wc=0,qf=0,zo=null,cn=null,$f=0,Ys=1/0,Si=null,ec=!1,Hh=null,er=null,Oa=!1,ji=null,tc=0,ko=0,Gh=null,bl=-1,Rl=0;function nn(){return Qe&6?Mt():bl!==-1?bl:bl=Mt()}function tr(n){return n.mode&1?Qe&2&&Ht!==0?Ht&-Ht:qy.transition!==null?(Rl===0&&(Rl=_g()),Rl):(n=nt,n!==0||(n=window.event,n=n===void 0?16:Tg(n.type)),n):1}function ti(n,e,t,i){if(50<ko)throw ko=0,Gh=null,Error(ce(185));pa(n,t,i),(!(Qe&2)||n!==Ot)&&(n===Ot&&(!(Qe&2)&&(wc|=t),bt===4&&Wi(n,Ht)),gn(n,i),t===1&&Qe===0&&!(e.mode&1)&&(Ys=Mt()+500,yc&&dr()))}function gn(n,e){var t=n.callbackNode;qx(n,e);var i=zl(n,n===Ot?Ht:0);if(i===0)t!==null&&Hd(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Hd(t),e===1)n.tag===0?jy(Np.bind(null,n)):Wg(Np.bind(null,n)),Gy(function(){!(Qe&6)&&dr()}),t=null;else{switch(xg(i)){case 1:t=yf;break;case 4:t=gg;break;case 16:t=Ol;break;case 536870912:t=vg;break;default:t=Ol}t=Gv(t,Uv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Uv(n,e){if(bl=-1,Rl=0,Qe&6)throw Error(ce(327));var t=n.callbackNode;if(ks()&&n.callbackNode!==t)return null;var i=zl(n,n===Ot?Ht:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=nc(n,i);else{e=i;var r=Qe;Qe|=2;var s=Ov();(Ot!==n||Ht!==e)&&(Si=null,Ys=Mt()+500,Fr(n,e));do try{dS();break}catch(a){Fv(n,a)}while(!0);Nf(),Zl.current=s,Qe=r,wt!==null?e=0:(Ot=null,Ht=0,e=bt)}if(e!==0){if(e===2&&(r=mh(n),r!==0&&(i=r,e=Vh(n,r))),e===1)throw t=oa,Fr(n,0),Wi(n,i),gn(n,Mt()),t;if(e===6)Wi(n,i);else{if(r=n.current.alternate,!(i&30)&&!hS(r)&&(e=nc(n,i),e===2&&(s=mh(n),s!==0&&(i=s,e=Vh(n,s))),e===1))throw t=oa,Fr(n,0),Wi(n,i),gn(n,Mt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:wr(n,cn,Si);break;case 3:if(Wi(n,i),(i&130023424)===i&&(e=$f+500-Mt(),10<e)){if(zl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){nn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Eh(wr.bind(null,n,cn,Si),e);break}wr(n,cn,Si);break;case 4:if(Wi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-ei(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*uS(i/1960))-i,10<i){n.timeoutHandle=Eh(wr.bind(null,n,cn,Si),i);break}wr(n,cn,Si);break;case 5:wr(n,cn,Si);break;default:throw Error(ce(329))}}}return gn(n,Mt()),n.callbackNode===t?Uv.bind(null,n):null}function Vh(n,e){var t=zo;return n.current.memoizedState.isDehydrated&&(Fr(n,e).flags|=256),n=nc(n,e),n!==2&&(e=cn,cn=t,e!==null&&Wh(e)),n}function Wh(n){cn===null?cn=n:cn.push.apply(cn,n)}function hS(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ni(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wi(n,e){for(e&=~qf,e&=~wc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ei(e),i=1<<t;n[t]=-1,e&=~i}}function Np(n){if(Qe&6)throw Error(ce(327));ks();var e=zl(n,0);if(!(e&1))return gn(n,Mt()),null;var t=nc(n,e);if(n.tag!==0&&t===2){var i=mh(n);i!==0&&(e=i,t=Vh(n,i))}if(t===1)throw t=oa,Fr(n,0),Wi(n,e),gn(n,Mt()),t;if(t===6)throw Error(ce(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,wr(n,cn,Si),gn(n,Mt()),null}function Yf(n,e){var t=Qe;Qe|=1;try{return n(e)}finally{Qe=t,Qe===0&&(Ys=Mt()+500,yc&&dr())}}function Xr(n){ji!==null&&ji.tag===0&&!(Qe&6)&&ks();var e=Qe;Qe|=1;var t=Bn.transition,i=nt;try{if(Bn.transition=null,nt=1,n)return n()}finally{nt=i,Bn.transition=t,Qe=e,!(Qe&6)&&dr()}}function Kf(){Mn=As.current,ht(As)}function Fr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Hy(t)),wt!==null)for(t=wt.return;t!==null;){var i=t;switch(Pf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Vl();break;case 3:qs(),ht(pn),ht(Yt),kf();break;case 5:zf(i);break;case 4:qs();break;case 13:ht(mt);break;case 19:ht(mt);break;case 10:If(i.type._context);break;case 22:case 23:Kf()}t=t.return}if(Ot=n,wt=n=nr(n.current,null),Ht=Mn=e,bt=0,oa=null,qf=wc=Wr=0,cn=zo=null,Lr!==null){for(e=0;e<Lr.length;e++)if(t=Lr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Lr=null}return n}function Fv(n,e){do{var t=wt;try{if(Nf(),Tl.current=Ql,Jl){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Jl=!1}if(Vr=0,It=Ct=vt=null,Fo=!1,ia=0,jf.current=null,t===null||t.return===null){bt=1,oa=e,wt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=yp(o);if(p!==null){p.flags&=-257,Sp(p,o,a,s,e),p.mode&1&&xp(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){xp(s,c,e),Jf();break e}l=Error(ce(426))}}else if(dt&&a.mode&1){var m=yp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Sp(m,o,a,s,e),Lf($s(l,a));break e}}s=l=$s(l,a),bt!==4&&(bt=2),zo===null?zo=[s]:zo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=xv(s,l,e);dp(s,f);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(er===null||!er.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=yv(s,a,e);dp(s,y);break e}}s=s.return}while(s!==null)}kv(t)}catch(P){e=P,wt===t&&t!==null&&(wt=t=t.return);continue}break}while(!0)}function Ov(){var n=Zl.current;return Zl.current=Ql,n===null?Ql:n}function Jf(){(bt===0||bt===3||bt===2)&&(bt=4),Ot===null||!(Wr&268435455)&&!(wc&268435455)||Wi(Ot,Ht)}function nc(n,e){var t=Qe;Qe|=2;var i=Ov();(Ot!==n||Ht!==e)&&(Si=null,Fr(n,e));do try{fS();break}catch(r){Fv(n,r)}while(!0);if(Nf(),Qe=t,Zl.current=i,wt!==null)throw Error(ce(261));return Ot=null,Ht=0,bt}function fS(){for(;wt!==null;)zv(wt)}function dS(){for(;wt!==null&&!zx();)zv(wt)}function zv(n){var e=Hv(n.alternate,n,Mn);n.memoizedProps=n.pendingProps,e===null?kv(n):wt=e,jf.current=null}function kv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=oS(t,e),t!==null){t.flags&=32767,wt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{bt=6,wt=null;return}}else if(t=sS(t,e,Mn),t!==null){wt=t;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=n}while(e!==null);bt===0&&(bt=5)}function wr(n,e,t){var i=nt,r=Bn.transition;try{Bn.transition=null,nt=1,pS(n,e,t,i)}finally{Bn.transition=r,nt=i}return null}function pS(n,e,t,i){do ks();while(ji!==null);if(Qe&6)throw Error(ce(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ce(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if($x(n,s),n===Ot&&(wt=Ot=null,Ht=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Oa||(Oa=!0,Gv(Ol,function(){return ks(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Bn.transition,Bn.transition=null;var o=nt;nt=1;var a=Qe;Qe|=4,jf.current=null,lS(n,t),Nv(t,n),Iy(Sh),kl=!!yh,Sh=yh=null,n.current=t,cS(t),kx(),Qe=a,nt=o,Bn.transition=s}else n.current=t;if(Oa&&(Oa=!1,ji=n,tc=r),s=n.pendingLanes,s===0&&(er=null),Gx(t.stateNode),gn(n,Mt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(ec)throw ec=!1,n=Hh,Hh=null,n;return tc&1&&n.tag!==0&&ks(),s=n.pendingLanes,s&1?n===Gh?ko++:(ko=0,Gh=n):ko=0,dr(),null}function ks(){if(ji!==null){var n=xg(tc),e=Bn.transition,t=nt;try{if(Bn.transition=null,nt=16>n?16:n,ji===null)var i=!1;else{if(n=ji,ji=null,tc=0,Qe&6)throw Error(ce(331));var r=Qe;for(Qe|=4,we=n.current;we!==null;){var s=we,o=s.child;if(we.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(we=c;we!==null;){var u=we;switch(u.tag){case 0:case 11:case 15:Oo(8,u,s)}var h=u.child;if(h!==null)h.return=u,we=h;else for(;we!==null;){u=we;var d=u.sibling,p=u.return;if(Pv(u),u===c){we=null;break}if(d!==null){d.return=p,we=d;break}we=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}we=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,we=o;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,we=f;break e}we=s.return}}var _=n.current;for(we=_;we!==null;){o=we;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,we=g;else e:for(o=_;we!==null;){if(a=we,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ec(9,a)}}catch(P){yt(a,a.return,P)}if(a===o){we=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,we=y;break e}we=a.return}}if(Qe=r,dr(),ui&&typeof ui.onPostCommitFiberRoot=="function")try{ui.onPostCommitFiberRoot(mc,n)}catch{}i=!0}return i}finally{nt=t,Bn.transition=e}}return!1}function Ip(n,e,t){e=$s(t,e),e=xv(n,e,1),n=Zi(n,e,1),e=nn(),n!==null&&(pa(n,1,e),gn(n,e))}function yt(n,e,t){if(n.tag===3)Ip(n,n,t);else for(;e!==null;){if(e.tag===3){Ip(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(er===null||!er.has(i))){n=$s(t,n),n=yv(e,n,1),e=Zi(e,n,1),n=nn(),e!==null&&(pa(e,1,n),gn(e,n));break}}e=e.return}}function mS(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=nn(),n.pingedLanes|=n.suspendedLanes&t,Ot===n&&(Ht&t)===t&&(bt===4||bt===3&&(Ht&130023424)===Ht&&500>Mt()-$f?Fr(n,0):qf|=t),gn(n,e)}function Bv(n,e){e===0&&(n.mode&1?(e=Ca,Ca<<=1,!(Ca&130023424)&&(Ca=4194304)):e=1);var t=nn();n=Li(n,e),n!==null&&(pa(n,e,t),gn(n,t))}function gS(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Bv(n,t)}function vS(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),Bv(n,t)}var Hv;Hv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||pn.current)fn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return fn=!1,rS(n,e,t);fn=!!(n.flags&131072)}else fn=!1,dt&&e.flags&1048576&&Xg(e,jl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Cl(n,e),n=e.pendingProps;var r=Ws(e,Yt.current);zs(e,t),r=Hf(null,e,i,n,r,t);var s=Gf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(s=!0,Wl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ff(e),r.updater=Mc,e.stateNode=r,r._reactInternals=e,Ph(e,i,n,t),e=Nh(null,e,i,!0,s,t)):(e.tag=0,dt&&s&&Rf(e),en(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Cl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=xS(i),n=Yn(i,n),r){case 0:e=Dh(null,e,i,n,t);break e;case 1:e=wp(null,e,i,n,t);break e;case 11:e=Mp(null,e,i,n,t);break e;case 14:e=Ep(null,e,i,Yn(i.type,n),t);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Dh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),wp(n,e,i,r,t);case 3:e:{if(wv(e),n===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Jg(n,e),Yl(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=$s(Error(ce(423)),e),e=Tp(n,e,i,t,r);break e}else if(i!==r){r=$s(Error(ce(424)),e),e=Tp(n,e,i,t,r);break e}else for(En=Qi(e.stateNode.containerInfo.firstChild),wn=e,dt=!0,Jn=null,t=Yg(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Xs(),i===r){e=Di(n,e,t);break e}en(n,e,i,t)}e=e.child}return e;case 5:return Qg(e),n===null&&Ch(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Mh(i,r)?o=null:s!==null&&Mh(i,s)&&(e.flags|=32),Ev(n,e),en(n,e,o,t),e.child;case 6:return n===null&&Ch(e),null;case 13:return Tv(n,e,t);case 4:return Of(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=js(e,null,i,t):en(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Mp(n,e,i,r,t);case 7:return en(n,e,e.pendingProps,t),e.child;case 8:return en(n,e,e.pendingProps.children,t),e.child;case 12:return en(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,lt(ql,i._currentValue),i._currentValue=o,s!==null)if(ni(s.value,o)){if(s.children===r.children&&!pn.current){e=Di(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ai(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),bh(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ce(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),bh(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}en(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,zs(e,t),r=Vn(r),i=i(r),e.flags|=1,en(n,e,i,t),e.child;case 14:return i=e.type,r=Yn(i,e.pendingProps),r=Yn(i.type,r),Ep(n,e,i,r,t);case 15:return Sv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Cl(n,e),e.tag=1,mn(i)?(n=!0,Wl(e)):n=!1,zs(e,t),_v(e,i,r),Ph(e,i,r,t),Nh(null,e,i,!0,n,t);case 19:return Av(n,e,t);case 22:return Mv(n,e,t)}throw Error(ce(156,e.tag))};function Gv(n,e){return mg(n,e)}function _S(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(n,e,t,i){return new _S(n,e,t,i)}function Qf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function xS(n){if(typeof n=="function")return Qf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===vf)return 11;if(n===_f)return 14}return 2}function nr(n,e){var t=n.alternate;return t===null?(t=kn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Pl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Qf(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case gs:return Or(t.children,r,s,e);case gf:o=8,r|=8;break;case eh:return n=kn(12,t,e,r|2),n.elementType=eh,n.lanes=s,n;case th:return n=kn(13,t,e,r),n.elementType=th,n.lanes=s,n;case nh:return n=kn(19,t,e,r),n.elementType=nh,n.lanes=s,n;case Q0:return Tc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case K0:o=10;break e;case J0:o=9;break e;case vf:o=11;break e;case _f:o=14;break e;case Hi:o=16,i=null;break e}throw Error(ce(130,n==null?n:typeof n,""))}return e=kn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Or(n,e,t,i){return n=kn(7,n,i,e),n.lanes=t,n}function Tc(n,e,t,i){return n=kn(22,n,i,e),n.elementType=Q0,n.lanes=t,n.stateNode={isHidden:!1},n}function uu(n,e,t){return n=kn(6,n,null,e),n.lanes=t,n}function hu(n,e,t){return e=kn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function yS(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xc(0),this.expirationTimes=Xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Zf(n,e,t,i,r,s,o,a,l){return n=new yS(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ff(s),n}function SS(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ms,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Vv(n){if(!n)return lr;n=n._reactInternals;e:{if($r(n)!==n||n.tag!==1)throw Error(ce(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(n.tag===1){var t=n.type;if(mn(t))return Vg(n,t,e)}return e}function Wv(n,e,t,i,r,s,o,a,l){return n=Zf(t,i,!0,n,r,s,o,a,l),n.context=Vv(null),t=n.current,i=nn(),r=tr(t),s=Ai(i,r),s.callback=e??null,Zi(t,s,r),n.current.lanes=r,pa(n,r,i),gn(n,i),n}function Ac(n,e,t,i){var r=e.current,s=nn(),o=tr(r);return t=Vv(t),e.context===null?e.context=t:e.pendingContext=t,e=Ai(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Zi(r,e,o),n!==null&&(ti(n,r,o,s),wl(n,r,o)),o}function ic(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Up(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function ed(n,e){Up(n,e),(n=n.alternate)&&Up(n,e)}function MS(){return null}var Xv=typeof reportError=="function"?reportError:function(n){console.error(n)};function td(n){this._internalRoot=n}Cc.prototype.render=td.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ce(409));Ac(n,e,null,null)};Cc.prototype.unmount=td.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Xr(function(){Ac(null,n,null,null)}),e[Pi]=null}};function Cc(n){this._internalRoot=n}Cc.prototype.unstable_scheduleHydration=function(n){if(n){var e=Mg();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Vi.length&&e!==0&&e<Vi[t].priority;t++);Vi.splice(t,0,n),t===0&&wg(n)}};function nd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function bc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Fp(){}function ES(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=ic(o);s.call(c)}}var o=Wv(e,i,n,0,null,!1,!1,"",Fp);return n._reactRootContainer=o,n[Pi]=o.current,Qo(n.nodeType===8?n.parentNode:n),Xr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=ic(l);a.call(c)}}var l=Zf(n,0,!1,null,null,!1,!1,"",Fp);return n._reactRootContainer=l,n[Pi]=l.current,Qo(n.nodeType===8?n.parentNode:n),Xr(function(){Ac(e,l,t,i)}),l}function Rc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ic(o);a.call(l)}}Ac(e,o,n,r)}else o=ES(t,e,n,r,i);return ic(o)}yg=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=bo(e.pendingLanes);t!==0&&(Sf(e,t|1),gn(e,Mt()),!(Qe&6)&&(Ys=Mt()+500,dr()))}break;case 13:Xr(function(){var i=Li(n,1);if(i!==null){var r=nn();ti(i,n,1,r)}}),ed(n,1)}};Mf=function(n){if(n.tag===13){var e=Li(n,134217728);if(e!==null){var t=nn();ti(e,n,134217728,t)}ed(n,134217728)}};Sg=function(n){if(n.tag===13){var e=tr(n),t=Li(n,e);if(t!==null){var i=nn();ti(t,n,e,i)}ed(n,e)}};Mg=function(){return nt};Eg=function(n,e){var t=nt;try{return nt=n,e()}finally{nt=t}};fh=function(n,e,t){switch(e){case"input":if(sh(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=xc(i);if(!r)throw Error(ce(90));eg(i),sh(i,r)}}}break;case"textarea":ng(n,t);break;case"select":e=t.value,e!=null&&Is(n,!!t.multiple,e,!1)}};cg=Yf;ug=Xr;var wS={usingClientEntryPoint:!1,Events:[ga,ys,xc,ag,lg,Yf]},vo={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},TS={bundleType:vo.bundleType,version:vo.version,rendererPackageName:vo.rendererPackageName,rendererConfig:vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ii.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=dg(n),n===null?null:n.stateNode},findFiberByHostInstance:vo.findFiberByHostInstance||MS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!za.isDisabled&&za.supportsFiber)try{mc=za.inject(TS),ui=za}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wS;An.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nd(e))throw Error(ce(200));return SS(n,e,null,t)};An.createRoot=function(n,e){if(!nd(n))throw Error(ce(299));var t=!1,i="",r=Xv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Zf(n,1,!1,null,null,t,!1,i,r),n[Pi]=e.current,Qo(n.nodeType===8?n.parentNode:n),new td(e)};An.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ce(188)):(n=Object.keys(n).join(","),Error(ce(268,n)));return n=dg(e),n=n===null?null:n.stateNode,n};An.flushSync=function(n){return Xr(n)};An.hydrate=function(n,e,t){if(!bc(e))throw Error(ce(200));return Rc(null,n,e,!0,t)};An.hydrateRoot=function(n,e,t){if(!nd(n))throw Error(ce(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Xv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Wv(e,null,n,1,t??null,r,!1,s,o),n[Pi]=e.current,Qo(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Cc(e)};An.render=function(n,e,t){if(!bc(e))throw Error(ce(200));return Rc(null,n,e,!1,t)};An.unmountComponentAtNode=function(n){if(!bc(n))throw Error(ce(40));return n._reactRootContainer?(Xr(function(){Rc(null,null,n,!1,function(){n._reactRootContainer=null,n[Pi]=null})}),!0):!1};An.unstable_batchedUpdates=Yf;An.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!bc(t))throw Error(ce(200));if(n==null||n._reactInternals===void 0)throw Error(ce(38));return Rc(n,e,t,!1,i)};An.version="18.3.1-next-f1338f8080-20240426";function jv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jv)}catch(n){console.error(n)}}jv(),j0.exports=An;var AS=j0.exports,qv,Op=AS;qv=Op.createRoot,Op.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const id="160",CS=0,zp=1,bS=2,$v=1,Yv=2,yi=3,cr=0,vn=1,hn=2,Ci=0,Bs=1,Xh=2,kp=3,Bp=4,RS=5,Cr=100,PS=101,LS=102,Hp=103,Gp=104,DS=200,NS=201,IS=202,US=203,jh=204,qh=205,FS=206,OS=207,zS=208,kS=209,BS=210,HS=211,GS=212,VS=213,WS=214,XS=0,jS=1,qS=2,rc=3,$S=4,YS=5,KS=6,JS=7,rd=0,QS=1,ZS=2,ir=0,Kv=1,Jv=2,Qv=3,sd=4,eM=5,Zv=6,e_=300,Ks=301,Js=302,$h=303,Yh=304,Pc=306,sc=1e3,Qn=1001,Kh=1002,tn=1003,Vp=1004,fu=1005,In=1006,tM=1007,aa=1008,rr=1009,nM=1010,iM=1011,od=1012,t_=1013,qi=1014,$i=1015,fi=1016,n_=1017,i_=1018,zr=1020,rM=1021,Zn=1023,sM=1024,oM=1025,kr=1026,Qs=1027,aM=1028,r_=1029,lM=1030,s_=1031,o_=1033,du=33776,pu=33777,mu=33778,gu=33779,Wp=35840,Xp=35841,jp=35842,qp=35843,a_=36196,$p=37492,Yp=37496,Kp=37808,Jp=37809,Qp=37810,Zp=37811,em=37812,tm=37813,nm=37814,im=37815,rm=37816,sm=37817,om=37818,am=37819,lm=37820,cm=37821,vu=36492,um=36494,hm=36495,cM=36283,fm=36284,dm=36285,pm=36286,l_=3e3,Br=3001,uM=3200,hM=3201,ad=0,fM=1,On="",Ut="srgb",Ni="srgb-linear",ld="display-p3",Lc="display-p3-linear",oc="linear",at="srgb",ac="rec709",lc="p3",Qr=7680,mm=519,dM=512,pM=513,mM=514,c_=515,gM=516,vM=517,_M=518,xM=519,gm=35044,vm="300 es",Jh=1035,Ti=2e3,cc=2001;class ro{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ll=Math.PI/180,Qh=180/Math.PI;function so(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function Bt(n,e,t){return Math.max(e,Math.min(t,n))}function yM(n,e){return(n%e+e)%e}function _u(n,e,t){return(1-t)*n+t*e}function _m(n){return(n&n-1)===0&&n!==0}function Zh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function _o(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function on(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,i,r,s,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],v=i[8],x=r[0],m=r[3],f=r[6],_=r[1],g=r[4],y=r[7],P=r[2],E=r[5],w=r[8];return s[0]=o*x+a*_+l*P,s[3]=o*m+a*g+l*E,s[6]=o*f+a*y+l*w,s[1]=c*x+u*_+h*P,s[4]=c*m+u*g+h*E,s[7]=c*f+u*y+h*w,s[2]=d*x+p*_+v*P,s[5]=d*m+p*g+v*E,s[8]=d*f+p*y+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,v=t*h+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=h*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xu.makeScale(e,t)),this}rotate(e){return this.premultiply(xu.makeRotation(-e)),this}translate(e,t){return this.premultiply(xu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xu=new Ye;function u_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function uc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function SM(){const n=uc("canvas");return n.style.display="block",n}const xm={};function Bo(n){n in xm||(xm[n]=!0,console.warn(n))}const ym=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sm=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ka={[Ni]:{transfer:oc,primaries:ac,toReference:n=>n,fromReference:n=>n},[Ut]:{transfer:at,primaries:ac,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Lc]:{transfer:oc,primaries:lc,toReference:n=>n.applyMatrix3(Sm),fromReference:n=>n.applyMatrix3(ym)},[ld]:{transfer:at,primaries:lc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Sm),fromReference:n=>n.applyMatrix3(ym).convertLinearToSRGB()}},MM=new Set([Ni,Lc]),tt={enabled:!0,_workingColorSpace:Ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!MM.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ka[e].toReference,r=ka[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ka[n].primaries},getTransfer:function(n){return n===On?oc:ka[n].transfer}};function Hs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function yu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zr;class h_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zr===void 0&&(Zr=uc("canvas")),Zr.width=e.width,Zr.height=e.height;const i=Zr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Zr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=uc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hs(t[i]/255)*255):t[i]=Hs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let EM=0;class f_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=so(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Su(r[o].image)):s.push(Su(r[o]))}else s=Su(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Su(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?h_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wM=0;class _n extends ro{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,i=Qn,r=Qn,s=In,o=aa,a=Zn,l=rr,c=_n.DEFAULT_ANISOTROPY,u=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=so(),this.name="",this.source=new f_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Br?Ut:On),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==e_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sc:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case Kh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sc:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case Kh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ut?Br:l_}set encoding(e){Bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Br?Ut:On}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=e_;_n.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],v=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(c+1)/2,y=(p+1)/2,P=(f+1)/2,E=(u+d)/4,w=(h+x)/4,D=(v+m)/4;return g>y&&g>P?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=E/i,s=w/i):y>P?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=E/r,s=D/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=w/s,r=D/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-v)*(m-v)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(h-x)/_,this.z=(d-u)/_,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TM extends ro{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Bo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Br?Ut:On),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new _n(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new f_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends TM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class d_ extends _n{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class AM extends _n{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _a{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=v,e[t+3]=x;return}if(h!==x||l!==d||c!==p||u!==v){let m=1-a;const f=l*d+c*p+u*v+h*x,_=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const P=Math.sqrt(g),E=Math.atan2(P,f*_);m=Math.sin(m*E)/P,a=Math.sin(a*E)/P}const y=a*_;if(l=l*m+d*y,c=c*m+p*y,u=u*m+v*y,h=h*m+x*y,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+u*h+l*p-c*d,e[t+1]=l*v+u*d+c*h-a*p,e[t+2]=c*v+u*p+a*d-l*h,e[t+3]=u*v-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h-d*p*v;break;case"YXZ":this._x=d*u*h+c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h+d*p*v;break;case"ZXY":this._x=d*u*h-c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h-d*p*v;break;case"ZYX":this._x=d*u*h-c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h+d*p*v;break;case"YZX":this._x=d*u*h+c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h-d*p*v;break;case"XZY":this._x=d*u*h-c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mu.copy(this).projectOnVector(e),this.sub(Mu)}reflect(e){return this.sub(Mu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mu=new I,Mm=new _a;class Yr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(s,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ba.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ba.copy(i.boundingBox)),Ba.applyMatrix4(e.matrixWorld),this.union(Ba)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xo),Ha.subVectors(this.max,xo),es.subVectors(e.a,xo),ts.subVectors(e.b,xo),ns.subVectors(e.c,xo),Fi.subVectors(ts,es),Oi.subVectors(ns,ts),vr.subVectors(es,ns);let t=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-vr.z,vr.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,vr.z,0,-vr.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-vr.y,vr.x,0];return!Eu(t,es,ts,ns,Ha)||(t=[1,0,0,0,1,0,0,0,1],!Eu(t,es,ts,ns,Ha))?!1:(Ga.crossVectors(Fi,Oi),t=[Ga.x,Ga.y,Ga.z],Eu(t,es,ts,ns,Ha))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new I,new I,new I,new I,new I,new I,new I,new I],jn=new I,Ba=new Yr,es=new I,ts=new I,ns=new I,Fi=new I,Oi=new I,vr=new I,xo=new I,Ha=new I,Ga=new I,_r=new I;function Eu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){_r.fromArray(n,s);const a=r.x*Math.abs(_r.x)+r.y*Math.abs(_r.y)+r.z*Math.abs(_r.z),l=e.dot(_r),c=t.dot(_r),u=i.dot(_r);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const CM=new Yr,yo=new I,wu=new I;class Kr{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):CM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);const t=yo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(yo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(wu)),this.expandByPoint(yo.copy(e.center).sub(wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new I,Tu=new I,Va=new I,zi=new I,Au=new I,Wa=new I,Cu=new I;class cd{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Tu.copy(e).add(t).multiplyScalar(.5),Va.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(Tu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Va),a=zi.dot(this.direction),l=-zi.dot(Va),c=zi.lengthSq(),u=Math.abs(1-o*o);let h,d,p,v;if(u>0)if(h=o*l-a,d=o*a-l,v=s*u,h>=0)if(d>=-v)if(d<=v){const x=1/u;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Tu).addScaledVector(Va,d),p}intersectSphere(e,t){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),r=gi.dot(gi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,i,r,s){Au.subVectors(t,e),Wa.subVectors(i,e),Cu.crossVectors(Au,Wa);let o=this.direction.dot(Cu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);const l=a*this.direction.dot(Wa.crossVectors(zi,Wa));if(l<0)return null;const c=a*this.direction.dot(Au.cross(zi));if(c<0||l+c>o)return null;const u=-a*zi.dot(Cu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,i,r,s,o,a,l,c,u,h,d,p,v,x,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,d,p,v,x,m)}set(e,t,i,r,s,o,a,l,c,u,h,d,p,v,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=v,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/is.setFromMatrixColumn(e,0).length(),s=1/is.setFromMatrixColumn(e,1).length(),o=1/is.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,v=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+v*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,v=c*u,x=c*h;t[0]=d+x*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-v,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,v=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,v=a*u,x=a*h;t[0]=l*u,t[4]=v*c-p,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=v*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+v,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,p=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=p*h-v,t[2]=v*h-p,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bM,e,RM)}lookAt(e,t,i){const r=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),ki.crossVectors(i,yn),ki.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),ki.crossVectors(i,yn)),ki.normalize(),Xa.crossVectors(yn,ki),r[0]=ki.x,r[4]=Xa.x,r[8]=yn.x,r[1]=ki.y,r[5]=Xa.y,r[9]=yn.y,r[2]=ki.z,r[6]=Xa.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],v=i[2],x=i[6],m=i[10],f=i[14],_=i[3],g=i[7],y=i[11],P=i[15],E=r[0],w=r[4],D=r[8],S=r[12],A=r[1],k=r[5],L=r[9],B=r[13],b=r[2],U=r[6],H=r[10],q=r[14],N=r[3],O=r[7],V=r[11],Q=r[15];return s[0]=o*E+a*A+l*b+c*N,s[4]=o*w+a*k+l*U+c*O,s[8]=o*D+a*L+l*H+c*V,s[12]=o*S+a*B+l*q+c*Q,s[1]=u*E+h*A+d*b+p*N,s[5]=u*w+h*k+d*U+p*O,s[9]=u*D+h*L+d*H+p*V,s[13]=u*S+h*B+d*q+p*Q,s[2]=v*E+x*A+m*b+f*N,s[6]=v*w+x*k+m*U+f*O,s[10]=v*D+x*L+m*H+f*V,s[14]=v*S+x*B+m*q+f*Q,s[3]=_*E+g*A+y*b+P*N,s[7]=_*w+g*k+y*U+P*O,s[11]=_*D+g*L+y*H+P*V,s[15]=_*S+g*B+y*q+P*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],v=e[3],x=e[7],m=e[11],f=e[15];return v*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*p-i*l*p)+x*(+t*l*p-t*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-t*l*h+t*a*d+r*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],v=e[12],x=e[13],m=e[14],f=e[15],_=h*m*c-x*d*c+x*l*p-a*m*p-h*l*f+a*d*f,g=v*d*c-u*m*c-v*l*p+o*m*p+u*l*f-o*d*f,y=u*x*c-v*h*c+v*a*p-o*x*p-u*a*f+o*h*f,P=v*h*l-u*x*l-v*a*d+o*x*d+u*a*m-o*h*m,E=t*_+i*g+r*y+s*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=_*w,e[1]=(x*d*s-h*m*s-x*r*p+i*m*p+h*r*f-i*d*f)*w,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*f+i*l*f)*w,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*p-i*l*p)*w,e[4]=g*w,e[5]=(u*m*s-v*d*s+v*r*p-t*m*p-u*r*f+t*d*f)*w,e[6]=(v*l*s-o*m*s-v*r*c+t*m*c+o*r*f-t*l*f)*w,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*p+t*l*p)*w,e[8]=y*w,e[9]=(v*h*s-u*x*s-v*i*p+t*x*p+u*i*f-t*h*f)*w,e[10]=(o*x*s-v*a*s+v*i*c-t*x*c-o*i*f+t*a*f)*w,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*p-t*a*p)*w,e[12]=P*w,e[13]=(u*x*r-v*h*r+v*i*d-t*x*d-u*i*m+t*h*m)*w,e[14]=(v*a*r-o*x*r-v*i*l+t*x*l+o*i*m-t*a*m)*w,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*d+t*a*d)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,v=s*h,x=o*u,m=o*h,f=a*h,_=l*c,g=l*u,y=l*h,P=i.x,E=i.y,w=i.z;return r[0]=(1-(x+f))*P,r[1]=(p+y)*P,r[2]=(v-g)*P,r[3]=0,r[4]=(p-y)*E,r[5]=(1-(d+f))*E,r[6]=(m+_)*E,r[7]=0,r[8]=(v+g)*w,r[9]=(m-_)*w,r[10]=(1-(d+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=is.set(r[0],r[1],r[2]).length();const o=is.set(r[4],r[5],r[6]).length(),a=is.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qn.copy(this);const c=1/s,u=1/o,h=1/a;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=h,qn.elements[9]*=h,qn.elements[10]*=h,t.setFromRotationMatrix(qn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ti){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let p,v;if(a===Ti)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===cc)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ti){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),d=(t+e)*c,p=(i+r)*u;let v,x;if(a===Ti)v=(o+s)*h,x=-2*h;else if(a===cc)v=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const is=new I,qn=new ft,bM=new I(0,0,0),RM=new I(1,1,1),ki=new I,Xa=new I,yn=new I,Em=new ft,wm=new _a;class Dc{constructor(e=0,t=0,i=0,r=Dc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Em.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Em,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wm.setFromEuler(this),this.setFromQuaternion(wm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dc.DEFAULT_ORDER="XYZ";class p_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PM=0;const Tm=new I,rs=new _a,vi=new ft,ja=new I,So=new I,LM=new I,DM=new _a,Am=new I(1,0,0),Cm=new I(0,1,0),bm=new I(0,0,1),NM={type:"added"},IM={type:"removed"};class Tt extends ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=so(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new I,t=new Dc,i=new _a,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Ye}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new p_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(Am,e)}rotateY(e){return this.rotateOnAxis(Cm,e)}rotateZ(e){return this.rotateOnAxis(bm,e)}translateOnAxis(e,t){return Tm.copy(e).applyQuaternion(this.quaternion),this.position.add(Tm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Am,e)}translateY(e){return this.translateOnAxis(Cm,e)}translateZ(e){return this.translateOnAxis(bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ja.copy(e):ja.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(So,ja,this.up):vi.lookAt(ja,So,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),rs.setFromRotationMatrix(vi),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(NM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(IM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,e,LM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,DM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new I(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new I,_i=new I,bu=new I,xi=new I,ss=new I,os=new I,Rm=new I,Ru=new I,Pu=new I,Lu=new I;let qa=!1;class Un{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),$n.subVectors(e,t),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){$n.subVectors(r,t),_i.subVectors(i,t),bu.subVectors(e,t);const o=$n.dot($n),a=$n.dot(_i),l=$n.dot(bu),c=_i.dot(_i),u=_i.dot(bu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,v=(o*u-a*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getUV(e,t,i,r,s,o,a,l){return qa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qa=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static isFrontFacing(e,t,i,r){return $n.subVectors(i,t),_i.subVectors(e,t),$n.cross(_i).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),$n.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return qa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qa=!0),Un.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Un.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ss.subVectors(r,i),os.subVectors(s,i),Ru.subVectors(e,i);const l=ss.dot(Ru),c=os.dot(Ru);if(l<=0&&c<=0)return t.copy(i);Pu.subVectors(e,r);const u=ss.dot(Pu),h=os.dot(Pu);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ss,o);Lu.subVectors(e,s);const p=ss.dot(Lu),v=os.dot(Lu);if(v>=0&&p<=v)return t.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(os,a);const m=u*v-p*h;if(m<=0&&h-u>=0&&p-v>=0)return Rm.subVectors(s,r),a=(h-u)/(h-u+(p-v)),t.copy(r).addScaledVector(Rm,a);const f=1/(m+x+d);return o=x*f,a=d*f,t.copy(i).addScaledVector(ss,o).addScaledVector(os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const m_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},$a={h:0,s:0,l:0};function Du(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=yM(e,1),t=Bt(t,0,1),i=Bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Du(o,s,e+1/3),this.g=Du(o,s,e),this.b=Du(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ut){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const i=m_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}copyLinearToSRGB(e){return this.r=yu(e.r),this.g=yu(e.g),this.b=yu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return tt.fromWorkingColorSpace(qt.copy(this),e),Math.round(Bt(qt.r*255,0,255))*65536+Math.round(Bt(qt.g*255,0,255))*256+Math.round(Bt(qt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(qt.copy(this),t);const i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Ut){tt.fromWorkingColorSpace(qt.copy(this),e);const t=qt.r,i=qt.g,r=qt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+t,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Bi),e.getHSL($a);const i=_u(Bi.h,$a.h,t),r=_u(Bi.s,$a.s,t),s=_u(Bi.l,$a.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new ke;ke.NAMES=m_;let UM=0;class pr extends ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=so(),this.name="",this.type="Material",this.blending=Bs,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jh,this.blendDst=qh,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=rc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jh&&(i.blendSrc=this.blendSrc),this.blendDst!==qh&&(i.blendDst=this.blendDst),this.blendEquation!==Cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zt extends pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new I,Ya=new le;class Gn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ya.fromBufferAttribute(this,t),Ya.applyMatrix3(e),this.setXY(t,Ya.x,Ya.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_o(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_o(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_o(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_o(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_o(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gm&&(e.usage=this.usage),e}}class g_ extends Gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class v_ extends Gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Je extends Gn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let FM=0;const Rn=new ft,Nu=new Tt,as=new I,Sn=new Yr,Mo=new Yr,Nt=new I;class At extends ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=so(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(u_(e)?v_:g_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,i){return Rn.makeTranslation(e,t,i),this.applyMatrix4(Rn),this}scale(e,t,i){return Rn.makeScale(e,t,i),this.applyMatrix4(Rn),this}lookAt(e){return Nu.lookAt(e),Nu.updateMatrix(),this.applyMatrix4(Nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Je(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Mo.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(Sn.min,Mo.min),Sn.expandByPoint(Nt),Nt.addVectors(Sn.max,Mo.max),Sn.expandByPoint(Nt)):(Sn.expandByPoint(Mo.min),Sn.expandByPoint(Mo.max))}Sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Nt.fromBufferAttribute(a,c),l&&(as.fromBufferAttribute(e,c),Nt.add(as)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<a;A++)c[A]=new I,u[A]=new I;const h=new I,d=new I,p=new I,v=new le,x=new le,m=new le,f=new I,_=new I;function g(A,k,L){h.fromArray(r,A*3),d.fromArray(r,k*3),p.fromArray(r,L*3),v.fromArray(o,A*2),x.fromArray(o,k*2),m.fromArray(o,L*2),d.sub(h),p.sub(h),x.sub(v),m.sub(v);const B=1/(x.x*m.y-m.x*x.y);isFinite(B)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(B),_.copy(p).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(B),c[A].add(f),c[k].add(f),c[L].add(f),u[A].add(_),u[k].add(_),u[L].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let A=0,k=y.length;A<k;++A){const L=y[A],B=L.start,b=L.count;for(let U=B,H=B+b;U<H;U+=3)g(i[U+0],i[U+1],i[U+2])}const P=new I,E=new I,w=new I,D=new I;function S(A){w.fromArray(s,A*3),D.copy(w);const k=c[A];P.copy(k),P.sub(w.multiplyScalar(w.dot(k))).normalize(),E.crossVectors(D,k);const B=E.dot(u[A])<0?-1:1;l[A*4]=P.x,l[A*4+1]=P.y,l[A*4+2]=P.z,l[A*4+3]=B}for(let A=0,k=y.length;A<k;++A){const L=y[A],B=L.start,b=L.count;for(let U=B,H=B+b;U<H;U+=3)S(i[U+0]),S(i[U+1]),S(i[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let f=0;f<u;f++)d[v++]=c[p++]}return new Gn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pm=new ft,xr=new cd,Ka=new Kr,Lm=new I,ls=new I,cs=new I,us=new I,Iu=new I,Ja=new I,Qa=new le,Za=new le,el=new le,Dm=new I,Nm=new I,Im=new I,tl=new I,nl=new I;class qe extends Tt{constructor(e=new At,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ja.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Iu.fromBufferAttribute(h,e),o?Ja.addScaledVector(Iu,u):Ja.addScaledVector(Iu.sub(t),u))}t.add(Ja)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ka.copy(i.boundingSphere),Ka.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(Ka.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Ka,Lm)===null||xr.origin.distanceToSquared(Lm)>(e.far-e.near)**2))&&(Pm.copy(s).invert(),xr.copy(e.ray).applyMatrix4(Pm),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],f=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,P=g;y<P;y+=3){const E=a.getX(y),w=a.getX(y+1),D=a.getX(y+2);r=il(this,f,e,i,c,u,h,E,w,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,f=x;m<f;m+=3){const _=a.getX(m),g=a.getX(m+1),y=a.getX(m+2);r=il(this,o,e,i,c,u,h,_,g,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],f=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,P=g;y<P;y+=3){const E=y,w=y+1,D=y+2;r=il(this,f,e,i,c,u,h,E,w,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,f=x;m<f;m+=3){const _=m,g=m+1,y=m+2;r=il(this,o,e,i,c,u,h,_,g,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function OM(n,e,t,i,r,s,o,a){let l;if(e.side===vn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===cr,a),l===null)return null;nl.copy(a),nl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(nl);return c<t.near||c>t.far?null:{distance:c,point:nl.clone(),object:n}}function il(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ls),n.getVertexPosition(l,cs),n.getVertexPosition(c,us);const u=OM(n,e,t,i,ls,cs,us,tl);if(u){r&&(Qa.fromBufferAttribute(r,a),Za.fromBufferAttribute(r,l),el.fromBufferAttribute(r,c),u.uv=Un.getInterpolation(tl,ls,cs,us,Qa,Za,el,new le)),s&&(Qa.fromBufferAttribute(s,a),Za.fromBufferAttribute(s,l),el.fromBufferAttribute(s,c),u.uv1=Un.getInterpolation(tl,ls,cs,us,Qa,Za,el,new le),u.uv2=u.uv1),o&&(Dm.fromBufferAttribute(o,a),Nm.fromBufferAttribute(o,l),Im.fromBufferAttribute(o,c),u.normal=Un.getInterpolation(tl,ls,cs,us,Dm,Nm,Im,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};Un.getNormal(ls,cs,us,h.normal),u.face=h}return u}class ur extends At{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(h,2));function v(x,m,f,_,g,y,P,E,w,D,S){const A=y/w,k=P/D,L=y/2,B=P/2,b=E/2,U=w+1,H=D+1;let q=0,N=0;const O=new I;for(let V=0;V<H;V++){const Q=V*k-B;for(let ae=0;ae<U;ae++){const $=ae*A-L;O[x]=$*_,O[m]=Q*g,O[f]=b,c.push(O.x,O.y,O.z),O[x]=0,O[m]=0,O[f]=E>0?1:-1,u.push(O.x,O.y,O.z),h.push(ae/w),h.push(1-V/D),q+=1}}for(let V=0;V<D;V++)for(let Q=0;Q<w;Q++){const ae=d+Q+U*V,$=d+Q+U*(V+1),te=d+(Q+1)+U*(V+1),de=d+(Q+1)+U*V;l.push(ae,$,de),l.push($,te,de),N+=6}a.addGroup(p,N,S),p+=N,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Qt(n){const e={};for(let t=0;t<n.length;t++){const i=Zs(n[t]);for(const r in i)e[r]=i[r]}return e}function zM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function __(n){return n.getRenderTarget()===null?n.outputColorSpace:tt.workingColorSpace}const la={clone:Zs,merge:Qt};var kM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kM,this.fragmentShader=BM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=zM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class x_ extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Fn extends x_{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ll*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qh*2*Math.atan(Math.tan(Ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ll*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hs=-90,fs=1;class y_ extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fn(hs,fs,e,t);r.layers=this.layers,this.add(r);const s=new Fn(hs,fs,e,t);s.layers=this.layers,this.add(s);const o=new Fn(hs,fs,e,t);o.layers=this.layers,this.add(o);const a=new Fn(hs,fs,e,t);a.layers=this.layers,this.add(a);const l=new Fn(hs,fs,e,t);l.layers=this.layers,this.add(l);const c=new Fn(hs,fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class S_ extends _n{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ks,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class M_ extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Bo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Br?Ut:On),this.texture=new S_(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:In}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ur(5,5,5),s=new dn({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:Ci});s.uniforms.tEquirect.value=t;const o=new qe(r,s),a=t.minFilter;return t.minFilter===aa&&(t.minFilter=In),new y_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Uu=new I,HM=new I,GM=new Ye;class Tr{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Uu.subVectors(i,t).cross(HM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Uu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||GM.getNormalMatrix(e),r=this.coplanarPoint(Uu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new Kr,rl=new I;class ud{constructor(e=new Tr,t=new Tr,i=new Tr,r=new Tr,s=new Tr,o=new Tr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ti){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],p=r[8],v=r[9],x=r[10],m=r[11],f=r[12],_=r[13],g=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,m-p,y-f).normalize(),i[1].setComponents(l+s,d+c,m+p,y+f).normalize(),i[2].setComponents(l+o,d+u,m+v,y+_).normalize(),i[3].setComponents(l-o,d-u,m-v,y-_).normalize(),i[4].setComponents(l-a,d-h,m-x,y-g).normalize(),t===Ti)i[5].setComponents(l+a,d+h,m+x,y+g).normalize();else if(t===cc)i[5].setComponents(a,h,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(rl.x=r.normal.x>0?e.max.x:e.min.x,rl.y=r.normal.y>0?e.max.y:e.min.y,rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(rl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function E_(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function VM(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,d=c.usage,p=h.byteLength,v=n.createBuffer();n.bindBuffer(u,v),n.bufferData(u,h,d),c.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,h){const d=u.array,p=u._updateRange,v=u.updateRanges;if(n.bindBuffer(h,c),p.count===-1&&v.length===0&&n.bufferSubData(h,0,d),v.length!==0){for(let x=0,m=v.length;x<m;x++){const f=v[x];t?n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class ln extends At{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,p=[],v=[],x=[],m=[];for(let f=0;f<u;f++){const _=f*d-o;for(let g=0;g<c;g++){const y=g*h-s;v.push(y,-_,0),x.push(0,0,1),m.push(g/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const g=_+c*f,y=_+c*(f+1),P=_+1+c*(f+1),E=_+1+c*f;p.push(g,y,E),p.push(y,P,E)}this.setIndex(p),this.setAttribute("position",new Je(v,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ln(e.width,e.height,e.widthSegments,e.heightSegments)}}var WM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XM=`#ifdef USE_ALPHAHASH
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
#endif`,jM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$M=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,YM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KM=`#ifdef USE_AOMAP
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
#endif`,JM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QM=`#ifdef USE_BATCHING
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
#endif`,ZM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,eE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iE=`#ifdef USE_IRIDESCENCE
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
#endif`,rE=`#ifdef USE_BUMPMAP
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
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dE=`#define PI 3.141592653589793
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
} // validated`,pE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mE=`vec3 transformedNormal = objectNormal;
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
#endif`,gE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_E=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yE="gl_FragColor = linearToOutputTexel( gl_FragColor );",SE=`
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
}`,ME=`#ifdef USE_ENVMAP
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
#endif`,EE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wE=`#ifdef USE_ENVMAP
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
#endif`,TE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
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
#endif`,CE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LE=`#ifdef USE_GRADIENTMAP
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
}`,DE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,NE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FE=`uniform bool receiveShadow;
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
#endif`,OE=`#ifdef USE_ENVMAP
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
#endif`,zE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GE=`PhysicalMaterial material;
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
#endif`,VE=`struct PhysicalMaterial {
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
}`,WE=`
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
#endif`,XE=`#if defined( RE_IndirectDiffuse )
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
#endif`,jE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$E=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,KE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,JE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e1=`#if defined( USE_POINTS_UV )
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
#endif`,t1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r1=`#ifdef USE_MORPHNORMALS
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
#endif`,s1=`#ifdef USE_MORPHTARGETS
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
#endif`,o1=`#ifdef USE_MORPHTARGETS
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
#endif`,a1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,l1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,c1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f1=`#ifdef USE_NORMALMAP
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
#endif`,d1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,x1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,b1=`float getShadowMask() {
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
}`,R1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P1=`#ifdef USE_SKINNING
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
#endif`,L1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D1=`#ifdef USE_SKINNING
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
#endif`,N1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,O1=`#ifdef USE_TRANSMISSION
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
#endif`,z1=`#ifdef USE_TRANSMISSION
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
#endif`,k1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const V1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W1=`uniform sampler2D t2D;
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
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y1=`#include <common>
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
}`,K1=`#if DEPTH_PACKING == 3200
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
}`,J1=`#define DISTANCE
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
}`,Q1=`#define DISTANCE
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
}`,Z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ew=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tw=`uniform float scale;
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
}`,nw=`uniform vec3 diffuse;
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
}`,iw=`#include <common>
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
}`,rw=`uniform vec3 diffuse;
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
}`,sw=`#define LAMBERT
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
}`,ow=`#define LAMBERT
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
}`,aw=`#define MATCAP
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
}`,lw=`#define MATCAP
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
}`,cw=`#define NORMAL
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
}`,uw=`#define NORMAL
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
}`,hw=`#define PHONG
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
}`,fw=`#define PHONG
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
}`,dw=`#define STANDARD
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
}`,pw=`#define STANDARD
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
}`,mw=`#define TOON
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
}`,gw=`#define TOON
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
}`,vw=`uniform float size;
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
}`,_w=`uniform vec3 diffuse;
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
}`,xw=`#include <common>
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
}`,yw=`uniform vec3 color;
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
}`,Sw=`uniform float rotation;
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
}`,Mw=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:WM,alphahash_pars_fragment:XM,alphamap_fragment:jM,alphamap_pars_fragment:qM,alphatest_fragment:$M,alphatest_pars_fragment:YM,aomap_fragment:KM,aomap_pars_fragment:JM,batching_pars_vertex:QM,batching_vertex:ZM,begin_vertex:eE,beginnormal_vertex:tE,bsdfs:nE,iridescence_fragment:iE,bumpmap_pars_fragment:rE,clipping_planes_fragment:sE,clipping_planes_pars_fragment:oE,clipping_planes_pars_vertex:aE,clipping_planes_vertex:lE,color_fragment:cE,color_pars_fragment:uE,color_pars_vertex:hE,color_vertex:fE,common:dE,cube_uv_reflection_fragment:pE,defaultnormal_vertex:mE,displacementmap_pars_vertex:gE,displacementmap_vertex:vE,emissivemap_fragment:_E,emissivemap_pars_fragment:xE,colorspace_fragment:yE,colorspace_pars_fragment:SE,envmap_fragment:ME,envmap_common_pars_fragment:EE,envmap_pars_fragment:wE,envmap_pars_vertex:TE,envmap_physical_pars_fragment:OE,envmap_vertex:AE,fog_vertex:CE,fog_pars_vertex:bE,fog_fragment:RE,fog_pars_fragment:PE,gradientmap_pars_fragment:LE,lightmap_fragment:DE,lightmap_pars_fragment:NE,lights_lambert_fragment:IE,lights_lambert_pars_fragment:UE,lights_pars_begin:FE,lights_toon_fragment:zE,lights_toon_pars_fragment:kE,lights_phong_fragment:BE,lights_phong_pars_fragment:HE,lights_physical_fragment:GE,lights_physical_pars_fragment:VE,lights_fragment_begin:WE,lights_fragment_maps:XE,lights_fragment_end:jE,logdepthbuf_fragment:qE,logdepthbuf_pars_fragment:$E,logdepthbuf_pars_vertex:YE,logdepthbuf_vertex:KE,map_fragment:JE,map_pars_fragment:QE,map_particle_fragment:ZE,map_particle_pars_fragment:e1,metalnessmap_fragment:t1,metalnessmap_pars_fragment:n1,morphcolor_vertex:i1,morphnormal_vertex:r1,morphtarget_pars_vertex:s1,morphtarget_vertex:o1,normal_fragment_begin:a1,normal_fragment_maps:l1,normal_pars_fragment:c1,normal_pars_vertex:u1,normal_vertex:h1,normalmap_pars_fragment:f1,clearcoat_normal_fragment_begin:d1,clearcoat_normal_fragment_maps:p1,clearcoat_pars_fragment:m1,iridescence_pars_fragment:g1,opaque_fragment:v1,packing:_1,premultiplied_alpha_fragment:x1,project_vertex:y1,dithering_fragment:S1,dithering_pars_fragment:M1,roughnessmap_fragment:E1,roughnessmap_pars_fragment:w1,shadowmap_pars_fragment:T1,shadowmap_pars_vertex:A1,shadowmap_vertex:C1,shadowmask_pars_fragment:b1,skinbase_vertex:R1,skinning_pars_vertex:P1,skinning_vertex:L1,skinnormal_vertex:D1,specularmap_fragment:N1,specularmap_pars_fragment:I1,tonemapping_fragment:U1,tonemapping_pars_fragment:F1,transmission_fragment:O1,transmission_pars_fragment:z1,uv_pars_fragment:k1,uv_pars_vertex:B1,uv_vertex:H1,worldpos_vertex:G1,background_vert:V1,background_frag:W1,backgroundCube_vert:X1,backgroundCube_frag:j1,cube_vert:q1,cube_frag:$1,depth_vert:Y1,depth_frag:K1,distanceRGBA_vert:J1,distanceRGBA_frag:Q1,equirect_vert:Z1,equirect_frag:ew,linedashed_vert:tw,linedashed_frag:nw,meshbasic_vert:iw,meshbasic_frag:rw,meshlambert_vert:sw,meshlambert_frag:ow,meshmatcap_vert:aw,meshmatcap_frag:lw,meshnormal_vert:cw,meshnormal_frag:uw,meshphong_vert:hw,meshphong_frag:fw,meshphysical_vert:dw,meshphysical_frag:pw,meshtoon_vert:mw,meshtoon_frag:gw,points_vert:vw,points_frag:_w,shadow_vert:xw,shadow_frag:yw,sprite_vert:Sw,sprite_frag:Mw},me={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},oi={basic:{uniforms:Qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ke(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Qt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Qt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ke(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Qt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Qt([me.points,me.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Qt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Qt([me.common,me.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Qt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Qt([me.sprite,me.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Qt([me.common,me.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Qt([me.lights,me.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};oi.physical={uniforms:Qt([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const sl={r:0,b:0,g:0};function Ew(n,e,t,i,r,s,o){const a=new ke(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function v(m,f){let _=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?t:e).get(g)),g===null?x(a,l):g&&g.isColor&&(x(g,1),_=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Pc)?(u===void 0&&(u=new qe(new ur(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Zs(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=tt.getTransfer(g.colorSpace)!==at,(h!==g||d!==g.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=g,d=g.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new qe(new ln(2,2),new dn({name:"BackgroundMaterial",uniforms:Zs(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=tt.getTransfer(g.colorSpace)!==at,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||d!==g.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=g,d=g.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,f){m.getRGB(sl,__(n)),i.buffers.color.setClear(sl.r,sl.g,sl.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:v}}function ww(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(b,U,H,q,N){let O=!1;if(o){const V=x(q,H,U);c!==V&&(c=V,p(c.object)),O=f(b,q,H,N),O&&_(b,q,H,N)}else{const V=U.wireframe===!0;(c.geometry!==q.id||c.program!==H.id||c.wireframe!==V)&&(c.geometry=q.id,c.program=H.id,c.wireframe=V,O=!0)}N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(O||u)&&(u=!1,D(b,U,H,q),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(b){return i.isWebGL2?n.bindVertexArray(b):s.bindVertexArrayOES(b)}function v(b){return i.isWebGL2?n.deleteVertexArray(b):s.deleteVertexArrayOES(b)}function x(b,U,H){const q=H.wireframe===!0;let N=a[b.id];N===void 0&&(N={},a[b.id]=N);let O=N[U.id];O===void 0&&(O={},N[U.id]=O);let V=O[q];return V===void 0&&(V=m(d()),O[q]=V),V}function m(b){const U=[],H=[],q=[];for(let N=0;N<r;N++)U[N]=0,H[N]=0,q[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:q,object:b,attributes:{},index:null}}function f(b,U,H,q){const N=c.attributes,O=U.attributes;let V=0;const Q=H.getAttributes();for(const ae in Q)if(Q[ae].location>=0){const te=N[ae];let de=O[ae];if(de===void 0&&(ae==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),ae==="instanceColor"&&b.instanceColor&&(de=b.instanceColor)),te===void 0||te.attribute!==de||de&&te.data!==de.data)return!0;V++}return c.attributesNum!==V||c.index!==q}function _(b,U,H,q){const N={},O=U.attributes;let V=0;const Q=H.getAttributes();for(const ae in Q)if(Q[ae].location>=0){let te=O[ae];te===void 0&&(ae==="instanceMatrix"&&b.instanceMatrix&&(te=b.instanceMatrix),ae==="instanceColor"&&b.instanceColor&&(te=b.instanceColor));const de={};de.attribute=te,te&&te.data&&(de.data=te.data),N[ae]=de,V++}c.attributes=N,c.attributesNum=V,c.index=q}function g(){const b=c.newAttributes;for(let U=0,H=b.length;U<H;U++)b[U]=0}function y(b){P(b,0)}function P(b,U){const H=c.newAttributes,q=c.enabledAttributes,N=c.attributeDivisors;H[b]=1,q[b]===0&&(n.enableVertexAttribArray(b),q[b]=1),N[b]!==U&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,U),N[b]=U)}function E(){const b=c.newAttributes,U=c.enabledAttributes;for(let H=0,q=U.length;H<q;H++)U[H]!==b[H]&&(n.disableVertexAttribArray(H),U[H]=0)}function w(b,U,H,q,N,O,V){V===!0?n.vertexAttribIPointer(b,U,H,N,O):n.vertexAttribPointer(b,U,H,q,N,O)}function D(b,U,H,q){if(i.isWebGL2===!1&&(b.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const N=q.attributes,O=H.getAttributes(),V=U.defaultAttributeValues;for(const Q in O){const ae=O[Q];if(ae.location>=0){let $=N[Q];if($===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&($=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&($=b.instanceColor)),$!==void 0){const te=$.normalized,de=$.itemSize,fe=t.get($);if(fe===void 0)continue;const ge=fe.buffer,Pe=fe.type,Ie=fe.bytesPerElement,Ae=i.isWebGL2===!0&&(Pe===n.INT||Pe===n.UNSIGNED_INT||$.gpuType===t_);if($.isInterleavedBufferAttribute){const Le=$.data,R=Le.stride,se=$.offset;if(Le.isInstancedInterleavedBuffer){for(let Y=0;Y<ae.locationSize;Y++)P(ae.location+Y,Le.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let Y=0;Y<ae.locationSize;Y++)y(ae.location+Y);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let Y=0;Y<ae.locationSize;Y++)w(ae.location+Y,de/ae.locationSize,Pe,te,R*Ie,(se+de/ae.locationSize*Y)*Ie,Ae)}else{if($.isInstancedBufferAttribute){for(let Le=0;Le<ae.locationSize;Le++)P(ae.location+Le,$.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Le=0;Le<ae.locationSize;Le++)y(ae.location+Le);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let Le=0;Le<ae.locationSize;Le++)w(ae.location+Le,de/ae.locationSize,Pe,te,de*Ie,de/ae.locationSize*Le*Ie,Ae)}}else if(V!==void 0){const te=V[Q];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(ae.location,te);break;case 3:n.vertexAttrib3fv(ae.location,te);break;case 4:n.vertexAttrib4fv(ae.location,te);break;default:n.vertexAttrib1fv(ae.location,te)}}}}E()}function S(){L();for(const b in a){const U=a[b];for(const H in U){const q=U[H];for(const N in q)v(q[N].object),delete q[N];delete U[H]}delete a[b]}}function A(b){if(a[b.id]===void 0)return;const U=a[b.id];for(const H in U){const q=U[H];for(const N in q)v(q[N].object),delete q[N];delete U[H]}delete a[b.id]}function k(b){for(const U in a){const H=a[U];if(H[b.id]===void 0)continue;const q=H[b.id];for(const N in q)v(q[N].object),delete q[N];delete H[b.id]}}function L(){B(),u=!0,c!==l&&(c=l,p(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:L,resetDefaultState:B,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:k,initAttributes:g,enableAttribute:y,disableUnusedAttributes:E}}function Tw(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,h){n.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,d){if(d===0)return;let p,v;if(r)p=n,v="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](s,u,h,d),t.update(h,s,d)}function c(u,h,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<d;v++)this.render(u[v],h[v]);else{p.multiDrawArraysWEBGL(s,u,0,h,0,d);let v=0;for(let x=0;x<d;x++)v+=h[x];t.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Aw(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,y=o||e.has("OES_texture_float"),P=g&&y,E=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:P,maxSamples:E}}function Cw(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Tr,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const v=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,g=_*4;let y=f.clippingState||null;l.value=y,y=u(v,d,g,p);for(let P=0;P!==g;++P)y[P]=t[P];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,v){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const f=p+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let g=0,y=p;g!==x;++g,y+=4)o.copy(h[g]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function bw(n){let e=new WeakMap;function t(o,a){return a===$h?o.mapping=Ks:a===Yh&&(o.mapping=Js),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===$h||a===Yh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new M_(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class hd extends x_{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Cs=4,Um=[.125,.215,.35,.446,.526,.582],br=20,Fu=new hd,Fm=new ke;let Ou=null,zu=0,ku=0;const Ar=(1+Math.sqrt(5))/2,ds=1/Ar,Om=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Ar,ds),new I(0,Ar,-ds),new I(ds,0,Ar),new I(-ds,0,Ar),new I(Ar,ds,0),new I(-Ar,ds,0)];class zm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ou=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ou,zu,ku),e.scissorTest=!1,ol(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ou=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:fi,format:Zn,colorSpace:Ni,depthBuffer:!1},r=km(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=km(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rw(s)),this._blurMaterial=Pw(s,e,t)}return r}_compileMaterial(e){const t=new qe(this._lodPlanes[0],e);this._renderer.compile(t,Fu)}_sceneToCubeUV(e,t,i,r){const a=new Fn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Fm),u.toneMapping=ir,u.autoClear=!1;const p=new Zt({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),v=new qe(new ur,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Fm),x=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const g=this._cubeSize;ol(r,_*g,f>2?g:0,g,g),u.setRenderTarget(r),x&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ks||e.mapping===Js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new qe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ol(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Fu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Om[(r-1)%Om.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new qe(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*br-1),x=s/v,m=isFinite(s)?1+Math.floor(u*x):br;m>br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${br}`);const f=[];let _=0;for(let w=0;w<br;++w){const D=w/x,S=Math.exp(-D*D/2);f.push(S),w===0?_+=S:w<m&&(_+=2*S)}for(let w=0;w<f.length;w++)f[w]=f[w]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=v,d.mipInt.value=g-i;const y=this._sizeLods[r],P=3*y*(r>g-Cs?r-g+Cs:0),E=4*(this._cubeSize-y);ol(t,P,E,3*y,2*y),l.setRenderTarget(t),l.render(h,Fu)}}function Rw(n){const e=[],t=[],i=[];let r=n;const s=n-Cs+1+Um.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Cs?l=Um[o-n+Cs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,v=6,x=3,m=2,f=1,_=new Float32Array(x*v*p),g=new Float32Array(m*v*p),y=new Float32Array(f*v*p);for(let E=0;E<p;E++){const w=E%3*2/3-1,D=E>2?0:-1,S=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];_.set(S,x*v*E),g.set(d,m*v*E);const A=[E,E,E,E,E,E];y.set(A,f*v*E)}const P=new At;P.setAttribute("position",new Gn(_,x)),P.setAttribute("uv",new Gn(g,m)),P.setAttribute("faceIndex",new Gn(y,f)),e.push(P),r>Cs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function km(n,e,t){const i=new Hn(n,e,t);return i.texture.mapping=Pc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ol(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Pw(n,e,t){const i=new Float32Array(br),r=new I(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fd(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Bm(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fd(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Hm(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function fd(){return`

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
	`}function Lw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===$h||l===Yh,u=l===Ks||l===Js;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new zm(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new zm(n));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Dw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Nw(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const x=p[v];for(let m=0,f=x.length;m<f;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,v=h.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let g=0,y=_.length;g<y;g+=3){const P=_[g+0],E=_[g+1],w=_[g+2];d.push(P,E,E,w,w,P)}}else if(v!==void 0){const _=v.array;x=v.version;for(let g=0,y=_.length/3-1;g<y;g+=3){const P=g+0,E=g+1,w=g+2;d.push(P,E,E,w,w,P)}}else return;const m=new(u_(d)?v_:g_)(d,1);m.version=x;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Iw(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,v){n.drawElements(s,v,a,p*l),t.update(v,s,1)}function h(p,v,x){if(x===0)return;let m,f;if(r)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,v,a,p*l,x),t.update(v,s,x)}function d(p,v,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<x;f++)this.render(p[f]/l,v[f]);else{m.multiDrawElementsWEBGL(s,v,0,a,p,0,x);let f=0;for(let _=0;_<x;_++)f+=v[_];t.update(f,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function Uw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Fw(n,e){return n[0]-e[0]}function Ow(n,e){return Math.abs(e[1])-Math.abs(n[1])}function zw(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ft,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=p!==void 0?p.length:0;let x=s.get(u);if(x===void 0||x.count!==v){let b=function(){L.dispose(),s.delete(u),u.removeEventListener("dispose",b)};x!==void 0&&x.texture.dispose();const _=u.morphAttributes.position!==void 0,g=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let D=0;_===!0&&(D=1),g===!0&&(D=2),y===!0&&(D=3);let S=u.attributes.position.count*D,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const k=new Float32Array(S*A*4*v),L=new d_(k,S,A,v);L.type=$i,L.needsUpdate=!0;const B=D*4;for(let U=0;U<v;U++){const H=P[U],q=E[U],N=w[U],O=S*A*4*U;for(let V=0;V<H.count;V++){const Q=V*B;_===!0&&(o.fromBufferAttribute(H,V),k[O+Q+0]=o.x,k[O+Q+1]=o.y,k[O+Q+2]=o.z,k[O+Q+3]=0),g===!0&&(o.fromBufferAttribute(q,V),k[O+Q+4]=o.x,k[O+Q+5]=o.y,k[O+Q+6]=o.z,k[O+Q+7]=0),y===!0&&(o.fromBufferAttribute(N,V),k[O+Q+8]=o.x,k[O+Q+9]=o.y,k[O+Q+10]=o.z,k[O+Q+11]=N.itemSize===4?o.w:1)}}x={count:v,texture:L,size:new le(S,A)},s.set(u,x),u.addEventListener("dispose",b)}let m=0;for(let _=0;_<d.length;_++)m+=d[_];const f=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",f),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{const p=d===void 0?0:d.length;let v=i[u.id];if(v===void 0||v.length!==p){v=[];for(let g=0;g<p;g++)v[g]=[g,0];i[u.id]=v}for(let g=0;g<p;g++){const y=v[g];y[0]=g,y[1]=d[g]}v.sort(Ow);for(let g=0;g<8;g++)g<p&&v[g][1]?(a[g][0]=v[g][0],a[g][1]=v[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort(Fw);const x=u.morphAttributes.position,m=u.morphAttributes.normal;let f=0;for(let g=0;g<8;g++){const y=a[g],P=y[0],E=y[1];P!==Number.MAX_SAFE_INTEGER&&E?(x&&u.getAttribute("morphTarget"+g)!==x[P]&&u.setAttribute("morphTarget"+g,x[P]),m&&u.getAttribute("morphNormal"+g)!==m[P]&&u.setAttribute("morphNormal"+g,m[P]),r[g]=E,f+=E):(x&&u.hasAttribute("morphTarget"+g)===!0&&u.deleteAttribute("morphTarget"+g),m&&u.hasAttribute("morphNormal"+g)===!0&&u.deleteAttribute("morphNormal"+g),r[g]=0)}const _=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(n,"morphTargetBaseInfluence",_),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function kw(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class w_ extends _n{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:kr,u!==kr&&u!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===kr&&(i=qi),i===void 0&&u===Qs&&(i=zr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const T_=new _n,A_=new w_(1,1);A_.compareFunction=c_;const C_=new d_,b_=new AM,R_=new S_,Gm=[],Vm=[],Wm=new Float32Array(16),Xm=new Float32Array(9),jm=new Float32Array(4);function oo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Gm[r];if(s===void 0&&(s=new Float32Array(r),Gm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Nc(n,e){let t=Vm[e];t===void 0&&(t=new Int32Array(e),Vm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Bw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Hw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function Gw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function Vw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function Ww(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;jm.set(i),n.uniformMatrix2fv(this.addr,!1,jm),Pt(t,i)}}function Xw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Xm.set(i),n.uniformMatrix3fv(this.addr,!1,Xm),Pt(t,i)}}function jw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Wm.set(i),n.uniformMatrix4fv(this.addr,!1,Wm),Pt(t,i)}}function qw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $w(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function Yw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function Kw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function Jw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Qw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function Zw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function eT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function tT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?A_:T_;t.setTexture2D(e||s,r)}function nT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||b_,r)}function iT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||R_,r)}function rT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||C_,r)}function sT(n){switch(n){case 5126:return Bw;case 35664:return Hw;case 35665:return Gw;case 35666:return Vw;case 35674:return Ww;case 35675:return Xw;case 35676:return jw;case 5124:case 35670:return qw;case 35667:case 35671:return $w;case 35668:case 35672:return Yw;case 35669:case 35673:return Kw;case 5125:return Jw;case 36294:return Qw;case 36295:return Zw;case 36296:return eT;case 35678:case 36198:case 36298:case 36306:case 35682:return tT;case 35679:case 36299:case 36307:return nT;case 35680:case 36300:case 36308:case 36293:return iT;case 36289:case 36303:case 36311:case 36292:return rT}}function oT(n,e){n.uniform1fv(this.addr,e)}function aT(n,e){const t=oo(e,this.size,2);n.uniform2fv(this.addr,t)}function lT(n,e){const t=oo(e,this.size,3);n.uniform3fv(this.addr,t)}function cT(n,e){const t=oo(e,this.size,4);n.uniform4fv(this.addr,t)}function uT(n,e){const t=oo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function hT(n,e){const t=oo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function fT(n,e){const t=oo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function dT(n,e){n.uniform1iv(this.addr,e)}function pT(n,e){n.uniform2iv(this.addr,e)}function mT(n,e){n.uniform3iv(this.addr,e)}function gT(n,e){n.uniform4iv(this.addr,e)}function vT(n,e){n.uniform1uiv(this.addr,e)}function _T(n,e){n.uniform2uiv(this.addr,e)}function xT(n,e){n.uniform3uiv(this.addr,e)}function yT(n,e){n.uniform4uiv(this.addr,e)}function ST(n,e,t){const i=this.cache,r=e.length,s=Nc(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||T_,s[o])}function MT(n,e,t){const i=this.cache,r=e.length,s=Nc(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||b_,s[o])}function ET(n,e,t){const i=this.cache,r=e.length,s=Nc(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||R_,s[o])}function wT(n,e,t){const i=this.cache,r=e.length,s=Nc(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||C_,s[o])}function TT(n){switch(n){case 5126:return oT;case 35664:return aT;case 35665:return lT;case 35666:return cT;case 35674:return uT;case 35675:return hT;case 35676:return fT;case 5124:case 35670:return dT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return vT;case 36294:return _T;case 36295:return xT;case 36296:return yT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return ET;case 36289:case 36303:case 36311:case 36292:return wT}}class AT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sT(t.type)}}class CT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=TT(t.type)}}class bT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Bu=/(\w+)(\])?(\[|\.)?/g;function qm(n,e){n.seq.push(e),n.map[e.id]=e}function RT(n,e,t){const i=n.name,r=i.length;for(Bu.lastIndex=0;;){const s=Bu.exec(i),o=Bu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){qm(t,c===void 0?new AT(a,n,e):new CT(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new bT(a),qm(t,h)),t=h}}}class Dl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);RT(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function $m(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const PT=37297;let LT=0;function DT(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function NT(n){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(n);let i;switch(e===t?i="":e===lc&&t===ac?i="LinearDisplayP3ToLinearSRGB":e===ac&&t===lc&&(i="LinearSRGBToLinearDisplayP3"),n){case Ni:case Lc:return[i,"LinearTransferOETF"];case Ut:case ld:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ym(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+DT(n.getShaderSource(e),o)}else return r}function IT(n,e){const t=NT(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function UT(n,e){let t;switch(e){case Kv:t="Linear";break;case Jv:t="Reinhard";break;case Qv:t="OptimizedCineon";break;case sd:t="ACESFilmic";break;case Zv:t="AgX";break;case eM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function FT(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bs).join(`
`)}function OT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(bs).join(`
`)}function zT(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kT(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function bs(n){return n!==""}function Km(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ef(n){return n.replace(BT,GT)}const HT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function GT(n,e){let t=Xe[e];if(t===void 0){const i=HT.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ef(t)}const VT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qm(n){return n.replace(VT,WT)}function WT(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function XT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$v?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Yv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function jT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ks:case Js:e="ENVMAP_TYPE_CUBE";break;case Pc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function $T(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case rd:e="ENVMAP_BLENDING_MULTIPLY";break;case QS:e="ENVMAP_BLENDING_MIX";break;case ZS:e="ENVMAP_BLENDING_ADD";break}return e}function YT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function KT(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=XT(t),c=jT(t),u=qT(t),h=$T(t),d=YT(t),p=t.isWebGL2?"":FT(t),v=OT(t),x=zT(s),m=r.createProgram();let f,_,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(bs).join(`
`),f.length>0&&(f+=`
`),_=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(bs).join(`
`),_.length>0&&(_+=`
`)):(f=[Zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),_=[p,Zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?Xe.tonemapping_pars_fragment:"",t.toneMapping!==ir?UT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,IT("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bs).join(`
`)),o=ef(o),o=Km(o,t),o=Jm(o,t),a=ef(a),a=Km(a,t),a=Jm(a,t),o=Qm(o),a=Qm(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,f=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===vm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=g+f+o,P=g+_+a,E=$m(r,r.VERTEX_SHADER,y),w=$m(r,r.FRAGMENT_SHADER,P);r.attachShader(m,E),r.attachShader(m,w),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function D(L){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(m).trim(),b=r.getShaderInfoLog(E).trim(),U=r.getShaderInfoLog(w).trim();let H=!0,q=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,E,w);else{const N=Ym(r,E,"vertex"),O=Ym(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+B+`
`+N+`
`+O)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(b===""||U==="")&&(q=!1);q&&(L.diagnostics={runnable:H,programLog:B,vertexShader:{log:b,prefix:f},fragmentShader:{log:U,prefix:_}})}r.deleteShader(E),r.deleteShader(w),S=new Dl(r,m),A=kT(r,m)}let S;this.getUniforms=function(){return S===void 0&&D(this),S};let A;this.getAttributes=function(){return A===void 0&&D(this),A};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(m,PT)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=LT++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=w,this}let JT=0;class QT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ZT(e),t.set(e,i)),i}}class ZT{constructor(e){this.id=JT++,this.code=e,this.usedTimes=0}}function eA(n,e,t,i,r,s,o){const a=new p_,l=new QT,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function m(S,A,k,L,B){const b=L.fog,U=B.geometry,H=S.isMeshStandardMaterial?L.environment:null,q=(S.isMeshStandardMaterial?t:e).get(S.envMap||H),N=q&&q.mapping===Pc?q.image.height:null,O=v[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const V=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Q=V!==void 0?V.length:0;let ae=0;U.morphAttributes.position!==void 0&&(ae=1),U.morphAttributes.normal!==void 0&&(ae=2),U.morphAttributes.color!==void 0&&(ae=3);let $,te,de,fe;if(O){const Kt=oi[O];$=Kt.vertexShader,te=Kt.fragmentShader}else $=S.vertexShader,te=S.fragmentShader,l.update(S),de=l.getVertexShaderID(S),fe=l.getFragmentShaderID(S);const ge=n.getRenderTarget(),Pe=B.isInstancedMesh===!0,Ie=B.isBatchedMesh===!0,Ae=!!S.map,Le=!!S.matcap,R=!!q,se=!!S.aoMap,Y=!!S.lightMap,re=!!S.bumpMap,K=!!S.normalMap,Me=!!S.displacementMap,ue=!!S.emissiveMap,T=!!S.metalnessMap,M=!!S.roughnessMap,z=S.anisotropy>0,ie=S.clearcoat>0,Z=S.iridescence>0,W=S.sheen>0,he=S.transmission>0,oe=z&&!!S.anisotropyMap,ve=ie&&!!S.clearcoatMap,Te=ie&&!!S.clearcoatNormalMap,Ce=ie&&!!S.clearcoatRoughnessMap,ne=Z&&!!S.iridescenceMap,Ge=Z&&!!S.iridescenceThicknessMap,Ue=W&&!!S.sheenColorMap,ye=W&&!!S.sheenRoughnessMap,be=!!S.specularMap,Ee=!!S.specularColorMap,Oe=!!S.specularIntensityMap,Ze=he&&!!S.transmissionMap,it=he&&!!S.thicknessMap,Be=!!S.gradientMap,pe=!!S.alphaMap,F=S.alphaTest>0,_e=!!S.alphaHash,xe=!!S.extensions,Fe=!!U.attributes.uv1,De=!!U.attributes.uv2,rt=!!U.attributes.uv3;let st=ir;return S.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(st=n.toneMapping),{isWebGL2:u,shaderID:O,shaderType:S.type,shaderName:S.name,vertexShader:$,fragmentShader:te,defines:S.defines,customVertexShaderID:de,customFragmentShaderID:fe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ie,instancing:Pe,instancingColor:Pe&&B.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Ni,map:Ae,matcap:Le,envMap:R,envMapMode:R&&q.mapping,envMapCubeUVHeight:N,aoMap:se,lightMap:Y,bumpMap:re,normalMap:K,displacementMap:d&&Me,emissiveMap:ue,normalMapObjectSpace:K&&S.normalMapType===fM,normalMapTangentSpace:K&&S.normalMapType===ad,metalnessMap:T,roughnessMap:M,anisotropy:z,anisotropyMap:oe,clearcoat:ie,clearcoatMap:ve,clearcoatNormalMap:Te,clearcoatRoughnessMap:Ce,iridescence:Z,iridescenceMap:ne,iridescenceThicknessMap:Ge,sheen:W,sheenColorMap:Ue,sheenRoughnessMap:ye,specularMap:be,specularColorMap:Ee,specularIntensityMap:Oe,transmission:he,transmissionMap:Ze,thicknessMap:it,gradientMap:Be,opaque:S.transparent===!1&&S.blending===Bs,alphaMap:pe,alphaTest:F,alphaHash:_e,combine:S.combine,mapUv:Ae&&x(S.map.channel),aoMapUv:se&&x(S.aoMap.channel),lightMapUv:Y&&x(S.lightMap.channel),bumpMapUv:re&&x(S.bumpMap.channel),normalMapUv:K&&x(S.normalMap.channel),displacementMapUv:Me&&x(S.displacementMap.channel),emissiveMapUv:ue&&x(S.emissiveMap.channel),metalnessMapUv:T&&x(S.metalnessMap.channel),roughnessMapUv:M&&x(S.roughnessMap.channel),anisotropyMapUv:oe&&x(S.anisotropyMap.channel),clearcoatMapUv:ve&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Te&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:ye&&x(S.sheenRoughnessMap.channel),specularMapUv:be&&x(S.specularMap.channel),specularColorMapUv:Ee&&x(S.specularColorMap.channel),specularIntensityMapUv:Oe&&x(S.specularIntensityMap.channel),transmissionMapUv:Ze&&x(S.transmissionMap.channel),thicknessMapUv:it&&x(S.thicknessMap.channel),alphaMapUv:pe&&x(S.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(K||z),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Fe,vertexUv2s:De,vertexUv3s:rt,pointsUvs:B.isPoints===!0&&!!U.attributes.uv&&(Ae||pe),fog:!!b,useFog:S.fog===!0,fogExp2:b&&b.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ae,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ae&&S.map.isVideoTexture===!0&&tt.getTransfer(S.map.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===hn,flipSided:S.side===vn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:xe&&S.extensions.derivatives===!0,extensionFragDepth:xe&&S.extensions.fragDepth===!0,extensionDrawBuffers:xe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)A.push(k),A.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(_(A,S),g(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function _(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function g(S,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const A=v[S.type];let k;if(A){const L=oi[A];k=la.clone(L.uniforms)}else k=S.uniforms;return k}function P(S,A){let k;for(let L=0,B=c.length;L<B;L++){const b=c[L];if(b.cacheKey===A){k=b,++k.usedTimes;break}}return k===void 0&&(k=new KT(n,A,S,s),c.push(k)),k}function E(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function w(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:P,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:D}}function tA(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function nA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function e0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function t0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,p,v,x,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:v,renderOrder:h.renderOrder,z:x,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=v,f.renderOrder=h.renderOrder,f.z=x,f.group=m),e++,f}function a(h,d,p,v,x,m){const f=o(h,d,p,v,x,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(h,d,p,v,x,m){const f=o(h,d,p,v,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||nA),i.length>1&&i.sort(d||e0),r.length>1&&r.sort(d||e0)}function u(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function iA(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new t0,n.set(i,[o])):r>=s.length?(o=new t0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function rA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ke};break;case"SpotLight":t={position:new I,direction:new I,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function sA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let oA=0;function aA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function lA(n,e){const t=new rA,i=sA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,o=new ft,a=new ft;function l(u,h){let d=0,p=0,v=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let x=0,m=0,f=0,_=0,g=0,y=0,P=0,E=0,w=0,D=0,S=0;u.sort(aA);const A=h===!0?Math.PI:1;for(let L=0,B=u.length;L<B;L++){const b=u[L],U=b.color,H=b.intensity,q=b.distance,N=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)d+=U.r*H*A,p+=U.g*H*A,v+=U.b*H*A;else if(b.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(b.sh.coefficients[O],H);S++}else if(b.isDirectionalLight){const O=t.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity*A),b.castShadow){const V=b.shadow,Q=i.get(b);Q.shadowBias=V.bias,Q.shadowNormalBias=V.normalBias,Q.shadowRadius=V.radius,Q.shadowMapSize=V.mapSize,r.directionalShadow[x]=Q,r.directionalShadowMap[x]=N,r.directionalShadowMatrix[x]=b.shadow.matrix,y++}r.directional[x]=O,x++}else if(b.isSpotLight){const O=t.get(b);O.position.setFromMatrixPosition(b.matrixWorld),O.color.copy(U).multiplyScalar(H*A),O.distance=q,O.coneCos=Math.cos(b.angle),O.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),O.decay=b.decay,r.spot[f]=O;const V=b.shadow;if(b.map&&(r.spotLightMap[w]=b.map,w++,V.updateMatrices(b),b.castShadow&&D++),r.spotLightMatrix[f]=V.matrix,b.castShadow){const Q=i.get(b);Q.shadowBias=V.bias,Q.shadowNormalBias=V.normalBias,Q.shadowRadius=V.radius,Q.shadowMapSize=V.mapSize,r.spotShadow[f]=Q,r.spotShadowMap[f]=N,E++}f++}else if(b.isRectAreaLight){const O=t.get(b);O.color.copy(U).multiplyScalar(H),O.halfWidth.set(b.width*.5,0,0),O.halfHeight.set(0,b.height*.5,0),r.rectArea[_]=O,_++}else if(b.isPointLight){const O=t.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity*A),O.distance=b.distance,O.decay=b.decay,b.castShadow){const V=b.shadow,Q=i.get(b);Q.shadowBias=V.bias,Q.shadowNormalBias=V.normalBias,Q.shadowRadius=V.radius,Q.shadowMapSize=V.mapSize,Q.shadowCameraNear=V.camera.near,Q.shadowCameraFar=V.camera.far,r.pointShadow[m]=Q,r.pointShadowMap[m]=N,r.pointShadowMatrix[m]=b.shadow.matrix,P++}r.point[m]=O,m++}else if(b.isHemisphereLight){const O=t.get(b);O.skyColor.copy(b.color).multiplyScalar(H*A),O.groundColor.copy(b.groundColor).multiplyScalar(H*A),r.hemi[g]=O,g++}}_>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=v;const k=r.hash;(k.directionalLength!==x||k.pointLength!==m||k.spotLength!==f||k.rectAreaLength!==_||k.hemiLength!==g||k.numDirectionalShadows!==y||k.numPointShadows!==P||k.numSpotShadows!==E||k.numSpotMaps!==w||k.numLightProbes!==S)&&(r.directional.length=x,r.spot.length=f,r.rectArea.length=_,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=E+w-D,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=S,k.directionalLength=x,k.pointLength=m,k.spotLength=f,k.rectAreaLength=_,k.hemiLength=g,k.numDirectionalShadows=y,k.numPointShadows=P,k.numSpotShadows=E,k.numSpotMaps=w,k.numLightProbes=S,r.version=oA++)}function c(u,h){let d=0,p=0,v=0,x=0,m=0;const f=h.matrixWorldInverse;for(let _=0,g=u.length;_<g;_++){const y=u[_];if(y.isDirectionalLight){const P=r.directional[d];P.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(f),d++}else if(y.isSpotLight){const P=r.spot[v];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(f),v++}else if(y.isRectAreaLight){const P=r.rectArea[x];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),P.halfWidth.set(y.width*.5,0,0),P.halfHeight.set(0,y.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const P=r.point[p];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const P=r.hemi[m];P.direction.setFromMatrixPosition(y.matrixWorld),P.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:r}}function n0(n,e){const t=new lA(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function cA(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new n0(n,e),t.set(s,[l])):o>=a.length?(l=new n0(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class uA extends pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hA extends pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dA=`uniform sampler2D shadow_pass;
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
}`;function pA(n,e,t){let i=new ud;const r=new le,s=new le,o=new Ft,a=new uA({depthPacking:hM}),l=new hA,c={},u=t.maxTextureSize,h={[cr]:vn,[vn]:cr,[hn]:hn},d=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:fA,fragmentShader:dA}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new At;v.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new qe(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$v;let f=this.type;this.render=function(E,w,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=n.getRenderTarget(),A=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Ci),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const B=f!==yi&&this.type===yi,b=f===yi&&this.type!==yi;for(let U=0,H=E.length;U<H;U++){const q=E[U],N=q.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const O=N.getFrameExtents();if(r.multiply(O),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/O.x),r.x=s.x*O.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/O.y),r.y=s.y*O.y,N.mapSize.y=s.y)),N.map===null||B===!0||b===!0){const Q=this.type!==yi?{minFilter:tn,magFilter:tn}:{};N.map!==null&&N.map.dispose(),N.map=new Hn(r.x,r.y,Q),N.map.texture.name=q.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const V=N.getViewportCount();for(let Q=0;Q<V;Q++){const ae=N.getViewport(Q);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),L.viewport(o),N.updateMatrices(q,Q),i=N.getFrustum(),y(w,D,N.camera,q,this.type)}N.isPointLightShadow!==!0&&this.type===yi&&_(N,D),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,A,k)};function _(E,w){const D=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Hn(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(w,null,D,d,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(w,null,D,p,x,null)}function g(E,w,D,S){let A=null;const k=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(k!==void 0)A=k;else if(A=D.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const L=A.uuid,B=w.uuid;let b=c[L];b===void 0&&(b={},c[L]=b);let U=b[B];U===void 0&&(U=A.clone(),b[B]=U,w.addEventListener("dispose",P)),A=U}if(A.visible=w.visible,A.wireframe=w.wireframe,S===yi?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:h[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,D.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const L=n.properties.get(A);L.light=D}return A}function y(E,w,D,S,A){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&A===yi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);const B=e.update(E),b=E.material;if(Array.isArray(b)){const U=B.groups;for(let H=0,q=U.length;H<q;H++){const N=U[H],O=b[N.materialIndex];if(O&&O.visible){const V=g(E,O,S,A);E.onBeforeShadow(n,E,w,D,B,V,N),n.renderBufferDirect(D,null,B,V,E,N),E.onAfterShadow(n,E,w,D,B,V,N)}}}else if(b.visible){const U=g(E,b,S,A);E.onBeforeShadow(n,E,w,D,B,U,null),n.renderBufferDirect(D,null,B,U,E,null),E.onAfterShadow(n,E,w,D,B,U,null)}}const L=E.children;for(let B=0,b=L.length;B<b;B++)y(L[B],w,D,S,A)}function P(E){E.target.removeEventListener("dispose",P);for(const D in c){const S=c[D],A=E.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}function mA(n,e,t){const i=t.isWebGL2;function r(){let F=!1;const _e=new Ft;let xe=null;const Fe=new Ft(0,0,0,0);return{setMask:function(De){xe!==De&&!F&&(n.colorMask(De,De,De,De),xe=De)},setLocked:function(De){F=De},setClear:function(De,rt,st,Lt,Kt){Kt===!0&&(De*=Lt,rt*=Lt,st*=Lt),_e.set(De,rt,st,Lt),Fe.equals(_e)===!1&&(n.clearColor(De,rt,st,Lt),Fe.copy(_e))},reset:function(){F=!1,xe=null,Fe.set(-1,0,0,0)}}}function s(){let F=!1,_e=null,xe=null,Fe=null;return{setTest:function(De){De?Ie(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(De){_e!==De&&!F&&(n.depthMask(De),_e=De)},setFunc:function(De){if(xe!==De){switch(De){case XS:n.depthFunc(n.NEVER);break;case jS:n.depthFunc(n.ALWAYS);break;case qS:n.depthFunc(n.LESS);break;case rc:n.depthFunc(n.LEQUAL);break;case $S:n.depthFunc(n.EQUAL);break;case YS:n.depthFunc(n.GEQUAL);break;case KS:n.depthFunc(n.GREATER);break;case JS:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=De}},setLocked:function(De){F=De},setClear:function(De){Fe!==De&&(n.clearDepth(De),Fe=De)},reset:function(){F=!1,_e=null,xe=null,Fe=null}}}function o(){let F=!1,_e=null,xe=null,Fe=null,De=null,rt=null,st=null,Lt=null,Kt=null;return{setTest:function(ot){F||(ot?Ie(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(ot){_e!==ot&&!F&&(n.stencilMask(ot),_e=ot)},setFunc:function(ot,Jt,ii){(xe!==ot||Fe!==Jt||De!==ii)&&(n.stencilFunc(ot,Jt,ii),xe=ot,Fe=Jt,De=ii)},setOp:function(ot,Jt,ii){(rt!==ot||st!==Jt||Lt!==ii)&&(n.stencilOp(ot,Jt,ii),rt=ot,st=Jt,Lt=ii)},setLocked:function(ot){F=ot},setClear:function(ot){Kt!==ot&&(n.clearStencil(ot),Kt=ot)},reset:function(){F=!1,_e=null,xe=null,Fe=null,De=null,rt=null,st=null,Lt=null,Kt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let d={},p={},v=new WeakMap,x=[],m=null,f=!1,_=null,g=null,y=null,P=null,E=null,w=null,D=null,S=new ke(0,0,0),A=0,k=!1,L=null,B=null,b=null,U=null,H=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,O=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(V)[1]),N=O>=1):V.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),N=O>=2);let Q=null,ae={};const $=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),de=new Ft().fromArray($),fe=new Ft().fromArray(te);function ge(F,_e,xe,Fe){const De=new Uint8Array(4),rt=n.createTexture();n.bindTexture(F,rt),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let st=0;st<xe;st++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(_e,0,n.RGBA,1,1,Fe,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(_e+st,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return rt}const Pe={};Pe[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),Pe[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Pe[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Pe[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(n.DEPTH_TEST),l.setFunc(rc),ue(!1),T(zp),Ie(n.CULL_FACE),K(Ci);function Ie(F){d[F]!==!0&&(n.enable(F),d[F]=!0)}function Ae(F){d[F]!==!1&&(n.disable(F),d[F]=!1)}function Le(F,_e){return p[F]!==_e?(n.bindFramebuffer(F,_e),p[F]=_e,i&&(F===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=_e),F===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=_e)),!0):!1}function R(F,_e){let xe=x,Fe=!1;if(F)if(xe=v.get(_e),xe===void 0&&(xe=[],v.set(_e,xe)),F.isWebGLMultipleRenderTargets){const De=F.texture;if(xe.length!==De.length||xe[0]!==n.COLOR_ATTACHMENT0){for(let rt=0,st=De.length;rt<st;rt++)xe[rt]=n.COLOR_ATTACHMENT0+rt;xe.length=De.length,Fe=!0}}else xe[0]!==n.COLOR_ATTACHMENT0&&(xe[0]=n.COLOR_ATTACHMENT0,Fe=!0);else xe[0]!==n.BACK&&(xe[0]=n.BACK,Fe=!0);Fe&&(t.isWebGL2?n.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function se(F){return m!==F?(n.useProgram(F),m=F,!0):!1}const Y={[Cr]:n.FUNC_ADD,[PS]:n.FUNC_SUBTRACT,[LS]:n.FUNC_REVERSE_SUBTRACT};if(i)Y[Hp]=n.MIN,Y[Gp]=n.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(Y[Hp]=F.MIN_EXT,Y[Gp]=F.MAX_EXT)}const re={[DS]:n.ZERO,[NS]:n.ONE,[IS]:n.SRC_COLOR,[jh]:n.SRC_ALPHA,[BS]:n.SRC_ALPHA_SATURATE,[zS]:n.DST_COLOR,[FS]:n.DST_ALPHA,[US]:n.ONE_MINUS_SRC_COLOR,[qh]:n.ONE_MINUS_SRC_ALPHA,[kS]:n.ONE_MINUS_DST_COLOR,[OS]:n.ONE_MINUS_DST_ALPHA,[HS]:n.CONSTANT_COLOR,[GS]:n.ONE_MINUS_CONSTANT_COLOR,[VS]:n.CONSTANT_ALPHA,[WS]:n.ONE_MINUS_CONSTANT_ALPHA};function K(F,_e,xe,Fe,De,rt,st,Lt,Kt,ot){if(F===Ci){f===!0&&(Ae(n.BLEND),f=!1);return}if(f===!1&&(Ie(n.BLEND),f=!0),F!==RS){if(F!==_||ot!==k){if((g!==Cr||E!==Cr)&&(n.blendEquation(n.FUNC_ADD),g=Cr,E=Cr),ot)switch(F){case Bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xh:n.blendFunc(n.ONE,n.ONE);break;case kp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case kp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,P=null,w=null,D=null,S.set(0,0,0),A=0,_=F,k=ot}return}De=De||_e,rt=rt||xe,st=st||Fe,(_e!==g||De!==E)&&(n.blendEquationSeparate(Y[_e],Y[De]),g=_e,E=De),(xe!==y||Fe!==P||rt!==w||st!==D)&&(n.blendFuncSeparate(re[xe],re[Fe],re[rt],re[st]),y=xe,P=Fe,w=rt,D=st),(Lt.equals(S)===!1||Kt!==A)&&(n.blendColor(Lt.r,Lt.g,Lt.b,Kt),S.copy(Lt),A=Kt),_=F,k=!1}function Me(F,_e){F.side===hn?Ae(n.CULL_FACE):Ie(n.CULL_FACE);let xe=F.side===vn;_e&&(xe=!xe),ue(xe),F.blending===Bs&&F.transparent===!1?K(Ci):K(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const Fe=F.stencilWrite;c.setTest(Fe),Fe&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),z(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Ie(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function ue(F){L!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),L=F)}function T(F){F!==CS?(Ie(n.CULL_FACE),F!==B&&(F===zp?n.cullFace(n.BACK):F===bS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),B=F}function M(F){F!==b&&(N&&n.lineWidth(F),b=F)}function z(F,_e,xe){F?(Ie(n.POLYGON_OFFSET_FILL),(U!==_e||H!==xe)&&(n.polygonOffset(_e,xe),U=_e,H=xe)):Ae(n.POLYGON_OFFSET_FILL)}function ie(F){F?Ie(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function Z(F){F===void 0&&(F=n.TEXTURE0+q-1),Q!==F&&(n.activeTexture(F),Q=F)}function W(F,_e,xe){xe===void 0&&(Q===null?xe=n.TEXTURE0+q-1:xe=Q);let Fe=ae[xe];Fe===void 0&&(Fe={type:void 0,texture:void 0},ae[xe]=Fe),(Fe.type!==F||Fe.texture!==_e)&&(Q!==xe&&(n.activeTexture(xe),Q=xe),n.bindTexture(F,_e||Pe[F]),Fe.type=F,Fe.texture=_e)}function he(){const F=ae[Q];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function oe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(F){de.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),de.copy(F))}function Ze(F){fe.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),fe.copy(F))}function it(F,_e){let xe=h.get(_e);xe===void 0&&(xe=new WeakMap,h.set(_e,xe));let Fe=xe.get(F);Fe===void 0&&(Fe=n.getUniformBlockIndex(_e,F.name),xe.set(F,Fe))}function Be(F,_e){const Fe=h.get(_e).get(F);u.get(_e)!==Fe&&(n.uniformBlockBinding(_e,Fe,F.__bindingPointIndex),u.set(_e,Fe))}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},Q=null,ae={},p={},v=new WeakMap,x=[],m=null,f=!1,_=null,g=null,y=null,P=null,E=null,w=null,D=null,S=new ke(0,0,0),A=0,k=!1,L=null,B=null,b=null,U=null,H=null,de.set(0,0,n.canvas.width,n.canvas.height),fe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ie,disable:Ae,bindFramebuffer:Le,drawBuffers:R,useProgram:se,setBlending:K,setMaterial:Me,setFlipSided:ue,setCullFace:T,setLineWidth:M,setPolygonOffset:z,setScissorTest:ie,activeTexture:Z,bindTexture:W,unbindTexture:he,compressedTexImage2D:oe,compressedTexImage3D:ve,texImage2D:be,texImage3D:Ee,updateUBOMapping:it,uniformBlockBinding:Be,texStorage2D:Ue,texStorage3D:ye,texSubImage2D:Te,texSubImage3D:Ce,compressedTexSubImage2D:ne,compressedTexSubImage3D:Ge,scissor:Oe,viewport:Ze,reset:pe}}function gA(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,M){return p?new OffscreenCanvas(T,M):uc("canvas")}function x(T,M,z,ie){let Z=1;if((T.width>ie||T.height>ie)&&(Z=ie/Math.max(T.width,T.height)),Z<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const W=M?Zh:Math.floor,he=W(Z*T.width),oe=W(Z*T.height);h===void 0&&(h=v(he,oe));const ve=z?v(he,oe):h;return ve.width=he,ve.height=oe,ve.getContext("2d").drawImage(T,0,0,he,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+he+"x"+oe+")."),ve}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return _m(T.width)&&_m(T.height)}function f(T){return a?!1:T.wrapS!==Qn||T.wrapT!==Qn||T.minFilter!==tn&&T.minFilter!==In}function _(T,M){return T.generateMipmaps&&M&&T.minFilter!==tn&&T.minFilter!==In}function g(T){n.generateMipmap(T)}function y(T,M,z,ie,Z=!1){if(a===!1)return M;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=M;if(M===n.RED&&(z===n.FLOAT&&(W=n.R32F),z===n.HALF_FLOAT&&(W=n.R16F),z===n.UNSIGNED_BYTE&&(W=n.R8)),M===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(W=n.R8UI),z===n.UNSIGNED_SHORT&&(W=n.R16UI),z===n.UNSIGNED_INT&&(W=n.R32UI),z===n.BYTE&&(W=n.R8I),z===n.SHORT&&(W=n.R16I),z===n.INT&&(W=n.R32I)),M===n.RG&&(z===n.FLOAT&&(W=n.RG32F),z===n.HALF_FLOAT&&(W=n.RG16F),z===n.UNSIGNED_BYTE&&(W=n.RG8)),M===n.RGBA){const he=Z?oc:tt.getTransfer(ie);z===n.FLOAT&&(W=n.RGBA32F),z===n.HALF_FLOAT&&(W=n.RGBA16F),z===n.UNSIGNED_BYTE&&(W=he===at?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function P(T,M,z){return _(T,z)===!0||T.isFramebufferTexture&&T.minFilter!==tn&&T.minFilter!==In?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function E(T){return T===tn||T===Vp||T===fu?n.NEAREST:n.LINEAR}function w(T){const M=T.target;M.removeEventListener("dispose",w),S(M),M.isVideoTexture&&u.delete(M)}function D(T){const M=T.target;M.removeEventListener("dispose",D),k(M)}function S(T){const M=i.get(T);if(M.__webglInit===void 0)return;const z=T.source,ie=d.get(z);if(ie){const Z=ie[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&A(T),Object.keys(ie).length===0&&d.delete(z)}i.remove(T)}function A(T){const M=i.get(T);n.deleteTexture(M.__webglTexture);const z=T.source,ie=d.get(z);delete ie[M.__cacheKey],o.memory.textures--}function k(T){const M=T.texture,z=i.get(T),ie=i.get(M);if(ie.__webglTexture!==void 0&&(n.deleteTexture(ie.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(z.__webglFramebuffer[Z]))for(let W=0;W<z.__webglFramebuffer[Z].length;W++)n.deleteFramebuffer(z.__webglFramebuffer[Z][W]);else n.deleteFramebuffer(z.__webglFramebuffer[Z]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[Z])}else{if(Array.isArray(z.__webglFramebuffer))for(let Z=0;Z<z.__webglFramebuffer.length;Z++)n.deleteFramebuffer(z.__webglFramebuffer[Z]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let Z=0;Z<z.__webglColorRenderbuffer.length;Z++)z.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[Z]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let Z=0,W=M.length;Z<W;Z++){const he=i.get(M[Z]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),o.memory.textures--),i.remove(M[Z])}i.remove(M),i.remove(T)}let L=0;function B(){L=0}function b(){const T=L;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),L+=1,T}function U(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function H(T,M){const z=i.get(T);if(T.isVideoTexture&&Me(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){const ie=T.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(z,T,M);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+M)}function q(T,M){const z=i.get(T);if(T.version>0&&z.__version!==T.version){de(z,T,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+M)}function N(T,M){const z=i.get(T);if(T.version>0&&z.__version!==T.version){de(z,T,M);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+M)}function O(T,M){const z=i.get(T);if(T.version>0&&z.__version!==T.version){fe(z,T,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+M)}const V={[sc]:n.REPEAT,[Qn]:n.CLAMP_TO_EDGE,[Kh]:n.MIRRORED_REPEAT},Q={[tn]:n.NEAREST,[Vp]:n.NEAREST_MIPMAP_NEAREST,[fu]:n.NEAREST_MIPMAP_LINEAR,[In]:n.LINEAR,[tM]:n.LINEAR_MIPMAP_NEAREST,[aa]:n.LINEAR_MIPMAP_LINEAR},ae={[dM]:n.NEVER,[xM]:n.ALWAYS,[pM]:n.LESS,[c_]:n.LEQUAL,[mM]:n.EQUAL,[_M]:n.GEQUAL,[gM]:n.GREATER,[vM]:n.NOTEQUAL};function $(T,M,z){if(z?(n.texParameteri(T,n.TEXTURE_WRAP_S,V[M.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,V[M.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,V[M.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Q[M.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Q[M.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==Qn||M.wrapT!==Qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,E(M.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,E(M.minFilter)),M.minFilter!==tn&&M.minFilter!==In&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===tn||M.minFilter!==fu&&M.minFilter!==aa||M.type===$i&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===fi&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(T,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function te(T,M){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",w));const ie=M.source;let Z=d.get(ie);Z===void 0&&(Z={},d.set(ie,Z));const W=U(M);if(W!==T.__cacheKey){Z[W]===void 0&&(Z[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Z[W].usedTimes++;const he=Z[T.__cacheKey];he!==void 0&&(Z[T.__cacheKey].usedTimes--,he.usedTimes===0&&A(M)),T.__cacheKey=W,T.__webglTexture=Z[W].texture}return z}function de(T,M,z){let ie=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ie=n.TEXTURE_3D);const Z=te(T,M),W=M.source;t.bindTexture(ie,T.__webglTexture,n.TEXTURE0+z);const he=i.get(W);if(W.version!==he.__version||Z===!0){t.activeTexture(n.TEXTURE0+z);const oe=tt.getPrimaries(tt.workingColorSpace),ve=M.colorSpace===On?null:tt.getPrimaries(M.colorSpace),Te=M.colorSpace===On||oe===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ce=f(M)&&m(M.image)===!1;let ne=x(M.image,Ce,!1,r.maxTextureSize);ne=ue(M,ne);const Ge=m(ne)||a,Ue=s.convert(M.format,M.colorSpace);let ye=s.convert(M.type),be=y(M.internalFormat,Ue,ye,M.colorSpace,M.isVideoTexture);$(ie,M,Ge);let Ee;const Oe=M.mipmaps,Ze=a&&M.isVideoTexture!==!0&&be!==a_,it=he.__version===void 0||Z===!0,Be=P(M,ne,Ge);if(M.isDepthTexture)be=n.DEPTH_COMPONENT,a?M.type===$i?be=n.DEPTH_COMPONENT32F:M.type===qi?be=n.DEPTH_COMPONENT24:M.type===zr?be=n.DEPTH24_STENCIL8:be=n.DEPTH_COMPONENT16:M.type===$i&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===kr&&be===n.DEPTH_COMPONENT&&M.type!==od&&M.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=qi,ye=s.convert(M.type)),M.format===Qs&&be===n.DEPTH_COMPONENT&&(be=n.DEPTH_STENCIL,M.type!==zr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=zr,ye=s.convert(M.type))),it&&(Ze?t.texStorage2D(n.TEXTURE_2D,1,be,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,be,ne.width,ne.height,0,Ue,ye,null));else if(M.isDataTexture)if(Oe.length>0&&Ge){Ze&&it&&t.texStorage2D(n.TEXTURE_2D,Be,be,Oe[0].width,Oe[0].height);for(let pe=0,F=Oe.length;pe<F;pe++)Ee=Oe[pe],Ze?t.texSubImage2D(n.TEXTURE_2D,pe,0,0,Ee.width,Ee.height,Ue,ye,Ee.data):t.texImage2D(n.TEXTURE_2D,pe,be,Ee.width,Ee.height,0,Ue,ye,Ee.data);M.generateMipmaps=!1}else Ze?(it&&t.texStorage2D(n.TEXTURE_2D,Be,be,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,Ue,ye,ne.data)):t.texImage2D(n.TEXTURE_2D,0,be,ne.width,ne.height,0,Ue,ye,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ze&&it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Be,be,Oe[0].width,Oe[0].height,ne.depth);for(let pe=0,F=Oe.length;pe<F;pe++)Ee=Oe[pe],M.format!==Zn?Ue!==null?Ze?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,Ee.width,Ee.height,ne.depth,Ue,Ee.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,be,Ee.width,Ee.height,ne.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,Ee.width,Ee.height,ne.depth,Ue,ye,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,be,Ee.width,Ee.height,ne.depth,0,Ue,ye,Ee.data)}else{Ze&&it&&t.texStorage2D(n.TEXTURE_2D,Be,be,Oe[0].width,Oe[0].height);for(let pe=0,F=Oe.length;pe<F;pe++)Ee=Oe[pe],M.format!==Zn?Ue!==null?Ze?t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,Ee.width,Ee.height,Ue,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,be,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage2D(n.TEXTURE_2D,pe,0,0,Ee.width,Ee.height,Ue,ye,Ee.data):t.texImage2D(n.TEXTURE_2D,pe,be,Ee.width,Ee.height,0,Ue,ye,Ee.data)}else if(M.isDataArrayTexture)Ze?(it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Be,be,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Ue,ye,ne.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,ne.width,ne.height,ne.depth,0,Ue,ye,ne.data);else if(M.isData3DTexture)Ze?(it&&t.texStorage3D(n.TEXTURE_3D,Be,be,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Ue,ye,ne.data)):t.texImage3D(n.TEXTURE_3D,0,be,ne.width,ne.height,ne.depth,0,Ue,ye,ne.data);else if(M.isFramebufferTexture){if(it)if(Ze)t.texStorage2D(n.TEXTURE_2D,Be,be,ne.width,ne.height);else{let pe=ne.width,F=ne.height;for(let _e=0;_e<Be;_e++)t.texImage2D(n.TEXTURE_2D,_e,be,pe,F,0,Ue,ye,null),pe>>=1,F>>=1}}else if(Oe.length>0&&Ge){Ze&&it&&t.texStorage2D(n.TEXTURE_2D,Be,be,Oe[0].width,Oe[0].height);for(let pe=0,F=Oe.length;pe<F;pe++)Ee=Oe[pe],Ze?t.texSubImage2D(n.TEXTURE_2D,pe,0,0,Ue,ye,Ee):t.texImage2D(n.TEXTURE_2D,pe,be,Ue,ye,Ee);M.generateMipmaps=!1}else Ze?(it&&t.texStorage2D(n.TEXTURE_2D,Be,be,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ue,ye,ne)):t.texImage2D(n.TEXTURE_2D,0,be,Ue,ye,ne);_(M,Ge)&&g(ie),he.__version=W.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function fe(T,M,z){if(M.image.length!==6)return;const ie=te(T,M),Z=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+z);const W=i.get(Z);if(Z.version!==W.__version||ie===!0){t.activeTexture(n.TEXTURE0+z);const he=tt.getPrimaries(tt.workingColorSpace),oe=M.colorSpace===On?null:tt.getPrimaries(M.colorSpace),ve=M.colorSpace===On||he===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Te=M.isCompressedTexture||M.image[0].isCompressedTexture,Ce=M.image[0]&&M.image[0].isDataTexture,ne=[];for(let pe=0;pe<6;pe++)!Te&&!Ce?ne[pe]=x(M.image[pe],!1,!0,r.maxCubemapSize):ne[pe]=Ce?M.image[pe].image:M.image[pe],ne[pe]=ue(M,ne[pe]);const Ge=ne[0],Ue=m(Ge)||a,ye=s.convert(M.format,M.colorSpace),be=s.convert(M.type),Ee=y(M.internalFormat,ye,be,M.colorSpace),Oe=a&&M.isVideoTexture!==!0,Ze=W.__version===void 0||ie===!0;let it=P(M,Ge,Ue);$(n.TEXTURE_CUBE_MAP,M,Ue);let Be;if(Te){Oe&&Ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,it,Ee,Ge.width,Ge.height);for(let pe=0;pe<6;pe++){Be=ne[pe].mipmaps;for(let F=0;F<Be.length;F++){const _e=Be[F];M.format!==Zn?ye!==null?Oe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,F,0,0,_e.width,_e.height,ye,_e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,F,Ee,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,F,0,0,_e.width,_e.height,ye,be,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,F,Ee,_e.width,_e.height,0,ye,be,_e.data)}}}else{Be=M.mipmaps,Oe&&Ze&&(Be.length>0&&it++,t.texStorage2D(n.TEXTURE_CUBE_MAP,it,Ee,ne[0].width,ne[0].height));for(let pe=0;pe<6;pe++)if(Ce){Oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ne[pe].width,ne[pe].height,ye,be,ne[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ee,ne[pe].width,ne[pe].height,0,ye,be,ne[pe].data);for(let F=0;F<Be.length;F++){const xe=Be[F].image[pe].image;Oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,F+1,0,0,xe.width,xe.height,ye,be,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,F+1,Ee,xe.width,xe.height,0,ye,be,xe.data)}}else{Oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ye,be,ne[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ee,ye,be,ne[pe]);for(let F=0;F<Be.length;F++){const _e=Be[F];Oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,F+1,0,0,ye,be,_e.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,F+1,Ee,ye,be,_e.image[pe])}}}_(M,Ue)&&g(n.TEXTURE_CUBE_MAP),W.__version=Z.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ge(T,M,z,ie,Z,W){const he=s.convert(z.format,z.colorSpace),oe=s.convert(z.type),ve=y(z.internalFormat,he,oe,z.colorSpace);if(!i.get(M).__hasExternalTextures){const Ce=Math.max(1,M.width>>W),ne=Math.max(1,M.height>>W);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,W,ve,Ce,ne,M.depth,0,he,oe,null):t.texImage2D(Z,W,ve,Ce,ne,0,he,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),K(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,Z,i.get(z).__webglTexture,0,re(M)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,Z,i.get(z).__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(T,M,z){if(n.bindRenderbuffer(n.RENDERBUFFER,T),M.depthBuffer&&!M.stencilBuffer){let ie=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||K(M)){const Z=M.depthTexture;Z&&Z.isDepthTexture&&(Z.type===$i?ie=n.DEPTH_COMPONENT32F:Z.type===qi&&(ie=n.DEPTH_COMPONENT24));const W=re(M);K(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,W,ie,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,W,ie,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,ie,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(M.depthBuffer&&M.stencilBuffer){const ie=re(M);z&&K(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,M.width,M.height):K(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{const ie=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Z=0;Z<ie.length;Z++){const W=ie[Z],he=s.convert(W.format,W.colorSpace),oe=s.convert(W.type),ve=y(W.internalFormat,he,oe,W.colorSpace),Te=re(M);z&&K(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,ve,M.width,M.height):K(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,ve,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ve,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);const ie=i.get(M.depthTexture).__webglTexture,Z=re(M);if(M.depthTexture.format===kr)K(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(M.depthTexture.format===Qs)K(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ae(T){const M=i.get(T),z=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ie(M.__webglFramebuffer,T)}else if(z){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]=n.createRenderbuffer(),Pe(M.__webglDepthbuffer[ie],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),Pe(M.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(T,M,z){const ie=i.get(T);M!==void 0&&ge(ie.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Ae(T)}function R(T){const M=T.texture,z=i.get(T),ie=i.get(M);T.addEventListener("dispose",D),T.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=M.version,o.memory.textures++);const Z=T.isWebGLCubeRenderTarget===!0,W=T.isWebGLMultipleRenderTargets===!0,he=m(T)||a;if(Z){z.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[oe]=[];for(let ve=0;ve<M.mipmaps.length;ve++)z.__webglFramebuffer[oe][ve]=n.createFramebuffer()}else z.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let oe=0;oe<M.mipmaps.length;oe++)z.__webglFramebuffer[oe]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(W)if(r.drawBuffers){const oe=T.texture;for(let ve=0,Te=oe.length;ve<Te;ve++){const Ce=i.get(oe[ve]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&K(T)===!1){const oe=W?M:[M];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ve=0;ve<oe.length;ve++){const Te=oe[ve];z.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ve]);const Ce=s.convert(Te.format,Te.colorSpace),ne=s.convert(Te.type),Ge=y(Te.internalFormat,Ce,ne,Te.colorSpace,T.isXRRenderTarget===!0),Ue=re(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,Ge,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,z.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),$(n.TEXTURE_CUBE_MAP,M,he);for(let oe=0;oe<6;oe++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)ge(z.__webglFramebuffer[oe][ve],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ve);else ge(z.__webglFramebuffer[oe],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);_(M,he)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(W){const oe=T.texture;for(let ve=0,Te=oe.length;ve<Te;ve++){const Ce=oe[ve],ne=i.get(Ce);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),$(n.TEXTURE_2D,Ce,he),ge(z.__webglFramebuffer,T,Ce,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,0),_(Ce,he)&&g(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?oe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,ie.__webglTexture),$(oe,M,he),a&&M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)ge(z.__webglFramebuffer[ve],T,M,n.COLOR_ATTACHMENT0,oe,ve);else ge(z.__webglFramebuffer,T,M,n.COLOR_ATTACHMENT0,oe,0);_(M,he)&&g(oe),t.unbindTexture()}T.depthBuffer&&Ae(T)}function se(T){const M=m(T)||a,z=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ie=0,Z=z.length;ie<Z;ie++){const W=z[ie];if(_(W,M)){const he=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,oe=i.get(W).__webglTexture;t.bindTexture(he,oe),g(he),t.unbindTexture()}}}function Y(T){if(a&&T.samples>0&&K(T)===!1){const M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],z=T.width,ie=T.height;let Z=n.COLOR_BUFFER_BIT;const W=[],he=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(T),ve=T.isWebGLMultipleRenderTargets===!0;if(ve)for(let Te=0;Te<M.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Te=0;Te<M.length;Te++){W.push(n.COLOR_ATTACHMENT0+Te),T.depthBuffer&&W.push(he);const Ce=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Ce===!1&&(T.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ve&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[Te]),Ce===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[he]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[he])),ve){const ne=i.get(M[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,z,ie,0,0,z,ie,Z,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,W)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let Te=0;Te<M.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,oe.__webglColorRenderbuffer[Te]);const Ce=i.get(M[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,Ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function re(T){return Math.min(r.maxSamples,T.samples)}function K(T){const M=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Me(T){const M=o.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function ue(T,M){const z=T.colorSpace,ie=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Jh||z!==Ni&&z!==On&&(tt.getTransfer(z)===at?a===!1?e.has("EXT_sRGB")===!0&&ie===Zn?(T.format=Jh,T.minFilter=In,T.generateMipmaps=!1):M=h_.sRGBToLinear(M):(ie!==Zn||Z!==rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}this.allocateTextureUnit=b,this.resetTextureUnits=B,this.setTexture2D=H,this.setTexture2DArray=q,this.setTexture3D=N,this.setTextureCube=O,this.rebindTextures=Le,this.setupRenderTarget=R,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=K}function vA(n,e,t){const i=t.isWebGL2;function r(s,o=On){let a;const l=tt.getTransfer(o);if(s===rr)return n.UNSIGNED_BYTE;if(s===n_)return n.UNSIGNED_SHORT_4_4_4_4;if(s===i_)return n.UNSIGNED_SHORT_5_5_5_1;if(s===nM)return n.BYTE;if(s===iM)return n.SHORT;if(s===od)return n.UNSIGNED_SHORT;if(s===t_)return n.INT;if(s===qi)return n.UNSIGNED_INT;if(s===$i)return n.FLOAT;if(s===fi)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===rM)return n.ALPHA;if(s===Zn)return n.RGBA;if(s===sM)return n.LUMINANCE;if(s===oM)return n.LUMINANCE_ALPHA;if(s===kr)return n.DEPTH_COMPONENT;if(s===Qs)return n.DEPTH_STENCIL;if(s===Jh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===aM)return n.RED;if(s===r_)return n.RED_INTEGER;if(s===lM)return n.RG;if(s===s_)return n.RG_INTEGER;if(s===o_)return n.RGBA_INTEGER;if(s===du||s===pu||s===mu||s===gu)if(l===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===du)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===pu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===du)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===mu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===gu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wp||s===Xp||s===jp||s===qp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Wp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===jp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===a_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===$p||s===Yp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===$p)return l===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Yp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Kp||s===Jp||s===Qp||s===Zp||s===em||s===tm||s===nm||s===im||s===rm||s===sm||s===om||s===am||s===lm||s===cm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Kp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Jp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Qp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===em)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===nm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===im)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===rm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===om)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===am)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vu||s===um||s===hm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===vu)return l===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===um)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===hm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===cM||s===fm||s===dm||s===pm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===vu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===fm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===dm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===pm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===zr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class _A extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class un extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xA={type:"move"};class Hu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new un;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class yA extends ro{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,v=null;const x=t.getContextAttributes();let m=null,f=null;const _=[],g=[],y=new le;let P=null;const E=new Fn;E.layers.enable(1),E.viewport=new Ft;const w=new Fn;w.layers.enable(2),w.viewport=new Ft;const D=[E,w],S=new _A;S.layers.enable(1),S.layers.enable(2);let A=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let te=_[$];return te===void 0&&(te=new Hu,_[$]=te),te.getTargetRaySpace()},this.getControllerGrip=function($){let te=_[$];return te===void 0&&(te=new Hu,_[$]=te),te.getGripSpace()},this.getHand=function($){let te=_[$];return te===void 0&&(te=new Hu,_[$]=te),te.getHandSpace()};function L($){const te=g.indexOf($.inputSource);if(te===-1)return;const de=_[te];de!==void 0&&(de.update($.inputSource,$.frame,c||o),de.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",b);for(let $=0;$<_.length;$++){const te=g[$];te!==null&&(g[$]=null,_[$].disconnect(te))}A=null,k=null,e.setRenderTarget(m),p=null,d=null,h=null,r=null,f=null,ae.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",B),r.addEventListener("inputsourceschange",b),x.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Hn(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:rr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let te=null,de=null,fe=null;x.depth&&(fe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=x.stencil?Qs:kr,de=x.stencil?zr:qi);const ge={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(ge),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Hn(d.textureWidth,d.textureHeight,{format:Zn,type:rr,depthTexture:new w_(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Pe=e.properties.get(f);Pe.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function b($){for(let te=0;te<$.removed.length;te++){const de=$.removed[te],fe=g.indexOf(de);fe>=0&&(g[fe]=null,_[fe].disconnect(de))}for(let te=0;te<$.added.length;te++){const de=$.added[te];let fe=g.indexOf(de);if(fe===-1){for(let Pe=0;Pe<_.length;Pe++)if(Pe>=g.length){g.push(de),fe=Pe;break}else if(g[Pe]===null){g[Pe]=de,fe=Pe;break}if(fe===-1)break}const ge=_[fe];ge&&ge.connect(de)}}const U=new I,H=new I;function q($,te,de){U.setFromMatrixPosition(te.matrixWorld),H.setFromMatrixPosition(de.matrixWorld);const fe=U.distanceTo(H),ge=te.projectionMatrix.elements,Pe=de.projectionMatrix.elements,Ie=ge[14]/(ge[10]-1),Ae=ge[14]/(ge[10]+1),Le=(ge[9]+1)/ge[5],R=(ge[9]-1)/ge[5],se=(ge[8]-1)/ge[0],Y=(Pe[8]+1)/Pe[0],re=Ie*se,K=Ie*Y,Me=fe/(-se+Y),ue=Me*-se;te.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ue),$.translateZ(Me),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const T=Ie+Me,M=Ae+Me,z=re-ue,ie=K+(fe-ue),Z=Le*Ae/M*T,W=R*Ae/M*T;$.projectionMatrix.makePerspective(z,ie,Z,W,T,M),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function N($,te){te===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(te.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;S.near=w.near=E.near=$.near,S.far=w.far=E.far=$.far,(A!==S.near||k!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,k=S.far);const te=$.parent,de=S.cameras;N(S,te);for(let fe=0;fe<de.length;fe++)N(de[fe],te);de.length===2?q(S,E,w):S.projectionMatrix.copy(E.projectionMatrix),O($,S,te)};function O($,te,de){de===null?$.matrix.copy(te.matrixWorld):($.matrix.copy(de.matrixWorld),$.matrix.invert(),$.matrix.multiply(te.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Qh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)};let V=null;function Q($,te){if(u=te.getViewerPose(c||o),v=te,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let fe=!1;de.length!==S.cameras.length&&(S.cameras.length=0,fe=!0);for(let ge=0;ge<de.length;ge++){const Pe=de[ge];let Ie=null;if(p!==null)Ie=p.getViewport(Pe);else{const Le=h.getViewSubImage(d,Pe);Ie=Le.viewport,ge===0&&(e.setRenderTargetTextures(f,Le.colorTexture,d.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(f))}let Ae=D[ge];Ae===void 0&&(Ae=new Fn,Ae.layers.enable(ge),Ae.viewport=new Ft,D[ge]=Ae),Ae.matrix.fromArray(Pe.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Pe.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ge===0&&(S.matrix.copy(Ae.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),fe===!0&&S.cameras.push(Ae)}}for(let de=0;de<_.length;de++){const fe=g[de],ge=_[de];fe!==null&&ge!==void 0&&ge.update(fe,te,c||o)}V&&V($,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),v=null}const ae=new E_;ae.setAnimationLoop(Q),this.setAnimationLoop=function($){V=$},this.dispose=function(){}}}function SA(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,__(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,g,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,g):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===vn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===vn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const g=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*g,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,g){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=g*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===vn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function MA(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const y=g.program;i.uniformBlockBinding(_,y)}function c(_,g){let y=r[_.id];y===void 0&&(v(_),y=u(_),r[_.id]=y,_.addEventListener("dispose",m));const P=g.program;i.updateUBOMapping(_,P);const E=e.render.frame;s[_.id]!==E&&(d(_),s[_.id]=E)}function u(_){const g=h();_.__bindingPointIndex=g;const y=n.createBuffer(),P=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,P,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,y),y}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const g=r[_.id],y=_.uniforms,P=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let E=0,w=y.length;E<w;E++){const D=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,A=D.length;S<A;S++){const k=D[S];if(p(k,E,S,P)===!0){const L=k.__offset,B=Array.isArray(k.value)?k.value:[k.value];let b=0;for(let U=0;U<B.length;U++){const H=B[U],q=x(H);typeof H=="number"||typeof H=="boolean"?(k.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,L+b,k.__data)):H.isMatrix3?(k.__data[0]=H.elements[0],k.__data[1]=H.elements[1],k.__data[2]=H.elements[2],k.__data[3]=0,k.__data[4]=H.elements[3],k.__data[5]=H.elements[4],k.__data[6]=H.elements[5],k.__data[7]=0,k.__data[8]=H.elements[6],k.__data[9]=H.elements[7],k.__data[10]=H.elements[8],k.__data[11]=0):(H.toArray(k.__data,b),b+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,g,y,P){const E=_.value,w=g+"_"+y;if(P[w]===void 0)return typeof E=="number"||typeof E=="boolean"?P[w]=E:P[w]=E.clone(),!0;{const D=P[w];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return P[w]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function v(_){const g=_.uniforms;let y=0;const P=16;for(let w=0,D=g.length;w<D;w++){const S=Array.isArray(g[w])?g[w]:[g[w]];for(let A=0,k=S.length;A<k;A++){const L=S[A],B=Array.isArray(L.value)?L.value:[L.value];for(let b=0,U=B.length;b<U;b++){const H=B[b],q=x(H),N=y%P;N!==0&&P-N<q.boundary&&(y+=P-N),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=q.storage}}}const E=y%P;return E>0&&(y+=P-E),_.__size=y,_.__cache={},this}function x(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const y=o.indexOf(g.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function f(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class P_{constructor(e={}){const{canvas:t=SM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const f=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this._useLegacyLights=!1,this.toneMapping=ir,this.toneMappingExposure=1;const g=this;let y=!1,P=0,E=0,w=null,D=-1,S=null;const A=new Ft,k=new Ft;let L=null;const B=new ke(0);let b=0,U=t.width,H=t.height,q=1,N=null,O=null;const V=new Ft(0,0,U,H),Q=new Ft(0,0,U,H);let ae=!1;const $=new ud;let te=!1,de=!1,fe=null;const ge=new ft,Pe=new le,Ie=new I,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return w===null?q:1}let R=i;function se(C,G){for(let j=0;j<C.length;j++){const J=C[j],X=t.getContext(J,G);if(X!==null)return X}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${id}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",_e,!1),R===null){const G=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&G.shift(),R=se(G,C),R===null)throw se(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&R instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Y,re,K,Me,ue,T,M,z,ie,Z,W,he,oe,ve,Te,Ce,ne,Ge,Ue,ye,be,Ee,Oe,Ze;function it(){Y=new Dw(R),re=new Aw(R,Y,e),Y.init(re),Ee=new vA(R,Y,re),K=new mA(R,Y,re),Me=new Uw(R),ue=new tA,T=new gA(R,Y,K,ue,re,Ee,Me),M=new bw(g),z=new Lw(g),ie=new VM(R,re),Oe=new ww(R,Y,ie,re),Z=new Nw(R,ie,Me,Oe),W=new kw(R,Z,ie,Me),Ue=new zw(R,re,T),Ce=new Cw(ue),he=new eA(g,M,z,Y,re,Oe,Ce),oe=new SA(g,ue),ve=new iA,Te=new cA(Y,re),Ge=new Ew(g,M,z,K,W,d,l),ne=new pA(g,W,re),Ze=new MA(R,Me,re,K),ye=new Tw(R,Y,Me,re),be=new Iw(R,Y,Me,re),Me.programs=he.programs,g.capabilities=re,g.extensions=Y,g.properties=ue,g.renderLists=ve,g.shadowMap=ne,g.state=K,g.info=Me}it();const Be=new yA(g,R);this.xr=Be,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const C=Y.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Y.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(U,H,!1))},this.getSize=function(C){return C.set(U,H)},this.setSize=function(C,G,j=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,H=G,t.width=Math.floor(C*q),t.height=Math.floor(G*q),j===!0&&(t.style.width=C+"px",t.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(U*q,H*q).floor()},this.setDrawingBufferSize=function(C,G,j){U=C,H=G,q=j,t.width=Math.floor(C*j),t.height=Math.floor(G*j),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(V)},this.setViewport=function(C,G,j,J){C.isVector4?V.set(C.x,C.y,C.z,C.w):V.set(C,G,j,J),K.viewport(A.copy(V).multiplyScalar(q).floor())},this.getScissor=function(C){return C.copy(Q)},this.setScissor=function(C,G,j,J){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,G,j,J),K.scissor(k.copy(Q).multiplyScalar(q).floor())},this.getScissorTest=function(){return ae},this.setScissorTest=function(C){K.setScissorTest(ae=C)},this.setOpaqueSort=function(C){N=C},this.setTransparentSort=function(C){O=C},this.getClearColor=function(C){return C.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(C=!0,G=!0,j=!0){let J=0;if(C){let X=!1;if(w!==null){const Se=w.texture.format;X=Se===o_||Se===s_||Se===r_}if(X){const Se=w.texture.type,Re=Se===rr||Se===qi||Se===od||Se===zr||Se===n_||Se===i_,Ne=Ge.getClearColor(),ze=Ge.getClearAlpha(),je=Ne.r,He=Ne.g,Ve=Ne.b;Re?(p[0]=je,p[1]=He,p[2]=Ve,p[3]=ze,R.clearBufferuiv(R.COLOR,0,p)):(v[0]=je,v[1]=He,v[2]=Ve,v[3]=ze,R.clearBufferiv(R.COLOR,0,v))}else J|=R.COLOR_BUFFER_BIT}G&&(J|=R.DEPTH_BUFFER_BIT),j&&(J|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),ve.dispose(),Te.dispose(),ue.dispose(),M.dispose(),z.dispose(),W.dispose(),Oe.dispose(),Ze.dispose(),he.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",Kt),Be.removeEventListener("sessionend",ot),fe&&(fe.dispose(),fe=null),Jt.stop()};function pe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=Me.autoReset,G=ne.enabled,j=ne.autoUpdate,J=ne.needsUpdate,X=ne.type;it(),Me.autoReset=C,ne.enabled=G,ne.autoUpdate=j,ne.needsUpdate=J,ne.type=X}function _e(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function xe(C){const G=C.target;G.removeEventListener("dispose",xe),Fe(G)}function Fe(C){De(C),ue.remove(C)}function De(C){const G=ue.get(C).programs;G!==void 0&&(G.forEach(function(j){he.releaseProgram(j)}),C.isShaderMaterial&&he.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,j,J,X,Se){G===null&&(G=Ae);const Re=X.isMesh&&X.matrixWorld.determinant()<0,Ne=J_(C,G,j,J,X);K.setMaterial(J,Re);let ze=j.index,je=1;if(J.wireframe===!0){if(ze=Z.getWireframeAttribute(j),ze===void 0)return;je=2}const He=j.drawRange,Ve=j.attributes.position;let St=He.start*je,xn=(He.start+He.count)*je;Se!==null&&(St=Math.max(St,Se.start*je),xn=Math.min(xn,(Se.start+Se.count)*je)),ze!==null?(St=Math.max(St,0),xn=Math.min(xn,ze.count)):Ve!=null&&(St=Math.max(St,0),xn=Math.min(xn,Ve.count));const Dt=xn-St;if(Dt<0||Dt===1/0)return;Oe.setup(X,J,Ne,j,ze);let pi,pt=ye;if(ze!==null&&(pi=ie.get(ze),pt=be,pt.setIndex(pi)),X.isMesh)J.wireframe===!0?(K.setLineWidth(J.wireframeLinewidth*Le()),pt.setMode(R.LINES)):pt.setMode(R.TRIANGLES);else if(X.isLine){let $e=J.linewidth;$e===void 0&&($e=1),K.setLineWidth($e*Le()),X.isLineSegments?pt.setMode(R.LINES):X.isLineLoop?pt.setMode(R.LINE_LOOP):pt.setMode(R.LINE_STRIP)}else X.isPoints?pt.setMode(R.POINTS):X.isSprite&&pt.setMode(R.TRIANGLES);if(X.isBatchedMesh)pt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)pt.renderInstances(St,Dt,X.count);else if(j.isInstancedBufferGeometry){const $e=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Fc=Math.min(j.instanceCount,$e);pt.renderInstances(St,Dt,Fc)}else pt.render(St,Dt)};function rt(C,G,j){C.transparent===!0&&C.side===hn&&C.forceSinglePass===!1?(C.side=vn,C.needsUpdate=!0,Sa(C,G,j),C.side=cr,C.needsUpdate=!0,Sa(C,G,j),C.side=hn):Sa(C,G,j)}this.compile=function(C,G,j=null){j===null&&(j=C),m=Te.get(j),m.init(),_.push(m),j.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),C!==j&&C.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(g._useLegacyLights);const J=new Set;return C.traverse(function(X){const Se=X.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const Ne=Se[Re];rt(Ne,j,X),J.add(Ne)}else rt(Se,j,X),J.add(Se)}),_.pop(),m=null,J},this.compileAsync=function(C,G,j=null){const J=this.compile(C,G,j);return new Promise(X=>{function Se(){if(J.forEach(function(Re){ue.get(Re).currentProgram.isReady()&&J.delete(Re)}),J.size===0){X(C);return}setTimeout(Se,10)}Y.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let st=null;function Lt(C){st&&st(C)}function Kt(){Jt.stop()}function ot(){Jt.start()}const Jt=new E_;Jt.setAnimationLoop(Lt),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(C){st=C,Be.setAnimationLoop(C),C===null?Jt.stop():Jt.start()},Be.addEventListener("sessionstart",Kt),Be.addEventListener("sessionend",ot),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(G),G=Be.getCamera()),C.isScene===!0&&C.onBeforeRender(g,C,G,w),m=Te.get(C,_.length),m.init(),_.push(m),ge.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),$.setFromProjectionMatrix(ge),de=this.localClippingEnabled,te=Ce.init(this.clippingPlanes,de),x=ve.get(C,f.length),x.init(),f.push(x),ii(C,G,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(N,O),this.info.render.frame++,te===!0&&Ce.beginShadows();const j=m.state.shadowsArray;if(ne.render(j,C,G),te===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ge.render(x,C),m.setupLights(g._useLegacyLights),G.isArrayCamera){const J=G.cameras;for(let X=0,Se=J.length;X<Se;X++){const Re=J[X];Ed(x,C,Re,Re.viewport)}}else Ed(x,C,G);w!==null&&(T.updateMultisampleRenderTarget(w),T.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(g,C,G),Oe.resetDefaultState(),D=-1,S=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function ii(C,G,j,J){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)j=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$.intersectsSprite(C)){J&&Ie.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ge);const Re=W.update(C),Ne=C.material;Ne.visible&&x.push(C,Re,Ne,j,Ie.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||$.intersectsObject(C))){const Re=W.update(C),Ne=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ie.copy(C.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ie.copy(Re.boundingSphere.center)),Ie.applyMatrix4(C.matrixWorld).applyMatrix4(ge)),Array.isArray(Ne)){const ze=Re.groups;for(let je=0,He=ze.length;je<He;je++){const Ve=ze[je],St=Ne[Ve.materialIndex];St&&St.visible&&x.push(C,Re,St,j,Ie.z,Ve)}}else Ne.visible&&x.push(C,Re,Ne,j,Ie.z,null)}}const Se=C.children;for(let Re=0,Ne=Se.length;Re<Ne;Re++)ii(Se[Re],G,j,J)}function Ed(C,G,j,J){const X=C.opaque,Se=C.transmissive,Re=C.transparent;m.setupLightsView(j),te===!0&&Ce.setGlobalState(g.clippingPlanes,j),Se.length>0&&K_(X,Se,G,j),J&&K.viewport(A.copy(J)),X.length>0&&ya(X,G,j),Se.length>0&&ya(Se,G,j),Re.length>0&&ya(Re,G,j),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function K_(C,G,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const Se=re.isWebGL2;fe===null&&(fe=new Hn(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")?fi:rr,minFilter:aa,samples:Se?4:0})),g.getDrawingBufferSize(Pe),Se?fe.setSize(Pe.x,Pe.y):fe.setSize(Zh(Pe.x),Zh(Pe.y));const Re=g.getRenderTarget();g.setRenderTarget(fe),g.getClearColor(B),b=g.getClearAlpha(),b<1&&g.setClearColor(16777215,.5),g.clear();const Ne=g.toneMapping;g.toneMapping=ir,ya(C,j,J),T.updateMultisampleRenderTarget(fe),T.updateRenderTargetMipmap(fe);let ze=!1;for(let je=0,He=G.length;je<He;je++){const Ve=G[je],St=Ve.object,xn=Ve.geometry,Dt=Ve.material,pi=Ve.group;if(Dt.side===hn&&St.layers.test(J.layers)){const pt=Dt.side;Dt.side=vn,Dt.needsUpdate=!0,wd(St,j,J,xn,Dt,pi),Dt.side=pt,Dt.needsUpdate=!0,ze=!0}}ze===!0&&(T.updateMultisampleRenderTarget(fe),T.updateRenderTargetMipmap(fe)),g.setRenderTarget(Re),g.setClearColor(B,b),g.toneMapping=Ne}function ya(C,G,j){const J=G.isScene===!0?G.overrideMaterial:null;for(let X=0,Se=C.length;X<Se;X++){const Re=C[X],Ne=Re.object,ze=Re.geometry,je=J===null?Re.material:J,He=Re.group;Ne.layers.test(j.layers)&&wd(Ne,G,j,ze,je,He)}}function wd(C,G,j,J,X,Se){C.onBeforeRender(g,G,j,J,X,Se),C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(g,G,j,J,C,Se),X.transparent===!0&&X.side===hn&&X.forceSinglePass===!1?(X.side=vn,X.needsUpdate=!0,g.renderBufferDirect(j,G,J,X,C,Se),X.side=cr,X.needsUpdate=!0,g.renderBufferDirect(j,G,J,X,C,Se),X.side=hn):g.renderBufferDirect(j,G,J,X,C,Se),C.onAfterRender(g,G,j,J,X,Se)}function Sa(C,G,j){G.isScene!==!0&&(G=Ae);const J=ue.get(C),X=m.state.lights,Se=m.state.shadowsArray,Re=X.state.version,Ne=he.getParameters(C,X.state,Se,G,j),ze=he.getProgramCacheKey(Ne);let je=J.programs;J.environment=C.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(C.isMeshStandardMaterial?z:M).get(C.envMap||J.environment),je===void 0&&(C.addEventListener("dispose",xe),je=new Map,J.programs=je);let He=je.get(ze);if(He!==void 0){if(J.currentProgram===He&&J.lightsStateVersion===Re)return Ad(C,Ne),He}else Ne.uniforms=he.getUniforms(C),C.onBuild(j,Ne,g),C.onBeforeCompile(Ne,g),He=he.acquireProgram(Ne,ze),je.set(ze,He),J.uniforms=Ne.uniforms;const Ve=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=Ce.uniform),Ad(C,Ne),J.needsLights=Z_(C),J.lightsStateVersion=Re,J.needsLights&&(Ve.ambientLightColor.value=X.state.ambient,Ve.lightProbe.value=X.state.probe,Ve.directionalLights.value=X.state.directional,Ve.directionalLightShadows.value=X.state.directionalShadow,Ve.spotLights.value=X.state.spot,Ve.spotLightShadows.value=X.state.spotShadow,Ve.rectAreaLights.value=X.state.rectArea,Ve.ltc_1.value=X.state.rectAreaLTC1,Ve.ltc_2.value=X.state.rectAreaLTC2,Ve.pointLights.value=X.state.point,Ve.pointLightShadows.value=X.state.pointShadow,Ve.hemisphereLights.value=X.state.hemi,Ve.directionalShadowMap.value=X.state.directionalShadowMap,Ve.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ve.spotShadowMap.value=X.state.spotShadowMap,Ve.spotLightMatrix.value=X.state.spotLightMatrix,Ve.spotLightMap.value=X.state.spotLightMap,Ve.pointShadowMap.value=X.state.pointShadowMap,Ve.pointShadowMatrix.value=X.state.pointShadowMatrix),J.currentProgram=He,J.uniformsList=null,He}function Td(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=Dl.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function Ad(C,G){const j=ue.get(C);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function J_(C,G,j,J,X){G.isScene!==!0&&(G=Ae),T.resetTextureUnits();const Se=G.fog,Re=J.isMeshStandardMaterial?G.environment:null,Ne=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ni,ze=(J.isMeshStandardMaterial?z:M).get(J.envMap||Re),je=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,He=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ve=!!j.morphAttributes.position,St=!!j.morphAttributes.normal,xn=!!j.morphAttributes.color;let Dt=ir;J.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Dt=g.toneMapping);const pi=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,pt=pi!==void 0?pi.length:0,$e=ue.get(J),Fc=m.state.lights;if(te===!0&&(de===!0||C!==S)){const bn=C===S&&J.id===D;Ce.setState(J,C,bn)}let xt=!1;J.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Fc.state.version||$e.outputColorSpace!==Ne||X.isBatchedMesh&&$e.batching===!1||!X.isBatchedMesh&&$e.batching===!0||X.isInstancedMesh&&$e.instancing===!1||!X.isInstancedMesh&&$e.instancing===!0||X.isSkinnedMesh&&$e.skinning===!1||!X.isSkinnedMesh&&$e.skinning===!0||X.isInstancedMesh&&$e.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&$e.instancingColor===!1&&X.instanceColor!==null||$e.envMap!==ze||J.fog===!0&&$e.fog!==Se||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Ce.numPlanes||$e.numIntersection!==Ce.numIntersection)||$e.vertexAlphas!==je||$e.vertexTangents!==He||$e.morphTargets!==Ve||$e.morphNormals!==St||$e.morphColors!==xn||$e.toneMapping!==Dt||re.isWebGL2===!0&&$e.morphTargetsCount!==pt)&&(xt=!0):(xt=!0,$e.__version=J.version);let mr=$e.currentProgram;xt===!0&&(mr=Sa(J,G,X));let Cd=!1,lo=!1,Oc=!1;const Vt=mr.getUniforms(),gr=$e.uniforms;if(K.useProgram(mr.program)&&(Cd=!0,lo=!0,Oc=!0),J.id!==D&&(D=J.id,lo=!0),Cd||S!==C){Vt.setValue(R,"projectionMatrix",C.projectionMatrix),Vt.setValue(R,"viewMatrix",C.matrixWorldInverse);const bn=Vt.map.cameraPosition;bn!==void 0&&bn.setValue(R,Ie.setFromMatrixPosition(C.matrixWorld)),re.logarithmicDepthBuffer&&Vt.setValue(R,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Vt.setValue(R,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,lo=!0,Oc=!0)}if(X.isSkinnedMesh){Vt.setOptional(R,X,"bindMatrix"),Vt.setOptional(R,X,"bindMatrixInverse");const bn=X.skeleton;bn&&(re.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),Vt.setValue(R,"boneTexture",bn.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(Vt.setOptional(R,X,"batchingTexture"),Vt.setValue(R,"batchingTexture",X._matricesTexture,T));const zc=j.morphAttributes;if((zc.position!==void 0||zc.normal!==void 0||zc.color!==void 0&&re.isWebGL2===!0)&&Ue.update(X,j,mr),(lo||$e.receiveShadow!==X.receiveShadow)&&($e.receiveShadow=X.receiveShadow,Vt.setValue(R,"receiveShadow",X.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(gr.envMap.value=ze,gr.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),lo&&(Vt.setValue(R,"toneMappingExposure",g.toneMappingExposure),$e.needsLights&&Q_(gr,Oc),Se&&J.fog===!0&&oe.refreshFogUniforms(gr,Se),oe.refreshMaterialUniforms(gr,J,q,H,fe),Dl.upload(R,Td($e),gr,T)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Dl.upload(R,Td($e),gr,T),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Vt.setValue(R,"center",X.center),Vt.setValue(R,"modelViewMatrix",X.modelViewMatrix),Vt.setValue(R,"normalMatrix",X.normalMatrix),Vt.setValue(R,"modelMatrix",X.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const bn=J.uniformsGroups;for(let kc=0,ex=bn.length;kc<ex;kc++)if(re.isWebGL2){const bd=bn[kc];Ze.update(bd,mr),Ze.bind(bd,mr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mr}function Q_(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function Z_(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,G,j){ue.get(C.texture).__webglTexture=G,ue.get(C.depthTexture).__webglTexture=j;const J=ue.get(C);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=j===void 0,J.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,G){const j=ue.get(C);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,j=0){w=C,P=G,E=j;let J=!0,X=null,Se=!1,Re=!1;if(C){const ze=ue.get(C);ze.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(R.FRAMEBUFFER,null),J=!1):ze.__webglFramebuffer===void 0?T.setupRenderTarget(C):ze.__hasExternalTextures&&T.rebindTextures(C,ue.get(C.texture).__webglTexture,ue.get(C.depthTexture).__webglTexture);const je=C.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Re=!0);const He=ue.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(He[G])?X=He[G][j]:X=He[G],Se=!0):re.isWebGL2&&C.samples>0&&T.useMultisampledRTT(C)===!1?X=ue.get(C).__webglMultisampledFramebuffer:Array.isArray(He)?X=He[j]:X=He,A.copy(C.viewport),k.copy(C.scissor),L=C.scissorTest}else A.copy(V).multiplyScalar(q).floor(),k.copy(Q).multiplyScalar(q).floor(),L=ae;if(K.bindFramebuffer(R.FRAMEBUFFER,X)&&re.drawBuffers&&J&&K.drawBuffers(C,X),K.viewport(A),K.scissor(k),K.setScissorTest(L),Se){const ze=ue.get(C.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+G,ze.__webglTexture,j)}else if(Re){const ze=ue.get(C.texture),je=G||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,ze.__webglTexture,j||0,je)}D=-1},this.readRenderTargetPixels=function(C,G,j,J,X,Se,Re){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ue.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){K.bindFramebuffer(R.FRAMEBUFFER,Ne);try{const ze=C.texture,je=ze.format,He=ze.type;if(je!==Zn&&Ee.convert(je)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=He===fi&&(Y.has("EXT_color_buffer_half_float")||re.isWebGL2&&Y.has("EXT_color_buffer_float"));if(He!==rr&&Ee.convert(He)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===$i&&(re.isWebGL2||Y.has("OES_texture_float")||Y.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-J&&j>=0&&j<=C.height-X&&R.readPixels(G,j,J,X,Ee.convert(je),Ee.convert(He),Se)}finally{const ze=w!==null?ue.get(w).__webglFramebuffer:null;K.bindFramebuffer(R.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(C,G,j=0){const J=Math.pow(2,-j),X=Math.floor(G.image.width*J),Se=Math.floor(G.image.height*J);T.setTexture2D(G,0),R.copyTexSubImage2D(R.TEXTURE_2D,j,0,0,C.x,C.y,X,Se),K.unbindTexture()},this.copyTextureToTexture=function(C,G,j,J=0){const X=G.image.width,Se=G.image.height,Re=Ee.convert(j.format),Ne=Ee.convert(j.type);T.setTexture2D(j,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,j.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,j.unpackAlignment),G.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,J,C.x,C.y,X,Se,Re,Ne,G.image.data):G.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,J,C.x,C.y,G.mipmaps[0].width,G.mipmaps[0].height,Re,G.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,J,C.x,C.y,Re,Ne,G.image),J===0&&j.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),K.unbindTexture()},this.copyTextureToTexture3D=function(C,G,j,J,X=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=C.max.x-C.min.x+1,Re=C.max.y-C.min.y+1,Ne=C.max.z-C.min.z+1,ze=Ee.convert(J.format),je=Ee.convert(J.type);let He;if(J.isData3DTexture)T.setTexture3D(J,0),He=R.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)T.setTexture2DArray(J,0),He=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,J.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,J.unpackAlignment);const Ve=R.getParameter(R.UNPACK_ROW_LENGTH),St=R.getParameter(R.UNPACK_IMAGE_HEIGHT),xn=R.getParameter(R.UNPACK_SKIP_PIXELS),Dt=R.getParameter(R.UNPACK_SKIP_ROWS),pi=R.getParameter(R.UNPACK_SKIP_IMAGES),pt=j.isCompressedTexture?j.mipmaps[X]:j.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,pt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,pt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,C.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,C.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,C.min.z),j.isDataTexture||j.isData3DTexture?R.texSubImage3D(He,X,G.x,G.y,G.z,Se,Re,Ne,ze,je,pt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(He,X,G.x,G.y,G.z,Se,Re,Ne,ze,pt.data)):R.texSubImage3D(He,X,G.x,G.y,G.z,Se,Re,Ne,ze,je,pt),R.pixelStorei(R.UNPACK_ROW_LENGTH,Ve),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,St),R.pixelStorei(R.UNPACK_SKIP_PIXELS,xn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Dt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,pi),X===0&&J.generateMipmaps&&R.generateMipmap(He),K.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?T.setTextureCube(C,0):C.isData3DTexture?T.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?T.setTexture2DArray(C,0):T.setTexture2D(C,0),K.unbindTexture()},this.resetState=function(){P=0,E=0,w=null,K.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ld?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===Lc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ut?Br:l_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Br?Ut:Ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class EA extends P_{}EA.prototype.isWebGL1Renderer=!0;class dd{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=i}clone(){return new dd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wA extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class i0 extends Gn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ps=new ft,r0=new ft,al=[],s0=new Yr,TA=new ft,Eo=new qe,wo=new Kr;class AA extends qe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new i0(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,TA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ps),s0.copy(e.boundingBox).applyMatrix4(ps),this.boundingBox.union(s0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ps),wo.copy(e.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(wo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Eo.geometry=this.geometry,Eo.material=this.material,Eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wo.copy(this.boundingSphere),wo.applyMatrix4(i),e.ray.intersectsSphere(wo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ps),r0.multiplyMatrices(i,ps),Eo.matrixWorld=r0,Eo.raycast(e,al);for(let o=0,a=al.length;o<a;o++){const l=al[o];l.instanceId=s,l.object=this,t.push(l)}al.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new i0(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class L_ extends pr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const o0=new I,a0=new I,l0=new ft,Gu=new cd,ll=new Kr;class CA extends Tt{constructor(e=new At,t=new L_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)o0.fromBufferAttribute(t,r-1),a0.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=o0.distanceTo(a0);e.setAttribute("lineDistance",new Je(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ll.copy(i.boundingSphere),ll.applyMatrix4(r),ll.radius+=s,e.ray.intersectsSphere(ll)===!1)return;l0.copy(r).invert(),Gu.copy(e.ray).applyMatrix4(l0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,u=new I,h=new I,d=new I,p=this.isLineSegments?2:1,v=i.index,m=i.attributes.position;if(v!==null){const f=Math.max(0,o.start),_=Math.min(v.count,o.start+o.count);for(let g=f,y=_-1;g<y;g+=p){const P=v.getX(g),E=v.getX(g+1);if(c.fromBufferAttribute(m,P),u.fromBufferAttribute(m,E),Gu.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let g=f,y=_-1;g<y;g+=p){if(c.fromBufferAttribute(m,g),u.fromBufferAttribute(m,g+1),Gu.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const c0=new I,u0=new I;class bA extends CA{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)c0.fromBufferAttribute(t,r),u0.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+c0.distanceTo(u0);e.setAttribute("lineDistance",new Je(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class D_ extends pr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const h0=new ft,tf=new cd,cl=new Kr,ul=new I;class RA extends Tt{constructor(e=new At,t=new D_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(r),cl.radius+=s,e.ray.intersectsSphere(cl)===!1)return;h0.copy(r).invert(),tf.copy(e.ray).applyMatrix4(h0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=d,x=p;v<x;v++){const m=c.getX(v);ul.fromBufferAttribute(h,m),f0(ul,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=d,x=p;v<x;v++)ul.fromBufferAttribute(h,v),f0(ul,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function f0(n,e,t,i,r,s,o){const a=tf.distanceSqToPoint(n);if(a<t){const l=new I;tf.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class PA extends _n{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class di{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],d=i[r+1]-u,p=(o-u)/d;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new le:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new I,r=[],s=[],o=[],a=new I,l=new ft;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Bt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Bt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class pd extends di{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new le,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class LA extends pd{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function md(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,p*=u,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const hl=new I,Vu=new md,Wu=new md,Xu=new md;class DA extends di{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new I){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(hl.subVectors(r[0],r[1]).add(r[0]),c=hl);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(hl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=hl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);x<1e-4&&(x=1),v<1e-4&&(v=x),m<1e-4&&(m=x),Vu.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,v,x,m),Wu.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,v,x,m),Xu.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,v,x,m)}else this.curveType==="catmullrom"&&(Vu.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Wu.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Xu.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(Vu.calc(l),Wu.calc(l),Xu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function d0(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function NA(n,e){const t=1-n;return t*t*e}function IA(n,e){return 2*(1-n)*n*e}function UA(n,e){return n*n*e}function Ho(n,e,t,i){return NA(n,e)+IA(n,t)+UA(n,i)}function FA(n,e){const t=1-n;return t*t*t*e}function OA(n,e){const t=1-n;return 3*t*t*n*e}function zA(n,e){return 3*(1-n)*n*n*e}function kA(n,e){return n*n*n*e}function Go(n,e,t,i,r){return FA(n,e)+OA(n,t)+zA(n,i)+kA(n,r)}class N_ extends di{constructor(e=new le,t=new le,i=new le,r=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new le){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Go(e,r.x,s.x,o.x,a.x),Go(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class BA extends di{constructor(e=new I,t=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new I){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Go(e,r.x,s.x,o.x,a.x),Go(e,r.y,s.y,o.y,a.y),Go(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class I_ extends di{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class HA extends di{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class U_ extends di{constructor(e=new le,t=new le,i=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new le){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ho(e,r.x,s.x,o.x),Ho(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class GA extends di{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ho(e,r.x,s.x,o.x),Ho(e,r.y,s.y,o.y),Ho(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class F_ extends di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(d0(a,l.x,c.x,u.x,h.x),d0(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new le().fromArray(r))}return this}}var nf=Object.freeze({__proto__:null,ArcCurve:LA,CatmullRomCurve3:DA,CubicBezierCurve:N_,CubicBezierCurve3:BA,EllipseCurve:pd,LineCurve:I_,LineCurve3:HA,QuadraticBezierCurve:U_,QuadraticBezierCurve3:GA,SplineCurve:F_});class VA extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nf[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new nf[r.type]().fromJSON(r))}return this}}class hc extends VA{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new I_(this.currentPoint.clone(),new le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new U_(this.currentPoint.clone(),new le(e,t),new le(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new N_(this.currentPoint.clone(),new le(e,t),new le(i,r),new le(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new F_(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new pd(e,t,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class gd extends At{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Bt(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/t,h=new I,d=new le,p=new I,v=new I,x=new I;let m=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-m,p.z=f*0,v.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(v)}for(let _=0;_<=t;_++){const g=i+_*u*r,y=Math.sin(g),P=Math.cos(g);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*y,h.y=e[E].y,h.z=e[E].x*P,o.push(h.x,h.y,h.z),d.x=_/t,d.y=E/(e.length-1),a.push(d.x,d.y);const w=l[3*E+0]*y,D=l[3*E+1],S=l[3*E+0]*P;c.push(w,D,S)}}for(let _=0;_<t;_++)for(let g=0;g<e.length-1;g++){const y=g+_*e.length,P=y,E=y+e.length,w=y+e.length+1,D=y+1;s.push(P,E,D),s.push(w,D,E)}this.setIndex(s),this.setAttribute("position",new Je(o,3)),this.setAttribute("uv",new Je(a,2)),this.setAttribute("normal",new Je(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gd(e.points,e.segments,e.phiStart,e.phiLength)}}class fc extends gd{constructor(e=1,t=1,i=4,r=8){const s=new hc;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:r}}static fromJSON(e){return new fc(e.radius,e.length,e.capSegments,e.radialSegments)}}class Vo extends At{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new I,u=new le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const p=i+h/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(a,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ic extends At{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],p=[];let v=0;const x=[],m=i/2;let f=0;_(),o===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new Je(h,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(p,2));function _(){const y=new I,P=new I;let E=0;const w=(t-e)/i;for(let D=0;D<=s;D++){const S=[],A=D/s,k=A*(t-e)+e;for(let L=0;L<=r;L++){const B=L/r,b=B*l+a,U=Math.sin(b),H=Math.cos(b);P.x=k*U,P.y=-A*i+m,P.z=k*H,h.push(P.x,P.y,P.z),y.set(U,w,H).normalize(),d.push(y.x,y.y,y.z),p.push(B,1-A),S.push(v++)}x.push(S)}for(let D=0;D<r;D++)for(let S=0;S<s;S++){const A=x[S][D],k=x[S+1][D],L=x[S+1][D+1],B=x[S][D+1];u.push(A,k,B),u.push(k,L,B),E+=6}c.addGroup(f,E,0),f+=E}function g(y){const P=v,E=new le,w=new I;let D=0;const S=y===!0?e:t,A=y===!0?1:-1;for(let L=1;L<=r;L++)h.push(0,m*A,0),d.push(0,A,0),p.push(.5,.5),v++;const k=v;for(let L=0;L<=r;L++){const b=L/r*l+a,U=Math.cos(b),H=Math.sin(b);w.x=S*H,w.y=m*A,w.z=S*U,h.push(w.x,w.y,w.z),d.push(0,A,0),E.x=U*.5+.5,E.y=H*.5*A+.5,p.push(E.x,E.y),v++}for(let L=0;L<r;L++){const B=P+L,b=k+L;y===!0?u.push(b,b+1,B):u.push(b+1,b,B),D+=3}c.addGroup(f,D,y===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const fl=new I,dl=new I,ju=new I,pl=new Un;class WA extends At{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Ll*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},p=[];for(let v=0;v<l;v+=3){o?(c[0]=o.getX(v),c[1]=o.getX(v+1),c[2]=o.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:x,b:m,c:f}=pl;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),pl.getNormal(ju),h[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let _=0;_<3;_++){const g=(_+1)%3,y=h[_],P=h[g],E=pl[u[_]],w=pl[u[g]],D=`${y}_${P}`,S=`${P}_${y}`;S in d&&d[S]?(ju.dot(d[S].normal)<=s&&(p.push(E.x,E.y,E.z),p.push(w.x,w.y,w.z)),d[S]=null):D in d||(d[D]={index0:c[_],index1:c[g],normal:ju.clone()})}}for(const v in d)if(d[v]){const{index0:x,index1:m}=d[v];fl.fromBufferAttribute(a,x),dl.fromBufferAttribute(a,m),p.push(fl.x,fl.y,fl.z),p.push(dl.x,dl.y,dl.z)}this.setAttribute("position",new Je(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class dc extends hc{constructor(e){super(e),this.uuid=so(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new hc().fromJSON(r))}return this}}const XA={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=O_(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,d,p;if(i&&(s=KA(n,e,s,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let v=t;v<r;v+=t)h=n[v],d=n[v+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return ca(s,o,t,a,l,p,0),o}};function O_(n,e,t,i,r){let s,o;if(r===a2(n,e,t,i)>0)for(s=e;s<t;s+=i)o=p0(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=p0(s,n[s],n[s+1],o);return o&&Uc(o,o.next)&&(ha(o),o=o.next),o}function jr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Uc(t,t.next)||gt(t.prev,t,t.next)===0)){if(ha(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ca(n,e,t,i,r,s,o){if(!n)return;!o&&s&&t2(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?qA(n,i,r,s):jA(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),ha(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=$A(jr(n),e,t),ca(n,e,t,i,r,s,2)):o===2&&YA(n,e,t,i,r,s):ca(jr(n),e,t,i,r,s,1);break}}}function jA(n){const e=n.prev,t=n,i=n.next;if(gt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let v=i.next;for(;v!==e;){if(v.x>=u&&v.x<=d&&v.y>=h&&v.y<=p&&Rs(r,a,s,l,o,c,v.x,v.y)&&gt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function qA(n,e,t,i){const r=n.prev,s=n,o=n.next;if(gt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,v=u<h?u<d?u:d:h<d?h:d,x=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,f=rf(p,v,e,t,i),_=rf(x,m,e,t,i);let g=n.prevZ,y=n.nextZ;for(;g&&g.z>=f&&y&&y.z<=_;){if(g.x>=p&&g.x<=x&&g.y>=v&&g.y<=m&&g!==r&&g!==o&&Rs(a,u,l,h,c,d,g.x,g.y)&&gt(g.prev,g,g.next)>=0||(g=g.prevZ,y.x>=p&&y.x<=x&&y.y>=v&&y.y<=m&&y!==r&&y!==o&&Rs(a,u,l,h,c,d,y.x,y.y)&&gt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;g&&g.z>=f;){if(g.x>=p&&g.x<=x&&g.y>=v&&g.y<=m&&g!==r&&g!==o&&Rs(a,u,l,h,c,d,g.x,g.y)&&gt(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;y&&y.z<=_;){if(y.x>=p&&y.x<=x&&y.y>=v&&y.y<=m&&y!==r&&y!==o&&Rs(a,u,l,h,c,d,y.x,y.y)&&gt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function $A(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!Uc(r,s)&&z_(r,i,i.next,s)&&ua(r,s)&&ua(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),ha(i),ha(i.next),i=n=s),i=i.next}while(i!==n);return jr(i)}function YA(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&r2(o,a)){let l=k_(o,a);o=jr(o,o.next),l=jr(l,l.next),ca(o,e,t,i,r,s,0),ca(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function KA(n,e,t,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=O_(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(i2(c));for(r.sort(JA),s=0;s<r.length;s++)t=QA(r[s],t);return t}function JA(n,e){return n.x-e.x}function QA(n,e){const t=ZA(n,e);if(!t)return e;const i=k_(t,n);return jr(i,i.next),jr(t,t.next)}function ZA(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>i&&(i=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Rs(o<c?s:i,o,l,c,o<c?i:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),ua(t,n)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&e2(r,t)))&&(r=t,u=h)),t=t.next;while(t!==a);return r}function e2(n,e){return gt(n.prev,n,e.prev)<0&&gt(e.next,n,n.next)<0}function t2(n,e,t,i){let r=n;do r.z===0&&(r.z=rf(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,n2(r)}function n2(n){let e,t,i,r,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(o>1);return n}function rf(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function i2(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Rs(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function r2(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!s2(n,e)&&(ua(n,e)&&ua(e,n)&&o2(n,e)&&(gt(n.prev,n,e.prev)||gt(n,e.prev,e))||Uc(n,e)&&gt(n.prev,n,n.next)>0&&gt(e.prev,e,e.next)>0)}function gt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Uc(n,e){return n.x===e.x&&n.y===e.y}function z_(n,e,t,i){const r=gl(gt(n,e,t)),s=gl(gt(n,e,i)),o=gl(gt(t,i,n)),a=gl(gt(t,i,e));return!!(r!==s&&o!==a||r===0&&ml(n,t,e)||s===0&&ml(n,i,e)||o===0&&ml(t,n,i)||a===0&&ml(t,e,i))}function ml(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function gl(n){return n>0?1:n<0?-1:0}function s2(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&z_(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ua(n,e){return gt(n.prev,n,n.next)<0?gt(n,e,n.next)>=0&&gt(n,n.prev,e)>=0:gt(n,e,n.prev)<0||gt(n,n.next,e)<0}function o2(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function k_(n,e){const t=new sf(n.i,n.x,n.y),i=new sf(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function p0(n,e,t,i){const r=new sf(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ha(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function sf(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function a2(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class sr{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return sr.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];m0(e),g0(i,e);let o=e.length;t.forEach(m0);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,g0(i,t[l]);const a=XA.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function m0(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function g0(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class vd extends At{constructor(e=new dc([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Je(r,3)),this.setAttribute("uv",new Je(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:l2;let g,y=!1,P,E,w,D;f&&(g=f.getSpacedPoints(u),y=!0,d=!1,P=f.computeFrenetFrames(u,!1),E=new I,w=new I,D=new I),d||(m=0,p=0,v=0,x=0);const S=a.extractPoints(c);let A=S.shape;const k=S.holes;if(!sr.isClockWise(A)){A=A.reverse();for(let R=0,se=k.length;R<se;R++){const Y=k[R];sr.isClockWise(Y)&&(k[R]=Y.reverse())}}const B=sr.triangulateShape(A,k),b=A;for(let R=0,se=k.length;R<se;R++){const Y=k[R];A=A.concat(Y)}function U(R,se,Y){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(se,Y)}const H=A.length,q=B.length;function N(R,se,Y){let re,K,Me;const ue=R.x-se.x,T=R.y-se.y,M=Y.x-R.x,z=Y.y-R.y,ie=ue*ue+T*T,Z=ue*z-T*M;if(Math.abs(Z)>Number.EPSILON){const W=Math.sqrt(ie),he=Math.sqrt(M*M+z*z),oe=se.x-T/W,ve=se.y+ue/W,Te=Y.x-z/he,Ce=Y.y+M/he,ne=((Te-oe)*z-(Ce-ve)*M)/(ue*z-T*M);re=oe+ue*ne-R.x,K=ve+T*ne-R.y;const Ge=re*re+K*K;if(Ge<=2)return new le(re,K);Me=Math.sqrt(Ge/2)}else{let W=!1;ue>Number.EPSILON?M>Number.EPSILON&&(W=!0):ue<-Number.EPSILON?M<-Number.EPSILON&&(W=!0):Math.sign(T)===Math.sign(z)&&(W=!0),W?(re=-T,K=ue,Me=Math.sqrt(ie)):(re=ue,K=T,Me=Math.sqrt(ie/2))}return new le(re/Me,K/Me)}const O=[];for(let R=0,se=b.length,Y=se-1,re=R+1;R<se;R++,Y++,re++)Y===se&&(Y=0),re===se&&(re=0),O[R]=N(b[R],b[Y],b[re]);const V=[];let Q,ae=O.concat();for(let R=0,se=k.length;R<se;R++){const Y=k[R];Q=[];for(let re=0,K=Y.length,Me=K-1,ue=re+1;re<K;re++,Me++,ue++)Me===K&&(Me=0),ue===K&&(ue=0),Q[re]=N(Y[re],Y[Me],Y[ue]);V.push(Q),ae=ae.concat(Q)}for(let R=0;R<m;R++){const se=R/m,Y=p*Math.cos(se*Math.PI/2),re=v*Math.sin(se*Math.PI/2)+x;for(let K=0,Me=b.length;K<Me;K++){const ue=U(b[K],O[K],re);ge(ue.x,ue.y,-Y)}for(let K=0,Me=k.length;K<Me;K++){const ue=k[K];Q=V[K];for(let T=0,M=ue.length;T<M;T++){const z=U(ue[T],Q[T],re);ge(z.x,z.y,-Y)}}}const $=v+x;for(let R=0;R<H;R++){const se=d?U(A[R],ae[R],$):A[R];y?(w.copy(P.normals[0]).multiplyScalar(se.x),E.copy(P.binormals[0]).multiplyScalar(se.y),D.copy(g[0]).add(w).add(E),ge(D.x,D.y,D.z)):ge(se.x,se.y,0)}for(let R=1;R<=u;R++)for(let se=0;se<H;se++){const Y=d?U(A[se],ae[se],$):A[se];y?(w.copy(P.normals[R]).multiplyScalar(Y.x),E.copy(P.binormals[R]).multiplyScalar(Y.y),D.copy(g[R]).add(w).add(E),ge(D.x,D.y,D.z)):ge(Y.x,Y.y,h/u*R)}for(let R=m-1;R>=0;R--){const se=R/m,Y=p*Math.cos(se*Math.PI/2),re=v*Math.sin(se*Math.PI/2)+x;for(let K=0,Me=b.length;K<Me;K++){const ue=U(b[K],O[K],re);ge(ue.x,ue.y,h+Y)}for(let K=0,Me=k.length;K<Me;K++){const ue=k[K];Q=V[K];for(let T=0,M=ue.length;T<M;T++){const z=U(ue[T],Q[T],re);y?ge(z.x,z.y+g[u-1].y,g[u-1].x+Y):ge(z.x,z.y,h+Y)}}}te(),de();function te(){const R=r.length/3;if(d){let se=0,Y=H*se;for(let re=0;re<q;re++){const K=B[re];Pe(K[2]+Y,K[1]+Y,K[0]+Y)}se=u+m*2,Y=H*se;for(let re=0;re<q;re++){const K=B[re];Pe(K[0]+Y,K[1]+Y,K[2]+Y)}}else{for(let se=0;se<q;se++){const Y=B[se];Pe(Y[2],Y[1],Y[0])}for(let se=0;se<q;se++){const Y=B[se];Pe(Y[0]+H*u,Y[1]+H*u,Y[2]+H*u)}}i.addGroup(R,r.length/3-R,0)}function de(){const R=r.length/3;let se=0;fe(b,se),se+=b.length;for(let Y=0,re=k.length;Y<re;Y++){const K=k[Y];fe(K,se),se+=K.length}i.addGroup(R,r.length/3-R,1)}function fe(R,se){let Y=R.length;for(;--Y>=0;){const re=Y;let K=Y-1;K<0&&(K=R.length-1);for(let Me=0,ue=u+m*2;Me<ue;Me++){const T=H*Me,M=H*(Me+1),z=se+re+T,ie=se+K+T,Z=se+K+M,W=se+re+M;Ie(z,ie,Z,W)}}}function ge(R,se,Y){l.push(R),l.push(se),l.push(Y)}function Pe(R,se,Y){Ae(R),Ae(se),Ae(Y);const re=r.length/3,K=_.generateTopUV(i,r,re-3,re-2,re-1);Le(K[0]),Le(K[1]),Le(K[2])}function Ie(R,se,Y,re){Ae(R),Ae(se),Ae(re),Ae(se),Ae(Y),Ae(re);const K=r.length/3,Me=_.generateSideWallUV(i,r,K-6,K-3,K-2,K-1);Le(Me[0]),Le(Me[1]),Le(Me[3]),Le(Me[1]),Le(Me[2]),Le(Me[3])}function Ae(R){r.push(l[R*3+0]),r.push(l[R*3+1]),r.push(l[R*3+2])}function Le(R){s.push(R.x),s.push(R.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return c2(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new nf[r.type]().fromJSON(r)),new vd(i,e.options)}}const l2={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new le(s,o),new le(a,l),new le(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[r*3],p=e[r*3+1],v=e[r*3+2],x=e[s*3],m=e[s*3+1],f=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new le(o,1-l),new le(c,1-h),new le(d,1-v),new le(x,1-f)]:[new le(a,1-l),new le(u,1-h),new le(p,1-v),new le(m,1-f)]}};function c2(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Rr extends At{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/r,p=new I,v=new le;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){const f=s+m/i*o;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/t+1)/2,v.y=(p.y/t+1)/2,u.push(v.x,v.y)}h+=d}for(let x=0;x<r;x++){const m=x*(i+1);for(let f=0;f<i;f++){const _=f+m,g=_,y=_+i+1,P=_+i+2,E=_+1;a.push(g,y,E),a.push(y,P,E)}}this.setIndex(a),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class _d extends At{constructor(e=new dc([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Je(r,3)),this.setAttribute("normal",new Je(s,3)),this.setAttribute("uv",new Je(o,2));function c(u){const h=r.length/3,d=u.extractPoints(t);let p=d.shape;const v=d.holes;sr.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=v.length;m<f;m++){const _=v[m];sr.isClockWise(_)===!0&&(v[m]=_.reverse())}const x=sr.triangulateShape(p,v);for(let m=0,f=v.length;m<f;m++){const _=v[m];p=p.concat(_)}for(let m=0,f=p.length;m<f;m++){const _=p[m];r.push(_.x,_.y,0),s.push(0,0,1),o.push(_.x,_.y)}for(let m=0,f=x.length;m<f;m++){const _=x[m],g=_[0]+h,y=_[1]+h,P=_[2]+h;i.push(g,y,P),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return u2(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new _d(i,e.curveSegments)}}function u2(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class ci extends At{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new I,d=new I,p=[],v=[],x=[],m=[];for(let f=0;f<=i;f++){const _=[],g=f/i;let y=0;f===0&&o===0?y=.5/t:f===i&&l===Math.PI&&(y=-.5/t);for(let P=0;P<=t;P++){const E=P/t;h.x=-e*Math.cos(r+E*s)*Math.sin(o+g*a),h.y=e*Math.cos(o+g*a),h.z=e*Math.sin(r+E*s)*Math.sin(o+g*a),v.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(E+y,1-g),_.push(c++)}u.push(_)}for(let f=0;f<i;f++)for(let _=0;_<t;_++){const g=u[f][_+1],y=u[f][_],P=u[f+1][_],E=u[f+1][_+1];(f!==0||o>0)&&p.push(g,y,E),(f!==i-1||l<Math.PI)&&p.push(y,P,E)}this.setIndex(p),this.setAttribute("position",new Je(v,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xd extends At{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new I,h=new I,d=new I;for(let p=0;p<=i;p++)for(let v=0;v<=r;v++){const x=v/r*s,m=p/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(v/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=r;v++){const x=(r+1)*p+v-1,m=(r+1)*(p-1)+v-1,f=(r+1)*(p-1)+v,_=(r+1)*p+v;o.push(x,m,_),o.push(m,f,_)}this.setIndex(o),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class h2 extends dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Nr extends pr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ad,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class f2 extends pr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ad,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class B_ extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class d2 extends B_{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const qu=new ft,v0=new I,_0=new I;class p2{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ud,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;v0.setFromMatrixPosition(e.matrixWorld),t.position.copy(v0),_0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_0),t.updateMatrixWorld(),qu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class m2 extends p2{constructor(){super(new hd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class g2 extends B_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new m2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class v2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=x0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=x0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function x0(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:id}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=id);const H_={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ao{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const _2=new hd(-1,1,1,-1,0,1);class x2 extends At{constructor(){super(),this.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Je([0,2,0,0,2,0],2))}}const y2=new x2;class yd{constructor(e){this._mesh=new qe(y2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,_2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class G_ extends ao{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof dn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=la.clone(e.uniforms),this.material=new dn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new yd(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class y0 extends ao{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class S2 extends ao{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class M2{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new le);this._width=i.width,this._height=i.height,t=new Hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new G_(H_),this.copyPass.material.blending=Ci,this.clock=new v2}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}y0!==void 0&&(o instanceof y0?i=!0:o instanceof S2&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class E2 extends ao{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ke}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const w2={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ke(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class eo extends ao{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new ke(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Hn(s,o,{type:fi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Hn(s,o,{type:fi});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new Hn(s,o,{type:fi});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const a=w2;this.highPassUniforms=la.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new dn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new le(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=H_;this.copyUniforms=la.clone(u.uniforms),this.blendMaterial=new dn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Xh,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ke,this.oldClearAlpha=1,this.basic=new Zt,this.fsQuad=new yd(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new le(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=eo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=eo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new dn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new dn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}eo.BlurDirectionX=new le(1,0);eo.BlurDirectionY=new le(0,1);const T2={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class A2 extends ao{constructor(){super();const e=T2;this.uniforms=la.clone(e.uniforms),this.material=new h2({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new yd(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},tt.getTransfer(this._outputColorSpace)===at&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Kv?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Jv?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Qv?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===sd?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Zv&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Ir=16,Ur=.14,fa={exp:{label:"Express",games:2,winBy:1,tbAt:0,need:1,cols:1},full:{label:"Completo",games:6,winBy:2,tbAt:6,need:2,cols:3}},C2={drive:{T:1,d:7.2},globo:{T:1.9,d:8.7},dejada:{T:1.25,d:1.9},remate:{T:.62,d:6},saque:{T:1.15,d:5.2},x3:{T:.55,d:3.4},x4:{T:.62,d:8.4}},S0={drive:[-.7,1.7,.28],saque:[-.7,1.7,.28],globo:[.1,2.5,.4],dejada:[.7,1.2,.3],remate:[.6,.15,.46,3.15]},b2=6.95,M0={drive:.5,globo:.35,dejada:-1,remate:.2,saque:.1,x3:.2,x4:.2},R2={drive:.95,globo:.5,dejada:.8,remate:2.2},P2=["Perfecto","Bien","Justo"],V_={"2v2":[0,2,1,3],"1v1":[0,2]},of=n=>n<2?"a":"b",an=n=>n==="a"?1:-1,or=n=>n==="a"?"b":"a",E0="#1F2A44",W_=n=>{const e=parseInt(n.slice(1),16);return(e>>16&255)*.299+(e>>8&255)*.587+(e&255)*.114};function Sd(n,e,t,i=4){const r=document.createElement("canvas");r.width=n,r.height=e,t(r.getContext("2d"),n,e);const s=new PA(r);return s.anisotropy=i,s.colorSpace=Ut,s}const Ps=.15,Ls=.21,vl=.06;function $u(n,e){n.absarc(0,vl*e,Ps*e,0,Math.PI,!1),n.bezierCurveTo(-Ps*e,(vl-.1)*e,-.05*e,(-Ls+.06)*e,-.022*e,-Ls*e),n.lineTo(.022*e,-Ls*e),n.bezierCurveTo(.05*e,(-Ls+.06)*e,Ps*e,(vl-.1)*e,Ps*e,vl*e)}let Ds=null;function L2(){if(Ds)return Ds;const n=new dc;$u(n,1);const e=new hc;$u(e,.9),n.holes.push(e);const t=new vd(n,{depth:.034,bevelEnabled:!1,curveSegments:16});t.translate(0,0,-.017);const i=new _d((()=>{const l=new dc;return $u(l,.93),l})(),16),r=i.attributes.uv,s=i.attributes.position;for(let l=0;l<r.count;l++)r.setXY(l,(s.getX(l)+Ps)/(2*Ps),(s.getY(l)+Ls)/(2*Ls));const o=i.clone();o.translate(0,0,.0185);const a=i.clone();return a.rotateY(Math.PI),a.translate(0,0,-.0185),Ds={rim:t,front:o,back:a},Ds}function D2(n){const i=Sd(256,360,r=>{const s=new ke(n),o=W_(n);r.fillStyle=n,r.fillRect(0,0,256,360);const a=r.createLinearGradient(0,0,256,360);a.addColorStop(0,"rgba(255,255,255,0.16)"),a.addColorStop(1,"rgba(0,0,0,0.18)"),r.fillStyle=a,r.fillRect(0,0,256,360),r.save(),r.setTransform(1,0,-.18,1,26,0),r.fillStyle=o>185?"#1B1B1A":"#FFFFFF",r.fillRect(34,62,30,130),r.fillRect(90,62,30,130),r.fillRect(34,162,86,30),r.fillRect(136,62,80,30),r.fillRect(136,62,30,130),r.fillRect(136,162,80,30),r.restore(),r.fillStyle=`#${s.clone().multiplyScalar(.6).getHexString()}`,r.beginPath(),r.moveTo(128,214),r.lineTo(80,300),r.lineTo(176,300),r.closePath(),r.fill(),r.globalCompositeOperation="destination-out";for(let l=0;l<8;l++)for(let c=0;c<9;c++){const u=34+c*23+l%2*11.5,h=34+l*24;h>215&&Math.abs(u-128)<70+(h-215)||(r.beginPath(),r.arc(u,h,5.6,0,6.283),r.fill())}r.beginPath(),r.moveTo(128,226),r.lineTo(92,292),r.lineTo(164,292),r.closePath(),r.fill()},8);return i.userData.shared=!0,i}const af=new Map;function N2(n){let e=af.get(n);if(!e){const t=new Nr({map:D2(n),roughness:.45,metalness:.05,alphaTest:.5,transparent:!1}),i=new Nr({color:new ke(n).multiplyScalar(.55),roughness:.4});e={face:t,rim:i},af.set(n,e)}return e}function I2(n){const{rim:e,front:t,back:i}=L2(),r=N2(n),s=new un,o=new qe(e,r.rim);return o.castShadow=!0,s.add(o,new qe(t,r.face),new qe(i,r.face)),s.rotation.z=Math.PI,s}function w0(n,e,t){const i=new un,r=new un;r.position.y=.92,i.add(r);const s=(E,w=.75)=>new Nr({color:E,roughness:w}),o=(E,w,D,S,A,k,L)=>{const B=new qe(new Ic(E,w,D,14),s(S));return B.position.set(A,k,L),B.castShadow=!0,B},a=(E,w,D,S,A,k,L,B)=>{const b=new qe(new ci(E,16,12),s(w));return b.position.set(D,S,A),k&&b.scale.set(k,L,B),b.castShadow=!0,b},l=(E,w,D,S,A,k,L,B)=>{const b=new qe(new ur(E,w,D),s(S));return b.position.set(A,k,L),b.castShadow=!!B,b},c=E=>{const w=new un;w.position.set(E*.12,.92,0),w.add(o(.105,.085,.42,E0,0,-.2,0));const D=new un;D.position.y=-.4,D.add(o(.07,.055,.42,n.skin,0,-.21,0),o(.06,.062,.12,"#F4F4F0",0,-.36,0));const S=l(.12,.08,.27,"#F4F4F0",0,-.48,-.04,!0);return D.add(S),w.add(D),w.userData.kn=D,w},u=c(-1),h=c(1);i.add(u,h);const d=o(.25,.2,.62,n.shirt,0,.3,0);d.scale.z=.62,r.add(d);const p=o(.2,.2,.16,E0,0,-.02,0);p.scale.z=.66,r.add(p),r.add(a(.105,n.shirt,-.29,.55,0),a(.105,n.shirt,.29,.55,0),o(.055,.065,.1,n.skin,0,.66,0));const v=a(.2,n.skin,0,.84,0);v.scale.set(1,1.1,1),r.add(v),r.add(a(.045,n.skin,-.2,.84,0),a(.045,n.skin,.2,.84,0),a(.03,n.skin,0,.82,-.2)),r.add(a(.028,"#fff",-.07,.86,-.178,1,.8,.6),a(.028,"#fff",.07,.86,-.178,1,.8,.6),a(.016,"#2a1d14",-.07,.86,-.195),a(.016,"#2a1d14",.07,.86,-.195)),r.add(l(.07,.012,.012,n.hair,-.07,.92,-.19),l(.07,.012,.012,n.hair,.07,.92,-.19),l(.06,.01,.01,"#8a4a40",0,.76,-.195));const x=new qe(new ci(.215,18,12,0,6.283,0,1.75),s(n.hair,.9));if(x.position.y=.88,x.castShadow=!0,r.add(x),n.style==="largo"&&r.add(l(.4,.5,.1,n.hair,0,.7,.17,!0)),n.style==="rodete"&&r.add(a(.1,n.hair,0,1.08,.05)),n.acc==="vincha"){const E=new qe(new xd(.212,.03,8,20),s("#E24B4A"));E.rotation.x=Math.PI/2,E.position.y=.91,r.add(E)}if(n.acc==="gorra"){const E=new qe(new ci(.235,16,10,0,6.283,0,1.45),s("#E24B4A"));E.position.y=.87,E.castShadow=!0,r.add(E),r.add(l(.3,.03,.2,"#A32D2D",0,.93,-.26))}n.acc==="lentes"&&r.add(l(.1,.05,.02,"#1B1B1A",-.07,.86,-.2),l(.1,.05,.02,"#1B1B1A",.07,.86,-.2));const m=W_(n.shirt)<140,f=Sd(128,128,(E,w)=>{E.fillStyle=m?"#fff":"#1B1B1A",E.textAlign="center",E.font="500 17px sans-serif",E.fillText(String(e||"").split(" ")[0].toUpperCase().slice(0,9),w/2,34),E.font="500 62px sans-serif",E.fillText(String(t??7),w/2,100)}),_=new qe(new ln(.26,.26),new Zt({map:f,transparent:!0,toneMapped:!1}));_.position.set(0,.34,.153),r.add(_);const g=new un;g.position.set(-.3,.52,0),g.add(o(.075,.07,.2,n.shirt,0,-.1,0),o(.052,.046,.34,n.skin,0,-.37,0),a(.055,n.skin,0,-.56,0)),r.add(g);const y=new un;y.position.set(.3,.52,0),y.add(o(.075,.07,.2,n.shirt,0,-.1,0),o(.052,.046,.34,n.skin,0,-.37,0),o(.058,.058,.05,"#fff",0,-.47,0),a(.055,n.skin,0,-.56,0),o(.024,.024,.2,"#F2F2EE",0,-.62,0),l(.05,.07,.03,"#1B1B1A",0,-.74,0,!0));const P=I2(n.paddle);return P.position.y=-.95,y.add(P),y.rotation.x=.5,r.add(y),i.userData={up:r,arm:y,la:g,lL:u,lR:h,kL:u.userData.kn,kR:h.userData.kn},i}function T0(n){n.traverse(e=>{e.geometry&&!(Ds&&Object.values(Ds).includes(e.geometry))&&e.geometry.dispose(),e.material&&!U2(e.material)&&(Array.isArray(e.material)?e.material:[e.material]).forEach(t=>{t.map&&!t.map.userData.shared&&t.map.dispose(),(!t.userData||!t.userData.shared)&&t.dispose()})})}function U2(n){for(const e of af.values())if(e.face===n||e.rim===n)return!0;return!1}const F2={};let et=null,bi=null,Md=null,Ns=null,xa=!1;const X_={};try{xa=localStorage.getItem("padel.mute")==="1"}catch{}function To(){try{if(!et){et=new(window.AudioContext||window.webkitAudioContext),bi=et.createGain(),bi.gain.value=xa?0:.9;const n=et.createDynamicsCompressor();bi.connect(n),n.connect(et.destination);const e=et.sampleRate*2,t=et.createBuffer(1,e,et.sampleRate),i=t.getChannelData(0);for(let r=0;r<e;r++)i[r]=Math.random()*2-1;Md=t,z2()}et.state==="suspended"&&et.resume()}catch{}}const O2=()=>xa;function A0(n){xa=n;try{localStorage.setItem("padel.mute",n?"1":"0")}catch{}bi&&bi.gain.setTargetAtTime(n?0:.9,et.currentTime,.05)}function z2(){(import.meta&&F2||{}).VITE_SFX&&["hit","bounce","glass","crowd"].forEach(e=>{fetch(new URL(`sfx/${e}.ogg`,document.baseURI)).then(t=>t.ok?t.arrayBuffer():null).then(t=>t?et.decodeAudioData(t):null).then(t=>{t&&(X_[e]=t)}).catch(()=>{})})}function _l(n,e=1,t=1){const i=X_[n];if(!i||!et)return!1;const r=et.createBufferSource(),s=et.createGain();return r.buffer=i,r.playbackRate.value=t*(.94+Math.random()*.12),s.gain.value=e,r.connect(s),s.connect(bi),r.start(),!0}function Pn({dur:n=.08,f:e=2e3,q:t=1,type:i="bandpass",gain:r=.4,attack:s=.002,f2:o,delay:a=0}){const l=et.currentTime+a,c=et.createBufferSource(),u=et.createBiquadFilter(),h=et.createGain();c.buffer=Md,c.loop=!0,u.type=i,u.Q.value=t,u.frequency.setValueAtTime(e,l),o&&u.frequency.exponentialRampToValueAtTime(o,l+n),h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(r,l+s),h.gain.exponentialRampToValueAtTime(1e-4,l+n),c.connect(u),u.connect(h),h.connect(bi),c.start(l,Math.random()),c.stop(l+n+.05)}function Ln({f:n=200,f2:e,dur:t=.1,type:i="sine",gain:r=.3,delay:s=0}){const o=et.currentTime+s,a=et.createOscillator(),l=et.createGain();a.type=i,a.frequency.setValueAtTime(n,o),e&&a.frequency.exponentialRampToValueAtTime(e,o+t),l.gain.setValueAtTime(r,o),l.gain.exponentialRampToValueAtTime(1e-4,o+t),a.connect(l),l.connect(bi),a.start(o),a.stop(o+t+.02)}const Sr=()=>et&&!xa,Mr={hit(n,e,t=0){if(!Sr())return;const i=(n==="remate"?1.5:n==="dejada"?.5:n==="globo"?.8:1)*(1+.5*t);_l("hit",.7*i,n==="remate"?.8:1)||(Pn({dur:.05+.03*i,f:2300-(e||0)*350,q:1.2,gain:.55*i}),Pn({dur:.12,f:900,q:.8,type:"lowpass",gain:.35*i}),Ln({f:190,f2:95,dur:.09,gain:.32*i}),n==="remate"&&(Ln({f:85,f2:45,dur:.22,gain:.45}),Pn({dur:.18,f:3200,q:.6,gain:.3})),e===0&&Ln({f:3600,f2:3e3,dur:.05,type:"triangle",gain:.06}))},bounce(){!Sr()||_l("bounce",.8)||(Pn({dur:.06,f:500,q:.7,type:"lowpass",gain:.45}),Ln({f:130,f2:70,dur:.07,gain:.3}))},wall(){!Sr()||_l("glass",.7)||(Pn({dur:.16,f:2600,q:7,gain:.3}),Pn({dur:.07,f:5200,q:3,gain:.15}),Ln({f:1180,dur:.32,gain:.05}),Ln({f:1760,dur:.22,gain:.035}),Pn({dur:.2,f:300,q:1,type:"lowpass",gain:.12,delay:.01}))},net(){Sr()&&(Pn({dur:.14,f:900,q:.7,type:"lowpass",gain:.3}),Ln({f:140,f2:90,dur:.1,gain:.12}))},exit(){Sr()&&Pn({dur:.5,f:400,f2:3500,q:1.5,gain:.22,attack:.15})},cheer(n=1){if(!Sr()||_l("crowd",.6*n))return;Pn({dur:.35+1.1*n,f:900,q:.5,gain:.07+.1*n,attack:.2}),Pn({dur:.3+.9*n,f:2400,q:.6,gain:.04+.05*n,attack:.15});const e=Math.round(10+22*n);for(let t=0;t<e;t++)Pn({dur:.03,f:1500+Math.random()*2500,q:1,gain:.05+Math.random()*.05,delay:.1+Math.random()*(.6+n)});n>.9&&Ln({f:520,f2:640,dur:.5,type:"sawtooth",gain:.02,delay:.1})},point(n,e){if(Sr()){if(n==="punto"){Ln({f:e?660:330,dur:.1,gain:.08});return}Ln({f:520,dur:.12,gain:.1}),setTimeout(()=>Ln({f:780,dur:n==="game"?.18:.12,gain:.1}),130),n!=="game"&&setTimeout(()=>Ln({f:1040,dur:.25,gain:.1}),260)}}};function k2(){if(!et||Ns)return;const n=et.createBufferSource(),e=et.createBiquadFilter(),t=et.createGain(),i=et.createOscillator(),r=et.createGain();n.buffer=Md,n.loop=!0,e.type="bandpass",e.frequency.value=650,e.Q.value=.45,t.gain.value=.045,i.frequency.value=.23,r.gain.value=.015,i.connect(r),r.connect(t.gain),n.connect(e),e.connect(t),t.connect(bi),n.start(),i.start(),Ns={s:n,lfo:i,g:t}}function C0(){if(Ns){try{Ns.g.gain.setTargetAtTime(0,et.currentTime,.2);const n=Ns;setTimeout(()=>{try{n.s.stop(),n.lfo.stop()}catch{}},800)}catch{}Ns=null}}const B2={skin:"#E0AC82",hair:"#5F5E5A",style:"corto",shirt:"#888780",acc:"none",paddle:"#B4B2A9"},Yu=(n,e,t)=>Math.max(e,Math.min(t,n)),b0=()=>{},H2={uniforms:{tDiffuse:{value:null},time:{value:0},res:{value:new le(1,1)},blur:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};class G2{constructor(e,{onQuality:t,onReplay:i,look:r,autoQuality:s=!0}={}){this.container=e,this.autoQuality=s,this.onQuality=t||b0,this.onReplay=i||b0,this.rec=[],this.rp=null,this.replayArm=null,this.syncSw=!1,this.cheer=0,this.cheerDirty=!1,this.fovKick=0,this.lookInit=!1,this.look=new I,this.dIdx=0,this.composer=null,this.hq=!0,this.clk=0,this.slow=0,this.shake=0,this.mySlot=-1,this.myTeam="a",this.avatars=new Map,this.rosterKey="",this.preview=null,this.previewKey="",this.fxT=0,this.ripT=0,this.pT=0,this.hist=[],this.ok=!0;let o;try{o=new P_({antialias:!0,powerPreference:"high-performance"})}catch{this.ok=!1;return}this.ren=o,this.dpr=window.devicePixelRatio||1,o.setPixelRatio(Math.min(this.dpr,2)),o.shadowMap.enabled=!0,o.shadowMap.type=Yv,o.toneMapping=sd,o.toneMappingExposure=1,o.domElement.style.cssText="display:block;width:100%;height:100%;touch-action:none",e.appendChild(o.domElement),this.scene=new wA,this.cam=new Fn(58,1,.1,160),this.aniso=Math.min(o.capabilities.getMaxAnisotropy(),8),this.buildWorld(),this.setupPost(),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(e),this.resize(),r&&this.setPreviewLook(r)}tex(e,t,i){return Sd(e,t,i,this.aniso)}buildWorld(){const e=this.scene,t=(L,B,b)=>this.tex(L,B,b);e.background=t(4,256,(L,B,b)=>{const U=L.createLinearGradient(0,0,0,b);U.addColorStop(0,"#6FAEE0"),U.addColorStop(1,"#DCEBF7"),L.fillStyle=U,L.fillRect(0,0,B,b)}),e.fog=new dd("#DCEBF7",45,95),e.add(new d2(15135227,3820090,2.3));const i=new g2(16774109,2.6);i.position.set(6,18,10),i.castShadow=!0,i.shadow.mapSize.set(1024,1024);const r=i.shadow.camera;r.left=-14,r.right=14,r.top=18,r.bottom=-18,r.near=1,r.far=50,i.shadow.bias=-6e-4,e.add(i),this.dl=i;const s=(L,B=.8)=>new Nr({color:L,roughness:B}),o=(L,B,b,U,H,q,N,O)=>{const V=new qe(new ur(L,B,b),s(U));return V.position.set(H,q,N),V.castShadow=!!O,V},a=(L,B,b)=>(L.wrapS=L.wrapT=sc,L.repeat.set(B,b),L.needsUpdate=!0,L),l=t(512,1024,(L,B,b)=>{L.fillStyle="#2D74B8",L.fillRect(0,0,B,b);for(let U=0;U<12e3;U++)L.fillStyle=Math.random()<.5?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.06)",L.fillRect(Math.random()*B,Math.random()*b,2,2);for(let U=0;U<60;U++){const H=Math.random()*B,q=Math.random()*b,N=18+Math.random()*70,O=L.createRadialGradient(H,q,0,H,q,N);O.addColorStop(0,Math.random()<.55?"rgba(255,255,255,0.07)":"rgba(0,20,60,0.09)"),O.addColorStop(1,"rgba(0,0,0,0)"),L.fillStyle=O,L.fillRect(H-N,q-N,N*2,N*2)}[[156,.1],[868,.1],[512,.12]].forEach(([U,H])=>{const q=L.createLinearGradient(0,U-70,0,U+70);q.addColorStop(0,"rgba(255,255,255,0)"),q.addColorStop(.5,`rgba(255,255,255,${H})`),q.addColorStop(1,"rgba(255,255,255,0)"),L.fillStyle=q,L.fillRect(0,U-70,B,140)}),L.strokeStyle="#f4f6f8",L.lineWidth=4,L.strokeRect(2,2,B-4,b-4),L.beginPath(),L.moveTo(0,156),L.lineTo(B,156),L.moveTo(0,868),L.lineTo(B,868),L.moveTo(256,156),L.lineTo(256,868),L.stroke();for(let U=0;U<700;U++){const H=Math.random()<.5,q=Math.random(),N=H?q*B:[2,256,B-2][Math.floor(Math.random()*3)],O=H?[2,156,868,b-2][Math.floor(Math.random()*4)]:156+q*712;L.fillStyle="rgba(45,116,184,0.55)",L.fillRect(N+(Math.random()-.5)*3,O+(Math.random()-.5)*3,1+Math.random()*2,1+Math.random()*2)}}),c=new qe(new ln(10,20),new Nr({map:l,roughness:.5}));c.rotation.x=-Math.PI/2,c.receiveShadow=!0,e.add(c);const u=new qe(new ln(26,38),s("#2F6F55",.9));u.rotation.x=-Math.PI/2,u.position.y=-.01,u.receiveShadow=!0,e.add(u);const h=new qe(new ln(140,140),s("#7A7973",1));h.rotation.x=-Math.PI/2,h.position.y=-.03,e.add(h);const d=t(32,32,(L,B,b)=>{L.strokeStyle="rgba(40,40,40,0.9)",L.lineWidth=2,L.beginPath(),L.moveTo(0,.5),L.lineTo(B,.5),L.moveTo(.5,0),L.lineTo(.5,b),L.stroke()}),p=(L,B,b,U,H,q,N)=>{const O=d.clone();a(O,L/N,B/N);const V=new qe(new ln(L,B),new Zt({map:O,transparent:!0,side:hn,depthWrite:!1}));V.position.set(b,U,H),V.rotation.y=q||0,e.add(V)},v=new Nr({color:"#CFE8F7",transparent:!0,opacity:.16,roughness:.08,metalness:.35,side:hn,depthWrite:!1}),x=(L,B,b,U,H,q)=>{const N=new qe(new ln(L,B),v);N.position.set(b,U,H),N.rotation.y=q||0,e.add(N)};x(10,3,0,1.5,10,0),x(10,3,0,1.5,-10,0),x(20,2,5,1,0,Math.PI/2),x(20,2,-5,1,0,Math.PI/2),p(10,1,0,3.5,-10,0,.12),p(20,1,5,2.5,0,Math.PI/2,.12),p(20,1,-5,2.5,0,Math.PI/2,.12);const m="#3A3A38";for(let L=-2;L<=2;L++)e.add(o(.07,4,.07,m,L*2.5,2,-10.02));for(let L=-4;L<=4;L++)e.add(o(.07,3,.07,m,5.02,1.5,L*2.5),o(.07,3,.07,m,-5.02,1.5,L*2.5));e.add(o(10.1,.06,.06,m,0,3,-10.02),o(10.1,.06,.06,m,0,4,-10.02),o(.06,.06,20,m,5.02,2,0),o(.06,.06,20,m,5.02,3,0),o(.06,.06,20,m,-5.02,2,0),o(.06,.06,20,m,-5.02,3,0));const f=d.clone();a(f,10/.12,.88/.12);const _=new qe(new ln(10,.88),new Zt({map:f,transparent:!0,side:hn,depthWrite:!1}));_.position.set(0,.44,0),e.add(_),e.add(o(10,.07,.05,"#fff",0,.91,0),o(.1,1.02,.1,"#2C2C2A",-5.05,.51,0,!0),o(.1,1.02,.1,"#2C2C2A",5.05,.51,0,!0));const g=(L,B,b,U,H,q)=>{const N=t(512,96,(O,V,Q)=>{O.fillStyle=B,O.fillRect(0,0,V,Q),O.fillStyle="#fff",O.font="500 46px sans-serif",O.textAlign="center",O.textBaseline="middle",O.fillText(L,V/2,Q/2+2)});[0,Math.PI].forEach(O=>{const V=new qe(new ln(q,q*96/512),new Zt({map:N,toneMapped:!1})),Q=Math.sin(H+O)*.01,ae=Math.cos(H+O)*.01;V.position.set(b+Q,.45,U+ae),V.rotation.y=H+O,e.add(V)})};g("CLUB SIERRAS","#0C447C",-2.6,-10.2,0,4.6),g("PADEL PRO","#D85A30",2.6,-10.2,0,4.6),g("CLUB SIERRAS","#0C447C",-2.6,10.2,0,4.6),g("PADEL PRO","#D85A30",2.6,10.2,0,4.6),g("CLUB SIERRAS","#0C447C",5.2,-4.5,-Math.PI/2,4.6),g("PADEL PRO","#D85A30",5.2,4.5,-Math.PI/2,4.6),g("PADEL PRO","#D85A30",-5.2,-4.5,Math.PI/2,4.6),g("CLUB SIERRAS","#0C447C",-5.2,4.5,Math.PI/2,4.6);const y=()=>{const L=new un,B=[];let b=1234567;const U=()=>(b=b*1664525+1013904223>>>0,b/4294967296),H=8,q=.56,N=1.1,O=-12.2,V=["#D85A30","#185FA5","#0C447C","#EF9F27","#1D9E75","#F1EFE8","#534AB7","#D4537E","#2C2C2A","#B33A3A"],Q=["#F5D0B0","#E0AC82","#B9774F","#7A4A2E","#5A3520"],ae=["#1B1B1A","#3B2A1E","#6B4423","#D9A441","#8E3B2A","#B8B8B2"];for(let W=0;W<H;W++){const he=.45+W*.8,oe=O-W*N;L.add(o(27,he,N+.02,W%2?"#8F8E88":"#85847E",0,he/2-.03,oe)),L.add(o(27,.05,.42,W%2?"#2C5E8F":"#C0502C",0,he+.02,oe+.2))}const $=t(1024,64,(W,he,oe)=>{W.fillStyle="#0C447C",W.fillRect(0,0,he,oe);const ve=["CLUB SIERRAS","UC","PADEL PRO","UC"],Te=["#0C447C","#111","#D85A30","#2A93A8"];ve.forEach((Ce,ne)=>{W.fillStyle=Te[ne],W.fillRect(ne*256,0,256,oe),W.fillStyle="#fff",W.font="800 34px sans-serif",W.textAlign="center",W.textBaseline="middle",W.fillText(Ce,ne*256+128,oe/2+2)})});a($,3,1);const te=new qe(new ln(26,.7),new Zt({map:$}));te.position.set(0,.75,-11.75),L.add(te);const de=o(26,.05,.05,"#C9C9C2",0,1.15,-11.7);L.add(de),L.add(o(27,9,.4,"#4B4E58",0,4.4,O-H*N-.1));const fe=()=>new f2({color:16777215}),ge=new fc(.17,.26,2,6),Pe=new ci(.125,9,7),Ie=new ci(.135,9,5,0,Math.PI*2,0,1.55),Ae=new fc(.045,.26,2,5),Le=H*50,R=W=>{const he=new AA(W,fe(),Le);return he.frustumCulled=!1,he},se=R(ge),Y=R(Pe),re=R(Ie),K=R(Ae),Me=R(Ae),ue=R(Ae),T=new Tt,M=new ke,z=new Float32Array(Le*16),ie=(W,he,oe,ve,Te,Ce,ne,Ge,Ue=0,ye=0)=>{T.position.set(oe,ve,Te),T.rotation.set(Ue,0,ye),T.scale.set(Ce,ne,Ge),T.updateMatrix(),W.setMatrixAt(he,T.matrix)};let Z=0;for(let W=0;W<H;W++){const he=.45+W*.8,oe=O-W*N+.1;for(let ve=-11.2;ve<=11.2;ve+=q){if(U()<.1+W*.02||Z>=Le)continue;const Te=ve+(U()-.5)*.14,Ce=.88+U()*.22,ne=V[Math.floor(U()*V.length)],Ge=Q[Math.floor(U()*Q.length)];ie(se,Z,Te,he+.42*Ce,oe,1,Ce,.78),se.setColorAt(Z,M.set(ne)),ie(Y,Z,Te,he+.9*Ce,oe,1,1.08,1),Y.setColorAt(Z,M.set(Ge));const Ue=U()<.86;ie(re,Z,Te,he+.92*Ce,oe,Ue?1:0,Ue?1:0,Ue?1:0),re.setColorAt(Z,M.set(ae[Math.floor(U()*ae.length)])),ie(K,Z,Te-.2,he+.36*Ce,oe+.04,1,1,1,-.25,.12),K.setColorAt(Z,M.set(Ge)),ie(Me,Z,Te+.2,he+.36*Ce,oe+.04,1,1,1,-.25,-.12),Me.setColorAt(Z,M.set(Ge));const ye=U()<.12;ie(ue,Z,Te+.22,he+.78*Ce,oe,1,1,1,0,-.35),ue.setColorAt(Z,M.set(Ge)),T.updateMatrix(),z.set(T.matrix.elements,Z*16),ye||ie(ue,Z,Te+.22,he+.78*Ce,oe,0,0,0),Z++}}return[se,Y,re,K,Me,ue].forEach(W=>{W.count=Z,W.instanceMatrix.needsUpdate=!0,W.instanceColor&&(W.instanceColor.needsUpdate=!0),L.add(W)}),[se,Y,re,K,Me].forEach(W=>B.push({m:W,base:W.instanceMatrix.array.slice(),alt:null,g:L})),B.push({m:ue,base:ue.instanceMatrix.array.slice(),alt:z.slice(0,Z*16),g:L}),[-1,1].forEach(W=>{const he=new qe(new Ic(.09,.12,11,8),s("#5F5E5A",.6));he.position.set(W*9.5,5.5,-11.6),L.add(he);const oe=new qe(new ur(1.6,.35,.4),new Zt({color:"#FFF6D0"}));oe.position.set(W*9.5,11.1,-11.4),L.add(oe)}),{g:L,parts:B}},P=y(),E=y();this.crowd=P.g,this.crowd2=E.g,this.crowd2.rotation.y=Math.PI,e.add(this.crowd,this.crowd2),this.cm=[...P.parts,...E.parts];try{const L=new M_(128),B=new y_(.1,200,L);B.position.set(0,2,0),e.add(B),B.update(this.ren,e),e.remove(B),v.envMap=L.texture,v.envMapIntensity=.9}catch{}const w=t(128,64,(L,B,b)=>{L.fillStyle="#D9E03A",L.fillRect(0,0,B,b);for(let U=0;U<900;U++)L.fillStyle="rgba(255,255,255,0.07)",L.fillRect(Math.random()*B,Math.random()*b,1,1);L.strokeStyle="#F4F6E8",L.lineWidth=5,L.beginPath(),L.arc(32,32,26,-1.2,1.2),L.stroke(),L.beginPath(),L.arc(96,32,26,Math.PI-1.2,Math.PI+1.2),L.stroke()});this.ball=new qe(new ci(Ur,16,12),new Nr({map:w,roughness:.95,emissive:"#4A4A08"})),this.ball.castShadow=!0,e.add(this.ball);const D=(L,B,b)=>{const U=new qe(L,new Zt({color:B,transparent:!0,opacity:b,side:hn,depthWrite:!1}));return U.rotation.x=-Math.PI/2,e.add(U),U};this.bsh=D(new Vo(.2,14),"#000",.3),this.ring=D(new Rr(.85,1,28),"#fff",.4),this.ring.position.y=.03,this.aim=D(new Rr(.35,.5,20),"#97C459",.9),this.aim.position.y=.04,this.rip=D(new Rr(.22,.3,18),"#fff",.5),this.rip.visible=!1,this.land=new un,this.land.visible=!1,e.add(this.land);const S=(L,B)=>{const b=new qe(L,new Zt({color:"#fff",transparent:!0,opacity:B,depthWrite:!1,side:hn}));return b.rotation.x=-Math.PI/2,this.land.add(b),b};this.landDisc=S(new Vo(.55,28),.26),this.landRing=S(new Rr(.5,.6,28),.85),this.landOuter=S(new Rr(.9,.95,28),.7),this.land.position.y=.035,this.sbox=new un,this.sbox.visible=!1,e.add(this.sbox);const A=new qe(new ln(5,6.95),new Zt({color:"#FFF3A0",transparent:!0,opacity:.34,depthWrite:!1}));A.rotation.x=-Math.PI/2,this.sbox.add(A);const k=new bA(new WA(new ln(5,6.95)),new L_({color:"#FFE066",transparent:!0,opacity:.9}));k.rotation.x=-Math.PI/2,this.sbox.add(k),this.sbox.position.y=.025,this.fxm=new qe(new ci(.2,10,8),new Zt({color:"#fff",transparent:!0,opacity:.8})),this.fxm.visible=!1,e.add(this.fxm),this.trail=[];for(let L=0;L<8;L++){const B=new qe(new ci(.09,6,6),new Zt({color:"#E8E34A",transparent:!0,opacity:.45-L*.05}));B.visible=!1,e.add(B),this.trail.push(B)}this.decals=[];for(let L=0;L<12;L++){const B=new qe(new Vo(.11,12),new Zt({color:"#0b2a4a",transparent:!0,opacity:0,depthWrite:!1}));B.rotation.x=-Math.PI/2,B.position.y=.012,B.visible=!1,B.life=0,e.add(B),this.decals.push(B)}this.NP=16,this.pg=new At,this.pp=new Float32Array(this.NP*3),this.pv=new Float32Array(this.NP*3),this.pg.setAttribute("position",new Gn(this.pp,3)),this.pm=new D_({color:"#fff",size:.13,transparent:!0,opacity:.9,depthWrite:!1}),this.pts=new RA(this.pg,this.pm),this.pts.frustumCulled=!1,this.pts.visible=!1,e.add(this.pts)}setupPost(){try{const e=new Hn(2,2,{type:fi,samples:4}),t=new M2(this.ren,e);t.addPass(new E2(this.scene,this.cam)),this.bloom=new eo(new le(2,2),.3,.55,.92),t.addPass(this.bloom),t.addPass(new A2),this.grade=new G_(H2),t.addPass(this.grade),this.composer=t}catch{this.composer=null}}resize(){if(!this.ok)return;const e=Math.max(1,this.container.clientWidth),t=Math.max(1,this.container.clientHeight);if(this.w=e,this.h=t,this.ren.setPixelRatio(this.hq?Math.min(this.dpr,2):1),this.ren.setSize(e,t,!1),this.cam.aspect=e/t,this.cam.updateProjectionMatrix(),this.composer){const i=this.ren.getPixelRatio();this.composer.setPixelRatio(i),this.composer.setSize(e,t),this.grade.uniforms.res.value.set(e*i,t*i)}}setQuality(e){this.ok&&(this.hq=e,this.ren.shadowMap.enabled=e,this.dl.castShadow=e,this.resize(),this.scene.traverse(t=>{t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>{i.needsUpdate=!0})}))}setPreviewLook(e,t="Vos",i=10){if(!this.ok)return;const r=JSON.stringify(e)+t+i;r!==this.previewKey&&(this.previewKey=r,this.preview&&(this.scene.remove(this.preview),T0(this.preview)),this.preview=w0(e,t,i),this.scene.add(this.preview))}syncRoster(e){const t=e.map(r=>`${r.slot}:${r.uid||"bot"}:${r.name}:${r.num}:${JSON.stringify(r.look)}`).join("|");if(t===this.rosterKey)return;this.rosterKey=t,this.avatars.forEach(r=>{this.scene.remove(r.g),T0(r.g)}),this.avatars.clear();const i={a:[],b:[]};e.forEach(r=>i[r.slot<2?"a":"b"].push(r)),e.forEach(r=>{const s=r.slot<2?"a":"b",o=i[s],a=o.indexOf(r),l=w0(r.look||B2,r.name,r.num);l.rotation.y=s==="a"?0:Math.PI,this.scene.add(l),this.avatars.set(r.slot,{g:l,team:s,off:r.slot*1.7,sw:null,swId:0,lx:o.length>1?a===0?2.3:-2.3:0,lz:(s==="a"?1:-1)*(o.length>1?7:8)})})}animate(e,t,i,r,s){const o=e.g.userData,a=Math.sin(this.clk*11+e.off)*r,l=Math.cos(this.clk*11+e.off)*r;o.lL.rotation.x=a*.9,o.lR.rotation.x=-a*.9,o.kL.rotation.x=-(Math.max(0,-l)*.95+.14),o.kR.rotation.x=-(Math.max(0,l)*.95+.14),o.la.rotation.x=-a*.8,o.up.rotation.x=-.14*r,e.g.position.set(t,Math.abs(a)*.04,i);let c=0;if(e.sw){e.sw.t+=s;const u=Math.min(1,e.sw.t/e.sw.dur),h=1-Math.pow(1-u,3);if(e.sw.wind!=null){if(u<.32){const p=u/.32;o.arm.rotation.x=e.sw.a0+(e.sw.wind-e.sw.a0)*(1-Math.pow(1-p,2)),o.up.rotation.x=-.32*p}else{const p=(u-.32)/.6799999999999999,v=p*p*(3-2*p);o.arm.rotation.x=e.sw.wind+(e.sw.a1-e.sw.wind)*v,o.up.rotation.x=-.32+.75*v}e.g.position.y+=Math.sin(Math.PI*Math.min(1,u*1.1))*.28,c=.25*Math.sin(Math.PI*u)}else o.arm.rotation.x=e.sw.a0+(e.sw.a1-e.sw.a0)*h,c=(e.sw.yaw>0?.55:-.45)*Math.sin(Math.PI*u);o.arm.rotation.y=e.sw.yaw*Math.sin(Math.PI*u),e.sw.t>e.sw.dur+.25&&(e.sw=null,o.arm.rotation.set(.5,0,0),o.up.rotation.x=0)}else o.arm.rotation.x=.5+a*.15;o.up.rotation.y=c}handleEvent(e){if(this.ok){if(e.t==="hit"){const t=e.gold||e.q===0,i=e.gold?"#EF9F27":["#EF9F27","#ffffff","#B4B2A9"][e.q];this.fxm.material.color.set(i),this.fxm.position.set(e.x,e.y,e.z),this.fxm.visible=!0,this.fxT=.25,this.hq&&this.burst(e.x,e.y,e.z,i);const r=e.slot===this.mySlot;if(this.shake=Math.max(this.shake,((e.shot==="remate"?.28:t?.12:.05)+(e.pw||0)*.1)*(r?1:.5)),(e.shot==="remate"||e.gold)&&(this.fovKick=Math.min(this.fovKick,-3.5)),Mr.hit(e.shot,e.q,e.pw||0),r&&navigator.vibrate)try{navigator.vibrate(e.shot==="remate"?35:e.q===0?22:12)}catch{}}else if(e.t==="bounce"){this.rip.position.set(e.x,.04,e.z),this.rip.visible=!0,this.ripT=.3,Mr.bounce();const t=this.decals[this.dIdx++%this.decals.length];t.position.set(e.x,.012,e.z),t.life=7,t.visible=!0,this.hq&&this.burst(e.x,.05,e.z,"#d9ccae",.55)}else if(e.t==="wall")Mr.wall();else if(e.t==="net")Mr.net();else if(e.t==="point"){const t=this.mySlot<0||e.who===this.myTeam;Mr.point(e.ev,t);const i=e.replay?1.3:e.ev==="punto"?.55:1;this.cheer=Math.max(this.cheer,Math.min(1,i)),Mr.cheer(i),e.label&&(this.shake=Math.max(this.shake,.3),this.fovKick=Math.min(this.fovKick,-7),Mr.exit()),e.replay&&(this.replayArm=this.clk+.45)}}}burst(e,t,i,r,s=1){this.pm.color.set(r);for(let o=0;o<this.NP;o++){this.pp[o*3]=e,this.pp[o*3+1]=t,this.pp[o*3+2]=i;const a=Math.random()*6.283,l=(Math.random()*2-.5)*s,c=1.5+Math.random()*2.5;this.pv[o*3]=Math.cos(a)*c,this.pv[o*3+1]=l*c+1*s,this.pv[o*3+2]=Math.sin(a)*c}this.pT=.45,this.pts.visible=!0,this.pg.attributes.position.needsUpdate=!0}updateFx(e){if(this.fxT>0){this.fxT-=e;const t=1-Math.max(this.fxT,0)/.25;this.fxm.scale.setScalar(1+t*3),this.fxm.material.opacity=.8*(1-t),this.fxT<=0&&(this.fxm.visible=!1)}if(this.ripT>0){this.ripT-=e;const t=1-Math.max(this.ripT,0)/.3;this.rip.scale.set(1+t*3,1+t*3,1),this.rip.material.opacity=.5*(1-t),this.ripT<=0&&(this.rip.visible=!1)}if(this.pT>0){this.pT-=e;for(let t=0;t<this.NP;t++)this.pv[t*3+1]-=9*e,this.pp[t*3]+=this.pv[t*3]*e,this.pp[t*3+1]=Math.max(.03,this.pp[t*3+1]+this.pv[t*3+1]*e),this.pp[t*3+2]+=this.pv[t*3+2]*e;this.pg.attributes.position.needsUpdate=!0,this.pm.opacity=Math.max(0,this.pT/.45)*.9,this.pT<=0&&(this.pts.visible=!1)}this.decals.forEach(t=>{t.visible&&(t.life-=e,t.material.opacity=.32*Math.min(1,t.life/2.5),t.life<=0&&(t.visible=!1))}),this.updateCrowd(e)}updateCrowd(e){if(this.cheer<=.001){this.cheerDirty&&(this.cm.forEach(r=>{r.m.instanceMatrix.array.set(r.base),r.m.instanceMatrix.needsUpdate=!0}),this.cheerDirty=!1);return}this.cheer=Math.max(0,this.cheer-e*.45);const t=.3*Math.min(1,this.cheer*1.6),i=this.cheer>.12;this.cm.forEach(r=>{if(!r.g.visible)return;const s=r.m.instanceMatrix.array;s.set(r.alt&&i?r.alt:r.base);for(let o=0;o<r.m.count;o++)s[o*16+13]+=Math.abs(Math.sin(this.clk*7+o*.73%6.283))*t;r.m.instanceMatrix.needsUpdate=!0}),this.cheerDirty=!0}placeAvatars(e,t){this.avatars.forEach(i=>{i.g.visible=!1}),e.forEach(i=>{const r=this.avatars.get(i.slot);if(r){if(r.g.visible=!0,!this.syncSw&&i.swId&&i.swId!==r.swId){const s=S0[i.swK]||S0.remate;r.sw={a0:s[0],a1:s[1],dur:s[2],wind:s[3]==null?null:s[3],yaw:i.swYaw,t:0}}r.swId=i.swId,this.animate(r,i.x,i.z,i.mv,t),r.g.rotation.y=r.team==="a"?0:Math.PI}}),this.syncSw=!1}placeBall(e,t){this.ball.visible=!0,this.bsh.visible=!0,this.ball.position.set(e.x,e.y,e.z);const i=e.vz>=0?1:-1;this.ball.rotation.x+=e.vz*t*.8+i*(e.spin||0)*t*16,this.ball.rotation.z-=e.vx*t*.8,this.bsh.position.set(e.x,.02,e.z),this.bsh.scale.setScalar(Math.max(.4,1-e.y*.12)),this.hist.unshift({x:e.x,y:e.y,z:e.z}),this.hist.length>9&&this.hist.pop();const r=Math.hypot(e.vx,e.vy,e.vz)>7&&!e.hold;this.trail.forEach((s,o)=>{const a=this.hist[o+1];s.visible=r&&!!a,a&&(s.position.set(a.x,a.y,a.z),s.scale.setScalar(1-o*.1))})}updateMarkers(e,t){const i=e.ys||1;let r=!1;if(!t.hold&&!t.bn&&e.st==="play"){const o=t.vy*t.vy+2*Ir*(t.y-Ur);if(o>=0){const a=(t.vy+Math.sqrt(o))/Ir,l=t.x+t.vx*a,c=t.z+t.vz*a;if(a>.03&&Math.abs(l)<5.1&&Math.abs(c)<10.1){r=!0;const u=e.mySlot>=0&&c*i>0,h=u?"#97C459":"#FFFFFF";this.land.position.set(l,.035,c),this.landOuter.scale.setScalar(1+Math.min(a,1.5)*.9),[this.landDisc,this.landRing,this.landOuter].forEach(d=>d.material.color.set(h)),this.landDisc.material.opacity=.2+.1*Math.sin(this.clk*8)}}}if(this.land.visible=r,(e.st==="serve"||e.st==="play"&&t.sf&&!t.bn)&&e.srv>=0&&e.sx){const o=e.srv<2?1:-1;this.sbox.position.set(-e.sx*2.5,.025,-o*3.475),this.sbox.visible=!0}else this.sbox.visible=!1}startReplay(){const e=this.clk,t=this.rec.filter(s=>s.t>=e-2.5);if(t.length<12)return;const i=t.slice(-12),r=i.reduce((s,o)=>s+o.b[0],0)/i.length;this.rp={frames:t,t0:t[0].t,dur:t[t.length-1].t-t[0].t,t:0,i:0,speed:.5,side:r>=0?1:-1},this.hist.length=0,this.onReplay(!0)}endReplay(){this.rp&&(this.rp=null,this.syncSw=!0,this.lookInit=!1,this.hist.length=0,this.avatars.forEach(e=>{e.sw=null}),this.onReplay(!1))}skipReplay(){this.endReplay(),this.replayArm=null}renderReplay(e){const t=this.rp;if(this.clk-=e*(1-t.speed),t.t+=e*t.speed,t.t>=t.dur)return this.endReplay(),!1;const i=t.frames;for(;t.i<i.length-2&&i[t.i+1].t-t.t0<=t.t;)t.i++;const r=i[t.i],s=i[t.i+1],o=Yu((t.t-(r.t-t.t0))/Math.max(1e-4,s.t-r.t),0,1),a=r.e.map(p=>{const v=s.e.find(x=>x[0]===p[0])||p;return{slot:p[0],x:p[1]+(v[1]-p[1])*o,z:p[2]+(v[2]-p[2])*o,mv:p[3],swId:p[4],swK:p[5],swYaw:p[6]}}),l=r.b,c=s.b,u={x:l[0]+(c[0]-l[0])*o,y:l[1]+(c[1]-l[1])*o,z:l[2]+(c[2]-l[2])*o,vx:l[3],vy:l[4],vz:l[5],spin:l[6],hold:!1};this.placeAvatars(a,e*t.speed),this.placeBall(u,e*t.speed),this.ring.visible=!1,this.aim.visible=!1,this.land.visible=!1,this.sbox.visible=!1;const h=t.t/t.dur,d=this.cam;return d.fov=36,d.position.set(t.side*(12.5-2.5*h),5.2+1.2*h,Yu(u.z*.55,-5.5,5.5)),this.look.lerp(new I(u.x*.6,1,u.z),1-Math.exp(-6*e)),d.lookAt(this.look),!0}render(e,t,i={}){if(!this.ok)return;t=Math.min(t,.1),this.clk+=t,this.autoQuality&&this.hq&&e&&e.st!=="lobby"&&(t>.036?this.slow++:this.slow=Math.max(0,this.slow-1),this.slow>70&&(this.slow=0,this.setQuality(!1),this.onQuality(!1)));const r=this.cam,s=e&&e.phase==="match"&&e.ball,o=e&&e.ys?e.ys:1;if(this.crowd.visible=this.hq&&o>0,this.crowd2.visible=this.hq&&o<0,this.updateFx(t),!s&&this.rp&&this.endReplay(),!e)this.lookInit=!1,this.hideGame(!0),this.preview&&(this.preview.visible=!0,this.preview.rotation.y=.6*Math.sin(this.clk*.8),this.preview.position.set(0,0,8.5)),this.avatars.forEach(a=>{a.g.visible=!1}),r.fov=40,r.position.set(.2,1.3,3.9),r.lookAt(0,1,8.5),this.offset(.2);else if(s){if(this.preview&&(this.preview.visible=!1),this.syncRoster(e.roster),this.mySlot=e.mySlot,this.myTeam=e.mySlot>=0?e.mySlot<2?"a":"b":"a",this.rp||e.events.forEach(a=>this.handleEvent(a)),this.replayArm!=null&&this.clk>=this.replayArm&&(this.replayArm=null,this.startReplay()),this.offset(0),!(this.rp&&this.renderReplay(t))){const a=e.ball;if(this.placeAvatars(e.ents,t),this.placeBall(a,t),this.updateMarkers(e,a),e.st==="serve"||e.st==="play"||e.st==="point")for(this.rec.push({t:this.clk,e:e.ents.map(u=>[u.slot,u.x,u.z,u.mv,u.swId,u.swK,u.swYaw]),b:[a.x,a.y,a.z,a.vx,a.vy,a.vz,a.spin||0]});this.rec.length&&this.clk-this.rec[0].t>3.2;)this.rec.shift();const l=e.ents.find(u=>u.slot===e.mySlot);let c;if(l){const u=e.ys,h=e.st==="play"&&a.z*u>.2&&a.vz*u>-.5&&Math.hypot(a.x-l.x,a.z-l.z)<2&&a.y<2.8;this.ring.visible=!0,this.ring.position.set(l.x,.03,l.z),this.ring.material.color.set(h?"#97C459":"#fff"),this.ring.material.opacity=h?.9:.35;const d=e.st==="serve"&&e.srv===e.mySlot,p=i.aim==null?d?-e.sx*2.2:Yu(-l.x*.5,-3.8,3.8):i.aim;this.aim.visible=h||d,this.aim.position.set(p,.04,(d?-5.4:-6.2)*u),this.aim.material.color.set(!d||p*-e.sx>.3?"#97C459":"#E24B4A"),this.aim.scale.setScalar(1+(i.charge||0)*.9),r.position.set(l.x*.5,8.8,19.5*u),c=new I(l.x*.35+a.x*.1,0,-1.5*u+a.z*.07)}else this.ring.visible=!1,this.aim.visible=!1,r.position.set(Math.sin(this.clk*.15)*4,9,19.5),c=new I(a.x*.1,0,-1.5+a.z*.07);this.lookInit?this.look.lerp(c,1-Math.exp(-5*t)):(this.look.copy(c),this.lookInit=!0),this.fovKick*=Math.exp(-3*t),r.fov=58+this.fovKick,this.shake>0&&(this.shake=Math.max(0,this.shake-t*1.2),r.position.x+=(Math.random()-.5)*this.shake,r.position.y+=(Math.random()-.5)*this.shake),r.lookAt(this.look)}}else{this.lookInit=!1,this.hideGame(!0),this.preview&&(this.preview.visible=!1),this.syncRoster(e.roster),this.mySlot=e.mySlot,this.avatars.forEach(l=>{l.g.visible=!0,this.animate(l,l.lx,l.lz,0,t),l.g.rotation.y=l.team==="a"?0:Math.PI});const a=this.clk*.12;r.fov=52,r.position.set(Math.sin(a)*11,16,Math.cos(a)*22),r.lookAt(0,0,0),this.offset(.3)}r.updateProjectionMatrix(),this.hq&&this.composer?(this.grade.uniforms.time.value=this.clk*7%97,this.composer.render(t)):this.ren.render(this.scene,r)}hideGame(e){this.ball.visible=!e,this.bsh.visible=!e,this.ring.visible=!e,this.aim.visible=!e,this.land.visible=!1,this.sbox.visible=!1,this.trail.forEach(t=>{t.visible=!1})}offset(e){if(!e){this.cam.clearViewOffset();return}this.cam.setViewOffset(this.w,this.h,0,Math.round(this.h*e),this.w,this.h)}dispose(){this.ok&&(this.ro.disconnect(),this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(t=>{t.map&&t.map.dispose(),t.dispose()})}),this.ren.dispose(),this.ren.domElement.remove())}}function R0(){return{sets:[],g:{a:0,b:0},p:{a:0,b:0},tb:!1,sw:{a:0,b:0},srv:"a",sIdx:{a:0,b:0}}}const V2=["0","15","30","40"],lf=(n,e)=>n.tb?String(n.p[e]):V2[n.p[e]],W2=n=>!n.tb&&n.p.a===3&&n.p.b===3;function X2(n,e,t){const i=fa[t],r=or(e);return n.tb?(n.p[e]++,(n.p.a+n.p.b)%2===1&&(n.srv=or(n.srv)),n.p[e]>=7&&n.p[e]-n.p[r]>=2?(n.g[e]++,n.srv=or(n.srv),n.sIdx[n.srv]++,j_(n,e,i)):"punto"):n.p[e]===3?j2(n,e,i):(n.p[e]++,"punto")}function j2(n,e,t){const i=or(e);return n.g[e]++,n.p.a=0,n.p.b=0,n.srv=or(n.srv),n.sIdx[n.srv]++,n.g[e]>=t.games&&n.g[e]-n.g[i]>=t.winBy?j_(n,e,t):(t.tbAt&&n.g.a===t.tbAt&&n.g.b===t.tbAt&&(n.tb=!0),"game")}function j_(n,e,t){return n.sets.push({a:n.g.a,b:n.g.b}),n.sw[e]++,n.g.a=0,n.g.b=0,n.p.a=0,n.p.b=0,n.tb=!1,n.sw[e]>=t.need?"match":"set"}const zt=(n,e,t)=>Math.max(e,Math.min(t,n)),ct=n=>Math.round(n*100)/100,q2=20;class P0{constructor({fmt:e="exp",rng:t=Math.random}={}){this.fmt=e,this.rng=t,this.state="idle",this.ents=[],this.ball={x:0,y:1,z:0,vx:0,vy:0,vz:0,last:null,bounces:0,shot:"",hold:!0,out:!1,spin:0},this.m=R0(),this.events=[],this.srv=null,this.stT=0,this.serveT=0,this.rallyT=0,this.rallyHits=0,this.matchEnd=!1,this.winner=null,this.pending=null,this.swSeq=0,this.sn=1,this.sx=1,this.retry=!1,this.clock=0}emit(e){this.events.push(e)}drain(){const e=this.events;return this.events=[],e}team(e){return this.ents.filter(t=>t.team===e)}entOf(e){return this.ents.find(t=>t.uid===e)||null}setRoster(e){const t=new Map(this.ents.map(i=>[i.slot,i]));this.ents=e.map(i=>{const r=t.get(i.slot);return r&&r.uid===i.uid?(r.name=i.name,r):{slot:i.slot,team:of(i.slot),uid:i.uid,name:i.name,bot:i.uid==null,x:0,z:0,mv:0,sw:null,lv:null,cd:0,hx:0,buf:null,inp:{mx:0,mz:0,ax:null,age:9}}}),["a","b"].forEach(i=>{const r=this.team(i);r.forEach((s,o)=>{s.hx=r.length>1?o===0?2.3:-2.3:0})})}start(e){this.fmt=e||this.fmt,this.m=R0(),this.matchEnd=!1,this.winner=null,this.clock=0,this.retry=!1,this.newServe()}input(e,t){const i=this.entOf(e);i&&(i.inp.mx=zt(+t.mx||0,-1,1),i.inp.mz=zt(+t.mz||0,-1,1),i.inp.ax=t.ax==null?null:zt(+t.ax,-4.2,4.2),i.inp.age=0,t.shot&&this.shotInput(i,t.shot,i.inp.ax,zt(+t.pw||0,0,1)))}newServe(){this.pending&&(this.setRoster(this.pending),this.pending=null,this.emit({t:"roster"}));const e=this.m.srv,t=this.team(e);this.srv=t.length?t[this.m.sIdx[e]%t.length]:null,this.retry||(this.sn=1),this.retry=!1;const i=(this.m.p.a+this.m.p.b)%2;this.sx=i===0?an(e):-an(e),this.ents.forEach(s=>{const o=an(s.team),a=s===this.srv,l=s.team===e&&!a,c=this.team(s.team).length>1;s.x=a?this.sx*2.4:s.hx,s.z=o*(a?8.8:l?3.8:c?7:8.2),s.mv=0,s.sw=null,s.lv=null,s.buf=null,s.cd=0});const r=this.ball;r.hold=!0,r.vx=r.vy=r.vz=0,r.last=null,r.out=!1,r.bounces=0,r.spin=0,r.let=!1,r.pw=0,r.shot="",this.srv&&(r.x=this.srv.x+.35,r.y=1,r.z=this.srv.z-an(this.srv.team)*.5),this.state="serve",this.serveT=1,this.rallyT=0,this.rallyHits=0,this.emit({t:"serve",slot:this.srv?this.srv.slot:-1,sn:this.sn}),W2(this.m)&&this.emit({t:"msg",tx:"Punto de oro",ms:2200,gold:!0})}point(e,t){if(this.state!=="play")return;const i=X2(this.m,e,this.fmt);this.state="point";const r=!!t||i==="set"||i==="match";this.stT=i==="punto"&&!t?1.3:r?6:2.3,this.matchEnd=i==="match",this.matchEnd&&(this.winner=e),this.emit({t:"point",who:e,ev:i,replay:r,label:t||null,pts:[lf(this.m,"a"),lf(this.m,"b")]})}fault(e){const t=this.ball;if(this.state==="play"&&t.shot==="saque"&&t.bounces===0&&this.srv&&e===this.srv.team){this.serveFault();return}this.point(or(e))}serveFault(){this.state==="play"&&(this.sn===1?(this.sn=2,this.retry=!0,this.state="point",this.stT=1.4,this.emit({t:"msg",tx:"Falta · segundo saque",ms:1500})):(this.emit({t:"msg",tx:"Doble falta",ms:1500}),this.point(or(this.srv.team))))}letServe(){this.state==="play"&&(this.retry=!0,this.state="point",this.stT=1.4,this.emit({t:"msg",tx:"Let · se repite el saque",ms:1500,gold:!0}))}serveValid(){const e=this.ball,t=-this.sx;return e.z*an(this.srv.team)<0&&e.x*t>0&&Math.abs(e.z)<=b2}launch(e,t,i,r){const s=this.ball,o=s.x,a=s.y,l=s.z;let c,u,h;for(let d=0;d<6;d++){c=(e-o)/i,h=(t-l)/i,u=(Ur-a)/i+.5*Ir*i;const p=(0-l)/h,v=a+u*p-.5*Ir*p*p;if(!r||p>0&&p<i&&v>1.25)break;i+=.12}s.vx=c,s.vy=u,s.vz=h}swing(e,t,i){e.sw={id:++this.swSeq,k:t,yaw:i||0,t:0}}hit(e,t,i,r,s,o,a,l,c=0){const u=e==="a"?-1:1;let h=t,d=!1;l&&(h=l.ok?l.k:"remate",d=l.ok);const p=C2[h],v=h==="dejada"?0:zt(c||0,0,1),x=[0,.5,1.3][o]*(1+.7*v),m=u*Math.min(9.3,p.d*(1+.1*v)+(this.rng()-.5)*(.6+(d?.3:x))),f=p.T*[.9,1,1.12][o]*(1-.22*v);i=zt(i+(this.rng()-.5)*2*(d?.4:x),-4.4,4.4),this.launch(i,m,r?.5:f,!r);const _=this.ball;_.last=e,_.bounces=0,_.shot=h,_.hold=!1,_.out=!1,_.let=!1,_.pw=v,_.spin=(M0[h]||0)*[1.2,1,.6][o],this.rallyT=0,this.rallyHits++,this.swing(a,l?"remate":t,s)}serve(e,t,i){const r=this.ball,s=an(e.team),o=zt(i||0,0,1),a=-s*(4.6+this.rng()*1.2+.3*o);t=zt(t+(this.rng()-.5)*(1+.6*o),-4.4,4.4);let l=2.2-.95*o+(this.rng()-.5)*.3;const c=this.rng(),u=o<.4?0:.01+.1*o*o,h=.1*o*o;let d=!1;c<u?(l=1+this.rng()*.06,d=!0):c<u+h&&(l=.7);const p=Math.abs(r.z),v=p/(p+Math.abs(a)),x=r.y,m=(l-x-(Ur-x)*v)/(.5*Ir*v*(1-v)),f=zt(Math.sqrt(Math.max(m,.1)),.5,1.4);this.launch(t,a,f,!1),r.last=e.team,r.bounces=0,r.shot="saque",r.hold=!1,r.out=!1,r.let=d,r.pw=o,r.spin=M0.saque,this.rallyT=0,this.rallyHits++,this.swing(e,"saque",0)}reach(e){const t=this.ball;if(this.state!=="play"||!t.last||t.last===e.team||t.shot==="saque"&&t.bounces===0)return!1;const i=an(e.team);return t.z*i>.2&&Math.hypot(t.x-e.x,t.z-e.z)<2&&t.y<2.8}quality(e,t){const i=this.ball,r=an(t.team),s=i.x-t.x,o=i.z-t.z,a=Math.hypot(s,o),l=Math.abs(a-1)*.9+Math.abs(i.y-R2[e])*.7+(o*r>.35?.5:0);return l<.55?0:l<1.15?1:2}aimFor(e,t){return t??zt(-e.x*.5,-3.8,3.8)}impact(e,t,i,r,s=0){const o=this.ball;this.emit({t:"hit",slot:r.slot,shot:t,q:e,gold:!!i,pw:ct(s),x:ct(o.x),y:ct(o.y),z:ct(o.z)})}exec(e,t,i,r=0){const s=this.ball,o=an(e.team);e.cd=.35;const a=t==="x3"||t==="x4";if((a||t==="remate")&&s.y<(a?1.7:1.3)){this.swing(e,"remate",0),this.emit({t:"msg",slot:e.slot,tx:a?"Necesitás una pelota alta":"Muy baja para rematar",ms:900});return}const l=a?"remate":t,c=this.quality(l,e),u=(s.x-e.x)*o<0,h=s.x-e.x,d=s.z-e.z;e.lv={x:zt(h,-.9,.9)*5,z:zt(d,-.9,.9)*5,t:.12};let p=null,v=this.aimFor(e,i);if(a){const m=c===0||c===1&&this.rng()<.35+.5*r||c===2&&r>.7&&this.rng()<.2;p={k:t,ok:m},v=t==="x3"?(v>=0?1:-1)*3.9:v*.5}this.hit(e.team,l,v,!1,u?.9:0,c,e,p,r);let x;a?x=p.ok?t:"Remate":t==="drive"?x=u?"Revés":"Drive":t==="globo"?x=u?"Globo de revés":"Globo":t==="dejada"?x="Dejada":x="Remate",this.emit({t:"msg",slot:e.slot,tx:`${x} · ${P2[c]}`,ms:900,gold:c===0}),this.impact(c,l,a&&p.ok,e,r)}shotInput(e,t,i,r=0){const s=this.ball;if(this.state==="serve"&&s.hold&&this.srv===e){if(e.cd>0)return;e.cd=.4,this.state="play",this.serve(e,i??-this.sx*2.2,r),this.emit({t:"msg",slot:e.slot,tx:this.sn===2?"Segundo saque":"Saque",ms:700}),this.impact(1,"saque",!1,e,r);return}if(this.state!=="play"||e.cd>0)return;if(this.reach(e)){this.exec(e,t,i,r);return}const o=an(e.team);if(s.last&&s.last!==e.team&&s.z*o>.2&&Math.hypot(s.x-e.x,s.z-e.z)<6){e.buf={shot:t,ax:i,pw:r,t:.3};return}e.cd=.4,this.swing(e,t==="x3"||t==="x4"?"remate":t,0)}aiMove(e,t){const i=this.ball,r=an(e.team);let s=e.hx,o=r*5.4,a=3.6;if(i.last&&i.last!==e.team&&i.z*r>-1.5){const l=i.x+i.vx*.3;let c=i.z+i.vz*.3;c=r>0?zt(c,1.2,9.2):zt(c,-9.2,-1.2);let u=null,h=1e9;this.team(e.team).forEach(d=>{const p=Math.abs(l-d.x)+.35*Math.abs(c-d.z)+(d.bot?0:-.5);p<h&&(h=p,u=d)}),u===e&&(s=l,o=c,a=4.9)}else i.last===e.team&&(o=r*4.6);this.moveTo(e,zt(s,-4.6,4.6),o,a,t)}moveTo(e,t,i,r,s){const o=t-e.x,a=i-e.z,l=Math.hypot(o,a);if(l>.05){const c=Math.min(r*s,l);e.x+=o/l*c,e.z+=a/l*c,e.mv=1}else e.mv=0}aiHit(e){const t=this.ball;if(e.cd>0||!this.reach(e)||t.y>2.7)return;const i=Math.hypot(t.x-e.x,t.z-e.z);if(this.team(e.team).filter(v=>!v.bot&&this.reach(v)).some(v=>Math.hypot(t.x-v.x,t.z-v.z)<i+.8)&&i>.8)return;const s=this.team(or(e.team));let o=0;s.forEach(v=>{o+=v.x}),o/=Math.max(1,s.length);let a=(o>0?-1:1)*(1+this.rng()*2.7);const l=this.rng(),c=this.rng()<.3?0:this.rng()<.15?2:1;let u="drive",h=null;if(t.y>2&&l<.1){const v=this.rng()<.5?"x3":"x4";h={k:v,ok:c===0},u="remate",a=v==="x3"?(o>0?-1:1)*3.9:a*.4}else t.y>1.7&&l<.55?u="remate":l<.25?u="globo":l<.35&&(u="dejada");e.cd=.6;const d=this.rng()<.08+.02*this.rallyHits,p=this.rng()*.6;this.hit(e.team,u,a,d,0,c,e,h,p),this.emit({t:"hit",slot:e.slot,shot:u,q:c,pw:ct(p),gold:!!(h&&h.ok),x:ct(t.x),y:ct(t.y),z:ct(t.z)})}stepBall(e){const t=this.ball;if(t.hold){const s=an(this.srv.team);t.x=this.srv.x+.35,t.y=1,t.z=this.srv.z-s*.5;return}const i=t.z;t.vy-=Ir*e,t.x+=t.vx*e,t.y+=t.vy*e,t.z+=t.vz*e;const r=i>0&&t.z<=0||i<0&&t.z>=0;if(r&&t.let&&t.y>=.92&&t.bounces===0&&(t.vz*=.45,t.vy*=.3,t.vx*=.7,this.emit({t:"net"})),r&&t.y<.92&&(t.z=i,t.vz*=-.15,t.vx*=.3,this.emit({t:"net"}),this.state==="play"&&this.fault(t.last)),t.y<Ur&&t.vy<0){const s=Math.hypot(t.vx,t.vy,t.vz),o=t.bounces===0,a=t.shot;t.y=Ur;const l=t.spin||0;t.vy=-t.vy*(o&&a==="globo"?.8:.74)*(1-.12*l);const c=(o?a==="remate"?.98:a==="globo"?.75:.92:.92)*(1+.1*l);if(t.vx*=c,t.vz*=c,t.spin=l*.6,o&&a==="dejada"&&(t.vz*=.3,t.vy*=.6),o&&a==="x3"){const u=t.x>=0?1:-1;t.vx=u*Math.max(3,(5.35-Math.abs(t.x))/.42),t.vy=11.5,t.vz*=.25}if(o&&a==="x4"){const u=t.vz>=0?1:-1;t.vz=u*Math.max(3,(10.4-Math.abs(t.z))/.45),t.vy=13,t.vx*=.3}s>3&&this.emit({t:"bounce",x:ct(t.x),z:ct(t.z)}),this.onBounce()}if(!t.out){if(Math.abs(t.x)>4.88){if(t.y>3&&Math.abs(t.x)>5.02)this.exitBall("x3");else if(t.y<=3){const s=t.x>0?1:-1;t.x=s*4.88,t.vx=-s*Math.abs(t.vx)*(t.y>2?.5:.78),t.y>2&&(t.vz+=(this.rng()-.5)*2),this.wall()}}if(Math.abs(t.z)>9.88){if(t.y>4&&Math.abs(t.z)>10.02)this.exitBall("x4");else if(t.y<=4){const s=t.z>0?1:-1;t.z=s*9.88,t.vz=-s*Math.abs(t.vz)*(t.y>3?.5:.78),t.y>3&&(t.vx+=(this.rng()-.5)*2),this.wall()}}}}onBounce(){if(this.state!=="play")return;const e=this.ball;e.bounces++;const t=e.z<0?"b":"a";if(e.shot==="saque"&&e.bounces===1){this.serveValid()?e.let&&this.letServe():this.serveFault();return}e.bounces===1?t===e.last&&this.fault(e.last):this.point(e.last)}wall(){this.ball.vy-=(this.ball.spin||0)*1.5,this.ball.spin=(this.ball.spin||0)*.6,this.emit({t:"wall"}),this.state==="play"&&this.ball.bounces===0&&this.fault(this.ball.last)}exitBall(e){const t=this.ball;t.out=!0,this.state==="play"&&(t.bounces===0?(this.fault(t.last),this.emit({t:"msg",tx:"Pelota afuera",ms:1400})):this.point(t.last,e==="x3"?"Por 3: punto directo":"Por 4: punto directo"))}step(e){if((this.state==="serve"||this.state==="play"||this.state==="point")&&(this.clock+=e),this.ents.forEach(t=>{t.cd>0&&(t.cd-=e),t.inp.age+=e,t.sw&&(t.sw.t+=e,t.sw.t>.7&&(t.sw=null))}),this.state==="serve"||this.state==="play"){if(this.ents.forEach(t=>{if(t.bot)return;const i=t.inp.age<.5,r=i?t.inp.mx:0,s=i?t.inp.mz:0;let o=t.x+r*6.5*e,a=t.z+s*6.5*e;t.lv&&(o+=t.lv.x*e,a+=t.lv.z*e,t.lv.t-=e,t.lv.t<=0&&(t.lv=null));const l=an(t.team);if(t.x=zt(o,-4.5,4.5),t.z=l*zt(l*a,.9,9),t.mv=Math.min(1,Math.hypot(r,s)*1.5),t.buf){if(t.buf.t-=e,this.reach(t)&&t.cd<=0){const c=t.buf;t.buf=null,this.exec(t,c.shot,c.ax,c.pw)}else if(t.buf.t<=0){const c=t.buf;t.buf=null,t.cd=.4,this.swing(t,c.shot==="x3"||c.shot==="x4"?"remate":c.shot,0)}}}),this.state==="play"?this.ents.forEach(t=>{t.bot&&(this.aiMove(t,e),this.aiHit(t))}):this.ents.forEach(t=>{t.bot&&(t.mv=0)}),this.state==="serve"&&this.srv.bot&&(this.serveT-=e,this.serveT<=0)){this.state="play";const t=.1+this.rng()*.7;this.serve(this.srv,-this.sx*(this.rng()<.1?-.8:.8+this.rng()*3),t),this.emit({t:"hit",slot:this.srv.slot,shot:"saque",q:1,pw:ct(t),gold:!1,x:ct(this.ball.x),y:ct(this.ball.y),z:ct(this.ball.z)})}this.stepBall(e),this.state==="play"&&(this.rallyT+=e,this.rallyT>q2&&this.point(this.ball.last||"a"))}else this.state==="point"&&(this.stepBall(e),this.ents.forEach(t=>{t.mv=0}),this.stT-=e,this.stT<=0&&(this.matchEnd?(this.state="end",this.emit({t:"end",winner:this.winner})):this.newServe()))}snapshot(){const e=this.ball;return{st:this.state,m:this.m,srv:this.srv?this.srv.slot:-1,w:this.winner,sx:this.sx,sn:this.sn,ck:ct(this.clock),b:[ct(e.x),ct(e.y),ct(e.z),ct(e.vx),ct(e.vy),ct(e.vz),e.hold?1:0,ct(e.spin||0),e.bounces,e.shot==="saque"?1:0],e:this.ents.map(t=>[t.slot,ct(t.x),ct(t.z),ct(t.mv),t.sw?t.sw.id:0,t.sw?t.sw.k:"",t.sw?t.sw.yaw:0]),ev:this.drain()}}save(){return{fmt:this.fmt,state:this.state,m:JSON.parse(JSON.stringify(this.m)),matchEnd:this.matchEnd,winner:this.winner,clock:this.clock,roster:this.ents.map(e=>({slot:e.slot,uid:e.uid,name:e.name}))}}load(e){this.fmt=e.fmt,this.m=JSON.parse(JSON.stringify(e.m)),this.matchEnd=e.matchEnd,this.winner=e.winner,this.clock=e.clock||0,this.retry=!1,this.setRoster(e.roster),e.state==="end"?this.state="end":e.state==="point"&&e.matchEnd?this.state="end":this.newServe()}}function $2(){return{mode:"2v2",fmt:"exp",users:[],slots:[null,null,null,null]}}const ai=(n,e)=>n.users.find(t=>t.id===e)||null;function L0(n){const e=n.slots.slice(),t=V_[n.mode],i=[];for(let o=0;o<4;o++)t.includes(o)||(n.slots[o]=null);t.forEach(o=>{const a=n.slots[o];if(a&&a!=="bot"){const l=ai(n,a);(!l||l.watch)&&(n.slots[o]=null)}});const r=n.slots.filter(o=>o&&o!=="bot"),s=n.users.filter(o=>!o.watch&&!r.includes(o.id)).sort((o,a)=>o.q-a.q);return t.forEach(o=>{(!n.slots[o]||n.slots[o]==="bot")&&(n.slots[o]=s.length?s.shift().id:"bot")}),t.forEach(o=>{e[o]!==n.slots[o]&&(n.slots[o]!=="bot"?i.push(`${ai(n,n.slots[o]).name} pasa a jugar`):e[o]&&e[o]!=="bot"&&i.push("Sale un jugador: entra un bot"))}),i}function Ku(n){return V_[n.mode].slice().sort((e,t)=>e-t).map(e=>{const t=n.slots[e],i=t&&t!=="bot"?ai(n,t):null;return{slot:e,uid:i?i.id:null,name:i?i.name:"Bot",num:i?i.num:20+e,look:i?i.look:null}})}const Y2=n=>n.users.filter(e=>!n.slots.includes(e.id));class K2{constructor(){this.h={}}on(e,t){return(this.h[e]=this.h[e]||[]).push(t),()=>this.off(e,t)}off(e,t){this.h[e]=(this.h[e]||[]).filter(i=>i!==t)}emit(e,...t){(this.h[e]||[]).slice().forEach(i=>i(...t))}}const J2=/^#[0-9a-fA-F]{6}$/,Q2=["corto","largo","rodete"],Z2=["none","vincha","gorra","lentes"],D0=["drive","globo","dejada","remate","x3","x4"],Po={skin:"#E0AC82",hair:"#2C2C2A",style:"corto",shirt:"#0C447C",acc:"none",paddle:"#2A93A8"};function Nl(n){const e=n&&typeof n=="object"?n:{},t=(i,r)=>typeof i=="string"&&J2.test(i)?i:r;return{skin:t(e.skin,Po.skin),hair:t(e.hair,Po.hair),shirt:t(e.shirt,Po.shirt),paddle:t(e.paddle,Po.paddle),style:Q2.includes(e.style)?e.style:"corto",acc:Z2.includes(e.acc)?e.acc:"none"}}function Gs(n){return String(n??"").replace(/[\u0000-\u001f<>&"'`]/g,"").trim().slice(0,14)||"Jugador"}const Ju=n=>{const e=Math.floor(+n);return Number.isFinite(e)?Math.max(0,Math.min(99,e)):7};function eC(n){return String(n||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,6)}function tC(){const n="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="";for(let t=0;t<4;t++)e+=n[Math.floor(Math.random()*n.length)];return e}const nC=1/20,iC=1,rC=1/20,sC=16,oC=12e3,N0=(n,e,t)=>Math.max(e,Math.min(t,n));class aC extends K2{constructor(e,{profile:t,create:i=!1,code:r="",timeouts:s={}}){super(),this.code=r,this.t=e,this.profile={name:Gs(t.name),look:Nl(t.look),num:Ju(t.num)},this.create=i,this.joinTimeout=s.join??oC,this.role="connecting",this.selfId=null,this.hostId=null,this.expectHost=null,this.room=$2(),this.roster=[],this.phase="lobby",this.qc=0,this.sim=null,this.snap=null,this.sinceSnap=0,this.lastSave=null,this.disp=new Map,this.ballDisp=null,this.evq=[],this.ctrl={mx:0,mz:0,ax:null},this.accSnap=0,this.accSave=0,this.accInp=0,this.helloAt=0,this.timer=null}async start(){this.t.onMessage((e,t,i)=>this.onMsg(e,t,i)),this.t.onJoin(e=>this.onJoin(e)),this.t.onLeave(e=>this.onLeave(e)),this.selfId=await this.t.start(),this.role!=="closed"&&(this.create?this.becomeHost():this.armTimer("nohost"),this.emit("change"))}leave(){this.role="closed",clearTimeout(this.timer);try{this.t.leave()}catch{}this.emit("change")}armTimer(e){clearTimeout(this.timer),this.timer=setTimeout(()=>{(this.role==="connecting"||this.expectHost)&&(this.role="closed",this.emit("error",e),this.emit("change"))},this.joinTimeout)}get mySlot(){const e=this.roster.find(t=>t.uid===this.selfId);return e?e.slot:-1}get ys(){const e=this.mySlot;return e>=0&&of(e)==="b"?-1:1}get me(){return ai(this.room,this.selfId)}get isHost(){return this.role==="host"}get playing(){return this.phase==="match"}becomeHost(){this.role="host",this.hostId=this.selfId,clearTimeout(this.timer),ai(this.room,this.selfId)||this.room.users.push({id:this.selfId,...this.profile,q:++this.qc,watch:!1}),this.sim||(this.sim=new P0({fmt:this.room.fmt})),this.seat(!0),this.broadcastRoom()}seat(e){if(e||this.phase==="lobby"||!this.sim||this.sim.state==="idle"){const t=L0(this.room);this.roster=Ku(this.room),t.forEach(i=>this.emit("notice",i))}else{const t=L0(this.room);this.sim.pending=Ku(this.room),t.forEach(i=>this.emit("notice",i))}}broadcastRoom(e){this.t.send("room",{room:this.room,roster:this.roster,hostId:this.hostId,phase:this.phase},e),this.emit("change")}setMode(e){!this.isHost||this.phase!=="lobby"||!["1v1","2v2"].includes(e)||(this.room.mode=e,this.seat(!0),this.broadcastRoom())}setFmt(e){!this.isHost||this.phase!=="lobby"||!fa[e]||(this.room.fmt=e,this.broadcastRoom())}setWatch(e){if(this.isHost){const t=this.me;if(!t)return;t.watch=!!e,e||(t.q=++this.qc),this.seat(),this.broadcastRoom()}else this.t.send("watch",{v:!!e},this.hostId)}startMatch(){this.isHost&&(this.seat(!0),this.phase="match",this.sim.setRoster(this.roster.map(e=>({slot:e.slot,uid:e.uid,name:e.name}))),this.sim.start(this.room.fmt),this.accSnap=0,this.accSave=0,this.lastSave=this.sim.save(),this.broadcastRoom(),this.sendSave())}backToLobby(){this.isHost&&(this.phase="lobby",this.sim.state="idle",this.snap=null,this.seat(!0),this.broadcastRoom())}sendSave(){this.lastSave=this.sim.save(),this.t.send("sv",this.lastSave)}onJoin(e){this.role==="host"&&this.broadcastRoom(e)}onLeave(e){if(this.role==="host"){const t=ai(this.room,e);if(!t)return;this.room.users=this.room.users.filter(i=>i.id!==e),this.emit("notice",`${t.name} salió de la sala`),this.seat(),this.broadcastRoom()}else this.role==="client"&&e===this.hostId&&this.migrate(e)}onMsg(e,t,i){if(this.role!=="closed"){if(e==="room")return this.onRoom(t,i);if(e==="snap"){i===this.hostId&&this.role==="client"&&this.onSnap(t);return}if(e==="sv"){i===this.hostId&&(this.lastSave=t);return}if(this.role==="host"){if(e==="hello")return this.onHello(t,i);if(e==="watch"){const r=ai(this.room,i);r&&t&&(r.watch=!!t.v,r.watch||(r.q=++this.qc),this.seat(),this.broadcastRoom());return}e==="inp"&&this.phase==="match"&&t&&this.sim.input(i,{mx:t.mx,mz:t.mz,ax:t.ax,pw:t.pw,shot:D0.includes(t.shot)?t.shot:null})}}}onHello(e,t){if(!e)return;let i=ai(this.room,t);if(i)i.name=Gs(e.name),i.look=Nl(e.look),i.num=Ju(e.num);else{if(this.room.users.length>=sC){this.t.send("full",{},t);return}i={id:t,name:Gs(e.name),look:Nl(e.look),num:Ju(e.num),q:++this.qc,watch:!1},this.room.users.push(i),this.emit("notice",`${i.name} se une a la sala`)}this.seat(),this.broadcastRoom()}onRoom(e,t){if(this.role==="host"||!e||t!==e.hostId||!(this.hostId==null||t===this.hostId||t===this.expectHost))return;this.role==="connecting"&&(this.role="client",clearTimeout(this.timer)),this.hostId=t,this.expectHost=null,clearTimeout(this.timer),this.room=e.room,this.roster=e.roster,this.phase=e.phase;const r=this.room.users.reduce((s,o)=>Math.max(s,o.q),0);this.qc=Math.max(this.qc,r),!ai(this.room,this.selfId)&&Date.now()-this.helloAt>1500&&(this.helloAt=Date.now(),this.t.send("hello",this.profile,this.hostId)),this.phase==="lobby"&&(this.snap=null,this.disp.clear(),this.ballDisp=null),this.emit("change")}onSnap(e){this.snap=e,this.sinceSnap=0,(e.ev||[]).forEach(t=>this.evq.push(t))}migrate(e){this.room.users=this.room.users.filter(i=>i.id!==e);const t=this.room.users.slice().sort((i,r)=>i.q-r.q)[0];if(!t){this.role="closed",this.emit("error","closed"),this.emit("change");return}this.emit("notice","El anfitrión salió de la sala"),t.id===this.selfId?this.promote():(this.hostId=t.id,this.expectHost=t.id,this.armTimer("hostlost"),this.emit("change"))}promote(){this.role="host",this.hostId=this.selfId,this.expectHost=null,clearTimeout(this.timer),this.qc=this.room.users.reduce((e,t)=>Math.max(e,t.q),0),this.sim=new P0({fmt:this.room.fmt}),this.seat(!0),this.phase==="match"&&this.lastSave?(this.sim.load({...this.lastSave,roster:this.roster.map(e=>({slot:e.slot,uid:e.uid,name:e.name}))}),this.evq.push({t:"msg",tx:"Nuevo anfitrión: se repite el punto",ms:2200})):this.phase="lobby",this.snap=null,this.disp.clear(),this.ballDisp=null,this.emit("notice","Ahora sos el anfitrión de la sala"),this.broadcastRoom()}setControl(e){this.ctrl={mx:e.mx||0,mz:e.mz||0,ax:e.ax==null?null:e.ax}}shot(e,t=0){if(this.mySlot<0||this.phase!=="match"||!D0.includes(e))return;const i={...this.ctrl,shot:e,pw:Math.max(0,Math.min(1,+t||0))};this.isHost?this.sim.input(this.selfId,i):this.t.send("inp",i,this.hostId)}tick(e){if(this.role==="host"){if(this.phase!=="match"||this.sim.state==="idle")return;this.mySlot>=0&&this.sim.input(this.selfId,this.ctrl);let t=Math.min(e,.25);for(;t>1e-6;){const i=Math.min(t,.016666666666666666);this.sim.step(i),t-=i}if(this.accSnap+=e,this.accSnap>=nC){this.accSnap=0;const i=this.sim.snapshot();i.ev.forEach(r=>{this.evq.push(r),r.t==="roster"&&(this.roster=Ku(this.room),this.broadcastRoom())}),this.snap=i,this.t.send("snap",i)}this.accSave+=e,this.accSave>=iC&&(this.accSave=0,this.sendSave())}else this.role==="client"&&this.phase==="match"&&this.mySlot>=0&&(this.accInp+=e,this.accInp>=rC&&(this.accInp=0,this.t.send("inp",this.ctrl,this.hostId)))}takeEvents(){const e=this.evq;return this.evq=[],e}frame(e){const t={roster:this.roster,mySlot:this.mySlot,ys:this.ys,phase:this.phase,events:this.takeEvents(),room:this.room};if(this.phase!=="match")return{...t,st:"lobby",ents:[],ball:null,m:null,srv:-1,winner:null};if(this.role==="host"){const w=this.sim,D=w.ball;return{...t,st:w.state,m:w.m,srv:w.srv?w.srv.slot:-1,winner:w.winner,sx:w.sx,sn:w.sn,clock:w.clock,ball:{x:D.x,y:D.y,z:D.z,vx:D.vx,vy:D.vy,vz:D.vz,hold:D.hold,spin:D.spin||0,bn:D.bounces,sf:D.shot==="saque"?1:0},ents:w.ents.map(S=>({slot:S.slot,x:S.x,z:S.z,mv:S.mv,swId:S.sw?S.sw.id:0,swK:S.sw?S.sw.k:"",swYaw:S.sw?S.sw.yaw:0}))}}const i=this.snap;if(!i)return{...t,st:"wait",ents:[],ball:null,m:null,srv:-1,winner:null};this.sinceSnap+=e;const r=1-Math.exp(-20*e),s=this.mySlot,o=i.st==="play"||i.st==="serve",a=i.e.map(([w,D,S,A,k,L,B])=>{let b=this.disp.get(w);if(b||(b={x:D,z:S},this.disp.set(w,b)),w===s&&o){const U=an(of(w));b.x=N0(b.x+this.ctrl.mx*6.5*e,-4.5,4.5),b.z=U*N0(U*(b.z+this.ctrl.mz*6.5*e),.9,9);const H=1-Math.exp(-4*e);b.x+=(D-b.x)*H,b.z+=(S-b.z)*H,Math.hypot(D-b.x,S-b.z)>1.8&&(b.x=D,b.z=S)}else Math.hypot(D-b.x,S-b.z)>3?(b.x=D,b.z=S):(b.x+=(D-b.x)*r,b.z+=(S-b.z)*r);return{slot:w,x:b.x,z:b.z,mv:A,swId:k,swK:L,swYaw:B}}),[l,c,u,h,d,p,v,x,m,f]=i.b,_=Math.min(this.sinceSnap,.12),g=l+h*_,y=Math.max(Ur,c+d*_-.5*Ir*_*_),P=u+p*_;let E=this.ballDisp;if(!E||v||Math.hypot(g-E.x,P-E.z)>4)E={x:g,y,z:P};else{const w=1-Math.exp(-30*e);E={x:E.x+(g-E.x)*w,y:E.y+(y-E.y)*w,z:E.z+(P-E.z)*w}}return this.ballDisp=E,{...t,st:i.st,m:i.m,srv:i.srv,winner:i.w,ents:a,sx:i.sx,sn:i.sn,clock:(i.ck||0)+(i.st==="end"?0:this.sinceSnap),ball:{x:E.x,y:E.y,z:E.z,vx:h,vy:d,vz:p,hold:!!v,spin:x||0,bn:m||0,sf:f||0}}}}const lC="modulepreload",cC=function(n){return"/padel-v1/"+n},I0={},uC=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=cC(l),l in I0)return;I0[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":lC,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((d,p)=>{h.addEventListener("load",d),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},hC={},q_=()=>Math.random().toString(36).slice(2,10),zn=()=>{};function fC(){return{async start(){return"solo-"+q_()},send:zn,onMessage:zn,onJoin:zn,onLeave:zn,leave:zn}}function dC(n){const e=q_(),t={msg:zn,join:zn,leave:zn},i=new Set;let r=null;return{async start(){return r=new BroadcastChannel("padel-club-"+n),r.onmessage=s=>{const o=s.data;!o||o.from===e||o.to&&o.to!==e||(o.k==="hi"?(i.has(o.from)||(i.add(o.from),t.join(o.from)),o.to||r.postMessage({k:"hi",from:e,to:o.from})):o.k==="bye"?i.delete(o.from)&&t.leave(o.from):o.k==="m"&&t.msg(o.type,o.data,o.from))},r.postMessage({k:"hi",from:e}),addEventListener("pagehide",()=>r&&r.postMessage({k:"bye",from:e})),e},send(s,o,a){r.postMessage({k:"m",from:e,to:a,type:s,data:o})},onMessage(s){t.msg=s},onJoin(s){t.join=s},onLeave(s){t.leave=s},leave(){r&&(r.postMessage({k:"bye",from:e}),r.close(),r=null)}}}function pC(n,e="padel-club-comunidad-v1"){const t={msg:zn,join:zn,leave:zn};let i=null,r=null;return{async start(){const{joinRoom:s}=await uC(async()=>{const{joinRoom:c}=await import("./dist-DVIO7BUi.js");return{joinRoom:c}},[]),o=import.meta&&hC||{},a=o.VITE_TURN_URL?[{urls:o.VITE_TURN_URL.split(","),username:o.VITE_TURN_USER,credential:o.VITE_TURN_PASS}]:void 0;return i=s({appId:e,...a?{turnConfig:a}:{}},"padel-"+n),r=i.makeAction("m"),r.onMessage((c,u)=>{c&&typeof c.t=="string"&&t.msg(c.t,c.d,u.peerId)}),i.onPeerJoin(({peerId:c})=>t.join(c)),i.onPeerLeave(({peerId:c})=>t.leave(c)),(await i.getSelf()).peerId},send(s,o,a){r&&r.send({t:s,d:o},a?{target:a}:void 0).catch(zn)},onMessage(s){t.msg=s},onJoin(s){t.join=s},onLeave(s){t.leave=s},leave(){i&&(i.leave(),i=null,r=null)}}}function mC(n,e){return n==="solo"?fC():n==="broadcast"?dC(e):pC(e)}const gC={shirt:["#0C447C","#D85A30","#1D9E75","#2C2C2A","#EF9F27","#534AB7"],hair:["#2C2C2A","#6B4423","#D9A441","#A32D2D"],skin:["#F5D0B0","#E0AC82","#B9774F","#7A4A2E"],paddle:["#2A93A8","#1C1C1E","#2F6F8F","#C8232C","#E58BB5"]},vC=[["corto","Corto"],["largo","Largo"],["rodete","Rodete"]],_C=[["none","Ninguno"],["vincha","Vincha"],["gorra","Gorra"],["lentes","Lentes"]],xC=[["Camiseta","shirt"],["Pelo","hair"],["Piel","skin"],["Paleta","paddle"]];function yC({label:n,k:e,look:t,setLook:i}){return ee.jsxs("div",{className:"row",children:[ee.jsx("span",{className:"lbl",children:n}),ee.jsx("div",{className:"chips",children:gC[e].map(r=>ee.jsx("button",{"aria-label":`${n} ${r}`,"aria-pressed":t[e]===r,className:`sw ${t[e]===r?"on":""}`,style:{background:r},onClick:()=>i({...t,[e]:r})},r))})]})}function Qu({label:n,list:e,value:t,onPick:i}){return ee.jsxs("div",{className:"row",children:[ee.jsx("span",{className:"lbl",children:n}),ee.jsx("div",{className:"chips",children:e.map(([r,s])=>ee.jsx("button",{className:`chip ${t===r?"on":""}`,"aria-pressed":t===r,onClick:()=>i(r),children:s},r))})]})}function SC({profile:n,setProfile:e,hq:t,setHq:i,joinCode:r,setJoinCode:s,onCreate:o,onJoin:a,onSolo:l,error:c,muted:u,onMute:h}){const d=p=>e({...n,look:p});return ee.jsxs("div",{className:"sheet menu",children:[ee.jsxs("div",{className:"titlebar",children:[ee.jsx("h1",{children:"Padel Club"}),ee.jsx("button",{className:"icon","aria-label":u?"Activar sonido":"Silenciar",onClick:h,children:u?"🔇":"🔊"})]}),ee.jsxs("label",{className:"field",children:[ee.jsx("span",{className:"lbl",children:"Tu nombre"}),ee.jsx("input",{value:n.name,maxLength:14,placeholder:"Nico",onChange:p=>e({...n,name:p.target.value})})]}),ee.jsxs("details",{className:"look",children:[ee.jsx("summary",{children:"Personalizar jugador"}),xC.map(([p,v])=>ee.jsx(yC,{label:p,k:v,look:n.look,setLook:d},v)),ee.jsx(Qu,{label:"Peinado",list:vC,value:n.look.style,onPick:p=>d({...n.look,style:p})}),ee.jsx(Qu,{label:"Accesorio",list:_C,value:n.look.acc,onPick:p=>d({...n.look,acc:p})}),ee.jsx(Qu,{label:"Calidad",list:[["hi","Alta"],["lo","Media"]],value:t?"hi":"lo",onPick:p=>i(p==="hi")})]}),c&&ee.jsx("p",{className:"err",role:"alert",children:c}),ee.jsx("button",{className:"btn primary",onClick:o,children:"Crear sala"}),ee.jsxs("div",{className:"join",children:[ee.jsx("input",{value:r,maxLength:6,placeholder:"Código","aria-label":"Código de sala",autoCapitalize:"characters",onChange:p=>s(p.target.value.toUpperCase()),onKeyDown:p=>{p.key==="Enter"&&a()}}),ee.jsx("button",{className:"btn",onClick:a,children:"Unirme"})]}),ee.jsx("button",{className:"btn ghost",onClick:l,children:"Practicar contra bots"})]})}function MC({code:n,onCancel:e}){return ee.jsxs("div",{className:"sheet center",children:[ee.jsx("div",{className:"spin","aria-hidden":"true"}),ee.jsxs("p",{children:["Buscando la sala ",ee.jsx("b",{children:n}),"…"]}),ee.jsx("p",{className:"muted",children:"El anfitrión tiene que tener la sala abierta."}),ee.jsx("button",{className:"btn",onClick:e,children:"Cancelar"})]})}function EC({slot:n,room:e,selfId:t}){const i=e.slots[n],r=i&&i!=="bot"?ai(e,i):null;return ee.jsxs("div",{className:`slot ${r?"human":"bot"}`,children:[ee.jsx("span",{className:"dot",style:{background:r?r.look.shirt:"#888780"}}),ee.jsxs("span",{className:"nm",children:[r?r.name:"Bot",r&&r.id===t?" (vos)":""]}),ee.jsx("span",{className:"tag",children:r?"Jugador":"Bot"})]})}function wC({session:n,link:e,onCopy:t,onStart:i,onLeave:r,solo:s}){const o=n.room,a=n.isHost,l=n.me,c=n.mySlot,u=o.mode==="2v2"?[[0,1],[2,3]]:[[0],[2]],h=Y2(o);return ee.jsxs("div",{className:"sheet lobby",children:[ee.jsxs("div",{className:"titlebar",children:[ee.jsxs("div",{children:[ee.jsx("h2",{children:s?"Práctica":`Sala ${n.code||""}`}),ee.jsxs("span",{className:"muted",children:[o.users.length," ",o.users.length===1?"persona":"personas",s?"":a?" · sos el anfitrión":""]})]}),!s&&ee.jsx("button",{className:"btn small",onClick:t,children:"Copiar link"})]}),!s&&ee.jsx("p",{className:"link","aria-label":"Link de la sala",children:e}),ee.jsxs("div",{className:"opts",children:[ee.jsx("div",{className:"chips",children:[["2v2","2 vs 2"],["1v1","1 vs 1"]].map(([d,p])=>ee.jsx("button",{className:`chip ${o.mode===d?"on":""}`,disabled:!a,onClick:()=>n.setMode(d),children:p},d))}),ee.jsx("div",{className:"chips",children:Object.entries(fa).map(([d,p])=>ee.jsx("button",{className:`chip ${o.fmt===d?"on":""}`,disabled:!a,onClick:()=>n.setFmt(d),children:p.label},d))})]}),ee.jsx("div",{className:"teams",children:u.map((d,p)=>ee.jsxs("div",{className:"team",children:[ee.jsxs("span",{className:"lbl",children:["Equipo ",p?"B":"A"]}),d.map(v=>ee.jsx(EC,{slot:v,room:o,selfId:n.selfId},v))]},p))}),ee.jsxs("p",{className:"muted spec",children:["Espectadores: ",h.length?h.map(d=>d.name+(d.id===n.selfId?" (vos)":"")).join(", "):"ninguno","."," ","Si un jugador se va, entra el primero en espera; si no hay nadie, entra un bot."]}),ee.jsxs("div",{className:"actions",children:[l&&ee.jsx("button",{className:"btn",onClick:()=>n.setWatch(c>=0),children:c>=0?"Mirar":"Jugar"}),a?ee.jsx("button",{className:"btn primary grow",onClick:i,children:"Empezar partido"}):ee.jsx("button",{className:"btn grow",disabled:!0,children:"Esperando al anfitrión…"}),ee.jsx("button",{className:"btn ghost",onClick:r,children:"Salir"})]})]})}const $_=(n,e)=>{const t=n.filter(i=>i.slot<2==(e==="a")).map(i=>i.name.split(" ")[0]);return t.length?t.join(" / "):e==="a"?"Equipo A":"Equipo B"};function Y_({m:n,roster:e,fmt:t,srv:i,theme:r}){if(!n)return null;const s=fa[t]||fa.exp,o=i>=0?i<2?"a":"b":n.srv;return ee.jsxs("table",{className:`score ${r||""}`,children:[ee.jsx("thead",{children:ee.jsxs("tr",{children:[ee.jsx("th",{}),Array.from({length:s.cols},(a,l)=>ee.jsxs("th",{children:["S",l+1]},l)),ee.jsx("th",{children:n.tb?"TB":"Pts"})]})}),ee.jsx("tbody",{children:["b","a"].map(a=>{const l=a==="a"?"b":"a";return ee.jsxs("tr",{children:[ee.jsxs("td",{className:"tn",children:[ee.jsx("i",{className:o===a?"srv":"nosrv"}),$_(e,a)]}),Array.from({length:s.cols},(c,u)=>{let h="-",d=!1;return u<n.sets.length?(h=n.sets[u][a],d=n.sets[u][a]>n.sets[u][l]):u===n.sets.length&&(h=n.g[a],d=!0),ee.jsx("td",{className:d?"b":"",children:h},u)}),ee.jsx("td",{className:"b",children:lf(n,a)})]},a)})})]})}function TC({session:n,hud:e,onRematch:t,onLobby:i,onLeave:r}){const s=n.isHost,o=n.mySlot>=0?n.mySlot<2?"a":"b":null,a=o?e.winner===o:null,l=a==null?`Ganó ${$_(n.roster,e.winner)}`:a?"Ganaste el partido":"Perdiste el partido";return ee.jsx("div",{className:"end",children:ee.jsxs("div",{className:"sheet center",children:[ee.jsx("h2",{children:l}),ee.jsx(Y_,{m:e.m,roster:n.roster,fmt:n.room.fmt,srv:-1}),o&&ee.jsxs("p",{className:"pts",children:["Puntos del club ",ee.jsx("b",{children:a?"+25":"+10"})]}),s?ee.jsxs(ee.Fragment,{children:[ee.jsx("button",{className:"btn primary",onClick:t,children:"Revancha"}),ee.jsx("button",{className:"btn",onClick:i,children:"Volver a la sala"})]}):ee.jsx("p",{className:"muted",children:"Esperando que el anfitrión elija…"}),ee.jsx("button",{className:"btn ghost",onClick:r,children:"Salir"})]})})}function AC({ctrl:n}){const e=We.useRef(null),t=We.useRef(null),i=We.useRef(!1),r=o=>{const a=e.current.getBoundingClientRect();let l=(o.clientX-a.left-a.width/2)/(a.width/2),c=(o.clientY-a.top-a.height/2)/(a.height/2);const u=Math.hypot(l,c);u>1&&(l/=u,c/=u),n.current={x:l,y:c,active:!0},t.current.style.transform=`translate(${l*32}px, ${c*32}px)`},s=()=>{i.current=!1,n.current={x:0,y:0,active:!1},t.current.style.transform="translate(0,0)"};return ee.jsx("div",{ref:e,className:"joy","aria-label":"Joystick",onPointerDown:o=>{o.currentTarget.setPointerCapture(o.pointerId),i.current=!0,r(o)},onPointerMove:o=>{i.current&&r(o)},onPointerUp:s,onPointerCancel:s,children:ee.jsx("div",{ref:t,className:"knob"})})}const CC=[{k:"drive",l:"Drive"},{k:"globo",l:"Globo"},{k:"dejada",l:"Dejada"},{k:"remate",l:"Remate",c:"danger"},{k:"x3",l:"x3",c:"gold"},{k:"x4",l:"x4",c:"gold"}];function bC({onPress:n,onRelease:e,back:t,chg:i}){const r=We.useRef(null),s=We.useRef(null);return We.useEffect(()=>{let o=0;const a=()=>{o=requestAnimationFrame(a);const l=i.current,c=l.k?Math.min(1,Math.max(0,((performance.now()-l.t0)/1e3-.14)/.8)):0;r.current&&(r.current.style.transform=`scaleX(${c})`,r.current.style.opacity=l.k&&c>.02?1:0,r.current.dataset.full=c>=.98?"1":""),s.current&&(s.current.dataset.on=l.k||"")};return o=requestAnimationFrame(a),()=>cancelAnimationFrame(o)},[i]),ee.jsxs("div",{className:"shots",ref:s,children:[ee.jsx("div",{className:"charge",children:ee.jsx("i",{ref:r})}),CC.map(o=>ee.jsx("button",{className:`shot ${o.c||""}`,"data-k":o.k,onPointerDown:a=>{a.preventDefault(),a.currentTarget.setPointerCapture(a.pointerId),n(o.k)},onPointerUp:()=>e(o.k),onPointerCancel:()=>e(o.k),onContextMenu:a=>a.preventDefault(),children:o.k==="drive"&&t?"Revés":o.l},o.k))]})}const RC=(n,e,t)=>Math.max(e,Math.min(t,n)),PC=new URLSearchParams(location.search).get("net")==="local"?"broadcast":"trystero";function LC(){try{const n=JSON.parse(localStorage.getItem("padel.profile"));if(n)return{name:String(n.name||""),look:Nl(n.look),num:Number.isFinite(+n.num)?+n.num:7}}catch{}return{name:"",look:{...Po},num:1+Math.floor(Math.random()*98)}}const DC=()=>{const n=location.hash.match(/#\/sala\/([A-Za-z0-9]{3,6})/);return n?n[1].toUpperCase():""},NC=n=>{const e=Math.max(0,n|0),t=e/3600|0,i=e%3600/60|0,r=e%60;return`${t?t+":"+String(i).padStart(2,"0"):i}:${String(r).padStart(2,"0")}`};function IC(){const n=We.useRef(null),e=We.useRef(null),t=We.useRef(null),i=We.useRef({x:0,y:0,active:!1}),r=We.useRef({}),s=We.useRef(null),o=We.useRef(null),a=We.useRef(""),[,l]=We.useReducer(R=>R+1,0),[c,u]=We.useState(LC),[h,d]=We.useState(!0),[p,v]=We.useState(DC()),[x,m]=We.useState(""),[f,_]=We.useState(""),[g,y]=We.useState(O2()),[P,E]=We.useState([]),[w,D]=We.useState(null),[S,A]=We.useState(null),[k,L]=We.useState(!1),[B,b]=We.useState(!1),[U,H]=We.useState(!1),q=We.useRef({k:null,t0:0});o.current=c;const N=We.useCallback(R=>{const se=Math.random();E(Y=>[...Y.slice(-2),{id:se,tx:R}]),setTimeout(()=>E(Y=>Y.filter(re=>re.id!==se)),3200)},[]),O=We.useCallback((R,se,Y)=>{const re=Math.random();D({id:re,tx:R,gold:Y}),setTimeout(()=>D(K=>K&&K.id===re?null:K),se||900)},[]),V=We.useCallback(R=>{if(R==="dejada"){t.current&&t.current.shot(R,0);return}q.current.k||(q.current={k:R,t0:performance.now()})},[]),Q=We.useCallback(R=>{const se=q.current;if(se.k!==R)return;q.current={k:null,t0:0};const Y=(performance.now()-se.t0)/1e3;t.current&&t.current.shot(R,Y<.14?0:Math.min(1,(Y-.14)/.8))},[]),ae=R=>{d(R),e.current&&e.current.setQuality(R)};We.useEffect(()=>{try{localStorage.setItem("padel.profile",JSON.stringify(c))}catch{}},[c]),We.useEffect(()=>{e.current&&e.current.setPreviewLook(c.look,Gs(c.name).split(" ")[0],c.num)},[c]),We.useEffect(()=>{const R=new G2(n.current,{autoQuality:new URLSearchParams(location.search).get("q")!=="hi",onQuality:()=>{d(!1),N("Calidad ajustada para mantener la fluidez")},onReplay:ue=>{H(ue),ue&&D(null)}});if(new URLSearchParams(location.search).has("debug")&&(window.__stage=R),!R.ok){L(!0);return}e.current=R,R.setPreviewLook(o.current.look,Gs(o.current.name).split(" ")[0],o.current.num);let se=0,Y=performance.now();const re=ue=>{se=requestAnimationFrame(re);const T=Math.min((ue-Y)/1e3,.25);Y=ue;const M=t.current;let z=null;if(M&&(M.role==="host"||M.role==="client")){const Z=M.ys,W=i.current,he=r.current;let oe=W.x,ve=W.y;W.active||(oe=(he.d||he.arrowright?1:0)-(he.a||he.arrowleft?1:0),ve=(he.s||he.arrowdown?1:0)-(he.w||he.arrowup?1:0));const Te=Math.abs(oe)>.25?RC(oe*4*Z,-4,4):null;s.current=Te,M.setControl({mx:oe*Z,mz:ve*Z,ax:Te}),M.tick(T),z=M.frame(T);for(const ye of z.events)if(ye.t==="msg"&&(ye.slot==null||ye.slot===z.mySlot))O(ye.tx,ye.ms,ye.gold);else if(ye.t==="point"){const be=z.mySlot>=0?z.mySlot<2?"a":"b":null,Ee=be?ye.who===be:null,Oe=ye.pts,Ze=be==="b"?`${Oe[1]} - ${Oe[0]}`:`${Oe[0]} - ${Oe[1]}`,it=Ee==null?ye.who==="a"?"Equipo A":"Equipo B":Ee?"para vos":"rival";let Be=ye.label;Be||(Be=ye.ev==="punto"?`${Ee==null?"Punto "+it:Ee?"Punto para vos":"Punto rival"} · ${Ze}`:ye.ev==="game"?`Game ${it}`:ye.ev==="set"?`Set ${it}`:"Partido"),O(Be,ye.ev==="punto"&&!ye.label?1200:2e3,ye.ev!=="punto"||!!ye.label)}const Ce=z.ents.find(ye=>ye.slot===z.mySlot),ne=!!(Ce&&z.ball&&(z.ball.x-Ce.x)*Z<0),Ge=Math.floor(z.clock||0),Ue=`${z.phase}|${z.st}|${z.srv}|${JSON.stringify(z.m)}|${ne}|${z.mySlot}|${z.sn}|${Ge}`;Ue!==a.current&&(a.current=Ue,A({st:z.st,m:z.m,srv:z.srv,winner:z.winner,back:ne,phase:z.phase,mySlot:z.mySlot,sn:z.sn,ck:Ge}))}else a.current&&(a.current="",A(null));const ie=q.current;R.render(z,T,{aim:s.current,charge:ie.k?Math.min(1,Math.max(0,((performance.now()-ie.t0)/1e3-.14)/.8)):0})};se=requestAnimationFrame(re);const K=ue=>{const T=ue.key.toLowerCase();r.current[T]=!0;const M={1:"drive",2:"globo",3:"dejada",4:"remate",5:"x3",6:"x4"};M[T]&&!ue.repeat&&V(M[T]),(ue.key.startsWith("Arrow")||T===" ")&&ue.preventDefault()},Me=ue=>{const T=ue.key.toLowerCase();r.current[T]=!1;const M={1:"drive",2:"globo",3:"dejada",4:"remate",5:"x3",6:"x4"};M[T]&&Q(M[T])};return window.addEventListener("keydown",K),window.addEventListener("keyup",Me),()=>{cancelAnimationFrame(se),window.removeEventListener("keydown",K),window.removeEventListener("keyup",Me),t.current&&t.current.leave(),R.dispose(),e.current=null}},[N,O,V,Q]);const $=!!(S&&S.phase==="match");We.useEffect(()=>($?k2():(C0(),H(!1)),()=>C0()),[$]);const te=We.useCallback(()=>{t.current&&t.current.leave(),t.current=null,m(""),b(!1),A(null),D(null),location.hash&&history.replaceState(null,"",location.pathname+location.search),l()},[]),de=We.useCallback(async(R,se)=>{To(),_("");const Y=R==="join"?eC(se):tC();if(R==="join"&&Y.length<3){_("Escribí el código de la sala");return}t.current&&t.current.leave();const re=o.current,K=new aC(mC(R==="solo"?"solo":PC,Y),{profile:{name:Gs(re.name),look:re.look,num:re.num},create:R!=="join",code:Y});K.on("change",l),K.on("notice",N),K.on("error",Me=>{m(""),_(Me==="nohost"?`No encontramos la sala ${Y}. Revisá el código y que el anfitrión la tenga abierta.`:Me==="hostlost"?"Se perdió la conexión con la sala.":"La sala se cerró."),t.current=null,l()}),t.current=K,b(R==="solo"),R==="join"&&m(Y);try{await K.start(),R==="create"&&history.replaceState(null,"",`${location.pathname}${location.search}#/sala/${Y}`),R==="solo"&&K.startMatch(),(K.role==="host"||K.role==="client")&&m("")}catch{m(""),t.current=null,_("No se pudo conectar. Revisá tu conexión e intentá de nuevo."),l()}},[N]);We.useEffect(()=>{x&&t.current&&t.current.role==="client"&&m("")});const fe=t.current,ge=fe&&(fe.role==="host"||fe.role==="client"),Pe=fe?`${location.origin}${location.pathname}${location.search}#/sala/${fe.code}`:"",Ie=async()=>{try{navigator.share&&/Mobi/i.test(navigator.userAgent)?await navigator.share({title:"Padel Club",text:"Sumate a mi partido",url:Pe}):(await navigator.clipboard.writeText(Pe),N("Link copiado"))}catch{N("No se pudo copiar: copialo a mano")}},Ae=ge&&fe.phase==="match"&&S&&S.phase==="match",Le=Ae&&fe.mySlot>=0&&S.st!=="end";return ee.jsxs("div",{className:"app",children:[ee.jsx("div",{className:"stage",ref:n}),k&&ee.jsxs("div",{className:"sheet center",children:[ee.jsx("h2",{children:"Tu navegador no soporta 3D"}),ee.jsx("p",{className:"muted",children:"Probá con Chrome, Safari o Firefox actualizados."})]}),ee.jsx("div",{className:"toasts","aria-live":"polite",children:P.map(R=>ee.jsx("div",{className:"toast",children:R.tx},R.id))}),!k&&!ge&&!x&&ee.jsx(SC,{profile:c,setProfile:u,hq:h,setHq:ae,joinCode:p,setJoinCode:v,onCreate:()=>de("create"),onJoin:()=>de("join",p),onSolo:()=>de("solo"),error:f,muted:g,onMute:()=>{const R=!g;A0(R),y(R),To()}}),!k&&x&&ee.jsx(MC,{code:x,onCancel:te}),!k&&ge&&fe.phase==="lobby"&&ee.jsx(wC,{session:fe,link:Pe,solo:B,onCopy:Ie,onLeave:te,onStart:()=>{To(),fe.startMatch()}}),Ae&&ee.jsxs(ee.Fragment,{children:[ee.jsxs("div",{className:"hud",children:[ee.jsx(Y_,{m:S.m,roster:fe.roster,fmt:fe.room.fmt,srv:S.srv,theme:"hud"}),ee.jsxs("div",{className:"chips",children:[ee.jsxs("span",{className:"chip clock",children:["⏱ ",NC(S.ck)]}),S.st==="serve"&&ee.jsx("span",{className:"chip",children:S.sn===2?"2º saque":"1er saque"})]}),ee.jsx("button",{className:"icon float","aria-label":g?"Activar sonido":"Silenciar",onClick:()=>{const R=!g;A0(R),y(R),To()},children:g?"🔇":"🔊"}),ee.jsx("button",{className:"icon float exit","aria-label":"Salir de la sala",onClick:te,children:"✕"})]}),U&&ee.jsxs("div",{className:"replay-tag",children:[ee.jsx("span",{children:"● REPETICIÓN"}),ee.jsx("button",{onClick:()=>e.current&&e.current.skipReplay(),children:"Saltar"})]}),w&&!U&&ee.jsx("div",{className:`banner ${w.gold?"gold":""}`,children:w.tx},w.id),fe.mySlot<0&&ee.jsx("div",{className:"spectator",children:"Mirás como espectador · entrás cuando se libere un lugar"}),Le&&!U&&ee.jsxs("div",{className:"controls",children:[ee.jsx(AC,{ctrl:i}),ee.jsx(bC,{back:S.back,chg:q,onPress:R=>{To(),V(R)},onRelease:Q})]}),S.st==="end"&&ee.jsx(TC,{session:fe,hud:S,onRematch:()=>fe.startMatch(),onLobby:()=>fe.backToLobby(),onLeave:te})]})]})}qv(document.getElementById("root")).render(ee.jsx(IC,{}));
