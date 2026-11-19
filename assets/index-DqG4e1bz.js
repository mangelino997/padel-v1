(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Hm={exports:{}},Xl={},Gm={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qo=Symbol.for("react.element"),Jv=Symbol.for("react.portal"),e_=Symbol.for("react.fragment"),t_=Symbol.for("react.strict_mode"),n_=Symbol.for("react.profiler"),i_=Symbol.for("react.provider"),r_=Symbol.for("react.context"),s_=Symbol.for("react.forward_ref"),o_=Symbol.for("react.suspense"),a_=Symbol.for("react.memo"),l_=Symbol.for("react.lazy"),Vf=Symbol.iterator;function u_(n){return n===null||typeof n!="object"?null:(n=Vf&&n[Vf]||n["@@iterator"],typeof n=="function"?n:null)}var Vm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wm=Object.assign,Xm={};function Vs(n,e,t){this.props=n,this.context=e,this.refs=Xm,this.updater=t||Vm}Vs.prototype.isReactComponent={};Vs.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Vs.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function jm(){}jm.prototype=Vs.prototype;function bh(n,e,t){this.props=n,this.context=e,this.refs=Xm,this.updater=t||Vm}var Ph=bh.prototype=new jm;Ph.constructor=bh;Wm(Ph,Vs.prototype);Ph.isPureReactComponent=!0;var Wf=Array.isArray,qm=Object.prototype.hasOwnProperty,Lh={current:null},Ym={key:!0,ref:!0,__self:!0,__source:!0};function $m(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qm.call(e,i)&&!Ym.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Qo,type:n,key:s,ref:o,props:r,_owner:Lh.current}}function c_(n,e){return{$$typeof:Qo,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Dh(n){return typeof n=="object"&&n!==null&&n.$$typeof===Qo}function h_(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Xf=/\/+/g;function gu(n,e){return typeof n=="object"&&n!==null&&n.key!=null?h_(""+n.key):e.toString(36)}function Ka(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Qo:case Jv:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+gu(o,0):i,Wf(r)?(t="",n!=null&&(t=n.replace(Xf,"$&/")+"/"),Ka(r,e,t,"",function(u){return u})):r!=null&&(Dh(r)&&(r=c_(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Xf,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Wf(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+gu(s,a);o+=Ka(s,e,t,l,r)}else if(l=u_(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+gu(s,a++),o+=Ka(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function aa(n,e,t){if(n==null)return n;var i=[],r=0;return Ka(n,i,"","",function(s){return e.call(t,s,r++)}),i}function f_(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Zt={current:null},Qa={transition:null},d_={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:Qa,ReactCurrentOwner:Lh};function Km(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:aa,forEach:function(n,e,t){aa(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return aa(n,function(){e++}),e},toArray:function(n){return aa(n,function(e){return e})||[]},only:function(n){if(!Dh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Xe.Component=Vs;Xe.Fragment=e_;Xe.Profiler=n_;Xe.PureComponent=bh;Xe.StrictMode=t_;Xe.Suspense=o_;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d_;Xe.act=Km;Xe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Wm({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Lh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)qm.call(e,l)&&!Ym.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Qo,type:n.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(n){return n={$$typeof:r_,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:i_,_context:n},n.Consumer=n};Xe.createElement=$m;Xe.createFactory=function(n){var e=$m.bind(null,n);return e.type=n,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(n){return{$$typeof:s_,render:n}};Xe.isValidElement=Dh;Xe.lazy=function(n){return{$$typeof:l_,_payload:{_status:-1,_result:n},_init:f_}};Xe.memo=function(n,e){return{$$typeof:a_,type:n,compare:e===void 0?null:e}};Xe.startTransition=function(n){var e=Qa.transition;Qa.transition={};try{n()}finally{Qa.transition=e}};Xe.unstable_act=Km;Xe.useCallback=function(n,e){return Zt.current.useCallback(n,e)};Xe.useContext=function(n){return Zt.current.useContext(n)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(n){return Zt.current.useDeferredValue(n)};Xe.useEffect=function(n,e){return Zt.current.useEffect(n,e)};Xe.useId=function(){return Zt.current.useId()};Xe.useImperativeHandle=function(n,e,t){return Zt.current.useImperativeHandle(n,e,t)};Xe.useInsertionEffect=function(n,e){return Zt.current.useInsertionEffect(n,e)};Xe.useLayoutEffect=function(n,e){return Zt.current.useLayoutEffect(n,e)};Xe.useMemo=function(n,e){return Zt.current.useMemo(n,e)};Xe.useReducer=function(n,e,t){return Zt.current.useReducer(n,e,t)};Xe.useRef=function(n){return Zt.current.useRef(n)};Xe.useState=function(n){return Zt.current.useState(n)};Xe.useSyncExternalStore=function(n,e,t){return Zt.current.useSyncExternalStore(n,e,t)};Xe.useTransition=function(){return Zt.current.useTransition()};Xe.version="18.3.1";Gm.exports=Xe;var qe=Gm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_=qe,m_=Symbol.for("react.element"),g_=Symbol.for("react.fragment"),v_=Object.prototype.hasOwnProperty,__=p_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x_={key:!0,ref:!0,__self:!0,__source:!0};function Qm(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)v_.call(e,i)&&!x_.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:m_,type:n,key:s,ref:o,props:r,_owner:__.current}}Xl.Fragment=g_;Xl.jsx=Qm;Xl.jsxs=Qm;Hm.exports=Xl;var $=Hm.exports,Zm={exports:{}},yn={},Jm={exports:{}},eg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(P,I){var H=P.length;P.push(I);e:for(;0<H;){var Y=H-1>>>1,K=P[Y];if(0<r(K,I))P[Y]=I,P[H]=K,H=Y;else break e}}function t(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var I=P[0],H=P.pop();if(H!==I){P[0]=H;e:for(var Y=0,K=P.length,O=K>>>1;Y<O;){var Q=2*(Y+1)-1,oe=P[Q],ge=Q+1,ve=P[ge];if(0>r(oe,H))ge<K&&0>r(ve,oe)?(P[Y]=ve,P[ge]=H,Y=ge):(P[Y]=oe,P[Q]=H,Y=Q);else if(ge<K&&0>r(ve,H))P[Y]=ve,P[ge]=H,Y=ge;else break e}}return I}function r(P,I){var H=P.sortIndex-I.sortIndex;return H!==0?H:P.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,f=null,d=3,p=!1,_=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var I=t(u);I!==null;){if(I.callback===null)i(u);else if(I.startTime<=P)i(u),I.sortIndex=I.expirationTime,e(l,I);else break;I=t(u)}}function S(P){if(x=!1,g(P),!_)if(t(l)!==null)_=!0,N(R);else{var I=t(u);I!==null&&W(S,I.startTime-P)}}function R(P,I){_=!1,x&&(x=!1,c(L),L=-1),p=!0;var H=d;try{for(g(I),f=t(l);f!==null&&(!(f.expirationTime>I)||P&&!F());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,d=f.priorityLevel;var K=Y(f.expirationTime<=I);I=n.unstable_now(),typeof K=="function"?f.callback=K:f===t(l)&&i(l),g(I)}else i(l);f=t(l)}if(f!==null)var O=!0;else{var Q=t(u);Q!==null&&W(S,Q.startTime-I),O=!1}return O}finally{f=null,d=H,p=!1}}var A=!1,T=null,L=-1,y=5,E=-1;function F(){return!(n.unstable_now()-E<y)}function z(){if(T!==null){var P=n.unstable_now();E=P;var I=!0;try{I=T(!0,P)}finally{I?Z():(A=!1,T=null)}}else A=!1}var Z;if(typeof v=="function")Z=function(){v(z)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,b=D.port2;D.port1.onmessage=z,Z=function(){b.postMessage(null)}}else Z=function(){m(z,0)};function N(P){T=P,A||(A=!0,Z())}function W(P,I){L=m(function(){P(n.unstable_now())},I)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(P){P.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,N(R))},n.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<P?Math.floor(1e3/P):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(P){switch(d){case 1:case 2:case 3:var I=3;break;default:I=d}var H=d;d=I;try{return P()}finally{d=H}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(P,I){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var H=d;d=P;try{return I()}finally{d=H}},n.unstable_scheduleCallback=function(P,I,H){var Y=n.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?Y+H:Y):H=Y,P){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=H+K,P={id:h++,callback:I,priorityLevel:P,startTime:H,expirationTime:K,sortIndex:-1},H>Y?(P.sortIndex=H,e(u,P),t(l)===null&&P===t(u)&&(x?(c(L),L=-1):x=!0,W(S,H-Y))):(P.sortIndex=K,e(l,P),_||p||(_=!0,N(R))),P},n.unstable_shouldYield=F,n.unstable_wrapCallback=function(P){var I=d;return function(){var H=d;d=I;try{return P.apply(this,arguments)}finally{d=H}}}})(eg);Jm.exports=eg;var y_=Jm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_=qe,xn=y_;function ne(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tg=new Set,Po={};function kr(n,e){Ls(n,e),Ls(n+"Capture",e)}function Ls(n,e){for(Po[n]=e,n=0;n<e.length;n++)tg.add(e[n])}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tc=Object.prototype.hasOwnProperty,M_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jf={},qf={};function E_(n){return Tc.call(qf,n)?!0:Tc.call(jf,n)?!1:M_.test(n)?qf[n]=!0:(jf[n]=!0,!1)}function T_(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w_(n,e,t,i){if(e===null||typeof e>"u"||T_(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){kt[n]=new Jt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];kt[e]=new Jt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){kt[n]=new Jt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){kt[n]=new Jt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){kt[n]=new Jt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){kt[n]=new Jt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){kt[n]=new Jt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){kt[n]=new Jt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){kt[n]=new Jt(n,5,!1,n.toLowerCase(),null,!1,!1)});var Uh=/[\-:]([a-z])/g;function Nh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Uh,Nh);kt[e]=new Jt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Uh,Nh);kt[e]=new Jt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Uh,Nh);kt[e]=new Jt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){kt[n]=new Jt(n,1,!1,n.toLowerCase(),null,!1,!1)});kt.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){kt[n]=new Jt(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ih(n,e,t,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(w_(e,t,r,i)&&(t=null),i||r===null?E_(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Ui=S_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,la=Symbol.for("react.element"),os=Symbol.for("react.portal"),as=Symbol.for("react.fragment"),Fh=Symbol.for("react.strict_mode"),wc=Symbol.for("react.profiler"),ng=Symbol.for("react.provider"),ig=Symbol.for("react.context"),Oh=Symbol.for("react.forward_ref"),Ac=Symbol.for("react.suspense"),Cc=Symbol.for("react.suspense_list"),kh=Symbol.for("react.memo"),Bi=Symbol.for("react.lazy"),rg=Symbol.for("react.offscreen"),Yf=Symbol.iterator;function Qs(n){return n===null||typeof n!="object"?null:(n=Yf&&n[Yf]||n["@@iterator"],typeof n=="function"?n:null)}var mt=Object.assign,vu;function po(n){if(vu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);vu=e&&e[1]||""}return`
`+vu+n}var _u=!1;function xu(n,e){if(!n||_u)return"";_u=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{_u=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?po(n):""}function A_(n){switch(n.tag){case 5:return po(n.type);case 16:return po("Lazy");case 13:return po("Suspense");case 19:return po("SuspenseList");case 0:case 2:case 15:return n=xu(n.type,!1),n;case 11:return n=xu(n.type.render,!1),n;case 1:return n=xu(n.type,!0),n;default:return""}}function Rc(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case as:return"Fragment";case os:return"Portal";case wc:return"Profiler";case Fh:return"StrictMode";case Ac:return"Suspense";case Cc:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case ig:return(n.displayName||"Context")+".Consumer";case ng:return(n._context.displayName||"Context")+".Provider";case Oh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case kh:return e=n.displayName||null,e!==null?e:Rc(n.type)||"Memo";case Bi:e=n._payload,n=n._init;try{return Rc(n(e))}catch{}}return null}function C_(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rc(e);case 8:return e===Fh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function sg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function R_(n){var e=sg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ua(n){n._valueTracker||(n._valueTracker=R_(n))}function og(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=sg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function dl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function bc(n,e){var t=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function $f(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=rr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ag(n,e){e=e.checked,e!=null&&Ih(n,"checked",e,!1)}function Pc(n,e){ag(n,e);var t=rr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Lc(n,e.type,t):e.hasOwnProperty("defaultValue")&&Lc(n,e.type,rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Kf(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Lc(n,e,t){(e!=="number"||dl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var mo=Array.isArray;function Ms(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+rr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Dc(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Qf(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ne(92));if(mo(t)){if(1<t.length)throw Error(ne(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:rr(t)}}function lg(n,e){var t=rr(e.value),i=rr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Zf(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function ug(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uc(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?ug(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ca,cg=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ca=ca||document.createElement("div"),ca.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ca.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Lo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},b_=["Webkit","ms","Moz","O"];Object.keys(xo).forEach(function(n){b_.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),xo[e]=xo[n]})});function hg(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||xo.hasOwnProperty(n)&&xo[n]?(""+e).trim():e+"px"}function fg(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=hg(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var P_=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nc(n,e){if(e){if(P_[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Ic(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fc=null;function zh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Oc=null,Es=null,Ts=null;function Jf(n){if(n=ea(n)){if(typeof Oc!="function")throw Error(ne(280));var e=n.stateNode;e&&(e=Kl(e),Oc(n.stateNode,n.type,e))}}function dg(n){Es?Ts?Ts.push(n):Ts=[n]:Es=n}function pg(){if(Es){var n=Es,e=Ts;if(Ts=Es=null,Jf(n),e)for(n=0;n<e.length;n++)Jf(e[n])}}function mg(n,e){return n(e)}function gg(){}var yu=!1;function vg(n,e,t){if(yu)return n(e,t);yu=!0;try{return mg(n,e,t)}finally{yu=!1,(Es!==null||Ts!==null)&&(gg(),pg())}}function Do(n,e){var t=n.stateNode;if(t===null)return null;var i=Kl(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ne(231,e,typeof t));return t}var kc=!1;if(Ri)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){kc=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{kc=!1}function L_(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(h){this.onError(h)}}var yo=!1,pl=null,ml=!1,zc=null,D_={onError:function(n){yo=!0,pl=n}};function U_(n,e,t,i,r,s,o,a,l){yo=!1,pl=null,L_.apply(D_,arguments)}function N_(n,e,t,i,r,s,o,a,l){if(U_.apply(this,arguments),yo){if(yo){var u=pl;yo=!1,pl=null}else throw Error(ne(198));ml||(ml=!0,zc=u)}}function zr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function _g(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function ed(n){if(zr(n)!==n)throw Error(ne(188))}function I_(n){var e=n.alternate;if(!e){if(e=zr(n),e===null)throw Error(ne(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return ed(r),n;if(s===i)return ed(r),e;s=s.sibling}throw Error(ne(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(t.alternate!==i)throw Error(ne(190))}if(t.tag!==3)throw Error(ne(188));return t.stateNode.current===t?n:e}function xg(n){return n=I_(n),n!==null?yg(n):null}function yg(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=yg(n);if(e!==null)return e;n=n.sibling}return null}var Sg=xn.unstable_scheduleCallback,td=xn.unstable_cancelCallback,F_=xn.unstable_shouldYield,O_=xn.unstable_requestPaint,St=xn.unstable_now,k_=xn.unstable_getCurrentPriorityLevel,Bh=xn.unstable_ImmediatePriority,Mg=xn.unstable_UserBlockingPriority,gl=xn.unstable_NormalPriority,z_=xn.unstable_LowPriority,Eg=xn.unstable_IdlePriority,jl=null,li=null;function B_(n){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(jl,n,void 0,(n.current.flags&128)===128)}catch{}}var Zn=Math.clz32?Math.clz32:V_,H_=Math.log,G_=Math.LN2;function V_(n){return n>>>=0,n===0?32:31-(H_(n)/G_|0)|0}var ha=64,fa=4194304;function go(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function vl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=go(a):(s&=o,s!==0&&(i=go(s)))}else o=t&~r,o!==0?i=go(o):s!==0&&(i=go(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Zn(e),r=1<<t,i|=n[t],e&=~r;return i}function W_(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X_(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Zn(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=W_(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Bc(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Tg(){var n=ha;return ha<<=1,!(ha&4194240)&&(ha=64),n}function Su(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Zo(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Zn(e),n[e]=t}function j_(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Zn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Hh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Zn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var tt=0;function wg(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ag,Gh,Cg,Rg,bg,Hc=!1,da=[],Yi=null,$i=null,Ki=null,Uo=new Map,No=new Map,Gi=[],q_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nd(n,e){switch(n){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":Uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(e.pointerId)}}function Js(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ea(e),e!==null&&Gh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Y_(n,e,t,i,r){switch(e){case"focusin":return Yi=Js(Yi,n,e,t,i,r),!0;case"dragenter":return $i=Js($i,n,e,t,i,r),!0;case"mouseover":return Ki=Js(Ki,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Uo.set(s,Js(Uo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,No.set(s,Js(No.get(s)||null,n,e,t,i,r)),!0}return!1}function Pg(n){var e=Tr(n.target);if(e!==null){var t=zr(e);if(t!==null){if(e=t.tag,e===13){if(e=_g(t),e!==null){n.blockedOn=e,bg(n.priority,function(){Cg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Za(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Gc(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Fc=i,t.target.dispatchEvent(i),Fc=null}else return e=ea(t),e!==null&&Gh(e),n.blockedOn=t,!1;e.shift()}return!0}function id(n,e,t){Za(n)&&t.delete(e)}function $_(){Hc=!1,Yi!==null&&Za(Yi)&&(Yi=null),$i!==null&&Za($i)&&($i=null),Ki!==null&&Za(Ki)&&(Ki=null),Uo.forEach(id),No.forEach(id)}function eo(n,e){n.blockedOn===e&&(n.blockedOn=null,Hc||(Hc=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,$_)))}function Io(n){function e(r){return eo(r,n)}if(0<da.length){eo(da[0],n);for(var t=1;t<da.length;t++){var i=da[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Yi!==null&&eo(Yi,n),$i!==null&&eo($i,n),Ki!==null&&eo(Ki,n),Uo.forEach(e),No.forEach(e),t=0;t<Gi.length;t++)i=Gi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Gi.length&&(t=Gi[0],t.blockedOn===null);)Pg(t),t.blockedOn===null&&Gi.shift()}var ws=Ui.ReactCurrentBatchConfig,_l=!0;function K_(n,e,t,i){var r=tt,s=ws.transition;ws.transition=null;try{tt=1,Vh(n,e,t,i)}finally{tt=r,ws.transition=s}}function Q_(n,e,t,i){var r=tt,s=ws.transition;ws.transition=null;try{tt=4,Vh(n,e,t,i)}finally{tt=r,ws.transition=s}}function Vh(n,e,t,i){if(_l){var r=Gc(n,e,t,i);if(r===null)Lu(n,e,i,xl,t),nd(n,i);else if(Y_(r,n,e,t,i))i.stopPropagation();else if(nd(n,i),e&4&&-1<q_.indexOf(n)){for(;r!==null;){var s=ea(r);if(s!==null&&Ag(s),s=Gc(n,e,t,i),s===null&&Lu(n,e,i,xl,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Lu(n,e,i,null,t)}}var xl=null;function Gc(n,e,t,i){if(xl=null,n=zh(i),n=Tr(n),n!==null)if(e=zr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=_g(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return xl=n,null}function Lg(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(k_()){case Bh:return 1;case Mg:return 4;case gl:case z_:return 16;case Eg:return 536870912;default:return 16}default:return 16}}var Wi=null,Wh=null,Ja=null;function Dg(){if(Ja)return Ja;var n,e=Wh,t=e.length,i,r="value"in Wi?Wi.value:Wi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Ja=r.slice(n,1<i?1-i:void 0)}function el(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function pa(){return!0}function rd(){return!1}function Sn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pa:rd,this.isPropagationStopped=rd,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=pa)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=pa)},persist:function(){},isPersistent:pa}),e}var Ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xh=Sn(Ws),Jo=mt({},Ws,{view:0,detail:0}),Z_=Sn(Jo),Mu,Eu,to,ql=mt({},Jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==to&&(to&&n.type==="mousemove"?(Mu=n.screenX-to.screenX,Eu=n.screenY-to.screenY):Eu=Mu=0,to=n),Mu)},movementY:function(n){return"movementY"in n?n.movementY:Eu}}),sd=Sn(ql),J_=mt({},ql,{dataTransfer:0}),ex=Sn(J_),tx=mt({},Jo,{relatedTarget:0}),Tu=Sn(tx),nx=mt({},Ws,{animationName:0,elapsedTime:0,pseudoElement:0}),ix=Sn(nx),rx=mt({},Ws,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),sx=Sn(rx),ox=mt({},Ws,{data:0}),od=Sn(ox),ax={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cx(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=ux[n])?!!e[n]:!1}function jh(){return cx}var hx=mt({},Jo,{key:function(n){if(n.key){var e=ax[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=el(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?lx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jh,charCode:function(n){return n.type==="keypress"?el(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?el(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),fx=Sn(hx),dx=mt({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ad=Sn(dx),px=mt({},Jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jh}),mx=Sn(px),gx=mt({},Ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),vx=Sn(gx),_x=mt({},ql,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xx=Sn(_x),yx=[9,13,27,32],qh=Ri&&"CompositionEvent"in window,So=null;Ri&&"documentMode"in document&&(So=document.documentMode);var Sx=Ri&&"TextEvent"in window&&!So,Ug=Ri&&(!qh||So&&8<So&&11>=So),ld=" ",ud=!1;function Ng(n,e){switch(n){case"keyup":return yx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ig(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ls=!1;function Mx(n,e){switch(n){case"compositionend":return Ig(e);case"keypress":return e.which!==32?null:(ud=!0,ld);case"textInput":return n=e.data,n===ld&&ud?null:n;default:return null}}function Ex(n,e){if(ls)return n==="compositionend"||!qh&&Ng(n,e)?(n=Dg(),Ja=Wh=Wi=null,ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ug&&e.locale!=="ko"?null:e.data;default:return null}}var Tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Tx[n.type]:e==="textarea"}function Fg(n,e,t,i){dg(i),e=yl(e,"onChange"),0<e.length&&(t=new Xh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Mo=null,Fo=null;function wx(n){qg(n,0)}function Yl(n){var e=hs(n);if(og(e))return n}function Ax(n,e){if(n==="change")return e}var Og=!1;if(Ri){var wu;if(Ri){var Au="oninput"in document;if(!Au){var hd=document.createElement("div");hd.setAttribute("oninput","return;"),Au=typeof hd.oninput=="function"}wu=Au}else wu=!1;Og=wu&&(!document.documentMode||9<document.documentMode)}function fd(){Mo&&(Mo.detachEvent("onpropertychange",kg),Fo=Mo=null)}function kg(n){if(n.propertyName==="value"&&Yl(Fo)){var e=[];Fg(e,Fo,n,zh(n)),vg(wx,e)}}function Cx(n,e,t){n==="focusin"?(fd(),Mo=e,Fo=t,Mo.attachEvent("onpropertychange",kg)):n==="focusout"&&fd()}function Rx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Yl(Fo)}function bx(n,e){if(n==="click")return Yl(e)}function Px(n,e){if(n==="input"||n==="change")return Yl(e)}function Lx(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ei=typeof Object.is=="function"?Object.is:Lx;function Oo(n,e){if(ei(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Tc.call(e,r)||!ei(n[r],e[r]))return!1}return!0}function dd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function pd(n,e){var t=dd(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=dd(t)}}function zg(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?zg(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Bg(){for(var n=window,e=dl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=dl(n.document)}return e}function Yh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Dx(n){var e=Bg(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&zg(t.ownerDocument.documentElement,t)){if(i!==null&&Yh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=pd(t,s);var o=pd(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Ux=Ri&&"documentMode"in document&&11>=document.documentMode,us=null,Vc=null,Eo=null,Wc=!1;function md(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Wc||us==null||us!==dl(i)||(i=us,"selectionStart"in i&&Yh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Eo&&Oo(Eo,i)||(Eo=i,i=yl(Vc,"onSelect"),0<i.length&&(e=new Xh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=us)))}function ma(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var cs={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionend:ma("Transition","TransitionEnd")},Cu={},Hg={};Ri&&(Hg=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function $l(n){if(Cu[n])return Cu[n];if(!cs[n])return n;var e=cs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Hg)return Cu[n]=e[t];return n}var Gg=$l("animationend"),Vg=$l("animationiteration"),Wg=$l("animationstart"),Xg=$l("transitionend"),jg=new Map,gd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(n,e){jg.set(n,e),kr(e,[n])}for(var Ru=0;Ru<gd.length;Ru++){var bu=gd[Ru],Nx=bu.toLowerCase(),Ix=bu[0].toUpperCase()+bu.slice(1);ar(Nx,"on"+Ix)}ar(Gg,"onAnimationEnd");ar(Vg,"onAnimationIteration");ar(Wg,"onAnimationStart");ar("dblclick","onDoubleClick");ar("focusin","onFocus");ar("focusout","onBlur");ar(Xg,"onTransitionEnd");Ls("onMouseEnter",["mouseout","mouseover"]);Ls("onMouseLeave",["mouseout","mouseover"]);Ls("onPointerEnter",["pointerout","pointerover"]);Ls("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fx=new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));function vd(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,N_(i,e,void 0,n),n.currentTarget=null}function qg(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;vd(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;vd(r,a,u),s=l}}}if(ml)throw n=zc,ml=!1,zc=null,n}function at(n,e){var t=e[$c];t===void 0&&(t=e[$c]=new Set);var i=n+"__bubble";t.has(i)||(Yg(e,n,2,!1),t.add(i))}function Pu(n,e,t){var i=0;e&&(i|=4),Yg(t,n,i,e)}var ga="_reactListening"+Math.random().toString(36).slice(2);function ko(n){if(!n[ga]){n[ga]=!0,tg.forEach(function(t){t!=="selectionchange"&&(Fx.has(t)||Pu(t,!1,n),Pu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ga]||(e[ga]=!0,Pu("selectionchange",!1,e))}}function Yg(n,e,t,i){switch(Lg(e)){case 1:var r=K_;break;case 4:r=Q_;break;default:r=Vh}t=r.bind(null,e,t,n),r=void 0,!kc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Lu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Tr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}vg(function(){var u=s,h=zh(t),f=[];e:{var d=jg.get(n);if(d!==void 0){var p=Xh,_=n;switch(n){case"keypress":if(el(t)===0)break e;case"keydown":case"keyup":p=fx;break;case"focusin":_="focus",p=Tu;break;case"focusout":_="blur",p=Tu;break;case"beforeblur":case"afterblur":p=Tu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=sd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=mx;break;case Gg:case Vg:case Wg:p=ix;break;case Xg:p=vx;break;case"scroll":p=Z_;break;case"wheel":p=xx;break;case"copy":case"cut":case"paste":p=sx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ad}var x=(e&4)!==0,m=!x&&n==="scroll",c=x?d!==null?d+"Capture":null:d;x=[];for(var v=u,g;v!==null;){g=v;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,c!==null&&(S=Do(v,c),S!=null&&x.push(zo(v,S,g)))),m)break;v=v.return}0<x.length&&(d=new p(d,_,null,t,h),f.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==Fc&&(_=t.relatedTarget||t.fromElement)&&(Tr(_)||_[bi]))break e;if((p||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?Tr(_):null,_!==null&&(m=zr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(x=sd,S="onMouseLeave",c="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(x=ad,S="onPointerLeave",c="onPointerEnter",v="pointer"),m=p==null?d:hs(p),g=_==null?d:hs(_),d=new x(S,v+"leave",p,t,h),d.target=m,d.relatedTarget=g,S=null,Tr(h)===u&&(x=new x(c,v+"enter",_,t,h),x.target=g,x.relatedTarget=m,S=x),m=S,p&&_)t:{for(x=p,c=_,v=0,g=x;g;g=Gr(g))v++;for(g=0,S=c;S;S=Gr(S))g++;for(;0<v-g;)x=Gr(x),v--;for(;0<g-v;)c=Gr(c),g--;for(;v--;){if(x===c||c!==null&&x===c.alternate)break t;x=Gr(x),c=Gr(c)}x=null}else x=null;p!==null&&_d(f,d,p,x,!1),_!==null&&m!==null&&_d(f,m,_,x,!0)}}e:{if(d=u?hs(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var R=Ax;else if(cd(d))if(Og)R=Px;else{R=Rx;var A=Cx}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=bx);if(R&&(R=R(n,u))){Fg(f,R,t,h);break e}A&&A(n,d,u),n==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Lc(d,"number",d.value)}switch(A=u?hs(u):window,n){case"focusin":(cd(A)||A.contentEditable==="true")&&(us=A,Vc=u,Eo=null);break;case"focusout":Eo=Vc=us=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,md(f,t,h);break;case"selectionchange":if(Ux)break;case"keydown":case"keyup":md(f,t,h)}var T;if(qh)e:{switch(n){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else ls?Ng(n,t)&&(L="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(L="onCompositionStart");L&&(Ug&&t.locale!=="ko"&&(ls||L!=="onCompositionStart"?L==="onCompositionEnd"&&ls&&(T=Dg()):(Wi=h,Wh="value"in Wi?Wi.value:Wi.textContent,ls=!0)),A=yl(u,L),0<A.length&&(L=new od(L,n,null,t,h),f.push({event:L,listeners:A}),T?L.data=T:(T=Ig(t),T!==null&&(L.data=T)))),(T=Sx?Mx(n,t):Ex(n,t))&&(u=yl(u,"onBeforeInput"),0<u.length&&(h=new od("onBeforeInput","beforeinput",null,t,h),f.push({event:h,listeners:u}),h.data=T))}qg(f,e)})}function zo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function yl(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Do(n,t),s!=null&&i.unshift(zo(n,s,r)),s=Do(n,e),s!=null&&i.push(zo(n,s,r))),n=n.return}return i}function Gr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function _d(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Do(t,s),l!=null&&o.unshift(zo(t,l,a))):r||(l=Do(t,s),l!=null&&o.push(zo(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Ox=/\r\n?/g,kx=/\u0000|\uFFFD/g;function xd(n){return(typeof n=="string"?n:""+n).replace(Ox,`
`).replace(kx,"")}function va(n,e,t){if(e=xd(e),xd(n)!==e&&t)throw Error(ne(425))}function Sl(){}var Xc=null,jc=null;function qc(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yc=typeof setTimeout=="function"?setTimeout:void 0,zx=typeof clearTimeout=="function"?clearTimeout:void 0,yd=typeof Promise=="function"?Promise:void 0,Bx=typeof queueMicrotask=="function"?queueMicrotask:typeof yd<"u"?function(n){return yd.resolve(null).then(n).catch(Hx)}:Yc;function Hx(n){setTimeout(function(){throw n})}function Du(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Io(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Io(e)}function Qi(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Sd(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Xs=Math.random().toString(36).slice(2),oi="__reactFiber$"+Xs,Bo="__reactProps$"+Xs,bi="__reactContainer$"+Xs,$c="__reactEvents$"+Xs,Gx="__reactListeners$"+Xs,Vx="__reactHandles$"+Xs;function Tr(n){var e=n[oi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[bi]||t[oi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Sd(n);n!==null;){if(t=n[oi])return t;n=Sd(n)}return e}n=t,t=n.parentNode}return null}function ea(n){return n=n[oi]||n[bi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function hs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ne(33))}function Kl(n){return n[Bo]||null}var Kc=[],fs=-1;function lr(n){return{current:n}}function lt(n){0>fs||(n.current=Kc[fs],Kc[fs]=null,fs--)}function ot(n,e){fs++,Kc[fs]=n.current,n.current=e}var sr={},Xt=lr(sr),ln=lr(!1),Ur=sr;function Ds(n,e){var t=n.type.contextTypes;if(!t)return sr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function un(n){return n=n.childContextTypes,n!=null}function Ml(){lt(ln),lt(Xt)}function Md(n,e,t){if(Xt.current!==sr)throw Error(ne(168));ot(Xt,e),ot(ln,t)}function $g(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,C_(n)||"Unknown",r));return mt({},t,i)}function El(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||sr,Ur=Xt.current,ot(Xt,n),ot(ln,ln.current),!0}function Ed(n,e,t){var i=n.stateNode;if(!i)throw Error(ne(169));t?(n=$g(n,e,Ur),i.__reactInternalMemoizedMergedChildContext=n,lt(ln),lt(Xt),ot(Xt,n)):lt(ln),ot(ln,t)}var yi=null,Ql=!1,Uu=!1;function Kg(n){yi===null?yi=[n]:yi.push(n)}function Wx(n){Ql=!0,Kg(n)}function ur(){if(!Uu&&yi!==null){Uu=!0;var n=0,e=tt;try{var t=yi;for(tt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}yi=null,Ql=!1}catch(r){throw yi!==null&&(yi=yi.slice(n+1)),Sg(Bh,ur),r}finally{tt=e,Uu=!1}}return null}var ds=[],ps=0,Tl=null,wl=0,bn=[],Pn=0,Nr=null,Si=1,Mi="";function _r(n,e){ds[ps++]=wl,ds[ps++]=Tl,Tl=n,wl=e}function Qg(n,e,t){bn[Pn++]=Si,bn[Pn++]=Mi,bn[Pn++]=Nr,Nr=n;var i=Si;n=Mi;var r=32-Zn(i)-1;i&=~(1<<r),t+=1;var s=32-Zn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Si=1<<32-Zn(e)+r|t<<r|i,Mi=s+n}else Si=1<<s|t<<r|i,Mi=n}function $h(n){n.return!==null&&(_r(n,1),Qg(n,1,0))}function Kh(n){for(;n===Tl;)Tl=ds[--ps],ds[ps]=null,wl=ds[--ps],ds[ps]=null;for(;n===Nr;)Nr=bn[--Pn],bn[Pn]=null,Mi=bn[--Pn],bn[Pn]=null,Si=bn[--Pn],bn[Pn]=null}var _n=null,vn=null,ut=!1,Yn=null;function Zg(n,e){var t=In(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Td(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,_n=n,vn=Qi(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,_n=n,vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Nr!==null?{id:Si,overflow:Mi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=In(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,_n=n,vn=null,!0):!1;default:return!1}}function Qc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Zc(n){if(ut){var e=vn;if(e){var t=e;if(!Td(n,e)){if(Qc(n))throw Error(ne(418));e=Qi(t.nextSibling);var i=_n;e&&Td(n,e)?Zg(i,t):(n.flags=n.flags&-4097|2,ut=!1,_n=n)}}else{if(Qc(n))throw Error(ne(418));n.flags=n.flags&-4097|2,ut=!1,_n=n}}}function wd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;_n=n}function _a(n){if(n!==_n)return!1;if(!ut)return wd(n),ut=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!qc(n.type,n.memoizedProps)),e&&(e=vn)){if(Qc(n))throw Jg(),Error(ne(418));for(;e;)Zg(n,e),e=Qi(e.nextSibling)}if(wd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ne(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){vn=Qi(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}vn=null}}else vn=_n?Qi(n.stateNode.nextSibling):null;return!0}function Jg(){for(var n=vn;n;)n=Qi(n.nextSibling)}function Us(){vn=_n=null,ut=!1}function Qh(n){Yn===null?Yn=[n]:Yn.push(n)}var Xx=Ui.ReactCurrentBatchConfig;function no(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ne(309));var i=t.stateNode}if(!i)throw Error(ne(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ne(284));if(!t._owner)throw Error(ne(290,n))}return n}function xa(n,e){throw n=Object.prototype.toString.call(e),Error(ne(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Ad(n){var e=n._init;return e(n._payload)}function e0(n){function e(c,v){if(n){var g=c.deletions;g===null?(c.deletions=[v],c.flags|=16):g.push(v)}}function t(c,v){if(!n)return null;for(;v!==null;)e(c,v),v=v.sibling;return null}function i(c,v){for(c=new Map;v!==null;)v.key!==null?c.set(v.key,v):c.set(v.index,v),v=v.sibling;return c}function r(c,v){return c=tr(c,v),c.index=0,c.sibling=null,c}function s(c,v,g){return c.index=g,n?(g=c.alternate,g!==null?(g=g.index,g<v?(c.flags|=2,v):g):(c.flags|=2,v)):(c.flags|=1048576,v)}function o(c){return n&&c.alternate===null&&(c.flags|=2),c}function a(c,v,g,S){return v===null||v.tag!==6?(v=Bu(g,c.mode,S),v.return=c,v):(v=r(v,g),v.return=c,v)}function l(c,v,g,S){var R=g.type;return R===as?h(c,v,g.props.children,S,g.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Bi&&Ad(R)===v.type)?(S=r(v,g.props),S.ref=no(c,v,g),S.return=c,S):(S=al(g.type,g.key,g.props,null,c.mode,S),S.ref=no(c,v,g),S.return=c,S)}function u(c,v,g,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Hu(g,c.mode,S),v.return=c,v):(v=r(v,g.children||[]),v.return=c,v)}function h(c,v,g,S,R){return v===null||v.tag!==7?(v=Rr(g,c.mode,S,R),v.return=c,v):(v=r(v,g),v.return=c,v)}function f(c,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Bu(""+v,c.mode,g),v.return=c,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case la:return g=al(v.type,v.key,v.props,null,c.mode,g),g.ref=no(c,null,v),g.return=c,g;case os:return v=Hu(v,c.mode,g),v.return=c,v;case Bi:var S=v._init;return f(c,S(v._payload),g)}if(mo(v)||Qs(v))return v=Rr(v,c.mode,g,null),v.return=c,v;xa(c,v)}return null}function d(c,v,g,S){var R=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return R!==null?null:a(c,v,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case la:return g.key===R?l(c,v,g,S):null;case os:return g.key===R?u(c,v,g,S):null;case Bi:return R=g._init,d(c,v,R(g._payload),S)}if(mo(g)||Qs(g))return R!==null?null:h(c,v,g,S,null);xa(c,g)}return null}function p(c,v,g,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return c=c.get(g)||null,a(v,c,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case la:return c=c.get(S.key===null?g:S.key)||null,l(v,c,S,R);case os:return c=c.get(S.key===null?g:S.key)||null,u(v,c,S,R);case Bi:var A=S._init;return p(c,v,g,A(S._payload),R)}if(mo(S)||Qs(S))return c=c.get(g)||null,h(v,c,S,R,null);xa(v,S)}return null}function _(c,v,g,S){for(var R=null,A=null,T=v,L=v=0,y=null;T!==null&&L<g.length;L++){T.index>L?(y=T,T=null):y=T.sibling;var E=d(c,T,g[L],S);if(E===null){T===null&&(T=y);break}n&&T&&E.alternate===null&&e(c,T),v=s(E,v,L),A===null?R=E:A.sibling=E,A=E,T=y}if(L===g.length)return t(c,T),ut&&_r(c,L),R;if(T===null){for(;L<g.length;L++)T=f(c,g[L],S),T!==null&&(v=s(T,v,L),A===null?R=T:A.sibling=T,A=T);return ut&&_r(c,L),R}for(T=i(c,T);L<g.length;L++)y=p(T,c,L,g[L],S),y!==null&&(n&&y.alternate!==null&&T.delete(y.key===null?L:y.key),v=s(y,v,L),A===null?R=y:A.sibling=y,A=y);return n&&T.forEach(function(F){return e(c,F)}),ut&&_r(c,L),R}function x(c,v,g,S){var R=Qs(g);if(typeof R!="function")throw Error(ne(150));if(g=R.call(g),g==null)throw Error(ne(151));for(var A=R=null,T=v,L=v=0,y=null,E=g.next();T!==null&&!E.done;L++,E=g.next()){T.index>L?(y=T,T=null):y=T.sibling;var F=d(c,T,E.value,S);if(F===null){T===null&&(T=y);break}n&&T&&F.alternate===null&&e(c,T),v=s(F,v,L),A===null?R=F:A.sibling=F,A=F,T=y}if(E.done)return t(c,T),ut&&_r(c,L),R;if(T===null){for(;!E.done;L++,E=g.next())E=f(c,E.value,S),E!==null&&(v=s(E,v,L),A===null?R=E:A.sibling=E,A=E);return ut&&_r(c,L),R}for(T=i(c,T);!E.done;L++,E=g.next())E=p(T,c,L,E.value,S),E!==null&&(n&&E.alternate!==null&&T.delete(E.key===null?L:E.key),v=s(E,v,L),A===null?R=E:A.sibling=E,A=E);return n&&T.forEach(function(z){return e(c,z)}),ut&&_r(c,L),R}function m(c,v,g,S){if(typeof g=="object"&&g!==null&&g.type===as&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case la:e:{for(var R=g.key,A=v;A!==null;){if(A.key===R){if(R=g.type,R===as){if(A.tag===7){t(c,A.sibling),v=r(A,g.props.children),v.return=c,c=v;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Bi&&Ad(R)===A.type){t(c,A.sibling),v=r(A,g.props),v.ref=no(c,A,g),v.return=c,c=v;break e}t(c,A);break}else e(c,A);A=A.sibling}g.type===as?(v=Rr(g.props.children,c.mode,S,g.key),v.return=c,c=v):(S=al(g.type,g.key,g.props,null,c.mode,S),S.ref=no(c,v,g),S.return=c,c=S)}return o(c);case os:e:{for(A=g.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){t(c,v.sibling),v=r(v,g.children||[]),v.return=c,c=v;break e}else{t(c,v);break}else e(c,v);v=v.sibling}v=Hu(g,c.mode,S),v.return=c,c=v}return o(c);case Bi:return A=g._init,m(c,v,A(g._payload),S)}if(mo(g))return _(c,v,g,S);if(Qs(g))return x(c,v,g,S);xa(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(t(c,v.sibling),v=r(v,g),v.return=c,c=v):(t(c,v),v=Bu(g,c.mode,S),v.return=c,c=v),o(c)):t(c,v)}return m}var Ns=e0(!0),t0=e0(!1),Al=lr(null),Cl=null,ms=null,Zh=null;function Jh(){Zh=ms=Cl=null}function ef(n){var e=Al.current;lt(Al),n._currentValue=e}function Jc(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function As(n,e){Cl=n,Zh=ms=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(on=!0),n.firstContext=null)}function zn(n){var e=n._currentValue;if(Zh!==n)if(n={context:n,memoizedValue:e,next:null},ms===null){if(Cl===null)throw Error(ne(308));ms=n,Cl.dependencies={lanes:0,firstContext:n}}else ms=ms.next=n;return e}var wr=null;function tf(n){wr===null?wr=[n]:wr.push(n)}function n0(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,tf(e)):(t.next=r.next,r.next=t),e.interleaved=t,Pi(n,i)}function Pi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Hi=!1;function nf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function wi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Zi(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Pi(n,t)}return r=i.interleaved,r===null?(e.next=e,tf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Pi(n,t)}function tl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Hh(n,t)}}function Cd(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Rl(n,e,t,i){var r=n.updateQueue;Hi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=n.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,h=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,x=a;switch(d=e,p=t,x.tag){case 1:if(_=x.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=mt({},f,d);break e;case 2:Hi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=p,l=f):h=h.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Fr|=o,n.lanes=o,n.memoizedState=f}}function Rd(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var ta={},ui=lr(ta),Ho=lr(ta),Go=lr(ta);function Ar(n){if(n===ta)throw Error(ne(174));return n}function rf(n,e){switch(ot(Go,e),ot(Ho,n),ot(ui,ta),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uc(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Uc(e,n)}lt(ui),ot(ui,e)}function Is(){lt(ui),lt(Ho),lt(Go)}function r0(n){Ar(Go.current);var e=Ar(ui.current),t=Uc(e,n.type);e!==t&&(ot(Ho,n),ot(ui,t))}function sf(n){Ho.current===n&&(lt(ui),lt(Ho))}var ft=lr(0);function bl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nu=[];function of(){for(var n=0;n<Nu.length;n++)Nu[n]._workInProgressVersionPrimary=null;Nu.length=0}var nl=Ui.ReactCurrentDispatcher,Iu=Ui.ReactCurrentBatchConfig,Ir=0,dt=null,Tt=null,Dt=null,Pl=!1,To=!1,Vo=0,jx=0;function Bt(){throw Error(ne(321))}function af(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ei(n[t],e[t]))return!1;return!0}function lf(n,e,t,i,r,s){if(Ir=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nl.current=n===null||n.memoizedState===null?Kx:Qx,n=t(i,r),To){s=0;do{if(To=!1,Vo=0,25<=s)throw Error(ne(301));s+=1,Dt=Tt=null,e.updateQueue=null,nl.current=Zx,n=t(i,r)}while(To)}if(nl.current=Ll,e=Tt!==null&&Tt.next!==null,Ir=0,Dt=Tt=dt=null,Pl=!1,e)throw Error(ne(300));return n}function uf(){var n=Vo!==0;return Vo=0,n}function ii(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?dt.memoizedState=Dt=n:Dt=Dt.next=n,Dt}function Bn(){if(Tt===null){var n=dt.alternate;n=n!==null?n.memoizedState:null}else n=Tt.next;var e=Dt===null?dt.memoizedState:Dt.next;if(e!==null)Dt=e,Tt=n;else{if(n===null)throw Error(ne(310));Tt=n,n={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Dt===null?dt.memoizedState=Dt=n:Dt=Dt.next=n}return Dt}function Wo(n,e){return typeof e=="function"?e(n):e}function Fu(n){var e=Bn(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=Tt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var h=u.lane;if((Ir&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,dt.lanes|=h,Fr|=h}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ei(i,e.memoizedState)||(on=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,dt.lanes|=s,Fr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Ou(n){var e=Bn(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ei(s,e.memoizedState)||(on=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function s0(){}function o0(n,e){var t=dt,i=Bn(),r=e(),s=!ei(i.memoizedState,r);if(s&&(i.memoizedState=r,on=!0),i=i.queue,cf(u0.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(t.flags|=2048,Xo(9,l0.bind(null,t,i,r,e),void 0,null),It===null)throw Error(ne(349));Ir&30||a0(t,e,r)}return r}function a0(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function l0(n,e,t,i){e.value=t,e.getSnapshot=i,c0(e)&&h0(n)}function u0(n,e,t){return t(function(){c0(e)&&h0(n)})}function c0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ei(n,t)}catch{return!0}}function h0(n){var e=Pi(n,1);e!==null&&Jn(e,n,1,-1)}function bd(n){var e=ii();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:n},e.queue=n,n=n.dispatch=$x.bind(null,dt,n),[e.memoizedState,n]}function Xo(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function f0(){return Bn().memoizedState}function il(n,e,t,i){var r=ii();dt.flags|=n,r.memoizedState=Xo(1|e,t,void 0,i===void 0?null:i)}function Zl(n,e,t,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(Tt!==null){var o=Tt.memoizedState;if(s=o.destroy,i!==null&&af(i,o.deps)){r.memoizedState=Xo(e,t,s,i);return}}dt.flags|=n,r.memoizedState=Xo(1|e,t,s,i)}function Pd(n,e){return il(8390656,8,n,e)}function cf(n,e){return Zl(2048,8,n,e)}function d0(n,e){return Zl(4,2,n,e)}function p0(n,e){return Zl(4,4,n,e)}function m0(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function g0(n,e,t){return t=t!=null?t.concat([n]):null,Zl(4,4,m0.bind(null,e,n),t)}function hf(){}function v0(n,e){var t=Bn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&af(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function _0(n,e){var t=Bn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&af(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function x0(n,e,t){return Ir&21?(ei(t,e)||(t=Tg(),dt.lanes|=t,Fr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,on=!0),n.memoizedState=t)}function qx(n,e){var t=tt;tt=t!==0&&4>t?t:4,n(!0);var i=Iu.transition;Iu.transition={};try{n(!1),e()}finally{tt=t,Iu.transition=i}}function y0(){return Bn().memoizedState}function Yx(n,e,t){var i=er(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},S0(n))M0(e,t);else if(t=n0(n,e,t,i),t!==null){var r=Qt();Jn(t,n,i,r),E0(t,e,i)}}function $x(n,e,t){var i=er(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(S0(n))M0(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ei(a,o)){var l=e.interleaved;l===null?(r.next=r,tf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=n0(n,e,r,i),t!==null&&(r=Qt(),Jn(t,n,i,r),E0(t,e,i))}}function S0(n){var e=n.alternate;return n===dt||e!==null&&e===dt}function M0(n,e){To=Pl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function E0(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Hh(n,t)}}var Ll={readContext:zn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},Kx={readContext:zn,useCallback:function(n,e){return ii().memoizedState=[n,e===void 0?null:e],n},useContext:zn,useEffect:Pd,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,il(4194308,4,m0.bind(null,e,n),t)},useLayoutEffect:function(n,e){return il(4194308,4,n,e)},useInsertionEffect:function(n,e){return il(4,2,n,e)},useMemo:function(n,e){var t=ii();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=ii();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Yx.bind(null,dt,n),[i.memoizedState,n]},useRef:function(n){var e=ii();return n={current:n},e.memoizedState=n},useState:bd,useDebugValue:hf,useDeferredValue:function(n){return ii().memoizedState=n},useTransition:function(){var n=bd(!1),e=n[0];return n=qx.bind(null,n[1]),ii().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=dt,r=ii();if(ut){if(t===void 0)throw Error(ne(407));t=t()}else{if(t=e(),It===null)throw Error(ne(349));Ir&30||a0(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Pd(u0.bind(null,i,s,n),[n]),i.flags|=2048,Xo(9,l0.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=ii(),e=It.identifierPrefix;if(ut){var t=Mi,i=Si;t=(i&~(1<<32-Zn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Vo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=jx++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Qx={readContext:zn,useCallback:v0,useContext:zn,useEffect:cf,useImperativeHandle:g0,useInsertionEffect:d0,useLayoutEffect:p0,useMemo:_0,useReducer:Fu,useRef:f0,useState:function(){return Fu(Wo)},useDebugValue:hf,useDeferredValue:function(n){var e=Bn();return x0(e,Tt.memoizedState,n)},useTransition:function(){var n=Fu(Wo)[0],e=Bn().memoizedState;return[n,e]},useMutableSource:s0,useSyncExternalStore:o0,useId:y0,unstable_isNewReconciler:!1},Zx={readContext:zn,useCallback:v0,useContext:zn,useEffect:cf,useImperativeHandle:g0,useInsertionEffect:d0,useLayoutEffect:p0,useMemo:_0,useReducer:Ou,useRef:f0,useState:function(){return Ou(Wo)},useDebugValue:hf,useDeferredValue:function(n){var e=Bn();return Tt===null?e.memoizedState=n:x0(e,Tt.memoizedState,n)},useTransition:function(){var n=Ou(Wo)[0],e=Bn().memoizedState;return[n,e]},useMutableSource:s0,useSyncExternalStore:o0,useId:y0,unstable_isNewReconciler:!1};function Xn(n,e){if(n&&n.defaultProps){e=mt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function eh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:mt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Jl={isMounted:function(n){return(n=n._reactInternals)?zr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Qt(),r=er(n),s=wi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Zi(n,s,r),e!==null&&(Jn(e,n,r,i),tl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Qt(),r=er(n),s=wi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Zi(n,s,r),e!==null&&(Jn(e,n,r,i),tl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Qt(),i=er(n),r=wi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Zi(n,r,i),e!==null&&(Jn(e,n,i,t),tl(e,n,i))}};function Ld(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Oo(t,i)||!Oo(r,s):!0}function T0(n,e,t){var i=!1,r=sr,s=e.contextType;return typeof s=="object"&&s!==null?s=zn(s):(r=un(e)?Ur:Xt.current,i=e.contextTypes,s=(i=i!=null)?Ds(n,r):sr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jl,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Dd(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Jl.enqueueReplaceState(e,e.state,null)}function th(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},nf(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=zn(s):(s=un(e)?Ur:Xt.current,r.context=Ds(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(eh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Jl.enqueueReplaceState(r,r.state,null),Rl(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Fs(n,e){try{var t="",i=e;do t+=A_(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function ku(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function nh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Jx=typeof WeakMap=="function"?WeakMap:Map;function w0(n,e,t){t=wi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Ul||(Ul=!0,fh=i),nh(n,e)},t}function A0(n,e,t){t=wi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){nh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){nh(n,e),typeof i!="function"&&(Ji===null?Ji=new Set([this]):Ji.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Ud(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new Jx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=dy.bind(null,n,e,t),e.then(n,n))}function Nd(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Id(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=wi(-1,1),e.tag=2,Zi(t,e,1))),t.lanes|=1),n)}var ey=Ui.ReactCurrentOwner,on=!1;function $t(n,e,t,i){e.child=n===null?t0(e,null,t,i):Ns(e,n.child,t,i)}function Fd(n,e,t,i,r){t=t.render;var s=e.ref;return As(e,r),i=lf(n,e,t,i,s,r),t=uf(),n!==null&&!on?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Li(n,e,r)):(ut&&t&&$h(e),e.flags|=1,$t(n,e,i,r),e.child)}function Od(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!xf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,C0(n,e,s,i,r)):(n=al(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Oo,t(o,i)&&n.ref===e.ref)return Li(n,e,r)}return e.flags|=1,n=tr(s,i),n.ref=e.ref,n.return=e,e.child=n}function C0(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Oo(s,i)&&n.ref===e.ref)if(on=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(on=!0);else return e.lanes=n.lanes,Li(n,e,r)}return ih(n,e,t,i,r)}function R0(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(vs,gn),gn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ot(vs,gn),gn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,ot(vs,gn),gn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,ot(vs,gn),gn|=i;return $t(n,e,r,t),e.child}function b0(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function ih(n,e,t,i,r){var s=un(t)?Ur:Xt.current;return s=Ds(e,s),As(e,r),t=lf(n,e,t,i,s,r),i=uf(),n!==null&&!on?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Li(n,e,r)):(ut&&i&&$h(e),e.flags|=1,$t(n,e,t,r),e.child)}function kd(n,e,t,i,r){if(un(t)){var s=!0;El(e)}else s=!1;if(As(e,r),e.stateNode===null)rl(n,e),T0(e,t,i),th(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=zn(u):(u=un(t)?Ur:Xt.current,u=Ds(e,u));var h=t.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Dd(e,o,i,u),Hi=!1;var d=e.memoizedState;o.state=d,Rl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||ln.current||Hi?(typeof h=="function"&&(eh(e,t,h,i),l=e.memoizedState),(a=Hi||Ld(e,t,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,i0(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Xn(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=un(t)?Ur:Xt.current,l=Ds(e,l));var p=t.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Dd(e,o,i,l),Hi=!1,d=e.memoizedState,o.state=d,Rl(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||ln.current||Hi?(typeof p=="function"&&(eh(e,t,p,i),_=e.memoizedState),(u=Hi||Ld(e,t,u,i,d,_,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return rh(n,e,t,i,s,r)}function rh(n,e,t,i,r,s){b0(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Ed(e,t,!1),Li(n,e,s);i=e.stateNode,ey.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ns(e,n.child,null,s),e.child=Ns(e,null,a,s)):$t(n,e,a,s),e.memoizedState=i.state,r&&Ed(e,t,!0),e.child}function P0(n){var e=n.stateNode;e.pendingContext?Md(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Md(n,e.context,!1),rf(n,e.containerInfo)}function zd(n,e,t,i,r){return Us(),Qh(r),e.flags|=256,$t(n,e,t,i),e.child}var sh={dehydrated:null,treeContext:null,retryLane:0};function oh(n){return{baseLanes:n,cachePool:null,transitions:null}}function L0(n,e,t){var i=e.pendingProps,r=ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),ot(ft,r&1),n===null)return Zc(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nu(o,i,0,null),n=Rr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=oh(t),e.memoizedState=sh,n):ff(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ty(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=tr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=tr(a,s):(s=Rr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?oh(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=sh,i}return s=n.child,n=s.sibling,i=tr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function ff(n,e){return e=nu({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function ya(n,e,t,i){return i!==null&&Qh(i),Ns(e,n.child,null,t),n=ff(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function ty(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=ku(Error(ne(422))),ya(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=nu({mode:"visible",children:i.children},r,0,null),s=Rr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ns(e,n.child,null,o),e.child.memoizedState=oh(o),e.memoizedState=sh,s);if(!(e.mode&1))return ya(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=ku(s,i,void 0),ya(n,e,o,i)}if(a=(o&n.childLanes)!==0,on||a){if(i=It,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Pi(n,r),Jn(i,n,r,-1))}return _f(),i=ku(Error(ne(421))),ya(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=py.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,vn=Qi(r.nextSibling),_n=e,ut=!0,Yn=null,n!==null&&(bn[Pn++]=Si,bn[Pn++]=Mi,bn[Pn++]=Nr,Si=n.id,Mi=n.overflow,Nr=e),e=ff(e,i.children),e.flags|=4096,e)}function Bd(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Jc(n.return,e,t)}function zu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function D0(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(n,e,i.children,t),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Bd(n,t,e);else if(n.tag===19)Bd(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ot(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&bl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),zu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&bl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}zu(e,!0,t,null,s);break;case"together":zu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function rl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Li(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Fr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ne(153));if(e.child!==null){for(n=e.child,t=tr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=tr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function ny(n,e,t){switch(e.tag){case 3:P0(e),Us();break;case 5:r0(e);break;case 1:un(e.type)&&El(e);break;case 4:rf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(Al,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(ft,ft.current&1),e.flags|=128,null):t&e.child.childLanes?L0(n,e,t):(ot(ft,ft.current&1),n=Li(n,e,t),n!==null?n.sibling:null);ot(ft,ft.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return D0(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,R0(n,e,t)}return Li(n,e,t)}var U0,ah,N0,I0;U0=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ah=function(){};N0=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Ar(ui.current);var s=null;switch(t){case"input":r=bc(n,r),i=bc(n,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=Dc(n,r),i=Dc(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Sl)}Nc(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Po.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Po.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&at("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};I0=function(n,e,t,i){t!==i&&(e.flags|=4)};function io(n,e){if(!ut)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Ht(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function iy(n,e,t){var i=e.pendingProps;switch(Kh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return un(e.type)&&Ml(),Ht(e),null;case 3:return i=e.stateNode,Is(),lt(ln),lt(Xt),of(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(_a(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(mh(Yn),Yn=null))),ah(n,e),Ht(e),null;case 5:sf(e);var r=Ar(Go.current);if(t=e.type,n!==null&&e.stateNode!=null)N0(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Ht(e),null}if(n=Ar(ui.current),_a(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[oi]=e,i[Bo]=s,n=(e.mode&1)!==0,t){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<vo.length;r++)at(vo[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":$f(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":Qf(i,s),at("invalid",i)}Nc(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&va(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&va(i.textContent,a,n),r=["children",""+a]):Po.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&at("scroll",i)}switch(t){case"input":ua(i),Kf(i,s,!0);break;case"textarea":ua(i),Zf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Sl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ug(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[oi]=e,n[Bo]=i,U0(n,e,!1,!1),e.stateNode=n;e:{switch(o=Ic(t,i),t){case"dialog":at("cancel",n),at("close",n),r=i;break;case"iframe":case"object":case"embed":at("load",n),r=i;break;case"video":case"audio":for(r=0;r<vo.length;r++)at(vo[r],n);r=i;break;case"source":at("error",n),r=i;break;case"img":case"image":case"link":at("error",n),at("load",n),r=i;break;case"details":at("toggle",n),r=i;break;case"input":$f(n,i),r=bc(n,i),at("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),at("invalid",n);break;case"textarea":Qf(n,i),r=Dc(n,i),at("invalid",n);break;default:r=i}Nc(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?fg(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&cg(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Lo(n,l):typeof l=="number"&&Lo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Po.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",n):l!=null&&Ih(n,s,l,o))}switch(t){case"input":ua(n),Kf(n,i,!1);break;case"textarea":ua(n),Zf(n);break;case"option":i.value!=null&&n.setAttribute("value",""+rr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ms(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ms(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Sl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ht(e),null;case 6:if(n&&e.stateNode!=null)I0(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(t=Ar(Go.current),Ar(ui.current),_a(e)){if(i=e.stateNode,t=e.memoizedProps,i[oi]=e,(s=i.nodeValue!==t)&&(n=_n,n!==null))switch(n.tag){case 3:va(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&va(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[oi]=e,e.stateNode=i}return Ht(e),null;case 13:if(lt(ft),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(ut&&vn!==null&&e.mode&1&&!(e.flags&128))Jg(),Us(),e.flags|=98560,s=!1;else if(s=_a(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[oi]=e}else Us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ht(e),s=!1}else Yn!==null&&(mh(Yn),Yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||ft.current&1?wt===0&&(wt=3):_f())),e.updateQueue!==null&&(e.flags|=4),Ht(e),null);case 4:return Is(),ah(n,e),n===null&&ko(e.stateNode.containerInfo),Ht(e),null;case 10:return ef(e.type._context),Ht(e),null;case 17:return un(e.type)&&Ml(),Ht(e),null;case 19:if(lt(ft),s=e.memoizedState,s===null)return Ht(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)io(s,!1);else{if(wt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=bl(n),o!==null){for(e.flags|=128,io(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ot(ft,ft.current&1|2),e.child}n=n.sibling}s.tail!==null&&St()>Os&&(e.flags|=128,i=!0,io(s,!1),e.lanes=4194304)}else{if(!i)if(n=bl(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ut)return Ht(e),null}else 2*St()-s.renderingStartTime>Os&&t!==1073741824&&(e.flags|=128,i=!0,io(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,t=ft.current,ot(ft,i?t&1|2:t&1),e):(Ht(e),null);case 22:case 23:return vf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?gn&1073741824&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function ry(n,e){switch(Kh(e),e.tag){case 1:return un(e.type)&&Ml(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Is(),lt(ln),lt(Xt),of(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return sf(e),null;case 13:if(lt(ft),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Us()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return lt(ft),null;case 4:return Is(),null;case 10:return ef(e.type._context),null;case 22:case 23:return vf(),null;case 24:return null;default:return null}}var Sa=!1,Wt=!1,sy=typeof WeakSet=="function"?WeakSet:Set,de=null;function gs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){_t(n,e,i)}else t.current=null}function lh(n,e,t){try{t()}catch(i){_t(n,e,i)}}var Hd=!1;function oy(n,e){if(Xc=_l,n=Bg(),Yh(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,h=0,f=n,d=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===n)break t;if(d===t&&++u===r&&(a=o),d===s&&++h===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(jc={focusedElem:n,selectionRange:t},_l=!1,de=e;de!==null;)if(e=de,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,de=n;else for(;de!==null;){e=de;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,m=_.memoizedState,c=e.stateNode,v=c.getSnapshotBeforeUpdate(e.elementType===e.type?x:Xn(e.type,x),m);c.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(S){_t(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}return _=Hd,Hd=!1,_}function wo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&lh(e,t,s)}r=r.next}while(r!==i)}}function eu(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function uh(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function F0(n){var e=n.alternate;e!==null&&(n.alternate=null,F0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[oi],delete e[Bo],delete e[$c],delete e[Gx],delete e[Vx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function O0(n){return n.tag===5||n.tag===3||n.tag===4}function Gd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||O0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ch(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Sl));else if(i!==4&&(n=n.child,n!==null))for(ch(n,e,t),n=n.sibling;n!==null;)ch(n,e,t),n=n.sibling}function hh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(hh(n,e,t),n=n.sibling;n!==null;)hh(n,e,t),n=n.sibling}var Ft=null,jn=!1;function Ni(n,e,t){for(t=t.child;t!==null;)k0(n,e,t),t=t.sibling}function k0(n,e,t){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(jl,t)}catch{}switch(t.tag){case 5:Wt||gs(t,e);case 6:var i=Ft,r=jn;Ft=null,Ni(n,e,t),Ft=i,jn=r,Ft!==null&&(jn?(n=Ft,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Ft.removeChild(t.stateNode));break;case 18:Ft!==null&&(jn?(n=Ft,t=t.stateNode,n.nodeType===8?Du(n.parentNode,t):n.nodeType===1&&Du(n,t),Io(n)):Du(Ft,t.stateNode));break;case 4:i=Ft,r=jn,Ft=t.stateNode.containerInfo,jn=!0,Ni(n,e,t),Ft=i,jn=r;break;case 0:case 11:case 14:case 15:if(!Wt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&lh(t,e,o),r=r.next}while(r!==i)}Ni(n,e,t);break;case 1:if(!Wt&&(gs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){_t(t,e,a)}Ni(n,e,t);break;case 21:Ni(n,e,t);break;case 22:t.mode&1?(Wt=(i=Wt)||t.memoizedState!==null,Ni(n,e,t),Wt=i):Ni(n,e,t);break;default:Ni(n,e,t)}}function Vd(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new sy),e.forEach(function(i){var r=my.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Hn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ft=a.stateNode,jn=!1;break e;case 3:Ft=a.stateNode.containerInfo,jn=!0;break e;case 4:Ft=a.stateNode.containerInfo,jn=!0;break e}a=a.return}if(Ft===null)throw Error(ne(160));k0(s,o,r),Ft=null,jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){_t(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)z0(e,n),e=e.sibling}function z0(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Hn(e,n),ni(n),i&4){try{wo(3,n,n.return),eu(3,n)}catch(x){_t(n,n.return,x)}try{wo(5,n,n.return)}catch(x){_t(n,n.return,x)}}break;case 1:Hn(e,n),ni(n),i&512&&t!==null&&gs(t,t.return);break;case 5:if(Hn(e,n),ni(n),i&512&&t!==null&&gs(t,t.return),n.flags&32){var r=n.stateNode;try{Lo(r,"")}catch(x){_t(n,n.return,x)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ag(r,s),Ic(a,o);var u=Ic(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?fg(r,f):h==="dangerouslySetInnerHTML"?cg(r,f):h==="children"?Lo(r,f):Ih(r,h,f,u)}switch(a){case"input":Pc(r,s);break;case"textarea":lg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ms(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ms(r,!!s.multiple,s.defaultValue,!0):Ms(r,!!s.multiple,s.multiple?[]:"",!1))}r[Bo]=s}catch(x){_t(n,n.return,x)}}break;case 6:if(Hn(e,n),ni(n),i&4){if(n.stateNode===null)throw Error(ne(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(x){_t(n,n.return,x)}}break;case 3:if(Hn(e,n),ni(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Io(e.containerInfo)}catch(x){_t(n,n.return,x)}break;case 4:Hn(e,n),ni(n);break;case 13:Hn(e,n),ni(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(mf=St())),i&4&&Vd(n);break;case 22:if(h=t!==null&&t.memoizedState!==null,n.mode&1?(Wt=(u=Wt)||h,Hn(e,n),Wt=u):Hn(e,n),ni(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!h&&n.mode&1)for(de=n,h=n.child;h!==null;){for(f=de=h;de!==null;){switch(d=de,p=d.child,d.tag){case 0:case 11:case 14:case 15:wo(4,d,d.return);break;case 1:gs(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){_t(i,t,x)}}break;case 5:gs(d,d.return);break;case 22:if(d.memoizedState!==null){Xd(f);continue}}p!==null?(p.return=d,de=p):Xd(f)}h=h.sibling}e:for(h=null,f=n;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=hg("display",o))}catch(x){_t(n,n.return,x)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){_t(n,n.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Hn(e,n),ni(n),i&4&&Vd(n);break;case 21:break;default:Hn(e,n),ni(n)}}function ni(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(O0(t)){var i=t;break e}t=t.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Lo(r,""),i.flags&=-33);var s=Gd(n);hh(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Gd(n);ch(n,a,o);break;default:throw Error(ne(161))}}catch(l){_t(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function ay(n,e,t){de=n,B0(n)}function B0(n,e,t){for(var i=(n.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Sa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Wt;a=Sa;var u=Wt;if(Sa=o,(Wt=l)&&!u)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?jd(r):l!==null?(l.return=o,de=l):jd(r);for(;s!==null;)de=s,B0(s),s=s.sibling;de=r,Sa=a,Wt=u}Wd(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,de=s):Wd(n)}}function Wd(n){for(;de!==null;){var e=de;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||eu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Xn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Rd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Rd(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Io(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Wt||e.flags&512&&uh(e)}catch(d){_t(e,e.return,d)}}if(e===n){de=null;break}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}}function Xd(n){for(;de!==null;){var e=de;if(e===n){de=null;break}var t=e.sibling;if(t!==null){t.return=e.return,de=t;break}de=e.return}}function jd(n){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{eu(4,e)}catch(l){_t(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){_t(e,r,l)}}var s=e.return;try{uh(e)}catch(l){_t(e,s,l)}break;case 5:var o=e.return;try{uh(e)}catch(l){_t(e,o,l)}}}catch(l){_t(e,e.return,l)}if(e===n){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var ly=Math.ceil,Dl=Ui.ReactCurrentDispatcher,df=Ui.ReactCurrentOwner,Fn=Ui.ReactCurrentBatchConfig,Ke=0,It=null,Et=null,Ot=0,gn=0,vs=lr(0),wt=0,jo=null,Fr=0,tu=0,pf=0,Ao=null,nn=null,mf=0,Os=1/0,xi=null,Ul=!1,fh=null,Ji=null,Ma=!1,Xi=null,Nl=0,Co=0,dh=null,sl=-1,ol=0;function Qt(){return Ke&6?St():sl!==-1?sl:sl=St()}function er(n){return n.mode&1?Ke&2&&Ot!==0?Ot&-Ot:Xx.transition!==null?(ol===0&&(ol=Tg()),ol):(n=tt,n!==0||(n=window.event,n=n===void 0?16:Lg(n.type)),n):1}function Jn(n,e,t,i){if(50<Co)throw Co=0,dh=null,Error(ne(185));Zo(n,t,i),(!(Ke&2)||n!==It)&&(n===It&&(!(Ke&2)&&(tu|=t),wt===4&&Vi(n,Ot)),cn(n,i),t===1&&Ke===0&&!(e.mode&1)&&(Os=St()+500,Ql&&ur()))}function cn(n,e){var t=n.callbackNode;X_(n,e);var i=vl(n,n===It?Ot:0);if(i===0)t!==null&&td(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&td(t),e===1)n.tag===0?Wx(qd.bind(null,n)):Kg(qd.bind(null,n)),Bx(function(){!(Ke&6)&&ur()}),t=null;else{switch(wg(i)){case 1:t=Bh;break;case 4:t=Mg;break;case 16:t=gl;break;case 536870912:t=Eg;break;default:t=gl}t=Y0(t,H0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function H0(n,e){if(sl=-1,ol=0,Ke&6)throw Error(ne(327));var t=n.callbackNode;if(Cs()&&n.callbackNode!==t)return null;var i=vl(n,n===It?Ot:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Il(n,i);else{e=i;var r=Ke;Ke|=2;var s=V0();(It!==n||Ot!==e)&&(xi=null,Os=St()+500,Cr(n,e));do try{hy();break}catch(a){G0(n,a)}while(!0);Jh(),Dl.current=s,Ke=r,Et!==null?e=0:(It=null,Ot=0,e=wt)}if(e!==0){if(e===2&&(r=Bc(n),r!==0&&(i=r,e=ph(n,r))),e===1)throw t=jo,Cr(n,0),Vi(n,i),cn(n,St()),t;if(e===6)Vi(n,i);else{if(r=n.current.alternate,!(i&30)&&!uy(r)&&(e=Il(n,i),e===2&&(s=Bc(n),s!==0&&(i=s,e=ph(n,s))),e===1))throw t=jo,Cr(n,0),Vi(n,i),cn(n,St()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:xr(n,nn,xi);break;case 3:if(Vi(n,i),(i&130023424)===i&&(e=mf+500-St(),10<e)){if(vl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Qt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Yc(xr.bind(null,n,nn,xi),e);break}xr(n,nn,xi);break;case 4:if(Vi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Zn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ly(i/1960))-i,10<i){n.timeoutHandle=Yc(xr.bind(null,n,nn,xi),i);break}xr(n,nn,xi);break;case 5:xr(n,nn,xi);break;default:throw Error(ne(329))}}}return cn(n,St()),n.callbackNode===t?H0.bind(null,n):null}function ph(n,e){var t=Ao;return n.current.memoizedState.isDehydrated&&(Cr(n,e).flags|=256),n=Il(n,e),n!==2&&(e=nn,nn=t,e!==null&&mh(e)),n}function mh(n){nn===null?nn=n:nn.push.apply(nn,n)}function uy(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ei(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vi(n,e){for(e&=~pf,e&=~tu,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Zn(e),i=1<<t;n[t]=-1,e&=~i}}function qd(n){if(Ke&6)throw Error(ne(327));Cs();var e=vl(n,0);if(!(e&1))return cn(n,St()),null;var t=Il(n,e);if(n.tag!==0&&t===2){var i=Bc(n);i!==0&&(e=i,t=ph(n,i))}if(t===1)throw t=jo,Cr(n,0),Vi(n,e),cn(n,St()),t;if(t===6)throw Error(ne(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,xr(n,nn,xi),cn(n,St()),null}function gf(n,e){var t=Ke;Ke|=1;try{return n(e)}finally{Ke=t,Ke===0&&(Os=St()+500,Ql&&ur())}}function Or(n){Xi!==null&&Xi.tag===0&&!(Ke&6)&&Cs();var e=Ke;Ke|=1;var t=Fn.transition,i=tt;try{if(Fn.transition=null,tt=1,n)return n()}finally{tt=i,Fn.transition=t,Ke=e,!(Ke&6)&&ur()}}function vf(){gn=vs.current,lt(vs)}function Cr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,zx(t)),Et!==null)for(t=Et.return;t!==null;){var i=t;switch(Kh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ml();break;case 3:Is(),lt(ln),lt(Xt),of();break;case 5:sf(i);break;case 4:Is();break;case 13:lt(ft);break;case 19:lt(ft);break;case 10:ef(i.type._context);break;case 22:case 23:vf()}t=t.return}if(It=n,Et=n=tr(n.current,null),Ot=gn=e,wt=0,jo=null,pf=tu=Fr=0,nn=Ao=null,wr!==null){for(e=0;e<wr.length;e++)if(t=wr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}wr=null}return n}function G0(n,e){do{var t=Et;try{if(Jh(),nl.current=Ll,Pl){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Pl=!1}if(Ir=0,Dt=Tt=dt=null,To=!1,Vo=0,df.current=null,t===null||t.return===null){wt=1,jo=e,Et=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=Nd(o);if(p!==null){p.flags&=-257,Id(p,o,a,s,e),p.mode&1&&Ud(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){Ud(s,u,e),_f();break e}l=Error(ne(426))}}else if(ut&&a.mode&1){var m=Nd(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Id(m,o,a,s,e),Qh(Fs(l,a));break e}}s=l=Fs(l,a),wt!==4&&(wt=2),Ao===null?Ao=[s]:Ao.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=w0(s,l,e);Cd(s,c);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ji===null||!Ji.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=A0(s,a,e);Cd(s,S);break e}}s=s.return}while(s!==null)}X0(t)}catch(R){e=R,Et===t&&t!==null&&(Et=t=t.return);continue}break}while(!0)}function V0(){var n=Dl.current;return Dl.current=Ll,n===null?Ll:n}function _f(){(wt===0||wt===3||wt===2)&&(wt=4),It===null||!(Fr&268435455)&&!(tu&268435455)||Vi(It,Ot)}function Il(n,e){var t=Ke;Ke|=2;var i=V0();(It!==n||Ot!==e)&&(xi=null,Cr(n,e));do try{cy();break}catch(r){G0(n,r)}while(!0);if(Jh(),Ke=t,Dl.current=i,Et!==null)throw Error(ne(261));return It=null,Ot=0,wt}function cy(){for(;Et!==null;)W0(Et)}function hy(){for(;Et!==null&&!F_();)W0(Et)}function W0(n){var e=q0(n.alternate,n,gn);n.memoizedProps=n.pendingProps,e===null?X0(n):Et=e,df.current=null}function X0(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=ry(t,e),t!==null){t.flags&=32767,Et=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{wt=6,Et=null;return}}else if(t=iy(t,e,gn),t!==null){Et=t;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=n}while(e!==null);wt===0&&(wt=5)}function xr(n,e,t){var i=tt,r=Fn.transition;try{Fn.transition=null,tt=1,fy(n,e,t,i)}finally{Fn.transition=r,tt=i}return null}function fy(n,e,t,i){do Cs();while(Xi!==null);if(Ke&6)throw Error(ne(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ne(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(j_(n,s),n===It&&(Et=It=null,Ot=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ma||(Ma=!0,Y0(gl,function(){return Cs(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Fn.transition,Fn.transition=null;var o=tt;tt=1;var a=Ke;Ke|=4,df.current=null,oy(n,t),z0(t,n),Dx(jc),_l=!!Xc,jc=Xc=null,n.current=t,ay(t),O_(),Ke=a,tt=o,Fn.transition=s}else n.current=t;if(Ma&&(Ma=!1,Xi=n,Nl=r),s=n.pendingLanes,s===0&&(Ji=null),B_(t.stateNode),cn(n,St()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ul)throw Ul=!1,n=fh,fh=null,n;return Nl&1&&n.tag!==0&&Cs(),s=n.pendingLanes,s&1?n===dh?Co++:(Co=0,dh=n):Co=0,ur(),null}function Cs(){if(Xi!==null){var n=wg(Nl),e=Fn.transition,t=tt;try{if(Fn.transition=null,tt=16>n?16:n,Xi===null)var i=!1;else{if(n=Xi,Xi=null,Nl=0,Ke&6)throw Error(ne(331));var r=Ke;for(Ke|=4,de=n.current;de!==null;){var s=de,o=s.child;if(de.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(de=u;de!==null;){var h=de;switch(h.tag){case 0:case 11:case 15:wo(8,h,s)}var f=h.child;if(f!==null)f.return=h,de=f;else for(;de!==null;){h=de;var d=h.sibling,p=h.return;if(F0(h),h===u){de=null;break}if(d!==null){d.return=p,de=d;break}de=p}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}de=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,s.flags&2048)switch(s.tag){case 0:case 11:case 15:wo(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,de=c;break e}de=s.return}}var v=n.current;for(de=v;de!==null;){o=de;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,de=g;else e:for(o=v;de!==null;){if(a=de,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:eu(9,a)}}catch(R){_t(a,a.return,R)}if(a===o){de=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,de=S;break e}de=a.return}}if(Ke=r,ur(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(jl,n)}catch{}i=!0}return i}finally{tt=t,Fn.transition=e}}return!1}function Yd(n,e,t){e=Fs(t,e),e=w0(n,e,1),n=Zi(n,e,1),e=Qt(),n!==null&&(Zo(n,1,e),cn(n,e))}function _t(n,e,t){if(n.tag===3)Yd(n,n,t);else for(;e!==null;){if(e.tag===3){Yd(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ji===null||!Ji.has(i))){n=Fs(t,n),n=A0(e,n,1),e=Zi(e,n,1),n=Qt(),e!==null&&(Zo(e,1,n),cn(e,n));break}}e=e.return}}function dy(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Qt(),n.pingedLanes|=n.suspendedLanes&t,It===n&&(Ot&t)===t&&(wt===4||wt===3&&(Ot&130023424)===Ot&&500>St()-mf?Cr(n,0):pf|=t),cn(n,e)}function j0(n,e){e===0&&(n.mode&1?(e=fa,fa<<=1,!(fa&130023424)&&(fa=4194304)):e=1);var t=Qt();n=Pi(n,e),n!==null&&(Zo(n,e,t),cn(n,t))}function py(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),j0(n,t)}function my(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),j0(n,t)}var q0;q0=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||ln.current)on=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return on=!1,ny(n,e,t);on=!!(n.flags&131072)}else on=!1,ut&&e.flags&1048576&&Qg(e,wl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;rl(n,e),n=e.pendingProps;var r=Ds(e,Xt.current);As(e,t),r=lf(null,e,i,n,r,t);var s=uf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,El(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,nf(e),r.updater=Jl,e.stateNode=r,r._reactInternals=e,th(e,i,n,t),e=rh(null,e,i,!0,s,t)):(e.tag=0,ut&&s&&$h(e),$t(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(rl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=vy(i),n=Xn(i,n),r){case 0:e=ih(null,e,i,n,t);break e;case 1:e=kd(null,e,i,n,t);break e;case 11:e=Fd(null,e,i,n,t);break e;case 14:e=Od(null,e,i,Xn(i.type,n),t);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),ih(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),kd(n,e,i,r,t);case 3:e:{if(P0(e),n===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,i0(n,e),Rl(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Fs(Error(ne(423)),e),e=zd(n,e,i,t,r);break e}else if(i!==r){r=Fs(Error(ne(424)),e),e=zd(n,e,i,t,r);break e}else for(vn=Qi(e.stateNode.containerInfo.firstChild),_n=e,ut=!0,Yn=null,t=t0(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Us(),i===r){e=Li(n,e,t);break e}$t(n,e,i,t)}e=e.child}return e;case 5:return r0(e),n===null&&Zc(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,qc(i,r)?o=null:s!==null&&qc(i,s)&&(e.flags|=32),b0(n,e),$t(n,e,o,t),e.child;case 6:return n===null&&Zc(e),null;case 13:return L0(n,e,t);case 4:return rf(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ns(e,null,i,t):$t(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),Fd(n,e,i,r,t);case 7:return $t(n,e,e.pendingProps,t),e.child;case 8:return $t(n,e,e.pendingProps.children,t),e.child;case 12:return $t(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ot(Al,i._currentValue),i._currentValue=o,s!==null)if(ei(s.value,o)){if(s.children===r.children&&!ln.current){e=Li(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=wi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Jc(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Jc(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,As(e,t),r=zn(r),i=i(r),e.flags|=1,$t(n,e,i,t),e.child;case 14:return i=e.type,r=Xn(i,e.pendingProps),r=Xn(i.type,r),Od(n,e,i,r,t);case 15:return C0(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),rl(n,e),e.tag=1,un(i)?(n=!0,El(e)):n=!1,As(e,t),T0(e,i,r),th(e,i,r,t),rh(null,e,i,!0,n,t);case 19:return D0(n,e,t);case 22:return R0(n,e,t)}throw Error(ne(156,e.tag))};function Y0(n,e){return Sg(n,e)}function gy(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(n,e,t,i){return new gy(n,e,t,i)}function xf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function vy(n){if(typeof n=="function")return xf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Oh)return 11;if(n===kh)return 14}return 2}function tr(n,e){var t=n.alternate;return t===null?(t=In(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function al(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")xf(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case as:return Rr(t.children,r,s,e);case Fh:o=8,r|=8;break;case wc:return n=In(12,t,e,r|2),n.elementType=wc,n.lanes=s,n;case Ac:return n=In(13,t,e,r),n.elementType=Ac,n.lanes=s,n;case Cc:return n=In(19,t,e,r),n.elementType=Cc,n.lanes=s,n;case rg:return nu(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ng:o=10;break e;case ig:o=9;break e;case Oh:o=11;break e;case kh:o=14;break e;case Bi:o=16,i=null;break e}throw Error(ne(130,n==null?n:typeof n,""))}return e=In(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Rr(n,e,t,i){return n=In(7,n,i,e),n.lanes=t,n}function nu(n,e,t,i){return n=In(22,n,i,e),n.elementType=rg,n.lanes=t,n.stateNode={isHidden:!1},n}function Bu(n,e,t){return n=In(6,n,null,e),n.lanes=t,n}function Hu(n,e,t){return e=In(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function _y(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Su(0),this.expirationTimes=Su(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Su(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function yf(n,e,t,i,r,s,o,a,l){return n=new _y(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},nf(s),n}function xy(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:os,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function $0(n){if(!n)return sr;n=n._reactInternals;e:{if(zr(n)!==n||n.tag!==1)throw Error(ne(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(n.tag===1){var t=n.type;if(un(t))return $g(n,t,e)}return e}function K0(n,e,t,i,r,s,o,a,l){return n=yf(t,i,!0,n,r,s,o,a,l),n.context=$0(null),t=n.current,i=Qt(),r=er(t),s=wi(i,r),s.callback=e??null,Zi(t,s,r),n.current.lanes=r,Zo(n,r,i),cn(n,i),n}function iu(n,e,t,i){var r=e.current,s=Qt(),o=er(r);return t=$0(t),e.context===null?e.context=t:e.pendingContext=t,e=wi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Zi(r,e,o),n!==null&&(Jn(n,r,o,s),tl(n,r,o)),o}function Fl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function $d(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Sf(n,e){$d(n,e),(n=n.alternate)&&$d(n,e)}function yy(){return null}var Q0=typeof reportError=="function"?reportError:function(n){console.error(n)};function Mf(n){this._internalRoot=n}ru.prototype.render=Mf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ne(409));iu(n,e,null,null)};ru.prototype.unmount=Mf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Or(function(){iu(null,n,null,null)}),e[bi]=null}};function ru(n){this._internalRoot=n}ru.prototype.unstable_scheduleHydration=function(n){if(n){var e=Rg();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Gi.length&&e!==0&&e<Gi[t].priority;t++);Gi.splice(t,0,n),t===0&&Pg(n)}};function Ef(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function su(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Kd(){}function Sy(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Fl(o);s.call(u)}}var o=K0(e,i,n,0,null,!1,!1,"",Kd);return n._reactRootContainer=o,n[bi]=o.current,ko(n.nodeType===8?n.parentNode:n),Or(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Fl(l);a.call(u)}}var l=yf(n,0,!1,null,null,!1,!1,"",Kd);return n._reactRootContainer=l,n[bi]=l.current,ko(n.nodeType===8?n.parentNode:n),Or(function(){iu(e,l,t,i)}),l}function ou(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Fl(o);a.call(l)}}iu(e,o,n,r)}else o=Sy(t,e,n,r,i);return Fl(o)}Ag=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=go(e.pendingLanes);t!==0&&(Hh(e,t|1),cn(e,St()),!(Ke&6)&&(Os=St()+500,ur()))}break;case 13:Or(function(){var i=Pi(n,1);if(i!==null){var r=Qt();Jn(i,n,1,r)}}),Sf(n,1)}};Gh=function(n){if(n.tag===13){var e=Pi(n,134217728);if(e!==null){var t=Qt();Jn(e,n,134217728,t)}Sf(n,134217728)}};Cg=function(n){if(n.tag===13){var e=er(n),t=Pi(n,e);if(t!==null){var i=Qt();Jn(t,n,e,i)}Sf(n,e)}};Rg=function(){return tt};bg=function(n,e){var t=tt;try{return tt=n,e()}finally{tt=t}};Oc=function(n,e,t){switch(e){case"input":if(Pc(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Kl(i);if(!r)throw Error(ne(90));og(i),Pc(i,r)}}}break;case"textarea":lg(n,t);break;case"select":e=t.value,e!=null&&Ms(n,!!t.multiple,e,!1)}};mg=gf;gg=Or;var My={usingClientEntryPoint:!1,Events:[ea,hs,Kl,dg,pg,gf]},ro={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ey={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=xg(n),n===null?null:n.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||yy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{jl=Ea.inject(Ey),li=Ea}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=My;yn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ef(e))throw Error(ne(200));return xy(n,e,null,t)};yn.createRoot=function(n,e){if(!Ef(n))throw Error(ne(299));var t=!1,i="",r=Q0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=yf(n,1,!1,null,null,t,!1,i,r),n[bi]=e.current,ko(n.nodeType===8?n.parentNode:n),new Mf(e)};yn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ne(188)):(n=Object.keys(n).join(","),Error(ne(268,n)));return n=xg(e),n=n===null?null:n.stateNode,n};yn.flushSync=function(n){return Or(n)};yn.hydrate=function(n,e,t){if(!su(e))throw Error(ne(200));return ou(null,n,e,!0,t)};yn.hydrateRoot=function(n,e,t){if(!Ef(n))throw Error(ne(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Q0;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=K0(e,null,n,1,t??null,r,!1,s,o),n[bi]=e.current,ko(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new ru(e)};yn.render=function(n,e,t){if(!su(e))throw Error(ne(200));return ou(null,n,e,!1,t)};yn.unmountComponentAtNode=function(n){if(!su(n))throw Error(ne(40));return n._reactRootContainer?(Or(function(){ou(null,null,n,!1,function(){n._reactRootContainer=null,n[bi]=null})}),!0):!1};yn.unstable_batchedUpdates=gf;yn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!su(t))throw Error(ne(200));if(n==null||n._reactInternals===void 0)throw Error(ne(38));return ou(n,e,t,!1,i)};yn.version="18.3.1-next-f1338f8080-20240426";function Z0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Z0)}catch(n){console.error(n)}}Z0(),Zm.exports=yn;var Ty=Zm.exports,J0,Qd=Ty;J0=Qd.createRoot,Qd.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tf="160",wy=0,Zd=1,Ay=2,ev=1,tv=2,vi=3,or=0,hn=1,sn=2,Ai=0,Rs=1,gh=2,Jd=3,ep=4,Cy=5,Mr=100,Ry=101,by=102,tp=103,np=104,Py=200,Ly=201,Dy=202,Uy=203,vh=204,_h=205,Ny=206,Iy=207,Fy=208,Oy=209,ky=210,zy=211,By=212,Hy=213,Gy=214,Vy=0,Wy=1,Xy=2,Ol=3,jy=4,qy=5,Yy=6,$y=7,wf=0,Ky=1,Qy=2,nr=0,nv=1,iv=2,rv=3,Af=4,Zy=5,sv=6,ov=300,ks=301,zs=302,xh=303,yh=304,au=306,kl=1e3,Kn=1001,Sh=1002,Kt=1003,ip=1004,Gu=1005,Ln=1006,Jy=1007,qo=1008,ir=1009,eS=1010,tS=1011,Cf=1012,av=1013,ji=1014,qi=1015,ci=1016,lv=1017,uv=1018,br=1020,nS=1021,Qn=1023,iS=1024,rS=1025,Pr=1026,Bs=1027,sS=1028,cv=1029,oS=1030,hv=1031,fv=1033,Vu=33776,Wu=33777,Xu=33778,ju=33779,rp=35840,sp=35841,op=35842,ap=35843,dv=36196,lp=37492,up=37496,cp=37808,hp=37809,fp=37810,dp=37811,pp=37812,mp=37813,gp=37814,vp=37815,_p=37816,xp=37817,yp=37818,Sp=37819,Mp=37820,Ep=37821,qu=36492,Tp=36494,wp=36495,aS=36283,Ap=36284,Cp=36285,Rp=36286,pv=3e3,Lr=3001,lS=3200,uS=3201,Rf=0,cS=1,Un="",Ut="srgb",Di="srgb-linear",bf="display-p3",lu="display-p3-linear",zl="linear",st="srgb",Bl="rec709",Hl="p3",Vr=7680,bp=519,hS=512,fS=513,dS=514,mv=515,pS=516,mS=517,gS=518,vS=519,Pp=35044,Lp="300 es",Mh=1035,Ei=2e3,Gl=2001;class js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yu=Math.PI/180,Eh=180/Math.PI;function na(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function rn(n,e,t){return Math.max(e,Math.min(t,n))}function _S(n,e){return(n%e+e)%e}function $u(n,e,t){return(1-t)*n+t*e}function Dp(n){return(n&n-1)===0&&n!==0}function Th(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function so(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,o,a,l,u){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],h=i[4],f=i[7],d=i[2],p=i[5],_=i[8],x=r[0],m=r[3],c=r[6],v=r[1],g=r[4],S=r[7],R=r[2],A=r[5],T=r[8];return s[0]=o*x+a*v+l*R,s[3]=o*m+a*g+l*A,s[6]=o*c+a*S+l*T,s[1]=u*x+h*v+f*R,s[4]=u*m+h*g+f*A,s[7]=u*c+h*S+f*T,s[2]=d*x+p*v+_*R,s[5]=d*m+p*g+_*A,s[8]=d*c+p*S+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8];return t*o*h-t*a*u-i*s*h+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],f=h*o-a*u,d=a*l-h*s,p=u*s-o*l,_=t*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*u-h*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(h*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(i*l-u*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ku.makeScale(e,t)),this}rotate(e){return this.premultiply(Ku.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ku.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ku=new We;function gv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Vl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xS(){const n=Vl("canvas");return n.style.display="block",n}const Up={};function Ro(n){n in Up||(Up[n]=!0,console.warn(n))}const Np=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ip=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ta={[Di]:{transfer:zl,primaries:Bl,toReference:n=>n,fromReference:n=>n},[Ut]:{transfer:st,primaries:Bl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[lu]:{transfer:zl,primaries:Hl,toReference:n=>n.applyMatrix3(Ip),fromReference:n=>n.applyMatrix3(Np)},[bf]:{transfer:st,primaries:Hl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ip),fromReference:n=>n.applyMatrix3(Np).convertLinearToSRGB()}},yS=new Set([Di,lu]),et={enabled:!0,_workingColorSpace:Di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!yS.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ta[e].toReference,r=Ta[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ta[n].primaries},getTransfer:function(n){return n===Un?zl:Ta[n].transfer}};function bs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Wr;class vv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wr===void 0&&(Wr=Vl("canvas")),Wr.width=e.width,Wr.height=e.height;const i=Wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Wr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=bs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(bs(t[i]/255)*255):t[i]=bs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let SS=0;class _v{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=na(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Zu(r[o].image)):s.push(Zu(r[o]))}else s=Zu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Zu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?vv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let MS=0;class fn extends js{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,i=Kn,r=Kn,s=Ln,o=qo,a=Qn,l=ir,u=fn.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=na(),this.name="",this.source=new _v(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Lr?Ut:Un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ov)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kl:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case Sh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kl:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case Sh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ut?Lr:pv}set encoding(e){Ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Lr?Ut:Un}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=ov;fn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,i=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],h=l[4],f=l[8],d=l[1],p=l[5],_=l[9],x=l[2],m=l[6],c=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(u+1)/2,S=(p+1)/2,R=(c+1)/2,A=(h+d)/4,T=(f+x)/4,L=(_+m)/4;return g>S&&g>R?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=T/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=L/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=L/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-x)/v,this.z=(d-h)/v,this.w=Math.acos((u+p+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ES extends js{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Ro("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Lr?Ut:Un),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _v(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends ES{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class xv extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class TS extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ia{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],h=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(f!==x||l!==d||u!==p||h!==_){let m=1-a;const c=l*d+u*p+h*_+f*x,v=c>=0?1:-1,g=1-c*c;if(g>Number.EPSILON){const R=Math.sqrt(g),A=Math.atan2(R,c*v);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const S=a*v;if(l=l*m+d*S,u=u*m+p*S,h=h*m+_*S,f=f*m+x*S,m===1-a){const R=1/Math.sqrt(l*l+u*u+h*h+f*f);l*=R,u*=R,h*=R,f*=R}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],h=i[r+3],f=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+h*f+l*p-u*d,e[t+1]=l*_+h*d+u*f-a*p,e[t+2]=u*_+h*p+a*d-l*f,e[t+3]=h*_-a*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),h=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*h*f+u*p*_,this._y=u*p*f-d*h*_,this._z=u*h*_+d*p*f,this._w=u*h*f-d*p*_;break;case"YXZ":this._x=d*h*f+u*p*_,this._y=u*p*f-d*h*_,this._z=u*h*_-d*p*f,this._w=u*h*f+d*p*_;break;case"ZXY":this._x=d*h*f-u*p*_,this._y=u*p*f+d*h*_,this._z=u*h*_+d*p*f,this._w=u*h*f-d*p*_;break;case"ZYX":this._x=d*h*f-u*p*_,this._y=u*p*f+d*h*_,this._z=u*h*_-d*p*f,this._w=u*h*f+d*p*_;break;case"YZX":this._x=d*h*f+u*p*_,this._y=u*p*f+d*h*_,this._z=u*h*_-d*p*f,this._w=u*h*f-d*p*_;break;case"XZY":this._x=d*h*f-u*p*_,this._y=u*p*f-d*h*_,this._z=u*h*_+d*p*f,this._w=u*h*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],h=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,h=t._w;return this._x=i*h+o*a+r*u-s*l,this._y=r*h+o*l+s*a-i*u,this._z=s*h+o*u+i*l-r*a,this._w=o*h-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),f=Math.sin((1-t)*h)/u,d=Math.sin(t*h)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),h=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*h,this.y=i+l*h+a*u-s*f,this.z=r+l*f+s*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ju.copy(this).projectOnVector(e),this.sub(Ju)}reflect(e){return this.sub(Ju.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ju=new B,Fp=new ia;class Br{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(s,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wa.copy(i.boundingBox)),wa.applyMatrix4(e.matrixWorld),this.union(wa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oo),Aa.subVectors(this.max,oo),Xr.subVectors(e.a,oo),jr.subVectors(e.b,oo),qr.subVectors(e.c,oo),Ii.subVectors(jr,Xr),Fi.subVectors(qr,jr),fr.subVectors(Xr,qr);let t=[0,-Ii.z,Ii.y,0,-Fi.z,Fi.y,0,-fr.z,fr.y,Ii.z,0,-Ii.x,Fi.z,0,-Fi.x,fr.z,0,-fr.x,-Ii.y,Ii.x,0,-Fi.y,Fi.x,0,-fr.y,fr.x,0];return!ec(t,Xr,jr,qr,Aa)||(t=[1,0,0,0,1,0,0,0,1],!ec(t,Xr,jr,qr,Aa))?!1:(Ca.crossVectors(Ii,Fi),t=[Ca.x,Ca.y,Ca.z],ec(t,Xr,jr,qr,Aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new B,new B,new B,new B,new B,new B,new B,new B],Gn=new B,wa=new Br,Xr=new B,jr=new B,qr=new B,Ii=new B,Fi=new B,fr=new B,oo=new B,Aa=new B,Ca=new B,dr=new B;function ec(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){dr.fromArray(n,s);const a=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),l=e.dot(dr),u=t.dot(dr),h=i.dot(dr);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}const wS=new Br,ao=new B,tc=new B;class qs{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):wS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ao.subVectors(e,this.center);const t=ao.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ao,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ao.copy(e.center).add(tc)),this.expandByPoint(ao.copy(e.center).sub(tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const di=new B,nc=new B,Ra=new B,Oi=new B,ic=new B,ba=new B,rc=new B;class yv{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){nc.copy(e).add(t).multiplyScalar(.5),Ra.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(nc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ra),a=Oi.dot(this.direction),l=-Oi.dot(Ra),u=Oi.lengthSq(),h=Math.abs(1-o*o);let f,d,p,_;if(h>0)if(f=o*l-a,d=o*a-l,_=s*h,f>=0)if(d>=-_)if(d<=_){const x=1/h;f*=x,d*=x,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(nc).addScaledVector(Ra,d),p}intersectSphere(e,t){di.subVectors(e.center,this.origin);const i=di.dot(this.direction),r=di.dot(di)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,i,r,s){ic.subVectors(t,e),ba.subVectors(i,e),rc.crossVectors(ic,ba);let o=this.direction.dot(rc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);const l=a*this.direction.dot(ba.crossVectors(Oi,ba));if(l<0)return null;const u=a*this.direction.dot(ic.cross(Oi));if(u<0||l+u>o)return null;const h=-a*Oi.dot(rc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,i,r,s,o,a,l,u,h,f,d,p,_,x,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,h,f,d,p,_,x,m)}set(e,t,i,r,s,o,a,l,u,h,f,d,p,_,x,m){const c=this.elements;return c[0]=e,c[4]=t,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=h,c[10]=f,c[14]=d,c[3]=p,c[7]=_,c[11]=x,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Yr.setFromMatrixColumn(e,0).length(),s=1/Yr.setFromMatrixColumn(e,1).length(),o=1/Yr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*h,p=o*f,_=a*h,x=a*f;t[0]=l*h,t[4]=-l*f,t[8]=u,t[1]=p+_*u,t[5]=d-x*u,t[9]=-a*l,t[2]=x-d*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*f,_=u*h,x=u*f;t[0]=d+x*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=p*a-_,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*f,_=u*h,x=u*f;t[0]=d-x*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*f,_=a*h,x=a*f;t[0]=l*h,t[4]=_*u-p,t[8]=d*u+x,t[1]=l*f,t[5]=x*u+d,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,_=a*l,x=a*u;t[0]=l*h,t[4]=x-d*f,t[8]=_*f+p,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-u*h,t[6]=p*f+_,t[10]=d-x*f}else if(e.order==="XZY"){const d=o*l,p=o*u,_=a*l,x=a*u;t[0]=l*h,t[4]=-f,t[8]=u*h,t[1]=d*f+x,t[5]=o*h,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*h,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(AS,e,CS)}lookAt(e,t,i){const r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),ki.crossVectors(i,pn),ki.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),ki.crossVectors(i,pn)),ki.normalize(),Pa.crossVectors(pn,ki),r[0]=ki.x,r[4]=Pa.x,r[8]=pn.x,r[1]=ki.y,r[5]=Pa.y,r[9]=pn.y,r[2]=ki.z,r[6]=Pa.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],h=i[1],f=i[5],d=i[9],p=i[13],_=i[2],x=i[6],m=i[10],c=i[14],v=i[3],g=i[7],S=i[11],R=i[15],A=r[0],T=r[4],L=r[8],y=r[12],E=r[1],F=r[5],z=r[9],Z=r[13],D=r[2],b=r[6],N=r[10],W=r[14],P=r[3],I=r[7],H=r[11],Y=r[15];return s[0]=o*A+a*E+l*D+u*P,s[4]=o*T+a*F+l*b+u*I,s[8]=o*L+a*z+l*N+u*H,s[12]=o*y+a*Z+l*W+u*Y,s[1]=h*A+f*E+d*D+p*P,s[5]=h*T+f*F+d*b+p*I,s[9]=h*L+f*z+d*N+p*H,s[13]=h*y+f*Z+d*W+p*Y,s[2]=_*A+x*E+m*D+c*P,s[6]=_*T+x*F+m*b+c*I,s[10]=_*L+x*z+m*N+c*H,s[14]=_*y+x*Z+m*W+c*Y,s[3]=v*A+g*E+S*D+R*P,s[7]=v*T+g*F+S*b+R*I,s[11]=v*L+g*z+S*N+R*H,s[15]=v*y+g*Z+S*W+R*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],h=e[2],f=e[6],d=e[10],p=e[14],_=e[3],x=e[7],m=e[11],c=e[15];return _*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*p-i*l*p)+x*(+t*l*p-t*u*d+s*o*d-r*o*p+r*u*h-s*l*h)+m*(+t*u*f-t*a*p-s*o*f+i*o*p+s*a*h-i*u*h)+c*(-r*a*h-t*l*f+t*a*d+r*o*f-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],h=e[8],f=e[9],d=e[10],p=e[11],_=e[12],x=e[13],m=e[14],c=e[15],v=f*m*u-x*d*u+x*l*p-a*m*p-f*l*c+a*d*c,g=_*d*u-h*m*u-_*l*p+o*m*p+h*l*c-o*d*c,S=h*x*u-_*f*u+_*a*p-o*x*p-h*a*c+o*f*c,R=_*f*l-h*x*l-_*a*d+o*x*d+h*a*m-o*f*m,A=t*v+i*g+r*S+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=v*T,e[1]=(x*d*s-f*m*s-x*r*p+i*m*p+f*r*c-i*d*c)*T,e[2]=(a*m*s-x*l*s+x*r*u-i*m*u-a*r*c+i*l*c)*T,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*p-i*l*p)*T,e[4]=g*T,e[5]=(h*m*s-_*d*s+_*r*p-t*m*p-h*r*c+t*d*c)*T,e[6]=(_*l*s-o*m*s-_*r*u+t*m*u+o*r*c-t*l*c)*T,e[7]=(o*d*s-h*l*s+h*r*u-t*d*u-o*r*p+t*l*p)*T,e[8]=S*T,e[9]=(_*f*s-h*x*s-_*i*p+t*x*p+h*i*c-t*f*c)*T,e[10]=(o*x*s-_*a*s+_*i*u-t*x*u-o*i*c+t*a*c)*T,e[11]=(h*a*s-o*f*s-h*i*u+t*f*u+o*i*p-t*a*p)*T,e[12]=R*T,e[13]=(h*x*r-_*f*r+_*i*d-t*x*d-h*i*m+t*f*m)*T,e[14]=(_*a*r-o*x*r-_*i*l+t*x*l+o*i*m-t*a*m)*T,e[15]=(o*f*r-h*a*r+h*i*l-t*f*l-o*i*d+t*a*d)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,h=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,h*a+i,h*l-r*o,0,u*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,h=o+o,f=a+a,d=s*u,p=s*h,_=s*f,x=o*h,m=o*f,c=a*f,v=l*u,g=l*h,S=l*f,R=i.x,A=i.y,T=i.z;return r[0]=(1-(x+c))*R,r[1]=(p+S)*R,r[2]=(_-g)*R,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(d+c))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(_+g)*T,r[9]=(m-v)*T,r[10]=(1-(d+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Yr.set(r[0],r[1],r[2]).length();const o=Yr.set(r[4],r[5],r[6]).length(),a=Yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);const u=1/s,h=1/o,f=1/a;return Vn.elements[0]*=u,Vn.elements[1]*=u,Vn.elements[2]*=u,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=f,Vn.elements[9]*=f,Vn.elements[10]*=f,t.setFromRotationMatrix(Vn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ei){const l=this.elements,u=2*s/(t-e),h=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let p,_;if(a===Ei)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Gl)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ei){const l=this.elements,u=1/(t-e),h=1/(i-r),f=1/(o-s),d=(t+e)*u,p=(i+r)*h;let _,x;if(a===Ei)_=(o+s)*f,x=-2*f;else if(a===Gl)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Yr=new B,Vn=new pt,AS=new B(0,0,0),CS=new B(1,1,1),ki=new B,Pa=new B,pn=new B,Op=new pt,kp=new ia;class uu{constructor(e=0,t=0,i=0,r=uu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],h=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Op.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Op,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kp.setFromEuler(this),this.setFromQuaternion(kp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}uu.DEFAULT_ORDER="XYZ";class Sv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RS=0;const zp=new B,$r=new ia,pi=new pt,La=new B,lo=new B,bS=new B,PS=new ia,Bp=new B(1,0,0),Hp=new B(0,1,0),Gp=new B(0,0,1),LS={type:"added"},DS={type:"removed"};class At extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new B,t=new uu,i=new ia,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new We}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Bp,e)}rotateY(e){return this.rotateOnAxis(Hp,e)}rotateZ(e){return this.rotateOnAxis(Gp,e)}translateOnAxis(e,t){return zp.copy(e).applyQuaternion(this.quaternion),this.position.add(zp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bp,e)}translateY(e){return this.translateOnAxis(Hp,e)}translateZ(e){return this.translateOnAxis(Gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?La.copy(e):La.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(lo,La,this.up):pi.lookAt(La,lo,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(pi),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(LS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(DS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,e,bS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,PS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}At.DEFAULT_UP=new B(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new B,mi=new B,sc=new B,gi=new B,Kr=new B,Qr=new B,Vp=new B,oc=new B,ac=new B,lc=new B;let Da=!1;class $n{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Wn.subVectors(e,t),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Wn.subVectors(r,t),mi.subVectors(i,t),sc.subVectors(e,t);const o=Wn.dot(Wn),a=Wn.dot(mi),l=Wn.dot(sc),u=mi.dot(mi),h=mi.dot(sc),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(u*l-a*h)*d,_=(o*h-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getUV(e,t,i,r,s,o,a,l){return Da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Da=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static isFrontFacing(e,t,i,r){return Wn.subVectors(i,t),mi.subVectors(e,t),Wn.cross(mi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Wn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Da=!0),$n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return $n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Kr.subVectors(r,i),Qr.subVectors(s,i),oc.subVectors(e,i);const l=Kr.dot(oc),u=Qr.dot(oc);if(l<=0&&u<=0)return t.copy(i);ac.subVectors(e,r);const h=Kr.dot(ac),f=Qr.dot(ac);if(h>=0&&f<=h)return t.copy(r);const d=l*f-h*u;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Kr,o);lc.subVectors(e,s);const p=Kr.dot(lc),_=Qr.dot(lc);if(_>=0&&p<=_)return t.copy(s);const x=p*u-l*_;if(x<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(Qr,a);const m=h*_-p*f;if(m<=0&&f-h>=0&&p-_>=0)return Vp.subVectors(s,r),a=(f-h)/(f-h+(p-_)),t.copy(r).addScaledVector(Vp,a);const c=1/(m+x+d);return o=x*c,a=d*c,t.copy(i).addScaledVector(Kr,o).addScaledVector(Qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function uc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Oe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=_S(e,1),t=rn(t,0,1),i=rn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=uc(o,s,e+1/3),this.g=uc(o,s,e),this.b=uc(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=Ut){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const i=Mv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=Qu(e.r),this.g=Qu(e.g),this.b=Qu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return et.fromWorkingColorSpace(Vt.copy(this),e),Math.round(rn(Vt.r*255,0,255))*65536+Math.round(rn(Vt.g*255,0,255))*256+Math.round(rn(Vt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Vt.copy(this),t);const i=Vt.r,r=Vt.g,s=Vt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Ut){et.fromWorkingColorSpace(Vt.copy(this),e);const t=Vt.r,i=Vt.g,r=Vt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(Ua);const i=$u(zi.h,Ua.h,t),r=$u(zi.s,Ua.s,t),s=$u(zi.l,Ua.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Oe;Oe.NAMES=Mv;let US=0;class Hr extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=na(),this.name="",this.type="Material",this.blending=Rs,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vh,this.blendDst=_h,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ol,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(i.blending=this.blending),this.side!==or&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vh&&(i.blendSrc=this.blendSrc),this.blendDst!==_h&&(i.blendDst=this.blendDst),this.blendEquation!==Mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ol&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cn extends Hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new B,Na=new Pe;class kn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Pp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Na.fromBufferAttribute(this,t),Na.applyMatrix3(e),this.setXY(t,Na.x,Na.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=so(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=so(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=so(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=so(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=so(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pp&&(e.usage=this.usage),e}}class Ev extends kn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Tv extends kn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ct extends kn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let NS=0;const En=new pt,cc=new At,Zr=new B,mn=new Br,uo=new Br,Lt=new B;class en extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=na(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gv(e)?Tv:Ev)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,i){return En.makeTranslation(e,t,i),this.applyMatrix4(En),this}scale(e,t,i){return En.makeScale(e,t,i),this.applyMatrix4(En),this}lookAt(e){return cc.lookAt(e),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(mn.min,uo.min),mn.expandByPoint(Lt),Lt.addVectors(mn.max,uo.max),mn.expandByPoint(Lt)):(mn.expandByPoint(uo.min),mn.expandByPoint(uo.max))}mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)Lt.fromBufferAttribute(a,u),l&&(Zr.fromBufferAttribute(e,u),Lt.add(Zr)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],h=[];for(let E=0;E<a;E++)u[E]=new B,h[E]=new B;const f=new B,d=new B,p=new B,_=new Pe,x=new Pe,m=new Pe,c=new B,v=new B;function g(E,F,z){f.fromArray(r,E*3),d.fromArray(r,F*3),p.fromArray(r,z*3),_.fromArray(o,E*2),x.fromArray(o,F*2),m.fromArray(o,z*2),d.sub(f),p.sub(f),x.sub(_),m.sub(_);const Z=1/(x.x*m.y-m.x*x.y);isFinite(Z)&&(c.copy(d).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(Z),v.copy(p).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(Z),u[E].add(c),u[F].add(c),u[z].add(c),h[E].add(v),h[F].add(v),h[z].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let E=0,F=S.length;E<F;++E){const z=S[E],Z=z.start,D=z.count;for(let b=Z,N=Z+D;b<N;b+=3)g(i[b+0],i[b+1],i[b+2])}const R=new B,A=new B,T=new B,L=new B;function y(E){T.fromArray(s,E*3),L.copy(T);const F=u[E];R.copy(F),R.sub(T.multiplyScalar(T.dot(F))).normalize(),A.crossVectors(L,F);const Z=A.dot(h[E])<0?-1:1;l[E*4]=R.x,l[E*4+1]=R.y,l[E*4+2]=R.z,l[E*4+3]=Z}for(let E=0,F=S.length;E<F;++E){const z=S[E],Z=z.start,D=z.count;for(let b=Z,N=Z+D;b<N;b+=3)y(i[b+0]),y(i[b+1]),y(i[b+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,u=new B,h=new B,f=new B;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),a.add(h),l.add(h),u.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const u=a.array,h=a.itemSize,f=a.normalized,d=new u.constructor(l.length*h);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let c=0;c<h;c++)d[_++]=u[p++]}return new kn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let h=0,f=u.length;h<f;h++){const d=u[h],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(t))}const s=e.morphAttributes;for(const u in s){const h=[],f=s[u];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wp=new pt,pr=new yv,Ia=new qs,Xp=new B,Jr=new B,es=new B,ts=new B,hc=new B,Fa=new B,Oa=new Pe,ka=new Pe,za=new Pe,jp=new B,qp=new B,Yp=new B,Ba=new B,Ha=new B;class je extends At{constructor(e=new en,t=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Fa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=a[l],f=s[l];h!==0&&(hc.fromBufferAttribute(f,e),o?Fa.addScaledVector(hc,h):Fa.addScaledVector(hc.sub(t),h))}t.add(Fa)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(s),pr.copy(e.ray).recast(e.near),!(Ia.containsPoint(pr.origin)===!1&&(pr.intersectSphere(Ia,Xp)===null||pr.origin.distanceToSquared(Xp)>(e.far-e.near)**2))&&(Wp.copy(s).invert(),pr.copy(e.ray).applyMatrix4(Wp),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,pr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],c=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,R=g;S<R;S+=3){const A=a.getX(S),T=a.getX(S+1),L=a.getX(S+2);r=Ga(this,c,e,i,u,h,f,A,T,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,c=x;m<c;m+=3){const v=a.getX(m),g=a.getX(m+1),S=a.getX(m+2);r=Ga(this,o,e,i,u,h,f,v,g,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],c=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,R=g;S<R;S+=3){const A=S,T=S+1,L=S+2;r=Ga(this,c,e,i,u,h,f,A,T,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,c=x;m<c;m+=3){const v=m,g=m+1,S=m+2;r=Ga(this,o,e,i,u,h,f,v,g,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function IS(n,e,t,i,r,s,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===or,a),l===null)return null;Ha.copy(a),Ha.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Ha);return u<t.near||u>t.far?null:{distance:u,point:Ha.clone(),object:n}}function Ga(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Jr),n.getVertexPosition(l,es),n.getVertexPosition(u,ts);const h=IS(n,e,t,i,Jr,es,ts,Ba);if(h){r&&(Oa.fromBufferAttribute(r,a),ka.fromBufferAttribute(r,l),za.fromBufferAttribute(r,u),h.uv=$n.getInterpolation(Ba,Jr,es,ts,Oa,ka,za,new Pe)),s&&(Oa.fromBufferAttribute(s,a),ka.fromBufferAttribute(s,l),za.fromBufferAttribute(s,u),h.uv1=$n.getInterpolation(Ba,Jr,es,ts,Oa,ka,za,new Pe),h.uv2=h.uv1),o&&(jp.fromBufferAttribute(o,a),qp.fromBufferAttribute(o,l),Yp.fromBufferAttribute(o,u),h.normal=$n.getInterpolation(Ba,Jr,es,ts,jp,qp,Yp,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new B,materialIndex:0};$n.getNormal(Jr,es,ts,f.normal),h.face=f}return h}class ai extends en{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],h=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(f,2));function _(x,m,c,v,g,S,R,A,T,L,y){const E=S/T,F=R/L,z=S/2,Z=R/2,D=A/2,b=T+1,N=L+1;let W=0,P=0;const I=new B;for(let H=0;H<N;H++){const Y=H*F-Z;for(let K=0;K<b;K++){const O=K*E-z;I[x]=O*v,I[m]=Y*g,I[c]=D,u.push(I.x,I.y,I.z),I[x]=0,I[m]=0,I[c]=A>0?1:-1,h.push(I.x,I.y,I.z),f.push(K/T),f.push(1-H/L),W+=1}}for(let H=0;H<L;H++)for(let Y=0;Y<T;Y++){const K=d+Y+b*H,O=d+Y+b*(H+1),Q=d+(Y+1)+b*(H+1),oe=d+(Y+1)+b*H;l.push(K,O,oe),l.push(O,Q,oe),P+=6}a.addGroup(p,P,y),p+=P,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Yt(n){const e={};for(let t=0;t<n.length;t++){const i=Hs(n[t]);for(const r in i)e[r]=i[r]}return e}function FS(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wv(n){return n.getRenderTarget()===null?n.outputColorSpace:et.workingColorSpace}const Yo={clone:Hs,merge:Yt};var OS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends Hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OS,this.fragmentShader=kS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=FS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Av extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dn extends Av{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Eh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eh*2*Math.atan(Math.tan(Yu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yu*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,is=1;class Cv extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(ns,is,e,t);r.layers=this.layers,this.add(r);const s=new Dn(ns,is,e,t);s.layers=this.layers,this.add(s);const o=new Dn(ns,is,e,t);o.layers=this.layers,this.add(o);const a=new Dn(ns,is,e,t);a.layers=this.layers,this.add(a);const l=new Dn(ns,is,e,t);l.layers=this.layers,this.add(l);const u=new Dn(ns,is,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Rv extends fn{constructor(e,t,i,r,s,o,a,l,u,h){e=e!==void 0?e:[],t=t!==void 0?t:ks,super(e,t,i,r,s,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bv extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Ro("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Lr?Ut:Un),this.texture=new Rv(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ai(5,5,5),s=new an({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Ai});s.uniforms.tEquirect.value=t;const o=new je(r,s),a=t.minFilter;return t.minFilter===qo&&(t.minFilter=Ln),new Cv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const fc=new B,zS=new B,BS=new We;class yr{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=fc.subVectors(i,t).cross(zS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(fc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||BS.getNormalMatrix(e),r=this.coplanarPoint(fc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new qs,Va=new B;class Pf{constructor(e=new yr,t=new yr,i=new yr,r=new yr,s=new yr,o=new yr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ei){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],p=r[8],_=r[9],x=r[10],m=r[11],c=r[12],v=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,d-u,m-p,S-c).normalize(),i[1].setComponents(l+s,d+u,m+p,S+c).normalize(),i[2].setComponents(l+o,d+h,m+_,S+v).normalize(),i[3].setComponents(l-o,d-h,m-_,S-v).normalize(),i[4].setComponents(l-a,d-f,m-x,S-g).normalize(),t===Ei)i[5].setComponents(l+a,d+f,m+x,S+g).normalize();else if(t===Gl)i[5].setComponents(a,f,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Va.x=r.normal.x>0?e.max.x:e.min.x,Va.y=r.normal.y>0?e.max.y:e.min.y,Va.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Va)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function HS(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,h){const f=u.array,d=u.usage,p=f.byteLength,_=n.createBuffer();n.bindBuffer(h,_),n.bufferData(h,f,d),u.onUploadCallback();let x;if(f instanceof Float32Array)x=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=n.SHORT;else if(f instanceof Uint32Array)x=n.UNSIGNED_INT;else if(f instanceof Int32Array)x=n.INT;else if(f instanceof Int8Array)x=n.BYTE;else if(f instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,h,f){const d=h.array,p=h._updateRange,_=h.updateRanges;if(n.bindBuffer(f,u),p.count===-1&&_.length===0&&n.bufferSubData(f,0,d),_.length!==0){for(let x=0,m=_.length;x<m;x++){const c=_[x];t?n.bufferSubData(f,c.start*d.BYTES_PER_ELEMENT,d,c.start,c.count):n.bufferSubData(f,c.start*d.BYTES_PER_ELEMENT,d.subarray(c.start,c.start+c.count))}h.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h&&(n.deleteBuffer(h.buffer),i.delete(u))}function l(u,h){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,h));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,h),f.version=u.version}}return{get:o,remove:a,update:l}}class qn extends en{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,h=l+1,f=e/a,d=t/l,p=[],_=[],x=[],m=[];for(let c=0;c<h;c++){const v=c*d-o;for(let g=0;g<u;g++){const S=g*f-s;_.push(S,-v,0),x.push(0,0,1),m.push(g/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let v=0;v<a;v++){const g=v+u*c,S=v+u*(c+1),R=v+1+u*(c+1),A=v+1+u*c;p.push(g,S,A),p.push(S,R,A)}this.setIndex(p),this.setAttribute("position",new ct(_,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.widthSegments,e.heightSegments)}}var GS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VS=`#ifdef USE_ALPHAHASH
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
#endif`,WS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YS=`#ifdef USE_AOMAP
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
#endif`,$S=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KS=`#ifdef USE_BATCHING
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
#endif`,QS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ZS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tM=`#ifdef USE_IRIDESCENCE
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
#endif`,nM=`#ifdef USE_BUMPMAP
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
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hM=`#define PI 3.141592653589793
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
} // validated`,fM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dM=`vec3 transformedNormal = objectNormal;
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
#endif`,pM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_M="gl_FragColor = linearToOutputTexel( gl_FragColor );",xM=`
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
}`,yM=`#ifdef USE_ENVMAP
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
#endif`,SM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,MM=`#ifdef USE_ENVMAP
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
#endif`,EM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
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
#endif`,wM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bM=`#ifdef USE_GRADIENTMAP
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
}`,PM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,LM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NM=`uniform bool receiveShadow;
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
#endif`,IM=`#ifdef USE_ENVMAP
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
#endif`,FM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BM=`PhysicalMaterial material;
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
#endif`,HM=`struct PhysicalMaterial {
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
}`,GM=`
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
#endif`,VM=`#if defined( RE_IndirectDiffuse )
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
#endif`,WM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,YM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$M=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ZM=`#if defined( USE_POINTS_UV )
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
#endif`,JM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nE=`#ifdef USE_MORPHNORMALS
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
#endif`,iE=`#ifdef USE_MORPHTARGETS
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
#endif`,rE=`#ifdef USE_MORPHTARGETS
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
#endif`,sE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cE=`#ifdef USE_NORMALMAP
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
#endif`,hE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_E=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ME=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,AE=`float getShadowMask() {
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
}`,CE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RE=`#ifdef USE_SKINNING
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
#endif`,bE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PE=`#ifdef USE_SKINNING
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
#endif`,LE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,IE=`#ifdef USE_TRANSMISSION
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
#endif`,FE=`#ifdef USE_TRANSMISSION
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
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GE=`uniform sampler2D t2D;
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
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,XE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`#include <common>
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
}`,YE=`#if DEPTH_PACKING == 3200
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
}`,$E=`#define DISTANCE
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
}`,KE=`#define DISTANCE
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
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`uniform float scale;
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
}`,e1=`uniform vec3 diffuse;
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
}`,t1=`#include <common>
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
}`,n1=`uniform vec3 diffuse;
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
}`,i1=`#define LAMBERT
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
}`,r1=`#define LAMBERT
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
}`,s1=`#define MATCAP
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
}`,o1=`#define MATCAP
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
}`,a1=`#define NORMAL
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
}`,l1=`#define NORMAL
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
}`,u1=`#define PHONG
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
}`,c1=`#define PHONG
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
}`,h1=`#define STANDARD
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
}`,f1=`#define STANDARD
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
}`,d1=`#define TOON
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
}`,p1=`#define TOON
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
}`,m1=`uniform float size;
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
}`,g1=`uniform vec3 diffuse;
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
}`,v1=`#include <common>
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
}`,_1=`uniform vec3 color;
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
}`,x1=`uniform float rotation;
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
}`,y1=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:GS,alphahash_pars_fragment:VS,alphamap_fragment:WS,alphamap_pars_fragment:XS,alphatest_fragment:jS,alphatest_pars_fragment:qS,aomap_fragment:YS,aomap_pars_fragment:$S,batching_pars_vertex:KS,batching_vertex:QS,begin_vertex:ZS,beginnormal_vertex:JS,bsdfs:eM,iridescence_fragment:tM,bumpmap_pars_fragment:nM,clipping_planes_fragment:iM,clipping_planes_pars_fragment:rM,clipping_planes_pars_vertex:sM,clipping_planes_vertex:oM,color_fragment:aM,color_pars_fragment:lM,color_pars_vertex:uM,color_vertex:cM,common:hM,cube_uv_reflection_fragment:fM,defaultnormal_vertex:dM,displacementmap_pars_vertex:pM,displacementmap_vertex:mM,emissivemap_fragment:gM,emissivemap_pars_fragment:vM,colorspace_fragment:_M,colorspace_pars_fragment:xM,envmap_fragment:yM,envmap_common_pars_fragment:SM,envmap_pars_fragment:MM,envmap_pars_vertex:EM,envmap_physical_pars_fragment:IM,envmap_vertex:TM,fog_vertex:wM,fog_pars_vertex:AM,fog_fragment:CM,fog_pars_fragment:RM,gradientmap_pars_fragment:bM,lightmap_fragment:PM,lightmap_pars_fragment:LM,lights_lambert_fragment:DM,lights_lambert_pars_fragment:UM,lights_pars_begin:NM,lights_toon_fragment:FM,lights_toon_pars_fragment:OM,lights_phong_fragment:kM,lights_phong_pars_fragment:zM,lights_physical_fragment:BM,lights_physical_pars_fragment:HM,lights_fragment_begin:GM,lights_fragment_maps:VM,lights_fragment_end:WM,logdepthbuf_fragment:XM,logdepthbuf_pars_fragment:jM,logdepthbuf_pars_vertex:qM,logdepthbuf_vertex:YM,map_fragment:$M,map_pars_fragment:KM,map_particle_fragment:QM,map_particle_pars_fragment:ZM,metalnessmap_fragment:JM,metalnessmap_pars_fragment:eE,morphcolor_vertex:tE,morphnormal_vertex:nE,morphtarget_pars_vertex:iE,morphtarget_vertex:rE,normal_fragment_begin:sE,normal_fragment_maps:oE,normal_pars_fragment:aE,normal_pars_vertex:lE,normal_vertex:uE,normalmap_pars_fragment:cE,clearcoat_normal_fragment_begin:hE,clearcoat_normal_fragment_maps:fE,clearcoat_pars_fragment:dE,iridescence_pars_fragment:pE,opaque_fragment:mE,packing:gE,premultiplied_alpha_fragment:vE,project_vertex:_E,dithering_fragment:xE,dithering_pars_fragment:yE,roughnessmap_fragment:SE,roughnessmap_pars_fragment:ME,shadowmap_pars_fragment:EE,shadowmap_pars_vertex:TE,shadowmap_vertex:wE,shadowmask_pars_fragment:AE,skinbase_vertex:CE,skinning_pars_vertex:RE,skinning_vertex:bE,skinnormal_vertex:PE,specularmap_fragment:LE,specularmap_pars_fragment:DE,tonemapping_fragment:UE,tonemapping_pars_fragment:NE,transmission_fragment:IE,transmission_pars_fragment:FE,uv_pars_fragment:OE,uv_pars_vertex:kE,uv_vertex:zE,worldpos_vertex:BE,background_vert:HE,background_frag:GE,backgroundCube_vert:VE,backgroundCube_frag:WE,cube_vert:XE,cube_frag:jE,depth_vert:qE,depth_frag:YE,distanceRGBA_vert:$E,distanceRGBA_frag:KE,equirect_vert:QE,equirect_frag:ZE,linedashed_vert:JE,linedashed_frag:e1,meshbasic_vert:t1,meshbasic_frag:n1,meshlambert_vert:i1,meshlambert_frag:r1,meshmatcap_vert:s1,meshmatcap_frag:o1,meshnormal_vert:a1,meshnormal_frag:l1,meshphong_vert:u1,meshphong_frag:c1,meshphysical_vert:h1,meshphysical_frag:f1,meshtoon_vert:d1,meshtoon_frag:p1,points_vert:m1,points_frag:g1,shadow_vert:v1,shadow_frag:_1,sprite_vert:x1,sprite_frag:y1},se={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ri={basic:{uniforms:Yt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Yt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Oe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Yt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Yt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Yt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Oe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Yt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Yt([se.points,se.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Yt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Yt([se.common,se.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Yt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Yt([se.sprite,se.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Yt([se.common,se.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Yt([se.lights,se.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ri.physical={uniforms:Yt([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Wa={r:0,b:0,g:0};function S1(n,e,t,i,r,s,o){const a=new Oe(0);let l=s===!0?0:1,u,h,f=null,d=0,p=null;function _(m,c){let v=!1,g=c.isScene===!0?c.background:null;g&&g.isTexture&&(g=(c.backgroundBlurriness>0?t:e).get(g)),g===null?x(a,l):g&&g.isColor&&(x(g,1),v=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===au)?(h===void 0&&(h=new je(new ai(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Hs(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,h.material.toneMapped=et.getTransfer(g.colorSpace)!==st,(f!==g||d!==g.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,f=g,d=g.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new je(new qn(2,2),new an({name:"BackgroundMaterial",uniforms:Hs(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=et.getTransfer(g.colorSpace)!==st,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||d!==g.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=g,d=g.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function x(m,c){m.getRGB(Wa,wv(n)),i.buffers.color.setClear(Wa.r,Wa.g,Wa.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(m,c=1){a.set(m),l=c,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:_}}function M1(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,h=!1;function f(D,b,N,W,P){let I=!1;if(o){const H=x(W,N,b);u!==H&&(u=H,p(u.object)),I=c(D,W,N,P),I&&v(D,W,N,P)}else{const H=b.wireframe===!0;(u.geometry!==W.id||u.program!==N.id||u.wireframe!==H)&&(u.geometry=W.id,u.program=N.id,u.wireframe=H,I=!0)}P!==null&&t.update(P,n.ELEMENT_ARRAY_BUFFER),(I||h)&&(h=!1,L(D,b,N,W),P!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function _(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function x(D,b,N){const W=N.wireframe===!0;let P=a[D.id];P===void 0&&(P={},a[D.id]=P);let I=P[b.id];I===void 0&&(I={},P[b.id]=I);let H=I[W];return H===void 0&&(H=m(d()),I[W]=H),H}function m(D){const b=[],N=[],W=[];for(let P=0;P<r;P++)b[P]=0,N[P]=0,W[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:N,attributeDivisors:W,object:D,attributes:{},index:null}}function c(D,b,N,W){const P=u.attributes,I=b.attributes;let H=0;const Y=N.getAttributes();for(const K in Y)if(Y[K].location>=0){const Q=P[K];let oe=I[K];if(oe===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),Q===void 0||Q.attribute!==oe||oe&&Q.data!==oe.data)return!0;H++}return u.attributesNum!==H||u.index!==W}function v(D,b,N,W){const P={},I=b.attributes;let H=0;const Y=N.getAttributes();for(const K in Y)if(Y[K].location>=0){let Q=I[K];Q===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));const oe={};oe.attribute=Q,Q&&Q.data&&(oe.data=Q.data),P[K]=oe,H++}u.attributes=P,u.attributesNum=H,u.index=W}function g(){const D=u.newAttributes;for(let b=0,N=D.length;b<N;b++)D[b]=0}function S(D){R(D,0)}function R(D,b){const N=u.newAttributes,W=u.enabledAttributes,P=u.attributeDivisors;N[D]=1,W[D]===0&&(n.enableVertexAttribArray(D),W[D]=1),P[D]!==b&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,b),P[D]=b)}function A(){const D=u.newAttributes,b=u.enabledAttributes;for(let N=0,W=b.length;N<W;N++)b[N]!==D[N]&&(n.disableVertexAttribArray(N),b[N]=0)}function T(D,b,N,W,P,I,H){H===!0?n.vertexAttribIPointer(D,b,N,P,I):n.vertexAttribPointer(D,b,N,W,P,I)}function L(D,b,N,W){if(i.isWebGL2===!1&&(D.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const P=W.attributes,I=N.getAttributes(),H=b.defaultAttributeValues;for(const Y in I){const K=I[Y];if(K.location>=0){let O=P[Y];if(O===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(O=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(O=D.instanceColor)),O!==void 0){const Q=O.normalized,oe=O.itemSize,ge=t.get(O);if(ge===void 0)continue;const ve=ge.buffer,Ue=ge.type,ae=ge.bytesPerElement,Se=i.isWebGL2===!0&&(Ue===n.INT||Ue===n.UNSIGNED_INT||O.gpuType===av);if(O.isInterleavedBufferAttribute){const Ae=O.data,G=Ae.stride,Qe=O.offset;if(Ae.isInstancedInterleavedBuffer){for(let Me=0;Me<K.locationSize;Me++)R(K.location+Me,Ae.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Me=0;Me<K.locationSize;Me++)S(K.location+Me);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let Me=0;Me<K.locationSize;Me++)T(K.location+Me,oe/K.locationSize,Ue,Q,G*ae,(Qe+oe/K.locationSize*Me)*ae,Se)}else{if(O.isInstancedBufferAttribute){for(let Ae=0;Ae<K.locationSize;Ae++)R(K.location+Ae,O.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let Ae=0;Ae<K.locationSize;Ae++)S(K.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let Ae=0;Ae<K.locationSize;Ae++)T(K.location+Ae,oe/K.locationSize,Ue,Q,oe*ae,oe/K.locationSize*Ae*ae,Se)}}else if(H!==void 0){const Q=H[Y];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(K.location,Q);break;case 3:n.vertexAttrib3fv(K.location,Q);break;case 4:n.vertexAttrib4fv(K.location,Q);break;default:n.vertexAttrib1fv(K.location,Q)}}}}A()}function y(){z();for(const D in a){const b=a[D];for(const N in b){const W=b[N];for(const P in W)_(W[P].object),delete W[P];delete b[N]}delete a[D]}}function E(D){if(a[D.id]===void 0)return;const b=a[D.id];for(const N in b){const W=b[N];for(const P in W)_(W[P].object),delete W[P];delete b[N]}delete a[D.id]}function F(D){for(const b in a){const N=a[b];if(N[D.id]===void 0)continue;const W=N[D.id];for(const P in W)_(W[P].object),delete W[P];delete N[D.id]}}function z(){Z(),h=!0,u!==l&&(u=l,p(u.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:z,resetDefaultState:Z,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:F,initAttributes:g,enableAttribute:S,disableUnusedAttributes:A}}function E1(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}function a(h,f){n.drawArrays(s,h,f),t.update(f,s,1)}function l(h,f,d){if(d===0)return;let p,_;if(r)p=n,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,h,f,d),t.update(f,s,d)}function u(h,f,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d;_++)this.render(h[_],f[_]);else{p.multiDrawArraysWEBGL(s,h,0,f,0,d);let _=0;for(let x=0;x<d;x++)_+=f[x];t.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function T1(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),c=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,S=o||e.has("OES_texture_float"),R=g&&S,A=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:m,maxVaryings:c,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:A}}function w1(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new yr,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,c=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?h(null):u();else{const v=s?0:i,g=v*4;let S=c.clippingState||null;l.value=S,S=h(_,d,g,p);for(let R=0;R!==g;++R)S[R]=t[R];c.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,p,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const c=p+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<c)&&(m=new Float32Array(c));for(let g=0,S=p;g!==x;++g,S+=4)o.copy(f[g]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function A1(n){let e=new WeakMap;function t(o,a){return a===xh?o.mapping=ks:a===yh&&(o.mapping=zs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===xh||a===yh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new bv(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Lf extends Av{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _s=4,$p=[.125,.215,.35,.446,.526,.582],Er=20,dc=new Lf,Kp=new Oe;let pc=null,mc=0,gc=0;const Sr=(1+Math.sqrt(5))/2,rs=1/Sr,Qp=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Sr,rs),new B(0,Sr,-rs),new B(rs,0,Sr),new B(-rs,0,Sr),new B(Sr,rs,0),new B(-Sr,rs,0)];class Zp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pc,mc,gc),e.scissorTest=!1,Xa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ks||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:ci,format:Qn,colorSpace:Di,depthBuffer:!1},r=Jp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jp(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=C1(s)),this._blurMaterial=R1(s,e,t)}return r}_compileMaterial(e){const t=new je(this._lodPlanes[0],e);this._renderer.compile(t,dc)}_sceneToCubeUV(e,t,i,r){const a=new Dn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Kp),h.toneMapping=nr,h.autoClear=!1;const p=new Cn({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),_=new je(new ai,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Kp),x=!0);for(let c=0;c<6;c++){const v=c%3;v===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):v===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const g=this._cubeSize;Xa(r,v*g,c>2?g:0,g,g),h.setRenderTarget(r),x&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ks||e.mapping===zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=em());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new je(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Xa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,dc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Qp[(r-1)%Qp.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new je(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Er-1),x=s/_,m=isFinite(s)?1+Math.floor(h*x):Er;m>Er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Er}`);const c=[];let v=0;for(let T=0;T<Er;++T){const L=T/x,y=Math.exp(-L*L/2);c.push(y),T===0?v+=y:T<m&&(v+=2*y)}for(let T=0;T<c.length;T++)c[T]=c[T]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=c,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=_,d.mipInt.value=g-i;const S=this._sizeLods[r],R=3*S*(r>g-_s?r-g+_s:0),A=4*(this._cubeSize-S);Xa(t,R,A,3*S,2*S),l.setRenderTarget(t),l.render(f,dc)}}function C1(n){const e=[],t=[],i=[];let r=n;const s=n-_s+1+$p.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-_s?l=$p[o-n+_s-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),h=-u,f=1+u,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,_=6,x=3,m=2,c=1,v=new Float32Array(x*_*p),g=new Float32Array(m*_*p),S=new Float32Array(c*_*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,L=A>2?0:-1,y=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];v.set(y,x*_*A),g.set(d,m*_*A);const E=[A,A,A,A,A,A];S.set(E,c*_*A)}const R=new en;R.setAttribute("position",new kn(v,x)),R.setAttribute("uv",new kn(g,m)),R.setAttribute("faceIndex",new kn(S,c)),e.push(R),r>_s&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Jp(n,e,t){const i=new On(n,e,t);return i.texture.mapping=au,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function R1(n,e,t){const i=new Float32Array(Er),r=new B(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Df(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function em(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Df(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function tm(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Df(){return`

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
	`}function b1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===xh||l===yh,h=l===ks||l===zs;if(u||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Zp(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||h&&f&&r(f)){t===null&&(t=new Zp(n));const d=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function P1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function L1(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let m=0,c=x.length;m<c;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,c=x.length;m<c;m++)e.update(x[m],n.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,_=f.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let g=0,S=v.length;g<S;g+=3){const R=v[g+0],A=v[g+1],T=v[g+2];d.push(R,A,A,T,T,R)}}else if(_!==void 0){const v=_.array;x=_.version;for(let g=0,S=v.length/3-1;g<S;g+=3){const R=g+0,A=g+1,T=g+2;d.push(R,A,A,T,T,R)}}else return;const m=new(gv(d)?Tv:Ev)(d,1);m.version=x;const c=s.get(f);c&&e.remove(c),s.set(f,m)}function h(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function D1(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function h(p,_){n.drawElements(s,_,a,p*l),t.update(_,s,1)}function f(p,_,x){if(x===0)return;let m,c;if(r)m=n,c="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[c](s,_,a,p*l,x),t.update(_,s,x)}function d(p,_,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let c=0;c<x;c++)this.render(p[c]/l,_[c]);else{m.multiDrawElementsWEBGL(s,_,0,a,p,0,x);let c=0;for(let v=0;v<x;v++)c+=_[v];t.update(c,s,1)}}this.setMode=o,this.setIndex=u,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function U1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function N1(n,e){return n[0]-e[0]}function I1(n,e){return Math.abs(e[1])-Math.abs(n[1])}function F1(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Nt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,h,f){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=p!==void 0?p.length:0;let x=s.get(h);if(x===void 0||x.count!==_){let D=function(){z.dispose(),s.delete(h),h.removeEventListener("dispose",D)};x!==void 0&&x.texture.dispose();const v=h.morphAttributes.position!==void 0,g=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let L=0;v===!0&&(L=1),g===!0&&(L=2),S===!0&&(L=3);let y=h.attributes.position.count*L,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const F=new Float32Array(y*E*4*_),z=new xv(F,y,E,_);z.type=qi,z.needsUpdate=!0;const Z=L*4;for(let b=0;b<_;b++){const N=R[b],W=A[b],P=T[b],I=y*E*4*b;for(let H=0;H<N.count;H++){const Y=H*Z;v===!0&&(o.fromBufferAttribute(N,H),F[I+Y+0]=o.x,F[I+Y+1]=o.y,F[I+Y+2]=o.z,F[I+Y+3]=0),g===!0&&(o.fromBufferAttribute(W,H),F[I+Y+4]=o.x,F[I+Y+5]=o.y,F[I+Y+6]=o.z,F[I+Y+7]=0),S===!0&&(o.fromBufferAttribute(P,H),F[I+Y+8]=o.x,F[I+Y+9]=o.y,F[I+Y+10]=o.z,F[I+Y+11]=P.itemSize===4?o.w:1)}}x={count:_,texture:z,size:new Pe(y,E)},s.set(h,x),h.addEventListener("dispose",D)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];const c=h.morphTargetsRelative?1:1-m;f.getUniforms().setValue(n,"morphTargetBaseInfluence",c),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{const p=d===void 0?0:d.length;let _=i[h.id];if(_===void 0||_.length!==p){_=[];for(let g=0;g<p;g++)_[g]=[g,0];i[h.id]=_}for(let g=0;g<p;g++){const S=_[g];S[0]=g,S[1]=d[g]}_.sort(I1);for(let g=0;g<8;g++)g<p&&_[g][1]?(a[g][0]=_[g][0],a[g][1]=_[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort(N1);const x=h.morphAttributes.position,m=h.morphAttributes.normal;let c=0;for(let g=0;g<8;g++){const S=a[g],R=S[0],A=S[1];R!==Number.MAX_SAFE_INTEGER&&A?(x&&h.getAttribute("morphTarget"+g)!==x[R]&&h.setAttribute("morphTarget"+g,x[R]),m&&h.getAttribute("morphNormal"+g)!==m[R]&&h.setAttribute("morphNormal"+g,m[R]),r[g]=A,c+=A):(x&&h.hasAttribute("morphTarget"+g)===!0&&h.deleteAttribute("morphTarget"+g),m&&h.hasAttribute("morphNormal"+g)===!0&&h.deleteAttribute("morphNormal"+g),r[g]=0)}const v=h.morphTargetsRelative?1:1-c;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function O1(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class Lv extends fn{constructor(e,t,i,r,s,o,a,l,u,h){if(h=h!==void 0?h:Pr,h!==Pr&&h!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Pr&&(i=ji),i===void 0&&h===Bs&&(i=br),super(null,r,s,o,a,l,h,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Dv=new fn,Uv=new Lv(1,1);Uv.compareFunction=mv;const Nv=new xv,Iv=new TS,Fv=new Rv,nm=[],im=[],rm=new Float32Array(16),sm=new Float32Array(9),om=new Float32Array(4);function Ys(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=nm[r];if(s===void 0&&(s=new Float32Array(r),nm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function cu(n,e){let t=im[e];t===void 0&&(t=new Int32Array(e),im[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function k1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function z1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function B1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function H1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function G1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;om.set(i),n.uniformMatrix2fv(this.addr,!1,om),Rt(t,i)}}function V1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;sm.set(i),n.uniformMatrix3fv(this.addr,!1,sm),Rt(t,i)}}function W1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,i))return;rm.set(i),n.uniformMatrix4fv(this.addr,!1,rm),Rt(t,i)}}function X1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function j1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function q1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function Y1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function $1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function K1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function Q1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function Z1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function J1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Uv:Dv;t.setTexture2D(e||s,r)}function eT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Iv,r)}function tT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Fv,r)}function nT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Nv,r)}function iT(n){switch(n){case 5126:return k1;case 35664:return z1;case 35665:return B1;case 35666:return H1;case 35674:return G1;case 35675:return V1;case 35676:return W1;case 5124:case 35670:return X1;case 35667:case 35671:return j1;case 35668:case 35672:return q1;case 35669:case 35673:return Y1;case 5125:return $1;case 36294:return K1;case 36295:return Q1;case 36296:return Z1;case 35678:case 36198:case 36298:case 36306:case 35682:return J1;case 35679:case 36299:case 36307:return eT;case 35680:case 36300:case 36308:case 36293:return tT;case 36289:case 36303:case 36311:case 36292:return nT}}function rT(n,e){n.uniform1fv(this.addr,e)}function sT(n,e){const t=Ys(e,this.size,2);n.uniform2fv(this.addr,t)}function oT(n,e){const t=Ys(e,this.size,3);n.uniform3fv(this.addr,t)}function aT(n,e){const t=Ys(e,this.size,4);n.uniform4fv(this.addr,t)}function lT(n,e){const t=Ys(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function uT(n,e){const t=Ys(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function cT(n,e){const t=Ys(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function hT(n,e){n.uniform1iv(this.addr,e)}function fT(n,e){n.uniform2iv(this.addr,e)}function dT(n,e){n.uniform3iv(this.addr,e)}function pT(n,e){n.uniform4iv(this.addr,e)}function mT(n,e){n.uniform1uiv(this.addr,e)}function gT(n,e){n.uniform2uiv(this.addr,e)}function vT(n,e){n.uniform3uiv(this.addr,e)}function _T(n,e){n.uniform4uiv(this.addr,e)}function xT(n,e,t){const i=this.cache,r=e.length,s=cu(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Dv,s[o])}function yT(n,e,t){const i=this.cache,r=e.length,s=cu(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Iv,s[o])}function ST(n,e,t){const i=this.cache,r=e.length,s=cu(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Fv,s[o])}function MT(n,e,t){const i=this.cache,r=e.length,s=cu(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Nv,s[o])}function ET(n){switch(n){case 5126:return rT;case 35664:return sT;case 35665:return oT;case 35666:return aT;case 35674:return lT;case 35675:return uT;case 35676:return cT;case 5124:case 35670:return hT;case 35667:case 35671:return fT;case 35668:case 35672:return dT;case 35669:case 35673:return pT;case 5125:return mT;case 36294:return gT;case 36295:return vT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return xT;case 35679:case 36299:case 36307:return yT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return MT}}class TT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=iT(t.type)}}class wT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ET(t.type)}}class AT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const vc=/(\w+)(\])?(\[|\.)?/g;function am(n,e){n.seq.push(e),n.map[e.id]=e}function CT(n,e,t){const i=n.name,r=i.length;for(vc.lastIndex=0;;){const s=vc.exec(i),o=vc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){am(t,u===void 0?new TT(a,n,e):new wT(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new AT(a),am(t,f)),t=f}}}class ll{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);CT(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function lm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const RT=37297;let bT=0;function PT(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function LT(n){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(n);let i;switch(e===t?i="":e===Hl&&t===Bl?i="LinearDisplayP3ToLinearSRGB":e===Bl&&t===Hl&&(i="LinearSRGBToLinearDisplayP3"),n){case Di:case lu:return[i,"LinearTransferOETF"];case Ut:case bf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function um(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+PT(n.getShaderSource(e),o)}else return r}function DT(n,e){const t=LT(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function UT(n,e){let t;switch(e){case nv:t="Linear";break;case iv:t="Reinhard";break;case rv:t="OptimizedCineon";break;case Af:t="ACESFilmic";break;case sv:t="AgX";break;case Zy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function NT(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xs).join(`
`)}function IT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(xs).join(`
`)}function FT(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function OT(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function xs(n){return n!==""}function cm(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kT=/^[ \t]*#include +<([\w\d./]+)>/gm;function wh(n){return n.replace(kT,BT)}const zT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function BT(n,e){let t=ze[e];if(t===void 0){const i=zT.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wh(t)}const HT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fm(n){return n.replace(HT,GT)}function GT(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function dm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function VT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ev?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===tv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function WT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ks:case zs:e="ENVMAP_TYPE_CUBE";break;case au:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case zs:e="ENVMAP_MODE_REFRACTION";break}return e}function jT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wf:e="ENVMAP_BLENDING_MULTIPLY";break;case Ky:e="ENVMAP_BLENDING_MIX";break;case Qy:e="ENVMAP_BLENDING_ADD";break}return e}function qT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function YT(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=VT(t),u=WT(t),h=XT(t),f=jT(t),d=qT(t),p=t.isWebGL2?"":NT(t),_=IT(t),x=FT(s),m=r.createProgram();let c,v,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(xs).join(`
`),c.length>0&&(c+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(xs).join(`
`),v.length>0&&(v+=`
`)):(c=[dm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),v=[p,dm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nr?"#define TONE_MAPPING":"",t.toneMapping!==nr?ze.tonemapping_pars_fragment:"",t.toneMapping!==nr?UT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,DT("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xs).join(`
`)),o=wh(o),o=cm(o,t),o=hm(o,t),a=wh(a),a=cm(a,t),a=hm(a,t),o=fm(o),a=fm(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,c=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Lp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const S=g+c+o,R=g+v+a,A=lm(r,r.VERTEX_SHADER,S),T=lm(r,r.FRAGMENT_SHADER,R);r.attachShader(m,A),r.attachShader(m,T),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function L(z){if(n.debug.checkShaderErrors){const Z=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(A).trim(),b=r.getShaderInfoLog(T).trim();let N=!0,W=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,A,T);else{const P=um(r,A,"vertex"),I=um(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+P+`
`+I)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(D===""||b==="")&&(W=!1);W&&(z.diagnostics={runnable:N,programLog:Z,vertexShader:{log:D,prefix:c},fragmentShader:{log:b,prefix:v}})}r.deleteShader(A),r.deleteShader(T),y=new ll(r,m),E=OT(r,m)}let y;this.getUniforms=function(){return y===void 0&&L(this),y};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(m,RT)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bT++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=T,this}let $T=0;class KT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new QT(e),t.set(e,i)),i}}class QT{constructor(e){this.id=$T++,this.code=e,this.usedTimes=0}}function ZT(n,e,t,i,r,s,o){const a=new Sv,l=new KT,u=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function m(y,E,F,z,Z){const D=z.fog,b=Z.geometry,N=y.isMeshStandardMaterial?z.environment:null,W=(y.isMeshStandardMaterial?t:e).get(y.envMap||N),P=W&&W.mapping===au?W.image.height:null,I=_[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const H=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,Y=H!==void 0?H.length:0;let K=0;b.morphAttributes.position!==void 0&&(K=1),b.morphAttributes.normal!==void 0&&(K=2),b.morphAttributes.color!==void 0&&(K=3);let O,Q,oe,ge;if(I){const jt=ri[I];O=jt.vertexShader,Q=jt.fragmentShader}else O=y.vertexShader,Q=y.fragmentShader,l.update(y),oe=l.getVertexShaderID(y),ge=l.getFragmentShaderID(y);const ve=n.getRenderTarget(),Ue=Z.isInstancedMesh===!0,ae=Z.isBatchedMesh===!0,Se=!!y.map,Ae=!!y.matcap,G=!!W,Qe=!!y.aoMap,Me=!!y.lightMap,we=!!y.bumpMap,pe=!!y.normalMap,Ye=!!y.displacementMap,_e=!!y.emissiveMap,C=!!y.metalnessMap,M=!!y.roughnessMap,V=y.anisotropy>0,te=y.clearcoat>0,ee=y.iridescence>0,ie=y.sheen>0,ye=y.transmission>0,le=V&&!!y.anisotropyMap,me=te&&!!y.clearcoatMap,he=te&&!!y.clearcoatNormalMap,Ne=te&&!!y.clearcoatRoughnessMap,J=ee&&!!y.iridescenceMap,$e=ee&&!!y.iridescenceThicknessMap,Be=ie&&!!y.sheenColorMap,be=ie&&!!y.sheenRoughnessMap,Ee=!!y.specularMap,xe=!!y.specularColorMap,ke=!!y.specularIntensityMap,Je=ye&&!!y.transmissionMap,gt=ye&&!!y.thicknessMap,Ge=!!y.gradientMap,re=!!y.alphaMap,U=y.alphaTest>0,ue=!!y.alphaHash,ce=!!y.extensions,Le=!!b.attributes.uv1,Ce=!!b.attributes.uv2,nt=!!b.attributes.uv3;let it=nr;return y.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(it=n.toneMapping),{isWebGL2:h,shaderID:I,shaderType:y.type,shaderName:y.name,vertexShader:O,fragmentShader:Q,defines:y.defines,customVertexShaderID:oe,customFragmentShaderID:ge,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:ae,instancing:Ue,instancingColor:Ue&&Z.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Di,map:Se,matcap:Ae,envMap:G,envMapMode:G&&W.mapping,envMapCubeUVHeight:P,aoMap:Qe,lightMap:Me,bumpMap:we,normalMap:pe,displacementMap:d&&Ye,emissiveMap:_e,normalMapObjectSpace:pe&&y.normalMapType===cS,normalMapTangentSpace:pe&&y.normalMapType===Rf,metalnessMap:C,roughnessMap:M,anisotropy:V,anisotropyMap:le,clearcoat:te,clearcoatMap:me,clearcoatNormalMap:he,clearcoatRoughnessMap:Ne,iridescence:ee,iridescenceMap:J,iridescenceThicknessMap:$e,sheen:ie,sheenColorMap:Be,sheenRoughnessMap:be,specularMap:Ee,specularColorMap:xe,specularIntensityMap:ke,transmission:ye,transmissionMap:Je,thicknessMap:gt,gradientMap:Ge,opaque:y.transparent===!1&&y.blending===Rs,alphaMap:re,alphaTest:U,alphaHash:ue,combine:y.combine,mapUv:Se&&x(y.map.channel),aoMapUv:Qe&&x(y.aoMap.channel),lightMapUv:Me&&x(y.lightMap.channel),bumpMapUv:we&&x(y.bumpMap.channel),normalMapUv:pe&&x(y.normalMap.channel),displacementMapUv:Ye&&x(y.displacementMap.channel),emissiveMapUv:_e&&x(y.emissiveMap.channel),metalnessMapUv:C&&x(y.metalnessMap.channel),roughnessMapUv:M&&x(y.roughnessMap.channel),anisotropyMapUv:le&&x(y.anisotropyMap.channel),clearcoatMapUv:me&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:be&&x(y.sheenRoughnessMap.channel),specularMapUv:Ee&&x(y.specularMap.channel),specularColorMapUv:xe&&x(y.specularColorMap.channel),specularIntensityMapUv:ke&&x(y.specularIntensityMap.channel),transmissionMapUv:Je&&x(y.transmissionMap.channel),thicknessMapUv:gt&&x(y.thicknessMap.channel),alphaMapUv:re&&x(y.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(pe||V),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,vertexUv1s:Le,vertexUv2s:Ce,vertexUv3s:nt,pointsUvs:Z.isPoints===!0&&!!b.attributes.uv&&(Se||re),fog:!!D,useFog:y.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Z.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:K,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:it,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Se&&y.map.isVideoTexture===!0&&et.getTransfer(y.map.colorSpace)===st,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===sn,flipSided:y.side===hn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ce&&y.extensions.derivatives===!0,extensionFragDepth:ce&&y.extensions.fragDepth===!0,extensionDrawBuffers:ce&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function c(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const F in y.defines)E.push(F),E.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(v(E,y),g(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function v(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function g(y,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function S(y){const E=_[y.type];let F;if(E){const z=ri[E];F=Yo.clone(z.uniforms)}else F=y.uniforms;return F}function R(y,E){let F;for(let z=0,Z=u.length;z<Z;z++){const D=u[z];if(D.cacheKey===E){F=D,++F.usedTimes;break}}return F===void 0&&(F=new YT(n,E,y,s),u.push(F)),F}function A(y){if(--y.usedTimes===0){const E=u.indexOf(y);u[E]=u[u.length-1],u.pop(),y.destroy()}}function T(y){l.remove(y)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:S,acquireProgram:R,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:L}}function JT(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function ew(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function pm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mm(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,p,_,x,m){let c=n[e];return c===void 0?(c={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},n[e]=c):(c.id=f.id,c.object=f,c.geometry=d,c.material=p,c.groupOrder=_,c.renderOrder=f.renderOrder,c.z=x,c.group=m),e++,c}function a(f,d,p,_,x,m){const c=o(f,d,p,_,x,m);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):t.push(c)}function l(f,d,p,_,x,m){const c=o(f,d,p,_,x,m);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):t.unshift(c)}function u(f,d){t.length>1&&t.sort(f||ew),i.length>1&&i.sort(d||pm),r.length>1&&r.sort(d||pm)}function h(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:u}}function tw(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new mm,n.set(i,[o])):r>=s.length?(o=new mm,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function nw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Oe};break;case"SpotLight":t={position:new B,direction:new B,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function iw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let rw=0;function sw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ow(n,e){const t=new nw,i=iw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new B);const s=new B,o=new pt,a=new pt;function l(h,f){let d=0,p=0,_=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let x=0,m=0,c=0,v=0,g=0,S=0,R=0,A=0,T=0,L=0,y=0;h.sort(sw);const E=f===!0?Math.PI:1;for(let z=0,Z=h.length;z<Z;z++){const D=h[z],b=D.color,N=D.intensity,W=D.distance,P=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=b.r*N*E,p+=b.g*N*E,_+=b.b*N*E;else if(D.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(D.sh.coefficients[I],N);y++}else if(D.isDirectionalLight){const I=t.get(D);if(I.color.copy(D.color).multiplyScalar(D.intensity*E),D.castShadow){const H=D.shadow,Y=i.get(D);Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,r.directionalShadow[x]=Y,r.directionalShadowMap[x]=P,r.directionalShadowMatrix[x]=D.shadow.matrix,S++}r.directional[x]=I,x++}else if(D.isSpotLight){const I=t.get(D);I.position.setFromMatrixPosition(D.matrixWorld),I.color.copy(b).multiplyScalar(N*E),I.distance=W,I.coneCos=Math.cos(D.angle),I.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),I.decay=D.decay,r.spot[c]=I;const H=D.shadow;if(D.map&&(r.spotLightMap[T]=D.map,T++,H.updateMatrices(D),D.castShadow&&L++),r.spotLightMatrix[c]=H.matrix,D.castShadow){const Y=i.get(D);Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,r.spotShadow[c]=Y,r.spotShadowMap[c]=P,A++}c++}else if(D.isRectAreaLight){const I=t.get(D);I.color.copy(b).multiplyScalar(N),I.halfWidth.set(D.width*.5,0,0),I.halfHeight.set(0,D.height*.5,0),r.rectArea[v]=I,v++}else if(D.isPointLight){const I=t.get(D);if(I.color.copy(D.color).multiplyScalar(D.intensity*E),I.distance=D.distance,I.decay=D.decay,D.castShadow){const H=D.shadow,Y=i.get(D);Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,Y.shadowCameraNear=H.camera.near,Y.shadowCameraFar=H.camera.far,r.pointShadow[m]=Y,r.pointShadowMap[m]=P,r.pointShadowMatrix[m]=D.shadow.matrix,R++}r.point[m]=I,m++}else if(D.isHemisphereLight){const I=t.get(D);I.skyColor.copy(D.color).multiplyScalar(N*E),I.groundColor.copy(D.groundColor).multiplyScalar(N*E),r.hemi[g]=I,g++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=_;const F=r.hash;(F.directionalLength!==x||F.pointLength!==m||F.spotLength!==c||F.rectAreaLength!==v||F.hemiLength!==g||F.numDirectionalShadows!==S||F.numPointShadows!==R||F.numSpotShadows!==A||F.numSpotMaps!==T||F.numLightProbes!==y)&&(r.directional.length=x,r.spot.length=c,r.rectArea.length=v,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=A+T-L,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=y,F.directionalLength=x,F.pointLength=m,F.spotLength=c,F.rectAreaLength=v,F.hemiLength=g,F.numDirectionalShadows=S,F.numPointShadows=R,F.numSpotShadows=A,F.numSpotMaps=T,F.numLightProbes=y,r.version=rw++)}function u(h,f){let d=0,p=0,_=0,x=0,m=0;const c=f.matrixWorldInverse;for(let v=0,g=h.length;v<g;v++){const S=h[v];if(S.isDirectionalLight){const R=r.directional[d];R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(c),d++}else if(S.isSpotLight){const R=r.spot[_];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(c),R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(c),_++}else if(S.isRectAreaLight){const R=r.rectArea[x];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(c),a.identity(),o.copy(S.matrixWorld),o.premultiply(c),a.extractRotation(o),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){const R=r.point[p];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(c),p++}else if(S.isHemisphereLight){const R=r.hemi[m];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(c),m++}}}return{setup:l,setupView:u,state:r}}function gm(n,e){const t=new ow(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function aw(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new gm(n,e),t.set(s,[l])):o>=a.length?(l=new gm(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class lw extends Hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uw extends Hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hw=`uniform sampler2D shadow_pass;
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
}`;function fw(n,e,t){let i=new Pf;const r=new Pe,s=new Pe,o=new Nt,a=new lw({depthPacking:uS}),l=new uw,u={},h=t.maxTextureSize,f={[or]:hn,[hn]:or,[sn]:sn},d=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:cw,fragmentShader:hw}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new en;_.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new je(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ev;let c=this.type;this.render=function(A,T,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=n.getRenderTarget(),E=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Ai),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const Z=c!==vi&&this.type===vi,D=c===vi&&this.type!==vi;for(let b=0,N=A.length;b<N;b++){const W=A[b],P=W.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const I=P.getFrameExtents();if(r.multiply(I),s.copy(P.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/I.x),r.x=s.x*I.x,P.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/I.y),r.y=s.y*I.y,P.mapSize.y=s.y)),P.map===null||Z===!0||D===!0){const Y=this.type!==vi?{minFilter:Kt,magFilter:Kt}:{};P.map!==null&&P.map.dispose(),P.map=new On(r.x,r.y,Y),P.map.texture.name=W.name+".shadowMap",P.camera.updateProjectionMatrix()}n.setRenderTarget(P.map),n.clear();const H=P.getViewportCount();for(let Y=0;Y<H;Y++){const K=P.getViewport(Y);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),z.viewport(o),P.updateMatrices(W,Y),i=P.getFrustum(),S(T,L,P.camera,W,this.type)}P.isPointLightShadow!==!0&&this.type===vi&&v(P,L),P.needsUpdate=!1}c=this.type,m.needsUpdate=!1,n.setRenderTarget(y,E,F)};function v(A,T){const L=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new On(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,L,d,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,L,p,x,null)}function g(A,T,L,y){let E=null;const F=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(F!==void 0)E=F;else if(E=L.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const z=E.uuid,Z=T.uuid;let D=u[z];D===void 0&&(D={},u[z]=D);let b=D[Z];b===void 0&&(b=E.clone(),D[Z]=b,T.addEventListener("dispose",R)),E=b}if(E.visible=T.visible,E.wireframe=T.wireframe,y===vi?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:f[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const z=n.properties.get(E);z.light=L}return E}function S(A,T,L,y,E){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===vi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const Z=e.update(A),D=A.material;if(Array.isArray(D)){const b=Z.groups;for(let N=0,W=b.length;N<W;N++){const P=b[N],I=D[P.materialIndex];if(I&&I.visible){const H=g(A,I,y,E);A.onBeforeShadow(n,A,T,L,Z,H,P),n.renderBufferDirect(L,null,Z,H,A,P),A.onAfterShadow(n,A,T,L,Z,H,P)}}}else if(D.visible){const b=g(A,D,y,E);A.onBeforeShadow(n,A,T,L,Z,b,null),n.renderBufferDirect(L,null,Z,b,A,null),A.onAfterShadow(n,A,T,L,Z,b,null)}}const z=A.children;for(let Z=0,D=z.length;Z<D;Z++)S(z[Z],T,L,y,E)}function R(A){A.target.removeEventListener("dispose",R);for(const L in u){const y=u[L],E=A.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}function dw(n,e,t){const i=t.isWebGL2;function r(){let U=!1;const ue=new Nt;let ce=null;const Le=new Nt(0,0,0,0);return{setMask:function(Ce){ce!==Ce&&!U&&(n.colorMask(Ce,Ce,Ce,Ce),ce=Ce)},setLocked:function(Ce){U=Ce},setClear:function(Ce,nt,it,bt,jt){jt===!0&&(Ce*=bt,nt*=bt,it*=bt),ue.set(Ce,nt,it,bt),Le.equals(ue)===!1&&(n.clearColor(Ce,nt,it,bt),Le.copy(ue))},reset:function(){U=!1,ce=null,Le.set(-1,0,0,0)}}}function s(){let U=!1,ue=null,ce=null,Le=null;return{setTest:function(Ce){Ce?ae(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(Ce){ue!==Ce&&!U&&(n.depthMask(Ce),ue=Ce)},setFunc:function(Ce){if(ce!==Ce){switch(Ce){case Vy:n.depthFunc(n.NEVER);break;case Wy:n.depthFunc(n.ALWAYS);break;case Xy:n.depthFunc(n.LESS);break;case Ol:n.depthFunc(n.LEQUAL);break;case jy:n.depthFunc(n.EQUAL);break;case qy:n.depthFunc(n.GEQUAL);break;case Yy:n.depthFunc(n.GREATER);break;case $y:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=Ce}},setLocked:function(Ce){U=Ce},setClear:function(Ce){Le!==Ce&&(n.clearDepth(Ce),Le=Ce)},reset:function(){U=!1,ue=null,ce=null,Le=null}}}function o(){let U=!1,ue=null,ce=null,Le=null,Ce=null,nt=null,it=null,bt=null,jt=null;return{setTest:function(rt){U||(rt?ae(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(rt){ue!==rt&&!U&&(n.stencilMask(rt),ue=rt)},setFunc:function(rt,qt,ti){(ce!==rt||Le!==qt||Ce!==ti)&&(n.stencilFunc(rt,qt,ti),ce=rt,Le=qt,Ce=ti)},setOp:function(rt,qt,ti){(nt!==rt||it!==qt||bt!==ti)&&(n.stencilOp(rt,qt,ti),nt=rt,it=qt,bt=ti)},setLocked:function(rt){U=rt},setClear:function(rt){jt!==rt&&(n.clearStencil(rt),jt=rt)},reset:function(){U=!1,ue=null,ce=null,Le=null,Ce=null,nt=null,it=null,bt=null,jt=null}}}const a=new r,l=new s,u=new o,h=new WeakMap,f=new WeakMap;let d={},p={},_=new WeakMap,x=[],m=null,c=!1,v=null,g=null,S=null,R=null,A=null,T=null,L=null,y=new Oe(0,0,0),E=0,F=!1,z=null,Z=null,D=null,b=null,N=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,I=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(H)[1]),P=I>=1):H.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),P=I>=2);let Y=null,K={};const O=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),oe=new Nt().fromArray(O),ge=new Nt().fromArray(Q);function ve(U,ue,ce,Le){const Ce=new Uint8Array(4),nt=n.createTexture();n.bindTexture(U,nt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let it=0;it<ce;it++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(ue,0,n.RGBA,1,1,Le,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(ue+it,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return nt}const Ue={};Ue[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),Ue[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ue[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ue[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ae(n.DEPTH_TEST),l.setFunc(Ol),_e(!1),C(Zd),ae(n.CULL_FACE),pe(Ai);function ae(U){d[U]!==!0&&(n.enable(U),d[U]=!0)}function Se(U){d[U]!==!1&&(n.disable(U),d[U]=!1)}function Ae(U,ue){return p[U]!==ue?(n.bindFramebuffer(U,ue),p[U]=ue,i&&(U===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ue),U===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ue)),!0):!1}function G(U,ue){let ce=x,Le=!1;if(U)if(ce=_.get(ue),ce===void 0&&(ce=[],_.set(ue,ce)),U.isWebGLMultipleRenderTargets){const Ce=U.texture;if(ce.length!==Ce.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let nt=0,it=Ce.length;nt<it;nt++)ce[nt]=n.COLOR_ATTACHMENT0+nt;ce.length=Ce.length,Le=!0}}else ce[0]!==n.COLOR_ATTACHMENT0&&(ce[0]=n.COLOR_ATTACHMENT0,Le=!0);else ce[0]!==n.BACK&&(ce[0]=n.BACK,Le=!0);Le&&(t.isWebGL2?n.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function Qe(U){return m!==U?(n.useProgram(U),m=U,!0):!1}const Me={[Mr]:n.FUNC_ADD,[Ry]:n.FUNC_SUBTRACT,[by]:n.FUNC_REVERSE_SUBTRACT};if(i)Me[tp]=n.MIN,Me[np]=n.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(Me[tp]=U.MIN_EXT,Me[np]=U.MAX_EXT)}const we={[Py]:n.ZERO,[Ly]:n.ONE,[Dy]:n.SRC_COLOR,[vh]:n.SRC_ALPHA,[ky]:n.SRC_ALPHA_SATURATE,[Fy]:n.DST_COLOR,[Ny]:n.DST_ALPHA,[Uy]:n.ONE_MINUS_SRC_COLOR,[_h]:n.ONE_MINUS_SRC_ALPHA,[Oy]:n.ONE_MINUS_DST_COLOR,[Iy]:n.ONE_MINUS_DST_ALPHA,[zy]:n.CONSTANT_COLOR,[By]:n.ONE_MINUS_CONSTANT_COLOR,[Hy]:n.CONSTANT_ALPHA,[Gy]:n.ONE_MINUS_CONSTANT_ALPHA};function pe(U,ue,ce,Le,Ce,nt,it,bt,jt,rt){if(U===Ai){c===!0&&(Se(n.BLEND),c=!1);return}if(c===!1&&(ae(n.BLEND),c=!0),U!==Cy){if(U!==v||rt!==F){if((g!==Mr||A!==Mr)&&(n.blendEquation(n.FUNC_ADD),g=Mr,A=Mr),rt)switch(U){case Rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gh:n.blendFunc(n.ONE,n.ONE);break;case Jd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ep:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Jd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ep:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,R=null,T=null,L=null,y.set(0,0,0),E=0,v=U,F=rt}return}Ce=Ce||ue,nt=nt||ce,it=it||Le,(ue!==g||Ce!==A)&&(n.blendEquationSeparate(Me[ue],Me[Ce]),g=ue,A=Ce),(ce!==S||Le!==R||nt!==T||it!==L)&&(n.blendFuncSeparate(we[ce],we[Le],we[nt],we[it]),S=ce,R=Le,T=nt,L=it),(bt.equals(y)===!1||jt!==E)&&(n.blendColor(bt.r,bt.g,bt.b,jt),y.copy(bt),E=jt),v=U,F=!1}function Ye(U,ue){U.side===sn?Se(n.CULL_FACE):ae(n.CULL_FACE);let ce=U.side===hn;ue&&(ce=!ce),_e(ce),U.blending===Rs&&U.transparent===!1?pe(Ai):pe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const Le=U.stencilWrite;u.setTest(Le),Le&&(u.setMask(U.stencilWriteMask),u.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),u.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),V(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function _e(U){z!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),z=U)}function C(U){U!==wy?(ae(n.CULL_FACE),U!==Z&&(U===Zd?n.cullFace(n.BACK):U===Ay?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),Z=U}function M(U){U!==D&&(P&&n.lineWidth(U),D=U)}function V(U,ue,ce){U?(ae(n.POLYGON_OFFSET_FILL),(b!==ue||N!==ce)&&(n.polygonOffset(ue,ce),b=ue,N=ce)):Se(n.POLYGON_OFFSET_FILL)}function te(U){U?ae(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function ee(U){U===void 0&&(U=n.TEXTURE0+W-1),Y!==U&&(n.activeTexture(U),Y=U)}function ie(U,ue,ce){ce===void 0&&(Y===null?ce=n.TEXTURE0+W-1:ce=Y);let Le=K[ce];Le===void 0&&(Le={type:void 0,texture:void 0},K[ce]=Le),(Le.type!==U||Le.texture!==ue)&&(Y!==ce&&(n.activeTexture(ce),Y=ce),n.bindTexture(U,ue||Ue[U]),Le.type=U,Le.texture=ue)}function ye(){const U=K[Y];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function le(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(U){oe.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),oe.copy(U))}function Je(U){ge.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ge.copy(U))}function gt(U,ue){let ce=f.get(ue);ce===void 0&&(ce=new WeakMap,f.set(ue,ce));let Le=ce.get(U);Le===void 0&&(Le=n.getUniformBlockIndex(ue,U.name),ce.set(U,Le))}function Ge(U,ue){const Le=f.get(ue).get(U);h.get(ue)!==Le&&(n.uniformBlockBinding(ue,Le,U.__bindingPointIndex),h.set(ue,Le))}function re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},Y=null,K={},p={},_=new WeakMap,x=[],m=null,c=!1,v=null,g=null,S=null,R=null,A=null,T=null,L=null,y=new Oe(0,0,0),E=0,F=!1,z=null,Z=null,D=null,b=null,N=null,oe.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:ae,disable:Se,bindFramebuffer:Ae,drawBuffers:G,useProgram:Qe,setBlending:pe,setMaterial:Ye,setFlipSided:_e,setCullFace:C,setLineWidth:M,setPolygonOffset:V,setScissorTest:te,activeTexture:ee,bindTexture:ie,unbindTexture:ye,compressedTexImage2D:le,compressedTexImage3D:me,texImage2D:Ee,texImage3D:xe,updateUBOMapping:gt,uniformBlockBinding:Ge,texStorage2D:Be,texStorage3D:be,texSubImage2D:he,texSubImage3D:Ne,compressedTexSubImage2D:J,compressedTexSubImage3D:$e,scissor:ke,viewport:Je,reset:re}}function pw(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return p?new OffscreenCanvas(C,M):Vl("canvas")}function x(C,M,V,te){let ee=1;if((C.width>te||C.height>te)&&(ee=te/Math.max(C.width,C.height)),ee<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ie=M?Th:Math.floor,ye=ie(ee*C.width),le=ie(ee*C.height);f===void 0&&(f=_(ye,le));const me=V?_(ye,le):f;return me.width=ye,me.height=le,me.getContext("2d").drawImage(C,0,0,ye,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ye+"x"+le+")."),me}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return Dp(C.width)&&Dp(C.height)}function c(C){return a?!1:C.wrapS!==Kn||C.wrapT!==Kn||C.minFilter!==Kt&&C.minFilter!==Ln}function v(C,M){return C.generateMipmaps&&M&&C.minFilter!==Kt&&C.minFilter!==Ln}function g(C){n.generateMipmap(C)}function S(C,M,V,te,ee=!1){if(a===!1)return M;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ie=M;if(M===n.RED&&(V===n.FLOAT&&(ie=n.R32F),V===n.HALF_FLOAT&&(ie=n.R16F),V===n.UNSIGNED_BYTE&&(ie=n.R8)),M===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(ie=n.R8UI),V===n.UNSIGNED_SHORT&&(ie=n.R16UI),V===n.UNSIGNED_INT&&(ie=n.R32UI),V===n.BYTE&&(ie=n.R8I),V===n.SHORT&&(ie=n.R16I),V===n.INT&&(ie=n.R32I)),M===n.RG&&(V===n.FLOAT&&(ie=n.RG32F),V===n.HALF_FLOAT&&(ie=n.RG16F),V===n.UNSIGNED_BYTE&&(ie=n.RG8)),M===n.RGBA){const ye=ee?zl:et.getTransfer(te);V===n.FLOAT&&(ie=n.RGBA32F),V===n.HALF_FLOAT&&(ie=n.RGBA16F),V===n.UNSIGNED_BYTE&&(ie=ye===st?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function R(C,M,V){return v(C,V)===!0||C.isFramebufferTexture&&C.minFilter!==Kt&&C.minFilter!==Ln?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){return C===Kt||C===ip||C===Gu?n.NEAREST:n.LINEAR}function T(C){const M=C.target;M.removeEventListener("dispose",T),y(M),M.isVideoTexture&&h.delete(M)}function L(C){const M=C.target;M.removeEventListener("dispose",L),F(M)}function y(C){const M=i.get(C);if(M.__webglInit===void 0)return;const V=C.source,te=d.get(V);if(te){const ee=te[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(C),Object.keys(te).length===0&&d.delete(V)}i.remove(C)}function E(C){const M=i.get(C);n.deleteTexture(M.__webglTexture);const V=C.source,te=d.get(V);delete te[M.__cacheKey],o.memory.textures--}function F(C){const M=C.texture,V=i.get(C),te=i.get(M);if(te.__webglTexture!==void 0&&(n.deleteTexture(te.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(V.__webglFramebuffer[ee]))for(let ie=0;ie<V.__webglFramebuffer[ee].length;ie++)n.deleteFramebuffer(V.__webglFramebuffer[ee][ie]);else n.deleteFramebuffer(V.__webglFramebuffer[ee]);V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer[ee])}else{if(Array.isArray(V.__webglFramebuffer))for(let ee=0;ee<V.__webglFramebuffer.length;ee++)n.deleteFramebuffer(V.__webglFramebuffer[ee]);else n.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&n.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ee=0;ee<V.__webglColorRenderbuffer.length;ee++)V.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(V.__webglColorRenderbuffer[ee]);V.__webglDepthRenderbuffer&&n.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ee=0,ie=M.length;ee<ie;ee++){const ye=i.get(M[ee]);ye.__webglTexture&&(n.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(M[ee])}i.remove(M),i.remove(C)}let z=0;function Z(){z=0}function D(){const C=z;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),z+=1,C}function b(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function N(C,M){const V=i.get(C);if(C.isVideoTexture&&Ye(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(V,C,M);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+M)}function W(C,M){const V=i.get(C);if(C.version>0&&V.__version!==C.version){oe(V,C,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+M)}function P(C,M){const V=i.get(C);if(C.version>0&&V.__version!==C.version){oe(V,C,M);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+M)}function I(C,M){const V=i.get(C);if(C.version>0&&V.__version!==C.version){ge(V,C,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+M)}const H={[kl]:n.REPEAT,[Kn]:n.CLAMP_TO_EDGE,[Sh]:n.MIRRORED_REPEAT},Y={[Kt]:n.NEAREST,[ip]:n.NEAREST_MIPMAP_NEAREST,[Gu]:n.NEAREST_MIPMAP_LINEAR,[Ln]:n.LINEAR,[Jy]:n.LINEAR_MIPMAP_NEAREST,[qo]:n.LINEAR_MIPMAP_LINEAR},K={[hS]:n.NEVER,[vS]:n.ALWAYS,[fS]:n.LESS,[mv]:n.LEQUAL,[dS]:n.EQUAL,[gS]:n.GEQUAL,[pS]:n.GREATER,[mS]:n.NOTEQUAL};function O(C,M,V){if(V?(n.texParameteri(C,n.TEXTURE_WRAP_S,H[M.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,H[M.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,H[M.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Y[M.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Y[M.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==Kn||M.wrapT!==Kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,A(M.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==Kt&&M.minFilter!==Ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,K[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Kt||M.minFilter!==Gu&&M.minFilter!==qo||M.type===qi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===ci&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(C,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Q(C,M){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",T));const te=M.source;let ee=d.get(te);ee===void 0&&(ee={},d.set(te,ee));const ie=b(M);if(ie!==C.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ee[ie].usedTimes++;const ye=ee[C.__cacheKey];ye!==void 0&&(ee[C.__cacheKey].usedTimes--,ye.usedTimes===0&&E(M)),C.__cacheKey=ie,C.__webglTexture=ee[ie].texture}return V}function oe(C,M,V){let te=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=n.TEXTURE_3D);const ee=Q(C,M),ie=M.source;t.bindTexture(te,C.__webglTexture,n.TEXTURE0+V);const ye=i.get(ie);if(ie.version!==ye.__version||ee===!0){t.activeTexture(n.TEXTURE0+V);const le=et.getPrimaries(et.workingColorSpace),me=M.colorSpace===Un?null:et.getPrimaries(M.colorSpace),he=M.colorSpace===Un||le===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ne=c(M)&&m(M.image)===!1;let J=x(M.image,Ne,!1,r.maxTextureSize);J=_e(M,J);const $e=m(J)||a,Be=s.convert(M.format,M.colorSpace);let be=s.convert(M.type),Ee=S(M.internalFormat,Be,be,M.colorSpace,M.isVideoTexture);O(te,M,$e);let xe;const ke=M.mipmaps,Je=a&&M.isVideoTexture!==!0&&Ee!==dv,gt=ye.__version===void 0||ee===!0,Ge=R(M,J,$e);if(M.isDepthTexture)Ee=n.DEPTH_COMPONENT,a?M.type===qi?Ee=n.DEPTH_COMPONENT32F:M.type===ji?Ee=n.DEPTH_COMPONENT24:M.type===br?Ee=n.DEPTH24_STENCIL8:Ee=n.DEPTH_COMPONENT16:M.type===qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Pr&&Ee===n.DEPTH_COMPONENT&&M.type!==Cf&&M.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ji,be=s.convert(M.type)),M.format===Bs&&Ee===n.DEPTH_COMPONENT&&(Ee=n.DEPTH_STENCIL,M.type!==br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=br,be=s.convert(M.type))),gt&&(Je?t.texStorage2D(n.TEXTURE_2D,1,Ee,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,Ee,J.width,J.height,0,Be,be,null));else if(M.isDataTexture)if(ke.length>0&&$e){Je&&gt&&t.texStorage2D(n.TEXTURE_2D,Ge,Ee,ke[0].width,ke[0].height);for(let re=0,U=ke.length;re<U;re++)xe=ke[re],Je?t.texSubImage2D(n.TEXTURE_2D,re,0,0,xe.width,xe.height,Be,be,xe.data):t.texImage2D(n.TEXTURE_2D,re,Ee,xe.width,xe.height,0,Be,be,xe.data);M.generateMipmaps=!1}else Je?(gt&&t.texStorage2D(n.TEXTURE_2D,Ge,Ee,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,Be,be,J.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,J.width,J.height,0,Be,be,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Je&&gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,Ee,ke[0].width,ke[0].height,J.depth);for(let re=0,U=ke.length;re<U;re++)xe=ke[re],M.format!==Qn?Be!==null?Je?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,xe.width,xe.height,J.depth,Be,xe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Ee,xe.width,xe.height,J.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,xe.width,xe.height,J.depth,Be,be,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Ee,xe.width,xe.height,J.depth,0,Be,be,xe.data)}else{Je&&gt&&t.texStorage2D(n.TEXTURE_2D,Ge,Ee,ke[0].width,ke[0].height);for(let re=0,U=ke.length;re<U;re++)xe=ke[re],M.format!==Qn?Be!==null?Je?t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,xe.width,xe.height,Be,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Ee,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage2D(n.TEXTURE_2D,re,0,0,xe.width,xe.height,Be,be,xe.data):t.texImage2D(n.TEXTURE_2D,re,Ee,xe.width,xe.height,0,Be,be,xe.data)}else if(M.isDataArrayTexture)Je?(gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,Ee,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Be,be,J.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,J.width,J.height,J.depth,0,Be,be,J.data);else if(M.isData3DTexture)Je?(gt&&t.texStorage3D(n.TEXTURE_3D,Ge,Ee,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Be,be,J.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,J.width,J.height,J.depth,0,Be,be,J.data);else if(M.isFramebufferTexture){if(gt)if(Je)t.texStorage2D(n.TEXTURE_2D,Ge,Ee,J.width,J.height);else{let re=J.width,U=J.height;for(let ue=0;ue<Ge;ue++)t.texImage2D(n.TEXTURE_2D,ue,Ee,re,U,0,Be,be,null),re>>=1,U>>=1}}else if(ke.length>0&&$e){Je&&gt&&t.texStorage2D(n.TEXTURE_2D,Ge,Ee,ke[0].width,ke[0].height);for(let re=0,U=ke.length;re<U;re++)xe=ke[re],Je?t.texSubImage2D(n.TEXTURE_2D,re,0,0,Be,be,xe):t.texImage2D(n.TEXTURE_2D,re,Ee,Be,be,xe);M.generateMipmaps=!1}else Je?(gt&&t.texStorage2D(n.TEXTURE_2D,Ge,Ee,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Be,be,J)):t.texImage2D(n.TEXTURE_2D,0,Ee,Be,be,J);v(M,$e)&&g(te),ye.__version=ie.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ge(C,M,V){if(M.image.length!==6)return;const te=Q(C,M),ee=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+V);const ie=i.get(ee);if(ee.version!==ie.__version||te===!0){t.activeTexture(n.TEXTURE0+V);const ye=et.getPrimaries(et.workingColorSpace),le=M.colorSpace===Un?null:et.getPrimaries(M.colorSpace),me=M.colorSpace===Un||ye===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const he=M.isCompressedTexture||M.image[0].isCompressedTexture,Ne=M.image[0]&&M.image[0].isDataTexture,J=[];for(let re=0;re<6;re++)!he&&!Ne?J[re]=x(M.image[re],!1,!0,r.maxCubemapSize):J[re]=Ne?M.image[re].image:M.image[re],J[re]=_e(M,J[re]);const $e=J[0],Be=m($e)||a,be=s.convert(M.format,M.colorSpace),Ee=s.convert(M.type),xe=S(M.internalFormat,be,Ee,M.colorSpace),ke=a&&M.isVideoTexture!==!0,Je=ie.__version===void 0||te===!0;let gt=R(M,$e,Be);O(n.TEXTURE_CUBE_MAP,M,Be);let Ge;if(he){ke&&Je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,gt,xe,$e.width,$e.height);for(let re=0;re<6;re++){Ge=J[re].mipmaps;for(let U=0;U<Ge.length;U++){const ue=Ge[U];M.format!==Qn?be!==null?ke?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,U,0,0,ue.width,ue.height,be,ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,U,xe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,U,0,0,ue.width,ue.height,be,Ee,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,U,xe,ue.width,ue.height,0,be,Ee,ue.data)}}}else{Ge=M.mipmaps,ke&&Je&&(Ge.length>0&&gt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,gt,xe,J[0].width,J[0].height));for(let re=0;re<6;re++)if(Ne){ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,J[re].width,J[re].height,be,Ee,J[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,xe,J[re].width,J[re].height,0,be,Ee,J[re].data);for(let U=0;U<Ge.length;U++){const ce=Ge[U].image[re].image;ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,U+1,0,0,ce.width,ce.height,be,Ee,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,U+1,xe,ce.width,ce.height,0,be,Ee,ce.data)}}else{ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,be,Ee,J[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,xe,be,Ee,J[re]);for(let U=0;U<Ge.length;U++){const ue=Ge[U];ke?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,U+1,0,0,be,Ee,ue.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,U+1,xe,be,Ee,ue.image[re])}}}v(M,Be)&&g(n.TEXTURE_CUBE_MAP),ie.__version=ee.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ve(C,M,V,te,ee,ie){const ye=s.convert(V.format,V.colorSpace),le=s.convert(V.type),me=S(V.internalFormat,ye,le,V.colorSpace);if(!i.get(M).__hasExternalTextures){const Ne=Math.max(1,M.width>>ie),J=Math.max(1,M.height>>ie);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,ie,me,Ne,J,M.depth,0,ye,le,null):t.texImage2D(ee,ie,me,Ne,J,0,ye,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),pe(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,ee,i.get(V).__webglTexture,0,we(M)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,ee,i.get(V).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(C,M,V){if(n.bindRenderbuffer(n.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let te=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(V||pe(M)){const ee=M.depthTexture;ee&&ee.isDepthTexture&&(ee.type===qi?te=n.DEPTH_COMPONENT32F:ee.type===ji&&(te=n.DEPTH_COMPONENT24));const ie=we(M);pe(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,te,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,te,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,te,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const te=we(M);V&&pe(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,M.width,M.height):pe(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{const te=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ee=0;ee<te.length;ee++){const ie=te[ee],ye=s.convert(ie.format,ie.colorSpace),le=s.convert(ie.type),me=S(ie.internalFormat,ye,le,ie.colorSpace),he=we(M);V&&pe(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,me,M.width,M.height):pe(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,me,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,me,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ae(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),N(M.depthTexture,0);const te=i.get(M.depthTexture).__webglTexture,ee=we(M);if(M.depthTexture.format===Pr)pe(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(M.depthTexture.format===Bs)pe(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Se(C){const M=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ae(M.__webglFramebuffer,C)}else if(V){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=n.createRenderbuffer(),Ue(M.__webglDepthbuffer[te],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),Ue(M.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(C,M,V){const te=i.get(C);M!==void 0&&ve(te.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Se(C)}function G(C){const M=C.texture,V=i.get(C),te=i.get(M);C.addEventListener("dispose",L),C.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=M.version,o.memory.textures++);const ee=C.isWebGLCubeRenderTarget===!0,ie=C.isWebGLMultipleRenderTargets===!0,ye=m(C)||a;if(ee){V.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[le]=[];for(let me=0;me<M.mipmaps.length;me++)V.__webglFramebuffer[le][me]=n.createFramebuffer()}else V.__webglFramebuffer[le]=n.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)V.__webglFramebuffer[le]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(ie)if(r.drawBuffers){const le=C.texture;for(let me=0,he=le.length;me<he;me++){const Ne=i.get(le[me]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&pe(C)===!1){const le=ie?M:[M];V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let me=0;me<le.length;me++){const he=le[me];V.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[me]);const Ne=s.convert(he.format,he.colorSpace),J=s.convert(he.type),$e=S(he.internalFormat,Ne,J,he.colorSpace,C.isXRRenderTarget===!0),Be=we(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,$e,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,V.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),O(n.TEXTURE_CUBE_MAP,M,ye);for(let le=0;le<6;le++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)ve(V.__webglFramebuffer[le][me],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,me);else ve(V.__webglFramebuffer[le],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);v(M,ye)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const le=C.texture;for(let me=0,he=le.length;me<he;me++){const Ne=le[me],J=i.get(Ne);t.bindTexture(n.TEXTURE_2D,J.__webglTexture),O(n.TEXTURE_2D,Ne,ye),ve(V.__webglFramebuffer,C,Ne,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),v(Ne,ye)&&g(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?le=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,te.__webglTexture),O(le,M,ye),a&&M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)ve(V.__webglFramebuffer[me],C,M,n.COLOR_ATTACHMENT0,le,me);else ve(V.__webglFramebuffer,C,M,n.COLOR_ATTACHMENT0,le,0);v(M,ye)&&g(le),t.unbindTexture()}C.depthBuffer&&Se(C)}function Qe(C){const M=m(C)||a,V=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let te=0,ee=V.length;te<ee;te++){const ie=V[te];if(v(ie,M)){const ye=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,le=i.get(ie).__webglTexture;t.bindTexture(ye,le),g(ye),t.unbindTexture()}}}function Me(C){if(a&&C.samples>0&&pe(C)===!1){const M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],V=C.width,te=C.height;let ee=n.COLOR_BUFFER_BIT;const ie=[],ye=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(C),me=C.isWebGLMultipleRenderTargets===!0;if(me)for(let he=0;he<M.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let he=0;he<M.length;he++){ie.push(n.COLOR_ATTACHMENT0+he),C.depthBuffer&&ie.push(ye);const Ne=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Ne===!1&&(C.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),me&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[he]),Ne===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ye]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ye])),me){const J=i.get(M[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,V,te,0,0,V,te,ee,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let he=0;he<M.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,le.__webglColorRenderbuffer[he]);const Ne=i.get(M[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,Ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function we(C){return Math.min(r.maxSamples,C.samples)}function pe(C){const M=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ye(C){const M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function _e(C,M){const V=C.colorSpace,te=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Mh||V!==Di&&V!==Un&&(et.getTransfer(V)===st?a===!1?e.has("EXT_sRGB")===!0&&te===Qn?(C.format=Mh,C.minFilter=Ln,C.generateMipmaps=!1):M=vv.sRGBToLinear(M):(te!==Qn||ee!==ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}this.allocateTextureUnit=D,this.resetTextureUnits=Z,this.setTexture2D=N,this.setTexture2DArray=W,this.setTexture3D=P,this.setTextureCube=I,this.rebindTextures=Ae,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=pe}function mw(n,e,t){const i=t.isWebGL2;function r(s,o=Un){let a;const l=et.getTransfer(o);if(s===ir)return n.UNSIGNED_BYTE;if(s===lv)return n.UNSIGNED_SHORT_4_4_4_4;if(s===uv)return n.UNSIGNED_SHORT_5_5_5_1;if(s===eS)return n.BYTE;if(s===tS)return n.SHORT;if(s===Cf)return n.UNSIGNED_SHORT;if(s===av)return n.INT;if(s===ji)return n.UNSIGNED_INT;if(s===qi)return n.FLOAT;if(s===ci)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===nS)return n.ALPHA;if(s===Qn)return n.RGBA;if(s===iS)return n.LUMINANCE;if(s===rS)return n.LUMINANCE_ALPHA;if(s===Pr)return n.DEPTH_COMPONENT;if(s===Bs)return n.DEPTH_STENCIL;if(s===Mh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===sS)return n.RED;if(s===cv)return n.RED_INTEGER;if(s===oS)return n.RG;if(s===hv)return n.RG_INTEGER;if(s===fv)return n.RGBA_INTEGER;if(s===Vu||s===Wu||s===Xu||s===ju)if(l===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Vu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Wu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ju)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Vu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ju)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===rp||s===sp||s===op||s===ap)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===rp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===op)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ap)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===lp||s===up)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===lp)return l===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===up)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===cp||s===hp||s===fp||s===dp||s===pp||s===mp||s===gp||s===vp||s===_p||s===xp||s===yp||s===Sp||s===Mp||s===Ep)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===cp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===pp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===mp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===gp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_p)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Mp)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ep)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qu||s===Tp||s===wp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===qu)return l===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Tp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===wp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===aS||s===Ap||s===Cp||s===Rp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===qu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ap)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Cp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Rp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===br?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class gw extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rn extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vw={type:"move"};class _c{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),c=this._getHandJoint(u,x);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Rn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class _w extends js{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,h=null,f=null,d=null,p=null,_=null;const x=t.getContextAttributes();let m=null,c=null;const v=[],g=[],S=new Pe;let R=null;const A=new Dn;A.layers.enable(1),A.viewport=new Nt;const T=new Dn;T.layers.enable(2),T.viewport=new Nt;const L=[A,T],y=new gw;y.layers.enable(1),y.layers.enable(2);let E=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let Q=v[O];return Q===void 0&&(Q=new _c,v[O]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(O){let Q=v[O];return Q===void 0&&(Q=new _c,v[O]=Q),Q.getGripSpace()},this.getHand=function(O){let Q=v[O];return Q===void 0&&(Q=new _c,v[O]=Q),Q.getHandSpace()};function z(O){const Q=g.indexOf(O.inputSource);if(Q===-1)return;const oe=v[Q];oe!==void 0&&(oe.update(O.inputSource,O.frame,u||o),oe.dispatchEvent({type:O.type,data:O.inputSource}))}function Z(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",D);for(let O=0;O<v.length;O++){const Q=g[O];Q!==null&&(g[O]=null,v[O].disconnect(Q))}E=null,F=null,e.setRenderTarget(m),p=null,d=null,f=null,r=null,c=null,K.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(O){u=O},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",D),x.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),c=new On(p.framebufferWidth,p.framebufferHeight,{format:Qn,type:ir,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Q=null,oe=null,ge=null;x.depth&&(ge=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=x.stencil?Bs:Pr,oe=x.stencil?br:ji);const ve={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),c=new On(d.textureWidth,d.textureHeight,{format:Qn,type:ir,depthTexture:new Lv(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Ue=e.properties.get(c);Ue.__ignoreDepthValues=d.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),K.setContext(r),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(O){for(let Q=0;Q<O.removed.length;Q++){const oe=O.removed[Q],ge=g.indexOf(oe);ge>=0&&(g[ge]=null,v[ge].disconnect(oe))}for(let Q=0;Q<O.added.length;Q++){const oe=O.added[Q];let ge=g.indexOf(oe);if(ge===-1){for(let Ue=0;Ue<v.length;Ue++)if(Ue>=g.length){g.push(oe),ge=Ue;break}else if(g[Ue]===null){g[Ue]=oe,ge=Ue;break}if(ge===-1)break}const ve=v[ge];ve&&ve.connect(oe)}}const b=new B,N=new B;function W(O,Q,oe){b.setFromMatrixPosition(Q.matrixWorld),N.setFromMatrixPosition(oe.matrixWorld);const ge=b.distanceTo(N),ve=Q.projectionMatrix.elements,Ue=oe.projectionMatrix.elements,ae=ve[14]/(ve[10]-1),Se=ve[14]/(ve[10]+1),Ae=(ve[9]+1)/ve[5],G=(ve[9]-1)/ve[5],Qe=(ve[8]-1)/ve[0],Me=(Ue[8]+1)/Ue[0],we=ae*Qe,pe=ae*Me,Ye=ge/(-Qe+Me),_e=Ye*-Qe;Q.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(_e),O.translateZ(Ye),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const C=ae+Ye,M=Se+Ye,V=we-_e,te=pe+(ge-_e),ee=Ae*Se/M*C,ie=G*Se/M*C;O.projectionMatrix.makePerspective(V,te,ee,ie,C,M),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function P(O,Q){Q===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(Q.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;y.near=T.near=A.near=O.near,y.far=T.far=A.far=O.far,(E!==y.near||F!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,F=y.far);const Q=O.parent,oe=y.cameras;P(y,Q);for(let ge=0;ge<oe.length;ge++)P(oe[ge],Q);oe.length===2?W(y,A,T):y.projectionMatrix.copy(A.projectionMatrix),I(O,y,Q)};function I(O,Q,oe){oe===null?O.matrix.copy(Q.matrixWorld):(O.matrix.copy(oe.matrixWorld),O.matrix.invert(),O.matrix.multiply(Q.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(Q.projectionMatrix),O.projectionMatrixInverse.copy(Q.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Eh*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)};let H=null;function Y(O,Q){if(h=Q.getViewerPose(u||o),_=Q,h!==null){const oe=h.views;p!==null&&(e.setRenderTargetFramebuffer(c,p.framebuffer),e.setRenderTarget(c));let ge=!1;oe.length!==y.cameras.length&&(y.cameras.length=0,ge=!0);for(let ve=0;ve<oe.length;ve++){const Ue=oe[ve];let ae=null;if(p!==null)ae=p.getViewport(Ue);else{const Ae=f.getViewSubImage(d,Ue);ae=Ae.viewport,ve===0&&(e.setRenderTargetTextures(c,Ae.colorTexture,d.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(c))}let Se=L[ve];Se===void 0&&(Se=new Dn,Se.layers.enable(ve),Se.viewport=new Nt,L[ve]=Se),Se.matrix.fromArray(Ue.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Ue.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(ae.x,ae.y,ae.width,ae.height),ve===0&&(y.matrix.copy(Se.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ge===!0&&y.cameras.push(Se)}}for(let oe=0;oe<v.length;oe++){const ge=g[oe],ve=v[oe];ge!==null&&ve!==void 0&&ve.update(ge,Q,u||o)}H&&H(O,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),_=null}const K=new Pv;K.setAnimationLoop(Y),this.setAnimationLoop=function(O){H=O},this.dispose=function(){}}}function xw(n,e){function t(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,wv(n)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function r(m,c,v,g,S){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(m,c):c.isMeshToonMaterial?(s(m,c),f(m,c)):c.isMeshPhongMaterial?(s(m,c),h(m,c)):c.isMeshStandardMaterial?(s(m,c),d(m,c),c.isMeshPhysicalMaterial&&p(m,c,S)):c.isMeshMatcapMaterial?(s(m,c),_(m,c)):c.isMeshDepthMaterial?s(m,c):c.isMeshDistanceMaterial?(s(m,c),x(m,c)):c.isMeshNormalMaterial?s(m,c):c.isLineBasicMaterial?(o(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,v,g):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,t(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,t(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,t(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===hn&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,t(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===hn&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,t(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,t(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,t(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const v=e.get(c).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap){m.lightMap.value=c.lightMap;const g=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=c.lightMapIntensity*g,t(c.lightMap,m.lightMapTransform)}c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,t(c.aoMap,m.aoMapTransform))}function o(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,t(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,v,g){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*v,m.scale.value=g*.5,c.map&&(m.map.value=c.map,t(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,t(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,t(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,t(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function h(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function f(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function d(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,m.roughnessMapTransform)),e.get(c).envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,v){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===hn&&m.clearcoatNormalScale.value.negate())),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,c){c.matcap&&(m.matcap.value=c.matcap)}function x(m,c){const v=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yw(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const S=g.program;i.uniformBlockBinding(v,S)}function u(v,g){let S=r[v.id];S===void 0&&(_(v),S=h(v),r[v.id]=S,v.addEventListener("dispose",m));const R=g.program;i.updateUBOMapping(v,R);const A=e.render.frame;s[v.id]!==A&&(d(v),s[v.id]=A)}function h(v){const g=f();v.__bindingPointIndex=g;const S=n.createBuffer(),R=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,R,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,S),S}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const g=r[v.id],S=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let A=0,T=S.length;A<T;A++){const L=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,E=L.length;y<E;y++){const F=L[y];if(p(F,A,y,R)===!0){const z=F.__offset,Z=Array.isArray(F.value)?F.value:[F.value];let D=0;for(let b=0;b<Z.length;b++){const N=Z[b],W=x(N);typeof N=="number"||typeof N=="boolean"?(F.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,z+D,F.__data)):N.isMatrix3?(F.__data[0]=N.elements[0],F.__data[1]=N.elements[1],F.__data[2]=N.elements[2],F.__data[3]=0,F.__data[4]=N.elements[3],F.__data[5]=N.elements[4],F.__data[6]=N.elements[5],F.__data[7]=0,F.__data[8]=N.elements[6],F.__data[9]=N.elements[7],F.__data[10]=N.elements[8],F.__data[11]=0):(N.toArray(F.__data,D),D+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,g,S,R){const A=v.value,T=g+"_"+S;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{const L=R[T];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return R[T]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function _(v){const g=v.uniforms;let S=0;const R=16;for(let T=0,L=g.length;T<L;T++){const y=Array.isArray(g[T])?g[T]:[g[T]];for(let E=0,F=y.length;E<F;E++){const z=y[E],Z=Array.isArray(z.value)?z.value:[z.value];for(let D=0,b=Z.length;D<b;D++){const N=Z[D],W=x(N),P=S%R;P!==0&&R-P<W.boundary&&(S+=R-P),z.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=W.storage}}}const A=S%R;return A>0&&(S+=R-A),v.__size=S,v.__cache={},this}function x(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const S=o.indexOf(g.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function c(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class Ov{constructor(e={}){const{canvas:t=xS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const c=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this._useLegacyLights=!1,this.toneMapping=nr,this.toneMappingExposure=1;const g=this;let S=!1,R=0,A=0,T=null,L=-1,y=null;const E=new Nt,F=new Nt;let z=null;const Z=new Oe(0);let D=0,b=t.width,N=t.height,W=1,P=null,I=null;const H=new Nt(0,0,b,N),Y=new Nt(0,0,b,N);let K=!1;const O=new Pf;let Q=!1,oe=!1,ge=null;const ve=new pt,Ue=new Pe,ae=new B,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return T===null?W:1}let G=i;function Qe(w,k){for(let j=0;j<w.length;j++){const q=w[j],X=t.getContext(q,k);if(X!==null)return X}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tf}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",ue,!1),G===null){const k=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&k.shift(),G=Qe(k,w),G===null)throw Qe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Me,we,pe,Ye,_e,C,M,V,te,ee,ie,ye,le,me,he,Ne,J,$e,Be,be,Ee,xe,ke,Je;function gt(){Me=new P1(G),we=new T1(G,Me,e),Me.init(we),xe=new mw(G,Me,we),pe=new dw(G,Me,we),Ye=new U1(G),_e=new JT,C=new pw(G,Me,pe,_e,we,xe,Ye),M=new A1(g),V=new b1(g),te=new HS(G,we),ke=new M1(G,Me,te,we),ee=new L1(G,te,Ye,ke),ie=new O1(G,ee,te,Ye),Be=new F1(G,we,C),Ne=new w1(_e),ye=new ZT(g,M,V,Me,we,ke,Ne),le=new xw(g,_e),me=new tw,he=new aw(Me,we),$e=new S1(g,M,V,pe,ie,d,l),J=new fw(g,ie,we),Je=new yw(G,Ye,we,pe),be=new E1(G,Me,Ye,we),Ee=new D1(G,Me,Ye,we),Ye.programs=ye.programs,g.capabilities=we,g.extensions=Me,g.properties=_e,g.renderLists=me,g.shadowMap=J,g.state=pe,g.info=Ye}gt();const Ge=new _w(g,G);this.xr=Ge,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const w=Me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(b,N,!1))},this.getSize=function(w){return w.set(b,N)},this.setSize=function(w,k,j=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=w,N=k,t.width=Math.floor(w*W),t.height=Math.floor(k*W),j===!0&&(t.style.width=w+"px",t.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(b*W,N*W).floor()},this.setDrawingBufferSize=function(w,k,j){b=w,N=k,W=j,t.width=Math.floor(w*j),t.height=Math.floor(k*j),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(E)},this.getViewport=function(w){return w.copy(H)},this.setViewport=function(w,k,j,q){w.isVector4?H.set(w.x,w.y,w.z,w.w):H.set(w,k,j,q),pe.viewport(E.copy(H).multiplyScalar(W).floor())},this.getScissor=function(w){return w.copy(Y)},this.setScissor=function(w,k,j,q){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,k,j,q),pe.scissor(F.copy(Y).multiplyScalar(W).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(w){pe.setScissorTest(K=w)},this.setOpaqueSort=function(w){P=w},this.setTransparentSort=function(w){I=w},this.getClearColor=function(w){return w.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(w=!0,k=!0,j=!0){let q=0;if(w){let X=!1;if(T!==null){const fe=T.texture.format;X=fe===fv||fe===hv||fe===cv}if(X){const fe=T.texture.type,Te=fe===ir||fe===ji||fe===Cf||fe===br||fe===lv||fe===uv,Re=$e.getClearColor(),De=$e.getClearAlpha(),He=Re.r,Ie=Re.g,Fe=Re.b;Te?(p[0]=He,p[1]=Ie,p[2]=Fe,p[3]=De,G.clearBufferuiv(G.COLOR,0,p)):(_[0]=He,_[1]=Ie,_[2]=Fe,_[3]=De,G.clearBufferiv(G.COLOR,0,_))}else q|=G.COLOR_BUFFER_BIT}k&&(q|=G.DEPTH_BUFFER_BIT),j&&(q|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),me.dispose(),he.dispose(),_e.dispose(),M.dispose(),V.dispose(),ie.dispose(),ke.dispose(),Je.dispose(),ye.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",jt),Ge.removeEventListener("sessionend",rt),ge&&(ge.dispose(),ge=null),qt.stop()};function re(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=Ye.autoReset,k=J.enabled,j=J.autoUpdate,q=J.needsUpdate,X=J.type;gt(),Ye.autoReset=w,J.enabled=k,J.autoUpdate=j,J.needsUpdate=q,J.type=X}function ue(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ce(w){const k=w.target;k.removeEventListener("dispose",ce),Le(k)}function Le(w){Ce(w),_e.remove(w)}function Ce(w){const k=_e.get(w).programs;k!==void 0&&(k.forEach(function(j){ye.releaseProgram(j)}),w.isShaderMaterial&&ye.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,j,q,X,fe){k===null&&(k=Se);const Te=X.isMesh&&X.matrixWorld.determinant()<0,Re=$v(w,k,j,q,X);pe.setMaterial(q,Te);let De=j.index,He=1;if(q.wireframe===!0){if(De=ee.getWireframeAttribute(j),De===void 0)return;He=2}const Ie=j.drawRange,Fe=j.attributes.position;let xt=Ie.start*He,dn=(Ie.start+Ie.count)*He;fe!==null&&(xt=Math.max(xt,fe.start*He),dn=Math.min(dn,(fe.start+fe.count)*He)),De!==null?(xt=Math.max(xt,0),dn=Math.min(dn,De.count)):Fe!=null&&(xt=Math.max(xt,0),dn=Math.min(dn,Fe.count));const Pt=dn-xt;if(Pt<0||Pt===1/0)return;ke.setup(X,q,Re,j,De);let hi,ht=be;if(De!==null&&(hi=te.get(De),ht=Ee,ht.setIndex(hi)),X.isMesh)q.wireframe===!0?(pe.setLineWidth(q.wireframeLinewidth*Ae()),ht.setMode(G.LINES)):ht.setMode(G.TRIANGLES);else if(X.isLine){let Ve=q.linewidth;Ve===void 0&&(Ve=1),pe.setLineWidth(Ve*Ae()),X.isLineSegments?ht.setMode(G.LINES):X.isLineLoop?ht.setMode(G.LINE_LOOP):ht.setMode(G.LINE_STRIP)}else X.isPoints?ht.setMode(G.POINTS):X.isSprite&&ht.setMode(G.TRIANGLES);if(X.isBatchedMesh)ht.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)ht.renderInstances(xt,Pt,X.count);else if(j.isInstancedBufferGeometry){const Ve=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,fu=Math.min(j.instanceCount,Ve);ht.renderInstances(xt,Pt,fu)}else ht.render(xt,Pt)};function nt(w,k,j){w.transparent===!0&&w.side===sn&&w.forceSinglePass===!1?(w.side=hn,w.needsUpdate=!0,oa(w,k,j),w.side=or,w.needsUpdate=!0,oa(w,k,j),w.side=sn):oa(w,k,j)}this.compile=function(w,k,j=null){j===null&&(j=w),m=he.get(j),m.init(),v.push(m),j.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),w!==j&&w.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(g._useLegacyLights);const q=new Set;return w.traverse(function(X){const fe=X.material;if(fe)if(Array.isArray(fe))for(let Te=0;Te<fe.length;Te++){const Re=fe[Te];nt(Re,j,X),q.add(Re)}else nt(fe,j,X),q.add(fe)}),v.pop(),m=null,q},this.compileAsync=function(w,k,j=null){const q=this.compile(w,k,j);return new Promise(X=>{function fe(){if(q.forEach(function(Te){_e.get(Te).currentProgram.isReady()&&q.delete(Te)}),q.size===0){X(w);return}setTimeout(fe,10)}Me.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let it=null;function bt(w){it&&it(w)}function jt(){qt.stop()}function rt(){qt.start()}const qt=new Pv;qt.setAnimationLoop(bt),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(w){it=w,Ge.setAnimationLoop(w),w===null?qt.stop():qt.start()},Ge.addEventListener("sessionstart",jt),Ge.addEventListener("sessionend",rt),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(k),k=Ge.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,k,T),m=he.get(w,v.length),m.init(),v.push(m),ve.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),O.setFromProjectionMatrix(ve),oe=this.localClippingEnabled,Q=Ne.init(this.clippingPlanes,oe),x=me.get(w,c.length),x.init(),c.push(x),ti(w,k,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(P,I),this.info.render.frame++,Q===!0&&Ne.beginShadows();const j=m.state.shadowsArray;if(J.render(j,w,k),Q===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),$e.render(x,w),m.setupLights(g._useLegacyLights),k.isArrayCamera){const q=k.cameras;for(let X=0,fe=q.length;X<fe;X++){const Te=q[X];Of(x,w,Te,Te.viewport)}}else Of(x,w,k);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(g,w,k),ke.resetDefaultState(),L=-1,y=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,c.pop(),c.length>0?x=c[c.length-1]:x=null};function ti(w,k,j,q){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||O.intersectsSprite(w)){q&&ae.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ve);const Te=ie.update(w),Re=w.material;Re.visible&&x.push(w,Te,Re,j,ae.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||O.intersectsObject(w))){const Te=ie.update(w),Re=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ae.copy(w.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ae.copy(Te.boundingSphere.center)),ae.applyMatrix4(w.matrixWorld).applyMatrix4(ve)),Array.isArray(Re)){const De=Te.groups;for(let He=0,Ie=De.length;He<Ie;He++){const Fe=De[He],xt=Re[Fe.materialIndex];xt&&xt.visible&&x.push(w,Te,xt,j,ae.z,Fe)}}else Re.visible&&x.push(w,Te,Re,j,ae.z,null)}}const fe=w.children;for(let Te=0,Re=fe.length;Te<Re;Te++)ti(fe[Te],k,j,q)}function Of(w,k,j,q){const X=w.opaque,fe=w.transmissive,Te=w.transparent;m.setupLightsView(j),Q===!0&&Ne.setGlobalState(g.clippingPlanes,j),fe.length>0&&Yv(X,fe,k,j),q&&pe.viewport(E.copy(q)),X.length>0&&sa(X,k,j),fe.length>0&&sa(fe,k,j),Te.length>0&&sa(Te,k,j),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Yv(w,k,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const fe=we.isWebGL2;ge===null&&(ge=new On(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?ci:ir,minFilter:qo,samples:fe?4:0})),g.getDrawingBufferSize(Ue),fe?ge.setSize(Ue.x,Ue.y):ge.setSize(Th(Ue.x),Th(Ue.y));const Te=g.getRenderTarget();g.setRenderTarget(ge),g.getClearColor(Z),D=g.getClearAlpha(),D<1&&g.setClearColor(16777215,.5),g.clear();const Re=g.toneMapping;g.toneMapping=nr,sa(w,j,q),C.updateMultisampleRenderTarget(ge),C.updateRenderTargetMipmap(ge);let De=!1;for(let He=0,Ie=k.length;He<Ie;He++){const Fe=k[He],xt=Fe.object,dn=Fe.geometry,Pt=Fe.material,hi=Fe.group;if(Pt.side===sn&&xt.layers.test(q.layers)){const ht=Pt.side;Pt.side=hn,Pt.needsUpdate=!0,kf(xt,j,q,dn,Pt,hi),Pt.side=ht,Pt.needsUpdate=!0,De=!0}}De===!0&&(C.updateMultisampleRenderTarget(ge),C.updateRenderTargetMipmap(ge)),g.setRenderTarget(Te),g.setClearColor(Z,D),g.toneMapping=Re}function sa(w,k,j){const q=k.isScene===!0?k.overrideMaterial:null;for(let X=0,fe=w.length;X<fe;X++){const Te=w[X],Re=Te.object,De=Te.geometry,He=q===null?Te.material:q,Ie=Te.group;Re.layers.test(j.layers)&&kf(Re,k,j,De,He,Ie)}}function kf(w,k,j,q,X,fe){w.onBeforeRender(g,k,j,q,X,fe),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(g,k,j,q,w,fe),X.transparent===!0&&X.side===sn&&X.forceSinglePass===!1?(X.side=hn,X.needsUpdate=!0,g.renderBufferDirect(j,k,q,X,w,fe),X.side=or,X.needsUpdate=!0,g.renderBufferDirect(j,k,q,X,w,fe),X.side=sn):g.renderBufferDirect(j,k,q,X,w,fe),w.onAfterRender(g,k,j,q,X,fe)}function oa(w,k,j){k.isScene!==!0&&(k=Se);const q=_e.get(w),X=m.state.lights,fe=m.state.shadowsArray,Te=X.state.version,Re=ye.getParameters(w,X.state,fe,k,j),De=ye.getProgramCacheKey(Re);let He=q.programs;q.environment=w.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(w.isMeshStandardMaterial?V:M).get(w.envMap||q.environment),He===void 0&&(w.addEventListener("dispose",ce),He=new Map,q.programs=He);let Ie=He.get(De);if(Ie!==void 0){if(q.currentProgram===Ie&&q.lightsStateVersion===Te)return Bf(w,Re),Ie}else Re.uniforms=ye.getUniforms(w),w.onBuild(j,Re,g),w.onBeforeCompile(Re,g),Ie=ye.acquireProgram(Re,De),He.set(De,Ie),q.uniforms=Re.uniforms;const Fe=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Fe.clippingPlanes=Ne.uniform),Bf(w,Re),q.needsLights=Qv(w),q.lightsStateVersion=Te,q.needsLights&&(Fe.ambientLightColor.value=X.state.ambient,Fe.lightProbe.value=X.state.probe,Fe.directionalLights.value=X.state.directional,Fe.directionalLightShadows.value=X.state.directionalShadow,Fe.spotLights.value=X.state.spot,Fe.spotLightShadows.value=X.state.spotShadow,Fe.rectAreaLights.value=X.state.rectArea,Fe.ltc_1.value=X.state.rectAreaLTC1,Fe.ltc_2.value=X.state.rectAreaLTC2,Fe.pointLights.value=X.state.point,Fe.pointLightShadows.value=X.state.pointShadow,Fe.hemisphereLights.value=X.state.hemi,Fe.directionalShadowMap.value=X.state.directionalShadowMap,Fe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Fe.spotShadowMap.value=X.state.spotShadowMap,Fe.spotLightMatrix.value=X.state.spotLightMatrix,Fe.spotLightMap.value=X.state.spotLightMap,Fe.pointShadowMap.value=X.state.pointShadowMap,Fe.pointShadowMatrix.value=X.state.pointShadowMatrix),q.currentProgram=Ie,q.uniformsList=null,Ie}function zf(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=ll.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Bf(w,k){const j=_e.get(w);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function $v(w,k,j,q,X){k.isScene!==!0&&(k=Se),C.resetTextureUnits();const fe=k.fog,Te=q.isMeshStandardMaterial?k.environment:null,Re=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Di,De=(q.isMeshStandardMaterial?V:M).get(q.envMap||Te),He=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ie=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Fe=!!j.morphAttributes.position,xt=!!j.morphAttributes.normal,dn=!!j.morphAttributes.color;let Pt=nr;q.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Pt=g.toneMapping);const hi=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ht=hi!==void 0?hi.length:0,Ve=_e.get(q),fu=m.state.lights;if(Q===!0&&(oe===!0||w!==y)){const Mn=w===y&&q.id===L;Ne.setState(q,w,Mn)}let vt=!1;q.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==fu.state.version||Ve.outputColorSpace!==Re||X.isBatchedMesh&&Ve.batching===!1||!X.isBatchedMesh&&Ve.batching===!0||X.isInstancedMesh&&Ve.instancing===!1||!X.isInstancedMesh&&Ve.instancing===!0||X.isSkinnedMesh&&Ve.skinning===!1||!X.isSkinnedMesh&&Ve.skinning===!0||X.isInstancedMesh&&Ve.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ve.instancingColor===!1&&X.instanceColor!==null||Ve.envMap!==De||q.fog===!0&&Ve.fog!==fe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Ne.numPlanes||Ve.numIntersection!==Ne.numIntersection)||Ve.vertexAlphas!==He||Ve.vertexTangents!==Ie||Ve.morphTargets!==Fe||Ve.morphNormals!==xt||Ve.morphColors!==dn||Ve.toneMapping!==Pt||we.isWebGL2===!0&&Ve.morphTargetsCount!==ht)&&(vt=!0):(vt=!0,Ve.__version=q.version);let cr=Ve.currentProgram;vt===!0&&(cr=oa(q,k,X));let Hf=!1,Ks=!1,du=!1;const zt=cr.getUniforms(),hr=Ve.uniforms;if(pe.useProgram(cr.program)&&(Hf=!0,Ks=!0,du=!0),q.id!==L&&(L=q.id,Ks=!0),Hf||y!==w){zt.setValue(G,"projectionMatrix",w.projectionMatrix),zt.setValue(G,"viewMatrix",w.matrixWorldInverse);const Mn=zt.map.cameraPosition;Mn!==void 0&&Mn.setValue(G,ae.setFromMatrixPosition(w.matrixWorld)),we.logarithmicDepthBuffer&&zt.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&zt.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,Ks=!0,du=!0)}if(X.isSkinnedMesh){zt.setOptional(G,X,"bindMatrix"),zt.setOptional(G,X,"bindMatrixInverse");const Mn=X.skeleton;Mn&&(we.floatVertexTextures?(Mn.boneTexture===null&&Mn.computeBoneTexture(),zt.setValue(G,"boneTexture",Mn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(zt.setOptional(G,X,"batchingTexture"),zt.setValue(G,"batchingTexture",X._matricesTexture,C));const pu=j.morphAttributes;if((pu.position!==void 0||pu.normal!==void 0||pu.color!==void 0&&we.isWebGL2===!0)&&Be.update(X,j,cr),(Ks||Ve.receiveShadow!==X.receiveShadow)&&(Ve.receiveShadow=X.receiveShadow,zt.setValue(G,"receiveShadow",X.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(hr.envMap.value=De,hr.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Ks&&(zt.setValue(G,"toneMappingExposure",g.toneMappingExposure),Ve.needsLights&&Kv(hr,du),fe&&q.fog===!0&&le.refreshFogUniforms(hr,fe),le.refreshMaterialUniforms(hr,q,W,N,ge),ll.upload(G,zf(Ve),hr,C)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ll.upload(G,zf(Ve),hr,C),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&zt.setValue(G,"center",X.center),zt.setValue(G,"modelViewMatrix",X.modelViewMatrix),zt.setValue(G,"normalMatrix",X.normalMatrix),zt.setValue(G,"modelMatrix",X.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Mn=q.uniformsGroups;for(let mu=0,Zv=Mn.length;mu<Zv;mu++)if(we.isWebGL2){const Gf=Mn[mu];Je.update(Gf,cr),Je.bind(Gf,cr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return cr}function Kv(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Qv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,k,j){_e.get(w.texture).__webglTexture=k,_e.get(w.depthTexture).__webglTexture=j;const q=_e.get(w);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=j===void 0,q.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,k){const j=_e.get(w);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,j=0){T=w,R=k,A=j;let q=!0,X=null,fe=!1,Te=!1;if(w){const De=_e.get(w);De.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(G.FRAMEBUFFER,null),q=!1):De.__webglFramebuffer===void 0?C.setupRenderTarget(w):De.__hasExternalTextures&&C.rebindTextures(w,_e.get(w.texture).__webglTexture,_e.get(w.depthTexture).__webglTexture);const He=w.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Te=!0);const Ie=_e.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ie[k])?X=Ie[k][j]:X=Ie[k],fe=!0):we.isWebGL2&&w.samples>0&&C.useMultisampledRTT(w)===!1?X=_e.get(w).__webglMultisampledFramebuffer:Array.isArray(Ie)?X=Ie[j]:X=Ie,E.copy(w.viewport),F.copy(w.scissor),z=w.scissorTest}else E.copy(H).multiplyScalar(W).floor(),F.copy(Y).multiplyScalar(W).floor(),z=K;if(pe.bindFramebuffer(G.FRAMEBUFFER,X)&&we.drawBuffers&&q&&pe.drawBuffers(w,X),pe.viewport(E),pe.scissor(F),pe.setScissorTest(z),fe){const De=_e.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+k,De.__webglTexture,j)}else if(Te){const De=_e.get(w.texture),He=k||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,De.__webglTexture,j||0,He)}L=-1},this.readRenderTargetPixels=function(w,k,j,q,X,fe,Te){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=_e.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){pe.bindFramebuffer(G.FRAMEBUFFER,Re);try{const De=w.texture,He=De.format,Ie=De.type;if(He!==Qn&&xe.convert(He)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ie===ci&&(Me.has("EXT_color_buffer_half_float")||we.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Ie!==ir&&xe.convert(Ie)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===qi&&(we.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-q&&j>=0&&j<=w.height-X&&G.readPixels(k,j,q,X,xe.convert(He),xe.convert(Ie),fe)}finally{const De=T!==null?_e.get(T).__webglFramebuffer:null;pe.bindFramebuffer(G.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(w,k,j=0){const q=Math.pow(2,-j),X=Math.floor(k.image.width*q),fe=Math.floor(k.image.height*q);C.setTexture2D(k,0),G.copyTexSubImage2D(G.TEXTURE_2D,j,0,0,w.x,w.y,X,fe),pe.unbindTexture()},this.copyTextureToTexture=function(w,k,j,q=0){const X=k.image.width,fe=k.image.height,Te=xe.convert(j.format),Re=xe.convert(j.type);C.setTexture2D(j,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,j.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,j.unpackAlignment),k.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,q,w.x,w.y,X,fe,Te,Re,k.image.data):k.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,q,w.x,w.y,k.mipmaps[0].width,k.mipmaps[0].height,Te,k.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,q,w.x,w.y,Te,Re,k.image),q===0&&j.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(w,k,j,q,X=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=w.max.x-w.min.x+1,Te=w.max.y-w.min.y+1,Re=w.max.z-w.min.z+1,De=xe.convert(q.format),He=xe.convert(q.type);let Ie;if(q.isData3DTexture)C.setTexture3D(q,0),Ie=G.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)C.setTexture2DArray(q,0),Ie=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const Fe=G.getParameter(G.UNPACK_ROW_LENGTH),xt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),dn=G.getParameter(G.UNPACK_SKIP_PIXELS),Pt=G.getParameter(G.UNPACK_SKIP_ROWS),hi=G.getParameter(G.UNPACK_SKIP_IMAGES),ht=j.isCompressedTexture?j.mipmaps[X]:j.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,ht.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ht.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,w.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,w.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,w.min.z),j.isDataTexture||j.isData3DTexture?G.texSubImage3D(Ie,X,k.x,k.y,k.z,fe,Te,Re,De,He,ht.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ie,X,k.x,k.y,k.z,fe,Te,Re,De,ht.data)):G.texSubImage3D(Ie,X,k.x,k.y,k.z,fe,Te,Re,De,He,ht),G.pixelStorei(G.UNPACK_ROW_LENGTH,Fe),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,xt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,dn),G.pixelStorei(G.UNPACK_SKIP_ROWS,Pt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,hi),X===0&&q.generateMipmaps&&G.generateMipmap(Ie),pe.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),pe.unbindTexture()},this.resetState=function(){R=0,A=0,T=null,pe.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===bf?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===lu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ut?Lr:pv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Lr?Ut:Di}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Sw extends Ov{}Sw.prototype.isWebGL1Renderer=!0;class Uf{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=t,this.far=i}clone(){return new Uf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Mw extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class vm extends kn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ss=new pt,_m=new pt,ja=[],xm=new Br,Ew=new pt,co=new je,ho=new qs;class ym extends je{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vm(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Ew)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Br),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ss),xm.copy(e.boundingBox).applyMatrix4(ss),this.boundingBox.union(xm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ss),ho.copy(e.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(ho)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(co.geometry=this.geometry,co.material=this.material,co.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ho.copy(this.boundingSphere),ho.applyMatrix4(i),e.ray.intersectsSphere(ho)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ss),_m.multiplyMatrices(i,ss),co.matrixWorld=_m,co.raycast(e,ja);for(let o=0,a=ja.length;o<a;o++){const l=ja[o];l.instanceId=s,l.object=this,t.push(l)}ja.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new vm(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class kv extends Hr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sm=new pt,Ah=new yv,qa=new qs,Ya=new B;class Tw extends At{constructor(e=new en,t=new kv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qa.copy(i.boundingSphere),qa.applyMatrix4(r),qa.radius+=s,e.ray.intersectsSphere(qa)===!1)return;Sm.copy(r).invert(),Ah.copy(e.ray).applyMatrix4(Sm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,x=p;_<x;_++){const m=u.getX(_);Ya.fromBufferAttribute(f,m),Mm(Ya,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,x=p;_<x;_++)Ya.fromBufferAttribute(f,_),Mm(Ya,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Mm(n,e,t,i,r,s,o){const a=Ah.distanceSqToPoint(n);if(a<t){const l=new B;Ah.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class ww extends fn{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $o extends en{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],u=new B,h=new Pe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const p=i+f/t*r;u.x=e*Math.cos(p),u.y=e*Math.sin(p),o.push(u.x,u.y,u.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(a,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class hu extends en{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],d=[],p=[];let _=0;const x=[],m=i/2;let c=0;v(),o===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new ct(f,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(p,2));function v(){const S=new B,R=new B;let A=0;const T=(t-e)/i;for(let L=0;L<=s;L++){const y=[],E=L/s,F=E*(t-e)+e;for(let z=0;z<=r;z++){const Z=z/r,D=Z*l+a,b=Math.sin(D),N=Math.cos(D);R.x=F*b,R.y=-E*i+m,R.z=F*N,f.push(R.x,R.y,R.z),S.set(b,T,N).normalize(),d.push(S.x,S.y,S.z),p.push(Z,1-E),y.push(_++)}x.push(y)}for(let L=0;L<r;L++)for(let y=0;y<s;y++){const E=x[y][L],F=x[y+1][L],z=x[y+1][L+1],Z=x[y][L+1];h.push(E,F,Z),h.push(F,z,Z),A+=6}u.addGroup(c,A,0),c+=A}function g(S){const R=_,A=new Pe,T=new B;let L=0;const y=S===!0?e:t,E=S===!0?1:-1;for(let z=1;z<=r;z++)f.push(0,m*E,0),d.push(0,E,0),p.push(.5,.5),_++;const F=_;for(let z=0;z<=r;z++){const D=z/r*l+a,b=Math.cos(D),N=Math.sin(D);T.x=y*N,T.y=m*E,T.z=y*b,f.push(T.x,T.y,T.z),d.push(0,E,0),A.x=b*.5+.5,A.y=N*.5*E+.5,p.push(A.x,A.y),_++}for(let z=0;z<r;z++){const Z=R+z,D=F+z;S===!0?h.push(D,D+1,Z):h.push(D+1,D,Z),L+=3}u.addGroup(c,L,S===!0?1:2),c+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bo extends en{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],u=[],h=[];let f=e;const d=(t-e)/r,p=new B,_=new Pe;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){const c=s+m/i*o;p.x=f*Math.cos(c),p.y=f*Math.sin(c),l.push(p.x,p.y,p.z),u.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,h.push(_.x,_.y)}f+=d}for(let x=0;x<r;x++){const m=x*(i+1);for(let c=0;c<i;c++){const v=c+m,g=v,S=v+i+1,R=v+i+2,A=v+1;a.push(g,S,A),a.push(S,R,A)}}this.setIndex(a),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ti extends en{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const h=[],f=new B,d=new B,p=[],_=[],x=[],m=[];for(let c=0;c<=i;c++){const v=[],g=c/i;let S=0;c===0&&o===0?S=.5/t:c===i&&l===Math.PI&&(S=-.5/t);for(let R=0;R<=t;R++){const A=R/t;f.x=-e*Math.cos(r+A*s)*Math.sin(o+g*a),f.y=e*Math.cos(o+g*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+g*a),_.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(A+S,1-g),v.push(u++)}h.push(v)}for(let c=0;c<i;c++)for(let v=0;v<t;v++){const g=h[c][v+1],S=h[c][v],R=h[c+1][v],A=h[c+1][v+1];(c!==0||o>0)&&p.push(g,S,A),(c!==i-1||l<Math.PI)&&p.push(S,R,A)}this.setIndex(p),this.setAttribute("position",new ct(_,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ti(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wl extends en{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],u=[],h=new B,f=new B,d=new B;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const x=_/r*s,m=p/i*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),u.push(_/r),u.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const x=(r+1)*p+_-1,m=(r+1)*(p-1)+_-1,c=(r+1)*(p-1)+_,v=(r+1)*p+_;o.push(x,m,v),o.push(m,c,v)}this.setIndex(o),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Aw extends an{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ys extends Hr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rf,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Em extends Hr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rf,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zv extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Cw extends zv{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const xc=new pt,Tm=new B,wm=new B;class Rw{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pf,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Tm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tm),wm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wm),t.updateMatrixWorld(),xc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bw extends Rw{constructor(){super(new Lf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pw extends zv{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new bw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Lw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Am(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Am();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Am(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tf);const Bv={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class $s{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Dw=new Lf(-1,1,1,-1,0,1);class Uw extends en{constructor(){super(),this.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ct([0,2,0,0,2,0],2))}}const Nw=new Uw;class Nf{constructor(e){this._mesh=new je(Nw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Dw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Hv extends $s{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof an?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Yo.clone(e.uniforms),this.material=new an({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Nf(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Cm extends $s{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Iw extends $s{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Fw{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Pe);this._width=i.width,this._height=i.height,t=new On(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ci}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hv(Bv),this.copyPass.material.blending=Ai,this.clock=new Lw}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Cm!==void 0&&(o instanceof Cm?i=!0:o instanceof Iw&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ow extends $s{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Oe}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const kw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Oe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Gs extends $s{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Pe(e.x,e.y):new Pe(256,256),this.clearColor=new Oe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new On(s,o,{type:ci}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const d=new On(s,o,{type:ci});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new On(s,o,{type:ci});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const a=kw;this.highPassUniforms=Yo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new an({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Pe(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Bv;this.copyUniforms=Yo.clone(h.uniforms),this.blendMaterial=new an({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:gh,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Oe,this.oldClearAlpha=1,this.basic=new Cn,this.fsQuad=new Nf(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Pe(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Gs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Gs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new an({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Pe(.5,.5)},direction:{value:new Pe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new an({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Gs.BlurDirectionX=new Pe(1,0);Gs.BlurDirectionY=new Pe(0,1);const zw={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Bw extends $s{constructor(){super();const e=zw;this.uniforms=Yo.clone(e.uniforms),this.material=new Aw({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Nf(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},et.getTransfer(this._outputColorSpace)===st&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===nv?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===iv?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===rv?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Af?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===sv&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const ul=16,cl=.14,Ko={exp:{label:"Express",games:2,winBy:1,tbAt:0,need:1,cols:1},full:{label:"Completo",games:6,winBy:2,tbAt:6,need:2,cols:3}},Hw={drive:{T:1,d:7.2},globo:{T:1.9,d:8.7},dejada:{T:1.25,d:1.9},remate:{T:.62,d:6},saque:{T:1.15,d:5.2},x3:{T:.55,d:3.4},x4:{T:.62,d:8.4}},Rm={drive:[-.7,1.7,.28],saque:[-.7,1.7,.28],globo:[.1,2.5,.4],dejada:[.7,1.2,.3],remate:[2.8,1,.35]},Gw={drive:.5,globo:.35,dejada:-1,remate:.2,saque:.1,x3:.2,x4:.2},Vw={drive:.95,globo:.5,dejada:.8,remate:2.2},Ww=["Perfecto","Bien","Justo"],Gv={"2v2":[0,2,1,3],"1v1":[0,2]},Ch=n=>n<2?"a":"b",_i=n=>n==="a"?1:-1,Dr=n=>n==="a"?"b":"a",bm="#1F2A44",Xw=n=>{const e=parseInt(n.slice(1),16);return(e>>16&255)*.299+(e>>8&255)*.587+(e&255)*.114};function If(n,e,t,i=4){const r=document.createElement("canvas");r.width=n,r.height=e,t(r.getContext("2d"),n,e);const s=new ww(r);return s.anisotropy=i,s.colorSpace=Ut,s}let hl=null;function jw(){return hl||(hl=If(128,128,(n,e,t)=>{n.fillStyle="#fff",n.fillRect(0,0,e,t),n.globalCompositeOperation="destination-out";for(let i=0;i<6;i++)for(let r=0;r<6;r++)n.beginPath(),n.arc(14+i*20,14+r*20,5,0,6.283),n.fill()})),hl}function Pm(n,e,t){const i=new Rn,r=new Rn;r.position.y=.92,i.add(r);const s=(L,y=.75)=>new ys({color:L,roughness:y}),o=(L,y,E,F,z,Z,D)=>{const b=new je(new hu(L,y,E,14),s(F));return b.position.set(z,Z,D),b.castShadow=!0,b},a=(L,y,E,F,z,Z,D,b)=>{const N=new je(new Ti(L,16,12),s(y));return N.position.set(E,F,z),Z&&N.scale.set(Z,D,b),N.castShadow=!0,N},l=(L,y,E,F,z,Z,D,b)=>{const N=new je(new ai(L,y,E),s(F));return N.position.set(z,Z,D),N.castShadow=!!b,N},u=L=>{const y=new Rn;y.position.set(L*.12,.92,0),y.add(o(.105,.085,.42,bm,0,-.2,0));const E=new Rn;E.position.y=-.4,E.add(o(.07,.055,.42,n.skin,0,-.21,0),o(.06,.062,.12,"#F4F4F0",0,-.36,0));const F=l(.12,.08,.27,"#F4F4F0",0,-.48,-.04,!0);return E.add(F),y.add(E),y.userData.kn=E,y},h=u(-1),f=u(1);i.add(h,f);const d=o(.25,.2,.62,n.shirt,0,.3,0);d.scale.z=.62,r.add(d);const p=o(.2,.2,.16,bm,0,-.02,0);p.scale.z=.66,r.add(p),r.add(a(.105,n.shirt,-.29,.55,0),a(.105,n.shirt,.29,.55,0),o(.055,.065,.1,n.skin,0,.66,0));const _=a(.2,n.skin,0,.84,0);_.scale.set(1,1.1,1),r.add(_),r.add(a(.045,n.skin,-.2,.84,0),a(.045,n.skin,.2,.84,0),a(.03,n.skin,0,.82,-.2)),r.add(a(.028,"#fff",-.07,.86,-.178,1,.8,.6),a(.028,"#fff",.07,.86,-.178,1,.8,.6),a(.016,"#2a1d14",-.07,.86,-.195),a(.016,"#2a1d14",.07,.86,-.195)),r.add(l(.07,.012,.012,n.hair,-.07,.92,-.19),l(.07,.012,.012,n.hair,.07,.92,-.19),l(.06,.01,.01,"#8a4a40",0,.76,-.195));const x=new je(new Ti(.215,18,12,0,6.283,0,1.75),s(n.hair,.9));if(x.position.y=.88,x.castShadow=!0,r.add(x),n.style==="largo"&&r.add(l(.4,.5,.1,n.hair,0,.7,.17,!0)),n.style==="rodete"&&r.add(a(.1,n.hair,0,1.08,.05)),n.acc==="vincha"){const L=new je(new Wl(.212,.03,8,20),s("#E24B4A"));L.rotation.x=Math.PI/2,L.position.y=.91,r.add(L)}if(n.acc==="gorra"){const L=new je(new Ti(.235,16,10,0,6.283,0,1.45),s("#E24B4A"));L.position.y=.87,L.castShadow=!0,r.add(L),r.add(l(.3,.03,.2,"#A32D2D",0,.93,-.26))}n.acc==="lentes"&&r.add(l(.1,.05,.02,"#1B1B1A",-.07,.86,-.2),l(.1,.05,.02,"#1B1B1A",.07,.86,-.2));const m=Xw(n.shirt)<140,c=If(128,128,(L,y)=>{L.fillStyle=m?"#fff":"#1B1B1A",L.textAlign="center",L.font="500 17px sans-serif",L.fillText(String(e||"").split(" ")[0].toUpperCase().slice(0,9),y/2,34),L.font="500 62px sans-serif",L.fillText(String(t??7),y/2,100)}),v=new je(new qn(.26,.26),new Cn({map:c,transparent:!0,toneMapped:!1}));v.position.set(0,.34,.153),r.add(v);const g=new Rn;g.position.set(-.3,.52,0),g.add(o(.075,.07,.2,n.shirt,0,-.1,0),o(.052,.046,.34,n.skin,0,-.37,0),a(.055,n.skin,0,-.56,0)),r.add(g);const S=new Rn;S.position.set(.3,.52,0),S.add(o(.075,.07,.2,n.shirt,0,-.1,0),o(.052,.046,.34,n.skin,0,-.37,0),o(.058,.058,.05,"#fff",0,-.47,0),a(.055,n.skin,0,-.56,0),o(.02,.02,.22,"#2C2C2A",0,-.68,0),l(.06,.1,.03,"#2C2C2A",0,-.82,0,!0));const R=new Rn;R.position.y=-1;const A=new je(new Wl(.165,.02,8,24),s("#2C2C2A",.5));A.scale.set(1,1.2,1),A.castShadow=!0,R.add(A);const T=new je(new $o(.165,24),new ys({color:n.paddle,roughness:.6,map:jw(),alphaTest:.5,side:sn}));return T.scale.set(1,1.2,1),R.add(T),S.add(R),S.rotation.x=.5,r.add(S),i.userData={up:r,arm:S,la:g,lL:h,lR:f,kL:h.userData.kn,kR:f.userData.kn},i}function Lm(n){n.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(t=>{t.map&&t.map!==hl&&t.map.dispose(),t.dispose()})})}const qw={};let Ze=null,Ci=null,Ff=null,Ss=null,ra=!1;const Vv={};try{ra=localStorage.getItem("padel.mute")==="1"}catch{}function fo(){try{if(!Ze){Ze=new(window.AudioContext||window.webkitAudioContext),Ci=Ze.createGain(),Ci.gain.value=ra?0:.9;const n=Ze.createDynamicsCompressor();Ci.connect(n),n.connect(Ze.destination);const e=Ze.sampleRate*2,t=Ze.createBuffer(1,e,Ze.sampleRate),i=t.getChannelData(0);for(let r=0;r<e;r++)i[r]=Math.random()*2-1;Ff=t,$w()}Ze.state==="suspended"&&Ze.resume()}catch{}}const Yw=()=>ra;function Dm(n){ra=n;try{localStorage.setItem("padel.mute",n?"1":"0")}catch{}Ci&&Ci.gain.setTargetAtTime(n?0:.9,Ze.currentTime,.05)}function $w(){(import.meta&&qw||{}).VITE_SFX&&["hit","bounce","glass","crowd"].forEach(e=>{fetch(new URL(`sfx/${e}.ogg`,document.baseURI)).then(t=>t.ok?t.arrayBuffer():null).then(t=>t?Ze.decodeAudioData(t):null).then(t=>{t&&(Vv[e]=t)}).catch(()=>{})})}function $a(n,e=1,t=1){const i=Vv[n];if(!i||!Ze)return!1;const r=Ze.createBufferSource(),s=Ze.createGain();return r.buffer=i,r.playbackRate.value=t*(.94+Math.random()*.12),s.gain.value=e,r.connect(s),s.connect(Ci),r.start(),!0}function Tn({dur:n=.08,f:e=2e3,q:t=1,type:i="bandpass",gain:r=.4,attack:s=.002,f2:o,delay:a=0}){const l=Ze.currentTime+a,u=Ze.createBufferSource(),h=Ze.createBiquadFilter(),f=Ze.createGain();u.buffer=Ff,u.loop=!0,h.type=i,h.Q.value=t,h.frequency.setValueAtTime(e,l),o&&h.frequency.exponentialRampToValueAtTime(o,l+n),f.gain.setValueAtTime(1e-4,l),f.gain.exponentialRampToValueAtTime(r,l+s),f.gain.exponentialRampToValueAtTime(1e-4,l+n),u.connect(h),h.connect(f),f.connect(Ci),u.start(l,Math.random()),u.stop(l+n+.05)}function wn({f:n=200,f2:e,dur:t=.1,type:i="sine",gain:r=.3,delay:s=0}){const o=Ze.currentTime+s,a=Ze.createOscillator(),l=Ze.createGain();a.type=i,a.frequency.setValueAtTime(n,o),e&&a.frequency.exponentialRampToValueAtTime(e,o+t),l.gain.setValueAtTime(r,o),l.gain.exponentialRampToValueAtTime(1e-4,o+t),a.connect(l),l.connect(Ci),a.start(o),a.stop(o+t+.02)}const gr=()=>Ze&&!ra,vr={hit(n,e){if(!gr())return;const t=n==="remate"?1.5:n==="dejada"?.5:n==="globo"?.8:1;$a("hit",.7*t,n==="remate"?.8:1)||(Tn({dur:.05+.03*t,f:2300-(e||0)*350,q:1.2,gain:.55*t}),Tn({dur:.12,f:900,q:.8,type:"lowpass",gain:.35*t}),wn({f:190,f2:95,dur:.09,gain:.32*t}),n==="remate"&&(wn({f:85,f2:45,dur:.22,gain:.45}),Tn({dur:.18,f:3200,q:.6,gain:.3})),e===0&&wn({f:3600,f2:3e3,dur:.05,type:"triangle",gain:.06}))},bounce(){!gr()||$a("bounce",.8)||(Tn({dur:.06,f:500,q:.7,type:"lowpass",gain:.45}),wn({f:130,f2:70,dur:.07,gain:.3}))},wall(){!gr()||$a("glass",.7)||(Tn({dur:.16,f:2600,q:7,gain:.3}),Tn({dur:.07,f:5200,q:3,gain:.15}),wn({f:1180,dur:.32,gain:.05}),wn({f:1760,dur:.22,gain:.035}),Tn({dur:.2,f:300,q:1,type:"lowpass",gain:.12,delay:.01}))},net(){gr()&&(Tn({dur:.14,f:900,q:.7,type:"lowpass",gain:.3}),wn({f:140,f2:90,dur:.1,gain:.12}))},exit(){gr()&&Tn({dur:.5,f:400,f2:3500,q:1.5,gain:.22,attack:.15})},cheer(n=1){if(!gr()||$a("crowd",.6*n))return;Tn({dur:.35+1.1*n,f:900,q:.5,gain:.07+.1*n,attack:.2}),Tn({dur:.3+.9*n,f:2400,q:.6,gain:.04+.05*n,attack:.15});const e=Math.round(10+22*n);for(let t=0;t<e;t++)Tn({dur:.03,f:1500+Math.random()*2500,q:1,gain:.05+Math.random()*.05,delay:.1+Math.random()*(.6+n)});n>.9&&wn({f:520,f2:640,dur:.5,type:"sawtooth",gain:.02,delay:.1})},point(n,e){if(gr()){if(n==="punto"){wn({f:e?660:330,dur:.1,gain:.08});return}wn({f:520,dur:.12,gain:.1}),setTimeout(()=>wn({f:780,dur:n==="game"?.18:.12,gain:.1}),130),n!=="game"&&setTimeout(()=>wn({f:1040,dur:.25,gain:.1}),260)}}};function Kw(){if(!Ze||Ss)return;const n=Ze.createBufferSource(),e=Ze.createBiquadFilter(),t=Ze.createGain(),i=Ze.createOscillator(),r=Ze.createGain();n.buffer=Ff,n.loop=!0,e.type="bandpass",e.frequency.value=650,e.Q.value=.45,t.gain.value=.045,i.frequency.value=.23,r.gain.value=.015,i.connect(r),r.connect(t.gain),n.connect(e),e.connect(t),t.connect(Ci),n.start(),i.start(),Ss={s:n,lfo:i,g:t}}function Um(){if(Ss){try{Ss.g.gain.setTargetAtTime(0,Ze.currentTime,.2);const n=Ss;setTimeout(()=>{try{n.s.stop(),n.lfo.stop()}catch{}},800)}catch{}Ss=null}}const Qw={skin:"#E0AC82",hair:"#5F5E5A",style:"corto",shirt:"#888780",acc:"none",paddle:"#B4B2A9"},Zw=.14,yc=(n,e,t)=>Math.max(e,Math.min(t,n)),Nm=()=>{},Jw={uniforms:{tDiffuse:{value:null},time:{value:0},res:{value:new Pe(1,1)},blur:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};class eA{constructor(e,{onQuality:t,onReplay:i,look:r,autoQuality:s=!0}={}){this.container=e,this.autoQuality=s,this.onQuality=t||Nm,this.onReplay=i||Nm,this.rec=[],this.rp=null,this.replayArm=null,this.syncSw=!1,this.cheer=0,this.cheerDirty=!1,this.fovKick=0,this.lookInit=!1,this.look=new B,this.dIdx=0,this.composer=null,this.hq=!0,this.clk=0,this.slow=0,this.shake=0,this.mySlot=-1,this.myTeam="a",this.avatars=new Map,this.rosterKey="",this.preview=null,this.previewKey="",this.fxT=0,this.ripT=0,this.pT=0,this.hist=[],this.ok=!0;let o;try{o=new Ov({antialias:!0,powerPreference:"high-performance"})}catch{this.ok=!1;return}this.ren=o,this.dpr=window.devicePixelRatio||1,o.setPixelRatio(Math.min(this.dpr,2)),o.shadowMap.enabled=!0,o.shadowMap.type=tv,o.toneMapping=Af,o.toneMappingExposure=1,o.domElement.style.cssText="display:block;width:100%;height:100%;touch-action:none",e.appendChild(o.domElement),this.scene=new Mw,this.cam=new Dn(58,1,.1,160),this.aniso=Math.min(o.capabilities.getMaxAnisotropy(),8),this.buildWorld(),this.setupPost(),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(e),this.resize(),r&&this.setPreviewLook(r)}tex(e,t,i){return If(e,t,i,this.aniso)}buildWorld(){const e=this.scene,t=(b,N,W)=>this.tex(b,N,W);e.background=t(4,256,(b,N,W)=>{const P=b.createLinearGradient(0,0,0,W);P.addColorStop(0,"#6FAEE0"),P.addColorStop(1,"#DCEBF7"),b.fillStyle=P,b.fillRect(0,0,N,W)}),e.fog=new Uf("#DCEBF7",45,95),e.add(new Cw(15135227,3820090,2.3));const i=new Pw(16774109,2.6);i.position.set(6,18,10),i.castShadow=!0,i.shadow.mapSize.set(1024,1024);const r=i.shadow.camera;r.left=-14,r.right=14,r.top=18,r.bottom=-18,r.near=1,r.far=50,i.shadow.bias=-6e-4,e.add(i),this.dl=i;const s=(b,N=.8)=>new ys({color:b,roughness:N}),o=(b,N,W,P,I,H,Y,K)=>{const O=new je(new ai(b,N,W),s(P));return O.position.set(I,H,Y),O.castShadow=!!K,O},a=(b,N,W)=>(b.wrapS=b.wrapT=kl,b.repeat.set(N,W),b.needsUpdate=!0,b),l=t(512,1024,(b,N,W)=>{b.fillStyle="#2D74B8",b.fillRect(0,0,N,W);for(let P=0;P<12e3;P++)b.fillStyle=Math.random()<.5?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.06)",b.fillRect(Math.random()*N,Math.random()*W,2,2);for(let P=0;P<60;P++){const I=Math.random()*N,H=Math.random()*W,Y=18+Math.random()*70,K=b.createRadialGradient(I,H,0,I,H,Y);K.addColorStop(0,Math.random()<.55?"rgba(255,255,255,0.07)":"rgba(0,20,60,0.09)"),K.addColorStop(1,"rgba(0,0,0,0)"),b.fillStyle=K,b.fillRect(I-Y,H-Y,Y*2,Y*2)}[[156,.1],[868,.1],[512,.12]].forEach(([P,I])=>{const H=b.createLinearGradient(0,P-70,0,P+70);H.addColorStop(0,"rgba(255,255,255,0)"),H.addColorStop(.5,`rgba(255,255,255,${I})`),H.addColorStop(1,"rgba(255,255,255,0)"),b.fillStyle=H,b.fillRect(0,P-70,N,140)}),b.strokeStyle="#f4f6f8",b.lineWidth=4,b.strokeRect(2,2,N-4,W-4),b.beginPath(),b.moveTo(0,156),b.lineTo(N,156),b.moveTo(0,868),b.lineTo(N,868),b.moveTo(256,156),b.lineTo(256,868),b.stroke();for(let P=0;P<700;P++){const I=Math.random()<.5,H=Math.random(),Y=I?H*N:[2,256,N-2][Math.floor(Math.random()*3)],K=I?[2,156,868,W-2][Math.floor(Math.random()*4)]:156+H*712;b.fillStyle="rgba(45,116,184,0.55)",b.fillRect(Y+(Math.random()-.5)*3,K+(Math.random()-.5)*3,1+Math.random()*2,1+Math.random()*2)}}),u=new je(new qn(10,20),new ys({map:l,roughness:.5}));u.rotation.x=-Math.PI/2,u.receiveShadow=!0,e.add(u);const h=new je(new qn(26,38),s("#2F6F55",.9));h.rotation.x=-Math.PI/2,h.position.y=-.01,h.receiveShadow=!0,e.add(h);const f=new je(new qn(140,140),s("#7A7973",1));f.rotation.x=-Math.PI/2,f.position.y=-.03,e.add(f);const d=t(32,32,(b,N,W)=>{b.strokeStyle="rgba(40,40,40,0.9)",b.lineWidth=2,b.beginPath(),b.moveTo(0,.5),b.lineTo(N,.5),b.moveTo(.5,0),b.lineTo(.5,W),b.stroke()}),p=(b,N,W,P,I,H,Y)=>{const K=d.clone();a(K,b/Y,N/Y);const O=new je(new qn(b,N),new Cn({map:K,transparent:!0,side:sn,depthWrite:!1}));O.position.set(W,P,I),O.rotation.y=H||0,e.add(O)},_=new ys({color:"#CFE8F7",transparent:!0,opacity:.16,roughness:.08,metalness:.35,side:sn,depthWrite:!1}),x=(b,N,W,P,I,H)=>{const Y=new je(new qn(b,N),_);Y.position.set(W,P,I),Y.rotation.y=H||0,e.add(Y)};x(10,3,0,1.5,10,0),x(10,3,0,1.5,-10,0),x(20,2,5,1,0,Math.PI/2),x(20,2,-5,1,0,Math.PI/2),p(10,1,0,3.5,-10,0,.12),p(20,1,5,2.5,0,Math.PI/2,.12),p(20,1,-5,2.5,0,Math.PI/2,.12);const m="#3A3A38";for(let b=-2;b<=2;b++)e.add(o(.07,4,.07,m,b*2.5,2,-10.02));for(let b=-4;b<=4;b++)e.add(o(.07,3,.07,m,5.02,1.5,b*2.5),o(.07,3,.07,m,-5.02,1.5,b*2.5));e.add(o(10.1,.06,.06,m,0,3,-10.02),o(10.1,.06,.06,m,0,4,-10.02),o(.06,.06,20,m,5.02,2,0),o(.06,.06,20,m,5.02,3,0),o(.06,.06,20,m,-5.02,2,0),o(.06,.06,20,m,-5.02,3,0));const c=d.clone();a(c,10/.12,.88/.12);const v=new je(new qn(10,.88),new Cn({map:c,transparent:!0,side:sn,depthWrite:!1}));v.position.set(0,.44,0),e.add(v),e.add(o(10,.07,.05,"#fff",0,.91,0),o(.1,1.02,.1,"#2C2C2A",-5.05,.51,0,!0),o(.1,1.02,.1,"#2C2C2A",5.05,.51,0,!0));const g=(b,N,W,P,I,H)=>{const Y=t(512,96,(K,O,Q)=>{K.fillStyle=N,K.fillRect(0,0,O,Q),K.fillStyle="#fff",K.font="500 46px sans-serif",K.textAlign="center",K.textBaseline="middle",K.fillText(b,O/2,Q/2+2)});[0,Math.PI].forEach(K=>{const O=new je(new qn(H,H*96/512),new Cn({map:Y,toneMapped:!1})),Q=Math.sin(I+K)*.01,oe=Math.cos(I+K)*.01;O.position.set(W+Q,.45,P+oe),O.rotation.y=I+K,e.add(O)})};g("CLUB SIERRAS","#0C447C",-2.6,-10.2,0,4.6),g("PADEL PRO","#D85A30",2.6,-10.2,0,4.6),g("CLUB SIERRAS","#0C447C",-2.6,10.2,0,4.6),g("PADEL PRO","#D85A30",2.6,10.2,0,4.6),g("CLUB SIERRAS","#0C447C",5.2,-4.5,-Math.PI/2,4.6),g("PADEL PRO","#D85A30",5.2,4.5,-Math.PI/2,4.6),g("PADEL PRO","#D85A30",-5.2,-4.5,Math.PI/2,4.6),g("CLUB SIERRAS","#0C447C",-5.2,4.5,Math.PI/2,4.6);const S=new Rn;e.add(S),this.crowd=S;const R=170,A=new ym(new ai(.45,.8,.35),new Em({color:16777215}),R),T=new ym(new Ti(.14,8,6),new Em({color:16777215}),R),L=new At,y=new Oe,E=["#D85A30","#185FA5","#EF9F27","#1D9E75","#F1EFE8","#534AB7","#D4537E"],F=["#F5D0B0","#E0AC82","#B9774F","#7A4A2E"];let z=0;for(let b=0;b<6;b++){const N=.5+b*.9,W=new je(new ai(24,N,1.3),s("#8A8984",1));W.position.set(0,N/2-.03,-12.4-b*1.3),S.add(W);for(let P=-9;P<=9&&z<R;P+=.75)Math.random()<.18||(L.position.set(P+(Math.random()-.5)*.2,N+.4,-12.4-b*1.3),L.scale.set(1,.85+Math.random()*.3,1),L.updateMatrix(),A.setMatrixAt(z,L.matrix),A.setColorAt(z,y.set(E[Math.floor(Math.random()*E.length)])),L.position.y=N+.95,L.scale.set(1,1,1),L.updateMatrix(),T.setMatrixAt(z,L.matrix),T.setColorAt(z,y.set(F[Math.floor(Math.random()*F.length)])),z++)}A.count=z,T.count=z,S.add(A,T),[-1,1].forEach(b=>{const N=new je(new hu(.09,.12,9,8),s("#5F5E5A",.6));N.position.set(b*8,4.5,-11),S.add(N);const W=new je(new ai(1.4,.3,.4),new Cn({color:"#FFF6D0"}));W.position.set(b*8,9.1,-10.8),S.add(W)}),this.crowd2=S.clone(),this.crowd2.rotation.y=Math.PI,e.add(this.crowd2),this.cm=[],[this.crowd,this.crowd2].forEach(b=>b.traverse(N=>{N.isInstancedMesh&&this.cm.push({m:N,base:N.instanceMatrix.array.slice(),g:b})}));try{const b=new bv(128),N=new Cv(.1,200,b);N.position.set(0,2,0),e.add(N),N.update(this.ren,e),e.remove(N),_.envMap=b.texture,_.envMapIntensity=.9}catch{}const Z=t(128,64,(b,N,W)=>{b.fillStyle="#D9E03A",b.fillRect(0,0,N,W);for(let P=0;P<900;P++)b.fillStyle="rgba(255,255,255,0.07)",b.fillRect(Math.random()*N,Math.random()*W,1,1);b.strokeStyle="#F4F6E8",b.lineWidth=5,b.beginPath(),b.arc(32,32,26,-1.2,1.2),b.stroke(),b.beginPath(),b.arc(96,32,26,Math.PI-1.2,Math.PI+1.2),b.stroke()});this.ball=new je(new Ti(Zw,16,12),new ys({map:Z,roughness:.95,emissive:"#4A4A08"})),this.ball.castShadow=!0,e.add(this.ball);const D=(b,N,W)=>{const P=new je(b,new Cn({color:N,transparent:!0,opacity:W,side:sn,depthWrite:!1}));return P.rotation.x=-Math.PI/2,e.add(P),P};this.bsh=D(new $o(.2,14),"#000",.3),this.ring=D(new bo(.85,1,28),"#fff",.4),this.ring.position.y=.03,this.aim=D(new bo(.35,.5,20),"#97C459",.9),this.aim.position.y=.04,this.rip=D(new bo(.22,.3,18),"#fff",.5),this.rip.visible=!1,this.fxm=new je(new Ti(.2,10,8),new Cn({color:"#fff",transparent:!0,opacity:.8})),this.fxm.visible=!1,e.add(this.fxm),this.trail=[];for(let b=0;b<8;b++){const N=new je(new Ti(.09,6,6),new Cn({color:"#E8E34A",transparent:!0,opacity:.45-b*.05}));N.visible=!1,e.add(N),this.trail.push(N)}this.decals=[];for(let b=0;b<12;b++){const N=new je(new $o(.11,12),new Cn({color:"#0b2a4a",transparent:!0,opacity:0,depthWrite:!1}));N.rotation.x=-Math.PI/2,N.position.y=.012,N.visible=!1,N.life=0,e.add(N),this.decals.push(N)}this.NP=16,this.pg=new en,this.pp=new Float32Array(this.NP*3),this.pv=new Float32Array(this.NP*3),this.pg.setAttribute("position",new kn(this.pp,3)),this.pm=new kv({color:"#fff",size:.13,transparent:!0,opacity:.9,depthWrite:!1}),this.pts=new Tw(this.pg,this.pm),this.pts.frustumCulled=!1,this.pts.visible=!1,e.add(this.pts)}setupPost(){try{const e=new On(2,2,{type:ci,samples:4}),t=new Fw(this.ren,e);t.addPass(new Ow(this.scene,this.cam)),this.bloom=new Gs(new Pe(2,2),.3,.55,.92),t.addPass(this.bloom),t.addPass(new Bw),this.grade=new Hv(Jw),t.addPass(this.grade),this.composer=t}catch{this.composer=null}}resize(){if(!this.ok)return;const e=Math.max(1,this.container.clientWidth),t=Math.max(1,this.container.clientHeight);if(this.w=e,this.h=t,this.ren.setPixelRatio(this.hq?Math.min(this.dpr,2):1),this.ren.setSize(e,t,!1),this.cam.aspect=e/t,this.cam.updateProjectionMatrix(),this.composer){const i=this.ren.getPixelRatio();this.composer.setPixelRatio(i),this.composer.setSize(e,t),this.grade.uniforms.res.value.set(e*i,t*i)}}setQuality(e){this.ok&&(this.hq=e,this.ren.shadowMap.enabled=e,this.dl.castShadow=e,this.resize(),this.scene.traverse(t=>{t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>{i.needsUpdate=!0})}))}setPreviewLook(e,t="Vos",i=10){if(!this.ok)return;const r=JSON.stringify(e)+t+i;r!==this.previewKey&&(this.previewKey=r,this.preview&&(this.scene.remove(this.preview),Lm(this.preview)),this.preview=Pm(e,t,i),this.scene.add(this.preview))}syncRoster(e){const t=e.map(r=>`${r.slot}:${r.uid||"bot"}:${r.name}:${r.num}:${JSON.stringify(r.look)}`).join("|");if(t===this.rosterKey)return;this.rosterKey=t,this.avatars.forEach(r=>{this.scene.remove(r.g),Lm(r.g)}),this.avatars.clear();const i={a:[],b:[]};e.forEach(r=>i[r.slot<2?"a":"b"].push(r)),e.forEach(r=>{const s=r.slot<2?"a":"b",o=i[s],a=o.indexOf(r),l=Pm(r.look||Qw,r.name,r.num);l.rotation.y=s==="a"?0:Math.PI,this.scene.add(l),this.avatars.set(r.slot,{g:l,team:s,off:r.slot*1.7,sw:null,swId:0,lx:o.length>1?a===0?2.3:-2.3:0,lz:(s==="a"?1:-1)*(o.length>1?7:8)})})}animate(e,t,i,r,s){const o=e.g.userData,a=Math.sin(this.clk*11+e.off)*r,l=Math.cos(this.clk*11+e.off)*r;o.lL.rotation.x=a*.9,o.lR.rotation.x=-a*.9,o.kL.rotation.x=-(Math.max(0,-l)*.95+.14),o.kR.rotation.x=-(Math.max(0,l)*.95+.14),o.la.rotation.x=-a*.8,o.up.rotation.x=-.14*r,e.g.position.set(t,Math.abs(a)*.04,i);let u=0;if(e.sw){e.sw.t+=s;const h=Math.min(1,e.sw.t/e.sw.dur),f=1-Math.pow(1-h,3);o.arm.rotation.x=e.sw.a0+(e.sw.a1-e.sw.a0)*f,o.arm.rotation.y=e.sw.yaw*Math.sin(Math.PI*h),u=(e.sw.yaw>0?.55:-.45)*Math.sin(Math.PI*h),e.sw.t>e.sw.dur+.25&&(e.sw=null,o.arm.rotation.set(.5,0,0))}else o.arm.rotation.x=.5+a*.15;o.up.rotation.y=u}handleEvent(e){if(this.ok){if(e.t==="hit"){const t=e.gold||e.q===0,i=e.gold?"#EF9F27":["#EF9F27","#ffffff","#B4B2A9"][e.q];this.fxm.material.color.set(i),this.fxm.position.set(e.x,e.y,e.z),this.fxm.visible=!0,this.fxT=.25,this.hq&&this.burst(e.x,e.y,e.z,i);const r=e.slot===this.mySlot;if(this.shake=Math.max(this.shake,(e.shot==="remate"?.28:t?.12:.05)*(r?1:.5)),(e.shot==="remate"||e.gold)&&(this.fovKick=Math.min(this.fovKick,-3.5)),vr.hit(e.shot,e.q),r&&navigator.vibrate)try{navigator.vibrate(e.shot==="remate"?35:e.q===0?22:12)}catch{}}else if(e.t==="bounce"){this.rip.position.set(e.x,.04,e.z),this.rip.visible=!0,this.ripT=.3,vr.bounce();const t=this.decals[this.dIdx++%this.decals.length];t.position.set(e.x,.012,e.z),t.life=7,t.visible=!0,this.hq&&this.burst(e.x,.05,e.z,"#d9ccae",.55)}else if(e.t==="wall")vr.wall();else if(e.t==="net")vr.net();else if(e.t==="point"){const t=this.mySlot<0||e.who===this.myTeam;vr.point(e.ev,t);const i=e.replay?1.3:e.ev==="punto"?.55:1;this.cheer=Math.max(this.cheer,Math.min(1,i)),vr.cheer(i),e.label&&(this.shake=Math.max(this.shake,.3),this.fovKick=Math.min(this.fovKick,-7),vr.exit()),e.replay&&(this.replayArm=this.clk+.45)}}}burst(e,t,i,r,s=1){this.pm.color.set(r);for(let o=0;o<this.NP;o++){this.pp[o*3]=e,this.pp[o*3+1]=t,this.pp[o*3+2]=i;const a=Math.random()*6.283,l=(Math.random()*2-.5)*s,u=1.5+Math.random()*2.5;this.pv[o*3]=Math.cos(a)*u,this.pv[o*3+1]=l*u+1*s,this.pv[o*3+2]=Math.sin(a)*u}this.pT=.45,this.pts.visible=!0,this.pg.attributes.position.needsUpdate=!0}updateFx(e){if(this.fxT>0){this.fxT-=e;const t=1-Math.max(this.fxT,0)/.25;this.fxm.scale.setScalar(1+t*3),this.fxm.material.opacity=.8*(1-t),this.fxT<=0&&(this.fxm.visible=!1)}if(this.ripT>0){this.ripT-=e;const t=1-Math.max(this.ripT,0)/.3;this.rip.scale.set(1+t*3,1+t*3,1),this.rip.material.opacity=.5*(1-t),this.ripT<=0&&(this.rip.visible=!1)}if(this.pT>0){this.pT-=e;for(let t=0;t<this.NP;t++)this.pv[t*3+1]-=9*e,this.pp[t*3]+=this.pv[t*3]*e,this.pp[t*3+1]=Math.max(.03,this.pp[t*3+1]+this.pv[t*3+1]*e),this.pp[t*3+2]+=this.pv[t*3+2]*e;this.pg.attributes.position.needsUpdate=!0,this.pm.opacity=Math.max(0,this.pT/.45)*.9,this.pT<=0&&(this.pts.visible=!1)}this.decals.forEach(t=>{t.visible&&(t.life-=e,t.material.opacity=.32*Math.min(1,t.life/2.5),t.life<=0&&(t.visible=!1))}),this.updateCrowd(e)}updateCrowd(e){if(this.cheer<=.001){this.cheerDirty&&(this.cm.forEach(i=>{i.m.instanceMatrix.array.set(i.base),i.m.instanceMatrix.needsUpdate=!0}),this.cheerDirty=!1);return}this.cheer=Math.max(0,this.cheer-e*.45);const t=.3*Math.min(1,this.cheer*1.6);this.cm.forEach(i=>{if(!i.g.visible)return;const r=i.m.instanceMatrix.array;for(let s=0;s<i.m.count;s++)r[s*16+13]=i.base[s*16+13]+Math.abs(Math.sin(this.clk*7+s*.73%6.283))*t;i.m.instanceMatrix.needsUpdate=!0}),this.cheerDirty=!0}placeAvatars(e,t){this.avatars.forEach(i=>{i.g.visible=!1}),e.forEach(i=>{const r=this.avatars.get(i.slot);if(r){if(r.g.visible=!0,!this.syncSw&&i.swId&&i.swId!==r.swId){const s=Rm[i.swK]||Rm.remate;r.sw={a0:s[0],a1:s[1],dur:s[2],yaw:i.swYaw,t:0}}r.swId=i.swId,this.animate(r,i.x,i.z,i.mv,t),r.g.rotation.y=r.team==="a"?0:Math.PI}}),this.syncSw=!1}placeBall(e,t){this.ball.visible=!0,this.bsh.visible=!0,this.ball.position.set(e.x,e.y,e.z);const i=e.vz>=0?1:-1;this.ball.rotation.x+=e.vz*t*.8+i*(e.spin||0)*t*16,this.ball.rotation.z-=e.vx*t*.8,this.bsh.position.set(e.x,.02,e.z),this.bsh.scale.setScalar(Math.max(.4,1-e.y*.12)),this.hist.unshift({x:e.x,y:e.y,z:e.z}),this.hist.length>9&&this.hist.pop();const r=Math.hypot(e.vx,e.vy,e.vz)>7&&!e.hold;this.trail.forEach((s,o)=>{const a=this.hist[o+1];s.visible=r&&!!a,a&&(s.position.set(a.x,a.y,a.z),s.scale.setScalar(1-o*.1))})}startReplay(){const e=this.clk,t=this.rec.filter(s=>s.t>=e-2.5);if(t.length<12)return;const i=t.slice(-12),r=i.reduce((s,o)=>s+o.b[0],0)/i.length;this.rp={frames:t,t0:t[0].t,dur:t[t.length-1].t-t[0].t,t:0,i:0,speed:.5,side:r>=0?1:-1},this.hist.length=0,this.onReplay(!0)}endReplay(){this.rp&&(this.rp=null,this.syncSw=!0,this.lookInit=!1,this.hist.length=0,this.avatars.forEach(e=>{e.sw=null}),this.onReplay(!1))}skipReplay(){this.endReplay(),this.replayArm=null}renderReplay(e){const t=this.rp;if(this.clk-=e*(1-t.speed),t.t+=e*t.speed,t.t>=t.dur)return this.endReplay(),!1;const i=t.frames;for(;t.i<i.length-2&&i[t.i+1].t-t.t0<=t.t;)t.i++;const r=i[t.i],s=i[t.i+1],o=yc((t.t-(r.t-t.t0))/Math.max(1e-4,s.t-r.t),0,1),a=r.e.map(p=>{const _=s.e.find(x=>x[0]===p[0])||p;return{slot:p[0],x:p[1]+(_[1]-p[1])*o,z:p[2]+(_[2]-p[2])*o,mv:p[3],swId:p[4],swK:p[5],swYaw:p[6]}}),l=r.b,u=s.b,h={x:l[0]+(u[0]-l[0])*o,y:l[1]+(u[1]-l[1])*o,z:l[2]+(u[2]-l[2])*o,vx:l[3],vy:l[4],vz:l[5],spin:l[6],hold:!1};this.placeAvatars(a,e*t.speed),this.placeBall(h,e*t.speed),this.ring.visible=!1,this.aim.visible=!1;const f=t.t/t.dur,d=this.cam;return d.fov=36,d.position.set(t.side*(12.5-2.5*f),5.2+1.2*f,yc(h.z*.55,-5.5,5.5)),this.look.lerp(new B(h.x*.6,1,h.z),1-Math.exp(-6*e)),d.lookAt(this.look),!0}render(e,t,i={}){if(!this.ok)return;t=Math.min(t,.1),this.clk+=t,this.autoQuality&&this.hq&&e&&e.st!=="lobby"&&(t>.036?this.slow++:this.slow=Math.max(0,this.slow-1),this.slow>70&&(this.slow=0,this.setQuality(!1),this.onQuality(!1)));const r=this.cam,s=e&&e.phase==="match"&&e.ball,o=e&&e.ys?e.ys:1;if(this.crowd.visible=this.hq&&o>0,this.crowd2.visible=this.hq&&o<0,this.updateFx(t),!s&&this.rp&&this.endReplay(),!e)this.lookInit=!1,this.hideGame(!0),this.preview&&(this.preview.visible=!0,this.preview.rotation.y=.6*Math.sin(this.clk*.8),this.preview.position.set(0,0,8.5)),this.avatars.forEach(a=>{a.g.visible=!1}),r.fov=40,r.position.set(.2,1.3,3.9),r.lookAt(0,1,8.5),this.offset(.2);else if(s){if(this.preview&&(this.preview.visible=!1),this.syncRoster(e.roster),this.mySlot=e.mySlot,this.myTeam=e.mySlot>=0?e.mySlot<2?"a":"b":"a",this.rp||e.events.forEach(a=>this.handleEvent(a)),this.replayArm!=null&&this.clk>=this.replayArm&&(this.replayArm=null,this.startReplay()),this.offset(0),!(this.rp&&this.renderReplay(t))){const a=e.ball;if(this.placeAvatars(e.ents,t),this.placeBall(a,t),e.st==="serve"||e.st==="play"||e.st==="point")for(this.rec.push({t:this.clk,e:e.ents.map(h=>[h.slot,h.x,h.z,h.mv,h.swId,h.swK,h.swYaw]),b:[a.x,a.y,a.z,a.vx,a.vy,a.vz,a.spin||0]});this.rec.length&&this.clk-this.rec[0].t>3.2;)this.rec.shift();const l=e.ents.find(h=>h.slot===e.mySlot);let u;if(l){const h=e.ys,f=e.st==="play"&&a.z*h>.2&&a.vz*h>-.5&&Math.hypot(a.x-l.x,a.z-l.z)<2&&a.y<2.8;this.ring.visible=!0,this.ring.position.set(l.x,.03,l.z),this.ring.material.color.set(f?"#97C459":"#fff"),this.ring.material.opacity=f?.9:.35;const d=i.aim==null?yc(-l.x*.5,-3.8,3.8):i.aim;this.aim.visible=f||e.st==="serve"&&e.srv===e.mySlot,this.aim.position.set(d,.04,-6.2*h),r.position.set(l.x*.5,8.8,19.5*h),u=new B(l.x*.35+a.x*.1,0,-1.5*h+a.z*.07)}else this.ring.visible=!1,this.aim.visible=!1,r.position.set(Math.sin(this.clk*.15)*4,9,19.5),u=new B(a.x*.1,0,-1.5+a.z*.07);this.lookInit?this.look.lerp(u,1-Math.exp(-5*t)):(this.look.copy(u),this.lookInit=!0),this.fovKick*=Math.exp(-3*t),r.fov=58+this.fovKick,this.shake>0&&(this.shake=Math.max(0,this.shake-t*1.2),r.position.x+=(Math.random()-.5)*this.shake,r.position.y+=(Math.random()-.5)*this.shake),r.lookAt(this.look)}}else{this.lookInit=!1,this.hideGame(!0),this.preview&&(this.preview.visible=!1),this.syncRoster(e.roster),this.mySlot=e.mySlot,this.avatars.forEach(l=>{l.g.visible=!0,this.animate(l,l.lx,l.lz,0,t),l.g.rotation.y=l.team==="a"?0:Math.PI});const a=this.clk*.12;r.fov=52,r.position.set(Math.sin(a)*11,16,Math.cos(a)*22),r.lookAt(0,0,0),this.offset(.3)}r.updateProjectionMatrix(),this.hq&&this.composer?(this.grade.uniforms.time.value=this.clk*7%97,this.composer.render(t)):this.ren.render(this.scene,r)}hideGame(e){this.ball.visible=!e,this.bsh.visible=!e,this.ring.visible=!e,this.aim.visible=!e,this.trail.forEach(t=>{t.visible=!1})}offset(e){if(!e){this.cam.clearViewOffset();return}this.cam.setViewOffset(this.w,this.h,0,Math.round(this.h*e),this.w,this.h)}dispose(){this.ok&&(this.ro.disconnect(),this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(t=>{t.map&&t.map.dispose(),t.dispose()})}),this.ren.dispose(),this.ren.domElement.remove())}}function Im(){return{sets:[],g:{a:0,b:0},p:{a:0,b:0},tb:!1,sw:{a:0,b:0},srv:"a",sIdx:{a:0,b:0}}}const tA=["0","15","30","40"],Rh=(n,e)=>n.tb?String(n.p[e]):tA[n.p[e]],nA=n=>!n.tb&&n.p.a===3&&n.p.b===3;function iA(n,e,t){const i=Ko[t],r=Dr(e);return n.tb?(n.p[e]++,(n.p.a+n.p.b)%2===1&&(n.srv=Dr(n.srv)),n.p[e]>=7&&n.p[e]-n.p[r]>=2?(n.g[e]++,n.srv=Dr(n.srv),n.sIdx[n.srv]++,Wv(n,e,i)):"punto"):n.p[e]===3?rA(n,e,i):(n.p[e]++,"punto")}function rA(n,e,t){const i=Dr(e);return n.g[e]++,n.p.a=0,n.p.b=0,n.srv=Dr(n.srv),n.sIdx[n.srv]++,n.g[e]>=t.games&&n.g[e]-n.g[i]>=t.winBy?Wv(n,e,t):(t.tbAt&&n.g.a===t.tbAt&&n.g.b===t.tbAt&&(n.tb=!0),"game")}function Wv(n,e,t){return n.sets.push({a:n.g.a,b:n.g.b}),n.sw[e]++,n.g.a=0,n.g.b=0,n.p.a=0,n.p.b=0,n.tb=!1,n.sw[e]>=t.need?"match":"set"}const An=(n,e,t)=>Math.max(e,Math.min(t,n)),yt=n=>Math.round(n*100)/100,sA=20;class Fm{constructor({fmt:e="exp",rng:t=Math.random}={}){this.fmt=e,this.rng=t,this.state="idle",this.ents=[],this.ball={x:0,y:1,z:0,vx:0,vy:0,vz:0,last:null,bounces:0,shot:"",hold:!0,out:!1,spin:0},this.m=Im(),this.events=[],this.srv=null,this.stT=0,this.serveT=0,this.rallyT=0,this.rallyHits=0,this.matchEnd=!1,this.winner=null,this.pending=null,this.swSeq=0}emit(e){this.events.push(e)}drain(){const e=this.events;return this.events=[],e}team(e){return this.ents.filter(t=>t.team===e)}entOf(e){return this.ents.find(t=>t.uid===e)||null}setRoster(e){const t=new Map(this.ents.map(i=>[i.slot,i]));this.ents=e.map(i=>{const r=t.get(i.slot);return r&&r.uid===i.uid?(r.name=i.name,r):{slot:i.slot,team:Ch(i.slot),uid:i.uid,name:i.name,bot:i.uid==null,x:0,z:0,mv:0,sw:null,lv:null,cd:0,hx:0,buf:null,inp:{mx:0,mz:0,ax:null,age:9}}}),["a","b"].forEach(i=>{const r=this.team(i);r.forEach((s,o)=>{s.hx=r.length>1?o===0?2.3:-2.3:0})})}start(e){this.fmt=e||this.fmt,this.m=Im(),this.matchEnd=!1,this.winner=null,this.newServe()}input(e,t){const i=this.entOf(e);i&&(i.inp.mx=An(+t.mx||0,-1,1),i.inp.mz=An(+t.mz||0,-1,1),i.inp.ax=t.ax==null?null:An(+t.ax,-4.2,4.2),i.inp.age=0,t.shot&&this.shotInput(i,t.shot,i.inp.ax))}newServe(){this.pending&&(this.setRoster(this.pending),this.pending=null,this.emit({t:"roster"}));const e=this.m.srv,t=this.team(e);this.srv=t.length?t[this.m.sIdx[e]%t.length]:null,this.ents.forEach(r=>{const s=_i(r.team),o=r===this.srv,a=r.team===e&&!o,l=this.team(r.team).length>1;r.x=o?r.hx*.5:r.hx,r.z=s*(o?8.8:a?3.8:l?7:8.2),r.mv=0,r.sw=null,r.lv=null,r.buf=null,r.cd=0});const i=this.ball;i.hold=!0,i.vx=i.vy=i.vz=0,i.last=null,i.out=!1,i.bounces=0,i.spin=0,this.state="serve",this.serveT=1,this.rallyT=0,this.rallyHits=0,this.emit({t:"serve",slot:this.srv?this.srv.slot:-1}),nA(this.m)&&this.emit({t:"msg",tx:"Punto de oro",ms:2200,gold:!0})}point(e,t){if(this.state!=="play")return;const i=iA(this.m,e,this.fmt);this.state="point";const r=!!t||i==="set"||i==="match";this.stT=i==="punto"&&!t?1.3:r?6:2.3,this.matchEnd=i==="match",this.matchEnd&&(this.winner=e),this.emit({t:"point",who:e,ev:i,replay:r,label:t||null,pts:[Rh(this.m,"a"),Rh(this.m,"b")]})}fault(e){this.point(Dr(e))}launch(e,t,i,r){const s=this.ball,o=s.x,a=s.y,l=s.z;let u,h,f;for(let d=0;d<6;d++){u=(e-o)/i,f=(t-l)/i,h=(cl-a)/i+.5*ul*i;const p=(0-l)/f,_=a+h*p-.5*ul*p*p;if(!r||p>0&&p<i&&_>1.25)break;i+=.12}s.vx=u,s.vy=h,s.vz=f}swing(e,t,i){e.sw={id:++this.swSeq,k:t,yaw:i||0,t:0}}hit(e,t,i,r,s,o,a,l){const u=e==="a"?-1:1;let h=t,f=!1;l&&(h=l.ok?l.k:"remate",f=l.ok);const d=Hw[h],p=[0,.5,1.3][o],_=u*(d.d+(this.rng()-.5)*(.6+(f?.3:p))),x=d.T*[.9,1,1.12][o];i=An(i+(this.rng()-.5)*2*(f?.4:p),-4.4,4.4),this.launch(i,_,r?.5:x,!r);const m=this.ball;m.last=e,m.bounces=0,m.shot=h,m.hold=!1,m.out=!1,m.spin=(Gw[h]||0)*[1.2,1,.6][o],this.rallyT=0,this.rallyHits++,this.swing(a,l?"remate":t,s)}reach(e){const t=this.ball;if(this.state!=="play"||!t.last||t.last===e.team)return!1;const i=_i(e.team);return t.z*i>.2&&Math.hypot(t.x-e.x,t.z-e.z)<2&&t.y<2.8}quality(e,t){const i=this.ball,r=_i(t.team),s=i.x-t.x,o=i.z-t.z,a=Math.hypot(s,o),l=Math.abs(a-1)*.9+Math.abs(i.y-Vw[e])*.7+(o*r>.35?.5:0);return l<.55?0:l<1.15?1:2}aimFor(e,t){return t??An(-e.x*.5,-3.8,3.8)}impact(e,t,i,r){const s=this.ball;this.emit({t:"hit",slot:r.slot,shot:t,q:e,gold:!!i,x:yt(s.x),y:yt(s.y),z:yt(s.z)})}exec(e,t,i){const r=this.ball,s=_i(e.team);e.cd=.35;const o=t==="x3"||t==="x4";if((o||t==="remate")&&r.y<(o?1.7:1.3)){this.swing(e,"remate",0),this.emit({t:"msg",slot:e.slot,tx:o?"Necesitás una pelota alta":"Muy baja para rematar",ms:900});return}const a=o?"remate":t,l=this.quality(a,e),u=(r.x-e.x)*s<0,h=r.x-e.x,f=r.z-e.z;e.lv={x:An(h,-.9,.9)*5,z:An(f,-.9,.9)*5,t:.12};let d=null,p=this.aimFor(e,i);if(o){const x=l===0||l===1&&this.rng()<.55;d={k:t,ok:x},p=t==="x3"?(p>=0?1:-1)*3.9:p*.5}this.hit(e.team,a,p,!1,u?.9:0,l,e,d);let _;o?_=d.ok?t:"Remate":t==="drive"?_=u?"Revés":"Drive":t==="globo"?_=u?"Globo de revés":"Globo":t==="dejada"?_="Dejada":_="Remate",this.emit({t:"msg",slot:e.slot,tx:`${_} · ${Ww[l]}`,ms:900,gold:l===0}),this.impact(l,a,o&&d.ok,e)}shotInput(e,t,i){const r=this.ball;if(this.state==="serve"&&r.hold&&this.srv===e){if(e.cd>0)return;e.cd=.4,this.state="play",this.hit(e.team,"saque",this.aimFor(e,i),!1,0,1,e,null),this.emit({t:"msg",slot:e.slot,tx:"Saque",ms:700}),this.impact(1,"saque",!1,e);return}if(this.state!=="play"||e.cd>0)return;if(this.reach(e)){this.exec(e,t,i);return}const s=_i(e.team);if(r.last&&r.last!==e.team&&r.z*s>.2&&Math.hypot(r.x-e.x,r.z-e.z)<6){e.buf={shot:t,ax:i,t:.3};return}e.cd=.4,this.swing(e,t==="x3"||t==="x4"?"remate":t,0)}aiMove(e,t){const i=this.ball,r=_i(e.team);let s=e.hx,o=r*5.4,a=3.6;if(i.last&&i.last!==e.team&&i.z*r>-1.5){const l=i.x+i.vx*.3;let u=i.z+i.vz*.3;u=r>0?An(u,1.2,9.2):An(u,-9.2,-1.2);let h=null,f=1e9;this.team(e.team).forEach(d=>{const p=Math.abs(l-d.x)+.35*Math.abs(u-d.z)+(d.bot?0:-.5);p<f&&(f=p,h=d)}),h===e&&(s=l,o=u,a=4.9)}else i.last===e.team&&(o=r*4.6);this.moveTo(e,An(s,-4.6,4.6),o,a,t)}moveTo(e,t,i,r,s){const o=t-e.x,a=i-e.z,l=Math.hypot(o,a);if(l>.05){const u=Math.min(r*s,l);e.x+=o/l*u,e.z+=a/l*u,e.mv=1}else e.mv=0}aiHit(e){const t=this.ball;if(e.cd>0||!this.reach(e)||t.y>2.7)return;const i=Math.hypot(t.x-e.x,t.z-e.z);if(this.team(e.team).filter(p=>!p.bot&&this.reach(p)).some(p=>Math.hypot(t.x-p.x,t.z-p.z)<i+.8)&&i>.8)return;const s=this.team(Dr(e.team));let o=0;s.forEach(p=>{o+=p.x}),o/=Math.max(1,s.length);let a=(o>0?-1:1)*(1+this.rng()*2.7);const l=this.rng(),u=this.rng()<.3?0:this.rng()<.15?2:1;let h="drive",f=null;if(t.y>2&&l<.1){const p=this.rng()<.5?"x3":"x4";f={k:p,ok:u===0},h="remate",a=p==="x3"?(o>0?-1:1)*3.9:a*.4}else t.y>1.7&&l<.55?h="remate":l<.25?h="globo":l<.35&&(h="dejada");e.cd=.6;const d=this.rng()<.08+.02*this.rallyHits;this.hit(e.team,h,a,d,0,u,e,f),this.emit({t:"hit",slot:e.slot,shot:h,q:u,gold:!!(f&&f.ok),x:yt(t.x),y:yt(t.y),z:yt(t.z)})}stepBall(e){const t=this.ball;if(t.hold){const r=_i(this.srv.team);t.x=this.srv.x+.35,t.y=1,t.z=this.srv.z-r*.5;return}const i=t.z;if(t.vy-=ul*e,t.x+=t.vx*e,t.y+=t.vy*e,t.z+=t.vz*e,(i>0&&t.z<=0||i<0&&t.z>=0)&&t.y<.92&&(t.z=i,t.vz*=-.15,t.vx*=.3,this.emit({t:"net"}),this.state==="play"&&this.fault(t.last)),t.y<cl&&t.vy<0){const r=Math.hypot(t.vx,t.vy,t.vz),s=t.bounces===0,o=t.shot;t.y=cl;const a=t.spin||0;t.vy=-t.vy*(s&&o==="globo"?.8:.74)*(1-.12*a);const l=(s?o==="remate"?.98:o==="globo"?.75:.92:.92)*(1+.1*a);if(t.vx*=l,t.vz*=l,t.spin=a*.6,s&&o==="dejada"&&(t.vz*=.3,t.vy*=.6),s&&o==="x3"){const u=t.x>=0?1:-1;t.vx=u*Math.max(3,(5.35-Math.abs(t.x))/.42),t.vy=11.5,t.vz*=.25}if(s&&o==="x4"){const u=t.vz>=0?1:-1;t.vz=u*Math.max(3,(10.4-Math.abs(t.z))/.45),t.vy=13,t.vx*=.3}r>3&&this.emit({t:"bounce",x:yt(t.x),z:yt(t.z)}),this.onBounce()}if(!t.out){if(Math.abs(t.x)>4.88){if(t.y>3&&Math.abs(t.x)>5.02)this.exitBall("x3");else if(t.y<=3){const r=t.x>0?1:-1;t.x=r*4.88,t.vx=-r*Math.abs(t.vx)*(t.y>2?.5:.78),t.y>2&&(t.vz+=(this.rng()-.5)*2),this.wall()}}if(Math.abs(t.z)>9.88){if(t.y>4&&Math.abs(t.z)>10.02)this.exitBall("x4");else if(t.y<=4){const r=t.z>0?1:-1;t.z=r*9.88,t.vz=-r*Math.abs(t.vz)*(t.y>3?.5:.78),t.y>3&&(t.vx+=(this.rng()-.5)*2),this.wall()}}}}onBounce(){if(this.state!=="play")return;const e=this.ball;e.bounces++;const t=e.z<0?"b":"a";e.bounces===1?t===e.last&&this.fault(e.last):this.point(e.last)}wall(){this.ball.vy-=(this.ball.spin||0)*1.5,this.ball.spin=(this.ball.spin||0)*.6,this.emit({t:"wall"}),this.state==="play"&&this.ball.bounces===0&&this.fault(this.ball.last)}exitBall(e){const t=this.ball;t.out=!0,this.state==="play"&&(t.bounces===0?(this.fault(t.last),this.emit({t:"msg",tx:"Pelota afuera",ms:1400})):this.point(t.last,e==="x3"?"Por 3: punto directo":"Por 4: punto directo"))}step(e){this.ents.forEach(t=>{t.cd>0&&(t.cd-=e),t.inp.age+=e,t.sw&&(t.sw.t+=e,t.sw.t>.7&&(t.sw=null))}),this.state==="serve"||this.state==="play"?(this.ents.forEach(t=>{if(t.bot)return;const i=t.inp.age<.5,r=i?t.inp.mx:0,s=i?t.inp.mz:0;let o=t.x+r*6.5*e,a=t.z+s*6.5*e;t.lv&&(o+=t.lv.x*e,a+=t.lv.z*e,t.lv.t-=e,t.lv.t<=0&&(t.lv=null));const l=_i(t.team);if(t.x=An(o,-4.5,4.5),t.z=l*An(l*a,.9,9),t.mv=Math.min(1,Math.hypot(r,s)*1.5),t.buf){if(t.buf.t-=e,this.reach(t)&&t.cd<=0){const u=t.buf;t.buf=null,this.exec(t,u.shot,u.ax)}else if(t.buf.t<=0){const u=t.buf;t.buf=null,t.cd=.4,this.swing(t,u.shot==="x3"||u.shot==="x4"?"remate":u.shot,0)}}}),this.state==="play"?this.ents.forEach(t=>{t.bot&&(this.aiMove(t,e),this.aiHit(t))}):this.ents.forEach(t=>{t.bot&&(t.mv=0)}),this.state==="serve"&&this.srv.bot&&(this.serveT-=e,this.serveT<=0&&(this.state="play",this.hit(this.srv.team,"saque",(this.rng()-.5)*7,!1,0,1,this.srv,null),this.emit({t:"hit",slot:this.srv.slot,shot:"saque",q:1,gold:!1,x:yt(this.ball.x),y:yt(this.ball.y),z:yt(this.ball.z)}))),this.stepBall(e),this.state==="play"&&(this.rallyT+=e,this.rallyT>sA&&this.point(this.ball.last||"a"))):this.state==="point"&&(this.stepBall(e),this.ents.forEach(t=>{t.mv=0}),this.stT-=e,this.stT<=0&&(this.matchEnd?(this.state="end",this.emit({t:"end",winner:this.winner})):this.newServe()))}snapshot(){const e=this.ball;return{st:this.state,m:this.m,srv:this.srv?this.srv.slot:-1,w:this.winner,b:[yt(e.x),yt(e.y),yt(e.z),yt(e.vx),yt(e.vy),yt(e.vz),e.hold?1:0,yt(e.spin||0)],e:this.ents.map(t=>[t.slot,yt(t.x),yt(t.z),yt(t.mv),t.sw?t.sw.id:0,t.sw?t.sw.k:"",t.sw?t.sw.yaw:0]),ev:this.drain()}}save(){return{fmt:this.fmt,state:this.state,m:JSON.parse(JSON.stringify(this.m)),matchEnd:this.matchEnd,winner:this.winner,roster:this.ents.map(e=>({slot:e.slot,uid:e.uid,name:e.name}))}}load(e){this.fmt=e.fmt,this.m=JSON.parse(JSON.stringify(e.m)),this.matchEnd=e.matchEnd,this.winner=e.winner,this.setRoster(e.roster),e.state==="end"?this.state="end":e.state==="point"&&e.matchEnd?this.state="end":this.newServe()}}function oA(){return{mode:"2v2",fmt:"exp",users:[],slots:[null,null,null,null]}}const si=(n,e)=>n.users.find(t=>t.id===e)||null;function Om(n){const e=n.slots.slice(),t=Gv[n.mode],i=[];for(let o=0;o<4;o++)t.includes(o)||(n.slots[o]=null);t.forEach(o=>{const a=n.slots[o];if(a&&a!=="bot"){const l=si(n,a);(!l||l.watch)&&(n.slots[o]=null)}});const r=n.slots.filter(o=>o&&o!=="bot"),s=n.users.filter(o=>!o.watch&&!r.includes(o.id)).sort((o,a)=>o.q-a.q);return t.forEach(o=>{(!n.slots[o]||n.slots[o]==="bot")&&(n.slots[o]=s.length?s.shift().id:"bot")}),t.forEach(o=>{e[o]!==n.slots[o]&&(n.slots[o]!=="bot"?i.push(`${si(n,n.slots[o]).name} pasa a jugar`):e[o]&&e[o]!=="bot"&&i.push("Sale un jugador: entra un bot"))}),i}function Sc(n){return Gv[n.mode].slice().sort((e,t)=>e-t).map(e=>{const t=n.slots[e],i=t&&t!=="bot"?si(n,t):null;return{slot:e,uid:i?i.id:null,name:i?i.name:"Bot",num:i?i.num:20+e,look:i?i.look:null}})}const aA=n=>n.users.filter(e=>!n.slots.includes(e.id));class lA{constructor(){this.h={}}on(e,t){return(this.h[e]=this.h[e]||[]).push(t),()=>this.off(e,t)}off(e,t){this.h[e]=(this.h[e]||[]).filter(i=>i!==t)}emit(e,...t){(this.h[e]||[]).slice().forEach(i=>i(...t))}}const uA=/^#[0-9a-fA-F]{6}$/,cA=["corto","largo","rodete"],hA=["none","vincha","gorra","lentes"],km=["drive","globo","dejada","remate","x3","x4"],_o={skin:"#E0AC82",hair:"#2C2C2A",style:"corto",shirt:"#0C447C",acc:"none",paddle:"#EEEDFE"};function fl(n){const e=n&&typeof n=="object"?n:{},t=(i,r)=>typeof i=="string"&&uA.test(i)?i:r;return{skin:t(e.skin,_o.skin),hair:t(e.hair,_o.hair),shirt:t(e.shirt,_o.shirt),paddle:t(e.paddle,_o.paddle),style:cA.includes(e.style)?e.style:"corto",acc:hA.includes(e.acc)?e.acc:"none"}}function Ps(n){return String(n??"").replace(/[\u0000-\u001f<>&"'`]/g,"").trim().slice(0,14)||"Jugador"}const Mc=n=>{const e=Math.floor(+n);return Number.isFinite(e)?Math.max(0,Math.min(99,e)):7};function fA(n){return String(n||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,6)}function dA(){const n="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="";for(let t=0;t<4;t++)e+=n[Math.floor(Math.random()*n.length)];return e}const pA=1/20,mA=1,gA=1/20,vA=16,_A=12e3,zm=(n,e,t)=>Math.max(e,Math.min(t,n));class xA extends lA{constructor(e,{profile:t,create:i=!1,code:r="",timeouts:s={}}){super(),this.code=r,this.t=e,this.profile={name:Ps(t.name),look:fl(t.look),num:Mc(t.num)},this.create=i,this.joinTimeout=s.join??_A,this.role="connecting",this.selfId=null,this.hostId=null,this.expectHost=null,this.room=oA(),this.roster=[],this.phase="lobby",this.qc=0,this.sim=null,this.snap=null,this.sinceSnap=0,this.lastSave=null,this.disp=new Map,this.ballDisp=null,this.evq=[],this.ctrl={mx:0,mz:0,ax:null},this.accSnap=0,this.accSave=0,this.accInp=0,this.helloAt=0,this.timer=null}async start(){this.t.onMessage((e,t,i)=>this.onMsg(e,t,i)),this.t.onJoin(e=>this.onJoin(e)),this.t.onLeave(e=>this.onLeave(e)),this.selfId=await this.t.start(),this.role!=="closed"&&(this.create?this.becomeHost():this.armTimer("nohost"),this.emit("change"))}leave(){this.role="closed",clearTimeout(this.timer);try{this.t.leave()}catch{}this.emit("change")}armTimer(e){clearTimeout(this.timer),this.timer=setTimeout(()=>{(this.role==="connecting"||this.expectHost)&&(this.role="closed",this.emit("error",e),this.emit("change"))},this.joinTimeout)}get mySlot(){const e=this.roster.find(t=>t.uid===this.selfId);return e?e.slot:-1}get ys(){const e=this.mySlot;return e>=0&&Ch(e)==="b"?-1:1}get me(){return si(this.room,this.selfId)}get isHost(){return this.role==="host"}get playing(){return this.phase==="match"}becomeHost(){this.role="host",this.hostId=this.selfId,clearTimeout(this.timer),si(this.room,this.selfId)||this.room.users.push({id:this.selfId,...this.profile,q:++this.qc,watch:!1}),this.sim||(this.sim=new Fm({fmt:this.room.fmt})),this.seat(!0),this.broadcastRoom()}seat(e){if(e||this.phase==="lobby"||!this.sim||this.sim.state==="idle"){const t=Om(this.room);this.roster=Sc(this.room),t.forEach(i=>this.emit("notice",i))}else{const t=Om(this.room);this.sim.pending=Sc(this.room),t.forEach(i=>this.emit("notice",i))}}broadcastRoom(e){this.t.send("room",{room:this.room,roster:this.roster,hostId:this.hostId,phase:this.phase},e),this.emit("change")}setMode(e){!this.isHost||this.phase!=="lobby"||!["1v1","2v2"].includes(e)||(this.room.mode=e,this.seat(!0),this.broadcastRoom())}setFmt(e){!this.isHost||this.phase!=="lobby"||!Ko[e]||(this.room.fmt=e,this.broadcastRoom())}setWatch(e){if(this.isHost){const t=this.me;if(!t)return;t.watch=!!e,e||(t.q=++this.qc),this.seat(),this.broadcastRoom()}else this.t.send("watch",{v:!!e},this.hostId)}startMatch(){this.isHost&&(this.seat(!0),this.phase="match",this.sim.setRoster(this.roster.map(e=>({slot:e.slot,uid:e.uid,name:e.name}))),this.sim.start(this.room.fmt),this.accSnap=0,this.accSave=0,this.lastSave=this.sim.save(),this.broadcastRoom(),this.sendSave())}backToLobby(){this.isHost&&(this.phase="lobby",this.sim.state="idle",this.snap=null,this.seat(!0),this.broadcastRoom())}sendSave(){this.lastSave=this.sim.save(),this.t.send("sv",this.lastSave)}onJoin(e){this.role==="host"&&this.broadcastRoom(e)}onLeave(e){if(this.role==="host"){const t=si(this.room,e);if(!t)return;this.room.users=this.room.users.filter(i=>i.id!==e),this.emit("notice",`${t.name} salió de la sala`),this.seat(),this.broadcastRoom()}else this.role==="client"&&e===this.hostId&&this.migrate(e)}onMsg(e,t,i){if(this.role!=="closed"){if(e==="room")return this.onRoom(t,i);if(e==="snap"){i===this.hostId&&this.role==="client"&&this.onSnap(t);return}if(e==="sv"){i===this.hostId&&(this.lastSave=t);return}if(this.role==="host"){if(e==="hello")return this.onHello(t,i);if(e==="watch"){const r=si(this.room,i);r&&t&&(r.watch=!!t.v,r.watch||(r.q=++this.qc),this.seat(),this.broadcastRoom());return}e==="inp"&&this.phase==="match"&&t&&this.sim.input(i,{mx:t.mx,mz:t.mz,ax:t.ax,shot:km.includes(t.shot)?t.shot:null})}}}onHello(e,t){if(!e)return;let i=si(this.room,t);if(i)i.name=Ps(e.name),i.look=fl(e.look),i.num=Mc(e.num);else{if(this.room.users.length>=vA){this.t.send("full",{},t);return}i={id:t,name:Ps(e.name),look:fl(e.look),num:Mc(e.num),q:++this.qc,watch:!1},this.room.users.push(i),this.emit("notice",`${i.name} se une a la sala`)}this.seat(),this.broadcastRoom()}onRoom(e,t){if(this.role==="host"||!e||t!==e.hostId||!(this.hostId==null||t===this.hostId||t===this.expectHost))return;this.role==="connecting"&&(this.role="client",clearTimeout(this.timer)),this.hostId=t,this.expectHost=null,clearTimeout(this.timer),this.room=e.room,this.roster=e.roster,this.phase=e.phase;const r=this.room.users.reduce((s,o)=>Math.max(s,o.q),0);this.qc=Math.max(this.qc,r),!si(this.room,this.selfId)&&Date.now()-this.helloAt>1500&&(this.helloAt=Date.now(),this.t.send("hello",this.profile,this.hostId)),this.phase==="lobby"&&(this.snap=null,this.disp.clear(),this.ballDisp=null),this.emit("change")}onSnap(e){this.snap=e,this.sinceSnap=0,(e.ev||[]).forEach(t=>this.evq.push(t))}migrate(e){this.room.users=this.room.users.filter(i=>i.id!==e);const t=this.room.users.slice().sort((i,r)=>i.q-r.q)[0];if(!t){this.role="closed",this.emit("error","closed"),this.emit("change");return}this.emit("notice","El anfitrión salió de la sala"),t.id===this.selfId?this.promote():(this.hostId=t.id,this.expectHost=t.id,this.armTimer("hostlost"),this.emit("change"))}promote(){this.role="host",this.hostId=this.selfId,this.expectHost=null,clearTimeout(this.timer),this.qc=this.room.users.reduce((e,t)=>Math.max(e,t.q),0),this.sim=new Fm({fmt:this.room.fmt}),this.seat(!0),this.phase==="match"&&this.lastSave?(this.sim.load({...this.lastSave,roster:this.roster.map(e=>({slot:e.slot,uid:e.uid,name:e.name}))}),this.evq.push({t:"msg",tx:"Nuevo anfitrión: se repite el punto",ms:2200})):this.phase="lobby",this.snap=null,this.disp.clear(),this.ballDisp=null,this.emit("notice","Ahora sos el anfitrión de la sala"),this.broadcastRoom()}setControl(e){this.ctrl={mx:e.mx||0,mz:e.mz||0,ax:e.ax==null?null:e.ax}}shot(e){if(this.mySlot<0||this.phase!=="match"||!km.includes(e))return;const t={...this.ctrl,shot:e};this.isHost?this.sim.input(this.selfId,t):this.t.send("inp",t,this.hostId)}tick(e){if(this.role==="host"){if(this.phase!=="match"||this.sim.state==="idle")return;this.mySlot>=0&&this.sim.input(this.selfId,this.ctrl);let t=Math.min(e,.25);for(;t>1e-6;){const i=Math.min(t,.016666666666666666);this.sim.step(i),t-=i}if(this.accSnap+=e,this.accSnap>=pA){this.accSnap=0;const i=this.sim.snapshot();i.ev.forEach(r=>{this.evq.push(r),r.t==="roster"&&(this.roster=Sc(this.room),this.broadcastRoom())}),this.snap=i,this.t.send("snap",i)}this.accSave+=e,this.accSave>=mA&&(this.accSave=0,this.sendSave())}else this.role==="client"&&this.phase==="match"&&this.mySlot>=0&&(this.accInp+=e,this.accInp>=gA&&(this.accInp=0,this.t.send("inp",this.ctrl,this.hostId)))}takeEvents(){const e=this.evq;return this.evq=[],e}frame(e){const t={roster:this.roster,mySlot:this.mySlot,ys:this.ys,phase:this.phase,events:this.takeEvents(),room:this.room};if(this.phase!=="match")return{...t,st:"lobby",ents:[],ball:null,m:null,srv:-1,winner:null};if(this.role==="host"){const R=this.sim,A=R.ball;return{...t,st:R.state,m:R.m,srv:R.srv?R.srv.slot:-1,winner:R.winner,ball:{x:A.x,y:A.y,z:A.z,vx:A.vx,vy:A.vy,vz:A.vz,hold:A.hold,spin:A.spin||0},ents:R.ents.map(T=>({slot:T.slot,x:T.x,z:T.z,mv:T.mv,swId:T.sw?T.sw.id:0,swK:T.sw?T.sw.k:"",swYaw:T.sw?T.sw.yaw:0}))}}const i=this.snap;if(!i)return{...t,st:"wait",ents:[],ball:null,m:null,srv:-1,winner:null};this.sinceSnap+=e;const r=1-Math.exp(-20*e),s=this.mySlot,o=i.st==="play"||i.st==="serve",a=i.e.map(([R,A,T,L,y,E,F])=>{let z=this.disp.get(R);if(z||(z={x:A,z:T},this.disp.set(R,z)),R===s&&o){const Z=_i(Ch(R));z.x=zm(z.x+this.ctrl.mx*6.5*e,-4.5,4.5),z.z=Z*zm(Z*(z.z+this.ctrl.mz*6.5*e),.9,9);const D=1-Math.exp(-4*e);z.x+=(A-z.x)*D,z.z+=(T-z.z)*D,Math.hypot(A-z.x,T-z.z)>1.8&&(z.x=A,z.z=T)}else Math.hypot(A-z.x,T-z.z)>3?(z.x=A,z.z=T):(z.x+=(A-z.x)*r,z.z+=(T-z.z)*r);return{slot:R,x:z.x,z:z.z,mv:L,swId:y,swK:E,swYaw:F}}),[l,u,h,f,d,p,_,x]=i.b,m=Math.min(this.sinceSnap,.12),c=l+f*m,v=Math.max(cl,u+d*m-.5*ul*m*m),g=h+p*m;let S=this.ballDisp;if(!S||_||Math.hypot(c-S.x,g-S.z)>4)S={x:c,y:v,z:g};else{const R=1-Math.exp(-30*e);S={x:S.x+(c-S.x)*R,y:S.y+(v-S.y)*R,z:S.z+(g-S.z)*R}}return this.ballDisp=S,{...t,st:i.st,m:i.m,srv:i.srv,winner:i.w,ents:a,ball:{x:S.x,y:S.y,z:S.z,vx:f,vy:d,vz:p,hold:!!_,spin:x||0}}}}const yA="modulepreload",SA=function(n){return"/padel-v1/"+n},Bm={},MA=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=SA(l),l in Bm)return;Bm[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":yA,u||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),u)return new Promise((d,p)=>{f.addEventListener("load",d),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},EA={},Xv=()=>Math.random().toString(36).slice(2,10),Nn=()=>{};function TA(){return{async start(){return"solo-"+Xv()},send:Nn,onMessage:Nn,onJoin:Nn,onLeave:Nn,leave:Nn}}function wA(n){const e=Xv(),t={msg:Nn,join:Nn,leave:Nn},i=new Set;let r=null;return{async start(){return r=new BroadcastChannel("padel-club-"+n),r.onmessage=s=>{const o=s.data;!o||o.from===e||o.to&&o.to!==e||(o.k==="hi"?(i.has(o.from)||(i.add(o.from),t.join(o.from)),o.to||r.postMessage({k:"hi",from:e,to:o.from})):o.k==="bye"?i.delete(o.from)&&t.leave(o.from):o.k==="m"&&t.msg(o.type,o.data,o.from))},r.postMessage({k:"hi",from:e}),addEventListener("pagehide",()=>r&&r.postMessage({k:"bye",from:e})),e},send(s,o,a){r.postMessage({k:"m",from:e,to:a,type:s,data:o})},onMessage(s){t.msg=s},onJoin(s){t.join=s},onLeave(s){t.leave=s},leave(){r&&(r.postMessage({k:"bye",from:e}),r.close(),r=null)}}}function AA(n,e="padel-club-comunidad-v1"){const t={msg:Nn,join:Nn,leave:Nn};let i=null,r=null;return{async start(){const{joinRoom:s}=await MA(async()=>{const{joinRoom:u}=await import("./dist-DVIO7BUi.js");return{joinRoom:u}},[]),o=import.meta&&EA||{},a=o.VITE_TURN_URL?[{urls:o.VITE_TURN_URL.split(","),username:o.VITE_TURN_USER,credential:o.VITE_TURN_PASS}]:void 0;return i=s({appId:e,...a?{turnConfig:a}:{}},"padel-"+n),r=i.makeAction("m"),r.onMessage((u,h)=>{u&&typeof u.t=="string"&&t.msg(u.t,u.d,h.peerId)}),i.onPeerJoin(({peerId:u})=>t.join(u)),i.onPeerLeave(({peerId:u})=>t.leave(u)),(await i.getSelf()).peerId},send(s,o,a){r&&r.send({t:s,d:o},a?{target:a}:void 0).catch(Nn)},onMessage(s){t.msg=s},onJoin(s){t.join=s},onLeave(s){t.leave=s},leave(){i&&(i.leave(),i=null,r=null)}}}function CA(n,e){return n==="solo"?TA():n==="broadcast"?wA(e):AA(e)}const RA={shirt:["#0C447C","#D85A30","#1D9E75","#2C2C2A","#EF9F27","#534AB7"],hair:["#2C2C2A","#6B4423","#D9A441","#A32D2D"],skin:["#F5D0B0","#E0AC82","#B9774F","#7A4A2E"],paddle:["#EEEDFE","#E24B4A","#1D9E75","#EF9F27"]},bA=[["corto","Corto"],["largo","Largo"],["rodete","Rodete"]],PA=[["none","Ninguno"],["vincha","Vincha"],["gorra","Gorra"],["lentes","Lentes"]],LA=[["Camiseta","shirt"],["Pelo","hair"],["Piel","skin"],["Paleta","paddle"]];function DA({label:n,k:e,look:t,setLook:i}){return $.jsxs("div",{className:"row",children:[$.jsx("span",{className:"lbl",children:n}),$.jsx("div",{className:"chips",children:RA[e].map(r=>$.jsx("button",{"aria-label":`${n} ${r}`,"aria-pressed":t[e]===r,className:`sw ${t[e]===r?"on":""}`,style:{background:r},onClick:()=>i({...t,[e]:r})},r))})]})}function Ec({label:n,list:e,value:t,onPick:i}){return $.jsxs("div",{className:"row",children:[$.jsx("span",{className:"lbl",children:n}),$.jsx("div",{className:"chips",children:e.map(([r,s])=>$.jsx("button",{className:`chip ${t===r?"on":""}`,"aria-pressed":t===r,onClick:()=>i(r),children:s},r))})]})}function UA({profile:n,setProfile:e,hq:t,setHq:i,joinCode:r,setJoinCode:s,onCreate:o,onJoin:a,onSolo:l,error:u,muted:h,onMute:f}){const d=p=>e({...n,look:p});return $.jsxs("div",{className:"sheet menu",children:[$.jsxs("div",{className:"titlebar",children:[$.jsx("h1",{children:"Padel Club"}),$.jsx("button",{className:"icon","aria-label":h?"Activar sonido":"Silenciar",onClick:f,children:h?"🔇":"🔊"})]}),$.jsxs("label",{className:"field",children:[$.jsx("span",{className:"lbl",children:"Tu nombre"}),$.jsx("input",{value:n.name,maxLength:14,placeholder:"Nico",onChange:p=>e({...n,name:p.target.value})})]}),$.jsxs("details",{className:"look",children:[$.jsx("summary",{children:"Personalizar jugador"}),LA.map(([p,_])=>$.jsx(DA,{label:p,k:_,look:n.look,setLook:d},_)),$.jsx(Ec,{label:"Peinado",list:bA,value:n.look.style,onPick:p=>d({...n.look,style:p})}),$.jsx(Ec,{label:"Accesorio",list:PA,value:n.look.acc,onPick:p=>d({...n.look,acc:p})}),$.jsx(Ec,{label:"Calidad",list:[["hi","Alta"],["lo","Media"]],value:t?"hi":"lo",onPick:p=>i(p==="hi")})]}),u&&$.jsx("p",{className:"err",role:"alert",children:u}),$.jsx("button",{className:"btn primary",onClick:o,children:"Crear sala"}),$.jsxs("div",{className:"join",children:[$.jsx("input",{value:r,maxLength:6,placeholder:"Código","aria-label":"Código de sala",autoCapitalize:"characters",onChange:p=>s(p.target.value.toUpperCase()),onKeyDown:p=>{p.key==="Enter"&&a()}}),$.jsx("button",{className:"btn",onClick:a,children:"Unirme"})]}),$.jsx("button",{className:"btn ghost",onClick:l,children:"Practicar contra bots"})]})}function NA({code:n,onCancel:e}){return $.jsxs("div",{className:"sheet center",children:[$.jsx("div",{className:"spin","aria-hidden":"true"}),$.jsxs("p",{children:["Buscando la sala ",$.jsx("b",{children:n}),"…"]}),$.jsx("p",{className:"muted",children:"El anfitrión tiene que tener la sala abierta."}),$.jsx("button",{className:"btn",onClick:e,children:"Cancelar"})]})}function IA({slot:n,room:e,selfId:t}){const i=e.slots[n],r=i&&i!=="bot"?si(e,i):null;return $.jsxs("div",{className:`slot ${r?"human":"bot"}`,children:[$.jsx("span",{className:"dot",style:{background:r?r.look.shirt:"#888780"}}),$.jsxs("span",{className:"nm",children:[r?r.name:"Bot",r&&r.id===t?" (vos)":""]}),$.jsx("span",{className:"tag",children:r?"Jugador":"Bot"})]})}function FA({session:n,link:e,onCopy:t,onStart:i,onLeave:r,solo:s}){const o=n.room,a=n.isHost,l=n.me,u=n.mySlot,h=o.mode==="2v2"?[[0,1],[2,3]]:[[0],[2]],f=aA(o);return $.jsxs("div",{className:"sheet lobby",children:[$.jsxs("div",{className:"titlebar",children:[$.jsxs("div",{children:[$.jsx("h2",{children:s?"Práctica":`Sala ${n.code||""}`}),$.jsxs("span",{className:"muted",children:[o.users.length," ",o.users.length===1?"persona":"personas",s?"":a?" · sos el anfitrión":""]})]}),!s&&$.jsx("button",{className:"btn small",onClick:t,children:"Copiar link"})]}),!s&&$.jsx("p",{className:"link","aria-label":"Link de la sala",children:e}),$.jsxs("div",{className:"opts",children:[$.jsx("div",{className:"chips",children:[["2v2","2 vs 2"],["1v1","1 vs 1"]].map(([d,p])=>$.jsx("button",{className:`chip ${o.mode===d?"on":""}`,disabled:!a,onClick:()=>n.setMode(d),children:p},d))}),$.jsx("div",{className:"chips",children:Object.entries(Ko).map(([d,p])=>$.jsx("button",{className:`chip ${o.fmt===d?"on":""}`,disabled:!a,onClick:()=>n.setFmt(d),children:p.label},d))})]}),$.jsx("div",{className:"teams",children:h.map((d,p)=>$.jsxs("div",{className:"team",children:[$.jsxs("span",{className:"lbl",children:["Equipo ",p?"B":"A"]}),d.map(_=>$.jsx(IA,{slot:_,room:o,selfId:n.selfId},_))]},p))}),$.jsxs("p",{className:"muted spec",children:["Espectadores: ",f.length?f.map(d=>d.name+(d.id===n.selfId?" (vos)":"")).join(", "):"ninguno","."," ","Si un jugador se va, entra el primero en espera; si no hay nadie, entra un bot."]}),$.jsxs("div",{className:"actions",children:[l&&$.jsx("button",{className:"btn",onClick:()=>n.setWatch(u>=0),children:u>=0?"Mirar":"Jugar"}),a?$.jsx("button",{className:"btn primary grow",onClick:i,children:"Empezar partido"}):$.jsx("button",{className:"btn grow",disabled:!0,children:"Esperando al anfitrión…"}),$.jsx("button",{className:"btn ghost",onClick:r,children:"Salir"})]})]})}const jv=(n,e)=>{const t=n.filter(i=>i.slot<2==(e==="a")).map(i=>i.name.split(" ")[0]);return t.length?t.join(" / "):e==="a"?"Equipo A":"Equipo B"};function qv({m:n,roster:e,fmt:t,srv:i,theme:r}){if(!n)return null;const s=Ko[t]||Ko.exp,o=i>=0?i<2?"a":"b":n.srv;return $.jsxs("table",{className:`score ${r||""}`,children:[$.jsx("thead",{children:$.jsxs("tr",{children:[$.jsx("th",{}),Array.from({length:s.cols},(a,l)=>$.jsxs("th",{children:["S",l+1]},l)),$.jsx("th",{children:n.tb?"TB":"Pts"})]})}),$.jsx("tbody",{children:["b","a"].map(a=>{const l=a==="a"?"b":"a";return $.jsxs("tr",{children:[$.jsxs("td",{className:"tn",children:[$.jsx("i",{className:o===a?"srv":"nosrv"}),jv(e,a)]}),Array.from({length:s.cols},(u,h)=>{let f="-",d=!1;return h<n.sets.length?(f=n.sets[h][a],d=n.sets[h][a]>n.sets[h][l]):h===n.sets.length&&(f=n.g[a],d=!0),$.jsx("td",{className:d?"b":"",children:f},h)}),$.jsx("td",{className:"b",children:Rh(n,a)})]},a)})})]})}function OA({session:n,hud:e,onRematch:t,onLobby:i,onLeave:r}){const s=n.isHost,o=n.mySlot>=0?n.mySlot<2?"a":"b":null,a=o?e.winner===o:null,l=a==null?`Ganó ${jv(n.roster,e.winner)}`:a?"Ganaste el partido":"Perdiste el partido";return $.jsx("div",{className:"end",children:$.jsxs("div",{className:"sheet center",children:[$.jsx("h2",{children:l}),$.jsx(qv,{m:e.m,roster:n.roster,fmt:n.room.fmt,srv:-1}),o&&$.jsxs("p",{className:"pts",children:["Puntos del club ",$.jsx("b",{children:a?"+25":"+10"})]}),s?$.jsxs($.Fragment,{children:[$.jsx("button",{className:"btn primary",onClick:t,children:"Revancha"}),$.jsx("button",{className:"btn",onClick:i,children:"Volver a la sala"})]}):$.jsx("p",{className:"muted",children:"Esperando que el anfitrión elija…"}),$.jsx("button",{className:"btn ghost",onClick:r,children:"Salir"})]})})}function kA({ctrl:n}){const e=qe.useRef(null),t=qe.useRef(null),i=qe.useRef(!1),r=o=>{const a=e.current.getBoundingClientRect();let l=(o.clientX-a.left-a.width/2)/(a.width/2),u=(o.clientY-a.top-a.height/2)/(a.height/2);const h=Math.hypot(l,u);h>1&&(l/=h,u/=h),n.current={x:l,y:u,active:!0},t.current.style.transform=`translate(${l*32}px, ${u*32}px)`},s=()=>{i.current=!1,n.current={x:0,y:0,active:!1},t.current.style.transform="translate(0,0)"};return $.jsx("div",{ref:e,className:"joy","aria-label":"Joystick",onPointerDown:o=>{o.currentTarget.setPointerCapture(o.pointerId),i.current=!0,r(o)},onPointerMove:o=>{i.current&&r(o)},onPointerUp:s,onPointerCancel:s,children:$.jsx("div",{ref:t,className:"knob"})})}const zA=[{k:"drive",l:"Drive"},{k:"globo",l:"Globo"},{k:"dejada",l:"Dejada"},{k:"remate",l:"Remate",c:"danger"},{k:"x3",l:"x3",c:"gold"},{k:"x4",l:"x4",c:"gold"}];function BA({onShot:n,back:e}){return $.jsx("div",{className:"shots",children:zA.map(t=>$.jsx("button",{className:`shot ${t.c||""}`,onPointerDown:i=>{i.preventDefault(),n(t.k)},children:t.k==="drive"&&e?"Revés":t.l},t.k))})}const HA=(n,e,t)=>Math.max(e,Math.min(t,n)),GA=new URLSearchParams(location.search).get("net")==="local"?"broadcast":"trystero";function VA(){try{const n=JSON.parse(localStorage.getItem("padel.profile"));if(n)return{name:String(n.name||""),look:fl(n.look),num:Number.isFinite(+n.num)?+n.num:7}}catch{}return{name:"",look:{..._o},num:1+Math.floor(Math.random()*98)}}const WA=()=>{const n=location.hash.match(/#\/sala\/([A-Za-z0-9]{3,6})/);return n?n[1].toUpperCase():""};function XA(){const n=qe.useRef(null),e=qe.useRef(null),t=qe.useRef(null),i=qe.useRef({x:0,y:0,active:!1}),r=qe.useRef({}),s=qe.useRef(null),o=qe.useRef(null),a=qe.useRef(""),[,l]=qe.useReducer(ae=>ae+1,0),[u,h]=qe.useState(VA),[f,d]=qe.useState(!0),[p,_]=qe.useState(WA()),[x,m]=qe.useState(""),[c,v]=qe.useState(""),[g,S]=qe.useState(Yw()),[R,A]=qe.useState([]),[T,L]=qe.useState(null),[y,E]=qe.useState(null),[F,z]=qe.useState(!1),[Z,D]=qe.useState(!1),[b,N]=qe.useState(!1);o.current=u;const W=qe.useCallback(ae=>{const Se=Math.random();A(Ae=>[...Ae.slice(-2),{id:Se,tx:ae}]),setTimeout(()=>A(Ae=>Ae.filter(G=>G.id!==Se)),3200)},[]),P=qe.useCallback((ae,Se,Ae)=>{const G=Math.random();L({id:G,tx:ae,gold:Ae}),setTimeout(()=>L(Qe=>Qe&&Qe.id===G?null:Qe),Se||900)},[]),I=ae=>{d(ae),e.current&&e.current.setQuality(ae)};qe.useEffect(()=>{try{localStorage.setItem("padel.profile",JSON.stringify(u))}catch{}},[u]),qe.useEffect(()=>{e.current&&e.current.setPreviewLook(u.look,Ps(u.name).split(" ")[0],u.num)},[u]),qe.useEffect(()=>{const ae=new eA(n.current,{autoQuality:new URLSearchParams(location.search).get("q")!=="hi",onQuality:()=>{d(!1),W("Calidad ajustada para mantener la fluidez")},onReplay:we=>{N(we),we&&L(null)}});if(new URLSearchParams(location.search).has("debug")&&(window.__stage=ae),!ae.ok){z(!0);return}e.current=ae,ae.setPreviewLook(o.current.look,Ps(o.current.name).split(" ")[0],o.current.num);let Se=0,Ae=performance.now();const G=we=>{Se=requestAnimationFrame(G);const pe=Math.min((we-Ae)/1e3,.25);Ae=we;const Ye=t.current;let _e=null;if(Ye&&(Ye.role==="host"||Ye.role==="client")){const C=Ye.ys,M=i.current,V=r.current;let te=M.x,ee=M.y;M.active||(te=(V.d||V.arrowright?1:0)-(V.a||V.arrowleft?1:0),ee=(V.s||V.arrowdown?1:0)-(V.w||V.arrowup?1:0));const ie=Math.abs(te)>.25?HA(te*4*C,-4,4):null;s.current=ie,Ye.setControl({mx:te*C,mz:ee*C,ax:ie}),Ye.tick(pe),_e=Ye.frame(pe);for(const he of _e.events)if(he.t==="msg"&&(he.slot==null||he.slot===_e.mySlot))P(he.tx,he.ms,he.gold);else if(he.t==="point"){const Ne=_e.mySlot>=0?_e.mySlot<2?"a":"b":null,J=Ne?he.who===Ne:null,$e=he.pts,Be=Ne==="b"?`${$e[1]} - ${$e[0]}`:`${$e[0]} - ${$e[1]}`,be=J==null?he.who==="a"?"Equipo A":"Equipo B":J?"para vos":"rival";let Ee=he.label;Ee||(Ee=he.ev==="punto"?`${J==null?"Punto "+be:J?"Punto para vos":"Punto rival"} · ${Be}`:he.ev==="game"?`Game ${be}`:he.ev==="set"?`Set ${be}`:"Partido"),P(Ee,he.ev==="punto"&&!he.label?1200:2e3,he.ev!=="punto"||!!he.label)}const ye=_e.ents.find(he=>he.slot===_e.mySlot),le=!!(ye&&_e.ball&&(_e.ball.x-ye.x)*C<0),me=`${_e.phase}|${_e.st}|${_e.srv}|${JSON.stringify(_e.m)}|${le}|${_e.mySlot}`;me!==a.current&&(a.current=me,E({st:_e.st,m:_e.m,srv:_e.srv,winner:_e.winner,back:le,phase:_e.phase,mySlot:_e.mySlot}))}else a.current&&(a.current="",E(null));ae.render(_e,pe,{aim:s.current})};Se=requestAnimationFrame(G);const Qe=we=>{const pe=we.key.toLowerCase();r.current[pe]=!0;const Ye={1:"drive",2:"globo",3:"dejada",4:"remate",5:"x3",6:"x4"};Ye[pe]&&t.current&&t.current.shot(Ye[pe]),(we.key.startsWith("Arrow")||pe===" ")&&we.preventDefault()},Me=we=>{r.current[we.key.toLowerCase()]=!1};return window.addEventListener("keydown",Qe),window.addEventListener("keyup",Me),()=>{cancelAnimationFrame(Se),window.removeEventListener("keydown",Qe),window.removeEventListener("keyup",Me),t.current&&t.current.leave(),ae.dispose(),e.current=null}},[W,P]);const H=!!(y&&y.phase==="match");qe.useEffect(()=>(H?Kw():(Um(),N(!1)),()=>Um()),[H]);const Y=qe.useCallback(()=>{t.current&&t.current.leave(),t.current=null,m(""),D(!1),E(null),L(null),location.hash&&history.replaceState(null,"",location.pathname+location.search),l()},[]),K=qe.useCallback(async(ae,Se)=>{fo(),v("");const Ae=ae==="join"?fA(Se):dA();if(ae==="join"&&Ae.length<3){v("Escribí el código de la sala");return}t.current&&t.current.leave();const G=o.current,Qe=new xA(CA(ae==="solo"?"solo":GA,Ae),{profile:{name:Ps(G.name),look:G.look,num:G.num},create:ae!=="join",code:Ae});Qe.on("change",l),Qe.on("notice",W),Qe.on("error",Me=>{m(""),v(Me==="nohost"?`No encontramos la sala ${Ae}. Revisá el código y que el anfitrión la tenga abierta.`:Me==="hostlost"?"Se perdió la conexión con la sala.":"La sala se cerró."),t.current=null,l()}),t.current=Qe,D(ae==="solo"),ae==="join"&&m(Ae);try{await Qe.start(),ae==="create"&&history.replaceState(null,"",`${location.pathname}${location.search}#/sala/${Ae}`),ae==="solo"&&Qe.startMatch(),(Qe.role==="host"||Qe.role==="client")&&m("")}catch{m(""),t.current=null,v("No se pudo conectar. Revisá tu conexión e intentá de nuevo."),l()}},[W]);qe.useEffect(()=>{x&&t.current&&t.current.role==="client"&&m("")});const O=t.current,Q=O&&(O.role==="host"||O.role==="client"),oe=O?`${location.origin}${location.pathname}${location.search}#/sala/${O.code}`:"",ge=async()=>{try{navigator.share&&/Mobi/i.test(navigator.userAgent)?await navigator.share({title:"Padel Club",text:"Sumate a mi partido",url:oe}):(await navigator.clipboard.writeText(oe),W("Link copiado"))}catch{W("No se pudo copiar: copialo a mano")}},ve=Q&&O.phase==="match"&&y&&y.phase==="match",Ue=ve&&O.mySlot>=0&&y.st!=="end";return $.jsxs("div",{className:"app",children:[$.jsx("div",{className:"stage",ref:n}),F&&$.jsxs("div",{className:"sheet center",children:[$.jsx("h2",{children:"Tu navegador no soporta 3D"}),$.jsx("p",{className:"muted",children:"Probá con Chrome, Safari o Firefox actualizados."})]}),$.jsx("div",{className:"toasts","aria-live":"polite",children:R.map(ae=>$.jsx("div",{className:"toast",children:ae.tx},ae.id))}),!F&&!Q&&!x&&$.jsx(UA,{profile:u,setProfile:h,hq:f,setHq:I,joinCode:p,setJoinCode:_,onCreate:()=>K("create"),onJoin:()=>K("join",p),onSolo:()=>K("solo"),error:c,muted:g,onMute:()=>{const ae=!g;Dm(ae),S(ae),fo()}}),!F&&x&&$.jsx(NA,{code:x,onCancel:Y}),!F&&Q&&O.phase==="lobby"&&$.jsx(FA,{session:O,link:oe,solo:Z,onCopy:ge,onLeave:Y,onStart:()=>{fo(),O.startMatch()}}),ve&&$.jsxs($.Fragment,{children:[$.jsxs("div",{className:"hud",children:[$.jsx(qv,{m:y.m,roster:O.roster,fmt:O.room.fmt,srv:y.srv,theme:"hud"}),$.jsx("button",{className:"icon float","aria-label":g?"Activar sonido":"Silenciar",onClick:()=>{const ae=!g;Dm(ae),S(ae),fo()},children:g?"🔇":"🔊"}),$.jsx("button",{className:"icon float exit","aria-label":"Salir de la sala",onClick:Y,children:"✕"})]}),b&&$.jsxs("div",{className:"replay-tag",children:[$.jsx("span",{children:"● REPETICIÓN"}),$.jsx("button",{onClick:()=>e.current&&e.current.skipReplay(),children:"Saltar"})]}),T&&!b&&$.jsx("div",{className:`banner ${T.gold?"gold":""}`,children:T.tx},T.id),O.mySlot<0&&$.jsx("div",{className:"spectator",children:"Mirás como espectador · entrás cuando se libere un lugar"}),Ue&&!b&&$.jsxs("div",{className:"controls",children:[$.jsx(kA,{ctrl:i}),$.jsx(BA,{back:y.back,onShot:ae=>{fo(),O.shot(ae)}})]}),y.st==="end"&&$.jsx(OA,{session:O,hud:y,onRematch:()=>O.startMatch(),onLobby:()=>O.backToLobby(),onLeave:Y})]})]})}J0(document.getElementById("root")).render($.jsx(XA,{}));
