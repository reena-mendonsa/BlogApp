"use strict";(()=>{var ft=Object.defineProperty;var n=(b,g)=>ft(b,"name",{value:g,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[9016],{92131:(b,g,c)=>{var i=c(90420),v=Object.defineProperty,f=Object.getOwnPropertyDescriptor,y=n((t,e,s,o)=>{for(var r=o>1?void 0:o?f(e,s):e,a=t.length-1,l;a>=0;a--)(l=t[a])&&(r=(o?l(e,s,r):l(r))||r);return o&&r&&v(e,s,r),r},"__decorateClass");const p="*";let h=n(class extends HTMLElement{constructor(){super(...arguments);this.scopeTypes=""}active(t,e){return this.scopeTypeMatch(t.type)&&this.modeMatch(e)}scopeTypeMatch(t){return this.scopeTypes?this.scopeTypes&&JSON.parse(this.scopeTypes).includes(t):!0}modeMatch(t){return this.char===p||this.char===t}character(){return this.char===p?"":this.char}},"CommandPaletteModeElement");y([i.Lj],h.prototype,"char",2),y([i.Lj],h.prototype,"placeholder",2),y([i.Lj],h.prototype,"scopeTypes",2),h=y([i.Ih],h);var u=Object.defineProperty,S=Object.getOwnPropertyDescriptor,m=n((t,e,s,o)=>{for(var r=o>1?void 0:o?S(e,s):e,a=t.length-1,l;a>=0;a--)(l=t[a])&&(r=(o?l(e,s,r):l(r))||r);return o&&r&&u(e,s,r),r},"command_palette_tip_element_decorateClass");const C="*",_="";let E=n(class extends HTMLElement{constructor(){super(...arguments);this.scopeTypes=_,this.mode=C,this.matchMode=_,this.value=C,this.onEmpty=!1,this.onError=!1}connectedCallback(){this.hidden=!0}available(t,e=!1,s=!1){return this.valueMatch(t.text)&&this.scopeTypeMatch(t.scope.type)&&this.modeMatch(t.mode)&&this.showOnEmpty(e)&&this.showOnError(s)}toggle(t,e=!1,s=!1){this.hidden=!this.available(t,e,s)}valueMatch(t){return this.value===C||this.value===t}scopeTypeMatch(t){return this.scopeTypes!==_&&(this.scopeTypes===C||JSON.parse(this.scopeTypes).includes(t))}modeMatch(t){if(this.matchMode===_)return this.mode===C||this.mode===t;{const e=new RegExp(this.matchMode);return t.match(e)!==null}}showOnEmpty(t){return this.onEmpty?t:!0}showOnError(t){return this.onError?t:!0}},"CommandPaletteTipElement");m([i.Lj],E.prototype,"scopeTypes",2),m([i.Lj],E.prototype,"mode",2),m([i.Lj],E.prototype,"matchMode",2),m([i.Lj],E.prototype,"value",2),m([i.Lj],E.prototype,"onEmpty",2),m([i.Lj],E.prototype,"onError",2),E=m([i.Ih],E);var yt=c(34348),Oe=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,O=n((t,e,s,o)=>{for(var r=o>1?void 0:o?Re(e,s):e,a=t.length-1,l;a>=0;a--)(l=t[a])&&(r=(o?l(e,s,r):l(r))||r);return o&&r&&Oe(e,s,r),r},"command_palette_token_element_decorateClass");let M=n(class extends HTMLElement{constructor(){super(...arguments);this.type="",this.id="",this.text="",this.value=""}},"CommandPaletteTokenElement");O([i.Lj],M.prototype,"type",2),O([i.Lj],M.prototype,"id",2),O([i.Lj],M.prototype,"text",2),O([i.Lj],M.prototype,"value",2),M=O([i.Ih],M);var vt=c(65881),Fe=c(58070),gt=c(23001),X=c(26850),He=c(9731),q=c(43832);class $ extends q.j{fetch(e,s){return this.fetchSrc(e)}enabledFor(e){return this.modeMatch(e)&&this.scopeMatch(e)}clearCache(){}scopeMatch(e){return this.scopeTypes.length===0||this.scopeTypes.includes(e.scope.type)}modeMatch(e){return this.modes.includes(e.mode)||this.hasWildCard}async fetchSrc(e,s=""){var o;if(!this.src)throw new Error("No src defined");const r=new URL(this.src,window.location.origin),a=e.params();s&&a.set("mode",s),r.search=a.toString();const l=await fetch(r.toString(),{headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}});if(l.ok){const k=await l.json();return{results:((o=k.results)==null?void 0:o.map(A=>He.g.build(A)))||[],octicons:k.octicons}}else return{error:!0,results:[]}}}n($,"RemoteProvider");class F extends ${constructor(){super(...arguments);this.maxItems=1e3,this.scopedItems={},this.cachedOcticons={}}clearCache(){super.clearCache(),this.scopedItems={},this.cachedOcticons={}}get debounce(){return 0}async prefetch(e){if(!this.scopeMatch(e)||this.scopedItems[e.scope.id])return;const s=new X.A("",e.mode,{subjectId:e.subjectId,subjectType:e.subjectType,returnTo:e.returnTo,scope:e.scope}),o=await this.fetchSrc(s,e.mode);this.octicons=o.octicons||[];const r=o.results||[];this.scopedItems[e.scope.id]=r,this.cachedOcticons[e.scope.id]=this.octicons}async fetch(e,s){const o=this.scopedItems[e.scope.id]||[],r=this.cachedOcticons[e.scope.id]||[];return{results:this.fuzzyFilter(o,e).slice(0,this.maxItems),octicons:r}}}n(F,"PrefetchedProvider");class G extends F{enabledFor(e){const s=["discussion","issue","pull_request"];return e.mode===">"?!0:!!s.includes(e.scope.type)}}n(G,"CommandsProvider");var ze=c(74365),U=c(99780);class Y extends F{async fetchSrc(e){if(!this.src)throw new Error("No src provided");const s=new URL(this.src,window.location.origin);s.search=e.params().toString();const r=await(await fetch(s.toString(),{headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}})).json();if(!r.results)return;const a=r.results[0];if(a.base_file_path){const l=a.base_file_path,k=a.paths;r.results=k.map(A=>U.s.from({title:A,path:`${l}/${A}`,icon:"file-color-fg-muted",group:"files"}))}else a.action&&a.action.type==="access_policy"?r.results=[new ze.i(a)]:r.results=[];return r}async fetch(e,s=!1){const o=e.text.match(/(.+):(\d*)\s*$/);return o?this.fetchWithLineNumbers(e,o):super.fetch(e,s)}async fetchWithLineNumbers(e,s){const o=s[1],r=s[2],a=new X.A(o,e.mode,{scope:e.scope}),l=[],k=(await super.fetch(a,!1)).results;for(const A of k)A instanceof U.s&&l.push(this.convert(A,r));return{results:l}}convert(e,s){return s===""||!(e instanceof U.s)||(e.title=`${e.title}:${s}`,e.action.path=`${e.action.path}#L${s}`),e}}n(Y,"FilesProvider");class ee extends q.j{enabledFor(e){return!0}clearCache(){}get hasCommands(){return!1}get debounce(){return 0}async fetch(e,s=!1){return e.mode!=="?"&&!s?{results:[]}:{results:Array.from(this.element.querySelectorAll("command-palette-help")).filter(a=>a.show(e)).map((a,l)=>a.toItem(l))}}}n(ee,"HelpProvider");var qe=c(3404);class te extends q.j{enabledFor(e){return!(e.isBlank()||e.mode==="?"||e.mode===">")}clearCache(){}get hasCommands(){return!1}async fetch(e,s=!1){return{results:[qe.K.create(e)]}}}n(te,"SearchLinksProvider");class N{static create(e){const s=this.providers[e.type];if(!s)throw new Error(`Unknown provider type: ${e.type}`);return new s(e)}}n(N,"ServerDefinedProviderFactory"),N.providers={remote:$,prefetched:F,commands:G,files:Y,help:ee,"search-links":te};var $e=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,P=n((t,e,s,o)=>{for(var r=o>1?void 0:o?Ue(e,s):e,a=t.length-1,l;a>=0;a--)(l=t[a])&&(r=(o?l(e,s,r):l(r))||r);return o&&r&&$e(e,s,r),r},"server_defined_provider_element_decorateClass");let w=n(class extends Fe.b{constructor(){super(...arguments);this._wildcard="*"}get debounce(){return parseInt(this.fetchDebounce,10)}get hasCommands(){return this.supportsCommands}get hasWildCard(){return this.modes.includes(this._wildcard)}get modes(){return this.supportedModes===""&&(this._modes=[""]),this._modes||(this._modes=JSON.parse(this.supportedModes)),this._modes}get scopeTypes(){return this.supportedScopeTypes===""?[]:(this._scopeTypes||(this._scopeTypes=JSON.parse(this.supportedScopeTypes)),this._scopeTypes)}connectedCallback(){this.provider=N.create(this)}},"ServerDefinedProviderElement");P([i.Lj],w.prototype,"type",2),P([i.Lj],w.prototype,"supportedModes",2),P([i.Lj],w.prototype,"fetchDebounce",2),P([i.Lj],w.prototype,"supportedScopeTypes",2),P([i.Lj],w.prototype,"src",2),P([i.Lj],w.prototype,"supportsCommands",2),w=P([i.Ih],w);var Ne=c(52815),We=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,D=n((t,e,s,o)=>{for(var r=o>1?void 0:o?Ze(e,s):e,a=t.length-1,l;a>=0;a--)(l=t[a])&&(r=(o?l(e,s,r):l(r))||r);return o&&r&&We(e,s,r),r},"command_palette_help_element_decorateClass");let L=n(class extends HTMLElement{connectedCallback(){this.hidden=!0}show(t){return this.isEnabledScopeType(t)}isEnabledScopeType(t){return this.scopeTypes?this.scopeTypes&&JSON.parse(this.scopeTypes).includes(t.scope.type):!0}toItem(t){const e={group:this.group,title:this.titleElement.innerHTML,index:t};return this.prefix&&(e.prefix=this.prefix),this.hintElement.textContent&&(e.persistentHint=this.hintElement.innerHTML),Ne.B.from(e)}},"CommandPaletteHelpElement");D([i.Lj],L.prototype,"group",2),D([i.Lj],L.prototype,"prefix",2),D([i.Lj],L.prototype,"scopeTypes",2),D([i.fA],L.prototype,"titleElement",2),D([i.fA],L.prototype,"hintElement",2),L=D([i.Ih],L);var bt=c(16517),Ct=c(20181),St=c(94634),Et=c(32004),Ke=c(46635);class d{constructor(){this.iconType="octicon",this.group="commands",this.priority=0,this.dismissAfterRun=!0}static item(e={}){return new Ke.U(new this,e)}run(e){new Error("Not implemented")}isApplicable(e){return!0}}n(d,"MainWindowCommand");class W extends d{constructor(){super(...arguments);this.group="global_commands"}}n(W,"MainWindowGlobalCommand");class se extends d{constructor(){super(...arguments);this.title="Delete discussion\u2026",this.icon="trash-color-fg-muted"}get deleteButton(){return document.querySelector("button#dialog-show-delete-discussion")}get dialogElement(){return document.querySelector("#delete-discussion")}isApplicable(){return this.deleteButton!=null}run(){const e=this.deleteButton;if(e){e.click(),setTimeout(()=>{var s,o;(o=(s=this.dialogElement)==null?void 0:s.querySelector('button[type="submit"]'))==null||o.focus()},0);return}}}n(se,"DeleteDiscussion");class oe extends d{constructor(){super(...arguments);this.title="Edit discussion body",this.icon="pencil-color-fg-muted"}get editButton(){return document.querySelector(".js-discussions-comment-edit-button")}isApplicable(){return this.editButton!=null}run(){var e;(e=this.editButton)==null||e.click()}}n(oe,"EditDiscussion");class ne extends d{constructor(){super(...arguments);this.title="Transfer discussion\u2026",this.icon="arrow-right-color-fg-muted"}fetchDetails(){return document.querySelector("details.js-transfer-discussion-details")}isApplicable(){return this.fetchDetails()instanceof HTMLDetailsElement}run(){var e;const s=this.fetchDetails();if(s){const o=n(()=>{setTimeout(()=>{var r;(r=s==null?void 0:s.querySelector("[data-menu-button]"))==null||r.focus()},0)},"focusMenu");(e=s.querySelector("include-fragment"))==null||e.addEventListener("load",o),s.open=!0,o()}}}n(ne,"TransferDiscussion");const Je=[se,ne,oe];var j=c(74030),re=c(33241),ie=c(37070);class T extends d{constructor(){super(...arguments);this.title="2 spaces",this.iconType="none",this.tabSize="2",this.group=""}async run(e){this.updateTabSize(),this.saveSettings(e)}updateTabSize(){const e=document.querySelectorAll("[data-tab-size]");for(const s of e)s.setAttribute("data-tab-size",this.tabSize)}async saveSettings(e){const s=new FormData;s.set("tab_size_rendering_preference",this.tabSize);const o="Failed to save tab size preference";try{(await(0,ie.Q)("/settings/appearance/tab_size",{method:"PUT",body:s})).ok?e.displayFlash("success","Tab size rendering updated"):e.displayFlash("error",o)}catch{e.displayFlash("error",o)}}}n(T,"TabSizeTwo");class ae extends T{constructor(){super(...arguments);this.title="3 spaces",this.tabSize="3"}}n(ae,"TabSizeThree");class ce extends T{constructor(){super(...arguments);this.title="4 spaces",this.tabSize="4"}}n(ce,"TabSizeFour");class le extends T{constructor(){super(...arguments);this.title="6 spaces",this.tabSize="6"}}n(le,"TabSizeSix");class ue extends T{constructor(){super(...arguments);this.title="8 spaces",this.tabSize="8"}}n(ue,"TabSizeEight");class de extends T{constructor(){super(...arguments);this.title="10 spaces",this.tabSize="10"}}n(de,"TabSizeTen");class he extends T{constructor(){super(...arguments);this.title="12 spaces",this.tabSize="12"}}n(he,"TabSizeTwelve");class pe extends W{constructor(){super(...arguments);this.title="Change tab size rendering",this.icon="gear-color-fg-muted",this.priority=10,this.dismissAfterRun=!1}run(e){e.pushPage(new re.Z4(this.title,"tab-sizes",this.pageItems),!0)}get pageItems(){return[T,ae,ce,le,ue,de,he].map(e=>e.item())}select(e){this.run(e)}}n(pe,"SwitchTabSize");class me extends d{constructor(){super(...arguments);this.title="Open in github.dev editor",this.icon="codespaces-color-fg-muted",this.priority=10}isApplicable(){return this.fetchLink()instanceof HTMLAnchorElement}fetchLink(){return document.querySelector(".js-github-dev-shortcut")}run(){var e;(e=this.fetchLink())==null||e.click()}}n(me,"OpenInDotDev");class fe extends W{constructor(){super(...arguments);this.title="Switch theme",this.icon="paintbrush-color-fg-muted",this.priority=9,this.dismissAfterRun=!1}run(e){e.pushPage(new re.Z4(this.title,"switch-theme-page-1",this.pageItems),!0)}get pageItems(){return[B,ge,ve,ye,be].map(e=>e.item())}select(e){this.run(e)}}n(fe,"SwitchTheme");class B extends d{constructor(){super(...arguments);this.title="Default dark",this.icon="moon-color-fg-muted",this.mode="dark",this.theme="dark",this.group=""}applyTheme(){this.loadStyles(this.theme),this.mode!=="auto"&&(0,j.on)(this.theme,this.mode),(0,j.h5)(this.mode)}async run(){this.applyTheme(),this.saveSettings(this.mode,this.lightTheme,this.darkTheme)}async saveSettings(e=this.mode,s,o){const r=new FormData;r.set("color_mode",e),s&&r.set("light_theme",s),o&&r.set("dark_theme",o);const l=await(await(0,ie.Q)("/settings/appearance/color_mode",{method:"PUT",body:r})).json();this.loadStyles(l.light_theme),this.loadStyles(l.dark_theme),(0,j.on)(l.light_theme,"light"),(0,j.on)(l.dark_theme,"dark"),(0,j.h5)(l.color_mode)}loadStyles(e){const s=document.querySelector(`link[data-color-theme='${e}']`);s&&!s.hasAttribute("href")&&s.hasAttribute("data-href")&&s.setAttribute("href",s.getAttribute("data-href"))}get darkTheme(){return this.mode==="dark"?this.theme:(0,j.yn)("dark")}get lightTheme(){return this.mode==="light"?this.theme:(0,j.yn)("light")}}n(B,"SwitchToDark");class ye extends B{constructor(){super(...arguments);this.title="Switch theme to dark high contrast",this.theme="dark_high_contrast"}}n(ye,"SwitchToDarkHighContrast");class ve extends B{constructor(){super(...arguments);this.title="Dark dimmed",this.theme="dark_dimmed"}}n(ve,"SwitchToDarkDimmed");class ge extends B{constructor(){super(...arguments);this.title="Default light",this.icon="sun-color-fg-muted",this.mode="light",this.theme="light"}}n(ge,"SwitchToLight");class be extends B{constructor(){super(...arguments);this.title="Sync with system settings",this.icon="sun-color-fg-muted",this.mode="auto"}get darkTheme(){}get lightTheme(){}}n(be,"SwitchToAuto");class Ce extends d{constructor(){super();const e=this.isSubscribe();this.title=`${e?"Subscribe":"Unsubscribe"}`,this.icon=`${e?"bell":"bell-slash"}-color-fg-muted`}isApplicable(){var e;return this.fetchButton()instanceof HTMLButtonElement&&((e=this.fetchButton())==null?void 0:e.disabled)===!1}isSubscribe(){var e,s;return((s=(e=this.fetchButton())==null?void 0:e.textContent)==null?void 0:s.trim())==="Subscribe"}fetchButton(){return document.querySelector(".thread-subscribe-button")}run(){var e;(e=this.fetchButton())==null||e.click()}}n(Ce,"UpdateSubscription");const Ve=[me,pe,fe,Ce];function Se(t){t.focus(),t.selectionStart=t.selectionEnd=t.value.length}n(Se,"moveCursorToEnd");class Z extends d{constructor(){super(...arguments);this.title="Edit issue body",this.icon="pencil-color-fg-muted"}issueBody(){return document.querySelector(".js-command-palette-issue-body")}isIssue(){return!!this.issueBody()}isApplicable(){return this.isIssue()}run(){const e=document.createElement("button");e.hidden=!0,e.classList.add("js-comment-edit-button");const s=document.querySelector("div.js-comment");s==null||s.appendChild(e),e.click(),e.remove(),setTimeout(()=>{var o;const r=(o=s==null?void 0:s.parentElement)==null?void 0:o.querySelector("textarea.js-comment-field");r&&Se(r)},0)}}n(Z,"EditIssueBody");class K extends d{constructor(){super(...arguments);this.title="Edit issue title",this.icon="pencil-color-fg-muted"}issueBody(){return document.querySelector(".js-command-palette-issue-body")}isIssue(){return!!this.issueBody()}isApplicable(){return this.fetchButton()instanceof HTMLButtonElement&&this.isIssue()}fetchButton(){return document.querySelector(".js-title-edit-button")}run(){var e;(e=this.fetchButton())==null||e.click(),setTimeout(()=>{const s=document.querySelector("input#issue_title[autofocus]");s&&Se(s)},0)}}n(K,"EditIssueTitle");class Ee extends d{constructor(){super(...arguments);this.title="Transfer issue\u2026",this.icon="arrow-right-color-fg-muted"}isApplicable(){return this.fetchDetails()instanceof HTMLDetailsElement}fetchDetails(){return document.querySelector("details.js-transfer-issue")}run(){var e;const s=this.fetchDetails();if(s){const o=n(()=>{setTimeout(()=>{var r;(r=s.querySelector("[data-menu-button]"))==null||r.focus()},0)},"focusMenu");(e=s.querySelector("include-fragment"))==null||e.addEventListener("load",o),s.open=!0,o()}}}n(Ee,"TransferIssue");class we extends d{constructor(){super();const e=this.isLock();this.title=`${e?"Lock":"Unlock"} conversation`,this.icon=`${e?"lock":"key"}-color-fg-muted`}isApplicable(){return this.fetchDetails()instanceof HTMLDetailsElement}isLock(){var e,s;return((s=(e=document.querySelector("summary.lock-toggle-link"))==null?void 0:e.textContent)==null?void 0:s.trim())==="Lock conversation"}fetchDetails(){return document.querySelector("details.js-lock-issue")}run(){const e=this.fetchDetails();e&&(e.open=!0,setTimeout(()=>{var s;(s=document.querySelector("#unlock-reason"))==null||s.focus()},0))}}n(we,"LockIssue");class Te extends d{constructor(){super(...arguments);this.title="Delete issue\u2026",this.icon="trash-color-fg-muted"}isApplicable(){return this.fetchDetails()instanceof HTMLDetailsElement}fetchDetails(){return document.querySelector("details.js-delete-issue")}run(){const e=this.fetchDetails();e&&(e.open=!0,setTimeout(()=>{var s;(s=e.querySelector('button[type="submit"]'))==null||s.focus()},0))}}n(Te,"DeleteIssue");class xe extends d{constructor(){super(...arguments);this.title="Convert issue to discussion\u2026",this.icon="comment-discussion-color-fg-muted"}isApplicable(){return this.fetchDetails()instanceof HTMLDetailsElement}fetchDetails(){return document.querySelector("details.js-convert-to-discussion")}run(){var e;const s=this.fetchDetails();if(s){const o=n(()=>{setTimeout(()=>{var r;(r=s.querySelector("[data-menu-button]"))==null||r.focus()},0)},"focusMenu");(e=s.querySelector("include-fragment"))==null||e.addEventListener("load",o),s.open=!0,o()}}}n(xe,"ConvertToDiscussion");const Qe=[K,Z,we,Ee,Te,xe];var Xe=c(21314),x=c(76745);class J extends d{constructor(){super(...arguments);this.title="Open in new codespace",this.icon="codespaces-color-fg-muted",this.priority=11}isApplicable(){const e=this.fetchElements();return!!(e.codeModal&&e.codespacesForm&&e.newCodespacesButton&&e.codespacesTab)}run(){const{codeModal:e,codespacesTab:s,newCodespacesButton:o}=this.fetchElements();!(e&&s&&o)||(e.open=!0,s.click(),o instanceof HTMLButtonElement&&o.click())}fetchElements(){const e=document.querySelector(".js-create-codespaces-form-command"),s=(e==null?void 0:e.closest("details"))||null,o=(s==null?void 0:s.querySelector('[data-tab="cloud"]'))||null,r=(e==null?void 0:e.querySelector('summary[role="button"], button[type="submit"]'))||null;return{codespacesForm:e,codeModal:s,codespacesTab:o,newCodespacesButton:r}}}n(J,"OpenCodespace");var R=c(76612);class _e extends Z{constructor(){super(...arguments);this.title="Edit pull request body"}pullRequestBody(){return document.querySelector(".js-command-palette-pull-body")}isPullRequest(){return!!this.pullRequestBody()}isApplicable(){return this.isPullRequest()}}n(_e,"EditPullRequestBody");class Pe extends K{constructor(){super(...arguments);this.title="Edit pull request title"}pullRequestBody(){return document.querySelector(".js-command-palette-pull-body")}isPullRequest(){return!!this.pullRequestBody()}isApplicable(){return this.fetchButton()instanceof HTMLButtonElement&&this.isPullRequest()}}n(Pe,"EditPullRequestTitle");class Le extends d{constructor(){super(...arguments);this.title="Update current branch",this.icon="sync-color-fg-muted"}isApplicable(){return this.fetchButton()instanceof HTMLButtonElement}fetchButton(){return document.querySelector(".js-update-branch-form button")}run(){const e=this.fetchButton();e&&(e.scrollIntoView({behavior:"smooth",block:"center"}),e.click())}}n(Le,"UpdateBranch");class je extends d{constructor(){super(...arguments);this.title="Convert to draft",this.icon="git-pull-request-draft-color-fg-muted"}isApplicable(){return this.fetchButton()instanceof HTMLButtonElement}fetchButton(){return document.querySelector(".js-convert-to-draft")}run(){var e;const s=(e=this.fetchButton())==null?void 0:e.closest("details");s&&(s.open=!0,setTimeout(()=>{var o;(o=s.querySelector(".js-convert-to-draft"))==null||o.focus()},0))}}n(je,"ConvertToDraft");class Ae extends d{constructor(){super(...arguments);this.title="Copy current branch name",this.icon="copy-color-fg-muted"}isApplicable(){return this.fetchClipboardCopy()instanceof x.Z}fetchClipboardCopy(){return document.querySelector(".js-copy-branch")}async run(e){const s=this.fetchClipboardCopy();if(s instanceof x.Z){const o=s.value;try{await(0,R.z)(o),e.displayFlash("success","Branch name copied to clipboard!")}catch{e.displayFlash("error","Unable to copy branch name to clipboard!")}}}}n(Ae,"CopyBranchName");const Ge=[Ae,Pe,_e,Le,je,J];class Me extends d{constructor(){super(...arguments);this.title="Copy file permalink",this.icon="copy-color-fg-muted"}isApplicable(){return this.fetchPermalinkContainer()instanceof HTMLAnchorElement}fetchPermalinkContainer(){return document.querySelector(".js-permalink-shortcut")}async run(e){const s=this.fetchPermalinkContainer();if(s){const o=`${s.href}${window.location.hash}`;try{await(0,R.z)(o),e.displayFlash("success","Copied permalink!")}catch{e.displayFlash("error","Failed to copy permalink!")}}}}n(Me,"CopyPermalink");class De extends d{constructor(){super(...arguments);this.title="Clone repository: Copy HTTPS",this.icon="copy-color-fg-muted",this.priority=4}isApplicable(){return this.backendCommandsDisabled()&&this.fetchClipboardCopy()instanceof x.Z}fetchClipboardCopy(){return document.querySelector(".js-clone-url-http")}backendCommandsDisabled(){return!!window.commandPalette&&!window.commandPalette.hasAttribute("data-commands-path")}async run(e){const s=this.fetchClipboardCopy();if(s instanceof x.Z){const o=s.value;try{await(0,R.z)(o),e.displayFlash("success","Clone URL copied!")}catch{e.displayFlash("error","Clone URL couldn't be copied")}}}}n(De,"CloneCopyHttps");class Be extends d{constructor(){super(...arguments);this.title="Clone repository: Copy SSH",this.icon="copy-color-fg-muted",this.priority=3}isApplicable(){return this.backendCommandsDisabled()&&this.fetchClipboardCopy()instanceof x.Z}fetchClipboardCopy(){return document.querySelector(".js-clone-url-ssh")}backendCommandsDisabled(){return!!window.commandPalette&&!window.commandPalette.hasAttribute("data-commands-path")}async run(e){const s=this.fetchClipboardCopy();if(s instanceof x.Z){const o=s.value;try{await(0,R.z)(o),e.displayFlash("success","Clone URL copied!")}catch{e.displayFlash("error","Clone URL couldn't be copied")}}}}n(Be,"CloneCopySsh");class Ie extends d{constructor(){super(...arguments);this.title="Clone repository: Copy GitHub CLI",this.icon="copy-color-fg-muted",this.priority=2}isApplicable(){return this.backendCommandsDisabled()&&this.fetchClipboardCopy()instanceof x.Z}fetchClipboardCopy(){return document.querySelector(".js-clone-url-gh-cli")}backendCommandsDisabled(){return!!window.commandPalette&&!window.commandPalette.hasAttribute("data-commands-path")}async run(e){const s=this.fetchClipboardCopy();if(s instanceof x.Z){const o=s.value;try{await(0,R.z)(o),e.displayFlash("success","Clone URL copied!")}catch{e.displayFlash("error","Clone URL couldn't be copied")}}}}n(Ie,"CloneCopyCli");const Ye=[De,Be,Ie,Me,J];class V extends Xe.B{constructor(){super(...arguments);this.itemsByType={},this.items=[],this.needsFetch=!0}enabledFor(e){const s=["discussion","issue","pull_request"];return e.mode===">"?!0:!!s.includes(e.scope.type)}get hasCommands(){return!0}async fetch(e){return this.items=[...Qe.map(o=>o.item()),...Ge.map(o=>o.item()),...Ye.map(o=>o.item()),...Je.map(o=>o.item()),...Ve.map(o=>o.item())].filter(o=>o.isApplicable(e)),{results:this.fuzzyFilter(this.items,e)}}get debounce(){return 0}clearCache(){}}n(V,"MainWindowCommandsProvider"),window.commandPalette&&window.commandPalette.registerProvider("main-window-commands-provider",new V),window.addEventListener("command-palette-ready",()=>{var t;(t=window.commandPalette)==null||t.registerProvider("main-window-commands-provider",new V)});var I=c(1648),et=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,st=n((t,e,s,o)=>{for(var r=o>1?void 0:o?tt(e,s):e,a=t.length-1,l;a>=0;a--)(l=t[a])&&(r=(o?l(e,s,r):l(r))||r);return o&&r&&et(e,s,r),r},"command_palette_input_element_decorateClass");let H=n(class extends HTMLElement{constructor(){super(...arguments);this.setupComplete=!1,this.connected=!1}static get observedAttributes(){return["value","typeahead","scope"]}setup(){this.classList.add("d-flex","flex-items-center","flex-nowrap","py-1","pl-3","pr-2","border-bottom"),this.input=this.querySelector("input.js-input"),this.overlayInput=this.querySelector("input.js-overlay-input"),this.clearButton=this.querySelector(".js-clear"),this.scopeElement=this.querySelector("command-palette-scope"),this.searchIcon=this.querySelector(".js-search-icon"),this.spinner=this.querySelector(".js-spinner"),this.defaultScope=this.scope,this.hasAttribute("autofocus")&&this.input.focus(),this.clearButton.hidden=!0,this.value.length!==0&&this._dispatchEvent("command-palette-input"),this.setupComplete=!0}connectedCallback(){this.setupComplete||this.setup(),this.value=this.getAttribute("value")||"",this.typeahead=this.getAttribute("typeahead")||"",this.placeholder=this.getAttribute("placeholder")||"",this.connected=!0}attributeChangedCallback(t,e,s){!this.input||(t==="typeahead"?this.typeahead=s:t==="value"&&(this.value=s,this._dispatchEvent("command-palette-input")))}focus(){this.input.focus()}setRemovedTokenAndSelect(t){t&&(this.value=t),this.focus(),this.input.select()}get scope(){return this.scopeElement.scope}set scope(t){this.scopeElement.scope=t,this.clearButton.hidden=!this.hasSomethingToClear()}hasScope(){return this.scopeElement.hasScope()}clearScope(){return this.scopeElement.clearScope()}removeToken(){return this.scopeElement.removeToken()}get placeholder(){return this.input.getAttribute("placeholder")||""}set placeholder(t){this.input.setAttribute("placeholder",t)}get typeaheadPlaceholder(){var t;return((t=(0,i.P4)(this,"typeaheadPlaceholder"))==null?void 0:t.textContent)||""}set typeaheadPlaceholder(t){const e=(0,i.P4)(this,"typeaheadPlaceholder");e.textContent=t}get value(){var t;return((t=this.input)==null?void 0:t.value)||""}set value(t){this.input.value=t,this.typeahead=t,this.resetPlaceholder(),this.onInput()}get overlay(){return this.overlayInput.value}set overlay(t){this.overlayInput.value=t}set mirror(t){const e=(0,i.P4)(this,"mirror");e.textContent=t}get typeaheadText(){return(0,i.P4)(this,"typeaheadText").textContent||""}set typeaheadText(t){const e=(0,i.P4)(this,"typeaheadText");e.textContent=t}get typeahead(){return this.typeaheadValue}set typeahead(t){if(this.typeaheadValue=this.overlay+t,this.mirror=this.value,t==="")this.typeaheadText="";else if(this.placeholder="",this.typeaheadPlaceholder="",this.valueStartsWithTypeahead){const e=this.value.length-(this.overlay?1:0);this.typeaheadText=t.substring(e)}else this.typeaheadText=` \u2013 ${t}`}showModePlaceholder(t=""){this.typeaheadPlaceholder=t}get valueStartsWithTypeahead(){return this.typeaheadValue.toLowerCase().startsWith(this.value.toLowerCase())}get isCursorAtEnd(){return this.value.length===this.input.selectionStart}set loading(t){this.spinner.hidden=!t,this.searchIcon.hidden=t}resetPlaceholder(){this.value.replace(this.overlay,"")&&this.overlay&&(this.typeaheadPlaceholder=""),this.placeholder=this.getAttribute("placeholder")||""}onInput(){this.resetPlaceholder(),this.clearButton.hidden=!this.hasSomethingToClear(),!!this.connected&&this._dispatchEvent("command-palette-input")}onClear(t){t instanceof KeyboardEvent&&t.key!=="Escape"||(this.value="",this.input.focus(),this._dispatchEvent("command-palette-cleared"))}onKeydown(t){if(this.isSelectKeystroke(t.key)&&(this._dispatchEvent("command-palette-select"),t.stopImmediatePropagation(),t.preventDefault()),this.hasSomethingToClear()&&(0,I.o)(t)&&t.key==="Backspace"){this.onClear();return}if(this.input.selectionStart===0&&this.input.selectionEnd===0&&t.key==="Backspace"){this._dispatchEvent("command-palette-descope"),t.stopImmediatePropagation(),t.preventDefault();return}}hasSomethingToClear(){return this.scopeElement.hasScope()||this.value.length>0}isSelectKeystroke(t){return t==="Tab"||t==="ArrowRight"&&this.isCursorAtEnd}textSelected(){return this.input.selectionStart!==this.input.selectionEnd}_dispatchEvent(t){const e=new CustomEvent(t,{cancelable:!0,detail:{typeahead:this.typeahead,value:this.value}});return this.dispatchEvent(e)}},"CommandPaletteInputElement");H.tagName="command-palette-input",H=st([i.Ih],H);var ot=c(11793),nt=c(86404),rt=c(34078),ke=c(64463),it=c(83476);window.customElements.get(I.Z.tagName)||window.customElements.define(I.Z.tagName,I.Z);function at(){document.addEventListener("keydown",ct),(0,ke.N7)(".js-command-palette-dialog",t=>{if(!t)return;const e=window.performance.now(),s=Q();!s||(t.addEventListener("toggle",()=>{t.open?s.activate():s.deactivate()}),s.addEventListener("command-palette-activated",o=>{o instanceof CustomEvent&&(o.detail.previouslyActivated||(0,it.b)({distributionKey:"COMMAND_PALETTE_FIRST_OPEN",distributionValue:window.performance.now()-e}))}))}),(0,ke.N7)(".js-socket-channel.js-updatable-content",{subscribe:t=>(0,nt.RB)(t,"socket:message",()=>{const e=Q();!e||e.clearCommands(!1)})})}n(at,"observeCommandPalette");function Q(){return document.querySelector(I.Z.tagName)}n(Q,"findCommandPalette");function ct(t){if(!t.code)return;const e=Q();if(!e)return;const s=ht(),o=z(e.platformCommandModeHotkey,t),r=!lt(t)&&!s&&(z(e.platformActivationHotkey,t)||o),a=!s&&(z(e.platformSecondardActivationHotkey,t)||o),l=e.hasAttribute("data-memex-hotkey-enabled")&&s&&z(e.platformActivationHotkey,t);(r||a||l)&&(pt(o),t.preventDefault(),t.stopPropagation())}n(ct,"handleKeyDown");function z(t,e){let s=(0,ot.EL)(e);return s=s.replace("\u02DA","k"),t.split(",").some(o=>s===o)}n(z,"hotkeyMatchesEvent");function lt(t){return ut(t)||dt(t)}n(lt,"shouldIgnoreActivation");function ut(t){const e=t.target;return e?e.closest(".js-previewable-comment-form")!==null:!1}n(ut,"triggeredInsideAPreviewableCommentForm");function dt(t){const e=t.target;if(!e)return!1;const s=e.closest(".js-code-editor");if(!s)return!1;const o=(0,rt.P)(s);if(!o)return!1;const r=o.editor;if(!r)return!1;const a=r.getMode().name;return a==="gfm"||a==="markdown"}n(dt,"triggeredInsideAMarkdownCodeEditor");function ht(){return!!document.querySelector("#memex-root")}n(ht,"triggeredInsideMemex");function pt(t){for(const e of document.querySelectorAll(".js-command-palette-dialog")){const s=e.querySelector(H.tagName);if(!s)return;if(e.open)e.open=!1;else{mt(s,t);const o=e.querySelector(I.Z.tagName);o&&(o.previouslyActiveElement=document.activeElement),e.open=!0}}}n(pt,"toggleCommandPalette");function mt(t,e){const s=t.value.startsWith(">");return e&&!s?(t.value=`>${t.value}`,!0):!e&&s?(t.value=t.value.substring(1),!0):!1}n(mt,"toggleCommandMode"),at()},34078:(b,g,c)=>{c.d(g,{P:()=>f,g:()=>y});var i=c(59753);const v=new WeakMap;function f(u){return v.get(u)}n(f,"getCodeEditor");async function y(u){return v.get(u)||p(await h(u,"codeEditor:ready"))}n(y,"getAsyncCodeEditor");function p(u){if(!(u instanceof CustomEvent))throw new Error("assert: event is not a CustomEvent");const S=u.detail.editor;if(!u.target)throw new Error("assert: event.target is null");return v.set(u.target,S),S}n(p,"onEditorFromEvent"),(0,i.on)("codeEditor:ready",".js-code-editor",p);function h(u,S){return new Promise(m=>{u.addEventListener(S,m,{once:!0})})}n(h,"nextEvent")},74030:(b,g,c)=>{c.d(g,{I3:()=>i,h5:()=>f,on:()=>y,yn:()=>p});function i(){if(v("dark"))return"dark";if(v("light"))return"light"}n(i,"getPreferredColorMode");function v(h){return window.matchMedia&&window.matchMedia(`(prefers-color-scheme: ${h})`).matches}n(v,"prefersColorScheme");function f(h){const u=document.querySelector("html[data-color-mode]");!u||u.setAttribute("data-color-mode",h)}n(f,"setClientMode");function y(h,u){const S=document.querySelector("html[data-color-mode]");!S||S.setAttribute(`data-${u}-theme`,h)}n(y,"setClientTheme");function p(h){const u=document.querySelector("html[data-color-mode]");if(!!u)return u.getAttribute(`data-${h}-theme`)}n(p,"getClientTheme")},34782:(b,g,c)=>{c.d(g,{C:()=>v,x:()=>i});const i=function(){return document.readyState==="interactive"||document.readyState==="complete"?Promise.resolve():new Promise(f=>{document.addEventListener("DOMContentLoaded",()=>{f()})})}(),v=function(){return document.readyState==="complete"?Promise.resolve():new Promise(f=>{window.addEventListener("load",f)})}()},43452:(b,g,c)=>{c.d(g,{Z:()=>i});function i(v){var f,y;const p=(y=(f=v.head)==null?void 0:f.querySelector('meta[name="expected-hostname"]'))==null?void 0:y.content;if(!p)return!1;const h=p.replace(/\.$/,"").split(".").slice(-2).join("."),u=v.location.hostname.replace(/\.$/,"").split(".").slice(-2).join(".");return h!==u}n(i,"detectProxySite")},83476:(b,g,c)=>{c.d(g,{b:()=>y});var i=c(43452),v=c(34782);let f=[];function y(m,C=!1){m.timestamp===void 0&&(m.timestamp=new Date().getTime()),m.loggedIn=S(),f.push(m),C?u():h()}n(y,"sendStats");let p=null;async function h(){await v.C,p==null&&(p=window.requestIdleCallback(u))}n(h,"scheduleSendStats");function u(){var m,C;if(p=null,!f.length||(0,i.Z)(document))return;const _=(C=(m=document.head)==null?void 0:m.querySelector('meta[name="browser-stats-url"]'))==null?void 0:C.content;if(!_)return;const E=JSON.stringify({stats:f});try{navigator.sendBeacon&&navigator.sendBeacon(_,E)}catch{}f=[]}n(u,"flushStats");function S(){var m,C;return!!((C=(m=document.head)==null?void 0:m.querySelector('meta[name="user-login"]'))==null?void 0:C.content)}n(S,"isLoggedIn"),document.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u)},86404:(b,g,c)=>{c.d(g,{RB:()=>v,qC:()=>f,w0:()=>i});class i{constructor(p){this.closed=!1,this.unsubscribe=()=>{p(),this.closed=!0}}}n(i,"Subscription");function v(y,p,h,u={capture:!1}){return y.addEventListener(p,h,u),new i(()=>{y.removeEventListener(p,h,u)})}n(v,"fromEvent");function f(...y){return new i(()=>{for(const p of y)p.unsubscribe()})}n(f,"compose")}},b=>{var g=n(i=>b(b.s=i),"__webpack_exec__");b.O(0,[5724,6319,9255,6399],()=>g(92131));var c=b.O()}]);})();

//# sourceMappingURL=command-palette-1195375b346e.js.map