"use strict";(()=>{var j=Object.defineProperty;var h=(d,m)=>j(d,"name",{value:m,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[877],{77401:(d,m,n)=>{const o=new Map,f=new WeakMap;function P(s=document.body){cancelAnimationFrame(f.get(s)||0),f.set(s,requestAnimationFrame(()=>{for(const l of o.keys())if(customElements.get(l)||s.querySelector(l)||s.matches(l)){for(const g of o.get(l)||[])g();o.delete(l),f.delete(s)}}))}h(P,"scan");let y=!1;function v(){if(P(),y)return;y=!0,new MutationObserver(l=>{if(!!o.size)for(const g of l)for(const L of g.addedNodes)L instanceof Element&&P(L)}).observe(document,{subtree:!0,childList:!0})}h(v,"prepare");function t(s,l){o.has(s)||o.set(s,[]),o.get(s).push(()=>requestAnimationFrame(l)),document.readyState==="interactive"||document.readyState==="complete"?v():document.addEventListener("DOMContentLoaded",v,{once:!0})}h(t,"whenSeen"),t("animated-image",()=>n.e(2609).then(n.bind(n,2609))),t("launch-code",()=>n.e(4609).then(n.bind(n,84609))),t("metric-selection",()=>n.e(4340).then(n.bind(n,34340))),t("severity-calculator",()=>Promise.all([n.e(5724),n.e(8628)]).then(n.bind(n,8628))),t("create-branch",()=>Promise.all([n.e(90),n.e(768),n.e(7190)]).then(n.bind(n,97190))),t("alert-dismissal-details",()=>n.e(1319).then(n.bind(n,11319))),t("sku-list",()=>n.e(5619).then(n.bind(n,15619))),t("create-button",()=>n.e(3493).then(n.bind(n,43493))),t("command-palette-page",()=>Promise.all([n.e(6319),n.e(6399),n.e(1736)]).then(n.bind(n,21736))),t("command-palette-page-stack",()=>Promise.all([n.e(6319),n.e(6399),n.e(9039)]).then(n.bind(n,39039))),t("deferred-diff-lines",()=>n.e(7470).then(n.bind(n,17470))),t("readme-toc",()=>n.e(1416).then(n.bind(n,61416))),t("delayed-loading",()=>n.e(6970).then(n.bind(n,6970))),t("feature-callout",()=>n.e(7986).then(n.bind(n,87986))),t("reopen-button",()=>n.e(9378).then(n.bind(n,89378))),t("math-renderer",()=>n.e(8957).then(n.bind(n,70033))),t("codespaces-policy-form",()=>n.e(1454).then(n.bind(n,11454))),t("action-list",()=>n.e(4758).then(n.bind(n,53972))),t("action-menu",()=>n.e(7028).then(n.bind(n,67028))),t("iterate-focusable-elements.ts",()=>n.e(5163).then(n.bind(n,55163))),t("modal-dialog",()=>n.e(711).then(n.bind(n,20711))),t("file-filter",()=>n.e(4510).then(n.bind(n,44510))),t("file-tree",()=>n.e(7259).then(n.bind(n,57259))),t("file-tree-toggle",()=>n.e(2479).then(n.bind(n,52479))),t("memex-project-picker",()=>n.e(3603).then(n.bind(n,83603))),t("pin-organization-repo",()=>Promise.all([n.e(93),n.e(2601)]).then(n.bind(n,22601))),t("parsing.ts",()=>Promise.all([n.e(2166),n.e(7319)]).then(n.bind(n,87319))),t("search-input",()=>Promise.all([n.e(5724),n.e(7077),n.e(7823),n.e(3754),n.e(4175),n.e(2840)]).then(n.bind(n,72840))),t("blackbird.ts",()=>n.e(2374).then(n.bind(n,52374))),t("history.ts",()=>n.e(7035).then(n.bind(n,77035))),t("repos.ts",()=>Promise.all([n.e(5724),n.e(7077),n.e(3754),n.e(4175),n.e(9753)]).then(n.bind(n,70737))),t("suggestions.ts",()=>n.e(6355).then(n.bind(n,26355))),t("types.ts",()=>n.e(1191).then(n.bind(n,81191))),t("project-picker",()=>Promise.all([n.e(8174),n.e(3682),n.e(7768)]).then(n.bind(n,17768))),t("slash-command-toolbar-button",()=>n.e(613).then(n.bind(n,613))),t("monthly-spend-graph",()=>Promise.all([n.e(1038),n.e(5375)]).then(n.bind(n,65375))),t("turbo-staffbar",()=>n.e(3399).then(n.bind(n,13399))),t("turbo-staffbar-preview",()=>n.e(9745).then(n.bind(n,59745))),t("themed-picture",()=>n.e(1504).then(n.bind(n,71504))),t("profile-pins",()=>Promise.all([n.e(93),n.e(1330)]).then(n.bind(n,1330))),t("emoji-picker",()=>n.e(6946).then(n.bind(n,96946))),t("edit-hook-secret",()=>n.e(7887).then(n.bind(n,7887))),t("insights-query",()=>n.e(5454).then(n.bind(n,75454))),t("remote-clipboard-copy",()=>Promise.all([n.e(5724),n.e(296)]).then(n.bind(n,50296))),t("series-table",()=>n.e(4922).then(n.bind(n,14922))),t("line-chart",()=>Promise.all([n.e(1038),n.e(1457),n.e(2539),n.e(4874)]).then(n.bind(n,94874))),t("bar-chart",()=>Promise.all([n.e(1038),n.e(1457),n.e(2539),n.e(9924)]).then(n.bind(n,9924))),t("column-chart",()=>Promise.all([n.e(1038),n.e(1457),n.e(2539),n.e(9352)]).then(n.bind(n,29352))),t("stacked-area-chart",()=>Promise.all([n.e(1038),n.e(1457),n.e(2539),n.e(2597)]).then(n.bind(n,72597))),t("presence-avatars",()=>n.e(6427).then(n.bind(n,66427))),t("pulse-authors-graph",()=>Promise.all([n.e(218),n.e(6917)]).then(n.bind(n,26917))),t("stacks-input-config-view",()=>Promise.all([n.e(5724),n.e(93),n.e(7295)]).then(n.bind(n,57295))),t("community-contributions-graph",()=>Promise.all([n.e(218),n.e(3972)]).then(n.bind(n,13972))),t("discussion-page-views-graph",()=>Promise.all([n.e(218),n.e(224)]).then(n.bind(n,60224))),t("discussions-daily-contributors",()=>Promise.all([n.e(218),n.e(1666)]).then(n.bind(n,71666))),t("discussions-new-contributors",()=>Promise.all([n.e(218),n.e(313)]).then(n.bind(n,20313))),t("code-frequency-graph",()=>Promise.all([n.e(218),n.e(3759),n.e(3730)]).then(n.bind(n,53730))),t("contributors-graph",()=>Promise.all([n.e(218),n.e(3759),n.e(7275),n.e(7432),n.e(8562)]).then(n.bind(n,38562))),t("org-insights-graph",()=>Promise.all([n.e(218),n.e(3759),n.e(5670),n.e(6401)]).then(n.bind(n,36401))),t("traffic-clones-graph",()=>Promise.all([n.e(5724),n.e(218),n.e(3759),n.e(1886),n.e(3010)]).then(n.bind(n,33010))),t("traffic-visitors-graph",()=>Promise.all([n.e(5724),n.e(218),n.e(3759),n.e(1886),n.e(5897)]).then(n.bind(n,15897))),t("commit-activity-graph",()=>Promise.all([n.e(218),n.e(3759),n.e(7275),n.e(5883)]).then(n.bind(n,35883))),t("marketplace-insights-graph",()=>Promise.all([n.e(218),n.e(3759),n.e(1886),n.e(6877)]).then(n.bind(n,36877))),t("user-sessions-map",()=>Promise.all([n.e(218),n.e(7275),n.e(1147),n.e(5676)]).then(n.bind(n,45676))),t("reload-after-polling",()=>n.e(33).then(n.bind(n,33))),t("package-dependencies-security-graph",()=>Promise.all([n.e(218),n.e(770)]).then(n.bind(n,40770))),t(".js-sub-dependencies",()=>n.e(8422).then(n.bind(n,28422))),t("network-graph",()=>Promise.all([n.e(4386),n.e(2941)]).then(n.bind(n,2941))),t("business-audit-log-map",()=>Promise.all([n.e(218),n.e(7275),n.e(1147),n.e(3682),n.e(5183)]).then(n.bind(n,45183))),t("inline-machine-translation",()=>n.e(935).then(n.bind(n,20935)))}},d=>{var m=h(o=>d(d.s=o),"__webpack_exec__"),n=m(77401)}]);})();

//# sourceMappingURL=element-registry-b829f65f1cce.js.map