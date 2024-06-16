import{u as P,d as A,c as y,h as N,r as C,o as B,a as j,b as I,e as L,f as E,g as S,i as T,j as U,p as V,k as D,n as H,l as F,m as q,q as O,w as $,s as M,_ as G,t as Q,v as W,x as m,y as k,z as J,A as K,B as X,C as Y,D as Z}from"./a5S8uhhp.js";import{u as ee}from"./DrjWA9Os.js";async function z(t,a=P()){const{path:i,matched:e}=a.resolve(t);if(!e.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(i)))return;const r=a._preloadPromises=a._preloadPromises||[];if(r.length>4)return Promise.all(r).then(()=>z(t,a));a._routePreloaded.add(i);const s=e.map(u=>{var n;return(n=u.components)==null?void 0:n.default}).filter(u=>typeof u=="function");for(const u of s){const n=Promise.resolve(u()).catch(()=>{}).finally(()=>r.splice(r.indexOf(n)));r.push(n)}await Promise.all(r)}const te=(...t)=>t.find(a=>a!==void 0);function ae(t){const a=t.componentName||"NuxtLink";function i(e,r){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return w(e,t.trailingSlash);const s="path"in e&&e.path!==void 0?e.path:r(e).path;return{...e,name:void 0,path:w(s,t.trailingSlash)}}return A({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:r}){const s=P(),u=F(),n=y(()=>{const o=e.to||e.href||"";return i(o,s.resolve)}),d=y(()=>typeof n.value=="string"&&N(n.value,{acceptRelative:!0})),g=y(()=>e.target&&e.target!=="_self"),b=y(()=>e.external||g.value?!0:typeof n.value=="object"?!1:n.value===""||d.value),_=C(!1),h=C(null),R=o=>{var f;h.value=e.custom?(f=o==null?void 0:o.$el)==null?void 0:f.nextElementSibling:o==null?void 0:o.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!oe()){const f=q();let p,l=null;B(()=>{const x=re();j(()=>{p=I(()=>{var c;(c=h==null?void 0:h.value)!=null&&c.tagName&&(l=x.observe(h.value,async()=>{l==null||l(),l=null;const v=typeof n.value=="string"?n.value:s.resolve(n.value).fullPath;await Promise.all([f.hooks.callHook("link:prefetch",v).catch(()=>{}),!b.value&&z(n.value,s).catch(()=>{})]),_.value=!0}))})})}),L(()=>{p&&E(p),l==null||l(),l=null})}return()=>{var l,x;if(!b.value){const c={ref:R,to:n.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(_.value&&(c.class=e.prefetchedClass||t.prefetchedClass),c.rel=e.rel||void 0),S(T("RouterLink"),c,r.default)}const o=typeof n.value=="object"?((l=s.resolve(n.value))==null?void 0:l.href)??null:n.value&&!e.external&&!d.value?i(U(u.app.baseURL,n.value),s.resolve):n.value||null,f=e.target||null,p=te(e.noRel?"":e.rel,t.externalRelAttribute,d.value||g.value?"noopener noreferrer":"")||null;if(e.custom){if(!r.default)return null;const c=()=>O(o,{replace:e.replace,external:e.external});return r.default({href:o,navigate:c,get route(){if(!o)return;const v=V(o);return{path:v.pathname,fullPath:v.pathname,get query(){return D(v.search)},hash:v.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:o}},rel:p,target:f,isExternal:b.value,isActive:!1,isExactActive:!1})}return S("a",{ref:h,href:o,rel:p,target:f},(x=r.default)==null?void 0:x.call(r))}}})}const ne=ae(H);function w(t,a){const i=a==="append"?$:M;return N(t)&&!t.startsWith("http")?t:i(t,!0)}function re(){const t=q();if(t._observer)return t._observer;let a=null;const i=new Map,e=(s,u)=>(a||(a=new IntersectionObserver(n=>{for(const d of n){const g=i.get(d.target);(d.isIntersecting||d.intersectionRatio>0)&&g&&g()}})),i.set(s,u),a.observe(s),()=>{i.delete(s),a.unobserve(s),i.size===0&&(a.disconnect(),a=null)});return t._observer={observe:e}}function oe(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}const se=t=>(Y("data-v-73a07988"),t=t(),Z(),t),ie={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},le=se(()=>m("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),ue={class:"max-w-520px text-center z-20"},ce=["textContent"],de=["textContent"],fe={class:"w-full flex items-center justify-center"},he={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(t){const a=t;return ee({title:`${a.statusCode} - ${a.statusMessage} | ${a.appName}`,script:[],style:[{children:'*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,p{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }'}]}),(i,e)=>{const r=ne;return Q(),W("div",ie,[le,m("div",ue,[m("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:k(t.statusCode)},null,8,ce),m("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:k(t.description)},null,8,de),m("div",fe,[J(r,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:K(()=>[X(k(t.backHome),1)]),_:1})])])])}}},ge=G(he,[["__scopeId","data-v-73a07988"]]);export{ge as default};
