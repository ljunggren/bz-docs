"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4550],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>b});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(o),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return o?n.createElement(b,l(l({ref:t},c),{},{components:o})):n.createElement(b,l({ref:t},c))}));function b(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<r;u++)l[u]=o[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7518:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=o(7462),a=(o(7294),o(3905));const r={id:"toolbar",title:"The toolbar"},l=void 0,i={unversionedId:"tool-views/toolbar",id:"tool-views/toolbar",title:"The toolbar",description:"example image",source:"@site/docs/tool-views/toolbar.mdx",sourceDirName:"tool-views",slug:"/tool-views/toolbar",permalink:"/docs/tool-views/toolbar",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tool-views/toolbar.mdx",tags:[],version:"current",frontMatter:{id:"toolbar",title:"The toolbar"},sidebar:"docs",previous:{title:"The top bar",permalink:"/docs/tool-views/topbar"},next:{title:"Record / Play",permalink:"/docs/tool-views/record"}},s={},u=[{value:"Switch view: Table / GUI",id:"switch-view-table--gui",level:6},{value:"Navigate to parent",id:"navigate-to-parent",level:6},{value:"Expand action rows",id:"expand-action-rows",level:6},{value:"Lock",id:"lock",level:6},{value:"Undo / Redo",id:"undo--redo",level:6},{value:"Delete",id:"delete",level:6},{value:"Disable",id:"disable",level:6},{value:"Group",id:"group",level:6},{value:"Generate test case",id:"generate-test-case",level:6},{value:"Cut / Copy /Paste",id:"cut--copy-paste",level:6},{value:"Kebab menu (...)",id:"kebab-menu-",level:6}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"example image",src:o(4467).Z,title:"Tool bar",width:"928",height:"714"})),(0,a.kt)("h6",{id:"switch-view-table--gui"},"Switch view: Table / GUI"),(0,a.kt)("p",null,"The switch view button toggles between table and diagram view."),(0,a.kt)("p",null,"The table view should be used when authoring tests, and is the view you will use a majority of the time. The GUI will is useful to understand how the test intercats with other tests. "),(0,a.kt)("h6",{id:"navigate-to-parent"},"Navigate to parent"),(0,a.kt)("p",null,"Navigate up the testing tree. "),(0,a.kt)("h6",{id:"expand-action-rows"},"Expand action rows"),(0,a.kt)("p",null,"Expand the action rows to show more test information. The expanded view is useful to troubleshoot passing of parameters and customized exit conditions. "),(0,a.kt)("h6",{id:"lock"},"Lock"),(0,a.kt)("p",null,"Lock the test case to prevent other team member from modifying the test. As tests are auto-saved in Boozang and all other team members recieve these updates automatically, all tests are unlocked by default. "),(0,a.kt)("h6",{id:"undo--redo"},"Undo / Redo"),(0,a.kt)("p",null,"Undo or Redo latest modification. "),(0,a.kt)("h6",{id:"delete"},"Delete"),(0,a.kt)("p",null,'Deletes one or several actions.  You can also use the "Delete" key. '),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Tip: Use Ctrl/CMD functions to multi-select.")),(0,a.kt)("h6",{id:"disable"},"Disable"),(0,a.kt)("p",null,"A disabled action is skipped when a test is run. Useful to debug tests. "),(0,a.kt)("h6",{id:"group"},"Group"),(0,a.kt)("p",null,"The group function group's actions together. This allows you do keep your test in order, and to skip a set of actions using the exit condition Exit Group. By using Else-group, this can be used to implement simple conditional functionality (compare: if / else)"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Tip: Use Ctrl/CMD functions to multi-select actions.")),(0,a.kt)("h6",{id:"generate-test-case"},"Generate test case"),(0,a.kt)("p",null,"Breaks up a group of actions into a separate test and replaces the group with a reference to that test (Plug-test case). It allows you to quickly refactor your tests to remove duplicate action sequences."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Tip: Use Ctrl/CMD functions to multi-select.")),(0,a.kt)("h6",{id:"cut--copy-paste"},"Cut / Copy /Paste"),(0,a.kt)("p",null,"Standard Cut functionality. Use Cut and Paste to move actions between tests, tests between modules, or data between tests and modules."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Tip: Use Ctrl/CMD functions to multi-select.")),(0,a.kt)("h6",{id:"kebab-menu-"},"Kebab menu (...)"),(0,a.kt)("p",null,"This menu contains functions that are used less frequently."))}p.isMDXComponent=!0},4467:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/toolbar-2a3d2d97e1b1566419ef31ee9c241992.png"}}]);