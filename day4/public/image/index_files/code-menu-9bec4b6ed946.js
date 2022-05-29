"use strict";(()=>{var N=Object.defineProperty;var s=(g,p)=>N(g,"name",{value:p,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[679],{10664:(g,p,l)=>{var d=l(27925)},20963:(g,p,l)=>{l.d(p,{X:()=>A});var d=l(64463);function A(){return/Windows/.test(navigator.userAgent)?"windows":/Macintosh/.test(navigator.userAgent)?"mac":null}s(A,"getPlatform");function b(h){const y=(h.getAttribute("data-platforms")||"").split(","),i=A();return Boolean(i&&y.includes(i))}s(b,"runningOnPlatform"),(0,d.N7)(".js-remove-unless-platform",function(h){b(h)||h.remove()})},27925:(g,p,l)=>{l.d(p,{b:()=>u});var d=l(90420),A=l(20963),b=l(60785),h=Object.defineProperty,y=Object.getOwnPropertyDescriptor,i=s((n,r,m,E)=>{for(var _=E>1?void 0:E?y(r,m):r,v=n.length-1,L;v>=0;v--)(L=n[v])&&(_=(E?L(r,m,_):L(_))||_);return E&&_&&h(r,m,_),_},"__decorateClass");const{getItem:O,setItem:P}=(0,b.Z)("localStorage"),w="code-button-default-tab";let u=s(class extends HTMLElement{constructor(){super(...arguments);this.shouldRefreshList=!1}showDownloadMessage(n){const r=this.findPlatform(n);!r||this.showPlatform(r)}showCodespaces(n){const r=this.findPlatform(n);!r||(this.showPlatform(r),this.loadAndUpdateContent())}showCodespaceSelector(n){const r=this.findPlatform(n);!r||(this.showPlatform(r),this.codespaceSelector&&(this.codespaceSelector.hidden=!1))}showOpenOrCreateInCodespace(){this.openOrCreateInCodespace&&(this.openOrCreateInCodespace.hidden=!1)}removeOpenOrCreateInCodespace(){this.openOrCreateInCodespace&&this.openOrCreateInCodespace.remove()}refreshList(){this.shouldRefreshList&&(this.shouldRefreshList=!1,this.loadAndUpdateContent())}trackDelete(){this.shouldRefreshList=!0}hideSpinner(){this.codespaceLoadingMenu&&(this.codespaceLoadingMenu.hidden=!0),this.codespaceList&&(this.codespaceList.hidden=!1)}showSpinner(){this.codespaceLoadingMenu&&(this.codespaceLoadingMenu.hidden=!1),this.codespaceList&&(this.codespaceList.hidden=!0)}onDetailsToggle(n){this.modal.hidden=!1;for(const m of this.platforms)m.hidden=!0;const r=n.target;r&&r.open&&this.selectDefaultTab()}showPlatform(n){this.modal.hidden=!0;for(const r of this.platforms)r.hidden=r.getAttribute("data-platform")!==n}findPlatform(n){return n.currentTarget.getAttribute("data-open-app")||(0,A.X)()}refreshOnError(){window.location.reload()}pollForVscode(n){this.showPlatform("vscode");const r=n.currentTarget.getAttribute("data-src");r&&this.vscodePoller.setAttribute("src",r)}backToCodespacesFromVscodePolling(){this.loadAndUpdateContent(),this.showPlatform("codespaces")}localTabSelected(){P(w,"local")}cloudTabSelected(){P(w,"cloud")}selectDefaultTab(){const n=O(w);if(!n)return;const r=this.querySelector(`button[data-tab="${n}"`);r&&r.click()}loadAndUpdateContent(){this.codespaceList.setAttribute("src",this.codespaceList.getAttribute("data-src"))}},"GetRepoElement");i([d.fA],u.prototype,"modal",2),i([d.fA],u.prototype,"codespaceForm",2),i([d.fA],u.prototype,"codespaceLoadingMenu",2),i([d.fA],u.prototype,"codespaceList",2),i([d.fA],u.prototype,"codespaceSelector",2),i([d.fA],u.prototype,"openOrCreateInCodespace",2),i([d.fA],u.prototype,"vscodePoller",2),i([d.GO],u.prototype,"platforms",2),u=i([d.Ih],u)},60785:(g,p,l)=>{l.d(p,{Z:()=>A});class d{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}}s(d,"NoOpStorage");function A(b,h={throwQuotaErrorsOnSet:!1},y=window){let i;try{i=y[b]}catch{i=new d}const{throwQuotaErrorsOnSet:O}=h;function P(n){try{return i.getItem(n)}catch{return null}}s(P,"getItem");function w(n,r){try{i.setItem(n,r)}catch(m){if(O&&m.message.toLowerCase().includes("quota"))throw m}}s(w,"setItem");function u(n){try{i.removeItem(n)}catch{}}return s(u,"removeItem"),{getItem:P,setItem:w,removeItem:u}}s(A,"safeStorage")},90420:(g,p,l)=>{l.d(p,{Lj:()=>L,Ih:()=>k,P4:()=>u,fA:()=>r,GO:()=>m});const d=new WeakSet;function A(t){d.add(t),t.shadowRoot&&b(t.shadowRoot),i(t),y(t.ownerDocument)}s(A,"bind");function b(t){i(t),y(t)}s(b,"bindShadow");const h=new WeakMap;function y(t=document){if(h.has(t))return h.get(t);let e=!1;const o=new MutationObserver(c=>{for(const f of c)if(f.type==="attributes"&&f.target instanceof Element)w(f.target);else if(f.type==="childList"&&f.addedNodes.length)for(const C of f.addedNodes)C instanceof Element&&i(C)});o.observe(t,{childList:!0,subtree:!0,attributeFilter:["data-action"]});const a={get closed(){return e},unsubscribe(){e=!0,h.delete(t),o.disconnect()}};return h.set(t,a),a}s(y,"listenForBind");function i(t){for(const e of t.querySelectorAll("[data-action]"))w(e);t instanceof Element&&t.hasAttribute("data-action")&&w(t)}s(i,"bindElements");function O(t){const e=t.currentTarget;for(const o of P(e))if(t.type===o.type){const a=e.closest(o.tag);d.has(a)&&typeof a[o.method]=="function"&&a[o.method](t);const c=e.getRootNode();if(c instanceof ShadowRoot&&d.has(c.host)&&c.host.matches(o.tag)){const f=c.host;typeof f[o.method]=="function"&&f[o.method](t)}}}s(O,"handleEvent");function*P(t){for(const e of(t.getAttribute("data-action")||"").trim().split(/\s+/)){const o=e.lastIndexOf(":"),a=Math.max(0,e.lastIndexOf("#"))||e.length;yield{type:e.slice(0,o),tag:e.slice(o+1,a),method:e.slice(a+1)||"handleEvent"}}}s(P,"bindings");function w(t){for(const e of P(t))t.addEventListener(e.type,O)}s(w,"bindActions");function u(t,e){const o=t.tagName.toLowerCase();if(t.shadowRoot){for(const a of t.shadowRoot.querySelectorAll(`[data-target~="${o}.${e}"]`))if(!a.closest(o))return a}for(const a of t.querySelectorAll(`[data-target~="${o}.${e}"]`))if(a.closest(o)===t)return a}s(u,"findTarget");function n(t,e){const o=t.tagName.toLowerCase(),a=[];if(t.shadowRoot)for(const c of t.shadowRoot.querySelectorAll(`[data-targets~="${o}.${e}"]`))c.closest(o)||a.push(c);for(const c of t.querySelectorAll(`[data-targets~="${o}.${e}"]`))c.closest(o)===t&&a.push(c);return a}s(n,"findTargets");function r(t,e){return Object.defineProperty(t,e,{configurable:!0,get(){return u(this,e)}})}s(r,"target");function m(t,e){return Object.defineProperty(t,e,{configurable:!0,get(){return n(this,e)}})}s(m,"targets");function E(t){const e=t.name.replace(/([A-Z]($|[a-z]))/g,"-$1").replace(/(^-|-Element$)/g,"").toLowerCase();window.customElements.get(e)||(window[t.name]=t,window.customElements.define(e,t))}s(E,"register");function _(t){for(const e of t.querySelectorAll("template[data-shadowroot]"))e.parentElement===t&&t.attachShadow({mode:e.getAttribute("data-shadowroot")==="closed"?"closed":"open"}).append(e.content.cloneNode(!0))}s(_,"autoShadowRoot");const v=new WeakMap;function L(t,e){v.has(t)||v.set(t,[]),v.get(t).push(e)}s(L,"attr");function T(t,e){e||(e=I(Object.getPrototypeOf(t)));for(const o of e){const a=t[o],c=S(o);let f={configurable:!0,get(){return this.getAttribute(c)||""},set(C){this.setAttribute(c,C||"")}};typeof a=="number"?f={configurable:!0,get(){return Number(this.getAttribute(c)||0)},set(C){this.setAttribute(c,C)}}:typeof a=="boolean"&&(f={configurable:!0,get(){return this.hasAttribute(c)},set(C){this.toggleAttribute(c,C)}}),Object.defineProperty(t,o,f),o in t&&!t.hasAttribute(c)&&f.set.call(t,a)}}s(T,"initializeAttrs");function I(t){const e=new Set;let o=t;for(;o&&o!==HTMLElement;){const a=v.get(o)||[];for(const c of a)e.add(c);o=Object.getPrototypeOf(o)}return e}s(I,"getAttrNames");function S(t){return`data-${t.replace(/([A-Z]($|[a-z]))/g,"-$1")}`.replace(/--/g,"-").toLowerCase()}s(S,"attrToAttributeName");function R(t){let e=t.observedAttributes||[];Object.defineProperty(t,"observedAttributes",{configurable:!0,get(){return[...I(t.prototype)].map(S).concat(e)},set(o){e=o}})}s(R,"defineObservedAttributes");const M=new WeakSet;function D(t,e){t.toggleAttribute("data-catalyst",!0),customElements.upgrade(t),M.add(t),_(t),T(t),A(t),e&&e.call(t),t.shadowRoot&&b(t.shadowRoot)}s(D,"initializeInstance");function $(t){R(t),E(t)}s($,"initializeClass");function U(t){return M.has(t)}s(U,"initialized");function k(t){const e=t.prototype.connectedCallback;t.prototype.connectedCallback=function(){D(this,e)},$(t)}s(k,"controller")}},g=>{var p=s(d=>g(g.s=d),"__webpack_exec__");g.O(0,[5724],()=>p(10664));var l=g.O()}]);})();

//# sourceMappingURL=code-menu-04fd001b8eab.js.map