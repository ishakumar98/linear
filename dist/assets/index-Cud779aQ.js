var Lf=Object.defineProperty;var If=(n,e,t)=>e in n?Lf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ue=(n,e,t)=>If(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ka(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ht={},ji=[],Mn=()=>{},$c=()=>!1,Hr=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ga=n=>n.startsWith("onUpdate:"),Bt=Object.assign,Wa=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Uf=Object.prototype.hasOwnProperty,st=(n,e)=>Uf.call(n,e),Ge=Array.isArray,ys=n=>Vr(n)==="[object Map]",Nf=n=>Vr(n)==="[object Set]",qe=n=>typeof n=="function",yt=n=>typeof n=="string",ls=n=>typeof n=="symbol",St=n=>n!==null&&typeof n=="object",jc=n=>(St(n)||qe(n))&&qe(n.then)&&qe(n.catch),Ff=Object.prototype.toString,Vr=n=>Ff.call(n),Of=n=>Vr(n).slice(8,-1),Bf=n=>Vr(n)==="[object Object]",Xa=n=>yt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ts=ka(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),kr=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},zf=/-\w/g,si=kr(n=>n.replace(zf,e=>e.slice(1).toUpperCase())),Hf=/\B([A-Z])/g,Pi=kr(n=>n.replace(Hf,"-$1").toLowerCase()),Zc=kr(n=>n.charAt(0).toUpperCase()+n.slice(1)),to=kr(n=>n?`on${Zc(n)}`:""),ti=(n,e)=>!Object.is(n,e),no=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Jc=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Vf=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Tl;const Gr=()=>Tl||(Tl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function je(n){if(Ge(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=yt(i)?Xf(i):je(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(yt(n)||St(n))return n}const kf=/;(?![^(]*\))/g,Gf=/:([^]+)/,Wf=/\/\*[^]*?\*\//g;function Xf(n){const e={};return n.replace(Wf,"").split(kf).forEach(t=>{if(t){const i=t.split(Gf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function en(n){let e="";if(yt(n))e=n;else if(Ge(n))for(let t=0;t<n.length;t++){const i=en(n[t]);i&&(e+=i+" ")}else if(St(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const qf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yf=ka(qf);function Qc(n){return!!n||n===""}/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vt;class Kf{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Vt,!e&&Vt&&(this.index=(Vt.scopes||(Vt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Vt;try{return Vt=this,e()}finally{Vt=t}}}on(){++this._on===1&&(this.prevScope=Vt,Vt=this)}off(){this._on>0&&--this._on===0&&(Vt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function $f(){return Vt}let ft;const io=new WeakSet;class eu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Vt&&Vt.active&&Vt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,io.has(this)&&(io.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||nu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bl(this),iu(this);const e=ft,t=un;ft=this,un=!0;try{return this.fn()}finally{su(this),ft=e,un=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ka(e);this.deps=this.depsTail=void 0,bl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?io.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Go(this)&&this.run()}get dirty(){return Go(this)}}let tu=0,bs,As;function nu(n,e=!1){if(n.flags|=8,e){n.next=As,As=n;return}n.next=bs,bs=n}function qa(){tu++}function Ya(){if(--tu>0)return;if(As){let e=As;for(As=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;bs;){let e=bs;for(bs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function iu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function su(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Ka(i),jf(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Go(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ru(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ru(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ds)||(n.globalVersion=Ds,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Go(n))))return;n.flags|=2;const e=n.dep,t=ft,i=un;ft=n,un=!0;try{iu(n);const s=n.fn(n._value);(e.version===0||ti(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ft=t,un=i,su(n),n.flags&=-3}}function Ka(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Ka(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function jf(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let un=!0;const ou=[];function Bn(){ou.push(un),un=!1}function zn(){const n=ou.pop();un=n===void 0?!0:n}function bl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ft;ft=void 0;try{e()}finally{ft=t}}}let Ds=0;class Zf{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $a{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ft||!un||ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ft)t=this.activeLink=new Zf(ft,this),ft.deps?(t.prevDep=ft.depsTail,ft.depsTail.nextDep=t,ft.depsTail=t):ft.deps=ft.depsTail=t,au(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ft.depsTail,t.nextDep=void 0,ft.depsTail.nextDep=t,ft.depsTail=t,ft.deps===t&&(ft.deps=i)}return t}trigger(e){this.version++,Ds++,this.notify(e)}notify(e){qa();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ya()}}}function au(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)au(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Wo=new WeakMap,Ai=Symbol(""),Xo=Symbol(""),Ls=Symbol("");function Dt(n,e,t){if(un&&ft){let i=Wo.get(n);i||Wo.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new $a),s.map=i,s.key=t),s.track()}}function Un(n,e,t,i,s,r){const o=Wo.get(n);if(!o){Ds++;return}const a=l=>{l&&l.trigger()};if(qa(),e==="clear")o.forEach(a);else{const l=Ge(n),c=l&&Xa(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===Ls||!ls(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Ls)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ai)),ys(n)&&a(o.get(Xo)));break;case"delete":l||(a(o.get(Ai)),ys(n)&&a(o.get(Xo)));break;case"set":ys(n)&&a(o.get(Ai));break}}Ya()}function Ii(n){const e=it(n);return e===n?e:(Dt(e,"iterate",Ls),sn(n)?e:e.map(Rt))}function Wr(n){return Dt(n=it(n),"iterate",Ls),n}const Jf={__proto__:null,[Symbol.iterator](){return so(this,Symbol.iterator,Rt)},concat(...n){return Ii(this).concat(...n.map(e=>Ge(e)?Ii(e):e))},entries(){return so(this,"entries",n=>(n[1]=Rt(n[1]),n))},every(n,e){return bn(this,"every",n,e,void 0,arguments)},filter(n,e){return bn(this,"filter",n,e,t=>t.map(Rt),arguments)},find(n,e){return bn(this,"find",n,e,Rt,arguments)},findIndex(n,e){return bn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return bn(this,"findLast",n,e,Rt,arguments)},findLastIndex(n,e){return bn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return bn(this,"forEach",n,e,void 0,arguments)},includes(...n){return ro(this,"includes",n)},indexOf(...n){return ro(this,"indexOf",n)},join(n){return Ii(this).join(n)},lastIndexOf(...n){return ro(this,"lastIndexOf",n)},map(n,e){return bn(this,"map",n,e,void 0,arguments)},pop(){return ds(this,"pop")},push(...n){return ds(this,"push",n)},reduce(n,...e){return Al(this,"reduce",n,e)},reduceRight(n,...e){return Al(this,"reduceRight",n,e)},shift(){return ds(this,"shift")},some(n,e){return bn(this,"some",n,e,void 0,arguments)},splice(...n){return ds(this,"splice",n)},toReversed(){return Ii(this).toReversed()},toSorted(n){return Ii(this).toSorted(n)},toSpliced(...n){return Ii(this).toSpliced(...n)},unshift(...n){return ds(this,"unshift",n)},values(){return so(this,"values",Rt)}};function so(n,e,t){const i=Wr(n),s=i[e]();return i!==n&&!sn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const Qf=Array.prototype;function bn(n,e,t,i,s,r){const o=Wr(n),a=o!==n&&!sn(n),l=o[e];if(l!==Qf[e]){const f=l.apply(n,r);return a?Rt(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,Rt(f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Al(n,e,t,i){const s=Wr(n);let r=t;return s!==n&&(sn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,Rt(a),l,n)}),s[e](r,...i)}function ro(n,e,t){const i=it(n);Dt(i,"iterate",Ls);const s=i[e](...t);return(s===-1||s===!1)&&Qa(t[0])?(t[0]=it(t[0]),i[e](...t)):s}function ds(n,e,t=[]){Bn(),qa();const i=it(n)[e].apply(n,t);return Ya(),zn(),i}const eh=ka("__proto__,__v_isRef,__isVue"),lu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ls));function th(n){ls(n)||(n=String(n));const e=it(this);return Dt(e,"has",n),e.hasOwnProperty(n)}class cu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?fh:du:r?hu:fu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ge(e);if(!s){let l;if(o&&(l=Jf[t]))return l;if(t==="hasOwnProperty")return th}const a=Reflect.get(e,t,Lt(e)?e:i);return(ls(t)?lu.has(t):eh(t))||(s||Dt(e,"get",t),r)?a:Lt(a)?o&&Xa(t)?a:a.value:St(a)?s?pu(a):Za(a):a}}class uu extends cu{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=ri(r);if(!sn(i)&&!ri(i)&&(r=it(r),i=it(i)),!Ge(e)&&Lt(r)&&!Lt(i))return l||(r.value=i),!0}const o=Ge(e)&&Xa(t)?Number(t)<e.length:st(e,t),a=Reflect.set(e,t,i,Lt(e)?e:s);return e===it(s)&&(o?ti(i,r)&&Un(e,"set",t,i):Un(e,"add",t,i)),a}deleteProperty(e,t){const i=st(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Un(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!ls(t)||!lu.has(t))&&Dt(e,"has",t),i}ownKeys(e){return Dt(e,"iterate",Ge(e)?"length":Ai),Reflect.ownKeys(e)}}class nh extends cu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const ih=new uu,sh=new nh,rh=new uu(!0);const qo=n=>n,$s=n=>Reflect.getPrototypeOf(n);function oh(n,e,t){return function(...i){const s=this.__v_raw,r=it(s),o=ys(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?qo:e?Pr:Rt;return!e&&Dt(r,"iterate",l?Xo:Ai),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function js(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ah(n,e){const t={get(s){const r=this.__v_raw,o=it(r),a=it(s);n||(ti(s,a)&&Dt(o,"get",s),Dt(o,"get",a));const{has:l}=$s(o),c=e?qo:n?Pr:Rt;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Dt(it(s),"iterate",Ai),s.size},has(s){const r=this.__v_raw,o=it(r),a=it(s);return n||(ti(s,a)&&Dt(o,"has",s),Dt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=it(a),c=e?qo:n?Pr:Rt;return!n&&Dt(l,"iterate",Ai),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Bt(t,n?{add:js("add"),set:js("set"),delete:js("delete"),clear:js("clear")}:{add(s){!e&&!sn(s)&&!ri(s)&&(s=it(s));const r=it(this);return $s(r).has.call(r,s)||(r.add(s),Un(r,"add",s,s)),this},set(s,r){!e&&!sn(r)&&!ri(r)&&(r=it(r));const o=it(this),{has:a,get:l}=$s(o);let c=a.call(o,s);c||(s=it(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?ti(r,u)&&Un(o,"set",s,r):Un(o,"add",s,r),this},delete(s){const r=it(this),{has:o,get:a}=$s(r);let l=o.call(r,s);l||(s=it(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Un(r,"delete",s,void 0),c},clear(){const s=it(this),r=s.size!==0,o=s.clear();return r&&Un(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=oh(s,n,e)}),t}function ja(n,e){const t=ah(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(st(t,s)&&s in i?t:i,s,r)}const lh={get:ja(!1,!1)},ch={get:ja(!1,!0)},uh={get:ja(!0,!1)};const fu=new WeakMap,hu=new WeakMap,du=new WeakMap,fh=new WeakMap;function hh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dh(n){return n.__v_skip||!Object.isExtensible(n)?0:hh(Of(n))}function Za(n){return ri(n)?n:Ja(n,!1,ih,lh,fu)}function ph(n){return Ja(n,!1,rh,ch,hu)}function pu(n){return Ja(n,!0,sh,uh,du)}function Ja(n,e,t,i,s){if(!St(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=dh(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function Zi(n){return ri(n)?Zi(n.__v_raw):!!(n&&n.__v_isReactive)}function ri(n){return!!(n&&n.__v_isReadonly)}function sn(n){return!!(n&&n.__v_isShallow)}function Qa(n){return n?!!n.__v_raw:!1}function it(n){const e=n&&n.__v_raw;return e?it(e):n}function mh(n){return!st(n,"__v_skip")&&Object.isExtensible(n)&&Jc(n,"__v_skip",!0),n}const Rt=n=>St(n)?Za(n):n,Pr=n=>St(n)?pu(n):n;function Lt(n){return n?n.__v_isRef===!0:!1}function vt(n){return gh(n,!1)}function gh(n,e){return Lt(n)?n:new _h(n,e)}class _h{constructor(e,t){this.dep=new $a,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:it(e),this._value=t?e:Rt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||sn(e)||ri(e);e=i?e:it(e),ti(e,t)&&(this._rawValue=e,this._value=i?e:Rt(e),this.dep.trigger())}}function vh(n){return Lt(n)?n.value:n}const xh={get:(n,e,t)=>e==="__v_raw"?n:vh(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Lt(s)&&!Lt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function mu(n){return Zi(n)?n:new Proxy(n,xh)}class Sh{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new $a(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ds-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ft!==this)return nu(this,!0),!0}get value(){const e=this.dep.track();return ru(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Mh(n,e,t=!1){let i,s;return qe(n)?i=n:(i=n.get,s=n.set),new Sh(i,s,t)}const Zs={},Dr=new WeakMap;let xi;function Eh(n,e=!1,t=xi){if(t){let i=Dr.get(t);i||Dr.set(t,i=[]),i.push(n)}}function yh(n,e,t=ht){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=E=>s?E:sn(E)||s===!1||s===0?Qn(E,1):Qn(E);let u,f,d,p,v=!1,M=!1;if(Lt(n)?(f=()=>n.value,v=sn(n)):Zi(n)?(f=()=>c(n),v=!0):Ge(n)?(M=!0,v=n.some(E=>Zi(E)||sn(E)),f=()=>n.map(E=>{if(Lt(E))return E.value;if(Zi(E))return c(E);if(qe(E))return l?l(E,2):E()})):qe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){Bn();try{d()}finally{zn()}}const E=xi;xi=u;try{return l?l(n,3,[p]):n(p)}finally{xi=E}}:f=Mn,e&&s){const E=f,C=s===!0?1/0:s;f=()=>Qn(E(),C)}const m=$f(),h=()=>{u.stop(),m&&m.active&&Wa(m.effects,u)};if(r&&e){const E=e;e=(...C)=>{E(...C),h()}}let R=M?new Array(n.length).fill(Zs):Zs;const A=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const C=u.run();if(s||v||(M?C.some((D,P)=>ti(D,R[P])):ti(C,R))){d&&d();const D=xi;xi=u;try{const P=[C,R===Zs?void 0:M&&R[0]===Zs?[]:R,p];R=C,l?l(e,3,P):e(...P)}finally{xi=D}}}else u.run()};return a&&a(A),u=new eu(f),u.scheduler=o?()=>o(A,!1):A,p=E=>Eh(E,!1,u),d=u.onStop=()=>{const E=Dr.get(u);if(E){if(l)l(E,4);else for(const C of E)C();Dr.delete(u)}},e?i?A(!0):R=u.run():o?o(A.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Qn(n,e=1/0,t){if(e<=0||!St(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Lt(n))Qn(n.value,e,t);else if(Ge(n))for(let i=0;i<n.length;i++)Qn(n[i],e,t);else if(Nf(n)||ys(n))n.forEach(i=>{Qn(i,e,t)});else if(Bf(n)){for(const i in n)Qn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Qn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vs(n,e,t,i){try{return i?n(...i):n()}catch(s){Xr(s,e,t)}}function Tn(n,e,t,i){if(qe(n)){const s=Vs(n,e,t,i);return s&&jc(s)&&s.catch(r=>{Xr(r,e,t)}),s}if(Ge(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Tn(n[r],e,t,i));return s}}function Xr(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ht;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){Bn(),Vs(r,null,10,[n,l,c]),zn();return}}Th(n,t,s,i,o)}function Th(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Ft=[];let dn=-1;const Ji=[];let Zn=null,Ki=0;const gu=Promise.resolve();let Lr=null;function bh(n){const e=Lr||gu;return n?e.then(this?n.bind(this):n):e}function Ah(n){let e=dn+1,t=Ft.length;for(;e<t;){const i=e+t>>>1,s=Ft[i],r=Is(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function el(n){if(!(n.flags&1)){const e=Is(n),t=Ft[Ft.length-1];!t||!(n.flags&2)&&e>=Is(t)?Ft.push(n):Ft.splice(Ah(e),0,n),n.flags|=1,_u()}}function _u(){Lr||(Lr=gu.then(xu))}function wh(n){Ge(n)?Ji.push(...n):Zn&&n.id===-1?Zn.splice(Ki+1,0,n):n.flags&1||(Ji.push(n),n.flags|=1),_u()}function wl(n,e,t=dn+1){for(;t<Ft.length;t++){const i=Ft[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ft.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function vu(n){if(Ji.length){const e=[...new Set(Ji)].sort((t,i)=>Is(t)-Is(i));if(Ji.length=0,Zn){Zn.push(...e);return}for(Zn=e,Ki=0;Ki<Zn.length;Ki++){const t=Zn[Ki];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Zn=null,Ki=0}}const Is=n=>n.id==null?n.flags&2?-1:1/0:n.id;function xu(n){try{for(dn=0;dn<Ft.length;dn++){const e=Ft[dn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Vs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;dn<Ft.length;dn++){const e=Ft[dn];e&&(e.flags&=-2)}dn=-1,Ft.length=0,vu(),Lr=null,(Ft.length||Ji.length)&&xu()}}let _n=null,Su=null;function Ir(n){const e=_n;return _n=n,Su=n&&n.type.__scopeId||null,e}function Rh(n,e=_n,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Ol(-1);const r=Ir(e);let o;try{o=n(...s)}finally{Ir(r),i._d&&Ol(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function fi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Bn(),Tn(l,t,8,[n.el,a,n,e]),zn())}}const Ch=Symbol("_vte"),Ph=n=>n.__isTeleport,Dh=Symbol("_leaveCb");function tl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,tl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Mu(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Ur=new WeakMap;function ws(n,e,t,i,s=!1){if(Ge(n)){n.forEach((v,M)=>ws(v,e&&(Ge(e)?e[M]:e),t,i,s));return}if(Rs(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ws(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?ol(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ht?a.refs={}:a.refs,f=a.setupState,d=it(f),p=f===ht?$c:v=>st(d,v);if(c!=null&&c!==l){if(Rl(e),yt(c))u[c]=null,p(c)&&(f[c]=null);else if(Lt(c)){c.value=null;const v=e;v.k&&(u[v.k]=null)}}if(qe(l))Vs(l,a,12,[o,u]);else{const v=yt(l),M=Lt(l);if(v||M){const m=()=>{if(n.f){const h=v?p(l)?f[l]:u[l]:l.value;if(s)Ge(h)&&Wa(h,r);else if(Ge(h))h.includes(r)||h.push(r);else if(v)u[l]=[r],p(l)&&(f[l]=u[l]);else{const R=[r];l.value=R,n.k&&(u[n.k]=R)}}else v?(u[l]=o,p(l)&&(f[l]=o)):M&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const h=()=>{m(),Ur.delete(n)};h.id=-1,Ur.set(n,h),Kt(h,t)}else Rl(n),m()}}}function Rl(n){const e=Ur.get(n);e&&(e.flags|=8,Ur.delete(n))}Gr().requestIdleCallback;Gr().cancelIdleCallback;const Rs=n=>!!n.type.__asyncLoader,Eu=n=>n.type.__isKeepAlive;function Lh(n,e){yu(n,"a",e)}function Ih(n,e){yu(n,"da",e)}function yu(n,e,t=Ot){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(qr(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Eu(s.parent.vnode)&&Uh(i,e,t,s),s=s.parent}}function Uh(n,e,t,i){const s=qr(e,n,i,!0);nl(()=>{Wa(i[e],s)},t)}function qr(n,e,t=Ot,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Bn();const a=ks(t),l=Tn(e,t,n,o);return a(),zn(),l});return i?s.unshift(r):s.push(r),r}}const kn=n=>(e,t=Ot)=>{(!Ns||n==="sp")&&qr(n,(...i)=>e(...i),t)},Nh=kn("bm"),Tu=kn("m"),Fh=kn("bu"),Oh=kn("u"),Bh=kn("bum"),nl=kn("um"),zh=kn("sp"),Hh=kn("rtg"),Vh=kn("rtc");function kh(n,e=Ot){qr("ec",n,e)}const Gh=Symbol.for("v-ndc");function Wh(n,e,t,i){let s;const r=t,o=Ge(n);if(o||yt(n)){const a=o&&Zi(n);let l=!1,c=!1;a&&(l=!sn(n),c=ri(n),n=Wr(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?Pr(Rt(n[u])):Rt(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(St(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Yo=n=>n?Xu(n)?ol(n):Yo(n.parent):null,Cs=Bt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Yo(n.parent),$root:n=>Yo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Au(n),$forceUpdate:n=>n.f||(n.f=()=>{el(n.update)}),$nextTick:n=>n.n||(n.n=bh.bind(n.proxy)),$watch:n=>hd.bind(n)}),oo=(n,e)=>n!==ht&&!n.__isScriptSetup&&st(n,e),Xh={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(oo(i,e))return o[e]=1,i[e];if(s!==ht&&st(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&st(c,e))return o[e]=3,r[e];if(t!==ht&&st(t,e))return o[e]=4,t[e];Ko&&(o[e]=0)}}const u=Cs[e];let f,d;if(u)return e==="$attrs"&&Dt(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==ht&&st(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,st(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return oo(s,e)?(s[e]=t,!0):i!==ht&&st(i,e)?(i[e]=t,!0):st(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r,type:o}},a){let l,c;return!!(t[a]||n!==ht&&a[0]!=="$"&&st(n,a)||oo(e,a)||(l=r[0])&&st(l,a)||st(i,a)||st(Cs,a)||st(s.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:st(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Cl(n){return Ge(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ko=!0;function qh(n){const e=Au(n),t=n.proxy,i=n.ctx;Ko=!1,e.beforeCreate&&Pl(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:v,activated:M,deactivated:m,beforeDestroy:h,beforeUnmount:R,destroyed:A,unmounted:E,render:C,renderTracked:D,renderTriggered:P,errorCaptured:O,serverPrefetch:T,expose:y,inheritAttrs:I,components:W,directives:Z,filters:ae}=e;if(c&&Yh(c,i,null),o)for(const ne in o){const z=o[ne];qe(z)&&(i[ne]=z.bind(t))}if(s){const ne=s.call(t,t);St(ne)&&(n.data=Za(ne))}if(Ko=!0,r)for(const ne in r){const z=r[ne],me=qe(z)?z.bind(t,t):qe(z.get)?z.get.bind(t,t):Mn,Ee=!qe(z)&&qe(z.set)?z.set.bind(t):Mn,Le=Ze({get:me,set:Ee});Object.defineProperty(i,ne,{enumerable:!0,configurable:!0,get:()=>Le.value,set:Be=>Le.value=Be})}if(a)for(const ne in a)bu(a[ne],i,t,ne);if(l){const ne=qe(l)?l.call(t):l;Reflect.ownKeys(ne).forEach(z=>{Qh(z,ne[z])})}u&&Pl(u,n,"c");function Q(ne,z){Ge(z)?z.forEach(me=>ne(me.bind(t))):z&&ne(z.bind(t))}if(Q(Nh,f),Q(Tu,d),Q(Fh,p),Q(Oh,v),Q(Lh,M),Q(Ih,m),Q(kh,O),Q(Vh,D),Q(Hh,P),Q(Bh,R),Q(nl,E),Q(zh,T),Ge(y))if(y.length){const ne=n.exposed||(n.exposed={});y.forEach(z=>{Object.defineProperty(ne,z,{get:()=>t[z],set:me=>t[z]=me,enumerable:!0})})}else n.exposed||(n.exposed={});C&&n.render===Mn&&(n.render=C),I!=null&&(n.inheritAttrs=I),W&&(n.components=W),Z&&(n.directives=Z),T&&Mu(n)}function Yh(n,e,t=Mn){Ge(n)&&(n=$o(n));for(const i in n){const s=n[i];let r;St(s)?"default"in s?r=Sr(s.from||i,s.default,!0):r=Sr(s.from||i):r=Sr(s),Lt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Pl(n,e,t){Tn(Ge(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function bu(n,e,t,i){let s=i.includes(".")?zu(t,i):()=>t[i];if(yt(n)){const r=e[n];qe(r)&&lo(s,r)}else if(qe(n))lo(s,n.bind(t));else if(St(n))if(Ge(n))n.forEach(r=>bu(r,e,t,i));else{const r=qe(n.handler)?n.handler.bind(t):e[n.handler];qe(r)&&lo(s,r,n)}}function Au(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Nr(l,c,o,!0)),Nr(l,e,o)),St(e)&&r.set(e,l),l}function Nr(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Nr(n,r,t,!0),s&&s.forEach(o=>Nr(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Kh[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Kh={data:Dl,props:Ll,emits:Ll,methods:Ms,computed:Ms,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:Ms,directives:Ms,watch:jh,provide:Dl,inject:$h};function Dl(n,e){return e?n?function(){return Bt(qe(n)?n.call(this,this):n,qe(e)?e.call(this,this):e)}:e:n}function $h(n,e){return Ms($o(n),$o(e))}function $o(n){if(Ge(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ut(n,e){return n?[...new Set([].concat(n,e))]:e}function Ms(n,e){return n?Bt(Object.create(null),n,e):e}function Ll(n,e){return n?Ge(n)&&Ge(e)?[...new Set([...n,...e])]:Bt(Object.create(null),Cl(n),Cl(e??{})):e}function jh(n,e){if(!n)return e;if(!e)return n;const t=Bt(Object.create(null),n);for(const i in e)t[i]=Ut(n[i],e[i]);return t}function wu(){return{app:null,config:{isNativeTag:$c,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zh=0;function Jh(n,e){return function(i,s=null){qe(i)||(i=Bt({},i)),s!=null&&!St(s)&&(s=null);const r=wu(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Zh++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Fd,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&qe(u.install)?(o.add(u),u.install(c,...f)):qe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||En(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,ol(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Tn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Qi;Qi=c;try{return u()}finally{Qi=f}}};return c}}let Qi=null;function Qh(n,e){if(Ot){let t=Ot.provides;const i=Ot.parent&&Ot.parent.provides;i===t&&(t=Ot.provides=Object.create(i)),t[n]=e}}function Sr(n,e,t=!1){const i=Pd();if(i||Qi){let s=Qi?Qi._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&qe(e)?e.call(i&&i.proxy):e}}const Ru={},Cu=()=>Object.create(Ru),Pu=n=>Object.getPrototypeOf(n)===Ru;function ed(n,e,t,i=!1){const s={},r=Cu();n.propsDefaults=Object.create(null),Du(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:ph(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function td(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=it(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Yr(n.emitsOptions,d))continue;const p=e[d];if(l)if(st(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const v=si(d);s[v]=jo(l,a,v,p,n,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{Du(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!st(e,f)&&((u=Pi(f))===f||!st(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=jo(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!st(e,f))&&(delete r[f],c=!0)}c&&Un(n.attrs,"set","")}function Du(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ts(l))continue;const c=e[l];let u;s&&st(s,u=si(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Yr(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=it(t),c=a||ht;for(let u=0;u<r.length;u++){const f=r[u];t[f]=jo(s,l,f,c[f],n,!st(c,f))}}return o}function jo(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=st(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=ks(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Pi(t))&&(i=!0))}return i}const nd=new WeakMap;function Lu(n,e,t=!1){const i=t?nd:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!qe(n)){const u=f=>{l=!0;const[d,p]=Lu(f,e,!0);Bt(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return St(n)&&i.set(n,ji),ji;if(Ge(r))for(let u=0;u<r.length;u++){const f=si(r[u]);Il(f)&&(o[f]=ht)}else if(r)for(const u in r){const f=si(u);if(Il(f)){const d=r[u],p=o[f]=Ge(d)||qe(d)?{type:d}:Bt({},d),v=p.type;let M=!1,m=!0;if(Ge(v))for(let h=0;h<v.length;++h){const R=v[h],A=qe(R)&&R.name;if(A==="Boolean"){M=!0;break}else A==="String"&&(m=!1)}else M=qe(v)&&v.name==="Boolean";p[0]=M,p[1]=m,(M||st(p,"default"))&&a.push(f)}}const c=[o,a];return St(n)&&i.set(n,c),c}function Il(n){return n[0]!=="$"&&!Ts(n)}const il=n=>n==="_"||n==="_ctx"||n==="$stable",sl=n=>Ge(n)?n.map(mn):[mn(n)],id=(n,e,t)=>{if(e._n)return e;const i=Rh((...s)=>sl(e(...s)),t);return i._c=!1,i},Iu=(n,e,t)=>{const i=n._ctx;for(const s in n){if(il(s))continue;const r=n[s];if(qe(r))e[s]=id(s,r,i);else if(r!=null){const o=sl(r);e[s]=()=>o}}},Uu=(n,e)=>{const t=sl(e);n.slots.default=()=>t},Nu=(n,e,t)=>{for(const i in e)(t||!il(i))&&(n[i]=e[i])},sd=(n,e,t)=>{const i=n.slots=Cu();if(n.vnode.shapeFlag&32){const s=e._;s?(Nu(i,e,t),t&&Jc(i,"_",s,!0)):Iu(e,i)}else e&&Uu(n,e)},rd=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ht;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Nu(s,e,t):(r=!e.$stable,Iu(e,s)),o=e}else e&&(Uu(n,e),o={default:1});if(r)for(const a in s)!il(a)&&o[a]==null&&delete s[a]},Kt=Sd;function od(n){return ad(n)}function ad(n,e){const t=Gr();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=Mn,insertStaticContent:v}=n,M=(w,_,k,$=null,G=null,F=null,fe=void 0,X=null,ee=!!_.dynamicChildren)=>{if(w===_)return;w&&!ps(w,_)&&($=ce(w),Be(w,G,F,!0),w=null),_.patchFlag===-2&&(ee=!1,_.dynamicChildren=null);const{type:re,ref:Me,shapeFlag:x}=_;switch(re){case Kr:m(w,_,k,$);break;case oi:h(w,_,k,$);break;case Mr:w==null&&R(_,k,$,fe);break;case pn:W(w,_,k,$,G,F,fe,X,ee);break;default:x&1?C(w,_,k,$,G,F,fe,X,ee):x&6?Z(w,_,k,$,G,F,fe,X,ee):(x&64||x&128)&&re.process(w,_,k,$,G,F,fe,X,ee,Re)}Me!=null&&G?ws(Me,w&&w.ref,F,_||w,!_):Me==null&&w&&w.ref!=null&&ws(w.ref,null,F,w,!0)},m=(w,_,k,$)=>{if(w==null)i(_.el=a(_.children),k,$);else{const G=_.el=w.el;_.children!==w.children&&c(G,_.children)}},h=(w,_,k,$)=>{w==null?i(_.el=l(_.children||""),k,$):_.el=w.el},R=(w,_,k,$)=>{[w.el,w.anchor]=v(w.children,_,k,$,w.el,w.anchor)},A=({el:w,anchor:_},k,$)=>{let G;for(;w&&w!==_;)G=d(w),i(w,k,$),w=G;i(_,k,$)},E=({el:w,anchor:_})=>{let k;for(;w&&w!==_;)k=d(w),s(w),w=k;s(_)},C=(w,_,k,$,G,F,fe,X,ee)=>{_.type==="svg"?fe="svg":_.type==="math"&&(fe="mathml"),w==null?D(_,k,$,G,F,fe,X,ee):T(w,_,G,F,fe,X,ee)},D=(w,_,k,$,G,F,fe,X)=>{let ee,re;const{props:Me,shapeFlag:x,transition:g,dirs:L}=w;if(ee=w.el=o(w.type,F,Me&&Me.is,Me),x&8?u(ee,w.children):x&16&&O(w.children,ee,null,$,G,ao(w,F),fe,X),L&&fi(w,null,$,"created"),P(ee,w,w.scopeId,fe,$),Me){for(const J in Me)J!=="value"&&!Ts(J)&&r(ee,J,null,Me[J],F,$);"value"in Me&&r(ee,"value",null,Me.value,F),(re=Me.onVnodeBeforeMount)&&hn(re,$,w)}L&&fi(w,null,$,"beforeMount");const H=ld(G,g);H&&g.beforeEnter(ee),i(ee,_,k),((re=Me&&Me.onVnodeMounted)||H||L)&&Kt(()=>{re&&hn(re,$,w),H&&g.enter(ee),L&&fi(w,null,$,"mounted")},G)},P=(w,_,k,$,G)=>{if(k&&p(w,k),$)for(let F=0;F<$.length;F++)p(w,$[F]);if(G){let F=G.subTree;if(_===F||Vu(F.type)&&(F.ssContent===_||F.ssFallback===_)){const fe=G.vnode;P(w,fe,fe.scopeId,fe.slotScopeIds,G.parent)}}},O=(w,_,k,$,G,F,fe,X,ee=0)=>{for(let re=ee;re<w.length;re++){const Me=w[re]=X?Jn(w[re]):mn(w[re]);M(null,Me,_,k,$,G,F,fe,X)}},T=(w,_,k,$,G,F,fe)=>{const X=_.el=w.el;let{patchFlag:ee,dynamicChildren:re,dirs:Me}=_;ee|=w.patchFlag&16;const x=w.props||ht,g=_.props||ht;let L;if(k&&hi(k,!1),(L=g.onVnodeBeforeUpdate)&&hn(L,k,_,w),Me&&fi(_,w,k,"beforeUpdate"),k&&hi(k,!0),(x.innerHTML&&g.innerHTML==null||x.textContent&&g.textContent==null)&&u(X,""),re?y(w.dynamicChildren,re,X,k,$,ao(_,G),F):fe||z(w,_,X,null,k,$,ao(_,G),F,!1),ee>0){if(ee&16)I(X,x,g,k,G);else if(ee&2&&x.class!==g.class&&r(X,"class",null,g.class,G),ee&4&&r(X,"style",x.style,g.style,G),ee&8){const H=_.dynamicProps;for(let J=0;J<H.length;J++){const V=H[J],ye=x[V],he=g[V];(he!==ye||V==="value")&&r(X,V,ye,he,G,k)}}ee&1&&w.children!==_.children&&u(X,_.children)}else!fe&&re==null&&I(X,x,g,k,G);((L=g.onVnodeUpdated)||Me)&&Kt(()=>{L&&hn(L,k,_,w),Me&&fi(_,w,k,"updated")},$)},y=(w,_,k,$,G,F,fe)=>{for(let X=0;X<_.length;X++){const ee=w[X],re=_[X],Me=ee.el&&(ee.type===pn||!ps(ee,re)||ee.shapeFlag&198)?f(ee.el):k;M(ee,re,Me,null,$,G,F,fe,!0)}},I=(w,_,k,$,G)=>{if(_!==k){if(_!==ht)for(const F in _)!Ts(F)&&!(F in k)&&r(w,F,_[F],null,G,$);for(const F in k){if(Ts(F))continue;const fe=k[F],X=_[F];fe!==X&&F!=="value"&&r(w,F,X,fe,G,$)}"value"in k&&r(w,"value",_.value,k.value,G)}},W=(w,_,k,$,G,F,fe,X,ee)=>{const re=_.el=w?w.el:a(""),Me=_.anchor=w?w.anchor:a("");let{patchFlag:x,dynamicChildren:g,slotScopeIds:L}=_;L&&(X=X?X.concat(L):L),w==null?(i(re,k,$),i(Me,k,$),O(_.children||[],k,Me,G,F,fe,X,ee)):x>0&&x&64&&g&&w.dynamicChildren?(y(w.dynamicChildren,g,k,G,F,fe,X),(_.key!=null||G&&_===G.subTree)&&Fu(w,_,!0)):z(w,_,k,Me,G,F,fe,X,ee)},Z=(w,_,k,$,G,F,fe,X,ee)=>{_.slotScopeIds=X,w==null?_.shapeFlag&512?G.ctx.activate(_,k,$,fe,ee):ae(_,k,$,G,F,fe,ee):se(w,_,ee)},ae=(w,_,k,$,G,F,fe)=>{const X=w.component=Cd(w,$,G);if(Eu(w)&&(X.ctx.renderer=Re),Dd(X,!1,fe),X.asyncDep){if(G&&G.registerDep(X,Q,fe),!w.el){const ee=X.subTree=En(oi);h(null,ee,_,k),w.placeholder=ee.el}}else Q(X,w,_,k,G,F,fe)},se=(w,_,k)=>{const $=_.component=w.component;if(vd(w,_,k))if($.asyncDep&&!$.asyncResolved){ne($,_,k);return}else $.next=_,$.update();else _.el=w.el,$.vnode=_},Q=(w,_,k,$,G,F,fe)=>{const X=()=>{if(w.isMounted){let{next:x,bu:g,u:L,parent:H,vnode:J}=w;{const Ae=Ou(w);if(Ae){x&&(x.el=J.el,ne(w,x,fe)),Ae.asyncDep.then(()=>{w.isUnmounted||X()});return}}let V=x,ye;hi(w,!1),x?(x.el=J.el,ne(w,x,fe)):x=J,g&&no(g),(ye=x.props&&x.props.onVnodeBeforeUpdate)&&hn(ye,H,x,J),hi(w,!0);const he=Nl(w),be=w.subTree;w.subTree=he,M(be,he,f(be.el),ce(be),w,G,F),x.el=he.el,V===null&&xd(w,he.el),L&&Kt(L,G),(ye=x.props&&x.props.onVnodeUpdated)&&Kt(()=>hn(ye,H,x,J),G)}else{let x;const{el:g,props:L}=_,{bm:H,m:J,parent:V,root:ye,type:he}=w,be=Rs(_);hi(w,!1),H&&no(H),!be&&(x=L&&L.onVnodeBeforeMount)&&hn(x,V,_),hi(w,!0);{ye.ce&&ye.ce._def.shadowRoot!==!1&&ye.ce._injectChildStyle(he);const Ae=w.subTree=Nl(w);M(null,Ae,k,$,w,G,F),_.el=Ae.el}if(J&&Kt(J,G),!be&&(x=L&&L.onVnodeMounted)){const Ae=_;Kt(()=>hn(x,V,Ae),G)}(_.shapeFlag&256||V&&Rs(V.vnode)&&V.vnode.shapeFlag&256)&&w.a&&Kt(w.a,G),w.isMounted=!0,_=k=$=null}};w.scope.on();const ee=w.effect=new eu(X);w.scope.off();const re=w.update=ee.run.bind(ee),Me=w.job=ee.runIfDirty.bind(ee);Me.i=w,Me.id=w.uid,ee.scheduler=()=>el(Me),hi(w,!0),re()},ne=(w,_,k)=>{_.component=w;const $=w.vnode.props;w.vnode=_,w.next=null,td(w,_.props,$,k),rd(w,_.children,k),Bn(),wl(w),zn()},z=(w,_,k,$,G,F,fe,X,ee=!1)=>{const re=w&&w.children,Me=w?w.shapeFlag:0,x=_.children,{patchFlag:g,shapeFlag:L}=_;if(g>0){if(g&128){Ee(re,x,k,$,G,F,fe,X,ee);return}else if(g&256){me(re,x,k,$,G,F,fe,X,ee);return}}L&8?(Me&16&&ie(re,G,F),x!==re&&u(k,x)):Me&16?L&16?Ee(re,x,k,$,G,F,fe,X,ee):ie(re,G,F,!0):(Me&8&&u(k,""),L&16&&O(x,k,$,G,F,fe,X,ee))},me=(w,_,k,$,G,F,fe,X,ee)=>{w=w||ji,_=_||ji;const re=w.length,Me=_.length,x=Math.min(re,Me);let g;for(g=0;g<x;g++){const L=_[g]=ee?Jn(_[g]):mn(_[g]);M(w[g],L,k,null,G,F,fe,X,ee)}re>Me?ie(w,G,F,!0,!1,x):O(_,k,$,G,F,fe,X,ee,x)},Ee=(w,_,k,$,G,F,fe,X,ee)=>{let re=0;const Me=_.length;let x=w.length-1,g=Me-1;for(;re<=x&&re<=g;){const L=w[re],H=_[re]=ee?Jn(_[re]):mn(_[re]);if(ps(L,H))M(L,H,k,null,G,F,fe,X,ee);else break;re++}for(;re<=x&&re<=g;){const L=w[x],H=_[g]=ee?Jn(_[g]):mn(_[g]);if(ps(L,H))M(L,H,k,null,G,F,fe,X,ee);else break;x--,g--}if(re>x){if(re<=g){const L=g+1,H=L<Me?_[L].el:$;for(;re<=g;)M(null,_[re]=ee?Jn(_[re]):mn(_[re]),k,H,G,F,fe,X,ee),re++}}else if(re>g)for(;re<=x;)Be(w[re],G,F,!0),re++;else{const L=re,H=re,J=new Map;for(re=H;re<=g;re++){const Pe=_[re]=ee?Jn(_[re]):mn(_[re]);Pe.key!=null&&J.set(Pe.key,re)}let V,ye=0;const he=g-H+1;let be=!1,Ae=0;const ue=new Array(he);for(re=0;re<he;re++)ue[re]=0;for(re=L;re<=x;re++){const Pe=w[re];if(ye>=he){Be(Pe,G,F,!0);continue}let we;if(Pe.key!=null)we=J.get(Pe.key);else for(V=H;V<=g;V++)if(ue[V-H]===0&&ps(Pe,_[V])){we=V;break}we===void 0?Be(Pe,G,F,!0):(ue[we-H]=re+1,we>=Ae?Ae=we:be=!0,M(Pe,_[we],k,null,G,F,fe,X,ee),ye++)}const _e=be?cd(ue):ji;for(V=_e.length-1,re=he-1;re>=0;re--){const Pe=H+re,we=_[Pe],ge=_[Pe+1],B=Pe+1<Me?ge.el||ge.placeholder:$;ue[re]===0?M(null,we,k,B,G,F,fe,X,ee):be&&(V<0||re!==_e[V]?Le(we,k,B,2):V--)}}},Le=(w,_,k,$,G=null)=>{const{el:F,type:fe,transition:X,children:ee,shapeFlag:re}=w;if(re&6){Le(w.component.subTree,_,k,$);return}if(re&128){w.suspense.move(_,k,$);return}if(re&64){fe.move(w,_,k,Re);return}if(fe===pn){i(F,_,k);for(let x=0;x<ee.length;x++)Le(ee[x],_,k,$);i(w.anchor,_,k);return}if(fe===Mr){A(w,_,k);return}if($!==2&&re&1&&X)if($===0)X.beforeEnter(F),i(F,_,k),Kt(()=>X.enter(F),G);else{const{leave:x,delayLeave:g,afterLeave:L}=X,H=()=>{w.ctx.isUnmounted?s(F):i(F,_,k)},J=()=>{F._isLeaving&&F[Dh](!0),x(F,()=>{H(),L&&L()})};g?g(F,H,J):J()}else i(F,_,k)},Be=(w,_,k,$=!1,G=!1)=>{const{type:F,props:fe,ref:X,children:ee,dynamicChildren:re,shapeFlag:Me,patchFlag:x,dirs:g,cacheIndex:L}=w;if(x===-2&&(G=!1),X!=null&&(Bn(),ws(X,null,k,w,!0),zn()),L!=null&&(_.renderCache[L]=void 0),Me&256){_.ctx.deactivate(w);return}const H=Me&1&&g,J=!Rs(w);let V;if(J&&(V=fe&&fe.onVnodeBeforeUnmount)&&hn(V,_,w),Me&6)Qe(w.component,k,$);else{if(Me&128){w.suspense.unmount(k,$);return}H&&fi(w,null,_,"beforeUnmount"),Me&64?w.type.remove(w,_,k,Re,$):re&&!re.hasOnce&&(F!==pn||x>0&&x&64)?ie(re,_,k,!1,!0):(F===pn&&x&384||!G&&Me&16)&&ie(ee,_,k),$&&nt(w)}(J&&(V=fe&&fe.onVnodeUnmounted)||H)&&Kt(()=>{V&&hn(V,_,w),H&&fi(w,null,_,"unmounted")},k)},nt=w=>{const{type:_,el:k,anchor:$,transition:G}=w;if(_===pn){rt(k,$);return}if(_===Mr){E(w);return}const F=()=>{s(k),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(w.shapeFlag&1&&G&&!G.persisted){const{leave:fe,delayLeave:X}=G,ee=()=>fe(k,F);X?X(w.el,F,ee):ee()}else F()},rt=(w,_)=>{let k;for(;w!==_;)k=d(w),s(w),w=k;s(_)},Qe=(w,_,k)=>{const{bum:$,scope:G,job:F,subTree:fe,um:X,m:ee,a:re}=w;Ul(ee),Ul(re),$&&no($),G.stop(),F&&(F.flags|=8,Be(fe,w,_,k)),X&&Kt(X,_),Kt(()=>{w.isUnmounted=!0},_)},ie=(w,_,k,$=!1,G=!1,F=0)=>{for(let fe=F;fe<w.length;fe++)Be(w[fe],_,k,$,G)},ce=w=>{if(w.shapeFlag&6)return ce(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const _=d(w.anchor||w.el),k=_&&_[Ch];return k?d(k):_};let Ce=!1;const ze=(w,_,k)=>{w==null?_._vnode&&Be(_._vnode,null,null,!0):M(_._vnode||null,w,_,null,null,null,k),_._vnode=w,Ce||(Ce=!0,wl(),vu(),Ce=!1)},Re={p:M,um:Be,m:Le,r:nt,mt:ae,mc:O,pc:z,pbc:y,n:ce,o:n};return{render:ze,hydrate:void 0,createApp:Jh(ze)}}function ao({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function hi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function ld(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Fu(n,e,t=!1){const i=n.children,s=e.children;if(Ge(i)&&Ge(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Jn(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Fu(o,a)),a.type===Kr&&a.patchFlag!==-1&&(a.el=o.el),a.type===oi&&!a.el&&(a.el=o.el)}}function cd(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Ou(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ou(e)}function Ul(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const ud=Symbol.for("v-scx"),fd=()=>Sr(ud);function lo(n,e,t){return Bu(n,e,t)}function Bu(n,e,t=ht){const{immediate:i,deep:s,flush:r,once:o}=t,a=Bt({},t),l=e&&i||!e&&r!=="post";let c;if(Ns){if(r==="sync"){const p=fd();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Mn,p.resume=Mn,p.pause=Mn,p}}const u=Ot;a.call=(p,v,M)=>Tn(p,u,v,M);let f=!1;r==="post"?a.scheduler=p=>{Kt(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,v)=>{v?p():el(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=yh(n,e,a);return Ns&&(c?c.push(d):l&&d()),d}function hd(n,e,t){const i=this.proxy,s=yt(n)?n.includes(".")?zu(i,n):()=>i[n]:n.bind(i,i);let r;qe(e)?r=e:(r=e.handler,t=e);const o=ks(this),a=Bu(s,r.bind(i),t);return o(),a}function zu(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const dd=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${si(e)}Modifiers`]||n[`${Pi(e)}Modifiers`];function pd(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ht;let s=t;const r=e.startsWith("update:"),o=r&&dd(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>yt(u)?u.trim():u)),o.number&&(s=t.map(Vf)));let a,l=i[a=to(e)]||i[a=to(si(e))];!l&&r&&(l=i[a=to(Pi(e))]),l&&Tn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Tn(c,n,6,s)}}const md=new WeakMap;function Hu(n,e,t=!1){const i=t?md:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!qe(n)){const l=c=>{const u=Hu(c,e,!0);u&&(a=!0,Bt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(St(n)&&i.set(n,null),null):(Ge(r)?r.forEach(l=>o[l]=null):Bt(o,r),St(n)&&i.set(n,o),o)}function Yr(n,e){return!n||!Hr(e)?!1:(e=e.slice(2).replace(/Once$/,""),st(n,e[0].toLowerCase()+e.slice(1))||st(n,Pi(e))||st(n,e))}function Nl(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:v,inheritAttrs:M}=n,m=Ir(n);let h,R;try{if(t.shapeFlag&4){const E=s||i,C=E;h=mn(c.call(C,E,u,f,p,d,v)),R=a}else{const E=e;h=mn(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),R=e.props?a:gd(a)}}catch(E){Ps.length=0,Xr(E,n,1),h=En(oi)}let A=h;if(R&&M!==!1){const E=Object.keys(R),{shapeFlag:C}=A;E.length&&C&7&&(r&&E.some(Ga)&&(R=_d(R,r)),A=ns(A,R,!1,!0))}return t.dirs&&(A=ns(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&tl(A,t.transition),h=A,Ir(m),h}const gd=n=>{let e;for(const t in n)(t==="class"||t==="style"||Hr(t))&&((e||(e={}))[t]=n[t]);return e},_d=(n,e)=>{const t={};for(const i in n)(!Ga(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function vd(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Fl(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!Yr(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Fl(i,o,c):!0:!!o;return!1}function Fl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Yr(t,r))return!0}return!1}function xd({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Vu=n=>n.__isSuspense;function Sd(n,e){e&&e.pendingBranch?Ge(n)?e.effects.push(...n):e.effects.push(n):wh(n)}const pn=Symbol.for("v-fgt"),Kr=Symbol.for("v-txt"),oi=Symbol.for("v-cmt"),Mr=Symbol.for("v-stc"),Ps=[];let $t=null;function Dn(n=!1){Ps.push($t=n?null:[])}function Md(){Ps.pop(),$t=Ps[Ps.length-1]||null}let Us=1;function Ol(n,e=!1){Us+=n,n<0&&$t&&e&&($t.hasOnce=!0)}function ku(n){return n.dynamicChildren=Us>0?$t||ji:null,Md(),Us>0&&$t&&$t.push(n),n}function Gn(n,e,t,i,s,r){return ku(de(n,e,t,i,s,r,!0))}function Ed(n,e,t,i,s){return ku(En(n,e,t,i,s,!0))}function Gu(n){return n?n.__v_isVNode===!0:!1}function ps(n,e){return n.type===e.type&&n.key===e.key}const Wu=({key:n})=>n??null,Er=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?yt(n)||Lt(n)||qe(n)?{i:_n,r:n,k:e,f:!!t}:n:null);function de(n,e=null,t=null,i=0,s=null,r=n===pn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Wu(e),ref:e&&Er(e),scopeId:Su,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_n};return a?(rl(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=yt(t)?8:16),Us>0&&!o&&$t&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&$t.push(l),l}const En=yd;function yd(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Gh)&&(n=oi),Gu(n)){const a=ns(n,e,!0);return t&&rl(a,t),Us>0&&!r&&$t&&(a.shapeFlag&6?$t[$t.indexOf(n)]=a:$t.push(a)),a.patchFlag=-2,a}if(Nd(n)&&(n=n.__vccOpts),e){e=Td(e);let{class:a,style:l}=e;a&&!yt(a)&&(e.class=en(a)),St(l)&&(Qa(l)&&!Ge(l)&&(l=Bt({},l)),e.style=je(l))}const o=yt(n)?1:Vu(n)?128:Ph(n)?64:St(n)?4:qe(n)?2:0;return de(n,e,t,i,s,o,r,!0)}function Td(n){return n?Qa(n)||Pu(n)?Bt({},n):n:null}function ns(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Ad(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Wu(c),ref:e&&e.ref?t&&r?Ge(r)?r.concat(Er(e)):[r,Er(e)]:Er(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==pn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ns(n.ssContent),ssFallback:n.ssFallback&&ns(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&tl(u,l.clone(u)),u}function yr(n=" ",e=0){return En(Kr,null,n,e)}function bd(n,e){const t=En(Mr,null,n);return t.staticCount=e,t}function ms(n="",e=!1){return e?(Dn(),Ed(oi,null,n)):En(oi,null,n)}function mn(n){return n==null||typeof n=="boolean"?En(oi):Ge(n)?En(pn,null,n.slice()):Gu(n)?Jn(n):En(Kr,null,String(n))}function Jn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ns(n)}function rl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ge(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),rl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Pu(e)?e._ctx=_n:s===3&&_n&&(_n.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:_n},t=32):(e=String(e),i&64?(t=16,e=[yr(e)]):t=8);n.children=e,n.shapeFlag|=t}function Ad(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=en([e.class,i.class]));else if(s==="style")e.style=je([e.style,i.style]);else if(Hr(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ge(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function hn(n,e,t,i=null){Tn(n,e,7,[t,i])}const wd=wu();let Rd=0;function Cd(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||wd,r={uid:Rd++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Kf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lu(i,s),emitsOptions:Hu(i,s),emit:null,emitted:null,propsDefaults:ht,inheritAttrs:i.inheritAttrs,ctx:ht,data:ht,props:ht,attrs:ht,slots:ht,refs:ht,setupState:ht,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=pd.bind(null,r),n.ce&&n.ce(r),r}let Ot=null;const Pd=()=>Ot||_n;let Fr,Zo;{const n=Gr(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Fr=e("__VUE_INSTANCE_SETTERS__",t=>Ot=t),Zo=e("__VUE_SSR_SETTERS__",t=>Ns=t)}const ks=n=>{const e=Ot;return Fr(n),n.scope.on(),()=>{n.scope.off(),Fr(e)}},Bl=()=>{Ot&&Ot.scope.off(),Fr(null)};function Xu(n){return n.vnode.shapeFlag&4}let Ns=!1;function Dd(n,e=!1,t=!1){e&&Zo(e);const{props:i,children:s}=n.vnode,r=Xu(n);ed(n,i,r,e),sd(n,s,t||e);const o=r?Ld(n,e):void 0;return e&&Zo(!1),o}function Ld(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Xh);const{setup:i}=t;if(i){Bn();const s=n.setupContext=i.length>1?Ud(n):null,r=ks(n),o=Vs(i,n,0,[n.props,s]),a=jc(o);if(zn(),r(),(a||n.sp)&&!Rs(n)&&Mu(n),a){if(o.then(Bl,Bl),e)return o.then(l=>{zl(n,l)}).catch(l=>{Xr(l,n,0)});n.asyncDep=o}else zl(n,o)}else qu(n)}function zl(n,e,t){qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:St(e)&&(n.setupState=mu(e)),qu(n)}function qu(n,e,t){const i=n.type;n.render||(n.render=i.render||Mn);{const s=ks(n);Bn();try{qh(n)}finally{zn(),s()}}}const Id={get(n,e){return Dt(n,"get",""),n[e]}};function Ud(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Id),slots:n.slots,emit:n.emit,expose:e}}function ol(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(mu(mh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Cs)return Cs[t](n)},has(e,t){return t in e||t in Cs}})):n.proxy}function Nd(n){return qe(n)&&"__vccOpts"in n}const Ze=(n,e)=>Mh(n,e,Ns),Fd="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jo;const Hl=typeof window<"u"&&window.trustedTypes;if(Hl)try{Jo=Hl.createPolicy("vue",{createHTML:n=>n})}catch{}const Yu=Jo?n=>Jo.createHTML(n):n=>n,Od="http://www.w3.org/2000/svg",Bd="http://www.w3.org/1998/Math/MathML",In=typeof document<"u"?document:null,Vl=In&&In.createElement("template"),zd={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?In.createElementNS(Od,n):e==="mathml"?In.createElementNS(Bd,n):t?In.createElement(n,{is:t}):In.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>In.createTextNode(n),createComment:n=>In.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>In.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Vl.innerHTML=Yu(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Vl.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Hd=Symbol("_vtc");function Vd(n,e,t){const i=n[Hd];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const kl=Symbol("_vod"),kd=Symbol("_vsh"),Gd=Symbol(""),Wd=/(?:^|;)\s*display\s*:/;function Xd(n,e,t){const i=n.style,s=yt(t);let r=!1;if(t&&!s){if(e)if(yt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Tr(i,a,"")}else for(const o in e)t[o]==null&&Tr(i,o,"");for(const o in t)o==="display"&&(r=!0),Tr(i,o,t[o])}else if(s){if(e!==t){const o=i[Gd];o&&(t+=";"+o),i.cssText=t,r=Wd.test(t)}}else e&&n.removeAttribute("style");kl in n&&(n[kl]=r?i.display:"",n[kd]&&(i.display="none"))}const Gl=/\s*!important$/;function Tr(n,e,t){if(Ge(t))t.forEach(i=>Tr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=qd(n,e);Gl.test(t)?n.setProperty(Pi(i),t.replace(Gl,""),"important"):n[i]=t}}const Wl=["Webkit","Moz","ms"],co={};function qd(n,e){const t=co[e];if(t)return t;let i=si(e);if(i!=="filter"&&i in n)return co[e]=i;i=Zc(i);for(let s=0;s<Wl.length;s++){const r=Wl[s]+i;if(r in n)return co[e]=r}return e}const Xl="http://www.w3.org/1999/xlink";function ql(n,e,t,i,s,r=Yf(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Xl,e.slice(6,e.length)):n.setAttributeNS(Xl,e,t):t==null||r&&!Qc(t)?n.removeAttribute(e):n.setAttribute(e,r?"":ls(t)?String(t):t)}function Yl(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Yu(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Qc(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Yd(n,e,t,i){n.addEventListener(e,t,i)}function Kd(n,e,t,i){n.removeEventListener(e,t,i)}const Kl=Symbol("_vei");function $d(n,e,t,i,s=null){const r=n[Kl]||(n[Kl]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=jd(e);if(i){const c=r[e]=Qd(i,s);Yd(n,a,c,l)}else o&&(Kd(n,a,o,l),r[e]=void 0)}}const $l=/(?:Once|Passive|Capture)$/;function jd(n){let e;if($l.test(n)){e={};let i;for(;i=n.match($l);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Pi(n.slice(2)),e]}let uo=0;const Zd=Promise.resolve(),Jd=()=>uo||(Zd.then(()=>uo=0),uo=Date.now());function Qd(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Tn(ep(i,t.value),e,5,[i])};return t.value=n,t.attached=Jd(),t}function ep(n,e){if(Ge(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const jl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,tp=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Vd(n,i,o):e==="style"?Xd(n,t,i):Hr(e)?Ga(e)||$d(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):np(n,e,i,o))?(Yl(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ql(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!yt(i))?Yl(n,si(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),ql(n,e,i,o))};function np(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&jl(e)&&qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return jl(e)&&yt(t)?!1:e in n}const ip=Bt({patchProp:tp},zd);let Zl;function sp(){return Zl||(Zl=od(ip))}const rp=(...n)=>{const e=sp().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=ap(i);if(!s)return;const r=e._component;!qe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,op(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function op(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function ap(n){return yt(n)?document.querySelector(n):n}var lp="1.3.11";function Ku(n,e,t){return Math.max(n,Math.min(e,t))}function cp(n,e,t){return(1-t)*n+t*e}function up(n,e,t,i){return cp(n,e,1-Math.exp(-t*i))}function fp(n,e){return(n%e+e)%e}var hp=class{constructor(){Ue(this,"isRunning",!1);Ue(this,"value",0);Ue(this,"from",0);Ue(this,"to",0);Ue(this,"currentTime",0);Ue(this,"lerp");Ue(this,"duration");Ue(this,"easing");Ue(this,"onUpdate")}advance(n){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;const i=Ku(0,this.currentTime/this.duration,1);e=i>=1;const s=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*s}else this.lerp?(this.value=up(this.value,this.to,this.lerp*60,n),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:i,easing:s,onStart:r,onUpdate:o}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=i,this.easing=s,this.currentTime=0,this.isRunning=!0,r==null||r(),this.onUpdate=o}};function dp(n,e){let t;return function(...i){let s=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(s,i)},e)}}var pp=class{constructor(n,e,{autoResize:t=!0,debounce:i=250}={}){Ue(this,"width",0);Ue(this,"height",0);Ue(this,"scrollHeight",0);Ue(this,"scrollWidth",0);Ue(this,"debouncedResize");Ue(this,"wrapperResizeObserver");Ue(this,"contentResizeObserver");Ue(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ue(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ue(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=e,t&&(this.debouncedResize=dp(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,e;(n=this.wrapperResizeObserver)==null||n.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},$u=class{constructor(){Ue(this,"events",{})}emit(n,...e){var i;let t=this.events[n]||[];for(let s=0,r=t.length;s<r;s++)(i=t[s])==null||i.call(t,...e)}on(n,e){var t;return(t=this.events[n])!=null&&t.push(e)||(this.events[n]=[e]),()=>{var i;this.events[n]=(i=this.events[n])==null?void 0:i.filter(s=>e!==s)}}off(n,e){var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}destroy(){this.events={}}},Jl=100/6,Wn={passive:!1},mp=class{constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){Ue(this,"touchStart",{x:0,y:0});Ue(this,"lastDelta",{x:0,y:0});Ue(this,"window",{width:0,height:0});Ue(this,"emitter",new $u);Ue(this,"onTouchStart",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});Ue(this,"onTouchMove",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,i=-(e-this.touchStart.x)*this.options.touchMultiplier,s=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:s},this.emitter.emit("scroll",{deltaX:i,deltaY:s,event:n})});Ue(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});Ue(this,"onWheel",n=>{let{deltaX:e,deltaY:t,deltaMode:i}=n;const s=i===1?Jl:i===2?this.window.width:1,r=i===1?Jl:i===2?this.window.height:1;e*=s,t*=r,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})});Ue(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Wn),this.element.addEventListener("touchstart",this.onTouchStart,Wn),this.element.addEventListener("touchmove",this.onTouchMove,Wn),this.element.addEventListener("touchend",this.onTouchEnd,Wn)}on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Wn),this.element.removeEventListener("touchstart",this.onTouchStart,Wn),this.element.removeEventListener("touchmove",this.onTouchMove,Wn),this.element.removeEventListener("touchend",this.onTouchEnd,Wn)}},Ql=n=>Math.min(1,1.001-Math.pow(2,-10*n)),gp=class{constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:i=!0,syncTouch:s=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:d=f==="horizontal"?"both":"vertical",touchMultiplier:p=1,wheelMultiplier:v=1,autoResize:M=!0,prevent:m,virtualScroll:h,overscroll:R=!0,autoRaf:A=!1,anchors:E=!1,autoToggle:C=!1,allowNestedScroll:D=!1,__experimental__naiveDimensions:P=!1}={}){Ue(this,"_isScrolling",!1);Ue(this,"_isStopped",!1);Ue(this,"_isLocked",!1);Ue(this,"_preventNextNativeScrollEvent",!1);Ue(this,"_resetVelocityTimeout",null);Ue(this,"__rafID",null);Ue(this,"isTouching");Ue(this,"time",0);Ue(this,"userData",{});Ue(this,"lastVelocity",0);Ue(this,"velocity",0);Ue(this,"direction",0);Ue(this,"options");Ue(this,"targetScroll");Ue(this,"animatedScroll");Ue(this,"animate",new hp);Ue(this,"emitter",new $u);Ue(this,"dimensions");Ue(this,"virtualScroll");Ue(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});Ue(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ue(this,"onTransitionEnd",n=>{if(n.propertyName.includes("overflow")){const e=this.isHorizontal?"overflow-x":"overflow-y",t=getComputedStyle(this.rootElement)[e];["hidden","clip"].includes(t)?this.internalStop():this.internalStart()}});Ue(this,"onClick",n=>{const t=n.composedPath().find(i=>{var s,r,o;return i instanceof HTMLAnchorElement&&(((s=i.getAttribute("href"))==null?void 0:s.startsWith("#"))||((r=i.getAttribute("href"))==null?void 0:r.startsWith("/#"))||((o=i.getAttribute("href"))==null?void 0:o.startsWith("./#")))});if(t){const i=t.getAttribute("href");if(i){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0;let r=`#${i.split("#")[1]}`;["#","/#","./#","#top","/#top","./#top"].includes(i)&&(r=0),this.scrollTo(r,s)}}});Ue(this,"onPointerDown",n=>{n.button===1&&this.reset()});Ue(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:e,deltaY:t,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const s=i.type.includes("touch"),r=i.type.includes("wheel");this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&s&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=i.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(m=>{var h,R,A;return m instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(m))||((h=m.hasAttribute)==null?void 0:h.call(m,"data-lenis-prevent"))||s&&((R=m.hasAttribute)==null?void 0:R.call(m,"data-lenis-prevent-touch"))||r&&((A=m.hasAttribute)==null?void 0:A.call(m,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&s||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const p=s&&this.options.syncTouch,M=s&&i.type==="touchend";M&&(d=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+d,{programmatic:!1,...p?{lerp:M?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ue(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ue(this,"raf",n=>{const e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=lp,(!n||n===document.documentElement)&&(n=window),typeof a=="number"&&typeof l!="function"?l=Ql:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:i,syncTouch:s,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:f,touchMultiplier:p,wheelMultiplier:v,autoResize:M,prevent:m,virtualScroll:h,overscroll:R,autoRaf:A,anchors:E,autoToggle:C,allowNestedScroll:D,__experimental__naiveDimensions:P},this.dimensions=new pp(n,e,{autoResize:M}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new mp(t,{touchMultiplier:p,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(n,{offset:e=0,immediate:t=!1,lock:i=!1,duration:s=this.options.duration,easing:r=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:u=!0,userData:f}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof n=="string"&&["top","left","start"].includes(n))n=0;else if(typeof n=="string"&&["bottom","right","end"].includes(n))n=this.limit;else{let d;if(typeof n=="string"?d=document.querySelector(n):n instanceof HTMLElement&&(n!=null&&n.nodeType)&&(d=n),d){if(this.options.wrapper!==window){const v=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?v.left:v.top}const p=d.getBoundingClientRect();n=(this.isHorizontal?p.left:p.top)+this.animatedScroll}}if(typeof n=="number"){if(n+=e,n=Math.round(n),this.options.infinite){if(u){this.targetScroll=this.animatedScroll=this.scroll;const d=n-this.animatedScroll;d>this.limit/2?n=n-this.limit:d<-this.limit/2&&(n=n+this.limit)}}else n=Ku(0,n,this.limit);if(n===this.targetScroll){a==null||a(this),l==null||l(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=n,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}u||(this.targetScroll=n),typeof s=="number"&&typeof r!="function"?r=Ql:typeof r=="function"&&typeof s!="number"&&(s=1),this.animate.fromTo(this.animatedScroll,n,{duration:s,easing:r,lerp:o,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",a==null||a(this)},onUpdate:(d,p)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),u&&(this.targetScroll=d),p||this.emit(),p&&(this.reset(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(n,{deltaX:e,deltaY:t}){const i=Date.now(),s=n._lenis??(n._lenis={});let r,o,a,l,c,u,f,d;const p=this.options.gestureOrientation;if(i-(s.time??0)>2e3){s.time=Date.now();const C=window.getComputedStyle(n);s.computedStyle=C;const D=C.overflowX,P=C.overflowY;if(r=["auto","overlay","scroll"].includes(D),o=["auto","overlay","scroll"].includes(P),s.hasOverflowX=r,s.hasOverflowY=o,!r&&!o||p==="vertical"&&!o||p==="horizontal"&&!r)return!1;c=n.scrollWidth,u=n.scrollHeight,f=n.clientWidth,d=n.clientHeight,a=c>f,l=u>d,s.isScrollableX=a,s.isScrollableY=l,s.scrollWidth=c,s.scrollHeight=u,s.clientWidth=f,s.clientHeight=d}else a=s.isScrollableX,l=s.isScrollableY,r=s.hasOverflowX,o=s.hasOverflowY,c=s.scrollWidth,u=s.scrollHeight,f=s.clientWidth,d=s.clientHeight;if(!r&&!o||!a&&!l||p==="vertical"&&(!o||!l)||p==="horizontal"&&(!r||!a))return!1;let v;if(p==="horizontal")v="x";else if(p==="vertical")v="y";else{const C=e!==0,D=t!==0;C&&r&&a&&(v="x"),D&&o&&l&&(v="y")}if(!v)return!1;let M,m,h,R,A;if(v==="x")M=n.scrollLeft,m=c-f,h=e,R=r,A=a;else if(v==="y")M=n.scrollTop,m=u-d,h=t,R=o,A=l;else return!1;return(h>0?M<m:M>0)&&R&&A}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?fp(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const al="180",_p=0,ec=1,vp=2,ju=1,xp=2,Ln=3,ai=0,kt=1,Nn=2,ni=0,es=1,tc=2,nc=3,ic=4,Sp=5,Ei=100,Mp=101,Ep=102,yp=103,Tp=104,bp=200,Ap=201,wp=202,Rp=203,Qo=204,ea=205,Cp=206,Pp=207,Dp=208,Lp=209,Ip=210,Up=211,Np=212,Fp=213,Op=214,ta=0,na=1,ia=2,is=3,sa=4,ra=5,oa=6,aa=7,Zu=0,Bp=1,zp=2,ii=0,Hp=1,Vp=2,kp=3,Gp=4,Wp=5,Xp=6,qp=7,Ju=300,ss=301,rs=302,la=303,ca=304,$r=306,ua=1e3,Ti=1001,fa=1002,fn=1003,Yp=1004,Js=1005,vn=1006,fo=1007,bi=1008,Hn=1009,Qu=1010,ef=1011,Fs=1012,ll=1013,Ri=1014,Fn=1015,Gs=1016,cl=1017,ul=1018,Os=1020,tf=35902,nf=35899,sf=1021,rf=1022,cn=1023,Bs=1026,zs=1027,of=1028,fl=1029,af=1030,hl=1031,dl=1033,br=33776,Ar=33777,wr=33778,Rr=33779,ha=35840,da=35841,pa=35842,ma=35843,ga=36196,_a=37492,va=37496,xa=37808,Sa=37809,Ma=37810,Ea=37811,ya=37812,Ta=37813,ba=37814,Aa=37815,wa=37816,Ra=37817,Ca=37818,Pa=37819,Da=37820,La=37821,Ia=36492,Ua=36494,Na=36495,Fa=36283,Oa=36284,Ba=36285,za=36286,Kp=3200,$p=3201,jp=0,Zp=1,ei="",tn="srgb",os="srgb-linear",Or="linear",at="srgb",Ui=7680,sc=519,Jp=512,Qp=513,em=514,lf=515,tm=516,nm=517,im=518,sm=519,rc=35044,oc="300 es",xn=2e3,Br=2001;class cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ho=Math.PI/180,Ha=180/Math.PI;function Ws(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function rm(n,e){return(n%e+e)%e}function po(n,e,t){return(1-t)*n+t*e}function gs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const d=r[o+0],p=r[o+1],v=r[o+2],M=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=v,e[t+3]=M;return}if(f!==M||l!==d||c!==p||u!==v){let m=1-a;const h=l*d+c*p+u*v+f*M,R=h>=0?1:-1,A=1-h*h;if(A>Number.EPSILON){const C=Math.sqrt(A),D=Math.atan2(C,h*R);m=Math.sin(m*D)/C,a=Math.sin(a*D)/C}const E=a*R;if(l=l*m+d*E,c=c*m+p*E,u=u*m+v*E,f=f*m+M*E,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],p=r[o+2],v=r[o+3];return e[t]=a*v+u*f+l*p-c*d,e[t+1]=l*v+u*d+c*f-a*p,e[t+2]=c*v+u*p+a*d-l*f,e[t+3]=u*v-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),p=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f-d*p*v;break;case"YXZ":this._x=d*u*f+c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f+d*p*v;break;case"ZXY":this._x=d*u*f-c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f-d*p*v;break;case"ZYX":this._x=d*u*f-c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f+d*p*v;break;case"YZX":this._x=d*u*f+c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f-d*p*v;break;case"XZY":this._x=d*u*f-c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ac.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mo.copy(this).projectOnVector(e),this.sub(mo)}reflect(e){return this.sub(mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mo=new Y,ac=new Xs;class ke{constructor(e,t,i,s,r,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],v=i[8],M=s[0],m=s[3],h=s[6],R=s[1],A=s[4],E=s[7],C=s[2],D=s[5],P=s[8];return r[0]=o*M+a*R+l*C,r[3]=o*m+a*A+l*D,r[6]=o*h+a*E+l*P,r[1]=c*M+u*R+f*C,r[4]=c*m+u*A+f*D,r[7]=c*h+u*E+f*P,r[2]=d*M+p*R+v*C,r[5]=d*m+p*A+v*D,r[8]=d*h+p*E+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,p=c*r-o*l,v=t*f+i*d+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=f*M,e[1]=(s*c-u*i)*M,e[2]=(a*i-s*o)*M,e[3]=d*M,e[4]=(u*t-s*l)*M,e[5]=(s*r-a*t)*M,e[6]=p*M,e[7]=(i*l-c*t)*M,e[8]=(o*t-i*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(go.makeScale(e,t)),this}rotate(e){return this.premultiply(go.makeRotation(-e)),this}translate(e,t){return this.premultiply(go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const go=new ke;function cf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function om(){const n=zr("canvas");return n.style.display="block",n}const lc={};function Hs(n){n in lc||(lc[n]=!0,console.warn(n))}function am(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const cc=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uc=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lm(){const n={enabled:!0,workingColorSpace:os,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===at&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(s.r=ts(s.r),s.g=ts(s.g),s.b=ts(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?Or:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[os]:{primaries:e,whitePoint:i,transfer:Or,toXYZ:cc,fromXYZ:uc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:e,whitePoint:i,transfer:at,toXYZ:cc,fromXYZ:uc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),n}const tt=lm();function On(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ts(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ni;class cm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ni===void 0&&(Ni=zr("canvas")),Ni.width=e.width,Ni.height=e.height;const s=Ni.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ni}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=On(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(On(t[i]/255)*255):t[i]=On(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let um=0;class pl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=Ws(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_o(s[o].image)):r.push(_o(s[o]))}else r=_o(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function _o(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?cm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fm=0;const vo=new Y;class Gt extends cs{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=Ti,s=Ti,r=vn,o=bi,a=cn,l=Hn,c=Gt.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Ws(),this.name="",this.source=new pl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vo).x}get height(){return this.source.getSize(vo).y}get depth(){return this.source.getSize(vo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ju)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ua:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ua:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=Ju;Gt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,s=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],v=l[9],M=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-M)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+M)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,E=(p+1)/2,C=(h+1)/2,D=(u+d)/4,P=(f+M)/4,O=(v+m)/4;return A>E&&A>C?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=D/i,r=P/i):E>C?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=D/s,r=O/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=P/r,s=O/r),this.set(i,s,r,t),this}let R=Math.sqrt((m-v)*(m-v)+(f-M)*(f-M)+(d-u)*(d-u));return Math.abs(R)<.001&&(R=1),this.x=(m-v)/R,this.y=(f-M)/R,this.z=(d-u)/R,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hm extends cs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Gt(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new pl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends hm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class uf extends Gt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dm extends Gt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qs{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qs.copy(i.boundingBox)),Qs.applyMatrix4(e.matrixWorld),this.union(Qs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),er.subVectors(this.max,_s),Fi.subVectors(e.a,_s),Oi.subVectors(e.b,_s),Bi.subVectors(e.c,_s),Xn.subVectors(Oi,Fi),qn.subVectors(Bi,Oi),di.subVectors(Fi,Bi);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-di.z,di.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,di.z,0,-di.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-di.y,di.x,0];return!xo(t,Fi,Oi,Bi,er)||(t=[1,0,0,0,1,0,0,0,1],!xo(t,Fi,Oi,Bi,er))?!1:(tr.crossVectors(Xn,qn),t=[tr.x,tr.y,tr.z],xo(t,Fi,Oi,Bi,er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const An=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],rn=new Y,Qs=new qs,Fi=new Y,Oi=new Y,Bi=new Y,Xn=new Y,qn=new Y,di=new Y,_s=new Y,er=new Y,tr=new Y,pi=new Y;function xo(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){pi.fromArray(n,r);const a=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),l=e.dot(pi),c=t.dot(pi),u=i.dot(pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const pm=new qs,vs=new Y,So=new Y;class ml{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):pm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vs.subVectors(e,this.center);const t=vs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(vs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(So.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vs.copy(e.center).add(So)),this.expandByPoint(vs.copy(e.center).sub(So))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const wn=new Y,Mo=new Y,nr=new Y,Yn=new Y,Eo=new Y,ir=new Y,yo=new Y;class mm{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Mo.copy(e).add(t).multiplyScalar(.5),nr.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(Mo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(nr),a=Yn.dot(this.direction),l=-Yn.dot(nr),c=Yn.lengthSq(),u=Math.abs(1-o*o);let f,d,p,v;if(u>0)if(f=o*l-a,d=o*a-l,v=r*u,f>=0)if(d>=-v)if(d<=v){const M=1/u;f*=M,d*=M,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Mo).addScaledVector(nr,d),p}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const i=wn.dot(this.direction),s=wn.dot(wn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,i,s,r){Eo.subVectors(t,e),ir.subVectors(i,e),yo.crossVectors(Eo,ir);let o=this.direction.dot(yo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,e);const l=a*this.direction.dot(ir.crossVectors(Yn,ir));if(l<0)return null;const c=a*this.direction.dot(Eo.cross(Yn));if(c<0||l+c>o)return null;const u=-a*Yn.dot(yo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,t,i,s,r,o,a,l,c,u,f,d,p,v,M,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,d,p,v,M,m)}set(e,t,i,s,r,o,a,l,c,u,f,d,p,v,M,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=v,h[11]=M,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/zi.setFromMatrixColumn(e,0).length(),r=1/zi.setFromMatrixColumn(e,1).length(),o=1/zi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*f,v=a*u,M=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=d-M*c,t[9]=-a*l,t[2]=M-d*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,v=c*u,M=c*f;t[0]=d+M*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-v,t[6]=M+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,v=c*u,M=c*f;t[0]=d-M*a,t[4]=-o*f,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*u,t[9]=M-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,v=a*u,M=a*f;t[0]=l*u,t[4]=v*c-p,t[8]=d*c+M,t[1]=l*f,t[5]=M*c+d,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,v=a*l,M=a*c;t[0]=l*u,t[4]=M-d*f,t[8]=v*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+v,t[10]=d-M*f}else if(e.order==="XZY"){const d=o*l,p=o*c,v=a*l,M=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+M,t[5]=o*u,t[9]=p*f-v,t[2]=v*f-p,t[6]=a*u,t[10]=M*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gm,e,_m)}lookAt(e,t,i){const s=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Kn.crossVectors(i,qt),Kn.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Kn.crossVectors(i,qt)),Kn.normalize(),sr.crossVectors(qt,Kn),s[0]=Kn.x,s[4]=sr.x,s[8]=qt.x,s[1]=Kn.y,s[5]=sr.y,s[9]=qt.y,s[2]=Kn.z,s[6]=sr.z,s[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],v=i[2],M=i[6],m=i[10],h=i[14],R=i[3],A=i[7],E=i[11],C=i[15],D=s[0],P=s[4],O=s[8],T=s[12],y=s[1],I=s[5],W=s[9],Z=s[13],ae=s[2],se=s[6],Q=s[10],ne=s[14],z=s[3],me=s[7],Ee=s[11],Le=s[15];return r[0]=o*D+a*y+l*ae+c*z,r[4]=o*P+a*I+l*se+c*me,r[8]=o*O+a*W+l*Q+c*Ee,r[12]=o*T+a*Z+l*ne+c*Le,r[1]=u*D+f*y+d*ae+p*z,r[5]=u*P+f*I+d*se+p*me,r[9]=u*O+f*W+d*Q+p*Ee,r[13]=u*T+f*Z+d*ne+p*Le,r[2]=v*D+M*y+m*ae+h*z,r[6]=v*P+M*I+m*se+h*me,r[10]=v*O+M*W+m*Q+h*Ee,r[14]=v*T+M*Z+m*ne+h*Le,r[3]=R*D+A*y+E*ae+C*z,r[7]=R*P+A*I+E*se+C*me,r[11]=R*O+A*W+E*Q+C*Ee,r[15]=R*T+A*Z+E*ne+C*Le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],v=e[3],M=e[7],m=e[11],h=e[15];return v*(+r*l*f-s*c*f-r*a*d+i*c*d+s*a*p-i*l*p)+M*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+m*(+t*c*f-t*a*p-r*o*f+i*o*p+r*a*u-i*c*u)+h*(-s*a*u-t*l*f+t*a*d+s*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],v=e[12],M=e[13],m=e[14],h=e[15],R=f*m*c-M*d*c+M*l*p-a*m*p-f*l*h+a*d*h,A=v*d*c-u*m*c-v*l*p+o*m*p+u*l*h-o*d*h,E=u*M*c-v*f*c+v*a*p-o*M*p-u*a*h+o*f*h,C=v*f*l-u*M*l-v*a*d+o*M*d+u*a*m-o*f*m,D=t*R+i*A+s*E+r*C;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/D;return e[0]=R*P,e[1]=(M*d*r-f*m*r-M*s*p+i*m*p+f*s*h-i*d*h)*P,e[2]=(a*m*r-M*l*r+M*s*c-i*m*c-a*s*h+i*l*h)*P,e[3]=(f*l*r-a*d*r-f*s*c+i*d*c+a*s*p-i*l*p)*P,e[4]=A*P,e[5]=(u*m*r-v*d*r+v*s*p-t*m*p-u*s*h+t*d*h)*P,e[6]=(v*l*r-o*m*r-v*s*c+t*m*c+o*s*h-t*l*h)*P,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*p+t*l*p)*P,e[8]=E*P,e[9]=(v*f*r-u*M*r-v*i*p+t*M*p+u*i*h-t*f*h)*P,e[10]=(o*M*r-v*a*r+v*i*c-t*M*c-o*i*h+t*a*h)*P,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*p-t*a*p)*P,e[12]=C*P,e[13]=(u*M*s-v*f*s+v*i*d-t*M*d-u*i*m+t*f*m)*P,e[14]=(v*a*s-o*M*s-v*i*l+t*M*l+o*i*m-t*a*m)*P,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*d+t*a*d)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,d=r*c,p=r*u,v=r*f,M=o*u,m=o*f,h=a*f,R=l*c,A=l*u,E=l*f,C=i.x,D=i.y,P=i.z;return s[0]=(1-(M+h))*C,s[1]=(p+E)*C,s[2]=(v-A)*C,s[3]=0,s[4]=(p-E)*D,s[5]=(1-(d+h))*D,s[6]=(m+R)*D,s[7]=0,s[8]=(v+A)*P,s[9]=(m-R)*P,s[10]=(1-(d+M))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=zi.set(s[0],s[1],s[2]).length();const o=zi.set(s[4],s[5],s[6]).length(),a=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],on.copy(this);const c=1/r,u=1/o,f=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,t.setFromRotationMatrix(on),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=xn,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(i-s),d=(t+e)/(t-e),p=(i+s)/(i-s);let v,M;if(l)v=r/(o-r),M=o*r/(o-r);else if(a===xn)v=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===Br)v=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=xn,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-s),d=-(t+e)/(t-e),p=-(i+s)/(i-s);let v,M;if(l)v=1/(o-r),M=o/(o-r);else if(a===xn)v=-2/(o-r),M=-(o+r)/(o-r);else if(a===Br)v=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const zi=new Y,on=new Et,gm=new Y(0,0,0),_m=new Y(1,1,1),Kn=new Y,sr=new Y,qt=new Y,fc=new Et,hc=new Xs;class Vn{constructor(e=0,t=0,i=0,s=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return fc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hc.setFromEuler(this),this.setFromQuaternion(hc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class ff{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vm=0;const dc=new Y,Hi=new Xs,Rn=new Et,rr=new Y,xs=new Y,xm=new Y,Sm=new Xs,pc=new Y(1,0,0),mc=new Y(0,1,0),gc=new Y(0,0,1),_c={type:"added"},Mm={type:"removed"},Vi={type:"childadded",child:null},To={type:"childremoved",child:null};class jt extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new Y,t=new Vn,i=new Xs,s=new Y(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new ke}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ff,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.premultiply(Hi),this}rotateX(e){return this.rotateOnAxis(pc,e)}rotateY(e){return this.rotateOnAxis(mc,e)}rotateZ(e){return this.rotateOnAxis(gc,e)}translateOnAxis(e,t){return dc.copy(e).applyQuaternion(this.quaternion),this.position.add(dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pc,e)}translateY(e){return this.translateOnAxis(mc,e)}translateZ(e){return this.translateOnAxis(gc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?rr.copy(e):rr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(xs,rr,this.up):Rn.lookAt(rr,xs,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(Rn),this.quaternion.premultiply(Hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_c),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mm),To.child=e,this.dispatchEvent(To),To.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_c),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,e,xm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Sm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}jt.DEFAULT_UP=new Y(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new Y,Cn=new Y,bo=new Y,Pn=new Y,ki=new Y,Gi=new Y,vc=new Y,Ao=new Y,wo=new Y,Ro=new Y,Co=new xt,Po=new xt,Do=new xt;class ln{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),an.subVectors(e,t),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){an.subVectors(s,t),Cn.subVectors(i,t),bo.subVectors(e,t);const o=an.dot(an),a=an.dot(Cn),l=an.dot(bo),c=Cn.dot(Cn),u=Cn.dot(bo),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,v=(o*u-a*l)*d;return r.set(1-p-v,v,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(o,Pn.y),l.addScaledVector(a,Pn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Co.setScalar(0),Po.setScalar(0),Do.setScalar(0),Co.fromBufferAttribute(e,t),Po.fromBufferAttribute(e,i),Do.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Co,r.x),o.addScaledVector(Po,r.y),o.addScaledVector(Do,r.z),o}static isFrontFacing(e,t,i,s){return an.subVectors(i,t),Cn.subVectors(e,t),an.cross(Cn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),an.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return ln.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ki.subVectors(s,i),Gi.subVectors(r,i),Ao.subVectors(e,i);const l=ki.dot(Ao),c=Gi.dot(Ao);if(l<=0&&c<=0)return t.copy(i);wo.subVectors(e,s);const u=ki.dot(wo),f=Gi.dot(wo);if(u>=0&&f<=u)return t.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ki,o);Ro.subVectors(e,r);const p=ki.dot(Ro),v=Gi.dot(Ro);if(v>=0&&p<=v)return t.copy(r);const M=p*c-l*v;if(M<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(Gi,a);const m=u*v-p*f;if(m<=0&&f-u>=0&&p-v>=0)return vc.subVectors(r,s),a=(f-u)/(f-u+(p-v)),t.copy(s).addScaledVector(vc,a);const h=1/(m+M+d);return o=M*h,a=d*h,t.copy(i).addScaledVector(ki,o).addScaledVector(Gi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},or={h:0,s:0,l:0};function Lo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class lt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=tt.workingColorSpace){if(e=rm(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Lo(o,r,e+1/3),this.g=Lo(o,r,e),this.b=Lo(o,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=tn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){const i=hf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return tt.workingToColorSpace(Pt.copy(this),e),Math.round(Je(Pt.r*255,0,255))*65536+Math.round(Je(Pt.g*255,0,255))*256+Math.round(Je(Pt.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Pt.copy(this),t);const i=Pt.r,s=Pt.g,r=Pt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=tn){tt.workingToColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,s=Pt.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(or);const i=po($n.h,or.h,t),s=po($n.s,or.s,t),r=po($n.l,or.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new lt;lt.NAMES=hf;let Em=0;class jr extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Ws(),this.name="",this.type="Material",this.blending=es,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=ea,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(i.blending=this.blending),this.side!==ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qo&&(i.blendSrc=this.blendSrc),this.blendDst!==ea&&(i.blendDst=this.blendDst),this.blendEquation!==Ei&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gl extends jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new Y,ar=new ct;let ym=0;class yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ym++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=rc,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix3(e),this.setXY(t,ar.x,ar.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),s=Ht(s,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rc&&(e.usage=this.usage),e}}class df extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class pf extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class wi extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Tm=0;const Qt=new Et,Io=new jt,Wi=new Y,Yt=new qs,Ss=new qs,wt=new Y;class Di extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=Ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cf(e)?pf:df)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,i){return Qt.makeTranslation(e,t,i),this.applyMatrix4(Qt),this}scale(e,t,i){return Qt.makeScale(e,t,i),this.applyMatrix4(Qt),this}lookAt(e){return Io.lookAt(e),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new wi(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ml);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ss.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(Yt.min,Ss.min),Yt.expandByPoint(wt),wt.addVectors(Yt.max,Ss.max),Yt.expandByPoint(wt)):(Yt.expandByPoint(Ss.min),Yt.expandByPoint(Ss.max))}Yt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(wt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)wt.fromBufferAttribute(a,c),l&&(Wi.fromBufferAttribute(e,c),wt.add(Wi)),s=Math.max(s,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new Y,l[O]=new Y;const c=new Y,u=new Y,f=new Y,d=new ct,p=new ct,v=new ct,M=new Y,m=new Y;function h(O,T,y){c.fromBufferAttribute(i,O),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,y),d.fromBufferAttribute(r,O),p.fromBufferAttribute(r,T),v.fromBufferAttribute(r,y),u.sub(c),f.sub(c),p.sub(d),v.sub(d);const I=1/(p.x*v.y-v.x*p.y);isFinite(I)&&(M.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(I),a[O].add(M),a[T].add(M),a[y].add(M),l[O].add(m),l[T].add(m),l[y].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let O=0,T=R.length;O<T;++O){const y=R[O],I=y.start,W=y.count;for(let Z=I,ae=I+W;Z<ae;Z+=3)h(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const A=new Y,E=new Y,C=new Y,D=new Y;function P(O){C.fromBufferAttribute(s,O),D.copy(C);const T=a[O];A.copy(T),A.sub(C.multiplyScalar(C.dot(T))).normalize(),E.crossVectors(D,T);const I=E.dot(l[O])<0?-1:1;o.setXYZW(O,A.x,A.y,A.z,I)}for(let O=0,T=R.length;O<T;++O){const y=R[O],I=y.start,W=y.count;for(let Z=I,ae=I+W;Z<ae;Z+=3)P(e.getX(Z+0)),P(e.getX(Z+1)),P(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new Y,r=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),M=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,v=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*u;for(let h=0;h<u;h++)d[v++]=c[p++]}return new yn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Di,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xc=new Et,mi=new mm,lr=new ml,Sc=new Y,cr=new Y,ur=new Y,fr=new Y,Uo=new Y,hr=new Y,Mc=new Y,dr=new Y;class Sn extends jt{constructor(e=new Di,t=new gl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){hr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Uo.fromBufferAttribute(f,e),o?hr.addScaledVector(Uo,u):hr.addScaledVector(Uo.sub(t),u))}t.add(hr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lr.copy(i.boundingSphere),lr.applyMatrix4(r),mi.copy(e.ray).recast(e.near),!(lr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(lr,Sc)===null||mi.origin.distanceToSquared(Sc)>(e.far-e.near)**2))&&(xc.copy(r).invert(),mi.copy(e.ray).applyMatrix4(xc),!(i.boundingBox!==null&&mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,M=d.length;v<M;v++){const m=d[v],h=o[m.materialIndex],R=Math.max(m.start,p.start),A=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=R,C=A;E<C;E+=3){const D=a.getX(E),P=a.getX(E+1),O=a.getX(E+2);s=pr(this,h,e,i,c,u,f,D,P,O),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let m=v,h=M;m<h;m+=3){const R=a.getX(m),A=a.getX(m+1),E=a.getX(m+2);s=pr(this,o,e,i,c,u,f,R,A,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,M=d.length;v<M;v++){const m=d[v],h=o[m.materialIndex],R=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=R,C=A;E<C;E+=3){const D=E,P=E+1,O=E+2;s=pr(this,h,e,i,c,u,f,D,P,O),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=v,h=M;m<h;m+=3){const R=m,A=m+1,E=m+2;s=pr(this,o,e,i,c,u,f,R,A,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function bm(n,e,t,i,s,r,o,a){let l;if(e.side===kt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ai,a),l===null)return null;dr.copy(a),dr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(dr);return c<t.near||c>t.far?null:{distance:c,point:dr.clone(),object:n}}function pr(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,cr),n.getVertexPosition(l,ur),n.getVertexPosition(c,fr);const u=bm(n,e,t,i,cr,ur,fr,Mc);if(u){const f=new Y;ln.getBarycoord(Mc,cr,ur,fr,f),s&&(u.uv=ln.getInterpolatedAttribute(s,a,l,c,f,new ct)),r&&(u.uv1=ln.getInterpolatedAttribute(r,a,l,c,f,new ct)),o&&(u.normal=ln.getInterpolatedAttribute(o,a,l,c,f,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new Y,materialIndex:0};ln.getNormal(cr,ur,fr,d.normal),u.face=d,u.barycoord=f}return u}class us extends Di{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;v("z","y","x",-1,-1,i,t,e,o,r,0),v("z","y","x",1,-1,i,t,-e,o,r,1),v("x","z","y",1,1,e,i,t,s,o,2),v("x","z","y",1,-1,e,i,-t,s,o,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new wi(c,3)),this.setAttribute("normal",new wi(u,3)),this.setAttribute("uv",new wi(f,2));function v(M,m,h,R,A,E,C,D,P,O,T){const y=E/P,I=C/O,W=E/2,Z=C/2,ae=D/2,se=P+1,Q=O+1;let ne=0,z=0;const me=new Y;for(let Ee=0;Ee<Q;Ee++){const Le=Ee*I-Z;for(let Be=0;Be<se;Be++){const nt=Be*y-W;me[M]=nt*R,me[m]=Le*A,me[h]=ae,c.push(me.x,me.y,me.z),me[M]=0,me[m]=0,me[h]=D>0?1:-1,u.push(me.x,me.y,me.z),f.push(Be/P),f.push(1-Ee/O),ne+=1}}for(let Ee=0;Ee<O;Ee++)for(let Le=0;Le<P;Le++){const Be=d+Le+se*Ee,nt=d+Le+se*(Ee+1),rt=d+(Le+1)+se*(Ee+1),Qe=d+(Le+1)+se*Ee;l.push(Be,nt,Qe),l.push(nt,rt,Qe),z+=6}a.addGroup(p,z,T),p+=z,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function as(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Nt(n){const e={};for(let t=0;t<n.length;t++){const i=as(n[t]);for(const s in i)e[s]=i[s]}return e}function Am(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const wm={clone:as,merge:Nt};var Rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rm,this.fragmentShader=Cm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=as(e.uniforms),this.uniformsGroups=Am(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class gf extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new Y,Ec=new ct,yc=new ct;class nn extends gf{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ha*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jn.x,jn.y).multiplyScalar(-e/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(jn.x,jn.y).multiplyScalar(-e/jn.z)}getViewSize(e,t){return this.getViewBounds(e,Ec,yc),t.subVectors(yc,Ec)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ho*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xi=-90,qi=1;class Pm extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(Xi,qi,e,t);s.layers=this.layers,this.add(s);const r=new nn(Xi,qi,e,t);r.layers=this.layers,this.add(r);const o=new nn(Xi,qi,e,t);o.layers=this.layers,this.add(o);const a=new nn(Xi,qi,e,t);a.layers=this.layers,this.add(a);const l=new nn(Xi,qi,e,t);l.layers=this.layers,this.add(l);const c=new nn(Xi,qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===xn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Br)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class _f extends Gt{constructor(e=[],t=ss,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dm extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new _f(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new us(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:as(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:ni});r.uniforms.tEquirect.value=t;const o=new Sn(s,r),a=t.minFilter;return t.minFilter===bi&&(t.minFilter=vn),new Pm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class mr extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lm={type:"move"};class No{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,i),h=this._getHandJoint(c,M);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new mr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Im extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Fo=new Y,Um=new Y,Nm=new ke;class Si{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Fo.subVectors(i,t).cross(Um.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Fo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Nm.getNormalMatrix(e),s=this.coplanarPoint(Fo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new ml,Fm=new ct(.5,.5),gr=new Y;class vf{constructor(e=new Si,t=new Si,i=new Si,s=new Si,r=new Si,o=new Si){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],p=r[7],v=r[8],M=r[9],m=r[10],h=r[11],R=r[12],A=r[13],E=r[14],C=r[15];if(s[0].setComponents(c-o,p-u,h-v,C-R).normalize(),s[1].setComponents(c+o,p+u,h+v,C+R).normalize(),s[2].setComponents(c+a,p+f,h+M,C+A).normalize(),s[3].setComponents(c-a,p-f,h-M,C-A).normalize(),i)s[4].setComponents(l,d,m,E).normalize(),s[5].setComponents(c-l,p-d,h-m,C-E).normalize();else if(s[4].setComponents(c-l,p-d,h-m,C-E).normalize(),t===xn)s[5].setComponents(c+l,p+d,h+m,C+E).normalize();else if(t===Br)s[5].setComponents(l,d,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){gi.center.set(0,0,0);const t=Fm.distanceTo(e.center);return gi.radius=.7071067811865476+t,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(gr.x=s.normal.x>0?e.max.x:e.min.x,gr.y=s.normal.y>0?e.max.y:e.min.y,gr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xf extends Gt{constructor(e,t,i=Ri,s,r,o,a=fn,l=fn,c,u=Bs,f=1){if(u!==Bs&&u!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Sf extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Zr extends Di{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=t/l,p=[],v=[],M=[],m=[];for(let h=0;h<u;h++){const R=h*d-o;for(let A=0;A<c;A++){const E=A*f-r;v.push(E,-R,0),M.push(0,0,1),m.push(A/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let R=0;R<a;R++){const A=R+c*h,E=R+c*(h+1),C=R+1+c*(h+1),D=R+1+c*h;p.push(A,E,D),p.push(E,C,D)}this.setIndex(p),this.setAttribute("position",new wi(v,3)),this.setAttribute("normal",new wi(M,3)),this.setAttribute("uv",new wi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Om extends jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bm extends jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class zm extends gf{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Hm extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Tc(n,e,t,i){const s=Vm(i);switch(t){case sf:return n*e;case of:return n*e/s.components*s.byteLength;case fl:return n*e/s.components*s.byteLength;case af:return n*e*2/s.components*s.byteLength;case hl:return n*e*2/s.components*s.byteLength;case rf:return n*e*3/s.components*s.byteLength;case cn:return n*e*4/s.components*s.byteLength;case dl:return n*e*4/s.components*s.byteLength;case br:case Ar:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wr:case Rr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case da:case ma:return Math.max(n,16)*Math.max(e,8)/4;case ha:case pa:return Math.max(n,8)*Math.max(e,8)/2;case ga:case _a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ya:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ba:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case wa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Da:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case La:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ia:case Ua:case Na:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Fa:case Oa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ba:case za:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vm(n){switch(n){case Hn:case Qu:return{byteLength:1,components:1};case Fs:case ef:case Gs:return{byteLength:2,components:1};case cl:case ul:return{byteLength:2,components:4};case Ri:case ll:case Fn:return{byteLength:4,components:1};case tf:case nf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:al}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=al);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mf(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function km(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<f.length;p++){const v=f[d],M=f[p];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++d,f[d]=M)}f.length=d+1;for(let p=0,v=f.length;p<v;p++){const M=f[p];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Gm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wm=`#ifdef USE_ALPHAHASH
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
#endif`,Xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Km=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$m=`#ifdef USE_AOMAP
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
#endif`,jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Jm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ng=`#ifdef USE_IRIDESCENCE
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
#endif`,ig=`#ifdef USE_BUMPMAP
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
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hg=`#define PI 3.141592653589793
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
} // validated`,dg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pg=`vec3 transformedNormal = objectNormal;
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
#endif`,mg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mg=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pg=`#ifdef USE_GRADIENTMAP
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
}`,Dg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ug=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Ng=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Fg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hg=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Vg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,kg=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Gg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$g=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jg=`#if defined( USE_POINTS_UV )
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
#endif`,Qg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,r_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,a_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,l_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f_=`#ifdef USE_NORMALMAP
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
#endif`,h_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,__=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,v_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,b_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,A_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,w_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,R_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C_=`#ifdef USE_SKINNING
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
#endif`,P_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D_=`#ifdef USE_SKINNING
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
#endif`,L_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N_=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,F_=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,O_=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,B_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const k_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G_=`uniform sampler2D t2D;
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
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K_=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,$_=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,j_=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Z_=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,J_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ev=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tv=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nv=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,iv=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,sv=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,rv=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ov=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,av=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,lv=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,cv=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uv=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,fv=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,hv=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,dv=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,pv=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,mv=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,gv=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,_v=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,vv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,xv=`uniform vec3 color;
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
}`,Sv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Mv=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Xe={alphahash_fragment:Gm,alphahash_pars_fragment:Wm,alphamap_fragment:Xm,alphamap_pars_fragment:qm,alphatest_fragment:Ym,alphatest_pars_fragment:Km,aomap_fragment:$m,aomap_pars_fragment:jm,batching_pars_vertex:Zm,batching_vertex:Jm,begin_vertex:Qm,beginnormal_vertex:eg,bsdfs:tg,iridescence_fragment:ng,bumpmap_pars_fragment:ig,clipping_planes_fragment:sg,clipping_planes_pars_fragment:rg,clipping_planes_pars_vertex:og,clipping_planes_vertex:ag,color_fragment:lg,color_pars_fragment:cg,color_pars_vertex:ug,color_vertex:fg,common:hg,cube_uv_reflection_fragment:dg,defaultnormal_vertex:pg,displacementmap_pars_vertex:mg,displacementmap_vertex:gg,emissivemap_fragment:_g,emissivemap_pars_fragment:vg,colorspace_fragment:xg,colorspace_pars_fragment:Sg,envmap_fragment:Mg,envmap_common_pars_fragment:Eg,envmap_pars_fragment:yg,envmap_pars_vertex:Tg,envmap_physical_pars_fragment:Ng,envmap_vertex:bg,fog_vertex:Ag,fog_pars_vertex:wg,fog_fragment:Rg,fog_pars_fragment:Cg,gradientmap_pars_fragment:Pg,lightmap_pars_fragment:Dg,lights_lambert_fragment:Lg,lights_lambert_pars_fragment:Ig,lights_pars_begin:Ug,lights_toon_fragment:Fg,lights_toon_pars_fragment:Og,lights_phong_fragment:Bg,lights_phong_pars_fragment:zg,lights_physical_fragment:Hg,lights_physical_pars_fragment:Vg,lights_fragment_begin:kg,lights_fragment_maps:Gg,lights_fragment_end:Wg,logdepthbuf_fragment:Xg,logdepthbuf_pars_fragment:qg,logdepthbuf_pars_vertex:Yg,logdepthbuf_vertex:Kg,map_fragment:$g,map_pars_fragment:jg,map_particle_fragment:Zg,map_particle_pars_fragment:Jg,metalnessmap_fragment:Qg,metalnessmap_pars_fragment:e_,morphinstance_vertex:t_,morphcolor_vertex:n_,morphnormal_vertex:i_,morphtarget_pars_vertex:s_,morphtarget_vertex:r_,normal_fragment_begin:o_,normal_fragment_maps:a_,normal_pars_fragment:l_,normal_pars_vertex:c_,normal_vertex:u_,normalmap_pars_fragment:f_,clearcoat_normal_fragment_begin:h_,clearcoat_normal_fragment_maps:d_,clearcoat_pars_fragment:p_,iridescence_pars_fragment:m_,opaque_fragment:g_,packing:__,premultiplied_alpha_fragment:v_,project_vertex:x_,dithering_fragment:S_,dithering_pars_fragment:M_,roughnessmap_fragment:E_,roughnessmap_pars_fragment:y_,shadowmap_pars_fragment:T_,shadowmap_pars_vertex:b_,shadowmap_vertex:A_,shadowmask_pars_fragment:w_,skinbase_vertex:R_,skinning_pars_vertex:C_,skinning_vertex:P_,skinnormal_vertex:D_,specularmap_fragment:L_,specularmap_pars_fragment:I_,tonemapping_fragment:U_,tonemapping_pars_fragment:N_,transmission_fragment:F_,transmission_pars_fragment:O_,uv_pars_fragment:B_,uv_pars_vertex:z_,uv_vertex:H_,worldpos_vertex:V_,background_vert:k_,background_frag:G_,backgroundCube_vert:W_,backgroundCube_frag:X_,cube_vert:q_,cube_frag:Y_,depth_vert:K_,depth_frag:$_,distanceRGBA_vert:j_,distanceRGBA_frag:Z_,equirect_vert:J_,equirect_frag:Q_,linedashed_vert:ev,linedashed_frag:tv,meshbasic_vert:nv,meshbasic_frag:iv,meshlambert_vert:sv,meshlambert_frag:rv,meshmatcap_vert:ov,meshmatcap_frag:av,meshnormal_vert:lv,meshnormal_frag:cv,meshphong_vert:uv,meshphong_frag:fv,meshphysical_vert:hv,meshphysical_frag:dv,meshtoon_vert:pv,meshtoon_frag:mv,points_vert:gv,points_frag:_v,shadow_vert:vv,shadow_frag:xv,sprite_vert:Sv,sprite_frag:Mv},Se={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},gn={basic:{uniforms:Nt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Nt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new lt(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Nt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Nt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Nt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new lt(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Nt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Nt([Se.points,Se.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Nt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Nt([Se.common,Se.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Nt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Nt([Se.sprite,Se.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Nt([Se.common,Se.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Nt([Se.lights,Se.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};gn.physical={uniforms:Nt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const _r={r:0,b:0,g:0},_i=new Vn,Ev=new Et;function yv(n,e,t,i,s,r,o){const a=new lt(0);let l=r===!0?0:1,c,u,f=null,d=0,p=null;function v(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?t:e).get(E)),E}function M(A){let E=!1;const C=v(A);C===null?h(a,l):C&&C.isColor&&(h(C,1),E=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,E){const C=v(E);C&&(C.isCubeTexture||C.mapping===$r)?(u===void 0&&(u=new Sn(new us(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:as(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),_i.copy(E.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(_i)),u.material.toneMapped=tt.getTransfer(C.colorSpace)!==at,(f!==C||d!==C.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=C,d=C.version,p=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Sn(new Zr(2,2),new li({name:"BackgroundMaterial",uniforms:as(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=tt.getTransfer(C.colorSpace)!==at,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||d!==C.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=C,d=C.version,p=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function h(A,E){A.getRGB(_r,mf(n)),i.buffers.color.setClear(_r.r,_r.g,_r.b,E,o)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,E=1){a.set(A),l=E,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,h(a,l)},render:M,addToRenderList:m,dispose:R}}function Tv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(y,I,W,Z,ae){let se=!1;const Q=f(Z,W,I);r!==Q&&(r=Q,c(r.object)),se=p(y,Z,W,ae),se&&v(y,Z,W,ae),ae!==null&&e.update(ae,n.ELEMENT_ARRAY_BUFFER),(se||o)&&(o=!1,E(y,I,W,Z),ae!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,I,W){const Z=W.wireframe===!0;let ae=i[y.id];ae===void 0&&(ae={},i[y.id]=ae);let se=ae[I.id];se===void 0&&(se={},ae[I.id]=se);let Q=se[Z];return Q===void 0&&(Q=d(l()),se[Z]=Q),Q}function d(y){const I=[],W=[],Z=[];for(let ae=0;ae<t;ae++)I[ae]=0,W[ae]=0,Z[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:Z,object:y,attributes:{},index:null}}function p(y,I,W,Z){const ae=r.attributes,se=I.attributes;let Q=0;const ne=W.getAttributes();for(const z in ne)if(ne[z].location>=0){const Ee=ae[z];let Le=se[z];if(Le===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(Le=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(Le=y.instanceColor)),Ee===void 0||Ee.attribute!==Le||Le&&Ee.data!==Le.data)return!0;Q++}return r.attributesNum!==Q||r.index!==Z}function v(y,I,W,Z){const ae={},se=I.attributes;let Q=0;const ne=W.getAttributes();for(const z in ne)if(ne[z].location>=0){let Ee=se[z];Ee===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(Ee=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(Ee=y.instanceColor));const Le={};Le.attribute=Ee,Ee&&Ee.data&&(Le.data=Ee.data),ae[z]=Le,Q++}r.attributes=ae,r.attributesNum=Q,r.index=Z}function M(){const y=r.newAttributes;for(let I=0,W=y.length;I<W;I++)y[I]=0}function m(y){h(y,0)}function h(y,I){const W=r.newAttributes,Z=r.enabledAttributes,ae=r.attributeDivisors;W[y]=1,Z[y]===0&&(n.enableVertexAttribArray(y),Z[y]=1),ae[y]!==I&&(n.vertexAttribDivisor(y,I),ae[y]=I)}function R(){const y=r.newAttributes,I=r.enabledAttributes;for(let W=0,Z=I.length;W<Z;W++)I[W]!==y[W]&&(n.disableVertexAttribArray(W),I[W]=0)}function A(y,I,W,Z,ae,se,Q){Q===!0?n.vertexAttribIPointer(y,I,W,ae,se):n.vertexAttribPointer(y,I,W,Z,ae,se)}function E(y,I,W,Z){M();const ae=Z.attributes,se=W.getAttributes(),Q=I.defaultAttributeValues;for(const ne in se){const z=se[ne];if(z.location>=0){let me=ae[ne];if(me===void 0&&(ne==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),ne==="instanceColor"&&y.instanceColor&&(me=y.instanceColor)),me!==void 0){const Ee=me.normalized,Le=me.itemSize,Be=e.get(me);if(Be===void 0)continue;const nt=Be.buffer,rt=Be.type,Qe=Be.bytesPerElement,ie=rt===n.INT||rt===n.UNSIGNED_INT||me.gpuType===ll;if(me.isInterleavedBufferAttribute){const ce=me.data,Ce=ce.stride,ze=me.offset;if(ce.isInstancedInterleavedBuffer){for(let Re=0;Re<z.locationSize;Re++)h(z.location+Re,ce.meshPerAttribute);y.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Re=0;Re<z.locationSize;Re++)m(z.location+Re);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Re=0;Re<z.locationSize;Re++)A(z.location+Re,Le/z.locationSize,rt,Ee,Ce*Qe,(ze+Le/z.locationSize*Re)*Qe,ie)}else{if(me.isInstancedBufferAttribute){for(let ce=0;ce<z.locationSize;ce++)h(z.location+ce,me.meshPerAttribute);y.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ce=0;ce<z.locationSize;ce++)m(z.location+ce);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let ce=0;ce<z.locationSize;ce++)A(z.location+ce,Le/z.locationSize,rt,Ee,Le*Qe,Le/z.locationSize*ce*Qe,ie)}}else if(Q!==void 0){const Ee=Q[ne];if(Ee!==void 0)switch(Ee.length){case 2:n.vertexAttrib2fv(z.location,Ee);break;case 3:n.vertexAttrib3fv(z.location,Ee);break;case 4:n.vertexAttrib4fv(z.location,Ee);break;default:n.vertexAttrib1fv(z.location,Ee)}}}}R()}function C(){O();for(const y in i){const I=i[y];for(const W in I){const Z=I[W];for(const ae in Z)u(Z[ae].object),delete Z[ae];delete I[W]}delete i[y]}}function D(y){if(i[y.id]===void 0)return;const I=i[y.id];for(const W in I){const Z=I[W];for(const ae in Z)u(Z[ae].object),delete Z[ae];delete I[W]}delete i[y.id]}function P(y){for(const I in i){const W=i[I];if(W[y.id]===void 0)continue;const Z=W[y.id];for(const ae in Z)u(Z[ae].object),delete Z[ae];delete W[y.id]}}function O(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:D,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:m,disableUnusedAttributes:R}}function bv(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let v=0;v<f;v++)p+=u[v];t.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let v=0;for(let M=0;M<f;M++)v+=u[M]*d[M];t.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Av(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==cn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const O=P===Gs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Hn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Fn&&!O)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:R,maxVaryings:A,maxFragmentUniforms:E,vertexTextures:C,maxSamples:D}}function wv(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Si,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||s;return s=d,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const v=f.clippingPlanes,M=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{const R=r?0:i,A=R*4;let E=h.clippingState||null;l.value=E,E=u(v,d,A,p);for(let C=0;C!==A;++C)E[C]=t[C];h.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,v){const M=f!==null?f.length:0;let m=null;if(M!==0){if(m=l.value,v!==!0||m===null){const h=p+M*4,R=d.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<h)&&(m=new Float32Array(h));for(let A=0,E=p;A!==M;++A,E+=4)o.copy(f[A]).applyMatrix4(R,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function Rv(n){let e=new WeakMap;function t(o,a){return a===la?o.mapping=ss:a===ca&&(o.mapping=rs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===la||a===ca)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Dm(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const $i=4,bc=[.125,.215,.35,.446,.526,.582],yi=20,Oo=new zm,Ac=new lt;let Bo=null,zo=0,Ho=0,Vo=!1;const Mi=(1+Math.sqrt(5))/2,Yi=1/Mi,wc=[new Y(-Mi,Yi,0),new Y(Mi,Yi,0),new Y(-Yi,0,Mi),new Y(Yi,0,Mi),new Y(0,Mi,-Yi),new Y(0,Mi,Yi),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],Cv=new Y;class Rc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=Cv}=r;Bo=this._renderer.getRenderTarget(),zo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bo,zo,Ho),this._renderer.xr.enabled=Vo,e.scissorTest=!1,vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bo=this._renderer.getRenderTarget(),zo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Gs,format:cn,colorSpace:os,depthBuffer:!1},s=Cc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pv(r)),this._blurMaterial=Dv(r,e,t)}return s}_compileMaterial(e){const t=new Sn(this._lodPlanes[0],e);this._renderer.compile(t,Oo)}_sceneToCubeUV(e,t,i,s,r){const l=new nn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(Ac),f.toneMapping=ii,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const M=new gl({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),m=new Sn(new us,M);let h=!1;const R=e.background;R?R.isColor&&(M.color.copy(R),e.background=null,h=!0):(M.color.copy(Ac),h=!0);for(let A=0;A<6;A++){const E=A%3;E===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):E===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));const C=this._cubeSize;vr(s,E*C,A>2?C:0,C,C),f.setRenderTarget(s),h&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=p,f.autoClear=d,e.background=R}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ss||e.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Sn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;vr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Oo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wc[(s-r-1)%wc.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Sn(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*yi-1),M=r/v,m=isFinite(r)?1+Math.floor(u*M):yi;m>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yi}`);const h=[];let R=0;for(let P=0;P<yi;++P){const O=P/M,T=Math.exp(-O*O/2);h.push(T),P===0?R+=T:P<m&&(R+=2*T)}for(let P=0;P<h.length;P++)h[P]=h[P]/R;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:A}=this;d.dTheta.value=v,d.mipInt.value=A-i;const E=this._sizeLods[s],C=3*E*(s>A-$i?s-A+$i:0),D=4*(this._cubeSize-E);vr(t,C,D,3*E,2*E),l.setRenderTarget(t),l.render(f,Oo)}}function Pv(n){const e=[],t=[],i=[];let s=n;const r=n-$i+1+bc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-$i?l=bc[o-n+$i-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,M=3,m=2,h=1,R=new Float32Array(M*v*p),A=new Float32Array(m*v*p),E=new Float32Array(h*v*p);for(let D=0;D<p;D++){const P=D%3*2/3-1,O=D>2?0:-1,T=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];R.set(T,M*v*D),A.set(d,m*v*D);const y=[D,D,D,D,D,D];E.set(y,h*v*D)}const C=new Di;C.setAttribute("position",new yn(R,M)),C.setAttribute("uv",new yn(A,m)),C.setAttribute("faceIndex",new yn(E,h)),e.push(C),s>$i&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Cc(n,e,t){const i=new Ci(n,e,t);return i.texture.mapping=$r,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Dv(n,e,t){const i=new Float32Array(yi),s=new Y(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_l(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Pc(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Dc(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function _l(){return`

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
	`}function Lv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===la||l===ca,u=l===ss||l===rs;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Rc(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Rc(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Iv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Hs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Uv(n,e,t,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,v=f.attributes.position;let M=0;if(p!==null){const R=p.array;M=p.version;for(let A=0,E=R.length;A<E;A+=3){const C=R[A+0],D=R[A+1],P=R[A+2];d.push(C,D,D,P,P,C)}}else if(v!==void 0){const R=v.array;M=v.version;for(let A=0,E=R.length/3-1;A<E;A+=3){const C=A+0,D=A+1,P=A+2;d.push(C,D,D,P,P,C)}}else return;const m=new(cf(d)?pf:df)(d,1);m.version=M;const h=r.get(f);h&&e.remove(h),r.set(f,m)}function u(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Nv(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),t.update(p,i,1)}function c(d,p,v){v!==0&&(n.drawElementsInstanced(i,p,r,d*o,v),t.update(p,i,v))}function u(d,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,v);let m=0;for(let h=0;h<v;h++)m+=p[h];t.update(m,i,1)}function f(d,p,v,M){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],M[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,M,0,v);let h=0;for(let R=0;R<v;R++)h+=p[R]*M[R];t.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Fv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ov(n,e,t){const i=new WeakMap,s=new xt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let y=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let E=0;v===!0&&(E=1),M===!0&&(E=2),m===!0&&(E=3);let C=a.attributes.position.count*E,D=1;C>e.maxTextureSize&&(D=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const P=new Float32Array(C*D*4*f),O=new uf(P,C,D,f);O.type=Fn,O.needsUpdate=!0;const T=E*4;for(let I=0;I<f;I++){const W=h[I],Z=R[I],ae=A[I],se=C*D*4*I;for(let Q=0;Q<W.count;Q++){const ne=Q*T;v===!0&&(s.fromBufferAttribute(W,Q),P[se+ne+0]=s.x,P[se+ne+1]=s.y,P[se+ne+2]=s.z,P[se+ne+3]=0),M===!0&&(s.fromBufferAttribute(Z,Q),P[se+ne+4]=s.x,P[se+ne+5]=s.y,P[se+ne+6]=s.z,P[se+ne+7]=0),m===!0&&(s.fromBufferAttribute(ae,Q),P[se+ne+8]=s.x,P[se+ne+9]=s.y,P[se+ne+10]=s.z,P[se+ne+11]=ae.itemSize===4?s.w:1)}}d={count:f,texture:O,size:new ct(C,D)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const M=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Bv(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Ef=new Gt,Lc=new xf(1,1),yf=new uf,Tf=new dm,bf=new _f,Ic=[],Uc=[],Nc=new Float32Array(16),Fc=new Float32Array(9),Oc=new Float32Array(4);function fs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Ic[s];if(r===void 0&&(r=new Float32Array(s),Ic[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Jr(n,e){let t=Uc[e];t===void 0&&(t=new Int32Array(e),Uc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function zv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Hv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function Vv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function kv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function Gv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Tt(t,i))return;Oc.set(i),n.uniformMatrix2fv(this.addr,!1,Oc),bt(t,i)}}function Wv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Tt(t,i))return;Fc.set(i),n.uniformMatrix3fv(this.addr,!1,Fc),bt(t,i)}}function Xv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Tt(t,i))return;Nc.set(i),n.uniformMatrix4fv(this.addr,!1,Nc),bt(t,i)}}function qv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),bt(t,e)}}function Kv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),bt(t,e)}}function $v(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),bt(t,e)}}function jv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Zv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),bt(t,e)}}function Jv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),bt(t,e)}}function Qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),bt(t,e)}}function e0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Lc.compareFunction=lf,r=Lc):r=Ef,t.setTexture2D(e||r,s)}function t0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Tf,s)}function n0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||bf,s)}function i0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||yf,s)}function s0(n){switch(n){case 5126:return zv;case 35664:return Hv;case 35665:return Vv;case 35666:return kv;case 35674:return Gv;case 35675:return Wv;case 35676:return Xv;case 5124:case 35670:return qv;case 35667:case 35671:return Yv;case 35668:case 35672:return Kv;case 35669:case 35673:return $v;case 5125:return jv;case 36294:return Zv;case 36295:return Jv;case 36296:return Qv;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}function r0(n,e){n.uniform1fv(this.addr,e)}function o0(n,e){const t=fs(e,this.size,2);n.uniform2fv(this.addr,t)}function a0(n,e){const t=fs(e,this.size,3);n.uniform3fv(this.addr,t)}function l0(n,e){const t=fs(e,this.size,4);n.uniform4fv(this.addr,t)}function c0(n,e){const t=fs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function u0(n,e){const t=fs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function f0(n,e){const t=fs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function h0(n,e){n.uniform1iv(this.addr,e)}function d0(n,e){n.uniform2iv(this.addr,e)}function p0(n,e){n.uniform3iv(this.addr,e)}function m0(n,e){n.uniform4iv(this.addr,e)}function g0(n,e){n.uniform1uiv(this.addr,e)}function _0(n,e){n.uniform2uiv(this.addr,e)}function v0(n,e){n.uniform3uiv(this.addr,e)}function x0(n,e){n.uniform4uiv(this.addr,e)}function S0(n,e,t){const i=this.cache,s=e.length,r=Jr(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ef,r[o])}function M0(n,e,t){const i=this.cache,s=e.length,r=Jr(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Tf,r[o])}function E0(n,e,t){const i=this.cache,s=e.length,r=Jr(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||bf,r[o])}function y0(n,e,t){const i=this.cache,s=e.length,r=Jr(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||yf,r[o])}function T0(n){switch(n){case 5126:return r0;case 35664:return o0;case 35665:return a0;case 35666:return l0;case 35674:return c0;case 35675:return u0;case 35676:return f0;case 5124:case 35670:return h0;case 35667:case 35671:return d0;case 35668:case 35672:return p0;case 35669:case 35673:return m0;case 5125:return g0;case 36294:return _0;case 36295:return v0;case 36296:return x0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return M0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return y0}}class b0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=s0(t.type)}}class A0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=T0(t.type)}}class w0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const ko=/(\w+)(\])?(\[|\.)?/g;function Bc(n,e){n.seq.push(e),n.map[e.id]=e}function R0(n,e,t){const i=n.name,s=i.length;for(ko.lastIndex=0;;){const r=ko.exec(i),o=ko.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Bc(t,c===void 0?new b0(a,n,e):new A0(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new w0(a),Bc(t,f)),t=f}}}class Cr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);R0(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function zc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const C0=37297;let P0=0;function D0(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Hc=new ke;function L0(n){tt._getMatrix(Hc,tt.workingColorSpace,n);const e=`mat3( ${Hc.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case Or:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Vc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+D0(n.getShaderSource(e),a)}else return r}function I0(n,e){const t=L0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function U0(n,e){let t;switch(e){case Hp:t="Linear";break;case Vp:t="Reinhard";break;case kp:t="Cineon";break;case Gp:t="ACESFilmic";break;case Xp:t="AgX";break;case qp:t="Neutral";break;case Wp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xr=new Y;function N0(){tt.getLuminanceCoefficients(xr);const n=xr.x.toFixed(4),e=xr.y.toFixed(4),t=xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function O0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function B0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Es(n){return n!==""}function kc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Va(n){return n.replace(z0,V0)}const H0=new Map;function V0(n,e){let t=Xe[e];if(t===void 0){const i=H0.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Va(t)}const k0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wc(n){return n.replace(k0,G0)}function G0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function W0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ju?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===xp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ln&&(e="SHADOWMAP_TYPE_VSM"),e}function X0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ss:case rs:e="ENVMAP_TYPE_CUBE";break;case $r:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case rs:e="ENVMAP_MODE_REFRACTION";break}return e}function Y0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zu:e="ENVMAP_BLENDING_MULTIPLY";break;case Bp:e="ENVMAP_BLENDING_MIX";break;case zp:e="ENVMAP_BLENDING_ADD";break}return e}function K0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function $0(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=W0(t),c=X0(t),u=q0(t),f=Y0(t),d=K0(t),p=F0(t),v=O0(r),M=s.createProgram();let m,h,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Es).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Es).join(`
`),h.length>0&&(h+=`
`)):(m=[Xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),h=[Xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Xe.tonemapping_pars_fragment:"",t.toneMapping!==ii?U0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,I0("linearToOutputTexel",t.outputColorSpace),N0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Es).join(`
`)),o=Va(o),o=kc(o,t),o=Gc(o,t),a=Va(a),a=kc(a,t),a=Gc(a,t),o=Wc(o),a=Wc(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const A=R+m+o,E=R+h+a,C=zc(s,s.VERTEX_SHADER,A),D=zc(s,s.FRAGMENT_SHADER,E);s.attachShader(M,C),s.attachShader(M,D),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function P(I){if(n.debug.checkShaderErrors){const W=s.getProgramInfoLog(M)||"",Z=s.getShaderInfoLog(C)||"",ae=s.getShaderInfoLog(D)||"",se=W.trim(),Q=Z.trim(),ne=ae.trim();let z=!0,me=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,C,D);else{const Ee=Vc(s,C,"vertex"),Le=Vc(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+se+`
`+Ee+`
`+Le)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(Q===""||ne==="")&&(me=!1);me&&(I.diagnostics={runnable:z,programLog:se,vertexShader:{log:Q,prefix:m},fragmentShader:{log:ne,prefix:h}})}s.deleteShader(C),s.deleteShader(D),O=new Cr(s,M),T=B0(s,M)}let O;this.getUniforms=function(){return O===void 0&&P(this),O};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(M,C0)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=P0++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=C,this.fragmentShader=D,this}let j0=0;class Z0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new J0(e),t.set(e,i)),i}}class J0{constructor(e){this.id=j0++,this.code=e,this.usedTimes=0}}function Q0(n,e,t,i,s,r,o){const a=new ff,l=new Z0,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,y,I,W,Z){const ae=W.fog,se=Z.geometry,Q=T.isMeshStandardMaterial?W.environment:null,ne=(T.isMeshStandardMaterial?t:e).get(T.envMap||Q),z=ne&&ne.mapping===$r?ne.image.height:null,me=v[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const Ee=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Le=Ee!==void 0?Ee.length:0;let Be=0;se.morphAttributes.position!==void 0&&(Be=1),se.morphAttributes.normal!==void 0&&(Be=2),se.morphAttributes.color!==void 0&&(Be=3);let nt,rt,Qe,ie;if(me){const We=gn[me];nt=We.vertexShader,rt=We.fragmentShader}else nt=T.vertexShader,rt=T.fragmentShader,l.update(T),Qe=l.getVertexShaderID(T),ie=l.getFragmentShaderID(T);const ce=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),ze=Z.isInstancedMesh===!0,Re=Z.isBatchedMesh===!0,Ke=!!T.map,w=!!T.matcap,_=!!ne,k=!!T.aoMap,$=!!T.lightMap,G=!!T.bumpMap,F=!!T.normalMap,fe=!!T.displacementMap,X=!!T.emissiveMap,ee=!!T.metalnessMap,re=!!T.roughnessMap,Me=T.anisotropy>0,x=T.clearcoat>0,g=T.dispersion>0,L=T.iridescence>0,H=T.sheen>0,J=T.transmission>0,V=Me&&!!T.anisotropyMap,ye=x&&!!T.clearcoatMap,he=x&&!!T.clearcoatNormalMap,be=x&&!!T.clearcoatRoughnessMap,Ae=L&&!!T.iridescenceMap,ue=L&&!!T.iridescenceThicknessMap,_e=H&&!!T.sheenColorMap,Pe=H&&!!T.sheenRoughnessMap,we=!!T.specularMap,ge=!!T.specularColorMap,B=!!T.specularIntensityMap,b=J&&!!T.transmissionMap,j=J&&!!T.thicknessMap,oe=!!T.gradientMap,ve=!!T.alphaMap,le=T.alphaTest>0,te=!!T.alphaHash,xe=!!T.extensions;let Ne=ii;T.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Ne=n.toneMapping);const Ye={shaderID:me,shaderType:T.type,shaderName:T.name,vertexShader:nt,fragmentShader:rt,defines:T.defines,customVertexShaderID:Qe,customFragmentShaderID:ie,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Re,batchingColor:Re&&Z._colorsTexture!==null,instancing:ze,instancingColor:ze&&Z.instanceColor!==null,instancingMorph:ze&&Z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:os,alphaToCoverage:!!T.alphaToCoverage,map:Ke,matcap:w,envMap:_,envMapMode:_&&ne.mapping,envMapCubeUVHeight:z,aoMap:k,lightMap:$,bumpMap:G,normalMap:F,displacementMap:d&&fe,emissiveMap:X,normalMapObjectSpace:F&&T.normalMapType===Zp,normalMapTangentSpace:F&&T.normalMapType===jp,metalnessMap:ee,roughnessMap:re,anisotropy:Me,anisotropyMap:V,clearcoat:x,clearcoatMap:ye,clearcoatNormalMap:he,clearcoatRoughnessMap:be,dispersion:g,iridescence:L,iridescenceMap:Ae,iridescenceThicknessMap:ue,sheen:H,sheenColorMap:_e,sheenRoughnessMap:Pe,specularMap:we,specularColorMap:ge,specularIntensityMap:B,transmission:J,transmissionMap:b,thicknessMap:j,gradientMap:oe,opaque:T.transparent===!1&&T.blending===es&&T.alphaToCoverage===!1,alphaMap:ve,alphaTest:le,alphaHash:te,combine:T.combine,mapUv:Ke&&M(T.map.channel),aoMapUv:k&&M(T.aoMap.channel),lightMapUv:$&&M(T.lightMap.channel),bumpMapUv:G&&M(T.bumpMap.channel),normalMapUv:F&&M(T.normalMap.channel),displacementMapUv:fe&&M(T.displacementMap.channel),emissiveMapUv:X&&M(T.emissiveMap.channel),metalnessMapUv:ee&&M(T.metalnessMap.channel),roughnessMapUv:re&&M(T.roughnessMap.channel),anisotropyMapUv:V&&M(T.anisotropyMap.channel),clearcoatMapUv:ye&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:he&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&M(T.sheenRoughnessMap.channel),specularMapUv:we&&M(T.specularMap.channel),specularColorMapUv:ge&&M(T.specularColorMap.channel),specularIntensityMapUv:B&&M(T.specularIntensityMap.channel),transmissionMapUv:b&&M(T.transmissionMap.channel),thicknessMapUv:j&&M(T.thicknessMap.channel),alphaMapUv:ve&&M(T.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(F||Me),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!se.attributes.uv&&(Ke||ve),fog:!!ae,useFog:T.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ce,skinning:Z.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Be,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Ke&&T.map.isVideoTexture===!0&&tt.getTransfer(T.map.colorSpace)===at,decodeVideoTextureEmissive:X&&T.emissiveMap.isVideoTexture===!0&&tt.getTransfer(T.emissiveMap.colorSpace)===at,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Nn,flipSided:T.side===kt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:xe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&T.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function h(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const I in T.defines)y.push(I),y.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(R(y,T),A(y,T),y.push(n.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function R(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function A(T,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),T.push(a.mask)}function E(T){const y=v[T.type];let I;if(y){const W=gn[y];I=wm.clone(W.uniforms)}else I=T.uniforms;return I}function C(T,y){let I;for(let W=0,Z=u.length;W<Z;W++){const ae=u[W];if(ae.cacheKey===y){I=ae,++I.usedTimes;break}}return I===void 0&&(I=new $0(n,y,T,r),u.push(I)),I}function D(T){if(--T.usedTimes===0){const y=u.indexOf(T);u[y]=u[u.length-1],u.pop(),T.destroy()}}function P(T){l.remove(T)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:E,acquireProgram:C,releaseProgram:D,releaseShaderCache:P,programs:u,dispose:O}}function ex(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function tx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function qc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yc(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,d,p,v,M,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:v,renderOrder:f.renderOrder,z:M,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=M,h.group=m),e++,h}function a(f,d,p,v,M,m){const h=o(f,d,p,v,M,m);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):t.push(h)}function l(f,d,p,v,M,m){const h=o(f,d,p,v,M,m);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||tx),i.length>1&&i.sort(d||qc),s.length>1&&s.sort(d||qc)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function nx(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Yc,n.set(i,[o])):s>=r.length?(o=new Yc,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ix(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new lt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function sx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let rx=0;function ox(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ax(n){const e=new ix,t=sx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const s=new Y,r=new Et,o=new Et;function a(c){let u=0,f=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,v=0,M=0,m=0,h=0,R=0,A=0,E=0,C=0,D=0,P=0;c.sort(ox);for(let T=0,y=c.length;T<y;T++){const I=c[T],W=I.color,Z=I.intensity,ae=I.distance,se=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=W.r*Z,f+=W.g*Z,d+=W.b*Z;else if(I.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(I.sh.coefficients[Q],Z);P++}else if(I.isDirectionalLight){const Q=e.get(I);if(Q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ne=I.shadow,z=t.get(I);z.shadowIntensity=ne.intensity,z.shadowBias=ne.bias,z.shadowNormalBias=ne.normalBias,z.shadowRadius=ne.radius,z.shadowMapSize=ne.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=se,i.directionalShadowMatrix[p]=I.shadow.matrix,R++}i.directional[p]=Q,p++}else if(I.isSpotLight){const Q=e.get(I);Q.position.setFromMatrixPosition(I.matrixWorld),Q.color.copy(W).multiplyScalar(Z),Q.distance=ae,Q.coneCos=Math.cos(I.angle),Q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Q.decay=I.decay,i.spot[M]=Q;const ne=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,ne.updateMatrices(I),I.castShadow&&D++),i.spotLightMatrix[M]=ne.matrix,I.castShadow){const z=t.get(I);z.shadowIntensity=ne.intensity,z.shadowBias=ne.bias,z.shadowNormalBias=ne.normalBias,z.shadowRadius=ne.radius,z.shadowMapSize=ne.mapSize,i.spotShadow[M]=z,i.spotShadowMap[M]=se,E++}M++}else if(I.isRectAreaLight){const Q=e.get(I);Q.color.copy(W).multiplyScalar(Z),Q.halfWidth.set(I.width*.5,0,0),Q.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=Q,m++}else if(I.isPointLight){const Q=e.get(I);if(Q.color.copy(I.color).multiplyScalar(I.intensity),Q.distance=I.distance,Q.decay=I.decay,I.castShadow){const ne=I.shadow,z=t.get(I);z.shadowIntensity=ne.intensity,z.shadowBias=ne.bias,z.shadowNormalBias=ne.normalBias,z.shadowRadius=ne.radius,z.shadowMapSize=ne.mapSize,z.shadowCameraNear=ne.camera.near,z.shadowCameraFar=ne.camera.far,i.pointShadow[v]=z,i.pointShadowMap[v]=se,i.pointShadowMatrix[v]=I.shadow.matrix,A++}i.point[v]=Q,v++}else if(I.isHemisphereLight){const Q=e.get(I);Q.skyColor.copy(I.color).multiplyScalar(Z),Q.groundColor.copy(I.groundColor).multiplyScalar(Z),i.hemi[h]=Q,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const O=i.hash;(O.directionalLength!==p||O.pointLength!==v||O.spotLength!==M||O.rectAreaLength!==m||O.hemiLength!==h||O.numDirectionalShadows!==R||O.numPointShadows!==A||O.numSpotShadows!==E||O.numSpotMaps!==C||O.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=E+C-D,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=P,O.directionalLength=p,O.pointLength=v,O.spotLength=M,O.rectAreaLength=m,O.hemiLength=h,O.numDirectionalShadows=R,O.numPointShadows=A,O.numSpotShadows=E,O.numSpotMaps=C,O.numLightProbes=P,i.version=rx++)}function l(c,u){let f=0,d=0,p=0,v=0,M=0;const m=u.matrixWorldInverse;for(let h=0,R=c.length;h<R;h++){const A=c[h];if(A.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),f++}else if(A.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(A.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(A.width*.5,0,0),E.halfHeight.set(0,A.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(A.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(m),d++}else if(A.isHemisphereLight){const E=i.hemi[M];E.direction.setFromMatrixPosition(A.matrixWorld),E.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:i}}function Kc(n){const e=new ax(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function lx(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Kc(n),e.set(s,[a])):r>=o.length?(a=new Kc(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ux=`uniform sampler2D shadow_pass;
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
}`;function fx(n,e,t){let i=new vf;const s=new ct,r=new ct,o=new xt,a=new Om({depthPacking:$p}),l=new Bm,c={},u=t.maxTextureSize,f={[ai]:kt,[kt]:ai,[Nn]:Nn},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:cx,fragmentShader:ux}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new Di;v.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Sn(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ju;let h=this.type;this.render=function(D,P,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const T=n.getRenderTarget(),y=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),W=n.state;W.setBlending(ni),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const Z=h!==Ln&&this.type===Ln,ae=h===Ln&&this.type!==Ln;for(let se=0,Q=D.length;se<Q;se++){const ne=D[se],z=ne.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const me=z.getFrameExtents();if(s.multiply(me),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/me.x),s.x=r.x*me.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/me.y),s.y=r.y*me.y,z.mapSize.y=r.y)),z.map===null||Z===!0||ae===!0){const Le=this.type!==Ln?{minFilter:fn,magFilter:fn}:{};z.map!==null&&z.map.dispose(),z.map=new Ci(s.x,s.y,Le),z.map.texture.name=ne.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const Ee=z.getViewportCount();for(let Le=0;Le<Ee;Le++){const Be=z.getViewport(Le);o.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),W.viewport(o),z.updateMatrices(ne,Le),i=z.getFrustum(),E(P,O,z.camera,ne,this.type)}z.isPointLightShadow!==!0&&this.type===Ln&&R(z,O),z.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(T,y,I)};function R(D,P){const O=e.update(M);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Ci(s.x,s.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(P,null,O,d,M,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(P,null,O,p,M,null)}function A(D,P,O,T){let y=null;const I=O.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(I!==void 0)y=I;else if(y=O.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const W=y.uuid,Z=P.uuid;let ae=c[W];ae===void 0&&(ae={},c[W]=ae);let se=ae[Z];se===void 0&&(se=y.clone(),ae[Z]=se,P.addEventListener("dispose",C)),y=se}if(y.visible=P.visible,y.wireframe=P.wireframe,T===Ln?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:f[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,O.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const W=n.properties.get(y);W.light=O}return y}function E(D,P,O,T,y){if(D.visible===!1)return;if(D.layers.test(P.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&y===Ln)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,D.matrixWorld);const Z=e.update(D),ae=D.material;if(Array.isArray(ae)){const se=Z.groups;for(let Q=0,ne=se.length;Q<ne;Q++){const z=se[Q],me=ae[z.materialIndex];if(me&&me.visible){const Ee=A(D,me,T,y);D.onBeforeShadow(n,D,P,O,Z,Ee,z),n.renderBufferDirect(O,null,Z,Ee,D,z),D.onAfterShadow(n,D,P,O,Z,Ee,z)}}}else if(ae.visible){const se=A(D,ae,T,y);D.onBeforeShadow(n,D,P,O,Z,se,null),n.renderBufferDirect(O,null,Z,se,D,null),D.onAfterShadow(n,D,P,O,Z,se,null)}}const W=D.children;for(let Z=0,ae=W.length;Z<ae;Z++)E(W[Z],P,O,T,y)}function C(D){D.target.removeEventListener("dispose",C);for(const O in c){const T=c[O],y=D.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}const hx={[ta]:na,[ia]:oa,[sa]:aa,[is]:ra,[na]:ta,[oa]:ia,[aa]:sa,[ra]:is};function dx(n,e){function t(){let b=!1;const j=new xt;let oe=null;const ve=new xt(0,0,0,0);return{setMask:function(le){oe!==le&&!b&&(n.colorMask(le,le,le,le),oe=le)},setLocked:function(le){b=le},setClear:function(le,te,xe,Ne,Ye){Ye===!0&&(le*=Ne,te*=Ne,xe*=Ne),j.set(le,te,xe,Ne),ve.equals(j)===!1&&(n.clearColor(le,te,xe,Ne),ve.copy(j))},reset:function(){b=!1,oe=null,ve.set(-1,0,0,0)}}}function i(){let b=!1,j=!1,oe=null,ve=null,le=null;return{setReversed:function(te){if(j!==te){const xe=e.get("EXT_clip_control");te?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),j=te;const Ne=le;le=null,this.setClear(Ne)}},getReversed:function(){return j},setTest:function(te){te?ce(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(te){oe!==te&&!b&&(n.depthMask(te),oe=te)},setFunc:function(te){if(j&&(te=hx[te]),ve!==te){switch(te){case ta:n.depthFunc(n.NEVER);break;case na:n.depthFunc(n.ALWAYS);break;case ia:n.depthFunc(n.LESS);break;case is:n.depthFunc(n.LEQUAL);break;case sa:n.depthFunc(n.EQUAL);break;case ra:n.depthFunc(n.GEQUAL);break;case oa:n.depthFunc(n.GREATER);break;case aa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=te}},setLocked:function(te){b=te},setClear:function(te){le!==te&&(j&&(te=1-te),n.clearDepth(te),le=te)},reset:function(){b=!1,oe=null,ve=null,le=null,j=!1}}}function s(){let b=!1,j=null,oe=null,ve=null,le=null,te=null,xe=null,Ne=null,Ye=null;return{setTest:function(We){b||(We?ce(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(We){j!==We&&!b&&(n.stencilMask(We),j=We)},setFunc:function(We,pt,At){(oe!==We||ve!==pt||le!==At)&&(n.stencilFunc(We,pt,At),oe=We,ve=pt,le=At)},setOp:function(We,pt,At){(te!==We||xe!==pt||Ne!==At)&&(n.stencilOp(We,pt,At),te=We,xe=pt,Ne=At)},setLocked:function(We){b=We},setClear:function(We){Ye!==We&&(n.clearStencil(We),Ye=We)},reset:function(){b=!1,j=null,oe=null,ve=null,le=null,te=null,xe=null,Ne=null,Ye=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],v=null,M=!1,m=null,h=null,R=null,A=null,E=null,C=null,D=null,P=new lt(0,0,0),O=0,T=!1,y=null,I=null,W=null,Z=null,ae=null;const se=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,ne=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(z)[1]),Q=ne>=1):z.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Q=ne>=2);let me=null,Ee={};const Le=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),nt=new xt().fromArray(Le),rt=new xt().fromArray(Be);function Qe(b,j,oe,ve){const le=new Uint8Array(4),te=n.createTexture();n.bindTexture(b,te),n.texParameteri(b,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(b,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xe=0;xe<oe;xe++)b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY?n.texImage3D(j,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(j+xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return te}const ie={};ie[n.TEXTURE_2D]=Qe(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=Qe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=Qe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=Qe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(n.DEPTH_TEST),o.setFunc(is),G(!1),F(ec),ce(n.CULL_FACE),k(ni);function ce(b){u[b]!==!0&&(n.enable(b),u[b]=!0)}function Ce(b){u[b]!==!1&&(n.disable(b),u[b]=!1)}function ze(b,j){return f[b]!==j?(n.bindFramebuffer(b,j),f[b]=j,b===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=j),b===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=j),!0):!1}function Re(b,j){let oe=p,ve=!1;if(b){oe=d.get(j),oe===void 0&&(oe=[],d.set(j,oe));const le=b.textures;if(oe.length!==le.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let te=0,xe=le.length;te<xe;te++)oe[te]=n.COLOR_ATTACHMENT0+te;oe.length=le.length,ve=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,ve=!0);ve&&n.drawBuffers(oe)}function Ke(b){return v!==b?(n.useProgram(b),v=b,!0):!1}const w={[Ei]:n.FUNC_ADD,[Mp]:n.FUNC_SUBTRACT,[Ep]:n.FUNC_REVERSE_SUBTRACT};w[yp]=n.MIN,w[Tp]=n.MAX;const _={[bp]:n.ZERO,[Ap]:n.ONE,[wp]:n.SRC_COLOR,[Qo]:n.SRC_ALPHA,[Ip]:n.SRC_ALPHA_SATURATE,[Dp]:n.DST_COLOR,[Cp]:n.DST_ALPHA,[Rp]:n.ONE_MINUS_SRC_COLOR,[ea]:n.ONE_MINUS_SRC_ALPHA,[Lp]:n.ONE_MINUS_DST_COLOR,[Pp]:n.ONE_MINUS_DST_ALPHA,[Up]:n.CONSTANT_COLOR,[Np]:n.ONE_MINUS_CONSTANT_COLOR,[Fp]:n.CONSTANT_ALPHA,[Op]:n.ONE_MINUS_CONSTANT_ALPHA};function k(b,j,oe,ve,le,te,xe,Ne,Ye,We){if(b===ni){M===!0&&(Ce(n.BLEND),M=!1);return}if(M===!1&&(ce(n.BLEND),M=!0),b!==Sp){if(b!==m||We!==T){if((h!==Ei||E!==Ei)&&(n.blendEquation(n.FUNC_ADD),h=Ei,E=Ei),We)switch(b){case es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tc:n.blendFunc(n.ONE,n.ONE);break;case nc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ic:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case nc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ic:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}R=null,A=null,C=null,D=null,P.set(0,0,0),O=0,m=b,T=We}return}le=le||j,te=te||oe,xe=xe||ve,(j!==h||le!==E)&&(n.blendEquationSeparate(w[j],w[le]),h=j,E=le),(oe!==R||ve!==A||te!==C||xe!==D)&&(n.blendFuncSeparate(_[oe],_[ve],_[te],_[xe]),R=oe,A=ve,C=te,D=xe),(Ne.equals(P)===!1||Ye!==O)&&(n.blendColor(Ne.r,Ne.g,Ne.b,Ye),P.copy(Ne),O=Ye),m=b,T=!1}function $(b,j){b.side===Nn?Ce(n.CULL_FACE):ce(n.CULL_FACE);let oe=b.side===kt;j&&(oe=!oe),G(oe),b.blending===es&&b.transparent===!1?k(ni):k(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),o.setFunc(b.depthFunc),o.setTest(b.depthTest),o.setMask(b.depthWrite),r.setMask(b.colorWrite);const ve=b.stencilWrite;a.setTest(ve),ve&&(a.setMask(b.stencilWriteMask),a.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),a.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),X(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function G(b){y!==b&&(b?n.frontFace(n.CW):n.frontFace(n.CCW),y=b)}function F(b){b!==_p?(ce(n.CULL_FACE),b!==I&&(b===ec?n.cullFace(n.BACK):b===vp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),I=b}function fe(b){b!==W&&(Q&&n.lineWidth(b),W=b)}function X(b,j,oe){b?(ce(n.POLYGON_OFFSET_FILL),(Z!==j||ae!==oe)&&(n.polygonOffset(j,oe),Z=j,ae=oe)):Ce(n.POLYGON_OFFSET_FILL)}function ee(b){b?ce(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function re(b){b===void 0&&(b=n.TEXTURE0+se-1),me!==b&&(n.activeTexture(b),me=b)}function Me(b,j,oe){oe===void 0&&(me===null?oe=n.TEXTURE0+se-1:oe=me);let ve=Ee[oe];ve===void 0&&(ve={type:void 0,texture:void 0},Ee[oe]=ve),(ve.type!==b||ve.texture!==j)&&(me!==oe&&(n.activeTexture(oe),me=oe),n.bindTexture(b,j||ie[b]),ve.type=b,ve.texture=j)}function x(){const b=Ee[me];b!==void 0&&b.type!==void 0&&(n.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function H(){try{n.texSubImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function J(){try{n.texSubImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ye(){try{n.compressedTexSubImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function he(){try{n.texStorage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function be(){try{n.texStorage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ae(){try{n.texImage2D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ue(){try{n.texImage3D(...arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function _e(b){nt.equals(b)===!1&&(n.scissor(b.x,b.y,b.z,b.w),nt.copy(b))}function Pe(b){rt.equals(b)===!1&&(n.viewport(b.x,b.y,b.z,b.w),rt.copy(b))}function we(b,j){let oe=c.get(j);oe===void 0&&(oe=new WeakMap,c.set(j,oe));let ve=oe.get(b);ve===void 0&&(ve=n.getUniformBlockIndex(j,b.name),oe.set(b,ve))}function ge(b,j){const ve=c.get(j).get(b);l.get(j)!==ve&&(n.uniformBlockBinding(j,ve,b.__bindingPointIndex),l.set(j,ve))}function B(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},me=null,Ee={},f={},d=new WeakMap,p=[],v=null,M=!1,m=null,h=null,R=null,A=null,E=null,C=null,D=null,P=new lt(0,0,0),O=0,T=!1,y=null,I=null,W=null,Z=null,ae=null,nt.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ce,disable:Ce,bindFramebuffer:ze,drawBuffers:Re,useProgram:Ke,setBlending:k,setMaterial:$,setFlipSided:G,setCullFace:F,setLineWidth:fe,setPolygonOffset:X,setScissorTest:ee,activeTexture:re,bindTexture:Me,unbindTexture:x,compressedTexImage2D:g,compressedTexImage3D:L,texImage2D:Ae,texImage3D:ue,updateUBOMapping:we,uniformBlockBinding:ge,texStorage2D:he,texStorage3D:be,texSubImage2D:H,texSubImage3D:J,compressedTexSubImage2D:V,compressedTexSubImage3D:ye,scissor:_e,viewport:Pe,reset:B}}function px(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(x,g){return p?new OffscreenCanvas(x,g):zr("canvas")}function M(x,g,L){let H=1;const J=Me(x);if((J.width>L||J.height>L)&&(H=L/Math.max(J.width,J.height)),H<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const V=Math.floor(H*J.width),ye=Math.floor(H*J.height);f===void 0&&(f=v(V,ye));const he=g?v(V,ye):f;return he.width=V,he.height=ye,he.getContext("2d").drawImage(x,0,0,V,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+V+"x"+ye+")."),he}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),x;return x}function m(x){return x.generateMipmaps}function h(x){n.generateMipmap(x)}function R(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(x,g,L,H,J=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let V=g;if(g===n.RED&&(L===n.FLOAT&&(V=n.R32F),L===n.HALF_FLOAT&&(V=n.R16F),L===n.UNSIGNED_BYTE&&(V=n.R8)),g===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(V=n.R8UI),L===n.UNSIGNED_SHORT&&(V=n.R16UI),L===n.UNSIGNED_INT&&(V=n.R32UI),L===n.BYTE&&(V=n.R8I),L===n.SHORT&&(V=n.R16I),L===n.INT&&(V=n.R32I)),g===n.RG&&(L===n.FLOAT&&(V=n.RG32F),L===n.HALF_FLOAT&&(V=n.RG16F),L===n.UNSIGNED_BYTE&&(V=n.RG8)),g===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(V=n.RG8UI),L===n.UNSIGNED_SHORT&&(V=n.RG16UI),L===n.UNSIGNED_INT&&(V=n.RG32UI),L===n.BYTE&&(V=n.RG8I),L===n.SHORT&&(V=n.RG16I),L===n.INT&&(V=n.RG32I)),g===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(V=n.RGB8UI),L===n.UNSIGNED_SHORT&&(V=n.RGB16UI),L===n.UNSIGNED_INT&&(V=n.RGB32UI),L===n.BYTE&&(V=n.RGB8I),L===n.SHORT&&(V=n.RGB16I),L===n.INT&&(V=n.RGB32I)),g===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),L===n.UNSIGNED_INT&&(V=n.RGBA32UI),L===n.BYTE&&(V=n.RGBA8I),L===n.SHORT&&(V=n.RGBA16I),L===n.INT&&(V=n.RGBA32I)),g===n.RGB&&(L===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(V=n.R11F_G11F_B10F)),g===n.RGBA){const ye=J?Or:tt.getTransfer(H);L===n.FLOAT&&(V=n.RGBA32F),L===n.HALF_FLOAT&&(V=n.RGBA16F),L===n.UNSIGNED_BYTE&&(V=ye===at?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function E(x,g){let L;return x?g===null||g===Ri||g===Os?L=n.DEPTH24_STENCIL8:g===Fn?L=n.DEPTH32F_STENCIL8:g===Fs&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ri||g===Os?L=n.DEPTH_COMPONENT24:g===Fn?L=n.DEPTH_COMPONENT32F:g===Fs&&(L=n.DEPTH_COMPONENT16),L}function C(x,g){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==fn&&x.minFilter!==vn?Math.log2(Math.max(g.width,g.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?g.mipmaps.length:1}function D(x){const g=x.target;g.removeEventListener("dispose",D),O(g),g.isVideoTexture&&u.delete(g)}function P(x){const g=x.target;g.removeEventListener("dispose",P),y(g)}function O(x){const g=i.get(x);if(g.__webglInit===void 0)return;const L=x.source,H=d.get(L);if(H){const J=H[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&T(x),Object.keys(H).length===0&&d.delete(L)}i.remove(x)}function T(x){const g=i.get(x);n.deleteTexture(g.__webglTexture);const L=x.source,H=d.get(L);delete H[g.__cacheKey],o.memory.textures--}function y(x){const g=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let J=0;J<g.__webglFramebuffer[H].length;J++)n.deleteFramebuffer(g.__webglFramebuffer[H][J]);else n.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)n.deleteFramebuffer(g.__webglFramebuffer[H]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=x.textures;for(let H=0,J=L.length;H<J;H++){const V=i.get(L[H]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(L[H])}i.remove(x)}let I=0;function W(){I=0}function Z(){const x=I;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),I+=1,x}function ae(x){const g=[];return g.push(x.wrapS),g.push(x.wrapT),g.push(x.wrapR||0),g.push(x.magFilter),g.push(x.minFilter),g.push(x.anisotropy),g.push(x.internalFormat),g.push(x.format),g.push(x.type),g.push(x.generateMipmaps),g.push(x.premultiplyAlpha),g.push(x.flipY),g.push(x.unpackAlignment),g.push(x.colorSpace),g.join()}function se(x,g){const L=i.get(x);if(x.isVideoTexture&&ee(x),x.isRenderTargetTexture===!1&&x.isExternalTexture!==!0&&x.version>0&&L.__version!==x.version){const H=x.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(L,x,g);return}}else x.isExternalTexture&&(L.__webglTexture=x.sourceTexture?x.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+g)}function Q(x,g){const L=i.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&L.__version!==x.version){ie(L,x,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+g)}function ne(x,g){const L=i.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&L.__version!==x.version){ie(L,x,g);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+g)}function z(x,g){const L=i.get(x);if(x.version>0&&L.__version!==x.version){ce(L,x,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+g)}const me={[ua]:n.REPEAT,[Ti]:n.CLAMP_TO_EDGE,[fa]:n.MIRRORED_REPEAT},Ee={[fn]:n.NEAREST,[Yp]:n.NEAREST_MIPMAP_NEAREST,[Js]:n.NEAREST_MIPMAP_LINEAR,[vn]:n.LINEAR,[fo]:n.LINEAR_MIPMAP_NEAREST,[bi]:n.LINEAR_MIPMAP_LINEAR},Le={[Jp]:n.NEVER,[sm]:n.ALWAYS,[Qp]:n.LESS,[lf]:n.LEQUAL,[em]:n.EQUAL,[im]:n.GEQUAL,[tm]:n.GREATER,[nm]:n.NOTEQUAL};function Be(x,g){if(g.type===Fn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===vn||g.magFilter===fo||g.magFilter===Js||g.magFilter===bi||g.minFilter===vn||g.minFilter===fo||g.minFilter===Js||g.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,me[g.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,me[g.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,me[g.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,Ee[g.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,Ee[g.minFilter]),g.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,Le[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===fn||g.minFilter!==Js&&g.minFilter!==bi||g.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function nt(x,g){let L=!1;x.__webglInit===void 0&&(x.__webglInit=!0,g.addEventListener("dispose",D));const H=g.source;let J=d.get(H);J===void 0&&(J={},d.set(H,J));const V=ae(g);if(V!==x.__cacheKey){J[V]===void 0&&(J[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),J[V].usedTimes++;const ye=J[x.__cacheKey];ye!==void 0&&(J[x.__cacheKey].usedTimes--,ye.usedTimes===0&&T(g)),x.__cacheKey=V,x.__webglTexture=J[V].texture}return L}function rt(x,g,L){return Math.floor(Math.floor(x/L)/g)}function Qe(x,g,L,H){const V=x.updateRanges;if(V.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,L,H,g.data);else{V.sort((ue,_e)=>ue.start-_e.start);let ye=0;for(let ue=1;ue<V.length;ue++){const _e=V[ye],Pe=V[ue],we=_e.start+_e.count,ge=rt(Pe.start,g.width,4),B=rt(_e.start,g.width,4);Pe.start<=we+1&&ge===B&&rt(Pe.start+Pe.count-1,g.width,4)===ge?_e.count=Math.max(_e.count,Pe.start+Pe.count-_e.start):(++ye,V[ye]=Pe)}V.length=ye+1;const he=n.getParameter(n.UNPACK_ROW_LENGTH),be=n.getParameter(n.UNPACK_SKIP_PIXELS),Ae=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ue=0,_e=V.length;ue<_e;ue++){const Pe=V[ue],we=Math.floor(Pe.start/4),ge=Math.ceil(Pe.count/4),B=we%g.width,b=Math.floor(we/g.width),j=ge,oe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,B),n.pixelStorei(n.UNPACK_SKIP_ROWS,b),t.texSubImage2D(n.TEXTURE_2D,0,B,b,j,oe,L,H,g.data)}x.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,he),n.pixelStorei(n.UNPACK_SKIP_PIXELS,be),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ae)}}function ie(x,g,L){let H=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=n.TEXTURE_3D);const J=nt(x,g),V=g.source;t.bindTexture(H,x.__webglTexture,n.TEXTURE0+L);const ye=i.get(V);if(V.version!==ye.__version||J===!0){t.activeTexture(n.TEXTURE0+L);const he=tt.getPrimaries(tt.workingColorSpace),be=g.colorSpace===ei?null:tt.getPrimaries(g.colorSpace),Ae=g.colorSpace===ei||he===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ue=M(g.image,!1,s.maxTextureSize);ue=re(g,ue);const _e=r.convert(g.format,g.colorSpace),Pe=r.convert(g.type);let we=A(g.internalFormat,_e,Pe,g.colorSpace,g.isVideoTexture);Be(H,g);let ge;const B=g.mipmaps,b=g.isVideoTexture!==!0,j=ye.__version===void 0||J===!0,oe=V.dataReady,ve=C(g,ue);if(g.isDepthTexture)we=E(g.format===zs,g.type),j&&(b?t.texStorage2D(n.TEXTURE_2D,1,we,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,we,ue.width,ue.height,0,_e,Pe,null));else if(g.isDataTexture)if(B.length>0){b&&j&&t.texStorage2D(n.TEXTURE_2D,ve,we,B[0].width,B[0].height);for(let le=0,te=B.length;le<te;le++)ge=B[le],b?oe&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,ge.width,ge.height,_e,Pe,ge.data):t.texImage2D(n.TEXTURE_2D,le,we,ge.width,ge.height,0,_e,Pe,ge.data);g.generateMipmaps=!1}else b?(j&&t.texStorage2D(n.TEXTURE_2D,ve,we,ue.width,ue.height),oe&&Qe(g,ue,_e,Pe)):t.texImage2D(n.TEXTURE_2D,0,we,ue.width,ue.height,0,_e,Pe,ue.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){b&&j&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,we,B[0].width,B[0].height,ue.depth);for(let le=0,te=B.length;le<te;le++)if(ge=B[le],g.format!==cn)if(_e!==null)if(b){if(oe)if(g.layerUpdates.size>0){const xe=Tc(ge.width,ge.height,g.format,g.type);for(const Ne of g.layerUpdates){const Ye=ge.data.subarray(Ne*xe/ge.data.BYTES_PER_ELEMENT,(Ne+1)*xe/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,Ne,ge.width,ge.height,1,_e,Ye)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,ge.width,ge.height,ue.depth,_e,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,we,ge.width,ge.height,ue.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else b?oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,ge.width,ge.height,ue.depth,_e,Pe,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,we,ge.width,ge.height,ue.depth,0,_e,Pe,ge.data)}else{b&&j&&t.texStorage2D(n.TEXTURE_2D,ve,we,B[0].width,B[0].height);for(let le=0,te=B.length;le<te;le++)ge=B[le],g.format!==cn?_e!==null?b?oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,ge.width,ge.height,_e,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,le,we,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):b?oe&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,ge.width,ge.height,_e,Pe,ge.data):t.texImage2D(n.TEXTURE_2D,le,we,ge.width,ge.height,0,_e,Pe,ge.data)}else if(g.isDataArrayTexture)if(b){if(j&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,we,ue.width,ue.height,ue.depth),oe)if(g.layerUpdates.size>0){const le=Tc(ue.width,ue.height,g.format,g.type);for(const te of g.layerUpdates){const xe=ue.data.subarray(te*le/ue.data.BYTES_PER_ELEMENT,(te+1)*le/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,ue.width,ue.height,1,_e,Pe,xe)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,_e,Pe,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,ue.width,ue.height,ue.depth,0,_e,Pe,ue.data);else if(g.isData3DTexture)b?(j&&t.texStorage3D(n.TEXTURE_3D,ve,we,ue.width,ue.height,ue.depth),oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,_e,Pe,ue.data)):t.texImage3D(n.TEXTURE_3D,0,we,ue.width,ue.height,ue.depth,0,_e,Pe,ue.data);else if(g.isFramebufferTexture){if(j)if(b)t.texStorage2D(n.TEXTURE_2D,ve,we,ue.width,ue.height);else{let le=ue.width,te=ue.height;for(let xe=0;xe<ve;xe++)t.texImage2D(n.TEXTURE_2D,xe,we,le,te,0,_e,Pe,null),le>>=1,te>>=1}}else if(B.length>0){if(b&&j){const le=Me(B[0]);t.texStorage2D(n.TEXTURE_2D,ve,we,le.width,le.height)}for(let le=0,te=B.length;le<te;le++)ge=B[le],b?oe&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,_e,Pe,ge):t.texImage2D(n.TEXTURE_2D,le,we,_e,Pe,ge);g.generateMipmaps=!1}else if(b){if(j){const le=Me(ue);t.texStorage2D(n.TEXTURE_2D,ve,we,le.width,le.height)}oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Pe,ue)}else t.texImage2D(n.TEXTURE_2D,0,we,_e,Pe,ue);m(g)&&h(H),ye.__version=V.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function ce(x,g,L){if(g.image.length!==6)return;const H=nt(x,g),J=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+L);const V=i.get(J);if(J.version!==V.__version||H===!0){t.activeTexture(n.TEXTURE0+L);const ye=tt.getPrimaries(tt.workingColorSpace),he=g.colorSpace===ei?null:tt.getPrimaries(g.colorSpace),be=g.colorSpace===ei||ye===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ae=g.isCompressedTexture||g.image[0].isCompressedTexture,ue=g.image[0]&&g.image[0].isDataTexture,_e=[];for(let te=0;te<6;te++)!Ae&&!ue?_e[te]=M(g.image[te],!0,s.maxCubemapSize):_e[te]=ue?g.image[te].image:g.image[te],_e[te]=re(g,_e[te]);const Pe=_e[0],we=r.convert(g.format,g.colorSpace),ge=r.convert(g.type),B=A(g.internalFormat,we,ge,g.colorSpace),b=g.isVideoTexture!==!0,j=V.__version===void 0||H===!0,oe=J.dataReady;let ve=C(g,Pe);Be(n.TEXTURE_CUBE_MAP,g);let le;if(Ae){b&&j&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,B,Pe.width,Pe.height);for(let te=0;te<6;te++){le=_e[te].mipmaps;for(let xe=0;xe<le.length;xe++){const Ne=le[xe];g.format!==cn?we!==null?b?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,0,0,Ne.width,Ne.height,we,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,B,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):b?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,0,0,Ne.width,Ne.height,we,ge,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,B,Ne.width,Ne.height,0,we,ge,Ne.data)}}}else{if(le=g.mipmaps,b&&j){le.length>0&&ve++;const te=Me(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,B,te.width,te.height)}for(let te=0;te<6;te++)if(ue){b?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,_e[te].width,_e[te].height,we,ge,_e[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,B,_e[te].width,_e[te].height,0,we,ge,_e[te].data);for(let xe=0;xe<le.length;xe++){const Ye=le[xe].image[te].image;b?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,0,0,Ye.width,Ye.height,we,ge,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,B,Ye.width,Ye.height,0,we,ge,Ye.data)}}else{b?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,we,ge,_e[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,B,we,ge,_e[te]);for(let xe=0;xe<le.length;xe++){const Ne=le[xe];b?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,0,0,we,ge,Ne.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,B,we,ge,Ne.image[te])}}}m(g)&&h(n.TEXTURE_CUBE_MAP),V.__version=J.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function Ce(x,g,L,H,J,V){const ye=r.convert(L.format,L.colorSpace),he=r.convert(L.type),be=A(L.internalFormat,ye,he,L.colorSpace),Ae=i.get(g),ue=i.get(L);if(ue.__renderTarget=g,!Ae.__hasExternalTextures){const _e=Math.max(1,g.width>>V),Pe=Math.max(1,g.height>>V);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,V,be,_e,Pe,g.depth,0,ye,he,null):t.texImage2D(J,V,be,_e,Pe,0,ye,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),X(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,J,ue.__webglTexture,0,fe(g)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,J,ue.__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(x,g,L){if(n.bindRenderbuffer(n.RENDERBUFFER,x),g.depthBuffer){const H=g.depthTexture,J=H&&H.isDepthTexture?H.type:null,V=E(g.stencilBuffer,J),ye=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=fe(g);X(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,V,g.width,g.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,V,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,V,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,x)}else{const H=g.textures;for(let J=0;J<H.length;J++){const V=H[J],ye=r.convert(V.format,V.colorSpace),he=r.convert(V.type),be=A(V.internalFormat,ye,he,V.colorSpace),Ae=fe(g);L&&X(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,be,g.width,g.height):X(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,be,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,be,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(x,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=i.get(g.depthTexture);H.__renderTarget=g,(!H.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),se(g.depthTexture,0);const J=H.__webglTexture,V=fe(g);if(g.depthTexture.format===Bs)X(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(g.depthTexture.format===zs)X(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ke(x){const g=i.get(x),L=x.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==x.depthTexture){const H=x.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),H){const J=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,H.removeEventListener("dispose",J)};H.addEventListener("dispose",J),g.__depthDisposeCallback=J}g.__boundDepthTexture=H}if(x.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");const H=x.texture.mipmaps;H&&H.length>0?Re(g.__webglFramebuffer[0],x):Re(g.__webglFramebuffer,x)}else if(L){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]===void 0)g.__webglDepthbuffer[H]=n.createRenderbuffer(),ze(g.__webglDepthbuffer[H],x,!1);else{const J=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,V)}}else{const H=x.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),ze(g.__webglDepthbuffer,x,!1);else{const J=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,V)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function w(x,g,L){const H=i.get(x);g!==void 0&&Ce(H.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Ke(x)}function _(x){const g=x.texture,L=i.get(x),H=i.get(g);x.addEventListener("dispose",P);const J=x.textures,V=x.isWebGLCubeRenderTarget===!0,ye=J.length>1;if(ye||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=g.version,o.memory.textures++),V){L.__webglFramebuffer=[];for(let he=0;he<6;he++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[he]=[];for(let be=0;be<g.mipmaps.length;be++)L.__webglFramebuffer[he][be]=n.createFramebuffer()}else L.__webglFramebuffer[he]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let he=0;he<g.mipmaps.length;he++)L.__webglFramebuffer[he]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ye)for(let he=0,be=J.length;he<be;he++){const Ae=i.get(J[he]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),o.memory.textures++)}if(x.samples>0&&X(x)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let he=0;he<J.length;he++){const be=J[he];L.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[he]);const Ae=r.convert(be.format,be.colorSpace),ue=r.convert(be.type),_e=A(be.internalFormat,Ae,ue,be.colorSpace,x.isXRRenderTarget===!0),Pe=fe(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,_e,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,L.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),ze(L.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),Be(n.TEXTURE_CUBE_MAP,g);for(let he=0;he<6;he++)if(g.mipmaps&&g.mipmaps.length>0)for(let be=0;be<g.mipmaps.length;be++)Ce(L.__webglFramebuffer[he][be],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,be);else Ce(L.__webglFramebuffer[he],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(g)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let he=0,be=J.length;he<be;he++){const Ae=J[he],ue=i.get(Ae);let _e=n.TEXTURE_2D;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(_e=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,ue.__webglTexture),Be(_e,Ae),Ce(L.__webglFramebuffer,x,Ae,n.COLOR_ATTACHMENT0+he,_e,0),m(Ae)&&h(_e)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(he=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,H.__webglTexture),Be(he,g),g.mipmaps&&g.mipmaps.length>0)for(let be=0;be<g.mipmaps.length;be++)Ce(L.__webglFramebuffer[be],x,g,n.COLOR_ATTACHMENT0,he,be);else Ce(L.__webglFramebuffer,x,g,n.COLOR_ATTACHMENT0,he,0);m(g)&&h(he),t.unbindTexture()}x.depthBuffer&&Ke(x)}function k(x){const g=x.textures;for(let L=0,H=g.length;L<H;L++){const J=g[L];if(m(J)){const V=R(x),ye=i.get(J).__webglTexture;t.bindTexture(V,ye),h(V),t.unbindTexture()}}}const $=[],G=[];function F(x){if(x.samples>0){if(X(x)===!1){const g=x.textures,L=x.width,H=x.height;let J=n.COLOR_BUFFER_BIT;const V=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(x),he=g.length>1;if(he)for(let Ae=0;Ae<g.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const be=x.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Ae=0;Ae<g.length;Ae++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Ae]);const ue=i.get(g[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,L,H,0,0,L,H,J,n.NEAREST),l===!0&&($.length=0,G.length=0,$.push(n.COLOR_ATTACHMENT0+Ae),x.depthBuffer&&x.resolveDepthBuffer===!1&&($.push(V),G.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,G)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Ae=0;Ae<g.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Ae]);const ue=i.get(g[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const g=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function fe(x){return Math.min(s.maxSamples,x.samples)}function X(x){const g=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ee(x){const g=o.render.frame;u.get(x)!==g&&(u.set(x,g),x.update())}function re(x,g){const L=x.colorSpace,H=x.format,J=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||L!==os&&L!==ei&&(tt.getTransfer(L)===at?(H!==cn||J!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),g}function Me(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=W,this.setTexture2D=se,this.setTexture2DArray=Q,this.setTexture3D=ne,this.setTextureCube=z,this.rebindTextures=w,this.setupRenderTarget=_,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=X}function mx(n,e){function t(i,s=ei){let r;const o=tt.getTransfer(s);if(i===Hn)return n.UNSIGNED_BYTE;if(i===cl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ul)return n.UNSIGNED_SHORT_5_5_5_1;if(i===tf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===nf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qu)return n.BYTE;if(i===ef)return n.SHORT;if(i===Fs)return n.UNSIGNED_SHORT;if(i===ll)return n.INT;if(i===Ri)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===Gs)return n.HALF_FLOAT;if(i===sf)return n.ALPHA;if(i===rf)return n.RGB;if(i===cn)return n.RGBA;if(i===Bs)return n.DEPTH_COMPONENT;if(i===zs)return n.DEPTH_STENCIL;if(i===of)return n.RED;if(i===fl)return n.RED_INTEGER;if(i===af)return n.RG;if(i===hl)return n.RG_INTEGER;if(i===dl)return n.RGBA_INTEGER;if(i===br||i===Ar||i===wr||i===Rr)if(o===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ha||i===da||i===pa||i===ma)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ga||i===_a||i===va)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ga||i===_a)return o===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===va)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xa||i===Sa||i===Ma||i===Ea||i===ya||i===Ta||i===ba||i===Aa||i===wa||i===Ra||i===Ca||i===Pa||i===Da||i===La)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xa)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sa)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ma)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ea)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ya)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ta)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ba)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Aa)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wa)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ra)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ca)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pa)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Da)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===La)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ia||i===Ua||i===Na)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ia)return o===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ua)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Na)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fa||i===Oa||i===Ba||i===za)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Oa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Os?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const gx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_x=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Sf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new li({vertexShader:gx,fragmentShader:_x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Sn(new Zr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xx extends cs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,v=null;const M=typeof XRWebGLBinding<"u",m=new vx,h={},R=t.getContextAttributes();let A=null,E=null;const C=[],D=[],P=new ct;let O=null;const T=new nn;T.viewport=new xt;const y=new nn;y.viewport=new xt;const I=[T,y],W=new Hm;let Z=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ce=C[ie];return ce===void 0&&(ce=new No,C[ie]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ie){let ce=C[ie];return ce===void 0&&(ce=new No,C[ie]=ce),ce.getGripSpace()},this.getHand=function(ie){let ce=C[ie];return ce===void 0&&(ce=new No,C[ie]=ce),ce.getHandSpace()};function se(ie){const ce=D.indexOf(ie.inputSource);if(ce===-1)return;const Ce=C[ce];Ce!==void 0&&(Ce.update(ie.inputSource,ie.frame,c||o),Ce.dispatchEvent({type:ie.type,data:ie.inputSource}))}function Q(){s.removeEventListener("select",se),s.removeEventListener("selectstart",se),s.removeEventListener("selectend",se),s.removeEventListener("squeeze",se),s.removeEventListener("squeezestart",se),s.removeEventListener("squeezeend",se),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",ne);for(let ie=0;ie<C.length;ie++){const ce=D[ie];ce!==null&&(D[ie]=null,C[ie].disconnect(ce))}Z=null,ae=null,m.reset();for(const ie in h)delete h[ie];e.setRenderTarget(A),p=null,d=null,f=null,s=null,E=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",se),s.addEventListener("selectstart",se),s.addEventListener("selectend",se),s.addEventListener("squeeze",se),s.addEventListener("squeezestart",se),s.addEventListener("squeezeend",se),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",ne),R.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(P),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,ze=null,Re=null;R.depth&&(Re=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=R.stencil?zs:Bs,ze=R.stencil?Os:Ri);const Ke={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Ke),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Ci(d.textureWidth,d.textureHeight,{format:cn,type:Hn,depthTexture:new xf(d.textureWidth,d.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Ce={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ce),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Ci(p.framebufferWidth,p.framebufferHeight,{format:cn,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Qe.setContext(s),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(ie){for(let ce=0;ce<ie.removed.length;ce++){const Ce=ie.removed[ce],ze=D.indexOf(Ce);ze>=0&&(D[ze]=null,C[ze].disconnect(Ce))}for(let ce=0;ce<ie.added.length;ce++){const Ce=ie.added[ce];let ze=D.indexOf(Ce);if(ze===-1){for(let Ke=0;Ke<C.length;Ke++)if(Ke>=D.length){D.push(Ce),ze=Ke;break}else if(D[Ke]===null){D[Ke]=Ce,ze=Ke;break}if(ze===-1)break}const Re=C[ze];Re&&Re.connect(Ce)}}const z=new Y,me=new Y;function Ee(ie,ce,Ce){z.setFromMatrixPosition(ce.matrixWorld),me.setFromMatrixPosition(Ce.matrixWorld);const ze=z.distanceTo(me),Re=ce.projectionMatrix.elements,Ke=Ce.projectionMatrix.elements,w=Re[14]/(Re[10]-1),_=Re[14]/(Re[10]+1),k=(Re[9]+1)/Re[5],$=(Re[9]-1)/Re[5],G=(Re[8]-1)/Re[0],F=(Ke[8]+1)/Ke[0],fe=w*G,X=w*F,ee=ze/(-G+F),re=ee*-G;if(ce.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(re),ie.translateZ(ee),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Re[10]===-1)ie.projectionMatrix.copy(ce.projectionMatrix),ie.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Me=w+ee,x=_+ee,g=fe-re,L=X+(ze-re),H=k*_/x*Me,J=$*_/x*Me;ie.projectionMatrix.makePerspective(g,L,H,J,Me,x),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function Le(ie,ce){ce===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ce.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let ce=ie.near,Ce=ie.far;m.texture!==null&&(m.depthNear>0&&(ce=m.depthNear),m.depthFar>0&&(Ce=m.depthFar)),W.near=y.near=T.near=ce,W.far=y.far=T.far=Ce,(Z!==W.near||ae!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),Z=W.near,ae=W.far),W.layers.mask=ie.layers.mask|6,T.layers.mask=W.layers.mask&3,y.layers.mask=W.layers.mask&5;const ze=ie.parent,Re=W.cameras;Le(W,ze);for(let Ke=0;Ke<Re.length;Ke++)Le(Re[Ke],ze);Re.length===2?Ee(W,T,y):W.projectionMatrix.copy(T.projectionMatrix),Be(ie,W,ze)};function Be(ie,ce,Ce){Ce===null?ie.matrix.copy(ce.matrixWorld):(ie.matrix.copy(Ce.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ce.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ce.projectionMatrix),ie.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Ha*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ie){l=ie,d!==null&&(d.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(ie){return h[ie]};let nt=null;function rt(ie,ce){if(u=ce.getViewerPose(c||o),v=ce,u!==null){const Ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let ze=!1;Ce.length!==W.cameras.length&&(W.cameras.length=0,ze=!0);for(let _=0;_<Ce.length;_++){const k=Ce[_];let $=null;if(p!==null)$=p.getViewport(k);else{const F=f.getViewSubImage(d,k);$=F.viewport,_===0&&(e.setRenderTargetTextures(E,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(E))}let G=I[_];G===void 0&&(G=new nn,G.layers.enable(_),G.viewport=new xt,I[_]=G),G.matrix.fromArray(k.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(k.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set($.x,$.y,$.width,$.height),_===0&&(W.matrix.copy(G.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),ze===!0&&W.cameras.push(G)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=i.getBinding();const _=f.getDepthInformation(Ce[0]);_&&_.isValid&&_.texture&&m.init(_,s.renderState)}if(Re&&Re.includes("camera-access")&&M){e.state.unbindTexture(),f=i.getBinding();for(let _=0;_<Ce.length;_++){const k=Ce[_].camera;if(k){let $=h[k];$||($=new Sf,h[k]=$);const G=f.getCameraImage(k);$.sourceTexture=G}}}}for(let Ce=0;Ce<C.length;Ce++){const ze=D[Ce],Re=C[Ce];ze!==null&&Re!==void 0&&Re.update(ze,ce,c||o)}nt&&nt(ie,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),v=null}const Qe=new Mf;Qe.setAnimationLoop(rt),this.setAnimationLoop=function(ie){nt=ie},this.dispose=function(){}}}const vi=new Vn,Sx=new Et;function Mx(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,mf(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,R,A,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),f(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,E)):h.isMeshMatcapMaterial?(r(m,h),v(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),M(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,R,A):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===kt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===kt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const R=e.get(h),A=R.envMap,E=R.envMapRotation;A&&(m.envMap.value=A,vi.copy(E),vi.x*=-1,vi.y*=-1,vi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(Sx.makeRotationFromEuler(vi)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,R,A){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*R,m.scale.value=A*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,R){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===kt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function M(m,h){const R=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ex(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,A){const E=A.program;i.uniformBlockBinding(R,E)}function c(R,A){let E=s[R.id];E===void 0&&(v(R),E=u(R),s[R.id]=E,R.addEventListener("dispose",m));const C=A.program;i.updateUBOMapping(R,C);const D=e.render.frame;r[R.id]!==D&&(d(R),r[R.id]=D)}function u(R){const A=f();R.__bindingPointIndex=A;const E=n.createBuffer(),C=R.__size,D=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,C,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,E),E}function f(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const A=s[R.id],E=R.uniforms,C=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let D=0,P=E.length;D<P;D++){const O=Array.isArray(E[D])?E[D]:[E[D]];for(let T=0,y=O.length;T<y;T++){const I=O[T];if(p(I,D,T,C)===!0){const W=I.__offset,Z=Array.isArray(I.value)?I.value:[I.value];let ae=0;for(let se=0;se<Z.length;se++){const Q=Z[se],ne=M(Q);typeof Q=="number"||typeof Q=="boolean"?(I.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,W+ae,I.__data)):Q.isMatrix3?(I.__data[0]=Q.elements[0],I.__data[1]=Q.elements[1],I.__data[2]=Q.elements[2],I.__data[3]=0,I.__data[4]=Q.elements[3],I.__data[5]=Q.elements[4],I.__data[6]=Q.elements[5],I.__data[7]=0,I.__data[8]=Q.elements[6],I.__data[9]=Q.elements[7],I.__data[10]=Q.elements[8],I.__data[11]=0):(Q.toArray(I.__data,ae),ae+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(R,A,E,C){const D=R.value,P=A+"_"+E;if(C[P]===void 0)return typeof D=="number"||typeof D=="boolean"?C[P]=D:C[P]=D.clone(),!0;{const O=C[P];if(typeof D=="number"||typeof D=="boolean"){if(O!==D)return C[P]=D,!0}else if(O.equals(D)===!1)return O.copy(D),!0}return!1}function v(R){const A=R.uniforms;let E=0;const C=16;for(let P=0,O=A.length;P<O;P++){const T=Array.isArray(A[P])?A[P]:[A[P]];for(let y=0,I=T.length;y<I;y++){const W=T[y],Z=Array.isArray(W.value)?W.value:[W.value];for(let ae=0,se=Z.length;ae<se;ae++){const Q=Z[ae],ne=M(Q),z=E%C,me=z%ne.boundary,Ee=z+me;E+=me,Ee!==0&&C-Ee<ne.storage&&(E+=C-Ee),W.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=E,E+=ne.storage}}}const D=E%C;return D>0&&(E+=C-D),R.__size=E,R.__cache={},this}function M(R){const A={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(A.boundary=4,A.storage=4):R.isVector2?(A.boundary=8,A.storage=8):R.isVector3||R.isColor?(A.boundary=16,A.storage=12):R.isVector4?(A.boundary=16,A.storage=16):R.isMatrix3?(A.boundary=48,A.storage=48):R.isMatrix4?(A.boundary=64,A.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),A}function m(R){const A=R.target;A.removeEventListener("dispose",m);const E=o.indexOf(A.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function h(){for(const R in s)n.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class yx{constructor(e={}){const{canvas:t=om(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),M=new Int32Array(4);let m=null,h=null;const R=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let C=!1;this._outputColorSpace=tn;let D=0,P=0,O=null,T=-1,y=null;const I=new xt,W=new xt;let Z=null;const ae=new lt(0);let se=0,Q=t.width,ne=t.height,z=1,me=null,Ee=null;const Le=new xt(0,0,Q,ne),Be=new xt(0,0,Q,ne);let nt=!1;const rt=new vf;let Qe=!1,ie=!1;const ce=new Et,Ce=new Y,ze=new xt,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function w(){return O===null?z:1}let _=i;function k(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${al}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",le,!1),_===null){const U="webgl2";if(_=k(U,S),_===null)throw k(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let $,G,F,fe,X,ee,re,Me,x,g,L,H,J,V,ye,he,be,Ae,ue,_e,Pe,we,ge,B;function b(){$=new Iv(_),$.init(),we=new mx(_,$),G=new Av(_,$,e,we),F=new dx(_,$),G.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),fe=new Fv(_),X=new ex,ee=new px(_,$,F,X,G,we,fe),re=new Rv(E),Me=new Lv(E),x=new km(_),ge=new Tv(_,x),g=new Uv(_,x,fe,ge),L=new Bv(_,g,x,fe),ue=new Ov(_,G,ee),he=new wv(X),H=new Q0(E,re,Me,$,G,ge,he),J=new Mx(E,X),V=new nx,ye=new lx($),Ae=new yv(E,re,Me,F,L,p,l),be=new fx(E,L,G),B=new Ex(_,fe,G,F),_e=new bv(_,$,fe),Pe=new Nv(_,$,fe),fe.programs=H.programs,E.capabilities=G,E.extensions=$,E.properties=X,E.renderLists=V,E.shadowMap=be,E.state=F,E.info=fe}b();const j=new xx(E,_);this.xr=j,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const S=$.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=$.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(S){S!==void 0&&(z=S,this.setSize(Q,ne,!1))},this.getSize=function(S){return S.set(Q,ne)},this.setSize=function(S,U,q=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=S,ne=U,t.width=Math.floor(S*z),t.height=Math.floor(U*z),q===!0&&(t.style.width=S+"px",t.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(Q*z,ne*z).floor()},this.setDrawingBufferSize=function(S,U,q){Q=S,ne=U,z=q,t.width=Math.floor(S*q),t.height=Math.floor(U*q),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(Le)},this.setViewport=function(S,U,q,K){S.isVector4?Le.set(S.x,S.y,S.z,S.w):Le.set(S,U,q,K),F.viewport(I.copy(Le).multiplyScalar(z).round())},this.getScissor=function(S){return S.copy(Be)},this.setScissor=function(S,U,q,K){S.isVector4?Be.set(S.x,S.y,S.z,S.w):Be.set(S,U,q,K),F.scissor(W.copy(Be).multiplyScalar(z).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(S){F.setScissorTest(nt=S)},this.setOpaqueSort=function(S){me=S},this.setTransparentSort=function(S){Ee=S},this.getClearColor=function(S){return S.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,q=!0){let K=0;if(S){let N=!1;if(O!==null){const pe=O.texture.format;N=pe===dl||pe===hl||pe===fl}if(N){const pe=O.texture.type,Te=pe===Hn||pe===Ri||pe===Fs||pe===Os||pe===cl||pe===ul,Ie=Ae.getClearColor(),De=Ae.getClearAlpha(),He=Ie.r,Ve=Ie.g,Fe=Ie.b;Te?(v[0]=He,v[1]=Ve,v[2]=Fe,v[3]=De,_.clearBufferuiv(_.COLOR,0,v)):(M[0]=He,M[1]=Ve,M[2]=Fe,M[3]=De,_.clearBufferiv(_.COLOR,0,M))}else K|=_.COLOR_BUFFER_BIT}U&&(K|=_.DEPTH_BUFFER_BIT),q&&(K|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Ae.dispose(),V.dispose(),ye.dispose(),X.dispose(),re.dispose(),Me.dispose(),L.dispose(),ge.dispose(),B.dispose(),H.dispose(),j.dispose(),j.removeEventListener("sessionstart",At),j.removeEventListener("sessionend",vl),ci.stop()};function oe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const S=fe.autoReset,U=be.enabled,q=be.autoUpdate,K=be.needsUpdate,N=be.type;b(),fe.autoReset=S,be.enabled=U,be.autoUpdate=q,be.needsUpdate=K,be.type=N}function le(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function te(S){const U=S.target;U.removeEventListener("dispose",te),xe(U)}function xe(S){Ne(S),X.remove(S)}function Ne(S){const U=X.get(S).programs;U!==void 0&&(U.forEach(function(q){H.releaseProgram(q)}),S.isShaderMaterial&&H.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,q,K,N,pe){U===null&&(U=Re);const Te=N.isMesh&&N.matrixWorld.determinant()<0,Ie=Af(S,U,q,K,N);F.setMaterial(K,Te);let De=q.index,He=1;if(K.wireframe===!0){if(De=g.getWireframeAttribute(q),De===void 0)return;He=2}const Ve=q.drawRange,Fe=q.attributes.position;let $e=Ve.start*He,ot=(Ve.start+Ve.count)*He;pe!==null&&($e=Math.max($e,pe.start*He),ot=Math.min(ot,(pe.start+pe.count)*He)),De!==null?($e=Math.max($e,0),ot=Math.min(ot,De.count)):Fe!=null&&($e=Math.max($e,0),ot=Math.min(ot,Fe.count));const _t=ot-$e;if(_t<0||_t===1/0)return;ge.setup(N,K,Ie,q,De);let dt,ut=_e;if(De!==null&&(dt=x.get(De),ut=Pe,ut.setIndex(dt)),N.isMesh)K.wireframe===!0?(F.setLineWidth(K.wireframeLinewidth*w()),ut.setMode(_.LINES)):ut.setMode(_.TRIANGLES);else if(N.isLine){let Oe=K.linewidth;Oe===void 0&&(Oe=1),F.setLineWidth(Oe*w()),N.isLineSegments?ut.setMode(_.LINES):N.isLineLoop?ut.setMode(_.LINE_LOOP):ut.setMode(_.LINE_STRIP)}else N.isPoints?ut.setMode(_.POINTS):N.isSprite&&ut.setMode(_.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Hs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if($.get("WEBGL_multi_draw"))ut.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Oe=N._multiDrawStarts,mt=N._multiDrawCounts,et=N._multiDrawCount,Wt=De?x.get(De).bytesPerElement:1,Li=X.get(K).currentProgram.getUniforms();for(let Xt=0;Xt<et;Xt++)Li.setValue(_,"_gl_DrawID",Xt),ut.render(Oe[Xt]/Wt,mt[Xt])}else if(N.isInstancedMesh)ut.renderInstances($e,_t,N.count);else if(q.isInstancedBufferGeometry){const Oe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,mt=Math.min(q.instanceCount,Oe);ut.renderInstances($e,_t,mt)}else ut.render($e,_t)};function Ye(S,U,q){S.transparent===!0&&S.side===Nn&&S.forceSinglePass===!1?(S.side=kt,S.needsUpdate=!0,Ks(S,U,q),S.side=ai,S.needsUpdate=!0,Ks(S,U,q),S.side=Nn):Ks(S,U,q)}this.compile=function(S,U,q=null){q===null&&(q=S),h=ye.get(q),h.init(U),A.push(h),q.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),S!==q&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights();const K=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const pe=N.material;if(pe)if(Array.isArray(pe))for(let Te=0;Te<pe.length;Te++){const Ie=pe[Te];Ye(Ie,q,N),K.add(Ie)}else Ye(pe,q,N),K.add(pe)}),h=A.pop(),K},this.compileAsync=function(S,U,q=null){const K=this.compile(S,U,q);return new Promise(N=>{function pe(){if(K.forEach(function(Te){X.get(Te).currentProgram.isReady()&&K.delete(Te)}),K.size===0){N(S);return}setTimeout(pe,10)}$.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let We=null;function pt(S){We&&We(S)}function At(){ci.stop()}function vl(){ci.start()}const ci=new Mf;ci.setAnimationLoop(pt),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(S){We=S,j.setAnimationLoop(S),S===null?ci.stop():ci.start()},j.addEventListener("sessionstart",At),j.addEventListener("sessionend",vl),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(U),U=j.getCamera()),S.isScene===!0&&S.onBeforeRender(E,S,U,O),h=ye.get(S,A.length),h.init(U),A.push(h),ce.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),rt.setFromProjectionMatrix(ce,xn,U.reversedDepth),ie=this.localClippingEnabled,Qe=he.init(this.clippingPlanes,ie),m=V.get(S,R.length),m.init(),R.push(m),j.enabled===!0&&j.isPresenting===!0){const pe=E.xr.getDepthSensingMesh();pe!==null&&Qr(pe,U,-1/0,E.sortObjects)}Qr(S,U,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(me,Ee),Ke=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Ke&&Ae.addToRenderList(m,S),this.info.render.frame++,Qe===!0&&he.beginShadows();const q=h.state.shadowsArray;be.render(q,S,U),Qe===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,N=m.transmissive;if(h.setupLights(),U.isArrayCamera){const pe=U.cameras;if(N.length>0)for(let Te=0,Ie=pe.length;Te<Ie;Te++){const De=pe[Te];Sl(K,N,S,De)}Ke&&Ae.render(S);for(let Te=0,Ie=pe.length;Te<Ie;Te++){const De=pe[Te];xl(m,S,De,De.viewport)}}else N.length>0&&Sl(K,N,S,U),Ke&&Ae.render(S),xl(m,S,U);O!==null&&P===0&&(ee.updateMultisampleRenderTarget(O),ee.updateRenderTargetMipmap(O)),S.isScene===!0&&S.onAfterRender(E,S,U),ge.resetDefaultState(),T=-1,y=null,A.pop(),A.length>0?(h=A[A.length-1],Qe===!0&&he.setGlobalState(E.clippingPlanes,h.state.camera)):h=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function Qr(S,U,q,K){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||rt.intersectsSprite(S)){K&&ze.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ce);const Te=L.update(S),Ie=S.material;Ie.visible&&m.push(S,Te,Ie,q,ze.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||rt.intersectsObject(S))){const Te=L.update(S),Ie=S.material;if(K&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ze.copy(S.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ze.copy(Te.boundingSphere.center)),ze.applyMatrix4(S.matrixWorld).applyMatrix4(ce)),Array.isArray(Ie)){const De=Te.groups;for(let He=0,Ve=De.length;He<Ve;He++){const Fe=De[He],$e=Ie[Fe.materialIndex];$e&&$e.visible&&m.push(S,Te,$e,q,ze.z,Fe)}}else Ie.visible&&m.push(S,Te,Ie,q,ze.z,null)}}const pe=S.children;for(let Te=0,Ie=pe.length;Te<Ie;Te++)Qr(pe[Te],U,q,K)}function xl(S,U,q,K){const N=S.opaque,pe=S.transmissive,Te=S.transparent;h.setupLightsView(q),Qe===!0&&he.setGlobalState(E.clippingPlanes,q),K&&F.viewport(I.copy(K)),N.length>0&&Ys(N,U,q),pe.length>0&&Ys(pe,U,q),Te.length>0&&Ys(Te,U,q),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Sl(S,U,q,K){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[K.id]===void 0&&(h.state.transmissionRenderTarget[K.id]=new Ci(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?Gs:Hn,minFilter:bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const pe=h.state.transmissionRenderTarget[K.id],Te=K.viewport||I;pe.setSize(Te.z*E.transmissionResolutionScale,Te.w*E.transmissionResolutionScale);const Ie=E.getRenderTarget(),De=E.getActiveCubeFace(),He=E.getActiveMipmapLevel();E.setRenderTarget(pe),E.getClearColor(ae),se=E.getClearAlpha(),se<1&&E.setClearColor(16777215,.5),E.clear(),Ke&&Ae.render(q);const Ve=E.toneMapping;E.toneMapping=ii;const Fe=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),h.setupLightsView(K),Qe===!0&&he.setGlobalState(E.clippingPlanes,K),Ys(S,q,K),ee.updateMultisampleRenderTarget(pe),ee.updateRenderTargetMipmap(pe),$.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let ot=0,_t=U.length;ot<_t;ot++){const dt=U[ot],ut=dt.object,Oe=dt.geometry,mt=dt.material,et=dt.group;if(mt.side===Nn&&ut.layers.test(K.layers)){const Wt=mt.side;mt.side=kt,mt.needsUpdate=!0,Ml(ut,q,K,Oe,mt,et),mt.side=Wt,mt.needsUpdate=!0,$e=!0}}$e===!0&&(ee.updateMultisampleRenderTarget(pe),ee.updateRenderTargetMipmap(pe))}E.setRenderTarget(Ie,De,He),E.setClearColor(ae,se),Fe!==void 0&&(K.viewport=Fe),E.toneMapping=Ve}function Ys(S,U,q){const K=U.isScene===!0?U.overrideMaterial:null;for(let N=0,pe=S.length;N<pe;N++){const Te=S[N],Ie=Te.object,De=Te.geometry,He=Te.group;let Ve=Te.material;Ve.allowOverride===!0&&K!==null&&(Ve=K),Ie.layers.test(q.layers)&&Ml(Ie,U,q,De,Ve,He)}}function Ml(S,U,q,K,N,pe){S.onBeforeRender(E,U,q,K,N,pe),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(E,U,q,K,S,pe),N.transparent===!0&&N.side===Nn&&N.forceSinglePass===!1?(N.side=kt,N.needsUpdate=!0,E.renderBufferDirect(q,U,K,N,S,pe),N.side=ai,N.needsUpdate=!0,E.renderBufferDirect(q,U,K,N,S,pe),N.side=Nn):E.renderBufferDirect(q,U,K,N,S,pe),S.onAfterRender(E,U,q,K,N,pe)}function Ks(S,U,q){U.isScene!==!0&&(U=Re);const K=X.get(S),N=h.state.lights,pe=h.state.shadowsArray,Te=N.state.version,Ie=H.getParameters(S,N.state,pe,U,q),De=H.getProgramCacheKey(Ie);let He=K.programs;K.environment=S.isMeshStandardMaterial?U.environment:null,K.fog=U.fog,K.envMap=(S.isMeshStandardMaterial?Me:re).get(S.envMap||K.environment),K.envMapRotation=K.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,He===void 0&&(S.addEventListener("dispose",te),He=new Map,K.programs=He);let Ve=He.get(De);if(Ve!==void 0){if(K.currentProgram===Ve&&K.lightsStateVersion===Te)return yl(S,Ie),Ve}else Ie.uniforms=H.getUniforms(S),S.onBeforeCompile(Ie,E),Ve=H.acquireProgram(Ie,De),He.set(De,Ve),K.uniforms=Ie.uniforms;const Fe=K.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Fe.clippingPlanes=he.uniform),yl(S,Ie),K.needsLights=Rf(S),K.lightsStateVersion=Te,K.needsLights&&(Fe.ambientLightColor.value=N.state.ambient,Fe.lightProbe.value=N.state.probe,Fe.directionalLights.value=N.state.directional,Fe.directionalLightShadows.value=N.state.directionalShadow,Fe.spotLights.value=N.state.spot,Fe.spotLightShadows.value=N.state.spotShadow,Fe.rectAreaLights.value=N.state.rectArea,Fe.ltc_1.value=N.state.rectAreaLTC1,Fe.ltc_2.value=N.state.rectAreaLTC2,Fe.pointLights.value=N.state.point,Fe.pointLightShadows.value=N.state.pointShadow,Fe.hemisphereLights.value=N.state.hemi,Fe.directionalShadowMap.value=N.state.directionalShadowMap,Fe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Fe.spotShadowMap.value=N.state.spotShadowMap,Fe.spotLightMatrix.value=N.state.spotLightMatrix,Fe.spotLightMap.value=N.state.spotLightMap,Fe.pointShadowMap.value=N.state.pointShadowMap,Fe.pointShadowMatrix.value=N.state.pointShadowMatrix),K.currentProgram=Ve,K.uniformsList=null,Ve}function El(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Cr.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function yl(S,U){const q=X.get(S);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function Af(S,U,q,K,N){U.isScene!==!0&&(U=Re),ee.resetTextureUnits();const pe=U.fog,Te=K.isMeshStandardMaterial?U.environment:null,Ie=O===null?E.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:os,De=(K.isMeshStandardMaterial?Me:re).get(K.envMap||Te),He=K.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ve=!!q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Fe=!!q.morphAttributes.position,$e=!!q.morphAttributes.normal,ot=!!q.morphAttributes.color;let _t=ii;K.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(_t=E.toneMapping);const dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ut=dt!==void 0?dt.length:0,Oe=X.get(K),mt=h.state.lights;if(Qe===!0&&(ie===!0||S!==y)){const It=S===y&&K.id===T;he.setState(K,S,It)}let et=!1;K.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==mt.state.version||Oe.outputColorSpace!==Ie||N.isBatchedMesh&&Oe.batching===!1||!N.isBatchedMesh&&Oe.batching===!0||N.isBatchedMesh&&Oe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Oe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Oe.instancing===!1||!N.isInstancedMesh&&Oe.instancing===!0||N.isSkinnedMesh&&Oe.skinning===!1||!N.isSkinnedMesh&&Oe.skinning===!0||N.isInstancedMesh&&Oe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Oe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Oe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Oe.instancingMorph===!1&&N.morphTexture!==null||Oe.envMap!==De||K.fog===!0&&Oe.fog!==pe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==he.numPlanes||Oe.numIntersection!==he.numIntersection)||Oe.vertexAlphas!==He||Oe.vertexTangents!==Ve||Oe.morphTargets!==Fe||Oe.morphNormals!==$e||Oe.morphColors!==ot||Oe.toneMapping!==_t||Oe.morphTargetsCount!==ut)&&(et=!0):(et=!0,Oe.__version=K.version);let Wt=Oe.currentProgram;et===!0&&(Wt=Ks(K,U,N));let Li=!1,Xt=!1,hs=!1;const gt=Wt.getUniforms(),Zt=Oe.uniforms;if(F.useProgram(Wt.program)&&(Li=!0,Xt=!0,hs=!0),K.id!==T&&(T=K.id,Xt=!0),Li||y!==S){F.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),gt.setValue(_,"projectionMatrix",S.projectionMatrix),gt.setValue(_,"viewMatrix",S.matrixWorldInverse);const zt=gt.map.cameraPosition;zt!==void 0&&zt.setValue(_,Ce.setFromMatrixPosition(S.matrixWorld)),G.logarithmicDepthBuffer&&gt.setValue(_,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&gt.setValue(_,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,Xt=!0,hs=!0)}if(N.isSkinnedMesh){gt.setOptional(_,N,"bindMatrix"),gt.setOptional(_,N,"bindMatrixInverse");const It=N.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),gt.setValue(_,"boneTexture",It.boneTexture,ee))}N.isBatchedMesh&&(gt.setOptional(_,N,"batchingTexture"),gt.setValue(_,"batchingTexture",N._matricesTexture,ee),gt.setOptional(_,N,"batchingIdTexture"),gt.setValue(_,"batchingIdTexture",N._indirectTexture,ee),gt.setOptional(_,N,"batchingColorTexture"),N._colorsTexture!==null&&gt.setValue(_,"batchingColorTexture",N._colorsTexture,ee));const Jt=q.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&ue.update(N,q,Wt),(Xt||Oe.receiveShadow!==N.receiveShadow)&&(Oe.receiveShadow=N.receiveShadow,gt.setValue(_,"receiveShadow",N.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Zt.envMap.value=De,Zt.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&U.environment!==null&&(Zt.envMapIntensity.value=U.environmentIntensity),Xt&&(gt.setValue(_,"toneMappingExposure",E.toneMappingExposure),Oe.needsLights&&wf(Zt,hs),pe&&K.fog===!0&&J.refreshFogUniforms(Zt,pe),J.refreshMaterialUniforms(Zt,K,z,ne,h.state.transmissionRenderTarget[S.id]),Cr.upload(_,El(Oe),Zt,ee)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Cr.upload(_,El(Oe),Zt,ee),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&gt.setValue(_,"center",N.center),gt.setValue(_,"modelViewMatrix",N.modelViewMatrix),gt.setValue(_,"normalMatrix",N.normalMatrix),gt.setValue(_,"modelMatrix",N.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const It=K.uniformsGroups;for(let zt=0,eo=It.length;zt<eo;zt++){const ui=It[zt];B.update(ui,Wt),B.bind(ui,Wt)}}return Wt}function wf(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Rf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(S,U,q){const K=X.get(S);K.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),X.get(S.texture).__webglTexture=U,X.get(S.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:q,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const q=X.get(S);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0};const Cf=_.createFramebuffer();this.setRenderTarget=function(S,U=0,q=0){O=S,D=U,P=q;let K=!0,N=null,pe=!1,Te=!1;if(S){const De=X.get(S);if(De.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(_.FRAMEBUFFER,null),K=!1;else if(De.__webglFramebuffer===void 0)ee.setupRenderTarget(S);else if(De.__hasExternalTextures)ee.rebindTextures(S,X.get(S.texture).__webglTexture,X.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Fe=S.depthTexture;if(De.__boundDepthTexture!==Fe){if(Fe!==null&&X.has(Fe)&&(S.width!==Fe.image.width||S.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(S)}}const He=S.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Te=!0);const Ve=X.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ve[U])?N=Ve[U][q]:N=Ve[U],pe=!0):S.samples>0&&ee.useMultisampledRTT(S)===!1?N=X.get(S).__webglMultisampledFramebuffer:Array.isArray(Ve)?N=Ve[q]:N=Ve,I.copy(S.viewport),W.copy(S.scissor),Z=S.scissorTest}else I.copy(Le).multiplyScalar(z).floor(),W.copy(Be).multiplyScalar(z).floor(),Z=nt;if(q!==0&&(N=Cf),F.bindFramebuffer(_.FRAMEBUFFER,N)&&K&&F.drawBuffers(S,N),F.viewport(I),F.scissor(W),F.setScissorTest(Z),pe){const De=X.get(S.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+U,De.__webglTexture,q)}else if(Te){const De=U;for(let He=0;He<S.textures.length;He++){const Ve=X.get(S.textures[He]);_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0+He,Ve.__webglTexture,q,De)}}else if(S!==null&&q!==0){const De=X.get(S.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,De.__webglTexture,q)}T=-1},this.readRenderTargetPixels=function(S,U,q,K,N,pe,Te,Ie=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=X.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Te!==void 0&&(De=De[Te]),De){F.bindFramebuffer(_.FRAMEBUFFER,De);try{const He=S.textures[Ie],Ve=He.format,Fe=He.type;if(!G.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!G.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-K&&q>=0&&q<=S.height-N&&(S.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Ie),_.readPixels(U,q,K,N,we.convert(Ve),we.convert(Fe),pe))}finally{const He=O!==null?X.get(O).__webglFramebuffer:null;F.bindFramebuffer(_.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(S,U,q,K,N,pe,Te,Ie=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=X.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Te!==void 0&&(De=De[Te]),De)if(U>=0&&U<=S.width-K&&q>=0&&q<=S.height-N){F.bindFramebuffer(_.FRAMEBUFFER,De);const He=S.textures[Ie],Ve=He.format,Fe=He.type;if(!G.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!G.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,$e),_.bufferData(_.PIXEL_PACK_BUFFER,pe.byteLength,_.STREAM_READ),S.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Ie),_.readPixels(U,q,K,N,we.convert(Ve),we.convert(Fe),0);const ot=O!==null?X.get(O).__webglFramebuffer:null;F.bindFramebuffer(_.FRAMEBUFFER,ot);const _t=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await am(_,_t,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,$e),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,pe),_.deleteBuffer($e),_.deleteSync(_t),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,q=0){const K=Math.pow(2,-q),N=Math.floor(S.image.width*K),pe=Math.floor(S.image.height*K),Te=U!==null?U.x:0,Ie=U!==null?U.y:0;ee.setTexture2D(S,0),_.copyTexSubImage2D(_.TEXTURE_2D,q,0,0,Te,Ie,N,pe),F.unbindTexture()};const Pf=_.createFramebuffer(),Df=_.createFramebuffer();this.copyTextureToTexture=function(S,U,q=null,K=null,N=0,pe=null){pe===null&&(N!==0?(Hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=N,N=0):pe=0);let Te,Ie,De,He,Ve,Fe,$e,ot,_t;const dt=S.isCompressedTexture?S.mipmaps[pe]:S.image;if(q!==null)Te=q.max.x-q.min.x,Ie=q.max.y-q.min.y,De=q.isBox3?q.max.z-q.min.z:1,He=q.min.x,Ve=q.min.y,Fe=q.isBox3?q.min.z:0;else{const Jt=Math.pow(2,-N);Te=Math.floor(dt.width*Jt),Ie=Math.floor(dt.height*Jt),S.isDataArrayTexture?De=dt.depth:S.isData3DTexture?De=Math.floor(dt.depth*Jt):De=1,He=0,Ve=0,Fe=0}K!==null?($e=K.x,ot=K.y,_t=K.z):($e=0,ot=0,_t=0);const ut=we.convert(U.format),Oe=we.convert(U.type);let mt;U.isData3DTexture?(ee.setTexture3D(U,0),mt=_.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(ee.setTexture2DArray(U,0),mt=_.TEXTURE_2D_ARRAY):(ee.setTexture2D(U,0),mt=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,U.unpackAlignment);const et=_.getParameter(_.UNPACK_ROW_LENGTH),Wt=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Li=_.getParameter(_.UNPACK_SKIP_PIXELS),Xt=_.getParameter(_.UNPACK_SKIP_ROWS),hs=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,dt.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,dt.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,He),_.pixelStorei(_.UNPACK_SKIP_ROWS,Ve),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Fe);const gt=S.isDataArrayTexture||S.isData3DTexture,Zt=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const Jt=X.get(S),It=X.get(U),zt=X.get(Jt.__renderTarget),eo=X.get(It.__renderTarget);F.bindFramebuffer(_.READ_FRAMEBUFFER,zt.__webglFramebuffer),F.bindFramebuffer(_.DRAW_FRAMEBUFFER,eo.__webglFramebuffer);for(let ui=0;ui<De;ui++)gt&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,X.get(S).__webglTexture,N,Fe+ui),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,X.get(U).__webglTexture,pe,_t+ui)),_.blitFramebuffer(He,Ve,Te,Ie,$e,ot,Te,Ie,_.DEPTH_BUFFER_BIT,_.NEAREST);F.bindFramebuffer(_.READ_FRAMEBUFFER,null),F.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(N!==0||S.isRenderTargetTexture||X.has(S)){const Jt=X.get(S),It=X.get(U);F.bindFramebuffer(_.READ_FRAMEBUFFER,Pf),F.bindFramebuffer(_.DRAW_FRAMEBUFFER,Df);for(let zt=0;zt<De;zt++)gt?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Jt.__webglTexture,N,Fe+zt):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Jt.__webglTexture,N),Zt?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,It.__webglTexture,pe,_t+zt):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,It.__webglTexture,pe),N!==0?_.blitFramebuffer(He,Ve,Te,Ie,$e,ot,Te,Ie,_.COLOR_BUFFER_BIT,_.NEAREST):Zt?_.copyTexSubImage3D(mt,pe,$e,ot,_t+zt,He,Ve,Te,Ie):_.copyTexSubImage2D(mt,pe,$e,ot,He,Ve,Te,Ie);F.bindFramebuffer(_.READ_FRAMEBUFFER,null),F.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else Zt?S.isDataTexture||S.isData3DTexture?_.texSubImage3D(mt,pe,$e,ot,_t,Te,Ie,De,ut,Oe,dt.data):U.isCompressedArrayTexture?_.compressedTexSubImage3D(mt,pe,$e,ot,_t,Te,Ie,De,ut,dt.data):_.texSubImage3D(mt,pe,$e,ot,_t,Te,Ie,De,ut,Oe,dt):S.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,pe,$e,ot,Te,Ie,ut,Oe,dt.data):S.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,pe,$e,ot,dt.width,dt.height,ut,dt.data):_.texSubImage2D(_.TEXTURE_2D,pe,$e,ot,Te,Ie,ut,Oe,dt);_.pixelStorei(_.UNPACK_ROW_LENGTH,et),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,Wt),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Li),_.pixelStorei(_.UNPACK_SKIP_ROWS,Xt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,hs),pe===0&&U.generateMipmaps&&_.generateMipmap(mt),F.unbindTexture()},this.initRenderTarget=function(S){X.get(S).__webglFramebuffer===void 0&&ee.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ee.setTextureCube(S,0):S.isData3DTexture?ee.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ee.setTexture2DArray(S,0):ee.setTexture2D(S,0),F.unbindTexture()},this.resetState=function(){D=0,P=0,O=null,F.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const Tx="/linear/images/portfolio/Ballymaloe.png",bx="/linear/images/portfolio/Bridesmaids.jpg",Ax="/linear/images/portfolio/Warmies.png",wx="/linear/images/portfolio/Passport.png",Rx="/linear/images/portfolio/Lost.png",Cx="/linear/images/timemachine/Huddles.png",Px="/linear/images/timemachine/Huddles(2).png",Dx="/linear/images/timemachine/Calendar.png",Lx="/linear/images/timemachine/Lists.png",Ix="/linear/images/timemachine/Items.png",Ux="/linear/images/timemachine/Onboarding.gif",Nx="/linear/images/icons/linkedin.svg",Fx="/linear/images/icons/bunny.png",Ox=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Bx={name:"App",setup(){const n=vt(null),e=vt(0),t=vt(1),i=vt(0),s=vt(0),r=vt("down"),o=vt(0),a=window.innerHeight,l=vt(a*45),c=a*35,u=a*35,f=a*10,d=vt([{progress:0},{progress:0}]),p=vt(0),v=vt(0),M=vt(0),m=vt(0),h=vt(0),R=vt(0),A=vt(!0),E=vt(!1),C=vt(!1),D=vt(!1),P=vt(!1),O=vt(!1),T=vt({Ballymaloe:!1,Bridesmaids:!1,Warmies:!1,Passport:!1,Lost:!1}),y=B=>{Object.keys(T.value).forEach(b=>{b!==B&&(T.value[b]=!1)}),T.value[B]=!T.value[B]};let I,W,Z;const ae=Ze(()=>e.value<0?0:e.value>c?1:e.value/c),se=()=>{const B=e.value/c,b=e.value>o.value?"down":"up";if(Math.abs(e.value-o.value)>1&&(r.value=b),o.value=e.value,B===0){A.value=!0,p.value=0,E.value=!1,v.value=0,C.value=!1,M.value=0,D.value=!1,m.value=0;return}const j=r.value==="down"?.25:.22;B>=0&&B<=j?(A.value=!0,p.value=Math.min(1,B/j)):(A.value=!1,p.value=1);const oe=r.value==="down"?.35:.32,ve=(r.value==="down",.55);if(B>=oe&&B<=ve){E.value=!0;const pt=ve-oe;v.value=Math.min(1,(B-oe)/pt)}else E.value=!1,v.value=0;const le=(r.value==="down",.65),te=(r.value==="down",.8);if(B>=le&&B<=te){C.value=!0;const pt=te-le;M.value=Math.min(1,(B-le)/pt)}else C.value=!1,M.value=0;const xe=(r.value==="down",.75),Ne=1;if(B>=xe&&B<=Ne){D.value=!0;const pt=Ne-xe;m.value=Math.min(1,(B-xe)/pt)}else D.value=!1,m.value=0;B>=.85&&B<=1?P.value=!0:P.value=!1},Q=()=>{if(e.value<u)t.value=1,d.value[0].progress=ae.value,h.value=0,se();else{t.value=2;const B=(e.value-u)/f;h.value=Math.max(0,B),h.value>=0&&h.value<=.3?(O.value=!0,R.value=Math.min(1,h.value/.3)):(O.value=!1,R.value=0),h.value>=.8?d.value[1].progress=1:d.value[1].progress=Math.min(1,h.value/.8)}},ne=Ze(()=>{const B=p.value;let b=1;B<=.25?b=1-B/.25*.75:b=.25;let j;return B<=.25?j=-(B/.25)*2:j=-2-(B-.25)/.75*98,{transform:`translate3d(0px, ${j}lvh, 0px) scale(${b})`}}),z=Ze(()=>{const B=p.value;let b=.25;B<=.25?b=.25+B/.25*.75:b=1;let j;return B<=.25?j=-(B/.25)*2:j=-2-(B-.25)/.75*95,{transform:`translate3d(0px, ${j}lvh, 0px) scale(${b})`}}),me=Ze(()=>({transform:`translate3d(0px, ${-(p.value*75)}lvh, 0px)`})),Ee=Ze(()=>{const B=v.value;return B===0?{transform:"scale(0.85)"}:{transform:`translate(0px, 0px) scale(${.85+B*.15})`}}),Le=Ze(()=>{const B=M.value;return B===0?{transform:"scale(0.85)"}:{transform:`translate(0px, 0px) scale(${.85+B*.15})`}}),Be=Ze(()=>{const B=m.value;if(B===0)return{transform:"translate3d(0%, 0vh, 0px)"};{const b=-(B*63.9),j=-(B*14.8);return{transform:`translate3d(${b}%, ${j}vh, 0px)`}}}),nt=Ze(()=>{const B=m.value;if(B===0)return{transform:"translate(-50%, -50%) scale(1, 1)"};{const b=-50-B*25,j=-50,oe=1-B*.1;return{transform:`translate(${b}%, ${j}%) scale(${oe}, ${oe})`}}}),rt=Ze(()=>{const B=m.value;if(B===0)return{transform:"translate(-50%, -50%) scale(0.5, 0.5)"};{const b=-50+B*75,j=-50,oe=.5+B*.4;return{transform:`translate(${b}%, ${j}%) scale(${oe}, ${oe})`}}}),Qe=Ze(()=>{if(!D.value)return{transform:"translate3d(0px, 0px, 0px)"};const B=30,b=(i.value-.5)*B,j=(s.value-.5)*B;return{transform:`translate3d(${b}px, ${j}px, 0px)`,transition:"transform 0.2s ease-out"}}),ie=Ze(()=>({left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"65rem",position:"absolute"})),ce=Ze(()=>{const B=m.value;return B<.4?{transform:"scale(0.85)"}:{transform:`translate(0px, 0px) scale(${.85+Math.min(1,(B-.4)/.2)*.15})`}}),Ce=Ze(()=>{const B=R.value;return B===0?{transform:"scale(0.85)"}:{transform:`translate(0px, 0px) scale(${.85+B*.15})`}}),ze=Ze(()=>({position:"absolute",top:"0",left:"0",width:"100%",height:"100vh",perspective:"1200px",perspectiveOrigin:"50% 50%",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"})),Re=B=>{const b=h.value,j=6;if(b<.4){const oe=Math.max(0,(b-.3)/.1),ve=oe,te=Math.pow(.85,B)*(.4+oe*.6),xe=B*-60,Ne=B*-100;return{position:"absolute",top:"50%",left:"50%",transform:`translate(-50%, calc(-50% + ${xe}px)) translateZ(${Ne}px) scale(${te})`,opacity:ve,zIndex:j-B,transition:"all 0.2s ease-out"}}else{const ve=(b-.4)/.4*j,le=Math.round(ve),te=B-le;let xe,Ne,Ye,We;if(te<0)xe=1,Ne=0,Ye=0,We=1;else if(te===0)xe=1,Ne=0,Ye=1,We=j+1;else{const pt=j-le-1,At=te<=pt?te:pt+1;xe=Math.pow(.85,At),Ne=At*-60,Ye=At<=pt?Math.max(.4,.8-At*.1):0,We=j-At}return{position:"absolute",top:"50%",left:"50%",transform:`translate(-50%, calc(-50% + ${Ne}px)) translateZ(${te*-100}px) scale(${xe})`,opacity:Ye,zIndex:We,transition:"all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)"}}},Ke=Ze(()=>Re(0)),w=Ze(()=>Re(1)),_=Ze(()=>Re(2)),k=Ze(()=>Re(3)),$=Ze(()=>Re(4)),G=Ze(()=>Re(5)),F=B=>{const b=h.value;if(b<.4)return{opacity:0,transition:"opacity 0.3s ease"};{const ve=(b-.4)/.4*6;return{opacity:Math.round(ve)===B?1:0,transition:"opacity 0.3s ease"}}},fe=Ze(()=>F(0)),X=Ze(()=>F(1)),ee=Ze(()=>F(2)),re=Ze(()=>F(3)),Me=Ze(()=>F(4)),x=Ze(()=>F(5)),g=Ze(()=>{const B=h.value;if(B<.4)return{transform:"scale(0.85)",opacity:0,transition:"all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)"};const b=(B-.4)/.4,j=6,oe=b*j;if(oe>j){const ve=(oe-j)/1,le=Math.min(1,ve*3),te=.3+le*.7,xe=le;return{position:"absolute",top:"50%",left:"50%",transform:`translate(-50%, -50%) scale(${te})`,opacity:xe,transition:"all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)"}}return{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%) scale(0.3)",opacity:0,transition:"all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)"}}),L=Ze(()=>{const B=m.value;if(B===0)return{position:"absolute",top:"8%",left:"15%",transform:"scale(0)",opacity:0};{const j=Math.min(1,B/.6)*1,oe=B;return{position:"absolute",top:"8%",left:"15%",transform:`scale(${j})`,opacity:oe,transition:"all 0.3s ease-out"}}}),H=Ze(()=>{const B=m.value;if(B===0)return{position:"absolute",top:"15%",right:"8%",transform:"scale(0)",opacity:0};{const j=Math.min(1,B/.6)*1,oe=B;return{position:"absolute",top:"15%",right:"8%",transform:`scale(${j})`,opacity:oe,transition:"all 0.4s ease-out"}}}),J=Ze(()=>{const B=m.value;if(B===0)return{position:"absolute",top:"45%",left:"5%",transform:"scale(0)",opacity:0};{const j=Math.min(1,B/.6)*1,oe=B;return{position:"absolute",top:"45%",left:"5%",transform:`scale(${j})`,opacity:oe,transition:"all 0.5s ease-out"}}}),V=Ze(()=>{const B=m.value;if(B===0)return{position:"absolute",bottom:"20%",right:"12%",transform:"scale(0)",opacity:0};{const j=Math.min(1,B/.6)*1,oe=B;return{position:"absolute",bottom:"20%",right:"12%",transform:`scale(${j})`,opacity:oe,transition:"all 0.6s ease-out"}}}),ye=Ze(()=>{const B=m.value;if(B===0)return{position:"absolute",bottom:"12%",left:"50%",transform:"translateX(-50%) scale(0)",opacity:0};{const j=Math.min(1,B/.6)*1,oe=B;return{position:"absolute",bottom:"12%",left:"50%",transform:`translateX(-50%) scale(${j})`,opacity:oe,transition:"all 0.7s ease-out"}}}),he=Ze(()=>{const B=v.value,b=M.value,j=ae.value;if(j<.3)return{background:"linear-gradient(135deg, #FBE5EE 0%, #FFF0F6 5%, #FBE5EE 54%, #FBE5EE 90%, #FFF0F6 100%)"};if(b>0){const Ye=Math.round(229+5*b),We=Math.round(239+-10*b),pt=Math.round(251+0*b);return{background:`rgb(${Ye}, ${We}, ${pt})`}}else{if(j>=.55&&b===0)return{background:"rgb(229, 239, 251)"};{const Ye=B>0?B:Math.min(1,(j-.3)/.25),We=Math.round(251+-22*Ye),pt=Math.round(229+10*Ye),At=Math.round(238+13*Ye);return{background:`rgb(${We}, ${pt}, ${At})`}}}}),be=Ze(()=>{const B=p.value,b=B*360,j=.5+B*.5;return{transform:`rotate(${b}deg) scale(${j})`,transition:B===0?"none":"transform 0.1s ease-out"}}),Ae=B=>{let b=0;B===1?b=0:B===2&&(b=u),ue&&ue.scrollTo(b)};let ue=null;const _e=B=>{e.value=B.scroll,Q()},Pe=B=>{i.value=B.clientX/window.innerWidth,s.value=B.clientY/window.innerHeight};Tu(()=>{we(),ue=new gp({duration:.8,easing:b=>Math.min(1,1.001-Math.pow(2,-12*b)),smooth:!0,wheelMultiplier:1.8,lerp:.25}),ue.on("scroll",_e),window.addEventListener("mousemove",Pe);function B(b){ue.raf(b),Z&&Z.render(I,W),requestAnimationFrame(B)}requestAnimationFrame(B),window.addEventListener("resize",ge)});const we=()=>{if(!n.value)return;I=new Im,W=new nn(75,window.innerWidth/window.innerHeight,.1,1e3),Z=new yx({canvas:n.value,alpha:!0,antialias:!0}),Z.setSize(window.innerWidth,window.innerHeight),Z.setPixelRatio(Math.min(window.devicePixelRatio,2)),W.position.z=5;const B=new us,b=new gl({color:65280,transparent:!0,opacity:.1}),j=new Sn(B,b);I.add(j)},ge=()=>{!W||!Z||(W.aspect=window.innerWidth/window.innerHeight,W.updateProjectionMatrix(),Z.setSize(window.innerWidth,window.innerHeight))};return nl(()=>{ue&&ue.destroy(),window.removeEventListener("resize",ge),window.removeEventListener("mousemove",Pe),Z&&Z.dispose()}),{threeCanvas:n,scrollY:e,currentSection:t,sections:d,totalHeight:l,section2Start:u,section1Progress:ae,scrollDirection:r,mouseX:i,mouseY:s,transaction1Active:A,textBlockActive:E,textBlock2Active:C,imageBlockActive:D,imageBlockTextActive:P,section2TextActive:O,transaction1Progress:p,textBlockProgress:v,textBlock2Progress:M,imageBlockProgress:m,section2Progress:h,section2TextProgress:R,transaction1TopTitleStyle:ne,transaction1BottomTitleStyle:z,transaction1MediaStyle:me,textBlockInnerStyle:Ee,textBlock2InnerStyle:Le,imageBlockContainerStyle:Be,imageBlockFirstImageStyle:nt,imageBlockSecondImageStyle:rt,imageBlockCameraStyle:Qe,imageBlockTextContainerStyle:ie,imageBlockTextInnerStyle:ce,pngImage1Style:L,pngImage2Style:H,pngImage3Style:J,pngImage4Style:V,pngImage5Style:ye,section1BackgroundStyle:he,section2TextInnerStyle:Ce,flowerLogoStyle:be,timeMachineContainerStyle:ze,timeMachineItem1Style:Ke,timeMachineItem2Style:w,timeMachineItem3Style:_,timeMachineItem4Style:k,timeMachineItem5Style:$,timeMachineItem6Style:G,timeMachineTitle1Style:fe,timeMachineTitle2Style:X,timeMachineTitle3Style:ee,timeMachineTitle4Style:re,timeMachineTitle5Style:Me,timeMachineTitle6Style:x,thankYouTextInnerStyle:g,activePopups:T,toggleProjectPopup:y,goToSection:Ae}}},zx={class:"app"},Hx={class:"nav"},Vx={class:"navDots nav__dots"},kx=["onClick"],Gx={class:"gl"},Wx={ref:"threeCanvas"},Xx={class:"fillFixed"},qx={class:"assetTransaction__mediaInner"},Yx={class:"featuredAsset assetTransaction__img"},Kx={class:"logo-container"},$x={key:0,class:"project-popup"},jx={key:0,class:"project-popup"},Zx={key:0,class:"project-popup"},Jx={key:0,class:"project-popup"},Qx={key:0,class:"project-popup"},eS={class:"timeMachine__stack"};function tS(n,e,t,i,s,r){return Dn(),Gn("div",zx,[de("nav",Hx,[de("div",Vx,[e[6]||(e[6]=de("div",{class:"navDots__bg fill blurredBg"},null,-1)),(Dn(!0),Gn(pn,null,Wh(i.sections,(o,a)=>(Dn(),Gn("div",{key:a,class:en(["navDots__dot",{active:i.currentSection===a+1}]),style:je({"--progress":o.progress}),onClick:l=>i.goToSection(a+1)},[...e[5]||(e[5]=[de("div",{class:"navDots__dotBg"},null,-1),de("div",{class:"navDots__dotProgress"},null,-1)])],14,kx))),128))])]),de("div",Gx,[de("canvas",Wx,null,512)]),de("div",{class:"page",style:je({height:i.totalHeight+"px"})},[e[7]||(e[7]=de("div",{class:"section-1-anchor",style:{top:"0px"}},null,-1)),de("div",{class:"section-2-anchor",style:je({top:i.section2Start+"px"})},null,4)],4),de("div",Xx,[de("div",{class:en(["section1",{active:i.currentSection===1}]),style:je(i.section1BackgroundStyle)},[de("div",{class:en(["assetTransaction",{active:i.transaction1Active}])},[de("h1",{class:"transactionTitle title top",style:je(i.transaction1TopTitleStyle)},[...e[8]||(e[8]=[de("span",{class:"transactionTitle__inner"},"Hello Linear",-1)])],4),de("h1",{class:"transactionTitle title bottom",style:je(i.transaction1BottomTitleStyle)},[...e[9]||(e[9]=[de("span",{class:"transactionTitle__inner"},"I'm Isha",-1)])],4),de("div",{class:"assetTransaction__media",style:je(i.transaction1MediaStyle)},[de("div",qx,[de("div",Yx,[de("div",Kx,[de("div",{class:"flower flower-logo",logo:"",intro:"",style:je(i.flowerLogoStyle)},[...e[10]||(e[10]=[de("a",{class:"logo"},[de("div",{class:"top"}),de("div",{class:"bottom"})],-1)])],4)])])])],4)],2),de("div",{class:en(["textBlock paragraph textBodyM",{active:i.textBlockActive}]),style:{left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"65rem"}},[de("p",{class:"textBlock__inner",style:je(i.textBlockInnerStyle)},[...e[11]||(e[11]=[yr(" I'm currently a senior product designer at ",-1),de("a",{href:"https://slack.com/",target:"_blank",rel:"noopener noreferrer"},"Slack",-1),yr(". Currently, I lead design for ",-1),de("a",{href:"https://slack.com/intl/en-gb/features/huddles",target:"_blank",rel:"noopener noreferrer"},"huddles",-1),yr(". Before that, I got my M.S. and B.S. in Computer Science from Stanford University. ",-1)])],4)],2),de("div",{class:en(["textBlock paragraph textBodyM",{active:i.textBlock2Active}]),style:{left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"65rem"}},[de("p",{class:"textBlock__inner",style:je(i.textBlock2InnerStyle)}," I am drawn to things that feel both natural and surprising, and hope to create that dynamic in my work. Thank you for sharing your time, and your workplace, with me. I'm so excited to be here. ",4)],2),de("div",{class:en(["imageBlock",{active:i.imageBlockActive}]),style:je(i.imageBlockCameraStyle)},[de("div",{class:en(["textBlock paragraph textBodyM",{active:i.imageBlockTextActive}]),style:je(i.imageBlockTextContainerStyle)},[de("div",{class:"textBlock__inner",style:je(i.imageBlockTextInnerStyle)},[...e[12]||(e[12]=[de("p",null,"Some tidbits about me...",-1)])],4)],6),de("div",{class:"png-image png-image-1",style:je(i.pngImage1Style),onClick:e[0]||(e[0]=o=>i.toggleProjectPopup("Ballymaloe"))},[e[14]||(e[14]=de("img",{src:Tx,alt:"Ballymaloe project",class:"png-img"},null,-1)),i.activePopups.Ballymaloe?(Dn(),Gn("div",$x,[...e[13]||(e[13]=[de("h3",{class:"project-popup__title"},"Ballymaloe",-1),de("p",{class:"project-popup__description"},"I love Ireland, I love potatoes, and I love cooking. Ballymaloe has all three, including a culinary school I plan to attend in 2027.",-1)])])):ms("",!0)],4),de("div",{class:"png-image png-image-2",style:je(i.pngImage2Style),onClick:e[1]||(e[1]=o=>i.toggleProjectPopup("Bridesmaids"))},[e[16]||(e[16]=de("img",{src:bx,alt:"Bridesmaids project",class:"png-img"},null,-1)),i.activePopups.Bridesmaids?(Dn(),Gn("div",jx,[...e[15]||(e[15]=[de("h3",{class:"project-popup__title"},"Bridesmaids",-1),de("p",{class:"project-popup__description"},"Bridesmaids is my favorite movie of all time. I think I can recite almost the entire script.",-1)])])):ms("",!0)],4),de("div",{class:"png-image png-image-3",style:je(i.pngImage3Style),onClick:e[2]||(e[2]=o=>i.toggleProjectPopup("Warmies"))},[e[18]||(e[18]=de("img",{src:Ax,alt:"Warmies project",class:"png-img"},null,-1)),i.activePopups.Warmies?(Dn(),Gn("div",Zx,[...e[17]||(e[17]=[de("h3",{class:"project-popup__title"},"Warmies",-1),de("p",{class:"project-popup__description"},"I have started a Warmies cult. All my loved ones have them now. They smell like lavender, and can be used as a heating pad or cool compress.",-1)])])):ms("",!0)],4),de("div",{class:"png-image png-image-4",style:je(i.pngImage4Style),onClick:e[3]||(e[3]=o=>i.toggleProjectPopup("Passport"))},[e[20]||(e[20]=de("img",{src:wx,alt:"Passport project",class:"png-img"},null,-1)),i.activePopups.Passport?(Dn(),Gn("div",Jx,[...e[19]||(e[19]=[de("h3",{class:"project-popup__title"},"British",-1),de("p",{class:"project-popup__description"},"That's right, everyone, I'm British. Regrettably, I don't have an accent, because we moved when I was little. But, I fake one when I need to increase my credibility.",-1)])])):ms("",!0)],4),de("div",{class:"png-image png-image-5",style:je(i.pngImage5Style),onClick:e[4]||(e[4]=o=>i.toggleProjectPopup("Lost"))},[e[22]||(e[22]=de("img",{src:Rx,alt:"Lost project",class:"png-img"},null,-1)),i.activePopups.Lost?(Dn(),Gn("div",Qx,[...e[21]||(e[21]=[de("h3",{class:"project-popup__title"},"Lost",-1),de("p",{class:"project-popup__description"},"Currently watching this for the first time — oscar worthy island drama.",-1)])])):ms("",!0)],4)],6)],6),de("div",{class:en(["section2",{active:i.currentSection===2}])},[de("div",{class:en(["textBlock paragraph textBodyM",{active:i.section2TextActive}]),style:{left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"65rem"}},[de("p",{class:"textBlock__inner",style:je(i.section2TextInnerStyle)}," Here's a snapshot of my work. ",4)],2),de("div",{class:"timeMachine",style:je(i.timeMachineContainerStyle)},[de("div",eS,[de("div",{class:"timeMachine__item",style:je(i.timeMachineItem1Style)},[e[24]||(e[24]=de("img",{src:Cx,alt:"Time Machine Item 1",class:"timeMachine__img"},null,-1)),de("div",{class:"timeMachine__title",style:je(i.timeMachineTitle1Style)},[...e[23]||(e[23]=[de("div",{class:"timeMachine__title-top"},"Huddles (2025)",-1),de("div",{class:"timeMachine__title-bottom"},"Lead Designer",-1)])],4)],4),de("div",{class:"timeMachine__item",style:je(i.timeMachineItem2Style)},[e[26]||(e[26]=de("img",{src:Px,alt:"Time Machine Item 2",class:"timeMachine__img"},null,-1)),de("div",{class:"timeMachine__title",style:je(i.timeMachineTitle2Style)},[...e[25]||(e[25]=[de("div",{class:"timeMachine__title-top"},"Huddles (2025)",-1),de("div",{class:"timeMachine__title-bottom"},"Lead Designer",-1)])],4)],4),de("div",{class:"timeMachine__item",style:je(i.timeMachineItem3Style)},[e[28]||(e[28]=de("img",{src:Dx,alt:"Time Machine Item 3",class:"timeMachine__img"},null,-1)),de("div",{class:"timeMachine__title",style:je(i.timeMachineTitle3Style)},[...e[27]||(e[27]=[de("div",{class:"timeMachine__title-top"},"Calendar (2025)",-1),de("div",{class:"timeMachine__title-bottom"},"Lead Designer",-1)])],4)],4),de("div",{class:"timeMachine__item",style:je(i.timeMachineItem4Style)},[e[30]||(e[30]=de("img",{src:Lx,alt:"Time Machine Item 4",class:"timeMachine__img"},null,-1)),de("div",{class:"timeMachine__title",style:je(i.timeMachineTitle4Style)},[...e[29]||(e[29]=[de("div",{class:"timeMachine__title-top"},"Lists (2024)",-1),de("div",{class:"timeMachine__title-bottom"},"Senior Designer",-1)])],4)],4),de("div",{class:"timeMachine__item",style:je(i.timeMachineItem5Style)},[e[32]||(e[32]=de("img",{src:Ix,alt:"Time Machine Item 5",class:"timeMachine__img"},null,-1)),de("div",{class:"timeMachine__title",style:je(i.timeMachineTitle5Style)},[...e[31]||(e[31]=[de("div",{class:"timeMachine__title-top"},"Lists (2024)",-1),de("div",{class:"timeMachine__title-bottom"},"Senior Designer",-1)])],4)],4),de("div",{class:"timeMachine__item",style:je(i.timeMachineItem6Style)},[e[34]||(e[34]=de("img",{src:Ux,alt:"Time Machine Item 6",class:"timeMachine__img"},null,-1)),de("div",{class:"timeMachine__title",style:je(i.timeMachineTitle6Style)},[...e[33]||(e[33]=[de("div",{class:"timeMachine__title-top"},"Onboarding (2021)",-1),de("div",{class:"timeMachine__title-bottom"},"Lead Designer",-1)])],4)],4)]),de("div",{class:"textBlock__inner text-block-thank-you",style:je(i.thankYouTextInnerStyle)},[...e[35]||(e[35]=[bd('<p>Thank you 🫶🏾</p><div class="textBlock__icons"><a href="https://www.linkedin.com/in/isha-kumar-29a479125" target="_blank" class="textBlock__icon"><img src="'+Nx+'" alt="LinkedIn" class="icon-linkedin"></a><a href="https://ishakumar.work/" target="_blank" class="textBlock__icon"><img src="'+Fx+'" alt="Bunny" class="icon-bunny"></a></div>',2)])],4)],4)],2)])])}const nS=Ox(Bx,[["render",tS]]);rp(nS).mount("#app");
