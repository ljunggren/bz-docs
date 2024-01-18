"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2630],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={id:"settings",title:"Settings"},i=void 0,s={unversionedId:"the-tool/settings",id:"the-tool/settings",title:"Settings",description:"Environments",source:"@site/docs/the-tool/settings.mdx",sourceDirName:"the-tool",slug:"/the-tool/settings",permalink:"/docs/the-tool/settings",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/the-tool/settings.mdx",tags:[],version:"current",frontMatter:{id:"settings",title:"Settings"}},l={},c=[{value:"Environments",id:"environments",level:2},{value:"Content Policy",id:"content-policy",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"environments"},"Environments"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"environment",src:n(9948).Z,width:"928",height:"716"})),(0,o.kt)("p",null,"In the Environment tab, you can find several useful functionalities. You can manage environments and different application interfaces, configure settings on an application interface level and also setup AI login/logout for different roles/users."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enviroment and application interfaces")),(0,o.kt)("p",null,"There has been some confusion around environment and application interfaces, so it's important to make sure you get this right as it will save you potential work in the future. Environments signify an environment, such as ",(0,o.kt)("em",{parentName:"p"},"development"),", ",(0,o.kt)("em",{parentName:"p"},"staging"),", ",(0,o.kt)("em",{parentName:"p"},"QA")," or ",(0,o.kt)("em",{parentName:"p"},"production"),". By specifying different entry URLs for these environments, test become completely re-usable. This means there is no need to maintain different tests or projects across different environments. Simply change the environment setting and re-run the same test."),(0,o.kt)("p",null,"The application interface setting handles when there are different applications within the same environment. For instance, in the E-commerce case, there might be a ",(0,o.kt)("em",{parentName:"p"},"storefront")," and a ",(0,o.kt)("em",{parentName:"p"},"managememt")," interface. When creating a test, pick the interface that the test is for. If this changes during the project, it has to be changed in one place, not across several tests."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Advanced / Configure")),(0,o.kt)("p",null,"This setting allows you to configure certain things on an Environment / App interface level. These settings will typically be things that could vary across environments, such as delays and other performance-related settings. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"AI login / logout (Authorization Setting)")),(0,o.kt)("p",null,"This allows the user to define several user roles and automatically generate the login and logout scenarios for these roles. The user roles can be set as pre-requisites for tests, automatically switching between users. For more information, read more under the ",(0,o.kt)("strong",{parentName:"p"},"Model-based testing")," chapter. "),(0,o.kt)("h2",{id:"content-policy"},"Content Policy"),(0,o.kt)("p",null,"The content policy contains several advanced features. Nevertheless, spending some time here to fine-tune the project can increase the stability of tests and also speed up test creation significantly."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ignore validation on pop window")),(0,o.kt)("p",null,"When checked, any pop windows (alerts, prompts, confirm pop-up dialogs) will not be verified by Boozang. When un-checked, Boozang will add an assertion during recording based on pop windows that appeared. On playing back the tests, Boozang will make sure that the same pop windows appear as during the recording and fail the test otherwise. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ignore Classes")),(0,o.kt)("p",null,"Normally when clicking or asserting an element, classes are ignored. There is also an explicit setting for you to highlight your dynamic classes to make sure it\xb4s ignored. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Text Attribute")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Clickable Elements"))),(0,o.kt)("p",null,"List of elements that are clickable in your application. Add elements here to be able to easily capture clicks on these elements during recording. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Attribute Content for Autofill")),(0,o.kt)("p",null,"Use this to set regular expressions to be used for content generation."))}u.isMDXComponent=!0},9948:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/environment-3278f6ce7b27ad66992c5599cf4db4ca.png"}}]);