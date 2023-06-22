var lh=Object.defineProperty;var ch=(n,t,e)=>t in n?lh(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var $e=(n,t,e)=>(ch(n,typeof t!="symbol"?t+"":t,e),e);import"./modulepreload-polyfill-3cfb730f.js";var Js=!1,Ks=!1,Nn=[],Zs=-1;function uh(n){hh(n)}function hh(n){Nn.includes(n)||Nn.push(n),fh()}function Ql(n){let t=Nn.indexOf(n);t!==-1&&t>Zs&&Nn.splice(t,1)}function fh(){!Ks&&!Js&&(Js=!0,queueMicrotask(dh))}function dh(){Js=!1,Ks=!0;for(let n=0;n<Nn.length;n++)Nn[n](),Zs=n;Nn.length=0,Zs=-1,Ks=!1}var yi,Si,Qi,tc,Qs=!0;function ph(n){Qs=!1,n(),Qs=!0}function mh(n){yi=n.reactive,Qi=n.release,Si=t=>n.effect(t,{scheduler:e=>{Qs?uh(e):e()}}),tc=n.raw}function uo(n){Si=n}function gh(n){let t=()=>{};return[i=>{let r=Si(i);return n._x_effects||(n._x_effects=new Set,n._x_runEffects=()=>{n._x_effects.forEach(s=>s())}),n._x_effects.add(r),t=()=>{r!==void 0&&(n._x_effects.delete(r),Qi(r))},r},()=>{t()}]}var ec=[],nc=[],ic=[];function _h(n){ic.push(n)}function rc(n,t){typeof t=="function"?(n._x_cleanups||(n._x_cleanups=[]),n._x_cleanups.push(t)):(t=n,nc.push(t))}function vh(n){ec.push(n)}function xh(n,t,e){n._x_attributeCleanups||(n._x_attributeCleanups={}),n._x_attributeCleanups[t]||(n._x_attributeCleanups[t]=[]),n._x_attributeCleanups[t].push(e)}function sc(n,t){n._x_attributeCleanups&&Object.entries(n._x_attributeCleanups).forEach(([e,i])=>{(t===void 0||t.includes(e))&&(i.forEach(r=>r()),delete n._x_attributeCleanups[e])})}var Aa=new MutationObserver(La),wa=!1;function Ra(){Aa.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),wa=!0}function ac(){Mh(),Aa.disconnect(),wa=!1}var Oi=[],ds=!1;function Mh(){Oi=Oi.concat(Aa.takeRecords()),Oi.length&&!ds&&(ds=!0,queueMicrotask(()=>{yh(),ds=!1}))}function yh(){La(Oi),Oi.length=0}function he(n){if(!wa)return n();ac();let t=n();return Ra(),t}var Ca=!1,zr=[];function Sh(){Ca=!0}function Eh(){Ca=!1,La(zr),zr=[]}function La(n){if(Ca){zr=zr.concat(n);return}let t=[],e=[],i=new Map,r=new Map;for(let s=0;s<n.length;s++)if(!n[s].target._x_ignoreMutationObserver&&(n[s].type==="childList"&&(n[s].addedNodes.forEach(a=>a.nodeType===1&&t.push(a)),n[s].removedNodes.forEach(a=>a.nodeType===1&&e.push(a))),n[s].type==="attributes")){let a=n[s].target,o=n[s].attributeName,l=n[s].oldValue,c=()=>{i.has(a)||i.set(a,[]),i.get(a).push({name:o,value:a.getAttribute(o)})},u=()=>{r.has(a)||r.set(a,[]),r.get(a).push(o)};a.hasAttribute(o)&&l===null?c():a.hasAttribute(o)?(u(),c()):u()}r.forEach((s,a)=>{sc(a,s)}),i.forEach((s,a)=>{ec.forEach(o=>o(a,s))});for(let s of e)if(!t.includes(s)&&(nc.forEach(a=>a(s)),s._x_cleanups))for(;s._x_cleanups.length;)s._x_cleanups.pop()();t.forEach(s=>{s._x_ignoreSelf=!0,s._x_ignore=!0});for(let s of t)e.includes(s)||s.isConnected&&(delete s._x_ignoreSelf,delete s._x_ignore,ic.forEach(a=>a(s)),s._x_ignore=!0,s._x_ignoreSelf=!0);t.forEach(s=>{delete s._x_ignoreSelf,delete s._x_ignore}),t=null,e=null,i=null,r=null}function oc(n){return er(mi(n))}function tr(n,t,e){return n._x_dataStack=[t,...mi(e||n)],()=>{n._x_dataStack=n._x_dataStack.filter(i=>i!==t)}}function mi(n){return n._x_dataStack?n._x_dataStack:typeof ShadowRoot=="function"&&n instanceof ShadowRoot?mi(n.host):n.parentNode?mi(n.parentNode):[]}function er(n){let t=new Proxy({},{ownKeys:()=>Array.from(new Set(n.flatMap(e=>Object.keys(e)))),has:(e,i)=>n.some(r=>r.hasOwnProperty(i)),get:(e,i)=>(n.find(r=>{if(r.hasOwnProperty(i)){let s=Object.getOwnPropertyDescriptor(r,i);if(s.get&&s.get._x_alreadyBound||s.set&&s.set._x_alreadyBound)return!0;if((s.get||s.set)&&s.enumerable){let a=s.get,o=s.set,l=s;a=a&&a.bind(t),o=o&&o.bind(t),a&&(a._x_alreadyBound=!0),o&&(o._x_alreadyBound=!0),Object.defineProperty(r,i,{...l,get:a,set:o})}return!0}return!1})||{})[i],set:(e,i,r)=>{let s=n.find(a=>a.hasOwnProperty(i));return s?s[i]=r:n[n.length-1][i]=r,!0}});return t}function lc(n){let t=i=>typeof i=="object"&&!Array.isArray(i)&&i!==null,e=(i,r="")=>{Object.entries(Object.getOwnPropertyDescriptors(i)).forEach(([s,{value:a,enumerable:o}])=>{if(o===!1||a===void 0)return;let l=r===""?s:`${r}.${s}`;typeof a=="object"&&a!==null&&a._x_interceptor?i[s]=a.initialize(n,l,s):t(a)&&a!==i&&!(a instanceof Element)&&e(a,l)})};return e(n)}function cc(n,t=()=>{}){let e={initialValue:void 0,_x_interceptor:!0,initialize(i,r,s){return n(this.initialValue,()=>Th(i,r),a=>ta(i,r,a),r,s)}};return t(e),i=>{if(typeof i=="object"&&i!==null&&i._x_interceptor){let r=e.initialize.bind(e);e.initialize=(s,a,o)=>{let l=i.initialize(s,a,o);return e.initialValue=l,r(s,a,o)}}else e.initialValue=i;return e}}function Th(n,t){return t.split(".").reduce((e,i)=>e[i],n)}function ta(n,t,e){if(typeof t=="string"&&(t=t.split(".")),t.length===1)n[t[0]]=e;else{if(t.length===0)throw error;return n[t[0]]||(n[t[0]]={}),ta(n[t[0]],t.slice(1),e)}}var uc={};function He(n,t){uc[n]=t}function ea(n,t){return Object.entries(uc).forEach(([e,i])=>{let r=null;function s(){if(r)return r;{let[a,o]=mc(t);return r={interceptor:cc,...a},rc(t,o),r}}Object.defineProperty(n,`$${e}`,{get(){return i(t,s())},enumerable:!1})}),n}function bh(n,t,e,...i){try{return e(...i)}catch(r){Wi(r,n,t)}}function Wi(n,t,e=void 0){Object.assign(n,{el:t,expression:e}),console.warn(`Alpine Expression Error: ${n.message}

${e?'Expression: "'+e+`"

`:""}`,t),setTimeout(()=>{throw n},0)}var Or=!0;function Ah(n){let t=Or;Or=!1,n(),Or=t}function hi(n,t,e={}){let i;return ye(n,t)(r=>i=r,e),i}function ye(...n){return hc(...n)}var hc=fc;function wh(n){hc=n}function fc(n,t){let e={};ea(e,n);let i=[e,...mi(n)],r=typeof t=="function"?Rh(i,t):Lh(i,t,n);return bh.bind(null,n,t,r)}function Rh(n,t){return(e=()=>{},{scope:i={},params:r=[]}={})=>{let s=t.apply(er([i,...n]),r);Gr(e,s)}}var ps={};function Ch(n,t){if(ps[n])return ps[n];let e=Object.getPrototypeOf(async function(){}).constructor,i=/^[\n\s]*if.*\(.*\)/.test(n)||/^(let|const)\s/.test(n)?`(async()=>{ ${n} })()`:n,s=(()=>{try{return new e(["__self","scope"],`with (scope) { __self.result = ${i} }; __self.finished = true; return __self.result;`)}catch(a){return Wi(a,t,n),Promise.resolve()}})();return ps[n]=s,s}function Lh(n,t,e){let i=Ch(t,e);return(r=()=>{},{scope:s={},params:a=[]}={})=>{i.result=void 0,i.finished=!1;let o=er([s,...n]);if(typeof i=="function"){let l=i(i,o).catch(c=>Wi(c,e,t));i.finished?(Gr(r,i.result,o,a,e),i.result=void 0):l.then(c=>{Gr(r,c,o,a,e)}).catch(c=>Wi(c,e,t)).finally(()=>i.result=void 0)}}}function Gr(n,t,e,i,r){if(Or&&typeof t=="function"){let s=t.apply(e,i);s instanceof Promise?s.then(a=>Gr(n,a,e,i)).catch(a=>Wi(a,r,t)):n(s)}else typeof t=="object"&&t instanceof Promise?t.then(s=>n(s)):n(t)}var Pa="x-";function Ei(n=""){return Pa+n}function Ph(n){Pa=n}var na={};function se(n,t){return na[n]=t,{before(e){if(!na[e]){console.warn("Cannot find directive `${directive}`. `${name}` will use the default order of execution");return}const i=In.indexOf(e);In.splice(i>=0?i:In.indexOf("DEFAULT"),0,n)}}}function Ua(n,t,e){if(t=Array.from(t),n._x_virtualDirectives){let s=Object.entries(n._x_virtualDirectives).map(([o,l])=>({name:o,value:l})),a=dc(s);s=s.map(o=>a.find(l=>l.name===o.name)?{name:`x-bind:${o.name}`,value:`"${o.value}"`}:o),t=t.concat(s)}let i={};return t.map(vc((s,a)=>i[s]=a)).filter(Mc).map(Ih(i,e)).sort(Nh).map(s=>Dh(n,s))}function dc(n){return Array.from(n).map(vc()).filter(t=>!Mc(t))}var ia=!1,Ii=new Map,pc=Symbol();function Uh(n){ia=!0;let t=Symbol();pc=t,Ii.set(t,[]);let e=()=>{for(;Ii.get(t).length;)Ii.get(t).shift()();Ii.delete(t)},i=()=>{ia=!1,e()};n(e),i()}function mc(n){let t=[],e=o=>t.push(o),[i,r]=gh(n);return t.push(r),[{Alpine:ir,effect:i,cleanup:e,evaluateLater:ye.bind(ye,n),evaluate:hi.bind(hi,n)},()=>t.forEach(o=>o())]}function Dh(n,t){let e=()=>{},i=na[t.type]||e,[r,s]=mc(n);xh(n,t.original,s);let a=()=>{n._x_ignore||n._x_ignoreSelf||(i.inline&&i.inline(n,t,r),i=i.bind(i,n,t,r),ia?Ii.get(pc).push(i):i())};return a.runCleanups=s,a}var gc=(n,t)=>({name:e,value:i})=>(e.startsWith(n)&&(e=e.replace(n,t)),{name:e,value:i}),_c=n=>n;function vc(n=()=>{}){return({name:t,value:e})=>{let{name:i,value:r}=xc.reduce((s,a)=>a(s),{name:t,value:e});return i!==t&&n(i,t),{name:i,value:r}}}var xc=[];function Da(n){xc.push(n)}function Mc({name:n}){return yc().test(n)}var yc=()=>new RegExp(`^${Pa}([^:^.]+)\\b`);function Ih(n,t){return({name:e,value:i})=>{let r=e.match(yc()),s=e.match(/:([a-zA-Z0-9\-:]+)/),a=e.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],o=t||n[e]||e;return{type:r?r[1]:null,value:s?s[1]:null,modifiers:a.map(l=>l.replace(".","")),expression:i,original:o}}}var ra="DEFAULT",In=["ignore","ref","data","id","bind","init","for","model","modelable","transition","show","if",ra,"teleport"];function Nh(n,t){let e=In.indexOf(n.type)===-1?ra:n.type,i=In.indexOf(t.type)===-1?ra:t.type;return In.indexOf(e)-In.indexOf(i)}function Fi(n,t,e={}){n.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0,cancelable:!0}))}function vn(n,t){if(typeof ShadowRoot=="function"&&n instanceof ShadowRoot){Array.from(n.children).forEach(r=>vn(r,t));return}let e=!1;if(t(n,()=>e=!0),e)return;let i=n.firstElementChild;for(;i;)vn(i,t),i=i.nextElementSibling}function xn(n,...t){console.warn(`Alpine Warning: ${n}`,...t)}var ho=!1;function Oh(){ho&&xn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),ho=!0,document.body||xn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),Fi(document,"alpine:init"),Fi(document,"alpine:initializing"),Ra(),_h(t=>Mn(t,vn)),rc(t=>Rc(t)),vh((t,e)=>{Ua(t,e).forEach(i=>i())});let n=t=>!Xr(t.parentElement,!0);Array.from(document.querySelectorAll(Tc())).filter(n).forEach(t=>{Mn(t)}),Fi(document,"alpine:initialized")}var Ia=[],Sc=[];function Ec(){return Ia.map(n=>n())}function Tc(){return Ia.concat(Sc).map(n=>n())}function bc(n){Ia.push(n)}function Ac(n){Sc.push(n)}function Xr(n,t=!1){return qr(n,e=>{if((t?Tc():Ec()).some(r=>e.matches(r)))return!0})}function qr(n,t){if(n){if(t(n))return n;if(n._x_teleportBack&&(n=n._x_teleportBack),!!n.parentElement)return qr(n.parentElement,t)}}function Fh(n){return Ec().some(t=>n.matches(t))}var wc=[];function Bh(n){wc.push(n)}function Mn(n,t=vn,e=()=>{}){Uh(()=>{t(n,(i,r)=>{e(i,r),wc.forEach(s=>s(i,r)),Ua(i,i.attributes).forEach(s=>s()),i._x_ignore&&r()})})}function Rc(n){vn(n,t=>sc(t))}var sa=[],Na=!1;function Oa(n=()=>{}){return queueMicrotask(()=>{Na||setTimeout(()=>{aa()})}),new Promise(t=>{sa.push(()=>{n(),t()})})}function aa(){for(Na=!1;sa.length;)sa.shift()()}function zh(){Na=!0}function Fa(n,t){return Array.isArray(t)?fo(n,t.join(" ")):typeof t=="object"&&t!==null?Gh(n,t):typeof t=="function"?Fa(n,t()):fo(n,t)}function fo(n,t){let e=r=>r.split(" ").filter(s=>!n.classList.contains(s)).filter(Boolean),i=r=>(n.classList.add(...r),()=>{n.classList.remove(...r)});return t=t===!0?t="":t||"",i(e(t))}function Gh(n,t){let e=o=>o.split(" ").filter(Boolean),i=Object.entries(t).flatMap(([o,l])=>l?e(o):!1).filter(Boolean),r=Object.entries(t).flatMap(([o,l])=>l?!1:e(o)).filter(Boolean),s=[],a=[];return r.forEach(o=>{n.classList.contains(o)&&(n.classList.remove(o),a.push(o))}),i.forEach(o=>{n.classList.contains(o)||(n.classList.add(o),s.push(o))}),()=>{a.forEach(o=>n.classList.add(o)),s.forEach(o=>n.classList.remove(o))}}function Yr(n,t){return typeof t=="object"&&t!==null?Hh(n,t):Vh(n,t)}function Hh(n,t){let e={};return Object.entries(t).forEach(([i,r])=>{e[i]=n.style[i],i.startsWith("--")||(i=kh(i)),n.style.setProperty(i,r)}),setTimeout(()=>{n.style.length===0&&n.removeAttribute("style")}),()=>{Yr(n,e)}}function Vh(n,t){let e=n.getAttribute("style",t);return n.setAttribute("style",t),()=>{n.setAttribute("style",e||"")}}function kh(n){return n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function oa(n,t=()=>{}){let e=!1;return function(){e?t.apply(this,arguments):(e=!0,n.apply(this,arguments))}}se("transition",(n,{value:t,modifiers:e,expression:i},{evaluate:r})=>{typeof i=="function"&&(i=r(i)),i!==!1&&(!i||typeof i=="boolean"?Xh(n,e,t):Wh(n,i,t))});function Wh(n,t,e){Cc(n,Fa,""),{enter:r=>{n._x_transition.enter.during=r},"enter-start":r=>{n._x_transition.enter.start=r},"enter-end":r=>{n._x_transition.enter.end=r},leave:r=>{n._x_transition.leave.during=r},"leave-start":r=>{n._x_transition.leave.start=r},"leave-end":r=>{n._x_transition.leave.end=r}}[e](t)}function Xh(n,t,e){Cc(n,Yr);let i=!t.includes("in")&&!t.includes("out")&&!e,r=i||t.includes("in")||["enter"].includes(e),s=i||t.includes("out")||["leave"].includes(e);t.includes("in")&&!i&&(t=t.filter((d,E)=>E<t.indexOf("out"))),t.includes("out")&&!i&&(t=t.filter((d,E)=>E>t.indexOf("out")));let a=!t.includes("opacity")&&!t.includes("scale"),o=a||t.includes("opacity"),l=a||t.includes("scale"),c=o?0:1,u=l?wi(t,"scale",95)/100:1,h=wi(t,"delay",0)/1e3,f=wi(t,"origin","center"),m="opacity, transform",_=wi(t,"duration",150)/1e3,v=wi(t,"duration",75)/1e3,p="cubic-bezier(0.4, 0.0, 0.2, 1)";r&&(n._x_transition.enter.during={transformOrigin:f,transitionDelay:`${h}s`,transitionProperty:m,transitionDuration:`${_}s`,transitionTimingFunction:p},n._x_transition.enter.start={opacity:c,transform:`scale(${u})`},n._x_transition.enter.end={opacity:1,transform:"scale(1)"}),s&&(n._x_transition.leave.during={transformOrigin:f,transitionDelay:`${h}s`,transitionProperty:m,transitionDuration:`${v}s`,transitionTimingFunction:p},n._x_transition.leave.start={opacity:1,transform:"scale(1)"},n._x_transition.leave.end={opacity:c,transform:`scale(${u})`})}function Cc(n,t,e={}){n._x_transition||(n._x_transition={enter:{during:e,start:e,end:e},leave:{during:e,start:e,end:e},in(i=()=>{},r=()=>{}){la(n,t,{during:this.enter.during,start:this.enter.start,end:this.enter.end},i,r)},out(i=()=>{},r=()=>{}){la(n,t,{during:this.leave.during,start:this.leave.start,end:this.leave.end},i,r)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(n,t,e,i){const r=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let s=()=>r(e);if(t){n._x_transition&&(n._x_transition.enter||n._x_transition.leave)?n._x_transition.enter&&(Object.entries(n._x_transition.enter.during).length||Object.entries(n._x_transition.enter.start).length||Object.entries(n._x_transition.enter.end).length)?n._x_transition.in(e):s():n._x_transition?n._x_transition.in(e):s();return}n._x_hidePromise=n._x_transition?new Promise((a,o)=>{n._x_transition.out(()=>{},()=>a(i)),n._x_transitioning.beforeCancel(()=>o({isFromCancelledTransition:!0}))}):Promise.resolve(i),queueMicrotask(()=>{let a=Lc(n);a?(a._x_hideChildren||(a._x_hideChildren=[]),a._x_hideChildren.push(n)):r(()=>{let o=l=>{let c=Promise.all([l._x_hidePromise,...(l._x_hideChildren||[]).map(o)]).then(([u])=>u());return delete l._x_hidePromise,delete l._x_hideChildren,c};o(n).catch(l=>{if(!l.isFromCancelledTransition)throw l})})})};function Lc(n){let t=n.parentNode;if(t)return t._x_hidePromise?t:Lc(t)}function la(n,t,{during:e,start:i,end:r}={},s=()=>{},a=()=>{}){if(n._x_transitioning&&n._x_transitioning.cancel(),Object.keys(e).length===0&&Object.keys(i).length===0&&Object.keys(r).length===0){s(),a();return}let o,l,c;qh(n,{start(){o=t(n,i)},during(){l=t(n,e)},before:s,end(){o(),c=t(n,r)},after:a,cleanup(){l(),c()}})}function qh(n,t){let e,i,r,s=oa(()=>{he(()=>{e=!0,i||t.before(),r||(t.end(),aa()),t.after(),n.isConnected&&t.cleanup(),delete n._x_transitioning})});n._x_transitioning={beforeCancels:[],beforeCancel(a){this.beforeCancels.push(a)},cancel:oa(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();s()}),finish:s},he(()=>{t.start(),t.during()}),zh(),requestAnimationFrame(()=>{if(e)return;let a=Number(getComputedStyle(n).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,o=Number(getComputedStyle(n).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;a===0&&(a=Number(getComputedStyle(n).animationDuration.replace("s",""))*1e3),he(()=>{t.before()}),i=!0,requestAnimationFrame(()=>{e||(he(()=>{t.end()}),aa(),setTimeout(n._x_transitioning.finish,a+o),r=!0)})})}function wi(n,t,e){if(n.indexOf(t)===-1)return e;const i=n[n.indexOf(t)+1];if(!i||t==="scale"&&isNaN(i))return e;if(t==="duration"||t==="delay"){let r=i.match(/([0-9]+)ms/);if(r)return r[1]}return t==="origin"&&["top","right","left","center","bottom"].includes(n[n.indexOf(t)+2])?[i,n[n.indexOf(t)+2]].join(" "):i}var Xi=!1;function nr(n,t=()=>{}){return(...e)=>Xi?t(...e):n(...e)}function Yh(n){return(...t)=>Xi&&n(...t)}function jh(n,t){t._x_dataStack||(t._x_dataStack=n._x_dataStack),Xi=!0,Jh(()=>{$h(t)}),Xi=!1}function $h(n){let t=!1;Mn(n,(i,r)=>{vn(i,(s,a)=>{if(t&&Fh(s))return a();t=!0,r(s,a)})})}function Jh(n){let t=Si;uo((e,i)=>{let r=t(e);return Qi(r),()=>{}}),n(),uo(t)}function Pc(n,t,e,i=[]){switch(n._x_bindings||(n._x_bindings=yi({})),n._x_bindings[t]=e,t=i.includes("camel")?sf(t):t,t){case"value":Kh(n,e);break;case"style":Qh(n,e);break;case"class":Zh(n,e);break;case"selected":case"checked":tf(n,t,e);break;default:Uc(n,t,e);break}}function Kh(n,t){if(n.type==="radio")n.attributes.value===void 0&&(n.value=t),window.fromModel&&(n.checked=po(n.value,t));else if(n.type==="checkbox")Number.isInteger(t)?n.value=t:!Number.isInteger(t)&&!Array.isArray(t)&&typeof t!="boolean"&&![null,void 0].includes(t)?n.value=String(t):Array.isArray(t)?n.checked=t.some(e=>po(e,n.value)):n.checked=!!t;else if(n.tagName==="SELECT")rf(n,t);else{if(n.value===t)return;n.value=t}}function Zh(n,t){n._x_undoAddedClasses&&n._x_undoAddedClasses(),n._x_undoAddedClasses=Fa(n,t)}function Qh(n,t){n._x_undoAddedStyles&&n._x_undoAddedStyles(),n._x_undoAddedStyles=Yr(n,t)}function tf(n,t,e){Uc(n,t,e),nf(n,t,e)}function Uc(n,t,e){[null,void 0,!1].includes(e)&&af(t)?n.removeAttribute(t):(Dc(t)&&(e=t),ef(n,t,e))}function ef(n,t,e){n.getAttribute(t)!=e&&n.setAttribute(t,e)}function nf(n,t,e){n[t]!==e&&(n[t]=e)}function rf(n,t){const e=[].concat(t).map(i=>i+"");Array.from(n.options).forEach(i=>{i.selected=e.includes(i.value)})}function sf(n){return n.toLowerCase().replace(/-(\w)/g,(t,e)=>e.toUpperCase())}function po(n,t){return n==t}function Dc(n){return["disabled","checked","required","readonly","hidden","open","selected","autofocus","itemscope","multiple","novalidate","allowfullscreen","allowpaymentrequest","formnovalidate","autoplay","controls","loop","muted","playsinline","default","ismap","reversed","async","defer","nomodule"].includes(n)}function af(n){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(n)}function of(n,t,e){if(n._x_bindings&&n._x_bindings[t]!==void 0)return n._x_bindings[t];let i=n.getAttribute(t);return i===null?typeof e=="function"?e():e:i===""?!0:Dc(t)?!![t,"true"].includes(i):i}function Ic(n,t){var e;return function(){var i=this,r=arguments,s=function(){e=null,n.apply(i,r)};clearTimeout(e),e=setTimeout(s,t)}}function Nc(n,t){let e;return function(){let i=this,r=arguments;e||(n.apply(i,r),e=!0,setTimeout(()=>e=!1,t))}}function lf(n){(Array.isArray(n)?n:[n]).forEach(e=>e(ir))}var Ln={},mo=!1;function cf(n,t){if(mo||(Ln=yi(Ln),mo=!0),t===void 0)return Ln[n];Ln[n]=t,typeof t=="object"&&t!==null&&t.hasOwnProperty("init")&&typeof t.init=="function"&&Ln[n].init(),lc(Ln[n])}function uf(){return Ln}var Oc={};function hf(n,t){let e=typeof t!="function"?()=>t:t;n instanceof Element?Fc(n,e()):Oc[n]=e}function ff(n){return Object.entries(Oc).forEach(([t,e])=>{Object.defineProperty(n,t,{get(){return(...i)=>e(...i)}})}),n}function Fc(n,t,e){let i=[];for(;i.length;)i.pop()();let r=Object.entries(t).map(([a,o])=>({name:a,value:o})),s=dc(r);r=r.map(a=>s.find(o=>o.name===a.name)?{name:`x-bind:${a.name}`,value:`"${a.value}"`}:a),Ua(n,r,e).map(a=>{i.push(a.runCleanups),a()})}var Bc={};function df(n,t){Bc[n]=t}function pf(n,t){return Object.entries(Bc).forEach(([e,i])=>{Object.defineProperty(n,e,{get(){return(...r)=>i.bind(t)(...r)},enumerable:!1})}),n}var mf={get reactive(){return yi},get release(){return Qi},get effect(){return Si},get raw(){return tc},version:"3.12.2",flushAndStopDeferringMutations:Eh,dontAutoEvaluateFunctions:Ah,disableEffectScheduling:ph,startObservingMutations:Ra,stopObservingMutations:ac,setReactivityEngine:mh,closestDataStack:mi,skipDuringClone:nr,onlyDuringClone:Yh,addRootSelector:bc,addInitSelector:Ac,addScopeToNode:tr,deferMutations:Sh,mapAttributes:Da,evaluateLater:ye,interceptInit:Bh,setEvaluator:wh,mergeProxies:er,findClosest:qr,closestRoot:Xr,destroyTree:Rc,interceptor:cc,transition:la,setStyles:Yr,mutateDom:he,directive:se,throttle:Nc,debounce:Ic,evaluate:hi,initTree:Mn,nextTick:Oa,prefixed:Ei,prefix:Ph,plugin:lf,magic:He,store:cf,start:Oh,clone:jh,bound:of,$data:oc,walk:vn,data:df,bind:hf},ir=mf;function gf(n,t){const e=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)e[i[r]]=!0;return t?r=>!!e[r.toLowerCase()]:r=>!!e[r]}var _f=Object.freeze({}),zc=Object.assign,vf=Object.prototype.hasOwnProperty,jr=(n,t)=>vf.call(n,t),On=Array.isArray,Bi=n=>Gc(n)==="[object Map]",xf=n=>typeof n=="string",Ba=n=>typeof n=="symbol",$r=n=>n!==null&&typeof n=="object",Mf=Object.prototype.toString,Gc=n=>Mf.call(n),Hc=n=>Gc(n).slice(8,-1),za=n=>xf(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,yf=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Sf=yf(n=>n.charAt(0).toUpperCase()+n.slice(1)),Vc=(n,t)=>n!==t&&(n===n||t===t),ca=new WeakMap,Ri=[],ke,Fn=Symbol("iterate"),ua=Symbol("Map key iterate");function Ef(n){return n&&n._isEffect===!0}function Tf(n,t=_f){Ef(n)&&(n=n.raw);const e=wf(n,t);return t.lazy||e(),e}function bf(n){n.active&&(kc(n),n.options.onStop&&n.options.onStop(),n.active=!1)}var Af=0;function wf(n,t){const e=function(){if(!e.active)return n();if(!Ri.includes(e)){kc(e);try{return Cf(),Ri.push(e),ke=e,n()}finally{Ri.pop(),Wc(),ke=Ri[Ri.length-1]}}};return e.id=Af++,e.allowRecurse=!!t.allowRecurse,e._isEffect=!0,e.active=!0,e.raw=n,e.deps=[],e.options=t,e}function kc(n){const{deps:t}=n;if(t.length){for(let e=0;e<t.length;e++)t[e].delete(n);t.length=0}}var gi=!0,Ga=[];function Rf(){Ga.push(gi),gi=!1}function Cf(){Ga.push(gi),gi=!0}function Wc(){const n=Ga.pop();gi=n===void 0?!0:n}function Ge(n,t,e){if(!gi||ke===void 0)return;let i=ca.get(n);i||ca.set(n,i=new Map);let r=i.get(e);r||i.set(e,r=new Set),r.has(ke)||(r.add(ke),ke.deps.push(r),ke.options.onTrack&&ke.options.onTrack({effect:ke,target:n,type:t,key:e}))}function yn(n,t,e,i,r,s){const a=ca.get(n);if(!a)return;const o=new Set,l=u=>{u&&u.forEach(h=>{(h!==ke||h.allowRecurse)&&o.add(h)})};if(t==="clear")a.forEach(l);else if(e==="length"&&On(n))a.forEach((u,h)=>{(h==="length"||h>=i)&&l(u)});else switch(e!==void 0&&l(a.get(e)),t){case"add":On(n)?za(e)&&l(a.get("length")):(l(a.get(Fn)),Bi(n)&&l(a.get(ua)));break;case"delete":On(n)||(l(a.get(Fn)),Bi(n)&&l(a.get(ua)));break;case"set":Bi(n)&&l(a.get(Fn));break}const c=u=>{u.options.onTrigger&&u.options.onTrigger({effect:u,target:n,key:e,type:t,newValue:i,oldValue:r,oldTarget:s}),u.options.scheduler?u.options.scheduler(u):u()};o.forEach(c)}var Lf=gf("__proto__,__v_isRef,__isVue"),Xc=new Set(Object.getOwnPropertyNames(Symbol).map(n=>Symbol[n]).filter(Ba)),Pf=Jr(),Uf=Jr(!1,!0),Df=Jr(!0),If=Jr(!0,!0),Hr={};["includes","indexOf","lastIndexOf"].forEach(n=>{const t=Array.prototype[n];Hr[n]=function(...e){const i=jt(this);for(let s=0,a=this.length;s<a;s++)Ge(i,"get",s+"");const r=t.apply(i,e);return r===-1||r===!1?t.apply(i,e.map(jt)):r}});["push","pop","shift","unshift","splice"].forEach(n=>{const t=Array.prototype[n];Hr[n]=function(...e){Rf();const i=t.apply(this,e);return Wc(),i}});function Jr(n=!1,t=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_raw"&&s===(n?t?Wf:au:t?kf:su).get(i))return i;const a=On(i);if(!n&&a&&jr(Hr,r))return Reflect.get(Hr,r,s);const o=Reflect.get(i,r,s);return(Ba(r)?Xc.has(r):Lf(r))||(n||Ge(i,"get",r),t)?o:ha(o)?!a||!za(r)?o.value:o:$r(o)?n?ou(o):Wa(o):o}}var Nf=qc(),Of=qc(!0);function qc(n=!1){return function(e,i,r,s){let a=e[i];if(!n&&(r=jt(r),a=jt(a),!On(e)&&ha(a)&&!ha(r)))return a.value=r,!0;const o=On(e)&&za(i)?Number(i)<e.length:jr(e,i),l=Reflect.set(e,i,r,s);return e===jt(s)&&(o?Vc(r,a)&&yn(e,"set",i,r,a):yn(e,"add",i,r)),l}}function Ff(n,t){const e=jr(n,t),i=n[t],r=Reflect.deleteProperty(n,t);return r&&e&&yn(n,"delete",t,void 0,i),r}function Bf(n,t){const e=Reflect.has(n,t);return(!Ba(t)||!Xc.has(t))&&Ge(n,"has",t),e}function zf(n){return Ge(n,"iterate",On(n)?"length":Fn),Reflect.ownKeys(n)}var Yc={get:Pf,set:Nf,deleteProperty:Ff,has:Bf,ownKeys:zf},jc={get:Df,set(n,t){return console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`,n),!0},deleteProperty(n,t){return console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`,n),!0}};zc({},Yc,{get:Uf,set:Of});zc({},jc,{get:If});var Ha=n=>$r(n)?Wa(n):n,Va=n=>$r(n)?ou(n):n,ka=n=>n,Kr=n=>Reflect.getPrototypeOf(n);function Zr(n,t,e=!1,i=!1){n=n.__v_raw;const r=jt(n),s=jt(t);t!==s&&!e&&Ge(r,"get",t),!e&&Ge(r,"get",s);const{has:a}=Kr(r),o=i?ka:e?Va:Ha;if(a.call(r,t))return o(n.get(t));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(t)}function Qr(n,t=!1){const e=this.__v_raw,i=jt(e),r=jt(n);return n!==r&&!t&&Ge(i,"has",n),!t&&Ge(i,"has",r),n===r?e.has(n):e.has(n)||e.has(r)}function ts(n,t=!1){return n=n.__v_raw,!t&&Ge(jt(n),"iterate",Fn),Reflect.get(n,"size",n)}function $c(n){n=jt(n);const t=jt(this);return Kr(t).has.call(t,n)||(t.add(n),yn(t,"add",n,n)),this}function Jc(n,t){t=jt(t);const e=jt(this),{has:i,get:r}=Kr(e);let s=i.call(e,n);s?ru(e,i,n):(n=jt(n),s=i.call(e,n));const a=r.call(e,n);return e.set(n,t),s?Vc(t,a)&&yn(e,"set",n,t,a):yn(e,"add",n,t),this}function Kc(n){const t=jt(this),{has:e,get:i}=Kr(t);let r=e.call(t,n);r?ru(t,e,n):(n=jt(n),r=e.call(t,n));const s=i?i.call(t,n):void 0,a=t.delete(n);return r&&yn(t,"delete",n,void 0,s),a}function Zc(){const n=jt(this),t=n.size!==0,e=Bi(n)?new Map(n):new Set(n),i=n.clear();return t&&yn(n,"clear",void 0,void 0,e),i}function es(n,t){return function(i,r){const s=this,a=s.__v_raw,o=jt(a),l=t?ka:n?Va:Ha;return!n&&Ge(o,"iterate",Fn),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function cr(n,t,e){return function(...i){const r=this.__v_raw,s=jt(r),a=Bi(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=e?ka:t?Va:Ha;return!t&&Ge(s,"iterate",l?ua:Fn),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:o?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function fn(n){return function(...t){{const e=t[0]?`on key "${t[0]}" `:"";console.warn(`${Sf(n)} operation ${e}failed: target is readonly.`,jt(this))}return n==="delete"?!1:this}}var Qc={get(n){return Zr(this,n)},get size(){return ts(this)},has:Qr,add:$c,set:Jc,delete:Kc,clear:Zc,forEach:es(!1,!1)},tu={get(n){return Zr(this,n,!1,!0)},get size(){return ts(this)},has:Qr,add:$c,set:Jc,delete:Kc,clear:Zc,forEach:es(!1,!0)},eu={get(n){return Zr(this,n,!0)},get size(){return ts(this,!0)},has(n){return Qr.call(this,n,!0)},add:fn("add"),set:fn("set"),delete:fn("delete"),clear:fn("clear"),forEach:es(!0,!1)},nu={get(n){return Zr(this,n,!0,!0)},get size(){return ts(this,!0)},has(n){return Qr.call(this,n,!0)},add:fn("add"),set:fn("set"),delete:fn("delete"),clear:fn("clear"),forEach:es(!0,!0)},Gf=["keys","values","entries",Symbol.iterator];Gf.forEach(n=>{Qc[n]=cr(n,!1,!1),eu[n]=cr(n,!0,!1),tu[n]=cr(n,!1,!0),nu[n]=cr(n,!0,!0)});function iu(n,t){const e=t?n?nu:tu:n?eu:Qc;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(jr(e,r)&&r in i?e:i,r,s)}var Hf={get:iu(!1,!1)},Vf={get:iu(!0,!1)};function ru(n,t,e){const i=jt(e);if(i!==e&&t.call(n,i)){const r=Hc(n);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var su=new WeakMap,kf=new WeakMap,au=new WeakMap,Wf=new WeakMap;function Xf(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qf(n){return n.__v_skip||!Object.isExtensible(n)?0:Xf(Hc(n))}function Wa(n){return n&&n.__v_isReadonly?n:lu(n,!1,Yc,Hf,su)}function ou(n){return lu(n,!0,jc,Vf,au)}function lu(n,t,e,i,r){if(!$r(n))return console.warn(`value cannot be made reactive: ${String(n)}`),n;if(n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=qf(n);if(a===0)return n;const o=new Proxy(n,a===2?i:e);return r.set(n,o),o}function jt(n){return n&&jt(n.__v_raw)||n}function ha(n){return!!(n&&n.__v_isRef===!0)}He("nextTick",()=>Oa);He("dispatch",n=>Fi.bind(Fi,n));He("watch",(n,{evaluateLater:t,effect:e})=>(i,r)=>{let s=t(i),a=!0,o,l=e(()=>s(c=>{JSON.stringify(c),a?o=c:queueMicrotask(()=>{r(c,o),o=c}),a=!1}));n._x_effects.delete(l)});He("store",uf);He("data",n=>oc(n));He("root",n=>Xr(n));He("refs",n=>(n._x_refs_proxy||(n._x_refs_proxy=er(Yf(n))),n._x_refs_proxy));function Yf(n){let t=[],e=n;for(;e;)e._x_refs&&t.push(e._x_refs),e=e.parentNode;return t}var ms={};function cu(n){return ms[n]||(ms[n]=0),++ms[n]}function jf(n,t){return qr(n,e=>{if(e._x_ids&&e._x_ids[t])return!0})}function $f(n,t){n._x_ids||(n._x_ids={}),n._x_ids[t]||(n._x_ids[t]=cu(t))}He("id",n=>(t,e=null)=>{let i=jf(n,t),r=i?i._x_ids[t]:cu(t);return e?`${t}-${r}-${e}`:`${t}-${r}`});He("el",n=>n);uu("Focus","focus","focus");uu("Persist","persist","persist");function uu(n,t,e){He(t,i=>xn(`You can't use [$${directiveName}] without first installing the "${n}" plugin here: https://alpinejs.dev/plugins/${e}`,i))}function Jf({get:n,set:t},{get:e,set:i}){let r=!0,s,a,o=Si(()=>{let l,c;r?(l=n(),i(l),c=e(),r=!1):(l=n(),c=e(),a=JSON.stringify(l),JSON.stringify(c),a!==s?(c=e(),i(l),c=l):(t(c),l=c)),s=JSON.stringify(l),JSON.stringify(c)});return()=>{Qi(o)}}se("modelable",(n,{expression:t},{effect:e,evaluateLater:i,cleanup:r})=>{let s=i(t),a=()=>{let u;return s(h=>u=h),u},o=i(`${t} = __placeholder`),l=u=>o(()=>{},{scope:{__placeholder:u}}),c=a();l(c),queueMicrotask(()=>{if(!n._x_model)return;n._x_removeModelListeners.default();let u=n._x_model.get,h=n._x_model.set,f=Jf({get(){return u()},set(m){h(m)}},{get(){return a()},set(m){l(m)}});r(f)})});var Kf=document.createElement("div");se("teleport",(n,{modifiers:t,expression:e},{cleanup:i})=>{n.tagName.toLowerCase()!=="template"&&xn("x-teleport can only be used on a <template> tag",n);let r=nr(()=>document.querySelector(e),()=>Kf)();r||xn(`Cannot find x-teleport element for selector: "${e}"`);let s=n.content.cloneNode(!0).firstElementChild;n._x_teleport=s,s._x_teleportBack=n,n._x_forwardEvents&&n._x_forwardEvents.forEach(a=>{s.addEventListener(a,o=>{o.stopPropagation(),n.dispatchEvent(new o.constructor(o.type,o))})}),tr(s,{},n),he(()=>{t.includes("prepend")?r.parentNode.insertBefore(s,r):t.includes("append")?r.parentNode.insertBefore(s,r.nextSibling):r.appendChild(s),Mn(s),s._x_ignore=!0}),i(()=>s.remove())});var hu=()=>{};hu.inline=(n,{modifiers:t},{cleanup:e})=>{t.includes("self")?n._x_ignoreSelf=!0:n._x_ignore=!0,e(()=>{t.includes("self")?delete n._x_ignoreSelf:delete n._x_ignore})};se("ignore",hu);se("effect",(n,{expression:t},{effect:e})=>e(ye(n,t)));function fa(n,t,e,i){let r=n,s=l=>i(l),a={},o=(l,c)=>u=>c(l,u);if(e.includes("dot")&&(t=Zf(t)),e.includes("camel")&&(t=Qf(t)),e.includes("passive")&&(a.passive=!0),e.includes("capture")&&(a.capture=!0),e.includes("window")&&(r=window),e.includes("document")&&(r=document),e.includes("debounce")){let l=e[e.indexOf("debounce")+1]||"invalid-wait",c=Vr(l.split("ms")[0])?Number(l.split("ms")[0]):250;s=Ic(s,c)}if(e.includes("throttle")){let l=e[e.indexOf("throttle")+1]||"invalid-wait",c=Vr(l.split("ms")[0])?Number(l.split("ms")[0]):250;s=Nc(s,c)}return e.includes("prevent")&&(s=o(s,(l,c)=>{c.preventDefault(),l(c)})),e.includes("stop")&&(s=o(s,(l,c)=>{c.stopPropagation(),l(c)})),e.includes("self")&&(s=o(s,(l,c)=>{c.target===n&&l(c)})),(e.includes("away")||e.includes("outside"))&&(r=document,s=o(s,(l,c)=>{n.contains(c.target)||c.target.isConnected!==!1&&(n.offsetWidth<1&&n.offsetHeight<1||n._x_isShown!==!1&&l(c))})),e.includes("once")&&(s=o(s,(l,c)=>{l(c),r.removeEventListener(t,s,a)})),s=o(s,(l,c)=>{ed(t)&&nd(c,e)||l(c)}),r.addEventListener(t,s,a),()=>{r.removeEventListener(t,s,a)}}function Zf(n){return n.replace(/-/g,".")}function Qf(n){return n.toLowerCase().replace(/-(\w)/g,(t,e)=>e.toUpperCase())}function Vr(n){return!Array.isArray(n)&&!isNaN(n)}function td(n){return[" ","_"].includes(n)?n:n.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function ed(n){return["keydown","keyup"].includes(n)}function nd(n,t){let e=t.filter(s=>!["window","document","prevent","stop","once","capture"].includes(s));if(e.includes("debounce")){let s=e.indexOf("debounce");e.splice(s,Vr((e[s+1]||"invalid-wait").split("ms")[0])?2:1)}if(e.includes("throttle")){let s=e.indexOf("throttle");e.splice(s,Vr((e[s+1]||"invalid-wait").split("ms")[0])?2:1)}if(e.length===0||e.length===1&&go(n.key).includes(e[0]))return!1;const r=["ctrl","shift","alt","meta","cmd","super"].filter(s=>e.includes(s));return e=e.filter(s=>!r.includes(s)),!(r.length>0&&r.filter(a=>((a==="cmd"||a==="super")&&(a="meta"),n[`${a}Key`])).length===r.length&&go(n.key).includes(e[0]))}function go(n){if(!n)return[];n=td(n);let t={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",equal:"=",minus:"-",underscore:"_"};return t[n]=n,Object.keys(t).map(e=>{if(t[e]===n)return e}).filter(e=>e)}se("model",(n,{modifiers:t,expression:e},{effect:i,cleanup:r})=>{let s=n;t.includes("parent")&&(s=n.parentNode);let a=ye(s,e),o;typeof e=="string"?o=ye(s,`${e} = __placeholder`):typeof e=="function"&&typeof e()=="string"?o=ye(s,`${e()} = __placeholder`):o=()=>{};let l=()=>{let f;return a(m=>f=m),_o(f)?f.get():f},c=f=>{let m;a(_=>m=_),_o(m)?m.set(f):o(()=>{},{scope:{__placeholder:f}})};typeof e=="string"&&n.type==="radio"&&he(()=>{n.hasAttribute("name")||n.setAttribute("name",e)});var u=n.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(n.type)||t.includes("lazy")?"change":"input";let h=Xi?()=>{}:fa(n,u,t,f=>{c(id(n,t,f,l()))});if(t.includes("fill")&&[null,""].includes(l())&&n.dispatchEvent(new Event(u,{})),n._x_removeModelListeners||(n._x_removeModelListeners={}),n._x_removeModelListeners.default=h,r(()=>n._x_removeModelListeners.default()),n.form){let f=fa(n.form,"reset",[],m=>{Oa(()=>n._x_model&&n._x_model.set(n.value))});r(()=>f())}n._x_model={get(){return l()},set(f){c(f)}},n._x_forceModelUpdate=f=>{f=f===void 0?l():f,f===void 0&&typeof e=="string"&&e.match(/\./)&&(f=""),window.fromModel=!0,he(()=>Pc(n,"value",f)),delete window.fromModel},i(()=>{let f=l();t.includes("unintrusive")&&document.activeElement.isSameNode(n)||n._x_forceModelUpdate(f)})});function id(n,t,e,i){return he(()=>{if(e instanceof CustomEvent&&e.detail!==void 0)return e.detail??e.target.value;if(n.type==="checkbox")if(Array.isArray(i)){let r=t.includes("number")?gs(e.target.value):e.target.value;return e.target.checked?i.concat([r]):i.filter(s=>!rd(s,r))}else return e.target.checked;else{if(n.tagName.toLowerCase()==="select"&&n.multiple)return t.includes("number")?Array.from(e.target.selectedOptions).map(r=>{let s=r.value||r.text;return gs(s)}):Array.from(e.target.selectedOptions).map(r=>r.value||r.text);{let r=e.target.value;return t.includes("number")?gs(r):t.includes("trim")?r.trim():r}}})}function gs(n){let t=n?parseFloat(n):null;return sd(t)?t:n}function rd(n,t){return n==t}function sd(n){return!Array.isArray(n)&&!isNaN(n)}function _o(n){return n!==null&&typeof n=="object"&&typeof n.get=="function"&&typeof n.set=="function"}se("cloak",n=>queueMicrotask(()=>he(()=>n.removeAttribute(Ei("cloak")))));Ac(()=>`[${Ei("init")}]`);se("init",nr((n,{expression:t},{evaluate:e})=>typeof t=="string"?!!t.trim()&&e(t,{},!1):e(t,{},!1)));se("text",(n,{expression:t},{effect:e,evaluateLater:i})=>{let r=i(t);e(()=>{r(s=>{he(()=>{n.textContent=s})})})});se("html",(n,{expression:t},{effect:e,evaluateLater:i})=>{let r=i(t);e(()=>{r(s=>{he(()=>{n.innerHTML=s,n._x_ignoreSelf=!0,Mn(n),delete n._x_ignoreSelf})})})});Da(gc(":",_c(Ei("bind:"))));se("bind",(n,{value:t,modifiers:e,expression:i,original:r},{effect:s})=>{if(!t){let o={};ff(o),ye(n,i)(c=>{Fc(n,c,r)},{scope:o});return}if(t==="key")return ad(n,i);let a=ye(n,i);s(()=>a(o=>{o===void 0&&typeof i=="string"&&i.match(/\./)&&(o=""),he(()=>Pc(n,t,o,e))}))});function ad(n,t){n._x_keyExpression=t}bc(()=>`[${Ei("data")}]`);se("data",nr((n,{expression:t},{cleanup:e})=>{t=t===""?"{}":t;let i={};ea(i,n);let r={};pf(r,i);let s=hi(n,t,{scope:r});(s===void 0||s===!0)&&(s={}),ea(s,n);let a=yi(s);lc(a);let o=tr(n,a);a.init&&hi(n,a.init),e(()=>{a.destroy&&hi(n,a.destroy),o()})}));se("show",(n,{modifiers:t,expression:e},{effect:i})=>{let r=ye(n,e);n._x_doHide||(n._x_doHide=()=>{he(()=>{n.style.setProperty("display","none",t.includes("important")?"important":void 0)})}),n._x_doShow||(n._x_doShow=()=>{he(()=>{n.style.length===1&&n.style.display==="none"?n.removeAttribute("style"):n.style.removeProperty("display")})});let s=()=>{n._x_doHide(),n._x_isShown=!1},a=()=>{n._x_doShow(),n._x_isShown=!0},o=()=>setTimeout(a),l=oa(h=>h?a():s(),h=>{typeof n._x_toggleAndCascadeWithTransitions=="function"?n._x_toggleAndCascadeWithTransitions(n,h,a,s):h?o():s()}),c,u=!0;i(()=>r(h=>{!u&&h===c||(t.includes("immediate")&&(h?o():s()),l(h),c=h,u=!1)}))});se("for",(n,{expression:t},{effect:e,cleanup:i})=>{let r=ld(t),s=ye(n,r.items),a=ye(n,n._x_keyExpression||"index");n._x_prevKeys=[],n._x_lookup={},e(()=>od(n,r,s,a)),i(()=>{Object.values(n._x_lookup).forEach(o=>o.remove()),delete n._x_prevKeys,delete n._x_lookup})});function od(n,t,e,i){let r=a=>typeof a=="object"&&!Array.isArray(a),s=n;e(a=>{cd(a)&&a>=0&&(a=Array.from(Array(a).keys(),p=>p+1)),a===void 0&&(a=[]);let o=n._x_lookup,l=n._x_prevKeys,c=[],u=[];if(r(a))a=Object.entries(a).map(([p,d])=>{let E=vo(t,d,p,a);i(g=>u.push(g),{scope:{index:p,...E}}),c.push(E)});else for(let p=0;p<a.length;p++){let d=vo(t,a[p],p,a);i(E=>u.push(E),{scope:{index:p,...d}}),c.push(d)}let h=[],f=[],m=[],_=[];for(let p=0;p<l.length;p++){let d=l[p];u.indexOf(d)===-1&&m.push(d)}l=l.filter(p=>!m.includes(p));let v="template";for(let p=0;p<u.length;p++){let d=u[p],E=l.indexOf(d);if(E===-1)l.splice(p,0,d),h.push([v,p]);else if(E!==p){let g=l.splice(p,1)[0],y=l.splice(E-1,1)[0];l.splice(p,0,y),l.splice(E,0,g),f.push([g,y])}else _.push(d);v=d}for(let p=0;p<m.length;p++){let d=m[p];o[d]._x_effects&&o[d]._x_effects.forEach(Ql),o[d].remove(),o[d]=null,delete o[d]}for(let p=0;p<f.length;p++){let[d,E]=f[p],g=o[d],y=o[E],A=document.createElement("div");he(()=>{y||xn('x-for ":key" is undefined or invalid',s),y.after(A),g.after(y),y._x_currentIfEl&&y.after(y._x_currentIfEl),A.before(g),g._x_currentIfEl&&g.after(g._x_currentIfEl),A.remove()}),y._x_refreshXForScope(c[u.indexOf(E)])}for(let p=0;p<h.length;p++){let[d,E]=h[p],g=d==="template"?s:o[d];g._x_currentIfEl&&(g=g._x_currentIfEl);let y=c[E],A=u[E],w=document.importNode(s.content,!0).firstElementChild,C=yi(y);tr(w,C,s),w._x_refreshXForScope=U=>{Object.entries(U).forEach(([x,b])=>{C[x]=b})},he(()=>{g.after(w),Mn(w)}),typeof A=="object"&&xn("x-for key cannot be an object, it must be a string or an integer",s),o[A]=w}for(let p=0;p<_.length;p++)o[_[p]]._x_refreshXForScope(c[u.indexOf(_[p])]);s._x_prevKeys=u})}function ld(n){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,e=/^\s*\(|\)\s*$/g,i=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,r=n.match(i);if(!r)return;let s={};s.items=r[2].trim();let a=r[1].replace(e,"").trim(),o=a.match(t);return o?(s.item=a.replace(t,"").trim(),s.index=o[1].trim(),o[2]&&(s.collection=o[2].trim())):s.item=a,s}function vo(n,t,e,i){let r={};return/^\[.*\]$/.test(n.item)&&Array.isArray(t)?n.item.replace("[","").replace("]","").split(",").map(a=>a.trim()).forEach((a,o)=>{r[a]=t[o]}):/^\{.*\}$/.test(n.item)&&!Array.isArray(t)&&typeof t=="object"?n.item.replace("{","").replace("}","").split(",").map(a=>a.trim()).forEach(a=>{r[a]=t[a]}):r[n.item]=t,n.index&&(r[n.index]=e),n.collection&&(r[n.collection]=i),r}function cd(n){return!Array.isArray(n)&&!isNaN(n)}function fu(){}fu.inline=(n,{expression:t},{cleanup:e})=>{let i=Xr(n);i._x_refs||(i._x_refs={}),i._x_refs[t]=n,e(()=>delete i._x_refs[t])};se("ref",fu);se("if",(n,{expression:t},{effect:e,cleanup:i})=>{let r=ye(n,t),s=()=>{if(n._x_currentIfEl)return n._x_currentIfEl;let o=n.content.cloneNode(!0).firstElementChild;return tr(o,{},n),he(()=>{n.after(o),Mn(o)}),n._x_currentIfEl=o,n._x_undoIf=()=>{vn(o,l=>{l._x_effects&&l._x_effects.forEach(Ql)}),o.remove(),delete n._x_currentIfEl},o},a=()=>{n._x_undoIf&&(n._x_undoIf(),delete n._x_undoIf)};e(()=>r(o=>{o?s():a()})),i(()=>n._x_undoIf&&n._x_undoIf())});se("id",(n,{expression:t},{evaluate:e})=>{e(t).forEach(r=>$f(n,r))});Da(gc("@",_c(Ei("on:"))));se("on",nr((n,{value:t,modifiers:e,expression:i},{cleanup:r})=>{let s=i?ye(n,i):()=>{};n.tagName.toLowerCase()==="template"&&(n._x_forwardEvents||(n._x_forwardEvents=[]),n._x_forwardEvents.includes(t)||n._x_forwardEvents.push(t));let a=fa(n,t,e,o=>{s(()=>{},{scope:{$event:o},params:[o]})});r(()=>a())}));ns("Collapse","collapse","collapse");ns("Intersect","intersect","intersect");ns("Focus","trap","focus");ns("Mask","mask","mask");function ns(n,t,e){se(t,i=>xn(`You can't use [x-${t}] without first installing the "${n}" plugin here: https://alpinejs.dev/plugins/${e}`,i))}ir.setEvaluator(fc);ir.setReactivityEngine({reactive:Wa,effect:Tf,release:bf,raw:jt});var ud=ir,xo=ud;const hd="modulepreload",fd=function(n){return"/iks/"+n},Mo={},dd=function(t,e,i){if(!e||e.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(e.map(s=>{if(s=fd(s),s in Mo)return;Mo[s]=!0;const a=s.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===s&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${o}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":hd,a||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),a)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xa="153",U0={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},D0={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pd=0,yo=1,md=2,du=1,gd=2,nn=3,Sn=0,Ee=1,rn=2,gn=0,fi=1,So=2,Eo=3,To=4,_d=5,li=100,vd=101,xd=102,bo=103,Ao=104,Md=200,yd=201,Sd=202,Ed=203,pu=204,mu=205,Td=206,bd=207,Ad=208,wd=209,Rd=210,Cd=0,Ld=1,Pd=2,da=3,Ud=4,Dd=5,Id=6,Nd=7,is=0,Od=1,Fd=2,on=0,Bd=1,zd=2,Gd=3,Hd=4,Vd=5,gu=300,_i=301,vi=302,pa=303,ma=304,rs=306,ga=1e3,Be=1001,_a=1002,Me=1003,wo=1004,_s=1005,Ce=1006,kd=1007,qi=1008,_n=1009,Wd=1010,Xd=1011,qa=1012,_u=1013,dn=1014,pn=1015,Yi=1016,vu=1017,xu=1018,Bn=1020,qd=1021,ze=1023,Yd=1024,jd=1025,zn=1026,xi=1027,$d=1028,Mu=1029,Jd=1030,yu=1031,Su=1033,vs=33776,xs=33777,Ms=33778,ys=33779,Ro=35840,Co=35841,Lo=35842,Po=35843,Kd=36196,Uo=37492,Do=37496,Io=37808,No=37809,Oo=37810,Fo=37811,Bo=37812,zo=37813,Go=37814,Ho=37815,Vo=37816,ko=37817,Wo=37818,Xo=37819,qo=37820,Yo=37821,Ss=36492,Zd=36283,jo=36284,$o=36285,Jo=36286,I0=0,N0=1,O0=2,Eu=3e3,Gn=3001,Qd=3200,tp=3201,Ya=0,ep=1,Hn="",Nt="srgb",qe="srgb-linear",Tu="display-p3",Es=7680,np=519,ip=512,rp=513,sp=514,ap=515,op=516,lp=517,cp=518,up=519,va=35044,Ko="300 es",xa=1035,sn=2e3,kr=2001;class Ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zo=1234567;const zi=Math.PI/180,ji=180/Math.PI;function Xe(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pe[n&255]+pe[n>>8&255]+pe[n>>16&255]+pe[n>>24&255]+"-"+pe[t&255]+pe[t>>8&255]+"-"+pe[t>>16&15|64]+pe[t>>24&255]+"-"+pe[e&63|128]+pe[e>>8&255]+"-"+pe[e>>16&255]+pe[e>>24&255]+pe[i&255]+pe[i>>8&255]+pe[i>>16&255]+pe[i>>24&255]).toLowerCase()}function ae(n,t,e){return Math.max(t,Math.min(e,n))}function ja(n,t){return(n%t+t)%t}function hp(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function fp(n,t,e){return n!==t?(e-n)/(t-n):0}function Gi(n,t,e){return(1-e)*n+e*t}function dp(n,t,e,i){return Gi(n,t,1-Math.exp(-e*i))}function pp(n,t=1){return t-Math.abs(ja(n,t*2)-t)}function mp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function gp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function _p(n,t){return n+Math.floor(Math.random()*(t-n+1))}function vp(n,t){return n+Math.random()*(t-n)}function xp(n){return n*(.5-Math.random())}function Mp(n){n!==void 0&&(Zo=n);let t=Zo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yp(n){return n*zi}function Sp(n){return n*ji}function Ma(n){return(n&n-1)===0&&n!==0}function Ep(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Wr(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Tp(n,t,e,i,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+i)/2),u=a((t+i)/2),h=s((t-i)/2),f=a((t-i)/2),m=s((i-t)/2),_=a((i-t)/2);switch(r){case"XYX":n.set(o*u,l*h,l*f,o*c);break;case"YZY":n.set(l*f,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*f,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function an(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xt(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const F0={DEG2RAD:zi,RAD2DEG:ji,generateUUID:Xe,clamp:ae,euclideanModulo:ja,mapLinear:hp,inverseLerp:fp,lerp:Gi,damp:dp,pingpong:pp,smoothstep:mp,smootherstep:gp,randInt:_p,randFloat:vp,randFloatSpread:xp,seededRandom:Mp,degToRad:yp,radToDeg:Sp,isPowerOfTwo:Ma,ceilPowerOfTwo:Ep,floorPowerOfTwo:Wr,setQuaternionFromProperEuler:Tp,normalize:Xt,denormalize:an};class ot{constructor(t=0,e=0){ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,i,r,s,a,o,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],_=i[8],v=r[0],p=r[3],d=r[6],E=r[1],g=r[4],y=r[7],A=r[2],w=r[5],C=r[8];return s[0]=a*v+o*E+l*A,s[3]=a*p+o*g+l*w,s[6]=a*d+o*y+l*C,s[1]=c*v+u*E+h*A,s[4]=c*p+u*g+h*w,s[7]=c*d+u*y+h*C,s[2]=f*v+m*E+_*A,s[5]=f*p+m*g+_*w,s[8]=f*d+m*y+_*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*s,m=c*s-a*l,_=e*h+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=h*v,t[1]=(r*c-u*i)*v,t[2]=(o*i-r*a)*v,t[3]=f*v,t[4]=(u*e-r*l)*v,t[5]=(r*s-o*e)*v,t[6]=m*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ts.makeScale(t,e)),this}rotate(t){return this.premultiply(Ts.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ts.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ts=new Ft;function bu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function $i(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const Qo={};function Hi(n){n in Qo||(Qo[n]=!0,console.warn(n))}function di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const bp=new Ft().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ap=new Ft().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function wp(n){return n.convertSRGBToLinear().applyMatrix3(Ap)}function Rp(n){return n.applyMatrix3(bp).convertLinearToSRGB()}const Cp={[qe]:n=>n,[Nt]:n=>n.convertSRGBToLinear(),[Tu]:wp},Lp={[qe]:n=>n,[Nt]:n=>n.convertLinearToSRGB(),[Tu]:Rp},Ue={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return qe},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Cp[t],r=Lp[e];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)}};let qn;class Au{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qn===void 0&&(qn=$i("canvas")),qn.width=t.width,qn.height=t.height;const i=qn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=qn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$i("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=di(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(di(e[i]/255)*255):e[i]=di(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pp=0;class wu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Xe(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(As(r[a].image)):s.push(As(r[a]))}else s=As(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function As(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Au.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Up=0;class Te extends Ti{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,i=Be,r=Be,s=Ce,a=qi,o=ze,l=_n,c=Te.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Xe(),this.name="",this.source=new wu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Gn?Nt:Hn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ga:t.x=t.x-Math.floor(t.x);break;case Be:t.x=t.x<0?0:1;break;case _a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ga:t.y=t.y-Math.floor(t.y);break;case Be:t.y=t.y<0?0:1;break;case _a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Nt?Gn:Eu}set encoding(t){Hi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Gn?Nt:Hn}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=gu;Te.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,i=0,r=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],_=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const g=(c+1)/2,y=(m+1)/2,A=(d+1)/2,w=(u+f)/4,C=(h+v)/4,U=(_+p)/4;return g>y&&g>A?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=w/i,s=C/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=U/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=C/s,r=U/s),this.set(i,r,s,e),this}let E=Math.sqrt((p-_)*(p-_)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(p-_)/E,this.y=(h-v)/E,this.z=(f-u)/E,this.w=Math.acos((c+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vn extends Ti{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const r={width:t,height:e,depth:1};i.encoding!==void 0&&(Hi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Gn?Nt:Hn),this.texture=new Te(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ce,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new wu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ru extends Te{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Me,this.minFilter=Me,this.wrapR=Be,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dp extends Te{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Me,this.minFilter=Me,this.wrapR=Be,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rr{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[a+0],m=s[a+1],_=s[a+2],v=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=v;return}if(h!==v||l!==f||c!==m||u!==_){let p=1-o;const d=l*f+c*m+u*_+h*v,E=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const A=Math.sqrt(g),w=Math.atan2(A,d*E);p=Math.sin(p*w)/A,o=Math.sin(o*w)/A}const y=o*E;if(l=l*p+f*y,c=c*p+m*y,u=u*p+_*y,h=h*p+v*y,p===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return t[e]=o*_+u*h+l*m-c*f,t[e+1]=l*_+u*f+c*h-o*m,t[e+2]=c*_+u*m+o*f-l*h,t[e+3]=u*_-o*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"YZX":this._x=f*u*h+c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h-f*m*_;break;case"XZY":this._x=f*u*h-c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),i*Math.sin(s),i*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=l*e+a*r-o*i,u=l*i+o*e-s*r,h=l*r+s*i-a*e,f=-s*e-a*i-o*r;return this.x=c*l+f*-s+u*-o-h*-a,this.y=u*l+f*-a+h*-s-c*-o,this.z=h*l+f*-o+c*-a-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ws.copy(this).projectOnVector(t),this.sub(ws)}reflect(t){return this.sub(ws.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ws=new L,tl=new rr;class sr{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Yn.copy(t.boundingBox),Yn.applyMatrix4(t.matrixWorld),this.union(Yn);else{const r=t.geometry;if(r!==void 0)if(e&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)Ke.fromBufferAttribute(s,a).applyMatrix4(t.matrixWorld),this.expandByPoint(Ke)}else r.boundingBox===null&&r.computeBoundingBox(),Yn.copy(r.boundingBox),Yn.applyMatrix4(t.matrixWorld),this.union(Yn)}const i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ci),ur.subVectors(this.max,Ci),jn.subVectors(t.a,Ci),$n.subVectors(t.b,Ci),Jn.subVectors(t.c,Ci),ln.subVectors($n,jn),cn.subVectors(Jn,$n),An.subVectors(jn,Jn);let e=[0,-ln.z,ln.y,0,-cn.z,cn.y,0,-An.z,An.y,ln.z,0,-ln.x,cn.z,0,-cn.x,An.z,0,-An.x,-ln.y,ln.x,0,-cn.y,cn.x,0,-An.y,An.x,0];return!Rs(e,jn,$n,Jn,ur)||(e=[1,0,0,0,1,0,0,0,1],!Rs(e,jn,$n,Jn,ur))?!1:(hr.crossVectors(ln,cn),e=[hr.x,hr.y,hr.z],Rs(e,jn,$n,Jn,ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Je[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Je[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Je[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Je[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Je[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Je[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Je[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Je[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Je),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Je=[new L,new L,new L,new L,new L,new L,new L,new L],Ke=new L,Yn=new sr,jn=new L,$n=new L,Jn=new L,ln=new L,cn=new L,An=new L,Ci=new L,ur=new L,hr=new L,wn=new L;function Rs(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){wn.fromArray(n,s);const o=r.x*Math.abs(wn.x)+r.y*Math.abs(wn.y)+r.z*Math.abs(wn.z),l=t.dot(wn),c=e.dot(wn),u=i.dot(wn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ip=new sr,Li=new L,Cs=new L;class ss{constructor(t=new L,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ip.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Li.subVectors(t,this.center);const e=Li.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Li,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Li.copy(t.center).add(Cs)),this.expandByPoint(Li.copy(t.center).sub(Cs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ze=new L,Ls=new L,fr=new L,un=new L,Ps=new L,dr=new L,Us=new L;class $a{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ze)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ze.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ze.copy(this.origin).addScaledVector(this.direction,e),Ze.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Ls.copy(t).add(e).multiplyScalar(.5),fr.copy(e).sub(t).normalize(),un.copy(this.origin).sub(Ls);const s=t.distanceTo(e)*.5,a=-this.direction.dot(fr),o=un.dot(this.direction),l=-un.dot(fr),c=un.lengthSq(),u=Math.abs(1-a*a);let h,f,m,_;if(u>0)if(h=a*l-o,f=a*o-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const v=1/u;h*=v,f*=v,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ls).addScaledVector(fr,f),m}intersectSphere(t,e){Ze.subVectors(t.center,this.origin);const i=Ze.dot(this.direction),r=Ze.dot(Ze)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Ze)!==null}intersectTriangle(t,e,i,r,s){Ps.subVectors(e,t),dr.subVectors(i,t),Us.crossVectors(Ps,dr);let a=this.direction.dot(Us),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;un.subVectors(this.origin,t);const l=o*this.direction.dot(dr.crossVectors(un,dr));if(l<0)return null;const c=o*this.direction.dot(Ps.cross(un));if(c<0||l+c>a)return null;const u=-o*un.dot(Us);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,i,r,s,a,o,l,c,u,h,f,m,_,v,p){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,u,h,f,m,_,v,p)}set(t,e,i,r,s,a,o,l,c,u,h,f,m,_,v,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=_,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Kn.setFromMatrixColumn(t,0).length(),s=1/Kn.setFromMatrixColumn(t,1).length(),a=1/Kn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=a*u,m=a*h,_=o*u,v=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+_*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,m=l*h,_=c*u,v=c*h;e[0]=f+v*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=m*o-_,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,m=l*h,_=c*u,v=c*h;e[0]=f-v*o,e[4]=-a*h,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*u,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,m=a*h,_=o*u,v=o*h;e[0]=l*u,e[4]=_*c-m,e[8]=f*c+v,e[1]=l*h,e[5]=v*c+f,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,_=o*l,v=o*c;e[0]=l*u,e[4]=v-f*h,e[8]=_*h+m,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*h+_,e[10]=f-v*h}else if(t.order==="XZY"){const f=a*l,m=a*c,_=o*l,v=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+v,e[5]=a*u,e[9]=m*h-_,e[2]=_*h-m,e[6]=o*u,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Np,t,Op)}lookAt(t,e,i){const r=this.elements;return Ae.subVectors(t,e),Ae.lengthSq()===0&&(Ae.z=1),Ae.normalize(),hn.crossVectors(i,Ae),hn.lengthSq()===0&&(Math.abs(i.z)===1?Ae.x+=1e-4:Ae.z+=1e-4,Ae.normalize(),hn.crossVectors(i,Ae)),hn.normalize(),pr.crossVectors(Ae,hn),r[0]=hn.x,r[4]=pr.x,r[8]=Ae.x,r[1]=hn.y,r[5]=pr.y,r[9]=Ae.y,r[2]=hn.z,r[6]=pr.z,r[10]=Ae.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],_=i[2],v=i[6],p=i[10],d=i[14],E=i[3],g=i[7],y=i[11],A=i[15],w=r[0],C=r[4],U=r[8],x=r[12],b=r[1],G=r[5],K=r[9],N=r[13],O=r[2],F=r[6],j=r[10],X=r[14],Y=r[3],$=r[7],Z=r[11],ft=r[15];return s[0]=a*w+o*b+l*O+c*Y,s[4]=a*C+o*G+l*F+c*$,s[8]=a*U+o*K+l*j+c*Z,s[12]=a*x+o*N+l*X+c*ft,s[1]=u*w+h*b+f*O+m*Y,s[5]=u*C+h*G+f*F+m*$,s[9]=u*U+h*K+f*j+m*Z,s[13]=u*x+h*N+f*X+m*ft,s[2]=_*w+v*b+p*O+d*Y,s[6]=_*C+v*G+p*F+d*$,s[10]=_*U+v*K+p*j+d*Z,s[14]=_*x+v*N+p*X+d*ft,s[3]=E*w+g*b+y*O+A*Y,s[7]=E*C+g*G+y*F+A*$,s[11]=E*U+g*K+y*j+A*Z,s[15]=E*x+g*N+y*X+A*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],m=t[14],_=t[3],v=t[7],p=t[11],d=t[15];return _*(+s*l*h-r*c*h-s*o*f+i*c*f+r*o*m-i*l*m)+v*(+e*l*m-e*c*f+s*a*f-r*a*m+r*c*u-s*l*u)+p*(+e*c*h-e*o*m-s*a*h+i*a*m+s*o*u-i*c*u)+d*(-r*o*u-e*l*h+e*o*f+r*a*h-i*a*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],m=t[11],_=t[12],v=t[13],p=t[14],d=t[15],E=h*p*c-v*f*c+v*l*m-o*p*m-h*l*d+o*f*d,g=_*f*c-u*p*c-_*l*m+a*p*m+u*l*d-a*f*d,y=u*v*c-_*h*c+_*o*m-a*v*m-u*o*d+a*h*d,A=_*h*l-u*v*l-_*o*f+a*v*f+u*o*p-a*h*p,w=e*E+i*g+r*y+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return t[0]=E*C,t[1]=(v*f*s-h*p*s-v*r*m+i*p*m+h*r*d-i*f*d)*C,t[2]=(o*p*s-v*l*s+v*r*c-i*p*c-o*r*d+i*l*d)*C,t[3]=(h*l*s-o*f*s-h*r*c+i*f*c+o*r*m-i*l*m)*C,t[4]=g*C,t[5]=(u*p*s-_*f*s+_*r*m-e*p*m-u*r*d+e*f*d)*C,t[6]=(_*l*s-a*p*s-_*r*c+e*p*c+a*r*d-e*l*d)*C,t[7]=(a*f*s-u*l*s+u*r*c-e*f*c-a*r*m+e*l*m)*C,t[8]=y*C,t[9]=(_*h*s-u*v*s-_*i*m+e*v*m+u*i*d-e*h*d)*C,t[10]=(a*v*s-_*o*s+_*i*c-e*v*c-a*i*d+e*o*d)*C,t[11]=(u*o*s-a*h*s-u*i*c+e*h*c+a*i*m-e*o*m)*C,t[12]=A*C,t[13]=(u*v*r-_*h*r+_*i*f-e*v*f-u*i*p+e*h*p)*C,t[14]=(_*o*r-a*v*r-_*i*l+e*v*l+a*i*p-e*o*p)*C,t[15]=(a*h*r-u*o*r+u*i*l-e*h*l-a*i*f+e*o*f)*C,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,f=s*c,m=s*u,_=s*h,v=a*u,p=a*h,d=o*h,E=l*c,g=l*u,y=l*h,A=i.x,w=i.y,C=i.z;return r[0]=(1-(v+d))*A,r[1]=(m+y)*A,r[2]=(_-g)*A,r[3]=0,r[4]=(m-y)*w,r[5]=(1-(f+d))*w,r[6]=(p+E)*w,r[7]=0,r[8]=(_+g)*C,r[9]=(p-E)*C,r[10]=(1-(f+v))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Kn.set(r[0],r[1],r[2]).length();const a=Kn.set(r[4],r[5],r[6]).length(),o=Kn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],De.copy(this);const c=1/s,u=1/a,h=1/o;return De.elements[0]*=c,De.elements[1]*=c,De.elements[2]*=c,De.elements[4]*=u,De.elements[5]*=u,De.elements[6]*=u,De.elements[8]*=h,De.elements[9]*=h,De.elements[10]*=h,e.setFromRotationMatrix(De),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=sn){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),h=(e+t)/(e-t),f=(i+r)/(i-r);let m,_;if(o===sn)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===kr)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=sn){const l=this.elements,c=1/(e-t),u=1/(i-r),h=1/(a-s),f=(e+t)*c,m=(i+r)*u;let _,v;if(o===sn)_=(a+s)*h,v=-2*h;else if(o===kr)_=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Kn=new L,De=new ee,Np=new L(0,0,0),Op=new L(1,1,1),hn=new L,pr=new L,Ae=new L,el=new ee,nl=new rr;class as{constructor(t=0,e=0,i=0,r=as.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return el.makeRotationFromQuaternion(t),this.setFromRotationMatrix(el,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nl.setFromEuler(this),this.setFromQuaternion(nl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}as.DEFAULT_ORDER="XYZ";class Ja{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fp=0;const il=new L,Zn=new rr,Qe=new ee,mr=new L,Pi=new L,Bp=new L,zp=new rr,rl=new L(1,0,0),sl=new L(0,1,0),al=new L(0,0,1),Gp={type:"added"},ol={type:"removed"};class de extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Xe(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new L,e=new as,i=new rr,r=new L(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ee},normalMatrix:{value:new Ft}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zn.setFromAxisAngle(t,e),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(t,e){return Zn.setFromAxisAngle(t,e),this.quaternion.premultiply(Zn),this}rotateX(t){return this.rotateOnAxis(rl,t)}rotateY(t){return this.rotateOnAxis(sl,t)}rotateZ(t){return this.rotateOnAxis(al,t)}translateOnAxis(t,e){return il.copy(t).applyQuaternion(this.quaternion),this.position.add(il.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rl,t)}translateY(t){return this.translateOnAxis(sl,t)}translateZ(t){return this.translateOnAxis(al,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qe.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?mr.copy(t):mr.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qe.lookAt(Pi,mr,this.up):Qe.lookAt(mr,Pi,this.up),this.quaternion.setFromRotationMatrix(Qe),r&&(Qe.extractRotation(r.matrixWorld),Zn.setFromRotationMatrix(Qe),this.quaternion.premultiply(Zn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Gp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ol)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ol)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let i=[];this[t]===e&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(t,e);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,t,Bp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,zp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}de.DEFAULT_UP=new L(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ie=new L,tn=new L,Ds=new L,en=new L,Qn=new L,ti=new L,ll=new L,Is=new L,Ns=new L,Os=new L;let gr=!1;class Oe{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Ie.subVectors(t,e),r.cross(Ie);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Ie.subVectors(r,e),tn.subVectors(i,e),Ds.subVectors(t,e);const a=Ie.dot(Ie),o=Ie.dot(tn),l=Ie.dot(Ds),c=tn.dot(tn),u=tn.dot(Ds),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-m-_,_,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,en),en.x>=0&&en.y>=0&&en.x+en.y<=1}static getUV(t,e,i,r,s,a,o,l){return gr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gr=!0),this.getInterpolation(t,e,i,r,s,a,o,l)}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,en),l.setScalar(0),l.addScaledVector(s,en.x),l.addScaledVector(a,en.y),l.addScaledVector(o,en.z),l}static isFrontFacing(t,e,i,r){return Ie.subVectors(i,e),tn.subVectors(t,e),Ie.cross(tn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ie.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Ie.cross(tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Oe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Oe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,r,s){return gr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gr=!0),Oe.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}getInterpolation(t,e,i,r,s){return Oe.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Oe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Oe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Qn.subVectors(r,i),ti.subVectors(s,i),Is.subVectors(t,i);const l=Qn.dot(Is),c=ti.dot(Is);if(l<=0&&c<=0)return e.copy(i);Ns.subVectors(t,r);const u=Qn.dot(Ns),h=ti.dot(Ns);if(u>=0&&h<=u)return e.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(Qn,a);Os.subVectors(t,s);const m=Qn.dot(Os),_=ti.dot(Os);if(_>=0&&m<=_)return e.copy(s);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(ti,o);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return ll.subVectors(s,r),o=(h-u)/(h-u+(m-_)),e.copy(r).addScaledVector(ll,o);const d=1/(p+v+f);return a=v*d,o=f*d,e.copy(i).addScaledVector(Qn,a).addScaledVector(ti,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Hp=0;class Xn extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Xe(),this.name="",this.type="Material",this.blending=fi,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=pu,this.blendDst=mu,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=np,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(i.blending=this.blending),this.side!==Sn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ne={h:0,s:0,l:0},_r={h:0,s:0,l:0};function Fs(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Vt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Nt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Ue.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ue.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Ue.workingColorSpace){if(t=ja(t,1),e=ae(e,0,1),i=ae(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Fs(a,s,t+1/3),this.g=Fs(a,s,t),this.b=Fs(a,s,t-1/3)}return Ue.toWorkingColorSpace(this,r),this}setStyle(t,e=Nt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Nt){const i=Cu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Nt){return Ue.fromWorkingColorSpace(me.copy(this),t),Math.round(ae(me.r*255,0,255))*65536+Math.round(ae(me.g*255,0,255))*256+Math.round(ae(me.b*255,0,255))}getHexString(t=Nt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ue.workingColorSpace){Ue.fromWorkingColorSpace(me.copy(this),e);const i=me.r,r=me.g,s=me.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Ue.workingColorSpace){return Ue.fromWorkingColorSpace(me.copy(this),e),t.r=me.r,t.g=me.g,t.b=me.b,t}getStyle(t=Nt){Ue.fromWorkingColorSpace(me.copy(this),t);const e=me.r,i=me.g,r=me.b;return t!==Nt?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Ne),Ne.h+=t,Ne.s+=e,Ne.l+=i,this.setHSL(Ne.h,Ne.s,Ne.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ne),t.getHSL(_r);const i=Gi(Ne.h,_r.h,e),r=Gi(Ne.s,_r.s,e),s=Gi(Ne.l,_r.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const me=new Vt;Vt.NAMES=Cu;class Lu extends Xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const re=new L,vr=new ot;class Le{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=va,this.updateRange={offset:0,count:-1},this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)vr.fromBufferAttribute(this,e),vr.applyMatrix3(t),this.setXY(e,vr.x,vr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)re.fromBufferAttribute(this,e),re.applyMatrix3(t),this.setXYZ(e,re.x,re.y,re.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)re.fromBufferAttribute(this,e),re.applyMatrix4(t),this.setXYZ(e,re.x,re.y,re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)re.fromBufferAttribute(this,e),re.applyNormalMatrix(t),this.setXYZ(e,re.x,re.y,re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)re.fromBufferAttribute(this,e),re.transformDirection(t),this.setXYZ(e,re.x,re.y,re.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=an(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=an(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=an(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=an(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Xt(e,this.array),i=Xt(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Xt(e,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Xt(e,this.array),i=Xt(i,this.array),r=Xt(r,this.array),s=Xt(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==va&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Pu extends Le{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Uu extends Le{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class $t extends Le{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Vp=0;const Re=new ee,Bs=new de,ei=new L,we=new sr,Ui=new sr,ue=new L;class Se extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Xe(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bu(t)?Uu:Pu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ft().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Re.makeRotationFromQuaternion(t),this.applyMatrix4(Re),this}rotateX(t){return Re.makeRotationX(t),this.applyMatrix4(Re),this}rotateY(t){return Re.makeRotationY(t),this.applyMatrix4(Re),this}rotateZ(t){return Re.makeRotationZ(t),this.applyMatrix4(Re),this}translate(t,e,i){return Re.makeTranslation(t,e,i),this.applyMatrix4(Re),this}scale(t,e,i){return Re.makeScale(t,e,i),this.applyMatrix4(Re),this}lookAt(t){return Bs.lookAt(t),Bs.updateMatrix(),this.applyMatrix4(Bs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $t(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];we.setFromBufferAttribute(s),this.morphTargetsRelative?(ue.addVectors(this.boundingBox.min,we.min),this.boundingBox.expandByPoint(ue),ue.addVectors(this.boundingBox.max,we.max),this.boundingBox.expandByPoint(ue)):(this.boundingBox.expandByPoint(we.min),this.boundingBox.expandByPoint(we.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(we.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Ui.setFromBufferAttribute(o),this.morphTargetsRelative?(ue.addVectors(we.min,Ui.min),we.expandByPoint(ue),ue.addVectors(we.max,Ui.max),we.expandByPoint(ue)):(we.expandByPoint(Ui.min),we.expandByPoint(Ui.max))}we.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)ue.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(ue));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ue.fromBufferAttribute(o,c),l&&(ei.fromBufferAttribute(t,c),ue.add(ei)),r=Math.max(r,i.distanceToSquared(ue))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,r=e.position.array,s=e.normal.array,a=e.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<o;b++)c[b]=new L,u[b]=new L;const h=new L,f=new L,m=new L,_=new ot,v=new ot,p=new ot,d=new L,E=new L;function g(b,G,K){h.fromArray(r,b*3),f.fromArray(r,G*3),m.fromArray(r,K*3),_.fromArray(a,b*2),v.fromArray(a,G*2),p.fromArray(a,K*2),f.sub(h),m.sub(h),v.sub(_),p.sub(_);const N=1/(v.x*p.y-p.x*v.y);isFinite(N)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(N),E.copy(m).multiplyScalar(v.x).addScaledVector(f,-p.x).multiplyScalar(N),c[b].add(d),c[G].add(d),c[K].add(d),u[b].add(E),u[G].add(E),u[K].add(E))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let b=0,G=y.length;b<G;++b){const K=y[b],N=K.start,O=K.count;for(let F=N,j=N+O;F<j;F+=3)g(i[F+0],i[F+1],i[F+2])}const A=new L,w=new L,C=new L,U=new L;function x(b){C.fromArray(s,b*3),U.copy(C);const G=c[b];A.copy(G),A.sub(C.multiplyScalar(C.dot(G))).normalize(),w.crossVectors(U,G);const N=w.dot(u[b])<0?-1:1;l[b*4]=A.x,l[b*4+1]=A.y,l[b*4+2]=A.z,l[b*4+3]=N}for(let b=0,G=y.length;b<G;++b){const K=y[b],N=K.start,O=K.count;for(let F=N,j=N+O;F<j;F+=3)x(i[F+0]),x(i[F+1]),x(i[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new L,s=new L,a=new L,o=new L,l=new L,c=new L,u=new L,h=new L;if(t)for(let f=0,m=t.count;f<m;f+=3){const _=t.getX(f+0),v=t.getX(f+1),p=t.getX(f+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ue.fromBufferAttribute(t,e),ue.normalize(),t.setXYZ(e,ue.x,ue.y,ue.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let d=0;d<u;d++)f[_++]=c[m++]}return new Le(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=t(f,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cl=new ee,Rn=new $a,xr=new ss,ul=new L,ni=new L,ii=new L,ri=new L,zs=new L,Mr=new L,yr=new ot,Sr=new ot,Er=new ot,hl=new L,fl=new L,dl=new L,Tr=new L,br=new L;class mn extends de{constructor(t=new Se,e=new Lu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Mr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(zs.fromBufferAttribute(h,t),a?Mr.addScaledVector(zs,u):Mr.addScaledVector(zs.sub(e),u))}e.add(Mr)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xr.copy(i.boundingSphere),xr.applyMatrix4(s),Rn.copy(t.ray).recast(t.near),!(xr.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(xr,ul)===null||Rn.origin.distanceToSquared(ul)>(t.far-t.near)**2))&&(cl.copy(s).invert(),Rn.copy(t.ray).applyMatrix4(cl),!(i.boundingBox!==null&&Rn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Rn)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const p=f[_],d=a[p.materialIndex],E=Math.max(p.start,m.start),g=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=E,A=g;y<A;y+=3){const w=o.getX(y),C=o.getX(y+1),U=o.getX(y+2);r=Ar(this,d,t,i,c,u,h,w,C,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const E=o.getX(p),g=o.getX(p+1),y=o.getX(p+2);r=Ar(this,a,t,i,c,u,h,E,g,y),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const p=f[_],d=a[p.materialIndex],E=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=E,A=g;y<A;y+=3){const w=y,C=y+1,U=y+2;r=Ar(this,d,t,i,c,u,h,w,C,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const E=p,g=p+1,y=p+2;r=Ar(this,a,t,i,c,u,h,E,g,y),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function kp(n,t,e,i,r,s,a,o){let l;if(t.side===Ee?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===Sn,o),l===null)return null;br.copy(o),br.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(br);return c<e.near||c>e.far?null:{distance:c,point:br.clone(),object:n}}function Ar(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,ni),n.getVertexPosition(l,ii),n.getVertexPosition(c,ri);const u=kp(n,t,e,i,ni,ii,ri,Tr);if(u){r&&(yr.fromBufferAttribute(r,o),Sr.fromBufferAttribute(r,l),Er.fromBufferAttribute(r,c),u.uv=Oe.getInterpolation(Tr,ni,ii,ri,yr,Sr,Er,new ot)),s&&(yr.fromBufferAttribute(s,o),Sr.fromBufferAttribute(s,l),Er.fromBufferAttribute(s,c),u.uv1=Oe.getInterpolation(Tr,ni,ii,ri,yr,Sr,Er,new ot),u.uv2=u.uv1),a&&(hl.fromBufferAttribute(a,o),fl.fromBufferAttribute(a,l),dl.fromBufferAttribute(a,c),u.normal=Oe.getInterpolation(Tr,ni,ii,ri,hl,fl,dl,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new L,materialIndex:0};Oe.getNormal(ni,ii,ri,h.normal),u.face=h}return u}class ar extends Se{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,e,t,a,s,0),_("z","y","x",1,-1,i,e,-t,a,s,1),_("x","z","y",1,1,t,i,e,r,a,2),_("x","z","y",1,-1,t,i,-e,r,a,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(h,2));function _(v,p,d,E,g,y,A,w,C,U,x){const b=y/C,G=A/U,K=y/2,N=A/2,O=w/2,F=C+1,j=U+1;let X=0,Y=0;const $=new L;for(let Z=0;Z<j;Z++){const ft=Z*G-N;for(let z=0;z<F;z++){const Q=z*b-K;$[v]=Q*E,$[p]=ft*g,$[d]=O,c.push($.x,$.y,$.z),$[v]=0,$[p]=0,$[d]=w>0?1:-1,u.push($.x,$.y,$.z),h.push(z/C),h.push(1-Z/U),X+=1}}for(let Z=0;Z<U;Z++)for(let ft=0;ft<C;ft++){const z=f+ft+F*Z,Q=f+ft+F*(Z+1),tt=f+(ft+1)+F*(Z+1),pt=f+(ft+1)+F*Z;l.push(z,Q,pt),l.push(Q,tt,pt),Y+=6}o.addGroup(m,Y,x),m+=Y,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Mi(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function xe(n){const t={};for(let e=0;e<n.length;e++){const i=Mi(n[e]);for(const r in i)t[r]=i[r]}return t}function Wp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Du(n){return n.getRenderTarget()===null?n.outputColorSpace:qe}const Xp={clone:Mi,merge:xe};var qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends Xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qp,this.fragmentShader=Yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mi(t.uniforms),this.uniformsGroups=Wp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Iu extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=sn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Fe extends Iu{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ji*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ji*2*Math.atan(Math.tan(zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zi*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const si=-90,ai=1;class jp extends de{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Fe(si,ai,t,e);r.layers=this.layers,this.add(r);const s=new Fe(si,ai,t,e);s.layers=this.layers,this.add(s);const a=new Fe(si,ai,t,e);a.layers=this.layers,this.add(a);const o=new Fe(si,ai,t,e);o.layers=this.layers,this.add(o);const l=new Fe(si,ai,t,e);l.layers=this.layers,this.add(l);const c=new Fe(si,ai,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===sn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===kr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=on,t.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,r),t.setRenderTarget(i,1),t.render(e,s),t.setRenderTarget(i,2),t.render(e,a),t.setRenderTarget(i,3),t.render(e,o),t.setRenderTarget(i,4),t.render(e,l),i.texture.generateMipmaps=m,t.setRenderTarget(i,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Nu extends Te{constructor(t,e,i,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:_i,super(t,e,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $p extends Vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];e.encoding!==void 0&&(Hi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Gn?Nt:Hn),this.texture=new Nu(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ce}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ar(5,5,5),s=new kn({name:"CubemapFromEquirect",uniforms:Mi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ee,blending:gn});s.uniforms.tEquirect.value=e;const a=new mn(r,s),o=e.minFilter;return e.minFilter===qi&&(e.minFilter=Ce),new jp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}const Gs=new L,Jp=new L,Kp=new Ft;class Pn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Gs.subVectors(i,e).cross(Jp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Gs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Kp.getNormalMatrix(t),r=this.coplanarPoint(Gs).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cn=new ss,wr=new L;class Ka{constructor(t=new Pn,e=new Pn,i=new Pn,r=new Pn,s=new Pn,a=new Pn){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=sn){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],m=r[8],_=r[9],v=r[10],p=r[11],d=r[12],E=r[13],g=r[14],y=r[15];if(i[0].setComponents(l-s,f-c,p-m,y-d).normalize(),i[1].setComponents(l+s,f+c,p+m,y+d).normalize(),i[2].setComponents(l+a,f+u,p+_,y+E).normalize(),i[3].setComponents(l-a,f-u,p-_,y-E).normalize(),i[4].setComponents(l-o,f-h,p-v,y-g).normalize(),e===sn)i[5].setComponents(l+o,f+h,p+v,y+g).normalize();else if(e===kr)i[5].setComponents(o,h,v,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cn)}intersectsSprite(t){return Cn.center.set(0,0,0),Cn.radius=.7071067811865476,Cn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cn)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(wr.x=r.normal.x>0?t.max.x:t.min.x,wr.y=r.normal.y>0?t.max.y:t.min.y,wr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(wr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ou(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Zp(n,t){const e=t.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,f=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,m=u.updateRange;n.bindBuffer(h,c),m.count===-1?n.bufferSubData(h,0,f):(e?n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class Za extends Se{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=t/o,f=e/l,m=[],_=[],v=[],p=[];for(let d=0;d<u;d++){const E=d*f-a;for(let g=0;g<c;g++){const y=g*h-s;_.push(y,-E,0),v.push(0,0,1),p.push(g/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<o;E++){const g=E+c*d,y=E+c*(d+1),A=E+1+c*(d+1),w=E+1+c*d;m.push(g,y,w),m.push(y,A,w)}this.setIndex(m),this.setAttribute("position",new $t(_,3)),this.setAttribute("normal",new $t(v,3)),this.setAttribute("uv",new $t(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Za(t.width,t.height,t.widthSegments,t.heightSegments)}}var Qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,em=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,im=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sm="vec3 transformed = vec3( position );",am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,om=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lm=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,cm=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vm=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
} // validated`,xm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Mm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Am=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wm=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Om=`#ifdef USE_GRADIENTMAP
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
}`,Fm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Vm=`#ifdef USE_ENVMAP
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
#endif`,km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ym=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,jm=`struct PhysicalMaterial {
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,$m=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Km=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Zm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,eg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ng=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,ig=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sg=`#if defined( USE_POINTS_UV )
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
#endif`,ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cg=`#ifdef USE_MORPHNORMALS
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
#endif`,ug=`#ifdef USE_MORPHTARGETS
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
#endif`,hg=`#ifdef USE_MORPHTARGETS
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
#endif`,fg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_g=`#ifdef USE_NORMALMAP
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
#endif`,vg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ug=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dg=`float getShadowMask() {
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
}`,Ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ng=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fg=`#ifdef USE_SKINNING
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
#endif`,Bg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vg=`#ifdef USE_TRANSMISSION
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
#endif`,kg=`#ifdef USE_TRANSMISSION
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
#endif`,Wg=`#ifdef USE_UV
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
#endif`,Xg=`#ifdef USE_UV
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
#endif`,qg=`#ifdef USE_UV
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
#endif`,Yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$g=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kg=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <encodings_fragment>
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,t_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
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
}`,e_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,n_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,i_=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,a_=`uniform float scale;
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
}`,o_=`uniform vec3 diffuse;
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l_=`#include <common>
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
}`,c_=`uniform vec3 diffuse;
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,h_=`#define LAMBERT
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,d_=`#define MATCAP
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,m_=`#define NORMAL
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
}`,g_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,__=`#define PHONG
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
}`,x_=`#define STANDARD
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
}`,y_=`#define TOON
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S_=`uniform float size;
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
}`,E_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
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
}`,b_=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,A_=`uniform float rotation;
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
}`,w_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ot={alphamap_fragment:Qp,alphamap_pars_fragment:tm,alphatest_fragment:em,alphatest_pars_fragment:nm,aomap_fragment:im,aomap_pars_fragment:rm,begin_vertex:sm,beginnormal_vertex:am,bsdfs:om,iridescence_fragment:lm,bumpmap_pars_fragment:cm,clipping_planes_fragment:um,clipping_planes_pars_fragment:hm,clipping_planes_pars_vertex:fm,clipping_planes_vertex:dm,color_fragment:pm,color_pars_fragment:mm,color_pars_vertex:gm,color_vertex:_m,common:vm,cube_uv_reflection_fragment:xm,defaultnormal_vertex:Mm,displacementmap_pars_vertex:ym,displacementmap_vertex:Sm,emissivemap_fragment:Em,emissivemap_pars_fragment:Tm,encodings_fragment:bm,encodings_pars_fragment:Am,envmap_fragment:wm,envmap_common_pars_fragment:Rm,envmap_pars_fragment:Cm,envmap_pars_vertex:Lm,envmap_physical_pars_fragment:Vm,envmap_vertex:Pm,fog_vertex:Um,fog_pars_vertex:Dm,fog_fragment:Im,fog_pars_fragment:Nm,gradientmap_pars_fragment:Om,lightmap_fragment:Fm,lightmap_pars_fragment:Bm,lights_lambert_fragment:zm,lights_lambert_pars_fragment:Gm,lights_pars_begin:Hm,lights_toon_fragment:km,lights_toon_pars_fragment:Wm,lights_phong_fragment:Xm,lights_phong_pars_fragment:qm,lights_physical_fragment:Ym,lights_physical_pars_fragment:jm,lights_fragment_begin:$m,lights_fragment_maps:Jm,lights_fragment_end:Km,logdepthbuf_fragment:Zm,logdepthbuf_pars_fragment:Qm,logdepthbuf_pars_vertex:tg,logdepthbuf_vertex:eg,map_fragment:ng,map_pars_fragment:ig,map_particle_fragment:rg,map_particle_pars_fragment:sg,metalnessmap_fragment:ag,metalnessmap_pars_fragment:og,morphcolor_vertex:lg,morphnormal_vertex:cg,morphtarget_pars_vertex:ug,morphtarget_vertex:hg,normal_fragment_begin:fg,normal_fragment_maps:dg,normal_pars_fragment:pg,normal_pars_vertex:mg,normal_vertex:gg,normalmap_pars_fragment:_g,clearcoat_normal_fragment_begin:vg,clearcoat_normal_fragment_maps:xg,clearcoat_pars_fragment:Mg,iridescence_pars_fragment:yg,output_fragment:Sg,packing:Eg,premultiplied_alpha_fragment:Tg,project_vertex:bg,dithering_fragment:Ag,dithering_pars_fragment:wg,roughnessmap_fragment:Rg,roughnessmap_pars_fragment:Cg,shadowmap_pars_fragment:Lg,shadowmap_pars_vertex:Pg,shadowmap_vertex:Ug,shadowmask_pars_fragment:Dg,skinbase_vertex:Ig,skinning_pars_vertex:Ng,skinning_vertex:Og,skinnormal_vertex:Fg,specularmap_fragment:Bg,specularmap_pars_fragment:zg,tonemapping_fragment:Gg,tonemapping_pars_fragment:Hg,transmission_fragment:Vg,transmission_pars_fragment:kg,uv_pars_fragment:Wg,uv_pars_vertex:Xg,uv_vertex:qg,worldpos_vertex:Yg,background_vert:jg,background_frag:$g,backgroundCube_vert:Jg,backgroundCube_frag:Kg,cube_vert:Zg,cube_frag:Qg,depth_vert:t_,depth_frag:e_,distanceRGBA_vert:n_,distanceRGBA_frag:i_,equirect_vert:r_,equirect_frag:s_,linedashed_vert:a_,linedashed_frag:o_,meshbasic_vert:l_,meshbasic_frag:c_,meshlambert_vert:u_,meshlambert_frag:h_,meshmatcap_vert:f_,meshmatcap_frag:d_,meshnormal_vert:p_,meshnormal_frag:m_,meshphong_vert:g_,meshphong_frag:__,meshphysical_vert:v_,meshphysical_frag:x_,meshtoon_vert:M_,meshtoon_frag:y_,points_vert:S_,points_frag:E_,shadow_vert:T_,shadow_frag:b_,sprite_vert:A_,sprite_frag:w_},at={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},We={basic:{uniforms:xe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:xe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:xe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:xe([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:xe([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:xe([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:xe([at.points,at.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:xe([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:xe([at.common,at.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:xe([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:xe([at.sprite,at.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:xe([at.common,at.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:xe([at.lights,at.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};We.physical={uniforms:xe([We.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Rr={r:0,b:0,g:0};function R_(n,t,e,i,r,s,a){const o=new Vt(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function _(p,d){let E=!1,g=d.isScene===!0?d.background:null;switch(g&&g.isTexture&&(g=(d.backgroundBlurriness>0?e:t).get(g)),g===null?v(o,l):g&&g.isColor&&(v(g,1),E=!0),n.xr.getEnvironmentBlendMode()){case"opaque":E=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,a),E=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,a),E=!0;break}(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===rs)?(u===void 0&&(u=new mn(new ar(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Mi(We.backgroundCube.uniforms),vertexShader:We.backgroundCube.vertexShader,fragmentShader:We.backgroundCube.fragmentShader,side:Ee,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=g.colorSpace!==Nt,(h!==g||f!==g.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=g,f=g.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new mn(new Za(2,2),new kn({name:"BackgroundMaterial",uniforms:Mi(We.background.uniforms),vertexShader:We.background.vertexShader,fragmentShader:We.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=g.colorSpace!==Nt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||f!==g.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=g,f=g.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,d){p.getRGB(Rr,Du(n)),i.buffers.color.setClear(Rr.r,Rr.g,Rr.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),l=d,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(o,l)},render:_}}function C_(n,t,e,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function h(O,F,j,X,Y){let $=!1;if(a){const Z=v(X,j,F);c!==Z&&(c=Z,m(c.object)),$=d(O,X,j,Y),$&&E(O,X,j,Y)}else{const Z=F.wireframe===!0;(c.geometry!==X.id||c.program!==j.id||c.wireframe!==Z)&&(c.geometry=X.id,c.program=j.id,c.wireframe=Z,$=!0)}Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,U(O,F,j,X),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(O){return i.isWebGL2?n.bindVertexArray(O):s.bindVertexArrayOES(O)}function _(O){return i.isWebGL2?n.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function v(O,F,j){const X=j.wireframe===!0;let Y=o[O.id];Y===void 0&&(Y={},o[O.id]=Y);let $=Y[F.id];$===void 0&&($={},Y[F.id]=$);let Z=$[X];return Z===void 0&&(Z=p(f()),$[X]=Z),Z}function p(O){const F=[],j=[],X=[];for(let Y=0;Y<r;Y++)F[Y]=0,j[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:j,attributeDivisors:X,object:O,attributes:{},index:null}}function d(O,F,j,X){const Y=c.attributes,$=F.attributes;let Z=0;const ft=j.getAttributes();for(const z in ft)if(ft[z].location>=0){const tt=Y[z];let pt=$[z];if(pt===void 0&&(z==="instanceMatrix"&&O.instanceMatrix&&(pt=O.instanceMatrix),z==="instanceColor"&&O.instanceColor&&(pt=O.instanceColor)),tt===void 0||tt.attribute!==pt||pt&&tt.data!==pt.data)return!0;Z++}return c.attributesNum!==Z||c.index!==X}function E(O,F,j,X){const Y={},$=F.attributes;let Z=0;const ft=j.getAttributes();for(const z in ft)if(ft[z].location>=0){let tt=$[z];tt===void 0&&(z==="instanceMatrix"&&O.instanceMatrix&&(tt=O.instanceMatrix),z==="instanceColor"&&O.instanceColor&&(tt=O.instanceColor));const pt={};pt.attribute=tt,tt&&tt.data&&(pt.data=tt.data),Y[z]=pt,Z++}c.attributes=Y,c.attributesNum=Z,c.index=X}function g(){const O=c.newAttributes;for(let F=0,j=O.length;F<j;F++)O[F]=0}function y(O){A(O,0)}function A(O,F){const j=c.newAttributes,X=c.enabledAttributes,Y=c.attributeDivisors;j[O]=1,X[O]===0&&(n.enableVertexAttribArray(O),X[O]=1),Y[O]!==F&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,F),Y[O]=F)}function w(){const O=c.newAttributes,F=c.enabledAttributes;for(let j=0,X=F.length;j<X;j++)F[j]!==O[j]&&(n.disableVertexAttribArray(j),F[j]=0)}function C(O,F,j,X,Y,$,Z){Z===!0?n.vertexAttribIPointer(O,F,j,Y,$):n.vertexAttribPointer(O,F,j,X,Y,$)}function U(O,F,j,X){if(i.isWebGL2===!1&&(O.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();const Y=X.attributes,$=j.getAttributes(),Z=F.defaultAttributeValues;for(const ft in $){const z=$[ft];if(z.location>=0){let Q=Y[ft];if(Q===void 0&&(ft==="instanceMatrix"&&O.instanceMatrix&&(Q=O.instanceMatrix),ft==="instanceColor"&&O.instanceColor&&(Q=O.instanceColor)),Q!==void 0){const tt=Q.normalized,pt=Q.itemSize,mt=e.get(Q);if(mt===void 0)continue;const Mt=mt.buffer,Ut=mt.type,wt=mt.bytesPerElement,Wt=i.isWebGL2===!0&&(Ut===n.INT||Ut===n.UNSIGNED_INT||Q.gpuType===_u);if(Q.isInterleavedBufferAttribute){const Ct=Q.data,R=Ct.stride,it=Q.offset;if(Ct.isInstancedInterleavedBuffer){for(let q=0;q<z.locationSize;q++)A(z.location+q,Ct.meshPerAttribute);O.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let q=0;q<z.locationSize;q++)y(z.location+q);n.bindBuffer(n.ARRAY_BUFFER,Mt);for(let q=0;q<z.locationSize;q++)C(z.location+q,pt/z.locationSize,Ut,tt,R*wt,(it+pt/z.locationSize*q)*wt,Wt)}else{if(Q.isInstancedBufferAttribute){for(let Ct=0;Ct<z.locationSize;Ct++)A(z.location+Ct,Q.meshPerAttribute);O.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ct=0;Ct<z.locationSize;Ct++)y(z.location+Ct);n.bindBuffer(n.ARRAY_BUFFER,Mt);for(let Ct=0;Ct<z.locationSize;Ct++)C(z.location+Ct,pt/z.locationSize,Ut,tt,pt*wt,pt/z.locationSize*Ct*wt,Wt)}}else if(Z!==void 0){const tt=Z[ft];if(tt!==void 0)switch(tt.length){case 2:n.vertexAttrib2fv(z.location,tt);break;case 3:n.vertexAttrib3fv(z.location,tt);break;case 4:n.vertexAttrib4fv(z.location,tt);break;default:n.vertexAttrib1fv(z.location,tt)}}}}w()}function x(){K();for(const O in o){const F=o[O];for(const j in F){const X=F[j];for(const Y in X)_(X[Y].object),delete X[Y];delete F[j]}delete o[O]}}function b(O){if(o[O.id]===void 0)return;const F=o[O.id];for(const j in F){const X=F[j];for(const Y in X)_(X[Y].object),delete X[Y];delete F[j]}delete o[O.id]}function G(O){for(const F in o){const j=o[F];if(j[O.id]===void 0)continue;const X=j[O.id];for(const Y in X)_(X[Y].object),delete X[Y];delete j[O.id]}}function K(){N(),u=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:N,dispose:x,releaseStatesOfGeometry:b,releaseStatesOfProgram:G,initAttributes:g,enableAttribute:y,disableUnusedAttributes:w}}function L_(n,t,e,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),e.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,m;if(r)f=n,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,u,h),e.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function P_(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),g=f>0,y=a||t.has("OES_texture_float"),A=g&&y,w=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:E,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:A,maxSamples:w}}function U_(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new Pn,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,d=n.get(h);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const E=s?0:i,g=E*4;let y=d.clippingState||null;l.value=y,y=u(_,f,g,m);for(let A=0;A!==g;++A)y[A]=e[A];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,m,_){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const d=m+v*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<d)&&(p=new Float32Array(d));for(let g=0,y=m;g!==v;++g,y+=4)a.copy(h[g]).applyMatrix4(E,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function D_(n){let t=new WeakMap;function e(a,o){return o===pa?a.mapping=_i:o===ma&&(a.mapping=vi),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===pa||o===ma)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new $p(l.height/2);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Fu extends Iu{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ci=4,pl=[.125,.215,.35,.446,.526,.582],Dn=20,Hs=new Fu,ml=new Vt;let Vs=null;const Un=(1+Math.sqrt(5))/2,oi=1/Un,gl=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Un,oi),new L(0,Un,-oi),new L(oi,0,Un),new L(-oi,0,Un),new L(Un,oi,0),new L(-Un,oi,0)];class _l{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Vs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vs),t.scissorTest=!1,Cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vs=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ce,minFilter:Ce,generateMipmaps:!1,type:Yi,format:ze,colorSpace:qe,depthBuffer:!1},r=vl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vl(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I_(s)),this._blurMaterial=N_(s,t,e)}return r}_compileMaterial(t){const e=new mn(this._lodPlanes[0],t);this._renderer.compile(e,Hs)}_sceneToCubeUV(t,e,i,r){const o=new Fe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ml),u.toneMapping=on,u.autoClear=!1;const m=new Lu({name:"PMREM.Background",side:Ee,depthWrite:!1,depthTest:!1}),_=new mn(new ar,m);let v=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,v=!0):(m.color.copy(ml),v=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):E===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const g=this._cubeSize;Cr(r,E*g,d>2?g:0,g,g),u.setRenderTarget(r),v&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===_i||t.mapping===vi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new mn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Cr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Hs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=gl[(r-1)%gl.length];this._blur(t,r-1,r,s,a)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new mn(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Dn-1),v=s/_,p=isFinite(s)?1+Math.floor(u*v):Dn;p>Dn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Dn}`);const d=[];let E=0;for(let C=0;C<Dn;++C){const U=C/v,x=Math.exp(-U*U/2);d.push(x),C===0?E+=x:C<p&&(E+=2*x)}for(let C=0;C<d.length;C++)d[C]=d[C]/E;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:g}=this;f.dTheta.value=_,f.mipInt.value=g-i;const y=this._sizeLods[r],A=3*y*(r>g-ci?r-g+ci:0),w=4*(this._cubeSize-y);Cr(e,A,w,3*y,2*y),l.setRenderTarget(e),l.render(h,Hs)}}function I_(n){const t=[],e=[],i=[];let r=n;const s=n-ci+1+pl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-ci?l=pl[a-n+ci-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,v=3,p=2,d=1,E=new Float32Array(v*_*m),g=new Float32Array(p*_*m),y=new Float32Array(d*_*m);for(let w=0;w<m;w++){const C=w%3*2/3-1,U=w>2?0:-1,x=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];E.set(x,v*_*w),g.set(f,p*_*w);const b=[w,w,w,w,w,w];y.set(b,d*_*w)}const A=new Se;A.setAttribute("position",new Le(E,v)),A.setAttribute("uv",new Le(g,p)),A.setAttribute("faceIndex",new Le(y,d)),t.push(A),r>ci&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function vl(n,t,e){const i=new Vn(n,t,e);return i.texture.mapping=rs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cr(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function N_(n,t,e){const i=new Float32Array(Dn),r=new L(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Dn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function xl(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Ml(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Qa(){return`

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
	`}function O_(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===pa||l===ma,u=l===_i||l===vi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=t.get(o);return e===null&&(e=new _l(n)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),t.set(o,h),h.texture}else{if(t.has(o))return t.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&r(h)){e===null&&(e=new _l(n));const f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function F_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function B_(n,t,e,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let p=0,d=v.length;p<d;p++)t.remove(v[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)t.update(f[_],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const v=m[_];for(let p=0,d=v.length;p<d;p++)t.update(v[p],n.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let v=0;if(m!==null){const E=m.array;v=m.version;for(let g=0,y=E.length;g<y;g+=3){const A=E[g+0],w=E[g+1],C=E[g+2];f.push(A,w,w,C,C,A)}}else{const E=_.array;v=_.version;for(let g=0,y=E.length/3-1;g<y;g+=3){const A=g+0,w=g+1,C=g+2;f.push(A,w,w,C,C,A)}}const p=new(bu(f)?Uu:Pu)(f,1);p.version=v;const d=s.get(h);d&&t.remove(d),s.set(h,p)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function z_(n,t,e,i){const r=i.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,m){n.drawElements(s,m,o,f*l),e.update(m,s,1)}function h(f,m,_){if(_===0)return;let v,p;if(r)v=n,p="drawElementsInstanced";else if(v=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](s,m,o,f*l,_),e.update(m,s,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function G_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function H_(n,t){return n[0]-t[0]}function V_(n,t){return Math.abs(t[1])-Math.abs(n[1])}function k_(n,t,e){const i={},r=new Float32Array(8),s=new WeakMap,a=new fe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=m!==void 0?m.length:0;let v=s.get(u);if(v===void 0||v.count!==_){let O=function(){K.dispose(),s.delete(u),u.removeEventListener("dispose",O)};v!==void 0&&v.texture.dispose();const E=u.morphAttributes.position!==void 0,g=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let U=0;E===!0&&(U=1),g===!0&&(U=2),y===!0&&(U=3);let x=u.attributes.position.count*U,b=1;x>t.maxTextureSize&&(b=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const G=new Float32Array(x*b*4*_),K=new Ru(G,x,b,_);K.type=pn,K.needsUpdate=!0;const N=U*4;for(let F=0;F<_;F++){const j=A[F],X=w[F],Y=C[F],$=x*b*4*F;for(let Z=0;Z<j.count;Z++){const ft=Z*N;E===!0&&(a.fromBufferAttribute(j,Z),G[$+ft+0]=a.x,G[$+ft+1]=a.y,G[$+ft+2]=a.z,G[$+ft+3]=0),g===!0&&(a.fromBufferAttribute(X,Z),G[$+ft+4]=a.x,G[$+ft+5]=a.y,G[$+ft+6]=a.z,G[$+ft+7]=0),y===!0&&(a.fromBufferAttribute(Y,Z),G[$+ft+8]=a.x,G[$+ft+9]=a.y,G[$+ft+10]=a.z,G[$+ft+11]=Y.itemSize===4?a.w:1)}}v={count:_,texture:K,size:new ot(x,b)},s.set(u,v),u.addEventListener("dispose",O)}let p=0;for(let E=0;E<f.length;E++)p+=f[E];const d=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",d),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",v.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const m=f===void 0?0:f.length;let _=i[u.id];if(_===void 0||_.length!==m){_=[];for(let g=0;g<m;g++)_[g]=[g,0];i[u.id]=_}for(let g=0;g<m;g++){const y=_[g];y[0]=g,y[1]=f[g]}_.sort(V_);for(let g=0;g<8;g++)g<m&&_[g][1]?(o[g][0]=_[g][0],o[g][1]=_[g][1]):(o[g][0]=Number.MAX_SAFE_INTEGER,o[g][1]=0);o.sort(H_);const v=u.morphAttributes.position,p=u.morphAttributes.normal;let d=0;for(let g=0;g<8;g++){const y=o[g],A=y[0],w=y[1];A!==Number.MAX_SAFE_INTEGER&&w?(v&&u.getAttribute("morphTarget"+g)!==v[A]&&u.setAttribute("morphTarget"+g,v[A]),p&&u.getAttribute("morphNormal"+g)!==p[A]&&u.setAttribute("morphNormal"+g,p[A]),r[g]=w,d+=w):(v&&u.hasAttribute("morphTarget"+g)===!0&&u.deleteAttribute("morphTarget"+g),p&&u.hasAttribute("morphNormal"+g)===!0&&u.deleteAttribute("morphNormal"+g),r[g]=0)}const E=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function W_(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);return r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER)),h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const Bu=new Te,zu=new Ru,Gu=new Dp,Hu=new Nu,yl=[],Sl=[],El=new Float32Array(16),Tl=new Float32Array(9),bl=new Float32Array(4);function bi(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=yl[r];if(s===void 0&&(s=new Float32Array(r),yl[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function oe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function le(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function os(n,t){let e=Sl[t];e===void 0&&(e=new Int32Array(t),Sl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function X_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function q_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;n.uniform2fv(this.addr,t),le(e,t)}}function Y_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(oe(e,t))return;n.uniform3fv(this.addr,t),le(e,t)}}function j_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;n.uniform4fv(this.addr,t),le(e,t)}}function $_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(oe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),le(e,t)}else{if(oe(e,i))return;bl.set(i),n.uniformMatrix2fv(this.addr,!1,bl),le(e,i)}}function J_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(oe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),le(e,t)}else{if(oe(e,i))return;Tl.set(i),n.uniformMatrix3fv(this.addr,!1,Tl),le(e,i)}}function K_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(oe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),le(e,t)}else{if(oe(e,i))return;El.set(i),n.uniformMatrix4fv(this.addr,!1,El),le(e,i)}}function Z_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Q_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;n.uniform2iv(this.addr,t),le(e,t)}}function tv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(oe(e,t))return;n.uniform3iv(this.addr,t),le(e,t)}}function ev(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;n.uniform4iv(this.addr,t),le(e,t)}}function nv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function iv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;n.uniform2uiv(this.addr,t),le(e,t)}}function rv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(oe(e,t))return;n.uniform3uiv(this.addr,t),le(e,t)}}function sv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;n.uniform4uiv(this.addr,t),le(e,t)}}function av(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2D(t||Bu,r)}function ov(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Gu,r)}function lv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Hu,r)}function cv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||zu,r)}function uv(n){switch(n){case 5126:return X_;case 35664:return q_;case 35665:return Y_;case 35666:return j_;case 35674:return $_;case 35675:return J_;case 35676:return K_;case 5124:case 35670:return Z_;case 35667:case 35671:return Q_;case 35668:case 35672:return tv;case 35669:case 35673:return ev;case 5125:return nv;case 36294:return iv;case 36295:return rv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return av;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return lv;case 36289:case 36303:case 36311:case 36292:return cv}}function hv(n,t){n.uniform1fv(this.addr,t)}function fv(n,t){const e=bi(t,this.size,2);n.uniform2fv(this.addr,e)}function dv(n,t){const e=bi(t,this.size,3);n.uniform3fv(this.addr,e)}function pv(n,t){const e=bi(t,this.size,4);n.uniform4fv(this.addr,e)}function mv(n,t){const e=bi(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function gv(n,t){const e=bi(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function _v(n,t){const e=bi(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function vv(n,t){n.uniform1iv(this.addr,t)}function xv(n,t){n.uniform2iv(this.addr,t)}function Mv(n,t){n.uniform3iv(this.addr,t)}function yv(n,t){n.uniform4iv(this.addr,t)}function Sv(n,t){n.uniform1uiv(this.addr,t)}function Ev(n,t){n.uniform2uiv(this.addr,t)}function Tv(n,t){n.uniform3uiv(this.addr,t)}function bv(n,t){n.uniform4uiv(this.addr,t)}function Av(n,t,e){const i=this.cache,r=t.length,s=os(e,r);oe(i,s)||(n.uniform1iv(this.addr,s),le(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Bu,s[a])}function wv(n,t,e){const i=this.cache,r=t.length,s=os(e,r);oe(i,s)||(n.uniform1iv(this.addr,s),le(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Gu,s[a])}function Rv(n,t,e){const i=this.cache,r=t.length,s=os(e,r);oe(i,s)||(n.uniform1iv(this.addr,s),le(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Hu,s[a])}function Cv(n,t,e){const i=this.cache,r=t.length,s=os(e,r);oe(i,s)||(n.uniform1iv(this.addr,s),le(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||zu,s[a])}function Lv(n){switch(n){case 5126:return hv;case 35664:return fv;case 35665:return dv;case 35666:return pv;case 35674:return mv;case 35675:return gv;case 35676:return _v;case 5124:case 35670:return vv;case 35667:case 35671:return xv;case 35668:case 35672:return Mv;case 35669:case 35673:return yv;case 5125:return Sv;case 36294:return Ev;case 36295:return Tv;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Cv}}class Pv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=uv(e.type)}}class Uv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=Lv(e.type)}}class Dv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const ks=/(\w+)(\])?(\[|\.)?/g;function Al(n,t){n.seq.push(t),n.map[t.id]=t}function Iv(n,t,e){const i=n.name,r=i.length;for(ks.lastIndex=0;;){const s=ks.exec(i),a=ks.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Al(e,c===void 0?new Pv(o,n,t):new Uv(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new Dv(o),Al(e,h)),e=h}}}class Fr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Iv(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function wl(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}let Nv=0;function Ov(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function Fv(n){switch(n){case qe:return["Linear","( value )"];case Nt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Rl(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Ov(n.getShaderSource(t),a)}else return r}function Bv(n,t){const e=Fv(t);return"vec4 "+n+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function zv(n,t){let e;switch(t){case Bd:e="Linear";break;case zd:e="Reinhard";break;case Gd:e="OptimizedCineon";break;case Hd:e="ACESFilmic";break;case Vd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Gv(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ni).join(`
`)}function Hv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Vv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Ni(n){return n!==""}function Cl(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ll(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const kv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ya(n){return n.replace(kv,Wv)}function Wv(n,t){const e=Ot[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return ya(e)}const Xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pl(n){return n.replace(Xv,qv)}function qv(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ul(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Yv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===du?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===gd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===nn&&(t="SHADOWMAP_TYPE_VSM"),t}function jv(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _i:case vi:t="ENVMAP_TYPE_CUBE";break;case rs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $v(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case vi:t="ENVMAP_MODE_REFRACTION";break}return t}function Jv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case is:t="ENVMAP_BLENDING_MULTIPLY";break;case Od:t="ENVMAP_BLENDING_MIX";break;case Fd:t="ENVMAP_BLENDING_ADD";break}return t}function Kv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Zv(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Yv(e),c=jv(e),u=$v(e),h=Jv(e),f=Kv(e),m=e.isWebGL2?"":Gv(e),_=Hv(s),v=r.createProgram();let p,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ni).join(`
`),p.length>0&&(p+=`
`),d=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ni).join(`
`),d.length>0&&(d+=`
`)):(p=[Ul(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ni).join(`
`),d=[m,Ul(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==on?"#define TONE_MAPPING":"",e.toneMapping!==on?Ot.tonemapping_pars_fragment:"",e.toneMapping!==on?zv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.encodings_pars_fragment,Bv("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ni).join(`
`)),a=ya(a),a=Cl(a,e),a=Ll(a,e),o=ya(o),o=Cl(o,e),o=Ll(o,e),a=Pl(a),o=Pl(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===Ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const g=E+p+a,y=E+d+o,A=wl(r,r.VERTEX_SHADER,g),w=wl(r,r.FRAGMENT_SHADER,y);if(r.attachShader(v,A),r.attachShader(v,w),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),n.debug.checkShaderErrors){const x=r.getProgramInfoLog(v).trim(),b=r.getShaderInfoLog(A).trim(),G=r.getShaderInfoLog(w).trim();let K=!0,N=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,A,w);else{const O=Rl(r,A,"vertex"),F=Rl(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+O+`
`+F)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(b===""||G==="")&&(N=!1);N&&(this.diagnostics={runnable:K,programLog:x,vertexShader:{log:b,prefix:p},fragmentShader:{log:G,prefix:d}})}r.deleteShader(A),r.deleteShader(w);let C;this.getUniforms=function(){return C===void 0&&(C=new Fr(r,v)),C};let U;return this.getAttributes=function(){return U===void 0&&(U=Vv(r,v)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Nv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=w,this}let Qv=0;class tx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new ex(t),e.set(t,i)),i}}class ex{constructor(t){this.id=Qv++,this.code=t,this.usedTimes=0}}function nx(n,t,e,i,r,s,a){const o=new Ja,l=new tx,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return x===0?"uv":`uv${x}`}function p(x,b,G,K,N){const O=K.fog,F=N.geometry,j=x.isMeshStandardMaterial?K.environment:null,X=(x.isMeshStandardMaterial?e:t).get(x.envMap||j),Y=X&&X.mapping===rs?X.image.height:null,$=_[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const Z=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ft=Z!==void 0?Z.length:0;let z=0;F.morphAttributes.position!==void 0&&(z=1),F.morphAttributes.normal!==void 0&&(z=2),F.morphAttributes.color!==void 0&&(z=3);let Q,tt,pt,mt;if($){const ne=We[$];Q=ne.vertexShader,tt=ne.fragmentShader}else Q=x.vertexShader,tt=x.fragmentShader,l.update(x),pt=l.getVertexShaderID(x),mt=l.getFragmentShaderID(x);const Mt=n.getRenderTarget(),Ut=N.isInstancedMesh===!0,wt=!!x.map,Wt=!!x.matcap,Ct=!!X,R=!!x.aoMap,it=!!x.lightMap,q=!!x.bumpMap,rt=!!x.normalMap,J=!!x.displacementMap,yt=!!x.emissiveMap,dt=!!x.metalnessMap,gt=!!x.roughnessMap,Pt=x.anisotropy>0,Gt=x.clearcoat>0,Kt=x.iridescence>0,T=x.sheen>0,M=x.transmission>0,H=Pt&&!!x.anisotropyMap,et=Gt&&!!x.clearcoatMap,nt=Gt&&!!x.clearcoatNormalMap,lt=Gt&&!!x.clearcoatRoughnessMap,St=Kt&&!!x.iridescenceMap,ct=Kt&&!!x.iridescenceThicknessMap,W=T&&!!x.sheenColorMap,Et=T&&!!x.sheenRoughnessMap,Tt=!!x.specularMap,At=!!x.specularColorMap,vt=!!x.specularIntensityMap,xt=M&&!!x.transmissionMap,Bt=M&&!!x.thicknessMap,qt=!!x.gradientMap,P=!!x.alphaMap,ut=x.alphaTest>0,B=!!x.extensions,st=!!F.attributes.uv1,ht=!!F.attributes.uv2,kt=!!F.attributes.uv3;return{isWebGL2:u,shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:Q,fragmentShader:tt,defines:x.defines,customVertexShaderID:pt,customFragmentShaderID:mt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:Ut,instancingColor:Ut&&N.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Mt===null?n.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:qe,map:wt,matcap:Wt,envMap:Ct,envMapMode:Ct&&X.mapping,envMapCubeUVHeight:Y,aoMap:R,lightMap:it,bumpMap:q,normalMap:rt,displacementMap:f&&J,emissiveMap:yt,normalMapObjectSpace:rt&&x.normalMapType===ep,normalMapTangentSpace:rt&&x.normalMapType===Ya,metalnessMap:dt,roughnessMap:gt,anisotropy:Pt,anisotropyMap:H,clearcoat:Gt,clearcoatMap:et,clearcoatNormalMap:nt,clearcoatRoughnessMap:lt,iridescence:Kt,iridescenceMap:St,iridescenceThicknessMap:ct,sheen:T,sheenColorMap:W,sheenRoughnessMap:Et,specularMap:Tt,specularColorMap:At,specularIntensityMap:vt,transmission:M,transmissionMap:xt,thicknessMap:Bt,gradientMap:qt,opaque:x.transparent===!1&&x.blending===fi,alphaMap:P,alphaTest:ut,combine:x.combine,mapUv:wt&&v(x.map.channel),aoMapUv:R&&v(x.aoMap.channel),lightMapUv:it&&v(x.lightMap.channel),bumpMapUv:q&&v(x.bumpMap.channel),normalMapUv:rt&&v(x.normalMap.channel),displacementMapUv:J&&v(x.displacementMap.channel),emissiveMapUv:yt&&v(x.emissiveMap.channel),metalnessMapUv:dt&&v(x.metalnessMap.channel),roughnessMapUv:gt&&v(x.roughnessMap.channel),anisotropyMapUv:H&&v(x.anisotropyMap.channel),clearcoatMapUv:et&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:nt&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:W&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Et&&v(x.sheenRoughnessMap.channel),specularMapUv:Tt&&v(x.specularMap.channel),specularColorMapUv:At&&v(x.specularColorMap.channel),specularIntensityMapUv:vt&&v(x.specularIntensityMap.channel),transmissionMapUv:xt&&v(x.transmissionMap.channel),thicknessMapUv:Bt&&v(x.thicknessMap.channel),alphaMapUv:P&&v(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(rt||Pt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:st,vertexUv2s:ht,vertexUv3s:kt,pointsUvs:N.isPoints===!0&&!!F.attributes.uv&&(wt||P),fog:!!O,useFog:x.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:N.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:z,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:x.toneMapped?n.toneMapping:on,useLegacyLights:n.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===rn,flipSided:x.side===Ee,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:B&&x.extensions.derivatives===!0,extensionFragDepth:B&&x.extensions.fragDepth===!0,extensionDrawBuffers:B&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:B&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const G in x.defines)b.push(G),b.push(x.defines[G]);return x.isRawShaderMaterial===!1&&(E(b,x),g(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function E(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function g(x,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),x.push(o.mask)}function y(x){const b=_[x.type];let G;if(b){const K=We[b];G=Xp.clone(K.uniforms)}else G=x.uniforms;return G}function A(x,b){let G;for(let K=0,N=c.length;K<N;K++){const O=c[K];if(O.cacheKey===b){G=O,++G.usedTimes;break}}return G===void 0&&(G=new Zv(n,b,x,s),c.push(G)),G}function w(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),x.destroy()}}function C(x){l.remove(x)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:y,acquireProgram:A,releaseProgram:w,releaseShaderCache:C,programs:c,dispose:U}}function ix(){let n=new WeakMap;function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function e(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function rx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Dl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Il(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(h,f,m,_,v,p){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:v,group:p},n[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=v,d.group=p),t++,d}function o(h,f,m,_,v,p){const d=a(h,f,m,_,v,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):e.push(d)}function l(h,f,m,_,v,p){const d=a(h,f,m,_,v,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||rx),i.length>1&&i.sort(f||Dl),r.length>1&&r.sort(f||Dl)}function u(){for(let h=t,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function sx(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Il,n.set(i,[a])):r>=s.length?(a=new Il,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function ax(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Vt};break;case"SpotLight":e={position:new L,direction:new L,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function ox(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let lx=0;function cx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ux(n,t){const e=new ax,i=ox(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new L);const s=new L,a=new ee,o=new ee;function l(u,h){let f=0,m=0,_=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let v=0,p=0,d=0,E=0,g=0,y=0,A=0,w=0,C=0,U=0;u.sort(cx);const x=h===!0?Math.PI:1;for(let G=0,K=u.length;G<K;G++){const N=u[G],O=N.color,F=N.intensity,j=N.distance,X=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=O.r*F*x,m+=O.g*F*x,_+=O.b*F*x;else if(N.isLightProbe)for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(N.sh.coefficients[Y],F);else if(N.isDirectionalLight){const Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity*x),N.castShadow){const $=N.shadow,Z=i.get(N);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,r.directionalShadow[v]=Z,r.directionalShadowMap[v]=X,r.directionalShadowMatrix[v]=N.shadow.matrix,y++}r.directional[v]=Y,v++}else if(N.isSpotLight){const Y=e.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(O).multiplyScalar(F*x),Y.distance=j,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,r.spot[d]=Y;const $=N.shadow;if(N.map&&(r.spotLightMap[C]=N.map,C++,$.updateMatrices(N),N.castShadow&&U++),r.spotLightMatrix[d]=$.matrix,N.castShadow){const Z=i.get(N);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,r.spotShadow[d]=Z,r.spotShadowMap[d]=X,w++}d++}else if(N.isRectAreaLight){const Y=e.get(N);Y.color.copy(O).multiplyScalar(F),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),r.rectArea[E]=Y,E++}else if(N.isPointLight){const Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity*x),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){const $=N.shadow,Z=i.get(N);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,Z.shadowCameraNear=$.camera.near,Z.shadowCameraFar=$.camera.far,r.pointShadow[p]=Z,r.pointShadowMap[p]=X,r.pointShadowMatrix[p]=N.shadow.matrix,A++}r.point[p]=Y,p++}else if(N.isHemisphereLight){const Y=e.get(N);Y.skyColor.copy(N.color).multiplyScalar(F*x),Y.groundColor.copy(N.groundColor).multiplyScalar(F*x),r.hemi[g]=Y,g++}}E>0&&(t.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=at.LTC_FLOAT_1,r.rectAreaLTC2=at.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=at.LTC_HALF_1,r.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=_;const b=r.hash;(b.directionalLength!==v||b.pointLength!==p||b.spotLength!==d||b.rectAreaLength!==E||b.hemiLength!==g||b.numDirectionalShadows!==y||b.numPointShadows!==A||b.numSpotShadows!==w||b.numSpotMaps!==C)&&(r.directional.length=v,r.spot.length=d,r.rectArea.length=E,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=w+C-U,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=U,b.directionalLength=v,b.pointLength=p,b.spotLength=d,b.rectAreaLength=E,b.hemiLength=g,b.numDirectionalShadows=y,b.numPointShadows=A,b.numSpotShadows=w,b.numSpotMaps=C,r.version=lx++)}function c(u,h){let f=0,m=0,_=0,v=0,p=0;const d=h.matrixWorldInverse;for(let E=0,g=u.length;E<g;E++){const y=u[E];if(y.isDirectionalLight){const A=r.directional[f];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),f++}else if(y.isSpotLight){const A=r.spot[_];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),_++}else if(y.isRectAreaLight){const A=r.rectArea[v];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(d),o.identity(),a.copy(y.matrixWorld),a.premultiply(d),o.extractRotation(a),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const A=r.point[m];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(d),m++}else if(y.isHemisphereLight){const A=r.hemi[p];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:r}}function Nl(n,t){const e=new ux(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function a(h){i.push(h)}function o(h){r.push(h)}function l(h){e.setup(i,h)}function c(h){e.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function hx(n,t){let e=new WeakMap;function i(s,a=0){const o=e.get(s);let l;return o===void 0?(l=new Nl(n,t),e.set(s,[l])):a>=o.length?(l=new Nl(n,t),o.push(l)):l=o[a],l}function r(){e=new WeakMap}return{get:i,dispose:r}}class fx extends Xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dx extends Xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mx=`uniform sampler2D shadow_pass;
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
}`;function gx(n,t,e){let i=new Ka;const r=new ot,s=new ot,a=new fe,o=new fx({depthPacking:tp}),l=new dx,c={},u=e.maxTextureSize,h={[Sn]:Ee,[Ee]:Sn,[rn]:rn},f=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:px,fragmentShader:mx}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Se;_.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new mn(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=du;let d=this.type;this.render=function(A,w,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const U=n.getRenderTarget(),x=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),G=n.state;G.setBlending(gn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const K=d!==nn&&this.type===nn,N=d===nn&&this.type!==nn;for(let O=0,F=A.length;O<F;O++){const j=A[O],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const Y=X.getFrameExtents();if(r.multiply(Y),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,X.mapSize.y=s.y)),X.map===null||K===!0||N===!0){const Z=this.type!==nn?{minFilter:Me,magFilter:Me}:{};X.map!==null&&X.map.dispose(),X.map=new Vn(r.x,r.y,Z),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const $=X.getViewportCount();for(let Z=0;Z<$;Z++){const ft=X.getViewport(Z);a.set(s.x*ft.x,s.y*ft.y,s.x*ft.z,s.y*ft.w),G.viewport(a),X.updateMatrices(j,Z),i=X.getFrustum(),y(w,C,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===nn&&E(X,C),X.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(U,x,b)};function E(A,w){const C=t.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Vn(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,C,f,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,C,m,v,null)}function g(A,w,C,U){let x=null;const b=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)x=b;else if(x=C.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=x.uuid,K=w.uuid;let N=c[G];N===void 0&&(N={},c[G]=N);let O=N[K];O===void 0&&(O=x.clone(),N[K]=O),x=O}if(x.visible=w.visible,x.wireframe=w.wireframe,U===nn?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:h[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const G=n.properties.get(x);G.light=C}return x}function y(A,w,C,U,x){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===nn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const K=t.update(A),N=A.material;if(Array.isArray(N)){const O=K.groups;for(let F=0,j=O.length;F<j;F++){const X=O[F],Y=N[X.materialIndex];if(Y&&Y.visible){const $=g(A,Y,U,x);n.renderBufferDirect(C,null,K,$,A,X)}}}else if(N.visible){const O=g(A,N,U,x);n.renderBufferDirect(C,null,K,O,A,null)}}const G=A.children;for(let K=0,N=G.length;K<N;K++)y(G[K],w,C,U,x)}}function _x(n,t,e){const i=e.isWebGL2;function r(){let P=!1;const ut=new fe;let B=null;const st=new fe(0,0,0,0);return{setMask:function(ht){B!==ht&&!P&&(n.colorMask(ht,ht,ht,ht),B=ht)},setLocked:function(ht){P=ht},setClear:function(ht,kt,Zt,ne,En){En===!0&&(ht*=ne,kt*=ne,Zt*=ne),ut.set(ht,kt,Zt,ne),st.equals(ut)===!1&&(n.clearColor(ht,kt,Zt,ne),st.copy(ut))},reset:function(){P=!1,B=null,st.set(-1,0,0,0)}}}function s(){let P=!1,ut=null,B=null,st=null;return{setTest:function(ht){ht?Mt(n.DEPTH_TEST):Ut(n.DEPTH_TEST)},setMask:function(ht){ut!==ht&&!P&&(n.depthMask(ht),ut=ht)},setFunc:function(ht){if(B!==ht){switch(ht){case Cd:n.depthFunc(n.NEVER);break;case Ld:n.depthFunc(n.ALWAYS);break;case Pd:n.depthFunc(n.LESS);break;case da:n.depthFunc(n.LEQUAL);break;case Ud:n.depthFunc(n.EQUAL);break;case Dd:n.depthFunc(n.GEQUAL);break;case Id:n.depthFunc(n.GREATER);break;case Nd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}B=ht}},setLocked:function(ht){P=ht},setClear:function(ht){st!==ht&&(n.clearDepth(ht),st=ht)},reset:function(){P=!1,ut=null,B=null,st=null}}}function a(){let P=!1,ut=null,B=null,st=null,ht=null,kt=null,Zt=null,ne=null,En=null;return{setTest:function(Qt){P||(Qt?Mt(n.STENCIL_TEST):Ut(n.STENCIL_TEST))},setMask:function(Qt){ut!==Qt&&!P&&(n.stencilMask(Qt),ut=Qt)},setFunc:function(Qt,Ve,ge){(B!==Qt||st!==Ve||ht!==ge)&&(n.stencilFunc(Qt,Ve,ge),B=Qt,st=Ve,ht=ge)},setOp:function(Qt,Ve,ge){(kt!==Qt||Zt!==Ve||ne!==ge)&&(n.stencilOp(Qt,Ve,ge),kt=Qt,Zt=Ve,ne=ge)},setLocked:function(Qt){P=Qt},setClear:function(Qt){En!==Qt&&(n.clearStencil(Qt),En=Qt)},reset:function(){P=!1,ut=null,B=null,st=null,ht=null,kt=null,Zt=null,ne=null,En=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let f={},m={},_=new WeakMap,v=[],p=null,d=!1,E=null,g=null,y=null,A=null,w=null,C=null,U=null,x=!1,b=null,G=null,K=null,N=null,O=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,X=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Y)[1]),j=X>=1):Y.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),j=X>=2);let $=null,Z={};const ft=n.getParameter(n.SCISSOR_BOX),z=n.getParameter(n.VIEWPORT),Q=new fe().fromArray(ft),tt=new fe().fromArray(z);function pt(P,ut,B,st){const ht=new Uint8Array(4),kt=n.createTexture();n.bindTexture(P,kt),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Zt=0;Zt<B;Zt++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(ut,0,n.RGBA,1,1,st,0,n.RGBA,n.UNSIGNED_BYTE,ht):n.texImage2D(ut+Zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ht);return kt}const mt={};mt[n.TEXTURE_2D]=pt(n.TEXTURE_2D,n.TEXTURE_2D,1),mt[n.TEXTURE_CUBE_MAP]=pt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(mt[n.TEXTURE_2D_ARRAY]=pt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),mt[n.TEXTURE_3D]=pt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Mt(n.DEPTH_TEST),l.setFunc(da),J(!1),yt(yo),Mt(n.CULL_FACE),q(gn);function Mt(P){f[P]!==!0&&(n.enable(P),f[P]=!0)}function Ut(P){f[P]!==!1&&(n.disable(P),f[P]=!1)}function wt(P,ut){return m[P]!==ut?(n.bindFramebuffer(P,ut),m[P]=ut,i&&(P===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ut),P===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ut)),!0):!1}function Wt(P,ut){let B=v,st=!1;if(P)if(B=_.get(ut),B===void 0&&(B=[],_.set(ut,B)),P.isWebGLMultipleRenderTargets){const ht=P.texture;if(B.length!==ht.length||B[0]!==n.COLOR_ATTACHMENT0){for(let kt=0,Zt=ht.length;kt<Zt;kt++)B[kt]=n.COLOR_ATTACHMENT0+kt;B.length=ht.length,st=!0}}else B[0]!==n.COLOR_ATTACHMENT0&&(B[0]=n.COLOR_ATTACHMENT0,st=!0);else B[0]!==n.BACK&&(B[0]=n.BACK,st=!0);st&&(e.isWebGL2?n.drawBuffers(B):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(B))}function Ct(P){return p!==P?(n.useProgram(P),p=P,!0):!1}const R={[li]:n.FUNC_ADD,[vd]:n.FUNC_SUBTRACT,[xd]:n.FUNC_REVERSE_SUBTRACT};if(i)R[bo]=n.MIN,R[Ao]=n.MAX;else{const P=t.get("EXT_blend_minmax");P!==null&&(R[bo]=P.MIN_EXT,R[Ao]=P.MAX_EXT)}const it={[Md]:n.ZERO,[yd]:n.ONE,[Sd]:n.SRC_COLOR,[pu]:n.SRC_ALPHA,[Rd]:n.SRC_ALPHA_SATURATE,[Ad]:n.DST_COLOR,[Td]:n.DST_ALPHA,[Ed]:n.ONE_MINUS_SRC_COLOR,[mu]:n.ONE_MINUS_SRC_ALPHA,[wd]:n.ONE_MINUS_DST_COLOR,[bd]:n.ONE_MINUS_DST_ALPHA};function q(P,ut,B,st,ht,kt,Zt,ne){if(P===gn){d===!0&&(Ut(n.BLEND),d=!1);return}if(d===!1&&(Mt(n.BLEND),d=!0),P!==_d){if(P!==E||ne!==x){if((g!==li||w!==li)&&(n.blendEquation(n.FUNC_ADD),g=li,w=li),ne)switch(P){case fi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case So:n.blendFunc(n.ONE,n.ONE);break;case Eo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case To:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case fi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case So:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Eo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case To:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,A=null,C=null,U=null,E=P,x=ne}return}ht=ht||ut,kt=kt||B,Zt=Zt||st,(ut!==g||ht!==w)&&(n.blendEquationSeparate(R[ut],R[ht]),g=ut,w=ht),(B!==y||st!==A||kt!==C||Zt!==U)&&(n.blendFuncSeparate(it[B],it[st],it[kt],it[Zt]),y=B,A=st,C=kt,U=Zt),E=P,x=!1}function rt(P,ut){P.side===rn?Ut(n.CULL_FACE):Mt(n.CULL_FACE);let B=P.side===Ee;ut&&(B=!B),J(B),P.blending===fi&&P.transparent===!1?q(gn):q(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const st=P.stencilWrite;c.setTest(st),st&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),gt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Mt(n.SAMPLE_ALPHA_TO_COVERAGE):Ut(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(P){b!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),b=P)}function yt(P){P!==pd?(Mt(n.CULL_FACE),P!==G&&(P===yo?n.cullFace(n.BACK):P===md?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ut(n.CULL_FACE),G=P}function dt(P){P!==K&&(j&&n.lineWidth(P),K=P)}function gt(P,ut,B){P?(Mt(n.POLYGON_OFFSET_FILL),(N!==ut||O!==B)&&(n.polygonOffset(ut,B),N=ut,O=B)):Ut(n.POLYGON_OFFSET_FILL)}function Pt(P){P?Mt(n.SCISSOR_TEST):Ut(n.SCISSOR_TEST)}function Gt(P){P===void 0&&(P=n.TEXTURE0+F-1),$!==P&&(n.activeTexture(P),$=P)}function Kt(P,ut,B){B===void 0&&($===null?B=n.TEXTURE0+F-1:B=$);let st=Z[B];st===void 0&&(st={type:void 0,texture:void 0},Z[B]=st),(st.type!==P||st.texture!==ut)&&($!==B&&(n.activeTexture(B),$=B),n.bindTexture(P,ut||mt[P]),st.type=P,st.texture=ut)}function T(){const P=Z[$];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function M(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function H(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function et(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function nt(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function lt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function St(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ct(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Et(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Tt(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function At(P){Q.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Q.copy(P))}function vt(P){tt.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),tt.copy(P))}function xt(P,ut){let B=h.get(ut);B===void 0&&(B=new WeakMap,h.set(ut,B));let st=B.get(P);st===void 0&&(st=n.getUniformBlockIndex(ut,P.name),B.set(P,st))}function Bt(P,ut){const st=h.get(ut).get(P);u.get(ut)!==st&&(n.uniformBlockBinding(ut,st,P.__bindingPointIndex),u.set(ut,st))}function qt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},$=null,Z={},m={},_=new WeakMap,v=[],p=null,d=!1,E=null,g=null,y=null,A=null,w=null,C=null,U=null,x=!1,b=null,G=null,K=null,N=null,O=null,Q.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Mt,disable:Ut,bindFramebuffer:wt,drawBuffers:Wt,useProgram:Ct,setBlending:q,setMaterial:rt,setFlipSided:J,setCullFace:yt,setLineWidth:dt,setPolygonOffset:gt,setScissorTest:Pt,activeTexture:Gt,bindTexture:Kt,unbindTexture:T,compressedTexImage2D:M,compressedTexImage3D:H,texImage2D:Et,texImage3D:Tt,updateUBOMapping:xt,uniformBlockBinding:Bt,texStorage2D:ct,texStorage3D:W,texSubImage2D:et,texSubImage3D:nt,compressedTexSubImage2D:lt,compressedTexSubImage3D:St,scissor:At,viewport:vt,reset:qt}}function vx(n,t,e,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let v;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(T,M){return d?new OffscreenCanvas(T,M):$i("canvas")}function g(T,M,H,et){let nt=1;if((T.width>et||T.height>et)&&(nt=et/Math.max(T.width,T.height)),nt<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const lt=M?Wr:Math.floor,St=lt(nt*T.width),ct=lt(nt*T.height);v===void 0&&(v=E(St,ct));const W=H?E(St,ct):v;return W.width=St,W.height=ct,W.getContext("2d").drawImage(T,0,0,St,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+St+"x"+ct+")."),W}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function y(T){return Ma(T.width)&&Ma(T.height)}function A(T){return o?!1:T.wrapS!==Be||T.wrapT!==Be||T.minFilter!==Me&&T.minFilter!==Ce}function w(T,M){return T.generateMipmaps&&M&&T.minFilter!==Me&&T.minFilter!==Ce}function C(T){n.generateMipmap(T)}function U(T,M,H,et,nt=!1){if(o===!1)return M;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let lt=M;return M===n.RED&&(H===n.FLOAT&&(lt=n.R32F),H===n.HALF_FLOAT&&(lt=n.R16F),H===n.UNSIGNED_BYTE&&(lt=n.R8)),M===n.RG&&(H===n.FLOAT&&(lt=n.RG32F),H===n.HALF_FLOAT&&(lt=n.RG16F),H===n.UNSIGNED_BYTE&&(lt=n.RG8)),M===n.RGBA&&(H===n.FLOAT&&(lt=n.RGBA32F),H===n.HALF_FLOAT&&(lt=n.RGBA16F),H===n.UNSIGNED_BYTE&&(lt=et===Nt&&nt===!1?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(lt=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(lt=n.RGB5_A1)),(lt===n.R16F||lt===n.R32F||lt===n.RG16F||lt===n.RG32F||lt===n.RGBA16F||lt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function x(T,M,H){return w(T,H)===!0||T.isFramebufferTexture&&T.minFilter!==Me&&T.minFilter!==Ce?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function b(T){return T===Me||T===wo||T===_s?n.NEAREST:n.LINEAR}function G(T){const M=T.target;M.removeEventListener("dispose",G),N(M),M.isVideoTexture&&_.delete(M)}function K(T){const M=T.target;M.removeEventListener("dispose",K),F(M)}function N(T){const M=i.get(T);if(M.__webglInit===void 0)return;const H=T.source,et=p.get(H);if(et){const nt=et[M.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&O(T),Object.keys(et).length===0&&p.delete(H)}i.remove(T)}function O(T){const M=i.get(T);n.deleteTexture(M.__webglTexture);const H=T.source,et=p.get(H);delete et[M.__cacheKey],a.memory.textures--}function F(T){const M=T.texture,H=i.get(T),et=i.get(M);if(et.__webglTexture!==void 0&&(n.deleteTexture(et.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++)n.deleteFramebuffer(H.__webglFramebuffer[nt]),H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[nt]);else{if(n.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let nt=0;nt<H.__webglColorRenderbuffer.length;nt++)H.__webglColorRenderbuffer[nt]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[nt]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let nt=0,lt=M.length;nt<lt;nt++){const St=i.get(M[nt]);St.__webglTexture&&(n.deleteTexture(St.__webglTexture),a.memory.textures--),i.remove(M[nt])}i.remove(M),i.remove(T)}let j=0;function X(){j=0}function Y(){const T=j;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),j+=1,T}function $(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function Z(T,M){const H=i.get(T);if(T.isVideoTexture&&Gt(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const et=T.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{wt(H,T,M);return}}e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+M)}function ft(T,M){const H=i.get(T);if(T.version>0&&H.__version!==T.version){wt(H,T,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+M)}function z(T,M){const H=i.get(T);if(T.version>0&&H.__version!==T.version){wt(H,T,M);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+M)}function Q(T,M){const H=i.get(T);if(T.version>0&&H.__version!==T.version){Wt(H,T,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+M)}const tt={[ga]:n.REPEAT,[Be]:n.CLAMP_TO_EDGE,[_a]:n.MIRRORED_REPEAT},pt={[Me]:n.NEAREST,[wo]:n.NEAREST_MIPMAP_NEAREST,[_s]:n.NEAREST_MIPMAP_LINEAR,[Ce]:n.LINEAR,[kd]:n.LINEAR_MIPMAP_NEAREST,[qi]:n.LINEAR_MIPMAP_LINEAR},mt={[ip]:n.NEVER,[up]:n.ALWAYS,[rp]:n.LESS,[ap]:n.LEQUAL,[sp]:n.EQUAL,[cp]:n.GEQUAL,[op]:n.GREATER,[lp]:n.NOTEQUAL};function Mt(T,M,H){if(H?(n.texParameteri(T,n.TEXTURE_WRAP_S,tt[M.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,tt[M.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,tt[M.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,pt[M.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,pt[M.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==Be||M.wrapT!==Be)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,b(M.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,b(M.minFilter)),M.minFilter!==Me&&M.minFilter!==Ce&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,mt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===Me||M.minFilter!==_s&&M.minFilter!==qi||M.type===pn&&t.has("OES_texture_float_linear")===!1||o===!1&&M.type===Yi&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(T,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Ut(T,M){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",G));const et=M.source;let nt=p.get(et);nt===void 0&&(nt={},p.set(et,nt));const lt=$(M);if(lt!==T.__cacheKey){nt[lt]===void 0&&(nt[lt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),nt[lt].usedTimes++;const St=nt[T.__cacheKey];St!==void 0&&(nt[T.__cacheKey].usedTimes--,St.usedTimes===0&&O(M)),T.__cacheKey=lt,T.__webglTexture=nt[lt].texture}return H}function wt(T,M,H){let et=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(et=n.TEXTURE_3D);const nt=Ut(T,M),lt=M.source;e.bindTexture(et,T.__webglTexture,n.TEXTURE0+H);const St=i.get(lt);if(lt.version!==St.__version||nt===!0){e.activeTexture(n.TEXTURE0+H),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ct=A(M)&&y(M.image)===!1;let W=g(M.image,ct,!1,u);W=Kt(M,W);const Et=y(W)||o,Tt=s.convert(M.format,M.colorSpace);let At=s.convert(M.type),vt=U(M.internalFormat,Tt,At,M.colorSpace);Mt(et,M,Et);let xt;const Bt=M.mipmaps,qt=o&&M.isVideoTexture!==!0,P=St.__version===void 0||nt===!0,ut=x(M,W,Et);if(M.isDepthTexture)vt=n.DEPTH_COMPONENT,o?M.type===pn?vt=n.DEPTH_COMPONENT32F:M.type===dn?vt=n.DEPTH_COMPONENT24:M.type===Bn?vt=n.DEPTH24_STENCIL8:vt=n.DEPTH_COMPONENT16:M.type===pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===zn&&vt===n.DEPTH_COMPONENT&&M.type!==qa&&M.type!==dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=dn,At=s.convert(M.type)),M.format===xi&&vt===n.DEPTH_COMPONENT&&(vt=n.DEPTH_STENCIL,M.type!==Bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Bn,At=s.convert(M.type))),P&&(qt?e.texStorage2D(n.TEXTURE_2D,1,vt,W.width,W.height):e.texImage2D(n.TEXTURE_2D,0,vt,W.width,W.height,0,Tt,At,null));else if(M.isDataTexture)if(Bt.length>0&&Et){qt&&P&&e.texStorage2D(n.TEXTURE_2D,ut,vt,Bt[0].width,Bt[0].height);for(let B=0,st=Bt.length;B<st;B++)xt=Bt[B],qt?e.texSubImage2D(n.TEXTURE_2D,B,0,0,xt.width,xt.height,Tt,At,xt.data):e.texImage2D(n.TEXTURE_2D,B,vt,xt.width,xt.height,0,Tt,At,xt.data);M.generateMipmaps=!1}else qt?(P&&e.texStorage2D(n.TEXTURE_2D,ut,vt,W.width,W.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,W.width,W.height,Tt,At,W.data)):e.texImage2D(n.TEXTURE_2D,0,vt,W.width,W.height,0,Tt,At,W.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qt&&P&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,vt,Bt[0].width,Bt[0].height,W.depth);for(let B=0,st=Bt.length;B<st;B++)xt=Bt[B],M.format!==ze?Tt!==null?qt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,xt.width,xt.height,W.depth,Tt,xt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,B,vt,xt.width,xt.height,W.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,xt.width,xt.height,W.depth,Tt,At,xt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,B,vt,xt.width,xt.height,W.depth,0,Tt,At,xt.data)}else{qt&&P&&e.texStorage2D(n.TEXTURE_2D,ut,vt,Bt[0].width,Bt[0].height);for(let B=0,st=Bt.length;B<st;B++)xt=Bt[B],M.format!==ze?Tt!==null?qt?e.compressedTexSubImage2D(n.TEXTURE_2D,B,0,0,xt.width,xt.height,Tt,xt.data):e.compressedTexImage2D(n.TEXTURE_2D,B,vt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage2D(n.TEXTURE_2D,B,0,0,xt.width,xt.height,Tt,At,xt.data):e.texImage2D(n.TEXTURE_2D,B,vt,xt.width,xt.height,0,Tt,At,xt.data)}else if(M.isDataArrayTexture)qt?(P&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,vt,W.width,W.height,W.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,Tt,At,W.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,vt,W.width,W.height,W.depth,0,Tt,At,W.data);else if(M.isData3DTexture)qt?(P&&e.texStorage3D(n.TEXTURE_3D,ut,vt,W.width,W.height,W.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,Tt,At,W.data)):e.texImage3D(n.TEXTURE_3D,0,vt,W.width,W.height,W.depth,0,Tt,At,W.data);else if(M.isFramebufferTexture){if(P)if(qt)e.texStorage2D(n.TEXTURE_2D,ut,vt,W.width,W.height);else{let B=W.width,st=W.height;for(let ht=0;ht<ut;ht++)e.texImage2D(n.TEXTURE_2D,ht,vt,B,st,0,Tt,At,null),B>>=1,st>>=1}}else if(Bt.length>0&&Et){qt&&P&&e.texStorage2D(n.TEXTURE_2D,ut,vt,Bt[0].width,Bt[0].height);for(let B=0,st=Bt.length;B<st;B++)xt=Bt[B],qt?e.texSubImage2D(n.TEXTURE_2D,B,0,0,Tt,At,xt):e.texImage2D(n.TEXTURE_2D,B,vt,Tt,At,xt);M.generateMipmaps=!1}else qt?(P&&e.texStorage2D(n.TEXTURE_2D,ut,vt,W.width,W.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Tt,At,W)):e.texImage2D(n.TEXTURE_2D,0,vt,Tt,At,W);w(M,Et)&&C(et),St.__version=lt.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Wt(T,M,H){if(M.image.length!==6)return;const et=Ut(T,M),nt=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+H);const lt=i.get(nt);if(nt.version!==lt.__version||et===!0){e.activeTexture(n.TEXTURE0+H),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const St=M.isCompressedTexture||M.image[0].isCompressedTexture,ct=M.image[0]&&M.image[0].isDataTexture,W=[];for(let B=0;B<6;B++)!St&&!ct?W[B]=g(M.image[B],!1,!0,c):W[B]=ct?M.image[B].image:M.image[B],W[B]=Kt(M,W[B]);const Et=W[0],Tt=y(Et)||o,At=s.convert(M.format,M.colorSpace),vt=s.convert(M.type),xt=U(M.internalFormat,At,vt,M.colorSpace),Bt=o&&M.isVideoTexture!==!0,qt=lt.__version===void 0||et===!0;let P=x(M,Et,Tt);Mt(n.TEXTURE_CUBE_MAP,M,Tt);let ut;if(St){Bt&&qt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,P,xt,Et.width,Et.height);for(let B=0;B<6;B++){ut=W[B].mipmaps;for(let st=0;st<ut.length;st++){const ht=ut[st];M.format!==ze?At!==null?Bt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,st,0,0,ht.width,ht.height,At,ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,st,xt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,st,0,0,ht.width,ht.height,At,vt,ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,st,xt,ht.width,ht.height,0,At,vt,ht.data)}}}else{ut=M.mipmaps,Bt&&qt&&(ut.length>0&&P++,e.texStorage2D(n.TEXTURE_CUBE_MAP,P,xt,W[0].width,W[0].height));for(let B=0;B<6;B++)if(ct){Bt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,W[B].width,W[B].height,At,vt,W[B].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,xt,W[B].width,W[B].height,0,At,vt,W[B].data);for(let st=0;st<ut.length;st++){const kt=ut[st].image[B].image;Bt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,st+1,0,0,kt.width,kt.height,At,vt,kt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,st+1,xt,kt.width,kt.height,0,At,vt,kt.data)}}else{Bt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,At,vt,W[B]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,xt,At,vt,W[B]);for(let st=0;st<ut.length;st++){const ht=ut[st];Bt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,st+1,0,0,At,vt,ht.image[B]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+B,st+1,xt,At,vt,ht.image[B])}}}w(M,Tt)&&C(n.TEXTURE_CUBE_MAP),lt.__version=nt.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Ct(T,M,H,et,nt){const lt=s.convert(H.format,H.colorSpace),St=s.convert(H.type),ct=U(H.internalFormat,lt,St,H.colorSpace);i.get(M).__hasExternalTextures||(nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,0,ct,M.width,M.height,M.depth,0,lt,St,null):e.texImage2D(nt,0,ct,M.width,M.height,0,lt,St,null)),e.bindFramebuffer(n.FRAMEBUFFER,T),Pt(M)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,nt,i.get(H).__webglTexture,0,gt(M)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,nt,i.get(H).__webglTexture,0),e.bindFramebuffer(n.FRAMEBUFFER,null)}function R(T,M,H){if(n.bindRenderbuffer(n.RENDERBUFFER,T),M.depthBuffer&&!M.stencilBuffer){let et=n.DEPTH_COMPONENT16;if(H||Pt(M)){const nt=M.depthTexture;nt&&nt.isDepthTexture&&(nt.type===pn?et=n.DEPTH_COMPONENT32F:nt.type===dn&&(et=n.DEPTH_COMPONENT24));const lt=gt(M);Pt(M)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,et,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,et,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,et,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(M.depthBuffer&&M.stencilBuffer){const et=gt(M);H&&Pt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,et,n.DEPTH24_STENCIL8,M.width,M.height):Pt(M)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{const et=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let nt=0;nt<et.length;nt++){const lt=et[nt],St=s.convert(lt.format,lt.colorSpace),ct=s.convert(lt.type),W=U(lt.internalFormat,St,ct,lt.colorSpace),Et=gt(M);H&&Pt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et,W,M.width,M.height):Pt(M)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et,W,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,W,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function it(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z(M.depthTexture,0);const et=i.get(M.depthTexture).__webglTexture,nt=gt(M);if(M.depthTexture.format===zn)Pt(M)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(M.depthTexture.format===xi)Pt(M)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function q(T){const M=i.get(T),H=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");it(M.__webglFramebuffer,T)}else if(H){M.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[et]),M.__webglDepthbuffer[et]=n.createRenderbuffer(),R(M.__webglDepthbuffer[et],T,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),R(M.__webglDepthbuffer,T,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(T,M,H){const et=i.get(T);M!==void 0&&Ct(et.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),H!==void 0&&q(T)}function J(T){const M=T.texture,H=i.get(T),et=i.get(M);T.addEventListener("dispose",K),T.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=M.version,a.memory.textures++);const nt=T.isWebGLCubeRenderTarget===!0,lt=T.isWebGLMultipleRenderTargets===!0,St=y(T)||o;if(nt){H.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)H.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(H.__webglFramebuffer=n.createFramebuffer(),lt)if(r.drawBuffers){const ct=T.texture;for(let W=0,Et=ct.length;W<Et;W++){const Tt=i.get(ct[W]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&Pt(T)===!1){const ct=lt?M:[M];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let W=0;W<ct.length;W++){const Et=ct[W];H.__webglColorRenderbuffer[W]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[W]);const Tt=s.convert(Et.format,Et.colorSpace),At=s.convert(Et.type),vt=U(Et.internalFormat,Tt,At,Et.colorSpace,T.isXRRenderTarget===!0),xt=gt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,vt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.RENDERBUFFER,H.__webglColorRenderbuffer[W])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),R(H.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(nt){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),Mt(n.TEXTURE_CUBE_MAP,M,St);for(let ct=0;ct<6;ct++)Ct(H.__webglFramebuffer[ct],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct);w(M,St)&&C(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){const ct=T.texture;for(let W=0,Et=ct.length;W<Et;W++){const Tt=ct[W],At=i.get(Tt);e.bindTexture(n.TEXTURE_2D,At.__webglTexture),Mt(n.TEXTURE_2D,Tt,St),Ct(H.__webglFramebuffer,T,Tt,n.COLOR_ATTACHMENT0+W,n.TEXTURE_2D),w(Tt,St)&&C(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?ct=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,et.__webglTexture),Mt(ct,M,St),Ct(H.__webglFramebuffer,T,M,n.COLOR_ATTACHMENT0,ct),w(M,St)&&C(ct),e.unbindTexture()}T.depthBuffer&&q(T)}function yt(T){const M=y(T)||o,H=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let et=0,nt=H.length;et<nt;et++){const lt=H[et];if(w(lt,M)){const St=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ct=i.get(lt).__webglTexture;e.bindTexture(St,ct),C(St),e.unbindTexture()}}}function dt(T){if(o&&T.samples>0&&Pt(T)===!1){const M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],H=T.width,et=T.height;let nt=n.COLOR_BUFFER_BIT;const lt=[],St=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=i.get(T),W=T.isWebGLMultipleRenderTargets===!0;if(W)for(let Et=0;Et<M.length;Et++)e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let Et=0;Et<M.length;Et++){lt.push(n.COLOR_ATTACHMENT0+Et),T.depthBuffer&&lt.push(St);const Tt=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(Tt===!1&&(T.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),W&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ct.__webglColorRenderbuffer[Et]),Tt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[St]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[St])),W){const At=i.get(M[Et]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,At,0)}n.blitFramebuffer(0,0,H,et,0,0,H,et,nt,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,lt)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),W)for(let Et=0;Et<M.length;Et++){e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,ct.__webglColorRenderbuffer[Et]);const Tt=i.get(M[Et]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,Tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function gt(T){return Math.min(h,T.samples)}function Pt(T){const M=i.get(T);return o&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Gt(T){const M=a.render.frame;_.get(T)!==M&&(_.set(T,M),T.update())}function Kt(T,M){const H=T.colorSpace,et=T.format,nt=T.type;return T.isCompressedTexture===!0||T.format===xa||H!==qe&&H!==Hn&&(H===Nt?o===!1?t.has("EXT_sRGB")===!0&&et===ze?(T.format=xa,T.minFilter=Ce,T.generateMipmaps=!1):M=Au.sRGBToLinear(M):(et!==ze||nt!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}this.allocateTextureUnit=Y,this.resetTextureUnits=X,this.setTexture2D=Z,this.setTexture2DArray=ft,this.setTexture3D=z,this.setTextureCube=Q,this.rebindTextures=rt,this.setupRenderTarget=J,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Pt}function xx(n,t,e){const i=e.isWebGL2;function r(s,a=Hn){let o;if(s===_n)return n.UNSIGNED_BYTE;if(s===vu)return n.UNSIGNED_SHORT_4_4_4_4;if(s===xu)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Wd)return n.BYTE;if(s===Xd)return n.SHORT;if(s===qa)return n.UNSIGNED_SHORT;if(s===_u)return n.INT;if(s===dn)return n.UNSIGNED_INT;if(s===pn)return n.FLOAT;if(s===Yi)return i?n.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===qd)return n.ALPHA;if(s===ze)return n.RGBA;if(s===Yd)return n.LUMINANCE;if(s===jd)return n.LUMINANCE_ALPHA;if(s===zn)return n.DEPTH_COMPONENT;if(s===xi)return n.DEPTH_STENCIL;if(s===xa)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===$d)return n.RED;if(s===Mu)return n.RED_INTEGER;if(s===Jd)return n.RG;if(s===yu)return n.RG_INTEGER;if(s===Su)return n.RGBA_INTEGER;if(s===vs||s===xs||s===Ms||s===ys)if(a===Nt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===vs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===xs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ms)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ys)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===vs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===xs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ms)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ys)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ro||s===Co||s===Lo||s===Po)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ro)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Co)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Lo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Po)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kd)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Uo||s===Do)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Uo)return a===Nt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Do)return a===Nt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Io||s===No||s===Oo||s===Fo||s===Bo||s===zo||s===Go||s===Ho||s===Vo||s===ko||s===Wo||s===Xo||s===qo||s===Yo)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Io)return a===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===No)return a===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Oo)return a===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fo)return a===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bo)return a===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zo)return a===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Go)return a===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ho)return a===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vo)return a===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ko)return a===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Wo)return a===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Xo)return a===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qo)return a===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yo)return a===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ss)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Ss)return a===Nt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Zd||s===jo||s===$o||s===Jo)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Ss)return o.COMPRESSED_RED_RGTC1_EXT;if(s===jo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$o)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Jo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Bn?i?n.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Mx extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Lr extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yx={type:"move"};class Ws{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,i),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Lr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Sx extends Te{constructor(t,e,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:zn,u!==zn&&u!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===zn&&(i=dn),i===void 0&&u===xi&&(i=Bn),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Me,this.minFilter=l!==void 0?l:Me,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ex extends Ti{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,_=null;const v=e.getContextAttributes();let p=null,d=null;const E=[],g=[];let y=null;const A=new Fe;A.layers.enable(1),A.viewport=new fe;const w=new Fe;w.layers.enable(2),w.viewport=new fe;const C=[A,w],U=new Mx;U.layers.enable(1),U.layers.enable(2);let x=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(z){y=z},this.getController=function(z){let Q=E[z];return Q===void 0&&(Q=new Ws,E[z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(z){let Q=E[z];return Q===void 0&&(Q=new Ws,E[z]=Q),Q.getGripSpace()},this.getHand=function(z){let Q=E[z];return Q===void 0&&(Q=new Ws,E[z]=Q),Q.getHandSpace()};function G(z){const Q=g.indexOf(z.inputSource);if(Q===-1)return;const tt=E[Q];tt!==void 0&&(tt.update(z.inputSource,z.frame,c||a),tt.dispatchEvent({type:z.type,data:z.inputSource}))}function K(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",N);for(let z=0;z<E.length;z++){const Q=g[z];Q!==null&&(g[z]=null,E[z].disconnect(Q))}x=null,b=null,t.setRenderTarget(p),m=null,f=null,h=null,r=null,d=null,ft.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",K),r.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await e.makeXRCompatible(),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,Q),r.updateRenderState({baseLayer:m}),d=new Vn(m.framebufferWidth,m.framebufferHeight,{format:ze,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let Q=null,tt=null,pt=null;v.depth&&(pt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=v.stencil?xi:zn,tt=v.stencil?Bn:dn);const mt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(mt),r.updateRenderState({layers:[f]}),d=new Vn(f.textureWidth,f.textureHeight,{format:ze,type:_n,depthTexture:new Sx(f.textureWidth,f.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const Mt=t.properties.get(d);Mt.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ft.setContext(r),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function N(z){for(let Q=0;Q<z.removed.length;Q++){const tt=z.removed[Q],pt=g.indexOf(tt);pt>=0&&(g[pt]=null,E[pt].disconnect(tt))}for(let Q=0;Q<z.added.length;Q++){const tt=z.added[Q];let pt=g.indexOf(tt);if(pt===-1){for(let Mt=0;Mt<E.length;Mt++)if(Mt>=g.length){g.push(tt),pt=Mt;break}else if(g[Mt]===null){g[Mt]=tt,pt=Mt;break}if(pt===-1)break}const mt=E[pt];mt&&mt.connect(tt)}}const O=new L,F=new L;function j(z,Q,tt){O.setFromMatrixPosition(Q.matrixWorld),F.setFromMatrixPosition(tt.matrixWorld);const pt=O.distanceTo(F),mt=Q.projectionMatrix.elements,Mt=tt.projectionMatrix.elements,Ut=mt[14]/(mt[10]-1),wt=mt[14]/(mt[10]+1),Wt=(mt[9]+1)/mt[5],Ct=(mt[9]-1)/mt[5],R=(mt[8]-1)/mt[0],it=(Mt[8]+1)/Mt[0],q=Ut*R,rt=Ut*it,J=pt/(-R+it),yt=J*-R;Q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(yt),z.translateZ(J),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const dt=Ut+J,gt=wt+J,Pt=q-yt,Gt=rt+(pt-yt),Kt=Wt*wt/gt*dt,T=Ct*wt/gt*dt;z.projectionMatrix.makePerspective(Pt,Gt,Kt,T,dt,gt),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function X(z,Q){Q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCameraXR=function(z){if(r===null)return z;y&&(z=y),U.near=w.near=A.near=z.near,U.far=w.far=A.far=z.far,(x!==U.near||b!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),x=U.near,b=U.far);const Q=z.parent,tt=U.cameras;X(U,Q);for(let pt=0;pt<tt.length;pt++)X(tt[pt],Q);return tt.length===2?j(U,A,w):U.projectionMatrix.copy(A.projectionMatrix),y&&Y(U,Q),U};function Y(z,Q){const tt=y;Q===null?tt.matrix.copy(z.matrixWorld):(tt.matrix.copy(Q.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(z.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0);const pt=tt.children;for(let mt=0,Mt=pt.length;mt<Mt;mt++)pt[mt].updateMatrixWorld(!0);tt.projectionMatrix.copy(z.projectionMatrix),tt.projectionMatrixInverse.copy(z.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=ji*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)};let $=null;function Z(z,Q){if(u=Q.getViewerPose(c||a),_=Q,u!==null){const tt=u.views;m!==null&&(t.setRenderTargetFramebuffer(d,m.framebuffer),t.setRenderTarget(d));let pt=!1;tt.length!==U.cameras.length&&(U.cameras.length=0,pt=!0);for(let mt=0;mt<tt.length;mt++){const Mt=tt[mt];let Ut=null;if(m!==null)Ut=m.getViewport(Mt);else{const Wt=h.getViewSubImage(f,Mt);Ut=Wt.viewport,mt===0&&(t.setRenderTargetTextures(d,Wt.colorTexture,f.ignoreDepthValues?void 0:Wt.depthStencilTexture),t.setRenderTarget(d))}let wt=C[mt];wt===void 0&&(wt=new Fe,wt.layers.enable(mt),wt.viewport=new fe,C[mt]=wt),wt.matrix.fromArray(Mt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(Mt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),mt===0&&(U.matrix.copy(wt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),pt===!0&&U.cameras.push(wt)}}for(let tt=0;tt<E.length;tt++){const pt=g[tt],mt=E[tt];pt!==null&&mt!==void 0&&mt.update(pt,Q,c||a)}$&&$(z,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),_=null}const ft=new Ou;ft.setAnimationLoop(Z),this.setAnimationLoop=function(z){$=z},this.dispose=function(){}}}function Tx(n,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Du(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,E,g,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,y)):d.isMeshMatcapMaterial?(s(p,d),_(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),v(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,E,g):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ee&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ee&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const E=t.get(d).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const g=n.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*g,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,E,g){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*E,p.scale.value=g*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,E){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ee&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const E=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function bx(n,t,e,i){let r={},s={},a=[];const o=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,g){const y=g.program;i.uniformBlockBinding(E,y)}function c(E,g){let y=r[E.id];y===void 0&&(_(E),y=u(E),r[E.id]=y,E.addEventListener("dispose",p));const A=g.program;i.updateUBOMapping(E,A);const w=t.render.frame;s[E.id]!==w&&(f(E),s[E.id]=w)}function u(E){const g=h();E.__bindingPointIndex=g;const y=n.createBuffer(),A=E.__size,w=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,y),y}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const g=r[E.id],y=E.uniforms,A=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let w=0,C=y.length;w<C;w++){const U=y[w];if(m(U,w,A)===!0){const x=U.__offset,b=Array.isArray(U.value)?U.value:[U.value];let G=0;for(let K=0;K<b.length;K++){const N=b[K],O=v(N);typeof N=="number"?(U.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,x+G,U.__data)):N.isMatrix3?(U.__data[0]=N.elements[0],U.__data[1]=N.elements[1],U.__data[2]=N.elements[2],U.__data[3]=N.elements[0],U.__data[4]=N.elements[3],U.__data[5]=N.elements[4],U.__data[6]=N.elements[5],U.__data[7]=N.elements[0],U.__data[8]=N.elements[6],U.__data[9]=N.elements[7],U.__data[10]=N.elements[8],U.__data[11]=N.elements[0]):(N.toArray(U.__data,G),G+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,x,U.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,g,y){const A=E.value;if(y[g]===void 0){if(typeof A=="number")y[g]=A;else{const w=Array.isArray(A)?A:[A],C=[];for(let U=0;U<w.length;U++)C.push(w[U].clone());y[g]=C}return!0}else if(typeof A=="number"){if(y[g]!==A)return y[g]=A,!0}else{const w=Array.isArray(y[g])?y[g]:[y[g]],C=Array.isArray(A)?A:[A];for(let U=0;U<w.length;U++){const x=w[U];if(x.equals(C[U])===!1)return x.copy(C[U]),!0}}return!1}function _(E){const g=E.uniforms;let y=0;const A=16;let w=0;for(let C=0,U=g.length;C<U;C++){const x=g[C],b={boundary:0,storage:0},G=Array.isArray(x.value)?x.value:[x.value];for(let K=0,N=G.length;K<N;K++){const O=G[K],F=v(O);b.boundary+=F.boundary,b.storage+=F.storage}if(x.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=y,C>0){w=y%A;const K=A-w;w!==0&&K-b.boundary<0&&(y+=A-w,x.__offset=y)}y+=b.storage}return w=y%A,w>0&&(y+=A-w),E.__size=y,E.__cache={},this}function v(E){const g={boundary:0,storage:0};return typeof E=="number"?(g.boundary=4,g.storage=4):E.isVector2?(g.boundary=8,g.storage=8):E.isVector3||E.isColor?(g.boundary=16,g.storage=12):E.isVector4?(g.boundary=16,g.storage=16):E.isMatrix3?(g.boundary=48,g.storage=48):E.isMatrix4?(g.boundary=64,g.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),g}function p(E){const g=E.target;g.removeEventListener("dispose",p);const y=a.indexOf(g.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function d(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}function Ax(){const n=$i("canvas");return n.style.display="block",n}class wx{constructor(t={}){const{canvas:e=Ax(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),_=new Int32Array(4);let v=null,p=null;const d=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Nt,this.useLegacyLights=!0,this.toneMapping=on,this.toneMappingExposure=1;const g=this;let y=!1,A=0,w=0,C=null,U=-1,x=null;const b=new fe,G=new fe;let K=null;const N=new Vt(0);let O=0,F=e.width,j=e.height,X=1,Y=null,$=null;const Z=new fe(0,0,F,j),ft=new fe(0,0,F,j);let z=!1;const Q=new Ka;let tt=!1,pt=!1,mt=null;const Mt=new ee,Ut=new ot,wt=new L,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ct(){return C===null?X:1}let R=i;function it(S,I){for(let V=0;V<S.length;V++){const D=S[V],k=e.getContext(D,I);if(k!==null)return k}return null}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xa}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",B,!1),e.addEventListener("webglcontextcreationerror",st,!1),R===null){const I=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&I.shift(),R=it(I,S),R===null)throw it(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}R instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let q,rt,J,yt,dt,gt,Pt,Gt,Kt,T,M,H,et,nt,lt,St,ct,W,Et,Tt,At,vt,xt,Bt;function qt(){q=new F_(R),rt=new P_(R,q,t),q.init(rt),vt=new xx(R,q,rt),J=new _x(R,q,rt),yt=new G_(R),dt=new ix,gt=new vx(R,q,J,dt,rt,vt,yt),Pt=new D_(g),Gt=new O_(g),Kt=new Zp(R,rt),xt=new C_(R,q,Kt,rt),T=new B_(R,Kt,yt,xt),M=new W_(R,T,Kt,yt),Et=new k_(R,rt,gt),St=new U_(dt),H=new nx(g,Pt,Gt,q,rt,xt,St),et=new Tx(g,dt),nt=new sx,lt=new hx(q,rt),W=new R_(g,Pt,Gt,J,M,f,l),ct=new gx(g,M,rt),Bt=new bx(R,yt,rt,J),Tt=new L_(R,q,yt,rt),At=new z_(R,q,yt,rt),yt.programs=H.programs,g.capabilities=rt,g.extensions=q,g.properties=dt,g.renderLists=nt,g.shadowMap=ct,g.state=J,g.info=yt}qt();const P=new Ex(g,R);this.xr=P,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const S=q.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=q.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(F,j,!1))},this.getSize=function(S){return S.set(F,j)},this.setSize=function(S,I,V=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=S,j=I,e.width=Math.floor(S*X),e.height=Math.floor(I*X),V===!0&&(e.style.width=S+"px",e.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(F*X,j*X).floor()},this.setDrawingBufferSize=function(S,I,V){F=S,j=I,X=V,e.width=Math.floor(S*V),e.height=Math.floor(I*V),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(b)},this.getViewport=function(S){return S.copy(Z)},this.setViewport=function(S,I,V,D){S.isVector4?Z.set(S.x,S.y,S.z,S.w):Z.set(S,I,V,D),J.viewport(b.copy(Z).multiplyScalar(X).floor())},this.getScissor=function(S){return S.copy(ft)},this.setScissor=function(S,I,V,D){S.isVector4?ft.set(S.x,S.y,S.z,S.w):ft.set(S,I,V,D),J.scissor(G.copy(ft).multiplyScalar(X).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(S){J.setScissorTest(z=S)},this.setOpaqueSort=function(S){Y=S},this.setTransparentSort=function(S){$=S},this.getClearColor=function(S){return S.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(S=!0,I=!0,V=!0){let D=0;if(S){let k=!1;if(C!==null){const _t=C.texture.format;k=_t===Su||_t===yu||_t===Mu}if(k){const _t=C.texture.type,bt=_t===_n||_t===dn||_t===qa||_t===Bn||_t===vu||_t===xu,Rt=W.getClearColor(),Lt=W.getClearAlpha(),zt=Rt.r,Dt=Rt.g,It=Rt.b,Yt=dt.get(C).__webglFramebuffer;bt?(m[0]=zt,m[1]=Dt,m[2]=It,m[3]=Lt,R.clearBufferuiv(R.COLOR,Yt,m)):(_[0]=zt,_[1]=Dt,_[2]=It,_[3]=Lt,R.clearBufferiv(R.COLOR,Yt,_))}else D|=R.COLOR_BUFFER_BIT}I&&(D|=R.DEPTH_BUFFER_BIT),V&&(D|=R.STENCIL_BUFFER_BIT),R.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",B,!1),e.removeEventListener("webglcontextcreationerror",st,!1),nt.dispose(),lt.dispose(),dt.dispose(),Pt.dispose(),Gt.dispose(),M.dispose(),xt.dispose(),Bt.dispose(),H.dispose(),P.dispose(),P.removeEventListener("sessionstart",Qt),P.removeEventListener("sessionend",Ve),mt&&(mt.dispose(),mt=null),ge.stop()};function ut(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const S=yt.autoReset,I=ct.enabled,V=ct.autoUpdate,D=ct.needsUpdate,k=ct.type;qt(),yt.autoReset=S,ct.enabled=I,ct.autoUpdate=V,ct.needsUpdate=D,ct.type=k}function st(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ht(S){const I=S.target;I.removeEventListener("dispose",ht),kt(I)}function kt(S){Zt(S),dt.remove(S)}function Zt(S){const I=dt.get(S).programs;I!==void 0&&(I.forEach(function(V){H.releaseProgram(V)}),S.isShaderMaterial&&H.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,V,D,k,_t){I===null&&(I=Wt);const bt=k.isMesh&&k.matrixWorld.determinant()<0,Rt=rh(S,I,V,D,k);J.setMaterial(D,bt);let Lt=V.index,zt=1;D.wireframe===!0&&(Lt=T.getWireframeAttribute(V),zt=2);const Dt=V.drawRange,It=V.attributes.position;let Yt=Dt.start*zt,te=(Dt.start+Dt.count)*zt;_t!==null&&(Yt=Math.max(Yt,_t.start*zt),te=Math.min(te,(_t.start+_t.count)*zt)),Lt!==null?(Yt=Math.max(Yt,0),te=Math.min(te,Lt.count)):It!=null&&(Yt=Math.max(Yt,0),te=Math.min(te,It.count));const Pe=te-Yt;if(Pe<0||Pe===1/0)return;xt.setup(k,D,Rt,V,Lt);let je,ie=Tt;if(Lt!==null&&(je=Kt.get(Lt),ie=At,ie.setIndex(je)),k.isMesh)D.wireframe===!0?(J.setLineWidth(D.wireframeLinewidth*Ct()),ie.setMode(R.LINES)):ie.setMode(R.TRIANGLES);else if(k.isLine){let Ht=D.linewidth;Ht===void 0&&(Ht=1),J.setLineWidth(Ht*Ct()),k.isLineSegments?ie.setMode(R.LINES):k.isLineLoop?ie.setMode(R.LINE_LOOP):ie.setMode(R.LINE_STRIP)}else k.isPoints?ie.setMode(R.POINTS):k.isSprite&&ie.setMode(R.TRIANGLES);if(k.isInstancedMesh)ie.renderInstances(Yt,Pe,k.count);else if(V.isInstancedBufferGeometry){const Ht=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,cs=Math.min(V.instanceCount,Ht);ie.renderInstances(Yt,Pe,cs)}else ie.render(Yt,Pe)},this.compile=function(S,I){function V(D,k,_t){D.transparent===!0&&D.side===rn&&D.forceSinglePass===!1?(D.side=Ee,D.needsUpdate=!0,lr(D,k,_t),D.side=Sn,D.needsUpdate=!0,lr(D,k,_t),D.side=rn):lr(D,k,_t)}p=lt.get(S),p.init(),E.push(p),S.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights(g.useLegacyLights),S.traverse(function(D){const k=D.material;if(k)if(Array.isArray(k))for(let _t=0;_t<k.length;_t++){const bt=k[_t];V(bt,S,D)}else V(k,S,D)}),E.pop(),p=null};let ne=null;function En(S){ne&&ne(S)}function Qt(){ge.stop()}function Ve(){ge.start()}const ge=new Ou;ge.setAnimationLoop(En),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(S){ne=S,P.setAnimationLoop(S),S===null?ge.stop():ge.start()},P.addEventListener("sessionstart",Qt),P.addEventListener("sessionend",Ve),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(I=P.updateCameraXR(I)),S.isScene===!0&&S.onBeforeRender(g,S,I,C),p=lt.get(S,E.length),p.init(),E.push(p),Mt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Q.setFromProjectionMatrix(Mt),pt=this.localClippingEnabled,tt=St.init(this.clippingPlanes,pt),v=nt.get(S,d.length),v.init(),d.push(v),ro(S,I,0,g.sortObjects),v.finish(),g.sortObjects===!0&&v.sort(Y,$),tt===!0&&St.beginShadows();const V=p.state.shadowsArray;if(ct.render(V,S,I),tt===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,W.render(v,S),p.setupLights(g.useLegacyLights),I.isArrayCamera){const D=I.cameras;for(let k=0,_t=D.length;k<_t;k++){const bt=D[k];so(v,S,bt,bt.viewport)}}else so(v,S,I);C!==null&&(gt.updateMultisampleRenderTarget(C),gt.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(g,S,I),xt.resetDefaultState(),U=-1,x=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function ro(S,I,V,D){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Q.intersectsSprite(S)){D&&wt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Mt);const bt=M.update(S),Rt=S.material;Rt.visible&&v.push(S,bt,Rt,V,wt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Q.intersectsObject(S))){S.isSkinnedMesh&&S.skeleton.frame!==yt.render.frame&&(S.skeleton.update(),S.skeleton.frame=yt.render.frame);const bt=M.update(S),Rt=S.material;if(D&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),wt.copy(S.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),wt.copy(bt.boundingSphere.center)),wt.applyMatrix4(S.matrixWorld).applyMatrix4(Mt)),Array.isArray(Rt)){const Lt=bt.groups;for(let zt=0,Dt=Lt.length;zt<Dt;zt++){const It=Lt[zt],Yt=Rt[It.materialIndex];Yt&&Yt.visible&&v.push(S,bt,Yt,V,wt.z,It)}}else Rt.visible&&v.push(S,bt,Rt,V,wt.z,null)}}const _t=S.children;for(let bt=0,Rt=_t.length;bt<Rt;bt++)ro(_t[bt],I,V,D)}function so(S,I,V,D){const k=S.opaque,_t=S.transmissive,bt=S.transparent;p.setupLightsView(V),tt===!0&&St.setGlobalState(g.clippingPlanes,V),_t.length>0&&ih(k,_t,I,V),D&&J.viewport(b.copy(D)),k.length>0&&or(k,I,V),_t.length>0&&or(_t,I,V),bt.length>0&&or(bt,I,V),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function ih(S,I,V,D){const k=rt.isWebGL2;mt===null&&(mt=new Vn(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")?Yi:_n,minFilter:qi,samples:k&&o===!0?4:0})),g.getDrawingBufferSize(Ut),k?mt.setSize(Ut.x,Ut.y):mt.setSize(Wr(Ut.x),Wr(Ut.y));const _t=g.getRenderTarget();g.setRenderTarget(mt),g.getClearColor(N),O=g.getClearAlpha(),O<1&&g.setClearColor(16777215,.5),g.clear();const bt=g.toneMapping;g.toneMapping=on,or(S,V,D),gt.updateMultisampleRenderTarget(mt),gt.updateRenderTargetMipmap(mt);let Rt=!1;for(let Lt=0,zt=I.length;Lt<zt;Lt++){const Dt=I[Lt],It=Dt.object,Yt=Dt.geometry,te=Dt.material,Pe=Dt.group;if(te.side===rn&&It.layers.test(D.layers)){const je=te.side;te.side=Ee,te.needsUpdate=!0,ao(It,V,D,Yt,te,Pe),te.side=je,te.needsUpdate=!0,Rt=!0}}Rt===!0&&(gt.updateMultisampleRenderTarget(mt),gt.updateRenderTargetMipmap(mt)),g.setRenderTarget(_t),g.setClearColor(N,O),g.toneMapping=bt}function or(S,I,V){const D=I.isScene===!0?I.overrideMaterial:null;for(let k=0,_t=S.length;k<_t;k++){const bt=S[k],Rt=bt.object,Lt=bt.geometry,zt=D===null?bt.material:D,Dt=bt.group;Rt.layers.test(V.layers)&&ao(Rt,I,V,Lt,zt,Dt)}}function ao(S,I,V,D,k,_t){S.onBeforeRender(g,I,V,D,k,_t),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(g,I,V,D,S,_t),k.transparent===!0&&k.side===rn&&k.forceSinglePass===!1?(k.side=Ee,k.needsUpdate=!0,g.renderBufferDirect(V,I,D,k,S,_t),k.side=Sn,k.needsUpdate=!0,g.renderBufferDirect(V,I,D,k,S,_t),k.side=rn):g.renderBufferDirect(V,I,D,k,S,_t),S.onAfterRender(g,I,V,D,k,_t)}function lr(S,I,V){I.isScene!==!0&&(I=Wt);const D=dt.get(S),k=p.state.lights,_t=p.state.shadowsArray,bt=k.state.version,Rt=H.getParameters(S,k.state,_t,I,V),Lt=H.getProgramCacheKey(Rt);let zt=D.programs;D.environment=S.isMeshStandardMaterial?I.environment:null,D.fog=I.fog,D.envMap=(S.isMeshStandardMaterial?Gt:Pt).get(S.envMap||D.environment),zt===void 0&&(S.addEventListener("dispose",ht),zt=new Map,D.programs=zt);let Dt=zt.get(Lt);if(Dt!==void 0){if(D.currentProgram===Dt&&D.lightsStateVersion===bt)return oo(S,Rt),Dt}else Rt.uniforms=H.getUniforms(S),S.onBuild(V,Rt,g),S.onBeforeCompile(Rt,g),Dt=H.acquireProgram(Rt,Lt),zt.set(Lt,Dt),D.uniforms=Rt.uniforms;const It=D.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(It.clippingPlanes=St.uniform),oo(S,Rt),D.needsLights=ah(S),D.lightsStateVersion=bt,D.needsLights&&(It.ambientLightColor.value=k.state.ambient,It.lightProbe.value=k.state.probe,It.directionalLights.value=k.state.directional,It.directionalLightShadows.value=k.state.directionalShadow,It.spotLights.value=k.state.spot,It.spotLightShadows.value=k.state.spotShadow,It.rectAreaLights.value=k.state.rectArea,It.ltc_1.value=k.state.rectAreaLTC1,It.ltc_2.value=k.state.rectAreaLTC2,It.pointLights.value=k.state.point,It.pointLightShadows.value=k.state.pointShadow,It.hemisphereLights.value=k.state.hemi,It.directionalShadowMap.value=k.state.directionalShadowMap,It.directionalShadowMatrix.value=k.state.directionalShadowMatrix,It.spotShadowMap.value=k.state.spotShadowMap,It.spotLightMatrix.value=k.state.spotLightMatrix,It.spotLightMap.value=k.state.spotLightMap,It.pointShadowMap.value=k.state.pointShadowMap,It.pointShadowMatrix.value=k.state.pointShadowMatrix);const Yt=Dt.getUniforms(),te=Fr.seqWithValue(Yt.seq,It);return D.currentProgram=Dt,D.uniformsList=te,Dt}function oo(S,I){const V=dt.get(S);V.outputColorSpace=I.outputColorSpace,V.instancing=I.instancing,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function rh(S,I,V,D,k){I.isScene!==!0&&(I=Wt),gt.resetTextureUnits();const _t=I.fog,bt=D.isMeshStandardMaterial?I.environment:null,Rt=C===null?g.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:qe,Lt=(D.isMeshStandardMaterial?Gt:Pt).get(D.envMap||bt),zt=D.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Dt=!!V.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),It=!!V.morphAttributes.position,Yt=!!V.morphAttributes.normal,te=!!V.morphAttributes.color,Pe=D.toneMapped?g.toneMapping:on,je=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ie=je!==void 0?je.length:0,Ht=dt.get(D),cs=p.state.lights;if(tt===!0&&(pt===!0||S!==x)){const be=S===x&&D.id===U;St.setState(D,S,be)}let ce=!1;D.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==cs.state.version||Ht.outputColorSpace!==Rt||k.isInstancedMesh&&Ht.instancing===!1||!k.isInstancedMesh&&Ht.instancing===!0||k.isSkinnedMesh&&Ht.skinning===!1||!k.isSkinnedMesh&&Ht.skinning===!0||Ht.envMap!==Lt||D.fog===!0&&Ht.fog!==_t||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==St.numPlanes||Ht.numIntersection!==St.numIntersection)||Ht.vertexAlphas!==zt||Ht.vertexTangents!==Dt||Ht.morphTargets!==It||Ht.morphNormals!==Yt||Ht.morphColors!==te||Ht.toneMapping!==Pe||rt.isWebGL2===!0&&Ht.morphTargetsCount!==ie)&&(ce=!0):(ce=!0,Ht.__version=D.version);let Tn=Ht.currentProgram;ce===!0&&(Tn=lr(D,I,k));let lo=!1,Ai=!1,us=!1;const _e=Tn.getUniforms(),bn=Ht.uniforms;if(J.useProgram(Tn.program)&&(lo=!0,Ai=!0,us=!0),D.id!==U&&(U=D.id,Ai=!0),lo||x!==S){if(_e.setValue(R,"projectionMatrix",S.projectionMatrix),rt.logarithmicDepthBuffer&&_e.setValue(R,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),x!==S&&(x=S,Ai=!0,us=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const be=_e.map.cameraPosition;be!==void 0&&be.setValue(R,wt.setFromMatrixPosition(S.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&_e.setValue(R,"isOrthographic",S.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||k.isSkinnedMesh)&&_e.setValue(R,"viewMatrix",S.matrixWorldInverse)}if(k.isSkinnedMesh){_e.setOptional(R,k,"bindMatrix"),_e.setOptional(R,k,"bindMatrixInverse");const be=k.skeleton;be&&(rt.floatVertexTextures?(be.boneTexture===null&&be.computeBoneTexture(),_e.setValue(R,"boneTexture",be.boneTexture,gt),_e.setValue(R,"boneTextureSize",be.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const hs=V.morphAttributes;if((hs.position!==void 0||hs.normal!==void 0||hs.color!==void 0&&rt.isWebGL2===!0)&&Et.update(k,V,Tn),(Ai||Ht.receiveShadow!==k.receiveShadow)&&(Ht.receiveShadow=k.receiveShadow,_e.setValue(R,"receiveShadow",k.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(bn.envMap.value=Lt,bn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),Ai&&(_e.setValue(R,"toneMappingExposure",g.toneMappingExposure),Ht.needsLights&&sh(bn,us),_t&&D.fog===!0&&et.refreshFogUniforms(bn,_t),et.refreshMaterialUniforms(bn,D,X,j,mt),Fr.upload(R,Ht.uniformsList,bn,gt)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Fr.upload(R,Ht.uniformsList,bn,gt),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&_e.setValue(R,"center",k.center),_e.setValue(R,"modelViewMatrix",k.modelViewMatrix),_e.setValue(R,"normalMatrix",k.normalMatrix),_e.setValue(R,"modelMatrix",k.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const be=D.uniformsGroups;for(let fs=0,oh=be.length;fs<oh;fs++)if(rt.isWebGL2){const co=be[fs];Bt.update(co,Tn),Bt.bind(co,Tn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tn}function sh(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function ah(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,I,V){dt.get(S.texture).__webglTexture=I,dt.get(S.depthTexture).__webglTexture=V;const D=dt.get(S);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=V===void 0,D.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,I){const V=dt.get(S);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,V=0){C=S,A=I,w=V;let D=!0,k=null,_t=!1,bt=!1;if(S){const Lt=dt.get(S);Lt.__useDefaultFramebuffer!==void 0?(J.bindFramebuffer(R.FRAMEBUFFER,null),D=!1):Lt.__webglFramebuffer===void 0?gt.setupRenderTarget(S):Lt.__hasExternalTextures&&gt.rebindTextures(S,dt.get(S.texture).__webglTexture,dt.get(S.depthTexture).__webglTexture);const zt=S.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(bt=!0);const Dt=dt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(k=Dt[I],_t=!0):rt.isWebGL2&&S.samples>0&&gt.useMultisampledRTT(S)===!1?k=dt.get(S).__webglMultisampledFramebuffer:k=Dt,b.copy(S.viewport),G.copy(S.scissor),K=S.scissorTest}else b.copy(Z).multiplyScalar(X).floor(),G.copy(ft).multiplyScalar(X).floor(),K=z;if(J.bindFramebuffer(R.FRAMEBUFFER,k)&&rt.drawBuffers&&D&&J.drawBuffers(S,k),J.viewport(b),J.scissor(G),J.setScissorTest(K),_t){const Lt=dt.get(S.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,Lt.__webglTexture,V)}else if(bt){const Lt=dt.get(S.texture),zt=I||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Lt.__webglTexture,V||0,zt)}U=-1},this.readRenderTargetPixels=function(S,I,V,D,k,_t,bt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=dt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(Rt=Rt[bt]),Rt){J.bindFramebuffer(R.FRAMEBUFFER,Rt);try{const Lt=S.texture,zt=Lt.format,Dt=Lt.type;if(zt!==ze&&vt.convert(zt)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const It=Dt===Yi&&(q.has("EXT_color_buffer_half_float")||rt.isWebGL2&&q.has("EXT_color_buffer_float"));if(Dt!==_n&&vt.convert(Dt)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Dt===pn&&(rt.isWebGL2||q.has("OES_texture_float")||q.has("WEBGL_color_buffer_float")))&&!It){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-D&&V>=0&&V<=S.height-k&&R.readPixels(I,V,D,k,vt.convert(zt),vt.convert(Dt),_t)}finally{const Lt=C!==null?dt.get(C).__webglFramebuffer:null;J.bindFramebuffer(R.FRAMEBUFFER,Lt)}}},this.copyFramebufferToTexture=function(S,I,V=0){const D=Math.pow(2,-V),k=Math.floor(I.image.width*D),_t=Math.floor(I.image.height*D);gt.setTexture2D(I,0),R.copyTexSubImage2D(R.TEXTURE_2D,V,0,0,S.x,S.y,k,_t),J.unbindTexture()},this.copyTextureToTexture=function(S,I,V,D=0){const k=I.image.width,_t=I.image.height,bt=vt.convert(V.format),Rt=vt.convert(V.type);gt.setTexture2D(V,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,V.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,V.unpackAlignment),I.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,D,S.x,S.y,k,_t,bt,Rt,I.image.data):I.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,D,S.x,S.y,I.mipmaps[0].width,I.mipmaps[0].height,bt,I.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,D,S.x,S.y,bt,Rt,I.image),D===0&&V.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(S,I,V,D,k=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _t=S.max.x-S.min.x+1,bt=S.max.y-S.min.y+1,Rt=S.max.z-S.min.z+1,Lt=vt.convert(D.format),zt=vt.convert(D.type);let Dt;if(D.isData3DTexture)gt.setTexture3D(D,0),Dt=R.TEXTURE_3D;else if(D.isDataArrayTexture)gt.setTexture2DArray(D,0),Dt=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,D.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,D.unpackAlignment);const It=R.getParameter(R.UNPACK_ROW_LENGTH),Yt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),te=R.getParameter(R.UNPACK_SKIP_PIXELS),Pe=R.getParameter(R.UNPACK_SKIP_ROWS),je=R.getParameter(R.UNPACK_SKIP_IMAGES),ie=V.isCompressedTexture?V.mipmaps[0]:V.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,ie.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ie.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,S.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,S.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,S.min.z),V.isDataTexture||V.isData3DTexture?R.texSubImage3D(Dt,k,I.x,I.y,I.z,_t,bt,Rt,Lt,zt,ie.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(Dt,k,I.x,I.y,I.z,_t,bt,Rt,Lt,ie.data)):R.texSubImage3D(Dt,k,I.x,I.y,I.z,_t,bt,Rt,Lt,zt,ie),R.pixelStorei(R.UNPACK_ROW_LENGTH,It),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Yt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,te),R.pixelStorei(R.UNPACK_SKIP_ROWS,Pe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,je),k===0&&D.generateMipmaps&&R.generateMipmap(Dt),J.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?gt.setTextureCube(S,0):S.isData3DTexture?gt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?gt.setTexture2DArray(S,0):gt.setTexture2D(S,0),J.unbindTexture()},this.resetState=function(){A=0,w=0,C=null,J.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Nt?Gn:Eu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Gn?Nt:qe}}class Rx extends wx{}Rx.prototype.isWebGL1Renderer=!0;class B0 extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Cx{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=va,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Xe()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xe()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xe()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ve=new L;class Vu{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}setX(t,e){return this.normalized&&(e=Xt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Xt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Xt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Xt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=an(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=an(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=an(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=an(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xt(e,this.array),i=Xt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xt(e,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xt(e,this.array),i=Xt(i,this.array),r=Xt(r,this.array),s=Xt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Vu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class z0 extends Le{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}class Lx extends Xn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ol=new L,Fl=new L,Bl=new ee,Xs=new $a,Pr=new ss;class Px extends de{constructor(t=new Se,e=new Lx){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Ol.fromBufferAttribute(e,r-1),Fl.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Ol.distanceTo(Fl);t.setAttribute("lineDistance",new $t(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pr.copy(i.boundingSphere),Pr.applyMatrix4(r),Pr.radius+=s,t.ray.intersectsSphere(Pr)===!1)return;Bl.copy(r).invert(),Xs.copy(t.ray).applyMatrix4(Bl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new L,u=new L,h=new L,f=new L,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const d=Math.max(0,a.start),E=Math.min(_.count,a.start+a.count);for(let g=d,y=E-1;g<y;g+=m){const A=_.getX(g),w=_.getX(g+1);if(c.fromBufferAttribute(p,A),u.fromBufferAttribute(p,w),Xs.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const U=t.ray.origin.distanceTo(f);U<t.near||U>t.far||e.push({distance:U,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),E=Math.min(p.count,a.start+a.count);for(let g=d,y=E-1;g<y;g+=m){if(c.fromBufferAttribute(p,g),u.fromBufferAttribute(p,g+1),Xs.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(f);w<t.near||w>t.far||e.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const zl=new L,Gl=new L;class G0 extends Px{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)zl.fromBufferAttribute(e,r),Gl.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+zl.distanceTo(Gl);t.setAttribute("lineDistance",new $t(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ye{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let r=0;const s=i.length;let a;e?a=e:a=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const u=i[r],f=i[r+1]-u,m=(a-u)/f;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=e||(a.isVector2?new ot:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new L,r=[],s=[],a=[],o=new L,l=new ee;for(let m=0;m<=t;m++){const _=m/t;r[m]=this.getTangentAt(_,new L)}s[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(ae(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,_))}a[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(ae(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(m=-m);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],m*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class to extends Ye{constructor(t=0,e=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const i=e||new ot,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*u-m*h+this.aX,c=f*h+m*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ux extends to{constructor(t,e,i,r,s,a){super(t,e,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function eo(){let n=0,t=0,e=0,i=0;function r(s,a,o,l){n=s,t=o,e=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,m=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,m*=u,r(a,o,f,m)},calc:function(s){const a=s*s,o=a*s;return n+t*s+e*a+i*o}}}const Ur=new L,qs=new eo,Ys=new eo,js=new eo;class Dx extends Ye{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new L){const i=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(Ur.subVectors(r[0],r[1]).add(r[0]),c=Ur);const h=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Ur.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ur),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),m),v=Math.pow(h.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(u),m);v<1e-4&&(v=1),_<1e-4&&(_=v),p<1e-4&&(p=v),qs.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,v,p),Ys.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,v,p),js.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,v,p)}else this.curveType==="catmullrom"&&(qs.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ys.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),js.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(qs.calc(l),Ys.calc(l),js.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new L().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Hl(n,t,e,i,r){const s=(i-t)*.5,a=(r-e)*.5,o=n*n,l=n*o;return(2*e-2*i+s+a)*l+(-3*e+3*i-2*s-a)*o+s*n+e}function Ix(n,t){const e=1-n;return e*e*t}function Nx(n,t){return 2*(1-n)*n*t}function Ox(n,t){return n*n*t}function Vi(n,t,e,i){return Ix(n,t)+Nx(n,e)+Ox(n,i)}function Fx(n,t){const e=1-n;return e*e*e*t}function Bx(n,t){const e=1-n;return 3*e*e*n*t}function zx(n,t){return 3*(1-n)*n*n*t}function Gx(n,t){return n*n*n*t}function ki(n,t,e,i,r){return Fx(n,t)+Bx(n,e)+zx(n,i)+Gx(n,r)}class ku extends Ye{constructor(t=new ot,e=new ot,i=new ot,r=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new ot){const i=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ki(t,r.x,s.x,a.x,o.x),ki(t,r.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Hx extends Ye{constructor(t=new L,e=new L,i=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new L){const i=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ki(t,r.x,s.x,a.x,o.x),ki(t,r.y,s.y,a.y,o.y),ki(t,r.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class no extends Ye{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vx extends Ye{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wu extends Ye{constructor(t=new ot,e=new ot,i=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ot){const i=e,r=this.v0,s=this.v1,a=this.v2;return i.set(Vi(t,r.x,s.x,a.x),Vi(t,r.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xu extends Ye{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){const i=e,r=this.v0,s=this.v1,a=this.v2;return i.set(Vi(t,r.x,s.x,a.x),Vi(t,r.y,s.y,a.y),Vi(t,r.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qu extends Ye{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const i=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return i.set(Hl(o,l.x,c.x,u.x,h.x),Hl(o,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new ot().fromArray(r))}return this}}var io=Object.freeze({__proto__:null,ArcCurve:Ux,CatmullRomCurve3:Dx,CubicBezierCurve:ku,CubicBezierCurve3:Hx,EllipseCurve:to,LineCurve:no,LineCurve3:Vx,QuadraticBezierCurve:Wu,QuadraticBezierCurve3:Xu,SplineCurve:qu});class kx extends Ye{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new no(e,t))}getPoint(t,e){const i=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(new io[r.type]().fromJSON(r))}return this}}class Sa extends kx{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new no(this.currentPoint.clone(),new ot(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){const s=new Wu(this.currentPoint.clone(),new ot(t,e),new ot(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,s,a){const o=new ku(this.currentPoint.clone(),new ot(t,e),new ot(i,r),new ot(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new qu(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,r,s,a),this}absarc(t,e,i,r,s,a){return this.absellipse(t,e,i,i,r,s,a),this}ellipse(t,e,i,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,r,s,a,o,l),this}absellipse(t,e,i,r,s,a,o,l){const c=new to(t,e,i,r,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Yu extends Se{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],l=[],c=new L,u=new ot;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const m=i+h/e*r;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(o,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yu(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ju extends Se{constructor(t=1,e=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],m=[];let _=0;const v=[],p=i/2;let d=0;E(),a===!1&&(t>0&&g(!0),e>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(m,2));function E(){const y=new L,A=new L;let w=0;const C=(e-t)/i;for(let U=0;U<=s;U++){const x=[],b=U/s,G=b*(e-t)+t;for(let K=0;K<=r;K++){const N=K/r,O=N*l+o,F=Math.sin(O),j=Math.cos(O);A.x=G*F,A.y=-b*i+p,A.z=G*j,h.push(A.x,A.y,A.z),y.set(F,C,j).normalize(),f.push(y.x,y.y,y.z),m.push(N,1-b),x.push(_++)}v.push(x)}for(let U=0;U<r;U++)for(let x=0;x<s;x++){const b=v[x][U],G=v[x+1][U],K=v[x+1][U+1],N=v[x][U+1];u.push(b,G,N),u.push(G,K,N),w+=6}c.addGroup(d,w,0),d+=w}function g(y){const A=_,w=new ot,C=new L;let U=0;const x=y===!0?t:e,b=y===!0?1:-1;for(let K=1;K<=r;K++)h.push(0,p*b,0),f.push(0,b,0),m.push(.5,.5),_++;const G=_;for(let K=0;K<=r;K++){const O=K/r*l+o,F=Math.cos(O),j=Math.sin(O);C.x=x*j,C.y=p*b,C.z=x*F,h.push(C.x,C.y,C.z),f.push(0,b,0),w.x=F*.5+.5,w.y=j*.5*b+.5,m.push(w.x,w.y),_++}for(let K=0;K<r;K++){const N=A+K,O=G+K;y===!0?u.push(O,O+1,N):u.push(O+1,O,N),U+=3}c.addGroup(d,U,y===!0?1:2),d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ju(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Br extends Sa{constructor(t){super(t),this.uuid=Xe(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(new Sa().fromJSON(r))}return this}}const Wx={triangulate:function(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let s=$u(n,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,f,m;if(i&&(s=$x(n,t,s,e)),n.length>80*e){o=c=n[0],l=u=n[1];for(let _=e;_<r;_+=e)h=n[_],f=n[_+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);m=Math.max(c-o,u-l),m=m!==0?32767/m:0}return Ji(s,a,e,o,l,m,0),a}};function $u(n,t,e,i,r){let s,a;if(r===a0(n,t,e,i)>0)for(s=t;s<e;s+=i)a=Vl(s,n[s],n[s+1],a);else for(s=e-i;s>=t;s-=i)a=Vl(s,n[s],n[s+1],a);return a&&ls(a,a.next)&&(Zi(a),a=a.next),a}function Wn(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ls(e,e.next)||Jt(e.prev,e,e.next)===0)){if(Zi(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ji(n,t,e,i,r,s,a){if(!n)return;!a&&s&&t0(n,i,r,s);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?qx(n,i,r,s):Xx(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Zi(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Yx(Wn(n),t,e),Ji(n,t,e,i,r,s,2)):a===2&&jx(n,t,e,i,r,s):Ji(Wn(n),t,e,i,r,s,1);break}}}function Xx(n){const t=n.prev,e=n,i=n.next;if(Jt(t,e,i)>=0)return!1;const r=t.x,s=e.x,a=i.x,o=t.y,l=e.y,c=i.y,u=r<s?r<a?r:a:s<a?s:a,h=o<l?o<c?o:c:l<c?l:c,f=r>s?r>a?r:a:s>a?s:a,m=o>l?o>c?o:c:l>c?l:c;let _=i.next;for(;_!==t;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=m&&ui(r,o,s,l,a,c,_.x,_.y)&&Jt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function qx(n,t,e,i){const r=n.prev,s=n,a=n.next;if(Jt(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,h=s.y,f=a.y,m=o<l?o<c?o:c:l<c?l:c,_=u<h?u<f?u:f:h<f?h:f,v=o>l?o>c?o:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,d=Ea(m,_,t,e,i),E=Ea(v,p,t,e,i);let g=n.prevZ,y=n.nextZ;for(;g&&g.z>=d&&y&&y.z<=E;){if(g.x>=m&&g.x<=v&&g.y>=_&&g.y<=p&&g!==r&&g!==a&&ui(o,u,l,h,c,f,g.x,g.y)&&Jt(g.prev,g,g.next)>=0||(g=g.prevZ,y.x>=m&&y.x<=v&&y.y>=_&&y.y<=p&&y!==r&&y!==a&&ui(o,u,l,h,c,f,y.x,y.y)&&Jt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;g&&g.z>=d;){if(g.x>=m&&g.x<=v&&g.y>=_&&g.y<=p&&g!==r&&g!==a&&ui(o,u,l,h,c,f,g.x,g.y)&&Jt(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;y&&y.z<=E;){if(y.x>=m&&y.x<=v&&y.y>=_&&y.y<=p&&y!==r&&y!==a&&ui(o,u,l,h,c,f,y.x,y.y)&&Jt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Yx(n,t,e){let i=n;do{const r=i.prev,s=i.next.next;!ls(r,s)&&Ju(r,i,i.next,s)&&Ki(r,s)&&Ki(s,r)&&(t.push(r.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),Zi(i),Zi(i.next),i=n=s),i=i.next}while(i!==n);return Wn(i)}function jx(n,t,e,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&i0(a,o)){let l=Ku(a,o);a=Wn(a,a.next),l=Wn(l,l.next),Ji(a,t,e,i,r,s,0),Ji(l,t,e,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function $x(n,t,e,i){const r=[];let s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*i,l=s<a-1?t[s+1]*i:n.length,c=$u(n,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(n0(c));for(r.sort(Jx),s=0;s<r.length;s++)e=Kx(r[s],e);return e}function Jx(n,t){return n.x-t.x}function Kx(n,t){const e=Zx(n,t);if(!e)return t;const i=Ku(e,n);return Wn(i,i.next),Wn(e,e.next)}function Zx(n,t){let e=t,i=-1/0,r;const s=n.x,a=n.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>i&&(i=f,r=e.x<e.next.x?e:e.next,f===s))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,l=r.x,c=r.y;let u=1/0,h;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&ui(a<c?s:i,a,l,c,a<c?i:s,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(s-e.x),Ki(e,n)&&(h<u||h===u&&(e.x>r.x||e.x===r.x&&Qx(r,e)))&&(r=e,u=h)),e=e.next;while(e!==o);return r}function Qx(n,t){return Jt(n.prev,n,t.prev)<0&&Jt(t.next,n,n.next)<0}function t0(n,t,e,i){let r=n;do r.z===0&&(r.z=Ea(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,e0(r)}function e0(n){let t,e,i,r,s,a,o,l,c=1;do{for(e=n,n=null,s=null,a=0;e;){for(a++,i=e,o=0,t=0;t<c&&(o++,i=i.nextZ,!!i);t++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||e.z<=i.z)?(r=e,e=e.nextZ,o--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;e=i}s.nextZ=null,c*=2}while(a>1);return n}function Ea(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function n0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ui(n,t,e,i,r,s,a,o){return(r-a)*(t-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(i-o)}function i0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!r0(n,t)&&(Ki(n,t)&&Ki(t,n)&&s0(n,t)&&(Jt(n.prev,n,t.prev)||Jt(n,t.prev,t))||ls(n,t)&&Jt(n.prev,n,n.next)>0&&Jt(t.prev,t,t.next)>0)}function Jt(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ls(n,t){return n.x===t.x&&n.y===t.y}function Ju(n,t,e,i){const r=Ir(Jt(n,t,e)),s=Ir(Jt(n,t,i)),a=Ir(Jt(e,i,n)),o=Ir(Jt(e,i,t));return!!(r!==s&&a!==o||r===0&&Dr(n,e,t)||s===0&&Dr(n,i,t)||a===0&&Dr(e,n,i)||o===0&&Dr(e,t,i))}function Dr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ir(n){return n>0?1:n<0?-1:0}function r0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Ju(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ki(n,t){return Jt(n.prev,n,n.next)<0?Jt(n,t,n.next)>=0&&Jt(n,n.prev,t)>=0:Jt(n,t,n.prev)<0||Jt(n,n.next,t)<0}function s0(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Ku(n,t){const e=new Ta(n.i,n.x,n.y),i=new Ta(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Vl(n,t,e,i){const r=new Ta(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Zi(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ta(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function a0(n,t,e,i){let r=0;for(let s=t,a=e-i;s<e;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class pi{static area(t){const e=t.length;let i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return pi.area(t)<0}static triangulateShape(t,e){const i=[],r=[],s=[];kl(t),Wl(i,t);let a=t.length;e.forEach(kl);for(let l=0;l<e.length;l++)r.push(a),a+=e[l].length,Wl(i,e[l]);const o=Wx.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function kl(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Wl(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Zu extends Se{constructor(t=new Br([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,r=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new $t(r,3)),this.setAttribute("uv",new $t(s,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:m-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:o0;let g,y=!1,A,w,C,U;d&&(g=d.getSpacedPoints(u),y=!0,f=!1,A=d.computeFrenetFrames(u,!1),w=new L,C=new L,U=new L),f||(p=0,m=0,_=0,v=0);const x=o.extractPoints(c);let b=x.shape;const G=x.holes;if(!pi.isClockWise(b)){b=b.reverse();for(let R=0,it=G.length;R<it;R++){const q=G[R];pi.isClockWise(q)&&(G[R]=q.reverse())}}const N=pi.triangulateShape(b,G),O=b;for(let R=0,it=G.length;R<it;R++){const q=G[R];b=b.concat(q)}function F(R,it,q){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(it,q)}const j=b.length,X=N.length;function Y(R,it,q){let rt,J,yt;const dt=R.x-it.x,gt=R.y-it.y,Pt=q.x-R.x,Gt=q.y-R.y,Kt=dt*dt+gt*gt,T=dt*Gt-gt*Pt;if(Math.abs(T)>Number.EPSILON){const M=Math.sqrt(Kt),H=Math.sqrt(Pt*Pt+Gt*Gt),et=it.x-gt/M,nt=it.y+dt/M,lt=q.x-Gt/H,St=q.y+Pt/H,ct=((lt-et)*Gt-(St-nt)*Pt)/(dt*Gt-gt*Pt);rt=et+dt*ct-R.x,J=nt+gt*ct-R.y;const W=rt*rt+J*J;if(W<=2)return new ot(rt,J);yt=Math.sqrt(W/2)}else{let M=!1;dt>Number.EPSILON?Pt>Number.EPSILON&&(M=!0):dt<-Number.EPSILON?Pt<-Number.EPSILON&&(M=!0):Math.sign(gt)===Math.sign(Gt)&&(M=!0),M?(rt=-gt,J=dt,yt=Math.sqrt(Kt)):(rt=dt,J=gt,yt=Math.sqrt(Kt/2))}return new ot(rt/yt,J/yt)}const $=[];for(let R=0,it=O.length,q=it-1,rt=R+1;R<it;R++,q++,rt++)q===it&&(q=0),rt===it&&(rt=0),$[R]=Y(O[R],O[q],O[rt]);const Z=[];let ft,z=$.concat();for(let R=0,it=G.length;R<it;R++){const q=G[R];ft=[];for(let rt=0,J=q.length,yt=J-1,dt=rt+1;rt<J;rt++,yt++,dt++)yt===J&&(yt=0),dt===J&&(dt=0),ft[rt]=Y(q[rt],q[yt],q[dt]);Z.push(ft),z=z.concat(ft)}for(let R=0;R<p;R++){const it=R/p,q=m*Math.cos(it*Math.PI/2),rt=_*Math.sin(it*Math.PI/2)+v;for(let J=0,yt=O.length;J<yt;J++){const dt=F(O[J],$[J],rt);Mt(dt.x,dt.y,-q)}for(let J=0,yt=G.length;J<yt;J++){const dt=G[J];ft=Z[J];for(let gt=0,Pt=dt.length;gt<Pt;gt++){const Gt=F(dt[gt],ft[gt],rt);Mt(Gt.x,Gt.y,-q)}}}const Q=_+v;for(let R=0;R<j;R++){const it=f?F(b[R],z[R],Q):b[R];y?(C.copy(A.normals[0]).multiplyScalar(it.x),w.copy(A.binormals[0]).multiplyScalar(it.y),U.copy(g[0]).add(C).add(w),Mt(U.x,U.y,U.z)):Mt(it.x,it.y,0)}for(let R=1;R<=u;R++)for(let it=0;it<j;it++){const q=f?F(b[it],z[it],Q):b[it];y?(C.copy(A.normals[R]).multiplyScalar(q.x),w.copy(A.binormals[R]).multiplyScalar(q.y),U.copy(g[R]).add(C).add(w),Mt(U.x,U.y,U.z)):Mt(q.x,q.y,h/u*R)}for(let R=p-1;R>=0;R--){const it=R/p,q=m*Math.cos(it*Math.PI/2),rt=_*Math.sin(it*Math.PI/2)+v;for(let J=0,yt=O.length;J<yt;J++){const dt=F(O[J],$[J],rt);Mt(dt.x,dt.y,h+q)}for(let J=0,yt=G.length;J<yt;J++){const dt=G[J];ft=Z[J];for(let gt=0,Pt=dt.length;gt<Pt;gt++){const Gt=F(dt[gt],ft[gt],rt);y?Mt(Gt.x,Gt.y+g[u-1].y,g[u-1].x+q):Mt(Gt.x,Gt.y,h+q)}}}tt(),pt();function tt(){const R=r.length/3;if(f){let it=0,q=j*it;for(let rt=0;rt<X;rt++){const J=N[rt];Ut(J[2]+q,J[1]+q,J[0]+q)}it=u+p*2,q=j*it;for(let rt=0;rt<X;rt++){const J=N[rt];Ut(J[0]+q,J[1]+q,J[2]+q)}}else{for(let it=0;it<X;it++){const q=N[it];Ut(q[2],q[1],q[0])}for(let it=0;it<X;it++){const q=N[it];Ut(q[0]+j*u,q[1]+j*u,q[2]+j*u)}}i.addGroup(R,r.length/3-R,0)}function pt(){const R=r.length/3;let it=0;mt(O,it),it+=O.length;for(let q=0,rt=G.length;q<rt;q++){const J=G[q];mt(J,it),it+=J.length}i.addGroup(R,r.length/3-R,1)}function mt(R,it){let q=R.length;for(;--q>=0;){const rt=q;let J=q-1;J<0&&(J=R.length-1);for(let yt=0,dt=u+p*2;yt<dt;yt++){const gt=j*yt,Pt=j*(yt+1),Gt=it+rt+gt,Kt=it+J+gt,T=it+J+Pt,M=it+rt+Pt;wt(Gt,Kt,T,M)}}}function Mt(R,it,q){l.push(R),l.push(it),l.push(q)}function Ut(R,it,q){Wt(R),Wt(it),Wt(q);const rt=r.length/3,J=E.generateTopUV(i,r,rt-3,rt-2,rt-1);Ct(J[0]),Ct(J[1]),Ct(J[2])}function wt(R,it,q,rt){Wt(R),Wt(it),Wt(rt),Wt(it),Wt(q),Wt(rt);const J=r.length/3,yt=E.generateSideWallUV(i,r,J-6,J-3,J-2,J-1);Ct(yt[0]),Ct(yt[1]),Ct(yt[3]),Ct(yt[1]),Ct(yt[2]),Ct(yt[3])}function Wt(R){r.push(l[R*3+0]),r.push(l[R*3+1]),r.push(l[R*3+2])}function Ct(R){s.push(R.x),s.push(R.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return l0(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];i.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new io[r.type]().fromJSON(r)),new Zu(i,t.options)}}const o0={generateTopUV:function(n,t,e,i,r){const s=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[r*3],u=t[r*3+1];return[new ot(s,a),new ot(o,l),new ot(c,u)]},generateSideWallUV:function(n,t,e,i,r,s){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],h=t[i*3+2],f=t[r*3],m=t[r*3+1],_=t[r*3+2],v=t[s*3],p=t[s*3+1],d=t[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ot(a,1-l),new ot(c,1-h),new ot(f,1-_),new ot(v,1-d)]:[new ot(o,1-l),new ot(u,1-h),new ot(m,1-_),new ot(p,1-d)]}};function l0(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Qu extends Se{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new L,f=new L,m=[],_=[],v=[],p=[];for(let d=0;d<=i;d++){const E=[],g=d/i;let y=0;d===0&&a===0?y=.5/e:d===i&&l===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){const w=A/e;h.x=-t*Math.cos(r+w*s)*Math.sin(a+g*o),h.y=t*Math.cos(a+g*o),h.z=t*Math.sin(r+w*s)*Math.sin(a+g*o),_.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),p.push(w+y,1-g),E.push(c++)}u.push(E)}for(let d=0;d<i;d++)for(let E=0;E<e;E++){const g=u[d][E+1],y=u[d][E],A=u[d+1][E],w=u[d+1][E+1];(d!==0||a>0)&&m.push(g,y,w),(d!==i-1||l<Math.PI)&&m.push(y,A,w)}this.setIndex(m),this.setAttribute("position",new $t(_,3)),this.setAttribute("normal",new $t(v,3)),this.setAttribute("uv",new $t(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class th extends Se{constructor(t=new Xu(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:r,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new L,l=new L,c=new ot;let u=new L;const h=[],f=[],m=[],_=[];v(),this.setIndex(_),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(m,2));function v(){for(let g=0;g<e;g++)p(g);p(s===!1?e:0),E(),d()}function p(g){u=t.getPointAt(g/e,u);const y=a.normals[g],A=a.binormals[g];for(let w=0;w<=r;w++){const C=w/r*Math.PI*2,U=Math.sin(C),x=-Math.cos(C);l.x=x*y.x+U*A.x,l.y=x*y.y+U*A.y,l.z=x*y.z+U*A.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,h.push(o.x,o.y,o.z)}}function d(){for(let g=1;g<=e;g++)for(let y=1;y<=r;y++){const A=(r+1)*(g-1)+(y-1),w=(r+1)*g+(y-1),C=(r+1)*g+y,U=(r+1)*(g-1)+y;_.push(A,w,U),_.push(w,C,U)}}function E(){for(let g=0;g<=e;g++)for(let y=0;y<=r;y++)c.x=g/e,c.y=y/r,m.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new th(new io[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class H0 extends Se{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,r=new L,s=new L;if(t.index!==null){const a=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],f=h.start,m=h.count;for(let _=f,v=f+m;_<v;_+=3)for(let p=0;p<3;p++){const d=o.getX(_+p),E=o.getX(_+(p+1)%3);r.fromBufferAttribute(a,d),s.fromBufferAttribute(a,E),Xl(r,s,i)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}}else{const a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,h=3*o+(c+1)%3;r.fromBufferAttribute(a,u),s.fromBufferAttribute(a,h),Xl(r,s,i)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new $t(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Xl(n,t,e){const i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(r)===!0?!1:(e.add(i),e.add(r),!0)}class V0 extends Xn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Vt(16777215),this.specular=new Vt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ya,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class k0 extends Xn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ya,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const ql={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class c0{constructor(t,e,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const u0=new c0;class eh{constructor(t){this.manager=t!==void 0?t:u0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class h0 extends eh{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=ql.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=$i("img");function l(){u(),ql.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),r&&r(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class f0 extends eh{constructor(t){super(t)}load(t,e,i,r){const s=new Te,a=new h0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class nh extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const $s=new ee,Yl=new L,jl=new L;class d0{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ka,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Yl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yl),jl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jl),e.updateMatrixWorld(),$s.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($s),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($s)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class p0 extends d0{constructor(){super(new Fu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class W0 extends nh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new p0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class X0 extends nh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class q0 extends Se{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Y0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$l(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=$l();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function $l(){return(typeof performance>"u"?Date:performance).now()}class j0 extends Cx{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class $0{constructor(t,e,i=0,r=1/0){this.ray=new $a(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Ja,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return ba(t,this,i,e),i.sort(Jl),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)ba(t[r],this,i,e);return i.sort(Jl),i}}function Jl(n,t){return n.distance-t.distance}function ba(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)ba(r[s],t,e,!0)}}class J0{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Kl=new L,Nr=new L;class K0{constructor(t=new L,e=new L){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Kl.subVectors(t,this.start),Nr.subVectors(this.end,this.start);const i=Nr.dot(Nr);let s=Nr.dot(Kl)/i;return e&&(s=ae(s,0,1)),s}closestPointToPoint(t,e,i){const r=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Z0{constructor(){this.type="ShapePath",this.color=new Vt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Sa,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,r){return this.currentPath.quadraticCurveTo(t,e,i,r),this}bezierCurveTo(t,e,i,r,s,a){return this.currentPath.bezierCurveTo(t,e,i,r,s,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(d){const E=[];for(let g=0,y=d.length;g<y;g++){const A=d[g],w=new Br;w.curves=A.curves,E.push(w)}return E}function i(d,E){const g=E.length;let y=!1;for(let A=g-1,w=0;w<g;A=w++){let C=E[A],U=E[w],x=U.x-C.x,b=U.y-C.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(C=E[w],x=-x,U=E[A],b=-b),d.y<C.y||d.y>U.y)continue;if(d.y===C.y){if(d.x===C.x)return!0}else{const G=b*(d.x-C.x)-x*(d.y-C.y);if(G===0)return!0;if(G<0)continue;y=!y}}else{if(d.y!==C.y)continue;if(U.x<=d.x&&d.x<=C.x||C.x<=d.x&&d.x<=U.x)return!0}}return y}const r=pi.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l;const c=[];if(s.length===1)return o=s[0],l=new Br,l.curves=o.curves,c.push(l),c;let u=!r(s[0].getPoints());u=t?!u:u;const h=[],f=[];let m=[],_=0,v;f[_]=void 0,m[_]=[];for(let d=0,E=s.length;d<E;d++)o=s[d],v=o.getPoints(),a=r(v),a=t?!a:a,a?(!u&&f[_]&&_++,f[_]={s:new Br,p:v},f[_].s.curves=o.curves,u&&_++,m[_]=[]):m[_].push({h:o,p:v[0]});if(!f[0])return e(s);if(f.length>1){let d=!1,E=0;for(let g=0,y=f.length;g<y;g++)h[g]=[];for(let g=0,y=f.length;g<y;g++){const A=m[g];for(let w=0;w<A.length;w++){const C=A[w];let U=!0;for(let x=0;x<f.length;x++)i(C.p,f[x].p)&&(g!==x&&E++,U?(U=!1,h[x].push(C)):d=!0);U&&h[g].push(C)}}E>0&&d===!1&&(m=h)}let p;for(let d=0,E=f.length;d<E;d++){l=f[d].s,c.push(l),p=m[d];for(let g=0,y=p.length;g<y;g++)l.holes.push(p[g].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xa);function m0(n){return document.querySelector(n)}const Zl="#fffcc4",g0="#FFFFFF",_0=.01,v0="#999776",x0="rgba(0, 100, 0, 0.15)",Di="#e56767",M0=.45,y0=2e3,S0=.015,E0=5,T0=["SYR","AFG","SSD","MMR","COD","SDN","SOM","CAF","ERI","NGA","BDI","VNM","UKR"],b0={Syria:{name:"Syria",population:17637075,year:2021,refugees:3110908,asylumCountriesISO3:["SYR","LBN","JOR","DEU"],asylumCountries:[{name:"Lebanon",asylumSeekers:840929,startLat:35.2721,startLng:38.648549,endLat:33.940181,endLng:35.932404,color:Di},{name:"Jordan",asylumSeekers:672952,startLat:35.2721,startLng:38.648549,endLat:31.665143,endLng:36.537722,color:Di},{name:"Germany",asylumSeekers:621740,startLat:35.2721,startLng:38.648549,endLat:50.890472,endLng:10.320835,color:Di},{name:"Iraq",asylumSeekers:254561,startLat:35.2721,startLng:38.648549,endLat:33.085227,endLng:43.88501,color:Di},{name:"Egypt",asylumSeekers:136727,startLat:35.2721,startLng:38.648549,endLat:26.836687,endLng:29.226787,color:Di}]}};class A0{constructor(t,e,i){$e(this,"world");$e(this,"Three");$e(this,"objConfigOptions");$e(this,"objCountriesJSON");$e(this,"arrDefaultCountriesISO3");this.world=null,this.Three=null,this.objConfigOptions=i,this.objCountriesJSON=null,this.arrDefaultCountriesISO3=e,(async()=>{try{await this.render(t)}catch(r){console.error(r)}})()}preconfigure(){this.preconfigurePolygons(),this.preconfigureArcs(),this.preconfigureRings(),this.customize(),this.world.pointOfView({altitude:4},5500)}preconfigurePolygons(){this.world.polygonsData(this.objCountriesJSON.features.filter(t=>this.arrDefaultCountriesISO3.includes(t.properties.iso_a3))).polygonAltitude(_0).polygonCapColor(t=>Zl).polygonStrokeColor(()=>v0).polygonSideColor(()=>x0).polygonsTransitionDuration(0).onPolygonClick((t,e,{lng:i,lat:r})=>{var s;(s=this.world)==null||s.pointOfView({lat:r,lng:i,altitude:1},2e3),m0("h1").innerHTML=t.properties.admin,this.world.arcsData(b0.Syria.asylumCountries)})}preconfigureArcs(){this.world.lineHoverPrecision(0).arcColor("color").arcStroke(M0).arcLabel(()=>"").arcAltitude(t=>t.name==="Jordan"||t.name==="Iraq"||t.name==="Lebanon"||t.name==="Egypt"?.025:.075).arcsTransitionDuration(y0)}preconfigureRings(){const t=e=>`rgba(255,115,115,${Math.sqrt(1-e)})`;this.world.ringColor(()=>t).ringMaxRadius("maxRadius").ringPropagationSpeed("propagationSpeed").ringAltitude(S0).ringRepeatPeriod("repeatPeriod")}async render(t){try{this.onContentLoaded(t)}catch(e){console.error(e)}}assign(){this.Three=this.world.renderer()}customize(){const t=this.world.globeMaterial();t.bumpScale=4,new f0().load("./earth-water.low.png",e=>{t.specularMap=e,t.specular=new Vt("grey"),t.shininess=10}),setTimeout(()=>{const e=this.world.scene().children.find(i=>i.type==="DirectionalLight");e&&e.position.set(2,1,1)})}onContentLoaded(t){window.addEventListener("DOMContentLoaded",async()=>{await dd(()=>import("./globe.gl-72f9912a.js"),["assets/globe.gl-72f9912a.js","assets/modulepreload-polyfill-3cfb730f.js"]).then(async e=>{this.world=e.default(this.objConfigOptions)(document.querySelector(t)),this.world.globeImageUrl("./8k_earth_daymap.jpg").bumpImageUrl("./topology.min.png").backgroundImageUrl("/night-sky.max.darker.png"),this.onReady()}),this.objCountriesJSON=await fetch("./data/custom.geo.medium.json").then(e=>e.json())})}onReady(){this.world.onGlobeReady(async()=>{this.preconfigure(),this.assign(),this.onResize(),this.onZoom()})}onResize(){window.addEventListener("resize",()=>{this.world&&(this.world.width(window.innerWidth),this.world.height(window.innerHeight))})}onZoom(){this.world.onZoom(t=>{if(t.altitude>E0){this.world.polygonCapColor(e=>"transparent").polygonStrokeColor(()=>!1);return}this.world.polygonCapColor(e=>e.properties.iso_a3==="LBN"||e.properties.iso_a3==="JOR"||e.properties.iso_a3==="DEU"||e.properties.iso_a3==="IRQ"||e.properties.iso_a3==="EGY"?g0:Zl).polygonStrokeColor(()=>"#999776")})}}class w0{constructor(){$e(this,"body");$e(this,"appHTML");$e(this,"globe");this.body=null,this.appHTML=null,this.globe=new A0("#globe",T0,{animateIn:!1,waitForGlobeReady:!0,rendererConfig:{antialias:!0,alpha:!0}})}init(){window.addEventListener("DOMContentLoaded",()=>{this.body=document.querySelector("body"),this.appHTML=document.querySelector("#app"),this.log()})}log(){console.log(this.globe)}}const R0=new w0;function C0(){window.Alpine=xo,xo.start(),R0.init()}C0();export{J0 as $,Lu as A,Se as B,Yu as C,Hx as D,Zu as E,$t as F,Lr as G,Ye as H,z0 as I,Px as J,th as K,K0 as L,ee as M,fi as N,de as O,rn as P,Xu as Q,Ee as R,ss as S,I0 as T,at as U,L as V,H0 as W,Ti as X,U0 as Y,rr as Z,D0 as _,ot as a,Fu as a0,Vn as a1,Yi as a2,Y0 as a3,wx as a4,B0 as a5,Fe as a6,$0 as a7,X0 as a8,W0 as a9,Le as b,Cx as c,Vu as d,O0 as e,N0 as f,sr as g,q0 as h,j0 as i,We as j,kn as k,Xp as l,F0 as m,mn as n,fe as o,Z0 as p,k0 as q,as as r,Vt as s,Lx as t,G0 as u,V0 as v,Qu as w,Nt as x,f0 as y,ju as z};
