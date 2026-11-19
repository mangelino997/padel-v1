(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var k0={exports:{}},yc={},B0={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xa=Symbol.for("react.element"),sx=Symbol.for("react.portal"),ox=Symbol.for("react.fragment"),ax=Symbol.for("react.strict_mode"),lx=Symbol.for("react.profiler"),cx=Symbol.for("react.provider"),ux=Symbol.for("react.context"),hx=Symbol.for("react.forward_ref"),fx=Symbol.for("react.suspense"),dx=Symbol.for("react.memo"),px=Symbol.for("react.lazy"),Id=Symbol.iterator;function mx(n){return n===null||typeof n!="object"?null:(n=Id&&n[Id]||n["@@iterator"],typeof n=="function"?n:null)}var H0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G0=Object.assign,V0={};function io(n,e,t){this.props=n,this.context=e,this.refs=V0,this.updater=t||H0}io.prototype.isReactComponent={};io.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};io.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function W0(){}W0.prototype=io.prototype;function gf(n,e,t){this.props=n,this.context=e,this.refs=V0,this.updater=t||H0}var vf=gf.prototype=new W0;vf.constructor=gf;G0(vf,io.prototype);vf.isPureReactComponent=!0;var Ud=Array.isArray,X0=Object.prototype.hasOwnProperty,_f={current:null},j0={key:!0,ref:!0,__self:!0,__source:!0};function q0(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)X0.call(e,i)&&!j0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:xa,type:n,key:s,ref:o,props:r,_owner:_f.current}}function gx(n,e){return{$$typeof:xa,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function xf(n){return typeof n=="object"&&n!==null&&n.$$typeof===xa}function vx(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Fd=/\/+/g;function jc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?vx(""+n.key):e.toString(36)}function Tl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case xa:case sx:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+jc(o,0):i,Ud(r)?(t="",n!=null&&(t=n.replace(Fd,"$&/")+"/"),Tl(r,e,t,"",function(c){return c})):r!=null&&(xf(r)&&(r=gx(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Fd,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ud(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+jc(s,a);o+=Tl(s,e,t,l,r)}else if(l=mx(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+jc(s,a++),o+=Tl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ba(n,e,t){if(n==null)return n;var i=[],r=0;return Tl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function _x(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var an={current:null},Al={transition:null},xx={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:Al,ReactCurrentOwner:_f};function $0(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:ba,forEach:function(n,e,t){ba(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return ba(n,function(){e++}),e},toArray:function(n){return ba(n,function(e){return e})||[]},only:function(n){if(!xf(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ke.Component=io;Ke.Fragment=ox;Ke.Profiler=lx;Ke.PureComponent=gf;Ke.StrictMode=ax;Ke.Suspense=fx;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xx;Ke.act=$0;Ke.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=G0({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=_f.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)X0.call(e,l)&&!j0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:xa,type:n.type,key:r,ref:s,props:i,_owner:o}};Ke.createContext=function(n){return n={$$typeof:ux,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:cx,_context:n},n.Consumer=n};Ke.createElement=q0;Ke.createFactory=function(n){var e=q0.bind(null,n);return e.type=n,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(n){return{$$typeof:hx,render:n}};Ke.isValidElement=xf;Ke.lazy=function(n){return{$$typeof:px,_payload:{_status:-1,_result:n},_init:_x}};Ke.memo=function(n,e){return{$$typeof:dx,type:n,compare:e===void 0?null:e}};Ke.startTransition=function(n){var e=Al.transition;Al.transition={};try{n()}finally{Al.transition=e}};Ke.unstable_act=$0;Ke.useCallback=function(n,e){return an.current.useCallback(n,e)};Ke.useContext=function(n){return an.current.useContext(n)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(n){return an.current.useDeferredValue(n)};Ke.useEffect=function(n,e){return an.current.useEffect(n,e)};Ke.useId=function(){return an.current.useId()};Ke.useImperativeHandle=function(n,e,t){return an.current.useImperativeHandle(n,e,t)};Ke.useInsertionEffect=function(n,e){return an.current.useInsertionEffect(n,e)};Ke.useLayoutEffect=function(n,e){return an.current.useLayoutEffect(n,e)};Ke.useMemo=function(n,e){return an.current.useMemo(n,e)};Ke.useReducer=function(n,e,t){return an.current.useReducer(n,e,t)};Ke.useRef=function(n){return an.current.useRef(n)};Ke.useState=function(n){return an.current.useState(n)};Ke.useSyncExternalStore=function(n,e,t){return an.current.useSyncExternalStore(n,e,t)};Ke.useTransition=function(){return an.current.useTransition()};Ke.version="18.3.1";B0.exports=Ke;var Ge=B0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yx=Ge,Sx=Symbol.for("react.element"),Mx=Symbol.for("react.fragment"),Ex=Object.prototype.hasOwnProperty,wx=yx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tx={key:!0,ref:!0,__self:!0,__source:!0};function Y0(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Ex.call(e,i)&&!Tx.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Sx,type:n,key:s,ref:o,props:r,_owner:wx.current}}yc.Fragment=Mx;yc.jsx=Y0;yc.jsxs=Y0;k0.exports=yc;var ne=k0.exports,K0={exports:{}},Cn={},J0={exports:{}},Q0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(I,O){var H=I.length;I.push(O);e:for(;0<H;){var Y=H-1>>>1,oe=I[Y];if(0<r(oe,O))I[Y]=O,I[H]=oe,H=Y;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var O=I[0],H=I.pop();if(H!==O){I[0]=H;e:for(var Y=0,oe=I.length,X=oe>>>1;Y<X;){var ie=2*(Y+1)-1,j=I[ie],ae=ie+1,ce=I[ae];if(0>r(j,H))ae<oe&&0>r(ce,j)?(I[Y]=ce,I[ae]=H,Y=ae):(I[Y]=j,I[ie]=H,Y=ie);else if(ae<oe&&0>r(ce,H))I[Y]=ce,I[ae]=H,Y=ae;else break e}}return O}function r(I,O){var H=I.sortIndex-O.sortIndex;return H!==0?H:I.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,d=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var O=t(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=I)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=t(c)}}function y(I){if(x=!1,g(I),!v)if(t(l)!==null)v=!0,B(R);else{var O=t(c);O!==null&&J(y,O.startTime-I)}}function R(I,O){v=!1,x&&(x=!1,f(D),D=-1),p=!0;var H=d;try{for(g(O),h=t(l);h!==null&&(!(h.expirationTime>O)||I&&!k());){var Y=h.callback;if(typeof Y=="function"){h.callback=null,d=h.priorityLevel;var oe=Y(h.expirationTime<=O);O=n.unstable_now(),typeof oe=="function"?h.callback=oe:h===t(l)&&i(l),g(O)}else i(l);h=t(l)}if(h!==null)var X=!0;else{var ie=t(c);ie!==null&&J(y,ie.startTime-O),X=!1}return X}finally{h=null,d=H,p=!1}}var E=!1,A=null,D=-1,S=5,T=-1;function k(){return!(n.unstable_now()-T<S)}function P(){if(A!==null){var I=n.unstable_now();T=I;var O=!0;try{O=A(!0,I)}finally{O?W():(E=!1,A=null)}}else E=!1}var W;if(typeof _=="function")W=function(){_(P)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,N=b.port2;b.port1.onmessage=P,W=function(){N.postMessage(null)}}else W=function(){m(P,0)};function B(I){A=I,E||(E=!0,W())}function J(I,O){D=m(function(){I(n.unstable_now())},O)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){v||p||(v=!0,B(R))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(I){switch(d){case 1:case 2:case 3:var O=3;break;default:O=d}var H=d;d=O;try{return I()}finally{d=H}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,O){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var H=d;d=I;try{return O()}finally{d=H}},n.unstable_scheduleCallback=function(I,O,H){var Y=n.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?Y+H:Y):H=Y,I){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=H+oe,I={id:u++,callback:O,priorityLevel:I,startTime:H,expirationTime:oe,sortIndex:-1},H>Y?(I.sortIndex=H,e(c,I),t(l)===null&&I===t(c)&&(x?(f(D),D=-1):x=!0,J(y,H-Y))):(I.sortIndex=oe,e(l,I),v||p||(v=!0,B(R))),I},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(I){var O=d;return function(){var H=d;d=O;try{return I.apply(this,arguments)}finally{d=H}}}})(Q0);J0.exports=Q0;var Ax=J0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cx=Ge,An=Ax;function he(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Z0=new Set,Yo={};function $r(n,e){Xs(n,e),Xs(n+"Capture",e)}function Xs(n,e){for(Yo[n]=e,n=0;n<e.length;n++)Z0.add(e[n])}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sh=Object.prototype.hasOwnProperty,bx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Od={},zd={};function Rx(n){return sh.call(zd,n)?!0:sh.call(Od,n)?!1:bx.test(n)?zd[n]=!0:(Od[n]=!0,!1)}function Px(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Lx(n,e,t,i){if(e===null||typeof e>"u"||Px(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Wt[n]=new ln(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Wt[e]=new ln(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Wt[n]=new ln(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Wt[n]=new ln(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Wt[n]=new ln(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Wt[n]=new ln(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Wt[n]=new ln(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Wt[n]=new ln(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Wt[n]=new ln(n,5,!1,n.toLowerCase(),null,!1,!1)});var yf=/[\-:]([a-z])/g;function Sf(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(yf,Sf);Wt[e]=new ln(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(yf,Sf);Wt[e]=new ln(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(yf,Sf);Wt[e]=new ln(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Wt[n]=new ln(n,1,!1,n.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Wt[n]=new ln(n,1,!1,n.toLowerCase(),null,!0,!0)});function Mf(n,e,t,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Lx(e,t,r,i)&&(t=null),i||r===null?Rx(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Ui=Cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ra=Symbol.for("react.element"),vs=Symbol.for("react.portal"),_s=Symbol.for("react.fragment"),Ef=Symbol.for("react.strict_mode"),oh=Symbol.for("react.profiler"),eg=Symbol.for("react.provider"),tg=Symbol.for("react.context"),wf=Symbol.for("react.forward_ref"),ah=Symbol.for("react.suspense"),lh=Symbol.for("react.suspense_list"),Tf=Symbol.for("react.memo"),Gi=Symbol.for("react.lazy"),ng=Symbol.for("react.offscreen"),kd=Symbol.iterator;function ho(n){return n===null||typeof n!="object"?null:(n=kd&&n[kd]||n["@@iterator"],typeof n=="function"?n:null)}var _t=Object.assign,qc;function Ro(n){if(qc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);qc=e&&e[1]||""}return`
`+qc+n}var $c=!1;function Yc(n,e){if(!n||$c)return"";$c=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{$c=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ro(n):""}function Dx(n){switch(n.tag){case 5:return Ro(n.type);case 16:return Ro("Lazy");case 13:return Ro("Suspense");case 19:return Ro("SuspenseList");case 0:case 2:case 15:return n=Yc(n.type,!1),n;case 11:return n=Yc(n.type.render,!1),n;case 1:return n=Yc(n.type,!0),n;default:return""}}function ch(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case _s:return"Fragment";case vs:return"Portal";case oh:return"Profiler";case Ef:return"StrictMode";case ah:return"Suspense";case lh:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case tg:return(n.displayName||"Context")+".Consumer";case eg:return(n._context.displayName||"Context")+".Provider";case wf:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Tf:return e=n.displayName||null,e!==null?e:ch(n.type)||"Memo";case Gi:e=n._payload,n=n._init;try{return ch(n(e))}catch{}}return null}function Nx(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ch(e);case 8:return e===Ef?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ig(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ix(n){var e=ig(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Pa(n){n._valueTracker||(n._valueTracker=Ix(n))}function rg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=ig(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Hl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function uh(n,e){var t=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Bd(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=lr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sg(n,e){e=e.checked,e!=null&&Mf(n,"checked",e,!1)}function hh(n,e){sg(n,e);var t=lr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?fh(n,e.type,t):e.hasOwnProperty("defaultValue")&&fh(n,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Hd(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function fh(n,e,t){(e!=="number"||Hl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Po=Array.isArray;function Fs(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+lr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function dh(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(he(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Gd(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(he(92));if(Po(t)){if(1<t.length)throw Error(he(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:lr(t)}}function og(n,e){var t=lr(e.value),i=lr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Vd(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function ag(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ph(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?ag(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var La,lg=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(La=La||document.createElement("div"),La.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=La.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ko(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ux=["Webkit","ms","Moz","O"];Object.keys(Io).forEach(function(n){Ux.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Io[e]=Io[n]})});function cg(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Io.hasOwnProperty(n)&&Io[n]?(""+e).trim():e+"px"}function ug(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=cg(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Fx=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mh(n,e){if(e){if(Fx[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(he(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(he(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(he(61))}if(e.style!=null&&typeof e.style!="object")throw Error(he(62))}}function gh(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vh=null;function Af(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var _h=null,Os=null,zs=null;function Wd(n){if(n=Ma(n)){if(typeof _h!="function")throw Error(he(280));var e=n.stateNode;e&&(e=Tc(e),_h(n.stateNode,n.type,e))}}function hg(n){Os?zs?zs.push(n):zs=[n]:Os=n}function fg(){if(Os){var n=Os,e=zs;if(zs=Os=null,Wd(n),e)for(n=0;n<e.length;n++)Wd(e[n])}}function dg(n,e){return n(e)}function pg(){}var Kc=!1;function mg(n,e,t){if(Kc)return n(e,t);Kc=!0;try{return dg(n,e,t)}finally{Kc=!1,(Os!==null||zs!==null)&&(pg(),fg())}}function Jo(n,e){var t=n.stateNode;if(t===null)return null;var i=Tc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(he(231,e,typeof t));return t}var xh=!1;if(Pi)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){xh=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{xh=!1}function Ox(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Uo=!1,Gl=null,Vl=!1,yh=null,zx={onError:function(n){Uo=!0,Gl=n}};function kx(n,e,t,i,r,s,o,a,l){Uo=!1,Gl=null,Ox.apply(zx,arguments)}function Bx(n,e,t,i,r,s,o,a,l){if(kx.apply(this,arguments),Uo){if(Uo){var c=Gl;Uo=!1,Gl=null}else throw Error(he(198));Vl||(Vl=!0,yh=c)}}function Yr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function gg(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Xd(n){if(Yr(n)!==n)throw Error(he(188))}function Hx(n){var e=n.alternate;if(!e){if(e=Yr(n),e===null)throw Error(he(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Xd(r),n;if(s===i)return Xd(r),e;s=s.sibling}throw Error(he(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(he(189))}}if(t.alternate!==i)throw Error(he(190))}if(t.tag!==3)throw Error(he(188));return t.stateNode.current===t?n:e}function vg(n){return n=Hx(n),n!==null?_g(n):null}function _g(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=_g(n);if(e!==null)return e;n=n.sibling}return null}var xg=An.unstable_scheduleCallback,jd=An.unstable_cancelCallback,Gx=An.unstable_shouldYield,Vx=An.unstable_requestPaint,Mt=An.unstable_now,Wx=An.unstable_getCurrentPriorityLevel,Cf=An.unstable_ImmediatePriority,yg=An.unstable_UserBlockingPriority,Wl=An.unstable_NormalPriority,Xx=An.unstable_LowPriority,Sg=An.unstable_IdlePriority,Sc=null,hi=null;function jx(n){if(hi&&typeof hi.onCommitFiberRoot=="function")try{hi.onCommitFiberRoot(Sc,n,void 0,(n.current.flags&128)===128)}catch{}}var ni=Math.clz32?Math.clz32:Yx,qx=Math.log,$x=Math.LN2;function Yx(n){return n>>>=0,n===0?32:31-(qx(n)/$x|0)|0}var Da=64,Na=4194304;function Lo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Xl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Lo(a):(s&=o,s!==0&&(i=Lo(s)))}else o=t&~r,o!==0?i=Lo(o):s!==0&&(i=Lo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ni(e),r=1<<t,i|=n[t],e&=~r;return i}function Kx(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jx(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-ni(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=Kx(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Sh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Mg(){var n=Da;return Da<<=1,!(Da&4194240)&&(Da=64),n}function Jc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ya(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ni(e),n[e]=t}function Qx(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ni(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function bf(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ni(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var nt=0;function Eg(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var wg,Rf,Tg,Ag,Cg,Mh=!1,Ia=[],Ki=null,Ji=null,Qi=null,Qo=new Map,Zo=new Map,Wi=[],Zx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qd(n,e){switch(n){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":Qo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(e.pointerId)}}function po(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ma(e),e!==null&&Rf(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function ey(n,e,t,i,r){switch(e){case"focusin":return Ki=po(Ki,n,e,t,i,r),!0;case"dragenter":return Ji=po(Ji,n,e,t,i,r),!0;case"mouseover":return Qi=po(Qi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Qo.set(s,po(Qo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Zo.set(s,po(Zo.get(s)||null,n,e,t,i,r)),!0}return!1}function bg(n){var e=Lr(n.target);if(e!==null){var t=Yr(e);if(t!==null){if(e=t.tag,e===13){if(e=gg(t),e!==null){n.blockedOn=e,Cg(n.priority,function(){Tg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Cl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Eh(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);vh=i,t.target.dispatchEvent(i),vh=null}else return e=Ma(t),e!==null&&Rf(e),n.blockedOn=t,!1;e.shift()}return!0}function $d(n,e,t){Cl(n)&&t.delete(e)}function ty(){Mh=!1,Ki!==null&&Cl(Ki)&&(Ki=null),Ji!==null&&Cl(Ji)&&(Ji=null),Qi!==null&&Cl(Qi)&&(Qi=null),Qo.forEach($d),Zo.forEach($d)}function mo(n,e){n.blockedOn===e&&(n.blockedOn=null,Mh||(Mh=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,ty)))}function ea(n){function e(r){return mo(r,n)}if(0<Ia.length){mo(Ia[0],n);for(var t=1;t<Ia.length;t++){var i=Ia[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ki!==null&&mo(Ki,n),Ji!==null&&mo(Ji,n),Qi!==null&&mo(Qi,n),Qo.forEach(e),Zo.forEach(e),t=0;t<Wi.length;t++)i=Wi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Wi.length&&(t=Wi[0],t.blockedOn===null);)bg(t),t.blockedOn===null&&Wi.shift()}var ks=Ui.ReactCurrentBatchConfig,jl=!0;function ny(n,e,t,i){var r=nt,s=ks.transition;ks.transition=null;try{nt=1,Pf(n,e,t,i)}finally{nt=r,ks.transition=s}}function iy(n,e,t,i){var r=nt,s=ks.transition;ks.transition=null;try{nt=4,Pf(n,e,t,i)}finally{nt=r,ks.transition=s}}function Pf(n,e,t,i){if(jl){var r=Eh(n,e,t,i);if(r===null)au(n,e,i,ql,t),qd(n,i);else if(ey(r,n,e,t,i))i.stopPropagation();else if(qd(n,i),e&4&&-1<Zx.indexOf(n)){for(;r!==null;){var s=Ma(r);if(s!==null&&wg(s),s=Eh(n,e,t,i),s===null&&au(n,e,i,ql,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else au(n,e,i,null,t)}}var ql=null;function Eh(n,e,t,i){if(ql=null,n=Af(i),n=Lr(n),n!==null)if(e=Yr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=gg(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return ql=n,null}function Rg(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wx()){case Cf:return 1;case yg:return 4;case Wl:case Xx:return 16;case Sg:return 536870912;default:return 16}default:return 16}}var ji=null,Lf=null,bl=null;function Pg(){if(bl)return bl;var n,e=Lf,t=e.length,i,r="value"in ji?ji.value:ji.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return bl=r.slice(n,1<i?1-i:void 0)}function Rl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ua(){return!0}function Yd(){return!1}function bn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ua:Yd,this.isPropagationStopped=Yd,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ua)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ua)},persist:function(){},isPersistent:Ua}),e}var ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Df=bn(ro),Sa=_t({},ro,{view:0,detail:0}),ry=bn(Sa),Qc,Zc,go,Mc=_t({},Sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==go&&(go&&n.type==="mousemove"?(Qc=n.screenX-go.screenX,Zc=n.screenY-go.screenY):Zc=Qc=0,go=n),Qc)},movementY:function(n){return"movementY"in n?n.movementY:Zc}}),Kd=bn(Mc),sy=_t({},Mc,{dataTransfer:0}),oy=bn(sy),ay=_t({},Sa,{relatedTarget:0}),eu=bn(ay),ly=_t({},ro,{animationName:0,elapsedTime:0,pseudoElement:0}),cy=bn(ly),uy=_t({},ro,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),hy=bn(uy),fy=_t({},ro,{data:0}),Jd=bn(fy),dy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},py={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},my={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gy(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=my[n])?!!e[n]:!1}function Nf(){return gy}var vy=_t({},Sa,{key:function(n){if(n.key){var e=dy[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Rl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?py[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nf,charCode:function(n){return n.type==="keypress"?Rl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Rl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),_y=bn(vy),xy=_t({},Mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qd=bn(xy),yy=_t({},Sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nf}),Sy=bn(yy),My=_t({},ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ey=bn(My),wy=_t({},Mc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ty=bn(wy),Ay=[9,13,27,32],If=Pi&&"CompositionEvent"in window,Fo=null;Pi&&"documentMode"in document&&(Fo=document.documentMode);var Cy=Pi&&"TextEvent"in window&&!Fo,Lg=Pi&&(!If||Fo&&8<Fo&&11>=Fo),Zd=" ",ep=!1;function Dg(n,e){switch(n){case"keyup":return Ay.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ng(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var xs=!1;function by(n,e){switch(n){case"compositionend":return Ng(e);case"keypress":return e.which!==32?null:(ep=!0,Zd);case"textInput":return n=e.data,n===Zd&&ep?null:n;default:return null}}function Ry(n,e){if(xs)return n==="compositionend"||!If&&Dg(n,e)?(n=Pg(),bl=Lf=ji=null,xs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lg&&e.locale!=="ko"?null:e.data;default:return null}}var Py={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Py[n.type]:e==="textarea"}function Ig(n,e,t,i){hg(i),e=$l(e,"onChange"),0<e.length&&(t=new Df("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Oo=null,ta=null;function Ly(n){Xg(n,0)}function Ec(n){var e=Ms(n);if(rg(e))return n}function Dy(n,e){if(n==="change")return e}var Ug=!1;if(Pi){var tu;if(Pi){var nu="oninput"in document;if(!nu){var np=document.createElement("div");np.setAttribute("oninput","return;"),nu=typeof np.oninput=="function"}tu=nu}else tu=!1;Ug=tu&&(!document.documentMode||9<document.documentMode)}function ip(){Oo&&(Oo.detachEvent("onpropertychange",Fg),ta=Oo=null)}function Fg(n){if(n.propertyName==="value"&&Ec(ta)){var e=[];Ig(e,ta,n,Af(n)),mg(Ly,e)}}function Ny(n,e,t){n==="focusin"?(ip(),Oo=e,ta=t,Oo.attachEvent("onpropertychange",Fg)):n==="focusout"&&ip()}function Iy(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ec(ta)}function Uy(n,e){if(n==="click")return Ec(e)}function Fy(n,e){if(n==="input"||n==="change")return Ec(e)}function Oy(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ri=typeof Object.is=="function"?Object.is:Oy;function na(n,e){if(ri(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!sh.call(e,r)||!ri(n[r],e[r]))return!1}return!0}function rp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function sp(n,e){var t=rp(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=rp(t)}}function Og(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Og(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function zg(){for(var n=window,e=Hl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Hl(n.document)}return e}function Uf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function zy(n){var e=zg(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Og(t.ownerDocument.documentElement,t)){if(i!==null&&Uf(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=sp(t,s);var o=sp(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var ky=Pi&&"documentMode"in document&&11>=document.documentMode,ys=null,wh=null,zo=null,Th=!1;function op(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Th||ys==null||ys!==Hl(i)||(i=ys,"selectionStart"in i&&Uf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),zo&&na(zo,i)||(zo=i,i=$l(wh,"onSelect"),0<i.length&&(e=new Df("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ys)))}function Fa(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ss={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},iu={},kg={};Pi&&(kg=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function wc(n){if(iu[n])return iu[n];if(!Ss[n])return n;var e=Ss[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in kg)return iu[n]=e[t];return n}var Bg=wc("animationend"),Hg=wc("animationiteration"),Gg=wc("animationstart"),Vg=wc("transitionend"),Wg=new Map,ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(n,e){Wg.set(n,e),$r(e,[n])}for(var ru=0;ru<ap.length;ru++){var su=ap[ru],By=su.toLowerCase(),Hy=su[0].toUpperCase()+su.slice(1);fr(By,"on"+Hy)}fr(Bg,"onAnimationEnd");fr(Hg,"onAnimationIteration");fr(Gg,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr(Vg,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function lp(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Bx(i,e,void 0,n),n.currentTarget=null}function Xg(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;lp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;lp(r,a,c),s=l}}}if(Vl)throw n=yh,Vl=!1,yh=null,n}function ut(n,e){var t=e[Ph];t===void 0&&(t=e[Ph]=new Set);var i=n+"__bubble";t.has(i)||(jg(e,n,2,!1),t.add(i))}function ou(n,e,t){var i=0;e&&(i|=4),jg(t,n,i,e)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function ia(n){if(!n[Oa]){n[Oa]=!0,Z0.forEach(function(t){t!=="selectionchange"&&(Gy.has(t)||ou(t,!1,n),ou(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Oa]||(e[Oa]=!0,ou("selectionchange",!1,e))}}function jg(n,e,t,i){switch(Rg(e)){case 1:var r=ny;break;case 4:r=iy;break;default:r=Pf}t=r.bind(null,e,t,n),r=void 0,!xh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function au(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Lr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}mg(function(){var c=s,u=Af(t),h=[];e:{var d=Wg.get(n);if(d!==void 0){var p=Df,v=n;switch(n){case"keypress":if(Rl(t)===0)break e;case"keydown":case"keyup":p=_y;break;case"focusin":v="focus",p=eu;break;case"focusout":v="blur",p=eu;break;case"beforeblur":case"afterblur":p=eu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=oy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Sy;break;case Bg:case Hg:case Gg:p=cy;break;case Vg:p=Ey;break;case"scroll":p=ry;break;case"wheel":p=Ty;break;case"copy":case"cut":case"paste":p=hy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Qd}var x=(e&4)!==0,m=!x&&n==="scroll",f=x?d!==null?d+"Capture":null:d;x=[];for(var _=c,g;_!==null;){g=_;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,f!==null&&(y=Jo(_,f),y!=null&&x.push(ra(_,y,g)))),m)break;_=_.return}0<x.length&&(d=new p(d,v,null,t,u),h.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==vh&&(v=t.relatedTarget||t.fromElement)&&(Lr(v)||v[Li]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=t.relatedTarget||t.toElement,p=c,v=v?Lr(v):null,v!==null&&(m=Yr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=Kd,y="onMouseLeave",f="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(x=Qd,y="onPointerLeave",f="onPointerEnter",_="pointer"),m=p==null?d:Ms(p),g=v==null?d:Ms(v),d=new x(y,_+"leave",p,t,u),d.target=m,d.relatedTarget=g,y=null,Lr(u)===c&&(x=new x(f,_+"enter",v,t,u),x.target=g,x.relatedTarget=m,y=x),m=y,p&&v)t:{for(x=p,f=v,_=0,g=x;g;g=Qr(g))_++;for(g=0,y=f;y;y=Qr(y))g++;for(;0<_-g;)x=Qr(x),_--;for(;0<g-_;)f=Qr(f),g--;for(;_--;){if(x===f||f!==null&&x===f.alternate)break t;x=Qr(x),f=Qr(f)}x=null}else x=null;p!==null&&cp(h,d,p,x,!1),v!==null&&m!==null&&cp(h,m,v,x,!0)}}e:{if(d=c?Ms(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var R=Dy;else if(tp(d))if(Ug)R=Fy;else{R=Iy;var E=Ny}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=Uy);if(R&&(R=R(n,c))){Ig(h,R,t,u);break e}E&&E(n,d,c),n==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&fh(d,"number",d.value)}switch(E=c?Ms(c):window,n){case"focusin":(tp(E)||E.contentEditable==="true")&&(ys=E,wh=c,zo=null);break;case"focusout":zo=wh=ys=null;break;case"mousedown":Th=!0;break;case"contextmenu":case"mouseup":case"dragend":Th=!1,op(h,t,u);break;case"selectionchange":if(ky)break;case"keydown":case"keyup":op(h,t,u)}var A;if(If)e:{switch(n){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else xs?Dg(n,t)&&(D="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(D="onCompositionStart");D&&(Lg&&t.locale!=="ko"&&(xs||D!=="onCompositionStart"?D==="onCompositionEnd"&&xs&&(A=Pg()):(ji=u,Lf="value"in ji?ji.value:ji.textContent,xs=!0)),E=$l(c,D),0<E.length&&(D=new Jd(D,n,null,t,u),h.push({event:D,listeners:E}),A?D.data=A:(A=Ng(t),A!==null&&(D.data=A)))),(A=Cy?by(n,t):Ry(n,t))&&(c=$l(c,"onBeforeInput"),0<c.length&&(u=new Jd("onBeforeInput","beforeinput",null,t,u),h.push({event:u,listeners:c}),u.data=A))}Xg(h,e)})}function ra(n,e,t){return{instance:n,listener:e,currentTarget:t}}function $l(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Jo(n,t),s!=null&&i.unshift(ra(n,s,r)),s=Jo(n,e),s!=null&&i.push(ra(n,s,r))),n=n.return}return i}function Qr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function cp(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Jo(t,s),l!=null&&o.unshift(ra(t,l,a))):r||(l=Jo(t,s),l!=null&&o.push(ra(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Vy=/\r\n?/g,Wy=/\u0000|\uFFFD/g;function up(n){return(typeof n=="string"?n:""+n).replace(Vy,`
`).replace(Wy,"")}function za(n,e,t){if(e=up(e),up(n)!==e&&t)throw Error(he(425))}function Yl(){}var Ah=null,Ch=null;function bh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rh=typeof setTimeout=="function"?setTimeout:void 0,Xy=typeof clearTimeout=="function"?clearTimeout:void 0,hp=typeof Promise=="function"?Promise:void 0,jy=typeof queueMicrotask=="function"?queueMicrotask:typeof hp<"u"?function(n){return hp.resolve(null).then(n).catch(qy)}:Rh;function qy(n){setTimeout(function(){throw n})}function lu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),ea(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);ea(e)}function Zi(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function fp(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var so=Math.random().toString(36).slice(2),ui="__reactFiber$"+so,sa="__reactProps$"+so,Li="__reactContainer$"+so,Ph="__reactEvents$"+so,$y="__reactListeners$"+so,Yy="__reactHandles$"+so;function Lr(n){var e=n[ui];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Li]||t[ui]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=fp(n);n!==null;){if(t=n[ui])return t;n=fp(n)}return e}n=t,t=n.parentNode}return null}function Ma(n){return n=n[ui]||n[Li],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ms(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(he(33))}function Tc(n){return n[sa]||null}var Lh=[],Es=-1;function dr(n){return{current:n}}function ht(n){0>Es||(n.current=Lh[Es],Lh[Es]=null,Es--)}function lt(n,e){Es++,Lh[Es]=n.current,n.current=e}var cr={},Qt=dr(cr),gn=dr(!1),Gr=cr;function js(n,e){var t=n.type.contextTypes;if(!t)return cr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function vn(n){return n=n.childContextTypes,n!=null}function Kl(){ht(gn),ht(Qt)}function dp(n,e,t){if(Qt.current!==cr)throw Error(he(168));lt(Qt,e),lt(gn,t)}function qg(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(he(108,Nx(n)||"Unknown",r));return _t({},t,i)}function Jl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||cr,Gr=Qt.current,lt(Qt,n),lt(gn,gn.current),!0}function pp(n,e,t){var i=n.stateNode;if(!i)throw Error(he(169));t?(n=qg(n,e,Gr),i.__reactInternalMemoizedMergedChildContext=n,ht(gn),ht(Qt),lt(Qt,n)):ht(gn),lt(gn,t)}var Ei=null,Ac=!1,cu=!1;function $g(n){Ei===null?Ei=[n]:Ei.push(n)}function Ky(n){Ac=!0,$g(n)}function pr(){if(!cu&&Ei!==null){cu=!0;var n=0,e=nt;try{var t=Ei;for(nt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ei=null,Ac=!1}catch(r){throw Ei!==null&&(Ei=Ei.slice(n+1)),xg(Cf,pr),r}finally{nt=e,cu=!1}}return null}var ws=[],Ts=0,Ql=null,Zl=0,Nn=[],In=0,Vr=null,wi=1,Ti="";function wr(n,e){ws[Ts++]=Zl,ws[Ts++]=Ql,Ql=n,Zl=e}function Yg(n,e,t){Nn[In++]=wi,Nn[In++]=Ti,Nn[In++]=Vr,Vr=n;var i=wi;n=Ti;var r=32-ni(i)-1;i&=~(1<<r),t+=1;var s=32-ni(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,wi=1<<32-ni(e)+r|t<<r|i,Ti=s+n}else wi=1<<s|t<<r|i,Ti=n}function Ff(n){n.return!==null&&(wr(n,1),Yg(n,1,0))}function Of(n){for(;n===Ql;)Ql=ws[--Ts],ws[Ts]=null,Zl=ws[--Ts],ws[Ts]=null;for(;n===Vr;)Vr=Nn[--In],Nn[In]=null,Ti=Nn[--In],Nn[In]=null,wi=Nn[--In],Nn[In]=null}var Tn=null,wn=null,dt=!1,Qn=null;function Kg(n,e){var t=Bn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function mp(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Tn=n,wn=Zi(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Tn=n,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Vr!==null?{id:wi,overflow:Ti}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Bn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Tn=n,wn=null,!0):!1;default:return!1}}function Dh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Nh(n){if(dt){var e=wn;if(e){var t=e;if(!mp(n,e)){if(Dh(n))throw Error(he(418));e=Zi(t.nextSibling);var i=Tn;e&&mp(n,e)?Kg(i,t):(n.flags=n.flags&-4097|2,dt=!1,Tn=n)}}else{if(Dh(n))throw Error(he(418));n.flags=n.flags&-4097|2,dt=!1,Tn=n}}}function gp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Tn=n}function ka(n){if(n!==Tn)return!1;if(!dt)return gp(n),dt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!bh(n.type,n.memoizedProps)),e&&(e=wn)){if(Dh(n))throw Jg(),Error(he(418));for(;e;)Kg(n,e),e=Zi(e.nextSibling)}if(gp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(he(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){wn=Zi(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}wn=null}}else wn=Tn?Zi(n.stateNode.nextSibling):null;return!0}function Jg(){for(var n=wn;n;)n=Zi(n.nextSibling)}function qs(){wn=Tn=null,dt=!1}function zf(n){Qn===null?Qn=[n]:Qn.push(n)}var Jy=Ui.ReactCurrentBatchConfig;function vo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(he(309));var i=t.stateNode}if(!i)throw Error(he(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(he(284));if(!t._owner)throw Error(he(290,n))}return n}function Ba(n,e){throw n=Object.prototype.toString.call(e),Error(he(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function vp(n){var e=n._init;return e(n._payload)}function Qg(n){function e(f,_){if(n){var g=f.deletions;g===null?(f.deletions=[_],f.flags|=16):g.push(_)}}function t(f,_){if(!n)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=ir(f,_),f.index=0,f.sibling=null,f}function s(f,_,g){return f.index=g,n?(g=f.alternate,g!==null?(g=g.index,g<_?(f.flags|=2,_):g):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,_,g,y){return _===null||_.tag!==6?(_=gu(g,f.mode,y),_.return=f,_):(_=r(_,g),_.return=f,_)}function l(f,_,g,y){var R=g.type;return R===_s?u(f,_,g.props.children,y,g.key):_!==null&&(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Gi&&vp(R)===_.type)?(y=r(_,g.props),y.ref=vo(f,_,g),y.return=f,y):(y=Fl(g.type,g.key,g.props,null,f.mode,y),y.ref=vo(f,_,g),y.return=f,y)}function c(f,_,g,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=vu(g,f.mode,y),_.return=f,_):(_=r(_,g.children||[]),_.return=f,_)}function u(f,_,g,y,R){return _===null||_.tag!==7?(_=zr(g,f.mode,y,R),_.return=f,_):(_=r(_,g),_.return=f,_)}function h(f,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=gu(""+_,f.mode,g),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ra:return g=Fl(_.type,_.key,_.props,null,f.mode,g),g.ref=vo(f,null,_),g.return=f,g;case vs:return _=vu(_,f.mode,g),_.return=f,_;case Gi:var y=_._init;return h(f,y(_._payload),g)}if(Po(_)||ho(_))return _=zr(_,f.mode,g,null),_.return=f,_;Ba(f,_)}return null}function d(f,_,g,y){var R=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return R!==null?null:a(f,_,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ra:return g.key===R?l(f,_,g,y):null;case vs:return g.key===R?c(f,_,g,y):null;case Gi:return R=g._init,d(f,_,R(g._payload),y)}if(Po(g)||ho(g))return R!==null?null:u(f,_,g,y,null);Ba(f,g)}return null}function p(f,_,g,y,R){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(g)||null,a(_,f,""+y,R);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ra:return f=f.get(y.key===null?g:y.key)||null,l(_,f,y,R);case vs:return f=f.get(y.key===null?g:y.key)||null,c(_,f,y,R);case Gi:var E=y._init;return p(f,_,g,E(y._payload),R)}if(Po(y)||ho(y))return f=f.get(g)||null,u(_,f,y,R,null);Ba(_,y)}return null}function v(f,_,g,y){for(var R=null,E=null,A=_,D=_=0,S=null;A!==null&&D<g.length;D++){A.index>D?(S=A,A=null):S=A.sibling;var T=d(f,A,g[D],y);if(T===null){A===null&&(A=S);break}n&&A&&T.alternate===null&&e(f,A),_=s(T,_,D),E===null?R=T:E.sibling=T,E=T,A=S}if(D===g.length)return t(f,A),dt&&wr(f,D),R;if(A===null){for(;D<g.length;D++)A=h(f,g[D],y),A!==null&&(_=s(A,_,D),E===null?R=A:E.sibling=A,E=A);return dt&&wr(f,D),R}for(A=i(f,A);D<g.length;D++)S=p(A,f,D,g[D],y),S!==null&&(n&&S.alternate!==null&&A.delete(S.key===null?D:S.key),_=s(S,_,D),E===null?R=S:E.sibling=S,E=S);return n&&A.forEach(function(k){return e(f,k)}),dt&&wr(f,D),R}function x(f,_,g,y){var R=ho(g);if(typeof R!="function")throw Error(he(150));if(g=R.call(g),g==null)throw Error(he(151));for(var E=R=null,A=_,D=_=0,S=null,T=g.next();A!==null&&!T.done;D++,T=g.next()){A.index>D?(S=A,A=null):S=A.sibling;var k=d(f,A,T.value,y);if(k===null){A===null&&(A=S);break}n&&A&&k.alternate===null&&e(f,A),_=s(k,_,D),E===null?R=k:E.sibling=k,E=k,A=S}if(T.done)return t(f,A),dt&&wr(f,D),R;if(A===null){for(;!T.done;D++,T=g.next())T=h(f,T.value,y),T!==null&&(_=s(T,_,D),E===null?R=T:E.sibling=T,E=T);return dt&&wr(f,D),R}for(A=i(f,A);!T.done;D++,T=g.next())T=p(A,f,D,T.value,y),T!==null&&(n&&T.alternate!==null&&A.delete(T.key===null?D:T.key),_=s(T,_,D),E===null?R=T:E.sibling=T,E=T);return n&&A.forEach(function(P){return e(f,P)}),dt&&wr(f,D),R}function m(f,_,g,y){if(typeof g=="object"&&g!==null&&g.type===_s&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ra:e:{for(var R=g.key,E=_;E!==null;){if(E.key===R){if(R=g.type,R===_s){if(E.tag===7){t(f,E.sibling),_=r(E,g.props.children),_.return=f,f=_;break e}}else if(E.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Gi&&vp(R)===E.type){t(f,E.sibling),_=r(E,g.props),_.ref=vo(f,E,g),_.return=f,f=_;break e}t(f,E);break}else e(f,E);E=E.sibling}g.type===_s?(_=zr(g.props.children,f.mode,y,g.key),_.return=f,f=_):(y=Fl(g.type,g.key,g.props,null,f.mode,y),y.ref=vo(f,_,g),y.return=f,f=y)}return o(f);case vs:e:{for(E=g.key;_!==null;){if(_.key===E)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){t(f,_.sibling),_=r(_,g.children||[]),_.return=f,f=_;break e}else{t(f,_);break}else e(f,_);_=_.sibling}_=vu(g,f.mode,y),_.return=f,f=_}return o(f);case Gi:return E=g._init,m(f,_,E(g._payload),y)}if(Po(g))return v(f,_,g,y);if(ho(g))return x(f,_,g,y);Ba(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(t(f,_.sibling),_=r(_,g),_.return=f,f=_):(t(f,_),_=gu(g,f.mode,y),_.return=f,f=_),o(f)):t(f,_)}return m}var $s=Qg(!0),Zg=Qg(!1),ec=dr(null),tc=null,As=null,kf=null;function Bf(){kf=As=tc=null}function Hf(n){var e=ec.current;ht(ec),n._currentValue=e}function Ih(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Bs(n,e){tc=n,kf=As=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(pn=!0),n.firstContext=null)}function Wn(n){var e=n._currentValue;if(kf!==n)if(n={context:n,memoizedValue:e,next:null},As===null){if(tc===null)throw Error(he(308));As=n,tc.dependencies={lanes:0,firstContext:n}}else As=As.next=n;return e}var Dr=null;function Gf(n){Dr===null?Dr=[n]:Dr.push(n)}function ev(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Gf(e)):(t.next=r.next,r.next=t),e.interleaved=t,Di(n,i)}function Di(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Vi=!1;function Vf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ci(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function er(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Di(n,t)}return r=i.interleaved,r===null?(e.next=e,Gf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Di(n,t)}function Pl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,bf(n,t)}}function _p(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function nc(n,e,t,i){var r=n.updateQueue;Vi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=n,x=a;switch(d=e,p=t,x.tag){case 1:if(v=x.payload,typeof v=="function"){h=v.call(p,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,d=typeof v=="function"?v.call(p,h,d):v,d==null)break e;h=_t({},h,d);break e;case 2:Vi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Xr|=o,n.lanes=o,n.memoizedState=h}}function xp(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(he(191,r));r.call(i)}}}var Ea={},fi=dr(Ea),oa=dr(Ea),aa=dr(Ea);function Nr(n){if(n===Ea)throw Error(he(174));return n}function Wf(n,e){switch(lt(aa,e),lt(oa,n),lt(fi,Ea),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ph(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=ph(e,n)}ht(fi),lt(fi,e)}function Ys(){ht(fi),ht(oa),ht(aa)}function nv(n){Nr(aa.current);var e=Nr(fi.current),t=ph(e,n.type);e!==t&&(lt(oa,n),lt(fi,t))}function Xf(n){oa.current===n&&(ht(fi),ht(oa))}var mt=dr(0);function ic(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var uu=[];function jf(){for(var n=0;n<uu.length;n++)uu[n]._workInProgressVersionPrimary=null;uu.length=0}var Ll=Ui.ReactCurrentDispatcher,hu=Ui.ReactCurrentBatchConfig,Wr=0,vt=null,Ct=null,Ft=null,rc=!1,ko=!1,la=0,Qy=0;function jt(){throw Error(he(321))}function qf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ri(n[t],e[t]))return!1;return!0}function $f(n,e,t,i,r,s){if(Wr=s,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ll.current=n===null||n.memoizedState===null?nS:iS,n=t(i,r),ko){s=0;do{if(ko=!1,la=0,25<=s)throw Error(he(301));s+=1,Ft=Ct=null,e.updateQueue=null,Ll.current=rS,n=t(i,r)}while(ko)}if(Ll.current=sc,e=Ct!==null&&Ct.next!==null,Wr=0,Ft=Ct=vt=null,rc=!1,e)throw Error(he(300));return n}function Yf(){var n=la!==0;return la=0,n}function ai(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?vt.memoizedState=Ft=n:Ft=Ft.next=n,Ft}function Xn(){if(Ct===null){var n=vt.alternate;n=n!==null?n.memoizedState:null}else n=Ct.next;var e=Ft===null?vt.memoizedState:Ft.next;if(e!==null)Ft=e,Ct=n;else{if(n===null)throw Error(he(310));Ct=n,n={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Ft===null?vt.memoizedState=Ft=n:Ft=Ft.next=n}return Ft}function ca(n,e){return typeof e=="function"?e(n):e}function fu(n){var e=Xn(),t=e.queue;if(t===null)throw Error(he(311));t.lastRenderedReducer=n;var i=Ct,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Wr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,vt.lanes|=u,Xr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ri(i,e.memoizedState)||(pn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,vt.lanes|=s,Xr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function du(n){var e=Xn(),t=e.queue;if(t===null)throw Error(he(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ri(s,e.memoizedState)||(pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function iv(){}function rv(n,e){var t=vt,i=Xn(),r=e(),s=!ri(i.memoizedState,r);if(s&&(i.memoizedState=r,pn=!0),i=i.queue,Kf(av.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(t.flags|=2048,ua(9,ov.bind(null,t,i,r,e),void 0,null),kt===null)throw Error(he(349));Wr&30||sv(t,e,r)}return r}function sv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function ov(n,e,t,i){e.value=t,e.getSnapshot=i,lv(e)&&cv(n)}function av(n,e,t){return t(function(){lv(e)&&cv(n)})}function lv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ri(n,t)}catch{return!0}}function cv(n){var e=Di(n,1);e!==null&&ii(e,n,1,-1)}function yp(n){var e=ai();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:n},e.queue=n,n=n.dispatch=tS.bind(null,vt,n),[e.memoizedState,n]}function ua(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function uv(){return Xn().memoizedState}function Dl(n,e,t,i){var r=ai();vt.flags|=n,r.memoizedState=ua(1|e,t,void 0,i===void 0?null:i)}function Cc(n,e,t,i){var r=Xn();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&qf(i,o.deps)){r.memoizedState=ua(e,t,s,i);return}}vt.flags|=n,r.memoizedState=ua(1|e,t,s,i)}function Sp(n,e){return Dl(8390656,8,n,e)}function Kf(n,e){return Cc(2048,8,n,e)}function hv(n,e){return Cc(4,2,n,e)}function fv(n,e){return Cc(4,4,n,e)}function dv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function pv(n,e,t){return t=t!=null?t.concat([n]):null,Cc(4,4,dv.bind(null,e,n),t)}function Jf(){}function mv(n,e){var t=Xn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&qf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function gv(n,e){var t=Xn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&qf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function vv(n,e,t){return Wr&21?(ri(t,e)||(t=Mg(),vt.lanes|=t,Xr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,pn=!0),n.memoizedState=t)}function Zy(n,e){var t=nt;nt=t!==0&&4>t?t:4,n(!0);var i=hu.transition;hu.transition={};try{n(!1),e()}finally{nt=t,hu.transition=i}}function _v(){return Xn().memoizedState}function eS(n,e,t){var i=nr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},xv(n))yv(e,t);else if(t=ev(n,e,t,i),t!==null){var r=sn();ii(t,n,i,r),Sv(t,e,i)}}function tS(n,e,t){var i=nr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(xv(n))yv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ri(a,o)){var l=e.interleaved;l===null?(r.next=r,Gf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=ev(n,e,r,i),t!==null&&(r=sn(),ii(t,n,i,r),Sv(t,e,i))}}function xv(n){var e=n.alternate;return n===vt||e!==null&&e===vt}function yv(n,e){ko=rc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Sv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,bf(n,t)}}var sc={readContext:Wn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},nS={readContext:Wn,useCallback:function(n,e){return ai().memoizedState=[n,e===void 0?null:e],n},useContext:Wn,useEffect:Sp,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Dl(4194308,4,dv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Dl(4194308,4,n,e)},useInsertionEffect:function(n,e){return Dl(4,2,n,e)},useMemo:function(n,e){var t=ai();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=ai();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=eS.bind(null,vt,n),[i.memoizedState,n]},useRef:function(n){var e=ai();return n={current:n},e.memoizedState=n},useState:yp,useDebugValue:Jf,useDeferredValue:function(n){return ai().memoizedState=n},useTransition:function(){var n=yp(!1),e=n[0];return n=Zy.bind(null,n[1]),ai().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=vt,r=ai();if(dt){if(t===void 0)throw Error(he(407));t=t()}else{if(t=e(),kt===null)throw Error(he(349));Wr&30||sv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Sp(av.bind(null,i,s,n),[n]),i.flags|=2048,ua(9,ov.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=ai(),e=kt.identifierPrefix;if(dt){var t=Ti,i=wi;t=(i&~(1<<32-ni(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=la++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Qy++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},iS={readContext:Wn,useCallback:mv,useContext:Wn,useEffect:Kf,useImperativeHandle:pv,useInsertionEffect:hv,useLayoutEffect:fv,useMemo:gv,useReducer:fu,useRef:uv,useState:function(){return fu(ca)},useDebugValue:Jf,useDeferredValue:function(n){var e=Xn();return vv(e,Ct.memoizedState,n)},useTransition:function(){var n=fu(ca)[0],e=Xn().memoizedState;return[n,e]},useMutableSource:iv,useSyncExternalStore:rv,useId:_v,unstable_isNewReconciler:!1},rS={readContext:Wn,useCallback:mv,useContext:Wn,useEffect:Kf,useImperativeHandle:pv,useInsertionEffect:hv,useLayoutEffect:fv,useMemo:gv,useReducer:du,useRef:uv,useState:function(){return du(ca)},useDebugValue:Jf,useDeferredValue:function(n){var e=Xn();return Ct===null?e.memoizedState=n:vv(e,Ct.memoizedState,n)},useTransition:function(){var n=du(ca)[0],e=Xn().memoizedState;return[n,e]},useMutableSource:iv,useSyncExternalStore:rv,useId:_v,unstable_isNewReconciler:!1};function Kn(n,e){if(n&&n.defaultProps){e=_t({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Uh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:_t({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var bc={isMounted:function(n){return(n=n._reactInternals)?Yr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=sn(),r=nr(n),s=Ci(i,r);s.payload=e,t!=null&&(s.callback=t),e=er(n,s,r),e!==null&&(ii(e,n,r,i),Pl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=sn(),r=nr(n),s=Ci(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=er(n,s,r),e!==null&&(ii(e,n,r,i),Pl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=sn(),i=nr(n),r=Ci(t,i);r.tag=2,e!=null&&(r.callback=e),e=er(n,r,i),e!==null&&(ii(e,n,i,t),Pl(e,n,i))}};function Mp(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!na(t,i)||!na(r,s):!0}function Mv(n,e,t){var i=!1,r=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=Wn(s):(r=vn(e)?Gr:Qt.current,i=e.contextTypes,s=(i=i!=null)?js(n,r):cr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Ep(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&bc.enqueueReplaceState(e,e.state,null)}function Fh(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Vf(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Wn(s):(s=vn(e)?Gr:Qt.current,r.context=js(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Uh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&bc.enqueueReplaceState(r,r.state,null),nc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ks(n,e){try{var t="",i=e;do t+=Dx(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function pu(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Oh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var sS=typeof WeakMap=="function"?WeakMap:Map;function Ev(n,e,t){t=Ci(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){ac||(ac=!0,qh=i),Oh(n,e)},t}function wv(n,e,t){t=Ci(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Oh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Oh(n,e),typeof i!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function wp(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new sS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=xS.bind(null,n,e,t),e.then(n,n))}function Tp(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Ap(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Ci(-1,1),e.tag=2,er(t,e,1))),t.lanes|=1),n)}var oS=Ui.ReactCurrentOwner,pn=!1;function nn(n,e,t,i){e.child=n===null?Zg(e,null,t,i):$s(e,n.child,t,i)}function Cp(n,e,t,i,r){t=t.render;var s=e.ref;return Bs(e,r),i=$f(n,e,t,i,s,r),t=Yf(),n!==null&&!pn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ni(n,e,r)):(dt&&t&&Ff(e),e.flags|=1,nn(n,e,i,r),e.child)}function bp(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!sd(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Tv(n,e,s,i,r)):(n=Fl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:na,t(o,i)&&n.ref===e.ref)return Ni(n,e,r)}return e.flags|=1,n=ir(s,i),n.ref=e.ref,n.return=e,e.child=n}function Tv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(na(s,i)&&n.ref===e.ref)if(pn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(pn=!0);else return e.lanes=n.lanes,Ni(n,e,r)}return zh(n,e,t,i,r)}function Av(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(bs,En),En|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,lt(bs,En),En|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,lt(bs,En),En|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,lt(bs,En),En|=i;return nn(n,e,r,t),e.child}function Cv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function zh(n,e,t,i,r){var s=vn(t)?Gr:Qt.current;return s=js(e,s),Bs(e,r),t=$f(n,e,t,i,s,r),i=Yf(),n!==null&&!pn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ni(n,e,r)):(dt&&i&&Ff(e),e.flags|=1,nn(n,e,t,r),e.child)}function Rp(n,e,t,i,r){if(vn(t)){var s=!0;Jl(e)}else s=!1;if(Bs(e,r),e.stateNode===null)Nl(n,e),Mv(e,t,i),Fh(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Wn(c):(c=vn(t)?Gr:Qt.current,c=js(e,c));var u=t.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Ep(e,o,i,c),Vi=!1;var d=e.memoizedState;o.state=d,nc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||gn.current||Vi?(typeof u=="function"&&(Uh(e,t,u,i),l=e.memoizedState),(a=Vi||Mp(e,t,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,tv(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Kn(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Wn(l):(l=vn(t)?Gr:Qt.current,l=js(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Ep(e,o,i,l),Vi=!1,d=e.memoizedState,o.state=d,nc(e,i,o,r);var v=e.memoizedState;a!==h||d!==v||gn.current||Vi?(typeof p=="function"&&(Uh(e,t,p,i),v=e.memoizedState),(c=Vi||Mp(e,t,c,i,d,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return kh(n,e,t,i,s,r)}function kh(n,e,t,i,r,s){Cv(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&pp(e,t,!1),Ni(n,e,s);i=e.stateNode,oS.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=$s(e,n.child,null,s),e.child=$s(e,null,a,s)):nn(n,e,a,s),e.memoizedState=i.state,r&&pp(e,t,!0),e.child}function bv(n){var e=n.stateNode;e.pendingContext?dp(n,e.pendingContext,e.pendingContext!==e.context):e.context&&dp(n,e.context,!1),Wf(n,e.containerInfo)}function Pp(n,e,t,i,r){return qs(),zf(r),e.flags|=256,nn(n,e,t,i),e.child}var Bh={dehydrated:null,treeContext:null,retryLane:0};function Hh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Rv(n,e,t){var i=e.pendingProps,r=mt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),lt(mt,r&1),n===null)return Nh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Lc(o,i,0,null),n=zr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Hh(t),e.memoizedState=Bh,n):Qf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return aS(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ir(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ir(a,s):(s=zr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Hh(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Bh,i}return s=n.child,n=s.sibling,i=ir(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Qf(n,e){return e=Lc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Ha(n,e,t,i){return i!==null&&zf(i),$s(e,n.child,null,t),n=Qf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function aS(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=pu(Error(he(422))),Ha(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Lc({mode:"visible",children:i.children},r,0,null),s=zr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&$s(e,n.child,null,o),e.child.memoizedState=Hh(o),e.memoizedState=Bh,s);if(!(e.mode&1))return Ha(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(he(419)),i=pu(s,i,void 0),Ha(n,e,o,i)}if(a=(o&n.childLanes)!==0,pn||a){if(i=kt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Di(n,r),ii(i,n,r,-1))}return rd(),i=pu(Error(he(421))),Ha(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=yS.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,wn=Zi(r.nextSibling),Tn=e,dt=!0,Qn=null,n!==null&&(Nn[In++]=wi,Nn[In++]=Ti,Nn[In++]=Vr,wi=n.id,Ti=n.overflow,Vr=e),e=Qf(e,i.children),e.flags|=4096,e)}function Lp(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Ih(n.return,e,t)}function mu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Pv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(nn(n,e,i.children,t),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Lp(n,t,e);else if(n.tag===19)Lp(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(lt(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&ic(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),mu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&ic(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}mu(e,!0,t,null,s);break;case"together":mu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ni(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Xr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(he(153));if(e.child!==null){for(n=e.child,t=ir(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ir(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function lS(n,e,t){switch(e.tag){case 3:bv(e),qs();break;case 5:nv(e);break;case 1:vn(e.type)&&Jl(e);break;case 4:Wf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(ec,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(mt,mt.current&1),e.flags|=128,null):t&e.child.childLanes?Rv(n,e,t):(lt(mt,mt.current&1),n=Ni(n,e,t),n!==null?n.sibling:null);lt(mt,mt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Pv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,Av(n,e,t)}return Ni(n,e,t)}var Lv,Gh,Dv,Nv;Lv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Gh=function(){};Dv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Nr(fi.current);var s=null;switch(t){case"input":r=uh(n,r),i=uh(n,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=dh(n,r),i=dh(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Yl)}mh(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Yo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Yo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Nv=function(n,e,t,i){t!==i&&(e.flags|=4)};function _o(n,e){if(!dt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function qt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function cS(n,e,t){var i=e.pendingProps;switch(Of(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return vn(e.type)&&Kl(),qt(e),null;case 3:return i=e.stateNode,Ys(),ht(gn),ht(Qt),jf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(ka(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qn!==null&&(Kh(Qn),Qn=null))),Gh(n,e),qt(e),null;case 5:Xf(e);var r=Nr(aa.current);if(t=e.type,n!==null&&e.stateNode!=null)Dv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(he(166));return qt(e),null}if(n=Nr(fi.current),ka(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[ui]=e,i[sa]=s,n=(e.mode&1)!==0,t){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<Do.length;r++)ut(Do[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":Bd(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":Gd(i,s),ut("invalid",i)}mh(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&za(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&za(i.textContent,a,n),r=["children",""+a]):Yo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ut("scroll",i)}switch(t){case"input":Pa(i),Hd(i,s,!0);break;case"textarea":Pa(i),Vd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Yl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ag(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[ui]=e,n[sa]=i,Lv(n,e,!1,!1),e.stateNode=n;e:{switch(o=gh(t,i),t){case"dialog":ut("cancel",n),ut("close",n),r=i;break;case"iframe":case"object":case"embed":ut("load",n),r=i;break;case"video":case"audio":for(r=0;r<Do.length;r++)ut(Do[r],n);r=i;break;case"source":ut("error",n),r=i;break;case"img":case"image":case"link":ut("error",n),ut("load",n),r=i;break;case"details":ut("toggle",n),r=i;break;case"input":Bd(n,i),r=uh(n,i),ut("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),ut("invalid",n);break;case"textarea":Gd(n,i),r=dh(n,i),ut("invalid",n);break;default:r=i}mh(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ug(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lg(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ko(n,l):typeof l=="number"&&Ko(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",n):l!=null&&Mf(n,s,l,o))}switch(t){case"input":Pa(n),Hd(n,i,!1);break;case"textarea":Pa(n),Vd(n);break;case"option":i.value!=null&&n.setAttribute("value",""+lr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Fs(n,!!i.multiple,s,!1):i.defaultValue!=null&&Fs(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Yl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(n&&e.stateNode!=null)Nv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(he(166));if(t=Nr(aa.current),Nr(fi.current),ka(e)){if(i=e.stateNode,t=e.memoizedProps,i[ui]=e,(s=i.nodeValue!==t)&&(n=Tn,n!==null))switch(n.tag){case 3:za(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&za(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[ui]=e,e.stateNode=i}return qt(e),null;case 13:if(ht(mt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(dt&&wn!==null&&e.mode&1&&!(e.flags&128))Jg(),qs(),e.flags|=98560,s=!1;else if(s=ka(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(he(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(he(317));s[ui]=e}else qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else Qn!==null&&(Kh(Qn),Qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||mt.current&1?bt===0&&(bt=3):rd())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return Ys(),Gh(n,e),n===null&&ia(e.stateNode.containerInfo),qt(e),null;case 10:return Hf(e.type._context),qt(e),null;case 17:return vn(e.type)&&Kl(),qt(e),null;case 19:if(ht(mt),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)_o(s,!1);else{if(bt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=ic(n),o!==null){for(e.flags|=128,_o(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return lt(mt,mt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Mt()>Js&&(e.flags|=128,i=!0,_o(s,!1),e.lanes=4194304)}else{if(!i)if(n=ic(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),_o(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!dt)return qt(e),null}else 2*Mt()-s.renderingStartTime>Js&&t!==1073741824&&(e.flags|=128,i=!0,_o(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,t=mt.current,lt(mt,i?t&1|2:t&1),e):(qt(e),null);case 22:case 23:return id(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?En&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(he(156,e.tag))}function uS(n,e){switch(Of(e),e.tag){case 1:return vn(e.type)&&Kl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ys(),ht(gn),ht(Qt),jf(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Xf(e),null;case 13:if(ht(mt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(he(340));qs()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ht(mt),null;case 4:return Ys(),null;case 10:return Hf(e.type._context),null;case 22:case 23:return id(),null;case 24:return null;default:return null}}var Ga=!1,Jt=!1,hS=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function Cs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){yt(n,e,i)}else t.current=null}function Vh(n,e,t){try{t()}catch(i){yt(n,e,i)}}var Dp=!1;function fS(n,e){if(Ah=jl,n=zg(),Uf(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=n,d=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===n)break t;if(d===t&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ch={focusedElem:n,selectionRange:t},jl=!1,Ae=e;Ae!==null;)if(e=Ae,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ae=n;else for(;Ae!==null;){e=Ae;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:Kn(e.type,x),m);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(he(163))}}catch(y){yt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Ae=n;break}Ae=e.return}return v=Dp,Dp=!1,v}function Bo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Vh(e,t,s)}r=r.next}while(r!==i)}}function Rc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Wh(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Iv(n){var e=n.alternate;e!==null&&(n.alternate=null,Iv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[ui],delete e[sa],delete e[Ph],delete e[$y],delete e[Yy])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Uv(n){return n.tag===5||n.tag===3||n.tag===4}function Np(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Uv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Xh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Yl));else if(i!==4&&(n=n.child,n!==null))for(Xh(n,e,t),n=n.sibling;n!==null;)Xh(n,e,t),n=n.sibling}function jh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(jh(n,e,t),n=n.sibling;n!==null;)jh(n,e,t),n=n.sibling}var Ht=null,Jn=!1;function Fi(n,e,t){for(t=t.child;t!==null;)Fv(n,e,t),t=t.sibling}function Fv(n,e,t){if(hi&&typeof hi.onCommitFiberUnmount=="function")try{hi.onCommitFiberUnmount(Sc,t)}catch{}switch(t.tag){case 5:Jt||Cs(t,e);case 6:var i=Ht,r=Jn;Ht=null,Fi(n,e,t),Ht=i,Jn=r,Ht!==null&&(Jn?(n=Ht,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Ht.removeChild(t.stateNode));break;case 18:Ht!==null&&(Jn?(n=Ht,t=t.stateNode,n.nodeType===8?lu(n.parentNode,t):n.nodeType===1&&lu(n,t),ea(n)):lu(Ht,t.stateNode));break;case 4:i=Ht,r=Jn,Ht=t.stateNode.containerInfo,Jn=!0,Fi(n,e,t),Ht=i,Jn=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vh(t,e,o),r=r.next}while(r!==i)}Fi(n,e,t);break;case 1:if(!Jt&&(Cs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){yt(t,e,a)}Fi(n,e,t);break;case 21:Fi(n,e,t);break;case 22:t.mode&1?(Jt=(i=Jt)||t.memoizedState!==null,Fi(n,e,t),Jt=i):Fi(n,e,t);break;default:Fi(n,e,t)}}function Ip(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new hS),e.forEach(function(i){var r=SS.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function jn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ht=a.stateNode,Jn=!1;break e;case 3:Ht=a.stateNode.containerInfo,Jn=!0;break e;case 4:Ht=a.stateNode.containerInfo,Jn=!0;break e}a=a.return}if(Ht===null)throw Error(he(160));Fv(s,o,r),Ht=null,Jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){yt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ov(e,n),e=e.sibling}function Ov(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(jn(e,n),oi(n),i&4){try{Bo(3,n,n.return),Rc(3,n)}catch(x){yt(n,n.return,x)}try{Bo(5,n,n.return)}catch(x){yt(n,n.return,x)}}break;case 1:jn(e,n),oi(n),i&512&&t!==null&&Cs(t,t.return);break;case 5:if(jn(e,n),oi(n),i&512&&t!==null&&Cs(t,t.return),n.flags&32){var r=n.stateNode;try{Ko(r,"")}catch(x){yt(n,n.return,x)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&sg(r,s),gh(a,o);var c=gh(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?ug(r,h):u==="dangerouslySetInnerHTML"?lg(r,h):u==="children"?Ko(r,h):Mf(r,u,h,c)}switch(a){case"input":hh(r,s);break;case"textarea":og(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Fs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Fs(r,!!s.multiple,s.defaultValue,!0):Fs(r,!!s.multiple,s.multiple?[]:"",!1))}r[sa]=s}catch(x){yt(n,n.return,x)}}break;case 6:if(jn(e,n),oi(n),i&4){if(n.stateNode===null)throw Error(he(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(x){yt(n,n.return,x)}}break;case 3:if(jn(e,n),oi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{ea(e.containerInfo)}catch(x){yt(n,n.return,x)}break;case 4:jn(e,n),oi(n);break;case 13:jn(e,n),oi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(td=Mt())),i&4&&Ip(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(Jt=(c=Jt)||u,jn(e,n),Jt=c):jn(e,n),oi(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(Ae=n,u=n.child;u!==null;){for(h=Ae=u;Ae!==null;){switch(d=Ae,p=d.child,d.tag){case 0:case 11:case 14:case 15:Bo(4,d,d.return);break;case 1:Cs(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){yt(i,t,x)}}break;case 5:Cs(d,d.return);break;case 22:if(d.memoizedState!==null){Fp(h);continue}}p!==null?(p.return=d,Ae=p):Fp(h)}u=u.sibling}e:for(u=null,h=n;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=cg("display",o))}catch(x){yt(n,n.return,x)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){yt(n,n.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:jn(e,n),oi(n),i&4&&Ip(n);break;case 21:break;default:jn(e,n),oi(n)}}function oi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Uv(t)){var i=t;break e}t=t.return}throw Error(he(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ko(r,""),i.flags&=-33);var s=Np(n);jh(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Np(n);Xh(n,a,o);break;default:throw Error(he(161))}}catch(l){yt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function dS(n,e,t){Ae=n,zv(n)}function zv(n,e,t){for(var i=(n.mode&1)!==0;Ae!==null;){var r=Ae,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ga;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Jt;a=Ga;var c=Jt;if(Ga=o,(Jt=l)&&!c)for(Ae=r;Ae!==null;)o=Ae,l=o.child,o.tag===22&&o.memoizedState!==null?Op(r):l!==null?(l.return=o,Ae=l):Op(r);for(;s!==null;)Ae=s,zv(s),s=s.sibling;Ae=r,Ga=a,Jt=c}Up(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ae=s):Up(n)}}function Up(n){for(;Ae!==null;){var e=Ae;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||Rc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Kn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}xp(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&ea(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(he(163))}Jt||e.flags&512&&Wh(e)}catch(d){yt(e,e.return,d)}}if(e===n){Ae=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ae=t;break}Ae=e.return}}function Fp(n){for(;Ae!==null;){var e=Ae;if(e===n){Ae=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ae=t;break}Ae=e.return}}function Op(n){for(;Ae!==null;){var e=Ae;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Rc(4,e)}catch(l){yt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{Wh(e)}catch(l){yt(e,s,l)}break;case 5:var o=e.return;try{Wh(e)}catch(l){yt(e,o,l)}}}catch(l){yt(e,e.return,l)}if(e===n){Ae=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ae=a;break}Ae=e.return}}var pS=Math.ceil,oc=Ui.ReactCurrentDispatcher,Zf=Ui.ReactCurrentOwner,Hn=Ui.ReactCurrentBatchConfig,Ze=0,kt=null,wt=null,Vt=0,En=0,bs=dr(0),bt=0,ha=null,Xr=0,Pc=0,ed=0,Ho=null,fn=null,td=0,Js=1/0,Mi=null,ac=!1,qh=null,tr=null,Va=!1,qi=null,lc=0,Go=0,$h=null,Il=-1,Ul=0;function sn(){return Ze&6?Mt():Il!==-1?Il:Il=Mt()}function nr(n){return n.mode&1?Ze&2&&Vt!==0?Vt&-Vt:Jy.transition!==null?(Ul===0&&(Ul=Mg()),Ul):(n=nt,n!==0||(n=window.event,n=n===void 0?16:Rg(n.type)),n):1}function ii(n,e,t,i){if(50<Go)throw Go=0,$h=null,Error(he(185));ya(n,t,i),(!(Ze&2)||n!==kt)&&(n===kt&&(!(Ze&2)&&(Pc|=t),bt===4&&Xi(n,Vt)),_n(n,i),t===1&&Ze===0&&!(e.mode&1)&&(Js=Mt()+500,Ac&&pr()))}function _n(n,e){var t=n.callbackNode;Jx(n,e);var i=Xl(n,n===kt?Vt:0);if(i===0)t!==null&&jd(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&jd(t),e===1)n.tag===0?Ky(zp.bind(null,n)):$g(zp.bind(null,n)),jy(function(){!(Ze&6)&&pr()}),t=null;else{switch(Eg(i)){case 1:t=Cf;break;case 4:t=yg;break;case 16:t=Wl;break;case 536870912:t=Sg;break;default:t=Wl}t=jv(t,kv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function kv(n,e){if(Il=-1,Ul=0,Ze&6)throw Error(he(327));var t=n.callbackNode;if(Hs()&&n.callbackNode!==t)return null;var i=Xl(n,n===kt?Vt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=cc(n,i);else{e=i;var r=Ze;Ze|=2;var s=Hv();(kt!==n||Vt!==e)&&(Mi=null,Js=Mt()+500,Or(n,e));do try{vS();break}catch(a){Bv(n,a)}while(!0);Bf(),oc.current=s,Ze=r,wt!==null?e=0:(kt=null,Vt=0,e=bt)}if(e!==0){if(e===2&&(r=Sh(n),r!==0&&(i=r,e=Yh(n,r))),e===1)throw t=ha,Or(n,0),Xi(n,i),_n(n,Mt()),t;if(e===6)Xi(n,i);else{if(r=n.current.alternate,!(i&30)&&!mS(r)&&(e=cc(n,i),e===2&&(s=Sh(n),s!==0&&(i=s,e=Yh(n,s))),e===1))throw t=ha,Or(n,0),Xi(n,i),_n(n,Mt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(he(345));case 2:Tr(n,fn,Mi);break;case 3:if(Xi(n,i),(i&130023424)===i&&(e=td+500-Mt(),10<e)){if(Xl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){sn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Rh(Tr.bind(null,n,fn,Mi),e);break}Tr(n,fn,Mi);break;case 4:if(Xi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-ni(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*pS(i/1960))-i,10<i){n.timeoutHandle=Rh(Tr.bind(null,n,fn,Mi),i);break}Tr(n,fn,Mi);break;case 5:Tr(n,fn,Mi);break;default:throw Error(he(329))}}}return _n(n,Mt()),n.callbackNode===t?kv.bind(null,n):null}function Yh(n,e){var t=Ho;return n.current.memoizedState.isDehydrated&&(Or(n,e).flags|=256),n=cc(n,e),n!==2&&(e=fn,fn=t,e!==null&&Kh(e)),n}function Kh(n){fn===null?fn=n:fn.push.apply(fn,n)}function mS(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ri(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xi(n,e){for(e&=~ed,e&=~Pc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ni(e),i=1<<t;n[t]=-1,e&=~i}}function zp(n){if(Ze&6)throw Error(he(327));Hs();var e=Xl(n,0);if(!(e&1))return _n(n,Mt()),null;var t=cc(n,e);if(n.tag!==0&&t===2){var i=Sh(n);i!==0&&(e=i,t=Yh(n,i))}if(t===1)throw t=ha,Or(n,0),Xi(n,e),_n(n,Mt()),t;if(t===6)throw Error(he(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Tr(n,fn,Mi),_n(n,Mt()),null}function nd(n,e){var t=Ze;Ze|=1;try{return n(e)}finally{Ze=t,Ze===0&&(Js=Mt()+500,Ac&&pr())}}function jr(n){qi!==null&&qi.tag===0&&!(Ze&6)&&Hs();var e=Ze;Ze|=1;var t=Hn.transition,i=nt;try{if(Hn.transition=null,nt=1,n)return n()}finally{nt=i,Hn.transition=t,Ze=e,!(Ze&6)&&pr()}}function id(){En=bs.current,ht(bs)}function Or(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Xy(t)),wt!==null)for(t=wt.return;t!==null;){var i=t;switch(Of(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Kl();break;case 3:Ys(),ht(gn),ht(Qt),jf();break;case 5:Xf(i);break;case 4:Ys();break;case 13:ht(mt);break;case 19:ht(mt);break;case 10:Hf(i.type._context);break;case 22:case 23:id()}t=t.return}if(kt=n,wt=n=ir(n.current,null),Vt=En=e,bt=0,ha=null,ed=Pc=Xr=0,fn=Ho=null,Dr!==null){for(e=0;e<Dr.length;e++)if(t=Dr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Dr=null}return n}function Bv(n,e){do{var t=wt;try{if(Bf(),Ll.current=sc,rc){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}rc=!1}if(Wr=0,Ft=Ct=vt=null,ko=!1,la=0,Zf.current=null,t===null||t.return===null){bt=1,ha=e,wt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Tp(o);if(p!==null){p.flags&=-257,Ap(p,o,a,s,e),p.mode&1&&wp(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){wp(s,c,e),rd();break e}l=Error(he(426))}}else if(dt&&a.mode&1){var m=Tp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Ap(m,o,a,s,e),zf(Ks(l,a));break e}}s=l=Ks(l,a),bt!==4&&(bt=2),Ho===null?Ho=[s]:Ho.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Ev(s,l,e);_p(s,f);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(tr===null||!tr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=wv(s,a,e);_p(s,y);break e}}s=s.return}while(s!==null)}Vv(t)}catch(R){e=R,wt===t&&t!==null&&(wt=t=t.return);continue}break}while(!0)}function Hv(){var n=oc.current;return oc.current=sc,n===null?sc:n}function rd(){(bt===0||bt===3||bt===2)&&(bt=4),kt===null||!(Xr&268435455)&&!(Pc&268435455)||Xi(kt,Vt)}function cc(n,e){var t=Ze;Ze|=2;var i=Hv();(kt!==n||Vt!==e)&&(Mi=null,Or(n,e));do try{gS();break}catch(r){Bv(n,r)}while(!0);if(Bf(),Ze=t,oc.current=i,wt!==null)throw Error(he(261));return kt=null,Vt=0,bt}function gS(){for(;wt!==null;)Gv(wt)}function vS(){for(;wt!==null&&!Gx();)Gv(wt)}function Gv(n){var e=Xv(n.alternate,n,En);n.memoizedProps=n.pendingProps,e===null?Vv(n):wt=e,Zf.current=null}function Vv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=uS(t,e),t!==null){t.flags&=32767,wt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{bt=6,wt=null;return}}else if(t=cS(t,e,En),t!==null){wt=t;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=n}while(e!==null);bt===0&&(bt=5)}function Tr(n,e,t){var i=nt,r=Hn.transition;try{Hn.transition=null,nt=1,_S(n,e,t,i)}finally{Hn.transition=r,nt=i}return null}function _S(n,e,t,i){do Hs();while(qi!==null);if(Ze&6)throw Error(he(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(he(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Qx(n,s),n===kt&&(wt=kt=null,Vt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Va||(Va=!0,jv(Wl,function(){return Hs(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Hn.transition,Hn.transition=null;var o=nt;nt=1;var a=Ze;Ze|=4,Zf.current=null,fS(n,t),Ov(t,n),zy(Ch),jl=!!Ah,Ch=Ah=null,n.current=t,dS(t),Vx(),Ze=a,nt=o,Hn.transition=s}else n.current=t;if(Va&&(Va=!1,qi=n,lc=r),s=n.pendingLanes,s===0&&(tr=null),jx(t.stateNode),_n(n,Mt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(ac)throw ac=!1,n=qh,qh=null,n;return lc&1&&n.tag!==0&&Hs(),s=n.pendingLanes,s&1?n===$h?Go++:(Go=0,$h=n):Go=0,pr(),null}function Hs(){if(qi!==null){var n=Eg(lc),e=Hn.transition,t=nt;try{if(Hn.transition=null,nt=16>n?16:n,qi===null)var i=!1;else{if(n=qi,qi=null,lc=0,Ze&6)throw Error(he(331));var r=Ze;for(Ze|=4,Ae=n.current;Ae!==null;){var s=Ae,o=s.child;if(Ae.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ae=c;Ae!==null;){var u=Ae;switch(u.tag){case 0:case 11:case 15:Bo(8,u,s)}var h=u.child;if(h!==null)h.return=u,Ae=h;else for(;Ae!==null;){u=Ae;var d=u.sibling,p=u.return;if(Iv(u),u===c){Ae=null;break}if(d!==null){d.return=p,Ae=d;break}Ae=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}Ae=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ae=o;else e:for(;Ae!==null;){if(s=Ae,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Ae=f;break e}Ae=s.return}}var _=n.current;for(Ae=_;Ae!==null;){o=Ae;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,Ae=g;else e:for(o=_;Ae!==null;){if(a=Ae,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Rc(9,a)}}catch(R){yt(a,a.return,R)}if(a===o){Ae=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Ae=y;break e}Ae=a.return}}if(Ze=r,pr(),hi&&typeof hi.onPostCommitFiberRoot=="function")try{hi.onPostCommitFiberRoot(Sc,n)}catch{}i=!0}return i}finally{nt=t,Hn.transition=e}}return!1}function kp(n,e,t){e=Ks(t,e),e=Ev(n,e,1),n=er(n,e,1),e=sn(),n!==null&&(ya(n,1,e),_n(n,e))}function yt(n,e,t){if(n.tag===3)kp(n,n,t);else for(;e!==null;){if(e.tag===3){kp(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(tr===null||!tr.has(i))){n=Ks(t,n),n=wv(e,n,1),e=er(e,n,1),n=sn(),e!==null&&(ya(e,1,n),_n(e,n));break}}e=e.return}}function xS(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=sn(),n.pingedLanes|=n.suspendedLanes&t,kt===n&&(Vt&t)===t&&(bt===4||bt===3&&(Vt&130023424)===Vt&&500>Mt()-td?Or(n,0):ed|=t),_n(n,e)}function Wv(n,e){e===0&&(n.mode&1?(e=Na,Na<<=1,!(Na&130023424)&&(Na=4194304)):e=1);var t=sn();n=Di(n,e),n!==null&&(ya(n,e,t),_n(n,t))}function yS(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Wv(n,t)}function SS(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(he(314))}i!==null&&i.delete(e),Wv(n,t)}var Xv;Xv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||gn.current)pn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return pn=!1,lS(n,e,t);pn=!!(n.flags&131072)}else pn=!1,dt&&e.flags&1048576&&Yg(e,Zl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Nl(n,e),n=e.pendingProps;var r=js(e,Qt.current);Bs(e,t),r=$f(null,e,i,n,r,t);var s=Yf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(s=!0,Jl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Vf(e),r.updater=bc,e.stateNode=r,r._reactInternals=e,Fh(e,i,n,t),e=kh(null,e,i,!0,s,t)):(e.tag=0,dt&&s&&Ff(e),nn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Nl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ES(i),n=Kn(i,n),r){case 0:e=zh(null,e,i,n,t);break e;case 1:e=Rp(null,e,i,n,t);break e;case 11:e=Cp(null,e,i,n,t);break e;case 14:e=bp(null,e,i,Kn(i.type,n),t);break e}throw Error(he(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),zh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Rp(n,e,i,r,t);case 3:e:{if(bv(e),n===null)throw Error(he(387));i=e.pendingProps,s=e.memoizedState,r=s.element,tv(n,e),nc(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ks(Error(he(423)),e),e=Pp(n,e,i,t,r);break e}else if(i!==r){r=Ks(Error(he(424)),e),e=Pp(n,e,i,t,r);break e}else for(wn=Zi(e.stateNode.containerInfo.firstChild),Tn=e,dt=!0,Qn=null,t=Zg(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(qs(),i===r){e=Ni(n,e,t);break e}nn(n,e,i,t)}e=e.child}return e;case 5:return nv(e),n===null&&Nh(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,bh(i,r)?o=null:s!==null&&bh(i,s)&&(e.flags|=32),Cv(n,e),nn(n,e,o,t),e.child;case 6:return n===null&&Nh(e),null;case 13:return Rv(n,e,t);case 4:return Wf(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=$s(e,null,i,t):nn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Cp(n,e,i,r,t);case 7:return nn(n,e,e.pendingProps,t),e.child;case 8:return nn(n,e,e.pendingProps.children,t),e.child;case 12:return nn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,lt(ec,i._currentValue),i._currentValue=o,s!==null)if(ri(s.value,o)){if(s.children===r.children&&!gn.current){e=Ni(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ci(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Ih(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(he(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Ih(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Bs(e,t),r=Wn(r),i=i(r),e.flags|=1,nn(n,e,i,t),e.child;case 14:return i=e.type,r=Kn(i,e.pendingProps),r=Kn(i.type,r),bp(n,e,i,r,t);case 15:return Tv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Nl(n,e),e.tag=1,vn(i)?(n=!0,Jl(e)):n=!1,Bs(e,t),Mv(e,i,r),Fh(e,i,r,t),kh(null,e,i,!0,n,t);case 19:return Pv(n,e,t);case 22:return Av(n,e,t)}throw Error(he(156,e.tag))};function jv(n,e){return xg(n,e)}function MS(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(n,e,t,i){return new MS(n,e,t,i)}function sd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ES(n){if(typeof n=="function")return sd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===wf)return 11;if(n===Tf)return 14}return 2}function ir(n,e){var t=n.alternate;return t===null?(t=Bn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Fl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")sd(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case _s:return zr(t.children,r,s,e);case Ef:o=8,r|=8;break;case oh:return n=Bn(12,t,e,r|2),n.elementType=oh,n.lanes=s,n;case ah:return n=Bn(13,t,e,r),n.elementType=ah,n.lanes=s,n;case lh:return n=Bn(19,t,e,r),n.elementType=lh,n.lanes=s,n;case ng:return Lc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case eg:o=10;break e;case tg:o=9;break e;case wf:o=11;break e;case Tf:o=14;break e;case Gi:o=16,i=null;break e}throw Error(he(130,n==null?n:typeof n,""))}return e=Bn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function zr(n,e,t,i){return n=Bn(7,n,i,e),n.lanes=t,n}function Lc(n,e,t,i){return n=Bn(22,n,i,e),n.elementType=ng,n.lanes=t,n.stateNode={isHidden:!1},n}function gu(n,e,t){return n=Bn(6,n,null,e),n.lanes=t,n}function vu(n,e,t){return e=Bn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function wS(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jc(0),this.expirationTimes=Jc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function od(n,e,t,i,r,s,o,a,l){return n=new wS(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vf(s),n}function TS(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function qv(n){if(!n)return cr;n=n._reactInternals;e:{if(Yr(n)!==n||n.tag!==1)throw Error(he(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(he(171))}if(n.tag===1){var t=n.type;if(vn(t))return qg(n,t,e)}return e}function $v(n,e,t,i,r,s,o,a,l){return n=od(t,i,!0,n,r,s,o,a,l),n.context=qv(null),t=n.current,i=sn(),r=nr(t),s=Ci(i,r),s.callback=e??null,er(t,s,r),n.current.lanes=r,ya(n,r,i),_n(n,i),n}function Dc(n,e,t,i){var r=e.current,s=sn(),o=nr(r);return t=qv(t),e.context===null?e.context=t:e.pendingContext=t,e=Ci(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=er(r,e,o),n!==null&&(ii(n,r,o,s),Pl(n,r,o)),o}function uc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Bp(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function ad(n,e){Bp(n,e),(n=n.alternate)&&Bp(n,e)}function AS(){return null}var Yv=typeof reportError=="function"?reportError:function(n){console.error(n)};function ld(n){this._internalRoot=n}Nc.prototype.render=ld.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(he(409));Dc(n,e,null,null)};Nc.prototype.unmount=ld.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;jr(function(){Dc(null,n,null,null)}),e[Li]=null}};function Nc(n){this._internalRoot=n}Nc.prototype.unstable_scheduleHydration=function(n){if(n){var e=Ag();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Wi.length&&e!==0&&e<Wi[t].priority;t++);Wi.splice(t,0,n),t===0&&bg(n)}};function cd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ic(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Hp(){}function CS(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=uc(o);s.call(c)}}var o=$v(e,i,n,0,null,!1,!1,"",Hp);return n._reactRootContainer=o,n[Li]=o.current,ia(n.nodeType===8?n.parentNode:n),jr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=uc(l);a.call(c)}}var l=od(n,0,!1,null,null,!1,!1,"",Hp);return n._reactRootContainer=l,n[Li]=l.current,ia(n.nodeType===8?n.parentNode:n),jr(function(){Dc(e,l,t,i)}),l}function Uc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=uc(o);a.call(l)}}Dc(e,o,n,r)}else o=CS(t,e,n,r,i);return uc(o)}wg=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Lo(e.pendingLanes);t!==0&&(bf(e,t|1),_n(e,Mt()),!(Ze&6)&&(Js=Mt()+500,pr()))}break;case 13:jr(function(){var i=Di(n,1);if(i!==null){var r=sn();ii(i,n,1,r)}}),ad(n,1)}};Rf=function(n){if(n.tag===13){var e=Di(n,134217728);if(e!==null){var t=sn();ii(e,n,134217728,t)}ad(n,134217728)}};Tg=function(n){if(n.tag===13){var e=nr(n),t=Di(n,e);if(t!==null){var i=sn();ii(t,n,e,i)}ad(n,e)}};Ag=function(){return nt};Cg=function(n,e){var t=nt;try{return nt=n,e()}finally{nt=t}};_h=function(n,e,t){switch(e){case"input":if(hh(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Tc(i);if(!r)throw Error(he(90));rg(i),hh(i,r)}}}break;case"textarea":og(n,t);break;case"select":e=t.value,e!=null&&Fs(n,!!t.multiple,e,!1)}};dg=nd;pg=jr;var bS={usingClientEntryPoint:!1,Events:[Ma,Ms,Tc,hg,fg,nd]},xo={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},RS={bundleType:xo.bundleType,version:xo.version,rendererPackageName:xo.rendererPackageName,rendererConfig:xo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=vg(n),n===null?null:n.stateNode},findFiberByHostInstance:xo.findFiberByHostInstance||AS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wa.isDisabled&&Wa.supportsFiber)try{Sc=Wa.inject(RS),hi=Wa}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bS;Cn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cd(e))throw Error(he(200));return TS(n,e,null,t)};Cn.createRoot=function(n,e){if(!cd(n))throw Error(he(299));var t=!1,i="",r=Yv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=od(n,1,!1,null,null,t,!1,i,r),n[Li]=e.current,ia(n.nodeType===8?n.parentNode:n),new ld(e)};Cn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(he(188)):(n=Object.keys(n).join(","),Error(he(268,n)));return n=vg(e),n=n===null?null:n.stateNode,n};Cn.flushSync=function(n){return jr(n)};Cn.hydrate=function(n,e,t){if(!Ic(e))throw Error(he(200));return Uc(null,n,e,!0,t)};Cn.hydrateRoot=function(n,e,t){if(!cd(n))throw Error(he(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Yv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=$v(e,null,n,1,t??null,r,!1,s,o),n[Li]=e.current,ia(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Nc(e)};Cn.render=function(n,e,t){if(!Ic(e))throw Error(he(200));return Uc(null,n,e,!1,t)};Cn.unmountComponentAtNode=function(n){if(!Ic(n))throw Error(he(40));return n._reactRootContainer?(jr(function(){Uc(null,null,n,!1,function(){n._reactRootContainer=null,n[Li]=null})}),!0):!1};Cn.unstable_batchedUpdates=nd;Cn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Ic(t))throw Error(he(200));if(n==null||n._reactInternals===void 0)throw Error(he(38));return Uc(n,e,t,!1,i)};Cn.version="18.3.1-next-f1338f8080-20240426";function Kv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kv)}catch(n){console.error(n)}}Kv(),K0.exports=Cn;var PS=K0.exports,Jv,Gp=PS;Jv=Gp.createRoot,Gp.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ud="160",LS=0,Vp=1,DS=2,Qv=1,Zv=2,Si=3,ur=0,on=1,dn=2,bi=0,Gs=1,Jh=2,Wp=3,Xp=4,NS=5,br=100,IS=101,US=102,jp=103,qp=104,FS=200,OS=201,zS=202,kS=203,Qh=204,Zh=205,BS=206,HS=207,GS=208,VS=209,WS=210,XS=211,jS=212,qS=213,$S=214,YS=0,KS=1,JS=2,hc=3,QS=4,ZS=5,eM=6,tM=7,hd=0,nM=1,iM=2,rr=0,e_=1,t_=2,n_=3,fd=4,rM=5,i_=6,r_=300,Qs=301,Zs=302,ef=303,tf=304,Fc=306,fc=1e3,Zn=1001,nf=1002,rn=1003,$p=1004,_u=1005,Un=1006,sM=1007,fa=1008,sr=1009,oM=1010,aM=1011,dd=1012,s_=1013,$i=1014,Yi=1015,di=1016,o_=1017,a_=1018,kr=1020,lM=1021,ei=1023,cM=1024,uM=1025,Br=1026,eo=1027,hM=1028,l_=1029,fM=1030,c_=1031,u_=1033,xu=33776,yu=33777,Su=33778,Mu=33779,Yp=35840,Kp=35841,Jp=35842,Qp=35843,h_=36196,Zp=37492,em=37496,tm=37808,nm=37809,im=37810,rm=37811,sm=37812,om=37813,am=37814,lm=37815,cm=37816,um=37817,hm=37818,fm=37819,dm=37820,pm=37821,Eu=36492,mm=36494,gm=36495,dM=36283,vm=36284,_m=36285,xm=36286,f_=3e3,Hr=3001,pM=3200,mM=3201,pd=0,gM=1,zn="",Ot="srgb",Ii="srgb-linear",md="display-p3",Oc="display-p3-linear",dc="linear",at="srgb",pc="rec709",mc="p3",Zr=7680,ym=519,vM=512,_M=513,xM=514,d_=515,yM=516,SM=517,MM=518,EM=519,Sm=35044,Mm="300 es",rf=1035,Ai=2e3,gc=2001;class oo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ol=Math.PI/180,sf=180/Math.PI;function ao(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function Gt(n,e,t){return Math.max(e,Math.min(t,n))}function wM(n,e){return(n%e+e)%e}function wu(n,e,t){return(1-t)*n+t*e}function Em(n){return(n&n-1)===0&&n!==0}function of(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function yo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function cn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,i,r,s,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],v=i[8],x=r[0],m=r[3],f=r[6],_=r[1],g=r[4],y=r[7],R=r[2],E=r[5],A=r[8];return s[0]=o*x+a*_+l*R,s[3]=o*m+a*g+l*E,s[6]=o*f+a*y+l*A,s[1]=c*x+u*_+h*R,s[4]=c*m+u*g+h*E,s[7]=c*f+u*y+h*A,s[2]=d*x+p*_+v*R,s[5]=d*m+p*g+v*E,s[8]=d*f+p*y+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,v=t*h+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=h*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Tu.makeScale(e,t)),this}rotate(e){return this.premultiply(Tu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tu=new Ye;function p_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function vc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function TM(){const n=vc("canvas");return n.style.display="block",n}const wm={};function Vo(n){n in wm||(wm[n]=!0,console.warn(n))}const Tm=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Am=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xa={[Ii]:{transfer:dc,primaries:pc,toReference:n=>n,fromReference:n=>n},[Ot]:{transfer:at,primaries:pc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Oc]:{transfer:dc,primaries:mc,toReference:n=>n.applyMatrix3(Am),fromReference:n=>n.applyMatrix3(Tm)},[md]:{transfer:at,primaries:mc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Am),fromReference:n=>n.applyMatrix3(Tm).convertLinearToSRGB()}},AM=new Set([Ii,Oc]),tt={enabled:!0,_workingColorSpace:Ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!AM.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Xa[e].toReference,r=Xa[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Xa[n].primaries},getTransfer:function(n){return n===zn?dc:Xa[n].transfer}};function Vs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Au(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let es;class m_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{es===void 0&&(es=vc("canvas")),es.width=e.width,es.height=e.height;const i=es.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vs(t[i]/255)*255):t[i]=Vs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let CM=0;class g_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=ao(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Cu(r[o].image)):s.push(Cu(r[o]))}else s=Cu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Cu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?m_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bM=0;class xn extends oo{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,i=Zn,r=Zn,s=Un,o=fa,a=ei,l=sr,c=xn.DEFAULT_ANISOTROPY,u=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=ao(),this.name="",this.source=new g_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Vo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Hr?Ot:zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==r_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fc:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case nf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fc:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case nf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Vo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ot?Hr:f_}set encoding(e){Vo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hr?Ot:zn}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=r_;xn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,i=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],v=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(c+1)/2,y=(p+1)/2,R=(f+1)/2,E=(u+d)/4,A=(h+x)/4,D=(v+m)/4;return g>y&&g>R?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=E/i,s=A/i):y>R?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=E/r,s=D/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=D/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-v)*(m-v)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(h-x)/_,this.z=(d-u)/_,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RM extends oo{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Vo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Hr?Ot:zn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new g_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends RM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class v_ extends xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class PM extends xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wa{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=v,e[t+3]=x;return}if(h!==x||l!==d||c!==p||u!==v){let m=1-a;const f=l*d+c*p+u*v+h*x,_=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const R=Math.sqrt(g),E=Math.atan2(R,f*_);m=Math.sin(m*E)/R,a=Math.sin(a*E)/R}const y=a*_;if(l=l*m+d*y,c=c*m+p*y,u=u*m+v*y,h=h*m+x*y,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+u*h+l*p-c*d,e[t+1]=l*v+u*d+c*h-a*p,e[t+2]=c*v+u*p+a*d-l*h,e[t+3]=u*v-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h-d*p*v;break;case"YXZ":this._x=d*u*h+c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h+d*p*v;break;case"ZXY":this._x=d*u*h-c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h-d*p*v;break;case"ZYX":this._x=d*u*h-c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h+d*p*v;break;case"YZX":this._x=d*u*h+c*p*v,this._y=c*p*h+d*u*v,this._z=c*u*v-d*p*h,this._w=c*u*h-d*p*v;break;case"XZY":this._x=d*u*h-c*p*v,this._y=c*p*h-d*u*v,this._z=c*u*v+d*p*h,this._w=c*u*h+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bu.copy(this).projectOnVector(e),this.sub(bu)}reflect(e){return this.sub(bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bu=new F,Cm=new wa;class Kr{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(s,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ja.copy(i.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(So),qa.subVectors(this.max,So),ts.subVectors(e.a,So),ns.subVectors(e.b,So),is.subVectors(e.c,So),Oi.subVectors(ns,ts),zi.subVectors(is,ns),_r.subVectors(ts,is);let t=[0,-Oi.z,Oi.y,0,-zi.z,zi.y,0,-_r.z,_r.y,Oi.z,0,-Oi.x,zi.z,0,-zi.x,_r.z,0,-_r.x,-Oi.y,Oi.x,0,-zi.y,zi.x,0,-_r.y,_r.x,0];return!Ru(t,ts,ns,is,qa)||(t=[1,0,0,0,1,0,0,0,1],!Ru(t,ts,ns,is,qa))?!1:($a.crossVectors(Oi,zi),t=[$a.x,$a.y,$a.z],Ru(t,ts,ns,is,qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new F,new F,new F,new F,new F,new F,new F,new F],qn=new F,ja=new Kr,ts=new F,ns=new F,is=new F,Oi=new F,zi=new F,_r=new F,So=new F,qa=new F,$a=new F,xr=new F;function Ru(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){xr.fromArray(n,s);const a=r.x*Math.abs(xr.x)+r.y*Math.abs(xr.y)+r.z*Math.abs(xr.z),l=e.dot(xr),c=t.dot(xr),u=i.dot(xr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const LM=new Kr,Mo=new F,Pu=new F;class Jr{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):LM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mo.subVectors(e,this.center);const t=Mo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Mo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mo.copy(e.center).add(Pu)),this.expandByPoint(Mo.copy(e.center).sub(Pu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vi=new F,Lu=new F,Ya=new F,ki=new F,Du=new F,Ka=new F,Nu=new F;class gd{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Lu.copy(e).add(t).multiplyScalar(.5),Ya.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(Lu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ya),a=ki.dot(this.direction),l=-ki.dot(Ya),c=ki.lengthSq(),u=Math.abs(1-o*o);let h,d,p,v;if(u>0)if(h=o*l-a,d=o*a-l,v=s*u,h>=0)if(d>=-v)if(d<=v){const x=1/u;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Lu).addScaledVector(Ya,d),p}intersectSphere(e,t){vi.subVectors(e.center,this.origin);const i=vi.dot(this.direction),r=vi.dot(vi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,i,r,s){Du.subVectors(t,e),Ka.subVectors(i,e),Nu.crossVectors(Du,Ka);let o=this.direction.dot(Nu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);const l=a*this.direction.dot(Ka.crossVectors(ki,Ka));if(l<0)return null;const c=a*this.direction.dot(Du.cross(ki));if(c<0||l+c>o)return null;const u=-a*ki.dot(Nu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,i,r,s,o,a,l,c,u,h,d,p,v,x,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,d,p,v,x,m)}set(e,t,i,r,s,o,a,l,c,u,h,d,p,v,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=v,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/rs.setFromMatrixColumn(e,0).length(),s=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,v=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+v*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,v=c*u,x=c*h;t[0]=d+x*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-v,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,v=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,v=a*u,x=a*h;t[0]=l*u,t[4]=v*c-p,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=v*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+v,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,p=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=p*h-v,t[2]=v*h-p,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(DM,e,NM)}lookAt(e,t,i){const r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Bi.crossVectors(i,Sn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Bi.crossVectors(i,Sn)),Bi.normalize(),Ja.crossVectors(Sn,Bi),r[0]=Bi.x,r[4]=Ja.x,r[8]=Sn.x,r[1]=Bi.y,r[5]=Ja.y,r[9]=Sn.y,r[2]=Bi.z,r[6]=Ja.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],v=i[2],x=i[6],m=i[10],f=i[14],_=i[3],g=i[7],y=i[11],R=i[15],E=r[0],A=r[4],D=r[8],S=r[12],T=r[1],k=r[5],P=r[9],W=r[13],b=r[2],N=r[6],B=r[10],J=r[14],I=r[3],O=r[7],H=r[11],Y=r[15];return s[0]=o*E+a*T+l*b+c*I,s[4]=o*A+a*k+l*N+c*O,s[8]=o*D+a*P+l*B+c*H,s[12]=o*S+a*W+l*J+c*Y,s[1]=u*E+h*T+d*b+p*I,s[5]=u*A+h*k+d*N+p*O,s[9]=u*D+h*P+d*B+p*H,s[13]=u*S+h*W+d*J+p*Y,s[2]=v*E+x*T+m*b+f*I,s[6]=v*A+x*k+m*N+f*O,s[10]=v*D+x*P+m*B+f*H,s[14]=v*S+x*W+m*J+f*Y,s[3]=_*E+g*T+y*b+R*I,s[7]=_*A+g*k+y*N+R*O,s[11]=_*D+g*P+y*B+R*H,s[15]=_*S+g*W+y*J+R*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],v=e[3],x=e[7],m=e[11],f=e[15];return v*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*p-i*l*p)+x*(+t*l*p-t*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-t*l*h+t*a*d+r*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],v=e[12],x=e[13],m=e[14],f=e[15],_=h*m*c-x*d*c+x*l*p-a*m*p-h*l*f+a*d*f,g=v*d*c-u*m*c-v*l*p+o*m*p+u*l*f-o*d*f,y=u*x*c-v*h*c+v*a*p-o*x*p-u*a*f+o*h*f,R=v*h*l-u*x*l-v*a*d+o*x*d+u*a*m-o*h*m,E=t*_+i*g+r*y+s*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=_*A,e[1]=(x*d*s-h*m*s-x*r*p+i*m*p+h*r*f-i*d*f)*A,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*f+i*l*f)*A,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*p-i*l*p)*A,e[4]=g*A,e[5]=(u*m*s-v*d*s+v*r*p-t*m*p-u*r*f+t*d*f)*A,e[6]=(v*l*s-o*m*s-v*r*c+t*m*c+o*r*f-t*l*f)*A,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*p+t*l*p)*A,e[8]=y*A,e[9]=(v*h*s-u*x*s-v*i*p+t*x*p+u*i*f-t*h*f)*A,e[10]=(o*x*s-v*a*s+v*i*c-t*x*c-o*i*f+t*a*f)*A,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*p-t*a*p)*A,e[12]=R*A,e[13]=(u*x*r-v*h*r+v*i*d-t*x*d-u*i*m+t*h*m)*A,e[14]=(v*a*r-o*x*r-v*i*l+t*x*l+o*i*m-t*a*m)*A,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*d+t*a*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,v=s*h,x=o*u,m=o*h,f=a*h,_=l*c,g=l*u,y=l*h,R=i.x,E=i.y,A=i.z;return r[0]=(1-(x+f))*R,r[1]=(p+y)*R,r[2]=(v-g)*R,r[3]=0,r[4]=(p-y)*E,r[5]=(1-(d+f))*E,r[6]=(m+_)*E,r[7]=0,r[8]=(v+g)*A,r[9]=(m-_)*A,r[10]=(1-(d+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=rs.set(r[0],r[1],r[2]).length();const o=rs.set(r[4],r[5],r[6]).length(),a=rs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$n.copy(this);const c=1/s,u=1/o,h=1/a;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=h,$n.elements[9]*=h,$n.elements[10]*=h,t.setFromRotationMatrix($n),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ai){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let p,v;if(a===Ai)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===gc)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ai){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),d=(t+e)*c,p=(i+r)*u;let v,x;if(a===Ai)v=(o+s)*h,x=-2*h;else if(a===gc)v=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const rs=new F,$n=new ft,DM=new F(0,0,0),NM=new F(1,1,1),Bi=new F,Ja=new F,Sn=new F,bm=new ft,Rm=new wa;class zc{constructor(e=0,t=0,i=0,r=zc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rm.setFromEuler(this),this.setFromQuaternion(Rm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zc.DEFAULT_ORDER="XYZ";class __{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let IM=0;const Pm=new F,ss=new wa,_i=new ft,Qa=new F,Eo=new F,UM=new F,FM=new wa,Lm=new F(1,0,0),Dm=new F(0,1,0),Nm=new F(0,0,1),OM={type:"added"},zM={type:"removed"};class Tt extends oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new F,t=new zc,i=new wa,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Ye}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new __,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Lm,e)}rotateY(e){return this.rotateOnAxis(Dm,e)}rotateZ(e){return this.rotateOnAxis(Nm,e)}translateOnAxis(e,t){return Pm.copy(e).applyQuaternion(this.quaternion),this.position.add(Pm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lm,e)}translateY(e){return this.translateOnAxis(Dm,e)}translateZ(e){return this.translateOnAxis(Nm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qa.copy(e):Qa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Eo,Qa,this.up):_i.lookAt(Qa,Eo,this.up),this.quaternion.setFromRotationMatrix(_i),r&&(_i.extractRotation(r.matrixWorld),ss.setFromRotationMatrix(_i),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(OM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,e,UM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,FM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new F(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new F,xi=new F,Iu=new F,yi=new F,os=new F,as=new F,Im=new F,Uu=new F,Fu=new F,Ou=new F;let Za=!1;class Fn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Yn.subVectors(e,t),r.cross(Yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Yn.subVectors(r,t),xi.subVectors(i,t),Iu.subVectors(e,t);const o=Yn.dot(Yn),a=Yn.dot(xi),l=Yn.dot(Iu),c=xi.dot(xi),u=xi.dot(Iu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,v=(o*u-a*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getUV(e,t,i,r,s,o,a,l){return Za===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Za=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(o,yi.y),l.addScaledVector(a,yi.z),l)}static isFrontFacing(e,t,i,r){return Yn.subVectors(i,t),xi.subVectors(e,t),Yn.cross(xi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Yn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Za===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Za=!0),Fn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Fn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;os.subVectors(r,i),as.subVectors(s,i),Uu.subVectors(e,i);const l=os.dot(Uu),c=as.dot(Uu);if(l<=0&&c<=0)return t.copy(i);Fu.subVectors(e,r);const u=os.dot(Fu),h=as.dot(Fu);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(os,o);Ou.subVectors(e,s);const p=os.dot(Ou),v=as.dot(Ou);if(v>=0&&p<=v)return t.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(as,a);const m=u*v-p*h;if(m<=0&&h-u>=0&&p-v>=0)return Im.subVectors(s,r),a=(h-u)/(h-u+(p-v)),t.copy(r).addScaledVector(Im,a);const f=1/(m+x+d);return o=x*f,a=d*f,t.copy(i).addScaledVector(os,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const x_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},el={h:0,s:0,l:0};function zu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Be{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=wM(e,1),t=Gt(t,0,1),i=Gt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=zu(o,s,e+1/3),this.g=zu(o,s,e),this.b=zu(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const i=x_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}copyLinearToSRGB(e){return this.r=Au(e.r),this.g=Au(e.g),this.b=Au(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return tt.fromWorkingColorSpace(Yt.copy(this),e),Math.round(Gt(Yt.r*255,0,255))*65536+Math.round(Gt(Yt.g*255,0,255))*256+Math.round(Gt(Yt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Yt.copy(this),t);const i=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Ot){tt.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,i=Yt.g,r=Yt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(el);const i=wu(Hi.h,el.h,t),r=wu(Hi.s,el.s,t),s=wu(Hi.l,el.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Be;Be.NAMES=x_;let kM=0;class mr extends oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=ao(),this.name="",this.type="Material",this.blending=Gs,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qh,this.blendDst=Zh,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=hc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ym,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(i.blending=this.blending),this.side!==ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qh&&(i.blendSrc=this.blendSrc),this.blendDst!==Zh&&(i.blendDst=this.blendDst),this.blendEquation!==br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ym&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class It extends mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new F,tl=new ue;class Vn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)tl.fromBufferAttribute(this,t),tl.applyMatrix3(e),this.setXY(t,tl.x,tl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=yo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yo(t,this.array)),t}setX(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yo(t,this.array)),t}setY(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yo(t,this.array)),t}setW(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sm&&(e.usage=this.usage),e}}class y_ extends Vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class S_ extends Vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Je extends Vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let BM=0;const Pn=new ft,ku=new Tt,ls=new F,Mn=new Kr,wo=new Kr,Nt=new F;class At extends oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=ao(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(p_(e)?S_:y_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,i){return Pn.makeTranslation(e,t,i),this.applyMatrix4(Pn),this}scale(e,t,i){return Pn.makeScale(e,t,i),this.applyMatrix4(Pn),this}lookAt(e){return ku.lookAt(e),ku.updateMatrix(),this.applyMatrix4(ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Je(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];wo.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(Mn.min,wo.min),Mn.expandByPoint(Nt),Nt.addVectors(Mn.max,wo.max),Mn.expandByPoint(Nt)):(Mn.expandByPoint(wo.min),Mn.expandByPoint(wo.max))}Mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Nt.fromBufferAttribute(a,c),l&&(ls.fromBufferAttribute(e,c),Nt.add(ls)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new F,u[T]=new F;const h=new F,d=new F,p=new F,v=new ue,x=new ue,m=new ue,f=new F,_=new F;function g(T,k,P){h.fromArray(r,T*3),d.fromArray(r,k*3),p.fromArray(r,P*3),v.fromArray(o,T*2),x.fromArray(o,k*2),m.fromArray(o,P*2),d.sub(h),p.sub(h),x.sub(v),m.sub(v);const W=1/(x.x*m.y-m.x*x.y);isFinite(W)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(W),_.copy(p).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(W),c[T].add(f),c[k].add(f),c[P].add(f),u[T].add(_),u[k].add(_),u[P].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let T=0,k=y.length;T<k;++T){const P=y[T],W=P.start,b=P.count;for(let N=W,B=W+b;N<B;N+=3)g(i[N+0],i[N+1],i[N+2])}const R=new F,E=new F,A=new F,D=new F;function S(T){A.fromArray(s,T*3),D.copy(A);const k=c[T];R.copy(k),R.sub(A.multiplyScalar(A.dot(k))).normalize(),E.crossVectors(D,k);const W=E.dot(u[T])<0?-1:1;l[T*4]=R.x,l[T*4+1]=R.y,l[T*4+2]=R.z,l[T*4+3]=W}for(let T=0,k=y.length;T<k;++T){const P=y[T],W=P.start,b=P.count;for(let N=W,B=W+b;N<B;N+=3)S(i[N+0]),S(i[N+1]),S(i[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let f=0;f<u;f++)d[v++]=c[p++]}return new Vn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Um=new ft,yr=new gd,nl=new Jr,Fm=new F,cs=new F,us=new F,hs=new F,Bu=new F,il=new F,rl=new ue,sl=new ue,ol=new ue,Om=new F,zm=new F,km=new F,al=new F,ll=new F;class ze extends Tt{constructor(e=new At,t=new It){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){il.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Bu.fromBufferAttribute(h,e),o?il.addScaledVector(Bu,u):il.addScaledVector(Bu.sub(t),u))}t.add(il)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nl.copy(i.boundingSphere),nl.applyMatrix4(s),yr.copy(e.ray).recast(e.near),!(nl.containsPoint(yr.origin)===!1&&(yr.intersectSphere(nl,Fm)===null||yr.origin.distanceToSquared(Fm)>(e.far-e.near)**2))&&(Um.copy(s).invert(),yr.copy(e.ray).applyMatrix4(Um),!(i.boundingBox!==null&&yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],f=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,R=g;y<R;y+=3){const E=a.getX(y),A=a.getX(y+1),D=a.getX(y+2);r=cl(this,f,e,i,c,u,h,E,A,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,f=x;m<f;m+=3){const _=a.getX(m),g=a.getX(m+1),y=a.getX(m+2);r=cl(this,o,e,i,c,u,h,_,g,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],f=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,R=g;y<R;y+=3){const E=y,A=y+1,D=y+2;r=cl(this,f,e,i,c,u,h,E,A,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,f=x;m<f;m+=3){const _=m,g=m+1,y=m+2;r=cl(this,o,e,i,c,u,h,_,g,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function HM(n,e,t,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ur,a),l===null)return null;ll.copy(a),ll.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ll);return c<t.near||c>t.far?null:{distance:c,point:ll.clone(),object:n}}function cl(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,cs),n.getVertexPosition(l,us),n.getVertexPosition(c,hs);const u=HM(n,e,t,i,cs,us,hs,al);if(u){r&&(rl.fromBufferAttribute(r,a),sl.fromBufferAttribute(r,l),ol.fromBufferAttribute(r,c),u.uv=Fn.getInterpolation(al,cs,us,hs,rl,sl,ol,new ue)),s&&(rl.fromBufferAttribute(s,a),sl.fromBufferAttribute(s,l),ol.fromBufferAttribute(s,c),u.uv1=Fn.getInterpolation(al,cs,us,hs,rl,sl,ol,new ue),u.uv2=u.uv1),o&&(Om.fromBufferAttribute(o,a),zm.fromBufferAttribute(o,l),km.fromBufferAttribute(o,c),u.normal=Fn.getInterpolation(al,cs,us,hs,Om,zm,km,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new F,materialIndex:0};Fn.getNormal(cs,us,hs,h.normal),u.face=h}return u}class hr extends At{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(h,2));function v(x,m,f,_,g,y,R,E,A,D,S){const T=y/A,k=R/D,P=y/2,W=R/2,b=E/2,N=A+1,B=D+1;let J=0,I=0;const O=new F;for(let H=0;H<B;H++){const Y=H*k-W;for(let oe=0;oe<N;oe++){const X=oe*T-P;O[x]=X*_,O[m]=Y*g,O[f]=b,c.push(O.x,O.y,O.z),O[x]=0,O[m]=0,O[f]=E>0?1:-1,u.push(O.x,O.y,O.z),h.push(oe/A),h.push(1-H/D),J+=1}}for(let H=0;H<D;H++)for(let Y=0;Y<A;Y++){const oe=d+Y+N*H,X=d+Y+N*(H+1),ie=d+(Y+1)+N*(H+1),j=d+(Y+1)+N*H;l.push(oe,X,j),l.push(X,ie,j),I+=6}a.addGroup(p,I,S),p+=I,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function to(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function tn(n){const e={};for(let t=0;t<n.length;t++){const i=to(n[t]);for(const r in i)e[r]=i[r]}return e}function GM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function M_(n){return n.getRenderTarget()===null?n.outputColorSpace:tt.workingColorSpace}const da={clone:to,merge:tn};var VM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mn extends mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VM,this.fragmentShader=WM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=GM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class E_ extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class On extends E_{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ol*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sf*2*Math.atan(Math.tan(Ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ol*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fs=-90,ds=1;class w_ extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new On(fs,ds,e,t);r.layers=this.layers,this.add(r);const s=new On(fs,ds,e,t);s.layers=this.layers,this.add(s);const o=new On(fs,ds,e,t);o.layers=this.layers,this.add(o);const a=new On(fs,ds,e,t);a.layers=this.layers,this.add(a);const l=new On(fs,ds,e,t);l.layers=this.layers,this.add(l);const c=new On(fs,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class T_ extends xn{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Qs,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class A_ extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Vo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Hr?Ot:zn),this.texture=new T_(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hr(5,5,5),s=new mn({name:"CubemapFromEquirect",uniforms:to(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:bi});s.uniforms.tEquirect.value=t;const o=new ze(r,s),a=t.minFilter;return t.minFilter===fa&&(t.minFilter=Un),new w_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Hu=new F,XM=new F,jM=new Ye;class Ar{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Hu.subVectors(i,t).cross(XM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Hu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jM.getNormalMatrix(e),r=this.coplanarPoint(Hu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new Jr,ul=new F;class vd{constructor(e=new Ar,t=new Ar,i=new Ar,r=new Ar,s=new Ar,o=new Ar){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ai){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],p=r[8],v=r[9],x=r[10],m=r[11],f=r[12],_=r[13],g=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,m-p,y-f).normalize(),i[1].setComponents(l+s,d+c,m+p,y+f).normalize(),i[2].setComponents(l+o,d+u,m+v,y+_).normalize(),i[3].setComponents(l-o,d-u,m-v,y-_).normalize(),i[4].setComponents(l-a,d-h,m-x,y-g).normalize(),t===Ai)i[5].setComponents(l+a,d+h,m+x,y+g).normalize();else if(t===gc)i[5].setComponents(a,h,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ul.x=r.normal.x>0?e.max.x:e.min.x,ul.y=r.normal.y>0?e.max.y:e.min.y,ul.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ul)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function C_(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function qM(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,d=c.usage,p=h.byteLength,v=n.createBuffer();n.bindBuffer(u,v),n.bufferData(u,h,d),c.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,h){const d=u.array,p=u._updateRange,v=u.updateRanges;if(n.bindBuffer(h,c),p.count===-1&&v.length===0&&n.bufferSubData(h,0,d),v.length!==0){for(let x=0,m=v.length;x<m;x++){const f=v[x];t?n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class Kt extends At{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,p=[],v=[],x=[],m=[];for(let f=0;f<u;f++){const _=f*d-o;for(let g=0;g<c;g++){const y=g*h-s;v.push(y,-_,0),x.push(0,0,1),m.push(g/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const g=_+c*f,y=_+c*(f+1),R=_+1+c*(f+1),E=_+1+c*f;p.push(g,y,E),p.push(y,R,E)}this.setIndex(p),this.setAttribute("position",new Je(v,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kt(e.width,e.height,e.widthSegments,e.heightSegments)}}var $M=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YM=`#ifdef USE_ALPHAHASH
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
#endif`,KM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,JM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ZM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e1=`#ifdef USE_AOMAP
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
#endif`,t1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n1=`#ifdef USE_BATCHING
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
#endif`,i1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,r1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a1=`#ifdef USE_IRIDESCENCE
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
#endif`,l1=`#ifdef USE_BUMPMAP
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
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,p1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,m1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,g1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,v1=`#define PI 3.141592653589793
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
} // validated`,_1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,x1=`vec3 transformedNormal = objectNormal;
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
#endif`,y1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w1="gl_FragColor = linearToOutputTexel( gl_FragColor );",T1=`
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
}`,A1=`#ifdef USE_ENVMAP
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
#endif`,C1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,b1=`#ifdef USE_ENVMAP
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
#endif`,R1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P1=`#ifdef USE_ENVMAP
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
#endif`,L1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U1=`#ifdef USE_GRADIENTMAP
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
}`,F1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,O1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B1=`uniform bool receiveShadow;
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
#endif`,H1=`#ifdef USE_ENVMAP
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
#endif`,G1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j1=`PhysicalMaterial material;
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
#endif`,q1=`struct PhysicalMaterial {
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
}`,$1=`
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
#endif`,Y1=`#if defined( RE_IndirectDiffuse )
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
#endif`,K1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,eE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rE=`#if defined( USE_POINTS_UV )
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
#endif`,sE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lE=`#ifdef USE_MORPHNORMALS
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
#endif`,cE=`#ifdef USE_MORPHTARGETS
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
#endif`,uE=`#ifdef USE_MORPHTARGETS
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
#endif`,hE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gE=`#ifdef USE_NORMALMAP
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
#endif`,vE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_E=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ME=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,EE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,LE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,DE=`float getShadowMask() {
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
}`,NE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IE=`#ifdef USE_SKINNING
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
#endif`,UE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FE=`#ifdef USE_SKINNING
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
#endif`,OE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,HE=`#ifdef USE_TRANSMISSION
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
#endif`,GE=`#ifdef USE_TRANSMISSION
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
#endif`,VE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$E=`uniform sampler2D t2D;
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
}`,YE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZE=`#include <common>
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
}`,ew=`#if DEPTH_PACKING == 3200
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
}`,tw=`#define DISTANCE
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
}`,nw=`#define DISTANCE
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
}`,iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sw=`uniform float scale;
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
}`,ow=`uniform vec3 diffuse;
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
}`,aw=`#include <common>
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
}`,lw=`uniform vec3 diffuse;
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
}`,cw=`#define LAMBERT
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
}`,uw=`#define LAMBERT
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
}`,hw=`#define MATCAP
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
}`,fw=`#define MATCAP
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
}`,dw=`#define NORMAL
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
}`,pw=`#define NORMAL
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
}`,mw=`#define PHONG
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
}`,gw=`#define PHONG
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
}`,vw=`#define STANDARD
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
}`,_w=`#define STANDARD
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
}`,xw=`#define TOON
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
}`,yw=`#define TOON
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
}`,Sw=`uniform float size;
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
}`,Mw=`uniform vec3 diffuse;
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
}`,Ew=`#include <common>
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
}`,ww=`uniform vec3 color;
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
}`,Tw=`uniform float rotation;
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
}`,Aw=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:$M,alphahash_pars_fragment:YM,alphamap_fragment:KM,alphamap_pars_fragment:JM,alphatest_fragment:QM,alphatest_pars_fragment:ZM,aomap_fragment:e1,aomap_pars_fragment:t1,batching_pars_vertex:n1,batching_vertex:i1,begin_vertex:r1,beginnormal_vertex:s1,bsdfs:o1,iridescence_fragment:a1,bumpmap_pars_fragment:l1,clipping_planes_fragment:c1,clipping_planes_pars_fragment:u1,clipping_planes_pars_vertex:h1,clipping_planes_vertex:f1,color_fragment:d1,color_pars_fragment:p1,color_pars_vertex:m1,color_vertex:g1,common:v1,cube_uv_reflection_fragment:_1,defaultnormal_vertex:x1,displacementmap_pars_vertex:y1,displacementmap_vertex:S1,emissivemap_fragment:M1,emissivemap_pars_fragment:E1,colorspace_fragment:w1,colorspace_pars_fragment:T1,envmap_fragment:A1,envmap_common_pars_fragment:C1,envmap_pars_fragment:b1,envmap_pars_vertex:R1,envmap_physical_pars_fragment:H1,envmap_vertex:P1,fog_vertex:L1,fog_pars_vertex:D1,fog_fragment:N1,fog_pars_fragment:I1,gradientmap_pars_fragment:U1,lightmap_fragment:F1,lightmap_pars_fragment:O1,lights_lambert_fragment:z1,lights_lambert_pars_fragment:k1,lights_pars_begin:B1,lights_toon_fragment:G1,lights_toon_pars_fragment:V1,lights_phong_fragment:W1,lights_phong_pars_fragment:X1,lights_physical_fragment:j1,lights_physical_pars_fragment:q1,lights_fragment_begin:$1,lights_fragment_maps:Y1,lights_fragment_end:K1,logdepthbuf_fragment:J1,logdepthbuf_pars_fragment:Q1,logdepthbuf_pars_vertex:Z1,logdepthbuf_vertex:eE,map_fragment:tE,map_pars_fragment:nE,map_particle_fragment:iE,map_particle_pars_fragment:rE,metalnessmap_fragment:sE,metalnessmap_pars_fragment:oE,morphcolor_vertex:aE,morphnormal_vertex:lE,morphtarget_pars_vertex:cE,morphtarget_vertex:uE,normal_fragment_begin:hE,normal_fragment_maps:fE,normal_pars_fragment:dE,normal_pars_vertex:pE,normal_vertex:mE,normalmap_pars_fragment:gE,clearcoat_normal_fragment_begin:vE,clearcoat_normal_fragment_maps:_E,clearcoat_pars_fragment:xE,iridescence_pars_fragment:yE,opaque_fragment:SE,packing:ME,premultiplied_alpha_fragment:EE,project_vertex:wE,dithering_fragment:TE,dithering_pars_fragment:AE,roughnessmap_fragment:CE,roughnessmap_pars_fragment:bE,shadowmap_pars_fragment:RE,shadowmap_pars_vertex:PE,shadowmap_vertex:LE,shadowmask_pars_fragment:DE,skinbase_vertex:NE,skinning_pars_vertex:IE,skinning_vertex:UE,skinnormal_vertex:FE,specularmap_fragment:OE,specularmap_pars_fragment:zE,tonemapping_fragment:kE,tonemapping_pars_fragment:BE,transmission_fragment:HE,transmission_pars_fragment:GE,uv_pars_fragment:VE,uv_pars_vertex:WE,uv_vertex:XE,worldpos_vertex:jE,background_vert:qE,background_frag:$E,backgroundCube_vert:YE,backgroundCube_frag:KE,cube_vert:JE,cube_frag:QE,depth_vert:ZE,depth_frag:ew,distanceRGBA_vert:tw,distanceRGBA_frag:nw,equirect_vert:iw,equirect_frag:rw,linedashed_vert:sw,linedashed_frag:ow,meshbasic_vert:aw,meshbasic_frag:lw,meshlambert_vert:cw,meshlambert_frag:uw,meshmatcap_vert:hw,meshmatcap_frag:fw,meshnormal_vert:dw,meshnormal_frag:pw,meshphong_vert:mw,meshphong_frag:gw,meshphysical_vert:vw,meshphysical_frag:_w,meshtoon_vert:xw,meshtoon_frag:yw,points_vert:Sw,points_frag:Mw,shadow_vert:Ew,shadow_frag:ww,sprite_vert:Tw,sprite_frag:Aw},ge={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},li={basic:{uniforms:tn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:tn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Be(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:tn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:tn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:tn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Be(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:tn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:tn([ge.points,ge.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:tn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:tn([ge.common,ge.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:tn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:tn([ge.sprite,ge.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:tn([ge.common,ge.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:tn([ge.lights,ge.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};li.physical={uniforms:tn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const hl={r:0,b:0,g:0};function Cw(n,e,t,i,r,s,o){const a=new Be(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function v(m,f){let _=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?t:e).get(g)),g===null?x(a,l):g&&g.isColor&&(x(g,1),_=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Fc)?(u===void 0&&(u=new ze(new hr(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:to(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=tt.getTransfer(g.colorSpace)!==at,(h!==g||d!==g.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=g,d=g.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new ze(new Kt(2,2),new mn({name:"BackgroundMaterial",uniforms:to(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=tt.getTransfer(g.colorSpace)!==at,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||d!==g.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=g,d=g.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,f){m.getRGB(hl,M_(n)),i.buffers.color.setClear(hl.r,hl.g,hl.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:v}}function bw(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(b,N,B,J,I){let O=!1;if(o){const H=x(J,B,N);c!==H&&(c=H,p(c.object)),O=f(b,J,B,I),O&&_(b,J,B,I)}else{const H=N.wireframe===!0;(c.geometry!==J.id||c.program!==B.id||c.wireframe!==H)&&(c.geometry=J.id,c.program=B.id,c.wireframe=H,O=!0)}I!==null&&t.update(I,n.ELEMENT_ARRAY_BUFFER),(O||u)&&(u=!1,D(b,N,B,J),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(b){return i.isWebGL2?n.bindVertexArray(b):s.bindVertexArrayOES(b)}function v(b){return i.isWebGL2?n.deleteVertexArray(b):s.deleteVertexArrayOES(b)}function x(b,N,B){const J=B.wireframe===!0;let I=a[b.id];I===void 0&&(I={},a[b.id]=I);let O=I[N.id];O===void 0&&(O={},I[N.id]=O);let H=O[J];return H===void 0&&(H=m(d()),O[J]=H),H}function m(b){const N=[],B=[],J=[];for(let I=0;I<r;I++)N[I]=0,B[I]=0,J[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:J,object:b,attributes:{},index:null}}function f(b,N,B,J){const I=c.attributes,O=N.attributes;let H=0;const Y=B.getAttributes();for(const oe in Y)if(Y[oe].location>=0){const ie=I[oe];let j=O[oe];if(j===void 0&&(oe==="instanceMatrix"&&b.instanceMatrix&&(j=b.instanceMatrix),oe==="instanceColor"&&b.instanceColor&&(j=b.instanceColor)),ie===void 0||ie.attribute!==j||j&&ie.data!==j.data)return!0;H++}return c.attributesNum!==H||c.index!==J}function _(b,N,B,J){const I={},O=N.attributes;let H=0;const Y=B.getAttributes();for(const oe in Y)if(Y[oe].location>=0){let ie=O[oe];ie===void 0&&(oe==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),oe==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor));const j={};j.attribute=ie,ie&&ie.data&&(j.data=ie.data),I[oe]=j,H++}c.attributes=I,c.attributesNum=H,c.index=J}function g(){const b=c.newAttributes;for(let N=0,B=b.length;N<B;N++)b[N]=0}function y(b){R(b,0)}function R(b,N){const B=c.newAttributes,J=c.enabledAttributes,I=c.attributeDivisors;B[b]=1,J[b]===0&&(n.enableVertexAttribArray(b),J[b]=1),I[b]!==N&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,N),I[b]=N)}function E(){const b=c.newAttributes,N=c.enabledAttributes;for(let B=0,J=N.length;B<J;B++)N[B]!==b[B]&&(n.disableVertexAttribArray(B),N[B]=0)}function A(b,N,B,J,I,O,H){H===!0?n.vertexAttribIPointer(b,N,B,I,O):n.vertexAttribPointer(b,N,B,J,I,O)}function D(b,N,B,J){if(i.isWebGL2===!1&&(b.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const I=J.attributes,O=B.getAttributes(),H=N.defaultAttributeValues;for(const Y in O){const oe=O[Y];if(oe.location>=0){let X=I[Y];if(X===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(X=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(X=b.instanceColor)),X!==void 0){const ie=X.normalized,j=X.itemSize,ae=t.get(X);if(ae===void 0)continue;const ce=ae.buffer,we=ae.type,Se=ae.bytesPerElement,xe=i.isWebGL2===!0&&(we===n.INT||we===n.UNSIGNED_INT||X.gpuType===s_);if(X.isInterleavedBufferAttribute){const Re=X.data,L=Re.stride,fe=X.offset;if(Re.isInstancedInterleavedBuffer){for(let te=0;te<oe.locationSize;te++)R(oe.location+te,Re.meshPerAttribute);b.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let te=0;te<oe.locationSize;te++)y(oe.location+te);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let te=0;te<oe.locationSize;te++)A(oe.location+te,j/oe.locationSize,we,ie,L*Se,(fe+j/oe.locationSize*te)*Se,xe)}else{if(X.isInstancedBufferAttribute){for(let Re=0;Re<oe.locationSize;Re++)R(oe.location+Re,X.meshPerAttribute);b.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Re=0;Re<oe.locationSize;Re++)y(oe.location+Re);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let Re=0;Re<oe.locationSize;Re++)A(oe.location+Re,j/oe.locationSize,we,ie,j*Se,j/oe.locationSize*Re*Se,xe)}}else if(H!==void 0){const ie=H[Y];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(oe.location,ie);break;case 3:n.vertexAttrib3fv(oe.location,ie);break;case 4:n.vertexAttrib4fv(oe.location,ie);break;default:n.vertexAttrib1fv(oe.location,ie)}}}}E()}function S(){P();for(const b in a){const N=a[b];for(const B in N){const J=N[B];for(const I in J)v(J[I].object),delete J[I];delete N[B]}delete a[b]}}function T(b){if(a[b.id]===void 0)return;const N=a[b.id];for(const B in N){const J=N[B];for(const I in J)v(J[I].object),delete J[I];delete N[B]}delete a[b.id]}function k(b){for(const N in a){const B=a[N];if(B[b.id]===void 0)continue;const J=B[b.id];for(const I in J)v(J[I].object),delete J[I];delete B[b.id]}}function P(){W(),u=!0,c!==l&&(c=l,p(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:P,resetDefaultState:W,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:k,initAttributes:g,enableAttribute:y,disableUnusedAttributes:E}}function Rw(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,h){n.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,d){if(d===0)return;let p,v;if(r)p=n,v="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](s,u,h,d),t.update(h,s,d)}function c(u,h,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<d;v++)this.render(u[v],h[v]);else{p.multiDrawArraysWEBGL(s,u,0,h,0,d);let v=0;for(let x=0;x<d;x++)v+=h[x];t.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Pw(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,y=o||e.has("OES_texture_float"),R=g&&y,E=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:R,maxSamples:E}}function Lw(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ar,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const v=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,g=_*4;let y=f.clippingState||null;l.value=y,y=u(v,d,g,p);for(let R=0;R!==g;++R)y[R]=t[R];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,v){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const f=p+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let g=0,y=p;g!==x;++g,y+=4)o.copy(h[g]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Dw(n){let e=new WeakMap;function t(o,a){return a===ef?o.mapping=Qs:a===tf&&(o.mapping=Zs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ef||a===tf)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new A_(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class _d extends E_{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Rs=4,Bm=[.125,.215,.35,.446,.526,.582],Rr=20,Gu=new _d,Hm=new Be;let Vu=null,Wu=0,Xu=0;const Cr=(1+Math.sqrt(5))/2,ps=1/Cr,Gm=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Cr,ps),new F(0,Cr,-ps),new F(ps,0,Cr),new F(-ps,0,Cr),new F(Cr,ps,0),new F(-Cr,ps,0)];class Vm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Vu=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),Xu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vu,Wu,Xu),e.scissorTest=!1,fl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qs||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vu=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),Xu=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:di,format:ei,colorSpace:Ii,depthBuffer:!1},r=Wm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wm(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nw(s)),this._blurMaterial=Iw(s,e,t)}return r}_compileMaterial(e){const t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,Gu)}_sceneToCubeUV(e,t,i,r){const a=new On(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Hm),u.toneMapping=rr,u.autoClear=!1;const p=new It({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),v=new ze(new hr,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Hm),x=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const g=this._cubeSize;fl(r,_*g,f>2?g:0,g,g),u.setRenderTarget(r),x&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Qs||e.mapping===Zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ze(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;fl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Gu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Gm[(r-1)%Gm.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ze(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Rr-1),x=s/v,m=isFinite(s)?1+Math.floor(u*x):Rr;m>Rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rr}`);const f=[];let _=0;for(let A=0;A<Rr;++A){const D=A/x,S=Math.exp(-D*D/2);f.push(S),A===0?_+=S:A<m&&(_+=2*S)}for(let A=0;A<f.length;A++)f[A]=f[A]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=v,d.mipInt.value=g-i;const y=this._sizeLods[r],R=3*y*(r>g-Rs?r-g+Rs:0),E=4*(this._cubeSize-y);fl(t,R,E,3*y,2*y),l.setRenderTarget(t),l.render(h,Gu)}}function Nw(n){const e=[],t=[],i=[];let r=n;const s=n-Rs+1+Bm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Rs?l=Bm[o-n+Rs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,v=6,x=3,m=2,f=1,_=new Float32Array(x*v*p),g=new Float32Array(m*v*p),y=new Float32Array(f*v*p);for(let E=0;E<p;E++){const A=E%3*2/3-1,D=E>2?0:-1,S=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];_.set(S,x*v*E),g.set(d,m*v*E);const T=[E,E,E,E,E,E];y.set(T,f*v*E)}const R=new At;R.setAttribute("position",new Vn(_,x)),R.setAttribute("uv",new Vn(g,m)),R.setAttribute("faceIndex",new Vn(y,f)),e.push(R),r>Rs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Wm(n,e,t){const i=new Gn(n,e,t);return i.texture.mapping=Fc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Iw(n,e,t){const i=new Float32Array(Rr),r=new F(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xd(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Xm(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xd(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function jm(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function xd(){return`

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
	`}function Uw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ef||l===tf,u=l===Qs||l===Zs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Vm(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Vm(n));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Fw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ow(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const x=p[v];for(let m=0,f=x.length;m<f;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,v=h.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let g=0,y=_.length;g<y;g+=3){const R=_[g+0],E=_[g+1],A=_[g+2];d.push(R,E,E,A,A,R)}}else if(v!==void 0){const _=v.array;x=v.version;for(let g=0,y=_.length/3-1;g<y;g+=3){const R=g+0,E=g+1,A=g+2;d.push(R,E,E,A,A,R)}}else return;const m=new(p_(d)?S_:y_)(d,1);m.version=x;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function zw(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,v){n.drawElements(s,v,a,p*l),t.update(v,s,1)}function h(p,v,x){if(x===0)return;let m,f;if(r)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,v,a,p*l,x),t.update(v,s,x)}function d(p,v,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<x;f++)this.render(p[f]/l,v[f]);else{m.multiDrawElementsWEBGL(s,v,0,a,p,0,x);let f=0;for(let _=0;_<x;_++)f+=v[_];t.update(f,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function kw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Bw(n,e){return n[0]-e[0]}function Hw(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Gw(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new zt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=p!==void 0?p.length:0;let x=s.get(u);if(x===void 0||x.count!==v){let b=function(){P.dispose(),s.delete(u),u.removeEventListener("dispose",b)};x!==void 0&&x.texture.dispose();const _=u.morphAttributes.position!==void 0,g=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let D=0;_===!0&&(D=1),g===!0&&(D=2),y===!0&&(D=3);let S=u.attributes.position.count*D,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const k=new Float32Array(S*T*4*v),P=new v_(k,S,T,v);P.type=Yi,P.needsUpdate=!0;const W=D*4;for(let N=0;N<v;N++){const B=R[N],J=E[N],I=A[N],O=S*T*4*N;for(let H=0;H<B.count;H++){const Y=H*W;_===!0&&(o.fromBufferAttribute(B,H),k[O+Y+0]=o.x,k[O+Y+1]=o.y,k[O+Y+2]=o.z,k[O+Y+3]=0),g===!0&&(o.fromBufferAttribute(J,H),k[O+Y+4]=o.x,k[O+Y+5]=o.y,k[O+Y+6]=o.z,k[O+Y+7]=0),y===!0&&(o.fromBufferAttribute(I,H),k[O+Y+8]=o.x,k[O+Y+9]=o.y,k[O+Y+10]=o.z,k[O+Y+11]=I.itemSize===4?o.w:1)}}x={count:v,texture:P,size:new ue(S,T)},s.set(u,x),u.addEventListener("dispose",b)}let m=0;for(let _=0;_<d.length;_++)m+=d[_];const f=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",f),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{const p=d===void 0?0:d.length;let v=i[u.id];if(v===void 0||v.length!==p){v=[];for(let g=0;g<p;g++)v[g]=[g,0];i[u.id]=v}for(let g=0;g<p;g++){const y=v[g];y[0]=g,y[1]=d[g]}v.sort(Hw);for(let g=0;g<8;g++)g<p&&v[g][1]?(a[g][0]=v[g][0],a[g][1]=v[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort(Bw);const x=u.morphAttributes.position,m=u.morphAttributes.normal;let f=0;for(let g=0;g<8;g++){const y=a[g],R=y[0],E=y[1];R!==Number.MAX_SAFE_INTEGER&&E?(x&&u.getAttribute("morphTarget"+g)!==x[R]&&u.setAttribute("morphTarget"+g,x[R]),m&&u.getAttribute("morphNormal"+g)!==m[R]&&u.setAttribute("morphNormal"+g,m[R]),r[g]=E,f+=E):(x&&u.hasAttribute("morphTarget"+g)===!0&&u.deleteAttribute("morphTarget"+g),m&&u.hasAttribute("morphNormal"+g)===!0&&u.deleteAttribute("morphNormal"+g),r[g]=0)}const _=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(n,"morphTargetBaseInfluence",_),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Vw(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class b_ extends xn{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Br,u!==Br&&u!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Br&&(i=$i),i===void 0&&u===eo&&(i=kr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const R_=new xn,P_=new b_(1,1);P_.compareFunction=d_;const L_=new v_,D_=new PM,N_=new T_,qm=[],$m=[],Ym=new Float32Array(16),Km=new Float32Array(9),Jm=new Float32Array(4);function lo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=qm[r];if(s===void 0&&(s=new Float32Array(r),qm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function kc(n,e){let t=$m[e];t===void 0&&(t=new Int32Array(e),$m[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ww(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Xw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function jw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function qw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function $w(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Jm.set(i),n.uniformMatrix2fv(this.addr,!1,Jm),Pt(t,i)}}function Yw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Km.set(i),n.uniformMatrix3fv(this.addr,!1,Km),Pt(t,i)}}function Kw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Ym.set(i),n.uniformMatrix4fv(this.addr,!1,Ym),Pt(t,i)}}function Jw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Qw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function Zw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function eT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function tT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function nT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function iT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function rT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function sT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?P_:R_;t.setTexture2D(e||s,r)}function oT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||D_,r)}function aT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||N_,r)}function lT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||L_,r)}function cT(n){switch(n){case 5126:return Ww;case 35664:return Xw;case 35665:return jw;case 35666:return qw;case 35674:return $w;case 35675:return Yw;case 35676:return Kw;case 5124:case 35670:return Jw;case 35667:case 35671:return Qw;case 35668:case 35672:return Zw;case 35669:case 35673:return eT;case 5125:return tT;case 36294:return nT;case 36295:return iT;case 36296:return rT;case 35678:case 36198:case 36298:case 36306:case 35682:return sT;case 35679:case 36299:case 36307:return oT;case 35680:case 36300:case 36308:case 36293:return aT;case 36289:case 36303:case 36311:case 36292:return lT}}function uT(n,e){n.uniform1fv(this.addr,e)}function hT(n,e){const t=lo(e,this.size,2);n.uniform2fv(this.addr,t)}function fT(n,e){const t=lo(e,this.size,3);n.uniform3fv(this.addr,t)}function dT(n,e){const t=lo(e,this.size,4);n.uniform4fv(this.addr,t)}function pT(n,e){const t=lo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function mT(n,e){const t=lo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function gT(n,e){const t=lo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function vT(n,e){n.uniform1iv(this.addr,e)}function _T(n,e){n.uniform2iv(this.addr,e)}function xT(n,e){n.uniform3iv(this.addr,e)}function yT(n,e){n.uniform4iv(this.addr,e)}function ST(n,e){n.uniform1uiv(this.addr,e)}function MT(n,e){n.uniform2uiv(this.addr,e)}function ET(n,e){n.uniform3uiv(this.addr,e)}function wT(n,e){n.uniform4uiv(this.addr,e)}function TT(n,e,t){const i=this.cache,r=e.length,s=kc(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||R_,s[o])}function AT(n,e,t){const i=this.cache,r=e.length,s=kc(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||D_,s[o])}function CT(n,e,t){const i=this.cache,r=e.length,s=kc(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||N_,s[o])}function bT(n,e,t){const i=this.cache,r=e.length,s=kc(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||L_,s[o])}function RT(n){switch(n){case 5126:return uT;case 35664:return hT;case 35665:return fT;case 35666:return dT;case 35674:return pT;case 35675:return mT;case 35676:return gT;case 5124:case 35670:return vT;case 35667:case 35671:return _T;case 35668:case 35672:return xT;case 35669:case 35673:return yT;case 5125:return ST;case 36294:return MT;case 36295:return ET;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return TT;case 35679:case 36299:case 36307:return AT;case 35680:case 36300:case 36308:case 36293:return CT;case 36289:case 36303:case 36311:case 36292:return bT}}class PT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=cT(t.type)}}class LT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=RT(t.type)}}class DT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ju=/(\w+)(\])?(\[|\.)?/g;function Qm(n,e){n.seq.push(e),n.map[e.id]=e}function NT(n,e,t){const i=n.name,r=i.length;for(ju.lastIndex=0;;){const s=ju.exec(i),o=ju.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Qm(t,c===void 0?new PT(a,n,e):new LT(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new DT(a),Qm(t,h)),t=h}}}class zl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);NT(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Zm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const IT=37297;let UT=0;function FT(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function OT(n){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(n);let i;switch(e===t?i="":e===mc&&t===pc?i="LinearDisplayP3ToLinearSRGB":e===pc&&t===mc&&(i="LinearSRGBToLinearDisplayP3"),n){case Ii:case Oc:return[i,"LinearTransferOETF"];case Ot:case md:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function e0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+FT(n.getShaderSource(e),o)}else return r}function zT(n,e){const t=OT(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function kT(n,e){let t;switch(e){case e_:t="Linear";break;case t_:t="Reinhard";break;case n_:t="OptimizedCineon";break;case fd:t="ACESFilmic";break;case i_:t="AgX";break;case rM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function BT(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ps).join(`
`)}function HT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ps).join(`
`)}function GT(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function VT(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ps(n){return n!==""}function t0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function n0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WT=/^[ \t]*#include +<([\w\d./]+)>/gm;function af(n){return n.replace(WT,jT)}const XT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function jT(n,e){let t=je[e];if(t===void 0){const i=XT.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return af(t)}const qT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function i0(n){return n.replace(qT,$T)}function $T(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function r0(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function YT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Qv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function KT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qs:case Zs:e="ENVMAP_TYPE_CUBE";break;case Fc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function JT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function QT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hd:e="ENVMAP_BLENDING_MULTIPLY";break;case nM:e="ENVMAP_BLENDING_MIX";break;case iM:e="ENVMAP_BLENDING_ADD";break}return e}function ZT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function eA(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=YT(t),c=KT(t),u=JT(t),h=QT(t),d=ZT(t),p=t.isWebGL2?"":BT(t),v=HT(t),x=GT(s),m=r.createProgram();let f,_,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ps).join(`
`),f.length>0&&(f+=`
`),_=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ps).join(`
`),_.length>0&&(_+=`
`)):(f=[r0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),_=[p,r0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rr?"#define TONE_MAPPING":"",t.toneMapping!==rr?je.tonemapping_pars_fragment:"",t.toneMapping!==rr?kT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,zT("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ps).join(`
`)),o=af(o),o=t0(o,t),o=n0(o,t),a=af(a),a=t0(a,t),a=n0(a,t),o=i0(o),a=i0(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,f=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Mm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=g+f+o,R=g+_+a,E=Zm(r,r.VERTEX_SHADER,y),A=Zm(r,r.FRAGMENT_SHADER,R);r.attachShader(m,E),r.attachShader(m,A),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function D(P){if(n.debug.checkShaderErrors){const W=r.getProgramInfoLog(m).trim(),b=r.getShaderInfoLog(E).trim(),N=r.getShaderInfoLog(A).trim();let B=!0,J=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,E,A);else{const I=e0(r,E,"vertex"),O=e0(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+I+`
`+O)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(b===""||N==="")&&(J=!1);J&&(P.diagnostics={runnable:B,programLog:W,vertexShader:{log:b,prefix:f},fragmentShader:{log:N,prefix:_}})}r.deleteShader(E),r.deleteShader(A),S=new zl(r,m),T=VT(r,m)}let S;this.getUniforms=function(){return S===void 0&&D(this),S};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(m,IT)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=UT++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=A,this}let tA=0;class nA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new iA(e),t.set(e,i)),i}}class iA{constructor(e){this.id=tA++,this.code=e,this.usedTimes=0}}function rA(n,e,t,i,r,s,o){const a=new __,l=new nA,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function m(S,T,k,P,W){const b=P.fog,N=W.geometry,B=S.isMeshStandardMaterial?P.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||B),I=J&&J.mapping===Fc?J.image.height:null,O=v[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const H=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Y=H!==void 0?H.length:0;let oe=0;N.morphAttributes.position!==void 0&&(oe=1),N.morphAttributes.normal!==void 0&&(oe=2),N.morphAttributes.color!==void 0&&(oe=3);let X,ie,j,ae;if(O){const Zt=li[O];X=Zt.vertexShader,ie=Zt.fragmentShader}else X=S.vertexShader,ie=S.fragmentShader,l.update(S),j=l.getVertexShaderID(S),ae=l.getFragmentShaderID(S);const ce=n.getRenderTarget(),we=W.isInstancedMesh===!0,Se=W.isBatchedMesh===!0,xe=!!S.map,Re=!!S.matcap,L=!!J,fe=!!S.aoMap,te=!!S.lightMap,q=!!S.bumpMap,Q=!!S.normalMap,ve=!!S.displacementMap,de=!!S.emissiveMap,w=!!S.metalnessMap,M=!!S.roughnessMap,z=S.anisotropy>0,re=S.clearcoat>0,ee=S.iridescence>0,G=S.sheen>0,pe=S.transmission>0,le=z&&!!S.anisotropyMap,ye=re&&!!S.clearcoatMap,Ee=re&&!!S.clearcoatNormalMap,Pe=re&&!!S.clearcoatRoughnessMap,se=ee&&!!S.iridescenceMap,We=ee&&!!S.iridescenceThicknessMap,Fe=G&&!!S.sheenColorMap,Ne=G&&!!S.sheenRoughnessMap,De=!!S.specularMap,Ce=!!S.specularColorMap,be=!!S.specularIntensityMap,Qe=pe&&!!S.transmissionMap,it=pe&&!!S.thicknessMap,He=!!S.gradientMap,me=!!S.alphaMap,U=S.alphaTest>0,_e=!!S.alphaHash,Me=!!S.extensions,Oe=!!N.attributes.uv1,Ie=!!N.attributes.uv2,rt=!!N.attributes.uv3;let st=rr;return S.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(st=n.toneMapping),{isWebGL2:u,shaderID:O,shaderType:S.type,shaderName:S.name,vertexShader:X,fragmentShader:ie,defines:S.defines,customVertexShaderID:j,customFragmentShaderID:ae,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Se,instancing:we,instancingColor:we&&W.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Ii,map:xe,matcap:Re,envMap:L,envMapMode:L&&J.mapping,envMapCubeUVHeight:I,aoMap:fe,lightMap:te,bumpMap:q,normalMap:Q,displacementMap:d&&ve,emissiveMap:de,normalMapObjectSpace:Q&&S.normalMapType===gM,normalMapTangentSpace:Q&&S.normalMapType===pd,metalnessMap:w,roughnessMap:M,anisotropy:z,anisotropyMap:le,clearcoat:re,clearcoatMap:ye,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Pe,iridescence:ee,iridescenceMap:se,iridescenceThicknessMap:We,sheen:G,sheenColorMap:Fe,sheenRoughnessMap:Ne,specularMap:De,specularColorMap:Ce,specularIntensityMap:be,transmission:pe,transmissionMap:Qe,thicknessMap:it,gradientMap:He,opaque:S.transparent===!1&&S.blending===Gs,alphaMap:me,alphaTest:U,alphaHash:_e,combine:S.combine,mapUv:xe&&x(S.map.channel),aoMapUv:fe&&x(S.aoMap.channel),lightMapUv:te&&x(S.lightMap.channel),bumpMapUv:q&&x(S.bumpMap.channel),normalMapUv:Q&&x(S.normalMap.channel),displacementMapUv:ve&&x(S.displacementMap.channel),emissiveMapUv:de&&x(S.emissiveMap.channel),metalnessMapUv:w&&x(S.metalnessMap.channel),roughnessMapUv:M&&x(S.roughnessMap.channel),anisotropyMapUv:le&&x(S.anisotropyMap.channel),clearcoatMapUv:ye&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:We&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&x(S.sheenRoughnessMap.channel),specularMapUv:De&&x(S.specularMap.channel),specularColorMapUv:Ce&&x(S.specularColorMap.channel),specularIntensityMapUv:be&&x(S.specularIntensityMap.channel),transmissionMapUv:Qe&&x(S.transmissionMap.channel),thicknessMapUv:it&&x(S.thicknessMap.channel),alphaMapUv:me&&x(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Q||z),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Oe,vertexUv2s:Ie,vertexUv3s:rt,pointsUvs:W.isPoints===!0&&!!N.attributes.uv&&(xe||me),fog:!!b,useFog:S.fog===!0,fogExp2:b&&b.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:W.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:oe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,useLegacyLights:n._useLegacyLights,decodeVideoTexture:xe&&S.map.isVideoTexture===!0&&tt.getTransfer(S.map.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===dn,flipSided:S.side===on,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Me&&S.extensions.derivatives===!0,extensionFragDepth:Me&&S.extensions.fragDepth===!0,extensionDrawBuffers:Me&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Me&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Me&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)T.push(k),T.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(_(T,S),g(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function _(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function g(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const T=v[S.type];let k;if(T){const P=li[T];k=da.clone(P.uniforms)}else k=S.uniforms;return k}function R(S,T){let k;for(let P=0,W=c.length;P<W;P++){const b=c[P];if(b.cacheKey===T){k=b,++k.usedTimes;break}}return k===void 0&&(k=new eA(n,T,S,s),c.push(k)),k}function E(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function A(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:R,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:D}}function sA(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function oA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function s0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function o0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,p,v,x,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:v,renderOrder:h.renderOrder,z:x,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=v,f.renderOrder=h.renderOrder,f.z=x,f.group=m),e++,f}function a(h,d,p,v,x,m){const f=o(h,d,p,v,x,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(h,d,p,v,x,m){const f=o(h,d,p,v,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||oA),i.length>1&&i.sort(d||s0),r.length>1&&r.sort(d||s0)}function u(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function aA(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new o0,n.set(i,[o])):r>=s.length?(o=new o0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function lA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Be};break;case"SpotLight":t={position:new F,direction:new F,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function cA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let uA=0;function hA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function fA(n,e){const t=new lA,i=cA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new F);const s=new F,o=new ft,a=new ft;function l(u,h){let d=0,p=0,v=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let x=0,m=0,f=0,_=0,g=0,y=0,R=0,E=0,A=0,D=0,S=0;u.sort(hA);const T=h===!0?Math.PI:1;for(let P=0,W=u.length;P<W;P++){const b=u[P],N=b.color,B=b.intensity,J=b.distance,I=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)d+=N.r*B*T,p+=N.g*B*T,v+=N.b*B*T;else if(b.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(b.sh.coefficients[O],B);S++}else if(b.isDirectionalLight){const O=t.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity*T),b.castShadow){const H=b.shadow,Y=i.get(b);Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,r.directionalShadow[x]=Y,r.directionalShadowMap[x]=I,r.directionalShadowMatrix[x]=b.shadow.matrix,y++}r.directional[x]=O,x++}else if(b.isSpotLight){const O=t.get(b);O.position.setFromMatrixPosition(b.matrixWorld),O.color.copy(N).multiplyScalar(B*T),O.distance=J,O.coneCos=Math.cos(b.angle),O.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),O.decay=b.decay,r.spot[f]=O;const H=b.shadow;if(b.map&&(r.spotLightMap[A]=b.map,A++,H.updateMatrices(b),b.castShadow&&D++),r.spotLightMatrix[f]=H.matrix,b.castShadow){const Y=i.get(b);Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,r.spotShadow[f]=Y,r.spotShadowMap[f]=I,E++}f++}else if(b.isRectAreaLight){const O=t.get(b);O.color.copy(N).multiplyScalar(B),O.halfWidth.set(b.width*.5,0,0),O.halfHeight.set(0,b.height*.5,0),r.rectArea[_]=O,_++}else if(b.isPointLight){const O=t.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity*T),O.distance=b.distance,O.decay=b.decay,b.castShadow){const H=b.shadow,Y=i.get(b);Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,Y.shadowCameraNear=H.camera.near,Y.shadowCameraFar=H.camera.far,r.pointShadow[m]=Y,r.pointShadowMap[m]=I,r.pointShadowMatrix[m]=b.shadow.matrix,R++}r.point[m]=O,m++}else if(b.isHemisphereLight){const O=t.get(b);O.skyColor.copy(b.color).multiplyScalar(B*T),O.groundColor.copy(b.groundColor).multiplyScalar(B*T),r.hemi[g]=O,g++}}_>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=v;const k=r.hash;(k.directionalLength!==x||k.pointLength!==m||k.spotLength!==f||k.rectAreaLength!==_||k.hemiLength!==g||k.numDirectionalShadows!==y||k.numPointShadows!==R||k.numSpotShadows!==E||k.numSpotMaps!==A||k.numLightProbes!==S)&&(r.directional.length=x,r.spot.length=f,r.rectArea.length=_,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=E+A-D,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=S,k.directionalLength=x,k.pointLength=m,k.spotLength=f,k.rectAreaLength=_,k.hemiLength=g,k.numDirectionalShadows=y,k.numPointShadows=R,k.numSpotShadows=E,k.numSpotMaps=A,k.numLightProbes=S,r.version=uA++)}function c(u,h){let d=0,p=0,v=0,x=0,m=0;const f=h.matrixWorldInverse;for(let _=0,g=u.length;_<g;_++){const y=u[_];if(y.isDirectionalLight){const R=r.directional[d];R.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),d++}else if(y.isSpotLight){const R=r.spot[v];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),v++}else if(y.isRectAreaLight){const R=r.rectArea[x];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),R.halfWidth.set(y.width*.5,0,0),R.halfHeight.set(0,y.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const R=r.point[p];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const R=r.hemi[m];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:r}}function a0(n,e){const t=new fA(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function dA(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new a0(n,e),t.set(s,[l])):o>=a.length?(l=new a0(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class pA extends mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mA extends mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vA=`uniform sampler2D shadow_pass;
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
}`;function _A(n,e,t){let i=new vd;const r=new ue,s=new ue,o=new zt,a=new pA({depthPacking:mM}),l=new mA,c={},u=t.maxTextureSize,h={[ur]:on,[on]:ur,[dn]:dn},d=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:gA,fragmentShader:vA}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new At;v.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ze(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qv;let f=this.type;this.render=function(E,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=n.getRenderTarget(),T=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),P=n.state;P.setBlending(bi),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const W=f!==Si&&this.type===Si,b=f===Si&&this.type!==Si;for(let N=0,B=E.length;N<B;N++){const J=E[N],I=J.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const O=I.getFrameExtents();if(r.multiply(O),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/O.x),r.x=s.x*O.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/O.y),r.y=s.y*O.y,I.mapSize.y=s.y)),I.map===null||W===!0||b===!0){const Y=this.type!==Si?{minFilter:rn,magFilter:rn}:{};I.map!==null&&I.map.dispose(),I.map=new Gn(r.x,r.y,Y),I.map.texture.name=J.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const H=I.getViewportCount();for(let Y=0;Y<H;Y++){const oe=I.getViewport(Y);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),P.viewport(o),I.updateMatrices(J,Y),i=I.getFrustum(),y(A,D,I.camera,J,this.type)}I.isPointLightShadow!==!0&&this.type===Si&&_(I,D),I.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,T,k)};function _(E,A){const D=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Gn(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,D,d,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,D,p,x,null)}function g(E,A,D,S){let T=null;const k=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(k!==void 0)T=k;else if(T=D.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const P=T.uuid,W=A.uuid;let b=c[P];b===void 0&&(b={},c[P]=b);let N=b[W];N===void 0&&(N=T.clone(),b[W]=N,A.addEventListener("dispose",R)),T=N}if(T.visible=A.visible,T.wireframe=A.wireframe,S===Si?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:h[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,D.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const P=n.properties.get(T);P.light=D}return T}function y(E,A,D,S,T){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===Si)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);const W=e.update(E),b=E.material;if(Array.isArray(b)){const N=W.groups;for(let B=0,J=N.length;B<J;B++){const I=N[B],O=b[I.materialIndex];if(O&&O.visible){const H=g(E,O,S,T);E.onBeforeShadow(n,E,A,D,W,H,I),n.renderBufferDirect(D,null,W,H,E,I),E.onAfterShadow(n,E,A,D,W,H,I)}}}else if(b.visible){const N=g(E,b,S,T);E.onBeforeShadow(n,E,A,D,W,N,null),n.renderBufferDirect(D,null,W,N,E,null),E.onAfterShadow(n,E,A,D,W,N,null)}}const P=E.children;for(let W=0,b=P.length;W<b;W++)y(P[W],A,D,S,T)}function R(E){E.target.removeEventListener("dispose",R);for(const D in c){const S=c[D],T=E.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}function xA(n,e,t){const i=t.isWebGL2;function r(){let U=!1;const _e=new zt;let Me=null;const Oe=new zt(0,0,0,0);return{setMask:function(Ie){Me!==Ie&&!U&&(n.colorMask(Ie,Ie,Ie,Ie),Me=Ie)},setLocked:function(Ie){U=Ie},setClear:function(Ie,rt,st,Lt,Zt){Zt===!0&&(Ie*=Lt,rt*=Lt,st*=Lt),_e.set(Ie,rt,st,Lt),Oe.equals(_e)===!1&&(n.clearColor(Ie,rt,st,Lt),Oe.copy(_e))},reset:function(){U=!1,Me=null,Oe.set(-1,0,0,0)}}}function s(){let U=!1,_e=null,Me=null,Oe=null;return{setTest:function(Ie){Ie?Se(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(Ie){_e!==Ie&&!U&&(n.depthMask(Ie),_e=Ie)},setFunc:function(Ie){if(Me!==Ie){switch(Ie){case YS:n.depthFunc(n.NEVER);break;case KS:n.depthFunc(n.ALWAYS);break;case JS:n.depthFunc(n.LESS);break;case hc:n.depthFunc(n.LEQUAL);break;case QS:n.depthFunc(n.EQUAL);break;case ZS:n.depthFunc(n.GEQUAL);break;case eM:n.depthFunc(n.GREATER);break;case tM:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=Ie}},setLocked:function(Ie){U=Ie},setClear:function(Ie){Oe!==Ie&&(n.clearDepth(Ie),Oe=Ie)},reset:function(){U=!1,_e=null,Me=null,Oe=null}}}function o(){let U=!1,_e=null,Me=null,Oe=null,Ie=null,rt=null,st=null,Lt=null,Zt=null;return{setTest:function(ot){U||(ot?Se(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(ot){_e!==ot&&!U&&(n.stencilMask(ot),_e=ot)},setFunc:function(ot,en,si){(Me!==ot||Oe!==en||Ie!==si)&&(n.stencilFunc(ot,en,si),Me=ot,Oe=en,Ie=si)},setOp:function(ot,en,si){(rt!==ot||st!==en||Lt!==si)&&(n.stencilOp(ot,en,si),rt=ot,st=en,Lt=si)},setLocked:function(ot){U=ot},setClear:function(ot){Zt!==ot&&(n.clearStencil(ot),Zt=ot)},reset:function(){U=!1,_e=null,Me=null,Oe=null,Ie=null,rt=null,st=null,Lt=null,Zt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let d={},p={},v=new WeakMap,x=[],m=null,f=!1,_=null,g=null,y=null,R=null,E=null,A=null,D=null,S=new Be(0,0,0),T=0,k=!1,P=null,W=null,b=null,N=null,B=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,O=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(H)[1]),I=O>=1):H.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),I=O>=2);let Y=null,oe={};const X=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),j=new zt().fromArray(X),ae=new zt().fromArray(ie);function ce(U,_e,Me,Oe){const Ie=new Uint8Array(4),rt=n.createTexture();n.bindTexture(U,rt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let st=0;st<Me;st++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(_e,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,Ie):n.texImage2D(_e+st,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ie);return rt}const we={};we[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(we[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Se(n.DEPTH_TEST),l.setFunc(hc),de(!1),w(Vp),Se(n.CULL_FACE),Q(bi);function Se(U){d[U]!==!0&&(n.enable(U),d[U]=!0)}function xe(U){d[U]!==!1&&(n.disable(U),d[U]=!1)}function Re(U,_e){return p[U]!==_e?(n.bindFramebuffer(U,_e),p[U]=_e,i&&(U===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=_e),U===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=_e)),!0):!1}function L(U,_e){let Me=x,Oe=!1;if(U)if(Me=v.get(_e),Me===void 0&&(Me=[],v.set(_e,Me)),U.isWebGLMultipleRenderTargets){const Ie=U.texture;if(Me.length!==Ie.length||Me[0]!==n.COLOR_ATTACHMENT0){for(let rt=0,st=Ie.length;rt<st;rt++)Me[rt]=n.COLOR_ATTACHMENT0+rt;Me.length=Ie.length,Oe=!0}}else Me[0]!==n.COLOR_ATTACHMENT0&&(Me[0]=n.COLOR_ATTACHMENT0,Oe=!0);else Me[0]!==n.BACK&&(Me[0]=n.BACK,Oe=!0);Oe&&(t.isWebGL2?n.drawBuffers(Me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Me))}function fe(U){return m!==U?(n.useProgram(U),m=U,!0):!1}const te={[br]:n.FUNC_ADD,[IS]:n.FUNC_SUBTRACT,[US]:n.FUNC_REVERSE_SUBTRACT};if(i)te[jp]=n.MIN,te[qp]=n.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(te[jp]=U.MIN_EXT,te[qp]=U.MAX_EXT)}const q={[FS]:n.ZERO,[OS]:n.ONE,[zS]:n.SRC_COLOR,[Qh]:n.SRC_ALPHA,[WS]:n.SRC_ALPHA_SATURATE,[GS]:n.DST_COLOR,[BS]:n.DST_ALPHA,[kS]:n.ONE_MINUS_SRC_COLOR,[Zh]:n.ONE_MINUS_SRC_ALPHA,[VS]:n.ONE_MINUS_DST_COLOR,[HS]:n.ONE_MINUS_DST_ALPHA,[XS]:n.CONSTANT_COLOR,[jS]:n.ONE_MINUS_CONSTANT_COLOR,[qS]:n.CONSTANT_ALPHA,[$S]:n.ONE_MINUS_CONSTANT_ALPHA};function Q(U,_e,Me,Oe,Ie,rt,st,Lt,Zt,ot){if(U===bi){f===!0&&(xe(n.BLEND),f=!1);return}if(f===!1&&(Se(n.BLEND),f=!0),U!==NS){if(U!==_||ot!==k){if((g!==br||E!==br)&&(n.blendEquation(n.FUNC_ADD),g=br,E=br),ot)switch(U){case Gs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jh:n.blendFunc(n.ONE,n.ONE);break;case Wp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Gs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Wp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,R=null,A=null,D=null,S.set(0,0,0),T=0,_=U,k=ot}return}Ie=Ie||_e,rt=rt||Me,st=st||Oe,(_e!==g||Ie!==E)&&(n.blendEquationSeparate(te[_e],te[Ie]),g=_e,E=Ie),(Me!==y||Oe!==R||rt!==A||st!==D)&&(n.blendFuncSeparate(q[Me],q[Oe],q[rt],q[st]),y=Me,R=Oe,A=rt,D=st),(Lt.equals(S)===!1||Zt!==T)&&(n.blendColor(Lt.r,Lt.g,Lt.b,Zt),S.copy(Lt),T=Zt),_=U,k=!1}function ve(U,_e){U.side===dn?xe(n.CULL_FACE):Se(n.CULL_FACE);let Me=U.side===on;_e&&(Me=!Me),de(Me),U.blending===Gs&&U.transparent===!1?Q(bi):Q(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const Oe=U.stencilWrite;c.setTest(Oe),Oe&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),z(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Se(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function de(U){P!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),P=U)}function w(U){U!==LS?(Se(n.CULL_FACE),U!==W&&(U===Vp?n.cullFace(n.BACK):U===DS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),W=U}function M(U){U!==b&&(I&&n.lineWidth(U),b=U)}function z(U,_e,Me){U?(Se(n.POLYGON_OFFSET_FILL),(N!==_e||B!==Me)&&(n.polygonOffset(_e,Me),N=_e,B=Me)):xe(n.POLYGON_OFFSET_FILL)}function re(U){U?Se(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function ee(U){U===void 0&&(U=n.TEXTURE0+J-1),Y!==U&&(n.activeTexture(U),Y=U)}function G(U,_e,Me){Me===void 0&&(Y===null?Me=n.TEXTURE0+J-1:Me=Y);let Oe=oe[Me];Oe===void 0&&(Oe={type:void 0,texture:void 0},oe[Me]=Oe),(Oe.type!==U||Oe.texture!==_e)&&(Y!==Me&&(n.activeTexture(Me),Y=Me),n.bindTexture(U,_e||we[U]),Oe.type=U,Oe.texture=_e)}function pe(){const U=oe[Y];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function le(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function We(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(U){j.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),j.copy(U))}function Qe(U){ae.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ae.copy(U))}function it(U,_e){let Me=h.get(_e);Me===void 0&&(Me=new WeakMap,h.set(_e,Me));let Oe=Me.get(U);Oe===void 0&&(Oe=n.getUniformBlockIndex(_e,U.name),Me.set(U,Oe))}function He(U,_e){const Oe=h.get(_e).get(U);u.get(_e)!==Oe&&(n.uniformBlockBinding(_e,Oe,U.__bindingPointIndex),u.set(_e,Oe))}function me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},Y=null,oe={},p={},v=new WeakMap,x=[],m=null,f=!1,_=null,g=null,y=null,R=null,E=null,A=null,D=null,S=new Be(0,0,0),T=0,k=!1,P=null,W=null,b=null,N=null,B=null,j.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Se,disable:xe,bindFramebuffer:Re,drawBuffers:L,useProgram:fe,setBlending:Q,setMaterial:ve,setFlipSided:de,setCullFace:w,setLineWidth:M,setPolygonOffset:z,setScissorTest:re,activeTexture:ee,bindTexture:G,unbindTexture:pe,compressedTexImage2D:le,compressedTexImage3D:ye,texImage2D:De,texImage3D:Ce,updateUBOMapping:it,uniformBlockBinding:He,texStorage2D:Fe,texStorage3D:Ne,texSubImage2D:Ee,texSubImage3D:Pe,compressedTexSubImage2D:se,compressedTexSubImage3D:We,scissor:be,viewport:Qe,reset:me}}function yA(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,M){return p?new OffscreenCanvas(w,M):vc("canvas")}function x(w,M,z,re){let ee=1;if((w.width>re||w.height>re)&&(ee=re/Math.max(w.width,w.height)),ee<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const G=M?of:Math.floor,pe=G(ee*w.width),le=G(ee*w.height);h===void 0&&(h=v(pe,le));const ye=z?v(pe,le):h;return ye.width=pe,ye.height=le,ye.getContext("2d").drawImage(w,0,0,pe,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+pe+"x"+le+")."),ye}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return Em(w.width)&&Em(w.height)}function f(w){return a?!1:w.wrapS!==Zn||w.wrapT!==Zn||w.minFilter!==rn&&w.minFilter!==Un}function _(w,M){return w.generateMipmaps&&M&&w.minFilter!==rn&&w.minFilter!==Un}function g(w){n.generateMipmap(w)}function y(w,M,z,re,ee=!1){if(a===!1)return M;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let G=M;if(M===n.RED&&(z===n.FLOAT&&(G=n.R32F),z===n.HALF_FLOAT&&(G=n.R16F),z===n.UNSIGNED_BYTE&&(G=n.R8)),M===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(G=n.R8UI),z===n.UNSIGNED_SHORT&&(G=n.R16UI),z===n.UNSIGNED_INT&&(G=n.R32UI),z===n.BYTE&&(G=n.R8I),z===n.SHORT&&(G=n.R16I),z===n.INT&&(G=n.R32I)),M===n.RG&&(z===n.FLOAT&&(G=n.RG32F),z===n.HALF_FLOAT&&(G=n.RG16F),z===n.UNSIGNED_BYTE&&(G=n.RG8)),M===n.RGBA){const pe=ee?dc:tt.getTransfer(re);z===n.FLOAT&&(G=n.RGBA32F),z===n.HALF_FLOAT&&(G=n.RGBA16F),z===n.UNSIGNED_BYTE&&(G=pe===at?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function R(w,M,z){return _(w,z)===!0||w.isFramebufferTexture&&w.minFilter!==rn&&w.minFilter!==Un?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function E(w){return w===rn||w===$p||w===_u?n.NEAREST:n.LINEAR}function A(w){const M=w.target;M.removeEventListener("dispose",A),S(M),M.isVideoTexture&&u.delete(M)}function D(w){const M=w.target;M.removeEventListener("dispose",D),k(M)}function S(w){const M=i.get(w);if(M.__webglInit===void 0)return;const z=w.source,re=d.get(z);if(re){const ee=re[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(w),Object.keys(re).length===0&&d.delete(z)}i.remove(w)}function T(w){const M=i.get(w);n.deleteTexture(M.__webglTexture);const z=w.source,re=d.get(z);delete re[M.__cacheKey],o.memory.textures--}function k(w){const M=w.texture,z=i.get(w),re=i.get(M);if(re.__webglTexture!==void 0&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(z.__webglFramebuffer[ee]))for(let G=0;G<z.__webglFramebuffer[ee].length;G++)n.deleteFramebuffer(z.__webglFramebuffer[ee][G]);else n.deleteFramebuffer(z.__webglFramebuffer[ee]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[ee])}else{if(Array.isArray(z.__webglFramebuffer))for(let ee=0;ee<z.__webglFramebuffer.length;ee++)n.deleteFramebuffer(z.__webglFramebuffer[ee]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let ee=0;ee<z.__webglColorRenderbuffer.length;ee++)z.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[ee]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ee=0,G=M.length;ee<G;ee++){const pe=i.get(M[ee]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),o.memory.textures--),i.remove(M[ee])}i.remove(M),i.remove(w)}let P=0;function W(){P=0}function b(){const w=P;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),P+=1,w}function N(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function B(w,M){const z=i.get(w);if(w.isVideoTexture&&ve(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){const re=w.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(z,w,M);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+M)}function J(w,M){const z=i.get(w);if(w.version>0&&z.__version!==w.version){j(z,w,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+M)}function I(w,M){const z=i.get(w);if(w.version>0&&z.__version!==w.version){j(z,w,M);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+M)}function O(w,M){const z=i.get(w);if(w.version>0&&z.__version!==w.version){ae(z,w,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+M)}const H={[fc]:n.REPEAT,[Zn]:n.CLAMP_TO_EDGE,[nf]:n.MIRRORED_REPEAT},Y={[rn]:n.NEAREST,[$p]:n.NEAREST_MIPMAP_NEAREST,[_u]:n.NEAREST_MIPMAP_LINEAR,[Un]:n.LINEAR,[sM]:n.LINEAR_MIPMAP_NEAREST,[fa]:n.LINEAR_MIPMAP_LINEAR},oe={[vM]:n.NEVER,[EM]:n.ALWAYS,[_M]:n.LESS,[d_]:n.LEQUAL,[xM]:n.EQUAL,[MM]:n.GEQUAL,[yM]:n.GREATER,[SM]:n.NOTEQUAL};function X(w,M,z){if(z?(n.texParameteri(w,n.TEXTURE_WRAP_S,H[M.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,H[M.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,H[M.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Y[M.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Y[M.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==Zn||M.wrapT!==Zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,E(M.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,E(M.minFilter)),M.minFilter!==rn&&M.minFilter!==Un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===rn||M.minFilter!==_u&&M.minFilter!==fa||M.type===Yi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===di&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(w,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function ie(w,M){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",A));const re=M.source;let ee=d.get(re);ee===void 0&&(ee={},d.set(re,ee));const G=N(M);if(G!==w.__cacheKey){ee[G]===void 0&&(ee[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ee[G].usedTimes++;const pe=ee[w.__cacheKey];pe!==void 0&&(ee[w.__cacheKey].usedTimes--,pe.usedTimes===0&&T(M)),w.__cacheKey=G,w.__webglTexture=ee[G].texture}return z}function j(w,M,z){let re=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=n.TEXTURE_3D);const ee=ie(w,M),G=M.source;t.bindTexture(re,w.__webglTexture,n.TEXTURE0+z);const pe=i.get(G);if(G.version!==pe.__version||ee===!0){t.activeTexture(n.TEXTURE0+z);const le=tt.getPrimaries(tt.workingColorSpace),ye=M.colorSpace===zn?null:tt.getPrimaries(M.colorSpace),Ee=M.colorSpace===zn||le===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Pe=f(M)&&m(M.image)===!1;let se=x(M.image,Pe,!1,r.maxTextureSize);se=de(M,se);const We=m(se)||a,Fe=s.convert(M.format,M.colorSpace);let Ne=s.convert(M.type),De=y(M.internalFormat,Fe,Ne,M.colorSpace,M.isVideoTexture);X(re,M,We);let Ce;const be=M.mipmaps,Qe=a&&M.isVideoTexture!==!0&&De!==h_,it=pe.__version===void 0||ee===!0,He=R(M,se,We);if(M.isDepthTexture)De=n.DEPTH_COMPONENT,a?M.type===Yi?De=n.DEPTH_COMPONENT32F:M.type===$i?De=n.DEPTH_COMPONENT24:M.type===kr?De=n.DEPTH24_STENCIL8:De=n.DEPTH_COMPONENT16:M.type===Yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Br&&De===n.DEPTH_COMPONENT&&M.type!==dd&&M.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=$i,Ne=s.convert(M.type)),M.format===eo&&De===n.DEPTH_COMPONENT&&(De=n.DEPTH_STENCIL,M.type!==kr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=kr,Ne=s.convert(M.type))),it&&(Qe?t.texStorage2D(n.TEXTURE_2D,1,De,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,De,se.width,se.height,0,Fe,Ne,null));else if(M.isDataTexture)if(be.length>0&&We){Qe&&it&&t.texStorage2D(n.TEXTURE_2D,He,De,be[0].width,be[0].height);for(let me=0,U=be.length;me<U;me++)Ce=be[me],Qe?t.texSubImage2D(n.TEXTURE_2D,me,0,0,Ce.width,Ce.height,Fe,Ne,Ce.data):t.texImage2D(n.TEXTURE_2D,me,De,Ce.width,Ce.height,0,Fe,Ne,Ce.data);M.generateMipmaps=!1}else Qe?(it&&t.texStorage2D(n.TEXTURE_2D,He,De,se.width,se.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,Fe,Ne,se.data)):t.texImage2D(n.TEXTURE_2D,0,De,se.width,se.height,0,Fe,Ne,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Qe&&it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,De,be[0].width,be[0].height,se.depth);for(let me=0,U=be.length;me<U;me++)Ce=be[me],M.format!==ei?Fe!==null?Qe?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Ce.width,Ce.height,se.depth,Fe,Ce.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,De,Ce.width,Ce.height,se.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Ce.width,Ce.height,se.depth,Fe,Ne,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,De,Ce.width,Ce.height,se.depth,0,Fe,Ne,Ce.data)}else{Qe&&it&&t.texStorage2D(n.TEXTURE_2D,He,De,be[0].width,be[0].height);for(let me=0,U=be.length;me<U;me++)Ce=be[me],M.format!==ei?Fe!==null?Qe?t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,Ce.width,Ce.height,Fe,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,me,De,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?t.texSubImage2D(n.TEXTURE_2D,me,0,0,Ce.width,Ce.height,Fe,Ne,Ce.data):t.texImage2D(n.TEXTURE_2D,me,De,Ce.width,Ce.height,0,Fe,Ne,Ce.data)}else if(M.isDataArrayTexture)Qe?(it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,De,se.width,se.height,se.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Fe,Ne,se.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,se.width,se.height,se.depth,0,Fe,Ne,se.data);else if(M.isData3DTexture)Qe?(it&&t.texStorage3D(n.TEXTURE_3D,He,De,se.width,se.height,se.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Fe,Ne,se.data)):t.texImage3D(n.TEXTURE_3D,0,De,se.width,se.height,se.depth,0,Fe,Ne,se.data);else if(M.isFramebufferTexture){if(it)if(Qe)t.texStorage2D(n.TEXTURE_2D,He,De,se.width,se.height);else{let me=se.width,U=se.height;for(let _e=0;_e<He;_e++)t.texImage2D(n.TEXTURE_2D,_e,De,me,U,0,Fe,Ne,null),me>>=1,U>>=1}}else if(be.length>0&&We){Qe&&it&&t.texStorage2D(n.TEXTURE_2D,He,De,be[0].width,be[0].height);for(let me=0,U=be.length;me<U;me++)Ce=be[me],Qe?t.texSubImage2D(n.TEXTURE_2D,me,0,0,Fe,Ne,Ce):t.texImage2D(n.TEXTURE_2D,me,De,Fe,Ne,Ce);M.generateMipmaps=!1}else Qe?(it&&t.texStorage2D(n.TEXTURE_2D,He,De,se.width,se.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Fe,Ne,se)):t.texImage2D(n.TEXTURE_2D,0,De,Fe,Ne,se);_(M,We)&&g(re),pe.__version=G.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ae(w,M,z){if(M.image.length!==6)return;const re=ie(w,M),ee=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+z);const G=i.get(ee);if(ee.version!==G.__version||re===!0){t.activeTexture(n.TEXTURE0+z);const pe=tt.getPrimaries(tt.workingColorSpace),le=M.colorSpace===zn?null:tt.getPrimaries(M.colorSpace),ye=M.colorSpace===zn||pe===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ee=M.isCompressedTexture||M.image[0].isCompressedTexture,Pe=M.image[0]&&M.image[0].isDataTexture,se=[];for(let me=0;me<6;me++)!Ee&&!Pe?se[me]=x(M.image[me],!1,!0,r.maxCubemapSize):se[me]=Pe?M.image[me].image:M.image[me],se[me]=de(M,se[me]);const We=se[0],Fe=m(We)||a,Ne=s.convert(M.format,M.colorSpace),De=s.convert(M.type),Ce=y(M.internalFormat,Ne,De,M.colorSpace),be=a&&M.isVideoTexture!==!0,Qe=G.__version===void 0||re===!0;let it=R(M,We,Fe);X(n.TEXTURE_CUBE_MAP,M,Fe);let He;if(Ee){be&&Qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,it,Ce,We.width,We.height);for(let me=0;me<6;me++){He=se[me].mipmaps;for(let U=0;U<He.length;U++){const _e=He[U];M.format!==ei?Ne!==null?be?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,U,0,0,_e.width,_e.height,Ne,_e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,U,Ce,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,U,0,0,_e.width,_e.height,Ne,De,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,U,Ce,_e.width,_e.height,0,Ne,De,_e.data)}}}else{He=M.mipmaps,be&&Qe&&(He.length>0&&it++,t.texStorage2D(n.TEXTURE_CUBE_MAP,it,Ce,se[0].width,se[0].height));for(let me=0;me<6;me++)if(Pe){be?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,se[me].width,se[me].height,Ne,De,se[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Ce,se[me].width,se[me].height,0,Ne,De,se[me].data);for(let U=0;U<He.length;U++){const Me=He[U].image[me].image;be?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,U+1,0,0,Me.width,Me.height,Ne,De,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,U+1,Ce,Me.width,Me.height,0,Ne,De,Me.data)}}else{be?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ne,De,se[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Ce,Ne,De,se[me]);for(let U=0;U<He.length;U++){const _e=He[U];be?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,U+1,0,0,Ne,De,_e.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,U+1,Ce,Ne,De,_e.image[me])}}}_(M,Fe)&&g(n.TEXTURE_CUBE_MAP),G.__version=ee.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ce(w,M,z,re,ee,G){const pe=s.convert(z.format,z.colorSpace),le=s.convert(z.type),ye=y(z.internalFormat,pe,le,z.colorSpace);if(!i.get(M).__hasExternalTextures){const Pe=Math.max(1,M.width>>G),se=Math.max(1,M.height>>G);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,G,ye,Pe,se,M.depth,0,pe,le,null):t.texImage2D(ee,G,ye,Pe,se,0,pe,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Q(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,ee,i.get(z).__webglTexture,0,q(M)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,ee,i.get(z).__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(w,M,z){if(n.bindRenderbuffer(n.RENDERBUFFER,w),M.depthBuffer&&!M.stencilBuffer){let re=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||Q(M)){const ee=M.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Yi?re=n.DEPTH_COMPONENT32F:ee.type===$i&&(re=n.DEPTH_COMPONENT24));const G=q(M);Q(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,G,re,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,G,re,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,re,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(M.depthBuffer&&M.stencilBuffer){const re=q(M);z&&Q(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,M.width,M.height):Q(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{const re=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ee=0;ee<re.length;ee++){const G=re[ee],pe=s.convert(G.format,G.colorSpace),le=s.convert(G.type),ye=y(G.internalFormat,pe,le,G.colorSpace),Ee=q(M);z&&Q(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,ye,M.width,M.height):Q(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,ye,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ye,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),B(M.depthTexture,0);const re=i.get(M.depthTexture).__webglTexture,ee=q(M);if(M.depthTexture.format===Br)Q(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(M.depthTexture.format===eo)Q(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function xe(w){const M=i.get(w),z=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Se(M.__webglFramebuffer,w)}else if(z){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]=n.createRenderbuffer(),we(M.__webglDepthbuffer[re],w,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),we(M.__webglDepthbuffer,w,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(w,M,z){const re=i.get(w);M!==void 0&&ce(re.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&xe(w)}function L(w){const M=w.texture,z=i.get(w),re=i.get(M);w.addEventListener("dispose",D),w.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=M.version,o.memory.textures++);const ee=w.isWebGLCubeRenderTarget===!0,G=w.isWebGLMultipleRenderTargets===!0,pe=m(w)||a;if(ee){z.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[le]=[];for(let ye=0;ye<M.mipmaps.length;ye++)z.__webglFramebuffer[le][ye]=n.createFramebuffer()}else z.__webglFramebuffer[le]=n.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)z.__webglFramebuffer[le]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(G)if(r.drawBuffers){const le=w.texture;for(let ye=0,Ee=le.length;ye<Ee;ye++){const Pe=i.get(le[ye]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&Q(w)===!1){const le=G?M:[M];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ye=0;ye<le.length;ye++){const Ee=le[ye];z.__webglColorRenderbuffer[ye]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ye]);const Pe=s.convert(Ee.format,Ee.colorSpace),se=s.convert(Ee.type),We=y(Ee.internalFormat,Pe,se,Ee.colorSpace,w.isXRRenderTarget===!0),Fe=q(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,We,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,z.__webglColorRenderbuffer[ye])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),we(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),X(n.TEXTURE_CUBE_MAP,M,pe);for(let le=0;le<6;le++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)ce(z.__webglFramebuffer[le][ye],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye);else ce(z.__webglFramebuffer[le],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);_(M,pe)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(G){const le=w.texture;for(let ye=0,Ee=le.length;ye<Ee;ye++){const Pe=le[ye],se=i.get(Pe);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),X(n.TEXTURE_2D,Pe,pe),ce(z.__webglFramebuffer,w,Pe,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,0),_(Pe,pe)&&g(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?le=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,re.__webglTexture),X(le,M,pe),a&&M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)ce(z.__webglFramebuffer[ye],w,M,n.COLOR_ATTACHMENT0,le,ye);else ce(z.__webglFramebuffer,w,M,n.COLOR_ATTACHMENT0,le,0);_(M,pe)&&g(le),t.unbindTexture()}w.depthBuffer&&xe(w)}function fe(w){const M=m(w)||a,z=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let re=0,ee=z.length;re<ee;re++){const G=z[re];if(_(G,M)){const pe=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,le=i.get(G).__webglTexture;t.bindTexture(pe,le),g(pe),t.unbindTexture()}}}function te(w){if(a&&w.samples>0&&Q(w)===!1){const M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],z=w.width,re=w.height;let ee=n.COLOR_BUFFER_BIT;const G=[],pe=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(w),ye=w.isWebGLMultipleRenderTargets===!0;if(ye)for(let Ee=0;Ee<M.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Ee=0;Ee<M.length;Ee++){G.push(n.COLOR_ATTACHMENT0+Ee),w.depthBuffer&&G.push(pe);const Pe=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Pe===!1&&(w.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ye&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]),Pe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[pe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[pe])),ye){const se=i.get(M[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,se,0)}n.blitFramebuffer(0,0,z,re,0,0,z,re,ee,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,G)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ye)for(let Ee=0;Ee<M.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]);const Pe=i.get(M[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,Pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function q(w){return Math.min(r.maxSamples,w.samples)}function Q(w){const M=i.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ve(w){const M=o.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function de(w,M){const z=w.colorSpace,re=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===rf||z!==Ii&&z!==zn&&(tt.getTransfer(z)===at?a===!1?e.has("EXT_sRGB")===!0&&re===ei?(w.format=rf,w.minFilter=Un,w.generateMipmaps=!1):M=m_.sRGBToLinear(M):(re!==ei||ee!==sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}this.allocateTextureUnit=b,this.resetTextureUnits=W,this.setTexture2D=B,this.setTexture2DArray=J,this.setTexture3D=I,this.setTextureCube=O,this.rebindTextures=Re,this.setupRenderTarget=L,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Q}function SA(n,e,t){const i=t.isWebGL2;function r(s,o=zn){let a;const l=tt.getTransfer(o);if(s===sr)return n.UNSIGNED_BYTE;if(s===o_)return n.UNSIGNED_SHORT_4_4_4_4;if(s===a_)return n.UNSIGNED_SHORT_5_5_5_1;if(s===oM)return n.BYTE;if(s===aM)return n.SHORT;if(s===dd)return n.UNSIGNED_SHORT;if(s===s_)return n.INT;if(s===$i)return n.UNSIGNED_INT;if(s===Yi)return n.FLOAT;if(s===di)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===lM)return n.ALPHA;if(s===ei)return n.RGBA;if(s===cM)return n.LUMINANCE;if(s===uM)return n.LUMINANCE_ALPHA;if(s===Br)return n.DEPTH_COMPONENT;if(s===eo)return n.DEPTH_STENCIL;if(s===rf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===hM)return n.RED;if(s===l_)return n.RED_INTEGER;if(s===fM)return n.RG;if(s===c_)return n.RG_INTEGER;if(s===u_)return n.RGBA_INTEGER;if(s===xu||s===yu||s===Su||s===Mu)if(l===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===xu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===yu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Su)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===xu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===yu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Su)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Mu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yp||s===Kp||s===Jp||s===Qp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Yp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===h_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Zp||s===em)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Zp)return l===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===em)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===tm||s===nm||s===im||s===rm||s===sm||s===om||s===am||s===lm||s===cm||s===um||s===hm||s===fm||s===dm||s===pm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===tm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===nm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===im)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===om)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===am)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===lm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===cm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===um)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===fm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===dm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Eu||s===mm||s===gm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Eu)return l===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===mm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===gm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===dM||s===vm||s===_m||s===xm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Eu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===vm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===_m)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===kr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class MA extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ut extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const EA={type:"move"};class qu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(EA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ut;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class wA extends oo{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,v=null;const x=t.getContextAttributes();let m=null,f=null;const _=[],g=[],y=new ue;let R=null;const E=new On;E.layers.enable(1),E.viewport=new zt;const A=new On;A.layers.enable(2),A.viewport=new zt;const D=[E,A],S=new MA;S.layers.enable(1),S.layers.enable(2);let T=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ie=_[X];return ie===void 0&&(ie=new qu,_[X]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(X){let ie=_[X];return ie===void 0&&(ie=new qu,_[X]=ie),ie.getGripSpace()},this.getHand=function(X){let ie=_[X];return ie===void 0&&(ie=new qu,_[X]=ie),ie.getHandSpace()};function P(X){const ie=g.indexOf(X.inputSource);if(ie===-1)return;const j=_[ie];j!==void 0&&(j.update(X.inputSource,X.frame,c||o),j.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",b);for(let X=0;X<_.length;X++){const ie=g[X];ie!==null&&(g[X]=null,_[X].disconnect(ie))}T=null,k=null,e.setRenderTarget(m),p=null,d=null,h=null,r=null,f=null,oe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",W),r.addEventListener("inputsourceschange",b),x.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ie={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Gn(p.framebufferWidth,p.framebufferHeight,{format:ei,type:sr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ie=null,j=null,ae=null;x.depth&&(ae=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=x.stencil?eo:Br,j=x.stencil?kr:$i);const ce={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Gn(d.textureWidth,d.textureHeight,{format:ei,type:sr,depthTexture:new b_(d.textureWidth,d.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const we=e.properties.get(f);we.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),oe.setContext(r),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function b(X){for(let ie=0;ie<X.removed.length;ie++){const j=X.removed[ie],ae=g.indexOf(j);ae>=0&&(g[ae]=null,_[ae].disconnect(j))}for(let ie=0;ie<X.added.length;ie++){const j=X.added[ie];let ae=g.indexOf(j);if(ae===-1){for(let we=0;we<_.length;we++)if(we>=g.length){g.push(j),ae=we;break}else if(g[we]===null){g[we]=j,ae=we;break}if(ae===-1)break}const ce=_[ae];ce&&ce.connect(j)}}const N=new F,B=new F;function J(X,ie,j){N.setFromMatrixPosition(ie.matrixWorld),B.setFromMatrixPosition(j.matrixWorld);const ae=N.distanceTo(B),ce=ie.projectionMatrix.elements,we=j.projectionMatrix.elements,Se=ce[14]/(ce[10]-1),xe=ce[14]/(ce[10]+1),Re=(ce[9]+1)/ce[5],L=(ce[9]-1)/ce[5],fe=(ce[8]-1)/ce[0],te=(we[8]+1)/we[0],q=Se*fe,Q=Se*te,ve=ae/(-fe+te),de=ve*-fe;ie.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(de),X.translateZ(ve),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const w=Se+ve,M=xe+ve,z=q-de,re=Q+(ae-de),ee=Re*xe/M*w,G=L*xe/M*w;X.projectionMatrix.makePerspective(z,re,ee,G,w,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function I(X,ie){ie===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ie.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;S.near=A.near=E.near=X.near,S.far=A.far=E.far=X.far,(T!==S.near||k!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,k=S.far);const ie=X.parent,j=S.cameras;I(S,ie);for(let ae=0;ae<j.length;ae++)I(j[ae],ie);j.length===2?J(S,E,A):S.projectionMatrix.copy(E.projectionMatrix),O(X,S,ie)};function O(X,ie,j){j===null?X.matrix.copy(ie.matrixWorld):(X.matrix.copy(j.matrixWorld),X.matrix.invert(),X.matrix.multiply(ie.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=sf*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)};let H=null;function Y(X,ie){if(u=ie.getViewerPose(c||o),v=ie,u!==null){const j=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ae=!1;j.length!==S.cameras.length&&(S.cameras.length=0,ae=!0);for(let ce=0;ce<j.length;ce++){const we=j[ce];let Se=null;if(p!==null)Se=p.getViewport(we);else{const Re=h.getViewSubImage(d,we);Se=Re.viewport,ce===0&&(e.setRenderTargetTextures(f,Re.colorTexture,d.ignoreDepthValues?void 0:Re.depthStencilTexture),e.setRenderTarget(f))}let xe=D[ce];xe===void 0&&(xe=new On,xe.layers.enable(ce),xe.viewport=new zt,D[ce]=xe),xe.matrix.fromArray(we.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(we.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(Se.x,Se.y,Se.width,Se.height),ce===0&&(S.matrix.copy(xe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ae===!0&&S.cameras.push(xe)}}for(let j=0;j<_.length;j++){const ae=g[j],ce=_[j];ae!==null&&ce!==void 0&&ce.update(ae,ie,c||o)}H&&H(X,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),v=null}const oe=new C_;oe.setAnimationLoop(Y),this.setAnimationLoop=function(X){H=X},this.dispose=function(){}}}function TA(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,M_(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,g,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,g):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===on&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===on&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const g=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*g,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,g){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=g*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===on&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function AA(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const y=g.program;i.uniformBlockBinding(_,y)}function c(_,g){let y=r[_.id];y===void 0&&(v(_),y=u(_),r[_.id]=y,_.addEventListener("dispose",m));const R=g.program;i.updateUBOMapping(_,R);const E=e.render.frame;s[_.id]!==E&&(d(_),s[_.id]=E)}function u(_){const g=h();_.__bindingPointIndex=g;const y=n.createBuffer(),R=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,R,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,y),y}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const g=r[_.id],y=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let E=0,A=y.length;E<A;E++){const D=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,T=D.length;S<T;S++){const k=D[S];if(p(k,E,S,R)===!0){const P=k.__offset,W=Array.isArray(k.value)?k.value:[k.value];let b=0;for(let N=0;N<W.length;N++){const B=W[N],J=x(B);typeof B=="number"||typeof B=="boolean"?(k.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,P+b,k.__data)):B.isMatrix3?(k.__data[0]=B.elements[0],k.__data[1]=B.elements[1],k.__data[2]=B.elements[2],k.__data[3]=0,k.__data[4]=B.elements[3],k.__data[5]=B.elements[4],k.__data[6]=B.elements[5],k.__data[7]=0,k.__data[8]=B.elements[6],k.__data[9]=B.elements[7],k.__data[10]=B.elements[8],k.__data[11]=0):(B.toArray(k.__data,b),b+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,g,y,R){const E=_.value,A=g+"_"+y;if(R[A]===void 0)return typeof E=="number"||typeof E=="boolean"?R[A]=E:R[A]=E.clone(),!0;{const D=R[A];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return R[A]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function v(_){const g=_.uniforms;let y=0;const R=16;for(let A=0,D=g.length;A<D;A++){const S=Array.isArray(g[A])?g[A]:[g[A]];for(let T=0,k=S.length;T<k;T++){const P=S[T],W=Array.isArray(P.value)?P.value:[P.value];for(let b=0,N=W.length;b<N;b++){const B=W[b],J=x(B),I=y%R;I!==0&&R-I<J.boundary&&(y+=R-I),P.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=y,y+=J.storage}}}const E=y%R;return E>0&&(y+=R-E),_.__size=y,_.__cache={},this}function x(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const y=o.indexOf(g.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function f(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class I_{constructor(e={}){const{canvas:t=TM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const f=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this._useLegacyLights=!1,this.toneMapping=rr,this.toneMappingExposure=1;const g=this;let y=!1,R=0,E=0,A=null,D=-1,S=null;const T=new zt,k=new zt;let P=null;const W=new Be(0);let b=0,N=t.width,B=t.height,J=1,I=null,O=null;const H=new zt(0,0,N,B),Y=new zt(0,0,N,B);let oe=!1;const X=new vd;let ie=!1,j=!1,ae=null;const ce=new ft,we=new ue,Se=new F,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Re(){return A===null?J:1}let L=i;function fe(C,V){for(let K=0;K<C.length;K++){const Z=C[K],$=t.getContext(Z,V);if($!==null)return $}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ud}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",_e,!1),L===null){const V=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&V.shift(),L=fe(V,C),L===null)throw fe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let te,q,Q,ve,de,w,M,z,re,ee,G,pe,le,ye,Ee,Pe,se,We,Fe,Ne,De,Ce,be,Qe;function it(){te=new Fw(L),q=new Pw(L,te,e),te.init(q),Ce=new SA(L,te,q),Q=new xA(L,te,q),ve=new kw(L),de=new sA,w=new yA(L,te,Q,de,q,Ce,ve),M=new Dw(g),z=new Uw(g),re=new qM(L,q),be=new bw(L,te,re,q),ee=new Ow(L,re,ve,be),G=new Vw(L,ee,re,ve),Fe=new Gw(L,q,w),Pe=new Lw(de),pe=new rA(g,M,z,te,q,be,Pe),le=new TA(g,de),ye=new aA,Ee=new dA(te,q),We=new Cw(g,M,z,Q,G,d,l),se=new _A(g,G,q),Qe=new AA(L,ve,q,Q),Ne=new Rw(L,te,ve,q),De=new zw(L,te,ve,q),ve.programs=pe.programs,g.capabilities=q,g.extensions=te,g.properties=de,g.renderLists=ye,g.shadowMap=se,g.state=Q,g.info=ve}it();const He=new wA(g,L);this.xr=He,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=te.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=te.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(C){C!==void 0&&(J=C,this.setSize(N,B,!1))},this.getSize=function(C){return C.set(N,B)},this.setSize=function(C,V,K=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,B=V,t.width=Math.floor(C*J),t.height=Math.floor(V*J),K===!0&&(t.style.width=C+"px",t.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(N*J,B*J).floor()},this.setDrawingBufferSize=function(C,V,K){N=C,B=V,J=K,t.width=Math.floor(C*K),t.height=Math.floor(V*K),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(H)},this.setViewport=function(C,V,K,Z){C.isVector4?H.set(C.x,C.y,C.z,C.w):H.set(C,V,K,Z),Q.viewport(T.copy(H).multiplyScalar(J).floor())},this.getScissor=function(C){return C.copy(Y)},this.setScissor=function(C,V,K,Z){C.isVector4?Y.set(C.x,C.y,C.z,C.w):Y.set(C,V,K,Z),Q.scissor(k.copy(Y).multiplyScalar(J).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(C){Q.setScissorTest(oe=C)},this.setOpaqueSort=function(C){I=C},this.setTransparentSort=function(C){O=C},this.getClearColor=function(C){return C.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(C=!0,V=!0,K=!0){let Z=0;if(C){let $=!1;if(A!==null){const Te=A.texture.format;$=Te===u_||Te===c_||Te===l_}if($){const Te=A.texture.type,Le=Te===sr||Te===$i||Te===dd||Te===kr||Te===o_||Te===a_,Ue=We.getClearColor(),ke=We.getClearAlpha(),qe=Ue.r,Ve=Ue.g,Xe=Ue.b;Le?(p[0]=qe,p[1]=Ve,p[2]=Xe,p[3]=ke,L.clearBufferuiv(L.COLOR,0,p)):(v[0]=qe,v[1]=Ve,v[2]=Xe,v[3]=ke,L.clearBufferiv(L.COLOR,0,v))}else Z|=L.COLOR_BUFFER_BIT}V&&(Z|=L.DEPTH_BUFFER_BIT),K&&(Z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),ye.dispose(),Ee.dispose(),de.dispose(),M.dispose(),z.dispose(),G.dispose(),be.dispose(),Qe.dispose(),pe.dispose(),He.dispose(),He.removeEventListener("sessionstart",Zt),He.removeEventListener("sessionend",ot),ae&&(ae.dispose(),ae=null),en.stop()};function me(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=ve.autoReset,V=se.enabled,K=se.autoUpdate,Z=se.needsUpdate,$=se.type;it(),ve.autoReset=C,se.enabled=V,se.autoUpdate=K,se.needsUpdate=Z,se.type=$}function _e(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Me(C){const V=C.target;V.removeEventListener("dispose",Me),Oe(V)}function Oe(C){Ie(C),de.remove(C)}function Ie(C){const V=de.get(C).programs;V!==void 0&&(V.forEach(function(K){pe.releaseProgram(K)}),C.isShaderMaterial&&pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,K,Z,$,Te){V===null&&(V=xe);const Le=$.isMesh&&$.matrixWorld.determinant()<0,Ue=tx(C,V,K,Z,$);Q.setMaterial(Z,Le);let ke=K.index,qe=1;if(Z.wireframe===!0){if(ke=ee.getWireframeAttribute(K),ke===void 0)return;qe=2}const Ve=K.drawRange,Xe=K.attributes.position;let St=Ve.start*qe,yn=(Ve.start+Ve.count)*qe;Te!==null&&(St=Math.max(St,Te.start*qe),yn=Math.min(yn,(Te.start+Te.count)*qe)),ke!==null?(St=Math.max(St,0),yn=Math.min(yn,ke.count)):Xe!=null&&(St=Math.max(St,0),yn=Math.min(yn,Xe.count));const Dt=yn-St;if(Dt<0||Dt===1/0)return;be.setup($,Z,Ue,K,ke);let mi,pt=Ne;if(ke!==null&&(mi=re.get(ke),pt=De,pt.setIndex(mi)),$.isMesh)Z.wireframe===!0?(Q.setLineWidth(Z.wireframeLinewidth*Re()),pt.setMode(L.LINES)):pt.setMode(L.TRIANGLES);else if($.isLine){let $e=Z.linewidth;$e===void 0&&($e=1),Q.setLineWidth($e*Re()),$.isLineSegments?pt.setMode(L.LINES):$.isLineLoop?pt.setMode(L.LINE_LOOP):pt.setMode(L.LINE_STRIP)}else $.isPoints?pt.setMode(L.POINTS):$.isSprite&&pt.setMode(L.TRIANGLES);if($.isBatchedMesh)pt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)pt.renderInstances(St,Dt,$.count);else if(K.isInstancedBufferGeometry){const $e=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Gc=Math.min(K.instanceCount,$e);pt.renderInstances(St,Dt,Gc)}else pt.render(St,Dt)};function rt(C,V,K){C.transparent===!0&&C.side===dn&&C.forceSinglePass===!1?(C.side=on,C.needsUpdate=!0,Ca(C,V,K),C.side=ur,C.needsUpdate=!0,Ca(C,V,K),C.side=dn):Ca(C,V,K)}this.compile=function(C,V,K=null){K===null&&(K=C),m=Ee.get(K),m.init(),_.push(m),K.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),C!==K&&C.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights(g._useLegacyLights);const Z=new Set;return C.traverse(function($){const Te=$.material;if(Te)if(Array.isArray(Te))for(let Le=0;Le<Te.length;Le++){const Ue=Te[Le];rt(Ue,K,$),Z.add(Ue)}else rt(Te,K,$),Z.add(Te)}),_.pop(),m=null,Z},this.compileAsync=function(C,V,K=null){const Z=this.compile(C,V,K);return new Promise($=>{function Te(){if(Z.forEach(function(Le){de.get(Le).currentProgram.isReady()&&Z.delete(Le)}),Z.size===0){$(C);return}setTimeout(Te,10)}te.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let st=null;function Lt(C){st&&st(C)}function Zt(){en.stop()}function ot(){en.start()}const en=new C_;en.setAnimationLoop(Lt),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(C){st=C,He.setAnimationLoop(C),C===null?en.stop():en.start()},He.addEventListener("sessionstart",Zt),He.addEventListener("sessionend",ot),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(V),V=He.getCamera()),C.isScene===!0&&C.onBeforeRender(g,C,V,A),m=Ee.get(C,_.length),m.init(),_.push(m),ce.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),X.setFromProjectionMatrix(ce),j=this.localClippingEnabled,ie=Pe.init(this.clippingPlanes,j),x=ye.get(C,f.length),x.init(),f.push(x),si(C,V,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(I,O),this.info.render.frame++,ie===!0&&Pe.beginShadows();const K=m.state.shadowsArray;if(se.render(K,C,V),ie===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),We.render(x,C),m.setupLights(g._useLegacyLights),V.isArrayCamera){const Z=V.cameras;for(let $=0,Te=Z.length;$<Te;$++){const Le=Z[$];bd(x,C,Le,Le.viewport)}}else bd(x,C,V);A!==null&&(w.updateMultisampleRenderTarget(A),w.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(g,C,V),be.resetDefaultState(),D=-1,S=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function si(C,V,K,Z){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||X.intersectsSprite(C)){Z&&Se.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ce);const Le=G.update(C),Ue=C.material;Ue.visible&&x.push(C,Le,Ue,K,Se.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||X.intersectsObject(C))){const Le=G.update(C),Ue=C.material;if(Z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Se.copy(C.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Se.copy(Le.boundingSphere.center)),Se.applyMatrix4(C.matrixWorld).applyMatrix4(ce)),Array.isArray(Ue)){const ke=Le.groups;for(let qe=0,Ve=ke.length;qe<Ve;qe++){const Xe=ke[qe],St=Ue[Xe.materialIndex];St&&St.visible&&x.push(C,Le,St,K,Se.z,Xe)}}else Ue.visible&&x.push(C,Le,Ue,K,Se.z,null)}}const Te=C.children;for(let Le=0,Ue=Te.length;Le<Ue;Le++)si(Te[Le],V,K,Z)}function bd(C,V,K,Z){const $=C.opaque,Te=C.transmissive,Le=C.transparent;m.setupLightsView(K),ie===!0&&Pe.setGlobalState(g.clippingPlanes,K),Te.length>0&&ex($,Te,V,K),Z&&Q.viewport(T.copy(Z)),$.length>0&&Aa($,V,K),Te.length>0&&Aa(Te,V,K),Le.length>0&&Aa(Le,V,K),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function ex(C,V,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const Te=q.isWebGL2;ae===null&&(ae=new Gn(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")?di:sr,minFilter:fa,samples:Te?4:0})),g.getDrawingBufferSize(we),Te?ae.setSize(we.x,we.y):ae.setSize(of(we.x),of(we.y));const Le=g.getRenderTarget();g.setRenderTarget(ae),g.getClearColor(W),b=g.getClearAlpha(),b<1&&g.setClearColor(16777215,.5),g.clear();const Ue=g.toneMapping;g.toneMapping=rr,Aa(C,K,Z),w.updateMultisampleRenderTarget(ae),w.updateRenderTargetMipmap(ae);let ke=!1;for(let qe=0,Ve=V.length;qe<Ve;qe++){const Xe=V[qe],St=Xe.object,yn=Xe.geometry,Dt=Xe.material,mi=Xe.group;if(Dt.side===dn&&St.layers.test(Z.layers)){const pt=Dt.side;Dt.side=on,Dt.needsUpdate=!0,Rd(St,K,Z,yn,Dt,mi),Dt.side=pt,Dt.needsUpdate=!0,ke=!0}}ke===!0&&(w.updateMultisampleRenderTarget(ae),w.updateRenderTargetMipmap(ae)),g.setRenderTarget(Le),g.setClearColor(W,b),g.toneMapping=Ue}function Aa(C,V,K){const Z=V.isScene===!0?V.overrideMaterial:null;for(let $=0,Te=C.length;$<Te;$++){const Le=C[$],Ue=Le.object,ke=Le.geometry,qe=Z===null?Le.material:Z,Ve=Le.group;Ue.layers.test(K.layers)&&Rd(Ue,V,K,ke,qe,Ve)}}function Rd(C,V,K,Z,$,Te){C.onBeforeRender(g,V,K,Z,$,Te),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(g,V,K,Z,C,Te),$.transparent===!0&&$.side===dn&&$.forceSinglePass===!1?($.side=on,$.needsUpdate=!0,g.renderBufferDirect(K,V,Z,$,C,Te),$.side=ur,$.needsUpdate=!0,g.renderBufferDirect(K,V,Z,$,C,Te),$.side=dn):g.renderBufferDirect(K,V,Z,$,C,Te),C.onAfterRender(g,V,K,Z,$,Te)}function Ca(C,V,K){V.isScene!==!0&&(V=xe);const Z=de.get(C),$=m.state.lights,Te=m.state.shadowsArray,Le=$.state.version,Ue=pe.getParameters(C,$.state,Te,V,K),ke=pe.getProgramCacheKey(Ue);let qe=Z.programs;Z.environment=C.isMeshStandardMaterial?V.environment:null,Z.fog=V.fog,Z.envMap=(C.isMeshStandardMaterial?z:M).get(C.envMap||Z.environment),qe===void 0&&(C.addEventListener("dispose",Me),qe=new Map,Z.programs=qe);let Ve=qe.get(ke);if(Ve!==void 0){if(Z.currentProgram===Ve&&Z.lightsStateVersion===Le)return Ld(C,Ue),Ve}else Ue.uniforms=pe.getUniforms(C),C.onBuild(K,Ue,g),C.onBeforeCompile(Ue,g),Ve=pe.acquireProgram(Ue,ke),qe.set(ke,Ve),Z.uniforms=Ue.uniforms;const Xe=Z.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Xe.clippingPlanes=Pe.uniform),Ld(C,Ue),Z.needsLights=ix(C),Z.lightsStateVersion=Le,Z.needsLights&&(Xe.ambientLightColor.value=$.state.ambient,Xe.lightProbe.value=$.state.probe,Xe.directionalLights.value=$.state.directional,Xe.directionalLightShadows.value=$.state.directionalShadow,Xe.spotLights.value=$.state.spot,Xe.spotLightShadows.value=$.state.spotShadow,Xe.rectAreaLights.value=$.state.rectArea,Xe.ltc_1.value=$.state.rectAreaLTC1,Xe.ltc_2.value=$.state.rectAreaLTC2,Xe.pointLights.value=$.state.point,Xe.pointLightShadows.value=$.state.pointShadow,Xe.hemisphereLights.value=$.state.hemi,Xe.directionalShadowMap.value=$.state.directionalShadowMap,Xe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Xe.spotShadowMap.value=$.state.spotShadowMap,Xe.spotLightMatrix.value=$.state.spotLightMatrix,Xe.spotLightMap.value=$.state.spotLightMap,Xe.pointShadowMap.value=$.state.pointShadowMap,Xe.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.currentProgram=Ve,Z.uniformsList=null,Ve}function Pd(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=zl.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function Ld(C,V){const K=de.get(C);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function tx(C,V,K,Z,$){V.isScene!==!0&&(V=xe),w.resetTextureUnits();const Te=V.fog,Le=Z.isMeshStandardMaterial?V.environment:null,Ue=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ii,ke=(Z.isMeshStandardMaterial?z:M).get(Z.envMap||Le),qe=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ve=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Xe=!!K.morphAttributes.position,St=!!K.morphAttributes.normal,yn=!!K.morphAttributes.color;let Dt=rr;Z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Dt=g.toneMapping);const mi=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,pt=mi!==void 0?mi.length:0,$e=de.get(Z),Gc=m.state.lights;if(ie===!0&&(j===!0||C!==S)){const Rn=C===S&&Z.id===D;Pe.setState(Z,C,Rn)}let xt=!1;Z.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Gc.state.version||$e.outputColorSpace!==Ue||$.isBatchedMesh&&$e.batching===!1||!$.isBatchedMesh&&$e.batching===!0||$.isInstancedMesh&&$e.instancing===!1||!$.isInstancedMesh&&$e.instancing===!0||$.isSkinnedMesh&&$e.skinning===!1||!$.isSkinnedMesh&&$e.skinning===!0||$.isInstancedMesh&&$e.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&$e.instancingColor===!1&&$.instanceColor!==null||$e.envMap!==ke||Z.fog===!0&&$e.fog!==Te||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Pe.numPlanes||$e.numIntersection!==Pe.numIntersection)||$e.vertexAlphas!==qe||$e.vertexTangents!==Ve||$e.morphTargets!==Xe||$e.morphNormals!==St||$e.morphColors!==yn||$e.toneMapping!==Dt||q.isWebGL2===!0&&$e.morphTargetsCount!==pt)&&(xt=!0):(xt=!0,$e.__version=Z.version);let gr=$e.currentProgram;xt===!0&&(gr=Ca(Z,V,$));let Dd=!1,uo=!1,Vc=!1;const Xt=gr.getUniforms(),vr=$e.uniforms;if(Q.useProgram(gr.program)&&(Dd=!0,uo=!0,Vc=!0),Z.id!==D&&(D=Z.id,uo=!0),Dd||S!==C){Xt.setValue(L,"projectionMatrix",C.projectionMatrix),Xt.setValue(L,"viewMatrix",C.matrixWorldInverse);const Rn=Xt.map.cameraPosition;Rn!==void 0&&Rn.setValue(L,Se.setFromMatrixPosition(C.matrixWorld)),q.logarithmicDepthBuffer&&Xt.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Xt.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,uo=!0,Vc=!0)}if($.isSkinnedMesh){Xt.setOptional(L,$,"bindMatrix"),Xt.setOptional(L,$,"bindMatrixInverse");const Rn=$.skeleton;Rn&&(q.floatVertexTextures?(Rn.boneTexture===null&&Rn.computeBoneTexture(),Xt.setValue(L,"boneTexture",Rn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(Xt.setOptional(L,$,"batchingTexture"),Xt.setValue(L,"batchingTexture",$._matricesTexture,w));const Wc=K.morphAttributes;if((Wc.position!==void 0||Wc.normal!==void 0||Wc.color!==void 0&&q.isWebGL2===!0)&&Fe.update($,K,gr),(uo||$e.receiveShadow!==$.receiveShadow)&&($e.receiveShadow=$.receiveShadow,Xt.setValue(L,"receiveShadow",$.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(vr.envMap.value=ke,vr.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),uo&&(Xt.setValue(L,"toneMappingExposure",g.toneMappingExposure),$e.needsLights&&nx(vr,Vc),Te&&Z.fog===!0&&le.refreshFogUniforms(vr,Te),le.refreshMaterialUniforms(vr,Z,J,B,ae),zl.upload(L,Pd($e),vr,w)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(zl.upload(L,Pd($e),vr,w),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Xt.setValue(L,"center",$.center),Xt.setValue(L,"modelViewMatrix",$.modelViewMatrix),Xt.setValue(L,"normalMatrix",$.normalMatrix),Xt.setValue(L,"modelMatrix",$.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Rn=Z.uniformsGroups;for(let Xc=0,rx=Rn.length;Xc<rx;Xc++)if(q.isWebGL2){const Nd=Rn[Xc];Qe.update(Nd,gr),Qe.bind(Nd,gr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gr}function nx(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function ix(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,V,K){de.get(C.texture).__webglTexture=V,de.get(C.depthTexture).__webglTexture=K;const Z=de.get(C);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=K===void 0,Z.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,V){const K=de.get(C);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,K=0){A=C,R=V,E=K;let Z=!0,$=null,Te=!1,Le=!1;if(C){const ke=de.get(C);ke.__useDefaultFramebuffer!==void 0?(Q.bindFramebuffer(L.FRAMEBUFFER,null),Z=!1):ke.__webglFramebuffer===void 0?w.setupRenderTarget(C):ke.__hasExternalTextures&&w.rebindTextures(C,de.get(C.texture).__webglTexture,de.get(C.depthTexture).__webglTexture);const qe=C.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Le=!0);const Ve=de.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ve[V])?$=Ve[V][K]:$=Ve[V],Te=!0):q.isWebGL2&&C.samples>0&&w.useMultisampledRTT(C)===!1?$=de.get(C).__webglMultisampledFramebuffer:Array.isArray(Ve)?$=Ve[K]:$=Ve,T.copy(C.viewport),k.copy(C.scissor),P=C.scissorTest}else T.copy(H).multiplyScalar(J).floor(),k.copy(Y).multiplyScalar(J).floor(),P=oe;if(Q.bindFramebuffer(L.FRAMEBUFFER,$)&&q.drawBuffers&&Z&&Q.drawBuffers(C,$),Q.viewport(T),Q.scissor(k),Q.setScissorTest(P),Te){const ke=de.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+V,ke.__webglTexture,K)}else if(Le){const ke=de.get(C.texture),qe=V||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ke.__webglTexture,K||0,qe)}D=-1},this.readRenderTargetPixels=function(C,V,K,Z,$,Te,Le){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=de.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue){Q.bindFramebuffer(L.FRAMEBUFFER,Ue);try{const ke=C.texture,qe=ke.format,Ve=ke.type;if(qe!==ei&&Ce.convert(qe)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=Ve===di&&(te.has("EXT_color_buffer_half_float")||q.isWebGL2&&te.has("EXT_color_buffer_float"));if(Ve!==sr&&Ce.convert(Ve)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===Yi&&(q.isWebGL2||te.has("OES_texture_float")||te.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-Z&&K>=0&&K<=C.height-$&&L.readPixels(V,K,Z,$,Ce.convert(qe),Ce.convert(Ve),Te)}finally{const ke=A!==null?de.get(A).__webglFramebuffer:null;Q.bindFramebuffer(L.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(C,V,K=0){const Z=Math.pow(2,-K),$=Math.floor(V.image.width*Z),Te=Math.floor(V.image.height*Z);w.setTexture2D(V,0),L.copyTexSubImage2D(L.TEXTURE_2D,K,0,0,C.x,C.y,$,Te),Q.unbindTexture()},this.copyTextureToTexture=function(C,V,K,Z=0){const $=V.image.width,Te=V.image.height,Le=Ce.convert(K.format),Ue=Ce.convert(K.type);w.setTexture2D(K,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,K.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,K.unpackAlignment),V.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Z,C.x,C.y,$,Te,Le,Ue,V.image.data):V.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Z,C.x,C.y,V.mipmaps[0].width,V.mipmaps[0].height,Le,V.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,Z,C.x,C.y,Le,Ue,V.image),Z===0&&K.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(C,V,K,Z,$=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=C.max.x-C.min.x+1,Le=C.max.y-C.min.y+1,Ue=C.max.z-C.min.z+1,ke=Ce.convert(Z.format),qe=Ce.convert(Z.type);let Ve;if(Z.isData3DTexture)w.setTexture3D(Z,0),Ve=L.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)w.setTexture2DArray(Z,0),Ve=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Z.unpackAlignment);const Xe=L.getParameter(L.UNPACK_ROW_LENGTH),St=L.getParameter(L.UNPACK_IMAGE_HEIGHT),yn=L.getParameter(L.UNPACK_SKIP_PIXELS),Dt=L.getParameter(L.UNPACK_SKIP_ROWS),mi=L.getParameter(L.UNPACK_SKIP_IMAGES),pt=K.isCompressedTexture?K.mipmaps[$]:K.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,pt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,C.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,C.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,C.min.z),K.isDataTexture||K.isData3DTexture?L.texSubImage3D(Ve,$,V.x,V.y,V.z,Te,Le,Ue,ke,qe,pt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Ve,$,V.x,V.y,V.z,Te,Le,Ue,ke,pt.data)):L.texSubImage3D(Ve,$,V.x,V.y,V.z,Te,Le,Ue,ke,qe,pt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Xe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,St),L.pixelStorei(L.UNPACK_SKIP_PIXELS,yn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Dt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,mi),$===0&&Z.generateMipmaps&&L.generateMipmap(Ve),Q.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?w.setTextureCube(C,0):C.isData3DTexture?w.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?w.setTexture2DArray(C,0):w.setTexture2D(C,0),Q.unbindTexture()},this.resetState=function(){R=0,E=0,A=null,Q.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===md?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===Oc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ot?Hr:f_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hr?Ot:Ii}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class CA extends I_{}CA.prototype.isWebGL1Renderer=!0;class yd{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=i}clone(){return new yd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class bA extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class l0 extends Vn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ms=new ft,c0=new ft,dl=[],u0=new Kr,RA=new ft,To=new ze,Ao=new Jr;class PA extends ze{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new l0(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,RA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ms),u0.copy(e.boundingBox).applyMatrix4(ms),this.boundingBox.union(u0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ms),Ao.copy(e.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(Ao)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(To.geometry=this.geometry,To.material=this.material,To.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ao.copy(this.boundingSphere),Ao.applyMatrix4(i),e.ray.intersectsSphere(Ao)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ms),c0.multiplyMatrices(i,ms),To.matrixWorld=c0,To.raycast(e,dl);for(let o=0,a=dl.length;o<a;o++){const l=dl[o];l.instanceId=s,l.object=this,t.push(l)}dl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new l0(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class U_ extends mr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const h0=new F,f0=new F,d0=new ft,$u=new gd,pl=new Jr;class LA extends Tt{constructor(e=new At,t=new U_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)h0.fromBufferAttribute(t,r-1),f0.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=h0.distanceTo(f0);e.setAttribute("lineDistance",new Je(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(r),pl.radius+=s,e.ray.intersectsSphere(pl)===!1)return;d0.copy(r).invert(),$u.copy(e.ray).applyMatrix4(d0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new F,u=new F,h=new F,d=new F,p=this.isLineSegments?2:1,v=i.index,m=i.attributes.position;if(v!==null){const f=Math.max(0,o.start),_=Math.min(v.count,o.start+o.count);for(let g=f,y=_-1;g<y;g+=p){const R=v.getX(g),E=v.getX(g+1);if(c.fromBufferAttribute(m,R),u.fromBufferAttribute(m,E),$u.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let g=f,y=_-1;g<y;g+=p){if(c.fromBufferAttribute(m,g),u.fromBufferAttribute(m,g+1),$u.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const p0=new F,m0=new F;class DA extends LA{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)p0.fromBufferAttribute(t,r),m0.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+p0.distanceTo(m0);e.setAttribute("lineDistance",new Je(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class F_ extends mr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const g0=new ft,lf=new gd,ml=new Jr,gl=new F;class NA extends Tt{constructor(e=new At,t=new F_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ml.copy(i.boundingSphere),ml.applyMatrix4(r),ml.radius+=s,e.ray.intersectsSphere(ml)===!1)return;g0.copy(r).invert(),lf.copy(e.ray).applyMatrix4(g0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=d,x=p;v<x;v++){const m=c.getX(v);gl.fromBufferAttribute(h,m),v0(gl,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=d,x=p;v<x;v++)gl.fromBufferAttribute(h,v),v0(gl,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function v0(n,e,t,i,r,s,o){const a=lf.distanceSqToPoint(n);if(a<t){const l=new F;lf.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class IA extends xn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],d=i[r+1]-u,p=(o-u)/d;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ue:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new F,r=[],s=[],o=[],a=new F,l=new ft;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new F)}s[0]=new F,o[0]=new F;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Gt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Gt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Sd extends pi{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new ue,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class UA extends Sd{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Md(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,p*=u,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const vl=new F,Yu=new Md,Ku=new Md,Ju=new Md;class FA extends pi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new F){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(vl.subVectors(r[0],r[1]).add(r[0]),c=vl);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(vl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=vl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);x<1e-4&&(x=1),v<1e-4&&(v=x),m<1e-4&&(m=x),Yu.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,v,x,m),Ku.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,v,x,m),Ju.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,v,x,m)}else this.curveType==="catmullrom"&&(Yu.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Ku.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Ju.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(Yu.calc(l),Ku.calc(l),Ju.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function _0(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function OA(n,e){const t=1-n;return t*t*e}function zA(n,e){return 2*(1-n)*n*e}function kA(n,e){return n*n*e}function Wo(n,e,t,i){return OA(n,e)+zA(n,t)+kA(n,i)}function BA(n,e){const t=1-n;return t*t*t*e}function HA(n,e){const t=1-n;return 3*t*t*n*e}function GA(n,e){return 3*(1-n)*n*n*e}function VA(n,e){return n*n*n*e}function Xo(n,e,t,i,r){return BA(n,e)+HA(n,t)+GA(n,i)+VA(n,r)}class O_ extends pi{constructor(e=new ue,t=new ue,i=new ue,r=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ue){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Xo(e,r.x,s.x,o.x,a.x),Xo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class WA extends pi{constructor(e=new F,t=new F,i=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new F){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Xo(e,r.x,s.x,o.x,a.x),Xo(e,r.y,s.y,o.y,a.y),Xo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class z_ extends pi{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class XA extends pi{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class k_ extends pi{constructor(e=new ue,t=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ue){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Wo(e,r.x,s.x,o.x),Wo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jA extends pi{constructor(e=new F,t=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new F){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Wo(e,r.x,s.x,o.x),Wo(e,r.y,s.y,o.y),Wo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class B_ extends pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(_0(a,l.x,c.x,u.x,h.x),_0(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ue().fromArray(r))}return this}}var cf=Object.freeze({__proto__:null,ArcCurve:UA,CatmullRomCurve3:FA,CubicBezierCurve:O_,CubicBezierCurve3:WA,EllipseCurve:Sd,LineCurve:z_,LineCurve3:XA,QuadraticBezierCurve:k_,QuadraticBezierCurve3:jA,SplineCurve:B_});class qA extends pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cf[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new cf[r.type]().fromJSON(r))}return this}}class _c extends qA{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new z_(this.currentPoint.clone(),new ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new k_(this.currentPoint.clone(),new ue(e,t),new ue(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new O_(this.currentPoint.clone(),new ue(e,t),new ue(i,r),new ue(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new B_(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new Sd(e,t,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ed extends At{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Gt(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/t,h=new F,d=new ue,p=new F,v=new F,x=new F;let m=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-m,p.z=f*0,v.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(v)}for(let _=0;_<=t;_++){const g=i+_*u*r,y=Math.sin(g),R=Math.cos(g);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*y,h.y=e[E].y,h.z=e[E].x*R,o.push(h.x,h.y,h.z),d.x=_/t,d.y=E/(e.length-1),a.push(d.x,d.y);const A=l[3*E+0]*y,D=l[3*E+1],S=l[3*E+0]*R;c.push(A,D,S)}}for(let _=0;_<t;_++)for(let g=0;g<e.length-1;g++){const y=g+_*e.length,R=y,E=y+e.length,A=y+e.length+1,D=y+1;s.push(R,E,D),s.push(A,D,E)}this.setIndex(s),this.setAttribute("position",new Je(o,3)),this.setAttribute("uv",new Je(a,2)),this.setAttribute("normal",new Je(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ed(e.points,e.segments,e.phiStart,e.phiLength)}}class pa extends Ed{constructor(e=1,t=1,i=4,r=8){const s=new _c;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:r}}static fromJSON(e){return new pa(e.radius,e.length,e.capSegments,e.radialSegments)}}class jo extends At{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new F,u=new ue;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const p=i+h/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(a,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Bc extends At{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],p=[];let v=0;const x=[],m=i/2;let f=0;_(),o===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new Je(h,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(p,2));function _(){const y=new F,R=new F;let E=0;const A=(t-e)/i;for(let D=0;D<=s;D++){const S=[],T=D/s,k=T*(t-e)+e;for(let P=0;P<=r;P++){const W=P/r,b=W*l+a,N=Math.sin(b),B=Math.cos(b);R.x=k*N,R.y=-T*i+m,R.z=k*B,h.push(R.x,R.y,R.z),y.set(N,A,B).normalize(),d.push(y.x,y.y,y.z),p.push(W,1-T),S.push(v++)}x.push(S)}for(let D=0;D<r;D++)for(let S=0;S<s;S++){const T=x[S][D],k=x[S+1][D],P=x[S+1][D+1],W=x[S][D+1];u.push(T,k,W),u.push(k,P,W),E+=6}c.addGroup(f,E,0),f+=E}function g(y){const R=v,E=new ue,A=new F;let D=0;const S=y===!0?e:t,T=y===!0?1:-1;for(let P=1;P<=r;P++)h.push(0,m*T,0),d.push(0,T,0),p.push(.5,.5),v++;const k=v;for(let P=0;P<=r;P++){const b=P/r*l+a,N=Math.cos(b),B=Math.sin(b);A.x=S*B,A.y=m*T,A.z=S*N,h.push(A.x,A.y,A.z),d.push(0,T,0),E.x=N*.5+.5,E.y=B*.5*T+.5,p.push(E.x,E.y),v++}for(let P=0;P<r;P++){const W=R+P,b=k+P;y===!0?u.push(b,b+1,W):u.push(b+1,b,W),D+=3}c.addGroup(f,D,y===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const _l=new F,xl=new F,Qu=new F,yl=new Fn;class $A extends At{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Ol*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},p=[];for(let v=0;v<l;v+=3){o?(c[0]=o.getX(v),c[1]=o.getX(v+1),c[2]=o.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:x,b:m,c:f}=yl;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),yl.getNormal(Qu),h[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let _=0;_<3;_++){const g=(_+1)%3,y=h[_],R=h[g],E=yl[u[_]],A=yl[u[g]],D=`${y}_${R}`,S=`${R}_${y}`;S in d&&d[S]?(Qu.dot(d[S].normal)<=s&&(p.push(E.x,E.y,E.z),p.push(A.x,A.y,A.z)),d[S]=null):D in d||(d[D]={index0:c[_],index1:c[g],normal:Qu.clone()})}}for(const v in d)if(d[v]){const{index0:x,index1:m}=d[v];_l.fromBufferAttribute(a,x),xl.fromBufferAttribute(a,m),p.push(_l.x,_l.y,_l.z),p.push(xl.x,xl.y,xl.z)}this.setAttribute("position",new Je(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class xc extends _c{constructor(e){super(e),this.uuid=ao(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new _c().fromJSON(r))}return this}}const YA={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=H_(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,d,p;if(i&&(s=e2(n,e,s,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let v=t;v<r;v+=t)h=n[v],d=n[v+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return ma(s,o,t,a,l,p,0),o}};function H_(n,e,t,i,r){let s,o;if(r===h2(n,e,t,i)>0)for(s=e;s<t;s+=i)o=x0(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=x0(s,n[s],n[s+1],o);return o&&Hc(o,o.next)&&(va(o),o=o.next),o}function qr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Hc(t,t.next)||gt(t.prev,t,t.next)===0)){if(va(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ma(n,e,t,i,r,s,o){if(!n)return;!o&&s&&s2(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?JA(n,i,r,s):KA(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),va(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=QA(qr(n),e,t),ma(n,e,t,i,r,s,2)):o===2&&ZA(n,e,t,i,r,s):ma(qr(n),e,t,i,r,s,1);break}}}function KA(n){const e=n.prev,t=n,i=n.next;if(gt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let v=i.next;for(;v!==e;){if(v.x>=u&&v.x<=d&&v.y>=h&&v.y<=p&&Ls(r,a,s,l,o,c,v.x,v.y)&&gt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function JA(n,e,t,i){const r=n.prev,s=n,o=n.next;if(gt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,v=u<h?u<d?u:d:h<d?h:d,x=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,f=uf(p,v,e,t,i),_=uf(x,m,e,t,i);let g=n.prevZ,y=n.nextZ;for(;g&&g.z>=f&&y&&y.z<=_;){if(g.x>=p&&g.x<=x&&g.y>=v&&g.y<=m&&g!==r&&g!==o&&Ls(a,u,l,h,c,d,g.x,g.y)&&gt(g.prev,g,g.next)>=0||(g=g.prevZ,y.x>=p&&y.x<=x&&y.y>=v&&y.y<=m&&y!==r&&y!==o&&Ls(a,u,l,h,c,d,y.x,y.y)&&gt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;g&&g.z>=f;){if(g.x>=p&&g.x<=x&&g.y>=v&&g.y<=m&&g!==r&&g!==o&&Ls(a,u,l,h,c,d,g.x,g.y)&&gt(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;y&&y.z<=_;){if(y.x>=p&&y.x<=x&&y.y>=v&&y.y<=m&&y!==r&&y!==o&&Ls(a,u,l,h,c,d,y.x,y.y)&&gt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function QA(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!Hc(r,s)&&G_(r,i,i.next,s)&&ga(r,s)&&ga(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),va(i),va(i.next),i=n=s),i=i.next}while(i!==n);return qr(i)}function ZA(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&l2(o,a)){let l=V_(o,a);o=qr(o,o.next),l=qr(l,l.next),ma(o,e,t,i,r,s,0),ma(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function e2(n,e,t,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=H_(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(a2(c));for(r.sort(t2),s=0;s<r.length;s++)t=n2(r[s],t);return t}function t2(n,e){return n.x-e.x}function n2(n,e){const t=i2(n,e);if(!t)return e;const i=V_(t,n);return qr(i,i.next),qr(t,t.next)}function i2(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>i&&(i=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Ls(o<c?s:i,o,l,c,o<c?i:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),ga(t,n)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&r2(r,t)))&&(r=t,u=h)),t=t.next;while(t!==a);return r}function r2(n,e){return gt(n.prev,n,e.prev)<0&&gt(e.next,n,n.next)<0}function s2(n,e,t,i){let r=n;do r.z===0&&(r.z=uf(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,o2(r)}function o2(n){let e,t,i,r,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(o>1);return n}function uf(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function a2(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ls(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function l2(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!c2(n,e)&&(ga(n,e)&&ga(e,n)&&u2(n,e)&&(gt(n.prev,n,e.prev)||gt(n,e.prev,e))||Hc(n,e)&&gt(n.prev,n,n.next)>0&&gt(e.prev,e,e.next)>0)}function gt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Hc(n,e){return n.x===e.x&&n.y===e.y}function G_(n,e,t,i){const r=Ml(gt(n,e,t)),s=Ml(gt(n,e,i)),o=Ml(gt(t,i,n)),a=Ml(gt(t,i,e));return!!(r!==s&&o!==a||r===0&&Sl(n,t,e)||s===0&&Sl(n,i,e)||o===0&&Sl(t,n,i)||a===0&&Sl(t,e,i))}function Sl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ml(n){return n>0?1:n<0?-1:0}function c2(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&G_(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ga(n,e){return gt(n.prev,n,n.next)<0?gt(n,e,n.next)>=0&&gt(n,n.prev,e)>=0:gt(n,e,n.prev)<0||gt(n,n.next,e)<0}function u2(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function V_(n,e){const t=new hf(n.i,n.x,n.y),i=new hf(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function x0(n,e,t,i){const r=new hf(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function va(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function hf(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function h2(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class or{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return or.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];y0(e),S0(i,e);let o=e.length;t.forEach(y0);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,S0(i,t[l]);const a=YA.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function y0(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function S0(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class wd extends At{constructor(e=new xc([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Je(r,3)),this.setAttribute("uv",new Je(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:f2;let g,y=!1,R,E,A,D;f&&(g=f.getSpacedPoints(u),y=!0,d=!1,R=f.computeFrenetFrames(u,!1),E=new F,A=new F,D=new F),d||(m=0,p=0,v=0,x=0);const S=a.extractPoints(c);let T=S.shape;const k=S.holes;if(!or.isClockWise(T)){T=T.reverse();for(let L=0,fe=k.length;L<fe;L++){const te=k[L];or.isClockWise(te)&&(k[L]=te.reverse())}}const W=or.triangulateShape(T,k),b=T;for(let L=0,fe=k.length;L<fe;L++){const te=k[L];T=T.concat(te)}function N(L,fe,te){return fe||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(fe,te)}const B=T.length,J=W.length;function I(L,fe,te){let q,Q,ve;const de=L.x-fe.x,w=L.y-fe.y,M=te.x-L.x,z=te.y-L.y,re=de*de+w*w,ee=de*z-w*M;if(Math.abs(ee)>Number.EPSILON){const G=Math.sqrt(re),pe=Math.sqrt(M*M+z*z),le=fe.x-w/G,ye=fe.y+de/G,Ee=te.x-z/pe,Pe=te.y+M/pe,se=((Ee-le)*z-(Pe-ye)*M)/(de*z-w*M);q=le+de*se-L.x,Q=ye+w*se-L.y;const We=q*q+Q*Q;if(We<=2)return new ue(q,Q);ve=Math.sqrt(We/2)}else{let G=!1;de>Number.EPSILON?M>Number.EPSILON&&(G=!0):de<-Number.EPSILON?M<-Number.EPSILON&&(G=!0):Math.sign(w)===Math.sign(z)&&(G=!0),G?(q=-w,Q=de,ve=Math.sqrt(re)):(q=de,Q=w,ve=Math.sqrt(re/2))}return new ue(q/ve,Q/ve)}const O=[];for(let L=0,fe=b.length,te=fe-1,q=L+1;L<fe;L++,te++,q++)te===fe&&(te=0),q===fe&&(q=0),O[L]=I(b[L],b[te],b[q]);const H=[];let Y,oe=O.concat();for(let L=0,fe=k.length;L<fe;L++){const te=k[L];Y=[];for(let q=0,Q=te.length,ve=Q-1,de=q+1;q<Q;q++,ve++,de++)ve===Q&&(ve=0),de===Q&&(de=0),Y[q]=I(te[q],te[ve],te[de]);H.push(Y),oe=oe.concat(Y)}for(let L=0;L<m;L++){const fe=L/m,te=p*Math.cos(fe*Math.PI/2),q=v*Math.sin(fe*Math.PI/2)+x;for(let Q=0,ve=b.length;Q<ve;Q++){const de=N(b[Q],O[Q],q);ce(de.x,de.y,-te)}for(let Q=0,ve=k.length;Q<ve;Q++){const de=k[Q];Y=H[Q];for(let w=0,M=de.length;w<M;w++){const z=N(de[w],Y[w],q);ce(z.x,z.y,-te)}}}const X=v+x;for(let L=0;L<B;L++){const fe=d?N(T[L],oe[L],X):T[L];y?(A.copy(R.normals[0]).multiplyScalar(fe.x),E.copy(R.binormals[0]).multiplyScalar(fe.y),D.copy(g[0]).add(A).add(E),ce(D.x,D.y,D.z)):ce(fe.x,fe.y,0)}for(let L=1;L<=u;L++)for(let fe=0;fe<B;fe++){const te=d?N(T[fe],oe[fe],X):T[fe];y?(A.copy(R.normals[L]).multiplyScalar(te.x),E.copy(R.binormals[L]).multiplyScalar(te.y),D.copy(g[L]).add(A).add(E),ce(D.x,D.y,D.z)):ce(te.x,te.y,h/u*L)}for(let L=m-1;L>=0;L--){const fe=L/m,te=p*Math.cos(fe*Math.PI/2),q=v*Math.sin(fe*Math.PI/2)+x;for(let Q=0,ve=b.length;Q<ve;Q++){const de=N(b[Q],O[Q],q);ce(de.x,de.y,h+te)}for(let Q=0,ve=k.length;Q<ve;Q++){const de=k[Q];Y=H[Q];for(let w=0,M=de.length;w<M;w++){const z=N(de[w],Y[w],q);y?ce(z.x,z.y+g[u-1].y,g[u-1].x+te):ce(z.x,z.y,h+te)}}}ie(),j();function ie(){const L=r.length/3;if(d){let fe=0,te=B*fe;for(let q=0;q<J;q++){const Q=W[q];we(Q[2]+te,Q[1]+te,Q[0]+te)}fe=u+m*2,te=B*fe;for(let q=0;q<J;q++){const Q=W[q];we(Q[0]+te,Q[1]+te,Q[2]+te)}}else{for(let fe=0;fe<J;fe++){const te=W[fe];we(te[2],te[1],te[0])}for(let fe=0;fe<J;fe++){const te=W[fe];we(te[0]+B*u,te[1]+B*u,te[2]+B*u)}}i.addGroup(L,r.length/3-L,0)}function j(){const L=r.length/3;let fe=0;ae(b,fe),fe+=b.length;for(let te=0,q=k.length;te<q;te++){const Q=k[te];ae(Q,fe),fe+=Q.length}i.addGroup(L,r.length/3-L,1)}function ae(L,fe){let te=L.length;for(;--te>=0;){const q=te;let Q=te-1;Q<0&&(Q=L.length-1);for(let ve=0,de=u+m*2;ve<de;ve++){const w=B*ve,M=B*(ve+1),z=fe+q+w,re=fe+Q+w,ee=fe+Q+M,G=fe+q+M;Se(z,re,ee,G)}}}function ce(L,fe,te){l.push(L),l.push(fe),l.push(te)}function we(L,fe,te){xe(L),xe(fe),xe(te);const q=r.length/3,Q=_.generateTopUV(i,r,q-3,q-2,q-1);Re(Q[0]),Re(Q[1]),Re(Q[2])}function Se(L,fe,te,q){xe(L),xe(fe),xe(q),xe(fe),xe(te),xe(q);const Q=r.length/3,ve=_.generateSideWallUV(i,r,Q-6,Q-3,Q-2,Q-1);Re(ve[0]),Re(ve[1]),Re(ve[3]),Re(ve[1]),Re(ve[2]),Re(ve[3])}function xe(L){r.push(l[L*3+0]),r.push(l[L*3+1]),r.push(l[L*3+2])}function Re(L){s.push(L.x),s.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return d2(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new cf[r.type]().fromJSON(r)),new wd(i,e.options)}}const f2={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new ue(s,o),new ue(a,l),new ue(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[r*3],p=e[r*3+1],v=e[r*3+2],x=e[s*3],m=e[s*3+1],f=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ue(o,1-l),new ue(c,1-h),new ue(d,1-v),new ue(x,1-f)]:[new ue(a,1-l),new ue(u,1-h),new ue(p,1-v),new ue(m,1-f)]}};function d2(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Pr extends At{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/r,p=new F,v=new ue;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){const f=s+m/i*o;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/t+1)/2,v.y=(p.y/t+1)/2,u.push(v.x,v.y)}h+=d}for(let x=0;x<r;x++){const m=x*(i+1);for(let f=0;f<i;f++){const _=f+m,g=_,y=_+i+1,R=_+i+2,E=_+1;a.push(g,y,E),a.push(y,R,E)}}this.setIndex(a),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Td extends At{constructor(e=new xc([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Je(r,3)),this.setAttribute("normal",new Je(s,3)),this.setAttribute("uv",new Je(o,2));function c(u){const h=r.length/3,d=u.extractPoints(t);let p=d.shape;const v=d.holes;or.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=v.length;m<f;m++){const _=v[m];or.isClockWise(_)===!0&&(v[m]=_.reverse())}const x=or.triangulateShape(p,v);for(let m=0,f=v.length;m<f;m++){const _=v[m];p=p.concat(_)}for(let m=0,f=p.length;m<f;m++){const _=p[m];r.push(_.x,_.y,0),s.push(0,0,1),o.push(_.x,_.y)}for(let m=0,f=x.length;m<f;m++){const _=x[m],g=_[0]+h,y=_[1]+h,R=_[2]+h;i.push(g,y,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return p2(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new Td(i,e.curveSegments)}}function p2(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class ti extends At{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new F,d=new F,p=[],v=[],x=[],m=[];for(let f=0;f<=i;f++){const _=[],g=f/i;let y=0;f===0&&o===0?y=.5/t:f===i&&l===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){const E=R/t;h.x=-e*Math.cos(r+E*s)*Math.sin(o+g*a),h.y=e*Math.cos(o+g*a),h.z=e*Math.sin(r+E*s)*Math.sin(o+g*a),v.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(E+y,1-g),_.push(c++)}u.push(_)}for(let f=0;f<i;f++)for(let _=0;_<t;_++){const g=u[f][_+1],y=u[f][_],R=u[f+1][_],E=u[f+1][_+1];(f!==0||o>0)&&p.push(g,y,E),(f!==i-1||l<Math.PI)&&p.push(y,R,E)}this.setIndex(p),this.setAttribute("position",new Je(v,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qo extends At{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new F,h=new F,d=new F;for(let p=0;p<=i;p++)for(let v=0;v<=r;v++){const x=v/r*s,m=p/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(v/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=r;v++){const x=(r+1)*p+v-1,m=(r+1)*(p-1)+v-1,f=(r+1)*(p-1)+v,_=(r+1)*p+v;o.push(x,m,_),o.push(m,f,_)}this.setIndex(o),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class m2 extends mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ir extends mr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pd,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class g2 extends mr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pd,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class W_ extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class v2 extends W_{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Zu=new ft,M0=new F,E0=new F;class _2{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vd,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;M0.setFromMatrixPosition(e.matrixWorld),t.position.copy(M0),E0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(E0),t.updateMatrixWorld(),Zu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class x2 extends _2{constructor(){super(new _d(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class y2 extends W_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new x2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class S2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=w0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=w0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function w0(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ud}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ud);const X_={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class co{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const M2=new _d(-1,1,1,-1,0,1);class E2 extends At{constructor(){super(),this.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Je([0,2,0,0,2,0],2))}}const w2=new E2;class Ad{constructor(e){this._mesh=new ze(w2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,M2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class j_ extends co{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof mn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=da.clone(e.uniforms),this.material=new mn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ad(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class T0 extends co{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class T2 extends co{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class A2{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ue);this._width=i.width,this._height=i.height,t=new Gn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:di}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new j_(X_),this.copyPass.material.blending=bi,this.clock=new S2}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}T0!==void 0&&(o instanceof T0?i=!0:o instanceof T2&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class C2 extends co{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Be}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const b2={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Be(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class no extends co{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new ue(e.x,e.y):new ue(256,256),this.clearColor=new Be(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Gn(s,o,{type:di}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Gn(s,o,{type:di});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new Gn(s,o,{type:di});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const a=b2;this.highPassUniforms=da.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new mn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ue(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=X_;this.copyUniforms=da.clone(u.uniforms),this.blendMaterial=new mn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Jh,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Be,this.oldClearAlpha=1,this.basic=new It,this.fsQuad=new Ad(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ue(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=no.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=no.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new mn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ue(.5,.5)},direction:{value:new ue(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new mn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}no.BlurDirectionX=new ue(1,0);no.BlurDirectionY=new ue(0,1);const R2={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class P2 extends co{constructor(){super();const e=R2;this.uniforms=da.clone(e.uniforms),this.material=new m2({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ad(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},tt.getTransfer(this._outputColorSpace)===at&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===e_?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===t_?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===n_?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fd?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===i_&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Ur=16,Fr=.14,_a={exp:{label:"Express",games:2,winBy:1,tbAt:0,need:1,cols:1},full:{label:"Completo",games:6,winBy:2,tbAt:6,need:2,cols:3}},L2={drive:{T:1,d:7.2},globo:{T:1.9,d:8.7},dejada:{T:1.25,d:1.9},remate:{T:.62,d:6},saque:{T:1.15,d:5.2},x3:{T:.55,d:3.4},x4:{T:.62,d:8.4}},A0={drive:[-.7,1.7,.28],saque:[-.7,1.7,.28],globo:[.1,2.5,.4],dejada:[.7,1.2,.3],remate:[.6,.15,.46,3.15]},D2=6.95,C0={drive:.5,globo:.35,dejada:-1,remate:.2,saque:.1,x3:.2,x4:.2},N2={drive:.95,globo:.5,dejada:.8,remate:2.2},I2=["Perfecto","Bien","Justo"],q_={"2v2":[0,2,1,3],"1v1":[0,2]},ff=n=>n<2?"a":"b",hn=n=>n==="a"?1:-1,ar=n=>n==="a"?"b":"a",df=n=>{const e=parseInt(n.slice(1),16);return(e>>16&255)*.299+(e>>8&255)*.587+(e&255)*.114};function $o(n,e,t,i=4){const r=document.createElement("canvas");r.width=n,r.height=e,t(r.getContext("2d"),n,e);const s=new IA(r);return s.anisotropy=i,s.colorSpace=Ot,s}const Ds=.15,Ns=.21,El=.06;function eh(n,e){n.absarc(0,El*e,Ds*e,0,Math.PI,!1),n.bezierCurveTo(-Ds*e,(El-.1)*e,-.05*e,(-Ns+.06)*e,-.022*e,-Ns*e),n.lineTo(.022*e,-Ns*e),n.bezierCurveTo(.05*e,(-Ns+.06)*e,Ds*e,(El-.1)*e,Ds*e,El*e)}let Is=null;function U2(){if(Is)return Is;const n=new xc;eh(n,1);const e=new _c;eh(e,.9),n.holes.push(e);const t=new wd(n,{depth:.034,bevelEnabled:!1,curveSegments:16});t.translate(0,0,-.017);const i=new Td((()=>{const l=new xc;return eh(l,.93),l})(),16),r=i.attributes.uv,s=i.attributes.position;for(let l=0;l<r.count;l++)r.setXY(l,(s.getX(l)+Ds)/(2*Ds),(s.getY(l)+Ns)/(2*Ns));const o=i.clone();o.translate(0,0,.0185);const a=i.clone();return a.rotateY(Math.PI),a.translate(0,0,-.0185),Is={rim:t,front:o,back:a},Is}function F2(n){const i=$o(256,360,r=>{const s=new Be(n),o=df(n);r.fillStyle=n,r.fillRect(0,0,256,360);const a=r.createLinearGradient(0,0,256,360);a.addColorStop(0,"rgba(255,255,255,0.16)"),a.addColorStop(1,"rgba(0,0,0,0.18)"),r.fillStyle=a,r.fillRect(0,0,256,360),r.save(),r.setTransform(1,0,-.18,1,26,0),r.fillStyle=o>185?"#1B1B1A":"#FFFFFF",r.fillRect(34,62,30,130),r.fillRect(90,62,30,130),r.fillRect(34,162,86,30),r.fillRect(136,62,80,30),r.fillRect(136,62,30,130),r.fillRect(136,162,80,30),r.restore(),r.fillStyle=`#${s.clone().multiplyScalar(.6).getHexString()}`,r.beginPath(),r.moveTo(128,214),r.lineTo(80,300),r.lineTo(176,300),r.closePath(),r.fill(),r.globalCompositeOperation="destination-out";for(let l=0;l<8;l++)for(let c=0;c<9;c++){const u=34+c*23+l%2*11.5,h=34+l*24;h>215&&Math.abs(u-128)<70+(h-215)||(r.beginPath(),r.arc(u,h,5.6,0,6.283),r.fill())}r.beginPath(),r.moveTo(128,226),r.lineTo(92,292),r.lineTo(164,292),r.closePath(),r.fill()},8);return i.userData.shared=!0,i}const pf=new Map;function O2(n){let e=pf.get(n);if(!e){const t=new Ir({map:F2(n),roughness:.45,metalness:.05,alphaTest:.5,transparent:!1}),i=new Ir({color:new Be(n).multiplyScalar(.55),roughness:.4});e={face:t,rim:i},pf.set(n,e)}return e}function z2(n){const{rim:e,front:t,back:i}=U2(),r=O2(n),s=new Ut,o=new ze(e,r.rim);return o.castShadow=!0,s.add(o,new ze(t,r.face),new ze(i,r.face)),s.rotation.z=Math.PI,s}const $_=new It({color:"#141821",side:on});$_.userData.shared=!0;let kl=null;const gs=(n,e)=>`#${new Be(n).multiplyScalar(e).getHexString()}`;function b0(n,e,t){const i=new Ut,r=new Ut;r.position.y=.92,i.add(r);const s=(j,ae=.7)=>new Ir({color:j,roughness:ae}),o=(j,ae=1.07)=>{const ce=new ze(j.geometry,$_);return ce.scale.setScalar(ae),j.add(ce),j},a=(j,ae,ce,we,Se,xe=1.07)=>(j.position.set(ae,ce,we),j.castShadow=!!Se,xe&&o(j,xe),j),l=(j,ae,ce,we,Se,xe,Re,L)=>a(new ze(new Bc(j,ae,ce,16),s(we)),Se,xe,Re,!0,L),c=(j,ae,ce,we,Se,xe,Re)=>a(new ze(new pa(j,ae,4,12),s(ce)),we,Se,xe,!0,Re),u=(j,ae,ce,we,Se,xe,Re,L,fe)=>{const te=a(new ze(new ti(j,18,14),s(ae)),ce,we,Se,!0,fe);return xe&&te.scale.set(xe,Re,L),te},h=(j,ae,ce,we,Se,xe,Re,L)=>a(new ze(new hr(j,ae,ce),s(we)),Se,xe,Re,L,0),d=gs(n.shirt,.35),p=gs(n.skin,.8),v="#F4F4F0",x=j=>{const ae=new Ut;ae.position.set(j*.12,.92,0),ae.add(l(.118,.1,.34,d,0,-.17,0)),ae.add(h(.012,.3,.07,gs(n.shirt,1.25),j*.113,-.17,0)),ae.add(c(.072,.1,n.skin,0,-.38,0));const ce=new Ut;ce.position.y=-.43,ce.add(c(.06,.2,n.skin,0,-.17,0)),ce.add(l(.066,.064,.17,v,0,-.34,0),l(.0675,.0675,.035,n.shirt,0,-.27,0,0));const we=new Ut;we.add(h(.125,.07,.25,v,0,0,0,!0));const Se=u(.062,v,0,0,-.12,1,.78,1,0);return we.add(Se),we.add(h(.13,.03,.27,"#D8D8D2",0,-.045,0),h(.04,.045,.14,n.shirt,j*.06,0,0)),we.position.set(0,-.455,-.045),ce.add(we),ae.add(ce),ae.userData.kn=ce,ae},m=x(-1),f=x(1);i.add(m,f);const _=c(.2,.3,n.shirt,0,.3,0);_.scale.z=.62,r.add(_);const g=l(.205,.2,.14,d,0,-.03,0);g.scale.z=.66,r.add(g),r.add(u(.108,n.shirt,-.29,.54,0),u(.108,n.shirt,.29,.54,0),l(.06,.07,.12,n.skin,0,.7,0));const y=new ze(new qo(.075,.018,8,20),s(gs(n.shirt,1.35)));y.rotation.x=Math.PI/2,y.position.set(0,.67,-.01),r.add(y);const R=new ze(new Kt(.11,.07),new It({transparent:!0,toneMapped:!1,map:$o(64,40,(j,ae,ce)=>{j.fillStyle=df(n.shirt)<140?"#fff":"#1B1B1A",j.font="900 30px sans-serif",j.textAlign="center",j.textBaseline="middle",j.save(),j.transform(1,0,-.2,1,5,0),j.fillText("UC",ae/2,ce/2+2),j.restore()})}));R.position.set(-.1,.5,-.127),R.rotation.y=.12,r.add(R);const E=new Ut;E.position.y=.84,r.add(E);const A=u(.2,n.skin,0,0,0,1,1.08,1.02);E.add(A),E.add(u(.045,n.skin,-.2,-.01,0,1,1.1,.7),u(.045,n.skin,.2,-.01,0,1,1.1,.7)),E.add(u(.03,p,0,-.03,-.2,1,.9,.9,0)),E.add(u(.032,"#E58C8C",-.12,-.07,-.17,1,.6,.4,0),u(.032,"#E58C8C",.12,-.07,-.17,1,.6,.4,0));const D=j=>{const ae=new Ut;return ae.position.set(j*.075,.02,-.178),ae.add(u(.034,"#fff",0,0,0,1,.9,.55,0),u(.019,"#241812",0,0,-.012,1,1,.6,0),u(.006,"#fff",j*.006,.008,-.022,1,1,1,0)),ae},S=D(-1),T=D(1);E.add(S,T);const k=j=>{const ae=h(.075,.014,.014,n.hair,j*.075,.075,-.188);return ae.rotation.z=j*-.12,ae};E.add(k(-1),k(1));const P=new ze(new qo(.04,.007,6,12,Math.PI),s("#8a4040"));P.rotation.z=Math.PI,P.position.set(0,-.09,-.19),E.add(P);const W=s(n.hair,.85),b=new ze(new ti(.215,20,14,0,6.283,0,1.28),W);b.position.y=.035,b.castShadow=!0,o(b,1.06),E.add(b);const N=new ze(new ti(.214,18,12,0,Math.PI,0,2),W);N.position.y=.035,N.rotation.y=0,o(N,1.05),E.add(N);let B=null;if(n.style==="corto"){const j=h(.3,.05,.08,n.hair,0,.15,-.165);j.rotation.x=-.25,E.add(j),E.add(h(.02,.08,.05,n.hair,-.188,.05,-.07),h(.02,.08,.05,n.hair,.188,.05,-.07))}if(n.style==="largo"&&(B=new Ut,B.position.set(0,.06,.15),B.add(c(.1,.34,n.hair,0,-.22,.02),c(.03,.05,gs(n.hair,1.5),0,-.02,0,0)),E.add(B),E.add(h(.3,.1,.09,n.hair,0,.13,-.16))),n.style==="rodete"&&(E.add(u(.1,n.hair,0,.21,.04)),E.add(h(.3,.06,.09,n.hair,0,.14,-.16))),n.acc==="vincha"){const j=new ze(new qo(.212,.028,8,24),s("#E24B4A"));j.rotation.x=Math.PI/2,j.position.y=.07,E.add(j)}if(n.acc==="gorra"){const j=new ze(new ti(.235,18,10,0,6.283,0,1.45),s("#E24B4A"));j.position.y=.04,j.castShadow=!0,o(j,1.05),E.add(j),E.add(h(.3,.03,.2,"#A32D2D",0,.09,-.26))}n.acc==="lentes"&&E.add(h(.1,.055,.02,"#1B1B1A",-.075,.02,-.2),h(.1,.055,.02,"#1B1B1A",.075,.02,-.2),h(.04,.012,.012,"#1B1B1A",0,.03,-.2));const J=df(n.shirt)<140,I=$o(128,128,(j,ae)=>{j.fillStyle=J?"#fff":"#1B1B1A",j.textAlign="center",j.font="500 17px sans-serif",j.fillText(String(e||"").split(" ")[0].toUpperCase().slice(0,9),ae/2,34),j.font="500 62px sans-serif",j.fillText(String(t??7),ae/2,100)}),O=new ze(new Kt(.26,.26),new It({map:I,transparent:!0,toneMapped:!1}));O.position.set(0,.34,.153),r.add(O);const H=j=>{j.add(l(.078,.072,.2,n.shirt,0,-.1,0),l(.0735,.0735,.03,gs(n.shirt,1.4),0,-.17,0,0))},Y=new Ut;Y.position.set(-.3,.52,0),H(Y),Y.add(c(.05,.22,n.skin,0,-.36,0),l(.056,.056,.045,v,0,-.47,0,0),u(.055,n.skin,0,-.56,0)),r.add(Y);const oe=new Ut;oe.position.set(.3,.52,0),H(oe),oe.add(c(.05,.22,n.skin,0,-.36,0),l(.058,.058,.05,v,0,-.47,0,0),u(.058,n.skin,0,-.56,0),u(.02,n.skin,-.04,-.54,-.03,1,1,1,0),l(.024,.024,.2,"#F2F2EE",0,-.62,0,0),h(.05,.07,.03,"#1B1B1A",0,-.74,0,!0));const X=z2(n.paddle);X.position.y=-.95,oe.add(X),oe.rotation.x=.5,r.add(oe),kl||(kl=$o(64,64,j=>{const ae=j.createRadialGradient(32,32,2,32,32,30);ae.addColorStop(0,"rgba(0,0,0,0.5)"),ae.addColorStop(1,"rgba(0,0,0,0)"),j.fillStyle=ae,j.fillRect(0,0,64,64)},1));const ie=new ze(new Kt(.95,.95),new It({map:kl,transparent:!0,depthWrite:!1}));return ie.userData.shared=!0,ie.rotation.x=-Math.PI/2,ie.position.y=.012,ie.renderOrder=1,i.add(ie),i.userData={up:r,arm:oe,la:Y,lL:m,lR:f,kL:m.userData.kn,kR:f.userData.kn,head:E,eyes:[S,T],tail:B,blob:ie},i}function R0(n){n.traverse(e=>{e.geometry&&!(Is&&Object.values(Is).includes(e.geometry))&&e.geometry.dispose(),e.material&&!k2(e.material)&&(Array.isArray(e.material)?e.material:[e.material]).forEach(t=>{t.map&&!t.map.userData.shared&&t.map!==kl&&t.map.dispose(),(!t.userData||!t.userData.shared)&&t.dispose()})})}function k2(n){for(const e of pf.values())if(e.face===n||e.rim===n)return!0;return!1}const B2={};let et=null,Ri=null,Cd=null,Us=null,Ta=!1;const Y_={};try{Ta=localStorage.getItem("padel.mute")==="1"}catch{}function Co(){try{if(!et){et=new(window.AudioContext||window.webkitAudioContext),Ri=et.createGain(),Ri.gain.value=Ta?0:.9;const n=et.createDynamicsCompressor();Ri.connect(n),n.connect(et.destination);const e=et.sampleRate*2,t=et.createBuffer(1,e,et.sampleRate),i=t.getChannelData(0);for(let r=0;r<e;r++)i[r]=Math.random()*2-1;Cd=t,G2()}et.state==="suspended"&&et.resume()}catch{}}const H2=()=>Ta;function P0(n){Ta=n;try{localStorage.setItem("padel.mute",n?"1":"0")}catch{}Ri&&Ri.gain.setTargetAtTime(n?0:.9,et.currentTime,.05)}function G2(){(import.meta&&B2||{}).VITE_SFX&&["hit","bounce","glass","crowd"].forEach(e=>{fetch(new URL(`sfx/${e}.ogg`,document.baseURI)).then(t=>t.ok?t.arrayBuffer():null).then(t=>t?et.decodeAudioData(t):null).then(t=>{t&&(Y_[e]=t)}).catch(()=>{})})}function wl(n,e=1,t=1){const i=Y_[n];if(!i||!et)return!1;const r=et.createBufferSource(),s=et.createGain();return r.buffer=i,r.playbackRate.value=t*(.94+Math.random()*.12),s.gain.value=e,r.connect(s),s.connect(Ri),r.start(),!0}function Ln({dur:n=.08,f:e=2e3,q:t=1,type:i="bandpass",gain:r=.4,attack:s=.002,f2:o,delay:a=0}){const l=et.currentTime+a,c=et.createBufferSource(),u=et.createBiquadFilter(),h=et.createGain();c.buffer=Cd,c.loop=!0,u.type=i,u.Q.value=t,u.frequency.setValueAtTime(e,l),o&&u.frequency.exponentialRampToValueAtTime(o,l+n),h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(r,l+s),h.gain.exponentialRampToValueAtTime(1e-4,l+n),c.connect(u),u.connect(h),h.connect(Ri),c.start(l,Math.random()),c.stop(l+n+.05)}function Dn({f:n=200,f2:e,dur:t=.1,type:i="sine",gain:r=.3,delay:s=0}){const o=et.currentTime+s,a=et.createOscillator(),l=et.createGain();a.type=i,a.frequency.setValueAtTime(n,o),e&&a.frequency.exponentialRampToValueAtTime(e,o+t),l.gain.setValueAtTime(r,o),l.gain.exponentialRampToValueAtTime(1e-4,o+t),a.connect(l),l.connect(Ri),a.start(o),a.stop(o+t+.02)}const Mr=()=>et&&!Ta,Er={hit(n,e,t=0){if(!Mr())return;const i=(n==="remate"?1.5:n==="dejada"?.5:n==="globo"?.8:1)*(1+.5*t);wl("hit",.7*i,n==="remate"?.8:1)||(Ln({dur:.05+.03*i,f:2300-(e||0)*350,q:1.2,gain:.55*i}),Ln({dur:.12,f:900,q:.8,type:"lowpass",gain:.35*i}),Dn({f:190,f2:95,dur:.09,gain:.32*i}),n==="remate"&&(Dn({f:85,f2:45,dur:.22,gain:.45}),Ln({dur:.18,f:3200,q:.6,gain:.3})),e===0&&Dn({f:3600,f2:3e3,dur:.05,type:"triangle",gain:.06}))},bounce(){!Mr()||wl("bounce",.8)||(Ln({dur:.06,f:500,q:.7,type:"lowpass",gain:.45}),Dn({f:130,f2:70,dur:.07,gain:.3}))},wall(){!Mr()||wl("glass",.7)||(Ln({dur:.16,f:2600,q:7,gain:.3}),Ln({dur:.07,f:5200,q:3,gain:.15}),Dn({f:1180,dur:.32,gain:.05}),Dn({f:1760,dur:.22,gain:.035}),Ln({dur:.2,f:300,q:1,type:"lowpass",gain:.12,delay:.01}))},net(){Mr()&&(Ln({dur:.14,f:900,q:.7,type:"lowpass",gain:.3}),Dn({f:140,f2:90,dur:.1,gain:.12}))},exit(){Mr()&&Ln({dur:.5,f:400,f2:3500,q:1.5,gain:.22,attack:.15})},cheer(n=1){if(!Mr()||wl("crowd",.6*n))return;Ln({dur:.35+1.1*n,f:900,q:.5,gain:.07+.1*n,attack:.2}),Ln({dur:.3+.9*n,f:2400,q:.6,gain:.04+.05*n,attack:.15});const e=Math.round(10+22*n);for(let t=0;t<e;t++)Ln({dur:.03,f:1500+Math.random()*2500,q:1,gain:.05+Math.random()*.05,delay:.1+Math.random()*(.6+n)});n>.9&&Dn({f:520,f2:640,dur:.5,type:"sawtooth",gain:.02,delay:.1})},point(n,e){if(Mr()){if(n==="punto"){Dn({f:e?660:330,dur:.1,gain:.08});return}Dn({f:520,dur:.12,gain:.1}),setTimeout(()=>Dn({f:780,dur:n==="game"?.18:.12,gain:.1}),130),n!=="game"&&setTimeout(()=>Dn({f:1040,dur:.25,gain:.1}),260)}}};function V2(){if(!et||Us)return;const n=et.createBufferSource(),e=et.createBiquadFilter(),t=et.createGain(),i=et.createOscillator(),r=et.createGain();n.buffer=Cd,n.loop=!0,e.type="bandpass",e.frequency.value=650,e.Q.value=.45,t.gain.value=.045,i.frequency.value=.23,r.gain.value=.015,i.connect(r),r.connect(t.gain),n.connect(e),e.connect(t),t.connect(Ri),n.start(),i.start(),Us={s:n,lfo:i,g:t}}function L0(){if(Us){try{Us.g.gain.setTargetAtTime(0,et.currentTime,.2);const n=Us;setTimeout(()=>{try{n.s.stop(),n.lfo.stop()}catch{}},800)}catch{}Us=null}}const W2={skin:"#E0AC82",hair:"#5F5E5A",style:"corto",shirt:"#888780",acc:"none",paddle:"#B4B2A9"},bo=(n,e,t)=>Math.max(e,Math.min(t,n)),D0=()=>{},X2={uniforms:{tDiffuse:{value:null},time:{value:0},res:{value:new ue(1,1)},blur:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};class j2{constructor(e,{onQuality:t,onReplay:i,look:r,autoQuality:s=!0}={}){this.container=e,this.autoQuality=s,this.onQuality=t||D0,this.onReplay=i||D0,this.rec=[],this.rp=null,this.replayArm=null,this.syncSw=!1,this.cheer=0,this.cheerDirty=!1,this.fovKick=0,this.lookInit=!1,this.look=new F,this.dIdx=0,this.composer=null,this.hq=!0,this.clk=0,this.slow=0,this.shake=0,this.mySlot=-1,this.myTeam="a",this.avatars=new Map,this.rosterKey="",this.preview=null,this.previewKey="",this.fxT=0,this.ripT=0,this.pT=0,this.hist=[],this.ok=!0,this.inGame=!1;let o;try{o=new I_({antialias:!0,powerPreference:"high-performance"})}catch{this.ok=!1;return}this.ren=o,this.dpr=window.devicePixelRatio||1,o.setPixelRatio(Math.min(this.dpr,2)),o.shadowMap.enabled=!0,o.shadowMap.type=Zv,o.toneMapping=fd,o.toneMappingExposure=1,o.domElement.style.cssText="display:block;width:100%;height:100%;touch-action:none",e.appendChild(o.domElement),this.scene=new bA,this.cam=new On(58,1,.1,160),this.aniso=Math.min(o.capabilities.getMaxAnisotropy(),8),this.buildWorld(),this.setupPost(),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(e),this.resize(),r&&this.setPreviewLook(r)}tex(e,t,i){return $o(e,t,i,this.aniso)}buildWorld(){const e=this.scene,t=(P,W,b)=>this.tex(P,W,b);e.background=t(4,256,(P,W,b)=>{const N=P.createLinearGradient(0,0,0,b);N.addColorStop(0,"#6FAEE0"),N.addColorStop(1,"#DCEBF7"),P.fillStyle=N,P.fillRect(0,0,W,b)}),e.fog=new yd("#DCEBF7",45,95),e.add(new v2(15135227,3820090,2.3));const i=new y2(16774109,2.6);i.position.set(6,18,10),i.castShadow=!0,i.shadow.mapSize.set(1024,1024);const r=i.shadow.camera;r.left=-14,r.right=14,r.top=18,r.bottom=-18,r.near=1,r.far=50,i.shadow.bias=-6e-4,e.add(i),this.dl=i;const s=(P,W=.8)=>new Ir({color:P,roughness:W}),o=(P,W,b,N,B,J,I,O)=>{const H=new ze(new hr(P,W,b),s(N));return H.position.set(B,J,I),H.castShadow=!!O,H},a=(P,W,b)=>(P.wrapS=P.wrapT=fc,P.repeat.set(W,b),P.needsUpdate=!0,P),l=t(512,1024,(P,W,b)=>{P.fillStyle="#2D74B8",P.fillRect(0,0,W,b);for(let N=0;N<12e3;N++)P.fillStyle=Math.random()<.5?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.06)",P.fillRect(Math.random()*W,Math.random()*b,2,2);for(let N=0;N<60;N++){const B=Math.random()*W,J=Math.random()*b,I=18+Math.random()*70,O=P.createRadialGradient(B,J,0,B,J,I);O.addColorStop(0,Math.random()<.55?"rgba(255,255,255,0.07)":"rgba(0,20,60,0.09)"),O.addColorStop(1,"rgba(0,0,0,0)"),P.fillStyle=O,P.fillRect(B-I,J-I,I*2,I*2)}[[156,.1],[868,.1],[512,.12]].forEach(([N,B])=>{const J=P.createLinearGradient(0,N-70,0,N+70);J.addColorStop(0,"rgba(255,255,255,0)"),J.addColorStop(.5,`rgba(255,255,255,${B})`),J.addColorStop(1,"rgba(255,255,255,0)"),P.fillStyle=J,P.fillRect(0,N-70,W,140)}),P.strokeStyle="#f4f6f8",P.lineWidth=4,P.strokeRect(2,2,W-4,b-4),P.beginPath(),P.moveTo(0,156),P.lineTo(W,156),P.moveTo(0,868),P.lineTo(W,868),P.moveTo(256,156),P.lineTo(256,868),P.stroke();for(let N=0;N<700;N++){const B=Math.random()<.5,J=Math.random(),I=B?J*W:[2,256,W-2][Math.floor(Math.random()*3)],O=B?[2,156,868,b-2][Math.floor(Math.random()*4)]:156+J*712;P.fillStyle="rgba(45,116,184,0.55)",P.fillRect(I+(Math.random()-.5)*3,O+(Math.random()-.5)*3,1+Math.random()*2,1+Math.random()*2)}}),c=new ze(new Kt(10,20),new Ir({map:l,roughness:.5}));c.rotation.x=-Math.PI/2,c.receiveShadow=!0,e.add(c);const u=new ze(new Kt(26,38),s("#2F6F55",.9));u.rotation.x=-Math.PI/2,u.position.y=-.01,u.receiveShadow=!0,e.add(u);const h=new ze(new Kt(140,140),s("#7A7973",1));h.rotation.x=-Math.PI/2,h.position.y=-.03,e.add(h);const d=t(32,32,(P,W,b)=>{P.strokeStyle="rgba(40,40,40,0.9)",P.lineWidth=2,P.beginPath(),P.moveTo(0,.5),P.lineTo(W,.5),P.moveTo(.5,0),P.lineTo(.5,b),P.stroke()}),p=(P,W,b,N,B,J,I)=>{const O=d.clone();a(O,P/I,W/I);const H=new ze(new Kt(P,W),new It({map:O,transparent:!0,side:dn,depthWrite:!1}));H.position.set(b,N,B),H.rotation.y=J||0,e.add(H)},v=new Ir({color:"#CFE8F7",transparent:!0,opacity:.16,roughness:.08,metalness:.35,side:dn,depthWrite:!1}),x=(P,W,b,N,B,J)=>{const I=new ze(new Kt(P,W),v);I.position.set(b,N,B),I.rotation.y=J||0,e.add(I)};x(10,3,0,1.5,10,0),x(10,3,0,1.5,-10,0),x(20,2,5,1,0,Math.PI/2),x(20,2,-5,1,0,Math.PI/2),p(10,1,0,3.5,-10,0,.12),p(20,1,5,2.5,0,Math.PI/2,.12),p(20,1,-5,2.5,0,Math.PI/2,.12);const m="#3A3A38";for(let P=-2;P<=2;P++)e.add(o(.07,4,.07,m,P*2.5,2,-10.02));for(let P=-4;P<=4;P++)e.add(o(.07,3,.07,m,5.02,1.5,P*2.5),o(.07,3,.07,m,-5.02,1.5,P*2.5));e.add(o(10.1,.06,.06,m,0,3,-10.02),o(10.1,.06,.06,m,0,4,-10.02),o(.06,.06,20,m,5.02,2,0),o(.06,.06,20,m,5.02,3,0),o(.06,.06,20,m,-5.02,2,0),o(.06,.06,20,m,-5.02,3,0));const f=d.clone();a(f,10/.12,.88/.12);const _=new ze(new Kt(10,.88),new It({map:f,transparent:!0,side:dn,depthWrite:!1}));_.position.set(0,.44,0),e.add(_),e.add(o(10,.07,.05,"#fff",0,.91,0),o(.1,1.02,.1,"#2C2C2A",-5.05,.51,0,!0),o(.1,1.02,.1,"#2C2C2A",5.05,.51,0,!0));const g=(P,W,b,N,B,J)=>{const I=t(512,96,(O,H,Y)=>{O.fillStyle=W,O.fillRect(0,0,H,Y),O.fillStyle="#fff",O.font="500 46px sans-serif",O.textAlign="center",O.textBaseline="middle",O.fillText(P,H/2,Y/2+2)});[0,Math.PI].forEach(O=>{const H=new ze(new Kt(J,J*96/512),new It({map:I,toneMapped:!1})),Y=Math.sin(B+O)*.01,oe=Math.cos(B+O)*.01;H.position.set(b+Y,.45,N+oe),H.rotation.y=B+O,e.add(H)})};g("CLUB SIERRAS","#0C447C",-2.6,-10.2,0,4.6),g("PADEL PRO","#D85A30",2.6,-10.2,0,4.6),g("CLUB SIERRAS","#0C447C",-2.6,10.2,0,4.6),g("PADEL PRO","#D85A30",2.6,10.2,0,4.6),g("CLUB SIERRAS","#0C447C",5.2,-4.5,-Math.PI/2,4.6),g("PADEL PRO","#D85A30",5.2,4.5,-Math.PI/2,4.6),g("PADEL PRO","#D85A30",-5.2,-4.5,Math.PI/2,4.6),g("CLUB SIERRAS","#0C447C",-5.2,4.5,Math.PI/2,4.6);const y=()=>{const P=new Ut,W=[];let b=1234567;const N=()=>(b=b*1664525+1013904223>>>0,b/4294967296),B=8,J=.56,I=1.1,O=-12.2,H=["#D85A30","#185FA5","#0C447C","#EF9F27","#1D9E75","#F1EFE8","#534AB7","#D4537E","#2C2C2A","#B33A3A"],Y=["#F5D0B0","#E0AC82","#B9774F","#7A4A2E","#5A3520"],oe=["#1B1B1A","#3B2A1E","#6B4423","#D9A441","#8E3B2A","#B8B8B2"];for(let G=0;G<B;G++){const pe=.45+G*.8,le=O-G*I;P.add(o(27,pe,I+.02,G%2?"#8F8E88":"#85847E",0,pe/2-.03,le)),P.add(o(27,.05,.42,G%2?"#2C5E8F":"#C0502C",0,pe+.02,le+.2))}const X=t(1024,64,(G,pe,le)=>{G.fillStyle="#0C447C",G.fillRect(0,0,pe,le);const ye=["CLUB SIERRAS","UC","PADEL PRO","UC"],Ee=["#0C447C","#111","#D85A30","#2A93A8"];ye.forEach((Pe,se)=>{G.fillStyle=Ee[se],G.fillRect(se*256,0,256,le),G.fillStyle="#fff",G.font="800 34px sans-serif",G.textAlign="center",G.textBaseline="middle",G.fillText(Pe,se*256+128,le/2+2)})});a(X,3,1);const ie=new ze(new Kt(26,.7),new It({map:X}));ie.position.set(0,.75,-11.75),P.add(ie);const j=o(26,.05,.05,"#C9C9C2",0,1.15,-11.7);P.add(j),P.add(o(27,9,.4,"#4B4E58",0,4.4,O-B*I-.1));const ae=()=>new g2({color:16777215}),ce=new pa(.17,.26,2,6),we=new ti(.125,9,7),Se=new ti(.135,9,5,0,Math.PI*2,0,1.55),xe=new pa(.045,.26,2,5),Re=B*50,L=G=>{const pe=new PA(G,ae(),Re);return pe.frustumCulled=!1,pe},fe=L(ce),te=L(we),q=L(Se),Q=L(xe),ve=L(xe),de=L(xe),w=new Tt,M=new Be,z=new Float32Array(Re*16),re=(G,pe,le,ye,Ee,Pe,se,We,Fe=0,Ne=0)=>{w.position.set(le,ye,Ee),w.rotation.set(Fe,0,Ne),w.scale.set(Pe,se,We),w.updateMatrix(),G.setMatrixAt(pe,w.matrix)};let ee=0;for(let G=0;G<B;G++){const pe=.45+G*.8,le=O-G*I+.1;for(let ye=-11.2;ye<=11.2;ye+=J){if(N()<.1+G*.02||ee>=Re)continue;const Ee=ye+(N()-.5)*.14,Pe=.88+N()*.22,se=H[Math.floor(N()*H.length)],We=Y[Math.floor(N()*Y.length)];re(fe,ee,Ee,pe+.42*Pe,le,1,Pe,.78),fe.setColorAt(ee,M.set(se)),re(te,ee,Ee,pe+.9*Pe,le,1,1.08,1),te.setColorAt(ee,M.set(We));const Fe=N()<.86;re(q,ee,Ee,pe+.92*Pe,le,Fe?1:0,Fe?1:0,Fe?1:0),q.setColorAt(ee,M.set(oe[Math.floor(N()*oe.length)])),re(Q,ee,Ee-.2,pe+.36*Pe,le+.04,1,1,1,-.25,.12),Q.setColorAt(ee,M.set(We)),re(ve,ee,Ee+.2,pe+.36*Pe,le+.04,1,1,1,-.25,-.12),ve.setColorAt(ee,M.set(We));const Ne=N()<.12;re(de,ee,Ee+.22,pe+.78*Pe,le,1,1,1,0,-.35),de.setColorAt(ee,M.set(We)),w.updateMatrix(),z.set(w.matrix.elements,ee*16),Ne||re(de,ee,Ee+.22,pe+.78*Pe,le,0,0,0),ee++}}return[fe,te,q,Q,ve,de].forEach(G=>{G.count=ee,G.instanceMatrix.needsUpdate=!0,G.instanceColor&&(G.instanceColor.needsUpdate=!0),P.add(G)}),[fe,te,q,Q,ve].forEach(G=>W.push({m:G,base:G.instanceMatrix.array.slice(),alt:null,g:P})),W.push({m:de,base:de.instanceMatrix.array.slice(),alt:z.slice(0,ee*16),g:P}),[-1,1].forEach(G=>{const pe=new ze(new Bc(.09,.12,11,8),s("#5F5E5A",.6));pe.position.set(G*9.5,5.5,-11.6),P.add(pe);const le=new ze(new hr(1.6,.35,.4),new It({color:"#FFF6D0"}));le.position.set(G*9.5,11.1,-11.4),P.add(le)}),{g:P,parts:W}},R=y(),E=y();this.crowd=R.g,this.crowd2=E.g,this.crowd2.rotation.y=Math.PI,e.add(this.crowd,this.crowd2),this.cm=[...R.parts,...E.parts];try{const P=new A_(128),W=new w_(.1,200,P);W.position.set(0,2,0),e.add(W),W.update(this.ren,e),e.remove(W),v.envMap=P.texture,v.envMapIntensity=.9}catch{}const A=t(128,64,(P,W,b)=>{P.fillStyle="#D9E03A",P.fillRect(0,0,W,b);for(let N=0;N<900;N++)P.fillStyle="rgba(255,255,255,0.07)",P.fillRect(Math.random()*W,Math.random()*b,1,1);P.strokeStyle="#F4F6E8",P.lineWidth=5,P.beginPath(),P.arc(32,32,26,-1.2,1.2),P.stroke(),P.beginPath(),P.arc(96,32,26,Math.PI-1.2,Math.PI+1.2),P.stroke()});this.ball=new ze(new ti(Fr,16,12),new Ir({map:A,roughness:.95,emissive:"#4A4A08"})),this.ball.castShadow=!0,e.add(this.ball);const D=(P,W,b)=>{const N=new ze(P,new It({color:W,transparent:!0,opacity:b,side:dn,depthWrite:!1}));return N.rotation.x=-Math.PI/2,e.add(N),N};this.bsh=D(new jo(.2,14),"#000",.3),this.ring=D(new Pr(.85,1,28),"#fff",.4),this.ring.position.y=.03,this.aim=D(new Pr(.35,.5,20),"#97C459",.9),this.aim.position.y=.04,this.rip=D(new Pr(.22,.3,18),"#fff",.5),this.rip.visible=!1,this.land=new Ut,this.land.visible=!1,e.add(this.land);const S=(P,W)=>{const b=new ze(P,new It({color:"#fff",transparent:!0,opacity:W,depthWrite:!1,side:dn}));return b.rotation.x=-Math.PI/2,this.land.add(b),b};this.landDisc=S(new jo(.55,28),.26),this.landRing=S(new Pr(.5,.6,28),.85),this.landOuter=S(new Pr(.9,.95,28),.7),this.land.position.y=.035,this.sbox=new Ut,this.sbox.visible=!1,e.add(this.sbox);const T=new ze(new Kt(5,6.95),new It({color:"#FFF3A0",transparent:!0,opacity:.34,depthWrite:!1}));T.rotation.x=-Math.PI/2,this.sbox.add(T);const k=new DA(new $A(new Kt(5,6.95)),new U_({color:"#FFE066",transparent:!0,opacity:.9}));k.rotation.x=-Math.PI/2,this.sbox.add(k),this.sbox.position.y=.025,this.fxm=new ze(new ti(.2,10,8),new It({color:"#fff",transparent:!0,opacity:.8})),this.fxm.visible=!1,e.add(this.fxm),this.trail=[];for(let P=0;P<8;P++){const W=new ze(new ti(.09,6,6),new It({color:"#E8E34A",transparent:!0,opacity:.45-P*.05}));W.visible=!1,e.add(W),this.trail.push(W)}this.decals=[];for(let P=0;P<12;P++){const W=new ze(new jo(.11,12),new It({color:"#0b2a4a",transparent:!0,opacity:0,depthWrite:!1}));W.rotation.x=-Math.PI/2,W.position.y=.012,W.visible=!1,W.life=0,e.add(W),this.decals.push(W)}this.NP=16,this.pg=new At,this.pp=new Float32Array(this.NP*3),this.pv=new Float32Array(this.NP*3),this.pg.setAttribute("position",new Vn(this.pp,3)),this.pm=new F_({color:"#fff",size:.13,transparent:!0,opacity:.9,depthWrite:!1}),this.pts=new NA(this.pg,this.pm),this.pts.frustumCulled=!1,this.pts.visible=!1,e.add(this.pts)}setupPost(){try{const e=new Gn(2,2,{type:di,samples:4}),t=new A2(this.ren,e);t.addPass(new C2(this.scene,this.cam)),this.bloom=new no(new ue(2,2),.3,.55,.92),t.addPass(this.bloom),t.addPass(new P2),this.grade=new j_(X2),t.addPass(this.grade),this.composer=t}catch{this.composer=null}}resize(){if(!this.ok)return;const e=Math.max(1,this.container.clientWidth),t=Math.max(1,this.container.clientHeight);if(this.w=e,this.h=t,this.ren.setPixelRatio(this.hq?Math.min(this.dpr,2):1),this.ren.setSize(e,t,!1),this.cam.aspect=e/t,this.cam.updateProjectionMatrix(),this.composer){const i=this.ren.getPixelRatio();this.composer.setPixelRatio(i),this.composer.setSize(e,t),this.grade.uniforms.res.value.set(e*i,t*i)}}setQuality(e){this.ok&&(this.hq=e,this.ren.shadowMap.enabled=e,this.dl.castShadow=e,this.resize(),this.scene.traverse(t=>{t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>{i.needsUpdate=!0})}))}setPreviewLook(e,t="Vos",i=10){if(!this.ok)return;const r=JSON.stringify(e)+t+i;r!==this.previewKey&&(this.previewKey=r,this.preview&&(this.scene.remove(this.preview),R0(this.preview)),this.preview=b0(e,t,i),this.scene.add(this.preview))}syncRoster(e){const t=e.map(r=>`${r.slot}:${r.uid||"bot"}:${r.name}:${r.num}:${JSON.stringify(r.look)}`).join("|");if(t===this.rosterKey)return;this.rosterKey=t,this.avatars.forEach(r=>{this.scene.remove(r.g),R0(r.g)}),this.avatars.clear();const i={a:[],b:[]};e.forEach(r=>i[r.slot<2?"a":"b"].push(r)),e.forEach(r=>{const s=r.slot<2?"a":"b",o=i[s],a=o.indexOf(r),l=b0(r.look||W2,r.name,r.num);l.rotation.y=s==="a"?0:Math.PI,this.scene.add(l),this.avatars.set(r.slot,{g:l,team:s,off:r.slot*1.7,sw:null,swId:0,lx:o.length>1?a===0?2.3:-2.3:0,lz:(s==="a"?1:-1)*(o.length>1?7:8)})})}animate(e,t,i,r,s){const o=e.g.userData,a=Math.sin(this.clk*11+e.off)*r,l=Math.cos(this.clk*11+e.off)*r;o.lL.rotation.x=a*.9,o.lR.rotation.x=-a*.9,o.kL.rotation.x=-(Math.max(0,-l)*.95+.14),o.kR.rotation.x=-(Math.max(0,l)*.95+.14),o.la.rotation.x=-a*.8,o.up.rotation.x=-.14*r,e.g.position.set(t,Math.abs(a)*.04,i);const c=1-Math.min(1,r*1.5),u=this.clk+e.off;o.up.scale.y=1+.012*Math.sin(u*2.4)*c,o.up.rotation.z=.025*Math.sin(u*1.7)*c,o.la.rotation.z=.05+.03*Math.sin(u*2.4)*c;const h=this.ball&&this.ball.visible&&this.inGame?this.ball.position:null;let d=0,p=0;if(h){const m=h.x-t,f=h.z-i,_=e.team==="a"?1:-1;d=bo(Math.atan2(-m*_,-f*_),-1,1),p=bo((h.y-1.7)*.12,-.25,.1)}e.hy=(e.hy||0)+(d-(e.hy||0))*Math.min(1,s*9),o.head.rotation.y=e.hy,o.head.rotation.x=p+.05*r;const v=u%3.7<.12?.12:1;o.eyes[0].scale.y=o.eyes[1].scale.y=v,o.tail&&(o.tail.rotation.x=.12+.3*r*Math.abs(Math.sin(this.clk*11+e.off)),o.tail.rotation.z=.1*Math.sin(u*3)+.25*a*.4),o.blob.position.y=.012-e.g.position.y;let x=0;if(e.sw){e.sw.t+=s;const m=Math.min(1,e.sw.t/e.sw.dur),f=1-Math.pow(1-m,3);if(e.sw.wind!=null){if(m<.32){const y=m/.32;o.arm.rotation.x=e.sw.a0+(e.sw.wind-e.sw.a0)*(1-Math.pow(1-y,2)),o.up.rotation.x=-.32*y}else{const y=(m-.32)/.6799999999999999,R=y*y*(3-2*y);o.arm.rotation.x=e.sw.wind+(e.sw.a1-e.sw.wind)*R,o.up.rotation.x=-.32+.75*R}e.g.position.y+=Math.sin(Math.PI*Math.min(1,m*1.1))*.28,x=.25*Math.sin(Math.PI*m)}else o.arm.rotation.x=e.sw.a0+(e.sw.a1-e.sw.a0)*f,x=(e.sw.yaw>0?.55:-.45)*Math.sin(Math.PI*m);o.arm.rotation.y=e.sw.yaw*Math.sin(Math.PI*m);const _=Math.sin(Math.PI*m);o.la.rotation.x=e.sw.wind!=null?1.9*_:-.7*_,o.lL.rotation.x+=-.4*_,o.lR.rotation.x+=.4*_,e.sw.t>e.sw.dur+.25&&(e.sw=null,o.arm.rotation.set(.5,0,0),o.up.rotation.x=0)}else o.arm.rotation.x=.5+a*.15;o.up.rotation.y=x}handleEvent(e){if(this.ok){if(e.t==="hit"){const t=e.gold||e.q===0,i=e.gold?"#EF9F27":["#EF9F27","#ffffff","#B4B2A9"][e.q];this.fxm.material.color.set(i),this.fxm.position.set(e.x,e.y,e.z),this.fxm.visible=!0,this.fxT=.25,this.hq&&this.burst(e.x,e.y,e.z,i);const r=e.slot===this.mySlot;if(this.shake=Math.max(this.shake,((e.shot==="remate"?.28:t?.12:.05)+(e.pw||0)*.1)*(r?1:.5)),(e.shot==="remate"||e.gold)&&(this.fovKick=Math.min(this.fovKick,-3.5)),Er.hit(e.shot,e.q,e.pw||0),r&&navigator.vibrate)try{navigator.vibrate(e.shot==="remate"?35:e.q===0?22:12)}catch{}}else if(e.t==="bounce"){this.rip.position.set(e.x,.04,e.z),this.rip.visible=!0,this.ripT=.3,Er.bounce();const t=this.decals[this.dIdx++%this.decals.length];t.position.set(e.x,.012,e.z),t.life=7,t.visible=!0,this.hq&&this.burst(e.x,.05,e.z,"#d9ccae",.55)}else if(e.t==="wall")Er.wall();else if(e.t==="net")Er.net();else if(e.t==="point"){const t=this.mySlot<0||e.who===this.myTeam;Er.point(e.ev,t);const i=e.replay?1.3:e.ev==="punto"?.55:1;this.cheer=Math.max(this.cheer,Math.min(1,i)),Er.cheer(i),e.label&&(this.shake=Math.max(this.shake,.3),this.fovKick=Math.min(this.fovKick,-7),Er.exit()),e.replay&&(this.replayArm=this.clk+.45)}}}burst(e,t,i,r,s=1){this.pm.color.set(r);for(let o=0;o<this.NP;o++){this.pp[o*3]=e,this.pp[o*3+1]=t,this.pp[o*3+2]=i;const a=Math.random()*6.283,l=(Math.random()*2-.5)*s,c=1.5+Math.random()*2.5;this.pv[o*3]=Math.cos(a)*c,this.pv[o*3+1]=l*c+1*s,this.pv[o*3+2]=Math.sin(a)*c}this.pT=.45,this.pts.visible=!0,this.pg.attributes.position.needsUpdate=!0}updateFx(e){if(this.fxT>0){this.fxT-=e;const t=1-Math.max(this.fxT,0)/.25;this.fxm.scale.setScalar(1+t*3),this.fxm.material.opacity=.8*(1-t),this.fxT<=0&&(this.fxm.visible=!1)}if(this.ripT>0){this.ripT-=e;const t=1-Math.max(this.ripT,0)/.3;this.rip.scale.set(1+t*3,1+t*3,1),this.rip.material.opacity=.5*(1-t),this.ripT<=0&&(this.rip.visible=!1)}if(this.pT>0){this.pT-=e;for(let t=0;t<this.NP;t++)this.pv[t*3+1]-=9*e,this.pp[t*3]+=this.pv[t*3]*e,this.pp[t*3+1]=Math.max(.03,this.pp[t*3+1]+this.pv[t*3+1]*e),this.pp[t*3+2]+=this.pv[t*3+2]*e;this.pg.attributes.position.needsUpdate=!0,this.pm.opacity=Math.max(0,this.pT/.45)*.9,this.pT<=0&&(this.pts.visible=!1)}this.decals.forEach(t=>{t.visible&&(t.life-=e,t.material.opacity=.32*Math.min(1,t.life/2.5),t.life<=0&&(t.visible=!1))}),this.updateCrowd(e)}updateCrowd(e){if(this.cheer<=.001){this.cheerDirty&&(this.cm.forEach(r=>{r.m.instanceMatrix.array.set(r.base),r.m.instanceMatrix.needsUpdate=!0}),this.cheerDirty=!1);return}this.cheer=Math.max(0,this.cheer-e*.45);const t=.3*Math.min(1,this.cheer*1.6),i=this.cheer>.12;this.cm.forEach(r=>{if(!r.g.visible)return;const s=r.m.instanceMatrix.array;s.set(r.alt&&i?r.alt:r.base);for(let o=0;o<r.m.count;o++)s[o*16+13]+=Math.abs(Math.sin(this.clk*7+o*.73%6.283))*t;r.m.instanceMatrix.needsUpdate=!0}),this.cheerDirty=!0}placeAvatars(e,t){this.avatars.forEach(i=>{i.g.visible=!1}),e.forEach(i=>{const r=this.avatars.get(i.slot);if(r){if(r.g.visible=!0,!this.syncSw&&i.swId&&i.swId!==r.swId){const s=A0[i.swK]||A0.remate;r.sw={a0:s[0],a1:s[1],dur:s[2],wind:s[3]==null?null:s[3],yaw:i.swYaw,t:0}}r.swId=i.swId,this.animate(r,i.x,i.z,i.mv,t),r.g.rotation.y=r.team==="a"?0:Math.PI}}),this.syncSw=!1}placeBall(e,t){this.ball.visible=!0,this.bsh.visible=!0,this.ball.position.set(e.x,e.y,e.z);const i=e.vz>=0?1:-1;this.ball.rotation.x+=e.vz*t*.8+i*(e.spin||0)*t*16,this.ball.rotation.z-=e.vx*t*.8,this.bsh.position.set(e.x,.02,e.z),this.bsh.scale.setScalar(Math.max(.4,1-e.y*.12)),this.hist.unshift({x:e.x,y:e.y,z:e.z}),this.hist.length>9&&this.hist.pop();const r=Math.hypot(e.vx,e.vy,e.vz)>7&&!e.hold;this.trail.forEach((s,o)=>{const a=this.hist[o+1];s.visible=r&&!!a,a&&(s.position.set(a.x,a.y,a.z),s.scale.setScalar(1-o*.1))})}updateMarkers(e,t){const i=e.ys||1;let r=!1;if(!t.hold&&!t.bn&&e.st==="play"){const o=t.vy*t.vy+2*Ur*(t.y-Fr);if(o>=0){const a=(t.vy+Math.sqrt(o))/Ur,l=t.x+t.vx*a,c=t.z+t.vz*a;if(a>.03&&Math.abs(l)<5.1&&Math.abs(c)<10.1){r=!0;const u=e.mySlot>=0&&c*i>0,h=u?"#97C459":"#FFFFFF";this.land.position.set(l,.035,c),this.landOuter.scale.setScalar(1+Math.min(a,1.5)*.9),[this.landDisc,this.landRing,this.landOuter].forEach(d=>d.material.color.set(h)),this.landDisc.material.opacity=.2+.1*Math.sin(this.clk*8)}}}if(this.land.visible=r,(e.st==="serve"||e.st==="play"&&t.sf&&!t.bn)&&e.srv>=0&&e.sx){const o=e.srv<2?1:-1;this.sbox.position.set(-e.sx*2.5,.025,-o*3.475),this.sbox.visible=!0}else this.sbox.visible=!1}startReplay(){const e=this.clk,t=this.rec.filter(s=>s.t>=e-2.5);if(t.length<12)return;const i=t.slice(-12),r=i.reduce((s,o)=>s+o.b[0],0)/i.length;this.rp={frames:t,t0:t[0].t,dur:t[t.length-1].t-t[0].t,t:0,i:0,speed:.5,side:r>=0?1:-1},this.hist.length=0,this.onReplay(!0)}endReplay(){this.rp&&(this.rp=null,this.syncSw=!0,this.lookInit=!1,this.hist.length=0,this.avatars.forEach(e=>{e.sw=null}),this.onReplay(!1))}skipReplay(){this.endReplay(),this.replayArm=null}renderReplay(e){const t=this.rp;if(this.clk-=e*(1-t.speed),t.t+=e*t.speed,t.t>=t.dur)return this.endReplay(),!1;const i=t.frames;for(;t.i<i.length-2&&i[t.i+1].t-t.t0<=t.t;)t.i++;const r=i[t.i],s=i[t.i+1],o=bo((t.t-(r.t-t.t0))/Math.max(1e-4,s.t-r.t),0,1),a=r.e.map(p=>{const v=s.e.find(x=>x[0]===p[0])||p;return{slot:p[0],x:p[1]+(v[1]-p[1])*o,z:p[2]+(v[2]-p[2])*o,mv:p[3],swId:p[4],swK:p[5],swYaw:p[6]}}),l=r.b,c=s.b,u={x:l[0]+(c[0]-l[0])*o,y:l[1]+(c[1]-l[1])*o,z:l[2]+(c[2]-l[2])*o,vx:l[3],vy:l[4],vz:l[5],spin:l[6],hold:!1};this.placeAvatars(a,e*t.speed),this.placeBall(u,e*t.speed),this.ring.visible=!1,this.aim.visible=!1,this.land.visible=!1,this.sbox.visible=!1;const h=t.t/t.dur,d=this.cam;return d.fov=36,d.position.set(t.side*(12.5-2.5*h),5.2+1.2*h,bo(u.z*.55,-5.5,5.5)),this.look.lerp(new F(u.x*.6,1,u.z),1-Math.exp(-6*e)),d.lookAt(this.look),!0}render(e,t,i={}){if(!this.ok)return;t=Math.min(t,.1),this.clk+=t,this.autoQuality&&this.hq&&e&&e.st!=="lobby"&&(t>.036?this.slow++:this.slow=Math.max(0,this.slow-1),this.slow>70&&(this.slow=0,this.setQuality(!1),this.onQuality(!1)));const r=this.cam,s=e&&e.phase==="match"&&e.ball;this.inGame=!!s;const o=e&&e.ys?e.ys:1;if(this.crowd.visible=this.hq&&o>0,this.crowd2.visible=this.hq&&o<0,this.updateFx(t),!s&&this.rp&&this.endReplay(),!e)this.lookInit=!1,this.hideGame(!0),this.preview&&(this.preview.visible=!0,this.preview.rotation.y=.6*Math.sin(this.clk*.8),this.preview.position.set(0,0,8.5)),this.avatars.forEach(a=>{a.g.visible=!1}),r.fov=40,r.position.set(.2,1.3,3.9),r.lookAt(0,1,8.5),this.offset(.2);else if(s){if(this.preview&&(this.preview.visible=!1),this.syncRoster(e.roster),this.mySlot=e.mySlot,this.myTeam=e.mySlot>=0?e.mySlot<2?"a":"b":"a",this.rp||e.events.forEach(a=>this.handleEvent(a)),this.replayArm!=null&&this.clk>=this.replayArm&&(this.replayArm=null,this.startReplay()),this.offset(0),!(this.rp&&this.renderReplay(t))){const a=e.ball;if(this.placeAvatars(e.ents,t),this.placeBall(a,t),this.updateMarkers(e,a),e.st==="serve"||e.st==="play"||e.st==="point")for(this.rec.push({t:this.clk,e:e.ents.map(u=>[u.slot,u.x,u.z,u.mv,u.swId,u.swK,u.swYaw]),b:[a.x,a.y,a.z,a.vx,a.vy,a.vz,a.spin||0]});this.rec.length&&this.clk-this.rec[0].t>3.2;)this.rec.shift();const l=e.ents.find(u=>u.slot===e.mySlot);let c;if(l){const u=e.ys,h=e.st==="play"&&a.z*u>.2&&a.vz*u>-.5&&Math.hypot(a.x-l.x,a.z-l.z)<2&&a.y<2.8;this.ring.visible=!0,this.ring.position.set(l.x,.03,l.z),this.ring.material.color.set(h?"#97C459":"#fff"),this.ring.material.opacity=h?.9:.35;const d=e.st==="serve"&&e.srv===e.mySlot,p=i.aim==null?d?-e.sx*2.2:bo(-l.x*.5,-3.8,3.8):i.aim;this.aim.visible=h||d,this.aim.position.set(p,.04,(d?-5.4:-6.2)*u),this.aim.material.color.set(!d||p*-e.sx>.3?"#97C459":"#E24B4A"),this.aim.scale.setScalar(1+(i.charge||0)*.9),r.position.set(l.x*.5,8.8,19.5*u),c=new F(l.x*.35+a.x*.1,0,-1.5*u+a.z*.07)}else this.ring.visible=!1,this.aim.visible=!1,r.position.set(Math.sin(this.clk*.15)*4,9,19.5),c=new F(a.x*.1,0,-1.5+a.z*.07);this.lookInit?this.look.lerp(c,1-Math.exp(-5*t)):(this.look.copy(c),this.lookInit=!0),this.fovKick*=Math.exp(-3*t),r.fov=58+this.fovKick,this.shake>0&&(this.shake=Math.max(0,this.shake-t*1.2),r.position.x+=(Math.random()-.5)*this.shake,r.position.y+=(Math.random()-.5)*this.shake),r.lookAt(this.look)}}else{this.lookInit=!1,this.hideGame(!0),this.preview&&(this.preview.visible=!1),this.syncRoster(e.roster),this.mySlot=e.mySlot,this.avatars.forEach(l=>{l.g.visible=!0,this.animate(l,l.lx,l.lz,0,t),l.g.rotation.y=l.team==="a"?0:Math.PI});const a=this.clk*.12;r.fov=52,r.position.set(Math.sin(a)*11,16,Math.cos(a)*22),r.lookAt(0,0,0),this.offset(.3)}r.updateProjectionMatrix(),this.hq&&this.composer?(this.grade.uniforms.time.value=this.clk*7%97,this.grade.uniforms.blur.value=e?1:0,this.composer.render(t)):this.ren.render(this.scene,r)}hideGame(e){this.ball.visible=!e,this.bsh.visible=!e,this.ring.visible=!e,this.aim.visible=!e,this.land.visible=!1,this.sbox.visible=!1,this.trail.forEach(t=>{t.visible=!1})}offset(e){if(!e){this.cam.clearViewOffset();return}this.cam.setViewOffset(this.w,this.h,0,Math.round(this.h*e),this.w,this.h)}dispose(){this.ok&&(this.ro.disconnect(),this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(t=>{t.map&&t.map.dispose(),t.dispose()})}),this.ren.dispose(),this.ren.domElement.remove())}}function N0(){return{sets:[],g:{a:0,b:0},p:{a:0,b:0},tb:!1,sw:{a:0,b:0},srv:"a",sIdx:{a:0,b:0}}}const q2=["0","15","30","40"],mf=(n,e)=>n.tb?String(n.p[e]):q2[n.p[e]],$2=n=>!n.tb&&n.p.a===3&&n.p.b===3;function Y2(n,e,t){const i=_a[t],r=ar(e);return n.tb?(n.p[e]++,(n.p.a+n.p.b)%2===1&&(n.srv=ar(n.srv)),n.p[e]>=7&&n.p[e]-n.p[r]>=2?(n.g[e]++,n.srv=ar(n.srv),n.sIdx[n.srv]++,K_(n,e,i)):"punto"):n.p[e]===3?K2(n,e,i):(n.p[e]++,"punto")}function K2(n,e,t){const i=ar(e);return n.g[e]++,n.p.a=0,n.p.b=0,n.srv=ar(n.srv),n.sIdx[n.srv]++,n.g[e]>=t.games&&n.g[e]-n.g[i]>=t.winBy?K_(n,e,t):(t.tbAt&&n.g.a===t.tbAt&&n.g.b===t.tbAt&&(n.tb=!0),"game")}function K_(n,e,t){return n.sets.push({a:n.g.a,b:n.g.b}),n.sw[e]++,n.g.a=0,n.g.b=0,n.p.a=0,n.p.b=0,n.tb=!1,n.sw[e]>=t.need?"match":"set"}const Bt=(n,e,t)=>Math.max(e,Math.min(t,n)),ct=n=>Math.round(n*100)/100,J2=20;class I0{constructor({fmt:e="exp",rng:t=Math.random}={}){this.fmt=e,this.rng=t,this.state="idle",this.ents=[],this.ball={x:0,y:1,z:0,vx:0,vy:0,vz:0,last:null,bounces:0,shot:"",hold:!0,out:!1,spin:0},this.m=N0(),this.events=[],this.srv=null,this.stT=0,this.serveT=0,this.rallyT=0,this.rallyHits=0,this.matchEnd=!1,this.winner=null,this.pending=null,this.swSeq=0,this.sn=1,this.sx=1,this.retry=!1,this.clock=0}emit(e){this.events.push(e)}drain(){const e=this.events;return this.events=[],e}team(e){return this.ents.filter(t=>t.team===e)}entOf(e){return this.ents.find(t=>t.uid===e)||null}setRoster(e){const t=new Map(this.ents.map(i=>[i.slot,i]));this.ents=e.map(i=>{const r=t.get(i.slot);return r&&r.uid===i.uid?(r.name=i.name,r):{slot:i.slot,team:ff(i.slot),uid:i.uid,name:i.name,bot:i.uid==null,x:0,z:0,mv:0,sw:null,lv:null,cd:0,hx:0,buf:null,inp:{mx:0,mz:0,ax:null,age:9}}}),["a","b"].forEach(i=>{const r=this.team(i);r.forEach((s,o)=>{s.hx=r.length>1?o===0?2.3:-2.3:0})})}start(e){this.fmt=e||this.fmt,this.m=N0(),this.matchEnd=!1,this.winner=null,this.clock=0,this.retry=!1,this.newServe()}input(e,t){const i=this.entOf(e);i&&(i.inp.mx=Bt(+t.mx||0,-1,1),i.inp.mz=Bt(+t.mz||0,-1,1),i.inp.ax=t.ax==null?null:Bt(+t.ax,-4.2,4.2),i.inp.age=0,t.shot&&this.shotInput(i,t.shot,i.inp.ax,Bt(+t.pw||0,0,1)))}newServe(){this.pending&&(this.setRoster(this.pending),this.pending=null,this.emit({t:"roster"}));const e=this.m.srv,t=this.team(e);this.srv=t.length?t[this.m.sIdx[e]%t.length]:null,this.retry||(this.sn=1),this.retry=!1;const i=(this.m.p.a+this.m.p.b)%2;this.sx=i===0?hn(e):-hn(e),this.ents.forEach(s=>{const o=hn(s.team),a=s===this.srv,l=s.team===e&&!a,c=this.team(s.team).length>1;s.x=a?this.sx*2.4:s.hx,s.z=o*(a?8.8:l?3.8:c?7:8.2),s.mv=0,s.sw=null,s.lv=null,s.buf=null,s.cd=0});const r=this.ball;r.hold=!0,r.vx=r.vy=r.vz=0,r.last=null,r.out=!1,r.bounces=0,r.spin=0,r.let=!1,r.pw=0,r.shot="",this.srv&&(r.x=this.srv.x+.35,r.y=1,r.z=this.srv.z-hn(this.srv.team)*.5),this.state="serve",this.serveT=1,this.rallyT=0,this.rallyHits=0,this.emit({t:"serve",slot:this.srv?this.srv.slot:-1,sn:this.sn}),$2(this.m)&&this.emit({t:"msg",tx:"Punto de oro",ms:2200,gold:!0})}point(e,t){if(this.state!=="play")return;const i=Y2(this.m,e,this.fmt);this.state="point";const r=!!t||i==="set"||i==="match";this.stT=i==="punto"&&!t?1.3:r?6:2.3,this.matchEnd=i==="match",this.matchEnd&&(this.winner=e),this.emit({t:"point",who:e,ev:i,replay:r,label:t||null,pts:[mf(this.m,"a"),mf(this.m,"b")]})}fault(e){const t=this.ball;if(this.state==="play"&&t.shot==="saque"&&t.bounces===0&&this.srv&&e===this.srv.team){this.serveFault();return}this.point(ar(e))}serveFault(){this.state==="play"&&(this.sn===1?(this.sn=2,this.retry=!0,this.state="point",this.stT=1.4,this.emit({t:"msg",tx:"Falta · segundo saque",ms:1500})):(this.emit({t:"msg",tx:"Doble falta",ms:1500}),this.point(ar(this.srv.team))))}letServe(){this.state==="play"&&(this.retry=!0,this.state="point",this.stT=1.4,this.emit({t:"msg",tx:"Let · se repite el saque",ms:1500,gold:!0}))}serveValid(){const e=this.ball,t=-this.sx;return e.z*hn(this.srv.team)<0&&e.x*t>0&&Math.abs(e.z)<=D2}launch(e,t,i,r){const s=this.ball,o=s.x,a=s.y,l=s.z;let c,u,h;for(let d=0;d<6;d++){c=(e-o)/i,h=(t-l)/i,u=(Fr-a)/i+.5*Ur*i;const p=(0-l)/h,v=a+u*p-.5*Ur*p*p;if(!r||p>0&&p<i&&v>1.25)break;i+=.12}s.vx=c,s.vy=u,s.vz=h}swing(e,t,i){e.sw={id:++this.swSeq,k:t,yaw:i||0,t:0}}hit(e,t,i,r,s,o,a,l,c=0){const u=e==="a"?-1:1;let h=t,d=!1;l&&(h=l.ok?l.k:"remate",d=l.ok);const p=L2[h],v=h==="dejada"?0:Bt(c||0,0,1),x=[0,.5,1.3][o]*(1+.7*v),m=u*Math.min(9.3,p.d*(1+.1*v)+(this.rng()-.5)*(.6+(d?.3:x))),f=p.T*[.9,1,1.12][o]*(1-.22*v);i=Bt(i+(this.rng()-.5)*2*(d?.4:x),-4.4,4.4),this.launch(i,m,r?.5:f,!r);const _=this.ball;_.last=e,_.bounces=0,_.shot=h,_.hold=!1,_.out=!1,_.let=!1,_.pw=v,_.spin=(C0[h]||0)*[1.2,1,.6][o],this.rallyT=0,this.rallyHits++,this.swing(a,l?"remate":t,s)}serve(e,t,i){const r=this.ball,s=hn(e.team),o=Bt(i||0,0,1),a=-s*(4.6+this.rng()*1.2+.3*o);t=Bt(t+(this.rng()-.5)*(1+.6*o),-4.4,4.4);let l=2.2-.95*o+(this.rng()-.5)*.3;const c=this.rng(),u=o<.4?0:.01+.1*o*o,h=.1*o*o;let d=!1;c<u?(l=1+this.rng()*.06,d=!0):c<u+h&&(l=.7);const p=Math.abs(r.z),v=p/(p+Math.abs(a)),x=r.y,m=(l-x-(Fr-x)*v)/(.5*Ur*v*(1-v)),f=Bt(Math.sqrt(Math.max(m,.1)),.5,1.4);this.launch(t,a,f,!1),r.last=e.team,r.bounces=0,r.shot="saque",r.hold=!1,r.out=!1,r.let=d,r.pw=o,r.spin=C0.saque,this.rallyT=0,this.rallyHits++,this.swing(e,"saque",0)}reach(e){const t=this.ball;if(this.state!=="play"||!t.last||t.last===e.team||t.shot==="saque"&&t.bounces===0)return!1;const i=hn(e.team);return t.z*i>.2&&Math.hypot(t.x-e.x,t.z-e.z)<2&&t.y<2.8}quality(e,t){const i=this.ball,r=hn(t.team),s=i.x-t.x,o=i.z-t.z,a=Math.hypot(s,o),l=Math.abs(a-1)*.9+Math.abs(i.y-N2[e])*.7+(o*r>.35?.5:0);return l<.55?0:l<1.15?1:2}aimFor(e,t){return t??Bt(-e.x*.5,-3.8,3.8)}impact(e,t,i,r,s=0){const o=this.ball;this.emit({t:"hit",slot:r.slot,shot:t,q:e,gold:!!i,pw:ct(s),x:ct(o.x),y:ct(o.y),z:ct(o.z)})}exec(e,t,i,r=0){const s=this.ball,o=hn(e.team);e.cd=.35;const a=t==="x3"||t==="x4";if((a||t==="remate")&&s.y<(a?1.7:1.3)){this.swing(e,"remate",0),this.emit({t:"msg",slot:e.slot,tx:a?"Necesitás una pelota alta":"Muy baja para rematar",ms:900});return}const l=a?"remate":t,c=this.quality(l,e),u=(s.x-e.x)*o<0,h=s.x-e.x,d=s.z-e.z;e.lv={x:Bt(h,-.9,.9)*5,z:Bt(d,-.9,.9)*5,t:.12};let p=null,v=this.aimFor(e,i);if(a){const m=c===0||c===1&&this.rng()<.35+.5*r||c===2&&r>.7&&this.rng()<.2;p={k:t,ok:m},v=t==="x3"?(v>=0?1:-1)*3.9:v*.5}this.hit(e.team,l,v,!1,u?.9:0,c,e,p,r);let x;a?x=p.ok?t:"Remate":t==="drive"?x=u?"Revés":"Drive":t==="globo"?x=u?"Globo de revés":"Globo":t==="dejada"?x="Dejada":x="Remate",this.emit({t:"msg",slot:e.slot,tx:`${x} · ${I2[c]}`,ms:900,gold:c===0}),this.impact(c,l,a&&p.ok,e,r)}shotInput(e,t,i,r=0){const s=this.ball;if(this.state==="serve"&&s.hold&&this.srv===e){if(e.cd>0)return;e.cd=.4,this.state="play",this.serve(e,i??-this.sx*2.2,r),this.emit({t:"msg",slot:e.slot,tx:this.sn===2?"Segundo saque":"Saque",ms:700}),this.impact(1,"saque",!1,e,r);return}if(this.state!=="play"||e.cd>0)return;if(this.reach(e)){this.exec(e,t,i,r);return}const o=hn(e.team);if(s.last&&s.last!==e.team&&s.z*o>.2&&Math.hypot(s.x-e.x,s.z-e.z)<6){e.buf={shot:t,ax:i,pw:r,t:.3};return}e.cd=.4,this.swing(e,t==="x3"||t==="x4"?"remate":t,0)}aiMove(e,t){const i=this.ball,r=hn(e.team);let s=e.hx,o=r*5.4,a=3.6;if(i.last&&i.last!==e.team&&i.z*r>-1.5){const l=i.x+i.vx*.3;let c=i.z+i.vz*.3;c=r>0?Bt(c,1.2,9.2):Bt(c,-9.2,-1.2);let u=null,h=1e9;this.team(e.team).forEach(d=>{const p=Math.abs(l-d.x)+.35*Math.abs(c-d.z)+(d.bot?0:-.5);p<h&&(h=p,u=d)}),u===e&&(s=l,o=c,a=4.9)}else i.last===e.team&&(o=r*4.6);this.moveTo(e,Bt(s,-4.6,4.6),o,a,t)}moveTo(e,t,i,r,s){const o=t-e.x,a=i-e.z,l=Math.hypot(o,a);if(l>.05){const c=Math.min(r*s,l);e.x+=o/l*c,e.z+=a/l*c,e.mv=1}else e.mv=0}aiHit(e){const t=this.ball;if(e.cd>0||!this.reach(e)||t.y>2.7)return;const i=Math.hypot(t.x-e.x,t.z-e.z);if(this.team(e.team).filter(v=>!v.bot&&this.reach(v)).some(v=>Math.hypot(t.x-v.x,t.z-v.z)<i+.8)&&i>.8)return;const s=this.team(ar(e.team));let o=0;s.forEach(v=>{o+=v.x}),o/=Math.max(1,s.length);let a=(o>0?-1:1)*(1+this.rng()*2.7);const l=this.rng(),c=this.rng()<.3?0:this.rng()<.15?2:1;let u="drive",h=null;if(t.y>2&&l<.1){const v=this.rng()<.5?"x3":"x4";h={k:v,ok:c===0},u="remate",a=v==="x3"?(o>0?-1:1)*3.9:a*.4}else t.y>1.7&&l<.55?u="remate":l<.25?u="globo":l<.35&&(u="dejada");e.cd=.6;const d=this.rng()<.08+.02*this.rallyHits,p=this.rng()*.6;this.hit(e.team,u,a,d,0,c,e,h,p),this.emit({t:"hit",slot:e.slot,shot:u,q:c,pw:ct(p),gold:!!(h&&h.ok),x:ct(t.x),y:ct(t.y),z:ct(t.z)})}stepBall(e){const t=this.ball;if(t.hold){const s=hn(this.srv.team);t.x=this.srv.x+.35,t.y=1,t.z=this.srv.z-s*.5;return}const i=t.z;t.vy-=Ur*e,t.x+=t.vx*e,t.y+=t.vy*e,t.z+=t.vz*e;const r=i>0&&t.z<=0||i<0&&t.z>=0;if(r&&t.let&&t.y>=.92&&t.bounces===0&&(t.vz*=.45,t.vy*=.3,t.vx*=.7,this.emit({t:"net"})),r&&t.y<.92&&(t.z=i,t.vz*=-.15,t.vx*=.3,this.emit({t:"net"}),this.state==="play"&&this.fault(t.last)),t.y<Fr&&t.vy<0){const s=Math.hypot(t.vx,t.vy,t.vz),o=t.bounces===0,a=t.shot;t.y=Fr;const l=t.spin||0;t.vy=-t.vy*(o&&a==="globo"?.8:.74)*(1-.12*l);const c=(o?a==="remate"?.98:a==="globo"?.75:.92:.92)*(1+.1*l);if(t.vx*=c,t.vz*=c,t.spin=l*.6,o&&a==="dejada"&&(t.vz*=.3,t.vy*=.6),o&&a==="x3"){const u=t.x>=0?1:-1;t.vx=u*Math.max(3,(5.35-Math.abs(t.x))/.42),t.vy=11.5,t.vz*=.25}if(o&&a==="x4"){const u=t.vz>=0?1:-1;t.vz=u*Math.max(3,(10.4-Math.abs(t.z))/.45),t.vy=13,t.vx*=.3}s>3&&this.emit({t:"bounce",x:ct(t.x),z:ct(t.z)}),this.onBounce()}if(!t.out){if(Math.abs(t.x)>4.88){if(t.y>3&&Math.abs(t.x)>5.02)this.exitBall("x3");else if(t.y<=3){const s=t.x>0?1:-1;t.x=s*4.88,t.vx=-s*Math.abs(t.vx)*(t.y>2?.5:.78),t.y>2&&(t.vz+=(this.rng()-.5)*2),this.wall()}}if(Math.abs(t.z)>9.88){if(t.y>4&&Math.abs(t.z)>10.02)this.exitBall("x4");else if(t.y<=4){const s=t.z>0?1:-1;t.z=s*9.88,t.vz=-s*Math.abs(t.vz)*(t.y>3?.5:.78),t.y>3&&(t.vx+=(this.rng()-.5)*2),this.wall()}}}}onBounce(){if(this.state!=="play")return;const e=this.ball;e.bounces++;const t=e.z<0?"b":"a";if(e.shot==="saque"&&e.bounces===1){this.serveValid()?e.let&&this.letServe():this.serveFault();return}e.bounces===1?t===e.last&&this.fault(e.last):this.point(e.last)}wall(){this.ball.vy-=(this.ball.spin||0)*1.5,this.ball.spin=(this.ball.spin||0)*.6,this.emit({t:"wall"}),this.state==="play"&&this.ball.bounces===0&&this.fault(this.ball.last)}exitBall(e){const t=this.ball;t.out=!0,this.state==="play"&&(t.bounces===0?(this.fault(t.last),this.emit({t:"msg",tx:"Pelota afuera",ms:1400})):this.point(t.last,e==="x3"?"Por 3: punto directo":"Por 4: punto directo"))}step(e){if((this.state==="serve"||this.state==="play"||this.state==="point")&&(this.clock+=e),this.ents.forEach(t=>{t.cd>0&&(t.cd-=e),t.inp.age+=e,t.sw&&(t.sw.t+=e,t.sw.t>.7&&(t.sw=null))}),this.state==="serve"||this.state==="play"){if(this.ents.forEach(t=>{if(t.bot)return;const i=t.inp.age<.5,r=i?t.inp.mx:0,s=i?t.inp.mz:0;let o=t.x+r*6.5*e,a=t.z+s*6.5*e;t.lv&&(o+=t.lv.x*e,a+=t.lv.z*e,t.lv.t-=e,t.lv.t<=0&&(t.lv=null));const l=hn(t.team);if(t.x=Bt(o,-4.5,4.5),t.z=l*Bt(l*a,.9,9),t.mv=Math.min(1,Math.hypot(r,s)*1.5),t.buf){if(t.buf.t-=e,this.reach(t)&&t.cd<=0){const c=t.buf;t.buf=null,this.exec(t,c.shot,c.ax,c.pw)}else if(t.buf.t<=0){const c=t.buf;t.buf=null,t.cd=.4,this.swing(t,c.shot==="x3"||c.shot==="x4"?"remate":c.shot,0)}}}),this.state==="play"?this.ents.forEach(t=>{t.bot&&(this.aiMove(t,e),this.aiHit(t))}):this.ents.forEach(t=>{t.bot&&(t.mv=0)}),this.state==="serve"&&this.srv.bot&&(this.serveT-=e,this.serveT<=0)){this.state="play";const t=.1+this.rng()*.7;this.serve(this.srv,-this.sx*(this.rng()<.1?-.8:.8+this.rng()*3),t),this.emit({t:"hit",slot:this.srv.slot,shot:"saque",q:1,pw:ct(t),gold:!1,x:ct(this.ball.x),y:ct(this.ball.y),z:ct(this.ball.z)})}this.stepBall(e),this.state==="play"&&(this.rallyT+=e,this.rallyT>J2&&this.point(this.ball.last||"a"))}else this.state==="point"&&(this.stepBall(e),this.ents.forEach(t=>{t.mv=0}),this.stT-=e,this.stT<=0&&(this.matchEnd?(this.state="end",this.emit({t:"end",winner:this.winner})):this.newServe()))}snapshot(){const e=this.ball;return{st:this.state,m:this.m,srv:this.srv?this.srv.slot:-1,w:this.winner,sx:this.sx,sn:this.sn,ck:ct(this.clock),b:[ct(e.x),ct(e.y),ct(e.z),ct(e.vx),ct(e.vy),ct(e.vz),e.hold?1:0,ct(e.spin||0),e.bounces,e.shot==="saque"?1:0],e:this.ents.map(t=>[t.slot,ct(t.x),ct(t.z),ct(t.mv),t.sw?t.sw.id:0,t.sw?t.sw.k:"",t.sw?t.sw.yaw:0]),ev:this.drain()}}save(){return{fmt:this.fmt,state:this.state,m:JSON.parse(JSON.stringify(this.m)),matchEnd:this.matchEnd,winner:this.winner,clock:this.clock,roster:this.ents.map(e=>({slot:e.slot,uid:e.uid,name:e.name}))}}load(e){this.fmt=e.fmt,this.m=JSON.parse(JSON.stringify(e.m)),this.matchEnd=e.matchEnd,this.winner=e.winner,this.clock=e.clock||0,this.retry=!1,this.setRoster(e.roster),e.state==="end"?this.state="end":e.state==="point"&&e.matchEnd?this.state="end":this.newServe()}}function Q2(){return{mode:"2v2",fmt:"exp",users:[],slots:[null,null,null,null]}}const ci=(n,e)=>n.users.find(t=>t.id===e)||null;function U0(n){const e=n.slots.slice(),t=q_[n.mode],i=[];for(let o=0;o<4;o++)t.includes(o)||(n.slots[o]=null);t.forEach(o=>{const a=n.slots[o];if(a&&a!=="bot"){const l=ci(n,a);(!l||l.watch)&&(n.slots[o]=null)}});const r=n.slots.filter(o=>o&&o!=="bot"),s=n.users.filter(o=>!o.watch&&!r.includes(o.id)).sort((o,a)=>o.q-a.q);return t.forEach(o=>{(!n.slots[o]||n.slots[o]==="bot")&&(n.slots[o]=s.length?s.shift().id:"bot")}),t.forEach(o=>{e[o]!==n.slots[o]&&(n.slots[o]!=="bot"?i.push(`${ci(n,n.slots[o]).name} pasa a jugar`):e[o]&&e[o]!=="bot"&&i.push("Sale un jugador: entra un bot"))}),i}function th(n){return q_[n.mode].slice().sort((e,t)=>e-t).map(e=>{const t=n.slots[e],i=t&&t!=="bot"?ci(n,t):null;return{slot:e,uid:i?i.id:null,name:i?i.name:"Bot",num:i?i.num:20+e,look:i?i.look:null}})}const Z2=n=>n.users.filter(e=>!n.slots.includes(e.id));class eC{constructor(){this.h={}}on(e,t){return(this.h[e]=this.h[e]||[]).push(t),()=>this.off(e,t)}off(e,t){this.h[e]=(this.h[e]||[]).filter(i=>i!==t)}emit(e,...t){(this.h[e]||[]).slice().forEach(i=>i(...t))}}const tC=/^#[0-9a-fA-F]{6}$/,nC=["corto","largo","rodete"],iC=["none","vincha","gorra","lentes"],F0=["drive","globo","dejada","remate","x3","x4"],No={skin:"#E0AC82",hair:"#2C2C2A",style:"corto",shirt:"#0C447C",acc:"none",paddle:"#2A93A8"};function Bl(n){const e=n&&typeof n=="object"?n:{},t=(i,r)=>typeof i=="string"&&tC.test(i)?i:r;return{skin:t(e.skin,No.skin),hair:t(e.hair,No.hair),shirt:t(e.shirt,No.shirt),paddle:t(e.paddle,No.paddle),style:nC.includes(e.style)?e.style:"corto",acc:iC.includes(e.acc)?e.acc:"none"}}function Ws(n){return String(n??"").replace(/[\u0000-\u001f<>&"'`]/g,"").trim().slice(0,14)||"Jugador"}const nh=n=>{const e=Math.floor(+n);return Number.isFinite(e)?Math.max(0,Math.min(99,e)):7};function rC(n){return String(n||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,6)}function sC(){const n="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="";for(let t=0;t<4;t++)e+=n[Math.floor(Math.random()*n.length)];return e}const oC=1/20,aC=1,lC=1/20,cC=16,uC=12e3,O0=(n,e,t)=>Math.max(e,Math.min(t,n));class hC extends eC{constructor(e,{profile:t,create:i=!1,code:r="",timeouts:s={}}){super(),this.code=r,this.t=e,this.profile={name:Ws(t.name),look:Bl(t.look),num:nh(t.num)},this.create=i,this.joinTimeout=s.join??uC,this.role="connecting",this.selfId=null,this.hostId=null,this.expectHost=null,this.room=Q2(),this.roster=[],this.phase="lobby",this.qc=0,this.sim=null,this.snap=null,this.sinceSnap=0,this.lastSave=null,this.disp=new Map,this.ballDisp=null,this.evq=[],this.ctrl={mx:0,mz:0,ax:null},this.accSnap=0,this.accSave=0,this.accInp=0,this.helloAt=0,this.timer=null}async start(){this.t.onMessage((e,t,i)=>this.onMsg(e,t,i)),this.t.onJoin(e=>this.onJoin(e)),this.t.onLeave(e=>this.onLeave(e)),this.selfId=await this.t.start(),this.role!=="closed"&&(this.create?this.becomeHost():this.armTimer("nohost"),this.emit("change"))}leave(){this.role="closed",clearTimeout(this.timer);try{this.t.leave()}catch{}this.emit("change")}armTimer(e){clearTimeout(this.timer),this.timer=setTimeout(()=>{(this.role==="connecting"||this.expectHost)&&(this.role="closed",this.emit("error",e),this.emit("change"))},this.joinTimeout)}get mySlot(){const e=this.roster.find(t=>t.uid===this.selfId);return e?e.slot:-1}get ys(){const e=this.mySlot;return e>=0&&ff(e)==="b"?-1:1}get me(){return ci(this.room,this.selfId)}get isHost(){return this.role==="host"}get playing(){return this.phase==="match"}becomeHost(){this.role="host",this.hostId=this.selfId,clearTimeout(this.timer),ci(this.room,this.selfId)||this.room.users.push({id:this.selfId,...this.profile,q:++this.qc,watch:!1}),this.sim||(this.sim=new I0({fmt:this.room.fmt})),this.seat(!0),this.broadcastRoom()}seat(e){if(e||this.phase==="lobby"||!this.sim||this.sim.state==="idle"){const t=U0(this.room);this.roster=th(this.room),t.forEach(i=>this.emit("notice",i))}else{const t=U0(this.room);this.sim.pending=th(this.room),t.forEach(i=>this.emit("notice",i))}}broadcastRoom(e){this.t.send("room",{room:this.room,roster:this.roster,hostId:this.hostId,phase:this.phase},e),this.emit("change")}setMode(e){!this.isHost||this.phase!=="lobby"||!["1v1","2v2"].includes(e)||(this.room.mode=e,this.seat(!0),this.broadcastRoom())}setFmt(e){!this.isHost||this.phase!=="lobby"||!_a[e]||(this.room.fmt=e,this.broadcastRoom())}setWatch(e){if(this.isHost){const t=this.me;if(!t)return;t.watch=!!e,e||(t.q=++this.qc),this.seat(),this.broadcastRoom()}else this.t.send("watch",{v:!!e},this.hostId)}startMatch(){this.isHost&&(this.seat(!0),this.phase="match",this.sim.setRoster(this.roster.map(e=>({slot:e.slot,uid:e.uid,name:e.name}))),this.sim.start(this.room.fmt),this.accSnap=0,this.accSave=0,this.lastSave=this.sim.save(),this.broadcastRoom(),this.sendSave())}backToLobby(){this.isHost&&(this.phase="lobby",this.sim.state="idle",this.snap=null,this.seat(!0),this.broadcastRoom())}sendSave(){this.lastSave=this.sim.save(),this.t.send("sv",this.lastSave)}onJoin(e){this.role==="host"&&this.broadcastRoom(e)}onLeave(e){if(this.role==="host"){const t=ci(this.room,e);if(!t)return;this.room.users=this.room.users.filter(i=>i.id!==e),this.emit("notice",`${t.name} salió de la sala`),this.seat(),this.broadcastRoom()}else this.role==="client"&&e===this.hostId&&this.migrate(e)}onMsg(e,t,i){if(this.role!=="closed"){if(e==="room")return this.onRoom(t,i);if(e==="snap"){i===this.hostId&&this.role==="client"&&this.onSnap(t);return}if(e==="sv"){i===this.hostId&&(this.lastSave=t);return}if(this.role==="host"){if(e==="hello")return this.onHello(t,i);if(e==="watch"){const r=ci(this.room,i);r&&t&&(r.watch=!!t.v,r.watch||(r.q=++this.qc),this.seat(),this.broadcastRoom());return}e==="inp"&&this.phase==="match"&&t&&this.sim.input(i,{mx:t.mx,mz:t.mz,ax:t.ax,pw:t.pw,shot:F0.includes(t.shot)?t.shot:null})}}}onHello(e,t){if(!e)return;let i=ci(this.room,t);if(i)i.name=Ws(e.name),i.look=Bl(e.look),i.num=nh(e.num);else{if(this.room.users.length>=cC){this.t.send("full",{},t);return}i={id:t,name:Ws(e.name),look:Bl(e.look),num:nh(e.num),q:++this.qc,watch:!1},this.room.users.push(i),this.emit("notice",`${i.name} se une a la sala`)}this.seat(),this.broadcastRoom()}onRoom(e,t){if(this.role==="host"||!e||t!==e.hostId||!(this.hostId==null||t===this.hostId||t===this.expectHost))return;this.role==="connecting"&&(this.role="client",clearTimeout(this.timer)),this.hostId=t,this.expectHost=null,clearTimeout(this.timer),this.room=e.room,this.roster=e.roster,this.phase=e.phase;const r=this.room.users.reduce((s,o)=>Math.max(s,o.q),0);this.qc=Math.max(this.qc,r),!ci(this.room,this.selfId)&&Date.now()-this.helloAt>1500&&(this.helloAt=Date.now(),this.t.send("hello",this.profile,this.hostId)),this.phase==="lobby"&&(this.snap=null,this.disp.clear(),this.ballDisp=null),this.emit("change")}onSnap(e){this.snap=e,this.sinceSnap=0,(e.ev||[]).forEach(t=>this.evq.push(t))}migrate(e){this.room.users=this.room.users.filter(i=>i.id!==e);const t=this.room.users.slice().sort((i,r)=>i.q-r.q)[0];if(!t){this.role="closed",this.emit("error","closed"),this.emit("change");return}this.emit("notice","El anfitrión salió de la sala"),t.id===this.selfId?this.promote():(this.hostId=t.id,this.expectHost=t.id,this.armTimer("hostlost"),this.emit("change"))}promote(){this.role="host",this.hostId=this.selfId,this.expectHost=null,clearTimeout(this.timer),this.qc=this.room.users.reduce((e,t)=>Math.max(e,t.q),0),this.sim=new I0({fmt:this.room.fmt}),this.seat(!0),this.phase==="match"&&this.lastSave?(this.sim.load({...this.lastSave,roster:this.roster.map(e=>({slot:e.slot,uid:e.uid,name:e.name}))}),this.evq.push({t:"msg",tx:"Nuevo anfitrión: se repite el punto",ms:2200})):this.phase="lobby",this.snap=null,this.disp.clear(),this.ballDisp=null,this.emit("notice","Ahora sos el anfitrión de la sala"),this.broadcastRoom()}setControl(e){this.ctrl={mx:e.mx||0,mz:e.mz||0,ax:e.ax==null?null:e.ax}}shot(e,t=0){if(this.mySlot<0||this.phase!=="match"||!F0.includes(e))return;const i={...this.ctrl,shot:e,pw:Math.max(0,Math.min(1,+t||0))};this.isHost?this.sim.input(this.selfId,i):this.t.send("inp",i,this.hostId)}tick(e){if(this.role==="host"){if(this.phase!=="match"||this.sim.state==="idle")return;this.mySlot>=0&&this.sim.input(this.selfId,this.ctrl);let t=Math.min(e,.25);for(;t>1e-6;){const i=Math.min(t,.016666666666666666);this.sim.step(i),t-=i}if(this.accSnap+=e,this.accSnap>=oC){this.accSnap=0;const i=this.sim.snapshot();i.ev.forEach(r=>{this.evq.push(r),r.t==="roster"&&(this.roster=th(this.room),this.broadcastRoom())}),this.snap=i,this.t.send("snap",i)}this.accSave+=e,this.accSave>=aC&&(this.accSave=0,this.sendSave())}else this.role==="client"&&this.phase==="match"&&this.mySlot>=0&&(this.accInp+=e,this.accInp>=lC&&(this.accInp=0,this.t.send("inp",this.ctrl,this.hostId)))}takeEvents(){const e=this.evq;return this.evq=[],e}frame(e){const t={roster:this.roster,mySlot:this.mySlot,ys:this.ys,phase:this.phase,events:this.takeEvents(),room:this.room};if(this.phase!=="match")return{...t,st:"lobby",ents:[],ball:null,m:null,srv:-1,winner:null};if(this.role==="host"){const A=this.sim,D=A.ball;return{...t,st:A.state,m:A.m,srv:A.srv?A.srv.slot:-1,winner:A.winner,sx:A.sx,sn:A.sn,clock:A.clock,ball:{x:D.x,y:D.y,z:D.z,vx:D.vx,vy:D.vy,vz:D.vz,hold:D.hold,spin:D.spin||0,bn:D.bounces,sf:D.shot==="saque"?1:0},ents:A.ents.map(S=>({slot:S.slot,x:S.x,z:S.z,mv:S.mv,swId:S.sw?S.sw.id:0,swK:S.sw?S.sw.k:"",swYaw:S.sw?S.sw.yaw:0}))}}const i=this.snap;if(!i)return{...t,st:"wait",ents:[],ball:null,m:null,srv:-1,winner:null};this.sinceSnap+=e;const r=1-Math.exp(-20*e),s=this.mySlot,o=i.st==="play"||i.st==="serve",a=i.e.map(([A,D,S,T,k,P,W])=>{let b=this.disp.get(A);if(b||(b={x:D,z:S},this.disp.set(A,b)),A===s&&o){const N=hn(ff(A));b.x=O0(b.x+this.ctrl.mx*6.5*e,-4.5,4.5),b.z=N*O0(N*(b.z+this.ctrl.mz*6.5*e),.9,9);const B=1-Math.exp(-4*e);b.x+=(D-b.x)*B,b.z+=(S-b.z)*B,Math.hypot(D-b.x,S-b.z)>1.8&&(b.x=D,b.z=S)}else Math.hypot(D-b.x,S-b.z)>3?(b.x=D,b.z=S):(b.x+=(D-b.x)*r,b.z+=(S-b.z)*r);return{slot:A,x:b.x,z:b.z,mv:T,swId:k,swK:P,swYaw:W}}),[l,c,u,h,d,p,v,x,m,f]=i.b,_=Math.min(this.sinceSnap,.12),g=l+h*_,y=Math.max(Fr,c+d*_-.5*Ur*_*_),R=u+p*_;let E=this.ballDisp;if(!E||v||Math.hypot(g-E.x,R-E.z)>4)E={x:g,y,z:R};else{const A=1-Math.exp(-30*e);E={x:E.x+(g-E.x)*A,y:E.y+(y-E.y)*A,z:E.z+(R-E.z)*A}}return this.ballDisp=E,{...t,st:i.st,m:i.m,srv:i.srv,winner:i.w,ents:a,sx:i.sx,sn:i.sn,clock:(i.ck||0)+(i.st==="end"?0:this.sinceSnap),ball:{x:E.x,y:E.y,z:E.z,vx:h,vy:d,vz:p,hold:!!v,spin:x||0,bn:m||0,sf:f||0}}}}const fC="modulepreload",dC=function(n){return"/padel-v1/"+n},z0={},pC=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=dC(l),l in z0)return;z0[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":fC,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((d,p)=>{h.addEventListener("load",d),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},mC={},J_=()=>Math.random().toString(36).slice(2,10),kn=()=>{};function gC(){return{async start(){return"solo-"+J_()},send:kn,onMessage:kn,onJoin:kn,onLeave:kn,leave:kn}}function vC(n){const e=J_(),t={msg:kn,join:kn,leave:kn},i=new Set;let r=null;return{async start(){return r=new BroadcastChannel("padel-club-"+n),r.onmessage=s=>{const o=s.data;!o||o.from===e||o.to&&o.to!==e||(o.k==="hi"?(i.has(o.from)||(i.add(o.from),t.join(o.from)),o.to||r.postMessage({k:"hi",from:e,to:o.from})):o.k==="bye"?i.delete(o.from)&&t.leave(o.from):o.k==="m"&&t.msg(o.type,o.data,o.from))},r.postMessage({k:"hi",from:e}),addEventListener("pagehide",()=>r&&r.postMessage({k:"bye",from:e})),e},send(s,o,a){r.postMessage({k:"m",from:e,to:a,type:s,data:o})},onMessage(s){t.msg=s},onJoin(s){t.join=s},onLeave(s){t.leave=s},leave(){r&&(r.postMessage({k:"bye",from:e}),r.close(),r=null)}}}function _C(n,e="padel-club-comunidad-v1"){const t={msg:kn,join:kn,leave:kn};let i=null,r=null;return{async start(){const{joinRoom:s}=await pC(async()=>{const{joinRoom:c}=await import("./dist-DVIO7BUi.js");return{joinRoom:c}},[]),o=import.meta&&mC||{},a=o.VITE_TURN_URL?[{urls:o.VITE_TURN_URL.split(","),username:o.VITE_TURN_USER,credential:o.VITE_TURN_PASS}]:void 0;return i=s({appId:e,...a?{turnConfig:a}:{}},"padel-"+n),r=i.makeAction("m"),r.onMessage((c,u)=>{c&&typeof c.t=="string"&&t.msg(c.t,c.d,u.peerId)}),i.onPeerJoin(({peerId:c})=>t.join(c)),i.onPeerLeave(({peerId:c})=>t.leave(c)),(await i.getSelf()).peerId},send(s,o,a){r&&r.send({t:s,d:o},a?{target:a}:void 0).catch(kn)},onMessage(s){t.msg=s},onJoin(s){t.join=s},onLeave(s){t.leave=s},leave(){i&&(i.leave(),i=null,r=null)}}}function xC(n,e){return n==="solo"?gC():n==="broadcast"?vC(e):_C(e)}const yC={shirt:["#0C447C","#D85A30","#1D9E75","#2C2C2A","#EF9F27","#534AB7"],hair:["#2C2C2A","#6B4423","#D9A441","#A32D2D"],skin:["#F5D0B0","#E0AC82","#B9774F","#7A4A2E"],paddle:["#2A93A8","#1C1C1E","#2F6F8F","#C8232C","#E58BB5"]},SC=[["corto","Corto"],["largo","Largo"],["rodete","Rodete"]],MC=[["none","Ninguno"],["vincha","Vincha"],["gorra","Gorra"],["lentes","Lentes"]],EC=[["Camiseta","shirt"],["Pelo","hair"],["Piel","skin"],["Paleta","paddle"]];function wC({label:n,k:e,look:t,setLook:i}){return ne.jsxs("div",{className:"row",children:[ne.jsx("span",{className:"lbl",children:n}),ne.jsx("div",{className:"chips",children:yC[e].map(r=>ne.jsx("button",{"aria-label":`${n} ${r}`,"aria-pressed":t[e]===r,className:`sw ${t[e]===r?"on":""}`,style:{background:r},onClick:()=>i({...t,[e]:r})},r))})]})}function ih({label:n,list:e,value:t,onPick:i}){return ne.jsxs("div",{className:"row",children:[ne.jsx("span",{className:"lbl",children:n}),ne.jsx("div",{className:"chips",children:e.map(([r,s])=>ne.jsx("button",{className:`chip ${t===r?"on":""}`,"aria-pressed":t===r,onClick:()=>i(r),children:s},r))})]})}function TC({profile:n,setProfile:e,hq:t,setHq:i,joinCode:r,setJoinCode:s,onCreate:o,onJoin:a,onSolo:l,error:c,muted:u,onMute:h}){const d=p=>e({...n,look:p});return ne.jsxs("div",{className:"sheet menu",children:[ne.jsxs("div",{className:"titlebar",children:[ne.jsx("h1",{children:"Padel Club"}),ne.jsx("button",{className:"icon","aria-label":u?"Activar sonido":"Silenciar",onClick:h,children:u?"🔇":"🔊"})]}),ne.jsxs("label",{className:"field",children:[ne.jsx("span",{className:"lbl",children:"Tu nombre"}),ne.jsx("input",{value:n.name,maxLength:14,placeholder:"Nico",onChange:p=>e({...n,name:p.target.value})})]}),ne.jsxs("details",{className:"look",children:[ne.jsx("summary",{children:"Personalizar jugador"}),EC.map(([p,v])=>ne.jsx(wC,{label:p,k:v,look:n.look,setLook:d},v)),ne.jsx(ih,{label:"Peinado",list:SC,value:n.look.style,onPick:p=>d({...n.look,style:p})}),ne.jsx(ih,{label:"Accesorio",list:MC,value:n.look.acc,onPick:p=>d({...n.look,acc:p})}),ne.jsx(ih,{label:"Calidad",list:[["hi","Alta"],["lo","Media"]],value:t?"hi":"lo",onPick:p=>i(p==="hi")})]}),c&&ne.jsx("p",{className:"err",role:"alert",children:c}),ne.jsx("button",{className:"btn primary",onClick:o,children:"Crear sala"}),ne.jsxs("div",{className:"join",children:[ne.jsx("input",{value:r,maxLength:6,placeholder:"Código","aria-label":"Código de sala",autoCapitalize:"characters",onChange:p=>s(p.target.value.toUpperCase()),onKeyDown:p=>{p.key==="Enter"&&a()}}),ne.jsx("button",{className:"btn",onClick:a,children:"Unirme"})]}),ne.jsx("button",{className:"btn ghost",onClick:l,children:"Practicar contra bots"})]})}function AC({code:n,onCancel:e}){return ne.jsxs("div",{className:"sheet center",children:[ne.jsx("div",{className:"spin","aria-hidden":"true"}),ne.jsxs("p",{children:["Buscando la sala ",ne.jsx("b",{children:n}),"…"]}),ne.jsx("p",{className:"muted",children:"El anfitrión tiene que tener la sala abierta."}),ne.jsx("button",{className:"btn",onClick:e,children:"Cancelar"})]})}function CC({slot:n,room:e,selfId:t}){const i=e.slots[n],r=i&&i!=="bot"?ci(e,i):null;return ne.jsxs("div",{className:`slot ${r?"human":"bot"}`,children:[ne.jsx("span",{className:"dot",style:{background:r?r.look.shirt:"#888780"}}),ne.jsxs("span",{className:"nm",children:[r?r.name:"Bot",r&&r.id===t?" (vos)":""]}),ne.jsx("span",{className:"tag",children:r?"Jugador":"Bot"})]})}function bC({session:n,link:e,onCopy:t,onStart:i,onLeave:r,solo:s}){const o=n.room,a=n.isHost,l=n.me,c=n.mySlot,u=o.mode==="2v2"?[[0,1],[2,3]]:[[0],[2]],h=Z2(o);return ne.jsxs("div",{className:"sheet lobby",children:[ne.jsxs("div",{className:"titlebar",children:[ne.jsxs("div",{children:[ne.jsx("h2",{children:s?"Práctica":`Sala ${n.code||""}`}),ne.jsxs("span",{className:"muted",children:[o.users.length," ",o.users.length===1?"persona":"personas",s?"":a?" · sos el anfitrión":""]})]}),!s&&ne.jsx("button",{className:"btn small",onClick:t,children:"Copiar link"})]}),!s&&ne.jsx("p",{className:"link","aria-label":"Link de la sala",children:e}),ne.jsxs("div",{className:"opts",children:[ne.jsx("div",{className:"chips",children:[["2v2","2 vs 2"],["1v1","1 vs 1"]].map(([d,p])=>ne.jsx("button",{className:`chip ${o.mode===d?"on":""}`,disabled:!a,onClick:()=>n.setMode(d),children:p},d))}),ne.jsx("div",{className:"chips",children:Object.entries(_a).map(([d,p])=>ne.jsx("button",{className:`chip ${o.fmt===d?"on":""}`,disabled:!a,onClick:()=>n.setFmt(d),children:p.label},d))})]}),ne.jsx("div",{className:"teams",children:u.map((d,p)=>ne.jsxs("div",{className:"team",children:[ne.jsxs("span",{className:"lbl",children:["Equipo ",p?"B":"A"]}),d.map(v=>ne.jsx(CC,{slot:v,room:o,selfId:n.selfId},v))]},p))}),ne.jsxs("p",{className:"muted spec",children:["Espectadores: ",h.length?h.map(d=>d.name+(d.id===n.selfId?" (vos)":"")).join(", "):"ninguno","."," ","Si un jugador se va, entra el primero en espera; si no hay nadie, entra un bot."]}),ne.jsxs("div",{className:"actions",children:[l&&ne.jsx("button",{className:"btn",onClick:()=>n.setWatch(c>=0),children:c>=0?"Mirar":"Jugar"}),a?ne.jsx("button",{className:"btn primary grow",onClick:i,children:"Empezar partido"}):ne.jsx("button",{className:"btn grow",disabled:!0,children:"Esperando al anfitrión…"}),ne.jsx("button",{className:"btn ghost",onClick:r,children:"Salir"})]})]})}const Q_=(n,e)=>{const t=n.filter(i=>i.slot<2==(e==="a")).map(i=>i.name.split(" ")[0]);return t.length?t.join(" / "):e==="a"?"Equipo A":"Equipo B"};function Z_({m:n,roster:e,fmt:t,srv:i,theme:r}){if(!n)return null;const s=_a[t]||_a.exp,o=i>=0?i<2?"a":"b":n.srv;return ne.jsxs("table",{className:`score ${r||""}`,children:[ne.jsx("thead",{children:ne.jsxs("tr",{children:[ne.jsx("th",{}),Array.from({length:s.cols},(a,l)=>ne.jsxs("th",{children:["S",l+1]},l)),ne.jsx("th",{children:n.tb?"TB":"Pts"})]})}),ne.jsx("tbody",{children:["b","a"].map(a=>{const l=a==="a"?"b":"a";return ne.jsxs("tr",{children:[ne.jsxs("td",{className:"tn",children:[ne.jsx("i",{className:o===a?"srv":"nosrv"}),Q_(e,a)]}),Array.from({length:s.cols},(c,u)=>{let h="-",d=!1;return u<n.sets.length?(h=n.sets[u][a],d=n.sets[u][a]>n.sets[u][l]):u===n.sets.length&&(h=n.g[a],d=!0),ne.jsx("td",{className:d?"b":"",children:h},u)}),ne.jsx("td",{className:"b",children:mf(n,a)})]},a)})})]})}function RC({session:n,hud:e,onRematch:t,onLobby:i,onLeave:r}){const s=n.isHost,o=n.mySlot>=0?n.mySlot<2?"a":"b":null,a=o?e.winner===o:null,l=a==null?`Ganó ${Q_(n.roster,e.winner)}`:a?"Ganaste el partido":"Perdiste el partido";return ne.jsx("div",{className:"end",children:ne.jsxs("div",{className:"sheet center",children:[ne.jsx("h2",{children:l}),ne.jsx(Z_,{m:e.m,roster:n.roster,fmt:n.room.fmt,srv:-1}),o&&ne.jsxs("p",{className:"pts",children:["Puntos del club ",ne.jsx("b",{children:a?"+25":"+10"})]}),s?ne.jsxs(ne.Fragment,{children:[ne.jsx("button",{className:"btn primary",onClick:t,children:"Revancha"}),ne.jsx("button",{className:"btn",onClick:i,children:"Volver a la sala"})]}):ne.jsx("p",{className:"muted",children:"Esperando que el anfitrión elija…"}),ne.jsx("button",{className:"btn ghost",onClick:r,children:"Salir"})]})})}const un=56,rh=.1,PC=.8;function LC({ctrl:n}){const e=Ge.useRef(null),t=Ge.useRef(null),i=Ge.useRef(null),r=Ge.useRef({id:null,cx:0,cy:0}),s=(l,c)=>{t.current.style.transform=`translate(${l-un}px, ${c-un}px)`},o=l=>{const c=r.current,u=e.current.getBoundingClientRect();let h=l.clientX-u.left-c.cx,d=l.clientY-u.top-c.cy;const p=Math.hypot(h,d);if(p>un){const g=(p-un)/p;c.cx=Math.max(un+6,Math.min(u.width-un-6,c.cx+h*g)),c.cy=Math.max(un+6,Math.min(u.height-un-6,c.cy+d*g)),s(c.cx,c.cy),h=l.clientX-u.left-c.cx,d=l.clientY-u.top-c.cy}const v=Math.min(un,Math.hypot(h,d)),x=v/un,m=v?h/Math.hypot(h,d):0,f=v?d/Math.hypot(h,d):0,_=x<rh?0:Math.min(1,(x-rh)/(PC-rh));n.current={x:m*_,y:f*_,active:!0},i.current.style.transform=`translate(${m*v*.8}px, ${f*v*.8}px)`},a=l=>{const c=r.current;l&&c.id!==l.pointerId||(c.id=null,n.current={x:0,y:0,active:!1},e.current.dataset.on="",i.current.style.transform="translate(0,0)")};return ne.jsxs("div",{ref:e,className:"joyzone","aria-label":"Joystick",onPointerDown:l=>{const c=r.current;if(c.id!=null)return;l.currentTarget.setPointerCapture(l.pointerId),c.id=l.pointerId;const u=e.current.getBoundingClientRect();c.cx=Math.max(un+6,Math.min(u.width-un-6,l.clientX-u.left)),c.cy=Math.max(un+6,Math.min(u.height-un-6,l.clientY-u.top)),s(c.cx,c.cy),e.current.dataset.on="1",o(l)},onPointerMove:l=>{r.current.id===l.pointerId&&o(l)},onPointerUp:a,onPointerCancel:a,onContextMenu:l=>l.preventDefault(),children:[ne.jsxs("div",{className:"joyhint","aria-hidden":"true",children:[ne.jsx("b",{children:"✥"}),ne.jsx("span",{children:"Tocá y arrastrá"})]}),ne.jsx("div",{ref:t,className:"joybase",children:ne.jsx("div",{ref:i,className:"knob"})})]})}const DC=[{k:"drive",l:"Drive"},{k:"globo",l:"Globo"},{k:"dejada",l:"Dejada"},{k:"remate",l:"Remate",c:"danger"},{k:"x3",l:"x3",c:"gold"},{k:"x4",l:"x4",c:"gold"}];function NC({onPress:n,onRelease:e,back:t,chg:i}){const r=Ge.useRef(null),s=Ge.useRef(null);return Ge.useEffect(()=>{let o=0;const a=()=>{o=requestAnimationFrame(a);const l=i.current,c=l.k?Math.min(1,Math.max(0,((performance.now()-l.t0)/1e3-.14)/.8)):0;r.current&&(r.current.style.transform=`scaleX(${c})`,r.current.style.opacity=l.k&&c>.02?1:0,r.current.dataset.full=c>=.98?"1":""),s.current&&(s.current.dataset.on=l.k||"")};return o=requestAnimationFrame(a),()=>cancelAnimationFrame(o)},[i]),ne.jsxs("div",{className:"shots",ref:s,children:[ne.jsx("div",{className:"charge",children:ne.jsx("i",{ref:r})}),DC.map(o=>ne.jsx("button",{className:`shot ${o.c||""}`,"data-k":o.k,onPointerDown:a=>{a.preventDefault(),a.currentTarget.setPointerCapture(a.pointerId),n(o.k)},onPointerUp:()=>e(o.k),onPointerCancel:()=>e(o.k),onContextMenu:a=>a.preventDefault(),children:o.k==="drive"&&t?"Revés":o.l},o.k))]})}const IC=(n,e,t)=>Math.max(e,Math.min(t,n)),UC=new URLSearchParams(location.search).get("net")==="local"?"broadcast":"trystero";function FC(){try{const n=JSON.parse(localStorage.getItem("padel.profile"));if(n)return{name:String(n.name||""),look:Bl(n.look),num:Number.isFinite(+n.num)?+n.num:7}}catch{}return{name:"",look:{...No},num:1+Math.floor(Math.random()*98)}}const OC=()=>{const n=location.hash.match(/#\/sala\/([A-Za-z0-9]{3,6})/);return n?n[1].toUpperCase():""},zC=n=>{const e=Math.max(0,n|0),t=e/3600|0,i=e%3600/60|0,r=e%60;return`${t?t+":"+String(i).padStart(2,"0"):i}:${String(r).padStart(2,"0")}`};function kC(){const n=Ge.useRef(null),e=Ge.useRef(null),t=Ge.useRef(null),i=Ge.useRef({x:0,y:0,active:!1}),r=Ge.useRef({}),s=Ge.useRef(null),o=Ge.useRef(null),a=Ge.useRef(""),[,l]=Ge.useReducer(q=>q+1,0),[c,u]=Ge.useState(FC),[h,d]=Ge.useState(!0),[p,v]=Ge.useState(OC()),[x,m]=Ge.useState(""),[f,_]=Ge.useState(""),[g,y]=Ge.useState(H2()),[R,E]=Ge.useState([]),[A,D]=Ge.useState(null),[S,T]=Ge.useState(null),[k,P]=Ge.useState(!1),[W,b]=Ge.useState(!1),[N,B]=Ge.useState(!1),[J,I]=Ge.useState(()=>{try{return localStorage.getItem("padel.lefty")==="1"}catch{return!1}}),O=()=>I(q=>{try{localStorage.setItem("padel.lefty",q?"0":"1")}catch{}return!q}),H=Ge.useRef({k:null,t0:0});o.current=c;const Y=Ge.useCallback(q=>{const Q=Math.random();E(ve=>[...ve.slice(-2),{id:Q,tx:q}]),setTimeout(()=>E(ve=>ve.filter(de=>de.id!==Q)),3200)},[]),oe=Ge.useCallback((q,Q,ve)=>{const de=Math.random();D({id:de,tx:q,gold:ve}),setTimeout(()=>D(w=>w&&w.id===de?null:w),Q||900)},[]),X=Ge.useCallback(q=>{if(q==="dejada"){t.current&&t.current.shot(q,0);return}H.current.k||(H.current={k:q,t0:performance.now()})},[]),ie=Ge.useCallback(q=>{const Q=H.current;if(Q.k!==q)return;H.current={k:null,t0:0};const ve=(performance.now()-Q.t0)/1e3;t.current&&t.current.shot(q,ve<.14?0:Math.min(1,(ve-.14)/.8))},[]),j=q=>{d(q),e.current&&e.current.setQuality(q)};Ge.useEffect(()=>{try{localStorage.setItem("padel.profile",JSON.stringify(c))}catch{}},[c]),Ge.useEffect(()=>{e.current&&e.current.setPreviewLook(c.look,Ws(c.name).split(" ")[0],c.num)},[c]),Ge.useEffect(()=>{const q=new j2(n.current,{autoQuality:new URLSearchParams(location.search).get("q")!=="hi",onQuality:()=>{d(!1),Y("Calidad ajustada para mantener la fluidez")},onReplay:z=>{B(z),z&&D(null)}});if(new URLSearchParams(location.search).has("debug")&&(window.__stage=q),!q.ok){P(!0);return}e.current=q,q.setPreviewLook(o.current.look,Ws(o.current.name).split(" ")[0],o.current.num);let Q=0,ve=performance.now();const de=z=>{Q=requestAnimationFrame(de);const re=Math.min((z-ve)/1e3,.25);ve=z;const ee=t.current;let G=null;if(ee&&(ee.role==="host"||ee.role==="client")){const le=ee.ys,ye=i.current,Ee=r.current;let Pe=ye.x,se=ye.y;ye.active||(Pe=(Ee.d||Ee.arrowright?1:0)-(Ee.a||Ee.arrowleft?1:0),se=(Ee.s||Ee.arrowdown?1:0)-(Ee.w||Ee.arrowup?1:0));const We=Math.abs(Pe)>.25?IC(Pe*4*le,-4,4):null;s.current=We,ee.setControl({mx:Pe*le,mz:se*le,ax:We}),ee.tick(re),G=ee.frame(re);for(const be of G.events)if(be.t==="msg"&&(be.slot==null||be.slot===G.mySlot))oe(be.tx,be.ms,be.gold);else if(be.t==="point"){const Qe=G.mySlot>=0?G.mySlot<2?"a":"b":null,it=Qe?be.who===Qe:null,He=be.pts,me=Qe==="b"?`${He[1]} - ${He[0]}`:`${He[0]} - ${He[1]}`,U=it==null?be.who==="a"?"Equipo A":"Equipo B":it?"para vos":"rival";let _e=be.label;_e||(_e=be.ev==="punto"?`${it==null?"Punto "+U:it?"Punto para vos":"Punto rival"} · ${me}`:be.ev==="game"?`Game ${U}`:be.ev==="set"?`Set ${U}`:"Partido"),oe(_e,be.ev==="punto"&&!be.label?1200:2e3,be.ev!=="punto"||!!be.label)}const Fe=G.ents.find(be=>be.slot===G.mySlot),Ne=!!(Fe&&G.ball&&(G.ball.x-Fe.x)*le<0),De=Math.floor(G.clock||0),Ce=`${G.phase}|${G.st}|${G.srv}|${JSON.stringify(G.m)}|${Ne}|${G.mySlot}|${G.sn}|${De}`;Ce!==a.current&&(a.current=Ce,T({st:G.st,m:G.m,srv:G.srv,winner:G.winner,back:Ne,phase:G.phase,mySlot:G.mySlot,sn:G.sn,ck:De}))}else a.current&&(a.current="",T(null));const pe=H.current;q.render(G,re,{aim:s.current,charge:pe.k?Math.min(1,Math.max(0,((performance.now()-pe.t0)/1e3-.14)/.8)):0})};Q=requestAnimationFrame(de);const w=z=>{const re=z.key.toLowerCase();r.current[re]=!0;const ee={1:"drive",2:"globo",3:"dejada",4:"remate",5:"x3",6:"x4"};ee[re]&&!z.repeat&&X(ee[re]),(z.key.startsWith("Arrow")||re===" ")&&z.preventDefault()},M=z=>{const re=z.key.toLowerCase();r.current[re]=!1;const ee={1:"drive",2:"globo",3:"dejada",4:"remate",5:"x3",6:"x4"};ee[re]&&ie(ee[re])};return window.addEventListener("keydown",w),window.addEventListener("keyup",M),()=>{cancelAnimationFrame(Q),window.removeEventListener("keydown",w),window.removeEventListener("keyup",M),t.current&&t.current.leave(),q.dispose(),e.current=null}},[Y,oe,X,ie]);const ae=!!(S&&S.phase==="match");Ge.useEffect(()=>(ae?V2():(L0(),B(!1)),()=>L0()),[ae]);const ce=Ge.useCallback(()=>{t.current&&t.current.leave(),t.current=null,m(""),b(!1),T(null),D(null),location.hash&&history.replaceState(null,"",location.pathname+location.search),l()},[]),we=Ge.useCallback(async(q,Q)=>{Co(),_("");const ve=q==="join"?rC(Q):sC();if(q==="join"&&ve.length<3){_("Escribí el código de la sala");return}t.current&&t.current.leave();const de=o.current,w=new hC(xC(q==="solo"?"solo":UC,ve),{profile:{name:Ws(de.name),look:de.look,num:de.num},create:q!=="join",code:ve});w.on("change",l),w.on("notice",Y),w.on("error",M=>{m(""),_(M==="nohost"?`No encontramos la sala ${ve}. Revisá el código y que el anfitrión la tenga abierta.`:M==="hostlost"?"Se perdió la conexión con la sala.":"La sala se cerró."),t.current=null,l()}),t.current=w,b(q==="solo"),q==="join"&&m(ve);try{await w.start(),q==="create"&&history.replaceState(null,"",`${location.pathname}${location.search}#/sala/${ve}`),q==="solo"&&w.startMatch(),(w.role==="host"||w.role==="client")&&m("")}catch{m(""),t.current=null,_("No se pudo conectar. Revisá tu conexión e intentá de nuevo."),l()}},[Y]);Ge.useEffect(()=>{x&&t.current&&t.current.role==="client"&&m("")});const Se=t.current,xe=Se&&(Se.role==="host"||Se.role==="client"),Re=Se?`${location.origin}${location.pathname}${location.search}#/sala/${Se.code}`:"",L=async()=>{try{navigator.share&&/Mobi/i.test(navigator.userAgent)?await navigator.share({title:"Padel Club",text:"Sumate a mi partido",url:Re}):(await navigator.clipboard.writeText(Re),Y("Link copiado"))}catch{Y("No se pudo copiar: copialo a mano")}},fe=xe&&Se.phase==="match"&&S&&S.phase==="match",te=fe&&Se.mySlot>=0&&S.st!=="end";return ne.jsxs("div",{className:"app",children:[ne.jsx("div",{className:"stage",ref:n}),k&&ne.jsxs("div",{className:"sheet center",children:[ne.jsx("h2",{children:"Tu navegador no soporta 3D"}),ne.jsx("p",{className:"muted",children:"Probá con Chrome, Safari o Firefox actualizados."})]}),ne.jsx("div",{className:"toasts","aria-live":"polite",children:R.map(q=>ne.jsx("div",{className:"toast",children:q.tx},q.id))}),!k&&!xe&&!x&&ne.jsx(TC,{profile:c,setProfile:u,hq:h,setHq:j,joinCode:p,setJoinCode:v,onCreate:()=>we("create"),onJoin:()=>we("join",p),onSolo:()=>we("solo"),error:f,muted:g,onMute:()=>{const q=!g;P0(q),y(q),Co()}}),!k&&x&&ne.jsx(AC,{code:x,onCancel:ce}),!k&&xe&&Se.phase==="lobby"&&ne.jsx(bC,{session:Se,link:Re,solo:W,onCopy:L,onLeave:ce,onStart:()=>{Co(),Se.startMatch()}}),fe&&ne.jsxs(ne.Fragment,{children:[ne.jsxs("div",{className:"hud",children:[ne.jsx(Z_,{m:S.m,roster:Se.roster,fmt:Se.room.fmt,srv:S.srv,theme:"hud"}),ne.jsxs("div",{className:"chips",children:[ne.jsxs("span",{className:"chip clock",children:["⏱ ",zC(S.ck)]}),S.st==="serve"&&ne.jsx("span",{className:"chip",children:S.sn===2?"2º saque":"1er saque"})]}),ne.jsx("button",{className:"icon float","aria-label":g?"Activar sonido":"Silenciar",onClick:()=>{const q=!g;P0(q),y(q),Co()},children:g?"🔇":"🔊"}),ne.jsx("button",{className:"icon float hand","aria-label":"Cambiar de mano",onClick:O,children:J?"🫲":"🫱"}),ne.jsx("button",{className:"icon float exit","aria-label":"Salir de la sala",onClick:ce,children:"✕"})]}),N&&ne.jsxs("div",{className:"replay-tag",children:[ne.jsx("span",{children:"● REPETICIÓN"}),ne.jsx("button",{onClick:()=>e.current&&e.current.skipReplay(),children:"Saltar"})]}),A&&!N&&ne.jsx("div",{className:`banner ${A.gold?"gold":""}`,children:A.tx},A.id),Se.mySlot<0&&ne.jsx("div",{className:"spectator",children:"Mirás como espectador · entrás cuando se libere un lugar"}),te&&!N&&ne.jsxs("div",{className:`controls ${J?"lefty":""}`,children:[ne.jsx(LC,{ctrl:i}),ne.jsx(NC,{back:S.back,chg:H,onPress:q=>{Co(),X(q)},onRelease:ie})]}),S.st==="end"&&ne.jsx(RC,{session:Se,hud:S,onRematch:()=>Se.startMatch(),onLobby:()=>Se.backToLobby(),onLeave:ce})]})]})}Jv(document.getElementById("root")).render(ne.jsx(kC,{}));
